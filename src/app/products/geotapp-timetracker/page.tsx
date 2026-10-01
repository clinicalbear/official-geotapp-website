'use client';

import './l-page.css';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Clock,
  Smartphone,
} from 'lucide-react';
import Link from 'next/link';
import FeaturedIn from '@/components/FeaturedIn';
import { featuredLabel } from '@/lib/press/labels';
import { useState } from 'react';
import { GEOTAPP_SYSTEMS, SystemDetail } from './systems-data';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  localizePath,
} from '@/lib/i18n/locale-routing';
import { trackEvent } from '@/lib/analytics';
import VideoGiro from '@/components/VideoGiro';
import { GIRO_INIZIO_TIMETRACKER } from '@/lib/video-giro';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';

// Kicker "La prova", stessa parola gia' approvata su HomeClient (L_COPY.la_prova).
const LA_PROVA: Record<string, string> = {
  it: 'La prova', en: 'The proof', de: 'Der Beweis', fr: 'La preuve', es: 'La prueba',
  pt: 'A prova', nl: 'Het bewijs', da: 'Beviset', sv: 'Beviset', nb: 'Beviset', ru: 'Доказательство',
};

/**
 * Testi della pagina TimeTracker, una voce per lingua (prima: «isItalian ? ... : ...»,
 * e ogni lingua diversa dall'italiano riceveva l'inglese). Le lingue senza voce
 * propria ripiegano sull'inglese finché non vengono scritte.
 */
