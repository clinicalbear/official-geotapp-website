import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

const WP = 'https://blog.geotapp.com';
const HEADERS = { host: 'blog.geotapp.com', 'x-geotapp-proxy': '1', 'x-forwarded-proto': 'https' };

function wpFetch(url: string): Promise<Response> {
  return fetch(url, { headers: HEADERS, cache: 'no-store', signal: AbortSignal.timeout(10000) });
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

function extractHeadings(html: string): Array<{ id: string; text: string; level: number }> {
  const regex = /<h([23])[^>]*(?:id="([^"]*)")?[^>]*>(.*?)<\/h[23]>/gi;
  const headings: Array<{ id: string; text: string; level: number }> = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    const level = parseInt(match[1]);
    const text = match[3].replace(/<[^>]*>/g, '').trim();
    const id = match[2] || text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    headings.push({ id, text, level });
  }
  return headings;
}

function addHeadingIds(html: string): string {
  return html.replace(/<h([23])([^>]*)>(.*?)<\/h[23]>/gi, (match, level, attrs, text) => {
    if (attrs.includes('id=')) return match;
    const id = text.replace(/<[^>]*>/g, '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
  });
}

function parseSlug(slugSegments: string[]): { locale: string; articleSlug: string } {
  const first = slugSegments[0];
  const isLangCode = /^[a-z]{2}$/.test(first) && first !== 'it';
  const locale = isLangCode ? first : 'it';
  const articleSlug = slugSegments[slugSegments.length - 1];
  return { locale, articleSlug };
}

interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  link: string;
  featured_media: number;
  categories: number[];
  meta?: { yoast_wpseo_title?: string; yoast_wpseo_metadesc?: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; media_details?: { sizes?: Record<string, { source_url: string }> } }>;
    'wp:term'?: Array<Array<{ id: number; slug: string; name: string }>>;
  };
}

async function fetchPost(articleSlug: string): Promise<WPPost | null> {
  try {
    const res = await wpFetch(
      `${WP}/wp-json/wp/v2/posts/?slug=${encodeURIComponent(articleSlug)}&_embed=wp:featuredmedia,wp:term&_fields=id,slug,title,excerpt,content,date,modified,link,featured_media,categories,meta`,
    );
    if (!res.ok) return null;
    const posts: WPPost[] = await res.json();
    return posts.length > 0 ? posts[0] : null;
  } catch {
    return null;
  }
}

function resolvePostData(post: WPPost, locale: string) {
  const title = stripHtml(post.title.rendered);
  const content = post.content.rendered;
  const excerpt = stripHtml(post.excerpt.rendered).slice(0, 160);
  const date = post.date;

  const media = post._embedded?.['wp:featuredmedia']?.[0];
  const sizes = media?.media_details?.sizes ?? {};
  const featuredImage = sizes.large?.source_url ?? sizes.medium_large?.source_url ?? sizes.medium?.source_url ?? media?.source_url ?? null;

  const categories = post._embedded?.['wp:term']?.[0]?.map((t) => ({ id: t.id, slug: t.slug, name: t.name })) ?? [];

  const yoastTitle = post.meta?.yoast_wpseo_title || title;
  const yoastDesc = post.meta?.yoast_wpseo_metadesc || excerpt;

  const contentText = stripHtml(content);
  const wordCount = contentText.trim() ? contentText.trim().split(/\s+/).length : 0;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const contentWithIds = addHeadingIds(content);
  const headings = extractHeadings(contentWithIds);

  return { title, content: contentWithIds, excerpt, date, featuredImage, categories, yoastTitle, yoastDesc, readingTime, headings, locale };
}

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { locale, articleSlug } = parseSlug(slug);
  const post = await fetchPost(articleSlug);
  if (!post) return { title: 'Not Found' };

  const { title, yoastTitle, yoastDesc, featuredImage } = resolvePostData(post, locale);
  const canonical = `https://geotapp.com/blog/${slug.join('/')}/`;

  return {
    title: { absolute: yoastTitle },
    description: yoastDesc,
    alternates: { canonical },
    openGraph: {
      url: canonical,
      type: 'article',
      title: yoastTitle,
      description: yoastDesc,
      ...(featuredImage ? { images: [{ url: featuredImage }] } : {}),
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const { locale, articleSlug } = parseSlug(slug);
  const post = await fetchPost(articleSlug);
  if (!post) notFound();

  const { title, content, date, readingTime } = resolvePostData(post, locale);

  return (
    <div>
      <h1>{title}</h1>
      <p>{locale} | {date} | {readingTime} min</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
