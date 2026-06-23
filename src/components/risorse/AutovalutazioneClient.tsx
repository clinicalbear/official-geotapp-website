'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, AlertTriangle, ArrowRight, RotateCcw } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import {
  calcolaPunteggio,
  punteggioMax,
  fasciaPer,
  areeDaRivedere,
  type AvContenuto,
  type AvRisposta,
} from '@/lib/risorse/autovalutazione-dati-rh';

interface Props {
  locale: string;
  contenuto: AvContenuto;
  hrefs: { mappa: string; generatore: string; conservazione: string; blog: string };
}

const OPZIONI: AvRisposta[] = ['si', 'parziale', 'no'];

export default function AutovalutazioneClient({ locale, contenuto, hrefs }: Props) {
  const { domande, opt, fasce } = contenuto;
  const [risposte, setRisposte] = useState<Record<string, AvRisposta>>({});
  const [inviato, setInviato] = useState(false);

  const completo = domande.every((d) => risposte[d.id]);

  function scegli(id: string, r: AvRisposta) {
    setRisposte((prev) => ({ ...prev, [id]: r }));
  }

  function vediRisultato() {
    if (!completo) return;
    const punteggio = calcolaPunteggio(risposte);
    setInviato(true);
    trackEvent('autovalutazione_dati_rh', { locale, punteggio });
  }

  function ricomincia() {
    setRisposte({});
    setInviato(false);
  }

  const punteggio = calcolaPunteggio(risposte);
  const max = punteggioMax(domande);
  const fascia = fasciaPer(punteggio, fasce);
  const aree = areeDaRivedere(domande, risposte);
  // colore della fascia in base alla soglia (rischio / medio / buono)
  const soglie = [...fasce].map((f) => f.min).sort((a, b) => a - b);
  const livello = soglie.indexOf(fascia.min); // 0,1,2
  const barColor = livello === 2 ? '#8FC436' : livello === 1 ? '#f59e0b' : '#ef4444';

  const optLabel: Record<AvRisposta, string> = { si: opt.si, parziale: opt.parziale, no: opt.no };

  if (inviato) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex items-baseline justify-between gap-4 flex-wrap">
          <h2 className="text-xl font-bold text-slate-900">{fascia.titolo}</h2>
          <span className="text-sm font-semibold text-slate-500">
            {contenuto.punteggio}: <span className="tabular-nums text-slate-800">{punteggio}/{max}</span>
          </span>
        </div>

        <div className="mt-3 h-2.5 w-full rounded-full bg-slate-100 overflow-hidden">
          <div className="h-full rounded-full transition-all" style={{ width: `${(punteggio / max) * 100}%`, backgroundColor: barColor }} />
        </div>

        <p className="mt-4 text-slate-600 leading-relaxed">{fascia.testo}</p>

        {aree.length > 0 ? (
          <div className="mt-7">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 mb-3 flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-500" /> {contenuto.areeTitolo}
            </h3>
            <ul className="space-y-3">
              {aree.map((d) => (
                <li key={d.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-semibold text-slate-800 text-sm">{d.testo}</p>
                  <p className="mt-1.5 text-slate-600 text-sm leading-relaxed">{d.feedback}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="mt-6 flex items-start gap-2 text-slate-700">
            <CheckCircle2 size={20} className="text-[#6a9a1f] shrink-0 mt-0.5" /> {contenuto.tuttoOk}
          </p>
        )}

        <div className="mt-8 border-t border-slate-100 pt-6">
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 mb-3">{contenuto.risorseTitolo}</h3>
          <div className="grid gap-2.5 sm:grid-cols-2">
            <ResourceLink href={hrefs.generatore} label={contenuto.risorse.generatore} />
            <ResourceLink href={hrefs.conservazione} label={contenuto.risorse.conservazione} />
            <ResourceLink href={hrefs.mappa} label={contenuto.risorse.mappa} />
            <ResourceLink href={hrefs.blog} label={contenuto.risorse.blog} />
          </div>
        </div>

        <button
          onClick={ricomincia}
          className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl hover:border-[#8FC436] transition-colors"
        >
          <RotateCcw size={16} /> {contenuto.ricomincia}
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      <ol className="space-y-6">
        {domande.map((d, i) => (
          <li key={d.id}>
            <p className="font-semibold text-slate-800 leading-snug">
              <span className="text-slate-400 tabular-nums mr-2">{i + 1}.</span>{d.testo}
            </p>
            <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label={d.testo}>
              {OPZIONI.map((o) => {
                const attiva = risposte[d.id] === o;
                return (
                  <button
                    key={o}
                    type="button"
                    role="radio"
                    aria-checked={attiva}
                    onClick={() => scegli(d.id, o)}
                    className={`px-4 py-2 text-sm font-semibold rounded-xl border transition-colors ${
                      attiva
                        ? 'bg-[#8FC436] border-[#8FC436] text-slate-900'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-[#8FC436]'
                    }`}
                  >
                    {optLabel[o]}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ol>

      <button
        onClick={vediRisultato}
        disabled={!completo}
        className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-slate-900 bg-[#8FC436] rounded-xl hover:bg-[#7db02e] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {contenuto.vediRisultato} <ArrowRight size={18} />
      </button>

      <p className="text-xs text-slate-400 mt-4 flex items-start gap-1.5">
        <span>🔒</span><span>{contenuto.privacyNote}</span>
      </p>
    </div>
  );
}

function ResourceLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:border-[#8FC436] hover:text-slate-900 transition-colors"
    >
      <span>{label}</span>
      <ArrowRight size={16} className="text-[#6a9a1f] transition-transform group-hover:translate-x-1 shrink-0" />
    </Link>
  );
}
