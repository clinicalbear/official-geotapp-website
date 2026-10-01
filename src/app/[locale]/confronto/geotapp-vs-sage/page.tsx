import type { Metadata } from 'next';
import ComparisonPageL from '@/components/ComparisonPageL';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-sage/';
const ARTICLE_DATE_PUBLISHED = '2026-07-02';
const ARTICLE_DATE_MODIFIED = '2026-07-02';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs Sage - Confronto 2026 | GeoTapp', description: 'GeoTapp vs Sage: due strumenti diversi. Sage gestisce contabilità, paghe e HR; GeoTapp prova il lavoro sul campo con posizione, ora, foto e report sigillati. Spesso complementari.' },
  en: { title: 'GeoTapp vs Sage - Comparison 2026 | GeoTapp', description: 'GeoTapp vs Sage: two different tools. Sage runs accounting, payroll and HR; GeoTapp proves field work with location, time, photos and sealed reports. Often complementary.' },
  de: { title: 'GeoTapp vs Sage - Vergleich 2026 | GeoTapp', description: 'GeoTapp vs Sage: zwei verschiedene Werkzeuge. Sage verwaltet Buchhaltung, Lohnabrechnung und HR; GeoTapp belegt die Arbeit im Außendienst mit Position, Uhrzeit, Fotos und versiegelten Berichten. Oft ergänzen sie sich.' },
  fr: { title: 'GeoTapp vs Sage - Comparatif 2026 | GeoTapp', description: 'GeoTapp vs Sage : deux outils différents. Sage gère comptabilité, paie et RH ; GeoTapp prouve le travail sur le terrain. Souvent complémentaires.' },
  es: { title: 'GeoTapp vs Sage - Comparación 2026 | GeoTapp', description: 'GeoTapp vs Sage: dos herramientas distintas. Sage gestiona contabilidad, nóminas y RR. HH.; GeoTapp prueba el trabajo de campo con posición, hora, fotos e informes sellados. A menudo complementarias.' },
  pt: { title: 'GeoTapp vs Sage - Comparação 2026 | GeoTapp', description: 'GeoTapp vs Sage: duas ferramentas diferentes. A Sage gere contabilidade, salários e RH; a GeoTapp prova o trabalho no terreno com posição, hora, fotos e relatórios selados. Muitas vezes complementares.' },
  nl: { title: 'GeoTapp vs Sage - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Sage: twee verschillende hulpmiddelen. Sage beheert boekhouding, salaris en hr; GeoTapp bewijst het werk in het veld met locatie, tijd, foto\'s en verzegelde rapporten. Vaak complementair.' },
  da: { title: 'GeoTapp vs Sage - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Sage: to forskellige værktøjer. Sage styrer bogføring, løn og HR; GeoTapp dokumenterer arbejdet i marken. Ofte komplementære.' },
  sv: { title: 'GeoTapp vs Sage - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs Sage: två olika verktyg. Sage sköter bokföring, lön och HR; GeoTapp bevisar fältarbete med plats, tid, foton och förseglade rapporter. Ofta kompletterande.' },
  nb: { title: 'GeoTapp vs Sage - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Sage: to forskjellige verktøy. Sage styrer regnskap, lønn og HR; GeoTapp beviser feltarbeid med verifisert GPS, bilder og rapporter som ikke kan endres. Ofte komplementære.' },
  ru: { title: 'GeoTapp vs Sage, Сравнение 2026 | GeoTapp', description: 'GeoTapp vs Sage: два разных инструмента. Sage ведёт бухгалтерию, зарплату и HR; GeoTapp доказывает выездную работу проверенным GPS, фото и защищёнными отчётами. Часто дополняют друг друга.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza principale tra GeoTapp e Sage?', a: 'Sage è un gestionale: contabilità, fatturazione, paghe e, con Sage HR, gestione del personale. GeoTapp è un sistema di prova del lavoro sul campo: genera report sigillati con posizione, ora e foto, prove che il cliente può controllare. Sage tiene i conti e le paghe; GeoTapp dimostra cosa fa l\'operatore fuori sede.' },
    { q: 'Sage ha la rilevazione presenze?', a: 'Con il modulo Sage HR gestisce timesheet, ferie e presenze, orientate all\'amministrazione. Non produce però la prova dell\'intervento sul campo: niente posizione registrata al cantiere, report sigillati o verifica del cliente. Quel pezzo lo copre GeoTapp.' },
    { q: 'GeoTapp sostituisce Sage?', a: 'No, sono complementari. Sage resta contabilità e paghe; GeoTapp aggiunge la prova verificabile del lavoro svolto e esporta le ore già pronte per la busta paga. Molte aziende tengono Sage per l\'amministrazione e GeoTapp per gli operatori sul campo.' },
    { q: 'Sage ha un piano gratuito?', a: 'Sage è a pagamento, senza un piano gratuito pubblico per la parte gestionale. GeoTapp ha una prova gratuita e piani trasparenti, ed è modulare: accendi solo le funzioni che ti servono per il campo.' },
  ],
  en: [
    { q: 'What is the main difference between GeoTapp and Sage?', a: 'Sage is a business suite: accounting, invoicing, payroll and, with Sage HR, people management. GeoTapp is a field proof-of-work system: it generates sealed reports with location, time and photos, proof that the client can check. Sage keeps the books and payroll; GeoTapp proves what the operator does off-site.' },
    { q: 'Does Sage have attendance tracking?', a: 'With the Sage HR module it handles timesheets, leave and attendance, oriented to administration. But it does not produce proof of the field job: no position recorded at the site, sealed reports or client verification. GeoTapp covers that part.' },
    { q: 'Does GeoTapp replace Sage?', a: 'No, they are complementary. Sage stays accounting and payroll; GeoTapp adds verifiable proof of completed work and exports hours ready for the payslip. Many companies keep Sage for administration and GeoTapp for field operators.' },
    { q: 'Does Sage have a free plan?', a: 'Sage is paid, with no public free plan for the business suite. GeoTapp has a free trial and transparent plans, and is modular: switch on only the features you need for the field.' },
  ],
  de: [
    { q: 'Was ist der Hauptunterschied zwischen GeoTapp und Sage?', a: 'Sage ist eine Verwaltungssoftware: Buchhaltung, Fakturierung, Lohnabrechnung und, mit Sage HR, Personalverwaltung. GeoTapp ist ein System für den Nachweis der Arbeit im Außendienst: Es erstellt versiegelte Berichte mit Position, Uhrzeit und Fotos, die der Kunde prüfen kann. Sage führt die Bücher und die Löhne; GeoTapp belegt, was der Mitarbeiter außerhalb des Betriebs tut.' },
    { q: 'Hat Sage eine Zeiterfassung?', a: 'Mit dem Modul Sage HR verwaltet es Timesheets, Urlaub und Anwesenheit, ausgerichtet auf die Verwaltung. Es erstellt aber keinen Nachweis des Einsatzes im Außendienst: keine an der Baustelle erfasste Position, keine versiegelten Berichte, keine Überprüfung durch den Kunden. Diesen Teil deckt GeoTapp ab.' },
    { q: 'Ersetzt GeoTapp Sage?', a: 'Nein, sie ergänzen sich. Sage bleibt Buchhaltung und Lohnabrechnung; GeoTapp ergänzt den überprüfbaren Nachweis der geleisteten Arbeit und exportiert die Stunden fertig für die Lohnabrechnung. Viele Unternehmen behalten Sage für die Verwaltung und nutzen GeoTapp für die Mitarbeiter im Außendienst.' },
    { q: 'Hat Sage einen kostenlosen Tarif?', a: 'Sage ist kostenpflichtig, ohne öffentlichen kostenlosen Tarif für den Verwaltungsteil. GeoTapp hat eine kostenlose Testphase und transparente Tarife und ist modular: Sie schalten nur die Funktionen frei, die Sie für den Außendienst brauchen.' },
  ],
  fr: [
    { q: 'Quelle est la différence principale entre GeoTapp et Sage ?', a: 'Sage est un logiciel de gestion : comptabilité, facturation, paie et, avec Sage HR, gestion du personnel. GeoTapp est un système de preuve du travail sur le terrain : il génère des rapports scellés avec position, heure et photos, des preuves que le client peut contrôler. Sage tient les comptes et la paie ; GeoTapp démontre ce que fait l\'opérateur hors site.' },
    { q: 'Sage propose-t-il le suivi des présences ?', a: 'Avec le module Sage HR, il gère feuilles de temps, congés et présences, orientées vers l\'administration. Il ne produit en revanche pas la preuve de l\'intervention sur le terrain : ni position enregistrée sur le chantier, ni rapports scellés, ni vérification par le client. Ce point, c\'est GeoTapp qui le couvre.' },
    { q: 'GeoTapp remplace-t-il Sage ?', a: 'Non, ils sont complémentaires. Sage reste la comptabilité et la paie ; GeoTapp ajoute la preuve vérifiable du travail effectué et exporte les heures déjà prêtes pour la fiche de paie. Beaucoup d\'entreprises gardent Sage pour l\'administration et GeoTapp pour les opérateurs de terrain.' },
    { q: 'Sage a-t-il une offre gratuite ?', a: 'Sage est payant, sans offre gratuite publique pour la partie gestion. GeoTapp propose un essai gratuit et des offres transparentes, et il est modulaire : vous n\'activez que les fonctions dont vous avez besoin pour le terrain.' },
  ],
  es: [
    { q: '¿Cuál es la diferencia principal entre GeoTapp y Sage?', a: 'Sage es un software de gestión: contabilidad, facturación, nóminas y, con Sage HR, gestión del personal. GeoTapp es un sistema de prueba del trabajo de campo: genera informes sellados con posición, hora y fotos, pruebas que el cliente puede comprobar. Sage lleva las cuentas y las nóminas; GeoTapp demuestra qué hace el operario fuera de la sede.' },
    { q: '¿Tiene Sage control de asistencia?', a: 'Con el módulo Sage HR gestiona hojas de horas, vacaciones y asistencia, orientadas a la administración. Pero no produce la prueba de la intervención de campo: ni posición registrada en la obra, ni informes sellados, ni verificación del cliente. Esa parte la cubre GeoTapp.' },
    { q: '¿GeoTapp sustituye a Sage?', a: 'No, son complementarios. Sage sigue siendo la contabilidad y las nóminas; GeoTapp añade la prueba verificable del trabajo hecho y exporta las horas ya listas para la nómina. Muchas empresas mantienen Sage para la administración y GeoTapp para los operarios de campo.' },
    { q: '¿Tiene Sage un plan gratuito?', a: 'Sage es de pago, sin un plan gratuito público para la parte de gestión. GeoTapp tiene una prueba gratuita y planes transparentes, y es modular: activas solo las funciones que necesitas para el campo.' },
  ],
  pt: [
    { q: 'Qual é a principal diferença entre a GeoTapp e a Sage?', a: 'A Sage é um software de gestão: contabilidade, faturação, salários e, com a Sage HR, gestão de pessoal. A GeoTapp é um sistema de prova do trabalho no terreno: gera relatórios selados com posição, hora e fotos, provas que o cliente pode verificar. A Sage trata das contas e dos salários; a GeoTapp demonstra o que o operador faz fora da sede.' },
    { q: 'A Sage tem registo de presenças?', a: 'Com o módulo Sage HR gere folhas de horas, férias e presenças, orientadas para a administração. Mas não produz a prova da intervenção no terreno: sem posição registada na obra, sem relatórios selados nem verificação do cliente. Essa parte é coberta pela GeoTapp.' },
    { q: 'A GeoTapp substitui a Sage?', a: 'Não, são complementares. A Sage continua a tratar da contabilidade e dos salários; a GeoTapp acrescenta a prova verificável do trabalho realizado e exporta as horas já prontas para o processamento salarial. Muitas empresas mantêm a Sage para a administração e a GeoTapp para os operadores no terreno.' },
    { q: 'A Sage tem plano gratuito?', a: 'A Sage é paga, sem plano gratuito público para a parte de gestão. A GeoTapp tem um período de teste gratuito e planos transparentes, e é modular: ative só as funções de que precisa para o terreno.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Sage?', a: 'Sage is een beheersysteem: boekhouding, facturering, salaris en, met Sage HR, personeelsbeheer. GeoTapp is een systeem voor bewijs van het werk in het veld: het maakt verzegelde rapporten met locatie, tijd en foto\'s, bewijs dat de klant kan controleren. Sage houdt de boeken en het salaris bij; GeoTapp toont aan wat de medewerker buiten de deur doet.' },
    { q: 'Heeft Sage aanwezigheidsregistratie?', a: 'Met de module Sage HR beheert het timesheets, verlof en aanwezigheid, gericht op de administratie. Het maakt echter niet het bewijs van de klus in het veld: geen locatie die op de bouwplaats is vastgelegd, geen verzegelde rapporten en geen controle door de klant. Dat onderdeel dekt GeoTapp.' },
    { q: 'Vervangt GeoTapp Sage?', a: 'Nee, ze vullen elkaar aan. Sage blijft boekhouding en salaris; GeoTapp voegt het controleerbare bewijs van het uitgevoerde werk toe en exporteert de uren al klaar voor de loonstrook. Veel bedrijven houden Sage voor de administratie en GeoTapp voor de medewerkers in het veld.' },
    { q: 'Heeft Sage een gratis abonnement?', a: 'Sage is betaald, zonder openbaar gratis abonnement voor het beheersdeel. GeoTapp heeft een gratis proefperiode en transparante abonnementen, en is modulair: u schakelt alleen de functies in die u voor het veld nodig hebt.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Sage?', a: 'Sage er et virksomhedssystem: bogføring, fakturering, løn og, med Sage HR, personalestyring. GeoTapp er et system til dokumentation af arbejdet i marken: det laver forseglede rapporter med position, tid og fotos, som kunden kan kontrollere. Sage holder styr på regnskabet og lønnen; GeoTapp viser, hvad medarbejderen gør ude hos kunden.' },
    { q: 'Har Sage fremmøderegistrering?', a: 'Med modulet Sage HR håndterer det timesedler, ferie og fremmøde, rettet mod administrationen. Det leverer dog ikke dokumentationen for opgaven i marken: ingen position registreret på byggepladsen, ingen forseglede rapporter og ingen verificering fra kundens side. Den del dækker GeoTapp.' },
    { q: 'Erstatter GeoTapp Sage?', a: 'Nej, de supplerer hinanden. Sage forbliver bogføring og løn; GeoTapp tilføjer det verificerbare bevis for det udførte arbejde og eksporterer timerne, så de er klar til lønnen. Mange virksomheder beholder Sage til administrationen og bruger GeoTapp til medarbejderne i marken.' },
    { q: 'Har Sage en gratis plan?', a: 'Sage er betalt, uden en offentlig gratis plan til den del, der handler om virksomhedsstyring. GeoTapp har en gratis prøveperiode og gennemsigtige planer, og det er modulopbygget: du tænder kun for de funktioner, du skal bruge i marken.' },
  ],
  sv: [
    { q: 'Vad är den största skillnaden mellan GeoTapp och Sage?', a: 'Sage är en affärssvit: bokföring, fakturering, lön och, med Sage HR, personalhantering. GeoTapp är ett system för arbetsbevis i fält: det skapar förseglade rapporter med plats, tid och foton, ett bevis som kunden kan kontrollera. Sage sköter bokföring och lön; GeoTapp bevisar vad medarbetaren gör utanför kontoret.' },
    { q: 'Har Sage närvaroregistrering?', a: 'Med modulen Sage HR hanteras tidrapporter, ledighet och närvaro, inriktat på administration. Men den tar inte fram bevis på uppdraget i fält: ingen position registrerad på platsen, inga förseglade rapporter och ingen verifiering av kunden. GeoTapp täcker den delen.' },
    { q: 'Ersätter GeoTapp Sage?', a: 'Nej, de kompletterar varandra. Sage förblir bokföring och lön; GeoTapp lägger till verifierbara bevis på utfört arbete och exporterar timmarna redo för lönespecifikationen. Många företag behåller Sage för administrationen och GeoTapp för fältpersonalen.' },
    { q: 'Har Sage en gratisplan?', a: 'Sage är betaltjänst, utan någon offentlig gratisplan för affärssviten. GeoTapp har en gratis provperiod och öppna priser, och är modulärt: slå bara på de funktioner du behöver i fält.' },
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
  it: ['Posizione registrata e controllata a ogni timbratura','Report sigillato crittograficamente','Prove fotografiche collegate a GPS e timestamp','Verifica indipendente da parte del cliente','Tracciamento ore','App mobile Android/iOS','Messaggistica interna proprietaria','Export presenze/paghe','Piano gratuito','Gestione commesse multi-sito','Posizione rilevata solo quando si timbra, mai in continuo','Informativa GPS firmata nell\'app prima di timbrare*'],
  en: ['Position recorded and checked at every clock-in','Cryptographically sealed report','Photo evidence linked to GPS and timestamp','Independent verification by the client','Time tracking','Mobile app Android/iOS','Built-in messaging','Payroll/attendance export','Free plan','Multi-site job management','Position recorded only at clock-in, never continuously','GPS notice signed in the app before clocking in*'],
  de: ['Position bei jedem Stempeln erfasst und geprüft','Kryptographisch versiegelter Bericht','Fotonachweise mit GPS und Zeitstempel verknüpft','Unabhängige Überprüfung durch den Kunden','Zeiterfassung','Mobile App Android/iOS','Eigene interne Nachrichten','Export von Anwesenheit/Lohndaten','Kostenloser Tarif','Verwaltung mehrerer Standorte','Position nur beim Stempeln erfasst, nie durchgehend','GPS-Information vor dem Stempeln in der App unterschrieben*'],
  fr: ['Position enregistrée et contrôlée à chaque pointage','Rapport scellé cryptographiquement','Preuves photo liées au GPS et à l\'horodatage','Vérification indépendante par le client','Suivi des heures','App mobile Android/iOS','Messagerie interne propriétaire','Export présences/paie','Offre gratuite','Gestion de chantiers multi-sites','Position relevée uniquement au pointage, jamais en continu','Information GPS signée dans l\'app avant de pointer*'],
  es: ['Posición registrada y controlada en cada fichaje','Informe sellado criptográficamente','Pruebas fotográficas vinculadas a GPS y marca de tiempo','Verificación independiente por parte del cliente','Seguimiento de horas','App móvil Android/iOS','Mensajería interna propia','Exportación de asistencia/nóminas','Plan gratuito','Gestión de obras multi-sitio','Posición registrada solo al fichar, nunca de forma continua','Aviso GPS firmado en la app antes de fichar*'],
  pt: ['Posição registada e controlada em cada picagem','Relatório selado criptograficamente','Provas fotográficas ligadas ao GPS e à data/hora','Verificação independente por parte do cliente','Registo de horas','App móvel Android/iOS','Mensagens internas próprias','Exportação de presenças/salários','Plano gratuito','Gestão de obras em vários locais','Posição registada só ao picar o ponto, nunca de forma contínua','Informação GPS assinada na app antes de picar o ponto*'],
  nl: ['Locatie vastgelegd en gecontroleerd bij elke registratie','Cryptografisch verzegeld rapport','Fotobewijzen gekoppeld aan gps en tijdstempel','Onafhankelijke controle door de klant','Bijhouden van uren','Mobiele app voor Android/iOS','Eigen interne berichten','Export van aanwezigheid/salarissen','Gratis abonnement','Opdrachtenbeheer voor meerdere locaties','Locatie alleen bij het registreren, nooit doorlopend','GPS-verklaring ondertekend in de app vóór het registreren*'],
  da: ['Position registreret og kontrolleret ved hver stempling','Kryptografisk forseglet rapport','Bevisfotos knyttet til GPS og tidsstempel','Uafhængig verificering af kunden','Timeregistrering','Mobilapp Android/iOS','Egen intern beskedfunktion','Eksport af fremmøde/løn','Gratis plan','Styring af opgaver på flere lokationer','Position registreres kun ved stempling, aldrig løbende','GPS-information underskrevet i appen, før man stempler*'],
  sv: ['Positionen registreras och kontrolleras vid varje instämpling','Kryptografiskt förseglad rapport','Bevisfoton kopplade till GPS och tidsstämpel','Oberoende verifiering av kunden','Tidrapportering','Mobilapp för Android/iOS','Inbyggd meddelandefunktion','Export av lön/närvaro','Gratisplan','Hantering av uppdrag på flera platser','Positionen registreras bara vid instämpling, aldrig löpande','GPS-information signerad i appen innan man stämplar in*'],
  nb: ['GPS verifisert på oppdragsstedet','Kryptografisk forseglet rapport','Fotobevis koblet til GPS og tidsstempel','Uavhengig verifisering av kunden','Tidsregistrering','Mobilapp Android/iOS','Innebygd meldingsfunksjon','Eksport av lønn/oppmøte','Gratis plan','Styring av oppdrag på flere steder','GDPR-kompatibel geolokalisering','Automatisk GPS-personvernerklæring med digital signatur*'],
  ru: ['GPS проверен на месте задания','Криптографически опечатанный отчёт','Фотодоказательства, привязанные к GPS и метке времени','Независимая проверка заказчиком','Учёт часов','Мобильное приложение Android/iOS','Встроенный обмен сообщениями','Экспорт зарплат/присутствия','Бесплатный тариф','Управление заданиями на нескольких объектах','Геолокация в соответствии с GDPR','Автоматическое уведомление о GPS с цифровой подписью*'],
};

