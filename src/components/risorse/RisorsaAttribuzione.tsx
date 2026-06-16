'use client';

import { useState } from 'react';
import { Quote } from 'lucide-react';

/**
 * Footer di attribuzione + box "Cita questa pagina" per le risorse.
 * Obiettivo backlink: invita a riusare i dati CITANDO con un link dofollow.
 * Lo snippet HTML è un <a> dofollow (nessun rel="nofollow"), con anchor a tema
 * e UTM (per vedere in GA4 chi cita e manda traffico). Il backlink vive nella
 * pagina di chi incolla → autorità SEO reale verso la pagina canonica.
 */

const UTM = '?utm_source=citazione&utm_medium=referral&utm_campaign=risorse';

export interface AttribuzioneLabels {
  datiVerificati: string;
  liberoCitare: string;
  ripubblicazione: string;
  contattaci: string;
  titoloCita: string;
  formatoTesto: string;
  formatoHtml: string;
  copia: string;
  copiato: string;
}

interface Props {
  /** URL assoluto canonico della pagina (es. https://geotapp.com/it/risorse/...). */
  pageUrl: string;
  /** Anchor text a tema (es. "Calcolatore sanzioni GPS — GeoTapp"). */
  pageTitle: string;
  contactHref: string;
  labels: AttribuzioneLabels;
  anno: number;
}

export default function RisorsaAttribuzione({ pageUrl, pageTitle, contactHref, labels, anno }: Props) {
  const urlUtm = `${pageUrl}${UTM}`;
  const snippetTesto = `${pageTitle} — GeoTapp. ${pageUrl}`;
  const snippetHtml = `Fonte: <a href="${urlUtm}">${pageTitle} — GeoTapp</a>`;
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, which: string) => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(which);
      setTimeout(() => setCopied((c) => (c === which ? null : c)), 1800);
    });
  };

  const Snippet = ({ value, which, formato }: { value: string; which: string; formato: string }) => (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{formato}</span>
        <button
          type="button"
          onClick={() => copy(value, which)}
          className="rounded-md bg-[#8FC436] hover:bg-[#7db02e] text-slate-900 text-xs font-bold px-3 py-1 transition-colors"
        >
          {copied === which ? labels.copiato : labels.copia}
        </button>
      </div>
      <code className="block rounded-lg bg-white border border-slate-200 px-3 py-2 text-xs text-slate-700 break-all">
        {value}
      </code>
    </div>
  );

  return (
    <section className="mt-12 rounded-2xl border-2 border-[#8FC436]/50 bg-[#8FC436]/[0.07] p-6">
      <div className="flex items-center gap-2 mb-1">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#8FC436]/20 text-[#6a9a1f]">
          <Quote size={18} />
        </span>
        <h2 className="text-lg font-bold text-slate-900">{labels.titoloCita}</h2>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">{labels.liberoCitare}</p>

      <div className="space-y-3">
        <Snippet value={snippetTesto} which="testo" formato={labels.formatoTesto} />
        <Snippet value={snippetHtml} which="html" formato={labels.formatoHtml} />
      </div>

      <p className="mt-4 pt-3 border-t border-[#8FC436]/30 text-xs text-slate-500 leading-relaxed">
        <span className="font-semibold text-slate-600">© {anno} GeoTapp.</span> {labels.datiVerificati}{' '}
        {labels.ripubblicazione}{' '}
        <a href={contactHref} className="text-[#6a9a1f] underline underline-offset-2 hover:text-[#557d18]">
          {labels.contattaci}
        </a>
        .
      </p>
    </section>
  );
}
