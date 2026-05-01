import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleHero from '@/components/blog/ArticleHero';
import ArticleContent from '@/components/blog/ArticleContent';
import ArticleSidebar from '@/components/blog/ArticleSidebar';
import ArticleFooter from '@/components/blog/ArticleFooter';
import ReadingProgress from '@/components/blog/ReadingProgress';
import BackToTop from '@/components/blog/BackToTop';
import NewsletterInline from '@/components/blog/NewsletterInline';
import MapBackground from '@/components/blog/MapBackground';

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
      `${WP}/wp-json/wp/v2/posts/?slug=${encodeURIComponent(articleSlug)}&_embed=wp:featuredmedia,wp:term`,
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

  const modified = post.modified;
  const categoryIds = post.categories ?? [];

  return { title, content: contentWithIds, excerpt, date, modified, featuredImage, categories, categoryIds, yoastTitle, yoastDesc, readingTime, headings, locale };
}

function normalizeUrl(link: string, slug: string): string {
  try {
    const p = new URL(link);
    if (p.hostname === 'blog.geotapp.com') return `/blog${p.pathname}`;
    if (p.hostname === 'geotapp.com') return p.pathname;
  } catch { /* fallback */ }
  return `/blog/${slug}/`;
}

function isLocalePost(link: string, locale: string): boolean {
  try {
    const afterBlog = new URL(link).pathname.replace(/^\/blog\//, '');
    if (locale === 'it') return !/^[a-z]{2}\//.test(afterBlog);
    return afterBlog.startsWith(`${locale}/`);
  } catch {
    return false;
  }
}

interface RelatedPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
  image: string | null;
}

function mapRelatedPost(p: any): RelatedPost {
  return {
    id: p.id,
    slug: p.slug,
    title: stripHtml(p.title?.rendered ?? ''),
    excerpt: stripHtml(p.excerpt?.rendered ?? '').slice(0, 140),
    date: p.date,
    url: normalizeUrl(p.link, p.slug),
    image: p._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null,
  };
}

async function fetchAllRelated(postId: number, locale: string): Promise<{ related: RelatedPost[]; more: RelatedPost[] }> {
  try {
    // Single fetch: 20 recent posts (excludes current), filter by locale client-side
    const res = await wpFetch(
      `${WP}/wp-json/wp/v2/posts/?exclude=${postId}&per_page=20&_embed=wp:featuredmedia`,
    );
    if (!res.ok) return { related: [], more: [] };
    const posts: any[] = await res.json();
    const localePosts = posts.filter((p: any) => isLocalePost(p.link, locale));
    const pool = localePosts.length >= 6 ? localePosts : posts;
    const related = pool.slice(0, 3).map(mapRelatedPost);
    const more = pool.slice(3, 6).map(mapRelatedPost);
    return { related, more };
  } catch {
    return { related: [], more: [] };
  }
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

  const { title, content: contentWithIds, excerpt, date, modified, featuredImage, categories, categoryIds, readingTime, headings } = resolvePostData(post, locale);

  const canonicalUrl = `https://geotapp.com/blog/${slug.join('/')}/`;

  const { related: relatedPosts, more: morePosts } = await fetchAllRelated(post.id, locale);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: excerpt,
    image: featuredImage || undefined,
    datePublished: date,
    dateModified: modified || date,
    author: {
      '@type': 'Organization',
      name: 'GeoTapp',
      url: 'https://geotapp.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'GeoTapp',
      url: 'https://geotapp.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://geotapp.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `https://geotapp.com/${locale}/blog/` },
      { '@type': 'ListItem', position: 3, name: title },
    ],
  };

  // Detect products from categories for map background color
  const mapProducts: Array<'timetracker' | 'flow' | 'verifier'> = [];
  const catSlugs = categories.map(c => c.slug.toLowerCase()).join(' ');
  if (/gps|track|timbr|presenz|geoloc|clock|attendance|zeit/.test(catSlugs)) mapProducts.push('timetracker');
  if (/gestione|operazioni|business|software|flow|workflow/.test(catSlugs)) mapProducts.push('flow');
  if (/sicur|secur|verif|prov|proof|report|document/.test(catSlugs)) mapProducts.push('verifier');

  return (
    <>
      <MapBackground products={mapProducts.length > 0 ? mapProducts : undefined} />
      <ReadingProgress />
      <BackToTop />

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <ArticleHero
        title={title}
        image={featuredImage}
        categories={categories}
        date={date}
        readingTime={readingTime}
        locale={locale}
      />

      {/* Content + Sidebar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto flex gap-12 px-6">
          <ArticleContent html={contentWithIds} newsletter={<NewsletterInline locale={locale} />} />
          <div className="hidden lg:block w-72 shrink-0 pt-16">
            <ArticleSidebar headings={headings} locale={locale} categories={categories} date={date} readingTime={readingTime} title={title} />
          </div>
        </div>
      </div>

      {/* Related posts + CTA */}
      <ArticleFooter relatedPosts={relatedPosts} morePosts={morePosts} locale={locale} />
    </>
  );
}
