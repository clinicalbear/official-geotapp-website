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
  titolo: 'DPC, pagina sul tracciamento dei veicoli dei dipendenti (aggiornata a maggio 2026)',
  url: 'https://www.dataprotection.ie/en/dpc-guidance/employer-vehicle-tracking',
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
  url: 'https://www.dataprotection.ie/en/dpc-guidance/decisions/inquiry-limerick-city-and-county-council',
};
const FONTE_DPC_DOOLIN = {
  titolo: 'DPC, sentenza Doolin v. DPC (High Court, febbraio 2020)',
  url: 'https://www.dataprotection.ie/en/dpc-guidance/law/judgments/doolin-v-dpc',
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
    verificatoIl: '2026-09-30',
    note: {
      it: "L'Irlanda ha un'unica autorità nazionale, il DPC; nessuna ripartizione regionale.",
      en: 'Ireland has a single national authority, the DPC; no regional subdivision.',
      de: 'Irland hat eine einzige nationale Behörde, die DPC; keine regionale Aufteilung.',
      fr: 'L’Irlande dispose d’une seule autorité nationale, la DPC ; aucune répartition régionale.',
      es: 'Irlanda tiene una única autoridad nacional, la DPC; sin reparto regional.',
      pt: "A Irlanda tem uma única autoridade nacional, a DPC; não existe repartição regional.",
      da: 'Irland har én national myndighed, DPC; der er ingen regional opdeling.',
      sv: 'Irland har en enda nationell myndighet, DPC; det finns ingen regional uppdelning.',
      nl: 'Ierland heeft een enkele nationale autoriteit, de DPC; geen regionale onderverdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione preventiva dei lavoratori sull\'esistenza, il funzionamento e tutte le finalità del tracciamento (art. 13 GDPR)',
        en: 'Prior notice to workers of the existence, operation and all purposes of the tracking (art. 13 GDPR)',
        de: 'Vorherige Information der Arbeitnehmer über Bestehen, Funktionsweise und alle Zwecke der Ortung (Art. 13 DSGVO)',
        fr: 'Information préalable des travailleurs sur l’existence, le fonctionnement et toutes les finalités du suivi (art. 13 RGPD)',
        es: 'Información previa a los trabajadores sobre la existencia, el funcionamiento y todas las finalidades del seguimiento (art. 13 RGPD)',
        pt: "Informação prévia dos trabalhadores sobre a existência, o funcionamento e todas as finalidades do seguimento (art. 13.º do RGPD)",
        da: 'Forudgående information til medarbejderne om sporingens eksistens, funktion og alle formål (art. 13 i GDPR)',
        sv: 'Information i förväg till arbetstagarna om att spårningen finns, hur den fungerar och alla ändamål (art. 13 GDPR)',
        nl: 'Voorafgaande informatie aan werknemers over het bestaan, de werking en alle doeleinden van de tracking (art. 13 AVG)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il lavoratore va informato prima dell'attivazione dell'esistenza del tracciamento, di come funziona e di tutte le finalità.",
        en: 'The worker must be informed, before activation, of the existence of the tracking, how it works and all its purposes.',
        de: 'Der Arbeitnehmer ist vor der Aktivierung über das Bestehen der Ortung, ihre Funktionsweise und alle Zwecke zu informieren.',
        fr: 'Le travailleur doit être informé, avant l’activation, de l’existence du suivi, de son fonctionnement et de toutes ses finalités.',
        es: 'El trabajador debe ser informado, antes de la activación, de la existencia del seguimiento, de cómo funciona y de todas sus finalidades.',
        pt: "O trabalhador deve ser informado, antes da ativação, da existência do seguimento, do seu funcionamento e de todas as finalidades.",
        da: 'Medarbejderen skal, før sporingen aktiveres, informeres om, at den findes, hvordan den fungerer, og alle dens formål.',
        sv: 'Arbetstagaren ska före aktiveringen informeras om att spårningen finns, hur den fungerar och alla dess ändamål.',
        nl: 'De werknemer moet voor de activering worden geinformeerd over het bestaan van de tracking, hoe deze werkt en alle doeleinden ervan.',
      },
      fonte: FONTE_DPC_VEICOLI,
    },
    {
      voce: {
        it: 'Consenso o accordo sindacale obbligatorio prima di installare',
        en: 'Mandatory consent or trade-union agreement before installation',
        de: 'Obligatorische Einwilligung oder Gewerkschaftsvereinbarung vor der Installation',
        fr: 'Consentement ou accord syndical obligatoire avant l’installation',
        es: 'Consentimiento o acuerdo sindical obligatorio antes de instalar',
        pt: "Consentimento ou acordo sindical obrigatório antes da instalação",
        da: 'Obligatorisk samtykke eller fagforeningsaftale før installation',
        sv: 'Obligatoriskt samtycke eller överenskommelse med facket innan installation',
        nl: 'Verplichte toestemming of vakbondsovereenkomst voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "L'Irlanda non ha un meccanismo di consenso sindacale che condiziona il monitoraggio; il controllo passa per base giuridica, trasparenza, proporzionalità e DPIA. Il consenso del lavoratore è valido solo in casi eccezionali.",
        en: 'Ireland has no trade-union consent mechanism that conditions monitoring; control runs through legal basis, transparency, proportionality and DPIA. The worker\'s consent is valid only in exceptional cases.',
        de: 'Irland kennt keinen Mechanismus der Gewerkschaftszustimmung, der die Überwachung an Bedingungen knüpft; die Kontrolle läuft über Rechtsgrundlage, Transparenz, Verhältnismäßigkeit und DSFA. Die Einwilligung des Arbeitnehmers ist nur in Ausnahmefällen gültig.',
        fr: 'L’Irlande ne dispose d’aucun mécanisme de consentement syndical conditionnant la surveillance ; le contrôle passe par la base légale, la transparence, la proportionnalité et l’AIPD. Le consentement du travailleur n’est valable que dans des cas exceptionnels.',
        es: 'Irlanda no cuenta con un mecanismo de consentimiento sindical que condicione la vigilancia; el control pasa por la base jurídica, la transparencia, la proporcionalidad y la EIPD. El consentimiento del trabajador solo es válido en casos excepcionales.',
        pt: "A Irlanda não tem um mecanismo de consentimento sindical que condicione a monitorização; o controlo passa pela base jurídica, pela transparência, pela proporcionalidade e pela DPIA. O consentimento do trabalhador só é válido em casos excecionais.",
        da: 'Irland har ingen mekanisme med fagforeningssamtykke, der gør overvågning betinget af det; kontrollen går gennem retsgrundlag, gennemsigtighed, proportionalitet og DPIA. Medarbejderens samtykke er kun gyldigt i ekstraordinære tilfælde.',
        sv: 'Irland har ingen mekanism för fackligt samtycke som villkorar övervakningen; kontrollen sker genom rättslig grund, öppenhet, proportionalitet och DPIA. Arbetstagarens samtycke är endast giltigt i undantagsfall.',
        nl: 'Ierland kent geen mechanisme van vakbondstoestemming dat de monitoring bepaalt; de controle verloopt via rechtsgrondslag, transparantie, evenredigheid en DPIA. De toestemming van de werknemer is alleen in uitzonderlijke gevallen geldig.',
      },
      fonte: FONTE_DPC_VEICOLI,
    },
    {
      voce: {
        it: 'Autorizzazione preventiva di un\'autorità prima di installare',
        en: "Prior authorisation from an authority before installation",
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: 'Autorisation préalable d’une autorité avant l’installation',
        es: 'Autorización previa de una autoridad antes de instalar',
        pt: "Autorização prévia de uma autoridade antes da instalação",
        da: 'Forudgående tilladelse fra en myndighed før installation',
        sv: 'Förhandstillstånd från en myndighet innan installation',
        nl: 'Voorafgaande toestemming van een autoriteit voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva del DPC; l'autorità va consultata prima solo se la DPIA evidenzia un rischio elevato non mitigabile.",
        en: 'No prior authorisation from the DPC is needed; the authority must be consulted beforehand only if the DPIA reveals a high risk that cannot be mitigated.',
        de: 'Eine vorherige Genehmigung der DPC ist nicht erforderlich; die Behörde ist nur dann vorab zu konsultieren, wenn die DSFA ein hohes, nicht beherrschbares Risiko aufzeigt.',
        fr: 'Aucune autorisation préalable de la DPC n’est requise ; l’autorité ne doit être consultée au préalable que si l’AIPD révèle un risque élevé impossible à atténuer.',
        es: 'No se necesita una autorización previa de la DPC; la autoridad debe consultarse de antemano solo si la EIPD revela un riesgo elevado que no puede mitigarse.',
        pt: "Não é necessária autorização prévia da DPC; a autoridade só tem de ser consultada previamente se a DPIA revelar um risco elevado que não possa ser mitigado.",
        da: "Der kræves ingen forudgående tilladelse fra DPC; myndigheden skal kun høres på forhånd, hvis DPIA'en viser en høj risiko, der ikke kan afhjælpes.",
        sv: "Något förhandstillstånd från DPC krävs inte; myndigheten ska bara höras i förväg om DPIA:n visar en hög risk som inte kan begränsas.",
        nl: 'Voorafgaande toestemming van de DPC is niet nodig; de autoriteit hoeft vooraf alleen te worden geraadpleegd als de DPIA een hoog risico aantoont dat niet kan worden beperkt.',
      },
      fonte: FONTE_DPC_CONSULTAZIONE,
    },
    {
      voce: {
        it: 'Base giuridica valida (di norma interesse legittimo, non il consenso) con bilanciamento e diritto di opposizione',
        en: 'Valid legal basis (usually legitimate interest, not consent) with balancing test and right to object',
        de: 'Gültige Rechtsgrundlage (in der Regel berechtigtes Interesse, nicht Einwilligung) mit Abwägung und Widerspruchsrecht',
        fr: 'Base légale valable (en règle générale l’intérêt légitime, non le consentement) avec mise en balance et droit d’opposition',
        es: 'Base jurídica válida (por lo general interés legítimo, no el consentimiento) con ponderación y derecho de oposición',
        pt: "Base jurídica válida (em regra, interesse legítimo e não o consentimento) com ponderação e direito de oposição",
        da: 'Gyldigt retsgrundlag (normalt legitim interesse, ikke samtykke) med afvejning og ret til indsigelse',
        sv: 'Giltig rättslig grund (i regel berättigat intresse, inte samtycke) med intresseavvägning och rätt att invända',
        nl: 'Geldige rechtsgrondslag (gewoonlijk gerechtvaardigd belang, niet toestemming) met afweging en recht van bezwaar',
      },
      risposta: 'si',
      dettaglio: {
        it: "La base usuale è l'interesse legittimo (art. 6.1.f), che deve essere strettamente necessario e proporzionato e bilanciato coi diritti del lavoratore, soggetto al diritto di opposizione (art. 21).",
        en: "The usual basis is legitimate interest (art. 6(1)(f)), which must be strictly necessary and proportionate and balanced against the worker's rights, subject to the right to object (art. 21).",
        de: 'Die übliche Grundlage ist das berechtigte Interesse (Art. 6 Abs. 1 lit. f), das unbedingt erforderlich und verhältnismäßig sein und gegen die Rechte des Arbeitnehmers abgewogen werden muss, vorbehaltlich des Widerspruchsrechts (Art. 21).',
        fr: 'La base habituelle est l’intérêt légitime (art. 6, par. 1, point f), qui doit être strictement nécessaire et proportionné et mis en balance avec les droits du travailleur, sous réserve du droit d’opposition (art. 21).',
        es: 'La base habitual es el interés legítimo (art. 6.1.f), que debe ser estrictamente necesario y proporcionado y ponderado con los derechos del trabajador, sujeto al derecho de oposición (art. 21).',
        pt: "A base habitual é o interesse legítimo (art. 6.º, n.º 1, al. f)), que deve ser estritamente necessário, proporcionado e ponderado face aos direitos do trabalhador, sujeito ao direito de oposição (art. 21.º).",
        da: 'Det sædvanlige grundlag er legitim interesse (art. 6, stk. 1, litra f), som skal være strengt nødvendig og proportional og afvejet mod medarbejderens rettigheder, med forbehold for retten til indsigelse (art. 21).',
        sv: 'Den vanliga grunden är berättigat intresse (art. 6.1 f), som måste vara strikt nödvändigt och proportionerligt och vägas mot arbetstagarens rättigheter, med förbehåll för rätten att invända (art. 21).',
        nl: 'De gebruikelijke grondslag is het gerechtvaardigd belang (art. 6, lid 1, onder f), dat strikt noodzakelijk en evenredig moet zijn en moet worden afgewogen tegen de rechten van de werknemer, onder voorbehoud van het recht van bezwaar (art. 21).',
      },
      fonte: FONTE_DPC_VEICOLI,
    },
    {
      voce: {
        it: 'Divieto di usare il tracciamento per il monitoraggio generale del personale; opt-out fuori orario',
        en: 'Prohibition on using the tracking for general monitoring of staff; opt-out outside working hours',
        de: 'Verbot, die Ortung zur allgemeinen Überwachung des Personals zu nutzen; Opt-out außerhalb der Arbeitszeit',
        fr: 'Interdiction d’utiliser le suivi pour une surveillance générale du personnel ; option de désactivation en dehors des heures de travail',
        es: 'Prohibición de usar el seguimiento para la vigilancia general del personal; opción de exclusión fuera del horario laboral',
        pt: "Proibição de utilizar o seguimento para a monitorização geral do pessoal; desativação fora do horário",
        da: 'Forbud mod at bruge sporingen til generel overvågning af personalet; fravalg uden for arbejdstiden',
        sv: 'Förbud mot att använda spårningen för allmän övervakning av personalen; möjlighet att avstå utanför arbetstid',
        nl: 'Verbod om de tracking te gebruiken voor algemene monitoring van het personeel; opt-out buiten werktijd',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il tracciamento non può servire a monitorare in generale il personale; è improbabile che sia lecito fuori orario, e serve un opt-out (interruttore privacy) se il veicolo è usato anche privatamente.",
        en: 'The tracking cannot be used to monitor staff in general; it is unlikely to be lawful outside working hours, and an opt-out (privacy switch) is needed if the vehicle is also used privately.',
        de: 'Die Ortung darf nicht der allgemeinen Überwachung des Personals dienen; außerhalb der Arbeitszeit ist sie kaum rechtmäßig, und es ist ein Opt-out (Privatsphäre-Schalter) erforderlich, wenn das Fahrzeug auch privat genutzt wird.',
        fr: 'Le suivi ne peut pas servir à surveiller le personnel de manière générale ; il est peu probable qu’il soit licite en dehors des heures de travail, et une option de désactivation (interrupteur de confidentialité) est nécessaire si le véhicule est aussi utilisé à titre privé.',
        es: 'El seguimiento no puede servir para vigilar al personal en general; es poco probable que sea lícito fuera del horario laboral, y se necesita una opción de exclusión (interruptor de privacidad) si el vehículo también se usa de forma privada.',
        pt: "O seguimento não pode servir para monitorizar em geral o pessoal; é improvável que seja lícito fora do horário, e é necessária uma possibilidade de desativação (interruptor de privacidade) se o veículo for utilizado também em privado.",
        da: 'Sporingen må ikke bruges til generelt at overvåge personalet; den er sandsynligvis ulovlig uden for arbejdstiden, og der kræves et fravalg (privatlivskontakt), hvis køretøjet også bruges privat.',
        sv: 'Spårningen får inte användas för att övervaka personalen i allmänhet; det är osannolikt att den är laglig utanför arbetstid, och en möjlighet att avstå (en integritetsknapp) behövs om fordonet även används privat.',
        nl: 'De tracking mag niet dienen om het personeel in het algemeen te monitoren; buiten werktijd is dit waarschijnlijk niet rechtmatig, en er is een opt-out (privacyschakelaar) nodig als het voertuig ook prive wordt gebruikt.',
      },
      fonte: FONTE_DPC_VEICOLI,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) obbligatoria per il monitoraggio sistematico della localizzazione",
        en: 'Data protection impact assessment (DPIA) mandatory for systematic location monitoring',
        de: 'Datenschutz-Folgenabschätzung (DSFA) bei systematischer Standortüberwachung verpflichtend',
        fr: 'Analyse d’impact (AIPD) obligatoire pour la surveillance systématique de la localisation',
        es: 'Evaluación de impacto (EIPD) obligatoria para la vigilancia sistemática de la localización',
        pt: "Avaliação de impacto (DPIA) obrigatória para a monitorização sistemática da localização",
        da: 'Konsekvensanalyse (DPIA) er obligatorisk ved systematisk overvågning af lokalisering',
        sv: 'Konsekvensbedömning (DPIA) obligatorisk för systematisk övervakning av lokalisering',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) verplicht bij systematische locatiemonitoring',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista DPC rende obbligatoria la DPIA per il monitoraggio, il tracciamento o l'osservazione sistematica della posizione o del comportamento delle persone, quando uno screening documentato indica un rischio elevato. Per il tracciamento dei veicoli la guida del DPC dice che è «molto probabile» che la DPIA sia necessaria prima di attivarlo.",
        en: 'The DPC list makes a DPIA mandatory for the systematic monitoring, tracking or observation of the location or behaviour of individuals, where a documented screening indicates a high risk. For vehicle tracking the DPC guidance says it is "highly likely" that a DPIA will need to be done before implementing it.',
        de: 'Die DPC-Liste macht die DSFA für die systematische Überwachung, Verfolgung oder Beobachtung des Standorts oder Verhaltens von Personen verpflichtend, wenn ein dokumentiertes Screening ein hohes Risiko anzeigt. Für die Fahrzeugortung sagt der DPC-Leitfaden, es sei „höchstwahrscheinlich“, dass vor der Einführung eine DSFA durchzuführen ist.',
        fr: 'La liste de la DPC rend l’AIPD obligatoire pour la surveillance, le suivi ou l’observation systématique de la localisation ou du comportement des personnes, lorsqu’un examen préalable documenté indique un risque élevé. Pour le suivi des véhicules, le guide de la DPC dit qu’il est « très probable » qu’une AIPD soit nécessaire avant la mise en place.',
        es: 'La lista de la DPC hace obligatoria la EIPD para la vigilancia, el seguimiento o la observación sistemática de la ubicación o el comportamiento de las personas, cuando un cribado documentado indica un riesgo alto. Para el seguimiento de vehículos, la guía de la DPC dice que es «muy probable» que haga falta una EIPD antes de implantarlo.',
        pt: "A lista da DPC torna obrigatória a DPIA para a monitorização, o seguimento ou a observação sistemática da localização ou do comportamento das pessoas, quando uma triagem documentada indica um risco elevado. Para o seguimento de veículos, o guia da DPC diz que é «muito provável» que a DPIA seja necessária antes de o ativar.",
        da: "DPC's liste gør en DPIA obligatorisk ved systematisk overvågning, sporing eller observation af personers position eller adfærd, når en dokumenteret screening viser en høj risiko. For køretøjssporing siger DPC's vejledning, at det er «meget sandsynligt», at der skal gennemføres en DPIA, før den tages i brug.",
        sv: "DPC:s lista gör en DPIA obligatorisk för systematisk övervakning, spårning eller observation av personers position eller beteende, när en dokumenterad förhandsbedömning visar en hög risk. För fordonsspårning anger DPC:s vägledning att det är «mycket sannolikt» att en DPIA behöver genomföras innan den införs.",
        nl: 'De DPC-lijst maakt een DPIA verplicht voor de systematische monitoring, tracking of observatie van de locatie of het gedrag van personen, wanneer een gedocumenteerde screening een hoog risico aantoont. Voor voertuigtracking zegt de DPC-gids dat het „zeer waarschijnlijk“ is dat vóór de invoering een DPIA nodig is.',
      },
      fonte: FONTE_DPC_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Informa i lavoratori, prima dell\'attivazione, di esistenza, funzionamento e finalità del tracciamento.',
        en: 'Inform workers, before activation, of the existence, operation and purposes of the tracking.',
        de: 'Informieren Sie die Arbeitnehmer vor der Aktivierung über Bestehen, Funktionsweise und Zwecke der Ortung.',
        fr: 'Informez les travailleurs, avant l’activation, de l’existence, du fonctionnement et des finalités du suivi.',
        es: 'Informa a los trabajadores, antes de la activación, de la existencia, el funcionamiento y las finalidades del seguimiento.',
        pt: "Informe os trabalhadores, antes da ativação, da existência, do funcionamento e das finalidades do seguimento.",
        da: 'Informér medarbejderne, før sporingen aktiveres, om dens eksistens, funktion og formål.',
        sv: 'Informera arbetstagarna, före aktiveringen, om att spårningen finns, hur den fungerar och dess ändamål.',
        nl: 'Informeer de werknemers voor de activering over het bestaan, de werking en de doeleinden van de tracking.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Individua una base giuridica valida (di norma interesse legittimo) e documenta il bilanciamento.',
        en: 'Identify a valid legal basis (usually legitimate interest) and document the balancing test.',
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage (in der Regel berechtigtes Interesse) und dokumentieren Sie die Abwägung.',
        fr: 'Déterminez une base légale valable (en règle générale l’intérêt légitime) et documentez la mise en balance.',
        es: 'Determina una base jurídica válida (por lo general interés legítimo) y documenta la ponderación.',
        pt: "Identifique uma base jurídica válida (em regra, interesse legítimo) e documente a ponderação.",
        da: 'Find et gyldigt retsgrundlag (normalt legitim interesse), og dokumentér afvejningen.',
        sv: 'Fastställ en giltig rättslig grund (i regel berättigat intresse) och dokumentera intresseavvägningen.',
        nl: 'Bepaal een geldige rechtsgrondslag (gewoonlijk gerechtvaardigd belang) en documenteer de afweging.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA): obbligatoria per il monitoraggio sistematico della localizzazione.",
        en: 'Carry out the data protection impact assessment (DPIA): mandatory for systematic location monitoring.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) durch: verpflichtend bei systematischer Standortüberwachung.',
        fr: 'Réalisez l’analyse d’impact (AIPD) : obligatoire pour la surveillance systématique de la localisation.',
        es: 'Realiza la evaluación de impacto (EIPD): obligatoria para la vigilancia sistemática de la localización.',
        pt: "Realize a avaliação de impacto (DPIA): obrigatória para a monitorização sistemática da localização.",
        da: 'Gennemfør konsekvensanalysen (DPIA): obligatorisk ved systematisk overvågning af lokalisering.',
        sv: 'Genomför konsekvensbedömningen (DPIA): obligatorisk för systematisk övervakning av lokalisering.',
        nl: 'Voer de gegevensbeschermingseffectbeoordeling (DPIA) uit: verplicht bij systematische locatiemonitoring.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Limita il tracciamento allo stretto necessario e all'orario di lavoro; prevedi un opt-out per l'uso privato.",
        en: 'Limit the tracking to what is strictly necessary and to working hours; provide an opt-out for private use.',
        de: 'Beschränken Sie die Ortung auf das unbedingt Notwendige und auf die Arbeitszeit; sehen Sie ein Opt-out für die private Nutzung vor.',
        fr: 'Limitez le suivi au strict nécessaire et aux heures de travail ; prévoyez une option de désactivation pour l’usage privé.',
        es: 'Limita el seguimiento a lo estrictamente necesario y al horario laboral; prevé una opción de exclusión para el uso privado.',
        pt: "Limite o seguimento ao estritamente necessário e ao horário de trabalho; preveja uma possibilidade de desativação para o uso privado.",
        da: 'Begræns sporingen til det strengt nødvendige og til arbejdstiden; indbyg et fravalg ved privat brug.',
        sv: 'Begränsa spårningen till det som är strikt nödvändigt och till arbetstiden; ge möjlighet att avstå vid privat användning.',
        nl: 'Beperk de tracking tot het strikt noodzakelijke en tot de werktijd; voorzie in een opt-out voor prive-gebruik.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Se cambi sistema o software di monitoraggio, aggiorna e riconsegna l’informativa, e verifica se devi di nuovo informare o consultare i rappresentanti dei lavoratori, dove la legge lo prevede. Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: l’informativa consegnata prima non basta.',
        en: 'If you switch systems: when you change your monitoring system or software, update and re-issue the privacy notice, and check whether you must inform or consult the workers\' representatives again, where the law requires it. The provider (data processor), the data collected and the methods often change: the one provided earlier is not enough.',
        de: 'Bei Systemwechsel: Wenn Sie Ihr Überwachungssystem oder Ihre Software wechseln, aktualisieren Sie die Datenschutzinformation und händigen Sie sie erneut aus, und prüfen Sie, ob Sie die Arbeitnehmervertretung erneut informieren oder beteiligen müssen, wo das Gesetz es vorsieht. Anbieter (Auftragsverarbeiter), erhobene Daten und Modalitäten ändern sich oft: die zuvor ausgehändigte genügt nicht.',
        fr: 'En cas de changement de système : si vous changez de système ou de logiciel de surveillance, mettez à jour et remettez l’information, et vérifiez si vous devez de nouveau informer ou consulter les représentants du personnel, lorsque la loi le prévoit. Le fournisseur (sous-traitant), les données collectées et les modalités changent souvent : celle remise auparavant ne suffit pas.',
        es: 'Si cambias de sistema o software de monitorización, actualiza y vuelve a entregar la información, y comprueba si debes volver a informar o consultar a los representantes de los trabajadores, cuando la ley lo prevé. A menudo cambian el proveedor (encargado del tratamiento), los datos recogidos y las modalidades: la información entregada antes no basta.',
        pt: "Se mudar de sistema ou de software de monitorização, atualize e entregue de novo a informação e verifique se tem de voltar a informar ou a consultar os representantes dos trabalhadores, nos casos em que a lei o prevê. Muitas vezes mudam o fornecedor (subcontratante), os dados recolhidos e as modalidades: a informação entregue anteriormente não basta.",
        da: 'Hvis du skifter system eller overvågningssoftware, skal du opdatere og udlevere privatlivsoplysningerne igen og undersøge, om du på ny skal informere eller høre medarbejdernes repræsentanter, hvor loven kræver det. Ofte ændrer leverandøren (databehandleren), de indsamlede oplysninger og metoderne sig: de oplysninger, der blev udleveret tidligere, er ikke nok.',
        sv: 'Om du byter system eller övervakningsprogram ska du uppdatera och lämna ut integritetsinformationen på nytt och kontrollera om du på nytt måste informera eller höra de anställdas företrädare, där lagen kräver det. Ofta ändras leverantören (personuppgiftsbiträdet), de insamlade uppgifterna och metoderna: den information som lämnades tidigare räcker inte.',
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'DPC, reclami',
      portale: FONTE_DPC_RECLAMI.url,
      urlFonte: FONTE_DPC_RECLAMI.url,
      verificatoIl: '2026-09-30',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino a 20 milioni di euro o 4% del fatturato (GDPR)',
      en: 'up to 20 million euro or 4% of turnover (GDPR)',
      de: 'bis zu 20 Millionen Euro oder 4 % des Umsatzes (DSGVO)',
      fr: 'jusqu’à 20 millions d’euros ou 4 % du chiffre d’affaires (RGPD)',
      es: 'hasta 20 millones de euros o el 4 % del volumen de negocios (RGPD)',
      pt: "até 20 milhões de euros ou 4 % do volume de negócios (RGPD)",
      da: 'op til 20 millioner euro eller 4 % af omsætningen (GDPR)',
      sv: 'upp till 20 miljoner euro eller 4 % av omsättningen (GDPR)',
      nl: 'tot 20 miljoen euro of 4% van de omzet (AVG)',
    },
    casoCitato: {
      it: "Non risulta una multa del DPC specifica per il GPS sui dipendenti. Il caso più vicino: DPC contro Limerick City and County Council (dicembre 2021), 110.000 euro per trattamento senza base giuridica tramite telecamere, lettura targhe e droni. Riguardava un ente pubblico e i cittadini, non i dipendenti. Nella sentenza Doolin (High Court, febbraio 2020, sotto la legge previgente) l'uso, in un procedimento disciplinare, di immagini raccolte per finalità di sicurezza è stato ritenuto un ulteriore trattamento per una finalità diversa.",
      en: 'There is no record of a DPC fine specifically for GPS on employees. Relevant landmark case: DPC v Limerick City and County Council (December 2021), 110,000 euro for processing without a legal basis via cameras and automatic number-plate reading (the inquiry also covered drones; a public body, not employees). In Doolin (High Court, February 2020, under the previous law) the use of material collected for security purposes in a disciplinary hearing was held to be further processing for a different purpose.',
      de: 'Es ist kein Bußgeld der DPC speziell für GPS bei Beschäftigten bekannt. Einschlägiger Leitfall: DPC gegen Limerick City and County Council (Dezember 2021), 110.000 Euro für eine Verarbeitung ohne Rechtsgrundlage mittels Kameras und Kennzeichenerfassung (die Untersuchung betraf auch Drohnen; eine öffentliche Stelle, keine Beschäftigten). Im Urteil Doolin (High Court, Februar 2020, nach dem früheren Recht) wurde die Verwendung von zu Sicherheitszwecken erhobenem Material in einem Disziplinarverfahren als Weiterverarbeitung zu einem anderen Zweck gewertet.',
      fr: 'Aucune amende de la DPC visant spécifiquement le GPS sur les salariés n’est connue. Affaire de référence pertinente : DPC contre Limerick City and County Council (décembre 2021), 110 000 euros pour un traitement sans base légale au moyen de caméras et de lecture automatique des plaques (l’enquête portait aussi sur des drones ; un organisme public, et non des salariés). Dans l’arrêt Doolin (High Court, février 2020, sous la loi précédente), l’utilisation lors d’une procédure disciplinaire de matériel collecté à des fins de sécurité a été jugée être un traitement ultérieur pour une finalité différente.',
      es: 'No consta una multa de la DPC específica por el GPS sobre los empleados. Caso de referencia afín: DPC contra Limerick City and County Council (diciembre de 2021), 110.000 euros por un tratamiento sin base jurídica mediante cámaras y lectura de matrículas (la investigación abarcaba también drones; un organismo público, no empleados). En la sentencia Doolin (High Court, febrero de 2020, bajo la ley anterior), el uso en un procedimiento disciplinario de material recogido por seguridad se consideró un tratamiento ulterior para una finalidad distinta.',
      pt: "Não consta nenhuma coima da DPC específica sobre o GPS nos trabalhadores. O caso mais próximo: DPC contra Limerick City and County Council (dezembro de 2021), 110.000 euros por tratamento sem base jurídica através de câmaras, leitura de matrículas e drones. Dizia respeito a um organismo público e aos cidadãos, não aos trabalhadores. No acórdão Doolin (High Court, fevereiro de 2020, ao abrigo da lei anterior), a utilização, num processo disciplinar, de imagens recolhidas para fins de segurança foi considerada um tratamento posterior para uma finalidade diferente.",
      da: 'Der kendes ingen bøde fra DPC specifikt for GPS på medarbejdere. Den nærmeste sag: DPC mod Limerick City and County Council (december 2021), 110.000 euro for behandling uden retsgrundlag via kameraer, nummerpladelæsning og droner. Sagen angik en offentlig myndighed og borgere, ikke medarbejdere. I Doolin-dommen (High Court, februar 2020, efter den tidligere lovgivning) blev brugen af optagelser, der var indsamlet af sikkerhedshensyn, i en disciplinærsag anset for videre behandling til et andet formål.',
      sv: 'Det finns inga uppgifter om någon DPC-sanktion som särskilt gäller GPS på anställda. Det närmaste fallet: DPC mot Limerick City and County Council (december 2021), 110 000 euro för behandling utan rättslig grund via kameror, avläsning av registreringsskyltar och drönare. Det gällde ett offentligt organ och medborgare, inte anställda. I domen Doolin (High Court, februari 2020, enligt den tidigare lagen) ansågs användningen av bilder som samlats in av säkerhetsskäl i ett disciplinärt förfarande vara ytterligare behandling för ett annat ändamål.',
      nl: 'Er is geen boete van de DPC bekend die specifiek betrekking heeft op gps bij werknemers. Relevante richtinggevende zaak: DPC tegen Limerick City and County Council (december 2021), 110.000 euro voor een verwerking zonder rechtsgrondslag via camera\'s en kentekenherkenning (het onderzoek betrof ook drones; een overheidsinstantie, geen werknemers). In Doolin (High Court, februari 2020, onder de vorige wet) werd het gebruik van voor beveiliging verzameld materiaal in een tuchtprocedure aangemerkt als verdere verwerking voor een ander doel.',
    },
    urlFonte: FONTE_DPC_LIMERICK.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_DPC_VEICOLI,
    FONTE_DPC_LAVORO,
    FONTE_DPC_DPIA,
    FONTE_DPC_CONSULTAZIONE,
    FONTE_DPC_RECLAMI,
    FONTE_DPC_LIMERICK,
    FONTE_DPC_DOOLIN,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
