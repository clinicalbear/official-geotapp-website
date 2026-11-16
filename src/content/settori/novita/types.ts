/**
 * Sezione "nuovi strumenti di settore" delle pagine di settore (preparata il 16/11/2026,
 * NON in produzione finche' gli strumenti non lo sono). Scheda comune:
 * /mnt/disco_secondario/GeoTapp-settori-tutti/docs/plans/2026-11-16-novita-settori-comunicazione.md
 *
 * Tre strati: (1) registro indipendente dalla lingua (registry.ts: quali strumenti stanno su
 * quale pagina e quali schermate), (2) testi per lingua (novita/<lingua>.ts), (3) componente
 * (components/NovitaStrumenti.tsx).
 */
export type ToolKey =
  | 'giro_ronda'
  | 'lavoratore_isolato'
  | 'consegne_turno'
  | 'emergenze'
  | 'qualita_pulizie'
  | 'schede_consumi'
  | 'verifiche_misure'
  | 'impianti_terra'
  | 'documenti_imprese'
  | 'congruita'
  | 'caldaie'
  | 'fgas'
  | 'consegna_firma'
  | 'magazzino_furgone'
  | 'sla'
  | 'qr_apparecchi';

/** Chiave della sezione: termoidraulici usa quella di idraulici. */
export type NovitaSectionKey =
  | 'sicurezza'
  | 'pulizie'
  | 'elettricisti'
  | 'edilizia'
  | 'idraulici'
  | 'installatori'
  | 'manutenzione'
  | 'impianti';

export interface NovitaToolText {
  /** Nome dello strumento, come lo vede chi usa l'app. */
  title: string;
  /** 2-4 frasi: la scena del mestiere e cosa fa lo strumento. */
  body: string;
  /** Avvertenza breve (strumento di supporto, cosa NON fa). Facoltativa. */
  note?: string;
}

export interface NovitaCopy {
  ui: {
    /** Piccola etichetta sopra il titolo, es. "Novita'". */
    kicker: string;
    /** Didascalia sotto la schermata di Flow, es. "Flow, il pannello del titolare". */
    flowCaption: string;
    /** Didascalia sotto le schermate del telefono, es. "TimeTracker, sul telefono". */
    phoneCaption: string;
    /** Testo alternativo della schermata Flow; {tool} e' il nome dello strumento. */
    altFlow: string;
    /** Testo alternativo della schermata del telefono; {tool} come sopra. */
    altPhone: string;
    /** Frase per gli strumenti che hanno solo la parte di Flow. */
    flowOnly: string;
    /** Etichetta del link ad altre pagine di settore (solo impianti). */
    seeAlso: string;
  };
  sections: Record<NovitaSectionKey, { title: string; intro: string; outro?: string }>;
  tools: Record<ToolKey, NovitaToolText>;
  /** Didascalie (e testi alternativi) delle schermate della galleria Emergenze, per id. */
  shots: Record<string, string>;
  /** Correzioni per una variante regionale (es. 'en-gb'): solo i campi che cambiano. */
  overrides?: Partial<Record<string, Partial<Record<ToolKey, Partial<NovitaToolText>>>>>;
}
