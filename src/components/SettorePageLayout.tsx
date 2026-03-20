import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { localizePath } from '@/lib/i18n/locale-routing';
import type { AppLocale } from '@/lib/i18n/config';
import type { SettoreContent, SettoreSlug } from '@/content/settori/types';
import { JsonLd } from '@/components/seo/JsonLd';

interface Props {
  content: SettoreContent;
  locale: AppLocale;
  settore: SettoreSlug;
}

const SETTORE_COLORS: Record<
  SettoreSlug,
  { badge: string; h1: string; btn: string; step: string }
> = {
  installatori: { badge: 'bg-indigo-100 text-indigo-700', h1: 'text-indigo-600', btn: 'bg-indigo-600 hover:bg-indigo-700', step: 'bg-indigo-600' },
  pulizie:      { badge: 'bg-cyan-100 text-cyan-700',    h1: 'text-cyan-600',   btn: 'bg-cyan-600 hover:bg-cyan-700',     step: 'bg-cyan-600'   },
  sicurezza:    { badge: 'bg-amber-100 text-amber-700',  h1: 'text-amber-600',  btn: 'bg-amber-600 hover:bg-amber-700',   step: 'bg-amber-600'  },
};

export default function SettorePageLayout({ content, locale, settore }: Props) {
  const colors = SETTORE_COLORS[settore];
  const demoLink = localizePath('/demo', locale);
  const pricingLink = localizePath('/pricing', locale);

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
            provider: {
              '@type': 'Organization',
              name: 'GeoTapp',
              url: 'https://geotapp.com',
            },
            url: `https://geotapp.com/settori/${settore}/`,
          }} />
          <JsonLd data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: content.schema_faq.map(({ question, answer }) => ({
              '@type': 'Question',
              name: question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: answer,
              },
            })),
          }} />
        </>
      )}

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-50 px-6 pb-24 pt-32">
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div
                className={`mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-bold tracking-wide ${colors.badge}`}
              >
                {content.hero.badge}
              </div>
              <h1 className="mb-6 text-5xl font-bold leading-[1.1] text-slate-900 md:text-6xl">
                {content.hero.h1_line1}
                <span className={`block ${colors.h1}`}>{content.hero.h1_line2}</span>
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-slate-600">
                {content.hero.subtitle}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href={demoLink}
                  className={`inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold text-white shadow-lg transition-colors ${colors.btn}`}
                >
                  {content.hero.cta_primary} <ArrowRight size={18} />
                </Link>
              </div>
              <p className="mt-4 text-sm text-slate-400">{content.hero.cta_note}</p>
            </div>

            {/* Feature preview card */}
            <div className="hidden md:block">
              <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-white shadow-2xl">
                <div className="space-y-4">
                  {content.features.items.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 text-green-400 shrink-0"
                        size={20}
                      />
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

      {/* Come funziona */}
      <section className="px-6 py-24 bg-slate-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            {content.workflow.title}
          </h2>
          <p className="text-xl text-slate-600 mb-16">{content.workflow.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {content.workflow.steps.map((step, i) => (
              <div key={i}>
                <div className={`w-12 h-12 rounded-full ${colors.step} text-white font-bold text-lg flex items-center justify-center mx-auto mb-4`}>
                  {i + 1}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-24 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {content.features.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.features.items.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-200">
                <Clock className="text-indigo-400 mb-4" size={28} />
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 py-16 bg-indigo-50">
        <div className="container mx-auto max-w-3xl text-center">
          <blockquote className="text-2xl font-medium text-slate-800 italic mb-6">
            &ldquo;{content.testimonial.quote}&rdquo;
          </blockquote>
          <p className="font-bold text-slate-900">{content.testimonial.author}</p>
          <p className="text-slate-500 text-sm">{content.testimonial.role}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            {content.faq.title}
          </h2>
          <p className="text-center text-slate-500 mb-12">{content.faq.subtitle}</p>
          <div className="space-y-6">
            {content.faq.items.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">{item.q}</h3>
                <p className="text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-slate-900 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">{content.cta.title}</h2>
          <p className="text-slate-300 text-xl mb-10">{content.cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={demoLink}
              className={`inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold text-white transition-colors ${colors.btn}`}
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
        </div>
      </section>
    </div>
  );
}
