/**
 * Scheda-paese Cipro per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * il monitoraggio Eurofound sulla Legge 125(I)/2018, l'art. 13 GDPR, la pagina
 * ufficiale del Garante cipriota, la sanzione del Garante al Gruppo Louis
 * (strumento Bradford Factor) e il Regolamento UE 2016/679 (GDPR).
 *
 * Cipro non e' uno Stato federale: c'e' un'unica autorita' nazionale, il Garante
 * (Commissioner for Personal Data Protection), senza ripartizione regionale.
 * Nessun numero, URL o autorita' e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_CY_ARCHIVIO = {
  titolo:
    'Commissario cipriota, registro delle attività: abolito l\'obbligo di notifica al Commissario (art. 30 GDPR)',
  url: 'https://www.gov.cy/dataprotection/plirofories-gia-organismoys/archeio-drastiriotiton/',
};
const FONTE_CY_DPIA = {
  titolo:
    "Commissario cipriota, valutazione d'impatto (elenco indicativo: monitoraggio sistematico dei dipendenti, GPS)",
  url: 'https://www.gov.cy/dataprotection/plirofories-gia-organismoys/ektimisi-antiktypoy/',
};
const FONTE_CY_LEGGE_125 = {
  titolo: 'Legge 125(I)/2018 sulla protezione dei dati (art. 36: abrogazione delle leggi 2001-2012)',
  url: 'https://www.cylaw.org/nomoi/enop/non-ind/2018_1_125/full.html',
};
const FONTE_GDPR_13 = {
  titolo: 'GDPR, art. 13 (informazione), testo ufficiale EUR-Lex',
  url: 'https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX%3A32016R0679',
};
const FONTE_GDPR_6 = {
  titolo: 'GDPR, art. 6(1)(f) e considerando 43 (base giuridica e squilibrio fra le parti), testo ufficiale EUR-Lex',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};
const FONTE_GARANTE_CY = {
  titolo: 'Garante cipriota, pagina ufficiale',
  url: 'https://www.gov.cy/dataprotection/',
};
const FONTE_LOUIS = {
  titolo:
    'Commissario cipriota, decisione del 25.10.2019 sul Gruppo Louis (strumento Bradford Factor)',
  url: 'https://www.gov.cy/dataprotection/documents/chrimatiki-poini-stis-etaireies-louis-anaforika-me-vathmologisi-adeion-astheneias-ton-ergodotoymenon-chrisimopoiontas-ton-syntelesti-bradford-12-10-2019/',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const cipro: SchedaPaese = {
  codiceISO: 'CY',
  slugCanonico: 'cipro',
  nome: 'Cipro',
  nomi: {
    it: 'Cipro',
    en: 'Cyprus',
    'en-us': 'Cyprus',
    'en-gb': 'Cyprus',
    'en-au': 'Cyprus',
    'en-ie': 'Cyprus',
    'en-ca': 'Cyprus',
    de: 'Zypern',
    nl: 'Cyprus',
    fr: 'Chypre',
    es: 'Chipre',
    pt: 'Chipre',
    da: 'Cypern',
    sv: 'Cypern',
    nb: 'Kypros',
    ru: 'Кипр',
  },
  bandiera: '🇨🇾',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: {
      it: 'Garante cipriota per la protezione dei dati personali',
      en: 'Cypriot Commissioner for Personal Data Protection',
      de: 'Zyprischer Beauftragter für den Schutz personenbezogener Daten',
      fr: 'Commissaire chypriote à la protection des données personnelles',
      es: 'Comisionado chipriota de Protección de Datos Personales',
      nl: 'Cypriotische commissaris voor de bescherming van persoonsgegevens',
      pt: 'Comissário cipriota para a Proteção de Dados Pessoais',
      da: 'Cypriotisk kommissær for beskyttelse af personoplysninger',
      sv: 'Cypriotiska kommissionären för skydd av personuppgifter',
      nb: 'Kypriotisk kommissær for beskyttelse av personopplysninger',
      ru: 'Кипрский уполномоченный по защите персональных данных',
    },
    portale: FONTE_GARANTE_CY.url,
    urlFonte: FONTE_GARANTE_CY.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "Cipro ha un'unica autorità nazionale, il Garante (Commissioner for Personal Data Protection); nessuna ripartizione regionale.",
      en: 'Cyprus has a single national authority, the Commissioner for Personal Data Protection; there is no regional split.',
      de: 'Zypern hat eine einzige nationale Behörde, den Commissioner for Personal Data Protection; es gibt keine regionale Aufteilung.',
      fr: 'Chypre dispose d’une unique autorité nationale, le Commissioner for Personal Data Protection ; il n’existe aucune répartition régionale.',
      es: 'Chipre cuenta con una única autoridad nacional, el Commissioner for Personal Data Protection; no hay reparto regional alguno.',
      pt: "Chipre tem uma única autoridade nacional, o Comissário (Commissioner for Personal Data Protection); sem repartição regional.",
      da: 'Cypern har kun én national myndighed, kommissæren for beskyttelse af personoplysninger (Commissioner for Personal Data Protection); der er ingen regional opdeling.',
      sv: 'Cypern har en enda nationell myndighet, Commissioner for Personal Data Protection; det finns ingen regional uppdelning.',
      nl: 'Cyprus heeft een enkele nationale autoriteit, de Commissioner for Personal Data Protection; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: "Informazione preventiva ai lavoratori (art. 13) ed esistenza di una base giuridica",
        en: 'Prior information to workers (art. 13) and the existence of a legal basis',
        de: 'Vorherige Information der Beschäftigten (Art. 13) und Bestehen einer Rechtsgrundlage',
        fr: 'Information préalable des travailleurs (art. 13) et existence d’une base juridique',
        es: 'Información previa a los trabajadores (art. 13) y existencia de una base jurídica',
        pt: "Informação prévia aos trabalhadores (art. 13.º) e existência de uma base jurídica",
        da: 'Forudgående information til medarbejderne (art. 13) og et retsgrundlag',
        sv: 'Förhandsinformation till de anställda (art. 13) och förekomsten av en rättslig grund',
        nl: 'Voorafgaande informatie aan werknemers (art. 13) en het bestaan van een rechtsgrond',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il lavoratore va informato prima dell'inizio del monitoraggio su titolare, finalità e base giuridica; non esiste una legge cipriota specifica sul GPS, vale il quadro GDPR e la Legge 125(I)/2018.",
        en: 'The worker must be informed before monitoring begins about the controller, purposes and legal basis; there is no specific Cypriot law on GPS, the GDPR framework and Law 125(I)/2018 apply.',
        de: 'die beschäftigte Person ist vor Beginn der Überwachung über den Verantwortlichen, die Zwecke und die Rechtsgrundlage zu informieren; es gibt kein spezifisches zypriotisches GPS-Gesetz, es gelten der DSGVO-Rahmen und das Gesetz 125(I)/2018.',
        fr: 'Le travailleur doit être informé avant le début de la surveillance sur le responsable, les finalités et la base juridique ; il n’existe pas de loi chypriote spécifique sur le GPS, le cadre du RGPD et la Loi 125(I)/2018 s’appliquent.',
        es: 'El trabajador debe ser informado antes del inicio de la monitorización sobre el responsable, las finalidades y la base jurídica; no existe una ley chipriota específica sobre el GPS, se aplican el marco del RGPD y la Ley 125(I)/2018.',
        pt: "O trabalhador deve ser informado, antes do início da monitorização, sobre o responsável pelo tratamento, as finalidades e a base jurídica; não existe uma lei cipriota específica sobre o GPS, vale o quadro do RGPD e a Lei 125(I)/2018.",
        da: 'Medarbejderen skal, før overvågningen begynder, informeres om den dataansvarlige, formålene og retsgrundlaget; der findes ingen specifik cypriotisk lov om GPS; GDPR-rammen og lov 125(I)/2018 gælder.',
        sv: 'Den anställde ska informeras innan övervakningen börjar om den personuppgiftsansvarige, ändamålen och den rättsliga grunden; det finns ingen särskild cypriotisk lag om GPS, utan GDPR-ramverket och lag 125(I)/2018 gäller.',
        nl: 'de werknemer moet voor de aanvang van de monitoring worden geinformeerd over de verwerkingsverantwoordelijke, de doeleinden en de rechtsgrond; er is geen specifieke Cypriotische GPS-wet, het AVG-kader en Wet 125(I)/2018 zijn van toepassing.',
      },
      fonte: FONTE_GDPR_13,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installation',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: 'Autorisation préalable d’une autorité avant l’installation',
        es: 'Autorización previa de una autoridad antes de instalar',
        pt: "Autorização prévia de uma autoridade antes de instalar",
        da: 'Forudgående tilladelse fra en myndighed før installation',
        sv: 'Förhandstillstånd från en myndighet före installationen',
        nl: 'Voorafgaande toestemming van een autoriteit voor de installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva del Garante; con il GDPR il vecchio regime di notifica è stato abolito.",
        en: 'No prior authorisation from the Commissioner is needed; with the GDPR the old notification regime has been abolished.',
        de: 'eine vorherige Genehmigung des Commissioner ist nicht erforderlich; mit der DSGVO wurde das alte Meldesystem abgeschafft.',
        fr: 'Aucune autorisation préalable du Commissioner n’est requise ; avec le RGPD l’ancien régime de notification a été aboli.',
        es: 'No se necesita una autorización previa del Comisionado; con el RGPD se ha abolido el antiguo régimen de notificación.',
        pt: "Não é necessária autorização prévia do Comissário; com o RGPD, o antigo regime de notificação foi abolido.",
        da: 'Der kræves ingen forudgående tilladelse fra kommissæren; med GDPR er den gamle anmeldelsesordning afskaffet.',
        sv: 'Inget förhandstillstånd från Commissioner behövs; med GDPR har det gamla anmälningssystemet avskaffats.',
        nl: 'er is geen voorafgaande toestemming van de Commissioner nodig; met de AVG is het oude meldingsregime afgeschaft.',
      },
      fonte: FONTE_CY_ARCHIVIO,
    },
    {
      voce: {
        it: 'Base = interesse legittimo con bilanciamento, non il consenso',
        en: 'Basis = legitimate interest with balancing, not consent',
        de: 'Grundlage = berechtigtes Interesse mit Abwägung, nicht die Einwilligung',
        fr: 'Base = intérêt légitime avec mise en balance, pas le consentement',
        es: 'Base = interés legítimo con ponderación, no el consentimiento',
        pt: "Base = interesse legítimo com ponderação, não o consentimento",
        da: 'Grundlag = legitim interesse med afvejning, ikke samtykke',
        sv: 'Grund = berättigat intresse med avvägning, inte samtycke',
        nl: 'Grondslag = gerechtvaardigd belang met belangenafweging, niet de toestemming',
      },
      risposta: 'si',
      dettaglio: {
        it: "Nel rapporto di lavoro il consenso non è liberamente prestato; la base usuale è l'interesse legittimo, con un test di bilanciamento documentato che non prevalga sui diritti dei lavoratori.",
        en: 'In the employment relationship consent is not freely given; the usual basis is legitimate interest, with a documented balancing test that does not override the workers\' rights.',
        de: 'im Arbeitsverhältnis wird die Einwilligung nicht freiwillig erteilt; die übliche Grundlage ist das berechtigte Interesse, mit einer dokumentierten Abwägung, die die Rechte der Beschäftigten nicht überwiegt.',
        fr: 'Dans la relation de travail le consentement n’est pas librement donné ; la base habituelle est l’intérêt légitime, avec un test de mise en balance documenté qui ne prévaut pas sur les droits des travailleurs.',
        es: 'En la relación laboral el consentimiento no se presta libremente; la base habitual es el interés legítimo, con una prueba de ponderación documentada que no prevalezca sobre los derechos de los trabajadores.',
        pt: "Na relação laboral, o consentimento não é livremente prestado; a base habitual é o interesse legítimo, com um teste de ponderação documentado que não prevaleça sobre os direitos dos trabalhadores.",
        da: 'I ansættelsesforholdet er samtykke ikke frivilligt; det sædvanlige grundlag er legitim interesse, med en dokumenteret afvejning, der ikke tilsidesætter medarbejdernes rettigheder.',
        sv: 'I anställningsförhållandet är samtycke inte frivilligt; den vanliga grunden är berättigat intresse, med en dokumenterad intresseavvägning som inte väger tyngre än de anställdas rättigheter.',
        nl: 'in de arbeidsverhouding wordt toestemming niet vrijelijk gegeven; de gebruikelijke grondslag is het gerechtvaardigd belang, met een gedocumenteerde belangenafweging die niet zwaarder weegt dan de rechten van de werknemers.',
      },
      fonte: FONTE_GDPR_6,
    },
    {
      voce: {
        it: 'Niente tracciamento continuo 24 ore su 24; minimizzazione (art. 5.1.c)',
        en: 'No continuous round-the-clock tracking; data minimisation (art. 5.1.c)',
        de: 'Keine kontinuierliche Rund-um-die-Uhr-Ortung; Datenminimierung (Art. 5.1.c)',
        fr: 'Pas de suivi continu 24 heures sur 24 ; minimisation (art. 5.1.c)',
        es: 'Sin seguimiento continuo las 24 horas; minimización (art. 5.1.c)',
        pt: "Sem seguimento contínuo 24 horas por dia; minimização (art. 5.º, n.º 1, alínea c))",
        da: 'Ingen kontinuerlig sporing døgnet rundt; dataminimering (art. 5.1.c)',
        sv: 'Ingen löpande spårning dygnet runt; uppgiftsminimering (art. 5.1.c)',
        nl: 'Geen continue tracking de klok rond; minimalisering (art. 5.1.c)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il tracciamento GPS continuo è sempre attivo viola la minimizzazione; va limitato a quanto necessario (orario di lavoro, rischio effettivo).',
        en: 'Continuous, always-on GPS tracking breaches data minimisation; it must be limited to what is necessary (working hours, actual risk).',
        de: 'kontinuierliche, dauerhaft aktive GPS-Ortung verstößt gegen die Datenminimierung; sie ist auf das Notwendige zu beschränken (Arbeitszeit, tatsächliches Risiko).',
        fr: 'Le suivi GPS continu et toujours actif viole la minimisation ; il doit être limité à ce qui est nécessaire (temps de travail, risque effectif).',
        es: 'El seguimiento GPS continuo y siempre activo vulnera la minimización; debe limitarse a lo necesario (jornada laboral, riesgo efectivo).',
        pt: "O seguimento GPS contínuo e sempre ativo viola a minimização; deve limitar-se ao necessário (horário de trabalho, risco efetivo).",
        da: 'Kontinuerlig GPS-sporing, der altid er slået til, er i strid med dataminimering; den skal begrænses til det nødvendige (arbejdstiden, den faktiske risiko).',
        sv: 'Löpande GPS-spårning som alltid är på strider mot uppgiftsminimeringen; den ska begränsas till vad som är nödvändigt (arbetstid, faktisk risk).',
        nl: 'continue, altijd actieve GPS-tracking schendt de minimalisering; deze moet worden beperkt tot wat noodzakelijk is (werktijd, daadwerkelijk risico).',
      },
      fonte: FONTE_GDPR,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio sistematico dei dipendenti (art. 35)",
        en: 'Impact assessment (DPIA) for systematic monitoring of employees (art. 35)',
        de: 'Datenschutz-Folgenabschätzung (DSFA) für die systematische Überwachung von Beschäftigten (Art. 35)',
        fr: 'Analyse d’impact (AIPD) pour la surveillance systématique des salariés (art. 35)',
        es: 'Evaluación de impacto (EIPD) para la monitorización sistemática de los empleados (art. 35)',
        pt: "Avaliação de impacto (AIPD) para a monitorização sistemática dos trabalhadores (art. 35.º)",
        da: 'Konsekvensanalyse (DPIA) for systematisk overvågning af ansatte (art. 35)',
        sv: 'Konsekvensbedömning (DPIA) för systematisk övervakning av anställda (art. 35)',
        nl: 'Effectbeoordeling (DPIA) voor systematische monitoring van werknemers (art. 35)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Una DPIA è necessaria quando il monitoraggio dei dipendenti è sistematico; il Garante valuta caso per caso la proporzionalità.',
        en: 'A DPIA is required when employee monitoring is systematic; the Commissioner assesses proportionality case by case.',
        de: 'eine DSFA ist erforderlich, wenn die Überwachung der Beschäftigten systematisch ist; der Commissioner prüft die Verhältnismäßigkeit im Einzelfall.',
        fr: 'Une AIPD est nécessaire lorsque la surveillance des salariés est systématique ; le Commissioner apprécie la proportionnalité au cas par cas.',
        es: 'Una EIPD es necesaria cuando la monitorización de los empleados es sistemática; el Comisionado evalúa la proporcionalidad caso por caso.',
        pt: "Uma AIPD é necessária quando a monitorização dos trabalhadores é sistemática; o Comissário avalia caso a caso a proporcionalidade.",
        da: 'En DPIA er påkrævet, når overvågningen af ansatte er systematisk; kommissæren vurderer proportionaliteten fra sag til sag.',
        sv: 'En DPIA krävs när övervakningen av anställda är systematisk; Commissioner bedömer proportionaliteten från fall till fall.',
        nl: 'een DPIA is vereist wanneer de monitoring van werknemers systematisch is; de Commissioner beoordeelt de evenredigheid per geval.',
      },
      fonte: FONTE_CY_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Individua una base giuridica valida (interesse legittimo) e documenta il bilanciamento.',
        en: 'Identify a valid legal basis (legitimate interest) and document the balancing test.',
        de: 'Bestimmen Sie eine gültige Rechtsgrundlage (berechtigtes Interesse) und dokumentieren Sie die Abwägung.',
        fr: 'Identifiez une base juridique valable (intérêt légitime) et documentez la mise en balance.',
        es: 'Identifica una base jurídica válida (interés legítimo) y documenta la ponderación.',
        pt: "Identifique uma base jurídica válida (interesse legítimo) e documente a ponderação.",
        da: 'Find et gyldigt retsgrundlag (legitim interesse), og dokumentér afvejningen.',
        sv: 'Fastställ en giltig rättslig grund (berättigat intresse) och dokumentera intresseavvägningen.',
        nl: 'Bepaal een geldige rechtsgrond (gerechtvaardigd belang) en documenteer de belangenafweging.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Informa i lavoratori prima dell'inizio del monitoraggio (art. 13).",
        en: 'Inform workers before monitoring begins (art. 13).',
        de: 'Informieren Sie die Beschäftigten vor Beginn der Überwachung (Art. 13).',
        fr: 'Informez les travailleurs avant le début de la surveillance (art. 13).',
        es: 'Informa a los trabajadores antes del inicio de la monitorización (art. 13).',
        pt: "Informe os trabalhadores antes do início da monitorização (art. 13.º).",
        da: 'Informér medarbejderne, før overvågningen begynder (art. 13).',
        sv: 'Informera de anställda innan övervakningen börjar (art. 13).',
        nl: 'Informeer de werknemers voordat de monitoring begint (art. 13).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio sistematico.",
        en: 'Carry out the impact assessment (DPIA) for systematic monitoring.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) für die systematische Überwachung durch.',
        fr: 'Réalisez l’analyse d’impact (AIPD) pour la surveillance systématique.',
        es: 'Realiza la evaluación de impacto (EIPD) para la monitorización sistemática.',
        pt: "Realize a avaliação de impacto (AIPD) para a monitorização sistemática.",
        da: 'Gennemfør konsekvensanalysen (DPIA) for systematisk overvågning.',
        sv: 'Genomför konsekvensbedömningen (DPIA) för systematisk övervakning.',
        nl: 'Voer de effectbeoordeling (DPIA) uit voor de systematische monitoring.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Limita il GPS a quanto necessario: niente tracciamento continuo 24 ore su 24.',
        en: 'Limit GPS to what is necessary: no continuous round-the-clock tracking.',
        de: 'Beschränken Sie GPS auf das Notwendige: keine kontinuierliche Rund-um-die-Uhr-Ortung.',
        fr: 'Limitez le GPS à ce qui est nécessaire : pas de suivi continu 24 heures sur 24.',
        es: 'Limita el GPS a lo necesario: sin seguimiento continuo las 24 horas.',
        pt: "Limite o GPS ao necessário: sem seguimento contínuo 24 horas por dia.",
        da: 'Begræns GPS til det nødvendige: ingen kontinuerlig sporing døgnet rundt.',
        sv: 'Begränsa GPS till vad som är nödvändigt: ingen löpande spårning dygnet runt.',
        nl: 'Beperk GPS tot wat noodzakelijk is: geen continue tracking de klok rond.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: "Configura il sistema in modo proporzionato e verifica la prevalenza dell'interesse sui diritti dei lavoratori.",
        en: 'Configure the system proportionately and check that the interest does not override the workers\' rights.',
        de: 'Konfigurieren Sie das System verhältnismäßig und prüfen Sie, dass das Interesse die Rechte der Beschäftigten nicht überwiegt.',
        fr: 'Configurez le système de manière proportionnée et vérifiez que l’intérêt ne prévaut pas sur les droits des travailleurs.',
        es: 'Configura el sistema de forma proporcionada y verifica que el interés no prevalece sobre los derechos de los trabajadores.',
        pt: "Configure o sistema de forma proporcionada e verifique a prevalência do interesse sobre os direitos dos trabalhadores.",
        da: 'Konfigurer systemet proportionalt, og kontrollér, at interessen ikke tilsidesætter medarbejdernes rettigheder.',
        sv: 'Konfigurera systemet proportionerligt och kontrollera att intresset inte väger tyngre än de anställdas rättigheter.',
        nl: 'Configureer het systeem proportioneel en controleer dat het belang niet zwaarder weegt dan de rechten van de werknemers.',
      },
    },
    {
      passo: 6,
      descrizione: {
        it: 'Se cambi sistema o software di monitoraggio, aggiorna e riconsegna l’informativa, e verifica se devi di nuovo informare o consultare i rappresentanti dei lavoratori, dove la legge lo prevede. Spesso cambiano fornitore (responsabile del trattamento), dati raccolti e modalità: l’informativa consegnata prima non basta.',
        en: 'If you switch systems: when you change your monitoring system or software, update and re-issue the privacy notice, and check whether you must inform or consult the workers\' representatives again, where the law requires it. The provider (data processor), the data collected and the methods often change: the one provided earlier is not enough.',
        de: 'Bei Systemwechsel: Wenn Sie Ihr Überwachungssystem oder Ihre Software wechseln, aktualisieren Sie die Datenschutzinformation und händigen Sie sie erneut aus, und prüfen Sie, ob Sie die Arbeitnehmervertretung erneut informieren oder beteiligen müssen, wo das Gesetz es vorsieht. Anbieter (Auftragsverarbeiter), erhobene Daten und Modalitäten ändern sich oft: die zuvor ausgehändigte genügt nicht.',
        fr: 'En cas de changement de système : si vous changez de système ou de logiciel de surveillance, mettez à jour et remettez l’information, et vérifiez si vous devez de nouveau informer ou consulter les représentants du personnel, lorsque la loi le prévoit. Le fournisseur (sous-traitant), les données collectées et les modalités changent souvent : celle remise auparavant ne suffit pas.',
        es: 'Si cambias de sistema o software de monitorización, actualiza y vuelve a entregar la información, y comprueba si debes volver a informar o consultar a los representantes de los trabajadores, cuando la ley lo prevé. A menudo cambian el proveedor (encargado del tratamiento), los datos recogidos y las modalidades: la información entregada antes no basta.',
        pt: "Se mudar de sistema ou de software de monitorização, atualize e entregue de novo a informação, e verifique se tem de voltar a informar ou a consultar os representantes dos trabalhadores, onde a lei o preveja. Muitas vezes mudam o fornecedor (subcontratante), os dados recolhidos e as modalidades: a informação entregue antes não basta.",
        da: 'Hvis du skifter system eller overvågningssoftware, skal du opdatere og udlevere privatlivsoplysningerne igen og undersøge, om du på ny skal informere eller høre medarbejdernes repræsentanter, hvor loven kræver det. Ofte ændrer leverandøren (databehandleren), de indsamlede oplysninger og metoderne sig: de oplysninger, der blev udleveret tidligere, er ikke nok.',
        sv: 'Om du byter system: när du byter övervakningssystem eller programvara ska du uppdatera och dela ut integritetsinformationen på nytt, och kontrollera om du måste informera eller samråda med de anställdas företrädare igen, där lagen kräver det. Leverantören (personuppgiftsbiträdet), de insamlade uppgifterna och metoderna ändras ofta: den information som lämnades tidigare räcker inte.',
        nl: 'Bij een systeemwissel: als u van monitoringsysteem of -software verandert, werkt u de privacyverklaring bij en verstrekt u deze opnieuw, en controleert u of u de werknemersvertegenwoordiging opnieuw moet informeren of raadplegen, waar de wet dat voorschrijft. Leverancier (verwerker), verzamelde gegevens en methoden veranderen vaak: de eerder verstrekte volstaat niet.',
      },
    },
  ],

  contatti: [
    {
      ente: 'Garante cipriota',
      portale: FONTE_GARANTE_CY.url,
      urlFonte: FONTE_GARANTE_CY.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '82.000 €',
      en: 'EUR 82,000',
      de: '82.000 EUR',
      fr: '82 000 EUR',
      es: '82.000 €',
      pt: "82.000 €",
      da: '82.000 €',
      sv: '82 000 €',
      nl: '82.000 EUR',
    },
    casoCitato: {
      it: "Garante cipriota contro il Gruppo Louis (decisione del 25 ottobre 2019): uso di uno strumento automatico (Bradford Factor) per profilare le assenze per malattia di 818 dipendenti, senza base giuridica valida e su dati sanitari (artt. 6 e 9 GDPR); il bilanciamento dell'interesse legittimo è fallito. Multa complessiva 82.000 euro (70.000 + 10.000 + 2.000 a tre società del gruppo). Non è un caso di GPS, ma è la sanzione cipriota più importante sul monitoraggio dei dipendenti.",
      en: "Cypriot Commissioner against the Louis Group (decision of 25 October 2019): use of an automated tool (Bradford Factor) to profile the sick-leave absences of 818 employees, without a valid legal basis and over health data (arts. 6 and 9 GDPR); the legitimate-interest balancing failed. Total fine 82,000 euros (70,000 + 10,000 + 2,000 against three companies of the group). It is not a GPS case, but it is the landmark Cypriot penalty on employee monitoring.",
      de: "Zypriotischer Commissioner gegen die Louis-Gruppe (Entscheidung vom 25. Oktober 2019): Einsatz eines automatisierten Instruments (Bradford Factor) zur Profilbildung der krankheitsbedingten Fehlzeiten von 818 Beschäftigten, ohne gültige Rechtsgrundlage und über Gesundheitsdaten (Art. 6 und 9 DSGVO); die Abwägung des berechtigten Interesses ist gescheitert. Gesamtbußgeld 82.000 Euro (70.000 + 10.000 + 2.000 gegen drei Gesellschaften der Gruppe). Es ist kein GPS-Fall, aber die zypriotische Leitsanktion zur Überwachung von Beschäftigten.",
      fr: 'Commissioner chypriote contre le Groupe Louis (décision du 25 octobre 2019) : utilisation d’un outil automatisé (Bradford Factor) pour profiler les absences pour maladie de 818 salariés, sans base juridique valable et sur des données de santé (art. 6 et 9 RGPD) ; la mise en balance de l’intérêt légitime a échoué. Amende totale de 82 000 euros (70 000 + 10 000 + 2 000 contre trois sociétés du groupe). Ce n’est pas un cas de GPS, mais c’est la sanction phare chypriote sur la surveillance des salariés.',
      es: "El Comisionado chipriota contra el Grupo Louis (decisión del 25 de octubre de 2019): uso de una herramienta automatizada (Bradford Factor) para perfilar las ausencias por enfermedad de 818 empleados, sin una base jurídica válida y sobre datos de salud (arts. 6 y 9 RGPD); la ponderación del interés legítimo fracasó. Multa total de 82.000 euros (70.000 + 10.000 + 2.000 a tres sociedades del grupo). No es un caso de GPS, pero es la sanción de referencia chipriota sobre la monitorización de los empleados.",
      pt: "Comissário cipriota contra o Grupo Louis (decisão de 25 de outubro de 2019): utilização de um instrumento automático (Bradford Factor) para definir o perfil das ausências por doença de 818 trabalhadores, sem base jurídica válida e sobre dados de saúde (arts. 6.º e 9.º do RGPD); a ponderação do interesse legítimo falhou. Coima total de 82.000 euros (70.000 + 10.000 + 2.000 a três sociedades do grupo). Não é um caso de GPS, mas é a sanção cipriota mais importante sobre a monitorização dos trabalhadores.",
      da: 'Den cypriotiske kommissær mod Louis Group (afgørelse af 25. oktober 2019): brug af et automatisk værktøj (Bradford Factor) til at profilere sygefraværet for 818 ansatte, uden gyldigt retsgrundlag og på helbredsoplysninger (art. 6 og 9 i GDPR); afvejningen af den legitime interesse faldt igennem. Samlet bøde 82.000 euro (70.000 + 10.000 + 2.000 til tre selskaber i koncernen). Det er ikke en GPS-sag, men det er den vigtigste cypriotiske sanktion vedrørende overvågning af ansatte.',
      sv: 'Cypriotiska Commissioner mot Louis Group (beslut av den 25 oktober 2019): användning av ett automatiserat verktyg (Bradford Factor) för att profilera sjukfrånvaron hos 818 anställda, utan giltig rättslig grund och över hälsouppgifter (art. 6 och 9 GDPR); avvägningen av berättigat intresse höll inte. Total sanktionsavgift 82 000 euro (70 000 + 10 000 + 2 000 mot tre av koncernens bolag). Det är inte ett GPS-fall, men det är det vägledande cypriotiska avgörandet om övervakning av anställda.',
      nl: "Cypriotische Commissioner tegen de Louis-groep (besluit van 25 oktober 2019): gebruik van een geautomatiseerd instrument (Bradford Factor) om de ziekteverzuim-afwezigheden van 818 werknemers te profileren, zonder geldige rechtsgrond en over gezondheidsgegevens (art. 6 en 9 AVG); de afweging van het gerechtvaardigd belang is mislukt. Totale boete 82.000 euro (70.000 + 10.000 + 2.000 tegen drie vennootschappen van de groep). Het is geen GPS-zaak, maar het is de toonaangevende Cypriotische sanctie inzake de monitoring van werknemers.",
    },
    urlFonte: FONTE_LOUIS.url,
    tipoImporto: 'caso-affine',
  },

  fonti: [FONTE_CY_LEGGE_125, FONTE_CY_ARCHIVIO, FONTE_CY_DPIA, FONTE_GDPR_13, FONTE_GDPR_6, FONTE_GARANTE_CY, FONTE_LOUIS, FONTE_GDPR],

  aggiornatoIl: '2026-09-30',
};
