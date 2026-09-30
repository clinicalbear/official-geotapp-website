
import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import VerifierPage from '../../../products/geotapp-verifier/page';
import BlogHighlights from '@/components/BlogHighlights';
import SettoriLinks from '@/components/SettoriLinks';
import UpdatedOnLine, { updatedIsoFor } from '@/components/seo/UpdatedOnLine';
import { type AppLocale } from '@/lib/i18n/config';
import { getCurrencyForLocale } from '@/lib/pricing';

const verifierMeta: Record<string, { title: string; description: string }> = {
  it: { title: "GeoTapp Verifier: verifica indipendente dei report", description: "Verifier controlla che un report GeoTapp non sia stato modificato dopo il sigillo e che venga da GeoTapp. Gratuito, senza account, anche offline." },
  en: { title: "GeoTapp Verifier: independent work report verification", description: "Verifier makes every job verifiable with sealed GPS, timestamped photos and tamper-evident reports. Your client checks the work alone, with no account." },
  de: { title: "GeoTapp Verifier: unabhängige Prüfung von Arbeitsberichten", description: "Verifier macht jeden Einsatz überprüfbar mit versiegelten GPS-Daten, Fotos mit Zeitstempel und Berichten mit Manipulationsnachweis. Ihr Kunde prüft selbst." },
  fr: { title: "GeoTapp Verifier: vérification indépendante des rapports", description: "Verifier rend chaque intervention vérifiable avec un GPS scellé, des photos horodatées et des rapports aux modifications traçables. Votre client vérifie seul, sans compte." },
  es: { title: "GeoTapp Verifier: verificación independiente de informes", description: "Verifier hace verificable cada intervención con GPS sellado, fotos con marca de tiempo e informes con alteraciones detectables. Tu cliente lo comprueba solo, sin cuenta." },
  nl: { title: "GeoTapp Verifier: onafhankelijke verificatie van rapporten", description: "Verifier maakt elke interventie verifieerbaar met verzegelde GPS, foto's met tijdstempel en rapporten met detecteerbare wijzigingen. Uw klant controleert het zelf." },
  pt: { title: "GeoTapp Verifier: verificação independente de relatórios", description: "O Verifier torna cada intervenção verificável com GPS selado, fotos com data e hora e relatórios com alterações detetáveis. O seu cliente confirma sozinho, sem conta." },
  sv: { title: "GeoTapp Verifier: oberoende verifiering av rapporter", description: "Verifier gör varje insats verifierbar med förseglad GPS, tidsstämplade foton och rapporter med spårbara ändringar. Din kund kontrollerar själv, utan konto." },
  da: { title: "GeoTapp Verifier: uafhængig verifikation af rapporter", description: "Verifier gør hvert job verificerbart med forseglet GPS, tidsstemplede fotos og rapporter med sporbare ændringer. Din kunde tjekker det selv, uden konto." },
  nb: { title: "GeoTapp Verifier: uavhengig verifisering av rapporter", description: "Verifier gjør hvert oppdrag etterprøvbart med forseglet GPS, tidsstemplede bilder og rapporter med sporbare endringer. Kunden din sjekker selv, uten konto." },
  ru: { title: "GeoTapp Verifier: независимая проверка отчётов о работе", description: "Verifier делает каждый выезд проверяемым: запечатанные GPS-данные, фото с отметкой времени, отчёты с обнаруживаемыми изменениями. Заказчик проверяет сам, без аккаунта." },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = verifierMeta[locale] ?? verifierMeta['it'];
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: buildLocaleAlternates(locale, '/products/geotapp-verifier/'),
    openGraph: {
      title: m.title,
      description: m.description,
      url: `https://geotapp.com/${locale}/products/geotapp-verifier/`,
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

const VERIFIER_FAQ: Record<string, object> = {
  it: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Come funziona la verifica di un report GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Ogni report GeoTapp viene sigillato quando è generato: una catena di impronte SHA-256 lega eventi e foto, e la radice è firmata con la chiave di GeoTapp. Il cliente riceve il report in PDF e un link fisso al pacchetto sigillato; lo verifica online o con il verificatore offline, che ricalcola le impronte e controlla la firma.' } },
      { '@type': 'Question', name: 'Chi può verificare un report GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Chiunque abbia il pacchetto, senza accedere all\'account dell\'azienda. Il verificatore offline porta dentro la chiave pubblica: funziona anche senza internet e anche senza GeoTapp.' } },
      { '@type': 'Question', name: 'Cosa succede se un cliente contesta il lavoro svolto?', acceptedAnswer: { '@type': 'Answer', text: 'Puoi mostrargli il report: contiene orari, posizioni registrate alle timbrature e foto di prova, e lui stesso può verificare che nessuno l\'abbia modificato dopo il sigillo. La verifica dimostra che il documento è integro; da sola non è prova assoluta del fatto materiale né consulenza legale.' } },
      { '@type': 'Question', name: 'GeoTapp Verifier rispetta il GDPR?', acceptedAnswer: { '@type': 'Answer', text: 'Il verificatore offline non manda niente a nessuno: gira sul tuo computer. La verifica online passa il file dal nostro server, che non lo salva. Quanto ai dati nel report, GeoTapp registra la posizione solo quando il lavoratore timbra (entrata, pause, uscita) o scatta una foto di prova, mai in modo continuo.' } },
      { '@type': 'Question', name: 'GeoTapp Verifier funziona con Flow e TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. I dati nascono su GeoTapp TimeTracker, sul campo, e il report si genera in GeoTapp Flow, in ufficio. Verifier è lo strumento gratuito con cui chiunque controlla quel report.' } },
    ],
  },
  en: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How does GeoTapp Verifier report verification work?', acceptedAnswer: { '@type': 'Answer', text: 'Every GeoTapp report is sealed with a cryptographic hash when closed. The client receives a unique link and can independently verify at geotapp.com/products/geotapp-verifier that GPS data, photos and timestamps have not been modified after creation.' } },
      { '@type': 'Question', name: 'Who can verify a GeoTapp Verifier report?', acceptedAnswer: { '@type': 'Answer', text: 'Anyone with the link can verify the report without accessing your company account. The system compares the digital seal and confirms data integrity in a completely independent way.' } },
      { '@type': 'Question', name: 'What happens when a client disputes completed work?', acceptedAnswer: { '@type': 'Answer', text: 'With GeoTapp Verifier you can show the client the verification link. The report contains sealed GPS, photo evidence with timestamps and a digital signature where any alteration is detectable, evidence the client can check independently.' } },
      { '@type': 'Question', name: 'Is GeoTapp Verifier GDPR compliant?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Recorded data is processed in compliance with GDPR. GeoTapp does not collect location data continuously, only at shift or job opening and closing.' } },
      { '@type': 'Question', name: 'Does GeoTapp Verifier work with Flow and TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Verifier is the verifiable proof component that integrates natively with GeoTapp Flow (for operational management) and GeoTapp TimeTracker (for GPS time tracking of field technicians).' } },
    ],
  },
  de: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie funktioniert die Berichtsverifizierung mit GeoTapp Verifier?', acceptedAnswer: { '@type': 'Answer', text: 'Jeder GeoTapp-Bericht wird beim Abschluss mit einem kryptographischen Hash versiegelt. Der Kunde erhält einen eindeutigen Link und kann auf geotapp.com/products/geotapp-verifier unabhängig prüfen, ob GPS-Daten, Fotos und Zeitstempel nach der Erstellung unverändert geblieben sind.' } },
      { '@type': 'Question', name: 'Wer kann einen GeoTapp Verifier-Bericht prüfen?', acceptedAnswer: { '@type': 'Answer', text: 'Jeder mit dem Link kann den Bericht prüfen, ohne auf Ihr Unternehmenskonto zugreifen zu müssen.' } },
      { '@type': 'Question', name: 'Was passiert, wenn ein Kunde die geleistete Arbeit bestreitet?', acceptedAnswer: { '@type': 'Answer', text: 'Mit GeoTapp Verifier können Sie dem Kunden den Verifikationslink zeigen, mit versiegeltem GPS, Fotobeweisen mit Zeitstempel und einer digitalen Signatur, bei der jede Änderung nachweisbar ist.' } },
      { '@type': 'Question', name: 'Ist GeoTapp Verifier DSGVO-konform?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp erfasst den Standort nur beim Ein- und Ausstempeln, nicht kontinuierlich. Die Daten werden DSGVO-konform verarbeitet.' } },
      { '@type': 'Question', name: 'Funktioniert GeoTapp Verifier mit Flow und TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Verifier ist das Modul für versiegelte Nachweise, das sich nativ in GeoTapp Flow und GeoTapp TimeTracker integriert.' } },
    ],
  },
};

