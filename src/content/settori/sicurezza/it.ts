import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Software Vigilanza Privata | GeoTapp - Turni GPS',
    description: 'GeoTapp è il software per aziende di sicurezza e vigilanza privata: turni con posizione alle timbrature, controlli documentati e foto di prova. Pensato per il GDPR. Prova gratis.',
  },
  hero: {
    badge: 'Software per Vigilanza Privata, Guardie Giurate e Steward',
    h1_line1: 'Presenze e turni verificabili',
    h1_line2: 'per vigilanza e sicurezza privata',
    subtitle: 'GeoTapp Flow e TimeTracker documentano la presenza delle guardie giurate ai posti assegnati: posizione e ora a ogni timbratura, foto di prova, report sigillati. Turni, richieste di cambio turno e comunicazioni in un\'unica piattaforma. L\'app per vigilanza privata che sigilla ogni turno, ogni ronda, ogni presenza.',
    cta_primary: 'Prova gratis per 14 giorni',
    cta_note: 'La prova non ti vincola a niente. Nessuna carta di credito.',
  },
  pain: {
    title: 'I problemi che conosci già',
    items: [
      {
        title: 'Dimostrare la presenza ai posti assegnati',
        desc: 'Il cliente contesta la presenza della guardia in un orario preciso. Senza posizione e orari registrati resta la tua parola contro la sua, e rischi il contratto.',
      },
      {
        title: 'Report incidenti senza prova di posizione',
        desc: 'Un rapporto di incidente scritto a mano, senza posizione né orario registrati, è facile da contestare.',
      },
      {
        title: 'Passaggio di consegne ancora su carta',
        desc: 'Il cambio turno tra guardie avviene con foglietti o telefonate. Informazioni critiche si perdono, le responsabilità non sono chiare e ricostruire dopo è difficile.',
      },
    ],
  },
  workflow: {
    title: 'Come funziona in tre passi',
    subtitle: 'Dal posto di guardia all\'ufficio senza carta.',
    steps: [
      {
        title: 'La guardia timbra al posto assegnato',
        desc: 'GeoTapp TimeTracker registra entrata, pause e uscita con posizione e ora, e le foto di prova ai punti di controllo. Ogni controllo lo documenta la guardia con un gesto: fra una timbratura e l\'altra non si registra nulla in automatico.',
      },
      {
        title: 'Il responsabile vede i turni appena arrivano',
        desc: 'Flow riceve i dati appena arrivano. Il responsabile operativo verifica la copertura di tutti i posti, i cambi turno e gli eventuali scostamenti senza chiamare il campo.',
      },
      {
        title: 'Il report è la tua prova, difendibile in audit',
        desc: 'A fine turno il registro presenze è generato con le posizioni registrate alle timbrature, e ogni modifica è rilevabile. Il cliente o la Prefettura possono verificarne l\'integrità da soli.',
      },
    ],
  },
  differenza: {
    title: 'Software per aziende di sicurezza: registro presenze o prove verificabili?',
    subtitle: 'La maggior parte dei software registra i turni. GeoTapp sigilla ogni presenza in un report verificabile.',
    rows: [
      {
        label: 'Cosa registra',
        competitor: 'Orario di inizio/fine turno',
        geotapp: 'Orario + posizione alla timbratura + foto + posizione al posto assegnato',
      },
      {
        label: 'Chi può verificare',
        competitor: 'Solo il tuo ufficio',
        geotapp: 'Tu, il committente, la Prefettura, in autonomia',
      },
      {
        label: 'In caso di contestazione',
        competitor: 'Solo la tua parola',
        geotapp: 'Report sigillato, verificabile da terzi',
      },
      {
        label: 'Prova di ronda',
        competitor: 'Assente o su carta',
        geotapp: 'Posizione, ora e foto al punto di controllo',
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
      'Il cliente contesta la presenza della guardia in un orario specifico.',
      'La guardia dice "ero lì". Il cliente dice "non risulta".',
      'Non hai nulla per dimostrarlo. La disputa si trascina.',
      'Rischi di perdere il contratto.',
    ],
    dopo: [
      'Il cliente contesta la presenza della guardia in un orario specifico.',
      'Apri il report: posizione al posto assegnato, orari, foto del sito.',
      'Glielo mandi, e lui lo verifica da solo.',
      'Hai una prova da mostrare.',
    ],
  },

  scenario: {
    title: 'Un caso tipico',
    body: 'Il committente afferma che la guardia non era al suo posto in un orario critico. Con GeoTapp apri il report di turno: posizione registrata al checkpoint, timestamp sigillato, foto del sito, tutto registrato dallo smartphone della guardia quando ha timbrato e scattato le foto.',
    resolution: 'Invece di una parola contro l\'altra, c\'è un documento che il committente controlla da solo.',
  },

  features: {
    title: 'Software per aziende di sicurezza: turni sigillati, controlli documentati.',
    items: [
      {
        title: 'Timbratura GPS verificabile per ogni guardia',
        desc: 'Ogni presenza è collegata a posizione, ora e posto assegnato. Da mostrare al cliente, all\'ispettorato del lavoro o in un audit contrattuale quando serve.',
      },
      {
        title: 'Anagrafica delle guardie',
        desc: 'Tieni nell\'anagrafica di ogni guardia ruolo, contatti e posti assegnati, e decidi chi vede cosa nell\'app.',
      },
      {
        title: 'Export in Excel o CSV per le paghe',
        desc: 'Esporta le presenze del mese in Excel o CSV, pronte per il consulente del lavoro. L\'elaborazione paghe diventa un\'operazione rapida e senza errori di ricopiatura.',
      },
      {
        title: 'Passaggio di consegne digitale',
        desc: 'Le richieste di cambio turno passano dall\'app e le comunicazioni restano nel canale della commessa: meno foglietti e telefonate fra un turno e l\'altro.',
      },
      {
        title: 'Dashboard multi-sito aggiornata a ogni timbratura',
        desc: 'Il responsabile vede l\'ultima posizione timbrata di ogni guardia, lo stato di ogni posto e i cambi turno attivi, da qualsiasi dispositivo, senza telefonate.',
      },
      {
        title: 'Report difendibili in audit e in Prefettura',
        desc: 'Ogni turno genera un report sigillato con posizioni, orari e foto di prova, che cliente e Prefettura possono verificare da soli.',
      },
    ],
  },

  cta_mid: {
    title: 'Vuoi vedere come funziona su un caso reale di contestazione?',
    body: 'Provalo sul servizio vero, dalla guardia che timbra al posto assegnato al report che riceve il committente: 14 giorni gratis, senza carta di credito.',
    cta: 'Prova gratis per 14 giorni',
  },

  trust: {
    title: 'Ogni modifica ai nostri report si vede, anche se la fai tu o la facciamo noi.',
    body: 'I report GeoTapp sono generati dal sistema nel momento del turno. Una volta sigillato il report, correggere un orario o spostare una foto rompe il sigillo, e la verifica lo segnala. Chi lo riceve, committente o Prefettura, può controllarlo da solo.',
    badge: 'Verificabile da chiunque, senza accesso al tuo account',
  },
  testimonial: {
    quote: 'Ai clienti mandiamo il registro presenze sigillato, con le posizioni delle timbrature: quando contestano, controllano da soli.',
    author: 'Luca M.',
    role: 'Direttore Operativo, agenzia di vigilanza privata',
  },
  faq: {
    title: 'Domande frequenti',
    subtitle: 'Quello che ci chiedono più spesso prima di iniziare.',
    items: [
      {
        q: 'GeoTapp è adatto alla vigilanza privata e alle guardie giurate?',
        a: 'Sì. GeoTapp è usato da agenzie di vigilanza privata per documentare le presenze ai posti assegnati con la posizione, gestire turni e cambi turno e raccogliere le foto di prova ai punti di controllo.',
      },
      {
        q: 'Come aiuta GeoTapp nella gestione dei report incidenti?',
        a: 'TimeTracker collega ogni evento a posizione e ora, sigillate nel report. Il report di incidente generato da GeoTapp include coordinate, ora e foto, e il committente può verificare da solo che il documento non sia stato modificato.',
      },
      {
        q: 'GeoTapp aiuta nel cambio turno tra guardie?',
        a: 'Sì. Le richieste di cambio turno passano dall\'app, i turni sono nel calendario di Flow e le comunicazioni restano nel canale della commessa. Il responsabile vede chi copre cosa senza dipendere da telefonate.',
      },
    ],
  },
  cta: {
    title: 'Il turno c\'è stato. Ora dimostralo.',
    subtitle: 'GeoTapp genera prove verificabili di ogni presidio, report sigillati che il cliente e la Prefettura possono controllare da soli.',
    primary: 'Prova gratis per 14 giorni',
    secondary: 'Vedi i Prezzi',
  },
  pricing_hint: {
    label: 'Postazioni TimeTracker da',
    per: 'per operatore al mese, più il piano Flow da 39 € al mese',
    note: 'Prova gratuita 14 giorni',
  },

  schema_sector_name: 'Vigilanza Privata',
  schema_faq: [
    {
      question: 'GeoTapp funziona per la gestione di guardie giurate e ronde di sicurezza?',
      answer: 'Sì. GeoTapp permette alle aziende di sicurezza di sigillare ogni turno e ogni ronda: le guardie timbrano dallo smartphone con la posizione, e ne escono prove documentate del servizio svolto.',
    },
    {
      question: 'Come documento le ronde e i controlli periodici?',
      answer: 'Ogni controllo viene registrato con GeoTapp TimeTracker: orario, posizione, foto del sito e note. Il report sigillato è disponibile per il committente appena generato, o al termine del turno.',
    },
    {
      question: 'Posso dimostrare al cliente che le ronde sono state effettuate regolarmente?',
      answer: 'Sì. I report GeoTapp sono sigillati e includono posizioni, orari e foto di prova dei punti di controllo. Il committente può verificare da solo che il report non sia stato modificato e vedere a che ora e dove la guardia ha timbrato.',
    },
    {
      question: 'GeoTapp aiuta con il lavoro notturno e i CCNL della vigilanza?',
      answer: 'GeoTapp registra orari, straordinari e maggiorazioni notturne e festive, e li esporta per il consulente del lavoro, che li applica secondo il CCNL. È costruito per stare dentro i paletti del GDPR: posizione solo quando la guardia timbra.',
    },
    {
      question: 'Funziona anche per coordinare più squadre su siti diversi?',
      answer: 'Sì. Con GeoTapp Flow, il responsabile vede l\'ultima posizione timbrata di tutte le guardie, assegna i turni, gestisce le sostituzioni urgenti e raccoglie i report da tutti i siti in un\'unica schermata.',
    },
  ],
};

export default content;
