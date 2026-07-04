import type { Metadata } from 'next';
import { TrialCTALink } from '@/components/analytics/TrialCTALink';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-sage/';
const ARTICLE_DATE_PUBLISHED = '2026-07-02';
const ARTICLE_DATE_MODIFIED = '2026-07-02';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs Sage - Confronto 2026 | GeoTapp', description: 'GeoTapp vs Sage: due strumenti diversi. Sage gestisce contabilità, paghe e HR; GeoTapp prova il lavoro sul campo con GPS verificato, foto e report non alterabili. Spesso complementari.' },
  en: { title: 'GeoTapp vs Sage - Comparison 2026 | GeoTapp', description: 'GeoTapp vs Sage: two different tools. Sage runs accounting, payroll and HR; GeoTapp proves field work with verified GPS, photos and tamper-proof reports. Often complementary.' },
  de: { title: 'GeoTapp vs Sage - Vergleich 2026 | GeoTapp', description: 'GeoTapp vs Sage: zwei verschiedene Werkzeuge. Sage verwaltet Buchhaltung, Lohn und HR; GeoTapp belegt Außendienst-Arbeit mit verifiziertem GPS, Fotos und manipulationssicheren Berichten. Oft komplementär.' },
  fr: { title: 'GeoTapp vs Sage - Comparaison 2026 | GeoTapp', description: 'GeoTapp vs Sage : deux outils différents. Sage gère comptabilité, paie et RH ; GeoTapp prouve le travail sur le terrain avec GPS vérifié, photos et rapports infalsifiables. Souvent complémentaires.' },
  es: { title: 'GeoTapp vs Sage - Comparación 2026 | GeoTapp', description: 'GeoTapp vs Sage: dos herramientas distintas. Sage gestiona contabilidad, nóminas y RRHH; GeoTapp prueba el trabajo de campo con GPS verificado, fotos e informes inalterables. A menudo complementarios.' },
  pt: { title: 'GeoTapp vs Sage - Comparação 2026 | GeoTapp', description: 'GeoTapp vs Sage: duas ferramentas diferentes. A Sage gere contabilidade, salários e RH; a GeoTapp prova o trabalho no terreno com GPS verificado, fotos e relatórios inalteráveis. Muitas vezes complementares.' },
  nl: { title: 'GeoTapp vs Sage - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Sage: twee verschillende tools. Sage beheert boekhouding, loon en HR; GeoTapp bewijst veldwerk met geverifieerd GPS, foto\'s en manipulatiebestendige rapporten. Vaak complementair.' },
  da: { title: 'GeoTapp vs Sage - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Sage: to forskellige værktøjer. Sage styrer bogføring, løn og HR; GeoTapp beviser markarbejde med verificeret GPS, fotos og rapporter, der ikke kan ændres. Ofte komplementære.' },
  sv: { title: 'GeoTapp vs Sage - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs Sage: två olika verktyg. Sage sköter bokföring, lön och HR; GeoTapp bevisar fältarbete med verifierad GPS, foton och rapporter som inte kan ändras. Ofta komplementära.' },
  nb: { title: 'GeoTapp vs Sage - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Sage: to forskjellige verktøy. Sage styrer regnskap, lønn og HR; GeoTapp beviser feltarbeid med verifisert GPS, bilder og rapporter som ikke kan endres. Ofte komplementære.' },
  ru: { title: 'GeoTapp vs Sage, Сравнение 2026 | GeoTapp', description: 'GeoTapp vs Sage: два разных инструмента. Sage ведёт бухгалтерию, зарплату и HR; GeoTapp доказывает выездную работу проверенным GPS, фото и защищёнными отчётами. Часто дополняют друг друга.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza principale tra GeoTapp e Sage?', a: 'Sage è un gestionale: contabilità, fatturazione, paghe e, con Sage HR, gestione del personale. GeoTapp è un sistema di prova del lavoro sul campo: genera report sigillati con GPS verificato, foto e firma digitale, prove che il cliente può controllare. Sage tiene i conti e le paghe; GeoTapp dimostra cosa fa l\'operatore fuori sede.' },
    { q: 'Sage ha la rilevazione presenze?', a: 'Con il modulo Sage HR gestisce timesheet, ferie e presenze, orientate all\'amministrazione. Non produce però la prova dell\'intervento sul campo: niente GPS verificato al cantiere, report sigillati o verifica del cliente. Quel pezzo lo copre GeoTapp.' },
    { q: 'GeoTapp sostituisce Sage?', a: 'No, sono complementari. Sage resta contabilità e paghe; GeoTapp aggiunge la prova verificabile del lavoro svolto e esporta le ore già pronte per la busta paga. Molte aziende tengono Sage per l\'amministrazione e GeoTapp per gli operatori sul campo.' },
    { q: 'Sage ha un piano gratuito?', a: 'Sage è a pagamento, senza un piano gratuito pubblico per la parte gestionale. GeoTapp ha una prova gratuita e piani trasparenti, ed è modulare: accendi solo le funzioni che ti servono per il campo.' },
  ],
  en: [
    { q: 'What is the main difference between GeoTapp and Sage?', a: 'Sage is a business suite: accounting, invoicing, payroll and, with Sage HR, people management. GeoTapp is a field proof-of-work system: it generates sealed reports with verified GPS, photos and digital signature, proof clients can check. Sage keeps the books and payroll; GeoTapp proves what the operator does off-site.' },
    { q: 'Does Sage have attendance tracking?', a: 'With the Sage HR module it handles timesheets, leave and attendance, oriented to administration. But it does not produce proof of the field job: no GPS verified at the site, sealed reports or client verification. GeoTapp covers that part.' },
    { q: 'Does GeoTapp replace Sage?', a: 'No, they are complementary. Sage stays accounting and payroll; GeoTapp adds verifiable proof of completed work and exports hours ready for the payslip. Many companies keep Sage for administration and GeoTapp for field operators.' },
    { q: 'Does Sage have a free plan?', a: 'Sage is paid, with no public free plan for the business suite. GeoTapp has a free trial and transparent plans, and is modular: switch on only the features you need for the field.' },
  ],
  de: [
    { q: 'Was ist der Hauptunterschied zwischen GeoTapp und Sage?', a: 'Sage ist eine Business-Suite: Buchhaltung, Rechnungen, Lohn und, mit Sage HR, Personalverwaltung. GeoTapp ist ein Arbeitsnachweis-System für den Außendienst: es erstellt versiegelte Berichte mit verifiziertem GPS, Fotos und digitaler Signatur, Beweise, die der Kunde prüfen kann. Sage führt Bücher und Lohn; GeoTapp belegt, was die Kraft draußen tut.' },
    { q: 'Hat Sage eine Anwesenheitserfassung?', a: 'Mit dem Modul Sage HR verwaltet es Zeiterfassung, Urlaub und Anwesenheit, verwaltungsorientiert. Es liefert aber keinen Nachweis des Außeneinsatzes: kein am Einsatzort verifiziertes GPS, keine versiegelten Berichte oder Kundenprüfung. Diesen Teil deckt GeoTapp ab.' },
    { q: 'Ersetzt GeoTapp Sage?', a: 'Nein, sie sind komplementär. Sage bleibt Buchhaltung und Lohn; GeoTapp ergänzt den überprüfbaren Nachweis der geleisteten Arbeit und exportiert Stunden bereit für die Lohnabrechnung. Viele Firmen behalten Sage für die Verwaltung und GeoTapp für den Außendienst.' },
    { q: 'Hat Sage einen kostenlosen Plan?', a: 'Sage ist kostenpflichtig, ohne öffentlichen Free Plan für die Business-Suite. GeoTapp bietet eine kostenlose Testphase und transparente Pläne und ist modular: aktivieren Sie nur, was Sie für den Außendienst brauchen.' },
  ],
  fr: [
    { q: 'Quelle est la principale différence entre GeoTapp et Sage ?', a: 'Sage est une suite de gestion : comptabilité, facturation, paie et, avec Sage HR, gestion du personnel. GeoTapp est un système de preuve du travail sur le terrain : il génère des rapports scellés avec GPS vérifié, photos et signature numérique, des preuves que le client peut contrôler. Sage tient les comptes et la paie ; GeoTapp prouve ce que l\'opérateur fait hors site.' },
    { q: 'Sage a-t-il le suivi des présences ?', a: 'Avec le module Sage HR, il gère feuilles de temps, congés et présences, orientés administration. Mais il ne produit pas la preuve de l\'intervention terrain : pas de GPS vérifié sur le chantier, de rapports scellés ni de vérification client. GeoTapp couvre cette partie.' },
    { q: 'GeoTapp remplace-t-il Sage ?', a: 'Non, ils sont complémentaires. Sage reste comptabilité et paie ; GeoTapp ajoute la preuve vérifiable du travail effectué et exporte les heures prêtes pour la fiche de paie. Beaucoup d\'entreprises gardent Sage pour l\'administration et GeoTapp pour les opérateurs terrain.' },
    { q: 'Sage a-t-il un plan gratuit ?', a: 'Sage est payant, sans plan gratuit public pour la suite de gestion. GeoTapp propose un essai gratuit et des plans transparents, et il est modulaire : activez seulement les fonctions dont vous avez besoin pour le terrain.' },
  ],
  es: [
    { q: '¿Cuál es la diferencia principal entre GeoTapp y Sage?', a: 'Sage es una suite de gestión: contabilidad, facturación, nóminas y, con Sage HR, gestión de personal. GeoTapp es un sistema de prueba del trabajo de campo: genera informes sellados con GPS verificado, fotos y firma digital, pruebas que el cliente puede comprobar. Sage lleva las cuentas y las nóminas; GeoTapp demuestra qué hace el operario fuera de la oficina.' },
    { q: '¿Tiene Sage control de asistencia?', a: 'Con el módulo Sage HR gestiona partes de horas, vacaciones y asistencia, orientados a la administración. Pero no produce la prueba de la intervención de campo: sin GPS verificado en la obra, informes sellados ni verificación del cliente. GeoTapp cubre esa parte.' },
    { q: '¿GeoTapp sustituye a Sage?', a: 'No, son complementarios. Sage sigue siendo contabilidad y nóminas; GeoTapp añade la prueba verificable del trabajo realizado y exporta las horas listas para la nómina. Muchas empresas mantienen Sage para administración y GeoTapp para los operarios de campo.' },
    { q: '¿Sage tiene un plan gratuito?', a: 'Sage es de pago, sin plan gratuito público para la suite de gestión. GeoTapp tiene una prueba gratuita y planes transparentes, y es modular: activa solo las funciones que necesitas para el campo.' },
  ],
  pt: [
    { q: 'Qual é a diferença principal entre GeoTapp e Sage?', a: 'A Sage é uma suite de gestão: contabilidade, faturação, salários e, com a Sage HR, gestão de pessoal. A GeoTapp é um sistema de prova do trabalho no terreno: gera relatórios selados com GPS verificado, fotos e assinatura digital, provas que o cliente pode verificar. A Sage trata das contas e dos salários; a GeoTapp prova o que o operador faz fora do escritório.' },
    { q: 'A Sage tem controlo de presenças?', a: 'Com o módulo Sage HR gere folhas de horas, férias e presenças, orientados à administração. Mas não produz a prova da intervenção no terreno: sem GPS verificado na obra, relatórios selados ou verificação do cliente. A GeoTapp cobre essa parte.' },
    { q: 'A GeoTapp substitui a Sage?', a: 'Não, são complementares. A Sage continua contabilidade e salários; a GeoTapp acrescenta a prova verificável do trabalho realizado e exporta as horas prontas para o recibo. Muitas empresas mantêm a Sage para administração e a GeoTapp para os operadores no terreno.' },
    { q: 'A Sage tem plano gratuito?', a: 'A Sage é paga, sem plano gratuito público para a suite de gestão. A GeoTapp tem um teste gratuito e planos transparentes, e é modular: ativa só as funções de que precisa para o terreno.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Sage?', a: 'Sage is een bedrijfssuite: boekhouding, facturatie, loon en, met Sage HR, personeelsbeheer. GeoTapp is een bewijs-van-werk-systeem voor het veld: het genereert verzegelde rapporten met geverifieerd GPS, foto\'s en digitale handtekening, bewijs dat de klant kan controleren. Sage houdt de boeken en het loon bij; GeoTapp bewijst wat de medewerker buiten kantoor doet.' },
    { q: 'Heeft Sage urenregistratie?', a: 'Met de Sage HR-module beheert het urenstaten, verlof en aanwezigheid, gericht op administratie. Maar het levert geen bewijs van de veldopdracht: geen GPS geverifieerd op locatie, verzegelde rapporten of klantverificatie. GeoTapp dekt dat deel.' },
    { q: 'Vervangt GeoTapp Sage?', a: 'Nee, ze zijn complementair. Sage blijft boekhouding en loon; GeoTapp voegt verifieerbaar bewijs van uitgevoerd werk toe en exporteert uren klaar voor de loonstrook. Veel bedrijven houden Sage voor administratie en GeoTapp voor de buitendienst.' },
    { q: 'Heeft Sage een gratis plan?', a: 'Sage is betaald, zonder openbaar gratis plan voor de bedrijfssuite. GeoTapp heeft een gratis proefperiode en transparante plannen, en is modulair: schakel alleen de functies in die u voor het veld nodig hebt.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Sage?', a: 'Sage er en forretningssuite: bogføring, fakturering, løn og, med Sage HR, personaleadministration. GeoTapp er et arbejdsbevis-system til marken: det genererer forseglede rapporter med verificeret GPS, fotos og digital signatur, beviser kunden kan kontrollere. Sage fører regnskab og løn; GeoTapp beviser, hvad medarbejderen gør ude.' },
    { q: 'Har Sage fremmøderegistrering?', a: 'Med Sage HR-modulet styrer det timesedler, ferie og fremmøde, administrationsorienteret. Men det producerer ikke bevis for markopgaven: intet GPS verificeret på stedet, forseglede rapporter eller kundeverificering. GeoTapp dækker den del.' },
    { q: 'Erstatter GeoTapp Sage?', a: 'Nej, de er komplementære. Sage forbliver bogføring og løn; GeoTapp tilføjer verificerbart bevis for udført arbejde og eksporterer timer klar til lønsedlen. Mange virksomheder beholder Sage til administration og GeoTapp til medarbejdere i marken.' },
    { q: 'Har Sage en gratis plan?', a: 'Sage er betalt, uden en offentlig gratis plan for forretningssuiten. GeoTapp har en gratis prøveperiode og gennemsigtige planer og er modulær: aktivér kun de funktioner, du har brug for i marken.' },
  ],
  sv: [
    { q: 'Vad är den viktigaste skillnaden mellan GeoTapp och Sage?', a: 'Sage är en affärssuite: bokföring, fakturering, lön och, med Sage HR, personalhantering. GeoTapp är ett arbetsbevis-system för fält: det skapar förseglade rapporter med verifierad GPS, foton och digital signatur, bevis som kunden kan kontrollera. Sage sköter böcker och lön; GeoTapp bevisar vad medarbetaren gör ute.' },
    { q: 'Har Sage närvaroregistrering?', a: 'Med Sage HR-modulen hanterar det tidrapporter, ledighet och närvaro, administrationsinriktat. Men det producerar inte bevis på fältuppdraget: ingen GPS verifierad på plats, förseglade rapporter eller kundverifiering. GeoTapp täcker den delen.' },
    { q: 'Ersätter GeoTapp Sage?', a: 'Nej, de är komplementära. Sage förblir bokföring och lön; GeoTapp lägger till verifierbart bevis på utfört arbete och exporterar timmar redo för lönebeskedet. Många företag behåller Sage för administration och GeoTapp för fältpersonal.' },
    { q: 'Har Sage en gratisplan?', a: 'Sage är betald, utan en offentlig gratisplan för affärssuiten. GeoTapp har en gratis testperiod och transparenta planer och är modulärt: aktivera bara de funktioner du behöver för fältet.' },
  ],
  nb: [
    { q: 'Hva er den viktigste forskjellen mellom GeoTapp og Sage?', a: 'Sage er en forretningssuite: regnskap, fakturering, lønn og, med Sage HR, personaladministrasjon. GeoTapp er et arbeidsbevis-system for felt: det lager forseglede rapporter med verifisert GPS, bilder og digital signatur, bevis kunden kan kontrollere. Sage fører regnskap og lønn; GeoTapp beviser hva medarbeideren gjør ute.' },
    { q: 'Har Sage oppmøteregistrering?', a: 'Med Sage HR-modulen styrer det timelister, ferie og oppmøte, administrasjonsrettet. Men det produserer ikke bevis på feltoppdraget: ingen GPS verifisert på stedet, forseglede rapporter eller kundeverifisering. GeoTapp dekker den delen.' },
    { q: 'Erstatter GeoTapp Sage?', a: 'Nei, de er komplementære. Sage forblir regnskap og lønn; GeoTapp legger til verifiserbart bevis på utført arbeid og eksporterer timer klare for lønnsslippen. Mange bedrifter beholder Sage til administrasjon og GeoTapp til feltarbeidere.' },
    { q: 'Har Sage en gratis plan?', a: 'Sage er betalt, uten en offentlig gratis plan for forretningssuiten. GeoTapp har en gratis prøveperiode og transparente planer og er modulær: aktiver bare funksjonene du trenger i felt.' },
  ],
  ru: [
    { q: 'В чём главное различие между GeoTapp и Sage?', a: 'Sage, это бизнес-система: бухгалтерия, выставление счетов, зарплата и, с Sage HR, управление персоналом. GeoTapp, это система доказательства выездной работы: она формирует защищённые отчёты с проверенным GPS, фото и цифровой подписью, доказательства, которые заказчик может проверить. Sage ведёт учёт и зарплату; GeoTapp доказывает, что сотрудник делает вне офиса.' },
    { q: 'Есть ли у Sage учёт присутствия?', a: 'С модулем Sage HR он ведёт табели, отпуска и присутствие, с уклоном в администрирование. Но он не даёт доказательства выездного задания: нет GPS, проверенного на месте, защищённых отчётов или проверки заказчиком. Эту часть закрывает GeoTapp.' },
    { q: 'Заменяет ли GeoTapp Sage?', a: 'Нет, они дополняют друг друга. Sage остаётся бухгалтерией и зарплатой; GeoTapp добавляет проверяемое доказательство выполненной работы и выгружает часы, готовые для расчётного листа. Многие компании держат Sage для администрации и GeoTapp для выездных сотрудников.' },
    { q: 'Есть ли у Sage бесплатный тариф?', a: 'Sage платный, без публичного бесплатного тарифа для бизнес-системы. У GeoTapp есть бесплатный пробный период и прозрачные тарифы, и он модульный: включайте только нужные для поля функции.' },
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
const ROWS_COMP =  [false, false, false, false, true, true, false, true, false, false, false, false];

// Riassunto neutro ed estraibile, subito sotto la tabella: frase fattuale citabile
// dai motori AI senza doverla ricostruire dalla tabella. Neutro per scelta.
const TABLE_TAKEAWAY: Record<string, string> = {
  it: 'In breve: Sage gestisce contabilità, fatturazione e paghe; GeoTapp prova il lavoro svolto sul campo con GPS verificato, report sigillato e verifica del cliente. Spesso si affiancano.',
  en: 'In short: Sage runs accounting, invoicing and payroll; GeoTapp proves field work with verified GPS, sealed reports and client verification. They often work side by side.',
  de: 'Kurz gesagt: Sage verwaltet Buchhaltung, Rechnungen und Lohn; GeoTapp belegt die Außenarbeit mit verifiziertem GPS, versiegelten Berichten und Kundenprüfung. Oft ergänzen sie sich.',
  fr: 'En bref : Sage gère comptabilité, facturation et paie ; GeoTapp prouve le travail terrain avec GPS vérifié, rapports scellés et vérification client. Ils fonctionnent souvent ensemble.',
  es: 'En resumen: Sage gestiona contabilidad, facturación y nóminas; GeoTapp prueba el trabajo de campo con GPS verificado, informes sellados y verificación del cliente. A menudo se complementan.',
  pt: 'Em resumo: a Sage gere contabilidade, faturação e salários; a GeoTapp prova o trabalho no terreno com GPS verificado, relatórios selados e verificação do cliente. Muitas vezes complementam-se.',
  nl: 'Kort gezegd: Sage beheert boekhouding, facturatie en loon; GeoTapp bewijst veldwerk met geverifieerd GPS, verzegelde rapporten en klantverificatie. Ze werken vaak samen.',
  da: 'Kort sagt: Sage styrer bogføring, fakturering og løn; GeoTapp beviser markarbejde med verificeret GPS, forseglede rapporter og kundeverificering. De supplerer ofte hinanden.',
  sv: 'Kort sagt: Sage sköter bokföring, fakturering och lön; GeoTapp bevisar fältarbete med verifierad GPS, förseglade rapporter och kundverifiering. De kompletterar ofta varandra.',
  nb: 'Kort sagt: Sage styrer regnskap, fakturering og lønn; GeoTapp beviser feltarbeid med verifisert GPS, forseglede rapporter og kundeverifisering. De utfyller ofte hverandre.',
  ru: 'Коротко: Sage ведёт бухгалтерию, счета и зарплату; GeoTapp доказывает выездную работу проверенным GPS, защищёнными отчётами и проверкой заказчиком. Часто дополняют друг друга.',
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
  it: '* Per legge (GDPR Art. 13 e, in Italia, Art. 4 Statuto dei Lavoratori), ogni dipendente deve firmare un\'informativa privacy prima di essere geolocalizzato. La maggior parte dei software non lo gestisce: il rischio legale resta al titolare. GeoTapp genera automaticamente l\'informativa personalizzata, la fa firmare digitalmente al dipendente e blocca l\'accesso GPS finché non è firmata.',
  en: '* By law (GDPR Art. 13, and in Italy Art. 4 of the Workers\' Statute), every employee must sign a privacy notice before being geolocated. Most software does not handle this: the legal risk stays with the employer. GeoTapp automatically generates the personalized notice, has the employee sign it digitally, and blocks GPS access until it is signed.',
  de: '* Gesetzlich (DSGVO Art. 13, in Italien Art. 4 Arbeitnehmerstatut) muss jeder Mitarbeiter vor der Geolokalisierung eine Datenschutzerklärung unterschreiben. Die meiste Software regelt das nicht: das rechtliche Risiko bleibt beim Arbeitgeber. GeoTapp erstellt die personalisierte Erklärung automatisch, lässt sie digital unterschreiben und sperrt den GPS-Zugriff, bis sie signiert ist.',
  fr: '* Par la loi (RGPD Art. 13, et en Italie Art. 4 du Statut des travailleurs), chaque employé doit signer un avis de confidentialité avant d\'être géolocalisé. La plupart des logiciels ne le gèrent pas : le risque juridique reste à l\'employeur. GeoTapp génère automatiquement l\'avis personnalisé, le fait signer numériquement et bloque l\'accès GPS tant qu\'il n\'est pas signé.',
  es: '* Por ley (RGPD Art. 13, y en Italia Art. 4 del Estatuto de los Trabajadores), cada empleado debe firmar un aviso de privacidad antes de ser geolocalizado. La mayoría del software no lo gestiona: el riesgo legal queda con el empleador. GeoTapp genera automáticamente el aviso personalizado, lo hace firmar digitalmente y bloquea el acceso GPS hasta que esté firmado.',
  pt: '* Por lei (RGPD Art. 13, e em Itália Art. 4 do Estatuto dos Trabalhadores), cada funcionário deve assinar um aviso de privacidade antes de ser geolocalizado. A maioria do software não trata disto: o risco legal fica com o empregador. A GeoTapp gera automaticamente o aviso personalizado, fá-lo assinar digitalmente e bloqueia o acesso GPS até estar assinado.',
  nl: '* Volgens de wet (AVG Art. 13, en in Italië Art. 4 van het Werknemersstatuut) moet elke werknemer een privacyverklaring tekenen voordat hij wordt gelokaliseerd. De meeste software regelt dit niet: het juridische risico blijft bij de werkgever. GeoTapp genereert automatisch de gepersonaliseerde verklaring, laat die digitaal tekenen en blokkeert GPS-toegang tot ze is getekend.',
  da: '* Ifølge loven (GDPR Art. 13, og i Italien Art. 4 i medarbejderstatutten) skal hver medarbejder underskrive en privatlivserklæring, før vedkommende geolokaliseres. De fleste programmer håndterer ikke dette: den juridiske risiko bliver hos arbejdsgiveren. GeoTapp genererer automatisk den personlige erklæring, får den underskrevet digitalt og blokerer GPS-adgang, indtil den er underskrevet.',
  sv: '* Enligt lag (GDPR Art. 13, och i Italien Art. 4 i arbetstagarstadgan) måste varje anställd underteckna ett integritetsmeddelande innan geolokalisering. De flesta program hanterar inte detta: den juridiska risken stannar hos arbetsgivaren. GeoTapp skapar automatiskt det personliga meddelandet, låter det signeras digitalt och blockerar GPS-åtkomst tills det är signerat.',
  nb: '* Ifølge loven (GDPR Art. 13, og i Italia Art. 4 i arbeidstakerstatutten) må hver ansatt signere en personvernerklæring før geolokalisering. De fleste programmer håndterer ikke dette: den juridiske risikoen blir hos arbeidsgiveren. GeoTapp lager automatisk den personlige erklæringen, får den signert digitalt og blokkerer GPS-tilgang til den er signert.',
  ru: '* По закону (GDPR ст. 13, а в Италии ст. 4 Статута трудящихся) каждый сотрудник должен подписать уведомление о конфиденциальности до геолокации. Большинство программ этого не обеспечивают: юридический риск остаётся на работодателе. GeoTapp автоматически формирует персональное уведомление, даёт подписать его цифровой подписью и блокирует доступ к GPS, пока оно не подписано.',
};

const T: Record<string, Copy> = {
  it: {
    badge: 'Confronto Software', h1sub: 'gestionale e paghe o prova del lavoro sul campo?',
    desc: 'Sage gestisce contabilità, paghe e HR. GeoTapp prova cosa fa l\'operatore fuori sede, con GPS verificato e foto. Due strumenti diversi, spesso complementari.',
    summary: 'In sintesi:',
    summaryText: 'Sage è forte su contabilità, fatturazione e paghe, con Sage HR per il personale. Non è pensato per dimostrare l\'intervento sul campo: niente GPS verificato, report sigillati o verifica del cliente. Per operatori fuori sede, GeoTapp copre quel pezzo, e le ore escono pronte per le paghe.',
    footnote: FOOTNOTE.it,
    features: 'Confronto funzionalità chiave', feat: 'Funzionalità',
    diff: 'Gestionale/paghe vs prova del lavoro sul campo',
    geo: ['GPS verificato automaticamente, non inserito a mano','Report sigillati con hash crittografico alla chiusura dell\'intervento','Prove fotografiche integrate con GPS e timestamp','Il committente verifica l\'autenticità in autonomia','Progettato per operatori sul campo, non per l\'amministrazione'],
    comp: ['Contabilità, fatturazione e paghe robuste','Sage HR per timesheet, ferie e presenze','App mobile per l\'amministrazione del personale','Nessuna prova sigillata dell\'intervento sul campo','Nessun GPS verificato, foto-prova o verifica del cliente'],
    useCasesTitle: 'Chi dovrebbe affiancare GeoTapp a un gestionale come Sage',
    useCases: ['Imprese di pulizie e facility management con clienti esigenti','Manutentori e installatori che devono difendere le ore fatturate','Aziende con contabilità/paghe in Sage ma squadre sul campo','Chi ha già avuto contestazioni su interventi non riconosciuti','Aziende con più squadre distribuite su cantieri diversi'],
    cta: 'Vuoi vedere la differenza in pratica?',
    ctaDesc: 'Ti mostriamo come un intervento diventa una prova verificabile, in 20 minuti, senza impegno.',
    ctaBtn: 'Inizia subito gratuitamente!',
  },
  en: {
    badge: 'Software Comparison', h1sub: 'business suite and payroll or proof of field work?',
    desc: 'Sage runs accounting, payroll and HR. GeoTapp proves what the operator does off-site, with verified GPS and photos. Two different tools, often complementary.',
    summary: 'In short:',
    summaryText: 'Sage is strong on accounting, invoicing and payroll, with Sage HR for staff. It is not built to prove field jobs: no verified GPS, sealed reports or client verification. For off-site operators, GeoTapp covers that part, and hours come out ready for payroll.',
    footnote: FOOTNOTE.en,
    features: 'Key feature comparison', feat: 'Feature',
    diff: 'Business suite/payroll vs proof of field work',
    geo: ['GPS verified automatically, not typed in by hand','Reports sealed with a cryptographic hash at job close','Photo evidence built in with GPS and timestamp','The client verifies authenticity independently','Built for field operators, not administration'],
    comp: ['Solid accounting, invoicing and payroll','Sage HR for timesheets, leave and attendance','Mobile app for staff administration','No sealed proof of the field job','No verified GPS, photo proof or client verification'],
    useCasesTitle: 'Who should pair GeoTapp with a business suite like Sage',
    useCases: ['Cleaning and facility management companies with demanding clients','Maintenance crews and installers who must defend billed hours','Companies running accounting/payroll in Sage but with field crews','Anyone who has faced disputes over unrecognized jobs','Companies with several crews across different sites'],
    cta: 'Want to see the difference in practice?',
    ctaDesc: 'We show you how a job becomes verifiable proof, in 20 minutes, no commitment.',
    ctaBtn: 'Start free now!',
  },
  de: {
    badge: 'Software-Vergleich', h1sub: 'Business-Suite und Lohn oder Nachweis der Außenarbeit?',
    desc: 'Sage verwaltet Buchhaltung, Lohn und HR. GeoTapp belegt, was die Kraft draußen tut, mit verifiziertem GPS und Fotos. Zwei verschiedene Werkzeuge, oft komplementär.',
    summary: 'Kurz gesagt:',
    summaryText: 'Sage ist stark bei Buchhaltung, Rechnungen und Lohn, mit Sage HR für das Personal. Es ist nicht gemacht, um Außeneinsätze zu belegen: kein verifiziertes GPS, keine versiegelten Berichte oder Kundenprüfung. Für Außenkräfte deckt GeoTapp diesen Teil ab, und die Stunden kommen bereit für die Lohnabrechnung heraus.',
    footnote: FOOTNOTE.de,
    features: 'Vergleich der Kernfunktionen', feat: 'Funktion',
    diff: 'Business-Suite/Lohn vs Nachweis der Außenarbeit',
    geo: ['GPS automatisch verifiziert, nicht von Hand eingetragen','Berichte bei Einsatzabschluss mit kryptographischem Hash versiegelt','Fotobeweise integriert mit GPS und Zeitstempel','Der Kunde prüft die Echtheit eigenständig','Für Außendienstkräfte gemacht, nicht für die Verwaltung'],
    comp: ['Solide Buchhaltung, Rechnungen und Lohn','Sage HR für Zeiterfassung, Urlaub und Anwesenheit','Mobile App für die Personalverwaltung','Kein versiegelter Nachweis des Außeneinsatzes','Kein verifiziertes GPS, Fotobeweis oder Kundenprüfung'],
    useCasesTitle: 'Wer GeoTapp mit einer Business-Suite wie Sage kombinieren sollte',
    useCases: ['Reinigungs- und Facility-Management-Firmen mit anspruchsvollen Kunden','Wartungsteams und Installateure, die abgerechnete Stunden verteidigen müssen','Unternehmen mit Buchhaltung/Lohn in Sage, aber Feldteams','Wer schon Streit über nicht anerkannte Einsätze hatte','Unternehmen mit mehreren Teams an verschiedenen Standorten'],
    cta: 'Den Unterschied in der Praxis sehen?',
    ctaDesc: 'Wir zeigen Ihnen in 20 Minuten, wie ein Einsatz zu einem überprüfbaren Beweis wird, unverbindlich.',
    ctaBtn: 'Jetzt kostenlos starten!',
  },
  fr: {
    badge: 'Comparaison de logiciels', h1sub: 'gestion et paie ou preuve du travail terrain ?',
    desc: 'Sage gère comptabilité, paie et RH. GeoTapp prouve ce que l\'opérateur fait hors site, avec GPS vérifié et photos. Deux outils différents, souvent complémentaires.',
    summary: 'En bref :',
    summaryText: 'Sage est fort en comptabilité, facturation et paie, avec Sage HR pour le personnel. Il n\'est pas conçu pour prouver les interventions terrain : pas de GPS vérifié, de rapports scellés ni de vérification client. Pour les opérateurs hors site, GeoTapp couvre cette partie, et les heures sortent prêtes pour la paie.',
    footnote: FOOTNOTE.fr,
    features: 'Comparaison des fonctionnalités clés', feat: 'Fonctionnalité',
    diff: 'Gestion/paie vs preuve du travail terrain',
    geo: ['GPS vérifié automatiquement, non saisi à la main','Rapports scellés par un hachage cryptographique à la clôture','Preuves photographiques intégrées avec GPS et horodatage','Le client vérifie l\'authenticité en toute autonomie','Conçu pour les opérateurs terrain, pas l\'administration'],
    comp: ['Comptabilité, facturation et paie solides','Sage HR pour feuilles de temps, congés et présences','Application mobile pour l\'administration du personnel','Aucune preuve scellée de l\'intervention terrain','Aucun GPS vérifié, preuve photo ni vérification client'],
    useCasesTitle: 'Qui devrait associer GeoTapp à une suite de gestion comme Sage',
    useCases: ['Entreprises de nettoyage et facility management avec clients exigeants','Agents de maintenance et installateurs qui doivent défendre les heures facturées','Entreprises avec comptabilité/paie dans Sage mais équipes terrain','Ceux qui ont déjà eu des litiges sur des interventions non reconnues','Entreprises avec plusieurs équipes sur des chantiers différents'],
    cta: 'Voir la différence en pratique ?',
    ctaDesc: 'Nous vous montrons comment une intervention devient une preuve vérifiable, en 20 minutes, sans engagement.',
    ctaBtn: 'Commencez gratuitement !',
  },
  es: {
    badge: 'Comparación de software', h1sub: '¿gestión y nóminas o prueba del trabajo de campo?',
    desc: 'Sage gestiona contabilidad, nóminas y RRHH. GeoTapp prueba qué hace el operario fuera de la oficina, con GPS verificado y fotos. Dos herramientas distintas, a menudo complementarias.',
    summary: 'En resumen:',
    summaryText: 'Sage es fuerte en contabilidad, facturación y nóminas, con Sage HR para el personal. No está pensado para probar las intervenciones de campo: sin GPS verificado, informes sellados ni verificación del cliente. Para operarios fuera de sede, GeoTapp cubre esa parte, y las horas salen listas para nóminas.',
    footnote: FOOTNOTE.es,
    features: 'Comparación de funciones clave', feat: 'Función',
    diff: 'Gestión/nóminas vs prueba del trabajo de campo',
    geo: ['GPS verificado automáticamente, no introducido a mano','Informes sellados con hash criptográfico al cerrar la intervención','Pruebas fotográficas integradas con GPS y marca de tiempo','El cliente verifica la autenticidad por sí mismo','Diseñado para operarios de campo, no para la administración'],
    comp: ['Contabilidad, facturación y nóminas sólidas','Sage HR para partes de horas, vacaciones y asistencia','App móvil para la administración del personal','Sin prueba sellada de la intervención de campo','Sin GPS verificado, prueba fotográfica ni verificación del cliente'],
    useCasesTitle: 'Quién debería combinar GeoTapp con una suite como Sage',
    useCases: ['Empresas de limpieza y facility management con clientes exigentes','Técnicos de mantenimiento e instaladores que deben defender las horas facturadas','Empresas con contabilidad/nóminas en Sage pero equipos de campo','Quien ya ha tenido reclamaciones por intervenciones no reconocidas','Empresas con varios equipos en obras distintas'],
    cta: '¿Quieres ver la diferencia en la práctica?',
    ctaDesc: 'Te mostramos cómo una intervención se convierte en prueba verificable, en 20 minutos, sin compromiso.',
    ctaBtn: '¡Empieza gratis ahora!',
  },
  pt: {
    badge: 'Comparação de software', h1sub: 'gestão e salários ou prova do trabalho no terreno?',
    desc: 'A Sage gere contabilidade, salários e RH. A GeoTapp prova o que o operador faz fora do escritório, com GPS verificado e fotos. Duas ferramentas diferentes, muitas vezes complementares.',
    summary: 'Em resumo:',
    summaryText: 'A Sage é forte em contabilidade, faturação e salários, com a Sage HR para o pessoal. Não foi feita para provar as intervenções no terreno: sem GPS verificado, relatórios selados ou verificação do cliente. Para operadores fora de sede, a GeoTapp cobre essa parte, e as horas saem prontas para salários.',
    footnote: FOOTNOTE.pt,
    features: 'Comparação de funcionalidades-chave', feat: 'Funcionalidade',
    diff: 'Gestão/salários vs prova do trabalho no terreno',
    geo: ['GPS verificado automaticamente, não inserido à mão','Relatórios selados com hash criptográfico ao fechar a intervenção','Provas fotográficas integradas com GPS e data/hora','O cliente verifica a autenticidade sozinho','Concebido para operadores no terreno, não para a administração'],
    comp: ['Contabilidade, faturação e salários robustos','Sage HR para folhas de horas, férias e presenças','App móvel para a administração do pessoal','Sem prova selada da intervenção no terreno','Sem GPS verificado, prova fotográfica ou verificação do cliente'],
    useCasesTitle: 'Quem deve combinar a GeoTapp com uma suite como a Sage',
    useCases: ['Empresas de limpeza e facility management com clientes exigentes','Equipas de manutenção e instaladores que têm de defender as horas faturadas','Empresas com contabilidade/salários na Sage mas equipas no terreno','Quem já teve contestações sobre intervenções não reconhecidas','Empresas com várias equipas em obras diferentes'],
    cta: 'Quer ver a diferença na prática?',
    ctaDesc: 'Mostramos-lhe como uma intervenção se torna prova verificável, em 20 minutos, sem compromisso.',
    ctaBtn: 'Comece grátis agora!',
  },
  nl: {
    badge: 'Softwarevergelijking', h1sub: 'bedrijfssuite en loon of bewijs van veldwerk?',
    desc: 'Sage beheert boekhouding, loon en HR. GeoTapp bewijst wat de medewerker buiten kantoor doet, met geverifieerd GPS en foto\'s. Twee verschillende tools, vaak complementair.',
    summary: 'Kort gezegd:',
    summaryText: 'Sage is sterk in boekhouding, facturatie en loon, met Sage HR voor personeel. Het is niet gebouwd om veldopdrachten te bewijzen: geen geverifieerd GPS, verzegelde rapporten of klantverificatie. Voor medewerkers buiten kantoor dekt GeoTapp dat deel, en de uren komen klaar voor de loonadministratie eruit.',
    footnote: FOOTNOTE.nl,
    features: 'Vergelijking kernfuncties', feat: 'Functie',
    diff: 'Bedrijfssuite/loon vs bewijs van veldwerk',
    geo: ['GPS automatisch geverifieerd, niet met de hand ingevoerd','Rapporten verzegeld met een cryptografische hash bij afsluiting','Fotobewijs ingebouwd met GPS en tijdstempel','De klant verifieert de echtheid zelf','Gebouwd voor buitendienst, niet voor administratie'],
    comp: ['Solide boekhouding, facturatie en loon','Sage HR voor urenstaten, verlof en aanwezigheid','Mobiele app voor personeelsadministratie','Geen verzegeld bewijs van de veldopdracht','Geen geverifieerd GPS, fotobewijs of klantverificatie'],
    useCasesTitle: 'Wie GeoTapp zou moeten combineren met een suite als Sage',
    useCases: ['Schoonmaak- en facilitybedrijven met veeleisende klanten','Onderhoudsploegen en installateurs die gefactureerde uren moeten verdedigen','Bedrijven met boekhouding/loon in Sage maar ploegen in het veld','Wie al geschillen had over niet-erkende opdrachten','Bedrijven met meerdere ploegen op verschillende locaties'],
    cta: 'Het verschil in de praktijk zien?',
    ctaDesc: 'We laten u in 20 minuten zien hoe een opdracht verifieerbaar bewijs wordt, vrijblijvend.',
    ctaBtn: 'Begin nu gratis!',
  },
  da: {
    badge: 'Softwaresammenligning', h1sub: 'forretningssuite og løn eller bevis for markarbejde?',
    desc: 'Sage styrer bogføring, løn og HR. GeoTapp beviser, hvad medarbejderen gør ude, med verificeret GPS og fotos. To forskellige værktøjer, ofte komplementære.',
    summary: 'Kort sagt:',
    summaryText: 'Sage er stærk til bogføring, fakturering og løn, med Sage HR til personalet. Den er ikke bygget til at bevise markopgaver: intet verificeret GPS, forseglede rapporter eller kundeverificering. For udekørende medarbejdere dækker GeoTapp den del, og timerne kommer klar til løn.',
    footnote: FOOTNOTE.da,
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion',
    diff: 'Forretningssuite/løn vs bevis for markarbejde',
    geo: ['GPS verificeret automatisk, ikke indtastet manuelt','Rapporter forseglet med kryptografisk hash ved opgaveafslutning','Fotobeviser indbygget med GPS og tidsstempel','Kunden verificerer ægtheden selv','Bygget til medarbejdere i marken, ikke administrationen'],
    comp: ['Solid bogføring, fakturering og løn','Sage HR til timesedler, ferie og fremmøde','Mobilapp til personaleadministration','Intet forseglet bevis for markopgaven','Intet verificeret GPS, fotobevis eller kundeverificering'],
    useCasesTitle: 'Hvem bør kombinere GeoTapp med en suite som Sage',
    useCases: ['Rengørings- og facility management-firmaer med krævende kunder','Vedligeholdelseshold og installatører, der skal forsvare fakturerede timer','Virksomheder med bogføring/løn i Sage men hold i marken','Dem, der allerede har haft tvister om ikke-anerkendte opgaver','Virksomheder med flere hold på forskellige lokationer'],
    cta: 'Vil du se forskellen i praksis?',
    ctaDesc: 'Vi viser dig på 20 minutter, hvordan en opgave bliver til verificerbart bevis, uforpligtende.',
    ctaBtn: 'Kom gratis i gang nu!',
  },
  sv: {
    badge: 'Programvarujämförelse', h1sub: 'affärssuite och lön eller bevis på fältarbete?',
    desc: 'Sage sköter bokföring, lön och HR. GeoTapp bevisar vad medarbetaren gör ute, med verifierad GPS och foton. Två olika verktyg, ofta komplementära.',
    summary: 'Kort sagt:',
    summaryText: 'Sage är stark på bokföring, fakturering och lön, med Sage HR för personalen. Den är inte byggd för att bevisa fältuppdrag: ingen verifierad GPS, förseglade rapporter eller kundverifiering. För fältpersonal täcker GeoTapp den delen, och timmarna kommer ut redo för lön.',
    footnote: FOOTNOTE.sv,
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion',
    diff: 'Affärssuite/lön vs bevis på fältarbete',
    geo: ['GPS verifierad automatiskt, inte inskriven för hand','Rapporter förseglade med kryptografisk hash vid avslut','Fotobevis inbyggda med GPS och tidsstämpel','Kunden verifierar äktheten själv','Byggd för fältpersonal, inte administrationen'],
    comp: ['Solid bokföring, fakturering och lön','Sage HR för tidrapporter, ledighet och närvaro','Mobilapp för personaladministration','Inget förseglat bevis på fältuppdraget','Ingen verifierad GPS, fotobevis eller kundverifiering'],
    useCasesTitle: 'Vem bör kombinera GeoTapp med en suite som Sage',
    useCases: ['Städ- och facility management-företag med krävande kunder','Underhållsteam och installatörer som måste försvara fakturerade timmar','Företag med bokföring/lön i Sage men fältteam','De som redan haft tvister om icke-erkända uppdrag','Företag med flera team på olika platser'],
    cta: 'Vill du se skillnaden i praktiken?',
    ctaDesc: 'Vi visar dig på 20 minuter hur ett uppdrag blir verifierbart bevis, utan förpliktelser.',
    ctaBtn: 'Kom igång gratis nu!',
  },
  nb: {
    badge: 'Programvaresammenligning', h1sub: 'forretningssuite og lønn eller bevis på feltarbeid?',
    desc: 'Sage styrer regnskap, lønn og HR. GeoTapp beviser hva medarbeideren gjør ute, med verifisert GPS og bilder. To forskjellige verktøy, ofte komplementære.',
    summary: 'Kort sagt:',
    summaryText: 'Sage er sterk på regnskap, fakturering og lønn, med Sage HR for personalet. Den er ikke bygget for å bevise feltoppdrag: ingen verifisert GPS, forseglede rapporter eller kundeverifisering. For utekjørende medarbeidere dekker GeoTapp den delen, og timene kommer ut klare for lønn.',
    footnote: FOOTNOTE.nb,
    features: 'Sammenligning av nøkkelfunksjoner', feat: 'Funksjon',
    diff: 'Forretningssuite/lønn vs bevis på feltarbeid',
    geo: ['GPS verifisert automatisk, ikke skrevet inn for hånd','Rapporter forseglet med kryptografisk hash ved oppdragsslutt','Fotobevis innebygd med GPS og tidsstempel','Kunden verifiserer ektheten selv','Bygget for feltarbeidere, ikke administrasjonen'],
    comp: ['Solid regnskap, fakturering og lønn','Sage HR for timelister, ferie og oppmøte','Mobilapp for personaladministrasjon','Ingen forseglet bevis på feltoppdraget','Ingen verifisert GPS, fotobevis eller kundeverifisering'],
    useCasesTitle: 'Hvem bør kombinere GeoTapp med en suite som Sage',
    useCases: ['Renholds- og facility management-firmaer med krevende kunder','Vedlikeholdslag og installatører som må forsvare fakturerte timer','Bedrifter med regnskap/lønn i Sage men lag i felt','De som allerede har hatt tvister om ikke-anerkjente oppdrag','Bedrifter med flere lag på ulike steder'],
    cta: 'Vil du se forskjellen i praksis?',
    ctaDesc: 'Vi viser deg på 20 minutter hvordan et oppdrag blir til verifiserbart bevis, uforpliktende.',
    ctaBtn: 'Kom i gang gratis nå!',
  },
  ru: {
    badge: 'Сравнение ПО', h1sub: 'бизнес-система и зарплата или доказательство работы в поле?',
    desc: 'Sage ведёт бухгалтерию, зарплату и HR. GeoTapp доказывает, что сотрудник делает вне офиса, проверенным GPS и фото. Два разных инструмента, часто дополняющих друг друга.',
    summary: 'Коротко:',
    summaryText: 'Sage силён в бухгалтерии, счетах и зарплате, с Sage HR для персонала. Он не создан доказывать выездные задания: нет проверенного GPS, защищённых отчётов или проверки заказчиком. Для выездных сотрудников GeoTapp закрывает эту часть, а часы выгружаются готовыми для зарплаты.',
    footnote: FOOTNOTE.ru,
    features: 'Сравнение ключевых функций', feat: 'Функция',
    diff: 'Бизнес-система/зарплата vs доказательство работы в поле',
    geo: ['GPS проверяется автоматически, а не вводится вручную','Отчёты запечатываются криптографическим хешем при закрытии','Фотодоказательства встроены с GPS и меткой времени','Заказчик сам проверяет подлинность','Создано для выездных сотрудников, а не для администрации'],
    comp: ['Надёжная бухгалтерия, счета и зарплата','Sage HR для табелей, отпусков и присутствия','Мобильное приложение для администрирования персонала','Нет защищённого доказательства выездного задания','Нет проверенного GPS, фотодоказательства или проверки заказчиком'],
    useCasesTitle: 'Кому стоит дополнить систему вроде Sage через GeoTapp',
    useCases: ['Клининговые и facility-компании с требовательными клиентами','Бригады обслуживания и монтажники, защищающие оплаченные часы','Компании с бухгалтерией/зарплатой в Sage, но с бригадами в поле','Те, кто уже сталкивался со спорами по непризнанным работам','Компании с несколькими бригадами на разных объектах'],
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

export default async function GeoTappVsSagePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = T[locale] ?? T.en;
  const faqItems = FAQ[locale] ?? FAQ.en;
  const labels = ROWS_LABELS[locale] ?? ROWS_LABELS.en;
  const tableTakeaway = TABLE_TAKEAWAY[locale] ?? TABLE_TAKEAWAY.en;
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
    competitorName: 'Sage',
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
              GeoTapp vs Sage:{' '}
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
                    <th className="text-center py-3 px-4 font-semibold text-sm text-text-secondary">Sage</th>
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

          {/* Neutral, AI-extractable takeaway right under the table */}
          <section className="mb-16 -mt-8">
            <p className="text-sm text-text-secondary leading-relaxed rounded-xl border border-white/10 bg-white/5 p-4">
              {tableTakeaway}
            </p>
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
                <h3 className="font-semibold text-text-secondary mb-3">Sage</h3>
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
              source="confronto_vs_sage"
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
