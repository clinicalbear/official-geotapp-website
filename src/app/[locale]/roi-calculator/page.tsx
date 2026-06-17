import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import RoiCalculatorClient from '@/components/roi-calculator/RoiCalculatorClient';

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

  return (
    <>
      <RoiCalculatorClient
        dict={dict.roi}
        locale={safeLocale}
        trialUrl={trialUrl}
        embed={isEmbed}
        currency={safeCurrency}
      />
      {!isEmbed && roi.faq?.length ? (
        <section className="bg-white">
          <div className="max-w-3xl mx-auto px-6 pb-20 pt-4">
            {roi.intro ? (
              <p className="text-base leading-relaxed text-slate-600 mb-12">{roi.intro}</p>
            ) : null}
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{roi.faq_title}</h2>
            <div className="space-y-8">
              {roi.faq.map((item, i) => (
                <div key={i}>
                  <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
          {faqSchema ? (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
          ) : null}
        </section>
      ) : null}
    </>
  );
}
