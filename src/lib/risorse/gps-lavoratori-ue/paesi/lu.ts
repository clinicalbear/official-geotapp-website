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
const FONTE_LOI_2018_L261_1 = {
  titolo:
    'Loi du 1er août 2018, art. 71 (nuovo art. L.261-1 del Code du travail) e art. 72 (abrogazione della legge del 2 agosto 2002), Legilux',
  url: 'https://legilux.public.lu/eli/etat/leg/loi/2018/08/01/a686/jo',
};
const FONTE_L261_1 = {
  titolo:
    'Code du travail, art. L.261-1 (sorveglianza dei lavoratori) - riproduzione CNPD',
  url: 'https://cnpd.public.lu/fr/dossiers-thematiques/surveillance/geolocalisation-vehicules/surveillance.html',
};
const FONTE_CNPD_GEOLOC = {
  titolo:
    'CNPD, geolocalizzazione dei veicoli: necessità e proporzionalità',
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
  titolo: 'CNPD, presentare un reclamo (Faire valoir vos droits)',
  url: 'https://cnpd.public.lu/fr/particuliers/faire-valoir.html',
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
    ente: 'CNPD (Commission nationale pour la protection des données)',
    portale: FONTE_CNPD_RECLAMO.url,
    urlFonte: FONTE_CNPD_RECLAMO.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "Il Lussemburgo ha un'unica autorità nazionale, la CNPD; nessuna ripartizione regionale.",
      en: 'Luxembourg has a single national authority, the CNPD; no regional division.',
      de: 'Luxemburg hat eine einzige nationale Behörde, die CNPD; keine regionale Aufteilung.',
      fr: 'Le Luxembourg a une seule autorité nationale, la CNPD ; aucune répartition régionale.',
      es: 'Luxemburgo tiene una única autoridad nacional, la CNPD; sin reparto regional.',
      nl: 'Luxemburg heeft een enkele nationale autoriteit, de CNPD; geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: "Informazione preventiva del comitato misto o della delegazione del personale (in mancanza, dell'ITM) e codecisione nei casi previsti (Code du travail art. L.261-1)",
        en: 'Prior information of the joint committee or staff delegation (failing that, the ITM) and codecision in the cases provided for (Code du travail art. L.261-1)',
        de: 'Vorherige Information des gemischten Ausschusses oder der Personaldelegation (ersatzweise der ITM) und Mitentscheidung in den vorgesehenen Fällen (Code du travail Art. L.261-1)',
        fr: 'Information préalable du comité mixte ou de la délégation du personnel (à défaut, de l’ITM) et codécision dans les cas prévus (Code du travail art. L.261-1)',
        es: 'Información previa al comité mixto o a la delegación del personal (en su defecto, a la ITM) y codecisión en los casos previstos (Code du travail art. L.261-1)',
        nl: 'Voorafgaande informatie aan het gemengd comité of de personeelsafvaardiging (bij ontstentenis de ITM) en medebeslissing in de voorziene gevallen (Code du travail art. L.261-1)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Prima di installare il monitoraggio il datore deve informare preventivamente il comitato misto o, in mancanza, la delegazione del personale o, in mancanza ancora, l'Inspection du travail et des mines (ITM), descrivendo finalità, modalità, durata di conservazione e impegnandosi formalmente a non usare i dati per altri scopi. La codecisione (art. L.211-8, L.414-9 e L.423-1) scatta solo per sicurezza e salute dei lavoratori, controllo della produzione o delle prestazioni quando è l'unico modo per determinare la retribuzione esatta, oppure orario mobile, salvo obbligo legale o regolamentare.",
        en: 'Before installing monitoring the employer must inform in advance the joint committee or, failing that, the staff delegation or, failing that, the Inspection du travail et des mines (ITM), describing the purpose, the arrangements and the retention period and formally undertaking not to use the data for other purposes. Codecision (art. L.211-8, L.414-9 and L.423-1) applies only for workers\' safety and health, production or performance control where it is the only way to determine exact pay, or flexible working hours, unless there is a legal or regulatory obligation.',
        de: 'Vor der Installation der Überwachung muss der Arbeitgeber vorab den gemischten Ausschuss oder, falls es ihn nicht gibt, die Personaldelegation oder, falls auch diese fehlt, die Inspection du travail et des mines (ITM) informieren; dabei sind Zweck, Modalitäten und Speicherdauer zu beschreiben und ist förmlich zuzusagen, die Daten nicht für andere Zwecke zu verwenden. Die Mitentscheidung (Art. L.211-8, L.414-9 und L.423-1) greift nur bei Sicherheit und Gesundheit der Arbeitnehmer, Produktions- oder Leistungskontrolle, wenn sie das einzige Mittel zur Bestimmung des genauen Lohns ist, oder bei gleitender Arbeitszeit, außer bei gesetzlicher oder regulatorischer Verpflichtung.',
        fr: 'Avant d’installer la surveillance, l’employeur doit informer préalablement le comité mixte ou, à défaut, la délégation du personnel ou, à défaut encore, l’Inspection du travail et des mines (ITM), en décrivant la finalité, les modalités et la durée de conservation et en s’engageant formellement à ne pas utiliser les données à d’autres fins. La codécision (art. L.211-8, L.414-9 et L.423-1) ne s’applique que pour la sécurité et la santé des salariés, le contrôle de la production ou des prestations lorsqu’il est le seul moyen de déterminer le salaire exact, ou l’horaire mobile, sauf obligation légale ou réglementaire.',
        es: 'Antes de instalar la supervisión, el empleador debe informar previamente al comité mixto o, en su defecto, a la delegación del personal o, en su defecto, a la Inspection du travail et des mines (ITM), describiendo la finalidad, las modalidades y el plazo de conservación y comprometiéndose formalmente a no usar los datos para otros fines. La codecisión (art. L.211-8, L.414-9 y L.423-1) solo se aplica para la seguridad y la salud de los trabajadores, el control de la producción o de las prestaciones cuando sea el único medio de determinar el salario exacto, o el horario móvil, salvo obligación legal o reglamentaria.',
        nl: 'Voordat monitoring wordt geïnstalleerd, moet de werkgever vooraf het gemengd comité of, bij ontstentenis, de personeelsafvaardiging of, bij ontstentenis daarvan, de Inspection du travail et des mines (ITM) informeren, met beschrijving van doel, werkwijze en bewaartermijn en een formele verbintenis de gegevens niet voor andere doeleinden te gebruiken. Medebeslissing (art. L.211-8, L.414-9 en L.423-1) geldt alleen voor veiligheid en gezondheid van de werknemers, controle van productie of prestaties als dat het enige middel is om het juiste loon vast te stellen, of glijdende werktijd, tenzij er een wettelijke of reglementaire verplichting is.',
      },
      fonte: FONTE_LOI_2018_L261_1,
    },
    {
      voce: {
        it: 'Possibilità per la delegazione o i lavoratori di chiedere un parere preventivo alla CNPD entro 15 giorni (effetto sospensivo)',
        en: 'Possibility for the delegation or the workers to request a prior opinion from the CNPD within 15 days (suspensive effect)',
        de: 'Möglichkeit für die Delegation oder die Arbeitnehmer, innerhalb von 15 Tagen eine vorherige Stellungnahme der CNPD anzufordern (aufschiebende Wirkung)',
        fr: 'Possibilité pour la délégation ou les travailleurs de demander un avis préalable à la CNPD dans un délai de 15 jours (effet suspensif)',
        es: 'Posibilidad de que la delegación o los trabajadores soliciten un dictamen previo a la CNPD en un plazo de 15 días (efecto suspensivo)',
        nl: 'Mogelijkheid voor de afvaardiging of de werknemers om binnen 15 dagen een voorafgaand advies aan de CNPD te vragen (schorsende werking)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "La delegazione del personale, o in sua assenza i lavoratori interessati, possono chiedere entro 15 giorni dall'informazione preventiva un parere alla CNPD, e la richiesta ha effetto sospensivo; la CNPD deve pronunciarsi entro un mese.",
        en: 'The staff delegation, or in its absence the workers concerned, may request an opinion from the CNPD within 15 days of the prior information, and the request has suspensive effect; the CNPD must give its opinion within one month.',
        de: 'Die Personaldelegation oder, falls keine besteht, die betroffenen Arbeitnehmer können innerhalb von 15 Tagen nach der vorherigen Information eine Stellungnahme der CNPD anfordern, und der Antrag hat aufschiebende Wirkung; die CNPD muss innerhalb eines Monats Stellung nehmen.',
        fr: 'La délégation du personnel, ou à défaut les travailleurs concernés, peuvent demander dans les 15 jours suivant l’information préalable un avis à la CNPD, et la demande a un effet suspensif ; la CNPD doit se prononcer dans le mois.',
        es: 'La delegación del personal, o en su ausencia los trabajadores afectados, pueden solicitar a la CNPD un dictamen en un plazo de 15 días desde la información previa, y la solicitud tiene efecto suspensivo; la CNPD debe pronunciarse en el plazo de un mes.',
        nl: 'De personeelsafvaardiging of, bij ontstentenis daarvan, de betrokken werknemers kunnen binnen 15 dagen na de voorafgaande informatie een advies aan de CNPD vragen, en het verzoek heeft schorsende werking; de CNPD moet binnen een maand advies uitbrengen.',
      },
      fonte: FONTE_LOI_2018_L261_1,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: 'Autorisation préalable d’une autorité avant l’installation',
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "La vecchia autorizzazione preventiva della CNPD è stata abolita col GDPR (legge del 2 agosto 2002 abrogata dalla legge del 1° agosto 2018, art. 72) ed è sostituita dall'informazione preventiva del personale e, nei casi previsti, dalla codecisione; resta l'obbligo di tenere il registro dei trattamenti.",
        en: 'The old prior authorisation from the CNPD was abolished with the GDPR (the law of 2 August 2002 was repealed by the law of 1 August 2018, art. 72) and replaced by prior information of staff representatives and, in the cases provided for, codecision; the obligation to keep the record of processing activities remains.',
        de: 'Die frühere vorherige Genehmigung der CNPD wurde mit der DSGVO abgeschafft (das Gesetz vom 2. August 2002 wurde durch das Gesetz vom 1. August 2018, Art. 72, aufgehoben) und durch die vorherige Information der Personalvertretung und, in den vorgesehenen Fällen, die Mitentscheidung ersetzt; die Pflicht, das Verzeichnis der Verarbeitungstätigkeiten zu führen, bleibt bestehen.',
        fr: 'L’ancienne autorisation préalable de la CNPD a été abolie avec le RGPD (la loi du 2 août 2002 a été abrogée par la loi du 1er août 2018, art. 72) et remplacée par l’information préalable de la représentation du personnel et, dans les cas prévus, la codécision ; l’obligation de tenir le registre des traitements subsiste.',
        es: 'La antigua autorización previa de la CNPD fue abolida con el RGPD (la ley de 2 de agosto de 2002 fue derogada por la ley de 1 de agosto de 2018, art. 72) y sustituida por la información previa a la representación del personal y, en los casos previstos, la codecisión; se mantiene la obligación de llevar el registro de las actividades de tratamiento.',
        nl: 'De oude voorafgaande toestemming van de CNPD is met de AVG afgeschaft (de wet van 2 augustus 2002 is opgeheven door de wet van 1 augustus 2018, art. 72) en vervangen door voorafgaande informatie van de personeelsvertegenwoordiging en, in de voorziene gevallen, medebeslissing; de verplichting om het register van verwerkingsactiviteiten bij te houden blijft bestaan.',
      },
      fonte: FONTE_LOI_2018_L261_1,
    },
    {
      voce: {
        it: "Base = una condizione dell'art. 6 GDPR e informazione individuale; niente tracciamento permanente se è ammesso l'uso privato, disattivabile dal lavoratore",
        en: 'Basis = a condition of GDPR art. 6 and individual information; no permanent tracking if private use is allowed, deactivatable by the worker',
        de: 'Grundlage = eine Bedingung von Art. 6 DSGVO und individuelle Information; keine dauerhafte Ortung, wenn die private Nutzung erlaubt ist, durch den Arbeitnehmer deaktivierbar',
        fr: 'Base = une condition de l’art. 6 RGPD et information individuelle ; pas de traçage permanent si l’usage privé est autorisé, désactivable par le travailleur',
        es: 'Base = una condición del art. 6 RGPD e información individual; sin rastreo permanente si se permite el uso privado, desactivable por el trabajador',
        nl: 'Grondslag = een voorwaarde van art. 6 AVG en individuele informatie; geen permanente tracering als prive-gebruik is toegestaan, door de werknemer uit te schakelen',
      },
      risposta: 'si',
      dettaglio: {
        it: "Serve una base dell'art. 6 GDPR e l'informazione individuale (art. 13); il datore non può sorvegliare fuori dall'orario, e se è ammesso l'uso privato del veicolo il sistema non può restare permanente e il lavoratore deve poterlo disattivare.",
        en: 'A basis under GDPR art. 6 and individual information (art. 13) are required; the employer cannot monitor outside working hours, and if private use of the vehicle is allowed the system cannot remain permanent and the worker must be able to deactivate it.',
        de: 'Erforderlich sind eine Grundlage nach Art. 6 DSGVO und die individuelle Information (Art. 13); der Arbeitgeber darf nicht außerhalb der Arbeitszeit überwachen, und wenn die private Nutzung des Fahrzeugs erlaubt ist, darf das System nicht dauerhaft bleiben und der Arbeitnehmer muss es deaktivieren können.',
        fr: 'Une base au titre de l’art. 6 RGPD et l’information individuelle (art. 13) sont nécessaires ; l’employeur ne peut pas surveiller en dehors des heures de travail, et si l’usage privé du véhicule est autorisé, le système ne peut pas rester permanent et le travailleur doit pouvoir le désactiver.',
        es: 'Se requiere una base del art. 6 RGPD y la información individual (art. 13); el empleador no puede vigilar fuera del horario, y si se permite el uso privado del vehículo el sistema no puede permanecer permanente y el trabajador debe poder desactivarlo.',
        nl: 'Een grondslag op grond van art. 6 AVG en de individuele informatie (art. 13) zijn vereist; de werkgever mag niet buiten werktijd monitoren, en als prive-gebruik van het voertuig is toegestaan, mag het systeem niet permanent blijven en moet de werknemer het kunnen uitschakelen.',
      },
      fonte: FONTE_CNPD_GEOLOC,
    },
    {
      voce: {
        it: "Valutazione d'impatto (AIPD) per la geolocalizzazione che controlla regolarmente o sistematicamente i dipendenti (es. per il tempo di lavoro)",
        en: 'Impact assessment (DPIA) for geolocation that regularly or systematically monitors employees (e.g. for working time)',
        de: 'Datenschutz-Folgenabschätzung (DSFA) für die Ortung, die Beschäftigte regelmäßig oder systematisch überwacht (z. B. für die Arbeitszeit)',
        fr: 'Analyse d’impact (AIPD) pour la géolocalisation qui contrôle régulièrement ou systématiquement les salariés (par exemple pour le temps de travail)',
        es: 'Evaluación de impacto (EIPD) para la geolocalizacion que controla regular o sistemáticamente a los empleados (por ejemplo, para el tiempo de trabajo)',
        nl: 'Effectbeoordeling (DPIA) voor geolocatie die werknemers regelmatig of stelselmatig monitort (bijvoorbeeld voor de arbeidstijd)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Per la CNPD serve una valutazione d'impatto se la geolocalizzazione ha lo scopo di controllare regolarmente e sistematicamente i dipendenti o ne comporta una sorveglianza sistematica (per esempio per seguire il tempo di lavoro). Se serve solo a ottimizzare i processi di lavoro senza incidere sui dipendenti, non è necessariamente obbligatoria.",
        en: 'According to the CNPD an impact assessment is required if geolocation is meant to monitor employees regularly and systematically or results in their systematic surveillance (for example to track working time). If it only serves to optimise work processes without affecting employees, it is not necessarily mandatory.',
        de: 'Nach Ansicht der CNPD ist eine Folgenabschätzung erforderlich, wenn die Ortung der regelmäßigen und systematischen Kontrolle der Beschäftigten dient oder eine systematische Überwachung zur Folge hat (z. B. zur Erfassung der Arbeitszeit). Dient sie nur der Optimierung von Arbeitsabläufen, ohne die Beschäftigten zu betreffen, ist sie nicht zwingend erforderlich.',
        fr: 'Selon la CNPD, une analyse d’impact est requise si la géolocalisation a pour finalité le contrôle régulier et systématique des salariés ou entraîne leur surveillance systématique (par exemple pour suivre le temps de travail). Si elle sert seulement à optimiser les processus de travail sans affecter les salariés, elle n’est pas nécessairement obligatoire.',
        es: 'Según la CNPD, se requiere una evaluación de impacto si la geolocalización tiene por finalidad el control regular y sistemático de los empleados o supone su vigilancia sistemática (por ejemplo, para seguir el tiempo de trabajo). Si solo sirve para optimizar procesos de trabajo sin afectar a los empleados, no es necesariamente obligatoria.',
        nl: 'Volgens de CNPD is een effectbeoordeling vereist als geolocatie bedoeld is om werknemers regelmatig en stelselmatig te controleren of tot stelselmatig toezicht leidt (bijvoorbeeld om de arbeidstijd te volgen). Dient ze alleen om werkprocessen te optimaliseren zonder de werknemers te raken, dan is ze niet noodzakelijk verplicht.',
      },
      fonte: FONTE_CNPD_AIPD,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: "Informa preventivamente il comitato misto o la delegazione del personale (in mancanza, l'ITM) e, nei casi previsti, attiva la codecisione (art. L.261-1).",
        en: 'Inform the joint committee or staff delegation (failing that, the ITM) in advance and, in the cases provided for, activate codecision (art. L.261-1).',
        de: 'Informieren Sie den gemischten Ausschuss oder die Personaldelegation (ersatzweise die ITM) vorab und aktivieren Sie in den vorgesehenen Fällen die Mitentscheidung (Art. L.261-1).',
        fr: 'Informez préalablement le comité mixte ou la délégation du personnel (à défaut, l’ITM) et, dans les cas prévus, activez la codécision (art. L.261-1).',
        es: 'Informe previamente al comité mixto o a la delegación del personal (en su defecto, a la ITM) y, en los casos previstos, active la codecisión (art. L.261-1).',
        nl: 'Informeer het gemengd comité of de personeelsafvaardiging (bij ontstentenis de ITM) vooraf en activeer in de voorziene gevallen de medebeslissing (art. L.261-1).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Lascia alla delegazione o ai lavoratori la possibilità di chiedere un parere alla CNPD entro 15 giorni (effetto sospensivo).',
        en: 'Allow the delegation or the workers the possibility to request an opinion from the CNPD within 15 days (suspensive effect).',
        de: 'Geben Sie der Delegation oder den Arbeitnehmern die Möglichkeit, innerhalb von 15 Tagen eine Stellungnahme der CNPD anzufordern (aufschiebende Wirkung).',
        fr: 'Laissez à la délégation ou aux travailleurs la possibilité de demander un avis à la CNPD dans un délai de 15 jours (effet suspensif).',
        es: 'Deje a la delegación o a los trabajadores la posibilidad de solicitar un dictamen a la CNPD en un plazo de 15 días (efecto suspensivo).',
        nl: 'Geef de afvaardiging of de werknemers de mogelijkheid om binnen 15 dagen een advies aan de CNPD te vragen (schorsende werking).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Individua una base giuridica dell'art. 6 GDPR e informa individualmente i lavoratori (art. 13).",
        en: 'Identify a legal basis under GDPR art. 6 and inform the workers individually (art. 13).',
        de: 'Bestimmen Sie eine Rechtsgrundlage nach Art. 6 DSGVO und informieren Sie die Arbeitnehmer individuell (Art. 13).',
        fr: 'Déterminez une base juridique au titre de l’art. 6 RGPD et informez individuellement les travailleurs (art. 13).',
        es: 'Determine una base jurídica del art. 6 RGPD e informe individualmente a los trabajadores (art. 13).',
        nl: 'Bepaal een rechtsgrondslag op grond van art. 6 AVG en informeer de werknemers individueel (art. 13).',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (AIPD) se la geolocalizzazione controlla regolarmente i dipendenti.",
        en: 'Carry out the impact assessment (DPIA) if the geolocation regularly monitors employees.',
        de: 'Führen Sie die Folgenabschätzung (DSFA) durch, wenn die Ortung die Beschäftigten regelmäßig überwacht.',
        fr: 'Réalisez l’analyse d’impact (AIPD) si la géolocalisation contrôle régulièrement les salariés.',
        es: 'Realice la evaluación de impacto (EIPD) si la geolocalizacion controla regularmente a los empleados.',
        nl: 'Voer de effectbeoordeling (DPIA) uit als de geolocatie werknemers regelmatig monitort.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Configura il sistema: niente tracciamento permanente se è ammesso l'uso privato, disattivabile dal lavoratore.",
        en: 'Configure the system: no permanent tracking if private use is allowed, deactivatable by the worker.',
        de: 'Konfigurieren Sie das System: keine dauerhafte Ortung, wenn die private Nutzung erlaubt ist, durch den Arbeitnehmer deaktivierbar.',
        fr: 'Configurez le système : pas de traçage permanent si l’usage privé est autorisé, désactivable par le travailleur.',
        es: 'Configure el sistema: sin rastreo permanente si se permite el uso privado, desactivable por el trabajador.',
        nl: 'Configureer het systeem: geen permanente tracering als prive-gebruik is toegestaan, door de werknemer uit te schakelen.',
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
      en: 'EUR 2,800',
      de: '2.800 €',
      fr: '2 800 €',
      es: '2.800 €',
      nl: '2.800 €',
    },
    casoCitato: {
      it: "CNPD, deliberazione 11FR/2021 dell'8 aprile 2021: sanzione a una società per un sistema di geolocalizzazione dei veicoli di servizio gestito in modo illecito, con dati conservati troppo a lungo (2 anni e 4 mesi; art. 5, par. 1, lett. e) e con un'informazione carente ai lavoratori (art. 13). La multa di 2.800 euro sanziona questi due punti; la sicurezza insufficiente (art. 32) ha dato luogo solo a un'ingiunzione.",
      en: 'CNPD, decision 11FR/2021 of 8 April 2021: a penalty against a company for a service-vehicle geolocation system operated unlawfully, with excessive data retention (2 years and 4 months, art. 5(1)(e)) and inadequate information to workers (art. 13). The 2,800 euro fine penalises these two points; insufficient security (art. 32) led only to an injunction.',
      de: 'CNPD, Beschluss 11FR/2021 vom 8. April 2021: Sanktion gegen ein Unternehmen wegen eines rechtswidrig betriebenen Ortungssystems für Dienstfahrzeuge, mit übermäßiger Datenspeicherung (2 Jahre und 4 Monate, Art. 5 Abs. 1 lit. e) und mangelhafter Information der Arbeitnehmer (Art. 13). Die Geldbuße von 2.800 Euro ahndet diese beiden Punkte; die unzureichende Sicherheit (Art. 32) führte nur zu einer Anordnung.',
      fr: 'CNPD, délibération 11FR/2021 du 8 avril 2021 : sanction à l’encontre d’une société pour un système de géolocalisation des véhicules de service exploité de manière illicite, avec une conservation des données excessive (2 ans et 4 mois, art. 5, par. 1, point e) et une information insuffisante des travailleurs (art. 13). L’amende de 2 800 euros sanctionne ces deux points ; la sécurité insuffisante (art. 32) n’a donné lieu qu’à une injonction.',
      es: 'CNPD, resolución 11FR/2021 de 8 de abril de 2021: sanción a una empresa por un sistema de geolocalizacion de vehículos de servicio gestionado de forma ilícita, con una conservación de datos excesiva (2 años y 4 meses, art. 5, apartado 1, letra e) e información deficiente a los trabajadores (art. 13). La multa de 2.800 euros sanciona estos dos puntos; la seguridad insuficiente (art. 32) solo dio lugar a un requerimiento.',
      nl: 'CNPD, besluit 11FR/2021 van 8 april 2021: een sanctie tegen een onderneming voor een onrechtmatig geexploiteerd geolocatiesysteem voor dienstvoertuigen, met buitensporige gegevensbewaring (2 jaar en 4 maanden, art. 5, lid 1, onder e) en gebrekkige informatie aan de werknemers (art. 13). De boete van 2.800 euro bestraft deze twee punten; de onvoldoende beveiliging (art. 32) leidde alleen tot een bevel.',
    },
    urlFonte: FONTE_CNPD_DECISIONE_11FR.url,
    tipoImporto: 'caso-gps',
  },

  fonti: [
    FONTE_LOI_2018_L261_1,
    FONTE_L261_1,
    FONTE_CNPD_GEOLOC,
    FONTE_CNPD_AIPD,
    FONTE_CNPD_DECISIONE_11FR,
    FONTE_CNPD_RECLAMO,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
