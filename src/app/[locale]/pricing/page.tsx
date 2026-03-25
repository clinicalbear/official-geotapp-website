// Overview: page.tsx
// Module: src > app > [locale] > pricing
// Purpose: documents intent and boundaries to speed up maintenance and reviews.
// Safety: keep permissions, tenancy isolation, and API/data compatibility unchanged unless explicitly required.

// Documentation Contract:
// - Boundaries: this file may orchestrate UI/data flow, but it must keep business invariants intact.
// - Security: preserve role/tenant checks and never broaden access scope implicitly.
// - Data Integrity: keep field names and payload schemas stable unless a migration is planned.
// - Compatibility: companyId/tenantId fallbacks may still be required for legacy records.
// - Performance: avoid extra roundtrips in hot paths and prefer incremental updates.
// - Error Handling: prefer graceful degradation over hard-fail in non-critical rendering paths.
// - UX Stability: keep deterministic ordering/filtering to avoid visual flicker/regressions.
// - Testing: update module tests when changing control flow, query composition, or serialization.
// - Operations: changes touching auth/rules/functions must stay aligned across apps.
// - Maintainability: keep additive changes whenever possible to reduce rollback risk.



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
            'price': '2.00',
            'priceCurrency': 'EUR',
            'priceSpecification': {
              '@type': 'UnitPriceSpecification',
              'price': '2.00',
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
            'price': '29.00',
            'priceCurrency': 'EUR',
            'priceSpecification': {
              '@type': 'UnitPriceSpecification',
              'price': '29.00',
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
            'price': '79.00',
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
            'price': '149.00',
            'priceCurrency': 'EUR',
          },
        },
      },
    ],
  },
};

const PRICING_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Prezzi GeoTapp — Piani e abbonamenti | GeoTapp', description: 'Scopri i piani GeoTapp: piano base gratuito, abbonamenti mensili per team con timbratura GPS, gestione turni e verifica report. Nessun costo nascosto.' },
  en: { title: 'GeoTapp Pricing — Plans & subscriptions | GeoTapp', description: 'Explore GeoTapp plans: free basic plan, monthly subscriptions for teams with GPS time tracking, shift management and report verification. No hidden fees.' },
  de: { title: 'GeoTapp Preise — Pläne & Abonnements | GeoTapp', description: 'Entdecken Sie GeoTapp-Pläne: kostenloser Basisplan, monatliche Abonnements für Teams mit GPS-Zeiterfassung, Schichtverwaltung und Berichtsprüfung.' },
  fr: { title: 'Tarifs GeoTapp — Plans et abonnements | GeoTapp', description: 'Découvrez les plans GeoTapp : plan de base gratuit, abonnements mensuels pour équipes avec pointage GPS, gestion des horaires et vérification des rapports.' },
  es: { title: 'Precios GeoTapp — Planes y suscripciones | GeoTapp', description: 'Conoce los planes GeoTapp: plan básico gratuito, suscripciones mensuales para equipos con fichaje GPS, gestión de turnos y verificación de informes.' },
  pt: { title: 'Preços GeoTapp — Planos e subscrições | GeoTapp', description: 'Descubra os planos GeoTapp: plano básico gratuito, subscrições mensais para equipas com marcação de ponto GPS, gestão de turnos e verificação de relatórios.' },
  nl: { title: 'GeoTapp Prijzen — Plannen & abonnementen | GeoTapp', description: 'Ontdek GeoTapp-plannen: gratis basisplan, maandelijkse abonnementen voor teams met GPS-tijdregistratie, planningsbeheer en rapportverificatie.' },
  ru: { title: 'Цены GeoTapp — Тарифы и подписки | GeoTapp', description: 'Изучите планы GeoTapp: бесплатный базовый план, ежемесячные подписки для команд с GPS-учётом времени, управлением сменами и проверкой отчётов.' },
  da: { title: 'GeoTapp Priser — Planer og abonnementer | GeoTapp', description: 'Udforsk GeoTapp-planer: gratis basisplan, månedlige abonnementer for teams med GPS-tidsregistrering, vagtplanlægning og rapportverificering.' },
  sv: { title: 'GeoTapp Priser — Planer och abonnemang | GeoTapp', description: 'Utforska GeoTapp-planer: gratis basplan, månadsabonnemang för team med GPS-tidregistrering, schemaläggning och rapportverifiering.' },
  nb: { title: 'GeoTapp Priser — Planer og abonnementer | GeoTapp', description: 'Utforsk GeoTapp-planer: gratis basisplan, månedlige abonnementer for team med GPS-tidsregistrering, planlegging av vakter og rapportverifisering.' },
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

export default async function LocalePricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRICING_SCHEMA) }}
      />
      <PricingPage />
    </>
  );
}
