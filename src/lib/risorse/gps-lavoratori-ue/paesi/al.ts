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

import type { SchedaPaese , Fonte} from '../types';

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
      it: "L'Albania è un Paese candidato, fuori dall'UE, con una legge propria allineata al GDPR (Legge 124/2024). Unica autorità nazionale, l'IDP; nessuna ripartizione regionale.",
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
        it: "Finalità specifica, minimizzazione e conservazione limitata (Legge 124/2024, art. 6)",
        en: "Specific purpose, data minimisation and limited retention (Law 124/2024, art. 6)",
        de: "Konkreter Zweck, Datenminimierung und begrenzte Speicherung (Gesetz 124/2024, Art. 6)",
        fr: "Finalité précise, minimisation des données et conservation limitée (loi 124/2024, art. 6)",
        es: "Finalidad concreta, minimización de datos y conservación limitada (Ley 124/2024, art. 6)",
        nl: "Specifiek doel, minimale gegevensverwerking en beperkte bewaring (Wet 124/2024, art. 6)",
      },
      risposta: 'si',
      dettaglio: {
        it: "I principi dell'art. 6 valgono anche per il GPS sui lavoratori: finalità determinata e legittima, dati adeguati e limitati a quanto necessario, conservazione non oltre il tempo necessario. La linea guida IDP n. 03/2025 riguarda la videosorveglianza, non il GPS: applica gli stessi principi con il criterio del mezzo meno intrusivo e della conservazione più breve possibile, e va letta solo come indicazione di metodo.",
        en: "The principles of art. 6 also apply to GPS on workers: a specified and legitimate purpose, data adequate and limited to what is necessary, retention no longer than necessary. IDP guideline no. 03/2025 covers video surveillance, not GPS: it applies the same principles with the least-intrusive-means test and the shortest possible retention, and should be read only as a pointer on method.",
        de: "Die Grundsätze des Art. 6 gelten auch für GPS bei Beschäftigten: festgelegter und legitimer Zweck, angemessene und auf das Notwendige beschränkte Daten, Speicherung nicht länger als nötig. Die IDP-Leitlinie Nr. 03/2025 betrifft die Videoüberwachung, nicht GPS: sie wendet dieselben Grundsätze mit dem Maßstab des am wenigsten eingreifenden Mittels und der kürzestmöglichen Speicherung an und ist nur als methodischer Hinweis zu lesen.",
        fr: "Les principes de l'art. 6 valent aussi pour le GPS sur les travailleurs : finalité déterminée et légitime, données adéquates et limitées à ce qui est nécessaire, conservation pas plus longue que nécessaire. La ligne directrice IDP n° 03/2025 porte sur la vidéosurveillance, pas sur le GPS : elle applique les mêmes principes avec le critère du moyen le moins intrusif et de la conservation la plus courte possible, et ne se lit que comme une indication de méthode.",
        es: "Los principios del art. 6 valen también para el GPS sobre los trabajadores: finalidad determinada y legítima, datos adecuados y limitados a lo necesario, conservación no superior a la necesaria. La directriz IDP n.º 03/2025 se refiere a la videovigilancia, no al GPS: aplica los mismos principios con el criterio del medio menos intrusivo y de la conservación más breve posible, y solo debe leerse como una indicación de método.",
        nl: "De beginselen van art. 6 gelden ook voor GPS bij werknemers: een bepaald en legitiem doel, gegevens die passend zijn en beperkt tot wat nodig is, bewaring niet langer dan nodig. Richtsnoer nr. 03/2025 van de IDP gaat over camerabewaking, niet over GPS: het past dezelfde beginselen toe met de toets van het minst ingrijpende middel en de kortst mogelijke bewaring, en is alleen als methodische aanwijzing te lezen.",
      },
      fonte: FONTE_LEGGE_124_2024,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA), obbligatoria dal 17 gennaio 2027 (art. 31)",
        en: "Impact assessment (DPIA), mandatory from 17 January 2027 (art. 31)",
        de: "Folgenabschätzung (DSFA), verpflichtend ab dem 17. Januar 2027 (Art. 31)",
        fr: "Analyse d'impact (AIPD), obligatoire à partir du 17 janvier 2027 (art. 31)",
        es: "Evaluación de impacto (EIPD), obligatoria a partir del 17 de enero de 2027 (art. 31)",
        nl: "Effectbeoordeling (DPIA), verplicht vanaf 17 januari 2027 (art. 31)",
      },
      risposta: 'dipende',
      dettaglio: {
        it: "L'art. 31 della Legge 124/2024 prevede la valutazione d'impatto quando il trattamento è suscettibile di comportare un rischio elevato, ma entra in vigore due anni dopo la pubblicazione in Gazzetta (17 gennaio 2025), cioè il 17 gennaio 2027 (art. 101, c. 2). Fino ad allora non è ancora un obbligo di legge: conviene farla già ora per il GPS sui lavoratori. L'elenco dei trattamenti che la richiedono lo stabilisce l'IDP (art. 31, c. 7); la legge (art. 31, c. 6) nomina tre casi: la valutazione sistematica e approfondita di aspetti personali basata su trattamento automatizzato, compresa la profilazione; il trattamento su larga scala di dati sensibili; la sorveglianza sistematica su larga scala di zone accessibili al pubblico. Un GPS che assegna punteggi al comportamento di guida può rientrare nel primo.",
        en: "Art. 31 of Law 124/2024 requires an impact assessment where processing is likely to result in a high risk, but it enters into force two years after publication in the Official Gazette (17 January 2025), i.e. on 17 January 2027 (art. 101(2)). Until then it is not yet a legal obligation: it is advisable to carry it out now for GPS on workers. The list of processing that requires one is set by the IDP (art. 31(7)); the law (art. 31(6)) names three cases: a systematic and extensive evaluation of personal aspects based on automated processing, including profiling; large-scale processing of sensitive data; large-scale systematic monitoring of publicly accessible areas. GPS that scores driving behaviour can fall under the first.",
        de: "Art. 31 des Gesetzes 124/2024 verlangt eine Folgenabschätzung, wenn die Verarbeitung voraussichtlich ein hohes Risiko mit sich bringt, tritt aber zwei Jahre nach der Veröffentlichung im Gesetzblatt (17. Januar 2025) in Kraft, also am 17. Januar 2027 (Art. 101 Abs. 2). Bis dahin ist sie noch keine gesetzliche Pflicht: Für GPS bei Beschäftigten empfiehlt es sich, sie schon jetzt durchzuführen. Die Liste der Verarbeitungen, die eine erfordern, legt die IDP fest (Art. 31 Abs. 7); das Gesetz (Art. 31 Abs. 6) nennt drei Fälle: die systematische und umfassende Bewertung persönlicher Aspekte auf Grundlage automatisierter Verarbeitung einschließlich Profiling; die umfangreiche Verarbeitung sensibler Daten; die systematische umfangreiche Überwachung öffentlich zugänglicher Bereiche. Ein GPS, das das Fahrverhalten bewertet, kann unter den ersten Fall fallen.",
        fr: "L'art. 31 de la loi 124/2024 prévoit l'analyse d'impact lorsque le traitement est susceptible d'entraîner un risque élevé, mais il entre en vigueur deux ans après la publication au Journal officiel (17 janvier 2025), soit le 17 janvier 2027 (art. 101, al. 2). Jusque-là, ce n'est pas encore une obligation légale : il est conseillé de la réaliser dès maintenant pour le GPS sur les travailleurs. La liste des traitements qui l'exigent est fixée par l'IDP (art. 31, al. 7) ; la loi (art. 31, al. 6) cite trois cas : l'évaluation systématique et approfondie d'aspects personnels fondée sur un traitement automatisé, y compris le profilage ; le traitement à grande échelle de données sensibles ; la surveillance systématique à grande échelle d'une zone accessible au public. Un GPS qui note le comportement de conduite peut relever du premier.",
        es: "El art. 31 de la Ley 124/2024 prevé la evaluación de impacto cuando el tratamiento pueda entrañar un riesgo elevado, pero entra en vigor dos años después de su publicación en el Boletín Oficial (17 de enero de 2025), es decir, el 17 de enero de 2027 (art. 101, ap. 2). Hasta entonces todavía no es una obligación legal: conviene hacerla ya para el GPS sobre los trabajadores. La lista de tratamientos que la exigen la fija la IDP (art. 31, ap. 7); la ley (art. 31, ap. 6) cita tres casos: la evaluación sistemática y exhaustiva de aspectos personales basada en un tratamiento automatizado, incluida la elaboración de perfiles; el tratamiento a gran escala de datos sensibles; la vigilancia sistemática a gran escala de una zona de acceso público. Un GPS que puntúa la conducción puede entrar en el primero.",
        nl: "Art. 31 van Wet 124/2024 schrijft een effectbeoordeling voor wanneer de verwerking waarschijnlijk een hoog risico meebrengt, maar treedt twee jaar na publicatie in het Staatsblad (17 januari 2025) in werking, dus op 17 januari 2027 (art. 101, lid 2). Tot die tijd is het nog geen wettelijke plicht: het is raadzaam haar nu al uit te voeren voor GPS bij werknemers. De lijst van verwerkingen waarvoor ze nodig is, stelt de IDP vast (art. 31, lid 7); de wet (art. 31, lid 6) noemt drie gevallen: een systematische en uitgebreide beoordeling van persoonlijke aspecten op basis van geautomatiseerde verwerking, waaronder profilering; grootschalige verwerking van gevoelige gegevens; stelselmatige grootschalige monitoring van openbaar toegankelijke ruimten. GPS dat rijgedrag scoort, kan onder het eerste vallen.",
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
        it: "Prepara la valutazione d'impatto (DPIA) per il GPS sui lavoratori: l'obbligo dell'art. 31 si applica dal 17 gennaio 2027 (art. 101 c. 2), se il trattamento presenta un rischio elevato, ma conviene farla già ora.",
        en: 'Prepare the impact assessment (DPIA) for GPS on workers: the art. 31 obligation applies from 17 January 2027 (art. 101(2)) where the processing is likely to result in a high risk, but it is advisable to do it now.',
        de: 'Bereiten Sie die Folgenabschätzung (DSFA) für GPS bei Beschäftigten vor: die Pflicht aus Art. 31 gilt ab dem 17. Januar 2027 (Art. 101 Abs. 2), wenn die Verarbeitung voraussichtlich ein hohes Risiko birgt; es empfiehlt sich aber, sie schon jetzt durchzuführen.',
        fr: "Préparez l'analyse d'impact (AIPD) pour le GPS sur les travailleurs : l'obligation de l'art. 31 s'applique à partir du 17 janvier 2027 (art. 101 al. 2) si le traitement présente un risque élevé, mais il est conseillé de la réaliser dès maintenant.",
        es: 'Prepare la evaluación de impacto (EIPD) para el GPS sobre los trabajadores: la obligación del art. 31 se aplica desde el 17 de enero de 2027 (art. 101, ap. 2) si el tratamiento entraña un riesgo elevado, pero conviene hacerla ya.',
        nl: 'Bereid de effectbeoordeling (DPIA) voor GPS bij werknemers voor: de plicht van art. 31 geldt vanaf 17 januari 2027 (art. 101, lid 2) als de verwerking waarschijnlijk een hoog risico meebrengt, maar het is raadzaam haar nu al uit te voeren.',
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
      ente: 'IDP',
      portale: FONTE_IDP_UFFICIALE.url,
      urlFonte: FONTE_IDP_UFFICIALE.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '2 miliardi di ALL (oltre 20 milioni di €) o il 4% del fatturato mondiale annuo',
      en: 'ALL 2 billion (over EUR 20 million) or 4% of total annual worldwide turnover',
      de: '2 Milliarden ALL (über 20 Millionen EUR) oder 4% des weltweiten Jahresumsatzes',
      fr: '2 milliards ALL (plus de 20 millions EUR) ou 4% du chiffre d affaires mondial annuel',
      es: '2.000 millones de ALL (más de 20 millones de EUR) o el 4% de la facturación mundial anual',
      nl: '2 miljard ALL (meer dan 20 miljoen EUR) of 4% van de wereldwijde jaaromzet',
    },
    casoCitato: {
      it: 'Massimale di legge, non una multa inflitta. Legge 124/2024, che per le violazioni più gravi prevede fino a 2.000.000.000 di lek oppure, per le società commerciali, il 4% del fatturato mondiale annuo dell\'esercizio precedente, se superiore. Un secondo scaglione si ferma a 1 miliardo di lek o al 2%. Non risulta pubblicata dall\'IDP una sanzione specifica sul GPS applicato ai dipendenti.',
      en: 'Statutory ceiling, not a fine that was imposed. Law 124/2024 provides, for the most serious breaches, up to ALL 2,000,000,000 or, for commercial companies, 4% of total annual worldwide turnover of the preceding financial year, whichever is higher. A second tier stops at ALL 1 billion or 2%. No specific IDP fine on GPS applied to employees is published.',
      de: 'Gesetzlicher Höchstbetrag, keine verhängte Geldbuße. Das Gesetz 124/2024 sieht für die schwersten Verstöße bis zu 2.000.000.000 ALL oder, bei Handelsgesellschaften, 4% des weltweiten Jahresumsatzes des Vorjahres vor, je nachdem, welcher Betrag höher ist. Eine zweite Stufe endet bei 1 Milliarde ALL oder 2%. Eine spezifische Geldbuße der IDP zu GPS bei Beschäftigten ist nicht veröffentlicht.',
      fr: 'Plafond legal, et non une amende infligee. La loi 124/2024 prevoit, pour les manquements les plus graves, jusqu a 2 000 000 000 ALL ou, pour les societes commerciales, 4% du chiffre d affaires mondial annuel de l exercice precedent, le montant le plus eleve etant retenu. Un second palier s arrete a 1 milliard ALL ou 2%. Aucune amende specifique de l IDP sur le GPS applique aux salaries n est publiee.',
      es: 'Tope legal, no una multa impuesta. La Ley 124/2024 prevé, para las infracciones mas graves, hasta 2.000.000.000 de ALL o, para las sociedades mercantiles, el 4% de la facturación mundial anual del ejercicio anterior, la cantidad que sea mayor. Un segundo tramo se detiene en 1.000 millones de ALL o el 2%. No consta publicada una sanción especifica de la IDP sobre el GPS aplicado a los empleados.',
      nl: 'Wettelijk maximum, geen opgelegde boete. Wet 124/2024 voorziet voor de zwaarste inbreuken in ten hoogste ALL 2.000.000.000 of, voor handelsvennootschappen, 4% van de wereldwijde jaaromzet van het voorgaande boekjaar, als dat hoger is. Een tweede trap stopt bij ALL 1 miljard of 2%. Een specifieke boete van de IDP over GPS bij werknemers is niet gepubliceerd.',
    },
    urlFonte: 'https://idp.al/wp-content/uploads/2025/03/Law-no.124-2024.pdf',
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_LEGGE_124_2024,
    FONTE_IDP_LINEA_GUIDA,
    FONTE_IDP_UFFICIALE,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
