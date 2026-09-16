import { CircleCheckBig, CircleSlash, Circle } from 'lucide-react';

import { parolaStato, TINTE, type StatoProva } from '@/lib/stati-prova';

const ICONE = {
  registrato: Circle,
  sigillato: CircleCheckBig,
  'verifica-fallita': CircleSlash,
} as const;

/**
 * La pastiglia di uno dei tre stati della prova: colore, icona e parola.
 * Mai il colore da solo (A47): un uomo su dodici non distingue il verde dal
 * rosso, e il rapportino si stampa anche in bianco e nero.
 *
 * Non e' cliccabile: dice come sta una cosa, non fa niente.
 */
export default function PastigliaStato({
  stato,
  locale,
}: {
  stato: StatoProva;
  locale: string | null | undefined;
}) {
  const t = TINTE[stato];
  const Icona = ICONE[stato];
  const parola = parolaStato(stato, locale);
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-bold"
      style={{ background: t.fondo, color: t.inchiostro, borderColor: t.bordo }}
    >
      <Icona size={13} strokeWidth={1.75} aria-hidden="true" />
      {parola}
    </span>
  );
}
