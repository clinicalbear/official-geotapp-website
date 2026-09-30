

import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import FlowPage from '../../../products/geotapp-flow/page';
import BlogHighlights from '@/components/BlogHighlights';
import FaqFromSchema from '@/components/FaqFromSchema';
import SettoriLinks from '@/components/SettoriLinks';
import UpdatedOnLine, { updatedIsoFor } from '@/components/seo/UpdatedOnLine';
import { type AppLocale } from '@/lib/i18n/config';
import {
  EUR_PRICES,
  convertEurToLocale,
  getCurrencyForLocale,
} from '@/lib/pricing';
import { REVIEWS } from '@/data/reviews';

const flowMeta: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp Flow - Gestione Operativa Interventi e Squadre', description: 'La web app dell\'ufficio per le aziende con tecnici sul campo: clienti, commesse, squadre, turni, fatture e report sigillati che il cliente verifica da solo.' },
  en: { title: 'GeoTapp Flow - Field Operations Management', description: 'The office web app for companies with field technicians: clients, jobs, teams, shifts, invoices and sealed reports that the client verifies alone.' },
  de: { title: 'GeoTapp Flow - Einsatzverwaltung für Teams im Außendienst', description: 'Die Web-App fürs Büro für Unternehmen mit Technikern im Außeneinsatz: Kunden, Aufträge, Teams, Schichten, Rechnungen und versiegelte Berichte, die der Kunde selbst prüft.' },
  fr: { title: 'GeoTapp Flow - Gestion des interventions et des équipes', description: 'L\'application web du bureau pour les entreprises avec techniciens sur le terrain : chantiers, équipes, factures et rapports scellés que le client vérifie seul.' },
  es: { title: 'GeoTapp Flow - Gestión Operativa de Intervenciones', description: 'GeoTapp Flow es el sistema operativo para empresas con técnicos en campo. Gestiona pedidos, asigna tareas y genera informes verificables en tiempo real.' },
  nl: { title: 'GeoTapp Flow - Operationeel beheer van klussen en teams', description: 'De webapp van het kantoor voor bedrijven met monteurs in het veld: klanten, opdrachten, teams, diensten, facturen en verzegelde rapporten die de klant zelf controleert.' },
  pt: { title: 'GeoTapp Flow - Gestão Operacional de Intervenções', description: 'GeoTapp Flow é o sistema operacional para empresas com técnicos de campo. Gerencie ordens de serviço, atribua tarefas e produza relatórios verificáveis.' },
  sv: { title: 'GeoTapp Flow - Operativ Hantering av Interventioner', description: 'GeoTapp Flow är det operativa systemet för företag med fälttekniker. Hantera uppdrag, tilldela uppgifter och skapa verifierbara rapporter.' },
  da: { title: 'GeoTapp Flow - Operationel Håndtering af Interventioner', description: 'GeoTapp Flow er det operative system for virksomheder med serviceteknikere. Administrer opgaver, tildel arbejde og generer verificerbare rapporter.' },
  nb: { title: 'GeoTapp Flow - Operativ Håndtering av Intervensjoner', description: 'GeoTapp Flow er det operative systemet for bedrifter med serviceteknikere. Administrer oppdrag, tildel oppgaver og generer verifiserbare rapporter.' },
  ru: { title: 'GeoTapp Flow, Оперативное Управление Интервенциями', description: 'GeoTapp Flow, операционная система для компаний с выездными техниками. Управляйте заказами, назначайте задачи и формируйте проверяемые отчёты.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = flowMeta[locale] ?? flowMeta[locale.startsWith('en-') ? 'en' : 'it'];
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: buildLocaleAlternates(locale, '/products/geotapp-flow/'),
    openGraph: {
      title: m.title,
      description: m.description,
      url: `https://geotapp.com/${locale}/products/geotapp-flow/`,
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

const FLOW_FAQ: Record<string, object> = {
  it: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Cos\'è GeoTapp Flow?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp Flow è la web app dell\'ufficio per le aziende con tecnici sul campo. Permette di creare commesse, assegnare attività, seguire l\'avanzamento e mandare al cliente report sigillati che può verificare da solo.' } },
      { '@type': 'Question', name: 'Cosa succede se manca la rete?', acceptedAnswer: { '@type': 'Answer', text: 'Flow, il pannello dell\'ufficio, si usa dal browser e richiede la connessione. Su TimeTracker, l\'app dei tecnici, se manca la rete la timbratura resta salvata sul telefono e parte da sola quando torna il segnale, con l\'ora in cui è stata fatta.' } },
      { '@type': 'Question', name: 'GeoTapp Flow si integra con altri software gestionali?', acceptedAnswer: { '@type': 'Answer', text: 'Sì: Flow esporta i dati per la fatturazione e per le paghe, e si collega a Fatture in Cloud. Per altri gestionali l\'integrazione si valuta su richiesta.' } },
      { '@type': 'Question', name: 'Quanti tecnici può gestire GeoTapp Flow?', acceptedAnswer: { '@type': 'Answer', text: 'Dal piano Solo, con un utente in ufficio, al piano Business, con squadre illimitate su più siti. Le postazioni TimeTracker per gli operatori si aggiungono a parte, secondo il piano.' } },
      { '@type': 'Question', name: 'Il cliente può fidarsi dei report generati da Flow?', acceptedAnswer: { '@type': 'Answer', text: 'Non deve fidarsi: può controllare. I report GeoTapp sono sigillati crittograficamente e il cliente ne verifica l\'integrità da solo con GeoTapp Verifier, senza accesso al tuo account. La verifica dice se il documento è stato modificato; da sola non è prova assoluta del fatto materiale né consulenza legale.' } },
      { '@type': 'Question', name: 'GeoTapp Flow mostra dove sono i tecnici in tempo reale?', acceptedAnswer: { '@type': 'Answer', text: 'No, e non è una dimenticanza. La posizione si registra solo quando il tecnico timbra (entrata, pause, uscita) o scatta una foto di prova, mai in continuo: Flow ti dice che il lavoro è iniziato sul posto giusto e a che ora, non ti fa seguire un pallino sulla mappa tutto il giorno. È la differenza tra prova del lavoro e sorveglianza.' } },
      { '@type': 'Question', name: 'Per quali aziende è pensato GeoTapp Flow?', acceptedAnswer: { '@type': 'Answer', text: 'Per chi ha squadre che lavorano fuori sede: imprese di pulizie, vigilanza, manutenzione, installatori, elettricisti, idraulici e multiservizi. Se i tuoi operatori passano la giornata sul campo e non in ufficio, Flow è nato per questo.' } },
      { '@type': 'Question', name: 'Come assegno le commesse alle squadre con GeoTapp Flow?', acceptedAnswer: { '@type': 'Answer', text: 'Crei la commessa dall\'ufficio, assegni il tecnico o la squadra, e l\'operatore se la trova sull\'app TimeTracker. A intervento chiuso il report torna dentro Flow, già verificabile, senza rincorrere nessuno per sapere com\'è andata.' } },
    ],
  },
  en: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What is GeoTapp Flow?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp Flow is the office web app for companies with field technicians. It lets you create jobs, assign tasks, follow progress and send the client sealed reports that they can verify alone.' } },
      { '@type': 'Question', name: 'What happens if there is no signal?', acceptedAnswer: { '@type': 'Answer', text: 'Flow, the office panel, is used from the browser and needs a connection. On TimeTracker, the technicians\' app, if there is no signal the clock-in stays saved on the phone and is sent on its own when the signal returns, with the time at which it was made.' } },
      { '@type': 'Question', name: 'Does GeoTapp Flow integrate with other management software?', acceptedAnswer: { '@type': 'Answer', text: 'Yes: Flow exports data for billing and payroll, and connects to Fatture in Cloud. For other management systems, an integration is assessed on request.' } },
      { '@type': 'Question', name: 'How many technicians can GeoTapp Flow manage?', acceptedAnswer: { '@type': 'Answer', text: 'From the Solo plan, with one office user, to the Business plan, with unlimited teams across several sites. TimeTracker seats for operators are added separately, according to the plan.' } },
      { '@type': 'Question', name: 'Can the client trust the reports generated by Flow?', acceptedAnswer: { '@type': 'Answer', text: 'They do not have to trust: they can check. GeoTapp reports are cryptographically sealed and the client verifies their integrity alone with GeoTapp Verifier, without accessing your account. The check says whether the document has been modified; on its own it is not absolute proof of the underlying fact, nor legal advice.' } },
      { '@type': 'Question', name: 'Does GeoTapp Flow show where technicians are in real time?', acceptedAnswer: { '@type': 'Answer', text: 'No, and that is on purpose. Location is recorded only when the technician clocks in (start, breaks, finish) or takes a proof photo, never continuously: Flow tells you the work started at the right place and time, it does not make you follow a dot on a map all day. That is the line between proof of work and surveillance.' } },
      { '@type': 'Question', name: 'Which businesses is GeoTapp Flow built for?', acceptedAnswer: { '@type': 'Answer', text: 'For companies whose teams work off-site: cleaning, security, maintenance, installers, electricians, plumbers and multi-service firms. If your operators spend the day in the field rather than at a desk, Flow was built for that.' } },
      { '@type': 'Question', name: 'How do I assign jobs to teams in GeoTapp Flow?', acceptedAnswer: { '@type': 'Answer', text: 'You create the job from the office, assign the technician or crew, and the operator finds it in the TimeTracker app. When the job is closed the report comes back into Flow, already verifiable, with no one to chase to find out how it went.' } },
    ],
  },
  de: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Was ist GeoTapp Flow?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp Flow ist die Web-App fürs Büro für Unternehmen mit Technikern im Außeneinsatz. Sie können Aufträge anlegen, Aufgaben zuweisen, den Fortschritt verfolgen und dem Kunden versiegelte Berichte schicken, die er selbst prüfen kann.' } },
      { '@type': 'Question', name: 'Was passiert, wenn kein Netz da ist?', acceptedAnswer: { '@type': 'Answer', text: 'Flow, das Büro-Panel, läuft im Browser und braucht eine Verbindung. Bei TimeTracker, der App der Techniker, bleibt die Buchung ohne Netz auf dem Telefon gespeichert und wird von selbst gesendet, sobald wieder Empfang besteht, mit der Uhrzeit, zu der sie erfasst wurde.' } },
      { '@type': 'Question', name: 'Lässt sich GeoTapp Flow mit anderer Verwaltungssoftware verbinden?', acceptedAnswer: { '@type': 'Answer', text: 'Ja: Flow exportiert Daten für die Rechnungsstellung und die Lohnabrechnung (Excel/CSV) und lässt sich mit Fatture in Cloud verbinden. Für andere Verwaltungsprogramme wird eine Anbindung auf Anfrage geprüft.' } },
      { '@type': 'Question', name: 'Wie viele Techniker kann GeoTapp Flow verwalten?', acceptedAnswer: { '@type': 'Answer', text: 'Vom Tarif Solo mit einem Benutzer im Büro bis zum Tarif Business mit unbegrenzten Teams an mehreren Standorten. Die TimeTracker-Plätze für die Mitarbeitenden kommen je nach Tarif separat dazu.' } },
      { '@type': 'Question', name: 'Kann der Kunde den Berichten aus Flow vertrauen?', acceptedAnswer: { '@type': 'Answer', text: 'Er muss nicht vertrauen: Er kann prüfen. GeoTapp-Berichte sind kryptografisch versiegelt, und der Kunde prüft ihre Unversehrtheit selbst mit GeoTapp Verifier, ohne Zugriff auf Ihr Konto. Die Prüfung zeigt, ob das Dokument verändert wurde; für sich allein ist sie weder ein absoluter Beweis des zugrunde liegenden Sachverhalts noch Rechtsberatung.' } },
      { '@type': 'Question', name: 'Zeigt GeoTapp Flow, wo die Techniker gerade sind?', acceptedAnswer: { '@type': 'Answer', text: 'Nein, und das ist Absicht. Der Standort wird nur erfasst, wenn der Techniker stempelt (Beginn, Pausen, Ende) oder ein Nachweisfoto aufnimmt, nie fortlaufend: Flow zeigt Ihnen, dass die Arbeit am richtigen Ort und zur richtigen Zeit begonnen hat, und lässt Sie nicht den ganzen Tag einem Punkt auf der Karte folgen. Das ist der Unterschied zwischen Arbeitsnachweis und Überwachung.' } },
      { '@type': 'Question', name: 'Für welche Unternehmen ist GeoTapp Flow gedacht?', acceptedAnswer: { '@type': 'Answer', text: 'Für Betriebe mit Teams im Außeneinsatz: Reinigung, Sicherheitsdienste, Wartung, Installateure, Elektriker, Klempner und Multiservice-Betriebe. Wenn Ihre Mitarbeitenden den Tag vor Ort statt am Schreibtisch verbringen, ist Flow dafür gemacht.' } },
      { '@type': 'Question', name: 'Wie weise ich Aufträge in GeoTapp Flow den Teams zu?', acceptedAnswer: { '@type': 'Answer', text: 'Sie legen den Auftrag im Büro an, weisen Techniker oder Team zu, und der Mitarbeiter findet ihn in der TimeTracker-App. Ist der Einsatz abgeschlossen, kommt der Bericht zurück in Flow, schon prüfbar, und Sie müssen niemandem hinterherlaufen, um zu erfahren, wie es gelaufen ist.' } },
    ],
  },
  fr: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Qu\'est-ce que GeoTapp Flow ?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp Flow est l\'application web du bureau pour les entreprises avec des techniciens sur le terrain. Elle permet de créer des chantiers, d\'assigner des tâches, de suivre l\'avancement et d\'envoyer au client des rapports scellés qu\'il peut vérifier lui-même.' } },
      { '@type': 'Question', name: 'Que se passe-t-il s\'il n\'y a pas de réseau ?', acceptedAnswer: { '@type': 'Answer', text: 'Flow, le panneau du bureau, s\'utilise depuis le navigateur et demande une connexion. Sur TimeTracker, l\'application des techniciens, s\'il n\'y a pas de réseau, le pointage reste enregistré sur le téléphone et part tout seul quand le signal revient, avec l\'heure à laquelle il a été fait.' } },
      { '@type': 'Question', name: 'GeoTapp Flow se connecte-t-il à d\'autres logiciels de gestion ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui : Flow exporte les données pour la facturation et pour la paie (Excel/CSV) et se connecte à Fatture in Cloud. Pour d\'autres logiciels de gestion, l\'intégration est étudiée sur demande.' } },
      { '@type': 'Question', name: 'Combien de techniciens GeoTapp Flow peut-il gérer ?', acceptedAnswer: { '@type': 'Answer', text: 'De la formule Solo, avec un utilisateur au bureau, à la formule Business, avec des équipes illimitées sur plusieurs sites. Les postes TimeTracker pour les opérateurs s\'ajoutent à part, selon la formule.' } },
      { '@type': 'Question', name: 'Le client peut-il se fier aux rapports générés par Flow ?', acceptedAnswer: { '@type': 'Answer', text: 'Il n\'a pas besoin de se fier : il peut contrôler. Les rapports GeoTapp sont scellés cryptographiquement et le client en vérifie lui-même l\'intégrité avec GeoTapp Verifier, sans accès à votre compte. La vérification dit si le document a été modifié ; à elle seule, elle n\'est ni une preuve absolue du fait matériel ni un conseil juridique.' } },
      { '@type': 'Question', name: 'GeoTapp Flow montre-t-il où sont les techniciens ?', acceptedAnswer: { '@type': 'Answer', text: 'Non, et ce n\'est pas un oubli. La position n\'est enregistrée que lorsque le technicien pointe (arrivée, pauses, départ) ou prend une photo de preuve, jamais en continu : Flow vous dit que le travail a commencé au bon endroit et à quelle heure, il ne vous fait pas suivre un point sur une carte toute la journée. C\'est la différence entre preuve du travail et surveillance.' } },
      { '@type': 'Question', name: 'Pour quelles entreprises GeoTapp Flow est-il conçu ?', acceptedAnswer: { '@type': 'Answer', text: 'Pour celles dont les équipes travaillent hors site : nettoyage, sécurité, maintenance, installateurs, électriciens, plombiers et multiservices. Si vos opérateurs passent la journée sur le terrain plutôt qu\'au bureau, Flow est fait pour cela.' } },
      { '@type': 'Question', name: 'Comment assigner des chantiers aux équipes avec GeoTapp Flow ?', acceptedAnswer: { '@type': 'Answer', text: 'Vous créez le chantier depuis le bureau, vous assignez le technicien ou l\'équipe, et l\'opérateur le retrouve dans l\'application TimeTracker. Une fois l\'intervention terminée, le rapport revient dans Flow, déjà vérifiable, sans avoir à relancer personne pour savoir comment cela s\'est passé.' } },
    ],
  },
  nl: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Wat is GeoTapp Flow?', acceptedAnswer: { '@type': 'Answer', text: 'GeoTapp Flow is de webapp van het kantoor voor bedrijven met monteurs in het veld. U kunt er opdrachten in aanmaken, taken toewijzen, de voortgang volgen en de klant verzegelde rapporten sturen die hij zelf kan controleren.' } },
      { '@type': 'Question', name: 'Wat gebeurt er als er geen netwerk is?', acceptedAnswer: { '@type': 'Answer', text: 'Flow, het paneel van het kantoor, gebruikt u in de browser en heeft een verbinding nodig. In TimeTracker, de app van de monteurs, blijft de registratie op de telefoon bewaard als er geen netwerk is en wordt ze vanzelf verzonden zodra het signaal terugkomt, met het tijdstip waarop ze is gemaakt.' } },
      { '@type': 'Question', name: 'Koppelt GeoTapp Flow met andere beheersoftware?', acceptedAnswer: { '@type': 'Answer', text: 'Ja: Flow exporteert de gegevens voor de facturering en voor de salarissen, en koppelt met Fatture in Cloud. Voor andere beheersystemen wordt de integratie op verzoek beoordeeld.' } },
      { '@type': 'Question', name: 'Hoeveel monteurs kan GeoTapp Flow beheren?', acceptedAnswer: { '@type': 'Answer', text: 'Van het plan Solo, met één gebruiker op kantoor, tot het plan Business, met onbeperkte teams op meerdere locaties. De TimeTracker-plaatsen voor de medewerkers komen er apart bij, volgens het plan.' } },
      { '@type': 'Question', name: 'Kan de klant de rapporten van Flow vertrouwen?', acceptedAnswer: { '@type': 'Answer', text: 'Hij hoeft niet te vertrouwen: hij kan controleren. GeoTapp-rapporten zijn cryptografisch verzegeld en de klant controleert de integriteit zelf met GeoTapp Verifier, zonder toegang tot uw account. De controle zegt of het document is gewijzigd; op zichzelf is ze geen absoluut bewijs van het feitelijke gebeuren en geen juridisch advies.' } },
      { '@type': 'Question', name: 'Toont GeoTapp Flow waar de monteurs zijn, live?', acceptedAnswer: { '@type': 'Answer', text: 'Nee, en dat is geen vergetelheid. De locatie wordt alleen vastgelegd wanneer de monteur registreert (aankomst, pauzes, vertrek) of een bewijsfoto maakt, nooit doorlopend: Flow zegt u dat het werk op de juiste plek en hoe laat is begonnen, het laat u niet de hele dag een stipje op de kaart volgen. Dat is het verschil tussen bewijs van het werk en toezicht.' } },
      { '@type': 'Question', name: 'Voor welke bedrijven is GeoTapp Flow bedoeld?', acceptedAnswer: { '@type': 'Answer', text: 'Voor wie teams heeft die buiten de deur werken: schoonmaakbedrijven, bewaking, onderhoud, installateurs, elektriciens, loodgieters en multiservicebedrijven. Brengen uw medewerkers de dag in het veld door en niet op kantoor, dan is Flow daarvoor gemaakt.' } },
      { '@type': 'Question', name: 'Hoe wijs ik opdrachten toe aan teams met GeoTapp Flow?', acceptedAnswer: { '@type': 'Answer', text: 'U maakt de opdracht aan op kantoor, wijst de monteur of het team toe, en de medewerker vindt hem in de TimeTracker-app. Is de klus afgesloten, dan komt het rapport terug in Flow, al te controleren, zonder iemand achterna te hoeven zitten om te weten hoe het is gegaan.' } },
    ],
  },
};

