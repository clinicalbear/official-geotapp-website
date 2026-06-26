import type { Metadata } from 'next';
import Link from 'next/link';
import { TrialCTALink } from '@/components/analytics/TrialCTALink';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/';

const META: Record<string, { title: string; description: string }> = {
  it: {
    title: 'GeoTapp vs Competitor - Confronti Completi | GeoTapp',
    description: 'Confronta GeoTapp con Connecteam, Clockify, Hubstaff e altri. Scopri perché GeoTapp è la scelta giusta per aziende con operatori sul campo che devono certificare il lavoro svolto.',
  },
  en: {
    title: 'GeoTapp vs Competitors - Full Comparisons | GeoTapp',
    description: 'Compare GeoTapp with Connecteam, Clockify, Hubstaff and others. Find out why GeoTapp is the right choice for field service companies that need to certify completed work.',
  },
  de: {
    title: 'GeoTapp vs Konkurrenten - Vollständige Vergleiche | GeoTapp',
    description: 'Vergleichen Sie GeoTapp mit Connecteam, Clockify, Hubstaff und anderen. Erfahren Sie, warum GeoTapp die richtige Wahl für Außendienstunternehmen ist.',
  },
  fr: {
    title: 'GeoTapp vs Concurrents - Comparaisons complètes | GeoTapp',
    description: 'Comparez GeoTapp avec Connecteam, Clockify, Hubstaff et d\'autres. Découvrez pourquoi GeoTapp est le bon choix pour les entreprises de terrain.',
  },
  es: {
    title: 'GeoTapp vs Competidores - Comparaciones completas | GeoTapp',
    description: 'Compara GeoTapp con Connecteam, Clockify, Hubstaff y otros. Descubre por qué GeoTapp es la elección correcta para empresas de servicio en campo.',
  },
  nl: {
    title: 'GeoTapp vs Concurrenten - Volledige vergelijkingen | GeoTapp',
    description: 'Vergelijk GeoTapp met Connecteam, Clockify, Hubstaff en anderen. Ontdek waarom GeoTapp de juiste keuze is voor bedrijven met medewerkers op locatie die werk moeten certificeren.',
  },
  pt: {
    title: 'GeoTapp vs Concorrentes - Comparações completas | GeoTapp',
    description: 'Compare a GeoTapp com Connecteam, Clockify, Hubstaff e outros. Descubra porque a GeoTapp é a escolha certa para empresas com equipas no terreno que precisam de certificar o trabalho.',
  },
  da: {
    title: 'GeoTapp vs konkurrenter - Komplette sammenligninger | GeoTapp',
    description: 'Sammenlign GeoTapp med Connecteam, Clockify, Hubstaff og andre. Find ud af, hvorfor GeoTapp er det rigtige valg for virksomheder med medarbejdere i marken, der skal certificere udført arbejde.',
  },
  sv: {
    title: 'GeoTapp vs konkurrenter - Kompletta jämförelser | GeoTapp',
    description: 'Jämför GeoTapp med Connecteam, Clockify, Hubstaff och andra. Ta reda på varför GeoTapp är rätt val för företag med personal i fält som måste certifiera utfört arbete.',
  },
  nb: {
    title: 'GeoTapp vs konkurrenter - Komplette sammenligninger | GeoTapp',
    description: 'Sammenlign GeoTapp med Connecteam, Clockify, Hubstaff og andre. Finn ut hvorfor GeoTapp er det riktige valget for bedrifter med ansatte i felt som må sertifisere utført arbeid.',
  },
  ru: {
    title: 'GeoTapp vs конкуренты, Полные сравнения | GeoTapp',
    description: 'Сравните GeoTapp с Connecteam, Clockify, Hubstaff и другими. Узнайте, почему GeoTapp, правильный выбор для компаний с сотрудниками на выезде, которым нужно сертифицировать выполненную работу.',
  },
};

