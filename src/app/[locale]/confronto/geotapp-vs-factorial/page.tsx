import type { Metadata } from 'next';
import ComparisonPageL from '@/components/ComparisonPageL';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-factorial/';
const ARTICLE_DATE_PUBLISHED = '2026-09-03';
const ARTICLE_DATE_MODIFIED = '2026-09-03';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs Factorial - Confronto 2026 | GeoTapp', description: 'GeoTapp vs Factorial: piattaforma HR o prova del lavoro svolto? Confronto su controllo della posizione alla timbratura, report sigillati, verifica autonoma del committente e informativa GPS.' },
  en: { title: 'GeoTapp vs Factorial - Comparison 2026 | GeoTapp', description: 'GeoTapp vs Factorial: HR platform or proof of the work done? Comparison on the position check at clock-in, sealed reports, the client\'s own verification and the GPS notice.' },
  de: { title: 'GeoTapp vs Factorial - Vergleich 2026 | GeoTapp', description: 'GeoTapp vs Factorial: HR-Plattform oder Nachweis der geleisteten Arbeit? Vergleich von Positionsprüfung beim Stempeln, versiegelten Berichten, eigenständiger Überprüfung durch den Auftraggeber und GPS-Information.' },
  nl: { title: 'GeoTapp vs Factorial - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Factorial: hr-platform of bewijs van het werk? Vergelijking op locatiecontrole, verzegelde rapporten en controle door de opdrachtgever.' },
  fr: { title: 'GeoTapp vs Factorial - Comparatif 2026 | GeoTapp', description: 'GeoTapp vs Factorial : plateforme RH ou preuve du travail ? Position au pointage, rapports scellés, vérification par le client et information GPS.' },
  es: { title: 'GeoTapp vs Factorial - Comparativa 2026 | GeoTapp', description: 'GeoTapp vs Factorial: ¿plataforma de RR. HH. o prueba del trabajo realizado? Comparativa de comprobación de la posición al fichar, informes sellados, verificación autónoma del cliente e información sobre el GPS.' },
  pt: { title: 'GeoTapp vs Factorial - Comparação 2026 | GeoTapp', description: 'GeoTapp vs Factorial: plataforma de RH ou prova do trabalho? Compare GPS verificado, relatórios selados criptograficamente e verificação autónoma pelo cliente.' },
  da: { title: 'GeoTapp vs Factorial - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Factorial: HR-platform eller bevis for arbejdet? Sammenlign verificeret GPS, kryptografisk forseglede rapporter og kundens egen kontrol.' },
  sv: { title: 'GeoTapp vs Factorial - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs Factorial: HR-plattform eller bevis på arbetet? Jämför verifierad GPS, kryptografiskt förseglade rapporter och kundens egen kontroll.' },
  nb: { title: 'GeoTapp vs Factorial - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Factorial: HR-plattform eller bevis for arbeidet? Sammenlign verifisert GPS, kryptografisk forseglede rapporter og oppdragsgivers egen kontroll.' },
  ru: { title: 'GeoTapp vs Factorial, Сравнение 2026 | GeoTapp', description: 'GeoTapp vs Factorial: HR-платформа или доказательство выполненной работы? Сравните проверенный GPS, криптографически опечатанные отчёты и независимую проверку заказчиком.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza principale tra GeoTapp e Factorial?', a: 'Factorial è una piattaforma HR per le piccole e medie imprese, dove ferie, assenze, organigramma e timbratura stanno in un posto solo. GeoTapp sigilla il lavoro sul campo e trasforma ogni intervento in un documento sigillato che il committente verifica da solo. Una gestisce le persone dentro l\'azienda, l\'altra documenta il lavoro fuori.' },
    { q: 'Factorial controlla se la posizione è falsificata?', a: 'La timbratura di Factorial registra la posizione quando l\'azienda attiva l\'opzione, e la geolocalizzazione resta una funzione facoltativa del modulo presenze. Un controllo sulle posizioni simulate non compare tra le funzioni dichiarate. In GeoTapp il controllo gira a ogni timbratura: rifiuta le posizioni simulate da app di finta posizione, quelle troppo imprecise e gli spostamenti impossibili.' },
    { q: 'Il committente può verificare da solo i report?', a: 'I riepiloghi di Factorial servono all\'ufficio del personale e alla busta paga, e restano documenti interni. GeoTapp produce un pacchetto sigillato che il cliente finale apre e controlla per conto suo, senza account, senza connessione e senza passare dai nostri sistemi, perché la catena di hash sta dentro il file.' },
    { q: 'GeoTapp o Factorial per un\'impresa di pulizie?', a: 'Se il problema è tenere in ordine ferie, permessi e cedolini di una squadra che cresce, Factorial è comodo, chiaro e si attiva da solo. Se il problema è il committente che trattiene una fattura sostenendo che il servizio non è stato fatto, un riepilogo di presenze non basta: serve una prova che il committente possa controllare. I due strumenti coprono due momenti diversi e possono stare insieme.' },
  ],
  en: [
    { q: 'What is the main difference between GeoTapp and Factorial?', a: 'Factorial is an HR platform for small and medium companies, where leave, absences, org chart and clock-in all live in one place. GeoTapp seals field work and turns every job into a sealed document the client verifies alone. One manages people inside the company, the other documents the work outside it.' },
    { q: 'Does Factorial check whether the position is faked?', a: 'Factorial clock-in records the position when the company switches the option on, and geolocation stays an optional feature of the attendance module. A check on simulated positions is not listed among the declared features. In GeoTapp the check runs at every clock-in: it rejects positions simulated by fake-location apps, positions that are too imprecise and impossible jumps.' },
    { q: 'Can the client verify the reports independently?', a: 'Factorial summaries serve the HR office and payroll, and they stay internal documents. GeoTapp produces a sealed package the end client opens and checks alone, with no account, no connection and no need to come through our systems, because the hash chain travels inside the file.' },
    { q: 'GeoTapp or Factorial for a cleaning company?', a: 'If the problem is keeping leave, time off and payslips in order for a growing team, Factorial is comfortable, clear and you can set it up yourself. If the problem is a client holding back an invoice claiming the service was never delivered, an attendance summary is not enough: you need proof the client can check. The two tools cover two different moments and can work together.' },
  ],
  de: [
    { q: 'Was ist der Hauptunterschied zwischen GeoTapp und Factorial?', a: 'Factorial ist eine HR-Plattform für kleine und mittlere Unternehmen, auf der Urlaub, Abwesenheiten, Organigramm und Zeiterfassung an einem Ort liegen. GeoTapp versiegelt die Arbeit im Außendienst und macht aus jedem Einsatz ein versiegeltes Dokument, das der Auftraggeber selbst überprüft. Die eine verwaltet die Menschen im Unternehmen, die andere dokumentiert die Arbeit draußen.' },
    { q: 'Prüft Factorial, ob die Position gefälscht ist?', a: 'Die Zeiterfassung von Factorial erfasst die Position, wenn das Unternehmen die Option aktiviert; die Geolokalisierung bleibt eine optionale Funktion des Anwesenheitsmoduls. Eine Prüfung auf simulierte Positionen gehört nicht zu den angegebenen Funktionen. In GeoTapp läuft die Prüfung bei jedem Stempeln: Sie weist Positionen ab, die von Fake-Location-Apps simuliert wurden, zu ungenaue Positionen und unmögliche Ortssprünge.' },
    { q: 'Kann der Auftraggeber die Berichte selbst überprüfen?', a: 'Die Übersichten von Factorial dienen der Personalabteilung und der Lohnabrechnung und bleiben interne Dokumente. GeoTapp erstellt ein versiegeltes Paket, das der Endkunde selbst öffnet und prüft, ohne Konto, ohne Internetverbindung und ohne unsere Systeme, weil die Hash-Kette in der Datei steckt.' },
    { q: 'GeoTapp oder Factorial für eine Reinigungsfirma?', a: 'Wenn es darum geht, Urlaub, Freistellungen und Lohnabrechnungen eines wachsenden Teams zu ordnen, ist Factorial bequem, übersichtlich und aktiviert sich von selbst. Wenn der Auftraggeber dagegen eine Rechnung zurückhält, weil die Leistung angeblich nicht erbracht wurde, reicht eine Anwesenheitsübersicht nicht: Dann braucht es einen Nachweis, den der Auftraggeber prüfen kann. Die beiden Werkzeuge decken zwei verschiedene Momente ab und lassen sich kombinieren.' },
  ],
  fr: [
    { q: 'Quelle est la différence principale entre GeoTapp et Factorial ?', a: 'Factorial est une plateforme RH pour les petites et moyennes entreprises, où congés, absences, organigramme et pointage sont réunis au même endroit. GeoTapp scelle le travail sur le terrain et transforme chaque intervention en un document scellé que le client vérifie lui-même. L\'une gère les personnes à l\'intérieur de l\'entreprise, l\'autre documente le travail à l\'extérieur.' },
    { q: 'Factorial contrôle-t-il si la position est falsifiée ?', a: 'Le pointage de Factorial enregistre la position quand l\'entreprise active l\'option, et la géolocalisation reste une fonction facultative du module de présences. Un contrôle des positions simulées ne figure pas parmi les fonctionnalités annoncées. Dans GeoTapp, le contrôle s\'exécute à chaque pointage : il refuse les positions simulées par des applis de fausse localisation, celles qui sont trop imprécises et les déplacements impossibles.' },
    { q: 'Le client peut-il vérifier les rapports lui-même ?', a: 'Les récapitulatifs de Factorial servent au service du personnel et à la paie, et restent des documents internes. GeoTapp produit un paquet scellé que le client final ouvre et contrôle de son côté, sans compte, sans connexion et sans passer par nos systèmes, parce que la chaîne de hachage se trouve dans le fichier.' },
    { q: 'GeoTapp ou Factorial pour une entreprise de nettoyage ?', a: 'Si le problème, c\'est de tenir en ordre les congés, les absences et les fiches de paie d\'une équipe qui grandit, Factorial est pratique, clair et s\'active tout seul. Si le problème, c\'est le client qui retient une facture en affirmant que la prestation n\'a pas été réalisée, un récapitulatif de présences ne suffit pas : il faut une preuve que le client puisse contrôler. Les deux outils couvrent deux moments différents et peuvent cohabiter.' },
  ],
  es: [
    { q: '¿Cuál es la diferencia principal entre GeoTapp y Factorial?', a: 'Factorial es una plataforma de RR. HH. para pequeñas y medianas empresas, donde vacaciones, ausencias, organigrama y fichaje están en un solo sitio. GeoTapp sella el trabajo en campo y convierte cada intervención en un documento sellado que el cliente verifica por sí mismo. Una gestiona a las personas dentro de la empresa, la otra documenta el trabajo fuera.' },
    { q: '¿Factorial comprueba si la posición está falsificada?', a: 'El fichaje de Factorial registra la posición cuando la empresa activa la opción, y la geolocalización sigue siendo una función opcional del módulo de asistencia. Un control de las posiciones simuladas no figura entre las funciones declaradas. En GeoTapp el control se ejecuta en cada fichaje: rechaza las posiciones simuladas con apps de ubicación falsa, las demasiado imprecisas y los desplazamientos imposibles.' },
    { q: '¿Puede el cliente verificar los informes por su cuenta?', a: 'Los resúmenes de Factorial sirven a RR. HH. y a la nómina, y siguen siendo documentos internos. GeoTapp produce un paquete sellado que el cliente final abre y comprueba por su cuenta, sin cuenta, sin conexión y sin pasar por nuestros sistemas, porque la cadena de hash está dentro del archivo.' },
    { q: '¿GeoTapp o Factorial para una empresa de limpieza?', a: 'Si el problema es tener en orden vacaciones, permisos y nóminas de un equipo que crece, Factorial es cómodo, claro y se activa solo. Si el problema es el cliente que retiene una factura alegando que el servicio no se hizo, un resumen de asistencia no basta: hace falta una prueba que el cliente pueda comprobar. Las dos herramientas cubren dos momentos distintos y pueden convivir.' },
  ],
  pt: [
    { q: 'Qual é a principal diferença entre a GeoTapp e a Factorial?', a: 'A Factorial é uma plataforma de RH para pequenas e médias empresas, onde férias, ausências, organograma e picagem vivem no mesmo sítio. A GeoTapp sela o trabalho no terreno e transforma cada intervenção num documento selado que o cliente verifica sozinho. Uma gere as pessoas dentro da empresa, a outra defende o trabalho lá fora.' },
    { q: 'A Factorial verifica a falsificação do GPS?', a: 'A picagem da Factorial regista a posição quando a empresa ativa a opção, e a geolocalização continua a ser uma função opcional do módulo de tempos. Uma verificação de autenticidade do sinal, aquela que desmascara as aplicações de posição falsa e os dispositivos manipulados, não consta das funções declaradas. Na GeoTapp esse controlo corre em cada picagem.' },
    { q: 'O cliente pode verificar os relatórios sozinho?', a: 'Os resumos da Factorial servem o departamento de pessoal e o processamento salarial, e são documentos internos. A GeoTapp produz um pacote selado que o cliente final abre e confere por conta própria, sem conta, sem ligação e sem passar pelos nossos sistemas, porque a cadeia de hash viaja dentro do ficheiro.' },
    { q: 'GeoTapp ou Factorial para uma empresa de limpeza?', a: 'Se o problema é manter em ordem férias, faltas e recibos de uma equipa que cresce, a Factorial é confortável, clara e arranca sozinha. Se o problema é o cliente que retém uma fatura dizendo que o serviço não foi feito, nenhum resumo de presenças o defende. As duas ferramentas cobrem momentos diferentes e podem conviver.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Factorial?', a: 'Factorial is een hr-platform voor kleine en middelgrote bedrijven, waar verlof, afwezigheid, organigram en registratie op één plek staan. GeoTapp verzegelt het werk in het veld en maakt van elke klus een verzegeld document dat de opdrachtgever zelf controleert. Het ene beheert de mensen binnen het bedrijf, het andere documenteert het werk buiten de deur.' },
    { q: 'Controleert Factorial of de locatie vervalst is?', a: 'De registratie van Factorial legt de locatie vast wanneer het bedrijf die optie inschakelt, en geolocatie blijft een optionele functie van de aanwezigheidsmodule. Een controle op gesimuleerde locaties komt niet voor onder de opgegeven functies. In GeoTapp draait de controle bij elke registratie: ze weigert locaties die door nep-locatie-apps zijn gesimuleerd, te onnauwkeurige locaties en onmogelijke verplaatsingen.' },
    { q: 'Kan de opdrachtgever de rapporten zelf controleren?', a: 'De overzichten van Factorial dienen voor de personeelsafdeling en de loonstrook, en blijven interne documenten. GeoTapp maakt een verzegeld pakket dat de eindklant zelf opent en controleert, zonder account, zonder verbinding en zonder via onze systemen te gaan, omdat de hash-keten in het bestand zit.' },
    { q: 'GeoTapp of Factorial voor een schoonmaakbedrijf?', a: 'Is het probleem verlof, afwezigheid en loonstroken op orde houden van een groeiend team, dan is Factorial handig, helder en schakelt zichzelf in. Is het probleem de opdrachtgever die een factuur achterhoudt omdat de dienst volgens hem niet is uitgevoerd, dan is een overzicht van aanwezigheid niet genoeg: dan hebt u een bewijs nodig dat de opdrachtgever kan controleren. De twee hulpmiddelen dekken twee verschillende momenten en kunnen naast elkaar bestaan.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Factorial?', a: 'Factorial er en HR-platform til små og mellemstore virksomheder, hvor ferie, fravær, organisationsdiagram og stempling ligger samme sted. GeoTapp forsegler arbejdet i marken og gør hver opgave til et forseglet dokument, som kunden selv kontrollerer. Det ene håndterer mennesker inde i virksomheden, det andet forsvarer arbejdet udenfor.' },
    { q: 'Kontrollerer Factorial om GPS er forfalsket?', a: 'Factorials stempling registrerer positionen, når virksomheden slår funktionen til, og lokaliseringen forbliver en valgfri del af tidsmodulet. En kontrol af signalets ægthed, den der afslører falske positionsapps og manipulerede enheder, står ikke blandt de angivne funktioner. Hos GeoTapp kører den kontrol ved hver stempling.' },
    { q: 'Kan kunden selv kontrollere rapporterne?', a: 'Factorials oversigter tjener personaleafdelingen og lønnen og forbliver interne dokumenter. GeoTapp laver en forseglet pakke, som slutkunden åbner og kontrollerer alene, uden konto, uden forbindelse og uden at gå gennem vores systemer, for hash-kæden ligger inde i filen.' },
    { q: 'GeoTapp eller Factorial til et rengøringsfirma?', a: 'Hvis problemet er at holde styr på ferie, fridage og lønsedler i et voksende team, er Factorial bekvemt, klart og noget man selv sætter op. Hvis problemet er en kunde, der holder en faktura tilbage og påstår, at ydelsen aldrig blev leveret, forsvarer ingen timeoversigt dig. De to værktøjer dækker to forskellige øjeblikke og kan sagtens stå side om side.' },
  ],
  sv: [
    { q: 'Vad är den största skillnaden mellan GeoTapp och Factorial?', a: 'Factorial är en HR-plattform för små och medelstora företag, där semester, frånvaro, organisationsschema och instämpling ligger på samma ställe. GeoTapp förseglar arbetet i fält och gör varje uppdrag till ett förseglat dokument som kunden själv verifierar. Det ena sköter människorna inne i företaget, det andra försvarar arbetet utanför.' },
    { q: 'Kontrollerar Factorial om GPS är förfalskad?', a: 'Factorials instämpling registrerar positionen när företaget slår på alternativet, och lokaliseringen förblir en valfri del av tidmodulen. En kontroll av signalens äkthet, den som avslöjar falska positionsappar och manipulerade enheter, finns inte bland de angivna funktionerna. Hos GeoTapp körs den kontrollen vid varje instämpling.' },
    { q: 'Kan kunden kontrollera rapporterna själv?', a: 'Factorials sammanställningar tjänar personalavdelningen och lönen och förblir interna dokument. GeoTapp skapar ett förseglat paket som slutkunden öppnar och kontrollerar själv, utan konto, utan uppkoppling och utan att gå via våra system, för hashkedjan ligger inuti filen.' },
    { q: 'GeoTapp eller Factorial för ett städföretag?', a: 'Om problemet är att hålla ordning på semester, ledighet och lönebesked i ett växande team är Factorial bekvämt, tydligt och något du sätter upp själv. Om problemet är en kund som håller inne en faktura och hävdar att tjänsten aldrig utfördes försvarar ingen tidsammanställning dig. De två verktygen täcker två olika ögonblick och kan stå bredvid varandra.' },
  ],
  nb: [
    { q: 'Hva er den viktigste forskjellen mellom GeoTapp og Factorial?', a: 'Factorial er en HR-plattform for små og mellomstore bedrifter, der ferie, fravær, organisasjonskart og stempling ligger på samme sted. GeoTapp forsegler arbeidet ute i felten og gjør hvert oppdrag til et forseglet dokument som oppdragsgiveren selv verifiserer. Det ene håndterer menneskene inne i bedriften, det andre forsvarer arbeidet utenfor.' },
    { q: 'Kontrollerer Factorial om GPS er forfalsket?', a: 'Stemplingen i Factorial registrerer posisjonen når bedriften slår på funksjonen, og lokaliseringen forblir en valgfri del av timemodulen. En kontroll av signalets ekthet, den som avslører falske posisjonsapper og manipulerte enheter, står ikke blant de oppgitte funksjonene. Hos GeoTapp kjøres den kontrollen ved hver stempling.' },
    { q: 'Kan oppdragsgiveren kontrollere rapportene selv?', a: 'Oversiktene i Factorial tjener personalavdelingen og lønnen, og forblir interne dokumenter. GeoTapp lager en forseglet pakke som sluttkunden åpner og kontrollerer alene, uten konto, uten forbindelse og uten å gå gjennom systemene våre, for hash-kjeden ligger inne i filen.' },
    { q: 'GeoTapp eller Factorial for et renholdsfirma?', a: 'Er problemet å holde orden på ferie, fridager og lønnsslipper i et voksende team, er Factorial behagelig, tydelig og noe du setter opp selv. Er problemet en oppdragsgiver som holder tilbake en faktura og påstår at tjenesten aldri ble levert, forsvarer ingen timeoversikt deg. De to verktøyene dekker to ulike øyeblikk og kan stå side om side.' },
  ],
  ru: [
    { q: 'В чём главное отличие GeoTapp от Factorial?', a: 'Factorial, это HR-платформа для малого и среднего бизнеса, где отпуска, отсутствия, оргструктура и отметка времени лежат в одном месте. GeoTapp запечатывает работу на объекте и превращает каждый выезд в опечатанный документ, который заказчик проверяет сам. Одна ведёт людей внутри компании, другая защищает работу снаружи.' },
    { q: 'Проверяет ли Factorial подделку GPS?', a: 'Отметка в Factorial фиксирует позицию, когда компания включает эту опцию, и геолокация остаётся необязательной частью модуля учёта времени. Проверки подлинности сигнала, той, что разоблачает приложения с фальшивой позицией и модифицированные устройства, среди заявленных функций нет. В GeoTapp такая проверка идёт при каждой отметке.' },
    { q: 'Может ли заказчик проверить отчёты самостоятельно?', a: 'Сводки Factorial служат кадровому отделу и расчёту зарплаты и остаются внутренними документами. GeoTapp формирует опечатанный пакет, который конечный заказчик открывает и проверяет сам, без учётной записи, без интернета и без обращения к нашим системам, потому что цепочка хешей лежит внутри файла.' },
    { q: 'GeoTapp или Factorial для клининговой компании?', a: 'Если задача, держать в порядке отпуска, отгулы и расчётные листки растущей бригады, Factorial удобен, понятен и запускается своими силами. Если задача, ответить заказчику, который придерживает счёт и утверждает, что услуги не было, никакая сводка присутствия вас не защитит. Два инструмента закрывают разные моменты и спокойно стоят рядом.' },
  ],
};

