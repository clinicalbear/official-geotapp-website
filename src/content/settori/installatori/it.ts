import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App per Installatori e Termoidraulici | GeoTapp - Rapportini GPS',
    description: 'GeoTapp è l\'app per installatori, idraulici e termoidraulici: rapportini con posizione e foto, prove fotografiche e report dove ogni modifica è rilevabile. Prova gratis.',
  },
  hero: {
    badge: 'App per Installatori, Idraulici e Termoidraulici',
    h1_line1: 'Il cliente contesta le ore?',
    h1_line2: 'Mostragli il rapportino GPS.',
    subtitle: 'I tuoi tecnici timbrano dallo smartphone con un tocco. Il sistema genera un rapportino con posizione registrata e foto: ogni modifica è rilevabile. Quando il cliente chiede "quanto tempo ci avete messo?", hai la risposta pronta.',
    cta_primary: 'Prova gratis 14 giorni',
    cta_note: 'Nessuna carta di credito. Operativi dal primo giorno.',
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
        desc: 'Con GeoTapp TimeTracker registra entrata, pause, uscita, foto e note direttamente dallo smartphone. La posizione si prende solo quando timbra, come chiede il GDPR.',
      },
      {
        title: 'L\'ufficio vede tutto appena arriva',
        desc: 'Flow riceve i dati istantaneamente. Il responsabile vede commessa, avanzamento, tecnico assegnato e prove fotografiche senza chiamare.',
      },
      {
        title: 'Il report è la tua prova, da mostrare al cliente',
        desc: 'A fine intervento il report è generato con dati GPS reali e prove fotografiche. Qualsiasi modifica è rilevabile. Il cliente può verificare l\'autenticità da solo. Quando nasce un dubbio, non devi spiegare. Devi mostrare.',
      },
    ],
  },
  differenza: {
    title: 'App per installatori: timbratura o prova verificabile?',
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
        geotapp: 'Tu, il committente, un ente terzo, in autonomia',
      },
      {
        label: 'In caso di contestazione',
        competitor: 'Solo la tua parola',
        geotapp: 'Report sigillato, ogni modifica è rilevabile',
      },
      {
        label: 'Rapportino intervento',
        competitor: 'Manuale o assente',
        geotapp: 'Generato automaticamente con GPS e foto',
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
      'Il cliente nega l\'ora o l\'intervento eseguito.',
      'Il tecnico dice "l\'ho fatto". Il cliente dice "non risulta".',
      'Non hai nulla in mano. La discussione dura giorni.',
      'A volte perdi il pagamento. Sempre perdi tempo.',
    ],
    dopo: [
      'Il cliente nega l\'ora o l\'intervento eseguito.',
      'Apri il report: foto, GPS, orario, sigillo.',
      'Glielo mandi. La discussione finisce in un minuto.',
      'Hai una prova da mostrare. Anche il tecnico ha qualcosa in mano.',
    ],
  },

  scenario: {
    title: 'Un caso tipico',
    body: 'Il cliente contesta l\'ora di fine lavoro e chiede uno sconto sulla fattura. Con GeoTapp apri il report dell\'intervento: foto dell\'impianto completato, orari e posizioni delle timbrature, durata calcolata automaticamente, tutto generato dallo smartphone del tecnico al momento del lavoro.',
    resolution: 'Invece di una parola contro l\'altra, c\'è un documento che il cliente controlla da solo.',
  },

  features: {
    title: 'App per installatori e termoidraulici: rapportini GPS e prove fotografiche.',
    items: [
      {
        title: 'Timbratura GPS verificabile',
        desc: 'Ogni entrata, pausa e uscita è collegata a posizione, ora e commessa. Da mostrare al cliente o all\'ispettorato quando serve.',
      },
      {
        title: 'Prove fotografiche sigillate',
        desc: 'Il tecnico scatta foto dall\'app. Ogni immagine è collegata all\'intervento con GPS e timestamp, poi inclusa nel report. Nessuno può modificarle senza che il sistema lo rilevi.',
      },
      {
        title: 'Export per la paga',
        desc: 'Esporta le presenze del mese in Excel o CSV, pronte per il consulente del lavoro. L\'elaborazione paghe diventa un\'operazione di 10 minuti.',
      },
      {
        title: 'Gestione commesse multi-cantiere',
        desc: 'Assegna commesse, segui l\'avanzamento di ogni cantiere e ricevi un avviso se un turno resta aperto.',
      },
      {
        title: 'Rapportini digitali automatici',
        desc: 'A fine intervento il rapportino è già pronto: ore, foto e note. Niente carta, niente chiamate. L\'ufficio lo manda al cliente da Flow con un clic.',
      },
      {
        title: 'Anche i tuoi tecnici hanno una prova',
        desc: 'Un report verificabile dà al tecnico qualcosa in mano contro le accuse infondate. Chi lavora bene lo dimostra con i dati. Nessuna zona grigia tra campo e ufficio.',
      },
    ],
  },

  cta_mid: {
    title: 'Vuoi vedere come funziona su un intervento reale?',
    body: 'Ti mostriamo il flusso completo: dall\'apertura commessa al rapportino che riceve il cliente. In 20 minuti capisci se fa per te, senza impegno.',
    cta: 'Prova gratis per 14 giorni',
  },

  trust: {
    title: 'I nostri report: ogni modifica è rilevabile. Non da te. Non da noi.',
    body: 'I report GeoTapp sono generati dal sistema nel momento dell\'intervento. Una volta sigillato il report, correggere un orario o spostare una foto rompe il sigillo, e la verifica lo segnala. Chi lo riceve, cliente o consulente, può controllarlo da solo.',
    badge: 'Verificabile da chiunque, senza accesso al tuo account',
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
        a: 'È questo uno dei casi d\'uso principali: tempi, posizione, note e prove fotografiche rendono la ricostruzione dell\'intervento più chiara e più facile da mostrare.',
      },
    ],
  },
  cta: {
    title: 'Il lavoro c\'è stato. Ora dimostralo.',
    subtitle: 'GeoTapp genera prove verificabili di ogni intervento, report sigillati che il cliente può controllare da solo.',
    primary: 'Prova gratis per 14 giorni',
    secondary: 'Vedi i Prezzi',
  },
  pricing_hint: {
    label: 'Postazioni TimeTracker da',
    per: 'operatore al mese, più il piano Flow da 39 €/mese',
    note: 'Prova gratuita 14 giorni',
  },

  schema_sector_name: 'Installatori',
  schema_faq: [
    {
      question: 'GeoTapp funziona per idraulici e termoidraulici in mobilità?',
      answer: 'Sì. GeoTapp è l\'app per installatori e termoidraulici pensata per chi lavora su cantieri e abitazioni private. Con il software per gestione rapportini integrato, i tecnici registrano interventi, foto e ore direttamente dallo smartphone, senza tornare in ufficio.',
    },
    {
      question: 'Come documento un intervento di manutenzione o installazione?',
      answer: 'Al termine di ogni intervento, il tecnico registra su GeoTapp: orario di inizio e fine con la posizione, foto del lavoro eseguito e note tecniche. Il sistema produce un report sigillato che il cliente può verificare autonomamente.',
    },
    {
      question: 'Posso usare GeoTapp per gestire più squadre di installatori su cantieri diversi?',
      answer: 'Sì. GeoTapp Flow permette al titolare di coordinare più squadre, assegnare commesse, seguire lo stato degli interventi e raccogliere prove fotografiche da tutti i cantieri attivi, appena arrivano.',
    },
    {
      question: 'I report servono in caso di contestazione con il cliente?',
      answer: 'I report GeoTapp sono sigillati con la posizione, timestamp e prove fotografiche. Il cliente li verifica da solo. Aiutano a mostrare che il documento non è stato modificato; da soli non sono prova assoluta del fatto né consulenza legale.',
    },
    {
      question: 'GeoTapp rispetta il GDPR sulla geolocalizzazione dei tecnici?',
      answer: 'È costruito per starci dentro: la posizione si registra solo quando il tecnico timbra o scatta una foto di prova, mai in continuo, e l\'informativa ai dipendenti si firma nell\'app prima della prima timbratura. Il resto (accordo sindacale o autorizzazione, dove servono) spetta al datore di lavoro.',
    },
  ],
};

export default content;
