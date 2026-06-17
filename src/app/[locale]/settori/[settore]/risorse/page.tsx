import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';

const WP = 'https://blog.geotapp.com';
const HEADERS = { host: 'blog.geotapp.com', 'x-geotapp-proxy': '1', 'x-forwarded-proto': 'https' };

const CTA_LABELS: Record<string, { discover: string; cta: string }> = {
  it: { discover: 'Scopri', cta: 'Vai al prodotto →' },
  en: { discover: 'Discover', cta: 'Go to product →' },
  de: { discover: 'Entdecken', cta: 'Zum Produkt →' },
  fr: { discover: 'Découvrir', cta: 'Voir le produit →' },
  es: { discover: 'Descubrir', cta: 'Ver el producto →' },
  pt: { discover: 'Descobrir', cta: 'Ver o produto →' },
  nl: { discover: 'Ontdekken', cta: 'Naar product →' },
  da: { discover: 'Opdag', cta: 'Gå til produkt →' },
  sv: { discover: 'Upptäck', cta: 'Till produkt →' },
  nb: { discover: 'Oppdag', cta: 'Til produkt →' },
  ru: { discover: 'Узнать', cta: 'К продукту →' },
};

const SETTORE_CONFIG: Record<string, {
  categoryId: number;
  labels: Record<string, { title: string; description: string; heading: string }>;
  intro: Record<string, string>;
  sections: Record<string, Array<{ h2: string; body: string; listItems?: string[]; productLink?: boolean }>>;
  product: {
    name: string;
    slug: 'geotapp-timetracker' | 'geotapp-flow' | 'geotapp-verifier';
    ctaLabel: Record<string, { discover: string; cta: string }>;
  };
}> = {
  pulizie: {
    categoryId: 9,
    labels: {
      it: { title: 'Gestione presenze imprese di pulizie: guida e risorse - GeoTapp', description: 'Come gestire presenze, turni e interventi nelle imprese di pulizie con timbratura GPS. Guide pratiche per responsabili operativi.', heading: 'Gestione presenze nelle imprese di pulizie' },
      en: { title: 'GPS attendance tracking for cleaning companies: guides - GeoTapp', description: 'How to manage attendance, shifts and jobs in cleaning companies with GPS tracking. Practical guides for operations managers.', heading: 'Attendance tracking for cleaning companies' },
      de: { title: 'Zeiterfassung für Reinigungsunternehmen: Leitfäden - GeoTapp', description: 'GPS-Zeiterfassung und Einsatzverwaltung für Reinigungsunternehmen. Praxisnahe Leitfäden für Betriebsleiter.', heading: 'Zeiterfassung in Reinigungsunternehmen' },
      fr: { title: 'Gestion des présences en entreprise de nettoyage : guide - GeoTapp', description: 'Comment gérer les présences, les équipes et les interventions dans les entreprises de nettoyage avec le pointage GPS.', heading: 'Gestion des présences en entreprise de nettoyage' },
      es: { title: 'Control de presencia en empresas de limpieza: guía - GeoTapp', description: 'Cómo gestionar presencias, turnos e intervenciones en empresas de limpieza con fichaje GPS. Guías prácticas.', heading: 'Control de presencia en empresas de limpieza' },
      pt: { title: 'Recursos para empresas de limpeza - GeoTapp', description: 'Artigos e guias para gerir presenças e intervenções em empresas de limpeza.', heading: 'Recursos para empresas de limpeza' },
      nl: { title: 'Bronnen voor schoonmaakbedrijven - GeoTapp', description: 'Artikelen en gidsen voor het beheer van aanwezigheid en opdrachten bij schoonmaakbedrijven.', heading: 'Bronnen voor schoonmaakbedrijven' },
      da: { title: 'Ressourcer til rengøringsvirksomheder - GeoTapp', description: 'Artikler og guides til styring af fremmøde og opgaver i rengøringsvirksomheder.', heading: 'Ressourcer til rengøringsvirksomheder' },
      sv: { title: 'Resurser för städföretag - GeoTapp', description: 'Artiklar och guider för hantering av närvaro och uppdrag i städföretag.', heading: 'Resurser för städföretag' },
      nb: { title: 'Ressurser for rengjøringsbedrifter - GeoTapp', description: 'Artikler og veiledninger for administrasjon av fremmøte og oppdrag i rengjøringsbedrifter.', heading: 'Ressurser for rengjøringsbedrifter' },
      ru: { title: 'Ресурсы для клининговых компаний - GeoTapp', description: 'Статьи и руководства по управлению присутствием и заявками в клининговых компаниях.', heading: 'Ресурсы для клининговых компаний' },
    },
    intro: {
      it: 'Gestire le presenze in un\'impresa di pulizie non è come timbrare in ufficio. I collaboratori sono distribuiti su cantieri diversi, gli orari variano ogni giorno e il cliente finale vuole sempre sapere chi era presente, quando e per quanto tempo. Queste guide raccolgono le soluzioni operative usate dalle imprese di pulizie per risolvere questo problema.',
      en: 'Managing attendance in a cleaning company is nothing like office clock-ins. Staff are spread across multiple sites, schedules change daily, and clients always want to know who was present, when, and for how long. These guides collect the operational solutions cleaning companies use to solve this problem.',
      de: 'Die Anwesenheitsverwaltung in einem Reinigungsunternehmen unterscheidet sich grundlegend vom Bürobetrieb. Mitarbeiter sind auf mehreren Baustellen verteilt, Arbeitszeiten ändern sich täglich, und Kunden wollen immer wissen, wer wann anwesend war. Diese Leitfäden sammeln bewährte Lösungen für dieses Problem.',
      fr: 'Gérer les présences dans une entreprise de nettoyage n\'a rien à voir avec le pointage en bureau. Les équipes sont réparties sur plusieurs chantiers, les horaires changent chaque jour et les clients veulent toujours savoir qui était présent, quand et combien de temps. Ces guides rassemblent les solutions opérationnelles utilisées par les entreprises de nettoyage.',
      es: 'Gestionar las presencias en una empresa de limpieza no tiene nada que ver con fichar en la oficina. Los trabajadores están distribuidos en varios centros, los horarios cambian cada día y el cliente siempre quiere saber quién estuvo presente, cuándo y cuánto tiempo. Estas guías recogen las soluciones operativas usadas por las empresas de limpieza.',
      pt: 'Managing attendance in a cleaning company is nothing like office clock-ins. Staff are spread across multiple sites, schedules change daily, and clients always want to know who was present, when, and for how long.',
      nl: 'Managing attendance in a cleaning company is nothing like office clock-ins. Staff are spread across multiple sites, schedules change daily, and clients always want to know who was present, when, and for how long.',
      da: 'Managing attendance in a cleaning company is nothing like office clock-ins. Staff are spread across multiple sites, schedules change daily, and clients always want to know who was present, when, and for how long.',
      sv: 'Managing attendance in a cleaning company is nothing like office clock-ins. Staff are spread across multiple sites, schedules change daily, and clients always want to know who was present, when, and for how long.',
      nb: 'Managing attendance in a cleaning company is nothing like office clock-ins. Staff are spread across multiple sites, schedules change daily, and clients always want to know who was present, when, and for how long.',
      ru: 'Учёт рабочего времени в клининговой компании существенно отличается от офисного. Сотрудники рассредоточены по нескольким объектам, расписание меняется каждый день, а клиенты всегда хотят знать, кто присутствовал, когда и сколько времени.',
    },
    sections: {
      it: [
        {
          h2: 'Il problema operativo che rallenta le imprese di pulizie',
          body: 'Chi gestisce un\'impresa di pulizie con più di 5 collaboratori conosce questi problemi: non sai se il collaboratore è arrivato alle 7:00 o alle 7:45, il cliente ti chiama per sapere se la squadra è stata presente ieri, e i fogli presenze non quadrano mai. Il problema non è la volontà delle persone, è che i sistemi tradizionali non funzionano quando le squadre cambiano cantiere ogni giorno.',
        },
        {
          h2: 'Come funziona la timbratura GPS per le imprese di pulizie',
          body: 'La timbratura GPS permette ai collaboratori di registrare entrata e uscita direttamente dallo smartphone, con posizione verificata in tempo reale. Non richiede hardware fisso e funziona su qualsiasi cantiere. Il responsabile vede le presenze in diretta dalla dashboard, con la possibilità di esportare report per il cliente a fine mese. GeoTapp TimeTracker aggiunge la possibilità di inviare foto dei lavori completati e comunicare con il coordinatore dallo stesso dispositivo.',
          productLink: true,
        },
        {
          h2: 'Cosa controllare prima di scegliere un software per imprese di pulizie',
          body: 'Non tutti i software di gestione presenze sono adatti al lavoro su cantieri distribuiti. Prima di scegliere, verifica che supporti:',
          listItems: [
            'Timbratura da smartphone, senza hardware aggiuntivo',
            'Verifica GPS della posizione al momento della timbratura',
            'Possibilità di allegare foto agli interventi',
            'Report esportabili per il cliente finale',
            'Comunicazione interna integrata tra collaboratori e ufficio',
          ],
        },
      ],
      en: [
        {
          h2: 'The operational problem that slows cleaning companies down',
          body: 'Anyone managing a cleaning company with more than 5 staff knows these problems: you don\'t know if someone arrived at 7:00 or 7:45, a client calls asking if the team was there yesterday, and your timesheets never add up. The issue isn\'t the staff, it\'s that traditional systems don\'t work when teams move between sites every day.',
        },
        {
          h2: 'How GPS time tracking works for cleaning companies',
          body: 'GPS time tracking lets staff clock in and out directly from their smartphone, with verified location. No fixed hardware needed, it works on any site. Managers see attendance in real time from a dashboard and can export client reports at month end. GeoTapp TimeTracker adds the ability to send photos of completed work and communicate with the coordinator from the same device.',
          productLink: true,
        },
        {
          h2: 'What to check before choosing software for your cleaning company',
          body: 'Not all attendance software is built for distributed site work. Before choosing, check that it supports:',
          listItems: [
            'Smartphone clock-in, no additional hardware required',
            'GPS location verification at clock-in time',
            'Photo attachments to completed jobs',
            'Exportable reports for end clients',
            'Built-in communication between staff and office',
          ],
        },
      ],
    },
    product: {
      name: 'GeoTapp TimeTracker',
      slug: 'geotapp-timetracker',
      ctaLabel: CTA_LABELS,
    },
  },
  installatori: {
    categoryId: 65,
    labels: {
      it: { title: 'Gestione interventi per installatori e tecnici: guida - GeoTapp', description: 'Come gestire ordini di lavoro, tecnici sul campo e reportistica per aziende di installazione. Guide operative.', heading: 'Gestione interventi per installatori e tecnici' },
      en: { title: 'Field service management for installers: guides - GeoTapp', description: 'How to manage work orders, field technicians and reporting for installation and service companies.', heading: 'Field service management for installers' },
      de: { title: 'Außendienstmanagement für Installateure: Leitfäden - GeoTapp', description: 'Auftragsverwaltung, Außendiensttechniker und Berichterstattung für Installations- und Servicebetriebe.', heading: 'Außendienstmanagement für Installateure' },
      fr: { title: 'Gestion des interventions pour installateurs : guide - GeoTapp', description: 'Comment gérer les ordres de travail, les techniciens terrain et la reportique pour les entreprises d\'installation.', heading: 'Gestion des interventions pour installateurs' },
      es: { title: 'Gestión de intervenciones para instaladores: guía - GeoTapp', description: 'Cómo gestionar órdenes de trabajo, técnicos de campo y reportes para empresas de instalación.', heading: 'Gestión de intervenciones para instaladores' },
      pt: { title: 'Recursos para instaladores - GeoTapp', description: 'Artigos e guias para instaladores e empresas com técnicos de campo.', heading: 'Recursos para instaladores' },
      nl: { title: 'Bronnen voor installateurs - GeoTapp', description: 'Artikelen en gidsen voor installateurs en bedrijven met buitendiensttechnici.', heading: 'Bronnen voor installateurs' },
      da: { title: 'Ressourcer til installatører - GeoTapp', description: 'Artikler og guides til installatører og virksomheder med serviceteknikere.', heading: 'Ressourcer til installatører' },
      sv: { title: 'Resurser för installatörer - GeoTapp', description: 'Artiklar och guider för installatörer och företag med fälttekniker.', heading: 'Resurser för installatörer' },
      nb: { title: 'Ressurser for installatører - GeoTapp', description: 'Artikler og veiledninger for installatører og bedrifter med feltservice.', heading: 'Ressurser for installatører' },
      ru: { title: 'Ресурсы для монтажников - GeoTapp', description: 'Статьи и руководства для монтажников и выездных технических служб.', heading: 'Ресурсы для монтажников' },
    },
    intro: {
      it: 'Coordinare tecnici sul campo significa sapere in ogni momento chi è dove, quale intervento ha appena chiuso e cosa è rimasto in sospeso. Con telefonate e messaggi WhatsApp il quadro è sempre incompleto: gli aggiornamenti arrivano in ritardo, le priorità cambiano senza che l\'ufficio lo sappia e la documentazione per il cliente è sempre un problema. Questi articoli raccolgono le pratiche operative più efficaci per aziende con tecnici sul campo.',
      en: 'Coordinating field technicians means knowing at any moment who is where, which jobs have just been closed, and what\'s still pending. With phone calls and WhatsApp the picture is always incomplete: updates arrive late, priorities shift without the office knowing, and client documentation is always a last-minute scramble. These guides cover effective operational practices for field service companies.',
      de: 'Außendiensttechniker zu koordinieren bedeutet, jederzeit zu wissen, wer wo ist, welche Aufträge gerade abgeschlossen wurden und was noch aussteht. Mit Anrufen und WhatsApp-Nachrichten ist das Bild immer unvollständig. Diese Leitfäden decken bewährte Betriebspraktiken für Außendienstunternehmen ab.',
      fr: 'Coordonner des techniciens terrain signifie savoir à tout moment qui se trouve où, quelles interventions viennent d\'être clôturées et ce qui reste en suspens. Avec les appels et WhatsApp, le tableau est toujours incomplet. Ces guides couvrent les meilleures pratiques pour les entreprises avec techniciens terrain.',
      es: 'Coordinar técnicos de campo significa saber en todo momento quién está dónde, qué intervenciones acaban de cerrarse y qué sigue pendiente. Con llamadas y WhatsApp el panorama siempre es incompleto. Estas guías recogen las mejores prácticas para empresas con técnicos de campo.',
      pt: 'Coordinating field technicians means knowing at any moment who is where, which jobs have just been closed, and what\'s still pending. These guides cover effective operational practices for field service companies.',
      nl: 'Coordinating field technicians means knowing at any moment who is where, which jobs have just been closed, and what\'s still pending. These guides cover effective operational practices for field service companies.',
      da: 'Coordinating field technicians means knowing at any moment who is where, which jobs have just been closed, and what\'s still pending. These guides cover effective operational practices for field service companies.',
      sv: 'Coordinating field technicians means knowing at any moment who is where, which jobs have just been closed, and what\'s still pending. These guides cover effective operational practices for field service companies.',
      nb: 'Coordinating field technicians means knowing at any moment who is where, which jobs have just been closed, and what\'s still pending. These guides cover effective operational practices for field service companies.',
      ru: 'Координация выездных техников означает знать в каждый момент, кто где находится, какие заявки только что закрыты и что ещё в работе. Эти руководства охватывают эффективные операционные практики для компаний с выездным персоналом.',
    },
    sections: {
      it: [
        {
          h2: 'Il problema di coordinamento nelle aziende con tecnici sul campo',
          body: 'Quando un tecnico chiude un intervento e il sistema non si aggiorna in tempo reale, l\'ufficio non sa se mandare rinforzi o chiudere il ticket. Quando la documentazione è cartacea o via messaggio, ricostruire lo storico di un cliente richiede ore. Le aziende con 5-50 tecnici sul campo perdono in media 2-3 ore al giorno in coordinamento telefonico che si potrebbe eliminare completamente.',
        },
        {
          h2: 'Come gestire ordini di lavoro e interventi in tempo reale',
          body: 'Un sistema di gestione interventi digitale permette di assegnare ordini di lavoro direttamente allo smartphone del tecnico, con priorità, istruzioni e storico del cliente già inclusi. Il tecnico chiude l\'intervento dall\'app, raccoglie la firma del cliente e il report viene generato automaticamente, senza passare dall\'ufficio. GeoTapp Flow è progettato per questo: assegnazione interventi, tracciamento in tempo reale, raccolta firme e reportistica automatica.',
          productLink: true,
        },
        {
          h2: 'Cosa deve poter fare un software per installatori e tecnici sul campo',
          body: 'Prima di scegliere uno strumento di gestione per il tuo team di tecnici, verifica che supporti:',
          listItems: [
            'Assegnazione e modifica degli interventi da remoto',
            'Visibilità in tempo reale sulla posizione dei tecnici',
            'Raccolta della firma del cliente a fine lavoro',
            'Reportistica automatica per ogni intervento chiuso',
            'Storico completo degli interventi per cliente',
          ],
        },
      ],
      en: [
        {
          h2: 'The coordination problem for field service companies',
          body: 'When a technician closes a job and the system doesn\'t update in real time, the office doesn\'t know whether to send backup or close the ticket. When documentation is on paper or via text messages, reconstructing a client\'s history takes hours. Companies with 5–50 field technicians lose on average 2–3 hours a day in phone coordination that could be eliminated entirely.',
        },
        {
          h2: 'How to manage work orders and field jobs in real time',
          body: 'A digital job management system lets you assign work orders directly to the technician\'s smartphone, complete with priority, instructions, and client history. The technician closes the job from the app, collects the client\'s signature, and the report is generated automatically, no office visit needed. GeoTapp Flow is built for exactly this: job assignment, real-time tracking, signature collection, and automatic reporting.',
          productLink: true,
        },
        {
          h2: 'What field service management software must support',
          body: 'Before choosing a management tool for your field team, check that it supports:',
          listItems: [
            'Remote job assignment and real-time modification',
            'Real-time technician location visibility',
            'Client signature capture at job completion',
            'Automatic report generation per closed job',
            'Complete job history per client',
          ],
        },
      ],
    },
    product: {
      name: 'GeoTapp Flow',
      slug: 'geotapp-flow',
      ctaLabel: CTA_LABELS,
    },
  },
  sicurezza: {
    categoryId: 9,
    labels: {
      it: { title: 'Gestione presenze e tracciabilità per servizi di sicurezza - GeoTapp', description: 'Come gestire agenti, ronde e documentazione nei servizi di sicurezza con GPS in tempo reale.', heading: 'Gestione presenze e tracciabilità nei servizi di sicurezza' },
      en: { title: 'Attendance tracking and traceability for security services - GeoTapp', description: 'How to manage agents, patrols and documentation in security services with real-time GPS.', heading: 'Attendance tracking for security services' },
      de: { title: 'Anwesenheitsverfolgung für Sicherheitsdienste - GeoTapp', description: 'GPS-Nachverfolgung von Agenten, Runden und Dokumentation für Sicherheitsunternehmen.', heading: 'Anwesenheit und Nachverfolgbarkeit bei Sicherheitsdiensten' },
      fr: { title: 'Gestion des présences et traçabilité pour la sécurité - GeoTapp', description: 'Comment gérer agents, rondes et documentation dans les services de sécurité avec GPS en temps réel.', heading: 'Gestion des présences dans les services de sécurité' },
      es: { title: 'Control de presencia y trazabilidad en servicios de seguridad - GeoTapp', description: 'Cómo gestionar agentes, rondas y documentación en servicios de seguridad con GPS en tiempo real.', heading: 'Control de presencia en servicios de seguridad' },
      pt: { title: 'Recursos para serviços de segurança - GeoTapp', description: 'Artigos e guias para empresas de segurança e vigilância.', heading: 'Recursos para serviços de segurança' },
      nl: { title: 'Bronnen voor beveiligingsdiensten - GeoTapp', description: 'Artikelen en gidsen voor beveiligings- en bewakingsbedrijven.', heading: 'Bronnen voor beveiligingsdiensten' },
      da: { title: 'Ressourcer til sikkerhedstjenester - GeoTapp', description: 'Artikler og guides til sikkerheds- og overvågningsvirksomheder.', heading: 'Ressourcer til sikkerhedstjenester' },
      sv: { title: 'Resurser för säkerhetstjänster - GeoTapp', description: 'Artiklar och guider för säkerhets- och bevakningsföretag.', heading: 'Resurser för säkerhetstjänster' },
      nb: { title: 'Ressurser for sikkerhetstjenester - GeoTapp', description: 'Artikler og veiledninger for sikkerhets- og overvåkingsbedrifter.', heading: 'Ressurser for sikkerhetstjenester' },
      ru: { title: 'Ресурсы для служб безопасности - GeoTapp', description: 'Статьи и руководства для охранных предприятий и служб наблюдения.', heading: 'Ресурсы для служб безопасности' },
    },
    intro: {
      it: 'Nelle aziende di sicurezza ogni ronda deve essere documentata, ogni agente deve essere localizzabile e ogni anomalia deve essere segnalata immediatamente. Con sistemi basati su telefonate o report cartacei, la centrale operativa ha sempre un quadro parziale e ritardato. Questi articoli affrontano i temi operativi più rilevanti per responsabili di servizi di sicurezza.',
      en: 'In security companies every patrol must be documented, every agent must be locatable, and every incident must be reported immediately. With phone-based or paper systems, the control center always has a partial and delayed picture. These guides cover the most relevant operational topics for security service managers.',
      de: 'In Sicherheitsunternehmen muss jede Runde dokumentiert, jeder Agent ortbar sein und jede Anomalie sofort gemeldet werden. Mit telefon- oder papiergestützten Systemen hat die Einsatzzentrale immer ein unvollständiges Bild. Diese Leitfäden behandeln die wichtigsten operativen Themen für Sicherheitsdienstleiter.',
      fr: 'Dans les entreprises de sécurité, chaque ronde doit être documentée, chaque agent doit être localisable et chaque anomalie doit être signalée immédiatement. Avec des systèmes basés sur les appels ou le papier, la centrale a toujours une vision partielle. Ces guides couvrent les thèmes opérationnels essentiels pour les responsables de sécurité.',
      es: 'En las empresas de seguridad cada ronda debe documentarse, cada agente debe ser localizable y cada incidencia debe reportarse de inmediato. Con sistemas basados en llamadas o papel, la central siempre tiene un panorama parcial. Estas guías abordan los temas operativos más relevantes para responsables de seguridad.',
      pt: 'In security companies every patrol must be documented, every agent must be locatable, and every incident must be reported immediately. These guides cover the most relevant operational topics for security service managers.',
      nl: 'In security companies every patrol must be documented, every agent must be locatable, and every incident must be reported immediately. These guides cover the most relevant operational topics for security service managers.',
      da: 'In security companies every patrol must be documented, every agent must be locatable, and every incident must be reported immediately. These guides cover the most relevant operational topics for security service managers.',
      sv: 'In security companies every patrol must be documented, every agent must be locatable, and every incident must be reported immediately. These guides cover the most relevant operational topics for security service managers.',
      nb: 'In security companies every patrol must be documented, every agent must be locatable, and every incident must be reported immediately. These guides cover the most relevant operational topics for security service managers.',
      ru: 'В охранных предприятиях каждый обход должен быть задокументирован, каждый сотрудник должен быть отслеживаемым, а каждый инцидент должен быть зафиксирован немедленно. Эти руководства охватывают наиболее актуальные операционные темы для руководителей охранных служб.',
    },
    sections: {
      it: [
        {
          h2: 'Le sfide operative dei servizi di sicurezza e vigilanza',
          body: 'Senza un sistema digitale, la centrale operativa non sa in tempo reale se gli agenti sono al posto giusto, se una ronda è stata completata o se c\'è stata un\'anomalia. Il cliente finale non ha prove concrete del servizio erogato, e in caso di contestazione, non c\'è nulla da mostrare. La tracciabilità non è un optional: è il prodotto stesso che le aziende di sicurezza vendono ai loro clienti.',
        },
        {
          h2: 'Come funziona la tracciabilità degli agenti di sicurezza',
          body: 'Un sistema di tracciabilità GPS permette alla centrale di vedere in tempo reale la posizione di ogni agente, le ronde completate e le anomalie segnalate. Gli agenti registrano presenze, eventi e note direttamente dallo smartphone, con foto, timestamp e posizione verificata. GeoTapp TimeTracker è progettata per questo: registrazione presenze con GPS, documentazione ronde e comunicazione istantanea con la centrale.',
          productLink: true,
        },
        {
          h2: 'Cosa deve garantire il software per servizi di sicurezza',
          body: 'Nella scelta di uno strumento per la gestione operativa dei servizi di sicurezza, verifica che supporti:',
          listItems: [
            'Localizzazione GPS degli agenti in tempo reale',
            'Registrazione timestampata di ogni ronda completata',
            'Segnalazione anomalie con foto e geolocalizzazione',
            'Reportistica certificata esportabile per il cliente finale',
            'Alert automatici in caso di mancata risposta o inattività',
          ],
        },
      ],
      en: [
        {
          h2: 'The operational challenges of security and surveillance services',
          body: 'Without a digital system, the control center has no real-time view of whether agents are in the right place, whether a patrol has been completed, or whether an incident has occurred. The end client has no concrete proof of service delivered, and in case of dispute, there is nothing to show. Traceability is not an optional feature: it is the actual product security companies sell to their clients.',
        },
        {
          h2: 'How agent tracking works in security services',
          body: 'A GPS tracking system lets the control center see the real-time position of every agent, completed patrols, and reported incidents. Agents log attendance, events, and notes directly from their smartphone, with photos, timestamps, and verified location. GeoTapp TimeTracker is built for this: GPS attendance logging, patrol documentation, and instant communication with the control center.',
          productLink: true,
        },
        {
          h2: 'What security service management software must guarantee',
          body: 'When choosing an operational management tool for security services, check that it supports:',
          listItems: [
            'Real-time GPS location of all agents',
            'Timestamped logging of every completed patrol',
            'Incident reporting with photos and geolocation',
            'Exportable certified reports for end clients',
            'Automatic alerts for non-response or inactivity events',
          ],
        },
      ],
    },
    product: {
      name: 'GeoTapp TimeTracker',
      slug: 'geotapp-timetracker',
      ctaLabel: CTA_LABELS,
    },
  },
};

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#8217;/g, '\u2019').replace(/&#8220;/g, '\u201C').replace(/&#8221;/g, '\u201D').replace(/&nbsp;/g, ' ').trim();
}

