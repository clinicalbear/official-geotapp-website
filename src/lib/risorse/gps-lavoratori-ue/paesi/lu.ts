/**
 * Scheda-paese Lussemburgo per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. L.261-1 del Code du travail (sorveglianza dei lavoratori, informazione
 * preventiva e codecisione della delegazione del personale, parere CNPD con
 * effetto sospensivo), guida CNPD sulla geolocalizzazione dei veicoli
 * (necessita e proporzionalita, abolizione dell'autorizzazione preventiva),
 * guida CNPD sulla valutazione d'impatto (AIPD), decisione CNPD 11FR/2021,
 * pagina CNPD sui reclami e GDPR.
 *
 * Il Lussemburgo ha un'unica autorita nazionale, la CNPD; nessuna ripartizione
 * regionale. Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_L261_1 = {
  titolo:
    'Code du travail, art. L.261-1 (sorveglianza dei lavoratori) - riproduzione CNPD',
  url: 'https://cnpd.public.lu/fr/dossiers-thematiques/surveillance/geolocalisation-vehicules/surveillance.html',
};
const FONTE_CNPD_GEOLOC = {
  titolo:
    'CNPD, geolocalizzazione dei veicoli: necessita e proporzionalita',
  url: 'https://cnpd.public.lu/fr/dossiers-thematiques/surveillance/geolocalisation-vehicules/necessite-proportionnalite.html',
};
const FONTE_CNPD_AIPD = {
  titolo: "CNPD, geolocalizzazione: valutazione d'impatto (AIPD)",
  url: 'https://cnpd.public.lu/fr/dossiers-thematiques/surveillance/geolocalisation-vehicules/aipd.html',
};
const FONTE_CNPD_DECISIONE_11FR = {
  titolo:
    'CNPD, decisione 11FR/2021 (sanzione geolocalizzazione veicoli di servizio)',
  url: 'https://cnpd.public.lu/fr/decisions-sanctions/2021/decision-11-fr-2021.html',
};
const FONTE_CNPD_RECLAMO = {
  titolo: 'CNPD, presentare un reclamo',
  url: 'https://cnpd.public.lu/fr/support/protection-des-donnees.html',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const lussemburgo: SchedaPaese = {
  codiceISO: 'LU',
  slugCanonico: 'lussemburgo',
  nome: 'Lussemburgo',
  nomi: {
    it: 'Lussemburgo',
    en: 'Luxembourg',
    'en-us': 'Luxembourg',
    'en-gb': 'Luxembourg',
    'en-au': 'Luxembourg',
    'en-ie': 'Luxembourg',
    'en-ca': 'Luxembourg',
    de: 'Luxemburg',
    nl: 'Luxemburg',
    fr: 'Luxembourg',
    es: 'Luxemburgo',
    pt: 'Luxemburgo',
    da: 'Luxembourg',
    sv: 'Luxemburg',
    nb: 'Luxembourg',
    ru: 'Люксембург',
  },
  bandiera: '🇱🇺',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'CNPD (Commission nationale pour la protection des donnees)',
    portale: FONTE_CNPD_RECLAMO.url,
    urlFonte: FONTE_CNPD_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: "Il Lussemburgo ha un'unica autorita nazionale, la CNPD; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: 'Informazione collettiva preventiva alla delegazione del personale e codecisione (Code du travail art. L.261-1)',
      risposta: 'dipende',
      dettaglio:
        "Prima di installare il monitoraggio, il datore deve informare preventivamente la delegazione del personale; per le finalita previste la messa in opera e soggetta a codecisione con la delegazione. Vale dove esiste una delegazione del personale.",
      fonte: FONTE_L261_1,
    },
    {
      voce: 'Possibilita per la delegazione o i lavoratori di chiedere un parere preventivo alla CNPD entro 15 giorni (effetto sospensivo)',
      risposta: 'dipende',
      dettaglio:
        "La delegazione del personale, o in sua assenza i lavoratori interessati, possono chiedere entro 15 giorni dall'informazione preventiva un parere alla CNPD, e la richiesta ha effetto sospensivo.",
      fonte: FONTE_L261_1,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "La vecchia autorizzazione preventiva della CNPD e stata abolita col GDPR ed e sostituita dalla codecisione con la delegazione del personale; resta l'obbligo di tenere il registro dei trattamenti.",
      fonte: FONTE_CNPD_GEOLOC,
    },
    {
      voce: "Base = una condizione dell'art. 6 GDPR e informazione individuale; niente tracciamento permanente se e ammesso l'uso privato, disattivabile dal lavoratore",
      risposta: 'si',
      dettaglio:
        "Serve una base dell'art. 6 GDPR e l'informazione individuale (art. 13); il datore non puo sorvegliare fuori dall'orario, e se e ammesso l'uso privato del veicolo il sistema non puo restare permanente e il lavoratore deve poterlo disattivare.",
      fonte: FONTE_CNPD_GEOLOC,
    },
    {
      voce: "Valutazione d'impatto (AIPD) per la geolocalizzazione che controlla regolarmente o sistematicamente i dipendenti (es. per il tempo di lavoro)",
      risposta: 'si',
      dettaglio:
        "Serve una valutazione d'impatto quando la geolocalizzazione comporta un controllo regolare e sistematico dei dipendenti o ne segue il tempo di lavoro.",
      fonte: FONTE_CNPD_AIPD,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Informa preventivamente la delegazione del personale e attiva la codecisione (art. L.261-1).',
    },
    {
      passo: 2,
      descrizione:
        'Lascia alla delegazione o ai lavoratori la possibilita di chiedere un parere alla CNPD entro 15 giorni (effetto sospensivo).',
    },
    {
      passo: 3,
      descrizione:
        "Individua una base giuridica dell'art. 6 GDPR e informa individualmente i lavoratori (art. 13).",
    },
    {
      passo: 4,
      descrizione:
        "Svolgi la valutazione d'impatto (AIPD) se la geolocalizzazione controlla regolarmente i dipendenti.",
    },
    {
      passo: 5,
      descrizione:
        "Configura il sistema: niente tracciamento permanente se e ammesso l'uso privato, disattivabile dal lavoratore.",
    },
  ],

  contatti: [
    {
      ente: 'CNPD, reclami',
      portale: FONTE_CNPD_RECLAMO.url,
      urlFonte: FONTE_CNPD_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: '2.800 €',
    casoCitato:
      "CNPD, deliberazione 11FR/2021 dell'8 aprile 2021: sanzione a una societa per un sistema di geolocalizzazione dei veicoli di servizio gestito in modo illecito, con conservazione dei dati eccessiva (2 anni e 4 mesi), informazione carente ai lavoratori (art. 13) e sicurezza insufficiente (art. 32). Multa 2.800 euro.",
    urlFonte: FONTE_CNPD_DECISIONE_11FR.url,
  },

  fonti: [
    FONTE_L261_1,
    FONTE_CNPD_GEOLOC,
    FONTE_CNPD_AIPD,
    FONTE_CNPD_DECISIONE_11FR,
    FONTE_CNPD_RECLAMO,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
