'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Share2, Radio, Globe,
  Magnet, ShieldAlert, Ghost, Bot, CloudLightning,
  FileText, Zap, Radar, X, TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ZENITH_FEATURES, FeatureDetail } from './features-data';
import { usePathname } from 'next/navigation';
import itDict from '@/dictionaries/it.json';
import enDict from '@/dictionaries/en.json';


// --- VISUAL COMPONENTS FOR HERO ---
const VisualDashboard = ({ dict }: { dict: any }) => (
  <div className="bg-slate-900 rounded-2xl shadow-2xl p-6 font-mono border border-slate-700 text-xs md:text-sm text-left">
    <div className="flex justify-between items-center border-b border-slate-700 pb-4 mb-4">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="text-slate-400">{dict.exe}</div>
    </div>
    <div className="space-y-3">
      <div className="flex justify-between text-green-400">
        <span>{dict.scan}</span>
        <span>{dict.complete}</span>
      </div>
      <div className="grid grid-cols-2 gap-4 my-4">
        <div className="bg-slate-800 p-3 rounded border border-slate-600">
          <div className="text-slate-400 mb-1">{dict.kd}</div>
          <div className="text-xl text-white font-bold">{dict.high}</div>
          <div className="w-full bg-slate-700 h-1 mt-2 rounded-full overflow-hidden">
            <div className="w-[84%] bg-red-500 h-full"></div>
          </div>
        </div>
        <div className="bg-slate-800 p-3 rounded border border-slate-600">
          <div className="text-slate-400 mb-1">{dict.opp}</div>
          <div className="text-xl text-white font-bold">{dict.massive}</div>
          <div className="w-full bg-slate-700 h-1 mt-2 rounded-full overflow-hidden">
            <div className="w-[92%] bg-green-500 h-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- FEATURE CARD COMPONENT ---
const FeatureCard = ({ feature, onClick }: { feature: FeatureDetail, onClick: (f: FeatureDetail) => void }) => {
  const Icon = feature.icon;
  return (
    <motion.div
      onClick={() => onClick(feature)}
      whileHover={{ y: -5 }}
      className="cursor-pointer p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-2xl hover:border-zenith/20 transition-all duration-300 group relative overflow-hidden"
    >
      <div className={`absolute -right-6 -top-6 p-8 bg-${feature.color}-50 rounded-full opacity-20 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700`}></div>
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className={`p-3 bg-white rounded-xl shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-colors text-${feature.color}-600`}>
          <Icon size={28} />
        </div>
        <div>
          <div className='text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 opacity-70'>CLICK FOR INTEL</div>
          <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
        </div>
      </div>
      <p className="text-slate-600 leading-relaxed text-sm relative z-10">
        {feature.shortDescription}
      </p>
      <div className="mt-6 flex items-center text-zenith font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight size={16} className="ml-2" />
      </div>
    </motion.div>
  );
};

const Sectiondivider = ({ title }: { title: string }) => (
  <div className="flex items-center gap-6 py-12">
    <div className="h-px bg-slate-200 flex-grow"></div>
    <span className="text-sm font-black text-slate-300 uppercase tracking-[0.2em] border border-slate-200 px-4 py-2 rounded-lg bg-slate-50">{title}</span>
    <div className="h-px bg-slate-200 flex-grow"></div>
  </div>
);

// --- MAIN PAGE COMPONENT ---
export default function ZenithSEO() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureDetail | null>(null);
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en');
  const dict = isEn ? enDict : itDict;
  const zenithDict = dict.product_pages.zenith;

  const getLink = (path: string) => isEn ? `/en${path}` : path;

  // Merge features
  const features = ZENITH_FEATURES.map(f => {
    // @ts-ignore
    const t = zenithDict.features[f.id];
    return {
      ...f,
      title: t?.title || f.title,
      shortDescription: t?.short || f.shortDescription,
      fullDescription: t?.full || f.fullDescription
    };
  });

  // Helper to find feature by ID
  const getFeature = (id: string) => features.find(f => f.id === id)!;

  return (
    <div className="bg-background min-h-screen text-text-primary pt-32 pb-24 overflow-x-hidden">

      {/* FEATURE DETAIL MODAL */}
      <AnimatePresence>
        {selectedFeature && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${selectedFeature.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
            >
              {/* Header / Sidebar of Modal */}
              <div className="bg-slate-50 p-8 md:w-1/3 border-r border-slate-100 flex flex-col justify-between shrink-0">
                <div>
                  <div className={`p-4 bg-white rounded-2xl shadow-sm inline-block mb-6 text-${selectedFeature.color}-600`}>
                    <selectedFeature.icon size={48} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-4 leading-tight">{selectedFeature.title}</h3>
                  <div className="w-12 h-1 bg-zenith rounded-full mb-6"></div>
                </div>
                <div
                  className="text-sm text-slate-400 font-mono"
                  dangerouslySetInnerHTML={{ __html: zenithDict.modal.classification }}
                >
                </div>
              </div>

              {/* Content of Modal */}
              <div className="p-8 md:p-12 md:w-2/3 prose prose-slate max-w-none relative">
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-10"
                >
                  <X size={24} className="text-slate-500" />
                </button>

                <div className="markdown-content text-lg leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: selectedFeature.fullDescription.replace(/\n/g, '<br/>') }} />

                <div className="mt-12 pt-8 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedFeature(null)}
                    className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
                  >
                    {zenithDict.modal.close}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* HERO */}
      <section className="container mx-auto px-6 max-w-6xl text-center mb-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-zenith/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-4 flex justify-center">
            <Image src="/logo.png" width={180} height={50} alt="GeoTapp Logo" className="drop-shadow-xl" />
          </div>

          <div className="flex justify-center items-center gap-2 mb-8 text-zenith font-mono text-sm tracking-widest">
            <Radar className="animate-spin-slow" size={16} />
            <span>{zenithDict.system_online}</span>
          </div>

          <h1
            className="text-5xl md:text-8xl font-display font-bold text-slate-900 mb-8 leading-tight"
            dangerouslySetInnerHTML={{ __html: zenithDict.hero_title }}
          >
          </h1>

          <p className="text-2xl text-text-secondary font-light leading-relaxed text-balance max-w-3xl mx-auto mb-12">
            {zenithDict.hero_subtitle}
          </p>

          <motion.div
            whileHover={{ scale: 1.01 }}
            viewport={{ once: true }}
            className="relative mx-auto mt-16 max-w-5xl group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-zenith to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 aspect-video flex items-center justify-center overflow-hidden">
              <VisualDashboard dict={zenithDict.dashboard} />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CORE MODULES GRID */}
      <section className="container mx-auto px-6 max-w-7xl">

        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">{zenithDict.grid_title}</h2>
          <p className="text-xl text-slate-500">
            {zenithDict.grid_subtitle}
          </p>
        </div>

        {/* WARFARE */}
        <Sectiondivider title={zenithDict.sections.warfare} />
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard feature={getFeature('vader-console')} onClick={setSelectedFeature} />
          <FeatureCard feature={getFeature('neural-graph')} onClick={setSelectedFeature} />
          <FeatureCard feature={getFeature('orphan-scanner')} onClick={setSelectedFeature} />
        </div>

        {/* DEFENSE & EXPANSION */}
        <Sectiondivider title={zenithDict.sections.defense} />
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard feature={getFeature('protocol-droid')} onClick={setSelectedFeature} />
          <FeatureCard feature={getFeature('project-starlight')} onClick={setSelectedFeature} />
          <FeatureCard feature={getFeature('network-hub')} onClick={setSelectedFeature} />
        </div>

        {/* LOGISTICS */}
        <Sectiondivider title={zenithDict.sections.logistics} />
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard feature={getFeature('drive-importer')} onClick={setSelectedFeature} />
          <FeatureCard feature={getFeature('tractor-beam')} onClick={setSelectedFeature} />
          <FeatureCard feature={getFeature('auto-linker')} onClick={setSelectedFeature} />
        </div>

        {/* CTA */}
        <div className="text-center py-24">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 mb-8">
            <div className="bg-white rounded-xl px-8 py-2">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                {zenithDict.cta_badge}
              </span>
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-8 text-slate-900">{zenithDict.cta_title}</h2>
          <Link href={getLink("/pricing")} className="inline-flex items-center gap-3 px-10 py-5 bg-zenith text-white font-bold rounded-xl text-xl hover:bg-zenith/90 transition-all shadow-2xl hover:shadow-zenith/50 transform hover:-translate-y-1">
            <Zap className="fill-current" /> {zenithDict.cta_button}
          </Link>
        </div>

      </section>
    </div>
  );
}
