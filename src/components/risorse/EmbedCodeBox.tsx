'use client';

import { useState } from 'react';
import { Code2 } from 'lucide-react';

/**
 * Box "Incorpora questo strumento": genera il codice da copiare per mettere il
 * widget mappa in un sito terzo. È iframe (mostra il tool live, col mini-logo
 * GeoTapp dentro) + una RIGA STATICA dofollow sotto = il backlink vero (dentro
 * l'iframe non conterebbe). UTM per tracciare in GA4 chi incorpora.
 */

export interface EmbedLabels {
  titolo: string;
  desc: string;
  copia: string;
  copiato: string;
}

interface Props {
  embedUrl: string; // https://geotapp.com/embed/it/gps-lavoratori-ue
  pageUrl: string; // https://geotapp.com/it/risorse/gps-lavoratori-ue/
  pageTitle: string; // anchor a tema (senza "- GeoTapp")
  labels: EmbedLabels;
}

export default function EmbedCodeBox({ embedUrl, pageUrl, pageTitle, labels }: Props) {
  const code =
    `<iframe src="${embedUrl}" width="100%" height="640" loading="lazy" ` +
    `style="border:1px solid #e2e8f0;border-radius:12px;max-width:760px" ` +
    `title="${pageTitle} - GeoTapp"></iframe>\n` +
    `<p style="font:13px system-ui,sans-serif">Fonte: ` +
    `<a href="${pageUrl}?utm_source=embed&amp;utm_medium=referral&amp;utm_campaign=risorse">` +
    `${pageTitle} - GeoTapp</a></p>`;

  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <div className="flex items-center gap-2 mb-1">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-200 text-slate-700">
          <Code2 size={18} />
        </span>
        <h2 className="text-lg font-bold text-slate-900">{labels.titolo}</h2>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">{labels.desc}</p>
      <div className="flex items-center justify-end mb-1">
        <button
          type="button"
          onClick={copy}
          className="rounded-md bg-[#8FC436] hover:bg-[#7db02e] text-slate-900 text-xs font-bold px-3 py-1 transition-colors"
        >
          {copied ? labels.copiato : labels.copia}
        </button>
      </div>
      <textarea
        readOnly
        value={code}
        rows={4}
        onFocus={(e) => e.currentTarget.select()}
        className="w-full rounded-lg bg-white border border-slate-200 px-3 py-2 text-xs font-mono text-slate-700 resize-none"
      />
    </section>
  );
}
