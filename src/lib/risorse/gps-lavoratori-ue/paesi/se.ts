/**
 * Scheda-paese Svezia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * § 11 della legge sulla cogestione nei luoghi di lavoro (MBL, Lag 1976:580),
 * guide dell'IMY (autorita garante svedese) su controllo dei dipendenti,
 * localizzazione GPS e valutazione d'impatto, GDPR e il caso del Comune di
 * Skelleftea sul riconoscimento facciale per le presenze.
 *
 * La Svezia ha un'unica autorita nazionale per la protezione dei dati, l'IMY
 * (gia Datainspektionen); non esiste alcuna ripartizione regionale.
 * Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_MBL_11 = {
  titolo:
    'Lag 1976:580 om medbestammande i arbetslivet (MBL), § 11',
  url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-1976580-om-medbestammande-i-arbetslivet_sfs-1976-580/',
};
const FONTE_IMY_CONTROLLO = {
  titolo: 'IMY, controllo e sorveglianza dei dipendenti',
  url: 'https://www.imy.se/verksamhet/dataskydd/dataskydd-pa-olika-omraden/arbetsliv/kontroll-och-overvakning-av-anstallda/',
};
const FONTE_IMY_GPS = {
  titolo:
    'IMY, come usare i servizi di localizzazione (GPS) sui dipendenti',
  url: 'https://www.imy.se/verksamhet/dataskydd/vi-guidar-dig/integritet-pa-jobbet/sa-far-du-som-arbetsgivare-anvanda-platstjanster-gps/',
};
const FONTE_IMY_DPIA = {
  titolo: "IMY, quando svolgere una valutazione d'impatto",
  url: 'https://www.imy.se/verksamhet/dataskydd/det-har-galler-enligt-gdpr/konsekvensbedomning/nar-ska-en-konsekvensbedomning-genomforas/',
};
const FONTE_IMY_RECLAMO = {
  titolo: 'IMY, presentare un reclamo',
  url: 'https://www.imy.se/privatperson/utfora-arenden/lamna-ett-klagomal',
};
const FONTE_IMY_SKELLEFTEA = {
  titolo:
    'IMY, sanzione al Comune di Skelleftea (riconoscimento facciale per le presenze)',
  url: 'https://www.imy.se/tillsyner/gymnasienamnden-i-skelleftea-kommun/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const svezia: SchedaPaese = {
  codiceISO: 'SE',
  slugCanonico: 'svezia',
  nome: 'Svezia',
  nomi: {
    it: 'Svezia',
    en: 'Sweden',
    'en-us': 'Sweden',
    'en-gb': 'Sweden',
    'en-au': 'Sweden',
    'en-ie': 'Sweden',
    'en-ca': 'Sweden',
    de: 'Schweden',
    nl: 'Zweden',
    fr: 'Suède',
    es: 'Suecia',
    pt: 'Suécia',
    da: 'Sverige',
    sv: 'Sverige',
    nb: 'Sverige',
    ru: 'Швеция',
  },
  bandiera: '🇸🇪',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'IMY (Integritetsskyddsmyndigheten, autorita garante svedese)',
    portale: FONTE_IMY_RECLAMO.url,
    urlFonte: FONTE_IMY_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: "La Svezia ha un'unica autorita nazionale, l'IMY (gia Datainspektionen); nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: 'Negoziazione sindacale preventiva (MBL § 11) prima di introdurre il sistema',
      risposta: 'dipende',
      dettaglio:
        'Il datore vincolato da un contratto collettivo deve, di propria iniziativa, negoziare con il sindacato prima di una modifica importante (come introdurre un sistema di monitoraggio o GPS). Vale dove il datore e vincolato da un contratto collettivo.',
      fonte: FONTE_MBL_11,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "Non esiste un regime di autorizzazione preventiva dell'IMY per il GPS sui dipendenti; vale la responsabilizzazione (il datore documenta da se base giuridica e bilanciamento).",
      fonte: FONTE_IMY_CONTROLLO,
    },
    {
      voce: 'Base = bilanciamento di interessi (non il consenso) + informazione chiara ai lavoratori',
      risposta: 'si',
      dettaglio:
        'La base giuridica e di norma il bilanciamento di interessi, non il consenso del dipendente (rapporto di dipendenza); i lavoratori vanno informati in modo chiaro, al piu tardi quando i dati sono raccolti.',
      fonte: FONTE_IMY_CONTROLLO,
    },
    {
      voce: 'GPS solo per un concreto bisogno operativo; niente sorveglianza in tempo reale ingiustificata, niente riuso per valutare il rendimento',
      risposta: 'si',
      dettaglio:
        'La localizzazione e ammessa se motivata da un concreto bisogno aziendale; non per sorvegliare in tempo reale senza motivo, e i dati raccolti per un altro scopo (es. un registro di guida) non possono essere riusati per analizzare il rendimento.',
      fonte: FONTE_IMY_GPS,
    },
    {
      voce: "Valutazione d'impatto per il monitoraggio sistematico dei dipendenti",
      risposta: 'si',
      dettaglio:
        "Serve una valutazione d'impatto quando il trattamento comporta una sorveglianza sistematica dei dipendenti ed e probabile un rischio elevato per i loro diritti.",
      fonte: FONTE_IMY_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Se vincolato da contratto collettivo, negozia col sindacato prima di introdurre il sistema (MBL § 11).',
    },
    {
      passo: 2,
      descrizione:
        'Documenta la base giuridica (bilanciamento di interessi) e il relativo test.',
    },
    {
      passo: 3,
      descrizione:
        'Informa i lavoratori in modo chiaro, al piu tardi alla raccolta dei dati.',
    },
    {
      passo: 4,
      descrizione:
        'Svolgi la valutazione d\'impatto se il monitoraggio e sistematico.',
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema: solo concreto bisogno operativo, niente riuso per valutare il rendimento.',
    },
  ],

  contatti: [
    {
      ente: 'IMY, reclami',
      portale: FONTE_IMY_RECLAMO.url,
      urlFonte: FONTE_IMY_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: '200.000 SEK (circa 17.500 euro)',
    casoCitato:
      "IMY contro il Comune di Skelleftea (2019): una scuola usava il riconoscimento facciale tramite telecamera per registrare le presenze degli studenti, trattamento biometrico illecito (il consenso non e valido nel rapporto di dipendenza). Non e un caso di GPS, ma e il caso faro svedese sul monitoraggio biometrico delle presenze.",
    urlFonte: FONTE_IMY_SKELLEFTEA.url,
  },

  fonti: [
    FONTE_MBL_11,
    FONTE_IMY_CONTROLLO,
    FONTE_IMY_GPS,
    FONTE_IMY_DPIA,
    FONTE_IMY_RECLAMO,
    FONTE_IMY_SKELLEFTEA,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
