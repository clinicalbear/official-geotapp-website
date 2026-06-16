'use client';

import { EUROPA_PATHS, EUROPA_VIEWBOX } from './europa-paths';

/**
 * Mappa SVG dell'Europa, cliccabile per paese.
 *
 * Geometrie da "simple-world-map" di Fritz Lekschas / Al MacDonald (CC BY-SA 3.0),
 * vedi ./europa-paths.ts. Ogni paese e' un <g> con i suoi tracciati; lo stile e
 * l'interattivita' dipendono dallo stato passato in `statoPerIso`:
 *
 *  - 'attivo'   -> verde brand, cliccabile (scheda pubblicata).
 *  - 'in-arrivo'-> ambra, non cliccabile, con tooltip.
 *  - assente    -> grigio tenue di contesto, non interattivo.
 */

export type StatoMappa = 'attivo' | 'in-arrivo';

interface EuropaMappaProps {
  /** ISO 3166-1 alpha-2 (maiuscolo) -> stato sulla mappa. */
  statoPerIso: Record<string, StatoMappa>;
  /** Etichetta accessibile per paese (nome localizzato), ISO -> nome. */
  nomePerIso: Record<string, string>;
  /** Tooltip per i paesi "in arrivo". */
  inArrivoLabel: string;
  /** Callback al click di un paese attivo. */
  onSelezione: (codiceISO: string) => void;
  /** Etichetta accessibile complessiva della mappa. */
  ariaLabel: string;
}

const FILL_INATTIVO = '#e2e8f0'; // slate-200, contesto non interattivo
const STROKE = '#ffffff';

export default function EuropaMappa({
  statoPerIso,
  nomePerIso,
  inArrivoLabel,
  onSelezione,
  ariaLabel,
}: EuropaMappaProps) {
  const codici = Object.keys(EUROPA_PATHS).sort();

  return (
    <svg
      viewBox={EUROPA_VIEWBOX}
      role="img"
      aria-label={ariaLabel}
      className="w-full h-auto select-none block mx-auto"
    >
      {codici.map((iso) => {
        const stato = statoPerIso[iso];
        const attivo = stato === 'attivo';
        const inArrivo = stato === 'in-arrivo';
        const nome = nomePerIso[iso];

        const fill = attivo ? '#8FC436' : inArrivo ? '#fbbf24' : FILL_INATTIVO;
        const interattivo = attivo;

        return (
          <g
            key={iso}
            data-iso={iso}
            role={interattivo ? 'button' : undefined}
            tabIndex={interattivo ? 0 : undefined}
            aria-label={interattivo && nome ? nome : undefined}
            onClick={interattivo ? () => onSelezione(iso) : undefined}
            onKeyDown={
              interattivo
                ? (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelezione(iso);
                    }
                  }
                : undefined
            }
            className={
              interattivo
                ? 'cursor-pointer outline-none transition-opacity hover:opacity-80 focus-visible:opacity-80'
                : undefined
            }
            style={interattivo ? undefined : { pointerEvents: 'none' }}
          >
            {inArrivo && nome ? <title>{`${nome}: ${inArrivoLabel}`}</title> : null}
            {EUROPA_PATHS[iso].map((d, i) => (
              <path
                key={i}
                d={d}
                fill={fill}
                stroke={STROKE}
                strokeWidth={0.4}
                strokeLinejoin="round"
              />
            ))}
          </g>
        );
      })}
    </svg>
  );
}
