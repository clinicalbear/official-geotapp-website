/**
 * Scheda-paese Albania per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Legge 124/2024 sulla protezione dei dati personali (in vigore dal 1 febbraio
 * 2025, ha abrogato la legge 9887/2008), linea guida IDP n. 03 del 30 aprile 2025
 * sulla videosorveglianza, pagina ufficiale dell'IDP, sanzione IDP a EuroCom CX e
 * GDPR come riferimento comparativo.
 *
 * L'Albania NON e' uno Stato membro UE: e' un paese candidato, fuori dall'UE, con
 * una legge nazionale propria allineata al GDPR (la Legge 124/2024), distinta dal
 * Regolamento. Unica autorita' nazionale, l'IDP, senza ripartizione regionale.
 * Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_LEGGE_124_2024 = {
  titolo:
    'Legge 124/2024 sulla protezione dei dati personali (in vigore dal 1 febbraio 2025)',
  url: 'https://idp.al/wp-content/uploads/2025/03/Law-no.124-2024.pdf',
};
const FONTE_IDP_LINEA_GUIDA = {
  titolo: 'IDP, linea guida n. 03 del 30.04.2025 sulla videosorveglianza',
  url: 'https://idp.al/wp-content/uploads/2025/09/Guideline-No.03-30.04.2025-Video-Surveillance.pdf.pdf',
};
const FONTE_IDP_UFFICIALE = {
  titolo: 'IDP (Garante albanese), pagina ufficiale',
  url: 'https://idp.al/en/',
};
const FONTE_IDP_EUROCOM = {
  titolo:
    'IDP, sanzione EuroCom CX (videosorveglianza dei dipendenti)',
  url: 'https://www.dataguidance.com/news/albania-idp-fines-eurocom-all-460000-unlawful-video',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) - riferimento comparativo',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const albania: SchedaPaese = {
  codiceISO: 'AL',
  slugCanonico: 'albania',
  nome: 'Albania',
  nomi: {
    it: 'Albania',
    en: 'Albania',
    'en-us': 'Albania',
    'en-gb': 'Albania',
    'en-au': 'Albania',
    'en-ie': 'Albania',
    'en-ca': 'Albania',
    de: 'Albanien',
    nl: 'Albanië',
    fr: 'Albanie',
    es: 'Albania',
    pt: 'Albânia',
    da: 'Albanien',
    sv: 'Albanien',
    nb: 'Albania',
    ru: 'Албания',
  },
  bandiera: '🇦🇱',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'IDP (Komisioneri per te Drejten e Informimit dhe Mbrojtjen e te Dhenave Personale)',
    portale: FONTE_IDP_UFFICIALE.url,
    urlFonte: FONTE_IDP_UFFICIALE.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "L'Albania e' un paese candidato, fuori dall'UE, con una legge propria allineata al GDPR (Legge 124/2024). Unica autorita' nazionale, l'IDP; nessuna ripartizione regionale.",
      en: 'Albania is a candidate country, outside the EU, with its own national law aligned with the GDPR (Law 124/2024). A single national authority, the IDP; no regional breakdown.',
      de: 'Albanien ist ein Beitrittskandidat ausserhalb der EU mit einem eigenen, an die DSGVO angeglichenen nationalen Gesetz (Gesetz 124/2024). Eine einzige nationale Behoerde, die IDP; keine regionale Aufteilung.',
      fr: "L'Albanie est un pays candidat, hors de l'UE, dote de sa propre loi nationale alignee sur le RGPD (loi 124/2024). Une seule autorite nationale, l'IDP ; aucune repartition regionale.",
      es: 'Albania es un pais candidato, fuera de la UE, con una ley nacional propia alineada con el RGPD (Ley 124/2024). Una unica autoridad nacional, la IDP; sin reparto regional.',
      nl: 'Albanie is een kandidaat-lidstaat, buiten de EU, met een eigen nationale wet die is afgestemd op de AVG (Wet 124/2024). Een enkele nationale autoriteit, de IDP; geen regionale opdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione preventiva ai lavoratori e base giuridica (Legge 124/2024, art. 13)',
        en: 'Prior information to workers and legal basis (Law 124/2024, art. 13)',
        de: 'Vorherige Information der Beschaeftigten und Rechtsgrundlage (Gesetz 124/2024, Art. 13)',
        fr: 'Information prealable des travailleurs et base legale (loi 124/2024, art. 13)',
        es: 'Informacion previa a los trabajadores y base juridica (Ley 124/2024, art. 13)',
        nl: 'Voorafgaande informatie aan werknemers en rechtsgrondslag (Wet 124/2024, art. 13)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il lavoratore va informato prima della raccolta dei dati su finalita' e base giuridica; serve una delle basi dell'art. 7 (in pratica l'interesse legittimo).",
        en: 'The worker must be informed of the purposes and legal basis before data is collected; one of the bases under art. 7 is required (in practice, legitimate interest).',
        de: 'Die beschaeftigte Person ist vor der Datenerhebung ueber Zwecke und Rechtsgrundlage zu informieren; erforderlich ist eine der Grundlagen nach Art. 7 (in der Praxis das berechtigte Interesse).',
        fr: "Le travailleur doit etre informe des finalites et de la base legale avant la collecte des donnees ; l'une des bases de l'art. 7 est requise (en pratique, l'interet legitime).",
        es: 'Se debe informar al trabajador sobre las finalidades y la base juridica antes de recoger los datos; se necesita una de las bases del art. 7 (en la practica, el interes legitimo).',
        nl: 'De werknemer moet voor de gegevensverzameling worden geinformeerd over de doeleinden en de rechtsgrondslag; een van de grondslagen uit art. 7 is vereist (in de praktijk het gerechtvaardigd belang).',
      },
      fonte: FONTE_LEGGE_124_2024,
    },
    {
      voce: {
        it: "Notifica o autorizzazione preventiva di un'autorita' prima di installare",
        en: 'Prior notification to or authorisation by an authority before installation',
        de: 'Vorherige Meldung an eine Behoerde oder deren Genehmigung vor der Installation',
        fr: "Notification prealable a une autorite ou autorisation de celle-ci avant l'installation",
        es: 'Notificacion previa a una autoridad o autorizacion de esta antes de instalar',
        nl: 'Voorafgaande melding aan of toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "La vecchia notifica/registrazione all'IDP e' stata abolita con la Legge 124/2024; il titolare tiene un registro interno dei trattamenti.",
        en: 'The old notification/registration with the IDP was abolished by Law 124/2024; the controller keeps an internal record of processing activities.',
        de: 'Die fruehere Meldung/Registrierung bei der IDP wurde mit dem Gesetz 124/2024 abgeschafft; der Verantwortliche fuehrt ein internes Verzeichnis der Verarbeitungstaetigkeiten.',
        fr: "L'ancienne notification/enregistrement aupres de l'IDP a ete abolie par la loi 124/2024 ; le responsable du traitement tient un registre interne des traitements.",
        es: 'La antigua notificacion/registro ante la IDP se suprimio con la Ley 124/2024; el responsable mantiene un registro interno de las actividades de tratamiento.',
        nl: 'De oude melding/registratie bij de IDP is afgeschaft met Wet 124/2024; de verwerkingsverantwoordelijke houdt een intern register van de verwerkingsactiviteiten bij.',
      },
      fonte: FONTE_LEGGE_124_2024,
    },
    {
      voce: {
        it: 'Base = interesse legittimo, non il consenso',
        en: 'Basis = legitimate interest, not consent',
        de: 'Grundlage = berechtigtes Interesse, nicht die Einwilligung',
        fr: "Base = interet legitime, non le consentement",
        es: 'Base = interes legitimo, no el consentimiento',
        nl: 'Grondslag = gerechtvaardigd belang, niet de toestemming',
      },
      risposta: 'si',
      dettaglio: {
        it: "La base usuale e' l'interesse legittimo (art. 7), non il consenso, che nel rapporto di lavoro difficilmente e' libero.",
        en: 'The usual basis is legitimate interest (art. 7), not consent, which in the employment relationship can hardly be freely given.',
        de: 'Die uebliche Grundlage ist das berechtigte Interesse (Art. 7), nicht die Einwilligung, die im Arbeitsverhaeltnis kaum freiwillig sein kann.',
        fr: "La base habituelle est l'interet legitime (art. 7), et non le consentement, qui dans la relation de travail peut difficilement etre libre.",
        es: 'La base habitual es el interes legitimo (art. 7), no el consentimiento, que en la relacion laboral dificilmente es libre.',
        nl: 'De gebruikelijke grondslag is het gerechtvaardigd belang (art. 7), niet de toestemming, die in de arbeidsverhouding nauwelijks vrij kan zijn.',
      },
      fonte: FONTE_LEGGE_124_2024,
    },
    {
      voce: {
        it: 'Mezzo meno intrusivo, finalita specifica e conservazione minima (linea guida IDP)',
        en: 'Least intrusive means, specific purpose and minimal retention (IDP guideline)',
        de: 'Am wenigsten eingreifendes Mittel, spezifischer Zweck und minimale Speicherung (IDP-Leitlinie)',
        fr: 'Moyen le moins intrusif, finalite specifique et conservation minimale (ligne directrice IDP)',
        es: 'Medio menos intrusivo, finalidad especifica y conservacion minima (directriz IDP)',
        nl: 'Minst ingrijpende middel, specifiek doel en minimale bewaring (IDP-richtsnoer)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per l'IDP la sorveglianza deve usare il mezzo meno intrusivo, essere giustificata da un bisogno specifico e con conservazione il piu' breve possibile; va informato chi e' sorvegliato.",
        en: 'For the IDP, surveillance must use the least intrusive means, be justified by a specific need and with retention as short as possible; the person under surveillance must be informed.',
        de: 'Nach Auffassung der IDP muss die Ueberwachung das am wenigsten eingreifende Mittel verwenden, durch einen konkreten Bedarf gerechtfertigt und so kurz wie moeglich gespeichert sein; die ueberwachte Person ist zu informieren.',
        fr: "Pour l'IDP, la surveillance doit recourir au moyen le moins intrusif, etre justifiee par un besoin specifique et avec une conservation aussi breve que possible ; la personne surveillee doit etre informee.",
        es: 'Para la IDP, la vigilancia debe usar el medio menos intrusivo, estar justificada por una necesidad especifica y con una conservacion lo mas breve posible; debe informarse a la persona vigilada.',
        nl: 'Volgens de IDP moet het toezicht het minst ingrijpende middel gebruiken, gerechtvaardigd zijn door een specifieke behoefte en zo kort mogelijk worden bewaard; de bewaakte persoon moet worden geinformeerd.',
      },
      fonte: FONTE_IDP_LINEA_GUIDA,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio sistematico su larga scala (art. 31)",
        en: 'Impact assessment (DPIA) for systematic large-scale monitoring (art. 31)',
        de: 'Folgenabschaetzung (DSFA) bei systematischer Ueberwachung in grossem Umfang (Art. 31)',
        fr: 'Analyse d\'impact (AIPD) pour la surveillance systematique a grande echelle (art. 31)',
        es: 'Evaluacion de impacto (EIPD) para la monitorizacion sistematica a gran escala (art. 31)',
        nl: 'Effectbeoordeling (DPIA) voor systematische grootschalige monitoring (art. 31)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Serve una valutazione d'impatto quando il trattamento e' suscettibile di comportare un rischio elevato, incluso il monitoraggio sistematico su larga scala.",
        en: 'An impact assessment is required where the processing is likely to entail a high risk, including systematic large-scale monitoring.',
        de: 'Eine Folgenabschaetzung ist erforderlich, wenn die Verarbeitung voraussichtlich ein hohes Risiko mit sich bringt, einschliesslich systematischer Ueberwachung in grossem Umfang.',
        fr: "Une analyse d'impact est requise lorsque le traitement est susceptible d'entrainer un risque eleve, y compris la surveillance systematique a grande echelle.",
        es: 'Se necesita una evaluacion de impacto cuando el tratamiento pueda entranar un riesgo elevado, incluida la monitorizacion sistematica a gran escala.',
        nl: 'Een effectbeoordeling is vereist wanneer de verwerking waarschijnlijk een hoog risico met zich meebrengt, met inbegrip van systematische grootschalige monitoring.',
      },
      fonte: FONTE_LEGGE_124_2024,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: "Individua una base giuridica valida (interesse legittimo, art. 7) e tieni il registro interno dei trattamenti.",
        en: 'Identify a valid legal basis (legitimate interest, art. 7) and keep the internal record of processing activities.',
        de: 'Bestimmen Sie eine gueltige Rechtsgrundlage (berechtigtes Interesse, Art. 7) und fuehren Sie das interne Verarbeitungsverzeichnis.',
        fr: "Determinez une base legale valable (interet legitime, art. 7) et tenez le registre interne des traitements.",
        es: 'Determine una base juridica valida (interes legitimo, art. 7) y mantenga el registro interno de los tratamientos.',
        nl: 'Bepaal een geldige rechtsgrondslag (gerechtvaardigd belang, art. 7) en houd het interne verwerkingsregister bij.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Informa i lavoratori prima della raccolta dei dati (art. 13).',
        en: 'Inform workers before collecting data (art. 13).',
        de: 'Informieren Sie die Beschaeftigten vor der Datenerhebung (Art. 13).',
        fr: 'Informez les travailleurs avant la collecte des donnees (art. 13).',
        es: 'Informe a los trabajadores antes de recoger los datos (art. 13).',
        nl: 'Informeer de werknemers voordat u gegevens verzamelt (art. 13).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Verifica il mezzo meno intrusivo e una finalita' specifica.",
        en: 'Check for the least intrusive means and a specific purpose.',
        de: 'Pruefen Sie das am wenigsten eingreifende Mittel und einen spezifischen Zweck.',
        fr: 'Verifiez le moyen le moins intrusif et une finalite specifique.',
        es: 'Compruebe el medio menos intrusivo y una finalidad especifica.',
        nl: 'Controleer het minst ingrijpende middel en een specifiek doel.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio sistematico; consulta l'IDP se il rischio residuo resta elevato.",
        en: 'Carry out the impact assessment (DPIA) for systematic monitoring; consult the IDP if the residual risk remains high.',
        de: 'Fuehren Sie die Folgenabschaetzung (DSFA) bei systematischer Ueberwachung durch; konsultieren Sie die IDP, wenn das Restrisiko hoch bleibt.',
        fr: "Realisez l'analyse d'impact (AIPD) pour la surveillance systematique ; consultez l'IDP si le risque residuel reste eleve.",
        es: 'Realice la evaluacion de impacto (EIPD) para la monitorizacion sistematica; consulte a la IDP si el riesgo residual sigue siendo elevado.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor systematische monitoring; raadpleeg de IDP als het restrisico hoog blijft.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema con minimizzazione e conservazione minima.',
        en: 'Configure the system with data minimisation and minimal retention.',
        de: 'Konfigurieren Sie das System mit Datenminimierung und minimaler Speicherung.',
        fr: 'Configurez le systeme avec minimisation des donnees et conservation minimale.',
        es: 'Configure el sistema con minimizacion de datos y conservacion minima.',
        nl: 'Configureer het systeem met gegevensminimalisatie en minimale bewaring.',
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
      ente: 'IDP',
      portale: FONTE_IDP_UFFICIALE.url,
      urlFonte: FONTE_IDP_UFFICIALE.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '460.000 ALL (circa 4.400 €)',
      en: '460,000 ALL (about EUR 4,400)',
      de: '460.000 ALL (rund 4.400 EUR)',
      fr: '460 000 ALL (environ 4 400 EUR)',
      es: '460.000 ALL (unos 4.400 EUR)',
      nl: '460.000 ALL (ongeveer 4.400 EUR)',
    },
    casoCitato: {
      it: "IDP, decisione 49/1 dell'8 gennaio 2024: sanzione a EuroCom CX per aver monitorato i dipendenti tramite videosorveglianza installata negli uffici a loro insaputa, in violazione dell'obbligo di informazione. Non e' un caso di GPS, ed e' stato deciso sotto la legge precedente (9887/2008), poi abrogata dalla Legge 124/2024.",
      en: 'IDP, decision 49/1 of 8 January 2024: a fine against EuroCom CX for monitoring employees through video surveillance installed in the offices without their knowledge, in breach of the duty to inform. It is not a GPS case, and it was decided under the previous law (9887/2008), later repealed by Law 124/2024.',
      de: 'IDP, Entscheidung 49/1 vom 8. Januar 2024: Geldbusse gegen EuroCom CX, weil Beschaeftigte ohne ihr Wissen durch in den Bueros installierte Videoueberwachung ueberwacht wurden, unter Verstoss gegen die Informationspflicht. Es handelt sich nicht um einen GPS-Fall, und er wurde nach dem fruheren Gesetz (9887/2008) entschieden, das spaeter durch das Gesetz 124/2024 aufgehoben wurde.',
      fr: "IDP, decision 49/1 du 8 janvier 2024 : sanction a l'encontre d'EuroCom CX pour avoir surveille ses salaries au moyen d'une videosurveillance installee dans les bureaux a leur insu, en violation de l'obligation d'information. Il ne s'agit pas d'un cas de GPS, et la decision a ete prise sous l'ancienne loi (9887/2008), abrogee par la suite par la loi 124/2024.",
      es: 'IDP, decision 49/1 de 8 de enero de 2024: sancion a EuroCom CX por vigilar a los empleados mediante videovigilancia instalada en las oficinas sin su conocimiento, en infraccion del deber de informacion. No es un caso de GPS, y se resolvio bajo la ley anterior (9887/2008), despues derogada por la Ley 124/2024.',
      nl: 'IDP, besluit 49/1 van 8 januari 2024: boete tegen EuroCom CX wegens het volgen van werknemers via cameratoezicht dat zonder hun medeweten in de kantoren was geinstalleerd, in strijd met de informatieplicht. Het is geen GPS-zaak, en de beslissing werd genomen onder de vorige wet (9887/2008), die later is ingetrokken door Wet 124/2024.',
    },
    urlFonte: FONTE_IDP_EUROCOM.url,
  },

  fonti: [
    FONTE_LEGGE_124_2024,
    FONTE_IDP_LINEA_GUIDA,
    FONTE_IDP_UFFICIALE,
    FONTE_IDP_EUROCOM,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
