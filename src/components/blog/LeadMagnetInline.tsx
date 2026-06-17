'use client';

import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface LeadMagnetCopy {
  title: string;
  desc: string;
  download: string;          // etichetta del bottone di download diretto
  newsletterPrompt: string;  // invito (facoltativo) all'iscrizione
  placeholder: string;
  btn: string;               // bottone iscrizione
  consent: string;
  success: string;           // conferma iscrizione
  error: string;
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
        download: 'Scarica il fac-simile (PDF)',
        newsletterPrompt: 'Vuoi anche le prossime guide pratiche su GPS e gestione del campo? Lascia l’email (facoltativo).',
        placeholder: 'La tua email',
        btn: 'Iscrivimi',
        consent: 'Niente spam, disiscrizione in un click.',
        success: 'Fatto, sei iscritto. Le prossime guide arrivano da info@geotapp.com.',
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

  // Iscrizione newsletter FACOLTATIVA: non blocca il download.
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

      {/* Download DIRETTO — nessun cancello email */}
      {/* Il tracciamento di questo click è gestito a monte da ArticleContent via
          delegazione (un solo listener per tutti i link PDF dell'articolo), così
          si conta anche il link grezzo nel corpo WP e non si conta due volte. */}
      <a
        href={asset.file}
        target="_blank"
        rel="noopener"
        className="mt-5 inline-block px-6 py-3 text-sm font-semibold text-white bg-[#3BAEE0] rounded-xl hover:bg-[#2f97c4] transition-colors"
      >
        {t.download}
      </a>

      {/* Iscrizione FACOLTATIVA sotto */}
      <div className="mt-6 pt-5 border-t border-[#3BAEE0]/15 max-w-sm mx-auto">
        {status === 'success' ? (
          <p className="text-sm font-semibold text-[#8FC436]">{t.success}</p>
        ) : (
          <>
            <p className="text-xs text-slate-500 mb-3">{t.newsletterPrompt}</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.placeholder}
                className="flex-1 min-w-0 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 outline-none focus:border-[#3BAEE0] transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="shrink-0 px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:border-[#3BAEE0] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? '...' : t.btn}
              </button>
            </form>
            <p className="text-xs text-slate-400 mt-2">{t.consent}</p>
            {status === 'error' && <p className="text-xs text-red-500 mt-1">{t.error}</p>}
          </>
        )}
      </div>
    </div>
  );
}