type TtCopy = {
  statusLabel: string; releaseNote: string; mobileKicker: string; downloadTitle: string; downloadSub: string;
  doesTitle: string; doesSub: string;
  highlights: { title: string; description: string }[];
  workflow: { title: string; description: string }[];
  complianceTagline: string; complianceFootnote: string; trial: string; availableOn: string;
};
const TT_COPY: Record<string, TtCopy> = {
  it: {
    statusLabel: 'Dove si usa',
    releaseNote: 'TimeTracker è un\'app nativa, disponibile su Google Play e App Store: serve Android 8.0 o successivo, oppure iOS 26.2 o successivo. Quello che l\'operatore registra arriva in Flow appena c\'è rete.',
    mobileKicker: 'App per il telefono',
    downloadTitle: 'Scarica GeoTapp TimeTracker',
    downloadSub: 'Disponibile su Google Play e su App Store.',
    doesTitle: 'Cosa fa GeoTapp TimeTracker',
    doesSub: 'Non solo presenze: raccoglie sul campo le prove del lavoro, che l\'ufficio usa per il report e il cliente può verificare.',
    highlights: [
      { title: 'Timbrature con posizione e ora', description: 'Entrata, pause e uscita registrano posizione, indirizzo e orario nel momento in cui l\'operatore timbra. Fra una timbratura e l\'altra non si registra nulla in automatico.' },
      { title: 'Prove che il cliente può controllare', description: 'Gli operatori scattano foto, aggiungono note e inviano le prove del lavoro collegate alla commessa. Finiscono nel report sigillato che il cliente verifica da solo.' },
      { title: 'Uno storico che l\'ufficio può usare', description: 'Quello che si raccoglie sul campo arriva in Flow e serve subito per il report al cliente, la cronologia della commessa e il consuntivo.' },
      { title: 'Uso dell\'auto, ricevute e rimborsi', description: 'L\'operatore dichiara l\'uso dell\'auto nel turno, registra rifornimenti e spese con la foto della ricevuta, e l\'ufficio li approva.' },
    ],
    workflow: [
      { title: 'Molto più di una semplice timbratura', description: 'TimeTracker comprende dettaglio della commessa, report, comunicazioni, richieste di ferie e permessi, sessioni di lavoro: non solo presenze.' },
      { title: 'Campo, ufficio e cliente sugli stessi dati', description: 'Il lavoro sul campo non resta isolato: l\'ufficio segue l\'avanzamento, guarda le prove e risponde al cliente con i fatti.' },
    ],
    complianceTagline: 'Prima si firma l\'informativa, poi si timbra.*',
    complianceFootnote: '* Per legge ogni dipendente va informato prima di essere geolocalizzato. GeoTapp prepara l\'informativa, la fa firmare per presa visione nell\'app e non lascia timbrare finché non è firmata.',
    trial: 'Inizia la prova gratuita di 14 giorni',
    availableOn: 'Disponibile su',
  },
  de: {
    statusLabel: 'Wo es eingesetzt wird',
    releaseNote: 'TimeTracker ist eine native App bei Google Play und im App Store: Sie braucht Android 8.0 oder neuer, oder iOS 26.2 oder neuer. Was die Mitarbeitenden erfassen, kommt in Flow an, sobald Netz da ist.',
    mobileKicker: 'App fürs Telefon',
    downloadTitle: 'GeoTapp TimeTracker herunterladen',
    downloadSub: 'Verfügbar bei Google Play und im App Store.',
    doesTitle: 'Was GeoTapp TimeTracker macht',
    doesSub: 'Nicht nur Anwesenheit: Es sammelt vor Ort die Nachweise der Arbeit, die das Büro für den Bericht nutzt und die der Kunde prüfen kann.',
    highlights: [
      { title: 'Buchungen mit Standort und Uhrzeit', description: 'Beginn, Pausen und Ende erfassen Standort, Adresse und Uhrzeit in dem Moment, in dem die Person stempelt. Zwischen zwei Buchungen wird automatisch nichts aufgezeichnet.' },
      { title: 'Nachweise, die der Kunde prüfen kann', description: 'Die Mitarbeitenden machen Fotos, fügen Notizen hinzu und schicken Arbeitsnachweise, die dem Auftrag zugeordnet sind. Sie landen im versiegelten Bericht, den der Kunde selbst prüft.' },
      { title: 'Eine Historie, die das Büro nutzen kann', description: 'Was vor Ort erfasst wird, kommt in Flow an und ist sofort nützlich für den Bericht an den Kunden, den Auftragsverlauf und die Abrechnung.' },
      { title: 'Fahrzeugnutzung, Belege und Erstattungen', description: 'Die Mitarbeitenden geben die Fahrzeugnutzung in der Schicht an, erfassen Tankstopps und Ausgaben mit einem Foto des Belegs, und das Büro genehmigt sie.' },
    ],
    workflow: [
      { title: 'Viel mehr als eine einfache Stempeluhr', description: 'TimeTracker umfasst Auftragsdetails, Berichte, Mitteilungen, Urlaubs- und Abwesenheitsanträge und Arbeitssitzungen: nicht nur Anwesenheit.' },
      { title: 'Außendienst, Büro und Kunde auf denselben Daten', description: 'Die Arbeit vor Ort bleibt nicht isoliert: Das Büro verfolgt den Fortschritt, sieht sich die Nachweise an und antwortet dem Kunden mit Fakten.' },
    ],
    complianceTagline: 'Erst wird die Information bestätigt, dann wird gestempelt.*',
    complianceFootnote: '* Gesetzlich müssen alle Beschäftigten informiert werden, bevor ihr Standort erfasst wird. GeoTapp bereitet die Information vor, lässt sie in der App als zur Kenntnis genommen bestätigen und lässt erst stempeln, wenn sie bestätigt ist.',
    trial: 'Die 14-tägige kostenlose Testphase starten',
    availableOn: 'Verfügbar bei',
  },
  fr: {
    statusLabel: 'Où il s\'utilise',
    releaseNote: 'TimeTracker est une application native, disponible sur Google Play et l\'App Store : elle demande Android 8.0 ou plus récent, ou iOS 26.2 ou plus récent. Ce que l\'opérateur enregistre arrive dans Flow dès qu\'il y a du réseau.',
    mobileKicker: 'Application pour le téléphone',
    downloadTitle: 'Téléchargez GeoTapp TimeTracker',
    downloadSub: 'Disponible sur Google Play et sur l\'App Store.',
    doesTitle: 'Ce que fait GeoTapp TimeTracker',
    doesSub: 'Pas seulement la présence : il recueille sur le terrain les preuves du travail, que le bureau utilise pour le rapport et que le client peut vérifier.',
    highlights: [
      { title: 'Pointages avec position et heure', description: 'Arrivée, pauses et départ enregistrent la position, l\'adresse et l\'heure au moment où l\'opérateur pointe. Entre deux pointages, rien n\'est enregistré automatiquement.' },
      { title: 'Des preuves que le client peut contrôler', description: 'Les opérateurs prennent des photos, ajoutent des notes et envoient les preuves du travail rattachées au chantier. Elles se retrouvent dans le rapport scellé que le client vérifie lui-même.' },
      { title: 'Un historique que le bureau peut utiliser', description: 'Ce qui est recueilli sur le terrain arrive dans Flow et sert tout de suite pour le rapport au client, la chronologie du chantier et le décompte final.' },
      { title: 'Usage de la voiture, reçus et remboursements', description: 'L\'opérateur déclare l\'usage de la voiture pendant son service, enregistre les pleins et les dépenses avec la photo du reçu, et le bureau les valide.' },
    ],
    workflow: [
      { title: 'Bien plus qu\'un simple pointage', description: 'TimeTracker comprend le détail du chantier, les rapports, les communications, les demandes de congés et d\'absences, les sessions de travail : pas seulement la présence.' },
      { title: 'Terrain, bureau et client sur les mêmes données', description: 'Le travail sur le terrain ne reste pas isolé : le bureau suit l\'avancement, regarde les preuves et répond au client avec des faits.' },
    ],
    complianceTagline: 'D\'abord on signe l\'information, ensuite on pointe.*',
    complianceFootnote: '* La loi impose d\'informer chaque salarié avant de le géolocaliser. GeoTapp prépare l\'information, la fait signer pour prise de connaissance dans l\'application et ne laisse pas pointer tant qu\'elle n\'est pas signée.',
    trial: 'Commencez l\'essai gratuit de 14 jours',
    availableOn: 'Disponible sur',
  },
  es: {
    statusLabel: 'Dónde se usa',
    releaseNote: 'TimeTracker es una aplicación nativa, disponible en Google Play y App Store: requiere Android 8.0 o posterior, o iOS 26.2 o posterior. Lo que registra el operario llega a Flow en cuanto hay cobertura.',
    mobileKicker: 'Aplicación para el teléfono',
    downloadTitle: 'Descarga GeoTapp TimeTracker',
    downloadSub: 'Disponible en Google Play y en App Store.',
    doesTitle: 'Qué hace GeoTapp TimeTracker',
    doesSub: 'No solo la asistencia: recoge sobre el terreno las pruebas del trabajo, que la oficina usa para el informe y que el cliente puede verificar.',
    highlights: [
      { title: 'Fichajes con ubicación y hora', description: 'La entrada, las pausas y la salida registran la ubicación, la dirección y la hora en el momento en que el operario ficha. Entre un fichaje y otro no se registra nada de forma automática.' },
      { title: 'Pruebas que el cliente puede comprobar', description: 'Los operarios hacen fotos, añaden notas y envían las pruebas del trabajo vinculadas a la obra. Van a parar al informe sellado que el cliente verifica por sí mismo.' },
      { title: 'Un historial que la oficina puede usar', description: 'Lo que se recoge sobre el terreno llega a Flow y sirve enseguida para el informe al cliente, la cronología de la obra y la liquidación final.' },
      { title: 'Uso del coche, recibos y reembolsos', description: 'El operario declara el uso del coche durante el turno, registra repostajes y gastos con la foto del recibo, y la oficina los aprueba.' },
    ],
    workflow: [
      { title: 'Mucho más que un simple fichaje', description: 'TimeTracker incluye el detalle de la obra, informes, comunicaciones, solicitudes de vacaciones y permisos, y sesiones de trabajo: no solo asistencia.' },
      { title: 'Terreno, oficina y cliente sobre los mismos datos', description: 'El trabajo sobre el terreno no se queda aislado: la oficina sigue el avance, revisa las pruebas y responde al cliente con hechos.' },
    ],
    complianceTagline: 'Primero se firma la información, después se ficha.*',
    complianceFootnote: '* Por ley hay que informar a cada trabajador antes de geolocalizarlo. GeoTapp prepara la información, la hace firmar como enterado en la aplicación y no deja fichar hasta que está firmada.',
    trial: 'Empieza la prueba gratuita de 14 días',
    availableOn: 'Disponible en',
  },
  pt: {
    statusLabel: 'Onde se utiliza',
    releaseNote: 'O TimeTracker é uma aplicação nativa, disponível na Google Play e na App Store: requer Android 8.0 ou posterior, ou iOS 26.2 ou posterior. O que o operador regista chega ao Flow assim que houver rede.',
    mobileKicker: 'Aplicação para o telemóvel',
    downloadTitle: 'Descarregue o GeoTapp TimeTracker',
    downloadSub: 'Disponível na Google Play e na App Store.',
    doesTitle: 'O que faz o GeoTapp TimeTracker',
    doesSub: 'Não só a assiduidade: recolhe no terreno as provas do trabalho, que o escritório usa para o relatório e que o cliente pode verificar.',
    highlights: [
      { title: 'Picagens com localização e hora', description: 'A entrada, as pausas e a saída registam a localização, a morada e a hora no momento em que o operador pica o ponto. Entre uma picagem e outra não se regista nada de forma automática.' },
      { title: 'Provas que o cliente pode comprovar', description: 'Os operadores tiram fotografias, acrescentam notas e enviam as provas do trabalho ligadas à obra. Vão parar ao relatório selado que o cliente verifica sozinho.' },
      { title: 'Um histórico que o escritório pode usar', description: 'O que se recolhe no terreno chega ao Flow e serve logo para o relatório ao cliente, a cronologia da obra e o apuramento final.' },
      { title: 'Uso do automóvel, recibos e reembolsos', description: 'O operador declara o uso do automóvel durante o turno, regista abastecimentos e despesas com a fotografia do recibo, e o escritório aprova-os.' },
    ],
    workflow: [
      { title: 'Muito mais do que uma simples picagem', description: 'O TimeTracker inclui o detalhe da obra, relatórios, comunicações, pedidos de férias e ausências, e sessões de trabalho: não só assiduidade.' },
      { title: 'Terreno, escritório e cliente sobre os mesmos dados', description: 'O trabalho no terreno não fica isolado: o escritório acompanha o avanço, vê as provas e responde ao cliente com factos.' },
    ],
    complianceTagline: 'Primeiro assina-se a informação, depois pica-se o ponto.*',
    complianceFootnote: '* Por lei, cada trabalhador deve ser informado antes de ser geolocalizado. O GeoTapp prepara a informação, faz com que seja assinada como tomada de conhecimento na aplicação e não deixa picar o ponto enquanto não estiver assinada.',
    trial: 'Comece o teste gratuito de 14 dias',
    availableOn: 'Disponível na',
  },
  nl: {
    statusLabel: 'Waar u het gebruikt',
    releaseNote: 'TimeTracker is een native app, beschikbaar op Google Play en de App Store: vereist Android 8.0 of nieuwer, of iOS 26.2 of nieuwer. Wat de medewerker registreert, komt in Flow aan zodra er netwerk is.',
    mobileKicker: 'App voor de telefoon',
    downloadTitle: 'Download GeoTapp TimeTracker',
    downloadSub: 'Beschikbaar op Google Play en in de App Store.',
    doesTitle: 'Wat GeoTapp TimeTracker doet',
    doesSub: 'Niet alleen aanwezigheid: het verzamelt in het veld het bewijs van het werk, dat het kantoor gebruikt voor het rapport en dat de klant kan controleren.',
    highlights: [
      { title: 'Registraties met locatie en tijd', description: 'Aankomst, pauzes en vertrek leggen locatie, adres en tijd vast op het moment dat de medewerker registreert. Tussen twee registraties in wordt niets automatisch vastgelegd.' },
      { title: 'Bewijs dat de klant kan controleren', description: 'De medewerkers maken foto\'s, voegen notities toe en sturen bewijs van het werk dat aan de opdracht is gekoppeld. Het komt in het verzegelde rapport dat de klant zelf controleert.' },
      { title: 'Een historie die het kantoor kan gebruiken', description: 'Wat in het veld wordt verzameld, komt in Flow aan en dient meteen voor het rapport aan de klant, de chronologie van de opdracht en de afrekening.' },
      { title: 'Gebruik van de auto, bonnetjes en vergoedingen', description: 'De medewerker geeft aan of hij tijdens de dienst de auto gebruikt, legt tankbeurten en kosten vast met een foto van de bon, en het kantoor keurt ze goed.' },
    ],
    workflow: [
      { title: 'Veel meer dan een simpele registratie', description: 'TimeTracker omvat details van de opdracht, rapporten, communicatie, aanvragen voor verlof en vrije dagen, werksessies: niet alleen aanwezigheid.' },
      { title: 'Veld, kantoor en klant op dezelfde gegevens', description: 'Het werk in het veld blijft niet geïsoleerd: het kantoor volgt de voortgang, bekijkt het bewijs en antwoordt de klant met feiten.' },
    ],
    complianceTagline: 'Eerst ondertekent men de verklaring, dan registreert men.*',
    complianceFootnote: '* Volgens de wet moet elke werknemer worden geïnformeerd voordat hij wordt gelokaliseerd. GeoTapp maakt de privacyverklaring klaar, laat die in de app voor kennisgeving ondertekenen en laat niet registreren totdat ze is ondertekend.',
    trial: 'Start de gratis proefperiode van 14 dagen',
    availableOn: 'Beschikbaar op',
  },
  en: {
    statusLabel: 'Where it is used',
    releaseNote: 'TimeTracker is a native app, available on Google Play and the App Store: it needs Android 8.0 or later, or iOS 26.2 or later. What the operator records arrives in Flow as soon as there is a signal.',
    mobileKicker: 'Phone app',
    downloadTitle: 'Download GeoTapp TimeTracker',
    downloadSub: 'Available on Google Play and on the App Store.',
    doesTitle: 'What GeoTapp TimeTracker does',
    doesSub: 'Not just attendance: it collects proof of the work in the field, which the office uses for the report and the client can verify.',
    highlights: [
      { title: 'Clock-ins with location and time', description: 'Start, breaks and finish record location, address and time at the moment the operator clocks in. Nothing is automatically recorded between one clock-in and the next.' },
      { title: 'Proof the client can check', description: 'Operators take photos, add notes and send proof of the work linked to the job. It all ends up in the sealed report that the client verifies alone.' },
      { title: 'A history the office can use', description: 'What is collected in the field arrives in Flow and is immediately useful for the client report, the job timeline and the final account.' },
      { title: 'Car use, receipts and reimbursements', description: 'The operator declares car use during the shift, records refuelling and expenses with a photo of the receipt, and the office approves them.' },
    ],
    workflow: [
      { title: 'Much more than a simple clock-in', description: 'TimeTracker includes job detail, reports, communications, leave requests and work sessions: not just attendance.' },
      { title: 'Field, office and client on the same data', description: 'Field work does not stay isolated: the office follows progress, looks at the proof and answers the client with facts.' },
    ],
    complianceTagline: 'First the notice is signed, then you clock in.*',
    complianceFootnote: '* By law every employee must be informed before being geolocated. GeoTapp prepares the notice, has it signed as acknowledged in the app and does not let the worker clock in until it is signed.',
    trial: 'Start the 14-day free trial',
    availableOn: 'Available on',
  },
  da: {
    statusLabel: 'Hvor det bruges',
    releaseNote: 'TimeTracker er en native app på Google Play og i App Store: den kræver Android 8.0 eller nyere, eller iOS 26.2 eller nyere. Det, medarbejderen registrerer, kommer frem i Flow, så snart der er net.',
    mobileKicker: 'App til telefonen',
    downloadTitle: 'Hent GeoTapp TimeTracker',
    downloadSub: 'Findes på Google Play og i App Store.',
    doesTitle: 'Hvad GeoTapp TimeTracker gør',
    doesSub: 'Ikke kun fremmøde: den samler dokumentationen for arbejdet i marken, som kontoret bruger til rapporten, og som kunden kan verificere.',
    highlights: [
      { title: 'Stemplinger med position og klokkeslæt', description: 'Start, pauser og slut registrerer position, adresse og klokkeslæt i det øjeblik, medarbejderen stempler. Mellem to stemplinger registreres intet automatisk.' },
      { title: 'Dokumentation, kunden kan kontrollere', description: 'Medarbejderne tager fotos, tilføjer noter og sender dokumentation for arbejdet, knyttet til opgaven. Det ender i den forseglede rapport, som kunden selv verificerer.' },
      { title: 'En historik, kontoret kan bruge', description: 'Det, der samles i marken, kommer frem i Flow og bruges straks til rapporten til kunden, opgavens forløb og den endelige opgørelse.' },
      { title: 'Brug af bil, kvitteringer og udlæg', description: 'Medarbejderen angiver brug af bil i vagten, registrerer tankning og udgifter med et foto af kvitteringen, og kontoret godkender dem.' },
    ],
    workflow: [
      { title: 'Meget mere end en almindelig stempling', description: 'TimeTracker omfatter opgavens detaljer, rapporter, beskeder, ønsker om ferie og fravær og arbejdssessioner: ikke kun fremmøde.' },
      { title: 'Marken, kontoret og kunden på de samme data', description: 'Arbejdet i marken står ikke alene: kontoret følger fremdriften, ser dokumentationen og svarer kunden med fakta.' },
    ],
    complianceTagline: 'Først bekræftes informationen, så stempler man.*',
    complianceFootnote: '* Efter GDPR skal hver medarbejder informeres, før medarbejderens position registreres. GeoTapp forbereder informationen, får den bekræftet som læst i appen og lader ikke medarbejderen stemple, før den er bekræftet.',
    trial: 'Start den gratis prøveperiode på 14 dage',
    availableOn: 'Findes på',
  },
  sv: {
    statusLabel: 'Var du använder det',
    releaseNote: 'TimeTracker är en inbyggd app på Google Play och App Store: den kräver Android 8.0 eller senare, eller iOS 26.2 eller senare. Det medarbetaren registrerar kommer fram i Flow så fort det finns nät.',
    mobileKicker: 'Appen för telefonen',
    downloadTitle: 'Hämta GeoTapp TimeTracker',
    downloadSub: 'Finns på Google Play och App Store.',
    doesTitle: 'Vad GeoTapp TimeTracker gör',
    doesSub: 'Inte bara närvaro: den samlar underlaget för arbetet på fältet, som kontoret använder till rapporten och som kunden kan kontrollera.',
    highlights: [
      { title: 'Stämplingar med position och klockslag', description: 'Start, raster och slut sparar position, adress och klockslag i det ögonblick medarbetaren stämplar. Mellan två stämplingar sparas ingenting automatiskt.' },
      { title: 'Underlag som kunden kan kontrollera', description: 'Medarbetarna tar foton, lägger till anteckningar och skickar underlag för arbetet, kopplat till uppdraget. Det hamnar i den förseglade rapporten, som kunden själv verifierar.' },
      { title: 'En historik som kontoret kan använda', description: 'Det som samlas in på fältet kommer fram i Flow och används direkt till rapporten till kunden, uppdragets förlopp och slutavräkningen.' },
      { title: 'Bilanvändning, kvitton och utlägg', description: 'Medarbetaren anger bilanvändning under passet, registrerar tankning och utgifter med ett foto av kvittot, och kontoret godkänner dem.' },
    ],
    workflow: [
      { title: 'Mycket mer än en vanlig stämpling', description: 'TimeTracker omfattar uppdragets detaljer, rapporter, meddelanden, ansökningar om semester och ledighet samt arbetspass: inte bara närvaro.' },
      { title: 'Fältet, kontoret och kunden på samma data', description: 'Arbetet på fältet står inte ensamt: kontoret följer framstegen, ser underlaget och svarar kunden med fakta.' },
    ],
    complianceTagline: 'Först bekräftar man informationen, sedan stämplar man.*',
    complianceFootnote: '* Enligt GDPR måste varje anställd informeras innan hens position registreras. GeoTapp förbereder informationen, låter den bekräftas som läst i appen och släpper inte fram någon stämpling förrän den är bekräftad.',
    trial: 'Starta den kostnadsfria provperioden på 14 dagar',
    availableOn: 'Finns på',
  },
  nb: {
    statusLabel: 'Hvor det brukes',
    releaseNote: 'TimeTracker er en native app på Google Play og App Store: den krever Android 8.0 eller nyere, eller iOS 26.2 eller nyere. Det medarbeideren registrerer, kommer fram i Flow så snart det er nett.',
    mobileKicker: 'Appen for telefonen',
    downloadTitle: 'Last ned GeoTapp TimeTracker',
    downloadSub: 'Finnes på Google Play og App Store.',
    doesTitle: 'Hva GeoTapp TimeTracker gjør',
    doesSub: 'Ikke bare oppmøte: den samler dokumentasjonen på arbeidet i felt, som kontoret bruker til rapporten og som kunden kan kontrollere.',
    highlights: [
      { title: 'Stemplinger med posisjon og klokkeslett', description: 'Start, pauser og slutt registrerer posisjon, adresse og klokkeslett i det øyeblikket medarbeideren stempler. Mellom to stemplinger registreres ingenting automatisk.' },
      { title: 'Dokumentasjon kunden kan kontrollere', description: 'Medarbeiderne tar bilder, legger til notater og sender dokumentasjon på arbeidet, knyttet til oppdraget. Det havner i den forseglede rapporten, som kunden selv verifiserer.' },
      { title: 'En historikk kontoret kan bruke', description: 'Det som samles inn i felt, kommer fram i Flow og brukes med en gang til rapporten til kunden, oppdragets forløp og sluttoppgjøret.' },
      { title: 'Bilbruk, kvitteringer og utlegg', description: 'Medarbeideren oppgir bilbruk under vakten, registrerer tanking og utgifter med et bilde av kvitteringen, og kontoret godkjenner dem.' },
    ],
    workflow: [
      { title: 'Mye mer enn en vanlig stempling', description: 'TimeTracker omfatter oppdragets detaljer, rapporter, meldinger, søknader om ferie og fravær og arbeidsøkter: ikke bare oppmøte.' },
      { title: 'Felt, kontor og kunde på de samme dataene', description: 'Arbeidet i felt står ikke alene: kontoret følger framdriften, ser dokumentasjonen og svarer kunden med fakta.' },
    ],
    complianceTagline: 'Først bekreftes informasjonen, så stempler man.*',
    complianceFootnote: '* Etter GDPR må hver ansatt informeres før posisjonen hans eller hennes registreres. GeoTapp forbereder informasjonen, får den bekreftet som lest i appen og lar ikke den ansatte stemple før den er bekreftet.',
    trial: 'Start den gratis prøveperioden på 14 dager',
    availableOn: 'Finnes på',
  },
  ru: {
    statusLabel: 'Где используется',
    releaseNote: 'TimeTracker — нативное приложение в Google Play и App Store: нужен Android 8.0 или новее, либо iOS 26.2 или новее. То, что зафиксировал сотрудник, появляется в Flow, как только есть связь.',
    mobileKicker: 'Приложение для телефона',
    downloadTitle: 'Скачайте GeoTapp TimeTracker',
    downloadSub: 'Доступно в Google Play и App Store.',
    doesTitle: 'Что делает GeoTapp TimeTracker',
    doesSub: 'Не только учёт присутствия: приложение собирает в поле доказательства выполненной работы, которые офис использует для отчёта, а клиент может проверить сам.',
    highlights: [
      { title: 'Отметки с местоположением и временем', description: 'Вход, перерывы и выход фиксируют местоположение, адрес и время в момент, когда сотрудник делает отметку. Между отметками ничего не записывается автоматически.' },
      { title: 'Доказательства, которые клиент может проверить', description: 'Сотрудники делают фото, добавляют заметки и отправляют доказательства выполненной работы, привязанные к заданию. Они попадают в запечатанный отчёт, который клиент проверяет самостоятельно.' },
      { title: 'История, которую может использовать офис', description: 'То, что собрано в поле, сразу появляется в Flow и используется для отчёта клиенту, истории задания и итогового расчёта.' },
      { title: 'Использование автомобиля, чеки и расходы', description: 'Сотрудник отмечает использование автомобиля в течение смены, фиксирует заправки и расходы с фото чека, а офис их утверждает.' },
    ],
    workflow: [
      { title: 'Намного больше, чем просто отметка', description: 'TimeTracker охватывает детали задания, отчёты, сообщения, заявки на отпуск и отсутствие, рабочие смены: не только учёт присутствия.' },
      { title: 'Поле, офис и клиент работают с одними и теми же данными', description: 'Работа в поле не остаётся изолированной: офис следит за ходом выполнения, видит доказательства и отвечает клиенту фактами.' },
    ],
    complianceTagline: 'Сначала подписывается информирование, потом можно делать отметку.*',
    complianceFootnote: '* По закону каждого сотрудника нужно проинформировать до того, как начнётся фиксация его местоположения. GeoTapp готовит информирование, даёт подписать его в приложении как подтверждение ознакомления и не позволяет делать отметку, пока оно не подписано.',
    trial: 'Начните бесплатный пробный период на 14 дней',
    availableOn: 'Доступно в',
  },
};

