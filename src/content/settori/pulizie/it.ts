import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App per imprese di pulizie: presenze GPS e foto per cantiere',
    description: 'Timbrature con GPS solo all\'inizio e alla fine e foto di ogni intervento: le prove da mostrare al cliente quando contesta un servizio. 14 giorni gratis.',
  },

  hero: {
    badge: 'App per imprese di pulizie, Facility Management e Multiservizi',
    h1_line1: 'L\'app per impresa di pulizie',
    h1_line2: 'che sigilla ogni intervento.',
    subtitle:
      'GeoTapp è l\'app per impresa di pulizie che trasforma ogni intervento in una prova da mostrare. I clienti contestano, e un orario scritto non basta. GeoTapp registra la posizione a ogni timbratura, raccoglie le foto di prova e chiude tutto in un report sigillato, dove ogni modifica è rilevabile, che il committente può verificare da solo.',
    cta_primary: 'Provalo su una commessa vera',
    cta_note: '14 giorni, fino a 50 operatori sul campo, nessuna carta di credito.',
  },

  pain: {
    title: "Se non puoi dimostrarlo, per il cliente non è mai successo.",
    items: [
      {
        title: "Il cliente nega l'intervento",
        desc: "Dice che l'area non è stata pulita o che l'operatore non era presente. Tu hai un orario scritto, lui la sua versione. Senza prove verificabili, rischi il contratto.",
      },
      {
        title: "Operatori sul campo che non puoi verificare",
        desc: "Non puoi essere su tutti i siti. Non sai se il lavoro è stato fatto finché il cliente non si lamenta, e a quel punto è già tardi per ricostruire qualcosa.",
      },
      {
        title: "L'ispettorato chiede documentazione reale",
        desc: "Orari, presenze, straordinari, pause, il foglio presenze non basta. Chi controlla vuole orari registrati, non ricostruiti a memoria.",
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
      'Apri il report dell\'intervento: foto del bagno pulito, ora, posizione.',
      'Glielo mandi. Hai risposto con i dati, e lui li verifica da solo.',
      'Hai una prova da mostrare. Anche l\'operatore ha qualcosa in mano.',
    ],
  },

  scenario: {
    title: 'Un caso tipico',
    body: 'Il cliente dice che il bagno non è stato pulito. Con GeoTapp apri il report e mostri la foto dell\'ambiente, l\'ora di scatto e la posizione, tutto generato automaticamente dall\'app dell\'operatore al momento dell\'intervento.',
    resolution: 'Hai risposto con i dati, non con una tua parola contro la sua.',
  },

  differenza: {
    title: 'Timbratura vs Prova verificabile del lavoro.',
    subtitle: 'La maggior parte delle app registra dati. GeoTapp produce prove.',
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
        geotapp: 'Report sigillato, ogni modifica rilevabile',
      },
      {
        label: 'Prova fotografica',
        competitor: 'Assente o scollegata',
        geotapp: 'Allegata al report con ora e posizione',
      },
      {
        label: 'Conformità GDPR',
        competitor: 'Spesso da verificare',
        geotapp: 'Costruito per stare nei paletti del GDPR, modulistica inclusa',
      },
      {
        label: 'Visibilità aggiornata a ogni timbratura',
        competitor: 'No',
        geotapp: 'Sì, tutti i siti, tutti gli operatori',
      },
    ],
  },

  non_gestionale: {
    title: 'Non è solo un gestionale.',
    subtitle: 'I gestionali organizzano il lavoro. GeoTapp lo organizza e in più lo sigilla.',
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
        gestionale: 'Nessuno, è uno strumento interno',
        geotapp: 'Alto: il cliente la verifica da solo',
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
        title: "L'operatore sigilla la prova sul posto",
        desc: 'Con GeoTapp TimeTracker registra entrata, pause, uscita, foto degli ambienti e note dallo smartphone. La posizione è rilevata dal telefono in quel momento, non inserita a mano, e ogni modifica successiva è rilevabile.',
      },
      {
        title: "L'ufficio è aggiornato a ogni timbratura",
        desc: 'Flow mostra in una schermata unica chi ha timbrato, dove e a che ora. Vedi lo stato di ogni edificio, ricevi un avviso se un turno resta aperto e assegni le commesse, senza inseguire nessuno.',
      },
      {
        title: 'Il report è già pronto. Sigillato: ogni modifica si vede.',
        desc: 'A fine turno il sistema genera automaticamente un report sigillato con posizioni, foto e sigillo. Il committente lo riceve e lo verifica da solo, senza accesso al tuo sistema, senza fidarsi della tua parola.',
      },
    ],
  },

  features: {
    title: 'App per imprese di pulizie: meno discussioni, più prove.',
    items: [
      {
        title: 'Rispondi a ogni contestazione con i dati',
        desc: 'Quando ogni intervento ha un report verificabile, hai la documentazione per rispondere subito. Meno trattative a voce che durano settimane.',
      },
      {
        title: 'Controllo reale su tutti i siti',
        desc: 'Sai dove e a che ora ogni operatore ha timbrato, appena la timbratura arriva, su tutti gli edifici e da qualsiasi dispositivo. Fra una timbratura e l\'altra non si registra nulla in automatico.',
      },
      {
        title: 'Report difendibili in qualsiasi sede',
        desc: 'Ogni report è sigillato: ogni modifica è rilevabile. Chi lo riceve, cliente, ispettore o consulente, può controllarlo da solo.',
      },
      {
        title: "Pronto per l'ispettorato",
        desc: 'Orari, pause, straordinari e maggiorazioni sono registrati turno per turno ed escono nel riepilogo per il consulente del lavoro. In caso di controllo la documentazione è già in ordine.',
      },
      {
        title: 'Gestione multi-sito senza chiamate',
        desc: "Decine di sedi, un'unica schermata. Assegni commesse, vedi chi ha timbrato dove e ricevi un avviso se un turno resta aperto.",
      },
      {
        title: 'Il tuo personale è protetto',
        desc: 'Un report verificabile dà anche all\'operatore qualcosa in mano contro le accuse infondate. Chi lavora bene lo dimostra.',
      },
    ],
  },

  cosa_cambia: {
    title: 'Cosa cambia davvero.',
    items: [
      {
        title: 'Non devi più fidarti degli operatori.',
        desc: 'Non perché non siano affidabili, ma perché non devi farlo. Il sistema genera la prova al momento dell\'intervento, indipendentemente da quello che ti dicono. Il dato resta quello registrato.',
      },
      {
        title: 'Non devi più difenderti a voce.',
        desc: 'Smetti di spiegare, giustificare, ricordare. Quando un cliente contesta, apri il report e lo mandi. Non è una tua parola contro la sua. È un documento verificabile.',
      },
      {
        title: 'Hai prove verificabili. Sempre.',
        desc: 'Ogni intervento chiuso diventa automaticamente un report: posizioni, foto, orari e sigillo. Non devi fare niente di extra. Il sistema lo fa mentre i tuoi operatori lavorano.',
      },
    ],
  },

  prova_visiva: {
    title: 'Cosa vedi tu, cosa vede il cliente.',
    subtitle: 'L\'app per chi lavora sul campo. Il report per chi deve rispondere.',
  },

  cta_mid: {
    title: 'Vuoi vedere come funziona su un caso reale?',
    body: 'Provalo su una commessa vera, dall\'operatore che apre l\'intervento al report che riceve il cliente: 14 giorni gratis, senza carta di credito.',
    cta: 'Prova gratis per 14 giorni',
  },

  testimonial: {
    quote:
      'Prima avevamo sempre qualche cliente che contestava. Da quando usiamo GeoTapp, mandiamo il report e la conversazione cambia subito: si parla di dati, non di parole. Le discussioni si accorciano parecchio.',
    author: 'Roberta M.',
    role: 'Responsabile operativa, impresa di pulizie industriali - Nord Italia',
  },

  trust: {
    title: 'Se un nostro report viene modificato, si vede. Anche se lo facciamo noi.',
    body:
      "I report GeoTapp sono generati dal sistema nel momento dell'intervento. Una volta sigillato il report, correggere un orario o spostare una foto rompe il sigillo, e la verifica lo segnala. Chi lo riceve, cliente, ispettore o consulente, può controllarlo da solo.",
    badge: 'Verificabile da chiunque, senza accesso al tuo account',
  },

  faq: {
    title: 'Domande frequenti',
    subtitle: 'Quello che ci chiedono più spesso prima di iniziare.',
    items: [
      {
        q: "GeoTapp è solo un'app di timbratura per imprese di pulizie?",
        a: "No. GeoTapp è un sistema di prova verificabile del lavoro, non solo un'app di timbratura. Le app di timbratura registrano un orario. GeoTapp produce un report sigillato con la posizione, prove fotografiche e timestamp, che il committente può verificare autonomamente. La differenza tra \"c'è scritto\" e \"si può dimostrare\".",
      },
      {
        q: 'È compatibile con il CCNL Multiservizi?',
        a: 'GeoTapp registra orari, pause, straordinari e maggiorazioni, inclusi notturni e festivi, e li esporta in Excel o CSV per il consulente del lavoro, che li applica secondo il CCNL Multiservizi. In caso di controllo ispettivo, hai tutta la documentazione pronta.',
      },
      {
        q: 'Come gestisco squadre distribuite su più siti contemporaneamente?',
        a: "Con GeoTapp Flow hai un'unica schermata per tutti i siti. Vedi chi ha timbrato dove appena la timbratura arriva, assegni le commesse e ricevi un avviso se un turno resta aperto. Nessuna telefonata, nessuna email.",
      },
      {
        q: 'Come controllo che gli operatori abbiano eseguito il lavoro?',
        a: 'Ogni intervento viene aperto e chiuso con posizione registrata dallo smartphone dell\'operatore. L\'operatore invia le foto di prova collegate alla commessa, con ora e posizione. Il report viene generato in automatico ed è sigillato alla chiusura: ogni modifica si vede.',
      },
      {
        q: 'GeoTapp è conforme al GDPR per la geolocalizzazione dei dipendenti?',
        a: "GeoTapp è costruito per stare dentro i paletti del GDPR e delle indicazioni del Garante Privacy: registra la posizione solo quando l'operatore timbra (entrata, pause, uscita) o scatta una foto di prova, fa firmare l'informativa nell'app prima di timbrare e non raccoglie dati non necessari.",
      },
      {
        q: 'Funziona anche per il facility management e il multiservizi?',
        a: 'Sì. GeoTapp è usato da imprese di pulizie, multiservizi, facility management e ogni realtà con operatori distribuiti su più siti. Va bene dalla squadra di poche persone all\'azienda con centinaia di operatori, senza configurazioni complesse.',
      },
      {
        q: "Quanto costa GeoTapp per un'impresa di pulizie?",
        a: 'GeoTapp Flow parte da 39 € al mese; le postazioni TimeTracker per gli operatori costano 3 € al mese ciascuna fino a 25, 2,50 € dalla ventiseiesima. Abbonamento minimo 12 mesi. Prima puoi provarlo gratis per 14 giorni, senza carta.',
      },
    ],
  },

  cta: {
    title: "I tuoi operatori lavorano bene. Fai in modo che si veda.",
    subtitle:
      'Ogni giorno il lavoro viene fatto. Il problema è che, senza prove verificabili, quando qualcuno contesta resta la tua parola contro la sua. GeoTapp trasforma ogni intervento in documentazione da mostrare.',
    primary: 'Prova gratis per 14 giorni',
    secondary: 'Vedi i Prezzi',
  },

  pricing_hint: {
    label: 'Postazioni TimeTracker da',
    per: 'operatore al mese, più il piano Flow da 39 €/mese',
    note: 'Prova gratuita 14 giorni',
  },

  schema_sector_name: 'Imprese di Pulizie',

  schema_faq: [
    {
      question: "GeoTapp è solo un'app di timbratura per imprese di pulizie?",
      answer: 'No. GeoTapp è l\'app e software per imprese di pulizie e multiservizi che va oltre la timbratura: produce report sigillati con posizioni, foto e orari, che il committente verifica da solo: non un semplice registro orari.',
    },
    {
      question: 'È compatibile con il CCNL Multiservizi?',
      answer: 'GeoTapp registra orari, pause, straordinari e maggiorazioni e li esporta in Excel o CSV per il consulente del lavoro, che li applica secondo il CCNL Multiservizi.',
    },
    {
      question: 'Come gestisco più siti contemporaneamente?',
      answer: 'Una schermata unica per tutti i siti. Vedi chi ha timbrato dove appena la timbratura arriva, assegni le commesse e ricevi un avviso se un turno resta aperto, senza telefonate.',
    },
    {
      question: 'Come documento che il lavoro è stato eseguito?',
      answer: 'Ogni intervento viene aperto e chiuso con posizione registrata. L\'operatore invia le foto di prova collegate alla commessa. Il report viene generato automaticamente ed è sigillato alla chiusura: ogni modifica si vede.',
    },
    {
      question: 'GeoTapp è conforme al GDPR per la geolocalizzazione dei dipendenti?',
      answer: "Costruito per stare dentro i paletti del GDPR: registra la posizione solo quando l'operatore timbra o scatta una foto di prova, mai in continuo, e fa firmare l'informativa nell'app prima di timbrare.",
    },
    {
      question: 'Funziona anche per il facility management e il multiservizi?',
      answer: 'Sì. GeoTapp va bene per imprese di pulizie, multiservizi e facility management, dalla squadra di poche persone all\'azienda con centinaia di operatori.',
    },
    {
      question: 'Quanto costa?',
      answer: 'GeoTapp Flow da 39 € al mese, più le postazioni TimeTracker da 3 € per operatore al mese. Abbonamento minimo 12 mesi. Prima puoi provarlo gratis per 14 giorni, senza carta.',
    },
  ],
};

export default content;
