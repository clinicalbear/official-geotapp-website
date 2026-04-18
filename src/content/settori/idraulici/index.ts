import type { AppLocale } from '@/lib/i18n/config';
import type { SettoreContent } from '../types';

const map: Partial<Record<AppLocale, () => Promise<{ default: SettoreContent }>>> = {
  it: () => import('./it'),
  en: () => import('./en'),
  de: () => import('./de'),
  nl: () => import('./nl'),
  fr: () => import('./fr'),
  es: () => import('./es'),
  pt: () => import('./pt'),
  da: () => import('./da'),
  sv: () => import('./sv'),
  nb: () => import('./nb'),
  ru: () => import('./ru'),
};

export async function getIdrauliciContent(locale: AppLocale): Promise<SettoreContent> {
  const loader = (map[locale] ?? map['en'])!;
  const mod = await loader();
  return mod.default;
}
