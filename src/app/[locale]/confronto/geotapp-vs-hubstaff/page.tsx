import type { Metadata } from 'next';
import { TrialCTALink } from '@/components/analytics/TrialCTALink';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-hubstaff/';
const ARTICLE_DATE_PUBLISHED = '2025-09-01';
const ARTICLE_DATE_MODIFIED = '2026-05-23';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs Hubstaff - Confronto 2025 | GeoTapp', description: 'GeoTapp vs Hubstaff: quale scegliere per aziende con operatori sul campo in Italia? Confronto su GPS verificato, report sigillati, prove fotografiche e conformità GDPR.' },
  en: { title: 'GeoTapp vs Hubstaff - Comparison 2025 | GeoTapp', description: 'GeoTapp vs Hubstaff: which is better for field service companies? Compare verified GPS, sealed reports, photo evidence and GDPR compliance.' },
  de: { title: 'GeoTapp vs Hubstaff - Vergleich 2025 | GeoTapp', description: 'GeoTapp vs Hubstaff: Welches ist besser für Außendienstunternehmen? Vergleich von GPS-Verifizierung, versiegelten Berichten, Fotobeweisen und DSGVO-Konformität.' },
  nl: { title: 'GeoTapp vs Hubstaff - Vergelijking 2025 | GeoTapp', description: 'GeoTapp vs Hubstaff: wat is beter voor bedrijven met buitendienstmedewerkers? Vergelijk geverifieerd GPS, verzegelde rapporten, fotobewijs en AVG-conformiteit.' },
  fr: { title: 'GeoTapp vs Hubstaff - Comparaison 2025 | GeoTapp', description: 'GeoTapp vs Hubstaff : lequel choisir pour les entreprises avec des intervenants sur le terrain ? Comparez GPS vérifié, rapports scellés, preuves photo et conformité RGPD.' },
  es: { title: 'GeoTapp vs Hubstaff - Comparación 2025 | GeoTapp', description: 'GeoTapp vs Hubstaff: ¿cuál elegir para empresas con operarios en campo? Compara GPS verificado, informes sellados, pruebas fotográficas y conformidad con el RGPD.' },
  pt: { title: 'GeoTapp vs Hubstaff - Comparação 2025 | GeoTapp', description: 'GeoTapp vs Hubstaff: qual escolher para empresas com operadores no terreno? Compare GPS verificado, relatórios selados, provas fotográficas e conformidade com o RGPD.' },
  da: { title: 'GeoTapp vs Hubstaff - Sammenligning 2025 | GeoTapp', description: 'GeoTapp vs Hubstaff: hvad er bedst for virksomheder med medarbejdere i marken? Sammenlign verificeret GPS, forseglede rapporter, fotobeviser og GDPR-overholdelse.' },
  sv: { title: 'GeoTapp vs Hubstaff - Jämförelse 2025 | GeoTapp', description: 'GeoTapp vs Hubstaff: vad är bäst för företag med personal ute i fält? Jämför verifierad GPS, förseglade rapporter, fotobevis och GDPR-efterlevnad.' },
  nb: { title: 'GeoTapp vs Hubstaff - Sammenligning 2025 | GeoTapp', description: 'GeoTapp vs Hubstaff: hva er best for bedrifter med ansatte ute i felt? Sammenlign verifisert GPS, forseglede rapporter, fotobevis og GDPR-samsvar.' },
  ru: { title: 'GeoTapp vs Hubstaff, Сравнение 2025 | GeoTapp', description: 'GeoTapp vs Hubstaff: что выбрать для компаний с сотрудниками на выезде? Сравните проверенный GPS, опечатанные отчёты, фотодоказательства и соответствие GDPR.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza principale tra GeoTapp e Hubstaff?', a: 'Hubstaff è un sistema di monitoraggio della produttività per lavoratori remoti: traccia il GPS e cattura screenshot. GeoTapp è un sistema di certificazione degli interventi: produce report sigillati con GPS verificato e prove fotografiche che il committente verifica autonomamente. Orientamenti molto diversi.' },
    { q: 'Hubstaff è conforme al GDPR per la geolocalizzazione?', a: 'Hubstaff è un\'azienda americana e la sua conformità al GDPR europeo, in particolare alle linee guida del Garante Privacy italiano sul monitoraggio dei dipendenti, richiede verifica specifica. GeoTapp è progettato per il mercato europeo con conformità GDPR integrata e modulistica per l\'informativa ai dipendenti inclusa.' },
    { q: 'GeoTapp o Hubstaff per imprese di pulizie e manutenzione?', a: 'GeoTapp è progettato specificamente per il settore operativo italiano: imprese di pulizie, manutenzione, installatori, sicurezza privata. Offre report verificabili dal committente e conformità CCNL. Hubstaff è pensato per team remoti digitali, non per operatori fisici sul campo con clienti da tutelare legalmente.' },
    { q: 'Hubstaff fa screenshot dei dipendenti. GeoTapp no, è un limite?', a: 'In Italia, lo screenshot automatico dei dipendenti è considerato uno strumento di controllo a distanza che richiede accordo sindacale (art. 4 Statuto dei Lavoratori). GeoTapp non monitora continuamente i dipendenti, traccia la posizione solo durante l\'intervento attivo, ed è conforme alle linee guida del Garante Privacy italiano.' },
  ],
  en: [
    { q: 'What is the main difference between GeoTapp and Hubstaff?', a: 'Hubstaff is a productivity monitoring system for remote workers: it tracks GPS and captures screenshots. GeoTapp is a job certification system: it produces sealed reports with verified GPS and photo evidence that clients independently verify. Very different orientations.' },
    { q: 'Is Hubstaff GDPR compliant for geolocation?', a: 'Hubstaff is a US company and its compliance with European GDPR, especially Italian Privacy Authority guidelines on employee monitoring, requires specific verification. GeoTapp is designed for the European market with built-in GDPR compliance and employee information forms included.' },
    { q: 'GeoTapp or Hubstaff for cleaning and maintenance companies?', a: 'GeoTapp is specifically designed for the Italian operational sector: cleaning companies, maintenance, installers, private security. It offers reports verifiable by the client and CCNL compliance. Hubstaff is designed for digital remote teams, not physical field operators with clients to legally protect.' },
    { q: 'Does Hubstaff take employee screenshots? Is GeoTapp\'s lack of this a limitation?', a: 'Automatic employee screenshots in Italy are considered remote control tools requiring union agreement (art. 4 Workers\' Statute). GeoTapp does not continuously monitor employees, it tracks location only during active jobs, and complies with Italian Privacy Authority guidelines.' },
  ],
  de: [
    { q: 'Was ist der Hauptunterschied zwischen GeoTapp und Hubstaff?', a: 'Hubstaff ist ein Produktivitäts-Überwachungssystem für Remote-Mitarbeiter: es trackt GPS und erstellt Screenshots. GeoTapp ist ein Einsatz-Zertifizierungssystem: es erzeugt versiegelte Berichte mit verifiziertem GPS und Fotobeweise, die der Auftraggeber selbstständig prüft. Sehr unterschiedliche Ausrichtungen.' },
    { q: 'Ist Hubstaff DSGVO-konform bei der Geolokalisierung?', a: 'Hubstaff ist ein US-Unternehmen und seine Konformität mit der europäischen DSGVO, insbesondere den Leitlinien der italienischen Datenschutzbehörde zur Mitarbeiterüberwachung, erfordert eine spezifische Prüfung. GeoTapp ist für den europäischen Markt konzipiert, mit integrierter DSGVO-Konformität und enthaltener Vorlage für die Mitarbeiterinformation.' },
    { q: 'GeoTapp oder Hubstaff für Reinigungs- und Wartungsunternehmen?', a: 'GeoTapp ist speziell für den italienischen Einsatzsektor entwickelt: Reinigungsunternehmen, Wartung, Installateure, privater Sicherheitsdienst. Es bietet vom Auftraggeber prüfbare Berichte und CCNL-Konformität. Hubstaff ist für digitale Remote-Teams gedacht, nicht für physische Außendienstmitarbeiter mit rechtlich abzusichernden Kunden.' },
    { q: 'Hubstaff macht Screenshots der Mitarbeiter. GeoTapp nicht, ist das ein Nachteil?', a: 'In Italien gilt der automatische Screenshot von Mitarbeitern als Fernüberwachungsinstrument, das eine gewerkschaftliche Vereinbarung erfordert (Art. 4 Arbeitnehmerstatut). GeoTapp überwacht Mitarbeiter nicht kontinuierlich, es trackt die Position nur während des aktiven Einsatzes, und entspricht den Leitlinien der italienischen Datenschutzbehörde.' },
  ],
  fr: [
    { q: 'Quelle est la principale différence entre GeoTapp et Hubstaff ?', a: 'Hubstaff est un système de surveillance de la productivité pour les travailleurs à distance : il suit le GPS et capture des captures d\'écran. GeoTapp est un système de certification des interventions : il produit des rapports scellés avec GPS vérifié et des preuves photographiques que le client vérifie lui-même. Des orientations très différentes.' },
    { q: 'Hubstaff est-il conforme au RGPD pour la géolocalisation ?', a: 'Hubstaff est une entreprise américaine et sa conformité au RGPD européen, en particulier aux lignes directrices de l\'autorité de protection des données italienne sur la surveillance des employés, nécessite une vérification spécifique. GeoTapp est conçu pour le marché européen avec une conformité RGPD intégrée et les modèles d\'information aux employés inclus.' },
    { q: 'GeoTapp ou Hubstaff pour les entreprises de nettoyage et de maintenance ?', a: 'GeoTapp est conçu spécifiquement pour le secteur opérationnel italien : entreprises de nettoyage, maintenance, installateurs, sécurité privée. Il offre des rapports vérifiables par le client et la conformité aux conventions collectives. Hubstaff est pensé pour les équipes numériques à distance, pas pour les intervenants physiques sur le terrain avec des clients à protéger juridiquement.' },
    { q: 'Hubstaff capture des écrans des employés. GeoTapp non, est-ce une limite ?', a: 'En Italie, la capture d\'écran automatique des employés est considérée comme un outil de contrôle à distance nécessitant un accord syndical (art. 4 du Statut des travailleurs). GeoTapp ne surveille pas en continu les employés, il suit la position uniquement pendant l\'intervention active, et respecte les lignes directrices de l\'autorité italienne de protection des données.' },
  ],
  es: [
    { q: '¿Cuál es la diferencia principal entre GeoTapp y Hubstaff?', a: 'Hubstaff es un sistema de monitorización de la productividad para trabajadores remotos: rastrea el GPS y captura capturas de pantalla. GeoTapp es un sistema de certificación de las intervenciones: produce informes sellados con GPS verificado y pruebas fotográficas que el cliente verifica por sí mismo. Orientaciones muy distintas.' },
    { q: '¿Es Hubstaff conforme al RGPD para la geolocalización?', a: 'Hubstaff es una empresa estadounidense y su conformidad con el RGPD europeo, en particular con las directrices de la autoridad de protección de datos italiana sobre la vigilancia de los empleados, requiere una verificación específica. GeoTapp está diseñado para el mercado europeo con conformidad RGPD integrada y los modelos de información al empleado incluidos.' },
    { q: '¿GeoTapp o Hubstaff para empresas de limpieza y mantenimiento?', a: 'GeoTapp está diseñado específicamente para el sector operativo italiano: empresas de limpieza, mantenimiento, instaladores, seguridad privada. Ofrece informes verificables por el cliente y conformidad con los convenios colectivos. Hubstaff está pensado para equipos digitales remotos, no para operarios físicos en campo con clientes a los que proteger legalmente.' },
    { q: 'Hubstaff hace capturas de pantalla de los empleados. GeoTapp no, ¿es una limitación?', a: 'En Italia, la captura de pantalla automática de los empleados se considera una herramienta de control a distancia que requiere acuerdo sindical (art. 4 del Estatuto de los Trabajadores). GeoTapp no monitoriza a los empleados de forma continua, rastrea la posición solo durante la intervención activa, y cumple las directrices de la autoridad de protección de datos italiana.' },
  ],
  pt: [
    { q: 'Qual é a principal diferença entre a GeoTapp e a Hubstaff?', a: 'A Hubstaff é um sistema de monitorização da produtividade para trabalhadores remotos: rastreia o GPS e captura capturas de ecrã. A GeoTapp é um sistema de certificação das intervenções: produz relatórios selados com GPS verificado e provas fotográficas que o cliente verifica autonomamente. Orientações muito diferentes.' },
    { q: 'A Hubstaff é conforme o RGPD para a geolocalização?', a: 'A Hubstaff é uma empresa americana e a sua conformidade com o RGPD europeu, em particular com as orientações da autoridade de proteção de dados italiana sobre a monitorização dos trabalhadores, exige verificação específica. A GeoTapp foi concebida para o mercado europeu com conformidade RGPD integrada e os modelos de informação ao trabalhador incluídos.' },
    { q: 'GeoTapp ou Hubstaff para empresas de limpeza e manutenção?', a: 'A GeoTapp foi concebida especificamente para o setor operacional italiano: empresas de limpeza, manutenção, instaladores, segurança privada. Oferece relatórios verificáveis pelo cliente e conformidade com as convenções coletivas. A Hubstaff foi pensada para equipas digitais remotas, não para operadores físicos no terreno com clientes a proteger juridicamente.' },
    { q: 'A Hubstaff faz capturas de ecrã dos trabalhadores. A GeoTapp não, é uma limitação?', a: 'Em Itália, a captura de ecrã automática dos trabalhadores é considerada uma ferramenta de controlo à distância que exige acordo sindical (art. 4 do Estatuto dos Trabalhadores). A GeoTapp não monitoriza os trabalhadores de forma contínua, rastreia a posição apenas durante a intervenção ativa, e cumpre as orientações da autoridade de proteção de dados italiana.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Hubstaff?', a: 'Hubstaff is een systeem voor productiviteitsmonitoring van externe medewerkers: het volgt GPS en maakt schermafbeeldingen. GeoTapp is een systeem voor het certificeren van opdrachten: het produceert verzegelde rapporten met geverifieerd GPS en fotobewijs dat de opdrachtgever zelfstandig verifieert. Heel verschillende oriëntaties.' },
    { q: 'Is Hubstaff AVG-conform voor geolocatie?', a: 'Hubstaff is een Amerikaans bedrijf en zijn conformiteit met de Europese AVG, in het bijzonder met de richtlijnen van de Italiaanse toezichthouder over het monitoren van werknemers, vereist een specifieke verificatie. GeoTapp is ontworpen voor de Europese markt met ingebouwde AVG-conformiteit en de modellen voor de werknemersverklaring inbegrepen.' },
    { q: 'GeoTapp of Hubstaff voor schoonmaak- en onderhoudsbedrijven?', a: 'GeoTapp is specifiek ontworpen voor de Italiaanse operationele sector: schoonmaakbedrijven, onderhoud, installateurs, particuliere beveiliging. Het biedt door de klant verifieerbare rapporten en conformiteit met cao\'s. Hubstaff is bedoeld voor digitale teams op afstand, niet voor fysieke buitendienstmedewerkers met klanten die juridisch beschermd moeten worden.' },
    { q: 'Hubstaff maakt schermafbeeldingen van werknemers. GeoTapp niet, is dat een beperking?', a: 'In Italië wordt de automatische schermafbeelding van werknemers beschouwd als een instrument voor controle op afstand dat een vakbondsakkoord vereist (art. 4 Werknemersstatuut). GeoTapp monitort werknemers niet continu, het volgt de positie alleen tijdens de actieve opdracht, en voldoet aan de richtlijnen van de Italiaanse toezichthouder.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Hubstaff?', a: 'Hubstaff er et system til produktivitetsovervågning af fjernmedarbejdere: det sporer GPS og tager skærmbilleder. GeoTapp er et system til certificering af opgaver: det producerer forseglede rapporter med verificeret GPS og fotobeviser, som kunden selv verificerer. Meget forskellige orienteringer.' },
    { q: 'Er Hubstaff GDPR-kompatibel ved geolokalisering?', a: 'Hubstaff er en amerikansk virksomhed, og dens overholdelse af den europæiske GDPR, især det italienske datatilsyns retningslinjer om medarbejderovervågning, kræver en specifik verificering. GeoTapp er udviklet til det europæiske marked med indbygget GDPR-overholdelse og skabeloner til medarbejderinformation inkluderet.' },
    { q: 'GeoTapp eller Hubstaff til rengørings- og vedligeholdelsesvirksomheder?', a: 'GeoTapp er udviklet specifikt til den italienske driftssektor: rengøringsvirksomheder, vedligeholdelse, installatører, privat sikkerhed. Det tilbyder rapporter, der kan verificeres af kunden, og overholdelse af overenskomster. Hubstaff er tænkt til digitale fjernteams, ikke til fysiske medarbejdere i marken med kunder, der skal beskyttes juridisk.' },
    { q: 'Hubstaff tager skærmbilleder af medarbejderne. GeoTapp gør ikke, er det en begrænsning?', a: 'I Italien betragtes automatiske skærmbilleder af medarbejdere som et fjernovervågningsværktøj, der kræver en fagforeningsaftale (art. 4 i arbejderstatutten). GeoTapp overvåger ikke medarbejderne kontinuerligt, det sporer kun positionen under den aktive opgave, og overholder det italienske datatilsyns retningslinjer.' },
  ],
  sv: [
    { q: 'Vad är den största skillnaden mellan GeoTapp och Hubstaff?', a: 'Hubstaff är ett system för produktivitetsövervakning av distansarbetare: det spårar GPS och tar skärmdumpar. GeoTapp är ett system för certifiering av uppdrag: det producerar förseglade rapporter med verifierad GPS och fotobevis som kunden själv verifierar. Mycket olika inriktningar.' },
    { q: 'Är Hubstaff GDPR-kompatibelt för geolokalisering?', a: 'Hubstaff är ett amerikanskt företag och dess efterlevnad av den europeiska GDPR, i synnerhet den italienska dataskyddsmyndighetens riktlinjer om övervakning av anställda, kräver en specifik verifiering. GeoTapp är utformat för den europeiska marknaden med inbyggd GDPR-efterlevnad och mallar för information till anställda inkluderade.' },
    { q: 'GeoTapp eller Hubstaff för städ- och underhållsföretag?', a: 'GeoTapp är specifikt utformat för den italienska operativa sektorn: städföretag, underhåll, installatörer, privat säkerhet. Det erbjuder rapporter som kunden kan verifiera och efterlevnad av kollektivavtal. Hubstaff är tänkt för digitala distansteam, inte för fysisk personal ute i fält med kunder som måste skyddas juridiskt.' },
    { q: 'Hubstaff tar skärmdumpar av de anställda. GeoTapp gör inte det, är det en begränsning?', a: 'I Italien betraktas automatiska skärmdumpar av anställda som ett verktyg för fjärrövervakning som kräver ett fackligt avtal (art. 4 i arbetstagarstadgan). GeoTapp övervakar inte de anställda kontinuerligt, det spårar positionen endast under det aktiva uppdraget, och följer den italienska dataskyddsmyndighetens riktlinjer.' },
  ],
  nb: [
    { q: 'Hva er den viktigste forskjellen mellom GeoTapp og Hubstaff?', a: 'Hubstaff er et system for produktivitetsovervåking av fjernarbeidere: det sporer GPS og tar skjermbilder. GeoTapp er et system for sertifisering av oppdrag: det produserer forseglede rapporter med verifisert GPS og fotobevis som oppdragsgiveren selv verifiserer. Svært forskjellige orienteringer.' },
    { q: 'Er Hubstaff GDPR-kompatibel for geolokalisering?', a: 'Hubstaff er et amerikansk selskap, og dets samsvar med den europeiske GDPR, særlig det italienske datatilsynets retningslinjer om overvåking av ansatte, krever en spesifikk verifisering. GeoTapp er utviklet for det europeiske markedet med innebygd GDPR-samsvar og maler for informasjon til ansatte inkludert.' },
    { q: 'GeoTapp eller Hubstaff for renholds- og vedlikeholdsbedrifter?', a: 'GeoTapp er utviklet spesifikt for den italienske driftssektoren: renholdsbedrifter, vedlikehold, installatører, privat sikkerhet. Det tilbyr rapporter som oppdragsgiveren kan verifisere, og samsvar med tariffavtaler. Hubstaff er tenkt for digitale fjernteam, ikke for fysiske ansatte ute i felt med kunder som må beskyttes juridisk.' },
    { q: 'Hubstaff tar skjermbilder av de ansatte. GeoTapp gjør ikke det, er det en begrensning?', a: 'I Italia regnes automatiske skjermbilder av ansatte som et verktøy for fjernovervåking som krever en fagforeningsavtale (art. 4 i arbeidstakerstatutten). GeoTapp overvåker ikke de ansatte kontinuerlig, det sporer posisjonen bare under det aktive oppdraget, og følger det italienske datatilsynets retningslinjer.' },
  ],
  ru: [
    { q: 'В чём главное различие между GeoTapp и Hubstaff?', a: 'Hubstaff, это система мониторинга производительности удалённых сотрудников: она отслеживает GPS и делает снимки экрана. GeoTapp, это система сертификации работ: она создаёт опечатанные отчёты с проверенным GPS и фотодоказательствами, которые заказчик проверяет самостоятельно. Совершенно разные направленности.' },
    { q: 'Соответствует ли Hubstaff требованиям GDPR при геолокации?', a: 'Hubstaff, американская компания, и её соответствие европейскому GDPR, в частности рекомендациям итальянского органа по защите данных о слежке за сотрудниками, требует отдельной проверки. GeoTapp разработан для европейского рынка со встроенным соответствием GDPR и включёнными шаблонами уведомления для сотрудников.' },
    { q: 'GeoTapp или Hubstaff для клининговых и обслуживающих компаний?', a: 'GeoTapp разработан специально для итальянского операционного сектора: клининговые компании, техобслуживание, монтажники, частная охрана. Он предлагает отчёты, проверяемые заказчиком, и соответствие коллективным договорам. Hubstaff рассчитан на цифровые удалённые команды, а не на физических сотрудников на выезде с клиентами, которых нужно защитить юридически.' },
    { q: 'Hubstaff делает снимки экрана сотрудников. GeoTapp, нет. Это ограничение?', a: 'В Италии автоматические снимки экрана сотрудников считаются инструментом дистанционного контроля, требующим профсоюзного соглашения (ст. 4 Статута трудящихся). GeoTapp не ведёт непрерывный мониторинг сотрудников, он отслеживает позицию только во время активного выезда, и соответствует рекомендациям итальянского органа по защите данных.' },
  ],
};

