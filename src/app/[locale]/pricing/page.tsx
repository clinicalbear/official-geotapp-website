

import type { Metadata } from 'next';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import {
  EUR_PRICES,
  convertEurToLocale,
  getCurrencyForLocale,
} from '@/lib/pricing';
import type { AppLocale } from '@/lib/i18n/config';
import UpdatedOnLine, { updatedIsoFor } from '@/components/seo/UpdatedOnLine';

const PRICING_SCHEMA_NAME: Record<string, string> = {
  it: 'Prezzi GeoTapp', en: 'GeoTapp Pricing', de: 'GeoTapp Preise',
  nl: 'GeoTapp Prijzen', fr: 'Tarifs GeoTapp', es: 'Precios GeoTapp',
  pt: 'Preços GeoTapp', da: 'GeoTapp Priser', sv: 'GeoTapp Priser',
  nb: 'GeoTapp Priser', ru: 'Цены GeoTapp',
};

function buildPricingSchema(locale: AppLocale) {
  const priceCurrency = getCurrencyForLocale(locale);
  const trackerMonthly = convertEurToLocale(
    EUR_PRICES.tracker.tier1.perSeatMonthly,
    locale,
  );
  const flowSolo = convertEurToLocale(EUR_PRICES.flow.solo.monthly, locale);
  const flowTeam = convertEurToLocale(EUR_PRICES.flow.team.monthly, locale);
  const flowBusiness = convertEurToLocale(
    EUR_PRICES.flow.business.monthly,
    locale,
  );
  const fmt = (n: number) => n.toFixed(2);

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'GeoTapp Pricing',
    // Freschezza per AI/Google: data vera dell'ultimo commit su questa pagina
    // (vedi src/lib/seo/content-dates.ts), non la data di build.
    'dateModified': updatedIsoFor('pricing'),
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'item': {
            '@type': 'SoftwareApplication',
            'name': 'GeoTapp TimeTracker',
            'applicationCategory': 'BusinessApplication',
            'operatingSystem': 'Android, iOS',
            'offers': {
              '@type': 'Offer',
              'price': fmt(trackerMonthly.amount),
              'priceCurrency': priceCurrency,
              'priceSpecification': {
                '@type': 'UnitPriceSpecification',
                'price': fmt(trackerMonthly.amount),
                'priceCurrency': priceCurrency,
                'unitText': 'per user per month',
                'billingIncrement': 1,
                'referenceQuantity': { '@type': 'QuantitativeValue', 'value': 1, 'unitCode': 'MON' },
              },
            },
          },
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'item': {
            '@type': 'SoftwareApplication',
            'name': 'GeoTapp Flow Solo',
            'applicationCategory': 'BusinessApplication',
            'operatingSystem': 'Web',
            'offers': {
              '@type': 'Offer',
              'price': fmt(flowSolo.amount),
              'priceCurrency': priceCurrency,
              'priceSpecification': {
                '@type': 'UnitPriceSpecification',
                'price': fmt(flowSolo.amount),
                'priceCurrency': priceCurrency,
                'unitText': 'per month',
                'referenceQuantity': { '@type': 'QuantitativeValue', 'value': 1, 'unitCode': 'MON' },
              },
            },
          },
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'item': {
            '@type': 'SoftwareApplication',
            'name': 'GeoTapp Flow Team',
            'applicationCategory': 'BusinessApplication',
            'operatingSystem': 'Web',
            'offers': {
              '@type': 'Offer',
              'price': fmt(flowTeam.amount),
              'priceCurrency': priceCurrency,
            },
          },
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'item': {
            '@type': 'SoftwareApplication',
            'name': 'GeoTapp Flow Business',
            'applicationCategory': 'BusinessApplication',
            'operatingSystem': 'Web',
            'offers': {
              '@type': 'Offer',
              'price': fmt(flowBusiness.amount),
              'priceCurrency': priceCurrency,
            },
          },
        },
      ],
    },
  };
}

