'use client';

import { FormEvent, useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
} from '@/lib/i18n/locale-routing';
import { submitContact } from '@/lib/api';
import LocationMap from '@/components/LocationMap';

export default function ContactPage() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const dict = getDictionary(currentLocale).contact;
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    reason: dict.form.reason_options[0],
    message: '',
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    setLoading(true);
    try {
      await submitContact(formData);
      setStatus({ type: 'success', text: dict.success });
      setFormData({
        name: '',
        company: '',
        email: '',
        reason: dict.form.reason_options[0],
        message: '',
      });
    } catch {
      setStatus({ type: 'error', text: dict.error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-white text-slate-900">
      <div className="container mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-6"
            dangerouslySetInnerHTML={{ __html: dict.title }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-xl font-light leading-relaxed"
          >
            {dict.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT COLUMN */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Guarantee */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="text-primary" /> {dict.guarantee_title}
              </h3>
              <p className="text-slate-600 mb-6">{dict.guarantee_text}</p>
              <div className="flex items-center gap-4 text-sm font-bold text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock size={16} /> {dict.hours}
                </span>
                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                <span>{dict.location_city}</span>
              </div>
            </div>

            {/* Direct Channels */}
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
                {dict.channels_title}
              </h3>
              <div className="space-y-8">
                <div className="group flex items-start gap-6">
                  <div className="mt-1 p-3 rounded-xl bg-slate-100 text-slate-900 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-slate-900 mb-1">
                      {dict.email_label}
                    </div>
                    <a
                      href="mailto:info@geotapp.com"
                      className="text-slate-500 hover:text-primary transition-colors text-lg"
                    >
                      info@geotapp.com
                    </a>
                    <div className="text-sm text-slate-400 mt-1">
                      {dict.email_desc}
                    </div>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="mt-1 p-3 rounded-xl bg-slate-100 text-slate-900 group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-slate-900 mb-1">
                      {dict.hq_label}
                    </div>
                    <div className="text-slate-500 text-lg">{dict.hq_city}</div>
                    <div className="text-sm text-slate-400 mt-1">{dict.hq_note}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORM RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-3xl border border-border shadow-2xl shadow-slate-200/50"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    {dict.form.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Mario Rossi"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    {dict.form.company}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Nome Azienda Srl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {dict.form.email}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="mario@azienda.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {dict.form.reason}
                </label>
                <select
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
                >
                  {dict.form.reason_options.map((opt: string) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {dict.form.message}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
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
                >
                  {status.text}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-slate-900 text-white font-bold text-lg rounded-xl hover:bg-primary hover:text-slate-900 transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Send size={20} /> {loading ? dict.sending : dict.form.send}
              </button>

              <p className="text-center text-xs text-slate-400 mt-4">
                {dict.privacy_note}
              </p>
            </form>
          </motion.div>
        </div>

        {/* MAPPA */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <MapPin className="text-primary" size={22} />
            <h2 className="text-xl font-bold text-slate-900">{dict.map_title}</h2>
          </div>
          <LocationMap apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''} />
        </motion.div>
      </div>
    </div>
  );
}
