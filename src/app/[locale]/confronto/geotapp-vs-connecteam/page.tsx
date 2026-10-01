import type { Metadata } from 'next';
import ComparisonPageL from '@/components/ComparisonPageL';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-connecteam/';
const ARTICLE_DATE_PUBLISHED = '2025-09-01';
const ARTICLE_DATE_MODIFIED = '2026-08-01';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs Connecteam - Confronto 2026 | GeoTapp', description: 'GeoTapp vs Connecteam: quale scegliere per aziende con operatori sul campo? Confronto su prova del lavoro, posizione alla timbratura, report sigillati e verifica da parte del committente.' },
  en: { title: 'GeoTapp vs Connecteam - Comparison 2026 | GeoTapp', description: 'GeoTapp vs Connecteam: which one to choose for field service companies? Comparison on proof of work, position at clock-in, sealed reports and verification by the client.' },
  de: { title: 'GeoTapp vs Connecteam - Vergleich 2026 | GeoTapp', description: 'GeoTapp vs Connecteam: was passt zu Betrieben mit Mitarbeitern im Außendienst? Vergleich von Arbeitsnachweis, Position beim Stempeln, versiegelten Berichten und Überprüfung durch den Auftraggeber.' },
  fr: { title: 'GeoTapp vs Connecteam - Comparatif 2026 | GeoTapp', description: 'GeoTapp vs Connecteam : lequel pour des équipes de terrain ? Preuve du travail, position au pointage, rapports scellés et vérification par le client.' },
  es: { title: 'GeoTapp vs Connecteam - Comparativa 2026 | GeoTapp', description: 'GeoTapp vs Connecteam: ¿cuál elegir para empresas con operarios en campo? Comparativa de prueba del trabajo, posición al fichar, informes sellados y verificación por parte del cliente.' },
  pt: { title: 'GeoTapp vs Connecteam - Comparação 2026 | GeoTapp', description: 'GeoTapp vs Connecteam: qual escolher para equipas no terreno? Prova do trabalho, posição ao picar o ponto, relatórios selados e verificação pelo cliente.' },
  nl: { title: 'GeoTapp vs Connecteam - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Connecteam: welke kiest u voor medewerkers in het veld? Vergelijking op bewijs van het werk, locatie bij de registratie en verzegelde rapporten.' },
  da: { title: 'GeoTapp vs Connecteam - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Connecteam: hvilken skal du vælge til medarbejdere i marken? Sammenligning af dokumentation, position ved stempling og forseglede rapporter.' },
  sv: { title: 'GeoTapp vs Connecteam - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs Connecteam: vilket ska du välja för fältserviceföretag? Jämförelse av arbetsbevis, position vid instämpling, förseglade rapporter och kundens verifiering.' },
  nb: { title: 'GeoTapp vs Connecteam - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Connecteam: hvilken bør du velge for ansatte ute i felt? Sammenligning av dokumentasjon, posisjon ved stempling og forseglede rapporter.' },
  ru: { title: 'GeoTapp vs Connecteam - Сравнение 2026 | GeoTapp', description: 'GeoTapp vs Connecteam: что выбрать для компаний с выездными сотрудниками? Сравнение по доказательству работы, местоположению при отметке, запечатанным отчётам и проверке со стороны заказчика.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza principale tra GeoTapp e Connecteam?', a: 'Connecteam è uno strumento di comunicazione e gestione del personale. GeoTapp è un sistema di prova verificabile del lavoro: produce report sigillati con posizione, ora e foto di prova che il cliente può verificare in autonomia, senza accedere al tuo account.' },
    { q: 'Connecteam sigilla la posizione?', a: 'Connecteam registra la posizione GPS, ma i dati non finiscono in un report sigillato verificabile da terzi. GeoTapp produce report con hash crittografico: il committente può verificare che i dati non siano stati modificati dopo la chiusura dell\'intervento.' },
    { q: 'GeoTapp o Connecteam per imprese di pulizie e facility management?', a: 'GeoTapp è progettato specificamente per settori dove la prova del lavoro svolto è critica (pulizie, manutenzione, facility). Quando arriva una contestazione, GeoTapp ti dà un report sigillato che il committente controlla da solo: una funzione che Connecteam non offre.' },
    { q: 'Posso usare GeoTapp insieme a Connecteam?', a: 'Sì. GeoTapp si concentra sulla prova degli interventi; Connecteam può continuare a gestire comunicazione interna e pianificazione. I due strumenti risolvono problemi diversi.' },
  ],
  en: [
    { q: 'What is the main difference between GeoTapp and Connecteam?', a: 'Connecteam is a communication and workforce management tool. GeoTapp is a system for verifiable proof of work: it produces sealed reports with location, time and proof photos that the client can verify independently, without accessing your account.' },
    { q: 'Does Connecteam seal the position?', a: 'Connecteam records the GPS position, but the data does not end up in a sealed report that third parties can verify. GeoTapp produces reports with a cryptographic hash: the client can verify that the data has not been modified after the job was closed.' },
    { q: 'GeoTapp or Connecteam for cleaning and facility management companies?', a: 'GeoTapp is designed specifically for sectors where proof of work is critical (cleaning, maintenance, facility). When a dispute arrives, GeoTapp gives you a sealed report that the client checks alone: a feature Connecteam does not offer.' },
    { q: 'Can I use GeoTapp together with Connecteam?', a: 'Yes. GeoTapp focuses on proof of the jobs; Connecteam can keep handling internal communication and scheduling. The two tools solve different problems.' },
  ],
  de: [
    { q: 'Was ist der Hauptunterschied zwischen GeoTapp und Connecteam?', a: 'Connecteam ist ein Werkzeug für Kommunikation und Personalverwaltung. GeoTapp ist ein System für überprüfbare Arbeitsnachweise: Es erstellt versiegelte Berichte mit Position, Uhrzeit und Nachweisfotos, die der Kunde selbstständig überprüfen kann, ohne Zugriff auf Ihr Konto.' },
    { q: 'Versiegelt Connecteam die Position?', a: 'Connecteam erfasst die GPS-Position, die Daten landen aber nicht in einem versiegelten Bericht, den Dritte überprüfen können. GeoTapp erstellt Berichte mit kryptographischem Hash: Der Auftraggeber kann prüfen, dass die Daten nach Abschluss des Einsatzes nicht verändert wurden.' },
    { q: 'GeoTapp oder Connecteam für Reinigungsfirmen und Facility-Management?', a: 'GeoTapp ist gezielt für Branchen gebaut, in denen der Nachweis der geleisteten Arbeit entscheidend ist (Reinigung, Wartung, Facility). Wenn eine Beanstandung kommt, haben Sie mit GeoTapp einen versiegelten Bericht, den der Auftraggeber selbst prüft: eine Funktion, die Connecteam nicht bietet.' },
    { q: 'Kann ich GeoTapp zusammen mit Connecteam nutzen?', a: 'Ja. GeoTapp konzentriert sich auf den Einsatznachweis; Connecteam kann weiterhin die interne Kommunikation und Planung übernehmen. Die beiden Werkzeuge lösen verschiedene Probleme.' },
  ],
  fr: [
    { q: 'Quelle est la différence principale entre GeoTapp et Connecteam ?', a: 'Connecteam est un outil de communication et de gestion du personnel. GeoTapp est un système de preuve vérifiable du travail : il produit des rapports scellés avec position, heure et photos de preuve que le client peut vérifier en toute autonomie, sans accéder à votre compte.' },
    { q: 'Connecteam scelle-t-il la position ?', a: 'Connecteam enregistre la position GPS, mais les données n\'aboutissent pas dans un rapport scellé vérifiable par un tiers. GeoTapp produit des rapports avec une empreinte cryptographique : le client peut vérifier que les données n\'ont pas été modifiées après la clôture de l\'intervention.' },
    { q: 'GeoTapp ou Connecteam pour les entreprises de nettoyage et de facility management ?', a: 'GeoTapp est conçu pour les secteurs où la preuve du travail effectué est décisive (nettoyage, maintenance, facility management). Quand une contestation arrive, GeoTapp vous donne un rapport scellé que le client contrôle lui-même : une fonctionnalité que Connecteam n\'offre pas.' },
    { q: 'Puis-je utiliser GeoTapp avec Connecteam ?', a: 'Oui. GeoTapp se concentre sur la preuve des interventions ; Connecteam peut continuer à gérer la communication interne et la planification. Les deux outils résolvent des problèmes différents.' },
  ],
  es: [
    { q: '¿Cuál es la diferencia principal entre GeoTapp y Connecteam?', a: 'Connecteam es una herramienta de comunicación y gestión del personal. GeoTapp es un sistema de prueba verificable del trabajo: produce informes sellados con posición, hora y fotos de prueba que el cliente puede verificar por su cuenta, sin acceder a tu cuenta.' },
    { q: '¿Connecteam sella la posición?', a: 'Connecteam registra la posición GPS, pero los datos no acaban en un informe sellado verificable por terceros. GeoTapp produce informes con hash criptográfico: el cliente puede verificar que los datos no se han modificado tras el cierre de la intervención.' },
    { q: '¿GeoTapp o Connecteam para empresas de limpieza y facility management?', a: 'GeoTapp está pensado específicamente para sectores donde la prueba del trabajo realizado es crítica (limpieza, mantenimiento, facility). Cuando llega una reclamación, GeoTapp te da un informe sellado que el cliente comprueba por su cuenta: una función que Connecteam no ofrece.' },
    { q: '¿Puedo usar GeoTapp junto con Connecteam?', a: 'Sí. GeoTapp se centra en la prueba de las intervenciones; Connecteam puede seguir gestionando la comunicación interna y la planificación. Las dos herramientas resuelven problemas distintos.' },
  ],
  pt: [
    { q: 'Qual é a diferença principal entre a GeoTapp e a Connecteam?', a: 'A Connecteam é uma ferramenta de comunicação e gestão de pessoal. A GeoTapp é um sistema de prova verificável do trabalho: produz relatórios selados com posição, hora e fotos de prova que o cliente pode verificar por si, sem aceder à sua conta.' },
    { q: 'A Connecteam sela a posição?', a: 'A Connecteam regista a posição GPS, mas os dados não acabam num relatório selado verificável por terceiros. A GeoTapp produz relatórios com hash criptográfico: o cliente pode verificar que os dados não foram alterados depois do fecho da intervenção.' },
    { q: 'GeoTapp ou Connecteam para empresas de limpeza e facility management?', a: 'A GeoTapp foi pensada especificamente para setores em que a prova do trabalho realizado é crítica (limpeza, manutenção, facility). Quando chega uma contestação, a GeoTapp dá-lhe um relatório selado que o cliente controla por si: uma funcionalidade que a Connecteam não oferece.' },
    { q: 'Posso usar a GeoTapp em conjunto com a Connecteam?', a: 'Sim. A GeoTapp concentra-se na prova das intervenções; a Connecteam pode continuar a gerir a comunicação interna e o planeamento. As duas ferramentas resolvem problemas diferentes.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Connecteam?', a: 'Connecteam is een hulpmiddel voor communicatie en personeelsbeheer. GeoTapp is een systeem voor controleerbaar bewijs van het werk: het maakt verzegelde rapporten met locatie, tijd en bewijsfoto\'s die de klant zelfstandig kan controleren, zonder toegang tot uw account.' },
    { q: 'Verzegelt Connecteam de locatie?', a: 'Connecteam legt de gps-locatie vast, maar de gegevens komen niet in een verzegeld rapport dat door derden te controleren is. GeoTapp maakt rapporten met een cryptografische hash: de opdrachtgever kan controleren dat de gegevens na het afsluiten van de klus niet zijn gewijzigd.' },
    { q: 'GeoTapp of Connecteam voor schoonmaakbedrijven en facility management?', a: 'GeoTapp is specifiek ontworpen voor sectoren waar het bewijs van het uitgevoerde werk cruciaal is (schoonmaak, onderhoud, facility). Komt er een betwisting, dan geeft GeoTapp u een verzegeld rapport dat de opdrachtgever zelf controleert: een functie die Connecteam niet biedt.' },
    { q: 'Kan ik GeoTapp samen met Connecteam gebruiken?', a: 'Ja. GeoTapp richt zich op het bewijs van de klussen; Connecteam kan de interne communicatie en planning blijven beheren. De twee hulpmiddelen lossen verschillende problemen op.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Connecteam?', a: 'Connecteam er et værktøj til kommunikation og personalestyring. GeoTapp er et system til verificerbar dokumentation af arbejdet: det laver forseglede rapporter med position, tid og bevisfotos, som kunden selv kan verificere uden at få adgang til din konto.' },
    { q: 'Forsegler Connecteam positionen?', a: 'Connecteam registrerer GPS-positionen, men dataene ender ikke i en forseglet rapport, som tredjepart kan verificere. GeoTapp laver rapporter med kryptografisk hash: kunden kan verificere, at dataene ikke er ændret, efter at opgaven blev lukket.' },
    { q: 'GeoTapp eller Connecteam til rengøringsfirmaer og facility management?', a: 'GeoTapp er lavet specifikt til brancher, hvor dokumentation af det udførte arbejde er afgørende (rengøring, vedligeholdelse, facility). Når en indsigelse kommer, giver GeoTapp dig en forseglet rapport, som kunden selv kontrollerer: en funktion, Connecteam ikke tilbyder.' },
    { q: 'Kan jeg bruge GeoTapp sammen med Connecteam?', a: 'Ja. GeoTapp koncentrerer sig om dokumentation af opgaverne; Connecteam kan blive ved med at styre intern kommunikation og planlægning. De to værktøjer løser forskellige problemer.' },
  ],
  sv: [
    { q: 'Vad är den största skillnaden mellan GeoTapp och Connecteam?', a: 'Connecteam är ett verktyg för kommunikation och personalhantering. GeoTapp är ett system för verifierbara arbetsbevis: det tar fram förseglade rapporter med plats, tid och bevisfoton som kunden kan verifiera oberoende, utan att komma åt ditt konto.' },
    { q: 'Förseglar Connecteam positionen?', a: 'Connecteam registrerar GPS-positionen, men uppgifterna hamnar inte i en förseglad rapport som tredje part kan verifiera. GeoTapp tar fram rapporter med en kryptografisk hash: kunden kan verifiera att uppgifterna inte har ändrats sedan uppdraget avslutades.' },
    { q: 'GeoTapp eller Connecteam för städ- och fastighetsserviceföretag?', a: 'GeoTapp är särskilt gjort för branscher där arbetsbevis är avgörande (städning, underhåll, fastighetsservice). När en tvist uppstår ger GeoTapp dig en förseglad rapport som kunden själv kontrollerar: en funktion som Connecteam inte erbjuder.' },
    { q: 'Kan jag använda GeoTapp tillsammans med Connecteam?', a: 'Ja. GeoTapp fokuserar på bevisen för uppdragen; Connecteam kan fortsätta sköta intern kommunikation och schemaläggning. De två verktygen löser olika problem.' },
  ],
  nb: [
    { q: 'Hva er den viktigste forskjellen mellom GeoTapp og Connecteam?', a: 'Connecteam er et verktøy for kommunikasjon og personaladministrasjon. GeoTapp er et system for verifiserbar dokumentasjon av arbeidet: det lager forseglede rapporter med posisjon, tid og bevisbilder, som kunden selv kan verifisere uten å få tilgang til kontoen din.' },
    { q: 'Forsegler Connecteam posisjonen?', a: 'Connecteam registrerer GPS-posisjonen, men dataene havner ikke i en forseglet rapport som en tredjepart kan verifisere. GeoTapp lager rapporter med kryptografisk hash: kunden kan verifisere at dataene ikke er endret etter at oppdraget ble lukket.' },
    { q: 'GeoTapp eller Connecteam for renholdsbedrifter og facility management?', a: 'GeoTapp er laget spesielt for bransjer der dokumentasjon av utført arbeid er avgjørende (renhold, vedlikehold, facility). Når en innsigelse kommer, gir GeoTapp deg en forseglet rapport som kunden selv kontrollerer: en funksjon Connecteam ikke tilbyr.' },
    { q: 'Kan jeg bruke GeoTapp sammen med Connecteam?', a: 'Ja. GeoTapp konsentrerer seg om dokumentasjon av oppdragene; Connecteam kan fortsette å styre intern kommunikasjon og planlegging. De to verktøyene løser ulike problemer.' },
  ],
  ru: [
    { q: 'В чём главная разница между GeoTapp и Connecteam?', a: 'Connecteam — это инструмент для коммуникации и управления персоналом. GeoTapp — это система проверяемого доказательства работы: она создаёт запечатанные отчёты с местоположением, временем и фотодоказательствами, которые заказчик может проверить сам, без доступа к вашему аккаунту.' },
    { q: 'Запечатывает ли Connecteam местоположение?', a: 'Connecteam записывает GPS-позицию, но данные не попадают в запечатанный отчёт, проверяемый третьими сторонами. GeoTapp создаёт отчёты с криптографическим хешем: заказчик может убедиться, что данные не изменялись после закрытия выезда.' },
    { q: 'GeoTapp или Connecteam для клининговых и facility-management компаний?', a: 'GeoTapp создан специально для отраслей, где доказательство выполненной работы критично (клининг, обслуживание, facility). Когда приходит претензия, GeoTapp даёт вам запечатанный отчёт, который заказчик проверяет сам: функция, которой нет в Connecteam.' },
    { q: 'Можно ли использовать GeoTapp вместе с Connecteam?', a: 'Да. GeoTapp сосредоточен на опечатывании выездов и создании проверяемых доказательств; Connecteam может и дальше заниматься внутренней коммуникацией и планированием. Эти два инструмента решают разные задачи.' },
  ],
};

