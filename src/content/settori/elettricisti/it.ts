import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App per elettricisti: rapportino con ora, posizione e foto',
    description: 'Un tocco all\'arrivo, uno all\'uscita, le foto del quadro allegate all\'intervento. Il rapportino è pronto quando riparti. 14 giorni gratis.',
  },
  hero: {
    badge: 'App per Elettricisti e Impiantisti Elettrici',
    h1_line1: 'App per elettricisti:',
    h1_line2: 'rapportini GPS, prove fotografiche e meno contestazioni.',
    subtitle: 'GeoTapp registra ogni intervento elettrico con GPS, foto e orari registrati. Il cliente contesta? Mostri il rapportino invece di discutere a voce.',
    cta_primary: 'Prova gratis per 14 giorni',
    cta_note: 'La prova non ti vincola a niente. Nessuna carta di credito.',
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
        desc: 'Con GeoTapp TimeTracker timbra entrata, pause e uscita con la posizione, scatta foto dell\'impianto e aggiunge note tecniche dallo smartphone.',
      },
      {
        title: 'L\'ufficio vede tutto appena arriva',
        desc: 'GeoTapp Flow riceve i dati appena il telefono ha rete. Il responsabile vede commessa, tecnico assegnato, avanzamento e prove fotografiche senza chiamare.',
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
        geotapp: 'Orario + posizione alla timbratura + foto impianto + note tecniche',
      },
      {
        label: 'In caso di contestazione',
        competitor: 'Solo la tua parola',
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
        geotapp: 'Costruito per stare nei paletti del GDPR, modulistica inclusa',
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
      'Glielo invii, e lui lo verifica da solo.',
      'Hai una prova da mostrare. Anche il tecnico ha qualcosa in mano.',
    ],
  },
  scenario: {
    title: 'Un caso tipico',
    body: 'Un cliente contesta il completamento dell\'impianto elettrico e rifiuta di pagare l\'ultima fattura. Con GeoTapp apri il rapportino: foto del quadro completato, orario GPS di inizio e fine lavori, note tecniche del tecnico, tutto generato in automatico dallo smartphone sul posto.',
    resolution: 'Invece di una parola contro l\'altra, c\'è un documento che il cliente controlla da solo.',
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
        desc: 'Ogni entrata, pausa e uscita è registrata con posizione, timestamp e commessa. Da mostrare al cliente quando serve.',
      },
      {
        title: 'Prove fotografiche dell\'impianto',
        desc: 'Il tecnico scatta foto dall\'app al termine dell\'intervento. Ogni immagine è collegata a GPS e timestamp: ogni modifica successiva è rilevabile.',
      },
      {
        title: 'Rapportini digitali automatici',
        desc: 'A fine lavori il rapportino è già pronto: ore, foto e note tecniche. L\'ufficio lo manda al cliente da Flow con un clic.',
      },
      {
        title: 'Gestione commesse multi-cantiere',
        desc: 'Assegna interventi, segui l\'avanzamento commessa per commessa.',
      },
      {
        title: 'Export presenze per la paga',
        desc: 'Esporta le presenze del mese in Excel o CSV, pronte per il consulente del lavoro. L\'elaborazione paghe diventa un\'operazione rapida.',
      },
      {
        title: 'I tuoi elettricisti sono protetti',
        desc: 'Un report verificabile dà al tecnico qualcosa in mano contro le accuse infondate. Chi lavora bene lo dimostra con i dati.',
      },
    ],
  },
  cta_mid: {
    title: 'Vuoi vedere come funziona su un intervento elettrico reale?',
    body: 'Provalo su un intervento vero, dall\'apertura della commessa al rapportino che riceve il cliente: 14 giorni gratis, senza carta di credito.',
    cta: 'Prova gratis per 14 giorni',
  },
  trust: {
    title: 'Nei nostri report ogni modifica si vede, anche se la fai tu o la facciamo noi.',
    body: 'I report GeoTapp sono generati dal sistema nel momento dell\'intervento. Una volta sigillato il report, correggere un orario o spostare una foto rompe il sigillo, e la verifica lo segnala.',
    badge: 'Verificabile da chiunque, senza accesso al tuo account',
  },
  testimonial: {
    quote: 'Con GeoTapp i miei tecnici registrano l\'impianto appena finito. Quando un cliente contesta, abbiamo il rapportino da mostrare.',
    author: 'Luca M.',
    role: 'Titolare, impianti elettrici civili e industriali',
  },
  faq: {
    title: 'Domande frequenti',
    subtitle: 'Quello che ci chiedono gli elettricisti prima di iniziare.',
    items: [
      {
        q: 'GeoTapp è adatto come app per elettricisti?',
        a: 'Sì. GeoTapp è usato da elettricisti e impiantisti per gestire interventi, rapportini, ore e prove fotografiche degli impianti. Funziona sia per lavori su singola commessa che per più cantieri in parallelo.',
      },
      {
        q: 'Posso usare GeoTapp per documentare impianti e interventi elettrici?',
        a: 'Sì. Il tecnico scatta foto dall\'app durante o al termine dell\'intervento. Ogni immagine è collegata a GPS, timestamp e commessa, inclusa in un rapportino dove ogni modifica è rilevabile.',
      },
      {
        q: 'GeoTapp aiuta a risolvere le contestazioni dei clienti?',
        a: 'È esattamente il caso d\'uso principale: orario GPS, prove fotografiche e rapportino sigillato ti danno un documento da mostrare quando una contestazione è infondata.',
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
    subtitle: 'Report verificabili, posizione alle timbrature, foto sigillate nel report.',
    primary: 'Prova gratis per 14 giorni',
    secondary: 'Vedi i Prezzi',
  },
  pricing_hint: {
    label: 'Postazioni TimeTracker da',
    per: 'per operatore al mese, più il piano Flow da 39 € al mese',
    note: 'Prova gratuita 14 giorni',
  },
  schema_sector_name: 'Elettricisti',
  schema_faq: [
    {
      question: 'GeoTapp funziona come app per elettricisti?',
      answer: 'Sì. GeoTapp è l\'app per elettricisti e impiantisti che registra ogni intervento con GPS, foto e orari registrati. Il tecnico timbra dal campo, l\'ufficio vede tutto appena arriva, il cliente riceve un rapportino sigillato.',
    },
    {
      question: 'Come sigillo un intervento elettrico con GeoTapp?',
      answer: 'Il tecnico registra su GeoTapp l\'orario di inizio e fine con la posizione, le foto dell\'impianto e le note tecniche. Il sistema genera un rapportino sigillato che il cliente può verificare autonomamente.',
    },
    {
      question: 'GeoTapp aiuta a gestire più squadre di elettricisti su cantieri diversi?',
      answer: 'Sì. GeoTapp Flow permette al titolare di coordinare più squadre, assegnare commesse, seguire lo stato degli interventi e raccogliere prove fotografiche da tutti i cantieri attivi, appena vengono caricate.',
    },
    {
      question: 'I rapportini GeoTapp sono accettati in caso di contestazione?',
      answer: 'I rapportini GeoTapp sono sigillati con GPS, timestamp e prove fotografiche. Il cliente li verifica da solo. Aiutano a mostrare che il documento non è stato modificato; da soli non sono prova assoluta del fatto né consulenza legale.',
    },
    {
      question: 'GeoTapp funziona anche come app per impiantisti?',
      answer: 'Sì. Oltre agli impianti elettrici copre termoidraulica, condizionamento, antincendio e fotovoltaico. Il tecnico registra l\'intervento dal campo con GPS e foto, e il rapportino viene generato allo stesso modo per ogni tipo di impianto.',
    },
    {
      question: 'GeoTapp traccia la posizione dei tecnici durante la giornata?',
      answer: 'No. La posizione viene registrata soltanto quando il tecnico timbra (entrata, pause, uscita) o scatta una foto di prova. Fra una timbratura e l\'altra non si registra nulla in automatico: l\'app non chiede nemmeno il permesso di leggere la posizione in background.',
    },
  ],
};

export default content;
