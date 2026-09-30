import type { Metadata } from 'next';
import ComparisonPageL from '@/components/ComparisonPageL';
import { buildLocaleAlternates, buildCanonicalUrl } from '@/lib/i18n/locale-metadata';
import {
  buildComparisonArticle,
  buildComparisonBreadcrumb,
} from '@/lib/seo/comparisonSchema';
import { localizeEnglishDeep } from '@/lib/i18n/en-spelling';
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';

const PATHNAME = '/confronto/geotapp-vs-personio/';
const ARTICLE_DATE_PUBLISHED = '2026-07-02';
const ARTICLE_DATE_MODIFIED = '2026-07-02';

const META: Record<string, { title: string; description: string }> = {
  it: { title: 'GeoTapp vs Personio - Confronto 2026 | GeoTapp', description: 'GeoTapp vs Personio: due mondi diversi. Personio gestisce HR, assenze e paghe dell\'organico; GeoTapp prova il lavoro sul campo con posizione, ora, foto e report sigillati. Spesso complementari.' },
  en: { title: 'GeoTapp vs Personio - Comparison 2026 | GeoTapp', description: 'GeoTapp vs Personio: two different worlds. Personio runs HR, absences and payroll; GeoTapp proves field work with location, time, photos and sealed reports. Often complementary.' },
  de: { title: 'GeoTapp vs Personio - Vergleich 2026 | GeoTapp', description: 'GeoTapp vs Personio: zwei verschiedene Welten. Personio verwaltet HR, Abwesenheiten und Lohnabrechnung der Belegschaft; GeoTapp belegt die Arbeit im Außendienst mit Position, Uhrzeit, Fotos und versiegelten Berichten. Oft ergänzen sie sich.' },
  fr: { title: 'GeoTapp vs Personio - Comparaison 2026 | GeoTapp', description: 'GeoTapp vs Personio : deux mondes différents. Personio gère RH, absences et paie ; GeoTapp prouve le travail sur le terrain avec GPS vérifié, photos et rapports scellés. Souvent complémentaires.' },
  es: { title: 'GeoTapp vs Personio - Comparación 2026 | GeoTapp', description: 'GeoTapp vs Personio: dos mundos distintos. Personio gestiona RRHH, ausencias y nóminas; GeoTapp prueba el trabajo de campo con GPS verificado, fotos e informes sellados. A menudo complementarios.' },
  pt: { title: 'GeoTapp vs Personio - Comparação 2026 | GeoTapp', description: 'GeoTapp vs Personio: dois mundos diferentes. A Personio gere RH, ausências e salários; a GeoTapp prova o trabalho no terreno com GPS verificado, fotos e relatórios selados. Muitas vezes complementares.' },
  nl: { title: 'GeoTapp vs Personio - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Personio: twee verschillende werelden. Personio beheert hr, afwezigheid en salaris van het personeelsbestand; GeoTapp bewijst het werk in het veld met locatie, tijd, foto\'s en verzegelde rapporten. Vaak complementair.' },
  da: { title: 'GeoTapp vs Personio - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Personio: to forskellige verdener. Personio styrer HR, fravær og løn; GeoTapp beviser markarbejde med verificeret GPS, fotos og rapporter, der ikke kan ændres. Ofte komplementære.' },
  sv: { title: 'GeoTapp vs Personio - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs Personio: två olika världar. Personio sköter HR, frånvaro och lön; GeoTapp bevisar fältarbete med verifierad GPS, foton och rapporter som inte kan ändras. Ofta komplementära.' },
  nb: { title: 'GeoTapp vs Personio - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Personio: to forskjellige verdener. Personio styrer HR, fravær og lønn; GeoTapp beviser feltarbeid med verifisert GPS, bilder og rapporter som ikke kan endres. Ofte komplementære.' },
  ru: { title: 'GeoTapp vs Personio, Сравнение 2026 | GeoTapp', description: 'GeoTapp vs Personio: два разных мира. Personio ведёт HR, отсутствия и зарплату; GeoTapp доказывает выездную работу проверенным GPS, фото и защищёнными отчётами. Часто дополняют друг друга.' },
};

type FaqItem = { q: string; a: string };

