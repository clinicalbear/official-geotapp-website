/**
 * Schema dati di una scheda-paese per la risorsa "GPS sui lavoratori in UE".
 *
 * Un file dati per paese (Task successivi) esporta una `SchedaPaese`. La validazione
 * runtime è in ./validate.ts. I dati sono tenuti separati dalla UI: questi tipi sono
 * il contratto tra i file dati, il validatore e le pagine.
 */

import type { AppLocale } from '@/lib/i18n/config';

export type StatoScheda = 'completo' | 'scheda-senza-pdf' | 'in-arrivo';
export type RispostaChecklist = 'si' | 'no' | 'dipende';

/**
 * Testo localizzabile. Una `string` semplice e' trattata come italiano (master) e
 * usata come fallback per tutte le lingue. Un oggetto porta le traduzioni: la lingua
 * della pagina, poi l'inglese, poi l'italiano (vedi `loc()` in ./localize.ts). Le
 * lingue del sito senza traduzione propria (pt/da/sv/nb/ru/en-*) ripiegano sull'inglese,
 * coerentemente coi dizionari della cornice.
 */
export type TestoLoc = string | ({ it: string } & Partial<Record<AppLocale, string>>);

export interface Fonte {
  titolo: string;
  url: string;
}

export interface Contatto {
  ente: string;
  email?: string;
  portale?: string;
  /** Pagina ufficiale che documenta il contatto. */
  urlFonte: string;
  /** Data ISO YYYY-MM-DD. */
  verificatoIl: string;
  /** Es. per stati federali: "autorità per Land". */
  note?: TestoLoc;
}

export interface VoceChecklist {
  voce: TestoLoc;
  risposta: RispostaChecklist;
  dettaglio: TestoLoc;
  fonte: Fonte;
}

export interface PassoProcedura {
  passo: number;
  descrizione: TestoLoc;
}

export interface ModelloPdf {
  disponibile: boolean;
  lingua: string;
  url: string;
}

export interface SanzioneMax {
  importo: TestoLoc;
  casoCitato: TestoLoc;
  urlFonte: string;
}

export interface SchedaPaese {
  /** Codice ISO del paese, es. 'DE'. */
  codiceISO: string;
  /** Slug canonico, chiave di SLUG_MAP (pianificato in un task successivo), es. 'germania'. */
  slugCanonico: string;
  /** Nome IT del paese, per la cornice. */
  nome: string;
  /**
   * Nome localizzato del paese per ciascuna lingua (es. de: 'Deutschland',
   * fr: 'Allemagne'). Se una locale manca, si ripiega su `nome` (italiano).
   */
  nomi?: Partial<Record<AppLocale, string>>;
  /** Emoji bandiera. */
  bandiera: string;
  federale: boolean;
  stato: StatoScheda;
  autoritaCompetente: Contatto;
  checklist: VoceChecklist[];
  procedura: PassoProcedura[];
  contatti: Contatto[];
  /** "Nessun PDF" si rappresenta con `null`, MAI con `{ disponibile: false }`. */
  modelloPdf: ModelloPdf | null;
  sanzioneMax: SanzioneMax;
  fonti: Fonte[];
  /** Data ISO YYYY-MM-DD. */
  aggiornatoIl: string;
}