const VERIFIER_DESCRIPTION: Record<string, string> = {
  it: 'GeoTapp Verifier controlla che un report GeoTapp non sia stato modificato dopo il sigillo e che venga davvero da GeoTapp. È gratuito, senza account, anche offline: per le aziende che devono dimostrare il lavoro svolto e per i loro clienti.',
  en: 'GeoTapp Verifier makes every job verifiable with sealed GPS data, timestamped photo evidence and tamper-evident reports. Independent verification for companies that need to defend completed work.',
  de: 'GeoTapp Verifier macht jeden Einsatz überprüfbar mit versiegelten GPS-Daten, zeitgestempelten Fotobeweisen und Berichten mit Manipulationsnachweis, unabhängig verifizierbar.',
  fr: "GeoTapp Verifier rend chaque intervention vérifiable avec des données GPS scellées, des preuves photographiques horodatées et des rapports aux modifications traçables, vérifiables indépendamment.",
  es: 'GeoTapp Verifier hace verificable cada intervención con datos GPS sellados, pruebas fotográficas con marca de tiempo e informes con alteraciones detectables, verificables de forma independiente.',
  nl: 'GeoTapp Verifier maakt elke interventie verifieerbaar met verzegelde GPS-gegevens, getimestampt fotobewijs en rapporten met detecteerbare wijzigingen, onafhankelijk te verifiëren.',
  pt: 'GeoTapp Verifier torna cada intervenção verificável com dados GPS selados, provas fotográficas com carimbo de data/hora e relatórios com alterações detetáveis, verificáveis de forma independente.',
  sv: 'GeoTapp Verifier gör varje insats verifierbar med förseglad GPS-data, tidsstämplad fotodokumentation och rapporter med spårbara ändringar, oberoende verifierbara.',
  da: 'GeoTapp Verifier gør hvert job verificerbart med forseglet GPS-data, tidsstemplede fotobeviser og rapporter med sporbare ændringer, uafhængigt verificerbare.',
  nb: 'GeoTapp Verifier gjør hvert oppdrag etterprøvbart med forseglet GPS-data, tidsstemplede fotobevis og rapporter med sporbare endringer, uavhengig verifiserbare.',
  ru: 'GeoTapp Verifier делает каждый выезд проверяемым: запечатанные GPS-данные, фотодоказательства с отметками времени и отчёты с обнаруживаемыми изменениями. Проверка независимая.',
};