// Etichette della tabella di confronto, per locale.
const ROWS_LABELS: Record<string, string[]> = {
  it: ['Posizione alla timbratura, sigillata nel report','Report con hash crittografico, ogni modifica rilevabile','Verifica indipendente da parte del cliente','Prove fotografiche collegate a GPS e timestamp','Registrazione presenze base','App mobile Android/iOS','Dashboard gestione team','Messaggistica interna proprietaria','Posizione rilevata solo quando si timbra, mai in continuo','Informativa GPS firmata nell\'app prima di timbrare*'],
  en: ['Position at clock-in, sealed in the report','Report with cryptographic hash, every change detectable','Independent verification by the client','Photo evidence linked to GPS and timestamp','Basic attendance recording','Mobile app Android/iOS','Team management dashboard','Built-in messaging','Position recorded only at clock-in, never continuously','GPS notice signed in the app before clocking in*'],
  de: ['Position beim Stempeln, im Bericht versiegelt','Bericht mit kryptographischem Hash, jede Änderung erkennbar','Unabhängige Überprüfung durch den Kunden','Fotonachweise mit GPS und Zeitstempel verknüpft','Einfache Anwesenheitserfassung','Mobile App Android/iOS','Dashboard zur Teamverwaltung','Eigene interne Nachrichten','Position nur beim Stempeln erfasst, nie durchgehend','GPS-Information vor dem Stempeln in der App unterschrieben*'],
  fr: ['Position au pointage, scellée dans le rapport','Rapport avec empreinte cryptographique, toute modification détectable','Vérification indépendante par le client','Preuves photo liées au GPS et à l\'horodatage','Enregistrement des présences de base','App mobile Android/iOS','Tableau de bord de gestion d\'équipe','Messagerie interne propriétaire','Position relevée uniquement au pointage, jamais en continu','Information GPS signée dans l\'app avant de pointer*'],
  es: ['Posición al fichar, sellada en el informe','Informe con hash criptográfico, cualquier modificación es detectable','Verificación independiente por parte del cliente','Pruebas fotográficas vinculadas a GPS y marca de tiempo','Registro de asistencia básico','App móvil Android/iOS','Panel de gestión del equipo','Mensajería interna propia','Posición registrada solo al fichar, nunca de forma continua','Información sobre el GPS firmada en la app antes de fichar*'],
  pt: ['Posição ao picar o ponto, selada no relatório','Relatório com hash criptográfico, qualquer alteração é detetável','Verificação independente por parte do cliente','Provas fotográficas ligadas ao GPS e à data/hora','Registo de presenças básico','App móvel Android/iOS','Painel de gestão da equipa','Mensagens internas próprias','Posição registada apenas ao picar o ponto, nunca de forma contínua','Informação sobre o GPS assinada na app antes de picar o ponto*'],
  nl: ['Locatie bij de registratie, verzegeld in het rapport','Rapport met cryptografische hash, elke wijziging zichtbaar','Onafhankelijke controle door de klant','Fotobewijzen gekoppeld aan gps en tijdstempel','Eenvoudige registratie van aanwezigheid','Mobiele app voor Android/iOS','Dashboard voor teambeheer','Eigen interne berichten','Locatie alleen bij het registreren, nooit doorlopend','GPS-verklaring ondertekend in de app vóór het registreren*'],
  da: ['Position ved stempling, forseglet i rapporten','Rapport med kryptografisk hash, enhver ændring kan opdages','Uafhængig verificering af kunden','Bevisfotos knyttet til GPS og tidsstempel','Basal fremmøderegistrering','Mobilapp Android/iOS','Dashboard til teamstyring','Egen intern beskedfunktion','Position registreres kun ved stempling, aldrig løbende','GPS-information underskrevet i appen, før man stempler*'],
  sv: ['Position vid instämpling, förseglad i rapporten','Rapport med kryptografisk hash, varje ändring går att upptäcka','Oberoende verifiering av kunden','Bevisfoton kopplade till GPS och tidsstämpel','Enkel närvaroregistrering','Mobilapp för Android/iOS','Instrumentpanel för teamhantering','Inbyggd meddelandefunktion','Positionen registreras bara vid instämpling, aldrig löpande','GPS-information signerad i appen innan man stämplar in*'],
  nb: ['Posisjon ved stempling, forseglet i rapporten','Rapport med kryptografisk hash, enhver endring kan oppdages','Uavhengig verifisering fra kunden','Bevisbilder knyttet til GPS og tidsstempel','Enkel oppmøteregistrering','Mobilapp Android/iOS','Dashbord for teamstyring','Egen intern meldingsfunksjon','Posisjon registreres bare ved stempling, aldri løpende','GPS-informasjon signert i appen før man stempler*'],
  ru: ['Местоположение при отметке, запечатанное в отчёте','Отчёты с криптографическим хешем, любое изменение заметно','Независимая проверка заказчиком','Фотодоказательства, привязанные к GPS и метке времени','Базовый учёт присутствия','Мобильное приложение Android/iOS','Панель управления командой','Встроенный обмен сообщениями','Местоположение фиксируется только при отметке, никогда не отслеживается непрерывно','Уведомление о GPS, подписанное в приложении перед отметкой*'],
};