const COPY: Record<string, Record<string, string>> = {
  it: { badge: 'Confronti', title_suffix: 'le alternative', intro: 'Non tutte le app sono uguali. GeoTapp è l\'unico sistema che produce prove verificabili del lavoro svolto, non solo registra ore e posizione.', cta_title: 'La prova migliore è vederlo dal vivo.', cta_desc: 'Ti mostriamo come un intervento diventa una prova verificabile, in 20 minuti, senza impegno.', cta_btn: 'Inizia subito gratuitamente!', breadcrumb: 'Confronti' },
  en: { badge: 'Comparisons', title_suffix: 'the alternatives', intro: 'Not all apps are equal. GeoTapp is the only system that produces verifiable proof of completed work, not just records hours and location.', cta_title: 'The best proof is seeing it live.', cta_desc: 'We show you how a job becomes verifiable proof, in 20 minutes, no commitment.', cta_btn: 'Start for free!', breadcrumb: 'Compare' },
  de: { badge: 'Vergleiche', title_suffix: 'die Alternativen', intro: 'Nicht alle Apps sind gleich. GeoTapp ist das einzige System, das überprüfbare Nachweise der geleisteten Arbeit liefert, nicht nur Stunden und Standort erfasst.', cta_title: 'Der beste Beweis ist, es live zu sehen.', cta_desc: 'Wir zeigen Ihnen, wie ein Einsatz zum überprüfbaren Nachweis wird, in 20 Minuten, unverbindlich.', cta_btn: 'Jetzt kostenlos starten!', breadcrumb: 'Vergleiche' },
  fr: { badge: 'Comparaisons', title_suffix: 'les alternatives', intro: 'Toutes les applications ne se valent pas. GeoTapp est le seul système qui produit des preuves vérifiables du travail effectué.', cta_title: 'La meilleure preuve, c\'est de le voir en direct.', cta_desc: 'Nous vous montrons comment une intervention devient une preuve vérifiable, en 20 minutes, sans engagement.', cta_btn: 'Commencez gratuitement !', breadcrumb: 'Comparaisons' },
  es: { badge: 'Comparaciones', title_suffix: 'las alternativas', intro: 'No todas las apps son iguales. GeoTapp es el único sistema que produce pruebas verificables del trabajo realizado.', cta_title: 'La mejor prueba es verlo en directo.', cta_desc: 'Te mostramos cómo una intervención se convierte en prueba verificable, en 20 minutos, sin compromiso.', cta_btn: '¡Empieza gratis!', breadcrumb: 'Comparaciones' },
  nl: { badge: 'Vergelijkingen', title_suffix: 'de alternatieven', intro: 'Niet alle apps zijn gelijk. GeoTapp is het enige systeem dat verifieerbaar bewijs van uitgevoerd werk levert.', cta_title: 'Het beste bewijs is het live zien.', cta_desc: 'We laten u zien hoe een opdracht verifieerbaar bewijs wordt, in 20 minuten, vrijblijvend.', cta_btn: 'Start gratis!', breadcrumb: 'Vergelijkingen' },
  pt: { badge: 'Comparações', title_suffix: 'as alternativas', intro: 'Nem todas as apps são iguais. GeoTapp é o único sistema que produz provas verificáveis do trabalho realizado.', cta_title: 'A melhor prova é ver ao vivo.', cta_desc: 'Mostramos-lhe como uma intervenção se torna prova verificável, em 20 minutos, sem compromisso.', cta_btn: 'Comece grátis!', breadcrumb: 'Comparações' },
  da: { badge: 'Sammenligninger', title_suffix: 'alternativerne', intro: 'Ikke alle apps er ens. GeoTapp er det eneste system, der producerer verificerbart bevis for udført arbejde, ikke bare registrerer timer og placering.', cta_title: 'Det bedste bevis er at se det live.', cta_desc: 'Vi viser dig, hvordan en opgave bliver til verificerbart bevis, på 20 minutter, uforpligtende.', cta_btn: 'Kom gratis i gang!', breadcrumb: 'Sammenligninger' },
  sv: { badge: 'Jämförelser', title_suffix: 'alternativen', intro: 'Alla appar är inte likadana. GeoTapp är det enda systemet som producerar verifierbara bevis på utfört arbete, inte bara registrerar timmar och plats.', cta_title: 'Det bästa beviset är att se det live.', cta_desc: 'Vi visar dig hur ett uppdrag blir verifierbart bevis, på 20 minuter, utan förpliktelser.', cta_btn: 'Kom igång gratis!', breadcrumb: 'Jämförelser' },
  nb: { badge: 'Sammenligninger', title_suffix: 'alternativene', intro: 'Ikke alle apper er like. GeoTapp er det eneste systemet som produserer verifiserbart bevis på utført arbeid, ikke bare registrerer timer og posisjon.', cta_title: 'Det beste beviset er å se det live.', cta_desc: 'Vi viser deg hvordan et oppdrag blir til verifiserbart bevis, på 20 minutter, uforpliktende.', cta_btn: 'Kom i gang gratis!', breadcrumb: 'Sammenligninger' },
  ru: { badge: 'Сравнения', title_suffix: 'альтернативы', intro: 'Не все приложения одинаковы. GeoTapp, единственная система, которая создаёт проверяемые доказательства выполненной работы, а не просто фиксирует часы и местоположение.', cta_title: 'Лучшее доказательство, увидеть вживую.', cta_desc: 'Покажем, как работа превращается в проверяемое доказательство, за 20 минут, без обязательств.', cta_btn: 'Начните бесплатно!', breadcrumb: 'Сравнения' },
};

