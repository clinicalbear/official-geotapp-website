import type { AppLocale } from '@/lib/i18n/config';
import type { ContestazioniCopy } from './types';

/**
 * Lingue in cui la pagina esiste. Si pubblica SOLO quando ci sono tutte e 11 (regola di Mike): fino
 * ad allora le altre lingue non hanno la pagina (404), non una copia italiana, e la pagina non entra
 * nella mappa del sito. Aggiungere una lingua = una riga qui, il suo file, e (a 11 su 11) la mappa del
 * sito e gli hreflang completi in page.tsx.
 */
const map: Partial<Record<AppLocale, () => Promise<{ default: ContestazioniCopy }>>> = {
  it: () => import('./it'),
};

export const LOCALES_CONTESTAZIONI = Object.keys(map) as AppLocale[];

export async function getContestazioniCopy(locale: string): Promise<ContestazioniCopy | null> {
  const loader = map[locale as AppLocale];
  if (!loader) return null;
  return (await loader()).default;
}
