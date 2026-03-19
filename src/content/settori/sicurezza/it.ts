import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Prova Verificabile dei Turni per Vigilanza Privata e Guardie Giurate | GeoTapp',
    description: 'GeoTapp trasforma ogni turno in prova verificabile per vigilanza privata, guardie giurate e steward. Report sigillati con GPS verificato e sigillo ECDSA — difendibili davanti al cliente e in audit.',
  },
  hero: {
    badge: 'Software per Vigilanza Privata, Guardie Giurate e Steward',
    h1_line1: 'Presenze e turni verificabili',
    h1_line2: 'per vigilanza e sicurezza privata',
    subtitle: 'GeoTapp Flow e TimeTracker documentano la presenza delle guardie giurate ai posti assegnati con GPS verificato e timestamp immutabili. Conformità al CCNL Vigilanza Privata GPG, passaggio di consegne digitale e tracciamento qualifiche: tutto in un\'unica piattaforma.',
    cta_primary: 'Richiedi una Demo',
    cta_note: 'Nessun vincolo. Risposta entro 12 ore lavorative.',
  },
  pain: {
    title: 'I problemi che conosci già',
    items: [
      {
        title: 'Dimostrare la presenza ai posti assegnati',
        desc: 'Il cliente contesta la presenza della guardia in un orario preciso. Senza prove GPS e timestamp verificabili, la disputa è aperta e rischi di perdere il contratto.',
      },
      {
        title: 'Report incidenti senza prova di posizione',
        desc: 'Un rapporto di incidente scritto a mano non ha valore se non è collegato a una posizione GPS certificata e a un orario immutabile. I verbali cartacei sono troppo facili da contestare.',
      },
      {
        title: 'Passaggio di consegne ancora su carta',
        desc: 'Il cambio turno tra guardie avviene con foglietti o telefonate. Informazioni critiche si perdono, le responsabilità non sono chiare e l\'audit è impossibile.',
      },
    ],
  },
  workflow: {
    title: 'Come funziona in tre passi',
    subtitle: 'Dal posto di guardia all\'ufficio senza carta.',
    steps: [
      {
        title: 'La guardia timbra al posto assegnato',
        desc: 'GeoTapp TimeTracker registra ingresso, uscita, posizione GPS e foto con timestamp immutabili. Ogni ronda è documentata automaticamente dallo smartphone.',
      },
      {
        title: 'Il responsabile vede i turni in tempo reale',
        desc: 'Flow riceve i dati istantaneamente. Il responsabile operativo verifica la copertura di tutti i posti, i cambi turno e gli eventuali scostamenti senza chiamare il campo.',
      },
      {
        title: 'Il report è una prova verificabile',
        desc: 'A fine turno il registro presenze è sigillato con dati GPS reali e sigillo ECDSA. Il cliente o la Prefettura possono verificarne l\'autenticità in autonomia — l\'audit diventa una formalità.',
      },
    ],
  },
  features: {
    title: 'Quello che ottieni',
    items: [
      {
        title: 'Timbratura GPS verificabile per ogni guardia',
        desc: 'Ogni presenza è collegata a posizione, timestamp e posto assegnato. Difendibile davanti al cliente, all\'ispettorato del lavoro e in sede di audit contrattuale.',
      },
      {
        title: 'Tracciamento qualifiche e scadenze licenze',
        desc: 'Tieni traccia delle qualifiche guardia giurata, dei rinnovi e delle date di scadenza per ogni operatore. Nessun lavoratore non qualificato in servizio per errore.',
      },
      {
        title: 'Export compatibile con Zucchetti e TeamSystem',
        desc: 'Esporta le presenze mensili nel formato richiesto dai principali software paghe. L\'elaborazione paghe diventa un\'operazione rapida e senza errori di ricopiatura.',
      },
    ],
  },
  testimonial: {
    quote: 'Con GeoTapp abbiamo eliminato le contestazioni sui turni. I clienti ricevono il registro presenze firmato digitalmente con coordinate GPS. Non c\'è niente da discutere.',
    author: 'Luca M.',
    role: 'Direttore Operativo, agenzia di vigilanza privata',
  },
  faq: {
    title: 'Domande frequenti',
    subtitle: 'Quello che ci chiedono più spesso prima di iniziare.',
    items: [
      {
        q: 'GeoTapp è adatto alla vigilanza privata e alle guardie giurate?',
        a: 'Sì. GeoTapp è usato da agenzie di vigilanza privata per documentare le presenze ai posti assegnati con GPS verificato, gestire i cambi turno e tracciare le qualifiche del personale in conformità al CCNL Vigilanza Privata GPG.',
      },
      {
        q: 'Come aiuta GeoTapp nella gestione dei report incidenti?',
        a: 'TimeTracker collega ogni evento a posizione GPS certificata e timestamp immutabile. Il report di incidente generato da GeoTapp include coordinate, ora e foto, rendendo il documento difendibile in sede legale e contrattuale.',
      },
      {
        q: 'GeoTapp supporta il passaggio di consegne digitale tra guardie?',
        a: 'Sì. Il cambio turno viene registrato digitalmente con firma, note operative e stato dei posti. Il responsabile ha visibilità completa sulla continuità del servizio senza dipendere da comunicazioni verbali.',
      },
    ],
  },
  cta: {
    title: 'Il turno c\'è stato. Ora dimostralo.',
    subtitle: 'GeoTapp genera prove verificabili di ogni presidiamento — report sigillati che il cliente e la Prefettura possono controllare da soli.',
    primary: 'Richiedi una Demo',
    secondary: 'Vedi i Prezzi',
  },
  schema_sector_name: 'Vigilanza Privata',
};

export default content;
