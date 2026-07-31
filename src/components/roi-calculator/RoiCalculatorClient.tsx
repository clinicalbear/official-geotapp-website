'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { AppLocale } from '@/lib/i18n/config';
import type { RoiResult } from '@/lib/roi';
import { getCurrencyForLocale, FX_RATES_PER_EUR, FX_BUFFER, type CurrencyCode } from '@/lib/pricing';
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
  /** Honeypot anti-spam: invisibile agli umani, riempito dai bot. Vedi route.ts. */
  hp: string;
}

// Settori disponibili nel selettore. Allineati ai 10 settori reali del sito
// (geotapp-site/src/content/settori/). "altro" è il catch-all per chi non
// rientra in nessuna categoria specifica. Mappati ai MailerLite group via
// SECTOR_GROUP_MAP in /api/roi-calculator/route.ts per automation mirate.
const SETTORI = [
  'elettricisti',
  'idraulici',
  'termoidraulici',
  'impianti',
  'edilizia',
  'manutenzione',
  'pulizie',
  'sicurezza',
  'altro',
] as const;

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

type Currency = 'EUR' | 'USD'; // opt-in dalla pagina (?currency=usd); la valuta REALE è derivata dal locale

const NUMBER_LOCALE: Partial<Record<CurrencyCode, string>> = {
  USD: 'en-US', GBP: 'en-GB', AUD: 'en-AU', CAD: 'en-CA',
};
function numberLocaleFor(cur: CurrencyCode, locale: string): string {
  return (
    NUMBER_LOCALE[cur] ??
    (locale === 'de' ? 'de-DE'
      : locale === 'nl' ? 'nl-NL'
      : locale === 'fr' ? 'fr-FR'
      : locale === 'es' ? 'es-ES'
      : locale === 'pt' ? 'pt-PT'
      : locale === 'en' ? 'en-GB'
      : 'it-IT')
  );
}
function formatMoney(n: number, cur: CurrencyCode, locale: string): string {
  return new Intl.NumberFormat(numberLocaleFor(cur, locale), {
    style: 'currency', currency: cur, maximumFractionDigits: 0,
  }).format(n);
}
function currencySymbol(cur: CurrencyCode, locale: string): string {
  const parts = new Intl.NumberFormat(numberLocaleFor(cur, locale), {
    style: 'currency', currency: cur, maximumFractionDigits: 0,
  }).formatToParts(0);
  return parts.find((p) => p.type === 'currency')?.value ?? cur;
}
// EUR (base del modello, calcolato lato server) -> valuta locale, con FX + buffer
// coerenti col pricing del sito (src/lib/pricing.ts). Inverso per l'input utente.
function toLocal(eur: number, cur: CurrencyCode): number {
  return cur === 'EUR' ? eur : Math.round(eur * FX_RATES_PER_EUR[cur] * FX_BUFFER);
}
function toEur(local: number, cur: CurrencyCode): number {
  return cur === 'EUR' ? local : Math.round(local / (FX_RATES_PER_EUR[cur] * FX_BUFFER));
}

// dark=true → vestito "direzione L" (pagina standalone /roi-calculator/, dentro
// .lp-roi); dark=false → vestito originale chiaro (iframe embed nel blog,
// invariato). Stessa logica/struttura, cambiano solo le classi.
function SliderField({
  label, value, min, max, step = 1, unit, symbol = '€', onChange, dark = false,
}: {
  label: string; value: number; min: number; max: number;
  step?: number; unit?: string; symbol?: string; onChange: (v: number) => void; dark?: boolean;
}) {
  const isMoney = unit === 'money';
  return (
    <div className={dark ? 'fld' : 'space-y-2'}>
      <div className="flex justify-between items-center">
        <label className={dark ? '' : 'text-sm font-medium text-gray-700'}>{label}</label>
        <span
          className={dark ? '' : 'text-sm font-bold text-blue-600'}
          style={dark ? { color: 'var(--lime)', fontWeight: 600, fontSize: 14 } : undefined}
        >
          {isMoney ? `${symbol}${value}` : `${value}${unit ? ` ${unit}` : ''}`}
        </span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        className={dark
          ? 'w-full h-2 rounded-full appearance-none cursor-pointer'
          : 'w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-blue-600'}
        style={dark ? { background: 'rgba(242,240,233,.18)', accentColor: 'var(--seal)' } : undefined}
      />
      <div
        className={dark ? 'flex justify-between text-xs' : 'flex justify-between text-xs text-gray-400'}
        style={dark ? { color: 'rgba(242,240,233,.45)' } : undefined}
      >
        <span>{isMoney ? `${symbol}${min}` : String(min)}</span>
        <span>{isMoney ? `${symbol}${max}` : String(max)}</span>
      </div>
    </div>
  );
}

