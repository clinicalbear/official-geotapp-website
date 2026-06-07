'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import type { AppLocale } from '@/lib/i18n/config';
import type { SiteDictionary } from '@/lib/i18n/dictionaries';
import { calcRoi } from '@/lib/roi';

interface Props {
  dict: SiteDictionary;
  locale: AppLocale;
}

// Settori del selettore, allineati alle chiavi dict.roi.settore_* esistenti.
// "altro" è il catch-all. Stesso set del calcolatore completo.
const SETTORI = [
  'installatori',
  'pulizie',
  'sicurezza',
  'elettricisti',
  'idraulici',
  'termoidraulici',
  'impianti',
  'edilizia',
  'manutenzione',
  'altro',
] as const;

type SettoreKey = (typeof SETTORI)[number];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RoiMini({ dict, locale }: Props) {
  const t = dict.landing.roi_mini;
  const r = dict.roi;

  const [operatori, setOperatori] = useState(10);
  const [costoOrario, setCostoOrario] = useState(18);
  const [contestazioni, setContestazioni] = useState(2);

  const [email, setEmail] = useState('');
  const [settore, setSettore] = useState<SettoreKey>('altro');
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');
  // Honeypot anti-spam: campo invisibile agli umani, riempito dai bot. Vedi route.ts.
  const [hp, setHp] = useState('');

  const roi = calcRoi({
    operatori,
    costo_orario: costoOrario,
    contestazioni,
  });

  const money = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(roi.risparmio_totale);

  const settoreLabel = (key: SettoreKey): string => {
    const labels: Record<SettoreKey, string> = {
      installatori: r.settore_installatori,
      pulizie: r.settore_pulizie,
      sicurezza: r.settore_sicurezza,
      elettricisti: r.settore_elettricisti,
      idraulici: r.settore_idraulici,
      termoidraulici: r.settore_termoidraulici,
      impianti: r.settore_impianti,
      edilizia: r.settore_edilizia,
      manutenzione: r.settore_manutenzione,
      altro: r.settore_altro,
    };
    return labels[key];
  };

  const num = (v: string, min = 0) => {
    const n = Number(v);
    return Number.isFinite(n) && n >= min ? n : min;
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus('err');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/roi-calculator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          operatori,
          costo_orario: costoOrario,
          contestazioni,
          siti: 0,
          ore_admin: 0,
          settore,
          email,
          nome: '',
          telefono: '',
          locale,
          subscribe_newsletter: true,
          source: 'mini',
          hp,
        }),
      });
      setStatus(res.ok ? 'ok' : 'err');
    } catch {
      setStatus('err');
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm';

  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
      {/* LEFT — pitch */}
      <div>
        <p className="geo-eyebrow mb-5">{t.pitch_kicker}</p>
        <h2 className="font-display font-extrabold text-[2rem] sm:text-[2.5rem] lg:text-[2.9rem] leading-[1.08] tracking-tight text-slate-900 mb-5">
          {t.pitch_title}
        </h2>
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
          {t.pitch_body}
        </p>
        <ul className="space-y-4">
          {t.pitch_points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={22} />
              <span className="text-slate-700 text-base sm:text-lg leading-snug">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT — calculator card */}
      <div className="geo-glass rounded-[28px] border border-border shadow-xl p-6 sm:p-8 lg:p-10">
        <h3 className="text-xl sm:text-2xl font-bold text-text-primary">{t.title}</h3>
        <p className="mt-2 text-sm text-text-secondary">{t.subtitle}</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="roi-mini-operatori" className="block text-xs font-medium text-text-secondary mb-1">
            {t.field_operatori}
          </label>
          <input
            id="roi-mini-operatori"
            type="number"
            min={1}
            inputMode="numeric"
            value={operatori}
            onChange={(e) => setOperatori(Math.max(1, num(e.target.value, 1)))}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="roi-mini-costo" className="block text-xs font-medium text-text-secondary mb-1">
            {t.field_costo}
          </label>
          <input
            id="roi-mini-costo"
            type="number"
            min={0}
            inputMode="numeric"
            value={costoOrario}
            onChange={(e) => setCostoOrario(num(e.target.value, 0))}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="roi-mini-contestazioni" className="block text-xs font-medium text-text-secondary mb-1">
            {t.field_contestazioni}
          </label>
          <input
            id="roi-mini-contestazioni"
            type="number"
            min={0}
            inputMode="numeric"
            value={contestazioni}
            onChange={(e) => setContestazioni(num(e.target.value, 0))}
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-green-50 border border-green-200 p-5 text-center">
        <p className="text-base sm:text-lg text-text-secondary leading-snug" aria-live="polite">
          {t.result_prefix}{' '}
          <span className="text-3xl sm:text-4xl font-extrabold text-green-600 align-middle">{money}</span>{' '}
          {t.result_suffix}
        </p>
        <p className="mt-3 text-xs text-text-secondary">{t.disclaimer}</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
        {/* Honeypot: offscreen (non display:none, così i bot lo riempiono). Gli umani non lo vedono. */}
        <input
          type="text"
          name="company_website"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
        />
        <label htmlFor="roi-mini-email" className="block text-sm font-medium text-text-primary">
          {t.email_label}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            id="roi-mini-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.email_placeholder}
            className={inputClass}
            aria-label={t.email_placeholder}
          />
          <select
            value={settore}
            onChange={(e) => setSettore(e.target.value as SettoreKey)}
            className={inputClass}
            aria-label={r.field_settore}
          >
            {SETTORI.map((s) => (
              <option key={s} value={s}>
                {settoreLabel(s)}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3 rounded-xl font-bold text-white bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-base"
        >
          {t.email_cta}
        </button>
        {status === 'ok' && <p className="text-sm text-green-600 text-center">{t.email_ok}</p>}
        {status === 'err' && <p className="text-sm text-red-600 text-center">{t.email_err}</p>}
        </form>
      </div>
    </div>
  );
}
