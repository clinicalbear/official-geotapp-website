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
    ente: 'IDP (Komisioneri për të Drejtën e Informimit dhe Mbrojtjen e të Dhënave Personale)',
    portale: FONTE_IDP_UFFICIALE.url,
    urlFonte: FONTE_IDP_UFFICIALE.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "L'Albania è un paese candidato, fuori dall'UE, con una legge propria allineata al GDPR (Legge 124/2024). Unica autorità nazionale, l'IDP; nessuna ripartizione regionale.",
      en: 'Albania is a candidate country, outside the EU, with its own national law aligned with the GDPR (Law 124/2024). A single national authority, the IDP; no regional breakdown.',
      de: 'Albanien ist ein Beitrittskandidat außerhalb der EU mit einem eigenen, an die DSGVO angeglichenen nationalen Gesetz (Gesetz 124/2024). Eine einzige nationale Behörde, die IDP; keine regionale Aufteilung.',
      fr: "L'Albanie est un pays candidat, hors de l'UE, dote de sa propre loi nationale alignée sur le RGPD (loi 124/2024). Une seule autorité nationale, l'IDP ; aucune répartition régionale.",
      es: 'Albania es un país candidato, fuera de la UE, con una ley nacional propia alineada con el RGPD (Ley 124/2024). Una única autoridad nacional, la IDP; sin reparto regional.',
      nl: 'Albanie is een kandidaat-lidstaat, buiten de EU, met een eigen nationale wet die is afgestemd op de AVG (Wet 124/2024). Een enkele nationale autoriteit, de IDP; geen regionale opdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione preventiva ai lavoratori e base giuridica (Legge 124/2024, art. 13)',
        en: 'Prior information to workers and legal basis (Law 124/2024, art. 13)',
        de: 'Vorherige Information der Beschäftigten und Rechtsgrundlage (Gesetz 124/2024, Art. 13)',
        fr: 'Information préalable des travailleurs et base légale (loi 124/2024, art. 13)',
        es: 'Información previa a los trabajadores y base jurídica (Ley 124/2024, art. 13)',
        nl: 'Voorafgaande informatie aan werknemers en rechtsgrondslag (Wet 124/2024, art. 13)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il lavoratore va informato prima della raccolta dei dati su finalità e base giuridica; serve una delle basi dell'art. 7 (in pratica l'interesse legittimo).",
        en: 'The worker must be informed of the purposes and legal basis before data is collected; one of the bases under art. 7 is required (in practice, legitimate interest).',
        de: 'Die beschäftigte Person ist vor der Datenerhebung über Zwecke und Rechtsgrundlage zu informieren; erforderlich ist eine der Grundlagen nach Art. 7 (in der Praxis das berechtigte Interesse).',
        fr: "Le travailleur doit être informe des finalités et de la base légale avant la collecte des données ; l'une des bases de l'art. 7 est requise (en pratique, l'intérêt légitime).",
        es: 'Se debe informar al trabajador sobre las finalidades y la base jurídica antes de recoger los datos; se necesita una de las bases del art. 7 (en la práctica, el interés legítimo).',
        nl: 'De werknemer moet voor de gegevensverzameling worden geinformeerd over de doeleinden en de rechtsgrondslag; een van de grondslagen uit art. 7 is vereist (in de praktijk het gerechtvaardigd belang).',
      },
      fonte: FONTE_LEGGE_124_2024,
    },
    {
      voce: {
        it: "Notifica o autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior notification to or authorisation by an authority before installation',
        de: 'Vorherige Meldung an eine Behörde oder deren Genehmigung vor der Installation',
        fr: "Notification préalable a une autorité ou autorisation de celle-ci avant l'installation",
        es: 'Notificación previa a una autoridad o autorización de esta antes de instalar',
        nl: 'Voorafgaande melding aan of toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "La vecchia notifica/registrazione all'IDP è stata abolita con la Legge 124/2024; il titolare tiene un registro interno dei trattamenti.",
        en: 'The old notification/registration with the IDP was abolished by Law 124/2024; the controller keeps an internal record of processing activities.',
        de: 'Die frühere Meldung/Registrierung bei der IDP wurde mit dem Gesetz 124/2024 abgeschafft; der Verantwortliche führt ein internes Verzeichnis der Verarbeitungstätigkeiten.',
        fr: "L'ancienne notification/enregistrement auprès de l'IDP a été abolie par la loi 124/2024 ; le responsable du traitement tient un registre interne des traitements.",
        es: 'La antigua notificación/registro ante la IDP se suprimió con la Ley 124/2024; el responsable mantiene un registro interno de las actividades de tratamiento.',
        nl: 'De oude melding/registratie bij de IDP is afgeschaft met Wet 124/2024; de verwerkingsverantwoordelijke houdt een intern register van de verwerkingsactiviteiten bij.',
      },
      fonte: FONTE_LEGGE_124_2024,
    },
    {
      voce: {
        it: 'Base = interesse legittimo, non il consenso',
        en: 'Basis = legitimate interest, not consent',
        de: 'Grundlage = berechtigtes Interesse, nicht die Einwilligung',
        fr: "Base = intérêt légitime, non le consentement",
        es: 'Base = interés legítimo, no el consentimiento',
        nl: 'Grondslag = gerechtvaardigd belang, niet de toestemming',
      },
      risposta: 'si',
      dettaglio: {
        it: "La base usuale è l'interesse legittimo (art. 7), non il consenso, che nel rapporto di lavoro difficilmente è libero.",
        en: 'The usual basis is legitimate interest (art. 7), not consent, which in the employment relationship can hardly be freely given.',
        de: 'Die übliche Grundlage ist das berechtigte Interesse (Art. 7), nicht die Einwilligung, die im Arbeitsverhältnis kaum freiwillig sein kann.',
        fr: "La base habituelle est l'intérêt légitime (art. 7), et non le consentement, qui dans la relation de travail peut difficilement être libre.",
        es: 'La base habitual es el interés legítimo (art. 7), no el consentimiento, que en la relación laboral difícilmente es libre.',
        nl: 'De gebruikelijke grondslag is het gerechtvaardigd belang (art. 7), niet de toestemming, die in de arbeidsverhouding nauwelijks vrij kan zijn.',
      },
      fonte: FONTE_LEGGE_124_2024,
    },
    {
      voce: {
        it: 'Mezzo meno intrusivo, finalità specifica e conservazione minima (linea guida IDP)',
        en: 'Least intrusive means, specific purpose and minimal retention (IDP guideline)',
        de: 'Am wenigsten eingreifendes Mittel, spezifischer Zweck und minimale Speicherung (IDP-Leitlinie)',
        fr: 'Moyen le moins intrusif, finalité spécifique et conservation minimale (ligne directrice IDP)',
        es: 'Medio menos intrusivo, finalidad especifica y conservación mínima (directriz IDP)',
        nl: 'Minst ingrijpende middel, specifiek doel en minimale bewaring (IDP-richtsnoer)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per l'IDP la sorveglianza deve usare il mezzo meno intrusivo, essere giustificata da un bisogno specifico e con conservazione il più breve possibile; va informato chi è sorvegliato.",
        en: 'For the IDP, surveillance must use the least intrusive means, be justified by a specific need and with retention as short as possible; the person under surveillance must be informed.',
        de: 'Nach Auffassung der IDP muss die Überwachung das am wenigsten eingreifende Mittel verwenden, durch einen konkreten Bedarf gerechtfertigt und so kurz wie möglich gespeichert sein; die überwachte Person ist zu informieren.',
        fr: "Pour l'IDP, la surveillance doit recourir au moyen le moins intrusif, être justifiée par un besoin spécifique et avec une conservation aussi brève que possible ; la personne surveillée doit être informée.",
        es: 'Para la IDP, la vigilancia debe usar el medio menos intrusivo, estar justificada por una necesidad especifica y con una conservación lo mas breve posible; debe informarse a la persona vigilada.',
        nl: 'Volgens de IDP moet het toezicht het minst ingrijpende middel gebruiken, gerechtvaardigd zijn door een specifieke behoefte en zo kort mogelijk worden bewaard; de bewaakte persoon moet worden geinformeerd.',
      },
      fonte: FONTE_IDP_LINEA_GUIDA,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio sistematico su larga scala (art. 31)",
        en: 'Impact assessment (DPIA) for systematic large-scale monitoring (art. 31)',
        de: 'Folgenabschätzung (DSFA) bei systematischer Überwachung in großem Umfang (Art. 31)',
        fr: 'Analyse d\'impact (AIPD) pour la surveillance systématique a grande échelle (art. 31)',
        es: 'Evaluación de impacto (EIPD) para la monitorización sistemática a gran escala (art. 31)',
        nl: 'Effectbeoordeling (DPIA) voor systematische grootschalige monitoring (art. 31)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Serve una valutazione d'impatto quando il trattamento è suscettibile di comportare un rischio elevato, incluso il monitoraggio sistematico su larga scala.",
        en: 'An impact assessment is required where the processing is likely to entail a high risk, including systematic large-scale monitoring.',
        de: 'Eine Folgenabschätzung ist erforderlich, wenn die Verarbeitung voraussichtlich ein hohes Risiko mit sich bringt, einschließlich systematischer Überwachung in großem Umfang.',
        fr: "Une analyse d'impact est requise lorsque le traitement est susceptible d'entrainer un risque élevé, y compris la surveillance systématique a grande échelle.",
        es: 'Se necesita una evaluación de impacto cuando el tratamiento pueda entrañar un riesgo elevado, incluida la monitorización sistemática a gran escala.',
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
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage (berechtigtes Interesse, Art. 7) und führen Sie das interne Verarbeitungsverzeichnis.',
        fr: "Déterminez une base légale valable (intérêt légitime, art. 7) et tenez le registre interne des traitements.",
        es: 'Determine una base jurídica valida (interés legítimo, art. 7) y mantenga el registro interno de los tratamientos.',
        nl: 'Bepaal een geldige rechtsgrondslag (gerechtvaardigd belang, art. 7) en houd het interne verwerkingsregister bij.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Informa i lavoratori prima della raccolta dei dati (art. 13).',
        en: 'Inform workers before collecting data (art. 13).',
        de: 'Informieren Sie die Beschäftigten vor der Datenerhebung (Art. 13).',
        fr: 'Informez les travailleurs avant la collecte des données (art. 13).',
        es: 'Informe a los trabajadores antes de recoger los datos (art. 13).',
        nl: 'Informeer de werknemers voordat u gegevens verzamelt (art. 13).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Verifica il mezzo meno intrusivo e una finalità specifica.",
        en: 'Check for the least intrusive means and a specific purpose.',
        de: 'Prüfen Sie das am wenigsten eingreifende Mittel und einen spezifischen Zweck.',
        fr: 'Vérifiez le moyen le moins intrusif et une finalité spécifique.',
        es: 'Compruebe el medio menos intrusivo y una finalidad especifica.',
        nl: 'Controleer het minst ingrijpende middel en een specifiek doel.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio sistematico; consulta l'IDP se il rischio residuo resta elevato.",
        en: 'Carry out the impact assessment (DPIA) for systematic monitoring; consult the IDP if the residual risk remains high.',
        de: 'Führen Sie die Folgenabschätzung (DSFA) bei systematischer Überwachung durch; konsultieren Sie die IDP, wenn das Restrisiko hoch bleibt.',
        fr: "Réalisez l'analyse d'impact (AIPD) pour la surveillance systématique ; consultez l'IDP si le risque résiduel reste eleve.",
        es: 'Realice la evaluación de impacto (EIPD) para la monitorización sistemática; consulte a la IDP si el riesgo residual sigue siendo elevado.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor systematische monitoring; raadpleeg de IDP als het restrisico hoog blijft.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema con minimizzazione e conservazione minima.',
        en: 'Configure the system with data minimisation and minimal retention.',
        de: 'Konfigurieren Sie das System mit Datenminimierung und minimaler Speicherung.',
        fr: 'Configurez le système avec minimisation des données et conservation minimale.',
        es: 'Configure el sistema con minimización de datos y conservación mínima.',
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
      it: "IDP, decisione 49/1 dell'8 gennaio 2024: sanzione a EuroCom CX per aver monitorato i dipendenti tramite videosorveglianza installata negli uffici a loro insaputa, in violazione dell'obbligo di informazione. Non è un caso di GPS, ed è stato deciso sotto la legge precedente (9887/2008), poi abrogata dalla Legge 124/2024.",
      en: 'IDP, decision 49/1 of 8 January 2024: a fine against EuroCom CX for monitoring employees through video surveillance installed in the offices without their knowledge, in breach of the duty to inform. It is not a GPS case, and it was decided under the previous law (9887/2008), later repealed by Law 124/2024.',
      de: 'IDP, Entscheidung 49/1 vom 8. Januar 2024: Geldbusse gegen EuroCom CX, weil Beschäftigte ohne ihr Wissen durch in den Büros installierte Videoüberwachung überwacht wurden, unter Verstoß gegen die Informationspflicht. Es handelt sich nicht um einen GPS-Fall, und er wurde nach dem früheren Gesetz (9887/2008) entschieden, das später durch das Gesetz 124/2024 aufgehoben wurde.',
      fr: "IDP, décision 49/1 du 8 janvier 2024 : sanction a l'encontre d'EuroCom CX pour avoir surveille ses salaries au moyen d'une vidéosurveillance installée dans les bureaux a leur insu, en violation de l'obligation d'information. Il ne s'agit pas d'un cas de GPS, et la décision a été prise sous l'ancienne loi (9887/2008), abrogée par la suite par la loi 124/2024.",
      es: 'IDP, decisión 49/1 de 8 de enero de 2024: sanción a EuroCom CX por vigilar a los empleados mediante videovigilancia instalada en las oficinas sin su conocimiento, en infracción del deber de información. No es un caso de GPS, y se resolvió bajo la ley anterior (9887/2008), después derogada por la Ley 124/2024.',
      nl: 'IDP, besluit 49/1 van 8 januari 2024: boete tegen EuroCom CX wegens het volgen van werknemers via cameratoezicht dat zonder hun medeweten in de kantoren was geinstalleerd, in strijd met de informatieplicht. Het is geen GPS-zaak, en de beslissing werd genomen onder de vorige wet (9887/2008), die later is ingetrokken door Wet 124/2024.',
    },
    urlFonte: FONTE_IDP_EUROCOM.url,
    tipoImporto: 'caso-affine',
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
