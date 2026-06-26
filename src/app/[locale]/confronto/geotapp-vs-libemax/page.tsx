import type { Metadata } from 'next';
import { TrialCTALink } from '@/components/analytics/TrialCTALink';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-libemax/';
const ARTICLE_DATE_PUBLISHED = '2026-02-01';
const ARTICLE_DATE_MODIFIED = '2026-05-23';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs Libemax - Confronto 2026 | GeoTapp', description: 'GeoTapp vs Libemax Rilevazione Presenze: geofence o anti-spoofing? Confronto su GPS verificato, report sigillati crittograficamente e prove fotografiche non alterabili.' },
  en: { title: 'GeoTapp vs Libemax - Comparison 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence or anti-spoofing? Compare verified GPS, cryptographically sealed reports and tamper-proof photo evidence.' },
  de: { title: 'GeoTapp vs Libemax - Vergleich 2026 | GeoTapp', description: 'GeoTapp vs Libemax: Geofence oder Anti-Spoofing? Vergleich von verifiziertem GPS, kryptographisch versiegelten Berichten und fälschungssicheren Fotobeweisen.' },
  nl: { title: 'GeoTapp vs Libemax - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence of anti-spoofing? Vergelijk geverifieerd GPS, cryptografisch verzegelde rapporten en manipulatiebestendig fotobewijs.' },
  fr: { title: 'GeoTapp vs Libemax - Comparaison 2026 | GeoTapp', description: 'GeoTapp vs Libemax : geofence ou anti-spoofing ? Comparez GPS vérifié, rapports scellés cryptographiquement et preuves photographiques infalsifiables.' },
  es: { title: 'GeoTapp vs Libemax - Comparación 2026 | GeoTapp', description: 'GeoTapp vs Libemax: ¿geofence o anti-spoofing? Compara GPS verificado, informes sellados criptográficamente y pruebas fotográficas inalterables.' },
  pt: { title: 'GeoTapp vs Libemax - Comparação 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence ou anti-spoofing? Compare GPS verificado, relatórios selados criptograficamente e provas fotográficas inalteráveis.' },
  da: { title: 'GeoTapp vs Libemax - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence eller anti-spoofing? Sammenlign verificeret GPS, kryptografisk forseglede rapporter og fotobeviser, der ikke kan ændres.' },
  sv: { title: 'GeoTapp vs Libemax - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence eller anti-spoofing? Jämför verifierad GPS, kryptografiskt förseglade rapporter och fotobevis som inte kan ändras.' },
  nb: { title: 'GeoTapp vs Libemax - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence eller anti-spoofing? Sammenlign verifisert GPS, kryptografisk forseglede rapporter og fotobevis som ikke kan endres.' },
  ru: { title: 'GeoTapp vs Libemax, Сравнение 2026 | GeoTapp', description: 'GeoTapp vs Libemax: geofence или анти-спуфинг? Сравните проверенный GPS, криптографически опечатанные отчёты и фотодоказательства, которые нельзя подделать.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza tra il geofence di Libemax e l\'anti-spoofing di GeoTapp?', a: 'Il geofence di Libemax verifica solo che il dispositivo sia dentro un perimetro predefinito, ma la posizione GPS stessa può essere falsificata con un\'app gratuita. L\'anti-spoofing di GeoTapp va oltre: incrocia più segnali per verificare che la posizione sia reale e non simulata. È la differenza tra controllare dove il telefono dice di essere e verificare dove il telefono è davvero.' },
    { q: 'Libemax ha 200.000 download. GeoTapp è affidabile?', a: 'Libemax è un\'ottima app di rilevazione presenze con una base utenti consolidata. GeoTapp risolve un problema diverso: non solo registra le presenze ma certifica il lavoro con prove non alterabili. Sono due categorie diverse, come confrontare un cronometro con un notaio.' },
    { q: 'Perché le foto di GeoTapp sono diverse da quelle di Libemax?', a: 'Libemax permette di allegare foto ai rapportini. GeoTapp sigilla ogni foto con una catena hash crittografata nel momento stesso dello scatto: se qualcuno modifica la foto anche di un pixel, il sigillo si rompe e il sistema lo rileva. Le foto di GeoTapp sono prove con valore probatorio, non semplici allegati.' },
    { q: 'GeoTapp o Libemax per cooperative sociali e imprese di pulizie?', a: 'Se l\'obiettivo è la sola rilevazione presenze con NFC e geofence, Libemax è una scelta solida. Se l\'obiettivo è eliminare le contestazioni dei clienti con report verificabili e prove non alterabili, GeoTapp è l\'unica soluzione, perché il committente può controllare tutto da solo senza dovervi credere sulla parola.' },
  ],
  en: [
    { q: 'What is the difference between Libemax geofence and GeoTapp anti-spoofing?', a: 'Libemax geofence only checks if the device is within a predefined perimeter, but the GPS position itself can be spoofed with a free app. GeoTapp anti-spoofing goes further: it cross-references multiple signals to verify the position is real and not simulated. It is the difference between checking where the phone says it is and verifying where the phone really is.' },
    { q: 'Libemax has 200,000 downloads. Is GeoTapp reliable?', a: 'Libemax is an excellent attendance tracking app with a solid user base. GeoTapp solves a different problem: it certifies work with tamper-proof evidence. Two different categories, like comparing a stopwatch with a notary.' },
    { q: 'Why are GeoTapp photos different from Libemax photos?', a: 'Libemax allows attaching photos to reports. GeoTapp seals every photo with a cryptographic hash chain at the moment of capture: if anyone modifies the photo by even one pixel, the seal breaks and the system detects it. GeoTapp photos are evidence with evidentiary value, not simple attachments.' },
    { q: 'GeoTapp or Libemax for social cooperatives and cleaning companies?', a: 'For attendance tracking with NFC and geofence, Libemax is a solid choice. To eliminate client disputes with verifiable reports and tamper-proof evidence, GeoTapp is the only solution, because the client can check everything independently, without having to take your word for it.' },
  ],
  de: [
    { q: 'Was ist der Unterschied zwischen Libemax Geofence und GeoTapp Anti-Spoofing?', a: 'Libemax Geofence prüft nur, ob das Gerät innerhalb eines vordefinierten Perimeters ist, aber die GPS-Position selbst kann mit einer kostenlosen App gefälscht werden. GeoTapp Anti-Spoofing geht weiter: es gleicht mehrere Signale ab, um zu verifizieren, dass die Position echt und nicht simuliert ist. Es ist der Unterschied zwischen prüfen, wo das Telefon zu sein behauptet, und verifizieren, wo das Telefon wirklich ist.' },
    { q: 'Libemax hat 200.000 Downloads. Ist GeoTapp zuverlässig?', a: 'Libemax ist eine ausgezeichnete Zeiterfassungs-App mit einer soliden Nutzerbasis. GeoTapp löst ein anderes Problem: Es zertifiziert Arbeit mit fälschungssicheren Beweisen. Zwei verschiedene Kategorien, wie eine Stoppuhr mit einem Notar zu vergleichen.' },
    { q: 'Warum sind GeoTapp-Fotos anders als Libemax-Fotos?', a: 'Libemax erlaubt Fotos als Anhänge. GeoTapp versiegelt jedes Foto mit einer kryptographischen Hash-Kette im Moment der Aufnahme: wird das Foto auch nur um ein Pixel verändert, bricht das Siegel und das System erkennt es. GeoTapp-Fotos sind Beweise mit Beweiskraft, keine einfachen Anhänge.' },
    { q: 'GeoTapp oder Libemax für Sozialgenossenschaften und Reinigungsunternehmen?', a: 'Für reine Zeiterfassung mit NFC und Geofence ist Libemax eine solide Wahl. Um Kundenstreitigkeiten mit verifizierbaren Berichten und fälschungssicheren Beweisen zu eliminieren, ist GeoTapp die einzige Lösung, denn der Auftraggeber kann alles selbst prüfen, ohne Ihnen auf Ihr Wort vertrauen zu müssen.' },
  ],
  fr: [
    { q: 'Quelle est la différence entre le geofence de Libemax et l\'anti-spoofing de GeoTapp ?', a: 'Le geofence de Libemax vérifie seulement que l\'appareil se trouve dans un périmètre prédéfini, mais la position GPS elle-même peut être falsifiée avec une application gratuite. L\'anti-spoofing de GeoTapp va plus loin : il croise plusieurs signaux pour vérifier que la position est réelle et non simulée. C\'est la différence entre contrôler où le téléphone dit être et vérifier où le téléphone est vraiment.' },
    { q: 'Libemax compte 200 000 téléchargements. GeoTapp est-il fiable ?', a: 'Libemax est une excellente application de pointage avec une base d\'utilisateurs solide. GeoTapp résout un problème différent : il certifie le travail avec des preuves infalsifiables. Deux catégories différentes, comme comparer un chronomètre à un notaire.' },
    { q: 'Pourquoi les photos de GeoTapp sont-elles différentes de celles de Libemax ?', a: 'Libemax permet de joindre des photos aux rapports. GeoTapp scelle chaque photo avec une chaîne de hachage cryptographique au moment même de la prise de vue : si quelqu\'un modifie la photo, ne serait-ce que d\'un pixel, le sceau se brise et le système le détecte. Les photos de GeoTapp sont des preuves à valeur probante, pas de simples pièces jointes.' },
    { q: 'GeoTapp ou Libemax pour les coopératives sociales et les entreprises de nettoyage ?', a: 'Pour le simple pointage avec NFC et geofence, Libemax est un choix solide. Pour éliminer les litiges avec les clients grâce à des rapports vérifiables et des preuves infalsifiables, GeoTapp est la seule solution, car le donneur d\'ordre peut tout contrôler lui-même, sans devoir vous croire sur parole.' },
  ],
  es: [
    { q: '¿Cuál es la diferencia entre el geofence de Libemax y el anti-spoofing de GeoTapp?', a: 'El geofence de Libemax solo verifica que el dispositivo esté dentro de un perímetro predefinido, pero la posición GPS en sí se puede falsificar con una app gratuita. El anti-spoofing de GeoTapp va más allá: cruza varias señales para verificar que la posición sea real y no simulada. Es la diferencia entre comprobar dónde dice estar el teléfono y verificar dónde está realmente.' },
    { q: 'Libemax tiene 200.000 descargas. ¿Es GeoTapp fiable?', a: 'Libemax es una excelente app de control de presencia con una base de usuarios consolidada. GeoTapp resuelve un problema distinto: certifica el trabajo con pruebas inalterables. Dos categorías diferentes, como comparar un cronómetro con un notario.' },
    { q: '¿Por qué las fotos de GeoTapp son distintas de las de Libemax?', a: 'Libemax permite adjuntar fotos a los partes. GeoTapp sella cada foto con una cadena hash criptográfica en el mismo momento de la captura: si alguien modifica la foto aunque sea un píxel, el sello se rompe y el sistema lo detecta. Las fotos de GeoTapp son pruebas con valor probatorio, no simples adjuntos.' },
    { q: '¿GeoTapp o Libemax para cooperativas sociales y empresas de limpieza?', a: 'Si el objetivo es solo el control de presencia con NFC y geofence, Libemax es una opción sólida. Si el objetivo es eliminar las reclamaciones de los clientes con informes verificables y pruebas inalterables, GeoTapp es la única solución, porque el cliente puede comprobarlo todo por sí mismo, sin tener que creerte bajo palabra.' },
  ],
  pt: [
    { q: 'Qual é a diferença entre o geofence da Libemax e o anti-spoofing da GeoTapp?', a: 'O geofence da Libemax apenas verifica se o dispositivo está dentro de um perímetro predefinido, mas a própria posição GPS pode ser falsificada com uma app gratuita. O anti-spoofing da GeoTapp vai mais longe: cruza vários sinais para verificar que a posição é real e não simulada. É a diferença entre confirmar onde o telemóvel diz estar e verificar onde o telemóvel está realmente.' },
    { q: 'A Libemax tem 200.000 downloads. A GeoTapp é fiável?', a: 'A Libemax é uma excelente app de registo de presenças com uma base de utilizadores consolidada. A GeoTapp resolve um problema diferente: certifica o trabalho com provas inalteráveis. Duas categorias diferentes, como comparar um cronómetro com um notário.' },
    { q: 'Porque é que as fotos da GeoTapp são diferentes das da Libemax?', a: 'A Libemax permite anexar fotos aos relatórios. A GeoTapp sela cada foto com uma cadeia hash criptográfica no momento da captura: se alguém alterar a foto, nem que seja um pixel, o selo quebra-se e o sistema deteta-o. As fotos da GeoTapp são provas com valor probatório, não simples anexos.' },
    { q: 'GeoTapp ou Libemax para cooperativas sociais e empresas de limpeza?', a: 'Se o objetivo é apenas o registo de presenças com NFC e geofence, a Libemax é uma escolha sólida. Se o objetivo é eliminar as contestações dos clientes com relatórios verificáveis e provas inalteráveis, a GeoTapp é a única solução, porque o cliente pode verificar tudo sozinho, sem ter de acreditar na sua palavra.' },
  ],
  nl: [
    { q: 'Wat is het verschil tussen de geofence van Libemax en de anti-spoofing van GeoTapp?', a: 'De geofence van Libemax controleert alleen of het toestel zich binnen een vooraf bepaalde perimeter bevindt, maar de GPS-positie zelf kan met een gratis app worden vervalst. De anti-spoofing van GeoTapp gaat verder: het combineert meerdere signalen om te verifiëren dat de positie echt is en niet gesimuleerd. Het is het verschil tussen controleren waar de telefoon zegt te zijn en verifiëren waar de telefoon echt is.' },
    { q: 'Libemax heeft 200.000 downloads. Is GeoTapp betrouwbaar?', a: 'Libemax is een uitstekende app voor tijdregistratie met een stevige gebruikersbasis. GeoTapp lost een ander probleem op: het certificeert werk met manipulatiebestendig bewijs. Twee verschillende categorieën, alsof je een stopwatch met een notaris vergelijkt.' },
    { q: 'Waarom zijn de foto\'s van GeoTapp anders dan die van Libemax?', a: 'Libemax laat toe foto\'s aan rapporten toe te voegen. GeoTapp verzegelt elke foto met een cryptografische hashketen op het moment van de opname: wijzigt iemand de foto ook maar met één pixel, dan breekt het zegel en detecteert het systeem dit. De foto\'s van GeoTapp zijn bewijs met bewijskracht, geen simpele bijlagen.' },
    { q: 'GeoTapp of Libemax voor sociale coöperaties en schoonmaakbedrijven?', a: 'Voor enkel tijdregistratie met NFC en geofence is Libemax een solide keuze. Om klachten van klanten te elimineren met verifieerbare rapporten en manipulatiebestendig bewijs is GeoTapp de enige oplossing, want de opdrachtgever kan alles zelf controleren, zonder je op je woord te moeten geloven.' },
  ],
  da: [
    { q: 'Hvad er forskellen mellem Libemax\' geofence og GeoTapps anti-spoofing?', a: 'Libemax\' geofence kontrollerer kun, om enheden er inden for en foruddefineret perimeter, men selve GPS-positionen kan forfalskes med en gratis app. GeoTapps anti-spoofing går videre: den krydstjekker flere signaler for at verificere, at positionen er ægte og ikke simuleret. Det er forskellen mellem at tjekke, hvor telefonen siger, den er, og at verificere, hvor telefonen virkelig er.' },
    { q: 'Libemax har 200.000 downloads. Er GeoTapp pålidelig?', a: 'Libemax er en fremragende app til tidsregistrering med et solidt brugergrundlag. GeoTapp løser et andet problem: den certificerer arbejde med beviser, der ikke kan ændres. To forskellige kategorier, som at sammenligne et stopur med en notar.' },
    { q: 'Hvorfor er GeoTapps fotos anderledes end Libemax\' fotos?', a: 'Libemax tillader at vedhæfte fotos til rapporter. GeoTapp forsegler hvert foto med en kryptografisk hash-kæde i selve optagelsesøjeblikket: ændrer nogen fotoet bare med én pixel, brydes seglet, og systemet opdager det. GeoTapps fotos er beviser med bevisværdi, ikke blot vedhæftninger.' },
    { q: 'GeoTapp eller Libemax til sociale kooperativer og rengøringsfirmaer?', a: 'Til ren tidsregistrering med NFC og geofence er Libemax et solidt valg. Til at fjerne kundeklager med verificerbare rapporter og beviser, der ikke kan ændres, er GeoTapp den eneste løsning, for kunden kan tjekke alt selv uden at skulle tage dig på ordet.' },
  ],
  sv: [
    { q: 'Vad är skillnaden mellan Libemax geofence och GeoTapps anti-spoofing?', a: 'Libemax geofence kontrollerar bara om enheten befinner sig inom en fördefinierad perimeter, men själva GPS-positionen kan förfalskas med en gratisapp. GeoTapps anti-spoofing går längre: den korsar flera signaler för att verifiera att positionen är äkta och inte simulerad. Det är skillnaden mellan att kontrollera var telefonen säger att den är och att verifiera var telefonen verkligen är.' },
    { q: 'Libemax har 200 000 nedladdningar. Är GeoTapp pålitligt?', a: 'Libemax är en utmärkt app för tidsrapportering med en stabil användarbas. GeoTapp löser ett annat problem: den certifierar arbete med bevis som inte kan ändras. Två olika kategorier, som att jämföra ett stoppur med en notarie.' },
    { q: 'Varför skiljer sig GeoTapps foton från Libemax foton?', a: 'Libemax tillåter att bifoga foton till rapporter. GeoTapp förseglar varje foto med en kryptografisk hashkedja i själva tagningsögonblicket: om någon ändrar fotot ens med en pixel bryts förseglingen och systemet upptäcker det. GeoTapps foton är bevis med bevisvärde, inte enkla bilagor.' },
    { q: 'GeoTapp eller Libemax för sociala kooperativ och städföretag?', a: 'För enbart tidsrapportering med NFC och geofence är Libemax ett solitt val. För att eliminera kundtvister med verifierbara rapporter och bevis som inte kan ändras är GeoTapp den enda lösningen, eftersom uppdragsgivaren kan kontrollera allt själv, utan att behöva ta dig på orden.' },
  ],
  nb: [
    { q: 'Hva er forskjellen mellom Libemax sin geofence og GeoTapp sin anti-spoofing?', a: 'Libemax sin geofence sjekker bare om enheten er innenfor en forhåndsdefinert perimeter, men selve GPS-posisjonen kan forfalskes med en gratis app. GeoTapp sin anti-spoofing går lenger: den krysskobler flere signaler for å verifisere at posisjonen er ekte og ikke simulert. Det er forskjellen mellom å sjekke hvor telefonen sier den er, og å verifisere hvor telefonen virkelig er.' },
    { q: 'Libemax har 200 000 nedlastinger. Er GeoTapp pålitelig?', a: 'Libemax er en utmerket app for tidsregistrering med en solid brukerbase. GeoTapp løser et annet problem: den sertifiserer arbeid med bevis som ikke kan endres. To forskjellige kategorier, som å sammenligne en stoppeklokke med en notar.' },
    { q: 'Hvorfor er GeoTapp sine bilder annerledes enn Libemax sine?', a: 'Libemax lar deg legge ved bilder til rapportene. GeoTapp forsegler hvert bilde med en kryptografisk hash-kjede i selve det øyeblikket bildet tas: endrer noen bildet med bare én piksel, brytes seglet og systemet oppdager det. GeoTapp sine bilder er bevis med bevisverdi, ikke enkle vedlegg.' },
    { q: 'GeoTapp eller Libemax for sosiale samvirkeforetak og renholdsbedrifter?', a: 'For ren tidsregistrering med NFC og geofence er Libemax et solid valg. For å fjerne kundeklager med verifiserbare rapporter og bevis som ikke kan endres, er GeoTapp den eneste løsningen, fordi oppdragsgiveren kan kontrollere alt selv, uten å måtte tro deg på ordet.' },
  ],
  ru: [
    { q: 'В чём разница между геозоной Libemax и анти-спуфингом GeoTapp?', a: 'Геозона Libemax лишь проверяет, находится ли устройство внутри заданного периметра, но саму GPS-позицию можно подделать бесплатным приложением. Анти-спуфинг GeoTapp идёт дальше: он сопоставляет несколько сигналов, чтобы убедиться, что позиция настоящая, а не смоделированная. Это разница между тем, чтобы проверить, где телефон якобы находится, и тем, чтобы убедиться, где он на самом деле.' },
    { q: 'У Libemax 200 000 загрузок. Надёжен ли GeoTapp?', a: 'Libemax, отличное приложение для учёта присутствия с устоявшейся базой пользователей. GeoTapp решает другую задачу: он сертифицирует работу доказательствами, которые нельзя подделать. Это две разные категории, как сравнивать секундомер с нотариусом.' },
    { q: 'Почему фотографии GeoTapp отличаются от фотографий Libemax?', a: 'Libemax позволяет прикреплять фото к отчётам. GeoTapp опечатывает каждое фото криптографической хеш-цепочкой в самый момент съёмки: если кто-то изменит фото хотя бы на один пиксель, печать ломается и система это обнаруживает. Фотографии GeoTapp, это доказательства с доказательной силой, а не простые вложения.' },
    { q: 'GeoTapp или Libemax для социальных кооперативов и клининговых компаний?', a: 'Если цель, только учёт присутствия с NFC и геозоной, Libemax, надёжный выбор. Если цель, устранить претензии клиентов с помощью проверяемых отчётов и доказательств, которые нельзя подделать, GeoTapp, единственное решение, потому что заказчик может проверить всё сам, не веря вам на слово.' },
  ],
};

