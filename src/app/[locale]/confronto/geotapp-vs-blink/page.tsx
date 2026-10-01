import type { Metadata } from 'next';
import ComparisonPageL from '@/components/ComparisonPageL';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-blink/';
const ARTICLE_DATE_PUBLISHED = '2026-02-01';
const ARTICLE_DATE_MODIFIED = '2026-05-23';

const META: Record<string, { title: string; description: string }> = {
  de: { title: 'GeoTapp vs Blink - Vergleich 2026 | GeoTapp', description: 'GeoTapp vs Blink: Zeiterfassung oder überprüfbarer Nachweis? Vergleich von Positionsprüfung beim Stempeln, versiegelten Berichten und Nachweisfotos für die Gebäudereinigung.' },
  it: { title: 'GeoTapp vs Blink - Confronto 2026 | GeoTapp', description: 'GeoTapp vs Blink: timbratura o prova verificabile? Confronto su controllo della posizione alla timbratura, report sigillati e foto di prova per imprese di pulizie.' },
  en: { title: 'GeoTapp vs Blink - Comparison 2026 | GeoTapp', description: 'GeoTapp vs Blink: time tracking or verifiable proof? Compare the position check at clock-in, sealed reports and proof photos for cleaning companies.' },
  nl: { title: 'GeoTapp vs Blink - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Blink: registratie of controleerbaar bewijs? Vergelijking op locatiecontrole, verzegelde rapporten en bewijsfoto\'s voor schoonmaakbedrijven.' },
  fr: { title: 'GeoTapp vs Blink - Comparatif 2026 | GeoTapp', description: 'GeoTapp vs Blink : pointage ou preuve vérifiable ? Contrôle de la position au pointage, rapports scellés et photos de preuve pour le nettoyage.' },
  es: { title: 'GeoTapp vs Blink - Comparativa 2026 | GeoTapp', description: 'GeoTapp vs Blink: ¿fichaje o prueba verificable? Comprobación de la posición al fichar, informes sellados y fotos de prueba para empresas de limpieza.' },
  pt: { title: 'GeoTapp vs Blink - Comparação 2026 | GeoTapp', description: 'GeoTapp vs Blink: picagem ou prova verificável? Comparação do controlo da posição ao picar, dos relatórios selados e das fotos de prova para empresas de limpeza.' },
  da: { title: 'GeoTapp vs Blink - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Blink: stempling eller verificerbart bevis? Sammenligning af positionskontrol ved stempling, forseglede rapporter og bevisfotos til rengøringsfirmaer.' },
  sv: { title: 'GeoTapp vs Blink - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs Blink: tidrapportering eller verifierbart bevis? Jämförelse av positionskontroll vid instämpling, förseglade rapporter och bevisfoton för städföretag.' },
  nb: { title: 'GeoTapp vs Blink - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Blink: stempling eller verifiserbart bevis? Sammenligning av posisjonskontroll ved stempling, forseglede rapporter og bevisbilder for renholdsbedrifter.' },
  ru: { title: 'GeoTapp vs Blink - Сравнение 2026 | GeoTapp', description: 'GeoTapp vs Blink: отметка времени или проверяемое доказательство? Сравнение контроля местоположения при отметке, запечатанных отчётов и фото-подтверждений для клининговых компаний.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza principale tra GeoTapp e Blink?', a: 'Blink è un software molto diffuso tra le imprese di pulizia in Germania: timbratura GPS, QR code, NFC, gestione attività e comunicazione del team. GeoTapp fa un\'altra cosa: documenta ogni intervento con posizione controllata alla timbratura e foto di prova, e lo chiude in un report sigillato che il committente verifica da solo.' },
    { q: 'Blink controlla se la posizione è falsificata?', a: 'Tra le funzioni che Blink dichiara c\'è il confronto della posizione con il luogo di lavoro impostato, non un controllo sulla posizione falsificata. GeoTapp, alla timbratura, rifiuta le posizioni simulate da app di finta posizione, quelle troppo imprecise e gli spostamenti impossibili.' },
    { q: 'Il committente può verificare i report di Blink?', a: 'Blink genera report interni. GeoTapp genera report con sigillo crittografico verificabili dal committente in modo indipendente.' },
    { q: 'Blink è molto diffuso tra le imprese di pulizia tedesche. Perché scegliere GeoTapp?', a: 'Blink è forte nella timbratura e nella comunicazione per le pulizie in Germania. Se però devi mostrare al committente le prove del servizio, in un report dove ogni modifica successiva è rilevabile, serve GeoTapp. Sono strumenti diversi per problemi diversi.' },
    { q: 'Quanto costa Blink e quante aziende lo usano?', a: 'Blink dichiara oltre 350 aziende clienti e più di 80.000 addetti alle pulizie che lo usano ogni giorno in Germania, con un piano Standard da 149 € al mese per 40 utenti più 4,90 € per utente aggiuntivo. È pensato per il mercato tedesco delle pulizie civili, con moduli forti su checklist e qualità.' },
  ],
  en: [
    { q: 'What is the main difference between GeoTapp and Blink?', a: 'Blink is widely used software among cleaning companies in Germany: GPS clock-in, QR code, NFC, task management and team communication. GeoTapp does something else: it documents every job with the position checked at clock-in and proof photos, and closes it in a sealed report that the client verifies alone.' },
    { q: 'Does Blink check whether the position is faked?', a: 'Among the features Blink lists is comparing the position with the set work location, not a check for faked positions. At clock-in GeoTapp rejects positions simulated by fake-location apps, positions that are too imprecise and impossible jumps.' },
    { q: 'Can the client verify Blink reports?', a: 'Blink generates internal reports. GeoTapp generates reports with a cryptographic seal that the client can verify independently.' },
    { q: 'Blink is widely used among German cleaning companies. Why choose GeoTapp?', a: 'Blink is strong at clock-in and team communication for cleaning in Germany. But if you need to show your client proof of the service, in a report where every later change is detectable, you need GeoTapp. Different tools for different problems.' },
  ],
  de: [
    { q: 'Was ist der Hauptunterschied zwischen GeoTapp und Blink?', a: 'Blink ist in der Gebäudereinigung in Deutschland weit verbreitet: GPS-Stempeln, QR-Code, NFC, Aufgabenverwaltung und Teamkommunikation. GeoTapp macht etwas anderes: Es dokumentiert jeden Einsatz mit einer beim Stempeln geprüften Position und Nachweisfotos und schließt ihn in einem versiegelten Bericht ab, den der Auftraggeber selbst überprüft.' },
    { q: 'Prüft Blink, ob die Position gefälscht ist?', a: 'Zu den Funktionen, die Blink angibt, gehört der Abgleich der Position mit dem eingestellten Arbeitsort, keine Prüfung auf gefälschte Positionen. GeoTapp weist beim Stempeln Positionen ab, die von Fake-Location-Apps simuliert wurden, zu ungenaue Positionen und unmögliche Ortssprünge.' },
    { q: 'Kann der Auftraggeber Blink-Berichte überprüfen?', a: 'Blink erstellt interne Berichte. GeoTapp erstellt Berichte mit kryptographischem Siegel, die der Auftraggeber unabhängig überprüfen kann.' },
    { q: 'Blink ist in der deutschen Gebäudereinigung weit verbreitet. Warum GeoTapp wählen?', a: 'Blink ist stark beim Stempeln und bei der Teamkommunikation in der Gebäudereinigung in Deutschland. Wenn Sie dem Auftraggeber aber Nachweise für die Leistung vorlegen müssen, in einem Bericht, in dem jede spätere Änderung erkennbar ist, brauchen Sie GeoTapp. Zwei verschiedene Werkzeuge für zwei verschiedene Probleme.' },
  ],
  fr: [
    { q: 'Quelle est la différence principale entre GeoTapp et Blink ?', a: 'Blink est un logiciel très répandu dans le nettoyage de bâtiments en Allemagne : pointage GPS, QR code, NFC, gestion des tâches et communication d\'équipe. GeoTapp fait autre chose : il documente chaque intervention avec une position contrôlée au pointage et des photos de preuve, puis la clôt dans un rapport scellé que le client vérifie lui-même.' },
    { q: 'Blink contrôle-t-il si la position est falsifiée ?', a: 'Parmi les fonctionnalités que Blink annonce figure la comparaison de la position avec le lieu de travail défini, et non un contrôle des positions falsifiées. Au pointage, GeoTapp refuse les positions simulées par des applis de fausse localisation, celles qui sont trop imprécises et les déplacements impossibles.' },
    { q: 'Le client peut-il vérifier les rapports de Blink ?', a: 'Blink génère des rapports internes. GeoTapp génère des rapports avec un sceau cryptographique que le client peut vérifier de façon indépendante.' },
    { q: 'Blink est très répandu dans le nettoyage en Allemagne. Pourquoi choisir GeoTapp ?', a: 'Blink est solide sur le pointage et la communication d\'équipe pour le nettoyage en Allemagne. Mais si vous devez montrer au client les preuves de la prestation, dans un rapport où toute modification ultérieure est détectable, il vous faut GeoTapp. Ce sont deux outils différents pour deux problèmes différents.' },
  ],
  es: [
    { q: '¿Cuál es la diferencia principal entre GeoTapp y Blink?', a: 'Blink es un software muy extendido en la limpieza de edificios en Alemania: fichaje GPS, código QR, NFC, gestión de tareas y comunicación de equipo. GeoTapp hace otra cosa: documenta cada intervención con una posición comprobada al fichar y fotos de prueba, y la cierra en un informe sellado que el cliente verifica por sí mismo.' },
    { q: '¿Blink comprueba si la posición está falsificada?', a: 'Entre las funciones que Blink declara está la comparación de la posición con el lugar de trabajo configurado, no un control de las posiciones falsificadas. GeoTapp, al fichar, rechaza las posiciones simuladas con apps de ubicación falsa, las demasiado imprecisas y los desplazamientos imposibles.' },
    { q: '¿Puede el cliente verificar los informes de Blink?', a: 'Blink genera informes internos. GeoTapp genera informes con sello criptográfico que el cliente puede verificar de forma independiente.' },
    { q: 'Blink está muy extendido en la limpieza en Alemania. ¿Por qué elegir GeoTapp?', a: 'Blink es sólido en el fichaje y en la comunicación de equipo para la limpieza en Alemania. Pero si tienes que mostrar al cliente las pruebas del servicio, en un informe donde cualquier modificación posterior es detectable, necesitas GeoTapp. Son herramientas distintas para problemas distintos.' },
  ],
  pt: [
    { q: 'Qual é a diferença principal entre a GeoTapp e a Blink?', a: 'A Blink é um software muito difundido entre as empresas de limpeza na Alemanha: picagem por GPS, código QR, NFC, gestão de tarefas e comunicação de equipa. A GeoTapp faz outra coisa: documenta cada intervenção com a posição controlada ao picar o ponto e fotos de prova, e fecha-a num relatório selado que o cliente verifica por si.' },
    { q: 'A Blink controla se a posição é falsificada?', a: 'Entre as funcionalidades que a Blink indica está a comparação da posição com o local de trabalho definido, e não um controlo de posições falsificadas. Ao picar o ponto, a GeoTapp recusa as posições simuladas por aplicações de localização falsa, as demasiado imprecisas e as deslocações impossíveis.' },
    { q: 'O cliente pode verificar os relatórios da Blink?', a: 'A Blink gera relatórios internos. A GeoTapp gera relatórios com selo criptográfico que o cliente pode verificar de forma independente.' },
    { q: 'A Blink é muito difundida entre as empresas de limpeza alemãs. Porquê escolher a GeoTapp?', a: 'A Blink é forte na picagem e na comunicação de equipa para a limpeza na Alemanha. Mas, se for preciso mostrar ao cliente as provas do serviço, num relatório em que qualquer alteração posterior é detetável, é preciso a GeoTapp. São ferramentas diferentes para problemas diferentes.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Blink?', a: 'Blink is software die veel wordt gebruikt door schoonmaakbedrijven in Duitsland: gps-registratie, QR-code, NFC, taakbeheer en teamcommunicatie. GeoTapp doet iets anders: het documenteert elke klus met een locatie die bij de registratie wordt gecontroleerd en bewijsfoto\'s, en sluit die af in een verzegeld rapport dat de opdrachtgever zelf controleert.' },
    { q: 'Controleert Blink of de locatie vervalst is?', a: 'Onder de functies die Blink opgeeft staat de vergelijking van de locatie met de ingestelde werkplek, niet een controle op vervalste locaties. GeoTapp weigert bij de registratie locaties die door nep-locatie-apps zijn gesimuleerd, te onnauwkeurige locaties en onmogelijke verplaatsingen.' },
    { q: 'Kan de opdrachtgever de rapporten van Blink controleren?', a: 'Blink maakt interne rapporten. GeoTapp maakt rapporten met een cryptografische verzegeling die de opdrachtgever onafhankelijk kan controleren.' },
    { q: 'Blink wordt veel gebruikt door Duitse schoonmaakbedrijven. Waarom zou ik voor GeoTapp kiezen?', a: 'Blink is sterk in registratie en communicatie voor de schoonmaak in Duitsland. Maar moet u de opdrachtgever het bewijs van de dienst tonen, in een rapport waarin elke latere wijziging zichtbaar is, dan hebt u GeoTapp nodig. Het zijn verschillende tools voor verschillende problemen.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Blink?', a: 'Blink er en software, der er meget udbredt blandt rengøringsfirmaer i Tyskland: GPS-stempling, QR-kode, NFC, opgavestyring og teamkommunikation. GeoTapp gør noget andet: det dokumenterer hver opgave med en position, der kontrolleres ved stempling, og bevisfotos og lukker den i en forseglet rapport, som kunden selv verificerer.' },
    { q: 'Kontrollerer Blink, om positionen er forfalsket?', a: 'Blink angiver blandt sine funktioner en sammenligning af positionen med den indstillede arbejdsplads, ikke en kontrol af forfalskede positioner. Ved stempling afviser GeoTapp positioner simuleret af apps med falsk placering, positioner, der er for upræcise, og umulige forflytninger.' },
    { q: 'Kan kunden verificere Blinks rapporter?', a: 'Blink genererer interne rapporter. GeoTapp genererer rapporter med kryptografisk segl, som kunden uafhængigt kan verificere.' },
    { q: 'Blink er meget udbredt blandt tyske rengøringsfirmaer. Hvorfor vælge GeoTapp?', a: 'Blink er stærkt til stempling og teamkommunikation for rengøring i Tyskland. Men hvis du skal vise kunden beviserne for ydelsen i en rapport, hvor enhver senere ændring kan opdages, har du brug for GeoTapp. Forskellige værktøjer til forskellige problemer.' },
  ],
  sv: [
    { q: 'Vad är den största skillnaden mellan GeoTapp och Blink?', a: 'Blink är en mjukvara som är mycket utbredd bland städföretag i Tyskland: GPS-instämpling, QR-kod, NFC, uppgiftshantering och teamkommunikation. GeoTapp gör något annat: den dokumenterar varje uppdrag med en position som kontrolleras vid instämpling och bevisfoton, och avslutar det i en förseglad rapport som kunden själv verifierar.' },
    { q: 'Kontrollerar Blink om positionen är förfalskad?', a: 'Bland funktionerna som Blink anger finns en jämförelse av positionen med den inställda arbetsplatsen, inte en kontroll av förfalskade positioner. Vid instämpling avvisar GeoTapp positioner som simulerats med appar för falsk plats, positioner som är för oprecisa och omöjliga förflyttningar.' },
    { q: 'Kan kunden verifiera Blinks rapporter?', a: 'Blink skapar interna rapporter. GeoTapp skapar rapporter med kryptografiskt sigill som kunden kan verifiera oberoende.' },
    { q: 'Blink är mycket utbrett bland tyska städföretag. Varför välja GeoTapp?', a: 'Blink är starkt på instämpling och teamkommunikation för städning i Tyskland. Men om du behöver visa kunden bevisen för tjänsten, i en rapport där varje senare ändring går att upptäcka, behöver du GeoTapp. Olika verktyg för olika problem.' },
  ],
  nb: [
    { q: 'Hva er den viktigste forskjellen mellom GeoTapp og Blink?', a: 'Blink er en programvare som er mye brukt blant renholdsbedrifter i Tyskland: GPS-stempling, QR-kode, NFC, oppgavestyring og teamkommunikasjon. GeoTapp gjør noe annet: det dokumenterer hvert oppdrag med en posisjon som kontrolleres ved stempling, og bevisbilder, og lukker det i en forseglet rapport som kunden selv verifiserer.' },
    { q: 'Kontrollerer Blink om posisjonen er forfalsket?', a: 'Blink oppgir blant funksjonene sine en sammenligning av posisjonen med den innstilte arbeidsplassen, ikke en kontroll av forfalskede posisjoner. Ved stempling avviser GeoTapp posisjoner simulert av apper for falsk posisjon, posisjoner som er for upresise, og umulige forflytninger.' },
    { q: 'Kan kunden verifisere Blinks rapporter?', a: 'Blink lager interne rapporter. GeoTapp lager rapporter med kryptografisk segl som kunden kan verifisere uavhengig.' },
    { q: 'Blink er mye brukt blant tyske renholdsbedrifter. Hvorfor velge GeoTapp?', a: 'Blink er sterkt på stempling og teamkommunikasjon for renhold i Tyskland. Men hvis du må vise kunden bevisene for tjenesten i en rapport der enhver senere endring kan oppdages, trenger du GeoTapp. Ulike verktøy for ulike problemer.' },
  ],
  ru: [
    { q: 'В чём главное отличие GeoTapp от Blink?', a: 'Blink — широко распространённое ПО среди клининговых компаний в Германии: GPS, QR-код, NFC, управление задачами и командное общение. GeoTapp делает другое: документирует каждый выезд местоположением, проверенным при отметке, и фото-подтверждением, и закрывает это запечатанным отчётом, который заказчик проверяет сам.' },
    { q: 'Проверяет ли Blink, что позиция не подделана?', a: 'Среди заявленных функций Blink есть сравнение позиции с заданным местом работы, но не проверка на подделку. GeoTapp при отметке отклоняет позиции, смоделированные приложениями для подмены координат, слишком неточные позиции и невозможные перемещения.' },
    { q: 'Может ли заказчик проверить отчёты Blink?', a: 'Blink создаёт внутренние отчёты. GeoTapp создаёт отчёты с криптографической печатью, которые заказчик может проверить независимо.' },
    { q: 'Blink широко распространён в клининге зданий. Почему выбрать GeoTapp?', a: 'Blink силён в отметке времени и командном общении для клининга в Германии. Но если вам нужно показать заказчику доказательства услуги, в отчёте, где любое последующее изменение заметно, нужен GeoTapp. Это разные инструменты для разных задач.' },
  ],
};

