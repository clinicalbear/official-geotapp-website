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
import { SUPPORTED_LOCALES } from '@/lib/i18n/config';
import type { AppLocale } from '@/lib/i18n/config';
import HomeClient from '../page';
import BlogHighlights from '@/components/BlogHighlights';

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

// FAQPage JSON-LD for the homepage — injected here (server component) so it
// renders only on the homepage, not on every page under [locale]/ via the layout.
const HOMEPAGE_FAQ: Record<string, object> = {
  it: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Come funziona la rilevazione presenze GPS di GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'L\'operatore apre e chiude il turno dall\'app mobile. GeoTapp registra le coordinate GPS reali in quel momento — non inserite a mano. Ogni timbratura è certificata con timestamp e posizione verificabile da chiunque.' } },
      { '@type': 'Question', name: 'GeoTapp è conforme al GDPR per la geolocalizzazione dei dipendenti?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. GeoTapp traccia la posizione solo durante l\'orario di lavoro attivo, include modulistica per l\'informativa ai dipendenti e non raccoglie dati non necessari. Conforme alle linee guida del Garante Privacy italiano.' } },
      { '@type': 'Question', name: 'Cosa contiene un report GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Ogni report include: timestamp di inizio e fine intervento, coordinate GPS verificate, prove fotografiche con hash crittografico, dati dell\'operatore e sigillo digitale. Il report non è modificabile dopo la chiusura.' } },
      { '@type': 'Question', name: 'GeoTapp funziona per imprese di pulizie, installatori e sicurezza?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. GeoTapp è usato da imprese di pulizie, multiservizi, installatori e servizi di vigilanza. La piattaforma scala da 3 a 300 operatori e gestisce più siti contemporaneamente.' } },
      { '@type': 'Question', name: 'Come si verifica un report GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Il committente riceve un link univoco e può verificare il report su geotapp.com/verifica/ senza accesso al tuo account. Il sistema confronta il sigillo crittografico e conferma che i dati non sono stati modificati.' } },
    ],
  },
  en: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How does GeoTapp GPS attendance tracking work?', acceptedAnswer: { '@type': 'Answer', text: 'The operator opens and closes their shift from the mobile app. GeoTapp records the real GPS coordinates at that moment — not entered manually. Every clock-in is certified with a timestamp and position verifiable by anyone.' } },
      { '@type': 'Question', name: 'Is GeoTapp GDPR compliant for employee geolocation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. GeoTapp records location only during active work sessions — at clock-in and clock-out. No continuous tracking. The platform includes employee disclosure templates and collects no unnecessary data.' } },
      { '@type': 'Question', name: 'What does a GeoTapp report contain?', acceptedAnswer: { '@type': 'Answer', text: 'Each report includes: start and end timestamps, verified GPS coordinates, photo evidence with cryptographic hash, operator data and a digital seal. The report cannot be modified after generation — any change breaks the seal.' } },
      { '@type': 'Question', name: 'Does GeoTapp work for cleaning companies, installers and security services?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. GeoTapp is used by cleaning companies, facility services, installers and security services. The platform scales from 3 to 300 operators and manages multiple sites simultaneously.' } },
      { '@type': 'Question', name: 'How does a client verify a GeoTapp report?', acceptedAnswer: { '@type': 'Answer', text: 'The client receives a unique link and can verify the report at geotapp.com/verifica/ without accessing your account. The system compares the cryptographic seal and confirms the data has not been modified.' } },
    ],
  },
  de: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie funktioniert die GPS-Anwesenheitserfassung von GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Der Mitarbeiter öffnet und schließt seine Schicht über die mobile App. GeoTapp erfasst die echten GPS-Koordinaten in diesem Moment — nicht manuell eingegeben. Jede Zeiterfassung wird mit einem verifizierbaren Zeitstempel und Standort zertifiziert.' } },
      { '@type': 'Question', name: 'Ist GeoTapp DSGVO-konform für die Mitarbeitergeolokalisierung?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp erfasst den Standort nur beim Ein- und Ausstempeln — kein kontinuierliches Tracking. Die Plattform enthält Vorlagen für die Mitarbeiterinformation und erfasst keine unnötigen Daten.' } },
      { '@type': 'Question', name: 'Was enthält ein GeoTapp-Bericht?', acceptedAnswer: { '@type': 'Answer', text: 'Jeder Bericht enthält: Start- und Endzeitstempel, verifizierte GPS-Koordinaten, Fotobelege mit kryptographischem Hash, Mitarbeiterdaten und ein digitales Siegel. Der Bericht ist nach der Erstellung nicht mehr änderbar.' } },
      { '@type': 'Question', name: 'Funktioniert GeoTapp für Reinigungsunternehmen, Installateure und Sicherheitsdienste?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp wird von Reinigungsunternehmen, Facility-Services, Installateuren und Sicherheitsdiensten eingesetzt. Die Plattform skaliert von 3 bis 300 Mitarbeitern.' } },
      { '@type': 'Question', name: 'Wie kann ein Kunde einen GeoTapp-Bericht verifizieren?', acceptedAnswer: { '@type': 'Answer', text: 'Der Kunde erhält einen eindeutigen Link und kann den Bericht auf geotapp.com/verifica/ ohne Zugang zu Ihrem Konto prüfen. Das System vergleicht das kryptographische Siegel und bestätigt, dass die Daten nicht verändert wurden.' } },
    ],
  },
};

const BASE_URL = 'https://geotapp.com';

