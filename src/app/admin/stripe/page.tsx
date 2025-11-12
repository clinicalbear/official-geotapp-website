export const runtime = 'edge';
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { getStripeEvents } from "@/lib/stripeEventsStore";

export const dynamic = "force-dynamic";

function formatDate(timestamp: number) {
  const milliseconds =
    timestamp > 1_000_000_000_000 ? timestamp : timestamp * 1000;
  return new Date(milliseconds).toLocaleString("it-IT");
}

function getNumber(
  payload: Record<string, unknown>,
  keys: string[],
): number | undefined {
  for (const key of keys) {
    const candidate = payload[key];
    if (typeof candidate === "number") {
      return candidate;
    }
  }
  return undefined;
}

function getString(
  payload: Record<string, unknown>,
  keys: string[],
): string | undefined {
  for (const key of keys) {
    const candidate = payload[key];
    if (typeof candidate === "string") {
      return candidate;
    }
  }
  return undefined;
}

function formatAmount(payload: Record<string, unknown> | null) {
  if (!payload) return null;
  const amount = getNumber(payload, [
    "amount_total",
    "amount",
    "amount_due",
    "amount_captured",
  ]);
  if (amount == null) return null;

  const currency =
    getString(payload, ["currency", "default_currency"]) ?? "EUR";

  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amount / 100);
}

function extractCustomer(payload: Record<string, unknown> | null) {
  if (!payload) return null;
  const direct = getString(payload, ["customer_email", "receipt_email"]);
  if (direct) return direct;

  const details = payload.customer_details as Record<string, unknown> | null;
  if (details) {
    const nested = getString(details, ["email"]);
    if (nested) return nested;
  }

  return null;
}

export default async function StripeEventsPage() {
  const events = await getStripeEvents(50);
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <header className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
                Stripe feed
              </p>
              <h1 className="text-2xl font-semibold">
                Eventi ricevuti dal webhook
              </h1>
              <p className="mt-2 text-sm text-slate-300">
                Qui vedi l&apos;ultimo snapshot degli eventi che Stripe ha inviato a
                {` `}
                <code className="rounded bg-white/10 px-2 py-1 text-xs">
                  /api/stripe/webhook
                </code>
                . Manteniamo gli ultimi 50 record per evitare di dover entrare
                nella dashboard Stripe.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/admin"
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 hover:border-white/40"
              >
                Torna al CMS
              </Link>
              <Link
                href="/admin/stripe"
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-100 hover:border-white/40"
              >
                Aggiorna
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3 text-xs text-slate-300">
            Suggerimento: configura il webhook su Stripe verso l&apos;URL qui
            sopra e assicurati che il secret in <strong>Integrazioni &gt;
              Stripe Billing</strong> corrisponda per poter verificare la firma
            degli eventi.
          </div>
        </header>

        {events.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-10 text-center text-sm text-slate-300">
            Ancora nessun evento registrato. Invia un evento di test da Stripe
            (es. <code className="rounded bg-white/10 px-2 py-1 text-xs">
              stripe trigger checkout.session.completed
            </code>
            ) per popolare il feed.
          </div>
        ) : (
          <div className="space-y-4">
            {events.map((event) => {
              const amount = formatAmount(event.payload);
              const customer = extractCustomer(event.payload);
              return (
                <article
                  key={`${event.id}-${event.receivedAt}`}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                        {formatDate(event.created)}
                      </p>
                      <p className="mt-1 text-lg font-semibold text-white">
                        {event.type}
                      </p>
                      <p className="text-sm text-slate-300">
                        {amount ? `${amount}` : "Importo non disponibile"}
                        {customer ? ` · ${customer}` : ""}
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          event.status === "received"
                            ? "bg-emerald-400/10 text-emerald-300"
                            : "bg-amber-400/10 text-amber-300"
                        }`}
                      >
                        {event.status === "received" ? "Ricevuto" : "Errore"}
                      </span>
                      <p className="mt-1 text-xs text-slate-400">
                        {event.livemode ? "Live" : "Test"} · registrato il{" "}
                        {new Date(event.receivedAt).toLocaleString("it-IT")}
                      </p>
                    </div>
                  </div>
                  {event.errorMessage && (
                    <p className="mt-3 rounded-2xl border border-amber-400/20 bg-amber-400/5 px-4 py-2 text-sm text-amber-200">
                      {event.errorMessage}
                    </p>
                  )}
                  <details className="mt-4 rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3 text-sm text-slate-200">
                    <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      Payload completo
                    </summary>
                    <pre className="mt-3 max-h-80 overflow-auto whitespace-pre-wrap text-xs text-slate-300">
                      {JSON.stringify(event.payload ?? {}, null, 2)}
                    </pre>
                  </details>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