const FLOW_DESCRIPTION: Record<string, string> = {
  it: 'GeoTapp Flow è il sistema operativo per aziende con tecnici sul campo: crea commesse, assegna attività, monitora avanzamento e produce report sigillati e verificabili in tempo reale.',
  en: 'GeoTapp Flow is the office web app for companies with field technicians: create jobs, assign tasks, follow progress and send the client sealed reports that they verify alone.',
  de: 'GeoTapp Flow ist die Web-App fürs Büro für Unternehmen mit Technikern im Außeneinsatz: Aufträge anlegen, Aufgaben zuweisen, den Fortschritt verfolgen und dem Kunden versiegelte Berichte schicken, die er selbst prüft.',
  fr: "GeoTapp Flow est l'application web du bureau pour les entreprises avec des techniciens sur le terrain : créer des chantiers, assigner des tâches, suivre l'avancement et envoyer au client des rapports scellés qu'il vérifie lui-même.",
  es: 'GeoTapp Flow es la plataforma de gestión operativa para empresas con técnicos de campo: crea órdenes, asigna tareas, supervisa el progreso y produce informes sellados verificables en tiempo real.',
  nl: 'GeoTapp Flow is het operationele systeem voor bedrijven met monteurs in het veld: maak opdrachten aan, wijs taken toe, volg de voortgang en maak verzegelde, controleerbare rapporten.',
  pt: 'GeoTapp Flow é a plataforma de gestão operacional para empresas com técnicos de campo: crie ordens, atribua tarefas, monitorize o progresso e produza relatórios selados verificáveis em tempo real.',
  da: 'GeoTapp Flow er den operationelle administrationsplatform til virksomheder med serviceteknikere: opret opgaver, tildel arbejde, overvåg fremskridt og generér forseglede, verificerbare rapporter i realtid.',
  sv: 'GeoTapp Flow är den operativa hanteringsplattformen för företag med fälttekniker: skapa uppdrag, tilldela uppgifter, övervaka framsteg och generera förseglade, verifierbara rapporter i realtid.',
  nb: 'GeoTapp Flow er den operative administrasjonsplattformen for bedrifter med serviceteknikere: opprett oppdrag, tildel oppgaver, overvåk fremdrift og generer forseglede, verifiserbare rapporter i sanntid.',
  ru: 'GeoTapp Flow, операционная платформа управления для компаний с выездными техниками: создавайте заказы, назначайте задачи, отслеживайте прогресс и формируйте запечатанные проверяемые отчёты в реальном времени.',
};

