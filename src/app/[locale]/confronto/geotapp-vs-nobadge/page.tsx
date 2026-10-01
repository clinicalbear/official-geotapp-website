import type { Metadata } from 'next';
import ComparisonPageL from '@/components/ComparisonPageL';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-nobadge/';
const ARTICLE_DATE_PUBLISHED = '2026-02-01';
const ARTICLE_DATE_MODIFIED = '2026-05-23';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs NoBadge - Confronto 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: timbratura o prova verificabile? Confronto su controllo della posizione alla timbratura, report sigillati, foto di prova verificabili e informativa GPS.' },
  en: { title: 'GeoTapp vs NoBadge - Comparison 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: clocking in or verifiable proof? Comparison on the position check at clock-in, sealed reports, verifiable proof photos and the GPS notice.' },
  de: { title: 'GeoTapp vs NoBadge - Vergleich 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: Zeiterfassung oder überprüfbarer Nachweis? Vergleich von Positionsprüfung beim Stempeln, versiegelten Berichten, überprüfbaren Nachweisfotos und GPS-Information.' },
  nl: { title: 'GeoTapp vs NoBadge - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: registratie of controleerbaar bewijs? Vergelijking op locatiecontrole, verzegelde rapporten en bewijsfoto\'s.' },
  fr: { title: 'GeoTapp vs NoBadge - Comparatif 2026 | GeoTapp', description: 'GeoTapp vs NoBadge : pointage ou preuve vérifiable ? Position au pointage, rapports scellés, photos de preuve vérifiables et information GPS.' },
  es: { title: 'GeoTapp vs NoBadge - Comparación 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: ¿fichaje o prueba verificable? Comparación del control de la posición al fichar, los informes sellados, las fotos de prueba y el aviso GPS.' },
  pt: { title: 'GeoTapp vs NoBadge - Comparação 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: picagem ou prova verificável? Comparação do controlo da posição ao picar o ponto, relatórios selados, fotos de prova verificáveis e informação GPS.' },
  da: { title: 'GeoTapp vs NoBadge - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: stempling eller verificerbart bevis? Sammenligning af positionskontrol, forseglede rapporter og bevisfotos.' },
  sv: { title: 'GeoTapp vs NoBadge - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: instämpling eller verifierbart bevis? Jämförelse av positionskontroll vid instämpling, förseglade rapporter, verifierbara bevisfoton och GPS-informationen.' },
  nb: { title: 'GeoTapp vs NoBadge - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: stempling eller verifiserbart bevis? Sammenligning av posisjonskontroll, forseglede rapporter og bevisbilder.' },
  ru: { title: 'GeoTapp vs NoBadge - Сравнение 2026 | GeoTapp', description: 'GeoTapp vs NoBadge: отметка времени или проверяемое доказательство? Сравнение контроля местоположения при отметке, запечатанных отчётов, проверяемых фото-подтверждений и уведомления о GPS.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza principale tra GeoTapp e NoBadge?', a: 'NoBadge è un sistema di rilevazione presenze: registra entrata e uscita dei dipendenti tramite GPS o QR code. GeoTapp è un sistema di prova verificabile del lavoro sul campo: produce report sigillati con posizione controllata alla timbratura e foto di prova che il committente verifica da solo. La differenza è tra registrare una presenza e sigillare un intervento.' },
    { q: 'NoBadge controlla se la posizione è falsificata?', a: 'Tra le funzioni che NoBadge dichiara c\'è la registrazione della posizione del dispositivo, non un controllo sulle posizioni falsificate. GeoTapp, alla timbratura, rifiuta le posizioni simulate da app di finta posizione, quelle troppo imprecise e gli spostamenti impossibili.' },
    { q: 'Il committente può verificare i report di NoBadge?', a: 'NoBadge genera report interni per l\'amministrazione. GeoTapp genera report con sigillo crittografico che il committente può verificare da solo, online o con il verificatore offline, senza account e senza doversi fidare dell\'azienda.' },
    { q: 'GeoTapp o NoBadge per imprese di pulizie?', a: 'Se l\'obiettivo è solo registrare le ore dei dipendenti, NoBadge può bastare. Se l\'obiettivo è mostrare al committente le prove del servizio (posizione alla timbratura, foto di prova, un report dove ogni modifica successiva è rilevabile), serve GeoTapp.' },
  ],
  en: [
    { q: 'What is the main difference between GeoTapp and NoBadge?', a: 'NoBadge is an attendance system: it records employees\' clock-in and clock-out via GPS or QR code. GeoTapp is a system for verifiable proof of field work: it produces sealed reports with the position checked at clock-in and proof photos that the client verifies alone. The difference is between recording a presence and sealing a job.' },
    { q: 'Does NoBadge check whether the position is faked?', a: 'Among the features NoBadge lists is recording the device\'s position, not a check for faked positions. At clock-in GeoTapp rejects positions simulated by fake-location apps, positions that are too imprecise and impossible jumps.' },
    { q: 'Can the client verify NoBadge reports?', a: 'NoBadge generates internal reports for administration. GeoTapp generates reports with a cryptographic seal that the client can verify alone, online or with the offline verifier, without an account and without having to trust the company.' },
    { q: 'GeoTapp or NoBadge for cleaning companies?', a: 'If the goal is just to record employees\' hours, NoBadge may be enough. If the goal is to show the client proof of the service (position at clock-in, proof photos, a report in which every later change is detectable), you need GeoTapp.' },
  ],
  de: [
    { q: 'Was ist der Hauptunterschied zwischen GeoTapp und NoBadge?', a: 'NoBadge ist ein System zur Anwesenheitserfassung: Es erfasst Beginn und Ende der Arbeitszeit der Mitarbeiter per GPS oder QR-Code. GeoTapp ist ein System für überprüfbare Nachweise der Arbeit im Außendienst: Es erstellt versiegelte Berichte mit beim Stempeln geprüfter Position und Nachweisfotos, die der Auftraggeber selbst überprüft. Der Unterschied liegt zwischen einer erfassten Anwesenheit und einem versiegelten Einsatz.' },
    { q: 'Prüft NoBadge, ob die Position gefälscht ist?', a: 'Zu den Funktionen, die NoBadge angibt, gehört die Erfassung der Geräteposition, keine Prüfung auf gefälschte Positionen. GeoTapp weist beim Stempeln Positionen ab, die von Fake-Location-Apps simuliert wurden, zu ungenaue Positionen und unmögliche Ortssprünge.' },
    { q: 'Kann der Auftraggeber NoBadge-Berichte überprüfen?', a: 'NoBadge erstellt interne Berichte für die Verwaltung. GeoTapp erstellt Berichte mit kryptographischem Siegel, die der Auftraggeber selbst überprüfen kann, online oder mit dem Offline-Verifier, ohne Konto und ohne dem Unternehmen vertrauen zu müssen.' },
    { q: 'GeoTapp oder NoBadge für Reinigungsfirmen?', a: 'Wenn es nur darum geht, die Stunden der Mitarbeiter zu erfassen, kann NoBadge genügen. Wenn Sie dem Auftraggeber Nachweise der Leistung vorlegen müssen (Position beim Stempeln, Nachweisfotos, einen Bericht, in dem jede spätere Änderung erkennbar ist), brauchen Sie GeoTapp.' },
  ],
  fr: [
    { q: 'Quelle est la différence principale entre GeoTapp et NoBadge ?', a: 'NoBadge est un système de suivi des présences : il enregistre l\'arrivée et le départ des salariés par GPS ou QR code. GeoTapp est un système de preuve vérifiable du travail sur le terrain : il produit des rapports scellés avec une position contrôlée au pointage et des photos de preuve que le client vérifie lui-même. La différence, c\'est celle entre enregistrer une présence et sceller une intervention.' },
    { q: 'NoBadge contrôle-t-il si la position est falsifiée ?', a: 'Parmi les fonctionnalités que NoBadge annonce figure l\'enregistrement de la position de l\'appareil, et non un contrôle des positions falsifiées. Au pointage, GeoTapp refuse les positions simulées par des applis de fausse localisation, celles qui sont trop imprécises et les déplacements impossibles.' },
    { q: 'Le client peut-il vérifier les rapports de NoBadge ?', a: 'NoBadge génère des rapports internes pour l\'administration. GeoTapp génère des rapports avec un sceau cryptographique que le client peut vérifier lui-même, en ligne ou avec le vérificateur hors ligne, sans compte et sans avoir à se fier à l\'entreprise.' },
    { q: 'GeoTapp ou NoBadge pour les entreprises de nettoyage ?', a: 'Si l\'objectif est seulement d\'enregistrer les heures des salariés, NoBadge peut suffire. Si l\'objectif est de montrer au client les preuves de la prestation (position au pointage, photos de preuve, un rapport où toute modification ultérieure est détectable), il faut GeoTapp.' },
  ],
  es: [
    { q: '¿Cuál es la principal diferencia entre GeoTapp y NoBadge?', a: 'NoBadge es un sistema de control de presencia: registra la entrada y la salida de los empleados mediante GPS o código QR. GeoTapp es un sistema de prueba verificable del trabajo en campo: produce informes sellados con la posición controlada al fichar y fotos de prueba que el cliente verifica por sí mismo. La diferencia está entre registrar una presencia y sellar una intervención.' },
    { q: '¿NoBadge controla si la posición está falsificada?', a: 'Entre las funciones que NoBadge declara figura el registro de la posición del dispositivo, no un control sobre las posiciones falsificadas. Al fichar, GeoTapp rechaza las posiciones simuladas con apps de ubicación falsa, las demasiado imprecisas y los desplazamientos imposibles.' },
    { q: '¿Puede el cliente verificar los informes de NoBadge?', a: 'NoBadge genera informes internos para la administración. GeoTapp genera informes con sello criptográfico que el cliente puede verificar por sí mismo, en línea o con el Verificador sin conexión, sin cuenta y sin tener que fiarse de la empresa.' },
    { q: '¿GeoTapp o NoBadge para empresas de limpieza?', a: 'Si el objetivo es solo registrar las horas de los empleados, NoBadge puede bastar. Si el objetivo es mostrar al cliente las pruebas del servicio (posición al fichar, fotos de prueba, un informe en el que cualquier modificación posterior es detectable), hace falta GeoTapp.' },
  ],
  pt: [
    { q: 'Qual é a principal diferença entre a GeoTapp e a NoBadge?', a: 'A NoBadge é um sistema de registo de presenças: regista a entrada e a saída dos trabalhadores por GPS ou código QR. A GeoTapp é um sistema de prova verificável do trabalho no terreno: produz relatórios selados com a posição controlada ao picar o ponto e fotos de prova que o cliente verifica sozinho. A diferença está entre registar uma presença e selar uma intervenção.' },
    { q: 'A NoBadge controla se a posição é falsificada?', a: 'Entre as funções que a NoBadge declara está o registo da posição do dispositivo, não um controlo das posições falsificadas. Ao picar o ponto, a GeoTapp rejeita as posições simuladas por apps de localização falsa, as demasiado imprecisas e as deslocações impossíveis.' },
    { q: 'O cliente pode verificar os relatórios da NoBadge?', a: 'A NoBadge gera relatórios internos para a administração. A GeoTapp gera relatórios com selo criptográfico que o cliente pode verificar sozinho, online ou com o verificador offline, sem conta e sem ter de confiar na empresa.' },
    { q: 'GeoTapp ou NoBadge para empresas de limpeza?', a: 'Se o objetivo é apenas registar as horas dos trabalhadores, a NoBadge pode bastar. Se o objetivo é mostrar ao cliente as provas do serviço (posição ao picar o ponto, fotos de prova, um relatório em que qualquer alteração posterior é detetável), é a GeoTapp que serve.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en NoBadge?', a: 'NoBadge is een systeem voor het registreren van aanwezigheid: het legt aankomst en vertrek van de werknemers vast via gps of QR-code. GeoTapp is een systeem voor controleerbaar bewijs van het werk in het veld: het maakt verzegelde rapporten met een locatie die bij de registratie wordt gecontroleerd en bewijsfoto\'s die de opdrachtgever zelf controleert. Het verschil zit tussen een aanwezigheid registreren en een klus verzegelen.' },
    { q: 'Controleert NoBadge of de locatie vervalst is?', a: 'Onder de functies die NoBadge opgeeft staat het vastleggen van de locatie van het apparaat, niet een controle op vervalste locaties. GeoTapp weigert bij de registratie locaties die door nep-locatie-apps zijn gesimuleerd, te onnauwkeurige locaties en onmogelijke verplaatsingen.' },
    { q: 'Kan de opdrachtgever de rapporten van NoBadge controleren?', a: 'NoBadge maakt interne rapporten voor de administratie. GeoTapp maakt rapporten met een cryptografische verzegeling die de opdrachtgever zelf kan controleren, online of met de offline verifier, zonder account en zonder het bedrijf te hoeven vertrouwen.' },
    { q: 'GeoTapp of NoBadge voor schoonmaakbedrijven?', a: 'Is het doel alleen de uren van de werknemers vast te leggen, dan kan NoBadge volstaan. Is het doel de opdrachtgever het bewijs van de dienst te tonen (locatie bij de registratie, bewijsfoto\'s, een rapport waarin elke latere wijziging zichtbaar is), dan hebt u GeoTapp nodig.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og NoBadge?', a: 'NoBadge er et system til fremmøderegistrering: det registrerer medarbejdernes ind- og udstempling via GPS eller QR-kode. GeoTapp er et system til verificerbar dokumentation af arbejdet i marken: det laver forseglede rapporter med position kontrolleret ved stempling og bevisfotos, som kunden selv verificerer. Forskellen er mellem at registrere et fremmøde og at forsegle en opgave.' },
    { q: 'Kontrollerer NoBadge, om positionen er forfalsket?', a: 'Blandt de funktioner, NoBadge angiver, er registrering af enhedens position, ikke en kontrol af forfalskede positioner. Ved stempling afviser GeoTapp positioner simuleret af apps med falsk placering, positioner, der er for upræcise, og umulige forflytninger.' },
    { q: 'Kan kunden verificere NoBadges rapporter?', a: 'NoBadge genererer interne rapporter til administrationen. GeoTapp genererer rapporter med kryptografisk segl, som kunden selv kan verificere, online eller med den offline Verifier, uden konto og uden at skulle stole på virksomheden.' },
    { q: 'GeoTapp eller NoBadge til rengøringsfirmaer?', a: 'Hvis målet blot er at registrere medarbejdernes timer, kan NoBadge være nok. Hvis målet er at vise kunden beviserne for ydelsen (position ved stempling, bevisfotos, en rapport, hvor enhver senere ændring kan opdages), har du brug for GeoTapp.' },
  ],
  sv: [
    { q: 'Vad är den största skillnaden mellan GeoTapp och NoBadge?', a: 'NoBadge är ett närvarosystem: det registrerar de anställdas in- och utstämpling via GPS eller QR-kod. GeoTapp är ett system för verifierbara bevis på fältarbete: det tar fram förseglade rapporter med positionen kontrollerad vid instämpling och bevisfoton som kunden själv verifierar. Skillnaden är mellan att registrera en närvaro och att försegla ett uppdrag.' },
    { q: 'Kontrollerar NoBadge om positionen är förfalskad?', a: 'Bland funktionerna som NoBadge anger finns registrering av enhetens position, inte en kontroll av förfalskade positioner. Vid instämpling avvisar GeoTapp positioner som simulerats med appar för falsk plats, positioner som är för oprecisa och omöjliga förflyttningar.' },
    { q: 'Kan kunden verifiera NoBadges rapporter?', a: 'NoBadge skapar interna rapporter för administrationen. GeoTapp skapar rapporter med ett kryptografiskt sigill som kunden kan verifiera själv, online eller med den fristående verifieraren, utan konto och utan att behöva lita på företaget.' },
    { q: 'GeoTapp eller NoBadge för städföretag?', a: 'Om målet bara är att registrera de anställdas timmar kan NoBadge räcka. Om målet är att visa kunden bevis på tjänsten (position vid instämpling, bevisfoton, en rapport där varje senare ändring går att upptäcka) behöver du GeoTapp.' },
  ],
  nb: [
    { q: 'Hva er den viktigste forskjellen mellom GeoTapp og NoBadge?', a: 'NoBadge er et system for oppmøteregistrering: det registrerer de ansattes inn- og utstempling via GPS eller QR-kode. GeoTapp er et system for verifiserbar dokumentasjon av arbeidet ute i felt: det lager forseglede rapporter med posisjon kontrollert ved stempling og bevisbilder, som kunden selv verifiserer. Forskjellen ligger mellom å registrere et oppmøte og å forsegle et oppdrag.' },
    { q: 'Kontrollerer NoBadge om posisjonen er forfalsket?', a: 'Blant funksjonene NoBadge oppgir, er registrering av enhetens posisjon, ikke kontroll av forfalskede posisjoner. Ved stempling avviser GeoTapp posisjoner simulert av apper for falsk posisjon, posisjoner som er for upresise, og umulige forflytninger.' },
    { q: 'Kan kunden verifisere NoBadges rapporter?', a: 'NoBadge lager interne rapporter til administrasjonen. GeoTapp lager rapporter med kryptografisk segl som kunden selv kan verifisere, online eller med offline-verifikatoren, uten konto og uten å måtte stole på bedriften.' },
    { q: 'GeoTapp eller NoBadge for renholdsbedrifter?', a: 'Hvis målet bare er å registrere de ansattes timer, kan NoBadge være nok. Hvis målet er å vise kunden bevisene for tjenesten (posisjon ved stempling, bevisbilder, en rapport der enhver senere endring kan oppdages), trenger du GeoTapp.' },
  ],
  ru: [
    { q: 'В чём главное отличие GeoTapp от NoBadge?', a: 'NoBadge — это система учёта присутствия: она фиксирует приход и уход сотрудников через GPS или QR-код. GeoTapp — это система проверяемого доказательства работы на объекте: она формирует запечатанные отчёты с местоположением, проверенным при отметке, и фотодоказательствами, которые заказчик проверяет сам. Разница между тем, чтобы зафиксировать присутствие, и тем, чтобы запечатать выполненную работу.' },
    { q: 'Проверяет ли NoBadge, что позиция не подделана?', a: 'Среди заявленных функций NoBadge есть регистрация позиции устройства, но не проверка на подделанные позиции. GeoTapp при отметке отклоняет позиции, смоделированные приложениями для подмены координат, слишком неточные позиции и невозможные перемещения.' },
    { q: 'Может ли заказчик проверить отчёты NoBadge?', a: 'NoBadge формирует внутренние отчёты для администрации. GeoTapp формирует отчёты с криптографической печатью, которые заказчик может проверить сам, онлайн или с помощью офлайн-верификатора, без учётной записи и без необходимости доверять компании.' },
    { q: 'GeoTapp или NoBadge для клининговых компаний?', a: 'Если цель — только учитывать часы сотрудников, NoBadge может быть достаточно. Если цель — показать заказчику доказательства услуги (местоположение при отметке, фото-подтверждения, отчёт, в котором любое последующее изменение заметно), нужен GeoTapp.' },
  ],
};

