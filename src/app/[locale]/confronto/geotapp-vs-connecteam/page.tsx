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
  fr: { title: 'GeoTapp vs Connecteam - Comparaison 2026 | GeoTapp', description: 'GeoTapp vs Connecteam : lequel choisir pour les entreprises avec des équipes sur le terrain ? Comparatif complet sur les preuves de travail, le GPS vérifié et les rapports scellés.' },
  es: { title: 'GeoTapp vs Connecteam - Comparación 2026 | GeoTapp', description: 'GeoTapp vs Connecteam: ¿cuál elegir para empresas con operarios en campo? Comparación completa sobre pruebas del trabajo, GPS verificado, informes sellados y prueba verificable de intervenciones.' },
  pt: { title: 'GeoTapp vs Connecteam - Comparação 2026 | GeoTapp', description: 'GeoTapp vs Connecteam: qual escolher para empresas com equipas no terreno? Comparação completa sobre provas do trabalho, GPS verificado, relatórios selados e prova verificável de intervenções.' },
  nl: { title: 'GeoTapp vs Connecteam - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Connecteam: welke kiezen voor bedrijven met buitendienstmedewerkers? Volledige vergelijking over werkbewijs, geverifieerd GPS, verzegelde rapporten en verzegeld opdrachtbewijs.' },
  da: { title: 'GeoTapp vs Connecteam - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Connecteam: hvilken skal du vælge til virksomheder med medarbejdere i marken? Fuld sammenligning af arbejdsbeviser, verificeret GPS, forseglede rapporter og forseglet opgavebevis.' },
  sv: { title: 'GeoTapp vs Connecteam - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs Connecteam: vilken ska du välja för företag med personal i fält? Fullständig jämförelse av arbetsbevis, verifierad GPS, förseglade rapporter och förseglat uppdragsbevis.' },
  nb: { title: 'GeoTapp vs Connecteam - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Connecteam: hvilken skal du velge for bedrifter med ansatte ute i felt? Full sammenligning av arbeidsbevis, verifisert GPS, forseglede rapporter og forseglet oppdragsbevis.' },
  ru: { title: 'GeoTapp vs Connecteam, Сравнение 2026 | GeoTapp', description: 'GeoTapp vs Connecteam: что выбрать для компаний с выездными сотрудниками? Полное сравнение по доказательствам работы, проверенному GPS, опечатанным отчётам и опечатыванию выездов.' },
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
    { q: 'Quelle est la principale différence entre GeoTapp et Connecteam ?', a: 'Connecteam est un outil de communication et de gestion du personnel. GeoTapp est un système de preuve vérifiable du travail : il produit des rapports scellés avec GPS vérifié et des preuves photographiques que le client peut vérifier de manière autonome, sans accéder à votre compte.' },
    { q: 'Connecteam a-t-il une vérification GPS ?', a: 'Connecteam enregistre la position GPS, mais les données ne sont ni scellées cryptographiquement ni vérifiables par des tiers. GeoTapp produit des rapports avec un hachage cryptographique : le donneur d\'ordre peut vérifier que les données n\'ont pas été modifiées après la clôture de l\'intervention.' },
    { q: 'GeoTapp ou Connecteam pour les entreprises de nettoyage et de facility management ?', a: 'GeoTapp est conçu spécifiquement pour les secteurs où la preuve du travail effectué est critique (nettoyage, maintenance, facility). Les rapports vérifiables de GeoTapp résolvent les litiges instantanément, une fonctionnalité que Connecteam n\'offre pas.' },
    { q: 'Puis-je utiliser GeoTapp avec Connecteam ?', a: 'Oui. GeoTapp se concentre sur la preuve vérifiable des interventions et la production de preuves vérifiables ; Connecteam peut continuer à gérer la communication interne et la planification. Les deux outils résolvent des problèmes différents.' },
  ],
  es: [
    { q: '¿Cuál es la principal diferencia entre GeoTapp y Connecteam?', a: 'Connecteam es una herramienta de comunicación y gestión del personal. GeoTapp es un sistema de prueba verificable del trabajo: produce informes sellados con GPS verificado y pruebas fotográficas que el cliente puede verificar por sí mismo, sin acceder a tu cuenta.' },
    { q: '¿Connecteam tiene verificación GPS?', a: 'Connecteam registra la posición GPS, pero los datos no están sellados criptográficamente ni son verificables por terceros. GeoTapp produce informes con hash criptográfico: el cliente puede verificar que los datos no se han modificado tras el cierre de la intervención.' },
    { q: '¿GeoTapp o Connecteam para empresas de limpieza y facility management?', a: 'GeoTapp está diseñado específicamente para sectores donde la prueba del trabajo realizado es crítica (limpieza, mantenimiento, facility). Los informes verificables de GeoTapp resuelven las reclamaciones al instante, una función que Connecteam no ofrece.' },
    { q: '¿Puedo usar GeoTapp junto con Connecteam?', a: 'Sí. GeoTapp se centra en la prueba verificable de las intervenciones y en producir pruebas verificables; Connecteam puede seguir gestionando la comunicación interna y la planificación. Las dos herramientas resuelven problemas distintos.' },
  ],
  pt: [
    { q: 'Qual é a principal diferença entre a GeoTapp e a Connecteam?', a: 'A Connecteam é uma ferramenta de comunicação e gestão de pessoal. A GeoTapp é um sistema de prova verificável do trabalho: produz relatórios selados com GPS verificado e provas fotográficas que o cliente pode verificar sozinho, sem aceder à sua conta.' },
    { q: 'A Connecteam tem verificação GPS?', a: 'A Connecteam regista a posição GPS, mas os dados não são selados criptograficamente nem verificáveis por terceiros. A GeoTapp produz relatórios com hash criptográfico: o cliente pode verificar que os dados não foram alterados depois do fecho da intervenção.' },
    { q: 'GeoTapp ou Connecteam para empresas de limpeza e facility management?', a: 'A GeoTapp foi concebida especificamente para setores onde a prova do trabalho realizado é crítica (limpeza, manutenção, facility). Os relatórios verificáveis da GeoTapp resolvem as contestações instantaneamente, uma funcionalidade que a Connecteam não oferece.' },
    { q: 'Posso usar a GeoTapp em conjunto com a Connecteam?', a: 'Sim. A GeoTapp foca-se na prova verificável das intervenções e na produção de provas verificáveis; a Connecteam pode continuar a gerir a comunicação interna e o planeamento. As duas ferramentas resolvem problemas diferentes.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Connecteam?', a: 'Connecteam is een tool voor communicatie en personeelsbeheer. GeoTapp is een systeem voor verzegeld werkbewijs: het produceert verzegelde rapporten met geverifieerd GPS en fotobewijs die de klant zelf kan verifiëren, zonder toegang tot je account.' },
    { q: 'Heeft Connecteam GPS-verificatie?', a: 'Connecteam registreert de GPS-positie, maar de data is niet cryptografisch verzegeld en niet door derden te verifiëren. GeoTapp produceert rapporten met een cryptografische hash: de opdrachtgever kan verifiëren dat de data na afsluiting van de opdracht niet is gewijzigd.' },
    { q: 'GeoTapp of Connecteam voor schoonmaak- en facilitybedrijven?', a: 'GeoTapp is specifiek ontworpen voor sectoren waar het bewijs van uitgevoerd werk cruciaal is (schoonmaak, onderhoud, facility). De verifieerbare rapporten van GeoTapp lossen klachten meteen op, een functie die Connecteam niet biedt.' },
    { q: 'Kan ik GeoTapp samen met Connecteam gebruiken?', a: 'Ja. GeoTapp richt zich op het verzegelen van opdrachten en het produceren van verifieerbaar bewijs; Connecteam kan interne communicatie en planning blijven verzorgen. De twee tools lossen verschillende problemen op.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Connecteam?', a: 'Connecteam er et værktøj til kommunikation og personaleadministration. GeoTapp er et system til forseglet arbejdsbevis: det producerer forseglede rapporter med verificeret GPS og fotobeviser, som kunden selv kan verificere uden adgang til din konto.' },
    { q: 'Har Connecteam GPS-verificering?', a: 'Connecteam registrerer GPS-positionen, men dataene er hverken kryptografisk forseglet eller verificerbare af tredjeparter. GeoTapp producerer rapporter med et kryptografisk hash: kunden kan verificere, at dataene ikke er blevet ændret efter afslutningen af opgaven.' },
    { q: 'GeoTapp eller Connecteam til rengørings- og facility management-virksomheder?', a: 'GeoTapp er udviklet specifikt til brancher, hvor beviset for udført arbejde er kritisk (rengøring, vedligehold, facility). GeoTapps verificerbare rapporter løser tvister øjeblikkeligt, en funktion, som Connecteam ikke tilbyder.' },
    { q: 'Kan jeg bruge GeoTapp sammen med Connecteam?', a: 'Ja. GeoTapp fokuserer på at forsegle opgaver og producere verificerbare beviser; Connecteam kan fortsat håndtere intern kommunikation og planlægning. De to værktøjer løser forskellige problemer.' },
  ],
  sv: [
    { q: 'Vad är den största skillnaden mellan GeoTapp och Connecteam?', a: 'Connecteam är ett verktyg för kommunikation och personaladministration. GeoTapp är ett system för förseglat arbetsbevis: det producerar förseglade rapporter med verifierad GPS och fotobevis som kunden kan verifiera själv, utan åtkomst till ditt konto.' },
    { q: 'Har Connecteam GPS-verifiering?', a: 'Connecteam registrerar GPS-positionen, men datan är varken kryptografiskt förseglad eller verifierbar av tredje part. GeoTapp producerar rapporter med en kryptografisk hash: uppdragsgivaren kan verifiera att datan inte har ändrats efter att uppdraget avslutats.' },
    { q: 'GeoTapp eller Connecteam för städ- och facility management-företag?', a: 'GeoTapp är utformat specifikt för branscher där beviset för utfört arbete är kritiskt (städ, underhåll, facility). GeoTapps verifierbara rapporter löser tvister direkt, en funktion som Connecteam inte erbjuder.' },
    { q: 'Kan jag använda GeoTapp tillsammans med Connecteam?', a: 'Ja. GeoTapp fokuserar på att försegla uppdrag och producera verifierbara bevis; Connecteam kan fortsätta sköta intern kommunikation och schemaläggning. De två verktygen löser olika problem.' },
  ],
  nb: [
    { q: 'Hva er hovedforskjellen mellom GeoTapp og Connecteam?', a: 'Connecteam er et verktøy for kommunikasjon og personaladministrasjon. GeoTapp er et system for forseglet arbeidsbevis: det produserer forseglede rapporter med verifisert GPS og fotobevis som kunden kan verifisere selv, uten tilgang til kontoen din.' },
    { q: 'Har Connecteam GPS-verifisering?', a: 'Connecteam registrerer GPS-posisjonen, men dataene er verken kryptografisk forseglet eller verifiserbare av tredjeparter. GeoTapp produserer rapporter med en kryptografisk hash: oppdragsgiveren kan verifisere at dataene ikke er endret etter at oppdraget ble avsluttet.' },
    { q: 'GeoTapp eller Connecteam for renholds- og facility management-bedrifter?', a: 'GeoTapp er utviklet spesielt for bransjer der beviset for utført arbeid er kritisk (renhold, vedlikehold, facility). GeoTapp sine verifiserbare rapporter løser tvister umiddelbart, en funksjon Connecteam ikke tilbyr.' },
    { q: 'Kan jeg bruke GeoTapp sammen med Connecteam?', a: 'Ja. GeoTapp fokuserer på å forsegle oppdrag og produsere verifiserbare bevis; Connecteam kan fortsette å håndtere intern kommunikasjon og planlegging. De to verktøyene løser ulike problemer.' },
  ],
  ru: [
    { q: 'В чём главная разница между GeoTapp и Connecteam?', a: 'Connecteam, это инструмент для коммуникации и управления персоналом. GeoTapp, это система опечатывания работы: она создаёт опечатанные отчёты с проверенным GPS и фотодоказательствами, которые заказчик может проверить сам, без доступа к вашему аккаунту.' },
    { q: 'Есть ли в Connecteam проверка GPS?', a: 'Connecteam записывает GPS-позицию, но данные не опечатаны криптографически и не проверяемы третьими сторонами. GeoTapp создаёт отчёты с криптографическим хешем: заказчик может убедиться, что данные не изменялись после закрытия выезда.' },
    { q: 'GeoTapp или Connecteam для клининговых и facility-management компаний?', a: 'GeoTapp создан специально для отраслей, где доказательство выполненной работы критично (клининг, обслуживание, facility). Проверяемые отчёты GeoTapp разрешают претензии мгновенно, функция, которой нет в Connecteam.' },
    { q: 'Можно ли использовать GeoTapp вместе с Connecteam?', a: 'Да. GeoTapp сосредоточен на опечатывании выездов и создании проверяемых доказательств; Connecteam может и дальше заниматься внутренней коммуникацией и планированием. Эти два инструмента решают разные задачи.' },
  ],
};