// Etichette della tabella di confronto, per locale.
const ROWS_LABELS: Record<string, string[]> = {
  it: ['GPS verificato per interventi sul campo','Report sigillato crittograficamente','Verifica indipendente da parte del committente','Prove fotografiche collegate a GPS e timestamp','Conformità GDPR / linee guida Garante italiano','Nessun monitoraggio continuo dei dipendenti','App mobile Android/iOS','Messaggistica interna proprietaria','Dashboard gestione team','Export per elaborazione paghe','Progettato per mercato italiano / CCNL','Informativa GPS automatica con firma digitale*'],
  en: ['GPS verified for field jobs','Cryptographically sealed report','Independent verification by client','Photo evidence linked to GPS and timestamp','GDPR compliant / Italian DPA guidelines','No continuous employee monitoring','Mobile app Android/iOS','Built-in messaging','Team management dashboard','Payroll export','Designed for Italian market / CCNL','Automatic GPS privacy notice with digital signature*'],
  de: ['Verifiziertes GPS für Außendiensteinsätze','Kryptographisch versiegelter Bericht','Unabhängige Prüfung durch den Auftraggeber','Fotobeweise verknüpft mit GPS und Zeitstempel','DSGVO-konform / Leitlinien der ital. Datenschutzbehörde','Keine kontinuierliche Mitarbeiterüberwachung','Mobile App Android/iOS','Integrierte Nachrichtenfunktion','Team-Management-Dashboard','Export für die Lohnabrechnung','Entwickelt für den ital. Markt / Tarifverträge','Automatische GPS-Datenschutzerklärung mit digitaler Signatur*'],
  fr: ['GPS vérifié pour les interventions sur le terrain','Rapport scellé cryptographiquement','Vérification indépendante par le client','Preuves photo liées au GPS et à l\'horodatage','Conforme RGPD / lignes directrices de l\'autorité italienne','Aucune surveillance continue des employés','Application mobile Android/iOS','Messagerie interne intégrée','Tableau de bord de gestion d\'équipe','Export pour la paie','Conçu pour le marché italien / conventions collectives','Avis de confidentialité GPS automatique avec signature numérique*'],
  es: ['GPS verificado para intervenciones en campo','Informe sellado criptográficamente','Verificación independiente por el cliente','Pruebas fotográficas vinculadas a GPS y marca de tiempo','Conforme al RGPD / directrices de la autoridad italiana','Sin monitorización continua de los empleados','App móvil Android/iOS','Mensajería interna integrada','Panel de gestión de equipos','Exportación para nóminas','Diseñado para el mercado italiano / convenios colectivos','Aviso de privacidad GPS automático con firma digital*'],
  pt: ['GPS verificado para intervenções no terreno','Relatório selado criptograficamente','Verificação independente pelo cliente','Provas fotográficas associadas a GPS e marca temporal','Conforme o RGPD / orientações da autoridade italiana','Sem monitorização contínua dos trabalhadores','App móvel Android/iOS','Mensagens internas integradas','Painel de gestão de equipas','Exportação para processamento salarial','Concebido para o mercado italiano / convenções coletivas','Aviso de privacidade GPS automático com assinatura digital*'],
  nl: ['Geverifieerd GPS voor opdrachten in het veld','Cryptografisch verzegeld rapport','Onafhankelijke verificatie door de klant','Fotobewijs gekoppeld aan GPS en tijdstempel','AVG-conform / richtlijnen Italiaanse toezichthouder','Geen continue monitoring van werknemers','Mobiele app Android/iOS','Ingebouwde berichtenfunctie','Dashboard voor teambeheer','Export voor de loonadministratie','Ontworpen voor de Italiaanse markt / cao\'s','Automatische GPS-privacyverklaring met digitale handtekening*'],
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
    badge: 'Confronto App', h1sub: 'certificazione o monitoraggio?',
    desc: 'Hubstaff monitora i lavoratori remoti con screenshot e GPS. GeoTapp certifica ogni intervento con prove verificabili dal committente. Orientamenti diversi, settori diversi.',
    summary: 'In sintesi:',
    summaryText: 'Hubstaff è pensato per monitorare lavoratori remoti digitali (screenshot, produttività). GeoTapp è pensato per certificare operatori fisici sul campo: report non alterabili con GPS reale, prove fotografiche e verifica indipendente da parte del committente. Inoltre, Hubstaff pone questioni di conformità GDPR nel contesto italiano che GeoTapp risolve per design.',
    noteTitle: 'Nota importante per il mercato italiano',
    noteText: 'Il monitoraggio continuo della posizione GPS e la cattura di screenshot dei dipendenti rientrano nell\'ambito dell\'art. 4 dello Statuto dei Lavoratori e richiedono accordo sindacale o autorizzazione dell\'Ispettorato del Lavoro. GeoTapp è progettato per essere conforme: traccia solo durante l\'orario di lavoro attivo e fornisce tutta la modulistica necessaria.',
    features: 'Confronto funzionalità chiave', feat: 'Funzionalità', diff: 'Orientamenti opposti',
    cta: 'Vuoi vedere GeoTapp in azione?',
    ctaDesc: 'Ti mostriamo come un intervento diventa una prova verificabile, in 20 minuti, senza impegno.',
    ctaBtn: 'Inizia subito gratuitamente!',
    geo: ['Report sigillato: prova difendibile per il committente','GPS verificato solo durante l\'intervento attivo','Conforme GDPR e Garante Privacy italiano','Progettato per settori operativi italiani (pulizie, manutenzione, sicurezza)','L\'operatore non è sorvegliato, il lavoro è certificato'],
    comp: ['Progettato per monitorare lavoratori remoti digitali','GPS continuo e screenshot automatici','Conformità GDPR da verificare nel contesto italiano','Nessun report verificabile dal committente','Orientamento alla produttività, non alla certificazione'],
    footnote: '* Per legge (GDPR Art. 13 e, in Italia, Art. 4 Statuto dei Lavoratori), ogni dipendente deve firmare un\'informativa privacy prima di essere geolocalizzato. La maggior parte dei software GPS non lo gestisce: il rischio legale resta al titolare. GeoTapp genera automaticamente l\'informativa personalizzata, la fa firmare digitalmente al dipendente e blocca l\'accesso GPS finché non è firmata. Nessun altro software sul mercato lo fa.',
  },
  en: {
    badge: 'App Comparison', h1sub: 'certification or monitoring?',
    desc: 'Hubstaff monitors remote workers with screenshots and GPS. GeoTapp certifies every job with client-verifiable proof. Different orientations, different sectors.',
    summary: 'Bottom line:',
    summaryText: 'Hubstaff is designed to monitor digital remote workers (screenshots, productivity). GeoTapp is designed to certify physical field operators: tamper-proof reports with real GPS, photo evidence and independent client verification. Additionally, Hubstaff raises GDPR compliance questions in the Italian context that GeoTapp resolves by design.',
    noteTitle: 'Important note for the Italian market',
    noteText: 'Continuous GPS location tracking and capturing employee screenshots fall within the scope of art. 4 of the Workers\' Statute and require a union agreement or authorisation from the Labour Inspectorate. GeoTapp is designed to be compliant: it tracks only during active working hours and provides all the necessary forms.',
    features: 'Key features comparison', feat: 'Feature', diff: 'Opposite orientations',
    cta: 'Want to see GeoTapp in action?',
    ctaDesc: 'We show you how a job becomes verifiable proof, in 20 minutes, no commitment.',
    ctaBtn: 'Start for free!',
    geo: ['Sealed report: defensible proof for the client','GPS verified only during active job','GDPR and Italian Privacy Authority compliant','Designed for Italian operational sectors (cleaning, maintenance, security)','Operator is not surveilled, work is certified'],
    comp: ['Designed to monitor digital remote workers','Continuous GPS and automatic screenshots','GDPR compliance to verify in Italian context','No reports verifiable by the client','Productivity-focused, not certification-focused'],
    footnote: '* By law (GDPR Art. 13), every employee must sign a privacy notice before being geolocated. Most GPS software does not handle this: the legal risk stays with the employer. GeoTapp automatically generates the personalised notice, gets it digitally signed by the employee and blocks GPS access until it is signed. No other software on the market does this.',
  },
  de: {
    badge: 'App-Vergleich', h1sub: 'Zertifizierung oder Überwachung?',
    desc: 'Hubstaff überwacht Remote-Mitarbeiter mit Screenshots und GPS. GeoTapp zertifiziert jeden Einsatz mit vom Auftraggeber prüfbaren Beweisen. Unterschiedliche Ausrichtungen, unterschiedliche Branchen.',
    summary: 'Fazit:',
    summaryText: 'Hubstaff ist darauf ausgelegt, digitale Remote-Mitarbeiter zu überwachen (Screenshots, Produktivität). GeoTapp ist darauf ausgelegt, physische Außendienstmitarbeiter zu zertifizieren: fälschungssichere Berichte mit echtem GPS, Fotobeweise und unabhängige Prüfung durch den Auftraggeber. Außerdem wirft Hubstaff im italienischen Kontext Fragen zur DSGVO-Konformität auf, die GeoTapp durch sein Design löst.',
    noteTitle: 'Wichtiger Hinweis für den italienischen Markt',
    noteText: 'Die kontinuierliche GPS-Standortverfolgung und das Erstellen von Mitarbeiter-Screenshots fallen in den Anwendungsbereich von Art. 4 des Arbeitnehmerstatuts und erfordern eine gewerkschaftliche Vereinbarung oder eine Genehmigung der Arbeitsaufsicht. GeoTapp ist konform ausgelegt: es trackt nur während der aktiven Arbeitszeit und stellt alle erforderlichen Vorlagen bereit.',
    features: 'Vergleich der wichtigsten Funktionen', feat: 'Funktion', diff: 'Entgegengesetzte Ausrichtungen',
    cta: 'Möchten Sie GeoTapp in Aktion sehen?',
    ctaDesc: 'Wir zeigen Ihnen, wie ein Einsatz zum verifizierbaren Beweis wird, in 20 Minuten, unverbindlich.',
    ctaBtn: 'Jetzt kostenlos starten!',
    geo: ['Versiegelter Bericht: belastbarer Beweis für den Auftraggeber','GPS nur während des aktiven Einsatzes verifiziert','DSGVO- und ital. Datenschutzbehörde-konform','Entwickelt für ital. Einsatzbranchen (Reinigung, Wartung, Sicherheit)','Der Mitarbeiter wird nicht überwacht, die Arbeit wird zertifiziert'],
    comp: ['Entwickelt zur Überwachung digitaler Remote-Mitarbeiter','Kontinuierliches GPS und automatische Screenshots','DSGVO-Konformität im ital. Kontext zu prüfen','Keine vom Auftraggeber prüfbaren Berichte','Produktivitätsorientiert, nicht zertifizierungsorientiert'],
    footnote: '* Laut Gesetz (DSGVO Art. 13) muss jeder Mitarbeiter vor der Geolokalisierung eine Datenschutzerklärung unterschreiben. Die meiste GPS-Software handhabt das nicht: das rechtliche Risiko bleibt beim Arbeitgeber. GeoTapp erstellt automatisch die personalisierte Erklärung, lässt sie vom Mitarbeiter digital unterschreiben und sperrt den GPS-Zugang, bis sie unterschrieben ist. Keine andere Software auf dem Markt tut das.',
  },
  fr: {
    badge: 'Comparatif d\'applis', h1sub: 'certification ou surveillance ?',
    desc: 'Hubstaff surveille les travailleurs à distance avec des captures d\'écran et le GPS. GeoTapp certifie chaque intervention avec des preuves vérifiables par le client. Des orientations différentes, des secteurs différents.',
    summary: 'En résumé :',
    summaryText: 'Hubstaff est conçu pour surveiller des travailleurs numériques à distance (captures d\'écran, productivité). GeoTapp est conçu pour certifier des intervenants physiques sur le terrain : rapports infalsifiables avec GPS réel, preuves photographiques et vérification indépendante par le client. De plus, Hubstaff soulève des questions de conformité RGPD dans le contexte italien que GeoTapp résout par conception.',
    noteTitle: 'Note importante pour le marché italien',
    noteText: 'Le suivi continu de la position GPS et la capture de captures d\'écran des employés relèvent du champ d\'application de l\'art. 4 du Statut des travailleurs et nécessitent un accord syndical ou une autorisation de l\'Inspection du travail. GeoTapp est conçu pour être conforme : il ne suit que pendant les heures de travail actives et fournit tous les modèles nécessaires.',
    features: 'Comparaison des fonctionnalités clés', feat: 'Fonctionnalité', diff: 'Orientations opposées',
    cta: 'Envie de voir GeoTapp en action ?',
    ctaDesc: 'Nous vous montrons comment une intervention devient une preuve vérifiable, en 20 minutes, sans engagement.',
    ctaBtn: 'Commencez gratuitement !',
    geo: ['Rapport scellé : preuve défendable pour le client','GPS vérifié uniquement pendant l\'intervention active','Conforme RGPD et autorité italienne de protection des données','Conçu pour les secteurs opérationnels italiens (nettoyage, maintenance, sécurité)','L\'intervenant n\'est pas surveillé, le travail est certifié'],
    comp: ['Conçu pour surveiller des travailleurs numériques à distance','GPS continu et captures d\'écran automatiques','Conformité RGPD à vérifier dans le contexte italien','Aucun rapport vérifiable par le client','Orienté productivité, pas certification'],
    footnote: '* Selon la loi (RGPD Art. 13), chaque salarié doit signer un avis de confidentialité avant d\'être géolocalisé. La plupart des logiciels GPS ne le gèrent pas : le risque juridique reste à l\'employeur. GeoTapp génère automatiquement l\'avis personnalisé, le fait signer numériquement par le salarié et bloque l\'accès GPS tant qu\'il n\'est pas signé. Aucun autre logiciel sur le marché ne le fait.',
  },
  es: {
    badge: 'Comparativa de apps', h1sub: '¿certificación o vigilancia?',
    desc: 'Hubstaff vigila a los trabajadores remotos con capturas de pantalla y GPS. GeoTapp certifica cada intervención con pruebas verificables por el cliente. Orientaciones distintas, sectores distintos.',
    summary: 'En resumen:',
    summaryText: 'Hubstaff está pensado para vigilar a trabajadores digitales remotos (capturas de pantalla, productividad). GeoTapp está pensado para certificar a operarios físicos en campo: informes inalterables con GPS real, pruebas fotográficas y verificación independiente por el cliente. Además, Hubstaff plantea cuestiones de conformidad con el RGPD en el contexto italiano que GeoTapp resuelve por diseño.',
    noteTitle: 'Nota importante para el mercado italiano',
    noteText: 'El seguimiento continuo de la posición GPS y la captura de capturas de pantalla de los empleados entran en el ámbito del art. 4 del Estatuto de los Trabajadores y requieren un acuerdo sindical o la autorización de la Inspección de Trabajo. GeoTapp está diseñado para ser conforme: rastrea solo durante el horario de trabajo activo y proporciona todos los modelos necesarios.',
    features: 'Comparación de funciones clave', feat: 'Función', diff: 'Orientaciones opuestas',
    cta: '¿Quieres ver GeoTapp en acción?',
    ctaDesc: 'Te mostramos cómo una intervención se convierte en una prueba verificable, en 20 minutos, sin compromiso.',
    ctaBtn: '¡Empieza gratis!',
    geo: ['Informe sellado: prueba defendible para el cliente','GPS verificado solo durante la intervención activa','Conforme al RGPD y a la autoridad italiana de protección de datos','Diseñado para sectores operativos italianos (limpieza, mantenimiento, seguridad)','El operario no es vigilado, el trabajo se certifica'],
    comp: ['Diseñado para vigilar a trabajadores digitales remotos','GPS continuo y capturas de pantalla automáticas','Conformidad con el RGPD por verificar en el contexto italiano','Ningún informe verificable por el cliente','Orientado a la productividad, no a la certificación'],
    footnote: '* Por ley (RGPD Art. 13), cada empleado debe firmar un aviso de privacidad antes de ser geolocalizado. La mayoría del software GPS no lo gestiona: el riesgo legal recae en el empleador. GeoTapp genera automáticamente el aviso personalizado, hace que el empleado lo firme digitalmente y bloquea el acceso GPS hasta que esté firmado. Ningún otro software del mercado lo hace.',
  },
  pt: {
    badge: 'Comparativo de apps', h1sub: 'certificação ou vigilância?',
    desc: 'A Hubstaff vigia os trabalhadores remotos com capturas de ecrã e GPS. A GeoTapp certifica cada intervenção com provas verificáveis pelo cliente. Orientações diferentes, setores diferentes.',
    summary: 'Em resumo:',
    summaryText: 'A Hubstaff foi pensada para vigiar trabalhadores digitais remotos (capturas de ecrã, produtividade). A GeoTapp foi pensada para certificar operadores físicos no terreno: relatórios inalteráveis com GPS real, provas fotográficas e verificação independente pelo cliente. Além disso, a Hubstaff levanta questões de conformidade com o RGPD no contexto italiano que a GeoTapp resolve por conceção.',
    noteTitle: 'Nota importante para o mercado italiano',
    noteText: 'A monitorização contínua da posição GPS e a captura de capturas de ecrã dos trabalhadores enquadram-se no âmbito do art. 4 do Estatuto dos Trabalhadores e exigem um acordo sindical ou a autorização da Inspeção do Trabalho. A GeoTapp foi concebida para ser conforme: rastreia apenas durante o horário de trabalho ativo e fornece todos os modelos necessários.',
    features: 'Comparação das funcionalidades-chave', feat: 'Funcionalidade', diff: 'Orientações opostas',
    cta: 'Quer ver a GeoTapp em ação?',
    ctaDesc: 'Mostramos-lhe como uma intervenção se torna uma prova verificável, em 20 minutos, sem compromisso.',
    ctaBtn: 'Comece grátis!',
    geo: ['Relatório selado: prova defensável para o cliente','GPS verificado apenas durante a intervenção ativa','Conforme o RGPD e a autoridade italiana de proteção de dados','Concebido para setores operacionais italianos (limpeza, manutenção, segurança)','O operador não é vigiado, o trabalho é certificado'],
    comp: ['Concebido para vigiar trabalhadores digitais remotos','GPS contínuo e capturas de ecrã automáticas','Conformidade com o RGPD a verificar no contexto italiano','Nenhum relatório verificável pelo cliente','Orientado para a produtividade, não para a certificação'],
    footnote: '* Por lei (RGPD Art. 13), cada trabalhador deve assinar um aviso de privacidade antes de ser geolocalizado. A maioria do software GPS não trata disto: o risco legal fica com o empregador. A GeoTapp gera automaticamente o aviso personalizado, fá-lo assinar digitalmente pelo trabalhador e bloqueia o acesso GPS até estar assinado. Nenhum outro software no mercado o faz.',
  },
  nl: {
    badge: 'App-vergelijking', h1sub: 'certificering of monitoring?',
    desc: 'Hubstaff monitort externe medewerkers met schermafbeeldingen en GPS. GeoTapp certificeert elke opdracht met door de klant verifieerbaar bewijs. Verschillende oriëntaties, verschillende sectoren.',
    summary: 'Kort gezegd:',
    summaryText: 'Hubstaff is bedoeld om digitale externe medewerkers te monitoren (schermafbeeldingen, productiviteit). GeoTapp is bedoeld om fysieke buitendienstmedewerkers te certificeren: manipulatiebestendige rapporten met echte GPS, fotobewijs en onafhankelijke verificatie door de klant. Bovendien werpt Hubstaff in de Italiaanse context vragen op over AVG-conformiteit die GeoTapp door zijn ontwerp oplost.',
    noteTitle: 'Belangrijke opmerking voor de Italiaanse markt',
    noteText: 'Het continu volgen van de GPS-positie en het maken van schermafbeeldingen van werknemers vallen onder art. 4 van het Werknemersstatuut en vereisen een vakbondsakkoord of toestemming van de Arbeidsinspectie. GeoTapp is ontworpen om conform te zijn: het volgt alleen tijdens de actieve werkuren en levert alle benodigde modellen.',
    features: 'Vergelijking van kernfuncties', feat: 'Functie', diff: 'Tegengestelde oriëntaties',
    cta: 'GeoTapp in actie zien?',
    ctaDesc: 'We laten je zien hoe een opdracht verifieerbaar bewijs wordt, in 20 minuten, vrijblijvend.',
    ctaBtn: 'Begin gratis!',
    geo: ['Verzegeld rapport: verdedigbaar bewijs voor de klant','GPS alleen geverifieerd tijdens de actieve opdracht','AVG- en Italiaanse toezichthouder-conform','Ontworpen voor Italiaanse operationele sectoren (schoonmaak, onderhoud, beveiliging)','De medewerker wordt niet bespied, het werk wordt gecertificeerd'],
    comp: ['Ontworpen om digitale externe medewerkers te monitoren','Continu GPS en automatische schermafbeeldingen','AVG-conformiteit te verifiëren in de Italiaanse context','Geen door de klant verifieerbare rapporten','Gericht op productiviteit, niet op certificering'],
    footnote: '* Volgens de wet (AVG Art. 13) moet elke werknemer een privacyverklaring ondertekenen voordat hij wordt gelokaliseerd. De meeste GPS-software regelt dit niet: het juridische risico blijft bij de werkgever. GeoTapp genereert automatisch de gepersonaliseerde verklaring, laat die digitaal ondertekenen door de werknemer en blokkeert de GPS-toegang tot ze ondertekend is. Geen enkele andere software op de markt doet dit.',
  },
  da: {
    badge: 'App-sammenligning', h1sub: 'certificering eller overvågning?',
    desc: 'Hubstaff overvåger fjernmedarbejdere med skærmbilleder og GPS. GeoTapp certificerer hver opgave med beviser, kunden kan verificere. Forskellige orienteringer, forskellige brancher.',
    summary: 'Kort sagt:',
    summaryText: 'Hubstaff er beregnet til at overvåge digitale fjernmedarbejdere (skærmbilleder, produktivitet). GeoTapp er beregnet til at certificere fysiske medarbejdere i marken: rapporter, der ikke kan ændres, med ægte GPS, fotobeviser og uafhængig verificering af kunden. Desuden rejser Hubstaff i den italienske kontekst spørgsmål om GDPR-overholdelse, som GeoTapp løser ved sit design.',
    noteTitle: 'Vigtig bemærkning for det italienske marked',
    noteText: 'Kontinuerlig sporing af GPS-position og optagelse af skærmbilleder af medarbejdere falder inden for anvendelsesområdet for art. 4 i arbejderstatutten og kræver en fagforeningsaftale eller tilladelse fra Arbejdstilsynet. GeoTapp er udviklet til at være i overensstemmelse: det sporer kun i den aktive arbejdstid og leverer alle nødvendige skabeloner.',
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion', diff: 'Modsatte orienteringer',
    cta: 'Vil du se GeoTapp i aktion?',
    ctaDesc: 'Vi viser dig, hvordan en opgave bliver til verificerbart bevis, på 20 minutter, uforpligtende.',
    ctaBtn: 'Kom gratis i gang!',
    geo: ['Forseglet rapport: forsvarligt bevis for kunden','GPS kun verificeret under den aktive opgave','GDPR- og italienske datatilsyns-kompatibel','Udviklet til italienske driftsbrancher (rengøring, vedligeholdelse, sikkerhed)','Medarbejderen overvåges ikke, arbejdet certificeres'],
    comp: ['Udviklet til at overvåge digitale fjernmedarbejdere','Kontinuerlig GPS og automatiske skærmbilleder','GDPR-overholdelse, der skal verificeres i den italienske kontekst','Ingen rapporter, kunden kan verificere','Produktivitetsorienteret, ikke certificeringsorienteret'],
    footnote: '* Ifølge loven (GDPR art. 13) skal hver medarbejder underskrive en privatlivserklæring, før vedkommende geolokaliseres. De fleste GPS-programmer håndterer ikke dette: den juridiske risiko forbliver hos arbejdsgiveren. GeoTapp genererer automatisk den personlige erklæring, får den underskrevet digitalt af medarbejderen og blokerer GPS-adgangen, indtil den er underskrevet. Ingen anden software på markedet gør dette.',
  },
  sv: {
    badge: 'App-jämförelse', h1sub: 'certifiering eller övervakning?',
    desc: 'Hubstaff övervakar distansarbetare med skärmdumpar och GPS. GeoTapp certifierar varje uppdrag med bevis som kunden kan verifiera. Olika inriktningar, olika branscher.',
    summary: 'Kort sagt:',
    summaryText: 'Hubstaff är till för att övervaka digitala distansarbetare (skärmdumpar, produktivitet). GeoTapp är till för att certifiera fysisk personal ute i fält: rapporter som inte kan ändras, med äkta GPS, fotobevis och oberoende verifiering av kunden. Dessutom väcker Hubstaff i den italienska kontexten frågor om GDPR-efterlevnad som GeoTapp löser genom sin design.',
    noteTitle: 'Viktig anmärkning för den italienska marknaden',
    noteText: 'Kontinuerlig spårning av GPS-position och tagning av skärmdumpar av anställda omfattas av art. 4 i arbetstagarstadgan och kräver ett fackligt avtal eller tillstånd från Arbetsmiljöverket. GeoTapp är utformat för att vara förenligt: det spårar endast under den aktiva arbetstiden och tillhandahåller alla nödvändiga mallar.',
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion', diff: 'Motsatta inriktningar',
    cta: 'Vill du se GeoTapp i praktiken?',
    ctaDesc: 'Vi visar hur ett uppdrag blir verifierbart bevis, på 20 minuter, utan förpliktelser.',
    ctaBtn: 'Kom igång gratis!',
    geo: ['Förseglad rapport: försvarbart bevis för kunden','GPS verifierat endast under det aktiva uppdraget','GDPR- och italienska dataskyddsmyndigheten-kompatibel','Utformat för italienska operativa branscher (städ, underhåll, säkerhet)','Personalen övervakas inte, arbetet certifieras'],
    comp: ['Utformat för att övervaka digitala distansarbetare','Kontinuerlig GPS och automatiska skärmdumpar','GDPR-efterlevnad att verifiera i den italienska kontexten','Inga rapporter som kunden kan verifiera','Produktivitetsinriktat, inte certifieringsinriktat'],
    footnote: '* Enligt lag (GDPR art. 13) måste varje anställd underteckna ett integritetsmeddelande innan han eller hon geolokaliseras. De flesta GPS-program hanterar inte detta: den juridiska risken stannar hos arbetsgivaren. GeoTapp genererar automatiskt det personliga meddelandet, låter den anställde signera det digitalt och blockerar GPS-åtkomsten tills det är signerat. Ingen annan programvara på marknaden gör detta.',
  },
  nb: {
    badge: 'App-sammenligning', h1sub: 'sertifisering eller overvåking?',
    desc: 'Hubstaff overvåker fjernarbeidere med skjermbilder og GPS. GeoTapp sertifiserer hvert oppdrag med bevis som oppdragsgiveren kan verifisere. Forskjellige orienteringer, forskjellige bransjer.',
    summary: 'Kort sagt:',
    summaryText: 'Hubstaff er laget for å overvåke digitale fjernarbeidere (skjermbilder, produktivitet). GeoTapp er laget for å sertifisere fysiske ansatte ute i felt: rapporter som ikke kan endres, med ekte GPS, fotobevis og uavhengig verifisering av oppdragsgiveren. I tillegg reiser Hubstaff i den italienske konteksten spørsmål om GDPR-samsvar som GeoTapp løser gjennom sin design.',
    noteTitle: 'Viktig merknad for det italienske markedet',
    noteText: 'Kontinuerlig sporing av GPS-posisjon og det å ta skjermbilder av ansatte faller inn under art. 4 i arbeidstakerstatutten og krever en fagforeningsavtale eller tillatelse fra Arbeidstilsynet. GeoTapp er utviklet for å være i samsvar: det sporer bare i den aktive arbeidstiden og leverer alle nødvendige maler.',
    features: 'Sammenligning av nøkkelfunksjoner', feat: 'Funksjon', diff: 'Motsatte orienteringer',
    cta: 'Vil du se GeoTapp i aksjon?',
    ctaDesc: 'Vi viser deg hvordan et oppdrag blir til verifiserbart bevis, på 20 minutter, uforpliktende.',
    ctaBtn: 'Kom i gang gratis!',
    geo: ['Forseglet rapport: forsvarlig bevis for oppdragsgiveren','GPS verifisert bare under det aktive oppdraget','GDPR- og italiensk datatilsyn-kompatibel','Utviklet for italienske driftsbransjer (renhold, vedlikehold, sikkerhet)','Den ansatte overvåkes ikke, arbeidet sertifiseres'],
    comp: ['Utviklet for å overvåke digitale fjernarbeidere','Kontinuerlig GPS og automatiske skjermbilder','GDPR-samsvar som må verifiseres i den italienske konteksten','Ingen rapporter som oppdragsgiveren kan verifisere','Produktivitetsorientert, ikke sertifiseringsorientert'],
    footnote: '* Ifølge loven (GDPR art. 13) må hver ansatt signere en personvernerklæring før vedkommende geolokaliseres. De fleste GPS-programmer håndterer ikke dette: den juridiske risikoen blir hos arbeidsgiveren. GeoTapp genererer automatisk den personlige erklæringen, lar den ansatte signere den digitalt og blokkerer GPS-tilgangen til den er signert. Ingen annen programvare på markedet gjør dette.',
  },
  ru: {
    badge: 'Сравнение приложений', h1sub: 'сертификация или слежка?',
    desc: 'Hubstaff следит за удалёнными сотрудниками с помощью снимков экрана и GPS. GeoTapp сертифицирует каждый выезд доказательствами, которые проверяет заказчик. Разные направленности, разные отрасли.',
    summary: 'Коротко:',
    summaryText: 'Hubstaff рассчитан на слежку за цифровыми удалёнными сотрудниками (снимки экрана, производительность). GeoTapp рассчитан на сертификацию физических сотрудников на выезде: отчёты, которые нельзя подделать, с настоящим GPS, фотодоказательства и независимая проверка заказчиком. Кроме того, в итальянском контексте Hubstaff вызывает вопросы соответствия GDPR, которые GeoTapp решает на уровне дизайна.',
    noteTitle: 'Важное замечание для итальянского рынка',
    noteText: 'Непрерывное отслеживание GPS-позиции и съёмка снимков экрана сотрудников подпадают под ст. 4 Статута трудящихся и требуют профсоюзного соглашения или разрешения Инспекции труда. GeoTapp спроектирован так, чтобы соответствовать требованиям: он отслеживает только в активное рабочее время и предоставляет все необходимые шаблоны.',
    features: 'Сравнение ключевых функций', feat: 'Функция', diff: 'Противоположные направленности',
    cta: 'Хотите увидеть GeoTapp в действии?',
    ctaDesc: 'Покажем, как работа превращается в проверяемое доказательство, за 20 минут, без обязательств.',
    ctaBtn: 'Начните бесплатно!',
    geo: ['Опечатанный отчёт: защитимое доказательство для заказчика','GPS проверяется только во время активного выезда','Соответствие GDPR и итальянскому регулятору','Разработано для итальянских операционных отраслей (клининг, техобслуживание, охрана)','За сотрудником не следят, работа сертифицируется'],
    comp: ['Разработано для слежки за цифровыми удалёнными сотрудниками','Непрерывный GPS и автоматические снимки экрана','Соответствие GDPR требует проверки в итальянском контексте','Нет отчётов, проверяемых заказчиком','Ориентация на производительность, а не на сертификацию'],
    footnote: '* По закону (GDPR ст. 13) каждый сотрудник должен подписать уведомление о конфиденциальности перед геолокацией. Большинство GPS-программ это не обеспечивают: юридический риск остаётся на работодателе. GeoTapp автоматически создаёт персональное уведомление, даёт сотруднику подписать его цифровой подписью и блокирует доступ к GPS, пока оно не подписано. Ни одна другая программа на рынке этого не делает.',
  },
};

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

export default async function GeoTappVsHubstaffPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = T[locale] ?? T.en;
  const faqItems = FAQ[locale] ?? FAQ.en;
  const labels = ROWS_LABELS[locale] ?? ROWS_LABELS.en;
  const rows = labels.map((feature, i) => ({ feature, geotapp: ROWS_GEO[i], competitor: ROWS_COMP[i] }));

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  const breadcrumb = buildComparisonBreadcrumb({ locale, pathname: PATHNAME, competitorName: 'Hubstaff' });
  const meta = META[locale] ?? META.en;
  const article = buildComparisonArticle({ locale, pathname: PATHNAME, headline: meta.title, description: meta.description, datePublished: ARTICLE_DATE_PUBLISHED, dateModified: ARTICLE_DATE_MODIFIED });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">{t.badge}</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">GeoTapp vs Hubstaff: <span className="text-primary">{t.h1sub}</span></h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">{t.desc}</p>
          </div>
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-12">
            <p className="font-semibold text-primary mb-2">{t.summary}</p>
            <p className="text-text-secondary">{t.summaryText}</p>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 mb-12">
            <p className="font-semibold text-amber-400 mb-2">{t.noteTitle}</p>
            <p className="text-text-secondary text-sm">{t.noteText}</p>
          </div>
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">{t.features}</h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full">
                <thead><tr className="border-b border-white/10 bg-white/5"><th className="text-left py-3 px-4 font-semibold text-sm">{t.feat}</th><th className="text-center py-3 px-4 font-semibold text-sm text-primary">GeoTapp</th><th className="text-center py-3 px-4 font-semibold text-sm text-text-secondary">Hubstaff</th></tr></thead>
                <tbody>{rows.map((row, i) => (<tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors"><td className="py-3 px-4 text-sm text-text-secondary">{row.feature}</td><td className="py-3 px-4 text-center">{row.geotapp ? <span className="text-green-400 font-bold text-lg">&#10003;</span> : <span className="text-text-secondary/40 text-lg">&mdash;</span>}</td><td className="py-3 px-4 text-center">{row.competitor ? <span className="text-green-400 font-bold text-lg">&#10003;</span> : <span className="text-text-secondary/40 text-lg">&mdash;</span>}</td></tr>))}</tbody>
              </table>
            </div>
          </section>

          {/* Privacy consent footnote */}
          <div className="mb-16 px-4">
            <p className="text-xs text-text-secondary leading-relaxed">{t.footnote}</p>
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">{t.diff}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6"><h3 className="font-semibold text-primary mb-3">GeoTapp</h3><ul className="space-y-2 text-sm text-text-secondary">{t.geo.map((li, i) => <li key={i}>&bull; {li}</li>)}</ul></div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6"><h3 className="font-semibold text-text-secondary mb-3">Hubstaff</h3><ul className="space-y-2 text-sm text-text-secondary">{t.comp.map((li, i) => <li key={i}>&bull; {li}</li>)}</ul></div>
            </div>
          </section>
          <section className="mb-16"><h2 className="text-2xl font-bold mb-6">FAQ</h2><div className="space-y-4">{faqItems.map((item, i) => (<div key={i} className="border border-white/10 rounded-xl p-6"><h3 className="font-semibold mb-2">{item.q}</h3><p className="text-text-secondary text-sm">{item.a}</p></div>))}</div></section>
          <div className="text-center bg-gradient-to-br from-primary/20 to-purple-500/10 border border-primary/20 rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-3">{t.cta}</h2>
            <p className="text-text-secondary mb-6">{t.ctaDesc}</p>
            <TrialCTALink href={`/${locale}/trial/`} source="confronto_vs_hubstaff" className="btn-modern">{t.ctaBtn}</TrialCTALink>
          </div>
        </div>
      </div>
    </>
  );
}
