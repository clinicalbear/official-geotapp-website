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
      <div className="form">
        <div className="av-result-head">
          <h2>{fascia.titolo}</h2>
          <span className="av-score">
            {contenuto.punteggio}: <b>{punteggio}/{max}</b>
          </span>
        </div>

        <div className="av-bar">
          <div style={{ width: `${(punteggio / max) * 100}%`, backgroundColor: barColor }} />
        </div>

        <p className="av-fascia-testo">{fascia.testo}</p>

        {aree.length > 0 ? (
          <div className="av-aree">
            <h3><AlertTriangle size={16} /> {contenuto.areeTitolo}</h3>
            <ul>
              {aree.map((d) => (
                <li key={d.id}>
                  <p className="av-area-q">{d.testo}</p>
                  <p className="av-area-fb">{d.feedback}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="av-ok">
            <CheckCircle2 size={20} /> {contenuto.tuttoOk}
          </p>
        )}

        <div className="av-risorse">
          <h3>{contenuto.risorseTitolo}</h3>
          <div className="av-risorse-grid">
            <ResourceLink href={hrefs.generatore} label={contenuto.risorse.generatore} />
            <ResourceLink href={hrefs.conservazione} label={contenuto.risorse.conservazione} />
            <ResourceLink href={hrefs.mappa} label={contenuto.risorse.mappa} />
            <ResourceLink href={hrefs.blog} label={contenuto.risorse.blog} />
          </div>
        </div>

        <button onClick={ricomincia} className="av-restart">
          <RotateCcw size={16} /> {contenuto.ricomincia}
        </button>
      </div>
    );
  }

  return (
    <div className="form">
      <ol className="av-list">
        {domande.map((d, i) => (
          <li key={d.id} className="fld">
            <p className="av-q">
              <span className="av-n">{i + 1}.</span>{d.testo}
            </p>
            <div className="av-opts" role="radiogroup" aria-label={d.testo}>
              {OPZIONI.map((o) => {
                const attiva = risposte[d.id] === o;
                return (
                  <button
                    key={o}
                    type="button"
                    role="radio"
                    aria-checked={attiva}
                    onClick={() => scegli(d.id, o)}
                    className={`av-opt${attiva ? ' on' : ''}`}
                  >
                    {optLabel[o]}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ol>

      <button onClick={vediRisultato} disabled={!completo} className="b1 av-submit">
        {contenuto.vediRisultato} <ArrowRight size={18} />
      </button>

      <p className="av-privacy">
        <span>🔒</span><span>{contenuto.privacyNote}</span>
      </p>
    </div>
  );
}

function ResourceLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="av-reslink">
      <span>{label}</span>
      <ArrowRight size={16} />
    </Link>
  );
}
