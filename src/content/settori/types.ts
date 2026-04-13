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
  testimonial: {
    quote: string;
    author: string;
    role: string;
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
    price: string;     // e.g. "3 €"
    per: string;       // e.g. "operatore/mese"
    note: string;      // e.g. "Prova gratuita 14 giorni"
  };
  schema_sector_name: string;
  schema_faq?: Array<{
    question: string;
    answer: string;
  }>;
}

export type SettoreSlug = 'installatori' | 'pulizie' | 'sicurezza';

// Suppress unused-import warning — AppLocale is re-exported for use in content files
export type { AppLocale };
