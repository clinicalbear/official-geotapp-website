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
 * Per i datori privati vigila l'autorita' federale (PFPDT/FDPIC); le autorita'
 * cantonali coprono gli enti pubblici cantonali. Nessun numero, URL o autorita'
 * e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_ATF_130_II_425 = {
  titolo:
    'Tribunale federale, ATF 130 II 425 (GPS sui veicoli dei dipendenti; cita OLT 3 art. 26)',
  url: 'https://www.bger.ch/ext/eurospider/live/fr/php/aza/http/index.php?highlight_docid=atf://130-II-425:fr&lang=fr&type=show_document&zoom=YES',
};
const FONTE_FDPIC_SORVEGLIANZA = {
  titolo: 'PFPDT/FDPIC, mezzi tecnici di sorveglianza sul luogo di lavoro',
  url: 'https://www.edoeb.admin.ch/fr/moyens-techniques-de-surveillance-sur-le-lieu-de-travail',
};
const FONTE_FDPIC_DATORE = {
  titolo:
    'PFPDT/FDPIC, trattamento dei dati da parte del datore di lavoro (CO art. 328b)',
  url: 'https://www.edoeb.admin.ch/fr/traitement-des-donnees-par-lemployeur',
};
const FONTE_FDPIC_VALUTAZIONE = {
  titolo:
    "PFPDT/FDPIC, valutazione d'impatto sulla protezione dei dati (nLPD art. 22)",
  url: 'https://www.edoeb.admin.ch/fr/analyse-dimpact-relative-a-la-protection-des-donnees-personnelles',
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
    ente: 'PFPDT / FDPIC (Preposto federale alla protezione dei dati e alla trasparenza)',
    portale: FONTE_FDPIC_SORVEGLIANZA.url,
    urlFonte: FONTE_FDPIC_SORVEGLIANZA.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "La Svizzera e' fuori dall'UE. Per i datori privati e' competente l'autorita' federale (PFPDT/FDPIC); le autorita' cantonali coprono gli enti pubblici cantonali.",
      en: 'Switzerland is outside the EU. For private employers the competent body is the federal authority (PFPDT/FDPIC); the cantonal authorities cover cantonal public bodies.',
      de: 'Die Schweiz liegt ausserhalb der EU. Fuer private Arbeitgeber ist die Bundesbehoerde (EDOEB/FDPIC) zustaendig; die kantonalen Behoerden decken die kantonalen oeffentlichen Stellen ab.',
      fr: "La Suisse est en dehors de l'UE. Pour les employeurs prives, l'autorite competente est l'autorite federale (PFPDT/FDPIC); les autorites cantonales couvrent les organismes publics cantonaux.",
      es: 'Suiza esta fuera de la UE. Para los empleadores privados, la autoridad competente es la autoridad federal (PFPDT/FDPIC); las autoridades cantonales cubren los organismos publicos cantonales.',
      nl: 'Zwitserland ligt buiten de EU. Voor particuliere werkgevers is de federale autoriteit (FDPIC/PFPDT) bevoegd; de kantonale autoriteiten dekken de kantonale openbare instanties.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Divieto di sistemi destinati a sorvegliare il comportamento dei lavoratori (OLT 3, art. 26)',
        en: 'Ban on systems intended to monitor the behaviour of workers (OLT 3, art. 26)',
        de: 'Verbot von Systemen, die das Verhalten der Arbeitnehmenden ueberwachen sollen (ArGV 3, Art. 26)',
        fr: 'Interdiction des systemes destines a surveiller le comportement des travailleurs (OLT 3, art. 26)',
        es: 'Prohibicion de sistemas destinados a vigilar el comportamiento de los trabajadores (OLT 3, art. 26)',
        nl: 'Verbod op systemen die bedoeld zijn om het gedrag van werknemers te bewaken (ArGV 3, art. 26)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Regola cardine svizzera, piu' severa del GDPR: e' vietato usare sistemi destinati a sorvegliare il comportamento dei lavoratori sul posto di lavoro. Se servono per altri motivi (sicurezza, produzione, organizzazione), vanno concepiti in modo da non ledere salute e liberta' di movimento, e un sistema e' vietato se mira unicamente o essenzialmente a sorvegliare il comportamento.",
        en: 'A cornerstone Swiss rule, stricter than the GDPR: it is forbidden to use systems intended to monitor the behaviour of workers at the workplace. If they are needed for other reasons (safety, production, organisation), they must be designed so as not to harm health and freedom of movement, and a system is forbidden if it aims solely or essentially at monitoring behaviour.',
        de: 'Eine zentrale Schweizer Regel, strenger als die DSGVO: Es ist verboten, Systeme einzusetzen, die das Verhalten der Arbeitnehmenden am Arbeitsplatz ueberwachen sollen. Werden sie aus anderen Gruenden benoetigt (Sicherheit, Produktion, Organisation), muessen sie so gestaltet sein, dass sie Gesundheit und Bewegungsfreiheit nicht beeintraechtigen, und ein System ist verboten, wenn es ausschliesslich oder im Wesentlichen darauf abzielt, das Verhalten zu ueberwachen.',
        fr: "Regle cardinale suisse, plus stricte que le RGPD: il est interdit d'utiliser des systemes destines a surveiller le comportement des travailleurs sur le lieu de travail. S'ils sont necessaires pour d'autres raisons (securite, production, organisation), ils doivent etre concus de maniere a ne pas porter atteinte a la sante et a la liberte de mouvement, et un systeme est interdit s'il vise uniquement ou essentiellement a surveiller le comportement.",
        es: 'Regla cardinal suiza, mas estricta que el RGPD: esta prohibido usar sistemas destinados a vigilar el comportamiento de los trabajadores en el lugar de trabajo. Si se necesitan por otros motivos (seguridad, produccion, organizacion), deben concebirse de modo que no lesionen la salud ni la libertad de movimiento, y un sistema esta prohibido si tiene como unico o esencial fin vigilar el comportamiento.',
        nl: 'Een centrale Zwitserse regel, strenger dan de AVG: het is verboden systemen te gebruiken die bedoeld zijn om het gedrag van werknemers op de werkplek te bewaken. Als ze om andere redenen nodig zijn (veiligheid, productie, organisatie), moeten ze zo zijn ontworpen dat ze de gezondheid en de bewegingsvrijheid niet schaden, en een systeem is verboden als het uitsluitend of in wezen gericht is op het bewaken van gedrag.',
      },
      fonte: FONTE_ATF_130_II_425,
    },
    {
      voce: {
        it: "Trattamento dei dati solo se riguarda l'idoneita' al lavoro o e' necessario al contratto (CO art. 328b)",
        en: 'Data processing only if it concerns suitability for the job or is necessary for the contract (CO art. 328b)',
        de: 'Datenbearbeitung nur, wenn sie die Eignung fuer die Arbeit betrifft oder fuer den Vertrag erforderlich ist (OR Art. 328b)',
        fr: "Traitement des donnees uniquement s'il concerne l'aptitude au travail ou est necessaire au contrat (CO art. 328b)",
        es: 'Tratamiento de datos solo si se refiere a la aptitud para el trabajo o es necesario para el contrato (CO art. 328b)',
        nl: 'Gegevensverwerking alleen als die de geschiktheid voor het werk betreft of noodzakelijk is voor het contract (OR art. 328b)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il datore puo' trattare i dati del lavoratore solo se riguardano la sua idoneita' all'impiego o sono necessari all'esecuzione del contratto, nel rispetto di buona fede e proporzionalita'.",
        en: 'The employer may process the worker data only if it concerns their suitability for employment or is necessary for performing the contract, in compliance with good faith and proportionality.',
        de: 'Der Arbeitgeber darf die Daten der Arbeitnehmenden nur bearbeiten, wenn sie deren Eignung fuer das Arbeitsverhaeltnis betreffen oder zur Durchfuehrung des Vertrags erforderlich sind, unter Wahrung von Treu und Glauben und Verhaeltnismaessigkeit.',
        fr: "L'employeur ne peut traiter les donnees du travailleur que si elles concernent son aptitude a l'emploi ou sont necessaires a l'execution du contrat, dans le respect de la bonne foi et de la proportionnalite.",
        es: 'El empleador solo puede tratar los datos del trabajador si se refieren a su aptitud para el empleo o son necesarios para la ejecucion del contrato, respetando la buena fe y la proporcionalidad.',
        nl: 'De werkgever mag de gegevens van de werknemer alleen verwerken als die betrekking hebben op zijn geschiktheid voor de baan of noodzakelijk zijn voor de uitvoering van het contract, met inachtneming van goede trouw en evenredigheid.',
      },
      fonte: FONTE_FDPIC_DATORE,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita' prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorgaengige Bewilligung einer Behoerde vor der Installation',
        fr: "Autorisation prealable d'une autorite avant l'installation",
        es: 'Autorizacion previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit voordat u installeert',
      },
      risposta: 'no',
      dettaglio: {
        it: "Non serve un'autorizzazione preventiva del PFPDT; il datore valuta da se' liceita' e proporzionalita'.",
        en: 'No prior authorisation from the PFPDT/FDPIC is needed; the employer assesses lawfulness and proportionality on its own.',
        de: 'Eine vorgaengige Bewilligung des EDOEB/FDPIC ist nicht erforderlich; der Arbeitgeber beurteilt Rechtmaessigkeit und Verhaeltnismaessigkeit selbst.',
        fr: "Aucune autorisation prealable du PFPDT/FDPIC n'est requise; l'employeur evalue lui-meme la liceite et la proportionnalite.",
        es: 'No se necesita una autorizacion previa del PFPDT/FDPIC; el empleador evalua por si mismo la licitud y la proporcionalidad.',
        nl: 'Een voorafgaande toestemming van de FDPIC/PFPDT is niet nodig; de werkgever beoordeelt zelf de rechtmatigheid en de evenredigheid.',
      },
      fonte: FONTE_FDPIC_SORVEGLIANZA,
    },
    {
      voce: {
        it: 'Informazione e consultazione preventiva dei lavoratori; niente sorveglianza permanente del comportamento',
        en: 'Prior information and consultation of workers; no permanent monitoring of behaviour',
        de: 'Vorgaengige Information und Anhoerung der Arbeitnehmenden; keine dauerhafte Verhaltensueberwachung',
        fr: 'Information et consultation prealables des travailleurs; aucune surveillance permanente du comportement',
        es: 'Informacion y consulta previas de los trabajadores; ninguna vigilancia permanente del comportamiento',
        nl: 'Voorafgaande informatie en raadpleging van de werknemers; geen permanente bewaking van het gedrag',
      },
      risposta: 'si',
      dettaglio: {
        it: "I lavoratori vanno informati in anticipo; e' vietata una sorveglianza continua, periodica o a campione volta a controllare il comportamento; va scelto il mezzo proporzionato e meno lesivo.",
        en: 'Workers must be informed in advance; continuous, periodic or sample-based surveillance aimed at monitoring behaviour is forbidden; the proportionate and least intrusive means must be chosen.',
        de: 'Die Arbeitnehmenden muessen im Voraus informiert werden; eine dauernde, periodische oder stichprobenartige Ueberwachung zur Kontrolle des Verhaltens ist verboten; es ist das verhaeltnismaessige und am wenigsten beeintraechtigende Mittel zu waehlen.',
        fr: "Les travailleurs doivent etre informes au prealable; une surveillance continue, periodique ou par echantillonnage visant a controler le comportement est interdite; il faut choisir le moyen proportionne et le moins attentatoire.",
        es: 'Los trabajadores deben ser informados con antelacion; esta prohibida una vigilancia continua, periodica o por muestreo destinada a controlar el comportamiento; debe elegirse el medio proporcionado y menos lesivo.',
        nl: 'De werknemers moeten vooraf worden geinformeerd; een doorlopende, periodieke of steekproefsgewijze controle om het gedrag te bewaken is verboden; er moet voor het evenredige en minst ingrijpende middel worden gekozen.',
      },
      fonte: FONTE_FDPIC_SORVEGLIANZA,
    },
    {
      voce: {
        it: "Valutazione d'impatto (AIPD, nLPD art. 22) se il trattamento comporta un rischio elevato",
        en: 'Impact assessment (DPIA, nLPD/revFADP art. 22) if the processing entails a high risk',
        de: 'Datenschutz-Folgenabschaetzung (DSFA, nDSG/revFADP Art. 22), wenn die Bearbeitung ein hohes Risiko mit sich bringt',
        fr: "Analyse d'impact (AIPD, nLPD/revFADP art. 22) si le traitement comporte un risque eleve",
        es: 'Evaluacion de impacto (EIPD, nLPD/revFADP art. 22) si el tratamiento conlleva un riesgo elevado',
        nl: 'Effectbeoordeling (DPIA, nLPD/revFADP art. 22) als de verwerking een hoog risico met zich meebrengt',
      },
      risposta: 'si',
      dettaglio: {
        it: "La nLPD impone una valutazione d'impatto quando il trattamento e' suscettibile di comportare un rischio elevato per la personalita' o i diritti fondamentali, come la sorveglianza sistematica.",
        en: 'The nLPD/revFADP requires an impact assessment when the processing is likely to entail a high risk to personality or fundamental rights, such as systematic surveillance.',
        de: 'Das nDSG/revFADP verlangt eine Folgenabschaetzung, wenn die Bearbeitung voraussichtlich ein hohes Risiko fuer die Persoenlichkeit oder die Grundrechte mit sich bringt, etwa eine systematische Ueberwachung.',
        fr: "La nLPD/revFADP impose une analyse d'impact lorsque le traitement est susceptible d'entrainer un risque eleve pour la personnalite ou les droits fondamentaux, comme une surveillance systematique.",
        es: 'La nLPD/revFADP exige una evaluacion de impacto cuando el tratamiento puede conllevar un riesgo elevado para la personalidad o los derechos fundamentales, como la vigilancia sistematica.',
        nl: 'De nLPD/revFADP vereist een effectbeoordeling wanneer de verwerking waarschijnlijk een hoog risico inhoudt voor de persoonlijkheid of de grondrechten, zoals systematische bewaking.',
      },
      fonte: FONTE_FDPIC_VALUTAZIONE,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: 'Verifica che il sistema non sia destinato a sorvegliare il comportamento dei lavoratori (OLT 3 art. 26): se lo e\', e\' vietato.',
        en: 'Check that the system is not intended to monitor the behaviour of workers (OLT 3 art. 26): if it is, it is forbidden.',
        de: 'Pruefen Sie, dass das System nicht dazu bestimmt ist, das Verhalten der Arbeitnehmenden zu ueberwachen (ArGV 3 Art. 26): ist dies der Fall, ist es verboten.',
        fr: "Verifiez que le systeme n'est pas destine a surveiller le comportement des travailleurs (OLT 3 art. 26): si c'est le cas, il est interdit.",
        es: 'Compruebe que el sistema no este destinado a vigilar el comportamiento de los trabajadores (OLT 3 art. 26): si lo esta, esta prohibido.',
        nl: 'Controleer dat het systeem niet bedoeld is om het gedrag van werknemers te bewaken (ArGV 3 art. 26): als dat zo is, is het verboden.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: "Accertati che i dati trattati riguardino l'idoneita' al lavoro o siano necessari al contratto (CO art. 328b).",
        en: 'Make sure the data processed concerns suitability for the job or is necessary for the contract (CO art. 328b).',
        de: 'Stellen Sie sicher, dass die bearbeiteten Daten die Eignung fuer die Arbeit betreffen oder fuer den Vertrag erforderlich sind (OR Art. 328b).',
        fr: "Assurez-vous que les donnees traitees concernent l'aptitude au travail ou sont necessaires au contrat (CO art. 328b).",
        es: 'Asegurese de que los datos tratados se refieran a la aptitud para el trabajo o sean necesarios para el contrato (CO art. 328b).',
        nl: 'Zorg ervoor dat de verwerkte gegevens betrekking hebben op de geschiktheid voor het werk of noodzakelijk zijn voor het contract (OR art. 328b).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: 'Informa e consulta in anticipo i lavoratori.',
        en: 'Inform and consult workers in advance.',
        de: 'Informieren und konsultieren Sie die Arbeitnehmenden im Voraus.',
        fr: "Informez et consultez les travailleurs au prealable.",
        es: 'Informe y consulte a los trabajadores con antelacion.',
        nl: 'Informeer en raadpleeg de werknemers vooraf.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (AIPD) se il trattamento comporta un rischio elevato.",
        en: 'Carry out the impact assessment (DPIA) if the processing entails a high risk.',
        de: 'Fuehren Sie die Datenschutz-Folgenabschaetzung (DSFA) durch, wenn die Bearbeitung ein hohes Risiko mit sich bringt.',
        fr: "Realisez l'analyse d'impact (AIPD) si le traitement comporte un risque eleve.",
        es: 'Realice la evaluacion de impacto (EIPD) si el tratamiento conlleva un riesgo elevado.',
        nl: 'Voer de effectbeoordeling (DPIA) uit als de verwerking een hoog risico met zich meebrengt.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Configura il sistema in modo proporzionato e differito (non un tracciamento in tempo reale della persona).',
        en: 'Configure the system in a proportionate and deferred way (not real-time tracking of the person).',
        de: 'Konfigurieren Sie das System verhaeltnismaessig und zeitversetzt (keine Echtzeitverfolgung der Person).',
        fr: "Configurez le systeme de maniere proportionnee et differee (pas un suivi en temps reel de la personne).",
        es: 'Configure el sistema de forma proporcionada y diferida (no un seguimiento en tiempo real de la persona).',
        nl: 'Configureer het systeem op een evenredige en uitgestelde manier (geen realtime tracking van de persoon).',
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
      ente: 'PFPDT/FDPIC',
      portale: FONTE_FDPIC_DATORE.url,
      urlFonte: FONTE_FDPIC_DATORE.url,
      verificatoIl: '2026-06-15',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: "fino a 250.000 CHF, a carico della persona fisica responsabile (non l'azienda), inflitte dai tribunali cantonali",
      en: 'up to 250,000 CHF, borne by the responsible natural person (not the company), imposed by the cantonal courts',
      de: 'bis zu 250.000 CHF, zulasten der verantwortlichen natuerlichen Person (nicht des Unternehmens), verhaengt durch die kantonalen Gerichte',
      fr: 'jusqu a 250 000 CHF, a la charge de la personne physique responsable (et non de l entreprise), prononcee par les tribunaux cantonaux',
      es: 'hasta 250.000 CHF, a cargo de la persona fisica responsable (no de la empresa), impuestas por los tribunales cantonales',
      nl: 'tot 250.000 CHF, ten laste van de verantwoordelijke natuurlijke persoon (niet het bedrijf), opgelegd door de kantonale rechtbanken',
    },
    casoCitato: {
      it: "Tribunale federale, ATF 130 II 425: il GPS sui veicoli aziendali e' ammesso solo se proporzionato, per ragioni legittime e con informazione preventiva, ed e' vietato se mira unicamente o essenzialmente a sorvegliare il comportamento del lavoratore (OLT 3 art. 26, piu' severo del GDPR). In Svizzera le multe della nLPD arrivano a 250.000 CHF e colpiscono la persona fisica responsabile, non l'impresa.",
      en: 'Federal Supreme Court, ATF 130 II 425: GPS on company vehicles is allowed only if proportionate, for legitimate reasons and with prior information, and it is forbidden if it aims solely or essentially at monitoring the worker behaviour (OLT 3 art. 26, stricter than the GDPR). In Switzerland the nLPD/revFADP fines reach 250,000 CHF and target the responsible natural person, not the company.',
      de: 'Bundesgericht, BGE 130 II 425: GPS an Firmenfahrzeugen ist nur zulaessig, wenn es verhaeltnismaessig ist, aus legitimen Gruenden erfolgt und vorab informiert wird, und es ist verboten, wenn es ausschliesslich oder im Wesentlichen darauf abzielt, das Verhalten der Arbeitnehmenden zu ueberwachen (ArGV 3 Art. 26, strenger als die DSGVO). In der Schweiz erreichen die Bussen nach nDSG/revFADP 250.000 CHF und treffen die verantwortliche natuerliche Person, nicht das Unternehmen.',
      fr: "Tribunal federal, ATF 130 II 425: le GPS sur les vehicules de l entreprise n est admis que s il est proportionne, pour des raisons legitimes et avec information prealable, et il est interdit s il vise uniquement ou essentiellement a surveiller le comportement du travailleur (OLT 3 art. 26, plus strict que le RGPD). En Suisse, les amendes de la nLPD/revFADP atteignent 250 000 CHF et frappent la personne physique responsable, et non l entreprise.",
      es: 'Tribunal Federal, ATF 130 II 425: el GPS en los vehiculos de empresa solo se admite si es proporcionado, por razones legitimas y con informacion previa, y esta prohibido si tiene como unico o esencial fin vigilar el comportamiento del trabajador (OLT 3 art. 26, mas estricto que el RGPD). En Suiza, las multas de la nLPD/revFADP alcanzan los 250.000 CHF y recaen sobre la persona fisica responsable, no sobre la empresa.',
      nl: 'Federaal Hooggerechtshof, ATF 130 II 425: gps op bedrijfsvoertuigen is alleen toegestaan als het evenredig is, om legitieme redenen en met voorafgaande informatie, en het is verboden als het uitsluitend of in wezen gericht is op het bewaken van het gedrag van de werknemer (OLT 3 art. 26, strenger dan de AVG). In Zwitserland reiken de boetes van de nLPD/revFADP tot 250.000 CHF en treffen ze de verantwoordelijke natuurlijke persoon, niet het bedrijf.',
    },
    urlFonte: FONTE_ATF_130_II_425.url,
  },

  fonti: [
    FONTE_ATF_130_II_425,
    FONTE_FDPIC_SORVEGLIANZA,
    FONTE_FDPIC_DATORE,
    FONTE_FDPIC_VALUTAZIONE,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
