import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App per Installatori e Impiantisti: Gestione Interventi GPS | GeoTapp',
    description: 'Documenta interventi, ore e materiali per installatori e impiantisti, con la posizione alle timbrature. Prove di servizio automatiche, pronte da mostrare quando qualcuno contesta. Prova GeoTapp gratis.',
  },
  hero: {
    badge: 'App per installatori, impiantisti e tecnici',
    h1_line1: 'Ogni intervento documentato,',
    h1_line2: 'ogni ora registrata.',
    subtitle: 'Per installatori elettrici, idraulici, termotecnici e impiantisti. GeoTapp unisce Flow + TimeTracker per tracciare GPS, ore e foto per ogni commessa, dal furgone all\'ufficio senza telefonate.',
    cta_primary: 'Prova GeoTapp gratis per 14 giorni',
    cta_note: 'La prova non ti vincola a niente. Nessuna carta di credito richiesta.',
  },
  pain: {
    title: 'Problemi che risolviamo ogni giorno',
    items: [
      {
        title: 'I clienti contestano le ore di intervento',
        desc: 'Timbrature GPS timestampate come prova verificabile. Il dato è sigillato al momento dell\'intervento: ogni modifica successiva è rilevabile.',
      },
      {
        title: 'Rincorri i tecnici per sapere dove sono',
        desc: 'Ogni timbratura del tecnico arriva subito in dashboard, con orario e posizione. Sai dove sono stati senza fare una telefonata.',
      },
      {
        title: 'Rapportini incompleti o mai consegnati',
        desc: 'I dati arrivano tardi, incompleti o non arrivano. Ricostruire ore e interventi a fine mese è un lavoro a parte che costa tempo e soldi.',
      },
    ],
  },
  workflow: {
    title: 'Come funziona',
    subtitle: 'Tre passi semplici. Zero carta. Zero chiamate.',
    steps: [
      {
        title: 'Il tecnico timbra GPS all\'inizio intervento',
        desc: 'Apre la commessa dallo smartphone. GeoTapp registra coordinate GPS reali, timestamp e foto, tutto automatico: ogni modifica è rilevabile.',
      },
      {
        title: 'Le ore si registrano automaticamente per commessa',
        desc: 'Ogni minuto lavorato viene associato alla commessa giusta. Il responsabile vede, timbratura dopo timbratura, chi sta lavorando dove.',
      },
      {
        title: 'Il report cliente è generato senza digitare nulla',
        desc: 'A fine intervento il sistema genera un report con GPS, ore e sigillo. Il cliente lo riceve e lo verifica in autonomia.',
      },
    ],
  },
  differenza: {
    title: 'App per impiantisti: timbratura o prova verificabile?',
    subtitle: 'La maggior parte delle app registra l\'orario. GeoTapp produce prove verificabili.',
    rows: [
      {
        label: 'Cosa registra',
        competitor: 'Orario di entrata/uscita',
        geotapp: 'Orario + posizione alla timbratura + foto + attività svolta',
      },
      {
        label: 'Chi può verificare',
        competitor: 'Solo il tuo ufficio',
        geotapp: 'Tu, il committente, un ente terzo, in autonomia',
      },
      {
        label: 'In caso di contestazione',
        competitor: 'Solo la tua parola',
        geotapp: 'Report sigillato, ogni modifica è rilevabile',
      },
      {
        label: 'Rapportino intervento',
        competitor: 'Manuale o assente',
        geotapp: 'Generato automaticamente con GPS e foto',
      },
      {
        label: 'Conformità GDPR',
        competitor: 'Spesso da verificare',
        geotapp: 'Costruito per stare nei paletti del GDPR, modulistica inclusa',
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
      'Il cliente contesta? Apri il report: foto, posizione, orari, sigillo.',
      'Glielo mandi. La discussione finisce in un minuto.',
      'Hai una prova da mostrare. Anche il tecnico ha qualcosa in mano.',
      'A fine mese l\'export è già pronto, ore e commesse aggregate automaticamente.',
    ],
  },
  features: {
    title: 'Funzionalità pensate per installatori e impiantisti',
    items: [
      {
        title: 'Timbratura GPS verificabile',
        desc: 'Ogni entrata, pausa e uscita è collegata a posizione, ora e commessa. Da mostrare al cliente o all\'ispettorato quando serve.',
      },
      {
        title: 'Prove fotografiche sigillate',
        desc: 'Il tecnico scatta foto dall\'app. Ogni immagine è collegata all\'intervento con GPS e timestamp: ogni modifica successiva alla generazione è rilevabile.',
      },
      {
        title: 'Gestione commesse multi-cantiere',
        desc: 'Assegna commesse, segui l\'avanzamento di ogni intervento e ricevi un avviso se un turno resta aperto.',
      },
      {
        title: 'Rapportini digitali automatici',
        desc: 'A fine intervento il rapportino è già pronto: ore, foto e note. Niente carta, niente chiamate. L\'ufficio lo manda al cliente da Flow con un clic.',
      },
      {
        title: 'Export per la paga e fatturazione',
        desc: 'Esporta presenze mensili e ore per commessa. Paghe e fatturazione partono dai dati già pronti, senza ricopiare niente.',
      },
      {
        title: 'Posizione solo quando si timbra',
        desc: 'Geolocalizzazione costruita per stare dentro i paletti del GDPR: mai in continuo, e informativa ai dipendenti firmata nell\'app prima di timbrare.',
      },
    ],
  },
  testimonial: {
    quote: 'Quando un cliente contesta le ore, apriamo il report con posizione e foto e lui lo controlla da solo.',
    author: 'Roberto F.',
    role: 'Titolare, azienda impiantistica, 20 tecnici',
  },
  faq: {
    title: 'Domande frequenti',
    subtitle: 'Quello che ci chiedono più spesso prima di iniziare.',
    items: [
      {
        q: 'I clienti contestano le ore di intervento?',
        a: 'Con GeoTapp le timbrature GPS sono timestampate al momento dell\'intervento e ogni modifica è rilevabile. Sono una prova verificabile delle ore svolte quando qualcuno le mette in dubbio.',
      },
      {
        q: 'Come seguo più squadre su commesse diverse?',
        a: 'GeoTapp mostra le timbrature di oggi su mappa, aggiornate a ogni intervento aperto o chiuso. Sai su quale commessa stanno lavorando i tuoi tecnici, senza fare telefonate.',
      },
      {
        q: 'Come velocizzare la fatturazione degli interventi?',
        a: 'GeoTapp genera automaticamente l\'export di ore e commesse pronto per il gestionale. Niente da ricopiare a mano: meno errori, e la fatturazione parte dai dati già pronti.',
      },
    ],
  },
  cta: {
    title: 'Prova GeoTapp gratis per 14 giorni',
    subtitle: 'La prova non ti vincola a niente. Nessuna carta di credito richiesta.',
    primary: 'Prova gratis per 14 giorni',
    secondary: 'Vedi i Prezzi',
  },
  pricing_hint: {
    label: 'Postazioni TimeTracker da',
    per: 'per operatore al mese, più il piano Flow da 39 € al mese',
    note: 'Prova gratuita 14 giorni',
  },
  schema_sector_name: 'Impianti',
  schema_faq: [
    {
      question: 'I clienti contestano le ore di intervento?',
      answer: 'Con GeoTapp le timbrature GPS sono timestampate al momento dell\'intervento e ogni modifica è rilevabile. Sono una prova verificabile delle ore svolte quando qualcuno le mette in dubbio.',
    },
    {
      question: 'Come seguo più squadre su commesse diverse?',
      answer: 'GeoTapp mostra le timbrature di oggi su mappa, aggiornate a ogni intervento aperto o chiuso. Sai su quale commessa stanno lavorando i tuoi tecnici, senza fare telefonate.',
    },
    {
      question: 'Come velocizzare la fatturazione degli interventi?',
      answer: 'GeoTapp genera automaticamente l\'export di ore e commesse pronto per il gestionale. Niente da ricopiare a mano: meno errori, e la fatturazione parte dai dati già pronti.',
    },
  ],
};

export default content;