const ROWS_GEO =   [true, true, true, true, true, true, true, true, false, true, true, true];
const ROWS_COMP =  [false, false, false, false, true, true, false, true, false, false, false, false];

// Riassunto neutro ed estraibile, subito sotto la tabella: frase fattuale citabile
// dai motori AI senza doverla ricostruire dalla tabella. Neutro per scelta.
const TABLE_TAKEAWAY: Record<string, string> = {
  it: 'In breve: Sage gestisce contabilità, fatturazione e paghe; GeoTapp prova il lavoro svolto sul campo con posizione alla timbratura, report sigillato e verifica del cliente. Spesso si affiancano.',
  en: 'In short: Sage runs accounting, invoicing and payroll; GeoTapp proves field work with the position at clock-in, a sealed report and client verification. They often work side by side.',
  de: 'Kurz gesagt: Sage verwaltet Buchhaltung, Fakturierung und Lohnabrechnung; GeoTapp belegt die geleistete Arbeit im Außendienst mit Position beim Stempeln, versiegeltem Bericht und Überprüfung durch den Kunden. Oft laufen sie nebeneinander.',
  fr: 'En bref : Sage gère comptabilité, facturation et paie ; GeoTapp prouve le travail effectué sur le terrain avec la position au pointage, un rapport scellé et la vérification par le client. Les deux se complètent souvent.',
  es: 'En resumen: Sage gestiona contabilidad, facturación y nóminas; GeoTapp prueba el trabajo hecho en campo con la posición al fichar, el informe sellado y la verificación del cliente. A menudo se combinan.',
  pt: 'Em resumo: a Sage gere contabilidade, faturação e salários; a GeoTapp prova o trabalho realizado no terreno com a posição ao picar o ponto, o relatório selado e a verificação do cliente. Muitas vezes complementam-se.',
  nl: 'Kort gezegd: Sage beheert boekhouding, facturering en salaris; GeoTapp bewijst het uitgevoerde werk in het veld met locatie bij de registratie, verzegeld rapport en controle door de klant. Vaak vullen ze elkaar aan.',
  da: 'Kort sagt: Sage styrer bogføring, fakturering og løn; GeoTapp dokumenterer arbejdet i marken med position ved stempling, forseglet rapport og kundens egen verificering. De supplerer ofte hinanden.',
  sv: 'Kort sagt: Sage sköter bokföring, fakturering och lön; GeoTapp bevisar fältarbete med positionen vid instämpling, en förseglad rapport och kundens verifiering. De fungerar ofta sida vid sida.',
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
  it: '* Per legge (art. 13 GDPR e, in Italia, art. 4 dello Statuto dei Lavoratori) ogni dipendente va informato prima di essere geolocalizzato. Se il software lascia questo passaggio al titolare, il rischio resta a lui. GeoTapp prepara l\'informativa personalizzata, la fa firmare per presa visione nell\'app e non lascia timbrare finché non è firmata.',
  en: '* By law (Art. 13 GDPR and, in Italy, Art. 4 of the Workers\' Statute), every employee must be informed before being geolocated. If the software leaves this step to the employer, the risk stays with them. GeoTapp prepares the personalised notice, has it signed for acknowledgement in the app and does not let staff clock in until it is signed.',
  de: '* Nach geltendem Recht (Art. 13 DSGVO und in Italien Art. 4 des Arbeitnehmerstatuts) muss jeder Mitarbeiter informiert werden, bevor er geortet wird. Überlässt die Software diesen Schritt dem Arbeitgeber, bleibt das Risiko bei ihm. GeoTapp erstellt die personalisierte Information, lässt sie in der App zur Kenntnisnahme unterschreiben und lässt erst danach das Stempeln zu.',
  fr: '* Selon la loi (art. 13 du RGPD et, en Italie, art. 4 du Statut des travailleurs), chaque salarié doit être informé avant d\'être géolocalisé. Si le logiciel laisse cette étape à l\'employeur, le risque lui reste. GeoTapp prépare l\'information personnalisée, la fait signer pour prise de connaissance dans l\'app et ne laisse pas pointer tant qu\'elle n\'est pas signée.',
  es: '* Por ley (art. 13 del RGPD y, en Italia, art. 4 del Estatuto de los Trabajadores italiano) hay que informar a cada empleado antes de geolocalizarlo. Si el software deja este paso en manos del titular, el riesgo sigue siendo suyo. GeoTapp prepara el aviso personalizado, lo hace firmar en la app como recibido y no deja fichar hasta que está firmado.',
  pt: '* Por lei (art. 13.º do RGPD e, em Itália, art. 4.º do Estatuto dos Trabalhadores italiano), cada trabalhador tem de ser informado antes de ser geolocalizado. Se o software deixa este passo à entidade empregadora, o risco fica com ela. A GeoTapp prepara a informação personalizada, faz com que seja assinada na app como tomada de conhecimento e não deixa picar o ponto enquanto não estiver assinada.',
  nl: '* Volgens de wet (art. 13 AVG en, in Italië, art. 4 van het arbeidsstatuut) moet elke werknemer worden geïnformeerd voordat hij wordt gelokaliseerd. Laat de software deze stap aan de verantwoordelijke over, dan blijft het risico bij hem. GeoTapp maakt de persoonlijke privacyverklaring klaar, laat die in de app voor kennisgeving ondertekenen en laat niet registreren totdat ze is ondertekend.',
  da: '* Ifølge loven (GDPR art. 13 og, i Italien, art. 4 i arbejdstagerloven, Statuto dei Lavoratori) skal hver medarbejder informeres, før vedkommende geolokaliseres. Overlader softwaren dette trin til arbejdsgiveren, er risikoen stadig arbejdsgiverens. GeoTapp forbereder den personlige information, får den underskrevet i appen som bekræftelse på, at den er læst, og lader ikke medarbejderen stemple, før den er underskrevet.',
  sv: '* Enligt lag (artikel 13 i GDPR) måste varje anställd informeras innan hen geolokaliseras. Om programvaran överlåter det steget åt arbetsgivaren ligger risken kvar hos arbetsgivaren. GeoTapp tar fram den personliga informationen, låter den anställde signera den som läst i appen och släpper inte till instämpling förrän den är signerad.',
  nb: '* Ifølge loven (GDPR Art. 13, og i Italia Art. 4 i arbeidstakerstatutten) må hver ansatt signere en personvernerklæring før geolokalisering. De fleste programmer håndterer ikke dette: den juridiske risikoen blir hos arbeidsgiveren. GeoTapp lager automatisk den personlige erklæringen, får den signert digitalt og blokkerer GPS-tilgang til den er signert.',
  ru: '* По закону (GDPR ст. 13, а в Италии ст. 4 Статута трудящихся) каждый сотрудник должен подписать уведомление о конфиденциальности до геолокации. Большинство программ этого не обеспечивают: юридический риск остаётся на работодателе. GeoTapp автоматически формирует персональное уведомление, даёт подписать его цифровой подписью и блокирует доступ к GPS, пока оно не подписано.',
};

