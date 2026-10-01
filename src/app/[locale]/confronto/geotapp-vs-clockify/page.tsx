import type { Metadata } from 'next';
import ComparisonPageL from '@/components/ComparisonPageL';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-clockify/';
const ARTICLE_DATE_PUBLISHED = '2025-09-01';
const ARTICLE_DATE_MODIFIED = '2026-08-01';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs Clockify - Confronto 2026 | GeoTapp', description: 'GeoTapp vs Clockify: differenze chiave per aziende con operatori sul campo. Clockify traccia le ore; GeoTapp sigilla ogni intervento con posizione, ora, foto e report in cui ogni modifica successiva è rilevabile.' },
  en: { title: 'GeoTapp vs Clockify - Comparison 2026 | GeoTapp', description: 'GeoTapp vs Clockify: key differences for field service companies. Clockify tracks hours; GeoTapp seals every job with location, time, photos and a report in which every later change is detectable.' },
  de: { title: 'GeoTapp vs Clockify - Vergleich 2026 | GeoTapp', description: 'GeoTapp vs Clockify: die wichtigsten Unterschiede für Betriebe mit Mitarbeitern im Außendienst. Clockify erfasst Arbeitszeiten; GeoTapp versiegelt jeden Einsatz mit Position, Uhrzeit, Fotos und einem Bericht, in dem jede spätere Änderung erkennbar ist.' },
  nl: { title: 'GeoTapp vs Clockify - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Clockify: Clockify houdt de uren bij; GeoTapp verzegelt elke klus met locatie, tijd, foto\'s en een rapport waarin elke wijziging zichtbaar is.' },
  fr: { title: 'GeoTapp vs Clockify - Comparatif 2026 | GeoTapp', description: 'GeoTapp vs Clockify : Clockify suit les heures ; GeoTapp scelle chaque intervention avec position, heure, photos et rapport où toute modification se voit.' },
  es: { title: 'GeoTapp vs Clockify - Comparativa 2026 | GeoTapp', description: 'GeoTapp vs Clockify: diferencias clave para empresas con operarios en campo. Clockify registra las horas; GeoTapp sella cada intervención con posición, hora, foto e informe en el que cualquier modificación posterior es detectable.' },
  pt: { title: 'GeoTapp vs Clockify - Comparação 2026 | GeoTapp', description: 'GeoTapp vs Clockify: a Clockify regista as horas; a GeoTapp sela cada intervenção com posição, hora, fotos e um relatório em que qualquer alteração é detetável.' },
  da: { title: 'GeoTapp vs Clockify - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Clockify: Clockify registrerer timer. GeoTapp forsegler hver opgave med position, tid, fotos og en rapport, hvor enhver ændring kan opdages.' },
  sv: { title: 'GeoTapp vs Clockify - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs Clockify: de viktigaste skillnaderna för fältserviceföretag. Clockify registrerar timmar; GeoTapp förseglar varje uppdrag med plats, tid, foton och en rapport där varje senare ändring går att upptäcka.' },
  nb: { title: 'GeoTapp vs Clockify - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Clockify: viktige forskjeller for bedrifter med feltarbeidere. Clockify registrerer timer; GeoTapp forsegler hvert oppdrag med verifisert GPS, bilder og rapporter hvor enhver endring er sporbar.' },
  ru: { title: 'GeoTapp vs Clockify, Сравнение 2026 | GeoTapp', description: 'GeoTapp vs Clockify: ключевые различия для компаний с выездными работниками. Clockify учитывает часы; GeoTapp запечатывает каждое задание с проверенным GPS, фото и отчётами, в которых любое изменение заметно.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza principale tra GeoTapp e Clockify?', a: 'Clockify è un time tracker: registra le ore lavorate manualmente o con timer. GeoTapp è un sistema di prova verificabile degli interventi: genera automaticamente report sigillati con posizione, ora e foto, prove che il cliente può controllare in autonomia.' },
    { q: 'Clockify ha il tracciamento GPS per i lavoratori sul campo?', a: 'Clockify nasce per registrare il tempo, e la posizione non entra in un report sigillato. GeoTapp registra la posizione quando l\'operatore timbra (entrata, pause, uscita) e la chiude nel report dell\'intervento, dove ogni modifica successiva è rilevabile.' },
    { q: 'GeoTapp o Clockify per chi fa interventi su commessa?', a: 'Clockify è adatto a team remoti che fatturano a ore. GeoTapp è progettato per chi deve dimostrare dove e quando ha lavorato: imprese di pulizie, manutentori, installatori. Se hai clienti che contestano, GeoTapp ti dà un report sigillato da mostrare.' },
    { q: 'Clockify è gratuito. Vale la pena pagare GeoTapp?', a: 'Il piano gratuito di Clockify ha senso per freelance e team di ufficio. Per aziende con operatori sul campo, il valore di GeoTapp sta nella prova: quando un cliente contesta, hai un report sigillato da mostrare invece di una parola contro l\'altra.' },
  ],
  en: [
    { q: 'What is the main difference between GeoTapp and Clockify?', a: 'Clockify is a time tracker: it records hours worked manually or with a timer. GeoTapp is a system for verifiable proof of jobs: it automatically generates sealed reports with location, time and photos, proof that the client can check independently.' },
    { q: 'Does Clockify have GPS tracking for field workers?', a: 'Clockify was built to record time, and location does not go into a sealed report. GeoTapp records the position when the operator clocks in (start, breaks, finish) and closes it in the job report, where every later change is detectable.' },
    { q: 'GeoTapp or Clockify for job-based field work?', a: 'Clockify suits remote teams billing by the hour. GeoTapp is designed for those who must prove where and when they worked: cleaning companies, maintenance crews, installers. If clients dispute your work, GeoTapp gives you a sealed report to show.' },
    { q: 'Clockify is free. Is GeoTapp worth paying for?', a: 'Clockify\'s free plan makes sense for freelancers and office teams. For companies with field operators, the value of GeoTapp lies in the proof: when a client disputes a job, you have a sealed report to show instead of one word against another.' },
  ],
  de: [
    { q: 'Was ist der Hauptunterschied zwischen GeoTapp und Clockify?', a: 'Clockify ist ein Zeiterfasser: Es erfasst die Arbeitsstunden manuell oder per Timer. GeoTapp ist ein System für überprüfbare Einsatznachweise: Es erstellt automatisch versiegelte Berichte mit Position, Uhrzeit und Fotos, die der Kunde selbstständig prüfen kann.' },
    { q: 'Hat Clockify GPS-Erfassung für Mitarbeiter im Außendienst?', a: 'Clockify ist zum Erfassen von Zeit gedacht, die Position landet nicht in einem versiegelten Bericht. GeoTapp erfasst die Position, wenn der Mitarbeiter stempelt (Beginn, Pausen, Ende), und nimmt sie in den Einsatzbericht auf, in dem jede spätere Änderung erkennbar ist.' },
    { q: 'GeoTapp oder Clockify für Einsätze auf Auftragsbasis?', a: 'Clockify passt zu Remote-Teams, die nach Stunden abrechnen. GeoTapp ist für alle gedacht, die belegen müssen, wo und wann sie gearbeitet haben: Reinigungsfirmen, Wartungsbetriebe, Installateure. Wenn Kunden Leistungen bestreiten, haben Sie mit GeoTapp einen versiegelten Bericht zum Vorzeigen.' },
    { q: 'Clockify ist kostenlos. Lohnt sich GeoTapp?', a: 'Der kostenlose Tarif von Clockify passt für Freelancer und Büroteams. Für Betriebe mit Mitarbeitern im Außendienst liegt der Wert von GeoTapp im Nachweis: Wenn ein Kunde etwas bestreitet, haben Sie einen versiegelten Bericht statt Aussage gegen Aussage.' },
  ],
  fr: [
    { q: 'Quelle est la différence principale entre GeoTapp et Clockify ?', a: 'Clockify est un outil de suivi du temps : il enregistre les heures travaillées, à la main ou avec un minuteur. GeoTapp est un système de preuve vérifiable des interventions : il génère automatiquement des rapports scellés avec position, heure et photos, des preuves que le client peut contrôler en toute autonomie.' },
    { q: 'Clockify propose-t-il le suivi GPS pour les travailleurs de terrain ?', a: 'Clockify est conçu pour enregistrer le temps, et la position n\'entre pas dans un rapport scellé. GeoTapp enregistre la position quand l\'opérateur pointe (arrivée, pauses, départ) et la clôt dans le rapport de l\'intervention, où toute modification ultérieure est détectable.' },
    { q: 'GeoTapp ou Clockify pour les interventions sur chantier ?', a: 'Clockify convient aux équipes à distance qui facturent à l\'heure. GeoTapp est conçu pour ceux qui doivent démontrer où et quand ils ont travaillé : entreprises de nettoyage, techniciens de maintenance, installateurs. Si des clients contestent, GeoTapp vous donne un rapport scellé à présenter.' },
    { q: 'Clockify est gratuit. GeoTapp vaut-il le coup ?', a: 'L\'offre gratuite de Clockify a du sens pour les freelances et les équipes de bureau. Pour les entreprises avec des opérateurs sur le terrain, la valeur de GeoTapp tient à la preuve : quand un client conteste, vous avez un rapport scellé à montrer plutôt que la parole de l\'un contre celle de l\'autre.' },
  ],
  es: [
    { q: '¿Cuál es la diferencia principal entre GeoTapp y Clockify?', a: 'Clockify es un registro de tiempo: anota las horas trabajadas de forma manual o con cronómetro. GeoTapp es un sistema de prueba verificable de las intervenciones: genera automáticamente informes sellados con posición, hora y fotos, pruebas que el cliente puede comprobar por su cuenta.' },
    { q: '¿Tiene Clockify seguimiento GPS para los trabajadores en campo?', a: 'Clockify nace para registrar el tiempo, y la posición no entra en un informe sellado. GeoTapp registra la posición cuando el operario ficha (entrada, pausas, salida) y la cierra en el informe de la intervención, donde cualquier modificación posterior es detectable.' },
    { q: '¿GeoTapp o Clockify para quien hace intervenciones por encargo?', a: 'Clockify es adecuado para equipos remotos que facturan por horas. GeoTapp está pensado para quien tiene que demostrar dónde y cuándo ha trabajado: empresas de limpieza, mantenimiento, instaladores. Si tienes clientes que discuten el servicio, GeoTapp te da un informe sellado que mostrar.' },
    { q: 'Clockify es gratuito. ¿Merece la pena pagar GeoTapp?', a: 'El plan gratuito de Clockify tiene sentido para autónomos y equipos de oficina. Para empresas con operarios en campo, el valor de GeoTapp está en la prueba: cuando un cliente discute, tienes un informe sellado que mostrar en lugar de una palabra contra otra.' },
  ],
  pt: [
    { q: 'Qual é a diferença principal entre a GeoTapp e a Clockify?', a: 'A Clockify é um registo de tempo: anota as horas trabalhadas manualmente ou com cronómetro. A GeoTapp é um sistema de prova verificável das intervenções: gera automaticamente relatórios selados com posição, hora e fotos, provas que o cliente pode controlar por si.' },
    { q: 'A Clockify tem seguimento por GPS para os trabalhadores no terreno?', a: 'A Clockify nasceu para registar o tempo, e a posição não entra num relatório selado. A GeoTapp regista a posição quando o operador pica o ponto (entrada, pausas, saída) e fecha-a no relatório da intervenção, onde qualquer alteração posterior é detetável.' },
    { q: 'GeoTapp ou Clockify para quem faz intervenções por encomenda?', a: 'A Clockify é adequada para equipas remotas que faturam à hora. A GeoTapp foi pensada para quem tem de demonstrar onde e quando trabalhou: empresas de limpeza, técnicos de manutenção, instaladores. Se tem clientes que contestam, a GeoTapp dá-lhe um relatório selado para mostrar.' },
    { q: 'A Clockify é gratuita. Vale a pena pagar a GeoTapp?', a: 'O plano gratuito da Clockify faz sentido para freelancers e equipas de escritório. Para empresas com operadores no terreno, o valor da GeoTapp está na prova: quando um cliente contesta, tem um relatório selado para mostrar, em vez de uma palavra contra a outra.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Clockify?', a: 'Clockify is een tijdregistratietool: het legt de gewerkte uren handmatig of met een timer vast. GeoTapp is een systeem voor controleerbaar bewijs van klussen: het maakt automatisch verzegelde rapporten met locatie, tijd en foto\'s, bewijs dat de klant zelfstandig kan controleren.' },
    { q: 'Heeft Clockify gps-tracking voor medewerkers in het veld?', a: 'Clockify is gemaakt om tijd vast te leggen, en de locatie komt niet in een verzegeld rapport. GeoTapp legt de locatie vast wanneer de medewerker registreert (aankomst, pauzes, vertrek) en sluit die af in het rapport van de klus, waarin elke latere wijziging zichtbaar is.' },
    { q: 'GeoTapp of Clockify voor wie klussen per opdracht uitvoert?', a: 'Clockify past bij teams op afstand die per uur factureren. GeoTapp is ontworpen voor wie moet aantonen waar en wanneer er is gewerkt: schoonmaakbedrijven, onderhoudsmonteurs, installateurs. Hebt u klanten die iets betwisten, dan geeft GeoTapp u een verzegeld rapport om te tonen.' },
    { q: 'Clockify is gratis. Is het de moeite waard om voor GeoTapp te betalen?', a: 'Het gratis abonnement van Clockify is zinvol voor zelfstandigen en kantoorteams. Voor bedrijven met medewerkers in het veld zit de waarde van GeoTapp in het bewijs: wanneer een klant iets betwist, hebt u een verzegeld rapport om te tonen in plaats van woord tegen woord.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Clockify?', a: 'Clockify er et værktøj til tidsregistrering: det registrerer de arbejdede timer manuelt eller med timer. GeoTapp er et system til verificerbar dokumentation af opgaver: det laver automatisk forseglede rapporter med position, tid og fotos, som kunden selv kan kontrollere.' },
    { q: 'Har Clockify GPS-sporing til medarbejdere i marken?', a: 'Clockify er lavet til at registrere tid, og positionen indgår ikke i en forseglet rapport. GeoTapp registrerer positionen, når medarbejderen stempler (ind, pauser, ud), og lukker den i opgavens rapport, hvor enhver senere ændring kan opdages.' },
    { q: 'GeoTapp eller Clockify, hvis du udfører opgaver hos kunder?', a: 'Clockify passer til fjernteams, der fakturerer pr. time. GeoTapp er lavet til dem, der skal dokumentere, hvor og hvornår de har arbejdet: rengøringsfirmaer, servicefolk, installatører. Hvis du har kunder, der bestrider arbejdet, giver GeoTapp dig en forseglet rapport at vise.' },
    { q: 'Clockify er gratis. Kan det betale sig at betale for GeoTapp?', a: 'Clockifys gratis plan giver mening for freelancere og kontorteams. For virksomheder med medarbejdere i marken ligger GeoTapps værdi i dokumentationen: når en kunde bestrider arbejdet, har du en forseglet rapport at vise i stedet for ord mod ord.' },
  ],
  sv: [
    { q: 'Vad är den största skillnaden mellan GeoTapp och Clockify?', a: 'Clockify är en tidrapporterare: den registrerar arbetade timmar manuellt eller med en timer. GeoTapp är ett system för verifierbara bevis på uppdrag: den skapar automatiskt förseglade rapporter med plats, tid och foton, ett bevis som kunden kan kontrollera oberoende.' },
    { q: 'Har Clockify GPS-spårning för fältpersonal?', a: 'Clockify är byggt för att registrera tid, och platsen hamnar inte i en förseglad rapport. GeoTapp registrerar positionen när medarbetaren stämplar in (start, raster, slut) och avslutar den i uppdragsrapporten, där varje senare ändring går att upptäcka.' },
    { q: 'GeoTapp eller Clockify för uppdragsbaserat fältarbete?', a: 'Clockify passar distansteam som fakturerar per timme. GeoTapp är gjord för dem som måste bevisa var och när de arbetat: städföretag, underhållsteam, installatörer. Om kunder ifrågasätter ditt arbete ger GeoTapp dig en förseglad rapport att visa upp.' },
    { q: 'Clockify är gratis. Är GeoTapp värt att betala för?', a: 'Clockifys gratisplan passar frilansare och kontorsteam. För företag med fältpersonal ligger värdet i GeoTapp i beviset: när en kund ifrågasätter ett uppdrag har du en förseglad rapport att visa upp i stället för ord mot ord.' },
  ],
  nb: [
    { q: 'Hva er hovedforskjellen mellom GeoTapp og Clockify?', a: 'Clockify er en tidsregistrering: registrerer arbeidstimer manuelt eller med en timer. GeoTapp er et system for forseglet oppdragsbevis: genererer automatisk forseglede rapporter med verifisert GPS, bilder og digital signatur, bevis kunden kan kontrollere selv.' },
    { q: 'Har Clockify GPS-sporing for feltarbeidere?', a: 'Clockify har ikke et verifisert GPS-system for feltarbeidere. Posisjonen er ikke en del av rapporten og er ikke kryptografisk forseglet. GeoTapp registrerer GPS-posisjonen ved åpning og lukking av hvert oppdrag, inkludert i rapporten hvor enhver endring er sporbar.' },
    { q: 'GeoTapp eller Clockify for oppdragsbasert feltarbeid?', a: 'Clockify passer for fjernteam som fakturerer per time. GeoTapp er laget for dem som må bevise hvor og når de har jobbet, renholdsbedrifter, vedlikeholdsteam, montører. Hvis kunder klager, leverer GeoTapp beviset; Clockify gjør det ikke.' },
    { q: 'Clockify er gratis. Er GeoTapp verdt å betale for?', a: 'Clockify gratis gir mening for frilansere og kontorteam. For bedrifter med feltarbeidere ligger verdien av GeoTapp i forsvarlige bevis: en kontrakt reddet takket være en verifiserbar rapport er verdt mange ganger månedsabonnementet.' },
  ],
  ru: [
    { q: 'В чём главное различие между GeoTapp и Clockify?', a: 'Clockify, это трекер времени: фиксирует отработанные часы вручную или таймером. GeoTapp, это система опечатывания заданий: автоматически создаёт опечатанные отчёты с проверенным GPS, фото и цифровой подписью, доказательства, которые клиент может проверить самостоятельно.' },
    { q: 'Есть ли в Clockify GPS-отслеживание для выездных работников?', a: 'В Clockify нет проверенной GPS-системы для выездных работников. Местоположение не входит в отчёт и не опечатано криптографически. GeoTapp фиксирует GPS-позицию при открытии и закрытии каждого задания, включая её в отчёт, в котором любое изменение заметно.' },
    { q: 'GeoTapp или Clockify для тех, кто выполняет работы по заказу?', a: 'Clockify подходит удалённым командам, выставляющим счёт по часам. GeoTapp создан для тех, кто должен доказать, где и когда работал, клининговые компании, ремонтники, монтажники. Если клиенты оспаривают, GeoTapp предоставляет доказательства; Clockify, нет.' },
    { q: 'Clockify бесплатен. Стоит ли платить за GeoTapp?', a: 'Бесплатный Clockify имеет смысл для фрилансеров и офисных команд. Для компаний с выездными работниками ценность GeoTapp, в защитимых доказательствах: контракт, спасённый благодаря проверяемому отчёту, стоит во много раз больше месячной подписки.' },
  ],
};

