import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import ArticleHero from '@/components/blog/ArticleHero';
import ArticleContent from '@/components/blog/ArticleContent';
import ArticleDisclaimer from '@/components/blog/ArticleDisclaimer';
import ArticleSidebar from '@/components/blog/ArticleSidebar';
import ArticleFooter from '@/components/blog/ArticleFooter';
import ReadingProgress from '@/components/blog/ReadingProgress';
import BackToTop from '@/components/blog/BackToTop';
import NewsletterInline from '@/components/blog/NewsletterInline';
import LeadMagnetInline from '@/components/blog/LeadMagnetInline';
import MapBackground from '@/components/blog/MapBackground';
import Comments, { type CommentItem } from '@/components/blog/Comments';
import { detectPostLocale } from '@/lib/blog-locale';
import { canonicalBlogPath, requestedBlogPath } from '@/lib/blog-canonical';
import { sanitizeWpHtml } from '@/lib/sanitize-wp';

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
  class_list?: string[];
  featured_media: number;
  categories: number[];
  meta?: { yoast_wpseo_title?: string; yoast_wpseo_metadesc?: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; media_details?: { sizes?: Record<string, { source_url: string }> } }>;
    'wp:term'?: Array<Array<{ id: number; slug: string; name: string }>>;
  };
}

async function fetchPost(articleSlug: string, requestedLocale?: string): Promise<WPPost | null> {
  const url = `${WP}/wp-json/wp/v2/posts/?slug=${encodeURIComponent(articleSlug)}&_embed=wp:featuredmedia,wp:term`;
  // 3 tentativi con backoff: un blip transitorio di WP non deve trasformare un post ESISTENTE
  // in un 404 (rischio deindicizzazione). Una risposta OK con 0 risultati è invece un 404
  // LEGITTIMO (slug inesistente) e non va ritentata.
  for (let i = 0; i < 3; i++) {
    try {
      const res = await wpFetch(url);
      if (res.ok) {
        const posts: WPPost[] = await res.json();
        if (posts.length === 0) return null; // genuino: lo slug non esiste
        // Polylang permette lo stesso slug in lingue diverse: se la query ne ritorna
        // più d'uno, scegli quello che corrisponde alla lingua dell'URL richiesto.
        if (posts.length > 1 && requestedLocale) {
          const match = posts.find((p) => detectPostLocale(p) === requestedLocale);
          if (match) return match;
        }
        return posts[0];
      }
      // risposta non-ok (5xx / blip): ritenta
    } catch {
      // errore di rete / timeout: ritenta
    }
    if (i < 2) await new Promise((r) => setTimeout(r, 250 * (i + 1)));
  }
  return null;
}

function resolvePostData(post: WPPost, locale: string) {
  const title = stripHtml(post.title.rendered);
  // Allowlist-sanitize il contenuto WP prima del render (difesa in profondità
  // contro XSS da WordPress compromesso, vedi src/lib/sanitize-wp.ts).
  const content = sanitizeWpHtml(post.content.rendered);
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
    // Polylang's lang= REST param does NOT filter (verified), so we fetch a wide
    // window and filter by locale client-side. class_list carries the language-suffixed
    // category used for detection; _fields keeps the payload light despite per_page=100
    // (this runs per request: force-dynamic + no-store).
    const res = await wpFetch(
      `${WP}/wp-json/wp/v2/posts/?exclude=${postId}&per_page=100&_embed=wp:featuredmedia&_fields=id,slug,title,excerpt,date,link,class_list,_links,_embedded`,
    );
    if (!res.ok) return { related: [], more: [] };
    const posts: any[] = await res.json();
    // Only ever show same-language posts. Never fall back to the mixed-language pool.
    const pool = posts.filter((p: any) => detectPostLocale(p) === locale);
    const related = pool.slice(0, 3).map(mapRelatedPost);
    const more = pool.slice(3, 6).map(mapRelatedPost);
    return { related, more };
  } catch {
    return { related: [], more: [] };
  }
}

