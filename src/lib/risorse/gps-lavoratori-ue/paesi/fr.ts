/**
 * Scheda-paese Francia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. L2312-38 e art. L1222-4 del Code du travail, guida CNIL sulla
 * geolocalizzazione dei veicoli dei dipendenti, lista CNIL dei trattamenti che
 * richiedono un'AIPD, abolizione delle dichiarazioni preventive alla CNIL dal
 * 25 maggio 2018, sanzioni CNIL 2025 in procedura semplificata, sanzione CNIL
 * UBEEQO (175.000 €) e GDPR.
 *
 * La Francia non e' uno Stato federale: c'e' un'unica autorita' nazionale, la
 * CNIL, senza ripartizione regionale. Nessun numero, URL o autorita' e'
 * inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_L2312_38 = {
  titolo: 'Code du travail, art. L2312-38 (consultazione del CSE sui mezzi di controllo)',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035610275/',
};
const FONTE_L1222_4 = {
  titolo: 'Code du travail, art. L1222-4 (nessuna raccolta da dispositivo non portato a conoscenza)',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006900861',
};
const FONTE_CNIL_GEOLOCALIZZAZIONE = {
  titolo: 'CNIL, guida sulla geolocalizzazione dei veicoli dei dipendenti',
  url: 'https://www.cnil.fr/fr/la-geolocalisation-des-vehicules-des-salaries',
};
const FONTE_CNIL_AIPD = {
  titolo: "CNIL, lista dei trattamenti che richiedono una valutazione d'impatto (AIPD)",
  url: 'https://www.cnil.fr/sites/default/files/atoms/files/liste-traitements-avec-aipd-requise-v2.pdf',
};
const FONTE_CNIL_ABOLIZIONE_FORMALITA = {
  titolo: 'CNIL, abolizione delle dichiarazioni preventive dal 25 maggio 2018',
  url: 'https://www.cnil.fr/fr/cnil-direct/question/reglement-europeen-faut-il-encore-effectuer-des-declarations-la-cnil',
};
const FONTE_CNIL_SANZIONI_2025 = {
  titolo: 'CNIL, dieci nuove sanzioni (procedura semplificata, 2025)',
  url: 'https://www.cnil.fr/fr/la-cnil-prononce-dix-nouvelles-sanctions-dans-le-cadre-de-sa-procedure-simplifiee',
};
const FONTE_EDPB_UBEEQO = {
  titolo: 'EDPB, la CNIL sanziona UBEEQO International (175.000 €, 7 luglio 2022)',
  url: 'https://edpb.europa.eu/news/national-news/2022/geolocalisation-data-french-sa-fines-ubeeqo-international-eu175-000_en',
};
const FONTE_CNIL_RECLAMO = {
  titolo: 'CNIL, presentare un reclamo',
  url: 'https://www.cnil.fr/fr/plaintes',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const francia: SchedaPaese = {
  codiceISO: 'FR',
  slugCanonico: 'francia',
  nome: 'Francia',
  nomi: {
    it: 'Francia',
    en: 'France',
    'en-us': 'France',
    'en-gb': 'France',
    'en-au': 'France',
    'en-ie': 'France',
    'en-ca': 'France',
    de: 'Frankreich',
    nl: 'Frankrijk',
    fr: 'France',
    es: 'Francia',
    pt: 'França',
    da: 'Frankrig',
    sv: 'Frankrike',
    nb: 'Frankrike',
    ru: 'Франция',
  },
  bandiera: '🇫🇷',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: "CNIL (Commission Nationale de l'Informatique et des Libertes)",
    urlFonte: FONTE_CNIL_GEOLOCALIZZAZIONE.url,
    verificatoIl: '2026-06-15',
    note: "La Francia ha un'unica autorita nazionale, la CNIL; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: 'Consultazione del CSE prima di installare il sistema di controllo (art. L2312-38)',
      risposta: 'dipende',
      dettaglio:
        "Prima di decidere di installare un mezzo di controllo dell'attivita dei dipendenti, il datore deve informare e consultare il CSE (Comitato Sociale ed Economico). Vale pero solo dove un CSE esiste: e obbligatorio dagli 11 dipendenti in su. Sotto quella soglia non c'e CSE da consultare, ma resta l'obbligo di informare individualmente ogni dipendente (art. L1222-4).",
      fonte: FONTE_L2312_38,
    },
    {
      voce: "Autorizzazione di un'autorita del lavoro prima di installare",
      risposta: 'no',
      dettaglio:
        "La Francia non prevede un'autorizzazione preventiva di un'autorita del lavoro, ne piu' dichiarazioni preventive alla CNIL (abolite dal 25 maggio 2018 col GDPR). Il modello e basato sulla responsabilizzazione: registro dei trattamenti e AIPD quando il rischio e elevato.",
      fonte: FONTE_CNIL_ABOLIZIONE_FORMALITA,
    },
    {
      voce: 'Informazione individuale e preventiva del lavoratore (art. L1222-4 + art. 13 GDPR)',
      risposta: 'si',
      dettaglio:
        'Nessun dato puo essere raccolto da un dispositivo non portato preventivamente a conoscenza del lavoratore; ognuno va informato su titolare, finalita, destinatari e diritti.',
      fonte: FONTE_L1222_4,
    },
    {
      voce: 'Divieto di sorveglianza permanente: geolocalizzazione sussidiaria e disattivabile fuori orario',
      risposta: 'si',
      dettaglio:
        "Per la CNIL la geolocalizzazione non puo servire a controllare il dipendente in permanenza, e sussidiaria (vietata se esiste gia un mezzo meno intrusivo, es. per calcolare l'orario se esiste gia un altro sistema di timbratura) e deve poter essere disattivata fuori dall'orario di lavoro.",
      fonte: FONTE_CNIL_GEOLOCALIZZAZIONE,
    },
    {
      voce: "Valutazione d'impatto (AIPD) per la sorveglianza costante dell'attivita dei dipendenti",
      risposta: 'si',
      dettaglio:
        "La lista CNIL include tra i trattamenti che richiedono un'AIPD quelli che sorvegliano in modo costante l'attivita dei dipendenti e i trattamenti di dati di localizzazione su larga scala.",
      fonte: FONTE_CNIL_AIPD,
    },
    {
      voce: 'Conservazione limitata dei dati di localizzazione',
      risposta: 'si',
      dettaglio:
        'La CNIL indica in generale una conservazione di circa due mesi, estendibile fino a un anno solo per provare una prestazione svolta.',
      fonte: FONTE_CNIL_GEOLOCALIZZAZIONE,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        "Se esiste un CSE, informalo e consultalo prima di decidere l'installazione (art. L2312-38).",
    },
    {
      passo: 2,
      descrizione:
        'Informa individualmente e preventivamente ogni lavoratore (art. L1222-4, art. 13 GDPR).',
    },
    {
      passo: 3,
      descrizione:
        'Verifica la sussidiarieta: la geolocalizzazione non e ammessa se esiste gia un mezzo meno intrusivo per la stessa finalita.',
    },
    {
      passo: 4,
      descrizione:
        "Svolgi la valutazione d'impatto (AIPD) se il trattamento sorveglia in modo costante o tratta localizzazione su larga scala.",
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema: niente tracciamento permanente, disattivazione fuori orario, conservazione limitata.',
    },
    {
      passo: 6,
      descrizione:
        'Tieni aggiornato il registro dei trattamenti (responsabilizzazione, non piu dichiarazione preventiva).',
    },
  ],

  contatti: [
    {
      ente: 'CNIL, presentare un reclamo',
      portale: FONTE_CNIL_RECLAMO.url,
      urlFonte: FONTE_CNIL_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: '175.000 €',
    casoCitato:
      "CNIL contro UBEEQO International, 7 luglio 2022: geolocalizzazione quasi permanente in violazione della minimizzazione, della durata di conservazione e dell'obbligo di informazione. Riguardava i veicoli a noleggio (clienti), non i dipendenti in senso stretto, ma e la sanzione faro francese sulla geolocalizzazione continua eccessiva. Nel 2025 la CNIL ha inoltre sanzionato piu datori per la geolocalizzazione continua dei veicoli dei dipendenti senza possibilita di sospensione durante le pause.",
    urlFonte: FONTE_EDPB_UBEEQO.url,
  },

  fonti: [
    FONTE_L2312_38,
    FONTE_L1222_4,
    FONTE_CNIL_GEOLOCALIZZAZIONE,
    FONTE_CNIL_AIPD,
    FONTE_CNIL_ABOLIZIONE_FORMALITA,
    FONTE_CNIL_SANZIONI_2025,
    FONTE_EDPB_UBEEQO,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
