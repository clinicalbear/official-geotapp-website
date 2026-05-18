import type { AppLocale } from './config';

/**
 * Maps canonical (Italian) page slugs to their localized equivalents.
 * Italian is the canonical form — other locales get translated slugs.
 * Used by localizePath() and buildLocaleAlternates().
 */
export const SLUG_MAP: Record<string, Partial<Record<AppLocale, string>>> = {
  'chi-siamo': {
    it: 'chi-siamo',
    en: 'about-us',
    'en-us': 'about-us',
    'en-gb': 'about-us',
    'en-au': 'about-us',
    'en-ie': 'about-us',
    'en-ca': 'about-us',
    de: 'uber-uns',
    nl: 'over-ons',
    fr: 'a-propos',
    es: 'quienes-somos',
    pt: 'sobre-nos',
    da: 'om-os',
    sv: 'om-oss',
    nb: 'om-oss',
    ru: 'o-nas',
  },
  'guida': {
    it: 'guida',
    en: 'guide',
    'en-us': 'guide',
    'en-gb': 'guide',
    'en-au': 'guide',
    'en-ie': 'guide',
    'en-ca': 'guide',
    de: 'anleitung',
    nl: 'gids',
    fr: 'guide',
    es: 'guia',
    pt: 'guia',
    da: 'vejledning',
    sv: 'guide',
    nb: 'guide',
    ru: 'rukovodstvo',
  },
  'settori': {
    it: 'settori',
    en: 'sectors',
    'en-us': 'sectors',
    'en-gb': 'sectors',
    'en-au': 'sectors',
    'en-ie': 'sectors',
    'en-ca': 'sectors',
    de: 'branchen',
    nl: 'sectoren',
    fr: 'secteurs',
    es: 'sectores',
    pt: 'setores',
    da: 'sektorer',
    sv: 'sektorer',
    nb: 'sektorer',
    ru: 'sektory',
  },
  'contact': {
    it: 'contact',
    en: 'contact',
    'en-us': 'contact',
    'en-gb': 'contact',
    'en-au': 'contact',
    'en-ie': 'contact',
    'en-ca': 'contact',
    de: 'kontakt',
    nl: 'contact',
    fr: 'contact',
    es: 'contacto',
    pt: 'contacto',
    da: 'kontakt',
    sv: 'kontakt',
    nb: 'kontakt',
    ru: 'kontakt',
  },
  'pricing': {
    it: 'pricing',
    en: 'pricing',
    'en-us': 'pricing',
    'en-gb': 'pricing',
    'en-au': 'pricing',
    'en-ie': 'pricing',
    'en-ca': 'pricing',
    de: 'preise',
    nl: 'tarieven',
    fr: 'tarifs',
    es: 'precios',
    pt: 'precos',
    da: 'priser',
    sv: 'priser',
    nb: 'priser',
    ru: 'tseny',
  },
  'features': {
    it: 'features',
    en: 'features',
    'en-us': 'features',
    'en-gb': 'features',
    'en-au': 'features',
    'en-ie': 'features',
    'en-ca': 'features',
    de: 'funktionen',
    nl: 'functies',
    fr: 'fonctionnalites',
    es: 'funciones',
    pt: 'funcionalidades',
    da: 'funktioner',
    sv: 'funktioner',
    nb: 'funksjoner',
    ru: 'vozmozhnosti',
  },
  'products': {
    it: 'products',
    en: 'products',
    'en-us': 'products',
    'en-gb': 'products',
    'en-au': 'products',
    'en-ie': 'products',
    'en-ca': 'products',
    de: 'produkte',
    nl: 'producten',
    fr: 'produits',
    es: 'productos',
    pt: 'produtos',
    da: 'produkter',
    sv: 'produkter',
    nb: 'produkter',
    ru: 'produkty',
  },
  // ── Sector sub-pages ────────────────────────────────────────────────────────
  'pulizie': {
    it: 'pulizie', en: 'cleaning', de: 'reinigung', nl: 'schoonmaak',
    fr: 'nettoyage', es: 'limpieza', pt: 'limpeza',
    da: 'rengoering', sv: 'rengoering', nb: 'rengjoring', ru: 'uborka',
  },
  'installatori': {
    it: 'installatori', en: 'installers', de: 'installateure', nl: 'installateurs',
    fr: 'installateurs', es: 'instaladores', pt: 'instaladores',
    da: 'montorer', sv: 'montorer', nb: 'montorer', ru: 'montazhniki',
  },
  'sicurezza': {
    it: 'sicurezza', en: 'security', de: 'sicherheit', nl: 'beveiliging',
    fr: 'securite', es: 'seguridad', pt: 'seguranca',
    da: 'sikkerhed', sv: 'sakerhet', nb: 'sikkerhet', ru: 'bezopasnost',
  },
  'risorse': {
    it: 'risorse', en: 'resources', de: 'ressourcen', nl: 'bronnen',
    fr: 'ressources', es: 'recursos', pt: 'recursos',
    da: 'ressourcer', sv: 'resurser', nb: 'ressurser', ru: 'resursy',
  },
  'edilizia': {
    it: 'edilizia', en: 'construction', de: 'bauwesen', nl: 'bouw',
    fr: 'construction', es: 'construccion', pt: 'construcao',
    da: 'byggeri', sv: 'byggnation', nb: 'bygg', ru: 'stroitelstvo',
  },
  'impianti': {
    it: 'impianti', en: 'mechanical-electrical', de: 'anlagenbau', nl: 'installaties',
    fr: 'installations', es: 'instalaciones', pt: 'instalacoes',
    da: 'installationer', sv: 'installationer', nb: 'installasjoner', ru: 'inzhenernye-sistemy',
  },
  'manutenzione': {
    it: 'manutenzione', en: 'maintenance', de: 'wartung', nl: 'onderhoud',
    fr: 'maintenance', es: 'mantenimiento', pt: 'manutencao',
    da: 'vedligeholdelse', sv: 'underhall', nb: 'vedlikehold', ru: 'tekhobsluzhivanie',
  },
  'impresa-di-pulizie': {
    it: 'impresa-di-pulizie', en: 'cleaning-company', de: 'reinigungsunternehmen', nl: 'schoonmaakbedrijf',
    fr: 'entreprise-nettoyage', es: 'empresa-limpieza', pt: 'empresa-limpeza',
    da: 'rengoringsfirma', sv: 'stadforetag', nb: 'rengjringsfirma', ru: 'kliningovaya-kompaniya',
  },
  'elettricisti': {
    it: 'elettricisti', en: 'electricians', de: 'elektriker', nl: 'elektriciens',
    fr: 'electriciens', es: 'electricistas', pt: 'eletricistas',
    da: 'elektrikere', sv: 'elektriker', nb: 'elektrikere', ru: 'elektriki',
  },
  'idraulici': {
    it: 'idraulici', en: 'plumbers', de: 'klempner', nl: 'loodgieters',
    fr: 'plombiers', es: 'fontaneros', pt: 'canalizadores',
    da: 'vvs-installatorer', sv: 'vvs-installatorer', nb: 'rorleggere', ru: 'santekhniki',
  },
  'termoidraulici': {
    it: 'termoidraulici', en: 'hvac-plumbers', de: 'heizung-sanitaer', nl: 'cv-installateurs',
    fr: 'plombiers-chauffagistes', es: 'fontaneros-calefaccion', pt: 'canalizadores-aquecimento',
    da: 'vvs-vand-varme', sv: 'vvs-och-varme', nb: 'rorleggere-vvs', ru: 'santekhnika-otoplenie',
  },
  // ───────���──────────────────────────────��────────────────────────────���────────
  'download': {
    it: 'download',
    en: 'download',
    'en-us': 'download',
    'en-gb': 'download',
    'en-au': 'download',
    'en-ie': 'download',
    'en-ca': 'download',
    de: 'herunterladen',
    nl: 'downloaden',
    fr: 'download',
    es: 'descargar',
    pt: 'download',
    da: 'download',
    sv: 'download',
    nb: 'download',
    ru: 'download',
  },
  'demo': {
    it: 'demo', en: 'demo', de: 'demo', nl: 'demo',
    fr: 'demo', es: 'demo', pt: 'demo', da: 'demo', sv: 'demo', nb: 'demo', ru: 'demo',
  },
  'blog': {
    it: 'blog', en: 'blog', de: 'blog', nl: 'blog',
    fr: 'blog', es: 'blog', pt: 'blog', da: 'blog', sv: 'blog', nb: 'blog', ru: 'blog',
  },
  'confronto': {
    it: 'confronto', en: 'compare', de: 'vergleich', nl: 'vergelijking',
    fr: 'comparaison', es: 'comparacion', pt: 'comparacao',
    da: 'sammenligning', sv: 'jamforelse', nb: 'sammenligning', ru: 'sravnenie',
  },
  'login': {
    it: 'login', en: 'login', de: 'login', nl: 'login',
    fr: 'login', es: 'login', pt: 'login', da: 'login', sv: 'login', nb: 'login', ru: 'login',
  },
  'privacy': {
    it: 'privacy', en: 'privacy', de: 'privacy', nl: 'privacy',
    fr: 'privacy', es: 'privacy', pt: 'privacy', da: 'privacy', sv: 'privacy', nb: 'privacy', ru: 'privacy',
  },
  'terms': {
    it: 'terms', en: 'terms', de: 'terms', nl: 'voorwaarden',
    fr: 'conditions', es: 'terminos', pt: 'termos',
    da: 'vilkaar', sv: 'villkor', nb: 'vilkaar', ru: 'usloviya',
  },
  'cookies': {
    it: 'cookies', en: 'cookies', de: 'cookies', nl: 'cookies',
    fr: 'cookies', es: 'cookies', pt: 'cookies', da: 'cookies', sv: 'cookies', nb: 'cookies', ru: 'cookies',
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
