'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

/**
 * Indice della sorveglianza sul lavoro in Europa: classifica dei 39 Paesi per
 * "indice di severità" (più adempimenti obbligatori = quadro più stringente),
 * derivato dai dossier verificati. Tabella ordinabile. Nessun dato inventato.
 *
 * Vestito "direzione L": la classe globale `.tbl` (l-mockup.css) è pensata per
 * un confronto sì/no a 3 colonne (div-based grid, non <table>). Qui lo schema
 * colonne è adattato a 6 colonne per una classifica numerica (# / Paese /
 * Indice / Obblighi / Sanzione / Scheda) via regole scopate in ./l-page.css
 * sotto .lp-risorsa-strumento .idx-tbl. La struttura resta div+grid come nel
 * mockup, con ruoli ARIA da tabella per mantenere la semantica accessibile
 * che aveva la <table> originale.
 */

export interface IndiceRow {
  codiceISO: string;
  nome: string;
  bandiera: string;
  severita: number; // 0-100
  numObblighi: number;
  totaleAdempimenti: number;
  sanzioneImporto: string;
  href: string;
}

export interface IndiceLabels {
  colPaese: string;
  colIndice: string;
  colObblighi: string;
  colSanzione: string;
  scheda: string;
}

type SortKey = 'severita' | 'nome' | 'numObblighi';

export default function IndiceSorveglianzaClient({
  rows,
  labels,
}: {
  rows: IndiceRow[];
  labels: IndiceLabels;
}) {
  const [sort, setSort] = useState<SortKey>('severita');

  const sorted = useMemo(() => {
    const r = [...rows];
    if (sort === 'nome') r.sort((a, b) => a.nome.localeCompare(b.nome));
    else if (sort === 'numObblighi') r.sort((a, b) => b.numObblighi - a.numObblighi || b.severita - a.severita);
    else r.sort((a, b) => b.severita - a.severita || a.nome.localeCompare(b.nome));
    return r;
  }, [rows, sort]);

  const Th = ({
    k,
    children,
    className = '',
  }: {
    k?: SortKey;
    children?: React.ReactNode;
    className?: string;
  }) => (
    <div
      role="columnheader"
      className={`${k ? 'sortable' : ''} ${className}`}
      onClick={k ? () => setSort(k) : undefined}
      onKeyDown={
        k
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSort(k);
              }
            }
          : undefined
      }
      tabIndex={k ? 0 : undefined}
      aria-sort={k && sort === k ? 'descending' : undefined}
    >
      {children}
      {k && sort === k ? ' ▾' : ''}
    </div>
  );

  return (
    <div className="tbl-wrap">
      <div className="tbl idx-tbl" role="table" aria-label={labels.colPaese}>
        <div className="rw hd2" role="row">
          <Th className="c-num">#</Th>
          <Th k="nome" className="c-paese">{labels.colPaese}</Th>
          <Th k="severita" className="c-idx">{labels.colIndice}</Th>
          <Th k="numObblighi" className="c-obb">{labels.colObblighi}</Th>
          <Th className="c-san">{labels.colSanzione}</Th>
          <Th className="c-link" />
        </div>
        {sorted.map((r, i) => (
          <div key={r.codiceISO} className="rw" role="row">
            <div role="cell" className="c-num">{i + 1}</div>
            <div role="cell" className="lab c-paese">
              <span aria-hidden="true">{r.bandiera}</span> {r.nome}
            </div>
            <div role="cell" className="c-idx">
              <div className="idx-bar">
                <span className="idx-track">
                  <span className="idx-fill" style={{ width: `${r.severita}%` }} />
                </span>
                <b>{r.severita}</b>
              </div>
            </div>
            <div role="cell" className="c-obb">
              {r.numObblighi}/{r.totaleAdempimenti}
            </div>
            <div role="cell" className="c-san">{r.sanzioneImporto}</div>
            <div role="cell" className="c-link">
              <Link href={r.href} className="go">
                {labels.scheda} →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
