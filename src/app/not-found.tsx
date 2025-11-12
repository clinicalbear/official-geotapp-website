import Link from "next/link";

export const runtime = "edge";

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center p-8 bg-white text-slate-900">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Pagina non trovata</h1>
        <p className="mt-2 text-slate-600">
          La risorsa richiesta non esiste o è stata spostata.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-xl border border-slate-300 px-4 py-2 hover:bg-slate-50"
        >
          Torna alla home
        </Link>
      </div>
    </main>
  );
}