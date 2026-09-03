import type { Metadata } from 'next';
import ComparisonPageL from '@/components/ComparisonPageL';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-zucchetti/';
const ARTICLE_DATE_PUBLISHED = '2026-09-03';
const ARTICLE_DATE_MODIFIED = '2026-09-03';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs Zucchetti - Confronto 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti: suite HR o prova del lavoro svolto? Confronto su GPS verificato, report sigillati crittograficamente, verifica autonoma del committente e conformità GDPR.' },
  en: { title: 'GeoTapp vs Zucchetti - Comparison 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti: HR suite or proof of work? Compare verified GPS, cryptographically sealed reports, independent client verification and GDPR compliance.' },
  de: { title: 'GeoTapp vs Zucchetti - Vergleich 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti: HR-Suite oder Arbeitsnachweis? Vergleich von geprüftem GPS, kryptographisch versiegelten Berichten und unabhängiger Prüfung durch den Auftraggeber.' },
  nl: { title: 'GeoTapp vs Zucchetti - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti: HR-suite of bewijs van het werk? Vergelijk geverifieerde GPS, cryptografisch verzegelde rapporten en onafhankelijke controle door de opdrachtgever.' },
  fr: { title: 'GeoTapp vs Zucchetti - Comparaison 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti : suite RH ou preuve du travail ? Comparez GPS vérifié, rapports scellés cryptographiquement et vérification autonome par le donneur d\'ordre.' },
  es: { title: 'GeoTapp vs Zucchetti - Comparación 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti: ¿suite de RRHH o prueba del trabajo? Compara GPS verificado, informes sellados criptográficamente y verificación autónoma del cliente.' },
  pt: { title: 'GeoTapp vs Zucchetti - Comparação 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti: suite de RH ou prova do trabalho? Compare GPS verificado, relatórios selados criptograficamente e verificação autónoma pelo cliente.' },
  da: { title: 'GeoTapp vs Zucchetti - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti: HR-suite eller bevis for arbejdet? Sammenlign verificeret GPS, kryptografisk forseglede rapporter og kundens egen kontrol.' },
  sv: { title: 'GeoTapp vs Zucchetti - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti: HR-svit eller bevis på arbetet? Jämför verifierad GPS, kryptografiskt förseglade rapporter och kundens egen kontroll.' },
  nb: { title: 'GeoTapp vs Zucchetti - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti: HR-suite eller bevis for arbeidet? Sammenlign verifisert GPS, kryptografisk forseglede rapporter og oppdragsgivers egen kontroll.' },
  ru: { title: 'GeoTapp vs Zucchetti, Сравнение 2026 | GeoTapp', description: 'GeoTapp vs Zucchetti: HR-система или доказательство выполненной работы? Сравните проверенный GPS, криптографически опечатанные отчёты и независимую проверку заказчиком.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza principale tra GeoTapp e Zucchetti?', a: 'Zucchetti è una suite per la gestione del personale, dalle presenze alle paghe, e la timbratura è uno dei tanti moduli. GeoTapp è uno strumento di certificazione del lavoro sul campo, che trasforma ogni intervento in un documento sigillato e verificabile dal committente. Il primo serve a chiudere il mese in ufficio, il secondo a difendere una fattura.' },
    { q: 'Zucchetti ha il controllo anti-spoofing sul GPS?', a: 'La timbratura mobile di Zucchetti è geolocalizzata e validata da un geofence, quindi il sistema controlla che la posizione ricada nel perimetro autorizzato. Una verifica di autenticità del segnale, capace di riconoscere le posizioni simulate e i dispositivi manomessi, non risulta tra le funzioni dichiarate. GeoTapp la esegue a ogni timbratura, prima di registrare il dato.' },
    { q: 'Il committente può verificare da solo i report?', a: 'I tabulati di una suite HR nascono per l\'amministrazione e per il consulente del lavoro. GeoTapp produce un pacchetto sigillato che il cliente finale apre e controlla per conto suo, senza account, senza connessione e senza passare dai nostri sistemi, perché la catena di hash sta dentro il file.' },
    { q: 'GeoTapp o Zucchetti per un\'impresa di pulizie?', a: 'Se il nodo è la busta paga e un ufficio del personale strutturato, Zucchetti ha una profondità che noi non abbiamo, e raccontarti il contrario sarebbe disonesto. Se il nodo è il committente che contesta il servizio, un tabulato di presenze non ti difende, e lì serve una prova costruita per uscire dall\'azienda. I due strumenti convivono senza pestarsi i piedi.' },
  ],
  en: [
    { q: 'What is the main difference between GeoTapp and Zucchetti?', a: 'Zucchetti is a workforce management suite, from attendance to payroll, where clock-in is one module among many. GeoTapp certifies field work, turning every job into a sealed document the client can verify. One closes the month in the back office, the other defends an invoice.' },
    { q: 'Does Zucchetti check GPS for spoofing?', a: 'Zucchetti mobile clock-in is geolocated and validated by a geofence, so the system checks that the position falls inside the authorised perimeter. A check on the authenticity of the signal, one that catches simulated locations and tampered devices, is not listed among the declared features. GeoTapp runs it at every clock-in, before the record is stored.' },
    { q: 'Can the client verify the reports independently?', a: 'Attendance sheets from an HR suite are built for the back office and the payroll consultant. GeoTapp produces a sealed package the end client opens and checks alone, with no account, no connection and no need to come through our systems, because the hash chain travels inside the file.' },
    { q: 'GeoTapp or Zucchetti for a cleaning company?', a: 'If the knot is payroll and a structured HR department, Zucchetti has a depth we do not have, and pretending otherwise would be dishonest. If the knot is the client disputing the service, an attendance sheet will not defend you, and there you need evidence built to leave the company. The two tools sit side by side without stepping on each other.' },
  ],
  de: [
    { q: 'Was ist der Hauptunterschied zwischen GeoTapp und Zucchetti?', a: 'Zucchetti ist eine Suite für die Personalverwaltung, von der Zeiterfassung bis zur Lohnabrechnung, und die Stempelung ist eines von vielen Modulen. GeoTapp zertifiziert die Arbeit vor Ort und macht aus jedem Einsatz ein versiegeltes Dokument, das der Auftraggeber selbst prüfen kann. Das eine schließt den Monat in der Verwaltung ab, das andere verteidigt eine Rechnung.' },
    { q: 'Prüft Zucchetti das GPS auf Manipulation?', a: 'Die mobile Stempelung von Zucchetti ist geolokalisiert und wird über einen Geofence validiert, das System prüft also, ob die Position im zulässigen Bereich liegt. Eine Prüfung der Echtheit des Signals, die simulierte Standorte und manipulierte Geräte erkennt, gehört nicht zu den angegebenen Funktionen. GeoTapp führt sie bei jeder Stempelung durch, bevor der Datensatz gespeichert wird.' },
    { q: 'Kann der Auftraggeber die Berichte selbst prüfen?', a: 'Die Auswertungen einer HR-Suite entstehen für die Verwaltung und für den Steuerberater. GeoTapp erzeugt ein versiegeltes Paket, das der Endkunde allein öffnet und kontrolliert, ohne Konto, ohne Verbindung und ohne unsere Systeme, denn die Hash-Kette steckt in der Datei selbst.' },
    { q: 'GeoTapp oder Zucchetti für ein Reinigungsunternehmen?', a: 'Wenn der Knoten die Lohnabrechnung und eine strukturierte Personalabteilung ist, hat Zucchetti eine Tiefe, die wir nicht haben, und etwas anderes zu behaupten wäre unredlich. Wenn der Knoten der Auftraggeber ist, der die Leistung bestreitet, verteidigt Sie keine Anwesenheitsliste, und dann brauchen Sie einen Nachweis, der das Unternehmen verlassen kann. Beide Werkzeuge stehen nebeneinander, ohne sich zu behindern.' },
  ],
  fr: [
    { q: 'Quelle est la principale différence entre GeoTapp et Zucchetti ?', a: 'Zucchetti est une suite de gestion du personnel, du pointage à la paie, où le pointage n\'est qu\'un module parmi d\'autres. GeoTapp certifie le travail sur le terrain et transforme chaque intervention en un document scellé que le donneur d\'ordre vérifie lui-même. Le premier ferme le mois au bureau, le second défend une facture.' },
    { q: 'Zucchetti vérifie-t-il la falsification du GPS ?', a: 'Le pointage mobile de Zucchetti est géolocalisé et validé par un geofence, le système contrôle donc que la position tombe dans le périmètre autorisé. Un contrôle d\'authenticité du signal, capable de repérer les positions simulées et les appareils modifiés, ne figure pas parmi les fonctions annoncées. GeoTapp l\'exécute à chaque pointage, avant d\'enregistrer la donnée.' },
    { q: 'Le donneur d\'ordre peut-il vérifier les rapports lui-même ?', a: 'Les relevés d\'une suite RH sont conçus pour l\'administration et pour l\'expert-comptable. GeoTapp produit un dossier scellé que le client final ouvre et contrôle seul, sans compte, sans connexion et sans passer par nos systèmes, car la chaîne de hachage voyage dans le fichier.' },
    { q: 'GeoTapp ou Zucchetti pour une entreprise de nettoyage ?', a: 'Si le nœud est la paie et un service RH structuré, Zucchetti a une profondeur que nous n\'avons pas, et prétendre le contraire serait malhonnête. Si le nœud est le client qui conteste la prestation, un relevé de pointage ne vous défend pas, et il faut alors une preuve conçue pour sortir de l\'entreprise. Les deux outils cohabitent sans se marcher dessus.' },
  ],
  es: [
    { q: '¿Cuál es la principal diferencia entre GeoTapp y Zucchetti?', a: 'Zucchetti es una suite de gestión de personal, del fichaje a la nómina, donde el registro horario es un módulo más. GeoTapp certifica el trabajo en campo y convierte cada intervención en un documento sellado que el cliente verifica por su cuenta. El primero cierra el mes en la oficina, el segundo defiende una factura.' },
    { q: '¿Zucchetti comprueba si el GPS está falsificado?', a: 'El fichaje móvil de Zucchetti está geolocalizado y validado por un geofence, así que el sistema comprueba que la posición cae dentro del perímetro autorizado. Una comprobación de autenticidad de la señal, capaz de detectar posiciones simuladas y dispositivos manipulados, no aparece entre las funciones declaradas. GeoTapp la ejecuta en cada fichaje, antes de guardar el dato.' },
    { q: '¿Puede el cliente verificar los informes por su cuenta?', a: 'Los listados de una suite de RRHH nacen para la administración y para la gestoría. GeoTapp genera un paquete sellado que el cliente final abre y comprueba solo, sin cuenta, sin conexión y sin pasar por nuestros sistemas, porque la cadena de hash viaja dentro del archivo.' },
    { q: '¿GeoTapp o Zucchetti para una empresa de limpieza?', a: 'Si el nudo es la nómina y un departamento de personal estructurado, Zucchetti tiene una profundidad que nosotros no tenemos, y contarte lo contrario sería deshonesto. Si el nudo es el cliente que discute el servicio, un listado de fichajes no te defiende, y ahí hace falta una prueba construida para salir de la empresa. Las dos herramientas conviven sin estorbarse.' },
  ],
  pt: [
    { q: 'Qual é a principal diferença entre a GeoTapp e a Zucchetti?', a: 'A Zucchetti é uma suite de gestão de pessoal, do registo de presenças ao processamento salarial, e a picagem é apenas um módulo. A GeoTapp certifica o trabalho no terreno e transforma cada intervenção num documento selado que o cliente verifica sozinho. A primeira fecha o mês no escritório, a segunda defende uma fatura.' },
    { q: 'A Zucchetti verifica a falsificação do GPS?', a: 'A picagem móvel da Zucchetti é geolocalizada e validada por um geofence, portanto o sistema confirma que a posição cai dentro do perímetro autorizado. Uma verificação de autenticidade do sinal, capaz de apanhar posições simuladas e dispositivos manipulados, não consta das funções declaradas. A GeoTapp executa-a em cada picagem, antes de guardar o registo.' },
    { q: 'O cliente pode verificar os relatórios sozinho?', a: 'Os mapas de uma suite de RH nascem para a administração e para o contabilista. A GeoTapp produz um pacote selado que o cliente final abre e confere por conta própria, sem conta, sem ligação e sem passar pelos nossos sistemas, porque a cadeia de hash viaja dentro do ficheiro.' },
    { q: 'GeoTapp ou Zucchetti para uma empresa de limpeza?', a: 'Se o nó é o processamento salarial e um departamento de pessoal estruturado, a Zucchetti tem uma profundidade que não temos, e dizer o contrário seria desonesto. Se o nó é o cliente que contesta o serviço, um mapa de presenças não o defende, e aí é preciso uma prova construída para sair da empresa. As duas ferramentas convivem sem se atrapalhar.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Zucchetti?', a: 'Zucchetti is een suite voor personeelsbeheer, van tijdregistratie tot salarisverwerking, waarin het inklokken een van de vele modules is. GeoTapp certificeert het werk op locatie en maakt van elke opdracht een verzegeld document dat de opdrachtgever zelf kan controleren. De eerste sluit de maand af op kantoor, de tweede verdedigt een factuur.' },
    { q: 'Controleert Zucchetti of de GPS vervalst is?', a: 'Het mobiele inklokken van Zucchetti is gelokaliseerd en wordt gevalideerd via een geofence, het systeem controleert dus of de positie binnen de toegestane perimeter valt. Een controle op de echtheid van het signaal, die nagebootste locaties en gemanipuleerde toestellen herkent, staat niet bij de opgegeven functies. GeoTapp voert die bij elke registratie uit, voordat het gegeven wordt opgeslagen.' },
    { q: 'Kan de opdrachtgever de rapporten zelf controleren?', a: 'De overzichten van een HR-suite zijn gemaakt voor de administratie en voor de loonadviseur. GeoTapp levert een verzegeld pakket dat de eindklant alleen opent en nakijkt, zonder account, zonder verbinding en zonder onze systemen, want de hashketen zit in het bestand zelf.' },
    { q: 'GeoTapp of Zucchetti voor een schoonmaakbedrijf?', a: 'Als de knoop de loonstrook is en een uitgebouwde personeelsafdeling, heeft Zucchetti een diepte die wij niet hebben, en iets anders beweren zou oneerlijk zijn. Als de knoop de opdrachtgever is die de dienst betwist, verdedigt een urenoverzicht je niet, en dan heb je bewijs nodig dat gebouwd is om het bedrijf te verlaten. De twee gereedschappen staan naast elkaar zonder elkaar in de weg te lopen.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Zucchetti?', a: 'Zucchetti er en suite til personaleadministration, fra tidsregistrering til løn, hvor stempling er et modul blandt mange. GeoTapp certificerer arbejdet i marken og gør hver opgave til et forseglet dokument, som kunden selv kan kontrollere. Det ene lukker måneden på kontoret, det andet forsvarer en faktura.' },
    { q: 'Kontrollerer Zucchetti om GPS er forfalsket?', a: 'Zucchettis mobile stempling er geolokaliseret og valideret med en geofence, så systemet kontrollerer, at positionen ligger inden for det tilladte område. En kontrol af signalets ægthed, der fanger simulerede positioner og manipulerede enheder, står ikke blandt de angivne funktioner. GeoTapp kører den ved hver stempling, før data gemmes.' },
    { q: 'Kan kunden selv kontrollere rapporterne?', a: 'Udtrækkene fra en HR-suite er lavet til administrationen og til lønkonsulenten. GeoTapp laver en forseglet pakke, som slutkunden åbner og kontrollerer alene, uden konto, uden forbindelse og uden at gå gennem vores systemer, for hash-kæden ligger inde i filen.' },
    { q: 'GeoTapp eller Zucchetti til et rengøringsfirma?', a: 'Hvis knuden er løn og en struktureret personaleafdeling, har Zucchetti en dybde, vi ikke har, og at påstå andet ville være uærligt. Hvis knuden er kunden, der bestrider ydelsen, forsvarer en timeoversigt dig ikke, og så skal der bevis til, som er bygget til at forlade virksomheden. De to værktøjer lever fint side om side.' },
  ],
  sv: [
    { q: 'Vad är den största skillnaden mellan GeoTapp och Zucchetti?', a: 'Zucchetti är en svit för personaladministration, från tidrapportering till lön, där instämplingen är en modul bland många. GeoTapp certifierar arbetet i fält och gör varje uppdrag till ett förseglat dokument som kunden själv kan kontrollera. Det ena stänger månaden på kontoret, det andra försvarar en faktura.' },
    { q: 'Kontrollerar Zucchetti om GPS är förfalskad?', a: 'Zucchettis mobila instämpling är geolokaliserad och valideras med en geofence, så systemet kontrollerar att positionen ligger inom det tillåtna området. En kontroll av signalens äkthet, som fångar simulerade positioner och manipulerade enheter, finns inte bland de angivna funktionerna. GeoTapp kör den vid varje instämpling, innan uppgiften sparas.' },
    { q: 'Kan kunden kontrollera rapporterna själv?', a: 'Utdragen från en HR-svit är gjorda för administrationen och för lönekonsulten. GeoTapp skapar ett förseglat paket som slutkunden öppnar och kontrollerar själv, utan konto, utan uppkoppling och utan att gå via våra system, för hashkedjan ligger inuti filen.' },
    { q: 'GeoTapp eller Zucchetti för ett städföretag?', a: 'Om knuten är lönen och en uppbyggd personalavdelning har Zucchetti ett djup vi inte har, och att påstå något annat vore ohederligt. Om knuten är kunden som ifrågasätter tjänsten försvarar dig ingen tidrapport, och då behövs bevis byggda för att lämna företaget. De två verktygen samsas utan att stå i vägen för varandra.' },
  ],
  nb: [
    { q: 'Hva er den viktigste forskjellen mellom GeoTapp og Zucchetti?', a: 'Zucchetti er en suite for personaladministrasjon, fra tidsregistrering til lønn, der stemplingen er en modul blant mange. GeoTapp sertifiserer arbeidet ute i felten og gjør hvert oppdrag til et forseglet dokument som oppdragsgiveren selv kan kontrollere. Det ene lukker måneden på kontoret, det andre forsvarer en faktura.' },
    { q: 'Kontrollerer Zucchetti om GPS er forfalsket?', a: 'Den mobile stemplingen til Zucchetti er geolokalisert og validert med en geofence, så systemet kontrollerer at posisjonen ligger innenfor det tillatte området. En kontroll av signalets ekthet, som fanger opp simulerte posisjoner og manipulerte enheter, står ikke blant de oppgitte funksjonene. GeoTapp kjører den ved hver stempling, før dataene lagres.' },
    { q: 'Kan oppdragsgiveren kontrollere rapportene selv?', a: 'Uttrekkene fra en HR-suite er laget for administrasjonen og for lønnskonsulenten. GeoTapp lager en forseglet pakke som sluttkunden åpner og kontrollerer alene, uten konto, uten forbindelse og uten å gå gjennom systemene våre, for hash-kjeden ligger inne i filen.' },
    { q: 'GeoTapp eller Zucchetti for et renholdsfirma?', a: 'Er knuten lønn og en oppbygd personalavdeling, har Zucchetti en dybde vi ikke har, og å påstå noe annet ville vært uredelig. Er knuten oppdragsgiveren som bestrider tjenesten, forsvarer ingen timeliste deg, og da trengs bevis bygget for å forlate bedriften. De to verktøyene lever godt side om side.' },
  ],
  ru: [
    { q: 'В чём главное отличие GeoTapp от Zucchetti?', a: 'Zucchetti, это система управления персоналом, от учёта присутствия до расчёта зарплаты, где отметка времени, лишь один из модулей. GeoTapp сертифицирует работу на объекте и превращает каждый выезд в опечатанный документ, который заказчик проверяет сам. Первая закрывает месяц в бухгалтерии, вторая защищает счёт.' },
    { q: 'Проверяет ли Zucchetti подделку GPS?', a: 'Мобильная отметка Zucchetti геолоцирована и проверяется геозоной, то есть система смотрит, попадает ли координата в разрешённый периметр. Проверки подлинности самого сигнала, которая распознаёт симулированные позиции и модифицированные устройства, среди заявленных функций нет. GeoTapp выполняет её при каждой отметке, до записи данных.' },
    { q: 'Может ли заказчик проверить отчёты самостоятельно?', a: 'Выгрузки HR-системы сделаны для бухгалтерии и для кадрового консультанта. GeoTapp формирует опечатанный пакет, который конечный заказчик открывает и проверяет сам, без учётной записи, без интернета и без обращения к нашим системам, потому что цепочка хешей лежит внутри файла.' },
    { q: 'GeoTapp или Zucchetti для клининговой компании?', a: 'Если узел, это зарплата и выстроенный кадровый отдел, у Zucchetti есть глубина, которой у нас нет, и утверждать обратное было бы нечестно. Если узел, это заказчик, оспаривающий услугу, табель вас не защитит, и тут нужно доказательство, построенное для выхода за пределы компании. Два инструмента спокойно уживаются рядом.' },
  ],
};

