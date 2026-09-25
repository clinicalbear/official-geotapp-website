// GENERATO da scripts/seo/generate-content-dates.mjs — NON modificare a mano il
// contenuto della mappa, rilancia lo script (serve una clone con history completa,
// il checkout di CI e' superficiale). Data = ultimo commit che ha toccato i file di
// pagina + contenuto dedicati (vedi PAGES nello script), non la data di build.
// Rigenerato l'ultima volta: 2026-09-25

export const CONTENT_DATES: Record<string, string> = {
  "settori/pulizie": "2026-09-16",
  "settori/installatori": "2026-09-24",
  "settori/sicurezza": "2026-09-15",
  "settori/elettricisti": "2026-09-16",
  "settori/idraulici": "2026-09-13",
  "settori/termoidraulici": "2026-09-13",
  "settori/edilizia": "2026-09-23",
  "settori/impianti": "2026-09-13",
  "settori/manutenzione": "2026-07-17",
  "products/geotapp-flow": "2026-09-24",
  "products/geotapp-timetracker": "2026-09-24",
  "products/geotapp-verifier": "2026-09-24",
  "cos-e-geotapp": "2026-09-24",
  "pricing": "2026-09-24",
  "roi-calculator": "2026-09-24"
};

/** Data ISO (YYYY-MM-DD) dell'ultimo aggiornamento reale del contenuto di una pagina.
 * Fallback alla data odierna se la chiave non esiste, cosi' una pagina nuova non
 * dichiarata qui non mostra una data passata inventata. */
export function contentDateFor(pageKey: string): string {
  return CONTENT_DATES[pageKey] ?? '2026-09-25';
}