// Etichette della tabella di confronto, per locale.
const ROWS_LABELS: Record<string, string[]> = {
  it: ['Posizione registrata e controllata a ogni timbratura','Report sigillato crittograficamente','Prove fotografiche collegate a GPS e timestamp','Verifica indipendente da parte del cliente','Tracciamento ore','App mobile Android/iOS','Messaggistica interna proprietaria','Export presenze/paghe','Piano gratuito','Gestione commesse multi-sito','Posizione rilevata solo quando si timbra, mai in continuo','Informativa GPS firmata nell\'app prima di timbrare*'],
  en: ['Position recorded and checked at every clock-in','Cryptographically sealed report','Photo evidence linked to GPS and timestamp','Independent verification by the client','Time tracking','Mobile app Android/iOS','Built-in messaging','Payroll/attendance export','Free plan','Multi-site job management','Position recorded only at clock-in, never continuously','GPS notice signed in the app before clocking in*'],
  de: ['Position bei jedem Stempeln erfasst und geprüft','Kryptographisch versiegelter Bericht','Fotonachweise mit GPS und Zeitstempel verknüpft','Unabhängige Überprüfung durch den Kunden','Zeiterfassung','Mobile App Android/iOS','Eigene interne Nachrichten','Export von Anwesenheit/Lohndaten','Kostenloser Tarif','Verwaltung mehrerer Standorte','Position nur beim Stempeln erfasst, nie durchgehend','GPS-Information vor dem Stempeln in der App unterschrieben*'],
  fr: ['Position enregistrée et contrôlée à chaque pointage','Rapport scellé cryptographiquement','Preuves photo liées au GPS et à l\'horodatage','Vérification indépendante par le client','Suivi des heures','App mobile Android/iOS','Messagerie interne propriétaire','Export présences/paie','Offre gratuite','Gestion de chantiers multi-sites','Position relevée uniquement au pointage, jamais en continu','Information GPS signée dans l\'app avant de pointer*'],
  es: ['Posición registrada y comprobada en cada fichaje','Informe sellado criptográficamente','Pruebas fotográficas vinculadas a GPS y marca de tiempo','Verificación independiente por parte del cliente','Registro de horas','App móvil Android/iOS','Mensajería interna propia','Exportación de fichajes/nóminas','Plan gratuito','Gestión de encargos multisede','Posición registrada solo al fichar, nunca de forma continua','Información sobre el GPS firmada en la app antes de fichar*'],
  pt: ['Posição registada e controlada em cada picagem','Relatório selado criptograficamente','Provas fotográficas ligadas ao GPS e à data/hora','Verificação independente por parte do cliente','Registo de horas','App móvel Android/iOS','Mensagens internas próprias','Exportação de presenças/salários','Plano gratuito','Gestão de obras em vários locais','Posição registada apenas ao picar o ponto, nunca de forma contínua','Informação sobre o GPS assinada na app antes de picar o ponto*'],
  nl: ['Locatie vastgelegd en gecontroleerd bij elke registratie','Cryptografisch verzegeld rapport','Fotobewijzen gekoppeld aan gps en tijdstempel','Onafhankelijke controle door de klant','Bijhouden van uren','Mobiele app voor Android/iOS','Eigen interne berichten','Export van aanwezigheid/salarissen','Gratis abonnement','Opdrachtenbeheer voor meerdere locaties','Locatie alleen bij het registreren, nooit doorlopend','GPS-verklaring ondertekend in de app vóór het registreren*'],
  da: ['Position registreret og kontrolleret ved hver stempling','Kryptografisk forseglet rapport','Bevisfotos knyttet til GPS og tidsstempel','Uafhængig verificering af kunden','Timeregistrering','Mobilapp Android/iOS','Egen intern beskedfunktion','Eksport af fremmøde/løn','Gratis plan','Styring af opgaver på flere lokationer','Position registreres kun ved stempling, aldrig løbende','GPS-information underskrevet i appen, før man stempler*'],
  sv: ['Positionen registreras och kontrolleras vid varje instämpling','Kryptografiskt förseglad rapport','Bevisfoton kopplade till GPS och tidsstämpel','Oberoende verifiering av kunden','Tidrapportering','Mobilapp för Android/iOS','Inbyggd meddelandefunktion','Export av närvaro/lön','Gratisplan','Hantering av uppdrag på flera platser','Positionen registreras bara vid instämpling, aldrig löpande','GPS-information signerad i appen innan man stämplar in*'],
  nb: ['GPS verifisert på oppdragsstedet','Kryptografisk forseglet rapport','Fotobevis koblet til GPS og tidsstempel','Uavhengig verifisering av kunden','Tidsregistrering','Mobilapp Android/iOS','Innebygd meldingsfunksjon','Eksport av lønn/oppmøte','Gratis plan','Styring av oppdrag på flere steder','GDPR-kompatibel geolokalisering','Automatisk GPS-personvernerklæring med digital signatur*'],
  ru: ['GPS проверен на месте задания','Криптографически опечатанный отчёт','Фотодоказательства, привязанные к GPS и метке времени','Независимая проверка заказчиком','Учёт часов','Мобильное приложение Android/iOS','Встроенный обмен сообщениями','Экспорт зарплат/присутствия','Бесплатный тариф','Управление заданиями на нескольких объектах','Геолокация в соответствии с GDPR','Автоматическое уведомление о GPS с цифровой подписью*'],
};