const ROWS_GEO =  [true,true,true,true,true,true,true,true,true,true];
const ROWS_COMP = [false,false,false,false,true,true,true,true,false,false];

type Copy = {
  badge: string; h1sub: string; desc: string; summary: string; summaryText: string;
  features: string; feat: string; diff: string;
  geo: string[]; comp: string[]; footnote: string;
  whenTitle: string; when: string[];
  cta: string; ctaDesc: string; ctaBtn: string;
};

const T: Record<string, Copy> = {
  it: {
    badge: 'Confronto App', h1sub: 'quale scegliere per il tuo settore?',
    desc: 'Connecteam gestisce la comunicazione del team. GeoTapp sigilla il lavoro svolto: chiude ogni intervento in un report con un\'impronta digitale che cambia se qualcosa viene toccato dopo. Sono strumenti diversi, ecco perché.',
    summary: 'In sintesi:',
    summaryText: 'Se devi mostrare al cliente le prove del lavoro, con posizione e ora di ogni timbratura, foto di prova e un report in cui ogni modifica successiva è rilevabile, GeoTapp è lo strumento giusto. Connecteam è pensato per comunicazione e turni, non per produrre prove verificabili.',
    features: 'Confronto funzionalità chiave', feat: 'Funzionalità', diff: 'La differenza che conta: prove verificabili o comunicazione',
    geo: ['Ogni intervento genera un report sigillato con posizione e foto','Il committente verifica da solo che il report non sia stato modificato','Il report è sigillato crittograficamente: ogni modifica successiva è rilevabile','Pensato per avere una prova da mostrare quando qualcuno contesta','Posizione rilevata solo quando si timbra, mai in continuo'],
    comp: ['Ottimo per comunicazione interna e messaggistica del team','Registra le presenze, senza sigillo crittografico','I dati non sono verificabili da terzi in modo indipendente','Orientato ai turni e alla gestione del personale','Nessun report sigillato da mostrare al committente'],
    footnote: '* Per legge (art. 13 GDPR e, in Italia, art. 4 dello Statuto dei Lavoratori) ogni dipendente va informato prima di essere geolocalizzato. Se il software lascia questo passaggio al titolare, il rischio resta a lui. GeoTapp prepara l\'informativa personalizzata, la fa firmare per presa visione nell\'app e non lascia timbrare finché non è firmata.',
    whenTitle: 'Quando scegliere GeoTapp',
    when: ['Gestisci un\'impresa di pulizie, facility management o multiservizi','I tuoi clienti contestano l\'esecuzione degli interventi','Hai bisogno di prove fotografiche geolocalizzate per ogni intervento','Sei soggetto a ispezioni del lavoro o audit contrattuali','Vuoi report che il committente possa verificare in autonomia'],
    cta: 'Vuoi vedere GeoTapp in azione?',
    ctaDesc: 'Provalo su un intervento vero: 14 giorni gratis, senza carta di credito.',
    ctaBtn: 'Inizia la prova gratuita',
  },
  en: {
    badge: 'App Comparison', h1sub: 'which one for your sector?',
    desc: 'Connecteam manages team communication. GeoTapp seals the work done with verifiable proof. They are different tools, and here is why.',
    summary: 'Bottom line:',
    summaryText: 'If you need to show the client proof of the work, with the position and time of every clock-in, proof photos and a report in which every later change is detectable, GeoTapp is the right tool. Connecteam is built for communication and shifts, not for producing verifiable proof.',
    features: 'Key features comparison', feat: 'Feature', diff: 'The difference that matters: verifiable proof or communication',
    geo: ['Every job generates a sealed report with position and photos','The client checks alone that the report has not been modified','The report is cryptographically sealed: every later change is detectable','Built to give you proof to show when someone disputes the work','Position recorded only at clock-in, never continuously'],
    comp: ['Great for internal communication and team messaging','Records attendance, without a cryptographic seal','Data cannot be independently verified by third parties','Geared to shifts and staff management','No sealed report to show the client'],
    footnote: '* By law (Art. 13 GDPR and, in Italy, Art. 4 of the Workers\' Statute), every employee must be informed before being geolocated. If the software leaves this step to the employer, the risk stays with them. GeoTapp prepares the personalised notice, has it signed for acknowledgement in the app and does not let staff clock in until it is signed.',
    whenTitle: 'When to choose GeoTapp',
    when: ['You run a cleaning, facility management or multi-service company','Your clients dispute how the jobs were carried out','You need geolocated proof photos for every job','You are subject to labour inspections or contract audits','You want reports that the client can verify independently'],
    cta: 'Want to see GeoTapp in action?',
    ctaDesc: 'Try it on a real job: 14 days free, no credit card.',
    ctaBtn: 'Start the free trial',
  },
  de: {
    badge: 'App-Vergleich', h1sub: 'was passt zu Ihrer Branche?',
    desc: 'Connecteam steuert die Kommunikation im Team. GeoTapp versiegelt die geleistete Arbeit mit überprüfbaren Nachweisen. Es sind verschiedene Werkzeuge, und das ist der Grund.',
    summary: 'Kurz gesagt:',
    summaryText: 'Wenn Sie dem Kunden Arbeitsnachweise vorlegen müssen, mit Position und Uhrzeit jedes Stempelns, Nachweisfotos und einem Bericht, in dem jede spätere Änderung erkennbar ist, ist GeoTapp das richtige Werkzeug. Connecteam ist für Kommunikation und Schichtplanung gedacht, nicht für überprüfbare Nachweise.',
    features: 'Vergleich der wichtigsten Funktionen', feat: 'Funktion', diff: 'Der Unterschied, auf den es ankommt: überprüfbare Nachweise oder Kommunikation',
    geo: ['Jeder Einsatz erzeugt einen versiegelten Bericht mit Position und Fotos','Der Auftraggeber prüft selbst, dass der Bericht nicht verändert wurde','Der Bericht ist kryptographisch versiegelt: Jede spätere Änderung ist erkennbar','Gedacht für einen Nachweis, den Sie bei einer Beanstandung vorlegen können','Position nur beim Stempeln erfasst, nie durchgehend'],
    comp: ['Sehr gut für interne Kommunikation und Team-Nachrichten','Erfasst Anwesenheit, ohne kryptographisches Siegel','Die Daten sind für Dritte nicht unabhängig überprüfbar','Ausgerichtet auf Schichten und Personalverwaltung','Kein versiegelter Bericht, den Sie dem Auftraggeber vorlegen können'],
    footnote: '* Nach geltendem Recht (Art. 13 DSGVO und in Italien Art. 4 des Arbeitnehmerstatuts) muss jeder Mitarbeiter informiert werden, bevor er geortet wird. Überlässt die Software diesen Schritt dem Arbeitgeber, bleibt das Risiko bei ihm. GeoTapp erstellt die personalisierte Information, lässt sie in der App zur Kenntnisnahme unterschreiben und lässt erst danach das Stempeln zu.',
    whenTitle: 'Wann GeoTapp die richtige Wahl ist',
    when: ['Sie führen eine Reinigungsfirma, ein Facility-Management oder einen Multiservice-Betrieb','Ihre Kunden beanstanden die Ausführung der Einsätze','Sie brauchen geortete Nachweisfotos für jeden Einsatz','Sie unterliegen Arbeitsinspektionen oder Vertragsaudits','Sie wollen Berichte, die der Auftraggeber selbstständig überprüfen kann'],
    cta: 'Möchten Sie GeoTapp in Aktion sehen?',
    ctaDesc: 'Testen Sie es an einem echten Einsatz: 14 Tage kostenlos, keine Kreditkarte.',
    ctaBtn: 'Kostenlos testen',
  },
  fr: {
    badge: 'Comparatif d\'applis',
    h1sub: 'lequel choisir pour votre secteur ?',
    desc: 'Connecteam gère la communication de l\'équipe. GeoTapp scelle le travail effectué avec des preuves vérifiables. Ce sont deux outils différents, voici pourquoi.',
    summary: 'En résumé :',
    summaryText: 'Si vous devez montrer au client les preuves du travail, avec la position et l\'heure de chaque pointage, des photos de preuve et un rapport où toute modification ultérieure est détectable, GeoTapp est le bon outil. Connecteam est pensé pour la communication et les plannings, pas pour produire des preuves vérifiables.',
    features: 'Comparaison des fonctionnalités clés',
    feat: 'Fonctionnalité',
    diff: 'La différence qui compte : preuves vérifiables ou communication',
    geo: ['Chaque intervention génère un rapport scellé avec position et photos','Le client vérifie lui-même que le rapport n\'a pas été modifié','Le rapport est scellé cryptographiquement : toute modification ultérieure est détectable','Pensé pour avoir une preuve à montrer quand quelqu\'un conteste','Position relevée uniquement au pointage, jamais en continu'],
    comp: ['Excellent pour la communication interne et la messagerie d\'équipe','Enregistre les présences, sans sceau cryptographique','Les données ne sont pas vérifiables de façon indépendante par un tiers','Orienté plannings et gestion du personnel','Aucun rapport scellé à montrer au client'],
    footnote: '* Selon la loi (art. 13 du RGPD et, en Italie, art. 4 du Statut des travailleurs), chaque salarié doit être informé avant d\'être géolocalisé. Si le logiciel laisse cette étape à l\'employeur, le risque lui reste. GeoTapp prépare l\'information personnalisée, la fait signer pour prise de connaissance dans l\'app et ne laisse pas pointer tant qu\'elle n\'est pas signée.',
    whenTitle: 'Quand choisir GeoTapp',
    when: ['Vous dirigez une entreprise de nettoyage, de facility management ou de multiservices','Vos clients contestent l\'exécution des interventions','Vous avez besoin de preuves photo géolocalisées pour chaque intervention','Vous êtes soumis à des inspections du travail ou à des audits contractuels','Vous voulez des rapports que le client peut vérifier en toute autonomie'],
    cta: 'Envie de voir GeoTapp en action ?',
    ctaDesc: 'Essayez-le sur une intervention réelle : 14 jours gratuits, sans carte bancaire.',
    ctaBtn: 'Commencer l\'essai gratuit',
  },
  es: {
    badge: 'Comparativa de apps', h1sub: '¿cuál elegir para tu sector?',
    desc: 'Connecteam gestiona la comunicación del equipo. GeoTapp sella el trabajo realizado con pruebas verificables. Son herramientas distintas, y aquí está el porqué.',
    summary: 'En resumen:',
    summaryText: 'Si tienes que mostrar al cliente las pruebas del trabajo, con la posición y la hora de cada fichaje, fotos de prueba y un informe en el que cualquier modificación posterior es detectable, GeoTapp es la herramienta adecuada. Connecteam está pensado para la comunicación y los turnos, no para producir pruebas verificables.',
    features: 'Comparación de funciones clave', feat: 'Función', diff: 'La diferencia que cuenta: pruebas verificables o comunicación',
    geo: ['Cada intervención genera un informe sellado con posición y fotos','El cliente verifica por sí mismo que el informe no se ha modificado','El informe está sellado criptográficamente: cualquier modificación posterior es detectable','Pensado para tener una prueba que mostrar cuando alguien discute','Posición registrada solo al fichar, nunca de forma continua'],
    comp: ['Excelente para la comunicación interna y la mensajería del equipo','Registra la asistencia, sin sello criptográfico','Los datos no son verificables por terceros de forma independiente','Orientado a los turnos y a la gestión del personal','Ningún informe sellado que mostrar al cliente'],
    footnote: '* Por ley (art. 13 del RGPD y, en Italia, art. 4 del Estatuto de los Trabajadores), cada empleado debe ser informado antes de ser geolocalizado. Si el software deja este paso en manos del empleador, el riesgo sigue siendo suyo. GeoTapp prepara la información personalizada, la hace firmar en la app como constancia de lectura y no deja fichar hasta que esté firmada.',
    whenTitle: 'Cuándo elegir GeoTapp',
    when: ['Diriges una empresa de limpieza, de facility management o de multiservicios','Tus clientes discuten la ejecución de las intervenciones','Necesitas pruebas fotográficas geolocalizadas de cada intervención','Estás sujeto a inspecciones de trabajo o a auditorías contractuales','Quieres informes que el cliente pueda verificar por su cuenta'],
    cta: '¿Quieres ver GeoTapp en acción?',
    ctaDesc: 'Pruébalo en una intervención real: 14 días gratis, sin tarjeta de crédito.',
    ctaBtn: 'Empezar prueba gratuita',
  },
  pt: {
    badge: 'Comparação de apps', h1sub: 'qual escolher para o seu setor?',
    desc: 'A Connecteam gere a comunicação da equipa. A GeoTapp sela o trabalho realizado com provas verificáveis. São ferramentas diferentes, e aqui está o porquê.',
    summary: 'Em resumo:',
    summaryText: 'Se precisa de mostrar ao cliente as provas do trabalho, com a posição e a hora de cada picagem, fotos de prova e um relatório em que qualquer alteração posterior é detetável, a GeoTapp é a ferramenta certa. A Connecteam foi pensada para a comunicação e os turnos, não para produzir provas verificáveis.',
    features: 'Comparação das funcionalidades principais', feat: 'Funcionalidade', diff: 'A diferença que conta: provas verificáveis ou comunicação',
    geo: ['Cada intervenção gera um relatório selado com posição e fotos','O cliente verifica por si que o relatório não foi alterado','O relatório é selado criptograficamente: qualquer alteração posterior é detetável','Pensada para ter uma prova para mostrar quando alguém contesta','Posição registada apenas ao picar o ponto, nunca de forma contínua'],
    comp: ['Excelente para a comunicação interna e as mensagens da equipa','Regista a assiduidade, sem selo criptográfico','Os dados não são verificáveis por terceiros de forma independente','Orientada para os turnos e a gestão de pessoal','Nenhum relatório selado para mostrar ao cliente'],
    footnote: '* Por lei (art. 13.º do RGPD), cada trabalhador deve ser informado antes de ser geolocalizado. Se o software deixa este passo ao empregador, o risco continua a ser dele. A GeoTapp prepara a informação personalizada, faz com que seja assinada na app como confirmação de leitura e não deixa picar o ponto enquanto não estiver assinada.',
    whenTitle: 'Quando escolher a GeoTapp',
    when: ['Gere uma empresa de limpeza, de facility management ou de multisserviços','Os seus clientes contestam a execução das intervenções','Precisa de provas fotográficas geolocalizadas de cada intervenção','Está sujeito a inspeções do trabalho ou a auditorias contratuais','Quer relatórios que o cliente possa verificar por si'],
    cta: 'Quer ver a GeoTapp em ação?',
    ctaDesc: 'Experimente numa intervenção real: 14 dias grátis, sem cartão de crédito.',
    ctaBtn: 'Começar teste gratuito',
  },
  nl: {
    badge: 'App-vergelijking',
    h1sub: 'welke kiest u voor uw sector?',
    desc: 'Connecteam beheert de communicatie van het team. GeoTapp verzegelt het uitgevoerde werk met controleerbaar bewijs. Het zijn verschillende hulpmiddelen, en dit is waarom.',
    summary: 'Kort gezegd:',
    summaryText: 'Moet u de klant het bewijs van het werk tonen, met locatie en tijd van elke registratie, bewijsfoto\'s en een rapport waarin elke latere wijziging zichtbaar is, dan is GeoTapp het juiste hulpmiddel. Connecteam is bedoeld voor communicatie en diensten, niet voor het maken van controleerbaar bewijs.',
    features: 'Vergelijking van de belangrijkste functies',
    feat: 'Functie',
    diff: 'Het verschil dat telt: controleerbaar bewijs of communicatie',
    geo: ['Elke klus levert een verzegeld rapport op met locatie en foto\'s','De opdrachtgever controleert zelf dat het rapport niet is gewijzigd','Het rapport is cryptografisch verzegeld: elke latere wijziging is zichtbaar','Bedoeld om een bewijs te hebben om te tonen wanneer iemand iets betwist','Locatie alleen bij het registreren, nooit doorlopend'],
    comp: ['Uitstekend voor interne communicatie en berichten van het team','Legt aanwezigheid vast, zonder cryptografische verzegeling','De gegevens zijn niet onafhankelijk door derden te controleren','Gericht op diensten en personeelsbeheer','Geen verzegeld rapport om aan de opdrachtgever te tonen'],
    footnote: '* Volgens de wet (art. 13 AVG en, in Italië, art. 4 van het arbeidsstatuut) moet elke werknemer worden geïnformeerd voordat hij wordt gelokaliseerd. Laat de software deze stap aan de verantwoordelijke over, dan blijft het risico bij hem. GeoTapp maakt de persoonlijke privacyverklaring klaar, laat die in de app voor kennisgeving ondertekenen en laat niet registreren totdat ze is ondertekend.',
    whenTitle: 'Wanneer u GeoTapp kiest',
    when: ['U beheert een schoonmaakbedrijf, facility management of multiservice','Uw klanten betwisten de uitvoering van de klussen','U hebt fotobewijzen met locatie nodig voor elke klus','U valt onder inspecties van de arbeidsinspectie of contractuele audits','U wilt rapporten die de opdrachtgever zelfstandig kan controleren'],
    cta: 'Wilt u GeoTapp in actie zien?',
    ctaDesc: 'Probeer het op een echte klus: 14 dagen gratis, zonder creditcard.',
    ctaBtn: 'Start de gratis proefperiode',
  },
  da: {
    badge: 'App-sammenligning', h1sub: 'hvilken skal du vælge til din branche?',
    desc: 'Connecteam styrer teamets kommunikation. GeoTapp forsegler det udførte arbejde med verificerbar dokumentation. Det er forskellige værktøjer, og her er hvorfor.',
    summary: 'Kort sagt:',
    summaryText: 'Hvis du skal vise kunden dokumentationen for arbejdet, med position og tid for hver stempling, bevisfotos og en rapport, hvor enhver senere ændring kan opdages, er GeoTapp det rigtige værktøj. Connecteam er lavet til kommunikation og vagtplaner, ikke til at producere verificerbar dokumentation.',
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion', diff: 'Forskellen, der tæller: verificerbar dokumentation eller kommunikation',
    geo: ['Hver opgave giver en forseglet rapport med position og fotos','Kunden kontrollerer selv, at rapporten ikke er ændret','Rapporten er kryptografisk forseglet: enhver senere ændring kan opdages','Lavet til at have dokumentation at vise, når nogen bestrider arbejdet','Position registreres kun ved stempling, aldrig løbende'],
    comp: ['Fremragende til intern kommunikation og teamets beskeder','Registrerer fremmøde, uden kryptografisk segl','Dataene kan ikke verificeres uafhængigt af tredjepart','Orienteret mod vagtplaner og personalestyring','Ingen forseglet rapport at vise kunden'],
    footnote: '* Ifølge loven (GDPR art. 13 og, i Italien, art. 4 i arbejdstagerloven, Statuto dei Lavoratori) skal hver medarbejder informeres, før vedkommende geolokaliseres. Overlader softwaren dette trin til arbejdsgiveren, er risikoen stadig arbejdsgiverens. GeoTapp forbereder den personlige information, får den underskrevet i appen som bekræftelse på, at den er læst, og lader ikke medarbejderen stemple, før den er underskrevet.',
    whenTitle: 'Hvornår skal du vælge GeoTapp',
    when: ['Du driver et rengøringsfirma, facility management eller multiservice','Dine kunder bestrider, at opgaverne er udført','Du har brug for geolokaliserede bevisfotos for hver opgave','Du bliver kontrolleret af arbejdstilsynet eller skal igennem kontraktlige audits','Du vil have rapporter, som kunden selv kan verificere'],
    cta: 'Vil du se GeoTapp i aktion?',
    ctaDesc: 'Prøv det på en rigtig opgave: 14 dage gratis, uden kreditkort.',
    ctaBtn: 'Start gratis prøveperiode',
  },
  sv: {
    badge: 'App-jämförelse', h1sub: 'vilket passar din bransch?',
    desc: 'Connecteam hanterar teamkommunikation. GeoTapp förseglar utfört arbete med verifierbara bevis. Det är olika verktyg, och här är varför.',
    summary: 'Kort sagt:',
    summaryText: 'Om du behöver visa kunden bevis på arbetet, med position och tid för varje instämpling, bevisfoton och en rapport där varje senare ändring går att upptäcka, är GeoTapp rätt verktyg. Connecteam är byggt för kommunikation och skift, inte för att ta fram verifierbara bevis.',
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion', diff: 'Skillnaden som räknas: verifierbara bevis eller kommunikation',
    geo: ['Varje uppdrag ger en förseglad rapport med position och foton','Kunden kontrollerar själv att rapporten inte har ändrats','Rapporten är kryptografiskt förseglad: varje senare ändring går att upptäcka','Byggt för att ge dig bevis att visa upp när någon ifrågasätter arbetet','Positionen registreras bara vid instämpling, aldrig löpande'],
    comp: ['Utmärkt för intern kommunikation och teammeddelanden','Registrerar närvaro, utan kryptografiskt sigill','Uppgifterna kan inte verifieras oberoende av tredje part','Inriktat på skift och personalhantering','Ingen förseglad rapport att visa kunden'],
    whenTitle: 'När du ska välja GeoTapp',
    when: ['Du driver ett städ-, fastighetsservice- eller multiserviceföretag','Dina kunder ifrågasätter hur uppdragen utförts','Du behöver geolokaliserade bevisfoton för varje uppdrag','Du omfattas av arbetsinspektioner eller avtalsrevisioner','Du vill ha rapporter som kunden kan verifiera oberoende'],
    cta: 'Vill du se GeoTapp i praktiken?',
    ctaDesc: 'Prova på ett riktigt uppdrag: 14 dagar gratis, utan kreditkort.',
    ctaBtn: 'Starta den kostnadsfria provperioden',
    footnote: '* Enligt lag (artikel 13 i GDPR) måste varje anställd informeras innan hen geolokaliseras. Om programvaran överlåter det steget åt arbetsgivaren ligger risken kvar hos arbetsgivaren. GeoTapp tar fram den personliga informationen, låter den anställde signera den som läst i appen och släpper inte till instämpling förrän den är signerad.',
  },
  nb: {
    badge: 'App-sammenligning', h1sub: 'hvilken bør du velge for din bransje?',
    desc: 'Connecteam styrer kommunikasjonen i teamet. GeoTapp forsegler arbeidet som er utført, med verifiserbar dokumentasjon. Det er ulike verktøy, og her er hvorfor.',
    summary: 'Kort sagt:',
    summaryText: 'Hvis du må vise kunden dokumentasjonen av arbeidet, med posisjon og tid for hver stempling, bevisbilder og en rapport der enhver senere endring kan oppdages, er GeoTapp det riktige verktøyet. Connecteam er laget for kommunikasjon og vaktplaner, ikke for å lage verifiserbar dokumentasjon.',
    features: 'Sammenligning av nøkkelfunksjoner', feat: 'Funksjon', diff: 'Forskjellen som teller: verifiserbar dokumentasjon eller kommunikasjon',
    geo: ['Hvert oppdrag gir en forseglet rapport med posisjon og bilder','Kunden kontrollerer selv at rapporten ikke er endret','Rapporten er kryptografisk forseglet: enhver senere endring kan oppdages','Laget for å ha dokumentasjon å vise fram når noen bestrider arbeidet','Posisjon registreres bare ved stempling, aldri løpende'],
    comp: ['Utmerket til intern kommunikasjon og meldinger i teamet','Registrerer oppmøte, uten kryptografisk segl','Dataene kan ikke verifiseres uavhengig av en tredjepart','Orientert mot vaktplaner og personaladministrasjon','Ingen forseglet rapport å vise kunden'],
    footnote: '* Ifølge loven (GDPR art. 13 og, i Italia, art. 4 i arbeidstakerloven, Statuto dei Lavoratori) må hver ansatt informeres før vedkommende geolokaliseres. Overlater programvaren dette trinnet til arbeidsgiveren, blir risikoen hos arbeidsgiveren. GeoTapp forbereder den personlige informasjonen, får den signert i appen som bekreftelse på at den er lest, og lar ikke den ansatte stemple før den er signert.',
    whenTitle: 'Når bør du velge GeoTapp',
    when: ['Du driver en renholdsbedrift, facility management eller multiservice','Kundene dine bestrider at oppdragene er utført','Du trenger geolokaliserte bevisbilder for hvert oppdrag','Du blir kontrollert av en tilsynsmyndighet eller må gjennom kontraktsmessige revisjoner','Du vil ha rapporter som kunden selv kan verifisere'],
    cta: 'Vil du se GeoTapp i aksjon?',
    ctaDesc: 'Prøv det på et ekte oppdrag: 14 dager gratis, uten kredittkort.',
    ctaBtn: 'Start gratis prøveperiode',
  },
  ru: {
    badge: 'Сравнение приложений', h1sub: 'что выбрать для вашей отрасли?',
    desc: 'Connecteam управляет коммуникацией команды. GeoTapp запечатывает выполненную работу проверяемыми доказательствами. Это разные инструменты, вот почему.',
    summary: 'Коротко:',
    summaryText: 'Если вам нужно показать клиенту доказательства работы — с местоположением и временем каждой отметки, фото-подтверждениями и отчётом, в котором любое последующее изменение заметно, — GeoTapp подходящий инструмент. Connecteam создан для коммуникации и смен, а не для создания проверяемых доказательств.',
    features: 'Сравнение ключевых функций', feat: 'Функция', diff: 'Разница, которая важна: проверяемые доказательства или коммуникация',
    geo: ['Каждый выезд создаёт запечатанный отчёт с местоположением и фото','Заказчик сам проверяет, что отчёт не был изменён','Отчёт запечатан криптографически: любое последующее изменение заметно','Создан, чтобы дать доказательство, когда кто-то оспаривает работу','Местоположение фиксируется только при отметке, никогда не отслеживается непрерывно'],
    comp: ['Отлично для внутренней коммуникации и сообщений команды','Записывает присутствие, но без криптографической печати','Данные нельзя независимо проверить третьим сторонам','Ориентирован на планирование и управление персоналом','Нет запечатанного отчёта, который можно показать заказчику'],
    footnote: '* По закону (ст. 13 GDPR и, в Италии, ст. 4 Статута трудящихся) каждый сотрудник должен быть проинформирован, прежде чем за ним начнут следить по GPS. Если программа оставляет этот шаг на усмотрение работодателя, риск остаётся на нём. GeoTapp готовит персональное уведомление, даёт сотруднику подписать его в приложении для подтверждения ознакомления и не позволяет отмечаться, пока оно не подписано.',
    whenTitle: 'Когда выбирать GeoTapp',
    when: ['Вы управляете клининговой, facility-management или мультисервисной компанией','Ваши клиенты оспаривают выполнение выездов','Вам нужны геопривязанные фотодоказательства для каждого выезда','Вы подлежите трудовым проверкам или договорным аудитам','Вам нужны отчёты, которые заказчик может проверить сам'],
    cta: 'Хотите увидеть GeoTapp в действии?',
    ctaDesc: 'Попробуйте на реальной работе: 14 дней бесплатно, без банковской карты.',
    ctaBtn: 'Начать бесплатную пробную версию',
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

export default async function GeoTappVsConnecteamPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = localizeEnglishDeep(T[locale] ?? T.en, locale);
  const faqItems = localizeEnglishDeep(FAQ[locale] ?? FAQ.en, locale);
  const labels = localizeEnglishDeep(ROWS_LABELS[locale] ?? ROWS_LABELS.en, locale);
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
    competitorName: 'Connecteam',
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
        competitorName="Connecteam"
        competitorId="connecteam"
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
        extraList={{ title: t.whenTitle, items: t.when }}
        rows={rows}
        faqItems={faqItems}
        ctaTitle={t.cta}
        ctaDesc={t.ctaDesc}
        ctaBtn={t.ctaBtn}
      />
    </>
  );
}
