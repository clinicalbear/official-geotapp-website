'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function VerifierMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const checks = [
    'Report integrity: VERIFIED',
    'Timestamp match: OK',
    'GPS data: CONSISTENT',
    'Document not modified: CONFIRMED',
  ];

  return (
    <div ref={ref} className="relative">
      <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl shadow-slate-900/40 transform md:-rotate-1 hover:rotate-0 transition-transform duration-500 font-mono text-sm relative overflow-hidden">
        {/* Scan line animation */}
        {inView && (
          <motion.div
            className="absolute left-0 right-0 h-[2px] z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #22C55E 30%, #22C55E 70%, transparent 100%)',
              boxShadow: '0 0 15px rgba(34,197,94,0.6), 0 0 30px rgba(34,197,94,0.3)',
            }}
            initial={{ top: 0 }}
            animate={{ top: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 3 }}
          />
        )}

        {/* Terminal header */}
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-700">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-slate-400 text-xs tracking-wider">geotapp-verifier</span>
        </div>

        {/* Check lines */}
        <div className="space-y-3">
          {checks.map((check, i) => (
            <motion.div
              key={check}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.4, duration: 0.3 }}
            >
              <CheckCircle2 size={16} className="text-green-400 shrink-0" />
              <span className="text-green-400">{check}</span>
            </motion.div>
          ))}
          <motion.div
            className="mt-4 pt-4 border-t border-slate-700 text-slate-400 text-xs"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 2.3, duration: 0.3 }}
          >
            Verified by GeoTapp Verifier — 22/03/2026
          </motion.div>
        </div>

        {/* VERIFIED stamp — appears after checks complete */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          initial={{ opacity: 0, scale: 2.5, rotate: -15 }}
          animate={inView ? { opacity: 1, scale: 1, rotate: -12 } : {}}
          transition={{ delay: 2.8, duration: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
        >
          <div
            className="px-8 py-3 border-4 border-green-400 rounded-lg"
            style={{ opacity: 0.25 }}
          >
            <span className="text-green-400 text-3xl font-bold tracking-[0.3em] uppercase">
              Verified
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
