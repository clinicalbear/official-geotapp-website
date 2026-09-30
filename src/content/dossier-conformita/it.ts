import type { DossierCopy } from './types';

const it: DossierCopy = {
  metaTitle: 'Dossier di conformità GeoTapp: prova del lavoro, non sorveglianza',
  metaDesc:
    'Cosa fa e cosa non fa GeoTapp, con le fonti normative in chiaro e i limiti dichiarati senza giri di parole. GDPR, art. 4 dello Statuto, integrità della prova.',
  badge: 'Dossier di conformità',
  h1: 'Prova del lavoro, non sorveglianza',
  subtitle:
    'Cosa fa GeoTapp e, soprattutto, cosa non fa. Con le fonti normative in chiaro e i limiti dichiarati senza giri di parole. Un documento da leggere, verificare e citare.',
  sections: [
    {
      heading: 'Perché esiste questo documento',
      paragraphs: [
        'A Bruxelles si stanno scrivendo adesso le regole su come si possono monitorare i lavoratori, fra direttiva sul lavoro tramite piattaforme, gestione algoritmica e l’AI Act applicato al lavoro. Nel frattempo chi manda squadre sul campo deve già rilevare le ore, dimostrarle quando qualcuno le contesta, e farlo senza calpestare la riservatezza delle persone. È un equilibrio difficile, e su questo equilibrio si gioca buona parte della fiducia fra chi organizza il lavoro e chi lo svolge.',
        'GeoTapp nasce dentro questo problema, non accanto. Per questo, invece di promettere, mette per iscritto cosa fa e cosa non fa, con le fonti normative in chiaro e i limiti dichiarati senza giri di parole. Quello che segue si può leggere, verificare e citare. Chi trova un punto debole è invitato a segnalarlo: un dossier di conformità vale per ciò che regge, non per come suona.',
      ],
    },
    {
      heading: 'Cosa fa, e soprattutto cosa non fa',
      paragraphs: [
        'Il principio è uno solo: registrare il fatto, non seguire la persona.',
        'GeoTapp rileva la posizione solo quando il lavoratore timbra (entrata, inizio e fine pausa, uscita) o scatta una foto di prova, e non durante la giornata. Fra una timbratura e l’altra non si registra nulla in automatico: nessuna scia di spostamenti, nessuna posizione raccolta a insaputa, nessun pedinamento digitale. L’app non chiede nemmeno il permesso di leggere la posizione in background, quindi non potrebbe farlo neanche volendo. Nella versione attuale dell’app la foto di prova si scatta solo dalla fotocamera dal vivo: non si può caricare un’immagine dalla galleria. I dati raccolti sono ridotti al minimo necessario per scelta di progetto, non come ripensamento successivo.',
        'Quello che GeoTapp non fa è altrettanto importante. Non insegue il dipendente fuori dall’orario, non profila comportamenti, non misura l’attività sindacale, non legge stati emotivi, non costruisce punteggi sulle persone. È il perimetro che le proposte europee sul lavoro tramite piattaforme e sulla gestione algoritmica indicano come da vietare, e GeoTapp è progettato per restarne fuori.',
      ],
    },
    {
      heading: 'I principi del GDPR, applicati e non recitati',
      paragraphs: [
        'Minimizzazione dei dati (art. 5.1.c GDPR): la posizione si raccoglie solo al timbro, non in continuo.',
        'Limitazione della finalità (art. 5.1.b): lo scopo è la prova del lavoro svolto, non il controllo a distanza della persona.',
        'Base giuridica (art. 6): esecuzione del rapporto di lavoro e legittimo interesse documentato, accompagnati dall’informativa.',
        'Trasparenza (artt. 12-14): il lavoratore riceve un’informativa chiara. GeoTapp mette a disposizione un fac-simile di informativa GPS, gratuito e scaricabile.',
        'Protezione fin dalla progettazione (art. 25): la raccolta minima è il comportamento predefinito dello strumento, non un’opzione da attivare.',
      ],
    },
    {
      heading: 'L’allineamento con l’art. 4 dello Statuto dei Lavoratori',
      paragraphs: [
        'In Italia il controllo a distanza è disciplinato dall’art. 4 della Legge 300/1970: gli strumenti da cui può derivare anche un controllo dell’attività sono ammessi per esigenze organizzative, produttive, di sicurezza o di tutela del patrimonio, previo accordo sindacale o autorizzazione dell’Ispettorato, e sempre con adeguata informativa al lavoratore. La norma esenta inoltre gli strumenti di registrazione degli accessi e delle presenze.',
        'GeoTapp si colloca dentro questa cornice come strumento che agevola la conformità, non come scorciatoia che la aggira. Il titolare del trattamento resta l’azienda, con i suoi obblighi: GeoTapp fornisce uno strumento progettato per stare nelle regole, e le risorse per applicarle. Per gli altri Paesi europei la mappa GPS lavoratori UE raccoglie trentanove schede nazionali verificate a mano, con obblighi, autorità competente e sanzioni di ciascun Paese.',
      ],
    },
    {
      heading: 'L’integrità della prova',
      paragraphs: [
        'Quando GeoTapp dice "prova del lavoro", intende qualcosa da mostrare quando qualcuno contesta, e per servire deve essere difficile da falsificare, e ogni ritocco successivo deve risultare evidente. La difesa è a strati.',
        'La cattura della foto è bloccata sulla fotocamera dal vivo: il valore che identifica questa modalità è fissato nei client e, soprattutto, è verificato dalle regole del database al momento della scrittura, che rifiutano un timbro con una modalità diversa. A ogni foto il client calcola un’impronta crittografica SHA-256, condizione necessaria per procedere.',
        'Una volta create, le sessioni di lavoro sono protette: l’orario di inizio, la posizione registrata al timbro e l’identità dell’utente non sono modificabili dal dipendente, e la cancellazione è riservata agli amministratori. Le sessioni con posizione nascono solo attraverso una funzione lato server con privilegi amministrativi, non per scrittura diretta dall’app, così l’operatore non può retrodatare un timbro, spostarne la posizione o farlo sparire.',
        'Il rilevamento del GPS falso agisce prima ancora che il timbro parta. Sui dispositivi Android il controllo è a più livelli, con una lista di applicazioni di spoofing note e la verifica dei permessi di posizione fittizia: se scatta, la timbratura viene rifiutata, non solo segnalata. I segni di root vengono rilevati e l’azienda può scegliere di bloccare la timbratura su quei telefoni. Vengono rifiutate anche le posizioni troppo imprecise. Su iOS si usa il segnale nativo del sistema operativo che indica una posizione simulata via software. Viene inoltre intercettato il "teletrasporto", cioè uno spostamento a una velocità fisicamente impossibile fra due timbri.',
        'Ogni timbratura lascia infine una traccia in un registro di controllo lato server, con l’orario generato dal server e non dal dispositivo, e nessuna app, nemmeno quella di un amministratore, può scrivere in quel registro.',
      ],
    },
    {
      heading: 'I limiti, detti chiaramente',
      paragraphs: [
        'Questa è la sezione che molti ometterebbero, ed è proprio quella che rende credibile tutto il resto. GeoTapp rende lo spoofing difficile e attesta il contesto del timbro, ma non promette l’impossibile, e dichiararlo è una forma di rispetto verso chi legge.',
        'Il server non ri-verifica crittograficamente le coordinate: controlla che siano plausibili e dentro l’eventuale geofence, ma si fida della posizione che il dispositivo riferisce. L’attestazione del dispositivo attesta che l’app provenga dai canali ufficiali, non mette al riparo da un client modificato e analizzato da chi ne ha le competenze. La modalità "solo fotocamera dal vivo" è una dichiarazione onesta del dispositivo, non una prova crittografica che il server possa rifare sull’immagine. I controlli sono più completi sullo smartphone che sull’orologio. E, soprattutto, lo strumento non solleva l’azienda dal suo ruolo di titolare del trattamento: resta suo il dovere dell’informativa, dell’accordo dove serve, della proporzionalità.',
        'Detto altrimenti: GeoTapp alza l’asticella e documenta il fatto, non vende l’invulnerabilità. Chi promette l’invulnerabilità, di solito, non l’ha mai dovuta dimostrare in tribunale.',
      ],
    },
    {
      heading: 'Le risorse pubbliche a supporto',
      paragraphs: [
        'Tutto ciò che serve per applicare questi principi è pubblico e gratuito: la mappa GPS lavoratori UE con le schede dei trentanove Paesi, il fac-simile di informativa GPS, il calcolatore delle sanzioni, l’indice della sorveglianza. Verificati alla fonte, liberi da usare e citare indicando la provenienza. Sono lì perché mettere a norma il lavoro non dovrebbe essere un privilegio di chi può pagarsi un ufficio legale.',
      ],
    },
    {
      heading: 'Attestazione',
      paragraphs: [
        'Le affermazioni tecniche di questo documento sono rese e sottoscritte da Michele Angelo Petraroli, fondatore di GeoTapp, che se ne assume la responsabilità e si rende disponibile a verifica e contraddittorio. L’endorsement di un avvocato giuslavorista e di un DPO sarà aggiunto nella versione successiva del documento.',
      ],
    },
  ],
  sourcesTitle: 'Fonti e riferimenti',
  sources: [
    'Regolamento (UE) 2016/679 (GDPR), in particolare artt. 5, 6, 12-14, 25.',
    'Legge 20 maggio 1970, n. 300 (Statuto dei Lavoratori), art. 4.',
    'Provvedimenti del Garante per la protezione dei dati personali in materia di controllo a distanza.',
    'Testi UE in discussione: direttiva sul lavoro mediante piattaforme digitali; disposizioni sulla gestione algoritmica; Regolamento sull’intelligenza artificiale applicato al lavoro.',
  ],
  lastUpdated: 'Versione 1.1 · aggiornato il 30 settembre 2026',
  faq: {
    title: 'Domande frequenti',
    items: [
      { q: 'Cos’è il dossier di conformità?', a: 'È il documento che spiega, fonti alla mano, perché GeoTapp è uno strumento di prova del lavoro e non di sorveglianza, e come questo si regge sul GDPR e sulle regole del lavoro. Serve a chi vuole capire davvero come tratta i dati, non a chi si accontenta di uno slogan.' },
      { q: 'GeoTapp è un sistema di sorveglianza?', a: 'No, ed è stato sviluppato apposta per non esserlo. Lo strumento registra la posizione solo quando l’operatore timbra (entrata, pause, uscita) o scatta una foto di prova, mai in continuo, e prepara l’informativa che il lavoratore firma nell’app prima di timbrare. Prova cosa è stato fatto e dove, non guarda le persone.' },
      { q: 'A cosa mi serve questo dossier?', a: 'A rispondere quando un dipendente, un cliente o un consulente ti chiede se quello che usi è a norma. Invece di improvvisare hai un testo che mette in fila il ragionamento e le fonti, e che puoi girare così com’è.' },
      { q: 'Le fonti sono verificate?', a: 'Sì, il dossier rimanda a norme e provvedimenti reali, elencati in fondo con la data di aggiornamento. Resta comunque una risorsa informativa e non una consulenza legale: per la tua situazione specifica fai verificare tutto da un professionista.' },
      { q: 'Posso mostrarlo a un cliente o in una causa?', a: 'Puoi usarlo per spiegare l’impostazione di GeoTapp e mostrare che la conformità non è un’affermazione buttata lì. In un contenzioso però quello che conta sono i tuoi dati reali e la tua informativa: il dossier è il contesto, la prova è la sessione di lavoro registrata.' },
      { q: 'Vale solo per l’Italia?', a: 'Il ragionamento di fondo regge in tutta l’Unione, perché parte dal GDPR, ma i dettagli sul controllo dei lavoratori cambiano da Paese a Paese. Per la situazione di un singolo Stato parti dalla sua scheda, qui tra le risorse.' },
    ],
  },
};

export default it;
