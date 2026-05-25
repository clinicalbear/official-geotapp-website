import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App per Impresa di Pulizie: Gestione Squadre con GPS | GeoTapp',
    description:
      'Gestisci squadre, turni e presenze con GPS in tempo reale. Prove automatiche di servizio, zero contestazioni clienti. App GDPR-compliant per pulizie.',
  },

  hero: {
    badge: 'App per imprese di pulizie e multiservizi',
    h1_line1: 'La tua impresa di pulizie,',
    h1_line2: 'gestita in tempo reale.',
    subtitle:
      'Timbrature GPS, prove di servizio automatiche e gestione turni in un\'unica app. Zero Excel, zero contestazioni. Il cliente contesta? Mandi il report e la discussione finisce.',
    cta_primary: 'Prova GeoTapp gratis per 14 giorni',
    cta_note: 'Nessun vincolo. Nessuna carta di credito richiesta.',
  },

  pain: {
    title: 'Problemi che risolviamo ogni giorno',
    items: [
      {
        title: 'I clienti contestano le ore lavorate?',
        desc: 'Ogni timbratura è GPS-verificata e timestampata. Mandi il report e la discussione finisce in trenta secondi.',
      },
      {
        title: 'I fogli presenze sono inaffidabili?',
        desc: 'Tracciamento automatico da smartphone, niente inserimenti manuali. Il dato è quello — e non si può cambiare.',
      },
      {
        title: 'Difficile coordinare più squadre?',
        desc: 'Vedi dove sono tutti in tempo reale, su tutti i siti, da un\'unica dashboard. Nessuna telefonata.',
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

  workflow: {
    title: 'Come funziona',
    subtitle: 'Tre step semplici. Zero carta. Zero chiamate.',
    steps: [
      {
        title: 'L\'operatore timbra con GPS',
        desc: 'Apre e chiude il turno dallo smartphone. GeoTapp registra coordinate GPS reali, foto e timestamp — tutto automatico, non modificabile.',
      },
      {
        title: 'Il responsabile vede tutto in tempo reale',
        desc: 'Dashboard unica per tutti i cantieri. Sai esattamente chi è presente, dove e da quando — senza inseguire nessuno.',
      },
      {
        title: 'Il report è pronto automaticamente',
        desc: 'A fine turno il sistema genera un report sigillato con GPS, foto e firma digitale. Invialo al cliente — è verificabile in autonomia.',
      },
    ],
  },

  differenza: {
    title: 'Timbratura vs Prova di servizio.',
    subtitle: 'La maggior parte delle app registra orari. GeoTapp produce prove per il cliente.',
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
    ],
  },

  features: {
    title: 'App per impresa di pulizie: prove di servizio, non solo timbrature.',
    items: [
      {
        title: 'Prove di servizio automatiche',
        desc: 'Ogni intervento chiuso genera un report con GPS, foto e timestamp. Il cliente lo riceve e lo verifica da solo — senza accesso al tuo sistema.',
      },
      {
        title: 'Controllo reale su tutti i siti',
        desc: 'Vedi in tempo reale chi è attivo dove, su tutti gli edifici contemporaneamente. Nessuna telefonata, nessuna email.',
      },
      {
        title: 'Report difendibili in qualsiasi sede',
        desc: 'Ogni report è firmato digitalmente e non alterabile. Vale davanti a un cliente, un ispettore o un avvocato.',
      },
      {
        title: 'Gestione turni e squadre',
        desc: 'Assegna turni, gestisci commesse e ricevi alert automatici se un intervento non viene aperto o chiuso nei tempi.',
      },
      {
        title: 'Documentazione fotografica',
        desc: 'Gli operatori scattano foto direttamente dall\'app. Ogni immagine è georeferenziata con timestamp — prova visiva del lavoro svolto.',
      },
      {
        title: 'Il tuo personale è protetto',
        desc: 'Un report verificabile protegge anche l\'operatore da accuse infondate. Chi lavora bene lo dimostra.',
      },
    ],
  },

  testimonial: {
    quote:
      'Da quando usiamo GeoTapp, le contestazioni dei clienti si risolvono in un minuto. Mandiamo il report con le foto e il GPS, e la discussione finisce lì. In un anno non abbiamo perso neanche un contratto.',
    author: 'Roberta M.',
    role: 'Titolare, impresa di pulizie industriali — Nord Italia',
  },

  faq: {
    title: 'Domande frequenti',
    subtitle: 'Quello che ci chiedono più spesso prima di iniziare.',
    items: [
      {
        q: 'Come funziona la timbratura GPS per imprese di pulizie?',
        a: "L'operatore timbra ingresso e uscita dallo smartphone. GeoTapp registra le coordinate GPS in quel momento — non inserite a mano. Ogni timbratura è certificata con timestamp e posizione verificabile dal committente.",
      },
      {
        q: 'Posso dimostrare al cliente che il servizio è stato eseguito?',
        a: 'Sì. GeoTapp genera automaticamente un report sigillato con GPS, foto e timestamp a fine intervento. Il cliente lo riceve e lo verifica da solo — senza accesso al tuo sistema.',
      },
      {
        q: 'GeoTapp è conforme al GDPR per la geolocalizzazione dei dipendenti?',
        a: "Sì. GeoTapp traccia la posizione solo durante l'orario di lavoro attivo, include modulistica per l'informativa ai dipendenti e non raccoglie dati non necessari. Conforme alle linee guida del Garante Privacy italiano.",
      },
      {
        q: 'Come gestisco squadre distribuite su più siti contemporaneamente?',
        a: "Con GeoTapp Flow hai un'unica dashboard per tutti i siti. Vedi in tempo reale chi è attivo dove, puoi assegnare commesse e ricevere alert automatici.",
      },
      {
        q: 'I fogli presenze cartacei sono ancora necessari?',
        a: 'No. GeoTapp sostituisce completamente i fogli presenze con tracciamento automatico GPS da smartphone. I dati sono esportabili per l\'elaborazione paghe.',
      },
      {
        q: 'Quanto costa GeoTapp per un\'impresa di pulizie?',
        a: 'I piani partono da pochi euro per operatore al mese. Prova gratis per 14 giorni — senza impegno.',
      },
    ],
  },

  cta: {
    title: 'I tuoi operatori lavorano bene. Fai in modo che il cliente lo veda.',
    subtitle:
      'Ogni intervento diventa una prova di servizio verificabile. Zero contestazioni, zero contratti persi.',
    primary: 'Inizia subito gratuitamente!',
    secondary: 'Vedi i Prezzi',
  },

  pricing_hint: {
    label: 'A partire da',
    per: 'operatore/mese',
    note: 'Prova gratuita 14 giorni',
  },

  schema_sector_name: 'Impresa di Pulizie',

  schema_faq: [
    {
      question: "Quanto costa un'app per impresa di pulizie con GPS?",
      answer:
        "Per una squadra di 5 addetti il costo parte da circa 5 euro per dipendente al mese, senza vincoli. GeoTapp Flow include presenze GPS, foto interventi e report cliente nel trial gratuito di 14 giorni.",
    },
    {
      question: "L'app GPS rispetta lo Statuto dei lavoratori (articolo 4)?",
      answer:
        "Sì, se configurata con il protocollo Garante: informativa firmata, finalità organizzativa, geolocalizzazione solo durante turno. Tutte queste regole sono attivate di default su GeoTapp Flow.",
    },
    {
      question: "Come dimostro al cliente che ho eseguito il servizio di pulizia?",
      answer:
        "L'app registra ingresso e uscita GPS, foto del lavoro fatto e nota libera. Il report PDF è firmato con marca temporale e arriva al cliente in automatico a fine intervento.",
    },
    {
      question: "Posso usare l'app anche senza connessione internet sul cantiere?",
      answer:
        "Sì, GeoTapp Flow lavora offline. I dati GPS e le foto restano sul telefono dell'addetto e si sincronizzano automaticamente al primo segnale, senza perdita.",
    },
    {
      question: "Quanto tempo serve per attivare l'app sulla mia squadra?",
      answer:
        "Quindici minuti per il setup azienda, cliente e commessa. Poi il primo addetto timbra dal cantiere il giorno stesso. Niente formazione esterna richiesta.",
    },
  ],
};

export default content;
