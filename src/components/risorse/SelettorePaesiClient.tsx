'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import type { SiteDictionary } from '@/lib/i18n/dictionaries';
import EuropaMappa, { type StatoMappa } from './EuropaMappa';

/**
 * Pagina-selettore della risorsa "GPS sui lavoratori in UE".
 *
 * Due percorsi verso la scheda-paese:
 *  - mappa SVG dell'Europa, cliccabile sui paesi pubblicati (potenziamento);
 *  - <select> accessibile con tutti i paesi (percorso primario, sempre usabile).
 *
 * Entrambi navigano allo `href` gia' localizzato calcolato a monte (server).
 */

type RisorseGpsDict = SiteDictionary['risorseGps'];

export interface PaeseSelettore {
  slugCanonico: string;
  codiceISO: string;
  nome: string;
  bandiera: string;
  stato: 'completo' | 'scheda-senza-pdf' | 'in-arrivo';
  /** Path gia' localizzato verso la scheda, es. /de/ressourcen/.../italien/. */
  href: string;
}

interface SelettorePaesiClientProps {
  countries: PaeseSelettore[];
  dict: RisorseGpsDict;
  h1: string;
}

export default function SelettorePaesiClient({
  countries,
  dict,
  h1,
}: SelettorePaesiClientProps) {
  const router = useRouter();

  const hrefPerIso = useMemo(() => {
    const m: Record<string, string> = {};
    for (const c of countries) m[c.codiceISO] = c.href;
    return m;
  }, [countries]);

  const statoPerIso = useMemo(() => {
    const m: Record<string, StatoMappa> = {};
    for (const c of countries) {
      m[c.codiceISO] = c.stato === 'in-arrivo' ? 'in-arrivo' : 'attivo';
    }
    return m;
  }, [countries]);

  const nomePerIso = useMemo(() => {
    const m: Record<string, string> = {};
    for (const c of countries) m[c.codiceISO] = c.nome;
    return m;
  }, [countries]);

  const onMapSelect = (codiceISO: string) => {
    const href = hrefPerIso[codiceISO];
    if (href) router.push(href);
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const href = e.target.value;
    if (href) router.push(href);
  };

  // I paesi pubblicati per primi, poi gli "in arrivo"; entro ogni gruppo per nome.
  const ordinati = useMemo(
    () =>
      [...countries].sort((a, b) => {
        const ai = a.stato === 'in-arrivo' ? 1 : 0;
        const bi = b.stato === 'in-arrivo' ? 1 : 0;
        if (ai !== bi) return ai - bi;
        return a.nome.localeCompare(b.nome);
      }),
    [countries],
  );

  return (
    <main className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{h1}</h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
          {dict.introSelettore}
        </p>
      </header>

      {/* Selettore accessibile: percorso primario, sempre usabile da tastiera. */}
      <div className="mb-10 max-w-md mx-auto">
        <label
          htmlFor="selettore-paese"
          className="block text-sm font-semibold text-slate-700 mb-2"
        >
          {dict.scegliPaese}
        </label>
        <select
          id="selettore-paese"
          defaultValue=""
          onChange={onSelectChange}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm focus:border-[#8FC436] focus:outline-none focus:ring-2 focus:ring-[#8FC436]/40"
        >
          <option value="" disabled>
            {dict.scegliPaese}
          </option>
          {ordinati.map((c) => {
            const inArrivo = c.stato === 'in-arrivo';
            return (
              <option key={c.slugCanonico} value={c.href} disabled={inArrivo}>
                {c.bandiera} {c.nome}
                {inArrivo ? ` (${dict.inArrivo})` : ''}
              </option>
            );
          })}
        </select>
      </div>

      {/* Mappa SVG: potenziamento visivo, cliccabile sui paesi pubblicati. */}
      <div className="mb-4">
        <EuropaMappa
          statoPerIso={statoPerIso}
          nomePerIso={nomePerIso}
          inArrivoLabel={dict.inArrivo}
          onSelezione={onMapSelect}
          ariaLabel={dict.scegliPaese}
        />
      </div>

      {/* Attribuzione richiesta dalla licenza CC BY-SA 3.0. */}
      <p className="text-center text-xs text-slate-400">
        Mappa:{' '}
        <a
          href="https://github.com/flekschas/simple-world-map"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-slate-600"
        >
          simple-world-map
        </a>{' '}
        di Fritz Lekschas,{' '}
        <a
          href="https://creativecommons.org/licenses/by-sa/3.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-slate-600"
        >
          CC BY-SA 3.0
        </a>
      </p>
    </main>
  );
}
