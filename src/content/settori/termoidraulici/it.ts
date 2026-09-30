import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App per termoidraulici: rapportini GPS e foto degli interventi',
    description: 'Rapportini con GPS alla timbratura e foto di ogni impianto: le prove da mostrare quando il cliente contesta caldaie e materiali sostituiti. Prova gratis 14 giorni.',
  },
  hero: {
    badge: 'App per Termoidraulici e Impiantisti Termosanitari',
    h1_line1: 'App per termoidraulici:',
    h1_line2: 'rapportini GPS, prove fotografiche e meno contestazioni.',
    subtitle: 'GeoTapp registra ogni intervento su caldaie e impianti con GPS, foto e orari registrati. Il cliente nega i materiali sostituiti? Mostri il rapportino invece di discutere a voce.',
    cta_primary: 'Prova gratis per 14 giorni',
    cta_note: 'La prova non ti vincola a niente. Nessuna carta di credito.',
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
        desc: 'Con GeoTapp TimeTracker timbra entrata, pause e uscita con la posizione, scatta foto dell\'impianto e della caldaia, aggiunge note sui componenti sostituiti dallo smartphone.',
      },
      {
        title: 'L\'ufficio vede tutto appena arriva',
        desc: 'GeoTapp Flow riceve i dati appena il telefono ha rete. Il responsabile vede commessa, tecnico assegnato, avanzamento e prove fotografiche senza chiamare.',
      },
      {
        title: 'Il rapportino è la tua prova',
        desc: 'A fine intervento il sistema genera un report sigillato: orario GPS, foto impianto e componenti, note tecniche. Ogni modifica è rilevabile. Il cliente può verificarlo in autonomia.',
      },
    ],
  },
  differenza: {
    title: 'App per termoidraulici: registrazione o prova verificabile?',
    subtitle: 'La maggior parte delle app registra l\'orario. GeoTapp produce prove verificabili.',
    rows: [
      {
        label: 'Cosa registra',
        competitor: 'Orario di entrata/uscita',
        geotapp: 'Orario + posizione alla timbratura + foto impianto + componenti sostituiti',
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
      'Il cliente nega che la valvola sia stata sostituita.',
      'Non hai foto né materiali documentati.',
      'La discussione dura settimane. Rischi di non essere pagato.',
      'Il tecnico non ha nulla in mano per difendersi.',
    ],
    dopo: [
      'Il cliente nega che la valvola sia stata sostituita.',
      'Apri il rapportino: foto del componente rimosso, del nuovo montato, orario GPS, note tecniche.',
      'Glielo invii, e lui lo verifica da solo.',
      'Hai una prova da mostrare. Anche il tecnico ha qualcosa in mano.',
    ],
  },
  scenario: {
    title: 'Un caso tipico',
    body: 'Un cliente contesta la sostituzione di un bruciatore sulla caldaia e rifiuta di pagare la fattura. Con GeoTapp apri il rapportino: foto del componente difettoso rimosso, del nuovo installato, orario GPS dell\'intervento e note tecniche del tecnico, tutto generato in automatico dallo smartphone sul posto.',
    resolution: 'Invece di una parola contro l\'altra, c\'è un documento che il cliente controlla da solo.',
  },
  features: {
    title: 'App per termoidraulici: cosa trovi in GeoTapp.',
    items: [
      {
        title: 'Timbratura GPS verificabile',
        desc: 'Ogni entrata, pausa e uscita è registrata con posizione, timestamp e commessa. Da mostrare al cliente e all\'assicurazione quando serve.',
      },
      {
        title: 'Prove fotografiche dell\'impianto',
        desc: 'Il tecnico scatta foto dall\'app durante e dopo l\'intervento. Ogni immagine è collegata a posizione e ora, e finisce nel report sigillato: ogni modifica successiva è rilevabile.',
      },
      {
        title: 'Rapportini digitali automatici',
        desc: 'A fine lavori il rapportino è già pronto: ore, foto, componenti sostituiti. L\'ufficio lo manda al cliente da Flow con un clic.',
      },
      {
        title: 'Gestione commesse e urgenze',
        desc: 'Assegna interventi urgenti, segui l\'avanzamento commessa per commessa.',
      },
      {
        title: 'Export presenze per la paga',
        desc: 'Esporta le presenze del mese in Excel o CSV, pronte per il consulente del lavoro. L\'elaborazione paghe diventa un\'operazione rapida.',
      },
      {
        title: 'Anche i tuoi tecnici hanno una prova',
        desc: 'Un report verificabile dà al tecnico qualcosa in mano contro le accuse infondate su materiali o orari. Chi lavora bene lo dimostra con i dati.',
      },
    ],
  },
  cta_mid: {
    title: 'Vuoi vedere come funziona su un intervento termoidraulico reale?',
    body: 'Provalo su un intervento vero, dall\'apertura della commessa al rapportino che riceve il cliente: 14 giorni gratis, senza carta di credito.',
    cta: 'Prova gratis per 14 giorni',
  },
  trust: {
    title: 'Ogni modifica ai nostri report si vede. Non da te. Non da noi.',
    body: 'I report GeoTapp sono generati dal sistema nel momento dell\'intervento. Una volta sigillato il report, correggere un orario o spostare una foto rompe il sigillo, e la verifica lo segnala.',
    badge: 'Verificabile da chiunque, senza accesso al tuo account',
  },
  testimonial: {
    quote: 'Con GeoTapp i miei tecnici fotografano l\'impianto prima e dopo ogni intervento. Quando un cliente contesta i materiali, abbiamo le foto da mostrare.',
    author: 'Marco S.',
    role: 'Titolare, impianti termoidraulici residenziali e industriali',
  },
  faq: {
    title: 'Domande frequenti',
    subtitle: 'Quello che ci chiedono i termoidraulici prima di iniziare.',
    items: [
      {
        q: 'GeoTapp è adatto come app per termoidraulici?',
        a: 'Sì. GeoTapp è usato da termoidraulici e impiantisti termosanitari per gestire interventi su caldaie, impianti di riscaldamento e sanitari, con rapportini GPS, foto e ore verificabili.',
      },
      {
        q: 'Posso usare GeoTapp per documentare la sostituzione di componenti su caldaie?',
        a: 'Sì. Il tecnico scatta foto dall\'app del componente rimosso e di quello installato. Ogni immagine è collegata a GPS, timestamp e commessa, inclusa nel rapportino sigillato.',
      },
      {
        q: 'GeoTapp aiuta a risolvere le contestazioni dei clienti sugli impianti?',
        a: 'È esattamente il caso d\'uso principale: orario GPS, prove fotografiche dei materiali e rapportino sigillato ti danno un documento da mostrare quando una contestazione è infondata.',
      },
    ],
  },
  cta: {
    title: 'Ogni intervento termoidraulico fatto bene merita una prova. GeoTapp la genera.',
    subtitle: 'Report verificabili, posizione alle timbrature, foto sigillate nel report.',
    primary: 'Prova gratis per 14 giorni',
    secondary: 'Vedi i Prezzi',
  },
  pricing_hint: {
    label: 'Postazioni TimeTracker da',
    per: 'per operatore al mese, più il piano Flow da 39 € al mese',
    note: 'Prova gratuita 14 giorni',
  },
  schema_sector_name: 'Termoidraulici',
  schema_faq: [
    {
      question: 'GeoTapp funziona come app per termoidraulici?',
      answer: 'Sì. GeoTapp è l\'app per termoidraulici e impiantisti che registra ogni intervento su caldaie e impianti con GPS, foto e orari registrati. Il tecnico timbra dal campo, l\'ufficio vede tutto appena arriva, il cliente riceve un rapportino sigillato.',
    },
    {
      question: 'Come sigillo un intervento su caldaia con GeoTapp?',
      answer: 'Il tecnico registra su GeoTapp l\'orario di inizio e fine con la posizione, le foto dei componenti sostituiti e le note tecniche. Il sistema genera un rapportino sigillato che il cliente può verificare autonomamente.',
    },
    {
      question: 'GeoTapp aiuta a gestire più squadre di termoidraulici su interventi diversi?',
      answer: 'Sì. GeoTapp Flow permette al titolare di coordinare più squadre, assegnare commesse urgenti, seguire lo stato degli interventi e raccogliere prove fotografiche da tutti i cantieri attivi, appena vengono caricate.',
    },
    {
      question: 'I rapportini GeoTapp servono in caso di contestazione su impianti termici?',
      answer: 'I rapportini GeoTapp sono sigillati con GPS, timestamp e prove fotografiche. Il cliente li verifica da solo. Aiutano a mostrare che il documento non è stato modificato; da soli non sono prova assoluta del fatto né consulenza legale.',
    },
  ],
};

export default content;
