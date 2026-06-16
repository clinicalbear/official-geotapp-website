'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { PaeseSeveritaLoc } from '@/lib/risorse/gps-lavoratori-ue/derive';

/**
 * Calcolatore "quanto rischi": l'utente sceglie un Paese, vede la sanzione massima
 * reale (dai 39 dossier verificati) e spunta gli adempimenti che ha già in regola;
 * il tool stima l'esposizione in base agli adempimenti OBBLIGATORI mancanti.
 * Nessun dato inventato: importi/casi/fonti vengono dalle schede.
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
    <div>
      {/* Selettore paese */}
      <div className="mb-8 max-w-md mx-auto">
        <label htmlFor="sanzioni-paese" className="block text-sm font-semibold text-slate-700 mb-2">
          {labels.scegliPaese}
        </label>
        <select
          id="sanzioni-paese"
          value={iso}
          onChange={onSelect}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-[#8FC436] focus:outline-none focus:ring-2 focus:ring-[#8FC436]/40"
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
        <div className="space-y-8">
          {/* Sanzione massima */}
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-red-600 mb-1">
              {labels.sanzioneMax}
            </p>
            <p className="text-4xl font-bold text-red-700 mb-2">{sel.sanzioneImporto}</p>
            <p className="text-slate-700 leading-relaxed mb-2">
              <span className="font-semibold">{labels.casoCitato}:</span> {sel.sanzioneCaso}
            </p>
            <a
              href={sel.sanzioneUrlFonte}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#6a9a1f] underline underline-offset-2 hover:text-[#557d18] break-words"
            >
              {labels.fonte}
            </a>
          </div>

          {/* Adempimenti: ce l'hai? */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">{labels.adempimentiTitolo}</h2>
            <ul className="space-y-3">
              {sel.obbligatori.map((voce, i) => {
                const key = `o${i}`;
                const ok = hai[key] !== false;
                return (
                  <li key={key} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                    <input
                      type="checkbox"
                      id={key}
                      checked={ok}
                      onChange={(e) => setHai((h) => ({ ...h, [key]: e.target.checked }))}
                      className="mt-1 h-5 w-5 shrink-0 rounded border-slate-300 text-[#8FC436] focus:ring-[#8FC436]"
                    />
                    <label htmlFor={key} className="flex-1 cursor-pointer">
                      <span className="font-medium text-slate-900">{voce}</span>
                      <span className="ml-2 rounded-full bg-red-100 text-red-800 px-2 py-0.5 text-xs font-semibold">
                        {labels.obbligatorio}
                      </span>
                    </label>
                  </li>
                );
              })}
              {sel.condizionali.map((voce, i) => (
                <li key={`c${i}`} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 opacity-90">
                  <span className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
                  <span className="flex-1">
                    <span className="font-medium text-slate-900">{voce}</span>
                    <span className="ml-2 rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-xs font-semibold">
                      {labels.condizionale}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Esposizione */}
          <div
            className={`rounded-2xl p-6 text-center ${
              mancanti > 0 ? 'bg-red-600 text-white' : 'bg-[#8FC436]/15 text-slate-900'
            }`}
          >
            {mancanti > 0 ? (
              <p className="text-lg font-semibold">
                {(mancanti === 1 ? labels.espostoUno : labels.espostoMulti)
                  .replace('{n}', String(mancanti))
                  .replace('{tot}', String(sel.obbligatori.length))}{' '}
                <span className="text-2xl font-bold">{sel.sanzioneImporto}</span>
              </p>
            ) : (
              <p className="text-lg font-semibold">{labels.inRegola}</p>
            )}
          </div>

          {/* Link alla scheda completa */}
          {hrefPerIso[sel.codiceISO] && (
            <p className="text-center">
              <Link
                href={hrefPerIso[sel.codiceISO]}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 transition-colors"
              >
                {labels.vediScheda.replace('{paese}', sel.nome)}
              </Link>
            </p>
          )}

          <p className="rounded-lg bg-slate-100 border border-slate-200 text-slate-500 text-sm p-4">
            {labels.disclaimer}
          </p>
        </div>
      )}
    </div>
  );
}