const T: Record<string, Copy> = {
  it: {
    badge: 'Confronto Software', h1sub: 'gestionale e paghe o prova del lavoro sul campo?',
    desc: 'Sage gestisce contabilità, paghe e HR. GeoTapp prova cosa fa l\'operatore fuori sede, con posizione, ora e foto. Due strumenti diversi, spesso complementari.',
    summary: 'In sintesi:',
    summaryText: 'Sage è forte su contabilità, fatturazione e paghe, con Sage HR per il personale. Non è pensato per dimostrare l\'intervento sul campo: niente posizione alla timbratura, report sigillati o verifica del cliente. Per operatori fuori sede, GeoTapp copre quel pezzo, e le ore escono pronte per le paghe.',
    footnote: FOOTNOTE.it,
    features: 'Confronto funzionalità chiave', feat: 'Funzionalità',
    diff: 'Gestionale e paghe o prova del lavoro sul campo',
    geo: ['Posizione rilevata dal telefono a ogni timbratura, non inserita a mano','Report sigillati con hash crittografico alla chiusura dell\'intervento','Prove fotografiche integrate con GPS e timestamp','Il committente verifica da solo che il report non sia stato modificato','Progettato per operatori sul campo, non per l\'amministrazione'],
    comp: ['Contabilità, fatturazione e paghe robuste','Sage HR per timesheet, ferie e presenze','App mobile per l\'amministrazione del personale','Nessuna prova sigillata dell\'intervento sul campo','Nessuna posizione alla timbratura, foto di prova o verifica del cliente'],
    useCasesTitle: 'Chi dovrebbe affiancare GeoTapp a un gestionale come Sage',
    useCases: ['Imprese di pulizie e facility management con clienti esigenti','Manutentori e installatori che devono documentare le ore fatturate','Aziende con contabilità/paghe in Sage ma squadre sul campo','Chi ha già avuto contestazioni su interventi non riconosciuti','Aziende con più squadre distribuite su cantieri diversi'],
    cta: 'Vuoi vedere la differenza in pratica?',
    ctaDesc: 'Provalo su un intervento vero: 14 giorni gratis, senza carta di credito.',
    ctaBtn: 'Inizia la prova gratuita',
  },
  en: {
    badge: 'Software Comparison', h1sub: 'business suite and payroll or proof of field work?',
    desc: 'Sage runs accounting, payroll and HR. GeoTapp proves what the operator does off-site, with location, time and photos. Two different tools, often complementary.',
    summary: 'In short:',
    summaryText: 'Sage is strong on accounting, invoicing and payroll, with Sage HR for staff. It is not built to prove field jobs: no position at clock-in, sealed reports or client verification. For off-site operators, GeoTapp covers that part, and hours come out ready for payroll.',
    footnote: FOOTNOTE.en,
    features: 'Key feature comparison', feat: 'Feature',
    diff: 'Business suite and payroll or proof of field work',
    geo: ['Position taken from the phone at every clock-in, not typed in by hand','Reports sealed with a cryptographic hash when the job is closed','Photo evidence built in with GPS and timestamp','The client checks alone that the report has not been modified','Built for field operators, not administration'],
    comp: ['Solid accounting, invoicing and payroll','Sage HR for timesheets, leave and attendance','Mobile app for staff administration','No sealed proof of the field job','No position at clock-in, proof photos or client verification'],
    useCasesTitle: 'Who should pair GeoTapp with a business suite like Sage',
    useCases: ['Cleaning and facility management companies with demanding clients','Maintenance crews and installers who must defend billed hours','Companies running accounting/payroll in Sage but with field crews','Anyone who has already faced disputes over jobs the client did not recognise','Companies with several crews across different sites'],
    cta: 'Want to see the difference in practice?',
    ctaDesc: 'Try it on a real job: 14 days free, no credit card.',
    ctaBtn: 'Start the free trial',
  },
  de: {
    badge: 'Software-Vergleich', h1sub: 'Verwaltungssoftware und Lohn oder Arbeitsnachweis im Außendienst?',
    desc: 'Sage verwaltet Buchhaltung, Lohnabrechnung und HR. GeoTapp belegt, was der Mitarbeiter außerhalb des Betriebs tut, mit Position, Uhrzeit und Fotos. Zwei verschiedene Werkzeuge, oft ergänzend.',
    summary: 'Kurz gesagt:',
    summaryText: 'Sage ist stark bei Buchhaltung, Fakturierung und Lohnabrechnung, mit Sage HR für das Personal. Es ist nicht dafür gedacht, den Einsatz im Außendienst zu belegen: keine Position beim Stempeln, keine versiegelten Berichte, keine Überprüfung durch den Kunden. Für Mitarbeiter im Außendienst deckt GeoTapp diesen Teil ab, und die Stunden kommen fertig für die Lohnabrechnung heraus.',
    footnote: FOOTNOTE.de,
    features: 'Vergleich der wichtigsten Funktionen', feat: 'Funktion',
    diff: 'Verwaltungssoftware und Lohn oder Arbeitsnachweis im Außendienst',
    geo: ['Position beim Stempeln vom Telefon erfasst, nicht von Hand eingetragen','Berichte beim Abschluss des Einsatzes mit kryptographischem Hash versiegelt','Fotonachweise mit GPS und Zeitstempel integriert','Der Auftraggeber prüft selbst, dass der Bericht nicht verändert wurde','Für Mitarbeiter im Außendienst gebaut, nicht für die Verwaltung'],
    comp: ['Solide Buchhaltung, Fakturierung und Lohnabrechnung','Sage HR für Timesheets, Urlaub und Anwesenheit','Mobile App für die Personalverwaltung','Kein versiegelter Nachweis des Einsatzes im Außendienst','Keine Position beim Stempeln, kein Nachweisfoto, keine Überprüfung durch den Kunden'],
    useCasesTitle: 'Wer GeoTapp neben eine Verwaltungssoftware wie Sage stellen sollte',
    useCases: ['Reinigungsfirmen und Facility-Management mit anspruchsvollen Kunden','Wartungsbetriebe und Installateure, die abgerechnete Stunden dokumentieren müssen','Betriebe mit Buchhaltung und Lohn in Sage, aber Teams im Außendienst','Wer schon Streit über nicht anerkannte Einsätze hatte','Betriebe mit mehreren Teams auf verschiedenen Baustellen'],
    cta: 'Möchten Sie den Unterschied in der Praxis sehen?',
    ctaDesc: 'Testen Sie es an einem echten Einsatz: 14 Tage kostenlos, keine Kreditkarte.',
    ctaBtn: 'Kostenlos testen',
  },
  fr: {
    badge: 'Comparatif de logiciels',
    h1sub: 'gestion et paie ou preuve du travail sur le terrain ?',
    desc: 'Sage gère comptabilité, paie et RH. GeoTapp prouve ce que fait l\'opérateur hors site, avec position, heure et photos. Deux outils différents, souvent complémentaires.',
    summary: 'En résumé :',
    summaryText: 'Sage est solide sur la comptabilité, la facturation et la paie, avec Sage HR pour le personnel. Il n\'est pas conçu pour démontrer l\'intervention sur le terrain : ni position au pointage, ni rapports scellés, ni vérification par le client. Pour les opérateurs hors site, GeoTapp couvre ce point, et les heures sortent prêtes pour la paie.',
    footnote: FOOTNOTE.fr,
    features: 'Comparaison des fonctionnalités clés',
    feat: 'Fonctionnalité',
    diff: 'Gestion et paie ou preuve du travail sur le terrain',
    geo: ['Position relevée par le téléphone à chaque pointage, jamais saisie à la main','Rapports scellés par une empreinte cryptographique à la clôture de l\'intervention','Preuves photo intégrées avec GPS et horodatage','Le client vérifie lui-même que le rapport n\'a pas été modifié','Conçu pour les opérateurs de terrain, pas pour l\'administration'],
    comp: ['Comptabilité, facturation et paie robustes','Sage HR pour les feuilles de temps, les congés et les présences','App mobile pour l\'administration du personnel','Aucune preuve scellée de l\'intervention sur le terrain','Aucune position au pointage, photo de preuve ni vérification par le client'],
    useCasesTitle: 'Qui devrait associer GeoTapp à un logiciel de gestion comme Sage',
    useCases: ['Entreprises de nettoyage et de facility management avec des clients exigeants','Techniciens de maintenance et installateurs qui doivent documenter les heures facturées','Entreprises avec comptabilité et paie dans Sage mais des équipes sur le terrain','Ceux qui ont déjà eu des contestations sur des interventions non reconnues','Entreprises avec plusieurs équipes réparties sur différents chantiers'],
    cta: 'Envie de voir la différence en pratique ?',
    ctaDesc: 'Essayez-le sur une intervention réelle : 14 jours gratuits, sans carte bancaire.',
    ctaBtn: 'Commencer l\'essai gratuit',
  },
  es: {
    badge: 'Comparación de software', h1sub: '¿software de gestión y nóminas o prueba del trabajo de campo?',
    desc: 'Sage gestiona contabilidad, nóminas y RR. HH. GeoTapp prueba qué hace el operario fuera de la sede, con posición, hora y fotos. Dos herramientas distintas, a menudo complementarias.',
    summary: 'En resumen:',
    summaryText: 'Sage es fuerte en contabilidad, facturación y nóminas, con Sage HR para el personal. No está pensado para demostrar la intervención en campo: ni posición al fichar, ni informes sellados, ni verificación del cliente. Para operarios fuera de la sede, GeoTapp cubre esa parte, y las horas salen listas para las nóminas.',
    footnote: FOOTNOTE.es,
    features: 'Comparación de funciones clave', feat: 'Función',
    diff: 'Software de gestión y nóminas o prueba del trabajo de campo',
    geo: ['Posición registrada por el teléfono en cada fichaje, no introducida a mano','Informes sellados con hash criptográfico al cerrar la intervención','Pruebas fotográficas integradas con GPS y marca de tiempo','El cliente verifica por sí mismo que el informe no se ha modificado','Diseñado para operarios de campo, no para la administración'],
    comp: ['Contabilidad, facturación y nóminas sólidas','Sage HR para hojas de horas, vacaciones y asistencia','App móvil para la administración del personal','Ninguna prueba sellada de la intervención en campo','Ninguna posición al fichar, foto de prueba ni verificación del cliente'],
    useCasesTitle: 'Quién debería combinar GeoTapp con un software de gestión como Sage',
    useCases: ['Empresas de limpieza y facility management con clientes exigentes','Técnicos de mantenimiento e instaladores que deben documentar las horas facturadas','Empresas con contabilidad y nóminas en Sage pero equipos en campo','Quien ya ha tenido reclamaciones por intervenciones no reconocidas','Empresas con varios equipos repartidos en obras distintas'],
    cta: '¿Quieres ver la diferencia en la práctica?',
    ctaDesc: 'Pruébalo en una intervención real: 14 días gratis, sin tarjeta de crédito.',
    ctaBtn: 'Empieza la prueba gratuita',
  },
  pt: {
    badge: 'Comparação de software', h1sub: 'gestão e salários ou prova do trabalho no terreno?',
    desc: 'A Sage gere contabilidade, salários e RH. A GeoTapp prova o que o operador faz fora da sede, com posição, hora e fotos. Duas ferramentas diferentes, muitas vezes complementares.',
    summary: 'Em resumo:',
    summaryText: 'A Sage é forte em contabilidade, faturação e salários, com a Sage HR para o pessoal. Não foi pensada para demonstrar a intervenção no terreno: sem posição ao picar o ponto, relatórios selados nem verificação do cliente. Para operadores fora da sede, a GeoTapp cobre essa parte, e as horas saem prontas para o processamento salarial.',
    footnote: FOOTNOTE.pt,
    features: 'Comparação das funcionalidades-chave', feat: 'Funcionalidade',
    diff: 'Gestão e salários ou prova do trabalho no terreno',
    geo: ['Posição obtida pelo telemóvel em cada picagem, não inserida à mão','Relatórios selados com hash criptográfico ao fechar a intervenção','Provas fotográficas integradas com GPS e data/hora','O cliente verifica sozinho que o relatório não foi alterado','Concebido para operadores no terreno, não para a administração'],
    comp: ['Contabilidade, faturação e salários robustos','Sage HR para folhas de horas, férias e presenças','App móvel para a administração do pessoal','Sem prova selada da intervenção no terreno','Sem posição ao picar o ponto, fotos de prova nem verificação do cliente'],
    useCasesTitle: 'Quem deve combinar a GeoTapp com um software de gestão como a Sage',
    useCases: ['Empresas de limpeza e facility management com clientes exigentes','Equipas de manutenção e instaladores que têm de documentar as horas faturadas','Empresas com contabilidade e salários na Sage mas equipas no terreno','Quem já teve contestações sobre intervenções não reconhecidas','Empresas com várias equipas distribuídas por obras diferentes'],
    cta: 'Quer ver a diferença na prática?',
    ctaDesc: 'Experimente numa intervenção real: 14 dias grátis, sem cartão de crédito.',
    ctaBtn: 'Começar teste gratuito',
  },
  nl: {
    badge: 'Softwarevergelijking',
    h1sub: 'beheersysteem en salaris of bewijs van het werk in het veld?',
    desc: 'Sage beheert boekhouding, salaris en hr. GeoTapp toont aan wat de medewerker buiten de deur doet, met locatie, tijd en foto\'s. Twee verschillende hulpmiddelen, vaak complementair.',
    summary: 'Kort gezegd:',
    summaryText: 'Sage is sterk in boekhouding, facturering en salaris, met Sage HR voor het personeel. Het is niet bedoeld om de klus in het veld aan te tonen: geen locatie bij de registratie, verzegelde rapporten of controle door de klant. Voor medewerkers buiten de deur dekt GeoTapp dat onderdeel, en de uren komen klaar voor het salaris.',
    footnote: FOOTNOTE.nl,
    features: 'Vergelijking van de belangrijkste functies',
    feat: 'Functie',
    diff: 'Beheersysteem en salaris of bewijs van het werk in het veld',
    geo: ['Locatie door de telefoon bepaald bij elke registratie, niet met de hand ingevoerd','Rapporten verzegeld met een cryptografische hash bij het afsluiten van de klus','Geïntegreerd fotobewijs met gps en tijdstempel','De opdrachtgever controleert zelf dat het rapport niet is gewijzigd','Ontworpen voor medewerkers in het veld, niet voor de administratie'],
    comp: ['Degelijke boekhouding, facturering en salarisadministratie','Sage HR voor timesheets, verlof en aanwezigheid','Mobiele app voor de personeelsadministratie','Geen verzegeld bewijs van de klus in het veld','Geen locatie bij de registratie, bewijsfoto\'s of controle door de klant'],
    useCasesTitle: 'Wie GeoTapp zou moeten naast een beheersysteem als Sage',
    useCases: ['Schoonmaakbedrijven en facility management met veeleisende klanten','Onderhoudsmonteurs en installateurs die de gefactureerde uren moeten documenteren','Bedrijven met boekhouding/salaris in Sage maar teams in het veld','Wie al betwistingen heeft gehad over klussen die niet werden erkend','Bedrijven met meerdere ploegen verdeeld over verschillende bouwplaatsen'],
    cta: 'Wilt u het verschil in de praktijk zien?',
    ctaDesc: 'Probeer het op een echte klus: 14 dagen gratis, zonder creditcard.',
    ctaBtn: 'Start de gratis proefperiode',
  },
  da: {
    badge: 'Softwaresammenligning', h1sub: 'virksomhedssystem og løn eller dokumentation af arbejdet i marken?',
    desc: 'Sage styrer bogføring, løn og HR. GeoTapp viser, hvad medarbejderen gør ude hos kunden, med position, tid og fotos. To forskellige værktøjer, ofte komplementære.',
    summary: 'Kort sagt:',
    summaryText: 'Sage er stærkt til bogføring, fakturering og løn, med Sage HR til personalet. Det er ikke lavet til at dokumentere opgaven i marken: ingen position ved stempling, ingen forseglede rapporter og ingen verificering fra kundens side. Til medarbejdere ude hos kunderne dækker GeoTapp den del, og timerne kommer ud klar til lønnen.',
    footnote: FOOTNOTE.da,
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion',
    diff: 'Virksomhedssystem og løn eller dokumentation af arbejdet i marken',
    geo: ['Position aflæst fra telefonen ved hver stempling, ikke indtastet i hånden','Rapporter forseglet med kryptografisk hash, når opgaven afsluttes','Bevisfotos integreret med GPS og tidsstempel','Kunden kontrollerer selv, at rapporten ikke er ændret','Lavet til medarbejdere i marken, ikke til administrationen'],
    comp: ['Robust bogføring, fakturering og løn','Sage HR til timesedler, ferie og fremmøde','Mobilapp til personaleadministration','Intet forseglet bevis for opgaven i marken','Ingen position ved stempling, bevisfotos eller verificering fra kunden'],
    useCasesTitle: 'Hvem bør supplere et virksomhedssystem som Sage med GeoTapp',
    useCases: ['Rengøringsfirmaer og facility management med krævende kunder','Servicefolk og installatører, der skal dokumentere de fakturerede timer','Virksomheder med bogføring og løn i Sage, men hold i marken','Dem, der allerede har oplevet, at kunder ikke har anerkendt udførte opgaver','Virksomheder med flere hold fordelt på forskellige byggepladser'],
    cta: 'Vil du se forskellen i praksis?',
    ctaDesc: 'Prøv det på en rigtig opgave: 14 dage gratis, uden kreditkort.',
    ctaBtn: 'Start gratis prøveperiode',
  },
  sv: {
    badge: 'Programvarujämförelse', h1sub: 'affärssvit och lön eller bevis på fältarbete?',
    desc: 'Sage sköter bokföring, lön och HR. GeoTapp bevisar vad medarbetaren gör utanför kontoret, med plats, tid och foton. Två olika verktyg, ofta kompletterande.',
    summary: 'Kort sagt:',
    summaryText: 'Sage är starkt på bokföring, fakturering och lön, med Sage HR för personalen. Det är inte byggt för att bevisa uppdrag i fält: ingen position vid instämpling, inga förseglade rapporter och ingen verifiering av kunden. För personal utanför kontoret täcker GeoTapp just den delen, och timmarna kommer ut redo för lönehantering.',
    footnote: FOOTNOTE.sv,
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion',
    diff: 'Affärssvit och lön eller bevis på fältarbete',
    geo: ['Positionen hämtas från telefonen vid varje instämpling och skrivs inte in för hand','Rapporter förseglade med en kryptografisk hash när uppdraget avslutas','Bevisfoton inbyggda med GPS och tidsstämpel','Kunden kontrollerar själv att rapporten inte har ändrats','Byggt för fältpersonal, inte för administration'],
    comp: ['Pålitlig bokföring, fakturering och lön','Sage HR för tidrapporter, ledighet och närvaro','Mobilapp för personaladministration','Inget förseglat bevis på uppdraget i fält','Ingen position vid instämpling, inga bevisfoton och ingen verifiering av kunden'],
    useCasesTitle: 'Vem bör kombinera GeoTapp med en affärssvit som Sage',
    useCases: ['Städ- och fastighetsserviceföretag med krävande kunder','Underhållsteam och installatörer som måste försvara fakturerade timmar','Företag som sköter bokföring och lön i Sage men har team i fält','Alla som redan har råkat ut för tvister om uppdrag som kunden inte godkände','Företag med flera arbetslag på olika platser'],
    cta: 'Vill du se skillnaden i praktiken?',
    ctaDesc: 'Prova på ett riktigt uppdrag: 14 dagar gratis, utan kreditkort.',
    ctaBtn: 'Starta den kostnadsfria provperioden',
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
  const m = localizeEnglishDeep(META[locale] ?? META.en, locale);
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: buildLocaleAlternates(locale, PATHNAME),
    openGraph: { url: buildCanonicalUrl(locale, PATHNAME), type: 'website', title: m.title, description: m.description, images: [{ url: '/og-default.png', width: 1200, height: 630, alt: m.title }] },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description },
  };
}

export default async function GeoTappVsSagePage({ params }: { params: Promise<{ locale: string }> }) {
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
    competitorName: 'Sage',
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
        competitorName="Sage"
        competitorId="sage"
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
