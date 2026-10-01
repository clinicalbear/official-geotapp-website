import type { Metadata } from 'next';
import Link from 'next/link';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { translatePath } from '@/lib/i18n/slug-map';
import type { AppLocale } from '@/lib/i18n/config';
import LNastro from '@/components/LNastro';
import VideoGiro from '@/components/VideoGiro';
import FeaturedIn from '@/components/FeaturedIn';
import { featuredLabel } from '@/lib/press/labels';
import UpdatedOnLine, { updatedIsoFor } from '@/components/seo/UpdatedOnLine';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';
import { localizeEurPricesDeep } from '@/lib/pricing';

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

/* "Vedi i prezzi →" nella lingua giusta: stessa traduzione gia' presente nel corpo del testo prezzi. */
const SEE_PRICING: Record<string, string> = {
  it: 'Vedi i prezzi →', de: 'Preise ansehen →', fr: 'Voir les tarifs →', es: 'Ver precios →',
  pt: 'Ver preços →', nl: 'Bekijk de prijzen →', da: 'Se priser →', sv: 'Se priser →',
  nb: 'Se priser →', ru: 'Посмотреть цены →', en: 'See pricing →',
};

/* Icona del modulo per nome: stessi asset gia' usati nel mockup (iconaTT/iconaFlow/iconaVerifier). */
const MODULE_ICON: Record<string, string> = {
  'GeoTapp Flow': '/iconaFlow.webp',
  'GeoTapp TimeTracker': '/iconaTT.webp',
  'GeoTapp Verifier': '/iconaVerifier.webp',
};

/* "Presenti su": stessa etichetta gia' pubblicata in HomeClient.tsx. */
type Copy = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  modulesHeading: string;
  modules: { name: string; desc: string }[];
  founderHeading: string;
  founderText: string;
  gdprHeading: string;
  gdprText: string;
  trialHeading: string;
  trialText: string;
  trialCta: string;
  pricingHeading: string;
  pricingText: string;
  sectorsHeading: string;
  sectorsText: string;
  faqHeading: string;
  faq: { q: string; a: string }[];
};

