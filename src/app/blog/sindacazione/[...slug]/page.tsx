/**
 * Resa di sindacazione: lo stesso articolo del blog, spogliato di tutto ciò che
 * su una piattaforma terza legge come pubblicità (indice laterale, riquadri di
 * trial, newsletter, sondaggio, correlati, commenti).
 *
 * Serve a Medium, che importa una pagina intera e si porta dentro l'arredamento
 * del sito. La pagina dichiara il canonical dell'articolo VERO e si esclude dai
 * motori: non deve mai comparire in ricerca né competere col post originale.
 *
 * Non è una pagina per le persone: gli unici visitatori attesi sono gli
 * importatori delle piattaforme.
 */
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { detectPostLocale } from '@/lib/blog-locale';
import { canonicalBlogPath } from '@/lib/blog-canonical';
import { sanitizeWpHtml } from '@/lib/sanitize-wp';

export const dynamic = 'force-dynamic';

const WP = 'https://blog.geotapp.com';
const HEADERS = { host: 'blog.geotapp.com', 'x-geotapp-proxy': '1', 'x-forwarded-proto': 'https' };

interface WPPost {
  id: number;
  slug: string;
  link: string;
  date: string;
  modified: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  class_list?: string[];
  gtmsa_lang?: string;
}

type Props = { params: Promise<{ slug: string[] }> };

function wpFetch(url: string): Promise<Response> {
  return fetch(url, { headers: HEADERS, cache: 'no-store', signal: AbortSignal.timeout(10000) });
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#8216;/g, '‘')
    .replace(/&#8217;/g, '’').replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”').replace(/&nbsp;/g, ' ')
    .trim();
}

function parseSlug(slugSegments: string[]): { locale: string; articleSlug: string } {
  const first = slugSegments[0];
  const isLangCode = /^[a-z]{2}$/.test(first) && first !== 'it';
  const locale = isLangCode ? first : 'it';
  const articleSlug = slugSegments[slugSegments.length - 1];
  return { locale, articleSlug };
}

async function fetchPost(articleSlug: string, requestedLocale?: string): Promise<WPPost | null> {
  const url = `${WP}/wp-json/wp/v2/posts/?slug=${encodeURIComponent(articleSlug)}`;
  for (let i = 0; i < 3; i++) {
    try {
      const res = await wpFetch(url);
      if (res.ok) {
        const posts: WPPost[] = await res.json();
        if (posts.length === 0) return null;
        if (posts.length > 1 && requestedLocale) {
          const match = posts.find((p) => detectPostLocale(p) === requestedLocale);
          if (match) return match;
        }
        return posts[0];
      }
    } catch {
      /* blip di rete: si ritenta */
    }
    if (i < 2) await new Promise((r) => setTimeout(r, 250 * (i + 1)));
  }
  return null;
}

/**
 * Toglie i riquadri di trial che la pipeline editoriale scrive DENTRO il
 * contenuto WordPress. Sono `<div class="article-cta">` senza div annidati,
 * quindi la non-greedy fino al primo `</div>` chiude esattamente il blocco.
 */
function stripCtaBlocks(html: string): string {
  return html.replace(/<div class="article-cta">[\s\S]*?<\/div>/g, '');
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { locale, articleSlug } = parseSlug(slug);
  const post = await fetchPost(articleSlug, locale);
  if (!post) return { title: 'Not found', robots: { index: false, follow: false } };

  const title = stripHtml(post.title.rendered);
  const canonical = `https://geotapp.com${canonicalBlogPath(post)}`;

  return {
    title,
    description: stripHtml(post.excerpt.rendered).slice(0, 160),
    alternates: { canonical },
    robots: { index: false, follow: false },
  };
}

export default async function SyndicationPage({ params }: Props) {
  const { slug } = await params;
  const { locale: urlLocale, articleSlug } = parseSlug(slug);
  const post = await fetchPost(articleSlug, urlLocale);
  if (!post) notFound();

  const title = stripHtml(post.title.rendered);
  const html = stripCtaBlocks(sanitizeWpHtml(post.content.rendered));
  const canonical = `https://geotapp.com${canonicalBlogPath(post)}`;

  return (
    <article>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <p>
        Originally published at <a href={canonical}>{canonical}</a>
      </p>
    </article>
  );
}