const COMPARISONS: Record<string, { tagline: string; highlight: string }>[] = [
  {
    slug: 'geotapp-vs-connecteam', competitor: 'Connecteam',
    it: { tagline: 'Comunicazione team vs certificazione interventi', highlight: 'Connecteam gestisce la comunicazione. GeoTapp produce prove verificabili del lavoro.' },
    en: { tagline: 'Team communication vs job certification', highlight: 'Connecteam manages communication. GeoTapp produces verifiable proof of work.' },
    de: { tagline: 'Teamkommunikation vs Einsatzzertifizierung', highlight: 'Connecteam verwaltet Kommunikation. GeoTapp liefert überprüfbare Arbeitsnachweise.' },
    fr: { tagline: 'Communication d\'équipe vs certification des interventions', highlight: 'Connecteam gère la communication. GeoTapp produit des preuves vérifiables du travail.' },
    es: { tagline: 'Comunicación de equipo vs certificación de trabajos', highlight: 'Connecteam gestiona la comunicación. GeoTapp produce pruebas verificables del trabajo.' },
    pt: { tagline: 'Comunicação de equipa vs certificação de intervenções', highlight: 'A Connecteam gere a comunicação. A GeoTapp produz provas verificáveis do trabalho.' },
    nl: { tagline: 'Teamcommunicatie vs werkcertificering', highlight: 'Connecteam beheert de communicatie. GeoTapp levert verifieerbaar bewijs van het werk.' },
    da: { tagline: 'Teamkommunikation vs arbejdscertificering', highlight: 'Connecteam håndterer kommunikation. GeoTapp producerer verificerbart bevis for arbejdet.' },
    sv: { tagline: 'Teamkommunikation vs arbetscertifiering', highlight: 'Connecteam sköter kommunikationen. GeoTapp producerar verifierbara bevis på arbetet.' },
    nb: { tagline: 'Teamkommunikasjon vs arbeidssertifisering', highlight: 'Connecteam håndterer kommunikasjon. GeoTapp produserer verifiserbart bevis på arbeidet.' },
    ru: { tagline: 'Командное общение vs сертификация работы', highlight: 'Connecteam управляет общением. GeoTapp создаёт проверяемые доказательства работы.' },
  } as any,
  {
    slug: 'geotapp-vs-clockify', competitor: 'Clockify',
    it: { tagline: 'Time tracking vs prova del lavoro svolto', highlight: 'Clockify traccia le ore. GeoTapp certifica ogni intervento con GPS sigillato e foto.' },
    en: { tagline: 'Time tracking vs proof of completed work', highlight: 'Clockify tracks hours. GeoTapp certifies every job with sealed GPS and photos.' },
    de: { tagline: 'Zeiterfassung vs Arbeitsnachweis', highlight: 'Clockify erfasst Stunden. GeoTapp zertifiziert jeden Einsatz mit versiegeltem GPS und Fotos.' },
    fr: { tagline: 'Suivi du temps vs preuve du travail effectué', highlight: 'Clockify suit les heures. GeoTapp certifie chaque intervention avec GPS scellé et photos.' },
    es: { tagline: 'Control de horas vs prueba del trabajo realizado', highlight: 'Clockify registra horas. GeoTapp certifica cada trabajo con GPS sellado y fotos.' },
    pt: { tagline: 'Registo de horas vs prova do trabalho realizado', highlight: 'A Clockify regista horas. A GeoTapp certifica cada intervenção com GPS selado e fotos.' },
    nl: { tagline: 'Tijdregistratie vs bewijs van uitgevoerd werk', highlight: 'Clockify registreert uren. GeoTapp certificeert elke opdracht met verzegeld GPS en foto\'s.' },
    da: { tagline: 'Tidsregistrering vs bevis for udført arbejde', highlight: 'Clockify registrerer timer. GeoTapp certificerer hver opgave med forseglet GPS og fotos.' },
    sv: { tagline: 'Tidsrapportering vs bevis på utfört arbete', highlight: 'Clockify registrerar timmar. GeoTapp certifierar varje uppdrag med förseglad GPS och foton.' },
    nb: { tagline: 'Tidsregistrering vs bevis på utført arbeid', highlight: 'Clockify registrerer timer. GeoTapp sertifiserer hvert oppdrag med forseglet GPS og bilder.' },
    ru: { tagline: 'Учёт времени vs доказательство выполненной работы', highlight: 'Clockify учитывает часы. GeoTapp сертифицирует каждую работу опечатанным GPS и фото.' },
  } as any,
  {
    slug: 'geotapp-vs-hubstaff', competitor: 'Hubstaff',
    it: { tagline: 'Monitoraggio remoto vs certificazione sul campo', highlight: 'Hubstaff monitora i lavoratori remoti. GeoTapp certifica operatori fisici sul campo, conforme GDPR.' },
    en: { tagline: 'Remote monitoring vs field certification', highlight: 'Hubstaff monitors remote workers. GeoTapp certifies physical field operators - GDPR compliant.' },
    de: { tagline: 'Remote-Überwachung vs Feldzertifizierung', highlight: 'Hubstaff überwacht Remote-Arbeiter. GeoTapp zertifiziert physische Feldmitarbeiter - DSGVO-konform.' },
    fr: { tagline: 'Surveillance à distance vs certification terrain', highlight: 'Hubstaff surveille les télétravailleurs. GeoTapp certifie les opérateurs physiques sur le terrain, conforme RGPD.' },
    es: { tagline: 'Monitoreo remoto vs certificación de campo', highlight: 'Hubstaff monitorea trabajadores remotos. GeoTapp certifica operadores físicos en campo, compatible con RGPD.' },
    pt: { tagline: 'Monitorização remota vs certificação no terreno', highlight: 'A Hubstaff monitoriza trabalhadores remotos. A GeoTapp certifica operadores físicos no terreno, conforme o RGPD.' },
    nl: { tagline: 'Monitoring op afstand vs certificering in het veld', highlight: 'Hubstaff monitort externe werkers. GeoTapp certificeert fysieke medewerkers op locatie - AVG-conform.' },
    da: { tagline: 'Fjernovervågning vs feltcertificering', highlight: 'Hubstaff overvåger fjernarbejdere. GeoTapp certificerer fysiske medarbejdere i marken - GDPR-kompatibel.' },
    sv: { tagline: 'Fjärrövervakning vs fältcertifiering', highlight: 'Hubstaff övervakar distansarbetare. GeoTapp certifierar fysisk personal i fält - GDPR-kompatibel.' },
    nb: { tagline: 'Fjernovervåking vs feltsertifisering', highlight: 'Hubstaff overvåker fjernarbeidere. GeoTapp sertifiserer fysiske ansatte i felt - GDPR-kompatibel.' },
    ru: { tagline: 'Удалённый мониторинг vs полевая сертификация', highlight: 'Hubstaff следит за удалёнными сотрудниками. GeoTapp сертифицирует работников на выезде, соответствует GDPR.' },
  } as any,
  {
    slug: 'geotapp-vs-nobadge', competitor: 'NoBadge',
    it: { tagline: 'Timbratura presenze vs certificazione interventi', highlight: 'NoBadge registra le presenze. GeoTapp certifica il lavoro con GPS anti-spoofing e report verificabili.' },
    en: { tagline: 'Attendance tracking vs job certification', highlight: 'NoBadge records attendance. GeoTapp certifies work with anti-spoofing GPS and verifiable reports.' },
    de: { tagline: 'Anwesenheitserfassung vs Einsatzzertifizierung', highlight: 'NoBadge erfasst Anwesenheit. GeoTapp zertifiziert Arbeit mit Anti-Spoofing-GPS und verifizierbaren Berichten.' },
    fr: { tagline: 'Pointage vs certification des interventions', highlight: 'NoBadge enregistre les présences. GeoTapp certifie le travail avec GPS anti-fraude et rapports vérifiables.' },
    es: { tagline: 'Fichaje de presencia vs certificación de trabajos', highlight: 'NoBadge registra presencias. GeoTapp certifica el trabajo con GPS anti-spoofing e informes verificables.' },
    pt: { tagline: 'Registo de presenças vs certificação de intervenções', highlight: 'A NoBadge regista presenças. A GeoTapp certifica o trabalho com GPS anti-spoofing e relatórios verificáveis.' },
    nl: { tagline: 'Aanwezigheidsregistratie vs werkcertificering', highlight: 'NoBadge registreert aanwezigheid. GeoTapp certificeert het werk met anti-spoofing-GPS en verifieerbare rapporten.' },
    da: { tagline: 'Fremmøderegistrering vs arbejdscertificering', highlight: 'NoBadge registrerer fremmøde. GeoTapp certificerer arbejdet med anti-spoofing-GPS og verificerbare rapporter.' },
    sv: { tagline: 'Närvaroregistrering vs arbetscertifiering', highlight: 'NoBadge registrerar närvaro. GeoTapp certifierar arbetet med anti-spoofing-GPS och verifierbara rapporter.' },
    nb: { tagline: 'Oppmøteregistrering vs arbeidssertifisering', highlight: 'NoBadge registrerer oppmøte. GeoTapp sertifiserer arbeidet med anti-spoofing-GPS og verifiserbare rapporter.' },
    ru: { tagline: 'Учёт присутствия vs сертификация работы', highlight: 'NoBadge фиксирует присутствие. GeoTapp сертифицирует работу с анти-спуфинг GPS и проверяемыми отчётами.' },
  } as any,
  {
    slug: 'geotapp-vs-libemax', competitor: 'Libemax',
    it: { tagline: 'Geofence vs anti-spoofing GPS', highlight: 'Libemax usa il geofence per la timbratura. GeoTapp verifica che il GPS sia reale con anti-spoofing, due livelli di sicurezza diversi.' },
    en: { tagline: 'Geofence vs anti-spoofing GPS', highlight: 'Libemax uses geofence for check-in. GeoTapp verifies GPS is real with anti-spoofing, two different security levels.' },
    de: { tagline: 'Geofence vs Anti-Spoofing-GPS', highlight: 'Libemax nutzt Geofence. GeoTapp verifiziert GPS-Echtheit mit Anti-Spoofing, zwei verschiedene Sicherheitsstufen.' },
    fr: { tagline: 'Geofence vs anti-spoofing GPS', highlight: 'Libemax utilise le geofence. GeoTapp vérifie que le GPS est réel avec l\'anti-spoofing, deux niveaux de sécurité différents.' },
    es: { tagline: 'Geofence vs anti-spoofing GPS', highlight: 'Libemax usa geofence. GeoTapp verifica que el GPS es real con anti-spoofing, dos niveles de seguridad diferentes.' },
    pt: { tagline: 'Geofence vs anti-spoofing GPS', highlight: 'A Libemax usa geofence. A GeoTapp verifica que o GPS é real com anti-spoofing, dois níveis de segurança diferentes.' },
    nl: { tagline: 'Geofence vs anti-spoofing-GPS', highlight: 'Libemax gebruikt geofence. GeoTapp verifieert dat het GPS echt is met anti-spoofing, twee verschillende beveiligingsniveaus.' },
    da: { tagline: 'Geofence vs anti-spoofing-GPS', highlight: 'Libemax bruger geofence. GeoTapp verificerer, at GPS\'en er ægte med anti-spoofing, to forskellige sikkerhedsniveauer.' },
    sv: { tagline: 'Geofence vs anti-spoofing-GPS', highlight: 'Libemax använder geofence. GeoTapp verifierar att GPS:en är äkta med anti-spoofing, två olika säkerhetsnivåer.' },
    nb: { tagline: 'Geofence vs anti-spoofing-GPS', highlight: 'Libemax bruker geofence. GeoTapp verifiserer at GPS-en er ekte med anti-spoofing, to forskjellige sikkerhetsnivåer.' },
    ru: { tagline: 'Геозона vs анти-спуфинг GPS', highlight: 'Libemax использует геозону. GeoTapp проверяет подлинность GPS с помощью анти-спуфинга, два разных уровня безопасности.' },
  } as any,
  {
    slug: 'geotapp-vs-blink', competitor: 'Blink',
    it: { tagline: 'Software pulizie DE vs certificazione campo', highlight: 'Blink è il numero 1 per le pulizie in Germania. GeoTapp aggiunge anti-spoofing e report con valore probatorio.' },
    en: { tagline: 'Cleaning software DE vs field certification', highlight: 'Blink is #1 for cleaning in Germany. GeoTapp adds anti-spoofing and reports with evidentiary value.' },
    de: { tagline: 'Reinigungssoftware vs Feldzertifizierung', highlight: 'Blink ist Nr. 1 für Gebäudereinigung. GeoTapp ergänzt Anti-Spoofing und Berichte mit Beweiskraft.' },
    fr: { tagline: 'Logiciel nettoyage DE vs certification terrain', highlight: 'Blink est le n°1 du nettoyage en Allemagne. GeoTapp ajoute l\'anti-spoofing et des rapports avec valeur probante.' },
    es: { tagline: 'Software limpieza DE vs certificación de campo', highlight: 'Blink es el nº1 en limpieza en Alemania. GeoTapp añade anti-spoofing e informes con valor probatorio.' },
    pt: { tagline: 'Software de limpeza DE vs certificação no terreno', highlight: 'A Blink é a nº1 em limpeza na Alemanha. A GeoTapp acrescenta anti-spoofing e relatórios com valor probatório.' },
    nl: { tagline: 'Schoonmaaksoftware DE vs certificering in het veld', highlight: 'Blink is nummer 1 voor schoonmaak in Duitsland. GeoTapp voegt anti-spoofing toe en rapporten met bewijskracht.' },
    da: { tagline: 'Rengøringssoftware DE vs feltcertificering', highlight: 'Blink er nr. 1 til rengøring i Tyskland. GeoTapp tilføjer anti-spoofing og rapporter med bevisværdi.' },
    sv: { tagline: 'Städprogram DE vs fältcertifiering', highlight: 'Blink är nummer 1 för städning i Tyskland. GeoTapp lägger till anti-spoofing och rapporter med bevisvärde.' },
    nb: { tagline: 'Renholdsprogram DE vs feltsertifisering', highlight: 'Blink er nummer 1 for renhold i Tyskland. GeoTapp legger til anti-spoofing og rapporter med bevisverdi.' },
    ru: { tagline: 'ПО для клининга DE vs полевая сертификация', highlight: 'Blink, №1 для клининга в Германии. GeoTapp добавляет анти-спуфинг и отчёты с доказательной силой.' },
  } as any,
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale] ?? META.en;
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: buildLocaleAlternates(locale, PATHNAME),
    openGraph: { url: `https://geotapp.com/${locale}${PATHNAME}`, type: 'website', title: m.title, description: m.description },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description },
  };
}

