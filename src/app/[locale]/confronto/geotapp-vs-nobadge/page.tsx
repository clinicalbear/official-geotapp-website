import type { Metadata } from 'next';
import { TrialCTALink } from '@/components/analytics/TrialCTALink';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-nobadge/';
const ARTICLE_DATE_PUBLISHED = '2026-02-01';
const ARTICLE_DATE_MODIFIED = '2026-05-23';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs NoBadge - Confronto 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: timbratura o certificazione? Confronto su GPS anti-spoofing, report sigillati crittograficamente, prove fotografiche verificabili e conformità GDPR.' },
  en: { title: 'GeoTapp vs NoBadge - Comparison 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: attendance or certification? Compare anti-spoofing GPS, cryptographically sealed reports, verifiable photo evidence and GDPR compliance.' },
  de: { title: 'GeoTapp vs NoBadge - Vergleich 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: Zeiterfassung oder Zertifizierung? Vergleich von Anti-Spoofing-GPS, kryptographisch versiegelten Berichten und DSGVO-Konformität.' },
  nl: { title: 'GeoTapp vs NoBadge - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: tijdregistratie of certificering? Vergelijk anti-spoofing GPS, cryptografisch verzegelde rapporten en AVG-compliance.' },
  fr: { title: 'GeoTapp vs NoBadge - Comparaison 2026 | GeoTapp', description: 'GeoTapp vs NoBadge : pointage ou certification ? Comparez GPS anti-spoofing, rapports scellés cryptographiquement et conformité RGPD.' },
  es: { title: 'GeoTapp vs NoBadge - Comparación 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: ¿fichaje o certificación? Compara GPS anti-spoofing, informes sellados criptográficamente y cumplimiento del RGPD.' },
  pt: { title: 'GeoTapp vs NoBadge - Comparação 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: registo de presença ou certificação? Compare GPS anti-spoofing, relatórios selados criptograficamente e conformidade com o RGPD.' },
  da: { title: 'GeoTapp vs NoBadge - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: tidsregistrering eller certificering? Sammenlign anti-spoofing-GPS, kryptografisk forseglede rapporter og GDPR-overholdelse.' },
  sv: { title: 'GeoTapp vs NoBadge - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: tidsrapportering eller certifiering? Jämför anti-spoofing-GPS, kryptografiskt förseglade rapporter och GDPR-efterlevnad.' },
  nb: { title: 'GeoTapp vs NoBadge - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: tidsregistrering eller sertifisering? Sammenlign anti-spoofing-GPS, kryptografisk forseglede rapporter og GDPR-samsvar.' },
  ru: { title: 'GeoTapp vs NoBadge, Сравнение 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: учёт присутствия или сертификация? Сравните анти-спуфинговый GPS, криптографически опечатанные отчёты и соответствие GDPR.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza principale tra GeoTapp e NoBadge?', a: 'NoBadge è un sistema di rilevazione presenze: registra entrata e uscita dei dipendenti tramite GPS o QR code. GeoTapp è un sistema di certificazione del lavoro sul campo: produce report sigillati con GPS anti-spoofing e prove fotografiche che il committente verifica autonomamente. La differenza è tra registrare una presenza e certificare un intervento.' },
    { q: 'NoBadge ha il GPS anti-spoofing?', a: 'No. NoBadge registra la posizione GPS del dispositivo ma non verifica se la posizione è reale o falsificata. GeoTapp utilizza un controllo anti-spoofing attivo che incrocia più segnali per rilevare i tentativi di falsificazione della posizione.' },
    { q: 'Il committente può verificare i report di NoBadge?', a: 'NoBadge genera report interni per l\'amministrazione. GeoTapp genera report con sigillo crittografico che il committente può verificare in modo indipendente sul portale pubblico, senza bisogno di account o di fidarsi dell\'azienda.' },
    { q: 'GeoTapp o NoBadge per imprese di pulizie?', a: 'Se l\'obiettivo è solo registrare le ore dei dipendenti, NoBadge può bastare. Se l\'obiettivo è dimostrare al committente che il servizio è stato effettuato con prove non alterabili - GPS verificato, foto sigillate, report con valore probatorio - GeoTapp è l\'unica soluzione.' },
  ],
  en: [
    { q: 'What is the main difference between GeoTapp and NoBadge?', a: 'NoBadge is an attendance tracking system: it records employee check-in/out via GPS or QR code. GeoTapp is a field work certification system: it produces sealed reports with anti-spoofing GPS and photo evidence that clients independently verify. The difference is between recording a presence and certifying a job.' },
    { q: 'Does NoBadge have anti-spoofing GPS?', a: 'No. NoBadge records the device GPS position but does not verify if the position is real or spoofed. GeoTapp uses active anti-spoofing checks that cross-reference multiple signals to detect position falsification attempts.' },
    { q: 'Can the client verify NoBadge reports?', a: 'NoBadge generates internal reports for administration. GeoTapp generates reports with a cryptographic seal that clients can independently verify on a public portal, without needing an account or trusting the company.' },
    { q: 'GeoTapp or NoBadge for cleaning companies?', a: 'If you only need to track employee hours, NoBadge may suffice. If you need to prove to your client that the service was performed with tamper-proof evidence, verified GPS, sealed photos, reports with evidentiary value - GeoTapp is the only solution.' },
  ],
  de: [
    { q: 'Was ist der Hauptunterschied zwischen GeoTapp und NoBadge?', a: 'NoBadge ist ein Anwesenheitserfassungssystem: Es registriert das Ein- und Ausstempeln per GPS oder QR-Code. GeoTapp ist ein Zertifizierungssystem für Arbeit vor Ort: Es erstellt versiegelte Berichte mit Anti-Spoofing-GPS und Fotobeweisen, die der Auftraggeber unabhängig verifizieren kann. Der Unterschied liegt zwischen dem Erfassen einer Anwesenheit und dem Zertifizieren eines Einsatzes.' },
    { q: 'Hat NoBadge Anti-Spoofing-GPS?', a: 'Nein. NoBadge registriert die GPS-Position des Geräts, überprüft aber nicht, ob die Position echt oder gefälscht ist. GeoTapp verwendet aktive Anti-Spoofing-Prüfungen, die mehrere Signale abgleichen, um Manipulationsversuche zu erkennen.' },
    { q: 'Kann der Auftraggeber NoBadge-Berichte verifizieren?', a: 'NoBadge erstellt interne Berichte für die Verwaltung. GeoTapp erstellt Berichte mit kryptographischem Siegel, die der Auftraggeber unabhängig auf einem öffentlichen Portal verifizieren kann, ohne Konto und ohne dem Unternehmen vertrauen zu müssen.' },
    { q: 'GeoTapp oder NoBadge für Reinigungsunternehmen?', a: 'Wenn Sie nur Arbeitszeiten erfassen müssen, kann NoBadge ausreichen. Wenn Sie dem Auftraggeber beweisen müssen, dass der Service erbracht wurde, mit verifiziertem GPS, versiegelten Fotos und Berichten mit Beweiskraft, ist GeoTapp die einzige Lösung.' },
  ],
  fr: [
    { q: 'Quelle est la principale différence entre GeoTapp et NoBadge ?', a: 'NoBadge est un système de pointage : il enregistre les entrées et sorties des salariés par GPS ou QR code. GeoTapp est un système de certification du travail sur le terrain : il produit des rapports scellés avec GPS anti-spoofing et des preuves photographiques que le donneur d\'ordre vérifie lui-même. La différence est entre enregistrer une présence et certifier une intervention.' },
    { q: 'NoBadge dispose-t-il du GPS anti-spoofing ?', a: 'Non. NoBadge enregistre la position GPS de l\'appareil mais ne vérifie pas si la position est réelle ou falsifiée. GeoTapp utilise un contrôle anti-spoofing actif qui croise plusieurs signaux pour détecter les tentatives de falsification de la position.' },
    { q: 'Le donneur d\'ordre peut-il vérifier les rapports de NoBadge ?', a: 'NoBadge génère des rapports internes pour l\'administration. GeoTapp génère des rapports avec sceau cryptographique que le donneur d\'ordre peut vérifier de façon indépendante sur le portail public, sans compte ni besoin de faire confiance à l\'entreprise.' },
    { q: 'GeoTapp ou NoBadge pour les entreprises de nettoyage ?', a: 'Si l\'objectif est seulement d\'enregistrer les heures des salariés, NoBadge peut suffire. Si l\'objectif est de prouver au donneur d\'ordre que le service a été effectué avec des preuves infalsifiables - GPS vérifié, photos scellées, rapports à valeur probante - GeoTapp est la seule solution.' },
  ],
  es: [
    { q: '¿Cuál es la principal diferencia entre GeoTapp y NoBadge?', a: 'NoBadge es un sistema de control de presencia: registra la entrada y salida de los empleados mediante GPS o código QR. GeoTapp es un sistema de certificación del trabajo en campo: produce informes sellados con GPS anti-spoofing y pruebas fotográficas que el cliente verifica por su cuenta. La diferencia está entre registrar una presencia y certificar una intervención.' },
    { q: '¿NoBadge tiene GPS anti-spoofing?', a: 'No. NoBadge registra la posición GPS del dispositivo pero no verifica si la posición es real o falsificada. GeoTapp utiliza un control anti-spoofing activo que cruza varias señales para detectar los intentos de falsificación de la posición.' },
    { q: '¿Puede el cliente verificar los informes de NoBadge?', a: 'NoBadge genera informes internos para la administración. GeoTapp genera informes con sello criptográfico que el cliente puede verificar de forma independiente en el portal público, sin necesidad de cuenta ni de fiarse de la empresa.' },
    { q: '¿GeoTapp o NoBadge para empresas de limpieza?', a: 'Si el objetivo es solo registrar las horas de los empleados, NoBadge puede bastar. Si el objetivo es demostrar al cliente que el servicio se realizó con pruebas inalterables - GPS verificado, fotos selladas, informes con valor probatorio - GeoTapp es la única solución.' },
  ],
  pt: [
    { q: 'Qual é a principal diferença entre a GeoTapp e a NoBadge?', a: 'A NoBadge é um sistema de registo de presenças: regista a entrada e saída dos trabalhadores por GPS ou código QR. A GeoTapp é um sistema de certificação do trabalho no terreno: produz relatórios selados com GPS anti-spoofing e provas fotográficas que o cliente verifica sozinho. A diferença está entre registar uma presença e certificar uma intervenção.' },
    { q: 'A NoBadge tem GPS anti-spoofing?', a: 'Não. A NoBadge regista a posição GPS do dispositivo mas não verifica se a posição é real ou falsificada. A GeoTapp utiliza um controlo anti-spoofing ativo que cruza vários sinais para detetar as tentativas de falsificação da posição.' },
    { q: 'O cliente pode verificar os relatórios da NoBadge?', a: 'A NoBadge gera relatórios internos para a administração. A GeoTapp gera relatórios com selo criptográfico que o cliente pode verificar de forma independente no portal público, sem precisar de conta nem de confiar na empresa.' },
    { q: 'GeoTapp ou NoBadge para empresas de limpeza?', a: 'Se o objetivo é apenas registar as horas dos trabalhadores, a NoBadge pode bastar. Se o objetivo é provar ao cliente que o serviço foi efetuado com provas inalteráveis - GPS verificado, fotos seladas, relatórios com valor probatório, a GeoTapp é a única solução.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en NoBadge?', a: 'NoBadge is een systeem voor tijdregistratie: het registreert het in- en uitchecken van werknemers via GPS of QR-code. GeoTapp is een systeem voor werkcertificering op locatie: het maakt verzegelde rapporten met anti-spoofing-GPS en fotobewijs dat de opdrachtgever zelf verifieert. Het verschil zit tussen het registreren van een aanwezigheid en het certificeren van een opdracht.' },
    { q: 'Heeft NoBadge anti-spoofing-GPS?', a: 'Nee. NoBadge registreert de GPS-positie van het toestel maar verifieert niet of de positie echt of vervalst is. GeoTapp gebruikt een actieve anti-spoofing-controle die meerdere signalen combineert om pogingen tot vervalsing van de positie te detecteren.' },
    { q: 'Kan de opdrachtgever de rapporten van NoBadge verifiëren?', a: 'NoBadge genereert interne rapporten voor de administratie. GeoTapp genereert rapporten met een cryptografisch zegel die de opdrachtgever onafhankelijk kan verifiëren op het openbare portaal, zonder account en zonder het bedrijf te hoeven vertrouwen.' },
    { q: 'GeoTapp of NoBadge voor schoonmaakbedrijven?', a: 'Als het doel alleen is om de uren van werknemers te registreren, kan NoBadge volstaan. Als het doel is om de opdrachtgever te bewijzen dat de dienst is uitgevoerd met manipulatiebestendig bewijs, geverifieerd GPS, verzegelde foto\'s, rapporten met bewijskracht, is GeoTapp de enige oplossing.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og NoBadge?', a: 'NoBadge er et system til tidsregistrering: det registrerer medarbejdernes ind- og udstempling via GPS eller QR-kode. GeoTapp er et system til arbejdscertificering i marken: det producerer forseglede rapporter med anti-spoofing-GPS og fotobeviser, som kunden selv verificerer. Forskellen er mellem at registrere en tilstedeværelse og at certificere en opgave.' },
    { q: 'Har NoBadge anti-spoofing-GPS?', a: 'Nej. NoBadge registrerer enhedens GPS-position, men verificerer ikke, om positionen er ægte eller forfalsket. GeoTapp bruger en aktiv anti-spoofing-kontrol, der krydstjekker flere signaler for at opdage forsøg på at forfalske positionen.' },
    { q: 'Kan kunden verificere NoBadges rapporter?', a: 'NoBadge genererer interne rapporter til administrationen. GeoTapp genererer rapporter med kryptografisk segl, som kunden uafhængigt kan verificere på den offentlige portal, uden konto og uden at skulle stole på virksomheden.' },
    { q: 'GeoTapp eller NoBadge til rengøringsfirmaer?', a: 'Hvis målet kun er at registrere medarbejdernes timer, kan NoBadge være nok. Hvis målet er at bevise over for kunden, at servicen blev udført med beviser, der ikke kan ændres, verificeret GPS, forseglede fotos, rapporter med bevisværdi, er GeoTapp den eneste løsning.' },
  ],
  sv: [
    { q: 'Vad är den största skillnaden mellan GeoTapp och NoBadge?', a: 'NoBadge är ett system för tidsrapportering: det registrerar de anställdas in- och utcheckning via GPS eller QR-kod. GeoTapp är ett system för arbetscertifiering i fält: det producerar förseglade rapporter med anti-spoofing-GPS och fotobevis som kunden själv verifierar. Skillnaden ligger mellan att registrera en närvaro och att certifiera ett uppdrag.' },
    { q: 'Har NoBadge anti-spoofing-GPS?', a: 'Nej. NoBadge registrerar enhetens GPS-position men verifierar inte om positionen är äkta eller förfalskad. GeoTapp använder en aktiv anti-spoofing-kontroll som korsar flera signaler för att upptäcka försök att förfalska positionen.' },
    { q: 'Kan kunden verifiera NoBadges rapporter?', a: 'NoBadge genererar interna rapporter för administrationen. GeoTapp genererar rapporter med ett kryptografiskt sigill som kunden oberoende kan verifiera på den offentliga portalen, utan konto och utan att behöva lita på företaget.' },
    { q: 'GeoTapp eller NoBadge för städföretag?', a: 'Om målet bara är att registrera de anställdas timmar kan NoBadge räcka. Om målet är att bevisa för kunden att tjänsten utfördes med bevis som inte kan ändras, verifierad GPS, förseglade foton, rapporter med bevisvärde, är GeoTapp den enda lösningen.' },
  ],
  nb: [
    { q: 'Hva er den viktigste forskjellen mellom GeoTapp og NoBadge?', a: 'NoBadge er et system for tidsregistrering: det registrerer de ansattes inn- og utstempling via GPS eller QR-kode. GeoTapp er et system for arbeidssertifisering ute i felten: det produserer forseglede rapporter med anti-spoofing-GPS og fotobevis som oppdragsgiveren selv verifiserer. Forskjellen er mellom å registrere et oppmøte og å sertifisere et oppdrag.' },
    { q: 'Har NoBadge anti-spoofing-GPS?', a: 'Nei. NoBadge registrerer enhetens GPS-posisjon, men verifiserer ikke om posisjonen er ekte eller forfalsket. GeoTapp bruker en aktiv anti-spoofing-kontroll som krysskobler flere signaler for å oppdage forsøk på å forfalske posisjonen.' },
    { q: 'Kan oppdragsgiveren verifisere NoBadge-rapportene?', a: 'NoBadge genererer interne rapporter for administrasjonen. GeoTapp genererer rapporter med kryptografisk segl som oppdragsgiveren uavhengig kan verifisere på den offentlige portalen, uten konto og uten å måtte stole på selskapet.' },
    { q: 'GeoTapp eller NoBadge for renholdsbedrifter?', a: 'Hvis målet bare er å registrere de ansattes timer, kan NoBadge være nok. Hvis målet er å bevise overfor oppdragsgiveren at tjenesten ble utført med bevis som ikke kan endres, verifisert GPS, forseglede bilder, rapporter med bevisverdi, er GeoTapp den eneste løsningen.' },
  ],
  ru: [
    { q: 'В чём главное отличие GeoTapp от NoBadge?', a: 'NoBadge, это система учёта присутствия: она фиксирует приход и уход сотрудников через GPS или QR-код. GeoTapp, это система сертификации работы на объекте: она формирует опечатанные отчёты с анти-спуфинговым GPS и фотодоказательствами, которые заказчик проверяет сам. Разница между тем, чтобы зафиксировать присутствие, и тем, чтобы сертифицировать выполненную работу.' },
    { q: 'Есть ли у NoBadge анти-спуфинговый GPS?', a: 'Нет. NoBadge фиксирует GPS-позицию устройства, но не проверяет, реальна она или подделана. GeoTapp использует активную анти-спуфинговую проверку, которая сопоставляет несколько сигналов, чтобы выявить попытки подделки позиции.' },
    { q: 'Может ли заказчик проверить отчёты NoBadge?', a: 'NoBadge формирует внутренние отчёты для администрации. GeoTapp формирует отчёты с криптографической печатью, которые заказчик может независимо проверить на публичном портале, без учётной записи и без необходимости доверять компании.' },
    { q: 'GeoTapp или NoBadge для клининговых компаний?', a: 'Если цель, только учитывать часы сотрудников, NoBadge может быть достаточно. Если цель, доказать заказчику, что услуга была оказана, с доказательствами, которые нельзя подделать, проверенный GPS, опечатанные фото, отчёты с доказательной силой - GeoTapp единственное решение.' },
  ],
};

