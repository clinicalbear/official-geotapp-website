/**
 * Scheda-paese Croazia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. 43 della Zakon o zastiti na radu (legge sulla sicurezza sul lavoro) sui
 * dispositivi di sorveglianza, guida AZOP sul trattamento dei dati dei dipendenti
 * tramite GPS, lista AZOP dei trattamenti che richiedono una DPIA, pagina AZOP
 * per i reclami e GDPR.
 *
 * La Croazia ha un'unica autorita nazionale, l'AZOP: nessuna ripartizione
 * regionale. Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_ZZR_43 = {
  titolo:
    'Zakon o zastiti na radu (legge sicurezza sul lavoro), art. 43 (dispositivi di sorveglianza)',
  url: 'https://www.zakon.hr/z/167/zakon-o-zastiti-na-radu',
};
const FONTE_AZOP_GPS = {
  titolo:
    'AZOP (Garante croato), trattamento dei dati dei dipendenti tramite GPS',
  url: 'https://azop.hr/obrada-osobnih-podataka-zaposlenika-putem-gps-uredaja/',
};
const FONTE_AZOP_DPIA = {
  titolo: 'AZOP, lista dei trattamenti che richiedono una DPIA',
  url: 'https://azop.hr/odluka-o-uspostavi-i-javnoj-objavi-popisa-vrsta-postupaka-obrade-koje-podlijezu-zahtjevu-za-procjenu-ucinka-na-zastitu-podataka/',
};
const FONTE_AZOP_RECLAMO = {
  titolo: 'AZOP, richiesta di accertamento di violazione (reclamo)',
  url: 'https://azop.hr/zahtjev-za-utvrdivanje-povrede-prava/',
};
const FONTE_AZOP_HOME = {
  titolo: 'AZOP (Garante croato), pagina ufficiale',
  url: 'https://azop.hr/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const croazia: SchedaPaese = {
  codiceISO: 'HR',
  slugCanonico: 'croazia',
  nome: 'Croazia',
  nomi: {
    it: 'Croazia',
    en: 'Croatia',
    'en-us': 'Croatia',
    'en-gb': 'Croatia',
    'en-au': 'Croatia',
    'en-ie': 'Croatia',
    'en-ca': 'Croatia',
    de: 'Kroatien',
    nl: 'Kroatië',
    fr: 'Croatie',
    es: 'Croacia',
    pt: 'Croácia',
    da: 'Kroatien',
    sv: 'Kroatien',
    nb: 'Kroatia',
    ru: 'Хорватия',
  },
  bandiera: '🇭🇷',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'AZOP (Agencija za zastitu osobnih podataka)',
    urlFonte: FONTE_AZOP_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: "La Croazia ha un'unica autorita nazionale, l'AZOP; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: "Consenso preventivo del consiglio dei lavoratori se la sorveglianza segue tutti i movimenti per l'intero orario (Zakon o zastiti na radu, art. 43)",
      risposta: 'dipende',
      dettaglio:
        "Se i dispositivi seguono tutti i movimenti del lavoratore per l'intero orario, il datore puo usarli solo con il previo consenso del consiglio dei lavoratori (o del rappresentante sindacale con i relativi poteri). Vale dove tale organo esiste.",
      fonte: FONTE_ZZR_43,
    },
    {
      voce: "Informazione scritta al lavoratore all'assunzione e regole interne scritte (art. 43 + AZOP)",
      risposta: 'si',
      dettaglio:
        "Il datore deve informare per iscritto il lavoratore, gia all'assunzione, che sara sorvegliato, e disciplinare il GPS con regole interne scritte: non basta un'informazione orale.",
      fonte: FONTE_AZOP_GPS,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "Non serve un'autorizzazione preventiva dell'AZOP; il titolare valuta da se base giuridica e DPIA.",
      fonte: FONTE_AZOP_GPS,
    },
    {
      voce: 'Base = interesse legittimo (non il consenso) e proporzionalita; niente tracciamento fuori orario senza base',
      risposta: 'si',
      dettaglio:
        "La base e di norma l'interesse legittimo, non il consenso del lavoratore (squilibrio di potere); il trattamento deve essere proporzionato e non estendersi fuori dall'orario senza una base chiara.",
      fonte: FONTE_AZOP_GPS,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per i sistemi di tracciamento dei dipendenti (lista AZOP)",
      risposta: 'si',
      dettaglio:
        "La lista AZOP include il trattamento dei dati dei dipendenti tramite app o sistemi di tracciamento (del lavoro, dei movimenti, della comunicazione) tra quelli che richiedono una valutazione d'impatto.",
      fonte: FONTE_AZOP_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        "Se la sorveglianza segue tutti i movimenti per l'intero orario, ottieni il consenso del consiglio dei lavoratori (ZZR art. 43).",
    },
    {
      passo: 2,
      descrizione:
        'Disciplina il GPS con regole interne scritte e informa per iscritto i lavoratori.',
    },
    {
      passo: 3,
      descrizione:
        'Individua una base giuridica valida (di norma interesse legittimo) e documenta il bilanciamento.',
    },
    {
      passo: 4,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) per il sistema di tracciamento.",
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema in modo proporzionato: niente tracciamento fuori orario senza base.',
    },
  ],

  contatti: [
    {
      ente: 'AZOP, reclami',
      portale: FONTE_AZOP_RECLAMO.url,
      urlFonte: FONTE_AZOP_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: 'fino a 20 milioni di euro o 4% del fatturato (GDPR)',
    casoCitato:
      "Non risulta una multa dell'AZOP specifica e pubblicata per il GPS sui dipendenti. La tutela forte sta nella regola dell'art. 43 della legge sulla sicurezza sul lavoro: la sorveglianza che segue tutti i movimenti per l'intero orario richiede il previo consenso del consiglio dei lavoratori. Il rischio sanzionatorio resta quello generale del GDPR (art. 83).",
    urlFonte: FONTE_AZOP_GPS.url,
  },

  fonti: [
    FONTE_ZZR_43,
    FONTE_AZOP_GPS,
    FONTE_AZOP_DPIA,
    FONTE_AZOP_RECLAMO,
    FONTE_AZOP_HOME,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
