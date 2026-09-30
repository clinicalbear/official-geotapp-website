
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
  en: { title: "GeoTapp Verifier: independent work report verification", description: "Verifier checks that a GeoTapp report has not been modified after it was sealed and that it comes from GeoTapp. Free, no account, offline too." },
  de: { title: "GeoTapp Verifier: unabhängige Prüfung von Arbeitsberichten", description: "Verifier prüft, ob ein GeoTapp-Bericht nach der Versiegelung verändert wurde und ob er von GeoTapp stammt. Kostenlos, ohne Konto, auch offline." },
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
  const m = verifierMeta[locale] ?? verifierMeta[locale.startsWith('en-') ? 'en' : 'it'];
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
      { '@type': 'Question', name: 'How does GeoTapp Verifier report verification work?', acceptedAnswer: { '@type': 'Answer', text: 'Every GeoTapp report is sealed when it is generated: a chain of SHA-256 fingerprints links events and photos, and the root is signed with GeoTapp\'s key. The client receives the report as a PDF and a fixed link to the sealed package; they verify it online or with the offline verifier, which recalculates the fingerprints and checks the signature.' } },
      { '@type': 'Question', name: 'Who can verify a GeoTapp report?', acceptedAnswer: { '@type': 'Answer', text: 'Anyone who has the package, without accessing the company\'s account. The offline verifier carries the public key inside: it works even without internet and even without GeoTapp.' } },
      { '@type': 'Question', name: 'What happens when a client disputes completed work?', acceptedAnswer: { '@type': 'Answer', text: 'You can show them the report: it contains times, the locations recorded at clock-in and proof photos, and they can check for themselves that nobody has modified it since the seal. The check shows the document is intact; on its own it is not absolute proof of the underlying fact, nor legal advice.' } },
      { '@type': 'Question', name: 'Does GeoTapp Verifier respect the GDPR?', acceptedAnswer: { '@type': 'Answer', text: 'The offline verifier sends nothing to anyone: it runs on your computer. Online verification passes the file through our server, which does not store it. As for the data in the report, GeoTapp records location only when the worker clocks in (start, breaks, finish) or takes a proof photo, never continuously.' } },
      { '@type': 'Question', name: 'Does GeoTapp Verifier work with Flow and TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The data is born on GeoTapp TimeTracker, in the field, and the report is generated in GeoTapp Flow, in the office. Verifier is the free tool anyone uses to check that report.' } },
    ],
  },
  de: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie funktioniert die Prüfung eines GeoTapp-Berichts?', acceptedAnswer: { '@type': 'Answer', text: 'Jeder GeoTapp-Bericht wird bei der Erstellung versiegelt: Eine Kette von SHA-256-Fingerabdrücken verbindet Ereignisse und Fotos, und die Wurzel wird mit dem Schlüssel von GeoTapp signiert. Der Kunde erhält den Bericht als PDF und einen festen Link zum versiegelten Paket; er prüft ihn online oder mit dem Offline-Prüfprogramm, das die Fingerabdrücke neu berechnet und die Signatur kontrolliert.' } },
      { '@type': 'Question', name: 'Wer kann einen GeoTapp-Bericht prüfen?', acceptedAnswer: { '@type': 'Answer', text: 'Jeder, der das Paket hat, ohne Zugriff auf das Konto des Unternehmens. Das Offline-Prüfprogramm trägt den öffentlichen Schlüssel in sich: Es funktioniert auch ohne Internet und auch ohne GeoTapp.' } },
      { '@type': 'Question', name: 'Was passiert, wenn ein Kunde die geleistete Arbeit bestreitet?', acceptedAnswer: { '@type': 'Answer', text: 'Sie können ihm den Bericht zeigen: Er enthält Zeiten, die bei den Buchungen erfassten Standorte und Nachweisfotos, und er kann selbst prüfen, dass ihn seit der Versiegelung niemand verändert hat. Die Prüfung zeigt, dass das Dokument unversehrt ist; für sich allein ist sie weder ein absoluter Beweis des zugrunde liegenden Sachverhalts noch Rechtsberatung.' } },
      { '@type': 'Question', name: 'Hält GeoTapp Verifier die DSGVO ein?', acceptedAnswer: { '@type': 'Answer', text: 'Das Offline-Prüfprogramm schickt nichts an irgendjemanden: Es läuft auf Ihrem Computer. Bei der Online-Prüfung läuft die Datei über unseren Server, der sie nicht speichert. Zu den Daten im Bericht: GeoTapp erfasst den Standort nur, wenn die Person stempelt (Beginn, Pausen, Ende) oder ein Nachweisfoto aufnimmt, nie fortlaufend.' } },
      { '@type': 'Question', name: 'Funktioniert GeoTapp Verifier mit Flow und TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Die Daten entstehen in GeoTapp TimeTracker, vor Ort, und der Bericht wird in GeoTapp Flow im Büro erstellt. Verifier ist das kostenlose Werkzeug, mit dem jeder diesen Bericht prüft.' } },
    ],
  },
};

const VERIFIER_DESCRIPTION: Record<string, string> = {
  it: 'GeoTapp Verifier controlla che un report GeoTapp non sia stato modificato dopo il sigillo e che venga davvero da GeoTapp. È gratuito, senza account, anche offline: per le aziende che devono dimostrare il lavoro svolto e per i loro clienti.',
  en: 'GeoTapp Verifier checks that a GeoTapp report has not been modified after it was sealed and that it really comes from GeoTapp. It is free, needs no account and works offline too: for companies that need to prove the work done and for their clients.',
  de: 'GeoTapp Verifier prüft, ob ein GeoTapp-Bericht nach der Versiegelung verändert wurde und ob er wirklich von GeoTapp stammt. Er ist kostenlos, braucht kein Konto und funktioniert auch offline: für Unternehmen, die die geleistete Arbeit nachweisen müssen, und für ihre Kunden.',
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
    'Verifica anche offline, senza account',
  ],
  en: [
    'Report sealed when it is generated: SHA-256 hash chain signed with GeoTapp\'s key',
    'Independent verification: clients do not access your account',
    'Chain across events, photos and times',
    'Fixed link to the sealed package (geotapp.com/r/ plus a code)',
    'Free offline verifier, a single file with the public key inside',
    'Works with the reports generated by Flow and TimeTracker',
  ],
  de: [
    'Bericht bei der Erstellung versiegelt: SHA-256-Kette, mit dem Schlüssel von GeoTapp signiert',
    'Unabhängige Prüfung: Kunden haben keinen Zugriff auf Ihr Konto',
    'Kette über Ereignisse, Fotos und Zeiten',
    'Fester Link zum versiegelten Paket (geotapp.com/r/ plus Code)',
    'Kostenloses Offline-Prüfprogramm, eine einzelne Datei mit dem öffentlichen Schlüssel darin',
    'Funktioniert mit den Berichten aus Flow und TimeTracker',
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
  const m = verifierMeta[locale] ?? verifierMeta[locale.startsWith('en-') ? 'en' : 'it'];
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
