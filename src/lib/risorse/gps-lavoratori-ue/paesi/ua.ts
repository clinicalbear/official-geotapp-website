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

import type { SchedaPaese , Fonte} from '../types';

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
const FONTE_ICLG: Fonte = {
  titolo:
    'ICLG, protezione dei dati in Ucraina (basi giuridiche, DPIA)',
  url: 'https://iclg.com/practice-areas/data-protection-laws-and-regulations/ukraine/', nonUfficiale: 'compilazione',
};
const FONTE_KUPAP = {
  titolo:
    'Codice ucraino delle infrazioni amministrative, art. 188-39 (violazioni in materia di dati personali)',
  url: 'https://zakon.rada.gov.ua/laws/show/8073-10',
};
const FONTE_ORDINE_1_02_14 = {
  titolo:
    'Ordine del Difensore civico 1/02-14: procedura di notifica dei trattamenti a rischio particolare',
  url: 'https://zakon.rada.gov.ua/laws/show/v1_02715-14',
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
    ente: {
      it: 'Difensore civico del Parlamento ucraino (Garante per la protezione dei dati)',
      en: 'Ombudsman of the Ukrainian Parliament (Data Protection Authority)',
      de: 'Bürgerbeauftragter des ukrainischen Parlaments (Datenschutzbehörde)',
      fr: 'Médiateur du Parlement ukrainien (autorité de protection des données)',
      es: 'Defensor del Pueblo del Parlamento ucraniano (autoridad de protección de datos)',
      nl: 'Ombudsman van het Oekraïense parlement (gegevensbeschermingsautoriteit)',
      pt: 'Provedor de Justiça do Parlamento ucraniano (autoridade de proteção de dados)',
      da: 'Ombudsmanden i det ukrainske parlament (databeskyttelsesmyndighed)',
      sv: 'Ombudsmannen i det ukrainska parlamentet (dataskyddsmyndighet)',
      nb: 'Ombudsmannen i det ukrainske parlamentet (datatilsyn)',
      ru: 'Уполномоченный Верховной Рады Украины по правам человека (орган по защите данных)',
    },
    portale: FONTE_OMBUDSMAN.url,
    urlFonte: FONTE_OMBUDSMAN.url,
    verificatoIl: '2026-09-30',
    note: {
      it: "L'Ucraina è un Paese candidato, fuori dall'UE, e non applica il GDPR. Vale la Legge 2297-VI del 2010, incentrata sul consenso; una riforma allineata al GDPR è in attesa. Autorità: il Difensore civico (Ombudsman). Contesto di guerra: l'applicazione è limitata e irregolare.",
      en: 'Ukraine is a candidate country, outside the EU, and does not apply the GDPR. Law 2297-VI of 2010 applies, and it is consent-centric; a reform aligned with the GDPR is pending. The supervisory authority is the Ombudsman. War context: enforcement is limited and irregular.',
      de: 'Die Ukraine ist ein Beitrittskandidat, liegt außerhalb der EU und wendet die DSGVO nicht an. Es gilt das Gesetz 2297-VI von 2010, das stark auf der Einwilligung beruht; eine an die DSGVO angeglichene Reform steht noch aus. Aufsichtsbehörde ist der Ombudsmann (Bürgerbeauftragte). Kriegskontext: Der Vollzug ist begrenzt und unregelmäßig.',
      fr: 'L’Ukraine est un pays candidat, hors de l’UE, et n’applique pas le RGPD. C’est la loi 2297-VI de 2010 qui s’applique, fortement axée sur le consentement ; une réforme alignée sur le RGPD est en attente. L’autorité est le Défenseur des droits (Ombudsman). Contexte de guerre : l’application est limitée et irrégulière.',
      es: 'Ucrania es un país candidato, fuera de la UE, y no aplica el RGPD. Rige la Ley 2297-VI de 2010, centrada en el consentimiento; una reforma alineada con el RGPD está pendiente. La autoridad es el Defensor del Pueblo (Ombudsman). Contexto de guerra: la aplicación es limitada e irregular.',
      pt: "A Ucrânia é um país candidato, fora da UE, e não aplica o RGPD. Vigora a Lei 2297-VI, de 2010, centrada no consentimento; está pendente uma reforma alinhada com o RGPD. A autoridade é o Provedor de Justiça (Ombudsman). Contexto de guerra: a aplicação é limitada e irregular.",
      nl: 'Oekraine is een kandidaat-lidstaat, buiten de EU, en past de AVG niet toe. De wet 2297-VI van 2010 geldt en is sterk op toestemming gericht; een aan de AVG aangepaste hervorming is in afwachting. De autoriteit is de Ombudsman. Oorlogscontext: de handhaving is beperkt en onregelmatig.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Base giuridica valida (art. 11) e informazione preventiva ai lavoratori',
        en: 'Valid legal basis (art. 11) and prior information to workers',
        de: 'Gültige Rechtsgrundlage (Art. 11) und vorherige Information der Beschäftigten',
        fr: 'Base juridique valable (art. 11) et information préalable des travailleurs',
        es: 'Base jurídica válida (art. 11) e información previa a los trabajadores',
        pt: "Base jurídica válida (art. 11) e informação prévia aos trabalhadores",
        nl: 'Geldige rechtsgrondslag (art. 11) en voorafgaande informatie aan werknemers',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il trattamento dei dati dei lavoratori (incluso il GPS) richiede una delle sei basi dell'art. 11 della Legge 2297-VI; i lavoratori vanno informati su titolare, dati, finalità, diritti e destinatari, al momento della raccolta (entro 30 giorni lavorativi solo se i dati non sono raccolti presso di loro; art. 12).",
        en: 'Processing of workers data (including GPS) requires one of the six legal bases under art. 11 of Law 2297-VI; workers must be informed about the controller, the data, the purposes, their rights and the recipients, at the time of collection (within 30 working days only if the data are not collected from them; art. 12).',
        de: 'Die Verarbeitung von Beschäftigtendaten (einschließlich GPS) erfordert eine der sechs Rechtsgrundlagen nach Art. 11 des Gesetzes 2297-VI; die Beschäftigten sind über den Verantwortlichen, die Daten, die Zwecke, ihre Rechte und die Empfänger zu informieren, bei der Erhebung (innerhalb von 30 Arbeitstagen nur, wenn die Daten nicht bei ihnen erhoben werden; Art. 12).',
        fr: 'Le traitement des données des travailleurs (y compris le GPS) requiert l’une des six bases de l’art. 11 de la loi 2297-VI ; les travailleurs doivent être informés sur le responsable, les données, les finalités, leurs droits et les destinataires, lors de la collecte (dans un délai de 30 jours ouvrables seulement si les données ne sont pas collectées auprès d’eux ; art. 12).',
        es: 'El tratamiento de los datos de los trabajadores (incluido el GPS) requiere una de las seis bases del art. 11 de la Ley 2297-VI; se debe informar a los trabajadores sobre el responsable, los datos, las finalidades, sus derechos y los destinatarios, en el momento de la recogida (dentro de los 30 días laborables solo si los datos no se recogen de ellos; art. 12).',
        pt: "O tratamento dos dados dos trabalhadores (incluindo o GPS) exige uma das seis bases do art. 11 da Lei 2297-VI; os trabalhadores devem ser informados sobre o responsável, os dados, as finalidades, os seus direitos e os destinatários, no momento da recolha (nos 30 dias úteis seguintes apenas se os dados não forem recolhidos junto deles; art. 12).",
        nl: 'De verwerking van werknemersgegevens (waaronder GPS) vereist een van de zes grondslagen van art. 11 van Wet 2297-VI; werknemers moeten worden geinformeerd over de verwerkingsverantwoordelijke, de gegevens, de doeleinden, hun rechten en de ontvangers, bij de verzameling (binnen 30 werkdagen alleen als de gegevens niet bij hen worden verzameld; art. 12).',
      },
      fonte: FONTE_LEGGE_2297,
    },
    {
      voce: {
        it: "Autorizzazione o registrazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation or registration with an authority before installing',
        de: 'Vorherige Genehmigung oder Registrierung bei einer Behörde vor der Installation',
        fr: 'Autorisation ou enregistrement préalable auprès d’une autorité avant l’installation',
        es: 'Autorización o registro previo ante una autoridad antes de instalar',
        pt: "Autorização ou registo prévio junto de uma autoridade antes de instalar",
        nl: 'Voorafgaande toestemming of registratie bij een autoriteit voor de installatie',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "La registrazione obbligatoria delle banche dati è stata abolita dal 1° gennaio 2014; resta però la notifica al Difensore civico, entro 30 giorni lavorativi dall'inizio, per i trattamenti a rischio particolare, fra i quali il luogo in cui si trova la persona e i suoi spostamenti (art. 9 della legge; ordine 1/02-14, punto 1.2). Ne è esente il trattamento necessario per esercitare diritti e adempiere obblighi del titolare nei rapporti di lavoro in base alla legge (punto 2.1.3): se il GPS rientri o no in questa esenzione va valutato caso per caso.",
        en: 'The mandatory registration of databases was abolished as of 1 January 2014; however, notification to the Ombudsman within 30 working days of the start remains required for processing posing a particular risk, which includes a person\'s whereabouts and movements (art. 9 of the law; order 1/02-14, point 1.2). Processing necessary to exercise the controller\'s rights and perform its obligations in employment relations under the law is exempt (point 2.1.3): whether GPS falls within this exemption must be assessed case by case.',
        de: 'Die Pflicht zur Registrierung von Datenbanken wurde zum 1. Januar 2014 abgeschafft; es bleibt jedoch die Meldung an den Ombudsmann innerhalb von 30 Arbeitstagen nach Beginn für Verarbeitungen mit besonderem Risiko, zu denen Aufenthaltsort und Bewegungen einer Person zählen (Art. 9 des Gesetzes; Anordnung 1/02-14, Punkt 1.2). Ausgenommen ist die Verarbeitung, die zur Ausübung von Rechten und Erfüllung von Pflichten des Verantwortlichen im Arbeitsverhältnis nach dem Gesetz erforderlich ist (Punkt 2.1.3): ob GPS darunter fällt, ist im Einzelfall zu prüfen.',
        fr: 'L’enregistrement obligatoire des bases de données a été supprimé au 1er janvier 2014 ; reste toutefois la notification au Défenseur des droits, dans les 30 jours ouvrables suivant le début, pour les traitements présentant un risque particulier, dont le lieu où se trouve la personne et ses déplacements (art. 9 de la loi ; ordre 1/02-14, point 1.2). Est exempté le traitement nécessaire à l’exercice des droits et à l’exécution des obligations du responsable dans les rapports de travail selon la loi (point 2.1.3) : l’appartenance du GPS à cette exemption doit être appréciée au cas par cas.',
        es: 'El registro obligatorio de las bases de datos fue abolido a partir del 1 de enero de 2014; subsiste sin embargo la notificación al Defensor del Pueblo, en los 30 días laborables siguientes al inicio, para los tratamientos de riesgo particular, entre ellos el lugar en que se encuentra la persona y sus desplazamientos (art. 9 de la ley; orden 1/02-14, punto 1.2). Está exento el tratamiento necesario para ejercer derechos y cumplir obligaciones del responsable en las relaciones laborales conforme a la ley (punto 2.1.3): si el GPS entra en esta exención debe valorarse caso por caso.',
        pt: "O registo obrigatório das bases de dados foi abolido a partir de 1 de janeiro de 2014; subsiste, contudo, a notificação ao Provedor de Justiça, nos 30 dias úteis seguintes ao início, para os tratamentos de risco particular, entre os quais o local onde se encontra a pessoa e as suas deslocações (art. 9 da lei; ordem 1/02-14, ponto 1.2). Está isento o tratamento necessário para exercer direitos e cumprir obrigações do responsável nas relações laborais nos termos da lei (ponto 2.1.3): se o GPS se enquadra nesta isenção deve ser avaliado caso a caso.",
        nl: 'De verplichte registratie van databanken is per 1 januari 2014 afgeschaft; de melding aan de Ombudsman binnen 30 werkdagen na aanvang blijft echter vereist voor verwerkingen met een bijzonder risico, waaronder de verblijfplaats en verplaatsingen van een persoon (art. 9 van de wet; bevel 1/02-14, punt 1.2). Vrijgesteld is de verwerking die nodig is om rechten uit te oefenen en verplichtingen na te komen van de verantwoordelijke in arbeidsverhoudingen krachtens de wet (punt 2.1.3): of gps hieronder valt, moet per geval worden beoordeeld.',
      },
      fonte: FONTE_ORDINE_1_02_14,
    },
    {
      voce: {
        it: 'Base = consenso documentato del lavoratore o altra base dell\'art. 11',
        en: 'Legal basis = documented consent of the worker or another basis under art. 11',
        de: 'Rechtsgrundlage = dokumentierte Einwilligung des Beschäftigten oder andere Grundlage nach Art. 11',
        fr: 'Base = consentement documenté du travailleur ou autre base de l’art. 11',
        es: 'Base = consentimiento documentado del trabajador u otra base del art. 11',
        pt: "Base = consentimento documentado do trabalhador ou outra base do art. 11",
        nl: 'Grondslag = gedocumenteerde toestemming van de werknemer of een andere grondslag van art. 11',
      },
      risposta: 'si',
      dettaglio: {
        it: "L'art. 11 elenca sei basi: il consenso (punto 1) è la prima, ma c'è anche la necessità di tutelare i legittimi interessi del titolare, salvo prevalenza dei diritti fondamentali dell'interessato (punto 6); la finalità va formulata nei documenti che regolano l'attività del titolare (art. 6(1)). Per il GPS conviene informare in anticipo, documentare il consenso e definire una finalità scritta.",
        en: 'Art. 11 lists six bases: consent (point 1) comes first, but there is also the need to protect the legitimate interests of the controller, unless the data subject\'s fundamental rights prevail (point 6); the purpose must be set out in the documents governing the controller\'s activity (art. 6(1)). For GPS it is advisable to inform in advance, document the consent and set out a written purpose.',
        de: 'Art. 11 nennt sechs Grundlagen: Die Einwilligung (Nr. 1) steht an erster Stelle, daneben gibt es die Erforderlichkeit zum Schutz der berechtigten Interessen des Verantwortlichen, sofern nicht die Grundrechte der betroffenen Person überwiegen (Nr. 6); der Zweck ist in den Dokumenten festzulegen, die die Tätigkeit des Verantwortlichen regeln (Art. 6(1)). Für GPS empfiehlt es sich, vorab zu informieren, die Einwilligung zu dokumentieren und einen schriftlichen Zweck festzulegen.',
        fr: 'L’art. 11 énumère six bases : le consentement (point 1) vient en premier, mais il y a aussi la nécessité de protéger les intérêts légitimes du responsable, sauf prévalence des droits fondamentaux de la personne concernée (point 6) ; la finalité doit être formulée dans les documents qui régissent l’activité du responsable (art. 6(1)). Pour le GPS, il convient d’informer à l’avance, de documenter le consentement et de définir une finalité écrite.',
        es: 'El art. 11 enumera seis bases: el consentimiento (punto 1) es la primera, pero también está la necesidad de proteger los intereses legítimos del responsable, salvo que prevalezcan los derechos fundamentales del interesado (punto 6); la finalidad debe formularse en los documentos que regulan la actividad del responsable (art. 6(1)). Para el GPS conviene informar con antelación, documentar el consentimiento y definir una finalidad por escrito.',
        pt: "O art. 11 enumera seis bases: o consentimento (ponto 1) é a primeira, mas existe também a necessidade de proteger os interesses legítimos do responsável, salvo se prevalecerem os direitos fundamentais do titular dos dados (ponto 6); a finalidade deve ser formulada nos documentos que regulam a atividade do responsável (art. 6(1)). Para o GPS, convém informar com antecedência, documentar o consentimento e definir uma finalidade por escrito.",
        nl: 'Art. 11 noemt zes grondslagen: toestemming (punt 1) staat voorop, maar ook de noodzaak om de gerechtvaardigde belangen van de verantwoordelijke te beschermen, tenzij de grondrechten van de betrokkene zwaarder wegen (punt 6); het doel moet worden vastgelegd in de documenten die de activiteit van de verantwoordelijke regelen (art. 6(1)). Voor gps is het raadzaam vooraf te informeren, de toestemming te documenteren en een schriftelijk doel vast te leggen.',
      },
      fonte: FONTE_LEGGE_2297,
    },
    {
      voce: {
        it: 'Trattamento limitato alla finalità dichiarata (limitazione della finalità)',
        en: 'Processing limited to the stated purpose (purpose limitation)',
        de: 'Auf den angegebenen Zweck beschränkte Verarbeitung (Zweckbindung)',
        fr: 'Traitement limité à la finalité déclarée (limitation de la finalité)',
        es: 'Tratamiento limitado a la finalidad declarada (limitación de la finalidad)',
        pt: "Tratamento limitado à finalidade declarada (limitação da finalidade)",
        nl: 'Verwerking beperkt tot het aangegeven doel (doelbinding)',
      },
      risposta: 'si',
      dettaglio: {
        it: "I dati vanno trattati solo per la finalità dichiarata e il loro contenuto deve essere adeguato e non eccessivo rispetto ad essa (art. 6(1) e 6(3)); i dipendenti del titolare possono usarli solo per i propri compiti professionali (art. 10(3)).",
        en: 'Data must be processed only for the stated purpose and their content must be adequate and not excessive in relation to it (art. 6(1) and 6(3)); the controller employees may use it only for their own professional tasks (art. 10(3)).',
        de: 'Die Daten dürfen nur für den angegebenen Zweck verarbeitet werden, und ihr Inhalt muss dafür angemessen und nicht übermäßig sein (Art. 6(1) und 6(3)); die Mitarbeiter des Verantwortlichen dürfen sie nur für ihre eigenen beruflichen Aufgaben nutzen (Art. 10(3)).',
        fr: 'Les données ne doivent être traitées que pour la finalité déclarée et leur contenu doit être adéquat et non excessif par rapport à celle-ci (art. 6(1) et 6(3)) ; les salariés du responsable ne peuvent les utiliser que pour leurs propres tâches professionnelles (art. 10(3)).',
        es: 'Los datos solo deben tratarse para la finalidad declarada y su contenido debe ser adecuado y no excesivo respecto de ella (art. 6(1) y 6(3)); los empleados del responsable solo pueden usarlos para sus propias tareas profesionales (art. 10(3)).',
        pt: "Os dados só devem ser tratados para a finalidade declarada e o seu conteúdo deve ser adequado e não excessivo em relação a ela (art. 6(1) e 6(3)); os trabalhadores do responsável só os podem utilizar para as suas próprias tarefas profissionais (art. 10(3)).",
        nl: 'De gegevens mogen alleen worden verwerkt voor het aangegeven doel en hun inhoud moet daarvoor passend en niet bovenmatig zijn (art. 6(1) en 6(3)); de medewerkers van de verwerkingsverantwoordelijke mogen ze alleen gebruiken voor hun eigen beroepstaken (art. 10(3)).',
      },
      fonte: FONTE_LEGGE_2297,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA)",
        en: 'Impact assessment (DPIA)',
        de: 'Datenschutz-Folgenabschätzung (DSFA)',
        fr: 'Analyse d’impact (AIPD)',
        es: 'Evaluación de impacto (EIPD)',
        pt: "Avaliação de impacto sobre a proteção de dados (AIPD)",
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA)',
      },
      risposta: 'no',
      dettaglio: {
        it: "La legge attuale non richiede una valutazione d'impatto; lo prevederà solo l'eventuale riforma allineata al GDPR (ddl 8153), non ancora in vigore.",
        en: 'The current law does not require an impact assessment; it will be required only by the possible reform aligned with the GDPR (bill 8153), which is not yet in force.',
        de: 'Das geltende Recht verlangt keine Folgenabschätzung; vorgesehen ist sie erst durch die etwaige an die DSGVO angeglichene Reform (Gesetzentwurf 8153), die noch nicht in Kraft ist.',
        fr: 'La loi actuelle n’exige pas d’analyse d’impact ; elle ne sera prévue que par l’éventuelle réforme alignée sur le RGPD (projet de loi 8153), pas encore en vigueur.',
        es: 'La ley actual no exige una evaluación de impacto; solo la prevería la eventual reforma alineada con el RGPD (proyecto de ley 8153), aún no en vigor.',
        pt: "A lei atual não exige uma avaliação de impacto; só a preveria a eventual reforma alinhada com o RGPD (projeto de lei 8153), ainda não em vigor.",
        nl: 'De huidige wet vereist geen effectbeoordeling; dit zou pas worden voorgeschreven door de eventuele aan de AVG aangepaste hervorming (wetsvoorstel 8153), die nog niet van kracht is.',
      },
      fonte: FONTE_LEGGE_2297,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: "Individua una base giuridica valida (di norma il consenso) e definisci una finalità scritta.",
        en: 'Identify a valid legal basis (as a rule, consent) and define a written purpose.',
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage (in der Regel die Einwilligung) und legen Sie einen schriftlichen Zweck fest.',
        fr: 'Déterminez une base juridique valable (en règle générale le consentement) et définissez une finalité écrite.',
        es: 'Identifica una base jurídica válida (por regla general, el consentimiento) y define una finalidad por escrito.',
        pt: "Identifique uma base jurídica válida (em regra, o consentimento) e defina uma finalidade por escrito.",
        nl: 'Bepaal een geldige rechtsgrondslag (in de regel toestemming) en leg een schriftelijk doel vast.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Informa i lavoratori su dati, finalità, diritti e destinatari (al momento della raccolta; entro 30 giorni lavorativi solo se i dati non sono raccolti presso di loro).",
        en: 'Inform workers about the data, the purposes, their rights and the recipients (at the time of collection; within 30 working days only if the data are not collected from them).',
        de: 'Informieren Sie die Beschäftigten über die Daten, die Zwecke, ihre Rechte und die Empfänger (bei der Erhebung; innerhalb von 30 Arbeitstagen nur, wenn die Daten nicht bei ihnen erhoben werden).',
        fr: 'Informez les travailleurs sur les données, les finalités, leurs droits et les destinataires (lors de la collecte ; dans un délai de 30 jours ouvrables seulement si les données ne sont pas collectées auprès d’eux).',
        es: 'Informa a los trabajadores sobre los datos, las finalidades, sus derechos y los destinatarios (en el momento de la recogida; dentro de los 30 días laborables solo si los datos no se recogen de ellos).',
        pt: "Informe os trabalhadores sobre os dados, as finalidades, os seus direitos e os destinatários (no momento da recolha; nos 30 dias úteis seguintes apenas se os dados não forem recolhidos junto deles).",
        nl: 'Informeer de werknemers over de gegevens, de doeleinden, hun rechten en de ontvangers (bij de verzameling; binnen 30 werkdagen alleen als de gegevens niet bij hen worden verzameld).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Documenta il consenso del lavoratore per la geolocalizzazione.',
        en: 'Document the worker consent for geolocation.',
        de: 'Dokumentieren Sie die Einwilligung des Beschäftigten in die Geolokalisierung.',
        fr: 'Documentez le consentement du travailleur à la géolocalisation.',
        es: 'Documenta el consentimiento del trabajador para la geolocalización.',
        pt: "Documente o consentimento do trabalhador para a geolocalização.",
        nl: 'Documenteer de toestemming van de werknemer voor geolocatie.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Limita il trattamento alla sola finalità dichiarata.",
        en: 'Limit the processing to the stated purpose only.',
        de: 'Beschränken Sie die Verarbeitung ausschließlich auf den angegebenen Zweck.',
        fr: 'Limitez le traitement à la seule finalité déclarée.',
        es: 'Limita el tratamiento únicamente a la finalidad declarada.',
        pt: "Limite o tratamento apenas à finalidade declarada.",
        nl: 'Beperk de verwerking tot uitsluitend het aangegeven doel.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Tieni presente la riforma in arrivo (ddl 8153): se entra in vigore, introdurrà regole in stile GDPR (informazione preventiva, niente decisioni solo automatizzate, DPIA).",
        en: 'Bear in mind the upcoming reform (bill 8153): if it comes into force, it will introduce GDPR-style rules (prior information, no solely automated decisions, DPIA).',
        de: 'Beachten Sie die bevorstehende Reform (Gesetzentwurf 8153): Tritt sie in Kraft, führt sie Regeln im DSGVO-Stil ein (vorherige Information, keine ausschließlich automatisierten Entscheidungen, DSFA).',
        fr: 'Gardez à l’esprit la réforme à venir (projet de loi 8153) : si elle entre en vigueur, elle introduira des règles de type RGPD (information préalable, pas de décisions uniquement automatisées, AIPD).',
        es: 'Ten presente la reforma en camino (proyecto de ley 8153): si entra en vigor, introducirá reglas al estilo del RGPD (información previa, sin decisiones únicamente automatizadas, EIPD).',
        pt: "Tenha presente a reforma a caminho (projeto de lei 8153): se entrar em vigor, introduzirá regras ao estilo do RGPD (informação prévia, sem decisões exclusivamente automatizadas, AIPD).",
        nl: 'Houd rekening met de op handen zijnde hervorming (wetsvoorstel 8153): als deze in werking treedt, voert zij regels in AVG-stijl in (voorafgaande informatie, geen uitsluitend geautomatiseerde besluiten, DPIA).',
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
        pt: "Se mudar de sistema ou de software de monitorização, atualize e volte a entregar a informação, e verifique se tem de voltar a informar ou a consultar os representantes dos trabalhadores, quando a lei o prevê. Muitas vezes mudam o fornecedor (subcontratante), os dados recolhidos e as modalidades: a informação entregue antes não basta.",
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'Difensore civico, protezione dei dati',
      portale: FONTE_OMBUDSMAN.url,
      urlFonte: FONTE_OMBUDSMAN.url,
      verificatoIl: '2026-09-30',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'Sanzioni attuali modeste (per le imprese e i loro responsabili da 200 a 2.000 minimi non imponibili; art. 188-39 CAO)',
      en: 'modest current fines (for businesses and their officers from 200 to 2,000 non-taxable minimums; art. 188-39 Code of Administrative Offences)',
      de: 'derzeit moderate Bußgelder (für Unternehmen und ihre Verantwortlichen von 200 bis 2.000 steuerfreien Mindestbeträgen; Art. 188-39 Ordnungswidrigkeitengesetzbuch)',
      fr: 'amendes actuelles modestes (pour les entreprises et leurs responsables de 200 à 2 000 minimums non imposables ; art. 188-39 du Code des infractions administratives)',
      es: 'Sanciones actuales modestas (para las empresas y sus responsables de 200 a 2.000 mínimos no imponibles; art. 188-39 del Código de infracciones administrativas)',
      pt: "Sanções atuais modestas (para as empresas e os seus responsáveis, de 200 a 2.000 mínimos não tributáveis; art. 188-39 do Código de Infrações Administrativas)",
      nl: 'momenteel bescheiden boetes (voor ondernemingen en hun verantwoordelijken van 200 tot 2.000 belastingvrije minima; art. 188-39 Wetboek van administratieve overtredingen)',
    },
    casoCitato: {
      it: "Non risulta una decisione ucraina specifica e pubblicata sul GPS sui dipendenti, e l'applicazione è limitata. Le sanzioni amministrative attuali sono modeste (per le imprese e i loro responsabili da 200 a 2.000 minimi non imponibili; art. 188-39 CAO). La riforma in attesa (ddl 8153, approvato in prima lettura il 20 novembre 2024 e in attesa della seconda) porterebbe sanzioni in stile GDPR (fino a 150 milioni di UAH o 8% del fatturato), ma non è in vigore.",
      en: 'There is no specific published Ukrainian decision on GPS tracking of employees, and enforcement is limited. The current administrative fines are modest (for businesses and their officers from 200 to 2,000 non-taxable minimums; art. 188-39 Code of Administrative Offences). The pending reform (bill 8153, approved at first reading on 20 November 2024 and awaiting second reading) would bring GDPR-style fines (up to 150 million UAH or 8% of turnover), but it is not in force.',
      de: 'Eine spezifische, veröffentlichte ukrainische Entscheidung zur GPS-Überwachung von Beschäftigten ist nicht ersichtlich, und der Vollzug ist begrenzt. Die derzeitigen Bußgelder sind moderat (für Unternehmen und ihre Verantwortlichen von 200 bis 2.000 steuerfreien Mindestbeträgen; Art. 188-39 Ordnungswidrigkeitengesetzbuch). Die ausstehende Reform (Gesetzentwurf 8153) würde Bußgelder im DSGVO-Stil bringen (bis zu 150 Millionen UAH oder 8 % des Umsatzes), ist aber nicht in Kraft.',
      fr: 'Il n’existe pas de décision ukrainienne spécifique et publiée sur le GPS des salariés, et l’application est limitée. Les amendes administratives actuelles sont modestes (pour les entreprises et leurs responsables de 200 à 2 000 minimums non imposables ; art. 188-39 du Code des infractions administratives). La réforme en attente (projet de loi 8153) introduirait des amendes de type RGPD (jusqu’à 150 millions de UAH ou 8 % du chiffre d’affaires), mais elle n’est pas en vigueur.',
      es: 'No consta una decisión ucraniana específica y publicada sobre el GPS de los empleados, y la aplicación es limitada. Las sanciones administrativas actuales son modestas (para las empresas y sus responsables de 200 a 2.000 mínimos no imponibles; art. 188-39 del Código de infracciones administrativas). La reforma pendiente (proyecto de ley 8153, aprobado en primera lectura el 20 de noviembre de 2024 y pendiente de la segunda) traería sanciones al estilo del RGPD (hasta 150 millones de UAH o el 8 % de la facturación), pero no está en vigor.',
      pt: "Não consta nenhuma decisão ucraniana específica e publicada sobre o GPS aplicado a trabalhadores, e a aplicação é limitada. As sanções administrativas atuais são modestas (para as empresas e os seus responsáveis, de 200 a 2.000 mínimos não tributáveis; art. 188-39 do Código de Infrações Administrativas). A reforma pendente (projeto de lei 8153, aprovado em primeira leitura em 20 de novembro de 2024 e a aguardar a segunda) traria sanções ao estilo do RGPD (até 150 milhões de UAH ou 8 % do volume de negócios), mas não está em vigor.",
      nl: 'Er is geen specifieke, gepubliceerde Oekraiense beslissing over GPS-volging van werknemers, en de handhaving is beperkt. De huidige administratieve boetes zijn bescheiden (voor ondernemingen en hun verantwoordelijken van 200 tot 2.000 belastingvrije minima; art. 188-39 Wetboek van administratieve overtredingen). De aanhangige hervorming (wetsvoorstel 8153) zou boetes in AVG-stijl invoeren (tot 150 miljoen UAH of 8% van de omzet), maar is niet van kracht.',
    },
    urlFonte: FONTE_KUPAP.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_LEGGE_2297,
    FONTE_ORDINE_1_02_14,
    FONTE_KUPAP,
    FONTE_OMBUDSMAN,
    FONTE_ICLG,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
