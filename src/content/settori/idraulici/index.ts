import type { AppLocale } from '@/lib/i18n/config';
import type { SettoreContent } from '../types';
import { REGIONAL_META } from './regional-meta';

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
  // Le varianti regionali EN condividono il corpo inglese ma hanno un blocco di
  // conformita' proprio (UPC/IPC, WRAS, Gas Safe): dove esiste, lo snippet lo dice
  // invece di ripetere quello generico. Vedi regional-meta.ts per la misura.
  const regional = REGIONAL_META[locale];
  if (!regional) return mod.default;
  return { ...mod.default, meta: regional };
}