export default function GeoTappApp() {
  const [selectedSystem, setSelectedSystem] = useState<SystemDetail | null>(null);
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const dict = getDictionary(currentLocale);
  const appDict = dict.product_pages.app;

  const splitHeroTitle = (title: string) => {
    const parts = title.split(/<br\s*\/?>/i);
    return { main: parts[0] || '', rest: parts.slice(1).join('<br />').trim() };
  };
  const { main: heroTitleMain, rest: heroTitleRest } = splitHeroTitle(appDict.hero_title);
  const heroTitlePlain = heroTitleMain.replace(/<[^>]*>/g, '').trim();

  const systems = GEOTAPP_SYSTEMS.map((sys) => {
    // @ts-ignore
    const t = appDict.systems[sys.id];
    return {
      ...sys,
      systemName: t?.name || sys.systemName,
      shortDescription: t?.short || sys.shortDescription,
      fullDescription: t?.full || sys.fullDescription,
    };
  });
  const getSystem = (id: string) => systems.find((s) => s.id === id)!;
  const getLink = (path: string) => localizePath(path, currentLocale);
  const vg = dict.videoGiro;

  const tc = localizeEnglishDeep(TT_COPY[currentLocale] ?? TT_COPY[currentLocale.split('-')[0]] ?? TT_COPY.en, currentLocale);
  const trackerHighlights = tc.highlights;
  const trackerWorkflow = tc.workflow;

  const sectorGroups: Array<{ key: '1' | '2' | '3'; systems: SystemDetail[] }> = [
    { key: '1', systems: [getSystem('timelock-alpha'), getSystem('event-horizon'), getSystem('unit-matrix')] },
    { key: '2', systems: [getSystem('sector-grid'), getSystem('energy-logistics'), getSystem('neural-link')] },
    { key: '3', systems: [getSystem('payroll-bridge'), getSystem('data-core'), getSystem('identity-forge')] },
  ];

  const complianceTagline = tc.complianceTagline;
  const complianceFootnote = tc.complianceFootnote;
  const trialLabel = tc.trial;
  const availableOn = tc.availableOn;

  return (
    <div className="lp-l lp-prodotto-timetracker">
      {/* SYSTEM DETAIL MODAL, invariato */}
      <AnimatePresence>
        {selectedSystem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSystem(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${selectedSystem.id}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
            >
              <div className="bg-slate-50 p-10 md:w-1/3 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col justify-between shrink-0 relative overflow-hidden">
                <div>
                  <div className="p-5 bg-white rounded-2xl shadow-xl inline-block mb-8 border border-slate-100 text-blue-600">
                    <selectedSystem.icon size={56} />
                  </div>
                  <div className="font-mono text-xs text-slate-400 mb-2 tracking-widest">{selectedSystem.codeName}</div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">{selectedSystem.systemName}</h3>
                  <div className="w-20 h-1 bg-blue-500 rounded-full mb-8"></div>
                </div>
                <div className="font-mono text-xs text-slate-500 space-y-2 border-t border-slate-200 pt-6">
                  <p dangerouslySetInnerHTML={{ __html: appDict.modal.status }}></p>
                  <p dangerouslySetInnerHTML={{ __html: appDict.modal.encryption }}></p>
                  <p dangerouslySetInnerHTML={{ __html: appDict.modal.device }}></p>
                </div>
              </div>
              <div className="p-10 md:p-14 md:w-2/3 prose prose-slate max-w-none relative">
                <button onClick={() => setSelectedSystem(null)} className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-10 text-slate-500">
                  <X size={24} />
                </button>
                <div
                  className="markdown-content text-lg leading-relaxed text-slate-700 font-medium"
                  dangerouslySetInnerHTML={{ __html: selectedSystem.fullDescription.replace(/\n/g, '<br/>') }}
                />
                <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center">
                  <span className="font-mono text-xs text-slate-400">
                    SESSION ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </span>
                  <button onClick={() => setSelectedSystem(null)} className="px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg">
                    {appDict.modal.close}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* TESTATA */}
      <section className="ph">
        <div className="crumb"><div className="w"><Link href={getLink('/')}>Home</Link> / {dict.navbar.products} / GeoTapp TimeTracker.</div></div>
        <div className="w">
          <p className="kk k"><s />{appDict.hero_badge}</p>
          <h1>
            {heroTitlePlain || 'GeoTapp TimeTracker'}
            {heroTitleRest && (
              <>
                <br />
                <em dangerouslySetInnerHTML={{ __html: heroTitleRest }} />
              </>
            )}
          </h1>
          <p className="lede">{appDict.hero_subtitle}</p>
          <p className="l-tagline">{complianceTagline}</p>
          <p className="l-foot-note">{complianceFootnote}</p>
          <div className="acts">
            <Link className="b1" href={getLink('/trial')} onClick={() => trackEvent('trial_click', { cta_source: 'product_timetracker', cta_locale: currentLocale })}>
              {trialLabel}
            </Link>
            <Link className="b2" href={getLink('/pricing')}>{appDict.cta_button}</Link>
          </div>
        </div>
      </section>

      {/* SCHERMATE VERE, due telefoni affiancati: dashboard e menu */}
      <section className="shot"><div className="wn"><div className="fitwrap" style={{ gap: 26, flexWrap: 'wrap' }}>
        <div className="frame fit r-s"><div className="phone">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/TT1.webp" alt="GeoTapp TimeTracker - Dashboard" loading="eager" fetchPriority="high" />
        </div></div>
        <div className="frame fit r-s d1"><div className="phone">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/TT2.webp" alt="GeoTapp TimeTracker - Menu" loading="lazy" />
        </div></div>
      </div></div></section>

      {/* IL GIRO COMPLETO — parte dall'atto del telefono, che e' questa app:
          il tocco che apre il turno e l'ufficio che se ne accorge da solo. */}
      <section className="sec"><div className="wn">
        <p className="kk k">{vg.kicker}</p>
        <h2 className="r" style={{ fontSize: 'clamp(24px,2.6vw,38px)', margin: '10px 0 24px' }}>{vg.title}</h2>
        <VideoGiro locale={currentLocale} inizio={GIRO_INIZIO_TIMETRACKER} />
        <p style={{ marginTop: 16 }}>
          <Link className="b2" href={getLink('/video')}>{vg.pageLink}</Link>
        </p>
      </div></section>

      {/* STATO PIATTAFORMA */}
      <section className="sec l-note" style={{ paddingBottom: 0 }}>
        <div className="wn">
          <p className="kk k" style={{ color: 'var(--seal-testo)', justifyContent: 'center' }}>{tc.statusLabel}</p>
          <p>{tc.releaseNote}</p>
        </div>
      </section>

      {/* SCARICA */}
      <section className="sec"><div className="wn" style={{ textAlign: 'center' }}>
        <p className="kk k" style={{ color: 'var(--seal-testo)', justifyContent: 'center' }}>{tc.mobileKicker}</p>
        <h2 className="r" style={{ marginTop: 14 }}>
          {tc.downloadTitle}
        </h2>
        <p style={{ marginTop: 16, color: '#475467' }}>
          {tc.downloadSub}
        </p>
        <div className="l-stores" style={{ justifyContent: 'center' }}>
          <a href="https://play.google.com/store/apps/details?id=com.geotapp.timetrackerandroid" target="_blank" rel="noopener noreferrer nofollow" className="l-store">
            <svg viewBox="0 0 24 24" width={28} height={28} aria-hidden="true">
              <path d="M3.18 23.76c.3.17.64.24.99.21l13.1-7.57-2.83-2.83-11.26 10.19z" fill="#EA4335"/>
              <path d="M22.35 10.56l-3.17-1.83-3.18 3.18 3.18 3.18 3.19-1.84a1.83 1.83 0 0 0 0-2.69z" fill="#FBBC04"/>
              <path d="M3.18.24A1.83 1.83 0 0 0 2.3 1.9v20.2c0 .67.37 1.26.88 1.66L14.17 12 3.18.24z" fill="#4285F4"/>
              <path d="M4.17 0 16.1 11.93l-2.83 2.83L3.18.24A1.83 1.83 0 0 1 4.17 0z" fill="#34A853"/>
            </svg>
            <span><span>{availableOn}</span><b>Google Play</b></span>
          </a>
          <a href="https://apps.apple.com/app/id6761460207" target="_blank" rel="noopener noreferrer nofollow" className="l-store">
            <svg viewBox="0 0 24 24" width={28} height={28} fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.19 1.28-2.17 3.81.03 3.02 2.65 4.03 2.68 4.04l-.06.27zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span><span>{availableOn}</span><b>App Store</b></span>
          </a>
        </div>
      </div></section>

      {/* COSA FA DAVVERO TIMETRACKER: griglia funzionalita' */}
      <section className="sec warm"><div className="w">
        <div className="hd">
          <h2 className="r">{tc.doesTitle}</h2>
          <p className="r d1">{tc.doesSub}</p>
        </div>
      </div>
        <div className="mods">
          {trackerHighlights.map((card, i) => (
            <article key={card.title} className={`r d${i + 1}`}>
              <span className="nn">{String(i + 1).padStart(2, '0')}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PIU' DI UNA TIMBRATURA */}
      <section className="sec"><div className="w">
        <div className="mods" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
          {trackerWorkflow.map((block, i) => (
            <article key={block.title} className={`r d${i + 1}`}>
              <span className="nn">{String(i + 1).padStart(2, '0')}</span>
              <h3>{block.title}</h3>
              <p>{block.description}</p>
            </article>
          ))}
        </div>
      </div></section>

      {/* LA PROVA: il report, contenuto vero del dizionario landing */}
      <section className="sec ink"><div className="w"><div className="split">
        <div className="r">
          <p className="kk k">{LA_PROVA[currentLocale] ?? LA_PROVA.en}</p>
          <h2>{dict.landing.report_section_title}</h2>
          <p style={{ color: 'rgba(247,249,252,.72)', marginTop: 20, maxWidth: '48ch' }}>{dict.landing.report_section_body}</p>
          <ul className="rows" style={{ marginTop: 30 }}>
            <li>{dict.landing.report_feature_1}</li>
            <li>{dict.landing.report_feature_2}</li>
            <li>{dict.landing.report_feature_3}</li>
            <li>{dict.landing.report_feature_4}</li>
          </ul>
        </div>
        <div className="r-s d1" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="sheet">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/verifier-report.webp" alt={currentLocale === 'it' ? 'Report sigillato GeoTapp' : currentLocale === 'de' ? 'Versiegelter GeoTapp-Bericht' : currentLocale === 'fr' ? 'Rapport scellé GeoTapp' : currentLocale === 'nl' ? 'Verzegeld GeoTapp-rapport' : currentLocale === 'es' ? 'Informe sellado de GeoTapp' : currentLocale === 'pt' ? 'Relatório selado GeoTapp' : currentLocale === 'da' ? 'Forseglet GeoTapp-rapport' : currentLocale === 'sv' ? 'Förseglad GeoTapp-rapport' : currentLocale === 'nb' ? 'Forseglet GeoTapp-rapport' : 'GeoTapp sealed report'} loading="lazy" />
          </div>
        </div>
      </div></div></section>

      {/* GRIGLIA SISTEMI: 9 moduli, 3 settori, stesso dossier al click */}
      <section className="sec">
        <div className="w">
          <div className="hd">
            <h2 className="r">{appDict.grid_title}</h2>
            <p className="r d1">{appDict.grid_subtitle}</p>
          </div>
        </div>
        {sectorGroups.map(({ key, systems: group }, gi) => (
          <div key={key}>
            <div className="w" style={{ marginTop: gi === 0 ? 0 : 46, marginBottom: 14 }}>
              <p className="kk k" style={{ color: 'var(--seal-testo)' }}>{appDict.sectors[key]}</p>
            </div>
            <div className="mods">
              {group.map((sys, i) => (
                <article key={sys.id} className={`l-mod-click r d${i + 1}`} onClick={() => setSelectedSystem(sys)}>
                  <span className="nn">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{sys.systemName}</h3>
                  <p>{sys.shortDescription}</p>
                  <span className="k" style={{ display: 'inline-block', marginTop: 12, fontSize: 11, color: '#15803D' }}>
                    {(appDict as { label_open?: string }).label_open ?? 'Learn more'} &rarr;
                  </span>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CHIUSURA */}
      <section className="end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/bg2.webp" alt="" aria-hidden="true" loading="lazy" />
        <div className="ov" />
        <div className="w">
          <h2 className="r">{appDict.cta_title}</h2>
          <div className="acts r d2">
            <Link className="b1" href={getLink('/trial')} onClick={() => trackEvent('trial_click', { cta_source: 'product_timetracker_end', cta_locale: currentLocale })}>
              <Clock size={20} style={{ display: 'inline', verticalAlign: '-4px', marginRight: 8 }} />{trialLabel}
            </Link>
            <Link className="b2" href={getLink('/pricing')}>
              <Smartphone size={18} style={{ display: 'inline', verticalAlign: '-3px', marginRight: 6 }} />{appDict.cta_button}
            </Link>
          </div>
        </div>
      </section>

      {/* ── citati su: solo stampa vera. "Presente su" (directory) resta nel footer, non si ripete qui ── */}
      <section className="dirs">
        <div className="w"><p className="kk k r dirs-kk">{featuredLabel(currentLocale)}</p></div>
        <div className="host">
          <FeaturedIn locale={currentLocale} />
        </div>
      </section>
    </div>
  );
}

// Product app page note: keep systems catalog ids stable for UI and analytics (1/2)

// Product app page note: keep systems catalog ids stable for UI and analytics (2/2)
