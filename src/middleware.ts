
// Overview: middleware.ts
// Module: src
// Purpose: keeps implementation details explicit for maintenance, onboarding, and safer refactors.
// Note: preserve tenant isolation, role checks, and backward-compatible data contracts when editing.

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

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { LOCALE_COOKIE_NAME, SUPPORTED_LOCALES } from '@/lib/i18n/config';
import {
  getLocaleFromPathname,
  localizePath,
  resolveLocale,
  stripLocaleFromPathname,
} from '@/lib/i18n/locale-routing';

const PUBLIC_FILE = /\.(.*)$/;

/**
 * Applies hardened security headers to any NextResponse that renders content.
 * Applied only to non-blog, non-proxy responses (Next.js pages + API).
 *
 * Notes:
 * - COEP: credentialless (not require-corp) — cross-origin iframes such as the
 *   Google Maps embed on /contact load correctly; require-corp would block them
 *   because Google's embed server does not send Cross-Origin-Resource-Policy headers.
 * - Permissions-Policy: geolocation blocked at document level — the GeoTapp
 *   marketing site doesn't need JS geolocation; the mobile app handles that.
 */
function applySecurityHeaders(response: NextResponse): void {
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'geolocation=(), camera=(), microphone=()');
  response.headers.set('Cross-Origin-Embedder-Policy', 'credentialless');
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
  { path: '/products/geotapp-app/', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/products/geotapp-verifier/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/fortyx/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/products/zenith-seo/', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/pricing/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/pricing/bundle/', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/settori/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/pulizie/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/installatori/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/settori/sicurezza/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/blog/', priority: 0.85, changeFrequency: 'daily' },
  { path: '/demo/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/download/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/guida/', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact/', priority: 0.65, changeFrequency: 'monthly' },
  { path: '/chi-siamo/', priority: 0.55, changeFrequency: 'monthly' },
  { path: '/privacy/', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms/', priority: 0.3, changeFrequency: 'yearly' },
];

async function buildFullSitemap(): Promise<string> {
  const locales = SUPPORTED_LOCALES as readonly string[];
  const today = new Date().toISOString().split('T')[0];

  // 1. Locale pages: all locales × all routes with hreflang alternates.
  const localeEntries: string[] = [];
  for (const locale of locales) {
    for (const { path, priority, changeFrequency } of SITEMAP_ROUTES) {
      const url = `${SITEMAP_BASE_URL}/${locale}${path}`;
      const p = Math.round(priority * 0.85 * 100) / 100;
      const hreflangLines = [
        ...locales.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITEMAP_BASE_URL}/${l}${path}"/>`),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITEMAP_BASE_URL}/en${path}"/>`,
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

  // Redirect www → non-www (301 permanent)
  if (host !== null && host.startsWith('www.')) {
    const url = req.nextUrl.clone();
    url.host = host.slice(4); // rimuove "www."
    return NextResponse.redirect(url, { status: 301 });
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

  // 1. Blog proxy — serve blog.geotapp.com WordPress content at geotapp.com/blog/
  if (pathname.startsWith('/blog')) {
    const wpPath = pathname.slice(BLOG_BASE.length) || '/';
    const normalizedWpPath =
      wpPath === '/wp-sitemap.xml' ? '/wp-sitemap.xml/' : wpPath;
    const isNoCachePath = WP_NO_CACHE_PREFIXES.some((p) => wpPath.startsWith(p));
    const wpUrl = `${WP_ORIGIN}${normalizedWpPath}${req.nextUrl.search}`;

    const upstreamHeaders = new Headers(req.headers);
    upstreamHeaders.set('host', new URL(WP_ORIGIN).host);
    upstreamHeaders.set('x-forwarded-proto', 'https');
    // Proxy identification header — Apache .htaccess uses this to bypass the
    // 301 redirect from blog.geotapp.com → geotapp.com/blog/ for direct-fetch
    // requests. Without this, the proxy would receive the 301 and forward it
    // to the already-at-geotapp.com/blog/ browser → redirect loop.
    upstreamHeaders.set('x-geotapp-proxy', '1');
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

  const pathnameLocale = getLocaleFromPathname(pathname);
  if (pathnameLocale) {
    // Locale-prefixed blog paths → strip locale and redirect to /blog/* for WordPress proxy
    const strippedPath = stripLocaleFromPathname(pathname);
    if (strippedPath.startsWith(BLOG_BASE)) {
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = strippedPath;
      return NextResponse.redirect(redirectUrl, 308);
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

// Documentation continuity notes:
// maintenance-note-1: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-2: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-3: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-4: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-5: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-6: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-7: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-8: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-9: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-10: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-11: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-12: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-13: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-14: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-15: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-16: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-17: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-18: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-19: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-20: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-21: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-22: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-23: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-24: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-25: preserve deterministic behavior and additive-only compatibility guarantees.
// maintenance-note-26: preserve deterministic behavior and additive-only compatibility guarantees.
