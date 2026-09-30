import type { Metadata } from 'next';
import ComparisonPageL from '@/components/ComparisonPageL';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-hubstaff/';
const ARTICLE_DATE_PUBLISHED = '2025-09-01';
const ARTICLE_DATE_MODIFIED = '2026-08-01';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs Hubstaff - Confronto 2026 | GeoTapp', description: 'GeoTapp vs Hubstaff: quale scegliere per aziende con operatori sul campo in Italia? Confronto su posizione alla timbratura, report sigillati, foto di prova e privacy dei dipendenti.' },
  en: { title: 'GeoTapp vs Hubstaff - Comparison 2026 | GeoTapp', description: 'GeoTapp vs Hubstaff: which one to choose for companies with field operators in Italy? Comparison on position at clock-in, sealed reports, proof photos and employee privacy.' },
  de: { title: 'GeoTapp vs Hubstaff - Vergleich 2026 | GeoTapp', description: 'GeoTapp vs Hubstaff: was passt zu Betrieben mit Mitarbeitern im Außendienst in Italien? Vergleich von Position beim Stempeln, versiegelten Berichten, Nachweisfotos und Datenschutz der Mitarbeiter.' },
  nl: { title: 'GeoTapp vs Hubstaff - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Hubstaff: welke kiest u in Italië? Vergelijking op locatie bij de registratie, verzegelde rapporten, bewijsfoto\'s en privacy.' },
  fr: { title: 'GeoTapp vs Hubstaff - Comparatif 2026 | GeoTapp', description: 'GeoTapp vs Hubstaff : lequel pour des équipes de terrain ? Position au pointage, rapports scellés, photos de preuve et vie privée des salariés.' },
  es: { title: 'GeoTapp vs Hubstaff - Comparación 2026 | GeoTapp', description: 'GeoTapp vs Hubstaff: ¿cuál elegir para empresas con operarios en campo? Compara GPS verificado, informes sellados, pruebas fotográficas y conformidad con el RGPD.' },
  pt: { title: 'GeoTapp vs Hubstaff - Comparação 2026 | GeoTapp', description: 'GeoTapp vs Hubstaff: qual escolher para empresas com operadores no terreno? Compare GPS verificado, relatórios selados, provas fotográficas e conformidade com o RGPD.' },
  da: { title: 'GeoTapp vs Hubstaff - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Hubstaff: hvad er bedst for virksomheder med medarbejdere i marken? Sammenlign verificeret GPS, forseglede rapporter, fotobeviser og GDPR-overholdelse.' },
  sv: { title: 'GeoTapp vs Hubstaff - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs Hubstaff: vad är bäst för företag med personal ute i fält? Jämför verifierad GPS, förseglade rapporter, fotobevis och GDPR-efterlevnad.' },
  nb: { title: 'GeoTapp vs Hubstaff - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Hubstaff: hva er best for bedrifter med ansatte ute i felt? Sammenlign verifisert GPS, forseglede rapporter, fotobevis og GDPR-samsvar.' },
  ru: { title: 'GeoTapp vs Hubstaff, Сравнение 2026 | GeoTapp', description: 'GeoTapp vs Hubstaff: что выбрать для компаний с сотрудниками на выезде? Сравните проверенный GPS, опечатанные отчёты, фотодоказательства и соответствие GDPR.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza principale tra GeoTapp e Hubstaff?', a: 'Hubstaff è un sistema di monitoraggio della produttività per lavoratori remoti: traccia il GPS e cattura screenshot. GeoTapp è un sistema di prova verificabile degli interventi: produce report sigillati con posizione, ora e foto di prova che il committente verifica da solo. Orientamenti molto diversi.' },
    { q: 'Hubstaff va bene per il GDPR sulla geolocalizzazione?', a: 'Hubstaff nasce negli Stati Uniti per il monitoraggio continuo; in Europa, e in particolare con le indicazioni del Garante Privacy italiano sul controllo dei dipendenti, quel modello va valutato caso per caso. GeoTapp è costruito per stare dentro i paletti del GDPR: posizione solo quando si timbra, mai in continuo, e informativa per i dipendenti firmata nell\'app prima di timbrare.' },
    { q: 'GeoTapp o Hubstaff per imprese di pulizie e manutenzione?', a: 'GeoTapp è progettato specificamente per il settore operativo italiano: imprese di pulizie, manutenzione, installatori, sicurezza privata. Offre report verificabili dal committente ed export delle ore per le paghe. Hubstaff è pensato per team remoti che lavorano al computer, non per operatori sul campo con clienti a cui mostrare il lavoro.' },
    { q: 'Hubstaff fa screenshot dei dipendenti. GeoTapp no, è un limite?', a: 'In Italia, lo screenshot automatico dei dipendenti è considerato uno strumento di controllo a distanza che richiede accordo sindacale (art. 4 Statuto dei Lavoratori). GeoTapp non monitora i dipendenti: rileva la posizione solo quando timbrano (entrata, pause, uscita) e fra una timbratura e l\'altra non registra nulla in automatico. Resta a carico del datore di lavoro valutare se nel suo caso servono accordo o autorizzazione.' },
  ],
  en: [
    { q: 'What is the main difference between GeoTapp and Hubstaff?', a: 'Hubstaff is a productivity monitoring system for remote workers: it tracks GPS and captures screenshots. GeoTapp is a verifiable proof of work system: it produces sealed reports with location, time and proof photos that the client verifies alone. Very different orientations.' },
    { q: 'Is Hubstaff suitable under the GDPR for geolocation?', a: 'Hubstaff was born in the United States for continuous monitoring; in Europe, and in particular with the Italian Data Protection Authority\'s guidance on monitoring employees, that model has to be assessed case by case. GeoTapp is built to stay within the GDPR\'s limits: position only at clock-in, never continuously, and an employee notice signed in the app before clocking in.' },
    { q: 'GeoTapp or Hubstaff for cleaning and maintenance companies?', a: 'GeoTapp is designed specifically for operational sectors: cleaning companies, maintenance, installers, private security. It offers reports the client can verify and hours exported for payroll. Hubstaff is built for remote teams working at a computer, not for field operators with clients to show the work to.' },
    { q: 'Hubstaff takes employee screenshots. GeoTapp does not: is that a limitation?', a: 'In Italy, automatic screenshots of employees are considered a remote-control tool that requires a union agreement (Art. 4 of the Workers\' Statute). GeoTapp does not monitor employees: it records the position only when they clock in (start, breaks, finish) and automatically records nothing in between clock-ins. It is up to the employer to assess whether an agreement or authorisation is needed in their case.' },
  ],
  de: [
    { q: 'Was ist der Hauptunterschied zwischen GeoTapp und Hubstaff?', a: 'Hubstaff ist ein System zur Produktivitätsüberwachung für Remote-Mitarbeiter: Es erfasst GPS und erstellt Screenshots. GeoTapp ist ein System für überprüfbare Einsatznachweise: Es erstellt versiegelte Berichte mit Position, Uhrzeit und Nachweisfotos, die der Auftraggeber selbst überprüft. Sehr verschiedene Ausrichtungen.' },
    { q: 'Ist Hubstaff bei der Geolokalisierung DSGVO-tauglich?', a: 'Hubstaff stammt aus den USA und ist auf kontinuierliche Überwachung ausgelegt; in Europa, und insbesondere mit den Vorgaben der italienischen Datenschutzbehörde zur Mitarbeiterkontrolle, muss dieses Modell im Einzelfall geprüft werden. GeoTapp ist so gebaut, dass es innerhalb der Grenzen der DSGVO bleibt: Position nur beim Stempeln, nie durchgehend, und eine Mitarbeiterinformation, die vor dem Stempeln in der App unterschrieben wird.' },
    { q: 'GeoTapp oder Hubstaff für Reinigungsfirmen und Wartungsbetriebe?', a: 'GeoTapp ist gezielt für den operativen Bereich gebaut: Reinigungsfirmen, Wartung, Installateure, private Sicherheitsdienste. Es bietet Berichte, die der Auftraggeber überprüfen kann, und einen Export der Stunden für die Lohnabrechnung. Hubstaff ist für Remote-Teams gedacht, die am Computer arbeiten, nicht für Mitarbeiter im Außendienst, die Kunden ihre Arbeit zeigen müssen.' },
    { q: 'Hubstaff macht Screenshots von Mitarbeitern. GeoTapp nicht: ein Nachteil?', a: 'In Italien gelten automatische Screenshots von Mitarbeitern als Instrument der Fernkontrolle, das eine Vereinbarung mit der Gewerkschaft erfordert (Art. 4 des Arbeitnehmerstatuts). GeoTapp überwacht keine Mitarbeiter: Es erfasst die Position nur, wenn sie stempeln (Beginn, Pausen, Ende), und zwischen zwei Stempelungen wird nichts automatisch aufgezeichnet. Ob im eigenen Fall eine Vereinbarung oder Genehmigung nötig ist, muss der Arbeitgeber selbst prüfen.' },
  ],
  fr: [
    { q: 'Quelle est la différence principale entre GeoTapp et Hubstaff ?', a: 'Hubstaff est un système de suivi de la productivité pour les télétravailleurs : il trace le GPS et capture des copies d\'écran. GeoTapp est un système de preuve vérifiable des interventions : il produit des rapports scellés avec position, heure et photos de preuve que le client vérifie lui-même. Deux orientations très différentes.' },
    { q: 'Hubstaff est-il adapté au RGPD pour la géolocalisation ?', a: 'Hubstaff est né aux États-Unis pour le suivi continu ; en Europe, et en particulier au regard des indications de l\'autorité italienne de protection des données sur le contrôle des salariés, ce modèle doit être évalué au cas par cas. GeoTapp est conçu pour rester dans le cadre du RGPD : position uniquement au pointage, jamais en continu, et information des salariés signée dans l\'app avant de pointer.' },
    { q: 'GeoTapp ou Hubstaff pour les entreprises de nettoyage et de maintenance ?', a: 'GeoTapp est conçu pour les métiers d\'intervention : entreprises de nettoyage, maintenance, installateurs, sécurité privée. Il offre des rapports vérifiables par le client et un export des heures pour la paie. Hubstaff est pensé pour des équipes à distance qui travaillent sur ordinateur, pas pour des opérateurs de terrain qui doivent montrer leur travail à leurs clients.' },
    { q: 'Hubstaff fait des copies d\'écran des salariés. GeoTapp non : est-ce une limite ?', a: 'En Italie, la capture d\'écran automatique des salariés est considérée comme un outil de contrôle à distance qui exige un accord syndical (art. 4 du Statut des travailleurs). GeoTapp ne surveille pas les salariés : il relève la position uniquement quand ils pointent (arrivée, pauses, départ) et, entre deux pointages, il n\'enregistre rien automatiquement. Il revient à l\'employeur d\'évaluer si, dans son cas, un accord ou une autorisation est nécessaire.' },
  ],
  es: [
    { q: '¿Cuál es la diferencia principal entre GeoTapp y Hubstaff?', a: 'Hubstaff es un sistema de monitorización de la productividad para trabajadores remotos: rastrea el GPS y captura capturas de pantalla. GeoTapp es un sistema de prueba verificable de las intervenciones: produce informes sellados con GPS verificado y pruebas fotográficas que el cliente verifica por sí mismo. Orientaciones muy distintas.' },
    { q: '¿Es Hubstaff conforme al RGPD para la geolocalización?', a: 'Hubstaff es una empresa estadounidense y su conformidad con el RGPD europeo, en particular con las directrices de la autoridad de protección de datos italiana sobre la vigilancia de los empleados, requiere una verificación específica. GeoTapp está diseñado para el mercado europeo con conformidad RGPD integrada y los modelos de información al empleado incluidos.' },
    { q: '¿GeoTapp o Hubstaff para empresas de limpieza y mantenimiento?', a: 'GeoTapp está diseñado específicamente para el sector operativo italiano: empresas de limpieza, mantenimiento, instaladores, seguridad privada. Ofrece informes verificables por el cliente y conformidad con los convenios colectivos. Hubstaff está pensado para equipos digitales remotos, no para operarios físicos en campo con clientes a los que proteger legalmente.' },
    { q: 'Hubstaff hace capturas de pantalla de los empleados. GeoTapp no, ¿es una limitación?', a: 'En Italia, la captura de pantalla automática de los empleados se considera una herramienta de control a distancia que requiere acuerdo sindical (art. 4 del Estatuto de los Trabajadores). GeoTapp no monitoriza a los empleados de forma continua, rastrea la posición solo durante la intervención activa, y cumple las directrices de la autoridad de protección de datos italiana.' },
  ],
  pt: [
    { q: 'Qual é a principal diferença entre a GeoTapp e a Hubstaff?', a: 'A Hubstaff é um sistema de monitorização da produtividade para trabalhadores remotos: rastreia o GPS e captura capturas de ecrã. A GeoTapp é um sistema de prova verificável das intervenções: produz relatórios selados com GPS verificado e provas fotográficas que o cliente verifica autonomamente. Orientações muito diferentes.' },
    { q: 'A Hubstaff é conforme o RGPD para a geolocalização?', a: 'A Hubstaff é uma empresa americana e a sua conformidade com o RGPD europeu, em particular com as orientações da autoridade de proteção de dados italiana sobre a monitorização dos trabalhadores, exige verificação específica. A GeoTapp foi concebida para o mercado europeu com conformidade RGPD integrada e os modelos de informação ao trabalhador incluídos.' },
    { q: 'GeoTapp ou Hubstaff para empresas de limpeza e manutenção?', a: 'A GeoTapp foi concebida especificamente para o setor operacional italiano: empresas de limpeza, manutenção, instaladores, segurança privada. Oferece relatórios verificáveis pelo cliente e conformidade com as convenções coletivas. A Hubstaff foi pensada para equipas digitais remotas, não para operadores físicos no terreno com clientes a proteger juridicamente.' },
    { q: 'A Hubstaff faz capturas de ecrã dos trabalhadores. A GeoTapp não, é uma limitação?', a: 'Em Itália, a captura de ecrã automática dos trabalhadores é considerada uma ferramenta de controlo à distância que exige acordo sindical (art. 4 do Estatuto dos Trabalhadores). A GeoTapp não monitoriza os trabalhadores de forma contínua, rastreia a posição apenas durante a intervenção ativa, e cumpre as orientações da autoridade de proteção de dados italiana.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Hubstaff?', a: 'Hubstaff is een systeem voor het monitoren van de productiviteit van medewerkers op afstand: het volgt de gps en maakt schermafbeeldingen. GeoTapp is een systeem voor controleerbaar bewijs van klussen: het maakt verzegelde rapporten met locatie, tijd en bewijsfoto\'s die de opdrachtgever zelf controleert. Heel verschillende uitgangspunten.' },
    { q: 'Is Hubstaff geschikt voor de AVG bij geolocatie?', a: 'Hubstaff is in de Verenigde Staten ontstaan voor doorlopende monitoring; in Europa, en in het bijzonder met de aanwijzingen van de Italiaanse toezichthouder (Garante Privacy) over controle op werknemers, moet dat model geval per geval worden beoordeeld. GeoTapp is gebouwd om binnen de kaders van de AVG te blijven: locatie alleen bij het registreren, nooit doorlopend, en een privacyverklaring voor de werknemers die in de app wordt ondertekend voordat ze registreren.' },
    { q: 'GeoTapp of Hubstaff voor schoonmaak- en onderhoudsbedrijven?', a: 'GeoTapp is specifiek ontworpen voor de Italiaanse operationele sector: schoonmaakbedrijven, onderhoud, installateurs, particuliere beveiliging. Het biedt rapporten die de opdrachtgever kan controleren en export van de uren voor de salarissen. Hubstaff is bedoeld voor teams op afstand die achter de computer werken, niet voor medewerkers in het veld met klanten aan wie ze het werk moeten tonen.' },
    { q: 'Hubstaff maakt schermafbeeldingen van de werknemers. GeoTapp niet, is dat een beperking?', a: 'In Italië wordt de automatische schermafbeelding van werknemers beschouwd als een instrument voor controle op afstand waarvoor een akkoord met de vakbond nodig is (art. 4 van het arbeidsstatuut). GeoTapp monitort de werknemers niet: het legt de locatie alleen vast wanneer ze registreren (aankomst, pauzes, vertrek) en tussen twee registraties in legt het niets automatisch vast. Het is aan de werkgever om te beoordelen of in zijn geval een akkoord of vergunning nodig is.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Hubstaff?', a: 'Hubstaff er et system til produktivitetsovervågning af fjernmedarbejdere: det sporer GPS og tager skærmbilleder. GeoTapp er et system til forseglet bevis af opgaver: det producerer forseglede rapporter med verificeret GPS og fotobeviser, som kunden selv verificerer. Meget forskellige orienteringer.' },
    { q: 'Er Hubstaff GDPR-kompatibel ved geolokalisering?', a: 'Hubstaff er en amerikansk virksomhed, og dens overholdelse af den europæiske GDPR, især det italienske datatilsyns retningslinjer om medarbejderovervågning, kræver en specifik verificering. GeoTapp er udviklet til det europæiske marked med indbygget GDPR-overholdelse og skabeloner til medarbejderinformation inkluderet.' },
    { q: 'GeoTapp eller Hubstaff til rengørings- og vedligeholdelsesvirksomheder?', a: 'GeoTapp er udviklet specifikt til den italienske driftssektor: rengøringsvirksomheder, vedligeholdelse, installatører, privat sikkerhed. Det tilbyder rapporter, der kan verificeres af kunden, og overholdelse af overenskomster. Hubstaff er tænkt til digitale fjernteams, ikke til fysiske medarbejdere i marken med kunder, der skal beskyttes juridisk.' },
    { q: 'Hubstaff tager skærmbilleder af medarbejderne. GeoTapp gør ikke, er det en begrænsning?', a: 'I Italien betragtes automatiske skærmbilleder af medarbejdere som et fjernovervågningsværktøj, der kræver en fagforeningsaftale (art. 4 i arbejderstatutten). GeoTapp overvåger ikke medarbejderne kontinuerligt, det sporer kun positionen under den aktive opgave, og overholder det italienske datatilsyns retningslinjer.' },
  ],
  sv: [
    { q: 'Vad är den största skillnaden mellan GeoTapp och Hubstaff?', a: 'Hubstaff är ett system för produktivitetsövervakning av distansarbetare: det spårar GPS och tar skärmdumpar. GeoTapp är ett system för förseglat bevis av uppdrag: det producerar förseglade rapporter med verifierad GPS och fotobevis som kunden själv verifierar. Mycket olika inriktningar.' },
    { q: 'Är Hubstaff GDPR-kompatibelt för geolokalisering?', a: 'Hubstaff är ett amerikanskt företag och dess efterlevnad av den europeiska GDPR, i synnerhet den italienska dataskyddsmyndighetens riktlinjer om övervakning av anställda, kräver en specifik verifiering. GeoTapp är utformat för den europeiska marknaden med inbyggd GDPR-efterlevnad och mallar för information till anställda inkluderade.' },
    { q: 'GeoTapp eller Hubstaff för städ- och underhållsföretag?', a: 'GeoTapp är specifikt utformat för den italienska operativa sektorn: städföretag, underhåll, installatörer, privat säkerhet. Det erbjuder rapporter som kunden kan verifiera och efterlevnad av kollektivavtal. Hubstaff är tänkt för digitala distansteam, inte för fysisk personal ute i fält med kunder som måste skyddas juridiskt.' },
    { q: 'Hubstaff tar skärmdumpar av de anställda. GeoTapp gör inte det, är det en begränsning?', a: 'I Italien betraktas automatiska skärmdumpar av anställda som ett verktyg för fjärrövervakning som kräver ett fackligt avtal (art. 4 i arbetstagarstadgan). GeoTapp övervakar inte de anställda kontinuerligt, det spårar positionen endast under det aktiva uppdraget, och följer den italienska dataskyddsmyndighetens riktlinjer.' },
  ],
  nb: [
    { q: 'Hva er den viktigste forskjellen mellom GeoTapp og Hubstaff?', a: 'Hubstaff er et system for produktivitetsovervåking av fjernarbeidere: det sporer GPS og tar skjermbilder. GeoTapp er et system for forseglet bevis av oppdrag: det produserer forseglede rapporter med verifisert GPS og fotobevis som oppdragsgiveren selv verifiserer. Svært forskjellige orienteringer.' },
    { q: 'Er Hubstaff GDPR-kompatibel for geolokalisering?', a: 'Hubstaff er et amerikansk selskap, og dets samsvar med den europeiske GDPR, særlig det italienske datatilsynets retningslinjer om overvåking av ansatte, krever en spesifikk verifisering. GeoTapp er utviklet for det europeiske markedet med innebygd GDPR-samsvar og maler for informasjon til ansatte inkludert.' },
    { q: 'GeoTapp eller Hubstaff for renholds- og vedlikeholdsbedrifter?', a: 'GeoTapp er utviklet spesifikt for den italienske driftssektoren: renholdsbedrifter, vedlikehold, installatører, privat sikkerhet. Det tilbyr rapporter som oppdragsgiveren kan verifisere, og samsvar med tariffavtaler. Hubstaff er tenkt for digitale fjernteam, ikke for fysiske ansatte ute i felt med kunder som må beskyttes juridisk.' },
    { q: 'Hubstaff tar skjermbilder av de ansatte. GeoTapp gjør ikke det, er det en begrensning?', a: 'I Italia regnes automatiske skjermbilder av ansatte som et verktøy for fjernovervåking som krever en fagforeningsavtale (art. 4 i arbeidstakerstatutten). GeoTapp overvåker ikke de ansatte kontinuerlig, det sporer posisjonen bare under det aktive oppdraget, og følger det italienske datatilsynets retningslinjer.' },
  ],
  ru: [
    { q: 'В чём главное различие между GeoTapp и Hubstaff?', a: 'Hubstaff, это система мониторинга производительности удалённых сотрудников: она отслеживает GPS и делает снимки экрана. GeoTapp, это система опечатывания работ: она создаёт опечатанные отчёты с проверенным GPS и фотодоказательствами, которые заказчик проверяет самостоятельно. Совершенно разные направленности.' },
    { q: 'Соответствует ли Hubstaff требованиям GDPR при геолокации?', a: 'Hubstaff, американская компания, и её соответствие европейскому GDPR, в частности рекомендациям итальянского органа по защите данных о слежке за сотрудниками, требует отдельной проверки. GeoTapp разработан для европейского рынка со встроенным соответствием GDPR и включёнными шаблонами уведомления для сотрудников.' },
    { q: 'GeoTapp или Hubstaff для клининговых и обслуживающих компаний?', a: 'GeoTapp разработан специально для итальянского операционного сектора: клининговые компании, техобслуживание, монтажники, частная охрана. Он предлагает отчёты, проверяемые заказчиком, и соответствие коллективным договорам. Hubstaff рассчитан на цифровые удалённые команды, а не на физических сотрудников на выезде с клиентами, которых нужно защитить юридически.' },
    { q: 'Hubstaff делает снимки экрана сотрудников. GeoTapp, нет. Это ограничение?', a: 'В Италии автоматические снимки экрана сотрудников считаются инструментом дистанционного контроля, требующим профсоюзного соглашения (ст. 4 Статута трудящихся). GeoTapp не ведёт непрерывный мониторинг сотрудников, он отслеживает позицию только во время активного выезда, и соответствует рекомендациям итальянского органа по защите данных.' },
  ],
};