const FLOW_FEATURES: Record<string, string[]> = {
  it: [
    'Gestione commesse e interventi multi-sito',
    'Assegnazione attività ai tecnici sul campo',
    'Avanzamento lavori in tempo reale',
    'Report sigillati crittograficamente e verificabili',
    'Prove fotografiche con GPS e timestamp',
    'Integrazione nativa con GeoTapp TimeTracker e Verifier',
    'Export dati per fatturazione e paghe',
    'GDPR compliant, informativa GPS firmata digitalmente',
  ],
  en: [
    'Multi-site job and intervention management',
    'Task assignment to field technicians',
    'Job progress followed step by step',
    'Cryptographically sealed, independently verifiable reports',
    'Photo evidence with time and location',
    'Native integration with GeoTapp TimeTracker and Verifier',
    'Data export for billing and payroll',
    'GPS notice signed as acknowledged in the app before the first clock-in',
  ],
  de: [
    'Verwaltung von Aufträgen und Einsätzen an mehreren Standorten',
    'Aufgabenzuweisung an Techniker im Außeneinsatz',
    'Auftragsfortschritt Schritt für Schritt verfolgt',
    'Kryptografisch versiegelte, unabhängig prüfbare Berichte',
    'Nachweisfotos mit Uhrzeit und Standort',
    'Native Anbindung an GeoTapp TimeTracker und Verifier',
    'Datenexport für Rechnungsstellung und Lohnabrechnung',
    'GPS-Information, vor der ersten Buchung in der App als zur Kenntnis genommen bestätigt',
  ],
  fr: [
    'Gestion des chantiers et des interventions sur plusieurs sites',
    'Assignation des tâches aux techniciens sur le terrain',
    'Avancement des chantiers suivi étape par étape',
    'Rapports scellés cryptographiquement et vérifiables indépendamment',
    'Photos de preuve avec heure et position',
    'Intégration native avec GeoTapp TimeTracker et Verifier',
    'Export des données pour la facturation et la paie',
    'Information GPS signée pour prise de connaissance dans l\'application avant le premier pointage',
  ],
  nl: [
    'Beheer van opdrachten en klussen op meerdere locaties',
    'Taken toewijzen aan monteurs in het veld',
    'Voortgang van het werk bijhouden',
    'Cryptografisch verzegelde en controleerbare rapporten',
    'Bewijsfoto\'s met gps en tijdstempel',
    'Native integratie met GeoTapp TimeTracker en Verifier',
    'Export van gegevens voor facturering en salarissen',
    'Gebouwd met het oog op de AVG, GPS-privacyverklaring digitaal ondertekend',
  ],
};

