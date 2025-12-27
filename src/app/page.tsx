'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Zap, BarChart3, Map, Smartphone, Database } from 'lucide-react';
import Image from 'next/image';

// UI MOCKUP COMPONENTS (Built with Tailwind for "Real Example" feel)
const MockupFlow = () => (
  <div className="bg-white rounded-xl border border-border shadow-xl overflow-hidden font-sans text-xs">
    <div className="bg-slate-50 border-b border-border p-3 flex gap-2">
      <div className="w-3 h-3 rounded-full bg-red-400"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
      <div className="w-3 h-3 rounded-full bg-green-400"></div>
    </div>
    <div className="p-4 space-y-3">
      <div className="flex justify-between items-center text-text-secondary">
        <span className="font-bold text-text-primary">Pipeline Vendite</span>
        <span>Dicembre 2025</span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-3 p-2 bg-green-50 rounded border border-green-100">
          <div className="w-8 h-8 rounded bg-green-200 flex items-center justify-center text-green-700 font-bold">€</div>
          <div className="flex-1">
            <div className="font-bold text-slate-800">Preventivo A. Rossi</div>
            <div className="text-[10px] text-slate-500">Approvato oggi alle 09:30</div>
          </div>
          <span className="font-bold text-green-600">+€12.500</span>
        </div>
        <div className="flex items-center gap-3 p-2 bg-slate-50 rounded border border-slate-100 opacity-60">
          <div className="w-8 h-8 rounded bg-slate-200"></div>
          <div className="h-2 w-24 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

const MockupSEO = () => (
  <div className="bg-slate-900 rounded-xl shadow-2xl p-6 font-mono text-xs text-green-400">
    <div className="mb-4 text-slate-400 border-b border-slate-700 pb-2">Analysis Report: geotapp.com</div>
    <div className="space-y-2">
      <div className="flex justify-between">
        <span>&gt; Keyword "Software Gestionali"</span>
        <span className="text-white">Pos: #1</span>
      </div>
      <div className="flex justify-between">
        <span>&gt; Keyword "App Presenze"</span>
        <span className="text-white">Pos: #3 <span className="text-green-500">(▲ 2)</span></span>
      </div>
      <div className="mt-4 p-3 bg-slate-800 rounded border border-slate-700 text-slate-300">
        <span className="text-purple-400">Suggestion:</span> Il contenuto è ottimizzato. L'intento di ricerca è "Transazionale". Punteggio: 98/100.
      </div>
    </div>
  </div>
);

import { usePathname } from 'next/navigation';
import itDict from '@/dictionaries/it.json';
import enDict from '@/dictionaries/en.json';

export default function Home() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en');
  const dict = isEn ? enDict : itDict;
  const getLink = (path: string) => isEn ? `/en${path}` : path;

  return (
    <div className="bg-background min-h-screen text-text-primary overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="container mx-auto max-w-5xl text-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-bold tracking-wide mb-8">
              {dict.landing.hero_badge}
            </span>
            <h1
              className="text-6xl md:text-8xl font-display font-bold text-slate-900 leading-[1.05] tracking-tight mb-8"
              dangerouslySetInnerHTML={{ __html: dict.landing.hero_title }}
            >
            </h1>
            <p className="text-2xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-12 font-light">
              {dict.landing.hero_subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={getLink("/pricing")} className="px-8 py-4 bg-primary text-white font-bold rounded-xl text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1">
                {dict.landing.hero_cta_primary}
              </Link>
              <Link href="#core" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl text-lg hover:border-slate-400 transition-all scroll-smooth">
                {dict.landing.hero_cta_secondary}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Abstract Bg Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-slate-100/50 to-transparent rounded-full blur-3xl -z-0 pointer-events-none" />
      </section>

      {/* PRODUCT SECTION: FLOW */}
      <section className="py-24 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Visual Artifact */}
                <div className="relative z-10 transform md:rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <MockupFlow />
                </div>
                <div className="absolute inset-0 bg-flow/10 rounded-xl transform rotate-3 scale-105 -z-0 blur-xl"></div>
              </motion.div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-flow/10 rounded-lg text-flow"><Database size={24} /></div>
                <h2 className="text-flow font-bold uppercase tracking-widest text-sm">{dict.home_sections.flow.badge}</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{dict.home_sections.flow.title}</h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: dict.home_sections.flow.subtitle }}></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-flow shrink-0 mt-1" size={20} />
                  <span className="text-slate-700" dangerouslySetInnerHTML={{ __html: dict.home_sections.flow.features.crm }}></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-flow shrink-0 mt-1" size={20} />
                  <span className="text-slate-700" dangerouslySetInnerHTML={{ __html: dict.home_sections.flow.features.pipeline }}></span>
                </li>
              </ul>
              <Link href={getLink("/products/geotapp-flow")} className="text-flow font-bold hover:underline flex items-center gap-2">{dict.home_sections.flow.link} <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION: APP */}
      <section className="py-24 border-t border-slate-100 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-app/10 rounded-lg text-app"><Smartphone size={24} /></div>
                <h2 className="text-app font-bold uppercase tracking-widest text-sm">{dict.home_sections.app.badge}</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{dict.home_sections.app.title}</h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: dict.home_sections.app.subtitle }}></p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                  <Map className="text-app mb-2" />
                  <div className="font-bold text-slate-900">{dict.home_sections.app.card_gps.title}</div>
                  <div className="text-xs text-slate-500">{dict.home_sections.app.card_gps.desc}</div>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                  <ShieldCheck className="text-app mb-2" />
                  <div className="font-bold text-slate-900">{dict.home_sections.app.card_gdpr.title}</div>
                  <div className="text-xs text-slate-500">{dict.home_sections.app.card_gdpr.desc}</div>
                </div>
              </div>
              <Link href={getLink("/products/geotapp-app")} className="text-app font-bold hover:underline flex items-center gap-2">{dict.home_sections.app.link} <ArrowRight size={18} /></Link>
            </div>
            <div className="relative">
              {/* Placeholder for App Screen - using a styled box for now to represent "Phone" */}
              <div className="mx-auto w-[280px] h-[560px] bg-slate-900 rounded-[3rem] p-4 shadow-2xl relative border-8 border-slate-800">
                <div className="w-full h-full bg-slate-800 rounded-[2rem] overflow-hidden relative">
                  {/* Fake App UI */}
                  <div className="absolute top-0 left-0 w-full h-40 bg-app p-6 text-white">
                    <div className="text-xs opacity-80 mt-8">Buongiorno,</div>
                    <div className="text-2xl font-bold">Marco</div>
                    <div className="mt-4 px-3 py-1 bg-white/20 rounded-full text-xs inline-block">🟢 In Servizio</div>
                  </div>
                  <div className="absolute top-44 left-4 right-4 bg-white rounded-xl p-4 shadow-lg">
                    <div className="text-xs text-slate-400 uppercase font-bold mb-2">Prossimo Intervento</div>
                    <div className="text-slate-900 font-bold text-lg">Via Roma 45, Milano</div>
                    <div className="text-app text-sm mt-1">Tra 15 min</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION: ZENITH */}
      <section className="py-24 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <MockupSEO />
              </motion.div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-zenith/10 rounded-lg text-zenith"><TrendingUp size={24} /></div>
                <h2 className="text-zenith font-bold uppercase tracking-widest text-sm">{dict.home_sections.zenith.badge}</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{dict.home_sections.zenith.title}</h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {dict.home_sections.zenith.subtitle}
              </p>
              <div className="flex gap-4 mb-8">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">{dict.home_sections.zenith.roi}</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">{dict.home_sections.zenith.setup}</span>
              </div>
              <Link href={getLink("/products/zenith-seo")} className="text-zenith font-bold hover:underline flex items-center gap-2">{dict.home_sections.zenith.link} <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION: SUPER WP */}
      <section className="py-24 border-t border-slate-100 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-superwp/10 rounded-lg text-superwp"><Zap size={24} /></div>
                <h2 className="text-superwp font-bold uppercase tracking-widest text-sm">{dict.home_sections.superwp.badge}</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{dict.home_sections.superwp.title}</h3>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {dict.home_sections.superwp.subtitle}
              </p>
              <div className="p-6 bg-white rounded-2xl border border-border shadow-sm">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-slate-500 font-bold">Google PageSpeed</span>
                  <span className="text-4xl font-bold text-green-500">99</span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[99%]"></div>
                </div>
                <p className="text-xs text-slate-400 mt-2">{dict.home_sections.superwp.speed_label}</p>
              </div>
              <div className="mt-8">
                <Link href={getLink("/products/super-wp")} className="text-superwp font-bold hover:underline flex items-center gap-2">{dict.home_sections.superwp.link} <ArrowRight size={18} /></Link>
              </div>
            </div>
            <div className="relative">
              {/* Visual for Speed - Server Rack style */}
              <div className="bg-slate-900 rounded-xl p-8 text-green-400 font-mono text-sm shadow-2xl">
                <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>J.A.R.V.I.S. Core Active</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-slate-500 mb-1">Cache Hit Rate</div>
                    <div className="text-2xl text-white font-bold">98.4%</div>
                  </div>
                  <div>
                    <div className="text-slate-500 mb-1">Server Response</div>
                    <div className="text-2xl text-white font-bold">12ms</div>
                  </div>
                  <div>
                    <div className="text-slate-500 mb-1">Asset Optimization</div>
                    <div className="text-white">Images: <span className="text-green-400">-64% size</span></div>
                    <div className="text-white">CSS/JS: <span className="text-green-400">Minified</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM ARCHITECTURE SECTION (Moved from Features Page) */}
      <section id="core" className="py-32 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">{dict.home_sections.core.badge}</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mt-4 mb-8">
              {dict.home_sections.core.title}
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed font-light">
              {dict.home_sections.core.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="group">
              <div className="flex items-start gap-5 mb-4">
                <div className="p-3 bg-slate-50 rounded-xl text-primary border border-slate-100 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Smartphone size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{dict.home_sections.core.features[0].title}</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed pl-[76px]" dangerouslySetInnerHTML={{ __html: dict.home_sections.core.features[0].desc }}></p>
            </div>

            <div className="group">
              <div className="flex items-start gap-5 mb-4">
                <div className="p-3 bg-slate-50 rounded-xl text-primary border border-slate-100 group-hover:bg-primary group-hover:text-white transition-colors">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{dict.home_sections.core.features[1].title}</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed pl-[76px]" dangerouslySetInnerHTML={{ __html: dict.home_sections.core.features[1].desc }}></p>
            </div>

            <div className="group">
              <div className="flex items-start gap-5 mb-4">
                <div className="p-3 bg-slate-50 rounded-xl text-primary border border-slate-100 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Zap size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{dict.home_sections.core.features[2].title}</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed pl-[76px]" dangerouslySetInnerHTML={{ __html: dict.home_sections.core.features[2].desc }}></p>
            </div>

            <div className="group">
              <div className="flex items-start gap-5 mb-4">
                <div className="p-3 bg-slate-50 rounded-xl text-primary border border-slate-100 group-hover:bg-primary group-hover:text-white transition-colors">
                  <BarChart3 size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{dict.home_sections.core.features[3].title}</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed pl-[76px]" dangerouslySetInnerHTML={{ __html: dict.home_sections.core.features[3].desc }}></p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-32 bg-slate-900 text-white text-center px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" dangerouslySetInnerHTML={{ __html: dict.home_sections.footer_cta.title }}></h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            {dict.home_sections.footer_cta.subtitle}
          </p>
          <Link href={getLink("/contact")} className="inline-block px-10 py-5 bg-primary text-slate-900 font-bold rounded-xl text-xl hover:bg-white transition-all shadow-glow hover:scale-105">
            {dict.home_sections.footer_cta.button}
          </Link>
        </div>
      </section>

    </div>
  );
}
