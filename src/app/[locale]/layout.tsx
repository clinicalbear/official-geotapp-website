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
import CookieConsentBanner from '@/components/CookieConsentBanner';
import NewsletterModal from '@/components/NewsletterModal';
import ChatWidget from '@/components/kairos/ChatWidget';
import SiteAnalytics from '@/components/SiteAnalytics';
import InternalTrafficBadge from '@/components/InternalTrafficBadge';
import {
  EUR_PRICES,
  convertEurToLocale,
  getCurrencyForLocale,
} from '@/lib/pricing';
import type { AppLocale } from '@/lib/i18n/config';

const BASE_URL = 'https://geotapp.com';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
// Poppins weights: only what is actually used as font-display.
// font-display heading scale ranges from font-bold (700) to font-extrabold (800).
// Weight 500 retained for the lone PricingSimulator label. 400 and 600 were
// preloaded but never used → dropped to save ~80KB woff2 on the mobile preload
// budget, reducing contention with the LCP element on slow connections.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
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
      'Report di lavoro non modificabili — verificabili indipendentemente da chiunque',
      'Prove fotografiche collegate a timestamp GPS e commessa',
      'Documentazione interventi non modificabile — ogni alterazione è rilevabile',
      'Prova del lavoro svolto: evidenza oggettiva per ogni intervento sul campo',
      'Timbratura geolocalizzata tramite GPS',
      'Gestione commesse e interventi tecnici',
      'GDPR compliant — nessun tracciamento continuo',
      'App mobile Android e iOS (Flutter)',
    ],
    offersDescription: 'Prova gratuita 14 giorni, piani a pagamento da {price}/operatore/mese via Stripe',
  },
  en: {
    description:
      'GeoTapp generates verifiable proof of field work: sealed reports with real GPS data, timestamped photo evidence and tamper-proof documentation anyone can verify independently. GDPR-compliant SaaS for companies with mobile operators.',
    featureList: [
      'Tamper-proof work reports — independently verifiable by anyone',
      'Photo evidence linked to GPS timestamp and job',
      'Tamper-proof job documentation — any modification is detectable',
      'Work proof: objective evidence for every field intervention',
      'GPS-based verifiable time tracking',
      'Job and technical intervention management',
      'GDPR compliant — no continuous tracking',
      'Mobile app for Android and iOS (Flutter)',
    ],
    offersDescription: '14-day free trial, paid plans from {price}/operator/month via Stripe',
  },
  de: {
    description:
      'GeoTapp erzeugt verifizierbare Nachweise für geleistete Außendienstarbeit: versiegelte Berichte mit echten GPS-Daten, zeitgestempelte Fotobelege und manipulationssichere Dokumentation, die jeder unabhängig prüfen kann.',
    featureList: [
      'Nicht veränderbare Arbeitsberichte — unabhängig verifizierbar',
      'Fotobelege verknüpft mit GPS-Zeitstempel und Auftrag',
      'Manipulationssichere Auftragsdokumentation — jede Änderung ist erkennbar',
      'Arbeitsnachweis: objektive Beweise für jeden Außendiensteinsatz',
      'GPS-basierte verifizierbare Zeiterfassung',
      'Auftrags- und Einsatzverwaltung',
      'DSGVO-konform — keine kontinuierliche Verfolgung',
      'Mobile App für Android und iOS (Flutter)',
    ],
    offersDescription: '14-tägige kostenlose Testphase, kostenpflichtige Pläne ab {price}/Nutzer/Monat via Stripe',
  },
  fr: {
    description:
      'GeoTapp génère des preuves vérifiables du travail effectué sur le terrain : rapports scellés avec données GPS réelles, preuves photographiques horodatées et documentation inviolable vérifiable par n\'importe qui.',
    featureList: [
      'Rapports de travail non modifiables — vérifiables indépendamment par n\'importe qui',
      'Preuves photographiques liées au timestamp GPS et à l\'intervention',
      'Documentation d\'intervention inviolable — toute modification est détectable',
      'Preuve du travail : evidence objective pour chaque intervention terrain',
      'Pointage vérifiable par GPS',
      'Gestion des ordres de travail et interventions',
      'Conforme RGPD — pas de suivi continu',
      'Application mobile Android et iOS (Flutter)',
    ],
    offersDescription: 'Essai gratuit 14 jours, plans payants à partir de {price}/opérateur/mois via Stripe',
  },
  es: {
    description:
      'GeoTapp genera pruebas verificables del trabajo realizado en campo: informes sellados con datos GPS reales, evidencias fotográficas con marca de tiempo y documentación a prueba de manipulaciones que cualquiera puede verificar.',
    featureList: [
      'Informes de trabajo no modificables — verificables independientemente por cualquiera',
      'Evidencias fotográficas vinculadas a timestamp GPS y trabajo',
      'Documentación de intervenciones a prueba de manipulaciones — cualquier cambio es detectable',
      'Prueba del trabajo: evidencia objetiva para cada intervención en campo',
      'Fichaje verificable por GPS',
      'Gestión de órdenes de trabajo e intervenciones',
      'Conforme RGPD — sin seguimiento continuo',
      'App móvil para Android e iOS (Flutter)',
    ],
    offersDescription: 'Prueba gratuita 14 días, planes de pago desde {price}/operador/mes via Stripe',
  },
  pt: {
    description:
      'GeoTapp gera provas verificáveis do trabalho realizado em campo: relatórios selados com dados GPS reais, provas fotográficas com marca de tempo e documentação inviolável que qualquer pessoa pode verificar.',
    featureList: [
      'Relatórios de trabalho não modificáveis — verificáveis independentemente por qualquer pessoa',
      'Provas fotográficas ligadas a timestamp GPS e intervenção',
      'Documentação de intervenções inviolável — qualquer alteração é detectável',
      'Prova do trabalho: evidência objectiva para cada intervenção em campo',
      'Marcação de ponto verificável por GPS',
      'Gestão de ordens de trabalho e intervenções',
      'Conforme RGPD — sem rastreamento contínuo',
      'App móvel para Android e iOS (Flutter)',
    ],
    offersDescription: 'Avaliação gratuita 14 dias, planos pagos a partir de {price}/operador/mês via Stripe',
  },
  nl: {
    description:
      'GeoTapp genereert verifieerbaar bewijs van uitgevoerd veldwerk: verzegelde rapporten met echte GPS-gegevens, tijdgestempeld fotobewijs en onvervalsbare documentatie die iedereen onafhankelijk kan controleren.',
    featureList: [
      'Niet wijzigbare werkrapporten — onafhankelijk verifieerbaar door iedereen',
      'Fotobewijs gekoppeld aan GPS-tijdstempel en opdracht',
      'Onvervalsbare opdrachtdocumentatie — elke wijziging is detecteerbaar',
      'Werkbewijs: objectief bewijs voor elke velddienst',
      'Verifieerbare GPS-tijdregistratie',
      'Werkorder- en interventiebeheer',
      'AVG-conform — geen continue tracking',
      'Mobiele app voor Android en iOS (Flutter)',
    ],
    offersDescription: '14 dagen gratis proberen, betaalde plannen vanaf {price}/gebruiker/maand via Stripe',
  },
  ru: {
    description:
      'GeoTapp генерирует верифицируемые доказательства выполненной полевой работы: запечатанные отчёты с реальными GPS-данными, фотодоказательства с временными метками и защищённая от изменений документация, проверяемая кем угодно.',
    featureList: [
      'Неизменяемые рабочие отчёты — независимо верифицируемые кем угодно',
      'Фотодоказательства привязаны к GPS-временной метке и заявке',
      'Неизменяемая документация выездов — любая модификация обнаруживается',
      'Доказательство работы: объективные свидетельства каждого выезда',
      'Верифицируемый GPS-учёт рабочего времени',
      'Управление заявками и техническими вмешательствами',
      'Соответствие GDPR — без непрерывного отслеживания',
      'Мобильное приложение для Android и iOS (Flutter)',
    ],
    offersDescription: 'Бесплатный пробный период 14 дней, платные планы от {price}/оператор/месяц через Stripe',
  },
  da: {
    description:
      'GeoTapp genererer verificerbare beviser for udført feltarbejde: forseglede rapporter med reelle GPS-data, tidsstemplede fotobeviser og uforanderlig dokumentation, som enhver kan verificere uafhængigt.',
    featureList: [
      'Ikke-redigerbare arbejdsrapporter — uafhængigt verificerbare af enhver',
      'Fotobeviser bundet til GPS-tidsstempel og arbejdsordre',
      'Uforanderlig dokumentation af udkald — enhver ændring opdages',
      'Arbejdsbevis: objektive beviser for hvert feltbesøg',
      'Verificerbar GPS-tidsregistrering',
      'Håndtering af arbejdsordrer og interventioner',
      'GDPR-kompatibel — ingen kontinuerlig sporing',
      'Mobilapp til Android og iOS (Flutter)',
    ],
    offersDescription: '14 dages gratis prøveperiode, betalte planer fra {price}/bruger/måned via Stripe',
  },
  sv: {
    description:
      'GeoTapp genererar verifierbara bevis för utfört fältarbete: förseglade rapporter med verkliga GPS-data, tidsstämplade fotobevis och oföränderlig dokumentation som vem som helst kan verifiera oberoende.',
    featureList: [
      'Oföränderliga arbetsrapporter — oberoende verifierbara av vem som helst',
      'Fotobevis kopplade till GPS-tidsstämpel och arbetsorder',
      'Oföränderlig dokumentation av utryckningar — varje ändring upptäcks',
      'Arbetsproof: objektiva bevis för varje fältuppdrag',
      'Verifierbar GPS-tidregistrering',
      'Hantering av arbetsorder och interventioner',
      'GDPR-kompatibel — ingen kontinuerlig spårning',
      'Mobilapp för Android och iOS (Flutter)',
    ],
    offersDescription: '14 dagars gratis provperiod, betalda planer från {price}/användare/månad via Stripe',
  },
  nb: {
    description:
      'GeoTapp genererer verifiserbare bevis for utført feltarbeid: forseglede rapporter med ekte GPS-data, tidsstemplede fotobevis og uforanderlig dokumentasjon som hvem som helst kan verifisere uavhengig.',
    featureList: [
      'Ikke-redigerbare arbeidsrapporter — uavhengig verifiserbare av hvem som helst',
      'Fotobevis bundet til GPS-tidsstempel og arbeidsordre',
      'Uforanderlig dokumentasjon av utrykning — enhver endring oppdages',
      'Arbeidsbevis: objektive beviser for hvert feltoppdrag',
      'Verifiserbar GPS-tidsregistrering',
      'Håndtering av arbeidsordrer og intervensjoner',
      'GDPR-kompatibel — ingen kontinuerlig sporing',
      'Mobilapp for Android og iOS (Flutter)',
    ],
    offersDescription: '14 dagers gratis prøveperiode, betalte planer fra {price}/bruker/måned via Stripe',
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

  // Locale-aware pricing for structured data + offers description.
  // EUR is master; non-EUR locales render the converted/buffered price.
  const standardRate = convertEurToLocale(
    EUR_PRICES.tracker.tier1.perSeatMonthly,
    locale as AppLocale,
  );
  const offersDescription = data.offersDescription.replace(
    '{price}',
    standardRate.formatted,
  );
  const priceCurrency = getCurrencyForLocale(locale as AppLocale);

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
      priceCurrency,
      description: offersDescription,
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
            next/font/google already handles fonts.googleapis.com and
            fonts.gstatic.com internally — no manual preconnect needed.
            Stripe JS is loaded on pricing/checkout pages only. */}
        {/* ── DNS prefetch ───────────────────────────────────────────────────
            Resolve DNS early for domains we WILL navigate to or call,
            without paying the TCP handshake cost upfront.
            Stripe preconnect removed — only used on pricing/trial pages. */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
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
              description:
                'GeoTapp is a field workforce management platform: GPS-verified time tracking, geo-timestamped proof of work and team coordination for field-service businesses in construction, cleaning, security and maintenance.',
              telephone: '+393520140978',
              email: 'info@geotapp.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://geotapp.com/FaviconGeoTapp.png',
                width: 512,
                height: 512,
              },
              sameAs: [
                'https://www.linkedin.com/company/110850300/',
                'https://www.facebook.com/profile.php?id=61583303732388',
                'https://www.instagram.com/geotapp_official/',
                'https://t.me/geotapp',
                'https://it.trustpilot.com/review/geotapp.com',
                'https://www.capterra.com/p/10041643/GeoTapp-Flow/',
                'https://alternativeto.net/software/geotapp-flow/about/',
                'https://www.saasworthy.com/product/geotapp-flow',
                'https://www.wikidata.org/wiki/Q139861459',
              ],
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Via Guglielmo Marconi 4',
                addressLocality: 'Trenzano',
                postalCode: '25030',
                addressCountry: 'IT',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+393520140978',
                email: 'info@geotapp.com',
                contactType: 'customer support',
                availableLanguage: [
                  'Italian', 'English', 'German', 'French', 'Spanish',
                  'Portuguese', 'Dutch', 'Russian', 'Danish', 'Swedish', 'Norwegian',
                ],
              },
              founder: { '@id': 'https://geotapp.com/#founder' },
            }),
          }}
        />
        {/* Person schema for founder — feeds Google Knowledge Graph and ties
            the author entity used by blog Article schema (Yoast) to the same
            canonical Person, with verified third-party profile (Featured.com)
            in sameAs as an E-E-A-T signal. */}
        <script
          id="schema-founder-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': 'https://geotapp.com/#founder',
              name: 'Michele Petraroli',
              alternateName: 'Mike Petraroli',
              jobTitle: 'CEO & Founder',
              worksFor: { '@id': 'https://geotapp.com/#organization' },
              url: 'https://geotapp.com/chi-siamo/',
              sameAs: [
                'https://featured.com/p/michele-petraroli',
                'https://www.linkedin.com/in/michele-petraroli-532545397/',
              ],
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
              // locale-specific SoftwareApplication (@id: locale URL),
              // creating two anonymous "GeoTapp" software entities in the knowledge graph.
              // description/featureList use locale data so every language version
              // shows structured data in the page language, not always Italian.
              '@id': 'https://geotapp.com/#software',
              name: 'GeoTapp',
              applicationCategory: 'BusinessApplication',
              applicationSubCategory: 'Field Service Management',
              operatingSystem: 'Android, iOS, Web',
              url: 'https://geotapp.com',
              description: data.description,
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency,
                description: offersDescription,
              },
              featureList: data.featureList,
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
        {/* ── LocalBusiness schema ───────────────────────────────────────────
            Signals physical presence to Google Maps and local search. */}
        <script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              '@id': 'https://geotapp.com/#localbusiness',
              name: 'GeoTapp',
              url: 'https://geotapp.com',
              telephone: '+393520140978',
              email: 'info@geotapp.com',
              priceRange: '€€',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Via Guglielmo Marconi 4',
                addressLocality: 'Trenzano',
                postalCode: '25030',
                addressCountry: 'IT',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 45.4771587,
                longitude: 10.0041003,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
              },
              sameAs: [
                'https://www.linkedin.com/company/110850300/',
                'https://www.facebook.com/profile.php?id=61583303732388',
                'https://www.instagram.com/geotapp_official/',
                'https://t.me/geotapp',
              ],
            }),
          }}
        />
        {/* ── WebSite schema ────────────────────────────────────────────────
            Enables Sitelinks Search Box in SERP. target points to the blog
            WP search endpoint which is the only working search on the site. */}
        <script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://geotapp.com/#website',
              name: 'GeoTapp',
              url: 'https://geotapp.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://geotapp.com/blog/?s={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        {/* FAQPage schema moved to [locale]/page.tsx (server component) so it
            renders only on the homepage, not on every sub-page under [locale]/.
            Previously injected here it bled to settori pages causing duplicate
            FAQPage errors in Google's Rich Results validator. */}
        {/* ── Internal traffic toggle ────────────────────────────────────────
            Visit ?gt_internal=on to disable analytics for your browser (test
            visits won't pollute GA4/GTM data). Visit ?gt_internal=off to
            re-enable. The flag persists in localStorage across sessions.
            Must run BEFORE gtag init so the GA script can read window.__gtSkip. */}
        <Script id="internal-traffic-toggle" strategy="beforeInteractive">
          {`
            (function(){
              try {
                var url = new URL(window.location.href);
                var p = url.searchParams.get('gt_internal');
                if (p === 'on')  { localStorage.setItem('gt_skip_analytics', '1'); }
                if (p === 'off') { localStorage.removeItem('gt_skip_analytics'); }
                if (p === 'on' || p === 'off') {
                  url.searchParams.delete('gt_internal');
                  history.replaceState(null, '', url.toString());
                }
                window.__gtSkip = localStorage.getItem('gt_skip_analytics') === '1';
                if (window.__gtSkip) {
                  console.warn('[GeoTapp] Internal traffic — analytics DISABLED on this browser. Run ?gt_internal=off to re-enable.');
                }
              } catch(_) { /* localStorage blocked: ignore */ }
            })();
          `}
        </Script>

        {/* ── Google Consent Mode v2 — must run BEFORE GA loads ─────────────
            Default: all storage denied. Updated by CookieConsentBanner
            when the user accepts analytics/ads cookies. */}
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500,
            });
          `}
        </Script>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-87PN0GEMW4"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            // Bot detection: skip GA4 for headless browsers and known bot patterns
            var ua = navigator.userAgent || '';
            var isBot = /bot|crawl|spider|headless|phantom|puppet|selenium|playwright|wget|curl|python|scrapy|httpclient/i.test(ua)
              || !navigator.languages || navigator.languages.length === 0
              || navigator.webdriver === true;
            // Internal traffic skip: developers/founders toggle via ?gt_internal=on
            var isInternal = window.__gtSkip === true;
            if (!isBot && !isInternal) {
              gtag('js', new Date());
              gtag('config', 'G-87PN0GEMW4');
            }
          `}
        </Script>
        {/* Adsense removed from main site layout — it was loading on every page
            (homepage, sectors, products, pricing) but ad slots only exist on
            the blog. Moved to src/app/blog/layout.tsx where ad inventory lives.
            Saves ~75-90ms TBT across all non-blog pages. */}
        <div className="relative min-h-screen overflow-hidden">
          {/* Background Glow Effects — CSS radial-gradient instead of
              filter:blur() to avoid GPU compositing overhead on mobile.
              Visual output is identical; no per-frame repaint cost. */}
          <div
            aria-hidden="true"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 0,
              pointerEvents: 'none',
              background:
                'radial-gradient(ellipse 55% 45% at 0% 0%, rgb(224 242 254 / 0.6), transparent),' +
                'radial-gradient(ellipse 55% 45% at 100% 100%, rgb(243 232 255 / 0.6), transparent)',
            }}
          />

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
        <SiteAnalytics />
        <CookieConsentBanner locale={locale} />
        <NewsletterModal locale={locale} />
        <ChatWidget />
        <InternalTrafficBadge />
      </body>
    </html>
  );
}
