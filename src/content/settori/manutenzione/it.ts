import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App Manutenzione: Gestione Squadre e Interventi con GPS | GeoTapp',
    description:
      'Gestisci squadre di manutenzione con GPS: interventi, turni, prove di servizio. Storico completo per ogni impianto o sede cliente. Prova GeoTapp gratis.',
  },

  hero: {
    badge: 'App per squadre di manutenzione',
    h1_line1: 'La tua squadra di manutenzione,',
    h1_line2: 'ogni visita documentata.',
    subtitle:
      'Registra gli interventi, pianifica i turni e documenta ogni visita con la posizione alla timbratura e le foto di prova. Storico completo per impianti e clienti, senza nessun inserimento manuale.',
    cta_primary: 'Prova GeoTapp gratis per 14 giorni',
    cta_note: 'La prova non ti vincola a niente. Nessuna carta di credito richiesta.',
  },

  pain: {
    title: 'Problemi che risolviamo ogni giorno',
    items: [
      {
        title: 'Come documenti gli interventi periodici?',
        desc: 'Report automatico con GPS, ore e foto per ogni visita. Lo storico è completo e scaricabile senza nessun inserimento manuale.',
      },
      {
        title: 'I tecnici arrivano davvero nei tempi previsti?',
        desc: 'Lo vedi appena il tecnico timbra, senza chiamate: orario e posizione di arrivo sono già in Flow, per ogni sede.',
      },
      {
        title: 'Come dimostri il servizio erogato ai clienti?',
        desc: 'Storico completo scaricabile per ogni sede: date, ore, GPS e foto. Il cliente verifica in autonomia, senza accedere al tuo sistema.',
      },
    ],
  },

  workflow: {
    title: 'Come funziona',
    subtitle: 'Tre passi semplici. Zero carta. Zero chiamate.',
    steps: [
      {
        title: "Il tecnico timbra GPS all'arrivo in sede",
        desc: "Apre l'intervento dallo smartphone. GeoTapp registra ora e posizione in quel momento, e le foto di prova. Fra una timbratura e l'altra non registra nulla in automatico.",
      },
      {
        title: "Le ore e l'intervento vengono registrati automaticamente",
        desc: 'Le ore lavorate si associano alla sede e al tipo di intervento. Il responsabile vede, a ogni timbratura, lo stato di ogni visita.',
      },
      {
        title: 'Il cliente riceve il report sigillato',
        desc: "A fine intervento il sistema genera un report con GPS, ore e sigillo. Il cliente lo verifica in autonomia, senza accesso al gestionale.",
      },
    ],
  },

  features: {
    title: 'App per manutenzione: ogni intervento documentato.',
    items: [
      {
        title: 'Presenze con posizione e ora',
        desc: "Ogni arrivo, pausa e partenza è registrato con posizione, ora e sede assegnata, e finisce nel report sigillato. Da mostrare al cliente o all'ispettorato quando serve.",
      },
      {
        title: 'Storico manutenzione per impianto',
        desc: 'Ogni intervento è collegato alla sede o all\'impianto. Lo storico completo è consultabile e scaricabile, per te e per il cliente.',
      },
      {
        title: 'Report automatici e sigillati',
        desc: 'A fine intervento il sistema genera un report sigillato: ore, posizioni, foto e sigillo. Il cliente può verificarlo da solo.',
      },
      {
        title: 'Pianificazione turni e squadre',
        desc: "Assegna interventi, gestisci i turni e ricevi un avviso se un turno resta aperto.",
      },
      {
        title: 'Documentazione fotografica',
        desc: "I tecnici scattano foto direttamente dall'app: prima, durante e dopo l'intervento. Ogni immagine è georeferenziata con timestamp.",
      },
      {
        title: 'Timbratura in un tocco',
        desc: "Il tecnico timbra l'arrivo con GPS, segna le pause e chiude l'intervento con un tocco. Ogni foto scattata resta collegata all'intervento e ai suoi orari.",
      },
    ],
  },

  testimonial: {
    quote:
      'Con GeoTapp ogni intervento di manutenzione è documentato, e ai clienti mandiamo il report di ogni visita.',
    author: 'Andrea L.',
    role: 'Responsabile manutenzione, facility management - Centro Italia',
  },

  faq: {
    title: 'Domande frequenti',
    subtitle: 'Quello che ci chiedono più spesso prima di iniziare.',
    items: [
      {
        q: 'Come documenti gli interventi periodici di manutenzione?',
        a: "GeoTapp genera automaticamente un report per ogni visita con GPS, ore e foto. Lo storico è completo e scaricabile per impianto o per sede cliente, senza nessun inserimento manuale.",
      },
      {
        q: 'I tecnici arrivano davvero nei tempi previsti?',
        a: "Con GeoTapp vedi l'orario di arrivo e la posizione di ogni tecnico nel momento in cui timbra. Nessuna chiamata: il dato è già in Flow.",
      },
      {
        q: 'Come dimostro ai clienti il servizio di manutenzione erogato?',
        a: "GeoTapp mantiene uno storico completo scaricabile per ogni sede cliente: date, ore, GPS e foto di ogni intervento. Al cliente mandi il report sigillato, che verifica da solo senza accedere al tuo sistema.",
      },
      {
        q: 'GeoTapp funziona per la manutenzione di impianti e facility?',
        a: 'Sì. GeoTapp è usato da aziende di manutenzione, facility management e imprese con squadre distribuite su più sedi. Va bene dalla squadra di poche persone all\'azienda con centinaia di tecnici.',
      },
      {
        q: 'GeoTapp è conforme al GDPR per la geolocalizzazione?',
        a: "GeoTapp è costruito per stare dentro i paletti del GDPR: registra la posizione solo quando il tecnico timbra (entrata, pause, uscita) o scatta una foto di prova, fa firmare l'informativa nell'app prima di timbrare e non raccoglie dati non necessari.",
      },
      {
        q: 'Quanto costa GeoTapp per un\'azienda di manutenzione?',
        a: 'GeoTapp Flow parte da 39 € al mese; le postazioni TimeTracker per i tecnici costano 3 € al mese ciascuna fino a 25. Abbonamento minimo 12 mesi. Prima puoi provarlo gratis per 14 giorni, senza carta.',
      },
    ],
  },

  cta: {
    title: 'Ogni intervento di manutenzione merita una prova. GeoTapp la genera.',
    subtitle:
      'Report verificabili, posizione alle timbrature, storico completo per ogni impianto.',
    primary: 'Prova gratis per 14 giorni',
    secondary: 'Vedi i Prezzi',
  },

  pricing_hint: {
    label: 'Postazioni TimeTracker da',
    per: 'per operatore al mese, più il piano Flow da 39 € al mese',
    note: 'Prova gratuita 14 giorni',
  },

  schema_sector_name: 'Manutenzione',

  schema_faq: [
    {
      question: 'Come documenti gli interventi periodici di manutenzione?',
      answer:
        "GeoTapp genera automaticamente un report per ogni visita con GPS, ore e foto. Lo storico è completo e scaricabile per impianto o per sede cliente, senza nessun inserimento manuale.",
    },
    {
      question: 'I tecnici arrivano davvero nei tempi previsti?',
      answer:
        "Con GeoTapp vedi l'orario di arrivo e la posizione di ogni tecnico nel momento in cui timbra. Il dato è già in Flow, senza chiamate.",
    },
    {
      question: 'Come dimostro ai clienti il servizio di manutenzione erogato?',
      answer:
        'GeoTapp mantiene uno storico completo scaricabile per ogni sede cliente: date, ore, GPS e foto di ogni intervento. Al cliente mandi il report sigillato, che verifica da solo.',
    },
  ],
};

export default content;
