export const metadata = {
  title: "Checkout annullato",
};

export default function CheckoutCancelledPage() {
  return (
    <main className="min-h-[60vh] bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-[0_30px_120px_rgba(15,23,42,0.45)]">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">
          Checkout interrotto
        </p>
        <h1 className="mt-4 text-3xl font-semibold">Hai annullato la procedura di pagamento</h1>
        <p className="mt-3 text-sm text-slate-300">
          Nessun addebito è stato effettuato. Puoi riprovare in qualsiasi momento oppure contattarci per
          ricevere assistenza personalizzata.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/prezzi"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
          >
            Torna ai prezzi
          </a>
          <a
            href="mailto:info@geotapp.com"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
          >
            Scrivici
          </a>
        </div>
      </div>
    </main>
  );
}
