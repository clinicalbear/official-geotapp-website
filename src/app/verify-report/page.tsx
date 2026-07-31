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
 *
 * Vestito nella direzione L (docs/redesign-sito-2026-07/esplorazione/
 * verifica-report.html): hero .ph, zona di upload su nero, esiti nella
 * griglia .vres. Logica, upload e messaggi di esito NON sono cambiati:
 * il colore dell'esito resta guidato da `colore` (lo stesso oggetto COLORI
 * di prima), mai fissato a verde per non mentire su un esito degraded o
 * invalid. Niente animazioni "r/r-s" qui: questa pagina serve anche fuori
 * da /[locale]/ (l'indirizzo stampato sui report), dove LEffetti non gira,
 * e un elemento che aspetta un observer per diventare visibile e che non lo
 * trova resterebbe invisibile.
 */

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import './l-page.css';

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
    <Suspense fallback={<div className="lp-l lp-verifica" />}>
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
    <div className="lp-l lp-verifica">
      <section className="ph">
        <div className="w">
          <h1>Verifica un report GeoTapp</h1>
          <p className="lede">
            Il pacchetto firmato si verifica qui, oppure da soli con il verificatore
            aperto: ricalcola le impronte di ogni evento e di ogni foto e controlla
            la firma elettronica. Nessun file resta sui nostri server.
          </p>
        </div>
      </section>

      <section className="sec ink"><div className="w"><div className="vzone">
        {/* Chi arriva dal vecchio indirizzo stampato in calce ai report:
            `?id=...` da solo non basta, e va detto invece di lasciarlo davanti a
            una pagina che sembra sbagliata. */}
        {idStampato ? (
          <div className="vnotice">
            Il codice <span className="mono">{idStampato}</span> identifica
            un documento, ma per verificarlo serve il file: l&rsquo;identificativo da
            solo non dimostra niente. Carica il pacchetto ZIP che hai ricevuto,
            oppure aprilo dal codice a otto cifre stampato sul documento
            (<span className="mono">geotapp.com/r/&hellip;</span>).
          </div>
        ) : null}

        <div className="form">
          <div className="fld">
            <label>Pacchetto firmato (.zip)</label>
            <input
              type="file"
              accept=".zip,application/zip"
              onChange={(e) => {
                setFile(e.target.files?.[0] ?? null);
                setEsito(null);
              }}
              className="in"
            />
          </div>
          <button
            type="button"
            onClick={verifica}
            disabled={!file || inCorso}
            className="b1"
            style={{ border: 0, cursor: !file || inCorso ? 'default' : 'pointer' }}
          >
            {inCorso ? 'Verifica in corso…' : 'Verifica il documento'}
          </button>
          <p className="hint">
            Massimo 25 MB. Il file viene letto per il tempo della verifica e non
            viene conservato.
          </p>
        </div>

        {esito?.error ? (
          <div className="errbox">{esito.error}</div>
        ) : null}
      </div></div></section>

      {stato && colore ? (
        <section className="sec"><div className="w">
          <div
            className="valid"
            style={{ background: colore.fondo, color: colore.testo, borderLeft: `6px solid ${colore.bordo}` }}
          >
            <b>
              {stato === 'valid'
                ? 'Documento integro'
                : stato === 'degraded'
                  ? 'Documento integro, con riserve'
                  : 'Documento non integro'}
            </b>
          </div>

          <div className="vres">
            <div>
              <p className="lb k">Firma</p>
              <b>{esito?.signatureStatus ?? '—'}</b>
            </div>
            <div>
              <p className="lb k">Sigillo</p>
              <b>{esito?.sealStatus ?? '—'}</b>
            </div>
            <div>
              <p className="lb k">Emesso da</p>
              <b>
                {esito?.issuerDisplayName ??
                  esito?.companyIdentity?.companyName ??
                  '—'}
              </b>
            </div>
            <div>
              <p className="lb k">Eventi e foto</p>
              <b>
                {esito?.summary
                  ? `${esito.summary.eventsCount} · ${esito.summary.photosCount}`
                  : '—'}
              </b>
            </div>
          </div>

          {esito?.summary && esito.summary.hashMismatches > 0 ? (
            <p style={{ marginTop: 22, color: COLORI.invalid.testo }}>
              Impronte che non tornano: {esito.summary.hashMismatches}. Il
              contenuto non è quello firmato.
            </p>
          ) : null}

          {esito?.warnings?.length ? (
            <ul className="warn-list">
              {esito.warnings.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          ) : null}

          {esito?.errors?.length ? (
            <ul className="err-list" style={{ color: COLORI.invalid.testo }}>
              {esito.errors.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          ) : null}
        </div></section>
      ) : null}
    </div>
  );
}
