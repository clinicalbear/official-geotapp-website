/**
 * Scheda-paese Lettonia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * chiarimenti del DVI (Datu valsts inspekcija, Garante lettone) sul tracciamento
 * GPS dei viaggi del dipendente e sulla videosorveglianza dei lavoratori, lista
 * DVI dei trattamenti che richiedono una DPIA (art. 35.4 GDPR), pagina DVI per i
 * reclami e GDPR.
 *
 * La Lettonia ha un'unica autorita nazionale per la protezione dei dati, il DVI;
 * non e uno Stato federale e non esiste una ripartizione regionale della
 * vigilanza. Nessun numero, URL o autorita e inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_DVI_GPS = {
  titolo:
    'DVI (Garante lettone), posso tracciare i viaggi del mio dipendente? (GPS)',
  url: 'https://www.dvi.gov.lv/lv/jaunums/dviskaidro-vai-drikstu-izsekot-sava-darbinieka-braucieniem',
};
const FONTE_DVI_VIDEO = {
  titolo: 'DVI, videosorveglianza dei dipendenti in presenza (16/09/2022)',
  url: 'https://www.dvi.gov.lv/lv/jaunums/dviskaidro-16092022',
};
const FONTE_DVI_VIDEO_REMOTO = {
  titolo: 'DVI, videosorveglianza dei dipendenti nel lavoro da remoto',
  url: 'https://www.dvi.gov.lv/lv/jaunums/dviskaidro-darbinieku-videonoverosana-attalinata-darba-process',
};
const FONTE_DVI_DPIA = {
  titolo: 'DVI, lista dei trattamenti che richiedono una DPIA (art. 35.4)',
  url: 'https://www.edpb.europa.eu/sites/default/files/decisions/lv_sa_dpia_final_list_20181212.pdf',
};
const FONTE_DVI_RECLAMO = {
  titolo: 'DVI, presentare un reclamo',
  url: 'https://www.dvi.gov.lv/en/services/complaint-concerning-processing-personal-data',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const lettonia: SchedaPaese = {
  codiceISO: 'LV',
  slugCanonico: 'lettonia',
  nome: 'Lettonia',
  nomi: {
    it: 'Lettonia',
    en: 'Latvia',
    'en-us': 'Latvia',
    'en-gb': 'Latvia',
    'en-au': 'Latvia',
    'en-ie': 'Latvia',
    'en-ca': 'Latvia',
    de: 'Lettland',
    nl: 'Letland',
    fr: 'Lettonie',
    es: 'Letonia',
    pt: 'Letónia',
    da: 'Letland',
    sv: 'Lettland',
    nb: 'Latvia',
    ru: 'Латвия',
  },
  bandiera: '🇱🇻',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'DVI (Datu valsts inspekcija, Garante lettone)',
    portale: FONTE_DVI_RECLAMO.url,
    urlFonte: FONTE_DVI_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: "La Lettonia ha un'unica autorita nazionale, il DVI; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: 'Test di bilanciamento prima del trattamento e informazione preventiva ai lavoratori (DVI)',
      risposta: 'si',
      dettaglio:
        'Il datore deve, prima di iniziare il trattamento, valutare il bilanciamento tra il proprio interesse e quello del lavoratore, e informarlo prima che inizi a usare il veicolo, in modo trasparente e in linguaggio semplice.',
      fonte: FONTE_DVI_GPS,
    },
    {
      voce: 'Base = interesse legittimo, non il consenso (DVI)',
      risposta: 'si',
      dettaglio:
        'La base e l\'interesse legittimo del datore; il consenso del lavoratore non e ottenibile come base valida nel rapporto di lavoro.',
      fonte: FONTE_DVI_VIDEO,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        'La legge lettone sul trattamento dei dati non prevede un\'autorizzazione preventiva del DVI; il titolare valuta da se la liceita.',
      fonte: FONTE_DVI_GPS,
    },
    {
      voce: "Niente trattamento durante l'uso privato del veicolo; niente sorveglianza continua",
      risposta: 'si',
      dettaglio:
        'Il datore non ha base ne diritto di trattare i dati per il periodo in cui il lavoratore usa il veicolo per scopi privati; la sorveglianza continua e priva di giustificazione adeguata.',
      fonte: FONTE_DVI_GPS,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per la sorveglianza sul luogo di lavoro e il monitoraggio sistematico dei dipendenti (lista DVI)",
      risposta: 'si',
      dettaglio:
        "La lista DVI rende obbligatoria la valutazione d'impatto per la sorveglianza sul luogo di lavoro, il monitoraggio sistematico delle attivita dei dipendenti e il tracciamento su larga scala.",
      fonte: FONTE_DVI_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Svolgi il test di bilanciamento prima di iniziare il trattamento.',
    },
    {
      passo: 2,
      descrizione:
        'Individua una base giuridica valida (interesse legittimo, non il consenso).',
    },
    {
      passo: 3,
      descrizione:
        'Informa i lavoratori prima che inizino a usare il veicolo, in modo trasparente e semplice.',
    },
    {
      passo: 4,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) per la sorveglianza sul luogo di lavoro.",
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema: niente trattamento durante l\'uso privato, niente sorveglianza continua.',
    },
  ],

  contatti: [
    {
      ente: 'DVI, reclami',
      portale: FONTE_DVI_RECLAMO.url,
      urlFonte: FONTE_DVI_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: 'fino a 20 milioni di euro o 4% del fatturato (GDPR)',
    casoCitato:
      'Non risulta una multa del DVI specifica e pubblicata per il GPS sui dipendenti. In un caso del 2023 il DVI ha indagato la societa QUANTRUM per una videosorveglianza che registrava anche l\'audio e ha ordinato di cessare la registrazione audio (provvedimento correttivo, senza multa). Il rischio sanzionatorio resta quello generale del GDPR (art. 83).',
    urlFonte: FONTE_DVI_GPS.url,
  },

  fonti: [
    FONTE_DVI_GPS,
    FONTE_DVI_VIDEO,
    FONTE_DVI_VIDEO_REMOTO,
    FONTE_DVI_DPIA,
    FONTE_DVI_RECLAMO,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
