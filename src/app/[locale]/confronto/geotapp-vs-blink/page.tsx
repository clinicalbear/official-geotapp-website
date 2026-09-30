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
  nl: { title: 'GeoTapp vs Blink - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Blink: tijdregistratie of verzegeld bewijs? Vergelijk anti-spoofing GPS en cryptografisch verzegelde rapporten.' },
  fr: { title: 'GeoTapp vs Blink - Comparaison 2026 | GeoTapp', description: 'GeoTapp vs Blink : pointage ou preuve vérifiable ? Comparez GPS anti-fraude et rapports scelles cryptographiquement.' },
  es: { title: 'GeoTapp vs Blink - Comparacion 2026 | GeoTapp', description: 'GeoTapp vs Blink: fichaje o prueba verificable? Compara GPS anti-spoofing e informes sellados criptograficamente.' },
  pt: { title: 'GeoTapp vs Blink - Comparacao 2026 | GeoTapp', description: 'GeoTapp vs Blink: registo ou prova verificavel? Compare GPS anti-spoofing e relatorios selados criptograficamente.' },
  da: { title: 'GeoTapp vs Blink - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Blink: tidsregistrering eller forseglet bevis? Sammenlign anti-spoofing GPS og kryptografisk forseglede rapporter.' },
  sv: { title: 'GeoTapp vs Blink - Jamforelse 2026 | GeoTapp', description: 'GeoTapp vs Blink: tidrapportering eller förseglat bevis? Jamfor anti-spoofing-GPS och kryptografiskt forseglade rapporter.' },
  nb: { title: 'GeoTapp vs Blink - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Blink: tidsregistrering eller forseglet bevis? Sammenlign anti-spoofing GPS og kryptografisk forseglede rapporter.' },
  ru: { title: 'GeoTapp vs Blink - Sravnenie 2026 | GeoTapp', description: 'GeoTapp vs Blink: uchet vremeni ili zapechatyvanie? Sravnenie anti-spoofing GPS i kriptograficheski zapechatannyh otchetov.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza principale tra GeoTapp e Blink?', a: 'Blink è un software molto diffuso tra le imprese di pulizia in Germania: timbratura GPS, QR code, NFC, gestione attività e comunicazione del team. GeoTapp fa un\'altra cosa: documenta ogni intervento con posizione controllata alla timbratura e foto di prova, e lo chiude in un report sigillato che il committente verifica da solo.' },
    { q: 'Blink controlla se la posizione è falsificata?', a: 'Tra le funzioni che Blink dichiara c\'è il confronto della posizione con il luogo di lavoro impostato, non un controllo sulla posizione falsificata. GeoTapp, alla timbratura, rifiuta le posizioni simulate da app di finta posizione, quelle troppo imprecise e gli spostamenti impossibili.' },
    { q: 'Il committente può verificare i report di Blink?', a: 'Blink genera report interni. GeoTapp genera report con sigillo crittografico verificabili dal committente in modo indipendente.' },
    { q: 'Blink è molto diffuso tra le imprese di pulizia tedesche. Perché scegliere GeoTapp?', a: 'Blink è forte nella timbratura e nella comunicazione per le pulizie in Germania. Se però devi mostrare al committente le prove del servizio, in un report dove ogni modifica successiva è rilevabile, serve GeoTapp. Sono strumenti diversi per problemi diversi.' },
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
    { q: 'Quelle est la différence principale entre GeoTapp et Blink ?', a: 'Blink est le logiciel de pointage leader pour le nettoyage de bâtiments en Allemagne : GPS, QR code, NFC, gestion des tâches et communication d\'équipe. GeoTapp va plus loin : c\'est un système de preuve vérifiable qui documente chaque intervention avec un GPS anti-spoofing et des photos scellées cryptographiquement. Le client vérifie le rapport lui-même.' },
    { q: 'Blink dispose-t-il d\'un GPS anti-spoofing ?', a: 'Non. Blink compare la position GPS avec le lieu de travail prédéfini mais ne vérifie pas si la position est réelle ou falsifiée. GeoTapp détecte les tentatives de falsification.' },
    { q: 'Le client peut-il vérifier les rapports de Blink ?', a: 'Blink génère des rapports internes. GeoTapp génère des rapports avec un sceau cryptographique que le client peut vérifier de façon indépendante sur un portail public.' },
    { q: 'Blink est le numéro 1 du nettoyage de bâtiments. Pourquoi choisir GeoTapp ?', a: 'Blink excelle dans le pointage et la communication d\'équipe pour le secteur du nettoyage allemand. Mais si vous devez prouver au client que le service a bien été effectué, avec des preuves dont toute modification est détectable, il vous faut GeoTapp. Ce sont deux outils différents pour deux problèmes différents.' },
  ],
  es: [
    { q: '¿Cuál es la diferencia principal entre GeoTapp y Blink?', a: 'Blink es el software de fichaje líder para la limpieza de edificios en Alemania: GPS, código QR, NFC, gestión de tareas y comunicación de equipo. GeoTapp va más allá: es un sistema de prueba verificable que documenta cada intervención con GPS anti-spoofing y fotos selladas criptográficamente. El cliente lo verifica por sí mismo.' },
    { q: '¿Tiene Blink GPS anti-spoofing?', a: 'No. Blink compara la posición GPS con el lugar de trabajo preconfigurado pero no verifica si la posición es real o falsificada. GeoTapp detecta los intentos de falsificación.' },
    { q: '¿Puede el cliente verificar los informes de Blink?', a: 'Blink genera informes internos. GeoTapp genera informes con sello criptográfico que el cliente puede verificar de forma independiente en un portal público.' },
    { q: 'Blink es el número 1 en limpieza de edificios. ¿Por qué elegir GeoTapp?', a: 'Blink destaca en el fichaje y la comunicación de equipo para el sector de la limpieza alemán. Pero si tienes que demostrar al cliente que el servicio se ha realizado, con pruebas cuya modificación es detectable, necesitas GeoTapp. Son herramientas distintas para problemas distintos.' },
  ],
  pt: [
    { q: 'Qual é a diferença principal entre a GeoTapp e a Blink?', a: 'A Blink é o software de registo de presenças líder para a limpeza de edifícios na Alemanha: GPS, código QR, NFC, gestão de tarefas e comunicação de equipa. A GeoTapp vai mais longe: é um sistema de prova verificável que documenta cada intervenção com GPS anti-spoofing e fotos seladas criptograficamente. O cliente verifica o relatório sozinho.' },
    { q: 'A Blink tem GPS anti-spoofing?', a: 'Não. A Blink compara a posição GPS com o local de trabalho predefinido mas não verifica se a posição é real ou falsificada. A GeoTapp deteta as tentativas de falsificação.' },
    { q: 'O cliente pode verificar os relatórios da Blink?', a: 'A Blink gera relatórios internos. A GeoTapp gera relatórios com selo criptográfico que o cliente pode verificar de forma independente num portal público.' },
    { q: 'A Blink é a número 1 na limpeza de edifícios. Porquê escolher a GeoTapp?', a: 'A Blink destaca-se no registo de presenças e na comunicação de equipa para o setor da limpeza alemão. Mas se precisa de provar ao cliente que o serviço foi realizado, com provas cuja alteração é detetável, precisa da GeoTapp. São ferramentas diferentes para problemas diferentes.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Blink?', a: 'Blink is de toonaangevende tijdregistratiesoftware voor gebouwreiniging in Duitsland: GPS, QR-code, NFC, taakbeheer en teamcommunicatie. GeoTapp gaat verder: het is een systeem voor verzegeld bewijs dat elke opdracht documenteert met anti-spoofing-GPS en cryptografisch verzegelde foto\'s. De opdrachtgever verifieert het rapport zelf.' },
    { q: 'Heeft Blink anti-spoofing-GPS?', a: 'Nee. Blink vergelijkt de GPS-positie met de vooraf ingestelde werklocatie, maar verifieert niet of de positie echt of vervalst is. GeoTapp detecteert pogingen tot vervalsing.' },
    { q: 'Kan de opdrachtgever de rapporten van Blink verifiëren?', a: 'Blink genereert interne rapporten. GeoTapp genereert rapporten met een cryptografisch zegel die de opdrachtgever onafhankelijk kan verifiëren op een openbaar portaal.' },
    { q: 'Blink is nummer 1 in gebouwreiniging. Waarom voor GeoTapp kiezen?', a: 'Blink blinkt uit in tijdregistratie en teamcommunicatie voor de Duitse schoonmaaksector. Maar als je de opdrachtgever moet bewijzen dat de dienst is uitgevoerd, met bewijs waarvan elke wijziging detecteerbaar is, heb je GeoTapp nodig. Verschillende tools voor verschillende problemen.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Blink?', a: 'Blink er den førende software til tidsregistrering for bygningsrengøring i Tyskland: GPS, QR-kode, NFC, opgavestyring og teamkommunikation. GeoTapp går videre: det er et system til forseglet bevis, der dokumenterer hver opgave med anti-spoofing-GPS og kryptografisk forseglede fotos. Kunden verificerer rapporten selv.' },
    { q: 'Har Blink anti-spoofing-GPS?', a: 'Nej. Blink sammenligner GPS-positionen med den forudindstillede arbejdsplads, men verificerer ikke, om positionen er ægte eller forfalsket. GeoTapp opdager forfalskningsforsøg.' },
    { q: 'Kan kunden verificere Blinks rapporter?', a: 'Blink genererer interne rapporter. GeoTapp genererer rapporter med et kryptografisk segl, som kunden uafhængigt kan verificere på en offentlig portal.' },
    { q: 'Blink er nummer 1 inden for bygningsrengøring. Hvorfor vælge GeoTapp?', a: 'Blink er fremragende til tidsregistrering og teamkommunikation for den tyske rengøringsbranche. Men hvis du skal bevise over for kunden, at servicen er udført, med beviser hvor enhver ændring kan opdages, har du brug for GeoTapp. Forskellige værktøjer til forskellige problemer.' },
  ],
  sv: [
    { q: 'Vad är den största skillnaden mellan GeoTapp och Blink?', a: 'Blink är den ledande programvaran för tidsrapportering inom byggnadsstädning i Tyskland: GPS, QR-kod, NFC, uppgiftshantering och teamkommunikation. GeoTapp går längre: det är ett system för förseglat bevis som dokumenterar varje uppdrag med anti-spoofing-GPS och kryptografiskt förseglade foton. Kunden verifierar rapporten själv.' },
    { q: 'Har Blink anti-spoofing-GPS?', a: 'Nej. Blink jämför GPS-positionen med den förinställda arbetsplatsen men verifierar inte om positionen är äkta eller förfalskad. GeoTapp upptäcker förfalskningsförsök.' },
    { q: 'Kan kunden verifiera Blinks rapporter?', a: 'Blink genererar interna rapporter. GeoTapp genererar rapporter med ett kryptografiskt sigill som kunden kan verifiera oberoende på en offentlig portal.' },
    { q: 'Blink är nummer 1 inom byggnadsstädning. Varför välja GeoTapp?', a: 'Blink är utmärkt på tidsrapportering och teamkommunikation för den tyska städbranschen. Men om du måste bevisa för kunden att tjänsten har utförts, med bevis där varje ändring är spårbar, behöver du GeoTapp. Olika verktyg för olika problem.' },
  ],
  nb: [
    { q: 'Hva er den viktigste forskjellen mellom GeoTapp og Blink?', a: 'Blink er den ledende programvaren for tidsregistrering innen bygningsrenhold i Tyskland: GPS, QR-kode, NFC, oppgavestyring og teamkommunikasjon. GeoTapp går lenger: det er et system for forseglet bevis som dokumenterer hvert oppdrag med anti-spoofing-GPS og kryptografisk forseglede bilder. Oppdragsgiveren verifiserer rapporten selv.' },
    { q: 'Har Blink anti-spoofing-GPS?', a: 'Nei. Blink sammenligner GPS-posisjonen med den forhåndsinnstilte arbeidsplassen, men verifiserer ikke om posisjonen er ekte eller forfalsket. GeoTapp oppdager forfalskningsforsøk.' },
    { q: 'Kan oppdragsgiveren verifisere Blinks rapporter?', a: 'Blink genererer interne rapporter. GeoTapp genererer rapporter med et kryptografisk segl som oppdragsgiveren kan verifisere uavhengig på en offentlig portal.' },
    { q: 'Blink er nummer 1 innen bygningsrenhold. Hvorfor velge GeoTapp?', a: 'Blink er utmerket på tidsregistrering og teamkommunikasjon for den tyske renholdsbransjen. Men hvis du må bevise overfor oppdragsgiveren at tjenesten er utført, med bevis hvor enhver endring er sporbar, trenger du GeoTapp. Forskjellige verktøy for forskjellige problemer.' },
  ],
  ru: [
    { q: 'В чём главное отличие GeoTapp от Blink?', a: 'Blink, ведущее ПО для учёта рабочего времени в немецком клининге зданий: GPS, QR-код, NFC, управление задачами и командное общение. GeoTapp идёт дальше: это система опечатывания, которая документирует каждый выезд с анти-спуфинговым GPS и криптографически опечатанными фотографиями. Заказчик проверяет отчёт сам.' },
    { q: 'Есть ли у Blink анти-спуфинговый GPS?', a: 'Нет. Blink сравнивает GPS-позицию с заданным местом работы, но не проверяет, реальна ли позиция или подделана. GeoTapp выявляет попытки подделки.' },
    { q: 'Может ли заказчик проверить отчёты Blink?', a: 'Blink создаёт внутренние отчёты. GeoTapp создаёт отчёты с криптографической печатью, которые заказчик может независимо проверить на публичном портале.' },
    { q: 'Blink, номер 1 в клининге зданий. Почему выбрать GeoTapp?', a: 'Blink превосходно справляется с учётом времени и командным общением в немецком клининге. Но если вам нужно доказать заказчику, что услуга была выполнена, с доказательствами, в которых любое изменение заметно, нужен GeoTapp. Это разные инструменты для разных задач.' },
  ],
};

