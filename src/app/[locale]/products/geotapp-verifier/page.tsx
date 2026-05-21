
import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import VerifierPage from '../../../products/geotapp-verifier/page';
import BlogHighlights from '@/components/BlogHighlights';
import SettoriLinks from '@/components/SettoriLinks';
import { type AppLocale } from '@/lib/i18n/config';
import { getCurrencyForLocale } from '@/lib/pricing';

const verifierMeta: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp Verifier — Verifica Indipendente dei Report di Lavoro', description: 'GeoTapp Verifier certifica ogni intervento con dati GPS sigillati, prove fotografiche con timestamp e report non alterabili. Verifica indipendente per aziende che devono difendere il lavoro svolto.' },
  en: { title: 'GeoTapp Verifier — Independent Field Work Report Verification', description: 'GeoTapp Verifier certifies every job with sealed GPS data, timestamped photo evidence and tamper-proof reports. Independent verification for companies that need to defend completed work.' },
  de: { title: 'GeoTapp Verifier — Unabhängige Überprüfung von Arbeitsberichten', description: 'GeoTapp Verifier zertifiziert jeden Einsatz mit versiegelten GPS-Daten, zeitgestempelten Fotobeweisen und manipulationssicheren Berichten.' },
  fr: { title: "GeoTapp Verifier — Vérification Indépendante des Rapports d'Intervention", description: 'GeoTapp Verifier certifie chaque intervention avec des données GPS scellées, des preuves photographiques horodatées et des rapports inaltérables.' },
  es: { title: 'GeoTapp Verifier — Verificación Independiente de Informes de Trabajo', description: 'GeoTapp Verifier certifica cada intervención con datos GPS sellados, pruebas fotográficas con marca de tiempo e informes a prueba de manipulaciones.' },
  nl: { title: 'GeoTapp Verifier — Onafhankelijke Verificatie van Werkrapporten', description: 'GeoTapp Verifier certificeert elke interventie met verzegelde GPS-gegevens, getimestampte fotobewijs en fraudebestendige rapporten.' },
  pt: { title: 'GeoTapp Verifier — Verificação Independente de Relatórios de Trabalho', description: 'GeoTapp Verifier certifica cada intervenção com dados GPS selados, provas fotográficas com carimbo de data/hora e relatórios à prova de adulteração.' },
  sv: { title: 'GeoTapp Verifier — Oberoende Verifiering av Arbetsrapporter', description: 'GeoTapp Verifier certifierar varje insats med förseglad GPS-data, tidsstämplad fotodokumentation och manipuleringssäkra rapporter.' },
  da: { title: 'GeoTapp Verifier — Uafhængig Verifikation af Arbejdsrapporter', description: 'GeoTapp Verifier certificerer hvert job med forseglet GPS-data, tidsstemplede fotobeviser og manipulationssikre rapporter.' },
  nb: { title: 'GeoTapp Verifier — Uavhengig Verifisering av Arbeidsrapporter', description: 'GeoTapp Verifier sertifiserer hvert oppdrag med forseglet GPS-data, tidsstemplede fotobevis og manipuleringssikre rapporter.' },
  ru: { title: 'GeoTapp Verifier — Независимая Проверка Отчётов о Работе', description: 'GeoTapp Verifier сертифицирует каждый выезд с помощью запечатанных GPS-данных, фотодоказательств с временными метками и защищённых от изменений отчётов.' },
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
      images: [{ url: '/logoVerifier.webp', width: 1200, height: 630, alt: m.title }],
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
      { '@type': 'Question', name: 'Come funziona la verifica di un report GeoTapp?', acceptedAnswer: { '@type': 'Answer', text: 'Ogni report GeoTapp è sigillato con un hash crittografico al momento della chiusura. Il cliente riceve un link univoco e può verificare indipendentemente su geotapp.com/products/geotapp-verifier che i dati GPS, le foto e i timestamp non siano stati modificati dopo la creazione.' } },
      { '@type': 'Question', name: 'Chi può verificare un report GeoTapp Verifier?', acceptedAnswer: { '@type': 'Answer', text: 'Chiunque abbia il link può verificare il report senza accedere all\'account aziendale. Il sistema confronta il sigillo digitale e conferma l\'integrità dei dati in modo completamente indipendente.' } },
      { '@type': 'Question', name: 'Cosa succede se un cliente contesta il lavoro svolto?', acceptedAnswer: { '@type': 'Answer', text: 'Con GeoTapp Verifier puoi mostrare al cliente il link di verifica. Il report contiene GPS certificato, prove fotografiche con timestamp e firma digitale non alterabile — prove che reggono anche in sede legale.' } },
      { '@type': 'Question', name: 'GeoTapp Verifier è conforme al GDPR?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. I dati registrati vengono trattati in conformità al GDPR. GeoTapp non raccoglie dati di posizione in modo continuo — solo al momento dell\'apertura e chiusura del turno o intervento.' } },
      { '@type': 'Question', name: 'GeoTapp Verifier funziona con Flow e TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'Sì. Verifier è il componente di certificazione che si integra nativamente con GeoTapp Flow (per la gestione operativa) e GeoTapp TimeTracker (per la timbratura GPS dei tecnici sul campo).' } },
    ],
  },
  en: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How does GeoTapp Verifier report verification work?', acceptedAnswer: { '@type': 'Answer', text: 'Every GeoTapp report is sealed with a cryptographic hash when closed. The client receives a unique link and can independently verify at geotapp.com/products/geotapp-verifier that GPS data, photos and timestamps have not been modified after creation.' } },
      { '@type': 'Question', name: 'Who can verify a GeoTapp Verifier report?', acceptedAnswer: { '@type': 'Answer', text: 'Anyone with the link can verify the report without accessing your company account. The system compares the digital seal and confirms data integrity in a completely independent way.' } },
      { '@type': 'Question', name: 'What happens when a client disputes completed work?', acceptedAnswer: { '@type': 'Answer', text: 'With GeoTapp Verifier you can show the client the verification link. The report contains certified GPS, photo evidence with timestamps and an unalterable digital signature — evidence that holds up legally.' } },
      { '@type': 'Question', name: 'Is GeoTapp Verifier GDPR compliant?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Recorded data is processed in compliance with GDPR. GeoTapp does not collect location data continuously — only at shift or job opening and closing.' } },
      { '@type': 'Question', name: 'Does GeoTapp Verifier work with Flow and TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Verifier is the certification component that integrates natively with GeoTapp Flow (for operational management) and GeoTapp TimeTracker (for GPS time tracking of field technicians).' } },
    ],
  },
  de: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wie funktioniert die Berichtsverifizierung mit GeoTapp Verifier?', acceptedAnswer: { '@type': 'Answer', text: 'Jeder GeoTapp-Bericht wird beim Abschluss mit einem kryptographischen Hash versiegelt. Der Kunde erhält einen eindeutigen Link und kann auf geotapp.com/products/geotapp-verifier unabhängig prüfen, ob GPS-Daten, Fotos und Zeitstempel nach der Erstellung unverändert geblieben sind.' } },
      { '@type': 'Question', name: 'Wer kann einen GeoTapp Verifier-Bericht prüfen?', acceptedAnswer: { '@type': 'Answer', text: 'Jeder mit dem Link kann den Bericht prüfen, ohne auf Ihr Unternehmenskonto zugreifen zu müssen.' } },
      { '@type': 'Question', name: 'Was passiert, wenn ein Kunde die geleistete Arbeit bestreitet?', acceptedAnswer: { '@type': 'Answer', text: 'Mit GeoTapp Verifier können Sie dem Kunden den Verifikationslink zeigen — mit zertifiziertem GPS, Fotobeweisen mit Zeitstempel und nicht veränderbarer digitaler Signatur.' } },
      { '@type': 'Question', name: 'Ist GeoTapp Verifier DSGVO-konform?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. GeoTapp erfasst den Standort nur beim Ein- und Ausstempeln, nicht kontinuierlich. Die Daten werden DSGVO-konform verarbeitet.' } },
      { '@type': 'Question', name: 'Funktioniert GeoTapp Verifier mit Flow und TimeTracker?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Verifier ist das Zertifizierungsmodul, das sich nativ in GeoTapp Flow und GeoTapp TimeTracker integriert.' } },
    ],
  },
};

function buildVerifierSoftware(locale: AppLocale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'GeoTapp Verifier',
    operatingSystem: 'Web',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: getCurrencyForLocale(locale),
      description: 'Included in GeoTapp plans. Free verification for report recipients.',
    },
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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {faq && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }} />
      <VerifierPage params={params} />
      <BlogHighlights locale={locale as AppLocale} categoryId={9} />
      <SettoriLinks locale={locale as AppLocale} settori={['pulizie', 'installatori', 'sicurezza']} />
    </>
  );
}
