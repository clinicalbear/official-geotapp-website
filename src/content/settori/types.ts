import type { AppLocale } from '@/lib/i18n/config';

export interface SettoreContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    h1_line1: string;
    h1_line2: string;
    subtitle: string;
    cta_primary: string;
    cta_note: string;
  };
  pain: {
    title: string;
    items: Array<{ title: string; desc: string }>;
  };
  workflow: {
    title: string;
    subtitle: string;
    steps: Array<{ title: string; desc: string }>;
  };
  features: {
    title: string;
    items: Array<{ title: string; desc: string }>;
  };
  /**
   * Testimonianza. Si mostra SOLO con `fonte` (dove si puo' controllare che la persona
   * esiste e ha detto quelle parole). Dal 30/09/2026 le testimonianze senza fonte non
   * vanno in pagina: una recensione che non si puo' provare non si pubblica.
   */
  testimonial: {
    quote: string;
    author: string;
    role: string;
    fonte?: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{ q: string; a: string }>;
  };
  cta: {
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  differenza?: {
    title: string;
    subtitle: string;
    rows: Array<{ label: string; competitor: string; geotapp: string }>;
  };
  trust?: {
    title: string;
    body: string;
    badge: string;
  };
  cta_mid?: {
    title: string;
    body: string;
    cta: string;
  };
  prima_dopo?: {
    title: string;
    prima: string[];
    dopo: string[];
  };
  scenario?: {
    title: string;
    body: string;
    resolution: string;
  };
  non_gestionale?: {
    title: string;
    subtitle: string;
    items: Array<{ label: string; gestionale: string; geotapp: string }>;
  };
  cosa_cambia?: {
    title: string;
    items: Array<{ title: string; desc: string }>;
  };
  prova_visiva?: {
    title: string;
    subtitle: string;
  };
  pricing_hint?: {
    label: string;     // e.g. "A partire da"
    /** @deprecated price is now computed dynamically per locale via lib/pricing.
     * The field is kept optional for backwards compatibility with existing content
     * files but is no longer read by SettorePageLayout. Safe to remove from content. */
    price?: string;
    per: string;       // e.g. "operatore/mese"
    note: string;      // e.g. "Prova gratuita 14 giorni"
  };
  schema_sector_name: string;
  schema_faq?: Array<{
    question: string;
    answer: string;
  }>;
}

export type SettoreSlug = 'installatori' | 'pulizie' | 'sicurezza' | 'elettricisti' | 'idraulici' | 'termoidraulici' | 'edilizia' | 'impianti' | 'manutenzione' | 'impresa-di-pulizie';

// Suppress unused-import warning - AppLocale is re-exported for use in content files
export type { AppLocale };
