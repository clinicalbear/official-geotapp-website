/**
 * Scheda-paese Svezia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * § 11 della legge sulla cogestione nei luoghi di lavoro (MBL, Lag 1976:580),
 * guide dell'IMY (autorita garante svedese) su controllo dei dipendenti,
 * localizzazione GPS e valutazione d'impatto, GDPR e il caso del Comune di
 * Skelleftea sul riconoscimento facciale per le presenze.
 *
 * La Svezia ha un'unica autorita nazionale per la protezione dei dati, l'IMY
 * (gia Datainspektionen); non esiste alcuna ripartizione regionale.
 * Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_MBL_11 = {
  titolo:
    'Lag 1976:580 om medbestammande i arbetslivet (MBL), § 11',
  url: 'https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-1976580-om-medbestammande-i-arbetslivet_sfs-1976-580/',
};
const FONTE_IMY_CONTROLLO = {
  titolo: 'IMY, controllo e sorveglianza dei dipendenti',
  url: 'https://www.imy.se/verksamhet/dataskydd/dataskydd-pa-olika-omraden/arbetsliv/kontroll-och-overvakning-av-anstallda/',
};
const FONTE_IMY_GPS = {
  titolo:
    'IMY, come usare i servizi di localizzazione (GPS) sui dipendenti',
  url: 'https://www.imy.se/verksamhet/dataskydd/vi-guidar-dig/integritet-pa-jobbet/sa-far-du-som-arbetsgivare-anvanda-platstjanster-gps/',
};
const FONTE_IMY_DPIA = {
  titolo: "IMY, quando svolgere una valutazione d'impatto",
  url: 'https://www.imy.se/verksamhet/dataskydd/det-har-galler-enligt-gdpr/konsekvensbedomning/nar-ska-en-konsekvensbedomning-genomforas/',
};
const FONTE_IMY_RECLAMO = {
  titolo: 'IMY, presentare un reclamo',
  url: 'https://www.imy.se/privatperson/utfora-arenden/lamna-ett-klagomal',
};
const FONTE_IMY_SKELLEFTEA = {
  titolo:
    'IMY, sanzione al Comune di Skelleftea (riconoscimento facciale per le presenze)',
  url: 'https://www.imy.se/tillsyner/gymnasienamnden-i-skelleftea-kommun/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const svezia: SchedaPaese = {
  codiceISO: 'SE',
  slugCanonico: 'svezia',
  nome: 'Svezia',
  nomi: {
    it: 'Svezia',
    en: 'Sweden',
    'en-us': 'Sweden',
    'en-gb': 'Sweden',
    'en-au': 'Sweden',
    'en-ie': 'Sweden',
    'en-ca': 'Sweden',
    de: 'Schweden',
    nl: 'Zweden',
    fr: 'Suède',
    es: 'Suecia',
    pt: 'Suécia',
    da: 'Sverige',
    sv: 'Sverige',
    nb: 'Sverige',
    ru: 'Швеция',
  },
  bandiera: '🇸🇪',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'IMY (Integritetsskyddsmyndigheten, autorita garante svedese)',
    portale: FONTE_IMY_RECLAMO.url,
    urlFonte: FONTE_IMY_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Svezia ha un'unica autorita nazionale, l'IMY (gia Datainspektionen); nessuna ripartizione regionale.",
      en: 'Sweden has a single national authority, the IMY (formerly Datainspektionen); there is no regional split.',
      de: 'Schweden hat eine einzige nationale Behorde, die IMY (fruher Datainspektionen); es gibt keine regionale Aufteilung.',
      fr: "La Suede dispose d'une seule autorite nationale, l'IMY (anciennement Datainspektionen); il n'existe aucune repartition regionale.",
      es: 'Suecia tiene una unica autoridad nacional, la IMY (antes Datainspektionen); no existe ninguna division regional.',
      nl: 'Zweden heeft een enkele nationale autoriteit, de IMY (voorheen Datainspektionen); er is geen regionale opdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Negoziazione sindacale preventiva (MBL § 11) prima di introdurre il sistema',
        en: 'Prior union negotiation (MBL s 11) before introducing the system',
        de: 'Vorherige Gewerkschaftsverhandlung (MBL § 11) vor Einfuhrung des Systems',
        fr: "Negociation syndicale prealable (MBL art. 11) avant d'introduire le systeme",
        es: 'Negociacion sindical previa (MBL art. 11) antes de introducir el sistema',
        nl: 'Voorafgaand overleg met de vakbond (MBL art. 11) voordat het systeem wordt ingevoerd',
      },
      risposta: 'dipende',
      dettaglio: {
        it: 'Il datore vincolato da un contratto collettivo deve, di propria iniziativa, negoziare con il sindacato prima di una modifica importante (come introdurre un sistema di monitoraggio o GPS). Vale dove il datore e vincolato da un contratto collettivo.',
        en: 'An employer bound by a collective agreement must, on its own initiative, negotiate with the union before a major change (such as introducing a monitoring or GPS system). This applies where the employer is bound by a collective agreement.',
        de: 'Ein durch einen Tarifvertrag gebundener Arbeitgeber muss von sich aus mit der Gewerkschaft verhandeln, bevor er eine wesentliche Anderung vornimmt (etwa die Einfuhrung eines Uberwachungs- oder GPS-Systems). Dies gilt, wenn der Arbeitgeber an einen Tarifvertrag gebunden ist.',
        fr: "L'employeur lie par une convention collective doit, de sa propre initiative, negocier avec le syndicat avant un changement important (comme l'introduction d'un systeme de surveillance ou de GPS). Cela vaut lorsque l'employeur est lie par une convention collective.",
        es: 'El empleador vinculado por un convenio colectivo debe, por iniciativa propia, negociar con el sindicato antes de un cambio importante (como introducir un sistema de control o de GPS). Se aplica cuando el empleador esta vinculado por un convenio colectivo.',
        nl: 'Een werkgever die gebonden is aan een collectieve arbeidsovereenkomst moet op eigen initiatief met de vakbond overleggen voordat een belangrijke wijziging wordt doorgevoerd (zoals het invoeren van een monitoring- of GPS-systeem). Dit geldt wanneer de werkgever gebonden is aan een collectieve arbeidsovereenkomst.',
      },
      fonte: FONTE_MBL_11,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behorde vor der Installation',
        fr: "Autorisation prealable d'une autorite avant l'installation",
        es: 'Autorizacion previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voordat wordt geinstalleerd',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non esiste un regime di autorizzazione preventiva dell'IMY per il GPS sui dipendenti; vale la responsabilizzazione (il datore documenta da se base giuridica e bilanciamento).",
        en: 'There is no prior-authorisation regime by the IMY for GPS on employees; accountability applies (the employer documents the legal basis and balancing test itself).',
        de: 'Es gibt kein vorheriges Genehmigungsverfahren der IMY fur GPS bei Beschaftigten; es gilt die Rechenschaftspflicht (der Arbeitgeber dokumentiert Rechtsgrundlage und Interessenabwagung selbst).',
        fr: "Il n'existe pas de regime d'autorisation prealable de l'IMY pour le GPS sur les salaries; le principe de responsabilite s'applique (l'employeur documente lui-meme la base juridique et la mise en balance).",
        es: 'No existe un regimen de autorizacion previa de la IMY para el GPS sobre los empleados; rige la responsabilidad proactiva (el empleador documenta por si mismo la base juridica y la ponderacion de intereses).',
        nl: 'Er bestaat geen voorafgaand goedkeuringsregime van de IMY voor GPS bij werknemers; het verantwoordingsbeginsel geldt (de werkgever documenteert zelf de rechtsgrond en de belangenafweging).',
      },
      fonte: FONTE_IMY_CONTROLLO,
    },
    {
      voce: {
        it: 'Base = bilanciamento di interessi (non il consenso) + informazione chiara ai lavoratori',
        en: 'Basis = balancing of interests (not consent) + clear information to workers',
        de: 'Grundlage = Interessenabwagung (nicht Einwilligung) + klare Information der Beschaftigten',
        fr: "Base = mise en balance des interets (pas le consentement) + information claire des salaries",
        es: 'Base = ponderacion de intereses (no el consentimiento) + informacion clara a los trabajadores',
        nl: 'Grondslag = belangenafweging (niet toestemming) + duidelijke informatie aan werknemers',
      },
      risposta: 'si',
      dettaglio: {
        it: 'La base giuridica e di norma il bilanciamento di interessi, non il consenso del dipendente (rapporto di dipendenza); i lavoratori vanno informati in modo chiaro, al piu tardi quando i dati sono raccolti.',
        en: 'The legal basis is normally the balancing of interests, not the employee consent (relationship of dependence); workers must be informed clearly, at the latest when the data is collected.',
        de: 'Rechtsgrundlage ist in der Regel die Interessenabwagung, nicht die Einwilligung des Beschaftigten (Abhangigkeitsverhaltnis); die Beschaftigten sind klar zu informieren, spatestens bei der Erhebung der Daten.',
        fr: "La base juridique est en principe la mise en balance des interets, non le consentement du salarie (lien de subordination); les salaries doivent etre informes clairement, au plus tard lors de la collecte des donnees.",
        es: 'La base juridica es por lo general la ponderacion de intereses, no el consentimiento del empleado (relacion de dependencia); los trabajadores deben ser informados con claridad, a mas tardar cuando se recogen los datos.',
        nl: 'De rechtsgrond is doorgaans de belangenafweging, niet de toestemming van de werknemer (gezagsverhouding); werknemers moeten duidelijk worden geinformeerd, uiterlijk wanneer de gegevens worden verzameld.',
      },
      fonte: FONTE_IMY_CONTROLLO,
    },
    {
      voce: {
        it: 'GPS solo per un concreto bisogno operativo; niente sorveglianza in tempo reale ingiustificata, niente riuso per valutare il rendimento',
        en: 'GPS only for a concrete operational need; no unjustified real-time surveillance, no reuse to assess performance',
        de: 'GPS nur fur einen konkreten betrieblichen Bedarf; keine ungerechtfertigte Echtzeituberwachung, keine Weiterverwendung zur Leistungsbewertung',
        fr: "GPS uniquement pour un besoin operationnel concret; pas de surveillance en temps reel injustifiee, pas de reutilisation pour evaluer le rendement",
        es: 'GPS solo para una necesidad operativa concreta; sin vigilancia en tiempo real injustificada, sin reutilizacion para evaluar el rendimiento',
        nl: 'GPS alleen voor een concrete operationele behoefte; geen ongerechtvaardigd toezicht in real time, geen hergebruik om prestaties te beoordelen',
      },
      risposta: 'si',
      dettaglio: {
        it: 'La localizzazione e ammessa se motivata da un concreto bisogno aziendale; non per sorvegliare in tempo reale senza motivo, e i dati raccolti per un altro scopo (es. un registro di guida) non possono essere riusati per analizzare il rendimento.',
        en: 'Location tracking is allowed if justified by a concrete business need; not to monitor in real time without reason, and data collected for another purpose (e.g. a driving log) cannot be reused to analyse performance.',
        de: 'Die Standortverfolgung ist zulassig, wenn sie durch einen konkreten betrieblichen Bedarf gerechtfertigt ist; nicht, um ohne Grund in Echtzeit zu uberwachen, und fur einen anderen Zweck erhobene Daten (z. B. ein Fahrtenbuch) durfen nicht zur Leistungsanalyse weiterverwendet werden.',
        fr: "La geolocalisation est admise si elle est justifiee par un besoin concret de l'entreprise; non pour surveiller en temps reel sans raison, et les donnees collectees a une autre fin (par ex. un carnet de bord) ne peuvent pas etre reutilisees pour analyser le rendement.",
        es: 'La localizacion se admite si esta justificada por una necesidad concreta de la empresa; no para vigilar en tiempo real sin motivo, y los datos recogidos para otra finalidad (p. ej. un registro de conduccion) no pueden reutilizarse para analizar el rendimiento.',
        nl: 'Locatiebepaling is toegestaan als zij gerechtvaardigd is door een concrete bedrijfsbehoefte; niet om zonder reden in real time toezicht te houden, en gegevens die voor een ander doel zijn verzameld (bijv. een rittenregistratie) mogen niet worden hergebruikt om prestaties te analyseren.',
      },
      fonte: FONTE_IMY_GPS,
    },
    {
      voce: {
        it: "Valutazione d'impatto per il monitoraggio sistematico dei dipendenti",
        en: 'Impact assessment for systematic monitoring of employees',
        de: 'Datenschutz-Folgenabschatzung bei systematischer Uberwachung der Beschaftigten',
        fr: "Analyse d'impact en cas de surveillance systematique des salaries",
        es: 'Evaluacion de impacto para el control sistematico de los empleados',
        nl: 'Effectbeoordeling bij systematische monitoring van werknemers',
      },
      risposta: 'si',
      dettaglio: {
        it: "Serve una valutazione d'impatto quando il trattamento comporta una sorveglianza sistematica dei dipendenti ed e probabile un rischio elevato per i loro diritti.",
        en: 'An impact assessment is needed when the processing involves systematic monitoring of employees and a high risk to their rights is likely.',
        de: 'Eine Folgenabschatzung ist erforderlich, wenn die Verarbeitung eine systematische Uberwachung der Beschaftigten umfasst und ein hohes Risiko fur ihre Rechte wahrscheinlich ist.',
        fr: "Une analyse d'impact est necessaire lorsque le traitement implique une surveillance systematique des salaries et qu'un risque eleve pour leurs droits est probable.",
        es: 'Es necesaria una evaluacion de impacto cuando el tratamiento implica un control sistematico de los empleados y es probable un alto riesgo para sus derechos.',
        nl: 'Een effectbeoordeling is nodig wanneer de verwerking een systematische monitoring van werknemers inhoudt en een hoog risico voor hun rechten waarschijnlijk is.',
      },
      fonte: FONTE_IMY_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Se vincolato da contratto collettivo, negozia col sindacato prima di introdurre il sistema (MBL § 11).',
        en: 'If bound by a collective agreement, negotiate with the union before introducing the system (MBL s 11).',
        de: 'Wenn Sie an einen Tarifvertrag gebunden sind, verhandeln Sie mit der Gewerkschaft, bevor Sie das System einfuhren (MBL § 11).',
        fr: "Si vous etes lie par une convention collective, negociez avec le syndicat avant d'introduire le systeme (MBL art. 11).",
        es: 'Si esta vinculado por un convenio colectivo, negocie con el sindicato antes de introducir el sistema (MBL art. 11).',
        nl: 'Als u gebonden bent aan een collectieve arbeidsovereenkomst, overleg dan met de vakbond voordat u het systeem invoert (MBL art. 11).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Documenta la base giuridica (bilanciamento di interessi) e il relativo test.',
        en: 'Document the legal basis (balancing of interests) and the related test.',
        de: 'Dokumentieren Sie die Rechtsgrundlage (Interessenabwagung) und den zugehorigen Test.',
        fr: 'Documentez la base juridique (mise en balance des interets) et le test correspondant.',
        es: 'Documente la base juridica (ponderacion de intereses) y la prueba correspondiente.',
        nl: 'Documenteer de rechtsgrond (belangenafweging) en de bijbehorende toets.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Informa i lavoratori in modo chiaro, al piu tardi alla raccolta dei dati.',
        en: 'Inform workers clearly, at the latest when the data is collected.',
        de: 'Informieren Sie die Beschaftigten klar, spatestens bei der Erhebung der Daten.',
        fr: 'Informez clairement les salaries, au plus tard lors de la collecte des donnees.',
        es: 'Informe a los trabajadores con claridad, a mas tardar en el momento de la recogida de los datos.',
        nl: 'Informeer werknemers duidelijk, uiterlijk bij het verzamelen van de gegevens.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Svolgi la valutazione d\'impatto se il monitoraggio e sistematico.',
        en: 'Carry out the impact assessment if the monitoring is systematic.',
        de: 'Fuhren Sie die Folgenabschatzung durch, wenn die Uberwachung systematisch ist.',
        fr: "Realisez l'analyse d'impact si la surveillance est systematique.",
        es: 'Realice la evaluacion de impacto si el control es sistematico.',
        nl: 'Voer de effectbeoordeling uit als de monitoring systematisch is.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: solo concreto bisogno operativo, niente riuso per valutare il rendimento.',
        en: 'Configure the system: only a concrete operational need, no reuse to assess performance.',
        de: 'Konfigurieren Sie das System: nur ein konkreter betrieblicher Bedarf, keine Weiterverwendung zur Leistungsbewertung.',
        fr: "Configurez le systeme: uniquement un besoin operationnel concret, pas de reutilisation pour evaluer le rendement.",
        es: 'Configure el sistema: solo una necesidad operativa concreta, sin reutilizacion para evaluar el rendimiento.',
        nl: 'Configureer het systeem: alleen een concrete operationele behoefte, geen hergebruik om prestaties te beoordelen.',
      },
    },
  ],

  contatti: [
    {
      ente: 'IMY, reclami',
      portale: FONTE_IMY_RECLAMO.url,
      urlFonte: FONTE_IMY_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '200.000 SEK (circa 17.500 euro)',
      en: '200,000 SEK (about 17,500 euros)',
      de: '200.000 SEK (rund 17.500 Euro)',
      fr: "200 000 SEK (environ 17 500 euros)",
      es: '200.000 SEK (unos 17.500 euros)',
      nl: '200.000 SEK (ongeveer 17.500 euro)',
    },
    casoCitato: {
      it: "IMY contro il Comune di Skelleftea (2019): una scuola usava il riconoscimento facciale tramite telecamera per registrare le presenze degli studenti, trattamento biometrico illecito (il consenso non e valido nel rapporto di dipendenza). Non e un caso di GPS, ma e il caso faro svedese sul monitoraggio biometrico delle presenze.",
      en: 'IMY v. the Municipality of Skelleftea (2019): a school used camera-based facial recognition to record student attendance, an unlawful biometric processing (consent is not valid in a relationship of dependence). It is not a GPS case, but it is the landmark Swedish case on biometric attendance monitoring.',
      de: 'IMY gegen die Gemeinde Skelleftea (2019): Eine Schule nutzte kamerabasierte Gesichtserkennung, um die Anwesenheit der Schuler zu erfassen, eine unzulassige biometrische Verarbeitung (die Einwilligung ist im Abhangigkeitsverhaltnis nicht gultig). Es ist kein GPS-Fall, aber der wegweisende schwedische Fall zur biometrischen Anwesenheitserfassung.',
      fr: "IMY contre la commune de Skelleftea (2019): une ecole utilisait la reconnaissance faciale par camera pour enregistrer la presence des eleves, un traitement biometrique illicite (le consentement n'est pas valable dans un lien de subordination). Ce n'est pas une affaire de GPS, mais c'est l'affaire phare suedoise sur le controle biometrique des presences.",
      es: 'IMY contra el Municipio de Skelleftea (2019): un centro escolar usaba el reconocimiento facial por camara para registrar la asistencia de los alumnos, un tratamiento biometrico ilicito (el consentimiento no es valido en una relacion de dependencia). No es un caso de GPS, pero es el caso de referencia sueco sobre el control biometrico de la asistencia.',
      nl: 'IMY tegen de gemeente Skelleftea (2019): een school gebruikte cameragebaseerde gezichtsherkenning om de aanwezigheid van leerlingen te registreren, een onrechtmatige biometrische verwerking (toestemming is niet geldig in een gezagsverhouding). Het is geen GPS-zaak, maar het is de toonaangevende Zweedse zaak over biometrische aanwezigheidscontrole.',
    },
    urlFonte: FONTE_IMY_SKELLEFTEA.url,
  },

  fonti: [
    FONTE_MBL_11,
    FONTE_IMY_CONTROLLO,
    FONTE_IMY_GPS,
    FONTE_IMY_DPIA,
    FONTE_IMY_RECLAMO,
    FONTE_IMY_SKELLEFTEA,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
