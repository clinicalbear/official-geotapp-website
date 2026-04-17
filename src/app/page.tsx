'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  BarChart3,
  Map,
  Smartphone,
  Database,
  Hammer,
  Sparkles,
  FileCheck2,
  MapPin,
  WifiOff,
} from 'lucide-react';

// UI MOCKUP COMPONENTS (Built with Tailwind for "Real Example" feel)
const MockupFlow = ({ m }: { m: { pipeline_title: string; month: string; quote_name: string; quote_approved: string } }) => (
  <div className="bg-white rounded-xl border border-border shadow-xl overflow-hidden font-sans text-xs">
    <div className="bg-slate-50 border-b border-border p-3 flex gap-2">
      <div className="w-3 h-3 rounded-full bg-red-400"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
      <div className="w-3 h-3 rounded-full bg-green-400"></div>
    </div>
    <div className="p-4 space-y-3">
      <div className="flex justify-between items-center text-text-secondary">
        <span className="font-bold text-text-primary">{m.pipeline_title}</span>
        <span>{m.month}</span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-3 p-2 bg-green-50 rounded border border-green-100">
          <div className="w-8 h-8 rounded bg-green-200 flex items-center justify-center text-green-700 font-bold">
            €
          </div>
          <div className="flex-1">
            <div className="font-bold text-slate-800">{m.quote_name}</div>
            <div className="text-[10px] text-slate-500">
              {m.quote_approved}
            </div>
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

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  localizePath,
} from '@/lib/i18n/locale-routing';
import DemoReportBanner from '@/components/DemoReportBanner';
import TrustBar from '@/components/TrustBar';

