import type { Metadata } from 'next';
import ComparisonPageL from '@/components/ComparisonPageL';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-jibble/';
const ARTICLE_DATE_PUBLISHED = '2026-07-02';
const ARTICLE_DATE_MODIFIED = '2026-07-02';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs Jibble - Confronto 2026 | GeoTapp', description: 'GeoTapp vs Jibble: differenze per aziende con operatori sul campo. Jibble conta le presenze con volto e GPS base; GeoTapp prova ogni intervento con posizione, ora, foto e report in cui ogni modifica successiva è rilevabile.' },
  en: { title: 'GeoTapp vs Jibble - Comparison 2026 | GeoTapp', description: 'GeoTapp vs Jibble: key differences for field service companies. Jibble logs attendance with face recognition and basic GPS; GeoTapp proves every job with location, time, photos and a report in which every later change is detectable.' },
  de: { title: 'GeoTapp vs Jibble - Vergleich 2026 | GeoTapp', description: 'GeoTapp vs Jibble: Unterschiede für Betriebe mit Mitarbeitern im Außendienst. Jibble zählt Anwesenheit mit Gesichtserkennung und einfachem GPS; GeoTapp belegt jeden Einsatz mit Position, Uhrzeit, Fotos und einem Bericht, in dem jede spätere Änderung erkennbar ist.' },
  fr: { title: 'GeoTapp vs Jibble - Comparatif 2026 | GeoTapp', description: 'GeoTapp vs Jibble : Jibble compte les présences (visage, GPS de base) ; GeoTapp prouve chaque intervention avec position, heure, photos et rapport scellé.' },
  es: { title: 'GeoTapp vs Jibble - Comparación 2026 | GeoTapp', description: 'GeoTapp vs Jibble: diferencias clave para empresas con operarios de campo. Jibble registra la asistencia con rostro y GPS básico; GeoTapp prueba cada intervención con GPS verificado, fotos e informes cuya modificación es detectable.' },
  pt: { title: 'GeoTapp vs Jibble - Comparação 2026 | GeoTapp', description: 'GeoTapp vs Jibble: diferenças-chave para empresas com operadores no terreno. A Jibble regista presenças com rosto e GPS básico; a GeoTapp prova cada intervenção com GPS verificado, fotos e relatórios cuja alteração é detetável.' },
  nl: { title: 'GeoTapp vs Jibble - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Jibble: de verschillen voor bedrijven met medewerkers in het veld. Jibble telt de aanwezigheid met gezicht en eenvoudige gps; GeoTapp bewijst elke klus met locatie, tijd, foto\'s en een rapport waarin elke latere wijziging zichtbaar is.' },
  da: { title: 'GeoTapp vs Jibble - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Jibble: vigtige forskelle for virksomheder med medarbejdere i marken. Jibble registrerer fremmøde med ansigt og basis-GPS; GeoTapp beviser hver opgave med verificeret GPS, fotos og rapporter hvor enhver ændring kan opdages.' },
  sv: { title: 'GeoTapp vs Jibble - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs Jibble: viktiga skillnader för företag med fältpersonal. Jibble registrerar närvaro med ansikte och enkel GPS; GeoTapp bevisar varje uppdrag med verifierad GPS, foton och rapporter där varje ändring är spårbar.' },
  nb: { title: 'GeoTapp vs Jibble - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Jibble: viktige forskjeller for bedrifter med feltarbeidere. Jibble registrerer oppmøte med ansikt og enkel GPS; GeoTapp beviser hvert oppdrag med verifisert GPS, bilder og rapporter hvor enhver endring er sporbar.' },
  ru: { title: 'GeoTapp vs Jibble, Сравнение 2026 | GeoTapp', description: 'GeoTapp vs Jibble: ключевые различия для компаний с выездными работниками. Jibble отмечает присутствие по лицу и базовому GPS; GeoTapp доказывает каждое задание проверенным GPS, фото и защищёнными отчётами.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza principale tra GeoTapp e Jibble?', a: 'Jibble è un sistema di rilevazione presenze: registra chi timbra, con riconoscimento facciale e GPS di base al momento della timbratura. GeoTapp è un sistema di prova del lavoro: genera report sigillati con posizione, ora e foto, prove che il cliente può controllare in autonomia. Jibble dice "c\'era"; GeoTapp dimostra "cosa ha fatto, dove e quando".' },
    { q: 'Jibble ha il GPS. Non basta?', a: 'Jibble registra una posizione GPS di base alla timbratura, utile per sapere da dove si timbra. Non è però una prova sigillata dell\'intervento: la posizione non è legata a un report in cui ogni modifica successiva è rilevabile né a foto verificabili, e il cliente non può controllarla da sé. GeoTapp sigilla GPS, ora e foto in un report da mostrare quando qualcuno contesta.' },
    { q: 'GeoTapp o Jibble per chi lavora su commessa?', a: 'Jibble è adatto a chi vuole solo contare le presenze e le ore con un piano gratuito generoso. GeoTapp è pensato per imprese di pulizie, manutentori e installatori che devono dimostrare l\'intervento a un committente. Se hai clienti che contestano, GeoTapp produce le prove; Jibble registra la presenza ma non la prova del lavoro.' },
    { q: 'Jibble ha un piano gratuito. Vale la pena pagare GeoTapp?', a: 'Il piano gratuito di Jibble ha senso per chi cerca solo timbrature. Per aziende con operatori sul campo il valore di GeoTapp sta nella prova: quando un cliente contesta, hai un report sigillato da mostrare invece di una parola contro l\'altra.' },
  ],
  en: [
    { q: 'What is the main difference between GeoTapp and Jibble?', a: 'Jibble is an attendance system: it logs who clocks in, with face recognition and basic GPS at clock-in. GeoTapp is a proof-of-work system: it generates sealed reports with location, time and photos, proof that the client can check independently. Jibble says "they were here"; GeoTapp proves "what they did, where and when".' },
    { q: 'Jibble has GPS. Isn\'t that enough?', a: 'Jibble records a basic GPS position at clock-in, useful to know where someone clocked in from. But it is not sealed proof of the job: the location is not tied to a report in which every later change is detectable, or to verifiable photos, and the client cannot check it. GeoTapp seals GPS, time and photos in a report you can show when someone disputes the work.' },
    { q: 'GeoTapp or Jibble for job-based work?', a: 'Jibble suits those who just want to count attendance and hours on a generous free plan. GeoTapp is built for cleaning companies, maintenance crews and installers who must prove the job to a client. If clients dispute work, GeoTapp produces the proof; Jibble logs attendance, not proof of work.' },
    { q: 'Jibble has a free plan. Is GeoTapp worth paying for?', a: 'Jibble\'s free plan makes sense if all you need is clock-ins. For companies with field operators, the value of GeoTapp lies in the proof: when a client disputes a job, you have a sealed report to show instead of one word against another.' },
  ],
  de: [
    { q: 'Was ist der Hauptunterschied zwischen GeoTapp und Jibble?', a: 'Jibble ist ein System zur Anwesenheitserfassung: Es erfasst, wer stempelt, mit Gesichtserkennung und einfachem GPS im Moment des Stempelns. GeoTapp ist ein System für den Arbeitsnachweis: Es erstellt versiegelte Berichte mit Position, Uhrzeit und Fotos, die der Kunde selbstständig prüfen kann. Jibble sagt „war da“; GeoTapp belegt „was er getan hat, wo und wann“.' },
    { q: 'Jibble hat GPS. Reicht das nicht?', a: 'Jibble erfasst beim Stempeln eine einfache GPS-Position, nützlich, um zu wissen, von wo gestempelt wird. Das ist aber kein versiegelter Nachweis des Einsatzes: Die Position ist weder an einen Bericht gebunden, in dem jede spätere Änderung erkennbar ist, noch an überprüfbare Fotos, und der Kunde kann sie nicht selbst prüfen. GeoTapp versiegelt GPS, Uhrzeit und Fotos in einem Bericht, den Sie bei einer Beanstandung vorlegen können.' },
    { q: 'GeoTapp oder Jibble für Einsätze auf Auftragsbasis?', a: 'Jibble passt zu allen, die nur Anwesenheit und Stunden zählen wollen, mit einem großzügigen kostenlosen Tarif. GeoTapp ist für Reinigungsfirmen, Wartungsbetriebe und Installateure gedacht, die einem Auftraggeber den Einsatz belegen müssen. Wenn Kunden Leistungen bestreiten, liefert GeoTapp die Nachweise; Jibble erfasst die Anwesenheit, aber nicht den Arbeitsnachweis.' },
    { q: 'Jibble hat einen kostenlosen Tarif. Lohnt sich GeoTapp?', a: 'Der kostenlose Tarif von Jibble passt für alle, die nur Zeiterfassung suchen. Für Betriebe mit Mitarbeitern im Außendienst liegt der Wert von GeoTapp im Nachweis: Wenn ein Kunde etwas bestreitet, haben Sie einen versiegelten Bericht statt Aussage gegen Aussage.' },
  ],
  fr: [
    { q: 'Quelle est la différence principale entre GeoTapp et Jibble ?', a: 'Jibble est un système de suivi des présences : il enregistre qui pointe, avec reconnaissance faciale et GPS de base au moment du pointage. GeoTapp est un système de preuve du travail : il génère des rapports scellés avec position, heure et photos, des preuves que le client peut contrôler en toute autonomie. Jibble dit « il était là » ; GeoTapp démontre « ce qui a été fait, où et quand ».' },
    { q: 'Jibble a le GPS. Cela ne suffit-il pas ?', a: 'Jibble enregistre une position GPS de base au pointage, utile pour savoir d\'où l\'on pointe. Ce n\'est toutefois pas une preuve scellée de l\'intervention : la position n\'est pas liée à un rapport où toute modification ultérieure est détectable, ni à des photos vérifiables, et le client ne peut pas la contrôler lui-même. GeoTapp scelle GPS, heure et photos dans un rapport à présenter quand quelqu\'un conteste.' },
    { q: 'GeoTapp ou Jibble pour ceux qui travaillent sur chantier ?', a: 'Jibble convient à ceux qui veulent seulement compter les présences et les heures avec une offre gratuite généreuse. GeoTapp est pensé pour les entreprises de nettoyage, les techniciens de maintenance et les installateurs qui doivent démontrer l\'intervention à un client. Si vous avez des clients qui contestent, GeoTapp produit les preuves ; Jibble enregistre la présence, pas la preuve du travail.' },
    { q: 'Jibble a une offre gratuite. GeoTapp vaut-il le coup ?', a: 'L\'offre gratuite de Jibble a du sens pour ceux qui ne cherchent que des pointages. Pour les entreprises avec des opérateurs sur le terrain, la valeur de GeoTapp tient à la preuve : quand un client conteste, vous avez un rapport scellé à montrer plutôt que la parole de l\'un contre celle de l\'autre.' },
  ],
  es: [
    { q: '¿Cuál es la diferencia principal entre GeoTapp y Jibble?', a: 'Jibble es un sistema de asistencia: registra quién ficha, con reconocimiento facial y GPS básico al fichar. GeoTapp es un sistema de prueba del trabajo: genera informes sellados con GPS verificado, fotos y firma digital, pruebas que el cliente puede comprobar por sí mismo. Jibble dice "estuvo aquí"; GeoTapp demuestra "qué hizo, dónde y cuándo".' },
    { q: 'Jibble tiene GPS. ¿No basta?', a: 'Jibble registra una posición GPS básica al fichar, útil para saber desde dónde se ficha. Pero no es una prueba sellada de la intervención: la ubicación no está ligada a un informe cuya modificación es detectable ni a fotos verificables, y el cliente no puede comprobarla. GeoTapp sella GPS, hora y fotos en un informe que aguanta una reclamación.' },
    { q: '¿GeoTapp o Jibble para trabajo por encargo?', a: 'Jibble es adecuado para quien solo quiere contar asistencia y horas con un plan gratuito generoso. GeoTapp está pensado para empresas de limpieza, técnicos de mantenimiento e instaladores que deben demostrar la intervención a un cliente. Si tus clientes reclaman, GeoTapp produce las pruebas; Jibble registra la asistencia, no la prueba del trabajo.' },
    { q: 'Jibble tiene un plan gratuito. ¿Vale la pena pagar GeoTapp?', a: 'Jibble gratis tiene sentido si solo necesitas fichajes. Para empresas con operarios de campo, el valor de GeoTapp está en las pruebas defendibles: un contrato salvado gracias a un informe verificable vale muchas veces la suscripción mensual.' },
  ],
  pt: [
    { q: 'Qual é a diferença principal entre GeoTapp e Jibble?', a: 'A Jibble é um sistema de presenças: regista quem pica o ponto, com reconhecimento facial e GPS básico na picagem. A GeoTapp é um sistema de prova do trabalho: gera relatórios selados com GPS verificado, fotos e assinatura digital, provas que o cliente pode verificar sozinho. A Jibble diz "esteve cá"; a GeoTapp prova "o que fez, onde e quando".' },
    { q: 'A Jibble tem GPS. Não chega?', a: 'A Jibble regista uma posição GPS básica na picagem, útil para saber de onde se pica. Mas não é uma prova selada da intervenção: a localização não está ligada a um relatório cuja alteração é detetável nem a fotos verificáveis, e o cliente não a pode verificar. A GeoTapp sela GPS, hora e fotos num relatório que resiste a uma contestação.' },
    { q: 'GeoTapp ou Jibble para trabalho por encomenda?', a: 'A Jibble serve para quem só quer contar presenças e horas com um plano gratuito generoso. A GeoTapp foi feita para empresas de limpeza, equipas de manutenção e instaladores que têm de provar a intervenção a um cliente. Se os clientes contestam, a GeoTapp produz as provas; a Jibble regista a presença, não a prova do trabalho.' },
    { q: 'A Jibble tem plano gratuito. Vale a pena pagar a GeoTapp?', a: 'A Jibble gratuita faz sentido se só precisa de picagens. Para empresas com operadores no terreno, o valor da GeoTapp está nas provas defensáveis: um contrato salvo graças a um relatório verificável vale muitas vezes a mensalidade.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Jibble?', a: 'Jibble is een systeem voor het registreren van aanwezigheid: het legt vast wie registreert, met gezichtsherkenning en eenvoudige gps op het moment van de registratie. GeoTapp is een systeem voor bewijs van het werk: het maakt verzegelde rapporten met locatie, tijd en foto\'s, bewijs dat de klant zelfstandig kan controleren. Jibble zegt "hij was er"; GeoTapp toont aan "wat hij heeft gedaan, waar en wanneer".' },
    { q: 'Jibble heeft gps. Is dat niet genoeg?', a: 'Jibble legt bij de registratie een eenvoudige gps-locatie vast, nuttig om te weten van waaruit wordt geregistreerd. Het is echter geen verzegeld bewijs van de klus: de locatie is niet gekoppeld aan een rapport waarin elke latere wijziging zichtbaar is, noch aan controleerbare foto\'s, en de klant kan het niet zelf controleren. GeoTapp verzegelt gps, tijd en foto\'s in een rapport om te tonen wanneer iemand iets betwist.' },
    { q: 'GeoTapp of Jibble voor wie per opdracht werkt?', a: 'Jibble past bij wie alleen de aanwezigheid en de uren wil tellen met een ruim gratis abonnement. GeoTapp is bedoeld voor schoonmaakbedrijven, onderhoudsmonteurs en installateurs die de klus aan een opdrachtgever moeten aantonen. Hebt u klanten die iets betwisten, dan maakt GeoTapp het bewijs; Jibble registreert de aanwezigheid maar niet het bewijs van het werk.' },
    { q: 'Jibble heeft een gratis abonnement. Is het de moeite waard om voor GeoTapp te betalen?', a: 'Het gratis abonnement van Jibble is zinvol voor wie alleen registraties zoekt. Voor bedrijven met medewerkers in het veld zit de waarde van GeoTapp in het bewijs: wanneer een klant iets betwist, hebt u een verzegeld rapport om te tonen in plaats van woord tegen woord.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Jibble?', a: 'Jibble er et fremmødesystem: det registrerer, hvem der stempler, med ansigtsgenkendelse og basis-GPS ved stempling. GeoTapp er et arbejdsbevis-system: det genererer forseglede rapporter med verificeret GPS, fotos og digital signatur, beviser kunden selv kan kontrollere. Jibble siger "var her"; GeoTapp beviser "hvad, hvor og hvornår".' },
    { q: 'Jibble har GPS. Er det ikke nok?', a: 'Jibble registrerer en basis-GPS-position ved stempling, nyttig for at vide, hvorfra der stemples. Men det er ikke et forseglet bevis for opgaven: placeringen er ikke knyttet til en rapport hvor enhver ændring kan opdages, eller verificerbare fotos, og kunden kan ikke kontrollere den. GeoTapp forsegler GPS, tid og fotos i en rapport, der holder i en tvist.' },
    { q: 'GeoTapp eller Jibble til opgavebaseret arbejde?', a: 'Jibble passer til dem, der bare vil tælle fremmøde og timer med en generøs gratis plan. GeoTapp er bygget til rengøringsfirmaer, vedligeholdelseshold og installatører, der skal bevise opgaven over for en kunde. Hvis kunder bestrider arbejdet, leverer GeoTapp beviset; Jibble registrerer fremmøde, ikke arbejdsbevis.' },
    { q: 'Jibble har en gratis plan. Er GeoTapp værd at betale for?', a: 'Jibble gratis giver mening, hvis du kun har brug for stemplinger. For virksomheder med medarbejdere i marken ligger værdien af GeoTapp i holdbare beviser: én kontrakt reddet takket være en verificerbar rapport er mange gange det månedlige abonnement værd.' },
  ],
  sv: [
    { q: 'Vad är den viktigaste skillnaden mellan GeoTapp och Jibble?', a: 'Jibble är ett närvarosystem: det registrerar vem som stämplar, med ansiktsigenkänning och enkel GPS vid stämpling. GeoTapp är ett arbetsbevis-system: det skapar förseglade rapporter med verifierad GPS, foton och digital signatur, bevis som kunden själv kan kontrollera. Jibble säger "var här"; GeoTapp bevisar "vad, var och när".' },
    { q: 'Jibble har GPS. Räcker inte det?', a: 'Jibble registrerar en enkel GPS-position vid stämpling, bra för att veta varifrån man stämplar. Men det är inte ett förseglat bevis på uppdraget: platsen är inte kopplad till en rapport där varje ändring är spårbar eller till verifierbara foton, och kunden kan inte kontrollera den. GeoTapp förseglar GPS, tid och foton i en rapport som håller i en tvist.' },
    { q: 'GeoTapp eller Jibble för uppdragsbaserat arbete?', a: 'Jibble passar den som bara vill räkna närvaro och timmar med en generös gratisplan. GeoTapp är byggt för städföretag, underhållsteam och installatörer som måste bevisa uppdraget för en kund. Om kunder bestrider arbetet levererar GeoTapp beviset; Jibble registrerar närvaro, inte arbetsbevis.' },
    { q: 'Jibble har en gratisplan. Är GeoTapp värt att betala för?', a: 'Jibble gratis är rimligt om du bara behöver stämplingar. För företag med fältpersonal ligger värdet av GeoTapp i hållbara bevis: ett kontrakt räddat tack vare en verifierbar rapport är värt många gånger månadsabonnemanget.' },
  ],
  nb: [
    { q: 'Hva er den viktigste forskjellen mellom GeoTapp og Jibble?', a: 'Jibble er et oppmøtesystem: det registrerer hvem som stempler, med ansiktsgjenkjenning og enkel GPS ved stempling. GeoTapp er et arbeidsbevis-system: det lager forseglede rapporter med verifisert GPS, bilder og digital signatur, bevis kunden selv kan kontrollere. Jibble sier "var her"; GeoTapp beviser "hva, hvor og når".' },
    { q: 'Jibble har GPS. Er ikke det nok?', a: 'Jibble registrerer en enkel GPS-posisjon ved stempling, nyttig for å vite hvorfra man stempler. Men det er ikke et forseglet bevis på oppdraget: posisjonen er ikke koblet til en rapport hvor enhver endring er sporbar eller til verifiserbare bilder, og kunden kan ikke kontrollere den. GeoTapp forsegler GPS, tid og bilder i en rapport som holder i en tvist.' },
    { q: 'GeoTapp eller Jibble for oppdragsbasert arbeid?', a: 'Jibble passer for den som bare vil telle oppmøte og timer med en raus gratisplan. GeoTapp er bygget for renholdsfirmaer, vedlikeholdslag og installatører som må bevise oppdraget overfor en kunde. Hvis kunder bestrider arbeidet, leverer GeoTapp beviset; Jibble registrerer oppmøte, ikke arbeidsbevis.' },
    { q: 'Jibble har en gratis plan. Er GeoTapp verdt å betale for?', a: 'Jibble gratis gir mening hvis du bare trenger stemplinger. For bedrifter med feltarbeidere ligger verdien av GeoTapp i holdbare bevis: én kontrakt reddet takket være en verifiserbar rapport er verdt mange ganger månedsabonnementet.' },
  ],
  ru: [
    { q: 'В чём главное различие между GeoTapp и Jibble?', a: 'Jibble, это система учёта присутствия: она фиксирует, кто отметился, с распознаванием лица и базовым GPS при отметке. GeoTapp, это система доказательства работы: она формирует защищённые отчёты с проверенным GPS, фото и цифровой подписью, доказательства, которые заказчик может проверить сам. Jibble говорит «был здесь»; GeoTapp доказывает «что, где и когда сделано».' },
    { q: 'У Jibble есть GPS. Разве этого не достаточно?', a: 'Jibble фиксирует базовую GPS-позицию при отметке, удобно знать, откуда отметились. Но это не защищённое доказательство работы: позиция не связана с отчётом, в котором любое изменение заметно, или проверяемыми фото, и заказчик не может её проверить. GeoTapp запечатывает GPS, время и фото в отчёт, который выдерживает спор.' },
    { q: 'GeoTapp или Jibble для работы по заказам?', a: 'Jibble подходит тем, кто хочет лишь считать присутствие и часы на щедром бесплатном тарифе. GeoTapp создан для клининговых компаний, бригад обслуживания и монтажников, которым нужно доказать работу заказчику. Если клиенты оспаривают, GeoTapp предоставляет доказательства; Jibble фиксирует присутствие, а не доказательство работы.' },
    { q: 'У Jibble есть бесплатный тариф. Стоит ли платить за GeoTapp?', a: 'Бесплатный Jibble имеет смысл, если нужны только отметки. Для компаний с выездными сотрудниками ценность GeoTapp, в надёжных доказательствах: один сохранённый контракт благодаря проверяемому отчёту стоит многократно больше месячной подписки.' },
  ],
};