const ROWS_GEO =   [true, true, true, true, true, true, true, true, false, true, true, true];
const ROWS_COMP =  [false, false, false, false, true, true, false, true, true, false, false, false];

type Copy = {
  badge: string; h1sub: string; desc: string; summary: string; summaryText: string;
  footnote: string; diff: string; geo: string[]; comp: string[];
  features: string; feat: string;
  useCasesTitle: string; useCases: string[];
  cta: string; ctaDesc: string; ctaBtn: string;
};

const T: Record<string, Copy> = {
  it: {
    badge: 'Confronto App', h1sub: 'tracciare le ore o sigillare gli interventi?',
    desc: 'Clockify registra il tempo. GeoTapp produce prove verificabili del lavoro svolto. Per chi lavora sul campo, la differenza cambia tutto.',
    summary: 'In sintesi:',
    summaryText: 'Clockify è eccellente per freelance e team di ufficio che tracciano ore per la fatturazione. Per operatori sul campo che devono dimostrare il lavoro svolto a un committente, GeoTapp produce report sigillati con posizione, ora e foto: funzioni che Clockify non ha.',
    footnote: '* Per legge (art. 13 GDPR e, in Italia, art. 4 dello Statuto dei Lavoratori) ogni dipendente va informato prima di essere geolocalizzato. Se il software lascia questo passaggio al titolare, il rischio resta a lui. GeoTapp prepara l\'informativa personalizzata, la fa firmare per presa visione nell\'app e non lascia timbrare finché non è firmata.',
    features: 'Confronto funzionalità chiave', feat: 'Funzionalità',
    diff: 'Registrare il tempo o provare il lavoro',
    geo: ['Posizione rilevata dal telefono a ogni timbratura, non inserita a mano','Report sigillati con hash crittografico al momento della chiusura','Prove fotografiche integrate con GPS e timestamp','Il committente verifica da solo che il report non sia stato modificato','Progettato per operatori sul campo, non per l\'ufficio'],
    comp: ['Ottimo per registrare il tempo e fatturare a ore','Nessuna posizione sigillata nel report','Nessuna prova fotografica collegata all\'intervento','I dati non sono verificabili da terzi','Piano gratuito disponibile (ideale per freelance)'],
    useCasesTitle: 'Chi dovrebbe scegliere GeoTapp invece di Clockify',
    useCases: ['Imprese di pulizie e facility management con clienti esigenti','Manutentori e installatori che devono documentare le ore fatturate','Aziende soggette a ispezioni del lavoro o a verifiche del committente','Chi ha già avuto contestazioni su interventi non riconosciuti','Aziende con più squadre distribuite su cantieri diversi'],
    cta: 'Vuoi vedere la differenza in pratica?',
    ctaDesc: 'Provalo su un intervento vero: 14 giorni gratis, senza carta di credito.',
    ctaBtn: 'Inizia la prova gratuita',
  },
  en: {
    badge: 'App Comparison', h1sub: 'track hours or seal jobs?',
    desc: 'Clockify records time. GeoTapp produces verifiable proof of completed work. For field workers, the difference changes everything.',
    summary: 'Bottom line:',
    summaryText: 'Clockify excels for freelancers and office teams tracking hours for billing. For field operators who need to prove completed work to a client, GeoTapp produces sealed reports with location, time and photos: features Clockify does not have.',
    footnote: '* By law (Art. 13 GDPR and, in Italy, Art. 4 of the Workers\' Statute), every employee must be informed before being geolocated. If the software leaves this step to the employer, the risk stays with them. GeoTapp prepares the personalised notice, has it signed for acknowledgement in the app and does not let staff clock in until it is signed.',
    features: 'Key features comparison', feat: 'Feature',
    diff: 'Recording time or proving the work',
    geo: ['Position taken from the phone at every clock-in, not entered by hand','Reports sealed with a cryptographic hash when the job is closed','Photo evidence integrated with GPS and timestamp','The client checks alone that the report has not been modified','Designed for field operators, not the office'],
    comp: ['Great for recording time and billing by the hour','No location sealed into the report','No photo evidence linked to the job','Data cannot be verified by third parties','Free plan available (ideal for freelancers)'],
    useCasesTitle: 'Who should choose GeoTapp over Clockify',
    useCases: ['Cleaning and facility management companies with demanding clients','Maintenance and installation crews who need to defend billed hours','Companies subject to labour inspections or checks by the client','Anyone who has already faced disputes over jobs the client did not recognise','Companies with multiple crews on different sites'],
    cta: 'Want to see the difference in practice?',
    ctaDesc: 'Try it on a real job: 14 days free, no credit card.',
    ctaBtn: 'Start the free trial',
  },
  de: {
    badge: 'App-Vergleich', h1sub: 'Stunden erfassen oder Einsätze versiegeln?',
    desc: 'Clockify erfasst Zeit. GeoTapp erstellt überprüfbare Nachweise der geleisteten Arbeit. Für alle im Außendienst ändert das alles.',
    summary: 'Kurz gesagt:',
    summaryText: 'Clockify ist hervorragend für Freelancer und Büroteams, die Stunden für die Abrechnung erfassen. Für Mitarbeiter im Außendienst, die einem Auftraggeber ihre Arbeit belegen müssen, erstellt GeoTapp versiegelte Berichte mit Position, Uhrzeit und Fotos: Funktionen, die Clockify nicht hat.',
    footnote: '* Nach geltendem Recht (Art. 13 DSGVO und in Italien Art. 4 des Arbeitnehmerstatuts) muss jeder Mitarbeiter informiert werden, bevor er geortet wird. Überlässt die Software diesen Schritt dem Arbeitgeber, bleibt das Risiko bei ihm. GeoTapp erstellt die personalisierte Information, lässt sie in der App zur Kenntnisnahme unterschreiben und lässt erst danach das Stempeln zu.',
    features: 'Vergleich der wichtigsten Funktionen', feat: 'Funktion',
    diff: 'Zeit erfassen oder Arbeit nachweisen',
    geo: ['Position beim Stempeln vom Telefon erfasst, nicht von Hand eingetragen','Berichte beim Abschluss mit kryptographischem Hash versiegelt','Fotonachweise mit GPS und Zeitstempel integriert','Der Auftraggeber prüft selbst, dass der Bericht nicht verändert wurde','Für Mitarbeiter im Außendienst gebaut, nicht fürs Büro'],
    comp: ['Sehr gut zum Erfassen von Zeit und zur Abrechnung nach Stunden','Keine versiegelte Position im Bericht','Kein Fotonachweis, der mit dem Einsatz verknüpft ist','Die Daten sind für Dritte nicht überprüfbar','Kostenloser Tarif verfügbar (ideal für Freelancer)'],
    useCasesTitle: 'Wer GeoTapp statt Clockify wählen sollte',
    useCases: ['Reinigungsfirmen und Facility-Management mit anspruchsvollen Kunden','Wartungsbetriebe und Installateure, die abgerechnete Stunden dokumentieren müssen','Betriebe, die Kontrollen oder Prüfungen durch den Auftraggeber ausgesetzt sind','Wer schon Streit über nicht anerkannte Einsätze hatte','Betriebe mit mehreren Teams auf verschiedenen Baustellen'],
    cta: 'Möchten Sie den Unterschied in der Praxis sehen?',
    ctaDesc: 'Testen Sie es an einem echten Einsatz: 14 Tage kostenlos, keine Kreditkarte.',
    ctaBtn: 'Kostenlos testen',
  },
  fr: {
    badge: 'Comparatif d\'applis',
    h1sub: 'suivre les heures ou sceller les interventions ?',
    desc: 'Clockify enregistre le temps. GeoTapp produit des preuves vérifiables du travail effectué. Pour qui travaille sur le terrain, la différence change tout.',
    summary: 'En résumé :',
    summaryText: 'Clockify est excellent pour les freelances et les équipes de bureau qui suivent leurs heures pour la facturation. Pour les opérateurs de terrain qui doivent démontrer le travail effectué à un client, GeoTapp produit des rapports scellés avec position, heure et photos : des fonctionnalités que Clockify n\'a pas.',
    footnote: '* Selon la loi (art. 13 du RGPD et, en Italie, art. 4 du Statut des travailleurs), chaque salarié doit être informé avant d\'être géolocalisé. Si le logiciel laisse cette étape à l\'employeur, le risque lui reste. GeoTapp prépare l\'information personnalisée, la fait signer pour prise de connaissance dans l\'app et ne laisse pas pointer tant qu\'elle n\'est pas signée.',
    features: 'Comparaison des fonctionnalités clés',
    feat: 'Fonctionnalité',
    diff: 'Enregistrer le temps ou prouver le travail',
    geo: ['Position relevée par le téléphone à chaque pointage, jamais saisie à la main','Rapports scellés par une empreinte cryptographique à la clôture','Preuves photo intégrées avec GPS et horodatage','Le client vérifie lui-même que le rapport n\'a pas été modifié','Conçu pour les opérateurs de terrain, pas pour le bureau'],
    comp: ['Excellent pour enregistrer le temps et facturer à l\'heure','Aucune position scellée dans le rapport','Aucune preuve photo liée à l\'intervention','Les données ne sont pas vérifiables par un tiers','Offre gratuite disponible (idéale pour les freelances)'],
    useCasesTitle: 'Qui devrait choisir GeoTapp plutôt que Clockify',
    useCases: ['Entreprises de nettoyage et de facility management avec des clients exigeants','Techniciens de maintenance et installateurs qui doivent documenter les heures facturées','Entreprises soumises à des inspections du travail ou à des contrôles de leurs clients','Ceux qui ont déjà eu des contestations sur des interventions non reconnues','Entreprises avec plusieurs équipes réparties sur différents chantiers'],
    cta: 'Envie de voir la différence en pratique ?',
    ctaDesc: 'Essayez-le sur une intervention réelle : 14 jours gratuits, sans carte bancaire.',
    ctaBtn: 'Commencer l\'essai gratuit',
  },
  es: {
    badge: 'Comparativa de apps', h1sub: '¿registrar las horas o sellar las intervenciones?',
    desc: 'Clockify registra el tiempo. GeoTapp produce pruebas verificables del trabajo realizado. Para quien trabaja en campo, la diferencia lo cambia todo.',
    summary: 'En resumen:',
    summaryText: 'Clockify es excelente para autónomos y equipos de oficina que registran horas para facturar. Para operarios en campo que deben demostrar el trabajo realizado a un cliente, GeoTapp produce informes sellados con posición, hora y fotos: funciones que Clockify no tiene.',
    footnote: '* Por ley (art. 13 del RGPD y, en Italia, art. 4 del Estatuto de los Trabajadores), cada empleado debe ser informado antes de ser geolocalizado. Si el software deja este paso en manos del empleador, el riesgo sigue siendo suyo. GeoTapp prepara la información personalizada, la hace firmar en la app como constancia de lectura y no deja fichar hasta que esté firmada.',
    features: 'Comparación de funciones clave', feat: 'Función',
    diff: 'Registrar el tiempo o probar el trabajo',
    geo: ['Posición tomada del teléfono en cada fichaje, no introducida a mano','Informes sellados con hash criptográfico en el momento del cierre','Pruebas fotográficas integradas con GPS y marca de tiempo','El cliente verifica por sí mismo que el informe no se ha modificado','Pensado para operarios en campo, no para la oficina'],
    comp: ['Excelente para registrar el tiempo y facturar por horas','Ninguna posición sellada en el informe','Ninguna prueba fotográfica vinculada a la intervención','Los datos no son verificables por terceros','Plan gratuito disponible (ideal para autónomos)'],
    useCasesTitle: 'Quién debería elegir GeoTapp en lugar de Clockify',
    useCases: ['Empresas de limpieza y facility management con clientes exigentes','Técnicos de mantenimiento e instaladores que deben documentar las horas facturadas','Empresas sujetas a inspecciones de trabajo o a comprobaciones del cliente','Quien ya ha tenido discusiones por intervenciones no reconocidas','Empresas con varios equipos repartidos en obras distintas'],
    cta: '¿Quieres ver la diferencia en la práctica?',
    ctaDesc: 'Pruébalo en una intervención real: 14 días gratis, sin tarjeta de crédito.',
    ctaBtn: 'Empezar prueba gratuita',
  },
  pt: {
    badge: 'Comparação de apps', h1sub: 'registar as horas ou selar as intervenções?',
    desc: 'A Clockify regista o tempo. A GeoTapp produz provas verificáveis do trabalho realizado. Para quem trabalha no terreno, a diferença muda tudo.',
    summary: 'Em resumo:',
    summaryText: 'A Clockify é excelente para freelancers e equipas de escritório que registam horas para faturar. Para operadores no terreno que têm de demonstrar o trabalho realizado a um cliente, a GeoTapp produz relatórios selados com posição, hora e fotos: funcionalidades que a Clockify não tem.',
    footnote: '* Por lei (art. 13.º do RGPD), cada trabalhador deve ser informado antes de ser geolocalizado. Se o software deixa este passo ao empregador, o risco continua a ser dele. A GeoTapp prepara a informação personalizada, faz com que seja assinada na app como confirmação de leitura e não deixa picar o ponto enquanto não estiver assinada.',
    features: 'Comparação das funcionalidades principais', feat: 'Funcionalidade',
    diff: 'Registar o tempo ou provar o trabalho',
    geo: ['Posição obtida do telemóvel em cada picagem, não introduzida à mão','Relatórios selados com hash criptográfico no momento do fecho','Provas fotográficas integradas com GPS e data/hora','O cliente verifica por si que o relatório não foi alterado','Concebida para operadores no terreno, não para o escritório'],
    comp: ['Excelente para registar o tempo e faturar à hora','Nenhuma posição selada no relatório','Nenhuma prova fotográfica ligada à intervenção','Os dados não são verificáveis por terceiros','Plano gratuito disponível (ideal para freelancers)'],
    useCasesTitle: 'Quem deve escolher a GeoTapp em vez da Clockify',
    useCases: ['Empresas de limpeza e facility management com clientes exigentes','Técnicos de manutenção e instaladores que têm de documentar as horas faturadas','Empresas sujeitas a inspeções do trabalho ou a verificações do cliente','Quem já teve contestações por intervenções não reconhecidas','Empresas com várias equipas distribuídas por obras diferentes'],
    cta: 'Quer ver a diferença na prática?',
    ctaDesc: 'Experimente numa intervenção real: 14 dias grátis, sem cartão de crédito.',
    ctaBtn: 'Começar teste gratuito',
  },
  nl: {
    badge: 'App-vergelijking',
    h1sub: 'uren bijhouden of klussen verzegelen?',
    desc: 'Clockify registreert tijd. GeoTapp maakt controleerbaar bewijs van het uitgevoerde werk. Voor wie in het veld werkt, verandert dat alles.',
    summary: 'Kort gezegd:',
    summaryText: 'Clockify is uitstekend voor zelfstandigen en kantoorteams die uren bijhouden voor de facturering. Voor medewerkers in het veld die het uitgevoerde werk aan een opdrachtgever moeten aantonen, maakt GeoTapp verzegelde rapporten met locatie, tijd en foto\'s: functies die Clockify niet heeft.',
    footnote: '* Volgens de wet (art. 13 AVG en, in Italië, art. 4 van het arbeidsstatuut) moet elke werknemer worden geïnformeerd voordat hij wordt gelokaliseerd. Laat de software deze stap aan de verantwoordelijke over, dan blijft het risico bij hem. GeoTapp maakt de persoonlijke privacyverklaring klaar, laat die in de app voor kennisgeving ondertekenen en laat niet registreren totdat ze is ondertekend.',
    features: 'Vergelijking van de belangrijkste functies',
    feat: 'Functie',
    diff: 'Tijd registreren of het werk bewijzen',
    geo: ['Locatie door de telefoon bepaald bij elke registratie, niet met de hand ingevoerd','Rapporten verzegeld met een cryptografische hash op het moment van afsluiten','Geïntegreerd fotobewijs met gps en tijdstempel','De opdrachtgever controleert zelf dat het rapport niet is gewijzigd','Ontworpen voor medewerkers in het veld, niet voor kantoor'],
    comp: ['Uitstekend om tijd te registreren en per uur te factureren','Geen verzegelde locatie in het rapport','Geen fotobewijs gekoppeld aan de klus','De gegevens zijn niet door derden te controleren','Gratis abonnement beschikbaar (ideaal voor zelfstandigen)'],
    useCasesTitle: 'Wie GeoTapp zou moeten kiezen in plaats van Clockify',
    useCases: ['Schoonmaakbedrijven en facility management met veeleisende klanten','Onderhoudsmonteurs en installateurs die de gefactureerde uren moeten documenteren','Bedrijven die onder inspecties van de arbeidsinspectie of controles van de opdrachtgever vallen','Wie al betwistingen heeft gehad over klussen die niet werden erkend','Bedrijven met meerdere ploegen verdeeld over verschillende bouwplaatsen'],
    cta: 'Wilt u het verschil in de praktijk zien?',
    ctaDesc: 'Probeer het op een echte klus: 14 dagen gratis, zonder creditcard.',
    ctaBtn: 'Start de gratis proefperiode',
  },
  da: {
    badge: 'App-sammenligning', h1sub: 'registrere timer eller forsegle opgaver?',
    desc: 'Clockify registrerer tiden. GeoTapp laver verificerbar dokumentation af det udførte arbejde. For dem, der arbejder i marken, ændrer forskellen alt.',
    summary: 'Kort sagt:',
    summaryText: 'Clockify er fremragende til freelancere og kontorteams, der registrerer timer til fakturering. Til medarbejdere i marken, der skal dokumentere det udførte arbejde over for en kunde, laver GeoTapp forseglede rapporter med position, tid og fotos: funktioner, som Clockify ikke har.',
    footnote: '* Ifølge loven (GDPR art. 13 og, i Italien, art. 4 i arbejdstagerloven, Statuto dei Lavoratori) skal hver medarbejder informeres, før vedkommende geolokaliseres. Overlader softwaren dette trin til arbejdsgiveren, er risikoen stadig arbejdsgiverens. GeoTapp forbereder den personlige information, får den underskrevet i appen som bekræftelse på, at den er læst, og lader ikke medarbejderen stemple, før den er underskrevet.',
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion',
    diff: 'Registrere tiden eller dokumentere arbejdet',
    geo: ['Position aflæst fra telefonen ved hver stempling, ikke indtastet i hånden','Rapporter forseglet med kryptografisk hash, når opgaven lukkes','Bevisfotos integreret med GPS og tidsstempel','Kunden kontrollerer selv, at rapporten ikke er ændret','Lavet til medarbejdere i marken, ikke til kontoret'],
    comp: ['Fremragende til at registrere tid og fakturere pr. time','Ingen forseglet position i rapporten','Intet fotobevis knyttet til opgaven','Dataene kan ikke verificeres af tredjepart','Gratis plan tilgængelig (ideel til freelancere)'],
    useCasesTitle: 'Hvem bør vælge GeoTapp frem for Clockify',
    useCases: ['Rengøringsfirmaer og facility management med krævende kunder','Servicefolk og installatører, der skal dokumentere de fakturerede timer','Virksomheder, der bliver kontrolleret af arbejdstilsynet eller af kunden','Dem, der allerede har oplevet, at kunder ikke har anerkendt udførte opgaver','Virksomheder med flere hold fordelt på forskellige byggepladser'],
    cta: 'Vil du se forskellen i praksis?',
    ctaDesc: 'Prøv det på en rigtig opgave: 14 dage gratis, uden kreditkort.',
    ctaBtn: 'Start gratis prøveperiode',
  },
  sv: {
    badge: 'App-jämförelse', h1sub: 'registrera timmar eller försegla uppdrag?',
    desc: 'Clockify registrerar tid. GeoTapp tar fram verifierbara bevis på utfört arbete. För fältpersonal ändrar skillnaden allt.',
    summary: 'Kort sagt:',
    summaryText: 'Clockify är utmärkt för frilansare och kontorsteam som registrerar timmar för fakturering. För fältpersonal som måste bevisa utfört arbete för en kund tar GeoTapp fram förseglade rapporter med plats, tid och foton: funktioner som Clockify inte har.',
    footnote: '* Enligt lag (artikel 13 i GDPR) måste varje anställd informeras innan hen geolokaliseras. Om programvaran överlåter det steget åt arbetsgivaren ligger risken kvar hos arbetsgivaren. GeoTapp tar fram den personliga informationen, låter den anställde signera den som läst i appen och släpper inte till instämpling förrän den är signerad.',
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion',
    diff: 'Registrera tid eller bevisa arbetet',
    geo: ['Positionen hämtas från telefonen vid varje instämpling och skrivs inte in för hand','Rapporter förseglade med en kryptografisk hash när uppdraget avslutas','Bevisfoton integrerade med GPS och tidsstämpel','Kunden kontrollerar själv att rapporten inte har ändrats','Gjord för fältpersonal, inte för kontoret'],
    comp: ['Utmärkt för att registrera tid och fakturera per timme','Ingen plats förseglad i rapporten','Inga bevisfoton kopplade till uppdraget','Uppgifterna kan inte verifieras av tredje part','Gratisplan finns (idealisk för frilansare)'],
    useCasesTitle: 'Vem bör välja GeoTapp framför Clockify',
    useCases: ['Städ- och fastighetsserviceföretag med krävande kunder','Underhålls- och installationsteam som måste försvara fakturerade timmar','Företag som omfattas av arbetsinspektioner eller kundkontroller','Alla som redan har råkat ut för tvister om uppdrag som kunden inte godkände','Företag med flera arbetslag på olika platser'],
    cta: 'Vill du se skillnaden i praktiken?',
    ctaDesc: 'Prova på ett riktigt uppdrag: 14 dagar gratis, utan kreditkort.',
    ctaBtn: 'Starta den kostnadsfria provperioden',
  },
  nb: {
    badge: 'App-sammenligning', h1sub: 'registrere timer eller forsegle oppdrag?',
    desc: 'Clockify registrerer tid. GeoTapp leverer verifiserbart bevis på utført arbeid. For dem som jobber i felt, endrer forskjellen alt.',
    summary: 'Kort sagt:',
    summaryText: 'Clockify er utmerket for frilansere og kontorteam som registrerer timer for fakturering. For feltarbeidere som må bevise utført arbeid overfor en oppdragsgiver, leverer GeoTapp forseglede rapporter med ekte GPS, bilder og digital signatur, disse funksjonene mangler i Clockify.',
    footnote: '* Ifølge loven (GDPR art. 13) må hver ansatt signere en personvernerklæring før vedkommende geolokaliseres. De fleste GPS-programmer håndterer ikke dette: den juridiske risikoen blir hos arbeidsgiveren. GeoTapp genererer automatisk den personlige erklæringen, lar den ansatte signere den digitalt og blokkerer GPS-tilgangen til den er signert. Ingen annen programvare på markedet gjør dette.',
    features: 'Sammenligning av nøkkelfunksjoner', feat: 'Funksjon',
    diff: 'Tidsregistrering vs forseglet bevis for arbeid',
    geo: ['GPS verifisert automatisk, ikke lagt inn manuelt','Rapporter forseglet med kryptografisk hash ved avslutning','Fotobevis integrert med GPS og tidsstempel','Oppdragsgiveren verifiserer ektheten selv','Laget for feltarbeidere (ikke kontor)'],
    comp: ['Utmerket for tidsregistrering og timefakturering','Ingen verifisert eller forseglet GPS','Ingen fotobevis koblet til oppdraget','Dataene kan ikke verifiseres av tredjeparter','Gratis plan tilgjengelig (ideelt for frilansere)'],
    useCasesTitle: 'Hvem bør velge GeoTapp fremfor Clockify',
    useCases: ['Renholds- og facility management-bedrifter med krevende kunder','Vedlikeholds- og montasjeteam som må forsvare fakturerte timer','Bedrifter underlagt arbeidstilsyn eller kundeaudits','De som allerede har hatt tvister om ikke-anerkjente oppdrag','Bedrifter med flere lag fordelt på ulike byggeplasser'],
    cta: 'Vil du se forskjellen i praksis?',
    ctaDesc: 'Vi viser deg hvordan et oppdrag blir til verifiserbart bevis, på 20 minutter, uforpliktende.',
    ctaBtn: 'Kom i gang gratis!',
  },
  ru: {
    badge: 'Сравнение приложений', h1sub: 'учитывать часы или запечатывать задания?',
    desc: 'Clockify фиксирует время. GeoTapp создаёт проверяемые доказательства выполненной работы. Для тех, кто работает в поле, эта разница меняет всё.',
    summary: 'Коротко:',
    summaryText: 'Clockify превосходно подходит фрилансерам и офисным командам, учитывающим часы для выставления счетов. Для выездных работников, которым нужно доказать заказчику выполненную работу, GeoTapp создаёт опечатанные отчёты с настоящим GPS, фото и цифровой подписью, этих функций у Clockify нет.',
    footnote: '* По закону (GDPR ст. 13) каждый сотрудник должен подписать уведомление о конфиденциальности перед геолокацией. Большинство GPS-программ это не обеспечивают: юридический риск остаётся на работодателе. GeoTapp автоматически создаёт персональное уведомление, даёт сотруднику подписать его цифровой подписью и блокирует доступ к GPS, пока оно не подписано. Ни одна другая программа на рынке этого не делает.',
    features: 'Сравнение ключевых функций', feat: 'Функция',
    diff: 'Учёт времени vs опечатанное доказательство работы',
    geo: ['GPS проверяется автоматически, не вводится вручную','Отчёты опечатываются криптографическим хешем при закрытии','Фотодоказательства интегрированы с GPS и меткой времени','Заказчик проверяет подлинность самостоятельно','Создан для выездных работников (не для офиса)'],
    comp: ['Отлично подходит для учёта времени и почасовой оплаты','Нет проверенного или опечатанного GPS','Нет фотодоказательств, привязанных к заданию','Данные нельзя проверить третьим сторонам','Доступен бесплатный тариф (идеален для фрилансеров)'],
    useCasesTitle: 'Кому стоит выбрать GeoTapp вместо Clockify',
    useCases: ['Клининговые компании и facility management с требовательными клиентами','Ремонтники и монтажники, которым нужно отстаивать выставленные часы','Компании, подлежащие трудовым проверкам или аудитам заказчика','Те, у кого уже были споры о непризнанных заданиях','Компании с несколькими бригадами на разных объектах'],
    cta: 'Хотите увидеть разницу на практике?',
    ctaDesc: 'Покажем, как задание превращается в проверяемое доказательство, за 20 минут, без обязательств.',
    ctaBtn: 'Начните бесплатно!',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = localizeEnglishDeep(META[locale] ?? META.en, locale);
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: buildLocaleAlternates(locale, PATHNAME),
    openGraph: { url: buildCanonicalUrl(locale, PATHNAME), type: 'website', title: m.title, description: m.description, images: [{ url: '/og-default.png', width: 1200, height: 630, alt: m.title }] },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description },
  };
}