export default function Home() {
  // Locale resolution is path-based so all internal links stay language-aware.
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  // Dictionary lookup remains local to keep this page self-contained and deterministic.
  const dict = getDictionary(currentLocale);
  // Single helper avoids scattered localized path logic in sections below.
  const getLink = (path: string) => localizePath(path, currentLocale);
  // Localized link helper prevents accidental fallback to default-language paths.
  // Landing composition below intentionally alternates narrative and proof blocks.

  useEffect(() => {
    const bar = document.getElementById('sticky-mobile-cta');
    if (!bar) return;
    const targets = document.querySelectorAll('section.py-24');
    if (!targets.length) return;
    const lastTarget = targets[targets.length - 1];
    const observer = new IntersectionObserver(
      ([entry]) => { bar.style.display = entry.isIntersecting ? 'none' : ''; },
      { threshold: 0.3 }
    );
    observer.observe(lastTarget);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background min-h-screen text-text-primary overflow-hidden">
      {/* Landing is locale-aware: all internal links pass through getLink(). */}
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-32 px-6">
        <div className="container mx-auto max-w-5xl text-center z-10 relative">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-bold tracking-wide mb-8">
              {dict.landing.hero_badge}
            </span>
            <h1
              className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-[1.1] tracking-tight mb-8"
              dangerouslySetInnerHTML={{ __html: dict.landing.hero_title }}
            ></h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-4 font-light">
              {dict.landing.hero_subtitle}
            </p>
            <p className="text-sm text-slate-400 mb-10">
              {dict.landing.hero_sectors_prefix}{' '}
              <Link href={getLink('/settori/pulizie')} className="underline hover:text-slate-600 transition-colors">
                {dict.landing.hero_sectors_pulizie}
              </Link>
              {', '}
              <Link href={getLink('/settori/installatori')} className="underline hover:text-slate-600 transition-colors">
                {dict.landing.hero_sectors_installatori}
              </Link>
              {' '}{dict.landing.hero_sectors_and}{' '}
              <Link href={getLink('/settori/sicurezza')} className="underline hover:text-slate-600 transition-colors">
                {dict.landing.hero_sectors_sicurezza}
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href={getLink('/trial')}
                className="px-8 py-4 bg-primary text-white font-bold rounded-xl text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1"
              >
                {dict.landing.hero_cta_primary}
              </Link>
              <Link
                href={getLink('/settori')}
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl text-lg hover:border-slate-400 transition-all"
              >
                {dict.landing.hero_cta_secondary}
              </Link>
            </div>
            {/* TrustBlock: 3 micro-signals below CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
                <span><strong className="text-slate-700">{dict.landing.trust_gdpr}</strong> — {dict.landing.trust_gdpr_desc}</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-blue shrink-0" />
                <span><strong className="text-slate-700">{dict.landing.trust_gps}</strong> — {dict.landing.trust_gps_desc}</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-2">
                <WifiOff size={16} className="text-amber-500 shrink-0" />
                <span><strong className="text-slate-700">{dict.landing.trust_offline}</strong> — {dict.landing.trust_offline_desc}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Abstract Bg Decoration — CSS gradient, no filter:blur to avoid GPU layer cost */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-slate-100/50 to-transparent rounded-full -z-0 pointer-events-none" />
      </section>

      {/* TRUST BAR — social proof immediately after hero */}
      <TrustBar locale={currentLocale} />

      {/* PROBLEM SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {dict.landing.problem_title}
            </h2>
            <p className="text-xl text-text-secondary font-light">
              {dict.landing.problem_subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {(dict.landing.problem_items as { title: string; desc: string }[]).map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border-l-4 border-brand-blue shadow-sm">
                <div className="text-6xl font-display font-black text-brand-blue/20 leading-none mb-3 select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segment switch drives the verticalized entry pages. */}
      {/* SETTORI SECTION */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-800">
              {dict.home_sections.settori.title}
            </h2>
            <p className="text-slate-500">
              {dict.home_sections.settori.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Installatori */}
            <Link
              href={getLink('/settori/installatori')}
              className="group p-6 rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-100 transition-all bg-slate-50 hover:bg-white"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-amber-100 text-amber-600 rounded-lg group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Hammer size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900">
                  {dict.home_sections.settori.installatori.name}
                </h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                {dict.home_sections.settori.installatori.desc}
              </p>
              <div className="text-amber-600 font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                {dict.home_sections.settori.installatori.cta} <ArrowRight size={16} />
              </div>
            </Link>

            {/* Sicurezza */}
            <Link
              href={getLink('/settori/sicurezza')}
              className="group p-6 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-100 transition-all bg-slate-50 hover:bg-white"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900">{dict.home_sections.settori.sicurezza.name}</h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                {dict.home_sections.settori.sicurezza.desc}
              </p>
              <div className="text-indigo-600 font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                {dict.home_sections.settori.sicurezza.cta} <ArrowRight size={16} />
              </div>
            </Link>

            {/* Pulizie */}
            <Link
              href={getLink('/settori/pulizie')}
              className="group p-6 rounded-2xl border border-slate-200 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-100 transition-all bg-slate-50 hover:bg-white"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-cyan-100 text-cyan-600 rounded-lg group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <Sparkles size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900">{dict.home_sections.settori.pulizie.name}</h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                {dict.home_sections.settori.pulizie.desc}
              </p>
              <div className="text-cyan-600 font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                {dict.home_sections.settori.pulizie.cta} <ArrowRight size={16} />
              </div>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link
              href={getLink('/settori')}
              className="inline-flex items-center gap-2 text-slate-600 font-semibold hover:text-slate-900 transition-colors text-sm"
            >
              {dict.home_sections.settori.see_all} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Product blocks: Verifier leads as the unique trust mechanism, then office (Flow), then field (App). */}
      {/* PRODUCT SECTION: VERIFIER */}
      <section className="py-24 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-[3fr_2fr] gap-16 items-center">
            <div className="order-2 md:order-1">
              {/* Verifier visual mockup */}
              <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl shadow-slate-900/40 transform md:-rotate-1 hover:rotate-0 transition-transform duration-500 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-slate-400 text-xs tracking-wider">geotapp-verifier</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-green-400 shrink-0" />
                    <span className="text-green-400">Report integrity: VERIFIED</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-green-400 shrink-0" />
                    <span className="text-green-400">Timestamp match: OK</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-green-400 shrink-0" />
                    <span className="text-green-400">GPS data: CONSISTENT</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-green-400 shrink-0" />
                    <span className="text-green-400">Document not modified: CONFIRMED</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-700 text-slate-400 text-xs">
                    Verified by GeoTapp Verifier — 22/03/2026
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                  <FileCheck2 size={24} />
                </div>
                <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm">
                  {dict.home_sections.verifier.badge}
                </h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {dict.home_sections.verifier.title}
              </h3>
              <p
                className="text-lg text-text-secondary leading-relaxed mb-8"
                dangerouslySetInnerHTML={{
                  __html: dict.home_sections.verifier.subtitle,
                }}
              ></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-600 shrink-0 mt-1" size={20} />
                  <span
                    className="text-slate-700"
                    dangerouslySetInnerHTML={{
                      __html: dict.home_sections.verifier.features.integrity,
                    }}
                  ></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-600 shrink-0 mt-1" size={20} />
                  <span
                    className="text-slate-700"
                    dangerouslySetInnerHTML={{
                      __html: dict.home_sections.verifier.features.independent,
                    }}
                  ></span>
                </li>
              </ul>
              <Link
                href={getLink('/products/geotapp-verifier')}
                className="text-emerald-600 font-bold hover:underline flex items-center gap-2"
              >
                {dict.home_sections.verifier.link} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REPORT SECTION */}
      <section className="py-24 border-t border-slate-100 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {dict.landing.report_section_title}
            </h2>
            <p className="text-xl text-text-secondary font-light mb-4">
              {dict.landing.report_section_subtitle}
            </p>
            <p className="text-slate-600 leading-relaxed">
              {dict.landing.report_section_body}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-12 max-w-2xl mx-auto">
            {[
              dict.landing.report_feature_1,
              dict.landing.report_feature_2,
              dict.landing.report_feature_3,
              dict.landing.report_feature_4,
            ].map((feat, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                <span className="text-slate-700 text-sm">{feat}</span>
              </div>
            ))}
          </div>
          <div className="text-center mb-10">
            <Link
              href={getLink('/products/geotapp-verifier')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl text-lg hover:bg-emerald-700 transition-all shadow-lg"
            >
              {dict.landing.report_cta} <ArrowRight size={18} />
            </Link>
          </div>
          <div className="max-w-2xl mx-auto">
            <DemoReportBanner />
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION: FLOW */}
      <section className="py-24 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-[3fr_2fr] gap-16 items-center">
            <div className="order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Visual Artifact */}
                <div className="relative z-10 transform md:rotate-[-2deg] hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-flow/20">
                  <MockupFlow m={dict.home_sections.flow_mockup} />
                </div>
                <div className="absolute inset-0 bg-flow/10 rounded-xl transform rotate-3 scale-105 -z-0 blur-xl"></div>
              </motion.div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-flow/10 rounded-lg text-flow">
                  <Database size={24} />
                </div>
                <h2 className="text-flow font-bold uppercase tracking-widest text-sm">
                  {dict.home_sections.flow.badge}
                </h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {dict.home_sections.flow.title}
              </h3>
              <p
                className="text-lg text-text-secondary leading-relaxed mb-8"
                dangerouslySetInnerHTML={{
                  __html: dict.home_sections.flow.subtitle,
                }}
              ></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-flow shrink-0 mt-1" size={20} />
                  <span
                    className="text-slate-700"
                    dangerouslySetInnerHTML={{
                      __html: dict.home_sections.flow.features.crm,
                    }}
                  ></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-flow shrink-0 mt-1" size={20} />
                  <span
                    className="text-slate-700"
                    dangerouslySetInnerHTML={{
                      __html: dict.home_sections.flow.features.pipeline,
                    }}
                  ></span>
                </li>
              </ul>
              <Link
                href={getLink('/products/geotapp-flow')}
                className="text-flow font-bold hover:underline flex items-center gap-2"
              >
                {dict.home_sections.flow.link} <ArrowRight size={18} />
              </Link>
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
                <div className="p-2 bg-app/10 rounded-lg text-app">
                  <Smartphone size={24} />
                </div>
                <h2 className="text-app font-bold uppercase tracking-widest text-sm">
                  {dict.home_sections.app.badge}
                </h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {dict.home_sections.app.title}
              </h3>
              <p
                className="text-lg text-text-secondary leading-relaxed mb-8"
                dangerouslySetInnerHTML={{
                  __html: dict.home_sections.app.subtitle,
                }}
              ></p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                  <Map className="text-app mb-2" />
                  <div className="font-bold text-slate-900">
                    {dict.home_sections.app.card_gps.title}
                  </div>
                  <div className="text-xs text-slate-500">
                    {dict.home_sections.app.card_gps.desc}
                  </div>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                  <ShieldCheck className="text-app mb-2" />
                  <div className="font-bold text-slate-900">
                    {dict.home_sections.app.card_gdpr.title}
                  </div>
                  <div className="text-xs text-slate-500">
                    {dict.home_sections.app.card_gdpr.desc}
                  </div>
                </div>
              </div>
              <Link
                href={getLink('/products/geotapp-timetracker')}
                className="text-app font-bold hover:underline flex items-center gap-2"
              >
                {dict.home_sections.app.link} <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              {/* Placeholder for App Screen - using a styled box for now to represent "Phone" */}
              <div className="relative flex justify-center">
                <div className="absolute inset-0 bg-app/20 rounded-[3rem] blur-3xl scale-110 -z-10 pointer-events-none"></div>
                <div className="mx-auto w-[280px] h-[560px] bg-slate-900 rounded-[3rem] p-4 shadow-2xl shadow-app/30 relative border-8 border-slate-800">
                <div className="w-full h-full bg-slate-800 rounded-[2rem] overflow-hidden relative">
                  {/* Fake App UI */}
                  <div className="absolute top-0 left-0 w-full h-40 bg-app p-6 text-white">
                    <div className="text-xs opacity-80 mt-8">{dict.home_sections.app_mockup.greeting}</div>
                    <div className="text-2xl font-bold">Marco</div>
                    <div className="mt-4 px-3 py-1 bg-white/20 rounded-full text-xs inline-block">
                      {dict.home_sections.app_mockup.status}
                    </div>
                  </div>
                  <div className="absolute top-44 left-4 right-4 bg-white rounded-xl p-4 shadow-lg">
                    <div className="text-xs text-slate-400 uppercase font-bold mb-2">
                      {dict.home_sections.app_mockup.next_job_label}
                    </div>
                    <div className="text-slate-900 font-bold text-lg">
                      Via Roma 45, Milano
                    </div>
                    <div className="text-app text-sm mt-1">{dict.home_sections.app_mockup.next_job_time}</div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM OVERVIEW */}
      <section id="platform" className="py-24 border-t border-slate-100 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">
              {dict.home_sections.core.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-4 mb-6">
              {dict.home_sections.core.title}
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed font-light">
              {dict.home_sections.core.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex items-start gap-5">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shrink-0">
                <Smartphone size={26} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {dict.home_sections.core.features[0].title}
                </h3>
                <p
                  className="text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: dict.home_sections.core.features[0].desc,
                  }}
                ></p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex items-start gap-5">
              <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 shrink-0">
                <ShieldCheck size={26} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {dict.home_sections.core.features[1].title}
                </h3>
                <p
                  className="text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: dict.home_sections.core.features[1].desc,
                  }}
                ></p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex items-start gap-5">
              <div className="p-3 bg-amber-50 rounded-xl text-amber-600 shrink-0">
                <Zap size={26} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {dict.home_sections.core.features[2].title}
                </h3>
                <p
                  className="text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: dict.home_sections.core.features[2].desc,
                  }}
                ></p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex items-start gap-5">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 shrink-0">
                <FileCheck2 size={26} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {dict.home_sections.core.features[3].title}
                </h3>
                <p
                  className="text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: dict.home_sections.core.features[3].desc,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-32 bg-slate-900 text-white text-center px-6">
        <div className="container mx-auto max-w-4xl">
          <h2
            className="text-4xl md:text-5xl font-bold mb-8"
            dangerouslySetInnerHTML={{
              __html: dict.home_sections.footer_cta.title,
            }}
          ></h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            {dict.home_sections.footer_cta.subtitle}
          </p>
          <Link
            href={getLink('/contact')}
            className="inline-block px-10 py-5 bg-primary text-slate-900 font-bold rounded-xl text-xl hover:bg-white transition-all shadow-glow hover:scale-105"
          >
            {dict.home_sections.footer_cta.button}
          </Link>
          <div className="mt-6">
            <Link
              href={getLink('/pricing')}
              className="text-slate-400 hover:text-slate-200 text-sm underline underline-offset-4 transition-colors"
            >
              {dict.home_sections.footer_cta.pricing_link}
            </Link>
          </div>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div
        id="sticky-mobile-cta"
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-sm border-t border-slate-200 px-4 py-3 shadow-2xl"
      >
        <Link
          href={getLink('/trial')}
          className="block w-full text-center py-3 bg-primary text-white font-bold rounded-xl text-base"
        >
          {dict.landing.hero_cta_primary}
        </Link>
      </div>
    </div>
  );
}

// Landing page note: keep locale-aware links and section order deterministic (1/2)

// Landing page note: keep locale-aware links and section order deterministic (2/2)
