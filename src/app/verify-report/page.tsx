'use client';

/**
 * La pagina di verifica di un report GeoTapp.
 *
 * Fino a oggi non esisteva: ogni report consegnato stampava in calce
 * `geotapp.com/verify-report?id=...`, che era un 404. C'era solo
 * `/api/verify-report`, che accetta un POST con il file e non sa niente di `?id=`.
 * Quindi chi voleva verificare un documento sbatteva su una pagina di errore, in
 * un prodotto che vende la verificabilita'.
 *
 * Qui si carica il pacchetto e si legge l'esito. La verifica gira sul
 * verificatore aperto, lo stesso che chiunque puo' scaricare: se un giorno
 * GeoTapp non c'e' piu', il documento si verifica comunque.
 */

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface Esito {
  status?: 'valid' | 'degraded' | 'invalid';
  integrityLevel?: string;
  signatureStatus?: string;
  sealStatus?: string;
  issuerDisplayName?: string | null;
  companyIdentity?: {
    companyName?: string | null;
    reportId?: string | null;
  };
  summary?: {
    eventsCount: number;
    photosCount: number;
    missingPhotos: number;
    hashMismatches: number;
  };
  warnings?: string[];
  errors?: string[];
  error?: string;
}

const COLORI = {
  valid: { bordo: '#3F8C5A', fondo: '#EAF2EC', testo: '#144A27' },
  degraded: { bordo: '#C98A28', fondo: '#FBF1E3', testo: '#7A4900' },
  invalid: { bordo: '#C65246', fondo: '#FAECEA', testo: '#7C1F17' },
} as const;

/**
 * Il guscio con il Suspense.
 *
 * `useSearchParams()` in un componente client obbliga Next a un confine di
 * Suspense: senza, la build di produzione muore in prerender con
 * "useSearchParams() should be wrapped in a suspense boundary". In `next dev`
 * non si vede, perche' il prerender non avviene: l'ho preso in faccia dalla
 * pipeline di deploy, non dai test.
 */
export default function PaginaVerifica() {
  return (
    <Suspense fallback={<main className="mx-auto max-w-2xl px-6 py-14" />}>
      <VerificaReport />
    </Suspense>
  );
}

function VerificaReport() {
  const parametri = useSearchParams();
  const idStampato = parametri.get('id');
  const [file, setFile] = useState<File | null>(null);
  const [inCorso, setInCorso] = useState(false);
  const [esito, setEsito] = useState<Esito | null>(null);

  async function verifica() {
    if (!file || inCorso) return;
    setInCorso(true);
    setEsito(null);
    try {
      const corpo = new FormData();
      corpo.append('file', file);
      const r = await fetch('/api/verify-report', {
        method: 'POST',
        body: corpo,
      });
      setEsito((await r.json()) as Esito);
    } catch {
      setEsito({ error: 'Verifica non riuscita: riprova.' });
    } finally {
      setInCorso(false);
    }
  }

  const stato = esito?.status;
  const colore = stato ? COLORI[stato] : null;

  return (
    <main className="mx-auto max-w-2xl px-6 py-14 text-[#101418]">
      <h1 className="text-3xl font-semibold tracking-tight">
        Verifica un report GeoTapp
      </h1>
      <p className="mt-3 text-[#4A5259]">
        Il pacchetto firmato si verifica qui, oppure da soli con il verificatore
        aperto: ricalcola le impronte di ogni evento e di ogni foto e controlla
        la firma elettronica. Nessun file resta sui nostri server.
      </p>

      {/* Chi arriva dal vecchio indirizzo stampato in calce ai report:
          `?id=...` da solo non basta, e va detto invece di lasciarlo davanti a
          una pagina che sembra sbagliata. */}
      {idStampato ? (
        <div className="mt-6 rounded-xl border border-[#CFD1CC] bg-[#FBFBF9] p-5">
          <p className="text-sm">
            Il codice <span className="font-mono">{idStampato}</span> identifica
            un documento, ma per verificarlo serve il file: l’identificativo da
            solo non dimostra niente. Carica il pacchetto ZIP che hai ricevuto,
            oppure aprilo dal codice a otto cifre stampato sul documento
            (<span className="font-mono">geotapp.com/r/…</span>).
          </p>
        </div>
      ) : null}

      <div className="mt-8 rounded-xl border border-[#E3E4E0] bg-white p-6">
        <label className="block text-[11px] uppercase tracking-wider text-[#7C858C]">
          Pacchetto firmato (.zip)
        </label>
        <input
          type="file"
          accept=".zip,application/zip"
          onChange={(e) => {
            setFile(e.target.files?.[0] ?? null);
            setEsito(null);
          }}
          className="mt-2 block w-full text-sm"
        />
        <button
          type="button"
          onClick={verifica}
          disabled={!file || inCorso}
          className="mt-4 rounded-xl bg-[#16327A] px-5 py-3 font-semibold text-white disabled:opacity-40"
        >
          {inCorso ? 'Verifica in corso…' : 'Verifica il documento'}
        </button>
        <p className="mt-3 text-xs text-[#7C858C]">
          Massimo 25 MB. Il file viene letto per il tempo della verifica e non
          viene conservato.
        </p>
      </div>

      {esito?.error ? (
        <div className="mt-6 rounded-xl border border-[#C65246] bg-[#FAECEA] p-5 text-[#7C1F17]">
          {esito.error}
        </div>
      ) : null}

      {stato && colore ? (
        <div
          className="mt-6 rounded-xl border p-6"
          style={{ borderColor: colore.bordo, background: colore.fondo }}
        >
          <h2
            className="text-xl font-semibold"
            style={{ color: colore.testo }}
          >
            {stato === 'valid'
              ? 'Documento integro'
              : stato === 'degraded'
                ? 'Documento integro, con riserve'
                : 'Documento non integro'}
          </h2>

          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-[#7C858C]">
                Firma
              </dt>
              <dd className="font-mono text-sm">
                {esito.signatureStatus ?? '—'}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-[#7C858C]">
                Sigillo
              </dt>
              <dd className="font-mono text-sm">{esito.sealStatus ?? '—'}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-[#7C858C]">
                Emesso da
              </dt>
              <dd className="text-sm">
                {esito.issuerDisplayName ??
                  esito.companyIdentity?.companyName ??
                  '—'}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-[#7C858C]">
                Eventi e foto
              </dt>
              <dd className="font-mono text-sm">
                {esito.summary
                  ? `${esito.summary.eventsCount} · ${esito.summary.photosCount}`
                  : '—'}
              </dd>
            </div>
          </dl>

          {esito.summary && esito.summary.hashMismatches > 0 ? (
            <p className="mt-4 text-sm" style={{ color: COLORI.invalid.testo }}>
              Impronte che non tornano: {esito.summary.hashMismatches}. Il
              contenuto non è quello firmato.
            </p>
          ) : null}

          {esito.warnings?.length ? (
            <ul className="mt-4 list-disc pl-5 text-sm text-[#4A5259]">
              {esito.warnings.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          ) : null}

          {esito.errors?.length ? (
            <ul className="mt-3 list-disc pl-5 text-sm text-[#7C1F17]">
              {esito.errors.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </main>
  );
}