const ROWS_LABELS: Record<string, string[]> = {
  it: ['Posizione registrata e controllata a ogni timbratura','Report sigillato crittograficamente','Prove fotografiche collegate a GPS e timestamp','Verifica indipendente da parte del cliente','Tracciamento ore','App mobile Android/iOS','Messaggistica interna proprietaria','Export presenze/paghe','Piano gratuito','Gestione commesse multi-sito','Posizione rilevata solo quando si timbra, mai in continuo','Informativa GPS firmata nell\'app prima di timbrare*'],
  en: ['Position recorded and checked at every clock-in','Cryptographically sealed report','Photo evidence linked to GPS and timestamp','Independent verification by the client','Time tracking','Mobile app Android/iOS','Built-in messaging','Payroll/attendance export','Free plan','Multi-site job management','Position recorded only at clock-in, never continuously','GPS notice signed in the app before clocking in*'],
  de: ['Position bei jedem Stempeln erfasst und geprüft','Kryptographisch versiegelter Bericht','Fotonachweise mit GPS und Zeitstempel verknüpft','Unabhängige Überprüfung durch den Kunden','Zeiterfassung','Mobile App Android/iOS','Eigene interne Nachrichten','Export von Anwesenheit/Lohndaten','Kostenloser Tarif','Verwaltung mehrerer Standorte','Position nur beim Stempeln erfasst, nie durchgehend','GPS-Information vor dem Stempeln in der App unterschrieben*'],
  fr: ['Position enregistrée et contrôlée à chaque pointage','Rapport scellé cryptographiquement','Preuves photo liées au GPS et à l\'horodatage','Vérification indépendante par le client','Suivi des heures','App mobile Android/iOS','Messagerie interne propriétaire','Export présences/paie','Offre gratuite','Gestion de chantiers multi-sites','Position relevée uniquement au pointage, jamais en continu','Information GPS signée dans l\'app avant de pointer*'],
  es: ['GPS verificado en el lugar de la intervención','Informe sellado criptográficamente','Pruebas fotográficas vinculadas a GPS y marca de tiempo','Verificación independiente por el cliente','Seguimiento de horas','App móvil Android/iOS','Mensajería interna propia','Exportación de nóminas/presencia','Plan gratuito','Gestión de obras multisede','Geolocalización conforme al RGPD','Aviso de privacidad GPS automático con firma digital*'],
  pt: ['GPS verificado no local da intervenção','Relatório selado criptograficamente','Provas fotográficas ligadas a GPS e data/hora','Verificação independente pelo cliente','Controlo de horas','App móvel Android/iOS','Mensagens internas próprias','Exportação de salários/presenças','Plano gratuito','Gestão de obras multilocal','Geolocalização conforme o RGPD','Aviso de privacidade GPS automático com assinatura digital*'],
  nl: ['Locatie vastgelegd en gecontroleerd bij elke registratie','Cryptografisch verzegeld rapport','Fotobewijzen gekoppeld aan gps en tijdstempel','Onafhankelijke controle door de klant','Bijhouden van uren','Mobiele app voor Android/iOS','Eigen interne berichten','Export van aanwezigheid/salarissen','Gratis abonnement','Opdrachtenbeheer voor meerdere locaties','Locatie alleen bij het registreren, nooit doorlopend','GPS-verklaring ondertekend in de app vóór het registreren*'],
  da: ['GPS verificeret på opgavestedet','Kryptografisk forseglet rapport','Fotobeviser knyttet til GPS og tidsstempel','Uafhængig verificering af kunden','Tidsregistrering','Mobilapp Android/iOS','Indbygget beskedfunktion','Eksport af løn/fremmøde','Gratis plan','Styring af opgaver på flere lokationer','GDPR-kompatibel geolokalisering','Automatisk GPS-privatlivserklæring med digital signatur*'],
  sv: ['GPS verifierad på arbetsplatsen','Kryptografiskt förseglad rapport','Fotobevis kopplade till GPS och tidsstämpel','Oberoende verifiering av kunden','Tidsregistrering','Mobilapp Android/iOS','Inbyggd meddelandefunktion','Export av lön/närvaro','Gratisplan','Hantering av uppdrag på flera platser','GDPR-kompatibel geolokalisering','Automatiskt GPS-integritetsmeddelande med digital signatur*'],
  nb: ['GPS verifisert på oppdragsstedet','Kryptografisk forseglet rapport','Fotobevis koblet til GPS og tidsstempel','Uavhengig verifisering av kunden','Tidsregistrering','Mobilapp Android/iOS','Innebygd meldingsfunksjon','Eksport av lønn/oppmøte','Gratis plan','Styring av oppdrag på flere steder','GDPR-kompatibel geolokalisering','Automatisk GPS-personvernerklæring med digital signatur*'],
  ru: ['GPS проверен на месте задания','Криптографически опечатанный отчёт','Фотодоказательства, привязанные к GPS и метке времени','Независимая проверка заказчиком','Учёт часов','Мобильное приложение Android/iOS','Встроенный обмен сообщениями','Экспорт зарплат/присутствия','Бесплатный тариф','Управление заданиями на нескольких объектах','Геолокация в соответствии с GDPR','Автоматическое уведомление о GPS с цифровой подписью*'],
};

