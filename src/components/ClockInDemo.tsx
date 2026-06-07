'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Camera, Lock, MapPin, RotateCcw, ShieldCheck } from 'lucide-react';
import type { SiteDictionary } from '@/lib/i18n/dictionaries';

interface Props {
  dict: SiteDictionary;
}

// 4-step mock of a GeoTapp clock-in. No real GPS/camera: everything is faked
// and deterministic. State machine advances on a timer (~1.3s/step) and on tap.
const STEPS = 4;
const STEP_MS = 1300;

// Fake but fixed coordinates + time so the demo is deterministic.
const FAKE_LAT = '44.41°N';
const FAKE_LON = '8.93°E';
const FAKE_TIME = '08:12';

export default function ClockInDemo({ dict }: Props) {
  const t = dict.landing.clockin_demo;
  const reduced = useReducedMotion();
  // When reduced motion is requested, jump straight to the final sealed state
  // and never auto-advance.
  const [step, setStep] = useState(reduced ? STEPS - 1 : 0);

  useEffect(() => {
    if (reduced) return;
    const id = setTimeout(() => setStep((s) => (s + 1) % STEPS), STEP_MS);
    return () => clearTimeout(id);
  }, [step, reduced]);

  const advance = () => setStep((s) => (s + 1) % STEPS);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={t.replay}
      onClick={advance}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          advance();
        }
      }}
      className="select-none cursor-pointer"
    >
      <div className="geo-glass geo-float rounded-[28px] p-3">
        <div className="relative rounded-[20px] overflow-hidden bg-slate-900">
          {/* Photo frame — reuses an existing screenshot as the "on-site photo" */}
          <img
            src="/screen_live_map.webp"
            alt=""
            aria-hidden
            width={640}
            height={420}
            className="w-full h-auto opacity-90"
          />

          {/* Subtle dark scrim so overlays stay legible */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-transparent to-slate-900/60" />

          {/* GPS pin drops in from step 1 onward */}
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                key="pin"
                initial={reduced ? false : { y: -24, scale: 0.5, opacity: 0 }}
                animate={{ y: 0, scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 380, damping: 18 }}
                className="absolute"
                style={{ top: '34%', left: '44%' }}
              >
                <span className="absolute -inset-3 rounded-full bg-[#8FC436]/40 geo-pin-ring" />
                <div className="relative w-11 h-11 rounded-full bg-white shadow-lg shadow-[#8FC436]/40 flex items-center justify-center ring-2 ring-[#8FC436]">
                  <MapPin size={22} className="text-[#5a9e2a]" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Fake coordinates chip, top-left */}
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                key="coords"
                initial={reduced ? false : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute top-3 left-3 geo-glass rounded-xl px-3 py-1.5 font-mono-tech text-[11px] leading-tight text-slate-700"
              >
                <span className="font-bold text-slate-900">{FAKE_LAT}</span> · {FAKE_LON}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Camera "snap" flash + frame at step 2 */}
          <AnimatePresence>
            {step === 2 && !reduced && (
              <motion.div
                key="flash"
                initial={{ opacity: 0.85 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.55 }}
                className="absolute inset-0 bg-white pointer-events-none"
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                key="camera"
                initial={reduced ? false : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-4 rounded-2xl ring-2 ring-white/70 pointer-events-none"
              >
                <span className="absolute top-2 right-2 flex items-center gap-1.5 geo-glass rounded-full px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                  <Camera size={13} className="text-slate-600" />
                  {t.step_photo}
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sealed chip at the final step */}
          <AnimatePresence>
            {step >= 3 && (
              <motion.div
                key="sealed"
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-3 left-3 geo-glass rounded-2xl px-4 py-3 flex items-center gap-2.5"
              >
                <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center shadow-md shadow-emerald-500/30">
                  <ShieldCheck size={18} className="text-white" />
                </div>
                <div className="font-mono-tech text-[11px] leading-tight text-slate-600">
                  <div className="text-slate-900 font-bold flex items-center gap-1">
                    <Lock size={11} className="text-emerald-600" />
                    {t.step_sealed}
                  </div>
                  <div>
                    {FAKE_TIME} · {FAKE_LAT}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Clock button — pulses while at step 0 */}
          <div className="absolute bottom-3 right-3">
            <motion.div
              animate={reduced || step !== 0 ? { scale: 1 } : { scale: [1, 1.08, 1] }}
              transition={{ duration: 1.1, repeat: reduced ? 0 : Infinity, ease: 'easeInOut' }}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold shadow-lg transition-colors ${
                step === 0
                  ? 'bg-[#8FC436] text-white shadow-[#8FC436]/40'
                  : 'geo-glass text-slate-600'
              }`}
            >
              {t.step_clock}
            </motion.div>
          </div>

          {/* Step rail */}
          <div className="absolute top-3 right-3 flex gap-1.5">
            {Array.from({ length: STEPS }).map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === step ? 'w-5 bg-emerald-500' : 'w-1.5 bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Caption + replay affordance */}
        <div className="flex items-center gap-2 px-2 pt-3 pb-1">
          <p className="flex-1 text-[13px] leading-snug text-slate-600">{t.caption}</p>
          <span className="flex items-center gap-1 text-xs font-semibold text-slate-500 shrink-0">
            <RotateCcw size={13} />
            {t.replay}
          </span>
        </div>
      </div>
    </div>
  );
}
