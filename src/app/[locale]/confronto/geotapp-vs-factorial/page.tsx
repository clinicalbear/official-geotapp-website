import type { Metadata } from 'next';
import ComparisonPageL from '@/components/ComparisonPageL';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-factorial/';
const ARTICLE_DATE_PUBLISHED = '2026-09-03';
const ARTICLE_DATE_MODIFIED = '2026-09-03';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs Factorial - Confronto 2026 | GeoTapp', description: 'GeoTapp vs Factorial: piattaforma HR o prova del lavoro svolto? Confronto su GPS verificato, report sigillati crittograficamente, verifica autonoma del committente e conformità GDPR.' },
  en: { title: 'GeoTapp vs Factorial - Comparison 2026 | GeoTapp', description: 'GeoTapp vs Factorial: HR platform or proof of work? Compare verified GPS, cryptographically sealed reports, independent client verification and GDPR compliance.' },
  de: { title: 'GeoTapp vs Factorial - Vergleich 2026 | GeoTapp', description: 'GeoTapp vs Factorial: HR-Plattform oder Arbeitsnachweis? Vergleich von geprüftem GPS, kryptographisch versiegelten Berichten und unabhängiger Prüfung durch den Auftraggeber.' },
  nl: { title: 'GeoTapp vs Factorial - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Factorial: HR-platform of bewijs van het werk? Vergelijk geverifieerde GPS, cryptografisch verzegelde rapporten en onafhankelijke controle door de opdrachtgever.' },
  fr: { title: 'GeoTapp vs Factorial - Comparaison 2026 | GeoTapp', description: 'GeoTapp vs Factorial : plateforme RH ou preuve du travail ? Comparez GPS vérifié, rapports scellés cryptographiquement et vérification autonome par le donneur d\'ordre.' },
  es: { title: 'GeoTapp vs Factorial - Comparación 2026 | GeoTapp', description: 'GeoTapp vs Factorial: ¿plataforma de RRHH o prueba del trabajo? Compara GPS verificado, informes sellados criptográficamente y verificación autónoma del cliente.' },
  pt: { title: 'GeoTapp vs Factorial - Comparação 2026 | GeoTapp', description: 'GeoTapp vs Factorial: plataforma de RH ou prova do trabalho? Compare GPS verificado, relatórios selados criptograficamente e verificação autónoma pelo cliente.' },
  da: { title: 'GeoTapp vs Factorial - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Factorial: HR-platform eller bevis for arbejdet? Sammenlign verificeret GPS, kryptografisk forseglede rapporter og kundens egen kontrol.' },
  sv: { title: 'GeoTapp vs Factorial - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs Factorial: HR-plattform eller bevis på arbetet? Jämför verifierad GPS, kryptografiskt förseglade rapporter och kundens egen kontroll.' },
  nb: { title: 'GeoTapp vs Factorial - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Factorial: HR-plattform eller bevis for arbeidet? Sammenlign verifisert GPS, kryptografisk forseglede rapporter og oppdragsgivers egen kontroll.' },
  ru: { title: 'GeoTapp vs Factorial, Сравнение 2026 | GeoTapp', description: 'GeoTapp vs Factorial: HR-платформа или доказательство выполненной работы? Сравните проверенный GPS, криптографически опечатанные отчёты и независимую проверку заказчиком.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza principale tra GeoTapp e Factorial?', a: 'Factorial è una piattaforma HR per le piccole e medie imprese, dove ferie, assenze, organigramma e timbratura stanno in un posto solo. GeoTapp certifica il lavoro sul campo e trasforma ogni intervento in un documento sigillato che il committente verifica da solo. Una gestisce le persone dentro l\'azienda, l\'altra difende il lavoro fuori.' },
    { q: 'Factorial ha il controllo anti-spoofing sul GPS?', a: 'La timbratura di Factorial registra la posizione quando l\'azienda attiva l\'opzione, e la geolocalizzazione resta una funzione facoltativa del modulo presenze. Una verifica di autenticità del segnale, quella che smaschera le app di finta posizione e i dispositivi manomessi, non compare tra le funzioni dichiarate. In GeoTapp il controllo gira a ogni timbratura.' },
    { q: 'Il committente può verificare da solo i report?', a: 'I riepiloghi di Factorial servono all\'ufficio del personale e alla busta paga, e restano documenti interni. GeoTapp produce un pacchetto sigillato che il cliente finale apre e controlla per conto suo, senza account, senza connessione e senza passare dai nostri sistemi, perché la catena di hash sta dentro il file.' },
    { q: 'GeoTapp o Factorial per un\'impresa di pulizie?', a: 'Se il problema è tenere in ordine ferie, permessi e cedolini di una squadra che cresce, Factorial è comodo, chiaro e si attiva da solo. Se il problema è il committente che trattiene una fattura sostenendo che il servizio non è stato fatto, un riepilogo di presenze non ti difende. I due strumenti coprono due momenti diversi e possono stare insieme.' },
  ],
  en: [
    { q: 'What is the main difference between GeoTapp and Factorial?', a: 'Factorial is an HR platform for small and medium companies, where leave, absences, org chart and clock-in all live in one place. GeoTapp certifies field work and turns every job into a sealed document the client verifies alone. One manages people inside the company, the other defends the work outside it.' },
    { q: 'Does Factorial check GPS for spoofing?', a: 'Factorial clock-in records the position when the company switches the option on, and geolocation stays an optional part of the time tracking module. A check on the authenticity of the signal, the one that catches fake location apps and tampered devices, is not listed among the declared features. In GeoTapp that check runs at every clock-in.' },
    { q: 'Can the client verify the reports independently?', a: 'Factorial summaries serve the HR office and payroll, and they stay internal documents. GeoTapp produces a sealed package the end client opens and checks alone, with no account, no connection and no need to come through our systems, because the hash chain travels inside the file.' },
    { q: 'GeoTapp or Factorial for a cleaning company?', a: 'If the problem is keeping leave, time off and payslips in order for a growing team, Factorial is comfortable, clear and you can set it up yourself. If the problem is a client holding back an invoice claiming the service was never delivered, an attendance summary will not defend you. The two tools cover two different moments and can sit together.' },
  ],
  de: [
    { q: 'Was ist der Hauptunterschied zwischen GeoTapp und Factorial?', a: 'Factorial ist eine HR-Plattform für kleine und mittlere Unternehmen, in der Urlaub, Abwesenheiten, Organigramm und Stempelung an einem Ort liegen. GeoTapp zertifiziert die Arbeit vor Ort und macht aus jedem Einsatz ein versiegeltes Dokument, das der Auftraggeber allein prüft. Das eine verwaltet Menschen im Unternehmen, das andere verteidigt die Arbeit außerhalb.' },
    { q: 'Prüft Factorial das GPS auf Manipulation?', a: 'Die Stempelung von Factorial erfasst die Position, wenn das Unternehmen die Option aktiviert, und die Ortung bleibt ein freiwilliger Teil der Zeiterfassung. Eine Prüfung der Echtheit des Signals, die gefälschte Standort-Apps und manipulierte Geräte entlarvt, gehört nicht zu den angegebenen Funktionen. Bei GeoTapp läuft diese Prüfung bei jeder Stempelung.' },
    { q: 'Kann der Auftraggeber die Berichte selbst prüfen?', a: 'Die Auswertungen von Factorial dienen der Personalabteilung und der Lohnabrechnung und bleiben interne Dokumente. GeoTapp erzeugt ein versiegeltes Paket, das der Endkunde allein öffnet und kontrolliert, ohne Konto, ohne Verbindung und ohne unsere Systeme, denn die Hash-Kette steckt in der Datei selbst.' },
    { q: 'GeoTapp oder Factorial für ein Reinigungsunternehmen?', a: 'Wenn es darum geht, Urlaub, Freizeitausgleich und Lohnzettel eines wachsenden Teams in Ordnung zu halten, ist Factorial bequem, klar und selbst einzurichten. Wenn ein Auftraggeber eine Rechnung zurückhält und behauptet, die Leistung sei nie erbracht worden, verteidigt Sie keine Anwesenheitsübersicht. Die beiden Werkzeuge decken zwei verschiedene Momente ab und können nebeneinander laufen.' },
  ],
  fr: [
    { q: 'Quelle est la principale différence entre GeoTapp et Factorial ?', a: 'Factorial est une plateforme RH pour les PME, où congés, absences, organigramme et pointage tiennent au même endroit. GeoTapp certifie le travail sur le terrain et transforme chaque intervention en un document scellé que le donneur d\'ordre vérifie seul. L\'une gère les personnes dans l\'entreprise, l\'autre défend le travail au dehors.' },
    { q: 'Factorial vérifie-t-il la falsification du GPS ?', a: 'Le pointage de Factorial enregistre la position lorsque l\'entreprise active l\'option, et la géolocalisation reste une fonction facultative du module de temps. Un contrôle d\'authenticité du signal, celui qui démasque les applications de fausse position et les appareils modifiés, ne figure pas parmi les fonctions annoncées. Chez GeoTapp ce contrôle tourne à chaque pointage.' },
    { q: 'Le donneur d\'ordre peut-il vérifier les rapports lui-même ?', a: 'Les récapitulatifs de Factorial servent au service RH et à la paie, et restent des documents internes. GeoTapp produit un dossier scellé que le client final ouvre et contrôle seul, sans compte, sans connexion et sans passer par nos systèmes, car la chaîne de hachage voyage dans le fichier.' },
    { q: 'GeoTapp ou Factorial pour une entreprise de nettoyage ?', a: 'Si le problème est de tenir en ordre congés, absences et bulletins d\'une équipe qui grandit, Factorial est confortable, clair et se met en route tout seul. Si le problème est un client qui retient une facture en affirmant que la prestation n\'a jamais eu lieu, aucun récapitulatif de pointage ne vous défend. Les deux outils couvrent deux moments différents et peuvent cohabiter.' },
  ],
  es: [
    { q: '¿Cuál es la principal diferencia entre GeoTapp y Factorial?', a: 'Factorial es una plataforma de RRHH para pymes, donde vacaciones, ausencias, organigrama y fichaje viven en un mismo sitio. GeoTapp certifica el trabajo en campo y convierte cada intervención en un documento sellado que el cliente verifica solo. Una gestiona a las personas dentro de la empresa, la otra defiende el trabajo fuera.' },
    { q: '¿Factorial comprueba si el GPS está falsificado?', a: 'El fichaje de Factorial registra la posición cuando la empresa activa la opción, y la geolocalización sigue siendo una función opcional del módulo horario. Una comprobación de autenticidad de la señal, la que desenmascara las aplicaciones de posición falsa y los dispositivos manipulados, no aparece entre las funciones declaradas. En GeoTapp ese control se ejecuta en cada fichaje.' },
    { q: '¿Puede el cliente verificar los informes por su cuenta?', a: 'Los resúmenes de Factorial sirven al departamento de personal y a la nómina, y son documentos internos. GeoTapp genera un paquete sellado que el cliente final abre y comprueba solo, sin cuenta, sin conexión y sin pasar por nuestros sistemas, porque la cadena de hash viaja dentro del archivo.' },
    { q: '¿GeoTapp o Factorial para una empresa de limpieza?', a: 'Si el problema es tener en orden vacaciones, permisos y nóminas de un equipo que crece, Factorial es cómodo, claro y se pone en marcha solo. Si el problema es el cliente que retiene una factura diciendo que el servicio no se hizo, ningún resumen de fichajes te defiende. Las dos herramientas cubren dos momentos distintos y pueden convivir.' },
  ],
  pt: [
    { q: 'Qual é a principal diferença entre a GeoTapp e a Factorial?', a: 'A Factorial é uma plataforma de RH para pequenas e médias empresas, onde férias, ausências, organograma e picagem vivem no mesmo sítio. A GeoTapp certifica o trabalho no terreno e transforma cada intervenção num documento selado que o cliente verifica sozinho. Uma gere as pessoas dentro da empresa, a outra defende o trabalho lá fora.' },
    { q: 'A Factorial verifica a falsificação do GPS?', a: 'A picagem da Factorial regista a posição quando a empresa ativa a opção, e a geolocalização continua a ser uma função opcional do módulo de tempos. Uma verificação de autenticidade do sinal, aquela que desmascara as aplicações de posição falsa e os dispositivos manipulados, não consta das funções declaradas. Na GeoTapp esse controlo corre em cada picagem.' },
    { q: 'O cliente pode verificar os relatórios sozinho?', a: 'Os resumos da Factorial servem o departamento de pessoal e o processamento salarial, e são documentos internos. A GeoTapp produz um pacote selado que o cliente final abre e confere por conta própria, sem conta, sem ligação e sem passar pelos nossos sistemas, porque a cadeia de hash viaja dentro do ficheiro.' },
    { q: 'GeoTapp ou Factorial para uma empresa de limpeza?', a: 'Se o problema é manter em ordem férias, faltas e recibos de uma equipa que cresce, a Factorial é confortável, clara e arranca sozinha. Se o problema é o cliente que retém uma fatura dizendo que o serviço não foi feito, nenhum resumo de presenças o defende. As duas ferramentas cobrem momentos diferentes e podem conviver.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Factorial?', a: 'Factorial is een HR-platform voor kleine en middelgrote bedrijven, waar verlof, verzuim, organigram en inklokken op één plek staan. GeoTapp certificeert het werk op locatie en maakt van elke opdracht een verzegeld document dat de opdrachtgever zelf verifieert. Het ene beheert mensen binnen het bedrijf, het andere verdedigt het werk daarbuiten.' },
    { q: 'Controleert Factorial of de GPS vervalst is?', a: 'Het inklokken van Factorial legt de positie vast wanneer het bedrijf de optie aanzet, en lokalisatie blijft een keuzefunctie van de urenmodule. Een controle op de echtheid van het signaal, die nep-locatieapps en gemanipuleerde toestellen ontmaskert, staat niet bij de opgegeven functies. Bij GeoTapp draait die controle bij elke registratie.' },
    { q: 'Kan de opdrachtgever de rapporten zelf controleren?', a: 'De overzichten van Factorial dienen de personeelsafdeling en de loonstrook, en blijven interne documenten. GeoTapp levert een verzegeld pakket dat de eindklant alleen opent en nakijkt, zonder account, zonder verbinding en zonder onze systemen, want de hashketen zit in het bestand zelf.' },
    { q: 'GeoTapp of Factorial voor een schoonmaakbedrijf?', a: 'Als het probleem is om verlof, vrije dagen en loonstroken van een groeiend team op orde te houden, is Factorial prettig, helder en zet je het zelf aan. Als het probleem een klant is die een factuur inhoudt met de bewering dat de dienst nooit is geleverd, verdedigt geen enkel urenoverzicht je. De twee gereedschappen dekken twee verschillende momenten en kunnen samen bestaan.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Factorial?', a: 'Factorial er en HR-platform til små og mellemstore virksomheder, hvor ferie, fravær, organisationsdiagram og stempling ligger samme sted. GeoTapp certificerer arbejdet i marken og gør hver opgave til et forseglet dokument, som kunden selv kontrollerer. Det ene håndterer mennesker inde i virksomheden, det andet forsvarer arbejdet udenfor.' },
    { q: 'Kontrollerer Factorial om GPS er forfalsket?', a: 'Factorials stempling registrerer positionen, når virksomheden slår funktionen til, og lokaliseringen forbliver en valgfri del af tidsmodulet. En kontrol af signalets ægthed, den der afslører falske positionsapps og manipulerede enheder, står ikke blandt de angivne funktioner. Hos GeoTapp kører den kontrol ved hver stempling.' },
    { q: 'Kan kunden selv kontrollere rapporterne?', a: 'Factorials oversigter tjener personaleafdelingen og lønnen og forbliver interne dokumenter. GeoTapp laver en forseglet pakke, som slutkunden åbner og kontrollerer alene, uden konto, uden forbindelse og uden at gå gennem vores systemer, for hash-kæden ligger inde i filen.' },
    { q: 'GeoTapp eller Factorial til et rengøringsfirma?', a: 'Hvis problemet er at holde styr på ferie, fridage og lønsedler i et voksende team, er Factorial bekvemt, klart og noget man selv sætter op. Hvis problemet er en kunde, der holder en faktura tilbage og påstår, at ydelsen aldrig blev leveret, forsvarer ingen timeoversigt dig. De to værktøjer dækker to forskellige øjeblikke og kan sagtens stå side om side.' },
  ],
  sv: [
    { q: 'Vad är den största skillnaden mellan GeoTapp och Factorial?', a: 'Factorial är en HR-plattform för små och medelstora företag, där semester, frånvaro, organisationsschema och instämpling ligger på samma ställe. GeoTapp certifierar arbetet i fält och gör varje uppdrag till ett förseglat dokument som kunden själv verifierar. Det ena sköter människorna inne i företaget, det andra försvarar arbetet utanför.' },
    { q: 'Kontrollerar Factorial om GPS är förfalskad?', a: 'Factorials instämpling registrerar positionen när företaget slår på alternativet, och lokaliseringen förblir en valfri del av tidmodulen. En kontroll av signalens äkthet, den som avslöjar falska positionsappar och manipulerade enheter, finns inte bland de angivna funktionerna. Hos GeoTapp körs den kontrollen vid varje instämpling.' },
    { q: 'Kan kunden kontrollera rapporterna själv?', a: 'Factorials sammanställningar tjänar personalavdelningen och lönen och förblir interna dokument. GeoTapp skapar ett förseglat paket som slutkunden öppnar och kontrollerar själv, utan konto, utan uppkoppling och utan att gå via våra system, för hashkedjan ligger inuti filen.' },
    { q: 'GeoTapp eller Factorial för ett städföretag?', a: 'Om problemet är att hålla ordning på semester, ledighet och lönebesked i ett växande team är Factorial bekvämt, tydligt och något du sätter upp själv. Om problemet är en kund som håller inne en faktura och hävdar att tjänsten aldrig utfördes försvarar ingen tidsammanställning dig. De två verktygen täcker två olika ögonblick och kan stå bredvid varandra.' },
  ],
  nb: [
    { q: 'Hva er den viktigste forskjellen mellom GeoTapp og Factorial?', a: 'Factorial er en HR-plattform for små og mellomstore bedrifter, der ferie, fravær, organisasjonskart og stempling ligger på samme sted. GeoTapp sertifiserer arbeidet ute i felten og gjør hvert oppdrag til et forseglet dokument som oppdragsgiveren selv verifiserer. Det ene håndterer menneskene inne i bedriften, det andre forsvarer arbeidet utenfor.' },
    { q: 'Kontrollerer Factorial om GPS er forfalsket?', a: 'Stemplingen i Factorial registrerer posisjonen når bedriften slår på funksjonen, og lokaliseringen forblir en valgfri del av timemodulen. En kontroll av signalets ekthet, den som avslører falske posisjonsapper og manipulerte enheter, står ikke blant de oppgitte funksjonene. Hos GeoTapp kjøres den kontrollen ved hver stempling.' },
    { q: 'Kan oppdragsgiveren kontrollere rapportene selv?', a: 'Oversiktene i Factorial tjener personalavdelingen og lønnen, og forblir interne dokumenter. GeoTapp lager en forseglet pakke som sluttkunden åpner og kontrollerer alene, uten konto, uten forbindelse og uten å gå gjennom systemene våre, for hash-kjeden ligger inne i filen.' },
    { q: 'GeoTapp eller Factorial for et renholdsfirma?', a: 'Er problemet å holde orden på ferie, fridager og lønnsslipper i et voksende team, er Factorial behagelig, tydelig og noe du setter opp selv. Er problemet en oppdragsgiver som holder tilbake en faktura og påstår at tjenesten aldri ble levert, forsvarer ingen timeoversikt deg. De to verktøyene dekker to ulike øyeblikk og kan stå side om side.' },
  ],
  ru: [
    { q: 'В чём главное отличие GeoTapp от Factorial?', a: 'Factorial, это HR-платформа для малого и среднего бизнеса, где отпуска, отсутствия, оргструктура и отметка времени лежат в одном месте. GeoTapp сертифицирует работу на объекте и превращает каждый выезд в опечатанный документ, который заказчик проверяет сам. Одна ведёт людей внутри компании, другая защищает работу снаружи.' },
    { q: 'Проверяет ли Factorial подделку GPS?', a: 'Отметка в Factorial фиксирует позицию, когда компания включает эту опцию, и геолокация остаётся необязательной частью модуля учёта времени. Проверки подлинности сигнала, той, что разоблачает приложения с фальшивой позицией и модифицированные устройства, среди заявленных функций нет. В GeoTapp такая проверка идёт при каждой отметке.' },
    { q: 'Может ли заказчик проверить отчёты самостоятельно?', a: 'Сводки Factorial служат кадровому отделу и расчёту зарплаты и остаются внутренними документами. GeoTapp формирует опечатанный пакет, который конечный заказчик открывает и проверяет сам, без учётной записи, без интернета и без обращения к нашим системам, потому что цепочка хешей лежит внутри файла.' },
    { q: 'GeoTapp или Factorial для клининговой компании?', a: 'Если задача, держать в порядке отпуска, отгулы и расчётные листки растущей бригады, Factorial удобен, понятен и запускается своими силами. Если задача, ответить заказчику, который придерживает счёт и утверждает, что услуги не было, никакая сводка присутствия вас не защитит. Два инструмента закрывают разные моменты и спокойно стоят рядом.' },
  ],
};

