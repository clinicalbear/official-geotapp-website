/**
 * geotapp.com/links — Link in bio ufficiale Instagram
 *
 * Server component: recupera i 4 articoli IT più recenti da WordPress
 * e li passa al client component per rendering animato.
 *
 * Render on demand + cache in-memory (ARTICLE_CACHE, TTL 1h).
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
import { detectPostLocale } from '@/lib/blog-locale';

// Render on demand (stesso pattern dell'hub blog): con ISR la pagina veniva
// pre-renderizzata in build, dove le fetch WP falliscono → cache vuota per 1h
// a ogni deploy. Il caching vive in ARTICLE_CACHE (in-memory, TTL 1h).

export const dynamic = 'force-dynamic';

// ─── Types ────────────────────────────────────────────────────────────────────

type WpPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
  featured_media: number;
  class_list?: string[];
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

function resolveUrl(link: string, slug: string): string {
  try {
    const { pathname } = new URL(link);
    return `https://geotapp.com/blog${pathname}`;
  } catch {
    return `https://geotapp.com/blog/${slug}`;
  }
}

function truncate(text: string, max = 110): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  return clean.length > max ? clean.slice(0, max).trimEnd() + '…' : clean;
}

// ─── Data fetching ────────────────────────────────────────────────────────────

// Cache nello stesso isolate Worker (TTL fresco + stale-on-error), stesso
// schema del POST_CACHE dell'hub blog.
let ARTICLE_CACHE: { articles: Article[]; ts: number } | null = null;
const ARTICLE_CACHE_TTL_MS = 60 * 60 * 1000;

async function getLatestArticles(): Promise<Article[]> {
  if (ARTICLE_CACHE && Date.now() - ARTICLE_CACHE.ts < ARTICLE_CACHE_TTL_MS) {
    return ARTICLE_CACHE.articles;
  }
  try {
    // Recuperiamo 50 post: il blog pubblica in 11 lingue, servono ≥ 4 IT dopo il filtro.
    // cache: 'no-store' come l'hub blog: con next.revalidate il data-cache del
    // Worker deduplica il fetch e il signal non si propaga → fetch sempre fallita.
    const res = await fetch(
      'https://blog.geotapp.com/wp-json/wp/v2/posts' +
        '?per_page=50&status=publish' +
        '&_fields=id,slug,title,excerpt,date,link,featured_media,class_list',
      {
        headers: WP_HEADERS,
        cache: 'no-store',
        signal: AbortSignal.timeout(6000),
      }
    );

    if (!res.ok) return ARTICLE_CACHE?.articles ?? [];

    const raw: WpPost[] = await res.json();

    // Filtro IT e prendi i 4 più recenti. La lingua si rileva da class_list
    // (detectPostLocale), NON dal prefisso del permalink: diversi post NL/DE
    // sono pubblicati senza prefisso lingua nell'URL.
    const itPosts = raw.filter(p => detectPostLocale(p) === 'it').slice(0, 4);
    if (itPosts.length === 0) return ARTICLE_CACHE?.articles ?? [];

    // Recupera immagini in parallelo
    const mediaIds = itPosts.map(p => p.featured_media).filter(Boolean);
    const mediaMap: Record<number, string> = {};

    if (mediaIds.length > 0) {
      try {
        const mRes = await fetch(
          `https://blog.geotapp.com/wp-json/wp/v2/media` +
            `?include=${mediaIds.join(',')}&_fields=id,media_details,source_url`,
          { headers: WP_HEADERS, cache: 'no-store', signal: AbortSignal.timeout(6000) }
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

    const articles = itPosts.map(p => ({
      id: p.id,
      slug: p.slug,
      title: stripHtml(p.title.rendered),
      excerpt: truncate(stripHtml(p.excerpt.rendered)),
      date: p.date,
      url: resolveUrl(p.link, p.slug),
      image: mediaMap[p.featured_media] ?? null,
    }));
    ARTICLE_CACHE = { articles, ts: Date.now() };
    return articles;
  } catch {
    // Errore WP: meglio servire la lista stale che una pagina vuota.
    return ARTICLE_CACHE?.articles ?? [];
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
