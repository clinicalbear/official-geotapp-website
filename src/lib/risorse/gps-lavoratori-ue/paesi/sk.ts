/**
 * Scheda-paese Slovacchia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Zakonnik prace (Codice del lavoro slovacco) art. 13 par. 4 sul monitoraggio
 * dei dipendenti, procedura di tutela dell'UOOU SR (Garante slovacco), guida
 * podnikajte.sk sul monitoraggio dei veicoli aziendali e GDPR, GDPR e rassegna
 * sanzioni UOOU SR di Havel & Partners.
 *
 * La Slovacchia non e' uno Stato federale: la vigilanza spetta a un'unica
 * autorita' nazionale, l'UOOU SR. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

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
const FONTE_PODNIKAJTE = {
  titolo: 'podnikajte.sk, monitoraggio dei veicoli aziendali e GDPR',
  url: 'https://www.podnikajte.sk/zakonne-povinnosti-podnikatela/monitorovanie-sluzobnych-vozidiel-gdpr',
};
const FONTE_UOOU_RECLAMO = {
  titolo:
    'UOOU SR, presentare una proposta di avvio del procedimento (reclamo)',
  url: 'https://www.dataprotection.gov.sk/sk/ine/vyhladavanie-sluzby-formulara-elektronicku-komunikaciu/podavanie-navrhu-zacatie-konania/',
};
const FONTE_HAVEL = {
  titolo:
    'Havel & Partners, rassegna sanzioni UOOU SR (caso HR psicodiagnostica 40.000 euro)',
  url: 'https://www.havelpartners.sk/4-roky-s-gdpr-za-ake-porusenia-udeloval-uoou-najcastejsie-pokuty/',
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
    verificatoIl: '2026-06-15',
    note: {
      it: "La Slovacchia ha un'unica autorita nazionale, l'UOOU SR; nessuna ripartizione regionale.",
      en: 'Slovakia has a single national authority, the UOOU SR; there is no regional split.',
      de: 'Die Slowakei hat eine einzige nationale Behoerde, die UOOU SR; es gibt keine regionale Aufteilung.',
      fr: "La Slovaquie dispose d'une unique autorite nationale, l'UOOU SR ; il n'y a pas de repartition regionale.",
      es: 'Eslovaquia tiene una unica autoridad nacional, la UOOU SR; no existe reparto regional.',
      nl: 'Slowakije heeft een enkele nationale autoriteit, de UOOU SR; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Discussione coi rappresentanti dei lavoratori su portata, modalita e durata del controllo, e informazione preventiva (Zakonnik prace art. 13 par. 4)',
        en: 'Discussion with the workers representatives on the scope, manner and duration of the monitoring, and prior information (Zakonnik prace art. 13 par. 4)',
        de: 'Eroerterung mit den Arbeitnehmervertretern ueber Umfang, Art und Dauer der Kontrolle sowie vorherige Information (Zakonnik prace Art. 13 Abs. 4)',
        fr: "Discussion avec les representants des travailleurs sur la portee, les modalites et la duree du controle, et information prealable (Zakonnik prace art. 13 par. 4)",
        es: 'Discusion con los representantes de los trabajadores sobre el alcance, la forma y la duracion del control, e informacion previa (Zakonnik prace art. 13 par. 4)',
        nl: 'Overleg met de werknemersvertegenwoordigers over de omvang, wijze en duur van de controle, en voorafgaande informatie (Zakonnik prace art. 13 lid 4)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Se introduce un meccanismo di controllo, il datore deve discutere con i rappresentanti dei lavoratori portata, modalita e durata del controllo e informarne i lavoratori. La discussione coi rappresentanti vale dove esistono; l'informazione ai lavoratori vale sempre.",
        en: 'If the employer introduces a monitoring mechanism, it must discuss with the workers representatives the scope, manner and duration of the monitoring and inform the workers about it. The discussion with the representatives applies where they exist; the information to the workers always applies.',
        de: 'Fuehrt der Arbeitgeber einen Kontrollmechanismus ein, muss er Umfang, Art und Dauer der Kontrolle mit den Arbeitnehmervertretern eroertern und die Arbeitnehmer darueber informieren. Die Eroerterung mit den Vertretern gilt dort, wo solche vorhanden sind; die Information der Arbeitnehmer gilt immer.',
        fr: "Si l'employeur introduit un mecanisme de controle, il doit discuter avec les representants des travailleurs de la portee, des modalites et de la duree du controle et en informer les travailleurs. La discussion avec les representants vaut la ou ils existent ; l'information des travailleurs vaut toujours.",
        es: 'Si el empleador introduce un mecanismo de control, debe discutir con los representantes de los trabajadores el alcance, la forma y la duracion del control e informar de ello a los trabajadores. La discusion con los representantes vale donde existen; la informacion a los trabajadores vale siempre.',
        nl: 'Als de werkgever een controlemechanisme invoert, moet hij met de werknemersvertegenwoordigers de omvang, wijze en duur van de controle bespreken en de werknemers hierover informeren. Het overleg met de vertegenwoordigers geldt waar zij bestaan; de informatie aan de werknemers geldt altijd.',
      },
      fonte: FONTE_ZP_13,
    },
    {
      voce: {
        it: "Divieto di sorvegliare senza motivi seri inerenti alla natura dell'attivita, senza preavviso (art. 13 par. 4)",
        en: 'Ban on monitoring without serious reasons inherent in the nature of the business, without prior notice (art. 13 par. 4)',
        de: 'Verbot der Ueberwachung ohne ernsthafte, in der Natur der Taetigkeit liegende Gruende und ohne vorherige Ankuendigung (Art. 13 Abs. 4)',
        fr: "Interdiction de surveiller sans motifs serieux inherents a la nature de l'activite, sans preavis (art. 13 par. 4)",
        es: 'Prohibicion de vigilar sin motivos serios inherentes a la naturaleza de la actividad, sin previo aviso (art. 13 par. 4)',
        nl: 'Verbod op controle zonder ernstige redenen die inherent zijn aan de aard van de activiteit, zonder voorafgaande kennisgeving (art. 13 lid 4)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore non puo, senza motivi seri inerenti alla particolare natura della sua attivita, ledere la privacy del lavoratore monitorandolo senza averlo avvisato prima.",
        en: 'The employer may not, without serious reasons inherent in the particular nature of its business, infringe the privacy of the worker by monitoring them without having given prior notice.',
        de: 'Der Arbeitgeber darf ohne ernsthafte, in der besonderen Natur seiner Taetigkeit liegende Gruende die Privatsphaere des Arbeitnehmers nicht verletzen, indem er ihn ohne vorherige Ankuendigung ueberwacht.',
        fr: "L'employeur ne peut, sans motifs serieux inherents a la nature particuliere de son activite, porter atteinte a la vie privee du travailleur en le surveillant sans l'avoir prevenu au prealable.",
        es: 'El empleador no puede, sin motivos serios inherentes a la naturaleza particular de su actividad, vulnerar la privacidad del trabajador vigilandolo sin haberle avisado previamente.',
        nl: 'De werkgever mag, zonder ernstige redenen die inherent zijn aan de bijzondere aard van zijn activiteit, de privacy van de werknemer niet schenden door hem te controleren zonder hem vooraf te hebben gewaarschuwd.',
      },
      fonte: FONTE_ZP_13,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation from an authority before installation',
        de: 'Vorherige Genehmigung einer Behoerde vor der Installation',
        fr: "Autorisation prealable d'une autorite avant l'installation",
        es: 'Autorizacion previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva dell'UOOU SR; il titolare agisce sotto la propria responsabilita, con DPIA quando richiesta, e l'autorita interviene successivamente.",
        en: 'No prior authorisation from the UOOU SR is needed; the controller acts under its own responsibility, with a DPIA where required, and the authority intervenes afterwards.',
        de: 'Eine vorherige Genehmigung der UOOU SR ist nicht erforderlich; der Verantwortliche handelt in eigener Verantwortung, mit DSFA wo erforderlich, und die Behoerde greift nachtraeglich ein.',
        fr: "Aucune autorisation prealable de l'UOOU SR n'est necessaire ; le responsable du traitement agit sous sa propre responsabilite, avec une AIPD lorsqu'elle est requise, et l'autorite intervient a posteriori.",
        es: 'No se necesita una autorizacion previa de la UOOU SR; el responsable del tratamiento actua bajo su propia responsabilidad, con una EIPD cuando se requiera, y la autoridad interviene a posteriori.',
        nl: 'Er is geen voorafgaande toestemming van de UOOU SR nodig; de verwerkingsverantwoordelijke handelt onder eigen verantwoordelijkheid, met een DPIA waar vereist, en de autoriteit grijpt achteraf in.',
      },
      fonte: FONTE_UOOU_PROCEDURA,
    },
    {
      voce: {
        it: 'Base = interesse legittimo (non il consenso); GPS proporzionato, niente monitoraggio durante l\'uso privato',
        en: 'Legal basis = legitimate interest (not consent); proportionate GPS, no monitoring during private use',
        de: 'Rechtsgrundlage = berechtigtes Interesse (nicht Einwilligung); verhaeltnismaessiges GPS, keine Ueberwachung waehrend der privaten Nutzung',
        fr: "Base juridique = interet legitime (non le consentement) ; GPS proportionne, pas de surveillance pendant l'usage prive",
        es: 'Base juridica = interes legitimo (no el consentimiento); GPS proporcionado, sin monitoreo durante el uso privado',
        nl: 'Rechtsgrond = gerechtvaardigd belang (niet toestemming); proportionele GPS, geen controle tijdens privegebruik',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore puo trattare i dati del lavoratore senza consenso sulla base del proprio interesse legittimo; il monitoraggio deve essere proporzionato nella durata e non avvenire durante l'uso privato del veicolo.",
        en: 'The employer may process the worker data without consent on the basis of its own legitimate interest; the monitoring must be proportionate in duration and must not take place during the private use of the vehicle.',
        de: 'Der Arbeitgeber darf die Daten des Arbeitnehmers ohne Einwilligung auf der Grundlage seines berechtigten Interesses verarbeiten; die Ueberwachung muss in ihrer Dauer verhaeltnismaessig sein und darf nicht waehrend der privaten Nutzung des Fahrzeugs erfolgen.',
        fr: "L'employeur peut traiter les donnees du travailleur sans consentement sur la base de son propre interet legitime ; la surveillance doit etre proportionnee dans sa duree et ne pas avoir lieu pendant l'usage prive du vehicule.",
        es: 'El empleador puede tratar los datos del trabajador sin consentimiento sobre la base de su propio interes legitimo; el monitoreo debe ser proporcionado en su duracion y no producirse durante el uso privado del vehiculo.',
        nl: 'De werkgever mag de gegevens van de werknemer zonder toestemming verwerken op basis van zijn eigen gerechtvaardigd belang; de controle moet qua duur proportioneel zijn en mag niet plaatsvinden tijdens het privegebruik van het voertuig.',
      },
      fonte: FONTE_PODNIKAJTE,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio sistematico dei dipendenti, incluso il GPS (lista UOOU SR)",
        en: 'Impact assessment (DPIA) for systematic monitoring of employees, including GPS (UOOU SR list)',
        de: 'Datenschutz-Folgenabschaetzung (DSFA) fuer die systematische Ueberwachung von Beschaeftigten, einschliesslich GPS (UOOU-SR-Liste)',
        fr: "Analyse d'impact (AIPD) pour la surveillance systematique des salaries, y compris le GPS (liste de l'UOOU SR)",
        es: 'Evaluacion de impacto (EIPD) para el monitoreo sistematico de los empleados, incluido el GPS (lista de la UOOU SR)',
        nl: 'Effectbeoordeling (DPIA) voor de systematische controle van werknemers, inclusief GPS (lijst van de UOOU SR)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista UOOU SR dei trattamenti che richiedono una valutazione d'impatto include il monitoraggio sistematico dei dipendenti, incluso il GPS.",
        en: 'The UOOU SR list of processing operations that require an impact assessment includes the systematic monitoring of employees, including GPS.',
        de: 'Die UOOU-SR-Liste der Verarbeitungen, die eine Folgenabschaetzung erfordern, umfasst die systematische Ueberwachung von Beschaeftigten, einschliesslich GPS.',
        fr: "La liste de l'UOOU SR des traitements qui requierent une analyse d'impact inclut la surveillance systematique des salaries, y compris le GPS.",
        es: 'La lista de la UOOU SR de los tratamientos que requieren una evaluacion de impacto incluye el monitoreo sistematico de los empleados, incluido el GPS.',
        nl: 'De UOOU SR-lijst van verwerkingen die een effectbeoordeling vereisen, omvat de systematische controle van werknemers, inclusief GPS.',
      },
      fonte: FONTE_UOOU_PROCEDURA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Verifica motivi seri inerenti alla natura della tua attivita per il controllo.',
        en: 'Check for serious reasons inherent in the nature of your business that justify the monitoring.',
        de: 'Pruefe ernsthafte, in der Natur Ihrer Taetigkeit liegende Gruende fuer die Kontrolle.',
        fr: "Verifiez les motifs serieux inherents a la nature de votre activite qui justifient le controle.",
        es: 'Verifica motivos serios inherentes a la naturaleza de tu actividad que justifiquen el control.',
        nl: 'Controleer op ernstige, aan de aard van uw activiteit inherente redenen voor de controle.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Discuti con i rappresentanti dei lavoratori portata, modalita e durata del controllo, e informa i lavoratori in anticipo.',
        en: 'Discuss with the workers representatives the scope, manner and duration of the monitoring, and inform the workers in advance.',
        de: 'Eroertere mit den Arbeitnehmervertretern Umfang, Art und Dauer der Kontrolle und informiere die Arbeitnehmer im Voraus.',
        fr: "Discutez avec les representants des travailleurs de la portee, des modalites et de la duree du controle, et informez les travailleurs a l'avance.",
        es: 'Discute con los representantes de los trabajadores el alcance, la forma y la duracion del control, e informa a los trabajadores con antelacion.',
        nl: 'Bespreek met de werknemersvertegenwoordigers de omvang, wijze en duur van de controle, en informeer de werknemers vooraf.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Individua una base giuridica valida (di norma interesse legittimo, non il consenso).',
        en: 'Identify a valid legal basis (as a rule legitimate interest, not consent).',
        de: 'Bestimme eine gueltige Rechtsgrundlage (in der Regel berechtigtes Interesse, nicht Einwilligung).',
        fr: "Identifiez une base juridique valable (en regle generale l'interet legitime, non le consentement).",
        es: 'Identifica una base juridica valida (por regla general el interes legitimo, no el consentimiento).',
        nl: 'Bepaal een geldige rechtsgrond (in de regel gerechtvaardigd belang, niet toestemming).',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio sistematico.",
        en: 'Carry out the impact assessment (DPIA) for systematic monitoring.',
        de: 'Fuehre die Datenschutz-Folgenabschaetzung (DSFA) fuer die systematische Ueberwachung durch.',
        fr: "Realisez l'analyse d'impact (AIPD) pour la surveillance systematique.",
        es: 'Realiza la evaluacion de impacto (EIPD) para el monitoreo sistematico.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor de systematische controle.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema in modo proporzionato: niente monitoraggio durante l\'uso privato del veicolo.',
        en: 'Configure the system in a proportionate way: no monitoring during the private use of the vehicle.',
        de: 'Richte das System verhaeltnismaessig ein: keine Ueberwachung waehrend der privaten Nutzung des Fahrzeugs.',
        fr: "Configurez le systeme de maniere proportionnee : pas de surveillance pendant l'usage prive du vehicule.",
        es: 'Configura el sistema de forma proporcionada: sin monitoreo durante el uso privado del vehiculo.',
        nl: 'Configureer het systeem op een proportionele manier: geen controle tijdens het privegebruik van het voertuig.',
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
      ente: 'UOOU SR, avvio del procedimento',
      portale: FONTE_UOOU_RECLAMO.url,
      urlFonte: FONTE_UOOU_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '40.000 € (caso affine, non GPS)',
      en: '40,000 EUR (related case, not GPS)',
      de: '40.000 EUR (verwandter Fall, nicht GPS)',
      fr: '40 000 EUR (cas connexe, pas GPS)',
      es: '40.000 EUR (caso afin, no GPS)',
      nl: '40.000 EUR (verwant geval, geen GPS)',
    },
    casoCitato: {
      it: "Non risulta una multa dell'UOOU SR specifica e pubblicata per il GPS sui dipendenti. Caso affine: gennaio 2022, multa di 40.000 euro al reparto risorse umane di un'azienda per la valutazione psicodiagnostica dei dipendenti fondata su un consenso non valido nel rapporto di lavoro. Riguarda i dati dei dipendenti, non il GPS.",
      en: "No specific, published UOOU SR fine for GPS on employees is on record. Related case: January 2022, a 40,000 euro fine to a company human resources department for the psychodiagnostic assessment of employees based on consent that is not valid in the employment relationship. It concerns employee data, not GPS.",
      de: "Eine spezifische, veroeffentlichte Geldbusse der UOOU SR fuer GPS bei Beschaeftigten ist nicht bekannt. Verwandter Fall: Januar 2022, eine Geldbusse von 40.000 Euro gegen die Personalabteilung eines Unternehmens fuer die psychodiagnostische Beurteilung von Beschaeftigten auf der Grundlage einer im Arbeitsverhaeltnis ungueltigen Einwilligung. Er betrifft Beschaeftigtendaten, nicht GPS.",
      fr: "Aucune amende specifique et publiee de l'UOOU SR pour le GPS sur les salaries n'est connue. Cas connexe : janvier 2022, une amende de 40 000 euros au service des ressources humaines d'une entreprise pour l'evaluation psychodiagnostique des salaries fondee sur un consentement non valable dans la relation de travail. Elle porte sur les donnees des salaries, non sur le GPS.",
      es: "No consta una multa especifica y publicada de la UOOU SR por el GPS sobre los empleados. Caso afin: enero de 2022, una multa de 40.000 euros al departamento de recursos humanos de una empresa por la evaluacion psicodiagnostica de los empleados basada en un consentimiento no valido en la relacion laboral. Se refiere a los datos de los empleados, no al GPS.",
      nl: "Er is geen specifieke, gepubliceerde boete van de UOOU SR voor GPS op werknemers bekend. Verwant geval: januari 2022, een boete van 40.000 euro aan de afdeling personeelszaken van een bedrijf voor de psychodiagnostische beoordeling van werknemers op basis van een in de arbeidsverhouding ongeldige toestemming. Het betreft werknemersgegevens, niet GPS.",
    },
    urlFonte: FONTE_HAVEL.url,
  },

  fonti: [
    FONTE_ZP_13,
    FONTE_UOOU_PROCEDURA,
    FONTE_PODNIKAJTE,
    FONTE_UOOU_RECLAMO,
    FONTE_HAVEL,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