const COPY: Record<string, Copy> = {
  it: {
    title: 'Cos\'è GeoTapp? Il software italiano per dimostrare il lavoro sul campo',
    description: 'GeoTapp è un software italiano per le aziende con squadre sul campo: timbrature con posizione, foto di prova e report sigillati che il cliente verifica da solo. Prova gratuita di 14 giorni.',
    h1: 'Cos\'è GeoTapp',
    intro: 'GeoTapp è un software italiano, in abbonamento, per le aziende con operatori sul campo (pulizie, sicurezza, manutenzione, installazioni, servizi). Serve a dimostrare ogni intervento: gli operatori timbrano dal telefono, la posizione si registra solo in quel momento, le foto di prova si collegano all\'intervento, e alla fine il report viene sigillato. Il cliente riceve un link e può controllare da solo che quel report non sia stato modificato. È costruito per stare dentro i paletti del GDPR (Reg. UE 2016/679) e dell\'art. 4 dello Statuto dei Lavoratori.',
    modulesHeading: 'I tre moduli',
    modules: [
      { name: 'GeoTapp Flow', desc: 'Il gestionale dell\'ufficio: clienti e siti, commesse, squadre e turni, ferie e permessi, report degli interventi, export per le paghe, collegamento con Fatture in Cloud. È una web app: si usa dal browser, su computer e tablet.' },
      { name: 'GeoTapp TimeTracker', desc: 'L\'app per gli operatori, nativa su Android e iOS: timbratura con posizione (entrata, pause, uscita), foto di prova, note e comunicazioni con l\'ufficio. Se manca la rete, la timbratura resta salvata sul telefono e parte da sola quando torna il segnale, con l\'ora in cui è stata fatta. Da 3 € per operatore al mese.' },
      { name: 'GeoTapp Verifier', desc: 'Lo strumento con cui il committente controlla il report: apre il link che riceve, oppure usa il verificatore offline, senza account. Il verificatore ricalcola le impronte e controlla il sigillo, e dice se il documento è integro o se è stato modificato. È gratuito.' },
    ],
    founderHeading: 'Chi ha fondato GeoTapp',
    founderText: 'GeoTapp è stata fondata e sviluppata da Michele Angelo Petraroli, imprenditore italiano. La sede operativa è in Italia, il software è sviluppato interamente in casa ed è disponibile in 11 lingue (italiano, inglese, tedesco, francese, spagnolo, portoghese, olandese, danese, svedese, norvegese, russo).',
    gdprHeading: 'GDPR e art. 4 dello Statuto dei Lavoratori',
    gdprText: 'GeoTapp rileva la posizione solo quando il lavoratore timbra (entrata, pause, uscita) o scatta una foto di prova. Fra una timbratura e l\'altra non registra nulla in automatico, e non potrebbe farlo nemmeno volendo: l\'app non chiede il permesso di leggere la posizione in background. È il principio di minimizzazione del GDPR applicato allo strumento. L\'art. 4 dello Statuto dei Lavoratori chiede comunque l\'informativa ai dipendenti e, dove serve, l\'accordo sindacale o l\'autorizzazione dell\'Ispettorato: GeoTapp fa firmare l\'informativa nell\'app prima della prima timbratura, e sul sito trovi gratis un generatore di informativa GPS.',
    trialHeading: 'Prova gratuita di 14 giorni',
    trialText: 'Puoi provare GeoTapp gratis per 14 giorni, senza carta di credito, con Flow e TimeTracker completi. Si attiva dal sito in pochi minuti. Alla fine della prova non parte nessun addebito automatico.',
    trialCta: 'Inizia la prova gratuita',
    pricingHeading: 'Quanto costa',
    pricingText: 'I prezzi sono pubblici. GeoTapp Flow, per l\'ufficio, costa 39 € al mese con il piano Solo, 99 € con Team e 199 € con Business; pagando l\'anno intero si risparmiano due mesi. Le postazioni TimeTracker per gli operatori si aggiungono a parte: 3 € per operatore al mese fino a 25, 2,50 € dalla ventiseiesima. L\'abbonamento ha una durata minima di 12 mesi. GeoTapp Verifier è gratuito.',
    sectorsHeading: 'Per quali settori',
    sectorsText: 'GeoTapp è usato da imprese di pulizie e multiservizi, servizi di sicurezza e vigilanza, installatori, elettricisti, idraulici, termoidraulici, manutenzione impianti, edilizia, facility management. Va bene dalla squadra di una persona all\'azienda con centinaia di operatori, e gestisce più siti in parallelo.',
    faqHeading: 'Domande frequenti',
    faq: [
      { q: 'GeoTapp ha una prova gratuita?', a: 'Sì: 14 giorni senza carta di credito, con Flow e TimeTracker completi. Si attiva su geotapp.com/it/trial/. Verifier è gratuito sempre.' },
      { q: 'GeoTapp ha un\'app mobile?', a: 'Sì. GeoTapp TimeTracker è un\'app nativa su Google Play (Android) e App Store (iOS) per timbrature, foto di prova, note e rapportini. Flow, il pannello dell\'ufficio, è una web app.' },
      { q: 'È conforme al GDPR?', a: 'GeoTapp è costruito per stare dentro i paletti del GDPR e dell\'art. 4 dello Statuto dei Lavoratori: la posizione si registra solo quando il lavoratore timbra, mai in modo continuo. La conformità dipende però anche da come l\'azienda usa lo strumento: informativa ai dipendenti e, dove serve, accordo sindacale o autorizzazione restano a carico del datore di lavoro.' },
      { q: 'Chi ha fondato GeoTapp?', a: 'GeoTapp è stata fondata da Michele Angelo Petraroli, imprenditore italiano. Il software è sviluppato internamente in Italia ed è disponibile in 11 lingue.' },
      { q: 'In quali lingue è disponibile?', a: 'Italiano, inglese (con le versioni per Regno Unito, Stati Uniti, Australia, Irlanda e Canada), tedesco, francese, spagnolo, portoghese, olandese, danese, svedese, norvegese, russo.' },
    ],
  },
  en: {
    title: 'What is GeoTapp? The Italian software for proving field work',
    description: 'GeoTapp is Italian software for companies with field crews: clock-ins with location, proof photos and sealed reports that the client verifies alone. 14-day free trial.',
    h1: 'What is GeoTapp',
    intro: 'GeoTapp is Italian subscription software for companies with field operators (cleaning, security, maintenance, installations, services). It is there to prove every job: operators clock in from their phone, location is recorded only at that moment, proof photos are linked to the job, and at the end the report is sealed. The client receives a link and can check alone that the report has not been modified. It is built to stay within the limits of the GDPR (EU Reg. 2016/679) and art. 4 of the Italian Workers\' Statute.',
    modulesHeading: 'The three modules',
    modules: [
      { name: 'GeoTapp Flow', desc: 'The office back-end: clients and sites, jobs, teams and shifts, leave, job reports, payroll export, connection with Fatture in Cloud. It is a web app: you use it from the browser, on computer and tablet.' },
      { name: 'GeoTapp TimeTracker', desc: 'The app for operators, native on Android and iOS: clock-in with location (start, breaks, finish), proof photos, notes and communications with the office. If there is no signal, the clock-in stays saved on the phone and is sent on its own when the signal returns, with the time at which it was made. From €3 per operator per month.' },
      { name: 'GeoTapp Verifier', desc: 'The tool the client uses to check the report: they open the link they receive, or use the offline verifier, with no account. The verifier recalculates the fingerprints and checks the seal, and says whether the document is intact or has been modified. It is free.' },
    ],
    founderHeading: 'Who founded GeoTapp',
    founderText: 'GeoTapp was founded and built by Michele Angelo Petraroli, an Italian entrepreneur. The company is based in Italy, the software is developed entirely in-house and is available in 11 languages (Italian, English, German, French, Spanish, Portuguese, Dutch, Danish, Swedish, Norwegian, Russian).',
    gdprHeading: 'GDPR and art. 4 of the Italian Workers\' Statute',
    gdprText: 'GeoTapp records location only when the worker clocks in (start, breaks, finish) or takes a proof photo. Between one clock-in and the next it does not automatically record anything, and it could not even if it wanted to: the app does not ask for permission to read location in the background. This is the GDPR data minimisation principle applied to the tool. Art. 4 of the Italian Workers\' Statute still requires notice to employees and, where needed, a union agreement or authorisation from the Labour Inspectorate: GeoTapp has the notice signed in the app before the first clock-in, and on the site you will find a free GPS notice generator.',
    trialHeading: 'Free 14-day trial',
    trialText: 'You can try GeoTapp free for 14 days, with no credit card, with Flow and TimeTracker in full. You start it from the website in a few minutes. At the end of the trial no automatic charge is made.',
    trialCta: 'Start the free trial',
    pricingHeading: 'How much does it cost',
    pricingText: 'Prices are public. GeoTapp Flow, for the office, costs €39 a month on the Solo plan, €99 on Team and €199 on Business; paying for the whole year saves two months. TimeTracker seats for operators are added separately: €3 per operator per month up to 25, €2.50 from the 26th. The subscription has a minimum term of 12 months. GeoTapp Verifier is free. Prices exclude VAT.',
    sectorsHeading: 'Who uses GeoTapp',
    sectorsText: 'GeoTapp is used by cleaning and facility companies, security and guarding services, installers, electricians, plumbers, HVAC technicians, maintenance and construction crews, facility management providers. It suits a one-person crew as well as a company with hundreds of operators, across multiple sites in parallel.',
    faqHeading: 'Frequently asked questions',
    faq: [
      { q: 'Does GeoTapp offer a free trial?', a: 'Yes: 14 days with no credit card, with Flow and TimeTracker in full. Sign up at geotapp.com/en/trial/. Verifier is always free.' },
      { q: 'Does GeoTapp have a mobile app?', a: 'Yes. GeoTapp TimeTracker is a native app on Google Play (Android) and App Store (iOS) for clock-ins, proof photos, notes and reports. Flow, the office panel, is a web app.' },
      { q: 'Is it GDPR compliant?', a: 'GeoTapp is built to stay within the limits of the GDPR and art. 4 of the Italian Workers\' Statute: location is recorded only when the worker clocks in, never continuously. Compliance also depends on how the company uses the tool, though: notice to employees and, where needed, a union agreement or authorisation remain the employer\'s responsibility.' },
      { q: 'Who founded GeoTapp?', a: 'GeoTapp was founded by Michele Angelo Petraroli, an Italian entrepreneur. The software is developed in-house in Italy and is available in 11 languages.' },
      { q: 'Which languages is it available in?', a: 'Italian, English (with versions for the UK, US, Australia, Ireland and Canada), German, French, Spanish, Portuguese, Dutch, Danish, Swedish, Norwegian, Russian.' },
    ],
  },
  de: {
    title: 'Was ist GeoTapp? Die italienische Software, die Arbeit im Außendienst nachweist',
    description: 'GeoTapp ist eine italienische Software für Unternehmen mit Teams im Außendienst: Zeiterfassung mit Standort, Nachweisfotos und versiegelte Berichte, die der Kunde selbst prüft. 14 Tage kostenlos testen.',
    h1: 'Was ist GeoTapp',
    intro: 'GeoTapp ist eine italienische Software im Abonnement für Unternehmen mit Mitarbeitenden im Außendienst (Reinigung, Sicherheit, Wartung, Installation, Dienstleistungen). Sie dient dazu, jeden Einsatz nachzuweisen: Die Mitarbeitenden stempeln per Telefon, der Standort wird nur in diesem Moment erfasst, Nachweisfotos werden dem Einsatz zugeordnet, und am Ende wird der Bericht versiegelt. Der Kunde erhält einen Link und kann selbst prüfen, dass der Bericht nicht verändert wurde. Sie ist so gebaut, dass sie die Grenzen der DSGVO (Verordnung (EU) 2016/679) und des Art. 4 des italienischen Arbeitnehmerstatuts einhält.',
    modulesHeading: 'Die drei Module',
    modules: [
      { name: 'GeoTapp Flow', desc: 'Die Verwaltung fürs Büro: Kunden und Einsatzorte, Aufträge, Teams und Schichten, Urlaub und Abwesenheiten, Einsatzberichte, Export für die Lohnabrechnung, Anbindung an Fatture in Cloud. Es ist eine Web-App: Sie läuft im Browser, auf Computer und Tablet.' },
      { name: 'GeoTapp TimeTracker', desc: 'Die App für die Mitarbeitenden, nativ für Android und iOS: Stempeln mit Standort (Beginn, Pausen, Ende), Nachweisfotos, Notizen und Mitteilungen ans Büro. Ist kein Netz da, bleibt die Buchung auf dem Telefon gespeichert und wird von selbst gesendet, sobald wieder Empfang besteht, mit der Uhrzeit, zu der sie erfasst wurde. Ab 3 € pro Mitarbeiter und Monat.' },
      { name: 'GeoTapp Verifier', desc: 'Das Werkzeug, mit dem der Auftraggeber den Bericht prüft: Er öffnet den Link, den er erhält, oder nutzt das Offline-Prüfprogramm, ohne Konto. Das Prüfprogramm berechnet die Fingerabdrücke neu, kontrolliert das Siegel und meldet, ob das Dokument unversehrt ist oder verändert wurde. Es ist kostenlos.' },
    ],
    founderHeading: 'Wer GeoTapp gegründet hat',
    founderText: 'GeoTapp wurde von Michele Angelo Petraroli gegründet und entwickelt, einem italienischen Unternehmer. Das Unternehmen sitzt in Italien, die Software wird vollständig im eigenen Haus entwickelt und ist in 11 Sprachen verfügbar (Italienisch, Englisch, Deutsch, Französisch, Spanisch, Portugiesisch, Niederländisch, Dänisch, Schwedisch, Norwegisch, Russisch).',
    gdprHeading: 'DSGVO und Art. 4 des italienischen Arbeitnehmerstatuts',
    gdprText: 'GeoTapp erfasst den Standort nur, wenn die Person stempelt (Beginn, Pausen, Ende) oder ein Nachweisfoto aufnimmt. Zwischen zwei Buchungen wird automatisch nichts aufgezeichnet, und das könnte es auch mit dem besten Willen nicht: Die App fragt nicht nach der Berechtigung, den Standort im Hintergrund zu lesen. Das ist der Grundsatz der Datenminimierung der DSGVO, auf das Werkzeug angewandt. Art. 4 des italienischen Arbeitnehmerstatuts verlangt dennoch die Information der Beschäftigten und, wo erforderlich, eine Betriebsvereinbarung oder die Genehmigung der Arbeitsaufsicht: GeoTapp lässt die Information vor der ersten Buchung in der App bestätigen, und auf der Website finden Sie kostenlos einen Generator für die GPS-Information.',
    trialHeading: '14 Tage kostenlos testen',
    trialText: 'Sie können GeoTapp 14 Tage kostenlos testen, ohne Kreditkarte, mit vollem Umfang von Flow und TimeTracker. Die Testphase starten Sie in wenigen Minuten auf der Website. Nach Ende der Testphase wird nichts automatisch abgebucht.',
    trialCta: 'Kostenlos testen',
    pricingHeading: 'Was kostet es',
    pricingText: 'Die Preise sind öffentlich. GeoTapp Flow, fürs Büro, kostet 39 € im Monat mit dem Tarif Solo, 99 € mit Team und 199 € mit Business; wer das ganze Jahr zahlt, spart zwei Monate. Die TimeTracker-Plätze für die Mitarbeitenden kommen separat dazu: 3 € pro Mitarbeiter und Monat bis zum 25. Platz, 2,50 € ab dem 26. Das Abonnement hat eine Mindestlaufzeit von 12 Monaten. GeoTapp Verifier ist kostenlos. Alle Preise zzgl. USt.',
    sectorsHeading: 'Für welche Branchen',
    sectorsText: 'GeoTapp wird von Reinigungs- und Multiservice-Unternehmen, Sicherheits- und Wachdiensten, Installateuren, Elektrikern, Klempnern, Heizungs- und Sanitärbetrieben, Anlagenwartung, Baubetrieben und Facility-Management-Anbietern eingesetzt. Es passt vom Ein-Personen-Team bis zum Unternehmen mit Hunderten von Mitarbeitenden und verwaltet mehrere Einsatzorte parallel.',
    faqHeading: 'Häufig gestellte Fragen',
    faq: [
      { q: 'Bietet GeoTapp eine kostenlose Testphase?', a: 'Ja: 14 Tage ohne Kreditkarte, mit vollem Umfang von Flow und TimeTracker. Anmeldung auf geotapp.com/de/trial/. Der Verifier ist immer kostenlos.' },
      { q: 'Hat GeoTapp eine mobile App?', a: 'Ja. GeoTapp TimeTracker ist eine native App bei Google Play (Android) und im App Store (iOS) für Zeiterfassung, Nachweisfotos, Notizen und Tätigkeitsberichte. Flow, das Büro-Panel, ist eine Web-App.' },
      { q: 'Ist es DSGVO-konform?', a: 'GeoTapp ist so gebaut, dass es die Grenzen der DSGVO und des Art. 4 des italienischen Arbeitnehmerstatuts einhält: Der Standort wird nur erfasst, wenn die Person stempelt, nie fortlaufend. Die Konformität hängt aber auch davon ab, wie das Unternehmen das Werkzeug einsetzt: Information der Beschäftigten und, wo erforderlich, Betriebsvereinbarung oder Genehmigung bleiben Sache des Arbeitgebers.' },
      { q: 'Wer hat GeoTapp gegründet?', a: 'GeoTapp wurde von Michele Angelo Petraroli gegründet, einem italienischen Unternehmer. Die Software wird im eigenen Haus in Italien entwickelt und ist in 11 Sprachen verfügbar.' },
      { q: 'In welchen Sprachen ist es verfügbar?', a: 'Italienisch, Englisch (mit Fassungen für Großbritannien, USA, Australien, Irland und Kanada), Deutsch, Französisch, Spanisch, Portugiesisch, Niederländisch, Dänisch, Schwedisch, Norwegisch, Russisch.' },
    ],
  },
  fr: {
    title: 'Qu\'est-ce que GeoTapp ? Le logiciel qui prouve le travail de terrain',
    description: 'Logiciel italien pour les équipes de terrain : pointages avec position, photos de preuve, rapports scellés que le client vérifie seul. Essai gratuit de 14 jours.',
    h1: 'Qu\'est-ce que GeoTapp',
    intro: 'GeoTapp est un logiciel italien, sur abonnement, pour les entreprises qui ont des opérateurs de terrain (nettoyage, sécurité, maintenance, installation, services). Il sert à prouver chaque intervention : les opérateurs pointent depuis leur téléphone, la position n\'est enregistrée qu\'à ce moment-là, les photos de preuve sont rattachées à l\'intervention et, à la fin, le rapport est scellé. Le client reçoit un lien et peut vérifier lui-même que ce rapport n\'a pas été modifié. Il est conçu pour rester dans le cadre du RGPD (règlement (UE) 2016/679) et de l\'article 4 du Statut des travailleurs italien.',
    modulesHeading: 'Les trois modules',
    modules: [
      { name: 'GeoTapp Flow', desc: 'L\'outil de gestion du bureau : clients et sites, chantiers, équipes et plannings, congés et absences, rapports d\'intervention, export pour la paie, connexion avec Fatture in Cloud. C\'est une application web : elle s\'utilise dans le navigateur, sur ordinateur et sur tablette.' },
      { name: 'GeoTapp TimeTracker', desc: 'L\'application pour les opérateurs, native sur Android et iOS : pointage avec position (arrivée, pauses, départ), photos de preuve, notes et messages avec le bureau. S\'il n\'y a pas de réseau, le pointage reste enregistré sur le téléphone et part tout seul dès le retour du signal, avec l\'heure à laquelle il a été fait. À partir de 3 € par opérateur et par mois.' },
      { name: 'GeoTapp Verifier', desc: 'L\'outil avec lequel le donneur d\'ordre contrôle le rapport : il ouvre le lien qu\'il reçoit, ou utilise le vérificateur hors ligne, sans compte. Le vérificateur recalcule les empreintes, contrôle le sceau et indique si le document est intact ou s\'il a été modifié. Il est gratuit.' },
    ],
    founderHeading: 'Qui a fondé GeoTapp',
    founderText: 'GeoTapp a été fondée et développée par Michele Angelo Petraroli, entrepreneur italien. Le siège est en Italie, le logiciel est entièrement développé en interne et disponible en 11 langues (italien, anglais, allemand, français, espagnol, portugais, néerlandais, danois, suédois, norvégien, russe).',
    gdprHeading: 'RGPD et article 4 du Statut des travailleurs italien',
    gdprText: 'GeoTapp relève la position uniquement lorsque le salarié pointe (arrivée, pauses, départ) ou prend une photo de preuve. Entre deux pointages, il n\'enregistre rien automatiquement, et il ne pourrait pas le faire même en le voulant : l\'application ne demande pas l\'autorisation de lire la position en arrière-plan. C\'est le principe de minimisation du RGPD appliqué à l\'outil. L\'article 4 du Statut des travailleurs italien exige malgré tout l\'information des salariés et, lorsque c\'est nécessaire, l\'accord syndical ou l\'autorisation de l\'Inspection du travail : GeoTapp fait signer cette information dans l\'application avant le premier pointage, et vous trouverez sur le site, gratuitement, un générateur de notice d\'information GPS.',
    trialHeading: 'Essai gratuit de 14 jours',
    trialText: 'Vous pouvez essayer GeoTapp gratuitement pendant 14 jours, sans carte bancaire, avec Flow et TimeTracker au complet. L\'essai s\'active depuis le site en quelques minutes. À la fin de l\'essai, aucun prélèvement automatique n\'est effectué.',
    trialCta: 'Démarrer l\'essai gratuit',
    pricingHeading: 'Combien ça coûte',
    pricingText: 'Les tarifs sont publics. GeoTapp Flow, pour le bureau, coûte 39 € par mois avec la formule Solo, 99 € avec Team et 199 € avec Business ; en payant l\'année entière, vous économisez deux mois. Les postes TimeTracker pour les opérateurs s\'ajoutent à part : 3 € par opérateur et par mois jusqu\'au 25e poste, 2,50 € à partir du 26e. L\'abonnement a une durée minimale de 12 mois. GeoTapp Verifier est gratuit. Tous les prix s\'entendent hors TVA.',
    sectorsHeading: 'Pour quels secteurs',
    sectorsText: 'GeoTapp est utilisé par des entreprises de nettoyage et multiservices, des services de sécurité et de gardiennage, des installateurs, des électriciens, des plombiers, des chauffagistes, des sociétés de maintenance d\'installations, du bâtiment et de facility management. Il convient aussi bien à l\'équipe d\'une seule personne qu\'à l\'entreprise de plusieurs centaines d\'opérateurs, et gère plusieurs sites en parallèle.',
    faqHeading: 'Questions fréquentes',
    faq: [
      { q: 'GeoTapp propose-t-il un essai gratuit ?', a: 'Oui : 14 jours sans carte bancaire, avec Flow et TimeTracker au complet. L\'inscription se fait sur geotapp.com/fr/trial/. Verifier est toujours gratuit.' },
      { q: 'GeoTapp a-t-il une application mobile ?', a: 'Oui. GeoTapp TimeTracker est une application native sur Google Play (Android) et sur l\'App Store (iOS) pour les pointages, les photos de preuve, les notes et les comptes rendus. Flow, le panneau du bureau, est une application web.' },
      { q: 'Est-il conforme au RGPD ?', a: 'GeoTapp est conçu pour rester dans le cadre du RGPD et de l\'article 4 du Statut des travailleurs italien : la position n\'est enregistrée que lorsque le salarié pointe, jamais en continu. La conformité dépend toutefois aussi de la manière dont l\'entreprise utilise l\'outil : l\'information des salariés et, lorsqu\'ils sont requis, l\'accord syndical ou l\'autorisation restent à la charge de l\'employeur.' },
      { q: 'Qui a fondé GeoTapp ?', a: 'GeoTapp a été fondée par Michele Angelo Petraroli, entrepreneur italien. Le logiciel est développé en interne en Italie et disponible en 11 langues.' },
      { q: 'Dans quelles langues est-il disponible ?', a: 'Italien, anglais (avec les versions pour le Royaume-Uni, les États-Unis, l\'Australie, l\'Irlande et le Canada), allemand, français, espagnol, portugais, néerlandais, danois, suédois, norvégien, russe.' },
    ],
  },
  es: {
    title: '¿Qué es GeoTapp? El software que demuestra el trabajo en campo',
    description: 'GeoTapp es un software italiano para equipos de campo: fichajes con ubicación, fotos de prueba e informes sellados que el cliente verifica por sí mismo. Prueba gratuita de 14 días.',
    h1: '¿Qué es GeoTapp?',
    intro: 'GeoTapp es un software italiano, de suscripción, para empresas con operarios de campo (limpieza, seguridad, mantenimiento, instalaciones, servicios). Sirve para demostrar cada intervención: los operarios fichan desde el teléfono, la ubicación se registra solo en ese momento, las fotos de prueba se vinculan a la intervención y al final el informe se sella. El cliente recibe un enlace y puede comprobar por sí mismo que ese informe no se ha modificado. Está diseñado para moverse dentro del marco del RGPD (Reg. UE 2016/679) y del art. 4 del Estatuto de los Trabajadores italiano.',
    modulesHeading: 'Los tres módulos',
    modules: [
      { name: 'GeoTapp Flow', desc: 'La herramienta de gestión de la oficina: clientes y sedes, obras, equipos y turnos, vacaciones y permisos, informes de las intervenciones, exportación para la nómina y conexión con Fatture in Cloud. Es una aplicación web: se usa desde el navegador, en ordenador y tableta.' },
      { name: 'GeoTapp TimeTracker', desc: 'La aplicación para los operarios, nativa en Android e iOS: fichaje con ubicación (entrada, pausas, salida), fotos de prueba, notas y comunicaciones con la oficina. Si no hay cobertura, el fichaje queda guardado en el teléfono y se envía solo cuando vuelve la señal, con la hora a la que se hizo. Desde 3 € por puesto al mes.' },
      { name: 'GeoTapp Verifier', desc: 'La herramienta con la que el cliente comprueba el informe: abre el enlace que recibe, o usa el verificador sin conexión, sin cuenta. El verificador recalcula las huellas y comprueba el sello, y dice si el documento está íntegro o si se ha modificado. Es gratuito.' },
    ],
    founderHeading: 'Quién fundó GeoTapp',
    founderText: 'GeoTapp fue fundada y desarrollada por Michele Angelo Petraroli, emprendedor italiano. La sede operativa está en Italia, el software se desarrolla íntegramente en casa y está disponible en 11 idiomas (italiano, inglés, alemán, francés, español, portugués, neerlandés, danés, sueco, noruego, ruso).',
    gdprHeading: 'RGPD y art. 4 del Estatuto de los Trabajadores italiano',
    gdprText: 'GeoTapp registra la ubicación solo cuando el trabajador ficha (entrada, pausas, salida) o hace una foto de prueba. Entre un fichaje y otro no registra nada de forma automática, y no podría hacerlo aunque quisiera: la aplicación no pide el permiso para leer la ubicación en segundo plano. Es el principio de minimización del RGPD aplicado a la herramienta. El art. 4 del Estatuto de los Trabajadores italiano exige, en cualquier caso, la información a los empleados y, cuando corresponde, el acuerdo sindical o la autorización de la Inspección de Trabajo: GeoTapp hace firmar la información en la aplicación antes del primer fichaje, y en el sitio encontrarás gratis un generador de informativa GPS.',
    trialHeading: 'Prueba gratuita de 14 días',
    trialText: 'Puedes probar GeoTapp gratis durante 14 días, sin tarjeta de crédito, con Flow y TimeTracker completos. Se activa desde el sitio en pocos minutos. Al terminar la prueba no se hace ningún cargo automático.',
    trialCta: 'Empezar la prueba gratuita',
    pricingHeading: 'Cuánto cuesta',
    pricingText: 'Los precios son públicos. GeoTapp Flow, para la oficina, cuesta 39 € al mes con el plan Solo, 99 € con Team y 199 € con Business; pagando el año completo se ahorran dos meses. Los puestos de TimeTracker para los operarios se añaden aparte: 3 € por operario al mes hasta 25, 2,50 € a partir del 26.º. La suscripción tiene una duración mínima de 12 meses. GeoTapp Verifier es gratuito. Precios sin IVA.',
    sectorsHeading: 'Para qué sectores',
    sectorsText: 'GeoTapp lo usan empresas de limpieza y multiservicios, servicios de seguridad y vigilancia, instaladores, electricistas, fontaneros, técnicos de climatización, mantenimiento de instalaciones, construcción y facility management. Sirve desde el equipo de una sola persona hasta la empresa con cientos de operarios, y gestiona varias sedes en paralelo.',
    faqHeading: 'Preguntas frecuentes',
    faq: [
      { q: '¿GeoTapp tiene prueba gratuita?', a: 'Sí: 14 días sin tarjeta de crédito, con Flow y TimeTracker completos. Se activa en geotapp.com/es/trial/. Verifier es siempre gratuito.' },
      { q: '¿GeoTapp tiene aplicación móvil?', a: 'Sí. GeoTapp TimeTracker es una aplicación nativa en Google Play (Android) y App Store (iOS) para fichajes, fotos de prueba, notas y partes. Flow, el panel de la oficina, es una aplicación web.' },
      { q: '¿Cumple el RGPD?', a: 'GeoTapp está diseñado para moverse dentro del marco del RGPD y del art. 4 del Estatuto de los Trabajadores italiano: la ubicación se registra solo cuando el trabajador ficha, nunca de forma continua. Pero el cumplimiento depende también de cómo use la herramienta la empresa: la información a los empleados y, cuando corresponde, el acuerdo sindical o la autorización siguen siendo responsabilidad del empleador.' },
      { q: '¿Quién fundó GeoTapp?', a: 'GeoTapp fue fundada por Michele Angelo Petraroli, emprendedor italiano. El software se desarrolla internamente en Italia y está disponible en 11 idiomas.' },
      { q: '¿En qué idiomas está disponible?', a: 'Italiano, inglés (con las versiones para Reino Unido, Estados Unidos, Australia, Irlanda y Canadá), alemán, francés, español, portugués, neerlandés, danés, sueco, noruego, ruso.' },
    ],
  },
  pt: {
    title: 'O que é o GeoTapp? Software que comprova o trabalho em campo',
    description: 'O GeoTapp é um software italiano para equipas no terreno: picagens com localização, fotos de prova e relatórios selados que o cliente verifica. Teste de 14 dias.',
    h1: 'O que é o GeoTapp',
    intro: 'O GeoTapp é um software italiano, por subscrição, para empresas com operadores no terreno (limpeza, segurança, manutenção, instalações, serviços). Serve para comprovar cada intervenção: os operadores picam o ponto pelo telemóvel, a localização é registada apenas nesse momento, as fotos de prova ligam-se à intervenção e, no fim, o relatório é selado. O cliente recebe uma ligação e pode confirmar sozinho que esse relatório não foi alterado. Foi concebido para se manter dentro do quadro do RGPD (Reg. UE 2016/679) e do art. 4 do Estatuto dos Trabalhadores italiano.',
    modulesHeading: 'Os três módulos',
    modules: [
      { name: 'GeoTapp Flow', desc: 'A ferramenta de gestão do escritório: clientes e locais, obras, equipas e turnos, férias e licenças, relatórios das intervenções, exportação para o processamento salarial, ligação ao Fatture in Cloud. É uma aplicação web: usa-se no navegador, em computador e tablet.' },
      { name: 'GeoTapp TimeTracker', desc: 'A aplicação para os operadores, nativa em Android e iOS: picagem com localização (entrada, pausas, saída), fotos de prova, notas e comunicações com o escritório. Se não houver rede, a picagem fica guardada no telemóvel e segue sozinha quando o sinal volta, com a hora a que foi feita. A partir de 3 € por posto por mês.' },
      { name: 'GeoTapp Verifier', desc: 'A ferramenta com que o cliente confirma o relatório: abre a ligação que recebe ou usa o verificador offline, sem conta. O verificador recalcula as impressões digitais e confirma o selo, e diz se o documento está íntegro ou foi alterado. É gratuito.' },
    ],
    founderHeading: 'Quem fundou o GeoTapp',
    founderText: 'O GeoTapp foi fundado e desenvolvido por Michele Angelo Petraroli, empreendedor italiano. A sede operacional fica em Itália, o software é desenvolvido inteiramente em casa e está disponível em 11 idiomas (italiano, inglês, alemão, francês, espanhol, português, neerlandês, dinamarquês, sueco, norueguês, russo).',
    gdprHeading: 'RGPD e art. 4 do Estatuto dos Trabalhadores italiano',
    gdprText: 'O GeoTapp regista a localização apenas quando o trabalhador pica o ponto (entrada, pausas, saída) ou tira uma foto de prova. Entre uma picagem e a seguinte não regista nada de forma automática, e não o poderia fazer nem que quisesse: a aplicação não pede a permissão para ler a localização em segundo plano. É o princípio de minimização do RGPD aplicado à ferramenta. O art. 4 do Estatuto dos Trabalhadores italiano exige, em todo o caso, a informação aos colaboradores e, quando necessário, o acordo sindical ou a autorização da Inspeção do Trabalho: o GeoTapp faz assinar a informação na aplicação antes da primeira picagem, e no sítio encontra gratuitamente um gerador de informação sobre o GPS.',
    trialHeading: 'Teste gratuito de 14 dias',
    trialText: 'Pode experimentar o GeoTapp gratuitamente durante 14 dias, sem cartão de crédito, com o Flow e o TimeTracker completos. Ativa-se a partir do sítio em poucos minutos. No fim do teste não é feito nenhum débito automático.',
    trialCta: 'Começar o teste gratuito',
    pricingHeading: 'Quanto custa',
    pricingText: 'Os preços são públicos. O GeoTapp Flow, para o escritório, custa 39 € por mês com o plano Solo, 99 € com o Team e 199 € com o Business; pagando o ano inteiro poupam-se dois meses. Os postos do TimeTracker para os operadores somam-se à parte: 3 € por operador por mês até 25, 2,50 € a partir do 26.º. A subscrição tem uma duração mínima de 12 meses. O GeoTapp Verifier é gratuito. Preços sem IVA.',
    sectorsHeading: 'Para que setores',
    sectorsText: 'O GeoTapp é usado por empresas de limpeza e multisserviços, serviços de segurança e vigilância, instaladores, eletricistas, canalizadores, técnicos de climatização, manutenção de instalações, construção e facility management. Serve desde a equipa de uma só pessoa até à empresa com centenas de operadores, e gere vários locais em paralelo.',
    faqHeading: 'Perguntas frequentes',
    faq: [
      { q: 'O GeoTapp tem teste gratuito?', a: 'Sim: 14 dias sem cartão de crédito, com o Flow e o TimeTracker completos. Ativa-se em geotapp.com/pt/trial/. O Verifier é sempre gratuito.' },
      { q: 'O GeoTapp tem aplicação móvel?', a: 'Sim. O GeoTapp TimeTracker é uma aplicação nativa no Google Play (Android) e na App Store (iOS) para picagens, fotos de prova, notas e relatórios. O Flow, o painel do escritório, é uma aplicação web.' },
      { q: 'Cumpre o RGPD?', a: 'O GeoTapp foi concebido para se manter dentro do quadro do RGPD e do art. 4 do Estatuto dos Trabalhadores italiano: a localização é registada apenas quando o trabalhador pica o ponto, nunca de forma contínua. O cumprimento depende, porém, também da forma como a empresa usa a ferramenta: a informação aos colaboradores e, quando necessário, o acordo sindical ou a autorização continuam a ser da responsabilidade do empregador.' },
      { q: 'Quem fundou o GeoTapp?', a: 'O GeoTapp foi fundado por Michele Angelo Petraroli, empreendedor italiano. O software é desenvolvido internamente em Itália e está disponível em 11 idiomas.' },
      { q: 'Em que idiomas está disponível?', a: 'Italiano, inglês (com as versões para Reino Unido, Estados Unidos, Austrália, Irlanda e Canadá), alemão, francês, espanhol, português, neerlandês, dinamarquês, sueco, norueguês, russo.' },
    ],
  },
  nl: {
    title: 'Wat is GeoTapp? Software om werk in het veld aan te tonen',
    description: 'Italiaanse software voor bedrijven met teams in het veld: registraties met locatie, bewijsfoto\'s en verzegelde rapporten die de klant zelf controleert. 14 dagen gratis.',
    h1: 'Wat is GeoTapp',
    intro: 'GeoTapp is een Italiaanse software, op abonnement, voor bedrijven met medewerkers in het veld (schoonmaak, beveiliging, onderhoud, installaties, diensten). Het dient om elke klus aan te tonen: de medewerkers registreren met hun telefoon, de locatie wordt alleen op dat moment vastgelegd, de bewijsfoto\'s worden aan de klus gekoppeld en aan het eind wordt het rapport verzegeld. De klant ontvangt een link en kan zelf controleren dat dat rapport niet is gewijzigd. Het is gebouwd om binnen de kaders van de AVG (Verordening (EU) 2016/679) en van artikel 4 van het Italiaanse arbeidsstatuut te blijven.',
    modulesHeading: 'De drie modules',
    modules: [
      { name: 'GeoTapp Flow', desc: 'Het beheersysteem van het kantoor: klanten en locaties, opdrachten, teams en diensten, verlof en vrije dagen, rapporten van de klussen, export voor de salarissen, koppeling met Fatture in Cloud. Het is een webapp: u gebruikt hem in de browser, op computer en tablet.' },
      { name: 'GeoTapp TimeTracker', desc: 'De app voor de medewerkers, native op Android en iOS: registratie met locatie (aankomst, pauzes, vertrek), bewijsfoto\'s, notities en communicatie met het kantoor. Is er geen netwerk, dan blijft de registratie op de telefoon bewaard en wordt ze vanzelf verzonden zodra het signaal terugkomt, met het tijdstip waarop ze is gemaakt. Vanaf € 3 per medewerker per maand.' },
      { name: 'GeoTapp Verifier', desc: 'Het hulpmiddel waarmee de opdrachtgever het rapport controleert: hij opent de link die hij ontvangt, of gebruikt de offline verifier, zonder account. De verifier berekent de vingerafdrukken opnieuw en controleert de verzegeling, en zegt of het document intact is of is gewijzigd. Het is gratis.' },
    ],
    founderHeading: 'Wie GeoTapp heeft opgericht',
    founderText: 'GeoTapp is opgericht en ontwikkeld door Michele Angelo Petraroli, Italiaans ondernemer. De operationele vestiging is in Italië, de software wordt volledig in eigen huis ontwikkeld en is beschikbaar in 11 talen (Italiaans, Engels, Duits, Frans, Spaans, Portugees, Nederlands, Deens, Zweeds, Noors, Russisch).',
    gdprHeading: 'AVG en artikel 4 van het Italiaanse arbeidsstatuut',
    gdprText: 'GeoTapp legt de locatie alleen vast wanneer de medewerker registreert (aankomst, pauzes, vertrek) of een bewijsfoto maakt. Tussen twee registraties in wordt niets automatisch vastgelegd, en het zou dat ook niet kunnen, al wilde het: de app vraagt geen toestemming om de locatie op de achtergrond te lezen. Het is het beginsel van minimale gegevensverwerking van de AVG, toegepast op het hulpmiddel. Artikel 4 van het Italiaanse arbeidsstatuut vraagt in elk geval om een privacyverklaring aan de werknemers en, waar nodig, een akkoord met de vakbond of een vergunning van de arbeidsinspectie: GeoTapp laat de verklaring in de app ondertekenen vóór de eerste registratie, en op de site vindt u gratis een generator voor de GPS-privacyverklaring.',
    trialHeading: 'Gratis proefperiode van 14 dagen',
    trialText: 'U kunt GeoTapp 14 dagen gratis proberen, zonder creditcard, met Flow en TimeTracker volledig. Het wordt in een paar minuten op de site geactiveerd. Aan het eind van de proefperiode volgt er geen automatische afschrijving.',
    trialCta: 'Start de gratis proefperiode',
    pricingHeading: 'Wat het kost',
    pricingText: 'De prijzen zijn openbaar. GeoTapp Flow, voor het kantoor, kost € 39 per maand met het Solo-plan, € 99 met Team en € 199 met Business; wie het hele jaar betaalt, bespaart twee maanden. De TimeTracker-plaatsen voor de medewerkers komen er apart bij: € 3 per medewerker per maand tot 25, € 2,50 vanaf de zesentwintigste. Het abonnement heeft een minimale looptijd van 12 maanden. GeoTapp Verifier is gratis.',
    sectorsHeading: 'Voor welke sectoren',
    sectorsText: 'GeoTapp wordt gebruikt door schoonmaak- en multiservicebedrijven, beveiligings- en bewakingsdiensten, installateurs, elektriciens, loodgieters, cv-installateurs, onderhoud van installaties, bouw en facility management. Het past van de ploeg van één persoon tot het bedrijf met honderden medewerkers, en beheert meerdere locaties tegelijk.',
    faqHeading: 'Veelgestelde vragen',
    faq: [
      { q: 'Heeft GeoTapp een gratis proefperiode?', a: 'Ja: 14 dagen zonder creditcard, met Flow en TimeTracker volledig. Het wordt geactiveerd op geotapp.com/nl/trial/. Verifier is altijd gratis.' },
      { q: 'Heeft GeoTapp een mobiele app?', a: 'Ja. GeoTapp TimeTracker is een native app in Google Play (Android) en de App Store (iOS) voor registraties, bewijsfoto\'s, notities en werkbonnen. Flow, het paneel van het kantoor, is een webapp.' },
      { q: 'Is het conform de AVG?', a: 'GeoTapp is gebouwd om binnen de kaders van de AVG en van artikel 4 van het Italiaanse arbeidsstatuut te blijven: de locatie wordt alleen vastgelegd wanneer de medewerker registreert, nooit doorlopend. De naleving hangt echter ook af van hoe het bedrijf het hulpmiddel gebruikt: de privacyverklaring aan de werknemers en, waar nodig, het akkoord met de vakbond of de vergunning blijven voor rekening van de werkgever.' },
      { q: 'Wie heeft GeoTapp opgericht?', a: 'GeoTapp is opgericht door Michele Angelo Petraroli, Italiaans ondernemer. De software wordt intern in Italië ontwikkeld en is beschikbaar in 11 talen.' },
      { q: 'In welke talen is het beschikbaar?', a: 'Italiaans, Engels (met de versies voor het Verenigd Koninkrijk, de Verenigde Staten, Australië, Ierland en Canada), Duits, Frans, Spaans, Portugees, Nederlands, Deens, Zweeds, Noors, Russisch.' },
    ],
  },
  da: {
    title: 'Hvad er GeoTapp? Software til at dokumentere feltarbejde',
    description: 'Italiensk software til hold i marken: stemplinger med position, bevisfotos og forseglede rapporter, som kunden selv verificerer. 14 dages gratis prøve.',
    h1: 'Hvad er GeoTapp',
    intro: 'GeoTapp er en italiensk software på abonnement til virksomheder med medarbejdere i marken (rengøring, sikkerhed, vedligeholdelse, installation, service). Den bruges til at dokumentere hver opgave: medarbejderne stempler fra telefonen, positionen registreres kun i det øjeblik, bevisfotos knyttes til opgaven, og til sidst forsegles rapporten. Kunden modtager et link og kan selv kontrollere, at rapporten ikke er ændret. Den er bygget til at holde sig inden for rammerne af GDPR (forordning (EU) 2016/679) og artikel 4 i den italienske arbejdstagerlov.',
    modulesHeading: 'De tre moduler',
    modules: [
      { name: 'GeoTapp Flow', desc: 'Kontorets styringsværktøj: kunder og arbejdssteder, sager, hold og vagtplaner, ferie og fravær, rapporter over opgaverne, eksport til lønkørsel, forbindelse til Fatture in Cloud. Det er en webapp: den bruges i browseren, på computer og tablet.' },
      { name: 'GeoTapp TimeTracker', desc: 'Appen til medarbejderne, native på Android og iOS: stempling med position (ind, pauser, ud), bevisfotos, noter og kommunikation med kontoret. Hvis der ikke er dækning, bliver stemplingen på telefonen og sendes af sig selv, når signalet vender tilbage, med det klokkeslæt, den blev foretaget på. Fra 3 € pr. medarbejder pr. måned.' },
      { name: 'GeoTapp Verifier', desc: 'Værktøjet, som bestilleren bruger til at kontrollere rapporten: vedkommende åbner det link, der modtages, eller bruger den gratis offlineverifikator, uden konto. Verifier genberegner fingeraftrykkene, kontrollerer seglet og fortæller, om dokumentet er intakt, eller om det er ændret. Det er gratis.' },
    ],
    founderHeading: 'Hvem grundlagde GeoTapp',
    founderText: 'GeoTapp er grundlagt og udviklet af Michele Angelo Petraroli, italiensk iværksætter. Hovedkontoret ligger i Italien, softwaren udvikles helt internt og findes på 11 sprog (italiensk, engelsk, tysk, fransk, spansk, portugisisk, hollandsk, dansk, svensk, norsk, russisk).',
    gdprHeading: 'GDPR og artikel 4 i den italienske arbejdstagerlov',
    gdprText: 'GeoTapp registrerer kun positionen, når medarbejderen stempler (ind, pauser, ud) eller tager et bevisfoto. Mellem to stemplinger registrerer den ikke noget automatisk, og det kunne den heller ikke, selv om man ville: appen beder ikke om tilladelse til at læse positionen i baggrunden. Det er GDPR\'s princip om dataminimering anvendt på værktøjet. Artikel 4 i den italienske arbejdstagerlov kræver dog stadig information til medarbejderne og, hvor det er nødvendigt, en fagforeningsaftale eller en tilladelse fra arbejdstilsynet: GeoTapp får informationen underskrevet i appen før den første stempling, og på siden finder du gratis en generator til GPS-information.',
    trialHeading: 'Gratis prøveperiode på 14 dage',
    trialText: 'Du kan prøve GeoTapp gratis i 14 dage, uden kreditkort, med hele Flow og TimeTracker. Den aktiveres fra siden på få minutter. Når prøveperioden er slut, trækkes der ingen betaling automatisk.',
    trialCta: 'Start den gratis prøveperiode',
    pricingHeading: 'Hvad koster det',
    pricingText: 'Priserne er offentlige. GeoTapp Flow, til kontoret, koster 39 € om måneden med planen Solo, 99 € med Team og 199 € med Business; betaler du for hele året, sparer du to måneder. TimeTracker-pladserne til medarbejderne kommer oveni: 3 € pr. medarbejder pr. måned til og med plads 25, 2,50 € fra plads 26. Abonnementet har en mindste varighed på 12 måneder. GeoTapp Verifier er gratis. Priserne er ekskl. moms.',
    sectorsHeading: 'Til hvilke brancher',
    sectorsText: 'GeoTapp bruges af rengørings- og multiserviceselskaber, sikkerheds- og vagttjenester, installatører, elektrikere, blikkenslagere, VVS-firmaer, vedligeholdelse af anlæg, byggeri og facility management. Det passer fra et enmandshold til virksomheden med hundredvis af medarbejdere og håndterer flere arbejdssteder parallelt.',
    faqHeading: 'Ofte stillede spørgsmål',
    faq: [
      { q: 'Har GeoTapp en gratis prøveperiode?', a: 'Ja: 14 dage uden kreditkort, med hele Flow og TimeTracker. Den aktiveres på geotapp.com/da/trial/. Verifier er altid gratis.' },
      { q: 'Har GeoTapp en mobilapp?', a: 'Ja. GeoTapp TimeTracker er en native app på Google Play (Android) og App Store (iOS) til stemplinger, bevisfotos, noter og arbejdsrapporter. Flow, kontorets panel, er en webapp.' },
      { q: 'Overholder det GDPR?', a: 'GeoTapp er bygget til at holde sig inden for rammerne af GDPR og artikel 4 i den italienske arbejdstagerlov: positionen registreres kun, når medarbejderen stempler, aldrig løbende. Overholdelsen afhænger dog også af, hvordan virksomheden bruger værktøjet: information til medarbejderne og, hvor det kræves, fagforeningsaftale eller tilladelse er stadig arbejdsgiverens ansvar.' },
      { q: 'Hvem grundlagde GeoTapp?', a: 'GeoTapp er grundlagt af Michele Angelo Petraroli, italiensk iværksætter. Softwaren udvikles internt i Italien og findes på 11 sprog.' },
      { q: 'På hvilke sprog er det tilgængeligt?', a: 'Italiensk, engelsk (med versioner til Storbritannien, USA, Australien, Irland og Canada), tysk, fransk, spansk, portugisisk, hollandsk, dansk, svensk, norsk, russisk.' },
    ],
  },
  sv: {
    title: 'Vad är GeoTapp? Italiensk SaaS för verifiering av fältarbete',
    description: 'GeoTapp är en italiensk SaaS för att hantera fältarbetare: GPS-stämpling, rapporter, varje ändring syns. GDPR-anpassad. 14 dagars gratis testperiod.',
    h1: 'Vad är GeoTapp',
    intro: 'GeoTapp är en italiensk SaaS-plattform som låter företag med fältarbetare (städ, säkerhet, underhåll, installation, facility services) bevisa varje besök. GPS-stämpling, foton och signaturer på plats, rapporter där varje ändring syns och en unik länk där slutkunden själv verifierar att jobbet är utfört. Fullt GDPR-anpassad (EU-förordning 2016/679) och i linje med italiensk arbetsrätt (art. 4 Arbetarstatut efter Jobs Act).',
    modulesHeading: 'De tre modulerna',
    modules: [
      { name: 'GeoTapp Flow', desc: 'Kontorsmodulen: CRM, kund- och platsdatabas, schemaläggning, uppdragshantering, fakturering, integration med Stripe och Fatture in Cloud. Webbapp för desktop och surfplatta.' },
      { name: 'GeoTapp TimeTracker', desc: 'Mobilappen för fältarbetare (Android och iOS): GPS-stämpling, geotaggade foton, rapporter, digital kundsignatur, offlineläge med senare synk. Från €4 per arbetare per månad.' },
      { name: 'GeoTapp Verifier', desc: 'Verifieringssystemet för kunden: varje rapport har en unik länk som kunden öppnar utan konto och på en sekund ser GPS-data, tider, foton och integriteten på det kryptografiska sigillet. Ingår gratis i alla planer.' },
    ],
    founderHeading: 'Vem grundade GeoTapp',
    founderText: 'GeoTapp grundades och utvecklades av Michele Angelo Petraroli, italiensk entreprenör specialiserad på SaaS för tjänste-SMB. Huvudkontor i Italien, plattformen utvecklas helt internt och är lokaliserad på 11 språk.',
    gdprHeading: 'GDPR och arbetsrätt',
    gdprText: 'GeoTapp registrerar position endast vid in- och utstämpling, inte kontinuerligt. Det respekterar GDPR:s dataminimeringsprincip (EU-förordning 2016/679) och art. 4 i italienska Arbetarstatutet efter Jobs Act, som tillåter organisatoriska och säkerhetsverktyg endast efter information till anställda och, där så krävs, kollektivavtal eller tillstånd från Arbetsmiljöverket.',
    trialHeading: '14 dagars gratis testperiod',
    trialText: 'GeoTapp erbjuder en gratis testperiod på 14 dagar utan kreditkort med full tillgång till alla tre modulerna. Anmäl dig direkt på webbplatsen, med välkomst-onboarding.',
    trialCta: 'Starta den gratis testperioden',
    pricingHeading: 'Vad kostar det',
    pricingText: 'Licensmodell per användare med transparenta priser. GeoTapp TimeTracker från €4 per arbetare per månad, med planer för små team (3-10 användare), SMB (10-50) och stora organisationer (50-300+). Flow + TimeTracker-paket med rabatt. GeoTapp Verifier alltid inkluderat.',
    sectorsHeading: 'För vilka branscher',
    sectorsText: 'GeoTapp används av städ- och facility-företag, säkerhets- och bevakningstjänster, installatörer, elektriker, rörmokare, VVS-tekniker, underhålls- och byggteam, facility management-leverantörer. Plattformen skalar från 3 till över 300 arbetare på flera platser parallellt.',
    faqHeading: 'Vanliga frågor',
    faq: [
      { q: 'Har GeoTapp en gratis testperiod?', a: 'Ja, 14 dagar utan kreditkort och full tillgång till Flow, TimeTracker och Verifier. Anmäl på geotapp.com/sv/trial/.' },
      { q: 'Har GeoTapp en mobilapp?', a: 'Ja. GeoTapp TimeTracker är en native app på Google Play (Android) och App Store (iOS) för stämpling, fältfoton, rapporter och digitala signaturer. Flow, kontorspanelen, är en webbapp.' },
      { q: 'Är det GDPR-anpassat?', a: 'Ja. Position registreras endast vid in- och utstämpling, inte kontinuerligt, i full överensstämmelse med GDPR och italiensk arbetsrätt (art. 4 Arbetarstatut).' },
      { q: 'Vem grundade GeoTapp?', a: 'GeoTapp grundades av Michele Angelo Petraroli, italiensk entreprenör. Plattformen utvecklas internt i Italien och är lokaliserad på 11 språk.' },
      { q: 'På vilka språk finns det?', a: 'Italienska, engelska (UK, US, AU, IE, CA), tyska, franska, spanska, portugisiska, holländska, danska, svenska, norska, ryska.' },
    ],
  },
  nb: {
    title: 'Hva er GeoTapp? Italiensk SaaS for verifisering av feltarbeid',
    description: 'GeoTapp er en italiensk SaaS for å håndtere feltarbeidere: GPS-stempling, rapporter, enhver endring kan spores. GDPR-overholdt. 14 dagers gratis prøveperiode.',
    h1: 'Hva er GeoTapp',
    intro: 'GeoTapp er en italiensk SaaS-plattform som lar bedrifter med feltarbeidere (renhold, sikkerhet, vedlikehold, installasjon, facility services) bevise hvert oppdrag. GPS-stempling, bilder og signaturer på stedet, rapporter der enhver endring kan spores, og en unik lenke der sluttkunden selv verifiserer at jobben er gjort. Full GDPR-overholdelse (EU-forordning 2016/679) og i tråd med italiensk arbeidsrett (art. 4 Arbeidstakerstatutt etter Jobs Act).',
    modulesHeading: 'De tre modulene',
    modules: [
      { name: 'GeoTapp Flow', desc: 'Kontormodulen: CRM, kunde- og lokasjonsdatabase, vaktplanlegging, oppdragshåndtering, fakturering, integrasjon med Stripe og Fatture in Cloud. Webapp for desktop og nettbrett.' },
      { name: 'GeoTapp TimeTracker', desc: 'Mobilappen for feltarbeidere (Android og iOS): GPS-stempling, geo-taggede bilder, rapporter, digital kundesignatur, offlinebruk med senere synk. Fra €4 per arbeider per måned.' },
      { name: 'GeoTapp Verifier', desc: 'Verifiseringssystemet for kunden: hver rapport har en unik lenke kunden åpner uten konto, og ser på et sekund GPS-data, tider, bilder og integriteten av det kryptografiske seglet. Inkludert gratis i alle planer.' },
    ],
    founderHeading: 'Hvem grunnla GeoTapp',
    founderText: 'GeoTapp ble grunnlagt og utviklet av Michele Angelo Petraroli, italiensk gründer spesialisert på SaaS for tjeneste-SMB. Hovedkontor i Italia, plattformen utvikles helt internt og er lokalisert på 11 språk.',
    gdprHeading: 'GDPR og arbeidsrett',
    gdprText: 'GeoTapp registrerer posisjon kun ved inn- og utstempling, ikke kontinuerlig. Det respekterer GDPRs dataminimeringsprinsipp (EU-forordning 2016/679) og art. 4 i det italienske Arbeidstakerstatuttet etter Jobs Act, som tillater organisatoriske og sikkerhetsverktøy kun etter informasjon til ansatte og, der det kreves, kollektivavtale eller tillatelse fra Arbeidstilsynet.',
    trialHeading: '14 dagers gratis prøveperiode',
    trialText: 'GeoTapp tilbyr en gratis prøveperiode på 14 dager uten kredittkort med full tilgang til alle tre modulene. Meld deg på direkte på nettstedet, med velkomst-onboarding.',
    trialCta: 'Start den gratis prøveperioden',
    pricingHeading: 'Hva koster det',
    pricingText: 'Lisensmodell per bruker med transparente priser. GeoTapp TimeTracker fra €4 per arbeider per måned, med planer for små team (3-10 brukere), SMB (10-50) og store organisasjoner (50-300+). Flow + TimeTracker-pakke med rabatt. GeoTapp Verifier alltid inkludert.',
    sectorsHeading: 'For hvilke bransjer',
    sectorsText: 'GeoTapp brukes av renholds- og facility-selskaper, sikkerhets- og vakttjenester, installatører, elektrikere, rørleggere, VVS-teknikere, vedlikeholds- og byggteam, facility management-leverandører. Plattformen skalerer fra 3 til over 300 arbeidere på flere lokasjoner parallelt.',
    faqHeading: 'Ofte stilte spørsmål',
    faq: [
      { q: 'Har GeoTapp en gratis prøveperiode?', a: 'Ja, 14 dager uten kredittkort og full tilgang til Flow, TimeTracker og Verifier. Meld deg på geotapp.com/nb/trial/.' },
      { q: 'Har GeoTapp en mobilapp?', a: 'Ja. GeoTapp TimeTracker er en native app på Google Play (Android) og App Store (iOS) for stempling, feltbilder, rapporter og digitale signaturer. Flow, kontorpanelet, er en webapp.' },
      { q: 'Er det GDPR-overholdt?', a: 'Ja. Posisjon registreres kun ved inn- og utstempling, ikke kontinuerlig, i full overensstemmelse med GDPR og italiensk arbeidsrett (art. 4 Arbeidstakerstatutt).' },
      { q: 'Hvem grunnla GeoTapp?', a: 'GeoTapp ble grunnlagt av Michele Angelo Petraroli, italiensk gründer. Plattformen utvikles internt i Italia og er lokalisert på 11 språk.' },
      { q: 'På hvilke språk er det tilgjengelig?', a: 'Italiensk, engelsk (UK, US, AU, IE, CA), tysk, fransk, spansk, portugisisk, nederlandsk, dansk, svensk, norsk, russisk.' },
    ],
  },
  ru: {
    title: 'Что такое GeoTapp? Итальянский SaaS для верификации выездных работ',
    description: 'GeoTapp, итальянский SaaS для управления полевыми операторами: GPS-учёт времени, отчёты, любые изменения обнаруживаются. Соответствие GDPR. Бесплатный пробный период 14 дней.',
    h1: 'Что такое GeoTapp',
    intro: 'GeoTapp, итальянская SaaS-платформа, которая позволяет компаниям с выездными операторами (клининг, охрана, обслуживание, монтаж, facility services) доказать каждый выезд. Учёт времени по GPS, фото и подписи на объекте, отчёты, в которых любое изменение обнаруживается, и уникальная ссылка, по которой конечный клиент сам проверяет запись о работе. Полное соответствие GDPR (Регл. ЕС 2016/679) и итальянскому трудовому праву (ст. 4 Статута Трудящихся после Jobs Act).',
    modulesHeading: 'Три модуля',
    modules: [
      { name: 'GeoTapp Flow', desc: 'Офисный модуль: CRM, база клиентов и объектов, планирование смен, управление заказами, выставление счетов, интеграция со Stripe и Fatture in Cloud. Веб-приложение для десктопа и планшета.' },
      { name: 'GeoTapp TimeTracker', desc: 'Мобильное приложение для операторов (Android и iOS): GPS-учёт времени, геотегированные фото, отчёты, цифровая подпись клиента, офлайн-работа с последующей синхронизацией. От €4 за оператора в месяц.' },
      { name: 'GeoTapp Verifier', desc: 'Система верификации для клиента: каждый отчёт имеет уникальную ссылку, которую клиент открывает без аккаунта и за секунду видит GPS-данные, время, фото и целостность криптографической печати. Бесплатно во всех планах.' },
    ],
    founderHeading: 'Кто основал GeoTapp',
    founderText: 'GeoTapp основан и разработан Микеле Анджело Петраролли, итальянским предпринимателем, специализирующимся на SaaS-решениях для сервисного МСБ. Главный офис в Италии, платформа разрабатывается полностью внутри компании и локализована на 11 языках.',
    gdprHeading: 'GDPR и трудовое право',
    gdprText: 'GeoTapp фиксирует местоположение только при входе и выходе со смены, не непрерывно. Это соответствует принципу минимизации данных GDPR (Регл. ЕС 2016/679) и ст. 4 итальянского Статута Трудящихся после Jobs Act, которая разрешает организационные и охранные инструменты только после информирования работников и, где требуется, профсоюзного соглашения или разрешения Трудовой инспекции.',
    trialHeading: 'Бесплатный пробный период 14 дней',
    trialText: 'GeoTapp предлагает бесплатный пробный период 14 дней без банковской карты с полным доступом ко всем трём модулям. Регистрация прямо на сайте, с приветственным онбордингом.',
    trialCta: 'Начать пробный период',
    pricingHeading: 'Сколько это стоит',
    pricingText: 'Лицензионная модель на пользователя с прозрачными ценами. GeoTapp TimeTracker от €4 за оператора в месяц, с планами для небольших команд (3-10 пользователей), МСБ (10-50) и крупных организаций (50-300+). Пакет Flow + TimeTracker со скидкой. GeoTapp Verifier всегда включён.',
    sectorsHeading: 'Для каких отраслей',
    sectorsText: 'GeoTapp используется клининговыми и facility-компаниями, охранными службами, монтажниками, электриками, сантехниками, специалистами по ОВК, командами обслуживания и строительства, поставщиками facility management. Платформа масштабируется от 3 до более 300 операторов на нескольких объектах параллельно.',
    faqHeading: 'Часто задаваемые вопросы',
    faq: [
      { q: 'Есть ли у GeoTapp бесплатный пробный период?', a: 'Да, 14 дней без банковской карты с полным доступом к Flow, TimeTracker и Verifier. Регистрация на geotapp.com/ru/trial/.' },
      { q: 'Есть ли у GeoTapp мобильное приложение?', a: 'Да. GeoTapp TimeTracker, нативное приложение в Google Play (Android) и App Store (iOS) для учёта времени, фото на объекте, отчётов и цифровых подписей. Flow, офисная панель,, это веб-приложение.' },
      { q: 'Соответствует ли GDPR?', a: 'Да. Местоположение фиксируется только при входе и выходе со смены, не непрерывно, в полном соответствии с GDPR и итальянским трудовым правом (ст. 4 Статута Трудящихся).' },
      { q: 'Кто основал GeoTapp?', a: 'GeoTapp основан Микеле Анджело Петраролли, итальянским предпринимателем. Платформа разрабатывается внутри компании в Италии и локализована на 11 языках.' },
      { q: 'На каких языках доступен?', a: 'Итальянский, английский (UK, US, AU, IE, CA), немецкий, французский, испанский, португальский, голландский, датский, шведский, норвежский, русский.' },
    ],
  },
};