export default async function GeoTappVsClockifyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = localizeEnglishDeep(T[locale] ?? T.en, locale);
  const faqItems = localizeEnglishDeep(FAQ[locale] ?? FAQ.en, locale);
  const labels = localizeEnglishDeep(ROWS_LABELS[locale] ?? ROWS_LABELS.en, locale);
  const rows = labels.map((feature, i) => ({ feature, geotapp: ROWS_GEO[i], competitor: ROWS_COMP[i] }));

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const breadcrumb = buildComparisonBreadcrumb({
    locale,
    pathname: PATHNAME,
    competitorName: 'Clockify',
  });

  const meta = localizeEnglishDeep(META[locale] ?? META.en, locale);
  const article = buildComparisonArticle({
    locale,
    pathname: PATHNAME,
    headline: meta.title,
    description: meta.description,
    datePublished: ARTICLE_DATE_PUBLISHED,
    dateModified: ARTICLE_DATE_MODIFIED,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ComparisonPageL
        locale={locale}
        competitorName="Clockify"
        competitorId="clockify"
        badge={t.badge}
        h1sub={t.h1sub}
        desc={t.desc}
        summaryLabel={t.summary}
        summaryText={t.summaryText}
        featuresTitle={t.features}
        featureColLabel={t.feat}
        footnote={t.footnote}
        diffTitle={t.diff}
        geoItems={t.geo}
        compItems={t.comp}
        extraList={{ title: t.useCasesTitle, items: t.useCases }}
        rows={rows}
        faqItems={faqItems}
        ctaTitle={t.cta}
        ctaDesc={t.ctaDesc}
        ctaBtn={t.ctaBtn}
      />
    </>
  );
}
