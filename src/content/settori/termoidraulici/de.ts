import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App für Heizungsbauer: Einsatzberichte mit GPS und Fotos',
    description: 'Einsatzberichte mit GPS bei der Stempelung und Fotos jeder Anlage: die Nachweise, wenn der Kunde Heizkessel und ausgetauschte Teile bestreitet. 14 Tage kostenlos testen.',
  },
  hero: {
    badge: 'App für Heizungsinstallateure und Anlagenmechaniker SHK',
    h1_line1: 'App für Heizungsbauer:',
    h1_line2: 'Einsatzberichte mit GPS, Fotonachweise und weniger Streit.',
    subtitle: 'GeoTapp erfasst jeden Einsatz an Heizkesseln und Anlagen mit GPS, Fotos und festgehaltenen Uhrzeiten. Der Kunde bestreitet die ausgetauschten Teile? Sie zeigen den Einsatzbericht, statt mündlich zu diskutieren.',
    cta_primary: '14 Tage kostenlos testen',
    cta_note: 'Die Testphase verpflichtet Sie zu nichts. Keine Kreditkarte.',
  },
  pain: {
    title: 'Das Problem, das jeder Heizungsbetrieb kennt',
    items: [
      {
        title: 'Der Kunde bestreitet die am Heizkessel ausgetauschten Teile',
        desc: 'Er sagt, Sie hätten andere Bauteile als vereinbart getauscht, oder die Anlage sei schon so gewesen. Ohne Fotonachweise steht bei jedem Einwand Aussage gegen Aussage.',
      },
      {
        title: 'Keine Dokumentation der Anlage nach dem Einsatz',
        desc: 'Der Techniker hat die Reparatur beendet, aber es gibt weder Fotos noch eine technische Notiz. Tritt der Defekt wieder auf, lässt sich kaum nachvollziehen, was gemacht wurde.',
      },
      {
        title: 'Nacht- und Wochenendeinsätze sind nicht nachvollziehbar',
        desc: 'Heizungsstörungen melden sich zu ungünstigen Zeiten. Der Techniker rückt aus und löst das Problem, aber es bleibt nichts, was er dem Kunden oder der Versicherung zeigen kann.',
      },
    ],
  },
  workflow: {
    title: 'So funktioniert es in drei Schritten',
    subtitle: 'Von der Baustelle ins Büro, ohne Anrufe.',
    steps: [
      {
        title: 'Der Techniker erfasst den Einsatz vor Ort',
        desc: 'Mit GeoTapp TimeTracker stempelt er Beginn, Pausen und Ende mit Position, fotografiert Anlage und Heizkessel und ergänzt am Smartphone Notizen zu den ausgetauschten Teilen.',
      },
      {
        title: 'Das Büro sieht alles, sobald es ankommt',
        desc: 'GeoTapp Flow erhält die Daten, sobald das Telefon Netz hat. Die Leitung sieht Auftrag, zugewiesenen Techniker, Fortschritt und Fotonachweise, ohne anzurufen.',
      },
      {
        title: 'Der Einsatzbericht ist Ihr Nachweis',
        desc: 'Nach dem Einsatz erstellt das System einen versiegelten Bericht: Uhrzeit mit Position, Fotos von Anlage und Bauteilen, technische Notizen. Jede Änderung ist erkennbar. Der Kunde kann ihn eigenständig prüfen.',
      },
    ],
  },
  differenza: {
    title: 'App für Heizungsbauer: Erfassung oder überprüfbarer Nachweis?',
    subtitle: 'Die meisten Apps erfassen nur die Uhrzeit. GeoTapp liefert überprüfbare Nachweise.',
    rows: [
      {
        label: 'Was wird erfasst',
        competitor: 'Ein- und Ausstempelzeit',
        geotapp: 'Uhrzeit + Position bei der Stempelung + Anlagenfotos + ausgetauschte Bauteile',
      },
      {
        label: 'Bei Streitigkeiten',
        competitor: 'Nur Ihr Wort',
        geotapp: 'Versiegelter Bericht, jede Änderung erkennbar',
      },
      {
        label: 'Dokumentation des Einsatzes',
        competitor: 'Manuell oder fehlend',
        geotapp: 'Automatisch erstellt, mit GPS und Fotos',
      },
      {
        label: 'Wer kann prüfen',
        competitor: 'Nur Ihr Büro',
        geotapp: 'Sie, der Auftraggeber, ein Dritter',
      },
      {
        label: 'DSGVO',
        competitor: 'Oft fraglich',
        geotapp: 'Gebaut, um die Vorgaben der DSGVO einzuhalten, Vorlagen inklusive',
      },
    ],
  },
  prima_dopo: {
    title: 'Vor GeoTapp. Nach GeoTapp.',
    prima: [
      'Der Kunde bestreitet, dass das Ventil getauscht wurde.',
      'Sie haben weder Fotos noch dokumentiertes Material.',
      'Die Diskussion dauert Wochen. Sie riskieren, nicht bezahlt zu werden.',
      'Der Techniker hat nichts in der Hand, um sich zu verteidigen.',
    ],
    dopo: [
      'Der Kunde bestreitet, dass das Ventil getauscht wurde.',
      'Sie öffnen den Einsatzbericht: Foto des ausgebauten Bauteils, des neu eingebauten, Uhrzeit mit Position, technische Notizen.',
      'Sie schicken ihm den Bericht, und er prüft ihn selbst.',
      'Sie haben einen Nachweis zur Hand. Auch der Techniker hat etwas in der Hand.',
    ],
  },
  scenario: {
    title: 'Ein typischer Fall',
    body: 'Ein Kunde bestreitet den Austausch eines Brenners am Heizkessel und weigert sich, die Rechnung zu bezahlen. Mit GeoTapp öffnen Sie den Einsatzbericht: Foto des ausgebauten defekten Bauteils, des neu eingebauten, Uhrzeit mit Position des Einsatzes und technische Notizen des Technikers, alles automatisch am Smartphone vor Ort erstellt.',
    resolution: 'Statt Aussage gegen Aussage gibt es ein Dokument, das der Kunde selbst prüfen kann.',
  },
  features: {
    title: 'App für Heizungsbauer: Das finden Sie in GeoTapp.',
    items: [
      {
        title: 'Überprüfbare GPS-Stempelung',
        desc: 'Jeder Beginn, jede Pause und jedes Ende wird mit Position, Zeitstempel und Auftrag erfasst. Zum Vorzeigen beim Kunden und bei der Versicherung, wenn es darauf ankommt.',
      },
      {
        title: 'Fotonachweise der Anlage',
        desc: 'Der Techniker fotografiert während und nach dem Einsatz direkt in der App. Jedes Bild ist mit Position und Uhrzeit verknüpft und landet im versiegelten Bericht: Jede spätere Änderung ist erkennbar.',
      },
      {
        title: 'Automatische digitale Einsatzberichte',
        desc: 'Nach den Arbeiten ist der Einsatzbericht schon fertig: Stunden, Fotos, ausgetauschte Bauteile. Das Büro schickt ihn mit einem Klick aus Flow an den Kunden.',
      },
      {
        title: 'Aufträge und Notfälle verwalten',
        desc: 'Weisen Sie dringende Einsätze zu und verfolgen Sie den Fortschritt Auftrag für Auftrag.',
      },
      {
        title: 'Anwesenheitsexport für die Lohnabrechnung',
        desc: 'Exportieren Sie die Anwesenheiten des Monats als Excel- oder CSV-Datei, bereit für Ihre Lohnbuchhaltung oder Steuerberatung. Die Lohnabrechnung geht schnell von der Hand.',
      },
      {
        title: 'Auch Ihre Techniker haben einen Nachweis',
        desc: 'Ein überprüfbarer Bericht gibt dem Techniker etwas in die Hand gegen unbegründete Vorwürfe zu Material oder Uhrzeiten. Wer gut arbeitet, belegt es mit Daten.',
      },
    ],
  },
  cta_mid: {
    title: 'Sie möchten sehen, wie es bei einem echten Heizungseinsatz funktioniert?',
    body: 'Testen Sie es an einem echten Einsatz, vom Anlegen des Auftrags bis zum Einsatzbericht, den der Kunde erhält: 14 Tage kostenlos, ohne Kreditkarte.',
    cta: '14 Tage kostenlos testen',
  },
  trust: {
    title: 'Jede Änderung an unseren Berichten ist sichtbar. Ob von Ihnen oder von uns.',
    body: 'GeoTapp-Berichte erstellt das System im Moment des Einsatzes. Sobald ein Bericht versiegelt ist, bricht jede Korrektur einer Uhrzeit oder jedes Verschieben eines Fotos das Siegel, und die Prüfung meldet es.',
    badge: 'Von jedem prüfbar, ohne Zugang zu Ihrem Konto',
  },
  testimonial: {
    quote: 'Mit GeoTapp fotografieren meine Techniker die Anlage vor und nach jedem Einsatz. Wenn ein Kunde das Material bestreitet, haben wir die Fotos zum Vorzeigen.',
    author: 'Marco S.',
    role: 'Inhaber, Wohn- und Gewerbeheizungsanlagen',
  },
  faq: {
    title: 'Häufig gestellte Fragen',
    subtitle: 'Was uns Heizungsbauer am häufigsten fragen, bevor es losgeht.',
    items: [
      {
        q: 'Eignet sich GeoTapp als App für Heizungsbauer?',
        a: 'Ja. Heizungs- und Sanitärbetriebe nutzen GeoTapp für Einsätze an Heizkesseln, Heizungs- und Sanitäranlagen, mit Einsatzberichten mit GPS, Fotos und überprüfbaren Stunden.',
      },
      {
        q: 'Kann ich mit GeoTapp den Austausch von Bauteilen an Heizkesseln dokumentieren?',
        a: 'Ja. Der Techniker fotografiert in der App das ausgebaute und das eingebaute Bauteil. Jedes Bild ist mit GPS, Zeitstempel und Auftrag verknüpft und steht im versiegelten Einsatzbericht.',
      },
      {
        q: 'Hilft GeoTapp bei Streit mit Kunden über Anlagen?',
        a: 'Genau dafür ist es gedacht: Uhrzeit mit Position, Fotonachweise der Bauteile und versiegelter Einsatzbericht geben Ihnen ein Dokument zum Vorzeigen, wenn ein Einwand unbegründet ist.',
      },
    ],
  },
  cta: {
    title: 'Jeder gut gemachte Heizungseinsatz verdient einen Nachweis. GeoTapp erstellt ihn.',
    subtitle: 'Überprüfbare Berichte, Position bei den Stempelungen, Fotos im Bericht versiegelt.',
    primary: '14 Tage kostenlos testen',
    secondary: 'Preise ansehen',
  },
  pricing_hint: {
    label: 'TimeTracker-Plätze ab',
    per: 'pro Mitarbeiter und Monat, zzgl. Flow-Tarif ab 39 € im Monat',
    note: '14 Tage kostenlos testen',
  },
  schema_sector_name: 'Heizungsinstallateure',
  schema_faq: [
    {
      question: 'Funktioniert GeoTapp als App für Heizungsbauer?',
      answer: 'Ja. GeoTapp ist die App für Heizungsbauer und Anlagenmechaniker, die jeden Einsatz an Heizkesseln und Anlagen mit GPS, Fotos und festgehaltenen Uhrzeiten erfasst. Der Techniker stempelt vor Ort, das Büro sieht alles, sobald es ankommt, und der Kunde erhält einen versiegelten Einsatzbericht.',
    },
    {
      question: 'Wie versiegele ich einen Einsatz am Heizkessel mit GeoTapp?',
      answer: 'Der Techniker erfasst in GeoTapp Beginn und Ende mit Position, die Fotos der ausgetauschten Bauteile und die technischen Notizen. Das System erstellt einen versiegelten Einsatzbericht, den der Kunde eigenständig prüfen kann.',
    },
    {
      question: 'Hilft GeoTapp, mehrere Heizungsteams bei verschiedenen Einsätzen zu steuern?',
      answer: 'Ja. Mit GeoTapp Flow koordiniert der Inhaber mehrere Teams, weist dringende Aufträge zu, verfolgt den Stand der Einsätze und sammelt Fotonachweise von allen aktiven Baustellen, sobald sie hochgeladen werden.',
    },
    {
      question: 'Helfen GeoTapp-Einsatzberichte bei Streit über Heizungsanlagen?',
      answer: 'GeoTapp-Einsatzberichte sind mit GPS, Zeitstempel und Fotonachweisen versiegelt. Der Kunde prüft sie selbst. Sie helfen zu zeigen, dass das Dokument nicht verändert wurde; allein sind sie weder ein absoluter Nachweis des Sachverhalts noch eine Rechtsberatung.',
    },
  ],
};

export default content;
