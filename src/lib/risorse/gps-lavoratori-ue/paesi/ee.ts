/**
 * Scheda-paese Estonia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * FAQ dell'AKI (Garante estone) sui rapporti di lavoro, materiale dell'AKI sul
 * trattamento dei dati nel rapporto di lavoro, capitolo 5 dell'AKI sulla
 * valutazione d'impatto, pagina dell'AKI per presentare un reclamo, pagina
 * ufficiale dell'AKI e GDPR.
 *
 * L'Estonia ha un'unica autorita nazionale, l'AKI; non e uno Stato federale e
 * non c'e ripartizione regionale della vigilanza. Nessun numero, URL o autorita
 * e inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_AKI_RAPPORTI = {
  titolo: 'AKI (Garante estone), FAQ sui rapporti di lavoro (GPS)',
  url: 'https://www.aki.ee/isikuandmed/kkk/toosuhted',
};
const FONTE_AKI_MATERIALE = {
  titolo: 'AKI, materiale sul trattamento dei dati nel rapporto di lavoro',
  url: 'https://www.aki.ee/isikuandmed/abimaterjalid/isikuandmete-tootlemine-toosuhtes',
};
const FONTE_AKI_DPIA = {
  titolo: "AKI, valutazione d'impatto (capitolo 5)",
  url: 'https://www.aki.ee/5-peatukk-andmekaitsealane-mojuhinnang',
};
const FONTE_AKI_RECLAMO = {
  titolo: 'AKI, presentare un reclamo',
  url: 'https://www.aki.ee/meist/vota-uhendust/kaebus-isikuandmete-kaitse-asjas',
};
const FONTE_AKI_UFFICIALE = {
  titolo: 'AKI (Garante estone), pagina ufficiale',
  url: 'https://www.aki.ee/en',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const estonia: SchedaPaese = {
  codiceISO: 'EE',
  slugCanonico: 'estonia',
  nome: 'Estonia',
  nomi: {
    it: 'Estonia',
    en: 'Estonia',
    'en-us': 'Estonia',
    'en-gb': 'Estonia',
    'en-au': 'Estonia',
    'en-ie': 'Estonia',
    'en-ca': 'Estonia',
    de: 'Estland',
    nl: 'Estland',
    fr: 'Estonie',
    es: 'Estonia',
    pt: 'Estónia',
    da: 'Estland',
    sv: 'Estland',
    nb: 'Estland',
    ru: 'Эстония',
  },
  bandiera: '🇪🇪',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'AKI (Andmekaitse Inspektsioon, Garante estone)',
    portale: FONTE_AKI_RECLAMO.url,
    urlFonte: FONTE_AKI_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: "L'Estonia ha un'unica autorita nazionale, l'AKI; nessuna ripartizione regionale. Particolarita: le multe GDPR passano per la procedura per contravvenzioni; dal novembre 2023 il tetto e allineato al GDPR.",
  },

  checklist: [
    {
      voce: 'Informazione preventiva ai lavoratori e base giuridica documentata (interesse legittimo, non il consenso)',
      risposta: 'si',
      dettaglio:
        'Il datore deve spiegare ai lavoratori su quale base giuridica e installato il GPS; nel rapporto di lavoro il consenso non e di norma una base valida per lo squilibrio di potere.',
      fonte: FONTE_AKI_RAPPORTI,
    },
    {
      voce: 'Consenso o accordo del consiglio aziendale obbligatorio prima di installare',
      risposta: 'no',
      dettaglio:
        "L'Estonia non prevede un consenso obbligatorio di un consiglio aziendale; i filtri sono il GDPR, le linee guida dell'AKI e il principio di necessita e proporzionalita.",
      fonte: FONTE_AKI_RAPPORTI,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "Non serve un'autorizzazione preventiva dell'AKI; il titolare valuta da se base giuridica e proporzionalita.",
      fonte: FONTE_AKI_RAPPORTI,
    },
    {
      voce: 'GPS proporzionato, solo in orario, niente tracciamento in tempo reale fuori orario, disattivabile',
      risposta: 'si',
      dettaglio:
        'Il trattamento sul luogo di lavoro deve essere proporzionato ai rischi; il datore non puo seguire i lavoratori in tempo reale fuori dall\'orario di lavoro.',
      fonte: FONTE_AKI_RAPPORTI,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per il monitoraggio sistematico delle attivita dei dipendenti e il tracciamento della posizione in tempo reale (lista AKI)",
      risposta: 'si',
      dettaglio:
        "La lista AKI include il monitoraggio sistematico delle attivita dei dipendenti su larga scala e il tracciamento in tempo reale della posizione di una persona tra i casi che richiedono una valutazione d'impatto.",
      fonte: FONTE_AKI_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Individua una base giuridica valida (interesse legittimo, non il consenso) e documentala.',
    },
    {
      passo: 2,
      descrizione: 'Verifica che il trattamento sia proporzionato ai rischi effettivi.',
    },
    {
      passo: 3,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio sistematico o il tracciamento in tempo reale.",
    },
    {
      passo: 4,
      descrizione:
        'Informa i lavoratori in anticipo (art. 13 GDPR), spiegando la base giuridica del GPS.',
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema: solo in orario, niente tracciamento in tempo reale fuori orario, disattivabile.',
    },
  ],

  contatti: [
    {
      ente: 'AKI, reclami',
      portale: FONTE_AKI_RECLAMO.url,
      urlFonte: FONTE_AKI_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: 'fino a 20 milioni di euro o 4% del fatturato (GDPR)',
    casoCitato:
      "Non risulta una multa dell'AKI specifica e pubblicata per il GPS sui dipendenti. In Estonia le multe GDPR passano per la procedura per contravvenzioni e storicamente sono state basse; dal novembre 2023 il tetto e allineato al GDPR (fino a 20 milioni di euro o 4% del fatturato). L'AKI vigila in particolare su videosorveglianza e monitoraggio dei dipendenti.",
    urlFonte: FONTE_AKI_UFFICIALE.url,
  },

  fonti: [
    FONTE_AKI_RAPPORTI,
    FONTE_AKI_MATERIALE,
    FONTE_AKI_DPIA,
    FONTE_AKI_RECLAMO,
    FONTE_AKI_UFFICIALE,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
