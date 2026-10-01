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
  es: { title: 'GeoTapp vs Hubstaff - Comparativa 2026 | GeoTapp', description: 'GeoTapp vs Hubstaff: ¿cuál elegir para empresas con operarios en campo? Comparativa de posición al fichar, informes sellados, fotos de prueba y privacidad de los empleados.' },
  pt: { title: 'GeoTapp vs Hubstaff - Comparação 2026 | GeoTapp', description: 'GeoTapp vs Hubstaff: qual escolher para operadores no terreno? Posição ao picar o ponto, relatórios selados, fotos de prova e privacidade dos trabalhadores.' },
  da: { title: 'GeoTapp vs Hubstaff - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Hubstaff: hvilken skal du vælge til medarbejdere i marken? Sammenligning af position ved stempling, forseglede rapporter og privatliv.' },
  sv: { title: 'GeoTapp vs Hubstaff - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs Hubstaff: vilket ska du välja för företag med fältpersonal? Jämförelse av position vid instämpling, förseglade rapporter, bevisfoton och de anställdas integritet.' },
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
    { q: '¿Cuál es la diferencia principal entre GeoTapp y Hubstaff?', a: 'Hubstaff es un sistema de monitorización de la productividad para trabajadores remotos: rastrea el GPS y captura pantallas. GeoTapp es un sistema de prueba verificable de las intervenciones: produce informes sellados con posición, hora y fotos de prueba que el cliente verifica por sí mismo. Enfoques muy distintos.' },
    { q: '¿Hubstaff encaja con el RGPD en materia de geolocalización?', a: 'Hubstaff nace en Estados Unidos para la monitorización continua; en Europa, ese modelo debe valorarse caso por caso, sobre todo teniendo en cuenta las indicaciones de las autoridades de protección de datos sobre el control de los empleados. GeoTapp está construido para moverse dentro de los límites del RGPD: posición solo al fichar, nunca de forma continua, e información para los empleados firmada en la app antes de fichar.' },
    { q: '¿GeoTapp o Hubstaff para empresas de limpieza y mantenimiento?', a: 'GeoTapp está pensado específicamente para el sector operativo: empresas de limpieza, mantenimiento, instaladores, seguridad privada. Ofrece informes verificables por el cliente y exportación de las horas para la nómina. Hubstaff está pensado para equipos remotos que trabajan con el ordenador, no para operarios en campo con clientes a quienes mostrar el trabajo.' },
    { q: 'Hubstaff hace capturas de pantalla de los empleados. GeoTapp no, ¿es una limitación?', a: 'En muchos países, la captura automática de pantalla de los empleados se considera un instrumento de control a distancia que puede requerir acuerdo con los representantes de los trabajadores (en Italia, art. 4 del Estatuto de los Trabajadores). GeoTapp no monitoriza a los empleados: registra la posición solo cuando fichan (entrada, pausas, salida) y entre un fichaje y otro no registra nada de forma automática. Corresponde al empleador valorar si en su caso hacen falta acuerdo o autorización.' },
  ],
  pt: [
    { q: 'Qual é a diferença principal entre a GeoTapp e a Hubstaff?', a: 'A Hubstaff é um sistema de monitorização da produtividade para trabalhadores remotos: rastreia o GPS e captura imagens do ecrã. A GeoTapp é um sistema de prova verificável das intervenções: produz relatórios selados com posição, hora e fotos de prova que o cliente verifica por si. Orientações muito diferentes.' },
    { q: 'A Hubstaff está de acordo com o RGPD em matéria de geolocalização?', a: 'A Hubstaff nasceu nos Estados Unidos para a monitorização contínua; na Europa, esse modelo deve ser avaliado caso a caso, sobretudo tendo em conta as orientações das autoridades de proteção de dados sobre o controlo dos trabalhadores. A GeoTapp foi construída para se manter dentro dos limites do RGPD: posição apenas ao picar o ponto, nunca de forma contínua, e informação aos trabalhadores assinada na app antes de picar o ponto.' },
    { q: 'GeoTapp ou Hubstaff para empresas de limpeza e manutenção?', a: 'A GeoTapp foi pensada especificamente para o setor operacional: empresas de limpeza, manutenção, instaladores, segurança privada. Oferece relatórios verificáveis pelo cliente e exportação das horas para o processamento salarial. A Hubstaff foi pensada para equipas remotas que trabalham ao computador, não para operadores no terreno com clientes a quem mostrar o trabalho.' },
    { q: 'A Hubstaff faz capturas de ecrã dos trabalhadores. A GeoTapp não, é uma limitação?', a: 'Em muitos países, a captura automática de ecrã dos trabalhadores é considerada um meio de controlo à distância que pode exigir acordo com os representantes dos trabalhadores. A GeoTapp não monitoriza os trabalhadores: regista a posição apenas quando picam o ponto (entrada, pausas, saída) e, entre uma picagem e outra, não regista nada de forma automática. Cabe ao empregador avaliar se no seu caso são necessários acordo ou autorização.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Hubstaff?', a: 'Hubstaff is een systeem voor het monitoren van de productiviteit van medewerkers op afstand: het volgt de gps en maakt schermafbeeldingen. GeoTapp is een systeem voor controleerbaar bewijs van klussen: het maakt verzegelde rapporten met locatie, tijd en bewijsfoto\'s die de opdrachtgever zelf controleert. Heel verschillende uitgangspunten.' },
    { q: 'Is Hubstaff geschikt voor de AVG bij geolocatie?', a: 'Hubstaff is in de Verenigde Staten ontstaan voor doorlopende monitoring; in Europa, en in het bijzonder met de aanwijzingen van de Italiaanse toezichthouder (Garante Privacy) over controle op werknemers, moet dat model geval per geval worden beoordeeld. GeoTapp is gebouwd om binnen de kaders van de AVG te blijven: locatie alleen bij het registreren, nooit doorlopend, en een privacyverklaring voor de werknemers die in de app wordt ondertekend voordat ze registreren.' },
    { q: 'GeoTapp of Hubstaff voor schoonmaak- en onderhoudsbedrijven?', a: 'GeoTapp is specifiek ontworpen voor de Italiaanse operationele sector: schoonmaakbedrijven, onderhoud, installateurs, particuliere beveiliging. Het biedt rapporten die de opdrachtgever kan controleren en export van de uren voor de salarissen. Hubstaff is bedoeld voor teams op afstand die achter de computer werken, niet voor medewerkers in het veld met klanten aan wie ze het werk moeten tonen.' },
    { q: 'Hubstaff maakt schermafbeeldingen van de werknemers. GeoTapp niet, is dat een beperking?', a: 'In Italië wordt de automatische schermafbeelding van werknemers beschouwd als een instrument voor controle op afstand waarvoor een akkoord met de vakbond nodig is (art. 4 van het arbeidsstatuut). GeoTapp monitort de werknemers niet: het legt de locatie alleen vast wanneer ze registreren (aankomst, pauzes, vertrek) en tussen twee registraties in legt het niets automatisch vast. Het is aan de werkgever om te beoordelen of in zijn geval een akkoord of vergunning nodig is.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Hubstaff?', a: 'Hubstaff er et system til overvågning af produktivitet for fjernarbejdere: det sporer GPS og tager skærmbilleder. GeoTapp er et system til verificerbar dokumentation af opgaver: det laver forseglede rapporter med position, tid og bevisfotos, som kunden selv verificerer. Meget forskellige tilgange.' },
    { q: 'Passer Hubstaff med GDPR for geolokalisering?', a: 'Hubstaff er skabt i USA til løbende overvågning; i Europa, og især med Datatilsynets retningslinjer for kontrol med medarbejdere, skal den model vurderes fra sag til sag. GeoTapp er bygget til at holde sig inden for rammerne af GDPR: position kun ved stempling, aldrig løbende, og en information til medarbejderne, som underskrives i appen, før man stempler.' },
    { q: 'GeoTapp eller Hubstaff til rengøringsfirmaer og vedligeholdelse?', a: 'GeoTapp er lavet til brancher med arbejde i marken: rengøringsfirmaer, vedligeholdelse, installatører, vagtselskaber. Det giver rapporter, som kunden selv kan verificere, og eksport af timerne til lønbehandling. Hubstaff er lavet til fjernteams, der arbejder ved computeren, ikke til medarbejdere i marken, der skal vise kunden deres arbejde.' },
    { q: 'Hubstaff tager skærmbilleder af medarbejderne. GeoTapp gør ikke, er det en begrænsning?', a: 'Automatiske skærmbilleder af medarbejdere er kontrol på afstand, som i mange lande kræver en forudgående vurdering og klar information til medarbejderne; for Danmarks vedkommende kan Datatilsynet svare på, hvad der gælder. GeoTapp overvåger ikke medarbejderne: det registrerer kun positionen, når de stempler (ind, pauser, ud), og mellem to stemplinger registrerer det intet automatisk. Det er arbejdsgiverens opgave at vurdere, hvad der gælder i det konkrete tilfælde.' },
  ],
  sv: [
    { q: 'Vad är den största skillnaden mellan GeoTapp och Hubstaff?', a: 'Hubstaff är ett system för produktivitetsövervakning av distansarbetare: det spårar GPS och tar skärmdumpar. GeoTapp är ett system för verifierbara arbetsbevis: det tar fram förseglade rapporter med plats, tid och bevisfoton som kunden själv verifierar. Mycket olika inriktningar.' },
    { q: 'Går Hubstaff att använda enligt GDPR för geolokalisering?', a: 'Hubstaff föddes i USA för löpande övervakning; i Europa, och särskilt med tillsynsmyndigheternas riktlinjer om kontroll av anställda, måste den modellen bedömas från fall till fall. GeoTapp är byggt för att hålla sig inom GDPR:s gränser: position bara vid instämpling, aldrig löpande, och en information till den anställde som signeras i appen innan man stämplar in.' },
    { q: 'GeoTapp eller Hubstaff för städ- och underhållsföretag?', a: 'GeoTapp är särskilt gjort för branscher med arbete i fält: städföretag, underhåll, installatörer, bevakning. Det ger rapporter som kunden kan verifiera och export av timmarna till lönehantering. Hubstaff är byggt för distansteam som arbetar vid en dator, inte för fältpersonal som ska visa kunden sitt arbete.' },
    { q: 'Hubstaff tar skärmdumpar av de anställda. GeoTapp gör det inte: är det en begränsning?', a: 'Automatiska skärmdumpar av anställda är kontroll på distans som i många länder kräver en förhandsbedömning och tydlig information till de anställda; för Sveriges del kan IMY (Integritetsskyddsmyndigheten) svara på vad som gäller. GeoTapp övervakar inte de anställda: det registrerar bara positionen när de stämplar (in, rast, ut) och registrerar inget automatiskt mellan två instämplingar. Det är arbetsgivarens sak att bedöma vad som gäller i det enskilda fallet.' },
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
  es: ['Posición al fichar para intervenciones en campo','Informe sellado criptográficamente','Verificación independiente por parte del cliente','Pruebas fotográficas vinculadas a GPS y marca de tiempo','Posición solo al fichar','Sin monitorización continua de los empleados','App móvil Android/iOS','Mensajería interna propia','Panel de gestión del equipo','Exportación para el procesamiento de nóminas','Diseñado para el mercado europeo','Información sobre el GPS firmada en la app antes de fichar*'],
  pt: ['Posição ao picar o ponto para intervenções no terreno','Relatório selado criptograficamente','Verificação independente por parte do cliente','Provas fotográficas ligadas ao GPS e à data/hora','Posição apenas ao picar o ponto','Sem monitorização contínua dos trabalhadores','App móvel Android/iOS','Mensagens internas próprias','Painel de gestão da equipa','Exportação para processamento salarial','Concebida para o mercado europeu','Informação sobre o GPS assinada na app antes de picar o ponto*'],
  nl: ['Locatie bij de registratie voor klussen in het veld','Cryptografisch verzegeld rapport','Onafhankelijke controle door de opdrachtgever','Fotobewijzen gekoppeld aan gps en tijdstempel','Locatie alleen bij de registratie','Geen doorlopende monitoring van de werknemers','Mobiele app voor Android/iOS','Eigen interne berichten','Dashboard voor teambeheer','Export voor de salarisverwerking','Ontworpen voor de Europese markt','GPS-verklaring ondertekend in de app vóór het registreren*'],
  da: ['Position ved stempling til opgaver i marken','Kryptografisk forseglet rapport','Uafhængig verificering af kunden','Bevisfotos knyttet til GPS og tidsstempel','Position kun ved stempling','Ingen løbende overvågning af medarbejderne','Mobilapp Android/iOS','Egen intern beskedfunktion','Dashboard til teamstyring','Eksport til lønbehandling','Lavet til det europæiske marked','GPS-information underskrevet i appen, før man stempler*'],
  sv: ['Position vid instämpling för uppdrag i fält','Kryptografiskt förseglad rapport','Oberoende verifiering av kunden','Bevisfoton kopplade till GPS och tidsstämpel','Position bara vid instämpling','Ingen löpande övervakning av de anställda','Mobilapp för Android/iOS','Inbyggd meddelandefunktion','Instrumentpanel för teamhantering','Export för lönehantering','Gjord för den europeiska marknaden','GPS-information signerad i appen innan man stämplar in*'],
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
    badge: 'Comparativa de apps', h1sub: '¿sello o monitorización?',
    desc: 'Hubstaff monitoriza a los trabajadores remotos con capturas de pantalla y GPS. GeoTapp sella cada intervención con pruebas verificables por el cliente. Enfoques distintos, sectores distintos.',
    summary: 'En resumen:',
    summaryText: 'Hubstaff está pensado para monitorizar a trabajadores remotos frente al ordenador (capturas de pantalla, productividad). GeoTapp está pensado para documentar el trabajo en campo: informes en los que cualquier modificación posterior es detectable, con posición al fichar, fotos de prueba y verificación independiente por parte del cliente. Y no rastrea de forma continua, algo que en Europa pesa.',
    noteTitle: 'Nota importante para el mercado europeo',
    noteText: 'La monitorización continua de la posición GPS y la captura de pantallas de los empleados pueden quedar sujetas a normas de control a distancia de los trabajadores (en Italia, art. 4 del Estatuto de los Trabajadores, con acuerdo sindical o autorización de la inspección de trabajo). GeoTapp está diseñado para quedar al margen: registra la posición solo cuando el trabajador ficha, nunca de forma continua, y hace firmar la información en la app antes del primer fichaje.',
    features: 'Comparación de funciones clave', feat: 'Función', diff: 'Enfoques opuestos',
    cta: '¿Quieres ver GeoTapp en acción?',
    ctaDesc: 'Pruébalo en una intervención real: 14 días gratis, sin tarjeta de crédito.',
    ctaBtn: 'Empezar prueba gratuita',
    geo: ['Informe sellado que mostrar al cliente','Posición solo cuando se ficha, nunca de forma continua','Construido para moverse dentro de los límites del RGPD','Pensado para limpieza, mantenimiento, seguridad e instaladores','El operario no es vigilado: se sella el trabajo'],
    comp: ['Pensado para monitorizar a trabajadores remotos frente al ordenador','GPS continuo y capturas de pantalla automáticas','Con el RGPD, la monitorización continua debe valorarse caso por caso','Ningún informe verificable por el cliente','Orientado a la productividad, no a la prueba del trabajo'],
    footnote: '* Por ley (art. 13 del RGPD y, en Italia, art. 4 del Estatuto de los Trabajadores), cada empleado debe ser informado antes de ser geolocalizado. Si el software deja este paso en manos del empleador, el riesgo sigue siendo suyo. GeoTapp prepara la información personalizada, la hace firmar en la app como constancia de lectura y no deja fichar hasta que esté firmada.',
  },
  pt: {
    badge: 'Comparação de apps', h1sub: 'selo ou monitorização?',
    desc: 'A Hubstaff monitoriza os trabalhadores remotos com capturas de ecrã e GPS. A GeoTapp sela cada intervenção com provas verificáveis pelo cliente. Orientações diferentes, setores diferentes.',
    summary: 'Em resumo:',
    summaryText: 'A Hubstaff foi pensada para monitorizar trabalhadores remotos ao computador (capturas de ecrã, produtividade). A GeoTapp foi pensada para documentar o trabalho no terreno: relatórios em que qualquer alteração posterior é detetável, com posição ao picar o ponto, fotos de prova e verificação independente por parte do cliente. E não rastreia de forma contínua, algo que na Europa pesa.',
    noteTitle: 'Nota importante para o mercado europeu',
    noteText: 'A monitorização contínua da posição GPS e a captura de ecrã dos trabalhadores podem ficar sujeitas às normas sobre o controlo à distância dos trabalhadores e às orientações da autoridade de proteção de dados. A GeoTapp foi concebida para ficar de fora: regista a posição apenas quando o trabalhador pica o ponto, nunca de forma contínua, e faz assinar a informação na app antes da primeira picagem.',
    features: 'Comparação das funcionalidades principais', feat: 'Funcionalidade', diff: 'Orientações opostas',
    cta: 'Quer ver a GeoTapp em ação?',
    ctaDesc: 'Experimente numa intervenção real: 14 dias grátis, sem cartão de crédito.',
    ctaBtn: 'Começar teste gratuito',
    geo: ['Relatório selado para mostrar ao cliente','Posição apenas quando se pica o ponto, nunca de forma contínua','Construída para se manter dentro dos limites do RGPD','Pensada para limpeza, manutenção, segurança e instaladores','O operador não é vigiado: sela-se o trabalho'],
    comp: ['Pensada para monitorizar trabalhadores remotos ao computador','GPS contínuo e capturas de ecrã automáticas','Com o RGPD, a monitorização contínua deve ser avaliada caso a caso','Nenhum relatório verificável pelo cliente','Orientada para a produtividade, não para a prova do trabalho'],
    footnote: '* Por lei (art. 13.º do RGPD), cada trabalhador deve ser informado antes de ser geolocalizado. Se o software deixa este passo ao empregador, o risco continua a ser dele. A GeoTapp prepara a informação personalizada, faz com que seja assinada na app como confirmação de leitura e não deixa picar o ponto enquanto não estiver assinada.',
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
    badge: 'App-sammenligning', h1sub: 'segl eller overvågning?',
    desc: 'Hubstaff overvåger fjernarbejdere med skærmbilleder og GPS. GeoTapp forsegler hver opgave med dokumentation, som kunden selv kan verificere. Forskellige tilgange, forskellige brancher.',
    summary: 'Kort sagt:',
    summaryText: 'Hubstaff er lavet til at overvåge fjernarbejdere ved computeren (skærmbilleder, produktivitet). GeoTapp er lavet til at dokumentere arbejdet i marken: rapporter, hvor enhver senere ændring kan opdages, med position ved stempling, bevisfotos og uafhængig verificering fra kundens side. Og det sporer ikke løbende.',
    noteTitle: 'Vigtig note om overvågning',
    noteText: 'Løbende overvågning af GPS-positionen og skærmbilleder af medarbejderne er indgribende kontrol, som skal vurderes nøje efter GDPR og de nationale regler; i Danmark kan Datatilsynet svare på, hvad der gælder. GeoTapp er bygget til at holde sig uden for den slags overvågning: det registrerer kun positionen, når medarbejderen stempler, aldrig løbende, og får informationen underskrevet i appen, før den første stempling.',
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion', diff: 'Modsatte tilgange',
    cta: 'Vil du se GeoTapp i aktion?',
    ctaDesc: 'Prøv det på en rigtig opgave: 14 dage gratis, uden kreditkort.',
    ctaBtn: 'Start gratis prøveperiode',
    geo: ['Forseglet rapport at vise kunden','Position kun ved stempling, aldrig løbende','Bygget til at holde sig inden for rammerne af GDPR','Lavet til rengøring, vedligeholdelse, vagt og installatører','Medarbejderen overvåges ikke: det er arbejdet, der forsegles'],
    comp: ['Lavet til at overvåge fjernarbejdere ved computeren','Løbende GPS og automatiske skærmbilleder','Med GDPR skal løbende overvågning vurderes fra sag til sag','Ingen rapport, som kunden kan verificere','Orienteret mod produktivitet, ikke dokumentation af arbejdet'],
    footnote: '* Ifølge loven (GDPR art. 13 og, i Italien, art. 4 i arbejdstagerloven, Statuto dei Lavoratori) skal hver medarbejder informeres, før vedkommende geolokaliseres. Overlader softwaren dette trin til arbejdsgiveren, er risikoen stadig arbejdsgiverens. GeoTapp forbereder den personlige information, får den underskrevet i appen som bekræftelse på, at den er læst, og lader ikke medarbejderen stemple, før den er underskrevet.',
  },
  sv: {
    badge: 'App-jämförelse', h1sub: 'förseglat bevis eller övervakning?',
    desc: 'Hubstaff övervakar distansarbetare med skärmdumpar och GPS. GeoTapp förseglar varje uppdrag med bevis som kunden kan verifiera. Olika inriktningar, olika branscher.',
    summary: 'Kort sagt:',
    summaryText: 'Hubstaff är byggt för att övervaka distansarbetare vid en dator (skärmdumpar, produktivitet). GeoTapp är byggt för att dokumentera fältarbete: rapporter där varje senare ändring går att upptäcka, med position vid instämpling, bevisfoton och kundens egen verifiering. Och det spårar inte löpande, vilket spelar roll för de anställdas integritet.',
    noteTitle: 'Viktig anmärkning om övervakning',
    noteText: 'Löpande GPS-övervakning och skärmdumpar av anställda är ingripande kontroll som måste bedömas noga enligt GDPR och nationella regler; i Sverige kan IMY (Integritetsskyddsmyndigheten) svara på vad som gäller. GeoTapp är byggt för att hålla sig utanför den sortens övervakning: det registrerar bara positionen när medarbetaren stämplar in, aldrig löpande, och låter informationen signeras i appen före den första instämplingen.',
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion', diff: 'Motsatta inriktningar',
    cta: 'Vill du se GeoTapp i praktiken?',
    ctaDesc: 'Prova på ett riktigt uppdrag: 14 dagar gratis, utan kreditkort.',
    ctaBtn: 'Starta den kostnadsfria provperioden',
    geo: ['Förseglad rapport att visa kunden','Position bara vid instämpling, aldrig löpande','Byggt för att hålla sig inom GDPR:s gränser','Gjort för städning, underhåll, bevakning och installatörer','Medarbetaren övervakas inte: arbetet förseglas'],
    comp: ['Byggt för att övervaka distansarbetare vid en dator','Löpande GPS och automatiska skärmdumpar','Enligt GDPR måste löpande övervakning bedömas från fall till fall','Ingen rapport som kunden kan verifiera','Inriktat på produktivitet, inte på bevis för arbetet'],
    footnote: '* Enligt lag (artikel 13 i GDPR) måste varje anställd informeras innan hen geolokaliseras. Om programvaran överlåter det steget åt arbetsgivaren ligger risken kvar hos arbetsgivaren. GeoTapp tar fram den personliga informationen, låter den anställde signera den som läst i appen och släpper inte till instämpling förrän den är signerad.',
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