// Etichette della tabella di confronto, per locale.
const ROWS_LABELS: Record<string, string[]> = {
  it: ['Controllo della posizione alla timbratura (rifiuta posizioni simulate)','Report sigillato crittograficamente','Verifica indipendente da parte del committente','Foto con impronta SHA-256 nel report','Posizione rilevata solo quando si timbra','Timbratura GPS','Timbratura QR code / NFC','Gestione attività','Comunicazione team','Checklist digitali','App Android/iOS','Specializzato in pulizie civili','Informativa GPS firmata nell\'app prima di timbrare*'],
  en: ['Position check at clock-in (rejects simulated positions)','Cryptographically sealed report','Independent verification by the client','Photos with SHA-256 fingerprint in the report','Position recorded only at clock-in','GPS clock-in','QR code / NFC clock-in','Task management','Team communication','Digital checklists','App Android/iOS','Specialised in building cleaning','GPS notice signed in the app before clocking in*'],
  de: ['Positionsprüfung beim Stempeln (weist simulierte Positionen ab)','Kryptographisch versiegelter Bericht','Unabhängige Überprüfung durch den Auftraggeber','Fotos mit SHA-256-Fingerabdruck im Bericht','Position nur beim Stempeln erfasst','GPS-Stempeln','QR-Code- / NFC-Stempeln','Aufgabenverwaltung','Teamkommunikation','Digitale Checklisten','App Android/iOS','Spezialisiert auf Gebäudereinigung','GPS-Information vor dem Stempeln in der App unterschrieben*'],
  fr: ['GPS anti-spoofing (détecte les positions falsifiées)','Rapport scellé cryptographiquement','Vérification indépendante par le client','Photos avec chaîne de hachage cryptographique','Conforme RGPD','Pointage GPS','Pointage QR code / NFC','Gestion des tâches','Communication d\'équipe','Checklists numériques','App Android/iOS','Spécialisé dans le nettoyage de bâtiments','Avis de confidentialité GPS automatique avec signature numérique*'],
  es: ['GPS anti-spoofing (detecta posiciones falsificadas)','Informe sellado criptográficamente','Verificación independiente por el cliente','Fotos con cadena hash criptográfica','Conforme al RGPD','Fichaje GPS','Fichaje QR / NFC','Gestión de tareas','Comunicación de equipo','Checklists digitales','App Android/iOS','Especializado en limpieza de edificios','Aviso de privacidad GPS automático con firma digital*'],
  pt: ['GPS anti-spoofing (deteta posições falsificadas)','Relatório selado criptograficamente','Verificação independente pelo cliente','Fotos com cadeia hash criptográfica','Conforme o RGPD','Registo GPS','Registo QR code / NFC','Gestão de tarefas','Comunicação de equipa','Checklists digitais','App Android/iOS','Especializado em limpeza de edifícios','Aviso de privacidade GPS automático com assinatura digital*'],
  nl: ['Anti-spoofing GPS (detecteert vervalste posities)','Cryptografisch verzegeld rapport','Onafhankelijke verificatie door de klant','Foto\'s met cryptografische hashketen','AVG-conform','GPS-tijdregistratie','QR-code / NFC-registratie','Taakbeheer','Teamcommunicatie','Digitale checklists','App Android/iOS','Gespecialiseerd in gebouwreiniging','Automatische GPS-privacyverklaring met digitale handtekening*'],
  da: ['Anti-spoofing-GPS (registrerer forfalskede positioner)','Kryptografisk forseglet rapport','Uafhængig verificering af kunden','Fotos med kryptografisk hash-kæde','GDPR-kompatibel','GPS-tidsregistrering','QR-kode / NFC-registrering','Opgavestyring','Teamkommunikation','Digitale tjeklister','App Android/iOS','Specialiseret i bygningsrengøring','Automatisk GPS-privatlivserklæring med digital signatur*'],
  sv: ['Anti-spoofing-GPS (upptäcker förfalskade positioner)','Kryptografiskt förseglad rapport','Oberoende verifiering av kunden','Foton med kryptografisk hashkedja','GDPR-kompatibel','GPS-tidsrapportering','QR-kod / NFC-incheckning','Uppgiftshantering','Teamkommunikation','Digitala checklistor','App Android/iOS','Specialiserad på byggnadsstädning','Automatiskt GPS-integritetsmeddelande med digital signatur*'],
  nb: ['Anti-spoofing-GPS (oppdager forfalskede posisjoner)','Kryptografisk forseglet rapport','Uavhengig verifisering av oppdragsgiver','Bilder med kryptografisk hash-kjede','GDPR-kompatibel','GPS-tidsregistrering','QR-kode / NFC-registrering','Oppgavestyring','Teamkommunikasjon','Digitale sjekklister','App Android/iOS','Spesialisert på bygningsrenhold','Automatisk GPS-personvernerklæring med digital signatur*'],
  ru: ['Анти-спуфинг GPS (выявляет подделанные позиции)','Криптографически опечатанный отчёт','Независимая проверка заказчиком','Фото с криптографической хеш-цепочкой','Соответствие GDPR','Учёт времени по GPS','Отметка по QR-коду / NFC','Управление задачами','Командное общение','Цифровые чек-листы','Приложение Android/iOS','Специализация на клининге зданий','Автоматическое уведомление о GPS с цифровой подписью*'],
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
    desc: 'Blink è un software molto diffuso tra le imprese di pulizia in Germania. GeoTapp sigilla ogni intervento: posizione controllata alla timbratura, foto di prova e un report che il committente verifica da solo.',
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
    badge: 'Comparatif d\'applis', h1sub: 'pointage ou preuve vérifiable ?',
    desc: 'Blink est le logiciel numéro 1 pour le nettoyage de bâtiments en Allemagne : GPS, QR code, NFC, gestion des tâches et communication d\'équipe. GeoTapp scelle chaque intervention avec un GPS anti-spoofing, des photos scellées cryptographiquement et des rapports que le client vérifie lui-même.',
    summary: 'En résumé :',
    summaryText: 'Blink excelle dans le pointage et la communication d\'équipe pour le nettoyage en Allemagne. Mais le GPS n\'est pas vérifié (pas d\'anti-spoofing), les photos ne sont pas scellées cryptographiquement et les rapports ne sont pas vérifiables par le client. GeoTapp comble exactement ces lacunes.',
    noteTitle: 'Le pointage GPS n\'est pas la vérification GPS',
    noteText: 'Blink compare la position GPS avec le lieu de travail prédéfini. Mais si un opérateur falsifie le GPS avec une appli gratuite, Blink ne le détecte pas. GeoTapp utilise une technologie anti-spoofing qui croise plusieurs signaux pour détecter les positions falsifiées. De plus, chaque photo est scellée par une chaîne de hachage cryptographique.',
    features: 'Comparaison des fonctionnalités clés', feat: 'Fonctionnalité', diff: 'Deux outils différents',
    cta: 'Envie de voir GeoTapp en action ?',
    ctaDesc: 'Nous vous montrons comment une intervention devient une preuve vérifiable, en 10 minutes, sans engagement.',
    ctaBtn: 'Commencez gratuitement !',
    geo: ['GPS anti-spoofing : détecte les positions falsifiées','Photos scellées par chaîne de hachage cryptographique','Rapport avec sceau cryptographique vérifiable','Le client vérifie lui-même sur un portail public','Pas seulement le nettoyage, tous les secteurs avec intervention terrain'],
    comp: ['Logiciel numéro 1 pour le nettoyage en Allemagne','Pointage GPS + QR code + NFC','Gestion des tâches et checklists numériques','Communication d\'équipe intégrée','Pas d\'anti-spoofing, pas de scellement cryptographique'],
    footnote: '* Selon la loi (RGPD Art. 13), chaque salarié doit signer un avis de confidentialité avant d\'être géolocalisé. La plupart des logiciels GPS ne le gèrent pas : le risque juridique reste à l\'employeur. GeoTapp génère automatiquement l\'avis personnalisé, le fait signer numériquement par le salarié et bloque l\'accès GPS tant qu\'il n\'est pas signé. Aucun autre logiciel sur le marché ne le fait.',
  },
  es: {
    badge: 'Comparativa de apps', h1sub: '¿fichaje o prueba verificable?',
    desc: 'Blink es el software número 1 para la limpieza de edificios en Alemania: GPS, código QR, NFC, gestión de tareas y comunicación de equipo. GeoTapp sella cada intervención con GPS anti-spoofing, fotos selladas criptográficamente e informes que el cliente verifica por sí mismo.',
    summary: 'En resumen:',
    summaryText: 'Blink destaca en el fichaje y la comunicación de equipo para la limpieza en Alemania. Pero el GPS no se verifica (sin anti-spoofing), las fotos no se sellan criptográficamente y los informes no son verificables por el cliente. GeoTapp cubre exactamente estas carencias.',
    noteTitle: 'El fichaje GPS no es verificación GPS',
    noteText: 'Blink compara la posición GPS con el lugar de trabajo configurado. Pero si un operario falsifica el GPS con una app gratuita, Blink no lo detecta. GeoTapp usa tecnología anti-spoofing que cruza varias señales para detectar posiciones falsas. Además, cada foto se sella con una cadena hash criptográfica.',
    features: 'Comparación de funciones clave', feat: 'Función', diff: 'Dos herramientas distintas',
    cta: '¿Quieres ver GeoTapp en acción?',
    ctaDesc: 'Te mostramos cómo una intervención se convierte en una prueba verificable, en 10 minutos, sin compromiso.',
    ctaBtn: '¡Empieza gratis!',
    geo: ['GPS anti-spoofing: detecta posiciones falsificadas','Fotos selladas con cadena hash criptográfica','Informe con sello criptográfico verificable','El cliente lo verifica por sí mismo en un portal público','No solo limpieza, todos los sectores con operarios en campo'],
    comp: ['Software número 1 para limpieza en Alemania','Fichaje GPS + código QR + NFC','Gestión de tareas y checklists digitales','Comunicación de equipo integrada','Sin anti-spoofing, sin sellado criptográfico'],
    footnote: '* Por ley (RGPD Art. 13), cada empleado debe firmar un aviso de privacidad antes de ser geolocalizado. La mayoría del software GPS no lo gestiona: el riesgo legal recae en el empleador. GeoTapp genera automáticamente el aviso personalizado, hace que el empleado lo firme digitalmente y bloquea el acceso GPS hasta que esté firmado. Ningún otro software del mercado lo hace.',
  },
  pt: {
    badge: 'Comparativo de apps', h1sub: 'registo ou prova verificável?',
    desc: 'A Blink é o software número 1 para a limpeza de edifícios na Alemanha: GPS, código QR, NFC, gestão de tarefas e comunicação de equipa. A GeoTapp sela cada intervenção com GPS anti-spoofing, fotos seladas criptograficamente e relatórios que o cliente verifica sozinho.',
    summary: 'Em resumo:',
    summaryText: 'A Blink destaca-se no registo de presenças e na comunicação de equipa para a limpeza na Alemanha. Mas o GPS não é verificado (sem anti-spoofing), as fotos não são seladas criptograficamente e os relatórios não são verificáveis pelo cliente. A GeoTapp colmata exatamente estas lacunas.',
    noteTitle: 'Registo GPS não é verificação GPS',
    noteText: 'A Blink compara a posição GPS com o local de trabalho configurado. Mas se um operador falsificar o GPS com uma app gratuita, a Blink não o deteta. A GeoTapp usa tecnologia anti-spoofing que cruza vários sinais para detetar posições falsas. Além disso, cada foto é selada com uma cadeia hash criptográfica.',
    features: 'Comparação das funcionalidades-chave', feat: 'Funcionalidade', diff: 'Duas ferramentas diferentes',
    cta: 'Quer ver a GeoTapp em ação?',
    ctaDesc: 'Mostramos-lhe como uma intervenção se torna uma prova verificável, em 10 minutos, sem compromisso.',
    ctaBtn: 'Comece grátis!',
    geo: ['GPS anti-spoofing: deteta posições falsificadas','Fotos seladas com cadeia hash criptográfica','Relatório com selo criptográfico verificável','O cliente verifica sozinho num portal público','Não apenas limpeza, todos os setores com operadores no terreno'],
    comp: ['Software número 1 para limpeza na Alemanha','Registo GPS + código QR + NFC','Gestão de tarefas e checklists digitais','Comunicação de equipa integrada','Sem anti-spoofing, sem selagem criptográfica'],
    footnote: '* Por lei (RGPD Art. 13), cada trabalhador deve assinar um aviso de privacidade antes de ser geolocalizado. A maioria do software GPS não trata disto: o risco legal fica com o empregador. A GeoTapp gera automaticamente o aviso personalizado, fá-lo assinar digitalmente pelo trabalhador e bloqueia o acesso GPS até estar assinado. Nenhum outro software no mercado o faz.',
  },
  nl: {
    badge: 'App-vergelijking', h1sub: 'tijdregistratie of verifieerbaar bewijs?',
    desc: 'Blink is de nummer 1 software voor gebouwreiniging in Duitsland: GPS, QR-code, NFC, taakbeheer en teamcommunicatie. GeoTapp verzegelt elke opdracht met anti-spoofing-GPS, cryptografisch verzegelde foto\'s en rapporten die de opdrachtgever zelf verifieert.',
    summary: 'Kort gezegd:',
    summaryText: 'Blink blinkt uit in tijdregistratie en teamcommunicatie voor de schoonmaak in Duitsland. Maar het GPS wordt niet geverifieerd (geen anti-spoofing), foto\'s worden niet cryptografisch verzegeld en de rapporten zijn niet verifieerbaar door de opdrachtgever. GeoTapp dicht precies deze gaten.',
    noteTitle: 'GPS-registratie is geen GPS-verificatie',
    noteText: 'Blink vergelijkt de GPS-positie met de ingestelde werklocatie. Maar als een medewerker het GPS met een gratis app vervalst, detecteert Blink dit niet. GeoTapp gebruikt anti-spoofing-technologie die meerdere signalen combineert om valse posities te detecteren. Bovendien wordt elke foto verzegeld met een cryptografische hashketen.',
    features: 'Vergelijking van kernfuncties', feat: 'Functie', diff: 'Twee verschillende tools',
    cta: 'GeoTapp in actie zien?',
    ctaDesc: 'We laten je zien hoe een opdracht verifieerbaar bewijs wordt, in 10 minuten, vrijblijvend.',
    ctaBtn: 'Begin gratis!',
    geo: ['Anti-spoofing-GPS: detecteert valse posities','Foto\'s verzegeld met cryptografische hashketen','Rapport met verifieerbaar cryptografisch zegel','De opdrachtgever verifieert zelf op een openbaar portaal','Niet alleen schoonmaak, alle sectoren met veldmedewerkers'],
    comp: ['Nummer 1 software voor schoonmaak in Duitsland','GPS + QR-code + NFC tijdregistratie','Taakbeheer en digitale checklists','Geïntegreerde teamcommunicatie','Geen anti-spoofing, geen cryptografische verzegeling'],
    footnote: '* Volgens de wet (AVG Art. 13) moet elke werknemer een privacyverklaring ondertekenen voordat hij wordt gelokaliseerd. De meeste GPS-software regelt dit niet: het juridische risico blijft bij de werkgever. GeoTapp genereert automatisch de gepersonaliseerde verklaring, laat die digitaal ondertekenen door de werknemer en blokkeert de GPS-toegang tot ze ondertekend is. Geen enkele andere software op de markt doet dit.',
  },
  da: {
    badge: 'App-sammenligning', h1sub: 'tidsregistrering eller forseglet bevis?',
    desc: 'Blink er den førende software til bygningsrengøring i Tyskland: GPS, QR-kode, NFC, opgavestyring og teamkommunikation. GeoTapp forsegler hver opgave med anti-spoofing-GPS, kryptografisk forseglede fotos og rapporter, som kunden selv verificerer.',
    summary: 'Kort sagt:',
    summaryText: 'Blink er fremragende til tidsregistrering og teamkommunikation for rengøring i Tyskland. Men GPS\'en verificeres ikke (ingen anti-spoofing), fotos er ikke kryptografisk forseglet, og rapporterne kan ikke verificeres af kunden. GeoTapp lukker netop disse huller.',
    noteTitle: 'GPS-registrering er ikke GPS-verificering',
    noteText: 'Blink sammenligner GPS-positionen med den indstillede arbejdsplads. Men hvis en medarbejder forfalsker GPS\'en med en gratis app, opdager Blink det ikke. GeoTapp bruger anti-spoofing-teknologi, der krydstjekker flere signaler for at opdage falske positioner. Desuden forsegles hvert foto med en kryptografisk hash-kæde.',
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion', diff: 'To forskellige værktøjer',
    cta: 'Vil du se GeoTapp i aktion?',
    ctaDesc: 'Vi viser dig, hvordan en opgave bliver til verificerbart bevis, på 10 minutter, uforpligtende.',
    ctaBtn: 'Kom gratis i gang!',
    geo: ['Anti-spoofing-GPS: registrerer falske positioner','Fotos forseglet med kryptografisk hash-kæde','Rapport med kryptografisk segl og bevisværdi','Kunden verificerer selv på en offentlig portal','Ikke kun rengøring, alle brancher med medarbejdere i marken'],
    comp: ['Den førende software til rengøring i Tyskland','GPS + QR-kode + NFC tidsregistrering','Opgavestyring og digitale tjeklister','Integreret teamkommunikation','Ingen anti-spoofing, ingen kryptografisk forsegling'],
    footnote: '* Ifølge loven (GDPR art. 13) skal hver medarbejder underskrive en privatlivserklæring, før vedkommende geolokaliseres. De fleste GPS-programmer håndterer ikke dette: den juridiske risiko forbliver hos arbejdsgiveren. GeoTapp genererer automatisk den personlige erklæring, får den underskrevet digitalt af medarbejderen og blokerer GPS-adgangen, indtil den er underskrevet. Ingen anden software på markedet gør dette.',
  },
  sv: {
    badge: 'App-jämförelse', h1sub: 'tidrapportering eller förseglat bevis?',
    desc: 'Blink är den ledande programvaran för byggnadsstädning i Tyskland: GPS, QR-kod, NFC, uppgiftshantering och teamkommunikation. GeoTapp förseglar varje uppdrag med anti-spoofing-GPS, kryptografiskt förseglade foton och rapporter som kunden själv verifierar.',
    summary: 'Kort sagt:',
    summaryText: 'Blink är utmärkt på tidsrapportering och teamkommunikation för städning i Tyskland. Men GPS:en verifieras inte (ingen anti-spoofing), foton förseglas inte kryptografiskt och rapporterna kan inte verifieras av kunden. GeoTapp täpper till just dessa luckor.',
    noteTitle: 'GPS-incheckning är inte GPS-verifiering',
    noteText: 'Blink jämför GPS-positionen med den inställda arbetsplatsen. Men om en medarbetare förfalskar GPS:en med en gratisapp upptäcker Blink det inte. GeoTapp använder anti-spoofing-teknik som korsar flera signaler för att upptäcka falska positioner. Dessutom förseglas varje foto med en kryptografisk hashkedja.',
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion', diff: 'Två olika verktyg',
    cta: 'Vill du se GeoTapp i praktiken?',
    ctaDesc: 'Vi visar hur ett uppdrag blir verifierbart bevis, på 10 minuter, utan förpliktelser.',
    ctaBtn: 'Kom igång gratis!',
    geo: ['Anti-spoofing-GPS: upptäcker falska positioner','Foton förseglade med kryptografisk hashkedja','Rapport med kryptografiskt sigill och bevisvärde','Kunden verifierar själv på en offentlig portal','Inte bara städning, alla branscher med fältpersonal'],
    comp: ['Den ledande programvaran för städning i Tyskland','GPS + QR-kod + NFC tidsrapportering','Uppgiftshantering och digitala checklistor','Integrerad teamkommunikation','Ingen anti-spoofing, ingen kryptografisk försegling'],
    footnote: '* Enligt lag (GDPR art. 13) måste varje anställd underteckna ett integritetsmeddelande innan han eller hon geolokaliseras. De flesta GPS-program hanterar inte detta: den juridiska risken stannar hos arbetsgivaren. GeoTapp genererar automatiskt det personliga meddelandet, låter den anställde signera det digitalt och blockerar GPS-åtkomsten tills det är signerat. Ingen annan programvara på marknaden gör detta.',
  },
  nb: {
    badge: 'App-sammenligning', h1sub: 'tidsregistrering eller forseglet bevis?',
    desc: 'Blink er den ledende programvaren for bygningsrenhold i Tyskland: GPS, QR-kode, NFC, oppgavestyring og teamkommunikasjon. GeoTapp forsegler hvert oppdrag med anti-spoofing-GPS, kryptografisk forseglede bilder og rapporter som oppdragsgiveren selv verifiserer.',
    summary: 'Kort sagt:',
    summaryText: 'Blink er utmerket på tidsregistrering og teamkommunikasjon for renhold i Tyskland. Men GPS-en verifiseres ikke (ingen anti-spoofing), bilder forsegles ikke kryptografisk og rapportene kan ikke verifiseres av oppdragsgiveren. GeoTapp tetter nettopp disse hullene.',
    noteTitle: 'GPS-registrering er ikke GPS-verifisering',
    noteText: 'Blink sammenligner GPS-posisjonen med den innstilte arbeidsplassen. Men hvis en medarbeider forfalsker GPS-en med en gratis app, oppdager ikke Blink det. GeoTapp bruker anti-spoofing-teknologi som krysskobler flere signaler for å oppdage falske posisjoner. I tillegg forsegles hvert bilde med en kryptografisk hash-kjede.',
    features: 'Sammenligning av nøkkelfunksjoner', feat: 'Funksjon', diff: 'To forskjellige verktøy',
    cta: 'Vil du se GeoTapp i aksjon?',
    ctaDesc: 'Vi viser deg hvordan et oppdrag blir til verifiserbart bevis, på 10 minutter, uforpliktende.',
    ctaBtn: 'Kom i gang gratis!',
    geo: ['Anti-spoofing-GPS: oppdager falske posisjoner','Bilder forseglet med kryptografisk hash-kjede','Rapport med kryptografisk segl og bevisverdi','Oppdragsgiveren verifiserer selv på en offentlig portal','Ikke bare renhold, alle bransjer med feltpersonell'],
    comp: ['Den ledende programvaren for renhold i Tyskland','GPS + QR-kode + NFC tidsregistrering','Oppgavestyring og digitale sjekklister','Integrert teamkommunikasjon','Ingen anti-spoofing, ingen kryptografisk forsegling'],
    footnote: '* Ifølge loven (GDPR art. 13) må hver ansatt signere en personvernerklæring før vedkommende geolokaliseres. De fleste GPS-programmer håndterer ikke dette: den juridiske risikoen blir hos arbeidsgiveren. GeoTapp genererer automatisk den personlige erklæringen, lar den ansatte signere den digitalt og blokkerer GPS-tilgangen til den er signert. Ingen annen programvare på markedet gjør dette.',
  },
  ru: {
    badge: 'Сравнение приложений', h1sub: 'учёт времени или запечатывание?',
    desc: 'Blink, ПО номер 1 для клининга зданий в Германии: GPS, QR-код, NFC, управление задачами и командное общение. GeoTapp запечатывает каждый выезд анти-спуфинговым GPS, криптографически опечатанными фотографиями и отчётами, которые заказчик проверяет сам.',
    summary: 'Коротко:',
    summaryText: 'Blink превосходно справляется с учётом времени и командным общением для клининга в Германии. Но GPS не проверяется (нет анти-спуфинга), фотографии не опечатываются криптографически, а отчёты не проверяемы заказчиком. GeoTapp закрывает именно эти пробелы.',
    noteTitle: 'Отметка по GPS, это не проверка GPS',
    noteText: 'Blink сравнивает GPS-позицию с заданным местом работы. Но если работник подделает GPS бесплатным приложением, Blink этого не обнаружит. GeoTapp использует анти-спуфинговую технологию, которая сопоставляет несколько сигналов для выявления поддельных позиций. Кроме того, каждое фото опечатывается криптографической хеш-цепочкой.',
    features: 'Сравнение ключевых функций', feat: 'Функция', diff: 'Два разных инструмента',
    cta: 'Хотите увидеть GeoTapp в действии?',
    ctaDesc: 'Покажем, как выезд превращается в проверяемое доказательство, за 10 минут, без обязательств.',
    ctaBtn: 'Начните бесплатно!',
    geo: ['Анти-спуфинг GPS: выявляет поддельные позиции','Фото опечатаны криптографической хеш-цепочкой','Отчёт с проверяемой криптографической печатью','Заказчик проверяет сам на публичном портале','Не только клининг, все отрасли с выездными сотрудниками'],
    comp: ['ПО номер 1 для клининга в Германии','Учёт времени по GPS + QR-код + NFC','Управление задачами и цифровые чек-листы','Встроенное командное общение','Нет анти-спуфинга, нет криптографической печати'],
    footnote: '* По закону (GDPR ст. 13) каждый сотрудник должен подписать уведомление о конфиденциальности перед геолокацией. Большинство GPS-программ это не обеспечивают: юридический риск остаётся на работодателе. GeoTapp автоматически создаёт персональное уведомление, даёт сотруднику подписать его цифровой подписью и блокирует доступ к GPS, пока оно не подписано. Ни одна другая программа на рынке этого не делает.',
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
