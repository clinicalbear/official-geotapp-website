

import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import AppPage from '../../../products/geotapp-timetracker/page';
import BlogHighlights from '@/components/BlogHighlights';
import SettoriLinks from '@/components/SettoriLinks';
import FaqFromSchema from '@/components/FaqFromSchema';
import UpdatedOnLine, { updatedIsoFor } from '@/components/seo/UpdatedOnLine';
import { type AppLocale } from '@/lib/i18n/config';
import {
  EUR_PRICES,
  convertEurToLocale,
  getCurrencyForLocale,
} from '@/lib/pricing';

const appMeta: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp TimeTracker - App Timbratura GPS per Tecnici sul Campo', description: 'GeoTapp TimeTracker è l\'app per i tecnici sul campo: timbrature con posizione e ora, foto di prova, note, report settimanali. Su Android e iOS, collegata a Flow.' },
  en: { title: 'GeoTapp TimeTracker: GPS clock-in app for field crews', description: 'Location is recorded when your crew clocks in, takes a break or clocks out, and nothing automatically in between. Photos attach to the job. 14 days free.' },
  de: { title: 'GeoTapp TimeTracker: Stempel-App mit GPS für Teams im Außendienst', description: 'Der Standort wird bei Beginn, Pause und Ende erfasst, dazwischen automatisch nichts. Fotos hängen am Auftrag. 14 Tage kostenlos.' },
  fr: { title: 'GeoTapp TimeTracker - App de Pointage GPS pour Techniciens Terrain', description: 'GeoTapp TimeTracker est l\'application mobile pour les techniciens terrain. Pointage GPS, preuves photographiques, rapports hebdomadaires et synchronisation en temps réel avec Flow.' },
  es: { title: 'GeoTapp TimeTracker - App de Fichaje GPS para Técnicos de Campo', description: 'GeoTapp TimeTracker es la app móvil para técnicos de campo. Fichaje GPS, pruebas fotográficas, informes semanales y sincronización en tiempo real con Flow.' },
  nl: { title: 'GeoTapp TimeTracker - App voor registratie met locatie', description: 'GeoTapp TimeTracker is de app voor monteurs in het veld: registraties met locatie en tijd, bewijsfoto\'s, notities, weekrapporten. Op Android en iOS, gekoppeld aan Flow.' },
  pt: { title: 'GeoTapp TimeTracker - App de Ponto GPS para Técnicos de Campo', description: 'GeoTapp TimeTracker é o app móvel para técnicos de campo. Registo de presença GPS, provas fotográficas, relatórios semanais e sincronização em tempo real com o Flow.' },
  sv: { title: 'GeoTapp TimeTracker - GPS Tidsrapporterings-App för Fälttekniker', description: 'GeoTapp TimeTracker är appen för GPS-tidsrapportering för fälttekniker. In- och utcheckning, fotodokumentation, veckorapporter och realtidssynkronisering med Flow.' },
  da: { title: 'GeoTapp TimeTracker - GPS Tidsregistrerings-App til Serviceteknikere', description: 'GeoTapp TimeTracker er mobilappen til serviceteknikere. GPS ind- og udtjekning, fotodokumentation, ugentlige rapporter og realtidssynkronisering med Flow.' },
  nb: { title: 'GeoTapp TimeTracker - GPS Tidsregistrerings-App for Serviceteknikere', description: 'GeoTapp TimeTracker er mobilappen for serviceteknikere. GPS inn- og utsjekking, fotodokumentasjon, ukentlige rapporter og sanntidssynkronisering med Flow.' },
  ru: { title: 'GeoTapp TimeTracker: GPS-учёт времени для выездных техников', description: 'GeoTapp TimeTracker, мобильное приложение для выездных техников. GPS отметки, фотодоказательства, еженедельные отчёты и синхронизация с Flow в реальном времени.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = appMeta[locale] ?? appMeta[locale.startsWith('en-') ? 'en' : 'it'];
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: buildLocaleAlternates(locale, '/products/geotapp-timetracker/'),
    openGraph: {
      title: m.title,
      description: m.description,
      url: `https://geotapp.com/${locale}/products/geotapp-timetracker/`,
      type: 'website',
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: m.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.description,
    },
  };
}

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const APP_FAQ: Record<string, object> = {
  it: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Cos\'è GeoTapp TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker è l\'app mobile per tecnici che registra presenze, attività e prove fotografiche direttamente dal campo. Tutto finisce nel report sigillato, che il cliente verifica da solo con GeoTapp Verifier.' } },
      { '@type': 'Question', name: 'Cosa succede se manca la rete?', acceptedAnswer: { '@type': 'Answer', text: 'La timbratura resta salvata sul telefono e parte da sola quando torna il segnale, con l\'ora in cui è stata fatta. Finché non arriva, in Flow non si vede.' } },
      { '@type': 'Question', name: 'Come si differenzia GeoTapp TimeTracker da una semplice app di timbratura?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker non è solo una timbratura: ogni turno, con le sue posizioni, le foto di prova e le note, finisce in un report sigillato con impronte crittografiche. Il cliente lo verifica da solo: qualsiasi modifica successiva, anche da parte dell\'amministratore, è rilevabile.' } },
      { '@type': 'Question', name: 'GeoTapp TimeTracker funziona su Android e iOS?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. L\'app è su Google Play e App Store. Serve Android 8.0 o successivo, oppure iOS 26.2 o successivo.' } },
      { '@type': 'Question', name: 'GeoTapp TimeTracker rispetta il GDPR?', acceptedAnswer: { '@type': 'Answer', text: 'È costruito per starci dentro: registra la posizione solo quando il lavoratore timbra (entrata, pause, uscita) o scatta una foto di prova, mai in modo continuo, e non chiede nemmeno il permesso di leggere la posizione in background. Il dipendente vede le sue timbrature e i suoi report nell\'app. Informativa e, dove serve, accordo sindacale restano a carico del datore di lavoro.' } },
    ],
  },
  en: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is GeoTapp TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker is the mobile app for field technicians that records attendance, activities and photo evidence directly from the field. It all ends up in the sealed report, which the client verifies alone with GeoTapp Verifier.' } },
      { '@type': 'Question', name: 'What happens if there is no signal?', acceptedAnswer: { '@type': 'Answer', text: 'The clock-in stays saved on the phone and is sent on its own when the signal returns, with the time at which it was made. Until it arrives, it does not show in Flow.' } },
      { '@type': 'Question', name: 'How does GeoTapp TimeTracker differ from a simple time-tracking app?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker is not just a clock-in: every shift, with its locations, proof photos and notes, ends up in a report sealed with cryptographic fingerprints. The client verifies it alone: any later modification, even by the administrator, is detectable.' } },
      { '@type': 'Question', name: 'Does GeoTapp TimeTracker work on Android and iOS?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The app is on Google Play and the App Store. It needs Android 8.0 or later, or iOS 26.2 or later.' } },
      { '@type': 'Question', name: 'Does GeoTapp TimeTracker respect the GDPR?', acceptedAnswer: { '@type': 'Answer', text: 'It is built to stay within it: it records location only when the worker clocks in (start, breaks, finish) or takes a proof photo, never continuously, and it does not even ask for permission to read location in the background. Employees see their clock-ins and their reports in the app. The notice and, where needed, a union agreement remain the employer\'s responsibility.' } },
    ],
  },
  de: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist GeoTapp TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker ist die mobile App für Techniker im Außendienst, die Anwesenheit, Tätigkeiten und Nachweisfotos direkt vor Ort erfasst. Alles landet im versiegelten Bericht, den der Kunde selbst mit GeoTapp Verifier prüft.' } },
      { '@type': 'Question', name: 'Was passiert, wenn kein Netz da ist?', acceptedAnswer: { '@type': 'Answer', text: 'Die Buchung bleibt auf dem Telefon gespeichert und wird von selbst gesendet, sobald wieder Empfang besteht, mit der Uhrzeit, zu der sie erfasst wurde. Bis sie ankommt, ist sie in Flow nicht zu sehen.' } },
      { '@type': 'Question', name: 'Wie unterscheidet sich GeoTapp TimeTracker von einer einfachen Stempel-App?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker ist nicht nur eine Stempeluhr: Jede Schicht mit ihren Standorten, Nachweisfotos und Notizen landet in einem Bericht, der mit kryptografischen Fingerabdrücken versiegelt ist. Der Kunde prüft ihn selbst: Jede spätere Änderung, auch durch den Administrator, ist erkennbar.' } },
      { '@type': 'Question', name: 'Läuft GeoTapp TimeTracker auf Android und iOS?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Die App gibt es bei Google Play und im App Store. Sie braucht Android 8.0 oder neuer, oder iOS 26.2 oder neuer.' } },
      { '@type': 'Question', name: 'Hält GeoTapp TimeTracker die DSGVO ein?', acceptedAnswer: { '@type': 'Answer', text: 'Es ist so gebaut, dass es innerhalb ihrer Grenzen bleibt: Es erfasst den Standort nur, wenn die Person stempelt (Beginn, Pausen, Ende) oder ein Nachweisfoto aufnimmt, nie fortlaufend, und fragt nicht einmal nach der Berechtigung, den Standort im Hintergrund zu lesen. Die Beschäftigten sehen ihre Buchungen und ihre Berichte in der App. Information und, wo erforderlich, Betriebsvereinbarung bleiben Sache des Arbeitgebers.' } },
    ],
  },
  nl: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wat is GeoTapp TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker is de mobiele app voor monteurs die aanwezigheid, activiteiten en fotobewijzen rechtstreeks in het veld vastlegt. Alles komt in het verzegelde rapport, dat de klant zelf controleert met GeoTapp Verifier.' } },
      { '@type': 'Question', name: 'Wat gebeurt er als er geen netwerk is?', acceptedAnswer: { '@type': 'Answer', text: 'De registratie blijft op de telefoon bewaard en wordt vanzelf verzonden zodra het signaal terugkomt, met het tijdstip waarop ze is gemaakt. Zolang ze niet is aangekomen, is ze in Flow niet zichtbaar.' } },
      { '@type': 'Question', name: 'Hoe verschilt GeoTapp TimeTracker van een simpele registratie-app?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker is niet alleen een registratie: elke dienst, met zijn locaties, bewijsfoto\'s en notities, komt in een verzegeld rapport met cryptografische vingerafdrukken. De klant controleert het zelf: elke latere wijziging, ook door de beheerder, is zichtbaar.' } },
      { '@type': 'Question', name: 'Werkt GeoTapp TimeTracker op Android en iOS?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. De app staat op Google Play en in de App Store. Vereist Android 8.0 of nieuwer, of iOS 26.2 of nieuwer.' } },
      { '@type': 'Question', name: 'Houdt GeoTapp TimeTracker zich aan de AVG?', acceptedAnswer: { '@type': 'Answer', text: 'Het is gebouwd om daarbinnen te blijven: het legt de locatie alleen vast wanneer de medewerker registreert (aankomst, pauzes, vertrek) of een bewijsfoto maakt, nooit doorlopend, en vraagt zelfs geen toestemming om de locatie op de achtergrond te lezen. De werknemer ziet zijn registraties en zijn rapporten in de app. De privacyverklaring en, waar nodig, het akkoord met de vakbond blijven voor rekening van de werkgever.' } },
    ],
  },
  sv: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Vad är GeoTapp TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker är appen för GPS-tidsrapportering för fälttekniker. Den registrerar närvaro, aktiviteter och fotobevis direkt från fältet, och varje incheckning kan verifieras av vem som helst via GeoTapp Verifier.' } },
      { '@type': 'Question', name: 'Fungerar GeoTapp TimeTracker utan internet?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Appen fungerar offline och sparar alla GPS-incheckningar, foton och anteckningar lokalt. Data synkroniseras med GeoTapp Flow så snart uppkopplingen återställs.' } },
      { '@type': 'Question', name: 'Hur skiljer sig GeoTapp TimeTracker från en vanlig app för tidsrapportering?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp TimeTracker är inte bara tidsrapportering: varje stämpling förseglas med verklig GPS, kryptografisk hash och fotobevis. Rapporten kan verifieras oberoende, och varje ändring, även av administratören, är spårbar.' } },
      { '@type': 'Question', name: 'Fungerar GeoTapp TimeTracker på Android och iOS?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Appen finns på Google Play Store och Apple App Store och fungerar på alla Android- (6.0+) och iOS-enheter (14+).' } },
      { '@type': 'Question', name: 'Är GeoTapp TimeTracker förenlig med GDPR?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp registrerar GPS-positionen endast vid stämplingen, inte kontinuerligt. Medarbetaren kan när som helst se alla sina registrerade uppgifter.' } },
    ],
  },
};

