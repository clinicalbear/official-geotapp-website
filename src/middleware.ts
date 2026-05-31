

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { LOCALE_COOKIE_NAME, SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import {
  getLocaleFromPathname,
  localizePath,
  resolveLocale,
  stripLocaleFromPathname,
} from '@/lib/i18n/locale-routing';
import { translatePath, REVERSE_SLUG_MAP, SLUG_MAP } from '@/lib/i18n/slug-map';

const PUBLIC_FILE = /\.(.*)$/;

/**
 * Applies hardened security headers to any NextResponse that renders content.
 * Applied only to non-blog, non-proxy responses (Next.js pages + API).
 *
 * Notes:
 * - COEP is intentionally omitted: Firefox treats COEP:credentialless as
 *   require-corp for cross-origin iframe navigations, which blocks Google Maps
 *   and other third-party embeds. This site has no SharedArrayBuffer or
 *   high-precision timing needs, so COEP provides no benefit here.
 * - Permissions-Policy: geolocation blocked at document level — the GeoTapp
 *   marketing site doesn't need JS geolocation; the mobile app handles that.
 */
function applySecurityHeaders(response: NextResponse): void {
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'geolocation=(), camera=(), microphone=()');
  // HSTS: force HTTPS for 1 year, include subdomains, allow preload list submission
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  // Clickjacking protection: deny framing from other origins
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  // COOP: isolate browsing context — prevents opener-based attacks
  // Use 'same-origin-allow-popups' to keep OAuth/Stripe popup flows working
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  // X-Content-Type-Options: prevent MIME sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff');
}

const WP_ORIGIN = 'https://blog.geotapp.com';
const SITE_ORIGIN = 'https://geotapp.com';
const BLOG_BASE = '/blog';
const WP_NO_CACHE_PREFIXES = [
  '/wp-admin',
  '/wp-login.php',
  '/wp-json',
  '/xmlrpc.php',
];
const HOP_BY_HOP_HEADERS = new Set([
  'connection',
  'keep-alive',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailer',
  'transfer-encoding',
  'upgrade',
]);

function withBlogPrefix(path: string): string {
  if (path.startsWith(BLOG_BASE)) return path;
  return `${BLOG_BASE}${path.startsWith('/') ? path : `/${path}`}`;
}

