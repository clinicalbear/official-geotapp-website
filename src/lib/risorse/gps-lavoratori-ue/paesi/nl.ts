/**
 * Scheda-paese Olanda per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * WOR art. 27 (diritto di consenso del consiglio aziendale), lista dell'Autoriteit
 * Persoonsgegevens (AP) dei trattamenti che richiedono una DPIA, condizioni AP per
 * il controllo dei dipendenti, comunicato AP sulla sanzione per le impronte digitali,
 * scheda Eurofound sul monitoraggio dei lavoratori nei Paesi Bassi e GDPR.
 *
 * I Paesi Bassi hanno un'unica autorita nazionale, l'AP, senza ripartizione
 * regionale. Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_WOR_27 = {
  titolo:
    'Wet op de ondernemingsraden (WOR), art. 27 (diritto di consenso del consiglio aziendale)',
  url: 'https://wetten.overheid.nl/BWBR0002747/2024-01-01/0/Hoofdstuk4/Artikel27',
};
const FONTE_AP_DPIA = {
  titolo:
    'Autoriteit Persoonsgegevens, lista dei trattamenti che richiedono una DPIA',
  url: 'https://wetten.overheid.nl/BWBR0042812',
};
const FONTE_AP_CONDIZIONI = {
  titolo:
    'Autoriteit Persoonsgegevens, condizioni per il controllo dei dipendenti',
  url: 'https://www.autoriteitpersoonsgegevens.nl/en/themes/employment-and-benefits/monitoring-employees/conditions-for-monitoring-employees',
};
const FONTE_AP_IMPRONTE = {
  titolo:
    'Autoriteit Persoonsgegevens, sanzione per il trattamento delle impronte dei dipendenti',
  url: 'https://www.autoriteitpersoonsgegevens.nl/en/current/company-fined-for-processing-employees-fingerprint-data',
};
const FONTE_EUROFOUND = {
  titolo: 'Eurofound, monitoraggio dei lavoratori nei Paesi Bassi',
  url: 'https://apps.eurofound.europa.eu/legislationdb/employee-monitoring-and-surveillance/netherlands',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};
const FONTE_AP = {
  titolo: 'Autoriteit Persoonsgegevens (AP)',
  url: 'https://www.autoriteitpersoonsgegevens.nl/',
};

export const olanda: SchedaPaese = {
  codiceISO: 'NL',
  slugCanonico: 'olanda',
  nome: 'Olanda',
  nomi: {
    it: 'Olanda',
    en: 'Netherlands',
    'en-us': 'Netherlands',
    'en-gb': 'Netherlands',
    'en-au': 'Netherlands',
    'en-ie': 'Netherlands',
    'en-ca': 'Netherlands',
    de: 'Niederlande',
    nl: 'Nederland',
    fr: 'Pays-Bas',
    es: 'Países Bajos',
    pt: 'Países Baixos',
    da: 'Nederlandene',
    sv: 'Nederländerna',
    nb: 'Nederland',
    ru: 'Нидерланды',
  },
  bandiera: '🇳🇱',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Autoriteit Persoonsgegevens (AP)',
    portale: FONTE_AP.url,
    urlFonte: FONTE_AP_CONDIZIONI.url,
    verificatoIl: '2026-06-15',
    note: "I Paesi Bassi hanno un'unica autorita nazionale, l'AP; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: 'Consenso del consiglio aziendale (OR) prima di installare il sistema (WOR art. 27)',
      risposta: 'dipende',
      dettaglio:
        "Dove esiste un consiglio aziendale (ondernemingsraad, OR), il datore ne ha bisogno del consenso preventivo (instemmingsrecht) prima di introdurre un sistema che tratta i dati del personale o ne controlla presenza, comportamento o rendimento (WOR art. 27, lett. k e l). Se l'OR non acconsente, non si puo procedere. Vale dove un OR esiste: e obbligatorio dai 50 dipendenti in su.",
      fonte: FONTE_WOR_27,
    },
    {
      voce: "Autorizzazione di un'autorita del lavoro prima di installare",
      risposta: 'no',
      dettaglio:
        "I Paesi Bassi non prevedono un'autorizzazione preventiva di un'autorita del lavoro. I filtri sono il consenso dell'OR e il GDPR. L'autorita garante (AP) va consultata prima solo nel caso dell'art. 36 GDPR, cioe se la DPIA evidenzia un rischio elevato non mitigabile.",
      fonte: FONTE_EUROFOUND,
    },
    {
      voce: 'Informazione preventiva dei lavoratori (art. 13 GDPR)',
      risposta: 'si',
      dettaglio:
        'I lavoratori vanno informati in anticipo e in modo completo su cosa viene controllato e perche.',
      fonte: FONTE_AP_CONDIZIONI,
    },
    {
      voce: "Base giuridica valida (legittimo interesse con bilanciamento; il consenso del dipendente di norma non vale) e divieto di tracciamento continuo",
      risposta: 'si',
      dettaglio:
        "Per l'AP il controllo deve essere necessario e proporzionato; la base e di norma il legittimo interesse con test di bilanciamento, non il consenso del dipendente (per lo squilibrio di potere). Il GPS sui veicoli aziendali e ammesso per i viaggi di lavoro, ma non per seguire sistematicamente gli spostamenti privati o fuori orario.",
      fonte: FONTE_AP_CONDIZIONI,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per il monitoraggio dei dipendenti e i dati di localizzazione",
      risposta: 'si',
      dettaglio:
        "La lista DPIA dell'AP cita espressamente i sistemi GPS nei veicoli dei dipendenti e il monitoraggio sistematico delle attivita dei lavoratori, oltre al trattamento su larga scala di dati di localizzazione: in questi casi la DPIA e obbligatoria.",
      fonte: FONTE_AP_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        "Se esiste un OR, ottieni il suo consenso (instemmingsrecht) prima di attivare il sistema (WOR art. 27).",
    },
    {
      passo: 2,
      descrizione:
        'Individua una base giuridica valida ai sensi del GDPR: di norma il legittimo interesse con test di bilanciamento, non il consenso del dipendente.',
    },
    {
      passo: 3,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA): per il GPS sui veicoli dei dipendenti e per i dati di localizzazione su larga scala e richiesta.",
    },
    {
      passo: 4,
      descrizione:
        'Informa i lavoratori in anticipo e in modo completo (art. 13 GDPR).',
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema con minimizzazione: solo viaggi di lavoro, niente tracciamento continuo o degli spostamenti privati.',
    },
    {
      passo: 6,
      descrizione:
        "Se la DPIA evidenzia un rischio elevato non mitigabile, consulta preventivamente l'AP (art. 36 GDPR).",
    },
  ],

  contatti: [
    {
      ente: 'Autoriteit Persoonsgegevens (AP)',
      portale: FONTE_AP.url,
      urlFonte: FONTE_AP.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: '725.000 €',
    casoCitato:
      "Sanzione dell'Autoriteit Persoonsgegevens (2020) a un'azienda per il trattamento delle impronte digitali dei dipendenti per la rilevazione delle presenze: dato biometrico (art. 9 GDPR) trattato senza una base valida, perche il consenso dei dipendenti non e considerato libero per lo squilibrio di potere. Non e un caso di GPS ma e il caso faro olandese sul controllo presenze dei dipendenti. L'importo potrebbe essere stato ridotto in sede di opposizione: da verificare alla fonte ufficiale.",
    urlFonte: FONTE_AP_IMPRONTE.url,
  },

  fonti: [
    FONTE_WOR_27,
    FONTE_AP_DPIA,
    FONTE_AP_CONDIZIONI,
    FONTE_AP_IMPRONTE,
    FONTE_EUROFOUND,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