// Etichette della tabella di confronto, per locale.
const ROWS_LABELS: Record<string, string[]> = {
  it: ['Posizione alla timbratura per interventi sul campo','Report sigillato crittograficamente','Verifica indipendente da parte del committente','Prove fotografiche collegate a GPS e timestamp','Posizione solo alla timbratura','Nessun monitoraggio continuo dei dipendenti','App mobile Android/iOS','Messaggistica interna proprietaria','Dashboard gestione team','Export per elaborazione paghe','Progettato per il mercato europeo','Informativa GPS firmata nell\'app prima di timbrare*'],
  en: ['Position at clock-in for field jobs','Cryptographically sealed report','Independent verification by the client','Photo evidence linked to GPS and timestamp','Position only at clock-in','No continuous employee monitoring','Mobile app Android/iOS','Built-in messaging','Team management dashboard','Export for payroll processing','Designed for the European market','GPS notice signed in the app before clocking in*'],
  de: ['Position beim Stempeln für Einsätze im Außendienst','Kryptographisch versiegelter Bericht','Unabhängige Überprüfung durch den Auftraggeber','Fotonachweise mit GPS und Zeitstempel verknüpft','Position nur beim Stempeln','Keine durchgehende Überwachung der Mitarbeiter','Mobile App Android/iOS','Eigene interne Nachrichten','Dashboard zur Teamverwaltung','Export für die Lohnabrechnung','Für den europäischen Markt gebaut','GPS-Information vor dem Stempeln in der App unterschrieben*'],
  fr: ['Position au pointage pour les interventions de terrain','Rapport scellé cryptographiquement','Vérification indépendante par le client','Preuves photo liées au GPS et à l\'horodatage','Position uniquement au pointage','Aucun suivi continu des salariés','App mobile Android/iOS','Messagerie interne propriétaire','Tableau de bord de gestion d\'équipe','Export pour le traitement de la paie','Conçu pour le marché européen','Information GPS signée dans l\'app avant de pointer*'],
  es: ['GPS verificado para intervenciones en campo','Informe sellado criptográficamente','Verificación independiente por el cliente','Pruebas fotográficas vinculadas a GPS y marca de tiempo','Conforme al RGPD / directrices de la autoridad italiana','Sin monitorización continua de los empleados','App móvil Android/iOS','Mensajería interna integrada','Panel de gestión de equipos','Exportación para nóminas','Diseñado para el mercado italiano / convenios colectivos','Aviso de privacidad GPS automático con firma digital*'],
  pt: ['GPS verificado para intervenções no terreno','Relatório selado criptograficamente','Verificação independente pelo cliente','Provas fotográficas associadas a GPS e marca temporal','Conforme o RGPD / orientações da autoridade italiana','Sem monitorização contínua dos trabalhadores','App móvel Android/iOS','Mensagens internas integradas','Painel de gestão de equipas','Exportação para processamento salarial','Concebido para o mercado italiano / convenções coletivas','Aviso de privacidade GPS automático com assinatura digital*'],
  nl: ['Locatie bij de registratie voor klussen in het veld','Cryptografisch verzegeld rapport','Onafhankelijke controle door de opdrachtgever','Fotobewijzen gekoppeld aan gps en tijdstempel','Locatie alleen bij de registratie','Geen doorlopende monitoring van de werknemers','Mobiele app voor Android/iOS','Eigen interne berichten','Dashboard voor teambeheer','Export voor de salarisverwerking','Ontworpen voor de Europese markt','GPS-verklaring ondertekend in de app vóór het registreren*'],
  da: ['Verificeret GPS til opgaver i marken','Kryptografisk forseglet rapport','Uafhængig verificering af kunden','Fotobeviser knyttet til GPS og tidsstempel','GDPR-kompatibel / det italienske datatilsyns retningslinjer','Ingen kontinuerlig overvågning af medarbejdere','Mobilapp Android/iOS','Indbygget beskedfunktion','Dashboard til teamstyring','Eksport til lønbehandling','Udviklet til det italienske marked / overenskomster','Automatisk GPS-privatlivserklæring med digital signatur*'],
  sv: ['Verifierad GPS för uppdrag ute i fält','Kryptografiskt förseglad rapport','Oberoende verifiering av kunden','Fotobevis kopplade till GPS och tidsstämpel','GDPR-kompatibel / italienska dataskyddsmyndighetens riktlinjer','Ingen kontinuerlig övervakning av anställda','Mobilapp Android/iOS','Inbyggd meddelandefunktion','Instrumentpanel för teamhantering','Export för löneberäkning','Utformat för den italienska marknaden / kollektivavtal','Automatiskt GPS-integritetsmeddelande med digital signatur*'],
  nb: ['Verifisert GPS for oppdrag ute i felt','Kryptografisk forseglet rapport','Uavhengig verifisering av oppdragsgiver','Fotobevis knyttet til GPS og tidsstempel','GDPR-kompatibel / det italienske datatilsynets retningslinjer','Ingen kontinuerlig overvåking av ansatte','Mobilapp Android/iOS','Innebygd meldingsfunksjon','Dashbord for teamstyring','Eksport for lønnsberegning','Utviklet for det italienske markedet / tariffavtaler','Automatisk GPS-personvernerklæring med digital signatur*'],
  ru: ['Проверенный GPS для выездных работ','Криптографически опечатанный отчёт','Независимая проверка заказчиком','Фотодоказательства, привязанные к GPS и метке времени','Соответствие GDPR / рекомендации итальянского регулятора','Отсутствие непрерывного мониторинга сотрудников','Мобильное приложение Android/iOS','Встроенный обмен сообщениями','Панель управления командой','Экспорт для расчёта зарплаты','Разработано для итальянского рынка / колдоговоров','Автоматическое уведомление о GPS с цифровой подписью*'],
};

