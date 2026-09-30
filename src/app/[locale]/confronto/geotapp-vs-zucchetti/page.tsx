import type { Metadata } from 'next';
import ComparisonPageL from '@/components/ComparisonPageL';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-zucchetti/';
const ARTICLE_DATE_PUBLISHED = '2026-09-03';
const ARTICLE_DATE_MODIFIED = '2026-09-03';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs Zucchetti - Confronto 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti: suite HR o prova del lavoro svolto? Confronto su controllo della posizione alla timbratura, report sigillati, verifica autonoma del committente e informativa GPS.' },
  en: { title: 'GeoTapp vs Zucchetti - Comparison 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti: HR suite or proof of the work done? Comparison on the position check at clock-in, sealed reports, the client\'s own verification and the GPS notice.' },
  de: { title: 'GeoTapp vs Zucchetti - Vergleich 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti: HR-Suite oder Nachweis der geleisteten Arbeit? Vergleich von Positionsprüfung beim Stempeln, versiegelten Berichten, eigenständiger Überprüfung durch den Auftraggeber und GPS-Information.' },
  nl: { title: 'GeoTapp vs Zucchetti - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti: hr-suite of bewijs van het uitgevoerde werk? Vergelijking op controle van de locatie bij de registratie, verzegelde rapporten, zelfstandige controle door de opdrachtgever en GPS-verklaring.' },
  fr: { title: 'GeoTapp vs Zucchetti - Comparatif 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti : suite RH ou preuve du travail ? Position au pointage, rapports scellés, vérification par le client et information GPS.' },
  es: { title: 'GeoTapp vs Zucchetti - Comparación 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti: ¿suite de RR. HH. o prueba del trabajo hecho? Comparación del control de la posición al fichar, los informes sellados, la verificación autónoma del cliente y el aviso GPS.' },
  pt: { title: 'GeoTapp vs Zucchetti - Comparação 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti: suite de RH ou prova do trabalho realizado? Comparação do controlo da posição ao picar o ponto, relatórios selados, verificação autónoma pelo cliente e informação GPS.' },
  da: { title: 'GeoTapp vs Zucchetti - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti: HR-suite eller bevis for arbejdet? Sammenlign verificeret GPS, kryptografisk forseglede rapporter og kundens egen kontrol.' },
  sv: { title: 'GeoTapp vs Zucchetti - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti: HR-svit eller bevis på arbetet? Jämför verifierad GPS, kryptografiskt förseglade rapporter och kundens egen kontroll.' },
  nb: { title: 'GeoTapp vs Zucchetti - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti: HR-suite eller bevis for arbeidet? Sammenlign verifisert GPS, kryptografisk forseglede rapporter og oppdragsgivers egen kontroll.' },
  ru: { title: 'GeoTapp vs Zucchetti, Сравнение 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti: HR-система или доказательство выполненной работы? Сравните проверенный GPS, криптографически опечатанные отчёты и независимую проверку заказчиком.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza principale tra GeoTapp e Zucchetti?', a: 'Zucchetti è una suite per la gestione del personale, dalle presenze alle paghe, e la timbratura è uno dei tanti moduli. GeoTapp è uno strumento di prova verificabile del lavoro sul campo, che trasforma ogni intervento in un documento sigillato e verificabile dal committente. Il primo serve a chiudere il mese in ufficio, il secondo a documentare una fattura.' },
    { q: 'Zucchetti controlla se la posizione è falsificata?', a: 'La timbratura mobile di Zucchetti è geolocalizzata e validata da un geofence, quindi il sistema controlla che la posizione ricada nel perimetro autorizzato. Un controllo sulle posizioni simulate non risulta tra le funzioni dichiarate. GeoTapp lo esegue a ogni timbratura, prima di registrare il dato: rifiuta le posizioni simulate da app di finta posizione, quelle troppo imprecise e gli spostamenti impossibili.' },
    { q: 'Il committente può verificare da solo i report?', a: 'I riepiloghi di una suite HR nascono per l\'amministrazione e per il consulente del lavoro. GeoTapp produce un pacchetto sigillato che il cliente finale apre e controlla per conto suo, senza account, senza connessione e senza passare dai nostri sistemi, perché la catena di hash sta dentro il file.' },
    { q: 'GeoTapp o Zucchetti per un\'impresa di pulizie?', a: 'Se il nodo è la busta paga e un ufficio del personale strutturato, Zucchetti ha una profondità che noi non abbiamo, e raccontarti il contrario sarebbe disonesto. Se il nodo è il committente che contesta il servizio, un riepilogo di presenze non basta: serve una prova costruita per uscire dall\'azienda. I due strumenti convivono senza pestarsi i piedi.' },
  ],
  en: [
    { q: 'What is the main difference between GeoTapp and Zucchetti?', a: 'Zucchetti is a workforce management suite, from attendance to payroll, where clock-in is one module among many. GeoTapp is a tool for verifiable proof of field work, turning every job into a sealed document the client can verify. One closes the month in the back office, the other documents an invoice.' },
    { q: 'Does Zucchetti check whether the position is faked?', a: 'Zucchetti mobile clock-in is geolocated and validated by a geofence, so the system checks that the position falls inside the authorised perimeter. A check on simulated positions is not listed among the declared features. GeoTapp runs it at every clock-in, before the record is stored: it rejects positions simulated by fake-location apps, positions that are too imprecise and impossible jumps.' },
    { q: 'Can the client verify the reports independently?', a: 'Attendance sheets from an HR suite are built for the back office and the payroll consultant. GeoTapp produces a sealed package the end client opens and checks alone, with no account, no connection and no need to come through our systems, because the hash chain travels inside the file.' },
    { q: 'GeoTapp or Zucchetti for a cleaning company?', a: 'If the knot is payroll and a structured HR department, Zucchetti has a depth we do not have, and pretending otherwise would be dishonest. If the knot is the client disputing the service, an attendance sheet is not enough: you need proof built to leave the company. The two tools live side by side without getting in each other\'s way.' },
  ],
  de: [
    { q: 'Was ist der Hauptunterschied zwischen GeoTapp und Zucchetti?', a: 'Zucchetti ist eine Suite für die Personalverwaltung, von der Anwesenheit bis zur Lohnabrechnung, und das Stempeln ist eines von vielen Modulen. GeoTapp ist ein Werkzeug für den überprüfbaren Nachweis der Arbeit im Außendienst, das aus jedem Einsatz ein versiegeltes Dokument macht, das der Auftraggeber überprüfen kann. Das eine dient dem Monatsabschluss im Büro, das andere der Dokumentation einer Rechnung.' },
    { q: 'Prüft Zucchetti, ob die Position gefälscht ist?', a: 'Das mobile Stempeln von Zucchetti ist geolokalisiert und wird von einem Geofence validiert, das System prüft also, ob die Position im zugelassenen Bereich liegt. Eine Prüfung auf simulierte Positionen gehört nicht zu den angegebenen Funktionen. GeoTapp führt sie bei jedem Stempeln aus, bevor die Angabe erfasst wird: Es weist Positionen ab, die von Fake-Location-Apps simuliert wurden, zu ungenaue Positionen und unmögliche Ortssprünge.' },
    { q: 'Kann der Auftraggeber die Berichte selbst überprüfen?', a: 'Die Übersichten einer HR-Suite entstehen für die Verwaltung und den Steuerberater. GeoTapp erstellt ein versiegeltes Paket, das der Endkunde selbst öffnet und prüft, ohne Konto, ohne Internetverbindung und ohne unsere Systeme, weil die Hash-Kette in der Datei steckt.' },
    { q: 'GeoTapp oder Zucchetti für eine Reinigungsfirma?', a: 'Wenn der Knackpunkt die Lohnabrechnung und eine gut aufgestellte Personalabteilung ist, hat Zucchetti eine Tiefe, die wir nicht haben, und das Gegenteil zu behaupten wäre unehrlich. Wenn der Knackpunkt der Auftraggeber ist, der die Leistung beanstandet, reicht eine Anwesenheitsübersicht nicht: Dann braucht es einen Nachweis, der dafür gebaut ist, das Unternehmen zu verlassen. Die beiden Werkzeuge existieren nebeneinander, ohne sich in die Quere zu kommen.' },
  ],
  fr: [
    { q: 'Quelle est la différence principale entre GeoTapp et Zucchetti ?', a: 'Zucchetti est une suite de gestion du personnel, des présences à la paie, et le pointage n\'est que l\'un de ses nombreux modules. GeoTapp est un outil de preuve vérifiable du travail sur le terrain, qui transforme chaque intervention en un document scellé que le client peut vérifier. Le premier sert à clôturer le mois au bureau, le second à documenter une facture.' },
    { q: 'Zucchetti contrôle-t-il si la position est falsifiée ?', a: 'Le pointage mobile de Zucchetti est géolocalisé et validé par un géorepérage : le système contrôle donc que la position tombe dans le périmètre autorisé. Un contrôle des positions simulées ne figure pas parmi les fonctionnalités annoncées. GeoTapp l\'exécute à chaque pointage, avant d\'enregistrer la donnée : il refuse les positions simulées par des applis de fausse localisation, celles qui sont trop imprécises et les déplacements impossibles.' },
    { q: 'Le client peut-il vérifier lui-même les rapports ?', a: 'Les récapitulatifs d\'une suite RH sont conçus pour l\'administration et pour le gestionnaire de paie. GeoTapp produit un paquet scellé que le client final ouvre et contrôle de son côté, sans compte, sans connexion et sans passer par nos systèmes, parce que la chaîne de hachage se trouve dans le fichier.' },
    { q: 'GeoTapp ou Zucchetti pour une entreprise de nettoyage ?', a: 'Si le nœud du problème, c\'est la paie et un service du personnel structuré, Zucchetti a une profondeur que nous n\'avons pas, et vous dire le contraire serait malhonnête. Si le nœud du problème, c\'est le client qui conteste la prestation, un récapitulatif de présences ne suffit pas : il faut une preuve construite pour sortir de l\'entreprise. Les deux outils cohabitent sans se gêner.' },
  ],
  es: [
    { q: '¿Cuál es la diferencia principal entre GeoTapp y Zucchetti?', a: 'Zucchetti es una suite de gestión de personal, de la asistencia a la nómina, y el fichaje es uno más de sus módulos. GeoTapp es una herramienta de prueba verificable del trabajo en campo, que convierte cada intervención en un documento sellado que el cliente puede verificar. La primera sirve para cerrar el mes en la oficina; la segunda, para documentar una factura.' },
    { q: '¿Comprueba Zucchetti si la posición está falsificada?', a: 'El fichaje móvil de Zucchetti está geolocalizado y validado por un geofence, así que el sistema comprueba que la posición caiga dentro del perímetro autorizado. Un control sobre las posiciones simuladas no figura entre las funciones declaradas. GeoTapp lo hace en cada fichaje, antes de registrar el dato: rechaza las posiciones simuladas con apps de ubicación falsa, las demasiado imprecisas y los desplazamientos imposibles.' },
    { q: '¿Puede el cliente verificar los informes por su cuenta?', a: 'Los resúmenes de una suite de RR. HH. nacen para la administración y para la gestoría laboral. GeoTapp produce un paquete sellado que el cliente final abre y comprueba por su cuenta, sin cuenta de usuario, sin conexión y sin pasar por nuestros sistemas, porque la cadena de hashes está dentro del archivo.' },
    { q: '¿GeoTapp o Zucchetti para una empresa de limpieza?', a: 'Si el problema de fondo es la nómina y un departamento de personal estructurado, Zucchetti tiene una profundidad que nosotros no tenemos, y decirte lo contrario sería deshonesto. Si el problema de fondo es el cliente que discute el servicio, un resumen de asistencia no basta: hace falta una prueba construida para salir de la empresa. Las dos herramientas conviven sin pisarse.' },
  ],
  pt: [
    { q: 'Qual é a principal diferença entre a GeoTapp e a Zucchetti?', a: 'A Zucchetti é uma suite de gestão de pessoal, das presenças ao processamento salarial, e a picagem é apenas um dos muitos módulos. A GeoTapp é uma ferramenta de prova verificável do trabalho no terreno, que transforma cada intervenção num documento selado e verificável pelo cliente. A primeira serve para fechar o mês no escritório, a segunda para documentar uma fatura.' },
    { q: 'A Zucchetti controla se a posição é falsificada?', a: 'A picagem móvel da Zucchetti é geolocalizada e validada por um geofence, portanto o sistema verifica que a posição cai dentro do perímetro autorizado. Um controlo das posições simuladas não consta das funções declaradas. A GeoTapp executa-o em cada picagem, antes de registar o dado: rejeita as posições simuladas por apps de localização falsa, as demasiado imprecisas e as deslocações impossíveis.' },
    { q: 'O cliente pode verificar os relatórios sozinho?', a: 'Os mapas de uma suite de RH nascem para a administração e para o contabilista. A GeoTapp produz um pacote selado que o cliente final abre e confere por conta própria, sem conta, sem ligação e sem passar pelos nossos sistemas, porque a cadeia de hash viaja dentro do ficheiro.' },
    { q: 'GeoTapp ou Zucchetti para uma empresa de limpeza?', a: 'Se o nó é o processamento salarial e um departamento de pessoal estruturado, a Zucchetti tem uma profundidade que nós não temos, e dizer o contrário seria desonesto. Se o nó é o cliente que contesta o serviço, um mapa de presenças não basta: é preciso uma prova construída para sair da empresa. As duas ferramentas convivem sem se atrapalhar.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Zucchetti?', a: 'Zucchetti is een suite voor personeelsbeheer, van aanwezigheid tot salaris, en registratie is een van de vele modules. GeoTapp is een hulpmiddel voor controleerbaar bewijs van het werk in het veld, dat van elke klus een verzegeld document maakt dat de opdrachtgever kan controleren. Het eerste dient om de maand op kantoor af te sluiten, het tweede om een factuur te documenteren.' },
    { q: 'Controleert Zucchetti of de locatie vervalst is?', a: 'De mobiele registratie van Zucchetti is gelokaliseerd en gevalideerd door een geofence, dus het systeem controleert of de locatie binnen de toegestane omtrek valt. Een controle op gesimuleerde locaties staat niet onder de opgegeven functies. GeoTapp voert die controle bij elke registratie uit, voordat het gegeven wordt vastgelegd: het weigert locaties die door nep-locatie-apps zijn gesimuleerd, te onnauwkeurige locaties en onmogelijke verplaatsingen.' },
    { q: 'Kan de opdrachtgever de rapporten zelf controleren?', a: 'De overzichten van een hr-suite zijn gemaakt voor de administratie en voor de salarisadministrateur. GeoTapp maakt een verzegeld pakket dat de eindklant zelf opent en controleert, zonder account, zonder verbinding en zonder via onze systemen te gaan, omdat de hash-keten in het bestand zit.' },
    { q: 'GeoTapp of Zucchetti voor een schoonmaakbedrijf?', a: 'Zit het knelpunt in de loonstrook en een gestructureerde personeelsafdeling, dan heeft Zucchetti een diepgang die wij niet hebben, en u iets anders vertellen zou oneerlijk zijn. Zit het knelpunt in de opdrachtgever die de dienst betwist, dan is een overzicht van aanwezigheid niet genoeg: dan hebt u een bewijs nodig dat is gemaakt om het bedrijf te verlaten. De twee hulpmiddelen bestaan naast elkaar zonder elkaar in de weg te zitten.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Zucchetti?', a: 'Zucchetti er en suite til personaleadministration, fra tidsregistrering til løn, hvor stempling er et modul blandt mange. GeoTapp forsegler arbejdet i marken og gør hver opgave til et forseglet dokument, som kunden selv kan kontrollere. Det ene lukker måneden på kontoret, det andet forsvarer en faktura.' },
    { q: 'Kontrollerer Zucchetti om GPS er forfalsket?', a: 'Zucchettis mobile stempling er geolokaliseret og valideret med en geofence, så systemet kontrollerer, at positionen ligger inden for det tilladte område. En kontrol af signalets ægthed, der fanger simulerede positioner og manipulerede enheder, står ikke blandt de angivne funktioner. GeoTapp kører den ved hver stempling, før data gemmes.' },
    { q: 'Kan kunden selv kontrollere rapporterne?', a: 'Udtrækkene fra en HR-suite er lavet til administrationen og til lønkonsulenten. GeoTapp laver en forseglet pakke, som slutkunden åbner og kontrollerer alene, uden konto, uden forbindelse og uden at gå gennem vores systemer, for hash-kæden ligger inde i filen.' },
    { q: 'GeoTapp eller Zucchetti til et rengøringsfirma?', a: 'Hvis knuden er løn og en struktureret personaleafdeling, har Zucchetti en dybde, vi ikke har, og at påstå andet ville være uærligt. Hvis knuden er kunden, der bestrider ydelsen, forsvarer en timeoversigt dig ikke, og så skal der bevis til, som er bygget til at forlade virksomheden. De to værktøjer lever fint side om side.' },
  ],
  sv: [
    { q: 'Vad är den största skillnaden mellan GeoTapp och Zucchetti?', a: 'Zucchetti är en svit för personaladministration, från tidrapportering till lön, där instämplingen är en modul bland många. GeoTapp förseglar arbetet i fält och gör varje uppdrag till ett förseglat dokument som kunden själv kan kontrollera. Det ena stänger månaden på kontoret, det andra försvarar en faktura.' },
    { q: 'Kontrollerar Zucchetti om GPS är förfalskad?', a: 'Zucchettis mobila instämpling är geolokaliserad och valideras med en geofence, så systemet kontrollerar att positionen ligger inom det tillåtna området. En kontroll av signalens äkthet, som fångar simulerade positioner och manipulerade enheter, finns inte bland de angivna funktionerna. GeoTapp kör den vid varje instämpling, innan uppgiften sparas.' },
    { q: 'Kan kunden kontrollera rapporterna själv?', a: 'Utdragen från en HR-svit är gjorda för administrationen och för lönekonsulten. GeoTapp skapar ett förseglat paket som slutkunden öppnar och kontrollerar själv, utan konto, utan uppkoppling och utan att gå via våra system, för hashkedjan ligger inuti filen.' },
    { q: 'GeoTapp eller Zucchetti för ett städföretag?', a: 'Om knuten är lönen och en uppbyggd personalavdelning har Zucchetti ett djup vi inte har, och att påstå något annat vore ohederligt. Om knuten är kunden som ifrågasätter tjänsten försvarar dig ingen tidrapport, och då behövs bevis byggda för att lämna företaget. De två verktygen samsas utan att stå i vägen för varandra.' },
  ],
  nb: [
    { q: 'Hva er den viktigste forskjellen mellom GeoTapp og Zucchetti?', a: 'Zucchetti er en suite for personaladministrasjon, fra tidsregistrering til lønn, der stemplingen er en modul blant mange. GeoTapp forsegler arbeidet ute i felten og gjør hvert oppdrag til et forseglet dokument som oppdragsgiveren selv kan kontrollere. Det ene lukker måneden på kontoret, det andre forsvarer en faktura.' },
    { q: 'Kontrollerer Zucchetti om GPS er forfalsket?', a: 'Den mobile stemplingen til Zucchetti er geolokalisert og validert med en geofence, så systemet kontrollerer at posisjonen ligger innenfor det tillatte området. En kontroll av signalets ekthet, som fanger opp simulerte posisjoner og manipulerte enheter, står ikke blant de oppgitte funksjonene. GeoTapp kjører den ved hver stempling, før dataene lagres.' },
    { q: 'Kan oppdragsgiveren kontrollere rapportene selv?', a: 'Uttrekkene fra en HR-suite er laget for administrasjonen og for lønnskonsulenten. GeoTapp lager en forseglet pakke som sluttkunden åpner og kontrollerer alene, uten konto, uten forbindelse og uten å gå gjennom systemene våre, for hash-kjeden ligger inne i filen.' },
    { q: 'GeoTapp eller Zucchetti for et renholdsfirma?', a: 'Er knuten lønn og en oppbygd personalavdeling, har Zucchetti en dybde vi ikke har, og å påstå noe annet ville vært uredelig. Er knuten oppdragsgiveren som bestrider tjenesten, forsvarer ingen timeliste deg, og da trengs bevis bygget for å forlate bedriften. De to verktøyene lever godt side om side.' },
  ],
  ru: [
    { q: 'В чём главное отличие GeoTapp от Zucchetti?', a: 'Zucchetti, это система управления персоналом, от учёта присутствия до расчёта зарплаты, где отметка времени, лишь один из модулей. GeoTapp запечатывает работу на объекте и превращает каждый выезд в опечатанный документ, который заказчик проверяет сам. Первая закрывает месяц в бухгалтерии, вторая защищает счёт.' },
    { q: 'Проверяет ли Zucchetti подделку GPS?', a: 'Мобильная отметка Zucchetti геолоцирована и проверяется геозоной, то есть система смотрит, попадает ли координата в разрешённый периметр. Проверки подлинности самого сигнала, которая распознаёт симулированные позиции и модифицированные устройства, среди заявленных функций нет. GeoTapp выполняет её при каждой отметке, до записи данных.' },
    { q: 'Может ли заказчик проверить отчёты самостоятельно?', a: 'Выгрузки HR-системы сделаны для бухгалтерии и для кадрового консультанта. GeoTapp формирует опечатанный пакет, который конечный заказчик открывает и проверяет сам, без учётной записи, без интернета и без обращения к нашим системам, потому что цепочка хешей лежит внутри файла.' },
    { q: 'GeoTapp или Zucchetti для клининговой компании?', a: 'Если узел, это зарплата и выстроенный кадровый отдел, у Zucchetti есть глубина, которой у нас нет, и утверждать обратное было бы нечестно. Если узел, это заказчик, оспаривающий услугу, табель вас не защитит, и тут нужно доказательство, построенное для выхода за пределы компании. Два инструмента спокойно уживаются рядом.' },
  ],
};

