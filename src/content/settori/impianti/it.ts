import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App per Installatori e Impiantisti: Gestione Interventi GPS | GeoTapp',
    description: 'Traccia interventi, ore e materiali per installatori e impiantisti con GPS. Prove di servizio automatiche, zero contestazioni clienti. Prova GeoTapp gratis.',
  },
  hero: {
    badge: 'App per installatori, impiantisti e tecnici',
    h1_line1: 'Ogni intervento documentato,',
    h1_line2: 'ogni ora tracciata.',
    subtitle: 'Per installatori elettrici, idraulici, termotecnici e impiantisti. GeoTapp unisce Flow + TimeTracker per tracciare GPS, ore e foto per ogni commessa — dal furgone all\'ufficio senza telefonate.',
    cta_primary: 'Prova GeoTapp gratis per 14 giorni',
    cta_note: 'Nessun vincolo. Nessuna carta di credito richiesta.',
  },
  pain: {
    title: 'Problemi che risolviamo ogni giorno',
    items: [
      {
        title: 'I clienti contestano le ore di intervento',
        desc: 'Timbrature GPS timestampate come prova inconfutabile. Il dato è certificato al momento dell\'intervento — non modificabile.',
      },
      {
        title: 'Rincorri i tecnici per sapere dove sono',
        desc: 'Mappa in tempo reale con lo stato di ogni intervento. Sai dove sono tutti i tuoi tecnici senza fare una telefonata.',
      },
      {
        title: 'Rapportini incompleti o mai consegnati',
        desc: 'I dati arrivano tardi, incompleti o non arrivano. Ricostruire ore e interventi a fine mese è un lavoro a parte che costa tempo e soldi.',
      },
    ],
  },
  workflow: {
    title: 'Come funziona',
    subtitle: 'Tre step semplici. Zero carta. Zero chiamate.',
    steps: [
      {
        title: 'Il tecnico timbra GPS all\'inizio intervento',
        desc: 'Apre la commessa dallo smartphone. GeoTapp registra coordinate GPS reali, timestamp e foto — tutto automatico, non modificabile.',
      },
      {
        title: 'Le ore si registrano automaticamente per commessa',
        desc: 'Ogni minuto lavorato viene associato alla commessa giusta. Il responsabile vede in tempo reale chi sta lavorando dove.',
      },
      {
        title: 'Il report cliente è generato senza digitare nulla',
        desc: 'A fine intervento il sistema genera un report con GPS, ore e firma digitale. Il cliente lo riceve e lo verifica in autonomia.',
      },
    ],
  },
  differenza: {
    title: 'App per impiantisti: timbratura o certificazione?',
    subtitle: 'La maggior parte delle app registra l\'orario. GeoTapp produce prove verificabili.',
    rows: [
      {
        label: 'Cosa registra',
        competitor: 'Orario di entrata/uscita',
        geotapp: 'Orario + GPS verificato + foto + attività svolta',
      },
      {
        label: 'Chi può verificare',
        competitor: 'Solo il tuo ufficio',
        geotapp: 'Tu, il committente, un ente terzo — in autonomia',
      },
      {
        label: 'In caso di contestazione',
        competitor: 'Dato non difendibile',
        geotapp: 'Report sigillato, non alterabile',
      },
      {
        label: 'Rapportino intervento',
        competitor: 'Manuale o assente',
        geotapp: 'Generato automaticamente con GPS e foto',
      },
      {
        label: 'Conformità GDPR',
        competitor: 'Spesso da verificare',
        geotapp: 'Conforme per design, modulistica inclusa',
      },
    ],
  },
  prima_dopo: {
    title: 'Cosa succede adesso. Cosa succede con GeoTapp.',
    prima: [
      'Il cliente contesta l\'ora di fine intervento e chiede uno sconto.',
      'Il tecnico dice "ho fatto 4 ore". Il cliente dice "ne risultano 2".',
      'Non hai prove. La discussione dura giorni e il pagamento è a rischio.',
      'A fine mese ricostruisci ore e commesse dai messaggi WhatsApp.',
    ],
    dopo: [
      'Il cliente contesta? Apri il report: foto, GPS, orario, firma digitale.',
      'Glielo mandi. La discussione finisce in un minuto.',
      'Il pagamento è al sicuro. Il tecnico è tutelato.',
      'A fine mese l\'export è già pronto — ore e commesse aggregate automaticamente.',
    ],
  },
  features: {
    title: 'Funzionalità pensate per installatori e impiantisti',
    items: [
      {
        title: 'Timbratura GPS verificabile',
        desc: 'Ogni ingresso e uscita è collegato a posizione, timestamp e commessa. Difendibile davanti al cliente e all\'ispettorato.',
      },
      {
        title: 'Prove fotografiche sigillate',
        desc: 'Il tecnico scatta foto dall\'app. Ogni immagine è collegata all\'intervento con GPS e timestamp — non alterabile dopo la generazione.',
      },
      {
        title: 'Gestione commesse multi-cantiere',
        desc: 'Assegna commesse, monitora l\'avanzamento di ogni intervento e ricevi alert automatici se un lavoro non viene aperto o chiuso nei tempi previsti.',
      },
      {
        title: 'Rapportini digitali automatici',
        desc: 'A fine intervento il rapportino è già pronto: ore, foto, note e firma. Niente carta, niente chiamate. Il tecnico lo invia al cliente dall\'app.',
      },
      {
        title: 'Export per la paga e fatturazione',
        desc: 'Esporta presenze mensili e ore per commessa. L\'elaborazione paghe e la fatturazione diventano operazioni di pochi minuti.',
      },
      {
        title: 'Conformità GDPR integrata',
        desc: 'Geolocalizzazione conforme per design alle normative GDPR. Modulistica per l\'informativa ai dipendenti inclusa.',
      },
    ],
  },
  testimonial: {
    quote: 'I clienti non contestano più le ore. Apriamo il report con GPS e foto e la discussione finisce lì.',
    author: 'Roberto F.',
    role: 'Titolare, azienda impiantistica — 20 tecnici',
  },
  faq: {
    title: 'Domande frequenti',
    subtitle: 'Quello che ci chiedono più spesso prima di iniziare.',
    items: [
      {
        q: 'I clienti contestano le ore di intervento?',
        a: 'Con GeoTapp le timbrature GPS sono timestampate al momento dell\'intervento e non modificabili. Costituiscono una prova inconfutabile delle ore svolte, eliminando qualsiasi contestazione.',
      },
      {
        q: 'Come monitoro più squadre su commesse diverse?',
        a: 'GeoTapp offre una mappa in tempo reale con lo stato di ogni intervento. Sai esattamente dove si trovano i tuoi tecnici e su quale commessa stanno lavorando, senza fare telefonate.',
      },
      {
        q: 'Come velocizzare la fatturazione degli interventi?',
        a: 'GeoTapp genera automaticamente l\'export di ore e commesse pronto per il gestionale. Nessun inserimento manuale, nessun rischio di errori — la fatturazione diventa un click.',
      },
    ],
  },
  cta: {
    title: 'Prova GeoTapp gratis per 14 giorni',
    subtitle: 'Nessun vincolo. Nessuna carta di credito richiesta. Risposta entro 12 ore lavorative.',
    primary: 'Inizia subito gratuitamente',
    secondary: 'Vedi i Prezzi',
  },
  pricing_hint: {
    label: 'A partire da',
    per: 'operatore/mese',
    note: 'Prova gratuita 14 giorni',
  },
  schema_sector_name: 'Impianti',
  schema_faq: [
    {
      question: 'I clienti contestano le ore di intervento?',
      answer: 'Con GeoTapp le timbrature GPS sono timestampate al momento dell\'intervento e non modificabili. Costituiscono una prova inconfutabile delle ore svolte, eliminando qualsiasi contestazione.',
    },
    {
      question: 'Come monitoro più squadre su commesse diverse?',
      answer: 'GeoTapp offre una mappa in tempo reale con lo stato di ogni intervento. Sai esattamente dove si trovano i tuoi tecnici e su quale commessa stanno lavorando, senza fare telefonate.',
    },
    {
      question: 'Come velocizzare la fatturazione degli interventi?',
      answer: 'GeoTapp genera automaticamente l\'export di ore e commesse pronto per il gestionale. Nessun inserimento manuale, nessun rischio di errori — la fatturazione diventa un click.',
    },
  ],
};

export default content;