function ResultCard({
  label, value, highlight, countActive, locale, cur, dark = false,
}: {
  label: string; value: number; highlight?: boolean; countActive: boolean; locale: string; cur: CurrencyCode; dark?: boolean;
}) {
  const animated = useCountUp(toLocal(value, cur), 1400, countActive);
  if (dark) {
    return (
      <div>
        <b>{formatMoney(animated, cur, locale)}</b>
        <span>{label}</span>
      </div>
    );
  }
  return (
    <div className={`rounded-xl p-4 ${highlight ? 'bg-green-50 border-2 border-green-400' : 'bg-gray-50 border border-gray-200'}`}>
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <p className={`font-bold ${highlight ? 'text-2xl text-green-600' : 'text-xl text-gray-800'}`}>
        {formatMoney(animated, cur, locale)}
      </p>
    </div>
  );
}

function AnimatedTotal({ value, locale, active, cur }: { value: number; locale: string; active: boolean; cur: CurrencyCode }) {
  const animated = useCountUp(toLocal(value, cur), 1600, active);
  return <>{formatMoney(animated, cur, locale)}</>;
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
  fr: { required: "Renseignez le nom et l'email", network: 'Erreur réseau. Réessayez.' },
  es: { required: 'Completa nombre y email', network: 'Error de red. Inténtalo de nuevo.' },
  pt: { required: 'Preencha o nome e o email', network: 'Erro de rede. Tente novamente.' },
  da: { required: 'Udfyld navn og e-mail', network: 'Netværksfejl. Prøv igen.' },
  sv: { required: 'Fyll i namn och e-post', network: 'Nätverksfel. Försök igen.' },
  nb: { required: 'Fyll inn navn og e-post', network: 'Nettverksfeil. Prøv igjen.' },
  ru: { required: 'Укажите имя и email', network: 'Ошибка сети. Попробуйте снова.' },
};

