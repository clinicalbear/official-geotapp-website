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
    // Aggiornato di proposito il 30/09/2026: la Slovenia passa da 'massimale'
    // a 'caso-gps'. L'IP-RS ha multato il 15/04/2026 un'azienda pubblica per il
    // GPS continuo sui veicoli aziendali (6.000 euro), comunicato ufficiale.
    // Aggiornato di proposito il 30/09/2026: l'Italia passa da 'caso-gps' a
    // 'caso-affine'. Il caso citato (Pioneer Hi-Bred, 120.000 euro) e' telematica
    // sullo stile di guida, e il Garante ha accertato che non erano trattati
    // dati di geolocalizzazione: la scheda lo dice da sola.
    // Aggiornato di proposito il 30/09/2026 (bis): la Repubblica Ceca passa da
    // 'caso-gps' a 'massimale'. Il caso Ceska posta e' provato dalla relazione
    // UOOU 2012 e dalla sentenza 6 A 42/2013, ma la cifra di 80.000 CZK compare
    // solo su epravo.cz: stessa regola applicata ad AL e SK il 17/08.
    expect(conta).toEqual({ 'caso-gps': 9, 'caso-affine': 10, massimale: 20 });
  });

  it('la maggioranza delle schede NON poggia su un caso GPS: e il motivo per cui la qualifica esiste', () => {
    const conCasoGps = PAESI.filter((p) => p.sanzioneMax.tipoImporto === 'caso-gps');
    expect(conCasoGps.length).toBeLessThan(PAESI.length / 2);
  });
});
