

import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';

const PRICING_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'name': 'Prezzi GeoTapp',
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
            'price': '3.00',
            'priceCurrency': 'EUR',
            'priceSpecification': {
              '@type': 'UnitPriceSpecification',
              'price': '3.00',
              'priceCurrency': 'EUR',
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
            'price': '39.00',
            'priceCurrency': 'EUR',
            'priceSpecification': {
              '@type': 'UnitPriceSpecification',
              'price': '39.00',
              'priceCurrency': 'EUR',
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
            'price': '99.00',
            'priceCurrency': 'EUR',
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
            'price': '199.00',
            'priceCurrency': 'EUR',
          },
        },
      },
    ],
  },
};

const PRICING_FAQ: Record<string, object> = {
  it: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'GeoTapp ha una prova gratuita?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. GeoTapp offre una prova gratuita di 14 giorni senza carta di credito. I piani a pagamento partono da 3€ per operatore al mese (TimeTracker) e includono report sigillati, gestione multi-sito e sincronizzazione con Flow.' } },
      { '@type': 'Question', name: 'Quanto costa GeoTapp per una piccola impresa di pulizie?', acceptedAnswer: { '@type': 'Answer', text: 'Il piano TimeTracker parte da 3€ per operatore al mese (36€/anno per utente). Per un\'impresa con 5 operatori il costo annuale è di 180€, 15€ al mese. Non ci sono costi di attivazione né vincoli contrattuali minimi.' } },
      { '@type': 'Question', name: 'Posso cambiare piano in qualsiasi momento?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. Puoi passare da un piano all\'altro in qualsiasi momento dal pannello di gestione. Non ci sono penali per il cambio o la cancellazione.' } },
      { '@type': 'Question', name: 'Il piano include GeoTapp Flow e TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'I piani Team e Business includono sia GeoTapp Flow (pannello web per la gestione) sia GeoTapp TimeTracker (app mobile per i tecnici). Il piano base TimeTracker include solo l\'app mobile.' } },
      { '@type': 'Question', name: 'Sono previsti costi nascosti?', acceptedAnswer: { '@type': 'Answer', text: 'No. Il prezzo indicato è comprensivo di tutte le funzionalità del piano scelto. Non ci sono costi per supporto, aggiornamenti o utilizzo di GeoTapp Verifier da parte dei tuoi clienti.' } },
    ],
  },
  en: {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Does GeoTapp have a free trial?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. GeoTapp offers a 14-day free trial with no credit card required. Paid plans start from €3 per operator per month (TimeTracker) and include sealed reports, multi-site management and Flow sync.' } },
      { '@type': 'Question', name: 'Can I change plans at any time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. You can switch plans at any time from the management panel. There are no penalties for changing or cancelling.' } },
      { '@type': 'Question', name: 'Are there any hidden fees?', acceptedAnswer: { '@type': 'Answer', text: 'No. The listed price includes all features of the chosen plan. There are no additional costs for support, updates or your clients using GeoTapp Verifier.' } },
    ],
  },
};

const PRICING_BREADCRUMB: Record<string, object> = {
  it: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Prezzi', item: 'https://geotapp.com/it/pricing/' }] },
  en: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://geotapp.com/en/pricing/' }] },
  de: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Preise', item: 'https://geotapp.com/de/preise/' }] },
  fr: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Tarifs', item: 'https://geotapp.com/fr/tarifs/' }] },
  es: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' }, { '@type': 'ListItem', position: 2, name: 'Precios', item: 'https://geotapp.com/es/precios/' }] },
};

const PRICING_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Prezzi GeoTapp — Piani e abbonamenti | GeoTapp', description: 'Scopri i piani GeoTapp: prova gratuita 14 giorni, abbonamenti per team con timbratura GPS, gestione turni e verifica report. Nessun costo nascosto.' },
  en: { title: 'GeoTapp Pricing — Plans & subscriptions | GeoTapp', description: 'Explore GeoTapp plans: 14-day free trial, monthly subscriptions for teams with GPS time tracking, shift management and report verification. No hidden fees.' },
  de: { title: 'GeoTapp Preise — Pläne & Abonnements | GeoTapp', description: 'Entdecken Sie GeoTapp-Pläne: 14 Tage kostenlos testen, monatliche Abonnements für Teams mit GPS-Zeiterfassung, Schichtverwaltung und Berichtsprüfung.' },
  fr: { title: 'Tarifs GeoTapp — Plans et abonnements | GeoTapp', description: 'Découvrez les plans GeoTapp : plan de base gratuit, abonnements mensuels pour équipes avec pointage GPS, gestion des horaires et vérification des rapports.' },
  es: { title: 'Precios GeoTapp — Planes y suscripciones | GeoTapp', description: 'Conoce los planes GeoTapp: prueba gratuita 14 días, suscripciones mensuales para equipos con fichaje GPS, gestión de turnos y verificación de informes.' },
  pt: { title: 'Preços GeoTapp — Planos e subscrições | GeoTapp', description: 'Descubra os planos GeoTapp: avaliação gratuita 14 dias, subscrições mensais para equipas com marcação de ponto GPS, gestão de turnos e verificação de relatórios.' },
  nl: { title: 'GeoTapp Prijzen — Plannen & abonnementen | GeoTapp', description: 'Ontdek GeoTapp-plannen: 14 dagen gratis proberen, maandelijkse abonnementen voor teams met GPS-tijdregistratie, planningsbeheer en rapportverificatie.' },
  ru: { title: 'Цены GeoTapp — Тарифы и подписки | GeoTapp', description: 'Изучите планы GeoTapp: бесплатный базовый план, ежемесячные подписки для команд с GPS-учётом времени, управлением сменами и проверкой отчётов.' },
  da: { title: 'GeoTapp Priser — Planer og abonnementer | GeoTapp', description: 'Udforsk GeoTapp-planer: 14 dages gratis prøveperiode, månedlige abonnementer for teams med GPS-tidsregistrering, vagtplanlægning og rapportverificering.' },
  sv: { title: 'GeoTapp Priser — Planer och abonnemang | GeoTapp', description: 'Utforska GeoTapp-planer: 14 dagars gratis provperiod, månadsabonnemang för team med GPS-tidregistrering, schemaläggning och rapportverifiering.' },
  nb: { title: 'GeoTapp Priser — Planer og abonnementer | GeoTapp', description: 'Utforsk GeoTapp-planer: 14 dagers gratis prøveperiode, månedlige abonnementer for team med GPS-tidsregistrering, planlegging av vakter og rapportverifisering.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = PRICING_META[locale] ?? PRICING_META.en;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: buildLocaleAlternates(locale, '/pricing/'),
    openGraph: {
      url: `https://geotapp.com/${locale}/pricing/`,
      type: 'website',
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
  const faq = PRICING_FAQ[locale] ?? PRICING_FAQ['en'];
  const breadcrumb = PRICING_BREADCRUMB[locale] ?? {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: `https://geotapp.com/${locale}/pricing/` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PRICING_SCHEMA) }} />
      {faq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />}
      <PricingPage />
    </>
  );
}
