/**
 * Scheda-paese Malta per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * guida dell'IDPC (Garante maltese) al settore del lavoro, guida IDPC alla
 * valutazione d'impatto sulla protezione dei dati, pagina IDPC per presentare un
 * reclamo, decisione IDPC CDP/COMP/426/2022 sulla videosorveglianza dei
 * dipendenti, Data Protection Act (Cap. 586) e GDPR.
 *
 * Malta ha un'unica autorita nazionale, l'IDPC: nessuna ripartizione regionale.
 * Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_IDPC_LAVORO = {
  titolo: 'IDPC (Garante maltese), guida al settore del lavoro',
  url: 'https://idpc.org.mt/for-organisations/employment-sector/',
};
const FONTE_IDPC_DPIA = {
  titolo: "IDPC, valutazione d'impatto sulla protezione dei dati",
  url: 'https://idpc.org.mt/for-organisations/data-protection-impact-assessment/',
};
const FONTE_IDPC_RECLAMO = {
  titolo: 'IDPC, presentare un reclamo',
  url: 'https://idpc.org.mt/file-a-complaint/',
};
const FONTE_IDPC_DECISIONE = {
  titolo:
    'IDPC, decisione CDP/COMP/426/2022 (videosorveglianza dei dipendenti)',
  url: 'https://idpc.org.mt/wp-content/uploads/2023/11/CDP_COMP_426_2022.pdf',
};
const FONTE_DATA_PROTECTION_ACT = {
  titolo: 'Data Protection Act (Cap. 586)',
  url: 'https://idpc.org.mt/wp-content/uploads/2020/07/CAP-586.pdf',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const malta: SchedaPaese = {
  codiceISO: 'MT',
  slugCanonico: 'malta',
  nome: 'Malta',
  nomi: {
    it: 'Malta',
    en: 'Malta',
    'en-us': 'Malta',
    'en-gb': 'Malta',
    'en-au': 'Malta',
    'en-ie': 'Malta',
    'en-ca': 'Malta',
    de: 'Malta',
    nl: 'Malta',
    fr: 'Malte',
    es: 'Malta',
    pt: 'Malta',
    da: 'Malta',
    sv: 'Malta',
    nb: 'Malta',
    ru: 'Мальта',
  },
  bandiera: '🇲🇹',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'IDPC (Information and Data Protection Commissioner)',
    portale: FONTE_IDPC_RECLAMO.url,
    urlFonte: FONTE_IDPC_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: "Malta ha un'unica autorita nazionale, l'IDPC; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: 'Informazione preventiva ai lavoratori (art. 13) e misura strettamente necessaria e proporzionata',
      risposta: 'si',
      dettaglio:
        "ogni misura di monitoraggio deve essere strettamente necessaria e proporzionata, scegliendo il mezzo meno invasivo, e i lavoratori vanno informati in modo chiaro prima dell'inizio del monitoraggio, mai dopo.",
      fonte: FONTE_IDPC_LAVORO,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "non serve un'autorizzazione preventiva dell'IDPC; il titolare si autovaluta e consulta l'IDPC solo se una DPIA evidenzia un rischio residuo elevato.",
      fonte: FONTE_IDPC_DPIA,
    },
    {
      voce: 'Base = interesse legittimo (soglia alta), non il consenso',
      risposta: 'si',
      dettaglio:
        "il consenso non e di norma valido nel rapporto di lavoro per lo squilibrio di potere; la base usuale e l'interesse legittimo, ma con una soglia alta.",
      fonte: FONTE_IDPC_LAVORO,
    },
    {
      voce: 'Niente tracciamento continuo o permanente; minimizzazione',
      risposta: 'si',
      dettaglio:
        'va raccolto solo il minimo dei dati necessari; il tracciamento continuo o permanente e presuntivamente sproporzionato.',
      fonte: FONTE_IDPC_LAVORO,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per la geolocalizzazione e la valutazione del rendimento dei dipendenti (lista IDPC)",
      risposta: 'si',
      dettaglio:
        "la lista IDPC include i trattamenti che comportano l'uso di dati di geolocalizzazione e la valutazione del rendimento dei dipendenti tra quelli che richiedono una valutazione d'impatto.",
      fonte: FONTE_IDPC_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Verifica che la misura sia strettamente necessaria e proporzionata e scegli il mezzo meno invasivo.',
    },
    {
      passo: 2,
      descrizione:
        'Individua una base giuridica valida (interesse legittimo, non il consenso).',
    },
    {
      passo: 3,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) per la geolocalizzazione dei dipendenti.",
    },
    {
      passo: 4,
      descrizione:
        "Informa i lavoratori in modo chiaro prima dell'inizio del monitoraggio.",
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema: niente tracciamento continuo, solo il minimo necessario.',
    },
  ],

  contatti: [
    {
      ente: 'IDPC, reclami',
      portale: FONTE_IDPC_RECLAMO.url,
      urlFonte: FONTE_IDPC_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: 'fino a 20 milioni di euro o 4% del fatturato (GDPR)',
    casoCitato:
      "Non risulta una multa dell'IDPC specifica e pubblicata per il GPS sui dipendenti. In un caso (CDP/COMP/426/2022) l'IDPC ha ritenuto eccessiva e sproporzionata la videosorveglianza della mensa aziendale che riprendeva i dipendenti in pausa, usata in un procedimento disciplinare. Non e un caso di GPS. Il rischio sanzionatorio resta quello generale del GDPR (art. 83).",
    urlFonte: FONTE_IDPC_DECISIONE.url,
  },

  fonti: [
    FONTE_IDPC_LAVORO,
    FONTE_IDPC_DPIA,
    FONTE_IDPC_RECLAMO,
    FONTE_IDPC_DECISIONE,
    FONTE_DATA_PROTECTION_ACT,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
