import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App per Idraulici e Termoidraulici | GeoTapp Rapportini GPS',
    description: 'App per idraulici e termoidraulici: rapportini con posizione e foto, foto degli impianti e report dove ogni modifica è rilevabile. Da mostrare quando qualcuno contesta. Prova gratis.',
  },
  hero: {
    badge: 'App per Idraulici, Termoidraulici e Impiantisti',
    h1_line1: 'App per idraulici e termoidraulici:',
    h1_line2: 'rapportini GPS, prove fotografiche e meno contestazioni.',
    subtitle: 'GeoTapp registra ogni intervento idraulico con GPS, foto e orari registrati. Il cliente contesta? Mostri il rapportino invece di discutere a voce.',
    cta_primary: 'Prova gratis per 14 giorni',
    cta_note: 'La prova non ti vincola a niente. Nessuna carta di credito.',
  },
  pain: {
    title: 'Il problema che ogni impresa idraulica conosce bene',
    items: [
      {
        title: 'Il cliente nega l\'intervento o i materiali usati',
        desc: 'Dice che la riparazione non è stata fatta o che i materiali erano diversi. Senza prove verificabili, ogni contestazione diventa parola contro parola.',
      },
      {
        title: 'Niente documentazione dell\'impianto post-intervento',
        desc: 'Il tecnico ha finito il lavoro, ma non c\'è traccia fotografica né nota tecnica. In caso di guasto successivo, ricostruire cosa è stato fatto diventa impossibile.',
      },
      {
        title: 'Le urgenze restano senza documenti',
        desc: 'Gli interventi di emergenza sono i più difficili da documentare. Il tecnico parte di corsa, lavora senza carta, e poi non c\'è niente da mostrare al cliente.',
      },
    ],
  },
  workflow: {
    title: 'Come funziona in tre passi',
    subtitle: 'Dal cantiere all\'ufficio senza telefonate.',
    steps: [
      {
        title: 'Il tecnico registra l\'intervento sul campo',
        desc: 'Con GeoTapp TimeTracker timbra entrata, pause e uscita con la posizione, scatta foto dell\'impianto idraulico e aggiunge note tecniche dallo smartphone.',
      },
      {
        title: 'L\'ufficio vede tutto appena arriva',
        desc: 'GeoTapp Flow riceve i dati appena il telefono ha rete. Il responsabile vede commessa, tecnico assegnato, avanzamento e prove fotografiche senza chiamare.',
      },
      {
        title: 'Il rapportino è la tua prova',
        desc: 'A fine intervento il sistema genera un report sigillato: orario GPS, foto impianto, materiali usati, note tecniche. Ogni modifica è rilevabile. Il cliente può verificarlo in autonomia.',
      },
    ],
  },
  differenza: {
    title: 'App per idraulici: registrazione o prova verificabile?',
    subtitle: 'La maggior parte delle app registra l\'orario. GeoTapp produce prove verificabili.',
    rows: [
      {
        label: 'Cosa registra',
        competitor: 'Orario di entrata/uscita',
        geotapp: 'Orario + posizione alla timbratura + foto impianto + materiali e note',
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
      'Il cliente nega che la riparazione sia stata eseguita.',
      'Non hai foto né orari verificabili.',
      'La discussione dura settimane. Rischi di non essere pagato.',
      'Il tecnico non ha nulla in mano per difendersi.',
    ],
    dopo: [
      'Il cliente nega che la riparazione sia stata eseguita.',
      'Apri il rapportino: foto GPS dell\'impianto, orario sigillato, note tecniche.',
      'Glielo invii, e lui lo verifica da solo.',
      'Hai una prova da mostrare. Anche il tecnico ha qualcosa in mano.',
    ],
  },
  scenario: {
    title: 'Un caso tipico',
    body: 'Un cliente contesta un intervento termoidraulico urgente e rifiuta di pagare sostenendo che i lavori non siano stati completati. Con GeoTapp apri il rapportino: foto dell\'impianto prima e dopo, orario GPS di arrivo e fine lavori, note tecniche sui materiali sostituiti, tutto generato in automatico dallo smartphone del tecnico sul posto.',
    resolution: 'Invece di una parola contro l\'altra, c\'è un documento che il cliente controlla da solo.',
  },
  features: {
    title: 'App per idraulici e termoidraulici: cosa trovi in GeoTapp.',
    items: [
      {
        title: 'Timbratura GPS verificabile',
        desc: 'Ogni entrata, pausa e uscita è registrata con posizione, timestamp e commessa. Da mostrare al cliente quando serve.',
      },
      {
        title: 'Foto impianti idraulici sigillate',
        desc: 'Il tecnico scatta foto prima e dopo l\'intervento. Ogni immagine è collegata a GPS e timestamp: ogni modifica successiva è rilevabile.',
      },
      {
        title: 'Rapportini digitali automatici',
        desc: 'A fine lavori il rapportino è già pronto: ore, foto, note tecniche e materiali. L\'ufficio lo manda al cliente da Flow con un clic.',
      },
      {
        title: 'Gestione urgenze e manutenzione programmata',
        desc: 'Gestisci sia gli interventi d\'emergenza che le manutenzioni periodiche dallo stesso pannello. Ogni intervento ha la sua commessa e il suo storico.',
      },
      {
        title: 'Export presenze per la paga',
        desc: 'Esporta le presenze del mese in Excel o CSV, pronte per il consulente del lavoro. L\'elaborazione paghe diventa un\'operazione rapida.',
      },
      {
        title: 'I tuoi idraulici sono protetti',
        desc: 'Un report verificabile dà al tecnico qualcosa in mano contro le accuse infondate su lavori non eseguiti o materiali non utilizzati.',
      },
    ],
  },
  cta_mid: {
    title: 'Vuoi vedere come funziona su un intervento idraulico reale?',
    body: 'Provalo su un intervento vero, dall\'apertura della commessa al rapportino che riceve il cliente: 14 giorni gratis, senza carta di credito.',
    cta: 'Prova gratis per 14 giorni',
  },
  trust: {
    title: 'Nei nostri report ogni modifica si vede, anche se la fai tu o la facciamo noi.',
    body: 'I report GeoTapp sono generati dal sistema nel momento dell\'intervento. Una volta sigillato il report, correggere un orario o spostare una foto rompe il sigillo, e la verifica lo segnala.',
    badge: 'Verificabile da chiunque, senza accesso al tuo account',
  },
  testimonial: {
    quote: 'Prima perdevo ore a spiegare gli interventi ai clienti. Adesso mando il rapportino e il cliente lo controlla da solo.',
    author: 'Roberto C.',
    role: 'Titolare, impianti idraulici e termoidraulici',
  },
  faq: {
    title: 'Domande frequenti',
    subtitle: 'Quello che ci chiedono gli idraulici prima di iniziare.',
    items: [
      {
        q: 'GeoTapp è adatto come app per idraulici e termoidraulici?',
        a: 'Sì. GeoTapp è usato da idraulici e termoidraulici per gestire interventi, rapportini, ore e prove fotografiche degli impianti. Funziona sia per urgenze che per manutenzioni programmate.',
      },
      {
        q: 'Posso usare GeoTapp per documentare interventi idraulici e termoidraulici?',
        a: 'Sì. Il tecnico scatta foto prima e dopo l\'intervento dall\'app. Ogni immagine è collegata a GPS, timestamp e commessa, inclusa in un rapportino dove ogni modifica è rilevabile.',
      },
      {
        q: 'GeoTapp gestisce sia interventi d\'emergenza che manutenzione programmata?',
        a: 'Sì. Ogni tipologia di intervento, urgenza, manutenzione, collaudo, ha la sua commessa in GeoTapp. Lo storico di ogni impianto è sempre disponibile con tutte le prove fotografiche.',
      },
    ],
  },
  cta: {
    title: 'Ogni intervento fatto bene merita una prova. GeoTapp la genera.',
    subtitle: 'Report verificabili, posizione alle timbrature, foto sigillate nel report.',
    primary: 'Prova gratis per 14 giorni',
    secondary: 'Vedi i Prezzi',
  },
  pricing_hint: {
    label: 'Postazioni TimeTracker da',
    per: 'operatore al mese, più il piano Flow da 39 €/mese',
    note: 'Prova gratuita 14 giorni',
  },
  schema_sector_name: 'Idraulici',
  schema_faq: [
    {
      question: 'GeoTapp funziona come app per idraulici e termoidraulici?',
      answer: 'Sì. GeoTapp è l\'app per idraulici e termoidraulici che registra ogni intervento con GPS, foto e orari registrati. Il tecnico timbra dal campo, l\'ufficio vede tutto appena arriva, il cliente riceve un rapportino sigillato.',
    },
    {
      question: 'Come sigillo un intervento idraulico con GeoTapp?',
      answer: 'Il tecnico registra su GeoTapp l\'orario di inizio e fine con la posizione, le foto dell\'impianto prima e dopo, e le note tecniche sui materiali usati. Il sistema genera un rapportino sigillato che il cliente può verificare autonomamente.',
    },
    {
      question: 'GeoTapp gestisce urgenze idrauliche e manutenzioni programmate?',
      answer: 'Sì. Sia gli interventi d\'emergenza che le manutenzioni periodiche sono gestiti dalla stessa app. Ogni intervento genera uno storico con prove fotografiche e orari e posizioni registrati alle timbrature.',
    },
    {
      question: 'I rapportini GeoTapp sono accettati in caso di contestazione?',
      answer: 'I rapportini GeoTapp sono sigillati con GPS, timestamp e prove fotografiche. Il cliente li verifica da solo. Aiutano a mostrare che il documento non è stato modificato; da soli non sono prova assoluta del fatto né consulenza legale.',
    },
  ],
};

export default content;
