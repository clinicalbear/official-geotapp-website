/**
 * Scheda-paese Montenegro per la risorsa "GPS sui lavoratori in UE".
 *
 * Il Montenegro NON e' uno Stato membro dell'UE: e' un paese candidato. La legge
 * sulla protezione dei dati personali (ZZPL, 79/08 e successive modifiche fino a
 * 77/24) e' solo PARZIALMENTE allineata al GDPR; una nuova legge pienamente
 * allineata e' ancora una bozza nel 2026.
 *
 * Particolarita' unica rispetto al GDPR: il Montenegro mantiene un'autorizzazione
 * preventiva. L'art. 27 ZZPL richiede il consenso dell'autorita' garante (AZLP)
 * prima di costituire un archivio di dati.
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * testo ufficiale inglese della ZZPL, posizione del Consiglio dell'AZLP sull'uso
 * del GPS nei veicoli di servizio (29.04.2025), contatti e moduli dell'AZLP, GDPR
 * come riferimento comparativo. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_ZZPL = {
  titolo: 'Legge sulla protezione dei dati (ZZPL), testo ufficiale inglese',
  url: 'https://www.azlp.me/docs/zajednicka/zakoni/personaldataprotectionlaweng.pdf',
};
const FONTE_AZLP_GPS = {
  titolo:
    'AZLP, posizione del Consiglio sull\'uso del GPS nei veicoli di servizio (29.04.2025)',
  url: 'https://www.azlp.me/storage/docs/zastita/Stavovi%20Savjeta/Upotreba%20GPS-a%20u%20slu%C5%BEbenim%20vozilima.docx',
};
const FONTE_AZLP_CONTATTI = {
  titolo: 'AZLP (Garante montenegrino), contatti',
  url: 'https://www.azlp.me/en/contact',
};
const FONTE_AZLP_MODULI = {
  titolo: 'AZLP, moduli (richiesta di tutela dei diritti)',
  url: 'https://www.azlp.me/en/forms',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR), riferimento comparativo',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const montenegro: SchedaPaese = {
  codiceISO: 'ME',
  slugCanonico: 'montenegro',
  nome: 'Montenegro',
  nomi: {
    it: 'Montenegro',
    en: 'Montenegro',
    'en-us': 'Montenegro',
    'en-gb': 'Montenegro',
    'en-au': 'Montenegro',
    'en-ie': 'Montenegro',
    'en-ca': 'Montenegro',
    de: 'Montenegro',
    nl: 'Montenegro',
    fr: 'Monténégro',
    es: 'Montenegro',
    pt: 'Montenegro',
    da: 'Montenegro',
    sv: 'Montenegro',
    nb: 'Montenegro',
    ru: 'Черногория',
  },
  bandiera: '🇲🇪',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: 'AZLP (Agenzia per la protezione dei dati personali e il libero accesso all\'informazione)',
    portale: FONTE_AZLP_MODULI.url,
    urlFonte: FONTE_AZLP_CONTATTI.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "Il Montenegro e' un paese candidato, fuori dall'UE, con una legge solo parzialmente allineata al GDPR. Unica autorita' nazionale, l'AZLP. Particolarita': serve il consenso preventivo dell'autorita' prima di costituire l'archivio dati (art. 27).",
      en: 'Montenegro is a candidate country, outside the EU, with a law only partially aligned with the GDPR. There is a single national authority, the AZLP. Distinctive feature: prior authorisation from the authority is required before setting up the data filing system (art. 27).',
      de: 'Montenegro ist ein Beitrittskandidat ausserhalb der EU mit einem Gesetz, das nur teilweise an die DSGVO angeglichen ist. Es gibt eine einzige nationale Behoerde, die AZLP. Besonderheit: Bevor Sie das Datenarchiv anlegen, benoetigen Sie die vorherige Zustimmung der Behoerde (Art. 27).',
      fr: "Le Monténégro est un pays candidat, hors de l'UE, doté d'une loi seulement partiellement alignée sur le RGPD. Il existe une seule autorité nationale, l'AZLP. Particularité : avant de constituer le fichier de données, vous devez obtenir l'autorisation préalable de l'autorité (art. 27).",
      es: 'Montenegro es un país candidato, fuera de la UE, con una ley solo parcialmente alineada con el RGPD. Existe una única autoridad nacional, la AZLP. Particularidad: antes de constituir el archivo de datos se necesita la autorización previa de la autoridad (art. 27).',
      nl: 'Montenegro is een kandidaat-lidstaat buiten de EU, met een wet die slechts gedeeltelijk is afgestemd op de AVG. Er is één nationale autoriteit, de AZLP. Bijzonderheid: voordat u het gegevensbestand aanlegt, is voorafgaande toestemming van de autoriteit vereist (art. 27).',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione scritta e preventiva ai lavoratori e regole interne sul GPS (ZZPL art. 20; posizione AZLP)',
        en: 'Prior written information to workers and internal GPS rules (ZZPL art. 20; AZLP position)',
        de: 'Vorherige schriftliche Information der Beschaeftigten und interne GPS-Regeln (ZZPL Art. 20; AZLP-Position)',
        fr: 'Information écrite et préalable des travailleurs et règles internes sur le GPS (ZZPL art. 20 ; position de l\'AZLP)',
        es: 'Información escrita y previa a los trabajadores y normas internas sobre el GPS (ZZPL art. 20; posición de la AZLP)',
        nl: 'Voorafgaande schriftelijke informatie aan werknemers en interne GPS-regels (ZZPL art. 20; standpunt AZLP)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore deve informare i lavoratori su finalita', metodi, dati raccolti e diritti, e adottare regole interne sul trattamento GPS con una valutazione preliminare delle misure di sicurezza.",
        en: 'The employer must inform workers about the purposes, methods, data collected and rights, and adopt internal rules on GPS processing together with a preliminary assessment of the security measures.',
        de: 'Der Arbeitgeber muss die Beschaeftigten ueber Zwecke, Methoden, erhobene Daten und Rechte informieren und interne Regeln zur GPS-Verarbeitung samt einer vorherigen Bewertung der Sicherheitsmassnahmen erlassen.',
        fr: "L'employeur doit informer les travailleurs sur les finalités, les méthodes, les données collectées et les droits, et adopter des règles internes sur le traitement GPS avec une évaluation préalable des mesures de sécurité.",
        es: 'El empleador debe informar a los trabajadores sobre las finalidades, los métodos, los datos recogidos y los derechos, y adoptar normas internas sobre el tratamiento GPS junto con una evaluación preliminar de las medidas de seguridad.',
        nl: 'De werkgever moet werknemers informeren over de doeleinden, methoden, verzamelde gegevens en rechten, en interne regels over GPS-verwerking vaststellen met een voorafgaande beoordeling van de beveiligingsmaatregelen.',
      },
      fonte: FONTE_AZLP_GPS,
    },
    {
      voce: {
        it: 'Consenso preventivo dell\'autorita\' garante prima di costituire l\'archivio dati (ZZPL art. 27)',
        en: 'Prior authorisation from the supervisory authority before setting up the data filing system (ZZPL art. 27)',
        de: 'Vorherige Zustimmung der Aufsichtsbehoerde vor dem Anlegen des Datenarchivs (ZZPL Art. 27)',
        fr: 'Autorisation préalable de l\'autorité de contrôle avant de constituer le fichier de données (ZZPL art. 27)',
        es: 'Autorización previa de la autoridad de control antes de constituir el archivo de datos (ZZPL art. 27)',
        nl: 'Voorafgaande toestemming van de toezichthoudende autoriteit voordat het gegevensbestand wordt aangelegd (ZZPL art. 27)',
      },
      risposta: 'si',
      dettaglio: {
        it: "A differenza del GDPR, il Montenegro mantiene un'autorizzazione ex ante: prima di costituire un archivio di dati il titolare deve ottenere il consenso dell'autorita' garante (se non risponde in 30 giorni, il consenso si intende dato).",
        en: 'Unlike the GDPR, Montenegro retains an ex ante authorisation: before setting up a data filing system the controller must obtain the consent of the supervisory authority (if it does not reply within 30 days, consent is deemed granted).',
        de: 'Anders als die DSGVO behaelt Montenegro eine vorgelagerte Genehmigung bei: Bevor der Verantwortliche ein Datenarchiv anlegt, muss er die Zustimmung der Aufsichtsbehoerde einholen (antwortet sie nicht innerhalb von 30 Tagen, gilt die Zustimmung als erteilt).',
        fr: "À la différence du RGPD, le Monténégro maintient une autorisation ex ante : avant de constituer un fichier de données, le responsable du traitement doit obtenir l'accord de l'autorité de contrôle (si elle ne répond pas dans les 30 jours, l'accord est réputé donné).",
        es: 'A diferencia del RGPD, Montenegro mantiene una autorización ex ante: antes de constituir un archivo de datos, el responsable debe obtener el consentimiento de la autoridad de control (si no responde en 30 días, el consentimiento se considera otorgado).',
        nl: 'Anders dan de AVG behoudt Montenegro een voorafgaande machtiging: voordat de verwerkingsverantwoordelijke een gegevensbestand aanlegt, moet hij de toestemming van de toezichthoudende autoriteit verkrijgen (antwoordt zij niet binnen 30 dagen, dan wordt de toestemming geacht te zijn verleend).',
      },
      fonte: FONTE_ZZPL,
    },
    {
      voce: {
        it: 'Base = interesse legittimo (art. 10), non il consenso; per i veicoli privati consenso scritto e solo orario',
        en: 'Basis = legitimate interest (art. 10), not consent; for private vehicles written consent and working hours only',
        de: 'Grundlage = berechtigtes Interesse (Art. 10), nicht die Einwilligung; bei Privatfahrzeugen schriftliche Einwilligung und nur waehrend der Arbeitszeit',
        fr: 'Base = intérêt légitime (art. 10), et non le consentement ; pour les véhicules privés, consentement écrit et heures de travail uniquement',
        es: 'Base = interés legítimo (art. 10), no el consentimiento; para los vehículos privados, consentimiento escrito y solo durante el horario laboral',
        nl: 'Grondslag = gerechtvaardigd belang (art. 10), niet toestemming; voor privévoertuigen schriftelijke toestemming en alleen tijdens werktijd',
      },
      risposta: 'si',
      dettaglio: {
        it: "La base e' l'interesse legittimo; per i veicoli privati usati a fini di servizio serve il consenso scritto del lavoratore e il GPS va limitato all'orario di lavoro.",
        en: 'The basis is legitimate interest; for private vehicles used for work purposes the worker\'s written consent is required and the GPS must be limited to working hours.',
        de: 'Die Grundlage ist das berechtigte Interesse; bei Privatfahrzeugen, die fuer dienstliche Zwecke genutzt werden, ist die schriftliche Einwilligung des Beschaeftigten erforderlich und das GPS ist auf die Arbeitszeit zu beschraenken.',
        fr: "La base est l'intérêt légitime ; pour les véhicules privés utilisés à des fins de service, le consentement écrit du travailleur est requis et le GPS doit être limité aux heures de travail.",
        es: 'La base es el interés legítimo; para los vehículos privados utilizados con fines de servicio se necesita el consentimiento escrito del trabajador y el GPS debe limitarse al horario laboral.',
        nl: 'De grondslag is het gerechtvaardigd belang; voor privévoertuigen die voor werkdoeleinden worden gebruikt, is de schriftelijke toestemming van de werknemer vereist en moet de GPS tot de werktijd worden beperkt.',
      },
      fonte: FONTE_AZLP_GPS,
    },
    {
      voce: {
        it: 'Niente decisioni sui dipendenti basate solo su trattamento automatizzato (ZZPL art. 15a)',
        en: 'No decisions about employees based solely on automated processing (ZZPL art. 15a)',
        de: 'Keine Entscheidungen ueber Beschaeftigte allein aufgrund automatisierter Verarbeitung (ZZPL Art. 15a)',
        fr: 'Aucune décision concernant les salariés fondée uniquement sur un traitement automatisé (ZZPL art. 15a)',
        es: 'Ninguna decisión sobre los empleados basada únicamente en un tratamiento automatizado (ZZPL art. 15a)',
        nl: 'Geen besluiten over werknemers die uitsluitend op geautomatiseerde verwerking zijn gebaseerd (ZZPL art. 15a)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Le decisioni su risultati, affidabilità' o comportamento dei dipendenti non possono basarsi unicamente su un trattamento automatizzato; il lavoratore deve poter esprimere la propria posizione.",
        en: 'Decisions about employees\' performance, reliability or conduct cannot be based solely on automated processing; the worker must be able to express their own position.',
        de: 'Entscheidungen ueber Leistung, Zuverlaessigkeit oder Verhalten der Beschaeftigten duerfen nicht allein auf automatisierter Verarbeitung beruhen; der Beschaeftigte muss seinen Standpunkt darlegen koennen.',
        fr: "Les décisions sur les résultats, la fiabilité ou le comportement des salariés ne peuvent reposer uniquement sur un traitement automatisé ; le travailleur doit pouvoir exprimer sa propre position.",
        es: 'Las decisiones sobre el rendimiento, la fiabilidad o el comportamiento de los empleados no pueden basarse únicamente en un tratamiento automatizado; el trabajador debe poder expresar su propia posición.',
        nl: 'Besluiten over de prestaties, betrouwbaarheid of het gedrag van werknemers mogen niet uitsluitend op geautomatiseerde verwerking worden gebaseerd; de werknemer moet zijn eigen standpunt kunnen geven.',
      },
      fonte: FONTE_AZLP_GPS,
    },
    {
      voce: {
        it: 'Valutazione d\'impatto (DPIA) formale',
        en: 'Formal data protection impact assessment (DPIA)',
        de: 'Foermliche Datenschutz-Folgenabschaetzung (DSFA)',
        fr: 'Analyse d\'impact relative à la protection des données (AIPD) formelle',
        es: 'Evaluación de impacto (EIPD) formal',
        nl: 'Formele gegevensbeschermingseffectbeoordeling (DPIA)',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "La legge attuale non prevede una DPIA formale in stile GDPR; il sostituto e' l'autorizzazione preventiva dell'art. 27 più' le misure di sicurezza e la valutazione preliminare di adeguatezza (artt. 24 e 26).",
        en: 'The current law does not provide for a formal GDPR-style DPIA; the substitute is the prior authorisation under art. 27 plus the security measures and the preliminary adequacy assessment (arts. 24 and 26).',
        de: 'Das geltende Gesetz sieht keine foermliche DSFA nach Vorbild der DSGVO vor; an ihre Stelle treten die vorherige Genehmigung nach Art. 27 sowie die Sicherheitsmassnahmen und die vorlaeufige Angemessenheitsbewertung (Art. 24 und 26).',
        fr: "La loi actuelle ne prévoit pas d'AIPD formelle de type RGPD ; elle est remplacée par l'autorisation préalable de l'art. 27 ainsi que par les mesures de sécurité et l'évaluation préalable d'adéquation (art. 24 et 26).",
        es: 'La ley actual no contempla una EIPD formal al estilo del RGPD; el sustituto es la autorización previa del art. 27 más las medidas de seguridad y la evaluación preliminar de adecuación (arts. 24 y 26).',
        nl: 'De huidige wet voorziet niet in een formele DPIA naar AVG-model; in de plaats daarvan komen de voorafgaande machtiging op grond van art. 27 plus de beveiligingsmaatregelen en de voorafgaande toereikendheidsbeoordeling (art. 24 en 26).',
      },
      fonte: FONTE_ZZPL,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: "Definisci finalita' e metodi del GPS e adotta regole interne con valutazione preliminare delle misure di sicurezza.",
        en: 'Define the purposes and methods of the GPS and adopt internal rules with a preliminary assessment of the security measures.',
        de: 'Legen Sie Zwecke und Methoden des GPS fest und erlassen Sie interne Regeln samt einer vorherigen Bewertung der Sicherheitsmassnahmen.',
        fr: 'Définissez les finalités et les méthodes du GPS et adoptez des règles internes avec une évaluation préalable des mesures de sécurité.',
        es: 'Defina las finalidades y los métodos del GPS y adopte normas internas con una evaluación preliminar de las medidas de seguridad.',
        nl: 'Bepaal de doeleinden en methoden van de GPS en stel interne regels vast met een voorafgaande beoordeling van de beveiligingsmaatregelen.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Ottieni il consenso preventivo dell'autorita' garante prima di costituire l'archivio dati (art. 27).",
        en: 'Obtain the prior authorisation of the supervisory authority before setting up the data filing system (art. 27).',
        de: 'Holen Sie vor dem Anlegen des Datenarchivs die vorherige Zustimmung der Aufsichtsbehoerde ein (Art. 27).',
        fr: "Obtenez l'autorisation préalable de l'autorité de contrôle avant de constituer le fichier de données (art. 27).",
        es: 'Obtenga la autorización previa de la autoridad de control antes de constituir el archivo de datos (art. 27).',
        nl: 'Verkrijg de voorafgaande toestemming van de toezichthoudende autoriteit voordat u het gegevensbestand aanlegt (art. 27).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Informa per iscritto i lavoratori; per i veicoli privati raccogli il consenso scritto e limita il GPS all'orario.",
        en: 'Inform workers in writing; for private vehicles collect written consent and limit the GPS to working hours.',
        de: 'Informieren Sie die Beschaeftigten schriftlich; holen Sie bei Privatfahrzeugen die schriftliche Einwilligung ein und beschraenken Sie das GPS auf die Arbeitszeit.',
        fr: 'Informez les travailleurs par écrit ; pour les véhicules privés, recueillez le consentement écrit et limitez le GPS aux heures de travail.',
        es: 'Informe por escrito a los trabajadores; para los vehículos privados, recoja el consentimiento escrito y limite el GPS al horario laboral.',
        nl: 'Informeer de werknemers schriftelijk; verzamel voor privévoertuigen de schriftelijke toestemming en beperk de GPS tot de werktijd.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Non basare decisioni sui dipendenti unicamente su un trattamento automatizzato (art. 15a).',
        en: 'Do not base decisions about employees solely on automated processing (art. 15a).',
        de: 'Stuetzen Sie Entscheidungen ueber Beschaeftigte nicht allein auf automatisierte Verarbeitung (Art. 15a).',
        fr: 'Ne fondez pas les décisions concernant les salariés uniquement sur un traitement automatisé (art. 15a).',
        es: 'No base las decisiones sobre los empleados únicamente en un tratamiento automatizado (art. 15a).',
        nl: 'Baseer besluiten over werknemers niet uitsluitend op geautomatiseerde verwerking (art. 15a).',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Limita il GPS all'orario e alla finalita' dichiarata.",
        en: 'Limit the GPS to working hours and to the declared purpose.',
        de: 'Beschraenken Sie das GPS auf die Arbeitszeit und den angegebenen Zweck.',
        fr: 'Limitez le GPS aux heures de travail et à la finalité déclarée.',
        es: 'Limite el GPS al horario laboral y a la finalidad declarada.',
        nl: 'Beperk de GPS tot de werktijd en tot het verklaarde doel.',
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
      ente: 'AZLP, tutela dei diritti',
      portale: FONTE_AZLP_MODULI.url,
      urlFonte: FONTE_AZLP_MODULI.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino a 20 milioni di euro o 4% del fatturato (rischio generale)',
      en: 'up to 20 million euros or 4% of turnover (general risk)',
      de: 'bis zu 20 Millionen Euro oder 4 % des Umsatzes (allgemeines Risiko)',
      fr: "jusqu'à 20 millions d'euros ou 4 % du chiffre d'affaires (risque général)",
      es: 'hasta 20 millones de euros o el 4 % de la facturación (riesgo general)',
      nl: 'tot 20 miljoen euro of 4% van de omzet (algemeen risico)',
    },
    casoCitato: {
      it: "Non risulta una multa dell'AZLP specifica e pubblicata per il GPS sui dipendenti. La posizione di riferimento e' quella del Consiglio dell'AZLP del 2025: il GPS sui veicoli di servizio e' un controllo legittimo, ma serve definirne finalita' e metodi, informare i lavoratori, adottare regole interne e ottenere il consenso preventivo dell'autorita' per l'archivio dati.",
      en: 'There is no specific, published AZLP fine for GPS tracking of employees. The reference position is that of the AZLP Council of 2025: GPS on service vehicles is legitimate monitoring, but its purposes and methods must be defined, workers must be informed, internal rules must be adopted and the prior authorisation of the authority for the data filing system must be obtained.',
      de: 'Eine spezifische, veroeffentlichte Geldbusse der AZLP fuer die GPS-Ueberwachung von Beschaeftigten ist nicht bekannt. Massgeblich ist die Position des AZLP-Rates von 2025: GPS in Dienstfahrzeugen ist eine legitime Kontrolle, doch muessen Zwecke und Methoden festgelegt, die Beschaeftigten informiert, interne Regeln erlassen und die vorherige Zustimmung der Behoerde fuer das Datenarchiv eingeholt werden.',
      fr: "Il n'existe pas d'amende spécifique et publiée de l'AZLP pour le suivi GPS des salariés. La position de référence est celle du Conseil de l'AZLP de 2025 : le GPS sur les véhicules de service est un contrôle légitime, mais il faut en définir les finalités et les méthodes, informer les travailleurs, adopter des règles internes et obtenir l'autorisation préalable de l'autorité pour le fichier de données.",
      es: 'No consta una multa específica y publicada de la AZLP por el GPS en los empleados. La posición de referencia es la del Consejo de la AZLP de 2025: el GPS en los vehículos de servicio es un control legítimo, pero hay que definir sus finalidades y métodos, informar a los trabajadores, adoptar normas internas y obtener la autorización previa de la autoridad para el archivo de datos.',
      nl: 'Er is geen specifieke, gepubliceerde boete van de AZLP voor GPS-tracking van werknemers. De maatgevende positie is die van de AZLP-Raad uit 2025: GPS in dienstvoertuigen is een legitieme controle, maar de doeleinden en methoden moeten worden vastgelegd, de werknemers moeten worden geïnformeerd, er moeten interne regels worden vastgesteld en de voorafgaande toestemming van de autoriteit voor het gegevensbestand moet worden verkregen.',
    },
    urlFonte: FONTE_AZLP_GPS.url,
  },

  fonti: [
    FONTE_ZZPL,
    FONTE_AZLP_GPS,
    FONTE_AZLP_CONTATTI,
    FONTE_AZLP_MODULI,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
