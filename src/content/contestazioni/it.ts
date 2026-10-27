import type { ContestazioniCopy } from './types';

/**
 * Pagina "Quando qualcuno contesta il lavoro" (27/10/2026), scritta nativamente in italiano.
 * Ogni affermazione sul prodotto viene dalla scheda claim (docs/stampa/scheda-claim.md) o dalle
 * stringhe gia' pubblicate in dict.features. Cosa NON si scrive qui, mai: "zero contestazioni",
 * "prova legale/incontestabile", "certifica", "a norma", "garantisce", posizioni "cifrate",
 * "mappa live"/"tempo reale", foto "solo dal vivo" (finche' la versione nuova non e' sugli store),
 * "fra una timbratura e l'altra non si registra niente" senza "in automatico", numeri senza fonte.
 * "Su Android e su iPhone l'app non chiede il permesso di posizione in background" e' verificato
 * sul codice (manifest Android di telefono e Wear OS, Info.plist iOS); l'Apple Watch NON e' stato
 * controllato, quindi non si dice "l'app" in generale.
 */
const it: ContestazioniCopy = {
  metaTitle: 'Contestazioni sul lavoro: cosa cambia con GeoTapp | GeoTapp',
  metaDesc:
    'Quando un cliente o un dipendente contesta il lavoro, cosa hai in mano? La stessa discussione vista da tre parti: azienda, chi lavora e committente, con un report vero da verificare.',
  kicker: 'Contestazioni sul lavoro',
  h1: 'Quando qualcuno contesta il lavoro: cosa cambia con GeoTapp',
  lede:
    "Una contestazione non si può evitare. Cambia quello che hai in mano quando arriva: un ricordo contro un ricordo, oppure un documento. Qui vedi la stessa discussione da tre parti: l'azienda, chi lavora e chi ha commissionato il lavoro.",
  updatedLabel: 'Aggiornato il 27 ottobre 2026',
  scenes: [
    {
      kicker: "L'azienda",
      heading: "Se sei l'azienda",
      scene: "«Il cliente dice che non siete venuti. Oppure che ci siete stati un'ora, non tre.»",
      haveTitle: 'Cosa hai in mano',
      have: [
        "L'orario di entrata, delle pause e di uscita di ogni intervento.",
        'La posizione registrata alla timbratura. Alla timbratura l\'app rifiuta le posizioni simulate da app di finta posizione, quelle troppo imprecise e gli spostamenti impossibili.',
        "Le foto di prova dell'intervento. Sulle foto non si rifiuta niente: si segnala, confrontando ora e posizione dello scatto con quelle della timbratura.",
        'Un report che a fine intervento si compone con timbrature, foto e note e viene sigillato: ogni modifica successiva è rilevabile.',
      ],
      changeTitle: 'Cosa cambia',
      change: [
        'Invece di ricostruire a memoria fra WhatsApp, email e fogli di carta, mandi un documento.',
        'Se manca la rete, la timbratura resta salvata sul telefono e parte da sola quando torna il segnale, con l\'ora in cui è stata fatta.',
        'Le ore documentate sono ore che puoi mostrare quando le fatturi.',
      ],
    },
    {
      kicker: 'Chi lavora',
      heading: 'Se sei tu che lavori',
      scene: '«Ho fatto più ore di quelle che mi hanno pagato.»',
      haveTitle: 'Cosa hai',
      have: [
        "Le tue sessioni di lavoro, con orario di inizio, pause e fine, che puoi rivedere nell'app per periodo, con il totale delle ore.",
        "La posizione si registra solo quando timbri o scatti una foto di prova: entrata, inizio e fine pausa, uscita.",
        "Fra una timbratura e l'altra non viene registrata nessuna posizione in automatico e in modo continuativo. Su Android e su iPhone l'app non chiede nemmeno il permesso di posizione in background.",
      ],
      changeTitle: 'Cosa cambia',
      change: [
        "Se c'è una discussione sulle ore, c'è un orario registrato da un tuo gesto, che non dipende dalla memoria di nessuno.",
        "L'ufficio vede le timbrature quando arrivano: la schermata si chiama Timbrature odierne e mostra quelle fatte, non dove si trova qualcuno adesso.",
      ],
      extra: {
        title: 'Cosa resta delle posizioni, e per quanto',
        paragraphs: [
          "Nel registro le posizioni si cancellano dopo dodici mesi, con un periodo che l'azienda può accorciare fino a trenta giorni.",
          'Nei report già consegnati restano, perché sono documenti sigillati, e seguono il termine di conservazione di legge: dopo cinque anni il pacchetto si cancella. Un report consegnato è una fotografia: non si aggiorna e non si tocca senza rompere il sigillo che lo rende verificabile.',
        ],
      },
    },
    {
      kicker: 'Il committente',
      heading: 'Se sei il committente',
      scene: '«Mi dicono che il lavoro è stato fatto. Come faccio a saperlo senza fidarmi di loro?»',
      haveTitle: 'Cosa fai',
      have: [
        "Ricevi un link al report e lo controlli da solo, online oppure con il verificatore offline: un file unico che non si collega a internet e porta dentro la chiave pubblica.",
        "Il controllo ricalcola le impronte di ogni evento e di ogni foto e verifica la firma. La pagina di verifica mostra due cose separate: se il documento è integro e la firma.",
        "Funziona anche fra anni, anche senza GeoTapp: chi ha il pacchetto e il verificatore può rifare il controllo.",
      ],
      changeTitle: 'Cosa dimostra e cosa no',
      change: [
        "Il sistema può aiutare a rilevare modifiche al pacchetto consegnato e a verificarne coerenza e integrità tecnica; non costituisce, da solo, prova assoluta del fatto materiale né consulenza legale.",
        "«Documento integro» vuol dire non manomesso. È la firma, che non si rifà senza la chiave, a dire che il pacchetto l'abbiamo emesso noi.",
      ],
    },
  ],
  sample: {
    heading: 'Provalo con un report vero',
    paragraphs: [
      "Qui sotto c'è un report di esempio, una sostituzione di quadro elettrico. Scaricalo e controllalo nel tuo browser: la verifica gira da te e il file non viene inviato a noi.",
    ],
  },
  limits: {
    heading: 'Cosa GeoTapp non fa',
    items: [
      'Non traccia in continuo, nemmeno volendo: su Android e su iPhone l\'app non chiede il permesso di posizione in background.',
      'Non dimostra, da solo, che il fatto sia accaduto: dice se il pacchetto è stato alterato dopo la consegna.',
      'Non promette che le contestazioni spariscano: cambia con cosa ti presenti quando arrivano.',
      "Non sostituisce il consulente del lavoro, il DPO, l'accordo sindacale o l'autorizzazione dell'Ispettorato.",
    ],
    formula:
      'In sintesi: il sistema può aiutare a rilevare modifiche al pacchetto consegnato e a verificarne coerenza e integrità tecnica; non costituisce, da solo, prova assoluta del fatto materiale né consulenza legale.',
  },
  faq: {
    title: 'Domande frequenti',
    items: [
      {
        q: 'Un report GeoTapp basta a vincere una contestazione?',
        a: "Non da solo. Il report mostra cosa è stato registrato e permette a chiunque di controllare che non sia stato alterato dopo la consegna; non dimostra, da solo, che il fatto sia accaduto, e non è consulenza legale. È un documento ordinato e verificabile al posto di un ricordo contro un ricordo.",
      },
      {
        q: 'GeoTapp traccia i dipendenti durante la giornata?',
        a: "No. La posizione si registra solo quando chi lavora compie un gesto: entrata, inizio e fine pausa, uscita, foto di prova. Fra una timbratura e l'altra non viene registrata nessuna posizione in automatico e in modo continuativo. Su Android e su iPhone l'app non chiede nemmeno il permesso di posizione in background.",
      },
      {
        q: 'Il committente deve fidarsi di GeoTapp per controllare il report?',
        a: "No. Il verificatore offline è un file unico che non si collega a internet e porta dentro la chiave pubblica: ricalcola le impronte e controlla la firma anche fra anni, anche senza GeoTapp. Quello che il controllo dice è se il pacchetto è stato alterato, non se il fatto è accaduto.",
      },
      {
        q: 'Cosa succede alle posizioni dopo la consegna?',
        a: "Nel registro si cancellano dopo dodici mesi, con un periodo che l'azienda può accorciare fino a trenta giorni. Nei report già consegnati restano, perché sono documenti sigillati, e seguono il termine di conservazione di legge: dopo cinque anni il pacchetto si cancella.",
      },
      {
        q: 'Dove sono i dati?',
        a: 'I dati di lavoro e le foto sono archiviati nell\'Unione europea.',
      },
      {
        q: 'GeoTapp sostituisce il consulente del lavoro o l\'accordo sindacale?',
        a: "No. Aiuta a stare dentro i paletti dell'articolo 4 dello Statuto dei lavoratori e del GDPR, ma non sostituisce l'accordo sindacale o l'autorizzazione dell'Ispettorato, né un consulente.",
      },
    ],
  },
  next: {
    heading: 'Per andare avanti',
    paragraph: 'Se vuoi vedere funzione per funzione cosa c\'è dentro, o i prezzi, da qui.',
    featuresLabel: 'Cosa fa GeoTapp, funzione per funzione →',
    pricingLabel: 'Vedi i prezzi →',
  },
  disclaimer:
    'Questa pagina descrive cosa fa GeoTapp e non è consulenza legale. Per la tua situazione specifica rivolgiti a un consulente del lavoro o a un DPO.',
};

export default it;
