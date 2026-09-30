/**
 * Scheda-paese Bulgaria per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Legge bulgara sulla protezione dei dati (ZZLD), art. 25и e 25д, guida del CPDP
 * sulla privacy sul luogo di lavoro, lista CPDP dei trattamenti che richiedono una
 * DPIA, parere CPDP sul caso LUKOIL e GDPR.
 *
 * La Bulgaria ha un'unica autorità' nazionale, il CPDP: nessuna ripartizione
 * regionale. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_ZZLD = {
  titolo:
    'Legge sulla protezione dei dati (ZZLD), testo consolidato sul sito del CPDP (art. 25д e 25и; ultima modifica ДВ 70/2024)',
  url: 'https://cpdp.bg/%D0%BF%D1%80%D0%B0%D0%B2%D0%BD%D0%B0-%D1%80%D0%B0%D0%BC%D0%BA%D0%B0-%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%BD%D0%B0/%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD-%D0%B7%D0%B0-%D0%B7%D0%B0%D1%89%D0%B8%D1%82%D0%B0-%D0%BD%D0%B0-%D0%BB%D0%B8%D1%87%D0%BD%D0%B8%D1%82%D0%B5-%D0%B4%D0%B0%D0%BD%D0%BD%D0%B8/',
};
const FONTE_CPDP_GUIDA = {
  titolo:
    'CPDP (Garante bulgaro), guida sulla privacy sul luogo di lavoro (2014, anteriore al GDPR), par. 3.5.2 sistemi GPS',
  url: 'https://cpdp.bg/wp-content/uploads/2023/12/Guidelines__Privacy_protection_in_the_workplace_BG.pdf',
};
const FONTE_CPDP_DPIA = {
  titolo: 'CPDP, lista dei trattamenti che richiedono una DPIA (art. 35.4)',
  url: 'https://cpdp.bg/%D0%BA%D0%B7%D0%BB%D0%B4-%D0%BF%D1%80%D0%B8%D0%B5-%D1%81%D0%BF%D0%B8%D1%81%D1%8A%D0%BA-%D0%BD%D0%B0-%D0%B2%D0%B8%D0%B4%D0%BE%D0%B2%D0%B5%D1%82%D0%B5-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8/',
};
const FONTE_CPDP_LUKOIL = {
  titolo:
    'CPDP, parere su LUKOIL (riuso della videosorveglianza per valutare i dipendenti)',
  url: 'https://cpdp.bg/%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%89%D0%B5-%D0%BD%D0%B0-%D0%BA%D0%B7%D0%BB%D0%B4-%D0%BE%D1%82%D0%BD%D0%BE%D1%81%D0%BD%D0%BE-%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD%D0%BE%D1%81%D1%8A%D0%BE%D0%B1-5/',
};
const FONTE_CPDP_SITO = {
  titolo: 'CPDP (Garante bulgaro), pagina ufficiale',
  url: 'https://cpdp.bg/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const bulgaria: SchedaPaese = {
  codiceISO: 'BG',
  slugCanonico: 'bulgaria',
  nome: 'Bulgaria',
  nomi: {
    it: 'Bulgaria',
    en: 'Bulgaria',
    'en-us': 'Bulgaria',
    'en-gb': 'Bulgaria',
    'en-au': 'Bulgaria',
    'en-ie': 'Bulgaria',
    'en-ca': 'Bulgaria',
    de: 'Bulgarien',
    nl: 'Bulgarije',
    fr: 'Bulgarie',
    es: 'Bulgaria',
    pt: 'Bulgária',
    da: 'Bulgarien',
    sv: 'Bulgarien',
    nb: 'Bulgaria',
    ru: 'Болгария',
  },
  bandiera: '🇧🇬',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'CPDP (Komisia za zashtita na lichnite danni)',
    portale: FONTE_CPDP_SITO.url,
    urlFonte: FONTE_CPDP_SITO.url,
    verificatoIl: '2026-09-30',
    note: {
      it: "La Bulgaria ha un'unica autorità nazionale, il CPDP; nessuna ripartizione regionale.",
      en: 'Bulgaria has a single national authority, the CPDP; there is no regional breakdown.',
      de: 'Bulgarien hat eine einzige nationale Behörde, die CPDP; es gibt keine regionale Aufteilung.',
      fr: 'La Bulgarie dispose d’une seule autorité nationale, la CPDP ; il n’y a pas de répartition régionale.',
      es: 'Bulgaria cuenta con una única autoridad nacional, la CPDP; no existe reparto regional.',
      nl: 'Bulgarije heeft een enkele nationale autoriteit, de CPDP; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: "Regole interne e informazione ai lavoratori sui sistemi di controllo dell'accesso, dell'orario e della disciplina (ZZLD art. 25и)",
        en: 'Internal rules and worker information on systems for access, time and discipline control (ZZLD art. 25i)',
        de: 'Interne Regeln und Information der Beschäftigten über Systeme zur Zugangs-, Zeit- und Disziplinkontrolle (ZZLD Art. 25i)',
        fr: 'Règles internes et information des travailleurs sur les systèmes de contrôle de l’accès, du temps et de la discipline (ZZLD art. 25i)',
        es: 'Reglas internas e información a los trabajadores sobre los sistemas de control de acceso, de la jornada y de la disciplina (ZZLD art. 25i)',
        nl: 'Interne regels en informatie aan werknemers over systemen voor toegangs-, tijd- en disciplinecontrole (ZZLD art. 25i)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore deve adottare regole e procedure interne quando introduce sistemi di controllo dell'accesso, dell'orario e della disciplina del lavoro, indicandone ambito, obblighi e metodi, e portarle a conoscenza dei lavoratori.",
        en: 'The employer must adopt internal rules and procedures when introducing systems for controlling access, working time and labour discipline, setting out their scope, obligations and methods, and bring them to the workers\' attention.',
        de: 'Der Arbeitgeber muss interne Regeln und Verfahren erlassen, wenn er Systeme zur Kontrolle des Zugangs, der Arbeitszeit und der Arbeitsdisziplin einführt, deren Umfang, Pflichten und Methoden festlegen und sie den Beschäftigten zur Kenntnis bringen.',
        fr: 'L’employeur doit adopter des règles et des procédures internes lorsqu’il introduit des systèmes de contrôle de l’accès, du temps de travail et de la discipline, en précisant leur portée, les obligations et les méthodes, et les porter à la connaissance des travailleurs.',
        es: 'El empleador debe adoptar reglas y procedimientos internos cuando introduce sistemas de control del acceso, del horario y de la disciplina laboral, indicando su alcance, obligaciones y métodos, y darlos a conocer a los trabajadores.',
        nl: 'De werkgever moet interne regels en procedures vaststellen wanneer hij systemen voor toegangs-, arbeidstijd- en disciplinecontrole invoert, met vermelding van de reikwijdte, verplichtingen en methoden, en deze ter kennis van de werknemers brengen.',
      },
      fonte: FONTE_ZZLD,
    },
    {
      voce: {
        it: 'Regole per il trattamento su larga scala e per il monitoraggio sistematico di zone accessibili al pubblico, inclusa la videosorveglianza (art. 25д)',
        en: 'Rules for large-scale processing and for systematic monitoring of publicly accessible areas, including video surveillance (art. 25d)',
        de: 'Regeln für die Verarbeitung in großem Umfang und für die systematische Überwachung öffentlich zugänglicher Bereiche, einschließlich Videoüberwachung (Art. 25d)',
        fr: 'Règles pour le traitement à grande échelle et pour la surveillance systématique de zones accessibles au public, y compris la vidéosurveillance (art. 25d)',
        es: 'Reglas para el tratamiento a gran escala y para la vigilancia sistemática de zonas accesibles al público, incluida la videovigilancia (art. 25d)',
        nl: 'Regels voor grootschalige verwerking en voor systematische monitoring van openbaar toegankelijke ruimten, met inbegrip van cameratoezicht (art. 25d)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Chi effettua trattamenti di dati personali su larga scala, o un monitoraggio sistematico su larga scala di zone accessibili al pubblico (inclusa la videosorveglianza), adotta regole con misure tecniche e organizzative adeguate; per le zone pubbliche le regole indicano anche basi giuridiche, finalità, ambito, mezzi, conservazione e cancellazione, diritto di accesso e informazione al pubblico. Per il GPS sui lavoratori conta quindi solo il primo caso, cioè un trattamento su larga scala.",
        en: 'Whoever carries out large-scale processing of personal data, or large-scale systematic monitoring of publicly accessible areas (including video surveillance), adopts rules with appropriate technical and organisational measures; for public areas the rules also state legal bases, purposes, scope, means, retention and deletion, right of access and public information. For GPS on workers only the first case matters, that is, large-scale processing.',
        de: 'Wer personenbezogene Daten in großem Umfang verarbeitet oder öffentlich zugängliche Bereiche systematisch und in großem Umfang überwacht (einschließlich Videoüberwachung), erlässt Regeln mit geeigneten technischen und organisatorischen Maßnahmen; für öffentliche Bereiche nennen die Regeln zusätzlich Rechtsgrundlagen, Zwecke, Umfang, Mittel, Speicherung und Löschung, Auskunftsrecht und Information der Öffentlichkeit. Für GPS bei Beschäftigten zählt daher nur der erste Fall, also eine Verarbeitung in großem Umfang.',
        fr: 'Celui qui effectue un traitement de données personnelles à grande échelle, ou une surveillance systématique à grande échelle de zones accessibles au public (y compris la vidéosurveillance), adopte des règles comportant des mesures techniques et organisationnelles appropriées ; pour les zones publiques, les règles indiquent aussi les bases juridiques, les finalités, la portée, les moyens, la conservation et l’effacement, le droit d’accès et l’information du public. Pour le GPS sur les travailleurs, seul le premier cas compte, c’est-à-dire un traitement à grande échelle.',
        es: 'Quien realiza un tratamiento de datos personales a gran escala, o una vigilancia sistemática a gran escala de zonas accesibles al público (incluida la videovigilancia), adopta reglas con medidas técnicas y organizativas adecuadas; para las zonas públicas las reglas indican además bases jurídicas, finalidades, alcance, medios, conservación y supresión, derecho de acceso e información al público. Para el GPS sobre trabajadores solo cuenta el primer caso, es decir, un tratamiento a gran escala.',
        nl: 'Wie persoonsgegevens op grote schaal verwerkt, of openbaar toegankelijke ruimten systematisch en op grote schaal monitort (inclusief cameratoezicht), stelt regels vast met passende technische en organisatorische maatregelen; voor openbare ruimten vermelden de regels ook rechtsgronden, doeleinden, reikwijdte, middelen, bewaring en wissing, recht op inzage en voorlichting van het publiek. Voor GPS bij werknemers telt dus alleen het eerste geval, namelijk een verwerking op grote schaal.',
      },
      fonte: FONTE_ZZLD,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: 'Autorisation préalable d’une autorité avant l’installation',
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: 'Non serve un\'autorizzazione preventiva del CPDP; il titolare adotta da sé le regole interne e svolge la DPIA quando richiesta.',
        en: 'No prior authorisation from the CPDP is required; the controller adopts the internal rules itself and carries out the DPIA when required.',
        de: 'Eine vorherige Genehmigung der CPDP ist nicht erforderlich; der Verantwortliche erlässt die internen Regeln selbst und führt die DSFA durch, wenn sie erforderlich ist.',
        fr: 'Aucune autorisation préalable de la CPDP n’est requise ; le responsable du traitement adopte lui-même les règles internes et réalise l’AIPD lorsqu’elle est requise.',
        es: 'No se necesita autorización previa del CPDP; el responsable adopta por si mismo las reglas internas y realiza la EIPD cuando es necesaria.',
        nl: 'Er is geen voorafgaande toestemming van de CPDP vereist; de verwerkingsverantwoordelijke stelt zelf de interne regels vast en voert de DPIA uit wanneer dat vereist is.',
      },
      fonte: FONTE_CPDP_DPIA,
    },
    {
      voce: {
        it: "Base = interesse legittimo (non il consenso, per lo squilibrio di potere); proporzionalità; niente tracciamento durante l'uso privato del veicolo",
        en: 'Basis = legitimate interest (not consent, due to the imbalance of power); proportionality; no tracking during private use of the vehicle',
        de: 'Grundlage = berechtigtes Interesse (nicht die Einwilligung, wegen des Machtungleichgewichts); Verhältnismäßigkeit; keine Ortung während der privaten Nutzung des Fahrzeugs',
        fr: 'Base = intérêt légitime (non le consentement, en raison du déséquilibre de pouvoir) ; proportionnalité ; pas de suivi pendant l’usage privé du véhicule',
        es: 'Base = interés legítimo (no el consentimiento, por el desequilibrio de poder); proporcionalidad; sin rastreo durante el uso privado del vehículo',
        nl: 'Grondslag = gerechtvaardigd belang (niet de toestemming, vanwege de machtsongelijkheid); evenredigheid; geen tracking tijdens privegebruik van het voertuig',
      },
      risposta: 'si',
      dettaglio: {
        it: "Nel parere del 24 novembre 2023 (caso LUKOIL) il CPDP ritiene il consenso inapplicabile come base nel rapporto di lavoro; resta di regola l'interesse legittimo (art. 6, par. 1, lett. f GDPR), con trattamento proporzionato. La guida del CPDP sui sistemi GPS dei veicoli aziendali (del 2014, anteriore al GDPR) dice che il datore può installarli senza il consenso del dipendente solo quando lo richiede la natura del lavoro o misure di precauzione, deve informare il conducente, disciplinarli con regole interne e trattare i dati solo per gli scopi fissati; per l'uso privato del veicolo non può usare dispositivi di tracciamento, salvo dimostri una necessità giuridica (per esempio il furto).",
        en: 'In its opinion of 24 November 2023 (LUKOIL case) the CPDP holds that consent is not an applicable basis in the employment relationship; the usual basis remains legitimate interest (art. 6(1)(f) GDPR), with proportionate processing. The CPDP guide on GPS systems in company vehicles (dated 2014, before the GDPR) says the employer may install them without the employee\'s consent only when the nature of the work or precautionary measures require it, must inform the driver, regulate them with internal rules and process the data only for the stated purposes; during private use of the vehicle the employer may not use tracking devices unless it proves a legal need (for example theft).',
        de: 'In der Stellungnahme vom 24. November 2023 (Fall LUKOIL) hält die CPDP die Einwilligung im Arbeitsverhältnis für keine anwendbare Grundlage; üblicherweise bleibt das berechtigte Interesse (Art. 6 Abs. 1 Buchst. f DSGVO) mit verhältnismäßiger Verarbeitung. Der CPDP-Leitfaden zu GPS-Systemen in Firmenfahrzeugen (von 2014, vor der DSGVO) besagt, dass der Arbeitgeber sie ohne Einwilligung des Beschäftigten nur installieren darf, wenn die Art der Arbeit oder Vorsichtsmaßnahmen dies erfordern, den Fahrer informieren, sie durch interne Regeln regeln und die Daten nur für die festgelegten Zwecke verarbeiten muss; bei privater Nutzung des Fahrzeugs darf er keine Ortungsgeräte einsetzen, es sei denn, er weist eine rechtliche Notwendigkeit nach (zum Beispiel Diebstahl).',
        fr: 'Dans son avis du 24 novembre 2023 (affaire LUKOIL), la CPDP considère que le consentement n’est pas une base applicable dans la relation de travail ; reste en principe l’intérêt légitime (art. 6, par. 1, point f) du RGPD), avec un traitement proportionné. Le guide de la CPDP sur les systèmes GPS des véhicules de l’entreprise (de 2014, antérieur au RGPD) indique que l’employeur ne peut les installer sans le consentement du salarié que lorsque la nature du travail ou des mesures de précaution l’exigent, qu’il doit informer le conducteur, les encadrer par des règles internes et ne traiter les données que pour les finalités fixées ; pendant l’usage privé du véhicule, il ne peut pas utiliser de dispositifs de suivi, sauf à prouver une nécessité juridique (par exemple le vol).',
        es: 'En su dictamen de 24 de noviembre de 2023 (caso LUKOIL), el CPDP considera que el consentimiento no es una base aplicable en la relación laboral; de ordinario queda el interés legítimo (art. 6, apdo. 1, letra f RGPD), con un tratamiento proporcionado. La guía del CPDP sobre los sistemas GPS de los vehículos de empresa (de 2014, anterior al RGPD) indica que el empleador solo puede instalarlos sin el consentimiento del empleado cuando lo exija la naturaleza del trabajo o medidas de precaución, debe informar al conductor, regularlos con normas internas y tratar los datos solo para las finalidades fijadas; durante el uso privado del vehículo no puede usar dispositivos de rastreo, salvo que pruebe una necesidad jurídica (por ejemplo el robo).',
        nl: 'In zijn advies van 24 november 2023 (zaak LUKOIL) acht de CPDP toestemming in de arbeidsrelatie geen toepasbare grondslag; in de regel blijft het gerechtvaardigd belang (art. 6 lid 1 onder f AVG) over, met evenredige verwerking. De CPDP-gids over GPS-systemen in bedrijfsvoertuigen (uit 2014, van vóór de AVG) stelt dat de werkgever ze alleen zonder toestemming van de werknemer mag installeren wanneer de aard van het werk of voorzorgsmaatregelen dat vereisen, de bestuurder moet informeren, ze in interne regels moet vastleggen en de gegevens alleen mag verwerken voor de vastgelegde doeleinden; tijdens privégebruik van het voertuig mag hij geen trackingapparatuur gebruiken, tenzij hij een juridische noodzaak aantoont (bijvoorbeeld diefstal).',
      },
      fonte: FONTE_CPDP_GUIDA,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il trattamento dei dati di localizzazione con profilazione o per il monitoraggio sistematico",
        en: 'Impact assessment (DPIA) for processing location data with profiling or for systematic monitoring',
        de: 'Datenschutz-Folgenabschätzung (DSFA) für die Verarbeitung von Standortdaten mit Profiling oder für die systematische Überwachung',
        fr: 'Analyse d’impact (AIPD) pour le traitement des données de localisation avec profilage ou pour la surveillance systématique',
        es: 'Evaluación de impacto (EIPD) para el tratamiento de datos de localización con elaboración de perfiles o para la vigilancia sistemática',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) voor de verwerking van locatiegegevens met profilering of voor systematische monitoring',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista CPDP (13 febbraio 2019) include il trattamento dei dati di localizzazione a fini di profilazione con effetti giuridici o significativi. La lista non è esaustiva: il CPDP ricorda che la valutazione d'impatto va fatta ogni volta che il trattamento può comportare un rischio elevato (art. 35, par. 1 GDPR), e il monitoraggio sistematico dei dipendenti è di regola un trattamento a rischio elevato secondo le linee guida WP248 su cui la lista si basa.",
        en: 'The CPDP list (13 February 2019) includes processing of location data for profiling with legal or similarly significant effects. The list is not exhaustive: the CPDP reminds that an impact assessment is needed whenever the processing may cause a high risk (art. 35(1) GDPR), and systematic monitoring of employees is normally a high-risk processing under the WP248 guidelines on which the list is based.',
        de: 'Die CPDP-Liste (13. Februar 2019) umfasst die Verarbeitung von Standortdaten zu Profiling-Zwecken mit rechtlichen oder ähnlich erheblichen Auswirkungen. Die Liste ist nicht abschließend: die CPDP erinnert daran, dass eine Folgenabschätzung immer erforderlich ist, wenn die Verarbeitung ein hohes Risiko mit sich bringen kann (Art. 35 Abs. 1 DSGVO), und die systematische Überwachung von Beschäftigten ist nach den WP248-Leitlinien, auf denen die Liste beruht, in der Regel eine Verarbeitung mit hohem Risiko.',
        fr: 'La liste de la CPDP (13 février 2019) inclut le traitement de données de localisation à des fins de profilage produisant des effets juridiques ou similaires. La liste n’est pas exhaustive : la CPDP rappelle qu’une analyse d’impact est nécessaire chaque fois que le traitement peut engendrer un risque élevé (art. 35, par. 1 RGPD), et la surveillance systématique des salariés est en principe un traitement à risque élevé selon les lignes directrices WP248 sur lesquelles la liste repose.',
        es: 'La lista del CPDP (13 de febrero de 2019) incluye el tratamiento de datos de localización con fines de elaboración de perfiles con efectos jurídicos o similares. La lista no es exhaustiva: el CPDP recuerda que la evaluación de impacto es necesaria siempre que el tratamiento pueda entrañar un alto riesgo (art. 35, apdo. 1 RGPD), y la vigilancia sistemática de los empleados es por lo general un tratamiento de alto riesgo según las directrices WP248 en las que se basa la lista.',
        nl: 'De CPDP-lijst (13 februari 2019) omvat de verwerking van locatiegegevens voor profilering met rechtsgevolgen of vergelijkbaar aanzienlijke gevolgen. De lijst is niet uitputtend: de CPDP wijst erop dat een effectbeoordeling nodig is telkens wanneer de verwerking een hoog risico kan inhouden (art. 35 lid 1 AVG), en de systematische monitoring van werknemers is volgens de WP248-richtsnoeren waarop de lijst berust doorgaans een verwerking met hoog risico.',
      },
      fonte: FONTE_CPDP_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Adotta regole interne sui sistemi di controllo e portale a conoscenza dei lavoratori (art. 25и).',
        en: 'Adopt internal rules on the control systems and bring them to the workers\' attention (art. 25i).',
        de: 'Erlassen Sie interne Regeln zu den Kontrollsystemen und bringen Sie sie den Beschäftigten zur Kenntnis (Art. 25i).',
        fr: 'Adoptez des règles internes sur les systèmes de contrôle et portez-les à la connaissance des travailleurs (art. 25i).',
        es: 'Adopte reglas internas sobre los sistemas de control y deles a conocer a los trabajadores (art. 25i).',
        nl: 'Stel interne regels over de controlesystemen vast en breng deze ter kennis van de werknemers (art. 25i).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Individua una base giuridica valida (interesse legittimo, non il consenso) e documenta la proporzionalità.',
        en: 'Identify a valid legal basis (legitimate interest, not consent) and document the proportionality.',
        de: 'Ermitteln Sie eine gültige Rechtsgrundlage (berechtigtes Interesse, nicht die Einwilligung) und dokumentieren Sie die Verhältnismäßigkeit.',
        fr: 'Identifiez une base juridique valable (intérêt légitime, non le consentement) et documentez la proportionnalité.',
        es: 'Identifique una base jurídica valida (interés legítimo, no el consentimiento) y documente la proporcionalidad.',
        nl: 'Bepaal een geldige rechtsgrond (gerechtvaardigd belang, niet de toestemming) en documenteer de evenredigheid.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio sistematico o i dati di localizzazione.",
        en: 'Carry out the impact assessment (DPIA) for systematic monitoring or location data.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) für die systematische Überwachung oder Standortdaten durch.',
        fr: 'Réalisez l’analyse d’impact (AIPD) pour la surveillance systématique ou les données de localisation.',
        es: 'Realice la evaluación de impacto (EIPD) para la vigilancia sistemática o los datos de localización.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor systematische monitoring of locatiegegevens.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Informa i lavoratori prima dell\'attivazione (art. 13 GDPR).',
        en: 'Inform the workers before activation (art. 13 GDPR).',
        de: 'Informieren Sie die Beschäftigten vor der Aktivierung (Art. 13 DSGVO).',
        fr: 'Informez les travailleurs avant l’activation (art. 13 RGPD).',
        es: 'Informe a los trabajadores antes de la activación (art. 13 RGPD).',
        nl: 'Informeer de werknemers voor de activering (art. 13 AVG).',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Configura il sistema: niente tracciamento durante l'uso privato del veicolo, solo per le finalità dichiarate.",
        en: 'Configure the system: no tracking during private use of the vehicle, only for the stated purposes.',
        de: 'Konfigurieren Sie das System: keine Ortung während der privaten Nutzung des Fahrzeugs, nur für die angegebenen Zwecke.',
        fr: 'Configurez le système : pas de suivi pendant l’usage privé du véhicule, uniquement pour les finalités déclarées.',
        es: 'Configure el sistema: sin rastreo durante el uso privado del vehículo, solo para las finalidades declaradas.',
        nl: 'Configureer het systeem: geen tracking tijdens privegebruik van het voertuig, uitsluitend voor de aangegeven doeleinden.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'Se cambi sistema o software di monitoraggio, aggiorna e riconsegna l’informativa, e verifica se devi di nuovo informare o consultare i rappresentanti dei lavoratori, dove la legge lo prevede. Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: l’informativa consegnata prima non basta.',
        en: 'If you switch systems: when you change your monitoring system or software, update and re-issue the privacy notice, and check whether you must inform or consult the workers\' representatives again, where the law requires it. The provider (data processor), the data collected and the methods often change: the one provided earlier is not enough.',
        de: 'Bei Systemwechsel: Wenn Sie Ihr Überwachungssystem oder Ihre Software wechseln, aktualisieren Sie die Datenschutzinformation und händigen Sie sie erneut aus, und prüfen Sie, ob Sie die Arbeitnehmervertretung erneut informieren oder beteiligen müssen, wo das Gesetz es vorsieht. Anbieter (Auftragsverarbeiter), erhobene Daten und Modalitäten ändern sich oft: die zuvor ausgehändigte genügt nicht.',
        fr: 'En cas de changement de système : si vous changez de système ou de logiciel de surveillance, mettez à jour et remettez l’information, et vérifiez si vous devez de nouveau informer ou consulter les représentants du personnel, lorsque la loi le prévoit. Le fournisseur (sous-traitant), les données collectées et les modalités changent souvent : celle remise auparavant ne suffit pas.',
        es: 'En caso de cambio de sistema: si cambias de sistema o software de monitorización, actualiza y vuelve a entregar la información, y comprueba si debes volver a informar o consultar a los representantes de los trabajadores, cuando la ley lo prevé. A menudo cambian el proveedor (encargado del tratamiento), los datos recogidos y las modalidades: la entregada antes no basta.',
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'CPDP',
      portale: FONTE_CPDP_SITO.url,
      urlFonte: FONTE_CPDP_SITO.url,
      verificatoIl: '2026-09-30',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino a 20 milioni di euro o 4% del fatturato (GDPR)',
      en: 'up to 20 million euro or 4% of turnover (GDPR)',
      de: 'bis zu 20 Millionen Euro oder 4% des Umsatzes (DSGVO)',
      fr: 'jusqu’à 20 millions d’euros ou 4 % du chiffre d’affaires (RGPD)',
      es: 'hasta 20 millones de euros o el 4% del volumen de negocio (RGPD)',
      nl: 'tot 20 miljoen euro of 4% van de omzet (AVG)',
    },
    casoCitato: {
      it: 'Non risulta una multa del CPDP specifica pubblicata per il GPS sui dipendenti. In un parere del 24 novembre 2023 il CPDP ha ritenuto inammissibile il riuso delle registrazioni di videosorveglianza per valutare il rendimento dei dipendenti di LUKOIL Bulgaria (riuso incompatibile, art. 6 par. 4 GDPR), senza multa. Il rischio sanzionatorio resta quello generale del GDPR (art. 83).',
      en: 'There is no specific, published CPDP fine for GPS on employees. In an opinion of 24 November 2023, the CPDP held that the reuse of video surveillance recordings to assess the performance of LUKOIL Bulgaria employees was inadmissible (incompatible reuse, art. 6 para. 4 GDPR), without a fine. The sanction risk remains the general one under the GDPR (art. 83).',
      de: 'Es gibt keine spezifische, veröffentlichte Geldbuße der CPDP für GPS bei Beschäftigten. In einer Stellungnahme vom 24. November 2023 hielt die CPDP die Weiterverwendung von Videoüberwachungsaufzeichnungen zur Bewertung der Leistung von Beschäftigten von LUKOIL Bulgarien für unzulässig (unvereinbare Weiterverwendung, Art. 6 Abs. 4 DSGVO), ohne Geldbuße. Das Sanktionsrisiko bleibt das allgemeine der DSGVO (Art. 83).',
      fr: 'Il n’existe pas d’amende spécifique et publiée de la CPDP pour le GPS sur les salariés. Dans un avis du 24 novembre 2023, la CPDP a estimé inadmissible la réutilisation des enregistrements de vidéosurveillance pour évaluer le rendement des salariés de LUKOIL Bulgarie (réutilisation incompatible, art. 6 par. 4 RGPD), sans amende. Le risque de sanction reste celui, général, du RGPD (art. 83).',
      es: 'No consta una multa especifica y publicada del CPDP por el GPS sobre los empleados. En un dictamen del 24 de noviembre de 2023, el CPDP consideró inadmisible la reutilización de las grabaciones de videovigilancia para evaluar el rendimiento de los empleados de LUKOIL Bulgaria (reutilización incompatible, art. 6 ap. 4 RGPD), sin multa. El riesgo sancionador sigue siendo el general del RGPD (art. 83).',
      nl: 'Er is geen specifieke, gepubliceerde boete van de CPDP voor gps bij werknemers. In een advies van 24 november 2023 achtte de CPDP het hergebruik van cameratoezichtopnamen om de prestaties van werknemers van LUKOIL Bulgarije te beoordelen ontoelaatbaar (onverenigbaar hergebruik, art. 6 lid 4 AVG), zonder boete. Het sanctierisico blijft het algemene risico van de AVG (art. 83).',
    },
    urlFonte: FONTE_CPDP_LUKOIL.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_ZZLD,
    FONTE_CPDP_GUIDA,
    FONTE_CPDP_DPIA,
    FONTE_CPDP_LUKOIL,
    FONTE_CPDP_SITO,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
