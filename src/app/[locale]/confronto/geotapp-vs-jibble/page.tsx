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
  es: { title: 'GeoTapp vs Jibble - Comparativa 2026 | GeoTapp', description: 'GeoTapp vs Jibble: diferencias para empresas con operarios en campo. Jibble cuenta la asistencia con rostro y GPS básico; GeoTapp prueba cada intervención con posición, hora, foto e informe en el que cualquier modificación posterior es detectable.' },
  pt: { title: 'GeoTapp vs Jibble - Comparação 2026 | GeoTapp', description: 'GeoTapp vs Jibble: a Jibble conta presenças com rosto e GPS básico; a GeoTapp prova cada intervenção com posição, hora, fotos e um relatório selado.' },
  nl: { title: 'GeoTapp vs Jibble - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Jibble: de verschillen voor bedrijven met medewerkers in het veld. Jibble telt de aanwezigheid met gezicht en eenvoudige gps; GeoTapp bewijst elke klus met locatie, tijd, foto\'s en een rapport waarin elke latere wijziging zichtbaar is.' },
  da: { title: 'GeoTapp vs Jibble - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Jibble: Jibble tæller fremmøde med ansigt og basis-GPS. GeoTapp forsegler hver opgave med position, tid, fotos og en rapport, hvor enhver ændring kan opdages.' },
  sv: { title: 'GeoTapp vs Jibble - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs Jibble: de viktigaste skillnaderna för fältserviceföretag. Jibble loggar närvaro med ansiktsigenkänning och enkel GPS; GeoTapp bevisar varje uppdrag med plats, tid, foton och en rapport där varje senare ändring går att upptäcka.' },
  nb: { title: 'GeoTapp vs Jibble - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Jibble: Jibble registrerer oppmøte med ansikt og enkel GPS. GeoTapp forsegler hvert oppdrag med posisjon, tid, bilder og en rapport der enhver endring kan oppdages.' },
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
    { q: '¿Cuál es la diferencia principal entre GeoTapp y Jibble?', a: 'Jibble es un sistema de control de asistencia: registra quién ficha, con reconocimiento facial y GPS básico en el momento del fichaje. GeoTapp es un sistema de prueba del trabajo: genera informes sellados con posición, hora y fotos, pruebas que el cliente puede comprobar por su cuenta. Jibble dice «estaba»; GeoTapp demuestra «qué ha hecho, dónde y cuándo».' },
    { q: 'Jibble tiene GPS. ¿No basta?', a: 'Jibble registra una posición GPS básica al fichar, útil para saber desde dónde se ficha. Pero no es una prueba sellada de la intervención: la posición no está ligada a un informe en el que cualquier modificación posterior sea detectable ni a fotos verificables, y el cliente no puede comprobarla por sí mismo. GeoTapp sella GPS, hora y fotos en un informe que mostrar cuando alguien discute.' },
    { q: '¿GeoTapp o Jibble para quien trabaja por encargo?', a: 'Jibble es adecuado para quien solo quiere contar la asistencia y las horas con un plan gratuito generoso. GeoTapp está pensado para empresas de limpieza, técnicos de mantenimiento e instaladores que deben demostrar la intervención a un cliente. Si tienes clientes que discuten el servicio, GeoTapp produce las pruebas; Jibble registra la presencia, pero no la prueba del trabajo.' },
    { q: 'Jibble tiene un plan gratuito. ¿Merece la pena pagar GeoTapp?', a: 'El plan gratuito de Jibble tiene sentido para quien solo busca fichajes. Para empresas con operarios en campo, el valor de GeoTapp está en la prueba: cuando un cliente discute, tienes un informe sellado que mostrar en lugar de una palabra contra otra.' },
  ],
  pt: [
    { q: 'Qual é a diferença principal entre a GeoTapp e a Jibble?', a: 'A Jibble é um sistema de registo de presenças: regista quem pica o ponto, com reconhecimento facial e GPS básico no momento da picagem. A GeoTapp é um sistema de prova do trabalho: gera relatórios selados com posição, hora e fotos, provas que o cliente pode controlar por si. A Jibble diz «esteve lá»; a GeoTapp demonstra «o que fez, onde e quando».' },
    { q: 'A Jibble tem GPS. Não basta?', a: 'A Jibble regista uma posição GPS básica ao picar o ponto, útil para saber de onde se pica. Mas não é uma prova selada da intervenção: a posição não está ligada a um relatório em que qualquer alteração posterior seja detetável nem a fotos verificáveis, e o cliente não a pode controlar por si. A GeoTapp sela GPS, hora e fotos num relatório para mostrar quando alguém contesta.' },
    { q: 'GeoTapp ou Jibble para quem trabalha por encomenda?', a: 'A Jibble é adequada para quem só quer contar as presenças e as horas com um plano gratuito generoso. A GeoTapp foi pensada para empresas de limpeza, técnicos de manutenção e instaladores que têm de demonstrar a intervenção a um cliente. Se tem clientes que contestam, a GeoTapp produz as provas; a Jibble regista a presença, mas não a prova do trabalho.' },
    { q: 'A Jibble tem um plano gratuito. Vale a pena pagar a GeoTapp?', a: 'O plano gratuito da Jibble faz sentido para quem procura apenas picagens. Para empresas com operadores no terreno, o valor da GeoTapp está na prova: quando um cliente contesta, tem um relatório selado para mostrar, em vez de uma palavra contra a outra.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Jibble?', a: 'Jibble is een systeem voor het registreren van aanwezigheid: het legt vast wie registreert, met gezichtsherkenning en eenvoudige gps op het moment van de registratie. GeoTapp is een systeem voor bewijs van het werk: het maakt verzegelde rapporten met locatie, tijd en foto\'s, bewijs dat de klant zelfstandig kan controleren. Jibble zegt "hij was er"; GeoTapp toont aan "wat hij heeft gedaan, waar en wanneer".' },
    { q: 'Jibble heeft gps. Is dat niet genoeg?', a: 'Jibble legt bij de registratie een eenvoudige gps-locatie vast, nuttig om te weten van waaruit wordt geregistreerd. Het is echter geen verzegeld bewijs van de klus: de locatie is niet gekoppeld aan een rapport waarin elke latere wijziging zichtbaar is, noch aan controleerbare foto\'s, en de klant kan het niet zelf controleren. GeoTapp verzegelt gps, tijd en foto\'s in een rapport om te tonen wanneer iemand iets betwist.' },
    { q: 'GeoTapp of Jibble voor wie per opdracht werkt?', a: 'Jibble past bij wie alleen de aanwezigheid en de uren wil tellen met een ruim gratis abonnement. GeoTapp is bedoeld voor schoonmaakbedrijven, onderhoudsmonteurs en installateurs die de klus aan een opdrachtgever moeten aantonen. Hebt u klanten die iets betwisten, dan maakt GeoTapp het bewijs; Jibble registreert de aanwezigheid maar niet het bewijs van het werk.' },
    { q: 'Jibble heeft een gratis abonnement. Is het de moeite waard om voor GeoTapp te betalen?', a: 'Het gratis abonnement van Jibble is zinvol voor wie alleen registraties zoekt. Voor bedrijven met medewerkers in het veld zit de waarde van GeoTapp in het bewijs: wanneer een klant iets betwist, hebt u een verzegeld rapport om te tonen in plaats van woord tegen woord.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Jibble?', a: 'Jibble er et system til fremmøderegistrering: det registrerer, hvem der stempler, med ansigtsgenkendelse og basis-GPS i det øjeblik, man stempler. GeoTapp er et system til dokumentation af arbejdet: det laver forseglede rapporter med position, tid og fotos, som kunden selv kan kontrollere. Jibble siger “han var der”; GeoTapp viser, hvad der blev gjort, hvor og hvornår.' },
    { q: 'Jibble har GPS. Er det ikke nok?', a: 'Jibble registrerer en basis-GPS-position ved stempling, nyttig til at se, hvorfra man stempler. Men det er ikke et forseglet bevis for opgaven: positionen er hverken knyttet til en rapport, hvor enhver senere ændring kan opdages, eller til verificerbare fotos, og kunden kan ikke selv kontrollere den. GeoTapp forsegler GPS, tid og fotos i en rapport, du kan vise, når nogen bestrider arbejdet.' },
    { q: 'GeoTapp eller Jibble, hvis du arbejder på opgaver hos kunder?', a: 'Jibble passer til dem, der kun vil tælle fremmøde og timer med en generøs gratis plan. GeoTapp er lavet til rengøringsfirmaer, servicefolk og installatører, der skal dokumentere opgaven over for en kunde. Hvis du har kunder, der bestrider arbejdet, leverer GeoTapp dokumentationen; Jibble registrerer fremmødet, men ikke beviset for arbejdet.' },
    { q: 'Jibble har en gratis plan. Kan det betale sig at betale for GeoTapp?', a: 'Jibbles gratis plan giver mening for dem, der kun leder efter stempling. For virksomheder med medarbejdere i marken ligger GeoTapps værdi i dokumentationen: når en kunde bestrider arbejdet, har du en forseglet rapport at vise i stedet for ord mod ord.' },
  ],
  sv: [
    { q: 'Vad är den största skillnaden mellan GeoTapp och Jibble?', a: 'Jibble är ett närvarosystem: det loggar vem som stämplar in, med ansiktsigenkänning och enkel GPS vid instämpling. GeoTapp är ett system för arbetsbevis: det skapar förseglade rapporter med plats, tid och foton, ett bevis som kunden kan kontrollera oberoende. Jibble säger "de var här"; GeoTapp bevisar "vad de gjorde, var och när".' },
    { q: 'Jibble har GPS. Räcker inte det?', a: 'Jibble registrerar en enkel GPS-position vid instämpling, användbart för att veta varifrån någon stämplade in. Men det är inget förseglat bevis på uppdraget: platsen är inte kopplad till en rapport där varje senare ändring går att upptäcka, eller till verifierbara foton, och kunden kan inte kontrollera den. GeoTapp förseglar GPS, tid och foton i en rapport som du kan visa upp när någon ifrågasätter arbetet.' },
    { q: 'GeoTapp eller Jibble för uppdragsbaserat arbete?', a: 'Jibble passar dem som bara vill räkna närvaro och timmar med en generös gratisplan. GeoTapp är byggt för städföretag, underhållsteam och installatörer som måste bevisa uppdraget för en kund. Om kunder ifrågasätter arbetet tar GeoTapp fram beviset; Jibble loggar närvaro, inte arbetsbevis.' },
    { q: 'Jibble har en gratisplan. Är GeoTapp värt att betala för?', a: 'Jibbles gratisplan är rimlig om allt du behöver är instämplingar. För företag med fältpersonal ligger värdet i GeoTapp i beviset: när en kund ifrågasätter ett uppdrag har du en förseglad rapport att visa upp i stället för ord mot ord.' },
  ],
  nb: [
    { q: 'Hva er den viktigste forskjellen mellom GeoTapp og Jibble?', a: 'Jibble er et system for oppmøteregistrering: det registrerer hvem som stempler, med ansiktsgjenkjenning og enkel GPS i det øyeblikket man stempler. GeoTapp er et system for dokumentasjon av arbeidet: det lager forseglede rapporter med posisjon, tid og bilder, som kunden selv kan kontrollere. Jibble sier «han var der»; GeoTapp viser hva som ble gjort, hvor og når.' },
    { q: 'Jibble har GPS. Er ikke det nok?', a: 'Jibble registrerer en enkel GPS-posisjon ved stempling, nyttig for å se hvor man stempler fra. Men det er ikke et forseglet bevis for oppdraget: posisjonen er verken knyttet til en rapport der enhver senere endring kan oppdages, eller til verifiserbare bilder, og kunden kan ikke kontrollere den selv. GeoTapp forsegler GPS, tid og bilder i en rapport du kan vise når noen bestrider arbeidet.' },
    { q: 'GeoTapp eller Jibble, hvis du jobber med oppdrag hos kunder?', a: 'Jibble passer for dem som bare vil telle oppmøte og timer med en raus gratisplan. GeoTapp er laget for renholdsbedrifter, servicefolk og installatører som må dokumentere oppdraget overfor en kunde. Hvis du har kunder som bestrider arbeidet, leverer GeoTapp dokumentasjonen; Jibble registrerer oppmøtet, men ikke beviset for arbeidet.' },
    { q: 'Jibble har en gratisplan. Er det verdt å betale for GeoTapp?', a: 'Jibbles gratisplan gir mening for dem som bare ser etter stempling. For bedrifter med ansatte ute i felt ligger verdien til GeoTapp i dokumentasjonen: når en kunde bestrider arbeidet, har du en forseglet rapport å vise fram i stedet for ord mot ord.' },
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
  es: ['Posición registrada y comprobada en cada fichaje','Informe sellado criptográficamente','Pruebas fotográficas vinculadas a GPS y marca de tiempo','Verificación independiente por parte del cliente','Registro de horas','App móvil Android/iOS','Mensajería interna propia','Exportación de fichajes/nóminas','Plan gratuito','Gestión de encargos multisede','Posición registrada solo al fichar, nunca de forma continua','Información sobre el GPS firmada en la app antes de fichar*'],
  pt: ['Posição registada e controlada em cada picagem','Relatório selado criptograficamente','Provas fotográficas ligadas ao GPS e à data/hora','Verificação independente por parte do cliente','Registo de horas','App móvel Android/iOS','Mensagens internas próprias','Exportação de presenças/salários','Plano gratuito','Gestão de obras em vários locais','Posição registada apenas ao picar o ponto, nunca de forma contínua','Informação sobre o GPS assinada na app antes de picar o ponto*'],
  nl: ['Locatie vastgelegd en gecontroleerd bij elke registratie','Cryptografisch verzegeld rapport','Fotobewijzen gekoppeld aan gps en tijdstempel','Onafhankelijke controle door de klant','Bijhouden van uren','Mobiele app voor Android/iOS','Eigen interne berichten','Export van aanwezigheid/salarissen','Gratis abonnement','Opdrachtenbeheer voor meerdere locaties','Locatie alleen bij het registreren, nooit doorlopend','GPS-verklaring ondertekend in de app vóór het registreren*'],
  da: ['Position registreret og kontrolleret ved hver stempling','Kryptografisk forseglet rapport','Bevisfotos knyttet til GPS og tidsstempel','Uafhængig verificering af kunden','Timeregistrering','Mobilapp Android/iOS','Egen intern beskedfunktion','Eksport af fremmøde/løn','Gratis plan','Styring af opgaver på flere lokationer','Position registreres kun ved stempling, aldrig løbende','GPS-information underskrevet i appen, før man stempler*'],
  sv: ['Positionen registreras och kontrolleras vid varje instämpling','Kryptografiskt förseglad rapport','Bevisfoton kopplade till GPS och tidsstämpel','Oberoende verifiering av kunden','Tidrapportering','Mobilapp för Android/iOS','Inbyggd meddelandefunktion','Export av närvaro/lön','Gratisplan','Hantering av uppdrag på flera platser','Positionen registreras bara vid instämpling, aldrig löpande','GPS-information signerad i appen innan man stämplar in*'],
  nb: ['Posisjon registrert og kontrollert ved hver stempling','Kryptografisk forseglet rapport','Bevisbilder knyttet til GPS og tidsstempel','Uavhengig verifisering fra kunden','Timeregistrering','Mobilapp Android/iOS','Egen intern meldingsfunksjon','Eksport av oppmøte/lønn','Gratis plan','Styring av oppdrag på flere steder','Posisjon registreres bare ved stempling, aldri løpende','GPS-informasjon signert i appen før man stempler*'],
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
  es: 'En breve: Jibble registra la asistencia con reconocimiento facial y GPS básico; GeoTapp añade el informe sellado, la foto de prueba vinculada a GPS y hora, y la verificación de la intervención por parte del cliente.',
  pt: 'Em resumo: a Jibble regista presenças com reconhecimento facial e GPS básico; a GeoTapp acrescenta o relatório selado, a foto de prova ligada ao GPS e à hora, e a verificação da intervenção por parte do cliente.',
  nl: 'Kort gezegd: Jibble registreert aanwezigheid met gezichtsherkenning en eenvoudige gps; GeoTapp voegt het verzegelde rapport toe, de bewijsfoto gekoppeld aan gps en tijd, en de controle door de klant van de klus.',
  da: 'Kort sagt: Jibble registrerer fremmøde med ansigtsgenkendelse og basis-GPS; GeoTapp tilføjer den forseglede rapport, fotobeviset knyttet til GPS og tid og kundens egen verificering af opgaven.',
  sv: 'Kort sagt: Jibble registrerar närvaro med ansiktsigenkänning och enkel GPS; GeoTapp lägger till den förseglade rapporten, bevisfoton kopplade till GPS och tid, och kundens egen verifiering av uppdraget.',
  nb: 'Kort sagt: Jibble registrerer oppmøte med ansiktsgjenkjenning og enkel GPS; GeoTapp legger til den forseglede rapporten, bevisbilder knyttet til GPS og tid, og kundens egen verifisering av oppdraget.',
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
  es: '* Por ley (art. 13 del RGPD y, en Italia, art. 4 del Estatuto de los Trabajadores), cada empleado debe ser informado antes de ser geolocalizado. Si el software deja este paso en manos del empleador, el riesgo sigue siendo suyo. GeoTapp prepara la información personalizada, la hace firmar en la app como constancia de lectura y no deja fichar hasta que esté firmada.',
  pt: '* Por lei (art. 13.º do RGPD), cada trabalhador deve ser informado antes de ser geolocalizado. Se o software deixa este passo ao empregador, o risco continua a ser dele. A GeoTapp prepara a informação personalizada, faz com que seja assinada na app como confirmação de leitura e não deixa picar o ponto enquanto não estiver assinada.',
  nl: '* Volgens de wet (art. 13 AVG en, in Italië, art. 4 van het arbeidsstatuut) moet elke werknemer worden geïnformeerd voordat hij wordt gelokaliseerd. Laat de software deze stap aan de verantwoordelijke over, dan blijft het risico bij hem. GeoTapp maakt de persoonlijke privacyverklaring klaar, laat die in de app voor kennisgeving ondertekenen en laat niet registreren totdat ze is ondertekend.',
  da: '* Ifølge loven (GDPR art. 13 og, i Italien, art. 4 i arbejdstagerloven, Statuto dei Lavoratori) skal hver medarbejder informeres, før vedkommende geolokaliseres. Overlader softwaren dette trin til arbejdsgiveren, er risikoen stadig arbejdsgiverens. GeoTapp forbereder den personlige information, får den underskrevet i appen som bekræftelse på, at den er læst, og lader ikke medarbejderen stemple, før den er underskrevet.',
  sv: '* Enligt lag (artikel 13 i GDPR) måste varje anställd informeras innan hen geolokaliseras. Om programvaran överlåter det steget åt arbetsgivaren ligger risken kvar hos arbetsgivaren. GeoTapp tar fram den personliga informationen, låter den anställde signera den som läst i appen och släpper inte till instämpling förrän den är signerad.',
  nb: '* Ifølge loven (GDPR art. 13 og, i Italia, art. 4 i arbeidstakerloven, Statuto dei Lavoratori) må hver ansatt informeres før vedkommende geolokaliseres. Overlater programvaren dette trinnet til arbeidsgiveren, blir risikoen hos arbeidsgiveren. GeoTapp forbereder den personlige informasjonen, får den signert i appen som bekreftelse på at den er lest, og lar ikke den ansatte stemple før den er signert.',
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
    badge: 'Comparativa de apps', h1sub: '¿contar la asistencia o probar el trabajo?',
    desc: 'Jibble registra quién está, con rostro y GPS básico. GeoTapp prueba qué se ha hecho, dónde y cuándo. Para quien trabaja en campo, la diferencia lo cambia todo.',
    summary: 'En resumen:',
    summaryText: 'Jibble es excelente para contar asistencia y horas con un plan gratuito generoso. Para operarios en campo que deben demostrar la intervención a un cliente, GeoTapp produce informes sellados con posición, hora y fotos, cosas que Jibble no tiene.',
    footnote: FOOTNOTE.es,
    features: 'Comparación de funciones clave', feat: 'Función',
    diff: 'Control de asistencia o prueba del trabajo',
    geo: ['Posición tomada del teléfono en cada fichaje, no introducida a mano','Informes sellados con hash criptográfico al cierre de la intervención','Pruebas fotográficas integradas con GPS y marca de tiempo','El cliente verifica por sí mismo que el informe no se ha modificado','Pensado para operarios en campo, no para la oficina'],
    comp: ['Buen control de asistencia con reconocimiento facial','GPS básico al fichar (no sellado en la intervención)','Plan gratuito generoso, ideal para contar horas','Ningún informe sellado ni prueba fotográfica de la intervención','Los datos no son verificables por el cliente'],
    useCasesTitle: 'Quién debería elegir GeoTapp en lugar de Jibble',
    useCases: ['Empresas de limpieza y facility management con clientes exigentes','Técnicos de mantenimiento e instaladores que deben documentar las horas facturadas','Empresas sujetas a inspecciones de trabajo o a comprobaciones del cliente','Quien ya ha tenido discusiones por intervenciones no reconocidas','Empresas con varios equipos repartidos en obras distintas'],
    cta: '¿Quieres ver la diferencia en la práctica?',
    ctaDesc: 'Pruébalo en una intervención real: 14 días gratis, sin tarjeta de crédito.',
    ctaBtn: 'Empezar prueba gratuita',
  },
  pt: {
    badge: 'Comparação de apps', h1sub: 'contar presenças ou provar o trabalho?',
    desc: 'A Jibble regista quem está, com rosto e GPS básico. A GeoTapp prova o que foi feito, onde e quando. Para quem trabalha no terreno, a diferença muda tudo.',
    summary: 'Em resumo:',
    summaryText: 'A Jibble é excelente para contar presenças e horas com um plano gratuito generoso. Para operadores no terreno que têm de demonstrar a intervenção a um cliente, a GeoTapp produz relatórios selados com posição, hora e fotos, coisas que a Jibble não tem.',
    footnote: FOOTNOTE.pt,
    features: 'Comparação das funcionalidades principais', feat: 'Funcionalidade',
    diff: 'Registo de presenças ou prova do trabalho',
    geo: ['Posição obtida do telemóvel em cada picagem, não introduzida à mão','Relatórios selados com hash criptográfico ao fechar a intervenção','Provas fotográficas integradas com GPS e data/hora','O cliente verifica por si que o relatório não foi alterado','Concebida para operadores no terreno, não para o escritório'],
    comp: ['Bom registo de presenças com reconhecimento facial','GPS básico ao picar o ponto (não selado na intervenção)','Plano gratuito generoso, ideal para contar horas','Nenhum relatório selado nem prova fotográfica da intervenção','Os dados não são verificáveis pelo cliente'],
    useCasesTitle: 'Quem deve escolher a GeoTapp em vez da Jibble',
    useCases: ['Empresas de limpeza e facility management com clientes exigentes','Técnicos de manutenção e instaladores que têm de documentar as horas faturadas','Empresas sujeitas a inspeções do trabalho ou a verificações do cliente','Quem já teve contestações por intervenções não reconhecidas','Empresas com várias equipas distribuídas por obras diferentes'],
    cta: 'Quer ver a diferença na prática?',
    ctaDesc: 'Experimente numa intervenção real: 14 dias grátis, sem cartão de crédito.',
    ctaBtn: 'Começar teste gratuito',
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
    badge: 'App-sammenligning', h1sub: 'tælle fremmøde eller dokumentere arbejdet?',
    desc: 'Jibble registrerer, hvem der er til stede, med ansigt og basis-GPS. GeoTapp dokumenterer, hvad der er gjort, hvor og hvornår. For dem, der arbejder i marken, ændrer forskellen alt.',
    summary: 'Kort sagt:',
    summaryText: 'Jibble er fremragende til at tælle fremmøde og timer med en generøs gratis plan. Til medarbejdere i marken, der skal dokumentere opgaven over for en kunde, laver GeoTapp forseglede rapporter med position, tid og fotos, noget Jibble ikke har.',
    footnote: FOOTNOTE.da,
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion',
    diff: 'Fremmøderegistrering eller dokumentation af arbejdet',
    geo: ['Position aflæst fra telefonen ved hver stempling, ikke indtastet i hånden','Rapporter forseglet med kryptografisk hash, når opgaven afsluttes','Bevisfotos integreret med GPS og tidsstempel','Kunden kontrollerer selv, at rapporten ikke er ændret','Lavet til medarbejdere i marken, ikke til kontoret'],
    comp: ['God fremmøderegistrering med ansigtsgenkendelse','Basis-GPS ved stempling (ikke forseglet i opgaven)','Generøs gratis plan, ideel til at tælle timer','Ingen forseglet rapport og intet fotobevis for opgaven','Dataene kan ikke verificeres af kunden'],
    useCasesTitle: 'Hvem bør vælge GeoTapp frem for Jibble',
    useCases: ['Rengøringsfirmaer og facility management med krævende kunder','Servicefolk og installatører, der skal dokumentere de fakturerede timer','Virksomheder, der bliver kontrolleret af arbejdstilsynet eller af kunden','Dem, der allerede har oplevet, at kunder ikke har anerkendt udførte opgaver','Virksomheder med flere hold fordelt på forskellige byggepladser'],
    cta: 'Vil du se forskellen i praksis?',
    ctaDesc: 'Prøv det på en rigtig opgave: 14 dage gratis, uden kreditkort.',
    ctaBtn: 'Start gratis prøveperiode',
  },
  sv: {
    badge: 'App-jämförelse', h1sub: 'räkna närvaro eller bevisa arbetet?',
    desc: 'Jibble loggar vem som är närvarande, med ansikte och enkel GPS. GeoTapp bevisar vad som gjorts, var och när. För fältarbete ändrar den skillnaden allt.',
    summary: 'Kort sagt:',
    summaryText: 'Jibble är utmärkt för att räkna närvaro och timmar med en generös gratisplan. För fältpersonal som måste bevisa uppdraget för en kund tar GeoTapp fram förseglade rapporter med plats, tid och foton, vilket Jibble inte har.',
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion',
    diff: 'Närvarologg eller arbetsbevis',
    geo: ['Positionen hämtas från telefonen vid varje instämpling och skrivs inte in för hand','Rapporter förseglade med en kryptografisk hash när uppdraget avslutas','Bevisfoton inbyggda med GPS och tidsstämpel','Kunden kontrollerar själv att rapporten inte har ändrats','Byggt för fältpersonal, inte för kontoret'],
    comp: ['Pålitlig närvaroregistrering med ansiktsigenkänning','Enkel GPS vid instämpling (inte förseglad i uppdraget)','Generös gratisplan, utmärkt för att räkna timmar','Ingen förseglad rapport eller fotobevis för uppdraget','Uppgifterna kan inte verifieras av kunden'],
    useCasesTitle: 'Vem bör välja GeoTapp framför Jibble',
    useCases: ['Städ- och fastighetsserviceföretag med krävande kunder','Underhållsteam och installatörer som måste försvara fakturerade timmar','Företag som omfattas av arbetsinspektioner eller kundkontroller','Alla som redan har råkat ut för tvister om uppdrag som kunden inte godkände','Företag med flera arbetslag på olika platser'],
    cta: 'Vill du se skillnaden i praktiken?',
    ctaDesc: 'Prova på ett riktigt uppdrag: 14 dagar gratis, utan kreditkort.',
    ctaBtn: 'Starta den kostnadsfria provperioden',
    footnote: FOOTNOTE.sv,
  },
  nb: {
    badge: 'App-sammenligning', h1sub: 'registrere oppmøte eller dokumentere arbeidet?',
    desc: 'Jibble registrerer hvem som er til stede, med ansikt og enkel GPS. GeoTapp dokumenterer hva som er gjort, hvor og når. For dem som jobber ute i felt, endrer forskjellen alt.',
    summary: 'Kort sagt:',
    summaryText: 'Jibble er utmerket til å telle oppmøte og timer med en raus gratisplan. For ansatte ute i felt som må dokumentere oppdraget overfor en kunde, lager GeoTapp forseglede rapporter med posisjon, tid og bilder, noe Jibble ikke har.',
    footnote: FOOTNOTE.nb,
    features: 'Sammenligning av nøkkelfunksjoner', feat: 'Funksjon',
    diff: 'Oppmøteregistrering eller dokumentasjon av arbeidet',
    geo: ['Posisjon lest fra telefonen ved hver stempling, ikke skrevet inn for hånd','Rapporter forseglet med kryptografisk hash når oppdraget avsluttes','Bevisbilder integrert med GPS og tidsstempel','Kunden kontrollerer selv at rapporten ikke er endret','Laget for ansatte ute i felt, ikke for kontoret'],
    comp: ['God oppmøteregistrering med ansiktsgjenkjenning','Enkel GPS ved stempling (ikke forseglet i oppdraget)','Raus gratisplan, ideell for å telle timer','Ingen forseglet rapport og ingen bevisbilder for oppdraget','Dataene kan ikke verifiseres av kunden'],
    useCasesTitle: 'Hvem bør velge GeoTapp framfor Jibble',
    useCases: ['Renholdsbedrifter og facility management med krevende kunder','Servicefolk og installatører som må dokumentere de fakturerte timene','Bedrifter som blir kontrollert av en tilsynsmyndighet eller av kunden','De som allerede har opplevd at kunder ikke har anerkjent utførte oppdrag','Bedrifter med flere lag fordelt på ulike byggeplasser'],
    cta: 'Vil du se forskjellen i praksis?',
    ctaDesc: 'Prøv det på et ekte oppdrag: 14 dager gratis, uten kredittkort.',
    ctaBtn: 'Start gratis prøveperiode',
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