// Etichette della tabella di confronto, per locale.
const ROWS_LABELS: Record<string, string[]> = {
  it: ['Controllo della posizione alla timbratura (rifiuta posizioni simulate)','Report sigillato crittograficamente','Verifica indipendente da parte del committente','Foto con impronta SHA-256 nel report','Posizione solo alla timbratura','Timbratura da smartphone','QR code check-in','Gestione ferie e permessi','App nativa Android/iOS','Dashboard gestione team','Multi-sede','Nessun hardware richiesto','Informativa GPS firmata nell\'app prima di timbrare*'],
  en: ['Position check at clock-in (rejects simulated positions)','Cryptographically sealed report','Independent verification by the client','Photos with SHA-256 fingerprint in the report','Position only at clock-in','Smartphone clock-in','QR code clock-in','Leave and time-off management','Native app Android/iOS','Team management dashboard','Multi-site','No hardware required','GPS notice signed in the app before clocking in*'],
  de: ['Positionsprüfung beim Stempeln (weist simulierte Positionen ab)','Kryptographisch versiegelter Bericht','Unabhängige Überprüfung durch den Auftraggeber','Fotos mit SHA-256-Fingerabdruck im Bericht','Position nur beim Stempeln','Stempeln per Smartphone','QR-Code-Check-in','Urlaubs- und Abwesenheitsverwaltung','Native App Android/iOS','Dashboard zur Teamverwaltung','Mehrere Standorte','Keine Hardware nötig','GPS-Information vor dem Stempeln in der App unterschrieben*'],
  fr: ['Contrôle de la position au pointage (refuse les positions simulées)','Rapport scellé cryptographiquement','Vérification indépendante par le client','Photos avec empreinte SHA-256 dans le rapport','Position uniquement au pointage','Pointage depuis le smartphone','Check-in par QR code','Gestion des congés et des absences','App native Android/iOS','Tableau de bord de gestion d\'équipe','Multi-sites','Aucun matériel requis','Information GPS signée dans l\'app avant de pointer*'],
  es: ['Control de la posición al fichar (rechaza posiciones simuladas)','Informe sellado criptográficamente','Verificación independiente por parte del cliente','Fotos con huella SHA-256 en el informe','Posición solo al fichar','Fichaje desde el smartphone','Check-in por código QR','Gestión de vacaciones y permisos','App nativa Android/iOS','Panel de gestión de equipos','Multisede','No requiere hardware','Aviso GPS firmado en la app antes de fichar*'],
  pt: ['Controlo da posição ao picar o ponto (rejeita posições simuladas)','Relatório selado criptograficamente','Verificação independente por parte do cliente','Fotos com impressão digital SHA-256 no relatório','Posição só ao picar o ponto','Picagem a partir do smartphone','Check-in por código QR','Gestão de férias e ausências','App nativa Android/iOS','Painel de gestão de equipas','Multilocal','Sem hardware necessário','Informação GPS assinada na app antes de picar o ponto*'],
  nl: ['Controle van de locatie bij de registratie (weigert gesimuleerde locaties)','Cryptografisch verzegeld rapport','Onafhankelijke controle door de opdrachtgever','Foto\'s met SHA-256-vingerafdruk in het rapport','Locatie alleen bij de registratie','Registratie via de smartphone','Check-in met QR-code','Beheer van verlof en vrije dagen','Native app voor Android/iOS','Dashboard voor teambeheer','Meerdere vestigingen','Geen hardware nodig','GPS-verklaring ondertekend in de app vóór het registreren*'],
  da: ['Positionskontrol ved stempling (afviser simulerede positioner)','Kryptografisk forseglet rapport','Uafhængig verificering af kunden','Fotos med SHA-256-fingeraftryk i rapporten','Position kun ved stempling','Stempling fra smartphone','Check-in med QR-kode','Ferie- og fraværsstyring','Native app Android/iOS','Dashboard til teamstyring','Flere lokationer','Intet hardware påkrævet','GPS-information underskrevet i appen, før man stempler*'],
  sv: ['Positionskontroll vid instämpling (avvisar simulerade positioner)','Kryptografiskt förseglad rapport','Oberoende verifiering av kunden','Foton med SHA-256-fingeravtryck i rapporten','Position bara vid instämpling','Instämpling från smartphone','Instämpling med QR-kod','Hantering av semester och ledighet','Native app för Android/iOS','Instrumentpanel för teamhantering','Flera arbetsplatser','Ingen hårdvara behövs','GPS-information signerad i appen innan man stämplar in*'],
  nb: ['Posisjonskontroll ved stempling (avviser simulerte posisjoner)','Kryptografisk forseglet rapport','Uavhengig verifisering fra kunden','Bilder med SHA-256-fingeravtrykk i rapporten','Posisjon bare ved stempling','Stempling fra smarttelefon','Innsjekking med QR-kode','Ferie- og fraværsstyring','Egen app Android/iOS','Dashbord for teamstyring','Flere steder','Ingen maskinvare nødvendig','GPS-informasjon signert i appen før man stempler*'],
  ru: ['Контроль местоположения при отметке (отклоняет смоделированные позиции)','Криптографически запечатанный отчёт','Независимая проверка заказчиком','Фото с отпечатком SHA-256 в отчёте','Местоположение фиксируется только при отметке','Отметка со смартфона','Отметка по QR-коду','Управление отпусками и отсутствиями','Нативное приложение Android/iOS','Панель управления командой','Несколько объектов','Не требуется оборудование','Уведомление о GPS, подписанное в приложении перед отметкой*'],
};

