/**
 * Scheda-paese Svizzera per la risorsa "GPS sui lavoratori in UE".
 *
 * Attenzione: la Svizzera NON fa parte dell'UE ne dello SEE, quindi il GDPR non
 * si applica direttamente. Il quadro giuridico e' interno: la nuova legge sulla
 * protezione dei dati (nLPD / revFADP), il Codice delle obbligazioni (CO art.
 * 328b) e soprattutto l'Ordinanza 3 sulla legge sul lavoro (OLT 3) art. 26, che
 * vieta i sistemi destinati a sorvegliare il comportamento dei lavoratori.
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * sentenza del Tribunale federale ATF 130 II 425 sul GPS sui veicoli aziendali,
 * pagine del PFPDT/FDPIC sui mezzi tecnici di sorveglianza, sul trattamento dei
 * dati da parte del datore (CO art. 328b) e sulla valutazione d'impatto (nLPD
 * art. 22), oltre al GDPR come riferimento comparativo.
 *
 * Per i datori privati vigila l'autorità' federale (PFPDT/FDPIC); le autorita'
 * cantonali coprono gli enti pubblici cantonali. Nessun numero, URL o autorita'
 * e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_FDPIC_SORVEGLIANZA = {
  titolo: 'IFPDT/FDPIC, mezzi tecnici di sorveglianza sul luogo di lavoro',
  url: 'https://www.edoeb.admin.ch/fr/moyens-techniques-de-surveillance-sur-le-lieu-de-travail',
};
const FONTE_FDPIC_DATORE = {
  titolo:
    'IFPDT/FDPIC, trattamento dei dati da parte del datore di lavoro (CO art. 328b)',
  url: 'https://www.edoeb.admin.ch/fr/traitement-des-donnees-par-lemployeur',
};
const FONTE_FDPIC_VALUTAZIONE = {
  titolo:
    "IFPDT/FDPIC, valutazione d'impatto sulla protezione dei dati (nLPD art. 22)",
  url: 'https://www.edoeb.admin.ch/fr/analyse-dimpact-relative-a-la-protection-des-donnees-personnelles',
};
const FONTE_NLPD = {
  titolo: 'Legge federale sulla protezione dei dati (nLPD), art. 22, 23 e 60-65 (Fedlex)',
  url: 'https://www.fedlex.admin.ch/eli/cc/2022/491/it',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR) - riferimento comparativo',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const svizzera: SchedaPaese = {
  codiceISO: 'CH',
  slugCanonico: 'svizzera',
  nome: 'Svizzera',
  nomi: {
    it: 'Svizzera',
    en: 'Switzerland',
    'en-us': 'Switzerland',
    'en-gb': 'Switzerland',
    'en-au': 'Switzerland',
    'en-ie': 'Switzerland',
    'en-ca': 'Switzerland',
    de: 'Schweiz',
    nl: 'Zwitserland',
    fr: 'Suisse',
    es: 'Suiza',
    pt: 'Suíça',
    da: 'Schweiz',
    sv: 'Schweiz',
    nb: 'Sveits',
    ru: 'Швейцария',
  },
  bandiera: '🇨🇭',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: {
      it: 'IFPDT / FDPIC (Incaricato federale della protezione dei dati e della trasparenza)',
      en: 'PFPDT / FDPIC (Federal Data Protection and Information Commissioner)',
      de: 'EDÖB / FDPIC (Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter)',
      fr: 'PFPDT / FDPIC (Préposé fédéral à la protection des données et à la transparence)',
      es: 'PFPDT / FDPIC (Comisionado Federal de Protección de Datos y Transparencia)',
      nl: 'PFPDT / FDPIC (Federale functionaris voor gegevensbescherming en transparantie)',
      pt: 'PFPDT / FDPIC (Comissário Federal para a Proteção de Dados e a Transparência)',
      da: 'PFPDT / FDPIC (Forbundskommissær for databeskyttelse og gennemsigtighed)',
      sv: 'PFPDT / FDPIC (Federala dataskydds- och offentlighetsombudsmannen)',
      nb: 'PFPDT / FDPIC (Føderal kommissær for personvern og innsyn)',
      ru: 'PFPDT / FDPIC (Федеральный уполномоченный по защите данных и транспарентности)',
    },
    portale: FONTE_FDPIC_SORVEGLIANZA.url,
    urlFonte: FONTE_FDPIC_SORVEGLIANZA.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Svizzera è fuori dall'UE. Per i datori privati è competente l'autorità federale (IFPDT/FDPIC); le autorità cantonali coprono gli enti pubblici cantonali.",
      en: 'Switzerland is outside the EU. For private employers the competent body is the federal authority (PFPDT/FDPIC); the cantonal authorities cover cantonal public bodies.',
      de: 'Die Schweiz liegt außerhalb der EU. Für private Arbeitgeber ist die Bundesbehörde (EDOEB/FDPIC) zuständig; die kantonalen Behörden decken die kantonalen öffentlichen Stellen ab.',
      fr: "La Suisse est en dehors de l'UE. Pour les employeurs prives, l'autorité compétente est l'autorité federale (PFPDT/FDPIC); les autorités cantonales couvrent les organismes publics cantonaux.",
      es: 'Suiza esta fuera de la UE. Para los empleadores privados, la autoridad competente es la autoridad federal (PFPDT/FDPIC); las autoridades cantonales cubren los organismos públicos cantonales.',
      nl: 'Zwitserland ligt buiten de EU. Voor particuliere werkgevers is de federale autoriteit (FDPIC/PFPDT) bevoegd; de kantonale autoriteiten dekken de kantonale openbare instanties.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Divieto di sistemi destinati a sorvegliare il comportamento dei lavoratori (OLT 3, art. 26)',
        en: 'Ban on systems intended to monitor the behaviour of workers (OLT 3, art. 26)',
        de: 'Verbot von Systemen, die das Verhalten der Arbeitnehmenden überwachen sollen (ArGV 3, Art. 26)',
        fr: 'Interdiction des systèmes destines a surveiller le comportement des travailleurs (OLT 3, art. 26)',
        es: 'Prohibición de sistemas destinados a vigilar el comportamiento de los trabajadores (OLT 3, art. 26)',
        nl: 'Verbod op systemen die bedoeld zijn om het gedrag van werknemers te bewaken (ArGV 3, art. 26)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Regola cardine svizzera, più severa del GDPR: è vietato usare sistemi destinati a sorvegliare il comportamento dei lavoratori sul posto di lavoro. Se servono per altri motivi (sicurezza, produzione, organizzazione), vanno concepiti in modo da non ledere salute e libertà di movimento, e un sistema è vietato se mira unicamente o essenzialmente a sorvegliare il comportamento.",
        en: 'A cornerstone Swiss rule, stricter than the GDPR: it is forbidden to use systems intended to monitor the behaviour of workers at the workplace. If they are needed for other reasons (safety, production, organisation), they must be designed so as not to harm health and freedom of movement, and a system is forbidden if it aims solely or essentially at monitoring behaviour.',
        de: 'Eine zentrale Schweizer Regel, strenger als die DSGVO: Es ist verboten, Systeme einzusetzen, die das Verhalten der Arbeitnehmenden am Arbeitsplatz überwachen sollen. Werden sie aus anderen Gründen benötigt (Sicherheit, Produktion, Organisation), müssen sie so gestaltet sein, dass sie Gesundheit und Bewegungsfreiheit nicht beeinträchtigen, und ein System ist verboten, wenn es ausschließlich oder im Wesentlichen darauf abzielt, das Verhalten zu überwachen.',
        fr: "Règle cardinale suisse, plus stricte que le RGPD: il est interdit d'utiliser des systèmes destines a surveiller le comportement des travailleurs sur le lieu de travail. S'ils sont nécessaires pour d'autres raisons (securite, production, organisation), ils doivent être conçus de manière a ne pas porter atteinte a la santé et a la liberté de mouvement, et un système est interdit s'il vise uniquement ou essentiellement a surveiller le comportement.",
        es: 'Regla cardinal suiza, mas estricta que el RGPD: esta prohibido usar sistemas destinados a vigilar el comportamiento de los trabajadores en el lugar de trabajo. Si se necesitan por otros motivos (seguridad, producción, organización), deben concebirse de modo que no lesionen la salud ni la libertad de movimiento, y un sistema esta prohibido si tiene como único o esencial fin vigilar el comportamiento.',
        nl: 'Een centrale Zwitserse regel, strenger dan de AVG: het is verboden systemen te gebruiken die bedoeld zijn om het gedrag van werknemers op de werkplek te bewaken. Als ze om andere redenen nodig zijn (veiligheid, productie, organisatie), moeten ze zo zijn ontworpen dat ze de gezondheid en de bewegingsvrijheid niet schaden, en een systeem is verboden als het uitsluitend of in wezen gericht is op het bewaken van gedrag.',
      },
      fonte: FONTE_FDPIC_SORVEGLIANZA,
    },
    {
      voce: {
        it: "Trattamento dei dati solo se riguarda l'idoneità al lavoro o è necessario al contratto (CO art. 328b)",
        en: 'Data processing only if it concerns suitability for the job or is necessary for the contract (CO art. 328b)',
        de: 'Datenbearbeitung nur, wenn sie die Eignung für die Arbeit betrifft oder für den Vertrag erforderlich ist (OR Art. 328b)',
        fr: "Traitement des données uniquement s'il concerne l'aptitude au travail ou est nécessaire au contrat (CO art. 328b)",
        es: 'Tratamiento de datos solo si se refiere a la aptitud para el trabajo o es necesario para el contrato (CO art. 328b)',
        nl: 'Gegevensverwerking alleen als die de geschiktheid voor het werk betreft of noodzakelijk is voor het contract (OR art. 328b)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore può trattare i dati del lavoratore solo se riguardano la sua idoneità all'impiego o sono necessari all'esecuzione del contratto, nel rispetto di buona fede e proporzionalità.",
        en: 'The employer may process the worker data only if it concerns their suitability for employment or is necessary for performing the contract, in compliance with good faith and proportionality.',
        de: 'Der Arbeitgeber darf die Daten der Arbeitnehmenden nur bearbeiten, wenn sie deren Eignung für das Arbeitsverhältnis betreffen oder zur Durchführung des Vertrags erforderlich sind, unter Wahrung von Treu und Glauben und Verhältnismäßigkeit.',
        fr: "L'employeur ne peut traiter les données du travailleur que si elles concernent son aptitude a l'emploi ou sont nécessaires a l'exécution du contrat, dans le respect de la bonne foi et de la proportionnalité.",
        es: 'El empleador solo puede tratar los datos del trabajador si se refieren a su aptitud para el empleo o son necesarios para la ejecución del contrato, respetando la buena fe y la proporcionalidad.',
        nl: 'De werkgever mag de gegevens van de werknemer alleen verwerken als die betrekking hebben op zijn geschiktheid voor de baan of noodzakelijk zijn voor de uitvoering van het contract, met inachtneming van goede trouw en evenredigheid.',
      },
      fonte: FONTE_FDPIC_DATORE,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorgängige Bewilligung einer Behörde vor der Installation',
        fr: "Autorisation préalable d'une autorité avant l'installation",
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voordat u installeert',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva dell'IFPDT; il datore valuta da sé liceità e proporzionalità.",
        en: 'No prior authorisation from the PFPDT/FDPIC is needed; the employer assesses lawfulness and proportionality on its own.',
        de: 'Eine vorgängige Bewilligung des EDOEB/FDPIC ist nicht erforderlich; der Arbeitgeber beurteilt Rechtmäßigkeit und Verhältnismäßigkeit selbst.',
        fr: "Aucune autorisation préalable du PFPDT/FDPIC n'est requise; l'employeur évalue lui-même la licéité et la proportionnalité.",
        es: 'No se necesita una autorización previa del PFPDT/FDPIC; el empleador evalúa por si mismo la licitud y la proporcionalidad.',
        nl: 'Een voorafgaande toestemming van de FDPIC/PFPDT is niet nodig; de werkgever beoordeelt zelf de rechtmatigheid en de evenredigheid.',
      },
      fonte: FONTE_FDPIC_SORVEGLIANZA,
    },
    {
      voce: {
        it: 'Informazione preventiva dei lavoratori; niente sorveglianza permanente del comportamento',
        en: 'Prior information of workers; no permanent monitoring of behaviour',
        de: 'Vorgängige Information der Arbeitnehmenden; keine dauerhafte Verhaltensüberwachung',
        fr: 'Information préalable des travailleurs; aucune surveillance permanente du comportement',
        es: 'Información previa de los trabajadores; ninguna vigilancia permanente del comportamiento',
        nl: 'Voorafgaande informatie van de werknemers; geen permanente bewaking van het gedrag',
      },
      risposta: 'si',
      dettaglio: {
        it: "I lavoratori vanno informati in anticipo; è vietata una sorveglianza continua, periodica o a campione volta a controllare il comportamento; va scelto il mezzo proporzionato e meno lesivo.",
        en: 'Workers must be informed in advance; continuous, periodic or sample-based surveillance aimed at monitoring behaviour is forbidden; the proportionate and least intrusive means must be chosen.',
        de: 'Die Arbeitnehmenden müssen im Voraus informiert werden; eine dauernde, periodische oder stichprobenartige Überwachung zur Kontrolle des Verhaltens ist verboten; es ist das verhältnismäßige und am wenigsten beeinträchtigende Mittel zu wählen.',
        fr: "Les travailleurs doivent être informes au préalable; une surveillance continue, periodique ou par échantillonnage visant a contrôler le comportement est interdite; il faut choisir le moyen proportionné et le moins attentatoire.",
        es: 'Los trabajadores deben ser informados con antelación; esta prohibida una vigilancia continua, periódica o por muestreo destinada a controlar el comportamiento; debe elegirse el medio proporcionado y menos lesivo.',
        nl: 'De werknemers moeten vooraf worden geinformeerd; een doorlopende, periodieke of steekproefsgewijze controle om het gedrag te bewaken is verboden; er moet voor het evenredige en minst ingrijpende middel worden gekozen.',
      },
      fonte: FONTE_FDPIC_SORVEGLIANZA,
    },
    {
      voce: {
        it: "Valutazione d'impatto (AIPD, nLPD art. 22) se il trattamento comporta un rischio elevato",
        en: 'Impact assessment (DPIA, nLPD/revFADP art. 22) if the processing entails a high risk',
        de: 'Datenschutz-Folgenabschätzung (DSFA, nDSG/revFADP Art. 22), wenn die Bearbeitung ein hohes Risiko mit sich bringt',
        fr: "Analyse d'impact (AIPD, nLPD/revFADP art. 22) si le traitement comporte un risque élevé",
        es: 'Evaluación de impacto (EIPD, nLPD/revFADP art. 22) si el tratamiento conlleva un riesgo elevado',
        nl: 'Effectbeoordeling (DPIA, nLPD/revFADP art. 22) als de verwerking een hoog risico met zich meebrengt',
      },
      risposta: 'dipende',
      dettaglio: {
        it: "La nLPD impone una valutazione d'impatto solo quando il trattamento può comportare un rischio elevato per la personalità o i diritti fondamentali (art. 22 c. 1). La legge cita come esempi il trattamento su larga scala di dati sensibili e la sorveglianza sistematica di ampie aree pubbliche (c. 2): il GPS sui lavoratori non è citato, quindi va valutato caso per caso. Se il rischio elevato resta anche dopo le misure, va sentito l'IFPDT (art. 23).",
        en: 'The nLPD/revFADP requires an impact assessment only when the processing may entail a high risk to personality or fundamental rights (art. 22(1)). The law gives as examples large-scale processing of sensitive data and systematic monitoring of large public areas (para. 2): GPS on workers is not named, so it must be assessed case by case. If a high risk remains after mitigation, the FDPIC must be consulted (art. 23).',
        de: 'Das nDSG/revFADP verlangt eine Folgenabschätzung nur, wenn die Bearbeitung ein hohes Risiko für die Persönlichkeit oder die Grundrechte mit sich bringen kann (Art. 22 Abs. 1). Als Beispiele nennt das Gesetz die umfangreiche Bearbeitung besonders schützenswerter Personendaten und die systematische Überwachung umfangreicher öffentlicher Bereiche (Abs. 2); die GPS-Ortung von Arbeitnehmenden wird nicht genannt und ist im Einzelfall zu beurteilen. Bleibt ein hohes Risiko trotz Massnahmen, ist der EDÖB anzuhören (Art. 23).',
        fr: "La nLPD/revFADP n'impose une analyse d'impact que lorsque le traitement peut entraîner un risque élevé pour la personnalité ou les droits fondamentaux (art. 22, al. 1). La loi cite en exemple le traitement à grande échelle de données sensibles et la surveillance systématique de grandes parties du domaine public (al. 2) : le GPS sur les travailleurs n'est pas cité et doit être apprécié au cas par cas. Si un risque élevé subsiste malgré les mesures, le PFPDT doit être consulté (art. 23).",
        es: 'La nLPD/revFADP exige una evaluación de impacto solo cuando el tratamiento puede conllevar un riesgo elevado para la personalidad o los derechos fundamentales (art. 22, apdo. 1). La ley cita como ejemplos el tratamiento a gran escala de datos sensibles y la vigilancia sistemática de grandes zonas públicas (apdo. 2): el GPS sobre los trabajadores no se menciona y debe valorarse caso por caso. Si persiste un riesgo elevado tras las medidas, debe consultarse al PFPDT (art. 23).',
        nl: 'De nLPD/revFADP vereist alleen een effectbeoordeling wanneer de verwerking een hoog risico kan inhouden voor de persoonlijkheid of de grondrechten (art. 22, lid 1). De wet noemt als voorbeelden grootschalige verwerking van gevoelige gegevens en systematische bewaking van grote openbare gebieden (lid 2): gps bij werknemers wordt niet genoemd en moet per geval worden beoordeeld. Blijft er na maatregelen een hoog risico, dan moet de FDPIC worden geraadpleegd (art. 23).',
      },
      fonte: FONTE_NLPD,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Verifica che il sistema non sia destinato a sorvegliare il comportamento dei lavoratori (OLT 3 art. 26): se lo è, è vietato.',
        en: 'Check that the system is not intended to monitor the behaviour of workers (OLT 3 art. 26): if it is, it is forbidden.',
        de: 'Prüfen Sie, dass das System nicht dazu bestimmt ist, das Verhalten der Arbeitnehmenden zu überwachen (ArGV 3 Art. 26): ist dies der Fall, ist es verboten.',
        fr: "Vérifiez que le système n'est pas destine a surveiller le comportement des travailleurs (OLT 3 art. 26): si c'est le cas, il est interdit.",
        es: 'Compruebe que el sistema no este destinado a vigilar el comportamiento de los trabajadores (OLT 3 art. 26): si lo esta, esta prohibido.',
        nl: 'Controleer dat het systeem niet bedoeld is om het gedrag van werknemers te bewaken (ArGV 3 art. 26): als dat zo is, is het verboden.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Accertati che i dati trattati riguardino l'idoneità al lavoro o siano necessari al contratto (CO art. 328b).",
        en: 'Make sure the data processed concerns suitability for the job or is necessary for the contract (CO art. 328b).',
        de: 'Stellen Sie sicher, dass die bearbeiteten Daten die Eignung für die Arbeit betreffen oder für den Vertrag erforderlich sind (OR Art. 328b).',
        fr: "Assurez-vous que les données traitées concernent l'aptitude au travail ou sont nécessaires au contrat (CO art. 328b).",
        es: 'Asegúrese de que los datos tratados se refieran a la aptitud para el trabajo o sean necesarios para el contrato (CO art. 328b).',
        nl: 'Zorg ervoor dat de verwerkte gegevens betrekking hebben op de geschiktheid voor het werk of noodzakelijk zijn voor het contract (OR art. 328b).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Informa in anticipo i lavoratori (dove la sorveglianza incide sulla salute, consultali: OLT 3 art. 6).',
        en: 'Inform workers in advance (where the monitoring affects health, also consult them: OLT 3 art. 6).',
        de: 'Informieren Sie die Arbeitnehmenden im Voraus (betrifft die Überwachung die Gesundheit, hören Sie sie auch an: ArGV 3 Art. 6).',
        fr: "Informez les travailleurs au préalable (si la surveillance touche à la santé, consultez-les aussi : OLT 3 art. 6).",
        es: 'Informe a los trabajadores con antelación (si la vigilancia afecta a la salud, consúlteles también: OLT 3 art. 6).',
        nl: 'Informeer de werknemers vooraf (raakt de controle de gezondheid, raadpleeg hen dan ook: OLT 3 art. 6).',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (AIPD) se il trattamento comporta un rischio elevato.",
        en: 'Carry out the impact assessment (DPIA) if the processing entails a high risk.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) durch, wenn die Bearbeitung ein hohes Risiko mit sich bringt.',
        fr: "Réalisez l'analyse d'impact (AIPD) si le traitement comporte un risque élevé.",
        es: 'Realice la evaluación de impacto (EIPD) si el tratamiento conlleva un riesgo elevado.',
        nl: 'Voer de effectbeoordeling (DPIA) uit als de verwerking een hoog risico met zich meebrengt.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema in modo proporzionato allo scopo dichiarato (es. pianificazione dei percorsi), senza analisi dettagliate e continue del comportamento.',
        en: 'Configure the system proportionately to the stated purpose (e.g. route planning), without detailed, continuous analysis of behaviour.',
        de: 'Konfigurieren Sie das System verhältnismäßig zum angegebenen Zweck (z. B. Routenplanung), ohne detaillierte, laufende Verhaltensanalysen.',
        fr: "Configurez le système de manière proportionnée à la finalité déclarée (p. ex. planification des trajets), sans analyses détaillées et continues du comportement.",
        es: 'Configure el sistema de forma proporcionada a la finalidad declarada (p. ej. planificación de rutas), sin análisis detallados y continuos del comportamiento.',
        nl: 'Configureer het systeem evenredig aan het opgegeven doel (bijv. routeplanning), zonder gedetailleerde, doorlopende analyse van het gedrag.',
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
      ente: {
        it: 'IFPDT/FDPIC',
        en: 'FDPIC',
        de: 'EDÖB/FDPIC',
        fr: 'PFPDT/FDPIC',
      },
      portale: FONTE_FDPIC_DATORE.url,
      urlFonte: FONTE_FDPIC_DATORE.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: "fino a 250.000 CHF, di regola a carico della persona fisica responsabile (l'azienda risponde solo fino a 50.000 CHF, se individuare il responsabile è sproporzionato), inflitte dalle autorità penali cantonali",
      en: 'up to 250,000 CHF, as a rule borne by the responsible natural person (the company is liable only up to 50,000 CHF, where identifying the responsible person would be disproportionate), imposed by the cantonal criminal authorities',
      de: 'bis zu 250.000 CHF, in der Regel zulasten der verantwortlichen natürlichen Person (das Unternehmen haftet nur bis 50.000 CHF, wenn die Ermittlung der verantwortlichen Person unverhältnismässig wäre), verhängt durch die kantonalen Strafbehörden',
      fr: "jusqu'à 250 000 CHF, en principe à la charge de la personne physique responsable (l'entreprise ne répond que jusqu'à 50 000 CHF, si identifier le responsable serait disproportionné), prononcée par les autorités pénales cantonales",
      es: 'hasta 250.000 CHF, en principio a cargo de la persona física responsable (la empresa responde solo hasta 50.000 CHF si identificar al responsable fuera desproporcionado), impuestas por las autoridades penales cantonales',
      nl: 'tot 250.000 CHF, in de regel ten laste van de verantwoordelijke natuurlijke persoon (het bedrijf is slechts aansprakelijk tot 50.000 CHF als het identificeren van de verantwoordelijke onevenredig zou zijn), opgelegd door de kantonale strafautoriteiten',
    },
    casoCitato: {
      it: "Tribunale federale, ATF 130 II 425: il GPS sui veicoli aziendali è ammesso solo se proporzionato, per ragioni legittime e con informazione preventiva, ed è vietato se mira unicamente o essenzialmente a sorvegliare il comportamento del lavoratore (OLT 3 art. 26, più severo del GDPR). In Svizzera le multe della nLPD (art. 60-65) arrivano a 250.000 CHF e colpiscono di regola la persona fisica responsabile; l'impresa risponde solo fino a 50.000 CHF, se individuare il responsabile è sproporzionato. Le multe riguardano violazioni dolose di obblighi precisi (per esempio non informare le persone interessate), non ogni violazione dell'OLT 3.",
      en: 'Federal Supreme Court, ATF 130 II 425: GPS on company vehicles is allowed only if proportionate, for legitimate reasons and with prior information, and it is forbidden if it aims solely or essentially at monitoring the worker behaviour (OLT 3 art. 26, stricter than the GDPR). In Switzerland the nLPD/revFADP fines (art. 60-65) reach 250,000 CHF and as a rule target the responsible natural person; the company is liable only up to 50,000 CHF, where identifying the responsible person would be disproportionate. The fines cover intentional breaches of specific duties (for example failing to inform the persons concerned), not every breach of OLT 3.',
      de: 'Bundesgericht, BGE 130 II 425: GPS an Firmenfahrzeugen ist nur zulässig, wenn es verhältnismäßig ist, aus legitimen Gründen erfolgt und vorab informiert wird, und es ist verboten, wenn es ausschließlich oder im Wesentlichen darauf abzielt, das Verhalten der Arbeitnehmenden zu überwachen (ArGV 3 Art. 26, strenger als die DSGVO). In der Schweiz erreichen die Bussen nach nDSG/revFADP (Art. 60-65) 250.000 CHF und treffen in der Regel die verantwortliche natürliche Person; das Unternehmen haftet nur bis 50.000 CHF, wenn die Ermittlung der verantwortlichen Person unverhältnismässig wäre. Die Bussen betreffen vorsätzliche Verstösse gegen bestimmte Pflichten (etwa die Informationspflicht), nicht jeden Verstoss gegen die ArGV 3.',
      fr: "Tribunal fédéral, ATF 130 II 425: le GPS sur les véhicules de l entreprise n est admis que s il est proportionné, pour des raisons légitimes et avec information préalable, et il est interdit s il vise uniquement ou essentiellement a surveiller le comportement du travailleur (OLT 3 art. 26, plus strict que le RGPD). En Suisse, les amendes de la nLPD/revFADP (art. 60 à 65) atteignent 250 000 CHF et frappent en principe la personne physique responsable ; l'entreprise ne répond que jusqu'à 50 000 CHF, si identifier le responsable serait disproportionné. Ces amendes visent des violations intentionnelles d'obligations précises (par exemple ne pas informer les personnes concernées), et non toute violation de l'OLT 3.",
      es: 'Tribunal Federal, ATF 130 II 425: el GPS en los vehículos de empresa solo se admite si es proporcionado, por razones legitimas y con información previa, y esta prohibido si tiene como único o esencial fin vigilar el comportamiento del trabajador (OLT 3 art. 26, mas estricto que el RGPD). En Suiza, las multas de la nLPD/revFADP (art. 60 a 65) alcanzan los 250.000 CHF y recaen en principio sobre la persona física responsable; la empresa responde solo hasta 50.000 CHF si identificar al responsable fuera desproporcionado. Las multas cubren infracciones dolosas de obligaciones concretas (por ejemplo, no informar a los afectados), no toda infracción de la OLT 3.',
      nl: 'Federaal Hooggerechtshof, ATF 130 II 425: gps op bedrijfsvoertuigen is alleen toegestaan als het evenredig is, om legitieme redenen en met voorafgaande informatie, en het is verboden als het uitsluitend of in wezen gericht is op het bewaken van het gedrag van de werknemer (OLT 3 art. 26, strenger dan de AVG). In Zwitserland reiken de boetes van de nLPD/revFADP (art. 60-65) tot 250.000 CHF en treffen ze in de regel de verantwoordelijke natuurlijke persoon; het bedrijf is slechts aansprakelijk tot 50.000 CHF als het identificeren van de verantwoordelijke onevenredig zou zijn. De boetes betreffen opzettelijke schendingen van bepaalde plichten (bijv. het niet informeren van betrokkenen), niet elke schending van de OLT 3.',
    },
    urlFonte: FONTE_NLPD.url,
    tipoImporto: 'massimale',
  },

  fonti: [
    FONTE_FDPIC_SORVEGLIANZA,
    FONTE_FDPIC_DATORE,
    FONTE_FDPIC_VALUTAZIONE,
    FONTE_NLPD,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
