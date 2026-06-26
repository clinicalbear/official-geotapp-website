import type { Metadata } from 'next';
import { TrialCTALink } from '@/components/analytics/TrialCTALink';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-clockify/';
const ARTICLE_DATE_PUBLISHED = '2025-09-01';
const ARTICLE_DATE_MODIFIED = '2026-05-23';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs Clockify - Confronto 2025 | GeoTapp', description: 'GeoTapp vs Clockify: differenze chiave per aziende con operatori sul campo. Clockify traccia le ore; GeoTapp certifica ogni intervento con GPS verificato, foto e report non alterabili.' },
  en: { title: 'GeoTapp vs Clockify - Comparison 2025 | GeoTapp', description: 'GeoTapp vs Clockify: key differences for field service companies. Clockify tracks hours; GeoTapp certifies every job with verified GPS, photos and tamper-proof reports.' },
  de: { title: 'GeoTapp vs Clockify - Vergleich 2025 | GeoTapp', description: 'GeoTapp vs Clockify: Hauptunterschiede für Außendienstunternehmen. Clockify erfasst Stunden; GeoTapp zertifiziert jeden Einsatz mit verifizierten GPS-Daten, Fotos und manipulationssicheren Berichten.' },
  nl: { title: 'GeoTapp vs Clockify - Vergelijking 2025 | GeoTapp', description: 'GeoTapp vs Clockify: belangrijke verschillen voor bedrijven met buitendienstmedewerkers. Clockify registreert uren; GeoTapp certificeert elke opdracht met geverifieerd GPS, foto\'s en manipulatiebestendige rapporten.' },
  fr: { title: 'GeoTapp vs Clockify - Comparaison 2025 | GeoTapp', description: 'GeoTapp vs Clockify : différences clés pour les entreprises avec des opérateurs sur le terrain. Clockify suit les heures ; GeoTapp certifie chaque intervention avec GPS vérifié, photos et rapports infalsifiables.' },
  es: { title: 'GeoTapp vs Clockify - Comparación 2025 | GeoTapp', description: 'GeoTapp vs Clockify: diferencias clave para empresas con operarios de campo. Clockify registra las horas; GeoTapp certifica cada intervención con GPS verificado, fotos e informes inalterables.' },
  pt: { title: 'GeoTapp vs Clockify - Comparação 2025 | GeoTapp', description: 'GeoTapp vs Clockify: diferenças-chave para empresas com operadores no terreno. A Clockify regista as horas; a GeoTapp certifica cada intervenção com GPS verificado, fotos e relatórios inalteráveis.' },
  da: { title: 'GeoTapp vs Clockify - Sammenligning 2025 | GeoTapp', description: 'GeoTapp vs Clockify: vigtige forskelle for virksomheder med medarbejdere i marken. Clockify registrerer timer; GeoTapp certificerer hver opgave med verificeret GPS, fotos og rapporter, der ikke kan ændres.' },
  sv: { title: 'GeoTapp vs Clockify - Jämförelse 2025 | GeoTapp', description: 'GeoTapp vs Clockify: viktiga skillnader för företag med fältpersonal. Clockify registrerar timmar; GeoTapp certifierar varje uppdrag med verifierad GPS, foton och rapporter som inte kan ändras.' },
  nb: { title: 'GeoTapp vs Clockify - Sammenligning 2025 | GeoTapp', description: 'GeoTapp vs Clockify: viktige forskjeller for bedrifter med feltarbeidere. Clockify registrerer timer; GeoTapp sertifiserer hvert oppdrag med verifisert GPS, bilder og rapporter som ikke kan endres.' },
  ru: { title: 'GeoTapp vs Clockify, Сравнение 2025 | GeoTapp', description: 'GeoTapp vs Clockify: ключевые различия для компаний с выездными работниками. Clockify учитывает часы; GeoTapp сертифицирует каждое задание с проверенным GPS, фото и отчётами, которые нельзя подделать.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza principale tra GeoTapp e Clockify?', a: 'Clockify è un time tracker: registra le ore lavorate manualmente o con timer. GeoTapp è un sistema di certificazione degli interventi: genera automaticamente report sigillati con GPS verificato, foto e firma digitale, prove che il cliente può controllare in autonomia.' },
    { q: 'Clockify ha il tracciamento GPS per i lavoratori sul campo?', a: 'Clockify non ha un sistema GPS verificato per operatori sul campo. La posizione non è parte del report e non è sigillata crittograficamente. GeoTapp registra la posizione GPS al momento dell\'apertura e chiusura di ogni intervento, inclusa nel report non alterabile.' },
    { q: 'GeoTapp o Clockify per chi fa interventi su commessa?', a: 'Clockify è adatto per team remoti che fatturano a ore. GeoTapp è progettato per chi deve dimostrare dove e quando ha lavorato, imprese di pulizie, manutentori, installatori. Se hai clienti che contestano, GeoTapp produce le prove; Clockify no.' },
    { q: 'Clockify è gratuito. Vale la pena pagare GeoTapp?', a: 'Clockify free ha senso per freelance e team di ufficio. Per aziende con operatori sul campo, il valore di GeoTapp sta nelle prove difendibili: un contratto salvato grazie a un report verificabile vale molte volte l\'abbonamento mensile.' },
  ],
  en: [
    { q: 'What is the main difference between GeoTapp and Clockify?', a: 'Clockify is a time tracker: records hours worked manually or with a timer. GeoTapp is a job certification system: automatically generates sealed reports with verified GPS, photos and digital signature, proof clients can verify independently.' },
    { q: 'Does Clockify have GPS tracking for field workers?', a: 'Clockify does not have a verified GPS system for field operators. Location is not part of the report and not cryptographically sealed. GeoTapp records GPS position at job opening and closing, included in the tamper-proof report.' },
    { q: 'GeoTapp or Clockify for job-based field work?', a: 'Clockify suits remote teams billing by the hour. GeoTapp is designed for those who must prove where and when they worked, cleaning companies, maintenance crews, installers. If clients dispute work, GeoTapp produces the proof; Clockify does not.' },
    { q: 'Clockify is free. Is GeoTapp worth paying for?', a: 'Clockify free makes sense for freelancers and office teams. For companies with field operators, the value of GeoTapp lies in defensible proof: a contract saved thanks to a verifiable report is worth many times the monthly subscription.' },
  ],
  de: [
    { q: 'Was ist der Hauptunterschied zwischen GeoTapp und Clockify?', a: 'Clockify ist ein Time-Tracker: erfasst Arbeitsstunden manuell oder per Timer. GeoTapp ist ein Einsatzzertifizierungssystem: es erstellt automatisch versiegelte Berichte mit verifiziertem GPS, Fotos und digitaler Signatur - Beweise, die der Kunde eigenständig prüfen kann.' },
    { q: 'Hat Clockify GPS-Tracking für Außendienstmitarbeiter?', a: 'Clockify hat kein verifiziertes GPS-System für Außendienstkräfte. Der Standort ist nicht Teil des Berichts und nicht kryptographisch versiegelt. GeoTapp erfasst die GPS-Position bei Öffnung und Abschluss jedes Einsatzes, eingebettet im fälschungssicheren Bericht.' },
    { q: 'GeoTapp oder Clockify für auftragsbezogene Außeneinsätze?', a: 'Clockify eignet sich für Remote-Teams, die nach Stunden abrechnen. GeoTapp ist für jene gemacht, die beweisen müssen, wo und wann sie gearbeitet haben - Reinigungsfirmen, Wartungsteams, Installateure. Bei Streit mit Kunden liefert GeoTapp die Beweise; Clockify nicht.' },
    { q: 'Clockify ist kostenlos. Lohnt sich GeoTapp?', a: 'Clockify free ergibt Sinn für Freelancer und Büroteams. Für Unternehmen mit Außendienst liegt der Wert von GeoTapp in belastbaren Beweisen: ein dank eines verifizierbaren Berichts geretteter Auftrag ist ein Vielfaches des Monatsabos wert.' },
  ],
  fr: [
    { q: 'Quelle est la principale différence entre GeoTapp et Clockify ?', a: 'Clockify est un suivi du temps : il enregistre les heures travaillées manuellement ou avec un chronomètre. GeoTapp est un système de certification des interventions : il génère automatiquement des rapports scellés avec GPS vérifié, photos et signature numérique, des preuves que le client peut contrôler en toute autonomie.' },
    { q: 'Clockify a-t-il un suivi GPS pour les travailleurs sur le terrain ?', a: 'Clockify n\'a pas de système GPS vérifié pour les opérateurs sur le terrain. La position ne fait pas partie du rapport et n\'est pas scellée cryptographiquement. GeoTapp enregistre la position GPS à l\'ouverture et à la clôture de chaque intervention, incluse dans le rapport infalsifiable.' },
    { q: 'GeoTapp ou Clockify pour les interventions sur commande ?', a: 'Clockify convient aux équipes à distance qui facturent à l\'heure. GeoTapp est conçu pour ceux qui doivent prouver où et quand ils ont travaillé, entreprises de nettoyage, agents de maintenance, installateurs. Si vos clients contestent, GeoTapp produit les preuves ; Clockify non.' },
    { q: 'Clockify est gratuit. GeoTapp vaut-il le coût ?', a: 'Clockify gratuit a du sens pour les indépendants et les équipes de bureau. Pour les entreprises avec des opérateurs sur le terrain, la valeur de GeoTapp réside dans des preuves défendables : un contrat sauvé grâce à un rapport vérifiable vaut bien des fois l\'abonnement mensuel.' },
  ],
  es: [
    { q: '¿Cuál es la diferencia principal entre GeoTapp y Clockify?', a: 'Clockify es un control de tiempo: registra las horas trabajadas manualmente o con cronómetro. GeoTapp es un sistema de certificación de intervenciones: genera automáticamente informes sellados con GPS verificado, fotos y firma digital, pruebas que el cliente puede comprobar por sí mismo.' },
    { q: '¿Tiene Clockify seguimiento GPS para trabajadores de campo?', a: 'Clockify no tiene un sistema GPS verificado para operarios de campo. La ubicación no forma parte del informe y no está sellada criptográficamente. GeoTapp registra la posición GPS al abrir y cerrar cada intervención, incluida en el informe inalterable.' },
    { q: '¿GeoTapp o Clockify para quien hace intervenciones por encargo?', a: 'Clockify es adecuado para equipos remotos que facturan por horas. GeoTapp está diseñado para quien debe demostrar dónde y cuándo trabajó, empresas de limpieza, técnicos de mantenimiento, instaladores. Si tienes clientes que reclaman, GeoTapp produce las pruebas; Clockify no.' },
    { q: 'Clockify es gratis. ¿Vale la pena pagar GeoTapp?', a: 'Clockify gratis tiene sentido para autónomos y equipos de oficina. Para empresas con operarios de campo, el valor de GeoTapp está en las pruebas defendibles: un contrato salvado gracias a un informe verificable vale muchas veces la suscripción mensual.' },
  ],
  pt: [
    { q: 'Qual é a principal diferença entre a GeoTapp e a Clockify?', a: 'A Clockify é um controlo de tempo: regista as horas trabalhadas manualmente ou com cronómetro. A GeoTapp é um sistema de certificação de intervenções: gera automaticamente relatórios selados com GPS verificado, fotos e assinatura digital, provas que o cliente pode verificar sozinho.' },
    { q: 'A Clockify tem rastreamento GPS para trabalhadores no terreno?', a: 'A Clockify não tem um sistema GPS verificado para operadores no terreno. A localização não faz parte do relatório e não é selada criptograficamente. A GeoTapp regista a posição GPS na abertura e no fecho de cada intervenção, incluída no relatório inalterável.' },
    { q: 'GeoTapp ou Clockify para quem faz intervenções por encomenda?', a: 'A Clockify é adequada para equipas remotas que faturam à hora. A GeoTapp foi concebida para quem tem de provar onde e quando trabalhou, empresas de limpeza, técnicos de manutenção, instaladores. Se tem clientes que contestam, a GeoTapp produz as provas; a Clockify não.' },
    { q: 'A Clockify é gratuita. Vale a pena pagar a GeoTapp?', a: 'A Clockify gratuita faz sentido para freelancers e equipas de escritório. Para empresas com operadores no terreno, o valor da GeoTapp está nas provas defensáveis: um contrato salvo graças a um relatório verificável vale muitas vezes a assinatura mensal.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Clockify?', a: 'Clockify is een tijdregistratie: registreert gewerkte uren handmatig of met een timer. GeoTapp is een systeem voor opdrachtcertificering: genereert automatisch verzegelde rapporten met geverifieerd GPS, foto\'s en digitale handtekening, bewijs dat de klant zelf kan controleren.' },
    { q: 'Heeft Clockify GPS-tracking voor buitendienstmedewerkers?', a: 'Clockify heeft geen geverifieerd GPS-systeem voor buitendienstmedewerkers. De locatie maakt geen deel uit van het rapport en is niet cryptografisch verzegeld. GeoTapp registreert de GPS-positie bij het openen en sluiten van elke opdracht, opgenomen in het manipulatiebestendige rapport.' },
    { q: 'GeoTapp of Clockify voor wie opdrachten op bestelling uitvoert?', a: 'Clockify past bij teams op afstand die per uur factureren. GeoTapp is ontworpen voor wie moet bewijzen waar en wanneer er is gewerkt, schoonmaakbedrijven, onderhoudsmonteurs, installateurs. Als klanten klagen, levert GeoTapp het bewijs; Clockify niet.' },
    { q: 'Clockify is gratis. Is GeoTapp het betalen waard?', a: 'Clockify gratis is logisch voor zzp\'ers en kantoorteams. Voor bedrijven met buitendienstmedewerkers zit de waarde van GeoTapp in verdedigbaar bewijs: een contract dat dankzij een verifieerbaar rapport gered wordt, is vele malen het maandabonnement waard.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Clockify?', a: 'Clockify er en tidsregistrering: registrerer arbejdstimer manuelt eller med en timer. GeoTapp er et system til opgavecertificering: genererer automatisk forseglede rapporter med verificeret GPS, fotos og digital signatur, beviser, som kunden selv kan kontrollere.' },
    { q: 'Har Clockify GPS-sporing til medarbejdere i marken?', a: 'Clockify har ikke et verificeret GPS-system til feltmedarbejdere. Positionen er ikke en del af rapporten og er ikke kryptografisk forseglet. GeoTapp registrerer GPS-positionen ved åbning og lukning af hver opgave, inkluderet i den rapport, der ikke kan ændres.' },
    { q: 'GeoTapp eller Clockify til opgavebaseret arbejde i marken?', a: 'Clockify passer til fjernteams, der fakturerer pr. time. GeoTapp er lavet til dem, der skal bevise, hvor og hvornår de har arbejdet, rengøringsfirmaer, vedligeholdelsesfolk, montører. Hvis kunder klager, leverer GeoTapp beviset; Clockify gør ikke.' },
    { q: 'Clockify er gratis. Er GeoTapp pengene værd?', a: 'Clockify gratis giver mening for freelancere og kontorteams. For virksomheder med feltmedarbejdere ligger værdien af GeoTapp i forsvarlige beviser: en kontrakt reddet takket være en verificerbar rapport er mange gange det månedlige abonnement værd.' },
  ],
  sv: [
    { q: 'Vad är den största skillnaden mellan GeoTapp och Clockify?', a: 'Clockify är en tidsregistrering: registrerar arbetade timmar manuellt eller med en timer. GeoTapp är ett system för uppdragscertifiering: genererar automatiskt förseglade rapporter med verifierad GPS, foton och digital signatur, bevis som kunden själv kan kontrollera.' },
    { q: 'Har Clockify GPS-spårning för fältpersonal?', a: 'Clockify har inget verifierat GPS-system för fältarbetare. Positionen är inte en del av rapporten och är inte kryptografiskt förseglad. GeoTapp registrerar GPS-positionen vid öppning och stängning av varje uppdrag, inkluderad i den rapport som inte kan ändras.' },
    { q: 'GeoTapp eller Clockify för uppdragsbaserat fältarbete?', a: 'Clockify passar fjärrteam som fakturerar per timme. GeoTapp är gjort för dem som måste bevisa var och när de arbetat, städföretag, underhållsteam, installatörer. Om kunder bestrider levererar GeoTapp beviset; Clockify gör inte det.' },
    { q: 'Clockify är gratis. Är GeoTapp värt att betala för?', a: 'Clockify gratis är vettigt för frilansare och kontorsteam. För företag med fältpersonal ligger värdet av GeoTapp i försvarbara bevis: ett kontrakt räddat tack vare en verifierbar rapport är värt många gånger månadsabonnemanget.' },
  ],
  nb: [
    { q: 'Hva er hovedforskjellen mellom GeoTapp og Clockify?', a: 'Clockify er en tidsregistrering: registrerer arbeidstimer manuelt eller med en timer. GeoTapp er et system for oppdragssertifisering: genererer automatisk forseglede rapporter med verifisert GPS, bilder og digital signatur, bevis kunden kan kontrollere selv.' },
    { q: 'Har Clockify GPS-sporing for feltarbeidere?', a: 'Clockify har ikke et verifisert GPS-system for feltarbeidere. Posisjonen er ikke en del av rapporten og er ikke kryptografisk forseglet. GeoTapp registrerer GPS-posisjonen ved åpning og lukking av hvert oppdrag, inkludert i rapporten som ikke kan endres.' },
    { q: 'GeoTapp eller Clockify for oppdragsbasert feltarbeid?', a: 'Clockify passer for fjernteam som fakturerer per time. GeoTapp er laget for dem som må bevise hvor og når de har jobbet, renholdsbedrifter, vedlikeholdsteam, montører. Hvis kunder klager, leverer GeoTapp beviset; Clockify gjør det ikke.' },
    { q: 'Clockify er gratis. Er GeoTapp verdt å betale for?', a: 'Clockify gratis gir mening for frilansere og kontorteam. For bedrifter med feltarbeidere ligger verdien av GeoTapp i forsvarlige bevis: en kontrakt reddet takket være en verifiserbar rapport er verdt mange ganger månedsabonnementet.' },
  ],
  ru: [
    { q: 'В чём главное различие между GeoTapp и Clockify?', a: 'Clockify, это трекер времени: фиксирует отработанные часы вручную или таймером. GeoTapp, это система сертификации заданий: автоматически создаёт опечатанные отчёты с проверенным GPS, фото и цифровой подписью, доказательства, которые клиент может проверить самостоятельно.' },
    { q: 'Есть ли в Clockify GPS-отслеживание для выездных работников?', a: 'В Clockify нет проверенной GPS-системы для выездных работников. Местоположение не входит в отчёт и не опечатано криптографически. GeoTapp фиксирует GPS-позицию при открытии и закрытии каждого задания, включая её в отчёт, который нельзя подделать.' },
    { q: 'GeoTapp или Clockify для тех, кто выполняет работы по заказу?', a: 'Clockify подходит удалённым командам, выставляющим счёт по часам. GeoTapp создан для тех, кто должен доказать, где и когда работал, клининговые компании, ремонтники, монтажники. Если клиенты оспаривают, GeoTapp предоставляет доказательства; Clockify, нет.' },
    { q: 'Clockify бесплатен. Стоит ли платить за GeoTapp?', a: 'Бесплатный Clockify имеет смысл для фрилансеров и офисных команд. Для компаний с выездными работниками ценность GeoTapp, в защитимых доказательствах: контракт, спасённый благодаря проверяемому отчёту, стоит во много раз больше месячной подписки.' },
  ],
};

