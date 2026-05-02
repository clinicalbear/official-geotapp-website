'use client';

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, CheckCircle2, ShieldCheck, X, Camera, MapPin, Clock } from 'lucide-react';
import { localizePath } from '@/lib/i18n/locale-routing';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';
import type { SettoreContent, SettoreSlug } from '@/content/settori/types';
import { JsonLd } from '@/components/seo/JsonLd';
import DemoReportBanner from '@/components/DemoReportBanner';
import { trackEvent } from '@/lib/analytics';


interface Props {
  content: SettoreContent;
  locale: AppLocale;
  settore: SettoreSlug;
  children?: React.ReactNode;
}

const SETTORE_COLORS: Record<
  SettoreSlug,
  { badge: string; h1: string; btn: string; step: string; accent: string; light: string }
> = {
  installatori:    { badge: 'bg-indigo-100 text-indigo-700', h1: 'text-indigo-600', btn: 'bg-indigo-600 hover:bg-indigo-700', step: 'bg-indigo-600', accent: 'text-indigo-600', light: 'bg-indigo-50' },
  pulizie:         { badge: 'bg-cyan-100 text-cyan-700',    h1: 'text-cyan-600',   btn: 'bg-cyan-600 hover:bg-cyan-700',     step: 'bg-cyan-600',   accent: 'text-cyan-600',   light: 'bg-cyan-50'   },
  sicurezza:       { badge: 'bg-amber-100 text-amber-700',  h1: 'text-amber-600',  btn: 'bg-amber-600 hover:bg-amber-700',   step: 'bg-amber-600',  accent: 'text-amber-600',  light: 'bg-amber-50'  },
  elettricisti:    { badge: 'bg-yellow-100 text-yellow-700', h1: 'text-yellow-600', btn: 'bg-yellow-600 hover:bg-yellow-700', step: 'bg-yellow-600', accent: 'text-yellow-600', light: 'bg-yellow-50' },
  idraulici:       { badge: 'bg-blue-100 text-blue-700',    h1: 'text-blue-600',   btn: 'bg-blue-600 hover:bg-blue-700',     step: 'bg-blue-600',   accent: 'text-blue-600',   light: 'bg-blue-50'   },
  termoidraulici:  { badge: 'bg-orange-100 text-orange-700', h1: 'text-orange-600', btn: 'bg-orange-600 hover:bg-orange-700', step: 'bg-orange-600', accent: 'text-orange-600', light: 'bg-orange-50' },
  edilizia:        { badge: 'bg-stone-100 text-stone-700',  h1: 'text-stone-600',  btn: 'bg-stone-600 hover:bg-stone-700',   step: 'bg-stone-600',  accent: 'text-stone-600',  light: 'bg-stone-50'  },
  impianti:        { badge: 'bg-teal-100 text-teal-700',    h1: 'text-teal-600',   btn: 'bg-teal-600 hover:bg-teal-700',     step: 'bg-teal-600',   accent: 'text-teal-600',   light: 'bg-teal-50'   },
  manutenzione:    { badge: 'bg-emerald-100 text-emerald-700', h1: 'text-emerald-600', btn: 'bg-emerald-600 hover:bg-emerald-700', step: 'bg-emerald-600', accent: 'text-emerald-600', light: 'bg-emerald-50' },
  'impresa-di-pulizie': { badge: 'bg-sky-100 text-sky-700', h1: 'text-sky-600', btn: 'bg-sky-600 hover:bg-sky-700', step: 'bg-sky-600', accent: 'text-sky-600', light: 'bg-sky-50' },
};

const RISORSE_LABELS: Record<string, string> = {
  it: 'Guide e articoli →', en: 'Guides & articles →', de: 'Leitfäden & Artikel →',
  fr: 'Guides & articles →', es: 'Guías y artículos →', pt: 'Guias & artigos →',
  nl: 'Gidsen & artikelen →', da: 'Vejledninger & artikler →',
  sv: 'Guider & artiklar →', nb: 'Guider & artikler →', ru: 'Руководства & статьи →',
};