const ROWS_GEO =   [true, true, true, true, true, true, true, true, false, true, true, true];
const ROWS_COMP =  [false, false, false, false, true, true, false, true, true, false, false, false];

// Riassunto neutro ed estraibile, posizionato SUBITO SOTTO la tabella: una frase
// fattuale che i motori AI possono citare senza doverla ricostruire dalla tabella.
// Neutro per scelta: la neutralita' e' cio' che ci fa citare, niente superlativi.
const TABLE_TAKEAWAY: Record<string, string> = {
  it: 'In breve: Jibble registra le presenze con riconoscimento facciale e GPS di base; GeoTapp aggiunge il report sigillato, la foto-prova collegata a GPS e ora, e la verifica del cliente sull\'intervento.',
  en: 'In short: Jibble logs attendance with face recognition and basic GPS; GeoTapp adds the sealed report, photo evidence tied to GPS and time, and independent client verification of the job.',
  de: 'Kurz gesagt: Jibble erfasst Anwesenheit mit Gesichtserkennung und einfachem GPS; GeoTapp ergänzt den versiegelten Bericht, das Nachweisfoto mit GPS und Uhrzeit und die Überprüfung des Einsatzes durch den Kunden.',
  fr: 'En bref : Jibble enregistre les présences avec reconnaissance faciale et GPS de base ; GeoTapp ajoute le rapport scellé, la photo de preuve liée au GPS et à l\'heure, et la vérification de l\'intervention par le client.',
  es: 'En resumen: Jibble registra la asistencia con reconocimiento facial y GPS básico; GeoTapp añade el informe sellado, la prueba fotográfica ligada a GPS y hora, y la verificación independiente del cliente.',
  pt: 'Em resumo: a Jibble regista presenças com reconhecimento facial e GPS básico; a GeoTapp acrescenta o relatório selado, a prova fotográfica ligada a GPS e hora, e a verificação independente do cliente.',
  nl: 'Kort gezegd: Jibble registreert aanwezigheid met gezichtsherkenning en eenvoudige gps; GeoTapp voegt het verzegelde rapport toe, de bewijsfoto gekoppeld aan gps en tijd, en de controle door de klant van de klus.',
  da: 'Kort sagt: Jibble registrerer fremmøde med ansigtsgenkendelse og basis-GPS; GeoTapp tilføjer den forseglede rapport, fotobevis knyttet til GPS og tid, og uafhængig kundeverificering af opgaven.',
  sv: 'Kort sagt: Jibble registrerar närvaro med ansiktsigenkänning och enkel GPS; GeoTapp lägger till den förseglade rapporten, fotobevis kopplat till GPS och tid, och oberoende kundverifiering av uppdraget.',
  nb: 'Kort sagt: Jibble registrerer oppmøte med ansiktsgjenkjenning og enkel GPS; GeoTapp legger til den forseglede rapporten, fotobevis koblet til GPS og tid, og uavhengig kundeverifisering av oppdraget.',
  ru: 'Коротко: Jibble фиксирует присутствие по распознаванию лица и базовому GPS; GeoTapp добавляет защищённый отчёт, фотодоказательства с GPS и временем и независимую проверку заказчиком.',
};

