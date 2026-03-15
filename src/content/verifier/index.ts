import type { AppLocale } from '@/lib/i18n/config';
import type { VerifierCopy } from './types';

const map: Record<AppLocale, () => Promise<{ default: VerifierCopy }>> = {
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
  ru: () => import('./ru'),
};

export async function getVerifierCopy(locale: AppLocale): Promise<VerifierCopy> {
  const loader = map[locale] ?? map['it'];
  const mod = await loader();
  return mod.default;
}
