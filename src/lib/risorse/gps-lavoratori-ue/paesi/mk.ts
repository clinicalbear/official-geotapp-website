/**
 * Scheda-paese Macedonia del Nord per la risorsa "GPS sui lavoratori in UE".
 *
 * Attenzione: la Macedonia del Nord NON e' uno Stato membro dell'UE, ma un paese
 * candidato. La sua disciplina poggia sulla Legge sulla protezione dei dati
 * personali (LPDP, Gazzetta ufficiale 42/20, in vigore dal 24 febbraio 2020),
 * allineata al GDPR, e sugli atti subordinati dell'AZLP (regolamento sulla
 * videosorveglianza e lista dei trattamenti che richiedono una DPIA, Gazzetta
 * 122/20). Unica autorita' nazionale: l'AZLP. Nessun numero, URL o autorita' e'
 * inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_LPDP = {
  titolo: 'Legge sulla protezione dei dati (LPDP, Gazzetta 42/20) - testo ufficiale',
  url: 'https://azlp.mk/wp-content/uploads/2022/12/lpdp_2020.pdf',
};
const FONTE_AZLP_DPIA = {
  titolo:
    'AZLP, atti subordinati (regolamento videosorveglianza e lista DPIA, Gazzetta 122/20)',
  url: 'https://azlp.mk/en/pdpa/regulations-and-documents/by-laws-for-the-protection-of-personal-data/',
};
const FONTE_AZLP = {
  titolo: 'AZLP (Garante macedone), pagina ufficiale e reclami',
  url: 'https://azlp.mk/en/',
};
const FONTE_SCHOENHERR = {
  titolo: 'Schoenherr, la legge macedone sulla protezione dei dati (sanzioni)',
  url: 'https://www.schoenherr.eu/content/north-macedonia-s-data-protection-law-ten-months-to-comply',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) - riferimento comparativo',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const macedoniaDelNord: SchedaPaese = {
  codiceISO: 'MK',
  slugCanonico: 'macedonia-del-nord',
  nome: 'Macedonia del Nord',
  nomi: {
    it: 'Macedonia del Nord',
    en: 'North Macedonia',
    'en-us': 'North Macedonia',
    'en-gb': 'North Macedonia',
    'en-au': 'North Macedonia',
    'en-ie': 'North Macedonia',
    'en-ca': 'North Macedonia',
    de: 'Nordmazedonien',
    nl: 'Noord-Macedonië',
    fr: 'Macédoine du Nord',
    es: 'Macedonia del Norte',
    pt: 'Macedónia do Norte',
    da: 'Nordmakedonien',
    sv: 'Nordmakedonien',
    nb: 'Nord-Makedonia',
    ru: 'Северная Македония',
  },
  bandiera: '🇲🇰',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'AZLP (Agenzia per la protezione dei dati personali)',
    portale: FONTE_AZLP.url,
    urlFonte: FONTE_AZLP.url,
    verificatoIl: '2026-06-15',
    note: "La Macedonia del Nord e' un paese candidato, fuori dall'UE, con una legge del 2020 allineata al GDPR. Unica autorita' nazionale, l'AZLP; nessuna ripartizione regionale.",
  },

  checklist: [
    {
      voce: 'Informazione obbligatoria ai lavoratori e base giuridica (LPDP 2020)',
      risposta: 'si',
      dettaglio:
        "Il datore deve informare i lavoratori del monitoraggio e disporre di una base giuridica tra quelle dell'art. 10; per la videosorveglianza la legge impone espressamente l'obbligo di notificare i dipendenti.",
      fonte: FONTE_LPDP,
    },
    {
      voce: "Autorizzazione preventiva di un'autorita prima di installare",
      risposta: 'no',
      dettaglio:
        "La legge del 2020 rispecchia il modello di responsabilizzazione del GDPR; la vecchia registrazione e' stata abolita. La consultazione preventiva dell'autorita' scatta solo se una DPIA evidenzia un rischio residuo elevato.",
      fonte: FONTE_LPDP,
    },
    {
      voce: 'Base = interesse legittimo (art. 10), non il consenso',
      risposta: 'si',
      dettaglio:
        "La base usuale e' l'interesse legittimo, con test di bilanciamento; il consenso nel rapporto di lavoro non e' di norma valido per lo squilibrio di potere.",
      fonte: FONTE_LPDP,
    },
    {
      voce: 'Niente tracciamento continuo; minimizzazione (art. 4)',
      risposta: 'si',
      dettaglio:
        "Il tracciamento continuo della posizione e' la forma piu' intrusiva e va sottoposto alla piu' stretta valutazione di necessita' e proporzionalita'; valgono minimizzazione e limitazione della finalita'.",
      fonte: FONTE_LPDP,
    },
    {
      voce: "Valutazione d'impatto (DPIA) per il tracciamento GPS/della posizione dei lavoratori (blacklist AZLP, art. 39)",
      risposta: 'si',
      dettaglio:
        "La blacklist AZLP dei trattamenti che richiedono una valutazione d'impatto include il tracciamento della posizione o del comportamento di una persona, come il GPS.",
      fonte: FONTE_AZLP_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione:
        'Individua una base giuridica valida (interesse legittimo, art. 10) con test di bilanciamento.',
    },
    {
      passo: 2,
      descrizione: 'Informa i lavoratori del monitoraggio.',
    },
    {
      passo: 3,
      descrizione:
        "Svolgi la valutazione d'impatto (DPIA) per il tracciamento GPS dei lavoratori.",
    },
    {
      passo: 4,
      descrizione: 'Limita il trattamento al necessario: niente tracciamento continuo.',
    },
    {
      passo: 5,
      descrizione:
        "Configura il sistema rispettando minimizzazione e limitazione della finalita'.",
    },
  ],

  contatti: [
    {
      ente: 'AZLP',
      portale: FONTE_AZLP.url,
      urlFonte: FONTE_AZLP.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo:
      'fino al 4% del fatturato annuo; violazioni della videosorveglianza da 1.000 a 10.000 euro',
    casoCitato:
      "Non risulta una multa dell'AZLP specifica e pubblicata per il GPS sui dipendenti. Le sanzioni generali arrivano fino al 4% del fatturato annuo; le violazioni delle norme sulla videosorveglianza sono punite con una sanzione da 1.000 a 10.000 euro per la persona giuridica. La blacklist AZLP classifica il tracciamento GPS dei lavoratori come trattamento che richiede una valutazione d'impatto.",
    urlFonte: FONTE_SCHOENHERR.url,
  },

  fonti: [FONTE_LPDP, FONTE_AZLP_DPIA, FONTE_AZLP, FONTE_SCHOENHERR, FONTE_GDPR],

  aggiornatoIl: '2026-06-15',
};
