'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const TT_SLIDES = [
  { src: '/screenshots/timetracker-dashboard.webp', alt: 'Dashboard iniziale GeoTapp TimeTracker' },
  { src: '/screenshots/timetracker-richieste.webp', alt: 'GeoTapp TimeTracker — Richieste ferie e cambio turno' },
  { src: '/TT2.webp', alt: 'GeoTapp TimeTracker — Menu navigazione' },
];

export default function TTCarousel() {
  const [i, setI] = useState(0);
  const next = useCallback(() => setI((c) => (c + 1) % TT_SLIDES.length), []);
  useEffect(() => { const t = setInterval(next, 4000); return () => clearInterval(t); }, [next]);
  const s = TT_SLIDES[i];
  return (
    <div className="relative flex justify-center">
      <div className="absolute inset-0 bg-app/20 rounded-[3rem] blur-3xl scale-110 -z-10 pointer-events-none"></div>
      <div className="mx-auto w-[280px] bg-slate-900 rounded-[3rem] p-[3px] shadow-2xl shadow-app/30 relative border-[3px] border-slate-800">
        <div className="w-full bg-white rounded-[2.8rem] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
              <Image src={s.src} alt={s.alt} width={720} height={1504} className="w-full h-auto" loading="lazy" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {TT_SLIDES.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${idx === i ? 'bg-app w-6' : 'bg-slate-300 w-2.5 hover:bg-slate-400'}`}
            aria-label={`Slide ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
}