// Etichette della tabella di confronto, per locale.
const ROWS_LABELS: Record<string, string[]> = {
  it: ['GPS anti-spoofing (rileva posizioni falsificate)','Report sigillato crittograficamente','Verifica indipendente da parte del committente','Foto con catena hash crittografata','Conformità GDPR','Timbratura GPS','Timbratura QR code / NFC / Bluetooth','Geofence (perimetro)','Checklist e audit','App mobile Android/iOS','Dashboard gestione team','Settori: pulizie, edilizia, cooperative','Informativa GPS automatica con firma digitale*'],
  en: ['Anti-spoofing GPS (detects spoofed positions)','Cryptographically sealed report','Independent verification by client','Photos with cryptographic hash chain','GDPR compliant','GPS check-in','QR code / NFC / Bluetooth check-in','Geofence (perimeter)','Checklists and audits','Mobile app Android/iOS','Team management dashboard','Sectors: cleaning, construction, cooperatives','Automatic GPS privacy notice with digital signature*'],
  de: ['Anti-Spoofing-GPS (erkennt gefälschte Positionen)','Kryptographisch versiegelter Bericht','Unabhängige Prüfung durch den Auftraggeber','Fotos mit kryptographischer Hash-Kette','DSGVO-konform','GPS-Stempelung','QR-Code / NFC / Bluetooth-Stempelung','Geofence (Perimeter)','Checklisten und Audits','Mobile App Android/iOS','Team-Management-Dashboard','Branchen: Reinigung, Bau, Genossenschaften','Automatische GPS-Datenschutzerklärung mit digitaler Signatur*'],
  fr: ['GPS anti-spoofing (détecte les positions falsifiées)','Rapport scellé cryptographiquement','Vérification indépendante par le client','Photos avec chaîne de hachage cryptographique','Conforme RGPD','Pointage GPS','Pointage QR code / NFC / Bluetooth','Geofence (périmètre)','Checklists et audits','Application mobile Android/iOS','Tableau de bord de gestion d\'équipe','Secteurs : nettoyage, BTP, coopératives','Avis de confidentialité GPS automatique avec signature numérique*'],
  es: ['GPS anti-spoofing (detecta posiciones falsificadas)','Informe sellado criptográficamente','Verificación independiente por el cliente','Fotos con cadena hash criptográfica','Conforme al RGPD','Fichaje GPS','Fichaje QR / NFC / Bluetooth','Geofence (perímetro)','Checklists y auditorías','App móvil Android/iOS','Panel de gestión de equipos','Sectores: limpieza, construcción, cooperativas','Aviso de privacidad GPS automático con firma digital*'],
  pt: ['GPS anti-spoofing (deteta posições falsificadas)','Relatório selado criptograficamente','Verificação independente pelo cliente','Fotos com cadeia hash criptográfica','Conforme o RGPD','Registo GPS','Registo QR code / NFC / Bluetooth','Geofence (perímetro)','Checklists e auditorias','App móvel Android/iOS','Painel de gestão de equipas','Setores: limpeza, construção, cooperativas','Aviso de privacidade GPS automático com assinatura digital*'],
  nl: ['Anti-spoofing GPS (detecteert vervalste posities)','Cryptografisch verzegeld rapport','Onafhankelijke verificatie door de klant','Foto\'s met cryptografische hashketen','AVG-conform','GPS-registratie','QR-code / NFC / Bluetooth-registratie','Geofence (perimeter)','Checklists en audits','Mobiele app Android/iOS','Dashboard voor teambeheer','Sectoren: schoonmaak, bouw, coöperaties','Automatische GPS-privacyverklaring met digitale handtekening*'],
  da: ['Anti-spoofing-GPS (registrerer forfalskede positioner)','Kryptografisk forseglet rapport','Uafhængig verificering af kunden','Fotos med kryptografisk hash-kæde','GDPR-kompatibel','GPS-registrering','QR-kode / NFC / Bluetooth-registrering','Geofence (perimeter)','Tjeklister og audits','Mobilapp Android/iOS','Dashboard til teamstyring','Brancher: rengøring, byggeri, kooperativer','Automatisk GPS-privatlivserklæring med digital signatur*'],
  sv: ['Anti-spoofing-GPS (upptäcker förfalskade positioner)','Kryptografiskt förseglad rapport','Oberoende verifiering av kunden','Foton med kryptografisk hashkedja','GDPR-kompatibel','GPS-incheckning','QR-kod / NFC / Bluetooth-incheckning','Geofence (perimeter)','Checklistor och revisioner','Mobilapp Android/iOS','Instrumentpanel för teamhantering','Branscher: städ, bygg, kooperativ','Automatiskt GPS-integritetsmeddelande med digital signatur*'],
  nb: ['Anti-spoofing-GPS (oppdager forfalskede posisjoner)','Kryptografisk forseglet rapport','Uavhengig verifisering av oppdragsgiver','Bilder med kryptografisk hash-kjede','GDPR-kompatibel','GPS-registrering','QR-kode / NFC / Bluetooth-registrering','Geofence (perimeter)','Sjekklister og revisjoner','Mobilapp Android/iOS','Dashbord for teamstyring','Bransjer: renhold, bygg, samvirkeforetak','Automatisk GPS-personvernerklæring med digital signatur*'],
  ru: ['Анти-спуфинг GPS (выявляет подделанные позиции)','Криптографически опечатанный отчёт','Независимая проверка заказчиком','Фото с криптографической хеш-цепочкой','Соответствие GDPR','Отметка по GPS','Отметка по QR-коду / NFC / Bluetooth','Геозона (периметр)','Чек-листы и аудиты','Мобильное приложение Android/iOS','Панель управления командой','Отрасли: клининг, строительство, кооперативы','Автоматическое уведомление о GPS с цифровой подписью*'],
};

