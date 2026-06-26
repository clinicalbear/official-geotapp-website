import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { getPaesiAutorita } from '@/lib/risorse/gps-lavoratori-ue/derive';
import { absoluteLocalizedUrl, buildBreadcrumbJsonLd } from '@/lib/risorse/gps-lavoratori-ue/jsonLd';
import { getConservazione } from '@/lib/risorse/conservazione-dati-rh';
import ConservazioneClient from '@/components/risorse/ConservazioneClient';
import RisorsaFaq from '@/components/risorse/RisorsaFaq';

/**
 * Generatore "Politica di conservazione dei dati RH".
 * Route: /[locale]/risorse/politica-conservazione-dati/ (slug localizzato via slug-map).
 * Tutto client-side: i dati e il logo non lasciano il browser.
 */

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

function safeLocale(locale: string): AppLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : ('it' as AppLocale);
}

const CANONICAL = '/risorse/politica-conservazione-dati/';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = getConservazione(locale);
  return {
    title: { absolute: `${c.heading} - GeoTapp` },
    description: c.intro.slice(0, 155),
    alternates: buildLocaleAlternates(locale, CANONICAL),
  };
}

export default async function ConservazionePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const rl = safeLocale(locale);
  const c = getConservazione(rl);
  const paesi = getPaesiAutorita().map((p) => ({
    id: p.codiceISO,
    nome: p.nomi?.[rl] ?? p.nome,
  }));

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'GeoTapp', item: `https://geotapp.com/${rl}/` },
    { name: c.heading, item: absoluteLocalizedUrl(CANONICAL, rl) },
  ]);

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
          <ConservazioneClient locale={rl} contenuto={c} paesi={paesi} />
        </div>
        <RisorsaFaq title={c.faq.title} items={c.faq.items} />
      </div>
    </>
  );
}
