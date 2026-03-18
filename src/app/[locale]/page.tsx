// Overview: page.tsx
// Module: src > app > [locale]
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

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../page';

// Locale-specific titles and descriptions for the home page.
// Each title expresses the "verifiable work" concept in the target language —
// this is the SEO anchor keyword for all locale variants.
const LOCALE_META: Record<string, { title: string; description: string }> = {
  it: {
    title: 'GeoTapp | La piattaforma che rende il lavoro verificabile',
    description: 'Automatizza le timbrature, verifica la presenza sul posto e gestisci il personale in mobilità con GeoTapp. Prova la piattaforma SaaS sicura e integrata con Stripe.',
  },
  en: {
    title: 'GeoTapp | The platform that makes work verifiable',
    description: 'Automate time tracking, verify on-site attendance and manage your mobile workforce with GeoTapp. Try the secure SaaS platform integrated with Stripe.',
  },
  de: {
    title: 'GeoTapp | Die Plattform, die Arbeit verifizierbar macht',
    description: 'Automatisieren Sie die Zeiterfassung, verifizieren Sie die Anwesenheit vor Ort und verwalten Sie mobile Mitarbeiter mit GeoTapp — SaaS-Plattform mit Stripe.',
  },
  fr: {
    title: 'GeoTapp | La plateforme qui rend le travail vérifiable',
    description: 'Automatisez le pointage, vérifiez la présence sur site et gérez votre personnel mobile avec GeoTapp. Essayez la plateforme SaaS sécurisée intégrée à Stripe.',
  },
  es: {
    title: 'GeoTapp | La plataforma que hace el trabajo verificable',
    description: 'Automatiza el fichaje, verifica la presencia en el trabajo y gestiona tu personal móvil con GeoTapp. Prueba la plataforma SaaS segura integrada con Stripe.',
  },
  pt: {
    title: 'GeoTapp | A plataforma que torna o trabalho verificável',
    description: 'Automatize a marcação de ponto, verifique a presença no local e gira o pessoal móvel com GeoTapp. Experimente a plataforma SaaS segura integrada com Stripe.',
  },
  nl: {
    title: 'GeoTapp | Het platform dat werk verifieerbaar maakt',
    description: 'Automatiseer tijdregistratie, verifieer aanwezigheid op locatie en beheer mobiele medewerkers met GeoTapp. Veilig SaaS-platform geïntegreerd met Stripe.',
  },
  ru: {
    title: 'GeoTapp | Платформа, делающая работу верифицируемой',
    description: 'Автоматизируйте учёт рабочего времени, верифицируйте присутствие на объекте и управляйте мобильным персоналом с GeoTapp. SaaS-платформа с интеграцией Stripe.',
  },
  da: {
    title: 'GeoTapp | Platformen der gør arbejdet verificerbart',
    description: 'Automatiser tidsregistrering, verificér fremmøde på stedet og administrer mobilt personale med GeoTapp. Sikker SaaS-platform integreret med Stripe.',
  },
  sv: {
    title: 'GeoTapp | Plattformen som gör arbetet verifierbart',
    description: 'Automatisera tidregistrering, verifiera närvaro på plats och hantera mobil personal med GeoTapp. Säker SaaS-plattform integrerad med Stripe.',
  },
  nb: {
    title: 'GeoTapp | Plattformen som gjør arbeidet verifiserbart',
    description: 'Automatiser tidsregistrering, verifiser oppmøte på stedet og administrer mobilt personale med GeoTapp. Sikker SaaS-plattform integrert med Stripe.',
  },
};

const HREFLANG_LANGUAGES = {
  it: '/it',
  en: '/en',
  de: '/de',
  fr: '/fr',
  es: '/es',
  pt: '/pt',
  nl: '/nl',
  ru: '/ru',
  da: '/da',
  sv: '/sv',
  nb: '/nb',
  'x-default': '/',
} as const;

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const meta = LOCALE_META[locale] ?? LOCALE_META.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: HREFLANG_LANGUAGES,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://geotapp.com/${locale}`,
    },
    twitter: {
      title: meta.title,
      description: meta.description,
    },
  };
}
