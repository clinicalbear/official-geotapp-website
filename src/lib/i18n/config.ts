

export const SUPPORTED_LOCALES = [
  'da',
  'fr',
  'en',
  'it',
  'nb',
  'nl',
  'pt',
  'ru',
  'es',
  'sv',
  'de',
] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: AppLocale = 'it';

export const LOCALE_COOKIE_NAME = 'geotapp_locale';

export const LOCALE_LABELS: Record<AppLocale, string> = {
  da: '🇩🇰 Dansk',
  fr: '🇫🇷 Français',
  en: '🇬🇧 English',
  it: '🇮🇹 Italiano',
  nb: '🇳🇴 Norsk',
  nl: '🇳🇱 Nederlands',
  pt: '🇵🇹 Português',
  ru: '🇷🇺 Русский',
  es: '🇪🇸 Español',
  sv: '🇸🇪 Svenska',
  de: '🇩🇪 Deutsch',
};

export const COUNTRY_TO_LOCALE: Partial<Record<string, AppLocale>> = {
  IT: 'it',
  FR: 'fr',
  BE: 'fr',
  LU: 'fr',
  MC: 'fr',
  DE: 'de',
  AT: 'de',
  LI: 'de',
  ES: 'es',
  MX: 'es',
  AR: 'es',
  CL: 'es',
  PT: 'pt',
  BR: 'pt',
  NL: 'nl',
  SE: 'sv',
  DK: 'da',
  NO: 'nb',
  RU: 'ru',
  GB: 'en',
  IE: 'en',
  US: 'en',
  CA: 'en',
  AU: 'en',
  NZ: 'en',
};
