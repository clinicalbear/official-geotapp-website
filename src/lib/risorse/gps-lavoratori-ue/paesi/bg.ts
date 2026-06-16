/**
 * Scheda-paese Bulgaria per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Legge bulgara sulla protezione dei dati (ZZLD), art. 25ж e 25и, guida del CPDP
 * sulla privacy sul luogo di lavoro, lista CPDP dei trattamenti che richiedono una
 * DPIA, parere CPDP sul caso LUKOIL e GDPR.
 *
 * La Bulgaria ha un'unica autorita' nazionale, il CPDP: nessuna ripartizione
 * regionale. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_ZZLD_25ZH = {
  titolo:
    'Legge sulla protezione dei dati (ZZLD), art. 25ж e 25и (controllo sul lavoro e monitoraggio su larga scala)',
  url: 'https://www.apis.bg/uploads/assets/Konsolidiran_ZZLD.pdf',
};
const FONTE_CPDP_GUIDA = {
  titolo: 'CPDP (Garante bulgaro), guida sulla privacy sul luogo di lavoro (GPS)',
  url: 'https://cpdp.bg/wp-content/uploads/2023/12/Guidelines__Privacy_protection_in_the_workplace_BG.pdf',
};
const FONTE_CPDP_DPIA = {
  titolo: 'CPDP, lista dei trattamenti che richiedono una DPIA (art. 35.4)',
  url: 'https://cpdp.bg/кзлд-прие-списък-на-видовете-операции/',
};
const FONTE_CPDP_LUKOIL = {
  titolo:
    'CPDP, parere su LUKOIL (riuso della videosorveglianza per valutare i dipendenti)',
  url: 'https://cpdp.bg/становище-на-кзлд-относно-законосъоб-5/',
};
const FONTE_CPDP_SITO = {
  titolo: 'CPDP (Garante bulgaro), pagina ufficiale',
  url: 'https://cpdp.bg/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const bulgaria: SchedaPaese = {
  codiceISO: 'BG',
  slugCanonico: 'bulgaria',
  nome: 'Bulgaria',
  nomi: {
    it: 'Bulgaria',
    en: 'Bulgaria',
    'en-us': 'Bulgaria',
    'en-gb': 'Bulgaria',
    'en-au': 'Bulgaria',
    'en-ie': 'Bulgaria',
    'en-ca': 'Bulgaria',
    de: 'Bulgarien',
    nl: 'Bulgarije',
    fr: 'Bulgarie',
    es: 'Bulgaria',
    pt: 'Bulgária',
    da: 'Bulgarien',
    sv: 'Bulgarien',
    nb: 'Bulgaria',
    ru: 'Болгария',
  },
  bandiera: '🇧🇬',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'CPDP (Komisia za zashtita na lichnite danni)',
    portale: FONTE_CPDP_SITO.url,
    urlFonte: FONTE_CPDP_SITO.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Bulgaria ha un'unica autorita nazionale, il CPDP; nessuna ripartizione regionale.",
      en: 'Bulgaria has a single national authority, the CPDP; there is no regional breakdown.',
      de: 'Bulgarien hat eine einzige nationale Behoerde, die CPDP; es gibt keine regionale Aufteilung.',
      fr: "La Bulgarie dispose d'une seule autorite nationale, la CPDP; il n'y a pas de repartition regionale.",
      es: 'Bulgaria cuenta con una unica autoridad nacional, la CPDP; no existe reparto regional.',
      nl: 'Bulgarije heeft een enkele nationale autoriteit, de CPDP; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: "Regole interne e informazione ai lavoratori sui sistemi di controllo dell'accesso, dell'orario e della disciplina (ZZLD art. 25ж)",
        en: 'Internal rules and worker information on systems for access, time and discipline control (ZZLD art. 25zh)',
        de: 'Interne Regeln und Information der Beschaeftigten ueber Systeme zur Zugangs-, Zeit- und Disziplinkontrolle (ZZLD Art. 25zh)',
        fr: "Regles internes et information des travailleurs sur les systemes de controle de l'acces, du temps et de la discipline (ZZLD art. 25zh)",
        es: 'Reglas internas e informacion a los trabajadores sobre los sistemas de control de acceso, de la jornada y de la disciplina (ZZLD art. 25zh)',
        nl: 'Interne regels en informatie aan werknemers over systemen voor toegangs-, tijd- en disciplinecontrole (ZZLD art. 25zh)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore deve adottare regole e procedure interne quando introduce sistemi di controllo dell'accesso, dell'orario e della disciplina del lavoro, indicandone ambito, obblighi e metodi, e portarle a conoscenza dei lavoratori.",
        en: 'The employer must adopt internal rules and procedures when introducing systems for controlling access, working time and labour discipline, setting out their scope, obligations and methods, and bring them to the workers attention.',
        de: 'Der Arbeitgeber muss interne Regeln und Verfahren erlassen, wenn er Systeme zur Kontrolle des Zugangs, der Arbeitszeit und der Arbeitsdisziplin einfuehrt, deren Umfang, Pflichten und Methoden festlegen und sie den Beschaeftigten zur Kenntnis bringen.',
        fr: "L'employeur doit adopter des regles et des procedures internes lorsqu'il introduit des systemes de controle de l'acces, du temps de travail et de la discipline, en precisant leur portee, les obligations et les methodes, et les porter a la connaissance des travailleurs.",
        es: 'El empleador debe adoptar reglas y procedimientos internos cuando introduce sistemas de control del acceso, del horario y de la disciplina laboral, indicando su alcance, obligaciones y metodos, y darlos a conocer a los trabajadores.',
        nl: 'De werkgever moet interne regels en procedures vaststellen wanneer hij systemen voor toegangs-, arbeidstijd- en disciplinecontrole invoert, met vermelding van de reikwijdte, verplichtingen en methoden, en deze ter kennis van de werknemers brengen.',
      },
      fonte: FONTE_ZZLD_25ZH,
    },
    {
      voce: {
        it: 'Regole speciali per il monitoraggio sistematico su larga scala, inclusa la videosorveglianza (art. 25и)',
        en: 'Special rules for large-scale systematic monitoring, including video surveillance (art. 25i)',
        de: 'Sonderregeln fuer die systematische Ueberwachung in grossem Umfang, einschliesslich Videoueberwachung (Art. 25i)',
        fr: 'Regles speciales pour la surveillance systematique a grande echelle, y compris la videosurveillance (art. 25i)',
        es: 'Reglas especiales para la vigilancia sistematica a gran escala, incluida la videovigilancia (art. 25i)',
        nl: 'Bijzondere regels voor grootschalige systematische monitoring, met inbegrip van cameratoezicht (art. 25i)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: 'Per il monitoraggio sistematico su larga scala di zone accessibili al pubblico, inclusa la videosorveglianza, servono regole speciali su basi giuridiche, finalita, ambito, conservazione e informazione.',
        en: 'For large-scale systematic monitoring of publicly accessible areas, including video surveillance, special rules are required on legal bases, purposes, scope, retention and information.',
        de: 'Fuer die systematische Ueberwachung oeffentlich zugaenglicher Bereiche in grossem Umfang, einschliesslich Videoueberwachung, sind Sonderregeln zu Rechtsgrundlagen, Zwecken, Umfang, Speicherung und Information erforderlich.',
        fr: 'Pour la surveillance systematique a grande echelle de zones accessibles au public, y compris la videosurveillance, des regles speciales sont requises concernant les bases juridiques, les finalites, la portee, la conservation et l\'information.',
        es: 'Para la vigilancia sistematica a gran escala de zonas accesibles al publico, incluida la videovigilancia, se necesitan reglas especiales sobre bases juridicas, finalidades, alcance, conservacion e informacion.',
        nl: 'Voor grootschalige systematische monitoring van openbaar toegankelijke ruimten, met inbegrip van cameratoezicht, zijn bijzondere regels vereist over rechtsgronden, doeleinden, reikwijdte, bewaring en informatie.',
      },
      fonte: FONTE_ZZLD_25ZH,
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
        it: 'Non serve un\'autorizzazione preventiva del CPDP; il titolare adotta da se le regole interne e svolge la DPIA quando richiesta.',
        en: 'No prior authorisation from the CPDP is required; the controller adopts the internal rules itself and carries out the DPIA when required.',
        de: 'Eine vorherige Genehmigung der CPDP ist nicht erforderlich; der Verantwortliche erlaesst die internen Regeln selbst und fuehrt die DSFA durch, wenn sie erforderlich ist.',
        fr: "Aucune autorisation prealable de la CPDP n'est requise; le responsable du traitement adopte lui-meme les regles internes et realise l'AIPD lorsqu'elle est requise.",
        es: 'No se necesita autorizacion previa del CPDP; el responsable adopta por si mismo las reglas internas y realiza la EIPD cuando es necesaria.',
        nl: 'Er is geen voorafgaande toestemming van de CPDP vereist; de verwerkingsverantwoordelijke stelt zelf de interne regels vast en voert de DPIA uit wanneer dat vereist is.',
      },
      fonte: FONTE_CPDP_DPIA,
    },
    {
      voce: {
        it: "Base = interesse legittimo (non il consenso, per lo squilibrio di potere); proporzionalita; niente tracciamento durante l'uso privato del veicolo",
        en: 'Basis = legitimate interest (not consent, due to the imbalance of power); proportionality; no tracking during private use of the vehicle',
        de: 'Grundlage = berechtigtes Interesse (nicht die Einwilligung, wegen des Machtungleichgewichts); Verhaeltnismaessigkeit; keine Ortung waehrend der privaten Nutzung des Fahrzeugs',
        fr: "Base = interet legitime (non le consentement, en raison du desequilibre de pouvoir); proportionnalite; pas de suivi pendant l'usage prive du vehicule",
        es: 'Base = interes legitimo (no el consentimiento, por el desequilibrio de poder); proporcionalidad; sin rastreo durante el uso privado del vehiculo',
        nl: 'Grondslag = gerechtvaardigd belang (niet de toestemming, vanwege de machtsongelijkheid); evenredigheid; geen tracking tijdens privegebruik van het voertuig',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per il CPDP il consenso difficilmente e libero nel rapporto di lavoro; la base e l'interesse legittimo, il trattamento deve essere proporzionato e il datore non puo usare dispositivi di tracciamento durante l'uso privato del veicolo.",
        en: 'According to the CPDP, consent can hardly be free in the employment relationship; the basis is legitimate interest, the processing must be proportionate and the employer cannot use tracking devices during private use of the vehicle.',
        de: 'Nach Auffassung der CPDP kann die Einwilligung im Arbeitsverhaeltnis kaum freiwillig sein; die Grundlage ist das berechtigte Interesse, die Verarbeitung muss verhaeltnismaessig sein und der Arbeitgeber darf waehrend der privaten Nutzung des Fahrzeugs keine Ortungsgeraete einsetzen.',
        fr: "Pour la CPDP, le consentement peut difficilement etre libre dans la relation de travail; la base est l'interet legitime, le traitement doit etre proportionne et l'employeur ne peut pas utiliser de dispositifs de suivi pendant l'usage prive du vehicule.",
        es: 'Para el CPDP, el consentimiento dificilmente es libre en la relacion laboral; la base es el interes legitimo, el tratamiento debe ser proporcionado y el empleador no puede usar dispositivos de rastreo durante el uso privado del vehiculo.',
        nl: 'Volgens de CPDP kan toestemming in de arbeidsrelatie nauwelijks vrij zijn; de grondslag is het gerechtvaardigd belang, de verwerking moet evenredig zijn en de werkgever mag geen trackingapparatuur gebruiken tijdens privegebruik van het voertuig.',
      },
      fonte: FONTE_CPDP_GUIDA,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il trattamento dei dati di localizzazione con profilazione o per il monitoraggio sistematico",
        en: 'Impact assessment (DPIA) for processing location data with profiling or for systematic monitoring',
        de: 'Datenschutz-Folgenabschaetzung (DSFA) fuer die Verarbeitung von Standortdaten mit Profiling oder fuer die systematische Ueberwachung',
        fr: "Analyse d'impact (AIPD) pour le traitement des donnees de localisation avec profilage ou pour la surveillance systematique",
        es: 'Evaluacion de impacto (EIPD) para el tratamiento de datos de localizacion con elaboracion de perfiles o para la vigilancia sistematica',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) voor de verwerking van locatiegegevens met profilering of voor systematische monitoring',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista CPDP include il trattamento dei dati di localizzazione a fini di profilazione con effetti significativi; il monitoraggio sistematico dei dipendenti rientra tra i casi ad alto rischio che richiedono una valutazione d'impatto.",
        en: 'The CPDP list includes processing of location data for profiling with significant effects; systematic monitoring of employees falls among the high-risk cases that require an impact assessment.',
        de: 'Die CPDP-Liste umfasst die Verarbeitung von Standortdaten zu Profiling-Zwecken mit erheblichen Auswirkungen; die systematische Ueberwachung von Beschaeftigten gehoert zu den Faellen mit hohem Risiko, die eine Folgenabschaetzung erfordern.',
        fr: "La liste de la CPDP inclut le traitement des donnees de localisation a des fins de profilage avec des effets significatifs; la surveillance systematique des salaries figure parmi les cas a haut risque qui requierent une analyse d'impact.",
        es: 'La lista del CPDP incluye el tratamiento de datos de localizacion con fines de elaboracion de perfiles con efectos significativos; la vigilancia sistematica de los empleados se cuenta entre los casos de alto riesgo que requieren una evaluacion de impacto.',
        nl: 'De CPDP-lijst omvat de verwerking van locatiegegevens voor profilering met aanzienlijke gevolgen; de systematische monitoring van werknemers behoort tot de gevallen met een hoog risico die een effectbeoordeling vereisen.',
      },
      fonte: FONTE_CPDP_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Adotta regole interne sui sistemi di controllo e portale a conoscenza dei lavoratori (art. 25ж).',
        en: 'Adopt internal rules on the control systems and bring them to the workers attention (art. 25zh).',
        de: 'Erlassen Sie interne Regeln zu den Kontrollsystemen und bringen Sie sie den Beschaeftigten zur Kenntnis (Art. 25zh).',
        fr: 'Adoptez des regles internes sur les systemes de controle et portez-les a la connaissance des travailleurs (art. 25zh).',
        es: 'Adopte reglas internas sobre los sistemas de control y deles a conocer a los trabajadores (art. 25zh).',
        nl: 'Stel interne regels over de controlesystemen vast en breng deze ter kennis van de werknemers (art. 25zh).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Individua una base giuridica valida (interesse legittimo, non il consenso) e documenta la proporzionalita.',
        en: 'Identify a valid legal basis (legitimate interest, not consent) and document the proportionality.',
        de: 'Ermitteln Sie eine gueltige Rechtsgrundlage (berechtigtes Interesse, nicht die Einwilligung) und dokumentieren Sie die Verhaeltnismaessigkeit.',
        fr: "Identifiez une base juridique valable (interet legitime, non le consentement) et documentez la proportionnalite.",
        es: 'Identifique una base juridica valida (interes legitimo, no el consentimiento) y documente la proporcionalidad.',
        nl: 'Bepaal een geldige rechtsgrond (gerechtvaardigd belang, niet de toestemming) en documenteer de evenredigheid.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio sistematico o i dati di localizzazione.",
        en: 'Carry out the impact assessment (DPIA) for systematic monitoring or location data.',
        de: 'Fuehren Sie die Datenschutz-Folgenabschaetzung (DSFA) fuer die systematische Ueberwachung oder Standortdaten durch.',
        fr: "Realisez l'analyse d'impact (AIPD) pour la surveillance systematique ou les donnees de localisation.",
        es: 'Realice la evaluacion de impacto (EIPD) para la vigilancia sistematica o los datos de localizacion.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor systematische monitoring of locatiegegevens.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Informa i lavoratori prima dell\'attivazione (art. 13 GDPR).',
        en: 'Inform the workers before activation (art. 13 GDPR).',
        de: 'Informieren Sie die Beschaeftigten vor der Aktivierung (Art. 13 DSGVO).',
        fr: "Informez les travailleurs avant l'activation (art. 13 RGPD).",
        es: 'Informe a los trabajadores antes de la activacion (art. 13 RGPD).',
        nl: 'Informeer de werknemers voor de activering (art. 13 AVG).',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Configura il sistema: niente tracciamento durante l'uso privato del veicolo, solo per le finalita dichiarate.",
        en: 'Configure the system: no tracking during private use of the vehicle, only for the stated purposes.',
        de: 'Konfigurieren Sie das System: keine Ortung waehrend der privaten Nutzung des Fahrzeugs, nur fuer die angegebenen Zwecke.',
        fr: "Configurez le systeme: pas de suivi pendant l'usage prive du vehicule, uniquement pour les finalites declarees.",
        es: 'Configure el sistema: sin rastreo durante el uso privado del vehiculo, solo para las finalidades declaradas.',
        nl: 'Configureer het systeem: geen tracking tijdens privegebruik van het voertuig, uitsluitend voor de aangegeven doeleinden.',
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
      ente: 'CPDP',
      portale: FONTE_CPDP_SITO.url,
      urlFonte: FONTE_CPDP_SITO.url,
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
      es: 'hasta 20 millones de euros o el 4% del volumen de negocio (RGPD)',
      nl: 'tot 20 miljoen euro of 4% van de omzet (AVG)',
    },
    casoCitato: {
      it: 'Non risulta una multa del CPDP specifica e pubblicata per il GPS sui dipendenti. In un parere del 24 novembre 2023 il CPDP ha ritenuto inammissibile il riuso delle registrazioni di videosorveglianza per valutare il rendimento dei dipendenti di LUKOIL Bulgaria (riuso incompatibile, art. 6 par. 4 GDPR), senza multa. Il rischio sanzionatorio resta quello generale del GDPR (art. 83).',
      en: 'There is no specific, published CPDP fine for GPS on employees. In an opinion of 24 November 2023, the CPDP held that the reuse of video surveillance recordings to assess the performance of LUKOIL Bulgaria employees was inadmissible (incompatible reuse, art. 6 para. 4 GDPR), without a fine. The sanction risk remains the general one under the GDPR (art. 83).',
      de: 'Es gibt keine spezifische, veroeffentlichte Geldbusse der CPDP fuer GPS bei Beschaeftigten. In einer Stellungnahme vom 24. November 2023 hielt die CPDP die Weiterverwendung von Videoueberwachungsaufzeichnungen zur Bewertung der Leistung von Beschaeftigten von LUKOIL Bulgarien fuer unzulaessig (unvereinbare Weiterverwendung, Art. 6 Abs. 4 DSGVO), ohne Geldbusse. Das Sanktionsrisiko bleibt das allgemeine der DSGVO (Art. 83).',
      fr: "Il n'existe pas d'amende specifique et publiee de la CPDP pour le GPS sur les salaries. Dans un avis du 24 novembre 2023, la CPDP a estime inadmissible la reutilisation des enregistrements de videosurveillance pour evaluer le rendement des salaries de LUKOIL Bulgarie (reutilisation incompatible, art. 6 par. 4 RGPD), sans amende. Le risque de sanction reste celui, general, du RGPD (art. 83).",
      es: 'No consta una multa especifica y publicada del CPDP por el GPS sobre los empleados. En un dictamen del 24 de noviembre de 2023, el CPDP consideró inadmisible la reutilizacion de las grabaciones de videovigilancia para evaluar el rendimiento de los empleados de LUKOIL Bulgaria (reutilizacion incompatible, art. 6 ap. 4 RGPD), sin multa. El riesgo sancionador sigue siendo el general del RGPD (art. 83).',
      nl: 'Er is geen specifieke, gepubliceerde boete van de CPDP voor gps bij werknemers. In een advies van 24 november 2023 achtte de CPDP het hergebruik van cameratoezichtopnamen om de prestaties van werknemers van LUKOIL Bulgarije te beoordelen ontoelaatbaar (onverenigbaar hergebruik, art. 6 lid 4 AVG), zonder boete. Het sanctierisico blijft het algemene risico van de AVG (art. 83).',
    },
    urlFonte: FONTE_CPDP_LUKOIL.url,
  },

  fonti: [
    FONTE_ZZLD_25ZH,
    FONTE_CPDP_GUIDA,
    FONTE_CPDP_DPIA,
    FONTE_CPDP_LUKOIL,
    FONTE_CPDP_SITO,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
