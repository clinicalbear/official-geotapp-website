import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App für Reinigungsunternehmen: Teamverwaltung mit GPS | GeoTapp',
    description:
      'Teams, Schichten und Anwesenheit mit GPS-Stempelungen verwalten. Automatische Leistungsnachweise, weniger Streit. Für die DSGVO gebaut, für die Gebäudereinigung.',
  },

  hero: {
    badge: 'App für Reinigungsunternehmen und Facility Services',
    h1_line1: 'Ihr Reinigungsunternehmen,',
    h1_line2: 'geführt, Stempelung für Stempelung.',
    subtitle:
      'GPS-Stempelungen, automatische Leistungsnachweise und Schichtverwaltung in einer App. Kein Excel, weniger Streit. Der Kunde beschwert sich? Sie schicken den Bericht, und die Diskussion ist beendet.',
    cta_primary: 'An einem echten Objekt testen',
    cta_note: '14 Tage, bis zu 50 Mitarbeiter im Außendienst, ohne Kreditkarte.',
  },

  pain: {
    title: 'Probleme, die wir täglich lösen',
    items: [
      {
        title: 'Kunden bestreiten die geleisteten Stunden?',
        desc: 'Jede Stempelung hält Position und Uhrzeit fest. Sie schicken den Bericht, und der Kunde kann ihn selbst prüfen.',
      },
      {
        title: 'Die Stundenzettel sind unzuverlässig?',
        desc: 'Stempeln per Smartphone, keine manuellen Eingaben. Die Daten bleiben so, wie sie erfasst wurden: Jede Änderung ist erkennbar.',
      },
      {
        title: 'Mehrere Teams schwer zu koordinieren?',
        desc: 'Sie sehen, wer gestempelt hat und wo, über alle Objekte hinweg, auf einem Bildschirm. Keine Anrufe.',
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
      'Sie schicken ihn, und der Kunde kann ihn selbst prüfen.',
      'Sie haben einen Nachweis zur Hand. Auch die Reinigungskraft hat etwas in der Hand.',
    ],
  },

  workflow: {
    title: 'So funktioniert es',
    subtitle: 'Drei einfache Schritte. Kein Papier. Keine Anrufe.',
    steps: [
      {
        title: 'Die Reinigungskraft stempelt vor Ort',
        desc: 'Sie startet und beendet die Schicht am Smartphone. GeoTapp hält Position und Uhrzeit in diesem Moment fest und bei Bedarf Nachweisfotos. Zwischen den Stempelungen wird nichts automatisch erfasst.',
      },
      {
        title: 'Die Leitung sieht jede Stempelung, sobald sie ankommt',
        desc: 'Ein Bildschirm für alle Objekte. Sie sehen, wer gestempelt hat, wo und um welche Uhrzeit, ohne jemandem nachzulaufen.',
      },
      {
        title: 'Der Bericht ist automatisch fertig',
        desc: 'Am Ende der Schicht erstellt das System einen versiegelten Bericht mit GPS, Fotos und Siegel. Schicken Sie ihn dem Kunden, der ihn eigenständig prüfen kann.',
      },
    ],
  },

  differenza: {
    title: 'Stempelung oder Leistungsnachweis.',
    subtitle: 'Die meisten Apps erfassen Uhrzeiten. GeoTapp liefert Nachweise für Ihren Kunden.',
    rows: [
      {
        label: 'Was wird erfasst',
        competitor: 'Ein- und Ausstempelzeit',
        geotapp: 'Uhrzeit + Position bei der Stempelung + Fotos + erledigte Aufgaben',
      },
      {
        label: 'Wer kann prüfen',
        competitor: 'Nur Ihr Büro',
        geotapp: 'Sie, der Kunde, ein Dritter, eigenständig',
      },
      {
        label: 'Bei Streitigkeiten',
        competitor: 'Nur Ihr Wort',
        geotapp: 'Versiegelter Bericht, jede Änderung erkennbar',
      },
      {
        label: 'Fotonachweis',
        competitor: 'Fehlt oder ist nicht verknüpft',
        geotapp: 'Dem Bericht mit Zeitstempel und GPS beigefügt',
      },
      {
        label: 'DSGVO',
        competitor: 'Muss oft erst geprüft werden',
        geotapp: 'Gebaut, um die Vorgaben der DSGVO einzuhalten, Vorlagen inklusive',
      },
    ],
  },

  features: {
    title: 'App für Reinigungsunternehmen: Leistungsnachweise, nicht nur Stempelungen.',
    items: [
      {
        title: 'Automatische Leistungsnachweise',
        desc: 'Jeder abgeschlossene Einsatz erzeugt einen Bericht mit GPS, Fotos und Zeitstempel. Der Kunde erhält ihn und prüft ihn selbst, ohne Zugang zu Ihrem System.',
      },
      {
        title: 'Den Überblick über alle Objekte',
        desc: 'Sie sehen, wer gestempelt hat und wo, in allen Gebäuden, sobald die Stempelung ankommt. Keine Anrufe, keine E-Mails. Zwischen den Stempelungen wird nichts automatisch erfasst.',
      },
      {
        title: 'Berichte, die jeder prüfen kann',
        desc: 'Jeder Bericht ist versiegelt, und jede Änderung ist erkennbar. Ein Kunde, eine Prüfstelle oder ein Berater kann ihn eigenständig prüfen.',
      },
      {
        title: 'Schicht- und Teamverwaltung',
        desc: 'Weisen Sie Schichten zu, verwalten Sie Objekte und erhalten Sie eine Meldung, wenn eine Schicht offen bleibt.',
      },
      {
        title: 'Fotodokumentation',
        desc: 'Die Reinigungskräfte fotografieren direkt in der App. Jedes Bild trägt Uhrzeit und Position, ein sichtbarer Beleg für die geleistete Arbeit.',
      },
      {
        title: 'Ihr Personal ist geschützt',
        desc: 'Ein überprüfbarer Bericht gibt auch der Reinigungskraft etwas in die Hand gegen unbegründete Vorwürfe. Gute Arbeit belegen die Daten.',
      },
    ],
  },

  testimonial: {
    quote:
      'Wenn ein Kunde einen Einsatz bestreitet, schicken wir den Bericht mit Fotos und Position, und er prüft ihn selbst.',
    author: 'Sabine M.',
    role: 'Inhaberin, Gebäudereinigungsunternehmen - Deutschland',
  },

  faq: {
    title: 'Häufig gestellte Fragen',
    subtitle: 'Was uns am häufigsten gefragt wird, bevor es losgeht.',
    items: [
      {
        q: 'Wie funktioniert die GPS-Stempelung für Reinigungsunternehmen?',
        a: 'Die Reinigungskraft stempelt am Smartphone ein und aus. GeoTapp erfasst die GPS-Position in diesem Moment, nicht von Hand eingetragen. Jede Stempelung landet mit Zeitstempel und Position im versiegelten Bericht, den der Kunde prüfen kann.',
      },
      {
        q: 'Kann ich dem Kunden belegen, dass die Leistung erbracht wurde?',
        a: 'Ja. GeoTapp erstellt nach jedem Einsatz automatisch einen versiegelten Bericht mit GPS, Fotos und Zeitstempel. Der Kunde erhält ihn und prüft ihn selbst, ohne Zugang zu Ihrem System.',
      },
      {
        q: 'Hält GeoTapp bei der GPS-Erfassung der Mitarbeiter die Vorgaben der DSGVO ein?',
        a: 'GeoTapp ist gebaut, um die Vorgaben der DSGVO einzuhalten: Es erfasst die Position nur, wenn die Reinigungskraft stempelt (Beginn, Pause, Ende) oder ein Nachweisfoto aufnimmt, lässt die Mitarbeiterinformation vor dem Stempeln in der App unterschreiben und erhebt keine unnötigen Daten. Zwischen den Stempelungen wird nichts automatisch erfasst.',
      },
      {
        q: 'Wie steuere ich Teams, die auf mehrere Objekte verteilt sind?',
        a: 'Mit GeoTapp Flow haben Sie einen Bildschirm für alle Objekte. Sie sehen, wer gestempelt hat und wo, weisen Aufträge zu und erhalten eine Meldung, wenn eine Schicht offen bleibt.',
      },
      {
        q: 'Brauche ich noch Stundenzettel aus Papier?',
        a: 'Nein. GeoTapp ersetzt die Papierzettel durch Stempelungen am Smartphone. Die Daten lassen sich für die Lohnabrechnung als Excel- oder CSV-Datei exportieren.',
      },
      {
        q: 'Was kostet GeoTapp für ein Reinigungsunternehmen?',
        a: 'GeoTapp Flow beginnt bei 39 € im Monat; jede Reinigungskraft mit der TimeTracker-App kostet 3 € im Monat zusätzlich (ab dem 26. Platz 2,50 €). Der Abonnementvertrag läuft mindestens 12 Monate. Preise zzgl. MwSt. Sie können es 14 Tage kostenlos und ohne Karte testen.',
      },
      {
        q: 'Verfolgt GeoTapp Reinigungskräfte per GPS?',
        a: 'Nicht durchgehend. Die Reinigungskraft stempelt am Smartphone ein und aus, und jede Stempelung ist mit einer GPS-Position und einem Zeitstempel verknüpft, erfasst in diesem Moment (Beginn, Pause, Ende) und wenn ein Nachweisfoto aufgenommen wird. Es ist eine Position als Anwesenheitsnachweis, keine Überwachung: Zwischen den Stempelungen wird nichts automatisch erfasst, und die App fragt nicht nach der Berechtigung, die Position im Hintergrund zu lesen.',
      },
    ],
  },

  cta: {
    title: 'Ihre Reinigungskräfte arbeiten gut. Sorgen Sie dafür, dass der Kunde es sieht.',
    subtitle:
      'Jeder Einsatz wird zu einem Bericht, den Sie vorzeigen können, und der Kunde kann ihn selbst prüfen.',
    primary: '14 Tage kostenlos testen',
    secondary: 'Preise ansehen',
  },

  pricing_hint: {
    label: 'TimeTracker-Plätze ab',
    per: 'pro Mitarbeiter und Monat, zzgl. Flow-Tarif ab 39 € im Monat',
    note: '14 Tage kostenlos testen',
  },

  schema_sector_name: 'Reinigungsunternehmen',

  schema_faq: [
    {
      question: 'Wie funktioniert die GPS-Stempelung für Reinigungsunternehmen?',
      answer:
        'Die Reinigungskraft stempelt am Smartphone ein und aus. GeoTapp erfasst die GPS-Position in diesem Moment, nicht von Hand eingetragen. Jede Stempelung landet mit Zeitstempel und Position im versiegelten Bericht, den der Kunde prüfen kann.',
    },
    {
      question: 'Kann ich dem Kunden belegen, dass die Leistung erbracht wurde?',
      answer:
        'Ja. GeoTapp erstellt nach jedem Einsatz automatisch einen versiegelten Bericht mit GPS, Fotos und Zeitstempel. Der Kunde erhält ihn und prüft ihn selbst.',
    },
    {
      question: 'Hält GeoTapp bei der GPS-Erfassung der Mitarbeiter die Vorgaben der DSGVO ein?',
      answer:
        'GeoTapp ist gebaut, um die Vorgaben der DSGVO einzuhalten: Es erfasst die Position nur, wenn die Reinigungskraft stempelt (Beginn, Pause, Ende) oder ein Nachweisfoto aufnimmt, lässt die Mitarbeiterinformation vor dem Stempeln in der App unterschreiben und erhebt keine unnötigen Daten. Zwischen den Stempelungen wird nichts automatisch erfasst.',
    },
    {
      question: 'Verfolgt GeoTapp Reinigungskräfte per GPS?',
      answer:
        'Nicht durchgehend. Die Reinigungskraft stempelt am Smartphone ein und aus, und jede Stempelung ist mit einer GPS-Position und einem Zeitstempel verknüpft, erfasst in diesem Moment (Beginn, Pause, Ende) und wenn ein Nachweisfoto aufgenommen wird. Zwischen den Stempelungen wird nichts automatisch erfasst.',
    },
  ],
};

export default content;
