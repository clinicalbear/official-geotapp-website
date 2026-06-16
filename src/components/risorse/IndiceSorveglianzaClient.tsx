'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

/**
 * Indice della sorveglianza sul lavoro in Europa: classifica dei 39 Paesi per
 * "indice di severità" (più adempimenti obbligatori = quadro più stringente),
 * derivato dai dossier verificati. Tabella ordinabile. Nessun dato inventato.
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

  const Th = ({ k, children, className = '' }: { k?: SortKey; children?: React.ReactNode; className?: string }) => (
    <th
      className={`px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 ${k ? 'cursor-pointer select-none hover:text-slate-800' : ''} ${className}`}
      onClick={k ? () => setSort(k) : undefined}
      aria-sort={k && sort === k ? 'descending' : undefined}
    >
      {children}
      {k && sort === k ? ' ▾' : ''}
    </th>
  );

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full min-w-[640px] border-collapse bg-white text-sm">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <Th>#</Th>
            <Th k="nome">{labels.colPaese}</Th>
            <Th k="severita">{labels.colIndice}</Th>
            <Th k="numObblighi" className="hidden sm:table-cell">{labels.colObblighi}</Th>
            <Th className="hidden md:table-cell">{labels.colSanzione}</Th>
            <Th></Th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((r, i) => (
            <tr key={r.codiceISO} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
              <td className="px-3 py-2 text-slate-400 tabular-nums">{i + 1}</td>
              <td className="px-3 py-2 font-medium text-slate-900 whitespace-nowrap">
                <span aria-hidden="true">{r.bandiera}</span> {r.nome}
              </td>
              <td className="px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-20 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#8FC436]"
                      style={{ width: `${r.severita}%` }}
                    />
                  </div>
                  <span className="tabular-nums text-slate-700 font-semibold w-9">{r.severita}</span>
                </div>
              </td>
              <td className="px-3 py-2 text-slate-600 tabular-nums hidden sm:table-cell">
                {r.numObblighi}/{r.totaleAdempimenti}
              </td>
              <td className="px-3 py-2 text-slate-600 hidden md:table-cell whitespace-nowrap">{r.sanzioneImporto}</td>
              <td className="px-3 py-2 text-right">
                <Link href={r.href} className="text-[#6a9a1f] font-semibold hover:text-[#557d18] whitespace-nowrap">
                  {labels.scheda} →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
