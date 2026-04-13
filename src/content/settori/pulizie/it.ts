import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App per imprese di pulizie | GeoTapp — GPS e Software',
    description: 'GeoTapp è l\'app e il software per la gestione delle imprese di pulizie: GPS, presenze, report non alterabili. Conforme CCNL e GDPR. Prova gratis.',
  },

  hero: {
    badge: 'Per Imprese di Pulizie, Facility Management e Multiservizi',
    h1_line1: 'La tua impresa di pulizie ha lavorato.',
    h1_line2: 'Adesso dimostralo.',
    subtitle:
      'I clienti contestano. Gli operatori non sono verificabili. I report non bastano mai. GeoTapp certifica ogni intervento con GPS reale, prove fotografiche e report non alterabili — che il committente può verificare da solo. Il software di gestione pulizie che fa il lavoro sporco per te.',
    cta_primary: 'Vedi come funziona su un caso reale',
    cta_note: 'Nessun vincolo. Risposta entro 12 ore lavorative.',
  },

  pain: {
    title: "Se non puoi dimostrarlo, per il cliente non è mai successo.",
    items: [
      {
        title: "Il cliente nega l'intervento",
        desc: "Dice che l'area non è stata pulita o che l'operatore non era presente. Tu hai un orario sul gestionale. Lui ha un avvocato. Senza prove difendibili, perdi il contratto.",
      },
      {
        title: "Operatori sul campo che non puoi verificare",
        desc: "Non puoi essere su tutti i siti. Non sai se il lavoro è stato fatto finché il cliente non si lamenta — e a quel punto è già tardi per ricostruire qualcosa.",
      },
      {
        title: "L'ispettorato chiede documentazione reale",
        desc: "Orari, presenze, straordinari, pause — il foglio presenze non basta. Il CCNL Multiservizi richiede tracciabilità reale. \"C'è scritto sul telefono\" non è documentazione.",
      },
    ],
  },

  prima_dopo: {
    title: 'Cosa succede adesso. Cosa succede con GeoTapp.',
    prima: [
      'Il cliente chiama e dice che il bagno non è stato pulito.',
      'L\'operatore dice "l\'ho fatto". Il cliente dice "non l\'ha fatto".',
      'Non hai niente in mano per dimostrare nulla.',
      'La discussione va avanti per giorni. A volte perdi il contratto.',
    ],
    dopo: [
      'Il cliente chiama e dice che il bagno non è stato pulito.',
      'Apri il report dell\'intervento: foto del bagno pulito, ora, GPS.',
      'Glielo mandi. La discussione finisce in trenta secondi.',
      'Il contratto è al sicuro. L\'operatore è tutelato.',
    ],
  },

  scenario: {
    title: 'Caso reale',
    body: 'Il cliente dice che il bagno non è stato pulito. Con GeoTapp apri il report e mostri la foto dell\'ambiente, l\'ora di scatto e la posizione GPS — tutto generato automaticamente dall\'app dell\'operatore al momento dell\'intervento.',
    resolution: 'La discussione finisce lì.',
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

  non_gestionale: {
    title: 'Non è un gestionale.',
    subtitle: 'I gestionali organizzano il lavoro. GeoTapp lo certifica.',
    items: [
      {
        label: 'Scopo principale',
        gestionale: 'Pianificare e organizzare',
        geotapp: 'Generare prove verificabili',
      },
      {
        label: 'Cosa produce',
        gestionale: 'Dati interni al tuo sistema',
        geotapp: 'Report sigillati verificabili da terzi',
      },
      {
        label: 'In caso di contestazione',
        gestionale: 'Mostri dati che solo tu puoi leggere',
        geotapp: 'Mandi un report che il cliente verifica da solo',
      },
      {
        label: 'Valore verso il cliente',
        gestionale: 'Nessuno — è uno strumento interno',
        geotapp: 'Massimo — è una prova indipendente',
      },
      {
        label: 'Prova fotografica',
        gestionale: 'Non prevista o separata',
        geotapp: 'Integrata nel report con GPS e timestamp',
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
    title: 'App per imprese di pulizie: meno contestazioni, più controllo.',
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
        title: 'Report difendibili in qualsiasi sede',
        desc: 'Ogni report è firmato digitalmente e non alterabile. Vale davanti a un cliente, un ispettore o un avvocato — senza che tu debba spiegare niente.',
      },
      {
        title: "Pronto per l'ispettorato",
        desc: 'Orari, pause, straordinari, notturni — tutto tracciato e conforme al CCNL Multiservizi. In caso di controllo hai tutta la documentazione in ordine in tre clic.',
      },
      {
        title: 'Gestione multi-sito senza chiamate',
        desc: "Decine di sedi, un'unica dashboard. Assegni commesse, vedi chi è attivo dove e ricevi alert automatici se un intervento non viene aperto o chiuso nei tempi.",
      },
      {
        title: 'Il tuo personale è protetto',
        desc: 'Un report verificabile protegge anche l\'operatore da accuse infondate. Chi lavora bene lo dimostra. Nessuna zona grigia.',
      },
    ],
  },

  cosa_cambia: {
    title: 'Cosa cambia davvero.',
    items: [
      {
        title: 'Non devi più fidarti degli operatori.',
        desc: 'Non perché non siano affidabili — ma perché non devi farlo. Il sistema genera la prova al momento dell\'intervento, indipendentemente da quello che ti dicono. Il dato è quello.',
      },
      {
        title: 'Non devi più difenderti a voce.',
        desc: 'Smetti di spiegare, giustificare, ricordare. Quando un cliente contesta, apri il report e lo mandi. Non è una tua parola contro la sua. È un documento verificabile.',
      },
      {
        title: 'Hai prove verificabili. Sempre.',
        desc: 'Ogni intervento chiuso diventa automaticamente un\'evidenza strutturata — GPS, foto, timestamp, firma. Non devi fare niente di extra. Il sistema lo fa mentre i tuoi operatori lavorano.',
      },
    ],
  },

  prova_visiva: {
    title: 'Cosa vedi tu, cosa vede il cliente.',
    subtitle: 'L\'app per chi lavora sul campo. Il report per chi deve rispondere.',
  },

  cta_mid: {
    title: 'Vuoi vedere come funziona su un caso reale?',
    body: 'Ti mostriamo il flusso completo: dall\'operatore che apre l\'intervento al report che riceve il cliente. In 20 minuti capisci se fa per te — senza impegno.',
    cta: 'Vedi come funziona su un caso reale',
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
        a: "No. GeoTapp è un sistema di certificazione del lavoro, non un'app di timbratura. Le app di timbratura registrano un orario. GeoTapp produce un report sigillato con GPS verificato, prove fotografiche e timestamp — che il committente può verificare autonomamente. La differenza tra \"c'è scritto\" e \"si può dimostrare\".",
      },
      {
        q: 'È compatibile con il CCNL Multiservizi?',
        a: 'Sì. GeoTapp traccia orari, pause e straordinari in modo conforme al CCNL Multiservizi, inclusi notturni e festivi. I dati sono esportabili in formato compatibile con Zucchetti e INAZ per l\'elaborazione paghe. In caso di controllo ispettivo, hai tutta la documentazione pronta.',
      },
      {
        q: 'Come gestisco squadre distribuite su più siti contemporaneamente?',
        a: "Con GeoTapp Flow hai un'unica dashboard per tutti i siti. Vedi in tempo reale chi è attivo dove, puoi assegnare commesse e ricevere alert automatici se un intervento non viene aperto o chiuso nei tempi. Nessuna telefonata, nessuna email.",
      },
      {
        q: 'Come controllo che gli operatori abbiano eseguito il lavoro?',
        a: 'Ogni intervento viene aperto e chiuso con GPS verificato dallo smartphone dell\'operatore. Puoi richiedere foto georeferenziate obbligatorie come prova dell\'esecuzione. Il report viene generato in automatico e non si può modificare dopo la chiusura.',
      },
      {
        q: 'GeoTapp è conforme al GDPR per la geolocalizzazione dei dipendenti?',
        a: "Sì. GeoTapp gestisce la geolocalizzazione in modo conforme al GDPR e alle linee guida del Garante Privacy italiano. Traccia la posizione solo durante l'orario di lavoro attivo, include la modulistica per l'informativa ai dipendenti e non raccoglie dati non necessari.",
      },
      {
        q: 'Funziona anche per il facility management e il multiservizi?',
        a: 'Sì. GeoTapp è usato da imprese di pulizie, multiservizi, facility management e ogni realtà con operatori distribuiti su più siti. La piattaforma scala da 3 a 300 operatori senza configurazioni complesse.',
      },
      {
        q: "Quanto costa GeoTapp per un'impresa di pulizie?",
        a: 'I piani partono da pochi euro per operatore al mese. Il modo migliore è richiedere una demo: configuriamo il piano sul tuo numero di operatori e siti reali, senza impegno.',
      },
    ],
  },

  cta: {
    title: "I tuoi operatori lavorano bene. Fai in modo che si veda.",
    subtitle:
      'Ogni giorno il lavoro viene fatto. Il problema è che senza prove verificabili, non vale niente quando qualcuno contesta. GeoTapp trasforma ogni intervento in documentazione difendibile.',
    primary: 'Vedi come funziona su un caso reale',
    secondary: 'Vedi i Prezzi',
  },

  pricing_hint: {
    label: 'A partire da',
    price: '3 €',
    per: 'operatore/mese',
    note: 'Prova gratuita 14 giorni',
  },

  schema_sector_name: 'Imprese di Pulizie',

  schema_faq: [
    {
      question: "GeoTapp è solo un'app di timbratura per imprese di pulizie?",
      answer: 'No. GeoTapp è l\'app e software per imprese di pulizie e multiservizi che va oltre la timbratura: produce report sigillati con GPS verificato, foto e timestamp verificabili autonomamente dal committente — non un semplice registro orari.',
    },
    {
      question: 'È compatibile con il CCNL Multiservizi?',
      answer: 'Sì. Traccia orari, pause e straordinari in modo conforme al CCNL Multiservizi con export compatibile Zucchetti/INAZ per l\'elaborazione paghe.',
    },
    {
      question: 'Come gestisco più siti contemporaneamente?',
      answer: 'Dashboard unica per tutti i siti. Vedi in tempo reale chi è attivo dove, assegni commesse e ricevi alert automatici su anomalie — senza telefonate.',
    },
    {
      question: 'Come controllo che gli operatori abbiano davvero eseguito il lavoro?',
      answer: 'Ogni intervento viene aperto e chiuso con GPS verificato. Puoi richiedere foto georeferenziate obbligatorie. Il report viene generato automaticamente e non si può modificare dopo la chiusura.',
    },
    {
      question: 'GeoTapp è conforme al GDPR per la geolocalizzazione dei dipendenti?',
      answer: "Sì. Conforme al GDPR e alle linee guida del Garante Privacy italiano. Traccia solo durante l'orario di lavoro attivo e include modulistica per l'informativa ai dipendenti.",
    },
    {
      question: 'Funziona anche per il facility management e il multiservizi?',
      answer: 'Sì. GeoTapp scala da imprese di pulizie a multiservizi e facility management, da 3 a 300 operatori.',
    },
    {
      question: 'Quanto costa?',
      answer: 'Pochi euro per operatore al mese. Richiedi una demo per configurare il piano sul tuo caso specifico, senza impegno.',
    },
  ],
};

export default content;
