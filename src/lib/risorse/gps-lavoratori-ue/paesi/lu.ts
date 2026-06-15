/**
 * Scheda-paese Lussemburgo per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. L.261-1 del Code du travail (sorveglianza dei lavoratori, informazione
 * preventiva e codecisione della delegazione del personale, parere CNPD con
 * effetto sospensivo), guida CNPD sulla geolocalizzazione dei veicoli
 * (necessita e proporzionalita, abolizione dell'autorizzazione preventiva),
 * guida CNPD sulla valutazione d'impatto (AIPD), decisione CNPD 11FR/2021,
 * pagina CNPD sui reclami e GDPR.
 *
 * Il Lussemburgo ha un'unica autorita nazionale, la CNPD; nessuna ripartizione
 * regionale. Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_L261_1 = {
  titolo:
    'Code du travail, art. L.261-1 (sorveglianza dei lavoratori) - riproduzione CNPD',
  url: 'https://cnpd.public.lu/fr/dossiers-thematiques/surveillance/geolocalisation-vehicules/surveillance.html',
};
const FONTE_CNPD_GEOLOC = {
  titolo:
    'CNPD, geolocalizzazione dei veicoli: necessita e proporzionalita',
  url: 'https://cnpd.public.lu/fr/dossiers-thematiques/surveillance/geolocalisation-vehicules/necessite-proportionnalite.html',
};
const FONTE_CNPD_AIPD = {
  titolo: "CNPD, geolocalizzazione: valutazione d'impatto (AIPD)",
  url: 'https://cnpd.public.lu/fr/dossiers-thematiques/surveillance/geolocalisation-vehicules/aipd.html',
};
const FONTE_CNPD_DECISIONE_11FR = {
  titolo:
    'CNPD, decisione 11FR/2021 (sanzione geolocalizzazione veicoli di servizio)',
  url: 'https://cnpd.public.lu/fr/decisions-sanctions/2021/decision-11-fr-2021.html',
};
const FONTE_CNPD_RECLAMO = {
  titolo: 'CNPD, presentare un reclamo',
  url: 'https://cnpd.public.lu/fr/support/protection-des-donnees.html',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const lussemburgo: SchedaPaese = {
  codiceISO: 'LU',
  slugCanonico: 'lussemburgo',
  nome: 'Lussemburgo',
  nomi: {
    it: 'Lussemburgo',
    en: 'Luxembourg',
    'en-us': 'Luxembourg',
    'en-gb': 'Luxembourg',
    'en-au': 'Luxembourg',
    'en-ie': 'Luxembourg',
    'en-ca': 'Luxembourg',
    de: 'Luxemburg',
    nl: 'Luxemburg',
    fr: 'Luxembourg',
    es: 'Luxemburgo',
    pt: 'Luxemburgo',
    da: 'Luxembourg',
    sv: 'Luxemburg',
    nb: 'Luxembourg',
    ru: 'Люксембург',
  },
  bandiera: '🇱🇺',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'CNPD (Commission nationale pour la protection des donnees)',
    portale: FONTE_CNPD_RECLAMO.url,
    urlFonte: FONTE_CNPD_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "Il Lussemburgo ha un'unica autorita nazionale, la CNPD; nessuna ripartizione regionale.",
      en: 'Luxembourg has a single national authority, the CNPD; no regional division.',
      de: 'Luxemburg hat eine einzige nationale Behoerde, die CNPD; keine regionale Aufteilung.',
      fr: 'Le Luxembourg a une seule autorite nationale, la CNPD; aucune repartition regionale.',
      es: 'Luxemburgo tiene una unica autoridad nacional, la CNPD; sin reparto regional.',
      nl: 'Luxemburg heeft een enkele nationale autoriteit, de CNPD; geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione collettiva preventiva alla delegazione del personale e codecisione (Code du travail art. L.261-1)',
        en: 'Prior collective information to the staff delegation and codecision (Code du travail art. L.261-1)',
        de: 'Vorherige kollektive Information der Personaldelegation und Mitentscheidung (Code du travail Art. L.261-1)',
        fr: 'Information collective prealable a la delegation du personnel et codecision (Code du travail art. L.261-1)',
        es: 'Informacion colectiva previa a la delegacion del personal y codecision (Code du travail art. L.261-1)',
        nl: 'Voorafgaande collectieve informatie aan de personeelsafvaardiging en medebeslissing (Code du travail art. L.261-1)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Prima di installare il monitoraggio, il datore deve informare preventivamente la delegazione del personale; per le finalita previste la messa in opera e soggetta a codecisione con la delegazione. Vale dove esiste una delegazione del personale.",
        en: 'Before installing monitoring, the employer must inform the staff delegation in advance; for the purposes provided for, deployment is subject to codecision with the delegation. This applies where a staff delegation exists.',
        de: 'Vor der Installation der Ueberwachung muss der Arbeitgeber die Personaldelegation vorab informieren; fuer die vorgesehenen Zwecke unterliegt die Einfuehrung der Mitentscheidung mit der Delegation. Dies gilt, wo eine Personaldelegation besteht.',
        fr: "Avant d'installer la surveillance, l'employeur doit informer prealablement la delegation du personnel; pour les finalites prevues, la mise en oeuvre est soumise a codecision avec la delegation. Cela vaut la ou une delegation du personnel existe.",
        es: 'Antes de instalar la supervision, el empleador debe informar previamente a la delegacion del personal; para las finalidades previstas, la puesta en marcha esta sujeta a codecision con la delegacion. Se aplica donde existe una delegacion del personal.',
        nl: 'Voordat monitoring wordt geinstalleerd, moet de werkgever de personeelsafvaardiging vooraf informeren; voor de voorziene doeleinden is de invoering onderworpen aan medebeslissing met de afvaardiging. Dit geldt waar een personeelsafvaardiging bestaat.',
      },
      fonte: FONTE_L261_1,
    },
    {
      voce: {
        it: 'Possibilita per la delegazione o i lavoratori di chiedere un parere preventivo alla CNPD entro 15 giorni (effetto sospensivo)',
        en: 'Possibility for the delegation or the workers to request a prior opinion from the CNPD within 15 days (suspensive effect)',
        de: 'Moeglichkeit fuer die Delegation oder die Arbeitnehmer, innerhalb von 15 Tagen eine vorherige Stellungnahme der CNPD anzufordern (aufschiebende Wirkung)',
        fr: "Possibilite pour la delegation ou les travailleurs de demander un avis prealable a la CNPD dans un delai de 15 jours (effet suspensif)",
        es: 'Posibilidad de que la delegacion o los trabajadores soliciten un dictamen previo a la CNPD en un plazo de 15 dias (efecto suspensivo)',
        nl: 'Mogelijkheid voor de afvaardiging of de werknemers om binnen 15 dagen een voorafgaand advies aan de CNPD te vragen (schorsende werking)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "La delegazione del personale, o in sua assenza i lavoratori interessati, possono chiedere entro 15 giorni dall'informazione preventiva un parere alla CNPD, e la richiesta ha effetto sospensivo.",
        en: 'The staff delegation, or in its absence the workers concerned, may request an opinion from the CNPD within 15 days of the prior information, and the request has suspensive effect.',
        de: 'Die Personaldelegation oder, falls keine besteht, die betroffenen Arbeitnehmer koennen innerhalb von 15 Tagen nach der vorherigen Information eine Stellungnahme der CNPD anfordern, und der Antrag hat aufschiebende Wirkung.',
        fr: "La delegation du personnel, ou a defaut les travailleurs concernes, peuvent demander dans les 15 jours suivant l'information prealable un avis a la CNPD, et la demande a un effet suspensif.",
        es: 'La delegacion del personal, o en su ausencia los trabajadores afectados, pueden solicitar a la CNPD un dictamen en un plazo de 15 dias desde la informacion previa, y la solicitud tiene efecto suspensivo.',
        nl: 'De personeelsafvaardiging of, bij ontstentenis daarvan, de betrokken werknemers kunnen binnen 15 dagen na de voorafgaande informatie een advies aan de CNPD vragen, en het verzoek heeft schorsende werking.',
      },
      fonte: FONTE_L261_1,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behoerde vor der Installation',
        fr: "Autorisation prealable d'une autorite avant l'installation",
        es: 'Autorizacion previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "La vecchia autorizzazione preventiva della CNPD e stata abolita col GDPR ed e sostituita dalla codecisione con la delegazione del personale; resta l'obbligo di tenere il registro dei trattamenti.",
        en: 'The old prior authorisation from the CNPD was abolished with the GDPR and replaced by codecision with the staff delegation; the obligation to keep the record of processing activities remains.',
        de: 'Die fruehere vorherige Genehmigung der CNPD wurde mit der DSGVO abgeschafft und durch die Mitentscheidung mit der Personaldelegation ersetzt; die Pflicht, das Verzeichnis der Verarbeitungstaetigkeiten zu fuehren, bleibt bestehen.',
        fr: "L'ancienne autorisation prealable de la CNPD a ete abolie avec le RGPD et remplacee par la codecision avec la delegation du personnel; l'obligation de tenir le registre des traitements subsiste.",
        es: 'La antigua autorizacion previa de la CNPD fue abolida con el RGPD y sustituida por la codecision con la delegacion del personal; se mantiene la obligacion de llevar el registro de las actividades de tratamiento.',
        nl: 'De oude voorafgaande toestemming van de CNPD is met de AVG afgeschaft en vervangen door medebeslissing met de personeelsafvaardiging; de verplichting om het register van verwerkingsactiviteiten bij te houden blijft bestaan.',
      },
      fonte: FONTE_CNPD_GEOLOC,
    },
    {
      voce: {
        it: "Base = una condizione dell'art. 6 GDPR e informazione individuale; niente tracciamento permanente se e ammesso l'uso privato, disattivabile dal lavoratore",
        en: 'Basis = a condition of GDPR art. 6 and individual information; no permanent tracking if private use is allowed, deactivatable by the worker',
        de: 'Grundlage = eine Bedingung von Art. 6 DSGVO und individuelle Information; keine dauerhafte Ortung, wenn die private Nutzung erlaubt ist, durch den Arbeitnehmer deaktivierbar',
        fr: "Base = une condition de l'art. 6 RGPD et information individuelle; pas de tracage permanent si l'usage prive est autorise, desactivable par le travailleur",
        es: 'Base = una condicion del art. 6 RGPD e informacion individual; sin rastreo permanente si se permite el uso privado, desactivable por el trabajador',
        nl: 'Grondslag = een voorwaarde van art. 6 AVG en individuele informatie; geen permanente tracering als prive-gebruik is toegestaan, door de werknemer uit te schakelen',
      },
      risposta: 'si',
      dettaglio: {
        it: "Serve una base dell'art. 6 GDPR e l'informazione individuale (art. 13); il datore non puo sorvegliare fuori dall'orario, e se e ammesso l'uso privato del veicolo il sistema non puo restare permanente e il lavoratore deve poterlo disattivare.",
        en: 'A basis under GDPR art. 6 and individual information (art. 13) are required; the employer cannot monitor outside working hours, and if private use of the vehicle is allowed the system cannot remain permanent and the worker must be able to deactivate it.',
        de: 'Erforderlich sind eine Grundlage nach Art. 6 DSGVO und die individuelle Information (Art. 13); der Arbeitgeber darf nicht ausserhalb der Arbeitszeit ueberwachen, und wenn die private Nutzung des Fahrzeugs erlaubt ist, darf das System nicht dauerhaft bleiben und der Arbeitnehmer muss es deaktivieren koennen.',
        fr: "Une base au titre de l'art. 6 RGPD et l'information individuelle (art. 13) sont necessaires; l'employeur ne peut pas surveiller en dehors des heures de travail, et si l'usage prive du vehicule est autorise, le systeme ne peut pas rester permanent et le travailleur doit pouvoir le desactiver.",
        es: 'Se requiere una base del art. 6 RGPD y la informacion individual (art. 13); el empleador no puede vigilar fuera del horario, y si se permite el uso privado del vehiculo el sistema no puede permanecer permanente y el trabajador debe poder desactivarlo.',
        nl: 'Een grondslag op grond van art. 6 AVG en de individuele informatie (art. 13) zijn vereist; de werkgever mag niet buiten werktijd monitoren, en als prive-gebruik van het voertuig is toegestaan, mag het systeem niet permanent blijven en moet de werknemer het kunnen uitschakelen.',
      },
      fonte: FONTE_CNPD_GEOLOC,
    },
    {
      voce: {
        it: "Valutazione d'impatto (AIPD) per la geolocalizzazione che controlla regolarmente o sistematicamente i dipendenti (es. per il tempo di lavoro)",
        en: 'Impact assessment (DPIA) for geolocation that regularly or systematically monitors employees (e.g. for working time)',
        de: 'Datenschutz-Folgenabschaetzung (DSFA) fuer die Ortung, die Beschaeftigte regelmaessig oder systematisch ueberwacht (z. B. fuer die Arbeitszeit)',
        fr: "Analyse d'impact (AIPD) pour la geolocalisation qui controle regulierement ou systematiquement les salaries (par exemple pour le temps de travail)",
        es: 'Evaluacion de impacto (EIPD) para la geolocalizacion que controla regular o sistematicamente a los empleados (por ejemplo, para el tiempo de trabajo)',
        nl: 'Effectbeoordeling (DPIA) voor geolocatie die werknemers regelmatig of stelselmatig monitort (bijvoorbeeld voor de arbeidstijd)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Serve una valutazione d'impatto quando la geolocalizzazione comporta un controllo regolare e sistematico dei dipendenti o ne segue il tempo di lavoro.",
        en: 'An impact assessment is required when geolocation involves regular and systematic monitoring of employees or tracks their working time.',
        de: 'Eine Folgenabschaetzung ist erforderlich, wenn die Ortung eine regelmaessige und systematische Ueberwachung der Beschaeftigten mit sich bringt oder deren Arbeitszeit verfolgt.',
        fr: "Une analyse d'impact est necessaire lorsque la geolocalisation entraine un controle regulier et systematique des salaries ou suit leur temps de travail.",
        es: 'Se requiere una evaluacion de impacto cuando la geolocalizacion implica un control regular y sistematico de los empleados o sigue su tiempo de trabajo.',
        nl: 'Een effectbeoordeling is vereist wanneer geolocatie een regelmatige en stelselmatige monitoring van werknemers met zich meebrengt of hun arbeidstijd volgt.',
      },
      fonte: FONTE_CNPD_AIPD,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Informa preventivamente la delegazione del personale e attiva la codecisione (art. L.261-1).',
        en: 'Inform the staff delegation in advance and activate codecision (art. L.261-1).',
        de: 'Informieren Sie die Personaldelegation vorab und aktivieren Sie die Mitentscheidung (Art. L.261-1).',
        fr: 'Informez prealablement la delegation du personnel et activez la codecision (art. L.261-1).',
        es: 'Informe previamente a la delegacion del personal y active la codecision (art. L.261-1).',
        nl: 'Informeer de personeelsafvaardiging vooraf en activeer de medebeslissing (art. L.261-1).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Lascia alla delegazione o ai lavoratori la possibilita di chiedere un parere alla CNPD entro 15 giorni (effetto sospensivo).',
        en: 'Allow the delegation or the workers the possibility to request an opinion from the CNPD within 15 days (suspensive effect).',
        de: 'Geben Sie der Delegation oder den Arbeitnehmern die Moeglichkeit, innerhalb von 15 Tagen eine Stellungnahme der CNPD anzufordern (aufschiebende Wirkung).',
        fr: "Laissez a la delegation ou aux travailleurs la possibilite de demander un avis a la CNPD dans un delai de 15 jours (effet suspensif).",
        es: 'Deje a la delegacion o a los trabajadores la posibilidad de solicitar un dictamen a la CNPD en un plazo de 15 dias (efecto suspensivo).',
        nl: 'Geef de afvaardiging of de werknemers de mogelijkheid om binnen 15 dagen een advies aan de CNPD te vragen (schorsende werking).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Individua una base giuridica dell'art. 6 GDPR e informa individualmente i lavoratori (art. 13).",
        en: 'Identify a legal basis under GDPR art. 6 and inform the workers individually (art. 13).',
        de: 'Bestimmen Sie eine Rechtsgrundlage nach Art. 6 DSGVO und informieren Sie die Arbeitnehmer individuell (Art. 13).',
        fr: "Determinez une base juridique au titre de l'art. 6 RGPD et informez individuellement les travailleurs (art. 13).",
        es: 'Determine una base juridica del art. 6 RGPD e informe individualmente a los trabajadores (art. 13).',
        nl: 'Bepaal een rechtsgrondslag op grond van art. 6 AVG en informeer de werknemers individueel (art. 13).',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (AIPD) se la geolocalizzazione controlla regolarmente i dipendenti.",
        en: 'Carry out the impact assessment (DPIA) if the geolocation regularly monitors employees.',
        de: 'Fuehren Sie die Folgenabschaetzung (DSFA) durch, wenn die Ortung die Beschaeftigten regelmaessig ueberwacht.',
        fr: "Realisez l'analyse d'impact (AIPD) si la geolocalisation controle regulierement les salaries.",
        es: 'Realice la evaluacion de impacto (EIPD) si la geolocalizacion controla regularmente a los empleados.',
        nl: 'Voer de effectbeoordeling (DPIA) uit als de geolocatie werknemers regelmatig monitort.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Configura il sistema: niente tracciamento permanente se e ammesso l'uso privato, disattivabile dal lavoratore.",
        en: 'Configure the system: no permanent tracking if private use is allowed, deactivatable by the worker.',
        de: 'Konfigurieren Sie das System: keine dauerhafte Ortung, wenn die private Nutzung erlaubt ist, durch den Arbeitnehmer deaktivierbar.',
        fr: "Configurez le systeme: pas de tracage permanent si l'usage prive est autorise, desactivable par le travailleur.",
        es: 'Configure el sistema: sin rastreo permanente si se permite el uso privado, desactivable por el trabajador.',
        nl: 'Configureer het systeem: geen permanente tracering als prive-gebruik is toegestaan, door de werknemer uit te schakelen.',
      },
    },
  ],

  contatti: [
    {
      ente: 'CNPD, reclami',
      portale: FONTE_CNPD_RECLAMO.url,
      urlFonte: FONTE_CNPD_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '2.800 €',
      en: '2,800 €',
      de: '2.800 €',
      fr: '2 800 €',
      es: '2.800 €',
      nl: '2.800 €',
    },
    casoCitato: {
      it: "CNPD, deliberazione 11FR/2021 dell'8 aprile 2021: sanzione a una societa per un sistema di geolocalizzazione dei veicoli di servizio gestito in modo illecito, con conservazione dei dati eccessiva (2 anni e 4 mesi), informazione carente ai lavoratori (art. 13) e sicurezza insufficiente (art. 32). Multa 2.800 euro.",
      en: 'CNPD, decision 11FR/2021 of 8 April 2021: a penalty against a company for a service-vehicle geolocation system operated unlawfully, with excessive data retention (2 years and 4 months), inadequate information to workers (art. 13) and insufficient security (art. 32). Fine of 2,800 euros.',
      de: 'CNPD, Beschluss 11FR/2021 vom 8. April 2021: Sanktion gegen ein Unternehmen wegen eines rechtswidrig betriebenen Ortungssystems fuer Dienstfahrzeuge, mit uebermaessiger Datenspeicherung (2 Jahre und 4 Monate), mangelhafter Information der Arbeitnehmer (Art. 13) und unzureichender Sicherheit (Art. 32). Geldbusse von 2.800 Euro.',
      fr: "CNPD, deliberation 11FR/2021 du 8 avril 2021: sanction a l'encontre d'une societe pour un systeme de geolocalisation des vehicules de service exploite de maniere illicite, avec une conservation des donnees excessive (2 ans et 4 mois), une information insuffisante des travailleurs (art. 13) et une securite insuffisante (art. 32). Amende de 2 800 euros.",
      es: 'CNPD, resolucion 11FR/2021 de 8 de abril de 2021: sancion a una empresa por un sistema de geolocalizacion de vehiculos de servicio gestionado de forma ilicita, con una conservacion de datos excesiva (2 anos y 4 meses), informacion deficiente a los trabajadores (art. 13) y seguridad insuficiente (art. 32). Multa de 2.800 euros.',
      nl: 'CNPD, besluit 11FR/2021 van 8 april 2021: een sanctie tegen een onderneming voor een onrechtmatig geexploiteerd geolocatiesysteem voor dienstvoertuigen, met buitensporige gegevensbewaring (2 jaar en 4 maanden), gebrekkige informatie aan de werknemers (art. 13) en onvoldoende beveiliging (art. 32). Boete van 2.800 euro.',
    },
    urlFonte: FONTE_CNPD_DECISIONE_11FR.url,
  },

  fonti: [
    FONTE_L261_1,
    FONTE_CNPD_GEOLOC,
    FONTE_CNPD_AIPD,
    FONTE_CNPD_DECISIONE_11FR,
    FONTE_CNPD_RECLAMO,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