const REGIONAL_EN_FALLBACK = ['en-us', 'en-gb', 'en-au', 'en-ie', 'en-ca'];

function getCopy(locale: string): Copy {
  if (COPY[locale]) return COPY[locale];
  if (REGIONAL_EN_FALLBACK.includes(locale)) return localizeEnglishDeep(localizeEurPricesDeep(COPY.en, locale), locale);
  return COPY.en;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = getCopy(locale);
  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: buildLocaleAlternates(locale, '/cos-e-geotapp/'),
    openGraph: {
      title: copy.title,
      description: copy.description,
      type: 'website',
      url: `https://geotapp.com/${locale}${translatePath('/cos-e-geotapp/', locale as AppLocale)}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
    },
  };
}

const BASE_URL = 'https://geotapp.com';

export default async function CosEGeoTappPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = getCopy(locale);
  const trialHref = `/${locale}${translatePath('/trial/', locale as AppLocale)}`;
  const vg = getDictionary(locale as AppLocale).videoGiro;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GeoTapp',
    legalName: 'GeoTapp',
    url: `${BASE_URL}/${locale}/`,
    logo: `${BASE_URL}/LogoGeoTapp.webp`,
    description: copy.description,
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Michele Angelo Petraroli',
      jobTitle: 'Founder',
      worksFor: { '@type': 'Organization', name: 'GeoTapp' },
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IT',
    },
    sameAs: [
      'https://www.linkedin.com/company/geotapp',
      'https://www.capterra.com/p/10038947/GeoTapp/',
      'https://www.getapp.com/operations-management-software/a/geotapp/',
      'https://www.softwareadvice.com/operations-management/geotapp-profile/',
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '4',
      offerCount: '6',
      url: `${BASE_URL}/${locale}/pricing/`,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'GeoTapp Modules',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'GeoTapp Flow', applicationCategory: 'BusinessApplication', operatingSystem: 'Web' } },
        { '@type': 'Offer', itemOffered: { '@type': 'MobileApplication', name: 'GeoTapp TimeTracker', applicationCategory: 'BusinessApplication', operatingSystem: 'Android, iOS' } },
        { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'GeoTapp Verifier', applicationCategory: 'BusinessApplication', operatingSystem: 'Web' } },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: `${BASE_URL}/${locale}/` },
      { '@type': 'ListItem', position: 2, name: copy.h1, item: `${BASE_URL}/${locale}${translatePath('/cos-e-geotapp/', locale as AppLocale)}` },
    ],
  };

  const pricingHref = `/${locale}${translatePath('/pricing/', locale as AppLocale)}`;
  const seePricing = SEE_PRICING[locale] ?? SEE_PRICING.en;

  // Freschezza per AI/Google: data vera dell'ultimo commit su questa pagina
  // (vedi src/lib/seo/content-dates.ts), non la data di build.
  const pageKey = 'cos-e-geotapp';
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: copy.title,
    description: copy.description,
    url: `${BASE_URL}/${locale}${translatePath('/cos-e-geotapp/', locale as AppLocale)}`,
    dateModified: updatedIsoFor(pageKey),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <div className="lp-l lp-cos-e">
        {/* ── testata: stesso h1 e stesso testo, solo vestito nuovo ── */}
        <section className="ph">
          <div className="crumb"><div className="w"><Link href={`/${locale}/`}>Home</Link> / {copy.h1}</div></div>
          <div className="w">
            <h1>{copy.h1}</h1>
            <p className="lede">{copy.intro}</p>
            <div className="acts">
              <Link
                className="b1"
                href={trialHref}
              >
                {copy.trialCta}
              </Link>
              <Link className="b2" href={pricingHref}>{seePricing}</Link>
            </div>
          </div>
        </section>

        {/* ── il giro completo: la pagina spiega cos'e' GeoTapp a parole, e
             questi ottanta secondi lo fanno vedere prima di spiegarlo ── */}
        <section className="sec"><div className="wn">
          <p className="kk k">{vg.kicker}</p>
          <h2 className="r" style={{ fontSize: 'clamp(24px,2.6vw,38px)', margin: '10px 0 24px' }}>{vg.title}</h2>
          <VideoGiro locale={locale as AppLocale} />
          <p style={{ marginTop: 16 }}>
            <Link className="b2" href={`/${locale}${translatePath('/video/', locale as AppLocale)}`}>{vg.pageLink}</Link>
          </p>
        </div></section>

        {/* ── i tre moduli (h2 + h3 invariati) ── */}
        <section className="sec warm"><div className="w">
          <div className="hd"><h2 className="r">{copy.modulesHeading}</h2></div>
          <div className="three r-s">
            {copy.modules.map((m) => (
              <div key={m.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="ic" src={MODULE_ICON[m.name] ?? '/iconaFlow.webp'} alt="" loading="lazy" />
                <h3>{m.name}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div></section>

        {/* ── GDPR e diritto del lavoro ── */}
        <section className="sec"><div className="wt">
          <h2 className="r">{copy.gdprHeading}</h2>
          <p className="r d1" style={{ color: '#475467', marginTop: 22, fontSize: 17.5, lineHeight: 1.7 }}>{copy.gdprText}</p>
        </div></section>

        {/* ── trial gratuito ── */}
        <section className="sec ink"><div className="wt">
          <h2 className="r">{copy.trialHeading}</h2>
          <p className="r d1" style={{ color: 'rgba(247,249,252,.75)', marginTop: 22, fontSize: 17.5, lineHeight: 1.7 }}>{copy.trialText}</p>
          <div className="acts r d2" style={{ marginTop: 30 }}>
            <Link className="b1" href={trialHref}>{copy.trialCta}</Link>
          </div>
        </div></section>

        {/* ── quanto costa ── */}
        <section className="sec"><div className="wt">
          <h2 className="r">{copy.pricingHeading}</h2>
          <p className="r d1" style={{ color: '#475467', marginTop: 22, fontSize: 17.5, lineHeight: 1.7 }}>
            {copy.pricingText}{' '}
            <Link href={pricingHref} className="b2">{seePricing}</Link>
          </p>
        </div></section>

        {/* ── settori ── */}
        <section className="sec warm"><div className="wt">
          <h2 className="r">{copy.sectorsHeading}</h2>
          <p className="r d1" style={{ color: '#475467', marginTop: 22, fontSize: 17.5, lineHeight: 1.7 }}>{copy.sectorsText}</p>
        </div></section>

        {/* ── chi ha fondato GeoTapp ── */}
        <section className="sec"><div className="wt">
          <h2 className="r">{copy.founderHeading}</h2>
          <p className="r d1" style={{ color: '#475467', marginTop: 22, fontSize: 17.5, lineHeight: 1.7 }}>{copy.founderText}</p>
        </div></section>

        <LNastro />

        {/* ── presenti su ── */}
        {/* ── citati su: solo stampa vera. "Presente su" (directory) resta nel footer, non si ripete qui ── */}
        <section className="dirs">
          <div className="w"><p className="kk k r dirs-kk">{featuredLabel(locale)}</p></div>
          <div className="host">
            <FeaturedIn locale={locale} />
          </div>
        </section>

        {/* ── domande frequenti: stesse 5 domande del faqSchema, invariate ── */}
        <section className="fq"><div className="w"><div className="g">
          <h2 className="r">{copy.faqHeading}</h2>
          <div className="r d1">
            {copy.faq.map((f, i) => (
              <details key={i} open={i === 0}>
                <summary><h3>{f.q}</h3></summary>
                <div className="ct"><p>{f.a}</p></div>
              </details>
            ))}
          </div>
        </div></div></section>

        {/* ── chiusura ── */}
        <section className="end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="bg" src="/bg2.webp" alt="" aria-hidden="true" loading="lazy" />
          <div className="ov" />
          <div className="w">
            <p className="big r" style={{ fontSize: 'clamp(30px,5.2vw,72px)', maxWidth: '17ch', marginBottom: 24, color: 'var(--lime)' }}>
              {copy.trialHeading}
            </p>
            <p className="r d1" style={{ color: 'rgba(247,249,252,.8)', maxWidth: '58ch', marginBottom: 32 }}>{copy.trialText}</p>
            <div className="acts r d2">
              <Link className="b1" href={trialHref}>{copy.trialCta}</Link>
              <Link className="b2" href={pricingHref}>{seePricing}</Link>
            </div>
          </div>
        </section>

        <UpdatedOnLine pageKey={pageKey} locale={locale} />
      </div>
    </>
  );
}
