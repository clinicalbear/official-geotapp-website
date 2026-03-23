// RSS 2.0 feed per locale — served at /{locale}/blog/feed/
// Fetches posts from WP REST API with lang={locale} param (Polylang).
// Bypasses the /blog/ Cloudflare redirect by hitting blog.geotapp.com directly.

import { getDictionary } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';

const BASE_URL = 'https://geotapp.com';
const WP_DIRECT = 'https://blog.geotapp.com';

type WpPost = {
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  link: string;
};

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8216;/g, '\u2018')
    .replace(/&#8217;/g, '\u2019')
    .replace(/&#8220;/g, '\u201C')
    .replace(/&#8221;/g, '\u201D')
    .replace(/&nbsp;/g, ' ')
    .trim();
}

function normalizePostUrl(link: string, slug: string): string {
  try {
    const parsed = new URL(link);
    if (parsed.hostname === 'blog.geotapp.com') return `${BASE_URL}/blog${parsed.pathname}`;
    if (parsed.hostname === 'geotapp.com') return `${BASE_URL}${parsed.pathname}`;
  } catch { /* fallback */ }
  return `${BASE_URL}/blog/${slug}/`;
}

async function fetchPosts(locale: string): Promise<WpPost[]> {
  try {
    const res = await fetch(
      `${WP_DIRECT}/wp-json/wp/v2/posts/?per_page=20&_fields=slug,title,excerpt,date,modified,link&lang=${locale}&status=publish`,
      {
        headers: {
          host: new URL(WP_DIRECT).host,
          'x-geotapp-proxy': '1',
          'x-forwarded-proto': 'https',
        },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;
  const b = getDictionary(locale as AppLocale).blog;
  const posts = await fetchPosts(locale);

  const feedUrl = `${BASE_URL}/${locale}/blog/feed/`;
  const blogUrl = `${BASE_URL}/${locale}/blog/`;

  const items = posts
    .map((post) => {
      const url = normalizePostUrl(post.link, post.slug);
      const title = stripHtml(post.title.rendered);
      const desc = stripHtml(post.excerpt.rendered).slice(0, 300);
      const pubDate = new Date(post.date).toUTCString();
      return `
    <item>
      <title><![CDATA[${title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${desc}]]></description>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${b.meta_title}]]></title>
    <link>${blogUrl}</link>
    <description><![CDATA[${b.meta_desc}]]></description>
    <language>${locale}</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