// Etichette della tabella di confronto, per locale.
const ROWS_LABELS: Record<string, string[]> = {
  it: ['Controllo della posizione alla timbratura (rifiuta posizioni simulate)','Report sigillato crittograficamente','Verifica indipendente da parte del committente','Foto dell\'intervento in catena hash','Timbratura da smartphone','Geofence sul luogo di lavoro','App nativa Android e iOS','Gestione ferie e assenze','Elaborazione paghe e cedolini','Badge NFC e lettori fisici','Attivazione autonoma con prova gratuita','Progettato per squadre sul campo','Informativa GPS firmata nell\'app prima di timbrare*'],
  en: ['Position check at clock-in (rejects simulated positions)','Cryptographically sealed report','Independent verification by the client','Job photos in a hash chain','Smartphone clock-in','Geofence on the work site','Native Android and iOS app','Leave and absence management','Payroll processing and payslips','NFC badges and physical readers','Self-service activation with free trial','Built for field teams','GPS notice signed in the app before clocking in*'],
  de: ['Positionsprüfung beim Stempeln (weist simulierte Positionen ab)','Kryptographisch versiegelter Bericht','Unabhängige Überprüfung durch den Auftraggeber','Einsatzfotos in einer Hash-Kette','Stempeln per Smartphone','Geofence am Arbeitsort','Native App für Android und iOS','Urlaubs- und Abwesenheitsverwaltung','Lohn- und Gehaltsabrechnung','NFC-Badge und physische Lesegeräte','Selbstständige Aktivierung mit kostenloser Testphase','Für Teams im Außendienst gebaut','GPS-Information vor dem Stempeln in der App unterschrieben*'],
  fr: ['Contrôle de la position au pointage (refuse les positions simulées)','Rapport scellé cryptographiquement','Vérification indépendante par le client','Photos de l\'intervention en chaîne de hachage','Pointage depuis le smartphone','Géorepérage sur le lieu de travail','App native Android et iOS','Gestion des congés et des absences','Traitement de la paie et des fiches de paie','Badges NFC et lecteurs physiques','Activation autonome avec essai gratuit','Conçu pour les équipes de terrain','Information GPS signée dans l\'app avant de pointer*'],
  es: ['Control de la posición al fichar (rechaza posiciones simuladas)','Informe sellado criptográficamente','Verificación independiente por parte del cliente','Fotos de la intervención en cadena de hashes','Fichaje desde el smartphone','Geofence en el lugar de trabajo','App nativa Android e iOS','Gestión de vacaciones y ausencias','Procesamiento de nóminas','Tarjetas NFC y lectores físicos','Activación autónoma con prueba gratuita','Diseñado para equipos en campo','Aviso GPS firmado en la app antes de fichar*'],
  pt: ['Controlo da posição ao picar o ponto (rejeita posições simuladas)','Relatório selado criptograficamente','Verificação independente por parte do cliente','Fotos da intervenção em cadeia de hash','Picagem a partir do smartphone','Geofence no local de trabalho','App nativa Android e iOS','Gestão de férias e ausências','Processamento salarial e recibos de vencimento','Cartões NFC e leitores físicos','Ativação autónoma com teste gratuito','Concebido para equipas no terreno','Informação GPS assinada na app antes de picar o ponto*'],
  nl: ['Controle van de locatie bij de registratie (weigert gesimuleerde locaties)','Cryptografisch verzegeld rapport','Onafhankelijke controle door de opdrachtgever','Foto\'s van de klus in een hash-keten','Registratie via de smartphone','Geofence op de werkplek','Native app voor Android en iOS','Beheer van verlof en afwezigheid','Salarisverwerking en loonstroken','NFC-badges en fysieke lezers','Zelfstandige activering met gratis proefperiode','Ontworpen voor teams in het veld','GPS-verklaring ondertekend in de app vóór het registreren*'],
  da: ['GPS verificeret med anti-spoofing-kontrol','Kryptografisk forseglet rapport','Uafhængig kontrol af kunden','Opgavefotos i en hash-kæde','Stempling fra smartphone','Geofence på arbejdsstedet','Native app til Android og iOS','Ferie- og fraværsstyring','Lønbehandling og lønsedler','NFC-kort og fysiske læsere','Selvbetjent opstart med gratis prøveperiode','Bygget til teams i marken','Automatisk GPS-privatlivserklæring med digital signatur*'],
  sv: ['GPS verifierad med anti-spoofing-kontroll','Kryptografiskt förseglad rapport','Oberoende kontroll av kunden','Uppdragsfoton i en hashkedja','Instämpling från smartphone','Geofence på arbetsplatsen','Native app för Android och iOS','Hantering av semester och frånvaro','Lönehantering och lönebesked','NFC-kort och fysiska läsare','Egen start med gratis provperiod','Byggd för fältteam','Automatiskt GPS-integritetsmeddelande med digital signatur*'],
  nb: ['GPS verifisert med anti-spoofing-kontroll','Kryptografisk forseglet rapport','Uavhengig kontroll av oppdragsgiver','Oppdragsbilder i en hash-kjede','Stempling fra smarttelefon','Geofence på arbeidsstedet','Native app for Android og iOS','Ferie- og fraværshåndtering','Lønnskjøring og lønnsslipper','NFC-kort og fysiske lesere','Selvbetjent oppstart med gratis prøveperiode','Bygget for feltteam','Automatisk GPS-personvernerklæring med digital signatur*'],
  ru: ['GPS с проверкой на подмену','Криптографически опечатанный отчёт','Независимая проверка заказчиком','Фото работ в цепочке хешей','Отметка со смартфона','Геозона на объекте','Нативное приложение Android и iOS','Управление отпусками и отсутствиями','Расчёт зарплаты и расчётные листки','NFC-карты и стационарные считыватели','Самостоятельный старт с бесплатным периодом','Сделано для выездных бригад','Автоматическое уведомление о GPS с цифровой подписью*'],
};