const ROWS_GEO =  [true,true,true,true,true,true,true,true,true,true,true,true];
const ROWS_COMP = [true,false,false,false,false,false,true,true,true,true,false,false];

type Copy = {
  badge: string; h1sub: string; desc: string; summary: string; summaryText: string;
  noteTitle: string; noteText: string; features: string; feat: string; diff: string;
  cta: string; ctaDesc: string; ctaBtn: string; geo: string[]; comp: string[]; footnote: string;
};

const T: Record<string, Copy> = {
  it: {
    badge: 'Confronto App', h1sub: 'sigillo o monitoraggio?',
    desc: 'Hubstaff monitora i lavoratori remoti con screenshot e GPS. GeoTapp sigilla ogni intervento con prove verificabili dal committente. Orientamenti diversi, settori diversi.',
    summary: 'In sintesi:',
    summaryText: 'Hubstaff è pensato per monitorare lavoratori remoti al computer (screenshot, produttività). GeoTapp è pensato per documentare il lavoro sul campo: report in cui ogni modifica successiva è rilevabile, con posizione alla timbratura, foto di prova e verifica indipendente da parte del committente. E non traccia in continuo, cosa che nel contesto italiano pesa.',
    noteTitle: 'Nota importante per il mercato italiano',
    noteText: 'Il monitoraggio continuo della posizione GPS e la cattura di screenshot dei dipendenti rientrano nell\'ambito dell\'art. 4 dello Statuto dei Lavoratori e richiedono accordo sindacale o autorizzazione dell\'Ispettorato del Lavoro. GeoTapp è progettato per restarne fuori: rileva la posizione solo quando il lavoratore timbra, mai in continuo, e fa firmare l\'informativa nell\'app prima della prima timbratura.',
    features: 'Confronto funzionalità chiave', feat: 'Funzionalità', diff: 'Orientamenti opposti',
    cta: 'Vuoi vedere GeoTapp in azione?',
    ctaDesc: 'Provalo su un intervento vero: 14 giorni gratis, senza carta di credito.',
    ctaBtn: 'Inizia la prova gratuita',
    geo: ['Report sigillato da mostrare al committente','Posizione solo quando si timbra, mai in continuo','Costruito per stare dentro i paletti del GDPR','Progettato per pulizie, manutenzione, sicurezza, installatori','L\'operatore non è sorvegliato: si sigilla il lavoro'],
    comp: ['Progettato per monitorare lavoratori remoti al computer','GPS continuo e screenshot automatici','Con il GDPR il monitoraggio continuo va valutato caso per caso','Nessun report verificabile dal committente','Orientato alla produttività, non alla prova del lavoro'],
    footnote: '* Per legge (art. 13 GDPR e, in Italia, art. 4 dello Statuto dei Lavoratori) ogni dipendente va informato prima di essere geolocalizzato. Se il software lascia questo passaggio al titolare, il rischio resta a lui. GeoTapp prepara l\'informativa personalizzata, la fa firmare per presa visione nell\'app e non lascia timbrare finché non è firmata.',
  },
  en: {
    badge: 'App Comparison', h1sub: 'sealed proof or monitoring?',
    desc: 'Hubstaff monitors remote workers with screenshots and GPS. GeoTapp seals every job with proof the client can verify. Different orientations, different sectors.',
    summary: 'Bottom line:',
    summaryText: 'Hubstaff is built to monitor remote workers at a computer (screenshots, productivity). GeoTapp is built to document field work: reports in which every later change is detectable, with the position at clock-in, proof photos and independent verification by the client. And it does not track continuously, which matters in the Italian context.',
    noteTitle: 'Important note for the Italian market',
    noteText: 'Continuous GPS tracking and capturing employee screenshots fall within Art. 4 of the Workers\' Statute and require a union agreement or authorisation from the Labour Inspectorate. GeoTapp is designed to stay outside it: it records the position only when the worker clocks in, never continuously, and has the notice signed in the app before the first clock-in.',
    features: 'Key features comparison', feat: 'Feature', diff: 'Opposite orientations',
    cta: 'Want to see GeoTapp in action?',
    ctaDesc: 'Try it on a real job: 14 days free, no credit card.',
    ctaBtn: 'Start the free trial',
    geo: ['Sealed report to show the client','Position only at clock-in, never continuously','Built to stay within the GDPR\'s limits','Designed for cleaning, maintenance, security, installers','The operator is not watched: the work is sealed'],
    comp: ['Designed to monitor remote workers at a computer','Continuous GPS and automatic screenshots','Under the GDPR, continuous monitoring has to be assessed case by case','No report the client can verify','Geared to productivity, not to proof of the work'],
    footnote: '* By law (Art. 13 GDPR and, in Italy, Art. 4 of the Workers\' Statute), every employee must be informed before being geolocated. If the software leaves this step to the employer, the risk stays with them. GeoTapp prepares the personalised notice, has it signed for acknowledgement in the app and does not let staff clock in until it is signed.',
  },
  de: {
    badge: 'App-Vergleich', h1sub: 'Siegel oder Überwachung?',
    desc: 'Hubstaff überwacht Remote-Mitarbeiter mit Screenshots und GPS. GeoTapp versiegelt jeden Einsatz mit Nachweisen, die der Auftraggeber überprüfen kann. Verschiedene Ausrichtungen, verschiedene Branchen.',
    summary: 'Kurz gesagt:',
    summaryText: 'Hubstaff ist dafür gedacht, Remote-Mitarbeiter am Computer zu überwachen (Screenshots, Produktivität). GeoTapp ist dafür gedacht, die Arbeit im Außendienst zu dokumentieren: Berichte, in denen jede spätere Änderung erkennbar ist, mit Position beim Stempeln, Nachweisfotos und unabhängiger Überprüfung durch den Auftraggeber. Und es verfolgt nicht durchgehend, was im italienischen Kontext ins Gewicht fällt.',
    noteTitle: 'Wichtiger Hinweis für den italienischen Markt',
    noteText: 'Die durchgehende Überwachung der GPS-Position und Screenshots von Mitarbeitern fallen unter Art. 4 des italienischen Arbeitnehmerstatuts und erfordern eine Vereinbarung mit der Gewerkschaft oder eine Genehmigung der Arbeitsaufsicht. GeoTapp ist so gebaut, dass es außerhalb davon bleibt: Es erfasst die Position nur, wenn der Mitarbeiter stempelt, nie durchgehend, und lässt die Information vor dem ersten Stempeln in der App unterschreiben.',
    features: 'Vergleich der wichtigsten Funktionen', feat: 'Funktion', diff: 'Gegensätzliche Ausrichtungen',
    cta: 'Möchten Sie GeoTapp in Aktion sehen?',
    ctaDesc: 'Testen Sie es an einem echten Einsatz: 14 Tage kostenlos, keine Kreditkarte.',
    ctaBtn: 'Kostenlos testen',
    geo: ['Versiegelter Bericht zum Vorlegen beim Auftraggeber','Position nur beim Stempeln, nie durchgehend','Gebaut, um innerhalb der Grenzen der DSGVO zu bleiben','Gedacht für Reinigung, Wartung, Sicherheit, Installateure','Der Mitarbeiter wird nicht überwacht: Versiegelt wird die Arbeit'],
    comp: ['Gedacht zur Überwachung von Remote-Mitarbeitern am Computer','Durchgehendes GPS und automatische Screenshots','Nach der DSGVO muss durchgehende Überwachung im Einzelfall geprüft werden','Kein Bericht, den der Auftraggeber überprüfen kann','Auf Produktivität ausgerichtet, nicht auf den Arbeitsnachweis'],
    footnote: '* Nach geltendem Recht (Art. 13 DSGVO und in Italien Art. 4 des Arbeitnehmerstatuts) muss jeder Mitarbeiter informiert werden, bevor er geortet wird. Überlässt die Software diesen Schritt dem Arbeitgeber, bleibt das Risiko bei ihm. GeoTapp erstellt die personalisierte Information, lässt sie in der App zur Kenntnisnahme unterschreiben und lässt erst danach das Stempeln zu.',
  },
  fr: {
    badge: 'Comparatif d\'applis',
    h1sub: 'sceau ou surveillance ?',
    desc: 'Hubstaff surveille les télétravailleurs avec des copies d\'écran et le GPS. GeoTapp scelle chaque intervention avec des preuves que le client peut vérifier. Des orientations différentes, des métiers différents.',
    summary: 'En résumé :',
    summaryText: 'Hubstaff est pensé pour surveiller des télétravailleurs sur ordinateur (copies d\'écran, productivité). GeoTapp est pensé pour documenter le travail sur le terrain : des rapports où toute modification ultérieure est détectable, avec la position au pointage, des photos de preuve et une vérification indépendante par le client. Et il ne trace pas en continu, ce qui pèse dans le contexte italien.',
    noteTitle: 'Note importante pour le marché italien',
    noteText: 'Le suivi continu de la position GPS et la capture d\'écran des salariés relèvent de l\'art. 4 du Statut des travailleurs italien et exigent un accord syndical ou l\'autorisation de l\'Inspection du travail. GeoTapp est conçu pour rester en dehors de ce cadre : il relève la position uniquement quand le salarié pointe, jamais en continu, et fait signer l\'information dans l\'app avant le premier pointage.',
    features: 'Comparaison des fonctionnalités clés',
    feat: 'Fonctionnalité',
    diff: 'Des orientations opposées',
    cta: 'Envie de voir GeoTapp en action ?',
    ctaDesc: 'Essayez-le sur une intervention réelle : 14 jours gratuits, sans carte bancaire.',
    ctaBtn: 'Commencer l\'essai gratuit',
    geo: ['Rapport scellé à montrer au client','Position uniquement au pointage, jamais en continu','Conçu pour rester dans le cadre du RGPD','Pensé pour le nettoyage, la maintenance, la sécurité, les installateurs','L\'opérateur n\'est pas surveillé : c\'est le travail qui est scellé'],
    comp: ['Conçu pour surveiller des télétravailleurs sur ordinateur','GPS continu et copies d\'écran automatiques','Avec le RGPD, le suivi continu doit être évalué au cas par cas','Aucun rapport vérifiable par le client','Orienté productivité, pas preuve du travail'],
    footnote: '* Selon la loi (art. 13 du RGPD et, en Italie, art. 4 du Statut des travailleurs), chaque salarié doit être informé avant d\'être géolocalisé. Si le logiciel laisse cette étape à l\'employeur, le risque lui reste. GeoTapp prépare l\'information personnalisée, la fait signer pour prise de connaissance dans l\'app et ne laisse pas pointer tant qu\'elle n\'est pas signée.',
  },
  es: {
    badge: 'Comparativa de apps', h1sub: '¿sellado o vigilancia?',
    desc: 'Hubstaff vigila a los trabajadores remotos con capturas de pantalla y GPS. GeoTapp sella cada intervención con pruebas verificables por el cliente. Orientaciones distintas, sectores distintos.',
    summary: 'En resumen:',
    summaryText: 'Hubstaff está pensado para vigilar a trabajadores digitales remotos (capturas de pantalla, productividad). GeoTapp está pensado para sellar a operarios físicos en campo: informes cuya modificación es detectable, con GPS real, pruebas fotográficas y verificación independiente por el cliente. Además, Hubstaff plantea cuestiones de conformidad con el RGPD en el contexto italiano que GeoTapp resuelve por diseño.',
    noteTitle: 'Nota importante para el mercado italiano',
    noteText: 'El seguimiento continuo de la posición GPS y la captura de capturas de pantalla de los empleados entran en el ámbito del art. 4 del Estatuto de los Trabajadores y requieren un acuerdo sindical o la autorización de la Inspección de Trabajo. GeoTapp está diseñado para ser conforme: rastrea solo durante el horario de trabajo activo y proporciona todos los modelos necesarios.',
    features: 'Comparación de funciones clave', feat: 'Función', diff: 'Orientaciones opuestas',
    cta: '¿Quieres ver GeoTapp en acción?',
    ctaDesc: 'Te mostramos cómo una intervención se convierte en una prueba verificable, en 20 minutos, sin compromiso.',
    ctaBtn: '¡Empieza gratis!',
    geo: ['Informe sellado: prueba defendible para el cliente','GPS verificado solo durante la intervención activa','Conforme al RGPD y a la autoridad italiana de protección de datos','Diseñado para sectores operativos italianos (limpieza, mantenimiento, seguridad)','El operario no es vigilado, el trabajo se sella'],
    comp: ['Diseñado para vigilar a trabajadores digitales remotos','GPS continuo y capturas de pantalla automáticas','Conformidad con el RGPD por verificar en el contexto italiano','Ningún informe verificable por el cliente','Orientado a la productividad, no a la prueba verificable'],
    footnote: '* Por ley (RGPD Art. 13), cada empleado debe firmar un aviso de privacidad antes de ser geolocalizado. La mayoría del software GPS no lo gestiona: el riesgo legal recae en el empleador. GeoTapp genera automáticamente el aviso personalizado, hace que el empleado lo firme digitalmente y bloquea el acceso GPS hasta que esté firmado. Ningún otro software del mercado lo hace.',
  },
  pt: {
    badge: 'Comparativo de apps', h1sub: 'selagem ou vigilância?',
    desc: 'A Hubstaff vigia os trabalhadores remotos com capturas de ecrã e GPS. A GeoTapp sela cada intervenção com provas verificáveis pelo cliente. Orientações diferentes, setores diferentes.',
    summary: 'Em resumo:',
    summaryText: 'A Hubstaff foi pensada para vigiar trabalhadores digitais remotos (capturas de ecrã, produtividade). A GeoTapp foi pensada para selar operadores físicos no terreno: relatórios cuja alteração é detetável, com GPS real, provas fotográficas e verificação independente pelo cliente. Além disso, a Hubstaff levanta questões de conformidade com o RGPD no contexto italiano que a GeoTapp resolve por conceção.',
    noteTitle: 'Nota importante para o mercado italiano',
    noteText: 'A monitorização contínua da posição GPS e a captura de capturas de ecrã dos trabalhadores enquadram-se no âmbito do art. 4 do Estatuto dos Trabalhadores e exigem um acordo sindical ou a autorização da Inspeção do Trabalho. A GeoTapp foi concebida para ser conforme: rastreia apenas durante o horário de trabalho ativo e fornece todos os modelos necessários.',
    features: 'Comparação das funcionalidades-chave', feat: 'Funcionalidade', diff: 'Orientações opostas',
    cta: 'Quer ver a GeoTapp em ação?',
    ctaDesc: 'Mostramos-lhe como uma intervenção se torna uma prova verificável, em 20 minutos, sem compromisso.',
    ctaBtn: 'Comece grátis!',
    geo: ['Relatório selado: prova defensável para o cliente','GPS verificado apenas durante a intervenção ativa','Conforme o RGPD e a autoridade italiana de proteção de dados','Concebido para setores operacionais italianos (limpeza, manutenção, segurança)','O operador não é vigiado, o trabalho é selado'],
    comp: ['Concebido para vigiar trabalhadores digitais remotos','GPS contínuo e capturas de ecrã automáticas','Conformidade com o RGPD a verificar no contexto italiano','Nenhum relatório verificável pelo cliente','Orientado para a produtividade, não para a prova verificável'],
    footnote: '* Por lei (RGPD Art. 13), cada trabalhador deve assinar um aviso de privacidade antes de ser geolocalizado. A maioria do software GPS não trata disto: o risco legal fica com o empregador. A GeoTapp gera automaticamente o aviso personalizado, fá-lo assinar digitalmente pelo trabalhador e bloqueia o acesso GPS até estar assinado. Nenhum outro software no mercado o faz.',
  },
  nl: {
    badge: 'App-vergelijking',
    h1sub: 'verzegeling of monitoring?',
    desc: 'Hubstaff monitort medewerkers op afstand met schermafbeeldingen en gps. GeoTapp verzegelt elke klus met bewijs dat de opdrachtgever kan controleren. Verschillende uitgangspunten, verschillende sectoren.',
    summary: 'Kort gezegd:',
    summaryText: 'Hubstaff is bedoeld om medewerkers op afstand achter de computer te monitoren (schermafbeeldingen, productiviteit). GeoTapp is bedoeld om het werk in het veld te documenteren: rapporten waarin elke latere wijziging zichtbaar is, met locatie bij de registratie, bewijsfoto\'s en onafhankelijke controle door de opdrachtgever. En het volgt niet doorlopend, wat in de Italiaanse context zwaar weegt.',
    noteTitle: 'Belangrijke opmerking voor de Italiaanse markt',
    noteText: 'Doorlopende monitoring van de gps-locatie en het maken van schermafbeeldingen van werknemers vallen onder artikel 4 van het Italiaanse arbeidsstatuut en vragen een akkoord met de vakbond of een vergunning van de arbeidsinspectie. GeoTapp is ontworpen om daarbuiten te blijven: het legt de locatie alleen vast wanneer de medewerker registreert, nooit doorlopend, en laat de privacyverklaring in de app ondertekenen vóór de eerste registratie.',
    features: 'Vergelijking van de belangrijkste functies',
    feat: 'Functie',
    diff: 'Tegengestelde uitgangspunten',
    cta: 'Wilt u GeoTapp in actie zien?',
    ctaDesc: 'Probeer het op een echte klus: 14 dagen gratis, zonder creditcard.',
    ctaBtn: 'Start de gratis proefperiode',
    geo: ['Verzegeld rapport om aan de opdrachtgever te tonen','Locatie alleen bij het registreren, nooit doorlopend','Gebouwd om binnen de kaders van de AVG te blijven','Ontworpen voor schoonmaak, onderhoud, beveiliging, installateurs','De medewerker wordt niet bewaakt: het werk wordt verzegeld'],
    comp: ['Ontworpen om medewerkers op afstand achter de computer te monitoren','Doorlopende gps en automatische schermafbeeldingen','Onder de AVG moet doorlopende monitoring geval per geval worden beoordeeld','Geen rapport dat de opdrachtgever kan controleren','Gericht op productiviteit, niet op bewijs van het werk'],
    footnote: '* Volgens de wet (art. 13 AVG en, in Italië, art. 4 van het arbeidsstatuut) moet elke werknemer worden geïnformeerd voordat hij wordt gelokaliseerd. Laat de software deze stap aan de verantwoordelijke over, dan blijft het risico bij hem. GeoTapp maakt de persoonlijke privacyverklaring klaar, laat die in de app voor kennisgeving ondertekenen en laat niet registreren totdat ze is ondertekend.',
  },
  da: {
    badge: 'App-sammenligning', h1sub: 'forsegling eller overvågning?',
    desc: 'Hubstaff overvåger fjernmedarbejdere med skærmbilleder og GPS. GeoTapp forsegler hver opgave med beviser, kunden kan verificere. Forskellige orienteringer, forskellige brancher.',
    summary: 'Kort sagt:',
    summaryText: 'Hubstaff er beregnet til at overvåge digitale fjernmedarbejdere (skærmbilleder, produktivitet). GeoTapp er beregnet til at forsegle fysiske medarbejdere i marken: rapporter hvor enhver ændring kan opdages, med ægte GPS, fotobeviser og uafhængig verificering af kunden. Desuden rejser Hubstaff i den italienske kontekst spørgsmål om GDPR-overholdelse, som GeoTapp løser ved sit design.',
    noteTitle: 'Vigtig bemærkning for det italienske marked',
    noteText: 'Kontinuerlig sporing af GPS-position og optagelse af skærmbilleder af medarbejdere falder inden for anvendelsesområdet for art. 4 i arbejderstatutten og kræver en fagforeningsaftale eller tilladelse fra Arbejdstilsynet. GeoTapp er udviklet til at være i overensstemmelse: det sporer kun i den aktive arbejdstid og leverer alle nødvendige skabeloner.',
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion', diff: 'Modsatte orienteringer',
    cta: 'Vil du se GeoTapp i aktion?',
    ctaDesc: 'Vi viser dig, hvordan en opgave bliver til verificerbart bevis, på 20 minutter, uforpligtende.',
    ctaBtn: 'Kom gratis i gang!',
    geo: ['Forseglet rapport: forsvarligt bevis for kunden','GPS kun verificeret under den aktive opgave','GDPR- og italienske datatilsyns-kompatibel','Udviklet til italienske driftsbrancher (rengøring, vedligeholdelse, sikkerhed)','Medarbejderen overvåges ikke, arbejdet forsegles'],
    comp: ['Udviklet til at overvåge digitale fjernmedarbejdere','Kontinuerlig GPS og automatiske skærmbilleder','GDPR-overholdelse, der skal verificeres i den italienske kontekst','Ingen rapporter, kunden kan verificere','Produktivitetsorienteret, ikke fokuseret på verificerbart bevis'],
    footnote: '* Ifølge loven (GDPR art. 13) skal hver medarbejder underskrive en privatlivserklæring, før vedkommende geolokaliseres. De fleste GPS-programmer håndterer ikke dette: den juridiske risiko forbliver hos arbejdsgiveren. GeoTapp genererer automatisk den personlige erklæring, får den underskrevet digitalt af medarbejderen og blokerer GPS-adgangen, indtil den er underskrevet. Ingen anden software på markedet gør dette.',
  },
  sv: {
    badge: 'App-jämförelse', h1sub: 'försegling eller övervakning?',
    desc: 'Hubstaff övervakar distansarbetare med skärmdumpar och GPS. GeoTapp förseglar varje uppdrag med bevis som kunden kan verifiera. Olika inriktningar, olika branscher.',
    summary: 'Kort sagt:',
    summaryText: 'Hubstaff är till för att övervaka digitala distansarbetare (skärmdumpar, produktivitet). GeoTapp är till för att försegla fysisk personal ute i fält: rapporter där varje ändring är spårbar, med äkta GPS, fotobevis och oberoende verifiering av kunden. Dessutom väcker Hubstaff i den italienska kontexten frågor om GDPR-efterlevnad som GeoTapp löser genom sin design.',
    noteTitle: 'Viktig anmärkning för den italienska marknaden',
    noteText: 'Kontinuerlig spårning av GPS-position och tagning av skärmdumpar av anställda omfattas av art. 4 i arbetstagarstadgan och kräver ett fackligt avtal eller tillstånd från Arbetsmiljöverket. GeoTapp är utformat för att vara förenligt: det spårar endast under den aktiva arbetstiden och tillhandahåller alla nödvändiga mallar.',
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion', diff: 'Motsatta inriktningar',
    cta: 'Vill du se GeoTapp i praktiken?',
    ctaDesc: 'Vi visar hur ett uppdrag blir verifierbart bevis, på 20 minuter, utan förpliktelser.',
    ctaBtn: 'Kom igång gratis!',
    geo: ['Förseglad rapport: försvarbart bevis för kunden','GPS verifierat endast under det aktiva uppdraget','GDPR- och italienska dataskyddsmyndigheten-kompatibel','Utformat för italienska operativa branscher (städ, underhåll, säkerhet)','Personalen övervakas inte, arbetet förseglas'],
    comp: ['Utformat för att övervaka digitala distansarbetare','Kontinuerlig GPS och automatiska skärmdumpar','GDPR-efterlevnad att verifiera i den italienska kontexten','Inga rapporter som kunden kan verifiera','Produktivitetsinriktat, inte inriktat på verifierbart bevis'],
    footnote: '* Enligt lag (GDPR art. 13) måste varje anställd underteckna ett integritetsmeddelande innan han eller hon geolokaliseras. De flesta GPS-program hanterar inte detta: den juridiska risken stannar hos arbetsgivaren. GeoTapp genererar automatiskt det personliga meddelandet, låter den anställde signera det digitalt och blockerar GPS-åtkomsten tills det är signerat. Ingen annan programvara på marknaden gör detta.',
  },
  nb: {
    badge: 'App-sammenligning', h1sub: 'forsegling eller overvåking?',
    desc: 'Hubstaff overvåker fjernarbeidere med skjermbilder og GPS. GeoTapp forsegler hvert oppdrag med bevis som oppdragsgiveren kan verifisere. Forskjellige orienteringer, forskjellige bransjer.',
    summary: 'Kort sagt:',
    summaryText: 'Hubstaff er laget for å overvåke digitale fjernarbeidere (skjermbilder, produktivitet). GeoTapp er laget for å forsegle fysiske ansatte ute i felt: rapporter hvor enhver endring er sporbar, med ekte GPS, fotobevis og uavhengig verifisering av oppdragsgiveren. I tillegg reiser Hubstaff i den italienske konteksten spørsmål om GDPR-samsvar som GeoTapp løser gjennom sin design.',
    noteTitle: 'Viktig merknad for det italienske markedet',
    noteText: 'Kontinuerlig sporing av GPS-posisjon og det å ta skjermbilder av ansatte faller inn under art. 4 i arbeidstakerstatutten og krever en fagforeningsavtale eller tillatelse fra Arbeidstilsynet. GeoTapp er utviklet for å være i samsvar: det sporer bare i den aktive arbeidstiden og leverer alle nødvendige maler.',
    features: 'Sammenligning av nøkkelfunksjoner', feat: 'Funksjon', diff: 'Motsatte orienteringer',
    cta: 'Vil du se GeoTapp i aksjon?',
    ctaDesc: 'Vi viser deg hvordan et oppdrag blir til verifiserbart bevis, på 20 minutter, uforpliktende.',
    ctaBtn: 'Kom i gang gratis!',
    geo: ['Forseglet rapport: forsvarlig bevis for oppdragsgiveren','GPS verifisert bare under det aktive oppdraget','GDPR- og italiensk datatilsyn-kompatibel','Utviklet for italienske driftsbransjer (renhold, vedlikehold, sikkerhet)','Den ansatte overvåkes ikke, arbeidet forsegles'],
    comp: ['Utviklet for å overvåke digitale fjernarbeidere','Kontinuerlig GPS og automatiske skjermbilder','GDPR-samsvar som må verifiseres i den italienske konteksten','Ingen rapporter som oppdragsgiveren kan verifisere','Produktivitetsorientert, ikke orientert mot verifiserbart bevis'],
    footnote: '* Ifølge loven (GDPR art. 13) må hver ansatt signere en personvernerklæring før vedkommende geolokaliseres. De fleste GPS-programmer håndterer ikke dette: den juridiske risikoen blir hos arbeidsgiveren. GeoTapp genererer automatisk den personlige erklæringen, lar den ansatte signere den digitalt og blokkerer GPS-tilgangen til den er signert. Ingen annen programvare på markedet gjør dette.',
  },
  ru: {
    badge: 'Сравнение приложений', h1sub: 'опечатывание или слежка?',
    desc: 'Hubstaff следит за удалёнными сотрудниками с помощью снимков экрана и GPS. GeoTapp запечатывает каждый выезд доказательствами, которые проверяет заказчик. Разные направленности, разные отрасли.',
    summary: 'Коротко:',
    summaryText: 'Hubstaff рассчитан на слежку за цифровыми удалёнными сотрудниками (снимки экрана, производительность). GeoTapp рассчитан на опечатывание физических сотрудников на выезде: отчёты, в которых любое изменение заметно, с настоящим GPS, фотодоказательства и независимая проверка заказчиком. Кроме того, в итальянском контексте Hubstaff вызывает вопросы соответствия GDPR, которые GeoTapp решает на уровне дизайна.',
    noteTitle: 'Важное замечание для итальянского рынка',
    noteText: 'Непрерывное отслеживание GPS-позиции и съёмка снимков экрана сотрудников подпадают под ст. 4 Статута трудящихся и требуют профсоюзного соглашения или разрешения Инспекции труда. GeoTapp спроектирован так, чтобы соответствовать требованиям: он отслеживает только в активное рабочее время и предоставляет все необходимые шаблоны.',
    features: 'Сравнение ключевых функций', feat: 'Функция', diff: 'Противоположные направленности',
    cta: 'Хотите увидеть GeoTapp в действии?',
    ctaDesc: 'Покажем, как работа превращается в проверяемое доказательство, за 20 минут, без обязательств.',
    ctaBtn: 'Начните бесплатно!',
    geo: ['Опечатанный отчёт: защитимое доказательство для заказчика','GPS проверяется только во время активного выезда','Соответствие GDPR и итальянскому регулятору','Разработано для итальянских операционных отраслей (клининг, техобслуживание, охрана)','За сотрудником не следят, работа опечатывается'],
    comp: ['Разработано для слежки за цифровыми удалёнными сотрудниками','Непрерывный GPS и автоматические снимки экрана','Соответствие GDPR требует проверки в итальянском контексте','Нет отчётов, проверяемых заказчиком','Ориентация на производительность, а не на проверяемое доказательство'],
    footnote: '* По закону (GDPR ст. 13) каждый сотрудник должен подписать уведомление о конфиденциальности перед геолокацией. Большинство GPS-программ это не обеспечивают: юридический риск остаётся на работодателе. GeoTapp автоматически создаёт персональное уведомление, даёт сотруднику подписать его цифровой подписью и блокирует доступ к GPS, пока оно не подписано. Ни одна другая программа на рынке этого не делает.',
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

export default async function GeoTappVsHubstaffPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = localizeEnglishDeep(T[locale] ?? T.en, locale);
  const faqItems = localizeEnglishDeep(FAQ[locale] ?? FAQ.en, locale);
  const labels = localizeEnglishDeep(ROWS_LABELS[locale] ?? ROWS_LABELS.en, locale);
  const rows = labels.map((feature, i) => ({ feature, geotapp: ROWS_GEO[i], competitor: ROWS_COMP[i] }));

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  const breadcrumb = buildComparisonBreadcrumb({ locale, pathname: PATHNAME, competitorName: 'Hubstaff' });
  const meta = localizeEnglishDeep(META[locale] ?? META.en, locale);
  const article = buildComparisonArticle({ locale, pathname: PATHNAME, headline: meta.title, description: meta.description, datePublished: ARTICLE_DATE_PUBLISHED, dateModified: ARTICLE_DATE_MODIFIED });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ComparisonPageL
        locale={locale}
        competitorName="Hubstaff"
        competitorId="hubstaff"
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
        note={{ title: t.noteTitle, text: t.noteText }}
        rows={rows}
        faqItems={faqItems}
        ctaTitle={t.cta}
        ctaDesc={t.ctaDesc}
        ctaBtn={t.ctaBtn}
      />
    </>
  );
}
