import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App für Installateure & Anlagenbauer: GPS-Einsatzverfolgung | GeoTapp',
    description: 'Verfolgen Sie Einsätze, Stunden und Materialien für HLK-, Elektro- und Sanitärinstallateure mit GPS. Automatische Servicenachweise, keine Kundenstreitigkeiten. GeoTapp kostenlos testen.',
  },
  hero: {
    badge: 'App für Installateure, Techniker und Serviceteams',
    h1_line1: 'Jeder Einsatz dokumentiert,',
    h1_line2: 'jede Stunde erfasst.',
    subtitle: 'Für Elektro-, Sanitär-, HLK- und Anlageninstallateure. GeoTapp verbindet Flow + TimeTracker, um GPS, Stunden und Fotos für jeden Auftrag zu erfassen — vom Transporter ins Büro ohne Telefonate.',
    cta_primary: 'GeoTapp 14 Tage kostenlos testen',
    cta_note: 'Keine Verpflichtung. Keine Kreditkarte erforderlich.',
  },
  pain: {
    title: 'Probleme, die wir täglich lösen',
    items: [
      {
        title: 'Kunden bestreiten die geleisteten Stunden',
        desc: 'GPS-Stempelungen mit Zeitstempel als unwiderlegbarer Nachweis. Die Daten werden zum Zeitpunkt des Einsatzes zertifiziert — nachträglich nicht änderbar.',
      },
      {
        title: 'Techniker hinterhertelefonieren',
        desc: 'Echtzeit-Karte mit dem Status jedes Einsatzes. Sie wissen, wo alle Ihre Techniker sind, ohne einen einzigen Anruf zu tätigen.',
      },
      {
        title: 'Unvollständige oder fehlende Arbeitsberichte',
        desc: 'Daten kommen zu spät, unvollständig oder gar nicht. Stunden und Einsätze am Monatsende zu rekonstruieren ist eine eigene Aufgabe, die Zeit und Geld kostet.',
      },
    ],
  },
  workflow: {
    title: 'So funktioniert es',
    subtitle: 'Drei einfache Schritte. Kein Papier. Keine Anrufe.',
    steps: [
      {
        title: 'Der Techniker stempelt per GPS beim Start',
        desc: 'Öffnet den Auftrag vom Smartphone. GeoTapp erfasst reale GPS-Koordinaten, Zeitstempel und Fotos — vollautomatisch, manipulationssicher.',
      },
      {
        title: 'Stunden werden automatisch pro Auftrag erfasst',
        desc: 'Jede gearbeitete Minute wird dem richtigen Auftrag zugeordnet. Der Verantwortliche sieht in Echtzeit, wer wo arbeitet.',
      },
      {
        title: 'Der Kundenbericht wird automatisch generiert',
        desc: 'Am Ende des Einsatzes generiert das System einen Bericht mit GPS, Stunden und digitaler Signatur. Der Kunde erhält ihn und überprüft ihn selbstständig.',
      },
    ],
  },
  differenza: {
    title: 'Anlagenbau-App: Zeiterfassung oder Zertifizierung?',
    subtitle: 'Die meisten Apps erfassen nur die Uhrzeit. GeoTapp liefert überprüfbare Nachweise.',
    rows: [
      {
        label: 'Was wird erfasst',
        competitor: 'Ein- und Ausstempelzeit',
        geotapp: 'Uhrzeit + verifiziertes GPS + Fotos + erledigte Arbeit',
      },
      {
        label: 'Wer kann prüfen',
        competitor: 'Nur Ihr Büro',
        geotapp: 'Sie, der Auftraggeber, ein Dritter — unabhängig',
      },
      {
        label: 'Bei Streitigkeiten',
        competitor: 'Daten nicht belastbar',
        geotapp: 'Versiegelter Bericht, manipulationssicher',
      },
      {
        label: 'Einsatzbericht',
        competitor: 'Manuell oder fehlend',
        geotapp: 'Automatisch generiert mit GPS und Fotos',
      },
      {
        label: 'DSGVO-Konformität',
        competitor: 'Oft fraglich',
        geotapp: 'Von Grund auf konform, Formulare enthalten',
      },
    ],
  },
  prima_dopo: {
    title: 'Was jetzt passiert. Was mit GeoTapp passiert.',
    prima: [
      'Der Kunde bestreitet die Endzeit und verlangt einen Rabatt.',
      'Der Techniker sagt „4 Stunden gearbeitet". Der Kunde sagt „es sind nur 2".',
      'Sie haben keine Beweise. Die Diskussion dauert Tage und die Zahlung ist gefährdet.',
      'Am Monatsende rekonstruieren Sie Stunden und Aufträge aus WhatsApp-Nachrichten.',
    ],
    dopo: [
      'Der Kunde bestreitet? Öffnen Sie den Bericht: Fotos, GPS, Zeitstempel, digitale Signatur.',
      'Sie senden ihn. Die Diskussion ist in einer Minute beendet.',
      'Die Zahlung ist sicher. Der Techniker ist geschützt.',
      'Am Monatsende ist der Export fertig — Stunden und Aufträge automatisch zusammengefasst.',
    ],
  },
  features: {
    title: 'Funktionen für Installateure und Serviceteams',
    items: [
      {
        title: 'Überprüfbare GPS-Stempelung',
        desc: 'Jeder Ein- und Austritt ist mit Standort, Zeitstempel und Auftrag verknüpft. Belastbar vor Kunden und Behörden.',
      },
      {
        title: 'Versiegelte Fotonachweise',
        desc: 'Der Techniker fotografiert direkt aus der App. Jedes Bild ist mit GPS und Zeitstempel an den Einsatz gekoppelt — nach Erstellung manipulationssicher.',
      },
      {
        title: 'Multi-Standort-Auftragsverwaltung',
        desc: 'Weisen Sie Aufträge zu, verfolgen Sie den Fortschritt an allen Standorten und erhalten Sie automatische Warnungen, wenn ein Auftrag nicht rechtzeitig geöffnet oder geschlossen wird.',
      },
      {
        title: 'Automatische digitale Arbeitsberichte',
        desc: 'Am Ende des Einsatzes ist der Bericht fertig: Stunden, Fotos, Notizen und Unterschrift. Kein Papier, keine Anrufe. Der Techniker sendet ihn dem Kunden direkt aus der App.',
      },
      {
        title: 'Export für Lohnabrechnung und Fakturierung',
        desc: 'Exportieren Sie monatliche Anwesenheiten und Stunden pro Auftrag. Lohnabrechnung und Fakturierung werden zur Sache von Minuten.',
      },
      {
        title: 'Integrierte DSGVO-Konformität',
        desc: 'Geolokalisierung von Grund auf DSGVO-konform. Vorlagen für Datenschutzhinweise an Mitarbeiter enthalten.',
      },
    ],
  },
  testimonial: {
    quote: 'Kunden bestreiten die Stunden nicht mehr. Wir öffnen den Bericht mit GPS und Fotos und die Diskussion ist beendet.',
    author: 'Robert F.',
    role: 'Inhaber, Anlagenbauunternehmen — 20 Techniker',
  },
  faq: {
    title: 'Häufig gestellte Fragen',
    subtitle: 'Was uns am häufigsten gefragt wird, bevor es losgeht.',
    items: [
      {
        q: 'Bestreiten Kunden die geleisteten Einsatzstunden?',
        a: 'Mit GeoTapp werden GPS-Stempelungen zum Zeitpunkt des Einsatzes erfasst und sind nicht änderbar. Sie stellen einen unwiderlegbaren Nachweis der geleisteten Stunden dar und eliminieren jede Streitigkeit.',
      },
      {
        q: 'Wie überwache ich mehrere Teams auf verschiedenen Aufträgen?',
        a: 'GeoTapp bietet eine Echtzeit-Karte mit dem Status jedes Einsatzes. Sie wissen genau, wo Ihre Techniker sind und an welchem Auftrag sie arbeiten, ohne zu telefonieren.',
      },
      {
        q: 'Wie beschleunige ich die Fakturierung abgeschlossener Einsätze?',
        a: 'GeoTapp generiert automatisch den Export von Stunden und Aufträgen, bereit für Ihre Buchhaltungssoftware. Keine manuelle Eingabe, kein Fehlerrisiko — die Fakturierung wird zum Klick.',
      },
    ],
  },
  cta: {
    title: 'GeoTapp 14 Tage kostenlos testen',
    subtitle: 'Keine Verpflichtung. Keine Kreditkarte erforderlich. Antwort innerhalb von 12 Geschäftsstunden.',
    primary: 'Jetzt kostenlos starten',
    secondary: 'Preise ansehen',
  },
  pricing_hint: {
    label: 'Ab',
    per: 'Techniker/Monat',
    note: '14 Tage kostenlos testen',
  },
  schema_sector_name: 'Anlagenbau',
  schema_faq: [
    {
      question: 'Bestreiten Kunden die geleisteten Einsatzstunden?',
      answer: 'Mit GeoTapp werden GPS-Stempelungen zum Zeitpunkt des Einsatzes erfasst und sind nicht änderbar. Sie stellen einen unwiderlegbaren Nachweis der geleisteten Stunden dar und eliminieren jede Streitigkeit.',
    },
    {
      question: 'Wie überwache ich mehrere Teams auf verschiedenen Aufträgen?',
      answer: 'GeoTapp bietet eine Echtzeit-Karte mit dem Status jedes Einsatzes. Sie wissen genau, wo Ihre Techniker sind und an welchem Auftrag sie arbeiten, ohne zu telefonieren.',
    },
    {
      question: 'Wie beschleunige ich die Fakturierung abgeschlossener Einsätze?',
      answer: 'GeoTapp generiert automatisch den Export von Stunden und Aufträgen, bereit für Ihre Buchhaltungssoftware. Keine manuelle Eingabe, kein Fehlerrisiko — die Fakturierung wird zum Klick.',
    },
  ],
};

export default content;
