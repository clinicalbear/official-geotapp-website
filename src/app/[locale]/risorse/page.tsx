import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { JsonLd } from '@/components/seo/JsonLd';
import LNastro from '@/components/LNastro';
import './l-page.css';

/**
 * Hub "Risorse": vetrina di tutti gli strumenti/risorse gratuiti del sito
 * (GPS lavoratori UE, calcolatore ROI, sondaggio...). Pagina data-driven:
 * aggiungere una risorsa = aggiungere una voce a CARDS + la sua chiave nel
 * dizionario `risorseHub.cards`. Slug "risorse" già localizzato via slug-map
 * (en: resources, de: ressourcen, ...).
 *
 * Vestita nella direzione L (docs/redesign-sito-2026-07/esplorazione/risorse.html):
 * griglia ".res" a filo per le card, FAQ ".fq" con <details>. Il FAQPage
 * JSON-LD è ricostruito qui (non si usa <RisorsaFaq/> in questa pagina: quel
 * componente resta invariato perché è condiviso con le pagine figlie di
 * /risorse/, non ancora convertite).
 *
 * Route: /[locale]/risorse/ .
 */

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

function safeLocale(locale: string): AppLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : ('it' as AppLocale);
}

// Ordine e destinazioni delle card; testi (title/desc) dal dizionario per chiave.
const CARDS = [
  { key: 'gps', path: '/risorse/gps-lavoratori-ue/' },
  { key: 'dossier', path: '/risorse/dossier-conformita/' },
  { key: 'autovalutazione', path: '/risorse/autovalutazione-dati-dipendenti/' },
  { key: 'generatore', path: '/risorse/generatore-informativa-gps/' },
  { key: 'conservazione', path: '/risorse/politica-conservazione-dati/' },
  { key: 'sanzioni', path: '/risorse/sanzioni-gps/' },
  { key: 'osservatorio', path: '/risorse/osservatorio/' },
  { key: 'indice', path: '/risorse/indice-sorveglianza/' },
  { key: 'roi', path: '/roi-calculator/' },
  { key: 'survey', path: '/survey/' },
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(safeLocale(locale)).risorseHub;
  return {
    title: { absolute: dict.metaTitle },
    description: dict.metaDesc,
    alternates: buildLocaleAlternates(locale, '/risorse/'),
    openGraph: {
      url: buildCanonicalUrl(locale, '/risorse/'),
      type: 'website',
      title: dict.metaTitle,
      description: dict.metaDesc,
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: dict.metaTitle }],
    },
  };
}

export default async function RisorseHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = safeLocale(locale);
  const dict = getDictionary(resolvedLocale);
  const hub = dict.risorseHub;
  const getLink = (path: string) => localizePath(path, resolvedLocale);

  const faqItems = hub.faq?.items ?? [];
  const faqSchema = faqItems.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((it) => ({
          '@type': 'Question',
          name: it.q,
          acceptedAnswer: { '@type': 'Answer', text: it.a },
        })),
      }
    : null;

  return (
    <div className="lp-l lp-risorse">
      <section className="ph">
        <div className="w">
          <p className="kk k"><s />{dict.navbar.resources}</p>
          <h1>{hub.h1}</h1>
          <p className="lede">{hub.intro}</p>
          <div className="acts">
            <Link className="b1" href={getLink('/trial')}>{dict.landing.hero_cta_primary}</Link>
            <Link className="b2" href={getLink('/pricing')}>{dict.navbar.pricing}</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="w">
          <div className="res">
            {CARDS.map(({ key, path }, i) => {
              const card = hub.cards[key];
              return (
                <Link key={key} href={getLink(path)} className={`r d${(i % 4) + 1}`}>
                  <span className="nn">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <span className="go" aria-hidden="true">&rarr;</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <LNastro />

      {faqItems.length > 0 && (
        <section className="fq">
          <div className="w">
            <div className="g">
              <h2>{hub.faq.title}</h2>
              <div>
                {faqItems.map((item, i) => (
                  <details key={i}>
                    <summary>{item.q}</summary>
                    <div className="ct"><p>{item.a}</p></div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      {faqSchema && <JsonLd data={faqSchema} />}

      <section className="end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/bg2.webp" alt="" loading="lazy" />
        <div className="ov" />
        <div className="w">
          <h2 className="r" dangerouslySetInnerHTML={{ __html: dict.home_sections.footer_cta.title }} />
          <p className="r d1">{dict.home_sections.footer_cta.subtitle}</p>
          <div className="acts r d2">
            <Link className="b1" href={getLink('/trial')}>{dict.landing.hero_cta_primary}</Link>
            <Link className="b2" href={getLink('/contact')}>{dict.navbar.contact}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
