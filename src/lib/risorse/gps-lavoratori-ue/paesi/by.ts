/**
 * Scheda-paese Bielorussia per la risorsa "GPS sui lavoratori in UE".
 *
 * ATTENZIONE: la Bielorussia NON e' uno Stato membro dell'UE e NON applica il
 * GDPR. Vale la Legge della Repubblica di Bielorussia n. 99-Z del 7 maggio 2021
 * sulla protezione dei dati personali, basata sul CONSENSO come base giuridica
 * principale. Il contesto e' autoritario e la trasparenza sull'applicazione
 * delle norme e' limitata: le indicazioni qui sotto vanno lette con cautela.
 *
 * Contenuti basati su fonti citate nella sezione "Fonti": Legge 99-Z e
 * informazioni dell'NPDPC (Centro nazionale per la protezione dei dati
 * personali), analisi GRATA sulla privacy dei dipendenti e scheda DLA Piper
 * sull'applicazione. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti citate.
const FONTE_LEGGE_99Z = {
  titolo:
    'Legge della Repubblica di Bielorussia n. 99-Z del 7 maggio 2021 sulla protezione dei dati personali (NPDPC)',
  url: 'https://cpd.by/en/national-regulation/the-belarusian-data-protection-act/',
};
const FONTE_NPDPC = {
  titolo: 'NPDPC (Garante bielorusso), informazioni e contatti',
  url: 'https://cpd.by/en/about-center/',
};
const FONTE_GRATA = {
  titolo:
    'GRATA, protezione dei dati e privacy dei dipendenti in Bielorussia',
  url: 'https://gratanet.com/publications/data-protection-and-employee-privacy-in-belarus',
};
const FONTE_DLA_PIPER = {
  titolo: 'DLA Piper, applicazione e sanzioni in Bielorussia',
  url: 'https://www.dlapiperdataprotection.com/?t=enforcement&c=BY',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) - riferimento comparativo lontano',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const bielorussia: SchedaPaese = {
  codiceISO: 'BY',
  slugCanonico: 'bielorussia',
  nome: 'Bielorussia',
  nomi: {
    it: 'Bielorussia',
    en: 'Belarus',
    'en-us': 'Belarus',
    'en-gb': 'Belarus',
    'en-au': 'Belarus',
    'en-ie': 'Belarus',
    'en-ca': 'Belarus',
    de: 'Belarus',
    nl: 'Belarus',
    fr: 'Biélorussie',
    es: 'Bielorrusia',
    pt: 'Bielorrússia',
    da: 'Hviderusland',
    sv: 'Vitryssland',
    nb: 'Hviterussland',
    ru: 'Беларусь',
  },
  bandiera: '🇧🇾',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'NPDPC (Centro nazionale per la protezione dei dati personali)',
    portale: FONTE_NPDPC.url,
    urlFonte: FONTE_NPDPC.url,
    verificatoIl: '2026-06-15',
    note: "La Bielorussia e' fuori dall'UE e non applica il GDPR. Vale la Legge 99-Z del 2021, basata sul consenso. Contesto autoritario e trasparenza limitata sull'applicazione. Unica autorita' nazionale, l'NPDPC.",
  },

  checklist: [
    {
      voce: 'Consenso separato e specifico del lavoratore per la geolocalizzazione + informazione dettagliata (Legge 99-Z)',
      risposta: 'si',
      dettaglio:
        "Il modello bielorusso si basa sul consenso; per il GPS conviene il consenso separato e specifico del lavoratore, con un'informazione dettagliata (titolare, finalita', elenco dei dati, durata, soggetti che trattano, diritti). L'eccezione per i rapporti di lavoro copre la gestione ordinaria del rapporto, non una sorveglianza GPS continua.",
      fonte: FONTE_LEGGE_99Z,
    },
    {
      voce: "Autorizzazione o registrazione preventiva di un'autorita' prima di installare",
      risposta: 'dipende',
      dettaglio:
        "Non serve un'autorizzazione preventiva generale; l'iscrizione al registro degli operatori e' richiesta solo per categorie a rischio (dati biometrici/genetici, trasferimenti speciali, 100.000+ interessati). Un datore che fa GPS sul proprio personale di norma resta sotto soglia.",
      fonte: FONTE_DLA_PIPER,
    },
    {
      voce: 'Base = di norma il consenso (modello consent-centric, diverso dal GDPR)',
      risposta: 'si',
      dettaglio:
        "A differenza del GDPR, la base principale e' il consenso del lavoratore, e serve un consenso per ciascuna finalita' del trattamento.",
      fonte: FONTE_GRATA,
    },
    {
      voce: 'Niente trattamento oltre la finalita; consenso per ogni finalita',
      risposta: 'si',
      dettaglio:
        "Il trattamento va limitato alle finalita' dichiarate, con un consenso separato per ciascuna; il titolare deve informare i lavoratori e cessare il trattamento quando viene meno la base.",
      fonte: FONTE_GRATA,
    },
    {
      voce: "Valutazione d'impatto (DPIA)",
      risposta: 'no',
      dettaglio:
        "La legge bielorussa non prevede una valutazione d'impatto in stile GDPR; prevede pero' l'obbligo di un responsabile della protezione dei dati e la notifica delle violazioni entro 3 giorni lavorativi.",
      fonte: FONTE_DLA_PIPER,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Raccogli il consenso separato e specifico del lavoratore per la geolocalizzazione.',
    },
    {
      passo: 2,
      descrizione:
        "Informa in dettaglio (titolare, finalita', elenco dei dati, durata, soggetti che trattano, diritti).",
    },
    {
      passo: 3,
      descrizione:
        "Verifica se rientri nelle soglie di iscrizione al registro degli operatori (dati a rischio).",
    },
    {
      passo: 4,
      descrizione:
        'Nomina un responsabile della protezione dei dati e predisponi la notifica delle violazioni entro 3 giorni.',
    },
    {
      passo: 5,
      descrizione:
        "Limita il trattamento alle finalita' dichiarate e cessa quando viene meno la base.",
    },
  ],

  contatti: [
    {
      ente: 'NPDPC',
      portale: FONTE_NPDPC.url,
      urlFonte: FONTE_NPDPC.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo:
      'fino a circa 200 unita\' base (circa 2.600 euro), oltre alla possibile responsabilita\' penale',
    casoCitato:
      "Non risulta una decisione bielorussa specifica e pubblicata sul GPS sui dipendenti, e la trasparenza sull'applicazione e' limitata. Le sanzioni amministrative massime per violazioni sui dati arrivano a circa 200 unita' base (circa 2.600 euro), con possibile responsabilita' penale nei casi piu' gravi.",
    urlFonte: FONTE_DLA_PIPER.url,
  },

  fonti: [
    FONTE_LEGGE_99Z,
    FONTE_NPDPC,
    FONTE_GRATA,
    FONTE_DLA_PIPER,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