async function fetchComments(postId: number): Promise<CommentItem[]> {
  try {
    const res = await wpFetch(
      `${WP}/wp-json/wp/v2/comments/?post=${postId}&per_page=100&order=asc&orderby=date&_fields=id,author_name,date,content,author_avatar_urls`,
    );
    if (!res.ok) return [];
    const data: Array<{
      id: number;
      author_name?: string;
      date: string;
      content?: { rendered?: string };
      author_avatar_urls?: Record<string, string>;
    }> = await res.json();
    return data.map((c) => ({
      id: c.id,
      author: stripHtml(c.author_name ?? ''),
      date: c.date,
      html: sanitizeWpHtml(c.content?.rendered ?? ''),
      avatar: c.author_avatar_urls?.['48'] ?? null,
    }));
  } catch {
    return [];
  }
}

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { locale: urlLocale, articleSlug } = parseSlug(slug);
  const post = await fetchPost(articleSlug, urlLocale);
  if (!post) return { title: 'Not Found' };

  // Lingua e canonical dal permalink REALE del post, non dall'URL richiesto:
  // così l'URL senza prefisso di un post tradotto non si auto-referenzia.
  const locale = detectPostLocale(post);
  const { title, yoastTitle, yoastDesc, featuredImage } = resolvePostData(post, locale);
  const canonical = `https://geotapp.com${canonicalBlogPath(post)}`;

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

// Articoli che mostrano un lead magnet al posto della newsletter generica.
const ARTICLE_LEAD_MAGNETS: Record<string, string> = {
  'fac-simile-informativa-gps-dipendenti-2026': 'informativa-gps',
};

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const { locale: urlLocale, articleSlug } = parseSlug(slug);
  const post = await fetchPost(articleSlug, urlLocale);
  if (!post) notFound();

  // Lingua dal permalink REALE del post (post.link), non dal prefisso dell'URL
  // richiesto. Se l'URL richiesto non coincide col canonical (es. post tradotto
  // raggiunto senza prefisso lingua, o con un prefisso errato) → 301 al canonical.
  // Elimina il contenuto duplicato in modo sistemico, per tutti i post.
  const canonicalPath = canonicalBlogPath(post);
  if (requestedBlogPath(slug) !== canonicalPath) {
    permanentRedirect(canonicalPath); // 308, equivalente permanente del 301
  }
  const locale = detectPostLocale(post);

  const { title, content: contentWithIds, excerpt, date, modified, featuredImage, categories, categoryIds, readingTime, headings } = resolvePostData(post, locale);

  const canonicalUrl = `https://geotapp.com${canonicalPath}`;

  const [{ related: relatedPosts, more: morePosts }, comments] = await Promise.all([
    fetchAllRelated(post.id, locale),
    fetchComments(post.id),
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: excerpt,
    image: featuredImage || undefined,
    datePublished: date,
    dateModified: modified || date,
    author: {
      '@type': 'Person',
      '@id': 'https://geotapp.com/#founder',
      name: 'Michele Petraroli',
      url: 'https://geotapp.com/chi-siamo/',
      sameAs: [
        'https://www.linkedin.com/in/michele-petraroli-532545397/',
        'https://featured.com/p/michele-petraroli',
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'GeoTapp',
      url: 'https://geotapp.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://geotapp.com/logo.webp',
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
          <ArticleContent
            html={contentWithIds}
            locale={locale}
            newsletter={
              ARTICLE_LEAD_MAGNETS[articleSlug]
                ? <LeadMagnetInline key="lead-magnet" magnet={ARTICLE_LEAD_MAGNETS[articleSlug]} locale={locale} />
                : <NewsletterInline key="newsletter" locale={locale} />
            }
          />
          <div className="hidden lg:block w-72 shrink-0 pt-16">
            <ArticleSidebar headings={headings} locale={locale} categories={categories} date={date} readingTime={readingTime} title={title} />
          </div>
        </div>
      </div>

      {/* Disclaimer YMYL, non è consulenza legale (tutti gli articoli, lingua dell'articolo) */}
      <ArticleDisclaimer locale={locale} />

      {/* Comments */}
      <Comments postId={post.id} locale={locale} comments={comments} />

      {/* Related posts + CTA */}
      <ArticleFooter relatedPosts={relatedPosts} morePosts={morePosts} locale={locale} />
    </>
  );
}
