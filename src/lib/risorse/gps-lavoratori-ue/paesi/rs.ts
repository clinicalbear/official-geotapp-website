/**
 * Scheda-paese Serbia per la risorsa "GPS sui lavoratori in UE".
 *
 * La Serbia NON e' un paese UE: e' un paese candidato. La sua Legge sulla
 * protezione dei dati (LPDP, 87/2018, in vigore dal 2019) rispecchia da vicino
 * il GDPR: modello di responsabilizzazione, niente registrazione preventiva,
 * valutazione d'impatto per i trattamenti a rischio elevato e parere del
 * Poverenik (Garante serbo).
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * testo ufficiale della LPDP, decisione del Poverenik sulla lista dei
 * trattamenti che richiedono una DPIA (Gazzetta 45/2019), analisi PR Legal sul
 * GPS dei veicoli aziendali, pagina istituzionale del Poverenik, cronaca N1 sul
 * caso JKP Mediana di Nis e GDPR come riferimento comparativo.
 *
 * La Serbia non e' federale: l'unica autorita nazionale e' il Poverenik, senza
 * ripartizione regionale. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese , Fonte} from '../types';

// URL delle fonti primarie citate.
const FONTE_LPDP = {
  titolo: 'Legge sulla protezione dei dati (LPDP, 87/2018) - testo ufficiale',
  url: 'https://pravno-informacioni-sistem.rs/eli/rep/sgrs/skupstina/zakon/2018/87/13',
};
const FONTE_LISTA_DPIA = {
  titolo:
    'Poverenik, decisione sulla lista dei trattamenti che richiedono una DPIA (Gazzetta 45/2019)',
  url: 'https://www.pravno-informacioni-sistem.rs/SlGlasnikPortal/eli/rep/sgrs/drugidrzavniorganiorganizacije/odluka/2019/45/1/reg',
};
const FONTE_PR_LEGAL = {
  titolo:
    'Odluka sulla lista dei trattamenti che richiedono DPIA (Sl. glasnik RS 45/2019 e 112/2020, testo consolidato)',
  url: 'https://www.pravno-informacioni-sistem.rs/SlGlasnikPortal/eli/rep/sgrs/drugidrzavniorganiorganizacije/odluka/2019/45/1',
};
const FONTE_POVERENIK = {
  titolo: 'Poverenik (Garante serbo), competenze e contatti',
  url: 'https://poverenik.rs/en/about-us/about-the-commissioner/',
};
const FONTE_N1_MEDIANA: Fonte = {
  titolo:
    'N1, GPS su 80 cassonetti del JKP Mediana di Nis (protesta dei lavoratori, gennaio 2026)',
  url: 'https://n1info.rs/vesti/u-nisu-postavljeni-gps-uredjaji-za-pracenje-kanti-za-djubre-radnici-higijene-se-bune/', nonUfficiale: 'stampa',
};
const FONTE_DANAS_MEDIANA: Fonte = {
  titolo:
    'Danas, ispezione straordinaria del Poverenik al JKP Mediana di Nis (7 aprile 2026)',
  url: 'https://www.danas.rs/vesti/drustvo/sta-je-poverenik-cuo-u-niskom-jkp-mediana-tokom-vanrednog-inspekcijskog-nadzora-zbog-postavljanja-gps-uredjaja-na-kante-za-djubre/',
  nonUfficiale: 'stampa',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) - riferimento comparativo',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const serbia: SchedaPaese = {
  codiceISO: 'RS',
  slugCanonico: 'serbia',
  nome: 'Serbia',
  nomi: {
    it: 'Serbia',
    en: 'Serbia',
    'en-us': 'Serbia',
    'en-gb': 'Serbia',
    'en-au': 'Serbia',
    'en-ie': 'Serbia',
    'en-ca': 'Serbia',
    de: 'Serbien',
    nl: 'Servië',
    fr: 'Serbie',
    es: 'Serbia',
    pt: 'Sérvia',
    da: 'Serbien',
    sv: 'Serbien',
    nb: 'Serbia',
    ru: 'Сербия',
  },
  bandiera: '🇷🇸',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: {
      it: 'Poverenik (Garante serbo per l\'informazione e la protezione dei dati)',
      en: 'Poverenik (Serbian Commissioner for Information and Data Protection)',
      de: 'Poverenik (Serbischer Beauftragter für Information und Datenschutz)',
      fr: 'Poverenik (Commissaire serbe à l’information et à la protection des données)',
      es: 'Poverenik (Comisionado serbio para la Información y la Protección de Datos)',
      nl: 'Poverenik (Servische commissaris voor informatie en gegevensbescherming)',
      pt: 'Poverenik (Comissário sérvio para a Informação e a Proteção de Dados)',
      da: 'Poverenik (serbisk kommissær for information og databeskyttelse)',
      sv: 'Poverenik (serbiska kommissionären för information och dataskydd)',
      nb: 'Poverenik (serbisk kommissær for informasjon og personvern)',
      ru: 'Poverenik (сербский уполномоченный по вопросам информации и защиты данных)',
    },
    portale: FONTE_POVERENIK.url,
    urlFonte: FONTE_POVERENIK.url,
    verificatoIl: '2026-06-15',
    note: {
      it: 'La Serbia è un Paese candidato, fuori dall\'UE, con una legge (LPDP) che rispecchia il GDPR. Unica autorità nazionale, il Poverenik; nessuna ripartizione regionale.',
      en: 'Serbia is a candidate country, outside the EU, with a law (LPDP) that mirrors the GDPR. The only national authority is the Poverenik; there is no regional subdivision.',
      de: 'Serbien ist ein Beitrittskandidat außerhalb der EU mit einem Gesetz (LPDP), das die DSGVO widerspiegelt. Die einzige nationale Behörde ist der Poverenik; es gibt keine regionale Aufteilung.',
      fr: 'La Serbie est un pays candidat, hors de l’UE, doté d’une loi (LPDP) qui reflète le RGPD. La seule autorité nationale est le Poverenik ; il n’y a aucune répartition régionale.',
      es: 'Serbia es un país candidato, fuera de la UE, con una ley (LPDP) que refleja el RGPD. La única autoridad nacional es el Poverenik; no hay división regional.',
      nl: 'Servië is een kandidaat-land, buiten de EU, met een wet (LPDP) die de AVG weerspiegelt. De enige nationale autoriteit is de Poverenik; er is geen regionale onderverdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione dettagliata e preventiva ai lavoratori (LPDP art. 23)',
        en: 'Detailed and prior information to workers (LPDP art. 23)',
        de: 'Detaillierte und vorherige Information der Beschäftigten (LPDP Art. 23)',
        fr: 'Information détaillée et préalable des salariés (LPDP art. 23)',
        es: 'Información detallada y previa a los trabajadores (LPDP art. 23)',
        nl: 'Gedetailleerde en voorafgaande informatie aan werknemers (LPDP art. 23)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'I lavoratori che useranno i veicoli vanno informati in dettaglio sul trattamento: titolare, finalità, base giuridica, destinatari, conservazione e diritti.',
        en: 'Workers who will use the vehicles must be informed in detail about the processing: controller, purposes, legal basis, recipients, retention and rights.',
        de: 'Beschäftigte, die die Fahrzeuge nutzen werden, müssen ausführlich über die Verarbeitung informiert werden: Verantwortlicher, Zwecke, Rechtsgrundlage, Empfänger, Speicherdauer und Rechte.',
        fr: 'Les salariés qui utiliseront les véhicules doivent être informés en détail du traitement : responsable, finalités, base juridique, destinataires, conservation et droits.',
        es: 'Los trabajadores que utilizarán los vehículos deben ser informados en detalle sobre el tratamiento: responsable, finalidades, base jurídica, destinatarios, conservación y derechos.',
        nl: 'Werknemers die de voertuigen gaan gebruiken, moeten in detail over de verwerking worden geïnformeerd: verwerkingsverantwoordelijke, doeleinden, rechtsgrondslag, ontvangers, bewaring en rechten.',
      },
      fonte: FONTE_LPDP,
    },
    {
      voce: {
        it: 'Autorizzazione o registrazione preventiva di un\'autorità prima di installare',
        en: 'Authorisation or prior registration with an authority before installing',
        de: 'Genehmigung oder vorherige Registrierung bei einer Behörde vor der Installation',
        fr: 'Autorisation ou enregistrement préalable auprès d’une autorité avant l’installation',
        es: 'Autorización o registro previo ante una autoridad antes de instalar',
        nl: 'Toestemming of voorafgaande registratie bij een autoriteit vóór installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: 'La LPDP rispecchia il modello di responsabilizzazione del GDPR: il vecchio Registro centrale delle raccolte di dati ha cessato di essere tenuto con l\'entrata in vigore della legge (art. 98).',
        en: 'The LPDP mirrors the GDPR accountability model: the old Central Register of data collections ceased to be kept when the law entered into force (art. 98).',
        de: 'Das LPDP spiegelt das Rechenschaftsmodell der DSGVO wider: das alte Zentralregister der Datensammlungen wird seit Inkrafttreten des Gesetzes nicht mehr geführt (Art. 98).',
        fr: 'La LPDP reflète le modèle de responsabilisation du RGPD : l’ancien Registre central des fichiers de données n’est plus tenu depuis l’entrée en vigueur de la loi (art. 98).',
        es: 'La LPDP refleja el modelo de responsabilidad proactiva del RGPD: el antiguo Registro central de colecciones de datos dejó de llevarse con la entrada en vigor de la ley (art. 98).',
        nl: 'De LPDP weerspiegelt het verantwoordingsmodel van de AVG: het oude Centraal register van gegevensverzamelingen wordt sinds de inwerkingtreding van de wet niet meer bijgehouden (art. 98).',
      },
      fonte: FONTE_LPDP,
    },
    {
      voce: {
        it: 'Base = interesse legittimo con test tripartito documentato, non il consenso',
        en: 'Basis = legitimate interest with a documented three-part test, not consent',
        de: 'Grundlage = berechtigtes Interesse mit dokumentierter dreiteiliger Prüfung, nicht Einwilligung',
        fr: 'Base = intérêt légitime avec un test en trois parties documenté, et non le consentement',
        es: 'Base = interés legítimo con una prueba tripartita documentada, no el consentimiento',
        nl: 'Grondslag = gerechtvaardigd belang met een gedocumenteerde drieledige toets, niet toestemming',
      },
      risposta: 'si',
      dettaglio: {
        it: 'La base è di norma l\'interesse legittimo del datore (art. 12(1)(6) LPDP), che va definito con chiarezza, valutato in termini di necessità e proporzionalità rispetto ai diritti del lavoratore (art. 54(5)), documentato e comunicato al lavoratore (art. 23(1)(4)); il consenso nel rapporto di lavoro è la base più fragile, per lo squilibrio fra le parti.',
        en: 'The basis is normally the employer\'s legitimate interest (art. 12(1)(6) LPDP), which must be clearly defined, assessed for necessity and proportionality against the worker\'s rights (art. 54(5)), documented and communicated to the worker (art. 23(1)(4)); consent in the employment relationship is the most fragile basis, because of the imbalance between the parties.',
        de: 'Grundlage ist in der Regel das berechtigte Interesse des Arbeitgebers (Art. 12(1)(6) LPDP), das klar definiert, auf Erforderlichkeit und Verhältnismäßigkeit gegenüber den Rechten des Beschäftigten geprüft (Art. 54(5)), dokumentiert und dem Beschäftigten mitgeteilt werden muss (Art. 23(1)(4)); die Einwilligung im Arbeitsverhältnis ist wegen des Ungleichgewichts der Parteien die fragilste Grundlage.',
        fr: 'La base est en principe l’intérêt légitime de l’employeur (art. 12(1)(6) LPDP), qui doit être clairement défini, évalué en termes de nécessité et de proportionnalité au regard des droits du salarié (art. 54(5)), documenté et communiqué au salarié (art. 23(1)(4)) ; le consentement dans la relation de travail est la base la plus fragile, en raison du déséquilibre entre les parties.',
        es: 'La base es, por lo general, el interés legítimo del empleador (art. 12(1)(6) LPDP), que debe estar claramente definido, evaluado en términos de necesidad y proporcionalidad frente a los derechos del trabajador (art. 54(5)), documentado y comunicado al trabajador (art. 23(1)(4)); el consentimiento en la relación laboral es la base más frágil, por el desequilibrio entre las partes.',
        nl: 'De grondslag is doorgaans het gerechtvaardigd belang van de werkgever (art. 12(1)(6) LPDP), dat duidelijk moet worden omschreven, op noodzaak en evenredigheid ten opzichte van de rechten van de werknemer beoordeeld (art. 54(5)), gedocumenteerd en aan de werknemer meegedeeld (art. 23(1)(4)); toestemming in de arbeidsrelatie is de meest kwetsbare grondslag wegens de ongelijkheid tussen de partijen.',
      },
      fonte: FONTE_LPDP,
    },
    {
      voce: {
        it: 'Niente tracciamento continuo; solo orario e finalità',
        en: 'No continuous tracking; only working hours and purpose',
        de: 'Keine kontinuierliche Ortung; nur Arbeitszeit und Zweck',
        fr: 'Pas de suivi continu ; uniquement horaires de travail et finalité',
        es: 'Sin seguimiento continuo; solo horario y finalidad',
        nl: 'Geen continue tracking; alleen werktijd en doel',
      },
      risposta: 'si',
      dettaglio: {
        it: 'I dati devono essere raccolti per finalità determinate ed essere limitati a quanto necessario per tali finalità (art. 5(1), punti 2 e 3, LPDP): il GPS va limitato all\'orario di lavoro e alla finalità dichiarata, e un tracciamento continuo, che registra anche movimenti estranei alla finalità, non rispetta la minimizzazione. Una giustificazione generica di tutela del patrimonio non basta a definire la finalità.',
        en: 'Data must be collected for specific purposes and limited to what is necessary for them (art. 5(1), points 2 and 3, LPDP): GPS must be limited to working hours and the stated purpose, and continuous tracking, which also records movements unrelated to the purpose, does not respect minimisation. A generic asset-protection justification is not enough to define the purpose.',
        de: 'Daten müssen für bestimmte Zwecke erhoben und auf das dafür Notwendige beschränkt werden (Art. 5(1) Nr. 2 und 3 LPDP): GPS ist auf die Arbeitszeit und den erklärten Zweck zu beschränken, und eine kontinuierliche Ortung, die auch zweckfremde Bewegungen erfasst, wahrt die Datenminimierung nicht. Eine pauschale Berufung auf den Schutz von Vermögenswerten genügt nicht, um den Zweck zu bestimmen.',
        fr: 'Les données doivent être collectées pour des finalités déterminées et limitées à ce qui est nécessaire à ces finalités (art. 5(1), points 2 et 3, LPDP) : le GPS doit être limité aux heures de travail et à la finalité déclarée, et un suivi continu, qui enregistre aussi des déplacements étrangers à la finalité, ne respecte pas la minimisation. Une justification générale de protection du patrimoine ne suffit pas à définir la finalité.',
        es: 'Los datos deben recogerse para finalidades determinadas y limitarse a lo necesario para ellas (art. 5(1), puntos 2 y 3, LPDP): el GPS debe limitarse al horario laboral y a la finalidad declarada, y un seguimiento continuo, que registra también movimientos ajenos a la finalidad, no respeta la minimización. Una justificación genérica de protección del patrimonio no basta para definir la finalidad.',
        nl: 'Gegevens moeten voor bepaalde doeleinden worden verzameld en beperkt blijven tot wat daarvoor nodig is (art. 5(1), punten 2 en 3, LPDP): gps moet beperkt blijven tot werktijd en het vermelde doel, en continue tracking, die ook bewegingen buiten het doel registreert, respecteert de dataminimalisatie niet. Een algemene verwijzing naar bescherming van bezittingen volstaat niet om het doel te bepalen.',
      },
      fonte: FONTE_LPDP,
    },
    {
      voce: {
        it: 'Valutazione d\'impatto (DPIA) ed eventuale parere del Poverenik per il monitoraggio dei dipendenti tramite app o sistemi di tracciamento (lista, LPDP art. 54)',
        en: 'Impact assessment (DPIA) and, where needed, opinion of the Poverenik for monitoring employees via apps or tracking systems (list, LPDP art. 54)',
        de: 'Folgenabschätzung (DSFA) und ggf. Stellungnahme des Poverenik für die Überwachung von Beschäftigten über Apps oder Ortungssysteme (Liste, LPDP Art. 54)',
        fr: 'Analyse d’impact (AIPD) et, le cas échéant, avis du Poverenik pour la surveillance des salariés via des applications ou des systèmes de suivi (liste, LPDP art. 54)',
        es: 'Evaluación de impacto (EIPD) y, en su caso, dictamen del Poverenik para la monitorización de empleados mediante apps o sistemas de seguimiento (lista, LPDP art. 54)',
        nl: 'Effectbeoordeling (DPIA) en zo nodig advies van de Poverenik voor het monitoren van werknemers via apps of trackingsystemen (lijst, LPDP art. 54)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il trattamento dei dati dei dipendenti tramite app o sistemi che ne tracciano lavoro, movimenti e comunicazione è nella lista che richiede una valutazione d\'impatto; prima di iniziare il titolare deve svolgere la DPIA (art. 54 LPDP). Il parere del Poverenik va chiesto prima di iniziare solo se la DPIA indica un rischio elevato che le misure previste non riducono (art. 55(1)); omettere la DPIA o il parere dovuto è punito (art. 95).',
        en: 'The processing of employee data via apps or systems that track their work, movements and communication is on the list requiring an impact assessment; before starting, the controller must carry out the DPIA (art. 54 LPDP). The Poverenik\'s opinion must be requested before starting only if the DPIA indicates a high risk that the planned measures do not reduce (art. 55(1)); omitting the DPIA or the required opinion is punished (art. 95).',
        de: 'Die Verarbeitung von Beschäftigtendaten über Apps oder Systeme, die deren Arbeit, Bewegungen und Kommunikation verfolgen, steht auf der Liste, die eine Folgenabschätzung erfordert; vor Beginn muss der Verantwortliche die DSFA durchführen (Art. 54 LPDP). Die Stellungnahme des Poverenik ist vor Beginn nur einzuholen, wenn die DSFA ein hohes Risiko anzeigt, das die geplanten Maßnahmen nicht mindern (Art. 55(1)); das Unterlassen der DSFA oder der gebotenen Stellungnahme wird geahndet (Art. 95).',
        fr: 'Le traitement des données des salariés au moyen d’applications ou de systèmes qui suivent leur travail, leurs déplacements et leurs communications figure sur la liste exigeant une analyse d’impact ; avant de commencer, le responsable doit réaliser l’AIPD (art. 54 LPDP). L’avis du Poverenik ne doit être demandé avant de commencer que si l’AIPD indique un risque élevé que les mesures prévues ne réduisent pas (art. 55(1)) ; omettre l’AIPD ou l’avis requis est sanctionné (art. 95).',
        es: 'El tratamiento de datos de los empleados mediante apps o sistemas que rastrean su trabajo, movimientos y comunicación está en la lista que requiere una evaluación de impacto; antes de comenzar, el responsable debe realizar la EIPD (art. 54 LPDP). El dictamen del Poverenik debe solicitarse antes de comenzar solo si la EIPD indica un riesgo alto que las medidas previstas no reducen (art. 55(1)); omitir la EIPD o el dictamen debido se sanciona (art. 95).',
        nl: 'De verwerking van werknemersgegevens via apps of systemen die hun werk, bewegingen en communicatie volgen, staat op de lijst die een effectbeoordeling vereist; vóór aanvang moet de verwerkingsverantwoordelijke de DPIA uitvoeren (art. 54 LPDP). Het advies van de Poverenik moet vóór aanvang alleen worden gevraagd als de DPIA een hoog risico aantoont dat de geplande maatregelen niet verminderen (art. 55(1)); het achterwege laten van de DPIA of het vereiste advies wordt bestraft (art. 95).',
      },
      fonte: FONTE_PR_LEGAL,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Definisci e documenta l\'interesse legittimo con un test tripartito.',
        en: 'Define and document the legitimate interest with a three-part test.',
        de: 'Definieren und dokumentieren Sie das berechtigte Interesse mit einer dreiteiligen Prüfung.',
        fr: 'Définissez et documentez l’intérêt légitime au moyen d’un test en trois parties.',
        es: 'Define y documenta el interés legítimo con una prueba tripartita.',
        nl: 'Definieer en documenteer het gerechtvaardigd belang met een drieledige toets.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Informa in dettaglio i lavoratori che useranno i veicoli (art. 23).',
        en: 'Inform in detail the workers who will use the vehicles (art. 23).',
        de: 'Informieren Sie die Beschäftigten, die die Fahrzeuge nutzen werden, ausführlich (Art. 23).',
        fr: 'Informez en détail les salariés qui utiliseront les véhicules (art. 23).',
        es: 'Informa en detalle a los trabajadores que utilizarán los vehículos (art. 23).',
        nl: 'Informeer de werknemers die de voertuigen gaan gebruiken in detail (art. 23).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Svolgi la valutazione d\'impatto (DPIA) prima di iniziare e, se indica un rischio elevato non ridotto dalle misure, chiedi il parere del Poverenik.',
        en: 'Carry out the impact assessment (DPIA) before starting and, if it indicates a high risk not reduced by the measures, request the opinion of the Poverenik.',
        de: 'Führen Sie vor Beginn die Folgenabschätzung (DSFA) durch und holen Sie, wenn sie ein durch die Maßnahmen nicht gemindertes hohes Risiko anzeigt, die Stellungnahme des Poverenik ein.',
        fr: 'Réalisez l’analyse d’impact (AIPD) avant de commencer et, si elle indique un risque élevé non réduit par les mesures, sollicitez l’avis du Poverenik.',
        es: 'Realiza la evaluación de impacto (EIPD) antes de comenzar y, si indica un riesgo alto no reducido por las medidas, solicita el dictamen del Poverenik.',
        nl: 'Voer vóór aanvang de effectbeoordeling (DPIA) uit en vraag, als die een door de maatregelen niet verminderd hoog risico aantoont, het advies van de Poverenik.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Limita il GPS all\'orario e alla finalità: niente tracciamento continuo.',
        en: 'Limit GPS to working hours and the purpose: no continuous tracking.',
        de: 'Beschränken Sie das GPS auf die Arbeitszeit und den Zweck: keine kontinuierliche Ortung.',
        fr: 'Limitez le GPS aux horaires de travail et à la finalité : pas de suivi continu.',
        es: 'Limita el GPS al horario y a la finalidad: sin seguimiento continuo.',
        nl: 'Beperk de GPS tot de werktijd en het doel: geen continue tracking.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema in modo proporzionato e rispetta il diritto di opposizione dei lavoratori.',
        en: 'Configure the system in a proportionate way and respect the workers\' right to object.',
        de: 'Konfigurieren Sie das System verhältnismäßig und respektieren Sie das Widerspruchsrecht der Beschäftigten.',
        fr: 'Configurez le système de manière proportionnée et respectez le droit d’opposition des salariés.',
        es: 'Configura el sistema de forma proporcionada y respeta el derecho de oposición de los trabajadores.',
        nl: 'Configureer het systeem op een evenredige manier en respecteer het recht van werknemers om bezwaar te maken.',
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
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'Poverenik',
      portale: FONTE_POVERENIK.url,
      urlFonte: FONTE_POVERENIK.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'da 50.000 a 2.000.000 RSD per la persona giuridica (circa 425 - 17.000 euro)',
      en: 'from 50,000 to 2,000,000 RSD for the legal entity (about 425 - 17,000 euros)',
      de: 'von 50.000 bis 2.000.000 RSD für die juristische Person (etwa 425 - 17.000 Euro)',
      fr: 'de 50 000 à 2 000 000 RSD pour la personne morale (environ 425 à 17 000 euros)',
      es: 'de 50.000 a 2.000.000 RSD para la persona jurídica (unos 425 - 17.000 euros)',
      nl: 'van 50.000 tot 2.000.000 RSD voor de rechtspersoon (ongeveer 425 - 17.000 euro)',
    },
    casoCitato: {
      it: 'Non risulta una multa del Poverenik specifica pubblicata per il GPS sui dipendenti. Nel 2026 il Poverenik ha svolto un\'ispezione straordinaria sul JKP Mediana di Niš, che aveva installato 80 dispositivi GPS sui cassonetti, contestati dai lavoratori dell\'igiene perché ne avrebbero tracciato indirettamente i movimenti; dall\'ispezione risulta che i cassonetti non erano stati messi in funzione. La mancata DPIA o richiesta di parere è punita con una sanzione da 50.000 a 2.000.000 RSD per la persona giuridica.',
      en: 'There is no specific, published Poverenik fine for GPS on employees. In 2026 the Poverenik carried out an extraordinary inspection of JKP Mediana of Nis, which had installed 80 GPS devices on the waste bins, contested by the sanitation workers because they would indirectly track their movements; the inspection found that the bins had not been put into operation. Failure to carry out the DPIA or request the opinion is punished with a fine of 50,000 to 2,000,000 RSD for the legal entity.',
      de: 'Es gibt keine spezifische, veröffentlichte Geldbuße des Poverenik für GPS bei Beschäftigten. Im Jahr 2026 führte der Poverenik eine außerordentliche Prüfung bei JKP Mediana in Nis durch, das 80 GPS-Geräte an den Mülltonnen installiert hatte, was von den Reinigungskräften beanstandet wurde, weil dadurch indirekt ihre Bewegungen verfolgt würden; die Prüfung ergab, dass die Tonnen nicht in Betrieb genommen worden waren. Das Versäumnis, die DSFA durchzuführen oder die Stellungnahme einzuholen, wird mit einer Geldbuße von 50.000 bis 2.000.000 RSD für die juristische Person geahndet.',
      fr: 'Il n’existe pas d’amende spécifique et publiée du Poverenik pour le GPS sur les salariés. En 2026, le Poverenik a mené une inspection extraordinaire de la JKP Mediana de Niš, qui avait installé 80 dispositifs GPS sur les conteneurs à déchets, contestés par les agents d’hygiène car ils suivraient indirectement leurs déplacements ; l’inspection a constaté que les conteneurs n’avaient pas été mis en service. L’absence d’AIPD ou de demande d’avis est sanctionnée par une amende de 50 000 à 2 000 000 RSD pour la personne morale.',
      es: 'No consta una multa específica y publicada del Poverenik por el GPS sobre empleados. En 2026 el Poverenik realizó una inspección extraordinaria a la JKP Mediana de Niš, que había instalado 80 dispositivos GPS en los contenedores de basura, impugnados por los trabajadores de higiene porque rastrearían indirectamente sus movimientos; la inspección constató que los contenedores no se habían puesto en funcionamiento. La falta de EIPD o de solicitud de dictamen se sanciona con una multa de 50.000 a 2.000.000 RSD para la persona jurídica.',
      nl: 'Er is geen specifieke, gepubliceerde boete van de Poverenik voor GPS op werknemers bekend. In 2026 voerde de Poverenik een buitengewone inspectie uit bij JKP Mediana in Nis, dat 80 GPS-apparaten op de afvalcontainers had geïnstalleerd, aangevochten door de schoonmaakmedewerkers omdat die indirect hun bewegingen zouden volgen; de inspectie stelde vast dat de containers niet in gebruik waren genomen. Het niet uitvoeren van de DPIA of het niet inwinnen van het advies wordt bestraft met een boete van 50.000 tot 2.000.000 RSD voor de rechtspersoon.',
    },
    urlFonte: FONTE_DANAS_MEDIANA.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_LPDP,
    FONTE_LISTA_DPIA,
    FONTE_PR_LEGAL,
    FONTE_POVERENIK,
    FONTE_DANAS_MEDIANA,
    FONTE_N1_MEDIANA,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
