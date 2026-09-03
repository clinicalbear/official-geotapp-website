'use client';

import { FormEvent, useState, useEffect, useRef } from 'react';
import {
  CheckCircle2,
  Send,
  ShieldCheck,
  MapPin,
  WifiOff,
  Users,
  Mail,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocaleFromPathname, localizePath } from '@/lib/i18n/locale-routing';
import Link from 'next/link';

// Cloudflare Turnstile: captcha invisibile e gratuito. Se la sitekey non e' configurata
// il widget non viene reso e il server (senza secret) salta la verifica: rollout a stadi,
// nessuna rottura dei signup veri prima che le chiavi siano in env.
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';
import { trackEvent, consumeTrialSource } from '@/lib/analytics';
import { buildTrialPayload } from '@/lib/trial/payload';
import Reviews from '@/components/Reviews';
import LNastro from '@/components/LNastro';
import FeaturedIn from '@/components/FeaturedIn';
import { featuredLabel } from '@/lib/press/labels';

export default function TrialPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dict = getDictionary(locale);
  const d = dict.trial;
  const nav = dict.navbar;

  const [submitted, setSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [email, setEmail] = useState('');
  // Honeypot anti-bot: hidden from humans, only bots fill it (server drops the signup).
  const [hp, setHp] = useState('');

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
  // CTA d'origine: consumeTrialSource() svuota il sessionStorage alla prima
  // lettura (nel trial_page_view), quindi lo conserviamo qui per attribuire
  // anche gli stage successivi del funnel, fino a trial_form_success.
  const trialSource = useRef<string | null>(null);

  // Track page view with scroll depth + source attribution (CTA d'origine)
  useEffect(() => {
    const source = consumeTrialSource();
    trialSource.current = source;
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

  // --- Turnstile: il token e' MONOUSO e scade in 5 minuti ---
  //
  // Due difetti veri, misurati su `trial_signup_audit` il 03/09/2026 (25 tentativi in 90
  // giorni, 11 respinti dal captcha, tutti da persone reali):
  //
  //  1. `timeout-or-duplicate` — dopo un submit fallito il widget non veniva mai resettato,
  //     quindi ogni ritentativo rispediva lo stesso token gia' consumato e il server lo
  //     respingeva. Da quel momento la persona era chiusa fuori fino a un ricaricamento
  //     della pagina, che nessuno pensa di fare: il 25/08 un titolare ha riprovato otto
  //     volte in nove minuti, con due indirizzi diversi, senza mai riuscirci.
  //  2. `missing_token` — il submit leggeva l'input nascosto una volta sola. Se lo script
  //     di Cloudflare non aveva ancora finito (rete lenta, compilazione veloce, autofill)
  //     partiva con token vuoto e il server rispondeva `missing_token`. Tre iscrizioni
  //     perse cosi', da tre paesi diversi.
  //
  // Rigenerare il token dopo ogni fallimento. Fallisce in silenzio se il widget non e'
  // ancora montato: non c'e' niente da resettare ed e' lo stato giusto.
  const resetTurnstile = () => {
    try {
      (window as unknown as { turnstile?: { reset: () => void } }).turnstile?.reset();
    } catch {
      /* widget non montato: nessun token da rigenerare */
    }
  };

  // Aspetta che Turnstile abbia iniettato il suo input nascosto nel form invece di
  // mandare un token vuoto. Il bottone e' gia' in stato `loading` mentre si aspetta.
  const readTurnstileToken = async (formEl: HTMLFormElement): Promise<string> => {
    for (let attempt = 0; attempt < 20; attempt++) {
      const token =
        (formEl.elements.namedItem('cf-turnstile-response') as HTMLInputElement | null)?.value || '';
      if (token) return token;
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
    return '';
  };

  const trackFieldFocus = (fieldName: string) => {
    if (!formStarted.current) {
      formStarted.current = true;
      trackEvent('trial_form_start', { first_field: fieldName, cta_locale: locale || 'it', ...(trialSource.current ? { cta_source: trialSource.current } : {}) });
    }
    touchedFields.current.add(fieldName);
    trackEvent('trial_field_focus', { field: fieldName });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Il form va preso PRIMA di qualunque await: dopo, e.currentTarget e' gia' null.
    // Turnstile (rendering implicito) inietta da se' un input nascosto
    // `cf-turnstile-response` dentro il form: e' li' che vive il token.
    const formEl = e.currentTarget;
    setError(null);
    setLoading(true);
    const elapsedMs = Date.now() - pageLoadTime.current;
    const timeOnPage = Math.round(elapsedMs / 1000);
    // `trial_form_start` nasceva solo dal focus su un campo, ma chi compila con
    // l'autocompletamento del browser o un gestore di password non fa mai focus:
    // arrivava al submit senza aver mai "iniziato". Da qui i 7 submit contro 6
    // start visti dal 30/07, che per costruzione non possono esistere e
    // rendevano inutilizzabile il worst_step del funnel. Se non e' partito, lo
    // si emette adesso, cosi' start <= submit e' sempre vero.
    if (!formStarted.current) {
      formStarted.current = true;
      trackEvent('trial_form_start', {
        first_field: 'autofill',
        cta_locale: locale || 'it',
        ...(trialSource.current ? { cta_source: trialSource.current } : {}),
      });
    }
    trackEvent('trial_form_submit', {
      fields_touched: touchedFields.current.size.toString(),
      time_to_submit: timeOnPage.toString(),
      locale: locale || 'it',
      ...(trialSource.current ? { cta_source: trialSource.current } : {}),
    });
    // Il token si legge DOPO aver emesso il submit (cosi' l'evento resta fedele a cosa ha
    // fatto la persona) ma PRIMA della chiamata, aspettando che Turnstile sia pronto.
    const turnstileToken = TURNSTILE_SITE_KEY ? await readTurnstileToken(formEl) : '';
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      // Niente token e nessun reset: la sitekey e' in modalita' gestita, quindi a
      // volte Cloudflare mostra la casella "non sono un robot" e aspetta un clic.
      // Chi arriva qui, nove volte su dieci, ha premuto "Inizia" prima di averla
      // spuntata: azzerare il widget gli butterebbe via la verifica in corso e lo
      // rimanderebbe da capo. Gli si dice cosa manca e si lascia il widget dov'e'.
      setError(d.error_captcha_pending);
      setLoading(false);
      trackEvent('trial_form_error', { error: 'turnstile_no_token', cta_locale: locale || 'it' });
      return;
    }

    try {
      const saasUrl = process.env.NEXT_PUBLIC_SAAS_URL || 'https://crm.geotapp.com';
      const res = await fetch(`${saasUrl}/api/trial/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          buildTrialPayload(email, detectLanguage(), { hp, elapsedMs, turnstileToken }),
        ),
      });
      const data = await res.json();
      if (!res.ok) {
        // 403 su questa rotta = solo Turnstile. Il server risponde con una frase fissa in
        // italiano, che a un estone o a un portoghese non dice niente: qui si mostra il
        // messaggio nella lingua della pagina.
        throw new Error(res.status === 403 ? d.error_captcha : data.error || d.error_message);
      }
      setSubmittedEmail(email);
      setSubmitted(true);
      trackEvent('trial_form_success', { cta_locale: locale || 'it', ...(trialSource.current ? { cta_source: trialSource.current } : {}) });
    } catch (err: any) {
      // Qualunque sia il motivo del fallimento il token e' bruciato: senza questo reset il
      // prossimo tentativo torna indietro come `timeout-or-duplicate` e la persona resta
      // chiusa fuori.
      resetTurnstile();
      setError(err.message);
      trackEvent('trial_form_error', { error: err.message, cta_locale: locale || 'it' });
    } finally {
      setLoading(false);
    }
  };

  const localePrefix = locale !== 'it' ? `/${locale}` : '/it';
  const l = locale || 'it';

  return (
    <div className="lp-l lp-trial">
      {/* ── testata, sul nero ── */}
      <section className="ph">
        <div className="w">
          <p className="kk k r"><s></s>{d.badge}</p>
          <h1 className="r d1">{d.page_title}</h1>
          <p className="lede r d2">{d.page_subtitle}</p>
          <div className="acts r d3">
            <a className="b1" href="#trial-form">{d.form_submit_simple}</a>
            <a className="b2" href={localizePath('/pricing/', l)}>{nav.pricing}</a>
          </div>
        </div>
      </section>

      {/* ── il form vero, vestito su nero, con a fianco cosa include ── */}
      <section className="sec" id="trial-form">
        <div className="w">
          <div className="tr">
            <div className="form r">
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
                    onSubmit={handleSubmit}
                  >
                    <h2>{d.form_title}</h2>

                    <div className="fld">
                      <label htmlFor="trial-email">
                        {d.form_email} *
                      </label>
                      <input
                        id="trial-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => trackFieldFocus('email')}
                        placeholder={d.form_email_placeholder}
                        className="in"
                      />
                      <p className="hint">{d.form_email_hint}</p>
                    </div>

                    {/* Honeypot: invisibile e fuori dal tab order per gli umani; i bot che
                        auto-riempiono i campi lo compilano e il server scarta il signup. */}
                    <input
                      type="text"
                      name="company_website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      value={hp}
                      onChange={(e) => setHp(e.target.value)}
                      style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
                    />

                    {/* Cloudflare Turnstile: captcha invisibile. Con rendering implicito
                        inietta da se' l'input nascosto `cf-turnstile-response` dentro il
                        form, che leggiamo al submit. Reso solo se la sitekey e' configurata. */}
                    {TURNSTILE_SITE_KEY && (
                      <>
                        <Script
                          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                          strategy="afterInteractive"
                          async
                          defer
                        />
                        <div
                          className="cf-turnstile"
                          data-sitekey={TURNSTILE_SITE_KEY}
                          data-theme="light"
                          data-size="flexible"
                          data-refresh-expired="auto"
                          data-retry="auto"
                          data-retry-interval={2000}
                          style={{ marginTop: 18 }}
                        />
                      </>
                    )}

                    {error && (
                      <p className="rounded-lg border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-sm" style={{ marginTop: 18 }}>
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-ring w-full disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <Send size={20} />
                      {loading ? d.form_submitting : d.form_submit_simple}
                    </button>

                    <p className="after">
                      {d.form_response_time}
                    </p>

                    <p className="legal">
                      {d.form_privacy}{' '}
                      <Link href={`${localePrefix}/privacy/`}>
                        {d.form_privacy_link}
                      </Link>
                      .
                    </p>

                    {d.form_usage_note && (
                      <p className="legal" style={{ borderTop: 0, paddingTop: 0, marginTop: 14 }}>
                        {d.form_usage_note}
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            <div className="what r d1">
              <p className="only k"><s></s>{d.benefits_title}</p>
              <ul className="see">
                {d.benefits.map((item: { title: string; desc: string }, i: number) => (
                  <li key={i}>
                    <b>{item.title}</b>
                    <p>{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Trust strip */}
          <div className="mt-14 flex flex-wrap gap-4 justify-center text-xs text-slate-500">
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
        </div>
      </section>

      <LNastro />

      {/* ── citati su: solo stampa vera. "Presente su" (directory) resta nel footer, non si ripete qui ── */}
      <section className="dirs">
        <div className="w"><p className="kk k r dirs-kk">{featuredLabel(l)}</p></div>
        <div className="host">
          <FeaturedIn locale={l} />
        </div>
      </section>

      {/* ── recensioni vere, sotto il form ── */}
      <section className="sec">
        <div className="w">
          <Reviews locale={l} />
        </div>
      </section>

      {/* ── domande frequenti vere, che si aprono con calma ── */}
      <section className="fq">
        <div className="w"><div className="g">
          <h2 className="r">FAQ</h2>
          <div className="r d1">
            {d.faq.map((item: { q: string; a: string }, i: number) => (
              <details
                key={i}
                open={i === 0}
                onToggle={() => trackEvent('trial_faq_click', { question: item.q.slice(0, 50), index: i.toString() })}
              >
                <summary><h3>{item.q}</h3></summary>
                <div className="ct"><p>{item.a}</p></div>
              </details>
            ))}
          </div>
        </div></div>
      </section>
    </div>
  );
}
