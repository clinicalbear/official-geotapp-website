// Overview: layout.tsx
// Module: src > app > [locale]
// Purpose: Full root layout with locale-aware <html lang> and all shared UI.
//          Moved here from app/layout.tsx so each locale gets the correct lang attribute.
//          Also injects locale-specific SoftwareApplication JSON-LD.

import type { ReactNode } from 'react';
import { Inter, Poppins } from 'next/font/google';
import '../globals.css';
import { clsx } from 'clsx';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import CartDrawer from '@/components/CartDrawer';
import Script from 'next/script';

const BASE_URL = 'https://geotapp.com';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

type LocaleSchemaData = {
  description: string;
  featureList: string[];
  offersDescription: string;
};

const LOCALE_SCHEMA: Record<string, LocaleSchemaData> = {
  it: {
    description:
      'GeoTapp genera prove verificabili del lavoro svolto sul campo: report sigillati con dati GPS reali, prove fotografiche con timestamp e documentazione non modificabile verificabile da chiunque. SaaS GDPR-compliant per aziende con operatori in mobilità.',
    featureList: [
      'Report di lavoro verificabili indipendentemente con sigillo ECDSA',
      'Prove fotografiche collegate a timestamp GPS e commessa',
      'Documentazione interventi non modificabile — ogni alterazione è rilevabile',
      'Prova del lavoro svolto: evidenza oggettiva per ogni intervento sul campo',
      'Timbratura geolocalizzata tramite GPS',
      'Gestione commesse e interventi tecnici',
      'GDPR compliant — nessun tracciamento continuo',
      'App mobile Android e iOS (Flutter)',
    ],
    offersDescription: 'Piano base gratuito, piani premium con abbonamento mensile via Stripe',
  },
  en: {
    description:
      'GeoTapp generates verifiable proof of field work: sealed reports with real GPS data, timestamped photo evidence and tamper-proof documentation anyone can verify independently. GDPR-compliant SaaS for companies with mobile operators.',
    featureList: [
      'Independently verifiable work reports with ECDSA seal',
      'Photo evidence linked to GPS timestamp and job',
      'Tamper-proof job documentation — any modification is detectable',
      'Work proof: objective evidence for every field intervention',
      'GPS-based verifiable time tracking',
      'Job and technical intervention management',
      'GDPR compliant — no continuous tracking',
      'Mobile app for Android and iOS (Flutter)',
    ],
    offersDescription: 'Free basic plan, premium plans with monthly subscription via Stripe',
  },
  de: {
    description:
      'GeoTapp erzeugt verifizierbare Nachweise für geleistete Außendienstarbeit: versiegelte Berichte mit echten GPS-Daten, zeitgestempelte Fotobelege und manipulationssichere Dokumentation, die jeder unabhängig prüfen kann.',
    featureList: [
      'Unabhängig verifizierbare Arbeitsberichte mit ECDSA-Siegel',
      'Fotobelege verknüpft mit GPS-Zeitstempel und Auftrag',
      'Manipulationssichere Auftragsdokumentation — jede Änderung ist erkennbar',
      'Arbeitsnachweis: objektive Beweise für jeden Außendiensteinsatz',
      'GPS-basierte verifizierbare Zeiterfassung',
      'Auftrags- und Einsatzverwaltung',
      'DSGVO-konform — keine kontinuierliche Verfolgung',
      'Mobile App für Android und iOS (Flutter)',
    ],
    offersDescription: 'Kostenloser Basisplan, Premium-Pläne mit monatlichem Abonnement via Stripe',
  },
  fr: {
    description:
      'GeoTapp génère des preuves vérifiables du travail effectué sur le terrain : rapports scellés avec données GPS réelles, preuves photographiques horodatées et documentation inviolable vérifiable par n\'importe qui.',
    featureList: [
      'Rapports de travail vérifiables indépendamment avec sceau ECDSA',
      'Preuves photographiques liées au timestamp GPS et à l\'intervention',
      'Documentation d\'intervention inviolable — toute modification est détectable',
      'Preuve du travail : evidence objective pour chaque intervention terrain',
      'Pointage vérifiable par GPS',
      'Gestion des ordres de travail et interventions',
      'Conforme RGPD — pas de suivi continu',
      'Application mobile Android et iOS (Flutter)',
    ],
    offersDescription: 'Plan de base gratuit, plans premium avec abonnement mensuel via Stripe',
  },
  es: {
    description:
      'GeoTapp genera pruebas verificables del trabajo realizado en campo: informes sellados con datos GPS reales, evidencias fotográficas con marca de tiempo y documentación a prueba de manipulaciones que cualquiera puede verificar.',
    featureList: [
      'Informes de trabajo verificables independientemente con sello ECDSA',
      'Evidencias fotográficas vinculadas a timestamp GPS y trabajo',
      'Documentación de intervenciones a prueba de manipulaciones — cualquier cambio es detectable',
      'Prueba del trabajo: evidencia objetiva para cada intervención en campo',
      'Fichaje verificable por GPS',
      'Gestión de órdenes de trabajo e intervenciones',
      'Conforme RGPD — sin seguimiento continuo',
      'App móvil para Android e iOS (Flutter)',
    ],
    offersDescription: 'Plan básico gratuito, planes premium con suscripción mensual via Stripe',
  },
  pt: {
    description:
      'GeoTapp gera provas verificáveis do trabalho realizado em campo: relatórios selados com dados GPS reais, provas fotográficas com marca de tempo e documentação inviolável que qualquer pessoa pode verificar.',
    featureList: [
      'Relatórios de trabalho verificáveis independentemente com selo ECDSA',
      'Provas fotográficas ligadas a timestamp GPS e intervenção',
      'Documentação de intervenções inviolável — qualquer alteração é detectável',
      'Prova do trabalho: evidência objectiva para cada intervenção em campo',
      'Marcação de ponto verificável por GPS',
      'Gestão de ordens de trabalho e intervenções',
      'Conforme RGPD — sem rastreamento contínuo',
      'App móvel para Android e iOS (Flutter)',
    ],
    offersDescription: 'Plano básico gratuito, planos premium com subscrição mensal via Stripe',
  },
  nl: {
    description:
      'GeoTapp genereert verifieerbaar bewijs van uitgevoerd veldwerk: verzegelde rapporten met echte GPS-gegevens, tijdgestempeld fotobewijs en onvervalsbare documentatie die iedereen onafhankelijk kan controleren.',
    featureList: [
      'Onafhankelijk verifieerbare werkrapporten met ECDSA-zegel',
      'Fotobewijs gekoppeld aan GPS-tijdstempel en opdracht',
      'Onvervalsbare opdrachtdocumentatie — elke wijziging is detecteerbaar',
      'Werkbewijs: objectief bewijs voor elke velddienst',
      'Verifieerbare GPS-tijdregistratie',
      'Werkorder- en interventiebeheer',
      'AVG-conform — geen continue tracking',
      'Mobiele app voor Android en iOS (Flutter)',
    ],
    offersDescription: 'Gratis basisplan, premium plannen met maandelijks abonnement via Stripe',
  },
  ru: {
    description:
      'GeoTapp генерирует верифицируемые доказательства выполненной полевой работы: запечатанные отчёты с реальными GPS-данными, фотодоказательства с временными метками и защищённая от изменений документация, проверяемая кем угодно.',
    featureList: [
      'Независимо верифицируемые рабочие отчёты с ECDSA-печатью',
      'Фотодоказательства привязаны к GPS-временной метке и заявке',
      'Неизменяемая документация выездов — любая модификация обнаруживается',
      'Доказательство работы: объективные свидетельства каждого выезда',
      'Верифицируемый GPS-учёт рабочего времени',
      'Управление заявками и техническими вмешательствами',
      'Соответствие GDPR — без непрерывного отслеживания',
      'Мобильное приложение для Android и iOS (Flutter)',
    ],
    offersDescription: 'Бесплатный базовый план, премиум-планы с ежемесячной подпиской через Stripe',
  },
  da: {
    description:
      'GeoTapp genererer verificerbare beviser for udført feltarbejde: forseglede rapporter med reelle GPS-data, tidsstemplede fotobeviser og uforanderlig dokumentation, som enhver kan verificere uafhængigt.',
    featureList: [
      'Uafhængigt verificerbare arbejdsrapporter med ECDSA-segl',
      'Fotobeviser bundet til GPS-tidsstempel og arbejdsordre',
      'Uforanderlig dokumentation af udkald — enhver ændring opdages',
      'Arbejdsbevis: objektive beviser for hvert feltbesøg',
      'Verificerbar GPS-tidsregistrering',
      'Håndtering af arbejdsordrer og interventioner',
      'GDPR-kompatibel — ingen kontinuerlig sporing',
      'Mobilapp til Android og iOS (Flutter)',
    ],
    offersDescription: 'Gratis basisplan, premium-planer med månedligt abonnement via Stripe',
  },
  sv: {
    description:
      'GeoTapp genererar verifierbara bevis för utfört fältarbete: förseglade rapporter med verkliga GPS-data, tidsstämplade fotobevis och oföränderlig dokumentation som vem som helst kan verifiera oberoende.',
    featureList: [
      'Oberoende verifierbara arbetsrapporter med ECDSA-sigill',
      'Fotobevis kopplade till GPS-tidsstämpel och arbetsorder',
      'Oföränderlig dokumentation av utryckningar — varje ändring upptäcks',
      'Arbetsproof: objektiva bevis för varje fältuppdrag',
      'Verifierbar GPS-tidregistrering',
      'Hantering av arbetsorder och interventioner',
      'GDPR-kompatibel — ingen kontinuerlig spårning',
      'Mobilapp för Android och iOS (Flutter)',
    ],
    offersDescription: 'Gratis basplan, premiumplaner med månadsabonnemang via Stripe',
  },
  nb: {
    description:
      'GeoTapp genererer verifiserbare bevis for utført feltarbeid: forseglede rapporter med ekte GPS-data, tidsstemplede fotobevis og uforanderlig dokumentasjon som hvem som helst kan verifisere uavhengig.',
    featureList: [
      'Uavhengig verifiserbare arbeidsrapporter med ECDSA-segl',
      'Fotobevis bundet til GPS-tidsstempel og arbeidsordre',
      'Uforanderlig dokumentasjon av utrykning — enhver endring oppdages',
      'Arbeidsbevis: objektive beviser for hvert feltoppdrag',
      'Verifiserbar GPS-tidsregistrering',
      'Håndtering av arbeidsordrer og intervensjoner',
      'GDPR-kompatibel — ingen kontinuerlig sporing',
      'Mobilapp for Android og iOS (Flutter)',
    ],
    offersDescription: 'Gratis basisplan, premiumplaner med månedlig abonnement via Stripe',
  },
};

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const data = LOCALE_SCHEMA[locale] ?? LOCALE_SCHEMA.en;
  const localeUrl = `${BASE_URL}/${locale}/`;

  const localeSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': localeUrl,
    // sameAs links this locale entity to the canonical software entity defined in root layout.tsx.
    // Without sameAs, Google KG treats them as two separate "GeoTapp" software products.
    sameAs: 'https://geotapp.com/#software',
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
    publisher: {
      '@type': 'Organization',
      name: 'GeoTapp',
      url: BASE_URL,
      telephone: '+393520140978',
      email: 'info@geotapp.com',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/FaviconGeoTapp.png`,
      },
    },
  };

  return (
    <html lang={locale}>
      <head>
        {/* ── Critical preconnects ───────────────────────────────────────────
            Establish TCP+TLS handshake early for domains GeoTapp fetches on
            every page load. Saves 100-300ms per domain on first request. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* gstatic serves the actual font files — crossOrigin required */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Stripe JS is loaded on pricing/checkout pages */}
        <link rel="preconnect" href="https://js.stripe.com" />

        {/* ── DNS prefetch ───────────────────────────────────────────────────
            Resolve DNS early for domains we WILL navigate to or call,
            without paying the TCP handshake cost upfront. */}
        <link rel="dns-prefetch" href="https://api.stripe.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        {/* The Flutter app — CTAs link here; prefetch DNS so click is instant */}
        <link rel="dns-prefetch" href="https://app.geotapp.com" />
        {/* Blog WP origin — sitemap + API calls */}
        <link rel="dns-prefetch" href="https://blog.geotapp.com" />
      </head>
      <body
        className={clsx(
          inter.variable,
          poppins.variable,
          'bg-background text-text-primary font-sans antialiased selection:bg-primary selection:text-black',
        )}
      >
        {/* ── Organization schema ───────────────────────────────────────────
            Standalone entity for Google Knowledge Graph. @id anchors all
            other schemas (SoftwareApplication.publisher) to this entity.
            sameAs: aggiungere URL LinkedIn/social verificati quando disponibili. */}
        <script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://geotapp.com/#organization',
              name: 'GeoTapp',
              url: 'https://geotapp.com',
              telephone: '+393520140978',
              email: 'info@geotapp.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://geotapp.com/FaviconGeoTapp.png',
                width: 512,
                height: 512,
              },
              sameAs: [
                // Aggiungere URL social verificati (LinkedIn, Crunchbase, ecc.)
                // 'https://www.linkedin.com/company/geotapp',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+393520140978',
                email: 'info@geotapp.com',
                contactType: 'customer support',
                availableLanguage: ['Italian', 'English'],
              },
            }),
          }}
        />
        <script
          id="schema-software-application"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              // @id anchors this as the canonical software entity.
              // Without @id, Google KG cannot link/merge this with the
              // locale-specific SoftwareApplication (@id: locale URL) from [locale]/layout.tsx,
              // creating two anonymous "GeoTapp" software entities in the knowledge graph.
              '@id': 'https://geotapp.com/#software',
              name: 'GeoTapp',
              applicationCategory: 'BusinessApplication',
              applicationSubCategory: 'Field Service Management',
              operatingSystem: 'Android, iOS, Web',
              url: 'https://geotapp.com',
              description:
                'GeoTapp genera prove verificabili del lavoro svolto sul campo: report sigillati con dati GPS reali, prove fotografiche con timestamp e documentazione non modificabile. Ogni alterazione è rilevabile. SaaS GDPR-compliant per aziende con operatori in mobilità.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'EUR',
                description: 'Piano base gratuito, piani premium con abbonamento Stripe',
              },
              featureList: [
                'Report di lavoro verificabili indipendentemente con sigillo ECDSA',
                'Prove fotografiche collegate a timestamp GPS e commessa',
                'Documentazione interventi non modificabile — ogni alterazione è rilevabile',
                'Prova del lavoro svolto: evidenza oggettiva per ogni intervento',
                'Timbratura GPS geolocalizzata',
                'Gestione commesse e interventi tecnici',
                'GDPR compliant — nessun tracciamento continuo',
                'App mobile Android e iOS (Flutter)',
              ],
              publisher: {
                '@type': 'Organization',
                '@id': 'https://geotapp.com/#organization',
                name: 'GeoTapp',
                url: 'https://geotapp.com',
                telephone: '+393520140978',
                email: 'info@geotapp.com',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://geotapp.com/FaviconGeoTapp.png',
                },
              },
            }),
          }}
        />
        {/* ── Locale-specific SoftwareApplication schema ────────────────────
            Per-locale entity with description/featureList in the page language.
            sameAs links to the canonical /#software entity above. */}
        <script
          id="schema-locale-software-application"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localeSchema) }}
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-87PN0GEMW4"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-87PN0GEMW4');
          `}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6506843864993991"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <div className="relative min-h-screen overflow-hidden">
          {/* Background Glow Effects (Subtle for Light Mode) */}
          <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-sky-100 blur-[120px] opacity-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full z-0" />
          <div className="fixed bottom-0 right-0 w-[800px] h-[800px] bg-purple-100 blur-[120px] opacity-60 translate-x-1/2 translate-y-1/2 pointer-events-none rounded-full z-0" />

          <CartDrawer />

          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#fff',
              color: '#0f172a',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            },
          }}
        />
      </body>
    </html>
  );
}
