export interface PresenzeSection {
  heading: string;
  paragraphs: string[];
}

export interface PresenzeFaqItem {
  q: string;
  a: string;
}

export interface PresenzeTable {
  title: string;
  colLeft: string;
  colRight: string;
  left: string[];
  right: string[];
}

export interface PresenzeCopy {
  metaTitle: string;
  metaDesc: string;
  h1: string;
  /** Risposta diretta nelle prime righe, la parte che un motore/assistente AI cita. */
  lede: string;
  /** Data leggibile mostrata in pagina, es. "Aggiornato il 25 settembre 2026". */
  updatedLabel: string;
  sections: PresenzeSection[];
  table: PresenzeTable;
  sourcesTitle: string;
  sources: string[];
  disclaimer: string;
  faq: { title: string; items: PresenzeFaqItem[] };
  relatedTitle: string;
}
