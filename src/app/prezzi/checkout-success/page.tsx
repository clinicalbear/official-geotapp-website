export const metadata = {
  title: "Checkout completato",
};

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-[60vh] bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-[0_30px_120px_rgba(15,23,42,0.45)]">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300">
          Grazie!
        </p>
        <h1 className="mt-4 text-3xl font-semibold">Pagamento completato con successo</h1>
        <p className="mt-3 text-sm text-slate-300">
          A breve riceverai un&apos;email di conferma da Stripe con tutti i dettagli fiscali.
          Il team GeoTapp ti contatterà per completare l&apos;attivazione dell&apos;account.
        </p>
        <a
          href="/prezzi"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
        >
          Torna alla pagina prezzi
        </a>
      </div>
    </main>
  );
}
