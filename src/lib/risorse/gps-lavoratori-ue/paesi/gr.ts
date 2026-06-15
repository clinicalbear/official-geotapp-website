/**
 * Scheda-paese Grecia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * FAQ dell'HDPA (Garante greco) sui rapporti di lavoro, art. 27 della Legge
 * 4624/2019 (dati dei dipendenti), Decisione HDPA 65/2018 (lista dei
 * trattamenti che richiedono una DPIA), sanzione HDPA del 16 febbraio 2024 per
 * geolocalizzazione di un dipendente, pagina ufficiale dell'HDPA e GDPR.
 *
 * La Grecia ha un'unica autorita nazionale, l'HDPA; non ci sono ripartizioni
 * regionali. Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_HDPA_FAQ = {
  titolo:
    'HDPA (Garante greco), FAQ sui rapporti di lavoro (geolocalizzazione)',
  url: 'https://www.dpa.gr/el/enimerwtiko/thematikes_enotites/eidikoiskopoi/ergasiakessxeseis/faq_ergasiakes',
};
const FONTE_LEGGE_4624 = {
  titolo:
    'Legge 4624/2019, art. 27 (dati dei dipendenti) - traduzione ufficiale HDPA',
  url: 'https://www.dataguidance.com/sites/default/files/law_4624_2019_en_translated_by_the_hdpa_0.pdf',
};
const FONTE_HDPA_DPIA = {
  titolo:
    'HDPA, Decisione 65/2018 (lista dei trattamenti che richiedono DPIA)',
  url: 'https://www.dpa.gr/sites/default/files/2019-09/65_2018anonym.pdf',
};
const FONTE_HDPA_SANZIONE = {
  titolo:
    'HDPA, sanzione a un datore per geolocalizzazione (16 febbraio 2024)',
  url: 'https://www.dpa.gr/el/enimerwtiko/prakseisArxis/prostimo-kai-epiplixi-se-ergodoti-gia-epexergasia-prosopikon-dedomenon',
};
const FONTE_HDPA = {
  titolo: 'HDPA (Garante greco), pagina ufficiale',
  url: 'https://www.dpa.gr/en',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const grecia: SchedaPaese = {
  codiceISO: 'GR',
  slugCanonico: 'grecia',
  nome: 'Grecia',
  nomi: {
    it: 'Grecia',
    en: 'Greece',
    'en-us': 'Greece',
    'en-gb': 'Greece',
    'en-au': 'Greece',
    'en-ie': 'Greece',
    'en-ca': 'Greece',
    de: 'Griechenland',
    nl: 'Griekenland',
    fr: 'Grèce',
    es: 'Grecia',
    pt: 'Grécia',
    da: 'Grækenland',
    sv: 'Grekland',
    nb: 'Hellas',
    ru: 'Греция',
  },
  bandiera: '🇬🇷',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'HDPA (Garante greco per la protezione dei dati)',
    portale: FONTE_HDPA.url,
    urlFonte: FONTE_HDPA.url,
    verificatoIl: '2026-06-15',
    note: "La Grecia ha un'unica autorita nazionale, l'HDPA; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: 'Informazione ai lavoratori su finalita, tipo di dati raccolti e durata di conservazione',
      risposta: 'si',
      dettaglio:
        'il datore deve informare i lavoratori sullo scopo del trattamento, sul tipo di dati registrati e sul tempo di conservazione.',
      fonte: FONTE_HDPA_FAQ,
    },
    {
      voce: "La geolocalizzazione non deve mirare a sorvegliare il lavoratore; limitata all'orario e a un percorso predefinito",
      risposta: 'si',
      dettaglio:
        "per l'HDPA l'installazione di un sistema di geolocalizzazione non lede la sfera privata del lavoratore quando non mira a sorvegliarlo; va limitata all'orario di lavoro e a un percorso predefinito.",
      fonte: FONTE_HDPA_FAQ,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "non serve un'autorizzazione preventiva dell'HDPA; la consultazione preventiva e prevista solo se la DPIA evidenzia un rischio residuo elevato.",
      fonte: FONTE_HDPA_FAQ,
    },
    {
      voce: 'Niente uso fuori orario; sistema disattivabile; conservazione non oltre un mese',
      risposta: 'si',
      dettaglio:
        'il lavoratore non deve usare il veicolo fuori orario, il sistema deve poter essere disattivato quando il lavoratore lo desidera, e la conservazione non deve superare un mese.',
      fonte: FONTE_HDPA_FAQ,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per il monitoraggio sistematico della posizione dei lavoratori (Decisione 65/2018)",
      risposta: 'si',
      dettaglio:
        "la lista HDPA include il monitoraggio sistematico della posizione dei dipendenti tra i trattamenti che richiedono una valutazione d'impatto.",
      fonte: FONTE_HDPA_DPIA,
    },
    {
      voce: 'Base giuridica = interesse legittimo, non il consenso (Legge 4624/2019 art. 27)',
      risposta: 'si',
      dettaglio:
        "nel rapporto di lavoro il consenso non e considerato liberamente prestato per lo squilibrio di potere; la base e l'interesse legittimo e la necessita per il contratto.",
      fonte: FONTE_LEGGE_4624,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Informa i lavoratori su finalita, dati raccolti e durata di conservazione.',
    },
    {
      passo: 2,
      descrizione:
        "Verifica che la geolocalizzazione non miri a sorvegliare il lavoratore e sia limitata all'orario e a un percorso predefinito.",
    },
    {
      passo: 3,
      descrizione:
        'Individua una base giuridica valida (interesse legittimo, non il consenso).',
    },
    {
      passo: 4,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio sistematico della posizione.",
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema: disattivabile fuori orario, conservazione non oltre un mese.',
    },
  ],

  contatti: [
    {
      ente: 'HDPA',
      portale: FONTE_HDPA.url,
      urlFonte: FONTE_HDPA.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: '2.000 €',
    casoCitato:
      "HDPA (Garante greco), decisione del 16 febbraio 2024: un datore aveva usato il GPS del veicolo aziendale per localizzare un dipendente mentre era in congedo legittimo, fuori dall'orario di lavoro. Multa 2.000 euro per violazione di liceita e trasparenza, piu un'ammonizione e l'ordine di adottare sistemi disattivabili dagli utenti.",
    urlFonte: FONTE_HDPA_SANZIONE.url,
  },

  fonti: [
    FONTE_HDPA_FAQ,
    FONTE_LEGGE_4624,
    FONTE_HDPA_DPIA,
    FONTE_HDPA_SANZIONE,
    FONTE_HDPA,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