// Valori riverificati sul prodotto il 30/09/2026: niente QR/NFC, niente checklist; i prezzi sono pubblici.
const ROWS_GEO =  [true,true,true,true,true,true,false,true,true,true,true,true,true];
const ROWS_COMP = [false,false,false,false,true,true,true,true,false,true,true,true,false];

type Copy = {
  badge: string; h1sub: string; desc: string; summary: string; summaryText: string;
  noteTitle: string; noteText: string; features: string; feat: string; diff: string;
  cta: string; ctaDesc: string; ctaBtn: string; geo: string[]; comp: string[]; footnote: string;
};

const T: Record<string, Copy> = {
  it: {
    badge: 'Confronto App', h1sub: 'timbratura o prova verificabile?',
    desc: 'NoBadge registra le presenze dei dipendenti con GPS e QR code. GeoTapp sigilla ogni intervento: posizione controllata alla timbratura, foto di prova e un report che il committente verifica da solo. Due approcci molto diversi.',
    summary: 'In sintesi:',
    summaryText: 'NoBadge è un ottimo sistema di rilevazione presenze per chi ha bisogno solo di registrare entrate e uscite. GeoTapp è per chi ha bisogno di mostrare al proprio committente le prove del lavoro, con posizione alla timbratura, foto di prova e un report sigillato che il cliente può controllare da solo.',
    noteTitle: 'Perché la semplice timbratura GPS non basta',
    noteText: 'La posizione GPS di uno smartphone si può falsificare con un\'app gratuita: l\'operatore risulta in cantiere mentre è a casa. Registrare la posizione non basta a scoprirlo. GeoTapp, alla timbratura, rifiuta le posizioni simulate, quelle troppo imprecise e gli spostamenti impossibili. In più ogni foto entra nel report con la sua impronta SHA-256: se qualcuno la modifica, la verifica lo segnala.',
    features: 'Confronto funzionalità chiave', feat: 'Funzionalità', diff: 'Approcci diversi',
    cta: 'Vuoi vedere GeoTapp in azione?',
    ctaDesc: 'Provalo su un intervento vero: 14 giorni gratis, senza carta di credito.',
    ctaBtn: 'Inizia la prova gratuita',
    geo: ['Report sigillato da mostrare al committente','Alla timbratura rifiuta le posizioni simulate','Foto con impronta SHA-256 dentro il report','Il committente verifica da solo, senza account','Progettato per pulizie, manutenzione, sicurezza, installatori'],
    comp: ['Registra presenze con GPS e QR code','Nessun controllo dichiarato sulle posizioni simulate','Nessuna foto sigillata in un report verificabile','Report interni, non verificabili dal committente','Orientato alla gestione HR, non alla prova verificabile'],
    footnote: '* Per legge (art. 13 GDPR e, in Italia, art. 4 dello Statuto dei Lavoratori) ogni dipendente va informato prima di essere geolocalizzato. Se il software lascia questo passaggio al titolare, il rischio resta a lui. GeoTapp prepara l\'informativa personalizzata, la fa firmare per presa visione nell\'app e non lascia timbrare finché non è firmata.',
  },
  en: {
    badge: 'App Comparison', h1sub: 'attendance or verifiable proof?',
    desc: 'NoBadge records employee attendance with GPS and QR code. GeoTapp seals every job: position checked at clock-in, proof photos and a report that the client verifies alone. Two very different approaches.',
    summary: 'Bottom line:',
    summaryText: 'NoBadge is a solid attendance system for anyone who only needs to record clock-ins and clock-outs. GeoTapp is for anyone who needs to show their client proof of the work, with the position at clock-in, proof photos and a sealed report that the client can check alone.',
    noteTitle: 'Why a simple GPS clock-in is not enough',
    noteText: 'A smartphone\'s GPS position can be faked with a free app: the operator appears to be on site while at home. Recording the position is not enough to find out. At clock-in GeoTapp rejects simulated positions, positions that are too imprecise and impossible jumps. On top of that, every photo goes into the report with its SHA-256 fingerprint: if someone changes it, the check flags it.',
    features: 'Key features comparison', feat: 'Feature', diff: 'Different approaches',
    cta: 'Want to see GeoTapp in action?',
    ctaDesc: 'Try it on a real job: 14 days free, no credit card.',
    ctaBtn: 'Start the free trial',
    geo: ['Sealed report to show the client','At clock-in it rejects simulated positions','Photos with SHA-256 fingerprint inside the report','The client verifies alone, without an account','Designed for cleaning, maintenance, security, installers'],
    comp: ['Records attendance with GPS and QR code','No declared check on simulated positions','No photos sealed into a verifiable report','Internal reports, not verifiable by the client','Geared to HR management, not to verifiable proof'],
    footnote: '* By law (Art. 13 GDPR and, in Italy, Art. 4 of the Workers\' Statute), every employee must be informed before being geolocated. If the software leaves this step to the employer, the risk stays with them. GeoTapp prepares the personalised notice, has it signed for acknowledgement in the app and does not let staff clock in until it is signed.',
  },
  de: {
    badge: 'App-Vergleich', h1sub: 'Zeiterfassung oder überprüfbarer Nachweis?',
    desc: 'NoBadge erfasst die Anwesenheit der Mitarbeiter mit GPS und QR-Code. GeoTapp versiegelt jeden Einsatz: beim Stempeln geprüfte Position, Nachweisfotos und ein Bericht, den der Auftraggeber selbst überprüft. Zwei sehr verschiedene Ansätze.',
    summary: 'Kurz gesagt:',
    summaryText: 'NoBadge ist ein gutes System zur Anwesenheitserfassung für alle, die nur Beginn und Ende der Arbeitszeit festhalten müssen. GeoTapp ist für alle, die ihrem Auftraggeber Arbeitsnachweise vorlegen müssen, mit Position beim Stempeln, Nachweisfotos und einem versiegelten Bericht, den der Kunde selbst prüfen kann.',
    noteTitle: 'Warum einfaches GPS-Stempeln nicht genügt',
    noteText: 'Die GPS-Position eines Smartphones lässt sich mit einer kostenlosen App fälschen: Der Mitarbeiter erscheint auf der Baustelle, während er zu Hause ist. Die Position zu erfassen reicht nicht, um das zu entdecken. GeoTapp weist beim Stempeln simulierte Positionen ab, zu ungenaue Positionen und unmögliche Ortssprünge. Außerdem kommt jedes Foto mit seinem SHA-256-Fingerabdruck in den Bericht: Wird es verändert, meldet das die Prüfung.',
    features: 'Vergleich der wichtigsten Funktionen', feat: 'Funktion', diff: 'Verschiedene Ansätze',
    cta: 'Möchten Sie GeoTapp in Aktion sehen?',
    ctaDesc: 'Testen Sie es an einem echten Einsatz: 14 Tage kostenlos, keine Kreditkarte.',
    ctaBtn: 'Kostenlos testen',
    geo: ['Versiegelter Bericht zum Vorlegen beim Auftraggeber','Weist beim Stempeln simulierte Positionen ab','Fotos mit SHA-256-Fingerabdruck im Bericht','Der Auftraggeber prüft selbst, ohne Konto','Gedacht für Reinigung, Wartung, Sicherheit, Installateure'],
    comp: ['Erfasst Anwesenheit mit GPS und QR-Code','Keine angegebene Prüfung auf simulierte Positionen','Keine in einem überprüfbaren Bericht versiegelten Fotos','Interne Berichte, für den Auftraggeber nicht überprüfbar','Ausgerichtet auf HR-Verwaltung, nicht auf überprüfbaren Nachweis'],
    footnote: '* Nach geltendem Recht (Art. 13 DSGVO und in Italien Art. 4 des Arbeitnehmerstatuts) muss jeder Mitarbeiter informiert werden, bevor er geortet wird. Überlässt die Software diesen Schritt dem Arbeitgeber, bleibt das Risiko bei ihm. GeoTapp erstellt die personalisierte Information, lässt sie in der App zur Kenntnisnahme unterschreiben und lässt erst danach das Stempeln zu.',
  },
  fr: {
    badge: 'Comparatif d\'applis',
    h1sub: 'pointage ou preuve vérifiable ?',
    desc: 'NoBadge enregistre les présences des salariés avec le GPS et le QR code. GeoTapp scelle chaque intervention : position contrôlée au pointage, photos de preuve et un rapport que le client vérifie lui-même. Deux approches très différentes.',
    summary: 'En résumé :',
    summaryText: 'NoBadge est un très bon système de suivi des présences pour qui a seulement besoin d\'enregistrer les arrivées et les départs. GeoTapp s\'adresse à qui doit montrer à son client les preuves du travail, avec la position au pointage, des photos de preuve et un rapport scellé que le client peut contrôler lui-même.',
    noteTitle: 'Pourquoi le simple pointage GPS ne suffit pas',
    noteText: 'La position GPS d\'un smartphone peut être falsifiée avec une appli gratuite : l\'opérateur apparaît sur le chantier alors qu\'il est chez lui. Enregistrer la position ne suffit pas à le découvrir. Au pointage, GeoTapp refuse les positions simulées, celles qui sont trop imprécises et les déplacements impossibles. De plus, chaque photo entre dans le rapport avec son empreinte SHA-256 : si quelqu\'un la modifie, la vérification le signale.',
    features: 'Comparaison des fonctionnalités clés',
    feat: 'Fonctionnalité',
    diff: 'Des approches différentes',
    cta: 'Envie de voir GeoTapp en action ?',
    ctaDesc: 'Essayez-le sur une intervention réelle : 14 jours gratuits, sans carte bancaire.',
    ctaBtn: 'Commencer l\'essai gratuit',
    geo: ['Rapport scellé à montrer au client','Au pointage, refuse les positions simulées','Photos avec empreinte SHA-256 dans le rapport','Le client vérifie lui-même, sans compte','Conçu pour le nettoyage, la maintenance, la sécurité, les installateurs'],
    comp: ['Enregistre les présences avec le GPS et le QR code','Aucun contrôle annoncé sur les positions simulées','Aucune photo scellée dans un rapport vérifiable','Rapports internes, non vérifiables par le client','Orienté gestion RH, pas preuve vérifiable'],
    footnote: '* Selon la loi (art. 13 du RGPD et, en Italie, art. 4 du Statut des travailleurs), chaque salarié doit être informé avant d\'être géolocalisé. Si le logiciel laisse cette étape à l\'employeur, le risque lui reste. GeoTapp prépare l\'information personnalisée, la fait signer pour prise de connaissance dans l\'app et ne laisse pas pointer tant qu\'elle n\'est pas signée.',
  },
  es: {
    badge: 'Comparativa de apps', h1sub: '¿fichaje o prueba verificable?',
    desc: 'NoBadge registra las presencias de los empleados con GPS y código QR. GeoTapp sella cada intervención: posición controlada al fichar, fotos de prueba y un informe que el cliente verifica por sí mismo. Dos enfoques muy distintos.',
    summary: 'En resumen:',
    summaryText: 'NoBadge es un muy buen sistema de control de presencia para quien solo necesita registrar entradas y salidas. GeoTapp es para quien necesita mostrar a su cliente las pruebas del trabajo, con la posición al fichar, fotos de prueba y un informe sellado que el cliente puede comprobar por sí mismo.',
    noteTitle: 'Por qué el simple fichaje GPS no basta',
    noteText: 'La posición GPS de un smartphone se puede falsificar con una app gratuita: el operario figura en la obra mientras está en casa. Registrar la posición no basta para descubrirlo. Al fichar, GeoTapp rechaza las posiciones simuladas, las demasiado imprecisas y los desplazamientos imposibles. Además, cada foto entra en el informe con su huella SHA-256: si alguien la modifica, la verificación lo señala.',
    features: 'Comparación de funciones clave', feat: 'Función', diff: 'Enfoques distintos',
    cta: '¿Quieres ver GeoTapp en acción?',
    ctaDesc: 'Pruébalo en una intervención real: 14 días gratis, sin tarjeta de crédito.',
    ctaBtn: 'Empieza la prueba gratuita',
    geo: ['Informe sellado para enseñar al cliente','Al fichar rechaza las posiciones simuladas','Fotos con huella SHA-256 dentro del informe','El cliente verifica por sí mismo, sin cuenta','Diseñado para limpieza, mantenimiento, seguridad e instaladores'],
    comp: ['Registra presencias con GPS y código QR','Ningún control declarado sobre las posiciones simuladas','Ninguna foto sellada en un informe verificable','Informes internos, no verificables por el cliente','Orientado a la gestión de RR. HH., no a la prueba verificable'],
    footnote: '* Por ley (art. 13 del RGPD y, en Italia, art. 4 del Estatuto de los Trabajadores italiano) hay que informar a cada empleado antes de geolocalizarlo. Si el software deja este paso en manos del titular, el riesgo sigue siendo suyo. GeoTapp prepara el aviso personalizado, lo hace firmar en la app como recibido y no deja fichar hasta que está firmado.',
  },
  pt: {
    badge: 'Comparativo de apps', h1sub: 'picagem ou prova verificável?',
    desc: 'A NoBadge regista as presenças dos trabalhadores com GPS e código QR. A GeoTapp sela cada intervenção: posição controlada ao picar o ponto, fotos de prova e um relatório que o cliente verifica sozinho. Duas abordagens muito diferentes.',
    summary: 'Em resumo:',
    summaryText: 'A NoBadge é um ótimo sistema de registo de presenças para quem só precisa de registar entradas e saídas. A GeoTapp é para quem precisa de mostrar ao seu cliente as provas do trabalho, com a posição ao picar o ponto, fotos de prova e um relatório selado que o cliente pode verificar sozinho.',
    noteTitle: 'Porque é que a simples picagem por GPS não basta',
    noteText: 'A posição GPS de um smartphone pode ser falsificada com uma app gratuita: o operador aparece na obra enquanto está em casa. Registar a posição não chega para o descobrir. Ao picar o ponto, a GeoTapp rejeita as posições simuladas, as demasiado imprecisas e as deslocações impossíveis. Além disso, cada foto entra no relatório com a sua impressão digital SHA-256: se alguém a alterar, a verificação assinala-o.',
    features: 'Comparação das funcionalidades-chave', feat: 'Funcionalidade', diff: 'Abordagens diferentes',
    cta: 'Quer ver a GeoTapp em ação?',
    ctaDesc: 'Experimente numa intervenção real: 14 dias grátis, sem cartão de crédito.',
    ctaBtn: 'Começar teste gratuito',
    geo: ['Relatório selado para mostrar ao cliente','Ao picar o ponto, rejeita as posições simuladas','Fotos com impressão digital SHA-256 dentro do relatório','O cliente verifica sozinho, sem conta','Concebido para limpeza, manutenção, segurança, instaladores'],
    comp: ['Regista presenças com GPS e código QR','Sem controlo declarado das posições simuladas','Sem fotos seladas num relatório verificável','Relatórios internos, não verificáveis pelo cliente','Orientado à gestão de RH, não à prova verificável'],
    footnote: '* Por lei (art. 13.º do RGPD e, em Itália, art. 4.º do Estatuto dos Trabalhadores italiano), cada trabalhador tem de ser informado antes de ser geolocalizado. Se o software deixa este passo à entidade empregadora, o risco fica com ela. A GeoTapp prepara a informação personalizada, faz com que seja assinada na app como tomada de conhecimento e não deixa picar o ponto enquanto não estiver assinada.',
  },
  nl: {
    badge: 'App-vergelijking',
    h1sub: 'registratie of controleerbaar bewijs?',
    desc: 'NoBadge registreert de aanwezigheid van de werknemers met gps en QR-code. GeoTapp verzegelt elke klus: locatie gecontroleerd bij de registratie, bewijsfoto\'s en een rapport dat de opdrachtgever zelf controleert. Twee heel verschillende benaderingen.',
    summary: 'Kort gezegd:',
    summaryText: 'NoBadge is een uitstekend systeem voor aanwezigheidsregistratie voor wie alleen aankomst en vertrek hoeft vast te leggen. GeoTapp is voor wie zijn opdrachtgever het bewijs van het werk moet tonen, met locatie bij de registratie, bewijsfoto\'s en een verzegeld rapport dat de klant zelf kan controleren.',
    noteTitle: 'Waarom een simpele gps-registratie niet genoeg is',
    noteText: 'De gps-locatie van een smartphone is met een gratis app te vervalsen: de medewerker staat op de bouwplaats terwijl hij thuis is. De locatie vastleggen is niet genoeg om dat te ontdekken. GeoTapp weigert bij de registratie gesimuleerde locaties, te onnauwkeurige locaties en onmogelijke verplaatsingen. Bovendien komt elke foto in het rapport met haar SHA-256-vingerafdruk: wijzigt iemand haar, dan meldt de controle het.',
    features: 'Vergelijking van de belangrijkste functies',
    feat: 'Functie',
    diff: 'Verschillende benaderingen',
    cta: 'Wilt u GeoTapp in actie zien?',
    ctaDesc: 'Probeer het op een echte klus: 14 dagen gratis, zonder creditcard.',
    ctaBtn: 'Start de gratis proefperiode',
    geo: ['Verzegeld rapport om aan de opdrachtgever te tonen','Weigert bij de registratie gesimuleerde locaties','Foto\'s met SHA-256-vingerafdruk in het rapport','De opdrachtgever controleert zelf, zonder account','Ontworpen voor schoonmaak, onderhoud, beveiliging, installateurs'],
    comp: ['Legt aanwezigheid vast met gps en QR-code','Geen opgegeven controle op gesimuleerde locaties','Geen foto\'s verzegeld in een controleerbaar rapport','Interne rapporten, niet te controleren door de opdrachtgever','Gericht op hr-beheer, niet op controleerbaar bewijs'],
    footnote: '* Volgens de wet (art. 13 AVG en, in Italië, art. 4 van het arbeidsstatuut) moet elke werknemer worden geïnformeerd voordat hij wordt gelokaliseerd. Laat de software deze stap aan de verantwoordelijke over, dan blijft het risico bij hem. GeoTapp maakt de persoonlijke privacyverklaring klaar, laat die in de app voor kennisgeving ondertekenen en laat niet registreren totdat ze is ondertekend.',
  },
  da: {
    badge: 'App-sammenligning', h1sub: 'stempling eller verificerbart bevis?',
    desc: 'NoBadge registrerer medarbejdernes fremmøde med GPS og QR-kode. GeoTapp forsegler hver opgave: position kontrolleret ved stempling, bevisfotos og en rapport, som kunden selv verificerer. To meget forskellige tilgange.',
    summary: 'Kort sagt:',
    summaryText: 'NoBadge er et godt system til fremmøderegistrering for dem, der kun har brug for at registrere ind- og udstempling. GeoTapp er til dem, der skal vise deres kunde beviserne for arbejdet, med position ved stempling, bevisfotos og en forseglet rapport, som kunden selv kan kontrollere.',
    noteTitle: 'Hvorfor almindelig GPS-stempling ikke er nok',
    noteText: 'En smartphones GPS-position kan forfalskes med en gratis app: medarbejderen fremstår på byggepladsen, mens vedkommende er hjemme. At registrere positionen er ikke nok til at opdage det. Ved stempling afviser GeoTapp simulerede positioner, positioner, der er for upræcise, og umulige forflytninger. Desuden kommer hvert foto ind i rapporten med sit SHA-256-fingeraftryk: hvis nogen ændrer det, slår verificeringen alarm.',
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion', diff: 'Forskellige tilgange',
    cta: 'Vil du se GeoTapp i aktion?',
    ctaDesc: 'Prøv det på en rigtig opgave: 14 dage gratis, uden kreditkort.',
    ctaBtn: 'Start gratis prøveperiode',
    geo: ['Forseglet rapport at vise kunden','Afviser simulerede positioner ved stempling','Fotos med SHA-256-fingeraftryk i rapporten','Kunden verificerer selv, uden konto','Lavet til rengøring, vedligeholdelse, vagt og installatører'],
    comp: ['Registrerer fremmøde med GPS og QR-kode','Ingen angivet kontrol af simulerede positioner','Ingen fotos forseglet i en verificerbar rapport','Interne rapporter, som kunden ikke kan verificere','Orienteret mod HR-styring, ikke mod verificerbart bevis'],
    footnote: '* Ifølge loven (GDPR art. 13 og, i Italien, art. 4 i arbejdstagerloven, Statuto dei Lavoratori) skal hver medarbejder informeres, før vedkommende geolokaliseres. Overlader softwaren dette trin til arbejdsgiveren, er risikoen stadig arbejdsgiverens. GeoTapp forbereder den personlige information, får den underskrevet i appen som bekræftelse på, at den er læst, og lader ikke medarbejderen stemple, før den er underskrevet.',
  },
  sv: {
    badge: 'App-jämförelse', h1sub: 'närvaro eller verifierbart bevis?',
    desc: 'NoBadge registrerar de anställdas närvaro med GPS och QR-kod. GeoTapp förseglar varje uppdrag: position som kontrolleras vid instämpling, bevisfoton och en rapport som kunden själv verifierar. Två mycket olika angreppssätt.',
    summary: 'Kort sagt:',
    summaryText: 'NoBadge är ett gediget närvarosystem för den som bara behöver registrera in- och utstämplingar. GeoTapp är för den som behöver visa sin kund bevis på arbetet, med position vid instämpling, bevisfoton och en förseglad rapport som kunden kan kontrollera själv.',
    noteTitle: 'Varför en enkel GPS-instämpling inte räcker',
    noteText: 'En smartphones GPS-position kan förfalskas med en gratisapp: medarbetaren verkar vara på plats medan hen är hemma. Att registrera positionen räcker inte för att upptäcka det. Vid instämpling avvisar GeoTapp simulerade positioner, positioner som är för oprecisa och omöjliga förflyttningar. Dessutom hamnar varje foto i rapporten med sitt SHA-256-fingeravtryck: om någon ändrar det flaggar kontrollen det.',
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion', diff: 'Olika angreppssätt',
    cta: 'Vill du se GeoTapp i praktiken?',
    ctaDesc: 'Prova på ett riktigt uppdrag: 14 dagar gratis, utan kreditkort.',
    ctaBtn: 'Starta den kostnadsfria provperioden',
    geo: ['Förseglad rapport att visa kunden','Avvisar simulerade positioner vid instämpling','Foton med SHA-256-fingeravtryck i rapporten','Kunden verifierar själv, utan konto','Gjort för städning, underhåll, bevakning och installatörer'],
    comp: ['Registrerar närvaro med GPS och QR-kod','Ingen angiven kontroll av simulerade positioner','Inga foton förseglade i en verifierbar rapport','Interna rapporter som kunden inte kan verifiera','Inriktat på HR-hantering, inte på verifierbart bevis'],
    footnote: '* Enligt lag (artikel 13 i GDPR) måste varje anställd informeras innan hen geolokaliseras. Om programvaran överlåter det steget åt arbetsgivaren ligger risken kvar hos arbetsgivaren. GeoTapp tar fram den personliga informationen, låter den anställde signera den som läst i appen och släpper inte till instämpling förrän den är signerad.',
  },
  nb: {
    badge: 'App-sammenligning', h1sub: 'stempling eller verifiserbart bevis?',
    desc: 'NoBadge registrerer de ansattes oppmøte med GPS og QR-kode. GeoTapp forsegler hvert oppdrag: posisjon kontrollert ved stempling, bevisbilder og en rapport som kunden selv verifiserer. To svært ulike tilnærminger.',
    summary: 'Kort sagt:',
    summaryText: 'NoBadge er et godt system for oppmøteregistrering for dem som bare trenger å registrere inn- og utstempling. GeoTapp er for dem som må vise kunden bevisene for arbeidet, med posisjon ved stempling, bevisbilder og en forseglet rapport som kunden selv kan kontrollere.',
    noteTitle: 'Hvorfor vanlig GPS-stempling ikke er nok',
    noteText: 'GPS-posisjonen til en smarttelefon kan forfalskes med en gratis app: den ansatte framstår på byggeplassen mens vedkommende er hjemme. Å registrere posisjonen er ikke nok til å oppdage det. Ved stempling avviser GeoTapp simulerte posisjoner, posisjoner som er for upresise, og umulige forflytninger. I tillegg kommer hvert bilde inn i rapporten med sitt SHA-256-fingeravtrykk: hvis noen endrer det, slår verifiseringen alarm.',
    features: 'Sammenligning av nøkkelfunksjoner', feat: 'Funksjon', diff: 'Ulike tilnærminger',
    cta: 'Vil du se GeoTapp i aksjon?',
    ctaDesc: 'Prøv det på et ekte oppdrag: 14 dager gratis, uten kredittkort.',
    ctaBtn: 'Start gratis prøveperiode',
    geo: ['Forseglet rapport å vise kunden','Avviser simulerte posisjoner ved stempling','Bilder med SHA-256-fingeravtrykk i rapporten','Kunden verifiserer selv, uten konto','Laget for renhold, vedlikehold, vakt og installatører'],
    comp: ['Registrerer oppmøte med GPS og QR-kode','Ingen oppgitt kontroll av simulerte posisjoner','Ingen bilder forseglet i en verifiserbar rapport','Interne rapporter som kunden ikke kan verifisere','Orientert mot HR-styring, ikke mot verifiserbart bevis'],
    footnote: '* Ifølge loven (GDPR art. 13 og, i Italia, art. 4 i arbeidstakerloven, Statuto dei Lavoratori) må hver ansatt informeres før vedkommende geolokaliseres. Overlater programvaren dette trinnet til arbeidsgiveren, blir risikoen hos arbeidsgiveren. GeoTapp forbereder den personlige informasjonen, får den signert i appen som bekreftelse på at den er lest, og lar ikke den ansatte stemple før den er signert.',
  },
  ru: {
    badge: 'Сравнение приложений', h1sub: 'учёт присутствия или запечатанное доказательство?',
    desc: 'NoBadge регистрирует присутствие сотрудников через GPS и QR-код. GeoTapp запечатывает каждый выезд: местоположение проверяется при отметке, фото-подтверждения и отчёт, который заказчик проверяет сам. Два очень разных подхода.',
    summary: 'Коротко:',
    summaryText: 'NoBadge — хорошая система учёта присутствия для тех, кому нужно только фиксировать приход и уход. GeoTapp — для тех, кому нужно показать заказчику доказательства работы: местоположение при отметке, фото-подтверждения и запечатанный отчёт, который клиент может проверить сам.',
    noteTitle: 'Почему простой учёт по GPS недостаточен',
    noteText: 'GPS-позицию смартфона можно подделать бесплатным приложением: сотрудник числится на объекте, находясь дома. Просто зарегистрировать позицию недостаточно, чтобы это обнаружить. GeoTapp при отметке отклоняет смоделированные позиции, слишком неточные и невозможные перемещения. Кроме того, каждое фото попадает в отчёт со своим отпечатком SHA-256: если кто-то его изменит, проверка это покажет.',
    features: 'Сравнение ключевых функций', feat: 'Функция', diff: 'Разные подходы',
    cta: 'Хотите увидеть GeoTapp в действии?',
    ctaDesc: 'Попробуйте на реальной работе: 14 дней бесплатно, без банковской карты.',
    ctaBtn: 'Начать бесплатную пробную версию',
    geo: ['Запечатанный отчёт, который можно показать заказчику','При отметке отклоняет смоделированные позиции','Фото с отпечатком SHA-256 в отчёте','Заказчик проверяет сам, без учётной записи','Создан для клининга, обслуживания, охраны, монтажников'],
    comp: ['Регистрирует присутствие через GPS и QR-код','Нет заявленной проверки на смоделированные позиции','Нет фото, запечатанных в проверяемом отчёте','Внутренние отчёты, не проверяемые заказчиком','Ориентирован на управление кадрами, а не на проверяемое доказательство'],
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

export default async function GeoTappVsNoBadgePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = localizeEnglishDeep(T[locale] ?? T.en, locale);
  const faqItems = localizeEnglishDeep(FAQ[locale] ?? FAQ.en, locale);
  const labels = localizeEnglishDeep(ROWS_LABELS[locale] ?? ROWS_LABELS.en, locale);
  const rows = labels.map((feature, i) => ({ feature, geotapp: ROWS_GEO[i], competitor: ROWS_COMP[i] }));

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
  const breadcrumb = buildComparisonBreadcrumb({ locale, pathname: PATHNAME, competitorName: 'NoBadge' });
  const meta = localizeEnglishDeep(META[locale] ?? META.en, locale);
  const article = buildComparisonArticle({ locale, pathname: PATHNAME, headline: meta.title, description: meta.description, datePublished: ARTICLE_DATE_PUBLISHED, dateModified: ARTICLE_DATE_MODIFIED });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ComparisonPageL
        locale={locale}
        competitorName="NoBadge"
        competitorId="nobadge"
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
