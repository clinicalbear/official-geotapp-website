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

interface Verificatore {
  verificaPacchetto: (byte: Uint8Array) => Promise<Esito>;
}

/**
 * Carica il verificatore compilato per il browser, una volta sola.
 *
 * Si usa un tag `<script>` e non un `import()` dinamico per due motivi: il
 * bundler proverebbe a risolvere `/verifier-geotapp.js` a compilazione e la
 * build muore, e la via con `Function('return import(u)')` chiede
 * `unsafe-eval`, che questo sito non concede. Sono 270 KB caricati solo
 * quando qualcuno preme il pulsante, non a ogni apertura della pagina.
 */
function caricaVerificatore(): Promise<Verificatore> {
  const g = window as unknown as { GeoTappVerifier?: Verificatore };
  if (g.GeoTappVerifier) return Promise.resolve(g.GeoTappVerifier);
  return new Promise((risolvi, rifiuta) => {
    const tag = document.createElement('script');
    tag.src = '/verifier-geotapp.js';
    tag.onload = () => {
      if (g.GeoTappVerifier) risolvi(g.GeoTappVerifier);
      else rifiuta(new Error('verificatore caricato ma non disponibile'));
    };
    tag.onerror = () => rifiuta(new Error('verificatore non raggiungibile'));
    document.head.appendChild(tag);
  });
}

function VerificaReport() {
  const parametri = useSearchParams();
  const idStampato = parametri.get('id');
  const [file, setFile] = useState<File | null>(null);
  const [inCorso, setInCorso] = useState(false);
  const [esito, setEsito] = useState<Esito | null>(null);

  /**
   * La verifica gira QUI, nel browser di chi legge, e il pacchetto non parte
   * mai da questo computer.
   *
   * Prima si mandava il file a `/api/verify-report`, che lo verificava sui
   * nostri server e rispondeva `verificationMode: "online"`. Funzionava, ma
   * era la cosa che noi stessi scriviamo essere sbagliata: chi ha prodotto
   * la prova non puo' essere anche l'unico che la ricontrolla. E per un
   * committente pubblico caricare il pacchetto significa rimandarci foto e
   * dati del personale.
   *
   * Il modulo e' lo stesso identico verificatore, compilato per il browser:
   * le impronte e la firma le ricalcola la macchina di chi verifica.
   */
  async function verifica() {
    if (!file || inCorso) return;
    setInCorso(true);
    setEsito(null);
    try {
      const byte = new Uint8Array(await file.arrayBuffer());
      const verificatore = await caricaVerificatore();
      setEsito(await verificatore.verificaPacchetto(byte));
    } catch (err) {
      const messaggio = err instanceof Error ? err.message : '';
      setEsito({
        error: messaggio
          ? `Verifica non riuscita: ${messaggio}`
          : 'Verifica non riuscita: controlla che il file sia il pacchetto .zip ricevuto.',
      });
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
            Il file non lascia questo computer: la verifica avviene nel tuo
            browser.
          </p>
        </div>

        {/* Chi deve fidarsi di una prova non puo' dipendere da chi l'ha
            prodotta. Per questo il controllo gira nel browser di chi legge, e
            lo stesso verificatore si puo' portare via e conservare. */}
        <div className="vnotice" style={{ marginTop: 22 }}>
          <b>Il pacchetto non ci viene inviato.</b> Il controllo gira dentro il
          tuo browser: le impronte e la firma elettronica le ricalcola questo
          computer, non i nostri server. Non ci arriva il file, non ci arrivano
          le foto.{' '}
          <a href="/geotapp-report-verifier-offline.zip" download>
            Puoi anche scaricare il verificatore
          </a>{' '}
          e tenerlo: è lo stesso programma, gira da riga di comando con Node.js
          18, senza account e senza collegamento a internet. Dentro trovi le
          istruzioni e l&rsquo;impronta SHA-256 del file, per controllare di aver
          ricevuto proprio il nostro. Serve a questo: fra dieci anni, anche senza
          di noi, quel documento resta verificabile.
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
