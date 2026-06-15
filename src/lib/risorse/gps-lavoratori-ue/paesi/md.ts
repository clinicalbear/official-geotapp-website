/**
 * Scheda-paese Moldova per la risorsa "GPS sui lavoratori in UE".
 *
 * Attenzione: la Moldova NON e' uno Stato membro dell'UE, ma un paese candidato.
 * La legge in vigore nel 2026 e' la Legge 133/2011 sulla protezione dei dati
 * personali; una nuova legge allineata al GDPR (Legge 195/2024) entra in vigore
 * solo il 23 agosto 2026. Il quadro descritto qui e' allineato al GDPR ma distinto.
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Legge 133/2011, guida del CNPDCP sulla videosorveglianza, pagina reclami del
 * CNPDCP, scheda DLA Piper sulla protezione dati in Moldova e GDPR come
 * riferimento comparativo. Unica autorita' nazionale, il CNPDCP; nessuna
 * ripartizione regionale. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_LEGGE_133 = {
  titolo: 'Legge n. 133/2011 sulla protezione dei dati personali',
  url: 'https://www.legis.md/cautare/getResults?doc_id=128114&lang=ro',
};
const FONTE_CNPDCP_VIDEO = {
  titolo:
    "CNPDCP, guida sull'installazione e gestione della videosorveglianza",
  url: 'https://datepersonale.md/en/data-controller/ncpdp-guidelines/',
};
const FONTE_CNPDCP_RECLAMI = {
  titolo: 'CNPDCP, presentare un reclamo',
  url: 'https://datepersonale.md/about/plingeri-si-petitii/',
};
const FONTE_DLA_PIPER = {
  titolo:
    'DLA Piper, protezione dei dati in Moldova (DPIA, registrazione abolita)',
  url: 'https://www.dlapiperdataprotection.com/?t=law&c=MD',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) - riferimento comparativo',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const moldova: SchedaPaese = {
  codiceISO: 'MD',
  slugCanonico: 'moldova',
  nome: 'Moldova',
  nomi: {
    it: 'Moldova',
    en: 'Moldova',
    'en-us': 'Moldova',
    'en-gb': 'Moldova',
    'en-au': 'Moldova',
    'en-ie': 'Moldova',
    'en-ca': 'Moldova',
    de: 'Moldau',
    nl: 'Moldavië',
    fr: 'Moldavie',
    es: 'Moldavia',
    pt: 'Moldávia',
    da: 'Moldova',
    sv: 'Moldavien',
    nb: 'Moldova',
    ru: 'Молдова',
  },
  bandiera: '🇲🇩',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'CNPDCP (Centro nazionale per la protezione dei dati personali)',
    portale: FONTE_CNPDCP_RECLAMI.url,
    urlFonte: FONTE_CNPDCP_RECLAMI.url,
    verificatoIl: '2026-06-15',
    note: "La Moldova e' un paese candidato, fuori dall'UE; la legge in vigore e' la 133/2011, mentre una nuova legge allineata al GDPR (195/2024) entra in vigore il 23 agosto 2026. Unica autorita' nazionale, il CNPDCP; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: 'Base giuridica valida e informazione ai lavoratori (Legge 133/2011 + Codice del lavoro art. 91-94)',
      risposta: 'si',
      dettaglio:
        "Il monitoraggio dei lavoratori (video, internet e per estensione GPS) e' disciplinato dalla Legge 133/2011 e dal Codice del lavoro (artt. 91-94); i lavoratori vanno informati su chi accede ai dati e su quali dati si raccolgono.",
      fonte: FONTE_LEGGE_133,
    },
    {
      voce: "Notifica o registrazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "L'obbligo di notifica/registrazione dei sistemi di dati al CNPDCP e' stato abolito dal 10 gennaio 2022 ed e' stato sostituito da una valutazione d'impatto a carico del titolare.",
      fonte: FONTE_DLA_PIPER,
    },
    {
      voce: 'Base = consenso o interesse legittimo',
      risposta: 'si',
      dettaglio:
        "Il trattamento si fonda sul consenso o su un'altra base, incluso l'interesse legittimo del titolare (salvo prevalenza dei diritti dell'interessato).",
      fonte: FONTE_DLA_PIPER,
    },
    {
      voce: 'Minimizzazione e limitazione della finalita; niente tracciamento eccessivo fuori orario',
      risposta: 'si',
      dettaglio:
        "Valgono i principi di minimizzazione e limitazione della finalita'; un tracciamento GPS continuo o fuori dall'orario di lavoro e' sproporzionato.",
      fonte: FONTE_CNPDCP_VIDEO,
    },
    {
      voce: "Valutazione d'impatto (DPIA)",
      risposta: 'si',
      dettaglio:
        "Dal 2022 il titolare deve svolgere una valutazione d'impatto (che ha sostituito la registrazione), descrivendo i trattamenti previsti, la finalita' e l'interesse legittimo.",
      fonte: FONTE_DLA_PIPER,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Individua una base giuridica valida (consenso o interesse legittimo).',
    },
    {
      passo: 2,
      descrizione:
        'Informa i lavoratori su quali dati si raccolgono e chi vi accede.',
    },
    {
      passo: 3,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) prima di attivare il sistema.",
    },
    {
      passo: 4,
      descrizione: 'Applica minimizzazione e limitazione della finalita.',
    },
    {
      passo: 5,
      descrizione:
        "Configura il sistema: niente tracciamento continuo o fuori dall'orario di lavoro.",
    },
  ],

  contatti: [
    {
      ente: 'CNPDCP, reclami',
      portale: FONTE_CNPDCP_RECLAMI.url,
      urlFonte: FONTE_CNPDCP_RECLAMI.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo:
      'fino a 20 milioni di euro o 4% del fatturato con la nuova legge in stile GDPR (dal 23 agosto 2026)',
    casoCitato:
      "Non risulta una decisione del CNPDCP specifica e pubblicata sul GPS sui dipendenti. La legge in vigore (133/2011) prevede sanzioni piu' contenute; la nuova legge 195/2024, in vigore dal 23 agosto 2026, allinea il quadro al GDPR (fino a 20 milioni di euro o 4% del fatturato).",
    urlFonte: FONTE_DLA_PIPER.url,
  },

  fonti: [
    FONTE_LEGGE_133,
    FONTE_CNPDCP_VIDEO,
    FONTE_CNPDCP_RECLAMI,
    FONTE_DLA_PIPER,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
