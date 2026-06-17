/**
 * Scheda-paese Slovenia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * linee guida e parere dell'IP-RS (Garante sloveno) sull'uso dei dispositivi GPS
 * e sul tracciamento dei dipendenti, art. 48 ZDR-1 (dati dei lavoratori), pagina
 * IP-RS sulla valutazione d'impatto, modulo IP-RS per le segnalazioni e GDPR.
 *
 * La Slovenia ha un'unica autorita' nazionale, l'IP-RS, senza ripartizione
 * regionale. La legge nazionale ZVOP-2 e' recente (2023), quindi le sanzioni
 * pubblicate specifiche per il GPS sono ancora poche. Nessun numero, URL o
 * autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_IPRS_GPS = {
  titolo: "IP-RS (Garante sloveno), linee guida sull'uso dei dispositivi GPS",
  url: 'https://www.ip-rs.si/fileadmin/user_upload/Pdf/smernice/GPS_smernice_net_.pdf',
};
const FONTE_IPRS_SLEDENJE = {
  titolo:
    "IP-RS, parere 'Sledenje zaposlenim' (tracciamento dei dipendenti)",
  url: 'https://www.ip-rs.si/mnenja-gdpr/6048a57a34c82',
};
const FONTE_ZDR1_48 = {
  titolo: 'Zakon o delovnih razmerjih (ZDR-1), art. 48 (dati dei lavoratori)',
  url: 'https://pisrs.si/Pis.web/pregledPredpisa?id=ZAKO5944',
};
const FONTE_IPRS_DPIA = {
  titolo: "IP-RS, valutazione d'impatto sulla protezione dei dati",
  url: 'https://www.ip-rs.si/zakonodaja/reforma-evropskega-zakonodajnega-okvira-za-varstvo-osebnih-podatkov/kljucna-podrocja-uredbe/ocena-ucinka-v-zvezi-z-varstvom-podatkov/',
};
const FONTE_IPRS_SEGNALAZIONE = {
  titolo: 'IP-RS, presentare una segnalazione',
  url: 'https://www.ip-rs.si/varstvo-osebnih-podatkov/pravice-posameznika/vlo%C5%BEitev-prijave',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const slovenia: SchedaPaese = {
  codiceISO: 'SI',
  slugCanonico: 'slovenia',
  nome: 'Slovenia',
  nomi: {
    it: 'Slovenia',
    en: 'Slovenia',
    'en-us': 'Slovenia',
    'en-gb': 'Slovenia',
    'en-au': 'Slovenia',
    'en-ie': 'Slovenia',
    'en-ca': 'Slovenia',
    de: 'Slowenien',
    nl: 'Slovenië',
    fr: 'Slovénie',
    es: 'Eslovenia',
    pt: 'Eslovénia',
    da: 'Slovenien',
    sv: 'Slovenien',
    nb: 'Slovenia',
    ru: 'Словения',
  },
  bandiera: '🇸🇮',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'Informacijski pooblascenec (IP-RS)',
    urlFonte: FONTE_IPRS_SEGNALAZIONE.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Slovenia ha un'unica autorita' nazionale, l'IP-RS; nessuna ripartizione regionale. La legge nazionale ZVOP-2 e' recente (2023), quindi le sanzioni pubblicate sono ancora poche.",
      en: 'Slovenia has a single national authority, the IP-RS; there is no regional breakdown. The national law ZVOP-2 is recent (2023), so the published fines are still few.',
      de: 'Slowenien hat eine einzige nationale Behoerde, die IP-RS; es gibt keine regionale Aufteilung. Das nationale Gesetz ZVOP-2 ist neu (2023), daher sind die veroeffentlichten Bussgelder noch gering.',
      fr: "La Slovenie a une seule autorite nationale, l'IP-RS; il n'y a pas de repartition regionale. La loi nationale ZVOP-2 est recente (2023), de sorte que les amendes publiees sont encore peu nombreuses.",
      es: 'Eslovenia tiene una unica autoridad nacional, la IP-RS; no hay reparto regional. La ley nacional ZVOP-2 es reciente (2023), por lo que las sanciones publicadas son todavia pocas.',
      nl: 'Slovenie heeft een enkele nationale autoriteit, de IP-RS; er is geen regionale verdeling. De nationale wet ZVOP-2 is recent (2023), dus er zijn nog weinig gepubliceerde boetes.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Test di proporzionalita: il tracciamento indiscriminato dei dipendenti non ha base giuridica (IP-RS)',
        en: 'Proportionality test: indiscriminate tracking of employees has no legal basis (IP-RS)',
        de: 'Verhaeltnismaessigkeitspruefung: die wahllose Ueberwachung von Beschaeftigten hat keine Rechtsgrundlage (IP-RS)',
        fr: 'Test de proportionnalite: le suivi indiscrimine des salaries n\'a pas de base juridique (IP-RS)',
        es: 'Test de proporcionalidad: el seguimiento indiscriminado de los empleados no tiene base juridica (IP-RS)',
        nl: 'Evenredigheidstoets: het ongedifferentieerd volgen van werknemers heeft geen rechtsgrondslag (IP-RS)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per il Garante sloveno il tracciamento indiscriminato dei lavoratori tramite GPS non raggiunge lo standard di necessita' per l'esercizio di diritti e obblighi del rapporto di lavoro: in tal caso manca la base giuridica. Serve superare il test di proporzionalita' (necessita', idoneita', proporzionalita' in senso stretto).",
        en: "For the Slovenian authority, indiscriminate tracking of workers via GPS does not meet the necessity standard for exercising the rights and obligations of the employment relationship: in that case the legal basis is missing. It is necessary to pass the proportionality test (necessity, suitability, proportionality in the strict sense).",
        de: "Nach Auffassung der slowenischen Behoerde erfuellt die wahllose Ortung von Arbeitnehmern per GPS nicht den Erforderlichkeitsmassstab fuer die Ausuebung der Rechte und Pflichten des Arbeitsverhaeltnisses: in diesem Fall fehlt die Rechtsgrundlage. Die Verhaeltnismaessigkeitspruefung (Erforderlichkeit, Geeignetheit, Verhaeltnismaessigkeit im engeren Sinne) muss bestanden werden.",
        fr: "Pour l'autorite slovene, le suivi indiscrimine des salaries par GPS n'atteint pas le standard de necessite pour l'exercice des droits et obligations de la relation de travail: dans ce cas, la base juridique fait defaut. Il faut reussir le test de proportionnalite (necessite, aptitude, proportionnalite au sens strict).",
        es: "Para la autoridad eslovena, el seguimiento indiscriminado de los trabajadores mediante GPS no alcanza el estandar de necesidad para el ejercicio de los derechos y obligaciones de la relacion laboral: en tal caso falta la base juridica. Hay que superar el test de proporcionalidad (necesidad, idoneidad, proporcionalidad en sentido estricto).",
        nl: "Volgens de Sloveense autoriteit voldoet het ongedifferentieerd volgen van werknemers via GPS niet aan de noodzakelijkheidsnorm voor de uitoefening van de rechten en plichten van de arbeidsverhouding: in dat geval ontbreekt de rechtsgrondslag. De evenredigheidstoets (noodzaak, geschiktheid, evenredigheid in strikte zin) moet worden doorstaan.",
      },
      fonte: FONTE_IPRS_GPS,
    },
    {
      voce: {
        it: 'Base giuridica = esecuzione del contratto (ZDR-1 art. 48) o interesse legittimo, non il consenso',
        en: 'Legal basis = performance of the contract (ZDR-1 art. 48) or legitimate interest, not consent',
        de: 'Rechtsgrundlage = Erfuellung des Vertrags (ZDR-1 Art. 48) oder berechtigtes Interesse, nicht die Einwilligung',
        fr: "Base juridique = execution du contrat (ZDR-1 art. 48) ou interet legitime, pas le consentement",
        es: 'Base juridica = ejecucion del contrato (ZDR-1 art. 48) o interes legitimo, no el consentimiento',
        nl: 'Rechtsgrondslag = uitvoering van de overeenkomst (ZDR-1 art. 48) of gerechtvaardigd belang, niet de toestemming',
      },
      risposta: 'si',
      dettaglio: {
        it: "La base e' l'esecuzione del rapporto di lavoro (art. 48 ZDR-1) o il legittimo interesse; il consenso del dipendente difficilmente e' valido per lo squilibrio di potere.",
        en: "The basis is the performance of the employment relationship (art. 48 ZDR-1) or the legitimate interest; the employee's consent is hardly valid due to the imbalance of power.",
        de: "Grundlage ist die Erfuellung des Arbeitsverhaeltnisses (Art. 48 ZDR-1) oder das berechtigte Interesse; die Einwilligung des Beschaeftigten ist wegen des Machtungleichgewichts kaum wirksam.",
        fr: "La base est l'execution de la relation de travail (art. 48 ZDR-1) ou l'interet legitime; le consentement du salarie est difficilement valable en raison du desequilibre de pouvoir.",
        es: "La base es la ejecucion de la relacion laboral (art. 48 ZDR-1) o el interes legitimo; el consentimiento del empleado dificilmente es valido por el desequilibrio de poder.",
        nl: "De grondslag is de uitvoering van de arbeidsverhouding (art. 48 ZDR-1) of het gerechtvaardigd belang; de toestemming van de werknemer is door de machtsongelijkheid nauwelijks geldig.",
      },
      fonte: FONTE_IPRS_GPS,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behoerde vor der Installation',
        fr: "Autorisation prealable d'une autorite avant l'installation",
        es: 'Autorizacion previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva dell'IP-RS; il titolare valuta da se' base giuridica, proporzionalita' e DPIA.",
        en: "No prior authorisation from the IP-RS is required; the controller assesses on its own the legal basis, proportionality and DPIA.",
        de: "Eine vorherige Genehmigung der IP-RS ist nicht erforderlich; der Verantwortliche beurteilt selbst Rechtsgrundlage, Verhaeltnismaessigkeit und DSFA.",
        fr: "Aucune autorisation prealable de l'IP-RS n'est requise; le responsable evalue lui-meme la base juridique, la proportionnalite et l'AIPD.",
        es: "No se necesita una autorizacion previa de la IP-RS; el responsable evalua por si mismo la base juridica, la proporcionalidad y la EIPD.",
        nl: "Er is geen voorafgaande toestemming van de IP-RS nodig; de verwerkingsverantwoordelijke beoordeelt zelf de rechtsgrondslag, de evenredigheid en de DPIA.",
      },
      fonte: FONTE_IPRS_GPS,
    },
    {
      voce: {
        it: 'Niente sorveglianza continua: solo dati puntuali o in tempo reale, non conservazione permanente; dispositivo di sicurezza disattivabile',
        en: 'No continuous surveillance: only point-in-time or real-time data, not permanent storage; safety device that can be switched off',
        de: 'Keine kontinuierliche Ueberwachung: nur punktuelle oder Echtzeitdaten, keine dauerhafte Speicherung; ausschaltbares Sicherheitsgeraet',
        fr: "Pas de surveillance continue: uniquement des donnees ponctuelles ou en temps reel, pas de conservation permanente; dispositif de securite desactivable",
        es: 'Nada de vigilancia continua: solo datos puntuales o en tiempo real, no conservacion permanente; dispositivo de seguridad desactivable',
        nl: 'Geen continue bewaking: alleen momentopname- of realtimegegevens, geen permanente opslag; uitschakelbaar veiligheidsapparaat',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per l'IP-RS non e' proporzionato il tracciamento continuo quando basterebbero dati puntuali o in tempo reale senza conservazione; un dispositivo per la sola sicurezza deve poter restare disattivato finche' il lavoratore non lo attiva.",
        en: "For the IP-RS, continuous tracking is not proportionate when point-in-time or real-time data without storage would suffice; a device meant solely for safety must be able to stay switched off until the worker activates it.",
        de: "Fuer die IP-RS ist eine kontinuierliche Ortung nicht verhaeltnismaessig, wenn punktuelle oder Echtzeitdaten ohne Speicherung ausreichen wuerden; ein Geraet, das nur der Sicherheit dient, muss ausgeschaltet bleiben koennen, bis der Beschaeftigte es aktiviert.",
        fr: "Pour l'IP-RS, le suivi continu n'est pas proportionne lorsque des donnees ponctuelles ou en temps reel sans conservation suffiraient; un dispositif destine uniquement a la securite doit pouvoir rester desactive tant que le salarie ne l'active pas.",
        es: "Para la IP-RS, el seguimiento continuo no es proporcionado cuando bastarian datos puntuales o en tiempo real sin conservacion; un dispositivo destinado solo a la seguridad debe poder permanecer desactivado hasta que el trabajador lo active.",
        nl: "Voor de IP-RS is continu volgen niet evenredig wanneer momentopname- of realtimegegevens zonder opslag zouden volstaan; een apparaat dat uitsluitend voor de veiligheid bedoeld is, moet uitgeschakeld kunnen blijven totdat de werknemer het inschakelt.",
      },
      fonte: FONTE_IPRS_GPS,
    },
    {
      voce: {
        it: 'Informazione ai lavoratori e atto interno; informazione del consiglio dei lavoratori se esiste (ZDR-1)',
        en: 'Information to workers and internal act; information of the works council if one exists (ZDR-1)',
        de: 'Information der Beschaeftigten und interner Akt; Information des Betriebsrats, sofern vorhanden (ZDR-1)',
        fr: "Information des salaries et acte interne; information du conseil des travailleurs s'il existe (ZDR-1)",
        es: 'Informacion a los trabajadores y acto interno; informacion al consejo de trabajadores si existe (ZDR-1)',
        nl: 'Informatie aan werknemers en intern besluit; informatie van de ondernemingsraad indien aanwezig (ZDR-1)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Il datore deve informare i lavoratori (art. 13 GDPR) e adottare un atto interno; dove esiste un consiglio dei lavoratori va informato prima di adottare l'atto generale.",
        en: "The employer must inform the workers (art. 13 GDPR) and adopt an internal act; where a works council exists, it must be informed before adopting the general act.",
        de: "Der Arbeitgeber muss die Beschaeftigten informieren (Art. 13 DSGVO) und einen internen Akt erlassen; sofern ein Betriebsrat besteht, ist er vor dem Erlass des allgemeinen Aktes zu informieren.",
        fr: "L'employeur doit informer les salaries (art. 13 RGPD) et adopter un acte interne; lorsqu'un conseil des travailleurs existe, il doit etre informe avant l'adoption de l'acte general.",
        es: "El empleador debe informar a los trabajadores (art. 13 RGPD) y adoptar un acto interno; cuando existe un consejo de trabajadores, debe ser informado antes de adoptar el acto general.",
        nl: "De werkgever moet de werknemers informeren (art. 13 AVG) en een intern besluit vaststellen; waar een ondernemingsraad bestaat, moet deze worden geinformeerd voordat het algemene besluit wordt vastgesteld.",
      },
      fonte: FONTE_ZDR1_48,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per la geolocalizzazione e i dati dei dipendenti (lista IP-RS)",
        en: 'Data protection impact assessment (DPIA) for geolocation and employee data (IP-RS list)',
        de: 'Datenschutz-Folgenabschaetzung (DSFA) fuer Geolokalisierung und Beschaeftigtendaten (Liste der IP-RS)',
        fr: "Analyse d'impact (AIPD) pour la geolocalisation et les donnees des salaries (liste IP-RS)",
        es: 'Evaluacion de impacto (EIPD) para la geolocalizacion y los datos de los empleados (lista IP-RS)',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) voor geolocatie en werknemersgegevens (lijst van de IP-RS)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il Garante raccomanda di svolgere una valutazione d'impatto prima di introdurre dispositivi GPS, e la geolocalizzazione e i dati dei dipendenti sono nella lista che la richiede.",
        en: "The authority recommends carrying out an impact assessment before introducing GPS devices, and geolocation and employee data are on the list that requires one.",
        de: "Die Behoerde empfiehlt, vor der Einfuehrung von GPS-Geraeten eine Folgenabschaetzung durchzufuehren, und Geolokalisierung sowie Beschaeftigtendaten stehen auf der Liste, die eine solche erfordert.",
        fr: "L'autorite recommande de realiser une analyse d'impact avant d'introduire des dispositifs GPS, et la geolocalisation et les donnees des salaries figurent sur la liste qui l'exige.",
        es: "La autoridad recomienda realizar una evaluacion de impacto antes de introducir dispositivos GPS, y la geolocalizacion y los datos de los empleados estan en la lista que la exige.",
        nl: "De autoriteit beveelt aan een effectbeoordeling uit te voeren voordat GPS-apparaten worden ingevoerd, en geolocatie en werknemersgegevens staan op de lijst die deze vereist.",
      },
      fonte: FONTE_IPRS_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Supera il test di proporzionalita: niente tracciamento indiscriminato, scegli il mezzo meno invasivo.',
        en: 'Pass the proportionality test: no indiscriminate tracking, choose the least intrusive means.',
        de: 'Bestehen Sie die Verhaeltnismaessigkeitspruefung: keine wahllose Ortung, waehlen Sie das mildeste Mittel.',
        fr: "Reussissez le test de proportionnalite: pas de suivi indiscrimine, choisissez le moyen le moins intrusif.",
        es: 'Supere el test de proporcionalidad: nada de seguimiento indiscriminado, elija el medio menos invasivo.',
        nl: 'Doorsta de evenredigheidstoets: geen ongedifferentieerd volgen, kies het minst ingrijpende middel.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Individua una base giuridica valida (esecuzione del contratto, art. 48 ZDR-1, o interesse legittimo).",
        en: 'Identify a valid legal basis (performance of the contract, art. 48 ZDR-1, or legitimate interest).',
        de: 'Bestimmen Sie eine gueltige Rechtsgrundlage (Erfuellung des Vertrags, Art. 48 ZDR-1, oder berechtigtes Interesse).',
        fr: "Identifiez une base juridique valable (execution du contrat, art. 48 ZDR-1, ou interet legitime).",
        es: 'Identifique una base juridica valida (ejecucion del contrato, art. 48 ZDR-1, o interes legitimo).',
        nl: 'Bepaal een geldige rechtsgrondslag (uitvoering van de overeenkomst, art. 48 ZDR-1, of gerechtvaardigd belang).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Adotta un atto interno e informa i lavoratori; informa il consiglio dei lavoratori se esiste.',
        en: 'Adopt an internal act and inform the workers; inform the works council if one exists.',
        de: 'Erlassen Sie einen internen Akt und informieren Sie die Beschaeftigten; informieren Sie den Betriebsrat, sofern vorhanden.',
        fr: "Adoptez un acte interne et informez les salaries; informez le conseil des travailleurs s'il existe.",
        es: 'Adopte un acto interno e informe a los trabajadores; informe al consejo de trabajadores si existe.',
        nl: 'Stel een intern besluit vast en informeer de werknemers; informeer de ondernemingsraad indien aanwezig.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) prima di introdurre il GPS.",
        en: 'Carry out the data protection impact assessment (DPIA) before introducing the GPS.',
        de: 'Fuehren Sie die Datenschutz-Folgenabschaetzung (DSFA) durch, bevor Sie das GPS einfuehren.',
        fr: "Realisez l'analyse d'impact (AIPD) avant d'introduire le GPS.",
        es: 'Realice la evaluacion de impacto (EIPD) antes de introducir el GPS.',
        nl: 'Voer de gegevensbeschermingseffectbeoordeling (DPIA) uit voordat u de GPS invoert.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: niente sorveglianza continua, niente conservazione permanente, dispositivi di sicurezza disattivabili.',
        en: 'Configure the system: no continuous surveillance, no permanent storage, safety devices that can be switched off.',
        de: 'Konfigurieren Sie das System: keine kontinuierliche Ueberwachung, keine dauerhafte Speicherung, ausschaltbare Sicherheitsgeraete.',
        fr: "Configurez le systeme: pas de surveillance continue, pas de conservation permanente, dispositifs de securite desactivables.",
        es: 'Configure el sistema: nada de vigilancia continua, nada de conservacion permanente, dispositivos de seguridad desactivables.',
        nl: 'Configureer het systeem: geen continue bewaking, geen permanente opslag, uitschakelbare veiligheidsapparaten.',
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
      ente: 'IP-RS, segnalazioni',
      portale: FONTE_IPRS_SEGNALAZIONE.url,
      urlFonte: FONTE_IPRS_SEGNALAZIONE.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino a 20 milioni di euro o 4% del fatturato (GDPR)',
      en: 'up to 20 million euros or 4% of turnover (GDPR)',
      de: 'bis zu 20 Millionen Euro oder 4% des Umsatzes (DSGVO)',
      fr: "jusqu'a 20 millions d'euros ou 4% du chiffre d'affaires (RGPD)",
      es: 'hasta 20 millones de euros o el 4% de la facturacion (RGPD)',
      nl: 'tot 20 miljoen euro of 4% van de omzet (AVG)',
    },
    casoCitato: {
      it: "La legge nazionale ZVOP-2 e' entrata in vigore nel 2023, quindi non risulta ancora una multa pubblicata specifica per il GPS sui dipendenti. Il Garante (IP-RS) ha pero' già' stabilito in più' pareri che il tracciamento indiscriminato dei lavoratori e' privo di base giuridica. Il rischio sanzionatorio resta quello generale del GDPR (art. 83).",
      en: "The national law ZVOP-2 entered into force in 2023, so no published fine specific to GPS on employees is yet on record. The authority (IP-RS) has however already established in several opinions that indiscriminate tracking of workers lacks a legal basis. The risk of sanctions remains the general one under the GDPR (art. 83).",
      de: "Das nationale Gesetz ZVOP-2 ist 2023 in Kraft getreten, daher ist noch kein veroeffentlichtes Bussgeld speziell zu GPS bei Beschaeftigten verzeichnet. Die Behoerde (IP-RS) hat jedoch bereits in mehreren Stellungnahmen festgestellt, dass die wahllose Ortung von Arbeitnehmern keine Rechtsgrundlage hat. Das Sanktionsrisiko bleibt das allgemeine der DSGVO (Art. 83).",
      fr: "La loi nationale ZVOP-2 est entree en vigueur en 2023, de sorte qu'aucune amende publiee specifique au GPS sur les salaries n'est encore recensee. L'autorite (IP-RS) a toutefois deja etabli dans plusieurs avis que le suivi indiscrimine des salaries est depourvu de base juridique. Le risque de sanction reste celui, general, du RGPD (art. 83).",
      es: "La ley nacional ZVOP-2 entro en vigor en 2023, por lo que aun no consta ninguna multa publicada especifica para el GPS sobre los empleados. La autoridad (IP-RS) ya ha establecido, sin embargo, en varios dictamenes que el seguimiento indiscriminado de los trabajadores carece de base juridica. El riesgo sancionador sigue siendo el general del RGPD (art. 83).",
      nl: "De nationale wet ZVOP-2 is in 2023 in werking getreden, dus er is nog geen gepubliceerde boete specifiek voor GPS bij werknemers bekend. De autoriteit (IP-RS) heeft echter in meerdere adviezen al vastgesteld dat het ongedifferentieerd volgen van werknemers geen rechtsgrondslag heeft. Het sanctierisico blijft het algemene risico op grond van de AVG (art. 83).",
    },
    urlFonte: FONTE_IPRS_SLEDENJE.url,
  },

  fonti: [
    FONTE_IPRS_GPS,
    FONTE_IPRS_SLEDENJE,
    FONTE_ZDR1_48,
    FONTE_IPRS_DPIA,
    FONTE_IPRS_SEGNALAZIONE,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
