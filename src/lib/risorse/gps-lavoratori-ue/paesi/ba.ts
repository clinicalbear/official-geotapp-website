/**
 * Scheda-paese Bosnia ed Erzegovina per la risorsa "GPS sui lavoratori in UE".
 *
 * Attenzione: la Bosnia ed Erzegovina NON e' UE; e' un paese candidato. Dal 2025
 * ha una NUOVA legge sulla protezione dei dati personali (Gazzetta ufficiale BiH
 * n. 12/25), allineata al GDPR, in vigore dall'8 marzo 2025 e applicabile da fine
 * ottobre 2025. Non e' piu' il vecchio regime del 2006.
 *
 * Contenuti basati su fonti verificate e citate nella sezione "Fonti": nuova legge
 * 12/25, lista AZLP dei trattamenti che richiedono una DPIA (novembre 2025, include
 * il monitoraggio dei dipendenti e il GPS), pagina ufficiale dell'AZLP, analisi DLA
 * Piper sul quadro bosniaco e GDPR come riferimento comparativo. L'autorita' garante
 * e' unica e nazionale (AZLP); non c'e' ripartizione per entita'. Nessun numero, URL
 * o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti citate.
const FONTE_LEGGE_12_25 = {
  titolo:
    'Nuova Legge sulla protezione dei dati personali (Gazzetta BiH 12/25, in vigore 2025)',
  url: 'https://parser.hr/en/new-law-on-personal-data-protection-in-bosnia-and-herzegovina/',
};
const FONTE_AZLP_DPIA = {
  titolo:
    'AZLP, lista dei trattamenti che richiedono una DPIA (novembre 2025, include il monitoraggio dei dipendenti e il GPS)',
  url: 'https://bdkadvokati.com/bosnian-data-protection-agency-issues-a-list-of-processing-operations-requiring-a-dpia/',
};
const FONTE_AZLP = {
  titolo: 'AZLP (Garante bosniaco), pagina ufficiale',
  url: 'https://azlp.ba/',
};
const FONTE_DLA_PIPER = {
  titolo: 'DLA Piper, protezione dei dati in Bosnia ed Erzegovina',
  url: 'https://www.dlapiperdataprotection.com/?t=law&c=BA',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) - riferimento comparativo',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const bosnia: SchedaPaese = {
  codiceISO: 'BA',
  slugCanonico: 'bosnia-erzegovina',
  nome: 'Bosnia ed Erzegovina',
  nomi: {
    it: 'Bosnia ed Erzegovina',
    en: 'Bosnia and Herzegovina',
    'en-us': 'Bosnia and Herzegovina',
    'en-gb': 'Bosnia and Herzegovina',
    'en-au': 'Bosnia and Herzegovina',
    'en-ie': 'Bosnia and Herzegovina',
    'en-ca': 'Bosnia and Herzegovina',
    de: 'Bosnien und Herzegowina',
    nl: 'Bosnië en Herzegovina',
    fr: 'Bosnie-Herzégovine',
    es: 'Bosnia y Herzegovina',
    pt: 'Bósnia e Herzegovina',
    da: 'Bosnien-Hercegovina',
    sv: 'Bosnien och Hercegovina',
    nb: 'Bosnia-Hercegovina',
    ru: 'Босния и Герцеговина',
  },
  bandiera: '🇧🇦',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'AZLP (Agenzia per la protezione dei dati personali della BiH)',
    portale: 'https://azlp.ba/',
    urlFonte: 'https://azlp.ba/',
    verificatoIl: '2026-06-15',
    note: "La Bosnia ed Erzegovina e' un paese candidato, fuori dall'UE; dal 2025 ha una nuova legge allineata al GDPR. Unica autorita' nazionale, l'AZLP; nessuna ripartizione per entita'.",
  },

  checklist: [
    {
      voce: 'Informazione ai lavoratori e base giuridica valida (nuova legge 12/25)',
      risposta: 'si',
      dettaglio:
        "La nuova legge, allineata al GDPR, richiede una base giuridica tra le sei previste e l'informazione ai lavoratori per il trattamento dei loro dati, incluso il GPS.",
      fonte: FONTE_LEGGE_12_25,
    },
    {
      voce: "Autorizzazione o registrazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "La nuova legge sostituisce l'obbligo generale di registrazione presso l'Agenzia con la tenuta di un registro interno dei trattamenti.",
      fonte: FONTE_DLA_PIPER,
    },
    {
      voce: 'Base = interesse legittimo, non il consenso',
      risposta: 'si',
      dettaglio:
        "La base usuale e' l'interesse legittimo; nel rapporto di lavoro il consenso e' una base debole per lo squilibrio di potere.",
      fonte: FONTE_LEGGE_12_25,
    },
    {
      voce: 'Proporzionalita e minimizzazione del trattamento',
      risposta: 'si',
      dettaglio:
        "Il trattamento deve rispettare la minimizzazione e la proporzionalita, in linea con l'allineamento al GDPR.",
      fonte: FONTE_LEGGE_12_25,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per il monitoraggio dei dipendenti, incluso il GPS (lista AZLP, novembre 2025)",
      risposta: 'si',
      dettaglio:
        "La lista AZLP include espressamente il trattamento dei dati dei dipendenti tramite app o sistemi di monitoraggio, inclusi i sistemi GPS sui veicoli, tra i casi che richiedono una valutazione d'impatto.",
      fonte: FONTE_AZLP_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Individua una base giuridica valida (interesse legittimo) e tieni il registro interno dei trattamenti.',
    },
    {
      passo: 2,
      descrizione: 'Informa i lavoratori sul trattamento (GPS incluso).',
    },
    {
      passo: 3,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio dei dipendenti.",
    },
    {
      passo: 4,
      descrizione: 'Applica minimizzazione e proporzionalita.',
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema in modo proporzionato alla finalita dichiarata.',
    },
  ],

  contatti: [
    {
      ente: 'AZLP',
      portale: 'https://azlp.ba/',
      urlFonte: 'https://azlp.ba/',
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo:
      'fino a 40 milioni di BAM o 4% del fatturato (nuova legge in stile GDPR)',
    casoCitato:
      "Non risulta una multa dell'AZLP specifica e pubblicata per il GPS sui dipendenti. Con la nuova legge del 2025 le sanzioni sono in stile GDPR: fino a 40 milioni di BAM o il 4% del fatturato annuo mondiale. L'AZLP ha classificato il monitoraggio dei dipendenti tramite GPS come trattamento ad alto rischio che richiede una valutazione d'impatto.",
    urlFonte:
      'https://parser.hr/en/new-law-on-personal-data-protection-in-bosnia-and-herzegovina/',
  },

  fonti: [
    FONTE_LEGGE_12_25,
    FONTE_AZLP_DPIA,
    FONTE_AZLP,
    FONTE_DLA_PIPER,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