// Etichette della tabella di confronto, per locale.
const ROWS_LABELS: Record<string, string[]> = {
  it: ['GPS anti-spoofing (rileva posizioni falsificate)','Report sigillato crittograficamente','Verifica indipendente da parte del committente','Prove fotografiche con catena hash crittografata','Conformità GDPR / Garante Privacy','Timbratura da smartphone','QR code check-in','Gestione ferie e permessi','App nativa Android/iOS','Dashboard gestione team','Multi-sede','Nessun hardware richiesto','Informativa GPS automatica con firma digitale*'],
  en: ['Anti-spoofing GPS (detects fake positions)','Cryptographically sealed report','Independent verification by client','Photo evidence with cryptographic hash chain','GDPR compliant','Smartphone check-in','QR code check-in','Leave management','Native app Android/iOS','Team management dashboard','Multi-site','No hardware required','Automatic GPS privacy notice with digital signature*'],
  de: ['Anti-Spoofing-GPS (erkennt gefälschte Positionen)','Kryptographisch versiegelter Bericht','Unabhängige Prüfung durch den Auftraggeber','Fotobeweise mit kryptographischer Hash-Kette','DSGVO-konform','Stempelung per Smartphone','QR-Code-Check-in','Urlaubs- und Abwesenheitsverwaltung','Native App Android/iOS','Team-Management-Dashboard','Mehrere Standorte','Keine Hardware erforderlich','Automatische GPS-Datenschutzerklärung mit digitaler Signatur*'],
  fr: ['GPS anti-spoofing (détecte les positions falsifiées)','Rapport scellé cryptographiquement','Vérification indépendante par le client','Preuves photographiques avec chaîne de hachage cryptographique','Conforme RGPD','Pointage depuis smartphone','Check-in par QR code','Gestion des congés et absences','Application native Android/iOS','Tableau de bord de gestion d\'équipe','Multi-sites','Aucun matériel requis','Avis de confidentialité GPS automatique avec signature numérique*'],
  es: ['GPS anti-spoofing (detecta posiciones falsificadas)','Informe sellado criptográficamente','Verificación independiente por el cliente','Pruebas fotográficas con cadena hash criptográfica','Conforme al RGPD','Fichaje desde smartphone','Check-in por código QR','Gestión de vacaciones y permisos','App nativa Android/iOS','Panel de gestión de equipos','Multisede','Sin hardware necesario','Aviso de privacidad GPS automático con firma digital*'],
  pt: ['GPS anti-spoofing (deteta posições falsificadas)','Relatório selado criptograficamente','Verificação independente pelo cliente','Provas fotográficas com cadeia hash criptográfica','Conforme o RGPD','Registo a partir do smartphone','Check-in por código QR','Gestão de férias e ausências','App nativa Android/iOS','Painel de gestão de equipas','Multilocal','Sem hardware necessário','Aviso de privacidade GPS automático com assinatura digital*'],
  nl: ['Anti-spoofing-GPS (detecteert vervalste posities)','Cryptografisch verzegeld rapport','Onafhankelijke verificatie door de klant','Fotobewijs met cryptografische hashketen','AVG-conform','Registratie via smartphone','Check-in via QR-code','Verlof- en afwezigheidsbeheer','Native app Android/iOS','Dashboard voor teambeheer','Meerdere locaties','Geen hardware nodig','Automatische GPS-privacyverklaring met digitale handtekening*'],
  da: ['Anti-spoofing-GPS (registrerer forfalskede positioner)','Kryptografisk forseglet rapport','Uafhængig verificering af kunden','Fotobeviser med kryptografisk hash-kæde','GDPR-kompatibel','Registrering fra smartphone','Check-in via QR-kode','Ferie- og fraværsstyring','Native app Android/iOS','Dashboard til teamstyring','Flere lokationer','Ingen hardware påkrævet','Automatisk GPS-privatlivserklæring med digital signatur*'],
  sv: ['Anti-spoofing-GPS (upptäcker förfalskade positioner)','Kryptografiskt förseglad rapport','Oberoende verifiering av kunden','Fotobevis med kryptografisk hashkedja','GDPR-kompatibel','Incheckning från smartphone','Incheckning via QR-kod','Hantering av semester och frånvaro','Native app Android/iOS','Instrumentpanel för teamhantering','Flera arbetsplatser','Ingen hårdvara krävs','Automatiskt GPS-integritetsmeddelande med digital signatur*'],
  nb: ['Anti-spoofing-GPS (oppdager forfalskede posisjoner)','Kryptografisk forseglet rapport','Uavhengig verifisering av oppdragsgiver','Fotobevis med kryptografisk hash-kjede','GDPR-kompatibel','Registrering fra smarttelefon','Innsjekking via QR-kode','Ferie- og fraværshåndtering','Native app Android/iOS','Dashbord for teamstyring','Flere lokasjoner','Ingen maskinvare nødvendig','Automatisk GPS-personvernerklæring med digital signatur*'],
  ru: ['Анти-спуфинг GPS (выявляет подделанные позиции)','Криптографически опечатанный отчёт','Независимая проверка заказчиком','Фотодоказательства с криптографической хеш-цепочкой','Соответствие GDPR','Отметка со смартфона','Отметка по QR-коду','Управление отпусками и отсутствиями','Нативное приложение Android/iOS','Панель управления командой','Несколько объектов','Не требуется оборудование','Автоматическое уведомление о GPS с цифровой подписью*'],
};

