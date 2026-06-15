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

export function loc(testo: TestoLoc, locale: AppLocale): string {
  if (typeof testo === 'string') return testo;
  return testo[locale] ?? testo.en ?? testo.it;
}
