/**
 * Scheda-paese Slovenia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * linee guida e parere dell'IP-RS (Garante sloveno) sull'uso dei dispositivi GPS
 * e sul tracciamento dei dipendenti, art. 48 ZDR-1 (dati dei lavoratori), pagina
 * IP-RS sulla valutazione d'impatto, modulo IP-RS per le segnalazioni e GDPR.
 *
 * La Slovenia ha un'unica autorità' nazionale, l'IP-RS, senza ripartizione
 * regionale. La legge nazionale ZVOP-2 (2023) non contiene norme specifiche sul
 * GPS (solo su videosorveglianza e biometria): valgono GDPR, ZDR-1 art. 48 e le
 * linee guida IP-RS. Multa GPS nota: 6.000 euro, comunicato IP-RS del 15.04.2026.
 * Nessun numero, URL o autorita' e' inventato qui.
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
  titolo:
    "IP-RS, elenco dei trattamenti per cui e' obbligatoria la valutazione d'impatto (art. 35.4 GDPR)",
  url: 'https://www.ip-rs.si/fileadmin/user_upload/Pdf/Ocene_ucinkov/Seznam_dejanj_obdelav_osebnih_podatkov__za_katere_velja_zahteva_po_izvedbi_ocene_ucinka_v_zvezi_z_varstvom_osebnih_podatkov.pdf',
};
const FONTE_ZSDU = {
  titolo:
    'Zakon o sodelovanju delavcev pri upravljanju (ZSDU), art. 89-90 (informazione del consiglio dei lavoratori)',
  url: 'https://pisrs.si/pregledPredpisa?id=ZAKO282',
};
const FONTE_IPRS_MULTA_2026 = {
  titolo:
    'IP-RS, comunicato del 15.04.2026: multa di 6.000 euro a un\'azienda pubblica per GPS sui dipendenti',
  url: 'https://www.ip-rs.si/novice/nezakonito-gps-sledenje-zaposlenim-informacijski-poobla%C5%A1%C4%8Denec-javnemu-komunalnemu-podjetju-izrekel-globo-v-vi%C5%A1ini-6000-eur-1776238559',
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
    ente: 'Informacijski pooblaščenec (IP-RS)',
    urlFonte: FONTE_IPRS_SEGNALAZIONE.url,
    verificatoIl: '2026-09-30',
    note: {
      it: "La Slovenia ha un'unica autorità nazionale, l'IP-RS; nessuna ripartizione regionale. La legge nazionale ZVOP-2 è recente (2023), quindi le sanzioni pubblicate sono ancora poche.",
      en: 'Slovenia has a single national authority, the IP-RS; there is no regional breakdown. The national law ZVOP-2 is recent (2023), so the published fines are still few.',
      de: 'Slowenien hat eine einzige nationale Behörde, die IP-RS; es gibt keine regionale Aufteilung. Das nationale Gesetz ZVOP-2 ist neu (2023), daher sind die veröffentlichten Bußgelder noch gering.',
      fr: "La Slovénie a une seule autorité nationale, l'IP-RS; il n'y a pas de répartition régionale. La loi nationale ZVOP-2 est récente (2023), de sorte que les amendes publiées sont encore peu nombreuses.",
      es: 'Eslovenia tiene una única autoridad nacional, la IP-RS; no hay reparto regional. La ley nacional ZVOP-2 es reciente (2023), por lo que las sanciones publicadas son todavía pocas.',
      nl: 'Slovenie heeft een enkele nationale autoriteit, de IP-RS; er is geen regionale verdeling. De nationale wet ZVOP-2 is recent (2023), dus er zijn nog weinig gepubliceerde boetes.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Test di proporzionalità: il tracciamento indiscriminato dei dipendenti non ha base giuridica (IP-RS)',
        en: 'Proportionality test: indiscriminate tracking of employees has no legal basis (IP-RS)',
        de: 'Verhältnismäßigkeitsprüfung: die wahllose Überwachung von Beschäftigten hat keine Rechtsgrundlage (IP-RS)',
        fr: 'Test de proportionnalité: le suivi indiscriminé des salaries n\'a pas de base juridique (IP-RS)',
        es: 'Test de proporcionalidad: el seguimiento indiscriminado de los empleados no tiene base jurídica (IP-RS)',
        nl: 'Evenredigheidstoets: het ongedifferentieerd volgen van werknemers heeft geen rechtsgrondslag (IP-RS)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per il Garante sloveno il tracciamento indiscriminato dei lavoratori tramite GPS non raggiunge lo standard di necessità per l'esercizio di diritti e obblighi del rapporto di lavoro: in tal caso manca la base giuridica. Serve superare il test di proporzionalità (necessità, idoneità, proporzionalità in senso stretto).",
        en: "For the Slovenian authority, indiscriminate tracking of workers via GPS does not meet the necessity standard for exercising the rights and obligations of the employment relationship: in that case the legal basis is missing. It is necessary to pass the proportionality test (necessity, suitability, proportionality in the strict sense).",
        de: "Nach Auffassung der slowenischen Behörde erfüllt die wahllose Ortung von Arbeitnehmern per GPS nicht den Erforderlichkeitsmassstab für die Ausübung der Rechte und Pflichten des Arbeitsverhältnisses: in diesem Fall fehlt die Rechtsgrundlage. Die Verhältnismäßigkeitsprüfung (Erforderlichkeit, Geeignetheit, Verhältnismäßigkeit im engeren Sinne) muss bestanden werden.",
        fr: "Pour l'autorité slovène, le suivi indiscriminé des salaries par GPS n'atteint pas le standard de nécessite pour l'exercice des droits et obligations de la relation de travail: dans ce cas, la base juridique fait défaut. Il faut réussir le test de proportionnalité (nécessite, aptitude, proportionnalité au sens strict).",
        es: "Para la autoridad eslovena, el seguimiento indiscriminado de los trabajadores mediante GPS no alcanza el estándar de necesidad para el ejercicio de los derechos y obligaciones de la relación laboral: en tal caso falta la base jurídica. Hay que superar el test de proporcionalidad (necesidad, idoneidad, proporcionalidad en sentido estricto).",
        nl: "Volgens de Sloveense autoriteit voldoet het ongedifferentieerd volgen van werknemers via GPS niet aan de noodzakelijkheidsnorm voor de uitoefening van de rechten en plichten van de arbeidsverhouding: in dat geval ontbreekt de rechtsgrondslag. De evenredigheidstoets (noodzaak, geschiktheid, evenredigheid in strikte zin) moet worden doorstaan.",
      },
      fonte: FONTE_IPRS_GPS,
    },
    {
      voce: {
        it: 'Base giuridica = esecuzione del contratto (ZDR-1 art. 48) o interesse legittimo, non il consenso',
        en: 'Legal basis = performance of the contract (ZDR-1 art. 48) or legitimate interest, not consent',
        de: 'Rechtsgrundlage = Erfüllung des Vertrags (ZDR-1 Art. 48) oder berechtigtes Interesse, nicht die Einwilligung',
        fr: "Base juridique = exécution du contrat (ZDR-1 art. 48) ou intérêt légitime, pas le consentement",
        es: 'Base jurídica = ejecución del contrato (ZDR-1 art. 48) o interés legítimo, no el consentimiento',
        nl: 'Rechtsgrondslag = uitvoering van de overeenkomst (ZDR-1 art. 48) of gerechtvaardigd belang, niet de toestemming',
      },
      risposta: 'si',
      dettaglio: {
        it: "La base è l'esecuzione del rapporto di lavoro (art. 48 ZDR-1) o il legittimo interesse; il consenso del dipendente difficilmente è valido per lo squilibrio di potere.",
        en: "The basis is the performance of the employment relationship (art. 48 ZDR-1) or the legitimate interest; the employee's consent is hardly valid due to the imbalance of power.",
        de: "Grundlage ist die Erfüllung des Arbeitsverhältnisses (Art. 48 ZDR-1) oder das berechtigte Interesse; die Einwilligung des Beschäftigten ist wegen des Machtungleichgewichts kaum wirksam.",
        fr: "La base est l'exécution de la relation de travail (art. 48 ZDR-1) ou l'intérêt légitime; le consentement du salarie est difficilement valable en raison du déséquilibre de pouvoir.",
        es: "La base es la ejecución de la relación laboral (art. 48 ZDR-1) o el interés legítimo; el consentimiento del empleado difícilmente es valido por el desequilibrio de poder.",
        nl: "De grondslag is de uitvoering van de arbeidsverhouding (art. 48 ZDR-1) of het gerechtvaardigd belang; de toestemming van de werknemer is door de machtsongelijkheid nauwelijks geldig.",
      },
      fonte: FONTE_IPRS_GPS,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: "Autorisation préalable d'une autorité avant l'installation",
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva dell'IP-RS; il titolare valuta da sé base giuridica, proporzionalità e DPIA.",
        en: "No prior authorisation from the IP-RS is required; the controller assesses on its own the legal basis, proportionality and DPIA.",
        de: "Eine vorherige Genehmigung der IP-RS ist nicht erforderlich; der Verantwortliche beurteilt selbst Rechtsgrundlage, Verhältnismäßigkeit und DSFA.",
        fr: "Aucune autorisation préalable de l'IP-RS n'est requise; le responsable évalue lui-même la base juridique, la proportionnalité et l'AIPD.",
        es: "No se necesita una autorización previa de la IP-RS; el responsable evalúa por si mismo la base jurídica, la proporcionalidad y la EIPD.",
        nl: "Er is geen voorafgaande toestemming van de IP-RS nodig; de verwerkingsverantwoordelijke beoordeelt zelf de rechtsgrondslag, de evenredigheid en de DPIA.",
      },
      fonte: FONTE_IPRS_GPS,
    },
    {
      voce: {
        it: 'Niente sorveglianza continua: solo dati puntuali o in tempo reale, non conservazione permanente; dispositivo di sicurezza disattivabile',
        en: 'No continuous surveillance: only point-in-time or real-time data, not permanent storage; safety device that can be switched off',
        de: 'Keine kontinuierliche Überwachung: nur punktuelle oder Echtzeitdaten, keine dauerhafte Speicherung; ausschaltbares Sicherheitsgerät',
        fr: "Pas de surveillance continue: uniquement des données ponctuelles ou en temps réel, pas de conservation permanente; dispositif de securite désactivable",
        es: 'Nada de vigilancia continua: solo datos puntuales o en tiempo real, no conservación permanente; dispositivo de seguridad desactivable',
        nl: 'Geen continue bewaking: alleen momentopname- of realtimegegevens, geen permanente opslag; uitschakelbaar veiligheidsapparaat',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per l'IP-RS non è proporzionato il tracciamento continuo quando basterebbero dati puntuali o in tempo reale senza conservazione; un dispositivo per la sola sicurezza deve poter restare disattivato finché il lavoratore non lo attiva.",
        en: "For the IP-RS, continuous tracking is not proportionate when point-in-time or real-time data without storage would suffice; a device meant solely for safety must be able to stay switched off until the worker activates it.",
        de: "Für die IP-RS ist eine kontinuierliche Ortung nicht verhältnismäßig, wenn punktuelle oder Echtzeitdaten ohne Speicherung ausreichen würden; ein Gerät, das nur der Sicherheit dient, muss ausgeschaltet bleiben können, bis der Beschäftigte es aktiviert.",
        fr: "Pour l'IP-RS, le suivi continu n'est pas proportionné lorsque des données ponctuelles ou en temps réel sans conservation suffiraient; un dispositif destine uniquement a la securite doit pouvoir rester désactive tant que le salarie ne l'active pas.",
        es: "Para la IP-RS, el seguimiento continuo no es proporcionado cuando bastarían datos puntuales o en tiempo real sin conservación; un dispositivo destinado solo a la seguridad debe poder permanecer desactivado hasta que el trabajador lo active.",
        nl: "Voor de IP-RS is continu volgen niet evenredig wanneer momentopname- of realtimegegevens zonder opslag zouden volstaan; een apparaat dat uitsluitend voor de veiligheid bedoeld is, moet uitgeschakeld kunnen blijven totdat de werknemer het inschakelt.",
      },
      fonte: FONTE_IPRS_GPS,
    },
    {
      voce: {
        it: 'Informazione ai lavoratori e atto interno; informazione del consiglio dei lavoratori se esiste (ZSDU)',
        en: 'Information to workers and internal act; information of the works council if one exists (ZSDU)',
        de: 'Information der Beschäftigten und interner Akt; Information des Betriebsrats, sofern vorhanden (ZSDU)',
        fr: "Information des salaries et acte interne; information du conseil des travailleurs s'il existe (ZSDU)",
        es: 'Información a los trabajadores y acto interno; información al consejo de trabajadores si existe (ZSDU)',
        nl: 'Informatie aan werknemers en intern besluit; informatie van de ondernemingsraad indien aanwezig (ZSDU)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Il datore deve informare i lavoratori (art. 13 GDPR) e, secondo l'IP-RS, adottare prima di introdurre il sistema un atto interno (regolamento) che descriva funzionamento, dati raccolti, finalità e tempi di conservazione. Dove esiste un consiglio dei lavoratori, la legge sulla partecipazione dei lavoratori (ZSDU, art. 89-90) impone in generale di informarlo prima di decidere cambiamenti di tecnologia; per il GPS non c'è una regola specifica (la consultazione dei rappresentanti prevista dalla ZVOP-2 riguarda la videosorveglianza).",
        en: "The employer must inform the workers (art. 13 GDPR) and, according to the IP-RS, adopt before introducing the system an internal act (rules) describing how it works, the data collected, the purposes and the retention periods. Where a works council exists, the Workers' Participation in Management Act (ZSDU, arts. 89-90) generally requires informing it before decisions on changes of technology; there is no GPS-specific rule (the consultation of representatives required by the ZVOP-2 concerns video surveillance).",
        de: "Der Arbeitgeber muss die Beschäftigten informieren (Art. 13 DSGVO) und nach Auffassung der IP-RS vor Einführung des Systems einen internen Akt (Regelwerk) erlassen, der Funktionsweise, erhobene Daten, Zwecke und Speicherfristen beschreibt. Wo ein Betriebsrat besteht, verlangt das Gesetz über die Mitwirkung der Arbeitnehmer an der Unternehmensleitung (ZSDU, Art. 89-90) allgemein, ihn vor Entscheidungen über technologische Änderungen zu informieren; eine GPS-spezifische Regel gibt es nicht (die im ZVOP-2 vorgesehene Anhörung der Vertreter betrifft die Videoüberwachung).",
        fr: "L'employeur doit informer les salaries (art. 13 RGPD) et, selon l'IP-RS, adopter avant la mise en place du système un acte interne (règlement) décrivant le fonctionnement, les données collectées, les finalités et les durées de conservation. Lorsqu'un conseil des travailleurs existe, la loi sur la participation des travailleurs à la gestion (ZSDU, art. 89-90) impose en général de l'informer avant toute décision sur un changement de technologie; il n'existe pas de règle propre au GPS (la consultation des représentants prévue par la ZVOP-2 concerne la vidéosurveillance).",
        es: "El empleador debe informar a los trabajadores (art. 13 RGPD) y, según la IP-RS, adoptar antes de introducir el sistema un acto interno (reglamento) que describa el funcionamiento, los datos recogidos, las finalidades y los plazos de conservación. Cuando existe un consejo de trabajadores, la ley de participación de los trabajadores en la gestión (ZSDU, arts. 89-90) obliga en general a informarlo antes de decidir cambios de tecnología; no hay una regla específica para el GPS (la consulta de los representantes prevista por la ZVOP-2 se refiere a la videovigilancia).",
        nl: "De werkgever moet de werknemers informeren (art. 13 AVG) en volgens de IP-RS vóór de invoering van het systeem een intern besluit (reglement) vaststellen dat de werking, de verzamelde gegevens, de doeleinden en de bewaartermijnen beschrijft. Waar een ondernemingsraad bestaat, verplicht de wet over de medezeggenschap van werknemers (ZSDU, art. 89-90) in het algemeen om deze vóór besluiten over technologische wijzigingen te informeren; voor GPS bestaat geen specifieke regel (de raadpleging van vertegenwoordigers in de ZVOP-2 betreft camerabewaking).",
      },
      fonte: FONTE_IPRS_SLEDENJE,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per la geolocalizzazione e i dati dei dipendenti (lista IP-RS)",
        en: 'Data protection impact assessment (DPIA) for geolocation and employee data (IP-RS list)',
        de: 'Datenschutz-Folgenabschätzung (DSFA) für Geolokalisierung und Beschäftigtendaten (Liste der IP-RS)',
        fr: "Analyse d'impact (AIPD) pour la géolocalisation et les données des salaries (liste IP-RS)",
        es: 'Evaluación de impacto (EIPD) para la geolocalizacion y los datos de los empleados (lista IP-RS)',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) voor geolocatie en werknemersgegevens (lijst van de IP-RS)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il Garante raccomanda di svolgere una valutazione d'impatto prima di introdurre dispositivi GPS, e la geolocalizzazione e i dati dei dipendenti sono nella lista che la richiede.",
        en: "The authority recommends carrying out an impact assessment before introducing GPS devices, and geolocation and employee data are on the list that requires one.",
        de: "Die Behörde empfiehlt, vor der Einführung von GPS-Geräten eine Folgenabschätzung durchzuführen, und Geolokalisierung sowie Beschäftigtendaten stehen auf der Liste, die eine solche erfordert.",
        fr: "L'autorité recommandé de réaliser une analyse d'impact avant d'introduire des dispositifs GPS, et la géolocalisation et les données des salaries figurent sur la liste qui l'exige.",
        es: "La autoridad recomienda realizar una evaluación de impacto antes de introducir dispositivos GPS, y la geolocalizacion y los datos de los empleados están en la lista que la exige.",
        nl: "De autoriteit beveelt aan een effectbeoordeling uit te voeren voordat GPS-apparaten worden ingevoerd, en geolocatie en werknemersgegevens staan op de lijst die deze vereist.",
      },
      fonte: FONTE_IPRS_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Supera il test di proporzionalità: niente tracciamento indiscriminato, scegli il mezzo meno invasivo.',
        en: 'Pass the proportionality test: no indiscriminate tracking, choose the least intrusive means.',
        de: 'Bestehen Sie die Verhältnismäßigkeitsprüfung: keine wahllose Ortung, wählen Sie das mildeste Mittel.',
        fr: "Réussissez le test de proportionnalité: pas de suivi indiscriminé, choisissez le moyen le moins intrusif.",
        es: 'Supere el test de proporcionalidad: nada de seguimiento indiscriminado, elija el medio menos invasivo.',
        nl: 'Doorsta de evenredigheidstoets: geen ongedifferentieerd volgen, kies het minst ingrijpende middel.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Individua una base giuridica valida (esecuzione del contratto, art. 48 ZDR-1, o interesse legittimo).",
        en: 'Identify a valid legal basis (performance of the contract, art. 48 ZDR-1, or legitimate interest).',
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage (Erfüllung des Vertrags, Art. 48 ZDR-1, oder berechtigtes Interesse).',
        fr: "Identifiez une base juridique valable (exécution du contrat, art. 48 ZDR-1, ou intérêt légitime).",
        es: 'Identifique una base jurídica valida (ejecución del contrato, art. 48 ZDR-1, o interés legítimo).',
        nl: 'Bepaal een geldige rechtsgrondslag (uitvoering van de overeenkomst, art. 48 ZDR-1, of gerechtvaardigd belang).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Adotta un atto interno e informa i lavoratori; informa il consiglio dei lavoratori se esiste.',
        en: 'Adopt an internal act and inform the workers; inform the works council if one exists.',
        de: 'Erlassen Sie einen internen Akt und informieren Sie die Beschäftigten; informieren Sie den Betriebsrat, sofern vorhanden.',
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
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) durch, bevor Sie das GPS einführen.',
        fr: "Réalisez l'analyse d'impact (AIPD) avant d'introduire le GPS.",
        es: 'Realice la evaluación de impacto (EIPD) antes de introducir el GPS.',
        nl: 'Voer de gegevensbeschermingseffectbeoordeling (DPIA) uit voordat u de GPS invoert.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: niente sorveglianza continua, niente conservazione permanente, dispositivi di sicurezza disattivabili.',
        en: 'Configure the system: no continuous surveillance, no permanent storage, safety devices that can be switched off.',
        de: 'Konfigurieren Sie das System: keine kontinuierliche Überwachung, keine dauerhafte Speicherung, ausschaltbare Sicherheitsgeräte.',
        fr: "Configurez le système: pas de surveillance continue, pas de conservation permanente, dispositifs de securite désactivables.",
        es: 'Configure el sistema: nada de vigilancia continua, nada de conservación permanente, dispositivos de seguridad desactivables.',
        nl: 'Configureer het systeem: geen continue bewaking, geen permanente opslag, uitschakelbare veiligheidsapparaten.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'In caso di cambio di sistema: se cambi sistema o software di monitoraggio, aggiorna e riconsegna l’informativa, e verifica se devi di nuovo informare o consultare i rappresentanti dei lavoratori, dove la legge lo prevede. Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: quella consegnata prima non basta.',
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
      ente: 'IP-RS, segnalazioni',
      portale: FONTE_IPRS_SEGNALAZIONE.url,
      urlFonte: FONTE_IPRS_SEGNALAZIONE.url,
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
      it: "Il 15 aprile 2026 l'IP-RS ha comunicato una multa di 6.000 euro (600 euro alla persona responsabile) a un'azienda pubblica di servizi che raccoglieva in modo continuo e indiscriminato i dati di posizione dei dipendenti dai GPS dei veicoli aziendali, senza una base giuridica valida, senza valutare mezzi meno invasivi e senza informare adeguatamente i lavoratori. Le multe seguono i limiti del GDPR (art. 83; ZVOP-2 art. 95).",
      en: "On 15 April 2026 the IP-RS announced a fine of 6,000 euros (600 euros on the responsible person) against a public utility that continuously and indiscriminately collected employees' location data from company-vehicle GPS units, without a valid legal basis, without assessing less intrusive means and without properly informing the workers. Fines follow the GDPR limits (art. 83; ZVOP-2 art. 95).",
      de: "Am 15. April 2026 gab die IP-RS ein Bußgeld von 6.000 Euro (600 Euro gegen die verantwortliche Person) gegen ein öffentliches Versorgungsunternehmen bekannt, das die Standortdaten der Beschäftigten aus den GPS-Geräten der Firmenfahrzeuge dauerhaft und wahllos erhob, ohne gültige Rechtsgrundlage, ohne mildere Mittel zu prüfen und ohne die Beschäftigten angemessen zu informieren. Die Bußgelder folgen den Grenzen der DSGVO (Art. 83; ZVOP-2 Art. 95).",
      fr: "Le 15 avril 2026, l'IP-RS a annoncé une amende de 6 000 euros (600 euros pour le responsable) à une entreprise publique de services qui collectait de façon continue et indiscriminée les données de localisation des salariés à partir des GPS des véhicules de l'entreprise, sans base juridique valable, sans évaluer de moyens moins intrusifs et sans informer correctement les salariés. Les amendes suivent les plafonds du RGPD (art. 83; ZVOP-2 art. 95).",
      es: "El 15 de abril de 2026 la IP-RS comunicó una multa de 6.000 euros (600 euros al responsable) a una empresa pública de servicios que recogía de forma continua e indiscriminada los datos de ubicación de los empleados desde los GPS de los vehículos de la empresa, sin base jurídica válida, sin evaluar medios menos intrusivos y sin informar adecuadamente a los trabajadores. Las multas siguen los límites del RGPD (art. 83; ZVOP-2 art. 95).",
      nl: "Op 15 april 2026 maakte de IP-RS een boete van 6.000 euro bekend (600 euro voor de verantwoordelijke persoon) voor een openbaar nutsbedrijf dat de locatiegegevens van werknemers via de GPS-units van bedrijfsvoertuigen continu en ongedifferentieerd verzamelde, zonder geldige rechtsgrondslag, zonder mildere middelen te onderzoeken en zonder de werknemers voldoende te informeren. De boetes volgen de grenzen van de AVG (art. 83; ZVOP-2 art. 95).",
    },
    urlFonte: FONTE_IPRS_MULTA_2026.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_IPRS_GPS,
    FONTE_IPRS_SLEDENJE,
    FONTE_IPRS_MULTA_2026,
    FONTE_ZDR1_48,
    FONTE_ZSDU,
    FONTE_IPRS_DPIA,
    FONTE_IPRS_SEGNALAZIONE,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
