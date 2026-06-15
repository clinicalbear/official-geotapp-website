/**
 * Scheda-paese Bielorussia per la risorsa "GPS sui lavoratori in UE".
 *
 * ATTENZIONE: la Bielorussia NON e' uno Stato membro dell'UE e NON applica il
 * GDPR. Vale la Legge della Repubblica di Bielorussia n. 99-Z del 7 maggio 2021
 * sulla protezione dei dati personali, basata sul CONSENSO come base giuridica
 * principale. Il contesto e' autoritario e la trasparenza sull'applicazione
 * delle norme e' limitata: le indicazioni qui sotto vanno lette con cautela.
 *
 * Contenuti basati su fonti citate nella sezione "Fonti": Legge 99-Z e
 * informazioni dell'NPDPC (Centro nazionale per la protezione dei dati
 * personali), analisi GRATA sulla privacy dei dipendenti e scheda DLA Piper
 * sull'applicazione. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti citate.
const FONTE_LEGGE_99Z = {
  titolo:
    'Legge della Repubblica di Bielorussia n. 99-Z del 7 maggio 2021 sulla protezione dei dati personali (NPDPC)',
  url: 'https://cpd.by/en/national-regulation/the-belarusian-data-protection-act/',
};
const FONTE_NPDPC = {
  titolo: 'NPDPC (Garante bielorusso), informazioni e contatti',
  url: 'https://cpd.by/en/about-center/',
};
const FONTE_GRATA = {
  titolo:
    'GRATA, protezione dei dati e privacy dei dipendenti in Bielorussia',
  url: 'https://gratanet.com/publications/data-protection-and-employee-privacy-in-belarus',
};
const FONTE_DLA_PIPER = {
  titolo: 'DLA Piper, applicazione e sanzioni in Bielorussia',
  url: 'https://www.dlapiperdataprotection.com/?t=enforcement&c=BY',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) - riferimento comparativo lontano',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const bielorussia: SchedaPaese = {
  codiceISO: 'BY',
  slugCanonico: 'bielorussia',
  nome: 'Bielorussia',
  nomi: {
    it: 'Bielorussia',
    en: 'Belarus',
    'en-us': 'Belarus',
    'en-gb': 'Belarus',
    'en-au': 'Belarus',
    'en-ie': 'Belarus',
    'en-ca': 'Belarus',
    de: 'Belarus',
    nl: 'Belarus',
    fr: 'Biélorussie',
    es: 'Bielorrusia',
    pt: 'Bielorrússia',
    da: 'Hviderusland',
    sv: 'Vitryssland',
    nb: 'Hviterussland',
    ru: 'Беларусь',
  },
  bandiera: '🇧🇾',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'NPDPC (Centro nazionale per la protezione dei dati personali)',
    portale: FONTE_NPDPC.url,
    urlFonte: FONTE_NPDPC.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Bielorussia e' fuori dall'UE e non applica il GDPR. Vale la Legge 99-Z del 2021, basata sul consenso. Contesto autoritario e trasparenza limitata sull'applicazione. Unica autorita' nazionale, l'NPDPC.",
      en: "Belarus is outside the EU and does not apply the GDPR. The Law 99-Z of 2021 applies, based on consent. The context is authoritarian and transparency over enforcement is limited. The only national authority is the NPDPC.",
      de: "Belarus liegt ausserhalb der EU und wendet die DSGVO nicht an. Es gilt das Gesetz 99-Z von 2021, das auf der Einwilligung beruht. Der Kontext ist autoritaer und die Transparenz ueber die Durchsetzung ist begrenzt. Die einzige nationale Behoerde ist das NPDPC.",
      fr: "La Bielorussie se trouve hors de l'UE et n'applique pas le RGPD. C'est la loi 99-Z de 2021 qui s'applique, fondee sur le consentement. Le contexte est autoritaire et la transparence sur l'application des regles est limitee. L'unique autorite nationale est le NPDPC.",
      es: "Bielorrusia esta fuera de la UE y no aplica el RGPD. Rige la Ley 99-Z de 2021, basada en el consentimiento. El contexto es autoritario y la transparencia sobre la aplicacion es limitada. La unica autoridad nacional es el NPDPC.",
      nl: "Belarus ligt buiten de EU en past de AVG niet toe. Van toepassing is de Wet 99-Z van 2021, gebaseerd op toestemming. De context is autoritair en de transparantie over de handhaving is beperkt. De enige nationale autoriteit is het NPDPC.",
    },
  },

  checklist: [
    {
      voce: {
        it: 'Consenso separato e specifico del lavoratore per la geolocalizzazione + informazione dettagliata (Legge 99-Z)',
        en: "Separate and specific consent from the worker for geolocation + detailed notice (Law 99-Z)",
        de: 'Gesonderte und spezifische Einwilligung des Mitarbeiters zur Geolokalisierung + detaillierte Information (Gesetz 99-Z)',
        fr: "Consentement separe et specifique du salarie pour la geolocalisation + information detaillee (loi 99-Z)",
        es: 'Consentimiento separado y especifico del trabajador para la geolocalizacion + informacion detallada (Ley 99-Z)',
        nl: 'Afzonderlijke en specifieke toestemming van de werknemer voor geolocatie + gedetailleerde informatie (Wet 99-Z)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il modello bielorusso si basa sul consenso; per il GPS conviene il consenso separato e specifico del lavoratore, con un'informazione dettagliata (titolare, finalita', elenco dei dati, durata, soggetti che trattano, diritti). L'eccezione per i rapporti di lavoro copre la gestione ordinaria del rapporto, non una sorveglianza GPS continua.",
        en: "The Belarusian model is based on consent; for GPS it is advisable to obtain separate and specific consent from the worker, with detailed notice (controller, purposes, list of data, duration, parties who process the data, rights). The exception for employment relationships covers the ordinary management of the relationship, not continuous GPS surveillance.",
        de: "Das belarussische Modell beruht auf der Einwilligung; fuer GPS empfiehlt sich die gesonderte und spezifische Einwilligung des Mitarbeiters, mit einer detaillierten Information (Verantwortlicher, Zwecke, Liste der Daten, Dauer, verarbeitende Stellen, Rechte). Die Ausnahme fuer Arbeitsverhaeltnisse deckt die gewoehnliche Verwaltung des Verhaeltnisses ab, nicht eine fortlaufende GPS-Ueberwachung.",
        fr: "Le modele bielorusse repose sur le consentement; pour le GPS, il convient d'obtenir le consentement separe et specifique du salarie, avec une information detaillee (responsable du traitement, finalites, liste des donnees, duree, intervenants qui traitent les donnees, droits). L'exception pour les relations de travail couvre la gestion ordinaire de la relation, et non une surveillance GPS continue.",
        es: "El modelo bielorruso se basa en el consentimiento; para el GPS conviene obtener el consentimiento separado y especifico del trabajador, con informacion detallada (responsable, finalidades, lista de datos, duracion, sujetos que tratan los datos, derechos). La excepcion para las relaciones laborales cubre la gestion ordinaria de la relacion, no una vigilancia GPS continua.",
        nl: "Het Belarussische model is gebaseerd op toestemming; voor GPS is afzonderlijke en specifieke toestemming van de werknemer aan te raden, met gedetailleerde informatie (verwerkingsverantwoordelijke, doeleinden, lijst van gegevens, duur, partijen die de gegevens verwerken, rechten). De uitzondering voor arbeidsverhoudingen dekt het gewone beheer van de verhouding, niet een doorlopende GPS-bewaking.",
      },
      fonte: FONTE_LEGGE_99Z,
    },
    {
      voce: {
        it: "Autorizzazione o registrazione preventiva di un'autorita' prima di installare",
        en: "Prior authorisation or registration with an authority before installing",
        de: 'Vorherige Genehmigung oder Registrierung bei einer Behoerde vor der Installation',
        fr: "Autorisation ou enregistrement prealable aupres d'une autorite avant l'installation",
        es: 'Autorizacion o registro previo ante una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming of registratie bij een autoriteit voor de installatie',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva generale; l'iscrizione al registro degli operatori e' richiesta solo per categorie a rischio (dati biometrici/genetici, trasferimenti speciali, 100.000+ interessati). Un datore che fa GPS sul proprio personale di norma resta sotto soglia.",
        en: "No general prior authorisation is required; registration in the register of operators is required only for high-risk categories (biometric/genetic data, special transfers, 100,000+ data subjects). An employer using GPS on its own staff normally stays below the threshold.",
        de: "Eine allgemeine vorherige Genehmigung ist nicht erforderlich; die Eintragung in das Register der Betreiber ist nur fuer risikoreiche Kategorien erforderlich (biometrische/genetische Daten, besondere Uebermittlungen, 100.000+ Betroffene). Ein Arbeitgeber, der GPS bei eigenem Personal einsetzt, bleibt in der Regel unter der Schwelle.",
        fr: "Aucune autorisation prealable generale n'est requise; l'inscription au registre des operateurs n'est exigee que pour les categories a risque (donnees biometriques/genetiques, transferts speciaux, 100 000+ personnes concernees). Un employeur qui utilise le GPS sur son propre personnel reste en regle generale sous le seuil.",
        es: "No se necesita una autorizacion previa general; la inscripcion en el registro de operadores solo se exige para las categorias de riesgo (datos biometricos/geneticos, transferencias especiales, 100.000+ interesados). Un empleador que usa el GPS con su propio personal normalmente queda por debajo del umbral.",
        nl: "Een algemene voorafgaande toestemming is niet nodig; inschrijving in het register van verwerkers is alleen vereist voor risicocategorieen (biometrische/genetische gegevens, bijzondere doorgiften, 100.000+ betrokkenen). Een werkgever die GPS bij eigen personeel gebruikt, blijft doorgaans onder de drempel.",
      },
      fonte: FONTE_DLA_PIPER,
    },
    {
      voce: {
        it: 'Base = di norma il consenso (modello consent-centric, diverso dal GDPR)',
        en: "Legal basis = as a rule, consent (consent-centric model, different from the GDPR)",
        de: 'Rechtsgrundlage = in der Regel die Einwilligung (auf Einwilligung ausgerichtetes Modell, anders als die DSGVO)',
        fr: "Base = en regle generale le consentement (modele centre sur le consentement, different du RGPD)",
        es: 'Base = por regla general el consentimiento (modelo centrado en el consentimiento, distinto del RGPD)',
        nl: 'Grondslag = in de regel toestemming (op toestemming gericht model, anders dan de AVG)',
      },
      risposta: 'si',
      dettaglio: {
        it: "A differenza del GDPR, la base principale e' il consenso del lavoratore, e serve un consenso per ciascuna finalita' del trattamento.",
        en: "Unlike the GDPR, the main legal basis is the worker's consent, and a separate consent is needed for each purpose of the processing.",
        de: "Anders als bei der DSGVO ist die Hauptrechtsgrundlage die Einwilligung des Mitarbeiters, und es ist eine Einwilligung fuer jeden Zweck der Verarbeitung erforderlich.",
        fr: "Contrairement au RGPD, la base principale est le consentement du salarie, et un consentement est requis pour chaque finalite du traitement.",
        es: "A diferencia del RGPD, la base principal es el consentimiento del trabajador, y se necesita un consentimiento para cada finalidad del tratamiento.",
        nl: "Anders dan bij de AVG is de belangrijkste grondslag de toestemming van de werknemer, en is voor elk doel van de verwerking toestemming nodig.",
      },
      fonte: FONTE_GRATA,
    },
    {
      voce: {
        it: 'Niente trattamento oltre la finalita; consenso per ogni finalita',
        en: "No processing beyond the purpose; consent for each purpose",
        de: 'Keine Verarbeitung ueber den Zweck hinaus; Einwilligung fuer jeden Zweck',
        fr: "Pas de traitement au-dela de la finalite; consentement pour chaque finalite",
        es: 'Sin tratamiento mas alla de la finalidad; consentimiento para cada finalidad',
        nl: 'Geen verwerking buiten het doel; toestemming voor elk doel',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il trattamento va limitato alle finalita' dichiarate, con un consenso separato per ciascuna; il titolare deve informare i lavoratori e cessare il trattamento quando viene meno la base.",
        en: "Processing must be limited to the declared purposes, with a separate consent for each; the controller must inform the workers and stop the processing when the legal basis no longer applies.",
        de: "Die Verarbeitung ist auf die angegebenen Zwecke zu beschraenken, mit einer gesonderten Einwilligung fuer jeden Zweck; der Verantwortliche muss die Mitarbeiter informieren und die Verarbeitung beenden, wenn die Rechtsgrundlage entfaellt.",
        fr: "Le traitement doit etre limite aux finalites declarees, avec un consentement separe pour chacune; le responsable du traitement doit informer les salaries et cesser le traitement lorsque la base disparait.",
        es: "El tratamiento debe limitarse a las finalidades declaradas, con un consentimiento separado para cada una; el responsable debe informar a los trabajadores y cesar el tratamiento cuando deja de existir la base.",
        nl: "De verwerking moet beperkt blijven tot de aangegeven doeleinden, met een afzonderlijke toestemming voor elk; de verwerkingsverantwoordelijke moet de werknemers informeren en de verwerking staken wanneer de grondslag wegvalt.",
      },
      fonte: FONTE_GRATA,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA)",
        en: "Impact assessment (DPIA)",
        de: 'Datenschutz-Folgenabschaetzung (DSFA)',
        fr: "Analyse d'impact (AIPD)",
        es: 'Evaluacion de impacto (EIPD)',
        nl: 'Effectbeoordeling (DPIA)',
      },
      risposta: 'no',
      dettaglio: {
        it: "La legge bielorussa non prevede una valutazione d'impatto in stile GDPR; prevede pero' l'obbligo di un responsabile della protezione dei dati e la notifica delle violazioni entro 3 giorni lavorativi.",
        en: "Belarusian law does not provide for a GDPR-style impact assessment; it does, however, require a data protection officer and notification of breaches within 3 working days.",
        de: "Das belarussische Recht sieht keine Folgenabschaetzung nach Art der DSGVO vor; es verlangt jedoch einen Datenschutzbeauftragten und die Meldung von Verletzungen innerhalb von 3 Werktagen.",
        fr: "Le droit bielorusse ne prevoit pas d'analyse d'impact de type RGPD; il impose toutefois un delegue a la protection des donnees et la notification des violations dans un delai de 3 jours ouvrables.",
        es: "La ley bielorrusa no contempla una evaluacion de impacto al estilo del RGPD; pero si exige un delegado de proteccion de datos y la notificacion de las violaciones en un plazo de 3 dias habiles.",
        nl: "De Belarussische wet voorziet niet in een effectbeoordeling in AVG-stijl; zij vereist echter wel een functionaris voor gegevensbescherming en de melding van inbreuken binnen 3 werkdagen.",
      },
      fonte: FONTE_DLA_PIPER,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Raccogli il consenso separato e specifico del lavoratore per la geolocalizzazione.',
        en: "Collect the worker's separate and specific consent for geolocation.",
        de: 'Holen Sie die gesonderte und spezifische Einwilligung des Mitarbeiters zur Geolokalisierung ein.',
        fr: "Recueillez le consentement separe et specifique du salarie pour la geolocalisation.",
        es: 'Recoja el consentimiento separado y especifico del trabajador para la geolocalizacion.',
        nl: 'Verzamel de afzonderlijke en specifieke toestemming van de werknemer voor geolocatie.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Informa in dettaglio (titolare, finalita', elenco dei dati, durata, soggetti che trattano, diritti).",
        en: "Provide detailed notice (controller, purposes, list of data, duration, parties who process the data, rights).",
        de: "Informieren Sie detailliert (Verantwortlicher, Zwecke, Liste der Daten, Dauer, verarbeitende Stellen, Rechte).",
        fr: "Informez en detail (responsable du traitement, finalites, liste des donnees, duree, intervenants qui traitent les donnees, droits).",
        es: "Informe en detalle (responsable, finalidades, lista de datos, duracion, sujetos que tratan los datos, derechos).",
        nl: "Informeer in detail (verwerkingsverantwoordelijke, doeleinden, lijst van gegevens, duur, partijen die de gegevens verwerken, rechten).",
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Verifica se rientri nelle soglie di iscrizione al registro degli operatori (dati a rischio).",
        en: "Check whether you fall within the thresholds for registration in the register of operators (high-risk data).",
        de: "Pruefen Sie, ob Sie unter die Schwellen fuer die Eintragung in das Register der Betreiber fallen (risikoreiche Daten).",
        fr: "Verifiez si vous relevez des seuils d'inscription au registre des operateurs (donnees a risque).",
        es: "Compruebe si entra dentro de los umbrales de inscripcion en el registro de operadores (datos de riesgo).",
        nl: "Ga na of u onder de drempels voor inschrijving in het register van verwerkers valt (risicogegevens).",
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Nomina un responsabile della protezione dei dati e predisponi la notifica delle violazioni entro 3 giorni.',
        en: "Appoint a data protection officer and set up the notification of breaches within 3 days.",
        de: 'Bestellen Sie einen Datenschutzbeauftragten und richten Sie die Meldung von Verletzungen innerhalb von 3 Tagen ein.',
        fr: "Designez un delegue a la protection des donnees et preparez la notification des violations dans un delai de 3 jours.",
        es: 'Nombre a un delegado de proteccion de datos y prepare la notificacion de las violaciones en un plazo de 3 dias.',
        nl: 'Benoem een functionaris voor gegevensbescherming en richt de melding van inbreuken binnen 3 dagen in.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Limita il trattamento alle finalita' dichiarate e cessa quando viene meno la base.",
        en: "Limit the processing to the declared purposes and stop it when the legal basis no longer applies.",
        de: "Beschraenken Sie die Verarbeitung auf die angegebenen Zwecke und beenden Sie sie, wenn die Rechtsgrundlage entfaellt.",
        fr: "Limitez le traitement aux finalites declarees et cessez-le lorsque la base disparait.",
        es: "Limite el tratamiento a las finalidades declaradas y ceselo cuando deja de existir la base.",
        nl: "Beperk de verwerking tot de aangegeven doeleinden en staak deze wanneer de grondslag wegvalt.",
      },
    },
  ],

  contatti: [
    {
      ente: 'NPDPC',
      portale: FONTE_NPDPC.url,
      urlFonte: FONTE_NPDPC.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino a circa 200 unita\' base (circa 2.600 euro), oltre alla possibile responsabilita\' penale',
      en: "up to about 200 base units (around 2,600 euros), in addition to possible criminal liability",
      de: 'bis zu etwa 200 Basiseinheiten (rund 2.600 Euro), zusaetzlich zur moeglichen strafrechtlichen Haftung',
      fr: "jusqu'a environ 200 unites de base (environ 2 600 euros), en plus de la possible responsabilite penale",
      es: 'hasta unas 200 unidades base (alrededor de 2.600 euros), ademas de la posible responsabilidad penal',
      nl: 'tot ongeveer 200 basiseenheden (ongeveer 2.600 euro), naast de mogelijke strafrechtelijke aansprakelijkheid',
    },
    casoCitato: {
      it: "Non risulta una decisione bielorussa specifica e pubblicata sul GPS sui dipendenti, e la trasparenza sull'applicazione e' limitata. Le sanzioni amministrative massime per violazioni sui dati arrivano a circa 200 unita' base (circa 2.600 euro), con possibile responsabilita' penale nei casi piu' gravi.",
      en: "There is no specific, published Belarusian decision on GPS on employees, and transparency over enforcement is limited. The maximum administrative penalties for data violations reach about 200 base units (around 2,600 euros), with possible criminal liability in the most serious cases.",
      de: "Eine spezifische, veroeffentlichte belarussische Entscheidung zu GPS bei Mitarbeitern ist nicht ersichtlich, und die Transparenz ueber die Durchsetzung ist begrenzt. Die hoechsten verwaltungsrechtlichen Sanktionen fuer Datenverstoesse erreichen etwa 200 Basiseinheiten (rund 2.600 Euro), mit moeglicher strafrechtlicher Haftung in den schwersten Faellen.",
      fr: "Il n'existe pas de decision bielorusse specifique et publiee sur le GPS appliquee aux salaries, et la transparence sur l'application des regles est limitee. Les sanctions administratives maximales pour les violations relatives aux donnees atteignent environ 200 unites de base (environ 2 600 euros), avec une possible responsabilite penale dans les cas les plus graves.",
      es: "No consta una decision bielorrusa especifica y publicada sobre el GPS aplicado a los empleados, y la transparencia sobre la aplicacion es limitada. Las sanciones administrativas maximas por infracciones de datos llegan a unas 200 unidades base (alrededor de 2.600 euros), con posible responsabilidad penal en los casos mas graves.",
      nl: "Er is geen specifieke, gepubliceerde Belarussische beslissing over GPS bij werknemers bekend, en de transparantie over de handhaving is beperkt. De maximale bestuurlijke sancties voor gegevensinbreuken bedragen ongeveer 200 basiseenheden (ongeveer 2.600 euro), met mogelijke strafrechtelijke aansprakelijkheid in de ernstigste gevallen.",
    },
    urlFonte: FONTE_DLA_PIPER.url,
  },

  fonti: [
    FONTE_LEGGE_99Z,
    FONTE_NPDPC,
    FONTE_GRATA,
    FONTE_DLA_PIPER,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
