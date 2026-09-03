'use client';

import { FormEvent, useState } from 'react';
import { Mail, MapPin, Send, Clock, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  localizePath,
} from '@/lib/i18n/locale-routing';
import { submitContact } from '@/lib/api';
import LNastro from '@/components/LNastro';
import FeaturedIn from '@/components/FeaturedIn';
import { featuredLabel } from '@/lib/press/labels';

export default function ContactPage() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const dict = getDictionary(currentLocale).contact;
  const press = getDictionary(currentLocale).stampa;
  const nav = getDictionary(currentLocale).navbar;
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    sector: '',
    company: '',
    email: '',
    reason: '',
    message: '',
  });

  const isValid = (v: string) => v.trim().length > 0;

  // Bordo del campo sul form scuro: neutro finche' non si tenta l'invio,
  // poi verde/rosso in base alla validita'. Stessa logica di prima, solo
  // espressa come stile inline sopra la classe .in (che fissa il resto).
  const fieldBorder = (value: string) => {
    if (!submitted) return 'rgba(242,240,233,.24)';
    return isValid(value) ? 'var(--seal)' : '#f36a6a';
  };

  const allFieldsValid = () =>
    Object.values(formData).every((v) => isValid(v));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    if (!allFieldsValid()) return;
    setStatus(null);
    setLoading(true);
    try {
      await submitContact({ ...formData, language: currentLocale });
      setStatus({ type: 'success', text: dict.success });
      setFormData({
        firstName: '',
        lastName: '',
        sector: '',
        company: '',
        email: '',
        reason: '',
        message: '',
      });
      setSubmitted(false);
    } catch {
      setStatus({ type: 'error', text: dict.error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lp-l lp-contatti">
      {/* ── testata, sul nero ── */}
      <section className="ph">
        <div className="w">
          <p className="kk k r"><s></s>{nav.contact}</p>
          <h1
            className="r d1"
            dangerouslySetInnerHTML={{ __html: dict.title }}
          />
          <p className="lede r d2">{dict.subtitle}</p>
          <div className="acts r d3">
            <a className="b1" href={localizePath('/trial/', currentLocale)}>{nav.cta}</a>
            <a className="b2" href={localizePath('/pricing/', currentLocale)}>{nav.pricing}</a>
          </div>
        </div>
      </section>

      {/* ── il form vero, vestito su nero, con a fianco i canali diretti ── */}
      <section className="sec">
        <div className="w">
          <div className="cnt">
            <motion.div
              className="form r"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <form onSubmit={handleSubmit}>
                <p className="k" style={{ color: 'rgba(242,240,233,.5)', marginBottom: 26 }}>{dict.form.all_required}</p>

                <div className="two">
                  <div className="fld">
                    <label htmlFor="ct-first">{dict.form.first_name}</label>
                    <input
                      id="ct-first"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="in"
                      style={{ borderColor: fieldBorder(formData.firstName) }}
                      placeholder={dict.form.first_name_placeholder}
                    />
                  </div>
                  <div className="fld">
                    <label htmlFor="ct-last">{dict.form.last_name}</label>
                    <input
                      id="ct-last"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="in"
                      style={{ borderColor: fieldBorder(formData.lastName) }}
                      placeholder={dict.form.last_name_placeholder}
                    />
                  </div>
                </div>

                <div className="fld">
                  <label htmlFor="ct-sector">{dict.form.sector}</label>
                  <select
                    id="ct-sector"
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="in"
                    style={{ borderColor: fieldBorder(formData.sector), appearance: 'none' }}
                  >
                    <option value="" disabled>{dict.form.sector_placeholder}</option>
                    {(dict.form.sector_options as { value: string; label: string }[]).map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="fld">
                  <label htmlFor="ct-company">{dict.form.company}</label>
                  <input
                    id="ct-company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="in"
                    style={{ borderColor: fieldBorder(formData.company) }}
                    placeholder="Nome Azienda Srl"
                  />
                </div>

                <div className="fld">
                  <label htmlFor="ct-email">{dict.form.email}</label>
                  <input
                    id="ct-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="in"
                    style={{ borderColor: fieldBorder(formData.email) }}
                    placeholder="mario@azienda.com"
                  />
                </div>

                <div className="fld">
                  <label htmlFor="ct-reason">{dict.form.reason}</label>
                  <select
                    id="ct-reason"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="in"
                    style={{ borderColor: fieldBorder(formData.reason), appearance: 'none' }}
                  >
                    <option value="" disabled>{dict.form.reason_placeholder}</option>
                    {dict.form.reason_options.map((opt: string) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="fld">
                  <label htmlFor="ct-message">{dict.form.message}</label>
                  <textarea
                    id="ct-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="in ta"
                    style={{ borderColor: fieldBorder(formData.message) }}
                    placeholder="..."
                  />
                </div>

                {status && (
                  <p
                    className={`rounded-lg border px-4 py-3 text-sm ${
                      status.type === 'success'
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                        : 'border-red-200 bg-red-50 text-red-700'
                    }`}
                    style={{ marginBottom: 20 }}
                  >
                    {status.text}
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
                  <Send size={18} /> {loading ? dict.sending : dict.form.send}
                </button>

                <p style={{ marginTop: 20, fontSize: 13, color: 'rgba(242,240,233,.5)' }}>
                  {dict.privacy_note}
                </p>
              </form>
            </motion.div>

            <div className="r d1">
              <p className="kk k" style={{ color: 'var(--seal)' }}>{dict.channels_title}</p>
              <ul className="ch">
                <li className="it">
                  <p className="lb k">{dict.email_label}</p>
                  <b><a href="mailto:info@geotapp.com">info@geotapp.com</a></b>
                  <p>{dict.email_desc}</p>
                </li>
                <li className="it">
                  <b>{dict.hours}</b>
                  <p>{dict.location_city}</p>
                </li>
                <li className="it">
                  <p className="lb k">{dict.hq_label}</p>
                  <b>{dict.hq_city}</b>
                  <p>{dict.hq_note}</p>
                </li>
                <li className="it">
                  <p className="lb k">
                    <Newspaper size={13} style={{ display: 'inline', marginRight: 6, verticalAlign: -2 }} />
                    {press.hero_title}
                  </p>
                  <b><a href={localizePath('/stampa/', currentLocale)}>{press.contact_email}</a></b>
                </li>
              </ul>
              <div className="gar">
                <b>{dict.guarantee_title}</b>
                <p>{dict.guarantee_text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LNastro />

      {/* ── presenti su: directory e stampa vere del sito ── */}
      {/* ── citati su: solo stampa vera. "Presente su" (directory) resta nel footer, non si ripete qui ── */}
      <section className="dirs">
        <div className="w"><p className="kk k r dirs-kk">{featuredLabel(currentLocale)}</p></div>
        <div className="host">
          <FeaturedIn locale={currentLocale} />
        </div>
      </section>
    </div>
  );
}