const FAQ: Record<string, FaqItem[]> = {
  it: [
    { q: 'Qual è la differenza principale tra GeoTapp e Personio?', a: 'Personio è una suite HR: anagrafica dipendenti, assenze e ferie, onboarding, paghe. GeoTapp è un sistema di prova del lavoro sul campo: genera report sigillati con posizione, ora e foto, prove che il cliente può controllare. Personio gestisce le persone dell\'organizzazione; GeoTapp dimostra cosa fa l\'operatore fuori sede.' },
    { q: 'Personio ha la rilevazione presenze?', a: 'Sì, Personio gestisce presenze e ore, pensate per l\'ufficio e l\'HR. Non produce però la prova dell\'intervento sul campo: niente posizione registrata al cantiere, report sigillati o verifica del cliente. Per chi ha squadre fuori sede, quel pezzo lo copre GeoTapp.' },
    { q: 'GeoTapp sostituisce Personio?', a: 'No, spesso sono complementari. Personio resta il gestionale HR dell\'organico; GeoTapp aggiunge la prova verificabile del lavoro svolto sul campo, con export delle ore pronto per le paghe. Molte aziende usano una suite per il personale per l\'ufficio e GeoTapp per gli operatori.' },
    { q: 'Personio ha un piano gratuito?', a: 'Personio è a preventivo, senza un piano gratuito pubblico. GeoTapp ha una prova gratuita e piani trasparenti, ed è modulare: accendi solo le funzioni che ti servono per il campo.' },
  ],
  en: [
    { q: 'What is the main difference between GeoTapp and Personio?', a: 'Personio is an HR suite: employee records, absences and leave, onboarding, payroll. GeoTapp is a field proof-of-work system: it generates sealed reports with location, time and photos, proof that the client can check. Personio manages the people in the organisation; GeoTapp proves what the operator does off-site.' },
    { q: 'Does Personio have attendance tracking?', a: 'Yes, Personio handles attendance and hours, built for the office and HR. But it does not produce proof of the field job: no position recorded at the site, sealed reports or client verification. For companies with off-site crews, GeoTapp covers that part.' },
    { q: 'Does GeoTapp replace Personio?', a: 'No, they are often complementary. Personio stays the HR system for staff; GeoTapp adds verifiable proof of field work, with hours exported ready for payroll. Many companies use a staff-management suite for the office and GeoTapp for field operators.' },
    { q: 'Does Personio have a free plan?', a: 'Personio is quote-based, with no public free plan. GeoTapp has a free trial and transparent plans, and is modular: switch on only the features you need for the field.' },
  ],
  de: [
    { q: 'Was ist der Hauptunterschied zwischen GeoTapp und Personio?', a: 'Personio ist eine HR-Suite: Mitarbeiterstammdaten, Abwesenheiten und Urlaub, Onboarding, Lohnabrechnung. GeoTapp ist ein System für den Nachweis der Arbeit im Außendienst: Es erstellt versiegelte Berichte mit Position, Uhrzeit und Fotos, die der Kunde prüfen kann. Personio verwaltet die Menschen der Organisation; GeoTapp belegt, was der Mitarbeiter außerhalb des Betriebs tut.' },
    { q: 'Hat Personio eine Zeiterfassung?', a: 'Ja, Personio verwaltet Anwesenheit und Stunden, gedacht fürs Büro und die Personalabteilung. Es erstellt aber keinen Nachweis des Einsatzes im Außendienst: keine an der Baustelle erfasste Position, keine versiegelten Berichte, keine Überprüfung durch den Kunden. Für alle mit Teams im Außendienst deckt GeoTapp genau diesen Teil ab.' },
    { q: 'Ersetzt GeoTapp Personio?', a: 'Nein, oft ergänzen sie sich. Personio bleibt das HR-System der Belegschaft; GeoTapp ergänzt den überprüfbaren Nachweis der Arbeit im Außendienst, mit einem Export der Stunden für die Lohnabrechnung. Viele Unternehmen nutzen eine Personalsuite fürs Büro und GeoTapp für die Mitarbeiter im Außendienst.' },
    { q: 'Hat Personio einen kostenlosen Tarif?', a: 'Personio arbeitet mit Angeboten, ohne öffentlichen kostenlosen Tarif. GeoTapp hat eine kostenlose Testphase und transparente Tarife und ist modular: Sie schalten nur die Funktionen frei, die Sie für den Außendienst brauchen.' },
  ],
  fr: [
    { q: 'Quelle est la principale différence entre GeoTapp et Personio ?', a: 'Personio est une suite RH : fiches employés, absences et congés, onboarding, paie. GeoTapp est un système de preuve du travail sur le terrain : il génère des rapports scellés avec GPS vérifié, photos et signature numérique, des preuves que le client peut contrôler. Personio gère les personnes de l\'organisation ; GeoTapp prouve ce que l\'opérateur fait hors site.' },
    { q: 'Personio a-t-il le suivi des présences ?', a: 'Oui, Personio gère présences et heures, pensé pour le bureau et les RH. Mais il ne produit pas la preuve de l\'intervention terrain : pas de GPS vérifié sur le chantier, de rapports scellés ni de vérification client. Pour les entreprises avec des équipes hors site, GeoTapp couvre cette partie.' },
    { q: 'GeoTapp remplace-t-il Personio ?', a: 'Non, ils sont souvent complémentaires. Personio reste le système RH du personnel ; GeoTapp ajoute la preuve vérifiable du travail terrain, avec les heures exportées prêtes pour la paie. Beaucoup d\'entreprises utilisent une suite RH pour le bureau et GeoTapp pour les opérateurs terrain.' },
    { q: 'Personio a-t-il un plan gratuit ?', a: 'Personio fonctionne sur devis, sans plan gratuit public. GeoTapp propose un essai gratuit et des plans transparents, et il est modulaire : activez seulement les fonctions dont vous avez besoin pour le terrain.' },
  ],
  es: [
    { q: '¿Cuál es la diferencia principal entre GeoTapp y Personio?', a: 'Personio es una suite de RRHH: fichas de empleados, ausencias y vacaciones, onboarding, nóminas. GeoTapp es un sistema de prueba del trabajo de campo: genera informes sellados con GPS verificado, fotos y firma digital, pruebas que el cliente puede comprobar. Personio gestiona a las personas de la organización; GeoTapp demuestra qué hace el operario fuera de la oficina.' },
    { q: '¿Tiene Personio control de asistencia?', a: 'Sí, Personio gestiona asistencia y horas, pensado para la oficina y RRHH. Pero no produce la prueba de la intervención de campo: sin GPS verificado en la obra, informes sellados ni verificación del cliente. Para empresas con equipos fuera de sede, GeoTapp cubre esa parte.' },
    { q: '¿GeoTapp sustituye a Personio?', a: 'No, a menudo son complementarios. Personio sigue siendo el sistema de RRHH del personal; GeoTapp añade la prueba verificable del trabajo de campo, con horas exportadas listas para nóminas. Muchas empresas usan una suite de RRHH para la oficina y GeoTapp para los operarios de campo.' },
    { q: '¿Personio tiene un plan gratuito?', a: 'Personio es por presupuesto, sin plan gratuito público. GeoTapp tiene una prueba gratuita y planes transparentes, y es modular: activa solo las funciones que necesitas para el campo.' },
  ],
  pt: [
    { q: 'Qual é a diferença principal entre GeoTapp e Personio?', a: 'A Personio é uma suite de RH: fichas de colaboradores, ausências e férias, onboarding, salários. A GeoTapp é um sistema de prova do trabalho no terreno: gera relatórios selados com GPS verificado, fotos e assinatura digital, provas que o cliente pode verificar. A Personio gere as pessoas da organização; a GeoTapp prova o que o operador faz fora do escritório.' },
    { q: 'A Personio tem controlo de presenças?', a: 'Sim, a Personio gere presenças e horas, pensada para o escritório e RH. Mas não produz a prova da intervenção no terreno: sem GPS verificado na obra, relatórios selados ou verificação do cliente. Para empresas com equipas fora de sede, a GeoTapp cobre essa parte.' },
    { q: 'A GeoTapp substitui a Personio?', a: 'Não, muitas vezes são complementares. A Personio continua o sistema de RH do pessoal; a GeoTapp acrescenta a prova verificável do trabalho no terreno, com horas exportadas prontas para salários. Muitas empresas usam uma suite de RH para o escritório e a GeoTapp para os operadores no terreno.' },
    { q: 'A Personio tem plano gratuito?', a: 'A Personio é por orçamento, sem plano gratuito público. A GeoTapp tem um teste gratuito e planos transparentes, e é modular: ativa só as funções de que precisa para o terreno.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Personio?', a: 'Personio is een hr-suite: personeelsdossiers, afwezigheid en verlof, onboarding, salaris. GeoTapp is een systeem voor bewijs van het werk in het veld: het maakt verzegelde rapporten met locatie, tijd en foto\'s, bewijs dat de klant kan controleren. Personio beheert de mensen van de organisatie; GeoTapp toont aan wat de medewerker buiten de deur doet.' },
    { q: 'Heeft Personio aanwezigheidsregistratie?', a: 'Ja, Personio beheert aanwezigheid en uren, bedoeld voor kantoor en hr. Het maakt echter niet het bewijs van de klus in het veld: geen locatie die op de bouwplaats is vastgelegd, geen verzegelde rapporten en geen controle door de klant. Voor wie teams buiten de deur heeft, dekt GeoTapp dat onderdeel.' },
    { q: 'Vervangt GeoTapp Personio?', a: 'Nee, vaak vullen ze elkaar aan. Personio blijft het hr-beheersysteem van het personeelsbestand; GeoTapp voegt het controleerbare bewijs van het werk in het veld toe, met export van de uren klaar voor de salarissen. Veel bedrijven gebruiken een personeelssuite voor kantoor en GeoTapp voor de medewerkers in het veld.' },
    { q: 'Heeft Personio een gratis abonnement?', a: 'Personio werkt op offerte, zonder openbaar gratis abonnement. GeoTapp heeft een gratis proefperiode en transparante abonnementen, en is modulair: u schakelt alleen de functies in die u voor het veld nodig hebt.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Personio?', a: 'Personio er en HR-suite: medarbejderdata, fravær og ferie, onboarding, løn. GeoTapp er et arbejdsbevis-system til marken: det genererer forseglede rapporter med verificeret GPS, fotos og digital signatur, beviser kunden kan kontrollere. Personio styrer organisationens mennesker; GeoTapp beviser, hvad medarbejderen gør ude.' },
    { q: 'Har Personio fremmøderegistrering?', a: 'Ja, Personio styrer fremmøde og timer, bygget til kontor og HR. Men det producerer ikke bevis for markopgaven: intet GPS verificeret på stedet, forseglede rapporter eller kundeverificering. For virksomheder med udekørende hold dækker GeoTapp den del.' },
    { q: 'Erstatter GeoTapp Personio?', a: 'Nej, de er ofte komplementære. Personio forbliver HR-systemet for personalet; GeoTapp tilføjer verificerbart bevis for markarbejde, med timer eksporteret klar til løn. Mange virksomheder bruger en HR-suite til kontoret og GeoTapp til medarbejdere i marken.' },
    { q: 'Har Personio en gratis plan?', a: 'Personio er tilbudsbaseret uden en offentlig gratis plan. GeoTapp har en gratis prøveperiode og gennemsigtige planer og er modulær: aktivér kun de funktioner, du har brug for i marken.' },
  ],
  sv: [
    { q: 'Vad är den viktigaste skillnaden mellan GeoTapp och Personio?', a: 'Personio är en HR-suite: personaldata, frånvaro och ledighet, onboarding, lön. GeoTapp är ett arbetsbevis-system för fält: det skapar förseglade rapporter med verifierad GPS, foton och digital signatur, bevis som kunden kan kontrollera. Personio hanterar organisationens människor; GeoTapp bevisar vad medarbetaren gör ute.' },
    { q: 'Har Personio närvaroregistrering?', a: 'Ja, Personio hanterar närvaro och timmar, byggt för kontor och HR. Men det producerar inte bevis på fältuppdraget: ingen GPS verifierad på plats, förseglade rapporter eller kundverifiering. För företag med fältteam täcker GeoTapp den delen.' },
    { q: 'Ersätter GeoTapp Personio?', a: 'Nej, de är ofta komplementära. Personio förblir HR-systemet för personalen; GeoTapp lägger till verifierbart bevis på fältarbete, med timmar exporterade redo för lön. Många företag använder en HR-suite för kontoret och GeoTapp för fältpersonal.' },
    { q: 'Har Personio en gratisplan?', a: 'Personio är offertbaserat utan en offentlig gratisplan. GeoTapp har en gratis testperiod och transparenta planer och är modulärt: aktivera bara de funktioner du behöver för fältet.' },
  ],
  nb: [
    { q: 'Hva er den viktigste forskjellen mellom GeoTapp og Personio?', a: 'Personio er en HR-suite: personaldata, fravær og ferie, onboarding, lønn. GeoTapp er et arbeidsbevis-system for felt: det lager forseglede rapporter med verifisert GPS, bilder og digital signatur, bevis kunden kan kontrollere. Personio styrer menneskene i organisasjonen; GeoTapp beviser hva medarbeideren gjør ute.' },
    { q: 'Har Personio oppmøteregistrering?', a: 'Ja, Personio styrer oppmøte og timer, bygget for kontor og HR. Men det produserer ikke bevis på feltoppdraget: ingen GPS verifisert på stedet, forseglede rapporter eller kundeverifisering. For bedrifter med felt-team dekker GeoTapp den delen.' },
    { q: 'Erstatter GeoTapp Personio?', a: 'Nei, de er ofte komplementære. Personio forblir HR-systemet for de ansatte; GeoTapp legger til verifiserbart bevis på feltarbeid, med timer eksportert klar for lønn. Mange bedrifter bruker en HR-suite for kontoret og GeoTapp for feltarbeidere.' },
    { q: 'Har Personio en gratis plan?', a: 'Personio er tilbudsbasert uten en offentlig gratis plan. GeoTapp har en gratis prøveperiode og transparente planer og er modulær: aktiver bare funksjonene du trenger i felt.' },
  ],
  ru: [
    { q: 'В чём главное различие между GeoTapp и Personio?', a: 'Personio, это HR-система: карточки сотрудников, отсутствия и отпуска, онбординг, зарплата. GeoTapp, это система доказательства выездной работы: она формирует защищённые отчёты с проверенным GPS, фото и цифровой подписью, доказательства, которые заказчик может проверить. Personio управляет людьми организации; GeoTapp доказывает, что сотрудник делает вне офиса.' },
    { q: 'Есть ли у Personio учёт присутствия?', a: 'Да, Personio ведёт присутствие и часы, для офиса и HR. Но она не даёт доказательства выездного задания: нет GPS, проверенного на месте, защищённых отчётов или проверки заказчиком. Для компаний с выездными бригадами эту часть закрывает GeoTapp.' },
    { q: 'Заменяет ли GeoTapp Personio?', a: 'Нет, они часто дополняют друг друга. Personio остаётся HR-системой для персонала; GeoTapp добавляет проверяемое доказательство выездной работы, с выгрузкой часов для зарплаты. Многие компании используют HR-систему для офиса и GeoTapp для выездных сотрудников.' },
    { q: 'Есть ли у Personio бесплатный тариф?', a: 'Personio работает по запросу цены, без публичного бесплатного тарифа. У GeoTapp есть бесплатный пробный период и прозрачные тарифы, и он модульный: включайте только нужные для поля функции.' },
  ],
};

