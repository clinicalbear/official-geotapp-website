/** Una scena: la stessa contestazione vista da una delle tre parti. */
export interface ContestazioniScene {
  /** Etichetta breve sopra il titolo ("L'azienda"). */
  kicker: string;
  heading: string;
  /** La frase che qualcuno dice davvero, tra virgolette. */
  scene: string;
  haveTitle: string;
  have: string[];
  changeTitle: string;
  change: string[];
  /** Blocco facoltativo in coda alla scena (per chi lavora: cosa resta e per quanto). */
  extra?: { title: string; paragraphs: string[] };
}

export interface ContestazioniFaqItem {
  q: string;
  a: string;
}

export interface ContestazioniCopy {
  metaTitle: string;
  metaDesc: string;
  kicker: string;
  h1: string;
  /** Risposta diretta nelle prime righe: la parte che un motore o un assistente AI cita. */
  lede: string;
  updatedLabel: string;
  scenes: ContestazioniScene[];
  sample: { heading: string; paragraphs: string[] };
  limits: { heading: string; items: string[]; formula: string };
  faq: { title: string; items: ContestazioniFaqItem[] };
  next: { heading: string; paragraph: string; featuresLabel: string; pricingLabel: string };
  disclaimer: string;
  /** Scheda in angolo per chi arriva da una testata e non ha cliccato la barra: invita a questa pagina. */
  card: { title: string; text: string; cta: string };
}
