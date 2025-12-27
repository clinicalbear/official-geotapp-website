
import {
    Database, CreditCard, Box,
    Layers, Smartphone, BarChart3,
    Activity, Shield, FileText
} from 'lucide-react';

export interface SystemDetail {
    id: string;
    systemName: string;
    codeName: string;
    icon: any;
    color: string;
    shortDescription: string;
    fullDescription: string;
}

export const GEOTAPP_SYSTEMS: SystemDetail[] = [
    // --- SECTOR 1: REVENUE ENGINE (Sales, Onboarding, Finance) ---
    {
        id: 'nexus-core',
        systemName: 'Nexus CRM',
        codeName: 'Sales Engine',
        icon: Database, // Was Users
        color: 'blue',
        shortDescription: "Pipeline di Vendita Sovrana. Gestisci Lead, Opportunità e Trattative per chiudere contratti alla velocità della luce.",
        fullDescription: `
### La Tua Macchina da Guerra Commerciale.

Vendere non è fortuna. È ingegneria.
**Nexus Core** struttura il tuo caos commerciale in una pipeline militare.

#### Pipeline Management

Visualizza ogni trattativa. Sai esattamente dove si bloccano i soldi.
-   Lead (Contatto Freddo)
-   Meeting (In Negoziazione)
-   Proposal (Preventivo Inviato)
-   Won (Soldi in Banca)

#### Intelligenza Predittiva

Nexus non ti dice solo "chi" chiamare, ma "quando".
Traccia le aperture delle e-mail.
Se un Lead apre il tuo preventivo 5 volte in un'ora, Nexus ti avvisa: "CHIAMA ORA".
Trasforma i venditori in cecchini.
        `
    },
    {
        id: 'titan-flow',
        systemName: 'Titan Flow',
        codeName: 'Auto-Onboarding',
        icon: Activity, // Was Zap
        color: 'cyan',
        shortDescription: "Il Cliente firma, il sistema lavora. Generazione automatica di portali clienti, richiesta documenti e task di benvenuto.",
        fullDescription: `
### L'Inizio Perfetto. Senza Sforzo.

Hai chiuso il contratto. Ottimo. Ora inizia l'incubo burocratico: "Mandami il logo", "Compila il form", "Dov'è il contratto firmato?".
**Titan Flow** automatizza la burocrazia.

#### Zero-Touch Onboarding

Appena lo stato passa a "Deals Won", Titan si sveglia.
1.  Invia una mail di benvenuto al cliente.
2.  Genera un **Portale Cliente** sicuro.
3.  Assegna task al cliente: "Carica Visura", "Firma NDA", "Carica Brand Assets".

#### Il "Cane da Guardia" Gentile

Il cliente non carica i file? Tu non devi fare nulla.
Titan gli manda solleciti automatici (e gentili) ogni 48 ore.
Tu ricevi una notifica solo quando tutto è pronto per lavorare.
Parti con il progetto solo quando hai tutti i pezzi. Mai più ritardi per colpa dei "materiali mancanti".
        `
    },
    {
        id: 'ledger-prime',
        systemName: 'Ledger Prime',
        codeName: 'Finance Command',
        icon: CreditCard,
        color: 'yellow',
        shortDescription: "Il Denaro non dorme mai. Generazione automatica di fatture, incassi via Stripe e riconciliazione bancaria in tempo reale.",
        fullDescription: `
### Il Tuo CFO Digitale che Lavora 24/7.

La contabilità è noiosa. È pericolosa (se sbagli). Ed è lenta.
**Ledger Prime** è la fine della contabilità manuale.

#### Quote-to-Cash (La Velocità del Soldo)

Il ciclo è chiuso e blindato.
1.  Crei un Preventivo (Quote) in 30 secondi selezionando prodotti dal listino.
2.  Il cliente riceve un link sicuro. Firma digitalmente dal telefono.
3.  **BAM**. Ledger Prime converte istantaneamente il Preventivo in una Fattura Pro-forma o Definitiva.
4.  Se hai Stripe collegato, il cliente paga con carta di credito nello stesso istante.

I soldi arrivano sul conto mentre tu stai ancora stringendo la mano.
        `
    },

    // --- SECTOR 2: SUPPLY & OPERATIONS (Logistics, Purchasing, Projects) ---
    {
        id: 'quantum-logistics',
        systemName: 'Quantum Logistics',
        codeName: 'Supply Chain',
        icon: Box,
        color: 'green',
        shortDescription: "Ogni atomo tracciato. Gestione Magazzino multi-sede con tracciamento movimenti e riordino predittivo.",
        fullDescription: `
### L'Onniscienza del Magazzino.

"Non so se ce l'ho in casa". Questa frase costa miliardi alle aziende ogni anno.
Con **Quantum Logistics**, tu sai. Sempre.

#### Live Stock Tracking

Ogni prodotto ha un'anima digitale.
Quando crei una fattura di vendita, il magazzino scala automaticamente.
Gestisci movimenti manuali, scarti, resi e trasferimenti tra sedi diverse.

#### Riordino Predittivo (The Oracle)

Quantum non si limita a contare. Prevede.
Imposta una "Scorta Minima" (Min Stock Level).
Quando scendi sotto la soglia, il sistema ti avvisa e prepara già l'ordine al fornitore.
Mai più vendite perse per "prodotto non disponibile".
        `
    },
    {
        id: 'supply-command',
        systemName: 'Supply Command',
        codeName: 'Purchase Ops',
        icon: Layers, // Was Truck (which might be missing?) safely leverage Layers or similar
        color: 'red',
        shortDescription: "Controllo Fornitori Totale. Genera Ordini di Acquisto, traccia le consegne e gestisce i costi in ingresso.",
        fullDescription: `
### Tu Compri. Tu Comandi.

Per vendere devi comprare. Ma gli acquisti sono spesso caotici: email perse, prezzi sbagliati, consegne in ritardo.
**Supply Command** mette il guinzaglio ai tuoi fornitori.

#### Purchase Orders (L'Ordine Perfetto)

Crea Ordini di Acquisto (PO) professionali in pochi clic.
Inviali via mail direttamente dal sistema.
Quando la merce arriva, la trasformi in un "Carico di Magazzino" con un tasto.
Niente più "Ho ordinato 10, ne sono arrivati 9". Il sistema traccia le discrepanze.

#### Supplier Intelligence

Chi è il fornitore più puntuale? Chi ti ha alzato i prezzi di nascosto?
Supply Command storicizza ogni transazione e ti dà il potere negoziale sui costi.
        `
    },
    {
        id: 'the-architect',
        systemName: 'The Architect',
        codeName: 'Project OS',
        icon: Layers,
        color: 'purple',
        shortDescription: "Il tempo è la risorsa più scarsa. Gestisci Progetti, Task e Time Tracking per sapere esattamente quanto ti costa ogni lavoro.",
        fullDescription: `
### Costruisci Cattedrali, Non Castelli di Sabbia.

Gestire progetti complessi via email o WhatsApp è suicidio professionale.
**The Architect** porta ordine nel caos creativo.

#### Struttura Frattale

Ogni Cliente ha dei Progetti. Ogni Progetto ha dei Task. Ogni Task ha delle Scadenze.
Tutto è nidificato. Tutto è visibile.
Assegna compiti al team con un click. Definisci le priorità (Urgent, High, Low).
Visualizza l'avanzamento su diagrammi di Gantt o Board Kanban.

#### Profitability X-Ray (Raggi X della Redditività)

Questa è la funzione che le agenzie temono e amano.
I tuoi dipendenti tracciano il tempo (Time Logs) sui task.
Tu hai impostato un costo orario per dipendente e un prezzo di vendita per il cliente.
The Architect calcola in tempo reale il **Margine Reale** del progetto.
Stai lavorando in perdita? Lo saprai *mentre* accade.
        `
    },

    // --- SECTOR 3: CONTROL & EXPANSION (Expenses, Mobile, Analytics) ---
    {
        id: 'the-auditor',
        systemName: 'The Auditor',
        codeName: 'Expense AI',
        icon: FileText, // Was Receipt
        color: 'fuchsia',
        shortDescription: "La fine dei foglietti smarriti. I dipendenti fotografano gli scontrini, l'AI li digitalizza e li assegna ai progetti.",
        fullDescription: `
### Zero Carta. Zero Frodi.

Le note spese sono l'incubo di ogni amministrazione. Scontrini sbiaditi, persi, o peggio, "creativi".
**The Auditor** è il revisore contabile spietato che vive nel cloud.

#### Snap & Forget

Il tuo tecnico invita un cliente a pranzo.
1. Paga.
2. Apre l'app GeoTapp.
3. Fotografa lo scontrino.
Finito. Può buttare la carta.

#### Project Allocation

Il sistema chiede: "Per quale Progetto?".
Il tecnico seleziona "Cliente X".
La spesa viene immediatamente caricata sui costi di quel progetto (abbattendo il margine in tempo reale su The Architect).
A fine mese, l'amministrazione ha un report PDF perfetto.
        `
    },
    {
        id: 'the-uplink',
        systemName: 'The Uplink',
        codeName: 'Mobile Command',
        icon: Smartphone,
        color: 'orange',
        shortDescription: "L'ufficio è ovunque. App mobile nativa per i tecnici sul campo: foto, firme, rapportini e note spese in tempo reale.",
        fullDescription: `
### La Realtà è Fuori dall'Ufficio.

Le aziende vere hanno persone sul campo. Tecnici, venditori, installatori.
Se devono aspettare di tornare in ufficio per inserire i dati, hai perso mezza giornata di produttività.
**The Uplink** è l'estensione neurale del sistema nel mondo fisico.

#### Native Power (Flutter Engine)

Non è un "sito responsive". È un'app mobile potente, veloce, che usa la fotocamera, il GPS e le notifiche push.
Un tecnico finisce l'intervento:
1.  Apre l'app.
2.  Scatta foto del lavoro finito.
3.  Registra le ore (Time Log).
4.  Fa firmare il cliente col dito sullo schermo.
5.  Invia.

#### Sync Istantaneo

Nello stesso secondo, in ufficio, The Architect riceve il time log. Ledger Prime prepara la fattura.
Il ciclo è istantaneo.
        `
    },
    {
        id: 'the-oracle',
        systemName: 'The Oracle',
        codeName: 'BI Analytics',
        icon: BarChart3,
        color: 'indigo',
        shortDescription: "Guardare il passato per predire il futuro. Dashboard analitiche in tempo reale per Cash Flow, Churn Rate e Performance.",
        fullDescription: `
### Dati, Non Opinioni.

"Penso che stiamo andando bene". "Mi sembra che le vendite salgano".
Queste frasi sono proibite.
**The Oracle** non ha opinioni. Ha grafici.

#### La Dashboard Esecutiva

Appena fai login, vedi la verità nuda e cruda:
1.   **MRR (Monthly Recurring Revenue)**: Quanto fatturi automaticamente ogni mese.
2.   **Churn Rate**: Quanti clienti stai perdendo.
3.   **Cash Flow Forecast**: Quanti soldi avrai in banca tra 30 giorni basandosi sulle scadenze delle fatture.

Nessun foglio Excel da aggiornare. I dati sgorgano vivi dalle operazioni quotidiane.
Guida la tua azienda guardando il cruscotto, non lo specchietto retrovisore.
        `
    }
];