// Etichette della tabella di confronto, per locale.
const ROWS_LABELS: Record<string, string[]> = {
  it: ['GPS verificato con controllo anti-spoofing','Report sigillato crittograficamente','Verifica indipendente da parte del committente','Foto dell\'intervento in catena hash','Timbratura da smartphone','Geofence sul luogo di lavoro','App nativa Android e iOS','Gestione ferie e assenze','Elaborazione paghe e cedolini','Badge NFC e lettori fisici','Attivazione autonoma con prova gratuita','Progettato per squadre sul campo','Informativa GPS automatica con firma digitale*'],
  en: ['GPS verified with anti-spoofing check','Cryptographically sealed report','Independent verification by the client','Job photos in a hash chain','Smartphone clock-in','Geofence on the work site','Native Android and iOS app','Leave and absence management','Payroll processing and payslips','NFC badges and physical readers','Self-service activation with free trial','Built for field teams','Automatic GPS privacy notice with digital signature*'],
  de: ['GPS mit Anti-Spoofing-Prüfung verifiziert','Kryptographisch versiegelter Bericht','Unabhängige Prüfung durch den Auftraggeber','Einsatzfotos in einer Hash-Kette','Stempelung per Smartphone','Geofence am Einsatzort','Native App für Android und iOS','Urlaubs- und Abwesenheitsverwaltung','Lohnabrechnung und Lohnzettel','NFC-Ausweise und Lesegeräte','Selbstständige Aktivierung mit kostenloser Testphase','Für Außendienst-Teams gebaut','Automatische GPS-Datenschutzerklärung mit digitaler Signatur*'],
  fr: ['GPS vérifié avec contrôle anti-spoofing','Rapport scellé cryptographiquement','Vérification indépendante par le donneur d\'ordre','Photos d\'intervention en chaîne de hachage','Pointage depuis smartphone','Geofence sur le lieu de travail','Application native Android et iOS','Gestion des congés et absences','Traitement de la paie et bulletins','Badges NFC et lecteurs physiques','Activation autonome avec essai gratuit','Conçu pour les équipes de terrain','Avis de confidentialité GPS automatique avec signature numérique*'],
  es: ['GPS verificado con control anti-spoofing','Informe sellado criptográficamente','Verificación independiente por el cliente','Fotos de la intervención en cadena hash','Fichaje desde smartphone','Geofence en el lugar de trabajo','App nativa Android e iOS','Gestión de vacaciones y ausencias','Procesamiento de nóminas','Tarjetas NFC y lectores físicos','Alta autónoma con prueba gratuita','Diseñado para equipos en campo','Aviso de privacidad GPS automático con firma digital*'],
  pt: ['GPS verificado com controlo anti-spoofing','Relatório selado criptograficamente','Verificação independente pelo cliente','Fotos da intervenção em cadeia hash','Picagem a partir do smartphone','Geofence no local de trabalho','App nativa Android e iOS','Gestão de férias e ausências','Processamento salarial e recibos','Cartões NFC e leitores físicos','Ativação autónoma com teste gratuito','Feito para equipas no terreno','Aviso de privacidade GPS automático com assinatura digital*'],
  nl: ['GPS geverifieerd met anti-spoofingcontrole','Cryptografisch verzegeld rapport','Onafhankelijke controle door de opdrachtgever','Werkfoto\'s in een hashketen','Inklokken via smartphone','Geofence op de werkplek','Native app voor Android en iOS','Verlof- en afwezigheidsbeheer','Salarisverwerking en loonstroken','NFC-badges en fysieke lezers','Zelf activeren met gratis proefperiode','Gebouwd voor buitendienstteams','Automatische GPS-privacyverklaring met digitale handtekening*'],
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
    desc: 'Zucchetti gestisce il personale di mezza Italia, con badge, geofence e cedolini dentro un ecosistema solo. GeoTapp fa una cosa sola, certifica l\'intervento sul campo con GPS verificato, foto sigillate e un report che il committente controlla da solo.',
    summary: 'In sintesi:',
    summaryText: 'Zucchetti è la scelta naturale quando il problema nasce in amministrazione, tra presenze da chiudere, paghe da elaborare e un ufficio del personale da far girare. GeoTapp serve quando il problema nasce fuori, alla porta del cliente che trattiene una fattura perché sostiene che martedì non è passato nessuno.',
    noteTitle: 'Il geofence dice dove cade il punto, non se il punto è vero',
    noteText: 'Un perimetro validato risponde a una domanda sola, la coordinata sta dentro l\'area. Alla seconda non risponde, e cioè se quella coordinata sia autentica, visto che una posizione si falsifica con un\'app gratuita e senza sapere niente di informatica. GeoTapp controlla il segnale prima di accettarlo, riconosce le posizioni simulate e i dispositivi manomessi, e sigilla ogni foto dentro una catena hash, così una modifica successiva viene fuori subito.',
    features: 'Confronto funzionalità chiave', feat: 'Funzionalità', diff: 'Approcci diversi',
    cta: 'Vuoi vedere GeoTapp in azione?',
    ctaDesc: 'Dieci minuti, e vedi come un intervento diventa una prova che il tuo committente verifica da solo.',
    ctaBtn: 'Inizia subito gratuitamente!',
    geo: ['Report sigillato, prova difendibile davanti al committente','GPS verificato prima ancora di essere registrato','Foto dell\'intervento in catena hash, se le tocchi si vede','Il committente controlla da solo, senza account e offline','Attivo in un pomeriggio, senza preventivo e senza rivenditore'],
    comp: ['Ecosistema HR completo, dalle presenze al cedolino','Timbratura con geofence, badge NFC e lettori fisici','Rete di rivenditori e consulenti su tutto il territorio','Tabulati pensati per l\'amministrazione, non per il cliente finale','Attivazione a preventivo, tempi e costi da concordare'],
    footnote: '* Per legge (GDPR Art. 13 e, in Italia, Art. 4 dello Statuto dei Lavoratori) ogni dipendente deve firmare un\'informativa privacy prima di essere geolocalizzato. La maggior parte dei software con GPS non lo gestisce, e il rischio legale resta al titolare. GeoTapp genera l\'informativa personalizzata, la fa firmare digitalmente al dipendente e tiene chiuso il GPS finché la firma non c\'è.',
  },
  en: {
    badge: 'App Comparison', h1sub: 'HR suite or proof of work?',
    desc: 'Zucchetti runs attendance, badges, geofencing and payslips for a large share of Italian companies, all inside one ecosystem. GeoTapp does one thing, it certifies the job on site with verified GPS, sealed photos and a report the client checks alone.',
    summary: 'In short:',
    summaryText: 'Zucchetti is the natural choice when the problem starts in the back office, with attendance to close, payroll to run and an HR department to keep moving. GeoTapp is for when the problem starts outside, at the door of a client holding an invoice because, so they say, nobody showed up on Tuesday.',
    noteTitle: 'A geofence tells you where the dot fell, not whether the dot is real',
    noteText: 'A validated perimeter answers one question, whether the coordinate sits inside the area. The second question it leaves open, whether that coordinate is genuine, and a position can be faked with a free app by someone who knows nothing about software. GeoTapp checks the signal before accepting it, catches simulated locations and tampered devices, and seals every photo into a hash chain, so a later edit shows up straight away.',
    features: 'Key feature comparison', feat: 'Feature', diff: 'Different approaches',
    cta: 'Want to see GeoTapp at work?',
    ctaDesc: 'Ten minutes, and you see how a job turns into evidence your client verifies alone.',
    ctaBtn: 'Start free now!',
    geo: ['Sealed report, evidence that holds in front of the client','GPS verified before the record is even stored','Job photos in a hash chain, tampering shows','The client checks alone, no account, offline','Running in an afternoon, no quote, no reseller'],
    comp: ['Full HR ecosystem, from attendance to payslip','Geofenced clock-in, NFC badges and physical readers','Nationwide network of resellers and consultants','Reports built for the back office, not for the end client','Activation by quote, timing and cost to be agreed'],
    footnote: '* By law (GDPR Art. 13) every employee must sign a privacy notice before being geolocated. Most GPS software leaves that step to you, and the legal risk stays with the employer. GeoTapp generates the personalised notice, has the employee sign it digitally and keeps GPS closed until the signature is there.',
  },
  de: {
    badge: 'App-Vergleich', h1sub: 'HR-Suite oder Nachweis?',
    desc: 'Zucchetti verwaltet Personal, Zeiterfassung, Ausweise und Lohnabrechnung in einem einzigen Ökosystem. GeoTapp macht eine Sache, es belegt den Einsatz vor Ort mit geprüftem GPS, versiegelten Fotos und einem Bericht, den der Auftraggeber allein kontrolliert.',
    summary: 'Kurz gesagt:',
    summaryText: 'Zucchetti ist die naheliegende Wahl, wenn das Problem in der Verwaltung entsteht, mit Anwesenheiten zum Abschließen, Löhnen zum Rechnen und einer Personalabteilung, die laufen muss. GeoTapp braucht es, wenn das Problem draußen entsteht, an der Tür eines Auftraggebers, der eine Rechnung zurückhält, weil am Dienstag angeblich niemand da war.',
    noteTitle: 'Der Geofence sagt, wo der Punkt liegt, nicht ob der Punkt echt ist',
    noteText: 'Ein validierter Perimeter beantwortet eine einzige Frage, ob die Koordinate im Bereich liegt. Die zweite bleibt offen, nämlich ob diese Koordinate echt ist, denn eine Position fälscht man mit einer kostenlosen App, ganz ohne technisches Wissen. GeoTapp prüft das Signal, bevor es angenommen wird, erkennt simulierte Standorte und manipulierte Geräte und versiegelt jedes Foto in einer Hash-Kette, sodass eine spätere Änderung sofort auffällt.',
    features: 'Vergleich der wichtigsten Funktionen', feat: 'Funktion', diff: 'Unterschiedliche Ansätze',
    cta: 'GeoTapp in Aktion sehen?',
    ctaDesc: 'Zehn Minuten, und Sie sehen, wie aus einem Einsatz ein Nachweis wird, den Ihr Auftraggeber selbst prüft.',
    ctaBtn: 'Jetzt kostenlos starten!',
    geo: ['Versiegelter Bericht, belastbar vor dem Auftraggeber','GPS geprüft, bevor der Datensatz überhaupt gespeichert wird','Einsatzfotos in der Hash-Kette, jede Änderung fällt auf','Der Auftraggeber prüft allein, ohne Konto und offline','In einem Nachmittag startklar, ohne Angebot und ohne Händler'],
    comp: ['Vollständiges HR-Ökosystem, von der Zeiterfassung bis zum Lohnzettel','Stempelung mit Geofence, NFC-Ausweisen und Lesegeräten','Dichtes Netz aus Händlern und Beratern','Auswertungen für die Verwaltung, nicht für den Endkunden','Aktivierung über Angebot, Zeit und Kosten nach Absprache'],
    footnote: '* Gesetzlich (DSGVO Art. 13) muss jede beschäftigte Person vor der Ortung eine Datenschutzerklärung unterschreiben. Die meisten GPS-Programme überlassen diesen Schritt Ihnen, und das rechtliche Risiko bleibt beim Arbeitgeber. GeoTapp erstellt die persönliche Erklärung, lässt sie digital unterschreiben und hält das GPS geschlossen, solange die Unterschrift fehlt.',
  },
  fr: {
    badge: 'Comparatif App', h1sub: 'suite RH ou preuve du travail ?',
    desc: 'Zucchetti gère le personnel, les badges, le geofence et les bulletins dans un seul écosystème. GeoTapp fait une seule chose, il certifie l\'intervention sur le terrain avec un GPS vérifié, des photos scellées et un rapport que le donneur d\'ordre contrôle lui-même.',
    summary: 'En résumé :',
    summaryText: 'Zucchetti est le choix naturel quand le problème naît au bureau, avec des pointages à clôturer, une paie à produire et un service RH à faire tourner. GeoTapp sert quand le problème naît dehors, à la porte d\'un client qui retient une facture parce que, selon lui, personne n\'est passé mardi.',
    noteTitle: 'Le geofence dit où tombe le point, pas si le point est vrai',
    noteText: 'Un périmètre validé répond à une seule question, la coordonnée est-elle dans la zone. Il laisse la seconde ouverte, celle de l\'authenticité de cette coordonnée, car une position se falsifie avec une application gratuite, sans rien connaître à l\'informatique. GeoTapp contrôle le signal avant de l\'accepter, repère les positions simulées et les appareils modifiés, et scelle chaque photo dans une chaîne de hachage, si bien qu\'une retouche ultérieure se voit tout de suite.',
    features: 'Comparatif des fonctions clés', feat: 'Fonction', diff: 'Approches différentes',
    cta: 'Envie de voir GeoTapp à l\'œuvre ?',
    ctaDesc: 'Dix minutes, et vous voyez comment une intervention devient une preuve que votre client vérifie seul.',
    ctaBtn: 'Commencez gratuitement !',
    geo: ['Rapport scellé, une preuve qui tient devant le client','GPS vérifié avant même d\'être enregistré','Photos d\'intervention en chaîne de hachage, toute retouche se voit','Le client contrôle seul, sans compte et hors ligne','Opérationnel en un après-midi, sans devis ni revendeur'],
    comp: ['Écosystème RH complet, du pointage au bulletin de paie','Pointage avec geofence, badges NFC et lecteurs physiques','Réseau de revendeurs et de consultants sur tout le territoire','Relevés conçus pour l\'administration, pas pour le client final','Activation sur devis, délais et coûts à convenir'],
    footnote: '* La loi (RGPD art. 13) impose que chaque salarié signe une information sur les données avant toute géolocalisation. La plupart des logiciels GPS laissent cette étape à votre charge, et le risque juridique reste à l\'employeur. GeoTapp génère l\'information personnalisée, la fait signer numériquement au salarié et garde le GPS fermé tant que la signature manque.',
  },
  es: {
    badge: 'Comparativa App', h1sub: '¿suite de RRHH o prueba del trabajo?',
    desc: 'Zucchetti gestiona personal, tarjetas, geofence y nóminas dentro de un único ecosistema. GeoTapp hace una sola cosa, certifica la intervención en campo con GPS verificado, fotos selladas y un informe que el cliente comprueba por su cuenta.',
    summary: 'En resumen:',
    summaryText: 'Zucchetti es la elección natural cuando el problema nace en la oficina, con fichajes que cerrar, nóminas que sacar y un departamento de personal que hacer funcionar. GeoTapp sirve cuando el problema nace fuera, en la puerta del cliente que retiene una factura porque, dice, el martes no pasó nadie.',
    noteTitle: 'El geofence dice dónde cae el punto, no si el punto es verdadero',
    noteText: 'Un perímetro validado responde a una sola pregunta, si la coordenada está dentro del área. La segunda queda abierta, si esa coordenada es auténtica, porque una posición se falsifica con una aplicación gratuita y sin saber nada de informática. GeoTapp comprueba la señal antes de aceptarla, detecta posiciones simuladas y dispositivos manipulados, y sella cada foto en una cadena hash, de modo que cualquier retoque posterior salta a la vista.',
    features: 'Comparativa de funciones clave', feat: 'Función', diff: 'Enfoques distintos',
    cta: '¿Quieres ver GeoTapp en acción?',
    ctaDesc: 'Diez minutos, y ves cómo una intervención se convierte en una prueba que tu cliente verifica solo.',
    ctaBtn: '¡Empieza gratis ahora!',
    geo: ['Informe sellado, prueba que aguanta delante del cliente','GPS verificado antes incluso de guardarse','Fotos de la intervención en cadena hash, si se tocan se nota','El cliente comprueba solo, sin cuenta y sin conexión','Funcionando en una tarde, sin presupuesto y sin distribuidor'],
    comp: ['Ecosistema de RRHH completo, del fichaje a la nómina','Fichaje con geofence, tarjetas NFC y lectores físicos','Red de distribuidores y consultores por todo el territorio','Listados pensados para la administración, no para el cliente final','Alta mediante presupuesto, plazos y costes a convenir'],
    footnote: '* Por ley (RGPD art. 13) cada trabajador debe firmar una información de privacidad antes de ser geolocalizado. La mayoría de los programas con GPS deja ese paso en tus manos, y el riesgo legal se queda con la empresa. GeoTapp genera la información personalizada, hace que el trabajador la firme digitalmente y mantiene el GPS cerrado mientras falte la firma.',
  },
  pt: {
    badge: 'Comparação App', h1sub: 'suite de RH ou prova do trabalho?',
    desc: 'A Zucchetti gere pessoal, cartões, geofence e recibos dentro de um único ecossistema. A GeoTapp faz uma coisa só, certifica a intervenção no terreno com GPS verificado, fotos seladas e um relatório que o cliente confere sozinho.',
    summary: 'Em resumo:',
    summaryText: 'A Zucchetti é a escolha natural quando o problema nasce no escritório, com presenças por fechar, salários por processar e um departamento de pessoal a funcionar. A GeoTapp serve quando o problema nasce cá fora, à porta do cliente que retém uma fatura porque, diz ele, na terça não apareceu ninguém.',
    noteTitle: 'O geofence diz onde cai o ponto, não se o ponto é verdadeiro',
    noteText: 'Um perímetro validado responde a uma única pergunta, se a coordenada está dentro da área. A segunda fica em aberto, se essa coordenada é autêntica, porque uma posição falsifica-se com uma aplicação gratuita e sem perceber nada de informática. A GeoTapp verifica o sinal antes de o aceitar, apanha posições simuladas e dispositivos manipulados, e sela cada foto numa cadeia hash, de modo que qualquer retoque posterior salta à vista.',
    features: 'Comparação das funções principais', feat: 'Função', diff: 'Abordagens diferentes',
    cta: 'Quer ver a GeoTapp a funcionar?',
    ctaDesc: 'Dez minutos, e vê como uma intervenção se torna uma prova que o seu cliente verifica sozinho.',
    ctaBtn: 'Comece gratuitamente!',
    geo: ['Relatório selado, prova que aguenta à frente do cliente','GPS verificado antes mesmo de ser guardado','Fotos da intervenção em cadeia hash, mexer nelas nota-se','O cliente confere sozinho, sem conta e offline','A funcionar numa tarde, sem orçamento e sem revendedor'],
    comp: ['Ecossistema de RH completo, da presença ao recibo','Picagem com geofence, cartões NFC e leitores físicos','Rede de revendedores e consultores em todo o território','Mapas pensados para a administração, não para o cliente final','Ativação por orçamento, prazos e custos a combinar'],
    footnote: '* Por lei (RGPD art. 13) cada trabalhador deve assinar uma informação de privacidade antes de ser geolocalizado. A maioria dos programas com GPS deixa esse passo consigo, e o risco legal fica com a entidade patronal. A GeoTapp gera a informação personalizada, faz o trabalhador assiná-la digitalmente e mantém o GPS fechado enquanto faltar a assinatura.',
  },
  nl: {
    badge: 'App-vergelijking', h1sub: 'HR-suite of bewijs van het werk?',
    desc: 'Zucchetti beheert personeel, badges, geofence en loonstroken binnen één enkel ecosysteem. GeoTapp doet één ding, het bewijst de opdracht op locatie met geverifieerde GPS, verzegelde foto\'s en een rapport dat de opdrachtgever zelf nakijkt.',
    summary: 'Kort gezegd:',
    summaryText: 'Zucchetti is de logische keuze wanneer het probleem op kantoor ontstaat, met uren om af te sluiten, lonen om te draaien en een personeelsafdeling die moet blijven lopen. GeoTapp is er voor wanneer het probleem buiten ontstaat, aan de deur van een klant die een factuur inhoudt omdat er dinsdag naar eigen zeggen niemand was.',
    noteTitle: 'Een geofence zegt waar de punt valt, niet of de punt echt is',
    noteText: 'Een gevalideerde perimeter beantwoordt één enkele vraag, ligt de coördinaat binnen het gebied. De tweede blijft open, of die coördinaat echt is, want een positie vervals je met een gratis app, zonder enige kennis van software. GeoTapp controleert het signaal voordat het wordt aangenomen, herkent nagebootste locaties en gemanipuleerde toestellen, en verzegelt elke foto in een hashketen, zodat een latere bewerking meteen opvalt.',
    features: 'Vergelijking van kernfuncties', feat: 'Functie', diff: 'Verschillende benaderingen',
    cta: 'GeoTapp aan het werk zien?',
    ctaDesc: 'Tien minuten, en je ziet hoe een opdracht bewijs wordt dat je klant zelf verifieert.',
    ctaBtn: 'Begin nu gratis!',
    geo: ['Verzegeld rapport, bewijs dat standhoudt bij de klant','GPS geverifieerd voordat het wordt opgeslagen','Werkfoto\'s in een hashketen, eraan zitten valt op','De klant kijkt zelf na, zonder account en offline','Draait binnen een middag, zonder offerte of dealer'],
    comp: ['Volledig HR-ecosysteem, van urenregistratie tot loonstrook','Inklokken met geofence, NFC-badges en fysieke lezers','Landelijk netwerk van dealers en adviseurs','Overzichten voor de administratie, niet voor de eindklant','Activering op offerte, doorlooptijd en kosten in overleg'],
    footnote: '* De wet (AVG art. 13) verplicht dat iedere werknemer een privacyverklaring tekent voordat er gelokaliseerd wordt. De meeste GPS-software laat die stap aan jou over, en het juridische risico blijft bij de werkgever. GeoTapp maakt de persoonlijke verklaring, laat die digitaal tekenen en houdt de GPS dicht zolang de handtekening ontbreekt.',
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
  const m = META[locale] ?? META.en;
  return {
    title: { absolute: m.title }, description: m.description,
    alternates: buildLocaleAlternates(locale, PATHNAME),
    openGraph: { url: buildCanonicalUrl(locale, PATHNAME), type: 'website', title: m.title, description: m.description, images: [{ url: '/og-default.png', width: 1200, height: 630, alt: m.title }] },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description },
  };
}

export default async function GeoTappVsZucchettiPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = T[locale] ?? T.en;
  const faqItems = FAQ[locale] ?? FAQ.en;
  const labels = ROWS_LABELS[locale] ?? ROWS_LABELS.en;
  const rows = labels.map((feature, i) => ({ feature, geotapp: ROWS_GEO[i], competitor: ROWS_COMP[i] }));

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  const breadcrumb = buildComparisonBreadcrumb({ locale, pathname: PATHNAME, competitorName: 'Zucchetti' });
  const meta = META[locale] ?? META.en;
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
