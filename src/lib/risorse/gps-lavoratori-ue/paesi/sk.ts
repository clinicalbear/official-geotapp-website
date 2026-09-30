/**
 * Scheda-paese Slovacchia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Zakonnik prace (Codice del lavoro slovacco) art. 13 par. 4 sul monitoraggio
 * dei dipendenti, procedura di tutela dell'UOOU SR (Garante slovacco), parere
 * WP249 pubblicato dall'UOOU SR, lista slovacca DPIA, relazione annuale UOOU SR
 * 2025 e GDPR.
 *
 * La Slovacchia non e' uno Stato federale: la vigilanza spetta a un'unica
 * autorita' nazionale, l'UOOU SR. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese , Fonte} from '../types';

// URL delle fonti primarie citate.
const FONTE_ZP_13 = {
  titolo:
    'Zakonnik prace (Codice del lavoro), art. 13 par. 4 (monitoraggio dei dipendenti)',
  url: 'https://www.slov-lex.sk/ezbierky/pravne-predpisy/SK/ZZ/2001/311/',
};
const FONTE_UOOU_PROCEDURA = {
  titolo: 'UOOU SR (Garante slovacco), procedura di tutela',
  url: 'https://www.dataprotection.gov.sk/sk/urad/konanie-ochrane-osobnych-udajov/',
};
const FONTE_UOOU_WP249 = {
  titolo:
    'Parere 2/2017 sul trattamento dei dati sul posto di lavoro (WP249), par. 5.7 veicoli, versione slovacca pubblicata dall UOOU SR',
  url: 'https://dataprotection.gov.sk/files/metod-edpb/23_stanovisko_k_spracuvaniu_udajov_v_praci.pdf',
};
const FONTE_UOOU_DPIA = {
  titolo:
    'Lista slovacca dei trattamenti soggetti a DPIA (punti 3 e 9), pubblicata dall EDPB',
  url: 'https://www.edpb.europa.eu/sites/default/files/decisions/list_of_processing_operations_which_are_subject_to_the_requirement_for_d.pdf',
};
const FONTE_UOOU_LICEITA = {
  titolo:
    'UOOU SR, guida sulla liceita del trattamento (versione aggiornata 22/01/2019), esempio del par. 13 c. 4 del Codice del lavoro',
  url: 'https://dataprotection.gov.sk/files/metod-urad/6/zakonnost_aktualizovana_verzia_22-01-2019.pdf',
};
const FONTE_UOOU_RECLAMO = {
  titolo:
    'UOOU SR, presentare una proposta di avvio del procedimento (reclamo)',
  url: 'https://www.dataprotection.gov.sk/sk/ine/vyhladavanie-sluzby-formulara-elektronicku-komunikaciu/podavanie-navrhu-zacatie-konania/',
};
const FONTE_UOOU_RELAZIONE_2025 = {
  titolo:
    'UOOU SR, relazione sullo stato della protezione dei dati 2025 (par. 9.2.1, trattamento di dati di geolocalizzazione)',
  url: 'https://dataprotection.gov.sk/files/annual-reports/uoou_sprava-stave-ochrany-osobnych-udajov_2025.pdf',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const slovacchia: SchedaPaese = {
  codiceISO: 'SK',
  slugCanonico: 'slovacchia',
  nome: 'Slovacchia',
  nomi: {
    it: 'Slovacchia',
    en: 'Slovakia',
    'en-us': 'Slovakia',
    'en-gb': 'Slovakia',
    'en-au': 'Slovakia',
    'en-ie': 'Slovakia',
    'en-ca': 'Slovakia',
    de: 'Slowakei',
    nl: 'Slowakije',
    fr: 'Slovaquie',
    es: 'Eslovaquia',
    pt: 'Eslováquia',
    da: 'Slovakiet',
    sv: 'Slovakien',
    nb: 'Slovakia',
    ru: 'Словакия',
  },
  bandiera: '🇸🇰',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'UOOU SR (Urad na ochranu osobnych udajov SR)',
    portale:
      'https://www.dataprotection.gov.sk/sk/ine/vyhladavanie-sluzby-formulara-elektronicku-komunikaciu/podavanie-navrhu-zacatie-konania/',
    urlFonte: FONTE_UOOU_PROCEDURA.url,
    verificatoIl: '2026-09-30',
    note: {
      it: "La Slovacchia ha un'unica autorità nazionale, l'UOOU SR; nessuna ripartizione regionale.",
      en: 'Slovakia has a single national authority, the UOOU SR; there is no regional split.',
      de: 'Die Slowakei hat eine einzige nationale Behörde, die UOOU SR; es gibt keine regionale Aufteilung.',
      fr: "La Slovaquie dispose d'une unique autorité nationale, l'UOOU SR ; il n'y a pas de répartition régionale.",
      es: 'Eslovaquia tiene una única autoridad nacional, la UOOU SR; no existe reparto regional.',
      nl: 'Slowakije heeft een enkele nationale autoriteit, de UOOU SR; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Discussione coi rappresentanti dei lavoratori su portata, modalità e durata del controllo, e informazione preventiva (Zakonnik prace art. 13 par. 4)',
        en: 'Discussion with the workers representatives on the scope, manner and duration of the monitoring, and prior information (Zakonnik prace art. 13 par. 4)',
        de: 'Erörterung mit den Arbeitnehmervertretern über Umfang, Art und Dauer der Kontrolle sowie vorherige Information (Zakonnik prace Art. 13 Abs. 4)',
        fr: "Discussion avec les représentants des travailleurs sur la portée, les modalités et la durée du contrôle, et information préalable (Zakonnik prace art. 13 par. 4)",
        es: 'Discusión con los representantes de los trabajadores sobre el alcance, la forma y la duración del control, e información previa (Zakonnik prace art. 13 par. 4)',
        nl: 'Overleg met de werknemersvertegenwoordigers over de omvang, wijze en duur van de controle, en voorafgaande informatie (Zakonnik prace art. 13 lid 4)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Se introduce un meccanismo di controllo, il datore deve discutere con i rappresentanti dei lavoratori portata, modalità e durata del controllo e informarne i lavoratori. La discussione coi rappresentanti vale dove esistono; l'informazione ai lavoratori vale sempre.",
        en: 'If the employer introduces a monitoring mechanism, it must discuss with the workers representatives the scope, manner and duration of the monitoring and inform the workers about it. The discussion with the representatives applies where they exist; the information to the workers always applies.',
        de: 'Führt der Arbeitgeber einen Kontrollmechanismus ein, muss er Umfang, Art und Dauer der Kontrolle mit den Arbeitnehmervertretern erörtern und die Arbeitnehmer darüber informieren. Die Erörterung mit den Vertretern gilt dort, wo solche vorhanden sind; die Information der Arbeitnehmer gilt immer.',
        fr: "Si l'employeur introduit un mécanisme de contrôle, il doit discuter avec les représentants des travailleurs de la portée, des modalités et de la durée du contrôle et en informer les travailleurs. La discussion avec les représentants vaut la ou ils existent ; l'information des travailleurs vaut toujours.",
        es: 'Si el empleador introduce un mecanismo de control, debe discutir con los representantes de los trabajadores el alcance, la forma y la duración del control e informar de ello a los trabajadores. La discusión con los representantes vale donde existen; la información a los trabajadores vale siempre.',
        nl: 'Als de werkgever een controlemechanisme invoert, moet hij met de werknemersvertegenwoordigers de omvang, wijze en duur van de controle bespreken en de werknemers hierover informeren. Het overleg met de vertegenwoordigers geldt waar zij bestaan; de informatie aan de werknemers geldt altijd.',
      },
      fonte: FONTE_ZP_13,
    },
    {
      voce: {
        it: "Divieto di sorvegliare senza motivi seri inerenti alla natura dell'attività, senza preavviso (art. 13 par. 4)",
        en: 'Ban on monitoring without serious reasons inherent in the nature of the business, without prior notice (art. 13 par. 4)',
        de: 'Verbot der Überwachung ohne ernsthafte, in der Natur der Tätigkeit liegende Gründe und ohne vorherige Ankündigung (Art. 13 Abs. 4)',
        fr: "Interdiction de surveiller sans motifs sérieux inhérents a la nature de l'activité, sans préavis (art. 13 par. 4)",
        es: 'Prohibición de vigilar sin motivos serios inherentes a la naturaleza de la actividad, sin previo aviso (art. 13 par. 4)',
        nl: 'Verbod op controle zonder ernstige redenen die inherent zijn aan de aard van de activiteit, zonder voorafgaande kennisgeving (art. 13 lid 4)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore non può, senza motivi seri inerenti alla particolare natura della sua attività, ledere la privacy del lavoratore sul luogo di lavoro e negli spazi comuni del datore monitorandolo senza averlo avvisato prima.",
        en: 'The employer may not, without serious reasons inherent in the particular nature of its business, infringe the privacy of the worker at the workplace and in the employer\'s common areas by monitoring them without having given prior notice.',
        de: 'Der Arbeitgeber darf ohne ernsthafte, in der besonderen Natur seiner Tätigkeit liegende Gründe die Privatsphäre des Arbeitnehmers am Arbeitsplatz und in den gemeinsamen Räumen des Arbeitgebers nicht verletzen, indem er ihn ohne vorherige Ankündigung überwacht.',
        fr: "L'employeur ne peut, sans motifs sérieux inhérents a la nature particulière de son activité, porter atteinte a la vie privée du travailleur sur le lieu de travail et dans les espaces communs de l'employeur en le surveillant sans l'avoir prévenu au préalable.",
        es: 'El empleador no puede, sin motivos serios inherentes a la naturaleza particular de su actividad, vulnerar la privacidad del trabajador en el lugar de trabajo y en los espacios comunes del empleador vigilandolo sin haberle avisado previamente.',
        nl: 'De werkgever mag, zonder ernstige redenen die inherent zijn aan de bijzondere aard van zijn activiteit, de privacy van de werknemer op de werkplek en in de gemeenschappelijke ruimten van de werkgever niet schenden door hem te controleren zonder hem vooraf te hebben gewaarschuwd.',
      },
      fonte: FONTE_ZP_13,
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
        it: "Non serve un'autorizzazione preventiva dell'UOOU SR; il titolare agisce sotto la propria responsabilità, con DPIA quando richiesta, e l'autorità interviene successivamente.",
        en: 'No prior authorisation from the UOOU SR is needed; the controller acts under its own responsibility, with a DPIA where required, and the authority intervenes afterwards.',
        de: 'Eine vorherige Genehmigung der UOOU SR ist nicht erforderlich; der Verantwortliche handelt in eigener Verantwortung, mit DSFA wo erforderlich, und die Behörde greift nachträglich ein.',
        fr: "Aucune autorisation préalable de l'UOOU SR n'est nécessaire ; le responsable du traitement agit sous sa propre responsabilité, avec une AIPD lorsqu'elle est requise, et l'autorité intervient a posteriori.",
        es: 'No se necesita una autorización previa de la UOOU SR; el responsable del tratamiento actúa bajo su propia responsabilidad, con una EIPD cuando se requiera, y la autoridad interviene a posteriori.',
        nl: 'Er is geen voorafgaande toestemming van de UOOU SR nodig; de verwerkingsverantwoordelijke handelt onder eigen verantwoordelijkheid, met een DPIA waar vereist, en de autoriteit grijpt achteraf in.',
      },
      fonte: FONTE_GDPR,
    },
    {
      voce: {
        it: 'Base = interesse legittimo (non il consenso); GPS proporzionato, niente monitoraggio durante l\'uso privato',
        en: 'Legal basis = legitimate interest (not consent); proportionate GPS, no monitoring during private use',
        de: 'Rechtsgrundlage = berechtigtes Interesse (nicht Einwilligung); verhältnismäßiges GPS, keine Überwachung während der privaten Nutzung',
        fr: "Base juridique = intérêt légitime (non le consentement) ; GPS proportionné, pas de surveillance pendant l'usage prive",
        es: 'Base jurídica = interés legítimo (no el consentimiento); GPS proporcionado, sin monitoreo durante el uso privado',
        nl: 'Rechtsgrond = gerechtvaardigd belang (niet toestemming); proportionele GPS, geen controle tijdens privegebruik',
      },
      risposta: 'si',
      dettaglio: {
        it: "Introdurre un controllo e' una facolta' del datore, non un obbligo di legge: la base e' di norma l'interesse legittimo (art. 6.1.f GDPR), previo test di proporzionalità'. Per il GPS sul veicolo il parere WP249, pubblicato dall'UOOU SR, chiede di valutare necessità' e proporzionalità', di dare al lavoratore la possibilità' di spegnere il tracciamento quando il veicolo e' usato anche privatamente, e osserva che e' improbabile una base giuridica per localizzarlo fuori dall'orario di lavoro concordato.",
        en: 'Introducing a control is an entitlement of the employer, not a legal duty: the basis is normally legitimate interest (art. 6(1)(f) GDPR), after a proportionality test. For GPS on a vehicle, opinion WP249, published by the UOOU SR, asks for necessity and proportionality to be assessed, for the worker to be able to switch tracking off when the vehicle is also used privately, and notes that a legal basis for locating it outside agreed working hours is unlikely.',
        de: 'Die Einführung einer Kontrolle ist eine Befugnis des Arbeitgebers, keine gesetzliche Pflicht: Grundlage ist in der Regel das berechtigte Interesse (Art. 6 Abs. 1 Buchst. f DSGVO) nach einer Verhältnismäßigkeitsprüfung. Für GPS im Fahrzeug verlangt die von der UOOU SR veröffentlichte Stellungnahme WP249, Erforderlichkeit und Verhältnismäßigkeit zu prüfen, dem Beschäftigten die Möglichkeit zu geben, die Ortung auszuschalten, wenn das Fahrzeug auch privat genutzt wird, und hält eine Rechtsgrundlage für die Ortung außerhalb der vereinbarten Arbeitszeit für unwahrscheinlich.',
        fr: "Introduire un contrôle est une faculté de l'employeur, non une obligation légale : la base est en général l'intérêt légitime (art. 6, par. 1, point f RGPD), après un test de proportionnalité. Pour le GPS d'un véhicule, l'avis WP249, publié par l'UOOU SR, demande d'évaluer la nécessité et la proportionnalité, de laisser au travailleur la possibilité de couper le suivi lorsque le véhicule est aussi utilisé à titre privé, et relève qu'une base juridique pour le localiser en dehors des heures de travail convenues est peu probable.",
        es: 'Introducir un control es una facultad del empleador, no una obligación legal: la base es normalmente el interés legítimo (art. 6.1.f RGPD), tras una prueba de proporcionalidad. Para el GPS de un vehículo, el dictamen WP249, publicado por la UOOU SR, pide evaluar la necesidad y la proporcionalidad, dar al trabajador la posibilidad de apagar el rastreo cuando el vehículo se usa también de forma privada, y señala que es improbable una base jurídica para localizarlo fuera del horario de trabajo acordado.',
        nl: 'Een controle invoeren is een bevoegdheid van de werkgever, geen wettelijke plicht: de grondslag is doorgaans het gerechtvaardigd belang (art. 6 lid 1 onder f AVG), na een evenredigheidstoets. Voor GPS in een voertuig vraagt het door de UOOU SR gepubliceerde advies WP249 om noodzaak en evenredigheid te toetsen, de werknemer de mogelijkheid te geven het volgen uit te schakelen wanneer het voertuig ook privé wordt gebruikt, en merkt op dat een rechtsgrond om het buiten de afgesproken werktijd te lokaliseren onwaarschijnlijk is.',
      },
      fonte: FONTE_UOOU_WP249,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio sistematico dei dipendenti, incluso il GPS (lista UOOU SR)",
        en: 'Impact assessment (DPIA) for systematic monitoring of employees, including GPS (UOOU SR list)',
        de: 'Datenschutz-Folgenabschätzung (DSFA) für die systematische Überwachung von Beschäftigten, einschließlich GPS (UOOU-SR-Liste)',
        fr: "Analyse d'impact (AIPD) pour la surveillance systématique des salaries, y compris le GPS (liste de l'UOOU SR)",
        es: 'Evaluación de impacto (EIPD) para el monitoreo sistemático de los empleados, incluido el GPS (lista de la UOOU SR)',
        nl: 'Effectbeoordeling (DPIA) voor de systematische controle van werknemers, inclusief GPS (lijst van de UOOU SR)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista slovacca elenca tra i trattamenti che richiedono sempre una DPIA il monitoraggio del lavoro dei dipendenti (punto 9: interessati vulnerabili e monitoraggio sistematico) e il trattamento di dati di localizzazione insieme a un altro criterio del WP248 (punto 3). Il GPS non e' nominato, ma di norma rientra in entrambi.",
        en: 'The Slovak list names among the operations that always require a DPIA the monitoring of employees\' work (item 9: vulnerable data subjects and systematic monitoring) and the processing of location data together with another WP248 criterion (item 3). GPS is not named, but it normally falls under both.',
        de: 'Die slowakische Liste nennt unter den Verarbeitungen, die stets eine DSFA erfordern, die Überwachung der Arbeit von Beschäftigten (Nr. 9: schutzbedürftige Betroffene und systematische Überwachung) und die Verarbeitung von Standortdaten zusammen mit einem weiteren WP248-Kriterium (Nr. 3). GPS wird nicht genannt, fällt aber in der Regel unter beides.',
        fr: "La liste slovaque range parmi les traitements exigeant toujours une AIPD la surveillance du travail des salariés (point 9 : personnes vulnérables et surveillance systématique) et le traitement de données de localisation avec un autre critère du WP248 (point 3). Le GPS n'est pas nommé, mais relève en général des deux.",
        es: 'La lista eslovaca incluye entre los tratamientos que siempre requieren una EIPD el monitoreo del trabajo de los empleados (punto 9: interesados vulnerables y monitoreo sistemático) y el tratamiento de datos de localización junto con otro criterio del WP248 (punto 3). El GPS no se nombra, pero normalmente entra en ambos.',
        nl: 'De Slowaakse lijst noemt onder de verwerkingen waarvoor altijd een DPIA nodig is het monitoren van het werk van werknemers (punt 9: kwetsbare betrokkenen en systematische monitoring) en de verwerking van locatiegegevens samen met een ander WP248-criterium (punt 3). GPS wordt niet genoemd, maar valt doorgaans onder beide.',
      },
      fonte: FONTE_UOOU_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Verifica motivi seri inerenti alla natura della tua attività per il controllo.',
        en: 'Check for serious reasons inherent in the nature of your business that justify the monitoring.',
        de: 'Prüfe ernsthafte, in der Natur Ihrer Tätigkeit liegende Gründe für die Kontrolle.',
        fr: "Vérifiez les motifs sérieux inhérents a la nature de votre activité qui justifient le contrôle.",
        es: 'Verifica motivos serios inherentes a la naturaleza de tu actividad que justifiquen el control.',
        nl: 'Controleer op ernstige, aan de aard van uw activiteit inherente redenen voor de controle.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Discuti con i rappresentanti dei lavoratori portata, modalità e durata del controllo, e informa i lavoratori in anticipo.',
        en: 'Discuss with the workers representatives the scope, manner and duration of the monitoring, and inform the workers in advance.',
        de: 'Erörtere mit den Arbeitnehmervertretern Umfang, Art und Dauer der Kontrolle und informiere die Arbeitnehmer im Voraus.',
        fr: "Discutez avec les représentants des travailleurs de la portée, des modalités et de la durée du contrôle, et informez les travailleurs a l'avance.",
        es: 'Discute con los representantes de los trabajadores el alcance, la forma y la duración del control, e informa a los trabajadores con antelación.',
        nl: 'Bespreek met de werknemersvertegenwoordigers de omvang, wijze en duur van de controle, en informeer de werknemers vooraf.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Individua una base giuridica valida (di norma interesse legittimo, non il consenso).',
        en: 'Identify a valid legal basis (as a rule legitimate interest, not consent).',
        de: 'Bestimme eine gültige Rechtsgrundlage (in der Regel berechtigtes Interesse, nicht Einwilligung).',
        fr: "Identifiez une base juridique valable (en règle generale l'intérêt légitime, non le consentement).",
        es: 'Identifica una base jurídica valida (por regla general el interés legítimo, no el consentimiento).',
        nl: 'Bepaal een geldige rechtsgrond (in de regel gerechtvaardigd belang, niet toestemming).',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio sistematico.",
        en: 'Carry out the impact assessment (DPIA) for systematic monitoring.',
        de: 'Führe die Datenschutz-Folgenabschätzung (DSFA) für die systematische Überwachung durch.',
        fr: "Réalisez l'analyse d'impact (AIPD) pour la surveillance systématique.",
        es: 'Realiza la evaluación de impacto (EIPD) para el monitoreo sistemático.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor de systematische controle.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema in modo proporzionato: niente monitoraggio durante l\'uso privato del veicolo.',
        en: 'Configure the system in a proportionate way: no monitoring during the private use of the vehicle.',
        de: 'Richte das System verhältnismäßig ein: keine Überwachung während der privaten Nutzung des Fahrzeugs.',
        fr: "Configurez le système de manière proportionnée : pas de surveillance pendant l'usage prive du véhicule.",
        es: 'Configura el sistema de forma proporcionada: sin monitoreo durante el uso privado del vehículo.',
        nl: 'Configureer het systeem op een proportionele manier: geen controle tijdens het privegebruik van het voertuig.',
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
      ente: 'UOOU SR, avvio del procedimento',
      portale: FONTE_UOOU_RECLAMO.url,
      urlFonte: FONTE_UOOU_RECLAMO.url,
      verificatoIl: '2026-09-30',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '20 milioni di € o il 4% del fatturato mondiale annuo',
      en: 'EUR 20 million or 4% of total annual worldwide turnover',
      de: '20 Millionen EUR oder 4% des weltweiten Jahresumsatzes',
      fr: '20 millions EUR ou 4% du chiffre d affaires mondial annuel',
      es: '20 millones de EUR o el 4% de la facturación mundial anual',
      nl: '20 miljoen EUR of 4% van de wereldwijde jaaromzet',
    },
    casoCitato: {
      it: "Massimale di legge, non una multa inflitta: vale l'art. 83 GDPR. Nella relazione annuale 2025 (par. 9.2.1) l'UOOU SR riporta un caso di geolocalizzazione dei dipendenti: un datore registrava e conservava la posizione di chi lavorava da casa nel momento in cui timbrava l'inizio e la fine del lavoro su un terminale virtuale. Mancava una base giuridica, perché il Codice del lavoro impone di registrare l'orario e non la posizione, e l'informativa era incompleta. L'autorità ha inflitto una multa e misure correttive, ma l'importo non è pubblicato.",
      en: 'Statutory ceiling, not a fine that was imposed: Article 83 GDPR applies. In its 2025 annual report (section 9.2.1) the UOOU SR describes a case of employee geolocation: an employer recorded and kept the location of people working from home at the moment they clocked in and out on a virtual terminal. There was no legal basis, because the Labour Code requires working time to be recorded, not location, and the privacy notice was incomplete. The authority imposed a fine and corrective measures, but the amount is not published.',
      de: 'Gesetzlicher Höchstbetrag, keine verhängte Geldbuße: Es gilt Art. 83 DSGVO. In ihrem Jahresbericht 2025 (Abschnitt 9.2.1) schildert die UOOU SR einen Fall der Ortung von Beschäftigten: Ein Arbeitgeber erfasste und speicherte den Standort der im Homeoffice Arbeitenden in dem Moment, in dem sie Beginn und Ende der Arbeit an einem virtuellen Terminal stempelten. Es fehlte eine Rechtsgrundlage, weil das Arbeitsgesetzbuch die Erfassung der Arbeitszeit vorschreibt, nicht des Standorts, und die Datenschutzhinweise waren unvollständig. Die Behörde verhängte eine Geldbuße und Abhilfemaßnahmen, der Betrag ist jedoch nicht veröffentlicht.',
      fr: "Plafond légal, et non une amende infligée : l'article 83 du RGPD s'applique. Dans son rapport annuel 2025 (section 9.2.1), l'UOOU SR décrit un cas de géolocalisation des salariés : un employeur enregistrait et conservait la position des personnes en télétravail au moment où elles pointaient le début et la fin du travail sur un terminal virtuel. Il n'y avait pas de base juridique, car le Code du travail impose d'enregistrer le temps de travail et non la position, et l'information des personnes était incomplète. L'autorité a infligé une amende et des mesures correctrices, mais le montant n'est pas publié.",
      es: 'Tope legal, no una multa impuesta: se aplica el art. 83 del RGPD. En su memoria anual de 2025 (apartado 9.2.1) la UOOU SR describe un caso de geolocalización de empleados: un empleador registraba y conservaba la ubicación de quienes teletrabajaban en el momento en que fichaban el inicio y el fin del trabajo en un terminal virtual. No había base jurídica, porque el Código del trabajo obliga a registrar el tiempo de trabajo y no la ubicación, y la información a los afectados era incompleta. La autoridad impuso una multa y medidas correctoras, pero el importe no se ha publicado.',
      nl: 'Wettelijk maximum, geen opgelegde boete: artikel 83 AVG geldt. In haar jaarverslag 2025 (paragraaf 9.2.1) beschrijft de UOOU SR een geval van geolocatie van werknemers: een werkgever registreerde en bewaarde de locatie van thuiswerkers op het moment dat zij begin en einde van het werk op een virtuele terminal registreerden. Er was geen rechtsgrondslag, omdat het Arbeidswetboek voorschrijft de arbeidstijd te registreren en niet de locatie, en de informatie aan de betrokkenen was onvolledig. De autoriteit legde een boete en corrigerende maatregelen op, maar het bedrag is niet gepubliceerd.',
    },
    urlFonte: FONTE_UOOU_RELAZIONE_2025.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_ZP_13,
    FONTE_UOOU_PROCEDURA,
    FONTE_UOOU_WP249,
    FONTE_UOOU_DPIA,
    FONTE_UOOU_LICEITA,
    FONTE_UOOU_RECLAMO,
    FONTE_UOOU_RELAZIONE_2025,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
