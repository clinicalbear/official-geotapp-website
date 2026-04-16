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
    nl: 'over-ons',
  },
  'guida': {
    it: 'guida',
    en: 'guide',
    de: 'anleitung',
    nl: 'gids',
  },
  'settori': {
    it: 'settori',
    en: 'sectors',
    de: 'branchen',
    nl: 'sectoren',
  },
  'contact': {
    it: 'contact',
    en: 'contact',
    de: 'kontakt',
    nl: 'contact',
  },
  'pricing': {
    it: 'pricing',
    en: 'pricing',
    de: 'preise',
    nl: 'tarieven',
  },
  'features': {
    it: 'features',
    en: 'features',
    de: 'funktionen',
    nl: 'functies',
  },
  'products': {
    it: 'products',
    en: 'products',
    de: 'produkte',
    nl: 'producten',
  },
  // ── Sector sub-pages ────────────────────────────────────────────────────────
  'pulizie': {
    it: 'pulizie', en: 'cleaning', de: 'reinigung', nl: 'schoonmaak',
  },
  'installatori': {
    it: 'installatori', en: 'installers', de: 'installateure', nl: 'installateurs',
  },
  'sicurezza': {
    it: 'sicurezza', en: 'security', de: 'sicherheit', nl: 'beveiliging',
  },
  'risorse': {
    it: 'risorse', en: 'resources', de: 'ressourcen', nl: 'bronnen',
  },
  // ────────────────────────────────────────────────────────────────────────────
  'download': {
    it: 'download',
    en: 'download',
    de: 'herunterladen',
    nl: 'downloaden',
  },
  'demo': {
    it: 'demo', en: 'demo', de: 'demo', nl: 'demo',
  },
  'blog': {
    it: 'blog', en: 'blog', de: 'blog', nl: 'blog',
  },
  'confronto': {
    it: 'confronto', en: 'compare', de: 'vergleich', nl: 'vergelijking',
  },
  'login': {
    it: 'login', en: 'login', de: 'login', nl: 'login',
  },
  'privacy': {
    it: 'privacy', en: 'privacy', de: 'privacy', nl: 'privacy',
  },
  'terms': {
    it: 'terms', en: 'terms', de: 'terms', nl: 'voorwaarden',
  },
  'cookies': {
    it: 'cookies', en: 'cookies', de: 'cookies', nl: 'cookies',
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

/** Translate a full path (translates every segment that has a known translation) */
export function translatePath(path: string, locale: AppLocale): string {
  const segments = path.split('/').filter(Boolean);
  if (segments.length === 0) return '/';
  const translated = segments.map((seg) => translateSlug(seg, locale));
  return '/' + translated.join('/') + '/';
}
