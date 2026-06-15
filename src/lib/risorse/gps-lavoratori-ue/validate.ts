/**
 * Validatore runtime di una `SchedaPaese`.
 *
 * Raccoglie TUTTI gli errori (nessun early-return): `ok` è true sse `errori` è vuoto.
 * Regole applicate: vedi i commenti inline e Task 1 nel piano.
 */

import type { SchedaPaese } from './types';

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export function validateScheda(s: SchedaPaese): { ok: boolean; errori: string[] } {
  const errori: string[] = [];

  // 1. Date ISO: aggiornatoIl + ogni verificatoIl (autoritaCompetente e contatti).
  if (!ISO_DATE.test(s.aggiornatoIl)) {
    errori.push(`aggiornatoIl non è una data ISO YYYY-MM-DD: "${s.aggiornatoIl}"`);
  }
  if (!ISO_DATE.test(s.autoritaCompetente.verificatoIl)) {
    errori.push(
      `autoritaCompetente.verificatoIl non è una data ISO YYYY-MM-DD: "${s.autoritaCompetente.verificatoIl}"`
    );
  }
  s.contatti.forEach((c, i) => {
    if (!ISO_DATE.test(c.verificatoIl)) {
      errori.push(
        `contatti[${i}].verificatoIl non è una data ISO YYYY-MM-DD: "${c.verificatoIl}"`
      );
    }
  });

  // 2. Una scheda "completo" deve essere pienamente utilizzabile.
  if (s.stato === 'completo') {
    if (s.modelloPdf === null) {
      errori.push('scheda completo: modelloPdf non può essere null');
    }
    if (s.checklist.length < 1) {
      errori.push('scheda completo: checklist deve avere almeno 1 voce');
    }
  }

  // 3. "in-arrivo" può avere checklist vuota: nessun controllo di non-vuoto.

  // 4. Ogni voce di checklist presente deve avere fonte.url non vuoto.
  s.checklist.forEach((v, i) => {
    if (!v.fonte.url || v.fonte.url.trim() === '') {
      errori.push(`checklist[${i}].fonte.url è vuoto`);
    }
  });

  return { ok: errori.length === 0, errori };
}
