import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App für Installateure und Anlagenbauer: Einsätze mit GPS | GeoTapp',
    description: 'Dokumentieren Sie Einsätze, Stunden und Material für Installateure und Anlagenbauer, mit Position bei den Stempelungen. Automatische Leistungsnachweise zum Vorzeigen, wenn jemand etwas bestreitet. GeoTapp kostenlos testen.',
  },
  hero: {
    badge: 'App für Installateure, Anlagenbauer und Techniker',
    h1_line1: 'Jeder Einsatz dokumentiert,',
    h1_line2: 'jede Stunde erfasst.',
    subtitle: 'Für Elektro-, Sanitär-, Heizungs- und Anlagenbetriebe. GeoTapp verbindet Flow + TimeTracker und erfasst GPS, Stunden und Fotos für jeden Auftrag, vom Transporter ins Büro, ohne Anrufe.',
    cta_primary: 'GeoTapp 14 Tage kostenlos testen',
    cta_note: 'Die Testphase verpflichtet Sie zu nichts. Keine Kreditkarte erforderlich.',
  },
  pain: {
    title: 'Probleme, die wir täglich lösen',
    items: [
      {
        title: 'Kunden bestreiten die Einsatzstunden',
        desc: 'Stempelungen mit GPS und Zeitstempel als überprüfbarer Nachweis. Die Daten werden im Moment des Einsatzes versiegelt: Jede spätere Änderung ist erkennbar.',
      },
      {
        title: 'Sie laufen den Technikern hinterher, um zu wissen, wo sie sind',
        desc: 'Jede Stempelung des Technikers erscheint sofort im Dashboard, mit Uhrzeit und Position. Sie wissen, wo sie waren, ohne anzurufen.',
      },
      {
        title: 'Unvollständige oder nie abgegebene Einsatzberichte',
        desc: 'Die Daten kommen zu spät, unvollständig oder gar nicht. Stunden und Einsätze am Monatsende nachzuerfassen, ist eine Arbeit für sich, die Zeit und Geld kostet.',
      },
    ],
  },
  workflow: {
    title: 'So funktioniert es',
    subtitle: 'Drei einfache Schritte. Kein Papier. Keine Anrufe.',
    steps: [
      {
        title: 'Der Techniker stempelt mit GPS zu Einsatzbeginn',
        desc: 'Er öffnet den Auftrag am Smartphone. GeoTapp hält die Position in diesem Moment fest, dazu Zeitstempel und Fotos. Jede Änderung ist erkennbar.',
      },
      {
        title: 'Die Stunden werden automatisch dem Auftrag zugeordnet',
        desc: 'Jede gearbeitete Minute wird dem richtigen Auftrag zugeordnet. Die Leitung sieht, Stempelung für Stempelung, wer wo arbeitet.',
      },
      {
        title: 'Der Kundenbericht entsteht, ohne etwas einzutippen',
        desc: 'Nach dem Einsatz erstellt das System einen Bericht mit GPS, Stunden und Siegel. Der Kunde erhält ihn und prüft ihn eigenständig.',
      },
    ],
  },
  differenza: {
    title: 'App für Anlagenbauer: Stempelung oder überprüfbarer Nachweis?',
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
        geotapp: 'Versiegelter Bericht, jede Änderung ist erkennbar',
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
      'Der Kunde bestreitet das Einsatzende und verlangt einen Nachlass.',
      'Der Techniker sagt „Ich habe 4 Stunden gearbeitet“. Der Kunde sagt „Es waren 2“.',
      'Sie haben keinen Nachweis. Der Streit dauert Tage, und die Zahlung ist gefährdet.',
      'Am Monatsende rekonstruieren Sie Stunden und Aufträge aus WhatsApp-Nachrichten.',
    ],
    dopo: [
      'Der Kunde bestreitet etwas? Sie öffnen den Bericht: Fotos, Position, Uhrzeiten, Siegel.',
      'Sie schicken ihm den Bericht. Die Diskussion ist in einer Minute vorbei.',
      'Sie haben einen Nachweis zur Hand. Auch der Techniker hat etwas in der Hand.',
      'Am Monatsende ist der Export schon fertig, Stunden und Aufträge automatisch zusammengefasst.',
    ],
  },
  features: {
    title: 'Funktionen für Installateure und Anlagenbauer',
    items: [
      {
        title: 'Überprüfbare GPS-Stempelung',
        desc: 'Jeder Beginn, jede Pause und jedes Ende ist mit Position, Uhrzeit und Auftrag verknüpft. Zum Vorzeigen beim Kunden oder bei der Behörde, wenn es darauf ankommt.',
      },
      {
        title: 'Versiegelte Fotonachweise',
        desc: 'Der Techniker fotografiert direkt in der App. Jedes Bild ist mit GPS und Zeitstempel dem Einsatz zugeordnet: Jede Änderung nach der Erstellung ist erkennbar.',
      },
      {
        title: 'Aufträge über mehrere Baustellen verwalten',
        desc: 'Weisen Sie Aufträge zu, verfolgen Sie den Fortschritt jedes Einsatzes und erhalten Sie eine Meldung, wenn eine Schicht offen bleibt.',
      },
      {
        title: 'Automatische digitale Einsatzberichte',
        desc: 'Nach dem Einsatz ist der Bericht schon fertig: Stunden, Fotos und Notizen. Kein Papier, keine Anrufe. Das Büro schickt ihn mit einem Klick aus Flow an den Kunden.',
      },
      {
        title: 'Export für Lohn und Rechnungsstellung',
        desc: 'Exportieren Sie die Monatsanwesenheit und die Stunden je Auftrag. Lohnabrechnung und Rechnungsstellung starten mit fertigen Daten, ohne etwas abzutippen.',
      },
      {
        title: 'Position nur beim Stempeln',
        desc: 'Ortung, gebaut für die Vorgaben der DSGVO: nie durchgehend, und die Mitarbeiterinformation wird vor dem Stempeln in der App unterschrieben.',
      },
    ],
  },
  testimonial: {
    quote: 'Wenn ein Kunde die Stunden bestreitet, öffnen wir den Bericht mit Position und Fotos, und er prüft ihn selbst.',
    author: 'Robert F.',
    role: 'Inhaber, Anlagenbauunternehmen, 20 Techniker',
  },
  faq: {
    title: 'Häufig gestellte Fragen',
    subtitle: 'Was uns am häufigsten gefragt wird, bevor es losgeht.',
    items: [
      {
        q: 'Kunden bestreiten die Einsatzstunden?',
        a: 'Mit GeoTapp erhalten die Stempelungen mit GPS im Moment des Einsatzes einen Zeitstempel, und jede Änderung ist erkennbar. Sie sind ein überprüfbarer Nachweis der geleisteten Stunden, wenn jemand sie anzweifelt.',
      },
      {
        q: 'Wie behalte ich mehrere Teams auf verschiedenen Aufträgen im Blick?',
        a: 'GeoTapp zeigt die heutigen Stempelungen auf der Karte, aktualisiert bei jedem begonnenen oder beendeten Einsatz. Sie wissen, an welchem Auftrag Ihre Techniker arbeiten, ohne anzurufen.',
      },
      {
        q: 'Wie beschleunige ich die Rechnungsstellung für Einsätze?',
        a: 'GeoTapp erstellt automatisch den Export von Stunden und Aufträgen für Ihre Verwaltung. Nichts von Hand abzutippen: weniger Fehler, und die Rechnungsstellung startet mit fertigen Daten.',
      },
    ],
  },
  cta: {
    title: 'GeoTapp 14 Tage kostenlos testen',
    subtitle: 'Die Testphase verpflichtet Sie zu nichts. Keine Kreditkarte erforderlich.',
    primary: '14 Tage kostenlos testen',
    secondary: 'Preise ansehen',
  },
  pricing_hint: {
    label: 'TimeTracker-Plätze ab',
    per: 'pro Mitarbeiter und Monat, zzgl. Flow-Tarif ab 39 € im Monat',
    note: '14 Tage kostenlos testen',
  },
  schema_sector_name: 'Anlagenbau',
  schema_faq: [
    {
      question: 'Kunden bestreiten die Einsatzstunden?',
      answer: 'Mit GeoTapp erhalten die Stempelungen mit GPS im Moment des Einsatzes einen Zeitstempel, und jede Änderung ist erkennbar. Sie sind ein überprüfbarer Nachweis der geleisteten Stunden, wenn jemand sie anzweifelt.',
    },
    {
      question: 'Wie behalte ich mehrere Teams auf verschiedenen Aufträgen im Blick?',
      answer: 'GeoTapp zeigt die heutigen Stempelungen auf der Karte, aktualisiert bei jedem begonnenen oder beendeten Einsatz. Sie wissen, an welchem Auftrag Ihre Techniker arbeiten, ohne anzurufen.',
    },
    {
      question: 'Wie beschleunige ich die Rechnungsstellung für Einsätze?',
      answer: 'GeoTapp erstellt automatisch den Export von Stunden und Aufträgen für Ihre Verwaltung. Nichts von Hand abzutippen: weniger Fehler, und die Rechnungsstellung startet mit fertigen Daten.',
    },
  ],
};

export default content;