function isLocalePost(link: string, locale: string): boolean {
  try {
    const afterBlog = new URL(link).pathname.replace(/^\/blog\//, '');
    if (locale === 'it') return !/^[a-z]{2}\//.test(afterBlog);
    return afterBlog.startsWith(`${locale}/`);
  } catch { return false; }
}

function normalizeUrl(link: string, slug: string): string {
  try {
    const p = new URL(link);
    if (p.hostname === 'blog.geotapp.com') return `/blog${p.pathname}`;
  } catch {}
  return `/blog/${slug}/`;
}

async function fetchAllPostsForCategory(locale: string, categoryId: number) {
  try {
    const res = await fetch(
      `${WP}/wp-json/wp/v2/posts?categories=${categoryId}&per_page=100&_fields=id,slug,title,excerpt,date,link&status=publish`,
      { headers: HEADERS, next: { revalidate: 7200 }, signal: AbortSignal.timeout(8000) },
    );
    if (!res.ok) return [];
    const raw = await res.json() as Array<{ id: number; slug: string; title: { rendered: string }; excerpt: { rendered: string }; date: string; link: string }>;
    return raw
      .filter((p) => isLocalePost(p.link ?? '', locale))
      .map((p) => ({
        id: p.id,
        title: stripHtml(p.title?.rendered ?? ''),
        excerpt: stripHtml(p.excerpt?.rendered ?? '').slice(0, 180),
        url: normalizeUrl(p.link, p.slug),
        date: p.date,
      }));
  } catch {
    return [];
  }
}

type Params = { locale: string; settore: string };

export async function generateStaticParams(): Promise<Params[]> {
  const settori = Object.keys(SETTORE_CONFIG);
  return SUPPORTED_LOCALES.flatMap((locale) =>
    settori.map((settore) => ({ locale, settore }))
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale, settore } = await params;
  const config = SETTORE_CONFIG[settore];
  if (!config) return {};
  const resolvedLocale = (locale ?? DEFAULT_LOCALE) as AppLocale;
  const label = config.labels[resolvedLocale] ?? config.labels['en'];
  return {
    title: { absolute: label.title },
    description: label.description,
    alternates: buildLocaleAlternates(resolvedLocale, `/settori/${settore}/risorse/`),
  };
}

const BACK_LABELS: Record<string, string> = {
  it: '← Torna al settore', en: '← Back to sector', de: '← Zurück zum Sektor',
  fr: '← Retour au secteur', es: '← Volver al sector', pt: '← Voltar ao setor',
  nl: '← Terug naar sector', da: '← Tilbage til sektor', sv: '← Tillbaka till sektor',
  nb: '← Tilbake til sektor', ru: '← Назад к разделу',
};

const READ_LABELS: Record<string, string> = {
  it: 'Leggi →', en: 'Read →', de: 'Lesen →', fr: 'Lire →',
  es: 'Leer →', pt: 'Ler →', nl: 'Lees →', da: 'Læs →',
  sv: 'Läs →', nb: 'Les →', ru: 'Читать →',
};

const EMPTY_LABELS: Record<string, string> = {
  it: 'Nessun articolo disponibile al momento.',
  en: 'No articles available at the moment.',
  de: 'Derzeit keine Artikel verfügbar.',
  fr: 'Aucun article disponible pour le moment.',
  es: 'No hay artículos disponibles por el momento.',
  pt: 'Nenhum artigo disponível no momento.',
  nl: 'Momenteel geen artikelen beschikbaar.',
  da: 'Ingen artikler tilgængelige i øjeblikket.',
  sv: 'Inga artiklar tillgängliga för tillfället.',
  nb: 'Ingen artikler tilgjengelige for øyeblikket.',
  ru: 'Статьи временно отсутствуют.',
};

const PRODUCT_PAGE_LABELS: Record<string, string> = {
  it: 'Strumento consigliato per questo settore',
  en: 'Recommended tool for this sector',
  de: 'Empfohlenes Tool für diesen Sektor',
  fr: 'Outil recommandé pour ce secteur',
  es: 'Herramienta recomendada para este sector',
  pt: 'Ferramenta recomendada para este setor',
  nl: 'Aanbevolen tool voor deze sector',
  da: 'Anbefalet værktøj til denne sektor',
  sv: 'Rekommenderat verktyg för denna sektor',
  nb: 'Anbefalt verktøy for denne sektoren',
  ru: 'Рекомендуемый инструмент для этого сектора',
};

// Box "strumento gratuito": collega le pagine settore-risorse alla risorsa
// GPS lavoratori UE (asset linkabile, rilevante per ogni settore che manda
// squadre fuori sede / all'estero).
const GPS_CALLOUT: Record<string, { text: string; cta: string }> = {
  it: { text: 'Mandi squadre all’estero? Lo strumento gratuito GPS lavoratori UE ti dice cosa serve per essere in regola, Paese per Paese.', cta: 'Apri la guida →' },
  en: { text: 'Sending crews abroad? The free GPS on workers in the EU tool shows what you need to be compliant, country by country.', cta: 'Open the guide →' },
  de: { text: 'Schicken Sie Teams ins Ausland? Das kostenlose Werkzeug GPS-Tracking von Mitarbeitern in der EU zeigt Land für Land, was nötig ist.', cta: 'Zum Leitfaden →' },
  fr: { text: 'Vous envoyez des équipes à l’étranger ? L’outil gratuit GPS sur les travailleurs en UE indique ce qu’il faut, pays par pays.', cta: 'Ouvrir le guide →' },
  es: { text: '¿Envías equipos al extranjero? La herramienta gratuita GPS para trabajadores en la UE indica qué necesitas, país por país.', cta: 'Abrir la guía →' },
  pt: { text: 'Envias equipas para o estrangeiro? A ferramenta gratuita GPS dos trabalhadores na UE mostra o que precisas, país a país.', cta: 'Abrir o guia →' },
  nl: { text: 'Stuur je teams naar het buitenland? De gratis tool GPS op werknemers in de EU toont per land wat nodig is.', cta: 'Open de gids →' },
  da: { text: 'Sender du hold til udlandet? Det gratis værktøj GPS på medarbejdere i EU viser, hvad der kræves, land for land.', cta: 'Åbn guiden →' },
  sv: { text: 'Skickar du team utomlands? Det gratis verktyget GPS på anställda i EU visar vad som krävs, land för land.', cta: 'Öppna guiden →' },
  nb: { text: 'Sender du team til utlandet? Det gratis verktøyet GPS på ansatte i EU viser hva som kreves, land for land.', cta: 'Åpne veiledningen →' },
  ru: { text: 'Отправляете бригады за рубеж? Бесплатный инструмент «GPS сотрудников в ЕС» показывает, что нужно, страна за страной.', cta: 'Открыть гид →' },
};

export default async function RisorseSettorePage({ params }: { params: Promise<Params> }) {
  const { locale, settore } = await params;
  const config = SETTORE_CONFIG[settore];
  if (!config) return notFound();

  const resolvedLocale = (locale ?? DEFAULT_LOCALE) as AppLocale;
  const label = config.labels[resolvedLocale] ?? config.labels['en'];
  const posts = await fetchAllPostsForCategory(resolvedLocale, config.categoryId);
  const backLabel = BACK_LABELS[resolvedLocale] ?? BACK_LABELS['en'];
  const readLabel = READ_LABELS[resolvedLocale] ?? READ_LABELS['en'];
  const intro = config.intro[resolvedLocale] ?? config.intro['en'];
  const ctaLabel = config.product.ctaLabel[resolvedLocale] ?? config.product.ctaLabel['en'];
  const productPageLabel = PRODUCT_PAGE_LABELS[resolvedLocale] ?? PRODUCT_PAGE_LABELS['en'];
  const emptyLabel = EMPTY_LABELS[resolvedLocale] ?? EMPTY_LABELS['en'];
  const sections = config.sections[resolvedLocale] ?? config.sections['en'] ?? [];
  const productHref = `/${resolvedLocale}/products/${config.product.slug}/`;
  const pageUrl = `https://geotapp.com/${resolvedLocale}/settori/${settore}/risorse/`;
  const gpsHref = localizePath('/risorse/gps-lavoratori-ue/', resolvedLocale);
  const gpsCallout = GPS_CALLOUT[resolvedLocale] ?? GPS_CALLOUT['en'];

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'GeoTapp', item: 'https://geotapp.com' },
      { '@type': 'ListItem', position: 2, name: label.heading, item: pageUrl },
    ],
  };

  const itemListJsonLd = posts.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: label.heading,
        mainEntityOfPage: pageUrl,
        numberOfItems: posts.length,
        itemListElement: posts.map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `https://geotapp.com${post.url}`,
          name: post.title,
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {itemListJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
      )}

      <div className="bg-white min-h-screen text-slate-900 font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-32 pb-12">

          <Link
            href={`/${resolvedLocale}/settori/${settore}/`}
            className="text-sm text-blue-600 hover:underline"
          >
            {backLabel}
          </Link>

          <h1 className="text-3xl font-bold text-slate-900 mt-4 mb-4">
            {label.heading}
          </h1>

          <p className="text-slate-700 leading-relaxed mb-6 max-w-3xl">
            {intro}
          </p>

          <div className="mb-10 max-w-3xl rounded-xl border border-[#8FC436]/30 bg-[#8FC436]/10 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-sm text-slate-700 leading-relaxed">{gpsCallout.text}</p>
            <Link
              href={gpsHref}
              className="shrink-0 inline-flex items-center justify-center rounded-lg bg-[#8FC436] px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-[#7db02e] transition-colors whitespace-nowrap"
            >
              {gpsCallout.cta}
            </Link>
          </div>

          {sections.map((section, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-3">{section.h2}</h2>
              <p className="text-slate-700 leading-relaxed mb-3 max-w-3xl">
                {section.body}{section.productLink && (
                  <>, <Link href={productHref} className="text-blue-600 hover:underline font-medium">{config.product.name}</Link></>
                )}
              </p>
              {section.listItems && (
                <ul className="space-y-2 ml-1">
                  {section.listItems.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-700 text-sm">
                      <span className="text-blue-500 mt-0.5 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {posts.length === 0 ? (
            <p className="text-slate-400 text-sm">{emptyLabel}</p>
          ) : (
            <ul className="space-y-6 mb-10">
              {posts.map((post) => (
                <li key={post.id} className="border-b border-slate-100 pb-6">
                  <Link href={post.url} className="group">
                    <h2 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors mb-1">
                      {post.title}
                    </h2>
                    <p className="text-sm text-slate-500 mb-2">{post.excerpt}</p>
                    <span className="text-xs font-medium text-blue-600">{readLabel}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-blue-500 uppercase tracking-wide mb-1">
                {productPageLabel}
              </p>
              <p className="text-lg font-bold text-slate-900">
                {ctaLabel.discover} {config.product.name}
              </p>
            </div>
            <Link
              href={productHref}
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              {ctaLabel.cta}
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