const ROWS_GEO =  [true,true,true,true,true,true,true,true,false,false,true,true,true];
const ROWS_COMP = [false,false,false,false,true,true,true,true,true,true,false,false,false];

type Copy = {
  badge: string; h1sub: string; desc: string; summary: string; summaryText: string;
  noteTitle: string; noteText: string; features: string; feat: string; diff: string;
  cta: string; ctaDesc: string; ctaBtn: string; geo: string[]; comp: string[]; footnote: string;
};

const T: Record<string, Copy> = {
  it: {
    badge: 'Confronto App', h1sub: 'il gestionale o la prova?',
    desc: 'Zucchetti è usato da moltissime aziende italiane per gestire il personale, con badge, geofence e cedolini dentro un ecosistema solo. GeoTapp parte da un\'altra domanda: come dimostrare l\'intervento sul campo. Posizione controllata alla timbratura, foto di prova e un report sigillato che il committente controlla da solo.',
    summary: 'In sintesi:',
    summaryText: 'Zucchetti è la scelta naturale quando il problema nasce in amministrazione, tra presenze da chiudere, paghe da elaborare e un ufficio del personale da far girare. GeoTapp serve quando il problema nasce fuori, alla porta del cliente che trattiene una fattura perché sostiene che martedì non è passato nessuno.',
    noteTitle: 'Il geofence dice dove cade il punto, non se il punto è vero',
    noteText: 'Un perimetro validato risponde a una domanda sola, la coordinata sta dentro l\'area. Alla seconda non risponde, e cioè se quella coordinata sia autentica, visto che una posizione si falsifica con un\'app gratuita e senza sapere niente di informatica. GeoTapp controlla la posizione prima di accettarla e rifiuta quelle simulate, troppo imprecise o con spostamenti impossibili; poi chiude ogni foto nel report con la sua impronta, così una modifica successiva viene fuori alla verifica.',
    features: 'Confronto funzionalità chiave', feat: 'Funzionalità', diff: 'Approcci diversi',
    cta: 'Vuoi vedere GeoTapp in azione?',
    ctaDesc: 'Provalo su un intervento vero: in 14 giorni gratis vedi come diventa una prova che il tuo committente verifica da solo.',
    ctaBtn: 'Inizia la prova gratuita',
    geo: ['Report sigillato da mostrare al committente','Posizione controllata prima di essere registrata','Foto dell\'intervento in catena hash, se le tocchi si vede','Il committente controlla da solo, senza account e offline','Attivo in un pomeriggio, senza preventivo e senza rivenditore'],
    comp: ['Ecosistema HR completo, dalle presenze al cedolino','Timbratura con geofence, badge NFC e lettori fisici','Rete di rivenditori e consulenti su tutto il territorio','Riepiloghi pensati per l\'amministrazione, non per il cliente finale','Attivazione a preventivo, tempi e costi da concordare'],
    footnote: '* Per legge (art. 13 GDPR e, in Italia, art. 4 dello Statuto dei Lavoratori) ogni dipendente va informato prima di essere geolocalizzato. Se il software lascia questo passaggio al titolare, il rischio resta a lui. GeoTapp prepara l\'informativa personalizzata, la fa firmare per presa visione nell\'app e non lascia timbrare finché non è firmata.',
  },
  en: {
    badge: 'App Comparison', h1sub: 'HR suite or proof of work?',
    desc: 'Zucchetti is used by a great many Italian companies to manage their staff, with badges, geofencing and payslips inside one ecosystem. GeoTapp starts from a different question: how to prove the job done in the field. Position checked at clock-in, proof photos and a sealed report that the client checks alone.',
    summary: 'In short:',
    summaryText: 'Zucchetti is the natural choice when the problem starts in the back office, with attendance to close, payroll to run and an HR department to keep moving. GeoTapp is for when the problem starts outside, at the door of a client holding an invoice because, so they say, nobody showed up on Tuesday.',
    noteTitle: 'A geofence tells you where the dot fell, not whether the dot is real',
    noteText: 'A validated perimeter answers one question: whether the coordinate sits inside the area. It does not answer the second one, whether that coordinate is genuine, since a position can be faked with a free app by someone who knows nothing about IT. GeoTapp checks the position before accepting it and rejects positions that are simulated, too imprecise or involve impossible jumps; then it closes every photo in the report with its fingerprint, so a later edit shows up at verification.',
    features: 'Key feature comparison', feat: 'Feature', diff: 'Different approaches',
    cta: 'Want to see GeoTapp in action?',
    ctaDesc: 'Try it on a real job: in 14 free days you see how it becomes proof your client verifies alone.',
    ctaBtn: 'Start the free trial',
    geo: ['Sealed report to show the client','Position checked before it is recorded','Job photos in a hash chain: if you touch them, it shows','The client checks alone, without an account and offline','Up and running in an afternoon, no quote and no reseller'],
    comp: ['Full HR ecosystem, from attendance to payslip','Geofenced clock-in, NFC badges and physical readers','Nationwide network of resellers and consultants','Reports built for the back office, not for the end client','Activation by quote, timing and cost to be agreed'],
    footnote: '* By law (Art. 13 GDPR and, in Italy, Art. 4 of the Workers\' Statute), every employee must be informed before being geolocated. If the software leaves this step to the employer, the risk stays with them. GeoTapp prepares the personalised notice, has it signed for acknowledgement in the app and does not let staff clock in until it is signed.',
  },
  de: {
    badge: 'App-Vergleich', h1sub: 'die Verwaltungssoftware oder der Nachweis?',
    desc: 'Zucchetti wird von sehr vielen italienischen Unternehmen zur Personalverwaltung genutzt, mit Badge, Geofence und Lohnabrechnung in einem einzigen Ökosystem. GeoTapp geht von einer anderen Frage aus: wie man den Einsatz im Außendienst belegt. Beim Stempeln geprüfte Position, Nachweisfotos und ein versiegelter Bericht, den der Auftraggeber selbst überprüft.',
    summary: 'Kurz gesagt:',
    summaryText: 'Zucchetti ist die natürliche Wahl, wenn das Problem in der Verwaltung entsteht, bei offenen Anwesenheiten, zu erstellenden Lohnabrechnungen und einer Personalabteilung, die laufen muss. GeoTapp hilft, wenn das Problem draußen entsteht, an der Tür des Kunden, der eine Rechnung zurückhält, weil angeblich am Dienstag niemand da war.',
    noteTitle: 'Der Geofence sagt, wo der Punkt liegt, nicht, ob der Punkt echt ist',
    noteText: 'Ein validierter Bereich beantwortet nur eine Frage: Die Koordinate liegt im Bereich. Die zweite beantwortet er nicht, nämlich ob die Koordinate echt ist, denn eine Position lässt sich mit einer kostenlosen App fälschen, ohne etwas von Informatik zu verstehen. GeoTapp prüft die Position, bevor es sie annimmt, und weist simulierte, zu ungenaue oder mit unmöglichen Ortssprüngen ab; danach schließt es jedes Foto mit seinem Fingerabdruck in den Bericht ein, sodass eine spätere Änderung bei der Überprüfung auffällt.',
    features: 'Vergleich der wichtigsten Funktionen', feat: 'Funktion', diff: 'Verschiedene Ansätze',
    cta: 'Möchten Sie GeoTapp in Aktion sehen?',
    ctaDesc: 'Testen Sie es an einem echten Einsatz: In 14 kostenlosen Tagen sehen Sie, wie daraus ein Nachweis wird, den Ihr Auftraggeber selbst überprüft. Keine Kreditkarte.',
    ctaBtn: 'Kostenlos testen',
    geo: ['Versiegelter Bericht zum Vorlegen beim Auftraggeber','Position wird geprüft, bevor sie erfasst wird','Einsatzfotos in einer Hash-Kette: Wer sie anfasst, hinterlässt Spuren','Der Auftraggeber prüft selbst, ohne Konto und offline','An einem Nachmittag einsatzbereit, ohne Angebot und ohne Reseller'],
    comp: ['Komplettes HR-Ökosystem, von der Anwesenheit bis zur Lohnabrechnung','Stempeln mit Geofence, NFC-Badge und physischen Lesegeräten','Netz aus Resellern und Beratern im ganzen Land','Übersichten für die Verwaltung, nicht für den Endkunden','Aktivierung auf Angebot, Zeiten und Kosten nach Absprache'],
    footnote: '* Nach geltendem Recht (Art. 13 DSGVO und in Italien Art. 4 des Arbeitnehmerstatuts) muss jeder Mitarbeiter informiert werden, bevor er geortet wird. Überlässt die Software diesen Schritt dem Arbeitgeber, bleibt das Risiko bei ihm. GeoTapp erstellt die personalisierte Information, lässt sie in der App zur Kenntnisnahme unterschreiben und lässt erst danach das Stempeln zu.',
  },
  fr: {
    badge: 'Comparatif d\'applis',
    h1sub: 'le logiciel de gestion ou la preuve ?',
    desc: 'Zucchetti est utilisé par de très nombreuses entreprises italiennes pour gérer le personnel, avec badges, géorepérage et fiches de paie au sein d\'un seul écosystème. GeoTapp part d\'une autre question : comment démontrer l\'intervention sur le terrain. Position contrôlée au pointage, photos de preuve et un rapport scellé que le client contrôle lui-même.',
    summary: 'En résumé :',
    summaryText: 'Zucchetti est le choix naturel quand le problème naît à l\'administration, entre des présences à clôturer, une paie à traiter et un service du personnel à faire tourner. GeoTapp sert quand le problème naît à l\'extérieur, à la porte du client qui retient une facture parce qu\'il affirme que personne n\'est passé mardi.',
    noteTitle: 'Le géorepérage dit où tombe le point, pas si le point est vrai',
    noteText: 'Un périmètre validé répond à une seule question : la coordonnée se trouve-t-elle dans la zone ? Il ne répond pas à la seconde, à savoir si cette coordonnée est authentique, puisqu\'une position se falsifie avec une appli gratuite et sans aucune connaissance en informatique. GeoTapp contrôle la position avant de l\'accepter et refuse celles qui sont simulées, trop imprécises ou marquées par des déplacements impossibles ; puis il clôt chaque photo dans le rapport avec son empreinte, si bien qu\'une modification ultérieure ressort à la vérification.',
    features: 'Comparaison des fonctionnalités clés',
    feat: 'Fonctionnalité',
    diff: 'Des approches différentes',
    cta: 'Envie de voir GeoTapp en action ?',
    ctaDesc: 'Essayez-le sur une intervention réelle : en 14 jours gratuits, vous voyez comment elle devient une preuve que votre client vérifie lui-même.',
    ctaBtn: 'Commencer l\'essai gratuit',
    geo: ['Rapport scellé à montrer au client','Position contrôlée avant d\'être enregistrée','Photos de l\'intervention en chaîne de hachage : si on y touche, cela se voit','Le client contrôle lui-même, sans compte et hors ligne','Actif en un après-midi, sans devis et sans revendeur'],
    comp: ['Écosystème RH complet, des présences à la fiche de paie','Pointage avec géorepérage, badges NFC et lecteurs physiques','Réseau de revendeurs et de consultants sur tout le territoire','Récapitulatifs pensés pour l\'administration, pas pour le client final','Activation sur devis, délais et coûts à convenir'],
    footnote: '* Selon la loi (art. 13 du RGPD et, en Italie, art. 4 du Statut des travailleurs), chaque salarié doit être informé avant d\'être géolocalisé. Si le logiciel laisse cette étape à l\'employeur, le risque lui reste. GeoTapp prépare l\'information personnalisée, la fait signer pour prise de connaissance dans l\'app et ne laisse pas pointer tant qu\'elle n\'est pas signée.',
  },
  es: {
    badge: 'Comparativa de apps', h1sub: '¿el software de gestión o la prueba?',
    desc: 'Zucchetti lo usan muchísimas empresas italianas para gestionar el personal, con tarjetas, geofence y nóminas dentro de un único ecosistema. GeoTapp parte de otra pregunta: cómo demostrar la intervención en campo. Posición controlada al fichar, fotos de prueba y un informe sellado que el cliente comprueba por sí mismo.',
    summary: 'En resumen:',
    summaryText: 'Zucchetti es la elección natural cuando el problema nace en la administración, con asistencias que cerrar, nóminas que elaborar y un departamento de personal que hacer funcionar. GeoTapp sirve cuando el problema nace fuera, en la puerta del cliente que retiene una factura porque sostiene que el martes no pasó nadie.',
    noteTitle: 'El geofence dice dónde cae el punto, no si el punto es verdadero',
    noteText: 'Un perímetro validado responde a una sola pregunta: si la coordenada está dentro del área. No responde a la segunda, si esa coordenada es auténtica, porque una posición se falsifica con una app gratuita y sin saber nada de informática. GeoTapp controla la posición antes de aceptarla y rechaza las simuladas, las demasiado imprecisas o con desplazamientos imposibles; luego cierra cada foto en el informe con su huella, de modo que una modificación posterior sale a la luz en la verificación.',
    features: 'Comparación de funciones clave', feat: 'Función', diff: 'Enfoques distintos',
    cta: '¿Quieres ver GeoTapp en acción?',
    ctaDesc: 'Pruébalo en una intervención real: en 14 días gratis ves cómo se convierte en una prueba que tu cliente verifica por sí mismo.',
    ctaBtn: 'Empieza la prueba gratuita',
    geo: ['Informe sellado para enseñar al cliente','Posición controlada antes de registrarse','Fotos de la intervención en cadena de hashes: si las tocas, se nota','El cliente comprueba por sí mismo, sin cuenta y sin conexión','Activo en una tarde, sin presupuesto y sin distribuidor'],
    comp: ['Ecosistema de RR. HH. completo, de la asistencia a la nómina','Fichaje con geofence, tarjetas NFC y lectores físicos','Red de distribuidores y consultores en todo el territorio','Resúmenes pensados para la administración, no para el cliente final','Activación con presupuesto, plazos y costes por acordar'],
    footnote: '* Por ley (art. 13 del RGPD y, en Italia, art. 4 del Estatuto de los Trabajadores italiano) hay que informar a cada empleado antes de geolocalizarlo. Si el software deja este paso en manos del titular, el riesgo sigue siendo suyo. GeoTapp prepara el aviso personalizado, lo hace firmar en la app como recibido y no deja fichar hasta que está firmado.',
  },
  pt: {
    badge: 'Comparativo de apps', h1sub: 'a suite de gestão ou a prova?',
    desc: 'A Zucchetti é usada por muitíssimas empresas italianas para gerir o pessoal, com cartões, geofence e recibos de vencimento num único ecossistema. A GeoTapp parte de outra pergunta: como demonstrar a intervenção no terreno. Posição controlada ao picar o ponto, fotos de prova e um relatório selado que o cliente confere sozinho.',
    summary: 'Em resumo:',
    summaryText: 'A Zucchetti é a escolha natural quando o problema nasce na administração, com presenças por fechar, salários por processar e um departamento de pessoal a pôr a funcionar. A GeoTapp serve quando o problema nasce cá fora, à porta do cliente que retém uma fatura porque, diz ele, na terça-feira não apareceu ninguém.',
    noteTitle: 'O geofence diz onde cai o ponto, não se o ponto é verdadeiro',
    noteText: 'Um perímetro validado responde a uma única pergunta: a coordenada está dentro da área. À segunda não responde, a de saber se essa coordenada é autêntica, porque uma posição falsifica-se com uma app gratuita e sem perceber nada de informática. A GeoTapp verifica a posição antes de a aceitar e rejeita as simuladas, as demasiado imprecisas ou com deslocações impossíveis; depois fecha cada foto no relatório com a sua impressão digital, de modo que qualquer alteração posterior salta à vista na verificação.',
    features: 'Comparação das funcionalidades-chave', feat: 'Funcionalidade', diff: 'Abordagens diferentes',
    cta: 'Quer ver a GeoTapp em ação?',
    ctaDesc: 'Experimente numa intervenção real: 14 dias grátis para ver como uma intervenção se torna uma prova que o cliente verifica sozinho.',
    ctaBtn: 'Começar teste gratuito',
    geo: ['Relatório selado para mostrar ao cliente','Posição controlada antes de ser registada','Fotos da intervenção em cadeia de hash: se lhes mexerem, vê-se','O cliente confere sozinho, sem conta e offline','Ativo numa tarde, sem orçamento e sem revendedor'],
    comp: ['Ecossistema de RH completo, das presenças ao recibo de vencimento','Picagem com geofence, cartões NFC e leitores físicos','Rede de revendedores e consultores em todo o território','Mapas pensados para a administração, não para o cliente final','Ativação por orçamento, prazos e custos a combinar'],
    footnote: '* Por lei (art. 13.º do RGPD e, em Itália, art. 4.º do Estatuto dos Trabalhadores italiano), cada trabalhador tem de ser informado antes de ser geolocalizado. Se o software deixa este passo à entidade empregadora, o risco fica com ela. A GeoTapp prepara a informação personalizada, faz com que seja assinada na app como tomada de conhecimento e não deixa picar o ponto enquanto não estiver assinada.',
  },
  nl: {
    badge: 'App-vergelijking',
    h1sub: 'het beheersysteem of het bewijs?',
    desc: 'Zucchetti wordt door heel veel Italiaanse bedrijven gebruikt om het personeel te beheren, met badges, geofence en loonstroken in één ecosysteem. GeoTapp gaat uit van een andere vraag: hoe toon je de klus in het veld aan. Locatie gecontroleerd bij de registratie, bewijsfoto\'s en een verzegeld rapport dat de opdrachtgever zelf controleert.',
    summary: 'Kort gezegd:',
    summaryText: 'Zucchetti is de natuurlijke keuze wanneer het probleem op de administratie ontstaat, tussen aanwezigheid die moet worden afgesloten, salarissen die moeten worden verwerkt en een personeelsafdeling die moet draaien. GeoTapp is nodig wanneer het probleem buiten ontstaat, aan de deur van de klant die een factuur achterhoudt omdat er volgens hem dinsdag niemand is geweest.',
    noteTitle: 'De geofence zegt waar het punt valt, niet of het punt echt is',
    noteText: 'Een gevalideerde omtrek beantwoordt maar één vraag: valt de coördinaat binnen het gebied. De tweede vraag beantwoordt hij niet, namelijk of die coördinaat echt is, want een locatie is te vervalsen met een gratis app en zonder iets van informatica te weten. GeoTapp controleert de locatie voordat het haar accepteert en weigert gesimuleerde, te onnauwkeurige locaties of met onmogelijke verplaatsingen; daarna sluit het elke foto in het rapport af met haar vingerafdruk, zodat een latere wijziging bij de controle naar voren komt.',
    features: 'Vergelijking van de belangrijkste functies',
    feat: 'Functie',
    diff: 'Verschillende benaderingen',
    cta: 'Wilt u GeoTapp in actie zien?',
    ctaDesc: 'Probeer het op een echte klus: in 14 dagen gratis ziet u hoe het een bewijs wordt dat uw opdrachtgever zelf controleert.',
    ctaBtn: 'Start de gratis proefperiode',
    geo: ['Verzegeld rapport om aan de opdrachtgever te tonen','Locatie gecontroleerd voordat ze wordt vastgelegd','Foto\'s van de klus in een hash-keten, wie eraan komt, valt op','De opdrachtgever controleert zelf, zonder account en offline','Actief in een middag, zonder offerte en zonder reseller'],
    comp: ['Compleet hr-ecosysteem, van aanwezigheid tot loonstrook','Registratie met geofence, NFC-badges en fysieke lezers','Netwerk van resellers en adviseurs in het hele land','Overzichten bedoeld voor de administratie, niet voor de eindklant','Activering op offerte, tijd en kosten in overleg'],
    footnote: '* Volgens de wet (art. 13 AVG en, in Italië, art. 4 van het arbeidsstatuut) moet elke werknemer worden geïnformeerd voordat hij wordt gelokaliseerd. Laat de software deze stap aan de verantwoordelijke over, dan blijft het risico bij hem. GeoTapp maakt de persoonlijke privacyverklaring klaar, laat die in de app voor kennisgeving ondertekenen en laat niet registreren totdat ze is ondertekend.',
  },
  da: {
    badge: 'App-sammenligning', h1sub: 'HR-suite eller bevis for arbejdet?',
    desc: 'Zucchetti håndterer personale, kort, geofence og lønsedler i ét enkelt økosystem. GeoTapp gør én ting, det dokumenterer opgaven i marken med verificeret GPS, forseglede fotos og en rapport, kunden selv kontrollerer.',
    summary: 'Kort sagt:',
    summaryText: 'Zucchetti er det naturlige valg, når problemet opstår på kontoret, med timer der skal lukkes, løn der skal køres og en personaleafdeling der skal fungere. GeoTapp er til, når problemet opstår udenfor, ved døren hos en kunde, der holder en faktura tilbage, fordi der efter hans udsagn ikke kom nogen om tirsdagen.',
    noteTitle: 'En geofence siger hvor prikken faldt, ikke om prikken er ægte',
    noteText: 'En valideret perimeter svarer på ét enkelt spørgsmål, om koordinatet ligger inden for området. Det andet står åbent, om koordinatet er ægte, for en position forfalskes med en gratis app helt uden teknisk viden. GeoTapp kontrollerer signalet, før det accepteres, fanger simulerede positioner og manipulerede enheder og forsegler hvert foto i en hash-kæde, så en senere ændring straks kan ses.',
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion', diff: 'Forskellige tilgange',
    cta: 'Vil du se GeoTapp i arbejde?',
    ctaDesc: 'Ti minutter, og du ser, hvordan en opgave bliver til bevis, som din kunde selv kan kontrollere.',
    ctaBtn: 'Start gratis nu!',
    geo: ['Forseglet rapport, bevis der holder over for kunden','GPS verificeret, før data overhovedet gemmes','Opgavefotos i hash-kæde, ændringer kan ses','Kunden kontrollerer selv, uden konto og offline','Kørende på en eftermiddag, uden tilbud og uden forhandler'],
    comp: ['Komplet HR-økosystem, fra timer til lønseddel','Stempling med geofence, NFC-kort og fysiske læsere','Landsdækkende net af forhandlere og konsulenter','Udtræk lavet til administrationen, ikke til slutkunden','Opstart efter tilbud, tid og pris aftales'],
    footnote: '* Loven (GDPR art. 13) kræver, at hver medarbejder underskriver en privatlivsoplysning, før der lokaliseres. De fleste GPS-programmer overlader det skridt til dig, og den juridiske risiko bliver hos arbejdsgiveren. GeoTapp laver den personlige oplysning, får den underskrevet digitalt og holder GPS lukket, så længe underskriften mangler.',
  },
  sv: {
    badge: 'App-jämförelse', h1sub: 'HR-svit eller bevis på arbetet?',
    desc: 'Zucchetti hanterar personal, kort, geofence och lönebesked i ett enda ekosystem. GeoTapp gör en sak, det styrker uppdraget i fält med verifierad GPS, förseglade foton och en rapport som kunden själv kontrollerar.',
    summary: 'Kort sagt:',
    summaryText: 'Zucchetti är det naturliga valet när problemet uppstår på kontoret, med tider att stänga, löner att köra och en personalavdelning som ska rulla. GeoTapp behövs när problemet uppstår utanför, vid dörren hos en kund som håller inne en faktura för att det, enligt honom, inte kom någon på tisdagen.',
    noteTitle: 'En geofence säger var pricken hamnade, inte om pricken är äkta',
    noteText: 'En validerad perimeter svarar på en enda fråga, om koordinaten ligger innanför området. Den andra lämnas obesvarad, om koordinaten är äkta, för en position förfalskas med en gratis app utan någon teknisk kunskap alls. GeoTapp kontrollerar signalen innan den accepteras, fångar simulerade positioner och manipulerade enheter och förseglar varje foto i en hashkedja, så att en senare ändring syns direkt.',
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion', diff: 'Olika angreppssätt',
    cta: 'Vill du se GeoTapp i arbete?',
    ctaDesc: 'Tio minuter, och du ser hur ett uppdrag blir ett bevis som din kund verifierar själv.',
    ctaBtn: 'Börja gratis nu!',
    geo: ['Förseglad rapport, bevis som håller inför kunden','GPS verifierad innan uppgiften ens sparas','Uppdragsfoton i hashkedja, ändringar syns','Kunden kontrollerar själv, utan konto och offline','Igång på en eftermiddag, utan offert och utan återförsäljare'],
    comp: ['Komplett HR-ekosystem, från tider till lönebesked','Instämpling med geofence, NFC-kort och fysiska läsare','Rikstäckande nät av återförsäljare och konsulter','Utdrag gjorda för administrationen, inte för slutkunden','Start via offert, tid och pris enligt överenskommelse'],
    footnote: '* Lagen (GDPR art. 13) kräver att varje anställd skriver under en integritetsinformation innan positionering sker. De flesta GPS-program lämnar det steget till dig, och den rättsliga risken stannar hos arbetsgivaren. GeoTapp skapar den personliga informationen, låter den signeras digitalt och håller GPS stängd så länge underskriften saknas.',
  },
  nb: {
    badge: 'App-sammenligning', h1sub: 'HR-suite eller bevis for arbeidet?',
    desc: 'Zucchetti håndterer personal, kort, geofence og lønnsslipper i ett enkelt økosystem. GeoTapp gjør én ting, det dokumenterer oppdraget i felten med verifisert GPS, forseglede bilder og en rapport oppdragsgiveren selv kontrollerer.',
    summary: 'Kort sagt:',
    summaryText: 'Zucchetti er det naturlige valget når problemet oppstår på kontoret, med timer som skal lukkes, lønn som skal kjøres og en personalavdeling som må gå. GeoTapp trengs når problemet oppstår utenfor, i døra hos en oppdragsgiver som holder tilbake en faktura fordi det, slik han sier det, ikke kom noen på tirsdag.',
    noteTitle: 'En geofence sier hvor prikken havnet, ikke om prikken er ekte',
    noteText: 'En validert perimeter svarer på ett spørsmål, om koordinatet ligger innenfor området. Det andre står åpent, om koordinatet er ekte, for en posisjon forfalskes med en gratis app helt uten teknisk kunnskap. GeoTapp kontrollerer signalet før det godtas, fanger opp simulerte posisjoner og manipulerte enheter, og forsegler hvert bilde i en hash-kjede, slik at en senere endring synes med en gang.',
    features: 'Sammenligning av nøkkelfunksjoner', feat: 'Funksjon', diff: 'Ulike tilnærminger',
    cta: 'Vil du se GeoTapp i arbeid?',
    ctaDesc: 'Ti minutter, og du ser hvordan et oppdrag blir et bevis oppdragsgiveren din verifiserer selv.',
    ctaBtn: 'Start gratis nå!',
    geo: ['Forseglet rapport, bevis som holder foran oppdragsgiver','GPS verifisert før dataene i det hele tatt lagres','Oppdragsbilder i hash-kjede, endringer synes','Oppdragsgiveren kontrollerer selv, uten konto og offline','I drift på en ettermiddag, uten tilbud og uten forhandler'],
    comp: ['Komplett HR-økosystem, fra timer til lønnsslipp','Stempling med geofence, NFC-kort og fysiske lesere','Landsdekkende nett av forhandlere og konsulenter','Uttrekk laget for administrasjonen, ikke for sluttkunden','Oppstart etter tilbud, tid og pris avtales'],
    footnote: '* Loven (GDPR art. 13) krever at hver ansatt signerer en personvernerklæring før posisjonering. De fleste GPS-programmer overlater det steget til deg, og den juridiske risikoen blir hos arbeidsgiveren. GeoTapp lager den personlige erklæringen, får den signert digitalt og holder GPS stengt så lenge signaturen mangler.',
  },
  ru: {
    badge: 'Сравнение приложений', h1sub: 'HR-система или доказательство?',
    desc: 'Zucchetti ведёт персонал, пропуска, геозоны и расчётные листки внутри одной экосистемы. GeoTapp делает одно, подтверждает выезд на объект проверенным GPS, опечатанными фотографиями и отчётом, который заказчик проверяет сам.',
    summary: 'Коротко:',
    summaryText: 'Zucchetti, естественный выбор, когда проблема рождается в бухгалтерии, с табелями к закрытию, зарплатой к расчёту и кадровым отделом, который должен работать. GeoTapp нужен, когда проблема рождается снаружи, у двери заказчика, который придерживает счёт, потому что во вторник, по его словам, никто не приезжал.',
    noteTitle: 'Геозона говорит, куда попала точка, а не подлинна ли точка',
    noteText: 'Проверенный периметр отвечает на один вопрос, лежит ли координата внутри зоны. Второй остаётся открытым, подлинна ли эта координата, ведь позицию подделывают бесплатным приложением, без всяких технических знаний. GeoTapp проверяет сигнал до того, как принять его, распознаёт симулированные позиции и модифицированные устройства и опечатывает каждое фото в цепочку хешей, так что поздняя правка видна сразу.',
    features: 'Сравнение ключевых функций', feat: 'Функция', diff: 'Разные подходы',
    cta: 'Хотите увидеть GeoTapp в работе?',
    ctaDesc: 'Десять минут, и вы увидите, как выезд превращается в доказательство, которое заказчик проверяет сам.',
    ctaBtn: 'Начните бесплатно!',
    geo: ['Опечатанный отчёт, доказательство, которое держится перед заказчиком','GPS проверяется до того, как запись сохранится','Фото работ в цепочке хешей, правка сразу видна','Заказчик проверяет сам, без учётной записи и без интернета','Запуск за один вечер, без сметы и без дилера'],
    comp: ['Полная HR-экосистема, от табеля до расчётного листка','Отметка с геозоной, NFC-картами и стационарными считывателями','Сеть дилеров и консультантов по всей стране','Выгрузки для бухгалтерии, а не для конечного заказчика','Подключение по смете, сроки и стоимость по договорённости'],
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

export default async function GeoTappVsZucchettiPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = localizeEnglishDeep(T[locale] ?? T.en, locale);
  const faqItems = localizeEnglishDeep(FAQ[locale] ?? FAQ.en, locale);
  const labels = localizeEnglishDeep(ROWS_LABELS[locale] ?? ROWS_LABELS.en, locale);
  const rows = labels.map((feature, i) => ({ feature, geotapp: ROWS_GEO[i], competitor: ROWS_COMP[i] }));

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  const breadcrumb = buildComparisonBreadcrumb({ locale, pathname: PATHNAME, competitorName: 'Zucchetti' });
  const meta = localizeEnglishDeep(META[locale] ?? META.en, locale);
  const article = buildComparisonArticle({ locale, pathname: PATHNAME, headline: meta.title, description: meta.description, datePublished: ARTICLE_DATE_PUBLISHED, dateModified: ARTICLE_DATE_MODIFIED });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ComparisonPageL
        locale={locale}
        competitorName="Zucchetti"
        competitorId="zucchetti"
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
