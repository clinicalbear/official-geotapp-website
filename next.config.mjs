import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Build 301 redirects from legacy .png/.jpg/.jpeg paths to their .webp counterparts.
// Generated at build time by scanning public/ for *.webp files and checking if a
// legacy raster file would have existed (i.e. references in older indexed pages).
function buildLegacyImageRedirects() {
  const redirects = [];
  const SKIP_DIRS = ['downloads']; // user-facing downloads stay JPG/PNG
  const SKIP_FILES = ['FaviconGeoTapp', 'icon']; // browser favicons stay PNG
  function walk(dir) {
    let entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); }
    catch { return; }
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        if (SKIP_DIRS.includes(e.name)) continue;
        walk(full);
        continue;
      }
      if (!e.name.endsWith('.webp')) continue;
      const base = e.name.slice(0, -5);
      if (SKIP_FILES.includes(base)) continue;
      const publicDir = path.join(__dirname, 'public');
      const rel = path.relative(publicDir, full).replace(/\\/g, '/');
      const relDir = path.posix.dirname(rel);
      const dirPrefix = relDir === '.' ? '' : `${relDir}/`;
      for (const ext of ['png', 'jpg', 'jpeg']) {
        redirects.push({
          source: `/${dirPrefix}${base}.${ext}`,
          destination: `/${dirPrefix}${base}.webp`,
          permanent: true,
        });
      }
    }
  }
  walk(path.join(__dirname, 'public'));
  return redirects;
}

// Slug translations — canonical (Italian) → all locales with different slugs
const SLUG_TRANSLATIONS = {
  'chi-siamo': {
    en: 'about-us', 'en-us': 'about-us', 'en-gb': 'about-us', 'en-au': 'about-us', 'en-ie': 'about-us', 'en-ca': 'about-us', de: 'uber-uns', nl: 'over-ons', fr: 'a-propos',
    es: 'quienes-somos', pt: 'sobre-nos', da: 'om-os', sv: 'om-oss', nb: 'om-oss', ru: 'o-nas',
  },
  'guida': {
    en: 'guide', 'en-us': 'guide', 'en-gb': 'guide', 'en-au': 'guide', 'en-ie': 'guide', 'en-ca': 'guide', de: 'anleitung', nl: 'gids', fr: 'guide',
    es: 'guia', pt: 'guia', da: 'vejledning', sv: 'guide', nb: 'guide', ru: 'rukovodstvo',
  },
  'settori': {
    en: 'sectors', 'en-us': 'sectors', 'en-gb': 'sectors', 'en-au': 'sectors', 'en-ie': 'sectors', 'en-ca': 'sectors', de: 'branchen', nl: 'sectoren', fr: 'secteurs',
    es: 'sectores', pt: 'setores', da: 'sektorer', sv: 'sektorer', nb: 'sektorer', ru: 'sektory',
  },
  'contact': {
    de: 'kontakt', es: 'contacto', pt: 'contacto',
    da: 'kontakt', sv: 'kontakt', nb: 'kontakt', ru: 'kontakt',
  },
  'pricing': {
    de: 'preise', nl: 'tarieven', fr: 'tarifs',
    es: 'precios', pt: 'precos', da: 'priser', sv: 'priser', nb: 'priser', ru: 'tseny',
  },
  'features': {
    de: 'funktionen', nl: 'functies', fr: 'fonctionnalites',
    es: 'funciones', pt: 'funcionalidades', da: 'funktioner', sv: 'funktioner', nb: 'funksjoner', ru: 'vozmozhnosti',
  },
  'products': {
    de: 'produkte', nl: 'producten', fr: 'produits',
    es: 'productos', pt: 'produtos', da: 'produkter', sv: 'produkter', nb: 'produkter', ru: 'produkty',
  },
  // Sector sub-pages
  'pulizie': {
    en: 'cleaning', 'en-us': 'cleaning', 'en-gb': 'cleaning', 'en-au': 'cleaning', 'en-ie': 'cleaning', 'en-ca': 'cleaning', de: 'reinigung', nl: 'schoonmaak', fr: 'nettoyage',
    es: 'limpieza', pt: 'limpeza', da: 'rengoering', sv: 'rengoering', nb: 'rengjoring', ru: 'uborka',
  },
  'installatori': {
    en: 'installers', 'en-us': 'installers', 'en-gb': 'installers', 'en-au': 'installers', 'en-ie': 'installers', 'en-ca': 'installers', de: 'installateure', nl: 'installateurs', fr: 'installateurs',
    es: 'instaladores', pt: 'instaladores', da: 'montorer', sv: 'montorer', nb: 'montorer', ru: 'montazhniki',
  },
  'sicurezza': {
    en: 'security', 'en-us': 'security', 'en-gb': 'security', 'en-au': 'security', 'en-ie': 'security', 'en-ca': 'security', de: 'sicherheit', nl: 'beveiliging', fr: 'securite',
    es: 'seguridad', pt: 'seguranca', da: 'sikkerhed', sv: 'sakerhet', nb: 'sikkerhet', ru: 'bezopasnost',
  },
  'risorse': {
    en: 'resources', 'en-us': 'resources', 'en-gb': 'resources', 'en-au': 'resources', 'en-ie': 'resources', 'en-ca': 'resources', de: 'ressourcen', nl: 'bronnen', fr: 'ressources',
    es: 'recursos', pt: 'recursos', da: 'ressourcer', sv: 'resurser', nb: 'ressurser', ru: 'resursy',
  },
  'edilizia': {
    en: 'construction', 'en-us': 'construction', 'en-gb': 'construction', 'en-au': 'construction', 'en-ie': 'construction', 'en-ca': 'construction', de: 'bauwesen', nl: 'bouw', fr: 'construction',
    es: 'construccion', pt: 'construcao', da: 'byggeri', sv: 'byggnation', nb: 'bygg', ru: 'stroitelstvo',
  },
  'impianti': {
    en: 'mechanical-electrical', 'en-us': 'mechanical-electrical', 'en-gb': 'mechanical-electrical', 'en-au': 'mechanical-electrical', 'en-ie': 'mechanical-electrical', 'en-ca': 'mechanical-electrical', de: 'anlagenbau', nl: 'installaties', fr: 'installations',
    es: 'instalaciones', pt: 'instalacoes', da: 'installationer', sv: 'installationer', nb: 'installasjoner', ru: 'inzhenernye-sistemy',
  },
  'manutenzione': {
    en: 'maintenance', 'en-us': 'maintenance', 'en-gb': 'maintenance', 'en-au': 'maintenance', 'en-ie': 'maintenance', 'en-ca': 'maintenance', de: 'wartung', nl: 'onderhoud', fr: 'maintenance',
    es: 'mantenimiento', pt: 'manutencao', da: 'vedligeholdelse', sv: 'underhall', nb: 'vedlikehold', ru: 'tekhobsluzhivanie',
  },
  'impresa-di-pulizie': {
    en: 'cleaning-company', 'en-us': 'cleaning-company', 'en-gb': 'cleaning-company', 'en-au': 'cleaning-company', 'en-ie': 'cleaning-company', 'en-ca': 'cleaning-company', de: 'reinigungsunternehmen', nl: 'schoonmaakbedrijf', fr: 'entreprise-nettoyage',
    es: 'empresa-limpieza', pt: 'empresa-limpeza', da: 'rengoringsfirma', sv: 'stadforetag', nb: 'rengjringsfirma', ru: 'kliningovaya-kompaniya',
  },
  // Competitor comparison pages
  'confronto': {
    en: 'compare', 'en-us': 'compare', 'en-gb': 'compare', 'en-au': 'compare', 'en-ie': 'compare', 'en-ca': 'compare', de: 'vergleich', nl: 'vergelijking', fr: 'comparaison',
    es: 'comparacion', pt: 'comparacao', da: 'sammenligning', sv: 'jamforelse', nb: 'sammenligning', ru: 'sravnenie',
  },
  // Legal pages
  'terms': {
    nl: 'voorwaarden', fr: 'conditions', es: 'terminos', pt: 'termos',
    da: 'vilkaar', sv: 'villkor', nb: 'vilkaar', ru: 'usloviya',
  },
};

