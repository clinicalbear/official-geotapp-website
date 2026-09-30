import type { Metadata } from 'next';
import ComparisonPageL from '@/components/ComparisonPageL';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-libemax/';
const ARTICLE_DATE_PUBLISHED = '2026-02-01';
const ARTICLE_DATE_MODIFIED = '2026-05-23';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs Libemax - Confronto 2026 | GeoTapp', description: 'GeoTapp vs Libemax Rilevazione Presenze: geofence o controllo della posizione falsa? Confronto su timbratura, report sigillati crittograficamente e foto di prova in cui ogni modifica successiva è rilevabile.' },
  en: { title: 'GeoTapp vs Libemax - Comparison 2026 | GeoTapp', description: 'GeoTapp vs Libemax attendance app: geofence or fake-location check? Comparison on clock-in, cryptographically sealed reports and proof photos in which every later change is detectable.' },
  de: { title: 'GeoTapp vs Libemax - Vergleich 2026 | GeoTapp', description: 'GeoTapp vs Libemax Zeiterfassung: Geofence oder Prüfung auf gefälschte Positionen? Vergleich von Stempeln, kryptographisch versiegelten Berichten und Nachweisfotos, bei denen jede spätere Änderung erkennbar ist.' },
  nl: { title: 'GeoTapp vs Libemax - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence of controle op valse locaties? Vergelijking op registratie, verzegelde rapporten en bewijsfoto\'s.' },
  fr: { title: 'GeoTapp vs Libemax - Comparatif 2026 | GeoTapp', description: 'GeoTapp vs Libemax : géorepérage ou contrôle de la fausse position ? Comparatif du pointage, des rapports scellés cryptographiquement et des photos de preuve.' },
  es: { title: 'GeoTapp vs Libemax - Comparación 2026 | GeoTapp', description: 'GeoTapp vs Libemax: ¿geofence o control de la posición falsa? Comparación del fichaje, de los informes sellados criptográficamente y de las fotos de prueba.' },
  pt: { title: 'GeoTapp vs Libemax - Comparação 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence ou anti-spoofing? Compare GPS verificado, relatórios selados criptograficamente e provas fotográficas cuja alteração é detetável.' },
  da: { title: 'GeoTapp vs Libemax - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence eller anti-spoofing? Sammenlign verificeret GPS, kryptografisk forseglede rapporter og fotobeviser hvor enhver ændring kan opdages.' },
  sv: { title: 'GeoTapp vs Libemax - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence eller anti-spoofing? Jämför verifierad GPS, kryptografiskt förseglade rapporter och fotobevis där varje ändring är spårbar.' },
  nb: { title: 'GeoTapp vs Libemax - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence eller anti-spoofing? Sammenlign verifisert GPS, kryptografisk forseglede rapporter og fotobevis hvor enhver endring er sporbar.' },
  ru: { title: 'GeoTapp vs Libemax, Сравнение 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence или анти-спуфинг? Сравните проверенный GPS, криптографически опечатанные отчёты и фотодоказательства, в которых любое изменение заметно.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza tra il geofence di Libemax e il controllo di GeoTapp sulla posizione?', a: 'Il geofence controlla che il dispositivo sia dentro un perimetro predefinito, ma la posizione stessa si può falsificare con un\'app gratuita. GeoTapp, alla timbratura, controlla anche la posizione: rifiuta quelle simulate da app di finta posizione, quelle troppo imprecise e gli spostamenti impossibili. È la differenza tra controllare dove il telefono dice di essere e controllare se quel dato è credibile.' },
    { q: 'Libemax ha 200.000 download. GeoTapp è affidabile?', a: 'Libemax è un\'ottima app di rilevazione presenze con una base utenti consolidata. GeoTapp risolve un problema diverso: non solo registra le presenze ma sigilla il lavoro in un report dove ogni modifica successiva è rilevabile. Sono due categorie diverse di strumento.' },
    { q: 'Perché le foto di GeoTapp sono diverse da quelle di Libemax?', a: 'Libemax permette di allegare foto ai rapportini. In GeoTapp ogni foto entra nel report con la sua impronta SHA-256, sigillata insieme al resto: se qualcuno modifica la foto anche di un pixel, la verifica lo segnala. Le foto di GeoTapp sono prove verificabili, non semplici allegati.' },
    { q: 'GeoTapp o Libemax per cooperative sociali e imprese di pulizie?', a: 'Se l\'obiettivo è la sola rilevazione presenze con NFC e geofence, Libemax è una scelta solida. Se l\'obiettivo è avere una prova da mostrare quando un cliente contesta, con report in cui ogni modifica successiva è rilevabile, serve GeoTapp: il committente controlla tutto da solo, senza doverti credere sulla parola.' },
  ],
  en: [
    { q: 'What is the difference between the Libemax geofence and GeoTapp\'s check on the position?', a: 'A geofence checks that the device is inside a predefined perimeter, but the position itself can be faked with a free app. At clock-in GeoTapp also checks the position: it rejects positions simulated by fake-location apps, positions that are too imprecise and impossible jumps. It is the difference between checking where the phone says it is and checking whether that data is credible.' },
    { q: 'Libemax has 200,000 downloads. Is GeoTapp reliable?', a: 'Libemax is an excellent attendance app with an established user base. GeoTapp solves a different problem: it does not just record attendance but seals the work in a report where every later change is detectable. They are two different categories of tool.' },
    { q: 'Why are GeoTapp photos different from Libemax photos?', a: 'Libemax lets you attach photos to reports. In GeoTapp every photo goes into the report with its SHA-256 fingerprint, sealed together with the rest: if anyone changes the photo by even one pixel, the check flags it. GeoTapp photos are verifiable proof, not simple attachments.' },
    { q: 'GeoTapp or Libemax for social cooperatives and cleaning companies?', a: 'If the goal is attendance tracking alone, with NFC and geofence, Libemax is a solid choice. If the goal is proof to show when a client disputes the work, with reports in which every later change is detectable, you need GeoTapp: the client checks everything alone, without having to take your word for it.' },
  ],
  de: [
    { q: 'Was unterscheidet den Geofence von Libemax von der Positionsprüfung von GeoTapp?', a: 'Der Geofence prüft, ob das Gerät innerhalb eines vorgegebenen Bereichs ist, aber die Position selbst lässt sich mit einer kostenlosen App fälschen. GeoTapp prüft beim Stempeln auch die Position: Es weist Positionen ab, die von Fake-Location-Apps simuliert wurden, zu ungenaue Positionen und unmögliche Ortssprünge. Das ist der Unterschied zwischen der Prüfung, wo das Telefon zu sein behauptet, und der Prüfung, ob diese Angabe glaubwürdig ist.' },
    { q: 'Libemax hat 200.000 Downloads. Ist GeoTapp zuverlässig?', a: 'Libemax ist eine gute Zeiterfassungs-App mit einer gefestigten Nutzerbasis. GeoTapp löst ein anderes Problem: Es erfasst nicht nur die Anwesenheit, sondern versiegelt die Arbeit in einem Bericht, in dem jede spätere Änderung erkennbar ist. Das sind zwei verschiedene Werkzeugkategorien.' },
    { q: 'Warum unterscheiden sich die Fotos von GeoTapp von denen von Libemax?', a: 'Libemax erlaubt es, Fotos an Tätigkeitsberichte anzuhängen. In GeoTapp kommt jedes Foto mit seinem SHA-256-Fingerabdruck in den Bericht, zusammen mit allem anderen versiegelt: Wird das Foto auch nur um ein Pixel verändert, meldet das die Prüfung. Die Fotos von GeoTapp sind überprüfbare Nachweise, keine einfachen Anhänge.' },
    { q: 'GeoTapp oder Libemax für Sozialgenossenschaften und Reinigungsfirmen?', a: 'Wenn es nur um Zeiterfassung mit NFC und Geofence geht, ist Libemax eine solide Wahl. Wenn Sie einen Nachweis brauchen, den Sie bei einer Kundenbeanstandung vorlegen können, mit Berichten, in denen jede spätere Änderung erkennbar ist, brauchen Sie GeoTapp: Der Auftraggeber prüft alles selbst, ohne Ihnen aufs Wort glauben zu müssen.' },
  ],
  fr: [
    { q: 'Quelle est la différence entre le géorepérage de Libemax et le contrôle de la position par GeoTapp ?', a: 'Le géorepérage vérifie que l\'appareil se trouve dans un périmètre prédéfini, mais la position elle-même peut être falsifiée avec une appli gratuite. Au pointage, GeoTapp contrôle aussi la position : il refuse celles qui sont simulées par des applis de fausse localisation, celles qui sont trop imprécises et les déplacements impossibles. C\'est la différence entre contrôler où le téléphone dit être et contrôler si cette donnée est crédible.' },
    { q: 'Libemax compte 200 000 téléchargements. GeoTapp est-il fiable ?', a: 'Libemax est une très bonne appli de suivi des présences, avec une base d\'utilisateurs solide. GeoTapp résout un problème différent : il ne se contente pas d\'enregistrer les présences, il scelle le travail dans un rapport où toute modification ultérieure est détectable. Ce sont deux catégories d\'outils différentes.' },
    { q: 'Pourquoi les photos de GeoTapp sont-elles différentes de celles de Libemax ?', a: 'Libemax permet de joindre des photos aux comptes rendus. Dans GeoTapp, chaque photo entre dans le rapport avec son empreinte SHA-256, scellée avec le reste : si quelqu\'un modifie la photo, ne serait-ce que d\'un pixel, la vérification le signale. Les photos de GeoTapp sont des preuves vérifiables, pas de simples pièces jointes.' },
    { q: 'GeoTapp ou Libemax pour les coopératives sociales et les entreprises de nettoyage ?', a: 'Si l\'objectif est le seul suivi des présences avec NFC et géorepérage, Libemax est un choix solide. Si l\'objectif est d\'avoir une preuve à montrer quand un client conteste, avec un rapport où toute modification ultérieure est détectable, il faut GeoTapp : le client contrôle tout lui-même, sans avoir à vous croire sur parole.' },
  ],
  es: [
    { q: '¿Cuál es la diferencia entre el geofence de Libemax y el control de la posición de GeoTapp?', a: 'El geofence comprueba que el dispositivo esté dentro de un perímetro predefinido, pero la posición en sí se puede falsificar con una app gratuita. Al fichar, GeoTapp controla también la posición: rechaza las simuladas con apps de ubicación falsa, las demasiado imprecisas y los desplazamientos imposibles. Es la diferencia entre comprobar dónde dice estar el teléfono y comprobar si ese dato es creíble.' },
    { q: 'Libemax tiene 200.000 descargas. ¿Es GeoTapp fiable?', a: 'Libemax es una muy buena app de control de presencia, con una base de usuarios consolidada. GeoTapp resuelve un problema distinto: no se limita a registrar las presencias, sino que sella el trabajo en un informe en el que cualquier modificación posterior es detectable. Son dos categorías de herramienta distintas.' },
    { q: '¿Por qué las fotos de GeoTapp son distintas de las de Libemax?', a: 'Libemax permite adjuntar fotos a los partes de trabajo. En GeoTapp cada foto entra en el informe con su huella SHA-256, sellada junto con el resto: si alguien modifica la foto, aunque sea un píxel, la verificación lo señala. Las fotos de GeoTapp son pruebas verificables, no simples adjuntos.' },
    { q: '¿GeoTapp o Libemax para cooperativas sociales y empresas de limpieza?', a: 'Si el objetivo es solo el control de presencia con NFC y geofence, Libemax es una opción sólida. Si el objetivo es tener una prueba que enseñar cuando un cliente reclama, con un informe en el que cualquier modificación posterior es detectable, hace falta GeoTapp: el cliente lo comprueba todo por sí mismo, sin tener que creerte de palabra.' },
  ],
  pt: [
    { q: 'Qual é a diferença entre o geofence da Libemax e o anti-spoofing da GeoTapp?', a: 'O geofence da Libemax apenas verifica se o dispositivo está dentro de um perímetro predefinido, mas a própria posição GPS pode ser falsificada com uma app gratuita. O anti-spoofing da GeoTapp vai mais longe: cruza vários sinais para verificar que a posição é real e não simulada. É a diferença entre confirmar onde o telemóvel diz estar e verificar onde o telemóvel está realmente.' },
    { q: 'A Libemax tem 200.000 downloads. A GeoTapp é fiável?', a: 'A Libemax é uma excelente app de registo de presenças com uma base de utilizadores consolidada. A GeoTapp resolve um problema diferente: sela o trabalho com provas cuja alteração é detetável. Duas categorias diferentes, como comparar um cronómetro com um notário.' },
    { q: 'Porque é que as fotos da GeoTapp são diferentes das da Libemax?', a: 'A Libemax permite anexar fotos aos relatórios. A GeoTapp sela cada foto com uma cadeia hash criptográfica no momento da captura: se alguém alterar a foto, nem que seja um pixel, o selo quebra-se e o sistema deteta-o. As fotos da GeoTapp são provas verificáveis, não simples anexos.' },
    { q: 'GeoTapp ou Libemax para cooperativas sociais e empresas de limpeza?', a: 'Se o objetivo é apenas o registo de presenças com NFC e geofence, a Libemax é uma escolha sólida. Se o objetivo é eliminar as contestações dos clientes com relatórios verificáveis e provas cuja alteração é detetável, a GeoTapp é a única solução, porque o cliente pode verificar tudo sozinho, sem ter de acreditar na sua palavra.' },
  ],
  nl: [
    { q: 'Wat is het verschil tussen de geofence van Libemax en de controle van GeoTapp op de locatie?', a: 'De geofence controleert of het apparaat binnen een vooraf bepaalde omtrek is, maar de locatie zelf is met een gratis app te vervalsen. GeoTapp controleert bij de registratie ook de locatie zelf: het weigert locaties die door nep-locatie-apps zijn gesimuleerd, te onnauwkeurige locaties en onmogelijke verplaatsingen. Het is het verschil tussen controleren waar de telefoon zegt te zijn en controleren of dat gegeven geloofwaardig is.' },
    { q: 'Libemax heeft 200.000 downloads. Is GeoTapp betrouwbaar?', a: 'Libemax is een uitstekende app voor aanwezigheidsregistratie met een gevestigde gebruikersbasis. GeoTapp lost een ander probleem op: het legt niet alleen de aanwezigheid vast maar verzegelt het werk in een rapport waarin elke latere wijziging zichtbaar is. Het zijn twee verschillende categorieën hulpmiddelen.' },
    { q: 'Waarom zijn de foto\'s van GeoTapp anders dan die van Libemax?', a: 'Libemax laat toe foto\'s aan de werkbonnen te hechten. In GeoTapp komt elke foto in het rapport met haar SHA-256-vingerafdruk, samen met de rest verzegeld: wijzigt iemand de foto, al is het maar één pixel, dan meldt de controle het. De foto\'s van GeoTapp zijn controleerbaar bewijs, geen simpele bijlagen.' },
    { q: 'GeoTapp of Libemax voor sociale coöperaties en schoonmaakbedrijven?', a: 'Is het doel alleen aanwezigheidsregistratie met NFC en geofence, dan is Libemax een solide keuze. Is het doel een bewijs te hebben om te tonen wanneer een klant iets betwist, met rapporten waarin elke latere wijziging zichtbaar is, dan hebt u GeoTapp nodig: de opdrachtgever controleert alles zelf, zonder dat hij u op uw woord hoeft te geloven.' },
  ],
  da: [
    { q: 'Hvad er forskellen mellem Libemax\' geofence og GeoTapps anti-spoofing?', a: 'Libemax\' geofence kontrollerer kun, om enheden er inden for en foruddefineret perimeter, men selve GPS-positionen kan forfalskes med en gratis app. GeoTapps anti-spoofing går videre: den krydstjekker flere signaler for at verificere, at positionen er ægte og ikke simuleret. Det er forskellen mellem at tjekke, hvor telefonen siger, den er, og at verificere, hvor telefonen virkelig er.' },
    { q: 'Libemax har 200.000 downloads. Er GeoTapp pålidelig?', a: 'Libemax er en fremragende app til tidsregistrering med et solidt brugergrundlag. GeoTapp løser et andet problem: den forsegler arbejde med beviser hvor enhver ændring kan opdages. To forskellige kategorier, som at sammenligne et stopur med en notar.' },
    { q: 'Hvorfor er GeoTapps fotos anderledes end Libemax\' fotos?', a: 'Libemax tillader at vedhæfte fotos til rapporter. GeoTapp forsegler hvert foto med en kryptografisk hash-kæde i selve optagelsesøjeblikket: ændrer nogen fotoet bare med én pixel, brydes seglet, og systemet opdager det. GeoTapps fotos er beviser med bevisværdi, ikke blot vedhæftninger.' },
    { q: 'GeoTapp eller Libemax til sociale kooperativer og rengøringsfirmaer?', a: 'Til ren tidsregistrering med NFC og geofence er Libemax et solidt valg. Til at fjerne kundeklager med verificerbare rapporter og beviser hvor enhver ændring kan opdages, er GeoTapp den eneste løsning, for kunden kan tjekke alt selv uden at skulle tage dig på ordet.' },
  ],
  sv: [
    { q: 'Vad är skillnaden mellan Libemax geofence och GeoTapps anti-spoofing?', a: 'Libemax geofence kontrollerar bara om enheten befinner sig inom en fördefinierad perimeter, men själva GPS-positionen kan förfalskas med en gratisapp. GeoTapps anti-spoofing går längre: den korsar flera signaler för att verifiera att positionen är äkta och inte simulerad. Det är skillnaden mellan att kontrollera var telefonen säger att den är och att verifiera var telefonen verkligen är.' },
    { q: 'Libemax har 200 000 nedladdningar. Är GeoTapp pålitligt?', a: 'Libemax är en utmärkt app för tidsrapportering med en stabil användarbas. GeoTapp löser ett annat problem: den förseglar arbete med bevis där varje ändring är spårbar. Två olika kategorier, som att jämföra ett stoppur med en notarie.' },
    { q: 'Varför skiljer sig GeoTapps foton från Libemax foton?', a: 'Libemax tillåter att bifoga foton till rapporter. GeoTapp förseglar varje foto med en kryptografisk hashkedja i själva tagningsögonblicket: om någon ändrar fotot ens med en pixel bryts förseglingen och systemet upptäcker det. GeoTapps foton är bevis med bevisvärde, inte enkla bilagor.' },
    { q: 'GeoTapp eller Libemax för sociala kooperativ och städföretag?', a: 'För enbart tidsrapportering med NFC och geofence är Libemax ett solitt val. För att eliminera kundtvister med verifierbara rapporter och bevis där varje ändring är spårbar är GeoTapp den enda lösningen, eftersom uppdragsgivaren kan kontrollera allt själv, utan att behöva ta dig på orden.' },
  ],
  nb: [
    { q: 'Hva er forskjellen mellom Libemax sin geofence og GeoTapp sin anti-spoofing?', a: 'Libemax sin geofence sjekker bare om enheten er innenfor en forhåndsdefinert perimeter, men selve GPS-posisjonen kan forfalskes med en gratis app. GeoTapp sin anti-spoofing går lenger: den krysskobler flere signaler for å verifisere at posisjonen er ekte og ikke simulert. Det er forskjellen mellom å sjekke hvor telefonen sier den er, og å verifisere hvor telefonen virkelig er.' },
    { q: 'Libemax har 200 000 nedlastinger. Er GeoTapp pålitelig?', a: 'Libemax er en utmerket app for tidsregistrering med en solid brukerbase. GeoTapp løser et annet problem: den forsegler arbeid med bevis hvor enhver endring er sporbar. To forskjellige kategorier, som å sammenligne en stoppeklokke med en notar.' },
    { q: 'Hvorfor er GeoTapp sine bilder annerledes enn Libemax sine?', a: 'Libemax lar deg legge ved bilder til rapportene. GeoTapp forsegler hvert bilde med en kryptografisk hash-kjede i selve det øyeblikket bildet tas: endrer noen bildet med bare én piksel, brytes seglet og systemet oppdager det. GeoTapp sine bilder er bevis med bevisverdi, ikke enkle vedlegg.' },
    { q: 'GeoTapp eller Libemax for sosiale samvirkeforetak og renholdsbedrifter?', a: 'For ren tidsregistrering med NFC og geofence er Libemax et solid valg. For å fjerne kundeklager med verifiserbare rapporter og bevis hvor enhver endring er sporbar, er GeoTapp den eneste løsningen, fordi oppdragsgiveren kan kontrollere alt selv, uten å måtte tro deg på ordet.' },
  ],
  ru: [
    { q: 'В чём разница между геозоной Libemax и анти-спуфингом GeoTapp?', a: 'Геозона Libemax лишь проверяет, находится ли устройство внутри заданного периметра, но саму GPS-позицию можно подделать бесплатным приложением. Анти-спуфинг GeoTapp идёт дальше: он сопоставляет несколько сигналов, чтобы убедиться, что позиция настоящая, а не смоделированная. Это разница между тем, чтобы проверить, где телефон якобы находится, и тем, чтобы убедиться, где он на самом деле.' },
    { q: 'У Libemax 200 000 загрузок. Надёжен ли GeoTapp?', a: 'Libemax, отличное приложение для учёта присутствия с устоявшейся базой пользователей. GeoTapp решает другую задачу: он запечатывает работу доказательствами, в которых любое изменение заметно. Это две разные категории, как сравнивать секундомер с нотариусом.' },
    { q: 'Почему фотографии GeoTapp отличаются от фотографий Libemax?', a: 'Libemax позволяет прикреплять фото к отчётам. GeoTapp опечатывает каждое фото криптографической хеш-цепочкой в самый момент съёмки: если кто-то изменит фото хотя бы на один пиксель, печать ломается и система это обнаруживает. Фотографии GeoTapp, это проверяемые доказательства, а не простые вложения.' },
    { q: 'GeoTapp или Libemax для социальных кооперативов и клининговых компаний?', a: 'Если цель, только учёт присутствия с NFC и геозоной, Libemax, надёжный выбор. Если цель, устранить претензии клиентов с помощью проверяемых отчётов и доказательств, в которых любое изменение заметно, GeoTapp, единственное решение, потому что заказчик может проверить всё сам, не веря вам на слово.' },
  ],
};

