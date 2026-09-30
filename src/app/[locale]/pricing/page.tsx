

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
  nl: 'GeoTapp-prijzen', fr: 'Tarifs GeoTapp', es: 'Precios GeoTapp',
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
    de: {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Bietet GeoTapp eine kostenlose Testphase?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Die Testphase dauert 14 Tage und verlangt keine Kreditkarte.' } },
        { '@type': 'Question', name: 'Wie viel kostet GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: `GeoTapp Flow, das Web-Panel, kostet 39 € im Monat mit dem Tarif Solo, 99 € mit Team und 199 € mit Business (390, 990 und 1.990 €, wenn Sie das Jahr auf einmal zahlen). Die Plätze der TimeTracker-App kommen separat dazu: ${monthlyRate} pro Mitarbeiter und Monat bis zum 25. Platz, 2,50 € ab dem 26. Preise zzgl. USt.` } },
        { '@type': 'Question', name: 'Was kostet es für ein Team mit 5 Mitarbeitenden?', acceptedAnswer: { '@type': 'Answer', text: `Zum gewählten Flow-Tarif kommen 5 TimeTracker-Plätze: ${fiveOpsMonthly} im Monat, ${fiveOpsAnnual} im Jahr, wenn Sie das ganze Jahr zahlen. Es fallen keine Aktivierungsgebühren an.` } },
        { '@type': 'Question', name: 'Gibt es eine Mindestlaufzeit?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Das Abonnement läuft mindestens 12 Monate, zahlbar auf einmal oder in Monatsraten. In einen höheren Tarif wechseln Sie jederzeit im Verwaltungsbereich.' } },
        { '@type': 'Question', name: 'Gibt es versteckte Kosten?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Support und Updates sind enthalten, und GeoTapp Verifier, mit dem Ihre Kunden die Berichte prüfen, ist kostenlos.' } },
      ],
    },
    fr: {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'GeoTapp propose-t-il un essai gratuit ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. L\'essai dure 14 jours et ne demande pas de carte bancaire.' } },
        { '@type': 'Question', name: 'Combien coûte GeoTapp ?', acceptedAnswer: { '@type': 'Answer', text: `GeoTapp Flow, le panneau web, coûte 39 € par mois avec la formule Solo, 99 € avec Team et 199 € avec Business (390, 990 et 1 990 € si vous payez l\'année en une seule fois). Les postes de l\'application TimeTracker s\'ajoutent à part : ${monthlyRate} par opérateur et par mois jusqu\'au 25e poste, 2,50 € à partir du 26e. Prix hors TVA.` } },
        { '@type': 'Question', name: 'Combien pour une équipe de 5 opérateurs ?', acceptedAnswer: { '@type': 'Answer', text: `À la formule Flow choisie s\'ajoutent 5 postes TimeTracker : ${fiveOpsMonthly} par mois, ${fiveOpsAnnual} par an si vous payez l\'année entière. Il n\'y a pas de frais d\'activation.` } },
        { '@type': 'Question', name: 'Y a-t-il une durée minimale ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. L\'abonnement dure au moins 12 mois, payables en une seule fois ou en mensualités. Vous pouvez passer à une formule supérieure quand vous le souhaitez depuis le panneau de gestion.' } },
        { '@type': 'Question', name: 'Y a-t-il des frais cachés ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Le support et les mises à jour sont compris, et GeoTapp Verifier, avec lequel vos clients vérifient les rapports, est gratuit.' } },
      ],
    },
    nl: {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Heeft GeoTapp een gratis proefperiode?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. De proefperiode duurt 14 dagen en vraagt geen creditcard.' } },
        { '@type': 'Question', name: 'Wat kost GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: `GeoTapp Flow, het webpaneel, kost € 39 per maand met het plan Solo, € 99 met Team en € 199 met Business (€ 390, € 990 en € 1.990 als u het jaar in één keer betaalt). De plaatsen van de TimeTracker-app komen er apart bij: ${monthlyRate} per medewerker per maand tot 25, € 2,50 vanaf de zesentwintigste. Prijzen exclusief btw.` } },
        { '@type': 'Question', name: 'Wat kost het voor een ploeg van 5 medewerkers?', acceptedAnswer: { '@type': 'Answer', text: `Bij het gekozen Flow-plan komen 5 TimeTracker-plaatsen: ${fiveOpsMonthly} per maand, ${fiveOpsAnnual} per jaar als u het hele jaar betaalt. Er zijn geen activeringskosten.` } },
        { '@type': 'Question', name: 'Is er een minimale looptijd?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Het abonnement loopt minimaal 12 maanden, te betalen in één keer of in maandelijkse termijnen. U kunt op elk moment via het paneel overstappen op een hoger plan.' } },
        { '@type': 'Question', name: 'Zijn er verborgen kosten?', acceptedAnswer: { '@type': 'Answer', text: 'Nee. Ondersteuning en updates zijn inbegrepen, en GeoTapp Verifier, waarmee uw klanten de rapporten controleren, is gratis.' } },
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
  nl: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Tarieven', item: 'https://geotapp.com/nl/tarieven/' }] },
  pt: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Preços', item: 'https://geotapp.com/pt/precos/' }] },
  da: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Priser', item: 'https://geotapp.com/da/priser/' }] },
  sv: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Priser', item: 'https://geotapp.com/sv/priser/' }] },
  nb: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Priser', item: 'https://geotapp.com/nb/priser/' }] },
  ru: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Цены', item: 'https://geotapp.com/ru/tseny/' }] },
};

