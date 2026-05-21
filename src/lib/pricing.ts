import type { AppLocale } from './i18n/config';

// ============================================================================
// EUR base prices — single source of truth.
// EUR is the master currency (per project decision); all other currencies are
// derived from these via FX_RATES_PER_EUR × FX_BUFFER, then psychologically rounded.
// ============================================================================

export const EUR_PRICES = {
  tracker: {
    tier1: { perSeatMonthly: 3, perSeatAnnual: 36 },
    tier2: { perSeatMonthly: 2.5, perSeatAnnual: 30 },
    tier1MaxSeats: 25,
    tier2MaxSeats: 150,
  },
  flow: {
    solo: { monthly: 39, annual: 390 },
    team: { monthly: 99, annual: 990 },
    business: { monthly: 199, annual: 1990 },
  },
  bundleDiscount: 0.15,
} as const;

// ============================================================================
// FX rates per EUR. Source: ECB reference rates (15 May 2026).
// RUB intentionally absent: ECB suspended EUR/RUB reference; ru locale serves
// Russian-speaking populations across EU (Baltics, DE, CY, IL, KZ) and resolves
// to EUR rather than RUB. Refresh quarterly or after >3% drift.
// ============================================================================

export type CurrencyCode =
  | 'EUR'
  | 'USD'
  | 'GBP'
  | 'AUD'
  | 'CAD'
  | 'DKK'
  | 'SEK'
  | 'NOK';

export const FX_RATES_PER_EUR: Record<CurrencyCode, number> = {
  EUR: 1,
  USD: 1.1628,
  GBP: 0.8705,
  AUD: 1.6265,
  CAD: 1.5995,
  DKK: 7.4728,
  SEK: 10.982,
  NOK: 10.845,
};

export const FX_REFERENCE_DATE = '2026-05-15';

// Buffer absorbs FX drift between refreshes + Stripe FX margin + card-issuer spread.
export const FX_BUFFER = 1.1;

// ============================================================================
// Locale → currency mapping. Falls back to EUR for non-listed locales.
// ============================================================================

export const LOCALE_CURRENCY: Record<AppLocale, CurrencyCode> = {
  it: 'EUR',
  en: 'EUR',
  'en-ie': 'EUR',
  de: 'EUR',
  nl: 'EUR',
  fr: 'EUR',
  es: 'EUR',
  pt: 'EUR',
  ru: 'EUR',
  'en-us': 'USD',
  'en-gb': 'GBP',
  'en-au': 'AUD',
  'en-ca': 'CAD',
  da: 'DKK',
  sv: 'SEK',
  nb: 'NOK',
};

const LOCALE_TO_BCP47: Record<AppLocale, string> = {
  it: 'it-IT',
  en: 'en-US',
  'en-us': 'en-US',
  'en-gb': 'en-GB',
  'en-au': 'en-AU',
  'en-ie': 'en-IE',
  'en-ca': 'en-CA',
  de: 'de-DE',
  nl: 'nl-NL',
  fr: 'fr-FR',
  es: 'es-ES',
  pt: 'pt-PT',
  da: 'da-DK',
  sv: 'sv-SE',
  nb: 'nb-NO',
  ru: 'ru-RU',
};

export function getCurrencyForLocale(locale: AppLocale | null | undefined): CurrencyCode {
  if (!locale) return 'EUR';
  return LOCALE_CURRENCY[locale] ?? 'EUR';
}

// ============================================================================
// Conversion + formatting
// ============================================================================

export interface LocalizedAmount {
  amount: number;
  currency: CurrencyCode;
  formatted: string;
  eurAmount: number;
}

export function convertEurToLocale(
  eurAmount: number,
  locale: AppLocale | null | undefined,
): LocalizedAmount {
  const resolvedLocale = (locale ?? 'it') as AppLocale;
  const currency = getCurrencyForLocale(resolvedLocale);

  if (currency === 'EUR' || eurAmount === 0) {
    return {
      amount: eurAmount,
      currency,
      formatted: formatAmount(eurAmount, currency, resolvedLocale),
      eurAmount,
    };
  }

  const raw = eurAmount * FX_RATES_PER_EUR[currency] * FX_BUFFER;
  const rounded = roundPsychological(raw, currency);
  return {
    amount: rounded,
    currency,
    formatted: formatAmount(rounded, currency, resolvedLocale),
    eurAmount,
  };
}

// Currency-specific psychological rounding. Always rounds UP so the displayed
// price >= raw FX-adjusted price (buffer is preserved, never undershoots).
function roundPsychological(value: number, currency: CurrencyCode): number {
  if (value <= 0) return 0;

  switch (currency) {
    case 'USD':
    case 'GBP':
    case 'AUD':
    case 'CAD': {
      const whole = Math.floor(value);
      const frac = value - whole;
      if (frac === 0) return whole; // already clean
      if (frac <= 0.49) return whole + 0.49;
      return whole + 0.99;
    }
    case 'DKK': {
      // Danish .95 convention. Ceiling to next whole minus 0.05.
      const whole = Math.ceil(value);
      return whole - 0.05;
    }
    case 'SEK':
    case 'NOK':
      // Whole krona/krone — round UP.
      return Math.ceil(value);
    case 'EUR':
    default:
      return Math.round(value * 100) / 100;
  }
}

