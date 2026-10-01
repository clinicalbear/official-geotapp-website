import type { Metadata } from 'next';
//          Moved here from app/layout.tsx so each locale gets the correct lang attribute.
//          Also injects locale-specific SoftwareApplication JSON-LD.

import type { ReactNode } from 'react';
import { fontiPerLingua } from '@/lib/fonts';
import { SCRIPT_VARIANTI } from '@/lib/esperimento';
import '../globals.css';
import '../redesign-l.css';
import '../l-mockup.css';
// La coda vive in un foglio a parte perche' la carica anche blog/layout.tsx:
// vedi src/app/l-footer.css.
import '../l-footer.css';
import '../l-palette.css';
import { clsx } from 'clsx';
import Navbar from '@/components/Navbar';
import LEffetti from '@/components/LEffetti';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import CartDrawer from '@/components/CartDrawer';
import Script from 'next/script';
import CookieConsentBanner from '@/components/CookieConsentBanner';
import ChatWidget from '@/components/kairos/ChatWidget';
import SiteAnalytics from '@/components/SiteAnalytics';
import InternalTrafficBadge from '@/components/InternalTrafficBadge';
import SurveyInvite from '@/components/SurveyInvite';
import {
  EUR_PRICES,
  convertEurToLocale,
  getCurrencyForLocale,
} from '@/lib/pricing';
import { notFound } from 'next/navigation';
import { SUPPORTED_LOCALES, type AppLocale } from '@/lib/i18n/config';
import { buildConsentDefaultScript } from '@/lib/consent-mode';
import DictionaryBridge from '@/lib/i18n/DictionaryBridge';
import { dizionarioComune } from '@/lib/i18n/dictionaries';

const BASE_URL = 'https://geotapp.com';


type LocaleSchemaData = {
  description: string;
  featureList: string[];
  offersDescription: string;
};

