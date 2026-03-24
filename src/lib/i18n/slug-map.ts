import type { AppLocale } from './config';

/**
 * Maps canonical (Italian) page slugs to their localized equivalents.
 * Italian is the canonical form — other locales get translated slugs.
 * Used by localizePath() and buildLocaleAlternates().
 */
export const SLUG_MAP: Record<string, Record<AppLocale, string>> = {
  'chi-siamo': {
    it: 'chi-siamo',
    en: 'about-us',
    de: 'uber-uns',
    fr: 'qui-sommes-nous',
    es: 'quienes-somos',
    pt: 'quem-somos',
    nl: 'over-ons',
    da: 'om-os',
    sv: 'om-oss',
    nb: 'om-oss',
    ru: 'o-nas',
  },
  'guida': {
    it: 'guida',
    en: 'guide',
    de: 'anleitung',
    fr: 'guide',
    es: 'guia',
    pt: 'guia',
    nl: 'handleiding',
    da: 'vejledning',
    sv: 'guide',
    nb: 'guide',
    ru: 'rukovodstvo',
  },
  'settori': {
    it: 'settori',
    en: 'sectors',
    de: 'branchen',
    fr: 'secteurs',
    es: 'sectores',
    pt: 'setores',
    nl: 'sectoren',
    da: 'sektorer',
    sv: 'sektorer',
    nb: 'sektorer',
    ru: 'otrasli',
  },
  'contact': {
    it: 'contact',
    en: 'contact',
    de: 'kontakt',
    fr: 'contact',
    es: 'contacto',
    pt: 'contato',
    nl: 'contact',
    da: 'kontakt',
    sv: 'kontakt',
    nb: 'kontakt',
    ru: 'kontakt',
  },
  'pricing': {
    it: 'pricing',
    en: 'pricing',
    de: 'preise',
    fr: 'tarifs',
    es: 'precios',
    pt: 'precos',
    nl: 'prijzen',
    da: 'priser',
    sv: 'priser',
    nb: 'priser',
    ru: 'ceny',
  },
  'features': {
    it: 'features',
    en: 'features',
    de: 'funktionen',
    fr: 'fonctionnalites',
    es: 'caracteristicas',
    pt: 'funcionalidades',
    nl: 'functies',
    da: 'funktioner',
    sv: 'funktioner',
    nb: 'funksjoner',
    ru: 'vozmozhnosti',
  },
  'products': {
    it: 'products',
    en: 'products',
    de: 'produkte',
    fr: 'produits',
    es: 'productos',
    pt: 'produtos',
    nl: 'producten',
    da: 'produkter',
    sv: 'produkter',
    nb: 'produkter',
    ru: 'produkty',
  },
  'download': {
    it: 'download',
    en: 'download',
    de: 'herunterladen',
    fr: 'telecharger',
    es: 'descargar',
    pt: 'download',
    nl: 'downloaden',
    da: 'hent',
    sv: 'ladda-ned',
    nb: 'last-ned',
    ru: 'skachat',
  },
  'demo': {
    it: 'demo', en: 'demo', de: 'demo', fr: 'demo', es: 'demo',
    pt: 'demo', nl: 'demo', da: 'demo', sv: 'demo', nb: 'demo', ru: 'demo',
  },
  'blog': {
    it: 'blog', en: 'blog', de: 'blog', fr: 'blog', es: 'blog',
    pt: 'blog', nl: 'blog', da: 'blog', sv: 'blog', nb: 'blog', ru: 'blog',
  },
  'login': {
    it: 'login', en: 'login', de: 'login', fr: 'login', es: 'login',
    pt: 'login', nl: 'login', da: 'login', sv: 'login', nb: 'login', ru: 'login',
  },
  'privacy': {
    it: 'privacy', en: 'privacy', de: 'privacy', fr: 'privacy', es: 'privacy',
    pt: 'privacy', nl: 'privacy', da: 'privacy', sv: 'privacy', nb: 'privacy', ru: 'privacy',
  },
  'terms': {
    it: 'terms', en: 'terms', de: 'terms', fr: 'terms', es: 'terms',
    pt: 'terms', nl: 'terms', da: 'terms', sv: 'terms', nb: 'terms', ru: 'terms',
  },
  'cookies': {
    it: 'cookies', en: 'cookies', de: 'cookies', fr: 'cookies', es: 'cookies',
    pt: 'cookies', nl: 'cookies', da: 'cookies', sv: 'cookies', nb: 'cookies', ru: 'cookies',
  },
};

/** Reverse map: translated slug → canonical slug (for middleware/rewrites) */
export const REVERSE_SLUG_MAP: Record<AppLocale, Record<string, string>> = (() => {
  const result = {} as Record<AppLocale, Record<string, string>>;
  for (const [canonical, translations] of Object.entries(SLUG_MAP)) {
    for (const [locale, translated] of Object.entries(translations) as [AppLocale, string][]) {
      if (!result[locale]) result[locale] = {};
      result[locale][translated] = canonical;
    }
  }
  return result;
})();

/** Translate a canonical slug to its localized form */
export function translateSlug(canonicalSlug: string, locale: AppLocale): string {
  return SLUG_MAP[canonicalSlug]?.[locale] ?? canonicalSlug;
}

/** Translate a full path (translates only the first segment, preserves sub-paths) */
export function translatePath(path: string, locale: AppLocale): string {
  const segments = path.split('/').filter(Boolean);
  if (segments.length === 0) return '/';
  const translated = translateSlug(segments[0], locale);
  segments[0] = translated;
  return '/' + segments.join('/') + '/';
}