// Etichette della tabella di confronto, per locale.
const ROWS_LABELS: Record<string, string[]> = {
  it: ['Controllo della posizione alla timbratura (rifiuta posizioni simulate)','Report sigillato crittograficamente','Verifica indipendente da parte del committente','Foto con impronta SHA-256 nel report','Posizione rilevata solo quando si timbra','Timbratura GPS','Timbratura QR code / NFC / Bluetooth','Geofence (perimetro)','Checklist e audit','App mobile Android/iOS','Dashboard gestione team','Settori: pulizie, edilizia, cooperative','Informativa GPS firmata nell\'app prima di timbrare*'],
  en: ['Position check at clock-in (rejects simulated positions)','Cryptographically sealed report','Independent verification by the client','Photos with SHA-256 fingerprint in the report','Position recorded only at clock-in','GPS clock-in','QR code / NFC / Bluetooth clock-in','Geofence (perimeter)','Checklists and audits','Mobile app Android/iOS','Team management dashboard','Sectors: cleaning, construction, cooperatives','GPS notice signed in the app before clocking in*'],
  de: ['Positionsprüfung beim Stempeln (weist simulierte Positionen ab)','Kryptographisch versiegelter Bericht','Unabhängige Überprüfung durch den Auftraggeber','Fotos mit SHA-256-Fingerabdruck im Bericht','Position nur beim Stempeln erfasst','GPS-Stempeln','QR-Code- / NFC- / Bluetooth-Stempeln','Geofence (Bereich)','Checklisten und Audits','Mobile App Android/iOS','Dashboard zur Teamverwaltung','Branchen: Reinigung, Bau, Genossenschaften','GPS-Information vor dem Stempeln in der App unterschrieben*'],
  fr: ['Contrôle de la position au pointage (refuse les positions simulées)','Rapport scellé cryptographiquement','Vérification indépendante par le client','Photos avec empreinte SHA-256 dans le rapport','Position relevée uniquement au pointage','Pointage GPS','Pointage par QR code / NFC / Bluetooth','Géorepérage (périmètre)','Checklists et audits','App mobile Android/iOS','Tableau de bord de gestion d\'équipe','Secteurs : nettoyage, bâtiment, coopératives','Information GPS signée dans l\'app avant de pointer*'],
  es: ['Control de la posición al fichar (rechaza posiciones simuladas)','Informe sellado criptográficamente','Verificación independiente por parte del cliente','Fotos con huella SHA-256 en el informe','Posición registrada solo al fichar','Fichaje GPS','Fichaje por QR / NFC / Bluetooth','Geofence (perímetro)','Checklists y auditorías','App móvil Android/iOS','Panel de gestión de equipos','Sectores: limpieza, construcción, cooperativas','Aviso GPS firmado en la app antes de fichar*'],
  pt: ['GPS anti-spoofing (deteta posições falsificadas)','Relatório selado criptograficamente','Verificação independente pelo cliente','Fotos com cadeia hash criptográfica','Conforme o RGPD','Registo GPS','Registo QR code / NFC / Bluetooth','Geofence (perímetro)','Checklists e auditorias','App móvel Android/iOS','Painel de gestão de equipas','Setores: limpeza, construção, cooperativas','Aviso de privacidade GPS automático com assinatura digital*'],
  nl: ['Controle van de locatie bij de registratie (weigert gesimuleerde locaties)','Cryptografisch verzegeld rapport','Onafhankelijke controle door de opdrachtgever','Foto\'s met SHA-256-vingerafdruk in het rapport','Locatie alleen bij het registreren','Gps-registratie','Registratie met QR-code / NFC / Bluetooth','Geofence (omtrek)','Checklists en audits','Mobiele app voor Android/iOS','Dashboard voor teambeheer','Sectoren: schoonmaak, bouw, coöperaties','GPS-verklaring ondertekend in de app vóór het registreren*'],
  da: ['Anti-spoofing-GPS (registrerer forfalskede positioner)','Kryptografisk forseglet rapport','Uafhængig verificering af kunden','Fotos med kryptografisk hash-kæde','GDPR-kompatibel','GPS-registrering','QR-kode / NFC / Bluetooth-registrering','Geofence (perimeter)','Tjeklister og audits','Mobilapp Android/iOS','Dashboard til teamstyring','Brancher: rengøring, byggeri, kooperativer','Automatisk GPS-privatlivserklæring med digital signatur*'],
  sv: ['Anti-spoofing-GPS (upptäcker förfalskade positioner)','Kryptografiskt förseglad rapport','Oberoende verifiering av kunden','Foton med kryptografisk hashkedja','GDPR-kompatibel','GPS-incheckning','QR-kod / NFC / Bluetooth-incheckning','Geofence (perimeter)','Checklistor och revisioner','Mobilapp Android/iOS','Instrumentpanel för teamhantering','Branscher: städ, bygg, kooperativ','Automatiskt GPS-integritetsmeddelande med digital signatur*'],
  nb: ['Anti-spoofing-GPS (oppdager forfalskede posisjoner)','Kryptografisk forseglet rapport','Uavhengig verifisering av oppdragsgiver','Bilder med kryptografisk hash-kjede','GDPR-kompatibel','GPS-registrering','QR-kode / NFC / Bluetooth-registrering','Geofence (perimeter)','Sjekklister og revisjoner','Mobilapp Android/iOS','Dashbord for teamstyring','Bransjer: renhold, bygg, samvirkeforetak','Automatisk GPS-personvernerklæring med digital signatur*'],
  ru: ['Анти-спуфинг GPS (выявляет подделанные позиции)','Криптографически опечатанный отчёт','Независимая проверка заказчиком','Фото с криптографической хеш-цепочкой','Соответствие GDPR','Отметка по GPS','Отметка по QR-коду / NFC / Bluetooth','Геозона (периметр)','Чек-листы и аудиты','Мобильное приложение Android/iOS','Панель управления командой','Отрасли: клининг, строительство, кооперативы','Автоматическое уведомление о GPS с цифровой подписью*'],
};

