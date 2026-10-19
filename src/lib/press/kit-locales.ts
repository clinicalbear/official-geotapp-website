/**
 * Lingue in cui esiste il media kit (stesse 11 del CRM e di
 * scripts/build-press-kit.py). Le varianti inglesi del sito (en-us, en-gb, ...)
 * ricadono sul kit inglese.
 */
import type { AppLocale } from '@/lib/i18n/config';

export const PRESS_KIT_LOCALES = [
  'it', 'en', 'de', 'fr', 'es', 'pt', 'nl', 'sv', 'da', 'nb', 'ru',
] as const;
export type PressKitLocale = (typeof PRESS_KIT_LOCALES)[number];

/** Nome di ogni lingua scritto nella lingua stessa, per il selettore. */
export const PRESS_KIT_LANGUAGE_NAMES: Record<PressKitLocale, string> = {
  it: 'Italiano', en: 'English', de: 'Deutsch', fr: 'Français', es: 'Español',
  pt: 'Português', nl: 'Nederlands', sv: 'Svenska', da: 'Dansk', nb: 'Norsk', ru: 'Русский',
};

export function kitLocaleFor(locale: AppLocale | string): PressKitLocale {
  const base = String(locale).toLowerCase().split('-')[0];
  return (PRESS_KIT_LOCALES as readonly string[]).includes(base) ? (base as PressKitLocale) : 'en';
}
