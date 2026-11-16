import type { AppLocale } from '@/lib/i18n/config';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';
import type { NovitaCopy, ToolKey } from './types';

const map: Partial<Record<string, () => Promise<{ default: NovitaCopy }>>> = {
  it: () => import('./it'),
  en: () => import('./en'),
  de: () => import('./de'),
  fr: () => import('./fr'),
  es: () => import('./es'),
  pt: () => import('./pt'),
  nl: () => import('./nl'),
  sv: () => import('./sv'),
  da: () => import('./da'),
  nb: () => import('./nb'),
  // ru: sospeso dall'11/11/2026 (SUSPENDED_LOCALES), la pagina russa non si pubblica:
  // se verra' riattivato, serve ru.ts. Fino ad allora ricade sull'inglese.
};

/** Testi della sezione per lingua; le varianti en-* usano `en`, con le correzioni del loro paese. */
export async function getNovitaCopy(locale: AppLocale): Promise<NovitaCopy> {
  const base = locale.split('-')[0];
  const loader = map[base] ?? map.en!;
  const mod = await loader();
  const copy = mod.default;
  const over = copy.overrides?.[locale];
  const tools = over
    ? (Object.fromEntries(
        (Object.keys(copy.tools) as ToolKey[]).map((k) => [k, { ...copy.tools[k], ...(over[k] ?? {}) }]),
      ) as NovitaCopy['tools'])
    : copy.tools;
  const merged: NovitaCopy = { ...copy, tools };
  return base === 'en' ? localizeEnglishDeep(merged, locale) : merged;
}