function buildFlowSoftware(locale: AppLocale) {
  const soloMonthly = convertEurToLocale(EUR_PRICES.flow.solo.monthly, locale);
  const description = FLOW_DESCRIPTION[locale] ?? FLOW_DESCRIPTION.en;
  const featureList = FLOW_FEATURES[locale] ?? FLOW_FEATURES.en;
  // Real reviews from the data file refer to "GeoTapp Flow" (see buildReviewsSchema).
  // Attach the aggregateRating to the Flow product page only, never invent numbers.
  const reviews = REVIEWS;
  const aggregateRating =
    reviews.length > 0
      ? {
          '@type': 'AggregateRating',
          ratingValue: (
            reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
          ).toFixed(1),
          reviewCount: String(reviews.length),
          bestRating: '5',
          worstRating: '1',
        }
      : undefined;
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `https://geotapp.com/${locale}/products/geotapp-flow/#software`,
    name: 'GeoTapp Flow',
    operatingSystem: 'Web',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Field Service Management',
    description,
    featureList,
    image: 'https://geotapp.com/logoFlow.webp',
    screenshot: [
      'https://geotapp.com/screen_dashboard.webp',
      'https://geotapp.com/screen_live_map.webp',
      'https://geotapp.com/screenshots/flow-live-map.webp',
    ],
    inLanguage: locale,
    offers: {
      '@type': 'Offer',
      price: soloMonthly.amount.toFixed(2),
      priceCurrency: getCurrencyForLocale(locale),
      availability: 'https://schema.org/InStock',
      url: `https://geotapp.com/${locale}/trial/`,
      description: locale === 'fr'
        ? `Essai gratuit de 14 jours. Formules payantes à partir de ${soloMonthly.formatted} par mois (Flow Solo), hors TVA.`
        : `14-day free trial. Paid plans from ${soloMonthly.formatted} per month (Flow Solo).`,
    },
    publisher: { '@id': 'https://geotapp.com/#organization' },
    url: `https://geotapp.com/${locale}/products/geotapp-flow/`,
    ...(aggregateRating ? { aggregateRating } : {}),
  };
}