// Removed locales and their slug translations → redirect to English equivalent
// All locales are currently active — nothing to redirect
const REMOVED_LOCALE_SLUGS = {};

const REMOVED_LOCALES = Object.keys(REMOVED_LOCALE_SLUGS);

const COMPOUND_CANONICAL_PARTS = [
  ['settori', 'pulizie'],
  ['settori', 'installatori'],
  ['settori', 'sicurezza'],
  ['settori', 'edilizia'],
  ['settori', 'impianti'],
  ['settori', 'manutenzione'],
  ['settori', 'impresa-di-pulizie'],
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
    // 11 lingue base. Le 5 en-XX variants (en-us/gb/au/ie/ca) sono gestite a parte
    // dove serve, perche' molte rewrites/redirect non hanno equivalenti regionali.
    const ACTIVE_LOCALES = ['it', 'en', 'de', 'nl', 'fr', 'es', 'pt', 'da', 'sv', 'nb', 'ru'];
    // Tutte le 16 lingue (per redirect che vanno applicati uniformemente, es. /demo/).
    const ALL_LOCALES = [...ACTIVE_LOCALES, 'en-us', 'en-gb', 'en-au', 'en-ie', 'en-ca'];

    // /demo/ -> /trial/ in TUTTE le 16 lingue (audit sitemap 2026-05-23: prima
    // solo 3 lingue avevano il redirect, le altre 13 servivano /demo/ con 200 OK).
    const demoToTrialRedirects = [
      { source: '/demo',   destination: '/trial/', permanent: true },
      { source: '/demo/',  destination: '/trial/', permanent: true },
      ...ALL_LOCALES.flatMap(locale => [
        { source: `/${locale}/demo`,   destination: `/${locale}/trial/`, permanent: true },
        { source: `/${locale}/demo/`,  destination: `/${locale}/trial/`, permanent: true },
      ]),
    ];

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
      ...demoToTrialRedirects,
      ...buildCompoundRedirects(),
      ...buildRedirects(),
      ...buildRemovedLocaleRedirects(),
      ...appRenames,
      ...legacyRedirects,
      ...buildLegacyImageRedirects(),
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
