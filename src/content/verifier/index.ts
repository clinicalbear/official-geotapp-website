import type { AppLocale } from '@/lib/i18n/config';
import type { VerifierCopy } from './types';

const map: Partial<Record<AppLocale, () => Promise<{ default: VerifierCopy }>>> = {
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

export async function getVerifierCopy(locale: AppLocale): Promise<VerifierCopy> {
  const loader = (map[locale] ?? map['it'])!;
  const mod = await loader();
  return mod.default;
}