type Copy = {
  badge: string; h1sub: string; desc: string;
  summary: string; summaryText: string; footnote: string;
  features: string; feat: string; diff: string;
  geo: string[]; comp: string[];
  useCasesTitle: string; useCases: string[];
  cta: string; ctaDesc: string; ctaBtn: string;
};

const FOOTNOTE: Record<string, string> = {
  it: '* Per legge (art. 13 GDPR e, in Italia, art. 4 dello Statuto dei Lavoratori) ogni dipendente va informato prima di essere geolocalizzato. Se il software lascia questo passaggio al titolare, il rischio resta a lui. GeoTapp prepara l\'informativa personalizzata, la fa firmare per presa visione nell\'app e non lascia timbrare finché non è firmata.',
  en: '* By law (Art. 13 GDPR and, in Italy, Art. 4 of the Workers\' Statute), every employee must be informed before being geolocated. If the software leaves this step to the employer, the risk stays with them. GeoTapp prepares the personalised notice, has it signed for acknowledgement in the app and does not let staff clock in until it is signed.',
  de: '* Nach geltendem Recht (Art. 13 DSGVO und in Italien Art. 4 des Arbeitnehmerstatuts) muss jeder Mitarbeiter informiert werden, bevor er geortet wird. Überlässt die Software diesen Schritt dem Arbeitgeber, bleibt das Risiko bei ihm. GeoTapp erstellt die personalisierte Information, lässt sie in der App zur Kenntnisnahme unterschreiben und lässt erst danach das Stempeln zu.',
  fr: '* Selon la loi (art. 13 du RGPD et, en Italie, art. 4 du Statut des travailleurs), chaque salarié doit être informé avant d\'être géolocalisé. Si le logiciel laisse cette étape à l\'employeur, le risque lui reste. GeoTapp prépare l\'information personnalisée, la fait signer pour prise de connaissance dans l\'app et ne laisse pas pointer tant qu\'elle n\'est pas signée.',
  es: '* Por ley (RGPD Art. 13, y en Italia Art. 4 del Estatuto de los Trabajadores), cada empleado debe firmar un aviso de privacidad antes de ser geolocalizado. La mayoría del software GPS no lo gestiona: el riesgo legal queda con el empleador. GeoTapp genera automáticamente el aviso personalizado, lo hace firmar digitalmente y bloquea el acceso GPS hasta que esté firmado.',
  pt: '* Por lei (RGPD Art. 13, e em Itália Art. 4 do Estatuto dos Trabalhadores), cada funcionário deve assinar um aviso de privacidade antes de ser geolocalizado. A maioria do software GPS não trata disto: o risco legal fica com o empregador. A GeoTapp gera automaticamente o aviso personalizado, fá-lo assinar digitalmente e bloqueia o acesso GPS até estar assinado.',
  nl: '* Volgens de wet (art. 13 AVG en, in Italië, art. 4 van het arbeidsstatuut) moet elke werknemer worden geïnformeerd voordat hij wordt gelokaliseerd. Laat de software deze stap aan de verantwoordelijke over, dan blijft het risico bij hem. GeoTapp maakt de persoonlijke privacyverklaring klaar, laat die in de app voor kennisgeving ondertekenen en laat niet registreren totdat ze is ondertekend.',
  da: '* Ifølge loven (GDPR Art. 13, og i Italien Art. 4 i medarbejderstatutten) skal hver medarbejder underskrive en privatlivserklæring, før vedkommende geolokaliseres. De fleste GPS-programmer håndterer ikke dette: den juridiske risiko bliver hos arbejdsgiveren. GeoTapp genererer automatisk den personlige erklæring, får den underskrevet digitalt og blokerer GPS-adgang, indtil den er underskrevet.',
  sv: '* Enligt lag (GDPR Art. 13, och i Italien Art. 4 i arbetstagarstadgan) måste varje anställd underteckna ett integritetsmeddelande innan geolokalisering. De flesta GPS-program hanterar inte detta: den juridiska risken stannar hos arbetsgivaren. GeoTapp skapar automatiskt det personliga meddelandet, låter det signeras digitalt och blockerar GPS-åtkomst tills det är signerat.',
  nb: '* Ifølge loven (GDPR Art. 13, og i Italia Art. 4 i arbeidstakerstatutten) må hver ansatt signere en personvernerklæring før geolokalisering. De fleste GPS-programmer håndterer ikke dette: den juridiske risikoen blir hos arbeidsgiveren. GeoTapp lager automatisk den personlige erklæringen, får den signert digitalt og blokkerer GPS-tilgang til den er signert.',
  ru: '* По закону (GDPR ст. 13, а в Италии ст. 4 Статута трудящихся) каждый сотрудник должен подписать уведомление о конфиденциальности до геолокации. Большинство GPS-программ этого не обеспечивают: юридический риск остаётся на работодателе. GeoTapp автоматически формирует персональное уведомление, даёт подписать его цифровой подписью и блокирует доступ к GPS, пока оно не подписано.',
};

