import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App für Elektriker: Einsatzbericht mit Uhrzeit, Position und Fotos',
    description: 'Ein Tipp bei der Ankunft, einer beim Verlassen, die Fotos vom Verteiler hängen am Einsatz. Der Bericht ist fertig, wenn Sie losfahren. 14 Tage kostenlos.',
  },
  hero: {
    badge: 'App für Elektriker und Elektroinstallateure',
    h1_line1: 'App für Elektriker:',
    h1_line2: 'Einsatzberichte mit GPS, Fotonachweise und weniger Streit.',
    subtitle: 'GeoTapp erfasst jeden Elektroeinsatz mit GPS, Fotos und festgehaltenen Uhrzeiten. Der Kunde bestreitet etwas? Sie zeigen den Einsatzbericht, statt mündlich zu diskutieren.',
    cta_primary: '14 Tage kostenlos testen',
    cta_note: 'Die Testphase verpflichtet Sie zu nichts. Keine Kreditkarte.',
  },
  pain: {
    title: 'Das Problem, das jeder Elektrobetrieb kennt',
    items: [
      {
        title: 'Der Kunde bestreitet den Einsatz oder die Uhrzeit',
        desc: 'Er sagt, der Techniker sei nicht da gewesen oder die Anlage sei nicht fertig geworden. Ohne überprüfbare Nachweise zieht sich der Streit über Wochen.',
      },
      {
        title: 'Keine Dokumentation der Anlage nach dem Einsatz',
        desc: 'Der Techniker hat die Arbeit erledigt, aber es gibt weder Fotos noch eine technische Notiz. Was gemacht wurde, lässt sich kaum noch nachvollziehen.',
      },
      {
        title: 'Das Büro weiß nicht, wo die Techniker sind',
        desc: 'Anrufe, Nachrichten, Unsicherheit. Jedes Mal, wenn Sie einen Kunden über den Stand der Arbeiten informieren müssen, müssen Sie erst den Techniker erreichen.',
      },
    ],
  },
  workflow: {
    title: 'So funktioniert es in drei Schritten',
    subtitle: 'Von der Baustelle ins Büro, ohne Anrufe.',
    steps: [
      {
        title: 'Der Techniker erfasst den Einsatz vor Ort',
        desc: 'Mit GeoTapp TimeTracker stempelt er Beginn, Pausen und Ende mit Position, fotografiert die Anlage und ergänzt technische Notizen am Smartphone.',
      },
      {
        title: 'Das Büro sieht alles, sobald es ankommt',
        desc: 'GeoTapp Flow erhält die Daten, sobald das Telefon Netz hat. Die Leitung sieht Auftrag, zugewiesenen Techniker, Fortschritt und Fotonachweise, ohne anzurufen.',
      },
      {
        title: 'Der Einsatzbericht ist Ihr Nachweis',
        desc: 'Nach dem Einsatz erstellt das System einen versiegelten Bericht: Uhrzeit mit Position, Anlagenfotos, technische Notizen. Jede Änderung ist erkennbar. Der Kunde kann ihn eigenständig prüfen.',
      },
    ],
  },
  differenza: {
    title: 'App für Elektriker: Erfassung oder überprüfbarer Nachweis?',
    subtitle: 'Die meisten Apps erfassen nur die Uhrzeit. GeoTapp liefert überprüfbare Nachweise.',
    rows: [
      {
        label: 'Was wird erfasst',
        competitor: 'Ein- und Ausstempelzeit',
        geotapp: 'Uhrzeit + Position bei der Stempelung + Anlagenfotos + technische Notizen',
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
      'Der Kunde bestreitet, dass die Anlage fertiggestellt wurde.',
      'Sie haben weder Fotos noch überprüfbare Uhrzeiten.',
      'Die Diskussion dauert Wochen. Sie riskieren, nicht bezahlt zu werden.',
      'Der Techniker hat nichts in der Hand, um sich zu verteidigen.',
    ],
    dopo: [
      'Der Kunde bestreitet, dass die Anlage fertiggestellt wurde.',
      'Sie öffnen den Einsatzbericht: Anlagenfotos mit GPS, versiegelte Uhrzeit, technische Notizen.',
      'Sie schicken ihm den Bericht, und er prüft ihn selbst.',
      'Sie haben einen Nachweis zur Hand. Auch der Techniker hat etwas in der Hand.',
    ],
  },
  scenario: {
    title: 'Ein typischer Fall',
    body: 'Ein Kunde bestreitet, dass die Elektroanlage fertig ist, und weigert sich, die letzte Rechnung zu bezahlen. Mit GeoTapp öffnen Sie den Einsatzbericht: Fotos des fertigen Verteilers, Uhrzeit mit Position bei Beginn und Ende der Arbeiten, technische Notizen des Technikers, alles automatisch am Smartphone vor Ort erstellt.',
    resolution: 'Statt Aussage gegen Aussage gibt es ein Dokument, das der Kunde selbst prüfen kann.',
  },
  cosa_cambia: {
    title: 'Was sich wirklich ändert, ab dem ersten Einsatz',
    items: [
      {
        title: 'Abends wird nichts mehr abgeschrieben',
        desc: 'Die Stunden laufen nicht erst über den Zettel, dann über die Nachricht, dann über die Verwaltung. Sie entstehen gleich beim richtigen Auftrag, mit der Position und der Uhrzeit, zu der sie geleistet wurden, und am Monatsende ist der Export für die Lohnabrechnung fertig, ohne dass jemand sie abtippt.',
      },
      {
        title: 'Der Einsatzbericht ist keine Streitfrage mehr',
        desc: 'Fragt der Auftraggeber, wie viele Stunden an seiner Anlage geleistet wurden, steht nicht die Aussage des Technikers gegen seine. Es gibt ein versiegeltes Dokument mit den Fotos des Verteilers, den Uhrzeiten und den technischen Notizen, das er selbst prüfen kann, ohne in Ihr Konto zu schauen.',
      },
      {
        title: 'Auch der Techniker hat etwas in der Hand',
        desc: 'Es gilt in beide Richtungen. Wer gut arbeitet und hört, er sei zu spät gekommen, hat den Nachweis der Uhrzeit und muss sich nicht aus dem Gedächtnis erinnern, was er vor drei Wochen gemacht hat.',
      },
    ],
  },
  features: {
    title: 'App für Elektriker: Das finden Sie in GeoTapp.',
    items: [
      {
        title: 'Überprüfbare GPS-Stempelung',
        desc: 'Jeder Beginn, jede Pause und jedes Ende wird mit Position, Zeitstempel und Auftrag erfasst. Zum Vorzeigen beim Kunden, wenn es darauf ankommt.',
      },
      {
        title: 'Fotonachweise der Anlage',
        desc: 'Der Techniker fotografiert nach dem Einsatz direkt in der App. Jedes Bild ist mit GPS und Zeitstempel verknüpft: Jede spätere Änderung ist erkennbar.',
      },
      {
        title: 'Automatische digitale Einsatzberichte',
        desc: 'Nach den Arbeiten ist der Einsatzbericht schon fertig: Stunden, Fotos und technische Notizen. Das Büro schickt ihn mit einem Klick aus Flow an den Kunden.',
      },
      {
        title: 'Aufträge über mehrere Baustellen verwalten',
        desc: 'Weisen Sie Einsätze zu und verfolgen Sie den Fortschritt Auftrag für Auftrag.',
      },
      {
        title: 'Anwesenheitsexport für die Lohnabrechnung',
        desc: 'Exportieren Sie die Anwesenheiten des Monats als Excel- oder CSV-Datei, bereit für Ihre Lohnbuchhaltung oder Steuerberatung. Die Lohnabrechnung geht schnell von der Hand.',
      },
      {
        title: 'Ihre Elektriker sind geschützt',
        desc: 'Ein überprüfbarer Bericht gibt dem Techniker etwas in die Hand gegen unbegründete Vorwürfe. Wer gut arbeitet, belegt es mit Daten.',
      },
    ],
  },
  cta_mid: {
    title: 'Sie möchten sehen, wie es bei einem echten Elektroeinsatz funktioniert?',
    body: 'Testen Sie es an einem echten Einsatz, vom Anlegen des Auftrags bis zum Einsatzbericht, den der Kunde erhält: 14 Tage kostenlos, ohne Kreditkarte.',
    cta: '14 Tage kostenlos testen',
  },
  trust: {
    title: 'In unseren Berichten ist jede Änderung sichtbar, auch wenn Sie sie vornehmen oder wir.',
    body: 'GeoTapp-Berichte erstellt das System im Moment des Einsatzes. Sobald ein Bericht versiegelt ist, bricht jede Korrektur einer Uhrzeit oder jedes Verschieben eines Fotos das Siegel, und die Prüfung meldet es.',
    badge: 'Von jedem prüfbar, ohne Zugang zu Ihrem Konto',
  },
  testimonial: {
    quote: 'Mit GeoTapp erfassen meine Techniker die Anlage gleich nach Fertigstellung. Wenn ein Kunde etwas bestreitet, haben wir den Einsatzbericht zum Vorzeigen.',
    author: 'Klaus M.',
    role: 'Inhaber, Elektroinstallationsbetrieb',
  },
  faq: {
    title: 'Häufig gestellte Fragen',
    subtitle: 'Was uns Elektriker am häufigsten fragen, bevor es losgeht.',
    items: [
      {
        q: 'Eignet sich GeoTapp als App für Elektriker?',
        a: 'Ja. Elektriker und Installateure nutzen GeoTapp für Einsätze, Einsatzberichte, Stunden und Fotonachweise der Anlagen. Es funktioniert sowohl für Arbeiten an einem einzelnen Auftrag als auch für mehrere Baustellen parallel.',
      },
      {
        q: 'Kann ich GeoTapp nutzen, um Anlagen und Elektroeinsätze zu dokumentieren?',
        a: 'Ja. Der Techniker fotografiert während oder nach dem Einsatz direkt in der App. Jedes Bild ist mit GPS, Zeitstempel und Auftrag verknüpft und steht in einem Einsatzbericht, in dem jede Änderung erkennbar ist.',
      },
      {
        q: 'Hilft GeoTapp bei Streit mit Kunden?',
        a: 'Genau dafür ist es gedacht: Uhrzeit mit Position, Fotonachweise und versiegelter Einsatzbericht geben Ihnen ein Dokument zum Vorzeigen, wenn ein Einwand unbegründet ist.',
      },
      {
        q: 'Passt es auch für Anlagenbauer, nicht nur für Elektriker?',
        a: 'Ja. Elektroanlagen, Heizung und Sanitär, Klima, Brandschutz, Photovoltaik. Das Handwerk ändert sich, das Problem bleibt dasselbe: nachweisen, wer wo war, wie lange er geblieben ist und was er fertig hinterlassen hat. Der Einsatzbericht sieht für alle gleich aus.',
      },
      {
        q: 'Wie funktionieren die Einsatzberichte für Anlagenbauer?',
        a: 'Der Techniker schließt den Einsatz am Telefon ab, und der Einsatzbericht ist schon geschrieben, mit Stunden, Position, Anlagenfotos und technischen Notizen. Es bleibt kein Formular, das abends auszufüllen ist, und genau deshalb kommen Berichte sonst zu spät oder gar nicht.',
      },
      {
        q: 'Können wir aufhören, Stunden und Fotos über WhatsApp zu sammeln?',
        a: 'Genau deshalb kommen die meisten Betriebe zu uns. Im Chat gehen die Stunden zwischen den Nachrichten verloren, die Fotos werden komprimiert, und am Monatsende muss jemand alles von Hand abschreiben. Hier entsteht jede Angabe schon mit Verbindung zu Auftrag und Person.',
      },
    ],
  },
  cta: {
    title: 'Jede gut gemachte Anlage verdient einen Nachweis. GeoTapp erstellt ihn.',
    subtitle: 'Überprüfbare Berichte, Position bei den Stempelungen, Fotos im Bericht versiegelt.',
    primary: '14 Tage kostenlos testen',
    secondary: 'Preise ansehen',
  },
  pricing_hint: {
    label: 'TimeTracker-Plätze ab',
    per: 'pro Mitarbeiter und Monat, zzgl. Flow-Tarif ab 39 € im Monat',
    note: '14 Tage kostenlos testen',
  },
  schema_sector_name: 'Elektriker',
  schema_faq: [
    {
      question: 'Funktioniert GeoTapp als App für Elektriker?',
      answer: 'Ja. GeoTapp ist die App für Elektriker und Installateure, die jeden Einsatz mit GPS, Fotos und festgehaltenen Uhrzeiten erfasst. Der Techniker stempelt vor Ort, das Büro sieht alles, sobald es ankommt, und der Kunde erhält einen versiegelten Einsatzbericht.',
    },
    {
      question: 'Wie versiegele ich einen Elektroeinsatz mit GeoTapp?',
      answer: 'Der Techniker erfasst in GeoTapp Beginn und Ende mit Position, die Fotos der Anlage und die technischen Notizen. Das System erstellt einen versiegelten Einsatzbericht, den der Kunde eigenständig prüfen kann.',
    },
    {
      question: 'Hilft GeoTapp, mehrere Elektriker-Teams auf verschiedenen Baustellen zu steuern?',
      answer: 'Ja. Mit GeoTapp Flow koordiniert der Inhaber mehrere Teams, weist Aufträge zu, verfolgt den Stand der Einsätze und sammelt Fotonachweise von allen aktiven Baustellen, sobald sie hochgeladen werden.',
    },
    {
      question: 'Werden GeoTapp-Einsatzberichte bei Streit akzeptiert?',
      answer: 'GeoTapp-Einsatzberichte sind mit GPS, Zeitstempel und Fotonachweisen versiegelt. Der Kunde prüft sie selbst. Sie helfen zu zeigen, dass das Dokument nicht verändert wurde; allein sind sie weder ein absoluter Nachweis des Sachverhalts noch eine Rechtsberatung.',
    },
    {
      question: 'Funktioniert GeoTapp auch als App für Anlagenbauer?',
      answer: 'Ja. Neben Elektroanlagen deckt es Heizung und Sanitär, Klima, Brandschutz und Photovoltaik ab. Der Techniker erfasst den Einsatz vor Ort mit GPS und Fotos, und der Einsatzbericht entsteht für jede Anlagenart auf dieselbe Weise.',
    },
    {
      question: 'Verfolgt GeoTapp die Position der Techniker während des Tages?',
      answer: 'Nein. Die Position wird nur erfasst, wenn der Techniker stempelt (Beginn, Pausen, Ende) oder ein Nachweisfoto aufnimmt. Zwischen zwei Stempelungen wird nichts automatisch erfasst: Die App fragt nicht einmal nach der Berechtigung, die Position im Hintergrund zu lesen.',
    },
  ],
};

export default content;
