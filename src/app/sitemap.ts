// Overview: sitemap.ts
// Module: src > app
// Purpose: documents intent and boundaries to speed up maintenance and reviews.
// Safety: keep permissions, tenancy isolation, and API/data compatibility unchanged unless explicitly required.

// Documentation Contract:
// - Boundaries: this file may orchestrate UI/data flow, but it must keep business invariants intact.
// - Security: preserve role/tenant checks and never broaden access scope implicitly.
// - Data Integrity: keep field names and payload schemas stable unless a migration is planned.
// - Compatibility: companyId/tenantId fallbacks may still be required for legacy records.
// - Performance: avoid extra roundtrips in hot paths and prefer incremental updates.
// - Error Handling: prefer graceful degradation over hard-fail in non-critical rendering paths.
// - UX Stability: keep deterministic ordering/filtering to avoid visual flicker/regressions.
// - Testing: update module tests when changing control flow, query composition, or serialization.
// - Operations: changes touching auth/rules/functions must stay aligned across apps.
// - Maintainability: keep additive changes whenever possible to reduce rollback risk.


import type { MetadataRoute } from 'next';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';

export const dynamic = 'force-dynamic';

const BASE_URL = 'https://geotapp.com';

type RouteEntry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  localize?: boolean;
};

const ROUTES: RouteEntry[] = [
  // Home
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },

  // Prodotti (money pages — alta priorità)
  { path: '/products/geotapp-flow', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/products/geotapp-app', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/products/geotapp-verifier', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/fortyx', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/zenith-seo', priority: 0.75, changeFrequency: 'monthly' },

  // Pricing (pagine di conversione — priorità alta)
  { path: '/pricing', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/pricing/bundle', priority: 0.85, changeFrequency: 'weekly' },

  // Settori verticali (landing SEO — alta priorità)
  { path: '/settori', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/pulizie', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/installatori', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/sicurezza', priority: 0.9, changeFrequency: 'weekly' },

  // Blog index
  { path: '/blog', priority: 0.85, changeFrequency: 'daily', localize: false },

  // Supporto / conversion
  { path: '/download', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/guida', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.65, changeFrequency: 'monthly' },
  { path: '/chi-siamo', priority: 0.55, changeFrequency: 'monthly' },

  // Legale (bassa priorità)
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },

  // /success è esclusa: pagina Stripe post-pagamento, noindex, non va in sitemap
];

// Genera alternates hreflang per una path che esiste in tutti i locale.
// x-default punta alla root senza prefisso locale.
function buildAlternates(path: string): MetadataRoute.Sitemap[number]['alternates'] {
  const trailing = path === '/' ? '/' : path;
  const languages: Record<string, string> = {};
  for (const locale of SUPPORTED_LOCALES) {
    languages[locale] = `${BASE_URL}/${locale}${trailing}`;
  }
  languages['x-default'] = `${BASE_URL}${path}`;
  return { languages };
}

type WpPost = { slug: string; modified: string; link?: string };

// Use blog.geotapp.com directly (bypasses Cloudflare Worker self-loop).
// REST API pretty URLs (/wp-json/) return 500 on the origin because WordPress
// siteurl is set to geotapp.com/blog — so we use the ?rest_route= fallback
// which works without mod_rewrite.
const WP_DIRECT = 'https://blog.geotapp.com';

type WpPostResponse = {
  slug?: string;
  modified?: string;
  link?: string;
};

function normalizeWpPublicUrl(rawUrl: string | undefined, slug: string): string {
  if (rawUrl) {
    try {
      const parsed = new URL(rawUrl);
      // WP siteurl = geotapp.com/blog → links already correct, pass through
      if (parsed.hostname === 'geotapp.com') {
        return `${parsed.origin}${parsed.pathname}${parsed.search}${parsed.hash}`;
      }
      // Legacy: if WP ever returns blog.geotapp.com links, rewrite to geotapp.com
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
    });
    query.set('lang', locale);

    // Use ?rest_route= fallback: pretty /wp-json/ URLs 500 on origin because
    // WP siteurl != blog.geotapp.com; query-param form bypasses mod_rewrite.
    const res = await fetch(
      `${WP_DIRECT}/?rest_route=/wp/v2/posts&${query.toString()}`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return [];

    const rows = await res.json() as WpPostResponse[];
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = ROUTES.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    }),
  );

  const localizedEntries: MetadataRoute.Sitemap = SUPPORTED_LOCALES.flatMap(
    (locale) =>
      ROUTES.filter((r) => r.localize !== false).map(
        ({ path, priority, changeFrequency }) => ({
          url: `${BASE_URL}/${locale}${path}`,
          lastModified: now,
          changeFrequency,
          priority: Math.round(priority * 0.85 * 100) / 100,
          alternates: buildAlternates(path),
        }),
      ),
  );

  const wpPostsByLocale = await Promise.all(
    SUPPORTED_LOCALES.map((locale) => fetchWpPostsForLocale(locale)),
  );

  const blogEntries: MetadataRoute.Sitemap = [];
  const seenUrls = new Set<string>();

  wpPostsByLocale.flat().forEach(({ slug, modified, link }) => {
    const url = link || `${BASE_URL}/blog/${slug}/`;
    if (seenUrls.has(url)) {
      return;
    }

    seenUrls.add(url);
    blogEntries.push({
      url,
      lastModified: new Date(modified),
      changeFrequency: 'weekly',
      priority: 0.75,
    });
  });

  return [...staticEntries, ...localizedEntries, ...blogEntries];
}
