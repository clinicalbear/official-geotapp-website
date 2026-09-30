/**
 * Risolve un `TestoLoc` nella lingua della pagina.
 *
 * Catena di fallback: lingua richiesta -> inglese -> italiano. L'inglese fa da
 * lingua-ponte per le locale del sito senza traduzione propria (pt/da/sv/nb/ru e
 * le varianti en-*), in modo coerente con i dizionari della cornice. Una `string`
 * semplice e' trattata come italiano (master).
 */

import type { AppLocale } from '@/lib/i18n/config';
import type { TestoLoc } from './types';
import { TESTI_EN } from './traduzioni-en';

export function loc(testo: TestoLoc, locale: AppLocale): string {
  if (typeof testo === 'string') {
    // Stringa semplice = italiano. Per le lingue inglesi i titoli delle fonti e i
    // nomi dei contatti hanno la resa in ./traduzioni-en.ts.
    return locale === 'en' || locale.startsWith('en-') ? (TESTI_EN[testo] ?? testo) : testo;
  }
  return testo[locale] ?? testo.en ?? testo.it;
}
