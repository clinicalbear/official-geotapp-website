import type { PresenzeCopy } from './types';

const it: PresenzeCopy = {
  metaTitle: 'Si può usare il GPS per le presenze senza tracciare i dipendenti? - GeoTapp',
  metaDesc:
    'Sì, se la posizione si registra solo alla timbratura. Cosa dice il Tribunale di Cosenza, cosa sanziona il Garante Privacy, e cosa registra davvero un sistema di presenze GPS a norma.',
  h1: 'Si può usare il GPS per le presenze senza tracciare i dipendenti?',
  lede:
    'Sì. Un sistema che rileva la posizione solo nel momento in cui il lavoratore timbra l\'entrata, la pausa o l\'uscita non sorveglia la persona: documenta un fatto. Lo ha stabilito il Tribunale di Cosenza nel 2026, e lo confermano i provvedimenti del Garante Privacy che puniscono invece il tracciamento continuo.',
  updatedLabel: 'Aggiornato il 25 settembre 2026',
  sections: [
    {
      heading: 'Quando il GPS è ammesso per le presenze?',
      paragraphs: [
        'L\'articolo 4 dello Statuto dei Lavoratori (legge 20 maggio 1970, n. 300) distingue due categorie di strumenti. Al comma 1 mette i sistemi da cui può derivare un controllo a distanza dell\'attività: per questi serve l\'accordo sindacale con RSA o RSU, oppure l\'autorizzazione dell\'Ispettorato del Lavoro, prima di accenderli. Al comma 2 mette invece gli strumenti di registrazione degli accessi e delle presenze, che non hanno bisogno di quella procedura.',
        'Il Tribunale di Cosenza, con la sentenza n. 972 del 1° luglio 2026, ha stabilito dove passa il confine tra le due categorie quando lo strumento è un\'app di timbratura con GPS. Ha annullato una sanzione da 50.000 euro che il Garante aveva inflitto a un ente pubblico, perché il sistema acquisiva la posizione esclusivamente nel momento della timbratura, senza consentire un monitoraggio continuo degli spostamenti: per il giudice questo lo rende uno strumento di registrazione degli accessi e delle presenze ai sensi del comma 2, non uno strumento di controllo a distanza.',
        'Il principio pratico: un punto GPS preso all\'inizio e alla fine del turno fotografa un momento. Una scia di punti presa ogni minuto segue una persona. È la stessa tecnologia satellitare, ma sono due strumenti diversi davanti alla legge.',
      ],
    },
    {
      heading: 'Cosa registra GeoTapp, e cosa no',
      paragraphs: [
        'GeoTapp rileva la posizione solo quando è il lavoratore a compiere un gesto preciso: entrata, inizio e fine di ogni pausa, uscita, più un punto per ogni foto di prova del lavoro scattata dal vivo. Fra un timbro e l\'altro non viene registrato nulla in automatico: nessuna scia di spostamenti, nessun tracciamento in sottofondo, nessuna posizione raccolta a insaputa del lavoratore.',
      ],
    },
    {
      heading: 'Come lo verifica un consulente del lavoro o un sindacalista senza chiederci niente',
      paragraphs: [
        'Non serve fidarsi della nostra parola: si può controllare da soli. Sull\'app Android il manifest dichiara solo i permessi ACCESS_FINE_LOCATION e ACCESS_COARSE_LOCATION. Manca ACCESS_BACKGROUND_LOCATION, il permesso che servirebbe per seguire un dipendente ad app chiusa, e non c\'è nessun servizio in primo piano dedicato alla posizione: senza quel permesso, il sistema operativo non consegna la posizione a un\'app che non è aperta sullo schermo. Sull\'app iOS viene chiesta solo l\'autorizzazione "quando in uso" (requestWhenInUseAuthorization), mai quella per il tracciamento in background.',
        'È una verifica che un rappresentante dei lavoratori per la sicurezza, un consulente del lavoro o un DPO possono fare da soli in pochi minuti, leggendo il manifest dell\'app o l\'etichetta sulla privacy pubblicata dallo store, prima ancora di leggere l\'informativa che l\'azienda gli sottopone.',
      ],
    },
    {
      heading: 'Per quanto tempo restano le posizioni raccolte?',
      paragraphs: [
        'Nel registro delle timbrature le coordinate si cancellano dopo dodici mesi; l\'azienda può stringere il periodo fino a trenta giorni. Nei rapportini già consegnati al cliente, invece, le posizioni restano: sono documenti sigillati che servono come prova del lavoro svolto, e seguono il termine di conservazione previsto per quel tipo di documentazione, non quello del registro.',
        'Sono due regole diverse per due oggetti diversi. Il registro operativo si alleggerisce con il tempo; il documento già consegnato a qualcun altro segue le sue regole, come qualunque documento una volta uscito dai nostri sistemi.',
      ],
    },
    {
      heading: 'E fuori dall\'Italia?',
      paragraphs: [
        'Il GDPR (in particolare gli articoli 5, 6, 12-14 e 25 del Regolamento UE 2016/679) vale in tutta l\'Unione Europea e impone lo stesso principio ovunque: minimizzazione dei dati, finalità dichiarata, informativa chiara al lavoratore. Quello che cambia da Paese a Paese è la procedura sul controllo a distanza: l\'equivalente locale dell\'articolo 4 italiano, il ruolo del comitato aziendale o del sindacato, l\'autorità di controllo competente. Per la situazione del singolo Paese, la mappa GPS lavoratori UE raccoglie le schede nazionali verificate una per una.',
      ],
    },
  ],
  table: {
    title: 'Cosa registra e cosa non registra',
    colLeft: 'Registra',
    colRight: 'Non registra',
    left: [
      'Posizione all\'entrata e all\'uscita del turno',
      'Posizione all\'inizio e alla fine di ogni pausa',
      'Un punto GPS per ogni foto di prova del lavoro, scattata dal vivo',
      'Orario generato dal server, non dal dispositivo del lavoratore',
    ],
    right: [
      'Nessuno spostamento durante il turno, fra un timbro e l\'altro',
      'Nessuna posizione quando il dipendente è fuori orario o l\'app è chiusa',
      'Nessun punteggio o profilazione sui comportamenti',
      'Nessuna posizione da foto caricate da una galleria: solo fotocamera dal vivo',
    ],
  },
  sourcesTitle: 'Fonti e riferimenti',
  sources: [
    'Tribunale di Cosenza, sentenza n. 972 del 1° luglio 2026',
    'Garante per la protezione dei dati personali, provvedimento n. 382 del 28 maggio 2026 (doc-web 10259916)',
    'Garante per la protezione dei dati personali, provvedimento n. 135 del 13 marzo 2025 (doc-web 10128005), annullato dalla sentenza sopra',
    'Legge 20 maggio 1970, n. 300 (Statuto dei Lavoratori), art. 4',
    'Regolamento (UE) 2016/679 (GDPR), artt. 5, 6, 12-14, 25',
  ],
  disclaimer:
    'Questa pagina descrive principi generali, verificabili alla fonte, e non costituisce consulenza legale: per la tua situazione specifica verifica con un consulente del lavoro o un DPO.',
  faq: {
    title: 'Domande frequenti',
    items: [
      {
        q: 'Il GPS sui dipendenti è vietato dal GDPR?',
        a: 'No. Il Garante Privacy non ha mai vietato il GPS sui lavoratori. Sanziona il tracciamento continuo, la mancanza di informativa, la raccolta di dati non pertinenti al lavoro: non la rilevazione puntuale della posizione al momento della timbratura.',
      },
      {
        q: 'Serve sempre l\'accordo sindacale per usare il GPS nelle presenze?',
        a: 'Serve dove il sistema può comportare un controllo a distanza dell\'attività lavorativa. Il Tribunale di Cosenza ha però stabilito che un sistema che rileva la posizione solo alla timbratura, senza monitoraggio continuo, rientra fra gli strumenti di registrazione delle presenze del comma 2 dell\'art. 4, che non richiede quella procedura.',
      },
      {
        q: 'Cosa succede se il sistema traccia anche durante le pause?',
        a: 'È uno degli errori che ha portato a sanzioni reali: il Garante ha multato un\'azienda di autotrasporti per 50.000 euro anche perché il tracciamento continuava durante le pause. Il principio di minimizzazione dei dati (art. 5 GDPR) chiede di fermarsi quando il turno si ferma.',
      },
      {
        q: 'GeoTapp può tracciare un dipendente in continuo, se glielo chiedo?',
        a: 'No. L\'app non chiede il permesso di posizione in background e non ha un servizio che la segue ad app chiusa: non è un\'opzione disattivata, è un permesso che il codice non chiede. Si verifica leggendo il manifest dell\'app o l\'etichetta privacy dello store.',
      },
      {
        q: 'Le posizioni raccolte restano per sempre?',
        a: 'No. Nel registro delle timbrature si cancellano dopo dodici mesi, e l\'azienda può stringere il periodo fino a trenta giorni. Restano invece nei rapportini già consegnati al cliente, perché sono documenti sigillati che valgono come prova del lavoro svolto.',
      },
    ],
  },
  relatedTitle: 'Risorse collegate',
};

export default it;
