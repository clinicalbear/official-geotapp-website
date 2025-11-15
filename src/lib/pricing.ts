export type PricingTier = {
  code: string;
  name: string;
  startSeats: number;
  endSeats: number | null;
  unitAmountMonthly: number; // EUR per seat per month
};

export type PricingBreakdownItem = {
  tier: string;
  code: string;
  seats: number;
  unitMonthly: number;
  unitAnnual: number;
  totalMonthly: number;
  totalAnnual: number;
};

export type PricingQuote = {
  seats: number;
  totalMonthly: number;
  totalAnnual: number;
  breakdown: PricingBreakdownItem[];
};

export const DEFAULT_PRICING_TIERS: PricingTier[] = [
  {
    code: "team",
    name: "Team",
    startSeats: 1,
    endSeats: 25,
    unitAmountMonthly: 2,
  },
  {
    code: "scale",
    name: "Scale",
    startSeats: 26,
    endSeats: 150,
    unitAmountMonthly: 1.5,
  },
  {
    code: "enterprise",
    name: "Enterprise",
    startSeats: 151,
    endSeats: null,
    unitAmountMonthly: 1,
  },
];

const MONEY_PRECISION = 100;

function roundMoney(value: number): number {
  return Math.round(value * MONEY_PRECISION) / MONEY_PRECISION;
}

export function calculatePricing(seats: number, tiers: PricingTier[]): PricingQuote {
  if (seats < 1) {
    throw new Error("Seat count must be at least 1");
  }
  if (!tiers.length) {
    throw new Error("Nessuna fascia di prezzo configurata");
  }

  const ordered = [...tiers].sort((a, b) => a.startSeats - b.startSeats);
  const breakdown: PricingBreakdownItem[] = [];

  for (const tier of ordered) {
    if (seats < tier.startSeats) continue;
    const tierUpperBound = tier.endSeats ?? seats;
    const effectiveUpperBound = Math.min(tierUpperBound, seats);
    const tierSeats = effectiveUpperBound - tier.startSeats + 1;
    if (tierSeats <= 0) continue;

    const unitMonthly = tier.unitAmountMonthly;
    const unitAnnual = roundMoney(unitMonthly * 12);
    const totalMonthly = roundMoney(unitMonthly * tierSeats);
    const totalAnnual = roundMoney(unitAnnual * tierSeats);

    breakdown.push({
      tier: tier.name,
      code: tier.code,
      seats: tierSeats,
      unitMonthly,
      unitAnnual,
      totalMonthly,
      totalAnnual,
    });
  }

  if (!breakdown.length) {
    throw new Error("Il numero di dipendenti non rientra nelle fasce disponibile");
  }

  const totalMonthly = roundMoney(
    breakdown.reduce((sum, item) => sum + item.totalMonthly, 0),
  );
  const totalAnnual = roundMoney(
    breakdown.reduce((sum, item) => sum + item.totalAnnual, 0),
  );

  return {
    seats,
    totalMonthly,
    totalAnnual,
    breakdown,
  };
}
