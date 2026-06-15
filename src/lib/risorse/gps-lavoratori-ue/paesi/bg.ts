/**
 * Scheda-paese Bulgaria per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Legge bulgara sulla protezione dei dati (ZZLD), art. 25ж e 25и, guida del CPDP
 * sulla privacy sul luogo di lavoro, lista CPDP dei trattamenti che richiedono una
 * DPIA, parere CPDP sul caso LUKOIL e GDPR.
 *
 * La Bulgaria ha un'unica autorita' nazionale, il CPDP: nessuna ripartizione
 * regionale. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_ZZLD_25ZH = {
  titolo:
    'Legge sulla protezione dei dati (ZZLD), art. 25ж e 25и (controllo sul lavoro e monitoraggio su larga scala)',
  url: 'https://www.apis.bg/uploads/assets/Konsolidiran_ZZLD.pdf',
};
const FONTE_CPDP_GUIDA = {
  titolo: 'CPDP (Garante bulgaro), guida sulla privacy sul luogo di lavoro (GPS)',
  url: 'https://cpdp.bg/wp-content/uploads/2023/12/Guidelines__Privacy_protection_in_the_workplace_BG.pdf',
};
const FONTE_CPDP_DPIA = {
  titolo: 'CPDP, lista dei trattamenti che richiedono una DPIA (art. 35.4)',
  url: 'https://cpdp.bg/кзлд-прие-списък-на-видовете-операции/',
};
const FONTE_CPDP_LUKOIL = {
  titolo:
    'CPDP, parere su LUKOIL (riuso della videosorveglianza per valutare i dipendenti)',
  url: 'https://cpdp.bg/становище-на-кзлд-относно-законосъоб-5/',
};
const FONTE_CPDP_SITO = {
  titolo: 'CPDP (Garante bulgaro), pagina ufficiale',
  url: 'https://cpdp.bg/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const bulgaria: SchedaPaese = {
  codiceISO: 'BG',
  slugCanonico: 'bulgaria',
  nome: 'Bulgaria',
  nomi: {
    it: 'Bulgaria',
    en: 'Bulgaria',
    'en-us': 'Bulgaria',
    'en-gb': 'Bulgaria',
    'en-au': 'Bulgaria',
    'en-ie': 'Bulgaria',
    'en-ca': 'Bulgaria',
    de: 'Bulgarien',
    nl: 'Bulgarije',
    fr: 'Bulgarie',
    es: 'Bulgaria',
    pt: 'Bulgária',
    da: 'Bulgarien',
    sv: 'Bulgarien',
    nb: 'Bulgaria',
    ru: 'Болгария',
  },
  bandiera: '🇧🇬',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'CPDP (Komisia za zashtita na lichnite danni)',
    portale: FONTE_CPDP_SITO.url,
    urlFonte: FONTE_CPDP_SITO.url,
    verificatoIl: '2026-06-15',
    note: "La Bulgaria ha un'unica autorita nazionale, il CPDP; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: "Regole interne e informazione ai lavoratori sui sistemi di controllo dell'accesso, dell'orario e della disciplina (ZZLD art. 25ж)",
      risposta: 'si',
      dettaglio:
        "Il datore deve adottare regole e procedure interne quando introduce sistemi di controllo dell'accesso, dell'orario e della disciplina del lavoro, indicandone ambito, obblighi e metodi, e portarle a conoscenza dei lavoratori.",
      fonte: FONTE_ZZLD_25ZH,
    },
    {
      voce: 'Regole speciali per il monitoraggio sistematico su larga scala, inclusa la videosorveglianza (art. 25и)',
      risposta: 'dipende',
      dettaglio:
        'Per il monitoraggio sistematico su larga scala di zone accessibili al pubblico, inclusa la videosorveglianza, servono regole speciali su basi giuridiche, finalita, ambito, conservazione e informazione.',
      fonte: FONTE_ZZLD_25ZH,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        'Non serve un\'autorizzazione preventiva del CPDP; il titolare adotta da se le regole interne e svolge la DPIA quando richiesta.',
      fonte: FONTE_CPDP_DPIA,
    },
    {
      voce: "Base = interesse legittimo (non il consenso, per lo squilibrio di potere); proporzionalita; niente tracciamento durante l'uso privato del veicolo",
      risposta: 'si',
      dettaglio:
        "Per il CPDP il consenso difficilmente e libero nel rapporto di lavoro; la base e l'interesse legittimo, il trattamento deve essere proporzionato e il datore non puo usare dispositivi di tracciamento durante l'uso privato del veicolo.",
      fonte: FONTE_CPDP_GUIDA,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per il trattamento dei dati di localizzazione con profilazione o per il monitoraggio sistematico",
      risposta: 'si',
      dettaglio:
        "La lista CPDP include il trattamento dei dati di localizzazione a fini di profilazione con effetti significativi; il monitoraggio sistematico dei dipendenti rientra tra i casi ad alto rischio che richiedono una valutazione d'impatto.",
      fonte: FONTE_CPDP_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Adotta regole interne sui sistemi di controllo e portale a conoscenza dei lavoratori (art. 25ж).',
    },
    {
      passo: 2,
      descrizione:
        'Individua una base giuridica valida (interesse legittimo, non il consenso) e documenta la proporzionalita.',
    },
    {
      passo: 3,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio sistematico o i dati di localizzazione.",
    },
    {
      passo: 4,
      descrizione: 'Informa i lavoratori prima dell\'attivazione (art. 13 GDPR).',
    },
    {
      passo: 5,
      descrizione:
        "Configura il sistema: niente tracciamento durante l'uso privato del veicolo, solo per le finalita dichiarate.",
    },
  ],

  contatti: [
    {
      ente: 'CPDP',
      portale: FONTE_CPDP_SITO.url,
      urlFonte: FONTE_CPDP_SITO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: 'fino a 20 milioni di euro o 4% del fatturato (GDPR)',
    casoCitato:
      'Non risulta una multa del CPDP specifica e pubblicata per il GPS sui dipendenti. In un parere del 24 novembre 2023 il CPDP ha ritenuto inammissibile il riuso delle registrazioni di videosorveglianza per valutare il rendimento dei dipendenti di LUKOIL Bulgaria (riuso incompatibile, art. 6 par. 4 GDPR), senza multa. Il rischio sanzionatorio resta quello generale del GDPR (art. 83).',
    urlFonte: FONTE_CPDP_LUKOIL.url,
  },

  fonti: [
    FONTE_ZZLD_25ZH,
    FONTE_CPDP_GUIDA,
    FONTE_CPDP_DPIA,
    FONTE_CPDP_LUKOIL,
    FONTE_CPDP_SITO,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
