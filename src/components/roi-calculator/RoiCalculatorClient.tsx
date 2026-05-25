'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { AppLocale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { trackEvent } from '@/lib/analytics';
type RoiDict = ReturnType<typeof getDictionary>['roi'];

interface Props {
  dict: RoiDict;
  locale: AppLocale;
  trialUrl: string;
  embed?: boolean;
  currency?: Currency;
}

interface FormData {
  settore: string;
  operatori: number;
  siti: number;
  ore_admin: number;
  contestazioni: number;
  costo_orario: number;
  nome: string;
  email: string;
  telefono: string;
}

interface RoiResult {
  risparmio_admin: number;
  risparmio_dispute: number;
  risparmio_coord: number;
  risparmio_totale: number;
  costo_geotapp_annuo: number;
  payback_mesi: number;
  roi_pct: number;
}

const SETTORI = ['installatori', 'pulizie', 'sicurezza', 'altro'] as const;

function useCountUp(target: number, duration = 1200, active = false): number {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active || target === 0) { setValue(target); return; }
    let cancelled = false;
    const start = Date.now();
    const tick = () => {
      if (cancelled) return;
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    return () => { cancelled = true; };
  }, [target, active, duration]);
  return value;
}

type Currency = 'EUR' | 'USD';

function formatMoney(n: number, locale: string, currency: Currency = 'EUR'): string {
  const numberLocale =
    currency === 'USD' ? 'en-US' :
    locale === 'de' ? 'de-DE' :
    locale === 'nl' ? 'nl-NL' :
    locale === 'en' ? 'en-GB' : 'it-IT';
  return new Intl.NumberFormat(numberLocale, {
    style: 'currency', currency, maximumFractionDigits: 0,
  }).format(n);
}

// EUR -> USD conversion used for US-facing presentations. Conservative 1.10
// reflects ECB reference rate ± typical Stripe FX margin. The ROI delta is
// expressed in raw money; exact conversion is informational only.
const EUR_TO_USD = 1.10;
function maybeConvert(n: number, currency: Currency): number {
  return currency === 'USD' ? Math.round(n * EUR_TO_USD) : n;
}

function SliderField({
  label, value, min, max, step = 1, unit, currency = 'EUR', onChange,
}: {
  label: string; value: number; min: number; max: number;
  step?: number; unit?: string; currency?: Currency; onChange: (v: number) => void;
}) {
  const isMoney = unit === '€' || unit === '$';
  const symbol = currency === 'USD' ? '$' : '€';
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <span className="text-sm font-bold text-blue-600">
          {isMoney ? `${symbol}${value}` : `${value}${unit ? ` ${unit}` : ''}`}
        </span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-blue-600"
      />
      <div className="flex justify-between text-xs text-gray-400">
        <span>{isMoney ? `${symbol}${min}` : String(min)}</span>
        <span>{isMoney ? `${symbol}${max}` : String(max)}</span>
      </div>
    </div>
  );
}

function ResultCard({
  label, value, highlight, countActive, locale, currency = 'EUR',
}: {
  label: string; value: number; highlight?: boolean; countActive: boolean; locale: string; currency?: Currency;
}) {
  const animated = useCountUp(maybeConvert(value, currency), 1400, countActive);
  return (
    <div className={`rounded-xl p-4 ${highlight ? 'bg-green-50 border-2 border-green-400' : 'bg-gray-50 border border-gray-200'}`}>
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <p className={`font-bold ${highlight ? 'text-2xl text-green-600' : 'text-xl text-gray-800'}`}>
        {formatMoney(animated, locale, currency)}
      </p>
    </div>
  );
}

function AnimatedTotal({ value, locale, active, currency = 'EUR' }: { value: number; locale: string; active: boolean; currency?: Currency }) {
  const animated = useCountUp(maybeConvert(value, currency), 1600, active);
  return <>{formatMoney(animated, locale, currency)}</>;
}

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

