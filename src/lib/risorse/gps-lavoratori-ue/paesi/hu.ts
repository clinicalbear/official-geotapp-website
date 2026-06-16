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
  titolo: 'Codice del lavoro (Mt.), art. 11/A (controllo dei lavoratori)',
  url: 'https://net.jogtar.hu/jogszabaly?docid=a1200001.tv',
};
const FONTE_NAIH_GUIDA = {
  titolo: 'NAIH, guida sui trattamenti sul luogo di lavoro (GPS)',
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
    ente: 'NAIH (Garante ungherese per la protezione dei dati)',
    portale: FONTE_NAIH.url,
    urlFonte: FONTE_NAIH.url,
    verificatoIl: '2026-06-15',
    note: {
      it: "L'Ungheria ha un'unica autorita nazionale, il NAIH; nessuna ripartizione regionale.",
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
        it: 'Il lavoratore puo essere controllato solo per condotte connesse al rapporto di lavoro; il datore puo usare mezzi tecnici, ma deve informarlo prima e per iscritto.',
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
        it: 'Il monitoraggio riguarda solo condotte connesse al rapporto di lavoro, non la vita privata (art. 11/A)',
        en: 'The monitoring concerns only conduct connected with the employment relationship, not private life (art. 11/A)',
        de: 'Die Überwachung betrifft nur Verhaltensweisen, die mit dem Arbeitsverhältnis zusammenhängen, nicht das Privatleben (Art. 11/A)',
        fr: 'La surveillance ne porte que sur des comportements liés à la relation de travail, et non sur la vie privée (art. 11/A)',
        es: 'La vigilancia se refiere solo a conductas relacionadas con la relación laboral, no a la vida privada (art. 11/A)',
        nl: 'De monitoring betreft alleen gedragingen die verband houden met de arbeidsrelatie, niet het privéleven (art. 11/A)',
      },
      risposta: 'si',
      dettaglio: {
        it: 'Il controllo non puo ledere la dignita ne riguardare la vita privata del lavoratore; sui dispositivi aziendali il datore puo accedere solo ai dati connessi al lavoro.',
        en: 'The monitoring may not impair the dignity nor concern the private life of the worker; on company devices the employer may access only work-related data.',
        de: 'Die Kontrolle darf weder die Würde verletzen noch das Privatleben des Arbeitnehmers betreffen; auf Firmengeräten darf der Arbeitgeber nur auf arbeitsbezogene Daten zugreifen.',
        fr: "Le contrôle ne peut porter atteinte à la dignité ni concerner la vie privée du travailleur; sur les appareils de l'entreprise, l'employeur ne peut accéder qu'aux données liées au travail.",
        es: 'El control no puede lesionar la dignidad ni referirse a la vida privada del trabajador; en los dispositivos de la empresa el empleador solo puede acceder a los datos relacionados con el trabajo.',
        nl: 'De controle mag de waardigheid niet aantasten en mag geen betrekking hebben op het privéleven van de werknemer; op bedrijfsapparaten mag de werkgever alleen toegang krijgen tot werkgerelateerde gegevens.',
      },
      fonte: FONTE_MT_11A,
    },
    {
      voce: {
        it: "Autorizzazione preventiva di un'autorita prima di installare",
        en: 'Prior authorisation from an authority before installing',
        de: 'Vorherige Genehmigung einer Behörde vor der Installation',
        fr: "Autorisation préalable d'une autorité avant l'installation",
        es: 'Autorización previa de una autoridad antes de instalar',
        nl: 'Voorafgaande toestemming van een autoriteit vóór installatie',
      },
      risposta: 'no',
      dettaglio: {
        it: 'Non serve un\'autorizzazione preventiva del NAIH; il datore valuta da se base giuridica e proporzionalita prima dell\'introduzione.',
        en: 'No prior authorisation from the NAIH is required; the employer assesses the legal basis and proportionality itself before introduction.',
        de: 'Eine vorherige Genehmigung der NAIH ist nicht erforderlich; der Arbeitgeber prüft die Rechtsgrundlage und die Verhältnismäßigkeit vor der Einführung selbst.',
        fr: "Aucune autorisation préalable de la NAIH n'est nécessaire; l'employeur évalue lui-même la base juridique et la proportionnalité avant l'introduction.",
        es: 'No se necesita una autorización previa del NAIH; el empleador evalúa por sí mismo la base jurídica y la proporcionalidad antes de la introducción.',
        nl: 'Er is geen voorafgaande toestemming van de NAIH vereist; de werkgever beoordeelt zelf de rechtsgrondslag en de evenredigheid vóór de invoering.',
      },
      fonte: FONTE_NAIH_GUIDA,
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
        it: "Valutazione d'impatto (DPIA) per il monitoraggio della posizione e dell'attivita dei lavoratori (lista NAIH)",
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
        es: 'Limite el GPS a la localización del vehículo para el trabajo: solo en horario de trabajo, sin control fuera de servicio.',
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
      ente: 'NAIH',
      portale: FONTE_NAIH.url,
      urlFonte: FONTE_NAIH.url,
      verificatoIl: '2026-06-15',
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
      it: "NAIH contro Auchan Magyarorszag (gennaio 2018, caso NAIH/2018/412/2/H): videosorveglianza sul luogo di lavoro senza una base giuridica adeguata, informazione carente ai lavoratori e violazione della limitazione della finalita. Multa 15.000.000 HUF. Non e un caso di GPS, ma e la sanzione di riferimento del NAIH sul monitoraggio dei dipendenti.",
      en: 'NAIH versus Auchan Magyarorszag (January 2018, case NAIH/2018/412/2/H): video surveillance in the workplace without an adequate legal basis, inadequate information to workers and breach of the purpose limitation principle. Fine 15,000,000 HUF. It is not a GPS case, but it is the NAIH reference penalty on employee monitoring.',
      de: 'NAIH gegen Auchan Magyarorszag (Januar 2018, Fall NAIH/2018/412/2/H): Videoüberwachung am Arbeitsplatz ohne angemessene Rechtsgrundlage, unzureichende Information der Arbeitnehmer und Verstoß gegen die Zweckbindung. Geldbuße 15.000.000 HUF. Es handelt sich nicht um einen GPS-Fall, aber es ist die maßgebliche Sanktion der NAIH zur Überwachung von Beschäftigten.',
      fr: "NAIH contre Auchan Magyarorszag (janvier 2018, affaire NAIH/2018/412/2/H): vidéosurveillance sur le lieu de travail sans base juridique adéquate, information insuffisante des travailleurs et violation de la limitation des finalités. Amende de 15 000 000 HUF. Ce n'est pas une affaire de GPS, mais c'est la sanction de référence de la NAIH en matière de surveillance des salariés.",
      es: 'NAIH contra Auchan Magyarorszag (enero de 2018, caso NAIH/2018/412/2/H): videovigilancia en el lugar de trabajo sin una base jurídica adecuada, información insuficiente a los trabajadores y vulneración de la limitación de la finalidad. Multa de 15.000.000 HUF. No es un caso de GPS, pero es la sanción de referencia del NAIH sobre la vigilancia de los empleados.',
      nl: 'NAIH tegen Auchan Magyarorszag (januari 2018, zaak NAIH/2018/412/2/H): videobewaking op de werkplek zonder een adequate rechtsgrondslag, gebrekkige informatie aan werknemers en schending van de doelbinding. Boete 15.000.000 HUF. Het is geen GPS-zaak, maar het is de referentiesanctie van de NAIH inzake de monitoring van werknemers.',
    },
    urlFonte: FONTE_NAIH_AUCHAN.url,
  },

  fonti: [
    FONTE_MT_11A,
    FONTE_NAIH_GUIDA,
    FONTE_NAIH_DPIA,
    FONTE_NAIH_AUCHAN,
    FONTE_NAIH,
    FONTE_GDPR,
  ],

  aggiornatoIl: '2026-06-15',
};
