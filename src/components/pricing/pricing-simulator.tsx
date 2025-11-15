"use client";

import { useMemo, useState } from "react";
import { calculatePricing, type PricingTier } from "@/lib/pricing";

type PricingSimulatorCopy = {
  eyebrow: string;
  title: string;
  description: string;
  sliderLabel: string;
  sliderHint: string;
  manualPlaceholder: string;
  emptyState: string;
  buttonLabel: string;
};

type PricingSimulatorProps = {
  tiers: PricingTier[];
  copy?: PricingSimulatorCopy;
};

const currency = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

const FALLBACK_COPY: PricingSimulatorCopy = {
  eyebrow: "Simulatore",
  title: "Scegli i tuoi collaboratori",
  description: "Configura il numero di utenti per ottenere una stima del costo annuale.",
  sliderLabel: "Collaboratori",
  sliderHint: "Per oltre {max} collaboratori utilizza il campo manuale.",
  manualPlaceholder: "Inserisci il numero manualmente",
  emptyState: "Al momento non abbiamo una stima disponibile. Riprova più tardi.",
  buttonLabel: "Procedi al checkout sicuro",
};

export default function PricingSimulator({ tiers, copy }: PricingSimulatorProps) {
  const copyData = copy ?? FALLBACK_COPY;
  const finiteUpperBound = tiers.reduce((max, tier) => {
    if (typeof tier.endSeats === "number") {
      return Math.max(max, tier.endSeats);
    }
    return max;
  }, 0);
  const sliderMax = finiteUpperBound > 0 ? finiteUpperBound : 500;

  const [seatCount, setSeatCount] = useState(Math.max(1, Math.min(50, sliderMax)));
  const [companyName, setCompanyName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const quote = useMemo(() => {
    try {
      return calculatePricing(seatCount, tiers);
    } catch (error) {
      console.warn(error);
      return null;
    }
  }, [seatCount, tiers]);

  const handleSeatChange = (value: number) => {
    if (!Number.isFinite(value)) return;
    setSeatCount(Math.max(1, Math.round(value)));
  };

  const handleCheckout = async () => {
    if (!quote) return;
    setLoading(true);
    setStatus(null);
    try {
      const response = await fetch("/api/pricing/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName,
          contactEmail,
          seatCount: quote.seats,
        }),
      });

      const payload = (await response.json().catch(() => null)) as
        | { checkout_url?: string; message?: string }
        | null;

      if (!response.ok || !payload?.checkout_url) {
        throw new Error(payload?.message ?? "Checkout non disponibile");
      }

      window.location.href = payload.checkout_url;
    } catch (error) {
      setStatus((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-8 text-slate-900">
      <header className="space-y-2 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">{copyData.eyebrow}</p>
        <h2 className="text-3xl font-semibold">{copyData.title}</h2>
        <p className="text-sm text-slate-600">{copyData.description}</p>
      </header>

      <div className="mt-8 space-y-6">
        <div>
          <label className="flex flex-col gap-4 text-sm text-slate-900">
            <span className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500">
              <span>{copyData.sliderLabel}</span>
              <span className="text-base font-semibold tracking-normal text-slate-900">{seatCount}</span>
            </span>
            <input
              type="range"
              min={1}
              max={sliderMax}
              value={Math.min(seatCount, sliderMax)}
              onChange={(event) => handleSeatChange(Number(event.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200"
              style={{ accentColor: "#8FC436" }}
            />
            <input
              type="number"
              min={1}
              max={2000}
              value={seatCount}
              onChange={(event) => handleSeatChange(Number(event.target.value))}
              placeholder={copyData.manualPlaceholder}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500"
            />
          </label>
          {finiteUpperBound === 0 && (
            <p className="mt-2 text-xs text-slate-500">
              {copyData.sliderHint.replace("{max}", sliderMax.toString())}
            </p>
          )}
        </div>

        {quote ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Totale mensile (IVA escl.)</p>
                <p className="text-2xl font-semibold text-slate-900">{currency.format(quote.totalMonthly)}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Totale annuale (IVA escl.)</p>
                <p className="text-3xl font-semibold text-[#8FC436]">{currency.format(quote.totalAnnual)}</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              I prezzi sono calcolati pro-dipendente e fatturati annualmente. L&apos;IVA viene aggiunta automaticamente
              durante il checkout Stripe.
            </p>
            <div className="mt-4 space-y-3">
              {quote.breakdown.map((item) => (
                <div
                  key={item.code}
                  className="flex flex-wrap items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm"
                >
                  <div>
                    <p className="font-semibold text-slate-900">{item.tier}</p>
                    <p className="text-xs text-slate-500">
                      {item.seats} dipendenti - {currency.format(item.unitAnnual)} / anno cad.
                    </p>
                  </div>
                  <p className="text-base font-semibold text-slate-900">{currency.format(item.totalAnnual)}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            {copyData.emptyState}
          </div>
        )}

        <div className="grid gap-4 lg:grid-cols-2">
          <label className="text-sm text-slate-900">
            Ragione sociale / Azienda
            <input
              type="text"
              value={companyName}
              onChange={(event) => setCompanyName(event.target.value)}
              placeholder="Es. GeoTech S.r.l."
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500"
            />
          </label>
          <label className="text-sm text-slate-900">
            Email amministrativa
            <input
              type="email"
              value={contactEmail}
              onChange={(event) => setContactEmail(event.target.value)}
              placeholder="finance@azienda.it"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500"
            />
          </label>
        </div>
        {status && <p className="text-sm text-rose-500">{status}</p>}
        <button
          type="button"
          disabled={!quote || !companyName || !contactEmail || loading}
          onClick={handleCheckout}
          className="w-full rounded-full bg-[#8FC436] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#7ab227] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Reindirizzamento a Stripe..." : copyData.buttonLabel}
        </button>
      </div>
    </section>
  );
}
