import type { AppLocale } from '@/lib/i18n/config';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';
import type { ContestazioniCopy } from './types';

/**
 * La pagina esiste in tutte le lingue del sito: un file per lingua, scritto nativamente. Le varianti
 * regionali dell'inglese (en-gb, en-us...) usano `en`, con l'ortografia adattata come nelle altre risorse.
 */
const map: Partial<Record<AppLocale, () => Promise<{ default: ContestazioniCopy }>>> = {
  it: () => import('./it'),
  en: () => import('./en'),
  'en-us': () => import('./en'),
  'en-gb': () => import('./en'),
  'en-au': () => import('./en'),
  'en-ie': () => import('./en'),
  'en-ca': () => import('./en'),
  de: () => import('./de'),
  fr: () => import('./fr'),
  es: () => import('./es'),
  pt: () => import('./pt'),
  nl: () => import('./nl'),
  da: () => import('./da'),
  sv: () => import('./sv'),
  nb: () => import('./nb'),
  ru: () => import('./ru'),
};

export const LOCALES_CONTESTAZIONI = SUPPORTED_LOCALES.filter((l) => map[l as AppLocale]) as AppLocale[];

export async function getContestazioniCopy(locale: string): Promise<ContestazioniCopy | null> {
  const loader = map[locale as AppLocale];
  if (!loader) return null;
  const mod = await loader();
  return localizeEnglishDeep(mod.default, locale as AppLocale);
}
