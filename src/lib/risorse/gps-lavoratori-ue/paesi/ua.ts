/**
 * Scheda-paese Ucraina per la risorsa "GPS sui lavoratori in UE".
 *
 * ATTENZIONE: l'Ucraina NON e' uno Stato membro dell'UE (e' un paese candidato)
 * e NON applica il GDPR. La disciplina vigente e' la Legge "Sulla protezione dei
 * dati personali" n. 2297-VI del 2010, fortemente incentrata sul consenso. Una
 * riforma di allineamento al GDPR (disegno di legge 8153) e' in attesa ma NON e'
 * in vigore. Va inoltre tenuto presente il contesto di guerra, che rende
 * l'applicazione della normativa limitata e irregolare.
 *
 * Contenuti basati su fonti verificate e citate nella sezione "Fonti": Legge
 * 2297-VI, pagina del Difensore civico (Garante) ucraino, scheda ICLG sulla
 * protezione dei dati in Ucraina e GDPR come riferimento comparativo. Nessun
 * numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti citate.
const FONTE_LEGGE_2297 = {
  titolo:
    "Legge dell'Ucraina n. 2297-VI sulla protezione dei dati personali (2010)",
  url: 'https://zakon.rada.gov.ua/laws/show/en/2297-17',
};
const FONTE_OMBUDSMAN = {
  titolo: 'Difensore civico (Garante ucraino), protezione dei dati personali',
  url: 'https://ombudsman.gov.ua/en/zahist-personalnih-danih',
};
const FONTE_ICLG = {
  titolo:
    'ICLG, protezione dei dati in Ucraina (basi giuridiche, DPIA)',
  url: 'https://iclg.com/practice-areas/data-protection-laws-and-regulations/ukraine/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) - riferimento comparativo',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const ucraina: SchedaPaese = {
  codiceISO: 'UA',
  slugCanonico: 'ucraina',
  nome: 'Ucraina',
  nomi: {
    it: 'Ucraina',
    en: 'Ukraine',
    'en-us': 'Ukraine',
    'en-gb': 'Ukraine',
    'en-au': 'Ukraine',
    'en-ie': 'Ukraine',
    'en-ca': 'Ukraine',
    de: 'Ukraine',
    nl: 'Oekraïne',
    fr: 'Ukraine',
    es: 'Ucrania',
    pt: 'Ucrânia',
    da: 'Ukraine',
    sv: 'Ukraina',
    nb: 'Ukraina',
    ru: 'Украина',
  },
  bandiera: '🇺🇦',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Difensore civico del Parlamento ucraino (Garante per la protezione dei dati)',
    portale: FONTE_OMBUDSMAN.url,
    urlFonte: FONTE_OMBUDSMAN.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "L'Ucraina e' un paese candidato, fuori dall'UE, e non applica il GDPR. Vale la Legge 2297-VI del 2010, consent-centric; una riforma allineata al GDPR e' in attesa. Autorita': il Difensore civico (Ombudsman). Contesto di guerra: l'applicazione e' limitata e irregolare.",
      en: 'Ukraine is a candidate country, outside the EU, and does not apply the GDPR. Law 2297-VI of 2010 applies, and it is consent-centric; a reform aligned with the GDPR is pending. The supervisory authority is the Ombudsman. War context: enforcement is limited and irregular.',
      de: 'Die Ukraine ist ein Beitrittskandidat, liegt ausserhalb der EU und wendet die DSGVO nicht an. Es gilt das Gesetz 2297-VI von 2010, das stark auf der Einwilligung beruht; eine an die DSGVO angeglichene Reform steht noch aus. Aufsichtsbehoerde ist der Ombudsmann (Buergerbeauftragte). Kriegskontext: Der Vollzug ist begrenzt und unregelmaessig.',
      fr: "L'Ukraine est un pays candidat, hors de l'UE, et n'applique pas le RGPD. C'est la loi 2297-VI de 2010 qui s'applique, fortement axee sur le consentement ; une reforme alignee sur le RGPD est en attente. L'autorite est le Defenseur des droits (Ombudsman). Contexte de guerre : l'application est limitee et irreguliere.",
      es: 'Ucrania es un pais candidato, fuera de la UE, y no aplica el RGPD. Rige la Ley 2297-VI de 2010, centrada en el consentimiento; una reforma alineada con el RGPD esta pendiente. La autoridad es el Defensor del Pueblo (Ombudsman). Contexto de guerra: la aplicacion es limitada e irregular.',
      nl: 'Oekraine is een kandidaat-lidstaat, buiten de EU, en past de AVG niet toe. De wet 2297-VI van 2010 geldt en is sterk op toestemming gericht; een aan de AVG aangepaste hervorming is in afwachting. De autoriteit is de Ombudsman. Oorlogscontext: de handhaving is beperkt en onregelmatig.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Base giuridica valida (art. 11) e informazione preventiva ai lavoratori',
        en: 'Valid legal basis (art. 11) and prior information to workers',
        de: 'Gueltige Rechtsgrundlage (Art. 11) und vorherige Information der Beschaeftigten',
        fr: 'Base juridique valable (art. 11) et information prealable des travailleurs',
        es: 'Base juridica valida (art. 11) e informacion previa a los trabajadores',
        nl: 'Geldige rechtsgrondslag (art. 11) en voorafgaande informatie aan werknemers',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il trattamento dei dati dei lavoratori (incluso il GPS) richiede una delle sei basi dell'art. 11 della Legge 2297-VI; i lavoratori vanno informati su titolare, dati, finalita', diritti e destinatari, alla raccolta o entro 30 giorni lavorativi.",
        en: 'Processing of workers data (including GPS) requires one of the six legal bases under art. 11 of Law 2297-VI; workers must be informed about the controller, the data, the purposes, their rights and the recipients, at the time of collection or within 30 working days.',
        de: 'Die Verarbeitung von Beschaeftigtendaten (einschliesslich GPS) erfordert eine der sechs Rechtsgrundlagen nach Art. 11 des Gesetzes 2297-VI; die Beschaeftigten sind ueber den Verantwortlichen, die Daten, die Zwecke, ihre Rechte und die Empfaenger zu informieren, bei der Erhebung oder innerhalb von 30 Arbeitstagen.',
        fr: "Le traitement des donnees des travailleurs (y compris le GPS) requiert l'une des six bases de l'art. 11 de la loi 2297-VI ; les travailleurs doivent etre informes sur le responsable, les donnees, les finalites, leurs droits et les destinataires, lors de la collecte ou dans un delai de 30 jours ouvrables.",
        es: 'El tratamiento de los datos de los trabajadores (incluido el GPS) requiere una de las seis bases del art. 11 de la Ley 2297-VI; se debe informar a los trabajadores sobre el responsable, los datos, las finalidades, sus derechos y los destinatarios, en el momento de la recogida o dentro de los 30 dias laborables.',
        nl: 'De verwerking van werknemersgegevens (waaronder GPS) vereist een van de zes grondslagen van art. 11 van Wet 2297-VI; werknemers moeten worden geinformeerd over de verwerkingsverantwoordelijke, de gegevens, de doeleinden, hun rechten en de ontvangers, bij de verzameling of binnen 30 werkdagen.',
      },
      fonte: FONTE_LEGGE_2297,
    },
    {
      voce: {
        it: "Autorizzazione o registrazione preventiva di un'autorita' prima di installare",
        en: 'Prior authorisation or registration with an authority before installing',
        de: 'Vorherige Genehmigung oder Registrierung bei einer Behoerde vor der Installation',
        fr: "Autorisation ou enregistrement prealable aupres d'une autorite avant l'installation",
        es: 'Autorizacion o registro previo ante una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming of registratie bij een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "La registrazione obbligatoria delle banche dati e' stata abolita dal 1 gennaio 2014; la notifica dei trattamenti a rischio non si applica ai dati del rapporto di lavoro (esenti).",
        en: 'The mandatory registration of databases was abolished as of 1 January 2014; the notification of high-risk processing does not apply to employment relationship data (which are exempt).',
        de: 'Die Pflicht zur Registrierung von Datenbanken wurde zum 1. Januar 2014 abgeschafft; die Meldung risikobehafteter Verarbeitungen gilt nicht fuer Daten des Arbeitsverhaeltnisses (diese sind ausgenommen).',
        fr: "L'enregistrement obligatoire des bases de donnees a ete supprime au 1er janvier 2014 ; la notification des traitements a risque ne s'applique pas aux donnees de la relation de travail (qui en sont exemptees).",
        es: 'El registro obligatorio de las bases de datos fue abolido a partir del 1 de enero de 2014; la notificacion de los tratamientos de riesgo no se aplica a los datos de la relacion laboral (que estan exentos).',
        nl: 'De verplichte registratie van databanken is per 1 januari 2014 afgeschaft; de melding van risicovolle verwerkingen geldt niet voor gegevens uit de arbeidsverhouding (deze zijn vrijgesteld).',
      },
      fonte: FONTE_LEGGE_2297,
    },
    {
      voce: {
        it: 'Base = di norma il consenso documentato del lavoratore',
        en: 'Legal basis = as a rule the documented consent of the worker',
        de: 'Rechtsgrundlage = in der Regel die dokumentierte Einwilligung des Beschaeftigten',
        fr: 'Base = en regle generale le consentement documente du travailleur',
        es: 'Base = por regla general el consentimiento documentado del trabajador',
        nl: 'Grondslag = in de regel de gedocumenteerde toestemming van de werknemer',
      },
      risposta: 'si',
      dettaglio: {
        it: "A differenza del GDPR, la legge ucraina si basa molto sul consenso come base principale; per il GPS conviene informare in anticipo e documentare il consenso, oltre a definire una finalita' scritta.",
        en: 'Unlike the GDPR, Ukrainian law relies heavily on consent as the main basis; for GPS it is advisable to inform in advance and document the consent, as well as to set out a written purpose.',
        de: 'Anders als die DSGVO stuetzt sich das ukrainische Recht stark auf die Einwilligung als wichtigste Grundlage; fuer GPS empfiehlt es sich, vorab zu informieren und die Einwilligung zu dokumentieren sowie einen schriftlichen Zweck festzulegen.',
        fr: "Contrairement au RGPD, le droit ukrainien repose largement sur le consentement comme base principale ; pour le GPS, il convient d'informer a l'avance et de documenter le consentement, ainsi que de definir une finalite ecrite.",
        es: 'A diferencia del RGPD, la ley ucraniana se basa mucho en el consentimiento como base principal; para el GPS conviene informar con antelacion y documentar el consentimiento, ademas de definir una finalidad por escrito.',
        nl: 'Anders dan de AVG steunt de Oekraiense wet sterk op toestemming als belangrijkste grondslag; voor GPS is het raadzaam vooraf te informeren en de toestemming te documenteren, en daarnaast een schriftelijk doel vast te leggen.',
      },
      fonte: FONTE_LEGGE_2297,
    },
    {
      voce: {
        it: 'Trattamento limitato alla finalita\' dichiarata (limitazione della finalita\')',
        en: 'Processing limited to the stated purpose (purpose limitation)',
        de: 'Auf den angegebenen Zweck beschraenkte Verarbeitung (Zweckbindung)',
        fr: 'Traitement limite a la finalite declaree (limitation de la finalite)',
        es: 'Tratamiento limitado a la finalidad declarada (limitacion de la finalidad)',
        nl: 'Verwerking beperkt tot het aangegeven doel (doelbinding)',
      },
      risposta: 'si',
      dettaglio: {
        it: "I dati vanno trattati solo nei limiti della finalita' dichiarata; i dipendenti del titolare possono usarli solo per i propri compiti professionali.",
        en: 'Data must be processed only within the limits of the stated purpose; the controller employees may use it only for their own professional tasks.',
        de: 'Die Daten duerfen nur im Rahmen des angegebenen Zwecks verarbeitet werden; die Mitarbeiter des Verantwortlichen duerfen sie nur fuer ihre eigenen beruflichen Aufgaben nutzen.',
        fr: "Les donnees ne doivent etre traitees que dans les limites de la finalite declaree ; les salaries du responsable ne peuvent les utiliser que pour leurs propres taches professionnelles.",
        es: 'Los datos solo deben tratarse dentro de los limites de la finalidad declarada; los empleados del responsable solo pueden usarlos para sus propias tareas profesionales.',
        nl: 'De gegevens mogen alleen worden verwerkt binnen de grenzen van het aangegeven doel; de medewerkers van de verwerkingsverantwoordelijke mogen ze alleen gebruiken voor hun eigen beroepstaken.',
      },
      fonte: FONTE_ICLG,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA)",
        en: 'Impact assessment (DPIA)',
        de: 'Datenschutz-Folgenabschaetzung (DSFA)',
        fr: "Analyse d'impact (AIPD)",
        es: 'Evaluacion de impacto (EIPD)',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA)',
      },
      risposta: 'no',
      dettaglio: {
        it: "La legge attuale non richiede una valutazione d'impatto; lo prevedera' solo l'eventuale riforma allineata al GDPR (ddl 8153), non ancora in vigore.",
        en: 'The current law does not require an impact assessment; it will be required only by the possible reform aligned with the GDPR (bill 8153), which is not yet in force.',
        de: 'Das geltende Recht verlangt keine Folgenabschaetzung; vorgesehen ist sie erst durch die etwaige an die DSGVO angeglichene Reform (Gesetzentwurf 8153), die noch nicht in Kraft ist.',
        fr: "La loi actuelle n'exige pas d'analyse d'impact ; elle ne sera prevue que par l'eventuelle reforme alignee sur le RGPD (projet de loi 8153), pas encore en vigueur.",
        es: 'La ley actual no exige una evaluacion de impacto; solo la preveria la eventual reforma alineada con el RGPD (proyecto de ley 8153), aun no en vigor.',
        nl: 'De huidige wet vereist geen effectbeoordeling; dit zou pas worden voorgeschreven door de eventuele aan de AVG aangepaste hervorming (wetsvoorstel 8153), die nog niet van kracht is.',
      },
      fonte: FONTE_ICLG,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: "Individua una base giuridica valida (di norma il consenso) e definisci una finalita' scritta.",
        en: 'Identify a valid legal basis (as a rule, consent) and define a written purpose.',
        de: 'Bestimmen Sie eine gueltige Rechtsgrundlage (in der Regel die Einwilligung) und legen Sie einen schriftlichen Zweck fest.',
        fr: 'Determinez une base juridique valable (en regle generale le consentement) et definissez une finalite ecrite.',
        es: 'Identifique una base juridica valida (por regla general, el consentimiento) y defina una finalidad por escrito.',
        nl: 'Bepaal een geldige rechtsgrondslag (in de regel toestemming) en leg een schriftelijk doel vast.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Informa i lavoratori su dati, finalita', diritti e destinatari (alla raccolta o entro 30 giorni lavorativi).",
        en: 'Inform workers about the data, the purposes, their rights and the recipients (at the time of collection or within 30 working days).',
        de: 'Informieren Sie die Beschaeftigten ueber die Daten, die Zwecke, ihre Rechte und die Empfaenger (bei der Erhebung oder innerhalb von 30 Arbeitstagen).',
        fr: 'Informez les travailleurs sur les donnees, les finalites, leurs droits et les destinataires (lors de la collecte ou dans un delai de 30 jours ouvrables).',
        es: 'Informe a los trabajadores sobre los datos, las finalidades, sus derechos y los destinatarios (en el momento de la recogida o dentro de los 30 dias laborables).',
        nl: 'Informeer de werknemers over de gegevens, de doeleinden, hun rechten en de ontvangers (bij de verzameling of binnen 30 werkdagen).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Documenta il consenso del lavoratore per la geolocalizzazione.',
        en: 'Document the worker consent for geolocation.',
        de: 'Dokumentieren Sie die Einwilligung des Beschaeftigten in die Geolokalisierung.',
        fr: 'Documentez le consentement du travailleur a la geolocalisation.',
        es: 'Documente el consentimiento del trabajador para la geolocalizacion.',
        nl: 'Documenteer de toestemming van de werknemer voor geolocatie.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Limita il trattamento alla sola finalita' dichiarata.",
        en: 'Limit the processing to the stated purpose only.',
        de: 'Beschraenken Sie die Verarbeitung ausschliesslich auf den angegebenen Zweck.',
        fr: 'Limitez le traitement a la seule finalite declaree.',
        es: 'Limite el tratamiento unicamente a la finalidad declarada.',
        nl: 'Beperk de verwerking tot uitsluitend het aangegeven doel.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Tieni presente la riforma in arrivo (ddl 8153): se entra in vigore, introdurra' regole in stile GDPR (informazione preventiva, niente decisioni solo automatizzate, DPIA).",
        en: 'Bear in mind the upcoming reform (bill 8153): if it comes into force, it will introduce GDPR-style rules (prior information, no solely automated decisions, DPIA).',
        de: 'Beachten Sie die bevorstehende Reform (Gesetzentwurf 8153): Tritt sie in Kraft, fuehrt sie Regeln im DSGVO-Stil ein (vorherige Information, keine ausschliesslich automatisierten Entscheidungen, DSFA).',
        fr: "Gardez a l'esprit la reforme a venir (projet de loi 8153) : si elle entre en vigueur, elle introduira des regles de type RGPD (information prealable, pas de decisions uniquement automatisees, AIPD).",
        es: 'Tenga presente la reforma en camino (proyecto de ley 8153): si entra en vigor, introducira reglas al estilo del RGPD (informacion previa, sin decisiones unicamente automatizadas, EIPD).',
        nl: 'Houd rekening met de op handen zijnde hervorming (wetsvoorstel 8153): als deze in werking treedt, voert zij regels in AVG-stijl in (voorafgaande informatie, geen uitsluitend geautomatiseerde besluiten, DPIA).',
      },
    },
  ],

  contatti: [
    {
      ente: 'Difensore civico, protezione dei dati',
      portale: FONTE_OMBUDSMAN.url,
      urlFonte: FONTE_OMBUDSMAN.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'sanzioni attuali modeste (circa 150 - 380 euro)',
      en: 'modest current fines (around 150 - 380 euros)',
      de: 'derzeit moderate Bussgelder (etwa 150 - 380 Euro)',
      fr: "amendes actuelles modestes (environ 150 - 380 euros)",
      es: 'sanciones actuales modestas (alrededor de 150 - 380 euros)',
      nl: 'momenteel bescheiden boetes (ongeveer 150 - 380 euro)',
    },
    casoCitato: {
      it: "Non risulta una decisione ucraina specifica e pubblicata sul GPS sui dipendenti, e l'applicazione e' limitata. Le sanzioni amministrative attuali sono modeste (circa 150 - 380 euro). La riforma in attesa (ddl 8153) porterebbe sanzioni in stile GDPR (fino a 150 milioni di UAH o 8% del fatturato), ma non e' in vigore.",
      en: 'There is no specific published Ukrainian decision on GPS tracking of employees, and enforcement is limited. The current administrative fines are modest (around 150 - 380 euros). The pending reform (bill 8153) would bring GDPR-style fines (up to 150 million UAH or 8% of turnover), but it is not in force.',
      de: 'Eine spezifische, veroeffentlichte ukrainische Entscheidung zur GPS-Ueberwachung von Beschaeftigten ist nicht ersichtlich, und der Vollzug ist begrenzt. Die derzeitigen Bussgelder sind moderat (etwa 150 - 380 Euro). Die ausstehende Reform (Gesetzentwurf 8153) wuerde Bussgelder im DSGVO-Stil bringen (bis zu 150 Millionen UAH oder 8 % des Umsatzes), ist aber nicht in Kraft.',
      fr: "Il n'existe pas de decision ukrainienne specifique et publiee sur le GPS des salaries, et l'application est limitee. Les amendes administratives actuelles sont modestes (environ 150 - 380 euros). La reforme en attente (projet de loi 8153) introduirait des amendes de type RGPD (jusqu'a 150 millions de UAH ou 8 % du chiffre d'affaires), mais elle n'est pas en vigueur.",
      es: 'No consta una decision ucraniana especifica y publicada sobre el GPS de los empleados, y la aplicacion es limitada. Las sanciones administrativas actuales son modestas (alrededor de 150 - 380 euros). La reforma pendiente (proyecto de ley 8153) traeria sanciones al estilo del RGPD (hasta 150 millones de UAH o el 8 % de la facturacion), pero no esta en vigor.',
      nl: 'Er is geen specifieke, gepubliceerde Oekraiense beslissing over GPS-volging van werknemers, en de handhaving is beperkt. De huidige administratieve boetes zijn bescheiden (ongeveer 150 - 380 euro). De aanhangige hervorming (wetsvoorstel 8153) zou boetes in AVG-stijl invoeren (tot 150 miljoen UAH of 8% van de omzet), maar is niet van kracht.',
    },
    urlFonte: FONTE_ICLG.url,
  },

  fonti: [FONTE_LEGGE_2297, FONTE_OMBUDSMAN, FONTE_ICLG, FONTE_GDPR],

  aggiornatoIl: '2026-06-15',
};
