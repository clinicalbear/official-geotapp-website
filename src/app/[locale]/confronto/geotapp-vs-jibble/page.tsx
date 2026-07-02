import type { Metadata } from 'next';
import { TrialCTALink } from '@/components/analytics/TrialCTALink';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-jibble/';
const ARTICLE_DATE_PUBLISHED = '2026-07-02';
const ARTICLE_DATE_MODIFIED = '2026-07-02';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs Jibble - Confronto 2026 | GeoTapp', description: 'GeoTapp vs Jibble: differenze per aziende con operatori sul campo. Jibble conta le presenze con volto e GPS base; GeoTapp prova ogni intervento con GPS verificato, foto e report non alterabili.' },
  en: { title: 'GeoTapp vs Jibble - Comparison 2026 | GeoTapp', description: 'GeoTapp vs Jibble: key differences for field service companies. Jibble logs attendance with face and basic GPS; GeoTapp proves every job with verified GPS, photos and tamper-proof reports.' },
  de: { title: 'GeoTapp vs Jibble - Vergleich 2026 | GeoTapp', description: 'GeoTapp vs Jibble: Hauptunterschiede für Außendienstunternehmen. Jibble erfasst Anwesenheit per Gesicht und Basis-GPS; GeoTapp belegt jeden Einsatz mit verifiziertem GPS, Fotos und manipulationssicheren Berichten.' },
  fr: { title: 'GeoTapp vs Jibble - Comparaison 2026 | GeoTapp', description: 'GeoTapp vs Jibble : différences clés pour les entreprises avec des opérateurs sur le terrain. Jibble pointe les présences avec visage et GPS basique ; GeoTapp prouve chaque intervention avec GPS vérifié, photos et rapports infalsifiables.' },
  es: { title: 'GeoTapp vs Jibble - Comparación 2026 | GeoTapp', description: 'GeoTapp vs Jibble: diferencias clave para empresas con operarios de campo. Jibble registra la asistencia con rostro y GPS básico; GeoTapp prueba cada intervención con GPS verificado, fotos e informes inalterables.' },
  pt: { title: 'GeoTapp vs Jibble - Comparação 2026 | GeoTapp', description: 'GeoTapp vs Jibble: diferenças-chave para empresas com operadores no terreno. A Jibble regista presenças com rosto e GPS básico; a GeoTapp prova cada intervenção com GPS verificado, fotos e relatórios inalteráveis.' },
  nl: { title: 'GeoTapp vs Jibble - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Jibble: belangrijke verschillen voor bedrijven met buitendienstmedewerkers. Jibble registreert aanwezigheid met gezicht en basis-GPS; GeoTapp bewijst elke opdracht met geverifieerd GPS, foto\'s en manipulatiebestendige rapporten.' },
  da: { title: 'GeoTapp vs Jibble - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Jibble: vigtige forskelle for virksomheder med medarbejdere i marken. Jibble registrerer fremmøde med ansigt og basis-GPS; GeoTapp beviser hver opgave med verificeret GPS, fotos og rapporter, der ikke kan ændres.' },
  sv: { title: 'GeoTapp vs Jibble - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs Jibble: viktiga skillnader för företag med fältpersonal. Jibble registrerar närvaro med ansikte och enkel GPS; GeoTapp bevisar varje uppdrag med verifierad GPS, foton och rapporter som inte kan ändras.' },
  nb: { title: 'GeoTapp vs Jibble - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Jibble: viktige forskjeller for bedrifter med feltarbeidere. Jibble registrerer oppmøte med ansikt og enkel GPS; GeoTapp beviser hvert oppdrag med verifisert GPS, bilder og rapporter som ikke kan endres.' },
  ru: { title: 'GeoTapp vs Jibble, Сравнение 2026 | GeoTapp', description: 'GeoTapp vs Jibble: ключевые различия для компаний с выездными работниками. Jibble отмечает присутствие по лицу и базовому GPS; GeoTapp доказывает каждое задание проверенным GPS, фото и защищёнными отчётами.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza principale tra GeoTapp e Jibble?', a: 'Jibble è un sistema di rilevazione presenze: registra chi timbra, con riconoscimento facciale e GPS di base al momento della timbratura. GeoTapp è un sistema di prova del lavoro: genera report sigillati con GPS verificato, foto e firma digitale, prove che il cliente può controllare in autonomia. Jibble dice "c\'era"; GeoTapp dimostra "cosa ha fatto, dove e quando".' },
    { q: 'Jibble ha il GPS. Non basta?', a: 'Jibble registra una posizione GPS di base alla timbratura, utile per sapere da dove si timbra. Non è però una prova sigillata dell\'intervento: la posizione non è legata a un report non alterabile né a foto verificabili, e il cliente non può controllarla da sé. GeoTapp sigilla GPS, ora e foto in un report che regge a una contestazione.' },
    { q: 'GeoTapp o Jibble per chi lavora su commessa?', a: 'Jibble è adatto a chi vuole solo contare le presenze e le ore con un piano gratuito generoso. GeoTapp è pensato per imprese di pulizie, manutentori e installatori che devono dimostrare l\'intervento a un committente. Se hai clienti che contestano, GeoTapp produce le prove; Jibble registra la presenza ma non la prova del lavoro.' },
    { q: 'Jibble ha un piano gratuito. Vale la pena pagare GeoTapp?', a: 'Il free plan di Jibble ha senso per chi cerca solo timbrature. Per aziende con operatori sul campo il valore di GeoTapp sta nelle prove difendibili: un contratto salvato grazie a un report verificabile vale molte volte l\'abbonamento mensile.' },
  ],
  en: [
    { q: 'What is the main difference between GeoTapp and Jibble?', a: 'Jibble is an attendance system: it logs who clocks in, with face recognition and basic GPS at clock-in. GeoTapp is a proof-of-work system: it generates sealed reports with verified GPS, photos and digital signature, proof clients can check independently. Jibble says "they were here"; GeoTapp proves "what they did, where and when".' },
    { q: 'Jibble has GPS. Isn\'t that enough?', a: 'Jibble records a basic GPS position at clock-in, useful to know where someone clocked in from. But it is not sealed proof of the job: the location is not tied to a tamper-proof report or verifiable photos, and the client cannot check it. GeoTapp seals GPS, time and photos into a report that holds up in a dispute.' },
    { q: 'GeoTapp or Jibble for job-based work?', a: 'Jibble suits those who just want to count attendance and hours on a generous free plan. GeoTapp is built for cleaning companies, maintenance crews and installers who must prove the job to a client. If clients dispute work, GeoTapp produces the proof; Jibble logs attendance, not proof of work.' },
    { q: 'Jibble has a free plan. Is GeoTapp worth paying for?', a: 'Jibble free makes sense if all you need is clock-ins. For companies with field operators, the value of GeoTapp lies in defensible proof: one contract saved thanks to a verifiable report is worth many times the monthly subscription.' },
  ],
  de: [
    { q: 'Was ist der Hauptunterschied zwischen GeoTapp und Jibble?', a: 'Jibble ist ein Anwesenheitssystem: es erfasst, wer stempelt, mit Gesichtserkennung und Basis-GPS beim Stempeln. GeoTapp ist ein Arbeitsnachweis-System: es erstellt versiegelte Berichte mit verifiziertem GPS, Fotos und digitaler Signatur, Beweise, die der Kunde eigenständig prüfen kann. Jibble sagt "war da"; GeoTapp belegt "was, wo und wann getan wurde".' },
    { q: 'Jibble hat GPS. Reicht das nicht?', a: 'Jibble erfasst beim Stempeln eine einfache GPS-Position, nützlich um zu wissen, von wo gestempelt wurde. Es ist aber kein versiegelter Einsatznachweis: der Standort ist nicht mit einem fälschungssicheren Bericht oder überprüfbaren Fotos verknüpft, und der Kunde kann ihn nicht prüfen. GeoTapp versiegelt GPS, Zeit und Fotos in einem Bericht, der einem Streit standhält.' },
    { q: 'GeoTapp oder Jibble für auftragsbezogene Arbeit?', a: 'Jibble eignet sich für alle, die nur Anwesenheit und Stunden mit einem großzügigen Free Plan zählen wollen. GeoTapp ist für Reinigungsfirmen, Wartungsteams und Installateure gemacht, die den Einsatz gegenüber einem Kunden belegen müssen. Bei Streit liefert GeoTapp die Beweise; Jibble erfasst Anwesenheit, nicht den Arbeitsnachweis.' },
    { q: 'Jibble hat einen kostenlosen Plan. Lohnt sich GeoTapp?', a: 'Jibble free ergibt Sinn, wenn Sie nur Stempelungen brauchen. Für Unternehmen mit Außendienst liegt der Wert von GeoTapp in belastbaren Beweisen: ein dank eines verifizierbaren Berichts geretteter Auftrag ist ein Vielfaches des Monatsabos wert.' },
  ],
  fr: [
    { q: 'Quelle est la principale différence entre GeoTapp et Jibble ?', a: 'Jibble est un système de présence : il enregistre qui pointe, avec reconnaissance faciale et GPS basique au pointage. GeoTapp est un système de preuve du travail : il génère des rapports scellés avec GPS vérifié, photos et signature numérique, des preuves que le client peut contrôler en toute autonomie. Jibble dit "il était là" ; GeoTapp prouve "ce qu\'il a fait, où et quand".' },
    { q: 'Jibble a le GPS. Cela ne suffit-il pas ?', a: 'Jibble enregistre une position GPS basique au pointage, utile pour savoir d\'où l\'on pointe. Ce n\'est pas une preuve scellée de l\'intervention : la position n\'est pas liée à un rapport infalsifiable ni à des photos vérifiables, et le client ne peut pas la contrôler. GeoTapp scelle GPS, heure et photos dans un rapport qui résiste à une contestation.' },
    { q: 'GeoTapp ou Jibble pour les interventions sur commande ?', a: 'Jibble convient à ceux qui veulent seulement compter les présences et les heures avec un plan gratuit généreux. GeoTapp est conçu pour les entreprises de nettoyage, agents de maintenance et installateurs qui doivent prouver l\'intervention à un client. Si vos clients contestent, GeoTapp produit les preuves ; Jibble enregistre la présence, pas la preuve du travail.' },
    { q: 'Jibble a un plan gratuit. GeoTapp vaut-il le coût ?', a: 'Jibble gratuit a du sens si vous avez seulement besoin de pointages. Pour les entreprises avec des opérateurs sur le terrain, la valeur de GeoTapp réside dans des preuves défendables : un contrat sauvé grâce à un rapport vérifiable vaut bien des fois l\'abonnement mensuel.' },
  ],
  es: [
    { q: '¿Cuál es la diferencia principal entre GeoTapp y Jibble?', a: 'Jibble es un sistema de asistencia: registra quién ficha, con reconocimiento facial y GPS básico al fichar. GeoTapp es un sistema de prueba del trabajo: genera informes sellados con GPS verificado, fotos y firma digital, pruebas que el cliente puede comprobar por sí mismo. Jibble dice "estuvo aquí"; GeoTapp demuestra "qué hizo, dónde y cuándo".' },
    { q: 'Jibble tiene GPS. ¿No basta?', a: 'Jibble registra una posición GPS básica al fichar, útil para saber desde dónde se ficha. Pero no es una prueba sellada de la intervención: la ubicación no está ligada a un informe inalterable ni a fotos verificables, y el cliente no puede comprobarla. GeoTapp sella GPS, hora y fotos en un informe que aguanta una reclamación.' },
    { q: '¿GeoTapp o Jibble para trabajo por encargo?', a: 'Jibble es adecuado para quien solo quiere contar asistencia y horas con un plan gratuito generoso. GeoTapp está pensado para empresas de limpieza, técnicos de mantenimiento e instaladores que deben demostrar la intervención a un cliente. Si tus clientes reclaman, GeoTapp produce las pruebas; Jibble registra la asistencia, no la prueba del trabajo.' },
    { q: 'Jibble tiene un plan gratuito. ¿Vale la pena pagar GeoTapp?', a: 'Jibble gratis tiene sentido si solo necesitas fichajes. Para empresas con operarios de campo, el valor de GeoTapp está en las pruebas defendibles: un contrato salvado gracias a un informe verificable vale muchas veces la suscripción mensual.' },
  ],
  pt: [
    { q: 'Qual é a diferença principal entre GeoTapp e Jibble?', a: 'A Jibble é um sistema de presenças: regista quem pica o ponto, com reconhecimento facial e GPS básico na picagem. A GeoTapp é um sistema de prova do trabalho: gera relatórios selados com GPS verificado, fotos e assinatura digital, provas que o cliente pode verificar sozinho. A Jibble diz "esteve cá"; a GeoTapp prova "o que fez, onde e quando".' },
    { q: 'A Jibble tem GPS. Não chega?', a: 'A Jibble regista uma posição GPS básica na picagem, útil para saber de onde se pica. Mas não é uma prova selada da intervenção: a localização não está ligada a um relatório inalterável nem a fotos verificáveis, e o cliente não a pode verificar. A GeoTapp sela GPS, hora e fotos num relatório que resiste a uma contestação.' },
    { q: 'GeoTapp ou Jibble para trabalho por encomenda?', a: 'A Jibble serve para quem só quer contar presenças e horas com um plano gratuito generoso. A GeoTapp foi feita para empresas de limpeza, equipas de manutenção e instaladores que têm de provar a intervenção a um cliente. Se os clientes contestam, a GeoTapp produz as provas; a Jibble regista a presença, não a prova do trabalho.' },
    { q: 'A Jibble tem plano gratuito. Vale a pena pagar a GeoTapp?', a: 'A Jibble gratuita faz sentido se só precisa de picagens. Para empresas com operadores no terreno, o valor da GeoTapp está nas provas defensáveis: um contrato salvo graças a um relatório verificável vale muitas vezes a mensalidade.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Jibble?', a: 'Jibble is een aanwezigheidssysteem: het registreert wie inklokt, met gezichtsherkenning en basis-GPS bij het inklokken. GeoTapp is een bewijs-van-werk-systeem: het genereert verzegelde rapporten met geverifieerd GPS, foto\'s en digitale handtekening, bewijs dat de klant zelf kan controleren. Jibble zegt "was er"; GeoTapp bewijst "wat, waar en wanneer".' },
    { q: 'Jibble heeft GPS. Is dat niet genoeg?', a: 'Jibble registreert bij het inklokken een basis-GPS-positie, handig om te weten van waar iemand inklokt. Maar het is geen verzegeld bewijs van de opdracht: de locatie is niet gekoppeld aan een manipulatiebestendig rapport of verifieerbare foto\'s, en de klant kan het niet controleren. GeoTapp verzegelt GPS, tijd en foto\'s in een rapport dat een geschil doorstaat.' },
    { q: 'GeoTapp of Jibble voor opdrachtgericht werk?', a: 'Jibble past bij wie alleen aanwezigheid en uren wil tellen met een genereus gratis plan. GeoTapp is gebouwd voor schoonmaakbedrijven, onderhoudsploegen en installateurs die de opdracht aan een klant moeten bewijzen. Als klanten betwisten, levert GeoTapp het bewijs; Jibble registreert aanwezigheid, geen bewijs van werk.' },
    { q: 'Jibble heeft een gratis plan. Is GeoTapp de moeite waard?', a: 'Jibble gratis is logisch als je alleen inklokken nodig hebt. Voor bedrijven met buitendienstmedewerkers zit de waarde van GeoTapp in verdedigbaar bewijs: één contract gered dankzij een verifieerbaar rapport is vele malen het maandabonnement waard.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Jibble?', a: 'Jibble er et fremmødesystem: det registrerer, hvem der stempler, med ansigtsgenkendelse og basis-GPS ved stempling. GeoTapp er et arbejdsbevis-system: det genererer forseglede rapporter med verificeret GPS, fotos og digital signatur, beviser kunden selv kan kontrollere. Jibble siger "var her"; GeoTapp beviser "hvad, hvor og hvornår".' },
    { q: 'Jibble har GPS. Er det ikke nok?', a: 'Jibble registrerer en basis-GPS-position ved stempling, nyttig for at vide, hvorfra der stemples. Men det er ikke et forseglet bevis for opgaven: placeringen er ikke knyttet til en rapport, der ikke kan ændres, eller verificerbare fotos, og kunden kan ikke kontrollere den. GeoTapp forsegler GPS, tid og fotos i en rapport, der holder i en tvist.' },
    { q: 'GeoTapp eller Jibble til opgavebaseret arbejde?', a: 'Jibble passer til dem, der bare vil tælle fremmøde og timer med en generøs gratis plan. GeoTapp er bygget til rengøringsfirmaer, vedligeholdelseshold og installatører, der skal bevise opgaven over for en kunde. Hvis kunder bestrider arbejdet, leverer GeoTapp beviset; Jibble registrerer fremmøde, ikke arbejdsbevis.' },
    { q: 'Jibble har en gratis plan. Er GeoTapp værd at betale for?', a: 'Jibble gratis giver mening, hvis du kun har brug for stemplinger. For virksomheder med medarbejdere i marken ligger værdien af GeoTapp i holdbare beviser: én kontrakt reddet takket være en verificerbar rapport er mange gange det månedlige abonnement værd.' },
  ],
  sv: [
    { q: 'Vad är den viktigaste skillnaden mellan GeoTapp och Jibble?', a: 'Jibble är ett närvarosystem: det registrerar vem som stämplar, med ansiktsigenkänning och enkel GPS vid stämpling. GeoTapp är ett arbetsbevis-system: det skapar förseglade rapporter med verifierad GPS, foton och digital signatur, bevis som kunden själv kan kontrollera. Jibble säger "var här"; GeoTapp bevisar "vad, var och när".' },
    { q: 'Jibble har GPS. Räcker inte det?', a: 'Jibble registrerar en enkel GPS-position vid stämpling, bra för att veta varifrån man stämplar. Men det är inte ett förseglat bevis på uppdraget: platsen är inte kopplad till en rapport som inte kan ändras eller till verifierbara foton, och kunden kan inte kontrollera den. GeoTapp förseglar GPS, tid och foton i en rapport som håller i en tvist.' },
    { q: 'GeoTapp eller Jibble för uppdragsbaserat arbete?', a: 'Jibble passar den som bara vill räkna närvaro och timmar med en generös gratisplan. GeoTapp är byggt för städföretag, underhållsteam och installatörer som måste bevisa uppdraget för en kund. Om kunder bestrider arbetet levererar GeoTapp beviset; Jibble registrerar närvaro, inte arbetsbevis.' },
    { q: 'Jibble har en gratisplan. Är GeoTapp värt att betala för?', a: 'Jibble gratis är rimligt om du bara behöver stämplingar. För företag med fältpersonal ligger värdet av GeoTapp i hållbara bevis: ett kontrakt räddat tack vare en verifierbar rapport är värt många gånger månadsabonnemanget.' },
  ],
  nb: [
    { q: 'Hva er den viktigste forskjellen mellom GeoTapp og Jibble?', a: 'Jibble er et oppmøtesystem: det registrerer hvem som stempler, med ansiktsgjenkjenning og enkel GPS ved stempling. GeoTapp er et arbeidsbevis-system: det lager forseglede rapporter med verifisert GPS, bilder og digital signatur, bevis kunden selv kan kontrollere. Jibble sier "var her"; GeoTapp beviser "hva, hvor og når".' },
    { q: 'Jibble har GPS. Er ikke det nok?', a: 'Jibble registrerer en enkel GPS-posisjon ved stempling, nyttig for å vite hvorfra man stempler. Men det er ikke et forseglet bevis på oppdraget: posisjonen er ikke koblet til en rapport som ikke kan endres eller til verifiserbare bilder, og kunden kan ikke kontrollere den. GeoTapp forsegler GPS, tid og bilder i en rapport som holder i en tvist.' },
    { q: 'GeoTapp eller Jibble for oppdragsbasert arbeid?', a: 'Jibble passer for den som bare vil telle oppmøte og timer med en raus gratisplan. GeoTapp er bygget for renholdsfirmaer, vedlikeholdslag og installatører som må bevise oppdraget overfor en kunde. Hvis kunder bestrider arbeidet, leverer GeoTapp beviset; Jibble registrerer oppmøte, ikke arbeidsbevis.' },
    { q: 'Jibble har en gratis plan. Er GeoTapp verdt å betale for?', a: 'Jibble gratis gir mening hvis du bare trenger stemplinger. For bedrifter med feltarbeidere ligger verdien av GeoTapp i holdbare bevis: én kontrakt reddet takket være en verifiserbar rapport er verdt mange ganger månedsabonnementet.' },
  ],
  ru: [
    { q: 'В чём главное различие между GeoTapp и Jibble?', a: 'Jibble, это система учёта присутствия: она фиксирует, кто отметился, с распознаванием лица и базовым GPS при отметке. GeoTapp, это система доказательства работы: она формирует защищённые отчёты с проверенным GPS, фото и цифровой подписью, доказательства, которые заказчик может проверить сам. Jibble говорит «был здесь»; GeoTapp доказывает «что, где и когда сделано».' },
    { q: 'У Jibble есть GPS. Разве этого не достаточно?', a: 'Jibble фиксирует базовую GPS-позицию при отметке, удобно знать, откуда отметились. Но это не защищённое доказательство работы: позиция не связана с неизменяемым отчётом или проверяемыми фото, и заказчик не может её проверить. GeoTapp запечатывает GPS, время и фото в отчёт, который выдерживает спор.' },
    { q: 'GeoTapp или Jibble для работы по заказам?', a: 'Jibble подходит тем, кто хочет лишь считать присутствие и часы на щедром бесплатном тарифе. GeoTapp создан для клининговых компаний, бригад обслуживания и монтажников, которым нужно доказать работу заказчику. Если клиенты оспаривают, GeoTapp предоставляет доказательства; Jibble фиксирует присутствие, а не доказательство работы.' },
    { q: 'У Jibble есть бесплатный тариф. Стоит ли платить за GeoTapp?', a: 'Бесплатный Jibble имеет смысл, если нужны только отметки. Для компаний с выездными сотрудниками ценность GeoTapp, в надёжных доказательствах: один сохранённый контракт благодаря проверяемому отчёту стоит многократно больше месячной подписки.' },
  ],
};

