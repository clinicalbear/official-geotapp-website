/**
 * Scheda-paese Lituania per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. 27 del Codice del lavoro lituano (regole interne e informazione sul
 * monitoraggio), lista VDAI dei trattamenti che richiedono una DPIA, decisione
 * VDAI del 2022 sulla corrispondenza personale di un dipendente, servizi e
 * reclami del VDAI e GDPR.
 *
 * La Lituania ha un'unica autorita' nazionale, il VDAI, senza ripartizione
 * regionale. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_EUROFOUND_ART27 = {
  titolo:
    'Eurofound, monitoraggio dei lavoratori in Lituania (Codice del lavoro art. 27)',
  url: 'https://apps.eurofound.europa.eu/legislationdb/employee-monitoring-and-surveillance/lithuania',
};
const FONTE_VDAI_DPIA = {
  titolo:
    'VDAI, lista dei trattamenti che richiedono una DPIA (voce 10: monitoraggio dei dipendenti)',
  url: 'https://www.edpb.europa.eu/sites/default/files/decisions/lt-dpia_list_en_20190314.pdf',
};
const FONTE_VDAI_CORRISPONDENZA = {
  titolo:
    'VDAI, decisione sul trattamento della corrispondenza personale di un dipendente (2022)',
  url: 'https://www.edpb.europa.eu/news/national-news/2023/lithuanian-sa-adopted-decision-processing-employees-personal-correspondence_en',
};
const FONTE_VDAI_SERVIZI = {
  titolo: 'VDAI (Garante lituano), servizi e reclami',
  url: 'https://vdai.lrv.lt/en/services/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const lituania: SchedaPaese = {
  codiceISO: 'LT',
  slugCanonico: 'lituania',
  nome: 'Lituania',
  nomi: {
    it: 'Lituania',
    en: 'Lithuania',
    'en-us': 'Lithuania',
    'en-gb': 'Lithuania',
    'en-au': 'Lithuania',
    'en-ie': 'Lithuania',
    'en-ca': 'Lithuania',
    de: 'Litauen',
    nl: 'Litouwen',
    fr: 'Lituanie',
    es: 'Lituania',
    pt: 'Lituânia',
    da: 'Litauen',
    sv: 'Litauen',
    nb: 'Litauen',
    ru: 'Литва',
  },
  bandiera: '🇱🇹',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'VDAI (Valstybine duomenu apsaugos inspekcija, Garante lituano)',
    portale: FONTE_VDAI_SERVIZI.url,
    urlFonte: FONTE_VDAI_SERVIZI.url,
    verificatoIl: '2026-06-15',
    note: "La Lituania ha un'unica autorita nazionale, il VDAI; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: 'Regole interne e informazione preventiva dei lavoratori sul monitoraggio (Codice del lavoro art. 27)',
      risposta: 'si',
      dettaglio:
        "L'art. 27 del Codice del lavoro obbliga il datore a predisporre regole interne e a informare i lavoratori sull'uso delle tecnologie e sul monitoraggio sul luogo di lavoro, anche su sorveglianza video/audio e tracciamento di comportamento, posizione o movimento.",
      fonte: FONTE_EUROFOUND_ART27,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        'Con il GDPR non serve piu alcuna notifica o autorizzazione preventiva; il titolare si autovaluta e conserva la documentazione.',
      fonte: FONTE_EUROFOUND_ART27,
    },
    {
      voce: 'Base = interesse legittimo, non il consenso',
      risposta: 'si',
      dettaglio:
        'Il monitoraggio e ammesso solo con uno scopo reale e giustificato; la base e l\'interesse legittimo, non il consenso, che nel rapporto di lavoro non e liberamente prestato.',
      fonte: FONTE_EUROFOUND_ART27,
    },
    {
      voce: 'GPS proporzionato, sospeso fuori orario o disattivabile dal lavoratore; niente tracciamento continuo',
      risposta: 'si',
      dettaglio:
        'Il tracciamento del veicolo va sospeso fuori dall\'orario di lavoro o il lavoratore deve poterlo disattivare; il tracciamento GPS continuo e stato ritenuto sproporzionato e va preferito un mezzo meno invasivo.',
      fonte: FONTE_EUROFOUND_ART27,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per il monitoraggio dei dipendenti, inclusi posizione e movimento (lista VDAI, voce 10)",
      risposta: 'si',
      dettaglio:
        "La lista VDAI dei trattamenti che richiedono una valutazione d'impatto include espressamente il trattamento dei dati dei dipendenti per il monitoraggio, inclusi comportamento, posizione o movimento.",
      fonte: FONTE_VDAI_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Predisponi regole interne sul monitoraggio e informa i lavoratori (art. 27 + art. 13 GDPR).',
    },
    {
      passo: 2,
      descrizione:
        'Individua una base giuridica valida (interesse legittimo, non il consenso).',
    },
    {
      passo: 3,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio dei dipendenti, inclusi posizione e movimento.",
    },
    {
      passo: 4,
      descrizione:
        'Configura il sistema in modo proporzionato: sospeso fuori orario o disattivabile dal lavoratore.',
    },
    {
      passo: 5,
      descrizione:
        'Conserva la documentazione e mettila a disposizione del VDAI su richiesta.',
    },
  ],

  contatti: [
    {
      ente: 'VDAI, servizi e reclami',
      portale: FONTE_VDAI_SERVIZI.url,
      urlFonte: FONTE_VDAI_SERVIZI.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: 'fino a 20 milioni di euro o 4% del fatturato (GDPR)',
    casoCitato:
      'Non risulta una multa del VDAI specifica e pubblicata per il GPS sui dipendenti. In una decisione del 7 ottobre 2022 il VDAI ha ritenuto illecito il trattamento della corrispondenza personale di un dipendente (esaminata e usata per un procedimento disciplinare) senza una base giuridica ai sensi dell\'art. 6 GDPR. Il VDAI ha inoltre ritenuto sproporzionato il tracciamento GPS continuo dei dipendenti. Il rischio sanzionatorio resta quello generale del GDPR (art. 83).',
    urlFonte: FONTE_VDAI_CORRISPONDENZA.url,
  },

  fonti: [
    FONTE_EUROFOUND_ART27,
    FONTE_VDAI_DPIA,
    FONTE_VDAI_CORRISPONDENZA,
    FONTE_VDAI_SERVIZI,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
