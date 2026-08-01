import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { localizePath } from '@/lib/i18n/locale-routing';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { absoluteLocalizedUrl, buildBreadcrumbJsonLd } from '@/lib/risorse/gps-lavoratori-ue/jsonLd';
import { getAutovalutazione } from '@/lib/risorse/autovalutazione-dati-rh';
import AutovalutazioneClient from '@/components/risorse/AutovalutazioneClient';
import PannelloStrumento from '@/components/risorse/PannelloStrumento';
import RisorsaFaq from '@/components/risorse/RisorsaFaq';
import LicenzaContenuto from '@/components/LicenzaContenuto';
import '../tside.css';
import './l-page.css';

/**
 * Auto-valutazione "Sei conforme sui dati dei dipendenti?".
 * Route: /[locale]/risorse/autovalutazione-dati-dipendenti/ (slug localizzato via slug-map).
 * Tutto client-side: nessuna risposta lascia il browser.
 *
 * Vestito "direzione L" (docs/redesign-sito-2026-07/esplorazione/risorsa-strumento.html),
 * slug .lp-risorsa-strumento: la logica del questionario (AutovalutazioneClient) resta
 * intatta, cambia solo la cornice attorno.
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
  const dict = getDictionary(rl);

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

  const homeHref = `/${rl}/`;
  const resourcesLabel = dict.navbar.resources;

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
              <Link href={homeHref}>GeoTapp</Link> / {resourcesLabel} / {c.heading}
            </div>
          </div>
          <div className="w">
            <p className="kk k"><s></s>{resourcesLabel}</p>
            <h1>{c.heading}</h1>
            <p className="lede">{c.intro}</p>
            <div className="acts">
              <a className="b1" href="#quiz">{c.vediRisultato}</a>
            </div>
          </div>
        </section>

        {/* ── il questionario: intatto, solo incorniciato ── */}
        <section className="sec">
          <div className="w" id="quiz">
            <div className="tool">
              <AutovalutazioneClient locale={rl} contenuto={c} hrefs={hrefs} />
              <PannelloStrumento tool="autovalutazione" locale={rl} />
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
