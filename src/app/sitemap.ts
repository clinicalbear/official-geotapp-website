

// Sitemap strategy:
// Single /sitemap.xml — no shards, no sitemap index.
//
// Contains:
//   - 11 locales × N routes = locale pages with hreflang alternates
//   - 11 locales × M blog posts (deduplicated by URL) = blog entries
//
// Blog posts are fetched via /wp-json/wp/v2/posts/ (NOT ?rest_route=/) for each
// locale in parallel. Using ?rest_route=/ on blog.geotapp.com triggers the
// Cloudflare CDN-level redirect (blog.geotapp.com → geotapp.com/blog/) before
// Apache sees the request. /wp-json/ bypasses the root-path redirect.
//
// Cache strategy:
//   force-dynamic guarantees fresh data when Cloudflare edge cache misses.
//   next.config.mjs serves Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400.
//   SWR means crawlers never wait for sitemap re-generation; latency stays under 50ms.

import type { MetadataRoute } from 'next';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { translatePath } from '@/lib/i18n/slug-map';
import { getAllStati } from '@/lib/risorse/gps-lavoratori-ue';

export const dynamic = 'force-dynamic';

const BASE_URL = 'https://geotapp.com';
const WP_DIRECT = 'https://blog.geotapp.com';
// Test blog posts de-published in WordPress but still returned by WP REST API (cache lag).
// SYNC: identical copy also in src/middleware.ts — remove from both files when posts are fully purged.
const DEPUBLISHED_BLOG_TEST_PATHS = new Set([
  '/blog/da/2026/03/23/test/',
  '/blog/da/2026/03/23/test-2/',
]);

type RouteEntry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
};