export default function SettorePageLayout({ content, locale, settore, children }: Props) {
  const colors = SETTORE_COLORS[settore];
  const trialLink = localizePath('/trial', locale);
  const pricingLink = localizePath('/pricing', locale);
  const sl = (getDictionary(locale) as any).settore_layout ?? {};

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      {
        '@type': 'ListItem',
        position: 2,
        name: content.schema_sector_name,
        item: `https://geotapp.com/${locale}/settori/${settore}`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <Script
        id={`${settore}-breadcrumb-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
      {!(content.schema_faq && content.schema_faq.length > 0) && (
        <Script
          id={`${settore}-faq-schema`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
        />
      )}

      {content.schema_faq && content.schema_faq.length > 0 && (
        <>
          <JsonLd data={{
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: content.meta.title,
            description: content.meta.description,
            provider: { '@type': 'Organization', name: 'GeoTapp', url: 'https://geotapp.com' },
            url: `https://geotapp.com/settori/${settore}/`,
          }} />
          <JsonLd data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: content.schema_faq.map(({ question, answer }) => ({
              '@type': 'Question',
              name: question,
              acceptedAnswer: { '@type': 'Answer', text: answer },
            })),
          }} />
          <JsonLd data={{
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'GeoTapp',
            operatingSystem: 'Android, iOS, Web',
            applicationCategory: 'BusinessApplication',
            offers: {
              '@type': 'Offer',
              price: '3',
              priceCurrency: 'EUR',
              description: 'Piano TimeTracker da 3 €/operatore/mese. Prova gratuita 14 giorni.',
            },
            url: `https://geotapp.com/${locale}/settori/${settore}/`,
          }} />
        </>
      )}

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-slate-50 px-6 pb-24 pt-32">
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className={`mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-bold tracking-wide ${colors.badge}`}>
                {content.hero.badge}
              </div>
              <h1 className="mb-6 text-3xl font-bold leading-[1.1] text-slate-900 sm:text-4xl md:text-6xl">
                {content.hero.h1_line1}
                <span className={`block ${colors.h1}`}>{content.hero.h1_line2}</span>
              </h1>
              <p className="mb-8 text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
                {content.hero.subtitle}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href={trialLink}
                  className={`inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold text-white shadow-lg transition-colors ${colors.btn}`}
                >
                  {content.hero.cta_primary} <ArrowRight size={18} />
                </Link>
              </div>
              <p className="mt-4 text-sm text-slate-400">{content.hero.cta_note}</p>
              <Link
                href={`/${locale}/settori/${settore}/risorse/`}
                className="text-sm text-slate-500 hover:text-slate-700 underline underline-offset-2"
              >
                {RISORSE_LABELS[locale] ?? RISORSE_LABELS['en']}
              </Link>
              {content.pricing_hint && (
                <div className="mt-6 inline-flex flex-wrap items-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm sm:gap-2 sm:rounded-full">
                  <span className="text-slate-500">{content.pricing_hint.label}</span>
                  <span className={`font-bold ${colors.accent}`}>{content.pricing_hint.price}</span>
                  <span className="text-slate-500">{content.pricing_hint.per}</span>
                  <span className="mx-1 hidden text-slate-300 sm:inline">·</span>
                  <span className="text-slate-400">{content.pricing_hint.note}</span>
                </div>
              )}
            </div>

            {/* Feature preview card */}
            <div className="hidden md:block">
              <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-white shadow-2xl">
                <div className="space-y-4">
                  {content.features.items.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 text-green-400 shrink-0" size={20} />
                      <div>
                        <div className="font-bold text-sm">{f.title}</div>
                        <div className="text-slate-400 text-xs mt-1">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEMA ── */}
      <section className="px-6 py-24 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center md:text-4xl">
            {content.pain.title}
          </h2>
          <p className="text-center text-slate-500 mb-16 text-lg max-w-2xl mx-auto">
            {sl.pain_subtitle ?? "Clock-in apps record. They don't certify. There's an enormous difference, and you feel it the moment a dispute arises."}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {content.pain.items.map((item, i) => (
              <div key={i} className="rounded-2xl border-2 border-red-100 bg-red-50 p-6">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <X className="text-red-500" size={16} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIMA / DOPO ── */}
      {content.prima_dopo && (
        <section className="px-6 py-24 bg-slate-900 text-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-16 md:text-4xl">
              {content.prima_dopo.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* PRIMA */}
              <div className="rounded-2xl border border-red-800 bg-red-950/40 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                    <X size={16} className="text-white" />
                  </div>
                  <span className="font-bold text-red-400 text-lg tracking-wide uppercase text-sm">{sl.before ?? 'Before'}</span>
                </div>
                <ul className="space-y-4">
                  {content.prima_dopo.prima.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* DOPO */}
              <div className="rounded-2xl border border-green-700 bg-green-950/40 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} className="text-white" />
                  </div>
                  <span className="font-bold text-green-400 text-lg tracking-wide uppercase text-sm">{sl.after ?? 'With GeoTapp'}</span>
                </div>
                <ul className="space-y-4">
                  {content.prima_dopo.dopo.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-200">
                      <CheckCircle2 size={16} className="mt-0.5 text-green-400 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── SCENARIO REALE ── */}
      {content.scenario && (
        <section className="px-6 py-20 bg-white">
          <div className="container mx-auto max-w-3xl">
            <p className={`text-sm font-bold uppercase tracking-widest ${colors.accent} mb-4 text-center`}>
              {content.scenario.title}
            </p>
            <blockquote className={`rounded-2xl border-l-4 ${colors.light} p-8 md:p-10`} style={{ borderLeftColor: 'currentColor' }}>
              <p className="text-xl font-medium text-slate-800 leading-relaxed mb-6 italic">
                &ldquo;{content.scenario.body}&rdquo;
              </p>
              <p className={`font-bold text-lg ${colors.accent}`}>
                {content.scenario.resolution}
              </p>
            </blockquote>
          </div>
        </section>
      )}

      {/* ── TABELLA COMPARATIVA ── */}
      {content.differenza && (
        <section className="px-6 py-24 bg-slate-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center md:text-4xl">
              {content.differenza.title}
            </h2>
            <p className="text-center text-slate-500 mb-12 text-lg">{content.differenza.subtitle}</p>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="py-4 px-6 text-left font-semibold w-1/3"></th>
                    <th className="py-4 px-6 text-center font-semibold">App di timbratura classica</th>
                    <th className="py-4 px-6 text-center font-bold text-white bg-[#8FC436]">GeoTapp</th>
                  </tr>
                </thead>
                <tbody>
                  {content.differenza.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="py-4 px-6 font-semibold text-slate-700">{row.label}</td>
                      <td className="py-4 px-6 text-center text-slate-500">{row.competitor}</td>
                      <td className={`py-4 px-6 text-center font-bold text-white ${i % 2 === 0 ? 'bg-[#8FC436]' : 'bg-[#7db02e]'}`}>{row.geotapp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── NON È UN GESTIONALE ── */}
      {content.non_gestionale && (
        <section className="px-6 py-24 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 md:text-4xl">
                {content.non_gestionale.title}
              </h2>
              <p className="text-xl text-slate-500">{content.non_gestionale.subtitle}</p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="py-4 px-6 text-left font-semibold text-slate-500 w-1/3"></th>
                    <th className="py-4 px-6 text-center font-semibold text-slate-600">{sl.classic_app ?? 'Generic app / Spreadsheet'}</th>
                    <th className="py-4 px-6 text-center font-bold text-white bg-[#8FC436]">GeoTapp</th>
                  </tr>
                </thead>
                <tbody>
                  {content.non_gestionale.items.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="py-4 px-6 font-semibold text-slate-700">{row.label}</td>
                      <td className="py-4 px-6 text-center text-slate-400">{row.gestionale}</td>
                      <td className={`py-4 px-6 text-center font-bold text-white ${i % 2 === 0 ? 'bg-[#8FC436]' : 'bg-[#7db02e]'}`}>{row.geotapp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── ROI CALCULATOR CTA ── */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="container mx-auto max-w-3xl text-center">
          <p className={`text-sm font-bold uppercase tracking-widest ${colors.accent} mb-3`}>
            {sl.roi_badge ?? 'Calculate your ROI'}
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mb-4 md:text-4xl">
            {sl.roi_title ?? 'How much would you save with GeoTapp?'}
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            {sl.roi_desc ?? 'Enter your team size and get an estimated ROI in 30 seconds. No registration, no email.'}
          </p>
          <Link
            href={`/${locale}/roi-calculator/`}
            className={`inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold text-white shadow-lg transition-colors ${colors.btn}`}
          >
            {sl.roi_cta ?? 'Calculate my ROI'} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ── CTA MID-PAGE ── */}
      {content.cta_mid && (
        <section className={`px-6 py-16 ${colors.light}`}>
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 md:text-3xl">
              {content.cta_mid.title}
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {content.cta_mid.body}
            </p>
            <Link
              href={trialLink}
              className={`inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold text-white shadow-lg transition-colors ${colors.btn}`}
              onClick={() => trackEvent('trial_click', { source: `settore_${settore}` })}
            >
              {content.cta_mid.cta} <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      )}

      {/* ── COME FUNZIONA ── */}
      <section className="px-6 py-24 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 md:text-4xl">
            {content.workflow.title}
          </h2>
          <p className="text-xl text-slate-600 mb-16">{content.workflow.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-10">
            {content.workflow.steps.map((step, i) => (
              <div key={i} className="relative">
                <div className={`w-14 h-14 rounded-full ${colors.step} text-white font-bold text-xl flex items-center justify-center mx-auto mb-5 shadow-md`}>
                  {i + 1}
                </div>
                <h3 className="font-bold text-slate-900 mb-3 text-lg">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFICI ── */}
      <section className={`px-6 py-24 ${colors.light}`}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center md:text-4xl">
            {content.features.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {content.features.items.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <CheckCircle2 className={`mb-4 ${colors.accent}`} size={28} />
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COSA CAMBIA DAVVERO ── */}
      {content.cosa_cambia && (
        <section className="px-6 py-24 bg-slate-900 text-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-16 md:text-4xl">
              {content.cosa_cambia.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {content.cosa_cambia.items.map((item, i) => (
                <div key={i} className={`rounded-2xl p-8 border border-slate-700 ${colors.light.replace('bg-', 'bg-opacity-5 bg-')}`}>
                  <div className={`text-4xl font-black mb-4 ${colors.accent}`}>0{i + 1}</div>
                  <h3 className="font-bold text-white text-lg mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TESTIMONIAL ── */}
      <section className="px-6 py-20 bg-slate-900">
        <div className="container mx-auto max-w-3xl text-center">
          <blockquote className="text-2xl font-medium text-white italic mb-8 leading-relaxed">
            &ldquo;{content.testimonial.quote}&rdquo;
          </blockquote>
          <p className="font-bold text-white">{content.testimonial.author}</p>
          <p className="text-slate-400 text-sm mt-1">{content.testimonial.role}</p>
        </div>
      </section>

      {/* ── PROVA VISIVA ── */}
      {content.prova_visiva && (
        <section className="px-6 py-24 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 md:text-4xl">
                {content.prova_visiva.title}
              </h2>
              <p className="text-xl text-slate-500">{content.prova_visiva.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Mockup: App TimeTracker */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-md">
                <div className={`${colors.light} px-5 py-4 border-b border-slate-200 flex items-center gap-2`}>
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className={`ml-2 text-xs font-bold ${colors.accent}`}>GeoTapp TimeTracker</span>
                </div>
                <div className="p-5 space-y-3 bg-white">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                    <div className={`w-9 h-9 rounded-xl ${colors.light} flex items-center justify-center shrink-0`}>
                      <Clock size={16} className={colors.accent} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">{sl.mockup_title ?? 'Job open'}</div>
                      <div className="font-bold text-slate-800 text-sm">08:47 — Via Roma 14</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                    <div className={`w-9 h-9 rounded-xl ${colors.light} flex items-center justify-center shrink-0`}>
                      <MapPin size={16} className={colors.accent} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">{sl.mockup_gps ?? 'GPS verified'}</div>
                      <div className="font-bold text-slate-800 text-sm">45.4642°N, 9.1900°E</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                    <div className={`w-9 h-9 rounded-xl ${colors.light} flex items-center justify-center shrink-0`}>
                      <Camera size={16} className={colors.accent} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">{sl.mockup_photos ?? 'Photos attached'}</div>
                      <div className="font-bold text-slate-800 text-sm">{sl.mockup_photos_count ?? '3 geotagged photos'}</div>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden bg-slate-100 h-28 flex items-center justify-center">
                    <span className="text-slate-400 text-xs">📷 foto_bagno_08-48.jpg</span>
                  </div>
                </div>
              </div>

              {/* Mockup: Report sigillato */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-md">
                <div className="bg-slate-800 px-5 py-4 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-green-400" />
                  <span className="text-xs font-bold text-white">Report sigillato</span>
                  <span className="ml-auto text-xs text-green-400 font-bold">● VERIFICATO</span>
                </div>
                <div className="p-5 space-y-3 bg-white font-mono text-xs">
                  <div className="space-y-1 text-slate-600">
                    <div className="flex justify-between"><span className="text-slate-400">Operatore</span><span className="font-bold">Mario R.</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Sede</span><span className="font-bold">Uffici Zona 3</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Apertura</span><span className="font-bold">08:47:03</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Chiusura</span><span className="font-bold">11:22:41</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">GPS apertura</span><span className="font-bold text-green-600">✓ verificato</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">GPS chiusura</span><span className="font-bold text-green-600">✓ verificato</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Foto</span><span className="font-bold">3 allegate</span></div>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="text-slate-400 mb-1">Hash sigillatura</div>
                    <div className="text-slate-300 text-[10px] break-all bg-slate-50 p-2 rounded">
                      sha256:a3f8c2...e91d4b
                    </div>
                  </div>
                  <div className="rounded-lg bg-green-50 border border-green-200 p-2 text-center text-green-700 font-bold text-xs">
                    {sl.mockup_sealed ?? 'Not editable after closure'}
                  </div>
                </div>
              </div>

              {/* Mockup: Dashboard */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-md">
                <div className={`${colors.light} px-5 py-4 border-b border-slate-200 flex items-center gap-2`}>
                  <span className={`text-xs font-bold ${colors.accent}`}>GeoTapp Flow — Dashboard</span>
                  <span className="ml-auto text-xs text-slate-400">Live</span>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div className="p-5 space-y-2 bg-white">
                  {[
                    { name: 'Luigi B.', site: 'Condominio A', status: sl.mockup_status_active ?? 'Active', color: 'bg-green-500' },
                    { name: 'Sara M.', site: 'Uffici Centro', status: sl.mockup_status_active ?? 'Active', color: 'bg-green-500' },
                    { name: 'Marco T.', site: 'Scuola Via Po', status: sl.mockup_status_completed ?? 'Completed', color: 'bg-slate-400' },
                    { name: 'Anna C.', site: 'Hotel Nord', status: sl.mockup_status_active ?? 'Active', color: 'bg-green-500' },
                  ].map((op, i) => (
                    <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50">
                      <div className={`w-2 h-2 rounded-full ${op.color} shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-slate-800 text-xs truncate">{op.name}</div>
                        <div className="text-slate-400 text-[11px] truncate">{op.site}</div>
                      </div>
                      <span className="text-[11px] text-slate-500 shrink-0">{op.status}</span>
                    </div>
                  ))}
                  <div className="pt-2 text-center text-xs text-slate-400">{sl.mockup_status_summary ?? '4 operators active on 6 sites'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── TRUST / NON ALTERABILE ── */}
      {content.trust && (
        <section className="px-6 py-24 bg-white">
          <div className="container mx-auto max-w-3xl text-center">
            <ShieldCheck className={`mx-auto mb-6 ${colors.accent}`} size={48} />
            <h2 className="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">
              {content.trust.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {content.trust.body}
            </p>
            <div className={`inline-block rounded-full px-6 py-2 text-sm font-bold ${colors.badge}`}>
              {content.trust.badge}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section className="px-6 py-24 bg-slate-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            {content.faq.title}
          </h2>
          <p className="text-center text-slate-500 mb-12">{content.faq.subtitle}</p>
          <div className="space-y-4">
            {content.faq.items.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-6 bg-white">
                <h3 className="font-bold text-slate-900 mb-3">{item.q}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALTRI SETTORI ── */}
      {(() => {
        const OTHER_SETTORI: Record<string, Record<SettoreSlug, string>> = {
          it: { pulizie: 'Imprese di pulizie', installatori: 'Installatori', sicurezza: 'Aziende di sicurezza', elettricisti: 'Elettricisti', idraulici: 'Idraulici', termoidraulici: 'Termoidraulici', edilizia: 'Edilizia', impianti: 'Impianti', manutenzione: 'Manutenzione', 'impresa-di-pulizie': 'Impresa di pulizie' },
          en: { pulizie: 'Cleaning companies', installatori: 'Installers', sicurezza: 'Security services', elettricisti: 'Electricians', idraulici: 'Plumbers', termoidraulici: 'Heating engineers', edilizia: 'Construction', impianti: 'Mechanical & Electrical', manutenzione: 'Maintenance', 'impresa-di-pulizie': 'Cleaning company' },
          de: { pulizie: 'Reinigungsunternehmen', installatori: 'Installateure', sicurezza: 'Sicherheitsdienste', elettricisti: 'Elektriker', idraulici: 'Klempner', termoidraulici: 'Heizungsinstallateure', edilizia: 'Bauwesen', impianti: 'Anlagenbau', manutenzione: 'Wartung', 'impresa-di-pulizie': 'Reinigungsunternehmen' },
          fr: { pulizie: 'Entreprises de nettoyage', installatori: 'Installateurs', sicurezza: 'Services de sécurité', elettricisti: 'Électriciens', idraulici: 'Plombiers', termoidraulici: 'Plombiers-chauffagistes', edilizia: 'Construction', impianti: 'Installations', manutenzione: 'Maintenance', 'impresa-di-pulizie': 'Entreprise de nettoyage' },
          es: { pulizie: 'Empresas de limpieza', installatori: 'Instaladores', sicurezza: 'Servicios de seguridad', elettricisti: 'Electricistas', idraulici: 'Fontaneros', termoidraulici: 'Fontaneros calefactores', edilizia: 'Construcción', impianti: 'Instalaciones', manutenzione: 'Mantenimiento', 'impresa-di-pulizie': 'Empresa de limpieza' },
          pt: { pulizie: 'Empresas de limpeza', installatori: 'Instaladores', sicurezza: 'Serviços de segurança', elettricisti: 'Eletricistas', idraulici: 'Canalizadores', termoidraulici: 'Técnicos de aquecimento', edilizia: 'Construção', impianti: 'Instalações', manutenzione: 'Manutenção', 'impresa-di-pulizie': 'Empresa de limpeza' },
          nl: { pulizie: 'Schoonmaakbedrijven', installatori: 'Installateurs', sicurezza: 'Beveiligingsdiensten', elettricisti: 'Elektriciens', idraulici: 'Loodgieters', termoidraulici: 'CV-monteurs', edilizia: 'Bouw', impianti: 'Installaties', manutenzione: 'Onderhoud', 'impresa-di-pulizie': 'Schoonmaakbedrijf' },
          da: { pulizie: 'Rengøringsvirksomheder', installatori: 'Installatører', sicurezza: 'Sikkerhedstjenester', elettricisti: 'Elektrikere', idraulici: 'VVS-installatører', termoidraulici: 'Varmeinstallatører', edilizia: 'Byggeri', impianti: 'Installationer', manutenzione: 'Vedligeholdelse', 'impresa-di-pulizie': 'Rengøringsfirma' },
          sv: { pulizie: 'Städföretag', installatori: 'Installatörer', sicurezza: 'Säkerhetstjänster', elettricisti: 'Elektriker', idraulici: 'Rörmokare', termoidraulici: 'VVS-tekniker', edilizia: 'Byggnation', impianti: 'Installationer', manutenzione: 'Underhåll', 'impresa-di-pulizie': 'Städföretag' },
          nb: { pulizie: 'Renholdsbedrifter', installatori: 'Installatører', sicurezza: 'Sikkerhetstjenester', elettricisti: 'Elektrikere', idraulici: 'Rørleggere', termoidraulici: 'VVS-teknikere', edilizia: 'Bygg', impianti: 'Installasjoner', manutenzione: 'Vedlikehold', 'impresa-di-pulizie': 'Rengjøringsfirma' },
          ru: { pulizie: 'Клининговые компании', installatori: 'Монтажники', sicurezza: 'Охранные службы', elettricisti: 'Электрики', idraulici: 'Сантехники', termoidraulici: 'Теплотехники', edilizia: 'Строительство', impianti: 'Инженерные системы', manutenzione: 'Техобслуживание', 'impresa-di-pulizie': 'Клининговая компания' },
        };
        const CROSS_TITLE: Record<string, string> = {
          it: 'Altri settori', en: 'Other sectors', de: 'Weitere Branchen',
          fr: 'Autres secteurs', es: 'Otros sectores', pt: 'Outros setores',
          nl: 'Andere sectoren', da: 'Andre sektorer', sv: 'Andra sektorer',
          nb: 'Andre sektorer', ru: 'Другие отрасли',
        };
        const names = OTHER_SETTORI[locale] ?? OTHER_SETTORI.en;
        const others = (['pulizie', 'installatori', 'sicurezza', 'elettricisti', 'idraulici', 'termoidraulici', 'edilizia', 'impianti', 'manutenzione', 'impresa-di-pulizie'] as SettoreSlug[]).filter(s => s !== settore);
        return (
          <section className="px-6 py-12 bg-white border-t border-slate-100">
            <div className="container mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">
                {CROSS_TITLE[locale] ?? 'Other sectors'}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {others.map(s => (
                  <Link
                    key={s}
                    href={localizePath(`/settori/${s}`, locale)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:border-slate-400 hover:text-slate-900 transition-colors"
                  >
                    {names[s]}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* ── DEMO REPORT ── */}
      <section className="px-6 py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-2xl">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-5">{sl.see_real_report ?? 'See a real report'}</p>
          <DemoReportBanner />
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section className="px-6 py-24 bg-slate-900 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6 md:text-5xl">{content.cta.title}</h2>
          <p className="text-slate-300 text-xl mb-10 leading-relaxed">{content.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={trialLink}
              className={`inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold text-white shadow-lg transition-colors ${colors.btn}`}
              onClick={() => trackEvent('trial_click', { source: `settore_${settore}_footer` })}
            >
              {content.cta.primary} <ArrowRight size={18} />
            </Link>
            <Link
              href={pricingLink}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-8 py-4 font-bold text-slate-300 hover:border-slate-400 transition-colors"
            >
              {content.cta.secondary}
            </Link>
          </div>
          <p className="mt-6 text-slate-500 text-sm">{sl.cta_note ?? 'No lock-in. No contract. We set up on your real case.'}</p>
        </div>
      </section>

      {children}
    </div>
  );
}
