import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Baustellen-App: GPS-Anwesenheit & Teamverwaltung | GeoTapp',
    description: 'Anwesenheit, Schichten und Sicherheit auf der Baustelle mit GPS-Stempelungen. Automatische, versiegelte Berichte, für die DSGVO gebaut, für Bauunternehmen.',
  },
  hero: {
    badge: 'App für Bauunternehmen und Baustellen',
    h1_line1: 'Ihre Baustelle dokumentiert,',
    h1_line2: 'bei jeder Stempelung.',
    subtitle: 'Stempelungen mit Position, Teamverwaltung und automatische, versiegelte Berichte. Kein Papierkram, und wenn jemand die Stunden anzweifelt, haben Sie einen Nachweis zur Hand. GeoTapp verbindet Flow + TimeTracker für Bauleiter, Subunternehmer und Bauleitung.',
    cta_primary: 'Auf einer echten Baustelle testen',
    cta_note: '14 Tage, bis zu 50 Mitarbeiter im Außendienst, ohne Kreditkarte.',
  },
  pain: {
    title: 'Probleme, die wir täglich lösen',
    items: [
      {
        title: 'Wer war auf der Baustelle und wann?',
        desc: 'Jede Stempelung hält Uhrzeit und Position fest, die das Telefon in diesem Moment erfasst hat, nicht von Hand eingetragen. Sie landet im versiegelten Bericht, den die Bauleitung prüfen kann.',
      },
      {
        title: 'Wie verwalten Sie Subunternehmer?',
        desc: 'Erfassen Sie die Anwesenheit aller Teams, auch der Subunternehmer, in einem Dashboard, das sich mit jeder Stempelung aktualisiert.',
      },
      {
        title: 'Baustellenberichte kosten Stunden?',
        desc: 'Automatisch erstellt, mit GPS, Stunden und Anwesenheit. Bereit für die Bauleitung und die Bautenstandsberichte, ganz ohne manuelle Eingabe.',
      },
    ],
  },
  workflow: {
    title: 'So funktioniert es',
    subtitle: 'Drei einfache Schritte. Kein Papier. Keine Anrufe.',
    steps: [
      {
        title: 'Der Mitarbeiter stempelt am Baustelleneingang',
        desc: 'Er startet die Schicht am Smartphone. GeoTapp hält Uhrzeit und Position in diesem Moment fest und bei Bedarf Nachweisfotos. Zwischen zwei Stempelungen wird nichts automatisch erfasst.',
      },
      {
        title: 'Der Bauleiter sieht die Stempelungen, sobald sie ankommen',
        desc: 'Ein Dashboard für alle Teams und alle Baustellen. Wer gestempelt hat, wo und um welche Uhrzeit, ohne jemandem telefonisch nachzulaufen.',
      },
      {
        title: 'Der Bericht ist fertig für Bautenstand und Bauleitung',
        desc: 'Am Ende des Tages oder des Auftrags erstellt das System einen versiegelten Bericht mit Anwesenheit, GPS und Stunden. Bereit für die Bauleitung, ohne eine Minute Handarbeit.',
      },
    ],
  },
  differenza: {
    title: 'Baustellen-App: Zeiterfassung oder überprüfbarer Nachweis?',
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
        geotapp: 'Sie, die Bauleitung, ein Dritter, eigenständig',
      },
      {
        label: 'Bei Streitigkeiten',
        competitor: 'Nur Ihr Wort',
        geotapp: 'Versiegelter Bericht, jede Änderung erkennbar',
      },
      {
        label: 'Baustellenbericht',
        competitor: 'Manuell oder fehlend',
        geotapp: 'Automatisch erstellt, mit GPS und Anwesenheit',
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
      'Die Bauleitung fragt, wer am Dienstag auf der Baustelle war. Niemand weiß es genau.',
      'Die Stundenzettel kommen unvollständig, verspätet oder unleserlich an.',
      'Der Subunternehmer bestreitet die Stunden. Sie haben keinen Nachweis.',
      'Sie erstellen den Bautenstandsbericht von Hand und setzen die Daten aus WhatsApp-Nachrichten zusammen.',
    ],
    dopo: [
      'Die Bauleitung fragt, wer am Dienstag auf der Baustelle war. Sie öffnen die Stempelungen dieses Tages: alles da.',
      'Die Anwesenheit wird bei jeder Stempelung erfasst, mit Uhrzeit und Position.',
      'Der Subunternehmer bestreitet die Stunden? Sie zeigen den versiegelten Bericht.',
      'Der Bautenstandsbericht ist schon fertig: Stunden, Anwesenheit und GPS automatisch zusammengefasst.',
    ],
  },
  features: {
    title: 'Funktionen für die Baustelle',
    items: [
      {
        title: 'Versiegelte Anwesenheit mit Position',
        desc: 'Jeder Beginn, jede Pause und jedes Ende auf der Baustelle wird mit Position und Uhrzeit erfasst. Zum Vorzeigen bei Bauleitung, Auftraggeber und Behörde, wenn es darauf ankommt.',
      },
      {
        title: 'Dashboard für mehrere Baustellen',
        desc: 'Verfolgen Sie mehrere Baustellen auf einem Bildschirm: Für jede Baustelle sehen Sie, wer gestempelt hat, wo und um welche Uhrzeit, sobald die Stempelung ankommt.',
      },
      {
        title: 'Automatische Berichte für den Bautenstand',
        desc: 'Das System erstellt Berichte mit zusammengefasster Anwesenheit, Stunden und GPS. Bereit für Bautenstandsberichte und Bauleitung, ohne manuelle Eingabe.',
      },
      {
        title: 'Subunternehmer erfassen',
        desc: 'Jedes Team, intern oder extern, stempelt am Smartphone. Der Bauleiter sieht alle in einem Dashboard, ohne jemandem nachzulaufen.',
      },
      {
        title: 'Versiegelte Fotonachweise',
        desc: 'Die Mitarbeiter fotografieren direkt in der App. Jedes Bild ist mit GPS und Zeitstempel der Baustelle zugeordnet: Jede spätere Änderung ist erkennbar.',
      },
      {
        title: 'Position nur beim Stempeln',
        desc: 'Ortung, gebaut für die Vorgaben der DSGVO: Die Position wird nur beim Stempeln erfasst, nie durchgehend, und die Mitarbeiterinformation wird vor dem Stempeln in der App unterschrieben.',
      },
    ],
  },
  testimonial: {
    quote: 'Seit wir GeoTapp nutzen, fragt die Bauleitung nicht mehr nach Stundenzetteln. Wir öffnen den Bericht, und der Bautenstandsbericht ist fertig.',
    author: 'Josef M.',
    role: 'Inhaber, Bauunternehmen, 35 Mitarbeiter',
  },
  faq: {
    title: 'Häufig gestellte Fragen',
    subtitle: 'Was uns am häufigsten gefragt wird, bevor es losgeht.',
    items: [
      {
        q: 'Wer war auf der Baustelle und wann?',
        a: 'Jede Stempelung hält Uhrzeit und Position fest, die das Telefon in diesem Moment erfasst hat, nicht von Hand eingetragen. Sie landet im versiegelten Bericht, den die Bauleitung prüfen kann.',
      },
      {
        q: 'Wie verwalten Sie Subunternehmer auf der Baustelle?',
        a: 'GeoTapp erfasst die Anwesenheit aller Teams, auch der Subunternehmer. Jeder Mitarbeiter stempelt an seinem eigenen Smartphone, und der Bauleiter sieht die Stempelungen, sobald sie ankommen, in einem Dashboard.',
      },
      {
        q: 'Was verlangt §17 MiLoG auf der Baustelle bei der Arbeitszeitaufzeichnung?',
        a: 'Das Baugewerbe steht in §2a SchwarzArbG, dort gilt §17 MiLoG: Beginn, Ende und Dauer der täglichen Arbeitszeit sind spätestens bis zum Ablauf des siebten Kalendertages nach dem Arbeitstag aufzuzeichnen und zwei Jahre aufzubewahren. GeoTapp erfasst Beginn, Pausen und Ende beim Stempeln mit Uhrzeit und Position; die Zeiten lassen sich als Excel- oder CSV-Datei exportieren. Ob Ihre Aufzeichnung den Vorgaben genügt, bleibt Sache des Unternehmens und seiner Beratung. GeoTapp ist keine Rechtsberatung.',
      },
      {
        q: 'Kosten Baustellenberichte stundenlange Handarbeit?',
        a: 'Nein. GeoTapp erstellt die Berichte automatisch mit GPS, Stunden und Anwesenheit. Sie sind für die Bauleitung und die Bautenstandsberichte bereit, ohne manuelle Eingabe.',
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
  schema_sector_name: 'Bauwesen',
  schema_faq: [
    {
      question: 'Wer war auf der Baustelle und wann?',
      answer: 'Jede Stempelung hält Uhrzeit und Position fest, die das Telefon in diesem Moment erfasst hat, nicht von Hand eingetragen. Sie landet im versiegelten Bericht, den die Bauleitung prüfen kann.',
    },
    {
      question: 'Wie verwalten Sie Subunternehmer auf der Baustelle?',
      answer: 'GeoTapp erfasst die Anwesenheit aller Teams, auch der Subunternehmer. Jeder Mitarbeiter stempelt an seinem eigenen Smartphone, und der Bauleiter sieht die Stempelungen, sobald sie ankommen, in einem Dashboard.',
    },
    {
      question: 'Kosten Baustellenberichte stundenlange Handarbeit?',
      answer: 'Nein. GeoTapp erstellt die Berichte automatisch mit GPS, Stunden und Anwesenheit. Sie sind für die Bauleitung und die Bautenstandsberichte bereit, ohne manuelle Eingabe.',
    },
  ],
};

export default content;
