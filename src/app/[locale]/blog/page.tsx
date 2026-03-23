import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
import type { AppLocale } from '@/lib/i18n/config';
import BlogClient, { type Post } from './BlogClient';

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
// We detect language from the WP permalink structure:
//   IT posts: geotapp.com/blog/2026/...       (no locale prefix)
//   Others:   geotapp.com/blog/{locale}/2026/... (locale prefix)
function isLocalePost(link: string, locale: string): boolean {
  try {
    const path = new URL(link).pathname; // e.g. /blog/en/2026/... or /blog/2026/...
    const afterBlog = path.replace(/^\/blog\//, '');
    if (locale === 'it') {
      // Italian posts don't have a 2-letter locale segment
      return !/^[a-z]{2}\//.test(afterBlog);
    }
    return afterBlog.startsWith(`${locale}/`);
  } catch {
    return false;
  }
}

async function fetchPosts(locale: string): Promise<Post[]> {
  try {
    const res = await fetch(
      `https://blog.geotapp.com/wp-json/wp/v2/posts/?per_page=100&_fields=id,slug,title,excerpt,date,link&status=publish`,
      {
        headers: { host: 'blog.geotapp.com', 'x-geotapp-proxy': '1', 'x-forwarded-proto': 'https' },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data
      .filter((p: any) => isLocalePost(p.link ?? '', locale))
      .map((p: any) => ({
        id: p.id,
        slug: p.slug,
        title: stripHtml(p.title?.rendered ?? ''),
        excerpt: stripHtml(p.excerpt?.rendered ?? '').slice(0, 160),
        date: p.date,
        url: normalizeUrl(p.link, p.slug),
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
