/**
 * Helper di "freschezza" per le schede-paese della risorsa "GPS sui lavoratori in UE".
 *
 * I contatti delle autorita (email, portali) e le date di verifica invecchiano in
 * silenzio. Queste funzioni sono PURE: ricevono `oggi` esplicitamente (mai
 * `Date.now()`), cosi sono deterministiche e testabili. Il consumatore reale e il
 * monitor scripts/check-risorse-freshness.mjs, che SOLO segnala, non riscrive nulla.
 */

import type { SchedaPaese, Contatto } from './types';

/**
 * Vero se `verificatoIl` e piu vecchio di `mesiSoglia` mesi rispetto a `oggi`.
 * Entrambi gli argomenti sono date ISO `YYYY-MM-DD`.
 *
 * Una data vuota o non valida e trattata come stale (true), cosi viene comunque
 * segnalata. Il confine esatto (stesso giorno a `mesiSoglia` mesi di distanza)
 * NON e ancora stale: lo diventa il giorno dopo.
 */
export function isStale(verificatoIl: string, oggi: string, mesiSoglia = 6): boolean {
  if (!verificatoIl) return true;

  const verificato = new Date(`${verificatoIl}T00:00:00Z`);
  const riferimento = new Date(`${oggi}T00:00:00Z`);
  if (Number.isNaN(verificato.getTime()) || Number.isNaN(riferimento.getTime())) {
    return true;
  }

  // Soglia = oggi spostato indietro di `mesiSoglia` mesi. Se la verifica e
  // anteriore a questa soglia, e stale.
  const soglia = new Date(riferimento);
  soglia.setUTCMonth(soglia.getUTCMonth() - mesiSoglia);

  return verificato.getTime() < soglia.getTime();
}

/** Forma leggera restituita per ogni scheda da ricontrollare. */
export interface SchedaDaRicontrollare {
  slugCanonico: string;
  nome: string;
  /** Descrizione delle voci con data di verifica stale (ente + data). */
  voci: string[];
}

/**
 * Restituisce le schede che hanno almeno una data `verificatoIl` stale, su
 * `autoritaCompetente` o su un qualunque elemento di `contatti`. Per ciascuna
 * elenca in `voci` quali contatti sono scaduti.
 */
export function schedeDaRicontrollare(
  paesi: SchedaPaese[],
  oggi: string,
  mesiSoglia = 6,
): SchedaDaRicontrollare[] {
  const out: SchedaDaRicontrollare[] = [];

  for (const p of paesi) {
    const candidati: Contatto[] = [p.autoritaCompetente, ...p.contatti];
    const voci: string[] = [];

    for (const c of candidati) {
      if (isStale(c.verificatoIl, oggi, mesiSoglia)) {
        const data = c.verificatoIl || '(nessuna data)';
        voci.push(`${c.ente}: verificato il ${data}`);
      }
    }

    if (voci.length > 0) {
      out.push({ slugCanonico: p.slugCanonico, nome: p.nome, voci });
    }
  }

  return out;
}
