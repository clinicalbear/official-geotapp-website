'use client';

import { useRouter } from 'next/navigation';
import type { PaeseSelettore } from './SelettorePaesiClient';

/**
 * Selettore-paese compatto da mostrare DENTRO una scheda-paese: permette di
 * saltare a un altro Stato senza tornare alla pagina-elenco. Stesso elenco del
 * selettore principale; lo Stato corrente è preselezionato.
 */

interface CambiaStatoSelectProps {
  countries: PaeseSelettore[];
  /** href (già localizzato) della scheda corrente, per la preselezione. */
  currentHref: string;
  /** Etichetta accessibile/visibile (es. "Scegli un paese"). */
  label: string;
  inArrivoLabel: string;
}

export default function CambiaStatoSelect({
  countries,
  currentHref,
  label,
  inArrivoLabel,
}: CambiaStatoSelectProps) {
  const router = useRouter();

  // Pubblicati prima, poi gli "in arrivo"; entro ogni gruppo per nome.
  const ordinati = [...countries].sort((a, b) => {
    const ai = a.stato === 'in-arrivo' ? 1 : 0;
    const bi = b.stato === 'in-arrivo' ? 1 : 0;
    if (ai !== bi) return ai - bi;
    return a.nome.localeCompare(b.nome);
  });

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const href = e.target.value;
    if (href && href !== currentHref) router.push(href);
  };

  return (
    <div className="mx-auto max-w-sm">
      <label
        htmlFor="cambia-stato"
        className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2"
      >
        {label}
      </label>
      <select
        id="cambia-stato"
        defaultValue={currentHref}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 shadow-sm focus:border-[#8FC436] focus:outline-none focus:ring-2 focus:ring-[#8FC436]/40"
      >
        {ordinati.map((c) => {
          const inArrivo = c.stato === 'in-arrivo';
          return (
            <option key={c.slugCanonico} value={c.href} disabled={inArrivo}>
              {c.bandiera} {c.nome}
              {inArrivo ? ` (${inArrivoLabel})` : ''}
            </option>
          );
        })}
      </select>
    </div>
  );
}
