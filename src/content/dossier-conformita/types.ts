export interface DossierSection {
  heading: string;
  paragraphs: string[];
}

export interface DossierFaqItem {
  q: string;
  a: string;
}

export interface DossierCopy {
  metaTitle: string;
  metaDesc: string;
  badge: string;
  h1: string;
  subtitle: string;
  sections: DossierSection[];
  sourcesTitle: string;
  sources: string[];
  lastUpdated: string;
  faq?: { title: string; items: DossierFaqItem[] };
}
