import type { VerifierCopy } from './types';

const it: VerifierCopy = {
  hero_badge: 'GeoTapp Verifier - Verifica Report di Lavoro',
  hero_title: 'I tuoi report di lavoro\nsono verificabili.',
  hero_subtitle:
    'GeoTapp Verifier controlla che un report di GeoTapp non sia stato modificato dopo il sigillo, e che a emetterlo sia stato davvero GeoTapp. È gratuito, per te e per i tuoi clienti, e funziona anche offline.',
  hero_cta_primary: 'Prova GeoTapp gratis',
  hero_cta_secondary: 'Scopri come funziona',
  terminal_integrity: 'Catena degli eventi: INTEGRA',
  terminal_timestamps: 'Ora del sigillo: DAL SERVER',
  terminal_gps: 'Impronte delle foto: CORRISPONDENTI',
  terminal_not_modified: 'Documento non modificato: CONFERMATO',
  terminal_operator: 'Firma di GeoTapp: VALIDA',
  terminal_summary_title: 'Riepilogo Verifica',
  terminal_technician_label: 'Tecnico:',
  terminal_date_label: 'Data intervento:',
  terminal_site_label: 'Sede:',
  terminal_verified_line: 'DOCUMENTO INTEGRO E FIRMATO',
  ecosystem_timetracker_desc:
    'Raccoglie i dati sul campo: timbrature con posizione e ora, foto di prova e note.',
  ecosystem_timetracker_link: 'Scopri TimeTracker',
  ecosystem_flow_desc:
    'Organizza commesse, squadre e genera i report strutturati e sigillati, pronti per la verifica.',
  ecosystem_flow_link: 'Scopri Flow',
  ecosystem_verifier_desc:
    "Verifica l'integrità di ogni report: ricalcola le impronte e controlla la firma di GeoTapp.",
  problem_badge: 'Il problema reale',
  problem_title: 'Un report non verificabile è un report contestabile.',
  problem_items: [
    {
      title: 'Clienti che mettono in dubbio il lavoro svolto',
      desc: 'Senza prove indipendenti, qualsiasi report può essere messo in discussione. Il cliente non sa se quello che è scritto corrisponde a quello che è stato fatto davvero.',
    },
    {
      title: 'Orari e presenze difficili da difendere',
      desc: 'Fogli firma e timbrature manuali non bastano. Quando nasce una disputa sulle ore o sulla presenza in cantiere, il documento da solo non convince.',
    },
    {
      title: 'Report modificati o incompleti',
      desc: 'Un documento che si può modificare dopo i fatti senza lasciare traccia non si può verificare. Il cliente lo sa, e questo alimenta sfiducia anche quando il lavoro è stato eseguito perfettamente.',
    },
  ],
  what_badge: "Cos'è GeoTapp Verifier",
  what_title: 'Verifica indipendente dei report di intervento.',
  what_desc:
    "GeoTapp Verifier permette a chiunque di controllare un report generato da GeoTapp Flow e TimeTracker: ricalcola le impronte di timbrature, posizioni e foto contenute nel pacchetto, e verifica la firma di GeoTapp. Dice se il documento è integro e da dove viene; da solo non prova che il fatto sia avvenuto, né è consulenza legale.",
  how_badge: 'Come funziona',
  how_title: 'Tre passi. Un report verificato.',
  how_steps: [
    {
      num: '01',
      title: "Il tecnico registra l'attività sul campo",
      desc: 'Con GeoTapp TimeTracker ogni intervento genera dati: timbrature con posizione e ora, foto di prova e note. I dati arrivano in GeoTapp Flow appena il telefono ha rete.',
    },
    {
      num: '02',
      title: 'Flow genera il report strutturato',
      desc: 'GeoTapp Flow raccoglie i dati della commessa e produce il report. Il report viene sigillato: da quel momento qualsiasi modifica è rilevabile.',
    },
    {
      num: '03',
      title: "Verifier controlla l'integrità",
      desc: 'Chiunque può verificare il report con GeoTapp Verifier: ricalcola le impronte, controlla la firma e dice se il report è integro e se viene da GeoTapp.',
    },
  ],
  features_badge: 'Cosa verifica',
  features_title: 'Ogni aspetto del report è controllabile.',
  features: [
    {
      title: 'Catena degli eventi',
      desc: "Ogni timbratura è legata alla precedente con un'impronta SHA-256: se un evento viene tolto, aggiunto o cambiato, la catena si rompe.",
    },
    {
      title: 'Foto di prova',
      desc: "L'impronta di ogni foto è nel pacchetto: basta cambiare un pixel perché non corrisponda più.",
    },
    {
      title: 'Integrità del documento',
      desc: 'Verifica che il documento non sia stato modificato dopo la sua generazione. Qualsiasi alterazione viene rilevata.',
    },
    {
      title: 'Firma di GeoTapp',
      desc: 'La radice del pacchetto è firmata con la chiave di GeoTapp: la verifica dice se a emetterlo siamo stati noi.',
    },
    {
      title: 'Ora del sigillo',
      desc: "L'ora del sigillo viene dall'orologio del server, non da quello del telefono.",
    },
    {
      title: 'Verificabile senza accesso alla piattaforma',
      desc: 'Il cliente può verificare il report in modo indipendente, senza bisogno di accedere alla piattaforma GeoTapp, anche offline.',
    },
  ],
  who_badge: 'A chi serve',
  who_title: 'Per aziende che devono dimostrare il lavoro svolto.',
  who_items: [
    'Imprese di manutenzione e assistenza tecnica',
    'Aziende di pulizie e facility management',
    'Servizi di vigilanza e sicurezza',
    'Installatori e squadre di intervento',
    'Qualsiasi azienda che deve dimostrare presenza e attività sul campo',
  ],
  ecosystem_badge: 'Ecosistema GeoTapp',
  ecosystem_title: 'Verifier funziona con Flow e TimeTracker.',
  ecosystem_desc:
    "GeoTapp Verifier non è uno strumento isolato. È la parte finale di un ciclo operativo integrato: i dati vengono raccolti sul campo con TimeTracker, organizzati in Flow, e poi verificati da Verifier.",
  cta_title: 'Inizia a produrre report verificabili.',
  cta_subtitle:
    'Con report che il cliente può verificare da solo, quando qualcuno contesta hai una prova da mostrare invece di una parola contro l\'altra.',
  cta_primary: 'Prova GeoTapp gratis',
  cta_flow: 'Scopri GeoTapp Flow',
  cta_timetracker: 'Scopri GeoTapp TimeTracker',
  faq_badge: 'Domande frequenti',
  faq_title: 'Tutto quello che vuoi sapere su Verifier.',
  faqs: [
    {
      q: 'Il cliente deve avere un account GeoTapp per verificare un report?',
      a: "No. Il cliente riceve il report e lo verifica senza registrarsi e senza accedere alla piattaforma: online, oppure con il verificatore offline gratuito.",
    },
    {
      q: 'Cosa succede se qualcuno cerca di modificare il report?',
      a: 'Il verificatore ricalcola le impronte di eventi e foto: qualsiasi modifica dopo la generazione le fa risultare diverse da quelle sigillate, e la verifica segnala il documento come alterato.',
    },
    {
      q: 'Verifier funziona anche per report storici?',
      a: 'Sì. Tutti i report generati da GeoTapp Flow con dati TimeTracker possono essere verificati in qualsiasi momento, anche a distanza di mesi o anni dalla loro produzione.',
    },
    {
      q: 'Verifier è a pagamento?',
      a: "No, è gratuito: per te e per chiunque riceva un tuo report.",
    },
  ],
  hero_cta_download: 'Scarica il verificatore',
  cta_download: 'Scarica Verifier gratis',
  download_badge: 'Download gratuito',
  download_title: 'Scarica GeoTapp Verifier.',
  download_desc: "Verifica offline l'integrità dei report GeoTapp. Nessun account richiesto: da terminale o libreria Node.js per chi sviluppa, oppure un file HTML che si apre con un doppio clic per chiunque altro.",
  download_btn_cli: 'Scarica per riga di comando (Node.js)',
  download_btn_html: 'Scarica la versione HTML locale',
  download_version: 'v0.3.0 · stesso motore di verifica, due formati',
  download_requirements: 'Richiede Node.js ≥ 18',
  download_cli_title: 'Da terminale',
  download_api_title: 'Come libreria Node.js',

  online_verify_badge: 'Verifica istantanea',
  online_verify_title: 'Verifica un report online',
  online_verify_desc: 'Carica il file ZIP del report. La verifica avviene sul server e il file non viene salvato.',
  online_verify_upload_label: 'Trascina il report ZIP qui, oppure clicca per selezionarlo',
  online_verify_upload_hint: 'Solo file .zip, dimensione massima 25MB',
  online_verify_btn: 'Verifica ora',
  online_verify_privacy_note: 'Il file viene analizzato in memoria e non viene salvato o trasmesso a terzi.',
  online_verify_size_limit: 'Dimensione massima: 25MB',
  online_verify_result_valid_sealed: 'Report valido, sigillato e firmato',
  online_verify_result_valid_unsigned: 'Report valido, contenuto integro, sigillo non firmato',
  online_verify_result_legacy: 'Report legacy, leggibile, senza sigillo forte',
  online_verify_result_invalid: 'Report non valido, contenuto potenzialmente alterato',
  online_verify_error_too_large: 'File troppo grande. Dimensione massima: 25MB.',
  online_verify_error_not_zip: 'Il file deve essere un archivio ZIP.',
  online_verify_error_generic: 'Errore durante la verifica. Il file potrebbe essere danneggiato.',

  compare_badge: 'Due modi di verificare',
  compare_title: 'Verifica locale o online?',
  compare_local_title: 'Sul tuo computer',
  compare_local_items: [
    'Il file resta sul tuo dispositivo',
    'Funziona senza connessione internet',
    'Nessun limite pratico di dimensione',
    'Ideale per audit, legali, consulenti',
    'La versione HTML non richiede installazioni; quella da riga di comando richiede Node.js',
  ],
  compare_online_title: 'Online (questo sito)',
  compare_online_items: [
    'Nessun tool da installare',
    'Risultato immediato nel browser',
    'Il file passa dal nostro server, che non lo salva',
    'Limite 25MB per file',
    'Ideale per controlli rapidi',
  ],
  compare_same_engine_note: 'Stesso motore di verifica in entrambi i casi. La differenza è dove gira.',
};

export default it;
