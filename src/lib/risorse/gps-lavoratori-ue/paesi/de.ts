/**
 * Scheda-paese Germania per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * § 87 BetrVG (cogestione del consiglio aziendale), § 26 BDSG, sentenza CGUE
 * C-34/21, GDPR, guida del Garante della Renania-Palatinato sulla localizzazione
 * GPS, lista DSK dei trattamenti che richiedono una DPIA, elenco BfDI delle
 * autorita' dei Land e comunicato del Garante di Amburgo sul caso H&M.
 *
 * La Germania e' uno Stato federale: per le aziende private la vigilanza spetta
 * al Garante del Land in cui ha sede l'azienda, non al garante federale.
 * Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_BETRVG_87 = {
  titolo: 'Betriebsverfassungsgesetz, § 87 (cogestione del consiglio aziendale)',
  url: 'https://www.gesetze-im-internet.de/betrvg/__87.html',
};
const FONTE_BDSG_26 = {
  titolo: 'Bundesdatenschutzgesetz, § 26 (dati dei lavoratori)',
  url: 'https://www.gesetze-im-internet.de/bdsg_2018/__26.html',
};
const FONTE_GARANTE_BW_C3421 = {
  titolo:
    'Garante del Baden-Württemberg, FAQ sulle basi giuridiche dei dati dei dipendenti (sentenza CGUE C-34/21)',
  url: 'https://www.baden-wuerttemberg.datenschutz.de/faq-rechtsgrundlagen-bei-beschaeftigtendaten/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};
const FONTE_GARANTE_RLP_GPS = {
  titolo:
    'Garante della Renania-Palatinato, guida sulla localizzazione GPS dei dipendenti',
  url: 'https://www.datenschutz.rlp.de/themen/gps-ortung',
};
const FONTE_LISTA_DSK_DPIA = {
  titolo:
    "Lista DSK dei trattamenti che richiedono una valutazione d'impatto (settore privato)",
  url: 'https://www.lda.bayern.de/media/dsfa_muss_liste_dsk_de.pdf',
};
const FONTE_BFDI_LISTA_LAND = {
  titolo:
    'BfDI, elenco delle autorita garanti per la protezione dei dati dei Land',
  url: 'https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html',
};
const FONTE_HM_AMBURGO = {
  titolo:
    'Garante di Amburgo, comunicato del 1 ottobre 2020 (sanzione H&M)',
  url: 'https://datenschutz-hamburg.de/fileadmin/user_upload/HmbBfDI/Pressemitteilungen/2020/2020-10-01-H_M.pdf',
};
const FONTE_BAYLDA = {
  titolo: 'BayLDA, autorita garante della Baviera',
  url: 'https://www.lda.bayern.de/de/index.html',
};
const FONTE_BLNBDI = {
  titolo: 'BlnBDI, autorita garante di Berlino',
  url: 'https://www.datenschutz-berlin.de/',
};

export const germania: SchedaPaese = {
  codiceISO: 'DE',
  slugCanonico: 'germania',
  nome: 'Germania',
  nomi: {
    it: 'Germania',
    en: 'Germany',
    'en-us': 'Germany',
    'en-gb': 'Germany',
    'en-au': 'Germany',
    'en-ie': 'Germany',
    'en-ca': 'Germany',
    de: 'Deutschland',
    nl: 'Duitsland',
    fr: 'Allemagne',
    es: 'Alemania',
    pt: 'Alemanha',
    da: 'Tyskland',
    sv: 'Tyskland',
    nb: 'Tyskland',
    ru: 'Германия',
  },
  bandiera: '🇩🇪',
  federale: true,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Autorita garante per la protezione dati del Land in cui ha sede l\'azienda',
    urlFonte: FONTE_BFDI_LISTA_LAND.url,
    verificatoIl: '2026-06-15',
    note: "La Germania e' federale: per le aziende private vigila il Garante del Land della sede (16 autorita'), non il garante federale. Esempi: Baviera BayLDA, Berlino BlnBDI. L'elenco ufficiale e' sul sito del BfDI.",
  },

  checklist: [
    {
      voce: 'Accordo col consiglio aziendale (Betriebsvereinbarung) prima di installare, ex § 87 BetrVG',
      risposta: 'dipende',
      dettaglio:
        "In Germania la cogestione del Betriebsrat e' obbligatoria per i sistemi tecnici idonei a sorvegliare comportamento o rendimento dei lavoratori (§ 87 c.1 n. 6 BetrVG): senza accordo col consiglio aziendale non si puo' attivare. Ma vale SOLO dove un Betriebsrat esiste; molte PMI non ce l'hanno, e allora questo passaggio non c'e' (resta comunque tutto il GDPR). Conta l'idoneita' oggettiva a sorvegliare, non l'intenzione del datore.",
      fonte: FONTE_BETRVG_87,
    },
    {
      voce: "Autorizzazione di un'autorita' del lavoro prima di installare",
      risposta: 'no',
      dettaglio:
        "La Germania non prevede un'autorizzazione preventiva di un'autorita' del lavoro (nessun equivalente dell'Ispettorato italiano). Il filtro e' l'accordo col consiglio aziendale; l'autorita' garante interviene solo come vigilanza, ed e' consultata prima soltanto nel caso dell'art. 36 GDPR (rischio elevato non mitigabile emerso dalla DPIA).",
      fonte: FONTE_BETRVG_87,
    },
    {
      voce: 'Base giuridica valida per il trattamento (Art. 6 GDPR)',
      risposta: 'si',
      dettaglio:
        "Serve una base giuridica. Attenzione: dopo la sentenza CGUE C-34/21 del 30 marzo 2023, il § 26 BDSG non basta da solo come base autonoma; il trattamento va fondato direttamente sull'art. 6 GDPR (es. esecuzione del contratto, obbligo legale, legittimo interesse con bilanciamento). Un'eventuale legge dedicata (Beschaeftigtendatengesetz) e' in discussione ma NON risulta in vigore.",
      fonte: FONTE_GARANTE_BW_C3421,
    },
    {
      voce: 'Informativa ai lavoratori (Art. 13 GDPR)',
      risposta: 'si',
      dettaglio:
        "I lavoratori vanno informati in modo chiaro su quali dati di posizione si raccolgono, come, quando e perche'.",
      fonte: FONTE_GDPR,
    },
    {
      voce: 'Divieto di tracciamento continuo (minimizzazione, Art. 5 GDPR)',
      risposta: 'si',
      dettaglio:
        "Il garante tedesco e' netto: i sistemi che consentono un controllo permanente dei dipendenti sono in linea di principio illeciti, e i lavoratori non vanno esposti a una pressione di controllo costante. La posizione si raccoglie solo quando serve a una finalita' legittima (es. sicurezza del lavoratore isolato, tutela del carico), non in continuo.",
      fonte: FONTE_GARANTE_RLP_GPS,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per la geolocalizzazione dei dipendenti",
      risposta: 'si',
      dettaglio:
        "La geolocalizzazione dei dipendenti e' espressamente nella lista DSK dei trattamenti che richiedono una valutazione d'impatto sulla protezione dei dati (art. 35 GDPR). Va fatta prima di attivare il sistema.",
      fonte: FONTE_LISTA_DSK_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Se esiste un Betriebsrat, negozia e firma la Betriebsvereinbarung prima di attivare (§ 87 BetrVG).',
    },
    {
      passo: 2,
      descrizione:
        "Individua una base giuridica valida ai sensi dell'art. 6 GDPR (non piu' il solo § 26 BDSG dopo la sentenza C-34/21).",
    },
    {
      passo: 3,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA): per la geolocalizzazione dei dipendenti e' richiesta.",
    },
    {
      passo: 4,
      descrizione: "Consegna l'informativa ai lavoratori (art. 13 GDPR).",
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema con minimizzazione: niente tracciamento continuo, posizione solo quando serve.',
    },
    {
      passo: 6,
      descrizione:
        "Se la DPIA evidenzia un rischio elevato non mitigabile, consulta preventivamente l'autorita' garante del tuo Land (art. 36 GDPR).",
    },
  ],

  contatti: [
    {
      ente: "BfDI, elenco delle autorita' dei Land (per trovare la tua)",
      portale: FONTE_BFDI_LISTA_LAND.url,
      urlFonte: FONTE_BFDI_LISTA_LAND.url,
      verificatoIl: '2026-06-15',
    },
    {
      ente: 'BayLDA (esempio, Baviera)',
      portale: 'https://www.lda.bayern.de/de/index.html',
      urlFonte: 'https://www.lda.bayern.de/de/index.html',
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: '35,3 milioni di €',
    casoCitato:
      "H&M, sanzione del Garante di Amburgo del 1 ottobre 2020: sorveglianza sistematica di centinaia di dipendenti del centro servizi di Norimberga (annotazioni su vita privata, malattie, famiglia). Non e' un caso specifico di GPS, ma e' la sanzione piu' nota in Germania sul controllo illecito dei lavoratori.",
    urlFonte: FONTE_HM_AMBURGO.url,
  },

  fonti: [
    FONTE_BETRVG_87,
    FONTE_BDSG_26,
    FONTE_GARANTE_BW_C3421,
    FONTE_GDPR,
    FONTE_GARANTE_RLP_GPS,
    FONTE_LISTA_DSK_DPIA,
    FONTE_BFDI_LISTA_LAND,
    FONTE_HM_AMBURGO,
    FONTE_BAYLDA,
    FONTE_BLNBDI,
  ],

  aggiornatoIl: '2026-06-15',
};