const T: Record<string, Copy> = {
  it: {
    badge: 'Confronto App', h1sub: 'contare le presenze o provare il lavoro?',
    desc: 'Jibble registra chi c\'è, con volto e GPS di base. GeoTapp prova cosa è stato fatto, dove e quando. Per chi lavora sul campo, la differenza cambia tutto.',
    summary: 'In sintesi:',
    summaryText: 'Jibble è ottimo per contare presenze e ore con un piano gratuito generoso. Per operatori sul campo che devono dimostrare l\'intervento a un committente, GeoTapp produce report sigillati con posizione, ora e foto, cose che Jibble non ha.',
    footnote: FOOTNOTE.it,
    features: 'Confronto funzionalità chiave', feat: 'Funzionalità',
    diff: 'Rilevazione delle presenze o prova del lavoro',
    geo: ['Posizione rilevata dal telefono a ogni timbratura, non inserita a mano','Report sigillati con hash crittografico alla chiusura dell\'intervento','Prove fotografiche integrate con GPS e timestamp','Il committente verifica da solo che il report non sia stato modificato','Progettato per operatori sul campo, non per l\'ufficio'],
    comp: ['Buona rilevazione presenze con riconoscimento facciale','GPS di base alla timbratura (non sigillato nell\'intervento)','Piano gratuito generoso, ideale per contare le ore','Nessun report sigillato né prova fotografica dell\'intervento','I dati non sono verificabili dal cliente'],
    useCasesTitle: 'Chi dovrebbe scegliere GeoTapp invece di Jibble',
    useCases: ['Imprese di pulizie e facility management con clienti esigenti','Manutentori e installatori che devono documentare le ore fatturate','Aziende soggette a ispezioni del lavoro o a verifiche del committente','Chi ha già avuto contestazioni su interventi non riconosciuti','Aziende con più squadre distribuite su cantieri diversi'],
    cta: 'Vuoi vedere la differenza in pratica?',
    ctaDesc: 'Provalo su un intervento vero: 14 giorni gratis, senza carta di credito.',
    ctaBtn: 'Inizia la prova gratuita',
  },
  en: {
    badge: 'App Comparison', h1sub: 'counting attendance or proving the work?',
    desc: 'Jibble logs who is present, with face and basic GPS. GeoTapp proves what was done, where and when. For field work, that difference changes everything.',
    summary: 'In short:',
    summaryText: 'Jibble is great for counting attendance and hours on a generous free plan. For field operators who must prove the job to a client, GeoTapp produces sealed reports with location, time and photos, which Jibble does not have.',
    footnote: FOOTNOTE.en,
    features: 'Key feature comparison', feat: 'Feature',
    diff: 'Attendance tracking or proof of work',
    geo: ['Position taken from the phone at every clock-in, not typed in by hand','Reports sealed with a cryptographic hash when the job is closed','Photo evidence built in with GPS and timestamp','The client checks alone that the report has not been modified','Built for field operators, not the office'],
    comp: ['Solid attendance tracking with facial recognition','Basic GPS at clock-in (not sealed into the job)','Generous free plan, great for counting hours','No sealed report or photo proof of the job','Data is not verifiable by the client'],
    useCasesTitle: 'Who should choose GeoTapp over Jibble',
    useCases: ['Cleaning and facility management companies with demanding clients','Maintenance crews and installers who must defend billed hours','Companies subject to labour inspections or checks by the client','Anyone who has already faced disputes over jobs the client did not recognise','Companies with several crews across different sites'],
    cta: 'Want to see the difference in practice?',
    ctaDesc: 'Try it on a real job: 14 days free, no credit card.',
    ctaBtn: 'Start the free trial',
  },
  de: {
    badge: 'App-Vergleich', h1sub: 'Anwesenheit zählen oder Arbeit nachweisen?',
    desc: 'Jibble erfasst, wer da ist, mit Gesicht und einfachem GPS. GeoTapp belegt, was getan wurde, wo und wann. Für alle im Außendienst ändert das alles.',
    summary: 'Kurz gesagt:',
    summaryText: 'Jibble ist ideal, um Anwesenheit und Stunden mit einem großzügigen kostenlosen Tarif zu zählen. Für Mitarbeiter im Außendienst, die einem Auftraggeber den Einsatz belegen müssen, erstellt GeoTapp versiegelte Berichte mit Position, Uhrzeit und Fotos, die Jibble nicht hat.',
    footnote: FOOTNOTE.de,
    features: 'Vergleich der wichtigsten Funktionen', feat: 'Funktion',
    diff: 'Anwesenheitserfassung oder Arbeitsnachweis',
    geo: ['Position beim Stempeln vom Telefon erfasst, nicht von Hand eingetragen','Berichte beim Abschluss des Einsatzes mit kryptographischem Hash versiegelt','Fotonachweise mit GPS und Zeitstempel integriert','Der Auftraggeber prüft selbst, dass der Bericht nicht verändert wurde','Für Mitarbeiter im Außendienst gebaut, nicht fürs Büro'],
    comp: ['Gute Anwesenheitserfassung mit Gesichtserkennung','Einfaches GPS beim Stempeln (nicht im Einsatz versiegelt)','Großzügiger kostenloser Tarif, ideal zum Zählen von Stunden','Kein versiegelter Bericht und kein Fotonachweis des Einsatzes','Die Daten sind für den Kunden nicht überprüfbar'],
    useCasesTitle: 'Wer GeoTapp statt Jibble wählen sollte',
    useCases: ['Reinigungsfirmen und Facility-Management mit anspruchsvollen Kunden','Wartungsbetriebe und Installateure, die abgerechnete Stunden dokumentieren müssen','Betriebe, die Kontrollen oder Prüfungen durch den Auftraggeber ausgesetzt sind','Wer schon Streit über nicht anerkannte Einsätze hatte','Betriebe mit mehreren Teams auf verschiedenen Baustellen'],
    cta: 'Möchten Sie den Unterschied in der Praxis sehen?',
    ctaDesc: 'Testen Sie es an einem echten Einsatz: 14 Tage kostenlos, keine Kreditkarte.',
    ctaBtn: 'Kostenlos testen',
  },
  fr: {
    badge: 'Comparatif d\'applis',
    h1sub: 'compter les présences ou prouver le travail ?',
    desc: 'Jibble enregistre qui est présent, avec le visage et un GPS de base. GeoTapp prouve ce qui a été fait, où et quand. Pour qui travaille sur le terrain, la différence change tout.',
    summary: 'En résumé :',
    summaryText: 'Jibble est excellent pour compter présences et heures avec une offre gratuite généreuse. Pour les opérateurs de terrain qui doivent démontrer l\'intervention à un client, GeoTapp produit des rapports scellés avec position, heure et photos, ce que Jibble n\'a pas.',
    footnote: FOOTNOTE.fr,
    features: 'Comparaison des fonctionnalités clés',
    feat: 'Fonctionnalité',
    diff: 'Suivi des présences ou preuve du travail',
    geo: ['Position relevée par le téléphone à chaque pointage, jamais saisie à la main','Rapports scellés par une empreinte cryptographique à la clôture de l\'intervention','Preuves photo intégrées avec GPS et horodatage','Le client vérifie lui-même que le rapport n\'a pas été modifié','Conçu pour les opérateurs de terrain, pas pour le bureau'],
    comp: ['Bon suivi des présences avec reconnaissance faciale','GPS de base au pointage (non scellé dans l\'intervention)','Offre gratuite généreuse, idéale pour compter les heures','Aucun rapport scellé ni preuve photo de l\'intervention','Les données ne sont pas vérifiables par le client'],
    useCasesTitle: 'Qui devrait choisir GeoTapp plutôt que Jibble',
    useCases: ['Entreprises de nettoyage et de facility management avec des clients exigeants','Techniciens de maintenance et installateurs qui doivent documenter les heures facturées','Entreprises soumises à des inspections du travail ou à des contrôles de leurs clients','Ceux qui ont déjà eu des contestations sur des interventions non reconnues','Entreprises avec plusieurs équipes réparties sur différents chantiers'],
    cta: 'Envie de voir la différence en pratique ?',
    ctaDesc: 'Essayez-le sur une intervention réelle : 14 jours gratuits, sans carte bancaire.',
    ctaBtn: 'Commencer l\'essai gratuit',
  },
  es: {
    badge: 'Comparación de apps', h1sub: '¿contar la asistencia o probar el trabajo?',
    desc: 'Jibble registra quién está, con rostro y GPS básico. GeoTapp prueba qué se hizo, dónde y cuándo. Para el trabajo de campo, esa diferencia lo cambia todo.',
    summary: 'En resumen:',
    summaryText: 'Jibble es excelente para contar asistencia y horas con un plan gratuito generoso. Para operarios de campo que deben demostrar la intervención a un cliente, GeoTapp produce informes sellados con GPS verificado, fotos y firma digital, cosas que Jibble no tiene.',
    footnote: FOOTNOTE.es,
    features: 'Comparación de funciones clave', feat: 'Función',
    diff: 'Control de asistencia vs prueba del trabajo',
    geo: ['GPS verificado automáticamente, no introducido a mano','Informes sellados con hash criptográfico al cerrar la intervención','Pruebas fotográficas integradas con GPS y marca de tiempo','El cliente verifica la autenticidad por sí mismo','Diseñado para operarios de campo, no para la oficina'],
    comp: ['Buen control de asistencia con reconocimiento facial','GPS básico al fichar (no sellado en la intervención)','Plan gratuito generoso, ideal para contar horas','Sin informe sellado ni prueba fotográfica de la intervención','Los datos no son verificables por el cliente'],
    useCasesTitle: 'Quién debería elegir GeoTapp en lugar de Jibble',
    useCases: ['Empresas de limpieza y facility management con clientes exigentes','Técnicos de mantenimiento e instaladores que deben defender las horas facturadas','Empresas sujetas a inspecciones laborales o auditorías del cliente','Quien ya ha tenido reclamaciones por intervenciones no reconocidas','Empresas con varios equipos en obras distintas'],
    cta: '¿Quieres ver la diferencia en la práctica?',
    ctaDesc: 'Te mostramos cómo una intervención se convierte en prueba verificable, en 20 minutos, sin compromiso.',
    ctaBtn: '¡Empieza gratis ahora!',
  },
  pt: {
    badge: 'Comparação de apps', h1sub: 'contar presenças ou provar o trabalho?',
    desc: 'A Jibble regista quem está, com rosto e GPS básico. A GeoTapp prova o que foi feito, onde e quando. Para o trabalho no terreno, essa diferença muda tudo.',
    summary: 'Em resumo:',
    summaryText: 'A Jibble é ótima para contar presenças e horas com um plano gratuito generoso. Para operadores no terreno que têm de provar a intervenção a um cliente, a GeoTapp produz relatórios selados com GPS verificado, fotos e assinatura digital, coisas que a Jibble não tem.',
    footnote: FOOTNOTE.pt,
    features: 'Comparação de funcionalidades-chave', feat: 'Funcionalidade',
    diff: 'Controlo de presenças vs prova do trabalho',
    geo: ['GPS verificado automaticamente, não inserido à mão','Relatórios selados com hash criptográfico ao fechar a intervenção','Provas fotográficas integradas com GPS e data/hora','O cliente verifica a autenticidade sozinho','Concebido para operadores no terreno, não para o escritório'],
    comp: ['Bom controlo de presenças com reconhecimento facial','GPS básico na picagem (não selado na intervenção)','Plano gratuito generoso, ideal para contar horas','Sem relatório selado nem prova fotográfica da intervenção','Os dados não são verificáveis pelo cliente'],
    useCasesTitle: 'Quem deve escolher a GeoTapp em vez da Jibble',
    useCases: ['Empresas de limpeza e facility management com clientes exigentes','Equipas de manutenção e instaladores que têm de defender as horas faturadas','Empresas sujeitas a inspeções laborais ou auditorias do cliente','Quem já teve contestações sobre intervenções não reconhecidas','Empresas com várias equipas em obras diferentes'],
    cta: 'Quer ver a diferença na prática?',
    ctaDesc: 'Mostramos-lhe como uma intervenção se torna prova verificável, em 20 minutos, sem compromisso.',
    ctaBtn: 'Comece grátis agora!',
  },
  nl: {
    badge: 'App-vergelijking',
    h1sub: 'aanwezigheid tellen of het werk bewijzen?',
    desc: 'Jibble registreert wie er is, met gezicht en eenvoudige gps. GeoTapp toont aan wat er is gedaan, waar en wanneer. Voor wie in het veld werkt, verandert dat alles.',
    summary: 'Kort gezegd:',
    summaryText: 'Jibble is uitstekend om aanwezigheid en uren te tellen met een ruim gratis abonnement. Voor medewerkers in het veld die de klus aan een opdrachtgever moeten aantonen, maakt GeoTapp verzegelde rapporten met locatie, tijd en foto\'s, dingen die Jibble niet heeft.',
    footnote: FOOTNOTE.nl,
    features: 'Vergelijking van de belangrijkste functies',
    feat: 'Functie',
    diff: 'Aanwezigheid registreren of het werk bewijzen',
    geo: ['Locatie door de telefoon bepaald bij elke registratie, niet met de hand ingevoerd','Rapporten verzegeld met een cryptografische hash bij het afsluiten van de klus','Geïntegreerd fotobewijs met gps en tijdstempel','De opdrachtgever controleert zelf dat het rapport niet is gewijzigd','Ontworpen voor medewerkers in het veld, niet voor kantoor'],
    comp: ['Goede registratie van aanwezigheid met gezichtsherkenning','Eenvoudige gps bij de registratie (niet verzegeld in de klus)','Ruim gratis abonnement, ideaal om uren te tellen','Geen verzegeld rapport en geen fotobewijs van de klus','De gegevens zijn niet door de klant te controleren'],
    useCasesTitle: 'Wie GeoTapp zou moeten kiezen in plaats van Jibble',
    useCases: ['Schoonmaakbedrijven en facility management met veeleisende klanten','Onderhoudsmonteurs en installateurs die de gefactureerde uren moeten documenteren','Bedrijven die onder inspecties van de arbeidsinspectie of controles van de opdrachtgever vallen','Wie al betwistingen heeft gehad over klussen die niet werden erkend','Bedrijven met meerdere ploegen verdeeld over verschillende bouwplaatsen'],
    cta: 'Wilt u het verschil in de praktijk zien?',
    ctaDesc: 'Probeer het op een echte klus: 14 dagen gratis, zonder creditcard.',
    ctaBtn: 'Start de gratis proefperiode',
  },
  da: {
    badge: 'App-sammenligning', h1sub: 'tælle fremmøde eller bevise arbejdet?',
    desc: 'Jibble registrerer, hvem der er der, med ansigt og basis-GPS. GeoTapp beviser, hvad der blev gjort, hvor og hvornår. For markarbejde ændrer den forskel alt.',
    summary: 'Kort sagt:',
    summaryText: 'Jibble er god til at tælle fremmøde og timer med en generøs gratis plan. For medarbejdere i marken, der skal bevise opgaven over for en kunde, laver GeoTapp forseglede rapporter med verificeret GPS, fotos og digital signatur, som Jibble ikke har.',
    footnote: FOOTNOTE.da,
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion',
    diff: 'Fremmøderegistrering vs arbejdsbevis',
    geo: ['GPS verificeret automatisk, ikke indtastet manuelt','Rapporter forseglet med kryptografisk hash ved opgaveafslutning','Fotobeviser indbygget med GPS og tidsstempel','Kunden verificerer ægtheden selv','Bygget til medarbejdere i marken, ikke til kontoret'],
    comp: ['Solid fremmøderegistrering med ansigtsgenkendelse','Basis-GPS ved stempling (ikke forseglet i opgaven)','Generøs gratis plan, god til at tælle timer','Ingen forseglet rapport eller fotobevis for opgaven','Data kan ikke verificeres af kunden'],
    useCasesTitle: 'Hvem bør vælge GeoTapp frem for Jibble',
    useCases: ['Rengørings- og facility management-firmaer med krævende kunder','Vedligeholdelseshold og installatører, der skal forsvare fakturerede timer','Virksomheder med arbejdstilsyn eller kundeaudits','Dem, der allerede har haft tvister om ikke-anerkendte opgaver','Virksomheder med flere hold på forskellige lokationer'],
    cta: 'Vil du se forskellen i praksis?',
    ctaDesc: 'Vi viser dig på 20 minutter, hvordan en opgave bliver til verificerbart bevis, uforpligtende.',
    ctaBtn: 'Kom gratis i gang nu!',
  },
  sv: {
    badge: 'App-jämförelse', h1sub: 'räkna närvaro eller bevisa arbetet?',
    desc: 'Jibble registrerar vem som är där, med ansikte och enkel GPS. GeoTapp bevisar vad som gjordes, var och när. För fältarbete förändrar den skillnaden allt.',
    summary: 'Kort sagt:',
    summaryText: 'Jibble är bra för att räkna närvaro och timmar med en generös gratisplan. För fältpersonal som måste bevisa uppdraget för en kund skapar GeoTapp förseglade rapporter med verifierad GPS, foton och digital signatur, vilket Jibble inte har.',
    footnote: FOOTNOTE.sv,
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion',
    diff: 'Närvaroregistrering vs arbetsbevis',
    geo: ['GPS verifierad automatiskt, inte inskriven för hand','Rapporter förseglade med kryptografisk hash vid avslut','Fotobevis inbyggda med GPS och tidsstämpel','Kunden verifierar äktheten själv','Byggd för fältpersonal, inte kontoret'],
    comp: ['Gedigen närvaroregistrering med ansiktsigenkänning','Enkel GPS vid stämpling (inte förseglad i uppdraget)','Generös gratisplan, bra för att räkna timmar','Ingen förseglad rapport eller fotobevis på uppdraget','Data kan inte verifieras av kunden'],
    useCasesTitle: 'Vem bör välja GeoTapp framför Jibble',
    useCases: ['Städ- och facility management-företag med krävande kunder','Underhållsteam och installatörer som måste försvara fakturerade timmar','Företag med arbetsinspektioner eller kundrevisioner','De som redan haft tvister om icke-erkända uppdrag','Företag med flera team på olika platser'],
    cta: 'Vill du se skillnaden i praktiken?',
    ctaDesc: 'Vi visar dig på 20 minuter hur ett uppdrag blir verifierbart bevis, utan förpliktelser.',
    ctaBtn: 'Kom igång gratis nu!',
  },
  nb: {
    badge: 'App-sammenligning', h1sub: 'telle oppmøte eller bevise arbeidet?',
    desc: 'Jibble registrerer hvem som er der, med ansikt og enkel GPS. GeoTapp beviser hva som ble gjort, hvor og når. For feltarbeid endrer den forskjellen alt.',
    summary: 'Kort sagt:',
    summaryText: 'Jibble er bra for å telle oppmøte og timer med en raus gratisplan. For feltarbeidere som må bevise oppdraget overfor en kunde, lager GeoTapp forseglede rapporter med verifisert GPS, bilder og digital signatur, som Jibble ikke har.',
    footnote: FOOTNOTE.nb,
    features: 'Sammenligning av nøkkelfunksjoner', feat: 'Funksjon',
    diff: 'Oppmøteregistrering vs arbeidsbevis',
    geo: ['GPS verifisert automatisk, ikke skrevet inn for hånd','Rapporter forseglet med kryptografisk hash ved oppdragsslutt','Fotobevis innebygd med GPS og tidsstempel','Kunden verifiserer ektheten selv','Bygget for feltarbeidere, ikke kontoret'],
    comp: ['Solid oppmøteregistrering med ansiktsgjenkjenning','Enkel GPS ved stempling (ikke forseglet i oppdraget)','Raus gratisplan, bra for å telle timer','Ingen forseglet rapport eller fotobevis på oppdraget','Data kan ikke verifiseres av kunden'],
    useCasesTitle: 'Hvem bør velge GeoTapp fremfor Jibble',
    useCases: ['Renholds- og facility management-firmaer med krevende kunder','Vedlikeholdslag og installatører som må forsvare fakturerte timer','Bedrifter med arbeidstilsyn eller kunderevisjoner','De som allerede har hatt tvister om ikke-anerkjente oppdrag','Bedrifter med flere lag på ulike steder'],
    cta: 'Vil du se forskjellen i praksis?',
    ctaDesc: 'Vi viser deg på 20 minutter hvordan et oppdrag blir til verifiserbart bevis, uforpliktende.',
    ctaBtn: 'Kom i gang gratis nå!',
  },
  ru: {
    badge: 'Сравнение приложений', h1sub: 'считать присутствие или доказывать работу?',
    desc: 'Jibble фиксирует, кто на месте, по лицу и базовому GPS. GeoTapp доказывает, что сделано, где и когда. Для выездной работы это различие меняет всё.',
    summary: 'Коротко:',
    summaryText: 'Jibble хорош для подсчёта присутствия и часов на щедром бесплатном тарифе. Для выездных сотрудников, которым нужно доказать работу заказчику, GeoTapp формирует защищённые отчёты с проверенным GPS, фото и цифровой подписью, чего у Jibble нет.',
    footnote: FOOTNOTE.ru,
    features: 'Сравнение ключевых функций', feat: 'Функция',
    diff: 'Учёт присутствия vs доказательство работы',
    geo: ['GPS проверяется автоматически, а не вводится вручную','Отчёты запечатываются криптографическим хешем при закрытии','Фотодоказательства встроены с GPS и меткой времени','Заказчик сам проверяет подлинность','Создано для выездных сотрудников, а не для офиса'],
    comp: ['Хороший учёт присутствия с распознаванием лица','Базовый GPS при отметке (не запечатан в задание)','Щедрый бесплатный тариф, удобно считать часы','Нет защищённого отчёта или фотодоказательства работы','Данные не проверяемы заказчиком'],
    useCasesTitle: 'Кому стоит выбрать GeoTapp вместо Jibble',
    useCases: ['Клининговые и facility-компании с требовательными клиентами','Бригады обслуживания и монтажники, защищающие оплаченные часы','Компании, подлежащие трудовым проверкам или аудитам заказчика','Те, кто уже сталкивался со спорами по непризнанным работам','Компании с несколькими бригадами на разных объектах'],
    cta: 'Хотите увидеть разницу на практике?',
    ctaDesc: 'За 20 минут покажем, как задание превращается в проверяемое доказательство, без обязательств.',
    ctaBtn: 'Начните бесплатно!',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = localizeEnglishDeep(META[locale] ?? META.en, locale);
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: buildLocaleAlternates(locale, PATHNAME),
    openGraph: { url: buildCanonicalUrl(locale, PATHNAME), type: 'website', title: m.title, description: m.description, images: [{ url: '/og-default.png', width: 1200, height: 630, alt: m.title }] },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description },
  };
}

