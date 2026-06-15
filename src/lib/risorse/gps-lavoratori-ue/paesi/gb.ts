/**
 * Scheda-paese Regno Unito per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * guida ICO sul monitoraggio dei lavoratori (UK GDPR), guida ICO sulla
 * sorveglianza nei veicoli, guida ICO su quando serve una DPIA, provvedimento
 * ICO sul tracciamento GPS dell'Home Office (2024), pagina ICO per le
 * segnalazioni e il GDPR recepito come UK GDPR.
 *
 * Il Regno Unito ha un'unica autorita nazionale, l'ICO, per Inghilterra,
 * Scozia, Galles e Irlanda del Nord: nessuna ripartizione regionale.
 * Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_ICO_MONITORAGGIO = {
  titolo: 'ICO, guida sul monitoraggio dei lavoratori (UK GDPR)',
  url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/employment/monitoring-workers/data-protection-and-monitoring-workers/',
};
const FONTE_ICO_VEICOLI = {
  titolo: 'ICO, sorveglianza nei veicoli',
  url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/cctv-and-video-surveillance/guidance-on-video-surveillance-including-cctv/additional-considerations-for-technologies-other-than-cctv/surveillance-in-vehicles/',
};
const FONTE_ICO_DPIA = {
  titolo: 'ICO, quando serve una DPIA',
  url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/when-do-we-need-to-do-a-dpia/',
};
const FONTE_ICO_HOME_OFFICE = {
  titolo: 'ICO, provvedimento sul monitoraggio GPS (Home Office, 2024)',
  url: 'https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2024/03/ico-finds-the-home-office-s-pilot-of-gps-electronic-monitoring-of-migrants-breached-uk-data-protection-law/',
};
const FONTE_ICO_SEGNALAZIONI = {
  titolo: 'ICO, presentare una segnalazione',
  url: 'https://ico.org.uk/concerns/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) come UK GDPR',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const regnoUnito: SchedaPaese = {
  codiceISO: 'GB',
  slugCanonico: 'regno-unito',
  nome: 'Regno Unito',
  nomi: {
    it: 'Regno Unito',
    en: 'United Kingdom',
    'en-us': 'United Kingdom',
    'en-gb': 'United Kingdom',
    'en-au': 'United Kingdom',
    'en-ie': 'United Kingdom',
    'en-ca': 'United Kingdom',
    de: 'Vereinigtes Königreich',
    nl: 'Verenigd Koninkrijk',
    fr: 'Royaume-Uni',
    es: 'Reino Unido',
    pt: 'Reino Unido',
    da: 'Storbritannien',
    sv: 'Storbritannien',
    nb: 'Storbritannia',
    ru: 'Великобритания',
  },
  bandiera: '🇬🇧',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: "ICO (Information Commissioner's Office)",
    portale: FONTE_ICO_SEGNALAZIONI.url,
    urlFonte: FONTE_ICO_SEGNALAZIONI.url,
    verificatoIl: '2026-06-15',
    note: "Il Regno Unito ha un'unica autorita nazionale, l'ICO, per Inghilterra, Scozia, Galles e Irlanda del Nord: nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: 'Consultazione dei lavoratori o dei loro rappresentanti prima di introdurre il monitoraggio',
      risposta: 'dipende',
      dettaglio:
        "L'ICO chiede di raccogliere e documentare il parere dei lavoratori o dei loro rappresentanti (es. sindacati) prima di introdurre il monitoraggio, salvo buoni motivi; non e un consenso vincolante, ma va documentato.",
      fonte: FONTE_ICO_MONITORAGGIO,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "Non serve un'autorizzazione preventiva dell'ICO; vale la responsabilizzazione (autovalutazione + DPIA). L'ICO va consultato prima solo se la DPIA evidenzia un rischio elevato non mitigabile.",
      fonte: FONTE_ICO_MONITORAGGIO,
    },
    {
      voce: 'Base giuridica valida e informazione ai lavoratori (di norma interesse legittimo, non il consenso; niente sorveglianza occulta)',
      risposta: 'si',
      dettaglio:
        "Il consenso di norma non e valido per lo squilibrio di potere; la base usuale e l'interesse legittimo con valutazione documentata (LIA). I lavoratori vanno informati in modo chiaro; la sorveglianza occulta solo in casi eccezionali.",
      fonte: FONTE_ICO_MONITORAGGIO,
    },
    {
      voce: 'Divieto di tracciamento continuo ingiustificato; disattivazione fuori orario per uso privato',
      risposta: 'si',
      dettaglio:
        "Per l'ICO la registrazione continua mentre il veicolo e usato a fini privati fuori orario e probabilmente eccessiva; il conducente deve poter disattivare la registrazione in quei casi.",
      fonte: FONTE_ICO_VEICOLI,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per il tracciamento della geolocalizzazione dei lavoratori",
      risposta: 'si',
      dettaglio:
        "La lista ICO include espressamente il tracciamento della geolocalizzazione o del comportamento di una persona; per il GPS sui dipendenti la DPIA e richiesta.",
      fonte: FONTE_ICO_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Raccogli e documenta il parere dei lavoratori o dei loro rappresentanti.',
    },
    {
      passo: 2,
      descrizione:
        "Individua una base giuridica valida (di norma interesse legittimo) e svolgi la valutazione documentata (LIA).",
    },
    {
      passo: 3,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) prima di attivare il tracciamento.",
    },
    {
      passo: 4,
      descrizione:
        'Informa i lavoratori in modo chiaro e accessibile (niente sorveglianza occulta salvo casi eccezionali).',
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema: niente registrazione continua fuori orario, disattivazione per uso privato.',
    },
  ],

  contatti: [
    {
      ente: 'ICO, segnalazioni',
      portale: FONTE_ICO_SEGNALAZIONI.url,
      urlFonte: FONTE_ICO_SEGNALAZIONI.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo:
      'provvedimento di enforcement + diffida (nessuna multa); rischio UK GDPR fino a 17,5 milioni di sterline o 4% del fatturato',
    casoCitato:
      "ICO contro l'Home Office (1 marzo 2024): provvedimento di enforcement e diffida per non aver valutato a sufficienza l'intrusivita del tracciamento GPS continuo (cavigliera su persone in regime di immigrazione), DPIA inadeguata, niente prova di necessita e proporzionalita. Non e un caso di dipendenti, ma il ragionamento dell'ICO sul tracciamento GPS continuo e direttamente trasferibile.",
    urlFonte: FONTE_ICO_HOME_OFFICE.url,
  },

  fonti: [
    FONTE_ICO_MONITORAGGIO,
    FONTE_ICO_VEICOLI,
    FONTE_ICO_DPIA,
    FONTE_ICO_HOME_OFFICE,
    FONTE_ICO_SEGNALAZIONI,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