// Etichette della tabella di confronto, per locale.
const ROWS_LABELS: Record<string, string[]> = {
  it: ['GPS verificato con controllo anti-spoofing','Report sigillato crittograficamente','Verifica indipendente da parte del committente','Foto dell\'intervento in catena hash','Timbratura da smartphone','Geolocalizzazione sul luogo di lavoro','App nativa Android e iOS','Gestione ferie e assenze','Elaborazione paghe e cedolini','Badge NFC e lettori fisici','Attivazione autonoma con prova gratuita','Progettato per squadre sul campo','Informativa GPS automatica con firma digitale*'],
  en: ['GPS verified with anti-spoofing check','Cryptographically sealed report','Independent verification by the client','Job photos in a hash chain','Smartphone clock-in','Geolocation on the work site','Native Android and iOS app','Leave and absence management','Payroll processing and payslips','NFC badges and physical readers','Self-service activation with free trial','Built for field teams','Automatic GPS privacy notice with digital signature*'],
  de: ['GPS mit Anti-Spoofing-Prüfung verifiziert','Kryptographisch versiegelter Bericht','Unabhängige Prüfung durch den Auftraggeber','Einsatzfotos in einer Hash-Kette','Stempelung per Smartphone','Ortung am Einsatzort','Native App für Android und iOS','Urlaubs- und Abwesenheitsverwaltung','Lohnabrechnung und Lohnzettel','NFC-Ausweise und Lesegeräte','Selbstständige Aktivierung mit kostenloser Testphase','Für Außendienst-Teams gebaut','Automatische GPS-Datenschutzerklärung mit digitaler Signatur*'],
  fr: ['GPS vérifié avec contrôle anti-spoofing','Rapport scellé cryptographiquement','Vérification indépendante par le donneur d\'ordre','Photos d\'intervention en chaîne de hachage','Pointage depuis smartphone','Géolocalisation sur le lieu de travail','Application native Android et iOS','Gestion des congés et absences','Traitement de la paie et bulletins','Badges NFC et lecteurs physiques','Activation autonome avec essai gratuit','Conçu pour les équipes de terrain','Avis de confidentialité GPS automatique avec signature numérique*'],
  es: ['GPS verificado con control anti-spoofing','Informe sellado criptográficamente','Verificación independiente por el cliente','Fotos de la intervención en cadena hash','Fichaje desde smartphone','Geolocalización en el lugar de trabajo','App nativa Android e iOS','Gestión de vacaciones y ausencias','Procesamiento de nóminas','Tarjetas NFC y lectores físicos','Alta autónoma con prueba gratuita','Diseñado para equipos en campo','Aviso de privacidad GPS automático con firma digital*'],
  pt: ['GPS verificado com controlo anti-spoofing','Relatório selado criptograficamente','Verificação independente pelo cliente','Fotos da intervenção em cadeia hash','Picagem a partir do smartphone','Geolocalização no local de trabalho','App nativa Android e iOS','Gestão de férias e ausências','Processamento salarial e recibos','Cartões NFC e leitores físicos','Ativação autónoma com teste gratuito','Feito para equipas no terreno','Aviso de privacidade GPS automático com assinatura digital*'],
  nl: ['GPS geverifieerd met anti-spoofingcontrole','Cryptografisch verzegeld rapport','Onafhankelijke controle door de opdrachtgever','Werkfoto\'s in een hashketen','Inklokken via smartphone','Lokalisatie op de werkplek','Native app voor Android en iOS','Verlof- en afwezigheidsbeheer','Salarisverwerking en loonstroken','NFC-badges en fysieke lezers','Zelf activeren met gratis proefperiode','Gebouwd voor buitendienstteams','Automatische GPS-privacyverklaring met digitale handtekening*'],
  da: ['GPS verificeret med anti-spoofing-kontrol','Kryptografisk forseglet rapport','Uafhængig kontrol af kunden','Opgavefotos i en hash-kæde','Stempling fra smartphone','Lokalisering på arbejdsstedet','Native app til Android og iOS','Ferie- og fraværsstyring','Lønbehandling og lønsedler','NFC-kort og fysiske læsere','Selvbetjent opstart med gratis prøveperiode','Bygget til teams i marken','Automatisk GPS-privatlivserklæring med digital signatur*'],
  sv: ['GPS verifierad med anti-spoofing-kontroll','Kryptografiskt förseglad rapport','Oberoende kontroll av kunden','Uppdragsfoton i en hashkedja','Instämpling från smartphone','Lokalisering på arbetsplatsen','Native app för Android och iOS','Hantering av semester och frånvaro','Lönehantering och lönebesked','NFC-kort och fysiska läsare','Egen start med gratis provperiod','Byggd för fältteam','Automatiskt GPS-integritetsmeddelande med digital signatur*'],
  nb: ['GPS verifisert med anti-spoofing-kontroll','Kryptografisk forseglet rapport','Uavhengig kontroll av oppdragsgiver','Oppdragsbilder i en hash-kjede','Stempling fra smarttelefon','Lokalisering på arbeidsstedet','Native app for Android og iOS','Ferie- og fraværshåndtering','Lønnskjøring og lønnsslipper','NFC-kort og fysiske lesere','Selvbetjent oppstart med gratis prøveperiode','Bygget for feltteam','Automatisk GPS-personvernerklæring med digital signatur*'],
  ru: ['GPS с проверкой на подмену','Криптографически опечатанный отчёт','Независимая проверка заказчиком','Фото работ в цепочке хешей','Отметка со смартфона','Геолокация на объекте','Нативное приложение Android и iOS','Управление отпусками и отсутствиями','Расчёт зарплаты и расчётные листки','NFC-карты и стационарные считыватели','Самостоятельный старт с бесплатным периодом','Сделано для выездных бригад','Автоматическое уведомление о GPS с цифровой подписью*'],
};