const LOCALE_SCHEMA: Record<string, LocaleSchemaData> = {
  it: {
    description:
      'GeoTapp è il software per dimostrare il lavoro sul campo: a ogni timbratura registra posizione e ora, raccoglie le foto di prova e chiude tutto in un report sigillato che il cliente verifica da solo. La posizione si rileva solo quando il lavoratore timbra, mai in continuo.',
    featureList: [
      'Report sigillati: ogni modifica successiva è rilevabile, e chiunque può verificarli senza account',
      'Foto di prova collegate a ora, posizione e commessa',
      'Timbratura con posizione a entrata, pause e uscita',
      'Nessun tracciamento continuo: fra una timbratura e l\'altra non si registra nulla in automatico',
      'Gestione di commesse, squadre e interventi dall\'ufficio (GeoTapp Flow, web)',
      'App nativa per gli operatori su Android e iOS (GeoTapp TimeTracker)',
      'Verificatore gratuito, anche offline (GeoTapp Verifier)',
    ],
    offersDescription: 'Prova gratuita di 14 giorni senza carta. Poi GeoTapp Flow da 39 € al mese e le postazioni TimeTracker da {price} per operatore al mese, abbonamento minimo 12 mesi',
  },
  en: {
    description:
      'GeoTapp is software for proving field work: at every clock-in it records location and time, collects photo proof and closes everything in a sealed report that the client can verify on their own. Location is taken only when the worker clocks in, never continuously.',
    featureList: [
      'Sealed reports: any later change is detectable, and anyone can verify them without an account',
      'Photo proof linked to time, location and job',
      'Clock-in with location at start, breaks and end of shift',
      'No continuous tracking: nothing is recorded automatically between one clock-in and the next',
      'Management of jobs, teams and interventions from the office (GeoTapp Flow, web)',
      'Native app for field operators on Android and iOS (GeoTapp TimeTracker)',
      'Free verifier, also offline (GeoTapp Verifier)',
    ],
    offersDescription: '14-day free trial, no card. Then a GeoTapp Flow subscription plus TimeTracker seats from {price} per operator per month, 12-month minimum term',
  },
  de: {
    description:
      'GeoTapp ist eine Software, die Arbeit im Außendienst nachweist: Bei jeder Buchung erfasst sie Standort und Uhrzeit, sammelt Nachweisfotos und schließt alles in einem versiegelten Bericht ab, den der Kunde selbst prüfen kann. Der Standort wird nur beim Stempeln erfasst, nie fortlaufend.',
    featureList: [
      'Versiegelte Berichte: Jede spätere Änderung ist erkennbar, und jeder kann sie ohne Konto prüfen',
      'Nachweisfotos, verknüpft mit Uhrzeit, Standort und Auftrag',
      'Stempeln mit Standort bei Beginn, Pausen und Ende der Schicht',
      'Keine fortlaufende Ortung: Zwischen zwei Buchungen wird automatisch nichts aufgezeichnet',
      'Verwaltung von Aufträgen, Teams und Einsätzen im Büro (GeoTapp Flow, Web)',
      'Native App für Mitarbeitende im Außendienst auf Android und iOS (GeoTapp TimeTracker)',
      'Kostenloses Prüfprogramm, auch offline (GeoTapp Verifier)',
    ],
    offersDescription: '14 Tage kostenlos testen, ohne Karte. Danach ein GeoTapp-Flow-Abonnement plus TimeTracker-Plätze ab {price} pro Mitarbeiter und Monat, Mindestlaufzeit 12 Monate',
  },
  fr: {
    description:
      'GeoTapp est un logiciel qui prouve le travail de terrain : à chaque pointage, il enregistre la position et l\'heure, recueille des photos de preuve et referme le tout dans un rapport scellé que le client peut vérifier seul. La position n\'est relevée qu\'au pointage, jamais en continu.',
    featureList: [
      'Rapports scellés : toute modification ultérieure est détectable, et chacun peut les vérifier sans compte',
      'Photos de preuve liées à l\'heure, à la position et à l\'intervention',
      'Pointage avec position à l\'arrivée, aux pauses et au départ',
      'Pas de suivi continu : entre deux pointages, rien n\'est enregistré automatiquement',
      'Gestion des chantiers, des équipes et des interventions depuis le bureau (GeoTapp Flow, web)',
      'Application native pour les opérateurs de terrain sur Android et iOS (GeoTapp TimeTracker)',
      'Vérificateur gratuit, y compris hors ligne (GeoTapp Verifier)',
    ],
    offersDescription: 'Essai gratuit de 14 jours, sans carte. Ensuite, un abonnement GeoTapp Flow et des postes TimeTracker à partir de {price} par opérateur et par mois, durée minimale de 12 mois',
  },
  es: {
    description:
      'GeoTapp es el software para demostrar el trabajo en campo: en cada fichaje registra ubicación y hora, recoge las fotos de prueba y lo cierra todo en un informe sellado que el cliente verifica por sí mismo. La ubicación se registra solo cuando el trabajador ficha, nunca de forma continua.',
    featureList: [
      'Informes sellados: cualquier modificación posterior es detectable, y cualquiera puede verificarlos sin cuenta',
      'Fotos de prueba vinculadas a la hora, la ubicación y la obra',
      'Fichaje con ubicación en la entrada, las pausas y la salida',
      'Sin seguimiento continuo: entre un fichaje y otro no se registra nada de forma automática',
      'Gestión de obras, equipos e intervenciones desde la oficina (GeoTapp Flow, web)',
      'Aplicación nativa para los operarios en Android e iOS (GeoTapp TimeTracker)',
      'Verificador gratuito, también sin conexión (GeoTapp Verifier)',
    ],
    offersDescription: 'Prueba gratuita de 14 días sin tarjeta. Después, GeoTapp Flow desde 39 € al mes y los puestos de TimeTracker desde {price} por operario al mes, suscripción mínima de 12 meses',
  },
  pt: {
    description:
      'O GeoTapp é o software para comprovar o trabalho em campo: a cada picagem regista localização e hora, recolhe as fotos de prova e fecha tudo num relatório selado que o cliente verifica sozinho. A localização é registada apenas quando o trabalhador pica o ponto, nunca de forma contínua.',
    featureList: [
      'Relatórios selados: qualquer alteração posterior é detetável, e qualquer pessoa os pode verificar sem conta',
      'Fotos de prova ligadas à hora, à localização e à obra',
      'Picagem com localização na entrada, nas pausas e na saída',
      'Sem seguimento contínuo: entre uma picagem e a seguinte não se regista nada de forma automática',
      'Gestão de obras, equipas e intervenções a partir do escritório (GeoTapp Flow, web)',
      'Aplicação nativa para os operadores em campo em Android e iOS (GeoTapp TimeTracker)',
      'Verificador gratuito, também offline (GeoTapp Verifier)',
    ],
    offersDescription: 'Teste gratuito de 14 dias sem cartão. Depois, GeoTapp Flow a partir de 39 € por mês e os postos do TimeTracker a partir de {price} por operador por mês, subscrição mínima de 12 meses',
  },
  nl: {
    description:
      'GeoTapp is software om het werk in het veld aan te tonen: bij elke registratie legt het locatie en tijd vast, verzamelt het bewijsfoto\'s en sluit het alles af in een verzegeld rapport dat de klant zelf controleert. De locatie wordt alleen bepaald wanneer de medewerker registreert, nooit doorlopend.',
    featureList: [
      'Verzegelde rapporten: elke latere wijziging is zichtbaar, en iedereen kan ze zonder account controleren',
      'Bewijsfoto\'s gekoppeld aan tijd, locatie en opdracht',
      'Registratie met locatie bij aankomst, pauzes en vertrek',
      'Geen doorlopende tracking: tussen twee registraties in wordt er niets automatisch vastgelegd',
      'Beheer van opdrachten, teams en klussen vanaf kantoor (GeoTapp Flow, web)',
      'Native app voor medewerkers in het veld op Android en iOS (GeoTapp TimeTracker)',
      'Gratis verifier, ook offline (GeoTapp Verifier)',
    ],
    offersDescription: '14 dagen gratis proberen, zonder creditcard. Daarna een GeoTapp Flow-abonnement vanaf € 39 per maand en TimeTracker-plaatsen vanaf {price} per medewerker per maand, minimale looptijd 12 maanden',
  },
  ru: {
    description:
      'GeoTapp генерирует верифицируемые доказательства выполненной полевой работы: запечатанные отчёты с реальными GPS-данными, фотодоказательства с временными метками и документация с обнаруживаемыми изменениями, проверяемая кем угодно.',
    featureList: [
      'Рабочие отчёты с обнаруживаемыми изменениями, независимо верифицируемые кем угодно',
      'Фотодоказательства привязаны к GPS-временной метке и заявке',
      'Документация выездов: любая модификация обнаруживается',
      'Доказательство работы: объективные свидетельства каждого выезда',
      'Верифицируемый GPS-учёт рабочего времени',
      'Управление заявками и техническими вмешательствами',
      'Соответствие GDPR, без непрерывного отслеживания',
      'Мобильное приложение для Android и iOS (Flutter)',
    ],
    offersDescription: 'Бесплатный пробный период 14 дней, платные планы от {price}/оператор/месяц через Stripe',
  },
  da: {
    description:
      'GeoTapp er softwaren til at dokumentere arbejdet i marken: ved hver stempling registrerer den position og tidspunkt, samler bevisfotos og lukker det hele i en forseglet rapport, som kunden selv kan verificere. Positionen registreres kun, når medarbejderen stempler, aldrig løbende.',
    featureList: [
      'Forseglede rapporter: enhver senere ændring kan opdages, og alle kan verificere dem uden konto',
      'Bevisfotos knyttet til tidspunkt, position og sag',
      'Stempling med position ved start, pauser og afslutning',
      'Ingen løbende sporing: mellem to stemplinger registreres der intet automatisk',
      'Styring af sager, hold og opgaver fra kontoret (GeoTapp Flow, web)',
      'Native app til medarbejderne på Android og iOS (GeoTapp TimeTracker)',
      'Gratis verifier, også offline (GeoTapp Verifier)',
    ],
    offersDescription: 'Gratis prøveperiode på 14 dage uden kort. Derefter GeoTapp Flow fra 39 € om måneden og TimeTracker-pladser fra {price} pr. medarbejder pr. måned, abonnement med mindst 12 måneders varighed',
  },
  sv: {
    description:
      'GeoTapp är programvaran för att dokumentera arbetet på fältet: vid varje stämpling sparar den position och tid, samlar bevisfoton och sluter allt i en förseglad rapport som kunden själv kan kontrollera. Positionen sparas bara när medarbetaren stämplar, aldrig löpande.',
    featureList: [
      'Förseglade rapporter: varje senare ändring går att upptäcka, och alla kan kontrollera dem utan konto',
      'Bevisfoton kopplade till tid, position och uppdrag',
      'Stämpling med position vid start, raster och slut',
      'Ingen löpande spårning: mellan två stämplingar sparas inget automatiskt',
      'Hantering av uppdrag, team och arbetsuppgifter från kontoret (GeoTapp Flow, webb)',
      'Inbyggd app för medarbetarna på Android och iOS (GeoTapp TimeTracker)',
      'Gratis verifierare, även offline (GeoTapp Verifier)',
    ],
    offersDescription: 'Gratis provperiod på 14 dagar utan kort. Därefter GeoTapp Flow från 39 € i månaden och TimeTracker-platser från {price} per medarbetare och månad, abonnemang med minst 12 månaders löptid',
  },
  nb: {
    description:
      'GeoTapp genererer verifiserbare bevis for utført feltarbeid: forseglede rapporter med ekte GPS-data, tidsstemplede fotobevis og dokumentasjon med sporbare endringer som hvem som helst kan verifisere uavhengig.',
    featureList: [
      'Arbeidsrapporter med sporbare endringer, uavhengig verifiserbare av hvem som helst',
      'Fotobevis bundet til GPS-tidsstempel og arbeidsordre',
      'Dokumentasjon av utrykning: enhver endring oppdages',
      'Arbeidsbevis: objektive beviser for hvert feltoppdrag',
      'Verifiserbar GPS-tidsregistrering',
      'Håndtering av arbeidsordrer og intervensjoner',
      'GDPR-kompatibel, ingen kontinuerlig sporing',
      'Mobilapp for Android og iOS (Flutter)',
    ],
    offersDescription: '14 dagers gratis prøveperiode, betalte planer fra {price}/bruker/måned via Stripe',
  },
};

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

