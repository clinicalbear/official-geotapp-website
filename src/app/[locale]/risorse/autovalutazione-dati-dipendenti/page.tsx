import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { localizePath } from '@/lib/i18n/locale-routing';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { absoluteLocalizedUrl, buildBreadcrumbJsonLd } from '@/lib/risorse/gps-lavoratori-ue/jsonLd';
import { getAutovalutazione } from '@/lib/risorse/autovalutazione-dati-rh';
import AutovalutazioneClient from '@/components/risorse/AutovalutazioneClient';
import RisorsaFaq from '@/components/risorse/RisorsaFaq';

/**
 * Auto-valutazione "Sei conforme sui dati dei dipendenti?".
 * Route: /[locale]/risorse/autovalutazione-dati-dipendenti/ (slug localizzato via slug-map).
 * Tutto client-side: nessuna risposta lascia il browser.
 */

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

function safeLocale(locale: string): AppLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : ('it' as AppLocale);
}

const CANONICAL = '/risorse/autovalutazione-dati-dipendenti/';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = getAutovalutazione(locale);
  return {
    title: { absolute: `${c.heading} - GeoTapp` },
    description: c.intro.slice(0, 155),
    alternates: buildLocaleAlternates(locale, CANONICAL),
  };
}

export default async function AutovalutazionePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const rl = safeLocale(locale);
  const c = getAutovalutazione(rl);

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'GeoTapp', item: `https://geotapp.com/${rl}/` },
    { name: c.heading, item: absoluteLocalizedUrl(CANONICAL, rl) },
  ]);

  const hrefs = {
    mappa: localizePath('/risorse/gps-lavoratori-ue/', rl),
    generatore: localizePath('/risorse/generatore-informativa-gps/', rl),
    conservazione: localizePath('/risorse/politica-conservazione-dati/', rl),
    blog: `/${rl}/blog/`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="bg-white min-h-screen text-slate-900 font-sans">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-5 pb-16">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">{c.heading}</h1>
          <p className="text-slate-600 leading-relaxed mb-8">{c.intro}</p>
          <AutovalutazioneClient locale={rl} contenuto={c} hrefs={hrefs} />
        </div>
        <RisorsaFaq title={c.faq.title} items={c.faq.items} />
      </div>
    </>
  );
}