// Etichette della tabella di confronto, per locale.
const ROWS_LABELS: Record<string, string[]> = {
  it: ['Posizione alla timbratura, sigillata nel report','Report con hash crittografico, ogni modifica rilevabile','Verifica indipendente da parte del cliente','Prove fotografiche collegate a GPS e timestamp','Registrazione presenze base','App mobile Android/iOS','Dashboard gestione team','Messaggistica interna proprietaria','Posizione rilevata solo quando si timbra, mai in continuo','Informativa GPS firmata nell\'app prima di timbrare*'],
  en: ['Position at clock-in, sealed in the report','Report with cryptographic hash, every change detectable','Independent verification by the client','Photo evidence linked to GPS and timestamp','Basic attendance recording','Mobile app Android/iOS','Team management dashboard','Built-in messaging','Position recorded only at clock-in, never continuously','GPS notice signed in the app before clocking in*'],
  de: ['Position beim Stempeln, im Bericht versiegelt','Bericht mit kryptographischem Hash, jede Änderung erkennbar','Unabhängige Überprüfung durch den Kunden','Fotonachweise mit GPS und Zeitstempel verknüpft','Einfache Anwesenheitserfassung','Mobile App Android/iOS','Dashboard zur Teamverwaltung','Eigene interne Nachrichten','Position nur beim Stempeln erfasst, nie durchgehend','GPS-Information vor dem Stempeln in der App unterschrieben*'],
  fr: ['GPS vérifié et scellé','Rapports dont toute modification est détectable, avec hachage cryptographique','Vérification indépendante par le client','Preuves photographiques liées au GPS et à l\'horodatage','Pointage de base','Application mobile Android/iOS','Tableau de bord de gestion d\'équipe','Messagerie interne intégrée','Géolocalisation conforme RGPD','Avis de confidentialité GPS automatique avec signature numérique*'],
  es: ['GPS verificado y sellado','Informes con hash criptográfico, cualquier modificación detectable','Verificación independiente por el cliente','Pruebas fotográficas vinculadas a GPS y marca temporal','Control de presencia básico','App móvil Android/iOS','Panel de gestión de equipos','Mensajería interna integrada','Geolocalización conforme al RGPD','Aviso de privacidad GPS automático con firma digital*'],
  pt: ['GPS verificado e selado','Relatórios com hash criptográfico, qualquer alteração detetável','Verificação independente pelo cliente','Provas fotográficas ligadas a GPS e marca temporal','Registo de presenças básico','App móvel Android/iOS','Painel de gestão de equipas','Mensagens internas integradas','Geolocalização conforme o RGPD','Aviso de privacidade GPS automático com assinatura digital*'],
  nl: ['Geverifieerd en verzegeld GPS','Rapporten met cryptografische hash, elke wijziging detecteerbaar','Onafhankelijke verificatie door de klant','Fotobewijs gekoppeld aan GPS en tijdstempel','Basis tijdregistratie','Mobiele app Android/iOS','Dashboard voor teambeheer','Ingebouwde messaging','AVG-conforme geolocatie','Automatische GPS-privacyverklaring met digitale handtekening*'],
  da: ['Verificeret og forseglet GPS','Beviser med kryptografisk hash, enhver ændring kan opdages','Uafhængig verificering af kunden','Fotobeviser knyttet til GPS og tidsstempel','Basal tidsregistrering','Mobilapp Android/iOS','Dashboard til teamstyring','Indbygget beskedfunktion','GDPR-kompatibel geolokalisering','Automatisk GPS-privatlivserklæring med digital signatur*'],
  sv: ['Verifierad och förseglad GPS','Rapporter med kryptografisk hash, varje ändring är spårbar','Oberoende verifiering av kunden','Fotobevis kopplade till GPS och tidsstämpel','Grundläggande tidsrapportering','Mobilapp Android/iOS','Instrumentpanel för teamhantering','Inbyggd meddelandefunktion','GDPR-kompatibel geolokalisering','Automatiskt GPS-integritetsmeddelande med digital signatur*'],
  nb: ['Verifisert og forseglet GPS','Rapporter med kryptografisk hash, enhver endring er sporbar','Uavhengig verifisering av kunden','Fotobevis knyttet til GPS og tidsstempel','Grunnleggende tidsregistrering','Mobilapp Android/iOS','Dashbord for teamstyring','Innebygd meldingsfunksjon','GDPR-kompatibel geolokalisering','Automatisk GPS-personvernerklæring med digital signatur*'],
  ru: ['Проверенный и опечатанный GPS','Отчёты с криптографическим хешем, любое изменение заметно','Независимая проверка заказчиком','Фотодоказательства, привязанные к GPS и метке времени','Базовый учёт присутствия','Мобильное приложение Android/iOS','Панель управления командой','Встроенный обмен сообщениями','Геолокация в соответствии с GDPR','Автоматическое уведомление о GPS с цифровой подписью*'],
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
    desc: 'Connecteam gestisce la comunicazione del team. GeoTapp sigilla il lavoro svolto con prove verificabili. Sono strumenti diversi, ecco perché.',
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
    badge: 'Comparatif d\'applis', h1sub: 'lequel choisir pour votre secteur ?',
    desc: 'Connecteam gère la communication de l\'équipe. GeoTapp scelle le travail effectué avec des preuves vérifiables. Deux outils différents, voici pourquoi.',
    summary: 'En résumé :',
    summaryText: 'Si vous devez montrer au client des preuves vérifiables du travail, avec des preuves GPS vérifiables, des rapports dont toute modification est détectable et des photos horodatées - GeoTapp est le bon outil. Connecteam ne produit pas de preuves vérifiables : c\'est un outil de communication et de planification, pas une plateforme de preuve vérifiable.',
    features: 'Comparaison des fonctionnalités clés', feat: 'Fonctionnalité', diff: 'La différence qui compte : preuves vérifiables vs communication',
    geo: ['Chaque intervention génère un rapport scellé avec GPS et photos','Le donneur d\'ordre vérifie lui-même l\'authenticité du rapport','Les données sont signées cryptographiquement, toute modification est détectable','Conçu pour résoudre les litiges avec des preuves défendables','Conforme RGPD pour la géolocalisation des salariés'],
    comp: ['Excellent pour la communication interne et la messagerie d\'équipe','Enregistre le pointage mais sans sceau cryptographique','Les données ne sont pas vérifiables par des tiers de façon indépendante','Orienté planification et gestion du personnel','Ne produit pas de preuves défendables en cas de litige'],
    footnote: '* Selon la loi (RGPD Art. 13), chaque salarié doit signer un avis de confidentialité avant d\'être géolocalisé. La plupart des logiciels GPS ne le gèrent pas : le risque juridique reste à l\'employeur. GeoTapp génère automatiquement l\'avis personnalisé, le fait signer numériquement par le salarié et bloque l\'accès GPS tant qu\'il n\'est pas signé. Aucun autre logiciel sur le marché ne le fait.',
    whenTitle: 'Quand choisir GeoTapp',
    when: ['Vous dirigez une entreprise de nettoyage, de facility management ou de multiservices','Vos clients contestent l\'exécution des interventions','Vous avez besoin de preuves photographiques géolocalisées pour chaque intervention','Vous êtes soumis à des inspections du travail ou à des audits contractuels','Vous voulez des rapports que le donneur d\'ordre peut vérifier lui-même'],
    cta: 'Envie de voir GeoTapp en action ?',
    ctaDesc: 'Nous vous montrons comment une intervention devient une preuve vérifiable, en 20 minutes, sans engagement.',
    ctaBtn: 'Commencez gratuitement !',
  },
  es: {
    badge: 'Comparativa de apps', h1sub: '¿cuál elegir para tu sector?',
    desc: 'Connecteam gestiona la comunicación del equipo. GeoTapp sella el trabajo realizado con pruebas verificables. Son herramientas distintas, aquí está el porqué.',
    summary: 'En resumen:',
    summaryText: 'Si necesitas demostrar al cliente que el trabajo se ha hecho, con pruebas GPS verificables, informes cuya modificación es detectable y fotos con marca temporal - GeoTapp es la herramienta adecuada. Connecteam no produce pruebas verificables: es una herramienta de comunicación y planificación, no de prueba verificable.',
    features: 'Comparación de funciones clave', feat: 'Función', diff: 'La diferencia que importa: pruebas verificables vs comunicación',
    geo: ['Cada intervención genera un informe sellado con GPS y fotos','El cliente verifica por sí mismo la autenticidad del informe','Los datos están firmados criptográficamente, cualquier modificación es detectable','Diseñado para resolver reclamaciones con pruebas defendibles','Conforme al RGPD para la geolocalización de los empleados'],
    comp: ['Excelente para comunicación interna y mensajería del equipo','Registra presencia pero sin sello criptográfico','Los datos no son verificables por terceros de forma independiente','Orientado a la planificación y la gestión del personal','No produce pruebas defendibles en caso de reclamación'],
    footnote: '* Por ley (RGPD Art. 13), cada empleado debe firmar un aviso de privacidad antes de ser geolocalizado. La mayoría del software GPS no lo gestiona: el riesgo legal recae en el empleador. GeoTapp genera automáticamente el aviso personalizado, hace que el empleado lo firme digitalmente y bloquea el acceso GPS hasta que esté firmado. Ningún otro software del mercado lo hace.',
    whenTitle: 'Cuándo elegir GeoTapp',
    when: ['Diriges una empresa de limpieza, facility management o multiservicios','Tus clientes cuestionan la ejecución de las intervenciones','Necesitas pruebas fotográficas geolocalizadas para cada intervención','Estás sujeto a inspecciones de trabajo o auditorías contractuales','Quieres informes que el cliente pueda verificar por sí mismo'],
    cta: '¿Quieres ver GeoTapp en acción?',
    ctaDesc: 'Te mostramos cómo una intervención se convierte en una prueba verificable, en 20 minutos, sin compromiso.',
    ctaBtn: '¡Empieza gratis!',
  },
  pt: {
    badge: 'Comparativo de apps', h1sub: 'qual escolher para o seu setor?',
    desc: 'A Connecteam gere a comunicação da equipa. A GeoTapp sela o trabalho realizado com provas verificáveis. São ferramentas diferentes, eis o porquê.',
    summary: 'Em resumo:',
    summaryText: 'Se precisa de mostrar ao cliente provas verificáveis do trabalho, com provas GPS verificáveis, relatórios cuja alteração é detetável e fotos com marca temporal, a GeoTapp é a ferramenta certa. A Connecteam não produz provas verificáveis: é uma ferramenta de comunicação e planeamento, não de prova verificável.',
    features: 'Comparação das funcionalidades-chave', feat: 'Funcionalidade', diff: 'A diferença que conta: provas verificáveis vs comunicação',
    geo: ['Cada intervenção gera um relatório selado com GPS e fotos','O cliente verifica sozinho a autenticidade do relatório','Os dados estão assinados criptograficamente, qualquer alteração é detetável','Concebido para resolver contestações com provas defensáveis','Conforme o RGPD para a geolocalização dos trabalhadores'],
    comp: ['Excelente para comunicação interna e mensagens da equipa','Regista presenças mas sem selo criptográfico','Os dados não são verificáveis por terceiros de forma independente','Orientado para o planeamento e a gestão de pessoal','Não produz provas defensáveis em caso de contestação'],
    footnote: '* Por lei (RGPD Art. 13), cada trabalhador deve assinar um aviso de privacidade antes de ser geolocalizado. A maioria do software GPS não trata disto: o risco legal fica com o empregador. A GeoTapp gera automaticamente o aviso personalizado, fá-lo assinar digitalmente pelo trabalhador e bloqueia o acesso GPS até estar assinado. Nenhum outro software no mercado o faz.',
    whenTitle: 'Quando escolher a GeoTapp',
    when: ['Gere uma empresa de limpeza, facility management ou multisserviços','Os seus clientes contestam a execução das intervenções','Precisa de provas fotográficas geolocalizadas para cada intervenção','Está sujeito a inspeções do trabalho ou auditorias contratuais','Quer relatórios que o cliente possa verificar sozinho'],
    cta: 'Quer ver a GeoTapp em ação?',
    ctaDesc: 'Mostramos-lhe como uma intervenção se torna uma prova verificável, em 20 minutos, sem compromisso.',
    ctaBtn: 'Comece grátis!',
  },
  nl: {
    badge: 'App-vergelijking', h1sub: 'welke kiezen voor jouw sector?',
    desc: 'Connecteam beheert de teamcommunicatie. GeoTapp verzegelt het uitgevoerde werk met verifieerbaar bewijs. Twee verschillende tools, en dit is waarom.',
    summary: 'Kort gezegd:',
    summaryText: 'Als je de klant verifieerbaar bewijs van het werk moet laten zien, met verifieerbaar GPS-bewijs, rapporten waarvan elke wijziging detecteerbaar is en foto\'s met tijdstempel, is GeoTapp de juiste tool. Connecteam produceert geen verifieerbaar bewijs: het is een tool voor communicatie en planning, geen platform voor verzegeld bewijs.',
    features: 'Vergelijking van kernfuncties', feat: 'Functie', diff: 'Het verschil dat telt: verifieerbaar bewijs vs communicatie',
    geo: ['Elke opdracht genereert een verzegeld GPS- en fotorapport','De opdrachtgever verifieert zelf de echtheid van het rapport','De data is cryptografisch ondertekend, elke wijziging is detecteerbaar','Ontworpen om geschillen op te lossen met verdedigbaar bewijs','AVG-conform voor de geolocatie van werknemers'],
    comp: ['Uitstekend voor interne communicatie en teamberichten','Registreert aanwezigheid maar zonder cryptografisch zegel','Data niet onafhankelijk te verifiëren door derden','Gericht op planning en personeelsbeheer','Produceert geen verdedigbaar bewijs bij een geschil'],
    footnote: '* Volgens de wet (AVG Art. 13) moet elke werknemer een privacyverklaring ondertekenen voordat hij wordt gelokaliseerd. De meeste GPS-software regelt dit niet: het juridische risico blijft bij de werkgever. GeoTapp genereert automatisch de gepersonaliseerde verklaring, laat die digitaal ondertekenen door de werknemer en blokkeert de GPS-toegang tot ze ondertekend is. Geen enkele andere software op de markt doet dit.',
    whenTitle: 'Wanneer kies je GeoTapp',
    when: ['Je runt een schoonmaak-, facility management- of multiservicebedrijf','Je klanten betwisten de uitvoering van de opdrachten','Je hebt voor elke opdracht gelokaliseerd fotobewijs nodig','Je bent onderworpen aan arbeidsinspecties of contractaudits','Je wilt rapporten die de opdrachtgever zelf kan verifiëren'],
    cta: 'GeoTapp in actie zien?',
    ctaDesc: 'We laten je zien hoe een opdracht verifieerbaar bewijs wordt, in 20 minuten, vrijblijvend.',
    ctaBtn: 'Begin gratis!',
  },
  da: {
    badge: 'App-sammenligning', h1sub: 'hvilken skal du vælge til din branche?',
    desc: 'Connecteam håndterer teamkommunikationen. GeoTapp forsegler det udførte arbejde med verificerbare beviser. To forskellige værktøjer, her er hvorfor.',
    summary: 'Kort sagt:',
    summaryText: 'Hvis du skal bevise over for kunden, at arbejdet er udført, med verificerbare GPS-beviser, rapporter hvor enhver ændring kan opdages, og fotos med tidsstempel, er GeoTapp det rigtige værktøj. Connecteam producerer ikke verificerbare beviser: det er et værktøj til kommunikation og planlægning, ikke en bevisplatform.',
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion', diff: 'Forskellen, der betyder noget: verificerbare beviser vs kommunikation',
    geo: ['Hver opgave genererer en forseglet GPS- og fotorapport','Kunden verificerer selv rapportens ægthed','Dataene er kryptografisk signeret, enhver ændring kan opdages','Udviklet til at løse tvister med holdbare beviser','GDPR-kompatibel til geolokalisering af medarbejdere'],
    comp: ['Glimrende til intern kommunikation og teambeskeder','Registrerer fremmøde, men uden kryptografisk segl','Dataene kan ikke verificeres uafhængigt af tredjeparter','Fokuseret på planlægning og personaleadministration','Producerer ikke holdbare beviser i tilfælde af tvist'],
    footnote: '* Ifølge loven (GDPR art. 13) skal hver medarbejder underskrive en privatlivserklæring, før vedkommende geolokaliseres. De fleste GPS-programmer håndterer ikke dette: den juridiske risiko forbliver hos arbejdsgiveren. GeoTapp genererer automatisk den personlige erklæring, får den underskrevet digitalt af medarbejderen og blokerer GPS-adgangen, indtil den er underskrevet. Ingen anden software på markedet gør dette.',
    whenTitle: 'Hvornår skal du vælge GeoTapp',
    when: ['Du driver et rengørings-, facility management- eller multiservicefirma','Dine kunder bestrider udførelsen af opgaverne','Du har brug for geolokaliserede fotobeviser for hver opgave','Du er underlagt arbejdstilsyn eller kontraktaudits','Du vil have rapporter, som kunden selv kan verificere'],
    cta: 'Vil du se GeoTapp i aktion?',
    ctaDesc: 'Vi viser dig, hvordan en opgave bliver til verificerbart bevis, på 20 minutter, uforpligtende.',
    ctaBtn: 'Kom gratis i gang!',
  },
  sv: {
    badge: 'App-jämförelse', h1sub: 'vilken ska du välja för din bransch?',
    desc: 'Connecteam hanterar teamkommunikationen. GeoTapp förseglar det utförda arbetet med verifierbara bevis. Två olika verktyg, här är varför.',
    summary: 'Kort sagt:',
    summaryText: 'Om du behöver bevisa för kunden att arbetet är utfört, med verifierbara GPS-bevis, rapporter där varje ändring är spårbar och foton med tidsstämpel, är GeoTapp rätt verktyg. Connecteam producerar inte verifierbara bevis: det är ett verktyg för kommunikation och schemaläggning, inte en bevisplattform.',
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion', diff: 'Skillnaden som spelar roll: verifierbara bevis vs kommunikation',
    geo: ['Varje uppdrag genererar en förseglad GPS- och fotorapport','Uppdragsgivaren verifierar själv rapportens äkthet','Datan är kryptografiskt signerad, varje ändring är spårbar','Utformat för att lösa tvister med hållbara bevis','GDPR-kompatibel för geolokalisering av anställda'],
    comp: ['Utmärkt för intern kommunikation och teammeddelanden','Registrerar närvaro men utan kryptografiskt sigill','Datan kan inte verifieras oberoende av tredje part','Inriktat på schemaläggning och personaladministration','Producerar inte hållbara bevis vid en tvist'],
    footnote: '* Enligt lag (GDPR art. 13) måste varje anställd underteckna ett integritetsmeddelande innan han eller hon geolokaliseras. De flesta GPS-program hanterar inte detta: den juridiska risken stannar hos arbetsgivaren. GeoTapp genererar automatiskt det personliga meddelandet, låter den anställde signera det digitalt och blockerar GPS-åtkomsten tills det är signerat. Ingen annan programvara på marknaden gör detta.',
    whenTitle: 'När du ska välja GeoTapp',
    when: ['Du driver ett städ-, facility management- eller multiserviceföretag','Dina kunder ifrågasätter utförandet av uppdragen','Du behöver geolokaliserade fotobevis för varje uppdrag','Du omfattas av arbetsinspektioner eller kontraktsrevisioner','Du vill ha rapporter som uppdragsgivaren själv kan verifiera'],
    cta: 'Vill du se GeoTapp i praktiken?',
    ctaDesc: 'Vi visar hur ett uppdrag blir verifierbart bevis, på 20 minuter, utan förpliktelser.',
    ctaBtn: 'Kom igång gratis!',
  },
  nb: {
    badge: 'App-sammenligning', h1sub: 'hvilken skal du velge for bransjen din?',
    desc: 'Connecteam håndterer teamkommunikasjonen. GeoTapp forsegler det utførte arbeidet med verifiserbare bevis. To forskjellige verktøy, her er grunnen.',
    summary: 'Kort sagt:',
    summaryText: 'Hvis du må bevise overfor kunden at arbeidet er utført, med verifiserbare GPS-bevis, rapporter hvor enhver endring er sporbar, og bilder med tidsstempel, er GeoTapp riktig verktøy. Connecteam produserer ikke verifiserbare bevis: det er et verktøy for kommunikasjon og planlegging, ikke en bevisplattform.',
    features: 'Sammenligning av nøkkelfunksjoner', feat: 'Funksjon', diff: 'Forskjellen som teller: verifiserbare bevis vs kommunikasjon',
    geo: ['Hvert oppdrag genererer en forseglet GPS- og fotorapport','Oppdragsgiveren verifiserer selv rapportens ekthet','Dataene er kryptografisk signert, enhver endring er sporbar','Utviklet for å løse tvister med holdbare bevis','GDPR-kompatibel for geolokalisering av ansatte'],
    comp: ['Utmerket for intern kommunikasjon og teammeldinger','Registrerer oppmøte, men uten kryptografisk segl','Dataene kan ikke verifiseres uavhengig av tredjeparter','Rettet mot planlegging og personaladministrasjon','Produserer ikke holdbare bevis ved en tvist'],
    footnote: '* Ifølge loven (GDPR art. 13) må hver ansatt signere en personvernerklæring før vedkommende geolokaliseres. De fleste GPS-programmer håndterer ikke dette: den juridiske risikoen blir hos arbeidsgiveren. GeoTapp genererer automatisk den personlige erklæringen, lar den ansatte signere den digitalt og blokkerer GPS-tilgangen til den er signert. Ingen annen programvare på markedet gjør dette.',
    whenTitle: 'Når du bør velge GeoTapp',
    when: ['Du driver en renholds-, facility management- eller multiservicebedrift','Kundene dine bestrider utførelsen av oppdragene','Du trenger geolokaliserte fotobevis for hvert oppdrag','Du er underlagt arbeidstilsyn eller kontraktsrevisjoner','Du vil ha rapporter oppdragsgiveren kan verifisere selv'],
    cta: 'Vil du se GeoTapp i aksjon?',
    ctaDesc: 'Vi viser deg hvordan et oppdrag blir til verifiserbart bevis, på 20 minutter, uforpliktende.',
    ctaBtn: 'Kom i gang gratis!',
  },
  ru: {
    badge: 'Сравнение приложений', h1sub: 'что выбрать для вашей отрасли?',
    desc: 'Connecteam управляет коммуникацией команды. GeoTapp запечатывает выполненную работу проверяемыми доказательствами. Это разные инструменты, вот почему.',
    summary: 'Коротко:',
    summaryText: 'Если вам нужно показать клиенту проверяемые доказательства работы, проверяемыми GPS-доказательствами, отчётами, в которых любое изменение заметно, и фотографиями с меткой времени - GeoTapp подходящий инструмент. Connecteam не создаёт проверяемых доказательств: это инструмент для коммуникации и планирования, а не платформа для опечатывания.',
    features: 'Сравнение ключевых функций', feat: 'Функция', diff: 'Разница, которая важна: проверяемые доказательства vs коммуникация',
    geo: ['Каждый выезд создаёт опечатанный отчёт с GPS и фото','Заказчик сам проверяет подлинность отчёта','Данные подписаны криптографически, любое изменение заметно','Создан, чтобы разрешать претензии надёжными доказательствами','Соответствие GDPR для геолокации сотрудников'],
    comp: ['Отлично для внутренней коммуникации и сообщений команды','Записывает присутствие, но без криптографической печати','Данные нельзя независимо проверить третьим сторонам','Ориентирован на планирование и управление персоналом','Не создаёт надёжных доказательств при споре'],
    footnote: '* По закону (GDPR ст. 13) каждый сотрудник должен подписать уведомление о конфиденциальности перед геолокацией. Большинство GPS-программ это не обеспечивают: юридический риск остаётся на работодателе. GeoTapp автоматически создаёт персональное уведомление, даёт сотруднику подписать его цифровой подписью и блокирует доступ к GPS, пока оно не подписано. Ни одна другая программа на рынке этого не делает.',
    whenTitle: 'Когда выбирать GeoTapp',
    when: ['Вы управляете клининговой, facility-management или мультисервисной компанией','Ваши клиенты оспаривают выполнение выездов','Вам нужны геопривязанные фотодоказательства для каждого выезда','Вы подлежите трудовым проверкам или договорным аудитам','Вам нужны отчёты, которые заказчик может проверить сам'],
    cta: 'Хотите увидеть GeoTapp в действии?',
    ctaDesc: 'Покажем, как выезд превращается в проверяемое доказательство, за 20 минут, без обязательств.',
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
