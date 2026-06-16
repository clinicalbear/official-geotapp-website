// Sitemap come Route Handler (non come convenzione app/sitemap.ts) per poter
// impostare ESPLICITAMENTE Cache-Control: no-store sulla risposta. Con la
// convenzione sitemap.ts, Next/OpenNext cacha la route per suo conto (s-maxage)
// e l'override da next.config non si applica alle route-metadata → la sitemap
// restava incastrata su versioni vecchie (mancavano strumento GPS, schede, tool).
// Qui controlliamo noi gli header → niente cache, si rigenera sempre fresca.

import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { translatePath } from '@/lib/i18n/slug-map';
import { getAllStati } from '@/lib/risorse/gps-lavoratori-ue';

export const dynamic = 'force-dynamic';

const BASE_URL = 'https://geotapp.com';
const WP_DIRECT = 'https://blog.geotapp.com';
const DEPUBLISHED_BLOG_TEST_PATHS = new Set([
  '/blog/da/2026/03/23/test/',
  '/blog/da/2026/03/23/test-2/',
]);

type ChangeFreq =
  | 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
type RouteEntry = { path: string; priority: number; changeFrequency: ChangeFreq };

// Paths MUST end with '/' — trailingSlash:true.
const ROUTES: RouteEntry[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/products/geotapp-flow/', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/products/geotapp-timetracker/', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/products/geotapp-verifier/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/pricing/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/pulizie/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/installatori/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/sicurezza/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/elettricisti/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/idraulici/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/termoidraulici/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/pulizie/risorse/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/settori/installatori/risorse/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/settori/sicurezza/risorse/', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/confronto/', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/confronto/geotapp-vs-connecteam/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/confronto/geotapp-vs-clockify/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/confronto/geotapp-vs-hubstaff/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/blog/', priority: 0.85, changeFrequency: 'daily' },
  { path: '/demo/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/guida/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact/', priority: 0.65, changeFrequency: 'monthly' },
  { path: '/chi-siamo/', priority: 0.55, changeFrequency: 'monthly' },
  { path: '/cos-e-geotapp/', priority: 0.7, changeFrequency: 'monthly' },
  // Hub Risorse + strumenti (asset linkabili per backlink).
  { path: '/risorse/', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/risorse/gps-lavoratori-ue/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/risorse/sanzioni-gps/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/risorse/indice-sorveglianza/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/privacy/', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms/', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cookies/', priority: 0.3, changeFrequency: 'yearly' },
];

interface Entry {
  url: string;
  lastmod: string; // YYYY-MM-DD
  changefreq?: ChangeFreq;
  priority?: number;
  alternates?: Record<string, string>; // hreflang -> href
}

function buildAlternates(canonicalPath: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of SUPPORTED_LOCALES) {
    languages[locale] = `${BASE_URL}/${locale}${translatePath(canonicalPath, locale as AppLocale)}`;
  }
  languages['x-default'] = `${BASE_URL}/en${translatePath(canonicalPath, 'en')}`;
  return languages;
}

// ─── WordPress blog helpers ─────────────────────────────────────────────────
type WpPost = { slug: string; modified: string; link?: string };
type WpPostResponse = { slug?: string; modified?: string; link?: string };

function isDepublishedBlogTestUrl(url: string): boolean {
  try {
    const parsed = new URL(url, BASE_URL);
    const normalized = parsed.pathname.endsWith('/') ? parsed.pathname : `${parsed.pathname}/`;
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
      // fall through
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
    const res = await fetch(`${WP_DIRECT}/wp-json/wp/v2/posts/?${query.toString()}`, {
      headers: {
        host: new URL(WP_DIRECT).host,
        'x-geotapp-proxy': '1',
        'x-forwarded-proto': 'https',
      },
      next: { revalidate: 3600 },
    });
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

// ─── XML serialization ───────────────────────────────────────────────────────
function fmtDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}
function xmlEsc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function serialize(entries: Entry[]): string {
  const body = entries
    .map((e) => {
      const alts = e.alternates
        ? Object.entries(e.alternates)
            .map(([lang, href]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${xmlEsc(href)}"/>`)
            .join('\n')
        : '';
      return (
        '  <url>\n' +
        `    <loc>${xmlEsc(e.url)}</loc>\n` +
        `    <lastmod>${e.lastmod}</lastmod>\n` +
        (e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>\n` : '') +
        (e.priority != null ? `    <priority>${e.priority}</priority>\n` : '') +
        (alts ? alts + '\n' : '') +
        '  </url>'
      );
    })
    .join('\n');
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    body +
    '\n</urlset>\n'
  );
}

export async function GET(): Promise<Response> {
  const now = new Date();
  const nowStr = fmtDate(now);

  // 1. Locale pages: 11 locales × routes, con hreflang.
  const localeEntries: Entry[] = SUPPORTED_LOCALES.flatMap((locale) =>
    ROUTES.map(({ path, priority, changeFrequency }) => ({
      url: `${BASE_URL}/${locale}${translatePath(path, locale as AppLocale)}`,
      lastmod: nowStr,
      changefreq: changeFrequency,
      priority: Math.round(priority * 0.85 * 100) / 100,
      alternates: buildAlternates(path),
    })),
  );

  // 1b. Schede-paese GPS (paesi pubblicati × locale).
  const shipped = getAllStati().filter((s) => s.stato !== 'in-arrivo');
  const schedaPaeseEntries: Entry[] = SUPPORTED_LOCALES.flatMap((locale) =>
    shipped.map((country) => {
      const canonicalPath = `/risorse/gps-lavoratori-ue/${country.slugCanonico}/`;
      return {
        url: `${BASE_URL}/${locale}${translatePath(canonicalPath, locale as AppLocale)}`,
        lastmod: nowStr,
        changefreq: 'monthly' as const,
        priority: 0.7,
        alternates: buildAlternates(canonicalPath),
      };
    }),
  );

  // 2. Blog (11 locali in parallelo, dedup per URL).
  const wpPostsByLocale = await Promise.all(SUPPORTED_LOCALES.map((l) => fetchWpPostsForLocale(l)));
  const seen = new Set<string>();
  const blogEntries: Entry[] = [];
  wpPostsByLocale.flat().forEach(({ slug, modified, link }) => {
    const url = link || `${BASE_URL}/blog/${slug}/`;
    if (isDepublishedBlogTestUrl(url) || seen.has(url)) return;
    seen.add(url);
    blogEntries.push({ url, lastmod: fmtDate(new Date(modified)), changefreq: 'weekly', priority: 0.75 });
  });

  // 3. IT-only landing.
  const itOnly: Entry[] = [
    {
      url: `${BASE_URL}/it/settori/impresa-di-pulizie/`,
      lastmod: nowStr,
      changefreq: 'monthly',
      priority: 0.85,
      alternates: {
        'it-IT': `${BASE_URL}/it/settori/impresa-di-pulizie/`,
        'x-default': `${BASE_URL}/it/settori/impresa-di-pulizie/`,
      },
    },
  ];

  const xml = serialize([...localeEntries, ...schedaPaeseEntries, ...itOnly, ...blogEntries]);
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'no-store, must-revalidate',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
