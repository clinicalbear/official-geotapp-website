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
    note: {
      it: "La Macedonia del Nord e' un paese candidato, fuori dall'UE, con una legge del 2020 allineata al GDPR. Unica autorita' nazionale, l'AZLP; nessuna ripartizione regionale.",
      en: 'North Macedonia is a candidate country, outside the EU, with a 2020 law aligned with the GDPR. There is a single national authority, the AZLP, with no regional breakdown.',
      de: 'Nordmazedonien ist ein Beitrittskandidat ausserhalb der EU mit einem an die DSGVO angeglichenen Gesetz von 2020. Es gibt nur eine nationale Behoerde, die AZLP, ohne regionale Untergliederung.',
      fr: "La Macedoine du Nord est un pays candidat, hors de l'UE, dotee d'une loi de 2020 alignee sur le RGPD. Il existe une seule autorite nationale, l'AZLP, sans subdivision regionale.",
      es: 'Macedonia del Norte es un pais candidato, fuera de la UE, con una ley de 2020 alineada con el RGPD. Existe una unica autoridad nacional, la AZLP, sin division regional.',
      nl: 'Noord-Macedonie is een kandidaat-land buiten de EU, met een wet uit 2020 die is afgestemd op de AVG. Er is een enkele nationale autoriteit, de AZLP, zonder regionale onderverdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione obbligatoria ai lavoratori e base giuridica (LPDP 2020)',
        en: 'Mandatory information to workers and a legal basis (LPDP 2020)',
        de: 'Pflicht zur Information der Beschaeftigten und Rechtsgrundlage (LPDP 2020)',
        fr: 'Information obligatoire des travailleurs et base juridique (LPDP 2020)',
        es: 'Informacion obligatoria a los trabajadores y base juridica (LPDP 2020)',
        nl: 'Verplichte informatie aan werknemers en een rechtsgrond (LPDP 2020)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore deve informare i lavoratori del monitoraggio e disporre di una base giuridica tra quelle dell'art. 10; per la videosorveglianza la legge impone espressamente l'obbligo di notificare i dipendenti.",
        en: 'The employer must inform workers of the monitoring and rely on one of the legal bases under art. 10; for video surveillance the law expressly requires that employees be notified.',
        de: 'Der Arbeitgeber muss die Beschaeftigten ueber die Ueberwachung informieren und sich auf eine der Rechtsgrundlagen nach Art. 10 stuetzen; fuer die Videoueberwachung verlangt das Gesetz ausdruecklich, dass die Beschaeftigten benachrichtigt werden.',
        fr: "L'employeur doit informer les travailleurs de la surveillance et disposer de l'une des bases juridiques de l'art. 10 ; pour la videosurveillance, la loi impose expressement de notifier les salaries.",
        es: 'El empleador debe informar a los trabajadores de la supervision y disponer de una de las bases juridicas del art. 10; para la videovigilancia la ley exige expresamente notificar a los empleados.',
        nl: 'De werkgever moet de werknemers informeren over de monitoring en zich baseren op een van de rechtsgronden van art. 10; voor cameratoezicht verplicht de wet uitdrukkelijk om de werknemers op de hoogte te stellen.',
      },
      fonte: FONTE_LPDP,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behoerde vor der Installation',
        fr: "Autorisation prealable d'une autorite avant l'installation",
        es: 'Autorizacion previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "La legge del 2020 rispecchia il modello di responsabilizzazione del GDPR; la vecchia registrazione e' stata abolita. La consultazione preventiva dell'autorita' scatta solo se una DPIA evidenzia un rischio residuo elevato.",
        en: 'The 2020 law mirrors the GDPR accountability model; the old registration has been abolished. Prior consultation of the authority is triggered only if a DPIA shows a high residual risk.',
        de: 'Das Gesetz von 2020 entspricht dem Rechenschaftsmodell der DSGVO; die alte Registrierung wurde abgeschafft. Eine vorherige Konsultation der Behoerde ist nur erforderlich, wenn eine DSFA ein hohes Restrisiko aufzeigt.',
        fr: "La loi de 2020 reprend le modele de responsabilisation du RGPD ; l'ancien enregistrement a ete supprime. La consultation prealable de l'autorite n'intervient que si une AIPD revele un risque residuel eleve.",
        es: 'La ley de 2020 refleja el modelo de responsabilidad proactiva del RGPD; el antiguo registro ha sido suprimido. La consulta previa a la autoridad solo procede si una EIPD revela un riesgo residual elevado.',
        nl: 'De wet van 2020 weerspiegelt het verantwoordingsmodel van de AVG; de oude registratie is afgeschaft. Voorafgaande raadpleging van de autoriteit is alleen vereist als een DPIA een hoog restrisico aantoont.',
      },
      fonte: FONTE_LPDP,
    },
    {
      voce: {
        it: 'Base = interesse legittimo (art. 10), non il consenso',
        en: 'Basis = legitimate interest (art. 10), not consent',
        de: 'Grundlage = berechtigtes Interesse (Art. 10), nicht die Einwilligung',
        fr: "Base = interet legitime (art. 10), non le consentement",
        es: 'Base = interes legitimo (art. 10), no el consentimiento',
        nl: 'Grondslag = gerechtvaardigd belang (art. 10), niet toestemming',
      },
      risposta: 'si',
      dettaglio: {
        it: "La base usuale e' l'interesse legittimo, con test di bilanciamento; il consenso nel rapporto di lavoro non e' di norma valido per lo squilibrio di potere.",
        en: 'The usual basis is legitimate interest, with a balancing test; consent in the employment relationship is normally not valid because of the imbalance of power.',
        de: 'Die uebliche Grundlage ist das berechtigte Interesse mit einer Abwaegungspruefung; die Einwilligung im Beschaeftigungsverhaeltnis ist wegen des Machtungleichgewichts in der Regel nicht wirksam.',
        fr: "La base habituelle est l'interet legitime, avec un test de mise en balance ; dans la relation de travail, le consentement n'est en principe pas valable en raison du desequilibre de pouvoir.",
        es: 'La base habitual es el interes legitimo, con una prueba de ponderacion; el consentimiento en la relacion laboral no suele ser valido por el desequilibrio de poder.',
        nl: 'De gebruikelijke grondslag is het gerechtvaardigd belang, met een belangenafweging; toestemming in de arbeidsrelatie is doorgaans niet geldig vanwege de machtsongelijkheid.',
      },
      fonte: FONTE_LPDP,
    },
    {
      voce: {
        it: 'Niente tracciamento continuo; minimizzazione (art. 4)',
        en: 'No continuous tracking; data minimisation (art. 4)',
        de: 'Keine kontinuierliche Ortung; Datenminimierung (Art. 4)',
        fr: 'Pas de suivi continu ; minimisation des donnees (art. 4)',
        es: 'Sin seguimiento continuo; minimizacion de datos (art. 4)',
        nl: 'Geen continue tracking; gegevensminimalisatie (art. 4)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il tracciamento continuo della posizione e' la forma piu' intrusiva e va sottoposto alla piu' stretta valutazione di necessita' e proporzionalita'; valgono minimizzazione e limitazione della finalita'.",
        en: 'Continuous location tracking is the most intrusive form and must undergo the strictest assessment of necessity and proportionality; data minimisation and purpose limitation apply.',
        de: 'Die kontinuierliche Standortverfolgung ist die eingriffsintensivste Form und unterliegt der strengsten Pruefung von Erforderlichkeit und Verhaeltnismaessigkeit; Datenminimierung und Zweckbindung gelten.',
        fr: "Le suivi continu de la localisation est la forme la plus intrusive et doit faire l'objet de l'evaluation la plus stricte de necessite et de proportionnalite ; la minimisation des donnees et la limitation des finalites s'appliquent.",
        es: 'El seguimiento continuo de la ubicacion es la forma mas intrusiva y debe someterse a la evaluacion mas estricta de necesidad y proporcionalidad; rigen la minimizacion de datos y la limitacion de la finalidad.',
        nl: 'Continue locatietracking is de meest ingrijpende vorm en moet de strengste toets van noodzaak en evenredigheid doorstaan; gegevensminimalisatie en doelbinding gelden.',
      },
      fonte: FONTE_LPDP,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il tracciamento GPS/della posizione dei lavoratori (blacklist AZLP, art. 39)",
        en: 'Impact assessment (DPIA) for GPS/location tracking of workers (AZLP blacklist, art. 39)',
        de: 'Folgenabschaetzung (DSFA) fuer die GPS-/Standortverfolgung von Beschaeftigten (AZLP-Blacklist, Art. 39)',
        fr: "Analyse d'impact (AIPD) pour le suivi GPS/de localisation des travailleurs (liste noire de l'AZLP, art. 39)",
        es: 'Evaluacion de impacto (EIPD) para el seguimiento GPS/de ubicacion de los trabajadores (lista negra de la AZLP, art. 39)',
        nl: 'Effectbeoordeling (DPIA) voor GPS-/locatietracking van werknemers (AZLP-blacklist, art. 39)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La blacklist AZLP dei trattamenti che richiedono una valutazione d'impatto include il tracciamento della posizione o del comportamento di una persona, come il GPS.",
        en: 'The AZLP blacklist of processing operations that require an impact assessment includes tracking the location or behaviour of a person, such as GPS.',
        de: 'Die AZLP-Blacklist der Verarbeitungsvorgaenge, die eine Folgenabschaetzung erfordern, umfasst die Verfolgung des Standorts oder des Verhaltens einer Person, etwa per GPS.',
        fr: "La liste noire de l'AZLP des traitements qui necessitent une analyse d'impact inclut le suivi de la localisation ou du comportement d'une personne, comme le GPS.",
        es: 'La lista negra de la AZLP de los tratamientos que requieren una evaluacion de impacto incluye el seguimiento de la ubicacion o del comportamiento de una persona, como el GPS.',
        nl: 'De AZLP-blacklist van verwerkingen die een effectbeoordeling vereisen omvat het volgen van de locatie of het gedrag van een persoon, zoals via GPS.',
      },
      fonte: FONTE_AZLP_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Individua una base giuridica valida (interesse legittimo, art. 10) con test di bilanciamento.',
        en: 'Identify a valid legal basis (legitimate interest, art. 10) with a balancing test.',
        de: 'Bestimmen Sie eine gueltige Rechtsgrundlage (berechtigtes Interesse, Art. 10) mit einer Abwaegungspruefung.',
        fr: "Determinez une base juridique valable (interet legitime, art. 10) avec un test de mise en balance.",
        es: 'Determine una base juridica valida (interes legitimo, art. 10) con una prueba de ponderacion.',
        nl: 'Bepaal een geldige rechtsgrond (gerechtvaardigd belang, art. 10) met een belangenafweging.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Informa i lavoratori del monitoraggio.',
        en: 'Inform the workers of the monitoring.',
        de: 'Informieren Sie die Beschaeftigten ueber die Ueberwachung.',
        fr: 'Informez les travailleurs de la surveillance.',
        es: 'Informe a los trabajadores de la supervision.',
        nl: 'Informeer de werknemers over de monitoring.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il tracciamento GPS dei lavoratori.",
        en: 'Carry out the impact assessment (DPIA) for GPS tracking of workers.',
        de: 'Fuehren Sie die Folgenabschaetzung (DSFA) fuer die GPS-Ortung der Beschaeftigten durch.',
        fr: "Realisez l'analyse d'impact (AIPD) pour le suivi GPS des travailleurs.",
        es: 'Realice la evaluacion de impacto (EIPD) para el seguimiento GPS de los trabajadores.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor de GPS-tracking van werknemers.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Limita il trattamento al necessario: niente tracciamento continuo.',
        en: 'Limit the processing to what is necessary: no continuous tracking.',
        de: 'Beschraenken Sie die Verarbeitung auf das Erforderliche: keine kontinuierliche Ortung.',
        fr: 'Limitez le traitement au necessaire : pas de suivi continu.',
        es: 'Limite el tratamiento a lo necesario: sin seguimiento continuo.',
        nl: 'Beperk de verwerking tot wat noodzakelijk is: geen continue tracking.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Configura il sistema rispettando minimizzazione e limitazione della finalita'.",
        en: 'Configure the system in line with data minimisation and purpose limitation.',
        de: 'Konfigurieren Sie das System unter Beachtung von Datenminimierung und Zweckbindung.',
        fr: "Configurez le systeme en respectant la minimisation des donnees et la limitation des finalites.",
        es: 'Configure el sistema respetando la minimizacion de datos y la limitacion de la finalidad.',
        nl: 'Configureer het systeem met inachtneming van gegevensminimalisatie en doelbinding.',
      },
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
    importo: {
      it: 'fino al 4% del fatturato annuo; violazioni della videosorveglianza da 1.000 a 10.000 euro',
      en: 'up to 4% of annual turnover; video surveillance breaches from 1,000 to 10,000 euros',
      de: 'bis zu 4 % des Jahresumsatzes; Verstoesse bei der Videoueberwachung von 1.000 bis 10.000 Euro',
      fr: "jusqu'a 4 % du chiffre d'affaires annuel ; infractions a la videosurveillance de 1 000 a 10 000 euros",
      es: 'hasta el 4% de la facturacion anual; infracciones de videovigilancia de 1.000 a 10.000 euros',
      nl: 'tot 4% van de jaaromzet; overtredingen bij cameratoezicht van 1.000 tot 10.000 euro',
    },
    casoCitato: {
      it: "Non risulta una multa dell'AZLP specifica e pubblicata per il GPS sui dipendenti. Le sanzioni generali arrivano fino al 4% del fatturato annuo; le violazioni delle norme sulla videosorveglianza sono punite con una sanzione da 1.000 a 10.000 euro per la persona giuridica. La blacklist AZLP classifica il tracciamento GPS dei lavoratori come trattamento che richiede una valutazione d'impatto.",
      en: 'There is no specific, published AZLP fine for GPS on employees. General penalties reach up to 4% of annual turnover; breaches of the video surveillance rules are punished with a fine of 1,000 to 10,000 euros for the legal person. The AZLP blacklist classifies GPS tracking of workers as processing that requires an impact assessment.',
      de: 'Es ist keine spezifische, veroeffentlichte Geldbusse der AZLP zu GPS bei Beschaeftigten bekannt. Allgemeine Sanktionen reichen bis zu 4 % des Jahresumsatzes; Verstoesse gegen die Vorschriften zur Videoueberwachung werden bei der juristischen Person mit einer Geldbusse von 1.000 bis 10.000 Euro geahndet. Die AZLP-Blacklist stuft die GPS-Ortung von Beschaeftigten als Verarbeitung ein, die eine Folgenabschaetzung erfordert.',
      fr: "Aucune amende specifique et publiee de l'AZLP n'est connue pour le GPS sur les salaries. Les sanctions generales atteignent jusqu'a 4 % du chiffre d'affaires annuel ; les infractions aux regles de videosurveillance sont punies d'une amende de 1 000 a 10 000 euros pour la personne morale. La liste noire de l'AZLP classe le suivi GPS des travailleurs parmi les traitements qui necessitent une analyse d'impact.",
      es: 'No consta una multa especifica y publicada de la AZLP por el GPS sobre los empleados. Las sanciones generales llegan hasta el 4% de la facturacion anual; las infracciones de las normas de videovigilancia se castigan con una multa de 1.000 a 10.000 euros para la persona juridica. La lista negra de la AZLP clasifica el seguimiento GPS de los trabajadores como tratamiento que requiere una evaluacion de impacto.',
      nl: 'Er is geen specifieke, gepubliceerde boete van de AZLP bekend voor GPS op werknemers. Algemene sancties lopen op tot 4% van de jaaromzet; overtredingen van de regels voor cameratoezicht worden bestraft met een boete van 1.000 tot 10.000 euro voor de rechtspersoon. De AZLP-blacklist classificeert GPS-tracking van werknemers als verwerking die een effectbeoordeling vereist.',
    },
    urlFonte: FONTE_SCHOENHERR.url,
  },

  fonti: [FONTE_LPDP, FONTE_AZLP_DPIA, FONTE_AZLP, FONTE_SCHOENHERR, FONTE_GDPR],

  aggiornatoIl: '2026-06-15',
};