type Props = { params: Promise<{ locale: string }> };

export default async function LocaleFlowPage({ params }: Props) {
  const { locale } = await params;
  const faq = FLOW_FAQ[locale] ?? FLOW_FAQ['en'];
  const software = buildFlowSoftware(locale as AppLocale);
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: 'GeoTapp Flow', item: `https://geotapp.com/${locale}/products/geotapp-flow/` },
    ],
  };
  // Freschezza per AI/Google: data vera dell'ultimo commit sui file di questa
  // pagina (vedi src/lib/seo/content-dates.ts), non la data di build.
  const pageKey = 'products/geotapp-flow';
  const m = flowMeta[locale] ?? flowMeta[locale.startsWith('en-') ? 'en' : 'it'];
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: m.title,
    description: m.description,
    url: `https://geotapp.com/${locale}/products/geotapp-flow/`,
    dateModified: updatedIsoFor(pageKey),
  };
  return (
    <>
      <link rel="preload" as="image" href="/logoFlow.webp" fetchPriority="high" />
      <link rel="preload" as="image" href="/screen_dashboard.webp" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <FlowPage />
      {/* FAQ visibile (H3) + schema FAQPage da RisorsaFaq (niente <script> faq manuale). */}
      <FaqFromSchema faq={faq} locale={locale} />
      <BlogHighlights locale={locale as AppLocale} categoryId={65} />
      <SettoriLinks locale={locale as AppLocale} settori={['installatori']} />
      <UpdatedOnLine pageKey={pageKey} locale={locale} />
    </>
  );
}