function formatAmount(
  amount: number,
  currency: CurrencyCode,
  locale: AppLocale,
): string {
  const fractionDigits = currency === 'SEK' || currency === 'NOK' ? 0 : 2;
  return new Intl.NumberFormat(LOCALE_TO_BCP47[locale] ?? 'en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(amount);
}

// Public formatter so callers can format arbitrary amounts they already converted.
export function formatLocalAmount(
  amount: number,
  currency: CurrencyCode,
  locale: AppLocale | null | undefined,
): string {
  return formatAmount(amount, currency, (locale ?? 'it') as AppLocale);
}

// ============================================================================
// Tracker quote (locale-aware)
// ============================================================================

export interface TrackerQuote {
  seats: number;
  isCustom: boolean;
  eur: {
    totalAnnual: number;
    avgPerSeatMonthly: number;
    avgPerSeatAnnual: number;
  };
  display: {
    totalAnnual: LocalizedAmount;
    avgPerSeatMonthly: LocalizedAmount;
    avgPerSeatAnnual: LocalizedAmount;
  };
}

export function calculateTrackerQuote(
  seats: number,
  locale: AppLocale | null | undefined,
): TrackerQuote | null {
  if (seats < 1) return null;
  const { tier1, tier2, tier1MaxSeats, tier2MaxSeats } = EUR_PRICES.tracker;

  if (seats > tier2MaxSeats) {
    return {
      seats,
      isCustom: true,
      eur: { totalAnnual: 0, avgPerSeatMonthly: 0, avgPerSeatAnnual: 0 },
      display: {
        totalAnnual: convertEurToLocale(0, locale),
        avgPerSeatMonthly: convertEurToLocale(0, locale),
        avgPerSeatAnnual: convertEurToLocale(0, locale),
      },
    };
  }

  let totalAnnualEur: number;
  if (seats <= tier1MaxSeats) {
    totalAnnualEur = seats * tier1.perSeatAnnual;
  } else {
    totalAnnualEur =
      tier1MaxSeats * tier1.perSeatAnnual +
      (seats - tier1MaxSeats) * tier2.perSeatAnnual;
  }

  const avgPerSeatAnnualEur = totalAnnualEur / seats;
  const avgPerSeatMonthlyEur = avgPerSeatAnnualEur / 12;

  return {
    seats,
    isCustom: false,
    eur: {
      totalAnnual: totalAnnualEur,
      avgPerSeatMonthly: avgPerSeatMonthlyEur,
      avgPerSeatAnnual: avgPerSeatAnnualEur,
    },
    display: {
      totalAnnual: convertEurToLocale(totalAnnualEur, locale),
      avgPerSeatMonthly: convertEurToLocale(avgPerSeatMonthlyEur, locale),
      avgPerSeatAnnual: convertEurToLocale(avgPerSeatAnnualEur, locale),
    },
  };
}

// ============================================================================
// Standard / volume monthly rate (used by dictionary "@ {price}" templates)
// ============================================================================

export function getStandardRateMonthly(locale: AppLocale | null | undefined): LocalizedAmount {
  return convertEurToLocale(EUR_PRICES.tracker.tier1.perSeatMonthly, locale);
}

export function getVolumeRateMonthly(locale: AppLocale | null | undefined): LocalizedAmount {
  return convertEurToLocale(EUR_PRICES.tracker.tier2.perSeatMonthly, locale);
}

// ============================================================================
// Flow plan prices (locale-aware)
// ============================================================================

export type FlowPlanCode = 'solo' | 'team' | 'business';

export interface FlowPlanPrice {
  plan: FlowPlanCode;
  monthly: LocalizedAmount;
  annual: LocalizedAmount;
  /** EUR savings when paying annually vs 12× monthly */
  annualSavings: LocalizedAmount;
}

export function getFlowPlanPrice(
  plan: FlowPlanCode,
  locale: AppLocale | null | undefined,
): FlowPlanPrice {
  const eur = EUR_PRICES.flow[plan];
  const annualSavingsEur = eur.monthly * 12 - eur.annual;
  return {
    plan,
    monthly: convertEurToLocale(eur.monthly, locale),
    annual: convertEurToLocale(eur.annual, locale),
    annualSavings: convertEurToLocale(annualSavingsEur, locale),
  };
}

// ============================================================================
// Bundle (Flow + Tracker) quote (locale-aware)
// ============================================================================

export interface BundleQuoteArgs {
  flowPlan: FlowPlanCode;
  employeeCount: number;
  billingCycle: 'monthly' | 'yearly';
  locale: AppLocale | null | undefined;
}

export interface BundleQuote {
  flowPlan: FlowPlanCode;
  employeeCount: number;
  billingCycle: 'monthly' | 'yearly';
  eur: {
    flow: number;
    tracker: number;
    subtotal: number;
    discount: number;
    total: number;
  };
  display: {
    flow: LocalizedAmount;
    tracker: LocalizedAmount;
    subtotal: LocalizedAmount;
    discount: LocalizedAmount;
    total: LocalizedAmount;
  };
}

export function calculateBundleQuote({
  flowPlan,
  employeeCount,
  billingCycle,
  locale,
}: BundleQuoteArgs): BundleQuote {
  const flowEur =
    billingCycle === 'monthly'
      ? EUR_PRICES.flow[flowPlan].monthly
      : EUR_PRICES.flow[flowPlan].annual;

  const { tier1, tier2, tier1MaxSeats } = EUR_PRICES.tracker;
  let trackerEur: number;
  if (billingCycle === 'monthly') {
    trackerEur = employeeCount * tier2.perSeatMonthly;
  } else if (employeeCount <= tier1MaxSeats) {
    trackerEur = employeeCount * tier1.perSeatAnnual;
  } else {
    trackerEur =
      tier1MaxSeats * tier1.perSeatAnnual +
      (employeeCount - tier1MaxSeats) * tier2.perSeatAnnual;
  }

  const subtotalEur = flowEur + trackerEur;
  const discountEur = subtotalEur * EUR_PRICES.bundleDiscount;
  const totalEur = subtotalEur - discountEur;

  return {
    flowPlan,
    employeeCount,
    billingCycle,
    eur: {
      flow: flowEur,
      tracker: trackerEur,
      subtotal: subtotalEur,
      discount: discountEur,
      total: totalEur,
    },
    display: {
      flow: convertEurToLocale(flowEur, locale),
      tracker: convertEurToLocale(trackerEur, locale),
      subtotal: convertEurToLocale(subtotalEur, locale),
      discount: convertEurToLocale(discountEur, locale),
      total: convertEurToLocale(totalEur, locale),
    },
  };
}

// ============================================================================
// Pricing tiers (for marketing cards in PricingSimulator)
// ============================================================================

export interface PricingTier {
  code: 'base' | 'pro' | 'enterprise';
  name: string;
  description: string;
  minSeats: number;
  maxSeats: number | null;
  priceMonthlyPerSeat: number;
  priceAnnualPerSeat: number;
  features: string[];
}

export const PRICING_TIERS: PricingTier[] = [
  {
    code: 'base',
    name: 'Base',
    description: 'Per piccoli team',
    minSeats: 1,
    maxSeats: EUR_PRICES.tracker.tier1MaxSeats,
    priceMonthlyPerSeat: EUR_PRICES.tracker.tier1.perSeatMonthly,
    priceAnnualPerSeat: EUR_PRICES.tracker.tier1.perSeatAnnual,
    features: ['Geolocalizzazione', 'Export PDF/Excel', 'Supporto Email'],
  },
  {
    code: 'pro',
    name: 'Pro',
    description: 'Per aziende in crescita',
    minSeats: EUR_PRICES.tracker.tier1MaxSeats + 1,
    maxSeats: EUR_PRICES.tracker.tier2MaxSeats,
    priceMonthlyPerSeat: EUR_PRICES.tracker.tier2.perSeatMonthly,
    priceAnnualPerSeat: EUR_PRICES.tracker.tier2.perSeatAnnual,
    features: [
      'Tutto in Base',
      'Gestione calendario commesse',
      'Gestione auto',
      'Multi sedi',
    ],
  },
  {
    code: 'enterprise',
    name: 'Enterprise',
    description: 'Soluzioni su misura',
    minSeats: EUR_PRICES.tracker.tier2MaxSeats + 1,
    maxSeats: null,
    priceMonthlyPerSeat: 0,
    priceAnnualPerSeat: 0,
    features: [
      'Tutto in Pro',
      'Report avanzati',
      'Moduli custom',
      'Anteprima nuove funzionalità',
    ],
  },
];

// ============================================================================
// Legacy compatibility shim — old API still used by a couple of files.
// New code should use calculateTrackerQuote(seats, locale).
// ============================================================================

export interface Quote {
  code: string;
  seats: number;
  unitMonthly: number;
  unitAnnual: number;
  totalMonthly: number;
  totalAnnual: number;
  isCustom: boolean;
}

export function calculatePricing(seats: number): Quote | null {
  if (seats < 1) return null;
  const tier = PRICING_TIERS.find(
    (t) => seats >= t.minSeats && (t.maxSeats === null || seats <= t.maxSeats),
  );
  if (!tier) return null;

  if (tier.code === 'enterprise') {
    return {
      code: tier.code,
      seats,
      unitMonthly: 0,
      unitAnnual: 0,
      totalMonthly: 0,
      totalAnnual: 0,
      isCustom: true,
    };
  }

  const eurQuote = calculateTrackerQuote(seats, 'it');
  if (!eurQuote || eurQuote.isCustom) return null;

  return {
    code: tier.code,
    seats,
    unitMonthly: eurQuote.eur.avgPerSeatMonthly,
    unitAnnual: eurQuote.eur.avgPerSeatAnnual,
    totalMonthly: eurQuote.eur.totalAnnual / 12,
    totalAnnual: eurQuote.eur.totalAnnual,
    isCustom: false,
  };
}
