import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
import type { AppLocale } from '@/lib/i18n/config';
import BlogClient, { type Post } from './BlogClient';

const WP = 'https://blog.geotapp.com';
const HEADERS = { host: 'blog.geotapp.com', 'x-geotapp-proxy': '1', 'x-forwarded-proto': 'https' };
// 8 s timeout per le fetch WP — evita che il build SSG si blocchi se il server è lento.
// cache: 'no-store' previene il deadlock Next.js 16 tra next.revalidate e AbortSignal:
// con next.revalidate i worker deduplicano il fetch e il signal non si propaga, bloccando il build.
function wpFetch(url: string): Promise<Response> {
  return fetch(url, { headers: HEADERS, cache: 'no-store', signal: AbortSignal.timeout(8000) });
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

// Polylang's lang= param doesn't filter via REST API.
// Detect language from WP permalink: IT → /blog/YEAR/..., others → /blog/{locale}/YEAR/...
function isLocalePost(link: string, locale: string): boolean {
  try {
    const afterBlog = new URL(link).pathname.replace(/^\/blog\//, '');
    if (locale === 'it') return !/^[a-z]{2}\//.test(afterBlog);
    return afterBlog.startsWith(`${locale}/`);
  } catch {
    return false;
  }
}

async function fetchAllPosts(): Promise<{ id: number; slug: string; title: any; excerpt: any; date: string; link: string; featured_media: number }[]> {
  const first = await wpFetch(
    `${WP}/wp-json/wp/v2/posts/?per_page=100&page=1&_fields=id,slug,title,excerpt,date,link,featured_media&status=publish`,
  );
  if (!first.ok) return [];
  const totalPages = parseInt(first.headers.get('x-wp-totalpages') ?? '1', 10);
  const firstData = await first.json();

  const rest = totalPages > 1
    ? await Promise.all(
        Array.from({ length: totalPages - 1 }, (_, i) =>
          wpFetch(`${WP}/wp-json/wp/v2/posts/?per_page=100&page=${i + 2}&_fields=id,slug,title,excerpt,date,link,featured_media&status=publish`)
            .then((r) => r.ok ? r.json() : [])
            .catch(() => [])
        )
      )
    : [];

  return [firstData, ...rest].flat().filter(Boolean);
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


async function fetchPosts(locale: string): Promise<Post[]> {
  try {
    const all = await fetchAllPosts();
    const filtered = all.filter((p) => isLocalePost(p.link ?? '', locale));
    const mediaIds = [...new Set(filtered.map((p) => p.featured_media).filter((id) => id > 0))];
    const mediaMap = await fetchMediaMap(mediaIds);

    return filtered.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: stripHtml(p.title?.rendered ?? ''),
      excerpt: stripHtml(p.excerpt?.rendered ?? '').slice(0, 160),
      date: p.date,
      url: normalizeUrl(p.link, p.slug),
      image: mediaMap.get(p.featured_media) ?? null,
    }));
  } catch {
    return [];
  }
}

export { generateStaticParams };

// Fetch real posts from WP at request time — Cloudflare Worker renders on demand.
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

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const posts = await fetchPosts(locale);
  return <BlogClient locale={locale as AppLocale} posts={posts} />;
}
