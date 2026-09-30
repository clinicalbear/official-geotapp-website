/**
 * Scheda-paese Ungheria per la risorsa "GPS sui lavoratori in UE".
 *
 * Contenuti basati su fonti primarie verificate e citate nella sezione "Fonti":
 * art. 11/A del Codice del lavoro ungherese (Mt.), guida del NAIH sui trattamenti
 * sul luogo di lavoro (incluso il GPS), lista NAIH dei trattamenti che richiedono
 * una valutazione d'impatto, decisione NAIH del caso Auchan (NAIH/2018/412/2/H)
 * e GDPR.
 *
 * L'Ungheria ha un'unica autorita nazionale, il NAIH: nessuna ripartizione
 * regionale. Nessun numero, URL o autorita e' inventato qui.
 */

import type { SchedaPaese } from '../types';

// URL delle fonti primarie citate.
const FONTE_MT_11A = {
  titolo: 'Codice del lavoro (Mt.), art. 9 (diritti della persona) e art. 11/A (controllo dei lavoratori)',
  url: 'https://net.jogtar.hu/jogszabaly?docid=a1200001.tv',
};
const FONTE_NAIH_GUIDA = {
  titolo: 'NAIH, guida sui trattamenti sul luogo di lavoro (novembre 2016, precedente al GDPR), par. 5 sul GPS',
  url: 'https://www.naih.hu/files/2016_11_15_Tajekoztato_munkahelyi_adatkezelesek.pdf',
};
const FONTE_NAIH_DPIA = {
  titolo:
    "NAIH, lista dei trattamenti che richiedono una valutazione d'impatto",
  url: 'https://www.naih.hu/hatasvizsgalati-lista',
};
const FONTE_NAIH_AUCHAN = {
  titolo: 'NAIH, sanzione Auchan (monitoraggio dei dipendenti)',
  url: 'https://www.naih.hu/files/NAIH-2018-412-H_hatarozat.pdf',
};
const FONTE_NAIH = {
  titolo: 'NAIH (Garante ungherese), pagina ufficiale',
  url: 'https://www.naih.hu',
};
const FONTE_GDPR = {
  titolo: 'Regolamento UE 2016/679 (GDPR)',
  url: 'https://eur-lex.europa.eu/eli/reg/2016/679/oj',
};

