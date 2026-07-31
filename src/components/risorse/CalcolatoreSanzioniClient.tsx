'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { PaeseSeveritaLoc } from '@/lib/risorse/gps-lavoratori-ue/derive';

/**
 * Calcolatore "quanto rischi": l'utente sceglie un Paese, vede la sanzione massima
 * reale (dai 39 dossier verificati) e spunta gli adempimenti che ha già in regola;
 * il tool stima l'esposizione in base agli adempimenti OBBLIGATORI mancanti.
 * Nessun dato inventato: importi/casi/fonti vengono dalle schede.
 *
 * Vestito "direzione L" (slug .lp-risorsa-strumento): sanzione massima nel box
 * scuro .ctain, adempimenti nella lista a filo .rows con badge a bordo colorato,
 * esposizione in un box pieno rosso/verde ad angoli vivi. Regole di dettaglio in
 * ./l-page.css (../../app/[locale]/risorse/sanzioni-gps/l-page.css). Logica invariata.
 */

export interface SanzioniLabels {
  scegliPaese: string;
  sanzioneMax: string;
  casoCitato: string;
  fonte: string;
  adempimentiTitolo: string;
  obbligatorio: string;
  condizionale: string;
  ceLHai: string;
  espostoUno: string; // "{n}" e "{tot}"
  espostoMulti: string; // "{n}" e "{tot}"
  inRegola: string;
  vediScheda: string; // "{paese}"
  disclaimer: string;
}

interface Props {
  paesi: PaeseSeveritaLoc[];
  labels: SanzioniLabels;
  /** ISO -> href localizzato della scheda. */
  hrefPerIso: Record<string, string>;
}

export default function CalcolatoreSanzioniClient({ paesi, labels, hrefPerIso }: Props) {
  const ordinati = useMemo(
    () => [...paesi].sort((a, b) => a.nome.localeCompare(b.nome)),
    [paesi],
  );
  const [iso, setIso] = useState<string>('');
  const [hai, setHai] = useState<Record<string, boolean>>({});

  const sel = paesi.find((p) => p.codiceISO === iso) || null;

  const mancanti = sel
    ? sel.obbligatori.filter((_, i) => hai[`o${i}`] === false).length
    : 0;

  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIso(e.target.value);
    setHai({}); // reset: tutto "ce l'hai" di default
  };

  return (
    <div className="calc-sanzioni">
      {/* Selettore paese */}
      <div className="calc-sanzioni-select">
        <label htmlFor="sanzioni-paese" className="k">
          {labels.scegliPaese}
        </label>
        <select
          id="sanzioni-paese"
          value={iso}
          onChange={onSelect}
          className="calc-sanzioni-in"
        >
          <option value="" disabled>{labels.scegliPaese}</option>
          {ordinati.map((p) => (
            <option key={p.codiceISO} value={p.codiceISO}>
              {p.bandiera} {p.nome}
            </option>
          ))}
        </select>
      </div>

      {sel && (
        <div className="calc-sanzioni-result">
          {/* Sanzione massima */}
          <div className="ctain calc-sanzioni-ctain">
            <p className="k" style={{ color: 'var(--lime)', marginBottom: 10 }}>
              {labels.sanzioneMax}
            </p>
            <b>{sel.sanzioneImporto}</b>
            <p>
              <strong>{labels.casoCitato}:</strong> {sel.sanzioneCaso}
            </p>
            <a
              href={sel.sanzioneUrlFonte}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="b2"
            >
              {labels.fonte}
            </a>
          </div>

          {/* Adempimenti: ce l'hai? */}
          <div>
            <h2>{labels.adempimentiTitolo}</h2>
            <ul className="rows">
              {sel.obbligatori.map((voce, i) => {
                const key = `o${i}`;
                const ok = hai[key] !== false;
                return (
                  <li key={key}>
                    <input
                      type="checkbox"
                      id={key}
                      checked={ok}
                      onChange={(e) => setHai((h) => ({ ...h, [key]: e.target.checked }))}
                    />
                    <label htmlFor={key}>
                      <span>{voce}</span>
                      <span className="calc-sanzioni-badge is-obbligatorio">
                        {labels.obbligatorio}
                      </span>
                    </label>
                  </li>
                );
              })}
              {sel.condizionali.map((voce, i) => (
                <li key={`c${i}`} className="calc-sanzioni-condiz">
                  <span>{voce}</span>
                  <span className="calc-sanzioni-badge is-condizionale">
                    {labels.condizionale}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Esposizione */}
          <div
            className={`calc-sanzioni-esposizione ${mancanti > 0 ? 'is-rischio' : 'is-ok'}`}
          >
            {mancanti > 0 ? (
              <p>
                {(mancanti === 1 ? labels.espostoUno : labels.espostoMulti)
                  .replace('{n}', String(mancanti))
                  .replace('{tot}', String(sel.obbligatori.length))}
                <b>{sel.sanzioneImporto}</b>
              </p>
            ) : (
              <p>{labels.inRegola}</p>
            )}
          </div>

          {/* Link alla scheda completa */}
          {hrefPerIso[sel.codiceISO] && (
            <p style={{ textAlign: 'center' }}>
              <Link href={hrefPerIso[sel.codiceISO]} className="b1">
                {labels.vediScheda.replace('{paese}', sel.nome)}
              </Link>
            </p>
          )}

          <p className="calc-sanzioni-disclaimer">{labels.disclaimer}</p>
        </div>
      )}
    </div>
  );
}
