/**
 * Scheda-paese Bosnia ed Erzegovina per la risorsa "GPS sui lavoratori in UE".
 *
 * Attenzione: la Bosnia ed Erzegovina NON e' UE; e' un paese candidato. Dal 2025
 * ha una NUOVA legge sulla protezione dei dati personali (Gazzetta ufficiale BiH
 * n. 12/25), allineata al GDPR, in vigore dall'8 marzo 2025 e applicabile da fine
 * ottobre 2025. Non e' piu' il vecchio regime del 2006.
 *
 * Contenuti basati su fonti verificate e citate nella sezione "Fonti": nuova legge
 * 12/25, lista AZLP dei trattamenti che richiedono una DPIA (novembre 2025, include
 * il monitoraggio dei dipendenti e il GPS), pagina ufficiale dell'AZLP, analisi DLA
 * Piper sul quadro bosniaco e GDPR come riferimento comparativo. L'autorita' garante
 * e' unica e nazionale (AZLP); non c'e' ripartizione per entita'. Nessun numero, URL
 * o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti citate.
const FONTE_LEGGE_12_25 = {
  titolo:
    'Nuova Legge sulla protezione dei dati personali (Gazzetta BiH 12/25, in vigore 2025)',
  url: 'https://parser.hr/en/new-law-on-personal-data-protection-in-bosnia-and-herzegovina/',
};
const FONTE_AZLP_DPIA = {
  titolo:
    'AZLP, lista dei trattamenti che richiedono una DPIA (novembre 2025, include il monitoraggio dei dipendenti e il GPS)',
  url: 'https://bdkadvokati.com/bosnian-data-protection-agency-issues-a-list-of-processing-operations-requiring-a-dpia/',
};
const FONTE_AZLP = {
  titolo: 'AZLP (Garante bosniaco), pagina ufficiale',
  url: 'https://azlp.ba/',
};
const FONTE_DLA_PIPER = {
  titolo: 'DLA Piper, protezione dei dati in Bosnia ed Erzegovina',
  url: 'https://www.dlapiperdataprotection.com/?t=law&c=BA',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) - riferimento comparativo',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const bosnia: SchedaPaese = {
  codiceISO: 'BA',
  slugCanonico: 'bosnia-erzegovina',
  nome: 'Bosnia ed Erzegovina',
  nomi: {
    it: 'Bosnia ed Erzegovina',
    en: 'Bosnia and Herzegovina',
    'en-us': 'Bosnia and Herzegovina',
    'en-gb': 'Bosnia and Herzegovina',
    'en-au': 'Bosnia and Herzegovina',
    'en-ie': 'Bosnia and Herzegovina',
    'en-ca': 'Bosnia and Herzegovina',
    de: 'Bosnien und Herzegowina',
    nl: 'Bosnië en Herzegovina',
    fr: 'Bosnie-Herzégovine',
    es: 'Bosnia y Herzegovina',
    pt: 'Bósnia e Herzegovina',
    da: 'Bosnien-Hercegovina',
    sv: 'Bosnien och Hercegovina',
    nb: 'Bosnia-Hercegovina',
    ru: 'Босния и Герцеговина',
  },
  bandiera: '🇧🇦',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'AZLP (Agenzia per la protezione dei dati personali della BiH)',
    portale: 'https://azlp.ba/',
    urlFonte: 'https://azlp.ba/',
    verificatoIl: '2026-06-15',
    note: {
      it: "La Bosnia ed Erzegovina e' un paese candidato, fuori dall'UE; dal 2025 ha una nuova legge allineata al GDPR. Unica autorita' nazionale, l'AZLP; nessuna ripartizione per entita'.",
      en: 'Bosnia and Herzegovina is a candidate country, outside the EU; since 2025 it has a new law aligned with the GDPR. A single national authority, the AZLP; no division by entity.',
      de: 'Bosnien und Herzegowina ist ein Beitrittskandidat ausserhalb der EU; seit 2025 gilt ein neues, an die DSGVO angeglichenes Gesetz. Es gibt eine einzige nationale Behoerde, die AZLP; keine Aufteilung nach Entitaeten.',
      fr: "La Bosnie-Herzegovine est un pays candidat, hors de l'UE ; depuis 2025, elle dispose d'une nouvelle loi alignee sur le RGPD. Une seule autorite nationale, l'AZLP ; aucune repartition par entite.",
      es: 'Bosnia y Herzegovina es un pais candidato, fuera de la UE; desde 2025 cuenta con una nueva ley alineada con el RGPD. Una unica autoridad nacional, la AZLP; sin reparto por entidades.',
      nl: 'Bosnie en Herzegovina is een kandidaat-lidstaat buiten de EU; sinds 2025 geldt er een nieuwe wet die is afgestemd op de AVG. Een enkele nationale autoriteit, de AZLP; geen verdeling per entiteit.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione ai lavoratori e base giuridica valida (nuova legge 12/25)',
        en: 'Informing workers and a valid legal basis (new law 12/25)',
        de: 'Information der Arbeitnehmer und gueltige Rechtsgrundlage (neues Gesetz 12/25)',
        fr: 'Information des travailleurs et base juridique valable (nouvelle loi 12/25)',
        es: 'Informacion a los trabajadores y base juridica valida (nueva ley 12/25)',
        nl: 'Informatie aan werknemers en een geldige rechtsgrondslag (nieuwe wet 12/25)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La nuova legge, allineata al GDPR, richiede una base giuridica tra le sei previste e l'informazione ai lavoratori per il trattamento dei loro dati, incluso il GPS.",
        en: 'The new law, aligned with the GDPR, requires one of the six legal bases provided for and that workers be informed about the processing of their data, including GPS.',
        de: 'Das neue, an die DSGVO angeglichene Gesetz verlangt eine der sechs vorgesehenen Rechtsgrundlagen sowie die Information der Arbeitnehmer ueber die Verarbeitung ihrer Daten, einschliesslich GPS.',
        fr: "La nouvelle loi, alignee sur le RGPD, exige l'une des six bases juridiques prevues et l'information des travailleurs sur le traitement de leurs donnees, y compris le GPS.",
        es: 'La nueva ley, alineada con el RGPD, exige una de las seis bases juridicas previstas y la informacion a los trabajadores sobre el tratamiento de sus datos, incluido el GPS.',
        nl: 'De nieuwe wet, afgestemd op de AVG, vereist een van de zes voorziene rechtsgrondslagen en dat werknemers worden geinformeerd over de verwerking van hun gegevens, inclusief GPS.',
      },
      fonte: FONTE_LEGGE_12_25,
    },
    {
      voce: {
        it: "Autorizzazione o registrazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation or registration with an authority before installing',
        de: 'Vorherige Genehmigung oder Registrierung bei einer Behoerde vor der Installation',
        fr: "Autorisation ou enregistrement prealable aupres d'une autorite avant l'installation",
        es: 'Autorizacion o registro previo ante una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming of registratie bij een autoriteit voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "La nuova legge sostituisce l'obbligo generale di registrazione presso l'Agenzia con la tenuta di un registro interno dei trattamenti.",
        en: 'The new law replaces the general obligation to register with the Agency with keeping an internal record of processing activities.',
        de: 'Das neue Gesetz ersetzt die allgemeine Pflicht zur Registrierung bei der Agentur durch das Fuehren eines internen Verzeichnisses der Verarbeitungstaetigkeiten.',
        fr: "La nouvelle loi remplace l'obligation generale d'enregistrement aupres de l'Agence par la tenue d'un registre interne des traitements.",
        es: 'La nueva ley sustituye la obligacion general de registro ante la Agencia por el mantenimiento de un registro interno de las actividades de tratamiento.',
        nl: 'De nieuwe wet vervangt de algemene verplichting tot registratie bij het Agentschap door het bijhouden van een intern register van verwerkingsactiviteiten.',
      },
      fonte: FONTE_DLA_PIPER,
    },
    {
      voce: {
        it: 'Base = interesse legittimo, non il consenso',
        en: 'Basis = legitimate interest, not consent',
        de: 'Grundlage = berechtigtes Interesse, nicht die Einwilligung',
        fr: "Base = interet legitime, et non le consentement",
        es: 'Base = interes legitimo, no el consentimiento',
        nl: 'Grondslag = gerechtvaardigd belang, niet toestemming',
      },
      risposta: 'si',
      dettaglio: {
        it: "La base usuale e' l'interesse legittimo; nel rapporto di lavoro il consenso e' una base debole per lo squilibrio di potere.",
        en: 'The usual basis is legitimate interest; in the employment relationship consent is a weak basis because of the imbalance of power.',
        de: 'Die uebliche Grundlage ist das berechtigte Interesse; im Arbeitsverhaeltnis ist die Einwilligung wegen des Machtungleichgewichts eine schwache Grundlage.',
        fr: "La base habituelle est l'interet legitime ; dans la relation de travail, le consentement est une base faible en raison du desequilibre des pouvoirs.",
        es: 'La base habitual es el interes legitimo; en la relacion laboral el consentimiento es una base debil por el desequilibrio de poder.',
        nl: 'De gebruikelijke grondslag is het gerechtvaardigd belang; in de arbeidsverhouding is toestemming een zwakke grondslag vanwege de machtsongelijkheid.',
      },
      fonte: FONTE_LEGGE_12_25,
    },
    {
      voce: {
        it: 'Proporzionalita e minimizzazione del trattamento',
        en: 'Proportionality and data minimisation of the processing',
        de: 'Verhaeltnismaessigkeit und Datenminimierung der Verarbeitung',
        fr: 'Proportionnalite et minimisation des donnees du traitement',
        es: 'Proporcionalidad y minimizacion de datos del tratamiento',
        nl: 'Evenredigheid en minimale gegevensverwerking',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il trattamento deve rispettare la minimizzazione e la proporzionalita, in linea con l'allineamento al GDPR.",
        en: 'The processing must respect minimisation and proportionality, in line with the alignment to the GDPR.',
        de: 'Die Verarbeitung muss die Datenminimierung und die Verhaeltnismaessigkeit beachten, im Einklang mit der Angleichung an die DSGVO.',
        fr: "Le traitement doit respecter la minimisation et la proportionnalite, conformement a l'alignement sur le RGPD.",
        es: 'El tratamiento debe respetar la minimizacion y la proporcionalidad, en linea con la alineacion al RGPD.',
        nl: 'De verwerking moet de minimalisatie en de evenredigheid eerbiedigen, in lijn met de afstemming op de AVG.',
      },
      fonte: FONTE_LEGGE_12_25,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio dei dipendenti, incluso il GPS (lista AZLP, novembre 2025)",
        en: 'Impact assessment (DPIA) for monitoring employees, including GPS (AZLP list, November 2025)',
        de: 'Datenschutz-Folgenabschaetzung (DSFA) fuer die Ueberwachung von Beschaeftigten, einschliesslich GPS (AZLP-Liste, November 2025)',
        fr: "Analyse d'impact (AIPD) pour la surveillance des employes, y compris le GPS (liste AZLP, novembre 2025)",
        es: 'Evaluacion de impacto (EIPD) para la monitorizacion de los empleados, incluido el GPS (lista AZLP, noviembre de 2025)',
        nl: 'Effectbeoordeling (DPIA) voor het monitoren van werknemers, inclusief GPS (AZLP-lijst, november 2025)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista AZLP include espressamente il trattamento dei dati dei dipendenti tramite app o sistemi di monitoraggio, inclusi i sistemi GPS sui veicoli, tra i casi che richiedono una valutazione d'impatto.",
        en: 'The AZLP list expressly includes the processing of employee data through apps or monitoring systems, including GPS systems on vehicles, among the cases that require an impact assessment.',
        de: 'Die AZLP-Liste fuehrt die Verarbeitung von Beschaeftigtendaten durch Apps oder Ueberwachungssysteme, einschliesslich GPS-Systemen in Fahrzeugen, ausdruecklich unter den Faellen auf, die eine Folgenabschaetzung erfordern.',
        fr: "La liste de l'AZLP inclut expressement le traitement des donnees des employes via des applications ou des systemes de surveillance, y compris les systemes GPS sur les vehicules, parmi les cas qui exigent une analyse d'impact.",
        es: 'La lista de la AZLP incluye expresamente el tratamiento de los datos de los empleados mediante aplicaciones o sistemas de monitorizacion, incluidos los sistemas GPS en los vehiculos, entre los casos que requieren una evaluacion de impacto.',
        nl: 'De AZLP-lijst noemt uitdrukkelijk de verwerking van werknemersgegevens via apps of monitoringsystemen, inclusief GPS-systemen in voertuigen, onder de gevallen die een effectbeoordeling vereisen.',
      },
      fonte: FONTE_AZLP_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Individua una base giuridica valida (interesse legittimo) e tieni il registro interno dei trattamenti.',
        en: 'Identify a valid legal basis (legitimate interest) and keep the internal record of processing activities.',
        de: 'Bestimmen Sie eine gueltige Rechtsgrundlage (berechtigtes Interesse) und fuehren Sie das interne Verzeichnis der Verarbeitungstaetigkeiten.',
        fr: "Identifiez une base juridique valable (interet legitime) et tenez le registre interne des traitements.",
        es: 'Identifique una base juridica valida (interes legitimo) y mantenga el registro interno de las actividades de tratamiento.',
        nl: 'Bepaal een geldige rechtsgrondslag (gerechtvaardigd belang) en houd het interne register van verwerkingsactiviteiten bij.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Informa i lavoratori sul trattamento (GPS incluso).',
        en: 'Inform workers about the processing (including GPS).',
        de: 'Informieren Sie die Arbeitnehmer ueber die Verarbeitung (einschliesslich GPS).',
        fr: 'Informez les travailleurs sur le traitement (GPS inclus).',
        es: 'Informe a los trabajadores sobre el tratamiento (incluido el GPS).',
        nl: 'Informeer de werknemers over de verwerking (inclusief GPS).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio dei dipendenti.",
        en: 'Carry out the impact assessment (DPIA) for monitoring employees.',
        de: 'Fuehren Sie die Datenschutz-Folgenabschaetzung (DSFA) fuer die Ueberwachung der Beschaeftigten durch.',
        fr: "Realisez l'analyse d'impact (AIPD) pour la surveillance des employes.",
        es: 'Realice la evaluacion de impacto (EIPD) para la monitorizacion de los empleados.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor het monitoren van werknemers.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Applica minimizzazione e proporzionalita.',
        en: 'Apply minimisation and proportionality.',
        de: 'Wenden Sie Datenminimierung und Verhaeltnismaessigkeit an.',
        fr: 'Appliquez la minimisation et la proportionnalite.',
        es: 'Aplique la minimizacion y la proporcionalidad.',
        nl: 'Pas minimalisatie en evenredigheid toe.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema in modo proporzionato alla finalita dichiarata.',
        en: 'Configure the system in a way proportionate to the stated purpose.',
        de: 'Konfigurieren Sie das System verhaeltnismaessig zum angegebenen Zweck.',
        fr: 'Configurez le systeme de maniere proportionnee a la finalite declaree.',
        es: 'Configure el sistema de forma proporcionada a la finalidad declarada.',
        nl: 'Configureer het systeem op een manier die in verhouding staat tot het verklaarde doel.',
      },
    },
  ],

  contatti: [
    {
      ente: 'AZLP',
      portale: 'https://azlp.ba/',
      urlFonte: 'https://azlp.ba/',
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino a 40 milioni di BAM o 4% del fatturato (nuova legge in stile GDPR)',
      en: 'up to 40 million BAM or 4% of turnover (new GDPR-style law)',
      de: 'bis zu 40 Millionen BAM oder 4 % des Umsatzes (neues Gesetz im DSGVO-Stil)',
      fr: "jusqu'a 40 millions de BAM ou 4 % du chiffre d'affaires (nouvelle loi de type RGPD)",
      es: 'hasta 40 millones de BAM o el 4 % del volumen de negocios (nueva ley de estilo RGPD)',
      nl: 'tot 40 miljoen BAM of 4% van de omzet (nieuwe wet in AVG-stijl)',
    },
    casoCitato: {
      it: "Non risulta una multa dell'AZLP specifica e pubblicata per il GPS sui dipendenti. Con la nuova legge del 2025 le sanzioni sono in stile GDPR: fino a 40 milioni di BAM o il 4% del fatturato annuo mondiale. L'AZLP ha classificato il monitoraggio dei dipendenti tramite GPS come trattamento ad alto rischio che richiede una valutazione d'impatto.",
      en: "There is no specific, published AZLP fine for GPS tracking of employees. Under the new 2025 law, penalties are GDPR-style: up to 40 million BAM or 4% of annual worldwide turnover. The AZLP has classified the monitoring of employees via GPS as a high-risk processing that requires an impact assessment.",
      de: "Eine spezifische, veroeffentlichte Geldbusse der AZLP fuer die GPS-Ortung von Beschaeftigten ist nicht bekannt. Mit dem neuen Gesetz von 2025 sind die Sanktionen im DSGVO-Stil: bis zu 40 Millionen BAM oder 4 % des weltweiten Jahresumsatzes. Die AZLP hat die Ueberwachung von Beschaeftigten per GPS als Verarbeitung mit hohem Risiko eingestuft, die eine Folgenabschaetzung erfordert.",
      fr: "Il n'existe pas d'amende specifique et publiee de l'AZLP pour le suivi GPS des employes. Avec la nouvelle loi de 2025, les sanctions sont de type RGPD : jusqu'a 40 millions de BAM ou 4 % du chiffre d'affaires annuel mondial. L'AZLP a classe la surveillance des employes par GPS comme un traitement a haut risque qui exige une analyse d'impact.",
      es: "No consta una multa especifica y publicada de la AZLP por el seguimiento por GPS de los empleados. Con la nueva ley de 2025 las sanciones son de estilo RGPD: hasta 40 millones de BAM o el 4 % del volumen de negocios anual mundial. La AZLP ha clasificado la monitorizacion de los empleados mediante GPS como un tratamiento de alto riesgo que requiere una evaluacion de impacto.",
      nl: "Er is geen specifieke, gepubliceerde boete van de AZLP voor GPS-tracking van werknemers bekend. Met de nieuwe wet van 2025 zijn de sancties in AVG-stijl: tot 40 miljoen BAM of 4% van de wereldwijde jaaromzet. De AZLP heeft het monitoren van werknemers via GPS aangemerkt als een verwerking met een hoog risico die een effectbeoordeling vereist.",
    },
    urlFonte:
      'https://parser.hr/en/new-law-on-personal-data-protection-in-bosnia-and-herzegovina/',
  },

  fonti: [
    FONTE_LEGGE_12_25,
    FONTE_AZLP_DPIA,
    FONTE_AZLP,
    FONTE_DLA_PIPER,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
