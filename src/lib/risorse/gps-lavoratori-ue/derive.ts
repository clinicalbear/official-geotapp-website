import type { AppLocale } from '@/lib/i18n/config';
import { PAESI } from './index';
import { loc } from './localize';
import type { VoceChecklist } from './types';

/**
 * Derivazioni dai 39 dossier già verificati, per i tool "Calcolatore sanzioni" e
 * "Indice della sorveglianza". NESSUN dato nuovo o inventato: tutto è calcolato
 * dai campi esistenti (checklist `risposta` si/no/dipende + `sanzioneMax`).
 *
 * Indice di severità (metodologia trasparente, da dichiarare nel report/pagina):
 *   punteggio = (#adempimenti obbligatori 'si') + 0,5 × (#condizionali 'dipende')
 *   normalizzato su 100 rispetto al totale degli adempimenti della scheda.
 * Più adempimenti obbligatori = quadro più stringente per chi monitora i lavoratori.
 */

export interface PaeseSeverita {
  codiceISO: string;
  slugCanonico: string;
  nome: string;
  nomi?: Partial<Record<AppLocale, string>>;
  bandiera: string;
  /** Adempimenti OBBLIGATORI (risposta 'si'), quelli che, se mancano, ti espongono. */
  obbligatori: VoceChecklist[];
  /** Adempimenti CONDIZIONALI (risposta 'dipende'). */
  condizionali: VoceChecklist[];
  totaleAdempimenti: number;
  /** Punteggio severità 0-100 (vedi metodologia sopra). */
  severita: number;
  sanzioneImporto: import('./types').TestoLoc;
  sanzioneCaso: import('./types').TestoLoc;
  sanzioneUrlFonte: string;
  /** Stima in euro della sanzione, SOLO per ordinare la classifica (mai mostrata). */
  sanzioneVal: number;
}

/**
 * Stima in EURO dell'importo citato nel testo italiano canonico della sanzione,
 * usata soltanto come chiave di ordinamento della classifica (non compare mai
 * in pagina). Regole: si prende il numero più alto con contesto in euro
 * ("120.000 €", "circa 4.400 €", "20 milioni di euro"); le percentuali sul
 * fatturato si ignorano (nessun assoluto); sterline e CHF convertiti con cambi
 * approssimati, il BAM col suo peg fisso all'euro; "senza multa" vale 0.
 */
export function stimaEuroSanzione(testoIt: string): number {
  const s = testoIt.toLowerCase();
  let max = 0;
  const num = (x: string) => parseFloat(x.replace(/\./g, '').replace(',', '.')) || 0;
  const push = (v: number) => { if (v > max) max = v; };
  for (const m of s.matchAll(/([\d.,]+)\s*milion\w*\s*(?:di\s*)?(euro|€|sterline|bam)/g)) {
    const fx = m[2] === 'sterline' ? 1.17 : m[2] === 'bam' ? 0.511 : 1;
    push(num(m[1]) * 1_000_000 * fx);
  }
  for (const m of s.matchAll(/([\d.][\d.,]*)\s*(?:€|euro\b)/g)) push(num(m[1]));
  for (const m of s.matchAll(/([\d.][\d.,]*)\s*chf\b/g)) push(num(m[1]) * 1.06);
  return Math.round(max);
}

function calcSeverita(checklist: VoceChecklist[]): {
  obbligatori: VoceChecklist[];
  condizionali: VoceChecklist[];
  severita: number;
} {
  const obbligatori = checklist.filter((v) => v.risposta === 'si');
  const condizionali = checklist.filter((v) => v.risposta === 'dipende');
  const tot = checklist.length || 1;
  const raw = obbligatori.length + 0.5 * condizionali.length;
  const severita = Math.round((raw / tot) * 100);
  return { obbligatori, condizionali, severita };
}

/** Sintesi severità + sanzione per tutti i paesi pubblicati (non "in-arrivo"). */
export function getPaesiSeverita(): PaeseSeverita[] {
  return PAESI.filter((p) => p.stato !== 'in-arrivo').map((p) => {
    const { obbligatori, condizionali, severita } = calcSeverita(p.checklist);
    return {
      codiceISO: p.codiceISO,
      slugCanonico: p.slugCanonico,
      nome: p.nome,
      nomi: p.nomi,
      bandiera: p.bandiera,
      obbligatori,
      condizionali,
      totaleAdempimenti: p.checklist.length,
      severita,
      sanzioneImporto: p.sanzioneMax.importo,
      sanzioneCaso: p.sanzioneMax.casoCitato,
      sanzioneUrlFonte: p.sanzioneMax.urlFonte,
      sanzioneVal: stimaEuroSanzione(loc(p.sanzioneMax.importo, 'it')),
    };
  });
}

/** Forma serializzabile (stringhe già localizzate) da passare ai client component. */
export interface PaeseSeveritaLoc {
  codiceISO: string;
  slugCanonico: string;
  nome: string;
  bandiera: string;
  severita: number;
  totaleAdempimenti: number;
  obbligatori: string[];
  condizionali: string[];
  sanzioneImporto: string;
  sanzioneCaso: string;
  sanzioneUrlFonte: string;
  sanzioneVal: number;
}

/** Paese -> autorità di controllo competente (per il generatore informativa). */
export function getPaesiAutorita(locale: AppLocale = 'it'): {
  codiceISO: string;
  nome: string;
  nomi?: Partial<Record<AppLocale, string>>;
  autorita: string;
}[] {
  return PAESI.filter((p) => p.stato !== 'in-arrivo').map((p) => ({
    codiceISO: p.codiceISO,
    nome: p.nome,
    nomi: p.nomi,
    autorita: loc(p.autoritaCompetente.ente, locale),
  }));
}

export function localizePaesiSeverita(
  list: PaeseSeverita[],
  locale: AppLocale,
): PaeseSeveritaLoc[] {
  return list.map((p) => ({
    codiceISO: p.codiceISO,
    slugCanonico: p.slugCanonico,
    nome: p.nomi?.[locale] ?? p.nome,
    bandiera: p.bandiera,
    severita: p.severita,
    totaleAdempimenti: p.totaleAdempimenti,
    obbligatori: p.obbligatori.map((v) => loc(v.voce, locale)),
    condizionali: p.condizionali.map((v) => loc(v.voce, locale)),
    sanzioneImporto: loc(p.sanzioneImporto, locale),
    sanzioneCaso: loc(p.sanzioneCaso, locale),
    sanzioneUrlFonte: p.sanzioneUrlFonte,
    sanzioneVal: p.sanzioneVal,
  }));
}
