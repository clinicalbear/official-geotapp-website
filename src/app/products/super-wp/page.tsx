'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Zap, Hammer, Shield, Ghost, Crosshair,
  Trash2, Scale, Clock, BrainCircuit, Eye, Cpu,
  Minimize2, X
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { SUPER_WP_HEROES, HeroDetail } from './heros-data';
import { usePathname } from 'next/navigation';
import itDict from '@/dictionaries/it.json';
import enDict from '@/dictionaries/en.json';


// --- ROSTER CARD COMPONENT ---
const RosterCard = ({ hero, onClick }: { hero: HeroDetail, onClick: (h: HeroDetail) => void }) => {
  const Icon = hero.icon;

  return (
    <motion.div
      onClick={() => onClick(hero)}
      whileHover={{ y: -5 }}
      className="cursor-pointer p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-xl hover:border-superwp/20 transition-all duration-300 group relative overflow-hidden"
    >
      {/* Background Letter - Now colored and more visible */}
      <div className={`absolute -top-2 -right-2 p-4 opacity-10 font-black text-8xl text-${hero.color}-600 group-hover:opacity-20 transition-all duration-500 rotate-12 group-hover:rotate-0 select-none`}>
        {hero.hero.charAt(0)}
      </div>

      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div className={`p-3 bg-white rounded-lg shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-colors text-${hero.color}-600`}>
          <Icon size={24} />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{hero.codeName}</div>
          <h3 className="text-lg font-bold text-slate-900">{hero.hero}</h3>
        </div>
      </div>
      <p className="text-slate-600 leading-relaxed text-sm relative z-10">
        {hero.shortDescription}
      </p>
      <div className="mt-4 flex items-center text-superwp font-bold text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight size={14} className="ml-2" />
      </div>
    </motion.div>
  );
};

const Sectiondivider = ({ title }: { title: string }) => (
  <div className="flex items-center gap-4 py-12">
    <div className="h-px bg-slate-200 flex-grow"></div>
    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest px-4 border border-slate-200 rounded-full py-1 bg-white">{title}</span>
    <div className="h-px bg-slate-200 flex-grow"></div>
  </div>
);

