// GENERATO da scripts/seo/generate-content-dates.mjs — NON modificare a mano il
// contenuto della mappa, rilancia lo script (serve una clone con history completa,
// il checkout di CI e' superficiale). Data = ultimo commit che ha toccato i file di
// pagina + contenuto dedicati (vedi PAGES nello script), non la data di build.
// Rigenerato l'ultima volta: 2026-09-30

export const CONTENT_DATES: Record<string, string> = {
  "settori/pulizie": "2026-09-30",
  "settori/installatori": "2026-09-30",
  "settori/sicurezza": "2026-09-30",
  "settori/elettricisti": "2026-09-30",
  "settori/idraulici": "2026-09-30",
  "settori/termoidraulici": "2026-09-30",
  "settori/edilizia": "2026-09-30",
  "settori/impianti": "2026-09-30",
  "settori/manutenzione": "2026-09-30",
  "products/geotapp-flow": "2026-09-30",
  "products/geotapp-timetracker": "2026-09-30",
  "products/geotapp-verifier": "2026-09-30",
  "cos-e-geotapp": "2026-09-30",
  "pricing": "2026-09-30",
  "roi-calculator": "2026-09-30"
};

/** Data ISO (YYYY-MM-DD) dell'ultimo aggiornamento reale del contenuto di una pagina.
 * Fallback alla data odierna se la chiave non esiste, cosi' una pagina nuova non
 * dichiarata qui non mostra una data passata inventata. */
export function contentDateFor(pageKey: string): string {
  return CONTENT_DATES[pageKey] ?? '2026-09-30';
}
