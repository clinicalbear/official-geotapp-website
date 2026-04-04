// Slug translations — only IT canonical → EN and DE translated slugs
const SLUG_TRANSLATIONS = {
  'chi-siamo':    { en: 'about-us',   de: 'uber-uns' },
  'guida':        { en: 'guide',      de: 'anleitung' },
  'settori':      { en: 'sectors',    de: 'branchen' },
  'contact':      {                   de: 'kontakt' },
  'pricing':      {                   de: 'preise' },
  'features':     {                   de: 'funktionen' },
  'products':     {                   de: 'produkte' },
  // Sector sub-pages
  'pulizie':      { en: 'cleaning',   de: 'reinigung' },
  'installatori': { en: 'installers', de: 'installateure' },
  'sicurezza':    { en: 'security',   de: 'sicherheit' },
  'risorse':      { en: 'resources',  de: 'ressourcen' },
  // Competitor comparison pages
  'confronto':    { en: 'compare',    de: 'vergleich' },
};

// Removed locales and their slug translations → redirect to English equivalent
const REMOVED_LOCALE_SLUGS = {
  fr: { 'qui-sommes-nous': 'about-us', 'guide': 'guide', 'secteurs': 'sectors', 'tarifs': 'pricing', 'fonctionnalites': 'features', 'produits': 'products', 'nettoyage': 'cleaning', 'installateurs': 'installers', 'securite': 'security', 'ressources': 'resources', 'comparaison': 'compare', 'kontakt': 'contact', },
  es: { 'quienes-somos': 'about-us', 'guia': 'guide', 'sectores': 'sectors', 'precios': 'pricing', 'caracteristicas': 'features', 'productos': 'products', 'limpieza': 'cleaning', 'instaladores': 'installers', 'seguridad': 'security', 'recursos': 'resources', 'comparacion': 'compare', 'contacto': 'contact', },
  pt: { 'quem-somos': 'about-us', 'guia': 'guide', 'setores': 'sectors', 'precos': 'pricing', 'funcionalidades': 'features', 'produtos': 'products', 'limpeza': 'cleaning', 'instaladores': 'installers', 'seguranca': 'security', 'recursos': 'resources', 'comparacao': 'compare', 'contato': 'contact', },
  nl: { 'over-ons': 'about-us', 'handleiding': 'guide', 'sectoren': 'sectors', 'prijzen': 'pricing', 'functies': 'features', 'producten': 'products', 'schoonmaak': 'cleaning', 'installateurs': 'installers', 'beveiliging': 'security', 'bronnen': 'resources', 'vergelijking': 'compare', },
  da: { 'om-os': 'about-us', 'vejledning': 'guide', 'sektorer': 'sectors', 'priser': 'pricing', 'funktioner': 'features', 'produkter': 'products', 'rengoring': 'cleaning', 'installatorer': 'installers', 'sikkerhed': 'security', 'ressourcer': 'resources', 'sammenligning': 'compare', 'kontakt': 'contact', },
  sv: { 'om-oss': 'about-us', 'guide': 'guide', 'sektorer': 'sectors', 'priser': 'pricing', 'funktioner': 'features', 'produkter': 'products', 'stadning': 'cleaning', 'installatorer': 'installers', 'sakerhet': 'security', 'resurser': 'resources', 'jamforelse': 'compare', 'kontakt': 'contact', },
  nb: { 'om-oss': 'about-us', 'guide': 'guide', 'sektorer': 'sectors', 'priser': 'pricing', 'funksjoner': 'features', 'produkter': 'products', 'rengjoring': 'cleaning', 'installatorer': 'installers', 'sikkerhet': 'security', 'ressurser': 'resources', 'sammenligning': 'compare', 'kontakt': 'contact', },
  ru: { 'o-nas': 'about-us', 'rukovodstvo': 'guide', 'otrasli': 'sectors', 'ceny': 'pricing', 'vozmozhnosti': 'features', 'produkty': 'products', 'uborka': 'cleaning', 'montazhniki': 'installers', 'bezopasnost': 'security', 'resursy': 'resources', 'sravnenie': 'compare', 'kontakt': 'contact', },
};

const REMOVED_LOCALES = Object.keys(REMOVED_LOCALE_SLUGS);

const COMPOUND_CANONICAL_PARTS = [
  ['settori', 'pulizie'],
  ['settori', 'installatori'],
  ['settori', 'sicurezza'],
  ['settori', 'pulizie',      'risorse'],
  ['settori', 'installatori', 'risorse'],
  ['settori', 'sicurezza',    'risorse'],
];

function buildCompoundRewrites() {
  const rewrites = [];
  for (const parts of COMPOUND_CANONICAL_PARTS) {
    const canonicalPath = parts.join('/');
    const locales = Object.keys(SLUG_TRANSLATIONS[parts[0]] || {});
    for (const locale of locales) {
      const translatedPath = parts.map((p) => SLUG_TRANSLATIONS[p]?.[locale] ?? p).join('/');
      if (translatedPath === canonicalPath) continue;
      rewrites.push({ source: `/${locale}/${translatedPath}/`,       destination: `/${locale}/${canonicalPath}/` });
      rewrites.push({ source: `/${locale}/${translatedPath}/:path*/`, destination: `/${locale}/${canonicalPath}/:path*/` });
    }
  }
  return rewrites;
}

