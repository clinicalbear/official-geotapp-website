'use client';

import { FormEvent, useState } from 'react';
import {
  CheckCircle2,
  Send,
  Calendar,
  Clock,
  Users,
  ShieldCheck,
  MapPin,
  WifiOff,
  ChevronDown,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitContact } from '@/lib/api';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocaleFromPathname } from '@/lib/i18n/locale-routing';

const COSA_VEDRAI_ICONS = [
  <MapPin size={20} className="text-blue-500" />,
  <CheckCircle2 size={20} className="text-emerald-500" />,
  <Users size={20} className="text-primary" />,
];

export default function DemoPage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const d = getDictionary(locale).demo;

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
        reason: `Demo request — ${formData.settore}`,
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
    <div className="pt-32 pb-24 px-6 min-h-screen bg-white text-slate-900">
      <div className="container mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide mb-6"
          >
            {d.badge ?? 'Demo GeoTapp — 30 Minutes'}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight"
          >
            {d.page_title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 font-light leading-relaxed"
          >
            {d.page_subtitle ?? 'We show you how GeoTapp eliminates hour disputes and makes every job documented and verifiable.'}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT: form + trust */}
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
                  className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-100/60 space-y-5"
                  onSubmit={handleSubmit}
                >
                  <h2 className="text-lg font-bold text-slate-900 mb-2">{d.form_title ?? 'Your details'}</h2>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">
                        {d.form_name} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={d.form_name_placeholder}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">
                        {d.form_company} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={d.form_company_placeholder}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      {d.form_sector} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.settore}
                        onChange={(e) => setFormData({ ...formData, settore: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none pr-10"
                      >
                        {d.settori.map((s: string) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      {d.form_email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={d.form_email_placeholder}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">
                      {d.form_phone}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={d.form_phone_placeholder}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
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
                    {loading ? d.form_submitting : d.form_submit}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    {d.no_spam ?? 'No spam. Your data is handled according to our'}{' '}
                    <a href={`/${locale ?? 'en'}/privacy/`} className="underline hover:text-slate-600">Privacy Policy</a>.
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
                <MapPin size={14} className="text-blue-500" /> {d.trust_gps ?? 'GPS-verified clock-in'}
              </span>
              <span className="flex items-center gap-1.5">
                <WifiOff size={14} className="text-amber-500" /> {d.trust_offline ?? 'Works offline'}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-slate-400" /> {d.trust_response ?? 'Response within 1 day'}
              </span>
            </div>
          </motion.div>

          {/* RIGHT: cosa vedrai + FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-10"
          >
            {/* Cosa vedrai */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Calendar size={20} className="text-primary" />
                {d.what_youll_see ?? 'What you\'ll see in the demo'}
              </h2>
              <div className="space-y-5">
                {d.cosa_vedrai.map((item: { title: string; desc: string }, i: number) => (
                  <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="mt-0.5 shrink-0">{COSA_VEDRAI_ICONS[i]}</div>
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
              <h2 className="text-xl font-bold text-slate-900 mb-5">{d.faq_title ?? 'Frequently asked questions'}</h2>
              <div className="space-y-3">
                {d.faq.map((item: { q: string; a: string }, i: number) => (
                  <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
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
                          <p className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
