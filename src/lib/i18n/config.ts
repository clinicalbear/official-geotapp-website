
export const SUPPORTED_LOCALES = [
  'it',
  'en',     // Generic English fallback (NZ, ZA, IN; x-default target)
  'en-us',  // United States (USD pricing, FLSA/Davis-Bacon/DCAA messaging)
  'en-gb',  // United Kingdom (GBP pricing, UK GDPR / Working Time Regulations)
  'en-au',  // Australia (AUD pricing, Fair Work Act 2009)
  'en-ie',  // Ireland (EUR pricing, Organisation of Working Time Act 1997)
  'en-ca',  // Canada (CAD pricing, federal + provincial labour codes)
  'de',
  'nl',
  'fr',
  'es',
  'pt',
  'da',
  'sv',
  'nb',
  'ru',
] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: AppLocale = 'it';

export const LOCALE_COOKIE_NAME = 'geotapp_locale';

export const LOCALE_LABELS: Record<AppLocale, string> = {
  it: '🇮🇹 Italiano',
  en: '🇬🇧 English',
  'en-us': '🇺🇸 English (US)',
  'en-gb': '🇬🇧 English (UK)',
  'en-au': '🇦🇺 English (AU)',
  'en-ie': '🇮🇪 English (IE)',
  'en-ca': '🇨🇦 English (CA)',
  de: '🇩🇪 Deutsch',
  nl: '🇳🇱 Nederlands',
  fr: '🇫🇷 Français',
  es: '🇪🇸 Español',
  pt: '🇵🇹 Português',
  da: '🇩🇰 Dansk',
  sv: '🇸🇪 Svenska',
  nb: '🇳🇴 Norsk',
  ru: '🇷🇺 Русский',
};

export const COUNTRY_TO_LOCALE: Partial<Record<string, AppLocale>> = {
  IT: 'it',
  DE: 'de',
  AT: 'de',
  LI: 'de',
  CH: 'de',
  // Regional English variants, country → dedicated locale-region.
  // Each maps to its own locale so hreflang signals targeting independently.
  // NZ continues to fall back to generic 'en' (volume too small to justify a
  // dedicated locale today; revisit if NZ traffic crosses ~50 sess/month).
  GB: 'en-gb',
  IE: 'en-ie',
  US: 'en-us',
  CA: 'en-ca',
  AU: 'en-au',
  NZ: 'en',
  NL: 'nl',
  BE: 'nl',
  SR: 'nl',
  FR: 'fr',
  ES: 'es',
  MX: 'es',
  AR: 'es',
  CL: 'es',
  CO: 'es',
  PT: 'pt',
  BR: 'pt',
  DK: 'da',
  SE: 'sv',
  NO: 'nb',
  RU: 'ru',
};

/**
 * English regional variants, every variant resolves to the base 'en' for
 * routing/dictionaries fallback. Used by helpers that need to know whether
 * a locale is "an English variant" without listing each one.
 */
export const EN_REGIONAL_LOCALES: ReadonlyArray<AppLocale> = [
  'en-us', 'en-gb', 'en-au', 'en-ie', 'en-ca',
] as const;

export function isEnglishLocale(locale: AppLocale): boolean {
  return locale === 'en' || (EN_REGIONAL_LOCALES as readonly string[]).includes(locale);
}
