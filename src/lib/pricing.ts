export interface PricingTier {
    code: string;
    name: string;
    description: string;
    minSeats: number;
    maxSeats: number | null; // null means infinite
    priceMonthlyPerSeat: number; // Applied if monthly billing were active (placeholder)
    priceAnnualPerSeat: number; // The main price (e.g., 2€ * 12)
    features: string[];
}

export const PRICING_TIERS: PricingTier[] = [
    {
        code: "base",
        name: "Base",
        description: "Per piccoli team",
        minSeats: 1,
        maxSeats: 25,
        priceMonthlyPerSeat: 2.50, // Illustrative
        priceAnnualPerSeat: 24.00, // 2€ * 12 months
        features: ["Geolocalizzazione", "Export PDF/Excel", "Supporto Email"]
    },
    {
        code: "pro",
        name: "Pro",
        description: "Per aziende in crescita",
        minSeats: 26,
        maxSeats: 150,
        priceMonthlyPerSeat: 2.00, // Illustrative
        priceAnnualPerSeat: 18.00, // 1.5€ * 12 months
        features: ["Tutto in Base", "Gestione calendario commesse", "Gestione auto", "Multi sedi"]
    },
    {
        code: "enterprise",
        name: "Enterprise",
        description: "Soluzioni su misura",
        minSeats: 151,
        maxSeats: null,
        priceMonthlyPerSeat: 0,
        priceAnnualPerSeat: 0, // Custom
        features: ["Tutto in Pro", "Report avanzati", "Moduli custom", "Anteprima nuove funzionalità"]
    }
];

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

    // Find the tier just for metadata (Name, Desc) - relying on the top tier reached
    const tier = PRICING_TIERS.find(t =>
        seats >= t.minSeats && (t.maxSeats === null || seats <= t.maxSeats)
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
            isCustom: true
        };
    }

    // Cumulative Pricing Calculation
    let totalAnnual = 0;

    // First 25 seats cost 24€/year
    const firstTierCount = Math.min(seats, 25);
    totalAnnual += firstTierCount * 24;

    // Next seats (26-150) cost 18€/year
    if (seats > 25) {
        const secondTierCount = seats - 25;
        // We know max is 150 for this logic to hold before enterprise
        // But the check "tier.code === enterprise" above handles > 150
        totalAnnual += secondTierCount * 18;
    }

    const totalMonthly = totalAnnual / 12;
    // Average unit price for display
    const unitAnnual = totalAnnual / seats;

    return {
        code: tier.code,
        seats,
        unitMonthly: unitAnnual / 12, // Average monthly unit
        unitAnnual: unitAnnual,       // Average annual unit
        totalMonthly: totalMonthly,
        totalAnnual: totalAnnual,
        isCustom: false
    };
}