function buildCompoundRedirects() {
  const redirects = [];
  for (const parts of COMPOUND_CANONICAL_PARTS) {
    const parentTranslations = SLUG_TRANSLATIONS[parts[0]] || {};
    for (const [locale, translatedParent] of Object.entries(parentTranslations)) {
      const italianSub    = parts.slice(1).join('/');
      const translatedSub = parts.slice(1).map((p) => SLUG_TRANSLATIONS[p]?.[locale] ?? p).join('/');
      if (italianSub === translatedSub) continue;
      redirects.push({ source: `/${locale}/${translatedParent}/${italianSub}/`,  destination: `/${locale}/${translatedParent}/${translatedSub}/`, permanent: true });
      redirects.push({ source: `/${locale}/${translatedParent}/${italianSub}`,   destination: `/${locale}/${translatedParent}/${translatedSub}/`, permanent: true });
    }
  }
  return redirects;
}

function buildRewrites() {
  const rewrites = [];
  for (const [canonical, translations] of Object.entries(SLUG_TRANSLATIONS)) {
    for (const [locale, translated] of Object.entries(translations)) {
      rewrites.push({ source: `/${locale}/${translated}/`,        destination: `/${locale}/${canonical}/` });
      rewrites.push({ source: `/${locale}/${translated}/:path*/`, destination: `/${locale}/${canonical}/:path*/` });
    }
  }
  return rewrites;
}

function buildRedirects() {
  const redirects = [];
  for (const [canonical, translations] of Object.entries(SLUG_TRANSLATIONS)) {
    for (const [locale, translated] of Object.entries(translations)) {
      redirects.push({ source: `/${locale}/${canonical}`,          destination: `/${locale}/${translated}/`, permanent: true });
      redirects.push({ source: `/${locale}/${canonical}/`,         destination: `/${locale}/${translated}/`, permanent: true });
      redirects.push({ source: `/${locale}/${canonical}/:path*`,   destination: `/${locale}/${translated}/:path*/`, permanent: true });
      redirects.push({ source: `/${locale}/${canonical}/:path*/`,  destination: `/${locale}/${translated}/:path*/`, permanent: true });
    }
  }
  return redirects;
}

// Redirects for removed locales → English equivalent
function buildRemovedLocaleRedirects() {
  const redirects = [];
  for (const [locale, slugMap] of Object.entries(REMOVED_LOCALE_SLUGS)) {
    // Specific slug redirects (translated slug → English equivalent)
    for (const [translatedSlug, enSlug] of Object.entries(slugMap)) {
      redirects.push({ source: `/${locale}/${translatedSlug}`,          destination: `/en/${enSlug}/`, permanent: true });
      redirects.push({ source: `/${locale}/${translatedSlug}/`,         destination: `/en/${enSlug}/`, permanent: true });
      redirects.push({ source: `/${locale}/${translatedSlug}/:path*`,   destination: `/en/${enSlug}/:path*/`, permanent: true });
      redirects.push({ source: `/${locale}/${translatedSlug}/:path*/`,  destination: `/en/${enSlug}/:path*/`, permanent: true });
    }
    // Catch-all: /{locale}/:path* → /en/:path*
    redirects.push({ source: `/${locale}/:path*/`, destination: `/en/:path*/`, permanent: true });
    redirects.push({ source: `/${locale}/:path*`,  destination: `/en/:path*/`, permanent: true });
    redirects.push({ source: `/${locale}/`,        destination: `/en/`,        permanent: true });
    redirects.push({ source: `/${locale}`,         destination: `/en/`,        permanent: true });
  }
  return redirects;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  trailingSlash: true,
  async rewrites() {
    return [...buildCompoundRewrites(), ...buildRewrites()];
  },
  async redirects() {
    const ACTIVE_LOCALES = ['it', 'en', 'de'];

    const appRenames = [
      { source: '/products/geotapp-app',        destination: '/products/geotapp-timetracker/', permanent: true },
      { source: '/products/geotapp-app/',        destination: '/products/geotapp-timetracker/', permanent: true },
      { source: '/products/geotapp-app/:path*',  destination: '/products/geotapp-timetracker/:path*/', permanent: true },
      { source: '/products/geotapp-app/:path*/', destination: '/products/geotapp-timetracker/:path*/', permanent: true },
      ...ACTIVE_LOCALES.flatMap((l) => [
        { source: `/${l}/products/geotapp-app`,        destination: `/${l}/products/geotapp-timetracker/`, permanent: true },
        { source: `/${l}/products/geotapp-app/`,        destination: `/${l}/products/geotapp-timetracker/`, permanent: true },
        { source: `/${l}/products/geotapp-app/:path*`,  destination: `/${l}/products/geotapp-timetracker/:path*/`, permanent: true },
        { source: `/${l}/products/geotapp-app/:path*/`, destination: `/${l}/products/geotapp-timetracker/:path*/`, permanent: true },
      ]),
    ];

    const legacyRedirects = [
      { source: '/contatti',  destination: '/it/contact/', permanent: true },
      { source: '/contatti/', destination: '/it/contact/', permanent: true },
      { source: '/integrations',  destination: '/', permanent: true },
      { source: '/integrations/', destination: '/', permanent: true },
      ...ACTIVE_LOCALES.map((l) => ({ source: `/${l}/integrations`,  destination: `/${l}/`, permanent: true })),
      ...ACTIVE_LOCALES.map((l) => ({ source: `/${l}/integrations/`, destination: `/${l}/`, permanent: true })),
    ];

    return [
      ...buildCompoundRedirects(),
      ...buildRedirects(),
      ...buildRemovedLocaleRedirects(),
      ...appRenames,
      ...legacyRedirects,
    ];
  },
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/(.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|woff|woff2))',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
      },
      {
        source: '/((?!api|_next).*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400' }],
      },
      {
        source: '/sitemap.xml',
        headers: [{ key: 'Cache-Control', value: 'public, s-maxage=3600, stale-while-revalidate=86400' }],
      },
      {
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