// Paths MUST end with '/' — next.config.mjs has trailingSlash:true.
// Without the trailing slash, Googlebot follows a 308 redirect on every
// sitemap URL, wasting crawl budget and causing "Crawled – currently not indexed"
// for the redirect source in Search Console.
const ROUTES: RouteEntry[] = [
  // Home
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },

  // Prodotti (money pages — alta priorità)
  { path: '/products/geotapp-flow/', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/products/geotapp-timetracker/', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/products/geotapp-verifier/', priority: 0.8, changeFrequency: 'monthly' },

  // Pricing (pagine di conversione — priorità alta)
  { path: '/pricing/', priority: 0.9, changeFrequency: 'weekly' },

  // Settori verticali (landing SEO — alta priorità)
  { path: '/settori/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/pulizie/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/installatori/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/sicurezza/', priority: 0.9, changeFrequency: 'weekly' },

  // Settori verticali — landing SEO aggiuntive
  { path: '/settori/elettricisti/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/idraulici/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/termoidraulici/', priority: 0.9, changeFrequency: 'weekly' },

  // Settori risorse (pillar SEO — pagine long-tail per settore)
  { path: '/settori/pulizie/risorse/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/settori/installatori/risorse/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/settori/sicurezza/risorse/', priority: 0.85, changeFrequency: 'monthly' },

  // Confronto competitor (BOFU — pagine comparazione ad alta intenzione d'acquisto)
  { path: '/confronto/', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/confronto/geotapp-vs-connecteam/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/confronto/geotapp-vs-clockify/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/confronto/geotapp-vs-hubstaff/', priority: 0.8, changeFrequency: 'monthly' },

  // Blog index
  { path: '/blog/', priority: 0.85, changeFrequency: 'daily' },

  // Demo (lead generation — alta priorità)
  { path: '/demo/', priority: 0.9, changeFrequency: 'monthly' },

  // Supporto / conversion
  { path: '/guida/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact/', priority: 0.65, changeFrequency: 'monthly' },
  { path: '/chi-siamo/', priority: 0.55, changeFrequency: 'monthly' },

  // Entity / AEO page ("Cos'è GeoTapp" — localized slug per locale via SLUG_MAP)
  { path: '/cos-e-geotapp/', priority: 0.7, changeFrequency: 'monthly' },

  // Risorsa "GPS sui lavoratori in UE" — pagina-selettore (landing dello strumento).
  // Le schede-paese pubblicate vengono aggiunte dinamicamente più in basso da getAllStati().
  { path: '/risorse/gps-lavoratori-ue/', priority: 0.8, changeFrequency: 'monthly' },

  // Legale (bassa priorità)
  { path: '/privacy/', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms/', priority: 0.3, changeFrequency: 'yearly' },

  // Cookies (legale — bassa priorità)
  { path: '/cookies/', priority: 0.3, changeFrequency: 'yearly' },

  // /success esclusa: pagina Stripe post-pagamento, noindex
];

// Hreflang alternates for a localized page.
// x-default → /en/{path}: real page, no redirect.
// Using the bare non-locale path (e.g. /pricing/) as x-default would trigger a 308
// redirect to the geo-resolved locale, which leaks link equity and creates an
// inconsistency with the hreflang alternates in the page HTML (locale-metadata.ts).
function buildAlternates(canonicalPath: string): MetadataRoute.Sitemap[number]['alternates'] {
  const languages: Record<string, string> = {};
  for (const locale of SUPPORTED_LOCALES) {
    languages[locale] = `${BASE_URL}/${locale}${translatePath(canonicalPath, locale as AppLocale)}`;
  }
  languages['x-default'] = `${BASE_URL}/en${translatePath(canonicalPath, 'en')}`;
  return { languages };
}

// ─── WordPress blog helpers ─────────────────────────────────────────────────

type WpPost = { slug: string; modified: string; link?: string };
type WpPostResponse = { slug?: string; modified?: string; link?: string };

function isDepublishedBlogTestUrl(url: string): boolean {
  try {
    const parsed = new URL(url, BASE_URL);
    const normalized = parsed.pathname.endsWith('/')
      ? parsed.pathname
      : `${parsed.pathname}/`;
    return DEPUBLISHED_BLOG_TEST_PATHS.has(normalized);
  } catch {
    return false;
  }
}

function normalizeWpPublicUrl(rawUrl: string | undefined, slug: string): string {
  if (rawUrl) {
    try {
      const parsed = new URL(rawUrl);
      if (parsed.hostname === 'geotapp.com') {
        return `${parsed.origin}${parsed.pathname}${parsed.search}${parsed.hash}`;
      }
      if (parsed.hostname === 'blog.geotapp.com') {
        const path = parsed.pathname.startsWith('/blog')
          ? parsed.pathname
          : `/blog${parsed.pathname.startsWith('/') ? parsed.pathname : `/${parsed.pathname}`}`;
        return `${BASE_URL}${path}${parsed.search}${parsed.hash}`;
      }
    } catch {
      // fall through to slug fallback
    }
  }
  return `${BASE_URL}/blog/${slug}/`;
}

async function fetchWpPostsForLocale(locale: string): Promise<WpPost[]> {
  try {
    const query = new URLSearchParams({
      per_page: '100',
      _fields: 'slug,modified,link',
      status: 'publish',
      lang: locale,
    });

    // Use /wp-json/ path (not ?rest_route=/) to avoid the Cloudflare CDN-level
    // redirect that fires for blog.geotapp.com root path before Apache sees it.
    const res = await fetch(
      `${WP_DIRECT}/wp-json/wp/v2/posts/?${query.toString()}`,
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

    const rows = (await res.json()) as WpPostResponse[];
    if (!Array.isArray(rows)) return [];

    return rows
      .filter((row) => !!row.slug && !!row.modified)
      .map((row) => ({
        slug: row.slug as string,
        modified: row.modified as string,
        link: normalizeWpPublicUrl(row.link, row.slug as string),
      }));
  } catch {
    return [];
  }
}

// ─── Single sitemap default export ───────────────────────────────────────────
// No generateSitemaps() export → Next.js serves everything as /sitemap.xml.

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // 1. Locale pages: 11 locales × N routes, each with hreflang alternates.
  const localeEntries: MetadataRoute.Sitemap = SUPPORTED_LOCALES.flatMap((locale) =>
    ROUTES.map(({ path, priority, changeFrequency }) => ({
      url: `${BASE_URL}/${locale}${translatePath(path, locale as AppLocale)}`,
      lastModified: now,
      changeFrequency,
      priority: Math.round(priority * 0.85 * 100) / 100,
      alternates: buildAlternates(path),
    })),
  );

  // 1b. Schede-paese della risorsa "GPS sui lavoratori in UE": solo i paesi
  //     pubblicati (non "in-arrivo"), per ogni locale, con slug localizzato e
  //     hreflang alternates costruiti sul path canonico.
  const shippedCountries = getAllStati().filter((s) => s.stato !== 'in-arrivo');
  const schedaPaeseEntries: MetadataRoute.Sitemap = SUPPORTED_LOCALES.flatMap((locale) =>
    shippedCountries.map((country) => {
      const canonicalPath = `/risorse/gps-lavoratori-ue/${country.slugCanonico}/`;
      return {
        url: `${BASE_URL}/${locale}${translatePath(canonicalPath, locale as AppLocale)}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: buildAlternates(canonicalPath),
      };
    }),
  );

  // 2. Blog posts: all locales in parallel, deduplicated by URL.
  //    Hreflang for blog posts is handled by WordPress/Polylang in the page HTML.
  const wpPostsByLocale = await Promise.all(
    SUPPORTED_LOCALES.map((locale) => fetchWpPostsForLocale(locale)),
  );
  const seenUrls = new Set<string>();
  const blogEntries: MetadataRoute.Sitemap = [];

  wpPostsByLocale.flat().forEach(({ slug, modified, link }) => {
    const url = link || `${BASE_URL}/blog/${slug}/`;
    if (isDepublishedBlogTestUrl(url)) return;
    if (seenUrls.has(url)) return;
    seenUrls.add(url);
    blogEntries.push({
      url,
      lastModified: new Date(modified),
      changeFrequency: 'weekly',
      priority: 0.75,
    });
  });

  // 3. IT-only landing pages (single-locale, no hreflang alternates).
  const itOnlyEntries: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/it/settori/impresa-di-pulizie/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
      alternates: {
        languages: {
          'it-IT': `${BASE_URL}/it/settori/impresa-di-pulizie/`,
          'x-default': `${BASE_URL}/it/settori/impresa-di-pulizie/`,
        },
      },
    },
  ];

  return [...localeEntries, ...schedaPaeseEntries, ...itOnlyEntries, ...blogEntries];
}