const APP_DESCRIPTION: Record<string, string> = {
  it: "GeoTapp TimeTracker è l'app mobile per tecnici sul campo: timbratura con posizione controllata, prove fotografiche, report settimanali e sincronizzazione in tempo reale con GeoTapp Flow. Funziona offline.",
  en: 'GeoTapp TimeTracker is the native Android and iOS app for field technicians: clock-in with location, proof photos, notes and weekly reports, connected to GeoTapp Flow. If there is no signal, clock-ins are saved on the phone and sent when it returns.',
  de: 'GeoTapp TimeTracker ist die native Android- und iOS-App für Techniker im Außendienst: Stempeln mit Standort, Nachweisfotos, Notizen und Wochenberichte, verbunden mit GeoTapp Flow. Ist kein Netz da, werden die Buchungen auf dem Telefon gespeichert und gesendet, sobald es wieder da ist.',
  fr: "GeoTapp TimeTracker est l'application mobile pour techniciens terrain : pointage GPS vérifié, preuves photo, rapports hebdomadaires et synchronisation temps réel avec GeoTapp Flow. Fonctionne hors ligne.",
  es: 'GeoTapp TimeTracker es la app móvil para técnicos de campo: fichaje GPS verificado, pruebas fotográficas, informes semanales y sincronización en tiempo real con GeoTapp Flow. Funciona sin conexión.',
  nl: 'GeoTapp TimeTracker is de mobiele app voor monteurs in het veld: registratie met gecontroleerde locatie, fotobewijzen, weekrapporten en synchronisatie met GeoTapp Flow. Werkt offline.',
  pt: 'GeoTapp TimeTracker é o app móvel para técnicos de campo: ponto GPS verificado, provas fotográficas, relatórios semanais e sincronização em tempo real com o GeoTapp Flow. Funciona offline.',
  sv: 'GeoTapp TimeTracker är appen för GPS-tidsrapportering för fälttekniker: verifierad incheckning, fotobevis, veckorapporter och realtidssynkronisering med GeoTapp Flow. Fungerar offline.',
  da: 'GeoTapp TimeTracker er mobilappen til serviceteknikere: verificeret GPS-ind- og udtjekning, fotobeviser, ugentlige rapporter og realtidssynkronisering med GeoTapp Flow. Fungerer offline.',
  nb: 'GeoTapp TimeTracker er mobilappen for serviceteknikere: verifisert GPS-innsjekking, fotobevis, ukentlige rapporter og sanntidssynkronisering med GeoTapp Flow. Fungerer offline.',
  ru: 'GeoTapp TimeTracker, мобильное приложение для выездных техников: верифицированные GPS-отметки, фотодоказательства, еженедельные отчёты и синхронизация с GeoTapp Flow в реальном времени. Работает офлайн.',
};