export default function SuperWP() {
  const [selectedHero, setSelectedHero] = useState<HeroDetail | null>(null);
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en');
  const dict = isEn ? enDict : itDict;
  const wpDict = dict.product_pages.superwp;

  const getLink = (path: string) => isEn ? `/en${path}` : path;

  // Merge heroes with dictionary
  const heroes = SUPER_WP_HEROES.map(h => {
    // @ts-ignore
    const t = wpDict.heroes[h.id];
    return {
      ...h,
      hero: t?.name || h.hero,
      shortDescription: t?.short || h.shortDescription,
      fullDescription: t?.full || h.fullDescription
    };
  });

  // Helper to get hero by ID
  const getHero = (id: string) => heroes.find(h => h.id === id)!;

  return (
    <div className="bg-background min-h-screen text-text-primary pt-32 pb-24 overflow-x-hidden">

      {/* HERO DETAIL MODAL */}
      <AnimatePresence>
        {selectedHero && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedHero(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`hero-${selectedHero.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
            >
              {/* Sidebar / Identity Card */}
              <div className="bg-slate-50 p-8 md:w-1/3 border-r border-slate-100 flex flex-col justify-between shrink-0">
                <div>
                  <div className={`p-4 bg-white rounded-2xl shadow-xl inline-block mb-6 text-${selectedHero.color}-600 transform -rotate-3`}>
                    <selectedHero.icon size={56} />
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">{selectedHero.codeName}</div>
                  <h3 className="text-3xl md:text-4xl font-display font-black text-slate-900 mb-4 uppercase italic tracking-tighter">
                    {selectedHero.hero}
                  </h3>
                  <div className="w-16 h-2 bg-superwp rounded-full mb-6"></div>
                </div>
                <div
                  className="text-xs text-slate-400 font-mono border-t border-slate-200 pt-4"
                  dangerouslySetInnerHTML={{ __html: wpDict.modal.db_header }}
                >
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 md:w-2/3 prose prose-slate max-w-none relative">
                <button
                  onClick={() => setSelectedHero(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-10"
                >
                  <X size={24} className="text-slate-500" />
                </button>

                <div className="markdown-content text-lg leading-relaxed text-slate-700 font-medium" dangerouslySetInnerHTML={{ __html: selectedHero.fullDescription.replace(/\n/g, '<br/>') }} />

                <div className="mt-12 pt-8 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedHero(null)}
                    className="w-full py-4 bg-superwp text-white font-bold rounded-xl hover:bg-superwp/90 transition-colors shadow-lg shadow-superwp/20"
                  >
                    {wpDict.modal.close}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="container mx-auto px-6 max-w-6xl text-center mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 flex justify-center">
            <Image src="/logo.png" width={180} height={50} alt="GeoTapp Logo" className="drop-shadow-xl" />
          </div>

          <h1
            className="text-5xl md:text-8xl font-display font-bold text-slate-900 mb-8 leading-tight"
            dangerouslySetInnerHTML={{ __html: wpDict.hero_title }}
          >
          </h1>

          <p className="text-2xl text-text-secondary font-light leading-relaxed text-balance max-w-3xl mx-auto mb-12">
            {wpDict.hero_subtitle}
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto mt-16 max-w-5xl"
          >
            <Image
              src="/super_wp_jarvis_core_1765829031310.png"
              width={1200}
              height={675}
              alt="Jarvis Core"
              className="rounded-2xl shadow-2xl border border-slate-200"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* NARRATIVE BODY */}
      <section className="container mx-auto px-6 max-w-6xl pb-24 text-lg text-slate-700">

        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">{wpDict.grid_title}</h2>
          <p className="leading-loose mb-6" dangerouslySetInnerHTML={{ __html: wpDict.grid_subtitle }}>
          </p>
        </div>

        {/* CLASS S: SPEED */}
        <Sectiondivider title={wpDict.classes.S} />
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <RosterCard hero={getHero('quicksilver')} onClick={setSelectedHero} />
          <RosterCard hero={getHero('mjolnir')} onClick={setSelectedHero} />
          <RosterCard hero={getHero('ant-man')} onClick={setSelectedHero} />
        </div>

        {/* CLASS A: DEFENSE */}
        <Sectiondivider title={wpDict.classes.A} />
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <RosterCard hero={getHero('vibranium')} onClick={setSelectedHero} />
          <RosterCard hero={getHero('loki')} onClick={setSelectedHero} />
          <RosterCard hero={getHero('hawkeye')} onClick={setSelectedHero} />
        </div>

        {/* CLASS B: INTELLIGENCE */}
        <Sectiondivider title={wpDict.classes.B} />
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <RosterCard hero={getHero('jarvis')} onClick={setSelectedHero} />
          <RosterCard hero={getHero('vision')} onClick={setSelectedHero} />
          <RosterCard hero={getHero('iron-man')} onClick={setSelectedHero} />
        </div>

        {/* CLASS C: REALITY */}
        <Sectiondivider title={wpDict.classes.C} />
        <div className="grid md:grid-cols-3 gap-6">
          <RosterCard hero={getHero('hulk')} onClick={setSelectedHero} />
          <RosterCard hero={getHero('thanos')} onClick={setSelectedHero} />
          <RosterCard hero={getHero('doctor-strange')} onClick={setSelectedHero} />
        </div>

        {/* CTA */}
        <div className="text-center py-24">
          <h2 className="text-3xl font-bold mb-8">{wpDict.cta_title}</h2>
          <Link href={getLink("/pricing")} className="inline-flex items-center gap-3 px-8 py-4 bg-superwp text-white font-bold rounded-xl text-xl hover:bg-superwp/90 transition-all shadow-lg hover:shadow-superwp/30 transform hover:-translate-y-1">
            {wpDict.cta_button} <ArrowRight />
          </Link>
        </div>

      </section>
    </div>
  );
}
