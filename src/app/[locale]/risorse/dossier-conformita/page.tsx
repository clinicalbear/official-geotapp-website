import type { Metadata } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { getDossierCopy } from '@/content/dossier-conformita';
import RisorsaAttribuzione from '@/components/risorse/RisorsaAttribuzione';
import RisorsaFaq from '@/components/risorse/RisorsaFaq';

/**
 * Dossier di conformità GeoTapp ("prova del lavoro, non sorveglianza").
 * Contenuto lungo per-locale in src/content/dossier-conformita/{locale}.ts
 * (fallback su 'it'). Route: /[locale]/risorse/dossier-conformita/.
 *
 * Vestito "direzione L", slug .lp-risorsa-strumento: testata (.ph) + corpo
 * lungo con la tipografia da articolo già pronta in l-mockup.css (.art .body),
 * dato che questa pagina è un dossier testuale e non un tool interattivo.
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
  const copy = await getDossierCopy(safeLocale(locale));
  return {
    title: { absolute: copy.metaTitle },
    description: copy.metaDesc,
    alternates: buildLocaleAlternates(locale, '/risorse/dossier-conformita/'),
  };
}

export default async function DossierConformitaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = safeLocale(locale);
  const copy = await getDossierCopy(resolvedLocale);
  const d = getDictionary(resolvedLocale);

  const homeHref = `/${resolvedLocale}/`;
  const risorseHref = localizePath('/risorse/', resolvedLocale);

  return (
    <div className="lp-l lp-risorsa-strumento">
      {/* ── testata scura ── */}
      <section className="ph">
        <div className="crumb">
          <div className="w">
            <Link href={homeHref}>GeoTapp</Link> / <Link href={risorseHref}>{d.navbar.resources}</Link> / {copy.h1}
          </div>
        </div>
        <div className="w">
          <p className="kk k"><s></s>{copy.badge}</p>
          <h1>{copy.h1}</h1>
          <p className="lede">{copy.subtitle}</p>
        </div>
      </section>

      {/* ── corpo del dossier: tipografia da articolo lungo già pronta (.art) ── */}
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

            <h2>{copy.sourcesTitle}</h2>
            <ul className="rows">
              {copy.sources.map((src, i) => (
                <li key={i}>{src}</li>
              ))}
            </ul>
            <p style={{ marginTop: 26, fontSize: 13.5, color: '#78836F' }}>{copy.lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* ── domande, che si aprono con calma ── */}
      {copy.faq && (
        <section className="fq fq-wrap">
          <div className="w">
            <RisorsaFaq title={copy.faq.title} items={copy.faq.items} />
          </div>
        </section>
      )}

      {/* ── attribuzione / citazione della pagina ── */}
      <section className="sec warm">
        <div className="wt">
          <RisorsaAttribuzione
            pageUrl={`https://geotapp.com${localizePath('/risorse/dossier-conformita/', resolvedLocale)}`}
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
