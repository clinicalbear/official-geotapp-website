'use client';

import { FormEvent, useState, useEffect, useRef } from 'react';
import {
  CheckCircle2,
  Send,
  ShieldCheck,
  MapPin,
  WifiOff,
  ChevronDown,
  Rocket,
  CreditCard,
  Users,
  Mail,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocaleFromPathname } from '@/lib/i18n/locale-routing';
import Link from 'next/link';
import { trackEvent, consumeTrialSource } from '@/lib/analytics';
import Reviews from '@/components/Reviews';

const BENEFIT_ICONS = [
  <Rocket size={20} className="text-primary" />,
  <CreditCard size={20} className="text-emerald-500" />,
  <ShieldCheck size={20} className="text-blue-500" />,
];

export default function TrialPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const d = getDictionary(locale).trial;

  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState<'SOLO' | 'TEAM' | 'BUSINESS'>('TEAM');
  const [seats, setSeats] = useState('');

  // Localize the trial to the user, not just to the page default ('it').
  // An explicit non-it URL locale (e.g. /fr/trial) wins; otherwise fall back
  // to the browser language when it is one we support.
  const SUPPORTED_LANGS = ['it', 'en', 'de', 'nl', 'fr', 'es', 'pt', 'da', 'sv', 'nb', 'ru'];
  const detectLanguage = (): string => {
    if (locale && locale !== 'it') return locale;
    if (typeof navigator !== 'undefined') {
      const nav = (navigator.language || '').slice(0, 2).toLowerCase();
      if (SUPPORTED_LANGS.includes(nav)) return nav;
    }
    return locale || 'it';
  };

  // --- Funnel tracking ---
  const touchedFields = useRef<Set<string>>(new Set());
  const formStarted = useRef(false);
  const pageLoadTime = useRef(Date.now());

  // Track page view with scroll depth + source attribution (CTA d'origine)
  useEffect(() => {
    const source = consumeTrialSource();
    trackEvent('trial_page_view', {
      locale: locale || 'it',
      ...(source ? { cta_source: source } : {}),
    });

    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPct = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPct > maxScroll) {
        maxScroll = scrollPct;
        if (scrollPct >= 25 && maxScroll < 30) trackEvent('trial_scroll', { depth: '25' });
        if (scrollPct >= 50 && maxScroll < 55) trackEvent('trial_scroll', { depth: '50' });
        if (scrollPct >= 75 && maxScroll < 80) trackEvent('trial_scroll', { depth: '75' });
        if (scrollPct >= 95) trackEvent('trial_scroll', { depth: '100' });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track abandonment on page leave
    const handleBeforeUnload = () => {
      if (formStarted.current && !submitted) {
        const timeOnPage = Math.round((Date.now() - pageLoadTime.current) / 1000);
        const lastField = Array.from(touchedFields.current).pop() || 'none';
        trackEvent('trial_form_abandon', {
          fields_touched: touchedFields.current.size.toString(),
          last_field: lastField,
          time_on_page: timeOnPage.toString(),
          locale: locale || 'it',
        });
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [locale, submitted]);

  const trackFieldFocus = (fieldName: string) => {
    if (!formStarted.current) {
      formStarted.current = true;
      trackEvent('trial_form_start', { first_field: fieldName, cta_locale: locale || 'it' });
    }
    touchedFields.current.add(fieldName);
    trackEvent('trial_field_focus', { field: fieldName });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const timeOnPage = Math.round((Date.now() - pageLoadTime.current) / 1000);
    trackEvent('trial_form_submit', {
      fields_touched: touchedFields.current.size.toString(),
      time_to_submit: timeOnPage.toString(),
      locale: locale || 'it',
    });
    try {
      const saasUrl = process.env.NEXT_PUBLIC_SAAS_URL || 'https://crm.geotapp.com';
      const res = await fetch(`${saasUrl}/api/trial/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          plan,
          timetrackerSeats: seats.trim() === '' ? 0 : Number(seats),
          language: detectLanguage(),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || d.error_message);
      setSubmittedEmail(email);
      setSubmitted(true);
      trackEvent('trial_form_success', { cta_locale: locale || 'it' });
    } catch (err: any) {
      setError(err.message);
      trackEvent('trial_form_error', { error: err.message, cta_locale: locale || 'it' });
    } finally {
      setLoading(false);
    }
  };

  const localePrefix = locale !== 'it' ? `/${locale}` : '/it';

  return (
    <div className="pt-20 md:pt-28 pb-24 px-6 min-h-screen bg-white text-slate-900">
      <div className="container mx-auto max-w-6xl">

        {/* HEADER — compatto su mobile per portare il form above the fold */}
        <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide mb-4 md:mb-6"
          >
            {d.badge}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-display font-bold text-slate-900 mb-3 md:mb-6 leading-tight"
          >
            {d.page_title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-xl text-slate-500 font-light leading-relaxed"
          >
            {d.page_subtitle}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT: form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-3xl p-10 text-center"
                >
                  <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{d.success_title}</h2>
                  <p className="text-slate-600 mb-1">
                    {d.success_desc}<strong>{submittedEmail}</strong>
                  </p>
                  <p className="text-slate-600 mb-4">{d.success_desc2}</p>
                  <div className="mt-6 bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 text-left">
                    <div className="flex items-start gap-3">
                      <Mail size={24} className="text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-base font-semibold text-slate-900 mb-2">{d.success_spam}</p>
                        <p className="text-sm text-slate-700">
                          {d.success_sender}
                          <br />
                          <code className="inline-block mt-1 px-2 py-1 bg-white border border-amber-300 rounded font-mono text-amber-900 font-bold">no-reply@geotapp.com</code>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-100/60 space-y-5"
                  onSubmit={handleSubmit}
                >
                  <h2 className="text-lg font-bold text-slate-900 mb-2">{d.form_title}</h2>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      {d.form_email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => trackFieldFocus('email')}
                      placeholder={d.form_email_placeholder}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                    <p className="mt-1 text-xs text-slate-400">{d.form_email_hint}</p>
                  </div>

                  {/* Flow plan */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      {d.form_plan} <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={plan}
                      onChange={(e) => setPlan(e.target.value as 'SOLO' | 'TEAM' | 'BUSINESS')}
                      onFocus={() => trackFieldFocus('plan')}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="SOLO">{d.plan_solo}</option>
                      <option value="TEAM">{d.plan_team}</option>
                      <option value="BUSINESS">{d.plan_business}</option>
                    </select>
                    <p className="mt-1 text-xs text-slate-400">{d.form_plan_note}</p>
                  </div>

                  {/* TimeTracker seats */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      {d.form_seats}
                    </label>
                    <input
                      type="number"
                      min={0}
                      inputMode="numeric"
                      value={seats}
                      onChange={(e) => setSeats(e.target.value)}
                      onFocus={() => trackFieldFocus('seats')}
                      placeholder="0"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                    <p className="mt-1 text-xs text-slate-400">{d.form_seats_hint}</p>
                  </div>

                  {error && (
                    <p className="rounded-lg border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-sm">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <Send size={20} />
                    {loading ? d.form_submitting : d.form_submit_simple}
                  </button>

                  <p className="text-center text-sm text-slate-500">
                    {d.form_response_time}
                  </p>

                  <p className="text-center text-xs text-slate-400">
                    {d.form_privacy}{' '}
                    <Link href={`${localePrefix}/privacy/`} className="underline hover:text-slate-600">
                      {d.form_privacy_link}
                    </Link>
                    .
                  </p>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Trust strip */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-500" /> GDPR Compliant
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-blue-500" /> {(d as any).trust_gps ?? 'Verified GPS tracking'}
              </span>
              <span className="flex items-center gap-1.5">
                <WifiOff size={14} className="text-amber-500" /> {(d as any).trust_offline ?? 'Offline recording, auto sync'}
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={14} className="text-slate-400" /> {(d as any).trust_no_card ?? 'No credit card required'}
              </span>
            </div>
          </motion.div>

          {/* RIGHT: benefits + FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-10"
          >
            {/* Benefits */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6">{d.benefits_title}</h2>
              <div className="space-y-5">
                {d.benefits.map((item: { title: string; desc: string }, i: number) => (
                  <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="mt-0.5 shrink-0">{BENEFIT_ICONS[i]}</div>
                    <div>
                      <div className="font-bold text-slate-900 mb-1">{item.title}</div>
                      <div className="text-sm text-slate-500 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-5">FAQ</h2>
              <div className="space-y-3">
                {d.faq.map((item: { q: string; a: string }, i: number) => (
                  <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                      onClick={() => { setOpenFaq(openFaq === i ? null : i); trackEvent('trial_faq_click', { question: item.q.slice(0, 50), index: i.toString() }); }}
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        size={16}
                        className={`shrink-0 text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reviews sotto il form su TUTTI i device.
            Pre-26/05/2026 erano sopra su desktop, ma l'analisi funnel GA4 ha
            mostrato che 4 trial_page_view su 5 NON iniziano il form: il
            blocco recensioni spingeva la CTA fuori dal fold sul desktop.
            Form-first ovunque + social proof come supporto dopo. */}
        <div className="mt-12">
          <Reviews locale={locale || 'it'} />
        </div>
      </div>
    </div>
  );
}
