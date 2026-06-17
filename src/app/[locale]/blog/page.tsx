import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
import type { AppLocale } from '@/lib/i18n/config';
import BlogClient, { type Post } from './BlogClient';
import { JsonLd } from '@/components/seo/JsonLd';
import { detectPostLocale } from '@/lib/blog-locale';

const WP = 'https://blog.geotapp.com';
const HEADERS = { host: 'blog.geotapp.com', 'x-geotapp-proxy': '1', 'x-forwarded-proto': 'https' };
// 8 s timeout per le fetch WP, evita che il build SSG si blocchi se il server è lento.
// cache: 'no-store' previene il deadlock Next.js 16 tra next.revalidate e AbortSignal:
// con next.revalidate i worker deduplicano il fetch e il signal non si propaga, bloccando il build.
function wpFetch(url: string): Promise<Response> {
  return fetch(url, { headers: HEADERS, cache: 'no-store', signal: AbortSignal.timeout(8000) });
}

// Fetch critico (prima pagina): 2 tentativi, lancia se entrambi falliscono.
// Un singolo hiccup di WP non deve tradursi in una pagina blog vuota servita con HTTP 200.
async function wpFetchOrThrow(url: string, tries = 2): Promise<Response> {
  let lastErr: unknown = null;
  for (let i = 0; i < tries; i++) {
    try {
      const r = await wpFetch(url);
      if (r.ok) return r;
      lastErr = new Error(`WP responded ${r.status}`);
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr ?? new Error('WP fetch failed');
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#8216;/g, '\u2018')
    .replace(/&#8217;/g, '\u2019').replace(/&#8220;/g, '\u201C')
    .replace(/&#8221;/g, '\u201D').replace(/&nbsp;/g, ' ')
    .trim();
}

function normalizeUrl(link: string, slug: string): string {
  try {
    const p = new URL(link);
    if (p.hostname === 'blog.geotapp.com') return `/blog${p.pathname}`;
    if (p.hostname === 'geotapp.com') return p.pathname;
  } catch { /* fallback */ }
  return `/blog/${slug}/`;
}

async function fetchAllPosts(): Promise<{ id: number; slug: string; title: any; excerpt: any; date: string; link: string; featured_media: number; categories: number[]; class_list?: string[]; content?: any }[]> {
  // class_list carries the language-suffixed category used by detectPostLocale.
  const FIELDS = 'id,slug,title,excerpt,content,date,link,featured_media,categories,class_list';
  // Lancia su fallimento (rete/non-200): distingue "WP irraggiungibile" da "WP ok ma 0 post".
  const first = await wpFetchOrThrow(
    `${WP}/wp-json/wp/v2/posts/?per_page=100&page=1&_fields=${FIELDS}&status=publish`,
  );
  const totalPages = parseInt(first.headers.get('x-wp-totalpages') ?? '1', 10);
  const firstData = await first.json();

  const rest = totalPages > 1
    ? await Promise.all(
        Array.from({ length: totalPages - 1 }, (_, i) =>
          wpFetch(`${WP}/wp-json/wp/v2/posts/?per_page=100&page=${i + 2}&_fields=${FIELDS}&status=publish`)
            .then((r) => r.ok ? r.json() : [])
            .catch(() => [])
        )
      )
    : [];

  return [firstData, ...rest].flat().filter(Boolean);
}

async function fetchCategoryMap(locale: string): Promise<Map<number, { slug: string; name: string }>> {
  try {
    const r = await wpFetch(`${WP}/wp-json/wp/v2/categories?per_page=100&hide_empty=true&_fields=id,slug,name,count`);
    if (!r.ok) return new Map();
    const data: Array<{ id: number; slug: string; name: string; count: number }> = await r.json();
    // Keep only categories relevant to the current locale:
    // IT → slugs without a language suffix (e.g. "gestione-presenze")
    // Other locales → slugs ending in "-{locale}" (e.g. "gestione-presenze-en")
    const OTHER_LANGS = ['en','de','fr','es','pt','da','sv','nb','nl','ru'];
    const map = new Map<number, { slug: string; name: string }>();
    for (const cat of data) {
      const hasLangSuffix = OTHER_LANGS.some((l) => cat.slug.endsWith(`-${l}`));
      if (locale === 'it') {
        if (!hasLangSuffix) map.set(cat.id, { slug: cat.slug, name: cat.name });
      } else {
        if (cat.slug.endsWith(`-${locale}`)) map.set(cat.id, { slug: cat.slug, name: cat.name });
      }
    }
    return map;
  } catch {
    return new Map();
  }
}

async function fetchMediaMap(ids: number[]): Promise<Map<number, string>> {
  if (ids.length === 0) return new Map();
  // WP caps per_page at 100; batch into chunks of 100
  const chunks: number[][] = [];
  for (let i = 0; i < ids.length; i += 100) chunks.push(ids.slice(i, i + 100));
  try {
    const results = await Promise.all(chunks.map((chunk) =>
      wpFetch(`${WP}/wp-json/wp/v2/media?include=${chunk.join(',')}&per_page=100&_fields=id,source_url,media_details`)
        .then((r) => r.ok ? r.json() : [])
        .catch(() => [])
    ));
    const data: any[] = results.flat();
    const map = new Map<number, string>();
    for (const m of data) {
      const sizes = m.media_details?.sizes ?? {};
      const url = (sizes.medium_large ?? sizes.large ?? sizes.medium ?? sizes.full)?.source_url ?? m.source_url;
      if (url) map.set(m.id, url);
    }
    return map;
  } catch {
    return new Map();
  }
}


async function buildPostList(all: Awaited<ReturnType<typeof fetchAllPosts>>, locale: string): Promise<Post[]> {
  const catMap = await fetchCategoryMap(locale);
  const filtered = all.filter((p) => detectPostLocale(p) === locale);
  if (filtered.length === 0) return [];
  const mediaIds = [...new Set(filtered.map((p) => p.featured_media).filter((id) => id > 0))];
  const mediaMap = await fetchMediaMap(mediaIds);

  return filtered.map((p) => {
    const contentText = stripHtml(p.content?.rendered ?? '');
    const wordCount = contentText.trim() ? contentText.trim().split(/\s+/).length : 0;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));
    const cats = (p.categories ?? [])
      .map((id: number) => catMap.get(id))
      .filter(Boolean) as Array<{ slug: string; name: string }>;

    return {
      id: p.id,
      slug: p.slug,
      title: stripHtml(p.title?.rendered ?? ''),
      excerpt: stripHtml(p.excerpt?.rendered ?? '').slice(0, 160),
      date: p.date,
      url: normalizeUrl(p.link, p.slug),
      image: mediaMap.get(p.featured_media) ?? null,
      categories: cats,
      readingTime,
    };
  });
}

// Cache della lista post per locale, persistente tra richieste nello stesso isolate Worker.
// Due scopi SEO:
//  - TTL fresco: entro CACHE_TTL_MS serviamo dalla cache senza colpire WP (veloce per i crawler,
//    meno carico sul backend).
//  - stale-on-error: se WP fallisce, serviamo l'ultima lista buona invece di una pagina vuota.
// Se WP fallisce e non c'e' cache disponibile, rilanciamo -> HTTP 500 (mai un 200 "blog vuoto",
// che Google interpreterebbe come soft-404 / thin content e potrebbe deindicizzare l'hub).
const POST_CACHE = new Map<string, { posts: Post[]; ts: number }>();
const CACHE_TTL_MS = 5 * 60 * 1000;

async function fetchPosts(locale: string): Promise<Post[]> {
  const cached = POST_CACHE.get(locale);
  if (cached && Date.now() - cached.ts < CACHE_TTL_MS) return cached.posts;
  try {
    const all = await fetchAllPosts();
    let posts = await buildPostList(all, locale);
    // Fallback to English if no posts exist for this locale
    if (posts.length === 0 && locale !== 'en') {
      posts = await buildPostList(all, 'en');
    }
    if (posts.length > 0) {
      POST_CACHE.set(locale, { posts, ts: Date.now() });
      return posts;
    }
    // WP ha risposto correttamente ma non risultano post: empty-state legittimo, HTTP 200.
    return [];
  } catch {
    // WP irraggiungibile/errore: serviamo stale se disponibile, altrimenti 500 (mai soft-404).
    if (cached) return cached.posts;
    throw new Error('Blog temporarily unavailable');
  }
}

export { generateStaticParams };

// Fetch real posts from WP at request time - Cloudflare Worker renders on demand.
// force-dynamic skips SSG for this route so the build doesn't hang on WP API calls.
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const b = getDictionary(locale as AppLocale).blog;
  return {
    title: { absolute: b.meta_title },
    description: b.meta_desc,
    alternates: buildLocaleAlternates(locale, '/blog/'),
    openGraph: {
      url: `https://geotapp.com/${locale}/blog/`,
      type: 'website',
      title: b.meta_title,
      description: b.meta_desc,
    },
  };
}

// Structured data Blog + BlogPosting: rende esplicito alle macchine (Google, e soprattutto i
// motori AI che prendono un solo snapshot e non eseguono bene il JS) che questo hub e' un blog
// con questi articoli. Emesso SOLO se ci sono post: un blogPost[] vuoto segnalerebbe "blog vuoto".
function buildBlogJsonLd(locale: string, posts: Post[]): Record<string, unknown> | null {
  if (posts.length === 0) return null;
  const dict = getDictionary(locale as AppLocale).blog;
  const hubUrl = `https://geotapp.com/${locale}/blog/`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${hubUrl}#blog`,
    url: hubUrl,
    name: dict.meta_title,
    description: dict.meta_desc,
    inLanguage: locale,
    publisher: { '@type': 'Organization', name: 'GeoTapp', url: 'https://geotapp.com/' },
    blogPost: posts.slice(0, 50).map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `https://geotapp.com${p.url}`,
      datePublished: p.date,
      inLanguage: locale,
      ...(p.image ? { image: p.image } : {}),
    })),
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const posts = await fetchPosts(locale);
  const blogLd = buildBlogJsonLd(locale, posts);
  return (
    <>
      {blogLd && <JsonLd data={blogLd} />}
      <BlogClient locale={locale as AppLocale} posts={posts} />
    </>
  );
}
