/**
 * I conti della schermata di conversione, senza React: quale piano regge quelle
 * postazioni, quanto costano a scaglioni, e il confronto "valore pieno" / "con
 * promo e codice".
 *
 * Stanno qui, e non dentro la pagina, perche' sono la parte che tocca i soldi e
 * va provata con dei test. Tetti e prezzi arrivano sempre dal CRM (`Catalog`).
 */

export type PlanCode = 'SOLO' | 'TEAM' | 'BUSINESS';
export type Interval = 'monthly' | 'annual';

export type CatalogPlan = {
  code: PlanCode;
  ttSeatCeiling: number;
  /** Postazioni comprese nel prezzo (solo in promo). Assente = nessuna. */
  includedTtSeats?: number;
  monthly: number;
  annual: number;
};
export type Tier = { upTo: number | null; eur: number };
export type Catalog = {
  plans: CatalogPlan[];
  ttSeatTiers: Record<Interval, Tier[]>;
  officeSeatAnnualEur: number;
  /** Tetti di LISTINO (senza promo e senza codice), per dire che piano servirebbe. */
  listCeilings?: Partial<Record<PlanCode, number>>;
  /** Promo aperta, decisa dal CRM. Assente o null = listino normale. */
  promo?: { code: string; endsAt: string; months: number } | null;
};


export const ORDER: PlanCode[] = ['SOLO', 'TEAM', 'BUSINESS'];

export function planIndex(plan: PlanCode): number {
  return ORDER.indexOf(plan);
}

/** Il piano piu' piccolo che regge quelle postazioni. */
export function planForSeats(catalog: Catalog, seats: number): PlanCode {
  for (const code of ORDER) {
    const plan = catalog.plans.find((p) => p.code === code);
    if (!plan) continue;
    if (plan.ttSeatCeiling < 0 || seats <= plan.ttSeatCeiling) return code;
  }
  return 'BUSINESS';
}

export function ceilingOf(catalog: Catalog, plan: PlanCode): number {
  return catalog.plans.find((p) => p.code === plan)?.ttSeatCeiling ?? -1;
}

/** Prezzo delle postazioni a scaglioni, come lo calcola Stripe. */
export function ttSeatsEur(catalog: Catalog, seats: number, interval: Interval): number {
  let rimaste = Math.max(0, Math.floor(seats));
  let coperte = 0;
  let totale = 0;
  for (const tier of catalog.ttSeatTiers[interval]) {
    if (rimaste <= 0) break;
    const capienza = tier.upTo === null ? rimaste : Math.max(0, tier.upTo - coperte);
    const inScaglione = Math.min(rimaste, capienza);
    totale += inScaglione * tier.eur;
    coperte += inScaglione;
    rimaste -= inScaglione;
  }
  return Math.round(totale * 100) / 100;
}

export function planPriceEur(catalog: Catalog, plan: PlanCode, interval: Interval): number {
  const p = catalog.plans.find((x) => x.code === plan);
  if (!p) return 0;
  return interval === 'annual' ? p.annual : p.monthly;
}


export type Righe = { flow: number; tt: number; office: number; totale: number };

export type Confronto = {
  pieno: { plan: PlanCode; flow: number; tt: number; office: number; totale: number };
  promo: {
    flow: number;
    /** Postazioni al prezzo pieno, prima di togliere quelle incluse. */
    lordo: number;
    /** Quanto valgono le postazioni incluse nel piano. */
    valoreIncluse: number;
    tt: number;
    office: number;
    totale: number;
  };
};

/**
 * "Valore pieno" = piano e prezzi di LISTINO per quelle postazioni (senza promo,
 * senza codice, senza postazioni incluse). "Con promo e codice" = quello che si
 * paga davvero. Null se non c'e' differenza da mostrare: un confronto in cui i
 * due totali coincidono non dice niente.
 */
export function buildComparison(
  catalog: Catalog,
  ttSeats: number,
  officeSeats: number,
  interval: Interval,
  righe: Righe,
): Confronto | null {
  if (ttSeats <= 0) return null;
  const listino: Catalog = {
    ...catalog,
    plans: catalog.plans.map((p) => ({
      ...p,
      ttSeatCeiling: catalog.listCeilings?.[p.code] ?? p.ttSeatCeiling,
      includedTtSeats: 0,
    })),
  };
  const pianoPieno = planForSeats(listino, ttSeats);
  const lordo = ttSeatsEur(catalog, ttSeats, interval);
  const office = interval === 'annual' ? officeSeats * catalog.officeSeatAnnualEur : 0;
  const flowPieno = planPriceEur(catalog, pianoPieno, interval);
  const pieno = {
    plan: pianoPieno,
    flow: flowPieno,
    tt: lordo,
    office,
    totale: Math.round((flowPieno + lordo + office) * 100) / 100,
  };
  const promo = {
    flow: righe.flow,
    lordo,
    valoreIncluse: Math.round((lordo - righe.tt) * 100) / 100,
    tt: righe.tt,
    office,
    totale: righe.totale,
  };
  if (pieno.totale <= promo.totale) return null;
  return { pieno, promo };
}
