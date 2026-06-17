'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const FLOW_SLIDES = [
  { src: '/screen_dashboard.webp', alt: 'GeoTapp Flow - Dashboard KPI e moduli operativi' },
  { src: '/screen_live_map.webp', alt: 'GeoTapp Flow - Mappa delle timbrature con aggiornamento live' },
  { src: '/schermataFlow.webp', alt: 'GeoTapp Flow - Pannello operativo' },
];

export default function FlowCarousel() {
  const [i, setI] = useState(0);
  const next = useCallback(() => setI((c) => (c + 1) % FLOW_SLIDES.length), []);
  useEffect(() => { const t = setInterval(next, 4000); return () => clearInterval(t); }, [next]);
  const s = FLOW_SLIDES[i];
  return (
    <div className="relative">
      <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl shadow-flow/20 border border-slate-200">
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <Image src={s.src} alt={s.alt} width={1920} height={1080} className="w-full h-auto" priority={i === 0} loading={i === 0 ? 'eager' : 'lazy'} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 bg-flow/10 rounded-xl transform rotate-3 scale-105 -z-0 blur-xl"></div>
      <div className="flex justify-center gap-2 mt-4 relative z-10">
        {FLOW_SLIDES.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${idx === i ? 'bg-flow w-6' : 'bg-slate-300 w-2.5 hover:bg-slate-400'}`}
            aria-label={`Slide ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
}
