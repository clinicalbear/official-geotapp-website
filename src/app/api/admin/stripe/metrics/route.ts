import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getIntegrationConfig } from "@/lib/integrationConfigStore";

const STRIPE_API_VERSION: Stripe.LatestApiVersion = "2024-06-20";
const MONTH_FORMATTER = new Intl.DateTimeFormat("it-IT", { month: "short", year: "2-digit" });

type StripeMetric = {
  month: string;
  label: string;
  total: number;
};

type StripeSale = {
  id: string;
  amount: number;
  currency: string;
  customer?: string | null;
  created: string;
  status: string;
};

function buildStripeClient(secretKey: string) {
  return new Stripe(secretKey, { apiVersion: STRIPE_API_VERSION });
}

export async function GET() {
  try {
    const config = await getIntegrationConfig();
    const secretKey = process.env.STRIPE_SECRET_KEY ?? config.stripe.secretKey ?? "";
    if (!secretKey) {
      return NextResponse.json({ message: "Chiave Stripe mancante" }, { status: 500 });
    }

    const stripe = buildStripeClient(secretKey);
    const now = Math.floor(Date.now() / 1000);
    const sixMonthsAgo = now - 180 * 24 * 60 * 60;

    const paymentIntents = await stripe.paymentIntents.list({
      limit: 100,
      created: { gte: sixMonthsAgo },
    });

    const succeededIntents = paymentIntents.data.filter((intent) => intent.status === "succeeded");
    const currency = succeededIntents[0]?.currency?.toUpperCase() ?? "EUR";

    const totalsByMonth = new Map<string, StripeMetric>();
    for (const intent of succeededIntents) {
      const created = new Date((intent.created ?? now) * 1000);
      const monthKey = `${created.getUTCFullYear()}-${created.getUTCMonth() + 1}`;
      const label = MONTH_FORMATTER.format(created);
      const existing = totalsByMonth.get(monthKey) ?? { month: monthKey, label, total: 0 };
      existing.total += (intent.amount_received ?? intent.amount ?? 0) / 100;
      totalsByMonth.set(monthKey, existing);
    }

    const monthlyTotals = Array.from(totalsByMonth.values()).sort((a, b) =>
      a.month.localeCompare(b.month),
    );

    const recentSales: StripeSale[] = succeededIntents.slice(0, 10).map((intent) => ({
      id: intent.id,
      amount: (intent.amount_received ?? intent.amount ?? 0) / 100,
      currency: (intent.currency ?? "eur").toUpperCase(),
      customer: (intent.customer as string) ?? intent.metadata?.company_name ?? null,
      created: new Date((intent.created ?? now) * 1000).toISOString(),
      status: intent.status,
    }));

    return NextResponse.json({
      currency,
      monthlyTotals,
      recentSales,
      sampleSize: succeededIntents.length,
    });
  } catch (error) {
    console.error("Stripe metrics error", error);
    return NextResponse.json({ message: "Impossibile recuperare i dati Stripe" }, { status: 502 });
  }
}
