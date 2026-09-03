'use client';

import { FormEvent, useState } from 'react';
import {
  CheckCircle2,
  Send,
  Clock,
  ShieldCheck,
  MapPin,
  WifiOff,
  ChevronDown,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitContact } from '@/lib/api';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocaleFromPathname, localizePath } from '@/lib/i18n/locale-routing';
import LNastro from '@/components/LNastro';
import FeaturedIn, { FEATURED_LABEL } from '@/components/FeaturedIn';

export default function DemoPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dict = getDictionary(locale);
  const d = dict.demo;
  const nav = dict.navbar;
  const l = locale || 'it';

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    settore: d.settori[0],
    email: '',
    phone: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await submitContact({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        reason: `Demo request, ${formData.settore}`,
        message: `Telefono: ${formData.phone || 'non fornito'}\nSettore: ${formData.settore}`,
      });
      setSubmitted(true);
    } catch {
      setError(d.error_message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lp-l lp-demo">
      {/* ── testata, sul nero ── */}
      <section className="ph">
        <div className="w">
          <p className="kk k r"><s></s>{d.badge ?? 'Demo GeoTapp, 30 Minutes'}</p>
          <h1 className="r d1">{d.page_title}</h1>
          <p className="lede r d2">{d.page_subtitle ?? "We show you how GeoTapp eliminates hour disputes and makes every job documented and verifiable."}</p>
          <div className="acts r d3">
            <a className="b1" href="#demo-form">{d.form_submit}</a>
            <a className="b2" href={localizePath('/trial/', l)}>{nav.cta_trial}</a>
          </div>
        </div>
      </section>

      {/* ── il form vero, vestito su nero, con a fianco cosa vedrai ── */}
      <section className="sec" id="demo-form">
        <div className="w">
          <div className="dcnt">
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
                    <p className="text-slate-600 mb-2">
                      {d.success_desc}
                    </p>
                    <p className="text-slate-500 text-sm">
                      {d.urgent_contact ?? 'Urgent questions? Write to'} <a href="mailto:info@geotapp.com" className="text-primary underline">info@geotapp.com</a>
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                  >
                    <h2>{d.form_title ?? 'Your details'}</h2>

                    <div className="fld">
                      <label htmlFor="demo-name">{d.form_name} *</label>
                      <input
                        id="demo-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={d.form_name_placeholder}
                        className="in"
                      />
                    </div>

                    <div className="fld">
                      <label htmlFor="demo-company">{d.form_company} *</label>
                      <input
                        id="demo-company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={d.form_company_placeholder}
                        className="in"
                      />
                    </div>

                    <div className="fld">
                      <label htmlFor="demo-settore">{d.form_sector} *</label>
                      <div style={{ position: 'relative' }}>
                        <select
                          id="demo-settore"
                          required
                          value={formData.settore}
                          onChange={(e) => setFormData({ ...formData, settore: e.target.value })}
                          className="in"
                          style={{ appearance: 'none', paddingRight: 40 }}
                        >
                          {d.settori.map((s: string) => (
                            <option key={s}>{s}</option>
                          ))}
                        </select>
                        <ChevronDown size={16} style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', color: 'rgba(242,240,233,.5)', pointerEvents: 'none' }} />
                      </div>
                    </div>

                    <div className="fld">
                      <label htmlFor="demo-email">{d.form_email} *</label>
                      <input
                        id="demo-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={d.form_email_placeholder}
                        className="in"
                      />
                    </div>

                    <div className="fld">
                      <label htmlFor="demo-phone">{d.form_phone}</label>
                      <input
                        id="demo-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={d.form_phone_placeholder}
                        className="in"
                      />
                    </div>

                    {error && (
                      <p className="rounded-lg border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-sm" style={{ marginBottom: 20 }}>
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="b1"
                      style={{
                        width: '100%', border: 0, font: 'inherit', fontWeight: 500,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                        cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1,
                      }}
                    >
                      <Send size={18} />
                      {loading ? d.form_submitting : d.form_submit}
                    </button>

                    <p style={{ marginTop: 20, fontSize: 13, color: 'rgba(242,240,233,.5)', textAlign: 'center' }}>
                      {d.no_spam ?? "No spam. Your data is handled according to our"}{' '}
                      <a href={localizePath('/privacy/', l)} style={{ color: 'var(--lime)', borderBottom: '1px solid rgba(182,232,106,.4)' }}>Privacy Policy</a>.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            <div className="r d1">
              <p className="kk k" style={{ color: 'var(--seal)', marginBottom: 26 }}><s style={{ display: 'block', width: 52, height: 1, background: 'var(--seal)', textDecoration: 'none' }} />{d.what_youll_see ?? "What you'll see in the demo"}</p>
              <ul className="see">
                {d.cosa_vedrai.map((item: { title: string; desc: string }, i: number) => (
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
              <MapPin size={14} className="text-blue-500" /> {d.trust_gps ?? 'GPS-verified clock-in'}
            </span>
            <span className="flex items-center gap-1.5">
              <WifiOff size={14} className="text-amber-500" /> {d.trust_offline ?? 'Works offline'}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-slate-400" /> {d.trust_response ?? 'Response within 1 day'}
            </span>
          </div>
        </div>
      </section>

      <LNastro />

      {/* ── citati su: solo stampa vera. "Presente su" (directory) resta nel footer, non si ripete qui ── */}
      <section className="dirs">
        <div className="w"><p className="kk k r dirs-kk">{FEATURED_LABEL[l] ?? FEATURED_LABEL.en}</p></div>
        <div className="host">
          <FeaturedIn locale={l} />
        </div>
      </section>

      {/* ── domande frequenti vere, che si aprono con calma ── */}
      <section className="fq">
        <div className="w"><div className="g">
          <h2 className="r">{d.faq_title ?? 'Frequently asked questions'}</h2>
          <div className="r d1">
            {d.faq.map((item: { q: string; a: string }, i: number) => (
              <details key={i} open={i === 0}>
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
