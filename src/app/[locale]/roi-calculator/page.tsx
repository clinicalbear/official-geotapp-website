import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import RoiCalculatorClient from '@/components/roi-calculator/RoiCalculatorClient';
import LNastro from '@/components/LNastro';
import './l-page.css';

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : ('it' as AppLocale);
  const dict = getDictionary(safeLocale);
  return {
    title: { absolute: dict.roi.meta_title },
    description: dict.roi.meta_desc,
    alternates: buildLocaleAlternates(locale, '/roi-calculator/'),
  };
}

export default async function RoiCalculatorPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ embed?: string; currency?: string }>;
}) {
  const { locale } = await params;
  const { embed, currency } = await searchParams;
  const safeLocale = (SUPPORTED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AppLocale)
    : ('it' as AppLocale);
  const dict = getDictionary(safeLocale);
  const trialUrl = `/${safeLocale}/trial/`;
  const getLink = (path: string) => localizePath(path, safeLocale);

  // USD opt-in for US-facing visitors. ?currency=usd shows the calculator in
  // dollars (EUR base amounts auto-converted at 1.10x). Useful for FLSA blog
  // cluster to demo ROI in dollars without forking the calculator route.
  const safeCurrency: 'EUR' | 'USD' = currency?.toLowerCase() === 'usd' ? 'USD' : 'EUR';
  const isEmbed = embed === '1';

  // Contenuto SEO server-rendered (intro + FAQ): la pagina era un puro calcolatore
  // client, quindi "thin" per i crawler (ranking pos 14-88). Intro discorsiva +
  // FAQ con schema FAQPage danno contenuto crawlabile e copertura long-tail.
  // Nascosto in modalità embed (iframe nel blog).
  const roi = dict.roi as typeof dict.roi & {
    intro?: string; faq_title?: string;
    faq?: { q: string; a: string }[]; pricing_link?: string;
  };
  const faqSchema = roi.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: roi.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  // Modalità embed (iframe nel blog): resta esattamente il calcolatore nudo,
  // nel suo vestito chiaro originale, nessun chrome di pagina.
  if (isEmbed) {
    return (
      <RoiCalculatorClient
        dict={dict.roi}
        locale={safeLocale}
        trialUrl={trialUrl}
        embed
        currency={safeCurrency}
      />
    );
  }

  return (
    <div className="lp-l lp-roi">
      <section className="ph">
        <div className="w">
          <p className="kk k"><s />{dict.navbar.resources}</p>
          <h1>{roi.hero_title}</h1>
          <p className="lede">{roi.hero_subtitle}</p>
          <div className="acts">
            <a className="b1" href="#calcolatore">{roi.cta_calcola}</a>
            <Link className="b2" href={getLink('/pricing')}>{dict.navbar.pricing}</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="w">
          <RoiCalculatorClient
            dict={dict.roi}
            locale={safeLocale}
            trialUrl={trialUrl}
            embed={false}
            currency={safeCurrency}
          />
          {roi.intro && <p className="roi-intro">{roi.intro}</p>}
        </div>
      </section>

      <LNastro />

      {roi.faq?.length ? (
        <section className="fq">
          <div className="w">
            <div className="g">
              <h2>{roi.faq_title}</h2>
              <div>
                {roi.faq.map((item, i) => (
                  <details key={i}>
                    <summary>{item.q}</summary>
                    <div className="ct"><p>{item.a}</p></div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}

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
