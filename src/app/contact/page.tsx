'use client';

import { Mail, MessageSquare, MapPin, Send, ArrowRight, Clock, ShieldCheck, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import itDict from '@/dictionaries/it.json';
import enDict from '@/dictionaries/en.json';

export default function ContactPage() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en');
  const dict = isEn ? enDict.contact : itDict.contact;
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
          >
          </motion.h1>
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

          {/* NARRATIVE LEFT COLUMN */}
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* The Promise */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="text-primary" /> {dict.guarantee_title}
              </h3>
              <p className="text-slate-600 mb-6">
                {dict.guarantee_text}
              </p>
              <div className="flex items-center gap-4 text-sm font-bold text-slate-500">
                <span className="flex items-center gap-1"><Clock size={16} /> Lun-Ven 9:00 - 18:00</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>Brescia, IT</span>
              </div>
            </div>

            {/* Direct Channels */}
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Canali Diretti</h3>
              <div className="space-y-8">
                <div className="group flex items-start gap-6">
                  <div className="mt-1 p-3 rounded-xl bg-slate-100 text-slate-900 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-slate-900 mb-1">Email Generale</div>
                    <a href="mailto:info@geotapp.com" className="text-slate-500 hover:text-primary transition-colors text-lg">info@geotapp.com</a>
                    <div className="text-sm text-slate-400 mt-1">Per informazioni, preventivi e supporto.</div>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="mt-1 p-3 rounded-xl bg-slate-100 text-slate-900 group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg text-slate-900 mb-1">Headquarters</div>
                    <div className="text-slate-500 text-lg">Brescia, Italia</div>
                    <div className="text-sm text-slate-400 mt-1">Riceviamo su appuntamento.</div>
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
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{dict.form.name}</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Mario Rossi" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{dict.form.company}</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Nome Azienda Srl" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{dict.form.email}</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="mario@azienda.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{dict.form.reason}</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none">
                  <option>Voglio una Demo di GeoTapp</option>
                  <option>Richiesta Informazioni Generali</option>
                  <option>Partnership</option>
                  <option>Altro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">{dict.form.message}</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="..." />
              </div>

              <button type="button" className="w-full py-4 bg-slate-900 text-white font-bold text-lg rounded-xl hover:bg-primary hover:text-slate-900 transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 transform hover:-translate-y-1">
                <Send size={20} /> {dict.form.send}
              </button>

              <p className="text-center text-xs text-slate-400 mt-4">
                Inviando questo modulo accetti la nostra Privacy Policy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