export const ungheria: SchedaPaese = {
  codiceISO: 'HU',
  slugCanonico: 'ungheria',
  nome: 'Ungheria',
  nomi: {
    it: 'Ungheria',
    en: 'Hungary',
    'en-us': 'Hungary',
    'en-gb': 'Hungary',
    'en-au': 'Hungary',
    'en-ie': 'Hungary',
    'en-ca': 'Hungary',
    de: 'Ungarn',
    nl: 'Hongarije',
    fr: 'Hongrie',
    es: 'Hungría',
    pt: 'Hungria',
    da: 'Ungarn',
    sv: 'Ungern',
    nb: 'Ungarn',
    ru: 'Венгрия',
  },
  bandiera: '🇭🇺',
  federale: false,
  stato: 'scheda-senza-pdf',

  autoritaCompetente: {
    ente: {
      it: 'NAIH (Garante ungherese per la protezione dei dati)',
      en: 'NAIH (Hungarian Data Protection Authority)',
      de: 'NAIH (Ungarische Datenschutzbehörde)',
      fr: 'NAIH (Autorité hongroise de protection des données)',
      es: 'NAIH (Autoridad húngara de protección de datos)',
      nl: 'NAIH (Hongaarse gegevensbeschermingsautoriteit)',
      pt: 'NAIH (Autoridade húngara de proteção de dados)',
      da: 'NAIH (Ungarsk databeskyttelsesmyndighed)',
      sv: 'NAIH (Ungerska dataskyddsmyndigheten)',
      nb: 'NAIH (Ungarsk datatilsyn)',
      ru: 'NAIH (Венгерский орган по защите данных)',
    },
    portale: FONTE_NAIH.url,
    urlFonte: FONTE_NAIH.url,
    verificatoIl: '2026-09-30',
    note: {
      it: "L'Ungheria ha un'unica autorità nazionale, il NAIH; nessuna ripartizione regionale.",
      en: 'Hungary has a single national authority, the NAIH; there is no regional breakdown.',
      de: 'Ungarn hat eine einzige nationale Behörde, die NAIH; es gibt keine regionale Aufteilung.',
      fr: "La Hongrie dispose d'une seule autorité nationale, la NAIH; il n'y a pas de répartition régionale.",
      es: 'Hungría tiene una única autoridad nacional, la NAIH; no hay reparto regional.',
      nl: 'Hongarije heeft één nationale autoriteit, de NAIH; er is geen regionale verdeling.',
    },
  },

  checklist: [
    {
      voce: {
        it: 'Informazione scritta e preventiva ai lavoratori sul monitoraggio e i mezzi tecnici (Codice del lavoro art. 11/A)',
        en: 'Prior written information to workers on the monitoring and the technical means (Labour Code art. 11/A)',
        de: 'Vorherige schriftliche Information der Arbeitnehmer über die Überwachung und die technischen Mittel (Arbeitsgesetzbuch Art. 11/A)',
        fr: 'Information écrite et préalable des travailleurs sur la surveillance et les moyens techniques (Code du travail art. 11/A)',
        es: 'Información escrita y previa a los trabajadores sobre la vigilancia y los medios técnicos (Código del trabajo art. 11/A)',
        nl: 'Voorafgaande schriftelijke informatie aan werknemers over de monitoring en de technische middelen (Arbeidswetboek art. 11/A)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il lavoratore può essere controllato solo per condotte connesse al rapporto di lavoro; il datore può usare mezzi tecnici, ma deve informarlo prima e per iscritto.',
        en: 'The worker may be monitored only for conduct connected with the employment relationship; the employer may use technical means but must inform the worker beforehand and in writing.',
        de: 'Der Arbeitnehmer darf nur wegen Verhaltensweisen kontrolliert werden, die mit dem Arbeitsverhältnis zusammenhängen; der Arbeitgeber darf technische Mittel einsetzen, muss ihn jedoch vorab und schriftlich informieren.',
        fr: "Le travailleur ne peut être contrôlé que pour des comportements liés à la relation de travail; l'employeur peut utiliser des moyens techniques, mais il doit l'informer au préalable et par écrit.",
        es: 'El trabajador solo puede ser controlado por conductas relacionadas con la relación laboral; el empleador puede usar medios técnicos, pero debe informarle antes y por escrito.',
        nl: 'De werknemer mag alleen worden gecontroleerd voor gedragingen die verband houden met de arbeidsrelatie; de werkgever mag technische middelen gebruiken, maar moet hem vooraf en schriftelijk informeren.',
      },
      fonte: FONTE_MT_11A,
    },
    {
      voce: {
        it: 'Il monitoraggio riguarda solo condotte connesse al rapporto di lavoro; le restrizioni ai diritti della persona solo se strettamente necessarie e proporzionate (art. 11/A e art. 9)',
        en: 'The monitoring concerns only conduct connected with the employment relationship; restrictions on personality rights only where strictly necessary and proportionate (art. 11/A and art. 9)',
        de: 'Die Überwachung betrifft nur Verhaltensweisen, die mit dem Arbeitsverhältnis zusammenhängen; Einschränkungen der Persönlichkeitsrechte nur, wenn unbedingt erforderlich und verhältnismäßig (Art. 11/A und Art. 9)',
        fr: 'La surveillance ne porte que sur des comportements liés à la relation de travail; les restrictions aux droits de la personnalité ne sont admises que si elles sont strictement nécessaires et proportionnées (art. 11/A et art. 9)',
        es: 'La vigilancia se refiere solo a conductas relacionadas con la relación laboral; las restricciones a los derechos de la personalidad solo si son estrictamente necesarias y proporcionadas (art. 11/A y art. 9)',
        nl: 'De monitoring betreft alleen gedragingen die verband houden met de arbeidsrelatie; beperkingen van persoonlijkheidsrechten alleen als ze strikt noodzakelijk en evenredig zijn (art. 11/A en art. 9)',
      },
      risposta: 'si',
      dettaglio: {
        it: "Il lavoratore e' controllabile solo nell'ambito della condotta connessa al rapporto di lavoro (art. 11/A c. 1). Una restrizione dei suoi diritti della persona e' ammessa solo se strettamente necessaria per un motivo direttamente legato alla finalità' del rapporto è proporzionata; il datore deve informarlo prima e per iscritto su modalità', condizioni e durata prevista e sulle circostanze che provano necessità' e proporzionalità' (art. 9 c. 2). Sui dispositivi informatici forniti dal datore può' guardare solo i dati connessi al lavoro (art. 11/A c. 3).",
        en: 'The worker may be monitored only within conduct connected with the employment relationship (art. 11/A par. 1). A restriction of personality rights is allowed only if strictly necessary for a reason directly connected with the purpose of the employment relationship and proportionate; the employer must inform the worker beforehand and in writing of the manner, conditions and expected duration and of the circumstances showing necessity and proportionality (art. 9 par. 2). On IT devices provided by the employer it may look only at work-related data (art. 11/A par. 3).',
        de: 'Der Arbeitnehmer darf nur im Rahmen seines mit dem Arbeitsverhältnis zusammenhängenden Verhaltens kontrolliert werden (Art. 11/A Abs. 1). Eine Einschränkung seiner Persönlichkeitsrechte ist nur zulässig, wenn sie aus einem unmittelbar mit dem Zweck des Arbeitsverhältnisses zusammenhängenden Grund unbedingt erforderlich und verhältnismäßig ist; der Arbeitgeber muss ihn vorab schriftlich über Art, Bedingungen und voraussichtliche Dauer sowie über die Umstände informieren, die Erforderlichkeit und Verhältnismäßigkeit belegen (Art. 9 Abs. 2). Auf vom Arbeitgeber bereitgestellten IT-Geräten darf er nur arbeitsbezogene Daten einsehen (Art. 11/A Abs. 3).',
        fr: "Le travailleur ne peut être contrôlé que dans le cadre de son comportement lié à la relation de travail (art. 11/A par. 1). Une restriction de ses droits de la personnalité n'est admise que si elle est strictement nécessaire pour un motif directement lié à la finalité de la relation de travail et proportionnée; l'employeur doit l'informer au préalable et par écrit des modalités, des conditions et de la durée prévue ainsi que des circonstances établissant la nécessité et la proportionnalité (art. 9 par. 2). Sur les appareils informatiques fournis par l'employeur, il ne peut consulter que les données liées au travail (art. 11/A par. 3).",
        es: 'El trabajador solo puede ser controlado dentro de su conducta relacionada con la relación laboral (art. 11/A apdo. 1). Una restricción de sus derechos de la personalidad solo es admisible si es estrictamente necesaria por un motivo directamente ligado a la finalidad de la relación laboral y proporcionada; el empleador debe informarle antes y por escrito de la forma, las condiciones y la duración prevista y de las circunstancias que demuestran la necesidad y la proporcionalidad (art. 9 apdo. 2). En los dispositivos informáticos facilitados por el empleador solo puede consultar los datos relacionados con el trabajo (art. 11/A apdo. 3).',
        nl: 'De werknemer mag alleen worden gecontroleerd binnen zijn gedrag dat verband houdt met de arbeidsrelatie (art. 11/A lid 1). Een beperking van zijn persoonlijkheidsrechten is alleen toegestaan als ze strikt noodzakelijk is om een reden die rechtstreeks met het doel van de arbeidsrelatie samenhangt en evenredig is; de werkgever moet hem vooraf schriftelijk informeren over de wijze, de voorwaarden en de verwachte duur en over de omstandigheden die noodzaak en evenredigheid aantonen (art. 9 lid 2). Op door de werkgever verstrekte IT-apparatuur mag hij alleen werkgerelateerde gegevens inzien (art. 11/A lid 3).',
      },
      fonte: FONTE_MT_11A,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorità prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: "Autorisation préalable d'une autorité avant l'installation",
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit vóór installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: 'Non serve un\'autorizzazione preventiva del NAIH; il datore valuta da se base giuridica e proporzionalità prima dell\'introduzione.',
        en: 'No prior authorisation from the NAIH is required; the employer assesses the legal basis and proportionality itself before introduction.',
        de: 'Eine vorherige Genehmigung der NAIH ist nicht erforderlich; der Arbeitgeber prüft die Rechtsgrundlage und die Verhältnismäßigkeit vor der Einführung selbst.',
        fr: "Aucune autorisation préalable de la NAIH n'est nécessaire; l'employeur évalue lui-même la base juridique et la proportionnalité avant l'introduction.",
        es: 'No se necesita una autorización previa del NAIH; el empleador evalúa por sí mismo la base jurídica y la proporcionalidad antes de la introducción.',
        nl: 'Er is geen voorafgaande toestemming van de NAIH vereist; de werkgever beoordeelt zelf de rechtsgrondslag en de evenredigheid vóór de invoering.',
      },
      fonte: FONTE_GDPR,
    },
    {
      voce: {
        it: 'Base = interesse legittimo con test di bilanciamento documentato; GPS solo in orario, non fuori orario, con opt-out',
        en: 'Basis = legitimate interest with a documented balancing test; GPS only during working hours, not off duty, with opt-out',
        de: 'Grundlage = berechtigtes Interesse mit dokumentierter Abwägungsprüfung; GPS nur während der Arbeitszeit, nicht außerhalb der Dienstzeit, mit Opt-out',
        fr: "Base = intérêt légitime avec test de mise en balance documenté; GPS uniquement pendant les heures de travail, pas hors service, avec opt-out",
        es: 'Base = interés legítimo con test de ponderación documentado; GPS solo en horario de trabajo, no fuera de servicio, con opt-out',
        nl: 'Grondslag = gerechtvaardigd belang met een gedocumenteerde belangenafweging; GPS alleen tijdens werktijd, niet buiten diensttijd, met opt-out',
      },
      risposta: 'si',
      dettaglio: {
        it: 'La base e l\'interesse legittimo, non il consenso; il datore deve svolgere prima il test di bilanciamento. Per il NAIH il GPS localizza il veicolo per il lavoro, non segue il lavoratore: solo in orario, niente controllo fuori orario, e il lavoratore deve poterlo spegnere.',
        en: 'The basis is legitimate interest, not consent; the employer must first carry out the balancing test. For the NAIH the GPS locates the vehicle for work, it does not track the worker: only during working hours, no monitoring off duty, and the worker must be able to switch it off.',
        de: 'Die Grundlage ist das berechtigte Interesse, nicht die Einwilligung; der Arbeitgeber muss zuerst die Abwägungsprüfung durchführen. Für die NAIH ortet das GPS das Fahrzeug für die Arbeit, es verfolgt nicht den Arbeitnehmer: nur während der Arbeitszeit, keine Überwachung außerhalb der Dienstzeit, und der Arbeitnehmer muss es ausschalten können.',
        fr: "La base est l'intérêt légitime, et non le consentement; l'employeur doit d'abord effectuer le test de mise en balance. Pour la NAIH, le GPS localise le véhicule pour le travail, il ne suit pas le travailleur: uniquement pendant les heures de travail, aucun contrôle hors service, et le travailleur doit pouvoir le désactiver.",
        es: 'La base es el interés legítimo, no el consentimiento; el empleador debe realizar primero el test de ponderación. Para el NAIH el GPS localiza el vehículo para el trabajo, no sigue al trabajador: solo en horario de trabajo, sin control fuera de servicio, y el trabajador debe poder apagarlo.',
        nl: 'De grondslag is het gerechtvaardigd belang, niet de toestemming; de werkgever moet eerst de belangenafweging uitvoeren. Voor de NAIH lokaliseert het GPS het voertuig voor het werk, het volgt de werknemer niet: alleen tijdens werktijd, geen controle buiten diensttijd, en de werknemer moet het kunnen uitschakelen.',
      },
      fonte: FONTE_NAIH_GUIDA,
    },
    {
      voce: {
        it: "Valutazione d'impatto (DPIA) per il monitoraggio della posizione e dell'attività dei lavoratori (lista NAIH)",
        en: 'Impact assessment (DPIA) for monitoring the location and activity of workers (NAIH list)',
        de: 'Datenschutz-Folgenabschätzung (DSFA) für die Überwachung von Standort und Tätigkeit der Arbeitnehmer (NAIH-Liste)',
        fr: "Analyse d'impact (AIPD) pour la surveillance de la localisation et de l'activité des travailleurs (liste NAIH)",
        es: 'Evaluación de impacto (EIPD) para la vigilancia de la ubicación y la actividad de los trabajadores (lista NAIH)',
        nl: 'Gegevensbeschermingseffectbeoordeling (DPIA) voor de monitoring van de locatie en de activiteit van werknemers (NAIH-lijst)',
      },
      risposta: 'si',
      dettaglio: {
        it: "La lista NAIH include il monitoraggio del lavoro dei dipendenti e il trattamento di dati di posizione che indica un monitoraggio sistematico tra i casi che richiedono una valutazione d'impatto.",
        en: "The NAIH list includes the monitoring of employees' work and the processing of location data that indicates systematic monitoring among the cases that require an impact assessment.",
        de: 'Die NAIH-Liste führt die Überwachung der Arbeit der Beschäftigten und die Verarbeitung von Standortdaten, die auf eine systematische Überwachung hindeutet, unter den Fällen auf, die eine Folgenabschätzung erfordern.',
        fr: "La liste NAIH inclut la surveillance du travail des salariés et le traitement de données de localisation indiquant une surveillance systématique parmi les cas qui requièrent une analyse d'impact.",
        es: 'La lista NAIH incluye la vigilancia del trabajo de los empleados y el tratamiento de datos de ubicación que indica una vigilancia sistemática entre los casos que requieren una evaluación de impacto.',
        nl: 'De NAIH-lijst omvat de monitoring van het werk van werknemers en de verwerking van locatiegegevens die op systematische monitoring wijst onder de gevallen die een effectbeoordeling vereisen.',
      },
      fonte: FONTE_NAIH_DPIA,
    },
  ],

  procedura: [
    {
      passo: 1,
      descrizione: {
        it: "Svolgi il test di bilanciamento dell'interesse legittimo prima dell'introduzione.",
        en: 'Carry out the legitimate interest balancing test before introduction.',
        de: 'Führen Sie vor der Einführung die Abwägungsprüfung des berechtigten Interesses durch.',
        fr: "Effectuez le test de mise en balance de l'intérêt légitime avant l'introduction.",
        es: 'Realice el test de ponderación del interés legítimo antes de la introducción.',
        nl: 'Voer vóór de invoering de belangenafweging van het gerechtvaardigd belang uit.',
      },
    },
    {
      passo: 2,
      descrizione: {
        it: 'Informa i lavoratori per iscritto e in anticipo sul monitoraggio e sui mezzi tecnici (art. 11/A + art. 13 GDPR).',
        en: 'Inform the workers in writing and in advance about the monitoring and the technical means (art. 11/A + art. 13 GDPR).',
        de: 'Informieren Sie die Arbeitnehmer schriftlich und im Voraus über die Überwachung und die technischen Mittel (Art. 11/A + Art. 13 DSGVO).',
        fr: 'Informez les travailleurs par écrit et à l\'avance sur la surveillance et les moyens techniques (art. 11/A + art. 13 RGPD).',
        es: 'Informe a los trabajadores por escrito y con antelación sobre la vigilancia y los medios técnicos (art. 11/A + art. 13 RGPD).',
        nl: 'Informeer de werknemers schriftelijk en vooraf over de monitoring en de technische middelen (art. 11/A + art. 13 AVG).',
      },
    },
    {
      passo: 3,
      descrizione: {
        it: "Svolgi la valutazione d'impatto (DPIA) per il monitoraggio della posizione dei lavoratori.",
        en: 'Carry out the impact assessment (DPIA) for monitoring the location of workers.',
        de: 'Führen Sie die Datenschutz-Folgenabschätzung (DSFA) für die Überwachung des Standorts der Arbeitnehmer durch.',
        fr: "Effectuez l'analyse d'impact (AIPD) pour la surveillance de la localisation des travailleurs.",
        es: 'Realice la evaluación de impacto (EIPD) para la vigilancia de la ubicación de los trabajadores.',
        nl: 'Voer de gegevensbeschermingseffectbeoordeling (DPIA) uit voor de monitoring van de locatie van werknemers.',
      },
    },
    {
      passo: 4,
      descrizione: {
        it: 'Limita il GPS alla localizzazione del veicolo per il lavoro: solo in orario, niente controllo fuori orario.',
        en: 'Limit the GPS to locating the vehicle for work: only during working hours, no monitoring off duty.',
        de: 'Beschränken Sie das GPS auf die Ortung des Fahrzeugs für die Arbeit: nur während der Arbeitszeit, keine Überwachung außerhalb der Dienstzeit.',
        fr: 'Limitez le GPS à la localisation du véhicule pour le travail: uniquement pendant les heures de travail, aucun contrôle hors service.',
        es: 'Límite el GPS a la localización del vehículo para el trabajo: solo en horario de trabajo, sin control fuera de servicio.',
        nl: 'Beperk het GPS tot het lokaliseren van het voertuig voor het werk: alleen tijdens werktijd, geen controle buiten diensttijd.',
      },
    },
    {
      passo: 5,
      descrizione: {
        it: 'Prevedi un opt-out per spegnere il GPS quando il veicolo resta al lavoratore fuori orario.',
        en: 'Provide an opt-out to switch off the GPS when the vehicle stays with the worker off duty.',
        de: 'Sehen Sie ein Opt-out vor, um das GPS auszuschalten, wenn das Fahrzeug außerhalb der Dienstzeit beim Arbeitnehmer bleibt.',
        fr: 'Prévoyez un opt-out pour désactiver le GPS lorsque le véhicule reste au travailleur hors service.',
        es: 'Prevea un opt-out para apagar el GPS cuando el vehículo permanece con el trabajador fuera de servicio.',
        nl: 'Voorzie een opt-out om het GPS uit te schakelen wanneer het voertuig buiten diensttijd bij de werknemer blijft.',
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
      ente: 'NAIH',
      portale: FONTE_NAIH.url,
      urlFonte: FONTE_NAIH.url,
      verificatoIl: '2026-09-30',
    },
  ],

  modelloPdf: null,

  sanzioneMax: {
    importo: {
      it: '15.000.000 HUF (circa 37.500 euro)',
      en: '15,000,000 HUF (about 37,500 euros)',
      de: '15.000.000 HUF (etwa 37.500 Euro)',
      fr: '15 000 000 HUF (environ 37 500 euros)',
      es: '15.000.000 HUF (unos 37.500 euros)',
      nl: '15.000.000 HUF (ongeveer 37.500 euro)',
    },
    casoCitato: {
      it: "NAIH contro Auchan Magyarorszag (gennaio 2018, caso NAIH/2018/412/2/H): videosorveglianza sul luogo di lavoro senza una base giuridica adeguata, informazione carente ai lavoratori e violazione della limitazione della finalità. Multa 15.000.000 HUF. Non è un caso di GPS, ma e la sanzione di riferimento del NAIH sul monitoraggio dei dipendenti.",
      en: 'NAIH versus Auchan Magyarorszag (January 2018, case NAIH/2018/412/2/H): video surveillance in the workplace without an adequate legal basis, inadequate information to workers and breach of the purpose limitation principle. Fine 15,000,000 HUF. It is not a GPS case, but it is the NAIH reference penalty on employee monitoring.',
      de: 'NAIH gegen Auchan Magyarorszag (Januar 2018, Fall NAIH/2018/412/2/H): Videoüberwachung am Arbeitsplatz ohne angemessene Rechtsgrundlage, unzureichende Information der Arbeitnehmer und Verstoß gegen die Zweckbindung. Geldbuße 15.000.000 HUF. Es handelt sich nicht um einen GPS-Fall, aber es ist die maßgebliche Sanktion der NAIH zur Überwachung von Beschäftigten.',
      fr: "NAIH contre Auchan Magyarorszag (janvier 2018, affaire NAIH/2018/412/2/H): vidéosurveillance sur le lieu de travail sans base juridique adéquate, information insuffisante des travailleurs et violation de la limitation des finalités. Amende de 15 000 000 HUF. Ce n'est pas une affaire de GPS, mais c'est la sanction de référence de la NAIH en matière de surveillance des salariés.",
      es: 'NAIH contra Auchan Magyarorszag (enero de 2018, caso NAIH/2018/412/2/H): videovigilancia en el lugar de trabajo sin una base jurídica adecuada, información insuficiente a los trabajadores y vulneración de la limitación de la finalidad. Multa de 15.000.000 HUF. No es un caso de GPS, pero es la sanción de referencia del NAIH sobre la vigilancia de los empleados.',
      nl: 'NAIH tegen Auchan Magyarorszag (januari 2018, zaak NAIH/2018/412/2/H): videobewaking op de werkplek zonder een adequate rechtsgrondslag, gebrekkige informatie aan werknemers en schending van de doelbinding. Boete 15.000.000 HUF. Het is geen GPS-zaak, maar het is de referentiesanctie van de NAIH inzake de monitoring van werknemers.',
    },
    urlFonte: FONTE_NAIH_AUCHAN.url,
    tipoImporto: 'caso-affine',
  },

  fonti: [
    FONTE_MT_11A,
    FONTE_NAIH_GUIDA,
    FONTE_NAIH_DPIA,
    FONTE_NAIH_AUCHAN,
    FONTE_NAIH,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-09-30',
};