const ROWS_LABELS: Record<string, string[]> = {
  it: ['GPS verificato al momento dell\'intervento','Report sigillato crittograficamente','Prove fotografiche collegate a GPS e timestamp','Verifica indipendente da parte del cliente','Tracciamento ore','App mobile Android/iOS','Messaggistica interna proprietaria','Export presenze/paghe','Piano gratuito','Gestione commesse multi-sito','Conformità GDPR geolocalizzazione','Informativa GPS automatica con firma digitale*'],
  en: ['GPS verified at job site','Cryptographically sealed report','Photo evidence linked to GPS and timestamp','Independent verification by client','Time tracking','Mobile app Android/iOS','Built-in messaging','Payroll/attendance export','Free plan','Multi-site job management','GDPR-compliant geolocation','Automatic GPS privacy notice with digital signature*'],
  de: ['GPS verifiziert am Einsatzort','Kryptographisch versiegelter Bericht','Fotobeweise verknüpft mit GPS und Zeitstempel','Unabhängige Prüfung durch den Kunden','Zeiterfassung','Mobile App Android/iOS','Integrierte Nachrichten','Lohn-/Anwesenheitsexport','Kostenloser Plan','Standortübergreifende Auftragsverwaltung','DSGVO-konforme Geolokalisierung','Automatische GPS-Datenschutzerklärung mit digitaler Signatur*'],
  fr: ['GPS vérifié sur le lieu d\'intervention','Rapport scellé cryptographiquement','Preuves photographiques liées au GPS et à l\'horodatage','Vérification indépendante par le client','Suivi des heures','Application mobile Android/iOS','Messagerie interne intégrée','Export paie/présences','Plan gratuit','Gestion de chantiers multi-sites','Géolocalisation conforme au RGPD','Avis de confidentialité GPS automatique avec signature numérique*'],
  es: ['GPS verificado en el lugar de la intervención','Informe sellado criptográficamente','Pruebas fotográficas vinculadas a GPS y marca de tiempo','Verificación independiente por el cliente','Seguimiento de horas','App móvil Android/iOS','Mensajería interna propia','Exportación de nóminas/presencia','Plan gratuito','Gestión de obras multisede','Geolocalización conforme al RGPD','Aviso de privacidad GPS automático con firma digital*'],
  pt: ['GPS verificado no local da intervenção','Relatório selado criptograficamente','Provas fotográficas ligadas a GPS e data/hora','Verificação independente pelo cliente','Controlo de horas','App móvel Android/iOS','Mensagens internas próprias','Exportação de salários/presenças','Plano gratuito','Gestão de obras multilocal','Geolocalização conforme o RGPD','Aviso de privacidade GPS automático com assinatura digital*'],
  nl: ['GPS geverifieerd op de werklocatie','Cryptografisch verzegeld rapport','Fotobewijs gekoppeld aan GPS en tijdstempel','Onafhankelijke verificatie door de klant','Urenregistratie','Mobiele app Android/iOS','Ingebouwde berichten','Export loon/aanwezigheid','Gratis plan','Beheer van opdrachten op meerdere locaties','AVG-conforme geolocatie','Automatische GPS-privacyverklaring met digitale handtekening*'],
  da: ['GPS verificeret på opgavestedet','Kryptografisk forseglet rapport','Fotobeviser knyttet til GPS og tidsstempel','Uafhængig verificering af kunden','Tidsregistrering','Mobilapp Android/iOS','Indbygget beskedfunktion','Eksport af løn/fremmøde','Gratis plan','Styring af opgaver på flere lokationer','GDPR-kompatibel geolokalisering','Automatisk GPS-privatlivserklæring med digital signatur*'],
  sv: ['GPS verifierad på arbetsplatsen','Kryptografiskt förseglad rapport','Fotobevis kopplade till GPS och tidsstämpel','Oberoende verifiering av kunden','Tidsregistrering','Mobilapp Android/iOS','Inbyggd meddelandefunktion','Export av lön/närvaro','Gratisplan','Hantering av uppdrag på flera platser','GDPR-kompatibel geolokalisering','Automatiskt GPS-integritetsmeddelande med digital signatur*'],
  nb: ['GPS verifisert på oppdragsstedet','Kryptografisk forseglet rapport','Fotobevis koblet til GPS og tidsstempel','Uavhengig verifisering av kunden','Tidsregistrering','Mobilapp Android/iOS','Innebygd meldingsfunksjon','Eksport av lønn/oppmøte','Gratis plan','Styring av oppdrag på flere steder','GDPR-kompatibel geolokalisering','Automatisk GPS-personvernerklæring med digital signatur*'],
  ru: ['GPS проверен на месте задания','Криптографически опечатанный отчёт','Фотодоказательства, привязанные к GPS и метке времени','Независимая проверка заказчиком','Учёт часов','Мобильное приложение Android/iOS','Встроенный обмен сообщениями','Экспорт зарплат/присутствия','Бесплатный тариф','Управление заданиями на нескольких объектах','Геолокация в соответствии с GDPR','Автоматическое уведомление о GPS с цифровой подписью*'],
};

