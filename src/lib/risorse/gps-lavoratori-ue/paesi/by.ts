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
 * sull'applicazione. Nessun numero, URL o autorità' e' inventato qui.
 */

import type { SchedaPaese , Fonte} from '../types';

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
const FONTE_GRATA: Fonte = {
  titolo:
    'GRATA, protezione dei dati e privacy dei dipendenti in Bielorussia',
  url: 'https://gratanet.com/publications/data-protection-and-employee-privacy-in-belarus', nonUfficiale: 'studio-legale',
};
const FONTE_DLA_PIPER: Fonte = {
  titolo: 'DLA Piper, applicazione e sanzioni in Bielorussia',
  url: 'https://www.dlapiperdataprotection.com/?t=enforcement&c=BY', nonUfficiale: 'compilazione',
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
    ente: {
      it: 'NPDPC (Centro nazionale per la protezione dei dati personali)',
      en: 'NPDPC (National Centre for Personal Data Protection)',
      de: 'NPDPC (Nationales Zentrum für den Schutz personenbezogener Daten)',
      fr: 'NPDPC (Centre national de protection des données personnelles)',
      es: 'NPDPC (Centro Nacional de Protección de Datos Personales)',
      nl: 'NPDPC (Nationaal Centrum voor de Bescherming van Persoonsgegevens)',
      pt: 'NPDPC (Centro Nacional de Proteção de Dados Pessoais)',
      da: 'NPDPC (Nationalt Center for Beskyttelse af Personoplysninger)',
      sv: 'NPDPC (Nationella centret för skydd av personuppgifter)',
      nb: 'NPDPC (Nasjonalt senter for beskyttelse av personopplysninger)',
      ru: 'NPDPC (Национальный центр защиты персональных данных)',
    },
    portale: FONTE_NPDPC.url,
    urlFonte: FONTE_NPDPC.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Bielorussia è fuori dall'UE e non applica il GDPR. Vale la Legge 99-Z del 2021, basata sul consenso. Contesto autoritario e trasparenza limitata sull'applicazione. Unica autorità nazionale, l'NPDPC.",
      en: "Belarus is outside the EU and does not apply the GDPR. The Law 99-Z of 2021 applies, based on consent. The context is authoritarian and transparency over enforcement is limited. The only national authority is the NPDPC.",
      de: "Belarus liegt außerhalb der EU und wendet die DSGVO nicht an. Es gilt das Gesetz 99-Z von 2021, das auf der Einwilligung beruht. Der Kontext ist autoritär und die Transparenz über die Durchsetzung ist begrenzt. Die einzige nationale Behörde ist das NPDPC.",
      fr: "La Biélorussie se trouve hors de l'UE et n'appliqué pas le RGPD. C'est la loi 99-Z de 2021 qui s'appliqué, fondée sur le consentement. Le contexte est autoritaire et la transparence sur l'application des règles est limitée. L'unique autorité nationale est le NPDPC.",
      es: "Bielorrusia esta fuera de la UE y no aplica el RGPD. Rige la Ley 99-Z de 2021, basada en el consentimiento. El contexto es autoritario y la transparencia sobre la aplicación es limitada. La única autoridad nacional es el NPDPC.",
      nl: "Belarus ligt buiten de EU en past de AVG niet toe. Van toepassing is de Wet 99-Z van 2021, gebaseerd op toestemming. De context is autoritair en de transparantie over de handhaving is beperkt. De enige nationale autoriteit is het NPDPC.",
    },
  },

  checklist: [
    {
      voce: {
        it: 'Consenso separato e specifico del lavoratore per la geolocalizzazione + informazione dettagliata (Legge 99-Z)',
        en: "Separate and specific consent from the worker for geolocation + detailed notice (Law 99-Z)",
        de: 'Gesonderte und spezifische Einwilligung des Mitarbeiters zur Geolokalisierung + detaillierte Information (Gesetz 99-Z)',
        fr: "Consentement séparé et spécifique du salarie pour la géolocalisation + information detaillee (loi 99-Z)",
        es: 'Consentimiento separado y específico del trabajador para la geolocalizacion + información detallada (Ley 99-Z)',
        nl: 'Afzonderlijke en specifieke toestemming van de werknemer voor geolocatie + gedetailleerde informatie (Wet 99-Z)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il modello bielorusso si basa sul consenso; per il GPS conviene il consenso separato e specifico del lavoratore, con un'informazione dettagliata (titolare, finalità, elenco dei dati, durata, soggetti che trattano, diritti). L'eccezione per i rapporti di lavoro copre la gestione ordinaria del rapporto, non una sorveglianza GPS continua.",
        en: "The Belarusian model is based on consent; for GPS it is advisable to obtain separate and specific consent from the worker, with detailed notice (controller, purposes, list of data, duration, parties who process the data, rights). The exception for employment relationships covers the ordinary management of the relationship, not continuous GPS surveillance.",
        de: "Das belarussische Modell beruht auf der Einwilligung; für GPS empfiehlt sich die gesonderte und spezifische Einwilligung des Mitarbeiters, mit einer detaillierten Information (Verantwortlicher, Zwecke, Liste der Daten, Dauer, verarbeitende Stellen, Rechte). Die Ausnahme für Arbeitsverhältnisse deckt die gewöhnliche Verwaltung des Verhältnisses ab, nicht eine fortlaufende GPS-Überwachung.",
        fr: "Le modèle biélorusse repose sur le consentement; pour le GPS, il convient d'obtenir le consentement séparé et spécifique du salarie, avec une information detaillee (responsable du traitement, finalités, liste des données, durée, intervenants qui traitent les données, droits). L'exception pour les relations de travail couvre la gestion ordinaire de la relation, et non une surveillance GPS continue.",
        es: "El modelo bielorruso se basa en el consentimiento; para el GPS conviene obtener el consentimiento separado y específico del trabajador, con información detallada (responsable, finalidades, lista de datos, duración, sujetos que tratan los datos, derechos). La excepción para las relaciones laborales cubre la gestión ordinaria de la relación, no una vigilancia GPS continua.",
        nl: "Het Belarussische model is gebaseerd op toestemming; voor GPS is afzonderlijke en specifieke toestemming van de werknemer aan te raden, met gedetailleerde informatie (verwerkingsverantwoordelijke, doeleinden, lijst van gegevens, duur, partijen die de gegevens verwerken, rechten). De uitzondering voor arbeidsverhoudingen dekt het gewone beheer van de verhouding, niet een doorlopende GPS-bewaking.",
      },
      fonte: FONTE_LEGGE_99Z,
    },
    {
      voce: {
        it: "Autorizzazione o registrazione preventiva di un'autorità prima di installare",
        en: "Prior authorisation or registration with an authority before installing",
        de: 'Vorherige Genehmigung oder Registrierung bei einer Behörde vor der Installation',
        fr: "Autorisation ou enregistrement préalable auprès d'une autorité avant l'installation",
        es: 'Autorización o registro previo ante una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming of registratie bij een autoriteit voor de installatie',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva generale; l'iscrizione al registro degli operatori è richiesta solo per categorie a rischio (dati biometrici/genetici, trasferimenti speciali, 100.000+ interessati). Un datore che fa GPS sul proprio personale di norma resta sotto soglia.",
        en: "No general prior authorisation is required; registration in the register of operators is required only for high-risk categories (biometric/genetic data, special transfers, 100,000+ data subjects). An employer using GPS on its own staff normally stays below the threshold.",
        de: "Eine allgemeine vorherige Genehmigung ist nicht erforderlich; die Eintragung in das Register der Betreiber ist nur für risikoreiche Kategorien erforderlich (biometrische/genetische Daten, besondere Übermittlungen, 100.000+ Betroffene). Ein Arbeitgeber, der GPS bei eigenem Personal einsetzt, bleibt in der Regel unter der Schwelle.",
        fr: "Aucune autorisation préalable generale n'est requise; l'inscription au registre des opérateurs n'est exigée que pour les catégories a risque (données biométriques/genetiques, transferts spéciaux, 100 000+ personnes concernées). Un employeur qui utilise le GPS sur son propre personnel reste en règle generale sous le seuil.",
        es: "No se necesita una autorización previa general; la inscripción en el registro de operadores solo se exige para las categorías de riesgo (datos biometricos/genéticos, transferencias especiales, 100.000+ interesados). Un empleador que usa el GPS con su propio personal normalmente queda por debajo del umbral.",
        nl: "Een algemene voorafgaande toestemming is niet nodig; inschrijving in het register van verwerkers is alleen vereist voor risicocategorieen (biometrische/genetische gegevens, bijzondere doorgiften, 100.000+ betrokkenen). Een werkgever die GPS bij eigen personeel gebruikt, blijft doorgaans onder de drempel.",
      },
      fonte: FONTE_DLA_PIPER,
    },
    {
      voce: {
        it: 'Base = di norma il consenso (modello consent-centric, diverso dal GDPR)',
        en: "Legal basis = as a rule, consent (consent-centric model, different from the GDPR)",
        de: 'Rechtsgrundlage = in der Regel die Einwilligung (auf Einwilligung ausgerichtetes Modell, anders als die DSGVO)',
        fr: "Base = en règle generale le consentement (modèle centré sur le consentement, différent du RGPD)",
        es: 'Base = por regla general el consentimiento (modelo centrado en el consentimiento, distinto del RGPD)',
        nl: 'Grondslag = in de regel toestemming (op toestemming gericht model, anders dan de AVG)',
      },
      risposta: 'si',
      dettaglio: {
        it: "A differenza del GDPR, la base principale è il consenso del lavoratore, e serve un consenso per ciascuna finalità del trattamento.",
        en: "Unlike the GDPR, the main legal basis is the worker's consent, and a separate consent is needed for each purpose of the processing.",
        de: "Anders als bei der DSGVO ist die Hauptrechtsgrundlage die Einwilligung des Mitarbeiters, und es ist eine Einwilligung für jeden Zweck der Verarbeitung erforderlich.",
        fr: "Contrairement au RGPD, la base principale est le consentement du salarie, et un consentement est requis pour chaque finalité du traitement.",
        es: "A diferencia del RGPD, la base principal es el consentimiento del trabajador, y se necesita un consentimiento para cada finalidad del tratamiento.",
        nl: "Anders dan bij de AVG is de belangrijkste grondslag de toestemming van de werknemer, en is voor elk doel van de verwerking toestemming nodig.",
      },
      fonte: FONTE_GRATA,
    },
    {
      voce: {
        it: 'Niente trattamento oltre la finalità; consenso per ogni finalità',
        en: "No processing beyond the purpose; consent for each purpose",
        de: 'Keine Verarbeitung über den Zweck hinaus; Einwilligung für jeden Zweck',
        fr: "Pas de traitement au-delà de la finalité; consentement pour chaque finalité",
        es: 'Sin tratamiento mas alla de la finalidad; consentimiento para cada finalidad',
        nl: 'Geen verwerking buiten het doel; toestemming voor elk doel',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il trattamento va limitato alle finalità dichiarate, con un consenso separato per ciascuna; il titolare deve informare i lavoratori e cessare il trattamento quando viene meno la base.",
        en: "Processing must be limited to the declared purposes, with a separate consent for each; the controller must inform the workers and stop the processing when the legal basis no longer applies.",
        de: "Die Verarbeitung ist auf die angegebenen Zwecke zu beschränken, mit einer gesonderten Einwilligung für jeden Zweck; der Verantwortliche muss die Mitarbeiter informieren und die Verarbeitung beenden, wenn die Rechtsgrundlage entfällt.",
        fr: "Le traitement doit être limite aux finalités déclarées, avec un consentement séparé pour chacune; le responsable du traitement doit informer les salaries et cesser le traitement lorsque la base disparait.",
        es: "El tratamiento debe limitarse a las finalidades declaradas, con un consentimiento separado para cada una; el responsable debe informar a los trabajadores y cesar el tratamiento cuando deja de existir la base.",
        nl: "De verwerking moet beperkt blijven tot de aangegeven doeleinden, met een afzonderlijke toestemming voor elk; de verwerkingsverantwoordelijke moet de werknemers informeren en de verwerking staken wanneer de grondslag wegvalt.",
      },
      fonte: FONTE_GRATA,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA)",
        en: "Impact assessment (DPIA)",
        de: 'Datenschutz-Folgenabschätzung (DSFA)',
        fr: "Analyse d'impact (AIPD)",
        es: 'Evaluación de impacto (EIPD)',
        nl: 'Effectbeoordeling (DPIA)',
      },
      risposta: 'no',
      dettaglio: {
        it: "La legge bielorussa non prevede una valutazione d'impatto in stile GDPR; prevede però l'obbligo di un responsabile della protezione dei dati e la notifica delle violazioni entro 3 giorni lavorativi.",
        en: "Belarusian law does not provide for a GDPR-style impact assessment; it does, however, require a data protection officer and notification of breaches within 3 working days.",
        de: "Das belarussische Recht sieht keine Folgenabschätzung nach Art der DSGVO vor; es verlangt jedoch einen Datenschutzbeauftragten und die Meldung von Verletzungen innerhalb von 3 Werktagen.",
        fr: "Le droit biélorusse ne prévoit pas d'analyse d'impact de type RGPD; il impose toutefois un délégué a la protection des données et la notification des violations dans un délai de 3 jours ouvrables.",
        es: "La ley bielorrusa no contempla una evaluación de impacto al estilo del RGPD; pero si exige un delegado de protección de datos y la notificación de las violaciones en un plazo de 3 días hábiles.",
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
        fr: "Recueillez le consentement séparé et spécifique du salarie pour la géolocalisation.",
        es: 'Recoja el consentimiento separado y específico del trabajador para la geolocalizacion.',
        nl: 'Verzamel de afzonderlijke en specifieke toestemming van de werknemer voor geolocatie.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Informa in dettaglio (titolare, finalità, elenco dei dati, durata, soggetti che trattano, diritti).",
        en: "Provide detailed notice (controller, purposes, list of data, duration, parties who process the data, rights).",
        de: "Informieren Sie detailliert (Verantwortlicher, Zwecke, Liste der Daten, Dauer, verarbeitende Stellen, Rechte).",
        fr: "Informez en détail (responsable du traitement, finalités, liste des données, durée, intervenants qui traitent les données, droits).",
        es: "Informe en detalle (responsable, finalidades, lista de datos, duración, sujetos que tratan los datos, derechos).",
        nl: "Informeer in detail (verwerkingsverantwoordelijke, doeleinden, lijst van gegevens, duur, partijen die de gegevens verwerken, rechten).",
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Verifica se rientri nelle soglie di iscrizione al registro degli operatori (dati a rischio).",
        en: "Check whether you fall within the thresholds for registration in the register of operators (high-risk data).",
        de: "Prüfen Sie, ob Sie unter die Schwellen für die Eintragung in das Register der Betreiber fällen (risikoreiche Daten).",
        fr: "Vérifiez si vous relevez des seuils d'inscription au registre des opérateurs (données a risque).",
        es: "Compruebe si entra dentro de los umbrales de inscripción en el registro de operadores (datos de riesgo).",
        nl: "Ga na of u onder de drempels voor inschrijving in het register van verwerkers valt (risicogegevens).",
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Nomina un responsabile della protezione dei dati e predisponi la notifica delle violazioni entro 3 giorni.',
        en: "Appoint a data protection officer and set up the notification of breaches within 3 days.",
        de: 'Bestellen Sie einen Datenschutzbeauftragten und richten Sie die Meldung von Verletzungen innerhalb von 3 Tagen ein.',
        fr: "Désignez un délégué a la protection des données et préparez la notification des violations dans un délai de 3 jours.",
        es: 'Nombre a un delegado de protección de datos y prepare la notificación de las violaciones en un plazo de 3 días.',
        nl: 'Benoem een functionaris voor gegevensbescherming en richt de melding van inbreuken binnen 3 dagen in.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Limita il trattamento alle finalità dichiarate e cessa quando viene meno la base.",
        en: "Limit the processing to the declared purposes and stop it when the legal basis no longer applies.",
        de: "Beschränken Sie die Verarbeitung auf die angegebenen Zwecke und beenden Sie sie, wenn die Rechtsgrundlage entfällt.",
        fr: "Limitez le traitement aux finalités déclarées et cessez-le lorsque la base disparait.",
        es: "Límite el tratamiento a las finalidades declaradas y ceselo cuando deja de existir la base.",
        nl: "Beperk de verwerking tot de aangegeven doeleinden en staak deze wanneer de grondslag wegvalt.",
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
      ente: 'NPDPC',
      portale: FONTE_NPDPC.url,
      urlFonte: FONTE_NPDPC.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino a circa 200 unità base (circa 2.600 euro), oltre alla possibile responsabilità penale',
      en: "up to about 200 base units (around 2,600 euros), in addition to possible criminal liability",
      de: 'bis zu etwa 200 Basiseinheiten (rund 2.600 Euro), zusätzlich zur möglichen strafrechtlichen Haftung',
      fr: "jusqu'à environ 200 unités de base (environ 2 600 euros), en plus de la possible responsabilité pénale",
      es: 'hasta unas 200 unidades base (alrededor de 2.600 euros), ademas de la posible responsabilidad penal',
      nl: 'tot ongeveer 200 basiseenheden (ongeveer 2.600 euro), naast de mogelijke strafrechtelijke aansprakelijkheid',
    },
    casoCitato: {
      it: "Non risulta una decisione bielorussa specifica e pubblicata sul GPS sui dipendenti, e la trasparenza sull'applicazione è limitata. Le sanzioni amministrative massime per violazioni sui dati arrivano a circa 200 unità base (circa 2.600 euro), con possibile responsabilità penale nei casi più gravi.",
      en: "There is no specific, published Belarusian decision on GPS on employees, and transparency over enforcement is limited. The maximum administrative penalties for data violations reach about 200 base units (around 2,600 euros), with possible criminal liability in the most serious cases.",
      de: "Eine spezifische, veröffentlichte belarussische Entscheidung zu GPS bei Mitarbeitern ist nicht ersichtlich, und die Transparenz über die Durchsetzung ist begrenzt. Die höchsten verwaltungsrechtlichen Sanktionen für Datenverstöße erreichen etwa 200 Basiseinheiten (rund 2.600 Euro), mit möglicher strafrechtlicher Haftung in den schwersten Fällen.",
      fr: "Il n'existe pas de décision biélorusse spécifique et publiée sur le GPS appliquée aux salaries, et la transparence sur l'application des règles est limitée. Les sanctions administratives maximales pour les violations relatives aux données atteignent environ 200 unités de base (environ 2 600 euros), avec une possible responsabilité pénale dans les cas les plus graves.",
      es: "No consta una decisión bielorrusa especifica y publicada sobre el GPS aplicado a los empleados, y la transparencia sobre la aplicación es limitada. Las sanciones administrativas máximas por infracciones de datos llegan a unas 200 unidades base (alrededor de 2.600 euros), con posible responsabilidad penal en los casos mas graves.",
      nl: "Er is geen specifieke, gepubliceerde Belarussische beslissing over GPS bij werknemers bekend, en de transparantie over de handhaving is beperkt. De maximale bestuurlijke sancties voor gegevensinbreuken bedragen ongeveer 200 basiseenheden (ongeveer 2.600 euro), met mogelijke strafrechtelijke aansprakelijkheid in de ernstigste gevallen.",
    },
    urlFonte: FONTE_DLA_PIPER.url,
    tipoImporto: 'massimale',
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