// Etichette della tabella di confronto, per locale.
const ROWS_LABELS: Record<string, string[]> = {
  it: ['Controllo della posizione alla timbratura (rifiuta posizioni simulate)','Report sigillato crittograficamente','Verifica indipendente da parte del committente','Foto con impronta SHA-256 nel report','Posizione rilevata solo quando si timbra','Timbratura GPS','Timbratura QR code / NFC','Gestione attività','Comunicazione team','Checklist digitali','App Android/iOS','Specializzato in pulizie civili','Informativa GPS firmata nell\'app prima di timbrare*'],
  en: ['Position check at clock-in (rejects simulated positions)','Cryptographically sealed report','Independent verification by the client','Photos with SHA-256 fingerprint in the report','Position recorded only at clock-in','GPS clock-in','QR code / NFC clock-in','Task management','Team communication','Digital checklists','App Android/iOS','Specialised in building cleaning','GPS notice signed in the app before clocking in*'],
  de: ['Positionsprüfung beim Stempeln (weist simulierte Positionen ab)','Kryptographisch versiegelter Bericht','Unabhängige Überprüfung durch den Auftraggeber','Fotos mit SHA-256-Fingerabdruck im Bericht','Position nur beim Stempeln erfasst','GPS-Stempeln','QR-Code- / NFC-Stempeln','Aufgabenverwaltung','Teamkommunikation','Digitale Checklisten','App Android/iOS','Spezialisiert auf Gebäudereinigung','GPS-Information vor dem Stempeln in der App unterschrieben*'],
  fr: ['Contrôle de la position au pointage (refuse les positions simulées)','Rapport scellé cryptographiquement','Vérification indépendante par le client','Photos avec empreinte SHA-256 dans le rapport','Position relevée uniquement au pointage','Pointage GPS','Pointage par QR code / NFC','Gestion des tâches','Communication d\'équipe','Checklists numériques','App Android/iOS','Spécialisé dans le nettoyage de bâtiments','Information GPS signée dans l\'app avant de pointer*'],
  es: ['Comprobación de la posición al fichar (rechaza posiciones simuladas)','Informe sellado criptográficamente','Verificación independiente por parte del cliente','Fotos con huella SHA-256 en el informe','Posición registrada solo al fichar','Fichaje GPS','Fichaje por QR / NFC','Gestión de tareas','Comunicación de equipo','Checklists digitales','App Android/iOS','Especializado en limpieza de edificios','Información sobre el GPS firmada en la app antes de fichar*'],
  pt: ['Controlo da posição ao picar o ponto (recusa posições simuladas)','Relatório selado criptograficamente','Verificação independente por parte do cliente','Fotos com impressão digital SHA-256 no relatório','Posição registada apenas ao picar o ponto','Picagem por GPS','Picagem por código QR / NFC','Gestão de tarefas','Comunicação de equipa','Checklists digitais','App Android/iOS','Especializado em limpeza de edifícios','Informação sobre o GPS assinada na app antes de picar o ponto*'],
  nl: ['Controle van de locatie bij de registratie (weigert gesimuleerde locaties)','Cryptografisch verzegeld rapport','Onafhankelijke controle door de opdrachtgever','Foto\'s met SHA-256-vingerafdruk in het rapport','Locatie alleen bij het registreren','Gps-registratie','Registratie met QR-code / NFC','Taakbeheer','Teamcommunicatie','Digitale checklists','App voor Android/iOS','Gespecialiseerd in gebouwreiniging','GPS-verklaring ondertekend in de app vóór het registreren*'],
  da: ['Positionskontrol ved stempling (afviser simulerede positioner)','Kryptografisk forseglet rapport','Uafhængig verificering af kunden','Fotos med SHA-256-fingeraftryk i rapporten','Position registreres kun ved stempling','GPS-stempling','Stempling med QR-kode / NFC','Opgavestyring','Teamkommunikation','Digitale tjeklister','App Android/iOS','Specialiseret i bygningsrengøring','GPS-information underskrevet i appen, før man stempler*'],
  sv: ['Positionskontroll vid instämpling (avvisar simulerade positioner)','Kryptografiskt förseglad rapport','Oberoende verifiering av kunden','Foton med SHA-256-fingeravtryck i rapporten','Positionen registreras bara vid instämpling','GPS-instämpling','Instämpling med QR-kod / NFC','Uppgiftshantering','Teamkommunikation','Digitala checklistor','Android-/iOS-app','Specialiserad på byggnadsstädning','GPS-information signerad i appen innan man stämplar in*'],
  nb: ['Posisjonskontroll ved stempling (avviser simulerte posisjoner)','Kryptografisk forseglet rapport','Uavhengig verifisering fra kunden','Bilder med SHA-256-fingeravtrykk i rapporten','Posisjon registreres bare ved stempling','GPS-stempling','Stempling med QR-kode / NFC','Oppgavestyring','Teamkommunikasjon','Digitale sjekklister','App Android/iOS','Spesialisert på bygningsrenhold','GPS-informasjon signert i appen før man stempler*'],
  ru: ['Контроль местоположения при отметке (отклоняет смоделированные позиции)','Криптографически запечатанный отчёт','Независимая проверка заказчиком','Фото с отпечатком SHA-256 в отчёте','Местоположение фиксируется только при отметке','Отметка по GPS','Отметка по QR-коду / NFC','Управление задачами','Командное общение','Цифровые чек-листы','Приложение Android/iOS','Специализация на клининге зданий','Уведомление о GPS, подписанное в приложении перед отметкой*'],
};