const ROWS_GEO =   [true, true, true, true, true, true, true, true, false, true, true, true];
const ROWS_COMP =  [false, false, false, false, true, true, false, true, true, false, false, false];

type Copy = {
  badge: string; h1sub: string; desc: string;
  summary: string; summaryText: string; footnote: string;
  features: string; feat: string; diff: string;
  geo: string[]; comp: string[];
  useCasesTitle: string; useCases: string[];
  cta: string; ctaDesc: string; ctaBtn: string;
};

const FOOTNOTE: Record<string, string> = {
  it: '* Per legge (GDPR Art. 13 e, in Italia, Art. 4 Statuto dei Lavoratori), ogni dipendente deve firmare un\'informativa privacy prima di essere geolocalizzato. La maggior parte dei software GPS non lo gestisce: il rischio legale resta al titolare. GeoTapp genera automaticamente l\'informativa personalizzata, la fa firmare digitalmente al dipendente e blocca l\'accesso GPS finché non è firmata.',
  en: '* By law (GDPR Art. 13, and in Italy Art. 4 of the Workers\' Statute), every employee must sign a privacy notice before being geolocated. Most GPS software does not handle this: the legal risk stays with the employer. GeoTapp automatically generates the personalized notice, has the employee sign it digitally, and blocks GPS access until it is signed.',
  de: '* Gesetzlich (DSGVO Art. 13, in Italien Art. 4 Arbeitnehmerstatut) muss jeder Mitarbeiter vor der Geolokalisierung eine Datenschutzerklärung unterschreiben. Die meisten GPS-Programme regeln das nicht: das rechtliche Risiko bleibt beim Arbeitgeber. GeoTapp erstellt die personalisierte Erklärung automatisch, lässt sie digital unterschreiben und sperrt den GPS-Zugriff, bis sie signiert ist.',
  fr: '* Par la loi (RGPD Art. 13, et en Italie Art. 4 du Statut des travailleurs), chaque employé doit signer un avis de confidentialité avant d\'être géolocalisé. La plupart des logiciels GPS ne le gèrent pas : le risque juridique reste à l\'employeur. GeoTapp génère automatiquement l\'avis personnalisé, le fait signer numériquement et bloque l\'accès GPS tant qu\'il n\'est pas signé.',
  es: '* Por ley (RGPD Art. 13, y en Italia Art. 4 del Estatuto de los Trabajadores), cada empleado debe firmar un aviso de privacidad antes de ser geolocalizado. La mayoría del software GPS no lo gestiona: el riesgo legal queda con el empleador. GeoTapp genera automáticamente el aviso personalizado, lo hace firmar digitalmente y bloquea el acceso GPS hasta que esté firmado.',
  pt: '* Por lei (RGPD Art. 13, e em Itália Art. 4 do Estatuto dos Trabalhadores), cada funcionário deve assinar um aviso de privacidade antes de ser geolocalizado. A maioria do software GPS não trata disto: o risco legal fica com o empregador. A GeoTapp gera automaticamente o aviso personalizado, fá-lo assinar digitalmente e bloqueia o acesso GPS até estar assinado.',
  nl: '* Volgens de wet (AVG Art. 13, en in Italië Art. 4 van het Werknemersstatuut) moet elke werknemer een privacyverklaring tekenen voordat hij wordt gelokaliseerd. De meeste GPS-software regelt dit niet: het juridische risico blijft bij de werkgever. GeoTapp genereert automatisch de gepersonaliseerde verklaring, laat die digitaal tekenen en blokkeert GPS-toegang tot ze is getekend.',
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
    summaryText: 'Jibble è ottimo per contare presenze e ore con un piano gratuito generoso. Per operatori sul campo che devono dimostrare l\'intervento a un committente, GeoTapp produce report sigillati con GPS verificato, foto e firma digitale, cose che Jibble non ha.',
    footnote: FOOTNOTE.it,
    features: 'Confronto funzionalità chiave', feat: 'Funzionalità',
    diff: 'Rilevazione presenze vs prova del lavoro',
    geo: ['GPS verificato automaticamente, non inserito a mano','Report sigillati con hash crittografico alla chiusura dell\'intervento','Prove fotografiche integrate con GPS e timestamp','Il committente verifica l\'autenticità in autonomia','Progettato per operatori sul campo, non per l\'ufficio'],
    comp: ['Buona rilevazione presenze con riconoscimento facciale','GPS di base alla timbratura (non sigillato nell\'intervento)','Piano gratuito generoso, ideale per contare le ore','Nessun report sigillato né prova fotografica dell\'intervento','I dati non sono verificabili dal cliente'],
    useCasesTitle: 'Chi dovrebbe scegliere GeoTapp invece di Jibble',
    useCases: ['Imprese di pulizie e facility management con clienti esigenti','Manutentori e installatori che devono difendere le ore fatturate','Aziende soggette a ispezioni CCNL o audit del committente','Chi ha già avuto contestazioni su interventi non riconosciuti','Aziende con più squadre distribuite su cantieri diversi'],
    cta: 'Vuoi vedere la differenza in pratica?',
    ctaDesc: 'Ti mostriamo come un intervento diventa una prova verificabile, in 20 minuti, senza impegno.',
    ctaBtn: 'Inizia subito gratuitamente!',
  },
  en: {
    badge: 'App Comparison', h1sub: 'counting attendance or proving the work?',
    desc: 'Jibble logs who is present, with face and basic GPS. GeoTapp proves what was done, where and when. For field work, that difference changes everything.',
    summary: 'In short:',
    summaryText: 'Jibble is great for counting attendance and hours on a generous free plan. For field operators who must prove the job to a client, GeoTapp produces sealed reports with verified GPS, photos and digital signature, which Jibble does not have.',
    footnote: FOOTNOTE.en,
    features: 'Key feature comparison', feat: 'Feature',
    diff: 'Attendance tracking vs proof of work',
    geo: ['GPS verified automatically, not typed in by hand','Reports sealed with a cryptographic hash at job close','Photo evidence built in with GPS and timestamp','The client verifies authenticity independently','Built for field operators, not the office'],
    comp: ['Solid attendance tracking with facial recognition','Basic GPS at clock-in (not sealed into the job)','Generous free plan, great for counting hours','No sealed report or photo proof of the job','Data is not verifiable by the client'],
    useCasesTitle: 'Who should choose GeoTapp over Jibble',
    useCases: ['Cleaning and facility management companies with demanding clients','Maintenance crews and installers who must defend billed hours','Companies subject to labor inspections or client audits','Anyone who has faced disputes over unrecognized jobs','Companies with several crews across different sites'],
    cta: 'Want to see the difference in practice?',
    ctaDesc: 'We show you how a job becomes verifiable proof, in 20 minutes, no commitment.',
    ctaBtn: 'Start free now!',
  },
  de: {
    badge: 'App-Vergleich', h1sub: 'Anwesenheit zählen oder Arbeit belegen?',
    desc: 'Jibble erfasst, wer da ist, per Gesicht und Basis-GPS. GeoTapp belegt, was, wo und wann getan wurde. Für den Außendienst ändert dieser Unterschied alles.',
    summary: 'Kurz gesagt:',
    summaryText: 'Jibble ist gut, um Anwesenheit und Stunden mit einem großzügigen Free Plan zu zählen. Für Außendienstkräfte, die den Einsatz gegenüber einem Kunden belegen müssen, erstellt GeoTapp versiegelte Berichte mit verifiziertem GPS, Fotos und digitaler Signatur, die Jibble nicht hat.',
    footnote: FOOTNOTE.de,
    features: 'Vergleich der Kernfunktionen', feat: 'Funktion',
    diff: 'Anwesenheitserfassung vs Arbeitsnachweis',
    geo: ['GPS automatisch verifiziert, nicht von Hand eingetragen','Berichte bei Einsatzabschluss mit kryptographischem Hash versiegelt','Fotobeweise integriert mit GPS und Zeitstempel','Der Kunde prüft die Echtheit eigenständig','Für Außendienstkräfte gemacht, nicht fürs Büro'],
    comp: ['Solide Anwesenheitserfassung mit Gesichtserkennung','Basis-GPS beim Stempeln (nicht in den Einsatz versiegelt)','Großzügiger Free Plan, ideal zum Stundenzählen','Kein versiegelter Bericht, kein Fotobeweis des Einsatzes','Daten sind für den Kunden nicht überprüfbar'],
    useCasesTitle: 'Wer GeoTapp statt Jibble wählen sollte',
    useCases: ['Reinigungs- und Facility-Management-Firmen mit anspruchsvollen Kunden','Wartungsteams und Installateure, die abgerechnete Stunden verteidigen müssen','Unternehmen mit Arbeitsinspektionen oder Kundenaudits','Wer schon Streit über nicht anerkannte Einsätze hatte','Unternehmen mit mehreren Teams an verschiedenen Standorten'],
    cta: 'Den Unterschied in der Praxis sehen?',
    ctaDesc: 'Wir zeigen Ihnen in 20 Minuten, wie ein Einsatz zu einem überprüfbaren Beweis wird, unverbindlich.',
    ctaBtn: 'Jetzt kostenlos starten!',
  },
  fr: {
    badge: 'Comparaison d\'apps', h1sub: 'compter les présences ou prouver le travail ?',
    desc: 'Jibble enregistre qui est présent, avec visage et GPS basique. GeoTapp prouve ce qui a été fait, où et quand. Pour le terrain, cette différence change tout.',
    summary: 'En bref :',
    summaryText: 'Jibble est excellent pour compter présences et heures avec un plan gratuit généreux. Pour les opérateurs de terrain qui doivent prouver l\'intervention à un client, GeoTapp produit des rapports scellés avec GPS vérifié, photos et signature numérique, ce que Jibble n\'a pas.',
    footnote: FOOTNOTE.fr,
    features: 'Comparaison des fonctionnalités clés', feat: 'Fonctionnalité',
    diff: 'Suivi des présences vs preuve du travail',
    geo: ['GPS vérifié automatiquement, non saisi à la main','Rapports scellés par un hachage cryptographique à la clôture','Preuves photographiques intégrées avec GPS et horodatage','Le client vérifie l\'authenticité en toute autonomie','Conçu pour les opérateurs de terrain, pas le bureau'],
    comp: ['Bon suivi des présences avec reconnaissance faciale','GPS basique au pointage (non scellé dans l\'intervention)','Plan gratuit généreux, idéal pour compter les heures','Aucun rapport scellé ni preuve photo de l\'intervention','Les données ne sont pas vérifiables par le client'],
    useCasesTitle: 'Qui devrait choisir GeoTapp plutôt que Jibble',
    useCases: ['Entreprises de nettoyage et facility management avec clients exigeants','Agents de maintenance et installateurs qui doivent défendre les heures facturées','Entreprises soumises à des inspections du travail ou audits client','Ceux qui ont déjà eu des litiges sur des interventions non reconnues','Entreprises avec plusieurs équipes sur des chantiers différents'],
    cta: 'Voir la différence en pratique ?',
    ctaDesc: 'Nous vous montrons comment une intervention devient une preuve vérifiable, en 20 minutes, sans engagement.',
    ctaBtn: 'Commencez gratuitement !',
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
    badge: 'App-vergelijking', h1sub: 'aanwezigheid tellen of het werk bewijzen?',
    desc: 'Jibble registreert wie er is, met gezicht en basis-GPS. GeoTapp bewijst wat er is gedaan, waar en wanneer. Voor veldwerk verandert dat verschil alles.',
    summary: 'Kort gezegd:',
    summaryText: 'Jibble is prima om aanwezigheid en uren te tellen met een genereus gratis plan. Voor buitendienstmedewerkers die de opdracht aan een klant moeten bewijzen, levert GeoTapp verzegelde rapporten met geverifieerd GPS, foto\'s en digitale handtekening, wat Jibble niet heeft.',
    footnote: FOOTNOTE.nl,
    features: 'Vergelijking kernfuncties', feat: 'Functie',
    diff: 'Aanwezigheidsregistratie vs bewijs van werk',
    geo: ['GPS automatisch geverifieerd, niet met de hand ingevoerd','Rapporten verzegeld met een cryptografische hash bij afsluiting','Fotobewijs ingebouwd met GPS en tijdstempel','De klant verifieert de echtheid zelf','Gebouwd voor buitendienst, niet voor kantoor'],
    comp: ['Degelijke aanwezigheidsregistratie met gezichtsherkenning','Basis-GPS bij inklokken (niet verzegeld in de opdracht)','Genereus gratis plan, ideaal om uren te tellen','Geen verzegeld rapport of fotobewijs van de opdracht','Gegevens zijn niet verifieerbaar door de klant'],
    useCasesTitle: 'Wie GeoTapp boven Jibble zou moeten kiezen',
    useCases: ['Schoonmaak- en facilitybedrijven met veeleisende klanten','Onderhoudsploegen en installateurs die gefactureerde uren moeten verdedigen','Bedrijven met arbeidsinspecties of klantaudits','Wie al geschillen had over niet-erkende opdrachten','Bedrijven met meerdere ploegen op verschillende locaties'],
    cta: 'Het verschil in de praktijk zien?',
    ctaDesc: 'We laten u in 20 minuten zien hoe een opdracht verifieerbaar bewijs wordt, vrijblijvend.',
    ctaBtn: 'Begin nu gratis!',
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
  const m = META[locale] ?? META.en;
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: buildLocaleAlternates(locale, PATHNAME),
    openGraph: { url: `https://geotapp.com/${locale}${PATHNAME}`, type: 'website', title: m.title, description: m.description },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description },
  };
}