export default async function GeoTappVsJibblePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = localizeEnglishDeep(T[locale] ?? T.en, locale);
  const faqItems = localizeEnglishDeep(FAQ[locale] ?? FAQ.en, locale);
  const labels = localizeEnglishDeep(ROWS_LABELS[locale] ?? ROWS_LABELS.en, locale);
  const tableTakeaway = localizeEnglishDeep(TABLE_TAKEAWAY[locale] ?? TABLE_TAKEAWAY.en, locale);
  const rows = labels.map((feature, i) => ({ feature, geotapp: ROWS_GEO[i], competitor: ROWS_COMP[i] }));

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const breadcrumb = buildComparisonBreadcrumb({
    locale,
    pathname: PATHNAME,
    competitorName: 'Jibble',
  });

  const meta = localizeEnglishDeep(META[locale] ?? META.en, locale);
  const article = buildComparisonArticle({
    locale,
    pathname: PATHNAME,
    headline: meta.title,
    description: meta.description,
    datePublished: ARTICLE_DATE_PUBLISHED,
    dateModified: ARTICLE_DATE_MODIFIED,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ComparisonPageL
        locale={locale}
        competitorName="Jibble"
        competitorId="jibble"
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
        extraList={{ title: t.useCasesTitle, items: t.useCases }}
        rows={rows}
        faqItems={faqItems}
        ctaTitle={t.cta}
        ctaDesc={t.ctaDesc}
        ctaBtn={t.ctaBtn}
      />
    </>
  );
}
