'use client';

import { motion } from 'framer-motion';
import {
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Database,
  Smartphone,
  AlertTriangle,
  Clock,
  MapPin,
  FileText,
  Lock,
  Users,
  Download,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { localizePath } from '@/lib/i18n/locale-routing';
import type { AppLocale } from '@/lib/i18n/config';
import type { VerifierCopy } from '@/content/verifier/types';

const PROBLEM_ICONS = [AlertTriangle, Clock, FileText];
const FEATURE_ICONS = [Clock, MapPin, FileText, Lock, Users, ShieldCheck];

interface VerifierContentProps {
  copy: VerifierCopy;
  locale: AppLocale;
}

export default function VerifierContent({ copy, locale }: VerifierContentProps) {
  const getLink = (path: string) => localizePath(path, locale);

  return (
    <div className="bg-background min-h-screen text-slate-900 pt-32 pb-24 overflow-x-hidden">

      {/* HERO */}
      <section className="container mx-auto px-6 max-w-6xl mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo */}
          <div className="mb-10 flex justify-center">
            <Image
              src="/logoVerifier.png"
              alt="GeoTapp Verifier"
              width={320}
              height={80}
              priority
              className="h-16 w-auto"
            />
          </div>

          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-mono text-xs tracking-widest">
            <FileCheck2 size={14} className="animate-pulse" />
            {copy.hero_badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-8 leading-tight tracking-tight whitespace-pre-line">
            {copy.hero_title}
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto mb-12">
            {copy.hero_subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/downloads/report-verifier-0.1.0.zip"
              download
              className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1 flex items-center gap-2 justify-center"
            >
              <Download size={20} />
              {copy.hero_cta_download}
            </a>
            <Link
              href={getLink('/contact')}
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-xl text-lg hover:border-slate-400 transition-all"
            >
              {copy.hero_cta_primary}
            </Link>
            <a
              href="#how-it-works"
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl text-lg hover:border-slate-400 transition-all"
            >
              {copy.hero_cta_secondary}
            </a>
          </div>
        </motion.div>

        {/* Visual proof mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl font-mono text-sm">
            <div className="flex items-center gap-2 mb-6 pb-6 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-3 text-slate-400 text-xs tracking-widest uppercase">GeoTapp Verifier — Report Integrity Check</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span className="text-emerald-400 text-xs">{copy.terminal_integrity}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span className="text-emerald-400 text-xs">{copy.terminal_timestamps}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span className="text-emerald-400 text-xs">{copy.terminal_gps}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span className="text-emerald-400 text-xs">{copy.terminal_not_modified}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span className="text-emerald-400 text-xs">{copy.terminal_operator}</span>
                </div>
              </div>
              <div className="bg-slate-800 rounded-xl p-4 text-xs text-slate-400 space-y-2">
                <div className="text-slate-300 font-bold mb-3">{copy.terminal_summary_title}</div>
                <div>Report ID: <span className="text-slate-200">RPT-2024-0847</span></div>
                <div>{copy.terminal_technician_label} <span className="text-slate-200">M. Rossi</span></div>
                <div>{copy.terminal_date_label} <span className="text-slate-200">14/03/2024</span></div>
                <div>{copy.terminal_site_label} <span className="text-slate-200">Via Roma 45, Milano</span></div>
                <div className="pt-2 border-t border-slate-700 text-emerald-400 font-bold">
                  ✓ {copy.terminal_verified_line}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-rose-600 font-bold tracking-widest uppercase text-sm">{copy.problem_badge}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4">
              {copy.problem_title}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {copy.problem_items.map((item, i) => {
              const Icon = PROBLEM_ICONS[i] ?? AlertTriangle;
              return (
                <div key={item.title} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                  <div className="mb-4 inline-flex rounded-2xl bg-rose-50 p-3 text-rose-600">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT IS VERIFIER */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">{copy.what_badge}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-8">
            {copy.what_title}
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            {copy.what_desc}
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">{copy.how_badge}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4">
              {copy.how_title}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {copy.how_steps.map((step) => (
              <div key={step.num} className="relative">
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm h-full">
                  <div className="text-6xl font-black text-slate-100 mb-4 leading-none">{step.num}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
                {step.num !== '03' && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 z-10 items-center justify-center">
                    <ArrowRight size={24} className="text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD SDK */}
      <section id="download" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm">
              {copy.download_badge}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
              {copy.download_title}
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
              {copy.download_desc}
            </p>
            <a
              href="/downloads/report-verifier-0.1.0.zip"
              download
              className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-500 text-white font-bold rounded-xl text-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25"
            >
              <Download size={24} />
              {copy.download_btn}
            </a>
            <p className="mt-4 text-sm text-slate-500 font-mono">
              {copy.download_version}
            </p>
          </div>

          {/* Code snippets */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* CLI */}
            <div className="rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-700/50 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                <span className="ml-2 text-xs text-slate-400 font-mono">{copy.download_cli_title}</span>
              </div>
              <pre className="p-6 text-sm text-emerald-300 font-mono leading-relaxed overflow-x-auto">
{`# Verifica un report ZIP
npx geotapp-report-verify report.zip

# Output JSON per integrazione
npx geotapp-report-verify report.zip --json`}
              </pre>
            </div>

            {/* API */}
            <div className="rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-700/50 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                <span className="ml-2 text-xs text-slate-400 font-mono">{copy.download_api_title}</span>
              </div>
              <pre className="p-6 text-sm text-blue-300 font-mono leading-relaxed overflow-x-auto">
{`import { verifyZipFile } from
  '@geotapp/report-verifier';

const result = await verifyZipFile('./report.zip');
// 'valid' | 'degraded' | 'invalid'
console.log(result.status);
console.log(result.integrityLevel);`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT VERIFIES */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">{copy.features_badge}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4">
              {copy.features_title}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {copy.features.map((feat, i) => {
              const Icon = FEATURE_ICONS[i] ?? ShieldCheck;
              return (
                <div key={feat.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-600">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">{copy.who_badge}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4">
              {copy.who_title}
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <ul className="grid md:grid-cols-2 gap-4">
              {copy.who_items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM: HOW IT CONNECTS */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">{copy.ecosystem_badge}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              {copy.ecosystem_title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{copy.ecosystem_desc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* TimeTracker */}
            <Link
              href={getLink('/products/geotapp-app')}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-600">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">GeoTapp TimeTracker</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {copy.ecosystem_timetracker_desc}
              </p>
              <div className="flex items-center gap-1 text-blue-600 font-bold text-sm">
                {copy.ecosystem_timetracker_link} <ArrowRight size={14} />
              </div>
            </Link>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="text-center">
                <div className="flex items-center gap-2 text-slate-400 mb-2">
                  <div className="h-px w-12 bg-slate-300"></div>
                  <ArrowRight size={20} className="text-slate-400" />
                  <div className="h-px w-12 bg-slate-300"></div>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <div className="h-px w-12 bg-slate-300"></div>
                  <ArrowRight size={20} className="text-slate-400" />
                  <div className="h-px w-12 bg-slate-300"></div>
                </div>
              </div>
            </div>

            {/* Flow */}
            <Link
              href={getLink('/products/geotapp-flow')}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="mb-4 inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">GeoTapp Flow</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {copy.ecosystem_flow_desc}
              </p>
              <div className="flex items-center gap-1 text-indigo-600 font-bold text-sm">
                {copy.ecosystem_flow_link} <ArrowRight size={14} />
              </div>
            </Link>
          </div>

          {/* Verifier at bottom */}
          <div className="mt-6 rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-8 text-center">
            <div className="mb-3 inline-flex rounded-xl bg-emerald-100 p-3 text-emerald-700">
              <FileCheck2 size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">GeoTapp Verifier</h3>
            <p className="text-slate-600 max-w-lg mx-auto">
              {copy.ecosystem_verifier_desc}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">{copy.faq_badge}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4">
              {copy.faq_title}
            </h2>
          </div>
          <div className="space-y-4">
            {copy.faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-slate-900 text-white text-center px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/50 border border-emerald-700 text-emerald-400 text-sm font-bold">
            <FileCheck2 size={14} />
            GeoTapp Verifier
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {copy.cta_title}
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            {copy.cta_subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/downloads/report-verifier-0.1.0.zip"
              download
              className="px-10 py-5 bg-emerald-500 text-white font-bold rounded-xl text-xl hover:bg-emerald-400 transition-all shadow-lg flex items-center gap-2 justify-center"
            >
              <Download size={20} />
              {copy.cta_download}
            </a>
            <Link
              href={getLink('/contact')}
              className="px-10 py-5 bg-emerald-500 text-white font-bold rounded-xl text-xl hover:bg-emerald-400 transition-all shadow-lg"
            >
              {copy.cta_primary}
            </Link>
            <Link
              href={getLink('/products/geotapp-flow')}
              className="px-8 py-5 bg-white/10 text-white border border-white/20 font-bold rounded-xl text-lg hover:bg-white/20 transition-all flex items-center gap-2 justify-center"
            >
              <Database size={20} /> {copy.cta_flow}
            </Link>
            <Link
              href={getLink('/products/geotapp-app')}
              className="px-8 py-5 bg-white/10 text-white border border-white/20 font-bold rounded-xl text-lg hover:bg-white/20 transition-all flex items-center gap-2 justify-center"
            >
              <Smartphone size={20} /> {copy.cta_timetracker}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