// Valori riverificati sul prodotto il 30/09/2026: niente QR/NFC, niente checklist; i prezzi sono pubblici.
const ROWS_GEO =  [true,true,true,true,true,true,false,true,false,true,true,true,true];
const ROWS_COMP = [false,false,false,false,true,true,true,true,true,true,true,true,false];

// Riassunto neutro ed estraibile, subito sotto la tabella: frase fattuale citabile
// dai motori AI senza doverla ricostruire dalla tabella. Neutro per scelta: la
// neutralita' e' cio' che ci fa citare, niente superlativi.
const TABLE_TAKEAWAY: Record<string, string> = {
  it: 'In breve: Libemax verifica la presenza con il geofence; GeoTapp aggiunge il controllo della posizione falsa alla timbratura, il report sigillato e la verifica del cliente, pensati per quando qualcuno contesta.',
  en: 'In short: Libemax checks presence with a geofence; GeoTapp adds the check for a fake position at clock-in, the sealed report and client verification, built for when someone disputes the work.',
  de: 'Kurz gesagt: Libemax prüft die Anwesenheit mit dem Geofence; GeoTapp ergänzt die Prüfung auf gefälschte Positionen beim Stempeln, den versiegelten Bericht und die Überprüfung durch den Kunden, gedacht für den Fall, dass jemand etwas bestreitet.',
  fr: 'En bref : Libemax vérifie la présence avec le géorepérage ; GeoTapp ajoute le contrôle de la fausse position au pointage, le rapport scellé et la vérification par le client, pensés pour le moment où quelqu\'un conteste.',
  es: 'En resumen: Libemax verifica la presencia con el geofence; GeoTapp añade el control de la posición falsa al fichar, el informe sellado y la verificación del cliente, pensados para cuando alguien reclama.',
  pt: 'Em resumo: a Libemax verifica a presença com geofencing; a GeoTapp acrescenta o anti-spoofing do GPS, o relatório selado e a verificação do cliente, feitos para resistir a uma contestação.',
  nl: 'Kort gezegd: Libemax controleert de aanwezigheid met de geofence; GeoTapp voegt de controle op een valse locatie bij de registratie toe, het verzegelde rapport en de controle door de klant, bedoeld voor wanneer iemand iets betwist.',
  da: 'Kort sagt: Libemax kontrollerer tilstedeværelse med geofencing; GeoTapp tilføjer GPS-anti-spoofing, den forseglede rapport og kundeverificering, bygget til at holde i en tvist.',
  sv: 'Kort sagt: Libemax kontrollerar närvaro med geofencing; GeoTapp lägger till GPS-anti-spoofing, den förseglade rapporten och kundverifiering, byggt för att hålla i en tvist.',
  nb: 'Kort sagt: Libemax sjekker tilstedeværelse med geofencing; GeoTapp legger til GPS-anti-spoofing, den forseglede rapporten og kundeverifisering, laget for å holde i en tvist.',
  ru: 'Коротко: Libemax проверяет присутствие через геозону; GeoTapp добавляет защиту GPS от подмены, защищённый отчёт и проверку заказчиком, рассчитанные выдержать спор.',
};