export default function RoiCalculatorClient({ dict, locale, trialUrl, embed = false, currency = 'EUR' }: Props) {
  // Valuta reale: opt-in USD dalla pagina (?currency=usd), altrimenti quella del locale
  // (USD/GBP/AUD/CAD/EUR... via src/lib/pricing.ts). Il modello server resta in EUR.
  const cur: CurrencyCode = currency === 'USD' ? 'USD' : getCurrencyForLocale(locale);
  const curSymbol = currencySymbol(cur, locale);
  // Vestito: scuro/direzione-L sulla pagina standalone, invariato nell'iframe embed.
  const dark = !embed;
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [form, setForm] = useState<FormData>({
    settore: '', operatori: 10, siti: 5, ore_admin: 8,
    contestazioni: 3, costo_orario: 22, nome: '', email: '', telefono: '', hp: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<RoiResult | null>(null);
  const [countActive, setCountActive] = useState(false);
  // Default ON: legittimo interesse, la newsletter copre il servizio appena
  // richiesto (consigli per realizzare il ROI calcolato). L'utente può
  // disattivare in 1 click sotto al form.
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(true);
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
        body: JSON.stringify({ ...form, costo_orario: toEur(form.costo_orario, cur), locale, subscribe_newsletter: subscribeNewsletter }),
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
    : '';

  // pillola verde .b1 (mockup), riusata sui pulsanti primari/di invio quando dark
  const b1Cls = 'b1';
  // link "indietro" in stile .b2, appoggiato al colore chiaro ereditato da .form
  const backCls = 'b2';

  return (
    <div ref={containerRef} id={dark ? 'calcolatore' : undefined} className={wrapperClass}>
      <div className="max-w-2xl mx-auto">
        {/* Header: nella pagina standalone il titolo lo mette già la sezione .ph
            sopra (stesso dict.hero_title/subtitle); qui resta solo per l'embed,
            dove serve perché l'iframe non ha un proprio H1. */}
        {embed && (
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
                className={dark ? 'flex-1 h-1.5 rounded-full transition-colors duration-300' : `flex-1 h-1.5 rounded-full transition-colors duration-300 ${i <= step ? 'bg-blue-600' : 'bg-gray-200'}`}
                style={dark ? { background: i <= step ? 'var(--seal)' : 'rgba(242,240,233,.18)' } : undefined}
              />
            ))}
          </div>
        )}

        <div className={dark ? 'form' : 'bg-white rounded-2xl shadow-lg overflow-hidden'}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={step}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className={dark ? '' : 'p-8'}
            >
              {/* STEP 0: Azienda */}
              {step === 0 && (
                <div className="space-y-6">
                  <div>
                    <h2 className={dark ? '' : 'text-xl font-bold text-gray-900'}>{dict.step1_title}</h2>
                    <p className={dark ? 'mt-1' : 'text-gray-500 text-sm mt-1'} style={dark ? { color: 'rgba(242,240,233,.6)', fontSize: 14.5 } : undefined}>{dict.step1_subtitle}</p>
                  </div>
                  <div>
                    <p className={dark ? 'mb-3' : 'text-sm font-medium text-gray-700 mb-3'} style={dark ? { color: 'var(--lime)', fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase' } : undefined}>{dict.field_settore}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {SETTORI.map(s => (
                        <button
                          key={s}
                          onClick={() => update('settore', s)}
                          className={dark
                            ? 'p-3 rounded-xl border text-sm font-medium transition-all'
                            : `p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                                form.settore === s
                                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                                  : 'border-gray-200 text-gray-600 hover:border-blue-300'
                              }`}
                          style={dark ? {
                            border: form.settore === s ? '1px solid var(--seal)' : '1px solid rgba(242,240,233,.22)',
                            background: form.settore === s ? 'rgba(143,196,54,.14)' : 'transparent',
                            color: form.settore === s ? 'var(--lime)' : 'rgba(242,240,233,.7)',
                          } : undefined}
                        >
                          {dict[`settore_${s}` as keyof RoiDict] as string}
                        </button>
                      ))}
                    </div>
                  </div>
                  <SliderField
                    label={dict.field_operatori}
                    value={form.operatori} min={1} max={200}
                    onChange={v => update('operatori', v)}
                    dark={dark}
                  />
                  <button
                    disabled={form.settore === ''}
                    onClick={goNext}
                    className={dark
                      ? `${b1Cls} w-full text-center disabled:opacity-40 disabled:cursor-not-allowed`
                      : 'w-full py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors'}
                    style={dark ? { border: 'none', cursor: 'pointer', font: 'inherit', fontWeight: 500 } : undefined}
                  >
                    {dict.next} →
                  </button>
                </div>
              )}

              {/* STEP 1: Situazione attuale */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className={dark ? '' : 'text-xl font-bold text-gray-900'}>{dict.step2_title}</h2>
                    <p className={dark ? 'mt-1' : 'text-gray-500 text-sm mt-1'} style={dark ? { color: 'rgba(242,240,233,.6)', fontSize: 14.5 } : undefined}>{dict.step2_subtitle}</p>
                  </div>
                  <SliderField label={dict.field_siti} value={form.siti} min={1} max={30} onChange={v => update('siti', v)} dark={dark} />
                  <SliderField label={dict.field_ore_admin} value={form.ore_admin} min={1} max={40} onChange={v => update('ore_admin', v)} dark={dark} />
                  <SliderField label={dict.field_contestazioni} value={form.contestazioni} min={0} max={30} onChange={v => update('contestazioni', v)} dark={dark} />
                  <SliderField label={dict.field_costo_orario} value={form.costo_orario} min={10} max={80} unit="money" symbol={curSymbol} onChange={v => update('costo_orario', v)} dark={dark} />
                  <div className="flex gap-3">
                    <button
                      onClick={goBack}
                      className={dark ? `${backCls} flex-1 text-center` : 'flex-1 py-3 rounded-xl font-semibold text-gray-600 border border-gray-300 hover:bg-gray-50 transition-colors'}
                      style={dark ? { border: '1px solid rgba(242,240,233,.24)', borderRadius: 12, padding: '13px 0', cursor: 'pointer', background: 'none', font: 'inherit', fontWeight: 500 } : undefined}
                    >
                      ← {dict.back}
                    </button>
                    <button
                      onClick={goNext}
                      className={dark ? `${b1Cls} flex-1 text-center` : 'flex-1 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors'}
                      style={dark ? { border: 'none', cursor: 'pointer', font: 'inherit', fontWeight: 500 } : undefined}
                    >
                      {dict.next} →
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Lead gate */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className={dark ? '' : 'text-xl font-bold text-gray-900'}>{dict.step3_title}</h2>
                    <p className={dark ? 'mt-1' : 'text-gray-500 text-sm mt-1'} style={dark ? { color: 'rgba(242,240,233,.6)', fontSize: 14.5 } : undefined}>{dict.step3_subtitle}</p>
                  </div>
                  <div className="space-y-4">
                    {/* Honeypot: offscreen (non display:none, così i bot lo riempiono). Gli umani non lo vedono. */}
                    <input
                      type="text" name="company_website" value={form.hp}
                      onChange={e => update('hp', e.target.value)}
                      tabIndex={-1} autoComplete="off" aria-hidden="true"
                      style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                    />
                    <input
                      type="text" placeholder={dict.field_nome} value={form.nome}
                      onChange={e => update('nome', e.target.value)}
                      className={dark ? 'in' : 'w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm'}
                    />
                    <input
                      type="email" placeholder={dict.field_email} value={form.email}
                      onChange={e => update('email', e.target.value)}
                      className={dark ? 'in' : 'w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm'}
                    />
                    <input
                      type="tel" placeholder={dict.field_telefono} value={form.telefono}
                      onChange={e => update('telefono', e.target.value)}
                      className={dark ? 'in' : 'w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm'}
                    />
                  </div>
                  {error && <p className="text-red-400 text-sm">{error}</p>}
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={subscribeNewsletter}
                      onChange={(e) => setSubscribeNewsletter(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer flex-shrink-0"
                    />
                    <span className={dark ? 'text-xs leading-relaxed' : 'text-xs text-gray-500 leading-relaxed'} style={dark ? { color: 'rgba(242,240,233,.55)' } : undefined}>
                      {dict.newsletter_opt_in ?? 'Voglio anche ricevere la newsletter mensile con consigli pratici per realizzare il ROI calcolato (GPS, GDPR, gestione campo). Disiscrizione in 1 click.'}
                    </span>
                  </label>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className={dark
                      ? `${b1Cls} w-full text-center disabled:opacity-60 disabled:cursor-not-allowed`
                      : 'w-full py-3 rounded-xl font-bold text-white bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-base'}
                    style={dark ? { border: 'none', cursor: 'pointer', font: 'inherit', fontWeight: 500 } : undefined}
                  >
                    {loading ? '...' : dict.cta_calcola}
                  </button>
                  <p className={dark ? 'text-xs text-center leading-relaxed' : 'text-xs text-gray-400 text-center leading-relaxed'} style={dark ? { color: 'rgba(242,240,233,.45)' } : undefined}>{dict.consent_text}</p>
                  <button
                    onClick={goBack}
                    className={dark ? 'w-full text-sm text-center' : 'w-full text-sm text-gray-500 hover:text-gray-700'}
                    style={dark ? { color: 'rgba(242,240,233,.55)', background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' } : undefined}
                  >
                    ← {dict.back}
                  </button>
                </div>
              )}

              {/* STEP 3: Results */}
              {step === 3 && result && (
                <div className="space-y-6">
                  <div className="text-center">
                    <div
                      className={dark ? 'inline-flex items-center justify-center w-12 h-12 rounded-full mb-3' : 'inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-3'}
                      style={dark ? { background: 'rgba(143,196,54,.16)' } : undefined}
                    >
                      <svg className={dark ? 'w-6 h-6' : 'w-6 h-6 text-green-600'} style={dark ? { color: 'var(--seal)' } : undefined} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className={dark ? '' : 'text-xl font-bold text-gray-900'}>{dict.results_title}</h2>
                    <p className={dark ? 'mt-1' : 'text-gray-500 text-sm mt-1'} style={dark ? { color: 'rgba(242,240,233,.6)', fontSize: 14.5 } : undefined}>{dict.results_subtitle}</p>
                  </div>
                  <div className={dark ? 'res2' : 'grid grid-cols-1 gap-3'} style={dark ? { marginTop: 0 } : undefined}>
                    <ResultCard label={dict.results_admin} value={result.risparmio_admin} countActive={countActive} locale={locale} cur={cur} dark={dark} />
                    <ResultCard label={dict.results_dispute} value={result.risparmio_dispute} countActive={countActive} locale={locale} cur={cur} dark={dark} />
                    <ResultCard label={dict.results_coord} value={result.risparmio_coord} countActive={countActive} locale={locale} cur={cur} dark={dark} />
                  </div>
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className={dark ? 'rounded-2xl p-6 text-center' : 'rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white text-center'}
                    style={dark ? { background: 'rgba(143,196,54,.12)', border: '1px solid rgba(143,196,54,.3)' } : undefined}
                  >
                    <p className={dark ? 'text-sm mb-1' : 'text-sm opacity-80 mb-1'} style={dark ? { color: 'rgba(242,240,233,.65)' } : undefined}>{dict.results_total}</p>
                    <p
                      className={dark ? 'text-5xl' : 'text-4xl font-black'}
                      style={dark ? { fontFamily: "var(--font-anton),'Anton',sans-serif", color: 'var(--lime)', textTransform: 'uppercase', letterSpacing: '-.02em' } : undefined}
                    >
                      <AnimatedTotal value={result.risparmio_totale} locale={locale} active={countActive} cur={cur} />
                    </p>
                    <p className={dark ? 'text-sm mt-1' : 'text-sm opacity-80 mt-1'} style={dark ? { color: 'rgba(242,240,233,.65)' } : undefined}>{dict.per_anno}</p>
                  </motion.div>
                  <div className="grid grid-cols-2 gap-3">
                    <div
                      className={dark ? 'rounded-xl p-4 text-center' : 'rounded-xl bg-blue-50 border border-blue-200 p-4 text-center'}
                      style={dark ? { background: 'rgba(242,240,233,.05)', border: '1px solid rgba(242,240,233,.14)' } : undefined}
                    >
                      <p className={dark ? 'text-xs mb-1' : 'text-xs text-gray-500 mb-1'} style={dark ? { color: 'rgba(242,240,233,.55)' } : undefined}>{dict.results_payback}</p>
                      <p className={dark ? 'text-2xl font-bold' : 'text-2xl font-bold text-blue-600'} style={dark ? { color: 'var(--lime)' } : undefined}>{result.payback_mesi}</p>
                      <p className={dark ? 'text-xs' : 'text-xs text-gray-500'} style={dark ? { color: 'rgba(242,240,233,.55)' } : undefined}>{dict.results_payback_unit}</p>
                    </div>
                    <div
                      className={dark ? 'rounded-xl p-4 text-center' : 'rounded-xl bg-purple-50 border border-purple-200 p-4 text-center'}
                      style={dark ? { background: 'rgba(242,240,233,.05)', border: '1px solid rgba(242,240,233,.14)' } : undefined}
                    >
                      <p className={dark ? 'text-xs mb-1' : 'text-xs text-gray-500 mb-1'} style={dark ? { color: 'rgba(242,240,233,.55)' } : undefined}>{dict.results_roi}</p>
                      <p className={dark ? 'text-2xl font-bold' : 'text-2xl font-bold text-purple-600'} style={dark ? { color: 'var(--sky)' } : undefined}>{result.roi_pct}%</p>
                    </div>
                  </div>
                  <a
                    href={trialUrl}
                    onClick={() => trackEvent('trial_click', { cta_source: 'roi_calculator' })}
                    className={dark ? `${b1Cls} w-full text-center` : 'btn-modern w-full'}
                  >
                    {dict.results_cta} →
                  </a>
                  <p className={dark ? 'text-xs text-center' : 'text-xs text-gray-400 text-center'} style={dark ? { color: 'rgba(242,240,233,.4)' } : undefined}>{dict.results_disclaimer}</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
