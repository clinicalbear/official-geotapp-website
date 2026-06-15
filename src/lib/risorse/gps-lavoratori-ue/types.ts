/**
 * Schema dati di una scheda-paese per la risorsa "GPS sui lavoratori in UE".
 *
 * Un file dati per paese (Task successivi) esporta una `SchedaPaese`. La validazione
 * runtime è in ./validate.ts. I dati sono tenuti separati dalla UI: questi tipi sono
 * il contratto tra i file dati, il validatore e le pagine.
 */

export type StatoScheda = 'completo' | 'scheda-senza-pdf' | 'in-arrivo';
export type RispostaChecklist = 'si' | 'no' | 'dipende';

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
  note?: string;
}

export interface VoceChecklist {
  voce: string;
  risposta: RispostaChecklist;
  dettaglio: string;
  fonte: Fonte;
}

export interface PassoProcedura {
  passo: number;
  descrizione: string;
}

export interface ModelloPdf {
  disponibile: boolean;
  lingua: string;
  url: string;
}

export interface SanzioneMax {
  importo: string;
  casoCitato: string;
  urlFonte: string;
}

export interface SchedaPaese {
  /** Codice ISO del paese, es. 'DE'. */
  codiceISO: string;
  /** Slug canonico, chiave di SLUG_MAP, es. 'germania'. */
  slugCanonico: string;
  /** Nome IT del paese, per la cornice. */
  nome: string;
  /** Emoji bandiera. */
  bandiera: string;
  federale: boolean;
  stato: StatoScheda;
  autoritaCompetente: Contatto;
  checklist: VoceChecklist[];
  procedura: PassoProcedura[];
  contatti: Contatto[];
  modelloPdf: ModelloPdf | null;
  sanzioneMax: SanzioneMax;
  fonti: Fonte[];
  /** Data ISO YYYY-MM-DD. */
  aggiornatoIl: string;
}
