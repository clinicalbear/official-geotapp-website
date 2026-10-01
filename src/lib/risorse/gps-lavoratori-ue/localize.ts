/**
 * Risolve un `TestoLoc` nella lingua della pagina.
 *
 * Catena di fallback: lingua richiesta -> inglese -> italiano. L'inglese fa da
 * lingua-ponte per le locale del sito senza traduzione propria (ru e
 * le varianti en-*), in modo coerente con i dizionari della cornice. Una `string`
 * semplice e' trattata come italiano (master).
 */

import type { AppLocale } from '@/lib/i18n/config';
import type { TestoLoc } from './types';
import { TESTI_EN } from './traduzioni-en';
import { TESTI_DE } from './traduzioni-de';
import { TESTI_NL } from './traduzioni-nl';
import { TESTI_FR } from './traduzioni-fr';
import { TESTI_ES } from './traduzioni-es';
import { TESTI_PT } from './traduzioni-pt';
import { TESTI_DA } from './traduzioni-da';
import { TESTI_SV } from './traduzioni-sv';
import { TESTI_NB } from './traduzioni-nb';
import { britishToVariant } from '@/lib/i18n/en-spelling';

export function loc(testo: TestoLoc, locale: AppLocale): string {
  // I testi inglesi sono in inglese britannico: en-us ed en-ca ricevono la propria ortografia.
  return britishToVariant(locFallback(testo, locale), locale);
}

function locFallback(testo: TestoLoc, locale: AppLocale): string {
  if (typeof testo === 'string') {
    // Stringa semplice = italiano. Per le lingue inglesi, per il tedesco, per l'olandese, per il francese, per lo spagnolo, per il portoghese, per il danese, per lo svedese e per il norvegese i titoli
    // delle fonti e i nomi dei contatti hanno la resa in ./traduzioni-en.ts, ./traduzioni-de.ts, ./traduzioni-nl.ts, ./traduzioni-fr.ts, ./traduzioni-es.ts, ./traduzioni-pt.ts, ./traduzioni-da.ts, ./traduzioni-sv.ts e ./traduzioni-nb.ts.
    if (locale === 'de') return TESTI_DE[testo] ?? testo;
    if (locale === 'nl') return TESTI_NL[testo] ?? testo;
    if (locale === 'fr') return TESTI_FR[testo] ?? testo;
    if (locale === 'es') return TESTI_ES[testo] ?? testo;
    if (locale === 'pt') return TESTI_PT[testo] ?? testo;
    if (locale === 'da') return TESTI_DA[testo] ?? testo;
    if (locale === 'sv') return TESTI_SV[testo] ?? testo;
    if (locale === 'nb') return TESTI_NB[testo] ?? testo;
    return locale === 'en' || locale.startsWith('en-') ? (TESTI_EN[testo] ?? testo) : testo;
  }
  return testo[locale] ?? testo.en ?? testo.it;
}