const APP_FEATURES: Record<string, string[]> = {
  it: [
    'Posizione controllata alla timbratura, posizioni simulate rifiutate',
    'Prove fotografiche con timestamp e GPS',
    'Funziona offline e sincronizza automaticamente',
    'Report sigillati crittograficamente',
    'Informativa GPS firmata nell\'app prima di timbrare',
    'Integrazione nativa con GeoTapp Flow',
    'Disponibile su Google Play e App Store',
    'Pensata per il GDPR: posizione solo alla timbratura',
  ],
  en: [
    'Clock-in with location at start, breaks and finish; simulated locations rejected',
    'Photo evidence with time and location',
    'Clock-ins saved on the phone when there is no signal, sent when it returns',
    'Cryptographically sealed reports',
    'GPS notice signed as acknowledged in the app before the first clock-in',
    'Native integration with GeoTapp Flow',
    'Available on Google Play and App Store',
    'Location only when the worker clocks in or takes a proof photo, never continuously',
  ],
  de: [
    'Stempeln mit Standort bei Beginn, Pausen und Ende; simulierte Standorte werden abgewiesen',
    'Nachweisfotos mit Uhrzeit und Standort',
    'Buchungen bleiben ohne Netz auf dem Telefon und werden gesendet, sobald es wieder da ist',
    'Kryptografisch versiegelte Berichte',
    'GPS-Information, vor der ersten Buchung in der App als zur Kenntnis genommen bestätigt',
    'Native Anbindung an GeoTapp Flow',
    'Verfügbar bei Google Play und im App Store',
    'Standort nur, wenn die Person stempelt oder ein Nachweisfoto aufnimmt, nie fortlaufend',
  ],
  nl: [
    'Locatie gecontroleerd bij de registratie, gesimuleerde locaties geweigerd',
    'Bewijsfoto\'s met tijdstempel en gps',
    'Werkt offline en synchroniseert automatisch',
    'Cryptografisch verzegelde rapporten',
    'GPS-verklaring ondertekend in de app vóór het registreren',
    'Native integratie met GeoTapp Flow',
    'Beschikbaar op Google Play en de App Store',
    'Gebouwd met het oog op de AVG: locatie alleen bij de registratie',
  ],
};

