/**
 * Scheda-paese Albania per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Legge 124/2024 sulla protezione dei dati personali (in vigore dal 1 febbraio
 * 2025, ha abrogato la legge 9887/2008), linea guida IDP n. 03 del 30 aprile 2025
 * sulla videosorveglianza, pagina ufficiale dell'IDP, sanzione IDP a EuroCom CX e
 * GDPR come riferimento comparativo.
 *
 * L'Albania NON e' uno Stato membro UE: e' un paese candidato, fuori dall'UE, con
 * una legge nazionale propria allineata al GDPR (la Legge 124/2024), distinta dal
 * Regolamento. Unica autorita' nazionale, l'IDP, senza ripartizione regionale.
 * Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_LEGGE_124_2024 = {
  titolo:
    'Legge 124/2024 sulla protezione dei dati personali (in vigore dal 1 febbraio 2025)',
  url: 'https://idp.al/wp-content/uploads/2025/03/Law-no.124-2024.pdf',
};
const FONTE_IDP_LINEA_GUIDA = {
  titolo: 'IDP, linea guida n. 03 del 30.04.2025 sulla videosorveglianza',
  url: 'https://idp.al/wp-content/uploads/2025/09/Guideline-No.03-30.04.2025-Video-Surveillance.pdf.pdf',
};
const FONTE_IDP_UFFICIALE = {
  titolo: 'IDP (Garante albanese), pagina ufficiale',
  url: 'https://idp.al/en/',
};
const FONTE_IDP_EUROCOM = {
  titolo:
    'IDP, sanzione EuroCom CX (videosorveglianza dei dipendenti)',
  url: 'https://www.dataguidance.com/news/albania-idp-fines-eurocom-all-460000-unlawful-video',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) - riferimento comparativo',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const albania: SchedaPaese = {
  codiceISO: 'AL',
  slugCanonico: 'albania',
  nome: 'Albania',
  nomi: {
    it: 'Albania',
    en: 'Albania',
    'en-us': 'Albania',
    'en-gb': 'Albania',
    'en-au': 'Albania',
    'en-ie': 'Albania',
    'en-ca': 'Albania',
    de: 'Albanien',
    nl: 'Albanië',
    fr: 'Albanie',
    es: 'Albania',
    pt: 'Albânia',
    da: 'Albanien',
    sv: 'Albanien',
    nb: 'Albania',
    ru: 'Албания',
  },
  bandiera: '🇦🇱',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'IDP (Komisioneri per te Drejten e Informimit dhe Mbrojtjen e te Dhenave Personale)',
    portale: FONTE_IDP_UFFICIALE.url,
    urlFonte: FONTE_IDP_UFFICIALE.url,
    verificatoIl: '2026-06-15',
    note: "L'Albania e' un paese candidato, fuori dall'UE, con una legge propria allineata al GDPR (Legge 124/2024). Unica autorita' nazionale, l'IDP; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: 'Informazione preventiva ai lavoratori e base giuridica (Legge 124/2024, art. 13)',
      risposta: 'si',
      dettaglio:
        "Il lavoratore va informato prima della raccolta dei dati su finalita' e base giuridica; serve una delle basi dell'art. 7 (in pratica l'interesse legittimo).",
      fonte: FONTE_LEGGE_124_2024,
    },
    {
      voce: "Notifica o autorizzazione preventiva di un'autorita' prima di installare",
      risposta: 'no',
      dettaglio:
        "La vecchia notifica/registrazione all'IDP e' stata abolita con la Legge 124/2024; il titolare tiene un registro interno dei trattamenti.",
      fonte: FONTE_LEGGE_124_2024,
    },
    {
      voce: 'Base = interesse legittimo, non il consenso',
      risposta: 'si',
      dettaglio:
        "La base usuale e' l'interesse legittimo (art. 7), non il consenso, che nel rapporto di lavoro difficilmente e' libero.",
      fonte: FONTE_LEGGE_124_2024,
    },
    {
      voce: 'Mezzo meno intrusivo, finalita specifica e conservazione minima (linea guida IDP)',
      risposta: 'si',
      dettaglio:
        "Per l'IDP la sorveglianza deve usare il mezzo meno intrusivo, essere giustificata da un bisogno specifico e con conservazione il piu' breve possibile; va informato chi e' sorvegliato.",
      fonte: FONTE_IDP_LINEA_GUIDA,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per il monitoraggio sistematico su larga scala (art. 31)",
      risposta: 'si',
      dettaglio:
        "Serve una valutazione d'impatto quando il trattamento e' suscettibile di comportare un rischio elevato, incluso il monitoraggio sistematico su larga scala.",
      fonte: FONTE_LEGGE_124_2024,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        "Individua una base giuridica valida (interesse legittimo, art. 7) e tieni il registro interno dei trattamenti.",
    },
    {
      passo: 2,
      descrizione: 'Informa i lavoratori prima della raccolta dei dati (art. 13).',
    },
    {
      passo: 3,
      descrizione: "Verifica il mezzo meno intrusivo e una finalita' specifica.",
    },
    {
      passo: 4,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio sistematico; consulta l'IDP se il rischio residuo resta elevato.",
    },
    {
      passo: 5,
      descrizione: 'Configura il sistema con minimizzazione e conservazione minima.',
    },
  ],

  contatti: [
    {
      ente: 'IDP',
      portale: FONTE_IDP_UFFICIALE.url,
      urlFonte: FONTE_IDP_UFFICIALE.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: '460.000 ALL (circa 4.400 €)',
    casoCitato:
      "IDP, decisione 49/1 dell'8 gennaio 2024: sanzione a EuroCom CX per aver monitorato i dipendenti tramite videosorveglianza installata negli uffici a loro insaputa, in violazione dell'obbligo di informazione. Non e' un caso di GPS, ed e' stato deciso sotto la legge precedente (9887/2008), poi abrogata dalla Legge 124/2024.",
    urlFonte: FONTE_IDP_EUROCOM.url,
  },

  fonti: [
    FONTE_LEGGE_124_2024,
    FONTE_IDP_LINEA_GUIDA,
    FONTE_IDP_UFFICIALE,
    FONTE_IDP_EUROCOM,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
