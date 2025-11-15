"use server";

import { DEFAULT_PRICING_TIERS, PricingTier } from "./pricing";
import { getDjangoApiBaseUrl } from "./runtimeConfig";

type ApiTier = {
  code: string;
  name: string;
  start_seats: number;
  end_seats: number | null;
  unit_amount_monthly: string;
};

function normalizeTier(tier: ApiTier): PricingTier {
  return {
    code: tier.code,
    name: tier.name,
    startSeats: tier.start_seats,
    endSeats: tier.end_seats,
    unitAmountMonthly: Number(tier.unit_amount_monthly),
  };
}

export async function fetchPricingTiers(): Promise<PricingTier[]> {
  const baseUrl = getDjangoApiBaseUrl();
  if (!baseUrl) {
    return DEFAULT_PRICING_TIERS;
  }

  try {
    const response = await fetch(`${baseUrl}/pricing/tiers/`, {
      headers: { accept: "application/json" },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        "Impossibile leggere le fasce dal backend",
        response.status,
        response.statusText,
      );
      return DEFAULT_PRICING_TIERS;
    }

    const payload = (await response.json()) as ApiTier[];
    if (!Array.isArray(payload) || payload.length === 0) {
      return DEFAULT_PRICING_TIERS;
    }

    return payload.map(normalizeTier).sort((a, b) => a.startSeats - b.startSeats);
  } catch (error) {
    console.error("Errore caricando le fasce di prezzo", error);
    return DEFAULT_PRICING_TIERS;
  }
}
