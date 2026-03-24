// Slug translations (mirrors src/lib/i18n/slug-map.ts — kept in sync manually)
const SLUG_TRANSLATIONS = {
  'chi-siamo': { en: 'about-us', de: 'uber-uns', fr: 'qui-sommes-nous', es: 'quienes-somos', pt: 'quem-somos', nl: 'over-ons', da: 'om-os', sv: 'om-oss', nb: 'om-oss', ru: 'o-nas' },
  'guida':     { en: 'guide', de: 'anleitung', fr: 'guide', es: 'guia', pt: 'guia', nl: 'handleiding', da: 'vejledning', sv: 'guide', nb: 'guide', ru: 'rukovodstvo' },
  'settori':   { en: 'sectors', de: 'branchen', fr: 'secteurs', es: 'sectores', pt: 'setores', nl: 'sectoren', da: 'sektorer', sv: 'sektorer', nb: 'sektorer', ru: 'otrasli' },
  'contact':   { de: 'kontakt', es: 'contacto', pt: 'contato', da: 'kontakt', sv: 'kontakt', nb: 'kontakt', ru: 'kontakt' },
  'pricing':   { de: 'preise', fr: 'tarifs', es: 'precios', pt: 'precos', nl: 'prijzen', da: 'priser', sv: 'priser', nb: 'priser', ru: 'ceny' },
  'features':  { de: 'funktionen', fr: 'fonctionnalites', es: 'caracteristicas', pt: 'funcionalidades', nl: 'functies', da: 'funktioner', sv: 'funktioner', nb: 'funksjoner', ru: 'vozmozhnosti' },
  'products':  { de: 'produkte', fr: 'produits', es: 'productos', pt: 'produtos', nl: 'producten', da: 'produkter', sv: 'produkter', nb: 'produkter', ru: 'produkty' },
  'download':  { de: 'herunterladen', fr: 'telecharger', es: 'descargar', nl: 'downloaden', da: 'hent', sv: 'ladda-ned', nb: 'last-ned', ru: 'skachat' },
};

function buildRewrites() {
  const rewrites = [];
  for (const [canonical, translations] of Object.entries(SLUG_TRANSLATIONS)) {
    for (const [locale, translated] of Object.entries(translations)) {
      // Translated URL → canonical file path (with sub-paths support)
      rewrites.push({
        source: `/${locale}/${translated}/`,
        destination: `/${locale}/${canonical}/`,
      });
      rewrites.push({
        source: `/${locale}/${translated}/:path*/`,
        destination: `/${locale}/${canonical}/:path*/`,
      });
    }
  }
  return rewrites;
}

function buildRedirects() {
  const redirects = [];
  for (const [canonical, translations] of Object.entries(SLUG_TRANSLATIONS)) {
    for (const [locale, translated] of Object.entries(translations)) {
      // Old canonical URL → new translated URL (permanent redirect)
      redirects.push({
        source: `/${locale}/${canonical}/`,
        destination: `/${locale}/${translated}/`,
        permanent: true,
      });
      redirects.push({
        source: `/${locale}/${canonical}/:path*/`,
        destination: `/${locale}/${translated}/:path*/`,
        permanent: true,
      });
    }
  }
  return redirects;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  trailingSlash: true,
  async rewrites() {
    return buildRewrites();
  },
  async redirects() {
    return buildRedirects();
  },
  async headers() {
    return [
      {
        // Static assets: cache 1 year (immutable, content-hashed by Next.js)
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Images and fonts
        source: '/(.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|woff|woff2))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
      {
        // HTML pages: short TTL with stale-while-revalidate for TTFB
        source: '/((?!api|_next).*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400' },
        ],
      },
      // Sitemap and robots: must come AFTER the general rule to override it.
      // Next.js applies all matching header rules in order — last match wins.
      //
      // SWR strategy: Cloudflare edge caches sitemaps for 1 h (s-maxage=3600).
      // After expiry, serves stale while asynchronously re-fetching in background
      // (stale-while-revalidate=86400). Keeps crawler TTFB <50 ms on all shards.
      //
      // NOTE: named path-to-regexp groups (":id(...)") do NOT match "/" by default,
      // so "/:path(sitemap.xml|sitemap/0.xml)" would NOT match /sitemap/0.xml.
      // Three separate source rules avoid this limitation entirely.
      {
        source: '/sitemap.xml',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=3600, stale-while-revalidate=86400' }],
      },
      {
        // Sharded sitemap sub-pages: /sitemap/0.xml … /sitemap/11.xml
        source: '/sitemap/:id',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=3600, stale-while-revalidate=86400' }],
      },
      {
        source: '/robots.txt',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=3600, stale-while-revalidate=86400' }],
      },
    ];
  },
};

export default nextConfig;