const ERROR_MSGS: Record<string, { required: string; network: string }> = {
  it: { required: 'Compila nome e email', network: 'Errore di rete. Riprova.' },
  en: { required: 'Please fill in name and email', network: 'Network error. Please try again.' },
  de: { required: 'Bitte Name und E-Mail ausfüllen', network: 'Netzwerkfehler. Bitte erneut versuchen.' },
  nl: { required: 'Vul naam en e-mail in', network: 'Netwerkfout. Probeer opnieuw.' },
};

export default function RoiCalculatorClient({ dict, locale, trialUrl, embed = false, currency = 'EUR' }: Props) {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [form, setForm] = useState<FormData>({
    settore: '', operatori: 10, siti: 5, ore_admin: 8,
    contestazioni: 3, costo_orario: 22, nome: '', email: '', telefono: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<RoiResult | null>(null);
  const [countActive, setCountActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Notify parent iframe of height changes for embed mode
  useEffect(() => {
    if (!embed) return;
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      window.parent.postMessage({ type: 'roi-height', height: el.scrollHeight }, '*');
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [embed]);

  const update = (key: keyof FormData, value: string | number) =>
    setForm(prev => ({ ...prev, [key]: value }));

  const goNext = () => { setDir(1); setStep(s => s + 1); };
  const goBack = () => { setDir(-1); setStep(s => s - 1); };

  const handleSubmit = async () => {
    if (!form.nome.trim() || !form.email.trim()) {
      setError((ERROR_MSGS[locale] ?? ERROR_MSGS.it).required);
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/roi-calculator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, locale }),
      });
      if (!res.ok) throw new Error('Server error');
      const data = await res.json();
      setResult(data.roi);
      setDir(1);
      setStep(3);
      setTimeout(() => setCountActive(true), 300);
    } catch {
      setError((ERROR_MSGS[locale] ?? ERROR_MSGS.it).network);
    } finally {
      setLoading(false);
    }
  };

  const wrapperClass = embed
    ? 'min-h-screen bg-white'
    : 'min-h-screen bg-gradient-to-br from-blue-50 to-white pt-28 pb-16 px-4';

  return (
    <div ref={containerRef} className={wrapperClass}>
      <div className="max-w-2xl mx-auto">
        {/* Header — hidden in embed mode */}
        {!embed && (
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{dict.hero_title}</h1>
            <p className="text-gray-600">{dict.hero_subtitle}</p>
          </div>
        )}

        {/* Progress bar (steps 0-2) */}
        {step < 3 && (
          <div className="flex gap-2 mb-8">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className={`flex-1 h-1.5 rounded-full transition-colors duration-300 ${i <= step ? 'bg-blue-600' : 'bg-gray-200'}`}
              />
            ))}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={step}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="p-8"
            >
              {/* STEP 0: Azienda */}
              {step === 0 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{dict.step1_title}</h2>
                    <p className="text-gray-500 text-sm mt-1">{dict.step1_subtitle}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-3">{dict.field_settore}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {SETTORI.map(s => (
                        <button
                          key={s}
                          onClick={() => update('settore', s)}
                          className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                            form.settore === s
                              ? 'border-blue-600 bg-blue-50 text-blue-700'
                              : 'border-gray-200 text-gray-600 hover:border-blue-300'
                          }`}
                        >
                          {dict[`settore_${s}` as keyof RoiDict]}
                        </button>
                      ))}
                    </div>
                  </div>
                  <SliderField
                    label={dict.field_operatori}
                    value={form.operatori} min={1} max={200}
                    onChange={v => update('operatori', v)}
                  />
                  <button
                    disabled={form.settore === ''}
                    onClick={goNext}
                    className="w-full py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    {dict.next} →
                  </button>
                </div>
              )}

              {/* STEP 1: Situazione attuale */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{dict.step2_title}</h2>
                    <p className="text-gray-500 text-sm mt-1">{dict.step2_subtitle}</p>
                  </div>
                  <SliderField label={dict.field_siti} value={form.siti} min={1} max={30} onChange={v => update('siti', v)} />
                  <SliderField label={dict.field_ore_admin} value={form.ore_admin} min={1} max={40} onChange={v => update('ore_admin', v)} />
                  <SliderField label={dict.field_contestazioni} value={form.contestazioni} min={0} max={30} onChange={v => update('contestazioni', v)} />
                  <SliderField label={dict.field_costo_orario} value={form.costo_orario} min={10} max={80} unit={currency === 'USD' ? '$' : '€'} currency={currency} onChange={v => update('costo_orario', v)} />
                  <div className="flex gap-3">
                    <button onClick={goBack} className="flex-1 py-3 rounded-xl font-semibold text-gray-600 border border-gray-300 hover:bg-gray-50 transition-colors">
                      ← {dict.back}
                    </button>
                    <button onClick={goNext} className="flex-1 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                      {dict.next} →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Lead gate */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{dict.step3_title}</h2>
                    <p className="text-gray-500 text-sm mt-1">{dict.step3_subtitle}</p>
                  </div>
                  <div className="space-y-4">
                    <input
                      type="text" placeholder={dict.field_nome} value={form.nome}
                      onChange={e => update('nome', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <input
                      type="email" placeholder={dict.field_email} value={form.email}
                      onChange={e => update('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <input
                      type="tel" placeholder={dict.field_telefono} value={form.telefono}
                      onChange={e => update('telefono', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full py-3 rounded-xl font-bold text-white bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-base"
                  >
                    {loading ? '...' : dict.cta_calcola}
                  </button>
                  <p className="text-xs text-gray-400 text-center leading-relaxed">{dict.consent_text}</p>
                  <button onClick={goBack} className="w-full text-sm text-gray-500 hover:text-gray-700">
                    ← {dict.back}
                  </button>
                </div>
              )}

              {/* STEP 3: Results */}
              {step === 3 && result && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-3">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">{dict.results_title}</h2>
                    <p className="text-gray-500 text-sm mt-1">{dict.results_subtitle}</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    <ResultCard label={dict.results_admin} value={result.risparmio_admin} countActive={countActive} locale={locale} currency={currency} />
                    <ResultCard label={dict.results_dispute} value={result.risparmio_dispute} countActive={countActive} locale={locale} currency={currency} />
                    <ResultCard label={dict.results_coord} value={result.risparmio_coord} countActive={countActive} locale={locale} currency={currency} />
                  </div>
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white text-center"
                  >
                    <p className="text-sm opacity-80 mb-1">{dict.results_total}</p>
                    <p className="text-4xl font-black">
                      <AnimatedTotal value={result.risparmio_totale} locale={locale} active={countActive} currency={currency} />
                    </p>
                    <p className="text-sm opacity-80 mt-1">{dict.per_anno}</p>
                  </motion.div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-blue-50 border border-blue-200 p-4 text-center">
                      <p className="text-xs text-gray-500 mb-1">{dict.results_payback}</p>
                      <p className="text-2xl font-bold text-blue-600">{result.payback_mesi}</p>
                      <p className="text-xs text-gray-500">{dict.results_payback_unit}</p>
                    </div>
                    <div className="rounded-xl bg-purple-50 border border-purple-200 p-4 text-center">
                      <p className="text-xs text-gray-500 mb-1">{dict.results_roi}</p>
                      <p className="text-2xl font-bold text-purple-600">{result.roi_pct}%</p>
                    </div>
                  </div>
                  <a
                    href={trialUrl}
                    onClick={() => trackEvent('trial_click', { source: 'roi_calculator' })}
                    className="block w-full py-4 rounded-xl font-bold text-white text-center bg-blue-600 hover:bg-blue-700 transition-colors text-base shadow-md"
                  >
                    {dict.results_cta} →
                  </a>
                  <p className="text-xs text-gray-400 text-center">{dict.results_disclaimer}</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
