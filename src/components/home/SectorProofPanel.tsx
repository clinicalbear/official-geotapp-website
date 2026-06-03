'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Camera, BadgeCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// "Report verificato live": scegli il settore a sinistra, a destra si ricompone
// il report sigillato di quel settore (GPS, orario, foto, timbro VERIFICATO).
// Mostra il prodotto vero, non un'icona da template.

export type ProofSector = { key: string; name: string; desc: string; cta: string; href: string };

const CHROME: Record<string, { report: string; verified: string; show: string; gps: string; time: string; photo: string; ref: string; sample: string }> = {
  it: { report: 'Report intervento', verified: 'Verificato', show: 'Mostralo al cliente in caso di contestazione', gps: 'Posizione GPS', time: 'Orario', photo: 'Foto geolocalizzata', ref: 'Rif.', sample: 'esempio' },
  en: { report: 'Job report', verified: 'Verified', show: 'Show it to the client if they dispute it', gps: 'GPS location', time: 'Time', photo: 'Geotagged photo', ref: 'Ref.', sample: 'sample' },
  de: { report: 'Einsatzbericht', verified: 'Verifiziert', show: 'Zeigen Sie es dem Kunden bei Beanstandung', gps: 'GPS-Standort', time: 'Zeit', photo: 'Geogetaggtes Foto', ref: 'Ref.', sample: 'Beispiel' },
  fr: { report: "Rapport d'intervention", verified: 'Vérifié', show: 'Montrez-le au client en cas de litige', gps: 'Position GPS', time: 'Horaire', photo: 'Photo géolocalisée', ref: 'Réf.', sample: 'exemple' },
  es: { report: 'Informe de intervención', verified: 'Verificado', show: 'Muéstralo al cliente en caso de disputa', gps: 'Ubicación GPS', time: 'Horario', photo: 'Foto geolocalizada', ref: 'Ref.', sample: 'ejemplo' },
  pt: { report: 'Relatório de intervenção', verified: 'Verificado', show: 'Mostre ao cliente em caso de contestação', gps: 'Localização GPS', time: 'Horário', photo: 'Foto georreferenciada', ref: 'Ref.', sample: 'exemplo' },
  nl: { report: 'Werkrapport', verified: 'Geverifieerd', show: 'Laat het de klant zien bij betwisting', gps: 'GPS-locatie', time: 'Tijd', photo: 'Geotagde foto', ref: 'Ref.', sample: 'voorbeeld' },
  ru: { report: 'Отчёт о выезде', verified: 'Проверено', show: 'Покажите клиенту при споре', gps: 'GPS-координаты', time: 'Время', photo: 'Геофото', ref: '№', sample: 'пример' },
  da: { report: 'Opgaverapport', verified: 'Verificeret', show: 'Vis det til kunden ved tvist', gps: 'GPS-position', time: 'Tid', photo: 'Geotagget foto', ref: 'Ref.', sample: 'eksempel' },
  sv: { report: 'Jobbrapport', verified: 'Verifierad', show: 'Visa det för kunden vid tvist', gps: 'GPS-position', time: 'Tid', photo: 'Geotaggat foto', ref: 'Ref.', sample: 'exempel' },
  nb: { report: 'Oppdragsrapport', verified: 'Verifisert', show: 'Vis det til kunden ved tvist', gps: 'GPS-posisjon', time: 'Tid', photo: 'Geotagget foto', ref: 'Ref.', sample: 'eksempel' },
};

const ACCENTS: Record<string, { btn: string; activeChip: string; dot: string; ring: string }> = {
  installatori: { btn: 'bg-amber-500 hover:bg-amber-600', activeChip: 'bg-amber-50 text-amber-800 border-amber-200', dot: 'bg-amber-500', ring: 'ring-amber-200' },
  sicurezza: { btn: 'bg-indigo-500 hover:bg-indigo-600', activeChip: 'bg-indigo-50 text-indigo-800 border-indigo-200', dot: 'bg-indigo-500', ring: 'ring-indigo-200' },
  pulizie: { btn: 'bg-cyan-500 hover:bg-cyan-600', activeChip: 'bg-cyan-50 text-cyan-800 border-cyan-200', dot: 'bg-cyan-500', ring: 'ring-cyan-200' },
  default: { btn: 'bg-primary hover:bg-primary/90', activeChip: 'bg-primary/10 text-primary border-primary/20', dot: 'bg-primary', ring: 'ring-primary/20' },
};