// Locale-specific titles and descriptions for the home page.
// Each title expresses the "verifiable work" concept in the target language —
// this is the SEO anchor keyword for all locale variants.
const LOCALE_META: Record<string, { title: string; description: string }> = {
  it: {
    title: 'Cliente contesta? Prova interventi o perdi il pagamento',
    description: 'Cliente contesta? GeoTapp registra GPS, ora, foto e report non alterabile. Dimostri il lavoro svolto e incassi senza discussioni.',
  },
  en: {
    title: 'Client disputes? Prove jobs or lose the payment',
    description: 'Client disputes your work? GeoTapp logs GPS, time, photos and a tamper-proof report. Prove what was done and get paid without arguments.',
  },
  de: {
    title: 'Kunde bestreitet? Einsaetze belegen oder Zahlung verlieren',
    description: 'Kunde bestreitet den Einsatz? GeoTapp erfasst GPS, Uhrzeit, Fotos und manipulationssichere Berichte. Arbeit belegen und ohne Diskussion bezahlt werden.',
  },
  fr: {
    title: 'Client conteste ? Prouvez le travail ou perdez le paiement',
    description: 'Client conteste ? GeoTapp enregistre GPS, heure, photos et rapport non modifiable. Prouvez le travail effectué et soyez payé sans discussion.',
  },
  es: {
    title: '¿Cliente reclama? Prueba el trabajo o pierde el pago',
    description: '¿Cliente reclama? GeoTapp registra GPS, hora, fotos e informe no alterable. Demuestra el trabajo hecho y cobra sin discusiones.',
  },
  pt: {
    title: 'Cliente contesta? Prove o serviço ou perca o pagamento',
    description: 'Cliente contesta? GeoTapp registra GPS, hora, fotos e relatório não alterável. Prove o serviço feito e receba sem discussões.',
  },
  nl: {
    title: 'Klant betwist? Bewijs werk of mis de betaling',
    description: 'Betwist de klant je werk? GeoTapp registreert GPS, tijd, foto\'s en een niet-wijzigbaar rapport. Bewijs wat gedaan is en word betaald zonder discussie.',
  },
  ru: {
    title: 'Клиент оспаривает? Докажите работы или теряете оплату',
    description: 'Клиент оспаривает работу? GeoTapp фиксирует GPS, время, фото и неизменяемый отчёт. Докажите выполненное и получите оплату без споров.',
  },
  da: {
    title: 'Kunde bestrider? Bevis arbejdet eller mist betalingen',
    description: 'Kunden bestrider arbejdet? GeoTapp registrerer GPS, tid, fotos og en ikke-redigerbar rapport. Bevis opgaven og få betaling uden diskussion.',
  },
  sv: {
    title: 'Kund ifrågasätter? Bevisa jobbet eller förlora betalning',
    description: 'Kunden ifrågasätter jobbet? GeoTapp loggar GPS, tid, foton och en ej ändringsbar rapport. Bevisa arbetet och få betalt utan diskussion.',
  },
  nb: {
    title: 'Kunden bestrider? Bevis jobben eller mist betalingen',
    description: 'Kunden bestrider jobben? GeoTapp registrerer GPS, tid, bilder og en ikke-endringsbar rapport. Bevis arbeidet og få betalt uten diskusjon.',
  },
};

type Props = { params: Promise<{ locale: string }> };

export default async function LocalePage({ params }: Props) {
  const { locale } = await params;
  const faq = HOMEPAGE_FAQ[locale] ?? null;
  return (
    <>
      {faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
      )}
      <HomeClient />
      {/* Category 54 = "digitalizzazione-aziendale" — broad, relevant to all visitors */}
      <BlogHighlights locale={locale as AppLocale} categoryId={54} />
    </>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const meta = LOCALE_META[locale] ?? LOCALE_META.en;

  // Build hreflang alternates dynamically from SUPPORTED_LOCALES.
  // All locale homepages use trailing slash (trailingSlash:true in next.config.mjs).
  // x-default → /en/ because:
  //   - /en/ is a real page served by app/[locale]/page.tsx with locale="en"
  //   - bare / triggers a 308 geo-redirect in middleware → invalid x-default per Google spec
  const HREFLANG_MAP: Record<string, string> = {
    it: 'it-IT', en: 'en', de: 'de-DE', fr: 'fr-FR', es: 'es-ES',
    pt: 'pt-PT', nl: 'nl-NL', da: 'da-DK', nb: 'nb-NO', sv: 'sv-SE', ru: 'ru-RU',
  };
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((l) => [HREFLANG_MAP[l] ?? l, `${BASE_URL}/${l}/`]),
  ) as Record<string, string>;
  languages['x-default'] = `${BASE_URL}/`;

  return {
    // Use absolute title to bypass the root layout template ("%s | GeoTapp").
    // Home page titles already include the brand name at the start
    // (e.g. "GeoTapp | La piattaforma..."); without absolute the template
    // would append "| GeoTapp" again → "GeoTapp | La piattaforma | GeoTapp".
    title: { absolute: meta.title },
    description: meta.description,
    alternates: {
      // Absolute canonical required here — homepage path is just "/" per locale,
      // relative "/${locale}" without trailing slash would resolve to a redirect URL.
      canonical: `${BASE_URL}/${locale}/`,
      languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${BASE_URL}/${locale}/`,
    },
    twitter: {
      title: meta.title,
      description: meta.description,
    },
  };
}
