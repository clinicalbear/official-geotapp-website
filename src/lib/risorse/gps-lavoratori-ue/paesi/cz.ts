/**
 * Scheda-paese Repubblica Ceca per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. 316 dello Zakonik prace (Codice del lavoro), parere WP249 pubblicato
 * dall'UOOU e relazione annuale UOOU 2014 sul GPS nei veicoli aziendali, lista UOOU dei trattamenti
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
  titolo: 'Stanovisko 2/2017 sul trattamento dei dati sul posto di lavoro, pubblicato dall UOOU',
  url: 'https://uoou.gov.cz/media/zahranici/dokumenty/ostatni-dokumenty-sboru/stanovisko-2-2017-ke-zpracovani-udaju-na-pracovisti.pdf',
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
  titolo: 'Tribunale municipale di Praga 6 A 42/2013 (Ceska posta, GPS sui portalettere), sentenza',
  url: 'https://www.nssoud.cz/stazeni-dokumentu?filepath=EVIDENCNI_LIST/2013/6A_42_2013_48_20170614165604_prevedeno.pdf',
};
const FONTE_UOOU_VZ2012 = {
  titolo: 'UOOU, relazione annuale 2012, controllo su Česká pošta (monitoraggio degli spostamenti dei portalettere)',
  url: 'https://uoou.gov.cz/media/vyrocni-zpravy/dokumenty/vz-2012.pdf',
};
const FONTE_UOOU_VZ2014 = {
  titolo: 'UOOU, relazione annuale 2014, controlli su Skoda Auto e Plzensky Prazdroj (GPS nei veicoli aziendali)',
  url: 'https://uoou.gov.cz/media/vyrocni-zpravy/dokumenty/vz-2014.pdf',
};
const FONTE_EPRAVO_CESKA_POSTA = {
  titolo: 'epravo.cz, GPS monitoring zamestnancu podruhe (riporta una multa di 80.000 CZK e 7.770 portalettere, non confermati da fonti ufficiali)',
  url: 'https://www.epravo.cz/top/clanky/gps-monitoring-zamestnancu-podruhe-106141.html',
  nonUfficiale: 'stampa' as const,
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
    verificatoIl: '2026-09-30',
    note: {
      it: "La Repubblica Ceca ha un'unica autorità nazionale, l'UOOU; nessuna ripartizione regionale.",
      en: 'The Czech Republic has a single national authority, the UOOU; there is no regional breakdown.',
      de: 'Die Tschechische Republik hat eine einzige nationale Behörde, die UOOU; es gibt keine regionale Aufteilung.',
      fr: "La République tchèque dispose d'une seule autorité nationale, l'UOOU; il n'y a aucune répartition régionale.",
      es: 'La República Checa tiene una única autoridad nacional, la UOOU; no hay reparto regional.',
      nl: 'Tsjechië heeft één nationale autoriteit, de UOOU; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione diretta ai lavoratori su portata e modalità del monitoraggio (Zákoník práce art. 316)',
        en: 'Direct information to workers on the scope and manner of the monitoring (Zakonik prace art. 316)',
        de: 'Direkte Information der Arbeitnehmer über Umfang und Art der Überwachung (Zakonik prace Art. 316)',
        fr: 'Information directe des travailleurs sur la portée et les modalités de la surveillance (Zakonik prace art. 316)',
        es: 'Información directa a los trabajadores sobre el alcance y la forma de la monitorización (Zakonik prace art. 316)',
        nl: 'Rechtstreekse informatie aan werknemers over de omvang en de wijze van de monitoring (Zakonik prace art. 316)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Se sussiste un motivo serio per il monitoraggio, il datore è obbligato a informare direttamente i lavoratori sulla portata del controllo e sul modo in cui viene svolto.',
        en: 'If there is a serious reason for the monitoring, the employer is required to inform workers directly about the scope of the control and the way in which it is carried out.',
        de: 'Liegt ein schwerwiegender Grund für die Überwachung vor, ist der Arbeitgeber verpflichtet, die Arbeitnehmer unmittelbar über den Umfang der Kontrolle und die Art ihrer Durchführung zu informieren.',
        fr: "S'il existe un motif sérieux justifiant la surveillance, l'employeur est tenu d'informer directement les travailleurs de la portée du contrôle et de la manière dont il est exercé.",
        es: 'Si existe un motivo serio para la monitorización, el empresario está obligado a informar directamente a los trabajadores sobre el alcance del control y la forma en que se lleva a cabo.',
        nl: 'Als er een ernstige reden voor de monitoring bestaat, is de werkgever verplicht de werknemers rechtstreeks te informeren over de omvang van de controle en de wijze waarop deze wordt uitgevoerd.',
      },
      fonte: FONTE_ZP_316,
    },
    {
      voce: {
        it: "Divieto di sorvegliare i lavoratori senza un motivo serio inerente alla natura dell'attività (art. 316)",
        en: "Prohibition on monitoring workers without a serious reason inherent to the nature of the activity (art. 316)",
        de: 'Verbot, Arbeitnehmer ohne einen schwerwiegenden, in der Art der Tätigkeit liegenden Grund zu überwachen (Art. 316)',
        fr: "Interdiction de surveiller les travailleurs sans un motif sérieux inhérent à la nature de l'activité (art. 316)",
        es: 'Prohibición de vigilar a los trabajadores sin un motivo serio inherente a la naturaleza de la actividad (art. 316)',
        nl: 'Verbod om werknemers te surveilleren zonder een ernstige, aan de aard van de activiteit inherente reden (art. 316)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il datore non può, senza un motivo serio inerente alla particolare natura della sua attività, ledere la privacy del lavoratore sui luoghi di lavoro e negli spazi comuni del datore sottoponendolo a sorveglianza aperta o occulta. La norma non nomina il GPS, ma l\'UOOU e il Tribunale di Praga (6 A 42/2013) l\'hanno applicata al tracciamento dei percorsi dei portalettere.',
        en: 'Without a serious reason inherent to the particular nature of its activity, the employer may not infringe the worker\'s privacy by subjecting them to open or covert surveillance at the workplace and in the employer\'s common areas. The provision does not name GPS, but the UOOU and the Prague court (6 A 42/2013) applied it to the tracking of postal carriers\' routes.',
        de: 'Ohne einen schwerwiegenden, in der besonderen Art seiner Tätigkeit liegenden Grund darf der Arbeitgeber die Privatsphäre des Arbeitnehmers nicht verletzen, indem er ihn an den Arbeitsplätzen und in den gemeinsamen Räumen des Arbeitgebers einer offenen oder verdeckten Überwachung unterwirft. Die Vorschrift nennt GPS nicht, doch die UOOU und das Stadtgericht Prag (6 A 42/2013) haben sie auf die Ortung der Routen von Briefträgern angewandt.',
        fr: "Sans un motif sérieux inhérent à la nature particulière de son activité, l'employeur ne peut pas porter atteinte à la vie privée du travailleur en le soumettant sur les lieux de travail et dans les espaces communs de l'employeur à une surveillance ouverte ou occulte. La disposition ne nomme pas le GPS, mais l'UOOU et le tribunal de Prague (6 A 42/2013) l'ont appliquée au suivi des tournées des facteurs.",
        es: 'Sin un motivo serio inherente a la naturaleza particular de su actividad, el empresario no puede vulnerar la privacidad del trabajador sometiéndolo, en los lugares de trabajo y en los espacios comunes del empresario, a vigilancia abierta u oculta. La norma no menciona el GPS, pero la UOOU y el tribunal de Praga (6 A 42/2013) la aplicaron al rastreo de los recorridos de los carteros.',
        nl: 'Zonder een ernstige, aan de bijzondere aard van zijn activiteit inherente reden mag de werkgever de privacy van de werknemer niet schenden door hem op de werkplekken en in de gemeenschappelijke ruimten van de werkgever aan open of verborgen toezicht te onderwerpen. De bepaling noemt GPS niet, maar de UOOU en de rechtbank van Praag (6 A 42/2013) pasten haar toe op het volgen van de routes van postbodes.',
      },
      fonte: FONTE_ZP_316,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installation',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: "Autorisation préalable d'une autorité avant l'installation",
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva dell'UOOU; il titolare valuta da sé base giuridica e proporzionalità, con DPIA quando richiesta.",
        en: 'No prior authorisation from the UOOU is required; the controller assesses the legal basis and proportionality itself, with a DPIA where required.',
        de: 'Eine vorherige Genehmigung der UOOU ist nicht erforderlich; der Verantwortliche bewertet Rechtsgrundlage und Verhältnismäßigkeit selbst, mit einer DSFA, sofern erforderlich.',
        fr: "Aucune autorisation préalable de l'UOOU n'est nécessaire; le responsable du traitement évalue lui-même la base juridique et la proportionnalité, avec une AIPD lorsqu'elle est requise.",
        es: 'No se necesita autorización previa de la UOOU; el responsable evalúa por sí mismo la base jurídica y la proporcionalidad, con una EIPD cuando sea exigible.',
        nl: 'Er is geen voorafgaande toestemming van de UOOU vereist; de verwerkingsverantwoordelijke beoordeelt zelf de rechtsgrond en de evenredigheid, met een DPIA waar vereist.',
      },
      fonte: FONTE_GDPR,
    },
    {
      voce: {
        it: 'GPS proporzionato (protezione del patrimonio, registro viaggi), non controllo continuo; opt-out per l\'uso privato',
        en: 'Proportionate GPS (asset protection, trip logbook), not continuous monitoring; opt-out for private use',
        de: 'Verhältnismäßiges GPS (Schutz des Vermögens, Fahrtenbuch), keine ständige Überwachung; Opt-out für die private Nutzung',
        fr: 'GPS proportionné (protection du patrimoine, carnet de bord), pas de contrôle continu; opt-out pour usage privé',
        es: 'GPS proporcionado (protección del patrimonio, libro de viajes), no control continuo; opt-out para el uso privado',
        nl: 'Evenredig GPS (bescherming van het vermogen, rittenregistratie), geen continue controle; opt-out voor privégebruik',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il GPS sul veicolo regge quando serve a scopi concreti come la protezione del patrimonio e il registro dei viaggi (in un controllo del 2014 l'UOOU non ha visto intrusioni nella privacy in un GPS con libro di marcia elettronico, protezione dal furto e interruttore privato/servizio), non quando diventa un controllo intensivo o costante dei lavoratori (art. 316 c. 2; Tribunale di Praga 6 A 42/2013 sul tracciamento dell'intero percorso dei portalettere). Per l'uso privato del veicolo il parere WP249, pubblicato dall'UOOU, indica come misura principale l'opt-out.",
        en: 'GPS on a vehicle holds up when it serves concrete purposes such as asset protection and the trip logbook (in a 2014 inspection the UOOU found no privacy intrusion in a GPS with an electronic logbook, theft protection and a private/business switch), not when it becomes intensive or constant monitoring of workers (art. 316 par. 2; Prague court 6 A 42/2013 on tracking the whole route of postal carriers). For private use of the vehicle, opinion WP249, published by the UOOU, names the opt-out as the main measure.',
        de: 'GPS im Fahrzeug hält, wenn es konkreten Zwecken wie dem Schutz des Vermögens und dem Fahrtenbuch dient (bei einer Kontrolle 2014 sah die UOOU keinen Eingriff in die Privatsphäre bei einem GPS mit elektronischem Fahrtenbuch, Diebstahlschutz und Umschalter privat/dienstlich), nicht aber, wenn es zur intensiven oder ständigen Überwachung der Arbeitnehmer wird (Art. 316 Abs. 2; Stadtgericht Prag 6 A 42/2013 zur Ortung der gesamten Route von Briefträgern). Für die private Nutzung des Fahrzeugs nennt die von der UOOU veröffentlichte Stellungnahme WP249 das Opt-out als wichtigste Maßnahme.',
        fr: "Le GPS d'un véhicule tient lorsqu'il sert à des finalités concrètes comme la protection du patrimoine et le carnet de bord (lors d'un contrôle en 2014, l'UOOU n'a vu aucune atteinte à la vie privée pour un GPS avec carnet de bord électronique, protection contre le vol et commutateur privé/professionnel), et non lorsqu'il devient un contrôle intensif ou constant des travailleurs (art. 316 par. 2; tribunal de Prague 6 A 42/2013 sur le suivi de l'ensemble du trajet des facteurs). Pour l'usage privé du véhicule, l'avis WP249, publié par l'UOOU, cite l'opt-out comme mesure principale.",
        es: 'El GPS del vehículo se sostiene cuando sirve a fines concretos como la protección del patrimonio y el libro de viajes (en una inspección de 2014 la UOOU no vio intrusión en la privacidad en un GPS con libro de viajes electrónico, protección contra el robo e interruptor privado/servicio), no cuando pasa a ser un control intensivo o constante de los trabajadores (art. 316 apdo. 2; tribunal de Praga 6 A 42/2013 sobre el rastreo de todo el recorrido de los carteros). Para el uso privado del vehículo, el dictamen WP249, publicado por la UOOU, señala el opt-out como medida principal.',
        nl: 'GPS in een voertuig houdt stand wanneer het concrete doelen dient, zoals de bescherming van het vermogen en de rittenregistratie (bij een controle in 2014 zag de UOOU geen inbreuk op de privacy bij een GPS met elektronisch rittenboek, diefstalbeveiliging en een schakelaar privé/zakelijk), niet wanneer het intensieve of voortdurende controle van werknemers wordt (art. 316 lid 2; rechtbank Praag 6 A 42/2013 over het volgen van de volledige route van postbodes). Voor privégebruik van het voertuig noemt het door de UOOU gepubliceerde advies WP249 de opt-out als belangrijkste maatregel.',
      },
      fonte: FONTE_UOOU_VZ2014,
    },
    {
      voce: {
        it: 'Valutazione d\'impatto (DPIA) per il monitoraggio della posizione o del movimento dei lavoratori (lista UOOU)',
        en: 'Impact assessment (DPIA) for monitoring the location or movement of workers (UOOU list)',
        de: 'Datenschutz-Folgenabschätzung (DSFA) für die Überwachung des Standorts oder der Bewegung der Arbeitnehmer (UOOU-Liste)',
        fr: "Analyse d'impact (AIPD) pour la surveillance de la localisation ou des déplacements des travailleurs (liste UOOU)",
        es: 'Evaluación de impacto (EIPD) para la monitorización de la ubicación o el movimiento de los trabajadores (lista UOOU)',
        nl: 'Effectbeoordeling (DPIA) voor de monitoring van de locatie of beweging van werknemers (UOOU-lijst)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Nella lista UOOU il monitoraggio di movimento e posizione delle persone (coordinate) è uno dei criteri; il monitoraggio dei lavoratori conta solo se ne segue il movimento o l'attività in modo continuo. La DPIA è obbligatoria quando, oltre a questo, il trattamento ha almeno un'altra caratteristica che l'UOOU considera critica, oppure cinque caratteristiche che considera significative.",
        en: 'In the UOOU list, monitoring the movement and location of persons (coordinates) is one of the criteria; monitoring workers counts only if it tracks their movement or continuously follows their activity. A DPIA is triggered when, in addition, at least one other critical characteristic or five significant ones apply.',
        de: 'In der UOOU-Liste ist die Überwachung von Bewegung und Standort von Personen (Koordinaten) eines der Kriterien; die Überwachung von Beschäftigten zählt nur, wenn sie deren Bewegung verfolgt oder ihre Tätigkeit laufend beobachtet. Eine DSFA ist erforderlich, wenn zusätzlich mindestens ein weiteres kritisches oder fünf bedeutende Merkmale zutreffen.',
        fr: "Dans la liste UOOU, la surveillance des déplacements et de la position des personnes (coordonnées) est l'un des critères; la surveillance des travailleurs ne compte que si elle suit leurs déplacements ou leur activité en continu. Une AIPD est requise lorsque s'ajoutent au moins une autre caractéristique critique ou cinq caractéristiques significatives.",
        es: 'En la lista UOOU, monitorizar el movimiento y la posición de las personas (coordenadas) es uno de los criterios; la monitorización de los trabajadores cuenta solo si sigue su movimiento o su actividad de forma continua. La EIPD es necesaria cuando además concurren al menos otra característica crítica o cinco significativas.',
        nl: 'In de UOOU-lijst is het monitoren van beweging en positie van personen (coördinaten) een van de criteria; het monitoren van werknemers telt alleen mee als het hun beweging volgt of hun activiteit voortdurend nagaat. Een DPIA is nodig wanneer daarnaast minstens een ander kritiek kenmerk of vijf significante kenmerken gelden.',
      },
      fonte: FONTE_UOOU_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: "Verifica un motivo serio inerente alla natura della tua attività per il monitoraggio (art. 316).",
        en: 'Verify a serious reason inherent to the nature of your activity for the monitoring (art. 316).',
        de: 'Prüfen Sie einen schwerwiegenden, in der Art Ihrer Tätigkeit liegenden Grund für die Überwachung (Art. 316).',
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
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage (in der Regel das berechtigte Interesse, nicht die Einwilligung).',
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
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) für die Überwachung des Standorts der Arbeitnehmer durch.',
        fr: "Réalisez l'analyse d'impact (AIPD) pour la surveillance de la localisation des travailleurs.",
        es: 'Realice la evaluación de impacto (EIPD) para la monitorización de la ubicación de los trabajadores.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor de monitoring van de locatie van werknemers.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Informa direttamente i lavoratori su portata e modalità del controllo (art. 316 + art. 13 GDPR).",
        en: 'Inform workers directly about the scope and manner of the control (art. 316 + art. 13 GDPR).',
        de: 'Informieren Sie die Arbeitnehmer unmittelbar über Umfang und Art der Kontrolle (Art. 316 + Art. 13 DSGVO).',
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
        de: 'Konfigurieren Sie das System verhältnismäßig: keine ständige Überwachung, Opt-out für die private Nutzung.',
        fr: "Configurez le système de manière proportionnée: pas de contrôle continu, opt-out pour l'usage privé.",
        es: 'Configure el sistema de forma proporcionada: sin control continuo, opt-out para el uso privado.',
        nl: 'Configureer het systeem op een evenredige manier: geen continue controle, opt-out voor privégebruik.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'Se cambi sistema o software di monitoraggio, aggiorna e riconsegna l’informativa, e verifica se devi di nuovo informare o consultare i rappresentanti dei lavoratori, dove la legge lo prevede. Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: l’informativa consegnata prima non basta.',
        en: 'If you switch systems: when you change your monitoring system or software, update and re-issue the privacy notice, and check whether you must inform or consult the workers\' representatives again, where the law requires it. The provider (data processor), the data collected and the methods often change: the one provided earlier is not enough.',
        de: 'Bei Systemwechsel: Wenn Sie Ihr Überwachungssystem oder Ihre Software wechseln, aktualisieren Sie die Datenschutzinformation und händigen Sie sie erneut aus, und prüfen Sie, ob Sie die Arbeitnehmervertretung erneut informieren oder beteiligen müssen, wo das Gesetz es vorsieht. Anbieter (Auftragsverarbeiter), erhobene Daten und Modalitäten ändern sich oft: die zuvor ausgehändigte genügt nicht.',
        fr: 'En cas de changement de système : si vous changez de système ou de logiciel de surveillance, mettez à jour et remettez l’information, et vérifiez si vous devez de nouveau informer ou consulter les représentants du personnel, lorsque la loi le prévoit. Le fournisseur (sous-traitant), les données collectées et les modalités changent souvent : celle remise auparavant ne suffit pas.',
        es: 'En caso de cambio de sistema: si cambias de sistema o software de monitorización, actualiza y vuelve a entregar la información, y comprueba si debes volver a informar o consultar a los representantes de los trabajadores, cuando la ley lo prevé. A menudo cambian el proveedor (encargado del tratamiento), los datos recogidos y las modalidades: la entregada antes no basta.',
        nl: 'Bij een systeemwissel: als je van monitoringsysteem of -software verandert, werk de privacyverklaring bij en verstrek deze opnieuw, en controleer of je de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'UOOU, segnalazioni',
      portale: FONTE_UOOU_SEGNALAZIONE.url,
      urlFonte: FONTE_UOOU_SEGNALAZIONE.url,
      verificatoIl: '2026-09-30',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino a 20 milioni di euro o 4% del fatturato (GDPR)',
      en: 'up to 20 million euros or 4% of turnover (GDPR)',
      de: 'bis zu 20 Millionen Euro oder 4% des Umsatzes (DSGVO)',
      fr: "jusqu'à 20 millions d'euros ou 4% du chiffre d'affaires (RGPD)",
      es: 'hasta 20 millones de euros o el 4% de la facturación (RGPD)',
      nl: 'tot 20 miljoen euro of 4% van de omzet (AVG)',
    },
    casoCitato: {
      it: "Il caso di riferimento è l'UOOU contro Česká pošta (Poste Ceche). Il controllo, dal 25 aprile al 25 settembre 2012, ha accertato la violazione del § 5 c. 2 della vecchia legge sulla protezione dei dati: mancava una base giuridica per monitorare in modo sistematico gli spostamenti dei portalettere nei loro distretti (relazione annuale UOOU 2012). Le misure correttive imposte dall'UOOU sono state confermate nel 2017 dal Tribunale municipale di Praga (6 A 42/2013), che parla di 7.777 distretti di recapito. Secondo epravo.cz (fonte non ufficiale) la multa fu di 80.000 CZK: la cifra non compare nelle fonti ufficiali che abbiamo aperto, per questo mostriamo il massimale del GDPR. Il caso è anteriore al GDPR, ma il principio resta.",
      en: "The reference case is UOOU v. Česká pošta (Czech Post). The inspection, from 25 April to 25 September 2012, found a breach of § 5(2) of the old data protection law: there was no legal basis for systematically monitoring the movements of postal carriers in their districts (UOOU annual report 2012). The corrective measures imposed by the UOOU were upheld in 2017 by the Prague Municipal Court (6 A 42/2013), which refers to 7,777 delivery districts. According to epravo.cz (not an official source) the fine was 80,000 CZK: the figure does not appear in the official sources we opened, which is why we show the GDPR maximum. The case predates the GDPR, but the principle stands.",
      de: "Der Referenzfall ist UOOU gegen Česká pošta (Tschechische Post). Die Kontrolle vom 25. April bis 25. September 2012 stellte einen Verstoß gegen § 5 Abs. 2 des alten Datenschutzgesetzes fest: Es fehlte eine Rechtsgrundlage für die systematische Überwachung der Bewegungen der Briefträger in ihren Bezirken (UOOU-Jahresbericht 2012). Die von der UOOU angeordneten Abhilfemaßnahmen bestätigte 2017 das Stadtgericht Prag (6 A 42/2013), das von 7.777 Zustellbezirken spricht. Laut epravo.cz (keine amtliche Quelle) betrug das Bußgeld 80.000 CZK: Die Zahl steht in keiner der amtlichen Quellen, die wir geöffnet haben, deshalb zeigen wir den Höchstbetrag der DSGVO. Der Fall liegt vor der DSGVO, doch der Grundsatz bleibt bestehen.",
      fr: "Le cas de référence est UOOU contre Česká pošta (La Poste tchèque). Le contrôle, du 25 avril au 25 septembre 2012, a constaté une violation du § 5, al. 2, de l'ancienne loi sur la protection des données : il n'y avait pas de base juridique pour surveiller de manière systématique les déplacements des facteurs dans leurs secteurs (rapport annuel UOOU 2012). Les mesures correctrices imposées par l'UOOU ont été confirmées en 2017 par le tribunal municipal de Prague (6 A 42/2013), qui parle de 7 777 secteurs de distribution. Selon epravo.cz (source non officielle), l'amende était de 80 000 CZK : ce chiffre ne figure pas dans les sources officielles que nous avons ouvertes, c'est pourquoi nous affichons le plafond du RGPD. Le cas est antérieur au RGPD, mais le principe demeure.",
      es: "El caso de referencia es UOOU contra Česká pošta (Correos Checos). La inspección, del 25 de abril al 25 de septiembre de 2012, constató una infracción del § 5, ap. 2, de la antigua ley de protección de datos: no había base jurídica para vigilar de forma sistemática los desplazamientos de los carteros en sus distritos (informe anual de la UOOU de 2012). Las medidas correctoras impuestas por la UOOU fueron confirmadas en 2017 por el Tribunal municipal de Praga (6 A 42/2013), que habla de 7.777 distritos de reparto. Según epravo.cz (fuente no oficial) la multa fue de 80.000 CZK: la cifra no aparece en las fuentes oficiales que hemos abierto, por eso mostramos el máximo del RGPD. El caso es anterior al RGPD, pero el principio se mantiene.",
      nl: "De referentiezaak is UOOU tegen Česká pošta (Tsjechische Post). De controle van 25 april tot 25 september 2012 stelde een schending vast van § 5, lid 2, van de oude gegevensbeschermingswet: er was geen rechtsgrond om de verplaatsingen van postbodes in hun wijken stelselmatig te volgen (jaarverslag UOOU 2012). De door de UOOU opgelegde corrigerende maatregelen werden in 2017 bevestigd door de gemeentelijke rechtbank van Praag (6 A 42/2013), die spreekt van 7.777 bestelwijken. Volgens epravo.cz (geen officiële bron) bedroeg de boete 80.000 CZK: dat bedrag staat niet in de officiële bronnen die we hebben geopend, daarom tonen we het maximum van de AVG. De zaak dateert van voor de AVG, maar het beginsel blijft overeind.",
    },
    urlFonte: FONTE_UOOU_VZ2012.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_ZP_316,
    FONTE_UOOU_GPS,
    FONTE_UOOU_DPIA,
    FONTE_UOOU_SEGNALAZIONE,
    FONTE_UOOU_VZ2012,
    FONTE_UOOU_CESKA_POSTA,
    FONTE_EPRAVO_CESKA_POSTA,
    FONTE_UOOU_VZ2014,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