const ROWS_LABELS: Record<string, string[]> = {
  it: ['Posizione registrata e controllata a ogni timbratura','Report sigillato crittograficamente','Prove fotografiche collegate a GPS e timestamp','Verifica indipendente da parte del cliente','Tracciamento ore','App mobile Android/iOS','Messaggistica interna proprietaria','Export presenze/paghe','Piano gratuito','Gestione commesse multi-sito','Posizione rilevata solo quando si timbra, mai in continuo','Informativa GPS firmata nell\'app prima di timbrare*'],
  en: ['Position recorded and checked at every clock-in','Cryptographically sealed report','Photo evidence linked to GPS and timestamp','Independent verification by the client','Time tracking','Mobile app Android/iOS','Built-in messaging','Payroll/attendance export','Free plan','Multi-site job management','Position recorded only at clock-in, never continuously','GPS notice signed in the app before clocking in*'],
  de: ['Position bei jedem Stempeln erfasst und geprüft','Kryptographisch versiegelter Bericht','Fotonachweise mit GPS und Zeitstempel verknüpft','Unabhängige Überprüfung durch den Kunden','Zeiterfassung','Mobile App Android/iOS','Eigene interne Nachrichten','Export von Anwesenheit/Lohndaten','Kostenloser Tarif','Verwaltung mehrerer Standorte','Position nur beim Stempeln erfasst, nie durchgehend','GPS-Information vor dem Stempeln in der App unterschrieben*'],
  fr: ['GPS vérifié sur le lieu d\'intervention','Rapport scellé cryptographiquement','Preuves photographiques liées au GPS et à l\'horodatage','Vérification indépendante par le client','Suivi des heures','Application mobile Android/iOS','Messagerie interne intégrée','Export paie/présences','Plan gratuit','Gestion de chantiers multi-sites','Géolocalisation conforme au RGPD','Avis de confidentialité GPS automatique avec signature numérique*'],
  es: ['GPS verificado en el lugar de la intervención','Informe sellado criptográficamente','Pruebas fotográficas vinculadas a GPS y marca de tiempo','Verificación independiente por el cliente','Seguimiento de horas','App móvil Android/iOS','Mensajería interna propia','Exportación de nóminas/presencia','Plan gratuito','Gestión de obras multisede','Geolocalización conforme al RGPD','Aviso de privacidad GPS automático con firma digital*'],
  pt: ['GPS verificado no local da intervenção','Relatório selado criptograficamente','Provas fotográficas ligadas a GPS e data/hora','Verificação independente pelo cliente','Controlo de horas','App móvel Android/iOS','Mensagens internas próprias','Exportação de salários/presenças','Plano gratuito','Gestão de obras multilocal','Geolocalização conforme o RGPD','Aviso de privacidade GPS automático com assinatura digital*'],
  nl: ['Locatie vastgelegd en gecontroleerd bij elke registratie','Cryptografisch verzegeld rapport','Fotobewijzen gekoppeld aan gps en tijdstempel','Onafhankelijke controle door de klant','Bijhouden van uren','Mobiele app voor Android/iOS','Eigen interne berichten','Export van aanwezigheid/salarissen','Gratis abonnement','Opdrachtenbeheer voor meerdere locaties','Locatie alleen bij het registreren, nooit doorlopend','GPS-verklaring ondertekend in de app vóór het registreren*'],
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
  it: 'In breve: Personio gestisce HR, assenze e paghe dell\'organico; GeoTapp prova il lavoro svolto sul campo con posizione alla timbratura, report sigillato e verifica del cliente. Spesso si affiancano.',
  en: 'In short: Personio manages HR, absences and payroll; GeoTapp proves field work with the position at clock-in, a sealed report and client verification. They often work side by side.',
  de: 'Kurz gesagt: Personio verwaltet HR, Abwesenheiten und Lohnabrechnung der Belegschaft; GeoTapp belegt die geleistete Arbeit im Außendienst mit Position beim Stempeln, versiegeltem Bericht und Überprüfung durch den Kunden. Oft laufen sie nebeneinander.',
  fr: 'En bref : Personio gère RH, absences et paie ; GeoTapp prouve le travail terrain avec GPS vérifié, rapports scellés et vérification client. Ils fonctionnent souvent ensemble.',
  es: 'En resumen: Personio gestiona RRHH, ausencias y nóminas; GeoTapp prueba el trabajo de campo con GPS verificado, informes sellados y verificación del cliente. A menudo se complementan.',
  pt: 'Em resumo: a Personio gere RH, ausências e salários; a GeoTapp prova o trabalho no terreno com GPS verificado, relatórios selados e verificação do cliente. Muitas vezes complementam-se.',
  nl: 'Kort gezegd: Personio beheert hr, afwezigheid en salaris van het personeelsbestand; GeoTapp bewijst het uitgevoerde werk in het veld met locatie bij de registratie, verzegeld rapport en controle door de klant. Vaak vullen ze elkaar aan.',
  da: 'Kort sagt: Personio styrer HR, fravær og løn; GeoTapp beviser markarbejde med verificeret GPS, forseglede rapporter og kundeverificering. De supplerer ofte hinanden.',
  sv: 'Kort sagt: Personio hanterar HR, frånvaro och lön; GeoTapp bevisar fältarbete med verifierad GPS, förseglade rapporter och kundverifiering. De kompletterar ofta varandra.',
  nb: 'Kort sagt: Personio styrer HR, fravær og lønn; GeoTapp beviser feltarbeid med verifisert GPS, forseglede rapporter og kundeverifisering. De utfyller ofte hverandre.',
  ru: 'Коротко: Personio ведёт HR, отсутствия и зарплату; GeoTapp доказывает выездную работу проверенным GPS, защищёнными отчётами и проверкой заказчиком. Часто дополняют друг друга.',
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
  fr: '* Par la loi (RGPD Art. 13, et en Italie Art. 4 du Statut des travailleurs), chaque employé doit signer un avis de confidentialité avant d\'être géolocalisé. La plupart des logiciels ne le gèrent pas : le risque juridique reste à l\'employeur. GeoTapp génère automatiquement l\'avis personnalisé, le fait signer numériquement et bloque l\'accès GPS tant qu\'il n\'est pas signé.',
  es: '* Por ley (RGPD Art. 13, y en Italia Art. 4 del Estatuto de los Trabajadores), cada empleado debe firmar un aviso de privacidad antes de ser geolocalizado. La mayoría del software no lo gestiona: el riesgo legal queda con el empleador. GeoTapp genera automáticamente el aviso personalizado, lo hace firmar digitalmente y bloquea el acceso GPS hasta que esté firmado.',
  pt: '* Por lei (RGPD Art. 13, e em Itália Art. 4 do Estatuto dos Trabalhadores), cada funcionário deve assinar um aviso de privacidade antes de ser geolocalizado. A maioria do software não trata disto: o risco legal fica com o empregador. A GeoTapp gera automaticamente o aviso personalizado, fá-lo assinar digitalmente e bloqueia o acesso GPS até estar assinado.',
  nl: '* Volgens de wet (art. 13 AVG en, in Italië, art. 4 van het arbeidsstatuut) moet elke werknemer worden geïnformeerd voordat hij wordt gelokaliseerd. Laat de software deze stap aan de verantwoordelijke over, dan blijft het risico bij hem. GeoTapp maakt de persoonlijke privacyverklaring klaar, laat die in de app voor kennisgeving ondertekenen en laat niet registreren totdat ze is ondertekend.',
  da: '* Ifølge loven (GDPR Art. 13, og i Italien Art. 4 i medarbejderstatutten) skal hver medarbejder underskrive en privatlivserklæring, før vedkommende geolokaliseres. De fleste programmer håndterer ikke dette: den juridiske risiko bliver hos arbejdsgiveren. GeoTapp genererer automatisk den personlige erklæring, får den underskrevet digitalt og blokerer GPS-adgang, indtil den er underskrevet.',
  sv: '* Enligt lag (GDPR Art. 13, och i Italien Art. 4 i arbetstagarstadgan) måste varje anställd underteckna ett integritetsmeddelande innan geolokalisering. De flesta program hanterar inte detta: den juridiska risken stannar hos arbetsgivaren. GeoTapp skapar automatiskt det personliga meddelandet, låter det signeras digitalt och blockerar GPS-åtkomst tills det är signerat.',
  nb: '* Ifølge loven (GDPR Art. 13, og i Italia Art. 4 i arbeidstakerstatutten) må hver ansatt signere en personvernerklæring før geolokalisering. De fleste programmer håndterer ikke dette: den juridiske risikoen blir hos arbeidsgiveren. GeoTapp lager automatisk den personlige erklæringen, får den signert digitalt og blokkerer GPS-tilgang til den er signert.',
  ru: '* По закону (GDPR ст. 13, а в Италии ст. 4 Статута трудящихся) каждый сотрудник должен подписать уведомление о конфиденциальности до геолокации. Большинство программ этого не обеспечивают: юридический риск остаётся на работодателе. GeoTapp автоматически формирует персональное уведомление, даёт подписать его цифровой подписью и блокирует доступ к GPS, пока оно не подписано.',
};

