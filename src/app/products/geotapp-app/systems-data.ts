
import {
    Timer, CalendarDays, Users,
    MapPin, Zap, MessageSquare,
    Link, FileText, Palette
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
    // --- SECTOR 1: CORE OPERATIONS (Time, Schedule, People) ---
    {
        id: 'timelock-alpha',
        systemName: 'Timelock Alpha',
        codeName: 'Session Core',
        icon: Timer,
        color: 'cyan',
        shortDescription: "Timbrature smart geolocalizzate. Start/Stop su commessa precisi al secondo con verifica GPS.",
        fullDescription: `
### Il Tempo è Denaro. Proteggilo.

Basta fogli ore cartacei imprecisi. **Timelock Alpha** è il sistema definitivo per il tracciamento del lavoro su commessa.

#### Smart Geofencing
Il sistema permette l'inizio attività solo se il tecnico è effettivamente dal cliente. Niente più "Sono arrivato" dal bar.

#### Session History
Ogni sessione è un record immutabile: Orario Inizio, Orario Fine, Posizione GPS, Durata. Tutto assegnato alla commessa specifica.
        `
    },
    {
        id: 'event-horizon',
        systemName: 'Event Horizon',
        codeName: 'Temporal Grid',
        icon: CalendarDays,
        color: 'blue',
        shortDescription: "Pianificazione turni e interventi. Visualizzazione mensile e settimanale con gestione disponibilità.",
        fullDescription: `
### Sincronizzazione Totale.

Gestire il personale in movimento richiede precisione. **Event Horizon** offre una visione chiara di chi fa cosa, e quando.

#### Meeting Points
Definisci punti di ritrovo e orari di partenza. L'app notifica alla squadra dove farsi trovare.

#### Disponibilità Live
I dipendenti confermano la presenza o segnalano ferie direttamente dall'app. Il manager vede i buchi nella griglia prima che diventino problemi.
        `
    },
    {
        id: 'unit-matrix',
        systemName: 'Unit Matrix',
        codeName: 'Personnel Ops',
        icon: Users,
        color: 'indigo',
        shortDescription: "Anagrafica digitale completa. Gestione ruoli, certificazioni e inviti rapidi via WhatsApp.",
        fullDescription: `
### Conosci la Tua Squadra.

Ogni operatore è un nodo della rete. **Unit Matrix** centralizza tutte le informazioni vitali.

#### Gestione Certificazioni
Visualizza a colpo d'occhio chi ha il patentino aggiornato o l'abilitazione alla sicurezza necessaria per entrare in cantiere.

#### Onboarding Rapido
Devi aggiungere un nuovo tecnico? Invia un link magico via WhatsApp. In 30 secondi è operativo.
        `
    },

    // --- SECTOR 2: LOGISTICS & COMMS (Places, Fuel, Messages) ---
    {
        id: 'sector-grid',
        systemName: 'Sector Grid',
        codeName: 'Territory Ctrl',
        icon: MapPin,
        color: 'emerald',
        shortDescription: "Mappatura sedi e cantieri. Assegna le squadre alle zone operative corrette.",
        fullDescription: `
### Domina il Territorio.

Non lasciare le squadre allo sbaraglio. **Sector Grid** definisce i confini operativi.

#### Sedi & Cantieri
Crea un database dei tuoi clienti e cantieri. Il sistema sa se un operatore sta lavorando nel posto giusto.

#### Gruppi di Lavoro
Organizza i tecnici in squadre (Alpha, Bravo, Charlie). Assegna compiti al gruppo, non al singolo. Massima efficienza.
        `
    },
    {
        id: 'energy-logistics',
        systemName: 'Energy Logistics',
        codeName: 'Fuel Tracking',
        icon: Zap,
        color: 'orange',
        shortDescription: "Controllo spese carburante e rimborsi km. Gestione smart delle auto in uso al personale.",
        fullDescription: `
### Spese Sotto Controllo.

Le spese di trasferta sono una voce critica. **Energy Logistics** monitora ogni centesimo.

#### Digital Fuel Log
Il dipendente registra rifornimenti e costi direttamente alla pompa. Scatta una foto allo scontrino per l'archivio digitale.

#### Gestione Auto in Uso
Assegna temporaneamente un'auto a un dipendente per la trasferta. Saprai sempre chi la sta usando e per quale commessa.
        `
    },
    {
        id: 'neural-link',
        systemName: 'Neural Link',
        codeName: 'Comms Array',
        icon: MessageSquare,
        color: 'violet',
        shortDescription: "Bacheca aziendale interna. Invia comunicazioni mirate a singoli gruppi o a tutta l'azienda.",
        fullDescription: `
### Silenzio Radio? Mai Più.

WhatsApp è caotico e si mischia con la vita privata. **Neural Link** è il canale ufficiale per le comunicazioni operative.

#### Comunicazioni Mirate
Devi avvisare solo la squadra di Roma di un cambio turno? Fallo con un click. Nessun rumore di fondo per gli altri.

#### Read Receipts
Saprai sempre chi ha letto l'avviso e chi no. Responsabilità chiara e trasparente.
        `
    },

    // --- SECTOR 3: DATA & IDENTITY (Payroll, Reports, Branding) ---
    {
        id: 'payroll-bridge',
        systemName: 'Payroll Bridge',
        codeName: 'Studio Sync',
        icon: Link,
        color: 'pink',
        shortDescription: "Collegamento diretto con il consulente del lavoro. Export presenze compatibile Zucchetti/TeamSystem.",
        fullDescription: `
### Buste Paga Senza Mal di Testa.

La fine del mese non deve essere un incubo. **Payroll Bridge** collega l'operatività all'amministrazione.

#### Export Multi-Formato
Genera file presenze pronti per l'importazione nei software paghe più diffusi (Zucchetti, INAZ, TeamSystem).

#### Accesso Consulente
Dai un accesso limitato al tuo studio paghe. Possono scaricare i dati che servono in autonomia, senza telefonarti.
        `
    },
    {
        id: 'data-core',
        systemName: 'Data Core',
        codeName: 'Analytics',
        icon: FileText,
        color: 'slate',
        shortDescription: "Report settimanali dettagliati in CSV/Excel. Analisi ore lavorate per commessa.",
        fullDescription: `
### I Dati Non Mentono.

Prendi decisioni basate sui fatti, non sulle sensazioni. **Data Core** estrae valore dalle operazioni quotidiane.

#### Weekly Reports
Ogni venerdì, un report completo sulla scrivania (digitale). Chi ha lavorato, dove e quanto.

#### Totale Trasparenza
Dipendenti e Titolari scaricano lo stesso report mensile. Le ore contate sono identiche per tutti. Niente più contestazioni a fine mese.
        `
    },
    {
        id: 'identity-forge',
        systemName: 'Identity Forge',
        codeName: 'Whitelabel',
        icon: Palette,
        color: 'rose',
        shortDescription: "La TUA app. Carica il tuo logo e scegli il tema colori aziendale per un'esperienza brandizzata.",
        fullDescription: `
### Il Tuo Brand. La Tua App.

Non usare un'app generica. Fai sentire i tuoi dipendenti parte della TUA azienda.

#### Upload Logo
Il tuo logo troneggia nella schermata di login e nella dashboard.

#### Color Themes
Scegli tra i temi predefiniti (Classic Blue, Emerald, Sunset, Slate, Violet) quello che più si adatta alla tua immagine coordinata.
        `
    }
];