// A13: "salta al contenuto", nelle lingue che serviamo.
const SALTA = {
  it: 'Salta al contenuto',
  en: 'Skip to content',
  de: 'Zum Inhalt springen',
  fr: 'Aller au contenu',
  es: 'Saltar al contenido',
  pt: 'Saltar para o conteúdo',
  nl: 'Naar de inhoud',
  da: 'Gå til indholdet',
  sv: 'Hoppa till innehållet',
  nb: 'Hopp til innholdet',
  ru: 'Перейти к содержимому',
} as const;

// Descrizione di ripiego nella lingua della pagina, per le pagine che non ne dichiarano una
// propria (successo del pagamento, sondaggio...). Prima ereditavano quella inglese del layout
// radice, che per giunta diceva «GDPR compliant» in forma assoluta.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const data = LOCALE_SCHEMA[locale] ?? LOCALE_SCHEMA.en;
  return { description: data.description };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // [SOFT 404 2026-08-03] Il segmento [locale] cattura QUALSIASI prima parte di
  // URL, anche "file-inesistente.pdf" o un refuso. Senza questo controllo il
  // fallback qui sotto ripiegava su 'en' e serviva la HOME con status 200: un
  // indirizzo inventato diventava una copia indicizzabile della home, e Google
  // poteva riempirsi di pagine fantasma tutte uguali. I file statici veri non
  // passano di qui (li serve il Worker), quindi arrivare fin qui con un nome
  // che non e' una lingua significa che quella pagina non esiste.
  if (!(SUPPORTED_LOCALES as readonly string[]).includes(locale)) {
    notFound();
  }

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
      email: 'info@geotapp.com',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/LogoGeoTapp.webp`,
      },
    },
  };

  return (
    <html lang={locale}>
      <head>
        {/* ── Critical preconnects ───────────────────────────────────────────
            next/font/google already handles fonts.googleapis.com and
            fonts.gstatic.com internally, no manual preconnect needed.
            Stripe JS is loaded on pricing/checkout pages only. */}
        {/* ── DNS prefetch ───────────────────────────────────────────────────
            Resolve DNS early for domains we WILL navigate to or call,
            without paying the TCP handshake cost upfront.
            Stripe preconnect removed, only used on pricing/trial pages. */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* The Flutter app - CTAs link here; prefetch DNS so click is instant */}
        <link rel="dns-prefetch" href="https://app.geotapp.com" />
        {/* NB: nessun dns-prefetch per blog.geotapp.com (rimosso 16/07/2026).
            E' l'origine WordPress che il blog headless interroga SERVER-side
            (src/app/blog/[...slug]/page.tsx, api/comments/route.ts): il browser
            del visitatore non contatta mai quell'host, quindi risolverne il DNS
            in anticipo non fa guadagnare nulla. In piu' suggeriva ai crawler un
            sottodominio che per gli utenti e' solo un 301 verso geotapp.com/blog/.
            Il dns-prefetch va SOLO su host che il CLIENT contattera' davvero. */}
      </head>
      <body
        className={clsx(
          ...fontiPerLingua(locale),
          'bg-background text-text-primary font-sans antialiased selection:bg-primary selection:text-black',
        )}
      >
        <DictionaryBridge locale={locale} dict={dizionarioComune(locale as AppLocale)}>
        <LEffetti />
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
              // Varianti scritte/di spaziazione che sono INEQUIVOCABILMENTE nostre.
              // NON includiamo "Geotap" (una p): e' un brand terzo, rivendicarlo
              // sarebbe scorretto e controproducente.
              alternateName: ['Geo Tapp', 'GeoTapp App'],
              url: 'https://geotapp.com',
              description:
                'GeoTapp is a field workforce management platform: GPS-verified time tracking, geo-timestamped proof of work and team coordination for field-service businesses in construction, cleaning, security and maintenance.',
              email: 'info@geotapp.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://geotapp.com/LogoGeoTapp.webp',
              },
              sameAs: [
                'https://www.linkedin.com/company/110850300/',
                'https://www.facebook.com/profile.php?id=61583303732388',
                'https://www.instagram.com/geotapp_official/',
                'https://t.me/geotapp',
                'https://www.youtube.com/@GeoTappOfficial',
                'https://it.trustpilot.com/review/geotapp.com',
                'https://www.capterra.com/p/10041643/GeoTapp-Flow/',
                'https://alternativeto.net/software/geotapp-flow/about/',
                'https://www.saasworthy.com/product/geotapp-flow',
                'https://www.wikidata.org/wiki/Q139861459',
              ],
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IT',
              },
              contactPoint: {
                '@type': 'ContactPoint',
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
        {/* Person schema for founder, feeds Google Knowledge Graph and ties
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
              name: 'Michele Angelo Petraroli',
              alternateName: ['Michele Petraroli', 'Mike Petraroli'],
              jobTitle: 'CEO & Founder',
              worksFor: { '@id': 'https://geotapp.com/#organization' },
              url: 'https://geotapp.com/chi-siamo/',
              sameAs: [
                'https://featured.com/p/michele-petraroli',
                'https://www.linkedin.com/in/mikepetraroli/',
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
                email: 'info@geotapp.com',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://geotapp.com/LogoGeoTapp.webp',
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
        {/* LocalBusiness/ProfessionalService schema rimosso (2026-06-03):
            GeoTapp è un SaaS solo-online, senza sede aperta al pubblico.
            Dichiarare indirizzo fisico, geo-coordinate e orari di apertura
            sarebbe inaccurato (rischio rich-result errati / aspettativa local-pack)
            ed esporrebbe un indirizzo che non vogliamo pubblicare. L'entità è già
            coperta da Organization + SoftwareApplication. */}
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
        {/* A57 · le varianti cromatiche, stampate sull'<html> PRIMA del primo
            disegno: se le assegnasse React dopo l'idratazione si vedrebbe il
            pulsante cambiare colore sotto gli occhi. Gira dopo il toggle del
            traffico interno, che e' quello che puo' spegnerlo. */}
        <Script id="esperimenti-cromatici" strategy="beforeInteractive">
          {SCRIPT_VARIANTI}
        </Script>
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
                  console.warn('[GeoTapp] Internal traffic, analytics DISABLED on this browser. Run ?gt_internal=off to re-enable.');
                }
              } catch(_) { /* localStorage blocked: ignore */ }
            })();
          `}
        </Script>

        {/* ── Google Consent Mode v2, must run BEFORE GA loads ─────────────
            Client-side dal cookie gt_geo (middleware): HTML identico per tutti
            → pagine prerenderizzabili/cachabili senza incidenti di compliance.
            EU/UK/EEA/CH: denied + banner. Altri: update immediato a granted. */}
        <Script id="google-consent-default" strategy="beforeInteractive">
          {buildConsentDefaultScript()}
        </Script>
        {/* gtag.js (191 KB, ~0,6 s di main thread su mobile) parte alla prima interazione o
            4 s dopo il load: prima bloccava il telefono proprio mentre la pagina compariva.
            I comandi gtag() nel frattempo si accodano in dataLayer, niente va perso. */}
        <Script id="gtag-loader" strategy="afterInteractive">
          {`(function(){var done=false;function go(){if(done)return;done=true;['scroll','pointerdown','keydown','touchstart'].forEach(function(e){removeEventListener(e,go,true)});var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=G-87PN0GEMW4';document.head.appendChild(s);}['scroll','pointerdown','keydown','touchstart'].forEach(function(e){addEventListener(e,go,{capture:true,passive:true,once:true})});if(document.readyState==='complete'){setTimeout(go,4000)}else{addEventListener('load',function(){setTimeout(go,4000)})}})();`}
        </Script>
        <Script id="google-analytics" strategy="lazyOnload">
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
        {/* Adsense removed from main site layout, it was loading on every page
            (homepage, sectors, products, pricing) but ad slots only exist on
            the blog. Moved to src/app/blog/layout.tsx where ad inventory lives.
            Saves ~75-90ms TBT across all non-blog pages. */}
        {/* Navbar FUORI dal wrapper overflow: un antenato con overflow!=visible rompe position:sticky */}
        <Navbar />
        {/* overflow-x-clip (non hidden): clip non crea uno scroll container,
            quindi position:sticky dei parallax (seq/deck) continua a funzionare */}
        <div className="relative min-h-screen overflow-x-clip">
          {/* Background Glow Effects - CSS radial-gradient instead of
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
            {/* A13: il salto al contenuto. Senza, chi naviga da tastiera o con
                uno screen reader si rifa' tutta la barra a ogni pagina: sono
                una dozzina di link prima di arrivare al testo. Sta fuori
                schermo e compare solo quando prende il fuoco. */}
            <a href="#contenuto" className="salta-al-contenuto">
              {SALTA[locale as keyof typeof SALTA] ?? SALTA.en}
            </a>
            <main id="contenuto" tabIndex={-1}>{children}</main>
            <Footer />
          </div>
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#fff',
              color: '#0b1736',
              border: '1px solid #f7f9fc',
              boxShadow: '0 4px 12px rgba(11,23,54,0.05)',
            },
          }}
        />
        <SiteAnalytics />
        <CookieConsentBanner locale={locale} />
        {/* Invito al sondaggio pubblico: fino al 02/09/2026 stava SOLO sul blog,
            quindi le pagine più viste del sito (home, trial, prodotti) non lo
            mostravano mai. Esce dopo la scelta sui cookie, una volta per browser. */}
        <SurveyInvite />
        <ChatWidget />
        <InternalTrafficBadge />
              </DictionaryBridge>
      </body>
    </html>
  );
}