export default async function ConfrontoIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = COPY[locale] ?? COPY.en;

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: c.breadcrumb, item: `https://geotapp.com/${locale}${PATHNAME}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="min-h-screen pt-5 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">

          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              {c.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              GeoTapp vs{' '}
              <span className="text-primary">
                {c.title_suffix}
              </span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {c.intro}
            </p>
          </div>

          <Link
            href={`/${locale}/confronto/dinamico/`}
            className="block group mb-8 bg-gradient-to-br from-primary/20 via-primary/10 to-purple-500/10 border border-primary/40 hover:border-primary/70 rounded-2xl p-6 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-bold text-lg">
                    {{
                      it: '🆕 Comparativa Dinamica, confronta TUTTI in una pagina',
                      en: '🆕 Live Comparison, compare ALL competitors in one place',
                      de: '🆕 Dynamischer Vergleich, alle Konkurrenten auf einer Seite',
                      fr: '🆕 Comparatif Dynamique, tous les concurrents sur une page',
                      es: '🆕 Comparativa Dinámica, todos los competidores en una página',
                      nl: '🆕 Dynamische Vergelijking, alle concurrenten op één pagina',
                      pt: '🆕 Comparação Dinâmica, todos os concorrentes numa página',
                      da: '🆕 Dynamisk sammenligning, alle konkurrenter på én side',
                      sv: '🆕 Dynamisk jämförelse, alla konkurrenter på en sida',
                      nb: '🆕 Dynamisk sammenligning, alle konkurrenter på én side',
                      ru: '🆕 Динамическое сравнение, все конкуренты на одной странице',
                    }[locale] ?? '🆕 Live Comparison, compare ALL competitors in one place'}
                  </span>
                </div>
                <p className="text-text-secondary text-sm">
                  {{
                    it: 'Selettore competitor + tabella 12 feature aggiornata in tempo reale. Tutte le alternative confrontate in un solo posto.',
                    en: 'Competitor selector + 12-feature table updated in real time. All alternatives compared in one place.',
                    de: 'Konkurrenten-Auswahl + 12-Feature-Tabelle in Echtzeit. Alle Alternativen auf einer Seite.',
                    fr: 'Sélecteur de concurrents + tableau 12 fonctions en temps réel. Toutes les alternatives au même endroit.',
                    es: 'Selector de competidores + tabla de 12 funciones en tiempo real. Todas las alternativas en un solo lugar.',
                    nl: 'Concurrent-selector + tabel met 12 functies in real time. Alle alternatieven op één plek.',
                    pt: 'Seletor de concorrentes + tabela de 12 funções em tempo real. Todas as alternativas num só lugar.',
                    da: 'Konkurrentvælger + tabel med 12 funktioner opdateret i realtid. Alle alternativer ét sted.',
                    sv: 'Konkurrentväljare + tabell med 12 funktioner uppdaterad i realtid. Alla alternativ på ett ställe.',
                    nb: 'Konkurrentvelger + tabell med 12 funksjoner oppdatert i sanntid. Alle alternativer på ett sted.',
                    ru: 'Выбор конкурента + таблица из 12 функций в реальном времени. Все альтернативы в одном месте.',
                  }[locale] ?? 'Competitor selector + 12-feature table updated in real time.'}
                </p>
              </div>
              <span className="text-primary text-xl group-hover:translate-x-1 transition-transform mt-1">→</span>
            </div>
          </Link>

          <div className="space-y-4">
            {COMPARISONS.map((item: any) => {
              const loc = item[locale] ?? item.en;
              return (
                <Link
                  key={item.slug}
                  href={`/${locale}/confronto/${item.slug}/`}
                  className="block group bg-white/5 hover:bg-white/8 border border-white/10 hover:border-primary/30 rounded-2xl p-6 transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-bold text-lg">GeoTapp vs {item.competitor}</span>
                        <span className="text-xs text-primary border border-primary/30 rounded-full px-2 py-0.5">
                          {loc.tagline}
                        </span>
                      </div>
                      <p className="text-text-secondary text-sm">
                        {loc.highlight}
                      </p>
                    </div>
                    <span className="text-primary text-xl group-hover:translate-x-1 transition-transform mt-1">→</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 text-center bg-gradient-to-br from-primary/20 to-purple-500/10 border border-primary/20 rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-3">
              {c.cta_title}
            </h2>
            <p className="text-text-secondary mb-6">
              {c.cta_desc}
            </p>
            <TrialCTALink
              href={`/${locale}/trial/`}
              source="confronto_index"
              className="btn-modern"
            >
              {c.cta_btn}
            </TrialCTALink>
          </div>

        </div>
      </div>
    </>
  );
}
