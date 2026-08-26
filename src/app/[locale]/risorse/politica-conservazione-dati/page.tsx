import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { getPaesiAutorita } from '@/lib/risorse/gps-lavoratori-ue/derive';
import { absoluteLocalizedUrl, buildBreadcrumbJsonLd } from '@/lib/risorse/gps-lavoratori-ue/jsonLd';
import { getConservazione } from '@/lib/risorse/conservazione-dati-rh';
import ConservazioneClient from '@/components/risorse/ConservazioneClient';
import PannelloStrumento from '@/components/risorse/PannelloStrumento';
import RisorsaFaq from '@/components/risorse/RisorsaFaq';
import LicenzaContenuto from '@/components/LicenzaContenuto';
import '../tside.css';
import './l-page.css';

/**
 * Generatore "Politica di conservazione dei dati RH".
 * Route: /[locale]/risorse/politica-conservazione-dati/ (slug localizzato via slug-map).
 * Tutto client-side: i dati e il logo non lasciano il browser.
 *
 * Vestito "direzione L" (docs/redesign-sito-2026-07/esplorazione/risorsa-strumento.html),
 * slug .lp-risorsa-strumento: la logica di ConservazioneClient resta intatta, cambia
 * solo la cornice (testata scura .ph, form scuro in .sec, FAQ, licenza).
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
    openGraph: {
      url: buildCanonicalUrl(locale, CANONICAL),
      type: 'website',
      title: `${c.heading} - GeoTapp`,
      description: c.intro.slice(0, 155),
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: c.heading }],
    },
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
  const fullDict = getDictionary(rl);
  const paesi = getPaesiAutorita(rl).map((p) => ({
    id: p.codiceISO,
    nome: p.nomi?.[rl] ?? p.nome,
  }));

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'GeoTapp', item: `https://geotapp.com/${rl}/` },
    { name: c.heading, item: absoluteLocalizedUrl(CANONICAL, rl) },
  ]);

  const homeHref = `/${rl}/`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="lp-l lp-risorsa-strumento">
        {/* ── testata scura ── */}
        <section className="ph">
          <div className="crumb">
            <div className="w">
              <Link href={homeHref}>GeoTapp</Link> / {fullDict.navbar.resources} / {c.heading}
            </div>
          </div>
          <div className="w">
            <p className="kk k"><s></s>{fullDict.navbar.resources}</p>
            <h1>{c.heading}</h1>
            <p className="lede">{c.intro}</p>
            <div className="acts">
              <a className="b1" href="#tool">{c.genera}</a>
            </div>
          </div>
        </section>

        {/* ── strumento: form scuro, logica intatta ── */}
        <section className="sec">
          <div className="w" id="tool">
            <div className="tool">
              <ConservazioneClient locale={rl} contenuto={c} paesi={paesi} />
              <PannelloStrumento tool="conservazione" locale={rl} />
            </div>
          </div>
        </section>

        <section className="fq fq-wrap">
          <div className="w">
            <RisorsaFaq title={c.faq.title} items={c.faq.items} />
          </div>
        </section>

        <LicenzaContenuto locale={rl} />
      </div>
    </>
  );
}
