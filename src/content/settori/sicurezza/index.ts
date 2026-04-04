import type { AppLocale } from '@/lib/i18n/config';
import type { SettoreContent } from '../types';

const map: Record<AppLocale, () => Promise<{ default: SettoreContent }>> = {
  it: () => import('./it'),
  en: () => import('./en'),
  de: () => import('./de'),
};

export async function getSicurezzaContent(locale: AppLocale): Promise<SettoreContent> {
  const loader = map[locale] ?? map['en'];
  const mod = await loader();
  return mod.default;
}