const ROWS_GEO =  [true,true,true,true,true,true,true,true,false,false,true,true,true];
const ROWS_COMP = [false,false,false,false,true,true,true,true,true,false,true,false,false];

type Copy = {
  badge: string; h1sub: string; desc: string; summary: string; summaryText: string;
  noteTitle: string; noteText: string; features: string; feat: string; diff: string;
  cta: string; ctaDesc: string; ctaBtn: string; geo: string[]; comp: string[]; footnote: string;
};

const T: Record<string, Copy> = {
  it: {
    badge: 'Confronto App', h1sub: 'l\'ufficio del personale o il cantiere?',
    desc: 'Factorial mette ferie, assenze, organigramma e timbratura dentro un\'unica piattaforma HR, con prezzi pubblici e attivazione rapida. GeoTapp certifica il singolo intervento, con GPS verificato, foto sigillate e un report che il cliente finale controlla da solo.',
    summary: 'In sintesi:',
    summaryText: 'Factorial risolve il lavoro dell\'ufficio del personale, e lo fa bene, con un\'interfaccia che si capisce al primo giro. GeoTapp risolve il momento in cui il committente sostiene che il servizio non è stato fatto, e quel momento non si risolve con un riepilogo di presenze.',
    noteTitle: 'La geolocalizzazione è una spunta, il rischio resta al titolare',
    noteText: 'Attivare la posizione sulla timbratura è una casella da spuntare in una schermata di configurazione, e dentro quella casella ci stanno l\'articolo 4 dello Statuto e l\'informativa che il lavoratore deve firmare prima. Se il software registra la posizione ma quel passaggio lo lascia a te, il rischio te lo tieni tu. GeoTapp genera l\'informativa, la fa firmare digitalmente e tiene chiuso il GPS finché la firma non c\'è. E la posizione la verifica prima di accettarla, perché una coordinata falsa entra in archivio con la stessa faccia di una vera.',
    features: 'Confronto funzionalità chiave', feat: 'Funzionalità', diff: 'Approcci diversi',
    cta: 'Vuoi vedere GeoTapp in azione?',
    ctaDesc: 'Dieci minuti, e vedi come un intervento diventa una prova che il tuo committente verifica da solo.',
    ctaBtn: 'Inizia subito gratuitamente!',
    geo: ['Report sigillato, prova difendibile davanti al committente','GPS verificato prima ancora di essere registrato','Foto dell\'intervento in catena hash, se le tocchi si vede','Il committente controlla da solo, senza account e offline','Pensato per pulizie, manutenzione, vigilanza, installatori'],
    comp: ['Piattaforma HR completa, dalle ferie all\'organigramma','Timbratura da app, da tablet e da postazione','Prezzi pubblici e attivazione senza passare da un venditore','Geolocalizzazione facoltativa, senza verifica del segnale','Riepiloghi per l\'ufficio del personale, non per il cliente finale'],
    footnote: '* Per legge (GDPR Art. 13 e, in Italia, Art. 4 dello Statuto dei Lavoratori) ogni dipendente deve firmare un\'informativa privacy prima di essere geolocalizzato. La maggior parte dei software con GPS non lo gestisce, e il rischio legale resta al titolare. GeoTapp genera l\'informativa personalizzata, la fa firmare digitalmente al dipendente e tiene chiuso il GPS finché la firma non c\'è.',
  },
  en: {
    badge: 'App Comparison', h1sub: 'the HR office or the job site?',
    desc: 'Factorial puts leave, absences, org chart and clock-in inside one HR platform, with public pricing and quick setup. GeoTapp certifies the single job, with verified GPS, sealed photos and a report the end client checks alone.',
    summary: 'In short:',
    summaryText: 'Factorial solves the work of the HR office, and it solves it well, with an interface people understand on the first try. GeoTapp solves the moment a client claims the service was never delivered, and that moment is not solved by an attendance summary.',
    noteTitle: 'Geolocation is a checkbox, the risk stays with the employer',
    noteText: 'Turning location on for clock-in is a box you tick in a settings screen, and inside that box sit the privacy notice the worker has to sign first and the local rules on monitoring. If the software records the position but leaves that step to you, the risk stays yours. GeoTapp generates the notice, has it signed digitally and keeps GPS closed until the signature is there. It also verifies the position before accepting it, because a fake coordinate enters the archive wearing the same face as a real one.',
    features: 'Key feature comparison', feat: 'Feature', diff: 'Different approaches',
    cta: 'Want to see GeoTapp at work?',
    ctaDesc: 'Ten minutes, and you see how a job turns into evidence your client verifies alone.',
    ctaBtn: 'Start free now!',
    geo: ['Sealed report, evidence that holds in front of the client','GPS verified before the record is even stored','Job photos in a hash chain, tampering shows','The client checks alone, no account, offline','Built for cleaning, maintenance, security, installers'],
    comp: ['Complete HR platform, from leave to org chart','Clock-in from app, tablet and workstation','Public pricing and setup without going through a salesperson','Optional geolocation, no check on the signal','Summaries for the HR office, not for the end client'],
    footnote: '* By law (GDPR Art. 13) every employee must sign a privacy notice before being geolocated. Most GPS software leaves that step to you, and the legal risk stays with the employer. GeoTapp generates the personalised notice, has the employee sign it digitally and keeps GPS closed until the signature is there.',
  },
  de: {
    badge: 'App-Vergleich', h1sub: 'die Personalabteilung oder die Baustelle?',
    desc: 'Factorial legt Urlaub, Abwesenheiten, Organigramm und Stempelung in eine einzige HR-Plattform, mit offenen Preisen und schneller Einrichtung. GeoTapp belegt den einzelnen Einsatz, mit geprüftem GPS, versiegelten Fotos und einem Bericht, den der Endkunde allein kontrolliert.',
    summary: 'Kurz gesagt:',
    summaryText: 'Factorial löst die Arbeit der Personalabteilung, und zwar gut, mit einer Oberfläche, die man beim ersten Anlauf versteht. GeoTapp löst den Moment, in dem ein Auftraggeber behauptet, die Leistung sei nie erbracht worden, und dieser Moment löst sich nicht mit einer Anwesenheitsübersicht.',
    noteTitle: 'Die Ortung ist ein Häkchen, das Risiko bleibt beim Arbeitgeber',
    noteText: 'Die Position bei der Stempelung einzuschalten ist ein Kästchen in einer Einstellungsmaske, und in diesem Kästchen stecken die Datenschutzerklärung, die vorher unterschrieben sein muss, und die Mitbestimmung des Betriebsrats. Wenn die Software die Position erfasst, diesen Schritt aber Ihnen überlässt, bleibt das Risiko bei Ihnen. GeoTapp erstellt die Erklärung, lässt sie digital unterschreiben und hält das GPS geschlossen, solange die Unterschrift fehlt. Und die Position wird geprüft, bevor sie angenommen wird, denn eine gefälschte Koordinate landet mit demselben Gesicht im Archiv wie eine echte.',
    features: 'Vergleich der wichtigsten Funktionen', feat: 'Funktion', diff: 'Unterschiedliche Ansätze',
    cta: 'GeoTapp in Aktion sehen?',
    ctaDesc: 'Zehn Minuten, und Sie sehen, wie aus einem Einsatz ein Nachweis wird, den Ihr Auftraggeber selbst prüft.',
    ctaBtn: 'Jetzt kostenlos starten!',
    geo: ['Versiegelter Bericht, belastbar vor dem Auftraggeber','GPS geprüft, bevor der Datensatz überhaupt gespeichert wird','Einsatzfotos in der Hash-Kette, jede Änderung fällt auf','Der Auftraggeber prüft allein, ohne Konto und offline','Gemacht für Reinigung, Wartung, Sicherheit, Installateure'],
    comp: ['Vollständige HR-Plattform, vom Urlaub bis zum Organigramm','Stempelung per App, Tablet und Terminal','Offene Preise, Einrichtung ohne Vertriebsgespräch','Ortung optional, ohne Prüfung des Signals','Auswertungen für die Personalabteilung, nicht für den Endkunden'],
    footnote: '* Gesetzlich (DSGVO Art. 13) muss jede beschäftigte Person vor der Ortung eine Datenschutzerklärung unterschreiben. Die meisten GPS-Programme überlassen diesen Schritt Ihnen, und das rechtliche Risiko bleibt beim Arbeitgeber. GeoTapp erstellt die persönliche Erklärung, lässt sie digital unterschreiben und hält das GPS geschlossen, solange die Unterschrift fehlt.',
  },
  fr: {
    badge: 'Comparatif App', h1sub: 'le service RH ou le chantier ?',
    desc: 'Factorial réunit congés, absences, organigramme et pointage dans une seule plateforme RH, avec des tarifs publics et une mise en route rapide. GeoTapp certifie l\'intervention, avec un GPS vérifié, des photos scellées et un rapport que le client final contrôle seul.',
    summary: 'En résumé :',
    summaryText: 'Factorial résout le travail du service RH, et il le fait bien, avec une interface que l\'on comprend du premier coup. GeoTapp résout le moment où un client affirme que la prestation n\'a jamais eu lieu, et ce moment ne se règle pas avec un récapitulatif de pointages.',
    noteTitle: 'La géolocalisation est une case à cocher, le risque reste à l\'employeur',
    noteText: 'Activer la position sur le pointage tient dans une case d\'un écran de configuration, et dans cette case logent l\'information préalable du salarié, la déclaration CNIL et la consultation du CSE. Si le logiciel enregistre la position mais vous laisse cette étape, le risque reste chez vous. GeoTapp génère l\'information, la fait signer numériquement et garde le GPS fermé tant que la signature manque. Et la position, il la vérifie avant de l\'accepter, car une coordonnée falsifiée entre en archive avec le même visage qu\'une vraie.',
    features: 'Comparatif des fonctions clés', feat: 'Fonction', diff: 'Approches différentes',
    cta: 'Envie de voir GeoTapp à l\'œuvre ?',
    ctaDesc: 'Dix minutes, et vous voyez comment une intervention devient une preuve que votre client vérifie seul.',
    ctaBtn: 'Commencez gratuitement !',
    geo: ['Rapport scellé, une preuve qui tient devant le client','GPS vérifié avant même d\'être enregistré','Photos d\'intervention en chaîne de hachage, toute retouche se voit','Le client contrôle seul, sans compte et hors ligne','Pensé pour le nettoyage, la maintenance, la sécurité, les installateurs'],
    comp: ['Plateforme RH complète, des congés à l\'organigramme','Pointage depuis l\'application, la tablette et le poste fixe','Tarifs publics et mise en route sans passer par un commercial','Géolocalisation facultative, sans contrôle du signal','Récapitulatifs pour le service RH, pas pour le client final'],
    footnote: '* La loi (RGPD art. 13) impose que chaque salarié signe une information sur les données avant toute géolocalisation. La plupart des logiciels GPS laissent cette étape à votre charge, et le risque juridique reste à l\'employeur. GeoTapp génère l\'information personnalisée, la fait signer numériquement au salarié et garde le GPS fermé tant que la signature manque.',
  },
  es: {
    badge: 'Comparativa App', h1sub: '¿el departamento de personal o la obra?',
    desc: 'Factorial reúne vacaciones, ausencias, organigrama y fichaje en una sola plataforma de RRHH, con precios públicos y alta rápida. GeoTapp certifica la intervención concreta, con GPS verificado, fotos selladas y un informe que el cliente final comprueba solo.',
    summary: 'En resumen:',
    summaryText: 'Factorial resuelve el trabajo del departamento de personal, y lo resuelve bien, con una interfaz que se entiende a la primera. GeoTapp resuelve el momento en que un cliente sostiene que el servicio nunca se prestó, y ese momento no se arregla con un resumen de fichajes.',
    noteTitle: 'La geolocalización es una casilla, el riesgo se queda en la empresa',
    noteText: 'Activar la posición en el fichaje es una casilla de una pantalla de configuración, y dentro de esa casilla están la información previa al trabajador, el artículo 20.3 del Estatuto y el papel de la representación legal. Si el programa registra la posición pero te deja ese paso a ti, el riesgo te lo quedas tú. GeoTapp genera la información, la hace firmar digitalmente y mantiene el GPS cerrado mientras falte la firma. Y la posición la comprueba antes de aceptarla, porque una coordenada falsa entra en el archivo con la misma cara que una verdadera.',
    features: 'Comparativa de funciones clave', feat: 'Función', diff: 'Enfoques distintos',
    cta: '¿Quieres ver GeoTapp en acción?',
    ctaDesc: 'Diez minutos, y ves cómo una intervención se convierte en una prueba que tu cliente verifica solo.',
    ctaBtn: '¡Empieza gratis ahora!',
    geo: ['Informe sellado, prueba que aguanta delante del cliente','GPS verificado antes incluso de guardarse','Fotos de la intervención en cadena hash, si se tocan se nota','El cliente comprueba solo, sin cuenta y sin conexión','Pensado para limpieza, mantenimiento, seguridad, instaladores'],
    comp: ['Plataforma de RRHH completa, de las vacaciones al organigrama','Fichaje desde la app, la tableta y el puesto fijo','Precios públicos y alta sin pasar por un comercial','Geolocalización opcional, sin comprobación de la señal','Resúmenes para el departamento de personal, no para el cliente final'],
    footnote: '* Por ley (RGPD art. 13) cada trabajador debe firmar una información de privacidad antes de ser geolocalizado. La mayoría de los programas con GPS deja ese paso en tus manos, y el riesgo legal se queda con la empresa. GeoTapp genera la información personalizada, hace que el trabajador la firme digitalmente y mantiene el GPS cerrado mientras falte la firma.',
  },
  pt: {
    badge: 'Comparação App', h1sub: 'o departamento de pessoal ou a obra?',
    desc: 'A Factorial junta férias, ausências, organograma e picagem numa única plataforma de RH, com preços públicos e arranque rápido. A GeoTapp certifica a intervenção concreta, com GPS verificado, fotos seladas e um relatório que o cliente final confere sozinho.',
    summary: 'Em resumo:',
    summaryText: 'A Factorial resolve o trabalho do departamento de pessoal, e resolve-o bem, com uma interface que se percebe à primeira. A GeoTapp resolve o momento em que um cliente diz que o serviço nunca foi prestado, e esse momento não se resolve com um resumo de presenças.',
    noteTitle: 'A geolocalização é uma caixa, o risco fica com a entidade patronal',
    noteText: 'Ligar a posição na picagem é uma caixa num ecrã de configuração, e dentro dessa caixa estão a informação prévia ao trabalhador e os limites do controlo à distância. Se o programa regista a posição mas lhe deixa esse passo, o risco fica consigo. A GeoTapp gera a informação, manda assiná-la digitalmente e mantém o GPS fechado enquanto faltar a assinatura. E a posição é verificada antes de ser aceite, porque uma coordenada falsa entra no arquivo com a mesma cara de uma verdadeira.',
    features: 'Comparação das funções principais', feat: 'Função', diff: 'Abordagens diferentes',
    cta: 'Quer ver a GeoTapp a funcionar?',
    ctaDesc: 'Dez minutos, e vê como uma intervenção se torna uma prova que o seu cliente verifica sozinho.',
    ctaBtn: 'Comece gratuitamente!',
    geo: ['Relatório selado, prova que aguenta à frente do cliente','GPS verificado antes mesmo de ser guardado','Fotos da intervenção em cadeia hash, mexer nelas nota-se','O cliente confere sozinho, sem conta e offline','Pensado para limpeza, manutenção, segurança, instaladores'],
    comp: ['Plataforma de RH completa, das férias ao organograma','Picagem pela app, pelo tablet e pelo posto fixo','Preços públicos e arranque sem passar por um comercial','Geolocalização opcional, sem verificação do sinal','Resumos para o departamento de pessoal, não para o cliente final'],
    footnote: '* Por lei (RGPD art. 13) cada trabalhador deve assinar uma informação de privacidade antes de ser geolocalizado. A maioria dos programas com GPS deixa esse passo consigo, e o risco legal fica com a entidade patronal. A GeoTapp gera a informação personalizada, faz o trabalhador assiná-la digitalmente e mantém o GPS fechado enquanto faltar a assinatura.',
  },
  nl: {
    badge: 'App-vergelijking', h1sub: 'de personeelsafdeling of de werf?',
    desc: 'Factorial brengt verlof, verzuim, organigram en inklokken samen in één HR-platform, met openbare prijzen en een snelle start. GeoTapp certificeert de losse opdracht, met geverifieerde GPS, verzegelde foto\'s en een rapport dat de eindklant zelf nakijkt.',
    summary: 'Kort gezegd:',
    summaryText: 'Factorial lost het werk van de personeelsafdeling op, en doet dat goed, met een scherm dat je meteen begrijpt. GeoTapp lost het moment op waarop een klant beweert dat de dienst nooit is geleverd, en dat moment los je niet op met een urenoverzicht.',
    noteTitle: 'Lokalisatie is een vinkje, het risico blijft bij de werkgever',
    noteText: 'De positie aanzetten bij het inklokken is een vinkje in een instellingenscherm, en in dat vinkje zitten de privacyverklaring die de werknemer eerst tekent en het instemmingsrecht van de ondernemingsraad. Registreert de software de positie maar laat ze die stap aan jou, dan blijft het risico bij jou. GeoTapp maakt de verklaring, laat die digitaal tekenen en houdt de GPS dicht zolang de handtekening ontbreekt. En de positie wordt gecontroleerd voordat ze wordt aangenomen, want een valse coördinaat komt met hetzelfde gezicht in het archief als een echte.',
    features: 'Vergelijking van kernfuncties', feat: 'Functie', diff: 'Verschillende benaderingen',
    cta: 'GeoTapp aan het werk zien?',
    ctaDesc: 'Tien minuten, en je ziet hoe een opdracht bewijs wordt dat je klant zelf verifieert.',
    ctaBtn: 'Begin nu gratis!',
    geo: ['Verzegeld rapport, bewijs dat standhoudt bij de klant','GPS geverifieerd voordat het wordt opgeslagen','Werkfoto\'s in een hashketen, eraan zitten valt op','De klant kijkt zelf na, zonder account en offline','Gemaakt voor schoonmaak, onderhoud, beveiliging, installateurs'],
    comp: ['Volledig HR-platform, van verlof tot organigram','Inklokken via app, tablet en vaste post','Openbare prijzen en starten zonder verkoopgesprek','Lokalisatie optioneel, zonder controle van het signaal','Overzichten voor de personeelsafdeling, niet voor de eindklant'],
    footnote: '* De wet (AVG art. 13) verplicht dat iedere werknemer een privacyverklaring tekent voordat er gelokaliseerd wordt. De meeste GPS-software laat die stap aan jou over, en het juridische risico blijft bij de werkgever. GeoTapp maakt de persoonlijke verklaring, laat die digitaal tekenen en houdt de GPS dicht zolang de handtekening ontbreekt.',
  },
  da: {
    badge: 'App-sammenligning', h1sub: 'personalekontoret eller pladsen?',
    desc: 'Factorial samler ferie, fravær, organisationsdiagram og stempling i én HR-platform, med åbne priser og hurtig opstart. GeoTapp dokumenterer den enkelte opgave, med verificeret GPS, forseglede fotos og en rapport, slutkunden selv kontrollerer.',
    summary: 'Kort sagt:',
    summaryText: 'Factorial løser personalekontorets arbejde, og gør det godt, med en flade man forstår første gang. GeoTapp løser det øjeblik, hvor en kunde påstår, at ydelsen aldrig blev leveret, og det øjeblik løses ikke med en timeoversigt.',
    noteTitle: 'Lokalisering er et flueben, risikoen bliver hos arbejdsgiveren',
    noteText: 'At slå positionen til ved stempling er et flueben i et opsætningsbillede, og i det flueben ligger den privatlivsoplysning, medarbejderen skal skrive under på først, og aftalen med tillidsrepræsentanten. Hvis softwaren registrerer positionen, men lader det skridt være dit, bliver risikoen din. GeoTapp laver oplysningen, får den underskrevet digitalt og holder GPS lukket, så længe underskriften mangler. Og positionen kontrolleres, før den accepteres, for et falsk koordinat kommer i arkivet med samme ansigt som et ægte.',
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion', diff: 'Forskellige tilgange',
    cta: 'Vil du se GeoTapp i arbejde?',
    ctaDesc: 'Ti minutter, og du ser, hvordan en opgave bliver til bevis, som din kunde selv kan kontrollere.',
    ctaBtn: 'Start gratis nu!',
    geo: ['Forseglet rapport, bevis der holder over for kunden','GPS verificeret, før data overhovedet gemmes','Opgavefotos i hash-kæde, ændringer kan ses','Kunden kontrollerer selv, uden konto og offline','Lavet til rengøring, vedligehold, vagt, installatører'],
    comp: ['Komplet HR-platform, fra ferie til organisationsdiagram','Stempling fra app, tablet og fast station','Åbne priser og opstart uden at gå gennem en sælger','Lokalisering valgfri, uden kontrol af signalet','Oversigter til personalekontoret, ikke til slutkunden'],
    footnote: '* Loven (GDPR art. 13) kræver, at hver medarbejder underskriver en privatlivsoplysning, før der lokaliseres. De fleste GPS-programmer overlader det skridt til dig, og den juridiske risiko bliver hos arbejdsgiveren. GeoTapp laver den personlige oplysning, får den underskrevet digitalt og holder GPS lukket, så længe underskriften mangler.',
  },
  sv: {
    badge: 'App-jämförelse', h1sub: 'personalkontoret eller arbetsplatsen?',
    desc: 'Factorial samlar semester, frånvaro, organisationsschema och instämpling i en enda HR-plattform, med öppna priser och snabb start. GeoTapp styrker det enskilda uppdraget, med verifierad GPS, förseglade foton och en rapport som slutkunden själv kontrollerar.',
    summary: 'Kort sagt:',
    summaryText: 'Factorial löser personalkontorets arbete, och gör det bra, med ett gränssnitt man förstår första gången. GeoTapp löser ögonblicket när en kund hävdar att tjänsten aldrig utfördes, och det ögonblicket löses inte med en tidsammanställning.',
    noteTitle: 'Lokalisering är en bock i rutan, risken stannar hos arbetsgivaren',
    noteText: 'Att slå på positionen vid instämpling är en ruta i en inställningsvy, och i den rutan ligger integritetsinformationen den anställde ska skriva under först och förhandlingen med facket. Om programmet registrerar positionen men lämnar det steget till dig, stannar risken hos dig. GeoTapp skapar informationen, låter den signeras digitalt och håller GPS stängd så länge underskriften saknas. Och positionen kontrolleras innan den godtas, för en falsk koordinat hamnar i arkivet med samma ansikte som en äkta.',
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion', diff: 'Olika angreppssätt',
    cta: 'Vill du se GeoTapp i arbete?',
    ctaDesc: 'Tio minuter, och du ser hur ett uppdrag blir ett bevis som din kund verifierar själv.',
    ctaBtn: 'Börja gratis nu!',
    geo: ['Förseglad rapport, bevis som håller inför kunden','GPS verifierad innan uppgiften ens sparas','Uppdragsfoton i hashkedja, ändringar syns','Kunden kontrollerar själv, utan konto och offline','Gjord för städ, underhåll, bevakning, installatörer'],
    comp: ['Komplett HR-plattform, från semester till organisationsschema','Instämpling från app, surfplatta och fast station','Öppna priser och start utan att gå via en säljare','Lokalisering valfri, utan kontroll av signalen','Sammanställningar för personalkontoret, inte för slutkunden'],
    footnote: '* Lagen (GDPR art. 13) kräver att varje anställd skriver under en integritetsinformation innan positionering sker. De flesta GPS-program lämnar det steget till dig, och den rättsliga risken stannar hos arbetsgivaren. GeoTapp skapar den personliga informationen, låter den signeras digitalt och håller GPS stängd så länge underskriften saknas.',
  },
  nb: {
    badge: 'App-sammenligning', h1sub: 'personalkontoret eller arbeidsplassen?',
    desc: 'Factorial samler ferie, fravær, organisasjonskart og stempling i én HR-plattform, med åpne priser og rask oppstart. GeoTapp dokumenterer det enkelte oppdraget, med verifisert GPS, forseglede bilder og en rapport sluttkunden selv kontrollerer.',
    summary: 'Kort sagt:',
    summaryText: 'Factorial løser arbeidet til personalkontoret, og gjør det godt, med et grensesnitt man forstår første gang. GeoTapp løser øyeblikket der en kunde hevder at tjenesten aldri ble levert, og det øyeblikket løses ikke med en timeoversikt.',
    noteTitle: 'Lokalisering er en avkrysning, risikoen blir hos arbeidsgiveren',
    noteText: 'Å slå på posisjonen ved stempling er en boks i et innstillingsbilde, og i den boksen ligger personvernerklæringen den ansatte skal signere først og drøftingen med tillitsvalgte. Registrerer programmet posisjonen, men overlater det steget til deg, blir risikoen din. GeoTapp lager erklæringen, får den signert digitalt og holder GPS stengt så lenge signaturen mangler. Og posisjonen kontrolleres før den godtas, for et falskt koordinat havner i arkivet med samme ansikt som et ekte.',
    features: 'Sammenligning av nøkkelfunksjoner', feat: 'Funksjon', diff: 'Ulike tilnærminger',
    cta: 'Vil du se GeoTapp i arbeid?',
    ctaDesc: 'Ti minutter, og du ser hvordan et oppdrag blir et bevis oppdragsgiveren din verifiserer selv.',
    ctaBtn: 'Start gratis nå!',
    geo: ['Forseglet rapport, bevis som holder foran oppdragsgiver','GPS verifisert før dataene i det hele tatt lagres','Oppdragsbilder i hash-kjede, endringer synes','Oppdragsgiveren kontrollerer selv, uten konto og offline','Laget for renhold, vedlikehold, vakthold, installatører'],
    comp: ['Komplett HR-plattform, fra ferie til organisasjonskart','Stempling fra app, nettbrett og fast stasjon','Åpne priser og oppstart uten å gå via en selger','Lokalisering valgfri, uten kontroll av signalet','Oversikter for personalkontoret, ikke for sluttkunden'],
    footnote: '* Loven (GDPR art. 13) krever at hver ansatt signerer en personvernerklæring før posisjonering. De fleste GPS-programmer overlater det steget til deg, og den juridiske risikoen blir hos arbeidsgiveren. GeoTapp lager den personlige erklæringen, får den signert digitalt og holder GPS stengt så lenge signaturen mangler.',
  },
  ru: {
    badge: 'Сравнение приложений', h1sub: 'кадровый отдел или объект?',
    desc: 'Factorial собирает отпуска, отсутствия, оргструктуру и отметку времени в одной HR-платформе, с открытыми ценами и быстрым запуском. GeoTapp подтверждает отдельный выезд, проверенным GPS, опечатанными фотографиями и отчётом, который конечный заказчик проверяет сам.',
    summary: 'Коротко:',
    summaryText: 'Factorial решает работу кадрового отдела, и решает хорошо, с интерфейсом, понятным с первого раза. GeoTapp решает момент, когда заказчик утверждает, что услуги не было, а этот момент не закрывается сводкой присутствия.',
    noteTitle: 'Геолокация, это галочка, а риск остаётся на работодателе',
    noteText: 'Включить позицию при отметке, это галочка в окне настроек, и внутри этой галочки лежат уведомление, которое работник должен подписать заранее, и правила о дистанционном контроле. Если программа фиксирует позицию, но этот шаг оставляет вам, риск остаётся у вас. GeoTapp формирует уведомление, даёт подписать его цифровой подписью и держит GPS закрытым, пока подписи нет. А позицию проверяет до того, как принять, потому что поддельная координата попадает в архив с тем же лицом, что и настоящая.',
    features: 'Сравнение ключевых функций', feat: 'Функция', diff: 'Разные подходы',
    cta: 'Хотите увидеть GeoTapp в работе?',
    ctaDesc: 'Десять минут, и вы увидите, как выезд превращается в доказательство, которое заказчик проверяет сам.',
    ctaBtn: 'Начните бесплатно!',
    geo: ['Опечатанный отчёт, доказательство, которое держится перед заказчиком','GPS проверяется до того, как запись сохранится','Фото работ в цепочке хешей, правка сразу видна','Заказчик проверяет сам, без учётной записи и без интернета','Сделано для клининга, обслуживания, охраны, монтажников'],
    comp: ['Полная HR-платформа, от отпусков до оргструктуры','Отметка из приложения, с планшета и со стационарного поста','Открытые цены и запуск без разговора с менеджером','Геолокация по желанию, без проверки сигнала','Сводки для кадрового отдела, а не для конечного заказчика'],
    footnote: '* По закону (GDPR ст. 13) каждый работник должен подписать уведомление о конфиденциальности до начала геолокации. Большинство программ с GPS оставляют этот шаг вам, и юридический риск остаётся на работодателе. GeoTapp формирует персональное уведомление, даёт работнику подписать его цифровой подписью и держит GPS закрытым, пока подписи нет.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale] ?? META.en;
  return {
    title: { absolute: m.title }, description: m.description,
    alternates: buildLocaleAlternates(locale, PATHNAME),
    openGraph: { url: buildCanonicalUrl(locale, PATHNAME), type: 'website', title: m.title, description: m.description, images: [{ url: '/og-default.png', width: 1200, height: 630, alt: m.title }] },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description },
  };
}

export default async function GeoTappVsFactorialPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = T[locale] ?? T.en;
  const faqItems = FAQ[locale] ?? FAQ.en;
  const labels = ROWS_LABELS[locale] ?? ROWS_LABELS.en;
  const rows = labels.map((feature, i) => ({ feature, geotapp: ROWS_GEO[i], competitor: ROWS_COMP[i] }));

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  const breadcrumb = buildComparisonBreadcrumb({ locale, pathname: PATHNAME, competitorName: 'Factorial' });
  const meta = META[locale] ?? META.en;
  const article = buildComparisonArticle({ locale, pathname: PATHNAME, headline: meta.title, description: meta.description, datePublished: ARTICLE_DATE_PUBLISHED, dateModified: ARTICLE_DATE_MODIFIED });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ComparisonPageL
        locale={locale}
        competitorName="Factorial"
        competitorId="factorial"
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
