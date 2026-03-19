import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Prova Verificabile degli Interventi per Installatori e Manutentori | GeoTapp',
    description: 'GeoTapp trasforma ogni intervento in prova verificabile per installatori, elettricisti e manutentori. Report sigillati con GPS, foto e sigillo ECDSA — zero contestazioni su ore e lavori svolti.',
  },
  hero: {
    badge: 'Software per Installatori, Elettricisti, Idraulici e Manutentori',
    h1_line1: 'Software per installatori e manutentori:',
    h1_line2: 'interventi, rapportini e ore più chiare',
    subtitle: 'GeoTapp unisce Flow + TimeTracker per chi lavora tra furgoni, cantieri e clienti finali. Le app Android e iOS aiutano il tecnico sul campo; l\'ufficio vede commessa, tempi, prove fotografiche e note senza rincorrere nessuno.',
    cta_primary: 'Richiedi una Demo',
    cta_note: 'Nessun vincolo. Risposta entro 12 ore lavorative.',
  },
  pain: {
    title: 'Il problema che conosci già',
    items: [
      {
        title: 'Contestazioni su ore e interventi',
        desc: 'Il cliente nega l\'orario. Il tecnico non ha prove. La disputa si trascina settimane e costa più dell\'intervento stesso.',
      },
      {
        title: 'Ufficio che rincorre il campo',
        desc: 'Il responsabile chiama i tecnici per sapere dove sono, cosa hanno fatto, quando finiscono. Ogni telefonata è un\'interruzione per entrambi.',
      },
      {
        title: 'Rapportini incompleti o persi',
        desc: 'Foglietti, WhatsApp, email: i dati arrivano incompleti, in ritardo o non arrivano. Ricostruire il consuntivo è un lavoro a parte.',
      },
    ],
  },
  workflow: {
    title: 'Come funziona in tre passi',
    subtitle: 'Dal furgone all\'ufficio senza telefonate.',
    steps: [
      {
        title: 'Il tecnico timbra sul campo',
        desc: 'Con GeoTapp TimeTracker registra ingresso, uscita, foto e note direttamente dallo smartphone. GPS verificato, GDPR rispettato.',
      },
      {
        title: 'L\'ufficio vede tutto in tempo reale',
        desc: 'Flow riceve i dati istantaneamente. Il responsabile vede commessa, avanzamento, tecnico assegnato e prove fotografiche senza chiamare.',
      },
      {
        title: 'Il report è una prova verificabile',
        desc: 'A fine intervento il report è sigillato con dati GPS reali e prove fotografiche. Il sigillo ECDSA rende qualsiasi modifica rilevabile. Il cliente può verificare l\'autenticità da solo — nessuna contestazione possibile.',
      },
    ],
  },
  features: {
    title: 'Quello che ottieni',
    items: [
      {
        title: 'Timbratura GPS verificabile',
        desc: 'Ogni ingresso e uscita è collegato a posizione, timestamp e commessa. Difendibile davanti al cliente e all\'ispettorato.',
      },
      {
        title: 'Prove fotografiche sigillate',
        desc: 'Il tecnico scatta foto dall\'app. Ogni immagine è collegata all\'intervento con GPS e timestamp, poi inclusa nel sigillo crittografico del report. Nessuno può alterarle senza che il sistema lo rilevi.',
      },
      {
        title: 'Export per la paga',
        desc: 'Esporta presenze mensili compatibili con Zucchetti, INAZ, TeamSystem. L\'elaborazione paghe diventa un\'operazione di 10 minuti.',
      },
    ],
  },
  testimonial: {
    quote: 'Prima passavamo ore a raccogliere i fogli dal campo. Ora il rapportino è già pronto quando il tecnico torna al furgone.',
    author: 'Marco R.',
    role: 'Responsabile operativo, impianti civili',
  },
  faq: {
    title: 'Domande frequenti',
    subtitle: 'Quello che ci chiedono più spesso prima di iniziare.',
    items: [
      {
        q: 'GeoTapp è adatto come software per installatori e manutentori?',
        a: 'Sì. GeoTapp aiuta installatori, elettricisti, idraulici e manutentori a gestire interventi, rapportini, ore, trasferte e prove del lavoro svolto tra campo e ufficio.',
      },
      {
        q: 'Posso usare GeoTapp per rapportini intervento e prove fotografiche?',
        a: 'Sì. TimeTracker raccoglie foto, note e timbrature verificabili sul campo, mentre Flow collega tutto alla commessa e allo storico operativo.',
      },
      {
        q: 'GeoTapp aiuta a ridurre contestazioni su ore e lavori svolti?',
        a: 'È questo uno dei casi d\'uso principali: tempi, posizione, note e prove fotografiche rendono la ricostruzione dell\'intervento più chiara e più difendibile.',
      },
    ],
  },
  cta: {
    title: 'Il lavoro c\'è stato. Ora dimostralo.',
    subtitle: 'GeoTapp genera prove verificabili di ogni intervento — report sigillati che il cliente può controllare da solo.',
    primary: 'Richiedi una Demo',
    secondary: 'Vedi i Prezzi',
  },
  schema_sector_name: 'Installatori',
};

export default content;
