// Overview: layout.tsx
// Module: src > app > [locale]
// Purpose: Locale-specific JSON-LD (SoftwareApplication + Organization) injected
//          server-side for each language subfolder. Supplements the root layout schema
//          with per-locale description, featureList, @id, url, and Organization contact.

import type { ReactNode } from 'react';

const BASE_URL = 'https://geotapp.com';

type LocaleSchemaData = {
  description: string;
  featureList: string[];
  offersDescription: string;
};

const LOCALE_SCHEMA: Record<string, LocaleSchemaData> = {
  it: {
    description:
      'Piattaforma SaaS per la timbratura geolocalizzata, la verifica della presenza sul posto e la gestione del personale in mobilità. Integrata con Stripe.',
    featureList: [
      'Timbratura geolocalizzata tramite GPS',
      'Verificabilità del lavoro tramite geolocalizzazione',
      'Gestione turni dipendenti fuori sede',
      'Gestione commesse e interventi tecnici',
      'Verifica integrità report di lavoro con sigillo ECDSA',
      'GDPR compliant — nessun tracciamento continuo',
      'Integrazione pagamenti Stripe',
      'App mobile Android e iOS (Flutter)',
    ],
    offersDescription: 'Piano base gratuito, piani premium con abbonamento mensile via Stripe',
  },
  en: {
    description:
      'SaaS platform for verifiable work tracking, on-site attendance verification and mobile workforce management. Integrated with Stripe.',
    featureList: [
      'GPS-based verifiable work tracking',
      'Work verifiability through geolocation',
      'Field employee shift management',
      'Work order and technical intervention management',
      'Work report integrity verification with ECDSA seal',
      'GDPR compliant — no continuous tracking',
      'Stripe payment integration',
      'Mobile app for Android and iOS (Flutter)',
    ],
    offersDescription: 'Free basic plan, premium plans with monthly subscription via Stripe',
  },
  de: {
    description:
      'SaaS-Plattform für verifizierbare Arbeitszeiterfassung, Anwesenheitsverifizierung vor Ort und Verwaltung mobiler Mitarbeiter. Integriert mit Stripe.',
    featureList: [
      'GPS-basierte verifizierbare Arbeitszeiterfassung',
      'Verifizierbarkeit der Arbeit durch Geolokalisierung',
      'Schichtmanagement für Außendienstmitarbeiter',
      'Auftrags- und Einsatzverwaltung',
      'Berichtsintegritätsprüfung mit ECDSA-Siegel',
      'DSGVO-konform — keine kontinuierliche Verfolgung',
      'Stripe-Zahlungsintegration',
      'Mobile App für Android und iOS (Flutter)',
    ],
    offersDescription: 'Kostenloser Basisplan, Premium-Pläne mit monatlichem Abonnement via Stripe',
  },
  fr: {
    description:
      'Plateforme SaaS pour le pointage vérifiable, la vérification de présence sur site et la gestion du personnel mobile. Intégrée à Stripe.',
    featureList: [
      'Pointage vérifiable par GPS',
      'Vérifiabilité du travail par géolocalisation',
      'Gestion des horaires des employés terrain',
      "Gestion des ordres de travail et interventions",
      "Vérification de l'intégrité des rapports avec sceau ECDSA",
      'Conforme RGPD — pas de suivi continu',
      'Intégration paiement Stripe',
      'Application mobile Android et iOS (Flutter)',
    ],
    offersDescription: 'Plan de base gratuit, plans premium avec abonnement mensuel via Stripe',
  },
  es: {
    description:
      'Plataforma SaaS para fichaje verificable, verificación de presencia en el trabajo y gestión del personal móvil. Integrada con Stripe.',
    featureList: [
      'Fichaje verificable mediante GPS',
      'Verificabilidad del trabajo mediante geolocalización',
      'Gestión de turnos de empleados en campo',
      'Gestión de órdenes de trabajo e intervenciones',
      'Verificación de integridad de informes con sello ECDSA',
      'Conforme con RGPD — sin seguimiento continuo',
      'Integración de pagos con Stripe',
      'App móvil para Android e iOS (Flutter)',
    ],
    offersDescription: 'Plan básico gratuito, planes premium con suscripción mensual via Stripe',
  },
  pt: {
    description:
      'Plataforma SaaS para marcação de ponto verificável, verificação de presença no local e gestão do pessoal móvel. Integrada com Stripe.',
    featureList: [
      'Marcação de ponto verificável por GPS',
      'Verificabilidade do trabalho por geolocalização',
      'Gestão de turnos de colaboradores em campo',
      'Gestão de ordens de trabalho e intervenções',
      'Verificação de integridade de relatórios com selo ECDSA',
      'Conforme RGPD — sem rastreamento contínuo',
      'Integração de pagamentos com Stripe',
      'App móvel para Android e iOS (Flutter)',
    ],
    offersDescription: 'Plano básico gratuito, planos premium com subscrição mensal via Stripe',
  },
  nl: {
    description:
      'SaaS-platform voor verifieerbare tijdregistratie, aanwezigheidsverificatie op locatie en beheer van mobiele medewerkers. Geïntegreerd met Stripe.',
    featureList: [
      'Verifieerbare GPS-tijdregistratie',
      'Verifieerbaarheid van werk via geolocatie',
      'Planningsbeheer voor buitendienstmedewerkers',
      'Werkorder- en interventiebeheer',
      'Rapportintegriteitsverificatie met ECDSA-zegel',
      'AVG-conform — geen continue tracking',
      'Stripe-betalingsintegratie',
      'Mobiele app voor Android en iOS (Flutter)',
    ],
    offersDescription: 'Gratis basisplan, premium plannen met maandelijks abonnement via Stripe',
  },
  ru: {
    description:
      'SaaS-платформа для верифицируемого учёта рабочего времени, верификации присутствия на объекте и управления мобильным персоналом. Интегрирована со Stripe.',
    featureList: [
      'Верифицируемый учёт рабочего времени по GPS',
      'Верифицируемость работы через геолокацию',
      'Управление сменами сотрудников на выезде',
      'Управление заявками и техническими вмешательствами',
      'Проверка целостности отчётов с ECDSA-печатью',
      'Соответствие GDPR — без непрерывного отслеживания',
      'Интеграция платежей Stripe',
      'Мобильное приложение для Android и iOS (Flutter)',
    ],
    offersDescription: 'Бесплатный базовый план, премиум-планы с ежемесячной подпиской через Stripe',
  },
  da: {
    description:
      'SaaS-platform til verificerbar tidsregistrering, verificering af fremmøde på stedet og administration af mobilt personale. Integreret med Stripe.',
    featureList: [
      'Verificerbar GPS-tidsregistrering',
      'Verificerbarhed af arbejde via geolokation',
      'Vagtplanlægning for feltmedarbejdere',
      'Håndtering af arbejdsordrer og interventioner',
      'Rapportintegritetskontrol med ECDSA-segl',
      'GDPR-kompatibel — ingen kontinuerlig sporing',
      'Stripe-betalingsintegration',
      'Mobilapp til Android og iOS (Flutter)',
    ],
    offersDescription: 'Gratis basisplan, premium-planer med månedligt abonnement via Stripe',
  },
  sv: {
    description:
      'SaaS-plattform för verifierbar tidregistrering, verifiering av närvaro på plats och hantering av mobil personal. Integrerad med Stripe.',
    featureList: [
      'Verifierbar GPS-tidregistrering',
      'Verifierbarhet av arbete via geolokation',
      'Schemaläggning för fältanställda',
      'Hantering av arbetsorder och interventioner',
      'Rapportintegritetsverifiering med ECDSA-sigill',
      'GDPR-kompatibel — ingen kontinuerlig spårning',
      'Stripe-betalningsintegration',
      'Mobilapp för Android och iOS (Flutter)',
    ],
    offersDescription: 'Gratis basplan, premiumplaner med månadsabonnemang via Stripe',
  },
  nb: {
    description:
      'SaaS-plattform for verifiserbar tidsregistrering, verifisering av oppmøte på stedet og administrasjon av mobilt personale. Integrert med Stripe.',
    featureList: [
      'Verifiserbar GPS-tidsregistrering',
      'Verifiserbarhet av arbeid via geolokasjon',
      'Planlegging av vakter for feltansatte',
      'Håndtering av arbeidsordrer og intervensjoner',
      'Rapportintegritetskontroll med ECDSA-segl',
      'GDPR-kompatibel — ingen kontinuerlig sporing',
      'Stripe-betalingsintegrasjon',
      'Mobilapp for Android og iOS (Flutter)',
    ],
    offersDescription: 'Gratis basisplan, premiumplaner med månedlig abonnement via Stripe',
  },
};

const ORGANIZATION = {
  '@type': 'Organization',
  name: 'GeoTapp',
  url: BASE_URL,
  telephone: '+393520140978',
  email: 'info@geotapp.com',
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/FaviconGeoTapp.png`,
  },
} as const;

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const data = LOCALE_SCHEMA[locale] ?? LOCALE_SCHEMA.en;
  const localeUrl = `${BASE_URL}/${locale}/`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': localeUrl,
    name: 'GeoTapp',
    url: localeUrl,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Field Service Management',
    operatingSystem: 'Android, iOS, Web',
    description: data.description,
    featureList: data.featureList,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: data.offersDescription,
    },
    publisher: ORGANIZATION,
  };

  return (
    <>
      <script
        id="schema-locale-software-application"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
