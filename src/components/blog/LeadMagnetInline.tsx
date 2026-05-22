'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface LeadMagnetCopy {
  title: string; desc: string; placeholder: string; btn: string;
  consent: string; success: string; download: string; error: string;
}

interface LeadMagnetAsset {
  id: string;        // identificatore inviato all'API (LEAD_MAGNET_GROUPS key)
  file: string;      // path pubblico del PDF
  copy: Record<string, LeadMagnetCopy>;
}

// Asset disponibili. Aggiungere qui i lead magnet futuri.
export const LEAD_MAGNETS: Record<string, LeadMagnetAsset> = {
  'informativa-gps': {
    id: 'informativa-gps',
    file: '/downloads/fac-simile-informativa-gps-dipendenti.pdf',
    copy: {
      it: {
        title: 'Scarica il fac-simile dell’informativa GPS, pronto da compilare',
        desc: 'Modello di informativa privacy per la geolocalizzazione dei dipendenti, conforme all’art. 13 GDPR. Compila i campi tra parentesi e fallo verificare dal tuo consulente.',
        placeholder: 'La tua email',
        btn: 'Inviami il fac-simile',
        consent: 'Iscrivendoti ricevi il documento e contenuti pratici su GPS e gestione del campo. Niente spam, disiscrizione in un click.',
        success: 'Fatto, il documento è qui sotto. Ti arriva anche via email da info@geotapp.com: se finisce tra spam o promozioni, spostala nella posta principale, così ricevi anche le prossime guide pratiche.',
        download: 'Scarica il fac-simile (PDF)',
        error: 'Qualcosa non ha funzionato. Riprova.',
      },
    },
  },
};

interface Props {
  magnet: string;   // chiave di LEAD_MAGNETS
  locale: string;
}

export default function LeadMagnetInline({ magnet, locale }: Props) {
  const asset = LEAD_MAGNETS[magnet];
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  if (!asset) return null;
  const t = asset.copy[locale] || asset.copy.it;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    trackEvent('lead_magnet_submit', { magnet, locale });
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale, leadMagnet: asset.id }),
      });
      if (res.ok) {
        setStatus('success');
        trackEvent('lead_magnet_success', { magnet, locale });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="my-12 rounded-2xl border border-[#3BAEE0]/25 bg-[#3BAEE0]/5 p-8 text-center">
      <p className="text-lg font-bold text-slate-900">{t.title}</p>
      <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">{t.desc}</p>
      {status === 'success' ? (
        <div className="mt-5">
          <p className="text-sm font-semibold text-[#8FC436]">{t.success}</p>
          <a
            href={asset.file}
            target="_blank"
            rel="noopener"
            onClick={() => trackEvent('lead_magnet_download', { magnet, locale })}
            className="mt-3 inline-block px-6 py-3 text-sm font-semibold text-white bg-[#3BAEE0] rounded-xl hover:bg-[#2f97c4] transition-colors"
          >
            {t.download}
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col items-center gap-2 max-w-sm mx-auto">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.placeholder}
              required
              className="flex-1 min-w-0 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 outline-none focus:border-[#3BAEE0] transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="shrink-0 px-5 py-2.5 text-sm font-semibold text-white bg-[#3BAEE0] rounded-xl hover:bg-[#2f97c4] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? '...' : t.btn}
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-sm">{t.consent}</p>
          {status === 'error' && <p className="text-xs text-red-500">{t.error}</p>}
        </form>
      )}
    </div>
  );
}