function buildAppSoftware(locale: AppLocale) {
  const rate = convertEurToLocale(EUR_PRICES.tracker.tier1.perSeatMonthly, locale);
  const description = APP_DESCRIPTION[locale] ?? APP_DESCRIPTION.en;
  const featureList = APP_FEATURES[locale] ?? APP_FEATURES.en;
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    '@id': `https://geotapp.com/${locale}/products/geotapp-timetracker/#software`,
    name: 'GeoTapp TimeTracker',
    operatingSystem: 'Android 8.0+, iOS 26.2+',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Time Tracking',
    description,
    featureList,
    image: 'https://geotapp.com/logoTT.webp',
    screenshot: [
      'https://geotapp.com/screenshots/timetracker-dashboard.webp',
      'https://geotapp.com/screenshots/timetracker-richieste.webp',
    ],
    inLanguage: locale,
    offers: {
      '@type': 'Offer',
      price: rate.amount.toFixed(2),
      priceCurrency: getCurrencyForLocale(locale),
      availability: 'https://schema.org/InStock',
      url: `https://geotapp.com/${locale}/trial/`,
      description: `14-day free trial. Paid plans from ${rate.formatted} per operator per month.`,
    },
    publisher: { '@id': 'https://geotapp.com/#organization' },
    url: `https://geotapp.com/${locale}/products/geotapp-timetracker/`,
  };
}