const PRICING_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Prezzi GeoTapp - Piani e abbonamenti | GeoTapp', description: 'Scopri i piani GeoTapp: prova gratuita 14 giorni, abbonamenti per team con timbratura GPS, gestione turni e verifica report. Nessun costo nascosto.' },
  en: { title: 'GeoTapp pricing: plans for field teams, 14-day free trial', description: 'Office plans for Flow, a seat for every worker on TimeTracker, 14 days free without a card. See what each plan includes before you start.' },
  de: { title: 'GeoTapp Preise: Tarife für Teams im Außendienst, 14 Tage kostenlos', description: 'Büro-Tarife für Flow, ein Platz pro Mitarbeiter im TimeTracker, 14 Tage kostenlos ohne Karte. Sehen Sie vor dem Start, was jeder Tarif enthält.' },
  fr: { title: 'Tarifs GeoTapp : formules pour équipes, essai de 14 jours', description: 'Formules bureau pour Flow, un poste par opérateur sur TimeTracker, 14 jours gratuits sans carte. Voyez ce que comprend chaque formule avant de commencer.' },
  es: { title: 'Precios GeoTapp - Planes y suscripciones | GeoTapp', description: 'Conoce los planes GeoTapp: prueba gratuita 14 días, suscripciones mensuales para equipos con fichaje GPS, gestión de turnos y verificación de informes.' },
  pt: { title: 'Preços GeoTapp - Planos e subscrições | GeoTapp', description: 'Planos GeoTapp: avaliação 14 dias grátis, subscrições mensais para equipas com ponto GPS, turnos e relatórios verificáveis.' },
  nl: { title: 'GeoTapp-prijzen - Abonnementen | GeoTapp', description: 'Ontdek de GeoTapp-abonnementen: 14 dagen gratis proberen, abonnementen voor teams met registratie met locatie, dienstbeheer en controle van rapporten. Geen verborgen kosten.' },
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
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';
import { localizeEurPricesDeep } from '@/lib/pricing';

export default async function LocalePricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const pricingFaq = buildPricingFAQ(locale as AppLocale);
  const faq = pricingFaq[locale] ?? (locale.startsWith('en-') ? localizeEnglishDeep(localizeEurPricesDeep(pricingFaq['en'], locale), locale) : pricingFaq['en']);
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
