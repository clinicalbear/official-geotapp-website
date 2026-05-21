import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App per Termoidraulici | GeoTapp — GPS, Rapportini e Prove Intervento',
    description: 'GeoTapp è l\'app per termoidraulici: rapportini GPS verificati, foto degli impianti e report non alterabili. Chiudi le contestazioni su caldaie e impianti con prove reali. Prova gratis.',
  },
  hero: {
    badge: 'App per Termoidraulici e Impiantisti Termosanitari',
    h1_line1: 'App per termoidraulici:',
    h1_line2: 'rapportini GPS, prove fotografiche e zero contestazioni.',
    subtitle: 'GeoTapp registra ogni intervento su caldaie e impianti con GPS, foto e timestamp verificabili. Il cliente nega i materiali sostituiti? Mostri il rapportino — non discuti. Il tuo tecnico è protetto, il tuo fatturato anche.',
    cta_primary: 'Inizia subito gratuitamente!',
    cta_note: 'Nessun vincolo. Risposta entro 12 ore lavorative.',
  },
  pain: {
    title: 'Il problema che ogni impresa termoidraulica conosce bene',
    items: [
      {
        title: 'Il cliente nega i materiali sostituiti sulla caldaia',
        desc: 'Dice che hai cambiato componenti diversi da quelli concordati, o che l\'impianto era già così. Senza prove fotografiche, la contestazione diventa parola contro parola.',
      },
      {
        title: 'Niente documentazione dell\'impianto post-intervento',
        desc: 'Il tecnico ha terminato la riparazione, ma non c\'è traccia fotografica né nota tecnica. Se il guasto si ripresenta, ricostruire cosa è stato fatto è impossibile.',
      },
      {
        title: 'Le urgenze notturne e i weekend non sono tracciabili',
        desc: 'Gli interventi su guasti riscaldamento arrivano a orari impossibili. Il tecnico interviene, risolve il problema, ma non rimane nulla da mostrare al cliente o all\'assicurazione.',
      },
    ],
  },
  workflow: {
    title: 'Come funziona in tre passi',
    subtitle: 'Dal cantiere all\'ufficio senza telefonate.',
    steps: [
      {
        title: 'Il tecnico registra l\'intervento sul campo',
        desc: 'Con GeoTapp TimeTracker timbra ingresso e uscita con GPS, scatta foto dell\'impianto e della caldaia, aggiunge note sui componenti sostituiti dallo smartphone.',
      },
      {
        title: 'L\'ufficio vede tutto in tempo reale',
        desc: 'GeoTapp Flow riceve i dati istantaneamente. Il responsabile vede commessa, tecnico assegnato, avanzamento e prove fotografiche senza chiamare.',
      },
      {
        title: 'Il rapportino è la tua prova',
        desc: 'A fine intervento il sistema genera un report sigillato: orario GPS, foto impianto e componenti, note tecniche. Non alterabile. Il cliente può verificarlo in autonomia.',
      },
    ],
  },
  differenza: {
    title: 'App per termoidraulici: registrazione o certificazione?',
    subtitle: 'La maggior parte delle app registra l\'orario. GeoTapp produce prove verificabili.',
    rows: [
      {
        label: 'Cosa registra',
        competitor: 'Orario di entrata/uscita',
        geotapp: 'Orario + GPS verificato + foto impianto + componenti sostituiti',
      },
      {
        label: 'In caso di contestazione',
        competitor: 'Dato non difendibile',
        geotapp: 'Report sigillato, non alterabile',
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
      'Il cliente nega che la valvola sia stata sostituita.',
      'Non hai foto né materiali documentati.',
      'La discussione dura settimane. Rischi di non essere pagato.',
      'Il tecnico non ha nulla in mano per difendersi.',
    ],
    dopo: [
      'Il cliente nega che la valvola sia stata sostituita.',
      'Apri il rapportino: foto del componente rimosso, del nuovo montato, orario GPS, note tecniche.',
      'Glielo invii. La contestazione finisce in un minuto.',
      'Il pagamento è al sicuro. Il tecnico è tutelato.',
    ],
  },
  scenario: {
    title: 'Caso reale',
    body: 'Un cliente contesta la sostituzione di un bruciatore sulla caldaia e rifiuta di pagare la fattura. Con GeoTapp apri il rapportino: foto del componente difettoso rimosso, del nuovo installato, orario GPS dell\'intervento e note tecniche del tecnico — tutto generato in automatico dallo smartphone sul posto.',
    resolution: 'La contestazione cade. La fattura viene pagata per intero.',
  },
  features: {
    title: 'App per termoidraulici: cosa trovi in GeoTapp.',
    items: [
      {
        title: 'Timbratura GPS verificabile',
        desc: 'Ogni accesso e uscita dall\'impianto è registrato con posizione, timestamp e commessa. Difendibile davanti al cliente e alle assicurazioni.',
      },
      {
        title: 'Prove fotografiche dell\'impianto',
        desc: 'Il tecnico scatta foto dall\'app durante e dopo l\'intervento. Ogni immagine è collegata a GPS e timestamp — non alterabile dopo la generazione.',
      },
      {
        title: 'Rapportini digitali automatici',
        desc: 'A fine lavori il rapportino è già pronto: ore, foto, componenti sostituiti e firma. Il tecnico lo invia al cliente direttamente dall\'app.',
      },
      {
        title: 'Gestione commesse e urgenze',
        desc: 'Assegna interventi urgenti, monitora l\'avanzamento e ricevi alert se un\'attività non viene completata nei tempi previsti.',
      },
      {
        title: 'Export presenze per la paga',
        desc: 'Esporta presenze mensili compatibili con Zucchetti, INAZ, TeamSystem. L\'elaborazione paghe diventa un\'operazione rapida.',
      },
      {
        title: 'I tuoi tecnici sono protetti',
        desc: 'Un report verificabile protegge il tecnico da accuse infondate su materiali o orari. Chi lavora bene lo dimostra con i dati.',
      },
    ],
  },
  cta_mid: {
    title: 'Vuoi vedere come funziona su un intervento termoidraulico reale?',
    body: 'Ti mostriamo il flusso completo: dall\'apertura commessa al rapportino che riceve il cliente. In 20 minuti capisci se fa per te.',
    cta: 'Inizia subito gratuitamente!',
  },
  trust: {
    title: 'I nostri report non si possono alterare. Non da te. Non da noi.',
    body: 'I report GeoTapp sono generati dal sistema nel momento dell\'intervento. Non esiste un pannello per "correggere" un orario o spostare una foto. Il dato è quello — firmato digitalmente, con GPS reale.',
    badge: 'Verificabile da chiunque — senza accesso al tuo account',
  },
  testimonial: {
    quote: 'Con GeoTapp i miei tecnici fotografano l\'impianto prima e dopo ogni intervento. Le contestazioni sui materiali sono sparite. Le fatture vengono pagate.',
    author: 'Marco S.',
    role: 'Titolare, impianti termoidraulici residenziali e industriali',
  },
  faq: {
    title: 'Domande frequenti',
    subtitle: 'Quello che ci chiedono i termoidraulici prima di iniziare.',
    items: [
      {
        q: 'GeoTapp è adatta come app per termoidraulici?',
        a: 'Sì. GeoTapp è usata da termoidraulici e impiantisti termosanitari per gestire interventi su caldaie, impianti di riscaldamento e sanitari, con rapportini GPS, foto e ore verificabili.',
      },
      {
        q: 'Posso usare GeoTapp per documentare la sostituzione di componenti su caldaie?',
        a: 'Sì. Il tecnico scatta foto dall\'app del componente rimosso e di quello installato. Ogni immagine è collegata a GPS, timestamp e commessa — inclusa nel rapportino non alterabile.',
      },
      {
        q: 'GeoTapp aiuta a risolvere le contestazioni dei clienti sugli impianti?',
        a: 'È esattamente il caso d\'uso principale: orario GPS, prove fotografiche dei materiali e rapportino sigillato rendono ogni contestazione infondata risolvibile in pochi minuti.',
      },
    ],
  },
  cta: {
    title: 'Ogni intervento termoidraulico fatto bene merita una prova. GeoTapp la genera.',
    subtitle: 'Report verificabili, GPS reale, foto sigillate. Il tuo lavoro è difendibile.',
    primary: 'Inizia subito gratuitamente!',
    secondary: 'Vedi i Prezzi',
  },
  pricing_hint: {
    label: 'A partire da',
    per: 'operatore/mese',
    note: 'Prova gratuita 14 giorni',
  },
  schema_sector_name: 'Termoidraulici',
  schema_faq: [
    {
      question: 'GeoTapp funziona come app per termoidraulici?',
      answer: 'Sì. GeoTapp è l\'app per termoidraulici e impiantisti che registra ogni intervento su caldaie e impianti con GPS, foto e timestamp verificabili. Il tecnico timbra dal campo, l\'ufficio vede tutto in tempo reale, il cliente riceve un rapportino sigillato.',
    },
    {
      question: 'Come certifico un intervento su caldaia con GeoTapp?',
      answer: 'Il tecnico registra su GeoTapp l\'orario di inizio e fine con GPS verificato, le foto dei componenti sostituiti e le note tecniche. Il sistema genera un rapportino sigillato che il cliente può verificare autonomamente.',
    },
    {
      question: 'GeoTapp aiuta a gestire più squadre di termoidraulici su interventi diversi?',
      answer: 'Sì. GeoTapp Flow permette al titolare di coordinare più squadre, assegnare commesse urgenti, seguire lo stato degli interventi e raccogliere prove fotografiche da tutti i cantieri attivi in tempo reale.',
    },
    {
      question: 'I rapportini GeoTapp sono accettati in caso di contestazione su impianti termici?',
      answer: 'I rapportini GeoTapp sono sigillati con GPS, timestamp e prove fotografiche. Sono stati usati con successo per risolvere contestazioni su lavori non riconosciuti dal cliente finale.',
    },
  ],
};

export default content;
