'use client';

import { useState } from 'react';

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

  return (
    <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm text-slate-500 leading-relaxed">
        <span className="font-semibold text-slate-700">© {anno} GeoTapp</span> — {labels.datiVerificati}{' '}
        {labels.liberoCitare} {labels.ripubblicazione}{' '}
        <a href={contactHref} className="text-[#6a9a1f] underline underline-offset-2 hover:text-[#557d18]">
          {labels.contattaci}
        </a>
        .
      </p>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">{labels.titoloCita}</p>

        <div className="space-y-3">
          {/* Testo */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-slate-500">{labels.formatoTesto}</span>
              <button
                type="button"
                onClick={() => copy(snippetTesto, 'testo')}
                className="text-xs font-semibold text-[#6a9a1f] hover:text-[#557d18]"
              >
                {copied === 'testo' ? labels.copiato : labels.copia}
              </button>
            </div>
            <code className="block rounded-lg bg-white border border-slate-200 px-3 py-2 text-xs text-slate-700 break-all">
              {snippetTesto}
            </code>
          </div>

          {/* HTML dofollow */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-slate-500">{labels.formatoHtml}</span>
              <button
                type="button"
                onClick={() => copy(snippetHtml, 'html')}
                className="text-xs font-semibold text-[#6a9a1f] hover:text-[#557d18]"
              >
                {copied === 'html' ? labels.copiato : labels.copia}
              </button>
            </div>
            <code className="block rounded-lg bg-white border border-slate-200 px-3 py-2 text-xs text-slate-700 break-all">
              {snippetHtml}
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
