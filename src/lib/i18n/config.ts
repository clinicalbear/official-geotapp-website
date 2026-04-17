
export const SUPPORTED_LOCALES = [
  'it',
  'en',
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
  GB: 'en',
  IE: 'en',
  US: 'en',
  CA: 'en',
  AU: 'en',
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
