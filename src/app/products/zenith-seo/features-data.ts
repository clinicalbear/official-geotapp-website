
import {
    Ghost, Share2, Radar,
    ShieldAlert, Radio, Globe,
    CloudLightning, Magnet, FileText
} from 'lucide-react';

export interface FeatureDetail {
    id: string;
    title: string;
    icon: any;
    color: string;
    shortDescription: string;
    fullDescription: string;
}

export const ZENITH_FEATURES: FeatureDetail[] = [
    {
        id: 'vader-console',
        title: 'Vader Console (Competitor Spy)',
        icon: Ghost,
        color: 'red',
        shortDescription: "Inserisci l'URL di un nemico. Zenith estrae brutalmente Titolo, H1, Struttura e Keyword Strategy.",
        fullDescription: `
### Il Vantaggio Ingiusto: Conoscere le Mosse del Nemico Prima che le Facciano.

Immagina di poter camminare negli uffici dei tuoi concorrenti, aprire i loro archivi segreti e leggere esattamente la strategia che stanno usando per batterti. **Vader Console** ti dà esattamente questo potere, ma legalmente e in tempo reale.

Nel mondo della SEO, l'informazione è munizione. Chi sa, vince. Chi indovina, perde. La Vader Console non "analizza" semplicemente. **Estrae.** 

Quando inserisci l'URL di un competitor che si posiziona sopra di te, Zenith attiva una scansione profonda che va oltre il semplice codice sorgente. Decostruisce la loro pagina pezzo per pezzo per rivelarti il "DNA del Ranking".

#### Cosa Vedrai (Che Loro Vogliono Nascondere):

1.  **La Struttura Scheletrica (H-Tags Blueprint)**:
    Non vedrai solo i titoli. Vedrai la logica psicologica con cui hanno strutturato il discorso. Vader ti mostrerà la gerarchia esatta dei loro H1, H2 e H3. Capirai a colpo d'occhio se stanno puntando su guide "How-To", su comparazioni o su pura autorità tecnica. Una volta che hai la loro mappa, puoi disegnarne una migliore.

2.  **Densità e Frequenza (The Signal)**:
    Quanto spesso usano la keyword principale? E quali varianti semantiche (LSI) stanno inserendo per compiacere l'algoritmo? Zenith te lo dice. Se loro usano "software gestionale" 12 volte, tu saprai che 13 è spam e 11 è poco. Troverai il numero perfetto.

3.  **Il "Gap" di Contenuto**:
    Qui sta la vera vittoria. Vader confronta il loro conteggio parole con il tuo. Se loro hanno scritto 2000 parole e tu 500, hai perso in partenza. Ma se loro hanno scritto 2000 parole di *fluff* (aria fritta), Zenith ti mostrerà dove puoi colpire con 1000 parole di puro valore e sorpassarli.

#### Psicologia del Dominio

Usare Vader Console cambia il tuo mindset. Non sei più un creatore di contenuti che "spera" di piacere a Google. Sei un generale che osserva il campo di battaglia dall'alto. Smetti di chiederti "cosa dovrei scrivere?". La risposta è lì davanti a te, nei dati dei tuoi nemici.

Copia la loro struttura. Migliora la loro profondità. Aggiungi i dati che loro hanno dimenticato. 
**Risultato**: Google non avrà altra scelta che posizionare te al primo posto, perché il tuo contenuto sarà matematicamente superiore.

> "Se conosci il nemico e conosci te stesso, nemmeno in cento battaglie ti troverai in pericolo." - Sun Tzu (e Zenith SEO).
        `
    },
    {
        id: 'neural-graph',
        title: 'Neural Link Graph',
        icon: Share2,
        color: 'red',
        shortDescription: "Visualizza la struttura del tuo sito come una rete neurale. Individua i 'nodi rossi' (pagine deboli).",
        fullDescription: `
### La Tua Vista si Espande: Vedi l'Invisibile.

Il tuo sito web non è una lista di pagine. È un organismo vivente. È una rete di sinapsi dove l'autorità (Link Juice) scorre come elettricità. Ma fino a oggi, tu hai lavorato al buio. Hai scritto articoli, creato pagine, senza mai vedere *davvero* come sono connessi tra loro.

**Neural Link Graph** accende la luce.

Questo non è un banale elenco di link. È una visualizzazione vettoriale dinamica che trasforma il tuo database WordPress in una galassia interattiva. Ogni pallino è un post. Ogni linea è un link interno. E in questa galassia, tu sei il Dio che porta ordine nel caos.

#### Diagnostica Visiva Immediata

1.  **I Nodi Rossi (Zone Morte)**:
    A colpo d'occhio, vedrai dei punti rossi isolati ai margini del grafico. Quelli sono i tuoi contenuti morenti. Pagine che hai scritto con fatica ma che non ricevono *nutrimento* (link) dal resto del sito. Per Google, quelle pagine non esistono. Con un click, puoi vedere chi sono e salvarle.

2.  **I Nodi Giganti (Centri di Potere)**:
    Vedrai pallini molto più grandi degli altri. Quelli sono i tuoi "Cornerstone Content", i pilastri che sorreggono tutto. Ma attenzione: sono troppo grandi? Stanno assorbendo tutta l'autorità lasciando gli altri a secco? Neural Graph ti permette di ridistribuire il potere in modo equo.

3.  **I Cluster Semantici**:
    Vedrai naturalmente formarsi dei gruppi di nodi vicini. Se scrivi di "Finanza", i nodi dovrebbero essere vicini. Se vedi un articolo di "Marketing" perso in mezzo al cluster "Finanza", hai un problema di struttura. Il grafico rende questi errori *ovvi* e impossibili da ignorare.

#### Il Flusso del Potere (Link Juice Engineering)

La SEO tecnica è idraulica. Devi far scorrere l'acqua (Google Bot) dove serve. Con Neural Link Graph, diventi un ingegnere idraulico di livello divino.
Pianifica i tuoi "ponti". Collega un cluster isolato al centro di comando. Crea autostrade per il crawler di Google.

Quando la struttura dei link interni è perfetta, il ranking non è più una speranza. È una conseguenza fisica inevitabile. L'autorità fluisce senza ostacoli, e ogni nuova pagina che pubblichi beneficia istantaneamente della forza di tutte le altre.
        `
    },
    {
        id: 'orphan-scanner',
        title: 'Orphan Scanner',
        icon: Radar,
        color: 'red',
        shortDescription: "Trova i contenuti 'Orfani' invisibili a Google. Applica la 'Nuclear Option' forzando link da post correlati.",
        fullDescription: `
### Nessun Soldato Viene Lasciato Indietro.

Nel vasto oceano del tuo database, ci sono naufraghi. Articoli che hai scritto mesi o anni fa, pieni di valore, ma che ormai galleggiano alla deriva, senza nemmeno un link che li colleghi alla terraferma (la Home o le Categorie).

Questi sono i **Contenuti Orfani**. E sono una tragedia.
Per Google, un contenuto orfano è spazzatura. Se tu stesso non lo linki, perché lui dovrebbe indicizzarlo? Stai letteralmente buttando via il tuo budget di scansione (Crawl Budget).

**Orphan Scanner** è la tua squadra di ricerca e salvataggio.

#### La Missione di Recupero

1.  **Scansione Profonda**:
    Zenith scandaglia ogni angolo del database, ignorando le sitemap (che possono mentire) e guardando la pura struttura relazionale dei link. Trova ciò che è stato dimenticato.

2.  **Analisi di Rilevanza**:
    Una volta trovato l'orfano, Zenith non ti chiede solo di "linkarlo". Cerca attivamente nel resto del sito un "Genitore Adottivo". Analizza il testo di migliaia di altri articoli per trovare una frase, una parola, un concetto che sia contestualmente rilevante per l'orfano.

3.  **The Nuclear Option (Protocollo di Emergenza)**:
    A volte, nessun genitore naturale viene trovato. Nessun articolo parla di quell'argomento. Qui entra in gioco la "Nuclear Option". Con un comando, Zenith forza la creazione di un ponte. Seleziona il post più affine per categoria e *intromette* chirurgicamente un riferimento "Leggi anche: [Titolo Orfano]".

#### Risvegliare i Morti

Recuperare un orfano ha un ROI (Ritorno sull'Investimento) infinito. È un contenuto che hai già pagato (in tempo o denaro) e che ora rende zero.
Collegandolo, lo riattivi. Google lo riscopre. Il traffico inizia a fluire.

È come trovare banconote da 500 euro dimenticate nelle tasche di vecchi cappotti. Zenith svuota l'armadio e ti rimette i soldi in tasca. Non permettere mai più che il tuo lavoro vada sprecato nel dimenticatoio digitale.
        `
    },
    {
        id: 'protocol-droid',
        title: 'Protocol Droid (Auto-Defense)',
        icon: ShieldAlert,
        color: 'indigo',
        shortDescription: "Blocca automaticamente i bot AI parassiti (GPTBot, Claude, CCBot) tramite robots.txt. I tuoi dati sono sovrani.",
        fullDescription: `
### I Tuoi Contenuti Sono Tuoi. Non di un'AI Californiana.

Mentre dormi, centinaia di bot silenziosi stanno "raschiando" (scraping) il tuo sito. Non sono utenti. Non compreranno mai nulla. Sono parassiti: GPTBot, CCBot, Claude-Web, Amazon-Bot.
Vengono, copiano il tuo duro lavoro intellettuale, e lo usano per addestrare i loro modelli AI da miliardi di dollari.
E cosa ti danno in cambio? Nulla. Solo server rallentati e larghezza di banda consumata.

**Protocol Droid** è il tuo scudo a frequenza variabile.

#### La Sovranità dei Dati

Attivando l'Auto-Defense, dichiari l'indipendenza del tuo territorio digitale. Zenith riscrive dinamicamente il tuo file \`robots.txt\` con una "No-Fly Zone" per i parassiti.

1.  **Identificazione Istantanea**:
    Zenith mantiene una lista aggiornata (kill-list) di tutti gli User-Agent noti che appartengono alle compagnie di AI training. Appena ne nasce uno nuovo, il protocollo lo aggiunge al blocco.

2.  **Permessi Selettivi (White-Glove Security)**:
    Il blocco è intelligente. Non ferma Googlebot o Bingbot. Quelli ti portano traffico, quindi sono ospiti graditi. Protocol Droid è un buttafuori che sa distinguere tra un cliente pagante e un ladro.

3.  **Risparmio Risorse**:
    Bloccare questi bot riduce il carico del server fino al 30%. Significa che il tuo sito è più veloce per gli utenti umani reali.

#### Un Atto di Rispetto per Te Stesso

Non è solo tecnica, è principio. Hai speso ore a ricercare, scrivere, perfezionare. Perché dovresti regalare questo valore a chi lo rivenderà senza citarti?
Con Protocol Droid, riprendi il controllo. Chi vuole i tuoi dati deve passare alle tue condizioni. Il tuo sito non è una miniera a cielo aperto per le Big Tech. È una fortezza. E oggi, tu hai alzato il ponte levatoio.
        `
    },
    {
        id: 'project-starlight',
        title: 'Project Starlight (Voice Search)',
        icon: Radio,
        color: 'cyan',
        shortDescription: "Inietta lo schema 'Speakable' (Beta) nel codice. Parla direttamente agli assistenti vocali.",
        fullDescription: `
### Fatti Ascoltare da Milioni di Voci.

Il futuro della ricerca non è digitato. È parlato. "Ehi Google, qual è il miglior software gestionale?". "Alexa, dimmi come ottimizzare la SEO".
Se il tuo sito non è pronto per rispondere a voce, sei muto per metà del mercato mondiale.

**Project Starlight** non è solo markup. È un megafono diretto verso gli assistenti virtuali.

#### Schema.org "Speakable" (Tecnologia Beta/Sperimentale)

La maggior parte dei plugin SEO ignora questo aspetto perché è "troppo complesso" o "ancora in beta". Zenith ama la complessità.
Starlight inietta silenziosamente nel codice JSON-LD della tua pagina una direttiva specifica: \`SpeakableSpecification\`.

1.  **Il "Passo" da Leggere**:
    Indichiamo a Google esattamente *quale* frase del tuo articolo deve leggere ad alta voce. Non lasciamo che scelga a caso (rischiando di leggere il footer o la sidebar). Gli diciamo: "Leggi l'H1 e il primo paragrafo. Quella è la risposta".

2.  **Autorità Vocale**:
    Quando Google Assistant risponde citando il tuo sito ("Secondo GeoTapp.com..."), la tua autorità percepita schizza alle stelle. Non sei più un link blu in una lista. Sei la *Fonte*.

3.  **Future-Proofing**:
    Oggi questo ti dà un vantaggio nei Featured Snippets. Domani, quando la ricerca sarà 'Screenless' (senza schermo, solo audio), tu sarai l'unico a presidiare quel canale mentre i tuoi competitor cercheranno ancora di posizionarsi su schermi che nessuno guarda più.

#### La Voce del Brand

Starlight trasforma il tuo contenuto scritto in un copione audio. Prepara le tue parole per essere pronunciate. È SEO sensoriale.
Non limitarti a essere letto. Fatti sentire.
        `
    },
    {
        id: 'network-hub',
        title: 'Network Hub (Distribution)',
        icon: Globe,
        color: 'teal',
        shortDescription: "Ping automatico ai motori. Pubblica su Reddit e protegge il feed RSS.",
        fullDescription: `
### Omnipresenza Automatizzata.

Scrivere è solo metà del lavoro. La distribuzione è l'altra metà.
Ma distribuire manualmente è noioso, lento e umano. Zenith automatizza l'espansione del tuo impero digitale con il **Network Hub**.

#### Il Segnale Subspaziale (Ping Services)

Appena premi "Pubblica", Zenith non aspetta che Google passi per caso. Invia un impulso (Ping) attivo a tutti i principali servizi di indicizzazione RPC.
"Ehi, c'è qualcosa di nuovo qui. Venite subito".
Questo riduce il tempo di indicizzazione da giorni a minuti. Arrivi prima sulla notizia. Arrivi prima sul mercato.

#### L'Agente Infiltrato (Reddit Auto-Poster)

Reddit è "The Front Page of the Internet". Ma postare ogni articolo manualmente è faticoso.
Il modulo Reddit Bot agisce come un tuo PR digitale.
1.  Si collega alle API di Reddit.
2.  Sceglie il Subreddit target più pertinente alla tua nicchia.
3.  Formatta il post in modo nativo (non sembra spam, sembra condivisione di valore).
4.  Inserisce il link.
**Risultato**: Backlink sociali immediati, traffico reale (non bot) e segnali sociali che Google adora.

#### RSS Armor (Diffusione Controllata)

Il tuo feed RSS è la tua vena giugulare. Gli scraper lo usano per copiarti i contenuti all'istante e ripubblicarli altrove (a volte indicizzandosi prima di te!).
Network Hub blinda il feed.
-   **Delay Tattico**: Ritarda l'uscita nel feed di 60 minuti. Tempo sufficiente perché Google indicizzi TE come fonte originale.
-   **Truncation**: Mostra solo l'anteprima agli aggregatori, costringendo gli utenti a venire sul tuo sito per leggere tutto.

Controlla il segnale. Controlla il traffico.
        `
    },
    {
        id: 'drive-importer',
        title: 'Drive Importer (Hyperdrive)',
        icon: CloudLightning,
        color: 'orange',
        shortDescription: "Sincronizza cartelle Google Drive. Converte WebP, pulisce HTML, pubblica.",
        fullDescription: `
### Dal Pensiero alla Pubblicazione alla Velocità della Luce.

Il copia-incolla è per i dilettanti. È un'attività a basso valore che uccide la creatività.
Tu scrivi su Google Docs perché è veloce, collaborativo e sicuro. Ma trasferire quel testo su WordPress è un incubo: formattazione rotta, immagini da salvare e ricaricare, div inutili nel codice...

**Drive Importer (Hyperdrive)** elimina l'attrito.

#### Sincronizzazione Quantistica

Collega una cartella di Google Drive a Zenith. Fatto.
Da ora in poi, ogni volta che salvi un Doc in quella cartella, Zenith lo sente.

1.  **Sanificazione del Codice**:
    Il codice HTML di Google Docs è "sporco" (pieno di span e stili inline inutili). Zenith lo lava. Lo riduce a puro HTML semantico (H1, P, UL, LI). Pulito, leggero, perfetto per la SEO.

2.  **Gestione Immagini Automatica**:
    Questa è la killer feature. Zenith non linka le immagini di Drive. Le *scarica*. Le porta nel tuo server. Le rinomina usando il titolo del post (SEO image filename). Le converte in **WebP** di nuova generazione. Le imposta come "Featured Image". Tutto senza che tu debba cliccare nulla.

3.  **Il Flusso di Lavoro Perfetto**:
    Scrivi sul telefono mentre sei in treno. Salva su Drive.
    Quando arrivi a casa, l'articolo è già in bozza su WordPress, formattato, con le immagini ottimizzate, pronto per la revisione finale.

Non stai solo risparmiando 15 minuti ad articolo. Stai eliminando la resistenza mentale che ti impedisce di pubblicare di più.
        `
    },
    {
        id: 'tractor-beam',
        title: 'Tractor Beam (Redirect Core)',
        icon: Magnet,
        color: 'orange',
        shortDescription: "Monitora errori 404 e reindirizza automaticamente verso contenuti simili.",
        fullDescription: `
### Non Perdere Mai Più un Visitatore nello Spazio Profondo.

Un errore 404 non è solo una "pagina non trovata". È un cliente perso. È un segnale a Google che il tuo sito è rotto. È un buco nello scafo della tua nave.
I plugin normali ti mostrano una lista di 404 e ti dicono "Buona fortuna, vai a correggerli a mano".
Zenith no. Zenith ha il **Raggio Traente**.

#### Intelligenza di Recupero

Quando un utente digita un URL sbagliato (es. \`miso-sito.com/gestional-gratis\` invece di \`gestionale-gratis\`), il Tractor Beam si attiva in millisecondi, *prima* che l'errore venga mostrato.

1.  **Analisi dell'Intento**:
    Analizza lo "slug" (la parte finale dell'URL) che l'utente cercava.

2.  **Fuzzy Matching Search**:
    Cerca nel tuo database i contenuti esistenti che assomigliano a quella richiesta con una somiglianza > 80%.

3.  **Reindirizzamento Chirurgico (301)**:
    Trova l'articolo giusto. Prende l'utente per mano e lo trasporta immediatamente lì.
    L'utente non vede mai la pagina di errore. Vede direttamente quello che cercava. Pensa "Wow, che sito intelligente".

#### Autoguarigione del Sito

Se cambi la struttura dei permalink o cancelli vecchi post, non devi impazzire con fogli Excel di redirect.
Il sistema si autoguarisce. I vecchi link continuano a funzionare perché Zenith capisce dove dovevano portare.
Mantieni il tuo "Link Equity". Ogni backlink che puntava a una vecchia pagina rotta ricomincia a passare valore al nuovo contenuto. È riciclaggio di autorità, perfettamente legale ed estremamente potente.
        `
    },
    {
        id: 'auto-linker',
        title: 'Auto-Linker (Internal Mesh)',
        icon: FileText,
        color: 'orange',
        shortDescription: "Definisci una keyword, Zenith crea link in tutto l'archivio storico.",
        fullDescription: `
### Tessi la Tua Ragnatela di Autorità in Un Secondo.

Hai appena scritto la "Guida Definitiva alla SEO". Vuoi che tutti i tuoi 500 articoli passati che menzionano la parola "SEO" puntino a questa nuova guida.
Come fai?
Metodo Antico: Apri 500 articoli uno per uno, cerchi la parola, crei il link, salvi. Tempo stimato: 10 ore.
Metodo Zenith: Vai su Auto-Linker. Scrivi "SEO" -> "Link a Guida". Click. Tempo stimato: 3 secondi.

#### La Maglia Interna (Internal Mesh)

Zenith applica retroattivamente la tua strategia di link building all'intero archivio storico.
Ma non lo fa in modo stupido.

1.  **Controllo di Frequenza**:
    Puoi dire "Linka solo la prima volta che appare la parola". Non vuoi un articolo che sembra spam blu sottolineato. Zenith rispetta la leggibilità.

2.  **Priorità dei Termini**:
    Se hai regole per "SEO" e "SEO Locale", Zenith capisce che "SEO Locale" è più specifico e ha la precedenza, evitando conflitti di link troncati.

3.  **Boost Istantaneo**:
    Appena pubblichi una Cornerstone Page, puoi inondarla istantaneamente di link interni da tutto il sito. Google vedrà 500 segnali interni che dicono "Questa pagina è importante" nello stesso giorno. Il ranking non sale, salta.

Trasforma il tuo archivio passivo in una risorsa attiva. Ogni vecchio articolo diventa un soldato che lavora per spingere i tuoi nuovi obiettivi.
        `
    }
];
