import { describe, it, expect } from 'vitest';
import { PAESI } from './index';
import { loc } from './localize';
import type { TipoImporto } from './types';

/**
 * L'importo mostrato in cima alla scheda deve dire CHE COSA e'.
 *
 * Nato il 05/08/2026: la striscia di riepilogo mostrava solo la cifra sotto
 * l'etichetta "Quanto si rischia", e su 29 schede su 39 quella cifra non viene
 * da un caso di GPS sui lavoratori. La Germania prometteva "35,3 milioni di €",
 * che e' la multa H&M per la schedatura della vita privata dei dipendenti.
 *
 * Questi test tengono il campo `tipoImporto` onesto nel tempo: non basta che
 * esista, deve anche non contraddire il testo del caso citato.
 */

const TIPI: TipoImporto[] = ['caso-gps', 'caso-affine', 'massimale'];

/** Il testo ammette da solo che non e' un caso di GPS (o che non c'e' un caso). */
const AMMETTE_NON_GPS =
  /non\s+(?:e['’]?\s*(?:un\s+)?caso|risulta\s+una\s+multa|risulta\s+una\s+decisione)|caso\s+affine/i;

describe('tipoImporto', () => {
  it('e presente e valido su tutte le schede', () => {
    for (const p of PAESI) {
      expect(TIPI, `${p.codiceISO} ha un tipoImporto fuori elenco`).toContain(
        p.sanzioneMax.tipoImporto,
      );
    }
  });

  it('non dichiara "caso-gps" dove il testo dice il contrario', () => {
    const bugiardi = PAESI.filter(
      (p) =>
        p.sanzioneMax.tipoImporto === 'caso-gps' &&
        AMMETTE_NON_GPS.test(loc(p.sanzioneMax.casoCitato, 'it')),
    ).map((p) => p.codiceISO);

    expect(bugiardi, 'schede marcate caso-gps il cui testo ammette il contrario').toEqual([]);
  });

  it('la classificazione rivista a mano il 05/08/2026 non cambia per sbaglio', () => {
    // Canarino, non dogma: le 39 schede sono state lette una per una prima di
    // assegnare il tipo. Se questo test si rompe, RILEGGI la scheda che hai
    // toccato e aggiorna qui di proposito, non per far passare la suite.
    const conta = PAESI.reduce<Record<string, number>>((acc, p) => {
      acc[p.sanzioneMax.tipoImporto] = (acc[p.sanzioneMax.tipoImporto] ?? 0) + 1;
      return acc;
    }, {});

    // Aggiornato di proposito il 17/08/2026: Albania e Slovacchia sono passate
    // da 'caso-affine' a 'massimale'. Le due cifre mostrate (460.000 ALL per
    // EuroCom CX, 40.000 EUR per la psicodiagnostica) poggiavano su un'unica
    // fonte non ufficiale e NON risultano nelle relazioni annuali delle
    // rispettive autorita, controllate una per una. Meglio il massimale di
    // legge, che e documentato, di una cifra che non sappiamo provare.
    expect(conta).toEqual({ 'caso-gps': 10, 'caso-affine': 9, massimale: 20 });
  });

  it('la maggioranza delle schede NON poggia su un caso GPS: e il motivo per cui la qualifica esiste', () => {
    const conCasoGps = PAESI.filter((p) => p.sanzioneMax.tipoImporto === 'caso-gps');
    expect(conCasoGps.length).toBeLessThan(PAESI.length / 2);
  });
});
