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
  fr: { title: 'GeoTapp vs Personio - Comparatif 2026 | GeoTapp', description: 'GeoTapp vs Personio : deux mondes différents. Personio gère RH, absences et paie ; GeoTapp prouve le travail sur le terrain. Souvent complémentaires.' },
  es: { title: 'GeoTapp vs Personio - Comparación 2026 | GeoTapp', description: 'GeoTapp vs Personio: dos mundos distintos. Personio gestiona RR. HH., ausencias y nóminas de la plantilla; GeoTapp prueba el trabajo de campo con posición, hora, fotos e informes sellados. A menudo complementarios.' },
  pt: { title: 'GeoTapp vs Personio - Comparação 2026 | GeoTapp', description: 'GeoTapp vs Personio: dois mundos diferentes. A Personio gere RH, ausências e salários; a GeoTapp prova o trabalho no terreno com posição, hora, fotos e relatórios selados. Muitas vezes complementares.' },
  nl: { title: 'GeoTapp vs Personio - Vergelijking 2026 | GeoTapp', description: 'GeoTapp vs Personio: twee verschillende werelden. Personio beheert hr, afwezigheid en salaris van het personeelsbestand; GeoTapp bewijst het werk in het veld met locatie, tijd, foto\'s en verzegelde rapporten. Vaak complementair.' },
  da: { title: 'GeoTapp vs Personio - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Personio: to forskellige verdener. Personio styrer HR og løn; GeoTapp dokumenterer arbejdet i marken. Ofte komplementære.' },
  sv: { title: 'GeoTapp vs Personio - Jämförelse 2026 | GeoTapp', description: 'GeoTapp vs Personio: två olika världar. Personio sköter HR, frånvaro och lön; GeoTapp bevisar fältarbete med plats, tid, foton och förseglade rapporter. Ofta kompletterande.' },
  nb: { title: 'GeoTapp vs Personio - Sammenligning 2026 | GeoTapp', description: 'GeoTapp vs Personio: to ulike verdener. Personio styrer HR og lønn; GeoTapp dokumenterer arbeidet ute i felt. Ofte utfyllende.' },
  ru: { title: 'GeoTapp vs Personio - Сравнение 2026 | GeoTapp', description: 'GeoTapp vs Personio: два разных мира. Personio ведёт HR, отсутствия и зарплату; GeoTapp доказывает выездную работу местоположением, временем, фото и запечатанными отчётами. Часто дополняют друг друга.' },
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
    { q: 'Quelle est la différence principale entre GeoTapp et Personio ?', a: 'Personio est une suite RH : dossiers du personnel, absences et congés, onboarding, paie. GeoTapp est un système de preuve du travail sur le terrain : il génère des rapports scellés avec position, heure et photos, des preuves que le client peut contrôler. Personio gère les personnes de l\'organisation ; GeoTapp démontre ce que fait l\'opérateur hors site.' },
    { q: 'Personio propose-t-il le suivi des présences ?', a: 'Oui, Personio gère présences et heures, pensées pour le bureau et les RH. Il ne produit en revanche pas la preuve de l\'intervention sur le terrain : ni position enregistrée sur le chantier, ni rapports scellés, ni vérification par le client. Pour ceux qui ont des équipes hors site, GeoTapp couvre ce point.' },
    { q: 'GeoTapp remplace-t-il Personio ?', a: 'Non, ils sont souvent complémentaires. Personio reste le logiciel RH de l\'effectif ; GeoTapp ajoute la preuve vérifiable du travail effectué sur le terrain, avec un export des heures prêt pour la paie. Beaucoup d\'entreprises utilisent une suite RH pour le bureau et GeoTapp pour les opérateurs.' },
    { q: 'Personio a-t-il une offre gratuite ?', a: 'Personio fonctionne sur devis, sans offre gratuite publique. GeoTapp propose un essai gratuit et des offres transparentes, et il est modulaire : vous n\'activez que les fonctions dont vous avez besoin pour le terrain.' },
  ],
  es: [
    { q: '¿Cuál es la diferencia principal entre GeoTapp y Personio?', a: 'Personio es una suite de RR. HH.: ficha de empleados, ausencias y vacaciones, onboarding, nóminas. GeoTapp es un sistema de prueba del trabajo de campo: genera informes sellados con posición, hora y fotos, pruebas que el cliente puede comprobar. Personio gestiona a las personas de la organización; GeoTapp demuestra qué hace el operario fuera de la sede.' },
    { q: '¿Tiene Personio control de asistencia?', a: 'Sí, Personio gestiona asistencia y horas, pensadas para la oficina y RR. HH. Pero no produce la prueba de la intervención de campo: ni posición registrada en la obra, ni informes sellados, ni verificación del cliente. Para quien tiene equipos fuera de la sede, esa parte la cubre GeoTapp.' },
    { q: '¿GeoTapp sustituye a Personio?', a: 'No, a menudo son complementarios. Personio sigue siendo el sistema de RR. HH. de la plantilla; GeoTapp añade la prueba verificable del trabajo hecho en campo, con exportación de horas lista para las nóminas. Muchas empresas usan una suite de personal para la oficina y GeoTapp para los operarios.' },
    { q: '¿Tiene Personio un plan gratuito?', a: 'Personio funciona con presupuesto, sin un plan gratuito público. GeoTapp tiene una prueba gratuita y planes transparentes, y es modular: activas solo las funciones que necesitas para el campo.' },
  ],
  pt: [
    { q: 'Qual é a principal diferença entre a GeoTapp e a Personio?', a: 'A Personio é uma suite de RH: ficha dos colaboradores, ausências e férias, onboarding, salários. A GeoTapp é um sistema de prova do trabalho no terreno: gera relatórios selados com posição, hora e fotos, provas que o cliente pode verificar. A Personio gere as pessoas da organização; a GeoTapp demonstra o que o operador faz fora da sede.' },
    { q: 'A Personio tem registo de presenças?', a: 'Sim, a Personio gere presenças e horas, pensadas para o escritório e os RH. Mas não produz a prova da intervenção no terreno: sem posição registada na obra, sem relatórios selados nem verificação do cliente. Para quem tem equipas fora da sede, essa parte é coberta pela GeoTapp.' },
    { q: 'A GeoTapp substitui a Personio?', a: 'Não, muitas vezes são complementares. A Personio continua a ser o sistema de RH do pessoal; a GeoTapp acrescenta a prova verificável do trabalho realizado no terreno, com exportação das horas pronta para o processamento salarial. Muitas empresas usam uma suite de RH para o escritório e a GeoTapp para os operadores.' },
    { q: 'A Personio tem plano gratuito?', a: 'A Personio funciona por orçamento, sem plano gratuito público. A GeoTapp tem um período de teste gratuito e planos transparentes, e é modular: ative só as funções de que precisa para o terreno.' },
  ],
  nl: [
    { q: 'Wat is het belangrijkste verschil tussen GeoTapp en Personio?', a: 'Personio is een hr-suite: personeelsdossiers, afwezigheid en verlof, onboarding, salaris. GeoTapp is een systeem voor bewijs van het werk in het veld: het maakt verzegelde rapporten met locatie, tijd en foto\'s, bewijs dat de klant kan controleren. Personio beheert de mensen van de organisatie; GeoTapp toont aan wat de medewerker buiten de deur doet.' },
    { q: 'Heeft Personio aanwezigheidsregistratie?', a: 'Ja, Personio beheert aanwezigheid en uren, bedoeld voor kantoor en hr. Het maakt echter niet het bewijs van de klus in het veld: geen locatie die op de bouwplaats is vastgelegd, geen verzegelde rapporten en geen controle door de klant. Voor wie teams buiten de deur heeft, dekt GeoTapp dat onderdeel.' },
    { q: 'Vervangt GeoTapp Personio?', a: 'Nee, vaak vullen ze elkaar aan. Personio blijft het hr-beheersysteem van het personeelsbestand; GeoTapp voegt het controleerbare bewijs van het werk in het veld toe, met export van de uren klaar voor de salarissen. Veel bedrijven gebruiken een personeelssuite voor kantoor en GeoTapp voor de medewerkers in het veld.' },
    { q: 'Heeft Personio een gratis abonnement?', a: 'Personio werkt op offerte, zonder openbaar gratis abonnement. GeoTapp heeft een gratis proefperiode en transparante abonnementen, en is modulair: u schakelt alleen de functies in die u voor het veld nodig hebt.' },
  ],
  da: [
    { q: 'Hvad er den vigtigste forskel mellem GeoTapp og Personio?', a: 'Personio er en HR-suite: medarbejderregister, fravær og ferie, onboarding, løn. GeoTapp er et system til dokumentation af arbejdet i marken: det laver forseglede rapporter med position, tid og fotos, som kunden kan kontrollere. Personio styrer folkene i organisationen; GeoTapp viser, hvad medarbejderen gør ude hos kunden.' },
    { q: 'Har Personio fremmøderegistrering?', a: 'Ja, Personio håndterer fremmøde og timer, lavet til kontoret og HR. Det leverer dog ikke dokumentationen for opgaven i marken: ingen position registreret på byggepladsen, ingen forseglede rapporter og ingen verificering fra kundens side. For dem, der har hold ude hos kunderne, dækker GeoTapp den del.' },
    { q: 'Erstatter GeoTapp Personio?', a: 'Nej, de supplerer ofte hinanden. Personio forbliver HR-systemet for medarbejderne; GeoTapp tilføjer det verificerbare bevis for arbejdet i marken, med eksport af timerne klar til lønnen. Mange virksomheder bruger en personalesuite til kontoret og GeoTapp til medarbejderne i marken.' },
    { q: 'Har Personio en gratis plan?', a: 'Personio sælges kun efter tilbud og har ingen offentlig gratis plan. GeoTapp har en gratis prøveperiode og gennemsigtige planer, og det er modulopbygget: du tænder kun for de funktioner, du skal bruge i marken.' },
  ],
  sv: [
    { q: 'Vad är den största skillnaden mellan GeoTapp och Personio?', a: 'Personio är en HR-svit: personalregister, frånvaro och ledighet, introduktion, lön. GeoTapp är ett system för arbetsbevis i fält: det skapar förseglade rapporter med plats, tid och foton, ett bevis som kunden kan kontrollera. Personio hanterar människorna i organisationen; GeoTapp bevisar vad medarbetaren gör utanför kontoret.' },
    { q: 'Har Personio närvaroregistrering?', a: 'Ja, Personio hanterar närvaro och timmar, byggt för kontoret och HR. Men det tar inte fram bevis på uppdraget i fält: ingen position registrerad på platsen, inga förseglade rapporter och ingen verifiering av kunden. För företag med team utanför kontoret täcker GeoTapp den delen.' },
    { q: 'Ersätter GeoTapp Personio?', a: 'Nej, de kompletterar ofta varandra. Personio förblir HR-systemet för personalen; GeoTapp lägger till verifierbara bevis på fältarbete, med timmar som exporteras redo för lönehantering. Många företag använder en personalsvit för kontoret och GeoTapp för fältpersonalen.' },
    { q: 'Har Personio en gratisplan?', a: 'Personio säljs på offert, utan någon offentlig gratisplan. GeoTapp har en gratis provperiod och öppna priser, och är modulärt: slå bara på de funktioner du behöver i fält.' },
  ],
  nb: [
    { q: 'Hva er den viktigste forskjellen mellom GeoTapp og Personio?', a: 'Personio er en HR-suite: personalregister, fravær og ferie, onboarding, lønn. GeoTapp er et system for dokumentasjon av arbeidet ute i felt: det lager forseglede rapporter med posisjon, tid og bilder, som kunden kan kontrollere. Personio styrer folkene i organisasjonen; GeoTapp viser hva den ansatte gjør ute hos kunden.' },
    { q: 'Har Personio oppmøteregistrering?', a: 'Ja, Personio håndterer oppmøte og timer, laget for kontoret og HR. Det leverer likevel ikke dokumentasjonen av oppdraget ute i felt: ingen posisjon registrert på byggeplassen, ingen forseglede rapporter og ingen verifisering fra kundens side. For dem som har lag ute hos kundene, dekker GeoTapp den delen.' },
    { q: 'Erstatter GeoTapp Personio?', a: 'Nei, de utfyller ofte hverandre. Personio forblir HR-systemet for de ansatte; GeoTapp legger til det verifiserbare beviset for arbeidet ute i felt, med eksport av timene klar for lønn. Mange bedrifter bruker en personalsuite til kontoret og GeoTapp til de ansatte ute i felt.' },
    { q: 'Har Personio en gratisplan?', a: 'Personio selges bare etter tilbud og har ingen offentlig gratisplan. GeoTapp har en gratis prøveperiode og åpne planer, og det er modulbasert: du slår bare på funksjonene du trenger ute i felt.' },
  ],
  ru: [
    { q: 'В чём главное различие между GeoTapp и Personio?', a: 'Personio — это HR-система: карточки сотрудников, отсутствия и отпуска, онбординг, зарплата. GeoTapp — это система доказательства выездной работы: она формирует запечатанные отчёты с местоположением, временем и фото, доказательства, которые заказчик может проверить. Personio управляет людьми организации; GeoTapp доказывает, что сотрудник делает вне офиса.' },
    { q: 'Есть ли у Personio учёт присутствия?', a: 'Да, Personio ведёт присутствие и часы, для офиса и HR. Но она не даёт доказательства выездного задания: нет местоположения, проверенного при отметке, запечатанных отчётов или проверки заказчиком. Для компаний с выездными бригадами эту часть закрывает GeoTapp.' },
    { q: 'Заменяет ли GeoTapp Personio?', a: 'Нет, они часто дополняют друг друга. Personio остаётся HR-системой для персонала; GeoTapp добавляет проверяемое доказательство выездной работы, с выгрузкой часов для зарплаты. Многие компании используют HR-систему для офиса и GeoTapp для выездных сотрудников.' },
    { q: 'Есть ли у Personio бесплатный тариф?', a: 'Personio работает по запросу цены, без публичного бесплатного тарифа. У GeoTapp есть бесплатная пробная версия и открытые тарифы, и он модульный: включайте только нужные для поля функции.' },
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
  nb: ['Posisjon registrert og kontrollert ved hver stempling','Kryptografisk forseglet rapport','Bevisbilder knyttet til GPS og tidsstempel','Uavhengig verifisering fra kunden','Timeregistrering','Mobilapp Android/iOS','Egen intern meldingsfunksjon','Eksport av oppmøte/lønn','Gratis plan','Styring av oppdrag på flere steder','Posisjon registreres bare ved stempling, aldri løpende','GPS-informasjon signert i appen før man stempler*'],
  ru: ['Местоположение фиксируется и проверяется при каждой отметке','Криптографически запечатанный отчёт','Фотодоказательства, привязанные к GPS и метке времени','Независимая проверка заказчиком','Учёт часов','Мобильное приложение Android/iOS','Встроенный обмен сообщениями','Экспорт присутствия/зарплат','Бесплатный тариф','Управление заданиями на нескольких объектах','Местоположение фиксируется только при отметке, никогда не отслеживается непрерывно','Уведомление о GPS, подписанное в приложении перед отметкой*'],
};

