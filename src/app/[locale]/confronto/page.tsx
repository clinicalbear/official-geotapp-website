import type { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { TrialCTALink } from '@/components/analytics/TrialCTALink';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import { translatePath } from '@/lib/i18n/slug-map';
import type { AppLocale } from '@/lib/i18n/config';
import { HOME_LABEL } from '@/lib/seo/comparisonSchema';
import LNastro from '@/components/LNastro';
import './l-page.css';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const FeaturedIn = dynamic(() => import('@/components/FeaturedIn'), { ssr: true });
import { featuredLabel } from '@/lib/press/labels';

const PATHNAME = '/confronto/';

const META: Record<string, { title: string; description: string }> = {
  it: {
    title: 'GeoTapp a confronto con le alternative | GeoTapp',
    description: 'Confronta GeoTapp con Connecteam, Clockify, Hubstaff, Zucchetti e altri: cosa registra ciascuno, e chi produce una prova del lavoro che il committente verifica da solo.',
  },
  en: {
    title: 'GeoTapp compared with the alternatives | GeoTapp',
    description: 'Compare GeoTapp with Connecteam, Clockify, Hubstaff, Zucchetti and others: what each one records, and which ones produce proof of work that the client can check alone.',
  },
  de: {
    title: 'GeoTapp im Vergleich mit den Alternativen | GeoTapp',
    description: 'Vergleichen Sie GeoTapp mit Connecteam, Clockify, Hubstaff, Zucchetti und anderen: was jeder erfasst und wer einen Arbeitsnachweis liefert, den der Auftraggeber selbst überprüft.',
  },
  fr: {
    title: 'GeoTapp face aux alternatives | GeoTapp',
    description: 'Comparez GeoTapp à Connecteam, Clockify, Hubstaff, Zucchetti et d\'autres : ce que chacun enregistre, et qui produit une preuve que le client vérifie seul.',
  },
  es: {
    title: 'GeoTapp frente a las alternativas | GeoTapp',
    description: 'Compara GeoTapp con Connecteam, Clockify, Hubstaff, Zucchetti y otros: qué registra cada uno y quién produce una prueba del trabajo que el cliente verifica por sí mismo.',
  },
  nl: {
    title: 'GeoTapp vergeleken met de alternatieven | GeoTapp',
    description: 'Vergelijk GeoTapp met Connecteam, Clockify, Hubstaff, Zucchetti en andere: wat elk van hen vastlegt, en wie een bewijs van het werk levert dat de opdrachtgever zelf controleert.',
  },
  pt: {
    title: 'GeoTapp face às alternativas | GeoTapp',
    description: 'Compare a GeoTapp com Connecteam, Clockify, Hubstaff, Zucchetti e outros: o que cada um regista e quem produz uma prova do trabalho que o cliente verifica sozinho.',
  },
  da: {
    title: 'GeoTapp sammenlignet med alternativerne | GeoTapp',
    description: 'Sammenlign GeoTapp med Connecteam, Clockify, Hubstaff, Zucchetti og andre: hvad hver enkelt registrerer, og hvem der dokumenterer arbejdet.',
  },
  sv: {
    title: 'GeoTapp jämfört med alternativen | GeoTapp',
    description: 'Jämför GeoTapp med Connecteam, Clockify, Hubstaff, Zucchetti och andra: vad var och en registrerar, och vem som tar fram ett arbetsbevis som kunden själv verifierar.',
  },
  nb: {
    title: 'GeoTapp vs konkurrenter - Komplette sammenligninger | GeoTapp',
    description: 'Sammenlign GeoTapp med Connecteam, Clockify, Hubstaff og andre. Finn ut hvorfor GeoTapp er det riktige valget for bedrifter med ansatte i felt som må forsegle utført arbeid.',
  },
  ru: {
    title: 'GeoTapp vs конкуренты, Полные сравнения | GeoTapp',
    description: 'Сравните GeoTapp с Connecteam, Clockify, Hubstaff и другими. Узнайте, почему GeoTapp, правильный выбор для компаний с сотрудниками на выезде, которым нужно запечатать выполненную работу.',
  },
};

const COPY: Record<string, Record<string, string>> = {
  it: { badge: 'Confronti', title_suffix: 'le alternative', intro: 'Non tutte le app fanno la stessa cosa. Molte registrano ore e posizione; GeoTapp chiude ogni intervento in un report sigillato che il committente verifica da solo.', cta_title: 'La prova migliore è provarlo.', cta_desc: 'Provalo su un intervento vero: 14 giorni gratis, senza carta di credito.', cta_btn: 'Inizia la prova gratuita', breadcrumb: 'Confronti' },
  en: { badge: 'Comparisons', title_suffix: 'the alternatives', intro: 'Not all apps do the same thing. Many record hours and location; GeoTapp closes every job in a sealed report that the client verifies alone.', cta_title: 'The best proof is to try it.', cta_desc: 'Try it on a real job: 14 days free, no credit card.', cta_btn: 'Start the free trial', breadcrumb: 'Comparisons' },
  de: { badge: 'Vergleiche', title_suffix: 'die Alternativen', intro: 'Nicht alle Apps leisten dasselbe. Viele erfassen Stunden und Standort; GeoTapp schließt jeden Einsatz in einem versiegelten Bericht ab, den der Auftraggeber selbst überprüft.', cta_title: 'Der beste Beweis ist das Ausprobieren.', cta_desc: 'Testen Sie es an einem echten Einsatz: 14 Tage kostenlos, keine Kreditkarte.', cta_btn: 'Kostenlos testen', breadcrumb: 'Vergleiche' },
  fr: { badge: 'Comparaisons', title_suffix: 'les alternatives', intro: 'Toutes les applications ne font pas la même chose. Beaucoup enregistrent les heures et la position ; GeoTapp clôt chaque intervention dans un rapport scellé que le client vérifie lui-même.', cta_title: 'La meilleure preuve, c\'est de l\'essayer.', cta_desc: 'Essayez-le sur une intervention réelle : 14 jours gratuits, sans carte bancaire.', cta_btn: 'Commencer l\'essai gratuit', breadcrumb: 'Comparaisons' },
  es: { badge: 'Comparativas', title_suffix: 'las alternativas', intro: 'No todas las apps hacen lo mismo. Muchas registran horas y posición; GeoTapp cierra cada intervención en un informe sellado que el cliente verifica por sí mismo.', cta_title: 'La mejor prueba es probarlo.', cta_desc: 'Pruébalo en una intervención real: 14 días gratis, sin tarjeta de crédito.', cta_btn: 'Empezar prueba gratuita', breadcrumb: 'Comparativas' },
  nl: { badge: 'Vergelijkingen', title_suffix: 'de alternatieven', intro: 'Niet alle apps doen hetzelfde. Veel apps leggen uren en locatie vast; GeoTapp sluit elke klus af in een verzegeld rapport dat de opdrachtgever zelf controleert.', cta_title: 'Het beste bewijs is het uitproberen.', cta_desc: 'Probeer het op een echte klus: 14 dagen gratis, zonder creditcard.', cta_btn: 'Start de gratis proefperiode', breadcrumb: 'Vergelijkingen' },
  pt: { badge: 'Comparações', title_suffix: 'as alternativas', intro: 'Nem todas as apps fazem o mesmo. Muitas registam horas e posição; a GeoTapp fecha cada intervenção num relatório selado que o cliente verifica sozinho.', cta_title: 'A melhor prova é experimentar.', cta_desc: 'Experimente numa intervenção real: 14 dias grátis, sem cartão de crédito.', cta_btn: 'Começar teste gratuito', breadcrumb: 'Comparações' },
  da: { badge: 'Sammenligninger', title_suffix: 'alternativerne', intro: 'Ikke alle apps gør det samme. Mange registrerer timer og position; GeoTapp lukker hver opgave i en forseglet rapport, som kunden selv verificerer.', cta_title: 'Det bedste bevis er at prøve det.', cta_desc: 'Prøv det på en rigtig opgave: 14 dage gratis, uden kreditkort.', cta_btn: 'Start gratis prøveperiode', breadcrumb: 'Sammenligninger' },
  sv: { badge: 'Jämförelser', title_suffix: 'alternativen', intro: 'Alla appar gör inte samma sak. Många registrerar timmar och position; GeoTapp avslutar varje uppdrag i en förseglad rapport som kunden själv verifierar.', cta_title: 'Det bästa beviset är att prova.', cta_desc: 'Prova på ett riktigt uppdrag: 14 dagar gratis, utan kreditkort.', cta_btn: 'Starta den kostnadsfria provperioden', breadcrumb: 'Jämförelser' },
  nb: { badge: 'Sammenligninger', title_suffix: 'alternativene', intro: 'Ikke alle apper er like. GeoTapp er det eneste systemet som produserer verifiserbart bevis på utført arbeid, ikke bare registrerer timer og posisjon.', cta_title: 'Det beste beviset er å se det live.', cta_desc: 'Vi viser deg hvordan et oppdrag blir til verifiserbart bevis, på 20 minutter, uforpliktende.', cta_btn: 'Kom i gang gratis!', breadcrumb: 'Sammenligninger' },
  ru: { badge: 'Сравнения', title_suffix: 'альтернативы', intro: 'Не все приложения одинаковы. GeoTapp, единственная система, которая создаёт проверяемые доказательства выполненной работы, а не просто фиксирует часы и местоположение.', cta_title: 'Лучшее доказательство, увидеть вживую.', cta_desc: 'Покажем, как работа превращается в проверяемое доказательство, за 20 минут, без обязательств.', cta_btn: 'Начните бесплатно!', breadcrumb: 'Сравнения' },
};

const COMPARISONS: Record<string, { tagline: string; highlight: string }>[] = [
  {
    slug: 'geotapp-vs-connecteam', competitor: 'Connecteam',
    it: { tagline: 'Comunicazione del team o prova degli interventi', highlight: 'Connecteam gestisce la comunicazione. GeoTapp produce prove verificabili del lavoro.' },
    en: { tagline: 'Team communication or proof of the jobs done', highlight: 'Connecteam manages communication. GeoTapp produces verifiable proof of work.' },
    de: { tagline: 'Teamkommunikation oder Einsatznachweis', highlight: 'Connecteam verwaltet die Kommunikation. GeoTapp liefert überprüfbare Arbeitsnachweise.' },
    fr: { tagline: 'Communication d\'équipe ou preuve des interventions', highlight: 'Connecteam gère la communication. GeoTapp produit des preuves vérifiables du travail.' },
    es: { tagline: 'Comunicación del equipo o prueba de las intervenciones', highlight: 'Connecteam gestiona la comunicación. GeoTapp produce pruebas verificables del trabajo.' },
    pt: { tagline: 'Comunicação da equipa ou prova das intervenções', highlight: 'A Connecteam gere a comunicação. A GeoTapp produz provas verificáveis do trabalho.' },
    nl: { tagline: 'Teamcommunicatie of bewijs van de klussen', highlight: 'Connecteam beheert de communicatie. GeoTapp maakt controleerbaar bewijs van het werk.' },
    da: { tagline: 'Teamkommunikation eller dokumentation af opgaverne', highlight: 'Connecteam styrer kommunikationen. GeoTapp laver verificerbar dokumentation af arbejdet.' },
    sv: { tagline: 'Teamkommunikation eller bevis på utförda uppdrag', highlight: 'Connecteam hanterar kommunikationen. GeoTapp tar fram verifierbara arbetsbevis.' },
    nb: { tagline: 'Teamkommunikasjon vs arbeidssertifisering', highlight: 'Connecteam håndterer kommunikasjon. GeoTapp produserer verifiserbart bevis på arbeidet.' },
    ru: { tagline: 'Командное общение vs сертификация работы', highlight: 'Connecteam управляет общением. GeoTapp создаёт проверяемые доказательства работы.' },
  } as any,
  {
    slug: 'geotapp-vs-clockify', competitor: 'Clockify',
    it: { tagline: 'Registrare il tempo o provare il lavoro', highlight: 'Clockify registra le ore. GeoTapp sigilla ogni intervento con posizione, ora e foto.' },
    en: { tagline: 'Recording time or proving the work', highlight: 'Clockify records hours. GeoTapp seals every job with location, time and photos.' },
    de: { tagline: 'Zeit erfassen oder Arbeit nachweisen', highlight: 'Clockify erfasst Stunden. GeoTapp versiegelt jeden Einsatz mit Position, Uhrzeit und Fotos.' },
    fr: { tagline: 'Suivre le temps ou prouver le travail', highlight: 'Clockify suit les heures. GeoTapp scelle chaque intervention avec la position, l\'heure et les photos.' },
    es: { tagline: 'Registrar el tiempo o probar el trabajo', highlight: 'Clockify registra las horas. GeoTapp sella cada intervención con posición, hora y fotos.' },
    pt: { tagline: 'Registar o tempo ou provar o trabalho', highlight: 'A Clockify regista as horas. A GeoTapp sela cada intervenção com posição, hora e fotos.' },
    nl: { tagline: 'Tijd registreren of het werk bewijzen', highlight: 'Clockify registreert uren. GeoTapp verzegelt elke klus met locatie, tijd en foto\'s.' },
    da: { tagline: 'Registrere tiden eller dokumentere arbejdet', highlight: 'Clockify registrerer timerne. GeoTapp forsegler hver opgave med position, tid og fotos.' },
    sv: { tagline: 'Registrera tid eller bevisa arbetet', highlight: 'Clockify registrerar timmar. GeoTapp förseglar varje uppdrag med plats, tid och foton.' },
    nb: { tagline: 'Tidsregistrering vs bevis på utført arbeid', highlight: 'Clockify registrerer timer. GeoTapp forsegler hvert oppdrag med forseglet GPS og bilder.' },
    ru: { tagline: 'Учёт времени vs доказательство выполненной работы', highlight: 'Clockify учитывает часы. GeoTapp запечатывает каждую работу опечатанным GPS и фото.' },
  } as any,
  {
    slug: 'geotapp-vs-jibble', competitor: 'Jibble',
    it: { tagline: 'Rilevare le presenze o provare il lavoro', highlight: 'Jibble conta le presenze con volto e GPS di base. GeoTapp prova ogni intervento con posizione, ora e foto sigillate.' },
    en: { tagline: 'Recording attendance or proving the work', highlight: 'Jibble logs attendance with face and basic GPS. GeoTapp proves every job with sealed location, time and photos.' },
    de: { tagline: 'Anwesenheit erfassen oder Arbeit nachweisen', highlight: 'Jibble zählt Anwesenheit mit Gesicht und einfachem GPS. GeoTapp belegt jeden Einsatz mit versiegelter Position, Uhrzeit und Fotos.' },
    fr: { tagline: 'Suivre les présences ou prouver le travail', highlight: 'Jibble compte les présences avec reconnaissance faciale et GPS de base. GeoTapp prouve chaque intervention avec position, heure et photos scellées.' },
    es: { tagline: 'Controlar la asistencia o probar el trabajo', highlight: 'Jibble cuenta la asistencia con rostro y GPS básico. GeoTapp prueba cada intervención con posición, hora y fotos selladas.' },
    pt: { tagline: 'Registar as presenças ou provar o trabalho', highlight: 'A Jibble conta as presenças com rosto e GPS básico. A GeoTapp prova cada intervenção com posição, hora e fotos seladas.' },
    nl: { tagline: 'Aanwezigheid vastleggen of het werk bewijzen', highlight: 'Jibble telt de aanwezigheid met gezicht en eenvoudige gps. GeoTapp bewijst elke klus met verzegelde locatie, tijd en foto\'s.' },
    da: { tagline: 'Tælle fremmøde eller dokumentere arbejdet', highlight: 'Jibble tæller fremmøde med ansigt og basis-GPS. GeoTapp dokumenterer hver opgave med forseglet position, tid og fotos.' },
    sv: { tagline: 'Registrera närvaro eller bevisa arbetet', highlight: 'Jibble loggar närvaro med ansikte och enkel GPS. GeoTapp bevisar varje uppdrag med förseglad plats, tid och foton.' },
    nb: { tagline: 'Oppmøteregistrering vs arbeidsbevis', highlight: 'Jibble registrerer oppmøte med ansikt og enkel GPS. GeoTapp beviser hvert oppdrag med forseglet GPS og bilder.' },
    ru: { tagline: 'Учёт присутствия vs доказательство работы', highlight: 'Jibble отмечает присутствие по лицу и базовому GPS. GeoTapp доказывает каждую работу опечатанным GPS и фото.' },
  } as any,
  {
    slug: 'geotapp-vs-personio', competitor: 'Personio',
    it: { tagline: 'Gestire il personale o provare il lavoro sul campo', highlight: 'Personio gestisce personale, ferie e paghe. GeoTapp prova il lavoro sul campo con posizione, ora e foto sigillate. Si affiancano.' },
    en: { tagline: 'Managing staff or proving field work', highlight: 'Personio manages staff, leave and payroll. GeoTapp proves field work with sealed location, time and photos. They work side by side.' },
    de: { tagline: 'Personal verwalten oder Arbeit im Außendienst nachweisen', highlight: 'Personio verwaltet Personal, Urlaub und Lohn. GeoTapp belegt die Arbeit im Außendienst mit versiegelter Position, Uhrzeit und Fotos. Sie ergänzen sich.' },
    fr: { tagline: 'Gérer le personnel ou prouver le travail sur le terrain', highlight: 'Personio gère le personnel, les congés et la paie. GeoTapp prouve le travail sur le terrain avec position, heure et photos scellées. Les deux se complètent.' },
    es: { tagline: 'Gestionar el personal o probar el trabajo en campo', highlight: 'Personio gestiona personal, vacaciones y nóminas. GeoTapp prueba el trabajo en campo con posición, hora y fotos selladas. Se complementan.' },
    pt: { tagline: 'Gerir o pessoal ou provar o trabalho no terreno', highlight: 'A Personio gere pessoal, férias e salários. A GeoTapp prova o trabalho no terreno com posição, hora e fotos seladas. Complementam-se.' },
    nl: { tagline: 'Personeel beheren of veldwerk bewijzen', highlight: 'Personio beheert personeel, verlof en salaris. GeoTapp bewijst het werk in het veld met verzegelde locatie, tijd en foto\'s. Ze vullen elkaar aan.' },
    da: { tagline: 'Styre personalet eller dokumentere arbejdet i marken', highlight: 'Personio styrer personale, ferie og løn. GeoTapp dokumenterer arbejdet i marken med forseglet position, tid og fotos. De supplerer hinanden.' },
    sv: { tagline: 'Hantera personal eller bevisa fältarbete', highlight: 'Personio hanterar personal, ledighet och lön. GeoTapp bevisar fältarbete med förseglad plats, tid och foton. De fungerar sida vid sida.' },
    nb: { tagline: 'HR-styring vs bevis på feltarbeid', highlight: 'Personio styrer HR, fravær og lønn. GeoTapp beviser feltarbeid med forseglet GPS og bilder. Komplementære.' },
    ru: { tagline: 'Управление HR vs доказательство работы в поле', highlight: 'Personio ведёт HR, отсутствия и зарплату. GeoTapp доказывает работу в поле опечатанным GPS и фото. Дополняют друг друга.' },
  } as any,
  {
    slug: 'geotapp-vs-sage', competitor: 'Sage',
    it: { tagline: 'Gestionale e paghe o prova del lavoro', highlight: 'Sage gestisce contabilità e paghe. GeoTapp prova il lavoro sul campo con posizione, ora e foto sigillate. Si affiancano.' },
    en: { tagline: 'Business suite and payroll or proof of work', highlight: 'Sage manages accounting and payroll. GeoTapp proves field work with sealed location, time and photos. They work side by side.' },
    de: { tagline: 'Verwaltungssoftware und Lohn oder Arbeitsnachweis', highlight: 'Sage verwaltet Buchhaltung und Lohn. GeoTapp belegt die Arbeit im Außendienst mit versiegelter Position, Uhrzeit und Fotos. Sie ergänzen sich.' },
    fr: { tagline: 'Gestion et paie ou preuve du travail', highlight: 'Sage gère la comptabilité et la paie. GeoTapp prouve le travail sur le terrain avec position, heure et photos scellées. Les deux se complètent.' },
    es: { tagline: 'Gestión y nóminas o prueba del trabajo', highlight: 'Sage gestiona contabilidad y nóminas. GeoTapp prueba el trabajo en campo con posición, hora y fotos selladas. Se complementan.' },
    pt: { tagline: 'Gestão e salários ou prova do trabalho', highlight: 'A Sage gere contabilidade e salários. A GeoTapp prova o trabalho no terreno com posição, hora e fotos seladas. Complementam-se.' },
    nl: { tagline: 'Bedrijfssoftware en salaris of bewijs van het werk', highlight: 'Sage beheert boekhouding en salaris. GeoTapp bewijst het werk in het veld met verzegelde locatie, tijd en foto\'s. Ze vullen elkaar aan.' },
    da: { tagline: 'Virksomhedssystem og løn eller dokumentation af arbejdet', highlight: 'Sage styrer bogføring og løn. GeoTapp dokumenterer arbejdet i marken med forseglet position, tid og fotos. De supplerer hinanden.' },
    sv: { tagline: 'Affärssvit och lön eller arbetsbevis', highlight: 'Sage hanterar bokföring och lön. GeoTapp bevisar fältarbete med förseglad plats, tid och foton. De fungerar sida vid sida.' },
    nb: { tagline: 'Forretningssuite og lønn vs arbeidsbevis', highlight: 'Sage styrer regnskap og lønn. GeoTapp beviser feltarbeid med forseglet GPS og bilder. Komplementære.' },
    ru: { tagline: 'Бизнес-система и зарплата vs доказательство работы', highlight: 'Sage ведёт бухгалтерию и зарплату. GeoTapp доказывает работу в поле опечатанным GPS и фото. Дополняют друг друга.' },
  } as any,
  {
    slug: 'geotapp-vs-hubstaff', competitor: 'Hubstaff',
    it: { tagline: 'Monitorare le persone o provare il lavoro', highlight: 'Hubstaff monitora i lavoratori remoti. GeoTapp sigilla gli interventi sul campo, senza tracciamento continuo.' },
    en: { tagline: 'Monitoring people or proving the work', highlight: 'Hubstaff monitors remote workers. GeoTapp seals field jobs, with no continuous tracking.' },
    de: { tagline: 'Menschen überwachen oder Arbeit nachweisen', highlight: 'Hubstaff überwacht Remote-Mitarbeiter. GeoTapp versiegelt Einsätze im Außendienst, ohne durchgehende Verfolgung.' },
    fr: { tagline: 'Surveiller les personnes ou prouver le travail', highlight: 'Hubstaff surveille les télétravailleurs. GeoTapp scelle les interventions sur le terrain, sans suivi continu.' },
    es: { tagline: 'Monitorizar a las personas o probar el trabajo', highlight: 'Hubstaff monitoriza a los trabajadores remotos. GeoTapp sella las intervenciones en campo, sin seguimiento continuo.' },
    pt: { tagline: 'Monitorizar as pessoas ou provar o trabalho', highlight: 'A Hubstaff monitoriza os trabalhadores remotos. A GeoTapp sela as intervenções no terreno, sem seguimento contínuo.' },
    nl: { tagline: 'Mensen monitoren of het werk bewijzen', highlight: 'Hubstaff monitort medewerkers op afstand. GeoTapp verzegelt klussen in het veld, zonder doorlopende tracking.' },
    da: { tagline: 'Overvåge folk eller dokumentere arbejdet', highlight: 'Hubstaff overvåger fjernarbejdere. GeoTapp forsegler opgaverne i marken, uden løbende sporing.' },
    sv: { tagline: 'Övervaka människor eller bevisa arbetet', highlight: 'Hubstaff övervakar distansarbetare. GeoTapp förseglar uppdrag i fält, utan löpande spårning.' },
    nb: { tagline: 'Fjernovervåking vs feltsertifisering', highlight: 'Hubstaff overvåker fjernarbeidere. GeoTapp forsegler fysiske ansatte i felt - GDPR-kompatibel.' },
    ru: { tagline: 'Удалённый мониторинг vs полевая сертификация', highlight: 'Hubstaff следит за удалёнными сотрудниками. GeoTapp запечатывает работников на выезде, соответствует GDPR.' },
  } as any,
  {
    slug: 'geotapp-vs-nobadge', competitor: 'NoBadge',
    it: { tagline: 'Timbrare le presenze o provare gli interventi', highlight: 'NoBadge registra le presenze. GeoTapp controlla la posizione alla timbratura e sigilla il lavoro in report verificabili.' },
    en: { tagline: 'Clocking in or proving the jobs', highlight: 'NoBadge records attendance. GeoTapp checks the position at clock-in and seals the work in verifiable reports.' },
    de: { tagline: 'Stempeln oder Einsätze nachweisen', highlight: 'NoBadge erfasst die Anwesenheit. GeoTapp prüft die Position beim Stempeln und versiegelt die Arbeit in überprüfbaren Berichten.' },
    fr: { tagline: 'Pointer les présences ou prouver les interventions', highlight: 'NoBadge enregistre les présences. GeoTapp contrôle la position au pointage et scelle le travail dans des rapports vérifiables.' },
    es: { tagline: 'Fichar la asistencia o probar las intervenciones', highlight: 'NoBadge registra la asistencia. GeoTapp comprueba la posición al fichar y sella el trabajo en informes verificables.' },
    pt: { tagline: 'Picar o ponto ou provar as intervenções', highlight: 'A NoBadge regista as presenças. A GeoTapp controla a posição ao picar o ponto e sela o trabalho em relatórios verificáveis.' },
    nl: { tagline: 'Aanwezigheid registreren of klussen bewijzen', highlight: 'NoBadge registreert aanwezigheid. GeoTapp controleert de locatie bij de registratie en verzegelt het werk in controleerbare rapporten.' },
    da: { tagline: 'Stemple fremmøde eller dokumentere opgaverne', highlight: 'NoBadge registrerer fremmøde. GeoTapp kontrollerer positionen ved stempling og forsegler arbejdet i verificerbare rapporter.' },
    sv: { tagline: 'Stämpla in eller bevisa uppdragen', highlight: 'NoBadge registrerar närvaro. GeoTapp kontrollerar positionen vid instämpling och förseglar arbetet i verifierbara rapporter.' },
    nb: { tagline: 'Oppmøteregistrering vs forseglet arbeidsbevis', highlight: 'NoBadge registrerer oppmøte. GeoTapp forsegler arbeidet med anti-spoofing-GPS og verifiserbare rapporter.' },
    ru: { tagline: 'Учёт присутствия vs сертификация работы', highlight: 'NoBadge фиксирует присутствие. GeoTapp запечатывает работу с анти-спуфинг GPS и проверяемыми отчётами.' },
  } as any,
  {
    slug: 'geotapp-vs-libemax', competitor: 'Libemax',
    it: { tagline: 'Geofence o controllo della posizione falsa', highlight: 'Libemax usa il geofence per la timbratura. GeoTapp alla timbratura rifiuta anche le posizioni simulate: due controlli diversi.' },
    en: { tagline: 'Geofence or fake-location check', highlight: 'Libemax uses a geofence for clock-in. GeoTapp also rejects simulated positions at clock-in: two different checks.' },
    de: { tagline: 'Geofence oder Prüfung auf gefälschte Positionen', highlight: 'Libemax nutzt einen Geofence fürs Stempeln. GeoTapp weist beim Stempeln auch simulierte Positionen ab: zwei verschiedene Prüfungen.' },
    fr: { tagline: 'Géorepérage ou contrôle de la fausse position', highlight: 'Libemax utilise le géorepérage pour le pointage. GeoTapp refuse en plus les positions simulées au pointage : deux contrôles différents.' },
    es: { tagline: 'Geofence o control de la posición falsa', highlight: 'Libemax usa el geofence para el fichaje. GeoTapp, al fichar, rechaza también las posiciones simuladas: dos controles distintos.' },
    pt: { tagline: 'Geofence ou controlo da posição falsa', highlight: 'A Libemax usa o geofence para a picagem. A GeoTapp, ao picar o ponto, rejeita também as posições simuladas: dois controlos diferentes.' },
    nl: { tagline: 'Geofence of controle op valse locaties', highlight: 'Libemax gebruikt geofence voor de registratie. GeoTapp weigert bij de registratie ook gesimuleerde locaties: twee verschillende controles.' },
    da: { tagline: 'Geofence eller kontrol af falsk position', highlight: 'Libemax bruger geofence til stempling. GeoTapp afviser ved stempling også simulerede positioner: to forskellige kontroller.' },
    sv: { tagline: 'Geofence eller kontroll av falsk position', highlight: 'Libemax använder en geofence för instämpling. GeoTapp avvisar vid instämpling också simulerade positioner: två olika kontroller.' },
    nb: { tagline: 'Geofence vs anti-spoofing-GPS', highlight: 'Libemax bruker geofence. GeoTapp verifiserer at GPS-en er ekte med anti-spoofing, to forskjellige sikkerhetsnivåer.' },
    ru: { tagline: 'Геозона vs анти-спуфинг GPS', highlight: 'Libemax использует геозону. GeoTapp проверяет подлинность GPS с помощью анти-спуфинга, два разных уровня безопасности.' },
  } as any,
  {
    slug: 'geotapp-vs-picaponto', competitor: 'PicaPonto',
    it: { tagline: 'Registrare o dimostrare', highlight: 'PicaPonto registra le presenze a basso costo con molti metodi di timbratura. GeoTapp produce un report sigillato che il committente verifica da solo.' },
    en: { tagline: 'Recording or proving', highlight: 'PicaPonto records attendance cheaply with many clock-in methods. GeoTapp produces a sealed report that the client verifies alone.' },
    de: { tagline: 'Erfassen oder belegen', highlight: 'PicaPonto erfasst die Anwesenheit günstig mit vielen Stempelmethoden. GeoTapp erstellt einen versiegelten Bericht, den der Auftraggeber selbst überprüft.' },
    fr: { tagline: 'Enregistrer ou démontrer', highlight: 'PicaPonto enregistre les présences à bas coût, avec de nombreux modes de pointage. GeoTapp produit un rapport scellé que le client vérifie lui-même.' },
    es: { tagline: 'Registrar o demostrar', highlight: 'PicaPonto registra la asistencia a bajo coste con muchos métodos de fichaje. GeoTapp produce un informe sellado que el cliente verifica por su cuenta.' },
    pt: { tagline: 'Registar ou demonstrar', highlight: 'O PicaPonto regista as presenças a baixo custo, com muitos métodos de picagem. A GeoTapp produz um relatório selado que o cliente verifica sozinho.' },
    nl: { tagline: 'Registreren of aantonen', highlight: 'PicaPonto legt aanwezigheid goedkoop vast met veel registratiemethoden. GeoTapp maakt een verzegeld rapport dat de opdrachtgever zelf controleert.' },
    da: { tagline: 'Registrere eller dokumentere', highlight: 'PicaPonto registrerer fremmøde billigt med mange stemplingsmetoder. GeoTapp laver en forseglet rapport, som kunden selv verificerer.' },
    sv: { tagline: 'Registrera eller bevisa', highlight: 'PicaPonto registrerar närvaro billigt med många instämplingsmetoder. GeoTapp tar fram en förseglad rapport som kunden själv verifierar.' },
    nb: { tagline: 'Registrere vs bevise', highlight: 'PicaPonto registrerer oppmote billig med mange metoder. GeoTapp produserer en uforanderlig rapport kunden selv verifiserer.' },
    ru: { tagline: 'Учитывать vs доказывать', highlight: 'PicaPonto дёшево учитывает присутствие многими методами. GeoTapp создаёт запечатанный отчёт, который клиент проверяет сам.' },
  } as any,
  {
    slug: 'geotapp-vs-blink', competitor: 'Blink',
    it: { tagline: 'Software tedesco per le pulizie o prova sul campo', highlight: 'Blink è molto diffuso tra le pulizie in Germania. GeoTapp aggiunge il controllo della posizione alla timbratura e report verificabili.' },
    en: { tagline: 'German cleaning software or proof in the field', highlight: 'Blink is widely used for cleaning in Germany. GeoTapp adds a position check at clock-in and verifiable reports.' },
    de: { tagline: 'Deutsche Reinigungssoftware oder Nachweis im Außendienst', highlight: 'Blink ist in der Gebäudereinigung in Deutschland weit verbreitet. GeoTapp ergänzt die Positionsprüfung beim Stempeln und überprüfbare Berichte.' },
    fr: { tagline: 'Logiciel allemand de nettoyage ou preuve sur le terrain', highlight: 'Blink est très répandu dans le nettoyage en Allemagne. GeoTapp ajoute le contrôle de la position au pointage et des rapports vérifiables.' },
    es: { tagline: 'Software alemán de limpieza o prueba en campo', highlight: 'Blink está muy extendido en la limpieza en Alemania. GeoTapp añade la comprobación de la posición al fichar e informes verificables.' },
    pt: { tagline: 'Software alemão de limpeza ou prova no terreno', highlight: 'A Blink é muito difundida na limpeza na Alemanha. A GeoTapp acrescenta o controlo da posição ao picar o ponto e relatórios verificáveis.' },
    nl: { tagline: 'Duitse software voor schoonmaak of bewijs in het veld', highlight: 'Blink wordt veel gebruikt in de schoonmaak in Duitsland. GeoTapp voegt de controle van de locatie bij de registratie en controleerbare rapporten toe.' },
    da: { tagline: 'Tysk rengøringssoftware eller dokumentation i marken', highlight: 'Blink er meget udbredt inden for rengøring i Tyskland. GeoTapp tilføjer positionskontrol ved stempling og verificerbare rapporter.' },
    sv: { tagline: 'Tysk städprogramvara eller bevis i fält', highlight: 'Blink är mycket utbrett inom städning i Tyskland. GeoTapp lägger till positionskontroll vid instämpling och verifierbara rapporter.' },
    nb: { tagline: 'Renholdsprogram DE vs feltsertifisering', highlight: 'Blink er nummer 1 for renhold i Tyskland. GeoTapp legger til anti-spoofing og rapporter med bevisverdi.' },
    ru: { tagline: 'ПО для клининга DE vs полевая сертификация', highlight: 'Blink, №1 для клининга в Германии. GeoTapp добавляет анти-спуфинг и проверяемые отчёты.' },
  } as any,
  {
    slug: 'geotapp-vs-zucchetti', competitor: 'Zucchetti',
    it: { tagline: 'Gestionale del personale o prova del lavoro', highlight: 'Zucchetti copre tutto il personale, dalle presenze al cedolino. GeoTapp produce la prova che il committente verifica da solo.' },
    en: { tagline: 'Staff management suite or proof of work', highlight: 'Zucchetti covers all staff, from attendance to payslip. GeoTapp produces the proof that the client verifies alone.' },
    de: { tagline: 'Personalverwaltung oder Arbeitsnachweis', highlight: 'Zucchetti deckt die gesamte Personalverwaltung ab, von der Anwesenheit bis zur Lohnabrechnung. GeoTapp liefert den Nachweis, den der Auftraggeber selbst prüft.' },
    fr: { tagline: 'Suite RH ou preuve du travail', highlight: 'Zucchetti couvre tout le personnel, du pointage à la fiche de paie. GeoTapp produit la preuve que le client vérifie lui-même.' },
    es: { tagline: 'Suite de personal o prueba del trabajo', highlight: 'Zucchetti cubre todo el personal, del fichaje a la nómina. GeoTapp produce la prueba que el cliente verifica por su cuenta.' },
    pt: { tagline: 'Suite de gestão do pessoal ou prova do trabalho', highlight: 'A Zucchetti cobre todo o pessoal, das presenças ao recibo de vencimento. A GeoTapp produz a prova que o cliente verifica sozinho.' },
    nl: { tagline: 'Personeelsbeheersysteem of bewijs van het werk', highlight: 'Zucchetti dekt het hele personeelsbeheer, van aanwezigheid tot loonstrook. GeoTapp levert het bewijs dat de opdrachtgever zelf controleert.' },
    da: { tagline: 'Personalesystem eller dokumentation af arbejdet', highlight: 'Zucchetti dækker hele personaleadministrationen, fra fremmøde til lønseddel. GeoTapp laver dokumentationen, som kunden selv verificerer.' },
    sv: { tagline: 'Personalsvit eller arbetsbevis', highlight: 'Zucchetti täcker hela personaladministrationen, från närvaro till lönespecifikation. GeoTapp tar fram beviset som kunden själv verifierar.' },
    nb: { tagline: 'HR-suite vs bevis for arbeidet', highlight: 'Zucchetti dekker hele personaladministrasjonen. GeoTapp lager beviset oppdragsgiveren selv kontrollerer.' },
    ru: { tagline: 'HR-система vs доказательство работы', highlight: 'Zucchetti закрывает весь персонал, от табеля до расчётного листка. GeoTapp даёт доказательство, которое заказчик проверяет сам.' },
  } as any,
  {
    slug: 'geotapp-vs-factorial', competitor: 'Factorial',
    it: { tagline: 'Gestione del personale o prova verificabile sul campo', highlight: 'Factorial tiene in ordine ferie, assenze e cedolini. GeoTapp documenta l\'intervento quando il committente contesta il servizio.' },
    en: { tagline: 'Staff management or verifiable proof in the field', highlight: 'Factorial keeps leave, absences and payslips in order. GeoTapp documents the job when the client disputes the service.' },
    de: { tagline: 'Personalverwaltung oder überprüfbarer Nachweis im Außendienst', highlight: 'Factorial hält Urlaub, Abwesenheiten und Lohnabrechnungen in Ordnung. GeoTapp dokumentiert den Einsatz, wenn der Auftraggeber die Leistung beanstandet.' },
    fr: { tagline: 'Gestion du personnel ou preuve vérifiable sur le terrain', highlight: 'Factorial tient les congés, les absences et les fiches de paie en ordre. GeoTapp documente l\'intervention quand le client conteste la prestation.' },
    es: { tagline: 'Gestión de personal o prueba verificable en campo', highlight: 'Factorial mantiene en orden vacaciones, ausencias y nóminas. GeoTapp documenta la intervención cuando el cliente discute el servicio.' },
    pt: { tagline: 'Gestão do pessoal ou prova verificável no terreno', highlight: 'A Factorial mantém em ordem férias, ausências e recibos de vencimento. A GeoTapp documenta a intervenção quando o cliente contesta o serviço.' },
    nl: { tagline: 'Personeelsbeheer of controleerbaar bewijs in het veld', highlight: 'Factorial houdt verlof, afwezigheid en loonstroken op orde. GeoTapp documenteert de klus wanneer de opdrachtgever de dienst betwist.' },
    da: { tagline: 'Personalestyring eller verificerbar dokumentation i marken', highlight: 'Factorial holder styr på ferie, fravær og lønsedler. GeoTapp dokumenterer opgaven, når kunden bestrider ydelsen.' },
    sv: { tagline: 'Personalhantering eller verifierbart bevis i fält', highlight: 'Factorial håller ordning på semester, frånvaro och lönespecifikationer. GeoTapp dokumenterar uppdraget när kunden ifrågasätter tjänsten.' },
    nb: { tagline: 'HR-plattform vs feltsertifisering', highlight: 'Factorial holder orden på ferie, fravær og lønnsslipper. GeoTapp forsvarer fakturaen når oppdragsgiveren bestrider tjenesten.' },
    ru: { tagline: 'HR-платформа vs полевая сертификация', highlight: 'Factorial держит в порядке отпуска, отсутствия и расчётные листки. GeoTapp защищает счёт, когда заказчик оспаривает услугу.' },
  } as any,
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale] ?? META.en;
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: buildLocaleAlternates(locale, PATHNAME),
    openGraph: { url: buildCanonicalUrl(locale, PATHNAME), type: 'website', title: m.title, description: m.description, images: [{ url: '/og-default.png', width: 1200, height: 630, alt: m.title }] },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description },
  };
}

