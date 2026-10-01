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
  pt: { title: 'GeoTapp vs Factorial - Comparação 2026 | GeoTapp', description: 'GeoTapp vs Factorial: plataforma de RH ou prova do trabalho? Posição controlada ao picar o ponto, relatórios selados e verificação autónoma do cliente.' },
  da: { title: 'GeoTapp vs Factorial - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Factorial: HR-platform eller dokumentation af arbejdet? Sammenligning af positionskontrol ved stempling, forseglede rapporter og kundens egen kontrol.' },
  sv: { title: 'GeoTapp vs Factorial - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs Factorial: HR-plattform eller bevis på utfört arbete? Jämförelse av positionskontroll vid instämpling, förseglade rapporter, kundens egen verifiering och GPS-informationen.' },
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
    { q: 'Qual é a diferença principal entre a GeoTapp e a Factorial?', a: 'A Factorial é uma plataforma de RH para pequenas e médias empresas, onde férias, ausências, organograma e picagem ficam num só sítio. A GeoTapp sela o trabalho no terreno e transforma cada intervenção num documento selado que o cliente verifica por si. Uma gere as pessoas dentro da empresa, a outra documenta o trabalho cá fora.' },
    { q: 'A Factorial controla se a posição é falsificada?', a: 'A picagem da Factorial regista a posição quando a empresa ativa a opção, e a geolocalização continua a ser uma função opcional do módulo de presenças. Um controlo das posições simuladas não consta das funcionalidades indicadas. Na GeoTapp o controlo corre em cada picagem: recusa as posições simuladas por aplicações de localização falsa, as demasiado imprecisas e as deslocações impossíveis.' },
    { q: 'O cliente pode verificar os relatórios por si?', a: 'Os resumos da Factorial servem o departamento de pessoal e o processamento salarial, e continuam a ser documentos internos. A GeoTapp produz um pacote selado que o cliente final abre e confere por si, sem conta, sem ligação e sem passar pelos nossos sistemas, porque a cadeia de hash está dentro do ficheiro.' },
    { q: 'GeoTapp ou Factorial para uma empresa de limpeza?', a: 'Se o problema é manter em ordem férias, licenças e recibos de vencimento de uma equipa que cresce, a Factorial é cómoda, clara e ativa-se sozinha. Se o problema é o cliente que retém uma fatura alegando que o serviço não foi feito, um resumo de presenças não basta: é preciso uma prova que o cliente possa controlar. As duas ferramentas cobrem momentos diferentes e podem conviver.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Factorial?', a: 'Factorial is een hr-platform voor kleine en middelgrote bedrijven, waar verlof, afwezigheid, organigram en registratie op één plek staan. GeoTapp verzegelt het werk in het veld en maakt van elke klus een verzegeld document dat de opdrachtgever zelf controleert. Het ene beheert de mensen binnen het bedrijf, het andere documenteert het werk buiten de deur.' },
    { q: 'Controleert Factorial of de locatie vervalst is?', a: 'De registratie van Factorial legt de locatie vast wanneer het bedrijf die optie inschakelt, en geolocatie blijft een optionele functie van de aanwezigheidsmodule. Een controle op gesimuleerde locaties komt niet voor onder de opgegeven functies. In GeoTapp draait de controle bij elke registratie: ze weigert locaties die door nep-locatie-apps zijn gesimuleerd, te onnauwkeurige locaties en onmogelijke verplaatsingen.' },
    { q: 'Kan de opdrachtgever de rapporten zelf controleren?', a: 'De overzichten van Factorial dienen voor de personeelsafdeling en de loonstrook, en blijven interne documenten. GeoTapp maakt een verzegeld pakket dat de eindklant zelf opent en controleert, zonder account, zonder verbinding en zonder via onze systemen te gaan, omdat de hash-keten in het bestand zit.' },
    { q: 'GeoTapp of Factorial voor een schoonmaakbedrijf?', a: 'Is het probleem verlof, afwezigheid en loonstroken op orde houden van een groeiend team, dan is Factorial handig, helder en schakelt zichzelf in. Is het probleem de opdrachtgever die een factuur achterhoudt omdat de dienst volgens hem niet is uitgevoerd, dan is een overzicht van aanwezigheid niet genoeg: dan hebt u een bewijs nodig dat de opdrachtgever kan controleren. De twee hulpmiddelen dekken twee verschillende momenten en kunnen naast elkaar bestaan.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Factorial?', a: 'Factorial er en HR-platform til små og mellemstore virksomheder, hvor ferie, fravær, organisationsdiagram og stempling ligger samme sted. GeoTapp forsegler arbejdet i marken og gør hver opgave til et forseglet dokument, som kunden selv verificerer. Den ene styrer folk i virksomheden, den anden dokumenterer arbejdet udenfor.' },
    { q: 'Kontrollerer Factorial, om positionen er forfalsket?', a: 'Factorials stempling registrerer positionen, når virksomheden aktiverer indstillingen, og geolokalisering er en valgfri funktion i fremmødemodulet. En kontrol af simulerede positioner optræder ikke blandt de angivne funktioner. I GeoTapp kører kontrollen ved hver stempling: den afviser positioner simuleret af apps med falsk placering, positioner, der er for upræcise, og umulige forflytninger.' },
    { q: 'Kan kunden selv verificere rapporterne?', a: 'Factorials oversigter er til personaleafdelingen og lønnen og forbliver interne dokumenter. GeoTapp laver en forseglet pakke, som slutkunden åbner og kontrollerer på egen hånd, uden konto, uden forbindelse og uden at gå gennem vores systemer, fordi hash-kæden ligger inde i filen.' },
    { q: 'GeoTapp eller Factorial til et rengøringsfirma?', a: 'Hvis problemet er at holde styr på ferie, fravær og lønsedler for et hold, der vokser, er Factorial praktisk, overskueligt og aktiveres af sig selv. Hvis problemet er kunden, der tilbageholder en faktura og hævder, at ydelsen ikke er udført, er en fremmødeoversigt ikke nok: du skal have dokumentation, som kunden kan kontrollere. De to værktøjer dækker to forskellige øjeblikke og kan bruges sammen.' },
  ],
  sv: [
    { q: 'Vad är den största skillnaden mellan GeoTapp och Factorial?', a: 'Factorial är en HR-plattform för små och medelstora företag, där semester, frånvaro, organisationsschema och instämpling finns på samma ställe. GeoTapp förseglar fältarbete och gör varje uppdrag till ett förseglat dokument som kunden själv verifierar. Det ena hanterar människorna i företaget, det andra dokumenterar arbetet utanför det.' },
    { q: 'Kontrollerar Factorial om positionen är förfalskad?', a: 'Factorials instämpling registrerar positionen när företaget slår på alternativet, och geolokalisering är en valfri funktion i närvaromodulen. En kontroll av simulerade positioner finns inte bland de angivna funktionerna. I GeoTapp körs kontrollen vid varje instämpling: den avvisar positioner som simulerats med appar för falsk plats, positioner som är för oprecisa och omöjliga förflyttningar.' },
    { q: 'Kan kunden verifiera rapporterna själv?', a: 'Factorials sammanställningar är till för HR-avdelningen och lönen, och förblir interna dokument. GeoTapp tar fram ett förseglat paket som slutkunden öppnar och kontrollerar själv, utan konto, utan uppkoppling och utan att gå via våra system, eftersom hashkedjan följer med i filen.' },
    { q: 'GeoTapp eller Factorial för ett städföretag?', a: 'Om problemet är att hålla ordning på semester, ledighet och lönespecifikationer för ett växande team är Factorial bekvämt, överskådligt och går att sätta upp själv. Om problemet är en kund som håller inne en faktura och hävdar att tjänsten aldrig utfördes räcker inte en närvarosammanställning: du behöver ett bevis som kunden kan kontrollera. De två verktygen täcker två olika ögonblick och kan användas tillsammans.' },
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
  pt: ['Controlo da posição ao picar o ponto (recusa posições simuladas)','Relatório selado criptograficamente','Verificação independente por parte do cliente','Fotos da intervenção em cadeia de hash','Picagem a partir do smartphone','Geolocalização no local de trabalho','App nativa Android e iOS','Gestão de férias e ausências','Processamento salarial e recibos de vencimento','Cartões NFC e leitores físicos','Ativação autónoma com teste gratuito','Concebida para equipas no terreno','Informação sobre o GPS assinada na app antes de picar o ponto*'],
  nl: ['Controle van de locatie bij de registratie (weigert gesimuleerde locaties)','Cryptografisch verzegeld rapport','Onafhankelijke controle door de opdrachtgever','Foto\'s van de klus in een hash-keten','Registratie via de smartphone','Geolocatie op de werkplek','Native app voor Android en iOS','Beheer van verlof en afwezigheid','Salarisverwerking en loonstroken','NFC-badges en fysieke lezers','Zelfstandige activering met gratis proefperiode','Ontworpen voor teams in het veld','GPS-verklaring ondertekend in de app vóór het registreren*'],
  da: ['Positionskontrol ved stempling (afviser simulerede positioner)','Kryptografisk forseglet rapport','Uafhængig verificering af kunden','Opgavefotos i en hash-kæde','Stempling fra smartphone','Geolokalisering på arbejdsstedet','Native app til Android og iOS','Ferie- og fraværsstyring','Lønbehandling og lønsedler','NFC-kort og fysiske læsere','Selvbetjent opstart med gratis prøveperiode','Bygget til hold i marken','GPS-information underskrevet i appen, før man stempler*'],
  sv: ['Positionskontroll vid instämpling (avvisar simulerade positioner)','Kryptografiskt förseglad rapport','Oberoende verifiering av kunden','Uppdragsfoton i en hashkedja','Instämpling från smartphone','Geolokalisering på arbetsplatsen','Native app för Android och iOS','Hantering av semester och frånvaro','Lönehantering och lönespecifikationer','NFC-kort och fysiska läsare','Självbetjäning med gratis provperiod','Byggt för team i fält','GPS-information signerad i appen innan man stämplar in*'],
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
    badge: 'Comparação de apps', h1sub: 'o departamento de pessoal ou a obra?',
    desc: 'A Factorial junta férias, ausências, organograma e picagem numa única plataforma de RH, com preços públicos e ativação rápida. A GeoTapp sela cada intervenção, com a posição controlada ao picar o ponto, fotos de prova e um relatório que o cliente final controla por si.',
    summary: 'Em resumo:',
    summaryText: 'A Factorial resolve o trabalho do departamento de pessoal, e fá-lo bem, com uma interface que se percebe à primeira. A GeoTapp resolve o momento em que o cliente sustenta que o serviço não foi feito, e esse momento não se resolve com um resumo de presenças.',
    noteTitle: 'A geolocalização é uma caixa por assinalar, o risco fica com o empregador',
    noteText: 'Ativar a posição na picagem é uma caixa por assinalar num ecrã de configuração, e dentro dessa caixa está a informação que o trabalhador deve receber antes. Se o software regista a posição mas deixa esse passo ao empregador, o risco fica com ele. A GeoTapp prepara a informação, faz com que seja assinada na app como confirmação de leitura e não deixa picar o ponto enquanto não estiver assinada. E controla a posição antes de a aceitar, porque uma coordenada falsa entra nos registos com o mesmo aspeto de uma verdadeira.',
    features: 'Comparação das funcionalidades principais', feat: 'Funcionalidade', diff: 'Abordagens diferentes',
    cta: 'Quer ver a GeoTapp em ação?',
    ctaDesc: 'Experimente numa intervenção real: em 14 dias grátis vê como se torna uma prova que o seu cliente verifica por si.',
    ctaBtn: 'Começar teste gratuito',
    geo: ['Relatório selado para mostrar ao cliente','Posição controlada antes de ser registada','Fotos da intervenção em cadeia de hash: se lhes mexerem, nota-se','O cliente controla por si, sem conta e offline','Pensada para limpeza, manutenção, vigilância e instaladores'],
    comp: ['Plataforma de RH completa, das férias ao organograma','Picagem pela app, pelo tablet e por terminal fixo','Preços públicos e ativação sem passar por um comercial','Geolocalização opcional, sem verificação do sinal','Resumos para o departamento de pessoal, não para o cliente final'],
    footnote: '* Por lei (art. 13.º do RGPD), cada trabalhador deve ser informado antes de ser geolocalizado. Se o software deixa este passo ao empregador, o risco continua a ser dele. A GeoTapp prepara a informação personalizada, faz com que seja assinada na app como confirmação de leitura e não deixa picar o ponto enquanto não estiver assinada.',
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
    badge: 'App-sammenligning', h1sub: 'personaleafdelingen eller byggepladsen?',
    desc: 'Factorial samler ferie, fravær, organisationsdiagram og stempling i én HR-platform med offentlige priser og hurtig opstart. GeoTapp forsegler den enkelte opgave, med position kontrolleret ved stempling, bevisfotos og en rapport, som slutkunden selv kontrollerer.',
    summary: 'Kort sagt:',
    summaryText: 'Factorial løser personaleafdelingens arbejde, og gør det godt, med en brugerflade, man forstår første gang. GeoTapp løser det øjeblik, hvor kunden hævder, at ydelsen ikke er udført, og det øjeblik løses ikke med en fremmødeoversigt.',
    noteTitle: 'Geolokalisering er et flueben, risikoen bliver hos arbejdsgiveren',
    noteText: 'At aktivere positionen ved stempling er et felt, man sætter flueben i på en indstillingsside, og i det felt ligger artikel 4 i den italienske arbejdstagerlov og den information, som medarbejderen skal have på forhånd. Hvis softwaren registrerer positionen, men overlader det trin til dig, beholder du selv risikoen. GeoTapp forbereder informationen, får den underskrevet i appen som bekræftelse på, at den er læst, og lader ikke medarbejderen stemple, før den er underskrevet. Og positionen kontrolleres, før den accepteres, for et falsk koordinat kommer i arkivet med samme ansigt som et ægte.',
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion', diff: 'Forskellige tilgange',
    cta: 'Vil du se GeoTapp i aktion?',
    ctaDesc: 'Prøv det på en rigtig opgave: på 14 dage gratis ser du, hvordan det bliver til dokumentation, som din kunde selv verificerer.',
    ctaBtn: 'Start gratis prøveperiode',
    geo: ['Forseglet rapport at vise kunden','Position kontrolleret, før den registreres','Opgavefotos i en hash-kæde: hvis du rører dem, kan det ses','Kunden kontrollerer selv, uden konto og offline','Lavet til rengøring, vedligeholdelse, vagt og installatører'],
    comp: ['Komplet HR-platform, fra ferie til organisationsdiagram','Stempling fra app, tablet og fast stempelstation','Offentlige priser og opstart uden at gå gennem en sælger','Valgfri geolokalisering, uden kontrol af signalet','Oversigter til personaleafdelingen, ikke til slutkunden'],
    footnote: '* Ifølge loven (GDPR art. 13 og, i Italien, art. 4 i arbejdstagerloven, Statuto dei Lavoratori) skal hver medarbejder informeres, før vedkommende geolokaliseres. Overlader softwaren dette trin til arbejdsgiveren, er risikoen stadig arbejdsgiverens. GeoTapp forbereder den personlige information, får den underskrevet i appen som bekræftelse på, at den er læst, og lader ikke medarbejderen stemple, før den er underskrevet.',
  },
  sv: {
    badge: 'App-jämförelse', h1sub: 'HR-avdelningen eller arbetsplatsen?',
    desc: 'Factorial samlar semester, frånvaro, organisationsschema och instämpling i en HR-plattform, med offentliga priser och snabb uppstart. GeoTapp förseglar det enskilda uppdraget, med position som kontrolleras vid instämpling, bevisfoton och en rapport som slutkunden själv kontrollerar.',
    summary: 'Kort sagt:',
    summaryText: 'Factorial löser HR-avdelningens arbete, och löser det bra, med ett gränssnitt som folk förstår på första försöket. GeoTapp löser ögonblicket när en kund hävdar att tjänsten aldrig utfördes, och det ögonblicket löses inte av en närvarosammanställning.',
    noteTitle: 'Geolokalisering är en kryssruta, risken stannar hos arbetsgivaren',
    noteText: 'Att slå på platsen för instämpling är en ruta man kryssar i på en inställningssida, och i den rutan ligger den information som den anställde ska få i förväg. Om programvaran registrerar positionen men överlåter det steget åt dig ligger risken kvar hos dig. GeoTapp tar fram informationen, låter den anställde signera den som läst i appen och släpper inte till instämpling förrän den är signerad. Dessutom kontrolleras positionen innan den godtas, eftersom en falsk koordinat hamnar i arkivet och ser precis ut som en äkta.',
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion', diff: 'Olika angreppssätt',
    cta: 'Vill du se GeoTapp i praktiken?',
    ctaDesc: 'Prova på ett riktigt uppdrag: på 14 gratisdagar ser du hur det blir ett bevis som din kund verifierar själv.',
    ctaBtn: 'Starta den kostnadsfria provperioden',
    geo: ['Förseglad rapport att visa kunden','Positionen kontrolleras innan den registreras','Uppdragsfoton i en hashkedja: rör du dem syns det','Kunden kontrollerar själv, utan konto och offline','Byggt för städning, underhåll, bevakning och installatörer'],
    comp: ['Komplett HR-plattform, från semester till organisationsschema','Instämpling från app, surfplatta och arbetsstation','Offentliga priser och uppstart utan att gå via en säljare','Valfri geolokalisering, utan kontroll av simulerade positioner','Sammanställningar för HR-avdelningen, inte för slutkunden'],
    footnote: '* Enligt lag (artikel 13 i GDPR) måste varje anställd informeras innan hen geolokaliseras. Om programvaran överlåter det steget åt arbetsgivaren ligger risken kvar hos arbetsgivaren. GeoTapp tar fram den personliga informationen, låter den anställde signera den som läst i appen och släpper inte till instämpling förrän den är signerad.',
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