function buildPricingFAQ(locale: AppLocale): Record<string, object> {
  const monthlyRate = convertEurToLocale(
    EUR_PRICES.tracker.tier1.perSeatMonthly,
    locale,
  ).formatted;
  const annualRate = convertEurToLocale(
    EUR_PRICES.tracker.tier1.perSeatAnnual,
    locale,
  ).formatted;
  const fiveOpsAnnual = convertEurToLocale(
    EUR_PRICES.tracker.tier1.perSeatAnnual * 5,
    locale,
  ).formatted;
  const fiveOpsMonthly = convertEurToLocale(
    (EUR_PRICES.tracker.tier1.perSeatAnnual * 5) / 12,
    locale,
  ).formatted;

  return {
    it: {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'GeoTapp ha una prova gratuita?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. La prova dura 14 giorni e non chiede la carta di credito.' } },
        { '@type': 'Question', name: 'Quanto costa GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: `GeoTapp Flow, il pannello web, costa 39 € al mese con il piano Solo, 99 € con Team e 199 € con Business (390, 990 e 1.990 € se paghi l'anno in un'unica soluzione). Le postazioni dell'app TimeTracker si aggiungono a parte: ${monthlyRate} per operatore al mese fino a 25, 2,50 € dalla ventiseiesima. Prezzi IVA esclusa.` } },
        { '@type': 'Question', name: 'Quanto costa per una squadra di 5 operatori?', acceptedAnswer: { '@type': 'Answer', text: `Al piano Flow scelto si aggiungono 5 postazioni TimeTracker: ${fiveOpsMonthly} al mese, ${fiveOpsAnnual} l'anno se paghi l'anno intero. Non ci sono costi di attivazione.` } },
        { '@type': 'Question', name: "C'è una durata minima?", acceptedAnswer: { '@type': 'Answer', text: "Sì. L'abbonamento dura almeno 12 mesi, pagabili in un'unica soluzione o in rate mensili. Puoi passare a un piano superiore quando vuoi dal pannello." } },
        { '@type': 'Question', name: 'Sono previsti costi nascosti?', acceptedAnswer: { '@type': 'Answer', text: 'No. Supporto e aggiornamenti sono compresi, e GeoTapp Verifier, con cui i tuoi clienti verificano i report, è gratuito.' } },
      ],
    },
    en: {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Does GeoTapp have a free trial?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The trial lasts 14 days and does not ask for a credit card.' } },
        { '@type': 'Question', name: 'How much does GeoTapp cost?', acceptedAnswer: { '@type': 'Answer', text: `GeoTapp Flow, the web panel, costs €39 a month on the Solo plan, €99 on Team and €199 on Business (€390, €990 and €1,990 if you pay for the year in one go). TimeTracker app seats are added separately: ${monthlyRate} per operator per month up to 25, €2.50 from the 26th. Prices exclude VAT.` } },
        { '@type': 'Question', name: 'How much for a crew of 5 operators?', acceptedAnswer: { '@type': 'Answer', text: `On top of the Flow plan you choose, 5 TimeTracker seats come to ${fiveOpsMonthly} a month, or ${fiveOpsAnnual} a year if you pay for the whole year. There are no activation fees.` } },
        { '@type': 'Question', name: 'Is there a minimum term?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The subscription lasts at least 12 months, payable in one annual payment or in monthly instalments. You can move up to a higher plan whenever you like from the management panel.' } },
        { '@type': 'Question', name: 'Are there any hidden fees?', acceptedAnswer: { '@type': 'Answer', text: 'No. Support and updates are included, and GeoTapp Verifier, which your clients use to check reports, is free.' } },
      ],
    },
  };
}

const PRICING_BREADCRUMB: Record<string, object> = {
  it: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Prezzi', item: 'https://geotapp.com/it/pricing/' }] },
  en: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://geotapp.com/en/pricing/' }] },
  de: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Preise', item: 'https://geotapp.com/de/preise/' }] },
  fr: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Tarifs', item: 'https://geotapp.com/fr/tarifs/' }] },
  es: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Precios', item: 'https://geotapp.com/es/precios/' }] },
  nl: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Prijzen', item: 'https://geotapp.com/nl/tarieven/' }] },
  pt: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Preços', item: 'https://geotapp.com/pt/precos/' }] },
  da: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Priser', item: 'https://geotapp.com/da/priser/' }] },
  sv: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Priser', item: 'https://geotapp.com/sv/priser/' }] },
  nb: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Priser', item: 'https://geotapp.com/nb/priser/' }] },
  ru: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Цены', item: 'https://geotapp.com/ru/tseny/' }] },
};

const PRICING_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Prezzi GeoTapp - Piani e abbonamenti | GeoTapp', description: 'Scopri i piani GeoTapp: prova gratuita 14 giorni, abbonamenti per team con timbratura GPS, gestione turni e verifica report. Nessun costo nascosto.' },
  en: { title: 'GeoTapp pricing: plans for field teams, 14-day free trial', description: 'Office plans for Flow, a seat for every worker on TimeTracker, 14 days free without a card. See what each plan includes before you start.' },
  de: { title: 'GeoTapp Preise - Pläne & Abonnements | GeoTapp', description: 'Entdecken Sie GeoTapp-Pläne: 14 Tage kostenlos testen, monatliche Abonnements für Teams mit GPS-Zeiterfassung, Schichtverwaltung und Berichtsprüfung.' },
  fr: { title: 'Tarifs GeoTapp - Plans et abonnements | GeoTapp', description: 'Découvrez les plans GeoTapp : plan de base gratuit, abonnements mensuels pour équipes avec pointage GPS, gestion des horaires et vérification des rapports.' },
  es: { title: 'Precios GeoTapp - Planes y suscripciones | GeoTapp', description: 'Conoce los planes GeoTapp: prueba gratuita 14 días, suscripciones mensuales para equipos con fichaje GPS, gestión de turnos y verificación de informes.' },
  pt: { title: 'Preços GeoTapp - Planos e subscrições | GeoTapp', description: 'Planos GeoTapp: avaliação 14 dias grátis, subscrições mensais para equipas com ponto GPS, turnos e relatórios verificáveis.' },
  nl: { title: 'GeoTapp Prijzen - Plannen & abonnementen | GeoTapp', description: 'Ontdek GeoTapp-plannen: 14 dagen gratis proberen, maandelijkse abonnementen voor teams met GPS-tijdregistratie, planningsbeheer en rapportverificatie.' },
  ru: { title: 'Цены GeoTapp, Тарифы и подписки | GeoTapp', description: 'Изучите планы GeoTapp: бесплатный базовый план, ежемесячные подписки для команд с GPS-учётом времени, управлением сменами и проверкой отчётов.' },
  da: { title: 'GeoTapp Priser - Planer og abonnementer | GeoTapp', description: 'Udforsk GeoTapp-planer: 14 dages gratis prøveperiode, månedlige abonnementer for teams med GPS-tidsregistrering, vagtplanlægning og rapportverificering.' },
  sv: { title: 'GeoTapp Priser - Planer och abonnemang | GeoTapp', description: 'Utforska GeoTapp-planer: 14 dagars gratis provperiod, månadsabonnemang för team med GPS-tidregistrering, schemaläggning och rapportverifiering.' },
  nb: { title: 'GeoTapp Priser - Planer og abonnementer | GeoTapp', description: 'Utforsk GeoTapp-planer: 14 dagers gratis prøveperiode, månedlige abonnementer for team med GPS-tidsregistrering, planlegging av vakter og rapportverifisering.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = PRICING_META[locale] ?? PRICING_META.en;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: buildLocaleAlternates(locale, '/pricing/'),
    openGraph: {
      url: buildCanonicalUrl(locale, '/pricing/'),
      type: 'website',
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: meta.title }],
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

import PricingPage from '../../pricing/page';

export default async function LocalePricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const pricingFaq = buildPricingFAQ(locale as AppLocale);
  const faq = pricingFaq[locale] ?? pricingFaq['en'];
  const breadcrumb = PRICING_BREADCRUMB[locale] ?? {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: `https://geotapp.com/${locale}/pricing/` },
    ],
  };
  const pricingSchema = buildPricingSchema(locale as AppLocale);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...pricingSchema, name: PRICING_SCHEMA_NAME[locale] ?? PRICING_SCHEMA_NAME.en }) }} />
      {faq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />}
      <PricingPage />
      <UpdatedOnLine pageKey="pricing" locale={locale as AppLocale} />
    </>
  );
}
