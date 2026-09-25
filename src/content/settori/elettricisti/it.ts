import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App per Elettricisti e Impiantisti | GeoTapp - Rapportini GPS',
    description: 'GeoTapp è l\'app per elettricisti e impiantisti: rapportini GPS automatici, foto degli impianti e report dove ogni modifica è rilevabile. Chiudi le contestazioni con prove reali. Prova gratis.',
  },
  hero: {
    badge: 'App per Elettricisti e Impiantisti Elettrici',
    h1_line1: 'App per elettricisti:',
    h1_line2: 'rapportini GPS, prove fotografiche e zero contestazioni.',
    subtitle: 'GeoTapp registra ogni intervento elettrico con GPS, foto e timestamp verificabili. Il cliente contesta? Mostri il rapportino, non discuti. Il tuo tecnico è protetto, il tuo fatturato anche.',
    cta_primary: 'Inizia subito gratuitamente!',
    cta_note: 'Nessun vincolo. Risposta entro 12 ore lavorative.',
  },
  pain: {
    title: 'Il problema che ogni impresa elettrica conosce bene',
    items: [
      {
        title: 'Il cliente nega l\'intervento o l\'orario',
        desc: 'Dice che il tecnico non era presente o che l\'impianto non è stato completato. Senza prove verificabili, la contestazione si trascina settimane.',
      },
      {
        title: 'Niente documentazione dell\'impianto post-intervento',
        desc: 'Il tecnico ha finito il lavoro, ma non c\'è traccia fotografica né nota tecnica. Ricostruire cosa è stato fatto diventa impossibile.',
      },
      {
        title: 'L\'ufficio non sa dove sono i tecnici',
        desc: 'Telefonate, messaggi, incertezza. Ogni volta che devi aggiornare un cliente sull\'avanzamento dei lavori, devi prima rintracciare il tecnico.',
      },
    ],
  },
  workflow: {
    title: 'Come funziona in tre passi',
    subtitle: 'Dal cantiere all\'ufficio senza telefonate.',
    steps: [
      {
        title: 'Il tecnico registra l\'intervento sul campo',
        desc: 'Con GeoTapp TimeTracker timbra ingresso e uscita con GPS, scatta foto dell\'impianto e aggiunge note tecniche dallo smartphone.',
      },
      {
        title: 'L\'ufficio vede tutto in tempo reale',
        desc: 'GeoTapp Flow riceve i dati istantaneamente. Il responsabile vede commessa, tecnico assegnato, avanzamento e prove fotografiche senza chiamare.',
      },
      {
        title: 'Il rapportino è la tua prova',
        desc: 'A fine intervento il sistema genera un report sigillato: orario GPS, foto impianto, note tecniche. Ogni modifica è rilevabile. Il cliente può verificarlo in autonomia.',
      },
    ],
  },
  differenza: {
    title: 'App per elettricisti: registrazione o prova verificabile?',
    subtitle: 'La maggior parte delle app registra l\'orario. GeoTapp produce prove verificabili.',
    rows: [
      {
        label: 'Cosa registra',
        competitor: 'Orario di entrata/uscita',
        geotapp: 'Orario + GPS verificato + foto impianto + note tecniche',
      },
      {
        label: 'In caso di contestazione',
        competitor: 'Dato non difendibile',
        geotapp: 'Report sigillato, ogni modifica rilevabile',
      },
      {
        label: 'Documentazione intervento',
        competitor: 'Manuale o assente',
        geotapp: 'Generata automaticamente con GPS e foto',
      },
      {
        label: 'Chi può verificare',
        competitor: 'Solo il tuo ufficio',
        geotapp: 'Tu, il committente, un ente terzo',
      },
      {
        label: 'Conformità GDPR',
        competitor: 'Spesso da verificare',
        geotapp: 'Conforme per design, modulistica inclusa',
      },
    ],
  },
  prima_dopo: {
    title: 'Prima di GeoTapp. Dopo GeoTapp.',
    prima: [
      'Il cliente nega che l\'impianto sia stato completato.',
      'Non hai foto né orari verificabili.',
      'La discussione dura settimane. Rischi di non essere pagato.',
      'Il tecnico non ha nulla in mano per difendersi.',
    ],
    dopo: [
      'Il cliente nega che l\'impianto sia stato completato.',
      'Apri il rapportino: foto GPS dell\'impianto, orario sigillato, firma.',
      'Glielo invii. La contestazione finisce in un minuto.',
      'Il pagamento è al sicuro. Il tecnico è tutelato.',
    ],
  },
  scenario: {
    title: 'Caso reale',
    body: 'Un cliente contesta il completamento dell\'impianto elettrico e rifiuta di pagare l\'ultima fattura. Con GeoTapp apri il rapportino: foto del quadro completato, orario GPS di inizio e fine lavori, note tecniche del tecnico, tutto generato in automatico dallo smartphone sul posto.',
    resolution: 'La contestazione cade. La fattura viene pagata per intero.',
  },
  cosa_cambia: {
    title: 'Cosa cambia davvero, dal primo intervento',
    items: [
      {
        title: 'La sera non si ricopia più niente',
        desc: 'Le ore non passano dal foglio, poi dal messaggio, poi dal gestionale. Nascono già sulla commessa giusta, con la posizione e l\'orario di quando sono state fatte, e a fine mese l\'export per le paghe è pronto senza che nessuno le ritrascriva.',
      },
      {
        title: 'Il rapportino smette di essere una discussione',
        desc: 'Quando il committente chiede quante ore sono state fatte sul suo impianto, la risposta non è la parola del tecnico contro la sua, è un documento sigillato con le foto del quadro, gli orari e le note tecniche, che può controllare da solo senza entrare nel tuo account.',
      },
      {
        title: 'Anche il tecnico ha qualcosa in mano',
        desc: 'Vale nelle due direzioni. Chi lavora bene e si sente dire che è arrivato tardi ha la prova dell\'orario, e non deve ricordarsi a memoria cosa ha fatto tre settimane fa per difendersi.',
      },
    ],
  },
  features: {
    title: 'App per elettricisti: cosa trovi in GeoTapp.',
    items: [
      {
        title: 'Timbratura GPS verificabile',
        desc: 'Ogni accesso e uscita dal cantiere è registrato con posizione, timestamp e commessa. Difendibile davanti al cliente e agli enti di controllo.',
      },
      {
        title: 'Prove fotografiche dell\'impianto',
        desc: 'Il tecnico scatta foto dall\'app al termine dell\'intervento. Ogni immagine è collegata a GPS e timestamp: ogni modifica successiva è rilevabile.',
      },
      {
        title: 'Rapportini digitali automatici',
        desc: 'A fine lavori il rapportino è già pronto: ore, foto, note tecniche e firma. Il tecnico lo invia al cliente direttamente dall\'app.',
      },
      {
        title: 'Gestione commesse multi-cantiere',
        desc: 'Assegna interventi, monitora l\'avanzamento e ricevi alert se un\'attività non viene completata nei tempi previsti.',
      },
      {
        title: 'Export presenze per la paga',
        desc: 'Esporta presenze mensili compatibili con Zucchetti, INAZ, TeamSystem. L\'elaborazione paghe diventa un\'operazione rapida.',
      },
      {
        title: 'I tuoi elettricisti sono protetti',
        desc: 'Un report verificabile protegge il tecnico da accuse infondate. Chi lavora bene lo dimostra con i dati.',
      },
    ],
  },
  cta_mid: {
    title: 'Vuoi vedere come funziona su un intervento elettrico reale?',
    body: 'Ti mostriamo il flusso completo: dall\'apertura commessa al rapportino che riceve il cliente. In 20 minuti capisci se fa per te.',
    cta: 'Inizia subito gratuitamente!',
  },
  trust: {
    title: 'I nostri report segnalano ogni modifica. Non da te. Non da noi.',
    body: 'I report GeoTapp sono generati dal sistema nel momento dell\'intervento. Non esiste un pannello per "correggere" un orario o spostare una foto. Il dato è quello, firmato digitalmente, con GPS reale.',
    badge: 'Verificabile da chiunque, senza accesso al tuo account',
  },
  testimonial: {
    quote: 'Con GeoTapp i miei tecnici registrano l\'impianto appena finito. Nessuna contestazione regge più. Le fatture vengono pagate.',
    author: 'Luca M.',
    role: 'Titolare, impianti elettrici civili e industriali',
  },
  faq: {
    title: 'Domande frequenti',
    subtitle: 'Quello che ci chiedono gli elettricisti prima di iniziare.',
    items: [
      {
        q: 'GeoTapp è adatta come app per elettricisti?',
        a: 'Sì. GeoTapp è usata da elettricisti e impiantisti per gestire interventi, rapportini, ore e prove fotografiche degli impianti. Funziona sia per lavori su singola commessa che per più cantieri in parallelo.',
      },
      {
        q: 'Posso usare GeoTapp per documentare impianti e interventi elettrici?',
        a: 'Sì. Il tecnico scatta foto dall\'app durante o al termine dell\'intervento. Ogni immagine è collegata a GPS, timestamp e commessa, inclusa in un rapportino dove ogni modifica è rilevabile.',
      },
      {
        q: 'GeoTapp aiuta a risolvere le contestazioni dei clienti?',
        a: 'È esattamente il caso d\'uso principale: orario GPS, prove fotografiche e rapportino sigillato rendono ogni contestazione infondata risolvibile in pochi minuti.',
      },
      {
        q: 'Va bene anche come app per impiantisti, non solo per elettricisti?',
        a: 'Sì. Impianti elettrici, termoidraulica, condizionamento, antincendio, fotovoltaico. Il mestiere cambia, il problema resta lo stesso, cioè dimostrare chi è andato dove, quanto ci è rimasto e cosa ha lasciato finito. Il rapportino esce uguale per tutti.',
      },
      {
        q: 'Come funzionano i rapportini per gli impiantisti?',
        a: 'Il tecnico chiude l\'intervento dal telefono e il rapportino è già scritto, con ore, posizione, foto dell\'impianto e note tecniche. Non resta il modulo da compilare la sera, che poi è il motivo per cui i rapportini arrivano in ritardo oppure non arrivano.',
      },
      {
        q: 'Possiamo smettere di raccogliere ore e foto su WhatsApp?',
        a: 'È il motivo per cui la maggior parte delle imprese ci arriva. In chat le ore si perdono fra i messaggi, le foto vengono compresse e a fine mese qualcuno deve ricopiare tutto a mano. Qui il dato nasce già collegato alla commessa e alla persona.',
      },
    ],
  },
  cta: {
    title: 'Ogni impianto fatto bene merita una prova. GeoTapp la genera.',
    subtitle: 'Report verificabili, GPS reale, foto sigillate. Il tuo lavoro è difendibile.',
    primary: 'Inizia subito gratuitamente!',
    secondary: 'Vedi i Prezzi',
  },
  pricing_hint: {
    label: 'A partire da',
    per: 'operatore/mese',
    note: 'Prova gratuita 14 giorni',
  },
  schema_sector_name: 'Elettricisti',
  schema_faq: [
    {
      question: 'GeoTapp funziona come app per elettricisti?',
      answer: 'Sì. GeoTapp è l\'app per elettricisti e impiantisti che registra ogni intervento con GPS, foto e timestamp verificabili. Il tecnico timbra dal campo, l\'ufficio vede tutto in tempo reale, il cliente riceve un rapportino sigillato.',
    },
    {
      question: 'Come sigillo un intervento elettrico con GeoTapp?',
      answer: 'Il tecnico registra su GeoTapp l\'orario di inizio e fine con GPS verificato, le foto dell\'impianto e le note tecniche. Il sistema genera un rapportino sigillato che il cliente può verificare autonomamente.',
    },
    {
      question: 'GeoTapp aiuta a gestire più squadre di elettricisti su cantieri diversi?',
      answer: 'Sì. GeoTapp Flow permette al titolare di coordinare più squadre, assegnare commesse, seguire lo stato degli interventi e raccogliere prove fotografiche da tutti i cantieri attivi in tempo reale.',
    },
    {
      question: 'I rapportini GeoTapp sono accettati in caso di contestazione?',
      answer: 'I rapportini GeoTapp sono sigillati con GPS, timestamp e prove fotografiche. Sono stati usati con successo per risolvere contestazioni su lavori non riconosciuti dal cliente finale.',
    },
    {
      question: 'GeoTapp funziona anche come app per impiantisti?',
      answer: 'Sì. Oltre agli impianti elettrici copre termoidraulica, condizionamento, antincendio e fotovoltaico. Il tecnico registra l\'intervento dal campo con GPS e foto, e il rapportino viene generato allo stesso modo per ogni tipo di impianto.',
    },
    {
      question: 'GeoTapp traccia la posizione dei tecnici durante la giornata?',
      answer: 'No. La posizione viene registrata soltanto quando il tecnico apre e chiude l\'intervento. Fra un timbro e l\'altro non c\'è alcun tracciamento del percorso, e non è un limite tecnico, è il modo in cui lo strumento è stato sviluppato.',
    },
  ],
};

export default content;