// Etichette della tabella di confronto, per locale.
const ROWS_LABELS: Record<string, string[]> = {
  it: ['Controllo della posizione alla timbratura (rifiuta posizioni simulate)','Report sigillato crittograficamente','Verifica indipendente da parte del committente','Foto dell\'intervento in catena hash','Timbratura da smartphone','Geolocalizzazione sul luogo di lavoro','App nativa Android e iOS','Gestione ferie e assenze','Elaborazione paghe e cedolini','Badge NFC e lettori fisici','Attivazione autonoma con prova gratuita','Progettato per squadre sul campo','Informativa GPS firmata nell\'app prima di timbrare*'],
  en: ['Position check at clock-in (rejects simulated positions)','Cryptographically sealed report','Independent verification by the client','Job photos in a hash chain','Smartphone clock-in','Geolocation on the work site','Native Android and iOS app','Leave and absence management','Payroll processing and payslips','NFC badges and physical readers','Self-service activation with free trial','Built for field teams','GPS notice signed in the app before clocking in*'],
  de: ['Positionsprüfung beim Stempeln (weist simulierte Positionen ab)','Kryptographisch versiegelter Bericht','Unabhängige Überprüfung durch den Auftraggeber','Einsatzfotos in einer Hash-Kette','Stempeln per Smartphone','Geolokalisierung am Arbeitsort','Native App für Android und iOS','Urlaubs- und Abwesenheitsverwaltung','Lohn- und Gehaltsabrechnung','NFC-Badge und physische Lesegeräte','Selbstständige Aktivierung mit kostenloser Testphase','Für Teams im Außendienst gebaut','GPS-Information vor dem Stempeln in der App unterschrieben*'],
  fr: ['Contrôle de la position au pointage (refuse les positions simulées)','Rapport scellé cryptographiquement','Vérification indépendante par le client','Photos de l\'intervention en chaîne de hachage','Pointage depuis le smartphone','Géolocalisation sur le lieu de travail','App native Android et iOS','Gestion des congés et des absences','Traitement de la paie et des fiches de paie','Badges NFC et lecteurs physiques','Activation autonome avec essai gratuit','Conçu pour les équipes de terrain','Information GPS signée dans l\'app avant de pointer*'],
  es: ['Comprobación de la posición al fichar (rechaza posiciones simuladas)','Informe sellado criptográficamente','Verificación independiente por parte del cliente','Fotos de la intervención en cadena hash','Fichaje desde el smartphone','Geolocalización en el lugar de trabajo','App nativa Android e iOS','Gestión de vacaciones y ausencias','Procesamiento de nóminas','Tarjeta NFC y lectores físicos','Activación autónoma con prueba gratuita','Pensado para equipos en campo','Información sobre el GPS firmada en la app antes de fichar*'],
  pt: ['GPS verificado com controlo anti-spoofing','Relatório selado criptograficamente','Verificação independente pelo cliente','Fotos da intervenção em cadeia hash','Picagem a partir do smartphone','Geolocalização no local de trabalho','App nativa Android e iOS','Gestão de férias e ausências','Processamento salarial e recibos','Cartões NFC e leitores físicos','Ativação autónoma com teste gratuito','Feito para equipas no terreno','Aviso de privacidade GPS automático com assinatura digital*'],
  nl: ['Controle van de locatie bij de registratie (weigert gesimuleerde locaties)','Cryptografisch verzegeld rapport','Onafhankelijke controle door de opdrachtgever','Foto\'s van de klus in een hash-keten','Registratie via de smartphone','Geolocatie op de werkplek','Native app voor Android en iOS','Beheer van verlof en afwezigheid','Salarisverwerking en loonstroken','NFC-badges en fysieke lezers','Zelfstandige activering met gratis proefperiode','Ontworpen voor teams in het veld','GPS-verklaring ondertekend in de app vóór het registreren*'],
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
    desc: 'Factorial mette ferie, assenze, organigramma e timbratura dentro un\'unica piattaforma HR, con prezzi pubblici e attivazione rapida. GeoTapp sigilla il singolo intervento, con posizione controllata alla timbratura, foto di prova e un report che il cliente finale controlla da solo.',
    summary: 'In sintesi:',
    summaryText: 'Factorial risolve il lavoro dell\'ufficio del personale, e lo fa bene, con un\'interfaccia che si capisce al primo giro. GeoTapp risolve il momento in cui il committente sostiene che il servizio non è stato fatto, e quel momento non si risolve con un riepilogo di presenze.',
    noteTitle: 'La geolocalizzazione è una spunta, il rischio resta al titolare',
    noteText: 'Attivare la posizione sulla timbratura è una casella da spuntare in una schermata di configurazione, e dentro quella casella ci stanno l\'articolo 4 dello Statuto e l\'informativa che il lavoratore deve ricevere prima. Se il software registra la posizione ma quel passaggio lo lascia a te, il rischio te lo tieni tu. GeoTapp prepara l\'informativa, la fa firmare per presa visione nell\'app e non lascia timbrare finché non è firmata. E la posizione la controlla prima di accettarla, perché una coordinata falsa entra in archivio con la stessa faccia di una vera.',
    features: 'Confronto funzionalità chiave', feat: 'Funzionalità', diff: 'Approcci diversi',
    cta: 'Vuoi vedere GeoTapp in azione?',
    ctaDesc: 'Provalo su un intervento vero: in 14 giorni gratis vedi come diventa una prova che il tuo committente verifica da solo.',
    ctaBtn: 'Inizia la prova gratuita',
    geo: ['Report sigillato da mostrare al committente','Posizione controllata prima di essere registrata','Foto dell\'intervento in catena hash, se le tocchi si vede','Il committente controlla da solo, senza account e offline','Pensato per pulizie, manutenzione, vigilanza, installatori'],
    comp: ['Piattaforma HR completa, dalle ferie all\'organigramma','Timbratura da app, da tablet e da postazione','Prezzi pubblici e attivazione senza passare da un venditore','Geolocalizzazione facoltativa, senza verifica del segnale','Riepiloghi per l\'ufficio del personale, non per il cliente finale'],
    footnote: '* Per legge (art. 13 GDPR e, in Italia, art. 4 dello Statuto dei Lavoratori) ogni dipendente va informato prima di essere geolocalizzato. Se il software lascia questo passaggio al titolare, il rischio resta a lui. GeoTapp prepara l\'informativa personalizzata, la fa firmare per presa visione nell\'app e non lascia timbrare finché non è firmata.',
  },
  en: {
    badge: 'App Comparison', h1sub: 'the HR office or the job site?',
    desc: 'Factorial puts leave, absences, org chart and clock-in inside one HR platform, with public pricing and quick setup. GeoTapp seals the single job, with the position checked at clock-in, proof photos and a report the end client checks alone.',
    summary: 'In short:',
    summaryText: 'Factorial solves the work of the HR office, and it solves it well, with an interface people understand on the first try. GeoTapp solves the moment a client claims the service was never delivered, and that moment is not solved by an attendance summary.',
    noteTitle: 'Geolocation is a checkbox, the risk stays with the employer',
    noteText: 'Turning location on for clock-in is a box you tick in a settings screen, and inside that box sit Article 4 of the Workers\' Statute and the notice the worker must receive first. If the software records the position but leaves that step to you, the risk stays yours. GeoTapp prepares the notice, has it signed for acknowledgement in the app and does not let staff clock in until it is signed. It also checks the position before accepting it, because a fake coordinate enters the archive looking just like a real one.',
    features: 'Key feature comparison', feat: 'Feature', diff: 'Different approaches',
    cta: 'Want to see GeoTapp in action?',
    ctaDesc: 'Try it on a real job: in 14 free days you see how it becomes proof your client verifies alone.',
    ctaBtn: 'Start the free trial',
    geo: ['Sealed report to show the client','Position checked before it is recorded','Job photos in a hash chain: if you touch them, it shows','The client checks alone, without an account and offline','Built for cleaning, maintenance, security, installers'],
    comp: ['Complete HR platform, from leave to org chart','Clock-in from app, tablet and workstation','Public pricing and setup without going through a salesperson','Optional geolocation, without a check for simulated positions','Summaries for the HR office, not for the end client'],
    footnote: '* By law (Art. 13 GDPR and, in Italy, Art. 4 of the Workers\' Statute), every employee must be informed before being geolocated. If the software leaves this step to the employer, the risk stays with them. GeoTapp prepares the personalised notice, has it signed for acknowledgement in the app and does not let staff clock in until it is signed.',
  },
  de: {
    badge: 'App-Vergleich', h1sub: 'Personalabteilung oder Baustelle?',
    desc: 'Factorial bündelt Urlaub, Abwesenheiten, Organigramm und Zeiterfassung in einer HR-Plattform, mit öffentlichen Preisen und schneller Aktivierung. GeoTapp versiegelt den einzelnen Einsatz, mit beim Stempeln geprüfter Position, Nachweisfotos und einem Bericht, den der Endkunde selbst überprüft.',
    summary: 'Kurz gesagt:',
    summaryText: 'Factorial erledigt die Arbeit der Personalabteilung, und das gut, mit einer Oberfläche, die man beim ersten Mal versteht. GeoTapp löst den Moment, in dem der Auftraggeber behauptet, die Leistung sei nicht erbracht worden, und der lässt sich mit einer Anwesenheitsübersicht nicht lösen.',
    noteTitle: 'Geolokalisierung ist ein Häkchen, das Risiko bleibt beim Arbeitgeber',
    noteText: 'Die Position beim Stempeln zu aktivieren ist ein Häkchen auf einer Einstellungsseite, und in diesem Häkchen stecken Art. 4 des italienischen Arbeitnehmerstatuts und die Information, die der Mitarbeiter vorher erhalten muss. Erfasst die Software die Position, überlässt Ihnen aber diesen Schritt, bleibt das Risiko bei Ihnen. GeoTapp erstellt die Information, lässt sie in der App zur Kenntnisnahme unterschreiben und lässt erst danach das Stempeln zu. Und die Position wird geprüft, bevor sie angenommen wird, denn eine falsche Koordinate landet im Archiv mit demselben Gesicht wie eine echte.',
    features: 'Vergleich der wichtigsten Funktionen', feat: 'Funktion', diff: 'Verschiedene Ansätze',
    cta: 'Möchten Sie GeoTapp in Aktion sehen?',
    ctaDesc: 'Testen Sie es an einem echten Einsatz: In 14 kostenlosen Tagen sehen Sie, wie daraus ein Nachweis wird, den Ihr Auftraggeber selbst überprüft. Keine Kreditkarte.',
    ctaBtn: 'Kostenlos testen',
    geo: ['Versiegelter Bericht zum Vorlegen beim Auftraggeber','Position wird geprüft, bevor sie erfasst wird','Einsatzfotos in einer Hash-Kette: Wer sie anfasst, hinterlässt Spuren','Der Auftraggeber prüft selbst, ohne Konto und offline','Gedacht für Reinigung, Wartung, Objektschutz, Installateure'],
    comp: ['Komplette HR-Plattform, vom Urlaub bis zum Organigramm','Stempeln per App, Tablet und Terminal','Öffentliche Preise und Aktivierung ohne Vertriebsgespräch','Optionale Geolokalisierung, ohne Prüfung des Signals','Übersichten für die Personalabteilung, nicht für den Endkunden'],
    footnote: '* Nach geltendem Recht (Art. 13 DSGVO und in Italien Art. 4 des Arbeitnehmerstatuts) muss jeder Mitarbeiter informiert werden, bevor er geortet wird. Überlässt die Software diesen Schritt dem Arbeitgeber, bleibt das Risiko bei ihm. GeoTapp erstellt die personalisierte Information, lässt sie in der App zur Kenntnisnahme unterschreiben und lässt erst danach das Stempeln zu.',
  },
  fr: {
    badge: 'Comparatif d\'applis',
    h1sub: 'le service du personnel ou le chantier ?',
    desc: 'Factorial réunit congés, absences, organigramme et pointage dans une seule plateforme RH, avec des prix publics et une activation rapide. GeoTapp scelle chaque intervention, avec une position contrôlée au pointage, des photos de preuve et un rapport que le client final contrôle lui-même.',
    summary: 'En résumé :',
    summaryText: 'Factorial résout le travail du service du personnel, et le fait bien, avec une interface que l\'on comprend dès le premier essai. GeoTapp résout le moment où le client affirme que la prestation n\'a pas été réalisée, et ce moment ne se règle pas avec un récapitulatif de présences.',
    noteTitle: 'La géolocalisation est une case à cocher, le risque reste à l\'employeur',
    noteText: 'Activer la position au pointage, c\'est une case à cocher dans un écran de configuration, et dans cette case se trouvent l\'article 4 du Statut des travailleurs et l\'information que le salarié doit recevoir au préalable. Si le logiciel enregistre la position mais vous laisse cette étape, le risque vous reste. GeoTapp prépare l\'information, la fait signer pour prise de connaissance dans l\'app et ne laisse pas pointer tant qu\'elle n\'est pas signée. Et il contrôle la position avant de l\'accepter, parce qu\'une fausse coordonnée entre dans l\'archive avec le même aspect qu\'une vraie.',
    features: 'Comparaison des fonctionnalités clés',
    feat: 'Fonctionnalité',
    diff: 'Des approches différentes',
    cta: 'Envie de voir GeoTapp en action ?',
    ctaDesc: 'Essayez-le sur une intervention réelle : en 14 jours gratuits, vous voyez comment elle devient une preuve que votre client vérifie lui-même.',
    ctaBtn: 'Commencer l\'essai gratuit',
    geo: ['Rapport scellé à montrer au client','Position contrôlée avant d\'être enregistrée','Photos de l\'intervention en chaîne de hachage : si on y touche, cela se voit','Le client contrôle lui-même, sans compte et hors ligne','Pensé pour le nettoyage, la maintenance, la surveillance, les installateurs'],
    comp: ['Plateforme RH complète, des congés à l\'organigramme','Pointage depuis l\'app, une tablette ou un poste fixe','Prix publics et activation sans passer par un commercial','Géolocalisation facultative, sans vérification du signal','Récapitulatifs pour le service du personnel, pas pour le client final'],
    footnote: '* Selon la loi (art. 13 du RGPD et, en Italie, art. 4 du Statut des travailleurs), chaque salarié doit être informé avant d\'être géolocalisé. Si le logiciel laisse cette étape à l\'employeur, le risque lui reste. GeoTapp prépare l\'information personnalisée, la fait signer pour prise de connaissance dans l\'app et ne laisse pas pointer tant qu\'elle n\'est pas signée.',
  },
  es: {
    badge: 'Comparativa de apps', h1sub: '¿la oficina de personal o la obra?',
    desc: 'Factorial reúne vacaciones, ausencias, organigrama y fichaje en una sola plataforma de RR. HH., con precios públicos y activación rápida. GeoTapp sella cada intervención, con posición comprobada al fichar, fotos de prueba y un informe que el cliente final comprueba por su cuenta.',
    summary: 'En resumen:',
    summaryText: 'Factorial resuelve el trabajo de la oficina de personal, y lo hace bien, con una interfaz que se entiende a la primera. GeoTapp resuelve el momento en que el cliente sostiene que el servicio no se hizo, y ese momento no se resuelve con un resumen de asistencia.',
    noteTitle: 'La geolocalización es una casilla, el riesgo sigue siendo del empleador',
    noteText: 'Activar la posición en el fichaje es una casilla que marcar en una pantalla de configuración, y dentro de esa casilla están el artículo 4 del Estatuto de los Trabajadores y la información que el trabajador debe recibir antes. Si el software registra la posición pero deja ese paso en tus manos, el riesgo te lo quedas tú. GeoTapp prepara la información, la hace firmar en la app como constancia de lectura y no deja fichar hasta que esté firmada. Y comprueba la posición antes de aceptarla, porque una coordenada falsa entra en el archivo con la misma cara que una verdadera.',
    features: 'Comparación de funciones clave', feat: 'Función', diff: 'Enfoques distintos',
    cta: '¿Quieres ver GeoTapp en acción?',
    ctaDesc: 'Pruébalo en una intervención real: en 14 días gratis verás cómo se convierte en una prueba que tu cliente verifica por sí mismo.',
    ctaBtn: 'Empezar prueba gratuita',
    geo: ['Informe sellado que mostrar al cliente','Posición comprobada antes de ser registrada','Fotos de la intervención en cadena hash: si las tocas, se nota','El cliente comprueba por su cuenta, sin cuenta y sin conexión','Pensado para limpieza, mantenimiento, vigilancia e instaladores'],
    comp: ['Plataforma de RR. HH. completa, de las vacaciones al organigrama','Fichaje desde la app, desde tableta y desde puesto fijo','Precios públicos y activación sin pasar por un comercial','Geolocalización opcional, sin verificación de la señal','Resúmenes para la oficina de personal, no para el cliente final'],
    footnote: '* Por ley (art. 13 del RGPD y, en Italia, art. 4 del Estatuto de los Trabajadores), cada empleado debe ser informado antes de ser geolocalizado. Si el software deja este paso en manos del empleador, el riesgo sigue siendo suyo. GeoTapp prepara la información personalizada, la hace firmar en la app como constancia de lectura y no deja fichar hasta que esté firmada.',
  },
  pt: {
    badge: 'Comparação App', h1sub: 'o departamento de pessoal ou a obra?',
    desc: 'A Factorial junta férias, ausências, organograma e picagem numa única plataforma de RH, com preços públicos e arranque rápido. A GeoTapp sela a intervenção concreta, com GPS verificado, fotos seladas e um relatório que o cliente final confere sozinho.',
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
    badge: 'App-vergelijking',
    h1sub: 'de personeelsafdeling of de bouwplaats?',
    desc: 'Factorial brengt verlof, afwezigheid, organigram en registratie samen in één hr-platform, met openbare prijzen en snelle activering. GeoTapp verzegelt de afzonderlijke klus, met locatie gecontroleerd bij de registratie, bewijsfoto\'s en een rapport dat de eindklant zelf controleert.',
    summary: 'Kort gezegd:',
    summaryText: 'Factorial lost het werk van de personeelsafdeling op, en doet dat goed, met een interface die u meteen begrijpt. GeoTapp lost het moment op waarop de opdrachtgever beweert dat de dienst niet is uitgevoerd, en dat moment los je niet op met een overzicht van aanwezigheid.',
    noteTitle: 'Geolocatie is een vinkje, het risico blijft bij de verantwoordelijke',
    noteText: 'De locatie bij de registratie inschakelen is een vakje aanvinken in een instellingenscherm, en in dat vakje zitten artikel 4 van het arbeidsstatuut en de privacyverklaring die de werknemer vooraf moet ontvangen. Legt de software de locatie vast maar laat ze die stap aan u over, dan houdt u het risico zelf. GeoTapp maakt de privacyverklaring klaar, laat die in de app voor kennisgeving ondertekenen en laat niet registreren totdat ze is ondertekend. En de locatie controleert het voordat het haar accepteert, want een valse coördinaat komt in het archief met hetzelfde gezicht als een echte.',
    features: 'Vergelijking van de belangrijkste functies',
    feat: 'Functie',
    diff: 'Verschillende benaderingen',
    cta: 'Wilt u GeoTapp in actie zien?',
    ctaDesc: 'Probeer het op een echte klus: in 14 dagen gratis ziet u hoe het een bewijs wordt dat uw opdrachtgever zelf controleert.',
    ctaBtn: 'Start de gratis proefperiode',
    geo: ['Verzegeld rapport om aan de opdrachtgever te tonen','Locatie gecontroleerd voordat ze wordt vastgelegd','Foto\'s van de klus in een hash-keten, wie eraan komt, valt op','De opdrachtgever controleert zelf, zonder account en offline','Bedoeld voor schoonmaak, onderhoud, bewaking, installateurs'],
    comp: ['Compleet hr-platform, van verlof tot organigram','Registratie via app, tablet en vaste post','Openbare prijzen en activering zonder verkoper','Optionele geolocatie, zonder controle van het signaal','Overzichten voor de personeelsafdeling, niet voor de eindklant'],
    footnote: '* Volgens de wet (art. 13 AVG en, in Italië, art. 4 van het arbeidsstatuut) moet elke werknemer worden geïnformeerd voordat hij wordt gelokaliseerd. Laat de software deze stap aan de verantwoordelijke over, dan blijft het risico bij hem. GeoTapp maakt de persoonlijke privacyverklaring klaar, laat die in de app voor kennisgeving ondertekenen en laat niet registreren totdat ze is ondertekend.',
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
  const m = localizeEnglishDeep(META[locale] ?? META.en, locale);
  return {
    title: { absolute: m.title }, description: m.description,
    alternates: buildLocaleAlternates(locale, PATHNAME),
    openGraph: { url: buildCanonicalUrl(locale, PATHNAME), type: 'website', title: m.title, description: m.description, images: [{ url: '/og-default.png', width: 1200, height: 630, alt: m.title }] },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description },
  };
}

export default async function GeoTappVsFactorialPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = localizeEnglishDeep(T[locale] ?? T.en, locale);
  const faqItems = localizeEnglishDeep(FAQ[locale] ?? FAQ.en, locale);
  const labels = localizeEnglishDeep(ROWS_LABELS[locale] ?? ROWS_LABELS.en, locale);
  const rows = labels.map((feature, i) => ({ feature, geotapp: ROWS_GEO[i], competitor: ROWS_COMP[i] }));

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  const breadcrumb = buildComparisonBreadcrumb({ locale, pathname: PATHNAME, competitorName: 'Factorial' });
  const meta = localizeEnglishDeep(META[locale] ?? META.en, locale);
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