export default async function ConfrontoIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = COPY[locale] ?? COPY.en;

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: c.breadcrumb, item: `https://geotapp.com/${locale}${PATHNAME}` },
    ],
  };

  const homeLabel = HOME_LABEL[locale] ?? HOME_LABEL.en;

  const dynamicTitle = {
    it: '🆕 Confronto dinamico: tutti i concorrenti in una pagina',
    en: '🆕 Dynamic comparison: all competitors on one page',
    de: '🆕 Dynamischer Vergleich: alle Mitbewerber auf einer Seite',
    fr: '🆕 Comparatif dynamique : tous les concurrents sur une page',
    es: '🆕 Comparativa dinámica: todos los competidores en una página',
    nl: '🆕 Dynamische vergelijking: alle concurrenten op één pagina',
    pt: '🆕 Comparação dinâmica: todos os concorrentes numa página',
    da: '🆕 Dynamisk sammenligning: alle konkurrenter på én side',
    sv: '🆕 Dynamisk jämförelse: alla konkurrenter på en sida',
    nb: '🆕 Dynamisk sammenligning, alle konkurrenter på én side',
    ru: '🆕 Динамическое сравнение, все конкуренты на одной странице',
  }[locale.startsWith('en-') ? 'en' : locale] ?? '🆕 Dynamic comparison: all competitors on one page';

  const dynamicSubtitle = {
    it: 'Scegli un concorrente e vedi la tabella con 12 funzioni. Tutte le alternative confrontate in un solo posto.',
    en: 'Pick a competitor and see a table of 12 features. All the alternatives compared in one place.',
    de: 'Wählen Sie einen Mitbewerber und sehen Sie die Tabelle mit 12 Funktionen. Alle Alternativen an einem Ort verglichen.',
    fr: 'Choisissez un concurrent et consultez le tableau de 12 fonctionnalités. Toutes les alternatives comparées au même endroit.',
    es: 'Elige un competidor y consulta la tabla de 12 funciones. Todas las alternativas comparadas en un solo lugar.',
    nl: 'Kies een concurrent en zie de tabel met 12 functies. Alle alternatieven op één plek.',
    pt: 'Escolha um concorrente e veja a tabela com 12 funcionalidades. Todas as alternativas comparadas num só lugar.',
    da: 'Vælg en konkurrent og se tabellen med 12 funktioner. Alle alternativerne sammenlignet ét sted.',
    sv: 'Välj en konkurrent och se tabellen med 12 funktioner. Alla alternativen jämförda på ett ställe.',
    nb: 'Konkurrentvelger + tabell med 12 funksjoner oppdatert i sanntid. Alle alternativer på ett sted.',
    ru: 'Выбор конкурента + таблица из 12 функций в реальном времени. Все альтернативы в одном месте.',
  }[locale.startsWith('en-') ? 'en' : locale] ?? 'Pick a competitor and see a table of 12 features.';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="lp-l lp-confronto">
        <section className="ph">
          <div className="crumb"><div className="w">
            <Link href={`/${locale}/`}>{homeLabel}</Link> / {c.breadcrumb}
          </div></div>
          <div className="w">
            <p className="kk k"><s />{c.badge}</p>
            <h1>GeoTapp vs<br /><em>{c.title_suffix}</em></h1>
            <p className="lede">{c.intro}</p>
            <div className="acts">
              <TrialCTALink href={`/${locale}/trial/`} source="confronto_index" className="b1">{c.cta_btn}</TrialCTALink>
            </div>
          </div>
        </section>

        <section className="sec"><div className="w">
          <div className="vs">
            <Link href={`/${locale}/confronto/dinamico/`} className="r d1 hi">
              <h3><span className="live" /> {dynamicTitle}</h3>
              <p>{dynamicSubtitle}</p>
              <span className="go">&rarr;</span>
            </Link>
            {COMPARISONS.map((item: any, i: number) => {
              const loc = item[locale] ?? item.en;
              return (
                <Link
                  key={item.slug}
                  href={`/${locale}${translatePath(`/confronto/${item.slug}/`, locale as AppLocale)}`}
                  className={`r d${Math.min(i + 2, 4)}`}
                >
                  <h3>GeoTapp vs {item.competitor}</h3>
                  <p className="tag">{loc.tagline}</p>
                  <p>{loc.highlight}</p>
                  <span className="go">&rarr;</span>
                </Link>
              );
            })}
          </div>
        </div></section>

        <LNastro />

        {/* ── citati su: solo stampa vera. "Presente su" (directory) resta nel footer, non si ripete qui ── */}
        <section className="dirs">
          <div className="w"><p className="kk k r dirs-kk">{featuredLabel(locale)}</p></div>
          <div className="host">
            <FeaturedIn locale={locale} />
          </div>
        </section>

        <section className="end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="bg" src="/bg2.webp" alt="" aria-hidden="true" loading="lazy" />
          <div className="ov" />
          <div className="w">
            <h2 className="r">{c.cta_title}</h2>
            <p className="r d1">{c.cta_desc}</p>
            <div className="acts r d2">
              <TrialCTALink href={`/${locale}/trial/`} source="confronto_index" className="b1">{c.cta_btn}</TrialCTALink>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