// Valori riverificati sul prodotto il 30/09/2026: niente QR/NFC, niente checklist; i prezzi sono pubblici.
const ROWS_GEO =  [true,true,true,true,true,true,false,true,true,false,true,false,true];
const ROWS_COMP = [false,false,false,false,true,true,true,true,true,true,true,true,false];

type Copy = {
  badge: string; h1sub: string; desc: string; summary: string; summaryText: string;
  noteTitle: string; noteText: string; features: string; feat: string; diff: string;
  cta: string; ctaDesc: string; ctaBtn: string; geo: string[]; comp: string[]; footnote: string;
};

const T: Record<string, Copy> = {
  it: {
    badge: 'Confronto App', h1sub: 'timbratura o prova verificabile?',
    desc: 'Blink è un software molto diffuso tra le imprese di pulizia in Germania. GeoTapp sigilla ogni intervento: posizione controllata alla timbratura, foto di prova e un report con un\'impronta digitale che cambia se qualcosa viene toccato, che il committente verifica da solo.',
    summary: 'In sintesi:',
    summaryText: 'Blink è forte nella timbratura e nella comunicazione per le pulizie in Germania. Tra le sue funzioni dichiarate però non ci sono il controllo della posizione falsificata, le foto sigillate nel report e la verifica da parte del committente. GeoTapp copre proprio queste tre cose.',
    noteTitle: 'Timbratura GPS non è verifica GPS',
    noteText: 'Confrontare la posizione con il luogo di lavoro dice se la coordinata cade nel posto giusto, non se è vera: una posizione si falsifica con un\'app gratuita. GeoTapp, alla timbratura, rifiuta le posizioni simulate, quelle troppo imprecise e gli spostamenti impossibili. In più ogni foto entra nel report con la sua impronta SHA-256: se qualcuno la modifica, la verifica lo segnala.',
    features: 'Confronto funzionalità chiave', feat: 'Funzionalità', diff: 'Due strumenti diversi',
    cta: 'Vuoi vedere GeoTapp in azione?',
    ctaDesc: 'Provalo su un intervento vero: 14 giorni gratis, senza carta di credito.',
    ctaBtn: 'Inizia la prova gratuita',
    geo: ['Alla timbratura rifiuta le posizioni simulate','Foto con impronta SHA-256 dentro il report','Report con sigillo crittografico verificabile','Il committente verifica da solo, online o con il verificatore offline','Non solo pulizie: ogni settore con operatori sul campo'],
    comp: ['Molto diffuso tra le pulizie in Germania','Timbratura GPS + QR code + NFC','Gestione attività e checklist digitali','Comunicazione del team integrata','Nessun report sigillato verificabile dal committente'],
    footnote: '* Per legge (art. 13 GDPR e, in Italia, art. 4 dello Statuto dei Lavoratori) ogni dipendente va informato prima di essere geolocalizzato. Se il software lascia questo passaggio al titolare, il rischio resta a lui. GeoTapp prepara l\'informativa personalizzata, la fa firmare per presa visione nell\'app e non lascia timbrare finché non è firmata.',
  },
  en: {
    badge: 'App Comparison', h1sub: 'time tracking or verifiable proof?',
    desc: 'Blink is widely used software among cleaning companies in Germany. GeoTapp seals every job: position checked at clock-in, proof photos and a report that the client verifies alone.',
    summary: 'Bottom line:',
    summaryText: 'Blink is strong at clock-in and team communication for cleaning in Germany. Among the features it lists, however, there is no check for faked positions, no photos sealed into the report and no verification by the client. GeoTapp covers exactly these three things.',
    noteTitle: 'A GPS clock-in is not a GPS check',
    noteText: 'Comparing the position with the work location tells you whether the coordinate falls in the right place, not whether it is real: a position can be faked with a free app. At clock-in GeoTapp rejects simulated positions, positions that are too imprecise and impossible jumps. On top of that, every photo goes into the report with its SHA-256 fingerprint: if someone changes it, the check flags it.',
    features: 'Key features comparison', feat: 'Feature', diff: 'Two different tools',
    cta: 'Want to see GeoTapp in action?',
    ctaDesc: 'Try it on a real job: 14 days free, no credit card.',
    ctaBtn: 'Start the free trial',
    geo: ['At clock-in it rejects simulated positions','Photos with SHA-256 fingerprint inside the report','Report with a verifiable cryptographic seal','The client verifies alone, online or with the offline verifier','Not just cleaning: every sector with field operators'],
    comp: ['Widely used for cleaning in Germany','GPS + QR code + NFC clock-in','Task management and digital checklists','Built-in team communication','No sealed report that the client can verify'],
    footnote: '* By law (Art. 13 GDPR and, in Italy, Art. 4 of the Workers\' Statute), every employee must be informed before being geolocated. If the software leaves this step to the employer, the risk stays with them. GeoTapp prepares the personalised notice, has it signed for acknowledgement in the app and does not let staff clock in until it is signed.',
  },
  de: {
    badge: 'App-Vergleich', h1sub: 'Zeiterfassung oder überprüfbarer Nachweis?',
    desc: 'Blink ist eine in der Gebäudereinigung in Deutschland weit verbreitete Software. GeoTapp versiegelt jeden Einsatz: beim Stempeln geprüfte Position, Nachweisfotos und ein Bericht, den der Auftraggeber selbst überprüft.',
    summary: 'Kurz gesagt:',
    summaryText: 'Blink ist stark beim Stempeln und bei der Teamkommunikation in der Gebäudereinigung in Deutschland. Zu den angegebenen Funktionen gehören jedoch weder eine Prüfung auf gefälschte Positionen noch im Bericht versiegelte Fotos noch die Überprüfung durch den Auftraggeber. Genau diese drei Dinge deckt GeoTapp ab.',
    noteTitle: 'GPS-Stempeln ist keine GPS-Prüfung',
    noteText: 'Die Position mit dem Arbeitsort abzugleichen zeigt, ob die Koordinate am richtigen Ort liegt, nicht, ob sie echt ist: Eine Position lässt sich mit einer kostenlosen App fälschen. GeoTapp weist beim Stempeln Positionen ab, die von Fake-Location-Apps simuliert wurden, zu ungenaue Positionen und unmögliche Ortssprünge. Außerdem kommt jedes Foto mit seinem SHA-256-Fingerabdruck in den Bericht: Wird es verändert, meldet das die Prüfung.',
    features: 'Vergleich der wichtigsten Funktionen', feat: 'Funktion', diff: 'Zwei verschiedene Werkzeuge',
    cta: 'Möchten Sie GeoTapp in Aktion sehen?',
    ctaDesc: 'Testen Sie es an einem echten Einsatz: 14 Tage kostenlos, keine Kreditkarte.',
    ctaBtn: 'Kostenlos testen',
    geo: ['Weist beim Stempeln simulierte Positionen ab','Fotos mit SHA-256-Fingerabdruck im Bericht','Bericht mit überprüfbarem kryptographischem Siegel','Der Auftraggeber prüft selbst, online oder mit dem Offline-Verifier','Nicht nur Reinigung: jede Branche mit Mitarbeitern im Außendienst'],
    comp: ['Weit verbreitet in der Gebäudereinigung in Deutschland','GPS-, QR-Code- und NFC-Stempeln','Aufgabenverwaltung und digitale Checklisten','Integrierte Teamkommunikation','Kein versiegelter Bericht, den der Auftraggeber überprüfen kann'],
    footnote: '* Nach geltendem Recht (Art. 13 DSGVO und in Italien Art. 4 des Arbeitnehmerstatuts) muss jeder Mitarbeiter informiert werden, bevor er geortet wird. Überlässt die Software diesen Schritt dem Arbeitgeber, bleibt das Risiko bei ihm. GeoTapp erstellt die personalisierte Information, lässt sie in der App zur Kenntnisnahme unterschreiben und lässt erst danach das Stempeln zu.',
  },
  fr: {
    badge: 'Comparatif d\'applis',
    h1sub: 'pointage ou preuve vérifiable ?',
    desc: 'Blink est un logiciel très répandu dans le nettoyage de bâtiments en Allemagne. GeoTapp scelle chaque intervention : position contrôlée au pointage, photos de preuve et un rapport que le client vérifie lui-même.',
    summary: 'En résumé :',
    summaryText: 'Blink est solide sur le pointage et la communication d\'équipe pour le nettoyage en Allemagne. Parmi ses fonctionnalités annoncées, on ne trouve toutefois ni contrôle des positions falsifiées, ni photos scellées dans le rapport, ni vérification par le client. GeoTapp couvre précisément ces trois points.',
    noteTitle: 'Pointage GPS n\'est pas vérification GPS',
    noteText: 'Comparer la position avec le lieu de travail indique si la coordonnée tombe au bon endroit, pas si elle est réelle : une position se falsifie avec une appli gratuite. Au pointage, GeoTapp refuse les positions simulées, celles qui sont trop imprécises et les déplacements impossibles. De plus, chaque photo entre dans le rapport avec son empreinte SHA-256 : si quelqu\'un la modifie, la vérification le signale.',
    features: 'Comparaison des fonctionnalités clés',
    feat: 'Fonctionnalité',
    diff: 'Deux outils différents',
    cta: 'Envie de voir GeoTapp en action ?',
    ctaDesc: 'Essayez-le sur une intervention réelle : 14 jours gratuits, sans carte bancaire.',
    ctaBtn: 'Commencer l\'essai gratuit',
    geo: ['Au pointage, refuse les positions simulées','Photos avec empreinte SHA-256 dans le rapport','Rapport avec sceau cryptographique vérifiable','Le client vérifie lui-même, en ligne ou avec le vérificateur hors ligne','Pas seulement le nettoyage : tous les secteurs avec des opérateurs sur le terrain'],
    comp: ['Très répandu dans le nettoyage en Allemagne','Pointage GPS + QR code + NFC','Gestion des tâches et checklists numériques','Communication d\'équipe intégrée','Aucun rapport scellé vérifiable par le client'],
    footnote: '* Selon la loi (art. 13 du RGPD et, en Italie, art. 4 du Statut des travailleurs), chaque salarié doit être informé avant d\'être géolocalisé. Si le logiciel laisse cette étape à l\'employeur, le risque lui reste. GeoTapp prépare l\'information personnalisée, la fait signer pour prise de connaissance dans l\'app et ne laisse pas pointer tant qu\'elle n\'est pas signée.',
  },
  es: {
    badge: 'Comparativa de apps', h1sub: '¿fichaje o prueba verificable?',
    desc: 'Blink es un software muy extendido en la limpieza de edificios en Alemania. GeoTapp sella cada intervención: posición comprobada al fichar, fotos de prueba y un informe que el cliente verifica por sí mismo.',
    summary: 'En resumen:',
    summaryText: 'Blink es sólido en el fichaje y en la comunicación de equipo para la limpieza en Alemania. Entre sus funciones declaradas, sin embargo, no figuran el control de las posiciones falsificadas, las fotos selladas en el informe ni la verificación por parte del cliente. GeoTapp cubre justo estas tres cosas.',
    noteTitle: 'Fichaje GPS no es verificación GPS',
    noteText: 'Comparar la posición con el lugar de trabajo indica si la coordenada cae en el sitio correcto, no si es real: una posición se falsifica con una app gratuita. GeoTapp, al fichar, rechaza las posiciones simuladas, las demasiado imprecisas y los desplazamientos imposibles. Además, cada foto entra en el informe con su huella SHA-256: si alguien la modifica, la verificación lo señala.',
    features: 'Comparación de funciones clave', feat: 'Función', diff: 'Dos herramientas distintas',
    cta: '¿Quieres ver GeoTapp en acción?',
    ctaDesc: 'Pruébalo en una intervención real: 14 días gratis, sin tarjeta de crédito.',
    ctaBtn: 'Empezar prueba gratuita',
    geo: ['Al fichar, rechaza las posiciones simuladas','Fotos con huella SHA-256 dentro del informe','Informe con sello criptográfico verificable','El cliente verifica por sí mismo, en línea o con el verificador sin conexión','No solo limpieza: todos los sectores con operarios en campo'],
    comp: ['Muy extendido en la limpieza en Alemania','Fichaje GPS + código QR + NFC','Gestión de tareas y checklists digitales','Comunicación de equipo integrada','Ningún informe sellado que el cliente pueda verificar'],
    footnote: '* Por ley (art. 13 del RGPD y, en Italia, art. 4 del Estatuto de los Trabajadores), cada empleado debe ser informado antes de ser geolocalizado. Si el software deja este paso en manos del empleador, el riesgo sigue siendo suyo. GeoTapp prepara la información personalizada, la hace firmar en la app como constancia de lectura y no deja fichar hasta que esté firmada.',
  },
  pt: {
    badge: 'Comparação de apps', h1sub: 'picagem ou prova verificável?',
    desc: 'A Blink é um software muito difundido entre as empresas de limpeza na Alemanha. A GeoTapp sela cada intervenção: posição controlada ao picar o ponto, fotos de prova e um relatório que o cliente verifica por si.',
    summary: 'Em resumo:',
    summaryText: 'A Blink é forte na picagem e na comunicação de equipa para a limpeza na Alemanha. Entre as funcionalidades que indica, porém, não constam o controlo de posições falsificadas, as fotos seladas no relatório nem a verificação por parte do cliente. A GeoTapp cobre precisamente estas três coisas.',
    noteTitle: 'Picagem por GPS não é verificação do GPS',
    noteText: 'Comparar a posição com o local de trabalho indica se a coordenada cai no sítio certo, não se é verdadeira: uma posição falsifica-se com uma aplicação gratuita. Ao picar o ponto, a GeoTapp recusa as posições simuladas, as demasiado imprecisas e as deslocações impossíveis. Além disso, cada foto entra no relatório com a sua impressão digital SHA-256: se alguém a alterar, a verificação assinala-o.',
    features: 'Comparação das funcionalidades principais', feat: 'Funcionalidade', diff: 'Duas ferramentas diferentes',
    cta: 'Quer ver a GeoTapp em ação?',
    ctaDesc: 'Experimente numa intervenção real: 14 dias grátis, sem cartão de crédito.',
    ctaBtn: 'Começar teste gratuito',
    geo: ['Ao picar o ponto, recusa as posições simuladas','Fotos com impressão digital SHA-256 dentro do relatório','Relatório com selo criptográfico verificável','O cliente verifica por si, online ou com o verificador offline','Não só limpeza: todos os setores com operadores no terreno'],
    comp: ['Muito difundida na limpeza na Alemanha','Picagem por GPS + código QR + NFC','Gestão de tarefas e checklists digitais','Comunicação de equipa integrada','Nenhum relatório selado que o cliente possa verificar'],
    footnote: '* Por lei (art. 13.º do RGPD), cada trabalhador deve ser informado antes de ser geolocalizado. Se o software deixa este passo ao empregador, o risco continua a ser dele. A GeoTapp prepara a informação personalizada, faz com que seja assinada na app como confirmação de leitura e não deixa picar o ponto enquanto não estiver assinada.',
  },
  nl: {
    badge: 'App-vergelijking', h1sub: 'registratie of controleerbaar bewijs?',
    desc: 'Blink is software die veel wordt gebruikt door schoonmaakbedrijven in Duitsland. GeoTapp verzegelt elke klus: locatie gecontroleerd bij de registratie, bewijsfoto\'s en een rapport dat de opdrachtgever zelf controleert.',
    summary: 'Kort gezegd:',
    summaryText: 'Blink is sterk in registratie en communicatie voor de schoonmaak in Duitsland. Onder de functies die het opgeeft staan echter niet de controle op een vervalste locatie, de verzegelde foto\'s in het rapport en de controle door de opdrachtgever. GeoTapp dekt precies deze drie dingen.',
    noteTitle: 'Gps-registratie is geen gps-controle',
    noteText: 'De locatie vergelijken met de werkplek zegt of de coördinaat op de juiste plek valt, niet of hij echt is: een locatie is met een gratis app te vervalsen. GeoTapp weigert bij de registratie gesimuleerde locaties, te onnauwkeurige locaties en onmogelijke verplaatsingen. Bovendien komt elke foto in het rapport met haar SHA-256-vingerafdruk: wijzigt iemand haar, dan meldt de controle het.',
    features: 'Vergelijking van de belangrijkste functies', feat: 'Functie', diff: 'Twee verschillende tools',
    cta: 'Wilt u GeoTapp in actie zien?',
    ctaDesc: 'Probeer het op een echte klus: 14 dagen gratis, zonder creditcard.',
    ctaBtn: 'Start de gratis proefperiode',
    geo: ['Weigert bij de registratie gesimuleerde locaties','Foto\'s met SHA-256-vingerafdruk in het rapport','Rapport met controleerbare cryptografische verzegeling','De opdrachtgever controleert zelf, online of met de offline verifier','Niet alleen schoonmaak: elke sector met medewerkers in het veld'],
    comp: ['Veel gebruikt in de schoonmaak in Duitsland','Gps-registratie + QR-code + NFC','Taakbeheer en digitale checklists','Geïntegreerde teamcommunicatie','Geen verzegeld rapport dat de opdrachtgever kan controleren'],
    footnote: '* Volgens de wet (art. 13 AVG en, in Italië, art. 4 van het arbeidsstatuut) moet elke werknemer worden geïnformeerd voordat hij wordt gelokaliseerd. Laat de software deze stap aan de verantwoordelijke over, dan blijft het risico bij hem. GeoTapp maakt de persoonlijke privacyverklaring klaar, laat die in de app voor kennisgeving ondertekenen en laat niet registreren totdat ze is ondertekend.',
  },
  da: {
    badge: 'App-sammenligning', h1sub: 'stempling eller verificerbart bevis?',
    desc: 'Blink er en software, der er meget udbredt blandt rengøringsfirmaer i Tyskland. GeoTapp forsegler hver opgave: position kontrolleret ved stempling, bevisfotos og en rapport, som kunden selv verificerer.',
    summary: 'Kort sagt:',
    summaryText: 'Blink er stærkt til stempling og teamkommunikation for rengøring i Tyskland. Blandt de angivne funktioner er der dog ikke kontrol af forfalskede positioner, forseglede fotos i rapporten eller verificering fra kundens side. GeoTapp dækker netop disse tre ting.',
    noteTitle: 'GPS-stempling er ikke GPS-verificering',
    noteText: 'At sammenligne positionen med arbejdspladsen viser, om koordinatet ligger det rigtige sted, ikke om det er ægte: en position kan forfalskes med en gratis app. Ved stempling afviser GeoTapp simulerede positioner, positioner, der er for upræcise, og umulige forflytninger. Desuden kommer hvert foto ind i rapporten med sit SHA-256-fingeraftryk: hvis nogen ændrer det, slår verificeringen alarm.',
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion', diff: 'To forskellige værktøjer',
    cta: 'Vil du se GeoTapp i aktion?',
    ctaDesc: 'Prøv det på en rigtig opgave: 14 dage gratis, uden kreditkort.',
    ctaBtn: 'Start gratis prøveperiode',
    geo: ['Afviser simulerede positioner ved stempling','Fotos med SHA-256-fingeraftryk i rapporten','Rapport med verificerbart kryptografisk segl','Kunden verificerer selv, online eller med den offline Verifier','Ikke kun rengøring: alle brancher med medarbejdere i marken'],
    comp: ['Meget udbredt inden for rengøring i Tyskland','GPS-stempling + QR-kode + NFC','Opgavestyring og digitale tjeklister','Integreret teamkommunikation','Ingen forseglet rapport, som kunden kan verificere'],
    footnote: '* Ifølge loven (GDPR art. 13 og, i Italien, art. 4 i arbejdstagerloven, Statuto dei Lavoratori) skal hver medarbejder informeres, før vedkommende geolokaliseres. Overlader softwaren dette trin til arbejdsgiveren, er risikoen stadig arbejdsgiverens. GeoTapp forbereder den personlige information, får den underskrevet i appen som bekræftelse på, at den er læst, og lader ikke medarbejderen stemple, før den er underskrevet.',
  },
  sv: {
    badge: 'App-jämförelse', h1sub: 'tidrapportering eller verifierbart bevis?',
    desc: 'Blink är en mjukvara som är mycket utbredd bland städföretag i Tyskland. GeoTapp förseglar varje uppdrag: position som kontrolleras vid instämpling, bevisfoton och en rapport som kunden själv verifierar.',
    summary: 'Kort sagt:',
    summaryText: 'Blink är starkt på instämpling och teamkommunikation för städning i Tyskland. Bland de funktioner som anges finns dock ingen kontroll av förfalskade positioner, inga foton förseglade i rapporten och ingen verifiering av kunden. GeoTapp täcker just de tre sakerna.',
    noteTitle: 'GPS-instämpling är inte GPS-kontroll',
    noteText: 'Att jämföra positionen med arbetsplatsen visar om koordinaten hamnar på rätt ställe, inte om den är äkta: en position går att förfalska med en gratisapp. Vid instämpling avvisar GeoTapp simulerade positioner, positioner som är för oprecisa och omöjliga förflyttningar. Dessutom hamnar varje foto i rapporten med sitt SHA-256-fingeravtryck: om någon ändrar det flaggar kontrollen det.',
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion', diff: 'Två olika verktyg',
    cta: 'Vill du se GeoTapp i praktiken?',
    ctaDesc: 'Prova på ett riktigt uppdrag: 14 dagar gratis, utan kreditkort.',
    ctaBtn: 'Starta den kostnadsfria provperioden',
    geo: ['Avvisar simulerade positioner vid instämpling','Foton med SHA-256-fingeravtryck i rapporten','Rapport med verifierbart kryptografiskt sigill','Kunden verifierar själv, online eller med den fristående verifieraren','Inte bara städning: alla branscher med fältpersonal'],
    comp: ['Mycket utbrett inom städning i Tyskland','GPS-, QR-kod- och NFC-instämpling','Uppgiftshantering och digitala checklistor','Inbyggd teamkommunikation','Ingen förseglad rapport som kunden kan verifiera'],
    footnote: '* Enligt lag (artikel 13 i GDPR) måste varje anställd informeras innan hen geolokaliseras. Om programvaran överlåter det steget åt arbetsgivaren ligger risken kvar hos arbetsgivaren. GeoTapp tar fram den personliga informationen, låter den anställde signera den som läst i appen och släpper inte till instämpling förrän den är signerad.',
  },
  nb: {
    badge: 'App-sammenligning', h1sub: 'stempling eller verifiserbart bevis?',
    desc: 'Blink er en programvare som er mye brukt blant renholdsbedrifter i Tyskland. GeoTapp forsegler hvert oppdrag: posisjon kontrollert ved stempling, bevisbilder og en rapport som kunden selv verifiserer.',
    summary: 'Kort sagt:',
    summaryText: 'Blink er sterkt på stempling og teamkommunikasjon for renhold i Tyskland. Blant funksjonene som er oppgitt, finnes det likevel ikke kontroll av forfalskede posisjoner, forseglede bilder i rapporten eller verifisering fra kundens side. GeoTapp dekker nettopp disse tre tingene.',
    noteTitle: 'GPS-stempling er ikke GPS-verifisering',
    noteText: 'Å sammenligne posisjonen med arbeidsplassen viser om koordinatet ligger på riktig sted, ikke om det er ekte: en posisjon kan forfalskes med en gratis app. Ved stempling avviser GeoTapp simulerte posisjoner, posisjoner som er for upresise, og umulige forflytninger. I tillegg kommer hvert bilde inn i rapporten med sitt SHA-256-fingeravtrykk: hvis noen endrer det, slår verifiseringen alarm.',
    features: 'Sammenligning av nøkkelfunksjoner', feat: 'Funksjon', diff: 'To forskjellige verktøy',
    cta: 'Vil du se GeoTapp i aksjon?',
    ctaDesc: 'Prøv det på et ekte oppdrag: 14 dager gratis, uten kredittkort.',
    ctaBtn: 'Start gratis prøveperiode',
    geo: ['Avviser simulerte posisjoner ved stempling','Bilder med SHA-256-fingeravtrykk i rapporten','Rapport med verifiserbart kryptografisk segl','Kunden verifiserer selv, online eller med offline-verifikatoren','Ikke bare renhold: alle bransjer med ansatte ute i felt'],
    comp: ['Mye brukt innen renhold i Tyskland','GPS-stempling + QR-kode + NFC','Oppgavestyring og digitale sjekklister','Integrert teamkommunikasjon','Ingen forseglet rapport som kunden kan verifisere'],
    footnote: '* Ifølge loven (GDPR art. 13 og, i Italia, art. 4 i arbeidstakerloven, Statuto dei Lavoratori) må hver ansatt informeres før vedkommende geolokaliseres. Overlater programvaren dette trinnet til arbeidsgiveren, blir risikoen hos arbeidsgiveren. GeoTapp forbereder den personlige informasjonen, får den signert i appen som bekreftelse på at den er lest, og lar ikke den ansatte stemple før den er signert.',
  },
  ru: {
    badge: 'Сравнение приложений', h1sub: 'учёт времени или запечатывание?',
    desc: 'Blink — широко распространённое ПО среди клининговых компаний в Германии: GPS, QR-код, NFC, управление задачами и командное общение. GeoTapp запечатывает каждый выезд: местоположение проверяется при отметке, фото-подтверждения и отчёт, который заказчик проверяет сам.',
    summary: 'Коротко:',
    summaryText: 'Blink силён в отметке времени и командном общении для клининга в Германии. Но среди его заявленных функций нет проверки позиции на подделку, запечатанных в отчёте фото и проверки со стороны заказчика. Именно эти три вещи закрывает GeoTapp.',
    noteTitle: 'Отметка по GPS — это не проверка GPS',
    noteText: 'Сравнение позиции с местом работы показывает, попадает ли координата в нужное место, но не то, настоящая ли она: позицию можно подделать бесплатным приложением. GeoTapp при отметке отклоняет смоделированные позиции, слишком неточные и невозможные перемещения. Кроме того, каждое фото попадает в отчёт со своим отпечатком SHA-256: если кто-то его изменит, проверка это покажет.',
    features: 'Сравнение ключевых функций', feat: 'Функция', diff: 'Два разных инструмента',
    cta: 'Хотите увидеть GeoTapp в действии?',
    ctaDesc: 'Попробуйте на реальной работе: 14 дней бесплатно, без банковской карты.',
    ctaBtn: 'Начать бесплатную пробную версию',
    geo: ['При отметке отклоняет смоделированные позиции','Фото с отпечатком SHA-256 в отчёте','Отчёт с проверяемой криптографической печатью','Заказчик проверяет сам, онлайн или с офлайн-верификатором','Не только клининг: все отрасли с выездными сотрудниками'],
    comp: ['Широко распространено для клининга в Германии','Отметка по GPS + QR-код + NFC','Управление задачами и цифровые чек-листы','Встроенное командное общение','Нет запечатанного отчёта, который может проверить заказчик'],
    footnote: '* По закону (ст. 13 GDPR и, в Италии, ст. 4 Статута трудящихся) каждый сотрудник должен быть проинформирован, прежде чем за ним начнут следить по GPS. Если программа оставляет этот шаг на усмотрение работодателя, риск остаётся на нём. GeoTapp готовит персональное уведомление, даёт сотруднику подписать его в приложении для подтверждения ознакомления и не позволяет отмечаться, пока оно не подписано.',
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

export default async function GeoTappVsBlinkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = localizeEnglishDeep(T[locale] ?? T.en, locale);
  const faqItems = localizeEnglishDeep(FAQ[locale] ?? FAQ.en, locale);
  const labels = localizeEnglishDeep(ROWS_LABELS[locale] ?? ROWS_LABELS.en, locale);
  const rows = labels.map((feature, i) => ({ feature, geotapp: ROWS_GEO[i], competitor: ROWS_COMP[i] }));

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  const breadcrumb = buildComparisonBreadcrumb({ locale, pathname: PATHNAME, competitorName: 'Blink' });
  const meta = localizeEnglishDeep(META[locale] ?? META.en, locale);
  const article = buildComparisonArticle({ locale, pathname: PATHNAME, headline: meta.title, description: meta.description, datePublished: ARTICLE_DATE_PUBLISHED, dateModified: ARTICLE_DATE_MODIFIED });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ComparisonPageL
        locale={locale}
        competitorName="Blink"
        competitorId="blink"
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