const ROWS_GEO =  [true,true,true,true,true,true,true,true,true,true,true,true,true];
const ROWS_COMP = [false,false,false,false,true,true,true,true,false,true,true,true,false];

type Copy = {
  badge: string; h1sub: string; desc: string; summary: string; summaryText: string;
  noteTitle: string; noteText: string; features: string; feat: string; diff: string;
  cta: string; ctaDesc: string; ctaBtn: string; geo: string[]; comp: string[]; footnote: string;
};

const T: Record<string, Copy> = {
  it: {
    badge: 'Confronto App', h1sub: 'timbratura o certificazione?',
    desc: 'NoBadge registra le presenze dei dipendenti con GPS e QR code. GeoTapp certifica ogni intervento con GPS anti-spoofing, foto sigillate crittograficamente e report verificabili dal committente. Due approcci molto diversi.',
    summary: 'In sintesi:',
    summaryText: 'NoBadge è un ottimo sistema di rilevazione presenze per chi ha bisogno solo di registrare entrate e uscite. GeoTapp è per chi ha bisogno di dimostrare al proprio committente che il lavoro è stato fatto, con prove non alterabili, GPS verificato e report con valore probatorio che il cliente può controllare da solo.',
    noteTitle: 'Perché la semplice timbratura GPS non basta',
    noteText: 'La posizione GPS di uno smartphone può essere falsificata con un\'app gratuita: l\'operatore risulta in cantiere mentre è a casa. NoBadge registra questa posizione senza verificarla. GeoTapp la verifica attivamente con un controllo anti-spoofing che incrocia più segnali, è impossibile ingannarlo. In più, ogni foto è sigillata con una catena hash crittografata: se qualcuno la modifica, il sistema lo rileva immediatamente.',
    features: 'Confronto funzionalità chiave', feat: 'Funzionalità', diff: 'Approcci diversi',
    cta: 'Vuoi vedere GeoTapp in azione?',
    ctaDesc: 'Ti mostriamo come un intervento diventa una prova verificabile, in 10 minuti, senza impegno.',
    ctaBtn: 'Inizia subito gratuitamente!',
    geo: ['Report sigillato: prova difendibile per il committente','GPS anti-spoofing: impossibile falsificare la posizione','Foto sigillate con catena hash crittografata','Il committente verifica da solo, senza account','Progettato per pulizie, manutenzione, sicurezza, installatori'],
    comp: ['Registra presenze con GPS e QR code','Nessun controllo anti-spoofing sul GPS','Nessuna sigillatura crittografica delle foto','Report interni, non verificabili dal committente','Orientato alla gestione HR, non alla certificazione'],
    footnote: '* Per legge (GDPR Art. 13 e, in Italia, Art. 4 Statuto dei Lavoratori), ogni dipendente deve firmare un\'informativa privacy prima di essere geolocalizzato. La maggior parte dei software GPS non lo gestisce: il rischio legale resta al titolare. GeoTapp genera automaticamente l\'informativa personalizzata, la fa firmare digitalmente al dipendente e blocca l\'accesso GPS finché non è firmata. Nessun altro software sul mercato lo fa.',
  },
  en: {
    badge: 'App Comparison', h1sub: 'attendance or certification?',
    desc: 'NoBadge tracks employee attendance via GPS and QR code. GeoTapp certifies every job with anti-spoofing GPS, cryptographically sealed photos and client-verifiable reports. Two very different approaches.',
    summary: 'Bottom line:',
    summaryText: 'NoBadge is a solid attendance system for basic time tracking. GeoTapp is for companies that need to prove to their client that the work was done, with tamper-proof evidence, verified GPS and reports with evidentiary value that the client can check independently.',
    noteTitle: 'Why simple GPS attendance is not enough',
    noteText: 'A smartphone GPS position can be spoofed with a free app: the worker shows up on site while being at home. NoBadge records this position without verifying it. GeoTapp actively verifies it with an anti-spoofing check that cross-references multiple signals, it cannot be fooled. On top of that, every photo is sealed with a cryptographic hash chain: if anyone modifies it, the system detects it immediately.',
    features: 'Key features comparison', feat: 'Feature', diff: 'Different approaches',
    cta: 'Want to see GeoTapp in action?',
    ctaDesc: 'We show you how a job becomes verifiable proof, in 10 minutes, no commitment.',
    ctaBtn: 'Start for free!',
    geo: ['Sealed report: defensible proof for the client','Anti-spoofing GPS: position cannot be faked','Photos sealed with cryptographic hash chain','Client verifies independently, no account needed','Designed for cleaning, maintenance, security, installers'],
    comp: ['Records attendance via GPS and QR code','No anti-spoofing check on GPS position','No cryptographic photo sealing','Internal reports, not verifiable by client','HR-focused, not certification-focused'],
    footnote: '* By law (GDPR Art. 13), every employee must sign a privacy notice before being geolocated. Most GPS software does not handle this: the legal risk stays with the employer. GeoTapp automatically generates the personalised notice, gets it digitally signed by the employee and blocks GPS access until it is signed. No other software on the market does this.',
  },
  de: {
    badge: 'App-Vergleich', h1sub: 'Zeiterfassung oder Zertifizierung?',
    desc: 'NoBadge erfasst Anwesenheiten per GPS und QR-Code. GeoTapp zertifiziert jeden Einsatz mit Anti-Spoofing-GPS, kryptographisch versiegelten Fotos und vom Auftraggeber verifizierbaren Berichten. Zwei sehr unterschiedliche Ansätze.',
    summary: 'Fazit:',
    summaryText: 'NoBadge ist ein gutes Anwesenheitssystem für reine Zeiterfassung. GeoTapp ist für Unternehmen, die ihrem Auftraggeber beweisen müssen, dass die Arbeit erbracht wurde, mit fälschungssicheren Beweisen, verifiziertem GPS und Berichten mit Beweiskraft, die der Auftraggeber selbst prüfen kann.',
    noteTitle: 'Warum einfache GPS-Zeiterfassung nicht ausreicht',
    noteText: 'Die GPS-Position eines Smartphones kann mit einer kostenlosen App gefälscht werden: der Mitarbeiter erscheint auf der Baustelle, während er zu Hause ist. NoBadge registriert diese Position ohne Verifizierung. GeoTapp verifiziert sie aktiv mit einer Anti-Spoofing-Prüfung, die mehrere Signale abgleicht, sie lässt sich nicht täuschen. Zudem wird jedes Foto mit einer kryptographischen Hash-Kette versiegelt: ändert es jemand, erkennt das System es sofort.',
    features: 'Vergleich der wichtigsten Funktionen', feat: 'Funktion', diff: 'Unterschiedliche Ansätze',
    cta: 'Möchten Sie GeoTapp in Aktion sehen?',
    ctaDesc: 'Wir zeigen Ihnen, wie ein Einsatz zum verifizierbaren Beweis wird, in 10 Minuten, unverbindlich.',
    ctaBtn: 'Jetzt kostenlos starten!',
    geo: ['Versiegelter Bericht: beweiskräftiger Nachweis für den Auftraggeber','Anti-Spoofing-GPS: Position kann nicht gefälscht werden','Fotos versiegelt mit kryptographischer Hash-Kette','Der Auftraggeber verifiziert selbst, ohne Konto','Entwickelt für Reinigung, Wartung, Sicherheit, Installateure'],
    comp: ['Erfasst Anwesenheit per GPS und QR-Code','Keine Anti-Spoofing-Prüfung der GPS-Position','Keine kryptographische Versiegelung der Fotos','Interne Berichte, nicht vom Auftraggeber verifizierbar','HR-orientiert, nicht auf Zertifizierung ausgerichtet'],
    footnote: '* Laut Gesetz (DSGVO Art. 13) muss jeder Mitarbeiter vor der Geolokalisierung eine Datenschutzerklärung unterschreiben. Die meiste GPS-Software handhabt das nicht: das rechtliche Risiko bleibt beim Arbeitgeber. GeoTapp erstellt automatisch die personalisierte Erklärung, lässt sie vom Mitarbeiter digital unterschreiben und sperrt den GPS-Zugang, bis sie unterschrieben ist. Keine andere Software auf dem Markt tut das.',
  },
  fr: {
    badge: 'Comparatif d\'applis', h1sub: 'pointage ou certification ?',
    desc: 'NoBadge enregistre les présences des salariés par GPS et QR code. GeoTapp certifie chaque intervention avec GPS anti-spoofing, photos scellées cryptographiquement et rapports vérifiables par le donneur d\'ordre. Deux approches très différentes.',
    summary: 'En résumé :',
    summaryText: 'NoBadge est un bon système de pointage pour ceux qui ont seulement besoin d\'enregistrer les entrées et les sorties. GeoTapp est pour ceux qui doivent prouver à leur donneur d\'ordre que le travail a été fait, avec des preuves infalsifiables, un GPS vérifié et des rapports à valeur probante que le client peut contrôler lui-même.',
    noteTitle: 'Pourquoi le simple pointage GPS ne suffit pas',
    noteText: 'La position GPS d\'un smartphone peut être falsifiée avec une appli gratuite : l\'opérateur apparaît sur le chantier alors qu\'il est chez lui. NoBadge enregistre cette position sans la vérifier. GeoTapp la vérifie activement avec un contrôle anti-spoofing qui croise plusieurs signaux, impossible de le tromper. De plus, chaque photo est scellée par une chaîne de hachage cryptographique : si quelqu\'un la modifie, le système le détecte immédiatement.',
    features: 'Comparaison des fonctionnalités clés', feat: 'Fonctionnalité', diff: 'Des approches différentes',
    cta: 'Envie de voir GeoTapp en action ?',
    ctaDesc: 'Nous vous montrons comment une intervention devient une preuve vérifiable, en 10 minutes, sans engagement.',
    ctaBtn: 'Commencez gratuitement !',
    geo: ['Rapport scellé : preuve défendable pour le donneur d\'ordre','GPS anti-spoofing : impossible de falsifier la position','Photos scellées par chaîne de hachage cryptographique','Le client vérifie lui-même, sans compte','Conçu pour le nettoyage, la maintenance, la sécurité, les installateurs'],
    comp: ['Enregistre les présences par GPS et QR code','Aucun contrôle anti-spoofing sur le GPS','Aucun scellement cryptographique des photos','Rapports internes, non vérifiables par le client','Orienté gestion RH, pas certification'],
    footnote: '* Selon la loi (RGPD Art. 13), chaque salarié doit signer un avis de confidentialité avant d\'être géolocalisé. La plupart des logiciels GPS ne le gèrent pas : le risque juridique reste à l\'employeur. GeoTapp génère automatiquement l\'avis personnalisé, le fait signer numériquement par le salarié et bloque l\'accès GPS tant qu\'il n\'est pas signé. Aucun autre logiciel sur le marché ne le fait.',
  },
  es: {
    badge: 'Comparativa de apps', h1sub: '¿fichaje o certificación?',
    desc: 'NoBadge registra las presencias de los empleados con GPS y código QR. GeoTapp certifica cada intervención con GPS anti-spoofing, fotos selladas criptográficamente e informes verificables por el cliente. Dos enfoques muy distintos.',
    summary: 'En resumen:',
    summaryText: 'NoBadge es un buen sistema de control de presencia para quien solo necesita registrar entradas y salidas. GeoTapp es para quien necesita demostrar a su cliente que el trabajo se hizo, con pruebas inalterables, GPS verificado e informes con valor probatorio que el cliente puede controlar por sí mismo.',
    noteTitle: 'Por qué el simple fichaje GPS no basta',
    noteText: 'La posición GPS de un smartphone se puede falsificar con una app gratuita: el operario aparece en la obra mientras está en casa. NoBadge registra esa posición sin verificarla. GeoTapp la verifica activamente con un control anti-spoofing que cruza varias señales, es imposible engañarlo. Además, cada foto se sella con una cadena hash criptográfica: si alguien la modifica, el sistema lo detecta de inmediato.',
    features: 'Comparación de funciones clave', feat: 'Función', diff: 'Enfoques distintos',
    cta: '¿Quieres ver GeoTapp en acción?',
    ctaDesc: 'Te mostramos cómo una intervención se convierte en una prueba verificable, en 10 minutos, sin compromiso.',
    ctaBtn: '¡Empieza gratis!',
    geo: ['Informe sellado: prueba defendible para el cliente','GPS anti-spoofing: imposible falsificar la posición','Fotos selladas con cadena hash criptográfica','El cliente verifica por sí mismo, sin cuenta','Diseñado para limpieza, mantenimiento, seguridad, instaladores'],
    comp: ['Registra presencias con GPS y código QR','Sin control anti-spoofing del GPS','Sin sellado criptográfico de las fotos','Informes internos, no verificables por el cliente','Orientado a la gestión de RR. HH., no a la certificación'],
    footnote: '* Por ley (RGPD Art. 13), cada empleado debe firmar un aviso de privacidad antes de ser geolocalizado. La mayoría del software GPS no lo gestiona: el riesgo legal recae en el empleador. GeoTapp genera automáticamente el aviso personalizado, hace que el empleado lo firme digitalmente y bloquea el acceso GPS hasta que esté firmado. Ningún otro software del mercado lo hace.',
  },
  pt: {
    badge: 'Comparativo de apps', h1sub: 'registo de presença ou certificação?',
    desc: 'A NoBadge regista as presenças dos trabalhadores com GPS e código QR. A GeoTapp certifica cada intervenção com GPS anti-spoofing, fotos seladas criptograficamente e relatórios verificáveis pelo cliente. Duas abordagens muito diferentes.',
    summary: 'Em resumo:',
    summaryText: 'A NoBadge é um bom sistema de registo de presenças para quem só precisa de registar entradas e saídas. A GeoTapp é para quem precisa de provar ao seu cliente que o trabalho foi feito, com provas inalteráveis, GPS verificado e relatórios com valor probatório que o cliente pode controlar sozinho.',
    noteTitle: 'Porque é que o simples registo GPS não basta',
    noteText: 'A posição GPS de um smartphone pode ser falsificada com uma app gratuita: o operador aparece na obra enquanto está em casa. A NoBadge regista essa posição sem a verificar. A GeoTapp verifica-a ativamente com um controlo anti-spoofing que cruza vários sinais, é impossível enganá-lo. Além disso, cada foto é selada com uma cadeia hash criptográfica: se alguém a alterar, o sistema deteta-o imediatamente.',
    features: 'Comparação das funcionalidades-chave', feat: 'Funcionalidade', diff: 'Abordagens diferentes',
    cta: 'Quer ver a GeoTapp em ação?',
    ctaDesc: 'Mostramos-lhe como uma intervenção se torna uma prova verificável, em 10 minutos, sem compromisso.',
    ctaBtn: 'Comece grátis!',
    geo: ['Relatório selado: prova defensável para o cliente','GPS anti-spoofing: impossível falsificar a posição','Fotos seladas com cadeia hash criptográfica','O cliente verifica sozinho, sem conta','Concebido para limpeza, manutenção, segurança, instaladores'],
    comp: ['Regista presenças com GPS e código QR','Sem controlo anti-spoofing do GPS','Sem selagem criptográfica das fotos','Relatórios internos, não verificáveis pelo cliente','Orientado à gestão de RH, não à certificação'],
    footnote: '* Por lei (RGPD Art. 13), cada trabalhador deve assinar um aviso de privacidade antes de ser geolocalizado. A maioria do software GPS não trata disto: o risco legal fica com o empregador. A GeoTapp gera automaticamente o aviso personalizado, fá-lo assinar digitalmente pelo trabalhador e bloqueia o acesso GPS até estar assinado. Nenhum outro software no mercado o faz.',
  },
  nl: {
    badge: 'App-vergelijking', h1sub: 'tijdregistratie of certificering?',
    desc: 'NoBadge registreert de aanwezigheid van werknemers via GPS en QR-code. GeoTapp certificeert elke opdracht met anti-spoofing-GPS, cryptografisch verzegelde foto\'s en door de opdrachtgever verifieerbare rapporten. Twee heel verschillende benaderingen.',
    summary: 'Kort gezegd:',
    summaryText: 'NoBadge is een goed aanwezigheidssysteem voor wie alleen in- en uitchecken hoeft te registreren. GeoTapp is voor wie aan zijn opdrachtgever moet bewijzen dat het werk is gedaan, met manipulatiebestendig bewijs, geverifieerd GPS en rapporten met bewijskracht die de klant zelf kan controleren.',
    noteTitle: 'Waarom eenvoudige GPS-registratie niet genoeg is',
    noteText: 'De GPS-positie van een smartphone kan met een gratis app worden vervalst: de medewerker lijkt op de werf terwijl hij thuis is. NoBadge registreert deze positie zonder ze te verifiëren. GeoTapp verifieert ze actief met een anti-spoofing-controle die meerdere signalen combineert, die laat zich niet misleiden. Bovendien wordt elke foto verzegeld met een cryptografische hashketen: wijzigt iemand ze, dan detecteert het systeem dit onmiddellijk.',
    features: 'Vergelijking van kernfuncties', feat: 'Functie', diff: 'Verschillende benaderingen',
    cta: 'GeoTapp in actie zien?',
    ctaDesc: 'We laten je zien hoe een opdracht verifieerbaar bewijs wordt, in 10 minuten, vrijblijvend.',
    ctaBtn: 'Begin gratis!',
    geo: ['Verzegeld rapport: verdedigbaar bewijs voor de opdrachtgever','Anti-spoofing-GPS: positie kan niet worden vervalst','Foto\'s verzegeld met cryptografische hashketen','De opdrachtgever verifieert zelf, zonder account','Ontworpen voor schoonmaak, onderhoud, beveiliging, installateurs'],
    comp: ['Registreert aanwezigheid via GPS en QR-code','Geen anti-spoofing-controle op het GPS','Geen cryptografische verzegeling van de foto\'s','Interne rapporten, niet verifieerbaar door de klant','Gericht op HR-beheer, niet op certificering'],
    footnote: '* Volgens de wet (AVG Art. 13) moet elke werknemer een privacyverklaring ondertekenen voordat hij wordt gelokaliseerd. De meeste GPS-software regelt dit niet: het juridische risico blijft bij de werkgever. GeoTapp genereert automatisch de gepersonaliseerde verklaring, laat die digitaal ondertekenen door de werknemer en blokkeert de GPS-toegang tot ze ondertekend is. Geen enkele andere software op de markt doet dit.',
  },
  da: {
    badge: 'App-sammenligning', h1sub: 'tidsregistrering eller certificering?',
    desc: 'NoBadge registrerer medarbejdernes tilstedeværelse via GPS og QR-kode. GeoTapp certificerer hver opgave med anti-spoofing-GPS, kryptografisk forseglede fotos og rapporter, kunden kan verificere. To meget forskellige tilgange.',
    summary: 'Kort sagt:',
    summaryText: 'NoBadge er et godt tilstedeværelsessystem for dem, der kun har brug for at registrere ind og ud. GeoTapp er for dem, der skal bevise over for deres kunde, at arbejdet er udført, med beviser, der ikke kan ændres, verificeret GPS og rapporter med bevisværdi, som kunden selv kan kontrollere.',
    noteTitle: 'Hvorfor simpel GPS-registrering ikke er nok',
    noteText: 'En smartphones GPS-position kan forfalskes med en gratis app: medarbejderen fremstår på byggepladsen, mens han er hjemme. NoBadge registrerer denne position uden at verificere den. GeoTapp verificerer den aktivt med en anti-spoofing-kontrol, der krydstjekker flere signaler, den kan ikke narres. Derudover forsegles hvert foto med en kryptografisk hash-kæde: ændrer nogen det, opdager systemet det med det samme.',
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion', diff: 'Forskellige tilgange',
    cta: 'Vil du se GeoTapp i aktion?',
    ctaDesc: 'Vi viser dig, hvordan en opgave bliver til verificerbart bevis, på 10 minutter, uforpligtende.',
    ctaBtn: 'Kom gratis i gang!',
    geo: ['Forseglet rapport: forsvarligt bevis for kunden','Anti-spoofing-GPS: positionen kan ikke forfalskes','Fotos forseglet med kryptografisk hash-kæde','Kunden verificerer selv, uden konto','Designet til rengøring, vedligehold, sikkerhed, installatører'],
    comp: ['Registrerer tilstedeværelse via GPS og QR-kode','Ingen anti-spoofing-kontrol af GPS','Ingen kryptografisk forsegling af fotos','Interne rapporter, kan ikke verificeres af kunden','HR-orienteret, ikke rettet mod certificering'],
    footnote: '* Ifølge loven (GDPR art. 13) skal hver medarbejder underskrive en privatlivserklæring, før vedkommende geolokaliseres. De fleste GPS-programmer håndterer ikke dette: den juridiske risiko forbliver hos arbejdsgiveren. GeoTapp genererer automatisk den personlige erklæring, får den underskrevet digitalt af medarbejderen og blokerer GPS-adgangen, indtil den er underskrevet. Ingen anden software på markedet gør dette.',
  },
  sv: {
    badge: 'App-jämförelse', h1sub: 'tidsrapportering eller certifiering?',
    desc: 'NoBadge registrerar de anställdas närvaro via GPS och QR-kod. GeoTapp certifierar varje uppdrag med anti-spoofing-GPS, kryptografiskt förseglade foton och rapporter som kunden kan verifiera. Två mycket olika sätt att arbeta.',
    summary: 'Kort sagt:',
    summaryText: 'NoBadge är ett bra närvarosystem för den som bara behöver registrera in- och utcheckning. GeoTapp är för den som måste bevisa för sin kund att arbetet är utfört, med bevis som inte kan ändras, verifierad GPS och rapporter med bevisvärde som kunden själv kan kontrollera.',
    noteTitle: 'Varför enkel GPS-registrering inte räcker',
    noteText: 'En smartphones GPS-position kan förfalskas med en gratisapp: den anställde verkar vara på arbetsplatsen medan han är hemma. NoBadge registrerar denna position utan att verifiera den. GeoTapp verifierar den aktivt med en anti-spoofing-kontroll som korsar flera signaler, den går inte att lura. Dessutom förseglas varje foto med en kryptografisk hashkedja: om någon ändrar det upptäcker systemet det omedelbart.',
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion', diff: 'Olika sätt att arbeta',
    cta: 'Vill du se GeoTapp i praktiken?',
    ctaDesc: 'Vi visar hur ett uppdrag blir verifierbart bevis, på 10 minuter, utan förpliktelser.',
    ctaBtn: 'Kom igång gratis!',
    geo: ['Förseglad rapport: försvarbart bevis för kunden','Anti-spoofing-GPS: positionen kan inte förfalskas','Foton förseglade med kryptografisk hashkedja','Kunden verifierar själv, utan konto','Utformad för städ, underhåll, säkerhet, installatörer'],
    comp: ['Registrerar närvaro via GPS och QR-kod','Ingen anti-spoofing-kontroll av GPS','Ingen kryptografisk försegling av foton','Interna rapporter, kan inte verifieras av kunden','HR-inriktad, inte inriktad på certifiering'],
    footnote: '* Enligt lag (GDPR art. 13) måste varje anställd underteckna ett integritetsmeddelande innan han eller hon geolokaliseras. De flesta GPS-program hanterar inte detta: den juridiska risken stannar hos arbetsgivaren. GeoTapp genererar automatiskt det personliga meddelandet, låter den anställde signera det digitalt och blockerar GPS-åtkomsten tills det är signerat. Ingen annan programvara på marknaden gör detta.',
  },
  nb: {
    badge: 'App-sammenligning', h1sub: 'tidsregistrering eller sertifisering?',
    desc: 'NoBadge registrerer de ansattes oppmøte via GPS og QR-kode. GeoTapp sertifiserer hvert oppdrag med anti-spoofing-GPS, kryptografisk forseglede bilder og rapporter oppdragsgiveren kan verifisere. To svært forskjellige tilnærminger.',
    summary: 'Kort sagt:',
    summaryText: 'NoBadge er et godt oppmøtesystem for dem som bare trenger å registrere inn og ut. GeoTapp er for dem som må bevise overfor oppdragsgiveren at arbeidet er utført, med bevis som ikke kan endres, verifisert GPS og rapporter med bevisverdi som kunden selv kan kontrollere.',
    noteTitle: 'Hvorfor enkel GPS-registrering ikke er nok',
    noteText: 'GPS-posisjonen til en smarttelefon kan forfalskes med en gratis app: den ansatte ser ut til å være på byggeplassen mens han er hjemme. NoBadge registrerer denne posisjonen uten å verifisere den. GeoTapp verifiserer den aktivt med en anti-spoofing-kontroll som krysskobler flere signaler, den lar seg ikke lure. I tillegg forsegles hvert bilde med en kryptografisk hash-kjede: endrer noen det, oppdager systemet det umiddelbart.',
    features: 'Sammenligning av nøkkelfunksjoner', feat: 'Funksjon', diff: 'Forskjellige tilnærminger',
    cta: 'Vil du se GeoTapp i aksjon?',
    ctaDesc: 'Vi viser deg hvordan et oppdrag blir til verifiserbart bevis, på 10 minutter, uforpliktende.',
    ctaBtn: 'Kom i gang gratis!',
    geo: ['Forseglet rapport: forsvarlig bevis for oppdragsgiveren','Anti-spoofing-GPS: posisjonen kan ikke forfalskes','Bilder forseglet med kryptografisk hash-kjede','Oppdragsgiveren verifiserer selv, uten konto','Utviklet for renhold, vedlikehold, sikkerhet, installatører'],
    comp: ['Registrerer oppmøte via GPS og QR-kode','Ingen anti-spoofing-kontroll av GPS','Ingen kryptografisk forsegling av bildene','Interne rapporter, kan ikke verifiseres av oppdragsgiver','HR-orientert, ikke rettet mot sertifisering'],
    footnote: '* Ifølge loven (GDPR art. 13) må hver ansatt signere en personvernerklæring før vedkommende geolokaliseres. De fleste GPS-programmer håndterer ikke dette: den juridiske risikoen blir hos arbeidsgiveren. GeoTapp genererer automatisk den personlige erklæringen, lar den ansatte signere den digitalt og blokkerer GPS-tilgangen til den er signert. Ingen annen programvare på markedet gjør dette.',
  },
  ru: {
    badge: 'Сравнение приложений', h1sub: 'учёт присутствия или сертификация?',
    desc: 'NoBadge регистрирует присутствие сотрудников через GPS и QR-код. GeoTapp сертифицирует каждый выезд с помощью анти-спуфингового GPS, криптографически опечатанных фото и отчётов, проверяемых заказчиком. Два очень разных подхода.',
    summary: 'Коротко:',
    summaryText: 'NoBadge, хорошая система учёта присутствия для тех, кому нужно только фиксировать приход и уход. GeoTapp, для тех, кому нужно доказать заказчику, что работа выполнена, с помощью доказательств, которые нельзя подделать, проверенного GPS и отчётов с доказательной силой, которые клиент может проверить сам.',
    noteTitle: 'Почему простой учёт по GPS недостаточен',
    noteText: 'GPS-позицию смартфона можно подделать бесплатным приложением: сотрудник числится на объекте, находясь дома. NoBadge регистрирует эту позицию, не проверяя её. GeoTapp активно проверяет её анти-спуфинговым контролем, сопоставляющим несколько сигналов, его невозможно обмануть. Кроме того, каждое фото опечатывается криптографической хеш-цепочкой: если кто-то его изменит, система сразу это обнаружит.',
    features: 'Сравнение ключевых функций', feat: 'Функция', diff: 'Разные подходы',
    cta: 'Хотите увидеть GeoTapp в действии?',
    ctaDesc: 'Покажем, как работа превращается в проверяемое доказательство, за 10 минут, без обязательств.',
    ctaBtn: 'Начните бесплатно!',
    geo: ['Опечатанный отчёт: защитимое доказательство для заказчика','Анти-спуфинг GPS: позицию невозможно подделать','Фото опечатаны криптографической хеш-цепочкой','Заказчик проверяет сам, без учётной записи','Создан для клининга, обслуживания, охраны, монтажников'],
    comp: ['Регистрирует присутствие через GPS и QR-код','Нет анти-спуфингового контроля GPS','Нет криптографической опечатки фотографий','Внутренние отчёты, не проверяемые заказчиком','Ориентирован на управление кадрами, а не на сертификацию'],
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

export default async function GeoTappVsNoBadgePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = T[locale] ?? T.en;
  const faqItems = FAQ[locale] ?? FAQ.en;
  const labels = ROWS_LABELS[locale] ?? ROWS_LABELS.en;
  const rows = labels.map((feature, i) => ({ feature, geotapp: ROWS_GEO[i], competitor: ROWS_COMP[i] }));

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  const breadcrumb = buildComparisonBreadcrumb({ locale, pathname: PATHNAME, competitorName: 'NoBadge' });
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
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">GeoTapp vs NoBadge: <span className="text-primary">{t.h1sub}</span></h1>
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
                <thead><tr className="border-b border-white/10 bg-white/5"><th className="text-left py-3 px-4 font-semibold text-sm">{t.feat}</th><th className="text-center py-3 px-4 font-semibold text-sm text-primary">GeoTapp</th><th className="text-center py-3 px-4 font-semibold text-sm text-text-secondary">NoBadge</th></tr></thead>
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
              <div className="bg-white/5 border border-white/10 rounded-xl p-6"><h3 className="font-semibold text-text-secondary mb-3">NoBadge</h3><ul className="space-y-2 text-sm text-text-secondary">{t.comp.map((li, i) => <li key={i}>&bull; {li}</li>)}</ul></div>
            </div>
          </section>
          <section className="mb-16"><h2 className="text-2xl font-bold mb-6">FAQ</h2><div className="space-y-4">{faqItems.map((item, i) => (<div key={i} className="border border-white/10 rounded-xl p-6"><h3 className="font-semibold mb-2">{item.q}</h3><p className="text-text-secondary text-sm">{item.a}</p></div>))}</div></section>
          <div className="text-center bg-gradient-to-br from-primary/20 to-purple-500/10 border border-primary/20 rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-3">{t.cta}</h2>
            <p className="text-text-secondary mb-6">{t.ctaDesc}</p>
            <TrialCTALink href={`/${locale}/trial/`} source="confronto_vs_nobadge" className="btn-modern">{t.ctaBtn}</TrialCTALink>
          </div>
        </div>
      </div>
    </>
  );
}
