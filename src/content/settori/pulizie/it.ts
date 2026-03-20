import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'GeoTapp per Imprese di Pulizie — Certifica ogni intervento',
    description: 'GeoTapp certifica ogni intervento di pulizia con report sigillati, GPS verificato e prove fotografiche. Zero contestazioni. Conforme CCNL Multiservizi e GDPR. Prova gratis.',
  },

  hero: {
    badge: 'Per Imprese di Pulizie, Facility Management e Multiservizi',
    h1_line1: 'Il tuo personale ha pulito.',
    h1_line2: 'Adesso dimostralo.',
    subtitle:
      'GeoTapp non registra il lavoro — lo certifica. Report sigillati con GPS reale, foto e timestamp: prove che il committente verifica da solo e che reggono a qualsiasi contestazione.',
    cta_primary: 'Richiedi una Demo Gratuita',
    cta_note: 'Nessun vincolo. Risposta entro 12 ore lavorative.',
  },

  pain: {
    title: "Il problema non è sapere chi ha timbrato. È non poterlo dimostrare.",
    items: [
      {
        title: "Il cliente nega l'intervento",
        desc: "Dice che l'area non è stata pulita o che l'operatore non era presente. Tu hai un orario sul gestionale. Lui ha un avvocato. Senza prove difendibili, perdi il contratto.",
      },
      {
        title: "L'ispettorato chiede documentazione reale",
        desc: "Orari, presenze, straordinari, pause — il foglio presenze non basta. Il CCNL Multiservizi richiede tracciabilità reale. \"C'è scritto sul telefono\" non è documentazione.",
      },
      {
        title: 'I turni non si passano mai davvero',
        desc: 'Il turno di mattina non sa cosa ha fatto quello di sera. I fogli carta si perdono, i WhatsApp restano ignorati. I reclami arrivano a fine mese quando non c\'è più modo di ricostruire niente.',
      },
    ],
  },

  differenza: {
    title: 'Timbratura vs Certificazione del lavoro.',
    subtitle: 'La maggior parte delle app registra dati. GeoTapp produce prove.',
    rows: [
      {
        label: 'Cosa registra',
        competitor: 'Orario di entrata/uscita',
        geotapp: 'Orario + GPS verificato + foto + attività svolta',
      },
      {
        label: 'Chi può verificare',
        competitor: 'Solo il tuo ufficio',
        geotapp: 'Tu, il committente, un ente terzo — in autonomia',
      },
      {
        label: 'In caso di contestazione',
        competitor: 'Dato non difendibile',
        geotapp: 'Report sigillato, non alterabile',
      },
      {
        label: 'Prova fotografica',
        competitor: 'Assente o scollegata',
        geotapp: 'Allegata al report con timestamp e GPS',
      },
      {
        label: 'Conformità GDPR',
        competitor: 'Spesso da verificare',
        geotapp: 'Conforme per design, modulistica inclusa',
      },
      {
        label: 'Controllo in tempo reale',
        competitor: 'No',
        geotapp: 'Sì — tutti i siti, tutti gli operatori',
      },
    ],
  },

  workflow: {
    title: "Dal cantiere all'ufficio, ogni intervento diventa una prova.",
    subtitle: 'Tre passi. Zero carta. Zero chiamate.',
    steps: [
      {
        title: "L'operatore certifica sul posto",
        desc: 'Con GeoTapp TimeTracker registra ingresso, uscita, foto degli ambienti e note dallo smartphone. Il GPS è verificato — non inserito a mano. Il dato è quello, e non si può cambiare.',
      },
      {
        title: "L'ufficio controlla in tempo reale",
        desc: 'Flow mostra in una dashboard unica chi è presente, dove e da quanto. Vedi lo stato di ogni edificio, ricevi alert su anomalie e assegni commesse — senza inseguire nessuno.',
      },
      {
        title: 'Il report è già pronto. E non lo puoi modificare.',
        desc: 'A fine turno il sistema genera automaticamente un report sigillato con GPS, foto e firma digitale. Il committente lo riceve e lo verifica da solo — senza accesso al tuo sistema, senza fidarsi della tua parola.',
      },
    ],
  },

  features: {
    title: 'Cosa cambia concretamente, dal primo mese.',
    items: [
      {
        title: 'Zero contestazioni scritte',
        desc: 'Quando ogni intervento ha un report verificabile, il cliente non ha argomenti. Le dispute si chiudono con un file, non con una trattativa che dura settimane.',
      },
      {
        title: 'Controllo reale su tutti i siti',
        desc: 'Non devi più sperare che i tuoi operatori siano dove devono essere. Lo vedi in tempo reale. Su tutti gli edifici contemporaneamente, da qualsiasi dispositivo.',
      },
      {
        title: 'Fatturazione più rapida e difendibile',
        desc: 'Ogni ora fatturata ha una prova reale. Il cliente non contesta perché ha già visto il report. I tempi di pagamento si accorciano.',
      },
      {
        title: "Pronto per l'ispettorato",
        desc: 'Orari, pause, straordinari, notturni — tutto tracciato e conforme al CCNL Multiservizi. In caso di controllo hai tutta la documentazione in ordine in tre clic.',
      },
      {
        title: 'Passaggi di turno documentati',
        desc: "Il turno di mattina lascia lo stato dell'edificio. Quello di sera sa esattamente cosa trova. Zero ambiguità, zero reclami interni.",
      },
      {
        title: 'Il tuo personale è protetto',
        desc: 'Un report verificabile protegge anche l\'operatore da accuse infondate. Chi lavora bene lo dimostra. Nessuna zona grigia.',
      },
    ],
  },

  testimonial: {
    quote:
      'Prima avevamo sempre qualche cliente che contestava. Da quando usiamo GeoTapp, basta mandare il report e la discussione finisce lì. In sei mesi non abbiamo perso un contratto per contestazione.',
    author: 'Roberta M.',
    role: 'Responsabile operativa, impresa di pulizie industriali — Nord Italia',
  },

  trust: {
    title: 'I nostri report non si possono alterare. Non da te. Non da noi.',
    body:
      "I report GeoTapp sono generati dal sistema nel momento dell'intervento. Non esiste un pannello dove \"correggere\" un orario o spostare una foto. Il dato è quello — firmato digitalmente, con GPS reale. Quando lo mostri a un cliente, a un avvocato o a un ispettore, regge.",
    badge: 'Verificabile da chiunque — senza accesso al tuo account',
  },

  faq: {
    title: 'Domande frequenti',
    subtitle: 'Quello che ci chiedono più spesso prima di iniziare.',
    items: [
      {
        q: "GeoTapp è solo un'app di timbratura per imprese di pulizie?",
        a: "No. GeoTapp è un sistema di certificazione del lavoro. Le app di timbratura registrano un orario. GeoTapp produce un report sigillato con GPS verificato, prove fotografiche e timestamp — che il committente può verificare autonomamente. La differenza tra \"c'è scritto\" e \"si può dimostrare\".",
      },
      {
        q: 'Come gestisco squadre distribuite su più edifici contemporaneamente?',
        a: "Con GeoTapp Flow vedi in tempo reale tutti gli operatori attivi, su tutti gli edifici. Puoi assegnare commesse, monitorare gli interventi e ricevere alert automatici in caso di anomalie — da un'unica dashboard, senza telefonate.",
      },
      {
        q: 'Qual è la differenza tra tracciamento e certificazione del lavoro?',
        a: 'Il tracciamento registra dati: dove era il dipendente, a che ora. La certificazione trasforma quei dati in una prova strutturata, firmata e non alterabile — che vale in caso di contestazione con un cliente, un controllo ispettivo o una disputa legale. GeoTapp fa la seconda cosa.',
      },
      {
        q: 'GeoTapp è conforme al GDPR per la geolocalizzazione dei dipendenti?',
        a: "Sì. GeoTapp gestisce la geolocalizzazione in modo conforme al GDPR e alle linee guida del Garante Privacy italiano. Include la modulistica per l'informativa ai dipendenti e non traccia la posizione fuori dall'orario di lavoro.",
      },
      {
        q: 'È conforme al CCNL Multiservizi?',
        a: 'Sì. GeoTapp traccia orari, pause e straordinari in modo conforme al CCNL Multiservizi, con esportazione compatibile con Zucchetti e INAZ per l\'elaborazione paghe.',
      },
      {
        q: 'Funziona anche per il facility management e il multiservizi?',
        a: 'Sì. GeoTapp è usato da imprese di pulizie, multiservizi, facility management e ogni realtà con operatori distribuiti su più siti. La piattaforma scala da 3 a 300 operatori.',
      },
      {
        q: "Quanto costa GeoTapp per un'impresa di pulizie?",
        a: 'I piani partono da pochi euro per operatore al mese. Il modo migliore è richiedere una demo: configuriamo il piano sul tuo numero di operatori e siti, senza impegno.',
      },
    ],
  },

  cta: {
    title: "La pulizia c'è stata. Adesso dimostralo.",
    subtitle:
      'Ogni giorno i tuoi operatori lavorano bene. Il problema è che senza le prove giuste, devi solo sperare che il cliente ti creda. GeoTapp cambia questa dinamica — con documentazione reale.',
    primary: 'Richiedi una Demo Gratuita',
    secondary: 'Vedi i Prezzi',
  },

  schema_sector_name: 'Imprese di Pulizie',

  schema_faq: [
    {
      question: "GeoTapp è solo un'app di timbratura per imprese di pulizie?",
      answer: 'No. GeoTapp è un sistema di certificazione del lavoro: report sigillati con GPS verificato, foto e timestamp verificabili autonomamente dal committente.',
    },
    {
      question: 'Come funziona per le imprese di pulizie con più edifici?',
      answer: 'Gli operatori timbrano su ogni edificio. Il gestore vede in tempo reale chi ha pulito dove e quando. Il committente riceve un report verificabile ad ogni intervento.',
    },
    {
      question: 'Qual è la differenza tra tracciamento e certificazione del lavoro?',
      answer: 'Il tracciamento registra dati. La certificazione produce prove difendibili — firmate, non alterabili, verificabili da terzi. GeoTapp fa la seconda cosa.',
    },
    {
      question: 'GeoTapp è conforme al GDPR per la geolocalizzazione dei dipendenti?',
      answer: "Sì. Conforme al GDPR e alle linee guida del Garante Privacy italiano. Include modulistica per l'informativa ai dipendenti e non traccia fuori dall'orario di lavoro.",
    },
    {
      question: 'È conforme al CCNL Multiservizi?',
      answer: 'Sì. Traccia pause, straordinari e presenze in modo conforme al CCNL Multiservizi con export compatibile Zucchetti/INAZ.',
    },
    {
      question: 'Funziona anche per il facility management?',
      answer: 'Sì. GeoTapp scala da imprese di pulizie a multiservizi e facility management, da 3 a 300 operatori.',
    },
    {
      question: 'Quanto costa?',
      answer: 'Pochi euro per operatore al mese. Richiedi una demo per configurare il piano sul tuo caso specifico, senza impegno.',
    },
  ],
};

export default content;