const T: Record<string, Copy> = {
  it: {
    badge: 'Confronto Software', h1sub: 'gestire il personale o provare il lavoro sul campo?',
    desc: 'Personio gestisce HR, ferie e paghe dell\'organico. GeoTapp prova cosa fa l\'operatore fuori sede, con posizione, ora e foto. Due mondi diversi, spesso complementari.',
    summary: 'In sintesi:',
    summaryText: 'Personio è un\'ottima suite HR per anagrafica, assenze e paghe. Non è pensata per dimostrare l\'intervento sul campo: niente posizione alla timbratura, report sigillati o verifica del cliente. Per chi ha operatori fuori sede, GeoTapp copre proprio quel pezzo, e le ore escono pronte per le paghe.',
    footnote: FOOTNOTE.it,
    features: 'Confronto funzionalità chiave', feat: 'Funzionalità',
    diff: 'Gestione del personale o prova del lavoro sul campo',
    geo: ['Posizione rilevata dal telefono a ogni timbratura, non inserita a mano','Report sigillati con hash crittografico alla chiusura dell\'intervento','Prove fotografiche integrate con GPS e timestamp','Il committente verifica da solo che il report non sia stato modificato','Progettato per operatori sul campo, non per l\'ufficio HR'],
    comp: ['Suite HR completa: anagrafica, assenze, onboarding','Gestione paghe e presenze d\'ufficio','App mobile self-service per i dipendenti','Nessuna prova sigillata dell\'intervento sul campo','Nessuna posizione alla timbratura, foto di prova o verifica del cliente'],
    useCasesTitle: 'Chi dovrebbe affiancare GeoTapp a un HR come Personio',
    useCases: ['Imprese di pulizie e facility management con clienti esigenti','Manutentori e installatori che devono documentare le ore fatturate','Aziende con HR in ufficio ma squadre operative sul campo','Chi ha già avuto contestazioni su interventi non riconosciuti','Aziende con più squadre distribuite su cantieri diversi'],
    cta: 'Vuoi vedere la differenza in pratica?',
    ctaDesc: 'Provalo su un intervento vero: 14 giorni gratis, senza carta di credito.',
    ctaBtn: 'Inizia la prova gratuita',
  },
  en: {
    badge: 'Software Comparison', h1sub: 'managing staff or proving field work?',
    desc: 'Personio runs HR, leave and payroll for your staff. GeoTapp proves what the operator does off-site, with location, time and photos. Two different worlds, often complementary.',
    summary: 'In short:',
    summaryText: 'Personio is a great HR suite for records, absences and payroll. It is not built to prove field jobs: no position at clock-in, sealed reports or client verification. For companies with off-site operators, GeoTapp covers exactly that part, and hours come out ready for payroll.',
    footnote: FOOTNOTE.en,
    features: 'Key feature comparison', feat: 'Feature',
    diff: 'Managing staff or proof of field work',
    geo: ['Position taken from the phone at every clock-in, not typed in by hand','Reports sealed with a cryptographic hash when the job is closed','Photo evidence built in with GPS and timestamp','The client checks alone that the report has not been modified','Built for field operators, not the HR office'],
    comp: ['Full HR suite: records, absences, onboarding','Payroll and office attendance management','Mobile self-service app for employees','No sealed proof of the field job','No position at clock-in, proof photos or client verification'],
    useCasesTitle: 'Who should pair GeoTapp with an HR suite like Personio',
    useCases: ['Cleaning and facility management companies with demanding clients','Maintenance crews and installers who must defend billed hours','Companies with HR in the office but operational crews in the field','Anyone who has already faced disputes over jobs the client did not recognise','Companies with several crews across different sites'],
    cta: 'Want to see the difference in practice?',
    ctaDesc: 'Try it on a real job: 14 days free, no credit card.',
    ctaBtn: 'Start the free trial',
  },
  de: {
    badge: 'Software-Vergleich', h1sub: 'Personal verwalten oder Arbeit im Außendienst nachweisen?',
    desc: 'Personio verwaltet HR, Urlaub und Lohnabrechnung der Belegschaft. GeoTapp belegt, was der Mitarbeiter außerhalb des Betriebs tut, mit Position, Uhrzeit und Fotos. Zwei verschiedene Welten, oft ergänzend.',
    summary: 'Kurz gesagt:',
    summaryText: 'Personio ist eine gute HR-Suite für Stammdaten, Abwesenheiten und Lohnabrechnung. Sie ist nicht dafür gedacht, den Einsatz im Außendienst zu belegen: keine Position beim Stempeln, keine versiegelten Berichte, keine Überprüfung durch den Kunden. Für alle mit Mitarbeitern im Außendienst deckt GeoTapp genau diesen Teil ab, und die Stunden kommen fertig für die Lohnabrechnung heraus.',
    footnote: FOOTNOTE.de,
    features: 'Vergleich der wichtigsten Funktionen', feat: 'Funktion',
    diff: 'Personalverwaltung oder Arbeitsnachweis im Außendienst',
    geo: ['Position beim Stempeln vom Telefon erfasst, nicht von Hand eingetragen','Berichte beim Abschluss des Einsatzes mit kryptographischem Hash versiegelt','Fotonachweise mit GPS und Zeitstempel integriert','Der Auftraggeber prüft selbst, dass der Bericht nicht verändert wurde','Für Mitarbeiter im Außendienst gebaut, nicht für die HR-Abteilung'],
    comp: ['Komplette HR-Suite: Stammdaten, Abwesenheiten, Onboarding','Lohnabrechnung und Anwesenheit fürs Büro','Mobile Self-Service-App für Mitarbeiter','Kein versiegelter Nachweis des Einsatzes im Außendienst','Keine Position beim Stempeln, kein Nachweisfoto, keine Überprüfung durch den Kunden'],
    useCasesTitle: 'Wer GeoTapp neben ein HR-System wie Personio stellen sollte',
    useCases: ['Reinigungsfirmen und Facility-Management mit anspruchsvollen Kunden','Wartungsbetriebe und Installateure, die abgerechnete Stunden dokumentieren müssen','Betriebe mit HR im Büro, aber Einsatzteams im Außendienst','Wer schon Streit über nicht anerkannte Einsätze hatte','Betriebe mit mehreren Teams auf verschiedenen Baustellen'],
    cta: 'Möchten Sie den Unterschied in der Praxis sehen?',
    ctaDesc: 'Testen Sie es an einem echten Einsatz: 14 Tage kostenlos, keine Kreditkarte.',
    ctaBtn: 'Kostenlos testen',
  },
  fr: {
    badge: 'Comparaison de logiciels', h1sub: 'gérer le personnel ou prouver le travail terrain ?',
    desc: 'Personio gère RH, congés et paie du personnel. GeoTapp prouve ce que l\'opérateur fait hors site, avec GPS vérifié et photos. Deux mondes différents, souvent complémentaires.',
    summary: 'En bref :',
    summaryText: 'Personio est une bonne suite RH pour fiches, absences et paie. Elle n\'est pas conçue pour prouver les interventions terrain : pas de GPS vérifié, de rapports scellés ni de vérification client. Pour les entreprises avec des opérateurs hors site, GeoTapp couvre exactement cette partie, et les heures sortent prêtes pour la paie.',
    footnote: FOOTNOTE.fr,
    features: 'Comparaison des fonctionnalités clés', feat: 'Fonctionnalité',
    diff: 'Gestion RH vs preuve du travail terrain',
    geo: ['GPS vérifié automatiquement, non saisi à la main','Rapports scellés par un hachage cryptographique à la clôture','Preuves photographiques intégrées avec GPS et horodatage','Le client vérifie l\'authenticité en toute autonomie','Conçu pour les opérateurs terrain, pas le bureau RH'],
    comp: ['Suite RH complète : fiches, absences, onboarding','Gestion de la paie et des présences de bureau','Application mobile self-service pour les employés','Aucune preuve scellée de l\'intervention terrain','Aucun GPS vérifié, preuve photo ni vérification client'],
    useCasesTitle: 'Qui devrait associer GeoTapp à une suite RH comme Personio',
    useCases: ['Entreprises de nettoyage et facility management avec clients exigeants','Agents de maintenance et installateurs qui doivent défendre les heures facturées','Entreprises avec RH au bureau mais équipes opérationnelles sur le terrain','Ceux qui ont déjà eu des litiges sur des interventions non reconnues','Entreprises avec plusieurs équipes sur des chantiers différents'],
    cta: 'Voir la différence en pratique ?',
    ctaDesc: 'Nous vous montrons comment une intervention devient une preuve vérifiable, en 20 minutes, sans engagement.',
    ctaBtn: 'Commencez gratuitement !',
  },
  es: {
    badge: 'Comparación de software', h1sub: '¿gestionar el personal o probar el trabajo de campo?',
    desc: 'Personio gestiona RRHH, vacaciones y nóminas del personal. GeoTapp prueba qué hace el operario fuera de la oficina, con GPS verificado y fotos. Dos mundos distintos, a menudo complementarios.',
    summary: 'En resumen:',
    summaryText: 'Personio es una buena suite de RRHH para fichas, ausencias y nóminas. No está pensada para probar las intervenciones de campo: sin GPS verificado, informes sellados ni verificación del cliente. Para empresas con operarios fuera de sede, GeoTapp cubre justo esa parte, y las horas salen listas para nóminas.',
    footnote: FOOTNOTE.es,
    features: 'Comparación de funciones clave', feat: 'Función',
    diff: 'Gestión de RRHH vs prueba del trabajo de campo',
    geo: ['GPS verificado automáticamente, no introducido a mano','Informes sellados con hash criptográfico al cerrar la intervención','Pruebas fotográficas integradas con GPS y marca de tiempo','El cliente verifica la autenticidad por sí mismo','Diseñado para operarios de campo, no para la oficina de RRHH'],
    comp: ['Suite de RRHH completa: fichas, ausencias, onboarding','Gestión de nóminas y presencia de oficina','App móvil de autoservicio para empleados','Sin prueba sellada de la intervención de campo','Sin GPS verificado, prueba fotográfica ni verificación del cliente'],
    useCasesTitle: 'Quién debería combinar GeoTapp con un RRHH como Personio',
    useCases: ['Empresas de limpieza y facility management con clientes exigentes','Técnicos de mantenimiento e instaladores que deben defender las horas facturadas','Empresas con RRHH en oficina pero equipos operativos en campo','Quien ya ha tenido reclamaciones por intervenciones no reconocidas','Empresas con varios equipos en obras distintas'],
    cta: '¿Quieres ver la diferencia en la práctica?',
    ctaDesc: 'Te mostramos cómo una intervención se convierte en prueba verificable, en 20 minutos, sin compromiso.',
    ctaBtn: '¡Empieza gratis ahora!',
  },
  pt: {
    badge: 'Comparação de software', h1sub: 'gerir o pessoal ou provar o trabalho no terreno?',
    desc: 'A Personio gere RH, férias e salários do pessoal. A GeoTapp prova o que o operador faz fora do escritório, com GPS verificado e fotos. Dois mundos diferentes, muitas vezes complementares.',
    summary: 'Em resumo:',
    summaryText: 'A Personio é uma boa suite de RH para fichas, ausências e salários. Não foi feita para provar as intervenções no terreno: sem GPS verificado, relatórios selados ou verificação do cliente. Para empresas com operadores fora de sede, a GeoTapp cobre exatamente essa parte, e as horas saem prontas para salários.',
    footnote: FOOTNOTE.pt,
    features: 'Comparação de funcionalidades-chave', feat: 'Funcionalidade',
    diff: 'Gestão de RH vs prova do trabalho no terreno',
    geo: ['GPS verificado automaticamente, não inserido à mão','Relatórios selados com hash criptográfico ao fechar a intervenção','Provas fotográficas integradas com GPS e data/hora','O cliente verifica a autenticidade sozinho','Concebido para operadores no terreno, não para o escritório de RH'],
    comp: ['Suite de RH completa: fichas, ausências, onboarding','Gestão de salários e presenças de escritório','App móvel de self-service para colaboradores','Sem prova selada da intervenção no terreno','Sem GPS verificado, prova fotográfica ou verificação do cliente'],
    useCasesTitle: 'Quem deve combinar a GeoTapp com um RH como a Personio',
    useCases: ['Empresas de limpeza e facility management com clientes exigentes','Equipas de manutenção e instaladores que têm de defender as horas faturadas','Empresas com RH no escritório mas equipas operacionais no terreno','Quem já teve contestações sobre intervenções não reconhecidas','Empresas com várias equipas em obras diferentes'],
    cta: 'Quer ver a diferença na prática?',
    ctaDesc: 'Mostramos-lhe como uma intervenção se torna prova verificável, em 20 minutos, sem compromisso.',
    ctaBtn: 'Comece grátis agora!',
  },
  nl: {
    badge: 'Softwarevergelijking',
    h1sub: 'personeel beheren of het werk in het veld bewijzen?',
    desc: 'Personio beheert hr, verlof en salaris van het personeelsbestand. GeoTapp toont aan wat de medewerker buiten de deur doet, met locatie, tijd en foto\'s. Twee verschillende werelden, vaak complementair.',
    summary: 'Kort gezegd:',
    summaryText: 'Personio is een uitstekende hr-suite voor personeelsdossiers, afwezigheid en salaris. Het is niet bedoeld om de klus in het veld aan te tonen: geen locatie bij de registratie, verzegelde rapporten of controle door de klant. Voor wie medewerkers buiten de deur heeft, dekt GeoTapp precies dat onderdeel, en de uren komen klaar voor de salarissen.',
    footnote: FOOTNOTE.nl,
    features: 'Vergelijking van de belangrijkste functies',
    feat: 'Functie',
    diff: 'Personeelsbeheer of bewijs van het werk in het veld',
    geo: ['Locatie door de telefoon bepaald bij elke registratie, niet met de hand ingevoerd','Rapporten verzegeld met een cryptografische hash bij het afsluiten van de klus','Geïntegreerd fotobewijs met gps en tijdstempel','De opdrachtgever controleert zelf dat het rapport niet is gewijzigd','Ontworpen voor medewerkers in het veld, niet voor de hr-afdeling'],
    comp: ['Complete hr-suite: personeelsdossiers, afwezigheid, onboarding','Beheer van salaris en kantoor-aanwezigheid','Mobiele self-service-app voor de werknemers','Geen verzegeld bewijs van de klus in het veld','Geen locatie bij de registratie, bewijsfoto\'s of controle door de klant'],
    useCasesTitle: 'Wie GeoTapp zou moeten naast een hr-systeem als Personio',
    useCases: ['Schoonmaakbedrijven en facility management met veeleisende klanten','Onderhoudsmonteurs en installateurs die de gefactureerde uren moeten documenteren','Bedrijven met hr op kantoor maar operationele teams in het veld','Wie al betwistingen heeft gehad over klussen die niet werden erkend','Bedrijven met meerdere ploegen verdeeld over verschillende bouwplaatsen'],
    cta: 'Wilt u het verschil in de praktijk zien?',
    ctaDesc: 'Probeer het op een echte klus: 14 dagen gratis, zonder creditcard.',
    ctaBtn: 'Start de gratis proefperiode',
  },
  da: {
    badge: 'Softwaresammenligning', h1sub: 'styre personalet eller bevise markarbejdet?',
    desc: 'Personio styrer HR, ferie og løn for personalet. GeoTapp beviser, hvad medarbejderen gør ude, med verificeret GPS og fotos. To forskellige verdener, ofte komplementære.',
    summary: 'Kort sagt:',
    summaryText: 'Personio er en god HR-suite til stamdata, fravær og løn. Den er ikke bygget til at bevise markopgaver: intet verificeret GPS, forseglede rapporter eller kundeverificering. For virksomheder med medarbejdere ude dækker GeoTapp netop den del, og timerne kommer klar til løn.',
    footnote: FOOTNOTE.da,
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion',
    diff: 'HR-styring vs bevis for markarbejde',
    geo: ['GPS verificeret automatisk, ikke indtastet manuelt','Rapporter forseglet med kryptografisk hash ved opgaveafslutning','Fotobeviser indbygget med GPS og tidsstempel','Kunden verificerer ægtheden selv','Bygget til medarbejdere i marken, ikke HR-kontoret'],
    comp: ['Komplet HR-suite: stamdata, fravær, onboarding','Styring af løn og kontorfremmøde','Mobil selvbetjenings-app til medarbejdere','Intet forseglet bevis for markopgaven','Intet verificeret GPS, fotobevis eller kundeverificering'],
    useCasesTitle: 'Hvem bør kombinere GeoTapp med en HR-suite som Personio',
    useCases: ['Rengørings- og facility management-firmaer med krævende kunder','Vedligeholdelseshold og installatører, der skal forsvare fakturerede timer','Virksomheder med HR på kontoret men operative hold i marken','Dem, der allerede har haft tvister om ikke-anerkendte opgaver','Virksomheder med flere hold på forskellige lokationer'],
    cta: 'Vil du se forskellen i praksis?',
    ctaDesc: 'Vi viser dig på 20 minutter, hvordan en opgave bliver til verificerbart bevis, uforpligtende.',
    ctaBtn: 'Kom gratis i gang nu!',
  },
  sv: {
    badge: 'Programvarujämförelse', h1sub: 'sköta personalen eller bevisa fältarbetet?',
    desc: 'Personio sköter HR, ledighet och lön för personalen. GeoTapp bevisar vad medarbetaren gör ute, med verifierad GPS och foton. Två olika världar, ofta komplementära.',
    summary: 'Kort sagt:',
    summaryText: 'Personio är en bra HR-suite för persondata, frånvaro och lön. Den är inte byggd för att bevisa fältuppdrag: ingen verifierad GPS, förseglade rapporter eller kundverifiering. För företag med personal ute täcker GeoTapp just den delen, och timmarna kommer ut redo för lön.',
    footnote: FOOTNOTE.sv,
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion',
    diff: 'HR-hantering vs bevis på fältarbete',
    geo: ['GPS verifierad automatiskt, inte inskriven för hand','Rapporter förseglade med kryptografisk hash vid avslut','Fotobevis inbyggda med GPS och tidsstämpel','Kunden verifierar äktheten själv','Byggd för fältpersonal, inte HR-kontoret'],
    comp: ['Komplett HR-suite: persondata, frånvaro, onboarding','Hantering av lön och kontorsnärvaro','Mobil självservice-app för anställda','Inget förseglat bevis på fältuppdraget','Ingen verifierad GPS, fotobevis eller kundverifiering'],
    useCasesTitle: 'Vem bör kombinera GeoTapp med en HR-suite som Personio',
    useCases: ['Städ- och facility management-företag med krävande kunder','Underhållsteam och installatörer som måste försvara fakturerade timmar','Företag med HR på kontoret men operativa team i fält','De som redan haft tvister om icke-erkända uppdrag','Företag med flera team på olika platser'],
    cta: 'Vill du se skillnaden i praktiken?',
    ctaDesc: 'Vi visar dig på 20 minuter hur ett uppdrag blir verifierbart bevis, utan förpliktelser.',
    ctaBtn: 'Kom igång gratis nu!',
  },
  nb: {
    badge: 'Programvaresammenligning', h1sub: 'styre personalet eller bevise feltarbeidet?',
    desc: 'Personio styrer HR, ferie og lønn for personalet. GeoTapp beviser hva medarbeideren gjør ute, med verifisert GPS og bilder. To forskjellige verdener, ofte komplementære.',
    summary: 'Kort sagt:',
    summaryText: 'Personio er en god HR-suite for persondata, fravær og lønn. Den er ikke bygget for å bevise feltoppdrag: ingen verifisert GPS, forseglede rapporter eller kundeverifisering. For bedrifter med ansatte ute dekker GeoTapp nettopp den delen, og timene kommer ut klare for lønn.',
    footnote: FOOTNOTE.nb,
    features: 'Sammenligning av nøkkelfunksjoner', feat: 'Funksjon',
    diff: 'HR-styring vs bevis på feltarbeid',
    geo: ['GPS verifisert automatisk, ikke skrevet inn for hånd','Rapporter forseglet med kryptografisk hash ved oppdragsslutt','Fotobevis innebygd med GPS og tidsstempel','Kunden verifiserer ektheten selv','Bygget for feltarbeidere, ikke HR-kontoret'],
    comp: ['Komplett HR-suite: persondata, fravær, onboarding','Styring av lønn og kontoroppmøte','Mobil selvbetjeningsapp for ansatte','Ingen forseglet bevis på feltoppdraget','Ingen verifisert GPS, fotobevis eller kundeverifisering'],
    useCasesTitle: 'Hvem bør kombinere GeoTapp med en HR-suite som Personio',
    useCases: ['Renholds- og facility management-firmaer med krevende kunder','Vedlikeholdslag og installatører som må forsvare fakturerte timer','Bedrifter med HR på kontoret men operative lag i felt','De som allerede har hatt tvister om ikke-anerkjente oppdrag','Bedrifter med flere lag på ulike steder'],
    cta: 'Vil du se forskjellen i praksis?',
    ctaDesc: 'Vi viser deg på 20 minutter hvordan et oppdrag blir til verifiserbart bevis, uforpliktende.',
    ctaBtn: 'Kom i gang gratis nå!',
  },
  ru: {
    badge: 'Сравнение ПО', h1sub: 'управлять персоналом или доказывать работу в поле?',
    desc: 'Personio ведёт HR, отпуска и зарплату персонала. GeoTapp доказывает, что сотрудник делает вне офиса, проверенным GPS и фото. Два разных мира, часто дополняющих друг друга.',
    summary: 'Коротко:',
    summaryText: 'Personio, хорошая HR-система для данных, отсутствий и зарплаты. Она не создана доказывать выездные задания: нет проверенного GPS, защищённых отчётов или проверки заказчиком. Для компаний с сотрудниками вне офиса GeoTapp закрывает именно эту часть, а часы выгружаются готовыми для зарплаты.',
    footnote: FOOTNOTE.ru,
    features: 'Сравнение ключевых функций', feat: 'Функция',
    diff: 'Управление HR vs доказательство работы в поле',
    geo: ['GPS проверяется автоматически, а не вводится вручную','Отчёты запечатываются криптографическим хешем при закрытии','Фотодоказательства встроены с GPS и меткой времени','Заказчик сам проверяет подлинность','Создано для выездных сотрудников, а не для HR-офиса'],
    comp: ['Полная HR-система: данные, отсутствия, онбординг','Управление зарплатой и офисным присутствием','Мобильное самообслуживание для сотрудников','Нет защищённого доказательства выездного задания','Нет проверенного GPS, фотодоказательства или проверки заказчиком'],
    useCasesTitle: 'Кому стоит дополнить HR-систему вроде Personio через GeoTapp',
    useCases: ['Клининговые и facility-компании с требовательными клиентами','Бригады обслуживания и монтажники, защищающие оплаченные часы','Компании с HR в офисе, но с бригадами в поле','Те, кто уже сталкивался со спорами по непризнанным работам','Компании с несколькими бригадами на разных объектах'],
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

export default async function GeoTappVsPersonioPage({ params }: { params: Promise<{ locale: string }> }) {
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
    competitorName: 'Personio',
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
        competitorName="Personio"
        competitorId="personio"
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
