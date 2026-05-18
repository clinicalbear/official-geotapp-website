import type { AppLocale } from '@/lib/i18n/config';
import type { SettoreContent } from '../types';

const map: Partial<Record<AppLocale, () => Promise<{ default: SettoreContent }>>> = {
  it: () => import('./it'),
  en: () => import('./en'),
  'en-us': () => import('./en'),
  'en-gb': () => import('./en'),
  'en-au': () => import('./en'),
  'en-ie': () => import('./en'),
  'en-ca': () => import('./en'),
  de: () => import('./de'),
  nl: () => import('./nl'),
};

export async function getInstallatoriContent(locale: AppLocale): Promise<SettoreContent> {
  const loader = (map[locale] ?? map['en'])!;
  const mod = await loader();
  return mod.default;
}
