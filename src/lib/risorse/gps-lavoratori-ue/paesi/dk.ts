/**
 * Scheda-paese Danimarca per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * la guida del Datatilsynet sul controllo dei dipendenti (Kontrol af
 * medarbejdere), la lista danese dei trattamenti che richiedono sempre una
 * valutazione d'impatto, i controlli 2020 del Datatilsynet sull'obbligo di
 * informazione (GPS e videosorveglianza), il sito ufficiale del Datatilsynet
 * e il GDPR.
 *
 * La Danimarca ha un'unica autorita nazionale, il Datatilsynet. Particolarita:
 * le multe non le impone l'autorita, ma i tribunali su segnalazione del
 * Datatilsynet alla polizia. Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_DATATILSYNET_GUIDA = {
  titolo:
    'Datatilsynet, guida sul controllo dei dipendenti (Kontrol af medarbejdere)',
  url: 'https://www.datatilsynet.dk/Media/638348919997326341/Kontrol%20af%20medarbejdere.pdf',
};
const FONTE_DATATILSYNET_DPIA = {
  titolo:
    "Datatilsynet, lista dei trattamenti che richiedono una valutazione d'impatto",
  url: 'https://www.datatilsynet.dk/Media/4/1/Datatilsynets%20liste%20over%20behandlinger%20der%20altid%20er%20underlagt%20kravet%20om%20en%20konsekvensanalyse%20(2).pdf',
};
const FONTE_DATATILSYNET_CONTROLLI_2020 = {
  titolo:
    'Datatilsynet, controlli 2020 sull\'obbligo di informazione (GPS e videosorveglianza)',
  url: 'https://www.datatilsynet.dk/presse-og-nyheder/nyhedsarkiv/2020/aug/nye-afgoerelser-tilsyn-med-efterlevelse-af-oplysningspligten-',
};
const FONTE_DATATILSYNET = {
  titolo: 'Datatilsynet (autorita garante danese)',
  url: 'https://www.datatilsynet.dk/english',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const danimarca: SchedaPaese = {
  codiceISO: 'DK',
  slugCanonico: 'danimarca',
  nome: 'Danimarca',
  nomi: {
    it: 'Danimarca',
    en: 'Denmark',
    'en-us': 'Denmark',
    'en-gb': 'Denmark',
    'en-au': 'Denmark',
    'en-ie': 'Denmark',
    'en-ca': 'Denmark',
    de: 'Dänemark',
    nl: 'Denemarken',
    fr: 'Danemark',
    es: 'Dinamarca',
    pt: 'Dinamarca',
    da: 'Danmark',
    sv: 'Danmark',
    nb: 'Danmark',
    ru: 'Дания',
  },
  bandiera: '🇩🇰',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Datatilsynet (autorita garante danese)',
    portale: FONTE_DATATILSYNET.url,
    urlFonte: FONTE_DATATILSYNET.url,
    verificatoIl: '2026-06-15',
    note: "La Danimarca ha un'unica autorita nazionale, il Datatilsynet. Particolarita: le multe non le impone l'autorita, ma i tribunali su segnalazione del Datatilsynet alla polizia.",
  },

  checklist: [
    {
      voce: 'Motivo oggettivo (saglig grund) e proporzionalita del controllo',
      risposta: 'si',
      dettaglio:
        'Il controllo dei dipendenti deve avere un motivo oggettivo e legittimo ed essere proporzionato; non e ammessa una pura sorveglianza del rendimento.',
      fonte: FONTE_DATATILSYNET_GUIDA,
    },
    {
      voce: 'Base giuridica: accordo collettivo sui controlli, oppure legittimo interesse',
      risposta: 'dipende',
      dettaglio:
        "Se un accordo collettivo sui controlli (es. l'accordo DA/LO) copre il monitoraggio, la base e la legge danese sulla protezione dei dati; in assenza, la base e il legittimo interesse del datore privato. Gli accordi collettivi impongono proprie regole di preavviso.",
      fonte: FONTE_DATATILSYNET_GUIDA,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "Non serve un'autorizzazione preventiva del Datatilsynet; vale la responsabilizzazione piu l'obbligo di informazione.",
      fonte: FONTE_DATATILSYNET_GUIDA,
    },
    {
      voce: 'Informazione preventiva ai lavoratori (al piu tardi all\'attivazione, art. 13 GDPR)',
      risposta: 'si',
      dettaglio:
        "I lavoratori vanno informati, al piu tardi al momento dell'attivazione del controllo, su scopo, portata e uso dei dati, in forma chiara e accessibile.",
      fonte: FONTE_DATATILSYNET_GUIDA,
    },
    {
      voce: 'GPS solo per finalita legittima, senza riuso per sorvegliare comportamento o posizione del conducente; disattivabile in uso privato',
      risposta: 'si',
      dettaglio:
        "Il GPS sui veicoli e ammesso per pianificare i percorsi, monitorare il trasporto o per la sicurezza dei dipendenti, ma i dati non possono essere riusati per sorvegliare comportamento o posizione del conducente; se l'uso privato e consentito, il dipendente deve poter spegnere il GPS.",
      fonte: FONTE_DATATILSYNET_GUIDA,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per i dati di localizzazione combinati con un altro criterio",
      risposta: 'si',
      dettaglio:
        "La lista danese richiede sempre una valutazione d'impatto per il trattamento di dati di localizzazione in combinazione con almeno un altro criterio (linee guida WP248).",
      fonte: FONTE_DATATILSYNET_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Verifica un motivo oggettivo (saglig grund) e la proporzionalita del controllo.',
    },
    {
      passo: 2,
      descrizione:
        "Individua la base giuridica: accordo collettivo sui controlli, oppure legittimo interesse; rispetta gli eventuali preavvisi dell'accordo collettivo.",
    },
    {
      passo: 3,
      descrizione:
        "Informa i lavoratori al piu tardi al momento dell'attivazione (art. 13 GDPR).",
    },
    {
      passo: 4,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) per i dati di localizzazione.",
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema: solo finalita dichiarata, niente riuso per sorvegliare il conducente, spegnimento in uso privato.',
    },
  ],

  contatti: [
    {
      ente: 'Datatilsynet',
      portale: FONTE_DATATILSYNET.url,
      urlFonte: FONTE_DATATILSYNET.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo:
      'decisa dai tribunali (fino a 20 milioni di euro o 4% del fatturato, art. 83 GDPR)',
    casoCitato:
      "In Danimarca le sanzioni GDPR non le impone l'autorita garante: il Datatilsynet segnala il caso alla polizia e il tribunale fissa la multa. Nei controlli del 2020 su GPS e videosorveglianza dei dipendenti senza informativa, il Datatilsynet ha espresso 'critica seria' (alvorlig kritik) in tre casi su cinque, non multe in denaro.",
    urlFonte: FONTE_DATATILSYNET_CONTROLLI_2020.url,
  },

  fonti: [
    FONTE_DATATILSYNET_GUIDA,
    FONTE_DATATILSYNET_DPIA,
    FONTE_DATATILSYNET_CONTROLLI_2020,
    FONTE_DATATILSYNET,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
