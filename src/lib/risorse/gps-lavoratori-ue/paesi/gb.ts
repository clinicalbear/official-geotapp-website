/**
 * Scheda-paese Regno Unito per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * guida ICO sul monitoraggio dei lavoratori (UK GDPR), guida ICO sulla
 * sorveglianza nei veicoli, guida ICO su quando serve una DPIA, provvedimento
 * ICO sul tracciamento GPS dell'Home Office (2024), pagina ICO per le
 * segnalazioni e il GDPR recepito come UK GDPR.
 *
 * Il Regno Unito ha un'unica autorita nazionale, l'ICO, per Inghilterra,
 * Scozia, Galles e Irlanda del Nord: nessuna ripartizione regionale.
 * Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_ICO_MONITORAGGIO = {
  titolo: 'ICO, guida sul monitoraggio dei lavoratori (UK GDPR)',
  url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/employment/monitoring-workers/data-protection-and-monitoring-workers/',
};
const FONTE_ICO_VEICOLI = {
  titolo: 'ICO, sorveglianza nei veicoli',
  url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/cctv-and-video-surveillance/guidance-on-video-surveillance-including-cctv/additional-considerations-for-technologies-other-than-cctv/surveillance-in-vehicles/',
};
const FONTE_ICO_DPIA = {
  titolo: 'ICO, quando serve una DPIA',
  url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/when-do-we-need-to-do-a-dpia/',
};
const FONTE_ICO_HOME_OFFICE = {
  titolo: 'ICO, provvedimento sul monitoraggio GPS (Home Office, 2024)',
  url: 'https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2024/03/ico-finds-the-home-office-s-pilot-of-gps-electronic-monitoring-of-migrants-breached-uk-data-protection-law/',
};
const FONTE_ICO_SEGNALAZIONI = {
  titolo: 'ICO, presentare una segnalazione',
  url: 'https://ico.org.uk/concerns/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) come UK GDPR',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const regnoUnito: SchedaPaese = {
  codiceISO: 'GB',
  slugCanonico: 'regno-unito',
  nome: 'Regno Unito',
  nomi: {
    it: 'Regno Unito',
    en: 'United Kingdom',
    'en-us': 'United Kingdom',
    'en-gb': 'United Kingdom',
    'en-au': 'United Kingdom',
    'en-ie': 'United Kingdom',
    'en-ca': 'United Kingdom',
    de: 'Vereinigtes Königreich',
    nl: 'Verenigd Koninkrijk',
    fr: 'Royaume-Uni',
    es: 'Reino Unido',
    pt: 'Reino Unido',
    da: 'Storbritannien',
    sv: 'Storbritannien',
    nb: 'Storbritannia',
    ru: 'Великобритания',
  },
  bandiera: '🇬🇧',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: "ICO (Information Commissioner's Office)",
    portale: FONTE_ICO_SEGNALAZIONI.url,
    urlFonte: FONTE_ICO_SEGNALAZIONI.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "Il Regno Unito ha un'unica autorita nazionale, l'ICO, per Inghilterra, Scozia, Galles e Irlanda del Nord: nessuna ripartizione regionale.",
      en: 'The United Kingdom has a single national authority, the ICO, for England, Scotland, Wales and Northern Ireland: no regional split.',
      de: 'Das Vereinigte Königreich hat eine einzige nationale Behörde, das ICO, für England, Schottland, Wales und Nordirland: keine regionale Aufteilung.',
      fr: "Le Royaume-Uni dispose d'une seule autorité nationale, l'ICO, pour l'Angleterre, l'Écosse, le pays de Galles et l'Irlande du Nord : aucune répartition régionale.",
      es: 'El Reino Unido tiene una única autoridad nacional, la ICO, para Inglaterra, Escocia, Gales e Irlanda del Norte: sin reparto regional.',
      nl: 'Het Verenigd Koninkrijk heeft één nationale autoriteit, de ICO, voor Engeland, Schotland, Wales en Noord-Ierland: geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Consultazione dei lavoratori o dei loro rappresentanti prima di introdurre il monitoraggio',
        en: 'Consultation of workers or their representatives before introducing monitoring',
        de: 'Anhörung der Beschäftigten oder ihrer Vertreter vor der Einführung der Überwachung',
        fr: 'Consultation des travailleurs ou de leurs représentants avant la mise en place de la surveillance',
        es: 'Consulta a los trabajadores o a sus representantes antes de introducir la supervisión',
        nl: 'Raadpleging van de werknemers of hun vertegenwoordigers voordat monitoring wordt ingevoerd',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "L'ICO chiede di raccogliere e documentare il parere dei lavoratori o dei loro rappresentanti (es. sindacati) prima di introdurre il monitoraggio, salvo buoni motivi; non e un consenso vincolante, ma va documentato.",
        en: 'The ICO asks employers to gather and document the views of workers or their representatives (e.g. trade unions) before introducing monitoring, unless there are good reasons not to; it is not binding consent, but it must be documented.',
        de: 'Das ICO verlangt, dass die Auffassung der Beschäftigten oder ihrer Vertreter (z. B. Gewerkschaften) vor der Einführung der Überwachung eingeholt und dokumentiert wird, sofern keine triftigen Gründe dagegen sprechen; es handelt sich nicht um eine verbindliche Einwilligung, sie muss aber dokumentiert werden.',
        fr: "L'ICO demande de recueillir et de documenter l'avis des travailleurs ou de leurs représentants (par ex. les syndicats) avant de mettre en place la surveillance, sauf motifs valables ; il ne s'agit pas d'un consentement contraignant, mais cela doit être documenté.",
        es: 'La ICO pide recabar y documentar la opinión de los trabajadores o de sus representantes (p. ej. los sindicatos) antes de introducir la supervisión, salvo que existan buenas razones para no hacerlo; no es un consentimiento vinculante, pero debe documentarse.',
        nl: 'De ICO vraagt om de mening van de werknemers of hun vertegenwoordigers (bijv. vakbonden) te verzamelen en te documenteren voordat monitoring wordt ingevoerd, tenzij er goede redenen zijn om dat niet te doen; het is geen bindende toestemming, maar het moet worden gedocumenteerd.',
      },
      fonte: FONTE_ICO_MONITORAGGIO,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation from an authority before installation',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: "Autorisation préalable d'une autorité avant l'installation",
        es: 'Autorización previa de una autoridad antes de la instalación',
        nl: 'Voorafgaande toestemming van een autoriteit vóór installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva dell'ICO; vale la responsabilizzazione (autovalutazione + DPIA). L'ICO va consultato prima solo se la DPIA evidenzia un rischio elevato non mitigabile.",
        en: 'No prior authorisation from the ICO is required; accountability applies (self-assessment + DPIA). The ICO must be consulted in advance only if the DPIA identifies a high risk that cannot be mitigated.',
        de: 'Eine vorherige Genehmigung des ICO ist nicht erforderlich; es gilt die Rechenschaftspflicht (Selbstbewertung + DPIA). Das ICO ist vorab nur dann zu konsultieren, wenn die DPIA ein hohes, nicht minderbares Risiko ergibt.',
        fr: "Aucune autorisation préalable de l'ICO n'est requise ; le principe de responsabilité s'applique (auto-évaluation + DPIA). L'ICO ne doit être consulté au préalable que si la DPIA met en évidence un risque élevé impossible à atténuer.",
        es: 'No se requiere autorización previa de la ICO; rige la responsabilidad proactiva (autoevaluación + DPIA). Solo hay que consultar previamente a la ICO si la DPIA evidencia un riesgo elevado que no puede mitigarse.',
        nl: 'Voorafgaande toestemming van de ICO is niet vereist; de verantwoordingsplicht geldt (zelfbeoordeling + DPIA). De ICO hoeft alleen vooraf te worden geraadpleegd als de DPIA een hoog risico aantoont dat niet kan worden beperkt.',
      },
      fonte: FONTE_ICO_MONITORAGGIO,
    },
    {
      voce: {
        it: 'Base giuridica valida e informazione ai lavoratori (di norma interesse legittimo, non il consenso; niente sorveglianza occulta)',
        en: 'Valid legal basis and information to workers (usually legitimate interests, not consent; no covert surveillance)',
        de: 'Gültige Rechtsgrundlage und Information der Beschäftigten (in der Regel berechtigtes Interesse, nicht Einwilligung; keine verdeckte Überwachung)',
        fr: "Base légale valable et information des travailleurs (en règle générale l'intérêt légitime, et non le consentement ; aucune surveillance cachée)",
        es: 'Base jurídica válida e información a los trabajadores (por lo general el interés legítimo, no el consentimiento; sin vigilancia encubierta)',
        nl: 'Geldige rechtsgrond en informatie aan de werknemers (doorgaans gerechtvaardigd belang, niet toestemming; geen heimelijke surveillance)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il consenso di norma non e valido per lo squilibrio di potere; la base usuale e l'interesse legittimo con valutazione documentata (LIA). I lavoratori vanno informati in modo chiaro; la sorveglianza occulta solo in casi eccezionali.",
        en: 'Consent is usually not valid because of the imbalance of power; the usual basis is legitimate interests with a documented assessment (LIA). Workers must be informed clearly; covert surveillance is allowed only in exceptional cases.',
        de: 'Die Einwilligung ist wegen des Machtungleichgewichts in der Regel nicht gültig; üblich ist das berechtigte Interesse mit einer dokumentierten Bewertung (LIA). Die Beschäftigten müssen klar informiert werden; verdeckte Überwachung ist nur in Ausnahmefällen zulässig.',
        fr: "Le consentement n'est en général pas valable en raison du déséquilibre de pouvoir ; la base habituelle est l'intérêt légitime avec une évaluation documentée (LIA). Les travailleurs doivent être informés clairement ; la surveillance cachée n'est admise que dans des cas exceptionnels.",
        es: 'El consentimiento por lo general no es válido debido al desequilibrio de poder; la base habitual es el interés legítimo con una evaluación documentada (LIA). Los trabajadores deben ser informados con claridad; la vigilancia encubierta solo en casos excepcionales.',
        nl: 'Toestemming is doorgaans niet geldig vanwege de machtsongelijkheid; de gebruikelijke grondslag is het gerechtvaardigd belang met een gedocumenteerde beoordeling (LIA). Werknemers moeten duidelijk worden geïnformeerd; heimelijke surveillance alleen in uitzonderlijke gevallen.',
      },
      fonte: FONTE_ICO_MONITORAGGIO,
    },
    {
      voce: {
        it: 'Divieto di tracciamento continuo ingiustificato; disattivazione fuori orario per uso privato',
        en: 'No unjustified continuous tracking; deactivation outside working hours for private use',
        de: 'Verbot der ungerechtfertigten kontinuierlichen Ortung; Deaktivierung außerhalb der Arbeitszeit zur privaten Nutzung',
        fr: "Interdiction du suivi continu injustifié ; désactivation en dehors des heures de travail pour l'usage privé",
        es: 'Prohibición del rastreo continuo injustificado; desactivación fuera del horario laboral para uso privado',
        nl: 'Verbod op ongerechtvaardigde continue tracking; uitschakeling buiten werktijd voor privégebruik',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per l'ICO la registrazione continua mentre il veicolo e usato a fini privati fuori orario e probabilmente eccessiva; il conducente deve poter disattivare la registrazione in quei casi.",
        en: 'According to the ICO, continuous recording while the vehicle is used for private purposes outside working hours is likely to be excessive; the driver must be able to switch off the recording in those cases.',
        de: 'Nach Auffassung des ICO ist die kontinuierliche Aufzeichnung, während das Fahrzeug außerhalb der Arbeitszeit privat genutzt wird, wahrscheinlich unverhältnismäßig; der Fahrer muss die Aufzeichnung in diesen Fällen deaktivieren können.',
        fr: "Pour l'ICO, l'enregistrement continu pendant que le véhicule est utilisé à des fins privées en dehors des heures de travail est probablement excessif ; le conducteur doit pouvoir désactiver l'enregistrement dans ces cas.",
        es: 'Para la ICO, la grabación continua mientras el vehículo se utiliza con fines privados fuera del horario laboral es probablemente excesiva; el conductor debe poder desactivar la grabación en esos casos.',
        nl: 'Volgens de ICO is continue registratie terwijl het voertuig buiten werktijd voor privédoeleinden wordt gebruikt waarschijnlijk buitensporig; de bestuurder moet de registratie in die gevallen kunnen uitschakelen.',
      },
      fonte: FONTE_ICO_VEICOLI,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il tracciamento della geolocalizzazione dei lavoratori",
        en: "Data protection impact assessment (DPIA) for tracking workers' geolocation",
        de: 'Datenschutz-Folgenabschätzung (DPIA) für die Standortverfolgung der Beschäftigten',
        fr: "Analyse d'impact (DPIA) pour le suivi de la géolocalisation des travailleurs",
        es: 'Evaluación de impacto (DPIA) para el rastreo de la geolocalización de los trabajadores',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) voor het volgen van de geolocatie van werknemers',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista ICO include espressamente il tracciamento della geolocalizzazione o del comportamento di una persona; per il GPS sui dipendenti la DPIA e richiesta.",
        en: "The ICO's list expressly includes tracking a person's geolocation or behaviour; for GPS on employees a DPIA is required.",
        de: 'Die Liste des ICO umfasst ausdrücklich die Verfolgung des Standorts oder des Verhaltens einer Person; für GPS bei Beschäftigten ist eine DPIA erforderlich.',
        fr: "La liste de l'ICO inclut expressément le suivi de la géolocalisation ou du comportement d'une personne ; pour le GPS sur les salariés, une DPIA est requise.",
        es: 'La lista de la ICO incluye expresamente el rastreo de la geolocalización o del comportamiento de una persona; para el GPS sobre los empleados se exige una DPIA.',
        nl: 'De lijst van de ICO omvat uitdrukkelijk het volgen van de geolocatie of het gedrag van een persoon; voor GPS bij werknemers is een DPIA vereist.',
      },
      fonte: FONTE_ICO_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Raccogli e documenta il parere dei lavoratori o dei loro rappresentanti.',
        en: 'Gather and document the views of workers or their representatives.',
        de: 'Holen Sie die Auffassung der Beschäftigten oder ihrer Vertreter ein und dokumentieren Sie sie.',
        fr: "Recueillez et documentez l'avis des travailleurs ou de leurs représentants.",
        es: 'Recaba y documenta la opinión de los trabajadores o de sus representantes.',
        nl: 'Verzamel en documenteer de mening van de werknemers of hun vertegenwoordigers.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Individua una base giuridica valida (di norma interesse legittimo) e svolgi la valutazione documentata (LIA).",
        en: 'Identify a valid legal basis (usually legitimate interests) and carry out the documented assessment (LIA).',
        de: 'Ermitteln Sie eine gültige Rechtsgrundlage (in der Regel berechtigtes Interesse) und führen Sie die dokumentierte Bewertung (LIA) durch.',
        fr: "Identifiez une base légale valable (en règle générale l'intérêt légitime) et réalisez l'évaluation documentée (LIA).",
        es: 'Determina una base jurídica válida (por lo general el interés legítimo) y realiza la evaluación documentada (LIA).',
        nl: 'Bepaal een geldige rechtsgrond (doorgaans gerechtvaardigd belang) en voer de gedocumenteerde beoordeling (LIA) uit.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) prima di attivare il tracciamento.",
        en: 'Carry out the data protection impact assessment (DPIA) before activating the tracking.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DPIA) durch, bevor Sie die Ortung aktivieren.',
        fr: "Réalisez l'analyse d'impact (DPIA) avant d'activer le suivi.",
        es: 'Realiza la evaluación de impacto (DPIA) antes de activar el rastreo.',
        nl: 'Voer de gegevensbeschermingseffectbeoordeling (DPIA) uit voordat u de tracking activeert.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Informa i lavoratori in modo chiaro e accessibile (niente sorveglianza occulta salvo casi eccezionali).',
        en: 'Inform workers in a clear and accessible way (no covert surveillance except in exceptional cases).',
        de: 'Informieren Sie die Beschäftigten klar und verständlich (keine verdeckte Überwachung außer in Ausnahmefällen).',
        fr: "Informez les travailleurs de manière claire et accessible (aucune surveillance cachée sauf cas exceptionnels).",
        es: 'Informa a los trabajadores de forma clara y accesible (sin vigilancia encubierta salvo casos excepcionales).',
        nl: 'Informeer de werknemers op een duidelijke en toegankelijke manier (geen heimelijke surveillance behalve in uitzonderlijke gevallen).',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: niente registrazione continua fuori orario, disattivazione per uso privato.',
        en: 'Configure the system: no continuous recording outside working hours, deactivation for private use.',
        de: 'Konfigurieren Sie das System: keine kontinuierliche Aufzeichnung außerhalb der Arbeitszeit, Deaktivierung für die private Nutzung.',
        fr: "Configurez le système : aucun enregistrement continu en dehors des heures de travail, désactivation pour l'usage privé.",
        es: 'Configura el sistema: sin grabación continua fuera del horario laboral, desactivación para uso privado.',
        nl: 'Configureer het systeem: geen continue registratie buiten werktijd, uitschakeling voor privégebruik.',
      },
    },
  ],

  contatti: [
    {
      ente: 'ICO, segnalazioni',
      portale: FONTE_ICO_SEGNALAZIONI.url,
      urlFonte: FONTE_ICO_SEGNALAZIONI.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'provvedimento di enforcement + diffida (nessuna multa); rischio UK GDPR fino a 17,5 milioni di sterline o 4% del fatturato',
      en: 'enforcement notice + warning (no fine); UK GDPR risk of up to 17.5 million pounds or 4% of turnover',
      de: 'Anordnung zur Durchsetzung + Verwarnung (kein Bußgeld); UK-GDPR-Risiko von bis zu 17,5 Millionen Pfund oder 4 % des Umsatzes',
      fr: "mise en demeure d'exécution + avertissement (pas d'amende) ; risque UK GDPR pouvant atteindre 17,5 millions de livres sterling ou 4 % du chiffre d'affaires",
      es: 'requerimiento de cumplimiento + apercibimiento (sin multa); riesgo UK GDPR de hasta 17,5 millones de libras esterlinas o el 4 % de la facturación',
      nl: 'handhavingsbevel + waarschuwing (geen boete); UK GDPR-risico tot 17,5 miljoen pond of 4% van de omzet',
    },
    casoCitato: {
      it: "ICO contro l'Home Office (1 marzo 2024): provvedimento di enforcement e diffida per non aver valutato a sufficienza l'intrusivita del tracciamento GPS continuo (cavigliera su persone in regime di immigrazione), DPIA inadeguata, niente prova di necessita e proporzionalita. Non e un caso di dipendenti, ma il ragionamento dell'ICO sul tracciamento GPS continuo e direttamente trasferibile.",
      en: "ICO against the Home Office (1 March 2024): enforcement notice and warning for failing to adequately assess the intrusiveness of continuous GPS tracking (ankle tag on people under immigration powers), inadequate DPIA, no evidence of necessity and proportionality. It is not an employee case, but the ICO's reasoning on continuous GPS tracking is directly transferable.",
      de: "ICO gegen das Home Office (1. März 2024): Anordnung zur Durchsetzung und Verwarnung, weil die Eingriffsintensität der kontinuierlichen GPS-Ortung (Fußfessel bei Personen im Rahmen der Einwanderungsbehörde) nicht ausreichend bewertet wurde, unzureichende DPIA, kein Nachweis von Erforderlichkeit und Verhältnismäßigkeit. Es handelt sich nicht um einen Fall von Beschäftigten, aber die Argumentation des ICO zur kontinuierlichen GPS-Ortung ist direkt übertragbar.",
      fr: "ICO contre le Home Office (1er mars 2024) : mise en demeure d'exécution et avertissement pour ne pas avoir suffisamment évalué le caractère intrusif du suivi GPS continu (bracelet à la cheville sur des personnes relevant du régime d'immigration), DPIA inadéquate, aucune preuve de nécessité et de proportionnalité. Il ne s'agit pas d'un cas de salariés, mais le raisonnement de l'ICO sur le suivi GPS continu est directement transposable.",
      es: "ICO contra el Home Office (1 de marzo de 2024): requerimiento de cumplimiento y apercibimiento por no haber evaluado suficientemente el carácter intrusivo del rastreo GPS continuo (tobillera a personas bajo el régimen de inmigración), DPIA inadecuada, sin prueba de necesidad y proporcionalidad. No es un caso de empleados, pero el razonamiento de la ICO sobre el rastreo GPS continuo es directamente trasladable.",
      nl: "ICO tegen het Home Office (1 maart 2024): handhavingsbevel en waarschuwing wegens het onvoldoende beoordelen van de indringendheid van continue GPS-tracking (enkelband bij personen onder het immigratieregime), ontoereikende DPIA, geen bewijs van noodzaak en evenredigheid. Het is geen werknemerszaak, maar de redenering van de ICO over continue GPS-tracking is direct overdraagbaar.",
    },
    urlFonte: FONTE_ICO_HOME_OFFICE.url,
  },

  fonti: [
    FONTE_ICO_MONITORAGGIO,
    FONTE_ICO_VEICOLI,
    FONTE_ICO_DPIA,
    FONTE_ICO_HOME_OFFICE,
    FONTE_ICO_SEGNALAZIONI,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
