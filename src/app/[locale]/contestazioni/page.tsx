import type { Metadata } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { absoluteLocalizedUrl, buildBreadcrumbJsonLd } from '@/lib/risorse/gps-lavoratori-ue/jsonLd';
import { getContestazioniCopy, LOCALES_CONTESTAZIONI } from '@/content/contestazioni';
import RisorsaFaq from '@/components/risorse/RisorsaFaq';
import DemoReportBanner from '@/components/DemoReportBanner';
import { JsonLd } from '@/components/seo/JsonLd';

/**
 * "Quando qualcuno contesta il lavoro: cosa cambia con GeoTapp": la stessa contestazione vista da
 * tre parti (azienda, chi lavora, committente), con un report vero da scaricare e verificare.
 * E' una pagina sul PROBLEMA; per le funzioni una a una c'e' /features. Contenuto per lingua in
 * src/content/contestazioni/{locale}.ts, scritto nativamente, non tradotto.
 *
 * DA PUBBLICARE SOLO CON LE 11 LINGUE. Fino ad allora:
 *  - le lingue senza contenuto rispondono 404 (dynamicParams = false), non una copia italiana;
 *  - gli hreflang elencano solo le lingue che esistono (qui sotto);
 *  - la pagina NON e' nella mappa del sito (middleware.ts) e nessun link la raggiunge.
 * A 11 su 11: aggiungere la mappa del sito, tornare a buildLocaleAlternates e collegare la barra
 * e la scheda della stampa (lib/press/data.ts).
 *
 * Vestita come le altre risorse (.lp-risorsa-strumento, .ph, .art .body, stile in l-mockup.css).
 */

export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES_CONTESTAZIONI.map((locale) => ({ locale }));
}

const CANONICAL = '/contestazioni/';
/** Data di pubblicazione/ultimo aggiornamento del contenuto (ISO), unica per tutte le lingue. */
const DATE_MODIFIED = '2026-10-27';

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
  const copy = await getContestazioniCopy(locale);
  if (!copy) return {};
  // hreflang solo per le lingue in cui la pagina esiste: elencarne altre darebbe 404 ai motori.
  const languages = Object.fromEntries(
    LOCALES_CONTESTAZIONI.map((l) => [l, buildCanonicalUrl(l, CANONICAL)]),
  ) as Record<string, string>;
  return {
    title: { absolute: copy.metaTitle },
    description: copy.metaDesc,
    alternates: { canonical: buildCanonicalUrl(locale, CANONICAL), languages },
    openGraph: {
      url: buildCanonicalUrl(locale, CANONICAL),
      type: 'article',
      title: copy.metaTitle,
      description: copy.metaDesc,
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: copy.h1 }],
    },
  };
}

export default async function ContestazioniPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = await getContestazioniCopy(locale);
  if (!copy) notFound();
  const resolvedLocale = safeLocale(locale);
  const d = getDictionary(resolvedLocale);

  const homeHref = `/${resolvedLocale}/`;
  const pageUrl = absoluteLocalizedUrl(CANONICAL, resolvedLocale);

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'GeoTapp', item: `https://geotapp.com/${resolvedLocale}/` },
    { name: copy.h1, item: pageUrl },
  ]);

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

  return (
    <div className="lp-l lp-risorsa-strumento">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />

      {/* ── testata scura ── */}
      <section className="ph">
        <div className="crumb">
          <div className="w">
            <Link href={homeHref}>GeoTapp</Link> / {copy.h1}
          </div>
        </div>
        <div className="w">
          <p className="kk k"><s></s>{copy.kicker}</p>
          <h1>{copy.h1}</h1>
          <p className="lede">{copy.lede}</p>
          <p style={{ marginTop: 18, fontSize: 13.5, opacity: 0.75 }}>{copy.updatedLabel}</p>
        </div>
      </section>

      {/* ── le tre scene ── */}
      <section className="sec">
        <div className="wt art">
          <div className="body">
            {copy.scenes.map((scene, i) => (
              <Fragment key={i}>
                <h2>{scene.heading}</h2>
                <p style={{ fontSize: '1.12em', fontStyle: 'italic' }}>{scene.scene}</p>
                <h3>{scene.haveTitle}</h3>
                <ul>
                  {scene.have.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
                <h3>{scene.changeTitle}</h3>
                <ul>
                  {scene.change.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
                {scene.extra && (
                  <>
                    <h3>{scene.extra.title}</h3>
                    {scene.extra.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── il report di esempio, da provare ── */}
      <section className="sec warm">
        <div className="wt art">
          <div className="body">
            <h2>{copy.sample.heading}</h2>
            {copy.sample.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div style={{ marginTop: 18 }}>
            <DemoReportBanner />
          </div>
        </div>
      </section>

      {/* ── cosa non fa ── */}
      <section className="sec">
        <div className="wt art">
          <div className="body">
            <h2>{copy.limits.heading}</h2>
            <ul>
              {copy.limits.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{copy.limits.formula}</p>
          </div>
        </div>
      </section>

      {/* ── domande, che si aprono con calma ── */}
      <section className="fq fq-wrap">
        <div className="w">
          <RisorsaFaq title={copy.faq.title} items={copy.faq.items} />
        </div>
      </section>

      {/* ── per andare avanti: funzioni, prezzi e, solo qui in fondo, la prova ── */}
      <section className="sec warm">
        <div className="wt art">
          <div className="body">
            <h2>{copy.next.heading}</h2>
            <p>{copy.next.paragraph}</p>
            <ul>
              <li><Link href={localizePath('/features', resolvedLocale)}>{copy.next.featuresLabel}</Link></li>
              <li><Link href={localizePath('/pricing', resolvedLocale)}>{copy.next.pricingLabel}</Link></li>
            </ul>
            <p style={{ marginTop: 22 }}>
              <strong>{d.landing.trial_cta_headline}</strong> {d.landing.sticky_cta_subtitle}.{' '}
              <Link href={localizePath('/trial', resolvedLocale)}>{d.navbar.cta} →</Link>
            </p>
            <p style={{ marginTop: 26, fontSize: 13.5, color: '#475467' }}>{copy.disclaimer}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
