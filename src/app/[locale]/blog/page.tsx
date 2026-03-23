import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
import type { AppLocale } from '@/lib/i18n/config';
import BlogClient, { type Post } from './BlogClient';

const WP = 'https://blog.geotapp.com';
const HEADERS = { host: 'blog.geotapp.com', 'x-geotapp-proxy': '1', 'x-forwarded-proto': 'https' };
const CACHE = { next: { revalidate: 3600 } };

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
  const first = await fetch(
    `${WP}/wp-json/wp/v2/posts/?per_page=100&page=1&_fields=id,slug,title,excerpt,date,link,featured_media&status=publish`,
    { headers: HEADERS, ...CACHE },
  );
  if (!first.ok) return [];
  const totalPages = parseInt(first.headers.get('x-wp-totalpages') ?? '1', 10);
  const firstData = await first.json();

  const rest = totalPages > 1
    ? await Promise.all(
        Array.from({ length: totalPages - 1 }, (_, i) =>
          fetch(`${WP}/wp-json/wp/v2/posts/?per_page=100&page=${i + 2}&_fields=id,slug,title,excerpt,date,link,featured_media&status=publish`,
            { headers: HEADERS, ...CACHE })
            .then((r) => r.ok ? r.json() : [])
        )
      )
    : [];

  return [firstData, ...rest].flat().filter(Array.isArray(firstData) ? Boolean : Boolean);
}

async function fetchMediaMap(ids: number[]): Promise<Map<number, string>> {
  if (ids.length === 0) return new Map();
  try {
    const res = await fetch(
      `${WP}/wp-json/wp/v2/media?include=${ids.join(',')}&per_page=${ids.length}&_fields=id,source_url,media_details`,
      { headers: HEADERS, ...CACHE },
    );
    if (!res.ok) return new Map();
    const data: any[] = await res.json();
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