const ROWS_GEO =   [true, true, true, true, true, true, true, true, false, true, true, true];
const ROWS_COMP =  [false, false, false, false, true, true, false, true, false, false, false, false];

// Riassunto neutro ed estraibile, subito sotto la tabella: frase fattuale citabile
// dai motori AI senza doverla ricostruire dalla tabella. Neutro per scelta.
const TABLE_TAKEAWAY: Record<string, string> = {
  it: 'In breve: Personio gestisce HR, assenze e paghe dell\'organico; GeoTapp prova il lavoro svolto sul campo con posizione alla timbratura, report sigillato e verifica del cliente. Spesso si affiancano.',
  en: 'In short: Personio manages HR, absences and payroll; GeoTapp proves field work with the position at clock-in, a sealed report and client verification. They often work side by side.',
  de: 'Kurz gesagt: Personio verwaltet HR, Abwesenheiten und Lohnabrechnung der Belegschaft; GeoTapp belegt die geleistete Arbeit im Außendienst mit Position beim Stempeln, versiegeltem Bericht und Überprüfung durch den Kunden. Oft laufen sie nebeneinander.',
  fr: 'En bref : Personio gère RH, absences et paie de l\'effectif ; GeoTapp prouve le travail effectué sur le terrain avec la position au pointage, un rapport scellé et la vérification par le client. Les deux se complètent souvent.',
  es: 'En resumen: Personio gestiona RR. HH., ausencias y nóminas de la plantilla; GeoTapp prueba el trabajo hecho en campo con la posición al fichar, el informe sellado y la verificación del cliente. A menudo se combinan.',
  pt: 'Em resumo: a Personio gere RH, ausências e salários do pessoal; a GeoTapp prova o trabalho realizado no terreno com a posição ao picar o ponto, o relatório selado e a verificação do cliente. Muitas vezes complementam-se.',
  nl: 'Kort gezegd: Personio beheert hr, afwezigheid en salaris van het personeelsbestand; GeoTapp bewijst het uitgevoerde werk in het veld met locatie bij de registratie, verzegeld rapport en controle door de klant. Vaak vullen ze elkaar aan.',
  da: 'Kort sagt: Personio styrer HR, fravær og løn; GeoTapp dokumenterer arbejdet i marken med position ved stempling, forseglet rapport og kundens egen verificering. De supplerer ofte hinanden.',
  sv: 'Kort sagt: Personio hanterar HR, frånvaro och lön; GeoTapp bevisar fältarbete med positionen vid instämpling, en förseglad rapport och kundens verifiering. De fungerar ofta sida vid sida.',
  nb: 'Kort sagt: Personio styrer HR, fravær og lønn; GeoTapp dokumenterer arbeidet ute i felt med posisjon ved stempling, forseglet rapport og kundens egen verifisering. De utfyller ofte hverandre.',
  ru: 'Коротко: Personio ведёт HR, отсутствия и зарплату; GeoTapp доказывает выездную работу местоположением при отметке, запечатанными отчётами и проверкой заказчиком. Часто дополняют друг друга.',
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
  nb: '* Ifølge loven (GDPR art. 13 og, i Italia, art. 4 i arbeidstakerloven, Statuto dei Lavoratori) må hver ansatt informeres før vedkommende geolokaliseres. Overlater programvaren dette trinnet til arbeidsgiveren, blir risikoen hos arbeidsgiveren. GeoTapp forbereder den personlige informasjonen, får den signert i appen som bekreftelse på at den er lest, og lar ikke den ansatte stemple før den er signert.',
  ru: '* По закону (ст. 13 GDPR и, в Италии, ст. 4 Статута трудящихся) каждый сотрудник должен быть проинформирован, прежде чем за ним начнут следить по GPS. Если программа оставляет этот шаг на усмотрение работодателя, риск остаётся на нём. GeoTapp готовит персональное уведомление, даёт сотруднику подписать его в приложении для подтверждения ознакомления и не позволяет отмечаться, пока оно не подписано.',
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
    badge: 'Comparatif de logiciels',
    h1sub: 'gérer le personnel ou prouver le travail sur le terrain ?',
    desc: 'Personio gère RH, congés et paie de l\'effectif. GeoTapp prouve ce que fait l\'opérateur hors site, avec position, heure et photos. Deux mondes différents, souvent complémentaires.',
    summary: 'En résumé :',
    summaryText: 'Personio est une excellente suite RH pour les dossiers du personnel, les absences et la paie. Elle n\'est pas conçue pour démontrer l\'intervention sur le terrain : ni position au pointage, ni rapports scellés, ni vérification par le client. Pour qui a des opérateurs hors site, GeoTapp couvre précisément ce point, et les heures sortent prêtes pour la paie.',
    footnote: FOOTNOTE.fr,
    features: 'Comparaison des fonctionnalités clés',
    feat: 'Fonctionnalité',
    diff: 'Gestion du personnel ou preuve du travail sur le terrain',
    geo: ['Position relevée par le téléphone à chaque pointage, jamais saisie à la main','Rapports scellés par une empreinte cryptographique à la clôture de l\'intervention','Preuves photo intégrées avec GPS et horodatage','Le client vérifie lui-même que le rapport n\'a pas été modifié','Conçu pour les opérateurs de terrain, pas pour les RH au bureau'],
    comp: ['Suite RH complète : dossiers du personnel, absences, onboarding','Gestion de la paie et des présences au bureau','App mobile en libre-service pour les salariés','Aucune preuve scellée de l\'intervention sur le terrain','Aucune position au pointage, photo de preuve ni vérification par le client'],
    useCasesTitle: 'Qui devrait associer GeoTapp à un outil RH comme Personio',
    useCases: ['Entreprises de nettoyage et de facility management avec des clients exigeants','Techniciens de maintenance et installateurs qui doivent documenter les heures facturées','Entreprises avec des RH au bureau mais des équipes opérationnelles sur le terrain','Ceux qui ont déjà eu des contestations sur des interventions non reconnues','Entreprises avec plusieurs équipes réparties sur différents chantiers'],
    cta: 'Envie de voir la différence en pratique ?',
    ctaDesc: 'Essayez-le sur une intervention réelle : 14 jours gratuits, sans carte bancaire.',
    ctaBtn: 'Commencer l\'essai gratuit',
  },
  es: {
    badge: 'Comparación de software', h1sub: '¿gestionar al personal o probar el trabajo de campo?',
    desc: 'Personio gestiona RR. HH., vacaciones y nóminas de la plantilla. GeoTapp prueba qué hace el operario fuera de la sede, con posición, hora y fotos. Dos mundos distintos, a menudo complementarios.',
    summary: 'En resumen:',
    summaryText: 'Personio es una muy buena suite de RR. HH. para ficha de empleados, ausencias y nóminas. No está pensada para demostrar la intervención en campo: ni posición al fichar, ni informes sellados, ni verificación del cliente. Para quien tiene operarios fuera de la sede, GeoTapp cubre justo esa parte, y las horas salen listas para las nóminas.',
    footnote: FOOTNOTE.es,
    features: 'Comparación de funciones clave', feat: 'Función',
    diff: 'Gestión del personal o prueba del trabajo de campo',
    geo: ['Posición registrada por el teléfono en cada fichaje, no introducida a mano','Informes sellados con hash criptográfico al cerrar la intervención','Pruebas fotográficas integradas con GPS y marca de tiempo','El cliente verifica por sí mismo que el informe no se ha modificado','Diseñado para operarios de campo, no para la oficina de RR. HH.'],
    comp: ['Suite de RR. HH. completa: ficha de empleados, ausencias, onboarding','Gestión de nóminas y asistencia de oficina','App móvil de autoservicio para los empleados','Ninguna prueba sellada de la intervención en campo','Ninguna posición al fichar, foto de prueba ni verificación del cliente'],
    useCasesTitle: 'Quién debería combinar GeoTapp con un sistema de RR. HH. como Personio',
    useCases: ['Empresas de limpieza y facility management con clientes exigentes','Técnicos de mantenimiento e instaladores que deben documentar las horas facturadas','Empresas con RR. HH. en la oficina pero equipos operativos en campo','Quien ya ha tenido reclamaciones por intervenciones no reconocidas','Empresas con varios equipos repartidos en obras distintas'],
    cta: '¿Quieres ver la diferencia en la práctica?',
    ctaDesc: 'Pruébalo en una intervención real: 14 días gratis, sin tarjeta de crédito.',
    ctaBtn: 'Empieza la prueba gratuita',
  },
  pt: {
    badge: 'Comparação de software', h1sub: 'gerir o pessoal ou provar o trabalho no terreno?',
    desc: 'A Personio gere RH, férias e salários do pessoal. A GeoTapp prova o que o operador faz fora da sede, com posição, hora e fotos. Dois mundos diferentes, muitas vezes complementares.',
    summary: 'Em resumo:',
    summaryText: 'A Personio é uma ótima suite de RH para fichas de pessoal, ausências e salários. Não foi pensada para demonstrar a intervenção no terreno: sem posição ao picar o ponto, relatórios selados nem verificação do cliente. Para quem tem operadores fora da sede, a GeoTapp cobre precisamente essa parte, e as horas saem prontas para o processamento salarial.',
    footnote: FOOTNOTE.pt,
    features: 'Comparação das funcionalidades-chave', feat: 'Funcionalidade',
    diff: 'Gestão do pessoal ou prova do trabalho no terreno',
    geo: ['Posição obtida pelo telemóvel em cada picagem, não inserida à mão','Relatórios selados com hash criptográfico ao fechar a intervenção','Provas fotográficas integradas com GPS e data/hora','O cliente verifica sozinho que o relatório não foi alterado','Concebido para operadores no terreno, não para os RH do escritório'],
    comp: ['Suite de RH completa: fichas de pessoal, ausências, onboarding','Gestão de salários e de presenças de escritório','App móvel de self-service para os colaboradores','Sem prova selada da intervenção no terreno','Sem posição ao picar o ponto, fotos de prova nem verificação do cliente'],
    useCasesTitle: 'Quem deve combinar a GeoTapp com um sistema de RH como a Personio',
    useCases: ['Empresas de limpeza e facility management com clientes exigentes','Equipas de manutenção e instaladores que têm de documentar as horas faturadas','Empresas com RH no escritório mas equipas operacionais no terreno','Quem já teve contestações sobre intervenções não reconhecidas','Empresas com várias equipas distribuídas por obras diferentes'],
    cta: 'Quer ver a diferença na prática?',
    ctaDesc: 'Experimente numa intervenção real: 14 dias grátis, sem cartão de crédito.',
    ctaBtn: 'Começar teste gratuito',
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
    badge: 'Softwaresammenligning', h1sub: 'styre personalet eller dokumentere arbejdet i marken?',
    desc: 'Personio styrer HR, ferie og løn for medarbejderne. GeoTapp viser, hvad medarbejderen gør ude hos kunden, med position, tid og fotos. To forskellige verdener, ofte komplementære.',
    summary: 'Kort sagt:',
    summaryText: 'Personio er en fremragende HR-suite til medarbejderregister, fravær og løn. Den er ikke lavet til at dokumentere opgaven i marken: ingen position ved stempling, ingen forseglede rapporter og ingen verificering fra kundens side. For dem, der har medarbejdere ude hos kunderne, dækker GeoTapp netop den del, og timerne kommer ud klar til lønnen.',
    footnote: FOOTNOTE.da,
    features: 'Sammenligning af nøglefunktioner', feat: 'Funktion',
    diff: 'Personalestyring eller dokumentation af arbejdet i marken',
    geo: ['Position aflæst fra telefonen ved hver stempling, ikke indtastet i hånden','Rapporter forseglet med kryptografisk hash, når opgaven afsluttes','Bevisfotos integreret med GPS og tidsstempel','Kunden kontrollerer selv, at rapporten ikke er ændret','Lavet til medarbejdere i marken, ikke til HR-kontoret'],
    comp: ['Komplet HR-suite: medarbejderregister, fravær, onboarding','Lønstyring og fremmøde på kontoret','Selvbetjent mobilapp til medarbejderne','Intet forseglet bevis for opgaven i marken','Ingen position ved stempling, bevisfotos eller verificering fra kunden'],
    useCasesTitle: 'Hvem bør supplere en HR-løsning som Personio med GeoTapp',
    useCases: ['Rengøringsfirmaer og facility management med krævende kunder','Servicefolk og installatører, der skal dokumentere de fakturerede timer','Virksomheder med HR på kontoret, men driftshold i marken','Dem, der allerede har oplevet, at kunder ikke har anerkendt udførte opgaver','Virksomheder med flere hold fordelt på forskellige byggepladser'],
    cta: 'Vil du se forskellen i praksis?',
    ctaDesc: 'Prøv det på en rigtig opgave: 14 dage gratis, uden kreditkort.',
    ctaBtn: 'Start gratis prøveperiode',
  },
  sv: {
    badge: 'Programvarujämförelse', h1sub: 'hantera personal eller bevisa fältarbete?',
    desc: 'Personio sköter HR, ledighet och lön för din personal. GeoTapp bevisar vad medarbetaren gör utanför kontoret, med plats, tid och foton. Två olika världar, ofta kompletterande.',
    summary: 'Kort sagt:',
    summaryText: 'Personio är en utmärkt HR-svit för personalregister, frånvaro och lön. Den är inte byggd för att bevisa uppdrag i fält: ingen position vid instämpling, inga förseglade rapporter och ingen verifiering av kunden. För företag med personal utanför kontoret täcker GeoTapp just den delen, och timmarna kommer ut redo för lönehantering.',
    footnote: FOOTNOTE.sv,
    features: 'Jämförelse av nyckelfunktioner', feat: 'Funktion',
    diff: 'Personalhantering eller bevis på fältarbete',
    geo: ['Positionen hämtas från telefonen vid varje instämpling och skrivs inte in för hand','Rapporter förseglade med en kryptografisk hash när uppdraget avslutas','Bevisfoton inbyggda med GPS och tidsstämpel','Kunden kontrollerar själv att rapporten inte har ändrats','Byggt för fältpersonal, inte för HR-avdelningen'],
    comp: ['Komplett HR-svit: personalregister, frånvaro, introduktion','Hantering av lön och närvaro på kontoret','Mobilapp med självbetjäning för de anställda','Inget förseglat bevis på uppdraget i fält','Ingen position vid instämpling, inga bevisfoton och ingen verifiering av kunden'],
    useCasesTitle: 'Vem bör kombinera GeoTapp med en HR-svit som Personio',
    useCases: ['Städ- och fastighetsserviceföretag med krävande kunder','Underhållsteam och installatörer som måste försvara fakturerade timmar','Företag med HR på kontoret men operativa team i fält','Alla som redan har råkat ut för tvister om uppdrag som kunden inte godkände','Företag med flera arbetslag på olika platser'],
    cta: 'Vill du se skillnaden i praktiken?',
    ctaDesc: 'Prova på ett riktigt uppdrag: 14 dagar gratis, utan kreditkort.',
    ctaBtn: 'Starta den kostnadsfria provperioden',
  },
  nb: {
    badge: 'Programvaresammenligning', h1sub: 'administrere personalet eller dokumentere arbeidet ute i felt?',
    desc: 'Personio styrer HR, ferie og lønn for de ansatte. GeoTapp viser hva den ansatte gjør ute hos kunden, med posisjon, tid og bilder. To ulike verdener, ofte utfyllende.',
    summary: 'Kort sagt:',
    summaryText: 'Personio er en utmerket HR-suite for personalregister, fravær og lønn. Den er ikke laget for å dokumentere oppdraget ute i felt: ingen posisjon ved stempling, ingen forseglede rapporter og ingen verifisering fra kundens side. For dem som har ansatte ute hos kundene, dekker GeoTapp nettopp den delen, og timene kommer ut klare for lønn.',
    footnote: FOOTNOTE.nb,
    features: 'Sammenligning av nøkkelfunksjoner', feat: 'Funksjon',
    diff: 'Personaladministrasjon eller dokumentasjon av arbeidet ute i felt',
    geo: ['Posisjon lest fra telefonen ved hver stempling, ikke skrevet inn for hånd','Rapporter forseglet med kryptografisk hash når oppdraget avsluttes','Bevisbilder integrert med GPS og tidsstempel','Kunden kontrollerer selv at rapporten ikke er endret','Laget for ansatte ute i felt, ikke for HR-kontoret'],
    comp: ['Komplett HR-suite: personalregister, fravær, onboarding','Lønnsstyring og oppmøte på kontoret','Selvbetjent mobilapp for de ansatte','Ingen forseglet bevis for oppdraget ute i felt','Ingen posisjon ved stempling, bevisbilder eller verifisering fra kunden'],
    useCasesTitle: 'Hvem bør supplere en HR-løsning som Personio med GeoTapp',
    useCases: ['Renholdsbedrifter og facility management med krevende kunder','Servicefolk og installatører som må dokumentere de fakturerte timene','Bedrifter med HR på kontoret, men driftslag ute i felt','De som allerede har opplevd at kunder ikke har anerkjent utførte oppdrag','Bedrifter med flere lag fordelt på ulike byggeplasser'],
    cta: 'Vil du se forskjellen i praksis?',
    ctaDesc: 'Prøv det på et ekte oppdrag: 14 dager gratis, uten kredittkort.',
    ctaBtn: 'Start gratis prøveperiode',
  },
  ru: {
    badge: 'Сравнение ПО', h1sub: 'управлять персоналом или доказывать работу в поле?',
    desc: 'Personio ведёт HR, отпуска и зарплату персонала. GeoTapp доказывает, что сотрудник делает вне офиса, местоположением при отметке и фото. Два разных мира, часто дополняющих друг друга.',
    summary: 'Коротко:',
    summaryText: 'Personio — хорошая HR-система для данных, отсутствий и зарплаты. Она не создана доказывать выездные задания: нет местоположения при отметке, запечатанных отчётов или проверки заказчиком. Для компаний с сотрудниками вне офиса GeoTapp закрывает именно эту часть, а часы выгружаются готовыми для зарплаты.',
    footnote: FOOTNOTE.ru,
    features: 'Сравнение ключевых функций', feat: 'Функция',
    diff: 'Управление HR или доказательство работы в поле',
    geo: ['Местоположение берётся с телефона при каждой отметке, не вводится вручную','Отчёты запечатываются криптографическим хешем при закрытии','Фотодоказательства интегрированы с GPS и меткой времени','Заказчик самостоятельно проверяет, что отчёт не был изменён','Создано для выездных сотрудников, а не для HR-офиса'],
    comp: ['Полная HR-система: данные, отсутствия, онбординг','Управление зарплатой и офисным присутствием','Мобильное самообслуживание для сотрудников','Нет запечатанного доказательства выездного задания','Нет местоположения при отметке, фотодоказательства или проверки заказчиком'],
    useCasesTitle: 'Кому стоит дополнить HR-систему вроде Personio через GeoTapp',
    useCases: ['Клининговые и facility-компании с требовательными клиентами','Бригады обслуживания и монтажники, защищающие оплаченные часы','Компании с HR в офисе, но с бригадами в поле','Те, кто уже сталкивался со спорами по непризнанным работам','Компании с несколькими бригадами на разных объектах'],
    cta: 'Хотите увидеть разницу на практике?',
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
