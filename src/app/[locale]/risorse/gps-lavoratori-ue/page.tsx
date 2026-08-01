import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { getAllStati } from '@/lib/risorse/gps-lavoratori-ue';
import {
  buildBreadcrumbItems,
  buildBreadcrumbJsonLd,
} from '@/lib/risorse/gps-lavoratori-ue/jsonLd';
import SelettorePaesiClient, {
  type PaeseSelettore,
} from '@/components/risorse/SelettorePaesiClient';
import EmbedCodeBox from '@/components/risorse/EmbedCodeBox';
import RisorsaFaq from '@/components/risorse/RisorsaFaq';

/**
 * Pagina-selettore (landing dello strumento) della risorsa "GPS sui lavoratori in UE".
 *
 * Route: /[locale]/risorse/gps-lavoratori-ue/ . Mostra la mappa cliccabile + un
 * <select> di fallback; ogni paese punta allo slug LOCALIZZATO della sua scheda.
 *
 * Vestito "direzione L" (docs/redesign-sito-2026-07/esplorazione/risorsa-paese.html),
 * slug .lp-risorsa-paese: la mappa e i dati per paese (SelettorePaesiClient,
 * EuropaMappa) restano intatti, cambia solo la cornice attorno.
 */

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

function safeLocale(locale: string): AppLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : ('it' as AppLocale);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(safeLocale(locale)).risorseGps;
  return {
    title: { absolute: dict.metaTitleSelettore },
    description: dict.metaDescSelettore,
    alternates: buildLocaleAlternates(locale, '/risorse/gps-lavoratori-ue/'),
    openGraph: {
      url: buildCanonicalUrl(locale, '/risorse/gps-lavoratori-ue/'),
      type: 'website',
      title: dict.metaTitleSelettore,
      description: dict.metaDescSelettore,
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: dict.metaTitleSelettore }],
    },
  };
}

export default async function SelettorePaesiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = safeLocale(locale);
  const fullDict = getDictionary(resolvedLocale);
  const dict = fullDict.risorseGps;

  const countries: PaeseSelettore[] = getAllStati(resolvedLocale).map((s) => ({
    slugCanonico: s.slugCanonico,
    codiceISO: s.codiceISO,
    nome: s.nome,
    bandiera: s.bandiera,
    stato: s.stato,
    href: localizePath(
      `/risorse/gps-lavoratori-ue/${s.slugCanonico}/`,
      resolvedLocale,
    ),
  }));

  const homeHref = `/${resolvedLocale}/`;
  const trialUrl = `/${resolvedLocale}/trial/`;

  // Structured data: BreadcrumbList (Home -> Strumento).
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(
    buildBreadcrumbItems(resolvedLocale, dict.h1Selettore),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="lp-l lp-risorsa-paese">
        {/* ── testata scura ── */}
        <section className="ph">
          <div className="crumb">
            <div className="w">
              <Link href={homeHref}>GeoTapp</Link> / {fullDict.navbar.resources} / {dict.h1Selettore}
            </div>
          </div>
          <div className="w">
            <p className="kk k"><s></s>{fullDict.navbar.resources}</p>
            <h1>{dict.h1Selettore}</h1>
            <p className="lede">{dict.introSelettore}</p>
            <div className="acts">
              <a className="b1" href="#selettore">{dict.scegliPaese}</a>
            </div>
          </div>
        </section>

        {/* ── mappa + selettore: intatti, solo incorniciati ── */}
        <section className="sec" id="selettore">
          <div className="w">
            <SelettorePaesiClient
              countries={countries}
              dict={dict}
              h1={dict.h1Selettore}
            />

            {/* Lista paesi server-rendered come FALLBACK CRAWLABILE della mappa JS.
                La mappa (SelettorePaesiClient) e' interattiva ma i suoi link vivono in
                JS: i crawler non li seguono, quindi le pagine per-paese (le piu' citate
                dagli AI, es. gps-workers-eu/hungary) restavano orfane di link interni e
                ricevevano autorita' solo dalla sitemap. Questi <Link> HTML instradano
                l'autorita' interna a ogni scheda-paese. Fix 16/07/2026. */}
            <nav aria-label={dict.h1Selettore} style={{ marginTop: 44 }}>
              <ul className="rows r d1" style={{ display: 'flex', flexWrap: 'wrap', gap: '0 28px' }}>
                {countries.map((c) => (
                  <li key={c.slugCanonico} style={{ padding: '10px 0 10px 22px', flex: '0 0 auto' }}>
                    <Link href={c.href}>{c.bandiera} {c.nome}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        <section className="sec warm">
          <div className="w">
            <EmbedCodeBox
              embedUrl={`https://geotapp.com/embed/${resolvedLocale}/gps-lavoratori-ue/`}
              pageUrl={`https://geotapp.com${localizePath('/risorse/gps-lavoratori-ue/', resolvedLocale)}`}
              pageTitle={dict.h1Selettore}
              labels={fullDict.embedStrumento}
            />
          </div>
        </section>

        <section className="fq fq-wrap">
          <div className="w">
            <RisorsaFaq title={dict.faq.title} items={dict.faq.items} />
          </div>
        </section>

        {/* ── chiusura fotografica ── */}
        <section className="end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="bg" src="/bg3.webp" alt="" loading="lazy" />
          <div className="ov"></div>
          <div className="w">
            <h2 className="r">{dict.ctaTitolo}</h2>
            <p className="r d1">{dict.ctaTesto}</p>
            <div className="acts r d2">
              <a className="b1" href={trialUrl}>{dict.ctaBottone}</a>
              <a className="b2" href="#selettore">{dict.scegliPaese}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
