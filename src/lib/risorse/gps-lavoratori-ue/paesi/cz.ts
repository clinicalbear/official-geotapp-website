/**
 * Scheda-paese Repubblica Ceca per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. 316 dello Zakonik prace (Codice del lavoro), guida UOOU/gdpr.cz sul
 * monitoraggio dei veicoli aziendali tramite GPS, lista UOOU dei trattamenti
 * che richiedono una DPIA, pagina UOOU per le segnalazioni, caso UOOU contro
 * Ceska posta sui GPS dei portalettere e GDPR.
 *
 * La Repubblica Ceca non e' uno Stato federale: c'e' un'unica autorita'
 * nazionale, l'UOOU, senza ripartizione regionale.
 * Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_ZP_316 = {
  titolo: 'Zakonik prace (Codice del lavoro), art. 316',
  url: 'https://www.zakonyprolidi.cz/cs/2006-262',
};
const FONTE_UOOU_GPS = {
  titolo: 'UOOU/gdpr.cz, monitoraggio dei veicoli aziendali tramite GPS',
  url: 'https://www.gdpr.cz/monitorovani-sluzebnich-vozidel-pomoci-gps',
};
const FONTE_UOOU_DPIA = {
  titolo: 'UOOU, lista dei trattamenti che richiedono una DPIA',
  url: 'https://uoou.gov.cz/media/profesional/seznam-operaci-zpracovani-nepodlehajicich-pozadavku-na-dpia.pdf',
};
const FONTE_UOOU_SEGNALAZIONE = {
  titolo: 'UOOU, presentare una segnalazione',
  url: 'https://uoou.gov.cz/verejnost/stiznost-na-spravce-nebo-zpracovatele',
};
const FONTE_UOOU_CESKA_POSTA = {
  titolo: 'UOOU, sanzione Ceska posta (GPS portalettere)',
  url: 'https://www.epravo.cz/top/clanky/gps-monitoring-zamestnancu-podruhe-106141.html',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const repubblicaCeca: SchedaPaese = {
  codiceISO: 'CZ',
  slugCanonico: 'repubblica-ceca',
  nome: 'Repubblica Ceca',
  nomi: {
    it: 'Repubblica Ceca',
    en: 'Czech Republic',
    'en-us': 'Czech Republic',
    'en-gb': 'Czech Republic',
    'en-au': 'Czech Republic',
    'en-ie': 'Czech Republic',
    'en-ca': 'Czech Republic',
    de: 'Tschechien',
    nl: 'Tsjechië',
    fr: 'République tchèque',
    es: 'República Checa',
    pt: 'Chéquia',
    da: 'Tjekkiet',
    sv: 'Tjeckien',
    nb: 'Tsjekkia',
    ru: 'Чехия',
  },
  bandiera: '🇨🇿',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'UOOU (Urad pro ochranu osobnich udaju)',
    portale: FONTE_UOOU_SEGNALAZIONE.url,
    urlFonte: FONTE_UOOU_SEGNALAZIONE.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Repubblica Ceca ha un'unica autorita' nazionale, l'UOOU; nessuna ripartizione regionale.",
      en: 'The Czech Republic has a single national authority, the UOOU; there is no regional breakdown.',
      de: 'Die Tschechische Republik hat eine einzige nationale Behoerde, die UOOU; es gibt keine regionale Aufteilung.',
      fr: "La République tchèque dispose d'une seule autorité nationale, l'UOOU; il n'y a aucune répartition régionale.",
      es: 'La República Checa tiene una única autoridad nacional, la UOOU; no hay reparto regional.',
      nl: 'Tsjechië heeft één nationale autoriteit, de UOOU; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione diretta ai lavoratori su portata e modalita del monitoraggio (Zakonik prace art. 316)',
        en: 'Direct information to workers on the scope and manner of the monitoring (Zakonik prace art. 316)',
        de: 'Direkte Information der Arbeitnehmer ueber Umfang und Art der Ueberwachung (Zakonik prace Art. 316)',
        fr: 'Information directe des travailleurs sur la portée et les modalités de la surveillance (Zakonik prace art. 316)',
        es: 'Información directa a los trabajadores sobre el alcance y la forma de la monitorización (Zakonik prace art. 316)',
        nl: 'Rechtstreekse informatie aan werknemers over de omvang en de wijze van de monitoring (Zakonik prace art. 316)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Se sussiste un motivo serio per il monitoraggio, il datore e\' obbligato a informare direttamente i lavoratori sulla portata del controllo e sul modo in cui viene svolto.',
        en: 'If there is a serious reason for the monitoring, the employer is required to inform workers directly about the scope of the control and the way in which it is carried out.',
        de: 'Liegt ein schwerwiegender Grund fuer die Ueberwachung vor, ist der Arbeitgeber verpflichtet, die Arbeitnehmer unmittelbar ueber den Umfang der Kontrolle und die Art ihrer Durchfuehrung zu informieren.',
        fr: "S'il existe un motif sérieux justifiant la surveillance, l'employeur est tenu d'informer directement les travailleurs de la portée du contrôle et de la manière dont il est exercé.",
        es: 'Si existe un motivo serio para la monitorización, el empresario está obligado a informar directamente a los trabajadores sobre el alcance del control y la forma en que se lleva a cabo.',
        nl: 'Als er een ernstige reden voor de monitoring bestaat, is de werkgever verplicht de werknemers rechtstreeks te informeren over de omvang van de controle en de wijze waarop deze wordt uitgevoerd.',
      },
      fonte: FONTE_ZP_316,
    },
    {
      voce: {
        it: "Divieto di sorvegliare i lavoratori senza un motivo serio inerente alla natura dell'attivita (art. 316)",
        en: "Prohibition on monitoring workers without a serious reason inherent to the nature of the activity (art. 316)",
        de: 'Verbot, Arbeitnehmer ohne einen schwerwiegenden, in der Art der Taetigkeit liegenden Grund zu ueberwachen (Art. 316)',
        fr: "Interdiction de surveiller les travailleurs sans un motif sérieux inhérent à la nature de l'activité (art. 316)",
        es: 'Prohibición de vigilar a los trabajadores sin un motivo serio inherente a la naturaleza de la actividad (art. 316)',
        nl: 'Verbod om werknemers te surveilleren zonder een ernstige, aan de aard van de activiteit inherente reden (art. 316)',
      },
      risposta: 'no',
      dettaglio: {
        it: 'Il datore non puo\', senza un motivo serio inerente alla particolare natura della sua attivita\', ledere la privacy del lavoratore sottoponendolo a sorveglianza aperta o occulta (incluso il tracciamento).',
        en: 'Without a serious reason inherent to the particular nature of its activity, the employer may not infringe the worker\'s privacy by subjecting them to open or covert surveillance (including tracking).',
        de: 'Ohne einen schwerwiegenden, in der besonderen Art seiner Taetigkeit liegenden Grund darf der Arbeitgeber die Privatsphaere des Arbeitnehmers nicht verletzen, indem er ihn einer offenen oder verdeckten Ueberwachung (einschliesslich Ortung) unterwirft.',
        fr: "Sans un motif sérieux inhérent à la nature particulière de son activité, l'employeur ne peut pas porter atteinte à la vie privée du travailleur en le soumettant à une surveillance ouverte ou occulte (y compris la géolocalisation).",
        es: 'Sin un motivo serio inherente a la naturaleza particular de su actividad, el empresario no puede vulnerar la privacidad del trabajador sometiéndolo a vigilancia abierta u oculta (incluida la localización).',
        nl: 'Zonder een ernstige, aan de bijzondere aard van zijn activiteit inherente reden mag de werkgever de privacy van de werknemer niet schenden door hem aan open of verborgen toezicht (waaronder tracking) te onderwerpen.',
      },
      fonte: FONTE_ZP_316,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation from an authority before installation',
        de: 'Vorherige Genehmigung einer Behoerde vor der Installation',
        fr: "Autorisation préalable d'une autorité avant l'installation",
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva dell'UOOU; il titolare valuta da se' base giuridica e proporzionalita', con DPIA quando richiesta.",
        en: 'No prior authorisation from the UOOU is required; the controller assesses the legal basis and proportionality itself, with a DPIA where required.',
        de: 'Eine vorherige Genehmigung der UOOU ist nicht erforderlich; der Verantwortliche bewertet Rechtsgrundlage und Verhaeltnismaessigkeit selbst, mit einer DSFA, sofern erforderlich.',
        fr: "Aucune autorisation préalable de l'UOOU n'est nécessaire; le responsable du traitement évalue lui-même la base juridique et la proportionnalité, avec une AIPD lorsqu'elle est requise.",
        es: 'No se necesita autorización previa de la UOOU; el responsable evalúa por sí mismo la base jurídica y la proporcionalidad, con una EIPD cuando sea exigible.',
        nl: 'Er is geen voorafgaande toestemming van de UOOU vereist; de verwerkingsverantwoordelijke beoordeelt zelf de rechtsgrond en de evenredigheid, met een DPIA waar vereist.',
      },
      fonte: FONTE_UOOU_GPS,
    },
    {
      voce: {
        it: 'GPS proporzionato (protezione del patrimonio, registro viaggi), non controllo continuo; opt-out per l\'uso privato',
        en: 'Proportionate GPS (asset protection, trip logbook), not continuous monitoring; opt-out for private use',
        de: 'Verhaeltnismaessiges GPS (Schutz des Vermoegens, Fahrtenbuch), keine staendige Ueberwachung; Opt-out fuer die private Nutzung',
        fr: 'GPS proportionné (protection du patrimoine, carnet de bord), pas de contrôle continu; opt-out pour usage privé',
        es: 'GPS proporcionado (protección del patrimonio, libro de viajes), no control continuo; opt-out para el uso privado',
        nl: 'Evenredig GPS (bescherming van het vermogen, rittenregistratie), geen continue controle; opt-out voor privégebruik',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per l'UOOU il GPS e' ammesso soprattutto per la protezione del patrimonio e il registro dei viaggi, non per un controllo intensivo o costante dei lavoratori; per l'uso privato del veicolo si raccomanda la disattivazione (opt-out).",
        en: 'For the UOOU, GPS is permitted mainly for asset protection and the trip logbook, not for intensive or constant monitoring of workers; for private use of the vehicle, deactivation (opt-out) is recommended.',
        de: 'Fuer die UOOU ist GPS vor allem zum Schutz des Vermoegens und fuer das Fahrtenbuch zulaessig, nicht zur intensiven oder staendigen Ueberwachung der Arbeitnehmer; fuer die private Nutzung des Fahrzeugs wird die Deaktivierung (Opt-out) empfohlen.',
        fr: "Pour l'UOOU, le GPS est admis surtout pour la protection du patrimoine et le carnet de bord, et non pour un contrôle intensif ou constant des travailleurs; pour l'usage privé du véhicule, la désactivation (opt-out) est recommandée.",
        es: 'Para la UOOU, el GPS se admite sobre todo para la protección del patrimonio y el libro de viajes, no para un control intensivo o constante de los trabajadores; para el uso privado del vehículo se recomienda la desactivación (opt-out).',
        nl: 'Voor de UOOU is GPS vooral toegestaan voor de bescherming van het vermogen en de rittenregistratie, niet voor intensieve of voortdurende controle van werknemers; voor privégebruik van het voertuig wordt deactivering (opt-out) aanbevolen.',
      },
      fonte: FONTE_UOOU_GPS,
    },
    {
      voce: {
        it: 'Valutazione d\'impatto (DPIA) per il monitoraggio della posizione o del movimento dei lavoratori (lista UOOU)',
        en: 'Impact assessment (DPIA) for monitoring the location or movement of workers (UOOU list)',
        de: 'Datenschutz-Folgenabschaetzung (DSFA) fuer die Ueberwachung des Standorts oder der Bewegung der Arbeitnehmer (UOOU-Liste)',
        fr: "Analyse d'impact (AIPD) pour la surveillance de la localisation ou des déplacements des travailleurs (liste UOOU)",
        es: 'Evaluación de impacto (EIPD) para la monitorización de la ubicación o el movimiento de los trabajadores (lista UOOU)',
        nl: 'Effectbeoordeling (DPIA) voor de monitoring van de locatie of beweging van werknemers (UOOU-lijst)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'La lista UOOU richiede la DPIA per i trattamenti che monitorano il movimento o la posizione delle persone e per i sistemi di rilevazione presenze.',
        en: 'The UOOU list requires a DPIA for processing operations that monitor the movement or location of persons and for attendance recording systems.',
        de: 'Die UOOU-Liste verlangt eine DSFA fuer Verarbeitungen, die die Bewegung oder den Standort von Personen ueberwachen, sowie fuer Anwesenheitserfassungssysteme.',
        fr: "La liste UOOU exige une AIPD pour les traitements qui surveillent les déplacements ou la localisation des personnes et pour les systèmes de gestion des présences.",
        es: 'La lista UOOU exige una EIPD para los tratamientos que monitorizan el movimiento o la ubicación de las personas y para los sistemas de registro de presencia.',
        nl: 'De UOOU-lijst vereist een DPIA voor verwerkingen die de beweging of locatie van personen monitoren en voor aanwezigheidsregistratiesystemen.',
      },
      fonte: FONTE_UOOU_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: "Verifica un motivo serio inerente alla natura della tua attivita' per il monitoraggio (art. 316).",
        en: 'Verify a serious reason inherent to the nature of your activity for the monitoring (art. 316).',
        de: 'Pruefen Sie einen schwerwiegenden, in der Art Ihrer Taetigkeit liegenden Grund fuer die Ueberwachung (Art. 316).',
        fr: "Vérifiez l'existence d'un motif sérieux inhérent à la nature de votre activité pour la surveillance (art. 316).",
        es: 'Verifique un motivo serio inherente a la naturaleza de su actividad para la monitorización (art. 316).',
        nl: 'Controleer of er een ernstige, aan de aard van uw activiteit inherente reden voor de monitoring bestaat (art. 316).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Individua una base giuridica valida (di norma interesse legittimo, non il consenso).',
        en: 'Identify a valid legal basis (normally legitimate interest, not consent).',
        de: 'Bestimmen Sie eine gueltige Rechtsgrundlage (in der Regel das berechtigte Interesse, nicht die Einwilligung).',
        fr: 'Déterminez une base juridique valable (en règle générale l\'intérêt légitime, et non le consentement).',
        es: 'Identifique una base jurídica válida (normalmente el interés legítimo, no el consentimiento).',
        nl: 'Bepaal een geldige rechtsgrond (doorgaans gerechtvaardigd belang, niet toestemming).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio della posizione dei lavoratori.",
        en: 'Carry out the impact assessment (DPIA) for monitoring the location of workers.',
        de: 'Fuehren Sie die Datenschutz-Folgenabschaetzung (DSFA) fuer die Ueberwachung des Standorts der Arbeitnehmer durch.',
        fr: "Réalisez l'analyse d'impact (AIPD) pour la surveillance de la localisation des travailleurs.",
        es: 'Realice la evaluación de impacto (EIPD) para la monitorización de la ubicación de los trabajadores.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor de monitoring van de locatie van werknemers.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Informa direttamente i lavoratori su portata e modalita' del controllo (art. 316 + art. 13 GDPR).",
        en: 'Inform workers directly about the scope and manner of the control (art. 316 + art. 13 GDPR).',
        de: 'Informieren Sie die Arbeitnehmer unmittelbar ueber Umfang und Art der Kontrolle (Art. 316 + Art. 13 DSGVO).',
        fr: 'Informez directement les travailleurs de la portée et des modalités du contrôle (art. 316 + art. 13 RGPD).',
        es: 'Informe directamente a los trabajadores sobre el alcance y la forma del control (art. 316 + art. 13 RGPD).',
        nl: 'Informeer de werknemers rechtstreeks over de omvang en de wijze van de controle (art. 316 + art. 13 AVG).',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Configura il sistema in modo proporzionato: niente controllo continuo, opt-out per l'uso privato.",
        en: 'Configure the system in a proportionate way: no continuous monitoring, opt-out for private use.',
        de: 'Konfigurieren Sie das System verhaeltnismaessig: keine staendige Ueberwachung, Opt-out fuer die private Nutzung.',
        fr: "Configurez le système de manière proportionnée: pas de contrôle continu, opt-out pour l'usage privé.",
        es: 'Configure el sistema de forma proporcionada: sin control continuo, opt-out para el uso privado.',
        nl: 'Configureer het systeem op een evenredige manier: geen continue controle, opt-out voor privégebruik.',
      },
    },
    {
      passo: 6,
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
      ente: 'UOOU, segnalazioni',
      portale: FONTE_UOOU_SEGNALAZIONE.url,
      urlFonte: FONTE_UOOU_SEGNALAZIONE.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '80.000 CZK (circa 3.200 euro)',
      en: '80,000 CZK (about 3,200 euros)',
      de: '80.000 CZK (etwa 3.200 Euro)',
      fr: '80 000 CZK (environ 3 200 euros)',
      es: '80.000 CZK (unos 3.200 euros)',
      nl: '80.000 CZK (ongeveer 3.200 euro)',
    },
    casoCitato: {
      it: "UOOU contro Ceska posta (Poste Ceche): tra marzo 2012 e febbraio 2013 l'azienda aveva dotato 7.770 portalettere di localizzatori GPS che registravano l'intero percorso durante il turno; trattamento sproporzionato, durato troppo a lungo e su troppe persone. Multa 80.000 CZK. Deciso sotto la vecchia legge pre-GDPR, ma il principio resta.",
      en: 'UOOU v. Ceska posta (Czech Post): between March 2012 and February 2013 the company had equipped 7,770 postal carriers with GPS trackers that recorded the entire route during the shift; processing that was disproportionate, lasted too long and covered too many people. Fine 80,000 CZK. Decided under the old pre-GDPR law, but the principle stands.',
      de: 'UOOU gegen Ceska posta (Tschechische Post): zwischen Maerz 2012 und Februar 2013 hatte das Unternehmen 7.770 Briefträger mit GPS-Ortern ausgestattet, die waehrend der Schicht die gesamte Route aufzeichneten; eine unverhaeltnismaessige Verarbeitung, die zu lange dauerte und zu viele Personen betraf. Bussgeld 80.000 CZK. Entschieden nach dem alten Recht vor der DSGVO, doch der Grundsatz bleibt bestehen.',
      fr: "UOOU contre Ceska posta (La Poste tchèque): entre mars 2012 et février 2013, l'entreprise avait équipé 7 770 facteurs de traceurs GPS qui enregistraient tout le trajet pendant le service; un traitement disproportionné, ayant duré trop longtemps et portant sur trop de personnes. Amende 80 000 CZK. Décidé sous l'ancienne loi antérieure au RGPD, mais le principe demeure.",
      es: 'UOOU contra Ceska posta (Correos Checos): entre marzo de 2012 y febrero de 2013 la empresa había dotado a 7.770 carteros de localizadores GPS que registraban todo el recorrido durante el turno; un tratamiento desproporcionado, que duró demasiado tiempo y afectó a demasiadas personas. Multa de 80.000 CZK. Resuelto bajo la antigua ley anterior al RGPD, pero el principio se mantiene.',
      nl: 'UOOU tegen Ceska posta (Tsjechische Post): tussen maart 2012 en februari 2013 had het bedrijf 7.770 postbodes uitgerust met GPS-trackers die de volledige route tijdens de dienst registreerden; een onevenredige verwerking die te lang duurde en te veel mensen betrof. Boete 80.000 CZK. Beslist onder de oude wet van voor de AVG, maar het beginsel blijft overeind.',
    },
    urlFonte: FONTE_UOOU_CESKA_POSTA.url,
  },

  fonti: [
    FONTE_ZP_316,
    FONTE_UOOU_GPS,
    FONTE_UOOU_DPIA,
    FONTE_UOOU_SEGNALAZIONE,
    FONTE_UOOU_CESKA_POSTA,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