type Props = { params: Promise<{ locale: string }> };

export default async function LocaleAppPage({ params }: Props) {
  const { locale } = await params;
  const faq = APP_FAQ[locale] ?? APP_FAQ['en'];
  const software = buildAppSoftware(locale as AppLocale);
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: 'GeoTapp TimeTracker', item: `https://geotapp.com/${locale}/products/geotapp-timetracker/` },
    ],
  };
  // Freschezza per AI/Google: data vera dell'ultimo commit sui file di questa
  // pagina (vedi src/lib/seo/content-dates.ts), non la data di build.
  const pageKey = 'products/geotapp-timetracker';
  const m = appMeta[locale] ?? appMeta[locale.startsWith('en-') ? 'en' : 'it'];
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: m.title,
    description: m.description,
    url: `https://geotapp.com/${locale}/products/geotapp-timetracker/`,
    dateModified: updatedIsoFor(pageKey),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <AppPage />
      {/* FAQ VISIBILE (H3) + schema FAQPage: FaqFromSchema rende entrambi, cosi' il
          testo e' citabile dagli AI (prima le FAQ vivevano solo nel <script> JSON-LD,
          invisibili: 0 heading a domanda, l'AI non le pescava). Allineato a Flow. */}
      {faq && <FaqFromSchema faq={faq} locale={locale} />}
      <BlogHighlights locale={locale as AppLocale} categoryId={108} />
      <SettoriLinks locale={locale as AppLocale} settori={['pulizie', 'sicurezza']} />
      <UpdatedOnLine pageKey={pageKey} locale={locale} />
    </>
  );
}