export default async function GeoTappVsJibblePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = T[locale] ?? T.en;
  const faqItems = FAQ[locale] ?? FAQ.en;
  const labels = ROWS_LABELS[locale] ?? ROWS_LABELS.en;
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

  const meta = META[locale] ?? META.en;
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

      <div className="min-h-screen pt-5 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">

          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              {t.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              GeoTapp vs Jibble:{' '}
              <span className="text-primary">
                {t.h1sub}
              </span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {t.desc}
            </p>
          </div>

          {/* Summary verdict */}
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-12">
            <p className="font-semibold text-primary mb-2">
              {t.summary}
            </p>
            <p className="text-text-secondary">
              {t.summaryText}
            </p>
          </div>

          {/* Comparison table */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">
              {t.features}
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left py-3 px-4 font-semibold text-sm">
                      {t.feat}
                    </th>
                    <th className="text-center py-3 px-4 font-semibold text-sm text-primary">GeoTapp</th>
                    <th className="text-center py-3 px-4 font-semibold text-sm text-text-secondary">Jibble</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                      <td className="py-3 px-4 text-sm text-text-secondary">{row.feature}</td>
                      <td className="py-3 px-4 text-center">
                        {row.geotapp
                          ? <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white font-black text-base">✓</span>
                          : <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-600/40 text-slate-400 font-bold text-base">✕</span>}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.competitor
                          ? <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white font-black text-base">✓</span>
                          : <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-600/40 text-slate-400 font-bold text-base">✕</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Privacy consent footnote */}
          <div className="mb-16 px-4">
            <p className="text-xs text-text-secondary leading-relaxed">
              {t.footnote}
            </p>
          </div>

          {/* Key difference */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">
              {t.diff}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-3">GeoTapp</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {t.geo.map((li, i) => <li key={i}>• {li}</li>)}
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-text-secondary mb-3">Jibble</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {t.comp.map((li, i) => <li key={i}>• {li}</li>)}
                </ul>
              </div>
            </div>
          </section>

          {/* Use cases */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">
              {t.useCasesTitle}
            </h2>
            <div className="space-y-3">
              {t.useCases.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span className="text-text-secondary text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">FAQ</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-white/10 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">{item.q}</h3>
                  <p className="text-text-secondary text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-primary/20 to-purple-500/10 border border-primary/20 rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-3">
              {t.cta}
            </h2>
            <p className="text-text-secondary mb-6">
              {t.ctaDesc}
            </p>
            <TrialCTALink
              href={`/${locale}/trial/`}
              source="confronto_vs_jibble"
              className="btn-modern"
            >
              {t.ctaBtn}
            </TrialCTALink>
          </div>

        </div>
      </div>
    </>
  );
}
