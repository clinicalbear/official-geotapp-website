/**
 * geotapp.com/links — Link in bio ufficiale Instagram
 *
 * Server component: recupera i 4 articoli IT più recenti da WordPress
 * e li passa al client component per rendering animato.
 *
 * ISR: revalidate ogni ora. Nessun impatto sulle performance di navigazione.
 *
 * SEO: noindex (pagina utility, non deve competere con le pagine principali).
 *
 * Analytics: tutti i link hanno parametri UTM.
 *   utm_source=instagram
 *   utm_medium=bio
 *   utm_campaign=links_page
 *   utm_content=<slot> (cta_demo | cta_features | article_<slug> | blog_all |
 *                        quick_pricing | quick_contact | quick_main | header_logo)
 */

import type { Metadata } from 'next';
import LinksClient, { type Article } from './LinksClient';

// ─── ISR ──────────────────────────────────────────────────────────────────────

export const revalidate = 3600; // 1 ora

// ─── Types ────────────────────────────────────────────────────────────────────

type WpPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
  featured_media: number;
};

type WpMedia = {
  id: number;
  source_url: string;
  media_details?: {
    sizes?: {
      medium_large?: { source_url: string };
      large?: { source_url: string };
      medium?: { source_url: string };
    };
  };
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const WP_HEADERS = {
  host: 'blog.geotapp.com',
  'x-geotapp-proxy': '1',
  'x-forwarded-proto': 'https',
};

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .trim();
}

function isItalianPost(link: string): boolean {
  try {
    const { pathname } = new URL(link);
    // Polylang aggiunge /{lang}/ ai post non-IT; i post IT non hanno prefisso lingua.
    return !/(\/en\/|\/de\/|\/fr\/|\/es\/|\/pt\/|\/nl\/|\/ru\/|\/da\/|\/sv\/|\/nb\/)/.test(pathname);
  } catch {
    return true;
  }
}

function resolveUrl(link: string, slug: string): string {
  try {
    const { pathname } = new URL(link);
    return `https://blog.geotapp.com${pathname}`;
  } catch {
    return `https://blog.geotapp.com/${slug}`;
  }
}

function truncate(text: string, max = 110): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  return clean.length > max ? clean.slice(0, max).trimEnd() + '…' : clean;
}

// ─── Data fetching ────────────────────────────────────────────────────────────

async function getLatestArticles(): Promise<Article[]> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 6000);

    // Recuperiamo 12 post (≥ 4 IT dopo il filtro lingua)
    const res = await fetch(
      'https://blog.geotapp.com/wp-json/wp/v2/posts' +
        '?per_page=12&status=publish' +
        '&_fields=id,slug,title,excerpt,date,link,featured_media',
      {
        headers: WP_HEADERS,
        signal: controller.signal,
        next: { revalidate: 3600 },
      }
    );
    clearTimeout(timer);

    if (!res.ok) return [];

    const raw: WpPost[] = await res.json();

    // Filtro IT e prendi i 4 più recenti
    const itPosts = raw.filter(p => isItalianPost(p.link)).slice(0, 4);
    if (itPosts.length === 0) return [];

    // Recupera immagini in parallelo
    const mediaIds = itPosts.map(p => p.featured_media).filter(Boolean);
    const mediaMap: Record<number, string> = {};

    if (mediaIds.length > 0) {
      try {
        const mRes = await fetch(
          `https://blog.geotapp.com/wp-json/wp/v2/media` +
            `?include=${mediaIds.join(',')}&_fields=id,media_details,source_url`,
          { headers: WP_HEADERS, next: { revalidate: 3600 } }
        );
        if (mRes.ok) {
          const mediaItems: WpMedia[] = await mRes.json();
          for (const m of mediaItems) {
            const sizes = m.media_details?.sizes;
            const url =
              sizes?.medium_large?.source_url ??
              sizes?.large?.source_url ??
              sizes?.medium?.source_url ??
              m.source_url;
            if (url) mediaMap[m.id] = url;
          }
        }
      } catch {
        // Immagini non disponibili: usa fallback
      }
    }

    return itPosts.map(p => ({
      id: p.id,
      slug: p.slug,
      title: stripHtml(p.title.rendered),
      excerpt: truncate(stripHtml(p.excerpt.rendered)),
      date: p.date,
      url: resolveUrl(p.link, p.slug),
      image: mediaMap[p.featured_media] ?? null,
    }));
  } catch {
    return [];
  }
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'GeoTapp — Link ufficiali',
  description:
    'Verifica il lavoro sul campo con prove GPS, foto e report verificabili. Demo, blog e risorse GeoTapp.',
  openGraph: {
    title: 'GeoTapp — Link ufficiali',
    description: 'Verifica il lavoro sul campo con prove GPS, foto e report verificabili.',
    url: 'https://geotapp.com/links',
    siteName: 'GeoTapp',
    type: 'website',
    images: [
      {
        url: 'https://geotapp.com/logoFlow.webp',
        width: 1200,
        height: 630,
        alt: 'GeoTapp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GeoTapp — Link ufficiali',
    description: 'Verifica il lavoro sul campo con prove GPS, foto e report verificabili.',
  },
  // Pagina utility: non deve competere con pagine principali in SERP
  robots: { index: false, follow: false },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function LinksPage() {
  const articles = await getLatestArticles();
  return <LinksClient articles={articles} />;
}
