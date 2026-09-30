import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App für Reinigungsunternehmen: GPS-Anwesenheit und Fotos je Objekt',
    description: 'Stempelungen mit GPS nur beim Stempeln und Fotos jedes Einsatzes: die Nachweise für den Kunden, wenn er eine Leistung bestreitet. 14 Tage kostenlos testen.',
  },

  hero: {
    badge: 'App für Reinigungsunternehmen, Facility Management und Gebäudedienste',
    h1_line1: 'Die App für Reinigungsunternehmen,',
    h1_line2: 'die jeden Einsatz versiegelt.',
    subtitle:
      'GeoTapp ist die App für Reinigungsunternehmen, die jeden Einsatz in einen Nachweis zum Vorzeigen verwandelt. Kunden bestreiten etwas, und eine aufgeschriebene Uhrzeit reicht nicht. GeoTapp erfasst die Position bei jeder Stempelung, sammelt die Nachweisfotos und fasst alles in einem versiegelten Bericht zusammen, in dem jede Änderung erkennbar ist und den der Auftraggeber selbst prüfen kann.',
    cta_primary: 'An einem echten Objekt testen',
    cta_note: '14 Tage, bis zu 50 Mitarbeiter im Außendienst, ohne Kreditkarte.',
  },

  pain: {
    title: 'Was Sie nicht belegen können, ist für den Kunden nie passiert.',
    items: [
      {
        title: 'Der Kunde bestreitet den Einsatz',
        desc: 'Er sagt, der Bereich sei nicht gereinigt worden oder die Reinigungskraft sei nicht da gewesen. Sie haben eine aufgeschriebene Uhrzeit, er seine Version. Ohne überprüfbare Nachweise riskieren Sie den Vertrag.',
      },
      {
        title: 'Mitarbeiter im Außendienst, die Sie nicht prüfen können',
        desc: 'Sie können nicht auf allen Objekten sein. Sie wissen nicht, ob die Arbeit erledigt wurde, bis sich der Kunde beschwert, und dann ist es zu spät, etwas zu rekonstruieren.',
      },
      {
        title: 'Die Behörde verlangt echte Unterlagen',
        desc: 'Arbeitszeiten, Anwesenheit, Überstunden, Pausen: Der Stundenzettel reicht nicht. Wer prüft, will erfasste Uhrzeiten, keine aus dem Gedächtnis rekonstruierten.',
      },
    ],
  },

  prima_dopo: {
    title: 'Was jetzt passiert. Was mit GeoTapp passiert.',
    prima: [
      'Der Kunde ruft an und sagt, die Toilette sei nicht geputzt worden.',
      'Die Reinigungskraft sagt „Habe ich gemacht“. Der Kunde sagt „Hat sie nicht“.',
      'Sie haben nichts in der Hand, um irgendetwas zu belegen.',
      'Die Diskussion zieht sich tagelang hin. Manchmal verlieren Sie den Vertrag.',
    ],
    dopo: [
      'Der Kunde ruft an und sagt, die Toilette sei nicht geputzt worden.',
      'Sie öffnen den Einsatzbericht: Foto der sauberen Toilette, Uhrzeit, Position.',
      'Sie schicken ihn. Sie haben mit Daten geantwortet, und er prüft sie selbst.',
      'Sie haben einen Nachweis zur Hand. Auch die Reinigungskraft hat etwas in der Hand.',
    ],
  },

  scenario: {
    title: 'Ein typischer Fall',
    body: 'Der Kunde sagt, die Toilette sei nicht geputzt worden. Mit GeoTapp öffnen Sie den Bericht und zeigen das Foto des Raums, die Uhrzeit der Aufnahme und die Position, alles automatisch von der App der Reinigungskraft im Moment des Einsatzes erstellt.',
    resolution: 'Sie haben mit Daten geantwortet, nicht mit Ihrem Wort gegen seines.',
  },

  differenza: {
    title: 'Stempelung oder überprüfbarer Arbeitsnachweis.',
    subtitle: 'Die meisten Apps erfassen Daten. GeoTapp liefert Nachweise.',
    rows: [
      {
        label: 'Was wird erfasst',
        competitor: 'Ein- und Ausstempelzeit',
        geotapp: 'Uhrzeit + Position bei der Stempelung + Fotos + erledigte Aufgaben',
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
        label: 'Fotonachweis',
        competitor: 'Fehlt oder ist nicht verknüpft',
        geotapp: 'Dem Bericht mit Uhrzeit und Position beigefügt',
      },
      {
        label: 'DSGVO',
        competitor: 'Muss oft erst geprüft werden',
        geotapp: 'Gebaut, um die Vorgaben der DSGVO einzuhalten, Vorlagen inklusive',
      },
      {
        label: 'Übersicht, bei jeder Stempelung aktualisiert',
        competitor: 'Nein',
        geotapp: 'Ja, alle Objekte, alle Mitarbeiter',
      },
    ],
  },

  non_gestionale: {
    title: 'Mehr als nur eine Verwaltungssoftware.',
    subtitle: 'Verwaltungssoftware organisiert die Arbeit. GeoTapp organisiert sie und versiegelt sie zusätzlich.',
    items: [
      {
        label: 'Hauptzweck',
        gestionale: 'Planen und organisieren',
        geotapp: 'Überprüfbare Nachweise erzeugen',
      },
      {
        label: 'Was entsteht',
        gestionale: 'Daten innerhalb Ihres Systems',
        geotapp: 'Versiegelte Berichte, von Dritten prüfbar',
      },
      {
        label: 'Bei Streitigkeiten',
        gestionale: 'Sie zeigen Daten, die nur Sie lesen können',
        geotapp: 'Sie schicken einen Bericht, den der Kunde selbst prüft',
      },
      {
        label: 'Wert für den Kunden',
        gestionale: 'Keiner, es ist ein internes Werkzeug',
        geotapp: 'Hoch: Der Kunde prüft selbst',
      },
      {
        label: 'Fotonachweis',
        gestionale: 'Nicht vorgesehen oder getrennt',
        geotapp: 'Im Bericht enthalten, mit GPS und Zeitstempel',
      },
    ],
  },

  workflow: {
    title: 'Von der Baustelle ins Büro wird jeder Einsatz zum Nachweis.',
    subtitle: 'Drei Schritte. Kein Papier. Keine Anrufe.',
    steps: [
      {
        title: 'Die Reinigungskraft versiegelt den Nachweis vor Ort',
        desc: 'Mit GeoTapp TimeTracker erfasst sie Beginn, Pausen, Ende, Fotos der Räume und Notizen am Smartphone. Die Position liefert das Telefon in diesem Moment, nicht von Hand eingetragen, und jede spätere Änderung ist erkennbar.',
      },
      {
        title: 'Das Büro ist bei jeder Stempelung auf dem Laufenden',
        desc: 'Flow zeigt auf einem Bildschirm, wer gestempelt hat, wo und um welche Uhrzeit. Sie sehen den Stand jedes Gebäudes, erhalten eine Meldung, wenn eine Schicht offen bleibt, und weisen Aufträge zu, ohne jemandem nachzulaufen.',
      },
      {
        title: 'Der Bericht ist schon fertig. Versiegelt: Jede Änderung ist sichtbar.',
        desc: 'Am Ende der Schicht erstellt das System automatisch einen versiegelten Bericht mit Positionen, Fotos und Siegel. Der Auftraggeber erhält ihn und prüft ihn selbst, ohne Zugang zu Ihrem System, ohne auf Ihr Wort angewiesen zu sein.',
      },
    ],
  },

  features: {
    title: 'App für Reinigungsunternehmen: weniger Diskussion, mehr Nachweise.',
    items: [
      {
        title: 'Auf jeden Einwand mit Daten antworten',
        desc: 'Wenn jeder Einsatz einen überprüfbaren Bericht hat, haben Sie die Unterlagen, um sofort zu antworten. Weniger mündliches Verhandeln, das Wochen dauert.',
      },
      {
        title: 'Den Überblick über alle Objekte',
        desc: 'Sie wissen, wo und um welche Uhrzeit jeder Mitarbeiter gestempelt hat, sobald die Stempelung ankommt, in allen Gebäuden und von jedem Gerät aus. Zwischen den Stempelungen wird nichts automatisch erfasst.',
      },
      {
        title: 'Berichte, die jeder prüfen kann',
        desc: 'Jeder Bericht ist versiegelt, und jede Änderung ist erkennbar. Wer ihn erhält, Kunde, Prüfer oder Berater, kann ihn selbst kontrollieren.',
      },
      {
        title: 'Unterlagen für Kontrollen griffbereit',
        desc: 'Arbeitszeiten, Pausen, Überstunden und Zuschläge werden Schicht für Schicht erfasst und erscheinen in der Zusammenstellung für Ihre Lohnbuchhaltung oder Steuerberatung. Bei einer Kontrolle liegen die Aufzeichnungen bereit.',
      },
      {
        title: 'Mehrere Objekte verwalten, ohne anzurufen',
        desc: 'Dutzende Standorte, ein Bildschirm. Sie weisen Aufträge zu, sehen, wer wo gestempelt hat, und erhalten eine Meldung, wenn eine Schicht offen bleibt.',
      },
      {
        title: 'Ihr Personal ist geschützt',
        desc: 'Ein überprüfbarer Bericht gibt auch der Reinigungskraft etwas in die Hand gegen unbegründete Vorwürfe. Wer gut arbeitet, belegt es.',
      },
    ],
  },

  cosa_cambia: {
    title: 'Was sich wirklich ändert.',
    items: [
      {
        title: 'Sie müssen Ihren Mitarbeitern nicht mehr blind vertrauen.',
        desc: 'Nicht, weil sie unzuverlässig wären, sondern weil Sie es nicht müssen. Das System erzeugt den Nachweis im Moment des Einsatzes, unabhängig davon, was man Ihnen erzählt. Die Daten bleiben so, wie sie erfasst wurden.',
      },
      {
        title: 'Sie müssen sich nicht mehr mündlich verteidigen.',
        desc: 'Schluss mit Erklären, Rechtfertigen, Erinnern. Wenn ein Kunde etwas bestreitet, öffnen Sie den Bericht und schicken ihn. Es ist nicht Ihr Wort gegen seines. Es ist ein überprüfbares Dokument.',
      },
      {
        title: 'Sie haben überprüfbare Nachweise. Immer.',
        desc: 'Jeder abgeschlossene Einsatz wird automatisch zu einem Bericht: Positionen, Fotos, Uhrzeiten und Siegel. Sie müssen nichts extra tun. Das System erledigt es, während Ihre Mitarbeiter arbeiten.',
      },
    ],
  },

  prova_visiva: {
    title: 'Was Sie sehen, was der Kunde sieht.',
    subtitle: 'Die App für alle, die im Außendienst arbeiten. Der Bericht für alle, die Rede und Antwort stehen müssen.',
  },

  cta_mid: {
    title: 'Sie möchten sehen, wie es in einem echten Fall funktioniert?',
    body: 'Testen Sie es an einem echten Objekt, von der Reinigungskraft, die den Einsatz öffnet, bis zum Bericht, den der Kunde erhält: 14 Tage kostenlos, ohne Kreditkarte.',
    cta: '14 Tage kostenlos testen',
  },

  testimonial: {
    quote:
      'Früher gab es immer wieder Kunden, die etwas bestritten haben. Seit wir GeoTapp nutzen, schicken wir den Bericht, und das Gespräch ändert sich sofort: Es geht um Daten, nicht um Worte. Die Diskussionen werden deutlich kürzer.',
    author: 'Monika S.',
    role: 'Objektleiterin, Unterhaltsreinigungsbetrieb',
  },

  trust: {
    title: 'Wird einer unserer Berichte verändert, sieht man es. Auch wenn wir es tun.',
    body:
      'GeoTapp-Berichte erstellt das System im Moment des Einsatzes. Sobald ein Bericht versiegelt ist, bricht jede Korrektur einer Uhrzeit oder jedes Verschieben eines Fotos das Siegel, und die Prüfung meldet es. Wer ihn erhält, Kunde, Prüfer oder Berater, kann ihn selbst kontrollieren.',
    badge: 'Von jedem prüfbar, ohne Zugang zu Ihrem Konto',
  },

  faq: {
    title: 'Häufig gestellte Fragen',
    subtitle: 'Was uns am häufigsten gefragt wird, bevor es losgeht.',
    items: [
      {
        q: 'Ist GeoTapp nur eine Stempel-App für Reinigungsunternehmen?',
        a: 'Nein. GeoTapp ist ein System für überprüfbare Arbeitsnachweise, nicht nur eine Stempel-App. Stempel-Apps erfassen eine Uhrzeit. GeoTapp erstellt einen versiegelten Bericht mit Position, Fotonachweisen und Zeitstempel, den der Auftraggeber eigenständig prüfen kann. Der Unterschied zwischen „Es steht da“ und „Es lässt sich belegen“.',
      },
      {
        q: 'Erfasst GeoTapp Überstunden und Zuschläge für Nacht- und Feiertagsarbeit?',
        a: 'GeoTapp erfasst Arbeitszeiten, Pausen und Überstunden, auch nachts und an Feiertagen, und exportiert sie als Excel- oder CSV-Datei für Ihre Lohnbuchhaltung oder Steuerberatung, die sie nach dem für Ihren Betrieb geltenden Tarifvertrag anwendet. Bei einer Kontrolle liegen die Aufzeichnungen bereit.',
      },
      {
        q: 'Wie steuere ich Teams, die auf mehrere Objekte verteilt sind?',
        a: 'Mit GeoTapp Flow haben Sie einen Bildschirm für alle Objekte. Sie sehen, wer wo gestempelt hat, sobald die Stempelung ankommt, weisen Aufträge zu und erhalten eine Meldung, wenn eine Schicht offen bleibt. Keine Anrufe, keine E-Mails.',
      },
      {
        q: 'Wie kontrolliere ich, dass die Mitarbeiter die Arbeit erledigt haben?',
        a: 'Jeder Einsatz wird mit der vom Smartphone der Reinigungskraft erfassten Position begonnen und beendet. Die Reinigungskraft schickt Nachweisfotos, die dem Auftrag mit Uhrzeit und Position zugeordnet sind. Der Bericht wird automatisch erstellt und beim Abschluss versiegelt: Jede Änderung ist sichtbar.',
      },
      {
        q: 'Hält GeoTapp bei der Ortung der Mitarbeiter die Vorgaben der DSGVO ein?',
        a: 'GeoTapp ist gebaut, um die Vorgaben der DSGVO einzuhalten: Es erfasst die Position nur, wenn die Reinigungskraft stempelt (Beginn, Pausen, Ende) oder ein Nachweisfoto aufnimmt, lässt die Mitarbeiterinformation vor dem Stempeln in der App unterschreiben und erhebt keine unnötigen Daten.',
      },
      {
        q: 'Funktioniert es auch für Facility Management und Gebäudedienste?',
        a: 'Ja. GeoTapp wird von Reinigungsunternehmen, Gebäudedienstleistern, Facility-Management-Firmen und allen Betrieben mit auf mehrere Objekte verteilten Mitarbeitern genutzt. Es passt vom kleinen Team bis zum Unternehmen mit Hunderten von Mitarbeitern, ohne aufwendige Einrichtung.',
      },
      {
        q: 'Was kostet GeoTapp für ein Reinigungsunternehmen?',
        a: 'GeoTapp Flow beginnt bei 39 € im Monat; die TimeTracker-Plätze für die Mitarbeiter kosten 3 € im Monat je Platz bis 25, ab dem 26. Platz 2,50 €. Mindestlaufzeit 12 Monate, Preise zzgl. MwSt. Vorher können Sie es 14 Tage kostenlos und ohne Karte testen.',
      },
    ],
  },

  cta: {
    title: 'Ihre Mitarbeiter arbeiten gut. Sorgen Sie dafür, dass man es sieht.',
    subtitle:
      'Jeden Tag wird die Arbeit gemacht. Das Problem: Ohne überprüfbare Nachweise steht bei einem Einwand Ihr Wort gegen seines. GeoTapp macht aus jedem Einsatz Unterlagen zum Vorzeigen.',
    primary: '14 Tage kostenlos testen',
    secondary: 'Preise ansehen',
  },

  pricing_hint: {
    label: 'TimeTracker-Plätze ab',
    per: 'pro Mitarbeiter und Monat, zzgl. Flow-Tarif ab 39 € im Monat',
    note: '14 Tage kostenlos testen',
  },

  schema_sector_name: 'Gebäudereinigung',

  schema_faq: [
    {
      question: 'Ist GeoTapp nur eine Stempel-App für Reinigungsunternehmen?',
      answer: 'Nein. GeoTapp ist die App und Software für Reinigungsunternehmen und Gebäudedienste, die über das Stempeln hinausgeht: Sie erstellt versiegelte Berichte mit Positionen, Fotos und Uhrzeiten, die der Auftraggeber selbst prüft, und nicht bloß ein Zeitprotokoll.',
    },
    {
      question: 'Erfasst GeoTapp Überstunden und Zuschläge für Nacht- und Feiertagsarbeit?',
      answer: 'GeoTapp erfasst Arbeitszeiten, Pausen und Überstunden und exportiert sie als Excel- oder CSV-Datei für Ihre Lohnbuchhaltung oder Steuerberatung, die sie nach dem für Ihren Betrieb geltenden Tarifvertrag anwendet.',
    },
    {
      question: 'Wie steuere ich mehrere Objekte gleichzeitig?',
      answer: 'Ein Bildschirm für alle Objekte. Sie sehen, wer wo gestempelt hat, sobald die Stempelung ankommt, weisen Aufträge zu und erhalten eine Meldung, wenn eine Schicht offen bleibt, ohne Anrufe.',
    },
    {
      question: 'Wie dokumentiere ich, dass die Arbeit erledigt wurde?',
      answer: 'Jeder Einsatz wird mit erfasster Position begonnen und beendet. Die Reinigungskraft schickt Nachweisfotos, die dem Auftrag zugeordnet sind. Der Bericht wird automatisch erstellt und beim Abschluss versiegelt: Jede Änderung ist sichtbar.',
    },
    {
      question: 'Hält GeoTapp bei der Ortung der Mitarbeiter die Vorgaben der DSGVO ein?',
      answer: 'Gebaut, um die Vorgaben der DSGVO einzuhalten: Die Position wird nur erfasst, wenn die Reinigungskraft stempelt oder ein Nachweisfoto aufnimmt, nie durchgehend, und die Mitarbeiterinformation wird vor dem Stempeln in der App unterschrieben.',
    },
    {
      question: 'Funktioniert es auch für Facility Management und Gebäudedienste?',
      answer: 'Ja. GeoTapp passt für Reinigungsunternehmen, Gebäudedienste und Facility Management, vom kleinen Team bis zum Unternehmen mit Hunderten von Mitarbeitern.',
    },
    {
      question: 'Was kostet es?',
      answer: 'GeoTapp Flow ab 39 € im Monat, dazu die TimeTracker-Plätze ab 3 € pro Mitarbeiter und Monat. Mindestlaufzeit 12 Monate, Preise zzgl. MwSt. Vorher können Sie es 14 Tage kostenlos und ohne Karte testen.',
    },
  ],
};

export default content;