function rewriteRedirectTarget(value: string): string {
  const wpPathPattern = /^(\/)?(wp-admin|wp-login\.php|wp-json|wp-content|wp-includes|xmlrpc\.php)(\/|$)/;
  if (wpPathPattern.test(value)) {
    const normalized = value.startsWith('/') ? value : `/${value}`;
    return `${SITE_ORIGIN}${withBlogPrefix(normalized)}`;
  }

  try {
    const parsed = new URL(value);
    if (parsed.origin === WP_ORIGIN || parsed.origin === SITE_ORIGIN) {
      if (wpPathPattern.test(parsed.pathname.replace(/^\//, ''))) {
        return `${SITE_ORIGIN}${withBlogPrefix(parsed.pathname)}${parsed.search}${parsed.hash}`;
      }
    }
  } catch {
    return value;
  }

  return value;
}

function rewriteWpUrl(url: string): string {
  try {
    const parsed = new URL(url, SITE_ORIGIN);

    if (
      parsed.origin !== WP_ORIGIN &&
      parsed.origin !== SITE_ORIGIN
    ) {
      return url;
    }

    const redirectTarget = parsed.searchParams.get('redirect_to');
    if (redirectTarget) {
      parsed.searchParams.set('redirect_to', rewriteRedirectTarget(redirectTarget));
    }

    const path = `${parsed.pathname}${parsed.search}${parsed.hash}` || '/';
    return `${SITE_ORIGIN}${withBlogPrefix(path)}`;
  } catch {
    if (!url.startsWith('/')) return url;
    return `${SITE_ORIGIN}${withBlogPrefix(url)}`;
  }
}

function rewriteWpContent(content: string): string {
  const absoluteWp = content.replace(
    /https?:\/\/blog\.geotapp\.com(\/[^"'\s<>]*)?/g,
    (_match, path = '/') => `${SITE_ORIGIN}${withBlogPrefix(path)}`,
  );

  const absoluteSiteWp = absoluteWp.replace(
    /https?:\/\/geotapp\.com\/(?!blog\/)(wp-content\/|wp-includes\/|wp-json\/|wp-admin\/|wp-login\.php|xmlrpc\.php)/g,
    `${SITE_ORIGIN}/blog/$1`,
  );

  return absoluteSiteWp.replace(
    /([("'=\s])\/(?!blog\/)(wp-content\/|wp-includes\/|wp-json\/|wp-admin\/|wp-login\.php|xmlrpc\.php)/g,
    '$1/blog/$2',
  );
}

function copyResponseHeaders(
  source: Headers,
  options: { rewrittenBody?: boolean; noCache?: boolean } = {},
): Headers {
  const headers = new Headers();
  const setCookieValues =
    typeof (source as Headers & { getSetCookie?: () => string[] }).getSetCookie === 'function'
      ? (source as Headers & { getSetCookie: () => string[] }).getSetCookie()
      : [];

  source.forEach((value, key) => {
    const normalizedKey = key.toLowerCase();
    if (HOP_BY_HOP_HEADERS.has(normalizedKey)) return;
    if (normalizedKey === 'set-cookie') return;
    if (options.rewrittenBody && (
      normalizedKey === 'content-length' ||
      normalizedKey === 'content-encoding' ||
      normalizedKey === 'etag'
    )) {
      return;
    }
    headers.set(key, value);
  });

  for (const cookie of setCookieValues) {
    headers.append('set-cookie', cookie);
  }

  if (!setCookieValues.length) {
    const setCookie = source.get('set-cookie');
    if (setCookie) {
      headers.append('set-cookie', setCookie);
    }
  }

  const location = headers.get('location');
  if (location) {
    headers.set('location', rewriteWpUrl(location));
  }

  if (options.noCache) {
    headers.set(
      'cache-control',
      'private, no-cache, no-store, max-age=0, must-revalidate',
    );
  }

  return headers;
}

// ─── Sitemap generation ──────────────────────────────────────────────────────
// Single /sitemap.xml — no shards, no sitemap index.
// OpenNext/Cloudflare Workers does not route the Next.js /sitemap.xml handler
// correctly (requests fall through to [locale] route, matching locale="sitemap.xml").
// We generate the complete sitemap directly in middleware.
// Keep SITEMAP_ROUTES in sync with src/app/sitemap.ts.

const SITEMAP_BASE_URL = 'https://geotapp.com';

type SitemapRouteEntry = { path: string; priority: number; changeFrequency: string };

const SITEMAP_ROUTES: SitemapRouteEntry[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/products/geotapp-flow/', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/products/geotapp-timetracker/', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/products/geotapp-verifier/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/pricing/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/pricing/bundle/', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/settori/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/pulizie/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/installatori/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/sicurezza/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/elettricisti/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/idraulici/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/termoidraulici/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/edilizia/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/impianti/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/manutenzione/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/impresa-di-pulizie/', priority: 0.9, changeFrequency: 'weekly' },
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
  { path: '/privacy/', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms/', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cookies/', priority: 0.3, changeFrequency: 'yearly' },
];

// SYNC: identical copy also in src/app/sitemap.ts — remove from both files when posts are fully purged.
const DEPUBLISHED_BLOG_TEST_PATHS = new Set([
  '/blog/da/2026/03/23/test/',
  '/blog/da/2026/03/23/test-2/',
]);

// Articoli olandesi la cui lingua Polylang e' stata corretta da IT a NL (31/05/2026).
// I vecchi URL senza prefisso /nl/ erano gia' indicizzati: 301 permanente verso il nuovo URL /nl/.
const NL_RELANG_REDIRECTS: Record<string, string> = {
  '/blog/2026/05/30/software-schoonmaakbedrijven-avg-gps-2026/': '/blog/nl/2026/05/30/software-schoonmaakbedrijven-avg-gps-2026/',
  '/blog/2026/05/25/software-voor-schoonmaakbedrijven-2026/': '/blog/nl/2026/05/25/software-voor-schoonmaakbedrijven-2026/',
  '/blog/2026/05/21/bewijsplicht-schoonmaakdienst-software/': '/blog/nl/2026/05/21/bewijsplicht-schoonmaakdienst-software/',
  '/blog/2026/05/18/gps-tracking-schoonmaakpersoneel/': '/blog/nl/2026/05/18/gps-tracking-schoonmaakpersoneel/',
  '/blog/2026/05/14/personeelsbeheer-software-schoonmaak/': '/blog/nl/2026/05/14/personeelsbeheer-software-schoonmaak/',
};

function normalizePathWithTrailingSlash(pathname: string): string {
  if (!pathname) return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

// All canonical and translated download slugs — must stay in sync with next.config.mjs
const DOWNLOAD_SLUGS = new Set([
  'download',
  'herunterladen', // de
  'telecharger',   // fr
  'descargar',     // es
  'downloaden',    // nl
  'hent',          // da
  'ladda-ned',     // sv
  'last-ned',      // nb
  'skachat',       // ru
]);

function isDepublishedDownloadPath(pathname: string): boolean {
  const normalized = normalizePathWithTrailingSlash(pathname);
  // Extract the first path segment after the optional locale prefix.
  const stripped = stripLocaleFromPathname(normalized); // e.g. '/download/' or '/herunterladen/'
  const slug = stripped.replace(/^\/+|\/+$/g, '');     // e.g. 'download' or 'herunterladen'
  return DOWNLOAD_SLUGS.has(slug);
}

function isDepublishedBlogTestPath(pathname: string): boolean {
  const normalized = normalizePathWithTrailingSlash(pathname);
  return DEPUBLISHED_BLOG_TEST_PATHS.has(normalized);
}

function isDepublishedBlogTestUrl(url: string): boolean {
  try {
    const parsed = new URL(url, SITE_ORIGIN);
    return isDepublishedBlogTestPath(parsed.pathname);
  } catch {
    return false;
  }
}

async function buildFullSitemap(): Promise<string> {
  const locales = SUPPORTED_LOCALES as readonly string[];
  const today = new Date().toISOString().split('T')[0];

  // 1. Locale pages: all locales × all routes with hreflang alternates.
  // URLs use translated slugs per locale (e.g. /de/preise/ not /de/pricing/).
  const HREFLANG_MAP: Record<string, string> = {
    it: 'it-IT', en: 'en', de: 'de-DE', fr: 'fr-FR', es: 'es-ES',
    pt: 'pt-PT', nl: 'nl-NL', da: 'da-DK', nb: 'nb-NO', sv: 'sv-SE', ru: 'ru-RU',
  };
  const localeEntries: string[] = [];
  for (const locale of locales) {
    for (const { path, priority, changeFrequency } of SITEMAP_ROUTES) {
      const localePath = translatePath(path, locale as AppLocale);
      const url = `${SITEMAP_BASE_URL}/${locale}${localePath}`;
      const p = Math.round(priority * 0.85 * 100) / 100;
      const hreflangLines = [
        ...locales.map((l) => {
          const lPath = translatePath(path, l as AppLocale);
          return `    <xhtml:link rel="alternate" hreflang="${HREFLANG_MAP[l] ?? l}" href="${SITEMAP_BASE_URL}/${l}${lPath}"/>`;
        }),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITEMAP_BASE_URL}/en${translatePath(path, 'en')}"/>`,
      ].join('\n');
      localeEntries.push(
        `  <url>\n` +
        `    <loc>${url}</loc>\n` +
        `    <lastmod>${today}</lastmod>\n` +
        `    <changefreq>${changeFrequency}</changefreq>\n` +
        `    <priority>${p}</priority>\n` +
        `${hreflangLines}\n` +
        `  </url>`,
      );
    }
  }

  // 2. Blog posts: all locales in parallel, deduplicated by URL.
  //    Hreflang for blog posts is handled by WordPress/Polylang in page HTML.
  const blogEntries: string[] = [];
  try {
    const results = await Promise.all(
      locales.map(async (locale) => {
        try {
          const q = new URLSearchParams({ per_page: '100', _fields: 'slug,modified,link', status: 'publish', lang: locale });
          // Use wp-json path (not ?rest_route) with proxy header to bypass the
          // Cloudflare CDN-level redirect that fires for blog.geotapp.com root path.
          // ?rest_route=/ triggers a 301 redirect before Apache/WordPress sees the request.
          const res = await fetch(`${WP_ORIGIN}/wp-json/wp/v2/posts/?${q.toString()}`, {
            headers: {
              host: new URL(WP_ORIGIN).host,
              'x-geotapp-proxy': '1',
              'x-forwarded-proto': 'https',
            },
          });
          if (!res.ok) return [];
          const rows = await res.json() as Array<{ slug?: string; modified?: string; link?: string }>;
          return Array.isArray(rows) ? rows.filter((r) => r.slug && r.modified) : [];
        } catch {
          return [];
        }
      }),
    );

    const seen = new Set<string>();
    for (const row of results.flat()) {
      const slug = row.slug as string;
      let url = `${SITEMAP_BASE_URL}/blog/${slug}/`;
      if (row.link) {
        try {
          const parsed = new URL(row.link);
          if (parsed.hostname === 'geotapp.com') {
            url = `${parsed.origin}${parsed.pathname}`;
          } else if (parsed.hostname === 'blog.geotapp.com') {
            const p = parsed.pathname.startsWith('/blog') ? parsed.pathname : `/blog${parsed.pathname}`;
            url = `${SITEMAP_BASE_URL}${p}`;
          }
        } catch { /* keep default */ }
      }
      if (isDepublishedBlogTestUrl(url)) continue;
      if (seen.has(url)) continue;
      seen.add(url);
      const lastmod = (row.modified as string).split('T')[0];
      blogEntries.push(
        `  <url>\n` +
        `    <loc>${url}</loc>\n` +
        `    <lastmod>${lastmod}</lastmod>\n` +
        `    <changefreq>weekly</changefreq>\n` +
        `    <priority>0.75</priority>\n` +
        `  </url>`,
      );
    }
  } catch { /* blog entries remain empty on error */ }

  const allEntries = [...localeEntries, ...blogEntries].join('\n');
  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    `${allEntries}\n` +
    `</urlset>`
  );
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const host = req.headers.get('host');

  // 0a. www → non-www redirect (301 permanent)
  // Explicit allowlist to prevent host header injection / open redirect.
  if (host !== null && host.startsWith('www.')) {
    const bareHost = host.slice(4); // removes "www." prefix
    if (bareHost === 'geotapp.com') {
      const url = req.nextUrl.clone();
      url.host = bareHost;
      return NextResponse.redirect(url, { status: 301 });
    }
  }

  // 0a2. Articoli olandesi rilingua (IT→NL): 301 dai vecchi URL (senza /nl/)
  // ai nuovi URL /nl/. Deve precedere il rendering articolo (catch-all Next.js).
  {
    const normalizedRelang = pathname.endsWith('/') ? pathname : `${pathname}/`;
    const relangTarget = NL_RELANG_REDIRECTS[normalizedRelang];
    if (relangTarget) {
      return NextResponse.redirect(new URL(relangTarget, req.url), 301);
    }
  }

  // 0. Sitemap — serve complete XML directly from middleware.
  //
  // Root cause: OpenNext/Cloudflare Workers does not map the virtual /sitemap.xml
  // route (auto-generated by Next.js) to the sitemap handler. The request falls
  // through to the [locale] dynamic route, which matches locale="sitemap.xml"
  // and renders the HTML homepage.
  //
  // Fix: intercept /sitemap.xml in middleware and return a complete <urlset>
  // with all locale pages + all blog posts in a single file.
  if (pathname === '/sitemap.xml' || pathname === '/sitemap.xml/') {
    const xml = await buildFullSitemap();
    return new NextResponse(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  }

  // 0b. robots.txt — pass through.
  if (pathname === '/robots.txt' || pathname === '/robots.txt/') {
    return NextResponse.next();
  }

  // 0b2. Download pages are intentionally de-published:
  // return 410 Gone (root + all locale variants) and noindex to accelerate deindexing.
  if (isDepublishedDownloadPath(pathname)) {
    return new NextResponse('Gone', {
      status: 410,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=300',
        'X-Robots-Tag': 'noindex, nofollow, noarchive',
      },
    });
  }

  // 0b3. Known test blog posts are permanently de-published.
  // Return 410 + noindex to stop crawl loops and remove them from Search quickly.
  if (isDepublishedBlogTestPath(pathname)) {
    return new NextResponse('Gone', {
      status: 410,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=300',
        'X-Robots-Tag': 'noindex, nofollow, noarchive',
      },
    });
  }

  // 0c. Blog listing redirects.
  //
  // /blog or /blog/                  → 302 → /{detected_lang}/blog/  (GEO-AWARE)
  // /blog/{locale} or /blog/{locale}/ → 301 → /{locale}/blog/         (stable equivalence)
  //
  // Article URLs (/blog/en/2026/...) and WP assets (/blog/wp-*) NOT redirected.
  if (pathname.startsWith('/blog')) {
    // Skip WP admin/api/assets/login
    if (pathname.startsWith('/blog/wp-')) {
      // fall through to blog proxy below
    } else {
      const BLOG_LISTING_LOCALES = ['en','de','fr','es','pt','nl','da','sv','nb','ru'];

      // /blog or /blog/ exactly → /{detected_lang}/blog/ via 302 (geo-aware).
      //
      // 302 (not 301): destinazione varia per visitatore (geo + cookie + Accept-Language).
      // Un 301 farebbe cachare a Google la prima destinazione vista dal crawler
      // (probabilmente /it/blog/ dato che Googlebot crawla principalmente da USA con
      // header neutri), portando tutti gli utenti a /it/ a prescindere dalla loro lingua.
      //
      // X-Robots-Tag: noindex,follow — il path "nudo" /blog non compare in SERP perche'
      // il contenuto cambia per utente; Google segue il redirect verso /{lang}/blog/
      // che e' la pagina canonical e indicizzabile.
      //
      // LOCALE_COOKIE set — alla seconda visita la scelta dell'utente viene rispettata
      // anche se cambia paese/rete (laptop in hotel all'estero, VPN, ecc.).
      if (pathname === '/blog' || pathname === '/blog/') {
        const countryCode =
          req.headers.get('cf-ipcountry') ||
          req.headers.get('x-vercel-ip-country') ||
          (req as any).geo?.country ||
          null;
        const detectedLocale = resolveLocale({
          cookieLocale: req.cookies.get(LOCALE_COOKIE_NAME)?.value,
          countryCode,
          acceptLanguage: req.headers.get('accept-language'),
        });
        const blogRedirect = NextResponse.redirect(
          new URL(`/${detectedLocale}/blog/`, req.url),
          302,
        );
        blogRedirect.headers.set('X-Robots-Tag', 'noindex, follow');
        blogRedirect.cookies.set(LOCALE_COOKIE_NAME, detectedLocale, {
          path: '/',
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 365,
        });
        return blogRedirect;
      }

      // /blog/{locale} or /blog/{locale}/ exactly (no more segments) → /{locale}/blog/
      // Questo resta 301: l'equivalenza /blog/en/ ↔ /en/blog/ e' stabile per qualsiasi visitatore.
      for (const loc of BLOG_LISTING_LOCALES) {
        if (pathname === `/blog/${loc}` || pathname === `/blog/${loc}/`) {
          return NextResponse.redirect(new URL(`/${loc}/blog/`, req.url), 301);
        }
      }

      // Everything else under /blog/ (articles, assets) → pass through to proxy
    }
  }

  // 0d. Force trailing slash — prevent duplicate URLs in GSC
  // 308 (Permanent Redirect) preserves the HTTP method (unlike 301).
  // Exclusions: static files (have a file extension), API routes, blog proxy,
  // and paths that already end with '/'.
  const isStaticFile = /\/[^/]*\.[^/]+$/.test(pathname);
  const hasTrailingSlash = pathname.endsWith('/');
  const isApiRoute = pathname.startsWith('/api/');
  // Exclude deep blog paths (/blog/slug, /blog/wp-admin, etc.) from trailing slash redirect.
  // /blog and /blog/ are NOT excluded: /blog gets trailing slash → /blog/, then locale routing
  // handles it correctly. Excluding /blog (without slash) here caused a loop because it skipped
  // trailing-slash redirect but also skipped the proxy, falling into locale routing indefinitely.
  const isBlogProxy = pathname.startsWith('/blog/');

  if (!isStaticFile && !hasTrailingSlash && !isApiRoute && !isBlogProxy && pathname !== '') {
    const trailingSlashUrl = req.nextUrl.clone();
    trailingSlashUrl.pathname = pathname + '/';
    return NextResponse.redirect(trailingSlashUrl, { status: 308 });
  }

  // 1a. /blog/robots.txt — serve directly to break the proxy redirect loop.
  // blog.geotapp.com/robots.txt → 301 → geotapp.com/blog/robots.txt → proxy →
  // blog.geotapp.com/robots.txt → loop (500 in Cloudflare monitoring panel).
  // Serving inline avoids the round-trip entirely.
  if (pathname === '/blog/robots.txt') {
    return new NextResponse(
      'User-agent: *\nAllow: /\nDisallow: /blog/*/feed/\nDisallow: /blog/*/feed\n\nSitemap: https://geotapp.com/blog/sitemap_index.xml\n',
      {
        status: 200,
        headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=86400' },
      },
    );
  }

  // 1. Blog proxy — serve blog.geotapp.com WordPress content at geotapp.com/blog/
  // Exception: /blog and /blog/ (index) are served by Next.js, not proxied.
  // Exception: Article URLs (/blog/{locale?}/YYYY/MM/DD/slug/) are rendered by Next.js.
  // Exception: /blog/author/{slug}/ rendered by Next.js (dedicated author page
  // with localized bio, social links, Person schema). The WP default theme
  // serves a bare article archive at this URL; the Next.js route gives a
  // proper E-E-A-T author profile.
  // Proxying the WP root (/) causes a redirect loop: WP responds with a redirect
  // to geotapp.com/blog/ which the middleware re-intercepts indefinitely.
  const isArticleUrl = /^\/blog\/(?:[a-z]{2}\/)?20\d{2}\//.test(pathname);
  const isAuthorUrl = /^\/blog\/author\/[^/]+\/?$/.test(pathname);
  if (pathname.startsWith('/blog') && pathname !== '/blog' && pathname !== '/blog/' && !isArticleUrl && !isAuthorUrl) {
    const wpPath = pathname.slice(BLOG_BASE.length) || '/';
    const normalizedWpPath =
      wpPath === '/wp-sitemap.xml' ? '/wp-sitemap.xml/' : wpPath;
    const isNoCachePath = WP_NO_CACHE_PREFIXES.some((p) => wpPath.startsWith(p));
    const wpUrl = `${WP_ORIGIN}${normalizedWpPath}${req.nextUrl.search}`;

    const upstreamHeaders = new Headers(req.headers);
    upstreamHeaders.set('host', new URL(WP_ORIGIN).host);
    upstreamHeaders.set('x-forwarded-proto', 'https');
    // Tell WordPress the public-facing hostname so noindex guards based on
    // HTTP_HOST correctly identify proxied requests as geotapp.com traffic.
    // Without this, gtmsa_get_effective_request_host() falls back to
    // HTTP_HOST='blog.geotapp.com' and adds X-Robots-Tag: noindex.
    upstreamHeaders.set('x-forwarded-host', new URL(SITE_ORIGIN).host);
    // Proxy identification header — Apache .htaccess uses this to bypass the
    // 301 redirect from blog.geotapp.com → geotapp.com/blog/ for direct-fetch
    // requests. Without this, the proxy would receive the 301 and forward it
    // to the already-at-geotapp.com/blog/ browser → redirect loop.
    upstreamHeaders.set('x-geotapp-proxy', '1');
    // Bypass Cloudflare CDN cache on blog.geotapp.com.
    // blog.geotapp.com is itself behind Cloudflare. Its CDN can have stale 301
    // redirects cached (e.g. blog.geotapp.com/* → geotapp.com/blog/*) from
    // before x-geotapp-proxy was respected by Apache. Those cached redirects
    // are served by CF edge *before* Apache sees the request, so the proxy
    // header is ignored and the Worker receives a 301 that rewrites to the
    // same geotapp.com/blog/* URL → infinite redirect loop for Googlebot.
    // Cache-Control: no-cache forces CF to validate with origin on every
    // Worker-to-blog fetch, ensuring Apache always handles the request.
    upstreamHeaders.set('cache-control', 'no-cache');
    if (!upstreamHeaders.has('cf-visitor')) {
      upstreamHeaders.set('cf-visitor', '{"scheme":"https"}');
    }

    let wpRes: Response;
    let adminPostAction = '';
    try {
      const fetchInit: RequestInit = {
        method: req.method,
        headers: upstreamHeaders,
        redirect: 'manual',
      };

      if (!['GET', 'HEAD'].includes(req.method)) {
        const reqContentType = req.headers.get('content-type') ?? '';
        const isWpAdminPath = normalizedWpPath.startsWith('/wp-admin/');

        if (reqContentType.includes('application/x-www-form-urlencoded')) {
          // Read body as text to avoid Cloudflare→Apache streaming body mismatch (HTTP 400).
          // The same fix was already applied to admin-post.php; extended here to admin-ajax.php.
          const bodyText = await req.text();
          fetchInit.body = bodyText;
          if (isWpAdminPath && normalizedWpPath === '/wp-admin/admin-post.php') {
            adminPostAction = new URLSearchParams(bodyText).get('action') ?? '';
          }
        } else if (reqContentType.includes('multipart/form-data')) {
          // File uploads: read as ArrayBuffer so Content-Length is satisfied on the upstream connection.
          // Covers async-upload.php and any other wp-admin endpoint that handles multipart data.
          fetchInit.body = await req.arrayBuffer();
        } else {
          // For application/json and all other content types (including REST API PUT/POST/PATCH),
          // eagerly read as ArrayBuffer to avoid Cloudflare→Apache streaming body mismatch.
          // Passing req.body (ReadableStream) directly causes the body to arrive empty at PHP.
          fetchInit.body = await req.arrayBuffer();
        }
      }

      wpRes = await fetch(wpUrl, fetchInit);
    } catch {
      return new NextResponse('Blog temporarily unavailable', { status: 502 });
    }

    // Handle WordPress redirects — rewrite Location to geotapp.com/blog/...
    const location = wpRes.headers.get('location');
    if (location && [301, 302, 307, 308].includes(wpRes.status)) {
      const rewrittenLocation = rewriteWpUrl(location);
      const currentUrl = req.nextUrl.toString();
      const redirectHeaders = copyResponseHeaders(wpRes.headers, {
        noCache: isNoCachePath,
      });
      redirectHeaders.set('location', rewrittenLocation);

      const normalizedCurrent = currentUrl.replace(/\/$/, '');
      const normalizedLocation = rewrittenLocation.replace(/\/$/, '');
      if (
        normalizedLocation === normalizedCurrent &&
        req.nextUrl.pathname.endsWith('.xml') &&
        !req.nextUrl.pathname.endsWith('/')
      ) {
        const fallbackUrl = req.nextUrl.clone();
        fallbackUrl.pathname = `${fallbackUrl.pathname}/`;
        redirectHeaders.set('location', fallbackUrl.toString());
        return new NextResponse(null, {
          status: wpRes.status as 301 | 302 | 307 | 308,
          headers: redirectHeaders,
        });
      }

      return new NextResponse(null, {
        status: wpRes.status as 301 | 302 | 307 | 308,
        headers: redirectHeaders,
      });
    }

    // Work around blank-page responses from GTMSA admin-post actions behind reverse proxy.
    // Some plugin actions can return 200 with empty body and no redirect under proxy context.
    const isGtmsaAction =
      normalizedWpPath === '/wp-admin/admin-post.php' &&
      req.method === 'POST' &&
      ['gtmsa_backfill', 'gtmsa_run_queue_now'].includes(adminPostAction);
    if (isGtmsaAction && wpRes.status === 200 && !location) {
      const headers = copyResponseHeaders(wpRes.headers, { noCache: true });
      headers.set(
        'location',
        `${SITE_ORIGIN}${BLOG_BASE}/wp-admin/options-general.php?page=gtmsa-settings`,
      );
      return new NextResponse(null, {
        status: 302,
        headers,
      });
    }

    const contentType = wpRes.headers.get('content-type') ?? '';
    const isHtml = contentType.includes('text/html');
    const isXml = contentType.includes('xml') || contentType.includes('rss');
    const isCss = contentType.includes('text/css');

    if (isHtml || isXml || isCss) {
      const text = await wpRes.text();
      const headers = copyResponseHeaders(wpRes.headers, {
        rewrittenBody: true,
        noCache: isNoCachePath,
      });

      if (!isNoCachePath && isHtml) {
        headers.set('cache-control', 'public, max-age=3600');
      }

      if (!isNoCachePath && isXml) {
        headers.set('cache-control', 'public, max-age=86400');
      }

      return new NextResponse(rewriteWpContent(text), {
        status: wpRes.status,
        headers,
      });
    }

    const headers = copyResponseHeaders(wpRes.headers, { noCache: isNoCachePath });
    return new NextResponse(wpRes.body, {
      status: wpRes.status,
      headers,
    });
  }

  // 2. Bypass static files and API — security headers still applied for CSP coverage
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/static') ||
    PUBLIC_FILE.test(pathname)
  ) {
    const staticResponse = NextResponse.next();
    applySecurityHeaders(staticResponse);
    return staticResponse;
  }

  // 2b. /verifica — Public report verification page. Locale-agnostic: bypass
  // locale detection and serve the page directly without locale prefix redirect.
  if (pathname.startsWith('/verifica')) {
    const response = NextResponse.next();
    applySecurityHeaders(response);
    return response;
  }

  // 2c. /links — Instagram link-in-bio utility page. Locale-agnostic: bypass
  // locale detection and serve the page directly without locale prefix redirect.
  if (pathname === '/links' || pathname === '/links/') {
    const response = NextResponse.next();
    applySecurityHeaders(response);
    return response;
  }

  // 2d. Blog article URLs — rendered by Next.js [...slug] catch-all.
  // These have the locale embedded in the path (/blog/en/2026/...) not as a prefix.
  // Bypass locale routing so they don't get /it/ prepended.
  if (/^\/blog\/(?:[a-z]{2}\/)?20\d{2}\//.test(pathname)) {
    const response = NextResponse.next();
    applySecurityHeaders(response);
    return response;
  }

  // 2e. Blog author URLs — rendered by Next.js /blog/author/[slug]/ route.
  // Locale is detected from cookie/Accept-Language inside the page, not from
  // the URL prefix, so bypass locale routing to avoid the /it/blog/author/...
  // ↔ /blog/author/... redirect loop the locale router would otherwise create.
  if (/^\/blog\/author\/[^/]+\/?$/.test(pathname)) {
    const response = NextResponse.next();
    applySecurityHeaders(response);
    return response;
  }

  const pathnameLocale = getLocaleFromPathname(pathname);
  if (pathnameLocale) {
    // Locale-prefixed blog paths → strip locale and redirect to /blog/* for WordPress proxy.
    // Exception: /blog/ and /blog (index) are served by Next.js — do NOT redirect them or
    // the middleware creates an infinite loop (/it/blog/ → /blog/ → /it/blog/ → …).
    const strippedPath = stripLocaleFromPathname(pathname);
    // Next.js-served sub-paths of /blog/ — do NOT redirect to WP proxy.
    const BLOG_NEXTJS_PATHS = [`${BLOG_BASE}/feed/`];
    const isStrippedArticle = /^\/blog\/(?:[a-z]{2}\/)?20\d{2}\//.test(strippedPath);
    if (
      strippedPath.startsWith(BLOG_BASE) &&
      strippedPath !== BLOG_BASE &&
      strippedPath !== `${BLOG_BASE}/` &&
      !BLOG_NEXTJS_PATHS.includes(strippedPath) &&
      !isStrippedArticle
    ) {
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = strippedPath;
      return NextResponse.redirect(redirectUrl, 308);
    }

    // 301 redirect from Italian canonical slug to localized slug for non-IT locales.
    // This preserves SEO equity for URLs that Google indexed before slug translation
    // existed (e.g. /da/sektorer/elettricisti/ → /da/sektorer/elektrikere/).
    if (pathnameLocale !== 'it') {
      const strippedForRedirect = stripLocaleFromPathname(pathname);
      const segmentsForRedirect = strippedForRedirect.split('/').filter(Boolean);
      const redirectSegments = segmentsForRedirect.map((seg) => {
        // If seg is an Italian canonical that has a translation for this locale, use it.
        const translations = SLUG_MAP[seg];
        if (translations && translations[pathnameLocale] && translations[pathnameLocale] !== seg) {
          return translations[pathnameLocale]!;
        }
        return seg;
      });
      const needsRedirect = redirectSegments.some((seg, i) => seg !== segmentsForRedirect[i]);
      if (needsRedirect) {
        const trailing = pathname.endsWith('/') ? '/' : '';
        const redirectUrl = req.nextUrl.clone();
        redirectUrl.pathname = `/${pathnameLocale}/${redirectSegments.join('/')}${trailing}`;
        return NextResponse.redirect(redirectUrl, 301);
      }
    }

    // Reverse-translate localized slugs to canonical Italian paths.
    // The sitemap generates translated URLs (e.g. /nl/sectoren/schoonmaak/) but
    // Next.js app-router files use Italian canonical slugs (settori/pulizie).
    // Rewrite translated paths internally so the correct page.tsx is served
    // while the browser URL stays at the translated form.
    const strippedForReverse = stripLocaleFromPathname(pathname);
    const reverseMap = REVERSE_SLUG_MAP[pathnameLocale] ?? {};
    const slugSegments = strippedForReverse.split('/').filter(Boolean);
    const canonicalSegments = slugSegments.map((seg) => reverseMap[seg] ?? seg);
    const hasTranslatedSlugs = canonicalSegments.some((seg, i) => seg !== slugSegments[i]);

    if (hasTranslatedSlugs) {
      const canonicalInternalPath = `/${pathnameLocale}/${canonicalSegments.join('/')}/`;
      const rewriteUrl = req.nextUrl.clone();
      rewriteUrl.pathname = canonicalInternalPath;
      const rewriteResponse = NextResponse.rewrite(rewriteUrl);
      rewriteResponse.cookies.set(LOCALE_COOKIE_NAME, pathnameLocale, {
        path: '/',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 365,
      });
      applySecurityHeaders(rewriteResponse);
      return rewriteResponse;
    }

    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE_NAME, pathnameLocale, {
      path: '/',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365,
    });
    applySecurityHeaders(response);
    return response;
  }

  // Country detection priority:
  // 1. Cloudflare cf-ipcountry — set by Cloudflare edge, cannot be spoofed from the public internet.
  // 2. x-vercel-ip-country — Vercel infrastructure header (kept for portability).
  // 3. geo.country — Next.js/framework-level geo enrichment (runtime-dependent).
  // x-country is intentionally removed: it was publicly spoofable (any curl -H "x-country: DK"
  // could bypass locale routing). Use cf-ipcountry — the only country signal Cloudflare guarantees.
  const countryCode =
    req.headers.get('cf-ipcountry') ||
    req.headers.get('x-vercel-ip-country') ||
    (req as any).geo?.country ||
    null;

  const resolvedLocale = resolveLocale({
    cookieLocale: req.cookies.get(LOCALE_COOKIE_NAME)?.value,
    countryCode,
    acceptLanguage: req.headers.get('accept-language'),
  });

  const url = req.nextUrl.clone();
  url.pathname = localizePath(pathname, resolvedLocale);

  const response = NextResponse.redirect(url, 308);
  response.cookies.set(LOCALE_COOKIE_NAME, resolvedLocale, {
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365,
  });
  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, etc)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
