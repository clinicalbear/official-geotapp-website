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
    <div className="cambia-stato">
      <label htmlFor="cambia-stato" className="k" style={{ display: 'block', color: 'var(--lime)', marginBottom: 10 }}>
        {label}
      </label>
      <select
        id="cambia-stato"
        defaultValue={currentHref}
        onChange={onChange}
        style={{
          width: '100%',
          maxWidth: 360,
          background: 'transparent',
          border: '1px solid rgba(14,14,12,.2)',
          color: 'inherit',
          padding: '13px 16px',
          fontSize: 15,
          fontFamily: 'inherit',
        }}
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
