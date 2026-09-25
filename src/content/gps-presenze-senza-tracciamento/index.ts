import type { AppLocale } from '@/lib/i18n/config';
import type { PresenzeCopy } from './types';

const map: Partial<Record<AppLocale, () => Promise<{ default: PresenzeCopy }>>> = {
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

export async function getPresenzeCopy(locale: AppLocale): Promise<PresenzeCopy> {
  const loader = map[locale] ?? map['it']!;
  const mod = await loader();
  return mod.default;
}
