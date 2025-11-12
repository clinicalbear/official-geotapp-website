// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-8">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-3">Pagina non trovata</h1>
        <p className="text-slate-300">
          La risorsa che cerchi non esiste o è stata spostata.
        </p>
        <Link href="/" className="inline-block mt-6 underline">
          Torna alla home
        </Link>
      </div>
    </main>
  );
}
