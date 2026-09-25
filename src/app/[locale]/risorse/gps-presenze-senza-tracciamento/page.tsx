import type { Metadata } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { absoluteLocalizedUrl, buildBreadcrumbJsonLd } from '@/lib/risorse/gps-lavoratori-ue/jsonLd';
import { getPresenzeCopy } from '@/content/gps-presenze-senza-tracciamento';
import RisorsaAttribuzione from '@/components/risorse/RisorsaAttribuzione';
import RisorsaFaq from '@/components/risorse/RisorsaFaq';
import { JsonLd } from '@/components/seo/JsonLd';

/**
 * Risorsa "GPS per le presenze senza tracciare i dipendenti" — risponde in
 * forma di articolo alla domanda che oggi gli assistenti AI (ChatGPT,
 * Perplexity) si fanno senza citare GeoTapp: se il GPS sui lavoratori si
 * possa usare per le presenze senza sorveglianza continua. Contenuto lungo
 * per-locale in src/content/gps-presenze-senza-tracciamento/{locale}.ts
 * (fallback su 'it'), scritto nativamente in ciascuna lingua, non tradotto
 * parola per parola. Route: /[locale]/risorse/gps-presenze-senza-tracciamento/
 * (slug localizzato via slug-map).
 *
 * Vestita "direzione L", slug .lp-risorsa-strumento: testata (.ph) + corpo
 * lungo con la tipografia da articolo già pronta in l-mockup.css (.art .body),
 * come dossier-conformita, dato che anche questa pagina è un dossier
 * testuale e non un tool interattivo. La tabella "cosa registra / cosa non
 * registra" è resa come due liste (h3 + ul) per riusare lo stile .art .body
 * esistente senza introdurre CSS nuovo e restare leggibile anche da mobile.
 */

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const CANONICAL = '/risorse/gps-presenze-senza-tracciamento/';
/** Data di pubblicazione/ultimo aggiornamento del contenuto (ISO), unica per tutte le lingue. */
const DATE_MODIFIED = '2026-09-25';

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
  const copy = await getPresenzeCopy(safeLocale(locale));
  return {
    title: { absolute: copy.metaTitle },
    description: copy.metaDesc,
    alternates: buildLocaleAlternates(locale, CANONICAL),
    openGraph: {
      url: buildCanonicalUrl(locale, CANONICAL),
      type: 'article',
      title: copy.metaTitle,
      description: copy.metaDesc,
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: copy.h1 }],
    },
  };
}

export default async function GpsPresenzeSenzaTracciamentoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = safeLocale(locale);
  const copy = await getPresenzeCopy(resolvedLocale);
  const d = getDictionary(resolvedLocale);

  const homeHref = `/${resolvedLocale}/`;
  const risorseHref = localizePath('/risorse/', resolvedLocale);
  const pageUrl = absoluteLocalizedUrl(CANONICAL, resolvedLocale);

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'GeoTapp', item: `https://geotapp.com/${resolvedLocale}/` },
    { name: d.navbar.resources, item: absoluteLocalizedUrl('/risorse/', resolvedLocale) },
    { name: copy.h1, item: pageUrl },
  ]);

  // Article + FAQPage restano distinti (RisorsaFaq emette già il proprio FAQPage):
  // qui solo headline/dateModified, il segnale che un assistente AI/Google usa
  // per capire quanto è recente la risposta.
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: copy.h1,
    description: copy.metaDesc,
    inLanguage: resolvedLocale,
    dateModified: DATE_MODIFIED,
    datePublished: DATE_MODIFIED,
    mainEntityOfPage: pageUrl,
    url: pageUrl,
    author: { '@id': 'https://geotapp.com/#organization' },
    publisher: { '@id': 'https://geotapp.com/#organization' },
  };

  // Risorse collegate: titoli/descrizioni riusano il dizionario risorseHub
  // (già localizzato in tutte le lingue), niente testo nuovo da tradurre qui.
  const RELATED: { key: 'gps' | 'generatore' | 'sanzioni' | 'dossier'; path: string }[] = [
    { key: 'gps', path: '/risorse/gps-lavoratori-ue/' },
    { key: 'generatore', path: '/risorse/generatore-informativa-gps/' },
    { key: 'sanzioni', path: '/risorse/sanzioni-gps/' },
    { key: 'dossier', path: '/risorse/dossier-conformita/' },
  ];

  return (
    <div className="lp-l lp-risorsa-strumento">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />

      {/* ── testata scura ── */}
      <section className="ph">
        <div className="crumb">
          <div className="w">
            <Link href={homeHref}>GeoTapp</Link> / <Link href={risorseHref}>{d.navbar.resources}</Link> / {copy.h1}
          </div>
        </div>
        <div className="w">
          <p className="kk k"><s></s>{d.navbar.resources}</p>
          <h1>{copy.h1}</h1>
          <p className="lede">{copy.lede}</p>
          <p style={{ marginTop: 18, fontSize: 13.5, opacity: 0.75 }}>{copy.updatedLabel}</p>
        </div>
      </section>

      {/* ── corpo dell'articolo: tipografia da articolo lungo già pronta (.art) ── */}
      <section className="sec">
        <div className="wt art">
          <div className="body">
            {copy.sections.map((section, i) => (
              <Fragment key={i}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </Fragment>
            ))}

            <h2>{copy.table.title}</h2>
            <h3>{copy.table.colLeft}</h3>
            <ul>
              {copy.table.left.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <h3>{copy.table.colRight}</h3>
            <ul>
              {copy.table.right.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h2>{copy.sourcesTitle}</h2>
            <ul className="rows">
              {copy.sources.map((src, i) => (
                <li key={i}>{src}</li>
              ))}
            </ul>
            <p style={{ marginTop: 26, fontSize: 13.5, color: '#475467' }}>{copy.disclaimer}</p>
          </div>
        </div>
      </section>

      {/* ── risorse collegate: mappa, generatore, calcolatore sanzioni, dossier ── */}
      <section className="sec">
        <div className="wt art">
          <div className="body">
            <h2>{copy.relatedTitle}</h2>
            <ul>
              {RELATED.map(({ key, path }) => {
                const card = d.risorseHub.cards[key];
                return (
                  <li key={key}>
                    <Link href={localizePath(path, resolvedLocale)}>{card.title}</Link> — {card.desc}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ── domande, che si aprono con calma ── */}
      <section className="fq fq-wrap">
        <div className="w">
          <RisorsaFaq title={copy.faq.title} items={copy.faq.items} />
        </div>
      </section>

      {/* ── attribuzione / citazione della pagina ── */}
      <section className="sec warm">
        <div className="wt">
          <RisorsaAttribuzione
            pageUrl={pageUrl}
            pageTitle={`${copy.h1} - GeoTapp`}
            contactHref={localizePath('/contact', resolvedLocale)}
            labels={d.attribuzione}
            anno={2026}
          />
        </div>
      </section>
    </div>
  );
}
