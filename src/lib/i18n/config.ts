
export const SUPPORTED_LOCALES = [
  'it',
  'en',
  'de',
] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: AppLocale = 'it';

export const LOCALE_COOKIE_NAME = 'geotapp_locale';

export const LOCALE_LABELS: Record<AppLocale, string> = {
  it: '🇮🇹 Italiano',
  en: '🇬🇧 English',
  de: '🇩🇪 Deutsch',
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
};
