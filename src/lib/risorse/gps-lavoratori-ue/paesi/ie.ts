/**
 * Scheda-paese Irlanda per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * guida del DPC sul tracciamento dei veicoli aziendali (maggio 2020), guida del
 * DPC sulla protezione dei dati sul luogo di lavoro, lista DPC dei trattamenti
 * che richiedono una DPIA, pagina DPC sulla consultazione preventiva, pagina DPC
 * sui reclami, decisione DPC contro Limerick City and County Council (dicembre
 * 2021) e GDPR.
 *
 * L'Irlanda ha un'unica autorita nazionale, la Data Protection Commission (DPC):
 * nessuna ripartizione regionale. Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_DPC_VEICOLI = {
  titolo: 'DPC, guida sul tracciamento dei veicoli aziendali (maggio 2020)',
  url: 'https://www.dataprotection.ie/sites/default/files/uploads/2020-09/Employer%20Vehicle%20Tracking_May2020.pdf',
};
const FONTE_DPC_LAVORO = {
  titolo: 'DPC, protezione dei dati sul luogo di lavoro',
  url: 'https://www.dataprotection.ie/en/dpc-guidance/data-protection-in-the-workplace-employer-guidance',
};
const FONTE_DPC_DPIA = {
  titolo: 'DPC, lista dei trattamenti che richiedono una DPIA',
  url: 'https://www.dataprotection.ie/sites/default/files/uploads/2018-11/Data-Protection-Impact-Assessment.pdf',
};
const FONTE_DPC_CONSULTAZIONE = {
  titolo: 'DPC, consultazione preventiva',
  url: 'https://www.dataprotection.ie/en/organisations/know-your-obligations/data-protection-impact-assessments/prior-consultation',
};
const FONTE_DPC_RECLAMI = {
  titolo: 'DPC, presentare un reclamo',
  url: 'https://www.dataprotection.ie/en/individuals/exercising-your-rights/complaints-handling-investigations-and-enforcement-individuals',
};
const FONTE_DPC_LIMERICK = {
  titolo:
    'DPC, decisione Limerick City and County Council (dicembre 2021)',
  url: 'https://www.dataprotection.ie/en/dpc-guidance/law/decisions/inquiry-into-limerick-city-and-county-council-december-2021',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const irlanda: SchedaPaese = {
  codiceISO: 'IE',
  slugCanonico: 'irlanda',
  nome: 'Irlanda',
  nomi: {
    it: 'Irlanda',
    en: 'Ireland',
    'en-us': 'Ireland',
    'en-gb': 'Ireland',
    'en-au': 'Ireland',
    'en-ie': 'Ireland',
    'en-ca': 'Ireland',
    de: 'Irland',
    nl: 'Ierland',
    fr: 'Irlande',
    es: 'Irlanda',
    pt: 'Irlanda',
    da: 'Irland',
    sv: 'Irland',
    nb: 'Irland',
    ru: 'Ирландия',
  },
  bandiera: '🇮🇪',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Data Protection Commission (DPC)',
    portale: FONTE_DPC_RECLAMI.url,
    urlFonte: FONTE_DPC_RECLAMI.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "L'Irlanda ha un'unica autorita nazionale, il DPC; nessuna ripartizione regionale.",
      en: 'Ireland has a single national authority, the DPC; no regional subdivision.',
      de: 'Irland hat eine einzige nationale Behoerde, die DPC; keine regionale Aufteilung.',
      fr: "L'Irlande dispose d'une seule autorite nationale, la DPC; aucune repartition regionale.",
      es: 'Irlanda tiene una unica autoridad nacional, la DPC; sin reparto regional.',
      nl: 'Ierland heeft een enkele nationale autoriteit, de DPC; geen regionale onderverdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione preventiva dei lavoratori sull\'esistenza, il funzionamento e tutte le finalita del tracciamento (art. 13 GDPR)',
        en: 'Prior notice to workers of the existence, operation and all purposes of the tracking (art. 13 GDPR)',
        de: 'Vorherige Information der Arbeitnehmer ueber Bestehen, Funktionsweise und alle Zwecke der Ortung (Art. 13 DSGVO)',
        fr: "Information prealable des travailleurs sur l'existence, le fonctionnement et toutes les finalites du suivi (art. 13 RGPD)",
        es: 'Informacion previa a los trabajadores sobre la existencia, el funcionamiento y todas las finalidades del seguimiento (art. 13 RGPD)',
        nl: 'Voorafgaande informatie aan werknemers over het bestaan, de werking en alle doeleinden van de tracking (art. 13 AVG)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il lavoratore va informato prima dell'attivazione dell'esistenza del tracciamento, di come funziona e di tutte le finalita.",
        en: 'The worker must be informed, before activation, of the existence of the tracking, how it works and all its purposes.',
        de: 'Der Arbeitnehmer ist vor der Aktivierung ueber das Bestehen der Ortung, ihre Funktionsweise und alle Zwecke zu informieren.',
        fr: "Le travailleur doit etre informe, avant l'activation, de l'existence du suivi, de son fonctionnement et de toutes ses finalites.",
        es: 'El trabajador debe ser informado, antes de la activacion, de la existencia del seguimiento, de como funciona y de todas sus finalidades.',
        nl: 'De werknemer moet voor de activering worden geinformeerd over het bestaan van de tracking, hoe deze werkt en alle doeleinden ervan.',
      },
      fonte: FONTE_DPC_VEICOLI,
    },
    {
      voce: {
        it: 'Consenso o accordo sindacale obbligatorio prima di installare',
        en: 'Mandatory consent or trade-union agreement before installation',
        de: 'Obligatorische Einwilligung oder Gewerkschaftsvereinbarung vor der Installation',
        fr: "Consentement ou accord syndical obligatoire avant l'installation",
        es: 'Consentimiento o acuerdo sindical obligatorio antes de instalar',
        nl: 'Verplichte toestemming of vakbondsovereenkomst voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "L'Irlanda non ha un meccanismo di consenso sindacale che condiziona il monitoraggio; il controllo passa per base giuridica, trasparenza, proporzionalita e DPIA. Il consenso del lavoratore e' valido solo in casi eccezionali.",
        en: 'Ireland has no trade-union consent mechanism that conditions monitoring; control runs through legal basis, transparency, proportionality and DPIA. The worker\'s consent is valid only in exceptional cases.',
        de: 'Irland kennt keinen Mechanismus der Gewerkschaftszustimmung, der die Ueberwachung an Bedingungen knuepft; die Kontrolle laeuft ueber Rechtsgrundlage, Transparenz, Verhaeltnismaessigkeit und DSFA. Die Einwilligung des Arbeitnehmers ist nur in Ausnahmefaellen gueltig.',
        fr: "L'Irlande ne dispose d'aucun mecanisme de consentement syndical conditionnant la surveillance; le controle passe par la base legale, la transparence, la proportionnalite et l'AIPD. Le consentement du travailleur n'est valable que dans des cas exceptionnels.",
        es: 'Irlanda no cuenta con un mecanismo de consentimiento sindical que condicione la vigilancia; el control pasa por la base juridica, la transparencia, la proporcionalidad y la EIPD. El consentimiento del trabajador solo es valido en casos excepcionales.',
        nl: 'Ierland kent geen mechanisme van vakbondstoestemming dat de monitoring bepaalt; de controle verloopt via rechtsgrondslag, transparantie, evenredigheid en DPIA. De toestemming van de werknemer is alleen in uitzonderlijke gevallen geldig.',
      },
      fonte: FONTE_DPC_VEICOLI,
    },
    {
      voce: {
        it: 'Autorizzazione preventiva di un\'autorita prima di installare',
        en: "Prior authorisation from an authority before installation",
        de: 'Vorherige Genehmigung einer Behoerde vor der Installation',
        fr: "Autorisation prealable d'une autorite avant l'installation",
        es: 'Autorizacion previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva del DPC; l'autorita va consultata prima solo se la DPIA evidenzia un rischio elevato non mitigabile.",
        en: 'No prior authorisation from the DPC is needed; the authority must be consulted beforehand only if the DPIA reveals a high risk that cannot be mitigated.',
        de: 'Eine vorherige Genehmigung der DPC ist nicht erforderlich; die Behoerde ist nur dann vorab zu konsultieren, wenn die DSFA ein hohes, nicht beherrschbares Risiko aufzeigt.',
        fr: "Aucune autorisation prealable de la DPC n'est requise; l'autorite ne doit etre consultee au prealable que si l'AIPD revele un risque eleve impossible a attenuer.",
        es: 'No se necesita una autorizacion previa de la DPC; la autoridad debe consultarse de antemano solo si la EIPD revela un riesgo elevado que no puede mitigarse.',
        nl: 'Voorafgaande toestemming van de DPC is niet nodig; de autoriteit hoeft vooraf alleen te worden geraadpleegd als de DPIA een hoog risico aantoont dat niet kan worden beperkt.',
      },
      fonte: FONTE_DPC_CONSULTAZIONE,
    },
    {
      voce: {
        it: 'Base giuridica valida (di norma interesse legittimo, non il consenso) con bilanciamento e diritto di opposizione',
        en: 'Valid legal basis (usually legitimate interest, not consent) with balancing test and right to object',
        de: 'Gueltige Rechtsgrundlage (in der Regel berechtigtes Interesse, nicht Einwilligung) mit Abwaegung und Widerspruchsrecht',
        fr: "Base legale valable (en regle generale l'interet legitime, non le consentement) avec mise en balance et droit d'opposition",
        es: 'Base juridica valida (por lo general interes legitimo, no el consentimiento) con ponderacion y derecho de oposicion',
        nl: 'Geldige rechtsgrondslag (gewoonlijk gerechtvaardigd belang, niet toestemming) met afweging en recht van bezwaar',
      },
      risposta: 'si',
      dettaglio: {
        it: "La base usuale e' l'interesse legittimo (art. 6.1.f), che deve essere strettamente necessario e proporzionato e bilanciato coi diritti del lavoratore, soggetto al diritto di opposizione (art. 21).",
        en: "The usual basis is legitimate interest (art. 6(1)(f)), which must be strictly necessary and proportionate and balanced against the worker's rights, subject to the right to object (art. 21).",
        de: 'Die uebliche Grundlage ist das berechtigte Interesse (Art. 6 Abs. 1 lit. f), das unbedingt erforderlich und verhaeltnismaessig sein und gegen die Rechte des Arbeitnehmers abgewogen werden muss, vorbehaltlich des Widerspruchsrechts (Art. 21).',
        fr: "La base habituelle est l'interet legitime (art. 6, par. 1, point f), qui doit etre strictement necessaire et proportionne et mis en balance avec les droits du travailleur, sous reserve du droit d'opposition (art. 21).",
        es: 'La base habitual es el interes legitimo (art. 6.1.f), que debe ser estrictamente necesario y proporcionado y ponderado con los derechos del trabajador, sujeto al derecho de oposicion (art. 21).',
        nl: 'De gebruikelijke grondslag is het gerechtvaardigd belang (art. 6, lid 1, onder f), dat strikt noodzakelijk en evenredig moet zijn en moet worden afgewogen tegen de rechten van de werknemer, onder voorbehoud van het recht van bezwaar (art. 21).',
      },
      fonte: FONTE_DPC_VEICOLI,
    },
    {
      voce: {
        it: 'Divieto di usare il tracciamento per il monitoraggio generale del personale; opt-out fuori orario',
        en: 'Prohibition on using the tracking for general monitoring of staff; opt-out outside working hours',
        de: 'Verbot, die Ortung zur allgemeinen Ueberwachung des Personals zu nutzen; Opt-out ausserhalb der Arbeitszeit',
        fr: "Interdiction d'utiliser le suivi pour une surveillance generale du personnel; option de desactivation en dehors des heures de travail",
        es: 'Prohibicion de usar el seguimiento para la vigilancia general del personal; opcion de exclusion fuera del horario laboral',
        nl: 'Verbod om de tracking te gebruiken voor algemene monitoring van het personeel; opt-out buiten werktijd',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il tracciamento non puo' servire a monitorare in generale il personale; e' improbabile che sia lecito fuori orario, e serve un opt-out (interruttore privacy) se il veicolo e' usato anche privatamente.",
        en: 'The tracking cannot be used to monitor staff in general; it is unlikely to be lawful outside working hours, and an opt-out (privacy switch) is needed if the vehicle is also used privately.',
        de: 'Die Ortung darf nicht der allgemeinen Ueberwachung des Personals dienen; ausserhalb der Arbeitszeit ist sie kaum rechtmaessig, und es ist ein Opt-out (Privatsphaere-Schalter) erforderlich, wenn das Fahrzeug auch privat genutzt wird.',
        fr: "Le suivi ne peut pas servir a surveiller le personnel de maniere generale; il est peu probable qu'il soit licite en dehors des heures de travail, et une option de desactivation (interrupteur de confidentialite) est necessaire si le vehicule est aussi utilise a titre prive.",
        es: 'El seguimiento no puede servir para vigilar al personal en general; es poco probable que sea licito fuera del horario laboral, y se necesita una opcion de exclusion (interruptor de privacidad) si el vehiculo tambien se usa de forma privada.',
        nl: 'De tracking mag niet dienen om het personeel in het algemeen te monitoren; buiten werktijd is dit waarschijnlijk niet rechtmatig, en er is een opt-out (privacyschakelaar) nodig als het voertuig ook prive wordt gebruikt.',
      },
      fonte: FONTE_DPC_VEICOLI,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) obbligatoria per il monitoraggio sistematico della localizzazione",
        en: 'Data protection impact assessment (DPIA) mandatory for systematic location monitoring',
        de: 'Datenschutz-Folgenabschaetzung (DSFA) bei systematischer Standortueberwachung verpflichtend',
        fr: "Analyse d'impact (AIPD) obligatoire pour la surveillance systematique de la localisation",
        es: 'Evaluacion de impacto (EIPD) obligatoria para la vigilancia sistematica de la localizacion',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) verplicht bij systematische locatiemonitoring',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista DPC rende obbligatoria la DPIA per il monitoraggio, il tracciamento o l'osservazione sistematica della posizione o del comportamento delle persone.",
        en: 'The DPC list makes a DPIA mandatory for the systematic monitoring, tracking or observation of the location or behaviour of individuals.',
        de: 'Die DPC-Liste macht die DSFA fuer die systematische Ueberwachung, Verfolgung oder Beobachtung des Standorts oder Verhaltens von Personen verpflichtend.',
        fr: "La liste de la DPC rend l'AIPD obligatoire pour la surveillance, le suivi ou l'observation systematique de la localisation ou du comportement des personnes.",
        es: 'La lista de la DPC hace obligatoria la EIPD para la vigilancia, el seguimiento o la observacion sistematica de la ubicacion o el comportamiento de las personas.',
        nl: 'De DPC-lijst maakt een DPIA verplicht voor de systematische monitoring, tracking of observatie van de locatie of het gedrag van personen.',
      },
      fonte: FONTE_DPC_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Informa i lavoratori, prima dell\'attivazione, di esistenza, funzionamento e finalita del tracciamento.',
        en: 'Inform workers, before activation, of the existence, operation and purposes of the tracking.',
        de: 'Informieren Sie die Arbeitnehmer vor der Aktivierung ueber Bestehen, Funktionsweise und Zwecke der Ortung.',
        fr: "Informez les travailleurs, avant l'activation, de l'existence, du fonctionnement et des finalites du suivi.",
        es: 'Informe a los trabajadores, antes de la activacion, de la existencia, el funcionamiento y las finalidades del seguimiento.',
        nl: 'Informeer de werknemers voor de activering over het bestaan, de werking en de doeleinden van de tracking.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Individua una base giuridica valida (di norma interesse legittimo) e documenta il bilanciamento.',
        en: 'Identify a valid legal basis (usually legitimate interest) and document the balancing test.',
        de: 'Bestimmen Sie eine gueltige Rechtsgrundlage (in der Regel berechtigtes Interesse) und dokumentieren Sie die Abwaegung.',
        fr: "Determinez une base legale valable (en regle generale l'interet legitime) et documentez la mise en balance.",
        es: 'Determine una base juridica valida (por lo general interes legitimo) y documente la ponderacion.',
        nl: 'Bepaal een geldige rechtsgrondslag (gewoonlijk gerechtvaardigd belang) en documenteer de afweging.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA): obbligatoria per il monitoraggio sistematico della localizzazione.",
        en: 'Carry out the data protection impact assessment (DPIA): mandatory for systematic location monitoring.',
        de: 'Fuehren Sie die Datenschutz-Folgenabschaetzung (DSFA) durch: verpflichtend bei systematischer Standortueberwachung.',
        fr: "Realisez l'analyse d'impact (AIPD): obligatoire pour la surveillance systematique de la localisation.",
        es: 'Realice la evaluacion de impacto (EIPD): obligatoria para la vigilancia sistematica de la localizacion.',
        nl: 'Voer de gegevensbeschermingseffectbeoordeling (DPIA) uit: verplicht bij systematische locatiemonitoring.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Limita il tracciamento allo stretto necessario e all'orario di lavoro; prevedi un opt-out per l'uso privato.",
        en: 'Limit the tracking to what is strictly necessary and to working hours; provide an opt-out for private use.',
        de: 'Beschraenken Sie die Ortung auf das unbedingt Notwendige und auf die Arbeitszeit; sehen Sie ein Opt-out fuer die private Nutzung vor.',
        fr: "Limitez le suivi au strict necessaire et aux heures de travail; prevoyez une option de desactivation pour l'usage prive.",
        es: 'Limite el seguimiento a lo estrictamente necesario y al horario laboral; prevea una opcion de exclusion para el uso privado.',
        nl: 'Beperk de tracking tot het strikt noodzakelijke en tot de werktijd; voorzie in een opt-out voor prive-gebruik.',
      },
    },
    {
      passo: 5,
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
      ente: 'DPC, reclami',
      portale: FONTE_DPC_RECLAMI.url,
      urlFonte: FONTE_DPC_RECLAMI.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino a 20 milioni di euro o 4% del fatturato (GDPR)',
      en: 'up to 20 million euro or 4% of turnover (GDPR)',
      de: 'bis zu 20 Millionen Euro oder 4 % des Umsatzes (DSGVO)',
      fr: "jusqu'a 20 millions d'euros ou 4 % du chiffre d'affaires (RGPD)",
      es: 'hasta 20 millones de euros o el 4 % del volumen de negocios (RGPD)',
      nl: 'tot 20 miljoen euro of 4% van de omzet (AVG)',
    },
    casoCitato: {
      it: "Non risulta una multa del DPC specifica per il GPS sui dipendenti. Caso faro affine: DPC contro Limerick City and County Council (dicembre 2021), 110.000 euro per trattamento senza base giuridica tramite telecamere, lettura targhe e droni (ente pubblico, non dipendenti). La giurisprudenza (Doolin) ha inoltre stabilito che i dati raccolti per la sicurezza non possono essere riusati per monitorare e sanzionare i dipendenti.",
      en: 'There is no record of a DPC fine specifically for GPS on employees. Relevant landmark case: DPC v Limerick City and County Council (December 2021), 110,000 euro for processing without a legal basis via cameras, automatic number-plate reading and drones (a public body, not employees). Case law (Doolin) further established that data collected for security cannot be reused to monitor and discipline employees.',
      de: 'Es ist kein Bussgeld der DPC speziell fuer GPS bei Beschaeftigten bekannt. Einschlaegiger Leitfall: DPC gegen Limerick City and County Council (Dezember 2021), 110.000 Euro fuer eine Verarbeitung ohne Rechtsgrundlage mittels Kameras, Kennzeichenerfassung und Drohnen (eine oeffentliche Stelle, keine Beschaeftigten). Die Rechtsprechung (Doolin) hat zudem festgestellt, dass zu Sicherheitszwecken erhobene Daten nicht zur Ueberwachung und Sanktionierung von Beschaeftigten weiterverwendet werden duerfen.',
      fr: "Aucune amende de la DPC visant specifiquement le GPS sur les salaries n'est connue. Affaire de reference pertinente: DPC contre Limerick City and County Council (decembre 2021), 110 000 euros pour un traitement sans base legale au moyen de cameras, de lecture automatique des plaques et de drones (un organisme public, et non des salaries). La jurisprudence (Doolin) a en outre etabli que les donnees collectees a des fins de securite ne peuvent etre reutilisees pour surveiller et sanctionner les salaries.",
      es: 'No consta una multa de la DPC especifica por el GPS sobre los empleados. Caso de referencia afin: DPC contra Limerick City and County Council (diciembre de 2021), 110.000 euros por un tratamiento sin base juridica mediante camaras, lectura de matriculas y drones (un organismo publico, no empleados). La jurisprudencia (Doolin) ha establecido ademas que los datos recogidos por seguridad no pueden reutilizarse para vigilar y sancionar a los empleados.',
      nl: 'Er is geen boete van de DPC bekend die specifiek betrekking heeft op gps bij werknemers. Relevante richtinggevende zaak: DPC tegen Limerick City and County Council (december 2021), 110.000 euro voor een verwerking zonder rechtsgrondslag via camera\'s, kentekenherkenning en drones (een overheidsinstantie, geen werknemers). De rechtspraak (Doolin) heeft bovendien bepaald dat gegevens die voor beveiliging zijn verzameld, niet mogen worden hergebruikt om werknemers te monitoren en te bestraffen.',
    },
    urlFonte: FONTE_DPC_LIMERICK.url,
  },

  fonti: [
    FONTE_DPC_VEICOLI,
    FONTE_DPC_LAVORO,
    FONTE_DPC_DPIA,
    FONTE_DPC_CONSULTAZIONE,
    FONTE_DPC_RECLAMI,
    FONTE_DPC_LIMERICK,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
