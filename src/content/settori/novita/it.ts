import type { NovitaCopy } from './types';

const copy: NovitaCopy = {
  ui: {
    kicker: 'Novità',
    flowCaption: 'Flow, il pannello del titolare',
    phoneCaption: 'TimeTracker, sul telefono',
    altFlow: 'Flow, il pannello del titolare: schermata di {tool}',
    altPhone: 'TimeTracker sul telefono: schermata di {tool}',
    flowOnly: 'Questo strumento si usa dal pannello Flow: non serve nulla sul telefono dei tuoi operai.',
    seeAlso: 'Per verifiche elettriche, caldaie e F-gas ci sono gli strumenti dedicati:',
    moreShots: 'Altre schermate di questo strumento',
    enlarge: 'Ingrandisci: {name}',
    close: 'Chiudi',
    prev: 'Precedente',
    next: 'Successiva',
  },
  sections: {
    sicurezza: {
      title: 'Nuovi strumenti per la vigilanza: ronda, lavoratore isolato, consegne ed Emergenze',
      intro: 'Quando scegli il settore, GeoTapp accende solo gli strumenti del tuo mestiere. Per la vigilanza sono tre, più il modulo Emergenze che vale per tutti i settori. Ognuno ha la sua parte in Flow, dove decidi e controlli, e la sua parte sul telefono della guardia.',
    },
    pulizie: {
      title: 'Nuovi strumenti per le pulizie: controllo qualità e schede di sicurezza',
      intro: 'Due strumenti pensati per le contestazioni e i controlli che un\'impresa di pulizie si trova davanti ogni settimana. Si accendono quando indichi il settore, gli altri restano nascosti.',
    },
    elettricisti: {
      title: 'Nuovi strumenti per gli elettricisti: misure di fine lavoro e scadenzario della terra',
      intro: 'Per chi chiude un impianto e per chi deve ricordarsi le verifiche periodiche dei clienti. GeoTapp raccoglie, impagina e ricorda: le verifiche, le dichiarazioni e le firme restano a chi le fa.',
    },
    edilizia: {
      title: 'Nuovi strumenti per l\'edilizia: documenti delle imprese e congruità della manodopera',
      intro: 'Due strumenti per chi coordina cantieri con subappaltatori e imprese affidatarie, pensati per arrivare agli appuntamenti con le carte già in ordine. Si usano da Flow, nel pannello del titolare.',
    },
    idraulici: {
      title: 'Nuovi strumenti per idraulici e termoidraulici: controlli caldaie e registro F-gas',
      intro: 'Il lavoro che torna ogni anno, e che si dimentica proprio quando serve: richiamare i clienti per il controllo dell\'impianto e tenere in ordine gli apparecchi con gas fluorurati.',
    },
    installatori: {
      title: 'Nuovi strumenti per gli installatori: consegna con firma e magazzino del furgone',
      intro: 'Due strumenti per le due cose che ti fanno perdere tempo a ogni lavoro: chiudere la consegna con il cliente e sapere cosa c\'è davvero sul furgone.',
    },
    manutenzione: {
      title: 'Nuovi strumenti per la manutenzione: tempi di intervento e QR sugli apparecchi',
      intro: 'Per chi lavora con contratti di servizio e con tanti apparecchi sparsi in più edifici: sapere quanto tempo resta per ogni richiesta e ritrovare lo storico di una macchina in un gesto.',
    },
    impianti: {
      title: 'Nuovi strumenti per impiantisti: consegna con firma e magazzino del furgone',
      intro: 'Questa pagina parla a chi monta e consegna impianti, di qualsiasi tipo: per questo qui trovi i due strumenti che valgono per tutti, consegna con firma e magazzino del furgone. Le verifiche elettriche e i controlli delle caldaie sono mestieri a sé e hanno strumenti dedicati.',
    },
  },
  tools: {
    giro_ronda: {
      title: 'Giro di ronda',
      body: 'Sono le tre di notte e il cliente vuole sapere se la ronda è passata da tutti i punti del magazzino. In Flow disegni i punti sulla mappa e imposti i giri con i loro orari; la guardia, passando, tocca «Passaggio» sul telefono. Al mattino hai il rapporto della notte, già impaginato.',
      note: 'La posizione si legge solo nel momento in cui la guardia tocca «Passaggio»: tra un punto e l\'altro non si registra nulla.',
    },
    lavoratore_isolato: {
      title: 'Lavoratore isolato',
      body: 'Una guardia da sola in un sito, di notte. Per ogni sede scegli un piano con l\'intervallo che preferisci: a quegli intervalli il telefono chiede «Tutto a posto?» e, se la risposta non arriva, avvisa il coordinatore. In Flow vedi i turni in corso e la cronologia di chi ha risposto e quando.',
      note: 'Nessuna posizione viene inviata. È uno strumento di supporto: non sostituisce le misure di sicurezza previste per chi lavora da solo.',
    },
    consegne_turno: {
      title: 'Passaggio di consegne',
      body: 'Alle sei la guardia di notte lascia il sito a quella del mattino. Prima erano chiavi nella cassetta e un messaggio vocale; ora, a fine turno, scrive note, chiavi e anomalie per chi arriva dopo, che le prende in carico dal telefono. In Flow vedi le consegne ancora da prendere e le anomalie aperte. La cronologia non si può modificare.',
    },
    emergenze: {
      title: 'Emergenze ed esercitazioni',
      body: 'Esercitazione di evacuazione in un edificio o a un evento: il coordinatore sceglie lo scenario e tocca sulla pianta il punto del pericolo. Ogni persona della squadra riceve sul telefono il suo ruolo, cosa fare e le uscite in ordine, e risponde con un tocco: presente, in arrivo, non posso. Il cruscotto mostra chi ha risposto e dopo quanto; i piani si aprono anche senza rete.',
      note: 'È uno strumento di coordinamento e di prova: non sostituisce né convalida il tuo piano di emergenza, e una notifica può non arrivare, per questo ognuno conferma.',
    },
    qualita_pulizie: {
      title: 'Controllo qualità',
      body: 'Il referente del cliente dice che il terzo piano non è stato pulito bene. La caposquadra fa il giro dell\'area con la lista di voci, segna conforme, non conforme o non applicabile e allega la foto. In Flow ogni voce ha un peso da 1 a 3, il punteggio del mese è per sede e per area, e a fine mese esce il PDF da mostrare al cliente, con gli interventi aperti.',
    },
    schede_consumi: {
      title: 'Schede di sicurezza e consumi',
      body: 'Chi controlla vuole vedere la scheda di sicurezza del prodotto che c\'è sul carrello. In Flow ogni sede ha i suoi prodotti, ognuno con la scheda in PDF, e vedi i prelievi e i costi del mese. Sul telefono le schede si leggono anche dove non c\'è rete, e il prelievo si registra al momento.',
    },
    verifiche_misure: {
      title: 'Verifiche e misure',
      body: 'Quadro chiuso, ultimo giorno di lavoro: continuità, isolamento, differenziali, terra. L\'elettricista inserisce ogni misura dal telefono con l\'esito e la foto dello strumento; Flow raccoglie le verifiche per commessa e le impagina come allegati alla dichiarazione di conformità (DiCo, DM 37/2008).',
      note: 'GeoTapp raccoglie e impagina: non verifica, non convalida, non garantisce la conformità. La dichiarazione e la firma restano all\'impresa installatrice.',
    },
    impianti_terra: {
      title: 'Scadenzario impianti di terra',
      body: 'Per ogni cliente inserisci la data dell\'ultima verifica periodica dell\'impianto di terra: Flow ti avvisa prima della scadenza, così non te ne accorgi quando è già scaduta. Il riferimento è il DPR 462/2001.',
      note: 'Le date le inserisce la tua azienda: GeoTapp le ricorda, non fa la verifica e non dice se è valida.',
    },
    documenti_imprese: {
      title: 'Documenti delle imprese',
      body: 'Prima di far entrare in cantiere un subappaltatore vuoi avere le sue carte in regola, e ricordarti quando scadono, come il DURC. Flow tiene lo scadenzario dei documenti di ogni impresa subappaltatrice o affidataria e ti avvisa prima della data.',
      note: 'Avvisa prima della scadenza, non dice se un documento è valido: quello lo controlli tu, o il tuo consulente.',
    },
    congruita: {
      title: 'Congruità della manodopera',
      body: 'A fine cantiere il consulente ti chiede quanto pesa la manodopera sul valore dei lavori. Flow fa una stima interna per ogni cantiere con le ore registrate e la esporta in CSV o PDF, pronta da girare.',
      note: 'Non è il calcolo ufficiale: in Italia la congruità la attesta la Cassa Edile.',
    },
    caldaie: {
      title: 'Controlli caldaie',
      body: 'Settembre: diversi clienti hanno il controllo in scadenza. Flow ti mostra gli impianti da richiamare nel mese e prepara la bozza del messaggio al cliente, che parte solo se la invii tu. Sul telefono il tecnico ha l\'elenco degli impianti con le scadenze e compila il rapporto di controllo con le misure.',
      note: 'Il libretto e l\'invio alla Regione restano al manutentore (DPR 74/2013): GeoTapp raccoglie e impagina i dati, non verifica né garantisce la conformità.',
    },
    fgas: {
      title: 'Registro F-gas',
      body: 'Un apparecchio con gas fluorurati ha una carica, una CO2 equivalente e una storia di interventi. In Flow vedi gli apparecchi e cosa va comunicato; dal telefono il tecnico apre il registro e aggiunge un nuovo intervento subito, senza ricopiare la sera.',
      note: 'La comunicazione alla banca dati FGAS la fa il tecnico o l\'azienda: GeoTapp non la invia.',
    },
    consegna_firma: {
      title: 'Consegna con firma',
      body: 'Hai finito il montaggio. Il tecnico legge col telefono il codice a barre di ogni matricola, scatta le foto finali e fa firmare il cliente sullo schermo. Ne esce un verbale PDF con il tuo logo, i dati dell\'azienda e il codice a barre di ogni matricola, che entra nel rapportino del lavoro. In Flow vedi le consegne del mese e scegli l\'aspetto del verbale: logo, dati, testi, colore.',
    },
    magazzino_furgone: {
      title: 'Magazzino del furgone',
      body: 'Il tecnico arriva dal cliente e scopre di non avere più il raccordo giusto. Sul telefono vede cosa c\'è sul furgone e cosa sta finendo, e segna il materiale usato su ogni commessa. In Flow imposti le soglie per furgone, vedi cosa riordinare e quanto costa il materiale di ogni lavoro.',
    },
    sla: {
      title: 'Tempi di intervento (SLA)',
      body: 'Il contratto col condominio dice entro quanto prendere in carico una richiesta ed entro quanto risolverla. In Flow ogni richiesta mostra il tempo che resta per l\'una e per l\'altra, per contratto; a fine mese c\'è il rapporto. Sul telefono il tecnico vede le richieste assegnate, le prende in carico e le segna come risolte.',
    },
    qr_apparecchi: {
      title: 'QR sugli apparecchi',
      body: 'Davanti a una pompa o a un quadro, il tecnico inquadra l\'etichetta QR e ha subito lo storico e gli interventi di quell\'apparecchio. Chi inquadra senza un account, per esempio un inquilino, può segnalare un problema. In Flow gestisci gli apparecchi e stampi le etichette.',
    },
  },
  shots: {
    flow_emergenze_attiva: 'Flow: il coordinatore sceglie lo scenario e tocca sulla pianta il punto del pericolo per attivare l\'esercitazione',
    flow_emergenze_evento: 'Flow: cruscotto dell\'esercitazione in corso, con chi ha risposto e in quanto tempo',
    flow_emergenze_evento_persone: 'Flow: l\'elenco delle persone della squadra con la loro risposta, presente, in arrivo o non posso',
    flow_emergenze_sito: 'Flow: la planimetria del sito con uscite, presidi e zone',
    flow_emergenze_protocolli: 'Flow: i protocolli per scenario e ruolo',
    flow_emergenze_squadre: 'Flow: le squadre con gli attestati, e chi manca viene segnalato',
    flow_emergenze_scadenzario: 'Flow: scadenzario degli attestati e delle verifiche dei presidi',
    tt_emergenze_dashboard: 'Telefono: la schermata iniziale con l\'avviso di esercitazione',
    tt_emergenze_indicazioni: 'Telefono: le indicazioni personali, con il ruolo e cosa fare',
    tt_emergenze_indicazioni_2: 'Telefono: le uscite in ordine, senza quelle bloccate',
    tt_emergenze_risposta: 'Telefono: la risposta con un tocco, presente, in arrivo o non posso',
    tt_emergenze_piani: 'Telefono: i piani, consultabili anche senza rete',
  },
};

export default copy;
