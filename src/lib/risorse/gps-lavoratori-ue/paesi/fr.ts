/**
 * Scheda-paese Francia per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. L2312-38 e art. L1222-4 del Code du travail, guida CNIL sulla
 * geolocalizzazione dei veicoli dei dipendenti, lista CNIL dei trattamenti che
 * richiedono un'AIPD, abolizione delle dichiarazioni preventive alla CNIL dal
 * 25 maggio 2018, sanzioni CNIL 2025 in procedura semplificata, sanzione CNIL
 * UBEEQO (175.000 €) e GDPR.
 *
 * La Francia non e' uno Stato federale: c'e' un'unica autorita' nazionale, la
 * CNIL, senza ripartizione regionale. Nessun numero, URL o autorita' e'
 * inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_L2312_38 = {
  titolo: 'Code du travail, art. L2312-38 (consultazione del CSE sui mezzi di controllo)',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000035610275/',
};
const FONTE_L1222_4 = {
  titolo: 'Code du travail, art. L1222-4 (nessuna raccolta da dispositivo non portato a conoscenza)',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006900861',
};
const FONTE_CNIL_GEOLOCALIZZAZIONE = {
  titolo: 'CNIL, guida sulla geolocalizzazione dei veicoli dei dipendenti',
  url: 'https://www.cnil.fr/fr/la-geolocalisation-des-vehicules-des-salaries',
};
const FONTE_CNIL_AIPD = {
  titolo: "CNIL, lista dei trattamenti che richiedono una valutazione d'impatto (AIPD)",
  url: 'https://www.cnil.fr/sites/default/files/atoms/files/liste-traitements-avec-aipd-requise-v2.pdf',
};
const FONTE_CNIL_ABOLIZIONE_FORMALITA = {
  titolo: 'CNIL, abolizione delle dichiarazioni preventive dal 25 maggio 2018',
  url: 'https://www.cnil.fr/fr/cnil-direct/question/reglement-europeen-faut-il-encore-effectuer-des-declarations-la-cnil',
};
const FONTE_CNIL_SANZIONI_2025 = {
  titolo: 'CNIL, dieci nuove sanzioni (procedura semplificata, 2025)',
  url: 'https://www.cnil.fr/fr/la-cnil-prononce-dix-nouvelles-sanctions-dans-le-cadre-de-sa-procedure-simplifiee',
};
const FONTE_EDPB_UBEEQO = {
  titolo: 'EDPB, la CNIL sanziona UBEEQO International (175.000 €, 7 luglio 2022)',
  url: 'https://edpb.europa.eu/news/national-news/2022/geolocalisation-data-french-sa-fines-ubeeqo-international-eu175-000_en',
};
const FONTE_CNIL_RECLAMO = {
  titolo: 'CNIL, presentare un reclamo',
  url: 'https://www.cnil.fr/fr/plaintes',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const francia: SchedaPaese = {
  codiceISO: 'FR',
  slugCanonico: 'francia',
  nome: 'Francia',
  nomi: {
    it: 'Francia',
    en: 'France',
    'en-us': 'France',
    'en-gb': 'France',
    'en-au': 'France',
    'en-ie': 'France',
    'en-ca': 'France',
    de: 'Frankreich',
    nl: 'Frankrijk',
    fr: 'France',
    es: 'Francia',
    pt: 'França',
    da: 'Frankrig',
    sv: 'Frankrike',
    nb: 'Frankrike',
    ru: 'Франция',
  },
  bandiera: '🇫🇷',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: "CNIL (Commission Nationale de l'Informatique et des Libertes)",
    urlFonte: FONTE_CNIL_GEOLOCALIZZAZIONE.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Francia ha un'unica autorità nazionale, la CNIL; nessuna ripartizione regionale.",
      en: 'France has a single national authority, the CNIL; there is no regional split.',
      de: 'Frankreich hat eine einzige nationale Behörde, die CNIL; es gibt keine regionale Aufteilung.',
      fr: 'La France a une seule autorité nationale, la CNIL; il n y a pas de répartition régionale.',
      es: 'Francia tiene una única autoridad nacional, la CNIL; no hay reparto regional.',
      nl: 'Frankrijk heeft een enkele nationale autoriteit, de CNIL; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Consultazione del CSE prima di installare il sistema di controllo (art. L2312-38)',
        en: 'Consultation of the CSE before installing the monitoring system (art. L2312-38)',
        de: 'Anhörung des CSE vor der Installation des Kontrollsystems (Art. L2312-38)',
        fr: 'Consultation du CSE avant l installation du système de contrôle (art. L2312-38)',
        es: 'Consulta al CSE antes de instalar el sistema de control (art. L2312-38)',
        nl: 'Raadpleging van de CSE voor de installatie van het controlesysteem (art. L2312-38)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "Prima di decidere di installare un mezzo di controllo dell'attività dei dipendenti, il datore deve informare e consultare il CSE (Comitato Sociale ed Economico). Vale pero solo dove un CSE esiste: e obbligatorio dagli 11 dipendenti in su. Sotto quella soglia non c'e CSE da consultare, ma resta l'obbligo di informare individualmente ogni dipendente (art. L1222-4).",
        en: "Before deciding to install a means of monitoring employees' activity, the employer must inform and consult the CSE (Social and Economic Committee). This applies only where a CSE exists: it is mandatory from 11 employees upwards. Below that threshold there is no CSE to consult, but the obligation to inform each employee individually remains (art. L1222-4).",
        de: 'Bevor der Arbeitgeber beschließt, ein Mittel zur Kontrolle der Tätigkeit der Beschäftigten zu installieren, muss er den CSE (Sozial- und Wirtschaftsausschuss) informieren und anhören. Dies gilt jedoch nur dort, wo ein CSE besteht: Er ist ab 11 Beschäftigten verpflichtend. Unterhalb dieser Schwelle gibt es keinen CSE zur Anhörung, aber die Pflicht, jeden Beschäftigten einzeln zu informieren, bleibt bestehen (Art. L1222-4).',
        fr: "Avant de décider d installer un moyen de contrôle de l activité des salaries, l employeur doit informer et consulter le CSE (Comite Social et Économique). Cela ne vaut toutefois que la ou un CSE existe: il est obligatoire a partir de 11 salaries. En dessous de ce seuil il n y a pas de CSE a consulter, mais l obligation d informer individuellement chaque salarie demeure (art. L1222-4).",
        es: "Antes de decidir instalar un medio de control de la actividad de los empleados, el empleador debe informar y consultar al CSE (Comité Social y Económico). Esto solo es valido donde existe un CSE: es obligatorio a partir de 11 empleados. Por debajo de ese umbral no hay CSE que consultar, pero se mantiene la obligación de informar individualmente a cada empleado (art. L1222-4).",
        nl: 'Voordat de werkgever besluit een middel voor de controle van de activiteit van de werknemers te installeren, moet hij de CSE (Sociaal en Economisch Comite) informeren en raadplegen. Dit geldt echter alleen waar een CSE bestaat: deze is verplicht vanaf 11 werknemers. Onder die drempel is er geen CSE om te raadplegen, maar de verplichting om elke werknemer individueel te informeren blijft bestaan (art. L1222-4).',
      },
      fonte: FONTE_L2312_38,
    },
    {
      voce: {
        it: "Autorizzazione di un'autorità del lavoro prima di installare",
        en: 'Authorisation from a labour authority before installing',
        de: 'Genehmigung einer Arbeitsbehörde vor der Installation',
        fr: 'Autorisation d une autorité du travail avant l installation',
        es: 'Autorización de una autoridad laboral antes de instalar',
        nl: 'Toestemming van een arbeidsautoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "La Francia non prevede un'autorizzazione preventiva di un'autorità del lavoro, ne più dichiarazioni preventive alla CNIL (abolite dal 25 maggio 2018 col GDPR). Il modello e basato sulla responsabilizzazione: registro dei trattamenti e AIPD quando il rischio e elevato.",
        en: 'France does not require prior authorisation from a labour authority, nor any further prior declarations to the CNIL (abolished on 25 May 2018 with the GDPR). The model is based on accountability: a record of processing activities and a DPIA where the risk is high.',
        de: 'Frankreich sieht keine vorherige Genehmigung einer Arbeitsbehörde vor und auch keine vorherigen Meldungen an die CNIL mehr (seit dem 25. Mai 2018 mit der DSGVO abgeschafft). Das Modell beruht auf Rechenschaftspflicht: Verzeichnis der Verarbeitungstätigkeiten und DSFA, wenn das Risiko hoch ist.',
        fr: "La France ne prévoit pas d autorisation préalable d une autorité du travail, ni de déclarations préalables a la CNIL (supprimées depuis le 25 mai 2018 avec le RGPD). Le modèle repose sur la responsabilisation: registre des traitements et AIPD lorsque le risque est eleve.",
        es: 'Francia no prevé una autorización previa de una autoridad laboral, ni mas declaraciones previas a la CNIL (suprimidas desde el 25 de mayo de 2018 con el RGPD). El modelo se basa en la responsabilidad proactiva: registro de las actividades de tratamiento y EIPD cuando el riesgo es elevado.',
        nl: 'Frankrijk vereist geen voorafgaande toestemming van een arbeidsautoriteit, noch nog voorafgaande aangiften bij de CNIL (sinds 25 mei 2018 met de AVG afgeschaft). Het model berust op verantwoording: een register van verwerkingsactiviteiten en een DPIA wanneer het risico hoog is.',
      },
      fonte: FONTE_CNIL_ABOLIZIONE_FORMALITA,
    },
    {
      voce: {
        it: 'Informazione individuale e preventiva del lavoratore (art. L1222-4 + art. 13 GDPR)',
        en: 'Individual and prior information to the worker (art. L1222-4 + art. 13 GDPR)',
        de: 'Individuelle und vorherige Information des Beschäftigten (Art. L1222-4 + Art. 13 DSGVO)',
        fr: 'Information individuelle et préalable du salarie (art. L1222-4 + art. 13 RGPD)',
        es: 'Información individual y previa al trabajador (art. L1222-4 + art. 13 RGPD)',
        nl: 'Individuele en voorafgaande informatie aan de werknemer (art. L1222-4 + art. 13 AVG)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Nessun dato può essere raccolto da un dispositivo non portato preventivamente a conoscenza del lavoratore; ognuno va informato su titolare, finalità, destinatari e diritti.',
        en: 'No data may be collected from a device not brought to the worker s knowledge in advance; each worker must be informed of the controller, the purposes, the recipients and their rights.',
        de: 'Es dürfen keine Daten von einem Gerät erhoben werden, das dem Beschäftigten nicht vorab zur Kenntnis gebracht wurde; jeder ist über den Verantwortlichen, die Zwecke, die Empfänger und seine Rechte zu informieren.',
        fr: "Aucune donnée ne peut être collectée par un dispositif non porte préalablement a la connaissance du salarie; chacun doit être informe du responsable, des finalités, des destinataires et de ses droits.",
        es: 'No se puede recoger ningún dato mediante un dispositivo que no se haya puesto previamente en conocimiento del trabajador; cada uno debe ser informado del responsable, las finalidades, los destinatarios y sus derechos.',
        nl: 'Er mogen geen gegevens worden verzameld via een apparaat dat niet vooraf ter kennis van de werknemer is gebracht; iedereen moet worden geinformeerd over de verwerkingsverantwoordelijke, de doeleinden, de ontvangers en zijn rechten.',
      },
      fonte: FONTE_L1222_4,
    },
    {
      voce: {
        it: 'Divieto di sorveglianza permanente: geolocalizzazione sussidiaria e disattivabile fuori orario',
        en: 'Ban on permanent surveillance: geolocation must be subsidiary and switchable off outside working hours',
        de: 'Verbot der ständigen Überwachung: Geolokalisierung muss subsidiär und außerhalb der Arbeitszeit abschaltbar sein',
        fr: 'Interdiction de la surveillance permanente: géolocalisation subsidiaire et désactivable hors temps de travail',
        es: 'Prohibición de la vigilancia permanente: geolocalizacion subsidiaria y desactivable fuera del horario',
        nl: 'Verbod op permanente surveillance: geolocatie moet subsidiair en buiten werktijd uitschakelbaar zijn',
      },
      risposta: 'si',
      dettaglio: {
        it: "Per la CNIL la geolocalizzazione non può servire a controllare il dipendente in permanenza, e sussidiaria (vietata se esiste già un mezzo meno intrusivo, es. per calcolare l'orario se esiste già un altro sistema di timbratura) e deve poter essere disattivata fuori dall'orario di lavoro.",
        en: 'For the CNIL, geolocation may not be used to monitor the employee permanently; it is subsidiary (prohibited if a less intrusive means already exists, e.g. to calculate working time where another clock-in system already exists) and must be able to be switched off outside working hours.',
        de: 'Für die CNIL darf die Geolokalisierung nicht dazu dienen, den Beschäftigten dauerhaft zu kontrollieren; sie ist subsidiär (verboten, wenn bereits ein weniger eingriffsintensives Mittel besteht, z. B. zur Berechnung der Arbeitszeit, wenn bereits ein anderes Zeiterfassungssystem besteht) und muss außerhalb der Arbeitszeit abschaltbar sein.',
        fr: "Pour la CNIL, la géolocalisation ne peut servir a contrôler le salarie en permanence; elle est subsidiaire (interdite s il existe déjà un moyen moins intrusif, par ex. pour calculer le temps de travail s il existe déjà un autre système de pointage) et doit pouvoir être desactivee en dehors du temps de travail.",
        es: 'Para la CNIL, la geolocalizacion no puede servir para controlar al empleado de forma permanente; es subsidiaria (prohibida si ya existe un medio menos intrusivo, p. ej. para calcular el horario si ya existe otro sistema de fichaje) y debe poder desactivarse fuera del horario de trabajo.',
        nl: 'Voor de CNIL mag geolocatie niet dienen om de werknemer permanent te controleren; zij is subsidiair (verboden als er al een minder ingrijpend middel bestaat, bijv. om de werktijd te berekenen als er al een ander prikkloksysteem bestaat) en moet buiten werktijd uitgeschakeld kunnen worden.',
      },
      fonte: FONTE_CNIL_GEOLOCALIZZAZIONE,
    },
    {
      voce: {
        it: "Valutazione d'impatto (AIPD) per la sorveglianza costante dell'attività dei dipendenti",
        en: "Data protection impact assessment (DPIA) for constant monitoring of employees' activity",
        de: 'Datenschutz-Folgenabschätzung (DSFA) für die ständige Überwachung der Tätigkeit der Beschäftigten',
        fr: "Analyse d impact (AIPD) pour la surveillance constante de l activité des salaries",
        es: 'Evaluación de impacto (EIPD) para la vigilancia constante de la actividad de los empleados',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) voor de voortdurende controle van de activiteit van werknemers',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista CNIL include tra i trattamenti che richiedono un'AIPD quelli che sorvegliano in modo costante l'attività dei dipendenti e i trattamenti di dati di localizzazione su larga scala.",
        en: "The CNIL list includes, among the processing operations requiring a DPIA, those that constantly monitor employees' activity and large-scale processing of location data.",
        de: 'Die CNIL-Liste zählt zu den Verarbeitungen, die eine DSFA erfordern, jene, die die Tätigkeit der Beschäftigten ständig überwachen, sowie die Verarbeitung von Standortdaten in großem Umfang.',
        fr: "La liste de la CNIL inclut parmi les traitements requierant une AIPD ceux qui surveillent de manière constante l activité des salaries et les traitements de données de localisation a grande échelle.",
        es: 'La lista de la CNIL incluye, entre los tratamientos que requieren una EIPD, los que vigilan de forma constante la actividad de los empleados y los tratamientos de datos de localización a gran escala.',
        nl: 'De CNIL-lijst rekent tot de verwerkingen die een DPIA vereisen die welke de activiteit van werknemers voortdurend bewaken en de grootschalige verwerking van locatiegegevens.',
      },
      fonte: FONTE_CNIL_AIPD,
    },
    {
      voce: {
        it: 'Conservazione limitata dei dati di localizzazione',
        en: 'Limited retention of location data',
        de: 'Begrenzte Speicherung der Standortdaten',
        fr: 'Conservation limitée des données de localisation',
        es: 'Conservación limitada de los datos de localización',
        nl: 'Beperkte bewaring van locatiegegevens',
      },
      risposta: 'si',
      dettaglio: {
        it: 'La CNIL indica in generale una conservazione di circa due mesi, estendibile fino a un anno solo per provare una prestazione svolta.',
        en: 'The CNIL generally indicates a retention of about two months, extendable to up to one year only to prove a service performed.',
        de: 'Die CNIL gibt im Allgemeinen eine Speicherdauer von etwa zwei Monaten an, die nur zum Nachweis einer erbrachten Leistung auf bis zu ein Jahr verlängert werden kann.',
        fr: "La CNIL indique en général une conservation d environ deux mois, extensible jusqu a un an uniquement pour prouver une prestation realisee.",
        es: 'La CNIL indica en general una conservación de unos dos meses, ampliable hasta un ano solo para probar una prestación realizada.',
        nl: 'De CNIL geeft in het algemeen een bewaartermijn van ongeveer twee maanden aan, alleen uit te breiden tot maximaal een jaar om een verrichte prestatie te bewijzen.',
      },
      fonte: FONTE_CNIL_GEOLOCALIZZAZIONE,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: "Se esiste un CSE, informalo e consultalo prima di decidere l'installazione (art. L2312-38).",
        en: 'If a CSE exists, inform and consult it before deciding on the installation (art. L2312-38).',
        de: 'Wenn ein CSE besteht, informieren und konsultieren Sie ihn, bevor Sie über die Installation entscheiden (Art. L2312-38).',
        fr: "Si un CSE existe, informez-le et consultez-le avant de décider l installation (art. L2312-38).",
        es: 'Si existe un CSE, informelo y consúltelo antes de decidir la instalación (art. L2312-38).',
        nl: 'Als er een CSE bestaat, informeer en raadpleeg deze voordat u over de installatie beslist (art. L2312-38).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Informa individualmente e preventivamente ogni lavoratore (art. L1222-4, art. 13 GDPR).',
        en: 'Inform each worker individually and in advance (art. L1222-4, art. 13 GDPR).',
        de: 'Informieren Sie jeden Beschäftigten individuell und im Voraus (Art. L1222-4, Art. 13 DSGVO).',
        fr: 'Informez individuellement et préalablement chaque salarie (art. L1222-4, art. 13 RGPD).',
        es: 'Informe individual y previamente a cada trabajador (art. L1222-4, art. 13 RGPD).',
        nl: 'Informeer elke werknemer individueel en vooraf (art. L1222-4, art. 13 AVG).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Verifica la sussidiarieta: la geolocalizzazione non e ammessa se esiste già un mezzo meno intrusivo per la stessa finalità.',
        en: 'Check subsidiarity: geolocation is not allowed if a less intrusive means already exists for the same purpose.',
        de: 'Prüfen Sie die Subsidiarität: Geolokalisierung ist nicht zulässig, wenn für denselben Zweck bereits ein weniger eingriffsintensives Mittel besteht.',
        fr: "Vérifiez la subsidiarité: la géolocalisation n est pas admise s il existe déjà un moyen moins intrusif pour la même finalité.",
        es: 'Verifique la subsidiariedad: la geolocalizacion no se admite si ya existe un medio menos intrusivo para la misma finalidad.',
        nl: 'Controleer de subsidiariteit: geolocatie is niet toegestaan als er voor hetzelfde doel al een minder ingrijpend middel bestaat.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (AIPD) se il trattamento sorveglia in modo costante o tratta localizzazione su larga scala.",
        en: 'Carry out the impact assessment (DPIA) if the processing monitors constantly or processes location data on a large scale.',
        de: 'Führen Sie die Folgenabschätzung (DSFA) durch, wenn die Verarbeitung ständig überwacht oder Standortdaten in großem Umfang verarbeitet.',
        fr: "Réalisez l analyse d impact (AIPD) si le traitement surveille de manière constante ou traite des données de localisation a grande échelle.",
        es: 'Realice la evaluación de impacto (EIPD) si el tratamiento vigila de forma constante o trata datos de localización a gran escala.',
        nl: 'Voer de effectbeoordeling (DPIA) uit als de verwerking voortdurend controleert of locatiegegevens op grote schaal verwerkt.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema: niente tracciamento permanente, disattivazione fuori orario, conservazione limitata.',
        en: 'Configure the system: no permanent tracking, switch-off outside working hours, limited retention.',
        de: 'Konfigurieren Sie das System: keine ständige Ortung, Abschaltung außerhalb der Arbeitszeit, begrenzte Speicherung.',
        fr: 'Configurez le système: pas de suivi permanent, désactivation hors temps de travail, conservation limitée.',
        es: 'Configure el sistema: sin seguimiento permanente, desactivación fuera del horario, conservación limitada.',
        nl: 'Configureer het systeem: geen permanente tracering, uitschakeling buiten werktijd, beperkte bewaring.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'Tieni aggiornato il registro dei trattamenti (responsabilizzazione, non più dichiarazione preventiva).',
        en: 'Keep the record of processing activities up to date (accountability, no longer a prior declaration).',
        de: 'Halten Sie das Verzeichnis der Verarbeitungstätigkeiten aktuell (Rechenschaftspflicht, keine vorherige Meldung mehr).',
        fr: 'Tenez a jour le registre des traitements (responsabilisation, plus de déclaration préalable).',
        es: 'Mantenga actualizado el registro de las actividades de tratamiento (responsabilidad proactiva, ya no declaración previa).',
        nl: 'Houd het register van verwerkingsactiviteiten actueel (verantwoording, geen voorafgaande aangifte meer).',
      },
    },
    {
      passo: 7,
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
      ente: 'CNIL, presentare un reclamo',
      portale: FONTE_CNIL_RECLAMO.url,
      urlFonte: FONTE_CNIL_RECLAMO.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '175.000 €',
      en: 'EUR 175,000',
      de: '175.000 EUR',
      fr: '175 000 EUR',
      es: '175 000 EUR',
      nl: '175.000 EUR',
    },
    casoCitato: {
      it: "CNIL contro UBEEQO International, 7 luglio 2022: geolocalizzazione quasi permanente in violazione della minimizzazione, della durata di conservazione e dell'obbligo di informazione. Riguardava i veicoli a noleggio (clienti), non i dipendenti in senso stretto, ma e la sanzione faro francese sulla geolocalizzazione continua eccessiva. Nel 2025 la CNIL ha inoltre sanzionato più datori per la geolocalizzazione continua dei veicoli dei dipendenti senza possibilità di sospensione durante le pause.",
      en: 'CNIL v. UBEEQO International, 7 July 2022: near-permanent geolocation in breach of data minimisation, the retention period and the information obligation. It concerned rental vehicles (customers), not employees in the strict sense, but it is the French landmark fine on excessive continuous geolocation. In 2025 the CNIL also fined several employers for the continuous geolocation of employees vehicles without the possibility of suspension during breaks.',
      de: 'CNIL gegen UBEEQO International, 7. Juli 2022: nahezu permanente Geolokalisierung unter Verstoß gegen die Datenminimierung, die Speicherdauer und die Informationspflicht. Es ging um Mietfahrzeuge (Kunden), nicht um Beschäftigte im engeren Sinne, doch es ist das französische Leiturteil zur übermäßigen kontinuierlichen Geolokalisierung. 2025 verhängte die CNIL zudem gegen mehrere Arbeitgeber Bußgelder wegen der kontinuierlichen Geolokalisierung der Fahrzeuge der Beschäftigten ohne Möglichkeit der Aussetzung während der Pausen.',
      fr: "CNIL contre UBEEQO International, 7 juillet 2022: géolocalisation quasi permanente en violation de la minimisation, de la durée de conservation et de l obligation d information. Cela concernait des véhicules de location (clients), non les salaries au sens strict, mais c est la sanction phare française sur la géolocalisation continue excessive. En 2025, la CNIL a en outre sanctionne plusieurs employeurs pour la géolocalisation continue des véhicules des salaries sans possibilité de suspension pendant les pauses.",
      es: 'CNIL contra UBEEQO International, 7 de julio de 2022: geolocalizacion casi permanente en infracción de la minimización, el plazo de conservación y la obligación de información. Afectaba a vehículos de alquiler (clientes), no a los empleados en sentido estricto, pero es la sanción de referencia francesa sobre la geolocalizacion continua excesiva. En 2025 la CNIL sanciono ademas a varios empleadores por la geolocalizacion continua de los vehículos de los empleados sin posibilidad de suspensión durante las pausas.',
      nl: 'CNIL tegen UBEEQO International, 7 juli 2022: bijna permanente geolocatie in strijd met de minimalisering, de bewaartermijn en de informatieplicht. Het betrof huurvoertuigen (klanten), niet de werknemers in strikte zin, maar het is de Franse toonaangevende boete inzake buitensporige continue geolocatie. In 2025 beboette de CNIL bovendien meerdere werkgevers voor de continue geolocatie van de voertuigen van werknemers zonder mogelijkheid tot opschorting tijdens de pauzes.',
    },
    urlFonte: FONTE_EDPB_UBEEQO.url,
    tipoImporto: 'caso-affine',
  },

  fonti: [
    FONTE_L2312_38,
    FONTE_L1222_4,
    FONTE_CNIL_GEOLOCALIZZAZIONE,
    FONTE_CNIL_AIPD,
    FONTE_CNIL_ABOLIZIONE_FORMALITA,
    FONTE_CNIL_SANZIONI_2025,
    FONTE_EDPB_UBEEQO,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
