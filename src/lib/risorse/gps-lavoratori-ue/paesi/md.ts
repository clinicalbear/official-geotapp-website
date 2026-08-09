/**
 * Scheda-paese Moldova per la risorsa "GPS sui lavoratori in UE".
 *
 * Attenzione: la Moldova NON e' uno Stato membro dell'UE, ma un paese candidato.
 * La legge in vigore nel 2026 e' la Legge 133/2011 sulla protezione dei dati
 * personali; una nuova legge allineata al GDPR (Legge 195/2024) entra in vigore
 * solo il 23 agosto 2026. Il quadro descritto qui e' allineato al GDPR ma distinto.
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * Legge 133/2011, guida del CNPDCP sulla videosorveglianza, pagina reclami del
 * CNPDCP, scheda DLA Piper sulla protezione dati in Moldova e GDPR come
 * riferimento comparativo. Unica autorita' nazionale, il CNPDCP; nessuna
 * ripartizione regionale. Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_LEGGE_133 = {
  titolo: 'Legge n. 133/2011 sulla protezione dei dati personali',
  url: 'https://www.legis.md/cautare/getResults?doc_id=128114&lang=ro',
};
const FONTE_CNPDCP_VIDEO = {
  titolo:
    "CNPDCP, guida sull'installazione e gestione della videosorveglianza",
  url: 'https://datepersonale.md/en/data-controller/ncpdp-guidelines/',
};
const FONTE_CNPDCP_RECLAMI = {
  titolo: 'CNPDCP, presentare un reclamo',
  url: 'https://datepersonale.md/about/plingeri-si-petitii/',
};
const FONTE_DLA_PIPER = {
  titolo:
    'DLA Piper, protezione dei dati in Moldova (DPIA, registrazione abolita)',
  url: 'https://www.dlapiperdataprotection.com/?t=law&c=MD',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) - riferimento comparativo',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const moldova: SchedaPaese = {
  codiceISO: 'MD',
  slugCanonico: 'moldova',
  nome: 'Moldova',
  nomi: {
    it: 'Moldova',
    en: 'Moldova',
    'en-us': 'Moldova',
    'en-gb': 'Moldova',
    'en-au': 'Moldova',
    'en-ie': 'Moldova',
    'en-ca': 'Moldova',
    de: 'Moldau',
    nl: 'Moldavië',
    fr: 'Moldavie',
    es: 'Moldavia',
    pt: 'Moldávia',
    da: 'Moldova',
    sv: 'Moldavien',
    nb: 'Moldova',
    ru: 'Молдова',
  },
  bandiera: '🇲🇩',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: {
      it: 'CNPDCP (Centro nazionale per la protezione dei dati personali)',
      en: 'CNPDCP (National Centre for Personal Data Protection)',
      de: 'CNPDCP (Nationales Zentrum für den Schutz personenbezogener Daten)',
      fr: 'CNPDCP (Centre national de protection des données personnelles)',
      es: 'CNPDCP (Centro Nacional de Protección de Datos Personales)',
      nl: 'CNPDCP (Nationaal Centrum voor de Bescherming van Persoonsgegevens)',
      pt: 'CNPDCP (Centro Nacional de Proteção de Dados Pessoais)',
      da: 'CNPDCP (Nationalt Center for Beskyttelse af Personoplysninger)',
      sv: 'CNPDCP (Nationella centret för skydd av personuppgifter)',
      nb: 'CNPDCP (Nasjonalt senter for beskyttelse av personopplysninger)',
      ru: 'CNPDCP (Национальный центр защиты персональных данных)',
    },
    portale: FONTE_CNPDCP_RECLAMI.url,
    urlFonte: FONTE_CNPDCP_RECLAMI.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Moldova è un paese candidato, fuori dall'UE; la legge in vigore è la 133/2011, mentre una nuova legge allineata al GDPR (195/2024) entra in vigore il 23 agosto 2026. Unica autorità nazionale, il CNPDCP; nessuna ripartizione regionale.",
      en: 'Moldova is a candidate country, outside the EU; the law in force is 133/2011, while a new law aligned with the GDPR (195/2024) comes into force on 23 August 2026. There is a single national authority, the CNPDCP; no regional breakdown.',
      de: 'Die Republik Moldau ist ein Kandidatenland außerhalb der EU; das geltende Gesetz ist das Gesetz 133/2011, während ein neues, an die DSGVO angelehntes Gesetz (195/2024) am 23. August 2026 in Kraft tritt. Es gibt nur eine nationale Behörde, das CNPDCP; keine regionale Aufteilung.',
      fr: "La Moldavie est un pays candidat, hors de l'UE; la loi en vigueur est la loi 133/2011, tandis qu'une nouvelle loi alignée sur le RGPD (195/2024) entre en vigueur le 23 aout 2026. Il existe une seule autorité nationale, le CNPDCP; aucune répartition régionale.",
      es: 'Moldavia es un país candidato, fuera de la UE; la ley en vigor es la 133/2011, mientras que una nueva ley alineada con el RGPD (195/2024) entra en vigor el 23 de agosto de 2026. Existe una única autoridad nacional, el CNPDCP; sin reparto regional.',
      nl: 'Moldavië is een kandidaat-lidstaat, buiten de EU; de geldende wet is wet 133/2011, terwijl een nieuwe, op de AVG afgestemde wet (195/2024) op 23 augustus 2026 in werking treedt. Er is één nationale autoriteit, het CNPDCP; geen regionale onderverdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Base giuridica valida e informazione ai lavoratori (Legge 133/2011 + Codice del lavoro art. 91-94)',
        en: 'Valid legal basis and information to workers (Law 133/2011 + Labour Code art. 91-94)',
        de: 'Gültige Rechtsgrundlage und Information der Arbeitnehmer (Gesetz 133/2011 + Arbeitsgesetzbuch Art. 91-94)',
        fr: 'Base juridique valable et information des travailleurs (loi 133/2011 + Code du travail art. 91-94)',
        es: 'Base jurídica valida e información a los trabajadores (Ley 133/2011 + Código del trabajo art. 91-94)',
        nl: 'Geldige rechtsgrondslag en informatie aan werknemers (wet 133/2011 + Arbeidswetboek art. 91-94)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il monitoraggio dei lavoratori (video, internet e per estensione GPS) è disciplinato dalla Legge 133/2011 e dal Codice del lavoro (artt. 91-94); i lavoratori vanno informati su chi accede ai dati e su quali dati si raccolgono.",
        en: 'The monitoring of workers (video, internet and, by extension, GPS) is governed by Law 133/2011 and the Labour Code (art. 91-94); workers must be informed about who accesses the data and what data is collected.',
        de: 'Die Überwachung der Arbeitnehmer (Video, Internet und im weiteren Sinne GPS) ist durch das Gesetz 133/2011 und das Arbeitsgesetzbuch (Art. 91-94) geregelt; die Arbeitnehmer müssen darüber informiert werden, wer auf die Daten zugreift und welche Daten erhoben werden.',
        fr: "La surveillance des travailleurs (vidéo, internet et, par extension, GPS) est régie par la loi 133/2011 et le Code du travail (art. 91-94); les travailleurs doivent être informes de qui accède aux données et de quelles données sont collectées.",
        es: 'La supervisión de los trabajadores (video, internet y, por extensión, GPS) se rige por la Ley 133/2011 y el Código del trabajo (art. 91-94); se debe informar a los trabajadores sobre quien accede a los datos y que datos se recogen.',
        nl: 'De monitoring van werknemers (video, internet en bij uitbreiding GPS) wordt geregeld door wet 133/2011 en het Arbeidswetboek (art. 91-94); werknemers moeten worden geinformeerd over wie toegang heeft tot de gegevens en welke gegevens worden verzameld.',
      },
      fonte: FONTE_LEGGE_133,
    },
    {
      voce: {
        it: "Notifica o registrazione preventiva di un'autorità prima di installare",
        en: 'Prior notification or registration with an authority before installing',
        de: 'Vorherige Meldung oder Registrierung bei einer Behörde vor der Installation',
        fr: "Notification ou enregistrement préalable auprès d'une autorité avant l'installation",
        es: 'Notificación o registro previo ante una autoridad antes de instalar',
        nl: 'Voorafgaande melding of registratie bij een autoriteit voor installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "L'obbligo di notifica/registrazione dei sistemi di dati al CNPDCP è stato abolito dal 10 gennaio 2022 ed è stato sostituito da una valutazione d'impatto a carico del titolare.",
        en: 'The obligation to notify/register data systems with the CNPDCP was abolished on 10 January 2022 and replaced by an impact assessment carried out by the controller.',
        de: 'Die Pflicht zur Meldung/Registrierung von Datensystemen beim CNPDCP wurde zum 10. Januar 2022 abgeschafft und durch eine vom Verantwortlichen durchzuführende Folgenabschätzung ersetzt.',
        fr: "L'obligation de notifier/enregistrer les systèmes de données auprès du CNPDCP a été abolie le 10 janvier 2022 et remplacée par une analyse d'impact realisee par le responsable du traitement.",
        es: 'La obligación de notificar/registrar los sistemas de datos ante el CNPDCP se abolió el 10 de enero de 2022 y se sustituyo por una evaluación de impacto a cargo del responsable del tratamiento.',
        nl: 'De verplichting om gegevenssystemen bij het CNPDCP te melden/registreren is op 10 januari 2022 afgeschaft en vervangen door een effectbeoordeling die door de verwerkingsverantwoordelijke wordt uitgevoerd.',
      },
      fonte: FONTE_DLA_PIPER,
    },
    {
      voce: {
        it: 'Base = consenso o interesse legittimo',
        en: 'Basis = consent or legitimate interest',
        de: 'Grundlage = Einwilligung oder berechtigtes Interesse',
        fr: 'Base = consentement ou intérêt légitime',
        es: 'Base = consentimiento o interés legítimo',
        nl: 'Grondslag = toestemming of gerechtvaardigd belang',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il trattamento si fonda sul consenso o su un'altra base, incluso l'interesse legittimo del titolare (salvo prevalenza dei diritti dell'interessato).",
        en: 'The processing is based on consent or another basis, including the legitimate interest of the controller (unless the rights of the data subject prevail).',
        de: 'Die Verarbeitung stützt sich auf die Einwilligung oder eine andere Grundlage, einschließlich des berechtigten Interesses des Verantwortlichen (sofern nicht die Rechte der betroffenen Person überwiegen).',
        fr: "Le traitement repose sur le consentement ou sur une autre base, y compris l'intérêt légitime du responsable du traitement (sauf si les droits de la personne concernée prévalent).",
        es: 'El tratamiento se basa en el consentimiento o en otra base, incluido el interés legítimo del responsable del tratamiento (salvo que prevalezcan los derechos del interesado).',
        nl: 'De verwerking is gebaseerd op toestemming of een andere grondslag, waaronder het gerechtvaardigd belang van de verwerkingsverantwoordelijke (tenzij de rechten van de betrokkene prevaleren).',
      },
      fonte: FONTE_DLA_PIPER,
    },
    {
      voce: {
        it: 'Minimizzazione e limitazione della finalità; niente tracciamento eccessivo fuori orario',
        en: 'Minimisation and purpose limitation; no excessive tracking outside working hours',
        de: 'Datenminimierung und Zweckbindung; keine übermäßige Ortung außerhalb der Arbeitszeit',
        fr: 'Minimisation et limitation des finalités; pas de suivi excessif en dehors des heures de travail',
        es: 'Minimización y limitación de la finalidad; sin seguimiento excesivo fuera del horario laboral',
        nl: 'Minimalisatie en doelbinding; geen overmatige tracking buiten werktijd',
      },
      risposta: 'si',
      dettaglio: {
        it: "Valgono i principi di minimizzazione e limitazione della finalità; un tracciamento GPS continuo o fuori dall'orario di lavoro è sproporzionato.",
        en: 'The principles of data minimisation and purpose limitation apply; continuous GPS tracking or tracking outside working hours is disproportionate.',
        de: 'Es gelten die Grundsätze der Datenminimierung und der Zweckbindung; eine kontinuierliche GPS-Ortung oder eine Ortung außerhalb der Arbeitszeit ist unverhältnismäßig.',
        fr: "Les principes de minimisation des données et de limitation des finalités s'appliquent; un suivi GPS continu ou en dehors des heures de travail est disproportionné.",
        es: 'Se aplican los principios de minimización de datos y limitación de la finalidad; un seguimiento GPS continuo o fuera del horario laboral es desproporcionado.',
        nl: 'De beginselen van dataminimalisatie en doelbinding zijn van toepassing; continue GPS-tracking of tracking buiten werktijd is onevenredig.',
      },
      fonte: FONTE_CNPDCP_VIDEO,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA)",
        en: 'Impact assessment (DPIA)',
        de: 'Folgenabschätzung (DSFA)',
        fr: "Analyse d'impact (AIPD)",
        es: 'Evaluación de impacto (EIPD)',
        nl: 'Effectbeoordeling (DPIA)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Dal 2022 il titolare deve svolgere una valutazione d'impatto (che ha sostituito la registrazione), descrivendo i trattamenti previsti, la finalità e l'interesse legittimo.",
        en: 'Since 2022 the controller must carry out an impact assessment (which has replaced registration), describing the intended processing, the purpose and the legitimate interest.',
        de: 'Seit 2022 muss der Verantwortliche eine Folgenabschätzung durchführen (die die Registrierung ersetzt hat) und darin die geplanten Verarbeitungen, den Zweck und das berechtigte Interesse beschreiben.',
        fr: "Depuis 2022, le responsable du traitement doit réaliser une analyse d'impact (qui a remplace l'enregistrement), décrivant les traitements prévus, la finalité et l'intérêt légitime.",
        es: 'Desde 2022 el responsable del tratamiento debe realizar una evaluación de impacto (que ha sustituido al registro), describiendo los tratamientos previstos, la finalidad y el interés legítimo.',
        nl: 'Sinds 2022 moet de verwerkingsverantwoordelijke een effectbeoordeling uitvoeren (die de registratie heeft vervangen), waarin de voorgenomen verwerkingen, het doel en het gerechtvaardigd belang worden beschreven.',
      },
      fonte: FONTE_DLA_PIPER,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Individua una base giuridica valida (consenso o interesse legittimo).',
        en: 'Identify a valid legal basis (consent or legitimate interest).',
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage (Einwilligung oder berechtigtes Interesse).',
        fr: 'Identifiez une base juridique valable (consentement ou intérêt légitime).',
        es: 'Identifique una base jurídica valida (consentimiento o interés legítimo).',
        nl: 'Bepaal een geldige rechtsgrondslag (toestemming of gerechtvaardigd belang).',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Informa i lavoratori su quali dati si raccolgono e chi vi accede.',
        en: 'Inform workers about what data is collected and who accesses it.',
        de: 'Informieren Sie die Arbeitnehmer darüber, welche Daten erhoben werden und wer darauf zugreift.',
        fr: 'Informez les travailleurs des données collectées et de qui y accède.',
        es: 'Informe a los trabajadores sobre que datos se recogen y quien accede a ellos.',
        nl: 'Informeer werknemers over welke gegevens worden verzameld en wie er toegang toe heeft.',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) prima di attivare il sistema.",
        en: 'Carry out the impact assessment (DPIA) before activating the system.',
        de: 'Führen Sie die Folgenabschätzung (DSFA) durch, bevor Sie das System aktivieren.',
        fr: "Réalisez l'analyse d'impact (AIPD) avant d'activer le système.",
        es: 'Realice la evaluación de impacto (EIPD) antes de activar el sistema.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voordat u het systeem activeert.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Applica minimizzazione e limitazione della finalità.',
        en: 'Apply data minimisation and purpose limitation.',
        de: 'Wenden Sie Datenminimierung und Zweckbindung an.',
        fr: 'Appliquez la minimisation des données et la limitation des finalités.',
        es: 'Aplique la minimización de datos y la limitación de la finalidad.',
        nl: 'Pas dataminimalisatie en doelbinding toe.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Configura il sistema: niente tracciamento continuo o fuori dall'orario di lavoro.",
        en: 'Configure the system: no continuous tracking or tracking outside working hours.',
        de: 'Konfigurieren Sie das System: keine kontinuierliche Ortung und keine Ortung außerhalb der Arbeitszeit.',
        fr: 'Configurez le système: pas de suivi continu ni de suivi en dehors des heures de travail.',
        es: 'Configure el sistema: sin seguimiento continuo ni seguimiento fuera del horario laboral.',
        nl: 'Configureer het systeem: geen continue tracking of tracking buiten werktijd.',
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
      ente: 'CNPDCP, reclami',
      portale: FONTE_CNPDCP_RECLAMI.url,
      urlFonte: FONTE_CNPDCP_RECLAMI.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: 'fino a 2.000.000 MDL (circa 100.000 euro) o 2% del fatturato con la nuova legge 195/2024, in vigore dal 23 agosto 2026',
      en: 'up to MDL 2,000,000 (about EUR 100,000) or 2% of turnover under the new Law 195/2024, in force from 23 August 2026',
      de: 'bis zu 2.000.000 MDL (rund 100.000 EUR) oder 2% des Umsatzes nach dem neuen Gesetz 195/2024, in Kraft ab 23. August 2026',
      fr: "jusqu'à 2 000 000 MDL (environ 100 000 EUR) ou 2% du chiffre d'affaires avec la nouvelle loi 195/2024, en vigueur au 23 aout 2026",
      es: 'hasta 2.000.000 MDL (unos 100.000 EUR) o el 2% de la facturación con la nueva ley 195/2024, en vigor desde el 23 de agosto de 2026',
      nl: 'tot 2.000.000 MDL (ongeveer 100.000 EUR) of 2% van de omzet onder de nieuwe wet 195/2024, van kracht vanaf 23 augustus 2026',
    },
    casoCitato: {
      it: "Non risulta una decisione del CNPDCP specifica e pubblicata sul GPS sui dipendenti. La legge in vigore (133/2011) prevede sanzioni più contenute. La nuova legge 195/2024, applicabile dal 23 agosto 2026, recepisce il GDPR ma con un proprio impianto sanzionatorio, fino a 1.000.000 MDL o 1% del fatturato per le violazioni meno gravi e fino a 2.000.000 MDL o 2% per quelle più gravi, con applicazione progressiva nei primi anni. Non valgono quindi i massimali europei da 20 milioni di euro.",
      en: 'No specific published CNPDCP decision on employee GPS. The law in force (133/2011) provides for lower penalties. The new Law 195/2024, applicable from 23 August 2026, transposes the GDPR but with its own sanction scheme, up to MDL 1,000,000 or 1% of turnover for less serious breaches and up to MDL 2,000,000 or 2% for the more serious ones, phased in over the first years. The European ceilings of EUR 20 million therefore do not apply.',
      de: 'Es liegt keine spezifische veröffentlichte Entscheidung des CNPDCP zu GPS bei Beschäftigten vor. Das geltende Gesetz (133/2011) sieht geringere Sanktionen vor. Das neue Gesetz 195/2024, anwendbar ab 23. August 2026, setzt die DSGVO um, jedoch mit eigenem Sanktionsrahmen: bis zu 1.000.000 MDL oder 1% des Umsatzes bei leichteren Verstößen und bis zu 2.000.000 MDL oder 2% bei schwereren, mit schrittweiser Anwendung in den ersten Jahren. Die europäischen Obergrenzen von 20 Millionen Euro gelten hier also nicht.',
      fr: "Aucune décision publiée du CNPDCP spécifique au GPS des salaries. La loi en vigueur (133/2011) prévoit des sanctions plus faibles. La nouvelle loi 195/2024, applicable au 23 aout 2026, transpose le RGPD mais avec son propre barème: jusqu'à 1 000 000 MDL ou 1% du chiffre d'affaires pour les manquements les moins graves et jusqu'à 2 000 000 MDL ou 2% pour les plus graves, avec une application progressive les premières années. Les plafonds européens de 20 millions d'euros ne s'appliquent donc pas.",
      es: 'No consta una resolución publicada del CNPDCP especifica sobre el GPS de los empleados. La ley vigente (133/2011) prevé sanciones mas bajas. La nueva ley 195/2024, aplicable desde el 23 de agosto de 2026, transpone el RGPD pero con su propio régimen sancionador: hasta 1.000.000 MDL o el 1% de la facturación para las infracciones menos graves y hasta 2.000.000 MDL o el 2% para las mas graves, con aplicación progresiva en los primeros anos. Los techos europeos de 20 millones de euros no se aplican.',
      nl: 'Er is geen specifiek gepubliceerd CNPDCP-besluit over gps bij werknemers. De geldende wet (133/2011) kent lagere sancties. De nieuwe wet 195/2024, van toepassing vanaf 23 augustus 2026, zet de AVG om maar met een eigen sanctiestelsel: tot 1.000.000 MDL of 1% van de omzet voor lichtere inbreuken en tot 2.000.000 MDL of 2% voor de zwaardere, gefaseerd ingevoerd in de eerste jaren. De Europese plafonds van 20 miljoen euro gelden hier dus niet.',
    },
    urlFonte: FONTE_DLA_PIPER.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_LEGGE_133,
    FONTE_CNPDCP_VIDEO,
    FONTE_CNPDCP_RECLAMI,
    FONTE_DLA_PIPER,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-08-03',
};
