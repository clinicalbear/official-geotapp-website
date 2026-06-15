/**
 * Scheda-paese Belgio per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * CCT n. 81 del 26 aprile 2002 (controllo delle comunicazioni elettroniche in
 * rete), guida dell'APD/GBA sulla geolocalizzazione dei lavoratori, pagina
 * dell'APD/GBA sulla valutazione d'impatto, pagina dell'APD/GBA per i reclami,
 * decisione 114/2024 della Chambre Contentieuse dell'APD/GBA sui dati biometrici
 * per le presenze e GDPR.
 *
 * Il Belgio e' uno Stato federale, ma ha un'unica autorita' garante nazionale,
 * l'APD/GBA: non c'e' alcuna ripartizione regionale. Per questo `federale` e'
 * false. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_CCT_81 = {
  titolo:
    'CCT n. 81 del 26 aprile 2002 (controllo delle comunicazioni elettroniche in rete)',
  url: 'https://cnt-nar.be/sites/default/files/documents/CCT-COORD/cct-081.pdf',
};
const FONTE_APD_GEOLOCALIZZAZIONE = {
  titolo: 'APD/GBA, geolocalizzazione dei lavoratori',
  url: 'https://www.autoriteprotectiondonnees.be/professionnel/themes/vie-privee-sur-le-lieu-de-travail/surveillance-de-l-employeur/geolocalisation',
};
const FONTE_APD_DPIA = {
  titolo: "APD/GBA, valutazione d'impatto sulla protezione dei dati",
  url: 'https://www.autoriteprotectiondonnees.be/professionnel/rgpd-/analyse-d-impact-relative-a-la-protection-des-donnees',
};
const FONTE_APD_RECLAMO = {
  titolo: 'APD/GBA, presentare un reclamo',
  url: 'https://www.autoriteprotectiondonnees.be/citoyen/agir/introduire-une-plainte',
};
const FONTE_DECISIONE_114_2024 = {
  titolo:
    'Chambre Contentieuse APD/GBA, decisione 114/2024 (impronte per le presenze, 45.000 euro)',
  url: 'https://www.claeysengels.be/fr-be/nouvelles-evenements/traitement-des-donnees-biometriques-au-travail-lutilisation-dun-systeme',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const belgio: SchedaPaese = {
  codiceISO: 'BE',
  slugCanonico: 'belgio',
  nome: 'Belgio',
  nomi: {
    it: 'Belgio',
    en: 'Belgium',
    'en-us': 'Belgium',
    'en-gb': 'Belgium',
    'en-au': 'Belgium',
    'en-ie': 'Belgium',
    'en-ca': 'Belgium',
    de: 'Belgien',
    nl: 'België',
    fr: 'Belgique',
    es: 'Bélgica',
    pt: 'Bélgica',
    da: 'Belgien',
    sv: 'Belgien',
    nb: 'Belgia',
    ru: 'Бельгия',
  },
  bandiera: '🇧🇪',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Autorita per la protezione dei dati (APD/GBA)',
    portale: FONTE_APD_RECLAMO.url,
    urlFonte: FONTE_APD_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: "Il Belgio e' federale ma ha un'unica autorita' garante nazionale, l'APD/GBA: nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: "Informazione e concertazione preventiva del consiglio d'impresa (CCT n. 81, art. 7)",
      risposta: 'dipende',
      dettaglio:
        "Prima di installare un sistema di controllo il datore deve informare il consiglio d'impresa; in sua assenza la cascata va al comitato per la prevenzione, poi alla delegazione sindacale, poi ai lavoratori. Il consiglio d'impresa esiste dai 50 dipendenti.",
      fonte: FONTE_CCT_81,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "Non serve un'autorizzazione preventiva dell'APD/GBA; vale la responsabilizzazione, con valutazione d'impatto quando il rischio e' elevato e consultazione dell'autorita' solo se resta un rischio residuo elevato.",
      fonte: FONTE_APD_DPIA,
    },
    {
      voce: 'Informazione preventiva ai lavoratori (base giuridica, diritti; art. 13 GDPR)',
      risposta: 'si',
      dettaglio:
        "Il datore deve comunicare prima la base giuridica del trattamento, le finalita' e i diritti dei lavoratori; la base non e' di norma il consenso ma il legittimo interesse o la necessita' contrattuale/legale.",
      fonte: FONTE_APD_GEOLOCALIZZAZIONE,
    },
    {
      voce: 'Divieto di controllo permanente e sistematico (sproporzionato); disattivabile fuori orario',
      risposta: 'si',
      dettaglio:
        "Per l'APD un controllo permanente con lettura sistematica dei dati di localizzazione e' in linea di principio sproporzionato; il sistema deve poter essere disattivato quando il veicolo e' usato fuori dall'orario di lavoro.",
      fonte: FONTE_APD_GEOLOCALIZZAZIONE,
    },
    {
      voce: "Valutazione d'impatto (AIPD) per la sorveglianza sistematica su larga scala",
      risposta: 'si',
      dettaglio:
        "Serve una valutazione d'impatto quando il trattamento e' suscettibile di comportare un rischio elevato, come una sorveglianza sistematica su larga scala.",
      fonte: FONTE_APD_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        "Informa e consulta il consiglio d'impresa prima di installare (CCT n. 81); in sua assenza, segui la cascata: comitato prevenzione, delegazione sindacale, lavoratori.",
    },
    {
      passo: 2,
      descrizione:
        'Individua una base giuridica valida (legittimo interesse o necessita contrattuale/legale), non il consenso.',
    },
    {
      passo: 3,
      descrizione:
        "Informa preventivamente i lavoratori su base giuridica, finalita' e diritti.",
    },
    {
      passo: 4,
      descrizione:
        "Svolgi la valutazione d'impatto per la sorveglianza sistematica su larga scala.",
    },
    {
      passo: 5,
      descrizione:
        'Configura il sistema: niente controllo permanente, disattivazione fuori orario.',
    },
  ],

  contatti: [
    {
      ente: 'APD/GBA, reclamo',
      portale: FONTE_APD_RECLAMO.url,
      urlFonte: FONTE_APD_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: '45.000 euro',
    casoCitato:
      "Chambre Contentieuse dell'APD/GBA, decisione 114/2024 del 6 settembre 2024: un datore usava le impronte digitali dei dipendenti per la rilevazione delle presenze, su una base (il consenso) non valida nel rapporto di lavoro e in violazione della minimizzazione (esistevano mezzi meno intrusivi). Non e' un caso di GPS, ma e' il caso belga di riferimento sul controllo delle presenze dei dipendenti.",
    urlFonte: FONTE_DECISIONE_114_2024.url,
  },

  fonti: [
    FONTE_CCT_81,
    FONTE_APD_GEOLOCALIZZAZIONE,
    FONTE_APD_DPIA,
    FONTE_APD_RECLAMO,
    FONTE_DECISIONE_114_2024,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