// Etichette della tabella di confronto, per locale.
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
  badge: string; h1sub: string; desc: string; summary: string; summaryText: string;
  footnote: string; diff: string; geo: string[]; comp: string[];
  features: string; feat: string;
  useCasesTitle: string; useCases: string[];
  cta: string; ctaDesc: string; ctaBtn: string;
};

const T: Record<string, Copy> = {
  it: {
    badge: 'Confronto App', h1sub: 'tracciare le ore o certificare gli interventi?',
    desc: 'Clockify registra il tempo. GeoTapp produce prove verificabili del lavoro svolto. Per chi lavora sul campo, la differenza cambia tutto.',
    summary: 'In sintesi:',
    summaryText: 'Clockify è eccellente per freelance e team di ufficio che tracciano ore per la fatturazione. Per operatori sul campo che devono dimostrare il lavoro svolto a un committente, GeoTapp produce report sigillati con GPS reale, foto e firma digitale - Clockify non ha queste funzionalità.',
    footnote: '* Per legge (GDPR Art. 13 e, in Italia, Art. 4 Statuto dei Lavoratori), ogni dipendente deve firmare un\'informativa privacy prima di essere geolocalizzato. La maggior parte dei software GPS non lo gestisce: il rischio legale resta al titolare. GeoTapp genera automaticamente l\'informativa personalizzata, la fa firmare digitalmente al dipendente e blocca l\'accesso GPS finché non è firmata. Nessun altro software sul mercato lo fa.',
    features: 'Confronto funzionalità chiave', feat: 'Funzionalità',
    diff: 'Time tracking vs certificazione del lavoro',
    geo: ['GPS verificato automaticamente, non inserito a mano','Report sigillati con hash crittografico al momento della chiusura','Prove fotografiche integrate con GPS e timestamp','Il committente verifica l\'autenticità in autonomia','Progettato per operatori sul campo (non ufficio)'],
    comp: ['Ottimo per time tracking e fatturazione a ore','Nessun GPS verificato o sigillato','Nessuna prova fotografica collegata all\'intervento','I dati non sono verificabili da terzi','Piano gratuito disponibile (ideale per freelance)'],
    useCasesTitle: 'Chi dovrebbe scegliere GeoTapp invece di Clockify',
    useCases: ['Imprese di pulizie e facility management con clienti esigenti','Manutentori e installatori che devono difendere le ore fatturate','Aziende soggette a ispezioni CCNL o audit del committente','Chi ha già avuto contestazioni su interventi non riconosciuti','Aziende con più squadre distribuite su cantieri diversi'],
    cta: 'Vuoi vedere la differenza in pratica?',
    ctaDesc: 'Ti mostriamo come un intervento diventa una prova verificabile, in 20 minuti, senza impegno.',
    ctaBtn: 'Inizia subito gratuitamente!',
  },
  en: {
    badge: 'App Comparison', h1sub: 'track hours or certify jobs?',
    desc: 'Clockify records time. GeoTapp produces verifiable proof of completed work. For field workers, the difference changes everything.',
    summary: 'Bottom line:',
    summaryText: 'Clockify excels for freelancers and office teams tracking hours for billing. For field operators who need to prove completed work to a client, GeoTapp produces sealed reports with real GPS, photos and digital signature - Clockify lacks these features.',
    footnote: '* By law (GDPR Art. 13), every employee must sign a privacy notice before being geolocated. Most GPS software does not handle this: the legal risk stays with the employer. GeoTapp automatically generates the personalised notice, gets it digitally signed by the employee and blocks GPS access until it is signed. No other software on the market does this.',
    features: 'Key features comparison', feat: 'Feature',
    diff: 'Time tracking vs work certification',
    geo: ['GPS automatically verified, not entered manually','Reports sealed with cryptographic hash at closure','Photo evidence integrated with GPS and timestamp','Client independently verifies authenticity','Designed for field operators (not office)'],
    comp: ['Great for time tracking and hourly billing','No verified or sealed GPS','No photo evidence linked to the job','Data not independently verifiable by third parties','Free plan available (ideal for freelancers)'],
    useCasesTitle: 'Who should choose GeoTapp over Clockify',
    useCases: ['Cleaning and facility management companies with demanding clients','Maintenance and installation crews who need to defend billed hours','Companies subject to labour inspections or client audits','Anyone who has already faced disputes over unrecognised jobs','Companies with multiple crews on different sites'],
    cta: 'Want to see the difference in practice?',
    ctaDesc: 'We show you how a job becomes verifiable proof, in 20 minutes, no commitment.',
    ctaBtn: 'Start for free!',
  },
  de: {
    badge: 'App-Vergleich', h1sub: 'Stunden erfassen oder Einsätze zertifizieren?',
    desc: 'Clockify erfasst Zeit. GeoTapp liefert verifizierbare Beweise der geleisteten Arbeit. Für Außendienstkräfte ändert dieser Unterschied alles.',
    summary: 'Fazit:',
    summaryText: 'Clockify ist hervorragend für Freelancer und Büroteams, die Stunden zur Abrechnung erfassen. Für Außendienstkräfte, die einem Auftraggeber die geleistete Arbeit beweisen müssen, erstellt GeoTapp versiegelte Berichte mit echtem GPS, Fotos und digitaler Signatur, diese Funktionen fehlen Clockify.',
    footnote: '* Laut Gesetz (DSGVO Art. 13) muss jeder Mitarbeiter vor der Geolokalisierung eine Datenschutzerklärung unterschreiben. Die meiste GPS-Software handhabt das nicht: das rechtliche Risiko bleibt beim Arbeitgeber. GeoTapp erstellt automatisch die personalisierte Erklärung, lässt sie vom Mitarbeiter digital unterschreiben und sperrt den GPS-Zugang, bis sie unterschrieben ist. Keine andere Software auf dem Markt tut das.',
    features: 'Vergleich der wichtigsten Funktionen', feat: 'Funktion',
    diff: 'Zeiterfassung vs Arbeitszertifizierung',
    geo: ['GPS automatisch verifiziert, nicht manuell eingegeben','Berichte beim Abschluss mit kryptographischem Hash versiegelt','Fotobeweise integriert mit GPS und Zeitstempel','Der Auftraggeber prüft die Echtheit eigenständig','Für Außendienstkräfte konzipiert (nicht fürs Büro)'],
    comp: ['Top für Zeiterfassung und Stundenabrechnung','Kein verifiziertes oder versiegeltes GPS','Keine mit dem Einsatz verknüpften Fotobeweise','Daten von Dritten nicht überprüfbar','Kostenloser Plan verfügbar (ideal für Freelancer)'],
    useCasesTitle: 'Wer GeoTapp statt Clockify wählen sollte',
    useCases: ['Reinigungs- und Facility-Management-Firmen mit anspruchsvollen Kunden','Wartungs- und Installationsteams, die abgerechnete Stunden verteidigen müssen','Unternehmen mit Tarif-Kontrollen oder Auftraggeber-Audits','Wer bereits Streit über nicht anerkannte Einsätze hatte','Unternehmen mit mehreren Teams auf verschiedenen Baustellen'],
    cta: 'Möchten Sie den Unterschied in der Praxis sehen?',
    ctaDesc: 'Wir zeigen Ihnen, wie ein Einsatz zum verifizierbaren Beweis wird, in 20 Minuten, unverbindlich.',
    ctaBtn: 'Jetzt kostenlos starten!',
  },
  fr: {
    badge: 'Comparatif d\'applis', h1sub: 'suivre les heures ou certifier les interventions ?',
    desc: 'Clockify enregistre le temps. GeoTapp produit des preuves vérifiables du travail effectué. Pour ceux qui travaillent sur le terrain, la différence change tout.',
    summary: 'En résumé :',
    summaryText: 'Clockify excelle pour les indépendants et les équipes de bureau qui suivent les heures pour la facturation. Pour les opérateurs sur le terrain qui doivent prouver le travail effectué à un donneur d\'ordre, GeoTapp produit des rapports scellés avec GPS réel, photos et signature numérique, ces fonctionnalités manquent à Clockify.',
    footnote: '* Selon la loi (RGPD Art. 13), chaque salarié doit signer un avis de confidentialité avant d\'être géolocalisé. La plupart des logiciels GPS ne le gèrent pas : le risque juridique reste à l\'employeur. GeoTapp génère automatiquement l\'avis personnalisé, le fait signer numériquement par le salarié et bloque l\'accès GPS tant qu\'il n\'est pas signé. Aucun autre logiciel sur le marché ne le fait.',
    features: 'Comparaison des fonctionnalités clés', feat: 'Fonctionnalité',
    diff: 'Suivi du temps vs certification du travail',
    geo: ['GPS vérifié automatiquement, pas saisi à la main','Rapports scellés par hachage cryptographique à la clôture','Preuves photographiques intégrées au GPS et à l\'horodatage','Le donneur d\'ordre vérifie l\'authenticité en autonomie','Conçu pour les opérateurs sur le terrain (pas le bureau)'],
    comp: ['Excellent pour le suivi du temps et la facturation horaire','Aucun GPS vérifié ni scellé','Aucune preuve photographique liée à l\'intervention','Données non vérifiables par des tiers','Plan gratuit disponible (idéal pour les indépendants)'],
    useCasesTitle: 'Qui devrait choisir GeoTapp plutôt que Clockify',
    useCases: ['Entreprises de nettoyage et de facility management aux clients exigeants','Agents de maintenance et installateurs qui doivent défendre les heures facturées','Entreprises soumises à des inspections du travail ou à des audits du client','Ceux qui ont déjà subi des litiges sur des interventions non reconnues','Entreprises avec plusieurs équipes sur des chantiers différents'],
    cta: 'Envie de voir la différence en pratique ?',
    ctaDesc: 'Nous vous montrons comment une intervention devient une preuve vérifiable, en 20 minutes, sans engagement.',
    ctaBtn: 'Commencez gratuitement !',
  },
  es: {
    badge: 'Comparativa de apps', h1sub: '¿registrar las horas o certificar las intervenciones?',
    desc: 'Clockify registra el tiempo. GeoTapp produce pruebas verificables del trabajo realizado. Para quien trabaja sobre el terreno, la diferencia lo cambia todo.',
    summary: 'En resumen:',
    summaryText: 'Clockify destaca para autónomos y equipos de oficina que registran horas para la facturación. Para operarios de campo que deben demostrar el trabajo realizado a un cliente, GeoTapp produce informes sellados con GPS real, fotos y firma digital - Clockify carece de estas funciones.',
    footnote: '* Por ley (RGPD Art. 13), cada empleado debe firmar un aviso de privacidad antes de ser geolocalizado. La mayoría del software GPS no lo gestiona: el riesgo legal recae en el empleador. GeoTapp genera automáticamente el aviso personalizado, hace que el empleado lo firme digitalmente y bloquea el acceso GPS hasta que esté firmado. Ningún otro software del mercado lo hace.',
    features: 'Comparación de funciones clave', feat: 'Función',
    diff: 'Control de tiempo vs certificación del trabajo',
    geo: ['GPS verificado automáticamente, no introducido a mano','Informes sellados con hash criptográfico al cierre','Pruebas fotográficas integradas con GPS y marca de tiempo','El cliente verifica la autenticidad por sí mismo','Diseñado para operarios de campo (no oficina)'],
    comp: ['Excelente para control de tiempo y facturación por horas','Sin GPS verificado ni sellado','Sin pruebas fotográficas vinculadas a la intervención','Los datos no son verificables por terceros','Plan gratuito disponible (ideal para autónomos)'],
    useCasesTitle: 'Quién debería elegir GeoTapp en lugar de Clockify',
    useCases: ['Empresas de limpieza y facility management con clientes exigentes','Técnicos de mantenimiento e instaladores que deben defender las horas facturadas','Empresas sujetas a inspecciones laborales o auditorías del cliente','Quien ya ha tenido reclamaciones sobre intervenciones no reconocidas','Empresas con varios equipos repartidos en distintas obras'],
    cta: '¿Quieres ver la diferencia en la práctica?',
    ctaDesc: 'Te mostramos cómo una intervención se convierte en una prueba verificable, en 20 minutos, sin compromiso.',
    ctaBtn: '¡Empieza gratis!',
  },
  pt: {
    badge: 'Comparativo de apps', h1sub: 'registar as horas ou certificar as intervenções?',
    desc: 'A Clockify regista o tempo. A GeoTapp produz provas verificáveis do trabalho realizado. Para quem trabalha no terreno, a diferença muda tudo.',
    summary: 'Em resumo:',
    summaryText: 'A Clockify destaca-se para freelancers e equipas de escritório que registam horas para a faturação. Para operadores no terreno que têm de demonstrar o trabalho realizado a um cliente, a GeoTapp produz relatórios selados com GPS real, fotos e assinatura digital, a Clockify não tem estas funcionalidades.',
    footnote: '* Por lei (RGPD Art. 13), cada trabalhador deve assinar um aviso de privacidade antes de ser geolocalizado. A maioria do software GPS não trata disto: o risco legal fica com o empregador. A GeoTapp gera automaticamente o aviso personalizado, fá-lo assinar digitalmente pelo trabalhador e bloqueia o acesso GPS até estar assinado. Nenhum outro software no mercado o faz.',
    features: 'Comparação das funcionalidades-chave', feat: 'Funcionalidade',
    diff: 'Controlo de tempo vs certificação do trabalho',
    geo: ['GPS verificado automaticamente, não inserido à mão','Relatórios selados com hash criptográfico no fecho','Provas fotográficas integradas com GPS e data/hora','O cliente verifica a autenticidade sozinho','Concebido para operadores no terreno (não escritório)'],
    comp: ['Ótimo para controlo de tempo e faturação à hora','Sem GPS verificado ou selado','Sem provas fotográficas ligadas à intervenção','Os dados não são verificáveis por terceiros','Plano gratuito disponível (ideal para freelancers)'],
    useCasesTitle: 'Quem deve escolher a GeoTapp em vez da Clockify',
    useCases: ['Empresas de limpeza e facility management com clientes exigentes','Técnicos de manutenção e instaladores que têm de defender as horas faturadas','Empresas sujeitas a inspeções do trabalho ou auditorias do cliente','Quem já teve contestações sobre intervenções não reconhecidas','Empresas com várias equipas distribuídas por obras diferentes'],
    cta: 'Quer ver a diferença na prática?',
    ctaDesc: 'Mostramos-lhe como uma intervenção se torna uma prova verificável, em 20 minutos, sem compromisso.',
    ctaBtn: 'Comece grátis!',
  },
  nl: {
    badge: 'App-vergelijking', h1sub: 'uren registreren of opdrachten certificeren?',
    desc: 'Clockify registreert tijd. GeoTapp levert verifieerbaar bewijs van het uitgevoerde werk. Voor wie op locatie werkt, verandert het verschil alles.',
    summary: 'Kort gezegd:',
    summaryText: 'Clockify blinkt uit voor zzp\'ers en kantoorteams die uren registreren voor facturatie. Voor buitendienstmedewerkers die het uitgevoerde werk aan een opdrachtgever moeten bewijzen, levert GeoTapp verzegelde rapporten met echt GPS, foto\'s en digitale handtekening - Clockify mist deze functies.',
    footnote: '* Volgens de wet (AVG Art. 13) moet elke werknemer een privacyverklaring ondertekenen voordat hij wordt gelokaliseerd. De meeste GPS-software regelt dit niet: het juridische risico blijft bij de werkgever. GeoTapp genereert automatisch de gepersonaliseerde verklaring, laat die digitaal ondertekenen door de werknemer en blokkeert de GPS-toegang tot ze ondertekend is. Geen enkele andere software op de markt doet dit.',
    features: 'Vergelijking van kernfuncties', feat: 'Functie',
    diff: 'Tijdregistratie vs werkcertificering',
    geo: ['GPS automatisch geverifieerd, niet handmatig ingevoerd','Rapporten bij afsluiting verzegeld met cryptografische hash','Fotobewijs geïntegreerd met GPS en tijdstempel','De opdrachtgever verifieert de echtheid zelf','Ontworpen voor buitendienstmedewerkers (niet kantoor)'],
    comp: ['Uitstekend voor tijdregistratie en facturatie per uur','Geen geverifieerd of verzegeld GPS','Geen fotobewijs gekoppeld aan de opdracht','Gegevens niet door derden te verifiëren','Gratis plan beschikbaar (ideaal voor zzp\'ers)'],
    useCasesTitle: 'Wie GeoTapp zou moeten kiezen in plaats van Clockify',
    useCases: ['Schoonmaak- en facility-managementbedrijven met veeleisende klanten','Onderhouds- en installatieteams die gefactureerde uren moeten verdedigen','Bedrijven die te maken hebben met arbeidsinspecties of klantaudits','Wie al klachten heeft gehad over niet-erkende opdrachten','Bedrijven met meerdere ploegen op verschillende locaties'],
    cta: 'Het verschil in de praktijk zien?',
    ctaDesc: 'We laten je zien hoe een opdracht verifieerbaar bewijs wordt, in 20 minuten, vrijblijvend.',
    ctaBtn: 'Begin gratis!',
  },
  da: {
    badge: 'App-sammenligning', h1sub: 'registrere timer eller certificere opgaver?',
    desc: 'Clockify registrerer tid. GeoTapp leverer verificerbart bevis på det udførte arbejde. For dem, der arbejder i marken, ændrer forskellen alt.',
    summary: 'Kort sagt:',
    summaryText: 'Clockify er fremragende for freelancere og kontorteams, der registrerer timer til fakturering. For feltmedarbejdere, der skal bevise det udførte arbejde over for en kunde, leverer GeoTapp forseglede rapporter med ægte GPS, fotos og digital signatur, disse funktioner mangler i Clockify.',
    footnote: '* Ifølge loven (GDPR art. 13) skal hver medarbejder underskrive en privatlivserklæring, før vedkommende geolokaliseres. De fleste GPS-programmer håndterer ikke dette: den juridiske risiko forbliver hos arbejdsgiveren. GeoTapp genererer automatisk den personlige erklæring, får den underskrevet digitalt af medarbejderen og blokerer GPS-adgangen, indtil den er underskrevet. Ingen anden software på markedet gør dette.',
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion',
    diff: 'Tidsregistrering vs arbejdscertificering',
    geo: ['GPS verificeret automatisk, ikke indtastet manuelt','Rapporter forseglet med kryptografisk hash ved afslutning','Fotobeviser integreret med GPS og tidsstempel','Kunden verificerer ægtheden selv','Designet til feltmedarbejdere (ikke kontor)'],
    comp: ['Fremragende til tidsregistrering og timefakturering','Ingen verificeret eller forseglet GPS','Ingen fotobeviser knyttet til opgaven','Data kan ikke verificeres af tredjeparter','Gratis plan tilgængelig (ideel til freelancere)'],
    useCasesTitle: 'Hvem bør vælge GeoTapp frem for Clockify',
    useCases: ['Rengørings- og facility management-virksomheder med krævende kunder','Vedligeholdelses- og montageteams, der skal forsvare fakturerede timer','Virksomheder underlagt arbejdstilsyn eller kundeaudits','Dem, der allerede har haft tvister om ikke-anerkendte opgaver','Virksomheder med flere hold fordelt på forskellige pladser'],
    cta: 'Vil du se forskellen i praksis?',
    ctaDesc: 'Vi viser dig, hvordan en opgave bliver til verificerbart bevis, på 20 minutter, uforpligtende.',
    ctaBtn: 'Kom gratis i gang!',
  },
  sv: {
    badge: 'App-jämförelse', h1sub: 'registrera timmar eller certifiera uppdrag?',
    desc: 'Clockify registrerar tid. GeoTapp levererar verifierbara bevis på utfört arbete. För den som arbetar i fält ändrar skillnaden allt.',
    summary: 'Kort sagt:',
    summaryText: 'Clockify är utmärkt för frilansare och kontorsteam som registrerar timmar för fakturering. För fältpersonal som måste bevisa utfört arbete för en kund levererar GeoTapp förseglade rapporter med äkta GPS, foton och digital signatur, dessa funktioner saknas i Clockify.',
    footnote: '* Enligt lag (GDPR art. 13) måste varje anställd underteckna ett integritetsmeddelande innan han eller hon geolokaliseras. De flesta GPS-program hanterar inte detta: den juridiska risken stannar hos arbetsgivaren. GeoTapp genererar automatiskt det personliga meddelandet, låter den anställde signera det digitalt och blockerar GPS-åtkomsten tills det är signerat. Ingen annan programvara på marknaden gör detta.',
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion',
    diff: 'Tidsregistrering vs arbetscertifiering',
    geo: ['GPS verifierad automatiskt, inte manuellt inmatad','Rapporter förseglade med kryptografisk hash vid avslut','Fotobevis integrerade med GPS och tidsstämpel','Kunden verifierar äktheten själv','Utformad för fältpersonal (inte kontor)'],
    comp: ['Utmärkt för tidsregistrering och timfakturering','Ingen verifierad eller förseglad GPS','Inga fotobevis kopplade till uppdraget','Data kan inte verifieras av tredje part','Gratisplan tillgänglig (idealisk för frilansare)'],
    useCasesTitle: 'Vem bör välja GeoTapp framför Clockify',
    useCases: ['Städ- och facility management-företag med krävande kunder','Underhålls- och installationsteam som måste försvara fakturerade timmar','Företag som omfattas av arbetsinspektioner eller kundrevisioner','Den som redan har haft tvister om icke erkända uppdrag','Företag med flera arbetslag på olika platser'],
    cta: 'Vill du se skillnaden i praktiken?',
    ctaDesc: 'Vi visar dig hur ett uppdrag blir verifierbart bevis, på 20 minuter, utan förpliktelser.',
    ctaBtn: 'Kom igång gratis!',
  },
  nb: {
    badge: 'App-sammenligning', h1sub: 'registrere timer eller sertifisere oppdrag?',
    desc: 'Clockify registrerer tid. GeoTapp leverer verifiserbart bevis på utført arbeid. For dem som jobber i felt, endrer forskjellen alt.',
    summary: 'Kort sagt:',
    summaryText: 'Clockify er utmerket for frilansere og kontorteam som registrerer timer for fakturering. For feltarbeidere som må bevise utført arbeid overfor en oppdragsgiver, leverer GeoTapp forseglede rapporter med ekte GPS, bilder og digital signatur, disse funksjonene mangler i Clockify.',
    footnote: '* Ifølge loven (GDPR art. 13) må hver ansatt signere en personvernerklæring før vedkommende geolokaliseres. De fleste GPS-programmer håndterer ikke dette: den juridiske risikoen blir hos arbeidsgiveren. GeoTapp genererer automatisk den personlige erklæringen, lar den ansatte signere den digitalt og blokkerer GPS-tilgangen til den er signert. Ingen annen programvare på markedet gjør dette.',
    features: 'Sammenligning av nøkkelfunksjoner', feat: 'Funksjon',
    diff: 'Tidsregistrering vs arbeidssertifisering',
    geo: ['GPS verifisert automatisk, ikke lagt inn manuelt','Rapporter forseglet med kryptografisk hash ved avslutning','Fotobevis integrert med GPS og tidsstempel','Oppdragsgiveren verifiserer ektheten selv','Laget for feltarbeidere (ikke kontor)'],
    comp: ['Utmerket for tidsregistrering og timefakturering','Ingen verifisert eller forseglet GPS','Ingen fotobevis koblet til oppdraget','Dataene kan ikke verifiseres av tredjeparter','Gratis plan tilgjengelig (ideelt for frilansere)'],
    useCasesTitle: 'Hvem bør velge GeoTapp fremfor Clockify',
    useCases: ['Renholds- og facility management-bedrifter med krevende kunder','Vedlikeholds- og montasjeteam som må forsvare fakturerte timer','Bedrifter underlagt arbeidstilsyn eller kundeaudits','De som allerede har hatt tvister om ikke-anerkjente oppdrag','Bedrifter med flere lag fordelt på ulike byggeplasser'],
    cta: 'Vil du se forskjellen i praksis?',
    ctaDesc: 'Vi viser deg hvordan et oppdrag blir til verifiserbart bevis, på 20 minutter, uforpliktende.',
    ctaBtn: 'Kom i gang gratis!',
  },
  ru: {
    badge: 'Сравнение приложений', h1sub: 'учитывать часы или сертифицировать задания?',
    desc: 'Clockify фиксирует время. GeoTapp создаёт проверяемые доказательства выполненной работы. Для тех, кто работает в поле, эта разница меняет всё.',
    summary: 'Коротко:',
    summaryText: 'Clockify превосходно подходит фрилансерам и офисным командам, учитывающим часы для выставления счетов. Для выездных работников, которым нужно доказать заказчику выполненную работу, GeoTapp создаёт опечатанные отчёты с настоящим GPS, фото и цифровой подписью, этих функций у Clockify нет.',
    footnote: '* По закону (GDPR ст. 13) каждый сотрудник должен подписать уведомление о конфиденциальности перед геолокацией. Большинство GPS-программ это не обеспечивают: юридический риск остаётся на работодателе. GeoTapp автоматически создаёт персональное уведомление, даёт сотруднику подписать его цифровой подписью и блокирует доступ к GPS, пока оно не подписано. Ни одна другая программа на рынке этого не делает.',
    features: 'Сравнение ключевых функций', feat: 'Функция',
    diff: 'Учёт времени vs сертификация работы',
    geo: ['GPS проверяется автоматически, не вводится вручную','Отчёты опечатываются криптографическим хешем при закрытии','Фотодоказательства интегрированы с GPS и меткой времени','Заказчик проверяет подлинность самостоятельно','Создан для выездных работников (не для офиса)'],
    comp: ['Отлично подходит для учёта времени и почасовой оплаты','Нет проверенного или опечатанного GPS','Нет фотодоказательств, привязанных к заданию','Данные нельзя проверить третьим сторонам','Доступен бесплатный тариф (идеален для фрилансеров)'],
    useCasesTitle: 'Кому стоит выбрать GeoTapp вместо Clockify',
    useCases: ['Клининговые компании и facility management с требовательными клиентами','Ремонтники и монтажники, которым нужно отстаивать выставленные часы','Компании, подлежащие трудовым проверкам или аудитам заказчика','Те, у кого уже были споры о непризнанных заданиях','Компании с несколькими бригадами на разных объектах'],
    cta: 'Хотите увидеть разницу на практике?',
    ctaDesc: 'Покажем, как задание превращается в проверяемое доказательство, за 20 минут, без обязательств.',
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

export default async function GeoTappVsClockifyPage({ params }: { params: Promise<{ locale: string }> }) {
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
    competitorName: 'Clockify',
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
              GeoTapp vs Clockify:{' '}
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
                    <th className="text-center py-3 px-4 font-semibold text-sm text-text-secondary">Clockify</th>
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
                <h3 className="font-semibold text-text-secondary mb-3">Clockify</h3>
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
              source="confronto_vs_clockify"
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
