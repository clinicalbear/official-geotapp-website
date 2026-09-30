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
import { TESTI_DE } from './traduzioni-de';
import { TESTI_NL } from './traduzioni-nl';
import { britishToVariant } from '@/lib/i18n/en-spelling';

export function loc(testo: TestoLoc, locale: AppLocale): string {
  // I testi inglesi sono in inglese britannico: en-us ed en-ca ricevono la propria ortografia.
  return britishToVariant(locFallback(testo, locale), locale);
}

function locFallback(testo: TestoLoc, locale: AppLocale): string {
  if (typeof testo === 'string') {
    // Stringa semplice = italiano. Per le lingue inglesi, per il tedesco e per l'olandese i titoli delle
    // fonti e i nomi dei contatti hanno la resa in ./traduzioni-en.ts, ./traduzioni-de.ts e ./traduzioni-nl.ts.
    if (locale === 'de') return TESTI_DE[testo] ?? testo;
    if (locale === 'nl') return TESTI_NL[testo] ?? testo;
    return locale === 'en' || locale.startsWith('en-') ? (TESTI_EN[testo] ?? testo) : testo;
  }
  return testo[locale] ?? testo.en ?? testo.it;
}
