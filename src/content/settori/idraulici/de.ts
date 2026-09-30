import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App für Sanitär- und Heizungsbetriebe | GeoTapp Einsatzberichte mit GPS',
    description: 'App für Sanitär und Heizung: Einsatzberichte mit Position und Fotos, Anlagenfotos und Berichte, in denen jede Änderung erkennbar ist. Zum Vorzeigen, wenn jemand etwas bestreitet. Kostenlos testen.',
  },
  hero: {
    badge: 'App für Klempner, Heizungsinstallateure und Anlagenbauer',
    h1_line1: 'App für Sanitär und Heizung:',
    h1_line2: 'Einsatzberichte mit GPS, Fotonachweise und weniger Streit.',
    subtitle: 'GeoTapp erfasst jeden Sanitäreinsatz mit GPS, Fotos und festgehaltenen Uhrzeiten. Der Kunde bestreitet etwas? Sie zeigen den Einsatzbericht, statt mündlich zu diskutieren.',
    cta_primary: '14 Tage kostenlos testen',
    cta_note: 'Die Testphase verpflichtet Sie zu nichts. Keine Kreditkarte.',
  },
  pain: {
    title: 'Das Problem, das jeder Sanitärbetrieb kennt',
    items: [
      {
        title: 'Der Kunde bestreitet den Einsatz oder das verbaute Material',
        desc: 'Er sagt, die Reparatur sei nicht ausgeführt worden oder das Material sei ein anderes gewesen. Ohne überprüfbare Nachweise steht bei jedem Einwand Aussage gegen Aussage.',
      },
      {
        title: 'Keine Dokumentation der Anlage nach dem Einsatz',
        desc: 'Der Techniker hat die Arbeit erledigt, aber es gibt weder Fotos noch eine technische Notiz. Bei einem späteren Schaden lässt sich kaum noch nachvollziehen, was gemacht wurde.',
      },
      {
        title: 'Notfälle bleiben ohne Unterlagen',
        desc: 'Notfalleinsätze sind am schwersten zu dokumentieren. Der Techniker fährt sofort los, arbeitet ohne Papier, und dann gibt es nichts, was er dem Kunden zeigen kann.',
      },
    ],
  },
  workflow: {
    title: 'So funktioniert es in drei Schritten',
    subtitle: 'Von der Baustelle ins Büro, ohne Anrufe.',
    steps: [
      {
        title: 'Der Techniker erfasst den Einsatz vor Ort',
        desc: 'Mit GeoTapp TimeTracker stempelt er Beginn, Pausen und Ende mit Position, fotografiert die Sanitäranlage und ergänzt technische Notizen am Smartphone.',
      },
      {
        title: 'Das Büro sieht alles, sobald es ankommt',
        desc: 'GeoTapp Flow erhält die Daten, sobald das Telefon Netz hat. Die Leitung sieht Auftrag, zugewiesenen Techniker, Fortschritt und Fotonachweise, ohne anzurufen.',
      },
      {
        title: 'Der Einsatzbericht ist Ihr Nachweis',
        desc: 'Nach dem Einsatz erstellt das System einen versiegelten Bericht: Uhrzeit mit Position, Anlagenfotos, verwendetes Material, technische Notizen. Jede Änderung ist erkennbar. Der Kunde kann ihn eigenständig prüfen.',
      },
    ],
  },
  differenza: {
    title: 'App für Sanitär und Heizung: Erfassung oder überprüfbarer Nachweis?',
    subtitle: 'Die meisten Apps erfassen nur die Uhrzeit. GeoTapp liefert überprüfbare Nachweise.',
    rows: [
      {
        label: 'Was wird erfasst',
        competitor: 'Ein- und Ausstempelzeit',
        geotapp: 'Uhrzeit + Position bei der Stempelung + Anlagenfotos + Material und Notizen',
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
      'Der Kunde bestreitet, dass die Reparatur ausgeführt wurde.',
      'Sie haben weder Fotos noch überprüfbare Uhrzeiten.',
      'Die Diskussion dauert Wochen. Sie riskieren, nicht bezahlt zu werden.',
      'Der Techniker hat nichts in der Hand, um sich zu verteidigen.',
    ],
    dopo: [
      'Der Kunde bestreitet, dass die Reparatur ausgeführt wurde.',
      'Sie öffnen den Einsatzbericht: Anlagenfotos mit GPS, versiegelte Uhrzeit, technische Notizen.',
      'Sie schicken ihm den Bericht, und er prüft ihn selbst.',
      'Sie haben einen Nachweis zur Hand. Auch der Techniker hat etwas in der Hand.',
    ],
  },
  scenario: {
    title: 'Ein typischer Fall',
    body: 'Ein Kunde bestreitet einen dringenden Heizungseinsatz und weigert sich zu zahlen, weil die Arbeiten angeblich nicht abgeschlossen wurden. Mit GeoTapp öffnen Sie den Einsatzbericht: Fotos der Anlage vorher und nachher, Uhrzeit mit Position bei Ankunft und Ende der Arbeiten, technische Notizen zu den ausgetauschten Teilen, alles automatisch am Smartphone des Technikers vor Ort erstellt.',
    resolution: 'Statt Aussage gegen Aussage gibt es ein Dokument, das der Kunde selbst prüfen kann.',
  },
  features: {
    title: 'App für Sanitär und Heizung: Das finden Sie in GeoTapp.',
    items: [
      {
        title: 'Überprüfbare GPS-Stempelung',
        desc: 'Jeder Beginn, jede Pause und jedes Ende wird mit Position, Zeitstempel und Auftrag erfasst. Zum Vorzeigen beim Kunden, wenn es darauf ankommt.',
      },
      {
        title: 'Versiegelte Fotos von Sanitäranlagen',
        desc: 'Der Techniker fotografiert vor und nach dem Einsatz. Jedes Bild ist mit GPS und Zeitstempel verknüpft: Jede spätere Änderung ist erkennbar.',
      },
      {
        title: 'Automatische digitale Einsatzberichte',
        desc: 'Nach den Arbeiten ist der Einsatzbericht schon fertig: Stunden, Fotos, technische Notizen und Material. Das Büro schickt ihn mit einem Klick aus Flow an den Kunden.',
      },
      {
        title: 'Notfälle und planmäßige Wartung',
        desc: 'Verwalten Sie Notfalleinsätze und regelmäßige Wartungen im selben Bereich. Jeder Einsatz hat seinen Auftrag und seine Historie.',
      },
      {
        title: 'Anwesenheitsexport für die Lohnabrechnung',
        desc: 'Exportieren Sie die Anwesenheiten des Monats als Excel- oder CSV-Datei, bereit für Ihre Lohnbuchhaltung oder Steuerberatung. Die Lohnabrechnung geht schnell von der Hand.',
      },
      {
        title: 'Ihre Installateure sind geschützt',
        desc: 'Ein überprüfbarer Bericht gibt dem Techniker etwas in die Hand gegen unbegründete Vorwürfe wegen nicht ausgeführter Arbeiten oder nicht verwendeten Materials.',
      },
    ],
  },
  cta_mid: {
    title: 'Sie möchten sehen, wie es bei einem echten Sanitäreinsatz funktioniert?',
    body: 'Testen Sie es an einem echten Einsatz, vom Anlegen des Auftrags bis zum Einsatzbericht, den der Kunde erhält: 14 Tage kostenlos, ohne Kreditkarte.',
    cta: '14 Tage kostenlos testen',
  },
  trust: {
    title: 'In unseren Berichten ist jede Änderung sichtbar, auch wenn Sie sie vornehmen oder wir.',
    body: 'GeoTapp-Berichte erstellt das System im Moment des Einsatzes. Sobald ein Bericht versiegelt ist, bricht jede Korrektur einer Uhrzeit oder jedes Verschieben eines Fotos das Siegel, und die Prüfung meldet es.',
    badge: 'Von jedem prüfbar, ohne Zugang zu Ihrem Konto',
  },
  testimonial: {
    quote: 'Früher habe ich Stunden damit verbracht, Kunden die Einsätze zu erklären. Jetzt schicke ich den Einsatzbericht, und der Kunde prüft ihn selbst.',
    author: 'Robert K.',
    role: 'Inhaber, Sanitär- und Heizungsbetrieb',
  },
  faq: {
    title: 'Häufig gestellte Fragen',
    subtitle: 'Was uns Sanitär- und Heizungsbetriebe am häufigsten fragen, bevor es losgeht.',
    items: [
      {
        q: 'Eignet sich GeoTapp als App für Sanitär- und Heizungsbetriebe?',
        a: 'Ja. Sanitär- und Heizungsbetriebe nutzen GeoTapp für Einsätze, Einsatzberichte, Stunden und Fotonachweise der Anlagen. Es funktioniert sowohl für Notfälle als auch für planmäßige Wartungen.',
      },
      {
        q: 'Kann ich GeoTapp nutzen, um Sanitär- und Heizungseinsätze zu dokumentieren?',
        a: 'Ja. Der Techniker fotografiert vor und nach dem Einsatz direkt in der App. Jedes Bild ist mit GPS, Zeitstempel und Auftrag verknüpft und steht in einem Einsatzbericht, in dem jede Änderung erkennbar ist.',
      },
      {
        q: 'Deckt GeoTapp Notfalleinsätze und planmäßige Wartung ab?',
        a: 'Ja. Jede Einsatzart, Notfall, Wartung, Abnahme, hat in GeoTapp ihren eigenen Auftrag. Die Historie jeder Anlage ist immer mit allen Fotonachweisen verfügbar.',
      },
    ],
  },
  cta: {
    title: 'Jeder gut gemachte Einsatz verdient einen Nachweis. GeoTapp erstellt ihn.',
    subtitle: 'Überprüfbare Berichte, Position bei den Stempelungen, Fotos im Bericht versiegelt.',
    primary: '14 Tage kostenlos testen',
    secondary: 'Preise ansehen',
  },
  pricing_hint: {
    label: 'TimeTracker-Plätze ab',
    per: 'pro Mitarbeiter und Monat, zzgl. Flow-Tarif ab 39 € im Monat',
    note: '14 Tage kostenlos testen',
  },
  schema_sector_name: 'Klempner und Heizungstechniker',
  schema_faq: [
    {
      question: 'Funktioniert GeoTapp als App für Sanitär- und Heizungsbetriebe?',
      answer: 'Ja. GeoTapp ist die App für Sanitär- und Heizungsbetriebe, die jeden Einsatz mit GPS, Fotos und festgehaltenen Uhrzeiten erfasst. Der Techniker stempelt vor Ort, das Büro sieht alles, sobald es ankommt, und der Kunde erhält einen versiegelten Einsatzbericht.',
    },
    {
      question: 'Wie versiegele ich einen Sanitäreinsatz mit GeoTapp?',
      answer: 'Der Techniker erfasst in GeoTapp Beginn und Ende mit Position, die Fotos der Anlage vorher und nachher und die technischen Notizen zum verwendeten Material. Das System erstellt einen versiegelten Einsatzbericht, den der Kunde eigenständig prüfen kann.',
    },
    {
      question: 'Deckt GeoTapp Notfalleinsätze und planmäßige Wartung ab?',
      answer: 'Ja. Notfalleinsätze und regelmäßige Wartungen laufen über dieselbe App. Jeder Einsatz erzeugt eine Historie mit Fotonachweisen sowie mit Uhrzeiten und Positionen, die bei den Stempelungen erfasst wurden.',
    },
    {
      question: 'Werden GeoTapp-Einsatzberichte bei Streit akzeptiert?',
      answer: 'GeoTapp-Einsatzberichte sind mit GPS, Zeitstempel und Fotonachweisen versiegelt. Der Kunde prüft sie selbst. Sie helfen zu zeigen, dass das Dokument nicht verändert wurde; allein sind sie weder ein absoluter Nachweis des Sachverhalts noch eine Rechtsberatung.',
    },
  ],
};

export default content;