const ROWS_GEO =  [true,true,true,true,true,true,true,true,true,true,true,true,true];
const ROWS_COMP = [false,false,false,false,true,true,true,true,true,true,true,true,false];

type Copy = {
  badge: string; h1sub: string; desc: string; summary: string; summaryText: string;
  noteTitle: string; noteText: string; features: string; feat: string; diff: string;
  cta: string; ctaDesc: string; ctaBtn: string; geo: string[]; comp: string[]; footnote: string;
};

const T: Record<string, Copy> = {
  it: {
    badge: 'Confronto App', h1sub: 'geofence o anti-spoofing?',
    desc: 'Libemax è l\'app di rilevazione presenze più scaricata in Italia con oltre 200.000 download. GeoTapp è un sistema di certificazione del lavoro con GPS anti-spoofing e report non alterabili. Due approcci fondamentalmente diversi allo stesso problema.',
    summary: 'In sintesi:',
    summaryText: 'Libemax eccelle nella rilevazione presenze con molteplici metodi (GPS, QR, NFC, Bluetooth, geofence). Ma il geofence verifica solo il perimetro, non se la posizione è reale. GeoTapp va oltre: l\'anti-spoofing verifica che il GPS sia autentico, le foto sono sigillate crittograficamente e il report ha valore probatorio, il committente lo verifica da solo.',
    noteTitle: 'Geofence non è anti-spoofing',
    noteText: 'Il geofence di Libemax controlla se lo smartphone è dentro un perimetro predefinito. Ma se la posizione GPS è falsificata con un\'app, il geofence viene ingannato: il telefono dice di essere dentro il perimetro anche se è a chilometri di distanza. L\'anti-spoofing di GeoTapp rileva proprio questo: verifica che il segnale GPS sia autentico, non solo che le coordinate cadano dentro un\'area.',
    features: 'Confronto funzionalità chiave', feat: 'Funzionalità', diff: 'Due filosofie diverse',
    cta: 'Vuoi vedere GeoTapp in azione?',
    ctaDesc: 'Ti mostriamo come un intervento diventa una prova verificabile, in 10 minuti, senza impegno.',
    ctaBtn: 'Inizia subito gratuitamente!',
    geo: ['GPS anti-spoofing: verifica che la posizione sia reale','Foto sigillate con catena hash crittografata','Report con sigillo crittografico e valore probatorio','Il committente verifica da solo','Certificazione, non solo rilevazione'],
    comp: ['200.000+ download, 6.000+ aziende','GPS + QR + NFC + Bluetooth + geofence','Geofence: controlla il perimetro (non la veridicità GPS)','Checklist e audit per cantieri','Rilevazione presenze, non certificazione'],
    footnote: '* Per legge (GDPR Art. 13 e, in Italia, Art. 4 Statuto dei Lavoratori), ogni dipendente deve firmare un\'informativa privacy prima di essere geolocalizzato. La maggior parte dei software GPS non lo gestisce: il rischio legale resta al titolare. GeoTapp genera automaticamente l\'informativa personalizzata, la fa firmare digitalmente al dipendente e blocca l\'accesso GPS finché non è firmata. Nessun altro software sul mercato lo fa.',
  },
  en: {
    badge: 'App Comparison', h1sub: 'geofence or anti-spoofing?',
    desc: 'Libemax is Italy\'s most downloaded attendance app with 200,000+ downloads. GeoTapp is a work certification system with anti-spoofing GPS and tamper-proof reports. Two fundamentally different approaches to the same problem.',
    summary: 'Bottom line:',
    summaryText: 'Libemax excels at attendance tracking with multiple methods (GPS, QR, NFC, Bluetooth, geofence). But geofence only checks the perimeter, not if the position is real. GeoTapp goes further: anti-spoofing verifies GPS authenticity, photos are cryptographically sealed and reports have evidentiary value, the client verifies it independently.',
    noteTitle: 'Geofence is not anti-spoofing',
    noteText: 'Libemax geofence checks if the smartphone is within a predefined perimeter. But if the GPS position is spoofed with an app, the geofence is fooled too: the phone says it is inside the perimeter even if it is miles away. GeoTapp anti-spoofing detects exactly this: it verifies the GPS signal is authentic, not just that the coordinates fall inside an area.',
    features: 'Key features comparison', feat: 'Feature', diff: 'Two different philosophies',
    cta: 'Want to see GeoTapp in action?',
    ctaDesc: 'We show you how a job becomes verifiable proof, in 10 minutes, no commitment.',
    ctaBtn: 'Start for free!',
    geo: ['Anti-spoofing GPS: verifies the position is real','Photos sealed with cryptographic hash chain','Report with cryptographic seal and evidentiary value','The client verifies independently','Certification, not just attendance'],
    comp: ['200,000+ downloads, 6,000+ companies','GPS + QR + NFC + Bluetooth + geofence','Geofence: checks the perimeter (not GPS authenticity)','Checklists and audits for construction','Attendance tracking, not certification'],
    footnote: '* By law (GDPR Art. 13), every employee must sign a privacy notice before being geolocated. Most GPS software does not handle this: the legal risk stays with the employer. GeoTapp automatically generates the personalised notice, gets it digitally signed by the employee and blocks GPS access until it is signed. No other software on the market does this.',
  },
  de: {
    badge: 'App-Vergleich', h1sub: 'Geofence oder Anti-Spoofing?',
    desc: 'Libemax ist die meistgeladene Zeiterfassungs-App in Italien mit über 200.000 Downloads. GeoTapp ist ein Arbeitszertifizierungssystem mit Anti-Spoofing-GPS und fälschungssicheren Berichten. Zwei grundlegend verschiedene Ansätze für dasselbe Problem.',
    summary: 'Fazit:',
    summaryText: 'Libemax glänzt bei der Zeiterfassung mit vielen Methoden (GPS, QR, NFC, Bluetooth, Geofence). Aber Geofence prüft nur den Perimeter, nicht ob die Position echt ist. GeoTapp geht weiter: Anti-Spoofing verifiziert das GPS, Fotos werden kryptographisch versiegelt und der Bericht hat Beweiskraft, der Auftraggeber prüft es selbst.',
    noteTitle: 'Geofence ist kein Anti-Spoofing',
    noteText: 'Libemax Geofence prüft, ob das Smartphone in einem vordefinierten Perimeter ist. Aber bei gefälschter GPS-Position wird auch der Geofence getäuscht: das Telefon behauptet, im Perimeter zu sein, obwohl es Kilometer entfernt ist. GeoTapp Anti-Spoofing erkennt genau das: es verifiziert, dass das GPS-Signal echt ist, nicht nur dass die Koordinaten in einem Bereich liegen.',
    features: 'Vergleich der wichtigsten Funktionen', feat: 'Funktion', diff: 'Zwei verschiedene Philosophien',
    cta: 'Möchten Sie GeoTapp in Aktion sehen?',
    ctaDesc: 'Wir zeigen Ihnen, wie ein Einsatz zum verifizierbaren Beweis wird, in 10 Minuten, unverbindlich.',
    ctaBtn: 'Jetzt kostenlos starten!',
    geo: ['Anti-Spoofing-GPS: verifiziert echte Position','Fotos versiegelt mit kryptographischer Hash-Kette','Bericht mit kryptographischem Siegel und Beweiskraft','Der Auftraggeber verifiziert selbst','Zertifizierung, nicht nur Zeiterfassung'],
    comp: ['200.000+ Downloads, 6.000+ Unternehmen','GPS + QR + NFC + Bluetooth + Geofence','Geofence: prüft Perimeter (nicht GPS-Echtheit)','Checklisten und Audits für Baustellen','Zeiterfassung, nicht Zertifizierung'],
    footnote: '* Laut Gesetz (DSGVO Art. 13) muss jeder Mitarbeiter vor der Geolokalisierung eine Datenschutzerklärung unterschreiben. Die meiste GPS-Software handhabt das nicht: das rechtliche Risiko bleibt beim Arbeitgeber. GeoTapp erstellt automatisch die personalisierte Erklärung, lässt sie vom Mitarbeiter digital unterschreiben und sperrt den GPS-Zugang, bis sie unterschrieben ist. Keine andere Software auf dem Markt tut das.',
  },
  fr: {
    badge: 'Comparatif d\'applis', h1sub: 'geofence ou anti-spoofing ?',
    desc: 'Libemax est l\'application de pointage la plus téléchargée en Italie, avec plus de 200 000 téléchargements. GeoTapp est un système de certification du travail avec GPS anti-spoofing et rapports infalsifiables. Deux approches fondamentalement différentes du même problème.',
    summary: 'En résumé :',
    summaryText: 'Libemax excelle dans le pointage avec de multiples méthodes (GPS, QR, NFC, Bluetooth, geofence). Mais le geofence ne vérifie que le périmètre, pas si la position est réelle. GeoTapp va plus loin : l\'anti-spoofing vérifie que le GPS est authentique, les photos sont scellées cryptographiquement et le rapport a une valeur probante, le client le vérifie lui-même.',
    noteTitle: 'Le geofence n\'est pas de l\'anti-spoofing',
    noteText: 'Le geofence de Libemax contrôle si le smartphone se trouve dans un périmètre prédéfini. Mais si la position GPS est falsifiée avec une appli, le geofence est trompé lui aussi : le téléphone affirme être dans le périmètre même s\'il est à des kilomètres. L\'anti-spoofing de GeoTapp détecte précisément cela : il vérifie que le signal GPS est authentique, pas seulement que les coordonnées tombent dans une zone.',
    features: 'Comparaison des fonctionnalités clés', feat: 'Fonctionnalité', diff: 'Deux philosophies différentes',
    cta: 'Envie de voir GeoTapp en action ?',
    ctaDesc: 'Nous vous montrons comment une intervention devient une preuve vérifiable, en 10 minutes, sans engagement.',
    ctaBtn: 'Commencez gratuitement !',
    geo: ['GPS anti-spoofing : vérifie que la position est réelle','Photos scellées par chaîne de hachage cryptographique','Rapport avec sceau cryptographique et valeur probante','Le client vérifie lui-même','Certification, pas seulement pointage'],
    comp: ['200 000+ téléchargements, 6 000+ entreprises','GPS + QR + NFC + Bluetooth + geofence','Geofence : contrôle le périmètre (pas l\'authenticité GPS)','Checklists et audits pour les chantiers','Pointage, pas certification'],
    footnote: '* Selon la loi (RGPD Art. 13), chaque salarié doit signer un avis de confidentialité avant d\'être géolocalisé. La plupart des logiciels GPS ne le gèrent pas : le risque juridique reste à l\'employeur. GeoTapp génère automatiquement l\'avis personnalisé, le fait signer numériquement par le salarié et bloque l\'accès GPS tant qu\'il n\'est pas signé. Aucun autre logiciel sur le marché ne le fait.',
  },
  es: {
    badge: 'Comparativa de apps', h1sub: '¿geofence o anti-spoofing?',
    desc: 'Libemax es la app de control de presencia más descargada de Italia, con más de 200.000 descargas. GeoTapp es un sistema de certificación del trabajo con GPS anti-spoofing e informes inalterables. Dos enfoques radicalmente distintos para el mismo problema.',
    summary: 'En resumen:',
    summaryText: 'Libemax destaca en el control de presencia con múltiples métodos (GPS, QR, NFC, Bluetooth, geofence). Pero el geofence solo verifica el perímetro, no si la posición es real. GeoTapp va más allá: el anti-spoofing verifica que el GPS sea auténtico, las fotos se sellan criptográficamente y el informe tiene valor probatorio, el cliente lo verifica por sí mismo.',
    noteTitle: 'El geofence no es anti-spoofing',
    noteText: 'El geofence de Libemax controla si el smartphone está dentro de un perímetro predefinido. Pero si la posición GPS se falsifica con una app, el geofence también se engaña: el teléfono dice estar dentro del perímetro aunque esté a kilómetros. El anti-spoofing de GeoTapp detecta precisamente esto: verifica que la señal GPS sea auténtica, no solo que las coordenadas caigan dentro de un área.',
    features: 'Comparación de funciones clave', feat: 'Función', diff: 'Dos filosofías distintas',
    cta: '¿Quieres ver GeoTapp en acción?',
    ctaDesc: 'Te mostramos cómo una intervención se convierte en una prueba verificable, en 10 minutos, sin compromiso.',
    ctaBtn: '¡Empieza gratis!',
    geo: ['GPS anti-spoofing: verifica que la posición sea real','Fotos selladas con cadena hash criptográfica','Informe con sello criptográfico y valor probatorio','El cliente lo verifica por sí mismo','Certificación, no solo control de presencia'],
    comp: ['200.000+ descargas, 6.000+ empresas','GPS + QR + NFC + Bluetooth + geofence','Geofence: controla el perímetro (no la autenticidad GPS)','Checklists y auditorías para obras','Control de presencia, no certificación'],
    footnote: '* Por ley (RGPD Art. 13), cada empleado debe firmar un aviso de privacidad antes de ser geolocalizado. La mayoría del software GPS no lo gestiona: el riesgo legal recae en el empleador. GeoTapp genera automáticamente el aviso personalizado, hace que el empleado lo firme digitalmente y bloquea el acceso GPS hasta que esté firmado. Ningún otro software del mercado lo hace.',
  },
  pt: {
    badge: 'Comparativo de apps', h1sub: 'geofence ou anti-spoofing?',
    desc: 'A Libemax é a app de registo de presenças mais descarregada em Itália, com mais de 200.000 downloads. A GeoTapp é um sistema de certificação do trabalho com GPS anti-spoofing e relatórios inalteráveis. Duas abordagens radicalmente diferentes para o mesmo problema.',
    summary: 'Em resumo:',
    summaryText: 'A Libemax destaca-se no registo de presenças com vários métodos (GPS, QR, NFC, Bluetooth, geofence). Mas o geofence só verifica o perímetro, não se a posição é real. A GeoTapp vai mais longe: o anti-spoofing verifica que o GPS é autêntico, as fotos são seladas criptograficamente e o relatório tem valor probatório, o cliente verifica-o sozinho.',
    noteTitle: 'Geofence não é anti-spoofing',
    noteText: 'O geofence da Libemax controla se o smartphone está dentro de um perímetro predefinido. Mas se a posição GPS for falsificada com uma app, o geofence também é enganado: o telemóvel diz estar dentro do perímetro mesmo estando a quilómetros. O anti-spoofing da GeoTapp deteta precisamente isto: verifica que o sinal GPS é autêntico, não apenas que as coordenadas caem dentro de uma área.',
    features: 'Comparação das funcionalidades-chave', feat: 'Funcionalidade', diff: 'Duas filosofias diferentes',
    cta: 'Quer ver a GeoTapp em ação?',
    ctaDesc: 'Mostramos-lhe como uma intervenção se torna uma prova verificável, em 10 minutos, sem compromisso.',
    ctaBtn: 'Comece grátis!',
    geo: ['GPS anti-spoofing: verifica que a posição é real','Fotos seladas com cadeia hash criptográfica','Relatório com selo criptográfico e valor probatório','O cliente verifica sozinho','Certificação, não apenas registo de presenças'],
    comp: ['200.000+ downloads, 6.000+ empresas','GPS + QR + NFC + Bluetooth + geofence','Geofence: controla o perímetro (não a autenticidade GPS)','Checklists e auditorias para obras','Registo de presenças, não certificação'],
    footnote: '* Por lei (RGPD Art. 13), cada trabalhador deve assinar um aviso de privacidade antes de ser geolocalizado. A maioria do software GPS não trata disto: o risco legal fica com o empregador. A GeoTapp gera automaticamente o aviso personalizado, fá-lo assinar digitalmente pelo trabalhador e bloqueia o acesso GPS até estar assinado. Nenhum outro software no mercado o faz.',
  },
  nl: {
    badge: 'App-vergelijking', h1sub: 'geofence of anti-spoofing?',
    desc: 'Libemax is de meest gedownloade tijdregistratie-app van Italië, met meer dan 200.000 downloads. GeoTapp is een systeem voor werkcertificering met anti-spoofing-GPS en manipulatiebestendige rapporten. Twee fundamenteel verschillende benaderingen van hetzelfde probleem.',
    summary: 'Kort gezegd:',
    summaryText: 'Libemax blinkt uit in tijdregistratie met meerdere methoden (GPS, QR, NFC, Bluetooth, geofence). Maar geofence controleert alleen de perimeter, niet of de positie echt is. GeoTapp gaat verder: anti-spoofing verifieert dat de GPS authentiek is, foto\'s worden cryptografisch verzegeld en het rapport heeft bewijskracht, de opdrachtgever verifieert het zelf.',
    noteTitle: 'Geofence is geen anti-spoofing',
    noteText: 'De geofence van Libemax controleert of de smartphone binnen een vooraf bepaalde perimeter is. Maar als de GPS-positie met een app wordt vervalst, wordt ook de geofence misleid: de telefoon zegt binnen de perimeter te zijn, ook al is hij kilometers ver. De anti-spoofing van GeoTapp detecteert precies dit: het verifieert dat het GPS-signaal echt is, niet alleen dat de coördinaten binnen een gebied vallen.',
    features: 'Vergelijking van kernfuncties', feat: 'Functie', diff: 'Twee verschillende filosofieën',
    cta: 'GeoTapp in actie zien?',
    ctaDesc: 'We laten je zien hoe een opdracht verifieerbaar bewijs wordt, in 10 minuten, vrijblijvend.',
    ctaBtn: 'Begin gratis!',
    geo: ['Anti-spoofing-GPS: verifieert dat de positie echt is','Foto\'s verzegeld met cryptografische hashketen','Rapport met cryptografisch zegel en bewijskracht','De opdrachtgever verifieert zelf','Certificering, niet alleen tijdregistratie'],
    comp: ['200.000+ downloads, 6.000+ bedrijven','GPS + QR + NFC + Bluetooth + geofence','Geofence: controleert de perimeter (niet de GPS-echtheid)','Checklists en audits voor bouwplaatsen','Tijdregistratie, geen certificering'],
    footnote: '* Volgens de wet (AVG Art. 13) moet elke werknemer een privacyverklaring ondertekenen voordat hij wordt gelokaliseerd. De meeste GPS-software regelt dit niet: het juridische risico blijft bij de werkgever. GeoTapp genereert automatisch de gepersonaliseerde verklaring, laat die digitaal ondertekenen door de werknemer en blokkeert de GPS-toegang tot ze ondertekend is. Geen enkele andere software op de markt doet dit.',
  },
  da: {
    badge: 'App-sammenligning', h1sub: 'geofence eller anti-spoofing?',
    desc: 'Libemax er den mest downloadede app til tidsregistrering i Italien med over 200.000 downloads. GeoTapp er et system til arbejdscertificering med anti-spoofing-GPS og rapporter, der ikke kan ændres. To grundlæggende forskellige tilgange til det samme problem.',
    summary: 'Kort sagt:',
    summaryText: 'Libemax er fremragende til tidsregistrering med flere metoder (GPS, QR, NFC, Bluetooth, geofence). Men geofence kontrollerer kun perimeteren, ikke om positionen er ægte. GeoTapp går videre: anti-spoofing verificerer, at GPS\'en er autentisk, fotos forsegles kryptografisk, og rapporten har bevisværdi, kunden verificerer den selv.',
    noteTitle: 'Geofence er ikke anti-spoofing',
    noteText: 'Libemax\' geofence kontrollerer, om smartphonen er inden for en foruddefineret perimeter. Men hvis GPS-positionen forfalskes med en app, narres geofencen også: telefonen siger, den er inden for perimeteren, selvom den er kilometer væk. GeoTapps anti-spoofing opdager netop dette: den verificerer, at GPS-signalet er ægte, ikke bare at koordinaterne falder inden for et område.',
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion', diff: 'To forskellige filosofier',
    cta: 'Vil du se GeoTapp i aktion?',
    ctaDesc: 'Vi viser dig, hvordan en opgave bliver til verificerbart bevis, på 10 minutter, uforpligtende.',
    ctaBtn: 'Kom gratis i gang!',
    geo: ['Anti-spoofing-GPS: verificerer, at positionen er ægte','Fotos forseglet med kryptografisk hash-kæde','Rapport med kryptografisk segl og bevisværdi','Kunden verificerer selv','Certificering, ikke kun tidsregistrering'],
    comp: ['200.000+ downloads, 6.000+ virksomheder','GPS + QR + NFC + Bluetooth + geofence','Geofence: kontrollerer perimeteren (ikke GPS-ægthed)','Tjeklister og audits til byggepladser','Tidsregistrering, ikke certificering'],
    footnote: '* Ifølge loven (GDPR art. 13) skal hver medarbejder underskrive en privatlivserklæring, før vedkommende geolokaliseres. De fleste GPS-programmer håndterer ikke dette: den juridiske risiko forbliver hos arbejdsgiveren. GeoTapp genererer automatisk den personlige erklæring, får den underskrevet digitalt af medarbejderen og blokerer GPS-adgangen, indtil den er underskrevet. Ingen anden software på markedet gør dette.',
  },
  sv: {
    badge: 'App-jämförelse', h1sub: 'geofence eller anti-spoofing?',
    desc: 'Libemax är den mest nedladdade appen för tidsrapportering i Italien med över 200 000 nedladdningar. GeoTapp är ett system för arbetscertifiering med anti-spoofing-GPS och rapporter som inte kan ändras. Två fundamentalt olika sätt att lösa samma problem.',
    summary: 'Kort sagt:',
    summaryText: 'Libemax är utmärkt på tidsrapportering med flera metoder (GPS, QR, NFC, Bluetooth, geofence). Men geofence kontrollerar bara perimetern, inte om positionen är äkta. GeoTapp går längre: anti-spoofing verifierar att GPS:en är autentisk, foton förseglas kryptografiskt och rapporten har bevisvärde, kunden verifierar den själv.',
    noteTitle: 'Geofence är inte anti-spoofing',
    noteText: 'Libemax geofence kontrollerar om smarttelefonen är inom en fördefinierad perimeter. Men om GPS-positionen förfalskas med en app luras även geofencen: telefonen säger att den är inom perimetern även om den är flera kilometer bort. GeoTapps anti-spoofing upptäcker just detta: den verifierar att GPS-signalen är äkta, inte bara att koordinaterna hamnar inom ett område.',
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion', diff: 'Två olika filosofier',
    cta: 'Vill du se GeoTapp i praktiken?',
    ctaDesc: 'Vi visar hur ett uppdrag blir verifierbart bevis, på 10 minuter, utan förpliktelser.',
    ctaBtn: 'Kom igång gratis!',
    geo: ['Anti-spoofing-GPS: verifierar att positionen är äkta','Foton förseglade med kryptografisk hashkedja','Rapport med kryptografiskt sigill och bevisvärde','Kunden verifierar själv','Certifiering, inte bara tidsrapportering'],
    comp: ['200 000+ nedladdningar, 6 000+ företag','GPS + QR + NFC + Bluetooth + geofence','Geofence: kontrollerar perimetern (inte GPS-äkthet)','Checklistor och revisioner för byggarbetsplatser','Tidsrapportering, inte certifiering'],
    footnote: '* Enligt lag (GDPR art. 13) måste varje anställd underteckna ett integritetsmeddelande innan han eller hon geolokaliseras. De flesta GPS-program hanterar inte detta: den juridiska risken stannar hos arbetsgivaren. GeoTapp genererar automatiskt det personliga meddelandet, låter den anställde signera det digitalt och blockerar GPS-åtkomsten tills det är signerat. Ingen annan programvara på marknaden gör detta.',
  },
  nb: {
    badge: 'App-sammenligning', h1sub: 'geofence eller anti-spoofing?',
    desc: 'Libemax er den mest nedlastede appen for tidsregistrering i Italia med over 200 000 nedlastinger. GeoTapp er et system for arbeidssertifisering med anti-spoofing-GPS og rapporter som ikke kan endres. To grunnleggende forskjellige tilnærminger til det samme problemet.',
    summary: 'Kort sagt:',
    summaryText: 'Libemax er utmerket på tidsregistrering med flere metoder (GPS, QR, NFC, Bluetooth, geofence). Men geofence kontrollerer bare perimeteren, ikke om posisjonen er ekte. GeoTapp går lenger: anti-spoofing verifiserer at GPS-en er autentisk, bilder forsegles kryptografisk og rapporten har bevisverdi, oppdragsgiveren verifiserer den selv.',
    noteTitle: 'Geofence er ikke anti-spoofing',
    noteText: 'Libemax sin geofence kontrollerer om smarttelefonen er innenfor en forhåndsdefinert perimeter. Men hvis GPS-posisjonen forfalskes med en app, lures også geofencen: telefonen sier den er innenfor perimeteren selv om den er kilometer unna. GeoTapp sin anti-spoofing oppdager nettopp dette: den verifiserer at GPS-signalet er ekte, ikke bare at koordinatene faller innenfor et område.',
    features: 'Sammenligning av nøkkelfunksjoner', feat: 'Funksjon', diff: 'To forskjellige filosofier',
    cta: 'Vil du se GeoTapp i aksjon?',
    ctaDesc: 'Vi viser deg hvordan et oppdrag blir til verifiserbart bevis, på 10 minutter, uforpliktende.',
    ctaBtn: 'Kom i gang gratis!',
    geo: ['Anti-spoofing-GPS: verifiserer at posisjonen er ekte','Bilder forseglet med kryptografisk hash-kjede','Rapport med kryptografisk segl og bevisverdi','Oppdragsgiveren verifiserer selv','Sertifisering, ikke bare tidsregistrering'],
    comp: ['200 000+ nedlastinger, 6 000+ bedrifter','GPS + QR + NFC + Bluetooth + geofence','Geofence: kontrollerer perimeteren (ikke GPS-ekthet)','Sjekklister og revisjoner for byggeplasser','Tidsregistrering, ikke sertifisering'],
    footnote: '* Ifølge loven (GDPR art. 13) må hver ansatt signere en personvernerklæring før vedkommende geolokaliseres. De fleste GPS-programmer håndterer ikke dette: den juridiske risikoen blir hos arbeidsgiveren. GeoTapp genererer automatisk den personlige erklæringen, lar den ansatte signere den digitalt og blokkerer GPS-tilgangen til den er signert. Ingen annen programvare på markedet gjør dette.',
  },
  ru: {
    badge: 'Сравнение приложений', h1sub: 'geofence или анти-спуфинг?',
    desc: 'Libemax, самое скачиваемое приложение для учёта присутствия в Италии, более 200 000 загрузок. GeoTapp, это система сертификации работы с анти-спуфинговым GPS и отчётами, которые нельзя подделать. Два принципиально разных подхода к одной задаче.',
    summary: 'Коротко:',
    summaryText: 'Libemax превосходно справляется с учётом присутствия множеством методов (GPS, QR, NFC, Bluetooth, геозона). Но геозона проверяет только периметр, а не то, реальна ли позиция. GeoTapp идёт дальше: анти-спуфинг проверяет подлинность GPS, фотографии опечатываются криптографически, а отчёт имеет доказательную силу, заказчик проверяет его сам.',
    noteTitle: 'Геозона, это не анти-спуфинг',
    noteText: 'Геозона Libemax проверяет, находится ли смартфон внутри заданного периметра. Но если GPS-позицию подделать приложением, геозону тоже обманывают: телефон утверждает, что он внутри периметра, даже если он за километры. Анти-спуфинг GeoTapp выявляет именно это: он проверяет, что GPS-сигнал подлинный, а не просто что координаты попадают в область.',
    features: 'Сравнение ключевых функций', feat: 'Функция', diff: 'Две разные философии',
    cta: 'Хотите увидеть GeoTapp в действии?',
    ctaDesc: 'Покажем, как работа превращается в проверяемое доказательство, за 10 минут, без обязательств.',
    ctaBtn: 'Начните бесплатно!',
    geo: ['Анти-спуфинг GPS: проверяет, что позиция реальна','Фото опечатаны криптографической хеш-цепочкой','Отчёт с криптографической печатью и доказательной силой','Заказчик проверяет сам','Сертификация, а не просто учёт присутствия'],
    comp: ['200 000+ загрузок, 6 000+ компаний','GPS + QR + NFC + Bluetooth + геозона','Геозона: проверяет периметр (не подлинность GPS)','Чек-листы и аудиты для стройплощадок','Учёт присутствия, а не сертификация'],
    footnote: '* По закону (GDPR ст. 13) каждый сотрудник должен подписать уведомление о конфиденциальности перед геолокацией. Большинство GPS-программ это не обеспечивают: юридический риск остаётся на работодателе. GeoTapp автоматически создаёт персональное уведомление, даёт сотруднику подписать его цифровой подписью и блокирует доступ к GPS, пока оно не подписано. Ни одна другая программа на рынке этого не делает.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale] ?? META.en;
  return {
    title: { absolute: m.title }, description: m.description,
    alternates: buildLocaleAlternates(locale, PATHNAME),
    openGraph: { url: `https://geotapp.com/${locale}${PATHNAME}`, type: 'website', title: m.title, description: m.description },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description },
  };
}

export default async function GeoTappVsLibemaxPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = T[locale] ?? T.en;
  const faqItems = FAQ[locale] ?? FAQ.en;
  const labels = ROWS_LABELS[locale] ?? ROWS_LABELS.en;
  const rows = labels.map((feature, i) => ({ feature, geotapp: ROWS_GEO[i], competitor: ROWS_COMP[i] }));

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  const breadcrumb = buildComparisonBreadcrumb({ locale, pathname: PATHNAME, competitorName: 'Libemax' });
  const meta = META[locale] ?? META.en;
  const article = buildComparisonArticle({ locale, pathname: PATHNAME, headline: meta.title, description: meta.description, datePublished: ARTICLE_DATE_PUBLISHED, dateModified: ARTICLE_DATE_MODIFIED });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen pt-5 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">{t.badge}</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">GeoTapp vs Libemax: <span className="text-primary">{t.h1sub}</span></h1>
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
                <thead><tr className="border-b border-white/10 bg-white/5"><th className="text-left py-3 px-4 font-semibold text-sm">{t.feat}</th><th className="text-center py-3 px-4 font-semibold text-sm text-primary">GeoTapp</th><th className="text-center py-3 px-4 font-semibold text-sm text-text-secondary">Libemax</th></tr></thead>
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
              <div className="bg-white/5 border border-white/10 rounded-xl p-6"><h3 className="font-semibold text-text-secondary mb-3">Libemax</h3><ul className="space-y-2 text-sm text-text-secondary">{t.comp.map((li, i) => <li key={i}>&bull; {li}</li>)}</ul></div>
            </div>
          </section>
          <section className="mb-16"><h2 className="text-2xl font-bold mb-6">FAQ</h2><div className="space-y-4">{faqItems.map((item, i) => (<div key={i} className="border border-white/10 rounded-xl p-6"><h3 className="font-semibold mb-2">{item.q}</h3><p className="text-text-secondary text-sm">{item.a}</p></div>))}</div></section>
          <div className="text-center bg-gradient-to-br from-primary/20 to-purple-500/10 border border-primary/20 rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-3">{t.cta}</h2>
            <p className="text-text-secondary mb-6">{t.ctaDesc}</p>
            <TrialCTALink href={`/${locale}/trial/`} source="confronto_vs_libemax" className="btn-modern">{t.ctaBtn}</TrialCTALink>
          </div>
        </div>
      </div>
    </>
  );
}
