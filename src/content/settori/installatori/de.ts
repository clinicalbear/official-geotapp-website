import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    // 2026-10-08: title ripristinato sulla query che portava impressioni (GSC); le
    // passate di lingua del 30/09-01/10 l'avevano sostituito. Guardia: test/sector-title-keywords.test.js
    title: 'Arbeitszeiterfassung für Installateure und Elektriker | GeoTapp',
    description: 'GeoTapp ist die App für Installateure, Klempner und Heizungsbauer: Einsatzberichte mit Position und Fotos, Fotonachweise und Berichte, in denen jede Änderung erkennbar ist. Kostenlos testen.',
  },
  hero: {
    badge: 'App für Installateure, Klempner und Heizungsbauer',
    h1_line1: 'Der Kunde bestreitet die Stunden?',
    h1_line2: 'Zeigen Sie ihm den Einsatzbericht mit GPS.',
    subtitle: 'Ihre Techniker stempeln mit einem Tipp am Smartphone. Das System erstellt einen Einsatzbericht mit erfasster Position und Fotos: Jede Änderung ist erkennbar. Wenn der Kunde fragt „Wie lange haben Sie gebraucht?“, haben Sie die Antwort parat.',
    cta_primary: '14 Tage kostenlos testen',
    cta_note: 'Keine Kreditkarte. Vom ersten Tag an einsatzbereit.',
  },
  pain: {
    title: 'Das Problem, das Sie schon kennen',
    items: [
      {
        title: 'Streit über Stunden und Einsätze',
        desc: 'Der Kunde bestreitet die Uhrzeit. Der Techniker hat keinen Nachweis. Der Streit zieht sich über Wochen und kostet mehr als der Einsatz selbst.',
      },
      {
        title: 'Das Büro läuft dem Außendienst hinterher',
        desc: 'Die Leitung ruft die Techniker an, um zu wissen, wo sie sind, was sie gemacht haben und wann sie fertig werden. Jeder Anruf unterbricht beide Seiten.',
      },
      {
        title: 'Unvollständige oder verlorene Einsatzberichte',
        desc: 'Zettel, WhatsApp, E-Mails: Die Daten kommen unvollständig, zu spät oder gar nicht. Die Abrechnung nachträglich zu rekonstruieren, ist eine Arbeit für sich.',
      },
    ],
  },
  workflow: {
    title: 'So funktioniert es in drei Schritten',
    subtitle: 'Vom Transporter ins Büro, ohne Anrufe.',
    steps: [
      {
        title: 'Der Techniker stempelt vor Ort',
        desc: 'Mit GeoTapp TimeTracker erfasst er Beginn, Pausen, Ende, Fotos und Notizen direkt am Smartphone. Die Position wird nur beim Stempeln erfasst, nie durchgehend.',
      },
      {
        title: 'Das Büro sieht alles, sobald es ankommt',
        desc: 'Flow erhält die Daten, sobald das Telefon Netz hat. Die Leitung sieht Auftrag, Fortschritt, zugewiesenen Techniker und Fotonachweise, ohne anzurufen.',
      },
      {
        title: 'Der Bericht ist Ihr Nachweis, zum Vorzeigen beim Kunden',
        desc: 'Nach dem Einsatz wird der Bericht mit den erfassten GPS-Daten und Fotonachweisen erstellt. Jede Änderung ist erkennbar. Der Kunde kann ihn selbst prüfen. Wenn ein Zweifel aufkommt, müssen Sie nichts erklären. Sie müssen nur zeigen.',
      },
    ],
  },
  differenza: {
    title: 'App für Installateure: Stempelung oder überprüfbarer Nachweis?',
    subtitle: 'Die meisten Apps erfassen nur die Uhrzeit. GeoTapp liefert überprüfbare Nachweise.',
    rows: [
      {
        label: 'Was wird erfasst',
        competitor: 'Ein- und Ausstempelzeit',
        geotapp: 'Uhrzeit + Position bei der Stempelung + Fotos + erledigte Arbeit',
      },
      {
        label: 'Wer kann prüfen',
        competitor: 'Nur Ihr Büro',
        geotapp: 'Sie, der Auftraggeber, ein Dritter, eigenständig',
      },
      {
        label: 'Bei Streitigkeiten',
        competitor: 'Nur Ihr Wort',
        geotapp: 'Versiegelter Bericht, jede Änderung erkennbar',
      },
      {
        label: 'Einsatzbericht',
        competitor: 'Manuell oder fehlend',
        geotapp: 'Automatisch erstellt, mit GPS und Fotos',
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
      'Der Kunde bestreitet die Uhrzeit oder den ausgeführten Einsatz.',
      'Der Techniker sagt „Habe ich gemacht“. Der Kunde sagt „Davon ist nichts zu sehen“.',
      'Sie haben nichts in der Hand. Die Diskussion dauert Tage.',
      'Manchmal verlieren Sie die Zahlung. Immer verlieren Sie Zeit.',
    ],
    dopo: [
      'Der Kunde bestreitet die Uhrzeit oder den ausgeführten Einsatz.',
      'Sie öffnen den Bericht: Fotos, GPS, Uhrzeit, Siegel.',
      'Sie schicken ihn, und die Diskussion ist in einer Minute vorbei.',
      'Sie haben einen Nachweis zur Hand. Auch der Techniker hat etwas in der Hand.',
    ],
  },

  scenario: {
    title: 'Ein typischer Fall',
    body: 'Der Kunde bestreitet das Arbeitsende und verlangt einen Nachlass auf die Rechnung. Mit GeoTapp öffnen Sie den Einsatzbericht: Foto der fertigen Anlage, Uhrzeiten und Positionen der Stempelungen, automatisch berechnete Dauer, alles vom Smartphone des Technikers im Moment der Arbeit erstellt.',
    resolution: 'Statt Aussage gegen Aussage gibt es ein Dokument, das der Kunde selbst prüfen kann.',
  },

  features: {
    title: 'App für Installateure und Heizungsbauer: Einsatzberichte mit GPS und Fotonachweise.',
    items: [
      {
        title: 'Überprüfbare GPS-Stempelung',
        desc: 'Jeder Beginn, jede Pause und jedes Ende ist mit Position, Uhrzeit und Auftrag verknüpft. Zum Vorzeigen beim Kunden oder bei der Behörde, wenn es darauf ankommt.',
      },
      {
        title: 'Versiegelte Fotonachweise',
        desc: 'Der Techniker fotografiert direkt in der App. Jedes Bild ist mit GPS und Zeitstempel dem Einsatz zugeordnet und steht danach im Bericht. Niemand kann es ändern, ohne dass das System es erkennt.',
      },
      {
        title: 'Export für die Lohnabrechnung',
        desc: 'Exportieren Sie die Anwesenheiten des Monats als Excel- oder CSV-Datei, bereit für Ihre Lohnbuchhaltung oder Steuerberatung.',
      },
      {
        title: 'Aufträge über mehrere Baustellen verwalten',
        desc: 'Weisen Sie Aufträge zu, verfolgen Sie den Fortschritt jeder Baustelle und erhalten Sie eine Meldung, wenn eine Schicht offen bleibt.',
      },
      {
        title: 'Automatische digitale Einsatzberichte',
        desc: 'Nach dem Einsatz ist der Bericht schon fertig: Stunden, Fotos und Notizen. Kein Papier, keine Anrufe. Das Büro schickt ihn mit einem Klick aus Flow an den Kunden.',
      },
      {
        title: 'Auch Ihre Techniker haben einen Nachweis',
        desc: 'Ein überprüfbarer Bericht gibt dem Techniker etwas in die Hand gegen unbegründete Vorwürfe. Wer gut arbeitet, belegt es mit Daten. Keine Grauzone zwischen Außendienst und Büro.',
      },
    ],
  },

  cta_mid: {
    title: 'Sie möchten sehen, wie es bei einem echten Einsatz funktioniert?',
    body: 'Testen Sie es an einem echten Einsatz, vom Anlegen des Auftrags bis zum Bericht, den der Kunde erhält: 14 Tage kostenlos, ohne Kreditkarte.',
    cta: '14 Tage kostenlos testen',
  },

  trust: {
    title: 'Unsere Berichte: Jede Änderung ist erkennbar. Ob von Ihnen oder von uns.',
    body: 'GeoTapp-Berichte erstellt das System im Moment des Einsatzes. Sobald ein Bericht versiegelt ist, bricht jede Korrektur einer Uhrzeit oder jedes Verschieben eines Fotos das Siegel, und die Prüfung meldet es. Wer den Bericht erhält, Kunde oder Berater, kann ihn selbst prüfen.',
    badge: 'Von jedem prüfbar, ohne Zugang zu Ihrem Konto',
  },
  testimonial: {
    quote: 'Früher haben wir Stunden damit verbracht, die Zettel aus dem Außendienst einzusammeln. Jetzt ist der Einsatzbericht schon fertig, wenn der Techniker zum Transporter zurückkommt.',
    author: 'Klaus M.',
    role: 'Betriebsleiter, Elektroinstallationsbetrieb',
  },
  faq: {
    title: 'Häufig gestellte Fragen',
    subtitle: 'Was uns am häufigsten gefragt wird, bevor es losgeht.',
    items: [
      {
        q: 'Eignet sich GeoTapp als Software für Installateure und Wartungsbetriebe?',
        a: 'Ja. GeoTapp hilft Installateuren, Elektrikern, Klempnern und Wartungsbetrieben, Einsätze, Einsatzberichte, Stunden, Fahrten und Nachweise der geleisteten Arbeit zwischen Außendienst und Büro zu verwalten.',
      },
      {
        q: 'Kann ich GeoTapp für Einsatzberichte und Fotonachweise nutzen?',
        a: 'Ja. TimeTracker sammelt Fotos, Notizen und Stempelungen im Außendienst, während Flow alles dem Auftrag und der Einsatzhistorie zuordnet.',
      },
      {
        q: 'Hilft GeoTapp, Streit über Stunden und ausgeführte Arbeiten zu verringern?',
        a: 'Das ist einer der wichtigsten Anwendungsfälle: Zeiten, Position, Notizen und Fotonachweise machen den Einsatz klarer nachvollziehbar und leichter vorzeigbar.',
      },
    ],
  },
  cta: {
    title: 'Die Arbeit wurde gemacht. Jetzt belegen Sie es.',
    subtitle: 'GeoTapp erstellt überprüfbare Nachweise für jeden Einsatz, versiegelte Berichte, die der Kunde selbst prüfen kann.',
    primary: '14 Tage kostenlos testen',
    secondary: 'Preise ansehen',
  },
  pricing_hint: {
    label: 'TimeTracker-Plätze ab',
    per: 'pro Mitarbeiter und Monat, zzgl. Flow-Tarif ab 39 € im Monat',
    note: '14 Tage kostenlos testen',
  },

  schema_sector_name: 'Elektriker und Heizungsinstallateure',
  schema_faq: [
    {
      question: 'Funktioniert GeoTapp für Klempner und Heizungsbauer im Außendienst?',
      answer: 'Ja. GeoTapp ist die App für Installateure und Heizungsbauer, gemacht für alle, die auf Baustellen und in Privathaushalten arbeiten. Mit der integrierten Einsatzberichtsfunktion erfassen die Techniker Einsätze, Fotos und Stunden direkt am Smartphone, ohne ins Büro zurückzukehren.',
    },
    {
      question: 'Wie dokumentiere ich einen Wartungs- oder Installationseinsatz?',
      answer: 'Nach jedem Einsatz erfasst der Techniker in GeoTapp Beginn und Ende mit Position, Fotos der ausgeführten Arbeit und technische Notizen. Das System erstellt einen versiegelten Bericht, den der Kunde eigenständig prüfen kann.',
    },
    {
      question: 'Kann ich mit GeoTapp mehrere Installationsteams auf verschiedenen Baustellen steuern?',
      answer: 'Ja. Mit GeoTapp Flow koordiniert der Inhaber mehrere Teams, weist Aufträge zu, verfolgt den Stand der Einsätze und sammelt Fotonachweise von allen aktiven Baustellen, sobald sie ankommen.',
    },
    {
      question: 'Helfen die Berichte bei Streit mit dem Kunden?',
      answer: 'GeoTapp-Berichte sind mit Position, Zeitstempel und Fotonachweisen versiegelt. Der Kunde prüft sie selbst. Sie helfen zu zeigen, dass das Dokument nicht verändert wurde; allein sind sie weder ein absoluter Nachweis des Sachverhalts noch eine Rechtsberatung.',
    },
    {
      question: 'Hält GeoTapp bei der Ortung der Techniker die Vorgaben der DSGVO ein?',
      answer: 'Es ist dafür gebaut: Die Position wird nur erfasst, wenn der Techniker stempelt oder ein Nachweisfoto aufnimmt, nie durchgehend, und die Mitarbeiterinformation wird vor der ersten Stempelung in der App unterschrieben. Alles Weitere, etwa die Beteiligung des Betriebsrats, wo sie nötig ist, liegt beim Arbeitgeber.',
    },
  ],
};

export default content;
