import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App per Installatori ed Elettricisti | GeoTapp — Rapportini GPS',
    description: 'GeoTapp è l\'app e software per installatori, elettricisti e idraulici: rapportini GPS, prove fotografiche e report non alterabili. Prova gratis.',
  },
  hero: {
    badge: 'Software per Installatori, Elettricisti, Idraulici e Manutentori',
    h1_line1: 'Software per installatori e manutentori:',
    h1_line2: 'interventi, rapportini e ore più chiare',
    subtitle: 'GeoTapp unisce Flow + TimeTracker per chi lavora tra furgoni, cantieri e clienti finali. Le app Android e iOS aiutano il tecnico sul campo; l\'ufficio vede commessa, tempi, prove fotografiche e note senza rincorrere nessuno. Il software di gestione interventi per installatori che lavora mentre sei sul campo.',
    cta_primary: 'Richiedi una Demo',
    cta_note: 'Nessun vincolo. Risposta entro 12 ore lavorative.',
  },
  pain: {
    title: 'Il problema che conosci già',
    items: [
      {
        title: 'Contestazioni su ore e interventi',
        desc: 'Il cliente nega l\'orario. Il tecnico non ha prove. La disputa si trascina settimane e costa più dell\'intervento stesso.',
      },
      {
        title: 'Ufficio che rincorre il campo',
        desc: 'Il responsabile chiama i tecnici per sapere dove sono, cosa hanno fatto, quando finiscono. Ogni telefonata è un\'interruzione per entrambi.',
      },
      {
        title: 'Rapportini incompleti o persi',
        desc: 'Foglietti, WhatsApp, email: i dati arrivano incompleti, in ritardo o non arrivano. Ricostruire il consuntivo è un lavoro a parte.',
      },
    ],
  },
  workflow: {
    title: 'Come funziona in tre passi',
    subtitle: 'Dal furgone all\'ufficio senza telefonate.',
    steps: [
      {
        title: 'Il tecnico timbra sul campo',
        desc: 'Con GeoTapp TimeTracker registra ingresso, uscita, foto e note direttamente dallo smartphone. GPS verificato, GDPR rispettato.',
      },
      {
        title: 'L\'ufficio vede tutto in tempo reale',
        desc: 'Flow riceve i dati istantaneamente. Il responsabile vede commessa, avanzamento, tecnico assegnato e prove fotografiche senza chiamare.',
      },
      {
        title: 'Il report è la tua prova — da mostrare al cliente',
        desc: 'A fine intervento il report è generato con dati GPS reali e prove fotografiche — non alterabile. Qualsiasi modifica è rilevabile. Il cliente può verificare l\'autenticità da solo. Quando nasce un dubbio, non devi spiegare. Devi mostrare.',
      },
    ],
  },
  differenza: {
    title: 'App per installatori: timbratura o certificazione?',
    subtitle: 'La maggior parte delle app registra l\'orario. GeoTapp produce prove verificabili.',
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
        label: 'Rapportino intervento',
        competitor: 'Manuale o assente',
        geotapp: 'Generato automaticamente con GPS e foto',
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
      'Il cliente nega l\'ora o l\'intervento eseguito.',
      'Il tecnico dice "l\'ho fatto". Il cliente dice "non risulta".',
      'Non hai nulla in mano. La discussione dura giorni.',
      'A volte perdi il pagamento. Sempre perdi tempo.',
    ],
    dopo: [
      'Il cliente nega l\'ora o l\'intervento eseguito.',
      'Apri il report: foto, GPS, orario, firma digitale.',
      'Glielo mandi. La discussione finisce in un minuto.',
      'Il pagamento è al sicuro. Il tecnico è tutelato.',
    ],
  },

  scenario: {
    title: 'Caso reale',
    body: 'Il cliente contesta l\'ora di fine lavoro e chiede uno sconto sulla fattura. Con GeoTapp apri il report dell\'intervento: foto dell\'impianto completato, orario GPS verificato, durata calcolata automaticamente — tutto generato dallo smartphone del tecnico al momento del lavoro.',
    resolution: 'La contestazione cade. La fattura viene pagata per intero.',
  },

  features: {
    title: 'App per installatori ed elettricisti: rapportini GPS e prove fotografiche.',
    items: [
      {
        title: 'Timbratura GPS verificabile',
        desc: 'Ogni ingresso e uscita è collegato a posizione, timestamp e commessa. Difendibile davanti al cliente e all\'ispettorato.',
      },
      {
        title: 'Prove fotografiche sigillate',
        desc: 'Il tecnico scatta foto dall\'app. Ogni immagine è collegata all\'intervento con GPS e timestamp, poi inclusa nel report — non alterabile dopo la generazione. Nessuno può modificarle senza che il sistema lo rilevi.',
      },
      {
        title: 'Export per la paga',
        desc: 'Esporta presenze mensili compatibili con Zucchetti, INAZ, TeamSystem. L\'elaborazione paghe diventa un\'operazione di 10 minuti.',
      },
      {
        title: 'Gestione commesse multi-cantiere',
        desc: 'Assegna commesse, monitora l\'avanzamento di ogni cantiere e ricevi alert automatici se un intervento non viene aperto o chiuso nei tempi previsti.',
      },
      {
        title: 'Rapportini digitali automatici',
        desc: 'A fine intervento il rapportino è già pronto: ore, foto, note e firma. Niente carta, niente chiamate. Il tecnico lo invia al cliente direttamente dall\'app.',
      },
      {
        title: 'I tuoi tecnici sono protetti',
        desc: 'Un report verificabile protegge il tecnico da accuse infondate. Chi lavora bene lo dimostra con i dati. Nessuna zona grigia tra campo e ufficio.',
      },
    ],
  },

  cta_mid: {
    title: 'Vuoi vedere come funziona su un intervento reale?',
    body: 'Ti mostriamo il flusso completo: dall\'apertura commessa al rapportino che riceve il cliente. In 20 minuti capisci se fa per te — senza impegno.',
    cta: 'Richiedi una Demo',
  },

  trust: {
    title: 'I nostri report non si possono alterare. Non da te. Non da noi.',
    body: 'I report GeoTapp sono generati dal sistema nel momento dell\'intervento. Non esiste un pannello dove "correggere" un orario o spostare una foto. Il dato è quello — firmato digitalmente, con GPS reale. Quando lo mostri a un cliente o a un avvocato, regge.',
    badge: 'Verificabile da chiunque — senza accesso al tuo account',
  },
  testimonial: {
    quote: 'Prima passavamo ore a raccogliere i fogli dal campo. Ora il rapportino è già pronto quando il tecnico torna al furgone.',
    author: 'Marco R.',
    role: 'Responsabile operativo, impianti civili',
  },
  faq: {
    title: 'Domande frequenti',
    subtitle: 'Quello che ci chiedono più spesso prima di iniziare.',
    items: [
      {
        q: 'GeoTapp è adatto come software per installatori e manutentori?',
        a: 'Sì. GeoTapp aiuta installatori, elettricisti, idraulici e manutentori a gestire interventi, rapportini, ore, trasferte e prove del lavoro svolto tra campo e ufficio.',
      },
      {
        q: 'Posso usare GeoTapp per rapportini intervento e prove fotografiche?',
        a: 'Sì. TimeTracker raccoglie foto, note e timbrature verificabili sul campo, mentre Flow collega tutto alla commessa e allo storico operativo.',
      },
      {
        q: 'GeoTapp aiuta a ridurre contestazioni su ore e lavori svolti?',
        a: 'È questo uno dei casi d\'uso principali: tempi, posizione, note e prove fotografiche rendono la ricostruzione dell\'intervento più chiara e più difendibile.',
      },
    ],
  },
  cta: {
    title: 'Il lavoro c\'è stato. Ora dimostralo.',
    subtitle: 'GeoTapp genera prove verificabili di ogni intervento — report sigillati che il cliente può controllare da solo.',
    primary: 'Richiedi una Demo',
    secondary: 'Vedi i Prezzi',
  },
  pricing_hint: {
    label: 'A partire da',
    price: '2 €',
    per: 'operatore/mese',
    note: 'Piano gratuito disponibile',
  },

  schema_sector_name: 'Installatori',
  schema_faq: [
    {
      question: 'GeoTapp funziona per elettricisti e idraulici in mobilità?',
      answer: 'Sì. GeoTapp è l\'app per installatori ed elettricisti pensata per chi lavora su cantieri e abitazioni private. Con il software per gestione rapportini integrato, i tecnici registrano interventi, foto e ore direttamente dallo smartphone — senza tornare in ufficio.',
    },
    {
      question: 'Come certifico un intervento di manutenzione o installazione?',
      answer: 'Al termine di ogni intervento, il tecnico registra su GeoTapp: orario di inizio e fine con GPS verificato, foto del lavoro eseguito e note tecniche. Il sistema produce un report sigillato che il cliente può verificare autonomamente.',
    },
    {
      question: 'Posso usare GeoTapp per gestire più squadre di installatori su cantieri diversi?',
      answer: 'Sì. GeoTapp Flow permette al titolare di coordinare più squadre in tempo reale, assegnare commesse, seguire lo stato degli interventi e raccogliere prove fotografiche da tutti i cantieri attivi.',
    },
    {
      question: 'I report sono accettati in caso di contestazione con il cliente?',
      answer: 'I report GeoTapp sono sigillati digitalmente con GPS, timestamp e prove fotografiche. Sono stati usati con successo per risolvere contestazioni su interventi non riconosciuti dal cliente finale.',
    },
    {
      question: 'È conforme al GDPR per la geolocalizzazione dei tecnici?',
      answer: 'Sì. GeoTapp gestisce la geolocalizzazione dei dipendenti in modo conforme al GDPR e alle linee guida del Garante Privacy italiano. Fornisce la modulistica per l\'informativa ai dipendenti.',
    },
  ],
};

export default content;
