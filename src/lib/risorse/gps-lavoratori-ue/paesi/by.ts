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
const FONTE_PRIKAZ_94 = {
  titolo:
    'Ordine OAC n. 94 del 1 giugno 2022: Registro degli operatori di dati personali (casi di iscrizione)',
  url: 'https://etalonline.by/document/?regnum=t62205021',
};
const FONTE_SHVED: Fonte = {
  titolo:
    'NPDPC (N. Shved), responsabilita amministrativa per violazione della normativa sui dati personali (art. 23.7 CAO)',
  url: 'https://cpd.by/storage/2024/04/Shved-N.A.-Administrativnaja-otvetstvennost-za-narushenie-zakonodatelstva-o-zashhite-personalnyh-dannyh.pdf',
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
      fr: 'La Biélorussie se trouve hors de l’UE et n’applique pas le RGPD. C’est la loi 99-Z de 2021 qui s’applique, fondée sur le consentement. Le contexte est autoritaire et la transparence sur l’application des règles est limitée. L’unique autorité nationale est le NPDPC.',
      es: "Bielorrusia está fuera de la UE y no aplica el RGPD. Rige la Ley 99-Z de 2021, basada en el consentimiento. El contexto es autoritario y la transparencia sobre la aplicación es limitada. La única autoridad nacional es el NPDPC.",
      pt: "A Bielorrússia está fora da UE e não aplica o RGPD. Vale a Lei 99-Z de 2021, baseada no consentimento. Contexto autoritário e transparência limitada na aplicação. Uma única autoridade nacional, a NPDPC.",
      da: 'Belarus ligger uden for EU og anvender ikke GDPR. Lov 99-Z fra 2021 gælder, og den bygger på samtykke. Konteksten er autoritær, og gennemsigtigheden om håndhævelsen er begrænset. Den eneste nationale myndighed er NPDPC.',
      sv: 'Belarus står utanför EU och tillämpar inte GDPR. Lag 99-Z från 2021 gäller och bygger på samtycke. Sammanhanget är auktoritärt och insynen i tillsynen är begränsad. Den enda nationella myndigheten är NPDPC.',
      nl: "Belarus ligt buiten de EU en past de AVG niet toe. Van toepassing is de Wet 99-Z van 2021, gebaseerd op toestemming. De context is autoritair en de transparantie over de handhaving is beperkt. De enige nationale autoriteit is het NPDPC.",
    },
  },

  checklist: [
    {
      voce: {
        it: 'Consenso separato e specifico del lavoratore per la geolocalizzazione + informazione dettagliata (Legge 99-Z)',
        en: "Separate and specific consent from the worker for geolocation + detailed notice (Law 99-Z)",
        de: 'Gesonderte und spezifische Einwilligung des Mitarbeiters zur Geolokalisierung + detaillierte Information (Gesetz 99-Z)',
        fr: 'Consentement séparé et spécifique du salarié pour la géolocalisation + information détaillée (loi 99-Z)',
        es: 'Consentimiento separado y específico del trabajador para la geolocalización + información detallada (Ley 99-Z)',
        pt: "Consentimento separado e específico do trabalhador para a geolocalização + informação pormenorizada (Lei 99-Z)",
        da: 'Særskilt og specifikt samtykke fra medarbejderen til geolokalisering + detaljeret information (lov 99-Z)',
        sv: 'Separat och specifikt samtycke från den anställde för geolokalisering + detaljerad information (lag 99-Z)',
        nl: 'Afzonderlijke en specifieke toestemming van de werknemer voor geolocatie + gedetailleerde informatie (Wet 99-Z)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il modello bielorusso si basa sul consenso; per il GPS conviene il consenso separato e specifico del lavoratore, con un'informazione dettagliata (titolare, finalità, elenco dei dati, durata, soggetti che trattano, diritti). L'eccezione per i rapporti di lavoro copre la gestione ordinaria del rapporto, non una sorveglianza GPS continua.",
        en: "The Belarusian model is based on consent; for GPS it is advisable to obtain separate and specific consent from the worker, with detailed notice (controller, purposes, list of data, duration, parties who process the data, rights). The exception for employment relationships covers the ordinary management of the relationship, not continuous GPS surveillance.",
        de: "Das belarussische Modell beruht auf der Einwilligung; für GPS empfiehlt sich die gesonderte und spezifische Einwilligung des Mitarbeiters, mit einer detaillierten Information (Verantwortlicher, Zwecke, Liste der Daten, Dauer, verarbeitende Stellen, Rechte). Die Ausnahme für Arbeitsverhältnisse deckt die gewöhnliche Verwaltung des Verhältnisses ab, nicht eine fortlaufende GPS-Überwachung.",
        fr: 'Le modèle biélorusse repose sur le consentement ; pour le GPS, il convient d’obtenir le consentement séparé et spécifique du salarié, avec une information détaillée (responsable du traitement, finalités, liste des données, durée, intervenants qui traitent les données, droits). L’exception pour les relations de travail couvre la gestion ordinaire de la relation, et non une surveillance GPS continue.',
        es: "El modelo bielorruso se basa en el consentimiento; para el GPS conviene obtener el consentimiento separado y específico del trabajador, con información detallada (responsable, finalidades, lista de datos, duración, sujetos que tratan los datos, derechos). La excepción para las relaciones laborales cubre la gestión ordinaria de la relación, no una vigilancia GPS continua.",
        pt: "O modelo bielorrusso baseia-se no consentimento; para o GPS convém o consentimento separado e específico do trabalhador, com uma informação pormenorizada (responsável pelo tratamento, finalidades, lista dos dados, duração, entidades que tratam os dados, direitos). A exceção para as relações laborais cobre a gestão ordinária da relação, não uma vigilância GPS contínua.",
        da: 'Den belarusiske model bygger på samtykke; for GPS er det en god idé at indhente medarbejderens særskilte og specifikke samtykke med en detaljeret information (dataansvarlig, formål, liste over oplysninger, varighed, parter der behandler oplysningerne, rettigheder). Undtagelsen for ansættelsesforhold dækker den almindelige forvaltning af forholdet, ikke en kontinuerlig GPS-overvågning.',
        sv: 'Den belarusiska modellen bygger på samtycke; för GPS är det lämpligt att inhämta ett separat och specifikt samtycke från den anställde, med detaljerad information (personuppgiftsansvarig, ändamål, förteckning över uppgifter, varaktighet, parter som behandlar uppgifterna, rättigheter). Undantaget för anställningsförhållanden omfattar den ordinarie förvaltningen av förhållandet, inte löpande GPS-övervakning.',
        nl: "Het Belarussische model is gebaseerd op toestemming; voor GPS is afzonderlijke en specifieke toestemming van de werknemer aan te raden, met gedetailleerde informatie (verwerkingsverantwoordelijke, doeleinden, lijst van gegevens, duur, partijen die de gegevens verwerken, rechten). De uitzondering voor arbeidsverhoudingen dekt het gewone beheer van de verhouding, niet een doorlopende GPS-bewaking.",
      },
      fonte: FONTE_LEGGE_99Z,
    },
    {
      voce: {
        it: "Autorizzazione o registrazione preventiva di un'autorità prima di installare",
        en: "Prior authorisation or registration with an authority before installing",
        de: 'Vorherige Genehmigung oder Registrierung bei einer Behörde vor der Installation',
        fr: 'Autorisation ou enregistrement préalable auprès d’une autorité avant l’installation',
        es: 'Autorización o registro previo ante una autoridad antes de instalar',
        pt: "Autorização ou registo prévio de uma autoridade antes de instalar",
        da: 'Forudgående tilladelse eller registrering hos en myndighed før installation',
        sv: 'Förhandstillstånd eller registrering hos en myndighet före installationen',
        nl: 'Voorafgaande toestemming of registratie bij een autoriteit voor de installatie',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva generale; l'iscrizione al registro degli operatori è richiesta solo per categorie a rischio (dati biometrici/genetici, trasferimenti speciali, 100.000+ interessati). Un datore che fa GPS sul proprio personale di norma resta sotto soglia.",
        en: "No general prior authorisation is required; registration in the register of operators is required only for high-risk categories (biometric/genetic data, special transfers, 100,000+ data subjects). An employer using GPS on its own staff normally stays below the threshold.",
        de: "Eine allgemeine vorherige Genehmigung ist nicht erforderlich; die Eintragung in das Register der Betreiber ist nur für risikoreiche Kategorien erforderlich (biometrische/genetische Daten, besondere Übermittlungen, 100.000+ Betroffene). Ein Arbeitgeber, der GPS bei eigenem Personal einsetzt, bleibt in der Regel unter der Schwelle.",
        fr: 'Aucune autorisation préalable générale n’est requise ; l’inscription au registre des opérateurs n’est exigée que pour les catégories à risque (données biométriques/génétiques, transferts spéciaux, 100 000+ personnes concernées). Un employeur qui utilise le GPS sur son propre personnel reste en règle générale sous le seuil.',
        es: "No se necesita una autorización previa general; la inscripción en el registro de operadores solo se exige para las categorías de riesgo (datos biométricos/genéticos, transferencias especiales, 100.000+ interesados). Un empleador que usa el GPS con su propio personal normalmente queda por debajo del umbral.",
        pt: "Não é necessária uma autorização prévia geral; a inscrição no registo dos operadores só é exigida para categorias de risco (dados biométricos/genéticos, transferências especiais, mais de 100.000 titulares). Uma entidade empregadora que faça GPS ao seu pessoal fica, em regra, abaixo do limiar.",
        da: 'Der kræves ingen generel forudgående tilladelse; indførelse i operatørregisteret kræves kun for højrisikokategorier (biometriske/genetiske oplysninger, særlige overførsler, 100.000+ registrerede). En arbejdsgiver, der bruger GPS på sit eget personale, holder sig normalt under tærsklen.',
        sv: 'Inget allmänt förhandstillstånd krävs; registrering i operatörsregistret krävs endast för högriskkategorier (biometriska/genetiska uppgifter, särskilda överföringar, över 100 000 registrerade). En arbetsgivare som använder GPS på sin egen personal ligger normalt under tröskeln.',
        nl: "Een algemene voorafgaande toestemming is niet nodig; inschrijving in het register van verwerkers is alleen vereist voor risicocategorieen (biometrische/genetische gegevens, bijzondere doorgiften, 100.000+ betrokkenen). Een werkgever die GPS bij eigen personeel gebruikt, blijft doorgaans onder de drempel.",
      },
      fonte: FONTE_PRIKAZ_94,
    },
    {
      voce: {
        it: 'Base = di norma il consenso (modello incentrato sul consenso, diverso dal GDPR)',
        en: "Legal basis = as a rule, consent (consent-centric model, different from the GDPR)",
        de: 'Rechtsgrundlage = in der Regel die Einwilligung (auf Einwilligung ausgerichtetes Modell, anders als die DSGVO)',
        fr: 'Base = en règle générale le consentement (modèle centré sur le consentement, différent du RGPD)',
        es: 'Base = por regla general el consentimiento (modelo centrado en el consentimiento, distinto del RGPD)',
        pt: "Base = em regra o consentimento (modelo centrado no consentimento, diferente do RGPD)",
        da: 'Grundlag = som hovedregel samtykke (samtykkebaseret model, anderledes end GDPR)',
        sv: 'Rättslig grund = som regel samtycke (samtyckescentrerad modell, annorlunda än GDPR)',
        nl: 'Grondslag = in de regel toestemming (op toestemming gericht model, anders dan de AVG)',
      },
      risposta: 'si',
      dettaglio: {
        it: "A differenza del GDPR, la base principale è il consenso del lavoratore, e serve un consenso per ciascuna finalità del trattamento.",
        en: "Unlike the GDPR, the main legal basis is the worker's consent, and a separate consent is needed for each purpose of the processing.",
        de: "Anders als bei der DSGVO ist die Hauptrechtsgrundlage die Einwilligung des Mitarbeiters, und es ist eine Einwilligung für jeden Zweck der Verarbeitung erforderlich.",
        fr: 'Contrairement au RGPD, la base principale est le consentement du salarié, et un consentement est requis pour chaque finalité du traitement.',
        es: "A diferencia del RGPD, la base principal es el consentimiento del trabajador, y se necesita un consentimiento para cada finalidad del tratamiento.",
        pt: "Ao contrário do RGPD, a base principal é o consentimento do trabalhador, e é necessário um consentimento para cada finalidade do tratamento.",
        da: 'I modsætning til GDPR er hovedgrundlaget medarbejderens samtykke, og der kræves et samtykke for hvert formål med behandlingen.',
        sv: 'Till skillnad från GDPR är den huvudsakliga rättsliga grunden den anställdes samtycke, och ett separat samtycke krävs för varje ändamål med behandlingen.',
        nl: "Anders dan bij de AVG is de belangrijkste grondslag de toestemming van de werknemer, en is voor elk doel van de verwerking toestemming nodig.",
      },
      fonte: FONTE_LEGGE_99Z,
    },
    {
      voce: {
        it: 'Niente trattamento oltre la finalità; consenso per ogni finalità',
        en: "No processing beyond the purpose; consent for each purpose",
        de: 'Keine Verarbeitung über den Zweck hinaus; Einwilligung für jeden Zweck',
        fr: 'Pas de traitement au-delà de la finalité ; consentement pour chaque finalité',
        es: 'Sin tratamiento más allá de la finalidad; consentimiento para cada finalidad',
        pt: "Sem tratamento para além da finalidade; consentimento para cada finalidade",
        da: 'Ingen behandling ud over formålet; samtykke for hvert formål',
        sv: 'Ingen behandling utöver ändamålet; samtycke för varje ändamål',
        nl: 'Geen verwerking buiten het doel; toestemming voor elk doel',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il trattamento va limitato alle finalità dichiarate, con un consenso separato per ciascuna; il titolare deve informare i lavoratori e cessare il trattamento quando viene meno la base.",
        en: "Processing must be limited to the declared purposes, with a separate consent for each; the controller must inform the workers and stop the processing when the legal basis no longer applies.",
        de: "Die Verarbeitung ist auf die angegebenen Zwecke zu beschränken, mit einer gesonderten Einwilligung für jeden Zweck; der Verantwortliche muss die Mitarbeiter informieren und die Verarbeitung beenden, wenn die Rechtsgrundlage entfällt.",
        fr: 'Le traitement doit être limité aux finalités déclarées, avec un consentement séparé pour chacune ; le responsable du traitement doit informer les salariés et cesser le traitement lorsque la base disparaît.',
        es: "El tratamiento debe limitarse a las finalidades declaradas, con un consentimiento separado para cada una; el responsable debe informar a los trabajadores y cesar el tratamiento cuando deja de existir la base.",
        pt: "O tratamento deve limitar-se às finalidades declaradas, com um consentimento separado para cada uma; o responsável pelo tratamento deve informar os trabalhadores e cessar o tratamento quando a base deixa de existir.",
        da: 'Behandlingen skal begrænses til de angivne formål, med et særskilt samtykke for hvert; den dataansvarlige skal informere medarbejderne og ophøre med behandlingen, når grundlaget bortfalder.',
        sv: 'Behandlingen ska begränsas till de angivna ändamålen, med ett separat samtycke för varje; den personuppgiftsansvarige måste informera de anställda och avbryta behandlingen när den rättsliga grunden inte längre gäller.',
        nl: "De verwerking moet beperkt blijven tot de aangegeven doeleinden, met een afzonderlijke toestemming voor elk; de verwerkingsverantwoordelijke moet de werknemers informeren en de verwerking staken wanneer de grondslag wegvalt.",
      },
      fonte: FONTE_LEGGE_99Z,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA)",
        en: "Impact assessment (DPIA)",
        de: 'Datenschutz-Folgenabschätzung (DSFA)',
        fr: 'Analyse d’impact (AIPD)',
        es: 'Evaluación de impacto (EIPD)',
        pt: "Avaliação de impacto (AIPD)",
        da: 'Konsekvensanalyse (DPIA)',
        sv: 'Konsekvensbedömning (DPIA)',
        nl: 'Effectbeoordeling (DPIA)',
      },
      risposta: 'no',
      dettaglio: {
        it: "La legge bielorussa non prevede una valutazione d'impatto in stile GDPR; prevede però l'obbligo di un responsabile della protezione dei dati e la notifica delle violazioni entro 3 giorni lavorativi.",
        en: "Belarusian law does not provide for a GDPR-style impact assessment; it does, however, require a data protection officer and notification of breaches within 3 working days.",
        de: "Das belarussische Recht sieht keine Folgenabschätzung nach Art der DSGVO vor; es verlangt jedoch einen Datenschutzbeauftragten und die Meldung von Verletzungen innerhalb von 3 Werktagen.",
        fr: 'Le droit biélorusse ne prévoit pas d’analyse d’impact de type RGPD ; il impose toutefois un délégué à la protection des données et la notification des violations dans un délai de 3 jours ouvrables.',
        es: "La ley bielorrusa no contempla una evaluación de impacto al estilo del RGPD; pero sí exige un delegado de protección de datos y la notificación de las violaciones en un plazo de 3 días hábiles.",
        pt: "A lei bielorrussa não prevê uma avaliação de impacto ao estilo do RGPD; prevê, contudo, a obrigação de um responsável pela proteção de dados e a notificação das violações no prazo de 3 dias úteis.",
        da: 'Belarusisk lov foreskriver ikke en konsekvensanalyse i GDPR-stil; den kræver dog en databeskyttelsesrådgiver og anmeldelse af brud inden for 3 arbejdsdage.',
        sv: 'Belarusisk lag föreskriver ingen konsekvensbedömning i GDPR-stil; den kräver däremot ett dataskyddsombud och anmälan av personuppgiftsincidenter inom 3 arbetsdagar.',
        nl: "De Belarussische wet voorziet niet in een effectbeoordeling in AVG-stijl; zij vereist echter wel een functionaris voor gegevensbescherming en de melding van inbreuken binnen 3 werkdagen.",
      },
      fonte: FONTE_LEGGE_99Z,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Raccogli il consenso separato e specifico del lavoratore per la geolocalizzazione.',
        en: "Collect the worker's separate and specific consent for geolocation.",
        de: 'Holen Sie die gesonderte und spezifische Einwilligung des Mitarbeiters zur Geolokalisierung ein.',
        fr: 'Recueillez le consentement séparé et spécifique du salarié pour la géolocalisation.',
        es: 'Recoge el consentimiento separado y específico del trabajador para la geolocalización.',
        pt: "Recolha o consentimento separado e específico do trabalhador para a geolocalização.",
        da: 'Indhent medarbejderens særskilte og specifikke samtykke til geolokalisering.',
        sv: 'Inhämta den anställdes separata och specifika samtycke till geolokalisering.',
        nl: 'Verzamel de afzonderlijke en specifieke toestemming van de werknemer voor geolocatie.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Informa in dettaglio (titolare, finalità, elenco dei dati, durata, soggetti che trattano, diritti).",
        en: "Provide detailed notice (controller, purposes, list of data, duration, parties who process the data, rights).",
        de: "Informieren Sie detailliert (Verantwortlicher, Zwecke, Liste der Daten, Dauer, verarbeitende Stellen, Rechte).",
        fr: 'Informez en détail (responsable du traitement, finalités, liste des données, durée, intervenants qui traitent les données, droits).',
        es: "Informa en detalle (responsable, finalidades, lista de datos, duración, sujetos que tratan los datos, derechos).",
        pt: "Informe de forma pormenorizada (responsável pelo tratamento, finalidades, lista dos dados, duração, entidades que tratam os dados, direitos).",
        da: 'Giv detaljeret information (dataansvarlig, formål, liste over oplysninger, varighed, parter der behandler oplysningerne, rettigheder).',
        sv: 'Ge detaljerad information (personuppgiftsansvarig, ändamål, förteckning över uppgifter, varaktighet, parter som behandlar uppgifterna, rättigheter).',
        nl: "Informeer in detail (verwerkingsverantwoordelijke, doeleinden, lijst van gegevens, duur, partijen die de gegevens verwerken, rechten).",
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Verifica se rientri nelle soglie di iscrizione al registro degli operatori (dati a rischio).",
        en: "Check whether you fall within the thresholds for registration in the register of operators (high-risk data).",
        de: "Prüfen Sie, ob Sie unter die Schwellen für die Eintragung in das Register der Betreiber fällen (risikoreiche Daten).",
        fr: 'Vérifiez si vous relevez des seuils d’inscription au registre des opérateurs (données à risque).',
        es: "Comprueba si entras dentro de los umbrales de inscripción en el registro de operadores (datos de riesgo).",
        pt: "Verifique se se enquadra nos limiares de inscrição no registo dos operadores (dados de risco).",
        da: 'Undersøg, om du falder inden for tærsklerne for indførelse i operatørregisteret (højrisikooplysninger).',
        sv: 'Kontrollera om du omfattas av tröskelvärdena för registrering i operatörsregistret (högriskuppgifter).',
        nl: "Ga na of u onder de drempels voor inschrijving in het register van verwerkers valt (risicogegevens).",
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Nomina un responsabile della protezione dei dati e predisponi la notifica delle violazioni entro 3 giorni.',
        en: "Appoint a data protection officer and set up the notification of breaches within 3 days.",
        de: 'Bestellen Sie einen Datenschutzbeauftragten und richten Sie die Meldung von Verletzungen innerhalb von 3 Tagen ein.',
        fr: 'Désignez un délégué à la protection des données et préparez la notification des violations dans un délai de 3 jours.',
        es: 'Nombra a un delegado de protección de datos y prepara la notificación de las violaciones en un plazo de 3 días.',
        pt: "Nomeie um responsável pela proteção de dados e prepare a notificação das violações no prazo de 3 dias.",
        da: 'Udpeg en databeskyttelsesrådgiver, og gør klar til anmeldelse af brud inden for 3 dage.',
        sv: 'Utse ett dataskyddsombud och inrätta anmälan av personuppgiftsincidenter inom 3 dagar.',
        nl: 'Benoem een functionaris voor gegevensbescherming en richt de melding van inbreuken binnen 3 dagen in.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Limita il trattamento alle finalità dichiarate e cessa quando viene meno la base.",
        en: "Limit the processing to the declared purposes and stop it when the legal basis no longer applies.",
        de: "Beschränken Sie die Verarbeitung auf die angegebenen Zwecke und beenden Sie sie, wenn die Rechtsgrundlage entfällt.",
        fr: 'Limitez le traitement aux finalités déclarées et cessez-le lorsque la base disparaît.',
        es: "Limita el tratamiento a las finalidades declaradas y cesa cuando deja de existir la base.",
        pt: "Limite o tratamento às finalidades declaradas e cesse-o quando a base deixar de existir.",
        da: 'Begræns behandlingen til de angivne formål, og ophør, når grundlaget bortfalder.',
        sv: 'Begränsa behandlingen till de angivna ändamålen och avbryt den när den rättsliga grunden inte längre gäller.',
        nl: "Beperk de verwerking tot de aangegeven doeleinden en staak deze wanneer de grondslag wegvalt.",
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'Se cambi sistema o software di monitoraggio, aggiorna e riconsegna l’informativa, e verifica se devi di nuovo informare o consultare i rappresentanti dei lavoratori, dove la legge lo prevede. Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: l’informativa consegnata prima non basta.',
        en: 'If you switch systems: when you change your monitoring system or software, update and re-issue the privacy notice, and check whether you must inform or consult the workers\' representatives again, where the law requires it. The provider (data processor), the data collected and the methods often change: the one provided earlier is not enough.',
        de: 'Bei Systemwechsel: Wenn Sie Ihr Überwachungssystem oder Ihre Software wechseln, aktualisieren Sie die Datenschutzinformation und händigen Sie sie erneut aus, und prüfen Sie, ob Sie die Arbeitnehmervertretung erneut informieren oder beteiligen müssen, wo das Gesetz es vorsieht. Anbieter (Auftragsverarbeiter), erhobene Daten und Modalitäten ändern sich oft: die zuvor ausgehändigte genügt nicht.',
        fr: 'En cas de changement de système : si vous changez de système ou de logiciel de surveillance, mettez à jour et remettez l’information, et vérifiez si vous devez de nouveau informer ou consulter les représentants du personnel, lorsque la loi le prévoit. Le fournisseur (sous-traitant), les données collectées et les modalités changent souvent : celle remise auparavant ne suffit pas.',
        es: 'Si cambias de sistema o software de monitorización, actualiza y vuelve a entregar la información, y comprueba si debes volver a informar o consultar a los representantes de los trabajadores, cuando la ley lo prevé. A menudo cambian el proveedor (encargado del tratamiento), los datos recogidos y las modalidades: la información entregada antes no basta.',
        pt: "Se mudar de sistema ou de software de monitorização, atualize e entregue de novo a informação, e verifique se tem de voltar a informar ou a consultar os representantes dos trabalhadores, onde a lei o preveja. Muitas vezes mudam o fornecedor (subcontratante), os dados recolhidos e as modalidades: a informação entregue antes não basta.",
        da: 'Hvis du skifter system eller overvågningssoftware, skal du opdatere og udlevere privatlivsoplysningerne igen og undersøge, om du på ny skal informere eller høre medarbejdernes repræsentanter, hvor loven kræver det. Ofte ændrer leverandøren (databehandleren), de indsamlede oplysninger og metoderne sig: de oplysninger, der blev udleveret tidligere, er ikke nok.',
        sv: 'Om du byter system: när du byter övervakningssystem eller programvara ska du uppdatera och dela ut integritetsinformationen på nytt, och kontrollera om du måste informera eller samråda med de anställdas företrädare igen, där lagen kräver det. Leverantören (personuppgiftsbiträdet), de insamlade uppgifterna och metoderna ändras ofta: den information som lämnades tidigare räcker inte.',
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
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
      fr: 'jusqu’à environ 200 unités de base (environ 2 600 euros), en plus de la possible responsabilité pénale',
      es: 'hasta unas 200 unidades base (alrededor de 2.600 euros), además de la posible responsabilidad penal',
      pt: "até cerca de 200 unidades de base (cerca de 2.600 euros), além da possível responsabilidade penal",
      da: 'op til ca. 200 basisenheder (ca. 2.600 euro), ud over et muligt strafansvar',
      sv: 'upp till cirka 200 basbelopp (omkring 2 600 euro), utöver eventuellt straffrättsligt ansvar',
      nl: 'tot ongeveer 200 basiseenheden (ongeveer 2.600 euro), naast de mogelijke strafrechtelijke aansprakelijkheid',
    },
    casoCitato: {
      it: "Non risulta una decisione bielorussa specifica pubblicata sul GPS sui dipendenti, e la trasparenza sull'applicazione è limitata. Le sanzioni amministrative massime per violazioni sui dati arrivano a circa 200 unità base (circa 2.600 euro), ma questo tetto vale per la diffusione illecita; per la raccolta o conservazione illecita si arriva a 50 unità base (da 4 a 100 se commessa da chi conosce i dati per lavoro), con possibile responsabilità penale nei casi più gravi.",
      en: "There is no specific, published Belarusian decision on GPS on employees, and transparency over enforcement is limited. The maximum administrative penalties for data violations reach about 200 base units (around 2,600 euros), but that ceiling applies to unlawful dissemination; unlawful collection or storage is punished with up to 50 base units (4 to 100 if committed by someone who knows the data through work), with possible criminal liability in the most serious cases.",
      de: "Eine spezifische, veröffentlichte belarussische Entscheidung zu GPS bei Mitarbeitern ist nicht ersichtlich, und die Transparenz über die Durchsetzung ist begrenzt. Die höchsten verwaltungsrechtlichen Sanktionen für Datenverstöße erreichen etwa 200 Basiseinheiten (rund 2.600 Euro), doch diese Obergrenze gilt für die unrechtmäßige Verbreitung; für unrechtmäßiges Erheben oder Speichern sind bis zu 50 Basiseinheiten vorgesehen (4 bis 100, wenn der Täter die Daten beruflich kennt), mit möglicher strafrechtlicher Haftung in den schwersten Fällen.",
      fr: 'Il n’existe pas de décision biélorusse spécifique et publiée sur le GPS appliquée aux salariés, et la transparence sur l’application des règles est limitée. Les sanctions administratives maximales pour les violations relatives aux données atteignent environ 200 unités de base (environ 2 600 euros), mais ce plafond vise la diffusion illicite ; la collecte ou la conservation illicite est punie jusqu’à 50 unités de base (de 4 à 100 si l’auteur connaît les données par son travail), avec une possible responsabilité pénale dans les cas les plus graves.',
      es: "No consta una decisión bielorrusa específica y publicada sobre el GPS aplicado a los empleados, y la transparencia sobre la aplicación es limitada. Las sanciones administrativas máximas por infracciones de datos llegan a unas 200 unidades base (alrededor de 2.600 euros), pero ese tope se aplica a la difusión ilícita; la recogida o conservación ilícita se castiga con hasta 50 unidades base (de 4 a 100 si la comete quien conoce los datos por su trabajo), con posible responsabilidad penal en los casos más graves.",
      pt: "Não consta nenhuma decisão bielorrussa específica publicada sobre o GPS aplicado aos trabalhadores, e a transparência na aplicação é limitada. As sanções administrativas máximas por violações em matéria de dados chegam a cerca de 200 unidades de base (cerca de 2.600 euros), mas este teto vale para a divulgação ilícita; para a recolha ou conservação ilícita chega-se a 50 unidades de base (de 4 a 100 se cometida por quem conhece os dados por razões profissionais), com possível responsabilidade penal nos casos mais graves.",
      da: 'Der er ikke offentliggjort nogen konkret belarusisk afgørelse om GPS på ansatte, og gennemsigtigheden om håndhævelsen er begrænset. De højeste administrative sanktioner for databrud når op på ca. 200 basisenheder (ca. 2.600 euro), men dette loft gælder for ulovlig udbredelse; for ulovlig indsamling eller opbevaring er sanktionen op til 50 basisenheder (fra 4 til 100, hvis den begås af en person, der kender oplysningerne gennem sit arbejde), med mulighed for strafansvar i de alvorligste tilfælde.',
      sv: 'Det finns inget specifikt, offentliggjort belarusiskt beslut om GPS på anställda, och insynen i tillsynen är begränsad. De högsta administrativa sanktionerna för överträdelser av uppgiftsreglerna uppgår till cirka 200 basbelopp (omkring 2 600 euro), men det taket gäller olaglig spridning; olaglig insamling eller lagring bestraffas med upp till 50 basbelopp (4 till 100 om den begås av någon som känner till uppgifterna genom arbetet), med möjligt straffrättsligt ansvar i de allvarligaste fallen.',
      nl: "Er is geen specifieke, gepubliceerde Belarussische beslissing over GPS bij werknemers bekend, en de transparantie over de handhaving is beperkt. De maximale bestuurlijke sancties voor gegevensinbreuken bedragen ongeveer 200 basiseenheden (ongeveer 2.600 euro), maar dat plafond geldt voor onrechtmatige verspreiding; onrechtmatig verzamelen of bewaren wordt bestraft met maximaal 50 basiseenheden (4 tot 100 als de dader de gegevens via zijn werk kent), met mogelijke strafrechtelijke aansprakelijkheid in de ernstigste gevallen.",
    },
    urlFonte: FONTE_SHVED.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_LEGGE_99Z,
    FONTE_PRIKAZ_94,
    FONTE_SHVED,
    FONTE_NPDPC,
    FONTE_GRATA,
    FONTE_DLA_PIPER,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
