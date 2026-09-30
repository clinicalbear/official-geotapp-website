import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Software für Sicherheitsdienste | GeoTapp - Schichten mit GPS',
    description: 'GeoTapp ist die Software für Sicherheits- und Bewachungsunternehmen: Schichten mit Position bei den Stempelungen, dokumentierte Kontrollgänge und Nachweisfotos. Für die DSGVO gebaut. Kostenlos testen.',
  },
  hero: {
    badge: 'Software für Bewachung, Sicherheitskräfte und Ordnungsdienste',
    h1_line1: 'Anwesenheit und Schichten überprüfbar',
    h1_line2: 'für Bewachung und private Sicherheit',
    subtitle: 'GeoTapp Flow und TimeTracker dokumentieren die Anwesenheit der Sicherheitskräfte an den zugewiesenen Posten: Position und Uhrzeit bei jeder Stempelung, Nachweisfotos, versiegelte Berichte. Schichten, Schichttauschanfragen und Mitteilungen in einer Plattform. Die App für Sicherheitsdienste, die jede Schicht, jeden Rundgang und jede Anwesenheit versiegelt.',
    cta_primary: '14 Tage kostenlos testen',
    cta_note: 'Die Testphase verpflichtet Sie zu nichts. Keine Kreditkarte.',
  },
  pain: {
    title: 'Die Probleme, die Sie schon kennen',
    items: [
      {
        title: 'Die Anwesenheit an den zugewiesenen Posten belegen',
        desc: 'Der Kunde bestreitet die Anwesenheit der Sicherheitskraft zu einer bestimmten Uhrzeit. Ohne erfasste Position und Uhrzeit steht Ihr Wort gegen seines, und Sie riskieren den Vertrag.',
      },
      {
        title: 'Vorfallberichte ohne Standortnachweis',
        desc: 'Ein handschriftlicher Vorfallbericht ohne erfasste Position und Uhrzeit lässt sich leicht anfechten.',
      },
      {
        title: 'Schichtübergabe noch auf Papier',
        desc: 'Der Schichtwechsel zwischen den Sicherheitskräften läuft über Zettel oder Anrufe. Wichtige Informationen gehen verloren, die Zuständigkeiten sind unklar, und das Nachvollziehen danach ist schwer.',
      },
    ],
  },
  workflow: {
    title: 'So funktioniert es in drei Schritten',
    subtitle: 'Vom Wachposten ins Büro, ohne Papier.',
    steps: [
      {
        title: 'Die Sicherheitskraft stempelt am zugewiesenen Posten',
        desc: 'GeoTapp TimeTracker erfasst Beginn, Pausen und Ende mit Position und Uhrzeit und an den Kontrollpunkten Nachweisfotos. Jede Kontrolle dokumentiert die Sicherheitskraft mit einem Tipp: Zwischen zwei Stempelungen wird nichts automatisch erfasst.',
      },
      {
        title: 'Die Einsatzleitung sieht die Schichten, sobald sie ankommen',
        desc: 'Flow erhält die Daten, sobald das Telefon Netz hat. Die Einsatzleitung prüft die Besetzung aller Posten, die Schichtwechsel und etwaige Abweichungen, ohne das Einsatzteam anzurufen.',
      },
      {
        title: 'Der Bericht ist Ihr Nachweis, belastbar beim Audit',
        desc: 'Am Ende der Schicht wird das Anwesenheitsprotokoll mit den bei den Stempelungen erfassten Positionen erstellt, und jede Änderung ist erkennbar. Der Kunde oder die Behörde können die Integrität selbst prüfen.',
      },
    ],
  },
  differenza: {
    title: 'Software für Sicherheitsdienste: Anwesenheitsliste oder überprüfbare Nachweise?',
    subtitle: 'Die meiste Software erfasst Schichten. GeoTapp versiegelt jede Anwesenheit in einem überprüfbaren Bericht.',
    rows: [
      {
        label: 'Was wird erfasst',
        competitor: 'Schichtbeginn und -ende',
        geotapp: 'Uhrzeit + Position bei der Stempelung + Fotos + Position am zugewiesenen Posten',
      },
      {
        label: 'Wer kann prüfen',
        competitor: 'Nur Ihr Büro',
        geotapp: 'Sie, der Auftraggeber, die Behörde, eigenständig',
      },
      {
        label: 'Bei Streitigkeiten',
        competitor: 'Nur Ihr Wort',
        geotapp: 'Versiegelter Bericht, von Dritten prüfbar',
      },
      {
        label: 'Rundgangsnachweis',
        competitor: 'Fehlt oder auf Papier',
        geotapp: 'Position, Uhrzeit und Foto am Kontrollpunkt',
      },
      {
        label: 'DSGVO',
        competitor: 'Oft fraglich',
        geotapp: 'Gebaut, um die Vorgaben der DSGVO einzuhalten, Vorlagen inklusive',
      },
    ],
  },

  prima_dopo: {
    title: 'Was jetzt passiert. Was mit GeoTapp passiert.',
    prima: [
      'Der Kunde bestreitet die Anwesenheit der Sicherheitskraft zu einer bestimmten Uhrzeit.',
      'Die Sicherheitskraft sagt „Ich war da“. Der Kunde sagt „Davon ist nichts zu sehen“.',
      'Sie haben nichts, um es zu belegen. Der Streit zieht sich hin.',
      'Sie riskieren, den Vertrag zu verlieren.',
    ],
    dopo: [
      'Der Kunde bestreitet die Anwesenheit der Sicherheitskraft zu einer bestimmten Uhrzeit.',
      'Sie öffnen den Bericht: Position am zugewiesenen Posten, Uhrzeiten, Foto des Objekts.',
      'Sie schicken ihn, und der Kunde prüft ihn selbst.',
      'Sie haben einen Nachweis zur Hand.',
    ],
  },

  scenario: {
    title: 'Ein typischer Fall',
    body: 'Der Auftraggeber behauptet, die Sicherheitskraft sei zu einer kritischen Uhrzeit nicht an ihrem Posten gewesen. Mit GeoTapp öffnen Sie den Schichtbericht: am Kontrollpunkt erfasste Position, versiegelter Zeitstempel, Foto des Objekts, alles vom Smartphone der Sicherheitskraft erfasst, als sie gestempelt und die Fotos gemacht hat.',
    resolution: 'Statt Aussage gegen Aussage gibt es ein Dokument, das der Auftraggeber selbst prüfen kann.',
  },

  features: {
    title: 'Software für Sicherheitsdienste: versiegelte Schichten, dokumentierte Kontrollen.',
    items: [
      {
        title: 'Überprüfbare GPS-Stempelung für jede Sicherheitskraft',
        desc: 'Jede Anwesenheit ist mit Position, Uhrzeit und zugewiesenem Posten verknüpft. Zum Vorzeigen beim Kunden, bei der Behörde oder in einem vertraglichen Audit, wenn es darauf ankommt.',
      },
      {
        title: 'Stammdaten der Sicherheitskräfte',
        desc: 'Pflegen Sie in den Stammdaten jeder Sicherheitskraft Funktion, Kontaktdaten und zugewiesene Posten, und legen Sie fest, wer in der App was sieht.',
      },
      {
        title: 'Export als Excel oder CSV für die Lohnabrechnung',
        desc: 'Exportieren Sie die Anwesenheiten des Monats als Excel- oder CSV-Datei, bereit für Ihre Lohnbuchhaltung oder Steuerberatung. Die Lohnabrechnung geht schnell von der Hand, ohne Abtippfehler.',
      },
      {
        title: 'Digitale Schichtübergabe',
        desc: 'Schichttauschanfragen laufen über die App, und die Mitteilungen bleiben im Kanal des Auftrags: weniger Zettel und Anrufe zwischen einer Schicht und der nächsten.',
      },
      {
        title: 'Dashboard für mehrere Objekte, bei jeder Stempelung aktualisiert',
        desc: 'Die Einsatzleitung sieht die zuletzt gestempelte Position jeder Sicherheitskraft, den Stand jedes Postens und die aktiven Schichtwechsel, von jedem Gerät aus, ohne Anrufe.',
      },
      {
        title: 'Berichte, die im Audit und bei der Behörde belastbar sind',
        desc: 'Jede Schicht erzeugt einen versiegelten Bericht mit Positionen, Uhrzeiten und Nachweisfotos, den Kunde und Behörde selbst prüfen können.',
      },
    ],
  },

  cta_mid: {
    title: 'Sie möchten sehen, wie es in einem echten Streitfall funktioniert?',
    body: 'Testen Sie es an einem echten Einsatz, von der Sicherheitskraft, die am zugewiesenen Posten stempelt, bis zum Bericht, den der Auftraggeber erhält: 14 Tage kostenlos, ohne Kreditkarte.',
    cta: '14 Tage kostenlos testen',
  },

  trust: {
    title: 'Jede Änderung an unseren Berichten ist sichtbar, auch wenn Sie sie vornehmen oder wir.',
    body: 'GeoTapp-Berichte erstellt das System im Moment der Schicht. Sobald ein Bericht versiegelt ist, bricht jede Korrektur einer Uhrzeit oder jedes Verschieben eines Fotos das Siegel, und die Prüfung meldet es. Wer ihn erhält, Auftraggeber oder Behörde, kann ihn selbst prüfen.',
    badge: 'Von jedem prüfbar, ohne Zugang zu Ihrem Konto',
  },
  testimonial: {
    quote: 'Unseren Kunden schicken wir das versiegelte Anwesenheitsprotokoll mit den Positionen der Stempelungen: Wenn sie etwas bestreiten, prüfen sie selbst.',
    author: 'Stefan K.',
    role: 'Betriebsleiter, Sicherheitsdienstleister',
  },
  faq: {
    title: 'Häufig gestellte Fragen',
    subtitle: 'Was uns am häufigsten gefragt wird, bevor es losgeht.',
    items: [
      {
        q: 'Eignet sich GeoTapp für Bewachungsunternehmen und Sicherheitskräfte?',
        a: 'Ja. GeoTapp wird von Bewachungsunternehmen genutzt, um die Anwesenheit an den zugewiesenen Posten mit Position zu dokumentieren, Schichten und Schichtwechsel zu verwalten und Nachweisfotos an den Kontrollpunkten zu sammeln.',
      },
      {
        q: 'Wie hilft GeoTapp bei der Verwaltung von Vorfallberichten?',
        a: 'TimeTracker verknüpft jedes Ereignis mit Position und Uhrzeit, im Bericht versiegelt. Der von GeoTapp erstellte Vorfallbericht enthält Koordinaten, Uhrzeit und Fotos, und der Auftraggeber kann selbst prüfen, dass das Dokument nicht verändert wurde.',
      },
      {
        q: 'Hilft GeoTapp beim Schichtwechsel zwischen Sicherheitskräften?',
        a: 'Ja. Schichttauschanfragen laufen über die App, die Schichten stehen im Kalender von Flow, und die Mitteilungen bleiben im Kanal des Auftrags. Die Einsatzleitung sieht, wer was abdeckt, ohne von Anrufen abhängig zu sein.',
      },
    ],
  },
  cta: {
    title: 'Die Schicht hat stattgefunden. Jetzt belegen Sie es.',
    subtitle: 'GeoTapp erstellt überprüfbare Nachweise für jeden Einsatz, versiegelte Berichte, die Kunde und Behörde selbst prüfen können.',
    primary: '14 Tage kostenlos testen',
    secondary: 'Preise ansehen',
  },
  pricing_hint: {
    label: 'TimeTracker-Plätze ab',
    per: 'pro Mitarbeiter und Monat, zzgl. Flow-Tarif ab 39 € im Monat',
    note: '14 Tage kostenlos testen',
  },

  schema_sector_name: 'Bewachungsgewerbe',
  schema_faq: [
    {
      question: 'Funktioniert GeoTapp für die Verwaltung von Sicherheitskräften und Rundgängen?',
      answer: 'Ja. GeoTapp ermöglicht es Sicherheitsunternehmen, jede Schicht und jeden Rundgang zu versiegeln: Die Sicherheitskräfte stempeln am Smartphone mit Position, und daraus entstehen dokumentierte Nachweise der geleisteten Arbeit.',
    },
    {
      question: 'Wie dokumentiere ich Rundgänge und regelmäßige Kontrollen?',
      answer: 'Jede Kontrolle wird mit GeoTapp TimeTracker erfasst: Uhrzeit, Position, Foto des Objekts und Notizen. Der versiegelte Bericht steht dem Auftraggeber zur Verfügung, sobald er erstellt ist, oder nach Schichtende.',
    },
    {
      question: 'Kann ich dem Kunden belegen, dass die Rundgänge regelmäßig stattgefunden haben?',
      answer: 'Ja. GeoTapp-Berichte sind versiegelt und enthalten Positionen, Uhrzeiten und Nachweisfotos der Kontrollpunkte. Der Auftraggeber kann selbst prüfen, dass der Bericht nicht verändert wurde, und sehen, wann und wo die Sicherheitskraft gestempelt hat.',
    },
    {
      question: 'Hilft GeoTapp bei Nachtarbeit und Zuschlägen im Bewachungsgewerbe?',
      answer: 'GeoTapp erfasst Arbeitszeiten, Überstunden sowie Nacht- und Feiertagsarbeit und exportiert sie für Ihre Lohnbuchhaltung oder Steuerberatung, die sie nach dem geltenden Tarifvertrag anwendet. Es ist gebaut, um die Vorgaben der DSGVO einzuhalten: Position nur, wenn die Sicherheitskraft stempelt.',
    },
    {
      question: 'Funktioniert es auch, um mehrere Teams an verschiedenen Objekten zu koordinieren?',
      answer: 'Ja. Mit GeoTapp Flow sieht die Einsatzleitung die zuletzt gestempelte Position aller Sicherheitskräfte, weist Schichten zu, regelt dringende Vertretungen und sammelt die Berichte aller Objekte auf einem Bildschirm.',
    },
  ],
};

export default content;
