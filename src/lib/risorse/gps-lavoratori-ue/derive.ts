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
  /** Adempimenti OBBLIGATORI (risposta 'si') — quelli che, se mancano, ti espongono. */
  obbligatori: VoceChecklist[];
  /** Adempimenti CONDIZIONALI (risposta 'dipende'). */
  condizionali: VoceChecklist[];
  totaleAdempimenti: number;
  /** Punteggio severità 0-100 (vedi metodologia sopra). */
  severita: number;
  sanzioneImporto: import('./types').TestoLoc;
  sanzioneCaso: import('./types').TestoLoc;
  sanzioneUrlFonte: string;
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
}

/** Paese -> autorità di controllo competente (per il generatore informativa). */
export function getPaesiAutorita(): {
  codiceISO: string;
  nome: string;
  nomi?: Partial<Record<AppLocale, string>>;
  autorita: string;
}[] {
  return PAESI.filter((p) => p.stato !== 'in-arrivo').map((p) => ({
    codiceISO: p.codiceISO,
    nome: p.nome,
    nomi: p.nomi,
    autorita: p.autoritaCompetente.ente,
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
  }));
}
