import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Software per Aziende di Sicurezza | GeoTapp — Certifica ogni turno',
    description: 'GeoTapp è il software per aziende di sicurezza e vigilanza privata: turni GPS certificati, ronde documentate e prove fotografiche non alterabili. Conforme GDPR. Prova gratis.',
  },
  hero: {
    badge: 'Software per Vigilanza Privata, Guardie Giurate e Steward',
    h1_line1: 'Presenze e turni verificabili',
    h1_line2: 'per vigilanza e sicurezza privata',
    subtitle: 'GeoTapp Flow e TimeTracker documentano la presenza delle guardie giurate ai posti assegnati con GPS verificato e timestamp immutabili. Conformità al CCNL Vigilanza Privata GPG, passaggio di consegne digitale e tracciamento qualifiche: tutto in un\'unica piattaforma. L\'app per vigilanza privata che certifica ogni turno, ogni ronda, ogni presenza.',
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
        title: 'Il report è la tua prova — difendibile in audit',
        desc: 'A fine turno il registro presenze è generato con dati GPS reali — non alterabile. Il cliente o la Prefettura possono verificarne l\'autenticità in autonomia — l\'audit diventa una formalità.',
      },
    ],
  },
  differenza: {
    title: 'Software per aziende di sicurezza: registro presenze o prove verificabili?',
    subtitle: 'La maggior parte dei software registra i turni. GeoTapp certifica ogni presenza con prove difendibili.',
    rows: [
      {
        label: 'Cosa registra',
        competitor: 'Orario di inizio/fine turno',
        geotapp: 'Orario + GPS verificato + foto + posizione al posto assegnato',
      },
      {
        label: 'Chi può verificare',
        competitor: 'Solo il tuo ufficio',
        geotapp: 'Tu, il committente, la Prefettura — in autonomia',
      },
      {
        label: 'In caso di contestazione',
        competitor: 'Dato non difendibile',
        geotapp: 'Report sigillato, verificabile da terzi',
      },
      {
        label: 'Prova di ronda',
        competitor: 'Assente o su carta',
        geotapp: 'GPS + timestamp + foto al checkpoint',
      },
      {
        label: 'Conformità GDPR',
        competitor: 'Spesso da verificare',
        geotapp: 'Conforme per design, modulistica inclusa',
      },
    ],
  },

  prima_dopo: {
    title: 'Cosa succede adesso. Cosa succede con GeoTapp.',
    prima: [
      'Il cliente contesta la presenza della guardia in un orario specifico.',
      'La guardia dice "ero lì". Il cliente dice "non risulta".',
      'Non hai nulla per dimostrarlo. La disputa si trascina.',
      'Rischi di perdere il contratto.',
    ],
    dopo: [
      'Il cliente contesta la presenza della guardia in un orario specifico.',
      'Apri il report: GPS al posto assegnato, timestamp, foto del sito.',
      'Glielo mandi. La contestazione si chiude in trenta secondi.',
      'Il contratto è al sicuro.',
    ],
  },

  scenario: {
    title: 'Caso reale',
    body: 'Il committente afferma che la guardia non era al suo posto in un orario critico. Con GeoTapp apri il report di turno: GPS verificato al checkpoint, timestamp immutabile, foto del sito — tutto generato automaticamente dallo smartphone della guardia durante il servizio.',
    resolution: 'La contestazione cade. Il contratto rimane.',
  },

  features: {
    title: 'Software per aziende di sicurezza: turni certificati, ronde documentate.',
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
      {
        title: 'Passaggio di consegne digitale',
        desc: 'Il cambio turno viene registrato digitalmente: note operative, stato dei posti e responsabilità. Informazioni critiche non si perdono più tra un turno e l\'altro.',
      },
      {
        title: 'Dashboard multi-sito in tempo reale',
        desc: 'Il responsabile vede dove sono tutte le guardie, lo stato di ogni posto e i cambi turno attivi — da qualsiasi dispositivo, senza telefonate.',
      },
      {
        title: 'Report difendibili in audit e in Prefettura',
        desc: 'Ogni turno genera un report sigillato con GPS, timestamp e prove fotografiche. Difendibile davanti al cliente, alla Prefettura e in qualsiasi sede di verifica contrattuale.',
      },
    ],
  },

  cta_mid: {
    title: 'Vuoi vedere come funziona su un caso reale di contestazione?',
    body: 'Ti mostriamo il flusso completo: dalla guardia che timbra al posto assegnato al report che riceve il committente. In 20 minuti capisci se fa per te — senza impegno.',
    cta: 'Richiedi una Demo',
  },

  trust: {
    title: 'I nostri report non si possono alterare. Non da te. Non da noi.',
    body: 'I report GeoTapp sono generati dal sistema nel momento del turno. Non esiste un pannello dove "correggere" un orario o spostare una foto. Il dato è quello — firmato digitalmente, con GPS reale. Quando lo mostri al committente o alla Prefettura, regge.',
    badge: 'Verificabile da chiunque — senza accesso al tuo account',
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
  pricing_hint: {
    label: 'A partire da',
    price: '2 €',
    per: 'operatore/mese',
    note: 'Piano gratuito disponibile',
  },

  schema_sector_name: 'Vigilanza Privata',
  schema_faq: [
    {
      question: 'GeoTapp funziona per la gestione di guardie giurate e ronde di sicurezza?',
      answer: 'Sì. GeoTapp permette alle aziende di sicurezza di certificare ogni turno e ogni ronda: le guardie timbrano con GPS verificato dallo smartphone, producendo prove documentabili del servizio svolto.',
    },
    {
      question: 'Come documento le ronde e i controlli periodici?',
      answer: 'Ogni controllo viene registrato con GeoTapp TimeTracker: orario, posizione GPS verificata, foto del sito e note. Il report sigillato è disponibile per il committente in tempo reale o al termine del turno.',
    },
    {
      question: 'Posso dimostrare al cliente che le ronde sono state effettuate regolarmente?',
      answer: 'Sì. I report GeoTapp sono sigillati digitalmente e includono GPS, timestamp e prove fotografiche. Il committente può verificare autonomamente che ogni ronda sia stata eseguita nell\'orario e nel luogo previsti.',
    },
    {
      question: 'Il sistema è conforme alle normative sul lavoro notturno e ai CCNL della vigilanza?',
      answer: 'GeoTapp traccia orari, straordinari e presenze in modo conforme ai principali CCNL del settore vigilanza e sicurezza, rispettando le normative GDPR sulla geolocalizzazione dei dipendenti.',
    },
    {
      question: 'Funziona anche per coordinare più squadre su siti diversi?',
      answer: 'Sì. Con GeoTapp Flow, il responsabile vede in tempo reale dove sono tutte le guardie, assegna i turni, gestisce le sostituzioni urgenti e raccoglie i report da tutti i siti in un\'unica dashboard.',
    },
  ],
};

export default content;
