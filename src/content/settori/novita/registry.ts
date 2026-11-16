import type { SettoreSlug } from '../types';
import type { NovitaSectionKey, ToolKey } from './types';

/** Schermate di uno strumento: id come da scheda comune, uno per file .webp. */
export interface ToolShots {
  /** Flow (pannello del titolare, web), 1440x813. La prima e' quella grande. */
  flow: string[];
  /** TimeTracker (telefono), 540x1202. Vuoto se lo strumento vive solo in Flow. */
  phone: string[];
}

export const TOOL_SHOTS: Record<ToolKey, ToolShots> = {
  giro_ronda: { flow: ['flow_security_patrol', 'flow_security_patrol_giri'], phone: ['tt_security_patrol'] },
  lavoratore_isolato: { flow: ['flow_lone_worker_piani'], phone: ['tt_lone_worker'] },
  consegne_turno: { flow: ['flow_shift_handover'], phone: ['tt_shift_handover'] },
  emergenze: {
    flow: [
      'flow_emergenze_attiva',
      'flow_emergenze_evento',
      'flow_emergenze_evento_persone',
      'flow_emergenze_sito',
      'flow_emergenze_protocolli',
      'flow_emergenze_squadre',
      'flow_emergenze_scadenzario',
    ],
    phone: [
      'tt_emergenze_dashboard',
      'tt_emergenze_indicazioni',
      'tt_emergenze_indicazioni_2',
      'tt_emergenze_risposta',
      'tt_emergenze_piani',
    ],
  },
  qualita_pulizie: { flow: ['flow_cleaning_quality'], phone: ['tt_cleaning_quality', 'tt_cleaning_quality_lista'] },
  schede_consumi: { flow: ['flow_cleaning_supplies'], phone: ['tt_cleaning_supplies'] },
  verifiche_misure: { flow: ['flow_electrical_checks'], phone: ['tt_electrical_checks_misure', 'tt_electrical_checks'] },
  impianti_terra: { flow: ['flow_earthing'], phone: [] },
  documenti_imprese: { flow: ['flow_contractor_docs'], phone: [] },
  congruita: { flow: ['flow_labour_congruity'], phone: [] },
  caldaie: { flow: ['flow_boiler_checks'], phone: ['tt_boiler_checks'] },
  fgas: { flow: ['flow_fgas'], phone: ['tt_fgas'] },
  consegna_firma: { flow: ['flow_handover', 'flow_handover_aspetto'], phone: ['tt_handover_form', 'tt_handover'] },
  magazzino_furgone: { flow: ['flow_van_stock'], phone: ['tt_van_stock'] },
  sla: { flow: ['flow_sla'], phone: ['tt_sla'] },
  qr_apparecchi: { flow: ['flow_asset_qr'], phone: ['tt_asset_qr', 'tt_asset_qr_scheda'] },
};

/** Strumenti per pagina. Le pagine non elencate (impresa-di-pulizie) non mostrano la sezione. */
export const SETTORE_TOOLS: Partial<Record<SettoreSlug, { section: NovitaSectionKey; tools: ToolKey[] }>> = {
  sicurezza: { section: 'sicurezza', tools: ['giro_ronda', 'lavoratore_isolato', 'consegne_turno', 'emergenze'] },
  pulizie: { section: 'pulizie', tools: ['qualita_pulizie', 'schede_consumi'] },
  elettricisti: { section: 'elettricisti', tools: ['verifiche_misure', 'impianti_terra'] },
  edilizia: { section: 'edilizia', tools: ['documenti_imprese', 'congruita'] },
  idraulici: { section: 'idraulici', tools: ['caldaie', 'fgas'] },
  // Termoidraulici = strumenti idraulici (scheda comune).
  termoidraulici: { section: 'idraulici', tools: ['caldaie', 'fgas'] },
  installatori: { section: 'installatori', tools: ['consegna_firma', 'magazzino_furgone'] },
  manutenzione: { section: 'manutenzione', tools: ['sla', 'qr_apparecchi'] },
  // Impianti: la pagina e' scritta per installatori e impiantisti (elettrici, idraulici,
  // termotecnici) e ha lo stesso impianto della pagina installatori: valgono i due strumenti
  // di chi consegna e monta (consegna con firma, magazzino del furgone). Verifiche elettriche
  // e caldaie/F-gas sono mestieri specifici: si rimanda alle pagine elettricisti e idraulici.
  impianti: { section: 'impianti', tools: ['consegna_firma', 'magazzino_furgone'] },
};

/** Pagine di settore verso cui la sezione "impianti" rimanda. */
export const IMPIANTI_RIMANDI: SettoreSlug[] = ['elettricisti', 'idraulici'];

export const SHOTS_BASE = '/img/novita-2026-11';

/** Cartella delle immagini per locale: en-us, en-gb... usano la cartella `en`. */
export function shotsFolder(locale: string): string {
  return locale.split('-')[0];
}

/** Percorso pubblico di una schermata. */
export function shotSrc(locale: string, id: string): string {
  return `${SHOTS_BASE}/${shotsFolder(locale)}/${id}.webp`;
}
