
import {
    Zap, Hammer, Minimize2,
    Shield, Ghost, Crosshair,
    BrainCircuit, Eye, Cpu,
    Trash2, Scale, Clock
} from 'lucide-react';

export interface HeroDetail {
    id: string;
    hero: string;
    codeName: string;
    icon: any;
    color: string;
    shortDescription: string;
    fullDescription: string;
}

export const FORTYX_HEROES: HeroDetail[] = [
    // --- CLASS S: SPEED ---
    {
        id: 'quicksilver',
        hero: 'Quicksilver',
        codeName: 'Nitro Cache Engine',
        icon: Zap,
        color: 'blue',
        shortDescription: "Genera copie HTML statiche delle tue pagine. Serve i contenuti in meno di 50ms, più veloce di quanto l'occhio umano possa percepire.",
        fullDescription: `
### Tu Non L'hai Visto. Lui Ha Già Finito.

La velocità non è solo una feature. È sopravvivenza. Nel web moderno, un ritardo di 100ms ti costa l'1% delle conversioni.
**Quicksilver** non "ottimizza" il caricamento. Lo elimina.

Quando un utente richiede una pagina, WordPress deve normalmente:
1.  Avviare il core PHP.
2.  Connettersi al Database MySQL.
3.  Eseguire le query.
4.  Assemblare il tema.
5.  Restituire l'HTML.
Tempo totale: 600ms - 2 secondi. Troppo lento.

#### La Zona a Tempo Zero

Quicksilver intercetta questo processo. Prima che l'utente clicchi, lui ha già generato una copia **HTML Statica** pura della pagina e l'ha salvata nella memoria del server.
Quando arriva la richiesta, Quicksilver serve questo file statico istantaneamente.
Nessun PHP. Nessun Database. Solo pura velocità di trasferimento dati.

**Risultato**: Time To First Byte (TTFB) sotto i 50ms.
Il tuo sito non si "carica". Appare. È istantaneo. È come se il tempo si fermasse per tutti tranne che per il tuo server.

#### Cache Warmer (Wolverine Regeneration)

E se cambi una pagina? Quicksilver collabora con il modulo Wolverine. Appena aggiorni un post, la vecchia cache viene distrutta e Wolverine "rigenera" immediatamente la nuova versione statica visitandola silenziosamente.
Il primo visitatore non trova mai un sito lento ("cache miss"). Trova sempre la versione pronta.
        `
    },
    {
        id: 'mjolnir',
        hero: 'Mjolnir',
        codeName: 'Image Smasher',
        icon: Hammer,
        color: 'yellow',
        shortDescription: "Brandisce il potere della compressione. Schiaccia JPG e PNG trasformandoli in WebP ultraleggeri al momento dell'upload.",
        fullDescription: `
### Chiunque Sia Degno, Possederà il Potere della Compressione.

Le immagini sono il nemico numero uno delle prestazioni. Pesanti, goffe, lente.
Mjolnir è il martello che le disciplina.
Non chiediamo agli utenti di "ottimizzare le foto prima di caricarle". Sappiamo che non lo faranno.
Ci pensa Mjolnir.

#### Il Colpo del Tuono (WebP Conversion)

Appena carichi un'immagine (JPG, PNG) nella Media Library, Mjolnir la colpisce con una scarica di energia.
La converte istantaneamente nel formato **WebP** di nuova generazione.
-   Qualità visiva: Identica (Lossless perception).
-   Peso file: Ridotto del 40-70%.

#### Healing Factor (Path Repair)

A volte, i link alle immagini si rompono. Migrazioni, cambi di dominio, errori umani.
Mjolnir ha una funzione nascosta di "guarigione". Se il sistema rileva un'immagine mancante (Broken Image), Mjolnir scansiona la directory degli upload cercando file con nomi simili e prova a riparare il percorso automaticamente (Path Healing).
Mantiene il tuo contenuto visivamente integro, non importa quanto sia vecchio il database.
        `
    },
    {
        id: 'ant-man',
        hero: 'Ant-Man',
        codeName: 'Quantum Minifier',
        icon: Minimize2,
        color: 'red',
        shortDescription: "Si rimpicciolisce a livello subatomico. Minifica l'HTML rimuovendo ogni spazio bianco superfluo per ridurre il payload.",
        fullDescription: `
### Piccolo. Potente. Invisibile.

Quanto spazio sprecato c'è nel codice del tuo sito? Spazi vuoti, ritorni a capo, commenti degli sviluppatori ("// todo: fix this").
Al browser non servono. All'utente non servono. Sono solo peso morto che viaggia sui cavi.

Ant-Man porta il tuo codice nel **Regno Quantico**.

#### Compressione Subatomica

Ant-Man analizza il codice HTML, CSS e JavaScript in uscita.
Rimuove:
1.  Spazi bianchi (Whitespace).
2.  Interruzioni di riga (Newlines).
3.  Commenti HTML/CSS.

Compatta tutto in una singola, densissima stringa di codice.
Un file da 100KB diventa 85KB.
Sembra poco? Moltiplicalo per milioni di visite. Sono terabyte di dati risparmiati. E su reti mobili 4G/5G, ogni kilobyte rimosso significa millisecondi guadagnati.

#### Quantum Entanglement (Safety Mode)

La minificazione rischia di "rompere" il layout se il codice, ad esempio, manca di punti e virgola.
Ant-Man usa una "Safe Mode" intelligente. Non minifica ciecamente. Analizza la sintassi. Se rileva un blocco di codice rischioso (es. uno script inline malformato), lo salta, minificando tutto il resto intorno.
Massima efficienza, rischio zero.
        `
    },

    // --- CLASS A: DEFENSE ---
    {
        id: 'vibranium',
        hero: 'Vibranium',
        codeName: 'The Shield',
        icon: Shield,
        color: 'indigo',
        shortDescription: "Inietta header di sicurezza militari (X-XSS, Strict-Transport). Respinge gli attacchi XML-RPC come proiettili su uno scudo.",
        fullDescription: `
### Indistruttibile.

Il tuo sito è sotto attacco. Ora. Mentre leggi. Bot russi, scanner cinesi, script kiddies.
Cercano porte aperte. Cercano header mancanti. Cercano di iniettare codice malevolo.
Vibranium non combatte. **Assorbe**.

#### Header Hardening (Lega Metallica)

Vibranium inietta negli header HTTP del tuo server una lega di direttive di sicurezza impenetrabile:
-   **X-XSS-Protection**: Blocca i tentativi di Cross-Site Scripting.
-   **X-Frame-Options: SAMEORIGIN**: Impedisce che il tuo sito venga caricato in un iframe (Clickjacking).
-   **Strict-Transport-Security (HSTS)**: Forza i browser a usare SOLO HTTPS, rendendo impossibili gli attacchi Man-in-the-Middle.
-   **Referrer-Policy: strict-origin**: Nasconde i dati dei tuoi utenti quando cliccano su link esterni.

#### XML-RPC Blackout

La porta di servizio più abusata di WordPress è \`xmlrpc.php\`. Era utile nel 2010. Oggi è solo un vettore per attacchi DDoS e Brute Force.
Vibranium chiude questa porta ermeticamente.
Qualsiasi richiesta verso XML-RPC viene respinta immediatamenente con un 403 Forbidden.
È come se i proiettili colpissero lo scudo e cadessero a terra, inerti. Il server non spreca nemmeno un ciclo di CPU per processarli.
        `
    },
    {
        id: 'loki',
        hero: 'Loki',
        codeName: 'God of Deception',
        icon: Ghost,
        color: 'green',
        shortDescription: "Il Dio dell'Inganno. Crea campi 'Honeypot' invisibili nei form che attirano e intrappolano i bot prima che possano fare spam.",
        fullDescription: `
### Non Puoi Combattere Ciò Che È Reale. E Ciò Che Non Lo È.

I firewall tradizionali usano la forza bruta: bloccano gli IP. Ma gli IP cambiano. I bot evolvono.
Loki usa qualcosa di più potente: **l'Inganno**.

#### The Honeypot Trap (Illusione)

In ogni form di contatto e commento del tuo sito, Loki inserisce un campo input nascosto.
-   Un utente umano non lo vede mai (è nascosto via CSS/JS).
-   Un bot, che legge solo il codice HTML grezzo, lo vede. E, essendo un programma stupido programmato per "riempire tutto", lo compila.

Appena quel campo viene compilato, Loki ride.
Non serve analizzare il contenuto. Non serve Captcha (che infastidisce gli utenti reali).
Se quel campo è pieno, tu sei un bot.
L'invio viene scartato silenziosamente. Il bot crede di aver avuto successo, quindi non riprova. Ma il tuo database rimane pulito.

#### Error Masking

Durante il login, WordPress normalmente dice: "Password errata per l'utente Admin". Errore. Ha appena confermato all'hacker che l'utente "Admin" esiste!
Loki cambia questo messaggio in un generico: "Credenziali non valide".
L'attaccante non sa se ha sbagliato user o password. Non sa se l'account esiste.
Il Dio dell'Inganno protegge la verità nascondendola in piena vista.
        `
    },
    {
        id: 'hawkeye',
        hero: 'Hawkeye',
        codeName: 'Precision Asset Control',
        icon: Crosshair,
        color: 'purple',
        shortDescription: "Non sbaglia mai un colpo. Individua script inutili (Emoji, Embeds) e li elimina chirurgicamente dal caricamento.",
        fullDescription: `
### Un Solo Colpo. Niente Sprechi.

WordPress è obeso. Carica decine di script su ogni pagina "nel caso servano".
Carica le Emoji (40KB di JS). Carica gli Embed (oEmbed). Carica jQuery Migrate per plugin del 2015.
Hawkeye odia gli sprechi. Hawkeye ha una mira perfetta.

#### Dequeue Chirurgico

Hawkeye scansiona la coda di caricamento (Enqueues).
Vede lo script delle Emoji? Lo abbatte.
Vede l'oEmbed sula Home? Lo abbatte.
Vede il CSS di Contact Form 7 su una pagina dove non c'è il form? Lo abbatte.

#### Smart Loading

Contact Form 7 carica i suoi asset su *tutte* le pagine del sito. Follia.
Hawkeye applica una logica condizionale:
\`if ( has_shortcode('contact-form-7') ) { load(); } else { block(); }\`

Risultato: Le tue pagine pesano il 30% in meno. Il codice è pulito. Carica solo ciò che serve alla missione.
Niente frecce sprecate.
        `
    },

    // --- CLASS B: INTELLIGENCE ---
    {
        id: 'jarvis',
        hero: 'J.A.R.V.I.S.',
        codeName: 'AI Core Manager',
        icon: BrainCircuit,
        color: 'orange',
        shortDescription: "Il cervello del sistema. Usa l'AI per ottimizzare i titoli SEO e gestisce l'ordine di caricamento degli script (Defer/Async).",
        fullDescription: `
### "Just A Rather Very Intelligent System".

Non è solo un plugin. È un sistema operativo per il tuo sito.
Jarvis è il maggiordomo invisibile che orchestra tutto. Mentre gli altri moduli combattono o difendono, Jarvis pianifica.

#### Asset Orchestration (Defer & Async)

Il JavaScript blocca il rendering (Render Blocking). Se il browser incontra uno script, ferma tutto finché non lo ha scaricato ed eseguito. Il sito appare bianco.
Jarvis riscrive i tag \`<script>\` al volo.
Applica l'attributo \`defer\`.
Dice al browser: "Continua a dipingere la pagina. Scarica questo script in background ed eseguilo solo alla fine".
L'utente vede il contenuto subito. L'interattività arriva millisecondi dopo. L'esperienza è fluida.

#### AI Title Optimization

Jarvis si collega al Cloud di GeoTapp (Zenith Integration) per analizzare i tuoi titoli.
Se vede un titolo debole ("Home Page - Mio Sito"), suggerisce o riscrive automaticamente meta-titoli ottimizzati per il CTR ("Mio Sito | La Soluzione Definitiva per X").
Lavora sempre. Impara sempre.
        `
    },
    {
        id: 'vision',
        hero: 'Vision',
        codeName: 'Predictive Insight',
        icon: Eye,
        color: 'teal',
        shortDescription: "Vede il futuro. Inserisce Resource Hints (DNS Prefetch) per connettersi ai server esterni prima ancora che l'utente clicchi.",
        fullDescription: `
### Calcolo delle Probabilità: 100%.

Vision non reagisce. Anticipa.
Grazie alla Gemma della Mente, Vision comprende le dipendenze esterne del tuo sito (Google Fonts, Analytics, Facebook Pixel) e stabilisce le connessioni *prima* che siano necessarie.

#### DNS Prefetch & Preconnect

Normalmente, quando il browser trova un link a "fonts.googleapis.com", deve:
1.  Chiedere al DNS l'IP.
2.  Fare l'handshake TCP.
3.  Negoziare TLS (SSL).
Questo porta via 300-500ms.

Vision inserisce nell'header della pagina dei tag \`<link rel="dns-prefetch">\` e \`<link rel="preconnect">\`.
Dice al browser: "Ehi, tra poco ci servirà Google Fonts. Inizia a connetterti ADESSO, mentre stai ancora scaricando l'HTML".
Quando arriva il momento di scaricare il font, il "tubo" è già aperto. Il download è istantaneo.

#### Heartbeat Control

WordPress ha un "battito cardiaco" (Heartbeat API) che ogni 15-60 secondi chiama il server (admin-ajax) per autosave e notifiche. Se hai 10 tab aperti, sono 10 attacchi DDoS contro te stesso.
Vision calma il battito. Lo riduce a una volta ogni 2 minuti o lo disabilita se non stai scrivendo.
Meno stress per la CPU. Più vita per il server.
        `
    },
    {
        id: 'iron-man',
        hero: 'Iron Man',
        codeName: 'Fury Mode (JS Delay)',
        icon: Cpu,
        color: 'red',
        shortDescription: "L'armatura finale. Attiva il 'Fury Mode' per ritardare l'esecuzione di script pesanti (come GTM o AdSense) fino all'interazione utente.",
        fullDescription: `
### Io Sono Iron Man. E Questo è il Fury Mode.

A volte, l'ottimizzazione normale non basta. A volte hai script pesanti, scritti male, impossibili da rimuovere perché servono al Marketing (HubSpot, Facebook Chat, AdSense).
Questi script distruggono il punteggio Lighthouse.
Iron Man indossa la Hulkbuster e attiva il **FURY MODE**.

#### Interazione, Non Caricamento

In Fury Mode, Iron Man prende questi script pesanti e li congela.
Non li carica con \`defer\`. Non li carica affatto.
Mostra una "immagine fantasma" (placeholder) o nulla.
Il sito carica in 0.4 secondi perché è vuoto di script pesanti. Ottieni 100/100 su Google PageSpeed.

Poi, l'utente muove il mouse. O tocca lo schermo.
In quel preciso millisecondo, Iron Man inietta gli script.
L'utente non nota nulla (il click funziona).
Ma per il bot di Google (che non muove il mouse), il tuo sito è un razzo leggerissimo.

È un trucco? No. È tecnologia superiore. Dai a Google quello che vuole (velocità) e all'utente quello che vuole (funzionalità), senza compromessi.
        `
    },

    // --- CLASS C: REALITY ---
    {
        id: 'hulk',
        hero: 'Hulk',
        codeName: 'Database Smash',
        icon: Trash2,
        color: 'green',
        shortDescription: "Spacca tutto ciò che è inutile. Cancella revisioni vecchie, commenti spam e transienti scaduti con pura forza bruta.",
        fullDescription: `
### HULK... PULISCE!

Il Database di WordPress è un accumulatore seriale.
Ogni volta che salvi una bozza, crea una copia (Revisione). Dopo un anno hai 50 copie *per ogni articolo*.
I plugin salvano dati temporanei (Transienti) e "dimenticano" di cancellarli.
I commenti spam si accumulano nel cestino.
Il DB diventa grasso, lento. Le query impiegano secondi.

#### Brute Force Cleanup

Hulk non ha pazienza. Hulk entra nel Database e spacca tutto ciò che non serve.
Esegue query \`DELETE\` massicce:
-   Via tutte le revisioni tranne le ultime 5.
-   Via tutti i commenti spam e cestinati.
-   Via tutti i transienti scaduti (orphaned options).

Non ottimizza le tabelle con piume di struzzo. Le deframmenta a pugni.
Il risultato è un database snello, che risponde alle query istantaneamente.
La forza bruta, usata a fin di bene, è efficienza.
        `
    },
    {
        id: 'thanos',
        hero: 'Thanos',
        codeName: 'Universal Balance',
        icon: Scale,
        color: 'purple',
        shortDescription: "L'equilibrio perfetto. Elimina i metadati orfani e le relazioni interrotte. Un semplice schiocco di dita e il database è pulito.",
        fullDescription: `
### Il Destino Attende.

Hulk pulisce lo sporco visibile. Thanos si occupa dell'esistenziale.
Nel database esistono "Orfani".
-   Un post cancellato che ha lasciato dietro di sé 20 righe di meta-dati (post_meta).
-   Un tag che non è associato a nessun articolo (term_relationships).
-   Un commento che risponde a un post che non esiste più.

Questi dati "zombie" non servono a nulla ma rallentano ogni singola ricerca SQL.

#### The Snap

Thanos esegue lo schiocco di dita (The Snap).
Scansiona le relazioni tra le tabelle.
\`IF post_id NOT IN (SELECT ID FROM wp_posts) THEN DELETE.\`
Cancella con fredda logica matematica tutto ciò che non ha uno scopo.
Crea il perfetto equilibrio. Le risorse sono finite, e Thanos si assicura che vengano usate solo per i dati vivi.
È inevitabile.
        `
    },
    {
        id: 'doctor-strange',
        hero: 'Dr. Strange',
        codeName: 'Time Stone Manager',
        icon: Clock,
        color: 'cyan',
        shortDescription: "Manipola il tempo. Controlla quante revisioni vengono salvate e ogni quanto avviene l'autosave, prevenendo il caos temporale nel DB.",
        fullDescription: `
### Dormammu, Sono Venuto a Patteggiare.

Il tempo è relativo in WordPress.
Ogni 60 secondi, l'editor salva una copia (Autosave).
Ogni volta che clicchi "Aggiorna", crea una Revisione.
Se non controlli il tempo, il tempo (e lo spazio su disco) distruggerà il tuo sito.

#### Cronocinesi (Time Manipulation)

Dr. Strange usa l'Occhio di Agamotto per riscrivere le costanti del tempo.
1.  **Revision Limit**: Inserisce un loop temporale. Le revisioni non possono superare il numero 5. Quando crei la sesta, la prima cessa di esistere. Hai sempre la sicurezza del backup, ma mai il peso dell'accumulo.
2.  **Autosave Interval**: Dilatare il tempo. Invece di 60 secondi, l'autosave avviene ogni 300 secondi (5 minuti).
    Riduci le scritture sul database dell'80%. Meno lock, meno stress, server più felice.

Controllare il tempo significa controllare la stabilità della realtà (del tuo hosting).
        `
    }
];
