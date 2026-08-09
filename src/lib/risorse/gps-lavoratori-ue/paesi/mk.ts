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
    ente: {
      it: 'AZLP (Agenzia per la protezione dei dati personali)',
      en: 'AZLP (Personal Data Protection Agency)',
      de: 'AZLP (Agentur für den Schutz personenbezogener Daten)',
      fr: 'AZLP (Agence de protection des données personnelles)',
      es: 'AZLP (Agencia de Protección de Datos Personales)',
      nl: 'AZLP (Agentschap voor de Bescherming van Persoonsgegevens)',
      pt: 'AZLP (Agência de Proteção de Dados Pessoais)',
      da: 'AZLP (Agentur for Beskyttelse af Personoplysninger)',
      sv: 'AZLP (Myndigheten för skydd av personuppgifter)',
      nb: 'AZLP (Byrå for beskyttelse av personopplysninger)',
      ru: 'AZLP (Агентство по защите персональных данных)',
    },
    portale: FONTE_AZLP.url,
    urlFonte: FONTE_AZLP.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Macedonia del Nord è un paese candidato, fuori dall'UE, con una legge del 2020 allineata al GDPR. Unica autorità nazionale, l'AZLP; nessuna ripartizione regionale.",
      en: 'North Macedonia is a candidate country, outside the EU, with a 2020 law aligned with the GDPR. There is a single national authority, the AZLP, with no regional breakdown.',
      de: 'Nordmazedonien ist ein Beitrittskandidat außerhalb der EU mit einem an die DSGVO angeglichenen Gesetz von 2020. Es gibt nur eine nationale Behörde, die AZLP, ohne regionale Untergliederung.',
      fr: "La Macédoine du Nord est un pays candidat, hors de l'UE, dotée d'une loi de 2020 alignée sur le RGPD. Il existe une seule autorité nationale, l'AZLP, sans subdivision régionale.",
      es: 'Macedonia del Norte es un país candidato, fuera de la UE, con una ley de 2020 alineada con el RGPD. Existe una única autoridad nacional, la AZLP, sin división regional.',
      nl: 'Noord-Macedonie is een kandidaat-land buiten de EU, met een wet uit 2020 die is afgestemd op de AVG. Er is een enkele nationale autoriteit, de AZLP, zonder regionale onderverdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione obbligatoria ai lavoratori e base giuridica (LPDP 2020)',
        en: 'Mandatory information to workers and a legal basis (LPDP 2020)',
        de: 'Pflicht zur Information der Beschäftigten und Rechtsgrundlage (LPDP 2020)',
        fr: 'Information obligatoire des travailleurs et base juridique (LPDP 2020)',
        es: 'Información obligatoria a los trabajadores y base jurídica (LPDP 2020)',
        nl: 'Verplichte informatie aan werknemers en een rechtsgrond (LPDP 2020)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore deve informare i lavoratori del monitoraggio e disporre di una base giuridica tra quelle dell'art. 10; per la videosorveglianza la legge impone espressamente l'obbligo di notificare i dipendenti.",
        en: 'The employer must inform workers of the monitoring and rely on one of the legal bases under art. 10; for video surveillance the law expressly requires that employees be notified.',
        de: 'Der Arbeitgeber muss die Beschäftigten über die Überwachung informieren und sich auf eine der Rechtsgrundlagen nach Art. 10 stützen; für die Videoüberwachung verlangt das Gesetz ausdrücklich, dass die Beschäftigten benachrichtigt werden.',
        fr: "L'employeur doit informer les travailleurs de la surveillance et disposer de l'une des bases juridiques de l'art. 10 ; pour la vidéosurveillance, la loi impose expressément de notifier les salaries.",
        es: 'El empleador debe informar a los trabajadores de la supervisión y disponer de una de las bases jurídicas del art. 10; para la videovigilancia la ley exige expresamente notificar a los empleados.',
        nl: 'De werkgever moet de werknemers informeren over de monitoring en zich baseren op een van de rechtsgronden van art. 10; voor cameratoezicht verplicht de wet uitdrukkelijk om de werknemers op de hoogte te stellen.',
      },
      fonte: FONTE_LPDP,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: "Autorisation préalable d'une autorité avant l'installation",
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "La legge del 2020 rispecchia il modello di responsabilizzazione del GDPR; la vecchia registrazione è stata abolita. La consultazione preventiva dell'autorità scatta solo se una DPIA evidenzia un rischio residuo elevato.",
        en: 'The 2020 law mirrors the GDPR accountability model; the old registration has been abolished. Prior consultation of the authority is triggered only if a DPIA shows a high residual risk.',
        de: 'Das Gesetz von 2020 entspricht dem Rechenschaftsmodell der DSGVO; die alte Registrierung wurde abgeschafft. Eine vorherige Konsultation der Behörde ist nur erforderlich, wenn eine DSFA ein hohes Restrisiko aufzeigt.',
        fr: "La loi de 2020 reprend le modèle de responsabilisation du RGPD ; l'ancien enregistrement a été supprime. La consultation préalable de l'autorité n'intervient que si une AIPD révèle un risque résiduel eleve.",
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
        fr: "Base = intérêt légitime (art. 10), non le consentement",
        es: 'Base = interés legítimo (art. 10), no el consentimiento',
        nl: 'Grondslag = gerechtvaardigd belang (art. 10), niet toestemming',
      },
      risposta: 'si',
      dettaglio: {
        it: "La base usuale è l'interesse legittimo, con test di bilanciamento; il consenso nel rapporto di lavoro non è di norma valido per lo squilibrio di potere.",
        en: 'The usual basis is legitimate interest, with a balancing test; consent in the employment relationship is normally not valid because of the imbalance of power.',
        de: 'Die übliche Grundlage ist das berechtigte Interesse mit einer Abwägungsprüfung; die Einwilligung im Beschäftigungsverhältnis ist wegen des Machtungleichgewichts in der Regel nicht wirksam.',
        fr: "La base habituelle est l'intérêt légitime, avec un test de mise en balance ; dans la relation de travail, le consentement n'est en principe pas valable en raison du déséquilibre de pouvoir.",
        es: 'La base habitual es el interés legítimo, con una prueba de ponderación; el consentimiento en la relación laboral no suele ser valido por el desequilibrio de poder.',
        nl: 'De gebruikelijke grondslag is het gerechtvaardigd belang, met een belangenafweging; toestemming in de arbeidsrelatie is doorgaans niet geldig vanwege de machtsongelijkheid.',
      },
      fonte: FONTE_LPDP,
    },
    {
      voce: {
        it: 'Niente tracciamento continuo; minimizzazione (art. 4)',
        en: 'No continuous tracking; data minimisation (art. 4)',
        de: 'Keine kontinuierliche Ortung; Datenminimierung (Art. 4)',
        fr: 'Pas de suivi continu ; minimisation des données (art. 4)',
        es: 'Sin seguimiento continuo; minimización de datos (art. 4)',
        nl: 'Geen continue tracking; gegevensminimalisatie (art. 4)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il tracciamento continuo della posizione è la forma più intrusiva e va sottoposto alla più stretta valutazione di necessità e proporzionalità; valgono minimizzazione e limitazione della finalità.",
        en: 'Continuous location tracking is the most intrusive form and must undergo the strictest assessment of necessity and proportionality; data minimisation and purpose limitation apply.',
        de: 'Die kontinuierliche Standortverfolgung ist die eingriffsintensivste Form und unterliegt der strengsten Prüfung von Erforderlichkeit und Verhältnismäßigkeit; Datenminimierung und Zweckbindung gelten.',
        fr: "Le suivi continu de la localisation est la forme la plus intrusive et doit faire l'objet de l'évaluation la plus stricte de nécessite et de proportionnalité ; la minimisation des données et la limitation des finalités s'appliquent.",
        es: 'El seguimiento continuo de la ubicación es la forma mas intrusiva y debe someterse a la evaluación mas estricta de necesidad y proporcionalidad; rigen la minimización de datos y la limitación de la finalidad.',
        nl: 'Continue locatietracking is de meest ingrijpende vorm en moet de strengste toets van noodzaak en evenredigheid doorstaan; gegevensminimalisatie en doelbinding gelden.',
      },
      fonte: FONTE_LPDP,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il tracciamento GPS/della posizione dei lavoratori (blacklist AZLP, art. 39)",
        en: 'Impact assessment (DPIA) for GPS/location tracking of workers (AZLP blacklist, art. 39)',
        de: 'Folgenabschätzung (DSFA) für die GPS-/Standortverfolgung von Beschäftigten (AZLP-Blacklist, Art. 39)',
        fr: "Analyse d'impact (AIPD) pour le suivi GPS/de localisation des travailleurs (liste noire de l'AZLP, art. 39)",
        es: 'Evaluación de impacto (EIPD) para el seguimiento GPS/de ubicación de los trabajadores (lista negra de la AZLP, art. 39)',
        nl: 'Effectbeoordeling (DPIA) voor GPS-/locatietracking van werknemers (AZLP-blacklist, art. 39)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La blacklist AZLP dei trattamenti che richiedono una valutazione d'impatto include il tracciamento della posizione o del comportamento di una persona, come il GPS.",
        en: 'The AZLP blacklist of processing operations that require an impact assessment includes tracking the location or behaviour of a person, such as GPS.',
        de: 'Die AZLP-Blacklist der Verarbeitungsvorgänge, die eine Folgenabschätzung erfordern, umfasst die Verfolgung des Standorts oder des Verhaltens einer Person, etwa per GPS.',
        fr: "La liste noire de l'AZLP des traitements qui nécessitent une analyse d'impact inclut le suivi de la localisation ou du comportement d'une personne, comme le GPS.",
        es: 'La lista negra de la AZLP de los tratamientos que requieren una evaluación de impacto incluye el seguimiento de la ubicación o del comportamiento de una persona, como el GPS.',
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
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage (berechtigtes Interesse, Art. 10) mit einer Abwägungsprüfung.',
        fr: "Déterminez une base juridique valable (intérêt légitime, art. 10) avec un test de mise en balance.",
        es: 'Determine una base jurídica valida (interés legítimo, art. 10) con una prueba de ponderación.',
        nl: 'Bepaal een geldige rechtsgrond (gerechtvaardigd belang, art. 10) met een belangenafweging.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Informa i lavoratori del monitoraggio.',
        en: 'Inform the workers of the monitoring.',
        de: 'Informieren Sie die Beschäftigten über die Überwachung.',
        fr: 'Informez les travailleurs de la surveillance.',
        es: 'Informe a los trabajadores de la supervisión.',
        nl: 'Informeer de werknemers over de monitoring.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il tracciamento GPS dei lavoratori.",
        en: 'Carry out the impact assessment (DPIA) for GPS tracking of workers.',
        de: 'Führen Sie die Folgenabschätzung (DSFA) für die GPS-Ortung der Beschäftigten durch.',
        fr: "Réalisez l'analyse d'impact (AIPD) pour le suivi GPS des travailleurs.",
        es: 'Realice la evaluación de impacto (EIPD) para el seguimiento GPS de los trabajadores.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor de GPS-tracking van werknemers.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Limita il trattamento al necessario: niente tracciamento continuo.',
        en: 'Limit the processing to what is necessary: no continuous tracking.',
        de: 'Beschränken Sie die Verarbeitung auf das Erforderliche: keine kontinuierliche Ortung.',
        fr: 'Limitez le traitement au nécessaire : pas de suivi continu.',
        es: 'Límite el tratamiento a lo necesario: sin seguimiento continuo.',
        nl: 'Beperk de verwerking tot wat noodzakelijk is: geen continue tracking.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Configura il sistema rispettando minimizzazione e limitazione della finalità.",
        en: 'Configure the system in line with data minimisation and purpose limitation.',
        de: 'Konfigurieren Sie das System unter Beachtung von Datenminimierung und Zweckbindung.',
        fr: "Configurez le système en respectant la minimisation des données et la limitation des finalités.",
        es: 'Configure el sistema respetando la minimización de datos y la limitación de la finalidad.',
        nl: 'Configureer het systeem met inachtneming van gegevensminimalisatie en doelbinding.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'In caso di cambio sistema: se cambi sistema o software di monitoraggio, aggiorna e ri-consegna l’informativa, e verifica se va rinnovato l’accordo o l’autorizzazione nazionale per il controllo a distanza. Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: quella consegnata prima non basta.',
        en: 'If you switch systems: when you change your monitoring system or software, update and re-issue the privacy notice, and check whether the national agreement or authorisation for remote monitoring needs renewing. The provider (data processor), the data collected and the methods often change: the one provided earlier is not enough.',
        de: 'Bei Systemwechsel: Wenn Sie Ihr Überwachungssystem oder Ihre Software wechseln, aktualisieren Sie die Datenschutzinformation und händigen Sie sie erneut aus und prüfen Sie, ob die nationale Vereinbarung oder Genehmigung zur Fernüberwachung erneuert werden muss. Anbieter (Auftragsverarbeiter), erhobene Daten und Modalitäten ändern sich oft: die zuvor ausgehändigte genügt nicht.',
        fr: 'En cas de changement de système : si vous changez de système ou de logiciel de surveillance, mettez à jour et remettez l’information, et vérifiez si l’accord ou l’autorisation nationale de contrôle à distance doit être renouvelé. Le fournisseur (sous-traitant), les données collectées et les modalités changent souvent : celle remise auparavant ne suffit pas.',
        es: 'En caso de cambio de sistema: si cambias de sistema o software de monitorización, actualiza y vuelve a entregar la información, y comprueba si debe renovarse el acuerdo o la autorización nacional para el control a distancia. A menudo cambian el proveedor (encargado del tratamiento), los datos recogidos y las modalidades: la entregada antes no basta.',
        nl: 'Bij een systeemwissel: als je van monitoringsysteem of -software verandert, werk de privacyverklaring bij en verstrek deze opnieuw, en controleer of de nationale overeenkomst of toestemming voor controle op afstand moet worden vernieuwd. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
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
      it: 'fino al 4% del fatturato annuo',
      en: 'up to 4% of annual turnover',
      de: 'bis zu 4% des Jahresumsatzes',
      fr: "jusqu'à 4% du chiffre d'affaires annuel",
      es: 'hasta el 4% de la facturación anual',
      nl: 'tot 4% van de jaaromzet',
    },
    casoCitato: {
      it: "Non risulta una multa dell'AZLP specifica e pubblicata per il GPS sui dipendenti. La blacklist AZLP classifica il tracciamento GPS dei lavoratori come trattamento che richiede una valutazione d'impatto.",
      en: 'There is no specific, published AZLP fine for GPS on employees. The AZLP blacklist classifies GPS tracking of workers as processing that requires an impact assessment.',
      de: 'Es ist keine spezifische, veröffentlichte Geldbusse der AZLP zu GPS bei Beschäftigten bekannt. Die AZLP-Blacklist stuft die GPS-Ortung von Beschäftigten als Verarbeitung ein, die eine Folgenabschätzung erfordert.',
      fr: "Aucune amende spécifique et publiée de l'AZLP n'est connue pour le GPS sur les salaries. Les sanctions générales atteignent jusqu'à 4 % du chiffre d'affaires annuel ; les infractions aux règles de vidéosurveillance sont punies d'une amende de 1 000 a 10 000 euros pour la personne morale. La liste noire de l'AZLP classé le suivi GPS des travailleurs parmi les traitements qui nécessitent une analyse d'impact.",
      es: 'No consta una multa especifica y publicada de la AZLP por el GPS sobre los empleados. La lista negra de la AZLP clasifica el seguimiento GPS de los trabajadores como tratamiento que requiere una evaluación de impacto.',
      nl: 'Er is geen specifieke, gepubliceerde boete van de AZLP bekend voor GPS op werknemers. De AZLP-blacklist classificeert GPS-tracking van werknemers als verwerking die een effectbeoordeling vereist.',
    },
    urlFonte: FONTE_SCHOENHERR.url,
    tipoImporto: 'massimale',
  },

  fonti: [FONTE_LPDP, FONTE_AZLP_DPIA, FONTE_AZLP, FONTE_SCHOENHERR, FONTE_GDPR],

  aggiornatoIl: '2026-08-03',
};
