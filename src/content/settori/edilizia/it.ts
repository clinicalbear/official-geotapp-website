import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App Cantiere per Edilizia: Presenze GPS e Gestione Squadre | GeoTapp',
    description: 'Gestisci presenze, turni e sicurezza in cantiere con le timbrature GPS. Report sigillati e automatici, pensati per il GDPR, per imprese edili.',
  },
  hero: {
    badge: 'App per imprese edili e cantieri',
    h1_line1: 'Il tuo cantiere documentato,',
    h1_line2: 'ad ogni timbratura.',
    subtitle: 'Timbrature con posizione, gestione squadre e report sigillati automatici. Zero carte, e quando qualcuno contesta hai una prova da mostrare. GeoTapp unisce Flow + TimeTracker per chi gestisce cantieri edili, subappaltatori e direzione lavori.',
    cta_primary: 'Provalo su un cantiere vero',
    cta_note: '14 giorni, fino a 50 operatori sul campo, nessuna carta di credito.',
  },
  pain: {
    title: 'Problemi che risolviamo ogni giorno',
    items: [
      {
        title: 'Chi era in cantiere e quando?',
        desc: 'Ogni timbratura registra ora e posizione rilevate dal telefono in quel momento, non inserite a mano, e finisce nel report sigillato che la direzione lavori può verificare.',
      },
      {
        title: 'Come gestisci i subappaltatori?',
        desc: 'Registra le presenze di tutte le squadre, inclusi i subappaltatori, da un\'unica dashboard aggiornata a ogni timbratura.',
      },
      {
        title: 'I report di cantiere richiedono ore?',
        desc: 'Generati automaticamente con GPS, ore e presenze. Pronti per la direzione lavori e per i SAL senza alcun inserimento manuale.',
      },
    ],
  },
  workflow: {
    title: 'Come funziona',
    subtitle: 'Tre passi semplici. Zero carta. Zero chiamate.',
    steps: [
      {
        title: 'L\'operatore timbra all\'ingresso cantiere',
        desc: 'Apre il turno dallo smartphone. GeoTapp registra ora e posizione in quel momento e, se serve, le foto di prova. Fra una timbratura e l\'altra non registra nulla in automatico.',
      },
      {
        title: 'Il capo cantiere vede le timbrature appena arrivano',
        desc: 'Dashboard unica per tutte le squadre e tutti i cantieri. Chi ha timbrato, dove e a che ora, senza inseguire nessuno al telefono.',
      },
      {
        title: 'Il report è pronto per SAL e DL',
        desc: 'A fine giornata o fine commessa il sistema genera un report sigillato con presenze, GPS e ore. Pronto per la direzione lavori senza un minuto di lavoro manuale.',
      },
    ],
  },
  differenza: {
    title: 'App cantiere: timbratura o prova verificabile?',
    subtitle: 'La maggior parte delle app registra l\'orario. GeoTapp produce prove verificabili.',
    rows: [
      {
        label: 'Cosa registra',
        competitor: 'Orario di entrata/uscita',
        geotapp: 'Orario + posizione alla timbratura + foto + attività svolta',
      },
      {
        label: 'Chi può verificare',
        competitor: 'Solo il tuo ufficio',
        geotapp: 'Tu, la direzione lavori, un ente terzo, in autonomia',
      },
      {
        label: 'In caso di contestazione',
        competitor: 'Solo la tua parola',
        geotapp: 'Report sigillato, ogni modifica rilevabile',
      },
      {
        label: 'Report di cantiere',
        competitor: 'Manuale o assente',
        geotapp: 'Generato automaticamente con GPS e presenze',
      },
      {
        label: 'Conformità GDPR',
        competitor: 'Spesso da verificare',
        geotapp: 'Costruito per stare nei paletti del GDPR, modulistica inclusa',
      },
    ],
  },
  prima_dopo: {
    title: 'Cosa succede adesso. Cosa succede con GeoTapp.',
    prima: [
      'La DL chiede chi era in cantiere martedì. Nessuno lo sa con certezza.',
      'I fogli presenze arrivano incompleti, in ritardo o illeggibili.',
      'Il subappaltatore contesta le ore. Non hai prove.',
      'Prepari il SAL a mano, ricostruendo i dati dai messaggi WhatsApp.',
    ],
    dopo: [
      'La DL chiede chi era in cantiere martedì. Apri le timbrature di quel giorno: c\'è tutto.',
      'Le presenze si registrano a ogni timbratura, con ora e posizione.',
      'Il subappaltatore contesta? Mostri il report sigillato.',
      'Il SAL è già pronto: ore, presenze e GPS aggregati automaticamente.',
    ],
  },
  features: {
    title: 'Funzionalità pensate per il cantiere edile',
    items: [
      {
        title: 'Presenze GPS sigillate',
        desc: 'Ogni entrata, pausa e uscita dal cantiere è registrata con posizione e ora. Da mostrare a direzione lavori, committente e ispettorato quando serve.',
      },
      {
        title: 'Dashboard multi-cantiere',
        desc: 'Segui più cantieri da un\'unica schermata: per ogni cantiere vedi chi ha timbrato, dove e a che ora, appena la timbratura arriva.',
      },
      {
        title: 'Report automatici per SAL',
        desc: 'Il sistema genera report con presenze, ore e GPS aggregati. Pronti per stati avanzamento lavori e direzione lavori, senza inserimenti manuali.',
      },
      {
        title: 'Tracciamento subappaltatori',
        desc: 'Ogni squadra, interna o esterna, timbra dallo smartphone. Il capo cantiere vede tutti da un\'unica dashboard senza rincorrere nessuno.',
      },
      {
        title: 'Prove fotografiche sigillate',
        desc: 'Gli operatori scattano foto dall\'app. Ogni immagine è collegata al cantiere con GPS e timestamp: ogni modifica successiva è rilevabile.',
      },
      {
        title: 'Posizione solo quando si timbra',
        desc: 'Geolocalizzazione costruita per stare dentro i paletti del GDPR: posizione solo quando si timbra, mai in continuo, e informativa ai dipendenti firmata nell\'app prima di timbrare.',
      },
    ],
  },
  testimonial: {
    quote: 'Da quando usiamo GeoTapp, la direzione lavori non ci chiede più i fogli presenze. Apriamo il report e il SAL è già pronto.',
    author: 'Giuseppe M.',
    role: 'Titolare, impresa edile, 35 dipendenti',
  },
  faq: {
    title: 'Domande frequenti',
    subtitle: 'Quello che ci chiedono più spesso prima di iniziare.',
    items: [
      {
        q: 'Chi era in cantiere e quando?',
        a: 'Ogni timbratura registra ora e posizione rilevate dal telefono in quel momento, non inserite a mano, e finisce nel report sigillato che la direzione lavori può verificare.',
      },
      {
        q: 'Come gestisci i subappaltatori in cantiere?',
        a: 'GeoTapp registra le presenze di tutte le squadre, inclusi subappaltatori. Ogni operatore timbra dal proprio smartphone e il capo cantiere vede le timbrature appena arrivano da una dashboard unica.',
      },
      {
        q: 'I report di cantiere richiedono ore di lavoro manuale?',
        a: 'No. GeoTapp genera i report automaticamente con GPS, ore e presenze. Sono pronti per la direzione lavori e per i SAL senza alcun inserimento manuale.',
      },
    ],
  },
  cta: {
    title: 'Prova GeoTapp gratis per 14 giorni',
    subtitle: 'La prova non ti vincola a niente. Nessuna carta di credito richiesta.',
    primary: 'Prova gratis per 14 giorni',
    secondary: 'Vedi i Prezzi',
  },
  pricing_hint: {
    label: 'Postazioni TimeTracker da',
    per: 'per operatore al mese, più il piano Flow da 39 € al mese',
    note: 'Prova gratuita 14 giorni',
  },
  schema_sector_name: 'Edilizia',
  schema_faq: [
    {
      question: 'Chi era in cantiere e quando?',
      answer: 'Ogni timbratura registra ora e posizione rilevate dal telefono in quel momento, non inserite a mano, e finisce nel report sigillato che la direzione lavori può verificare.',
    },
    {
      question: 'Come gestisci i subappaltatori in cantiere?',
      answer: 'GeoTapp registra le presenze di tutte le squadre, inclusi subappaltatori. Ogni operatore timbra dal proprio smartphone e il capo cantiere vede le timbrature appena arrivano da una dashboard unica.',
    },
    {
      question: 'I report di cantiere richiedono ore di lavoro manuale?',
      answer: 'No. GeoTapp genera i report automaticamente con GPS, ore e presenze. Sono pronti per la direzione lavori e per i SAL senza alcun inserimento manuale.',
    },
  ],
};

export default content;
