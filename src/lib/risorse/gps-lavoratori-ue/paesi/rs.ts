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

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_LPDP = {
  titolo: 'Legge sulla protezione dei dati (LPDP, 87/2018) - testo ufficiale',
  url: 'https://www.poverenik.rs/en/закони4/2970-закон-о-заштити-података-о-личности-сл-гласник-рс-бр-87-2018-од-13-11-2018.html',
};
const FONTE_LISTA_DPIA = {
  titolo:
    'Poverenik, decisione sulla lista dei trattamenti che richiedono una DPIA (Gazzetta 45/2019)',
  url: 'https://www.pravno-informacioni-sistem.rs/SlGlasnikPortal/eli/rep/sgrs/drugidrzavniorganiorganizacije/odluka/2019/45/1/reg',
};
const FONTE_PR_LEGAL = {
  titolo:
    'PR Legal, GPS sui veicoli aziendali (lista DPIA, voce monitoraggio dipendenti)',
  url: 'https://www.prlegal.rs/sr/da-li-pratite-kretanje-kompanijskih-vozila-gps-om/',
};
const FONTE_POVERENIK = {
  titolo: 'Poverenik (Garante serbo), competenze e contatti',
  url: 'https://www.poverenik.rs/en/o-nama/authority.html',
};
const FONTE_N1_MEDIANA = {
  titolo:
    'N1, GPS su 80 cassonetti del JKP Mediana di Nis (ispezione del Poverenik)',
  url: 'https://n1info.rs/vesti/u-nisu-postavljeni-gps-uredjaji-za-pracenje-kanti-za-djubre-radnici-higijene-se-bune/',
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
    ente: 'Poverenik (Garante serbo per l\'informazione e la protezione dei dati)',
    portale: FONTE_POVERENIK.url,
    urlFonte: FONTE_POVERENIK.url,
    verificatoIl: '2026-06-15',
    note: {
      it: 'La Serbia e un paese candidato, fuori dall\'UE, con una legge (LPDP) che rispecchia il GDPR. Unica autorita nazionale, il Poverenik; nessuna ripartizione regionale.',
      en: 'Serbia is a candidate country, outside the EU, with a law (LPDP) that mirrors the GDPR. The only national authority is the Poverenik; there is no regional subdivision.',
      de: 'Serbien ist ein Beitrittskandidat ausserhalb der EU mit einem Gesetz (LPDP), das die DSGVO widerspiegelt. Die einzige nationale Behoerde ist der Poverenik; es gibt keine regionale Aufteilung.',
      fr: 'La Serbie est un pays candidat, hors de l\'UE, doté d\'une loi (LPDP) qui reflète le RGPD. La seule autorité nationale est le Poverenik; il n\'y a aucune répartition régionale.',
      es: 'Serbia es un país candidato, fuera de la UE, con una ley (LPDP) que refleja el RGPD. La única autoridad nacional es el Poverenik; no hay división regional.',
      nl: 'Servië is een kandidaat-land, buiten de EU, met een wet (LPDP) die de AVG weerspiegelt. De enige nationale autoriteit is de Poverenik; er is geen regionale onderverdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione dettagliata e preventiva ai lavoratori (LPDP art. 23)',
        en: 'Detailed and prior information to workers (LPDP art. 23)',
        de: 'Detaillierte und vorherige Information der Beschaeftigten (LPDP Art. 23)',
        fr: 'Information détaillée et préalable des salariés (LPDP art. 23)',
        es: 'Información detallada y previa a los trabajadores (LPDP art. 23)',
        nl: 'Gedetailleerde en voorafgaande informatie aan werknemers (LPDP art. 23)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'I lavoratori che useranno i veicoli vanno informati in dettaglio sul trattamento: titolare, finalita, base giuridica, destinatari, conservazione e diritti.',
        en: 'Workers who will use the vehicles must be informed in detail about the processing: controller, purposes, legal basis, recipients, retention and rights.',
        de: 'Beschaeftigte, die die Fahrzeuge nutzen werden, muessen ausfuehrlich ueber die Verarbeitung informiert werden: Verantwortlicher, Zwecke, Rechtsgrundlage, Empfaenger, Speicherdauer und Rechte.',
        fr: 'Les salariés qui utiliseront les véhicules doivent être informés en détail du traitement: responsable, finalités, base juridique, destinataires, conservation et droits.',
        es: 'Los trabajadores que utilizarán los vehículos deben ser informados en detalle sobre el tratamiento: responsable, finalidades, base jurídica, destinatarios, conservación y derechos.',
        nl: 'Werknemers die de voertuigen gaan gebruiken, moeten in detail over de verwerking worden geïnformeerd: verwerkingsverantwoordelijke, doeleinden, rechtsgrondslag, ontvangers, bewaring en rechten.',
      },
      fonte: FONTE_LPDP,
    },
    {
      voce: {
        it: 'Autorizzazione o registrazione preventiva di un\'autorita prima di installare',
        en: 'Authorisation or prior registration with an authority before installing',
        de: 'Genehmigung oder vorherige Registrierung bei einer Behoerde vor der Installation',
        fr: 'Autorisation ou enregistrement préalable auprès d\'une autorité avant l\'installation',
        es: 'Autorización o registro previo ante una autoridad antes de instalar',
        nl: 'Toestemming of voorafgaande registratie bij een autoriteit vóór installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: 'La LPDP rispecchia il modello di responsabilizzazione del GDPR: la vecchia registrazione e stata abolita.',
        en: 'The LPDP mirrors the GDPR accountability model: the old registration has been abolished.',
        de: 'Das LPDP spiegelt das Rechenschaftsmodell der DSGVO wider: die alte Registrierung wurde abgeschafft.',
        fr: 'La LPDP reflète le modèle de responsabilisation du RGPD: l\'ancien enregistrement a été supprimé.',
        es: 'La LPDP refleja el modelo de responsabilidad proactiva del RGPD: el antiguo registro ha sido abolido.',
        nl: 'De LPDP weerspiegelt het verantwoordingsmodel van de AVG: de oude registratie is afgeschaft.',
      },
      fonte: FONTE_POVERENIK,
    },
    {
      voce: {
        it: 'Base = interesse legittimo con test tripartito documentato, non il consenso',
        en: 'Basis = legitimate interest with a documented three-part test, not consent',
        de: 'Grundlage = berechtigtes Interesse mit dokumentierter dreiteiliger Pruefung, nicht Einwilligung',
        fr: 'Base = intérêt légitime avec un test en trois parties documenté, et non le consentement',
        es: 'Base = interés legítimo con una prueba tripartita documentada, no el consentimiento',
        nl: 'Grondslag = gerechtvaardigd belang met een gedocumenteerde drieledige toets, niet toestemming',
      },
      risposta: 'si',
      dettaglio: {
        it: 'La base e l\'interesse legittimo del datore, che deve essere chiaramente definito, documentato con un test tripartito e comunicato al lavoratore; il consenso nel rapporto di lavoro e la base piu debole.',
        en: 'The basis is the employer\'s legitimate interest, which must be clearly defined, documented with a three-part test and communicated to the worker; consent in the employment relationship is the weakest basis.',
        de: 'Grundlage ist das berechtigte Interesse des Arbeitgebers, das klar definiert, mit einer dreiteiligen Pruefung dokumentiert und dem Beschaeftigten mitgeteilt werden muss; die Einwilligung im Arbeitsverhaeltnis ist die schwaechste Grundlage.',
        fr: 'La base est l\'intérêt légitime de l\'employeur, qui doit être clairement défini, documenté par un test en trois parties et communiqué au salarié; le consentement dans la relation de travail est la base la plus faible.',
        es: 'La base es el interés legítimo del empleador, que debe estar claramente definido, documentado con una prueba tripartita y comunicado al trabajador; el consentimiento en la relación laboral es la base más débil.',
        nl: 'De grondslag is het gerechtvaardigd belang van de werkgever, dat duidelijk moet worden omschreven, met een drieledige toets gedocumenteerd en aan de werknemer meegedeeld; toestemming in de arbeidsrelatie is de zwakste grondslag.',
      },
      fonte: FONTE_PR_LEGAL,
    },
    {
      voce: {
        it: 'Niente tracciamento continuo (grave ingerenza); solo orario e finalita',
        en: 'No continuous tracking (serious interference); only working hours and purpose',
        de: 'Keine kontinuierliche Ortung (schwerwiegender Eingriff); nur Arbeitszeit und Zweck',
        fr: 'Pas de suivi continu (ingérence grave); uniquement horaires de travail et finalité',
        es: 'Sin seguimiento continuo (injerencia grave); solo horario y finalidad',
        nl: 'Geen continue tracking (ernstige inmenging); alleen werktijd en doel',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Per il Poverenik il monitoraggio GPS continuo e una grave ingerenza nella privacy, perche consente il tracciamento in tempo reale di movimenti e comportamenti; le giustificazioni generiche di tutela del patrimonio sono respinte.',
        en: 'For the Poverenik, continuous GPS monitoring is a serious interference with privacy, because it allows real-time tracking of movements and behaviour; generic justifications of asset protection are rejected.',
        de: 'Fuer den Poverenik ist die kontinuierliche GPS-Ueberwachung ein schwerwiegender Eingriff in die Privatsphaere, da sie eine Echtzeitverfolgung von Bewegungen und Verhalten ermoeglicht; pauschale Rechtfertigungen mit dem Schutz von Vermoegenswerten werden abgelehnt.',
        fr: 'Pour le Poverenik, la surveillance GPS continue constitue une ingérence grave dans la vie privée, car elle permet le suivi en temps réel des déplacements et des comportements; les justifications générales de protection du patrimoine sont rejetées.',
        es: 'Para el Poverenik, la monitorización GPS continua es una injerencia grave en la privacidad, porque permite el seguimiento en tiempo real de movimientos y comportamientos; las justificaciones genéricas de protección del patrimonio se rechazan.',
        nl: 'Voor de Poverenik is continue GPS-monitoring een ernstige inmenging in de privacy, omdat het realtime tracking van bewegingen en gedrag mogelijk maakt; algemene rechtvaardigingen op grond van bescherming van bezittingen worden afgewezen.',
      },
      fonte: FONTE_LPDP,
    },
    {
      voce: {
        it: 'Valutazione d\'impatto (DPIA) e parere preventivo del Poverenik per il monitoraggio dei dipendenti tramite app o sistemi di tracciamento (lista, LPDP art. 54)',
        en: 'Impact assessment (DPIA) and prior opinion of the Poverenik for monitoring employees via apps or tracking systems (list, LPDP art. 54)',
        de: 'Folgenabschaetzung (DSFA) und vorherige Stellungnahme des Poverenik fuer die Ueberwachung von Beschaeftigten ueber Apps oder Ortungssysteme (Liste, LPDP Art. 54)',
        fr: 'Analyse d\'impact (AIPD) et avis préalable du Poverenik pour la surveillance des salariés via des applications ou des systèmes de suivi (liste, LPDP art. 54)',
        es: 'Evaluación de impacto (EIPD) y dictamen previo del Poverenik para la monitorización de empleados mediante apps o sistemas de seguimiento (lista, LPDP art. 54)',
        nl: 'Effectbeoordeling (DPIA) en voorafgaand advies van de Poverenik voor het monitoren van werknemers via apps of trackingsystemen (lijst, LPDP art. 54)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il trattamento dei dati dei dipendenti tramite app o sistemi che ne tracciano lavoro, movimenti e comunicazione e nella lista che richiede una valutazione d\'impatto; per questi trattamenti il titolare deve, prima di iniziare, svolgere la DPIA e chiedere il parere del Poverenik.',
        en: 'The processing of employee data via apps or systems that track their work, movements and communication is on the list requiring an impact assessment; for these processing operations the controller must, before starting, carry out the DPIA and request the opinion of the Poverenik.',
        de: 'Die Verarbeitung von Beschaeftigtendaten ueber Apps oder Systeme, die deren Arbeit, Bewegungen und Kommunikation verfolgen, steht auf der Liste, die eine Folgenabschaetzung erfordert; fuer diese Verarbeitungen muss der Verantwortliche vor Beginn die DSFA durchfuehren und die Stellungnahme des Poverenik einholen.',
        fr: 'Le traitement des données des salariés au moyen d\'applications ou de systèmes qui suivent leur travail, leurs déplacements et leurs communications figure sur la liste exigeant une analyse d\'impact; pour ces traitements, le responsable doit, avant de commencer, réaliser l\'AIPD et solliciter l\'avis du Poverenik.',
        es: 'El tratamiento de datos de los empleados mediante apps o sistemas que rastrean su trabajo, movimientos y comunicación está en la lista que requiere una evaluación de impacto; para estos tratamientos el responsable debe, antes de comenzar, realizar la EIPD y solicitar el dictamen del Poverenik.',
        nl: 'De verwerking van werknemersgegevens via apps of systemen die hun werk, bewegingen en communicatie volgen, staat op de lijst die een effectbeoordeling vereist; voor deze verwerkingen moet de verwerkingsverantwoordelijke vóór aanvang de DPIA uitvoeren en het advies van de Poverenik inwinnen.',
      },
      fonte: FONTE_LPDP,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Definisci e documenta l\'interesse legittimo con un test tripartito.',
        en: 'Define and document the legitimate interest with a three-part test.',
        de: 'Definieren und dokumentieren Sie das berechtigte Interesse mit einer dreiteiligen Pruefung.',
        fr: 'Définissez et documentez l\'intérêt légitime au moyen d\'un test en trois parties.',
        es: 'Defina y documente el interés legítimo con una prueba tripartita.',
        nl: 'Definieer en documenteer het gerechtvaardigd belang met een drieledige toets.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Informa in dettaglio i lavoratori che useranno i veicoli (art. 23).',
        en: 'Inform in detail the workers who will use the vehicles (art. 23).',
        de: 'Informieren Sie die Beschaeftigten, die die Fahrzeuge nutzen werden, ausfuehrlich (Art. 23).',
        fr: 'Informez en détail les salariés qui utiliseront les véhicules (art. 23).',
        es: 'Informe en detalle a los trabajadores que utilizarán los vehículos (art. 23).',
        nl: 'Informeer de werknemers die de voertuigen gaan gebruiken in detail (art. 23).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Svolgi la valutazione d\'impatto (DPIA) e chiedi il parere preventivo del Poverenik prima di iniziare.',
        en: 'Carry out the impact assessment (DPIA) and request the prior opinion of the Poverenik before starting.',
        de: 'Fuehren Sie die Folgenabschaetzung (DSFA) durch und holen Sie vor Beginn die vorherige Stellungnahme des Poverenik ein.',
        fr: 'Réalisez l\'analyse d\'impact (AIPD) et sollicitez l\'avis préalable du Poverenik avant de commencer.',
        es: 'Realice la evaluación de impacto (EIPD) y solicite el dictamen previo del Poverenik antes de comenzar.',
        nl: 'Voer de effectbeoordeling (DPIA) uit en vraag het voorafgaande advies van de Poverenik vóór aanvang.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Limita il GPS all\'orario e alla finalita: niente tracciamento continuo.',
        en: 'Limit GPS to working hours and the purpose: no continuous tracking.',
        de: 'Beschraenken Sie das GPS auf die Arbeitszeit und den Zweck: keine kontinuierliche Ortung.',
        fr: 'Limitez le GPS aux horaires de travail et à la finalité: pas de suivi continu.',
        es: 'Limite el GPS al horario y a la finalidad: sin seguimiento continuo.',
        nl: 'Beperk de GPS tot de werktijd en het doel: geen continue tracking.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema in modo proporzionato e rispetta il diritto di opposizione dei lavoratori.',
        en: 'Configure the system in a proportionate way and respect the workers\' right to object.',
        de: 'Konfigurieren Sie das System verhaeltnismaessig und respektieren Sie das Widerspruchsrecht der Beschaeftigten.',
        fr: 'Configurez le système de manière proportionnée et respectez le droit d\'opposition des salariés.',
        es: 'Configure el sistema de forma proporcionada y respete el derecho de oposición de los trabajadores.',
        nl: 'Configureer het systeem op een evenredige manier en respecteer het recht van werknemers om bezwaar te maken.',
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
      de: 'von 50.000 bis 2.000.000 RSD fuer die juristische Person (etwa 425 - 17.000 Euro)',
      fr: 'de 50 000 à 2 000 000 RSD pour la personne morale (environ 425 - 17 000 euros)',
      es: 'de 50.000 a 2.000.000 RSD para la persona jurídica (unos 425 - 17.000 euros)',
      nl: 'van 50.000 tot 2.000.000 RSD voor de rechtspersoon (ongeveer 425 - 17.000 euro)',
    },
    casoCitato: {
      it: 'Non risulta una multa del Poverenik specifica e pubblicata per il GPS sui dipendenti. Nel 2026 il Poverenik ha aperto un\'ispezione straordinaria sul JKP Mediana di Nis, che aveva installato 80 dispositivi GPS sui cassonetti, contestati dai lavoratori dell\'igiene perche ne tracciavano indirettamente i movimenti. La mancata DPIA o richiesta di parere e punita con una sanzione da 50.000 a 2.000.000 RSD per la persona giuridica.',
      en: 'There is no specific, published Poverenik fine for GPS on employees. In 2026 the Poverenik opened an extraordinary inspection of JKP Mediana of Nis, which had installed 80 GPS devices on the waste bins, contested by the sanitation workers because they indirectly tracked their movements. Failure to carry out the DPIA or request the opinion is punished with a fine of 50,000 to 2,000,000 RSD for the legal entity.',
      de: 'Es gibt keine spezifische, veroeffentlichte Geldbusse des Poverenik fuer GPS bei Beschaeftigten. Im Jahr 2026 leitete der Poverenik eine ausserordentliche Pruefung von JKP Mediana in Nis ein, das 80 GPS-Geraete an den Muelltonnen installiert hatte, was von den Reinigungskraeften beanstandet wurde, weil dadurch indirekt ihre Bewegungen verfolgt wurden. Das Versaeumnis, die DSFA durchzufuehren oder die Stellungnahme einzuholen, wird mit einer Geldbusse von 50.000 bis 2.000.000 RSD fuer die juristische Person geahndet.',
      fr: 'Il n\'existe pas d\'amende spécifique et publiée du Poverenik pour le GPS sur les salariés. En 2026, le Poverenik a ouvert une inspection extraordinaire de la JKP Mediana de Nis, qui avait installé 80 dispositifs GPS sur les conteneurs à déchets, contestés par les agents d\'hygiène car ils suivaient indirectement leurs déplacements. L\'absence d\'AIPD ou de demande d\'avis est sanctionnée par une amende de 50 000 à 2 000 000 RSD pour la personne morale.',
      es: 'No consta una multa específica y publicada del Poverenik por el GPS sobre empleados. En 2026 el Poverenik abrió una inspección extraordinaria a la JKP Mediana de Nis, que había instalado 80 dispositivos GPS en los contenedores de basura, impugnados por los trabajadores de higiene porque rastreaban indirectamente sus movimientos. La falta de EIPD o de solicitud de dictamen se sanciona con una multa de 50.000 a 2.000.000 RSD para la persona jurídica.',
      nl: 'Er is geen specifieke, gepubliceerde boete van de Poverenik voor GPS op werknemers bekend. In 2026 opende de Poverenik een buitengewone inspectie van JKP Mediana in Nis, dat 80 GPS-apparaten op de afvalcontainers had geïnstalleerd, aangevochten door de schoonmaakmedewerkers omdat ze indirect hun bewegingen volgden. Het niet uitvoeren van de DPIA of het niet inwinnen van het advies wordt bestraft met een boete van 50.000 tot 2.000.000 RSD voor de rechtspersoon.',
    },
    urlFonte: FONTE_N1_MEDIANA.url,
  },

  fonti: [
    FONTE_LPDP,
    FONTE_LISTA_DPIA,
    FONTE_PR_LEGAL,
    FONTE_POVERENIK,
    FONTE_N1_MEDIANA,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
