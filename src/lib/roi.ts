/**
 * Single source of truth for the GeoTapp ROI formula.
 *
 * Used by both the full ROI calculator API (src/app/api/roi-calculator/route.ts)
 * and the homepage mini-calculator. Do NOT change the numeric constants without
 * updating src/lib/roi.test.ts — the formula is the contract behind the public
 * "risparmio stimato" numbers shown to leads.
 *
 * Constants (verbatim from the original implementation):
 *  - admin  = ore_admin * 0.65 * costo_orario * 52   (52 settimane/anno, 65% del tempo recuperato)
 *  - dispute = contestazioni * 12 * 180              (12 mesi, 180€ a contestazione)
 *  - coord  = operatori * 1.0 * costo_orario * 52    (1h/operatore/settimana di coordinamento)
 *  - costo_geotapp_annuo = operatori * 25 * 12       (25€/operatore/mese)
 */

export interface RoiInput {
  operatori: number;
  costo_orario: number;
  contestazioni: number;
  /** Ore admin/settimana. Omesso (es. mini-calculator) ⇒ 0, nessun risparmio burocrazia. */
  ore_admin?: number;
}

export interface RoiResult {
  risparmio_admin: number;
  risparmio_dispute: number;
  risparmio_coord: number;
  risparmio_totale: number;
  costo_geotapp_annuo: number;
  payback_mesi: number;
  roi_pct: number;
}

export function calcRoi(p: RoiInput): RoiResult {
  const ore_admin = p.ore_admin ?? 0;
  const risparmio_admin = ore_admin * 0.65 * p.costo_orario * 52;
  const risparmio_dispute = p.contestazioni * 12 * 180;
  const risparmio_coord = p.operatori * 1.0 * p.costo_orario * 52;
  const risparmio_totale = risparmio_admin + risparmio_dispute + risparmio_coord;
  const costo_geotapp_annuo = p.operatori * 25 * 12;
  const payback_mesi = risparmio_totale > 0
    ? Math.ceil(costo_geotapp_annuo / (risparmio_totale / 12))
    : 0;
  const roi_pct = costo_geotapp_annuo > 0
    ? Math.round((risparmio_totale - costo_geotapp_annuo) / costo_geotapp_annuo * 100)
    : 0;
  return { risparmio_admin, risparmio_dispute, risparmio_coord, risparmio_totale, costo_geotapp_annuo, payback_mesi, roi_pct };
}
