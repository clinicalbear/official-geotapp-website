/**
 * Scheda-paese Cipro per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * il monitoraggio Eurofound sulla Legge 125(I)/2018, l'art. 13 GDPR, la pagina
 * ufficiale del Garante cipriota, la sanzione del Garante al Gruppo Louis
 * (strumento Bradford Factor) e il Regolamento UE 2016/679 (GDPR).
 *
 * Cipro non e' uno Stato federale: c'e' un'unica autorita' nazionale, il Garante
 * (Commissioner for Personal Data Protection), senza ripartizione regionale.
 * Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_EUROFOUND = {
  titolo:
    'Eurofound, monitoraggio dei lavoratori a Cipro (Legge 125(I)/2018)',
  url: 'https://apps.eurofound.europa.eu/legislationdb/employee-monitoring-and-surveillance/cyprus',
};
const FONTE_GDPR_13 = {
  titolo: 'GDPR, art. 13 (informazione)',
  url: 'https://gdpr-info.eu/art-13-gdpr/',
};
const FONTE_GARANTE_CY = {
  titolo: 'Garante cipriota, pagina ufficiale',
  url: 'http://www.dataprotection.gov.cy/',
};
const FONTE_LOUIS = {
  titolo:
    'EDPB, sanzione del Garante cipriota al Gruppo Louis (strumento Bradford Factor)',
  url: 'https://www.edpb.europa.eu/news/national-news/2020/cypriot-supervisory-authority-banned-processing-automated-tool-used-scoring_en',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const cipro: SchedaPaese = {
  codiceISO: 'CY',
  slugCanonico: 'cipro',
  nome: 'Cipro',
  nomi: {
    it: 'Cipro',
    en: 'Cyprus',
    'en-us': 'Cyprus',
    'en-gb': 'Cyprus',
    'en-au': 'Cyprus',
    'en-ie': 'Cyprus',
    'en-ca': 'Cyprus',
    de: 'Zypern',
    nl: 'Cyprus',
    fr: 'Chypre',
    es: 'Chipre',
    pt: 'Chipre',
    da: 'Cypern',
    sv: 'Cypern',
    nb: 'Kypros',
    ru: 'Кипр',
  },
  bandiera: '🇨🇾',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Garante cipriota per la protezione dei dati personali',
    portale: FONTE_GARANTE_CY.url,
    urlFonte: FONTE_GARANTE_CY.url,
    verificatoIl: '2026-06-15',
    note: "Cipro ha un'unica autorita nazionale, il Garante (Commissioner for Personal Data Protection); nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: "Informazione preventiva ai lavoratori (art. 13) ed esistenza di una base giuridica",
      risposta: 'si',
      dettaglio:
        "il lavoratore va informato prima dell'inizio del monitoraggio su titolare, finalita e base giuridica; non esiste una legge cipriota specifica sul GPS, vale il quadro GDPR e la Legge 125(I)/2018.",
      fonte: FONTE_GDPR_13,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "non serve un'autorizzazione preventiva del Garante; con il GDPR il vecchio regime di notifica e stato abolito.",
      fonte: FONTE_EUROFOUND,
    },
    {
      voce: 'Base = interesse legittimo con bilanciamento, non il consenso',
      risposta: 'si',
      dettaglio:
        "nel rapporto di lavoro il consenso non e liberamente prestato; la base usuale e l'interesse legittimo, con un test di bilanciamento documentato che non prevalga sui diritti dei lavoratori.",
      fonte: FONTE_GDPR_13,
    },
    {
      voce: 'Niente tracciamento continuo 24 ore su 24; minimizzazione (art. 5.1.c)',
      risposta: 'si',
      dettaglio:
        'il tracciamento GPS continuo e sempre attivo viola la minimizzazione; va limitato a quanto necessario (orario di lavoro, rischio effettivo).',
      fonte: FONTE_GDPR,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per il monitoraggio sistematico dei dipendenti (art. 35)",
      risposta: 'si',
      dettaglio:
        'una DPIA e necessaria quando il monitoraggio dei dipendenti e sistematico; il Garante valuta caso per caso la proporzionalita.',
      fonte: FONTE_EUROFOUND,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Individua una base giuridica valida (interesse legittimo) e documenta il bilanciamento.',
    },
    {
      passo: 2,
      descrizione:
        "Informa i lavoratori prima dell'inizio del monitoraggio (art. 13).",
    },
    {
      passo: 3,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio sistematico.",
    },
    {
      passo: 4,
      descrizione:
        'Limita il GPS a quanto necessario: niente tracciamento continuo 24 ore su 24.',
    },
    {
      passo: 5,
      descrizione:
        "Configura il sistema in modo proporzionato e verifica la prevalenza dell'interesse sui diritti dei lavoratori.",
    },
  ],

  contatti: [
    {
      ente: 'Garante cipriota',
      portale: FONTE_GARANTE_CY.url,
      urlFonte: FONTE_GARANTE_CY.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: '82.000 €',
    casoCitato:
      "Garante cipriota contro il Gruppo Louis (decisione del 25 ottobre 2019, annunciata il 27 gennaio 2020): uso di uno strumento automatico (Bradford Factor) per profilare le assenze per malattia di 818 dipendenti, senza base giuridica valida e su dati sanitari (artt. 6 e 9 GDPR); il bilanciamento dell'interesse legittimo e fallito. Multa complessiva 82.000 euro (70.000 + 10.000 + 2.000 a tre societa del gruppo). Non e un caso di GPS, ma e la sanzione faro cipriota sul monitoraggio dei dipendenti.",
    urlFonte: FONTE_LOUIS.url,
  },

  fonti: [FONTE_EUROFOUND, FONTE_GDPR_13, FONTE_GARANTE_CY, FONTE_LOUIS, FONTE_GDPR],

  aggiornatoIl: '2026-06-15',
};