const VERIFIER_FEATURES: Record<string, string[]> = {
  it: [
    'Hash crittografico applicato a ogni report alla chiusura',
    'Verifica indipendente: il committente non accede al tuo account',
    'Catena hash su foto, GPS e timestamp',
    'Link di verifica univoco condivisibile',
    'Integrazione nativa con Flow e TimeTracker',
    'Conforme GDPR',
  ],
  en: [
    'Cryptographic hash applied to every report at closure',
    'Independent verification: clients do not access your account',
    'Hash chain across photos, GPS and timestamps',
    'Unique shareable verification link',
    'Native integration with Flow and TimeTracker',
    'GDPR compliant',
  ],
  de: [
    'Kryptographischer Hash beim Abschluss jedes Berichts',
    'Unabhängige Verifizierung - Kunde benötigt keinen Kontozugang',
    'Hash-Kette über Fotos, GPS und Zeitstempel',
    'Eindeutiger teilbarer Verifikationslink',
    'Native Integration mit Flow und TimeTracker',
    'DSGVO-konform',
  ],
};

function buildVerifierSoftware(locale: AppLocale) {
  const description = VERIFIER_DESCRIPTION[locale] ?? VERIFIER_DESCRIPTION.en;
  const featureList = VERIFIER_FEATURES[locale] ?? VERIFIER_FEATURES.en;
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `https://geotapp.com/${locale}/products/geotapp-verifier/#software`,
    name: 'GeoTapp Verifier',
    operatingSystem: 'Web',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Document Verification',
    description,
    featureList,
    image: 'https://geotapp.com/logoVerifier.webp',
    screenshot: ['https://geotapp.com/screenshots/verifier-report.webp'],
    inLanguage: locale,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: getCurrencyForLocale(locale),
      availability: 'https://schema.org/InStock',
      description: 'Included in GeoTapp plans. Free verification for report recipients.',
    },
    publisher: { '@id': 'https://geotapp.com/#organization' },
    url: `https://geotapp.com/${locale}/products/geotapp-verifier/`,
  };
}

type Props = { params: Promise<{ locale: string }> };

export default async function LocaleVerifierPage({ params }: Props) {
  const { locale } = await params;
  const faq = VERIFIER_FAQ[locale] ?? VERIFIER_FAQ['en'];
  const software = buildVerifierSoftware(locale as AppLocale);
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: 'GeoTapp Verifier', item: `https://geotapp.com/${locale}/products/geotapp-verifier/` },
    ],
  };
  // Freschezza per AI/Google: data vera dell'ultimo commit sui file di questa
  // pagina (vedi src/lib/seo/content-dates.ts), non la data di build.
  const pageKey = 'products/geotapp-verifier';
  const m = verifierMeta[locale] ?? verifierMeta['it'];
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: m.title,
    description: m.description,
    url: `https://geotapp.com/${locale}/products/geotapp-verifier/`,
    dateModified: updatedIsoFor(pageKey),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {faq && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <VerifierPage params={params} />
      <BlogHighlights locale={locale as AppLocale} categoryId={9} />
      <SettoriLinks locale={locale as AppLocale} settori={['pulizie', 'installatori', 'sicurezza']} />
      <UpdatedOnLine pageKey={pageKey} locale={locale} />
    </>
  );
}
