/**
 * Scheda-paese Irlanda per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * guida del DPC sul tracciamento dei veicoli aziendali (maggio 2020), guida del
 * DPC sulla protezione dei dati sul luogo di lavoro, lista DPC dei trattamenti
 * che richiedono una DPIA, pagina DPC sulla consultazione preventiva, pagina DPC
 * sui reclami, decisione DPC contro Limerick City and County Council (dicembre
 * 2021) e GDPR.
 *
 * L'Irlanda ha un'unica autorita nazionale, la Data Protection Commission (DPC):
 * nessuna ripartizione regionale. Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_DPC_VEICOLI = {
  titolo: 'DPC, guida sul tracciamento dei veicoli aziendali (maggio 2020)',
  url: 'https://www.dataprotection.ie/sites/default/files/uploads/2020-09/Employer%20Vehicle%20Tracking_May2020.pdf',
};
const FONTE_DPC_LAVORO = {
  titolo: 'DPC, protezione dei dati sul luogo di lavoro',
  url: 'https://www.dataprotection.ie/en/dpc-guidance/data-protection-in-the-workplace-employer-guidance',
};
const FONTE_DPC_DPIA = {
  titolo: 'DPC, lista dei trattamenti che richiedono una DPIA',
  url: 'https://www.dataprotection.ie/sites/default/files/uploads/2018-11/Data-Protection-Impact-Assessment.pdf',
};
const FONTE_DPC_CONSULTAZIONE = {
  titolo: 'DPC, consultazione preventiva',
  url: 'https://www.dataprotection.ie/en/organisations/know-your-obligations/data-protection-impact-assessments/prior-consultation',
};
const FONTE_DPC_RECLAMI = {
  titolo: 'DPC, presentare un reclamo',
  url: 'https://www.dataprotection.ie/en/individuals/exercising-your-rights/complaints-handling-investigations-and-enforcement-individuals',
};
const FONTE_DPC_LIMERICK = {
  titolo:
    'DPC, decisione Limerick City and County Council (dicembre 2021)',
  url: 'https://www.dataprotection.ie/en/dpc-guidance/law/decisions/inquiry-into-limerick-city-and-county-council-december-2021',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const irlanda: SchedaPaese = {
  codiceISO: 'IE',
  slugCanonico: 'irlanda',
  nome: 'Irlanda',
  nomi: {
    it: 'Irlanda',
    en: 'Ireland',
    'en-us': 'Ireland',
    'en-gb': 'Ireland',
    'en-au': 'Ireland',
    'en-ie': 'Ireland',
    'en-ca': 'Ireland',
    de: 'Irland',
    nl: 'Ierland',
    fr: 'Irlande',
    es: 'Irlanda',
    pt: 'Irlanda',
    da: 'Irland',
    sv: 'Irland',
    nb: 'Irland',
    ru: 'Ирландия',
  },
  bandiera: '🇮🇪',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Data Protection Commission (DPC)',
    portale: FONTE_DPC_RECLAMI.url,
    urlFonte: FONTE_DPC_RECLAMI.url,
    verificatoIl: '2026-06-15',
    note: "L'Irlanda ha un'unica autorita nazionale, il DPC; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: 'Informazione preventiva dei lavoratori sull\'esistenza, il funzionamento e tutte le finalita del tracciamento (art. 13 GDPR)',
      risposta: 'si',
      dettaglio:
        "Il lavoratore va informato prima dell'attivazione dell'esistenza del tracciamento, di come funziona e di tutte le finalita.",
      fonte: FONTE_DPC_VEICOLI,
    },
    {
      voce: 'Consenso o accordo sindacale obbligatorio prima di installare',
      risposta: 'no',
      dettaglio:
        "L'Irlanda non ha un meccanismo di consenso sindacale che condiziona il monitoraggio; il controllo passa per base giuridica, trasparenza, proporzionalita e DPIA. Il consenso del lavoratore e' valido solo in casi eccezionali.",
      fonte: FONTE_DPC_VEICOLI,
    },
    {
      voce: 'Autorizzazione preventiva di un\'autorita prima di installare',
      risposta: 'no',
      dettaglio:
        "Non serve un'autorizzazione preventiva del DPC; l'autorita va consultata prima solo se la DPIA evidenzia un rischio elevato non mitigabile.",
      fonte: FONTE_DPC_CONSULTAZIONE,
    },
    {
      voce: 'Base giuridica valida (di norma interesse legittimo, non il consenso) con bilanciamento e diritto di opposizione',
      risposta: 'si',
      dettaglio:
        "La base usuale e' l'interesse legittimo (art. 6.1.f), che deve essere strettamente necessario e proporzionato e bilanciato coi diritti del lavoratore, soggetto al diritto di opposizione (art. 21).",
      fonte: FONTE_DPC_VEICOLI,
    },
    {
      voce: 'Divieto di usare il tracciamento per il monitoraggio generale del personale; opt-out fuori orario',
      risposta: 'si',
      dettaglio:
        "Il tracciamento non puo' servire a monitorare in generale il personale; e' improbabile che sia lecito fuori orario, e serve un opt-out (interruttore privacy) se il veicolo e' usato anche privatamente.",
      fonte: FONTE_DPC_VEICOLI,
    },
    {
      voce: "Valutazione d'impatto (DPIA) obbligatoria per il monitoraggio sistematico della localizzazione",
      risposta: 'si',
      dettaglio:
        "La lista DPC rende obbligatoria la DPIA per il monitoraggio, il tracciamento o l'osservazione sistematica della posizione o del comportamento delle persone.",
      fonte: FONTE_DPC_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Informa i lavoratori, prima dell\'attivazione, di esistenza, funzionamento e finalita del tracciamento.',
    },
    {
      passo: 2,
      descrizione:
        'Individua una base giuridica valida (di norma interesse legittimo) e documenta il bilanciamento.',
    },
    {
      passo: 3,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA): obbligatoria per il monitoraggio sistematico della localizzazione.",
    },
    {
      passo: 4,
      descrizione:
        "Limita il tracciamento allo stretto necessario e all'orario di lavoro; prevedi un opt-out per l'uso privato.",
    },
  ],

  contatti: [
    {
      ente: 'DPC, reclami',
      portale: FONTE_DPC_RECLAMI.url,
      urlFonte: FONTE_DPC_RECLAMI.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: 'fino a 20 milioni di euro o 4% del fatturato (GDPR)',
    casoCitato:
      "Non risulta una multa del DPC specifica per il GPS sui dipendenti. Caso faro affine: DPC contro Limerick City and County Council (dicembre 2021), 110.000 euro per trattamento senza base giuridica tramite telecamere, lettura targhe e droni (ente pubblico, non dipendenti). La giurisprudenza (Doolin) ha inoltre stabilito che i dati raccolti per la sicurezza non possono essere riusati per monitorare e sanzionare i dipendenti.",
    urlFonte: FONTE_DPC_LIMERICK.url,
  },

  fonti: [
    FONTE_DPC_VEICOLI,
    FONTE_DPC_LAVORO,
    FONTE_DPC_DPIA,
    FONTE_DPC_CONSULTAZIONE,
    FONTE_DPC_RECLAMI,
    FONTE_DPC_LIMERICK,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