type Copy = {
  badge: string; h1sub: string; desc: string; summary: string; summaryText: string;
  noteTitle: string; noteText: string; features: string; feat: string; diff: string;
  cta: string; ctaDesc: string; ctaBtn: string; geo: string[]; comp: string[]; footnote: string;
};

const T: Record<string, Copy> = {
  it: {
    badge: 'Confronto App', h1sub: 'geofence o controllo della posizione falsa?',
    desc: 'Libemax è un\'app di rilevazione presenze molto scaricata in Italia, con oltre 200.000 download. GeoTapp è un sistema di prova del lavoro: controlla la posizione alla timbratura e chiude tutto in un report dove ogni modifica successiva è rilevabile. Due approcci diversi allo stesso problema.',
    summary: 'In sintesi:',
    summaryText: 'Libemax eccelle nella rilevazione presenze con molteplici metodi (GPS, QR, NFC, Bluetooth, geofence). Ma il geofence controlla solo il perimetro, non se la posizione è vera. GeoTapp, alla timbratura, rifiuta le posizioni simulate; le foto entrano nel report con la loro impronta, e il committente verifica il report da solo.',
    noteTitle: 'Un perimetro non dice se la posizione è vera',
    noteText: 'Il geofence controlla se lo smartphone è dentro un perimetro predefinito. Ma se la posizione è falsificata con un\'app, il geofence viene ingannato: il telefono dice di essere dentro il perimetro anche se è a chilometri di distanza. GeoTapp alla timbratura guarda proprio questo: rifiuta le posizioni simulate, quelle troppo imprecise e gli spostamenti impossibili, non solo le coordinate fuori dall\'area.',
    features: 'Confronto funzionalità chiave', feat: 'Funzionalità', diff: 'Due filosofie diverse',
    cta: 'Vuoi vedere GeoTapp in azione?',
    ctaDesc: 'Provalo su un intervento vero: 14 giorni gratis, senza carta di credito.',
    ctaBtn: 'Inizia la prova gratuita',
    geo: ['Alla timbratura rifiuta le posizioni simulate','Foto con impronta SHA-256 dentro il report','Report con sigillo crittografico verificabile','Il committente verifica da solo','Prova verificabile, non solo rilevazione'],
    comp: ['200.000+ download, 6.000+ aziende','GPS + QR + NFC + Bluetooth + geofence','Geofence: controlla il perimetro, non se la posizione è vera','Checklist e audit per cantieri','Rilevazione presenze, non prova verificabile'],
    footnote: '* Per legge (art. 13 GDPR e, in Italia, art. 4 dello Statuto dei Lavoratori) ogni dipendente va informato prima di essere geolocalizzato. Se il software lascia questo passaggio al titolare, il rischio resta a lui. GeoTapp prepara l\'informativa personalizzata, la fa firmare per presa visione nell\'app e non lascia timbrare finché non è firmata.',
  },
  en: {
    badge: 'App Comparison', h1sub: 'geofence or fake-location check?',
    desc: 'Libemax is a widely downloaded attendance app in Italy, with over 200,000 downloads. GeoTapp is a proof-of-work system: it checks the position at clock-in and closes everything in a report where every later change is detectable. Two different approaches to the same problem.',
    summary: 'Bottom line:',
    summaryText: 'Libemax excels at attendance tracking with multiple methods (GPS, QR, NFC, Bluetooth, geofence). But a geofence only checks the perimeter, not whether the position is real. At clock-in GeoTapp rejects simulated positions; photos go into the report with their fingerprint, and the client verifies the report alone.',
    noteTitle: 'A perimeter does not tell you whether the position is real',
    noteText: 'A geofence checks whether the smartphone is inside a predefined perimeter. But if the position is faked with an app, the geofence is fooled: the phone says it is inside the perimeter even if it is miles away. At clock-in GeoTapp looks at exactly this: it rejects simulated positions, positions that are too imprecise and impossible jumps, not just coordinates outside the area.',
    features: 'Key features comparison', feat: 'Feature', diff: 'Two different philosophies',
    cta: 'Want to see GeoTapp in action?',
    ctaDesc: 'Try it on a real job: 14 days free, no credit card.',
    ctaBtn: 'Start the free trial',
    geo: ['At clock-in it rejects simulated positions','Photos with SHA-256 fingerprint inside the report','Report with a verifiable cryptographic seal','The client verifies alone','Verifiable proof, not just attendance'],
    comp: ['200,000+ downloads, 6,000+ companies','GPS + QR + NFC + Bluetooth + geofence','Geofence: checks the perimeter, not whether the position is real','Checklists and audits for building sites','Attendance tracking, not verifiable proof'],
    footnote: '* By law (Art. 13 GDPR and, in Italy, Art. 4 of the Workers\' Statute), every employee must be informed before being geolocated. If the software leaves this step to the employer, the risk stays with them. GeoTapp prepares the personalised notice, has it signed for acknowledgement in the app and does not let staff clock in until it is signed.',
  },
  de: {
    badge: 'App-Vergleich', h1sub: 'Geofence oder Prüfung auf gefälschte Positionen?',
    desc: 'Libemax ist eine in Italien viel heruntergeladene Zeiterfassungs-App mit über 200.000 Downloads. GeoTapp ist ein System für den Arbeitsnachweis: Es prüft die Position beim Stempeln und schließt alles in einem Bericht ab, in dem jede spätere Änderung erkennbar ist. Zwei verschiedene Ansätze für dasselbe Problem.',
    summary: 'Kurz gesagt:',
    summaryText: 'Libemax überzeugt bei der Zeiterfassung mit mehreren Methoden (GPS, QR, NFC, Bluetooth, Geofence). Aber der Geofence prüft nur den Bereich, nicht, ob die Position echt ist. GeoTapp weist beim Stempeln simulierte Positionen ab; die Fotos kommen mit ihrem Fingerabdruck in den Bericht, und der Auftraggeber überprüft den Bericht selbst.',
    noteTitle: 'Ein Bereich sagt nicht, ob die Position echt ist',
    noteText: 'Der Geofence prüft, ob das Smartphone innerhalb eines vorgegebenen Bereichs ist. Ist die Position aber mit einer App gefälscht, wird der Geofence getäuscht: Das Telefon meldet sich im Bereich, obwohl es kilometerweit entfernt ist. GeoTapp schaut beim Stempeln genau darauf: Es weist simulierte Positionen ab, zu ungenaue Positionen und unmögliche Ortssprünge, nicht nur Koordinaten außerhalb des Bereichs.',
    features: 'Vergleich der wichtigsten Funktionen', feat: 'Funktion', diff: 'Zwei verschiedene Philosophien',
    cta: 'Möchten Sie GeoTapp in Aktion sehen?',
    ctaDesc: 'Testen Sie es an einem echten Einsatz: 14 Tage kostenlos, keine Kreditkarte.',
    ctaBtn: 'Kostenlos testen',
    geo: ['Weist beim Stempeln simulierte Positionen ab','Fotos mit SHA-256-Fingerabdruck im Bericht','Bericht mit überprüfbarem kryptographischem Siegel','Der Auftraggeber prüft selbst','Überprüfbarer Nachweis, nicht nur Erfassung'],
    comp: ['Über 200.000 Downloads, über 6.000 Unternehmen','GPS + QR + NFC + Bluetooth + Geofence','Geofence: prüft den Bereich, nicht, ob die Position echt ist','Checklisten und Audits für Baustellen','Zeiterfassung, kein überprüfbarer Nachweis'],
    footnote: '* Nach geltendem Recht (Art. 13 DSGVO und in Italien Art. 4 des Arbeitnehmerstatuts) muss jeder Mitarbeiter informiert werden, bevor er geortet wird. Überlässt die Software diesen Schritt dem Arbeitgeber, bleibt das Risiko bei ihm. GeoTapp erstellt die personalisierte Information, lässt sie in der App zur Kenntnisnahme unterschreiben und lässt erst danach das Stempeln zu.',
  },
  fr: {
    badge: 'Comparatif d\'applis',
    h1sub: 'géorepérage ou contrôle de la fausse position ?',
    desc: 'Libemax est une appli de suivi des présences très téléchargée en Italie, avec plus de 200 000 téléchargements. GeoTapp est un système de preuve du travail : il contrôle la position au pointage et clôt le tout dans un rapport où toute modification ultérieure est détectable. Deux approches différentes du même problème.',
    summary: 'En résumé :',
    summaryText: 'Libemax excelle dans le suivi des présences avec de multiples méthodes (GPS, QR, NFC, Bluetooth, géorepérage). Mais le géorepérage ne contrôle que le périmètre, pas si la position est réelle. Au pointage, GeoTapp refuse les positions simulées ; les photos entrent dans le rapport avec leur empreinte, et le client vérifie le rapport lui-même.',
    noteTitle: 'Un périmètre ne dit pas si la position est réelle',
    noteText: 'Le géorepérage vérifie si le smartphone se trouve dans un périmètre prédéfini. Mais si la position est falsifiée avec une appli, le géorepérage est trompé : le téléphone affirme être dans le périmètre alors qu\'il est à des kilomètres. C\'est précisément ce que GeoTapp regarde au pointage : il refuse les positions simulées, celles qui sont trop imprécises et les déplacements impossibles, pas seulement les coordonnées hors de la zone.',
    features: 'Comparaison des fonctionnalités clés',
    feat: 'Fonctionnalité',
    diff: 'Deux philosophies différentes',
    cta: 'Envie de voir GeoTapp en action ?',
    ctaDesc: 'Essayez-le sur une intervention réelle : 14 jours gratuits, sans carte bancaire.',
    ctaBtn: 'Commencer l\'essai gratuit',
    geo: ['Au pointage, refuse les positions simulées','Photos avec empreinte SHA-256 dans le rapport','Rapport avec sceau cryptographique vérifiable','Le client vérifie lui-même','Une preuve vérifiable, pas seulement un suivi des présences'],
    comp: ['Plus de 200 000 téléchargements, plus de 6 000 entreprises','GPS + QR + NFC + Bluetooth + géorepérage','Géorepérage : contrôle le périmètre, pas si la position est réelle','Checklists et audits pour les chantiers','Suivi des présences, pas une preuve vérifiable'],
    footnote: '* Selon la loi (art. 13 du RGPD et, en Italie, art. 4 du Statut des travailleurs), chaque salarié doit être informé avant d\'être géolocalisé. Si le logiciel laisse cette étape à l\'employeur, le risque lui reste. GeoTapp prépare l\'information personnalisée, la fait signer pour prise de connaissance dans l\'app et ne laisse pas pointer tant qu\'elle n\'est pas signée.',
  },
  es: {
    badge: 'Comparativa de apps', h1sub: '¿geofence o control de la posición falsa?',
    desc: 'Libemax es una app de control de presencia muy descargada en Italia, con más de 200.000 descargas. GeoTapp es un sistema de prueba del trabajo: controla la posición al fichar y lo cierra todo en un informe en el que cualquier modificación posterior es detectable. Dos enfoques distintos del mismo problema.',
    summary: 'En resumen:',
    summaryText: 'Libemax destaca en el control de presencia con múltiples métodos (GPS, QR, NFC, Bluetooth, geofence). Pero el geofence solo controla el perímetro, no si la posición es real. Al fichar, GeoTapp rechaza las posiciones simuladas; las fotos entran en el informe con su huella y el cliente verifica el informe por sí mismo.',
    noteTitle: 'Un perímetro no dice si la posición es real',
    noteText: 'El geofence comprueba si el smartphone está dentro de un perímetro predefinido. Pero si la posición se falsifica con una app, el geofence se engaña: el teléfono dice estar dentro del perímetro aunque esté a kilómetros. Es justo lo que GeoTapp mira al fichar: rechaza las posiciones simuladas, las demasiado imprecisas y los desplazamientos imposibles, no solo las coordenadas fuera del área.',
    features: 'Comparación de funciones clave', feat: 'Función', diff: 'Dos filosofías distintas',
    cta: '¿Quieres ver GeoTapp en acción?',
    ctaDesc: 'Pruébalo en una intervención real: 14 días gratis, sin tarjeta de crédito.',
    ctaBtn: 'Empieza la prueba gratuita',
    geo: ['Al fichar rechaza las posiciones simuladas','Fotos con huella SHA-256 dentro del informe','Informe con sello criptográfico verificable','El cliente lo verifica por sí mismo','Prueba verificable, no solo control de presencia'],
    comp: ['200.000+ descargas, 6.000+ empresas','GPS + QR + NFC + Bluetooth + geofence','Geofence: controla el perímetro, no si la posición es real','Checklists y auditorías para obras','Control de presencia, no prueba verificable'],
    footnote: '* Por ley (art. 13 del RGPD y, en Italia, art. 4 del Estatuto de los Trabajadores italiano) hay que informar a cada empleado antes de geolocalizarlo. Si el software deja este paso en manos del titular, el riesgo sigue siendo suyo. GeoTapp prepara el aviso personalizado, lo hace firmar en la app como recibido y no deja fichar hasta que está firmado.',
  },
  pt: {
    badge: 'Comparativo de apps', h1sub: 'geofence ou anti-spoofing?',
    desc: 'A Libemax é a app de registo de presenças mais descarregada em Itália, com mais de 200.000 downloads. A GeoTapp é um sistema de prova verificável do trabalho com GPS anti-spoofing e relatórios cuja alteração é detetável. Duas abordagens radicalmente diferentes para o mesmo problema.',
    summary: 'Em resumo:',
    summaryText: 'A Libemax destaca-se no registo de presenças com vários métodos (GPS, QR, NFC, Bluetooth, geofence). Mas o geofence só verifica o perímetro, não se a posição é real. A GeoTapp vai mais longe: o anti-spoofing verifica que o GPS é autêntico, as fotos são seladas criptograficamente e o relatório é verificável, o cliente verifica-o sozinho.',
    noteTitle: 'Geofence não é anti-spoofing',
    noteText: 'O geofence da Libemax controla se o smartphone está dentro de um perímetro predefinido. Mas se a posição GPS for falsificada com uma app, o geofence também é enganado: o telemóvel diz estar dentro do perímetro mesmo estando a quilómetros. O anti-spoofing da GeoTapp deteta precisamente isto: verifica que o sinal GPS é autêntico, não apenas que as coordenadas caem dentro de uma área.',
    features: 'Comparação das funcionalidades-chave', feat: 'Funcionalidade', diff: 'Duas filosofias diferentes',
    cta: 'Quer ver a GeoTapp em ação?',
    ctaDesc: 'Mostramos-lhe como uma intervenção se torna uma prova verificável, em 10 minutos, sem compromisso.',
    ctaBtn: 'Comece grátis!',
    geo: ['GPS anti-spoofing: verifica que a posição é real','Fotos seladas com cadeia hash criptográfica','Relatório com selo criptográfico verificável','O cliente verifica sozinho','Prova verificável, não apenas registo de presenças'],
    comp: ['200.000+ downloads, 6.000+ empresas','GPS + QR + NFC + Bluetooth + geofence','Geofence: controla o perímetro (não a autenticidade GPS)','Checklists e auditorias para obras','Registo de presenças, não prova verificável'],
    footnote: '* Por lei (RGPD Art. 13), cada trabalhador deve assinar um aviso de privacidade antes de ser geolocalizado. A maioria do software GPS não trata disto: o risco legal fica com o empregador. A GeoTapp gera automaticamente o aviso personalizado, fá-lo assinar digitalmente pelo trabalhador e bloqueia o acesso GPS até estar assinado. Nenhum outro software no mercado o faz.',
  },
  nl: {
    badge: 'App-vergelijking',
    h1sub: 'geofence of controle op valse locaties?',
    desc: 'Libemax is een app voor aanwezigheidsregistratie die in Italië veel is gedownload, met meer dan 200.000 downloads. GeoTapp is een systeem voor bewijs van het werk: het controleert de locatie bij de registratie en sluit alles af in een rapport waarin elke latere wijziging zichtbaar is. Twee benaderingen van hetzelfde probleem.',
    summary: 'Kort gezegd:',
    summaryText: 'Libemax blinkt uit in aanwezigheidsregistratie met meerdere methoden (gps, QR, NFC, Bluetooth, geofence). Maar de geofence controleert alleen de omtrek, niet of de locatie echt is. GeoTapp weigert bij de registratie gesimuleerde locaties; de foto\'s komen in het rapport met hun vingerafdruk, en de opdrachtgever controleert het rapport zelf.',
    noteTitle: 'Een omtrek zegt niet of de locatie echt is',
    noteText: 'De geofence controleert of de smartphone binnen een vooraf bepaalde omtrek is. Maar wordt de locatie met een app vervalst, dan wordt de geofence misleid: de telefoon zegt binnen de omtrek te zijn, ook als hij kilometers verderop is. GeoTapp kijkt bij de registratie juist daarnaar: het weigert gesimuleerde locaties, te onnauwkeurige locaties en onmogelijke verplaatsingen, niet alleen coördinaten buiten het gebied.',
    features: 'Vergelijking van de belangrijkste functies',
    feat: 'Functie',
    diff: 'Twee verschillende filosofieën',
    cta: 'Wilt u GeoTapp in actie zien?',
    ctaDesc: 'Probeer het op een echte klus: 14 dagen gratis, zonder creditcard.',
    ctaBtn: 'Start de gratis proefperiode',
    geo: ['Weigert bij de registratie gesimuleerde locaties','Foto\'s met SHA-256-vingerafdruk in het rapport','Rapport met controleerbare cryptografische verzegeling','De opdrachtgever controleert zelf','Controleerbaar bewijs, niet alleen registratie'],
    comp: ['200.000+ downloads, 6.000+ bedrijven','Gps + QR + NFC + Bluetooth + geofence','Geofence: controleert de omtrek, niet of de locatie echt is','Checklists en audits voor bouwplaatsen','Aanwezigheidsregistratie, geen controleerbaar bewijs'],
    footnote: '* Volgens de wet (art. 13 AVG en, in Italië, art. 4 van het arbeidsstatuut) moet elke werknemer worden geïnformeerd voordat hij wordt gelokaliseerd. Laat de software deze stap aan de verantwoordelijke over, dan blijft het risico bij hem. GeoTapp maakt de persoonlijke privacyverklaring klaar, laat die in de app voor kennisgeving ondertekenen en laat niet registreren totdat ze is ondertekend.',
  },
  da: {
    badge: 'App-sammenligning', h1sub: 'geofence eller anti-spoofing?',
    desc: 'Libemax er den mest downloadede app til tidsregistrering i Italien med over 200.000 downloads. GeoTapp er et system til forseglet arbejdsbevis med anti-spoofing-GPS og rapporter hvor enhver ændring kan opdages. To grundlæggende forskellige tilgange til det samme problem.',
    summary: 'Kort sagt:',
    summaryText: 'Libemax er fremragende til tidsregistrering med flere metoder (GPS, QR, NFC, Bluetooth, geofence). Men geofence kontrollerer kun perimeteren, ikke om positionen er ægte. GeoTapp går videre: anti-spoofing verificerer, at GPS\'en er autentisk, fotos forsegles kryptografisk, og rapporten har bevisværdi, kunden verificerer den selv.',
    noteTitle: 'Geofence er ikke anti-spoofing',
    noteText: 'Libemax\' geofence kontrollerer, om smartphonen er inden for en foruddefineret perimeter. Men hvis GPS-positionen forfalskes med en app, narres geofencen også: telefonen siger, den er inden for perimeteren, selvom den er kilometer væk. GeoTapps anti-spoofing opdager netop dette: den verificerer, at GPS-signalet er ægte, ikke bare at koordinaterne falder inden for et område.',
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion', diff: 'To forskellige filosofier',
    cta: 'Vil du se GeoTapp i aktion?',
    ctaDesc: 'Vi viser dig, hvordan en opgave bliver til verificerbart bevis, på 10 minutter, uforpligtende.',
    ctaBtn: 'Kom gratis i gang!',
    geo: ['Anti-spoofing-GPS: verificerer, at positionen er ægte','Fotos forseglet med kryptografisk hash-kæde','Rapport med kryptografisk segl og bevisværdi','Kunden verificerer selv','Verificerbart bevis, ikke kun tidsregistrering'],
    comp: ['200.000+ downloads, 6.000+ virksomheder','GPS + QR + NFC + Bluetooth + geofence','Geofence: kontrollerer perimeteren (ikke GPS-ægthed)','Tjeklister og audits til byggepladser','Tidsregistrering, ikke verificerbart bevis'],
    footnote: '* Ifølge loven (GDPR art. 13) skal hver medarbejder underskrive en privatlivserklæring, før vedkommende geolokaliseres. De fleste GPS-programmer håndterer ikke dette: den juridiske risiko forbliver hos arbejdsgiveren. GeoTapp genererer automatisk den personlige erklæring, får den underskrevet digitalt af medarbejderen og blokerer GPS-adgangen, indtil den er underskrevet. Ingen anden software på markedet gør dette.',
  },
  sv: {
    badge: 'App-jämförelse', h1sub: 'geofence eller anti-spoofing?',
    desc: 'Libemax är den mest nedladdade appen för tidsrapportering i Italien med över 200 000 nedladdningar. GeoTapp är ett system för förseglat arbetsbevis med anti-spoofing-GPS och rapporter där varje ändring är spårbar. Två fundamentalt olika sätt att lösa samma problem.',
    summary: 'Kort sagt:',
    summaryText: 'Libemax är utmärkt på tidsrapportering med flera metoder (GPS, QR, NFC, Bluetooth, geofence). Men geofence kontrollerar bara perimetern, inte om positionen är äkta. GeoTapp går längre: anti-spoofing verifierar att GPS:en är autentisk, foton förseglas kryptografiskt och rapporten har bevisvärde, kunden verifierar den själv.',
    noteTitle: 'Geofence är inte anti-spoofing',
    noteText: 'Libemax geofence kontrollerar om smarttelefonen är inom en fördefinierad perimeter. Men om GPS-positionen förfalskas med en app luras även geofencen: telefonen säger att den är inom perimetern även om den är flera kilometer bort. GeoTapps anti-spoofing upptäcker just detta: den verifierar att GPS-signalen är äkta, inte bara att koordinaterna hamnar inom ett område.',
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion', diff: 'Två olika filosofier',
    cta: 'Vill du se GeoTapp i praktiken?',
    ctaDesc: 'Vi visar hur ett uppdrag blir verifierbart bevis, på 10 minuter, utan förpliktelser.',
    ctaBtn: 'Kom igång gratis!',
    geo: ['Anti-spoofing-GPS: verifierar att positionen är äkta','Foton förseglade med kryptografisk hashkedja','Rapport med kryptografiskt sigill och bevisvärde','Kunden verifierar själv','Förseglat bevis, inte bara tidsrapportering'],
    comp: ['200 000+ nedladdningar, 6 000+ företag','GPS + QR + NFC + Bluetooth + geofence','Geofence: kontrollerar perimetern (inte GPS-äkthet)','Checklistor och revisioner för byggarbetsplatser','Tidsrapportering, inte förseglat bevis'],
    footnote: '* Enligt lag (GDPR art. 13) måste varje anställd underteckna ett integritetsmeddelande innan han eller hon geolokaliseras. De flesta GPS-program hanterar inte detta: den juridiska risken stannar hos arbetsgivaren. GeoTapp genererar automatiskt det personliga meddelandet, låter den anställde signera det digitalt och blockerar GPS-åtkomsten tills det är signerat. Ingen annan programvara på marknaden gör detta.',
  },
  nb: {
    badge: 'App-sammenligning', h1sub: 'geofence eller anti-spoofing?',
    desc: 'Libemax er den mest nedlastede appen for tidsregistrering i Italia med over 200 000 nedlastinger. GeoTapp er et system for forseglet arbeidsbevis med anti-spoofing-GPS og rapporter hvor enhver endring er sporbar. To grunnleggende forskjellige tilnærminger til det samme problemet.',
    summary: 'Kort sagt:',
    summaryText: 'Libemax er utmerket på tidsregistrering med flere metoder (GPS, QR, NFC, Bluetooth, geofence). Men geofence kontrollerer bare perimeteren, ikke om posisjonen er ekte. GeoTapp går lenger: anti-spoofing verifiserer at GPS-en er autentisk, bilder forsegles kryptografisk og rapporten har bevisverdi, oppdragsgiveren verifiserer den selv.',
    noteTitle: 'Geofence er ikke anti-spoofing',
    noteText: 'Libemax sin geofence kontrollerer om smarttelefonen er innenfor en forhåndsdefinert perimeter. Men hvis GPS-posisjonen forfalskes med en app, lures også geofencen: telefonen sier den er innenfor perimeteren selv om den er kilometer unna. GeoTapp sin anti-spoofing oppdager nettopp dette: den verifiserer at GPS-signalet er ekte, ikke bare at koordinatene faller innenfor et område.',
    features: 'Sammenligning av nøkkelfunksjoner', feat: 'Funksjon', diff: 'To forskjellige filosofier',
    cta: 'Vil du se GeoTapp i aksjon?',
    ctaDesc: 'Vi viser deg hvordan et oppdrag blir til verifiserbart bevis, på 10 minutter, uforpliktende.',
    ctaBtn: 'Kom i gang gratis!',
    geo: ['Anti-spoofing-GPS: verifiserer at posisjonen er ekte','Bilder forseglet med kryptografisk hash-kjede','Rapport med kryptografisk segl og bevisverdi','Oppdragsgiveren verifiserer selv','Verifiserbart bevis, ikke bare tidsregistrering'],
    comp: ['200 000+ nedlastinger, 6 000+ bedrifter','GPS + QR + NFC + Bluetooth + geofence','Geofence: kontrollerer perimeteren (ikke GPS-ekthet)','Sjekklister og revisjoner for byggeplasser','Tidsregistrering, ikke verifiserbart bevis'],
    footnote: '* Ifølge loven (GDPR art. 13) må hver ansatt signere en personvernerklæring før vedkommende geolokaliseres. De fleste GPS-programmer håndterer ikke dette: den juridiske risikoen blir hos arbeidsgiveren. GeoTapp genererer automatisk den personlige erklæringen, lar den ansatte signere den digitalt og blokkerer GPS-tilgangen til den er signert. Ingen annen programvare på markedet gjør dette.',
  },
  ru: {
    badge: 'Сравнение приложений', h1sub: 'geofence или анти-спуфинг?',
    desc: 'Libemax, самое скачиваемое приложение для учёта присутствия в Италии, более 200 000 загрузок. GeoTapp, это система опечатывания работы с анти-спуфинговым GPS и отчётами, в которых любое изменение заметно. Два принципиально разных подхода к одной задаче.',
    summary: 'Коротко:',
    summaryText: 'Libemax превосходно справляется с учётом присутствия множеством методов (GPS, QR, NFC, Bluetooth, геозона). Но геозона проверяет только периметр, а не то, реальна ли позиция. GeoTapp идёт дальше: анти-спуфинг проверяет подлинность GPS, фотографии опечатываются криптографически, а отчёт можно проверить, заказчик проверяет его сам.',
    noteTitle: 'Геозона, это не анти-спуфинг',
    noteText: 'Геозона Libemax проверяет, находится ли смартфон внутри заданного периметра. Но если GPS-позицию подделать приложением, геозону тоже обманывают: телефон утверждает, что он внутри периметра, даже если он за километры. Анти-спуфинг GeoTapp выявляет именно это: он проверяет, что GPS-сигнал подлинный, а не просто что координаты попадают в область.',
    features: 'Сравнение ключевых функций', feat: 'Функция', diff: 'Две разные философии',
    cta: 'Хотите увидеть GeoTapp в действии?',
    ctaDesc: 'Покажем, как работа превращается в проверяемое доказательство, за 10 минут, без обязательств.',
    ctaBtn: 'Начните бесплатно!',
    geo: ['Анти-спуфинг GPS: проверяет, что позиция реальна','Фото опечатаны криптографической хеш-цепочкой','Отчёт с проверяемой криптографической печатью','Заказчик проверяет сам','Проверяемое доказательство, а не просто учёт присутствия'],
    comp: ['200 000+ загрузок, 6 000+ компаний','GPS + QR + NFC + Bluetooth + геозона','Геозона: проверяет периметр (не подлинность GPS)','Чек-листы и аудиты для стройплощадок','Учёт присутствия, а не проверяемое доказательство'],
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

export default async function GeoTappVsLibemaxPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = localizeEnglishDeep(T[locale] ?? T.en, locale);
  const faqItems = localizeEnglishDeep(FAQ[locale] ?? FAQ.en, locale);
  const labels = localizeEnglishDeep(ROWS_LABELS[locale] ?? ROWS_LABELS.en, locale);
  const tableTakeaway = localizeEnglishDeep(TABLE_TAKEAWAY[locale] ?? TABLE_TAKEAWAY.en, locale);
  const rows = labels.map((feature, i) => ({ feature, geotapp: ROWS_GEO[i], competitor: ROWS_COMP[i] }));

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  const breadcrumb = buildComparisonBreadcrumb({ locale, pathname: PATHNAME, competitorName: 'Libemax' });
  const meta = localizeEnglishDeep(META[locale] ?? META.en, locale);
  const article = buildComparisonArticle({ locale, pathname: PATHNAME, headline: meta.title, description: meta.description, datePublished: ARTICLE_DATE_PUBLISHED, dateModified: ARTICLE_DATE_MODIFIED });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ComparisonPageL
        locale={locale}
        competitorName="Libemax"
        competitorId="libemax"
        badge={t.badge}
        h1sub={t.h1sub}
        desc={t.desc}
        summaryLabel={t.summary}
        summaryText={t.summaryText}
        featuresTitle={t.features}
        featureColLabel={t.feat}
        tableTakeaway={tableTakeaway}
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