const SAMPLE: Record<string, { gps: string; time: string; ref: string }> = {
  installatori: { gps: '45.4773, 10.0041', time: '08:12 → 11:40', ref: '#4827' },
  sicurezza: { gps: '45.4641, 9.1919', time: '22:00 → 06:00', ref: '#5193' },
  pulizie: { gps: '45.0703, 7.6869', time: '06:30 → 09:15', ref: '#3641' },
  default: { gps: '45.47, 10.00', time: '08:00 → 12:00', ref: '#0001' },
};

const GRID_BG = 'repeating-linear-gradient(0deg,rgba(100,116,139,0.10) 0 1px,transparent 1px 22px),repeating-linear-gradient(90deg,rgba(100,116,139,0.10) 0 1px,transparent 1px 22px)';

export default function SectorProofPanel({
  locale, sectors, title, subtitle, seeAll, seeAllHref,
}: {
  locale: string;
  sectors: ProofSector[];
  title: string;
  subtitle: string;
  seeAll: string;
  seeAllHref: string;
}) {
  const [sel, setSel] = useState(0);
  const c = CHROME[locale] ?? CHROME.en;
  const s = sectors[sel] ?? sectors[0];
  const acc = ACCENTS[s.key] ?? ACCENTS.default;
  const sample = SAMPLE[s.key] ?? SAMPLE.default;

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{title}</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-6 items-stretch">
          {/* Selettore settore */}
          <div className="flex flex-col gap-2">
            {sectors.map((sec, i) => (
              <button
                key={sec.key}
                type="button"
                onClick={() => setSel(i)}
                aria-pressed={i === sel}
                className={`flex items-center gap-3 text-left rounded-xl border px-4 py-3.5 font-semibold transition-all ${
                  i === sel
                    ? `${(ACCENTS[sec.key] ?? ACCENTS.default).activeChip} ring-2 ${(ACCENTS[sec.key] ?? ACCENTS.default).ring}`
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${i === sel ? (ACCENTS[sec.key] ?? ACCENTS.default).dot : 'bg-slate-300'}`} />
                {sec.name}
              </button>
            ))}
            <Link
              href={seeAllHref}
              className="mt-1 inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              {seeAll} <ArrowRight size={15} />
            </Link>
          </div>

          {/* Report sigillato */}
          <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8 overflow-hidden">
            <div aria-hidden="true" className="absolute inset-0 opacity-60" style={{ backgroundImage: GRID_BG }} />
            <AnimatePresence mode="wait">
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="relative"
              >
                {/* Intestazione + sigillo */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-slate-500">{c.report}</p>
                    <p className="text-xl font-bold text-slate-900 mt-0.5">{s.name}</p>
                    <p className="font-mono text-xs text-slate-400 mt-1">{c.ref} {sample.ref} · {c.sample}</p>
                  </div>
                  <div className="shrink-0 rotate-6 flex items-center gap-1.5 border-2 border-emerald-500 text-emerald-600 rounded-lg px-3 py-1.5 text-xs font-black uppercase tracking-wide">
                    <BadgeCheck size={16} /> {c.verified}
                  </div>
                </div>

                {/* Campi prova */}
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 bg-white rounded-xl border border-slate-200 px-4 py-3">
                    <MapPin size={18} className="text-slate-400 shrink-0" />
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-400">{c.gps}</div>
                      <div className="font-mono text-sm text-slate-800">{sample.gps}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white rounded-xl border border-slate-200 px-4 py-3">
                    <Clock size={18} className="text-slate-400 shrink-0" />
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-slate-400">{c.time}</div>
                      <div className="font-mono text-sm text-slate-800">{sample.time}</div>
                    </div>
                  </div>
                </div>

                {/* Foto geolocalizzata (stilizzata) */}
                <div className="mt-3 h-24 rounded-xl border border-slate-200 bg-white flex items-center justify-center gap-2 text-slate-400">
                  <Camera size={18} />
                  <span className="text-sm">{c.photo}</span>
                </div>

                {/* Riga di valore del settore */}
                <p className="mt-5 text-slate-700 leading-relaxed">{s.desc}</p>

                {/* CTA */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href={s.href}
                    className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white font-bold text-sm transition-colors ${acc.btn}`}
                  >
                    {s.cta} <ArrowRight size={16} />
                  </Link>
                  <span className="text-xs text-slate-400 max-w-[60%]">{c.show}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
