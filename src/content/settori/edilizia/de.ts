import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Baustellen-App: GPS-Anwesenheit & Teamverwaltung | GeoTapp',
    description: 'Verwalten Sie Anwesenheiten, Schichten und Sicherheit auf der Baustelle mit Echtzeit-GPS. Zertifizierte Stempelungen, automatische Berichte. DSGVO-konforme App für Bauunternehmen.',
  },
  hero: {
    badge: 'App für Bauunternehmen und Baustellen',
    h1_line1: 'Ihre Baustelle unter Kontrolle,',
    h1_line2: 'in Echtzeit.',
    subtitle: 'GPS-zertifizierte Stempelungen, Teamverwaltung und automatische Berichte. Kein Papierkram, keine Streitigkeiten. GeoTapp verbindet Flow + TimeTracker für Bauleiter, Subunternehmer und Projektleitung.',
    cta_primary: 'GeoTapp 14 Tage kostenlos testen',
    cta_note: 'Keine Verpflichtung. Keine Kreditkarte erforderlich.',
  },
  pain: {
    title: 'Probleme, die wir täglich lösen',
    items: [
      {
        title: 'Wer war auf der Baustelle und wann?',
        desc: 'Jede GPS-Stempelung ist mit Zeitstempel und Zertifikat versehen. GeoTapp erfasst reale Koordinaten zum Zeitpunkt der Stempelung — nicht manuell eingetragen. Die Daten sind jederzeit von der Bauleitung überprüfbar.',
      },
      {
        title: 'Wie verwalten Sie Subunternehmer?',
        desc: 'Verfolgen Sie Zugang und Anwesenheit aller Teams, einschließlich Subunternehmer, über ein einziges Echtzeit-Dashboard.',
      },
      {
        title: 'Baustellenberichte kosten Stunden?',
        desc: 'Automatisch generiert mit GPS, Stunden und Anwesenheiten. Bereit für die Bauleitung und Aufmaße ohne manuelle Eingabe.',
      },
    ],
  },
  workflow: {
    title: 'So funktioniert es',
    subtitle: 'Drei einfache Schritte. Kein Papier. Keine Anrufe.',
    steps: [
      {
        title: 'Der Arbeiter stempelt am Baustelleneingang',
        desc: 'Startet die Schicht vom Smartphone. GeoTapp erfasst reale GPS-Koordinaten, Zeitstempel und — bei Bedarf — Fotos. Vollautomatisch, manipulationssicher.',
      },
      {
        title: 'Der Bauleiter sieht alles in Echtzeit',
        desc: 'Ein Dashboard für alle Teams und alle Baustellen. Wer anwesend ist, wo und seit wann — ohne jemanden telefonisch nachzujagen.',
      },
      {
        title: 'Der Bericht ist fertig für Aufmaße und Bauleitung',
        desc: 'Am Ende des Tages oder des Auftrags generiert das System einen versiegelten Bericht mit Anwesenheiten, GPS und Stunden. Bereit für die Bauleitung ohne eine Minute Handarbeit.',
      },
    ],
  },
  differenza: {
    title: 'Baustellen-App: Zeiterfassung oder Zertifizierung?',
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
        geotapp: 'Sie, die Bauleitung, ein Dritter — unabhängig',
      },
      {
        label: 'Bei Streitigkeiten',
        competitor: 'Daten nicht belastbar',
        geotapp: 'Versiegelter Bericht, manipulationssicher',
      },
      {
        label: 'Baustellenbericht',
        competitor: 'Manuell oder fehlend',
        geotapp: 'Automatisch generiert mit GPS und Anwesenheiten',
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
      'Die Bauleitung fragt, wer am Dienstag auf der Baustelle war. Niemand weiß es genau.',
      'Anwesenheitslisten kommen unvollständig, verspätet oder unleserlich an.',
      'Der Subunternehmer bestreitet die Stunden. Sie haben keine Beweise.',
      'Sie erstellen das Aufmaß manuell und setzen Daten aus WhatsApp-Nachrichten zusammen.',
    ],
    dopo: [
      'Die Bauleitung fragt, wer am Dienstag da war. Öffnen Sie das Dashboard: alles da.',
      'Anwesenheiten werden automatisch erfasst, mit GPS und Zeitstempel.',
      'Der Subunternehmer bestreitet? Zeigen Sie den versiegelten Bericht.',
      'Das Aufmaß ist fertig: Stunden, Anwesenheiten und GPS automatisch zusammengefasst.',
    ],
  },
  features: {
    title: 'Funktionen für die Baustelle',
    items: [
      {
        title: 'GPS-zertifizierte Anwesenheit',
        desc: 'Jeder Ein- und Austritt wird mit realer GPS-Position und Zeitstempel erfasst. Belastbar vor Bauleitung, Auftraggeber und Behörden.',
      },
      {
        title: 'Multi-Baustellen-Dashboard',
        desc: 'Überwachen Sie mehrere Baustellen auf einem Bildschirm. Sehen Sie in Echtzeit, wer anwesend ist, wo und seit wann — für jede aktive Baustelle.',
      },
      {
        title: 'Automatische Aufmaßberichte',
        desc: 'Das System generiert Berichte mit zusammengefassten Anwesenheiten, Stunden und GPS. Bereit für Aufmaße und Bauleitung, ohne manuelle Eingabe.',
      },
      {
        title: 'Subunternehmer-Tracking',
        desc: 'Jedes Team — intern oder extern — stempelt vom Smartphone. Der Bauleiter sieht alle auf einem Dashboard, ohne jemanden nachzujagen.',
      },
      {
        title: 'Versiegelte Fotonachweise',
        desc: 'Arbeiter fotografieren direkt aus der App. Jedes Bild ist mit GPS und Zeitstempel an die Baustelle gekoppelt — nach Erstellung manipulationssicher.',
      },
      {
        title: 'Integrierte DSGVO-Konformität',
        desc: 'Geolokalisierung von Grund auf DSGVO-konform. Vorlagen für Datenschutzhinweise an Mitarbeiter enthalten.',
      },
    ],
  },
  testimonial: {
    quote: 'Seit wir GeoTapp nutzen, fragt die Bauleitung nicht mehr nach Anwesenheitslisten. Wir öffnen den Bericht und das Aufmaß ist fertig.',
    author: 'Josef M.',
    role: 'Inhaber, Bauunternehmen — 35 Mitarbeiter',
  },
  faq: {
    title: 'Häufig gestellte Fragen',
    subtitle: 'Was uns am häufigsten gefragt wird, bevor es losgeht.',
    items: [
      {
        q: 'Wer war auf der Baustelle und wann?',
        a: 'Jede GPS-Stempelung ist mit Zeitstempel und Zertifikat versehen. GeoTapp erfasst reale Koordinaten zum Zeitpunkt der Stempelung — nicht manuell eingetragen. Die Daten sind jederzeit von der Bauleitung überprüfbar.',
      },
      {
        q: 'Wie verwalten Sie Subunternehmer auf der Baustelle?',
        a: 'GeoTapp verfolgt Zugang und Anwesenheit aller Teams, einschließlich Subunternehmer. Jeder Arbeiter stempelt vom Smartphone und der Bauleiter sieht alles in Echtzeit auf einem Dashboard.',
      },
      {
        q: 'Kosten Baustellenberichte stundenlange Handarbeit?',
        a: 'Nein. GeoTapp generiert Berichte automatisch mit GPS, Stunden und Anwesenheiten. Sie sind bereit für die Bauleitung und Aufmaße ohne manuelle Eingabe.',
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
    per: 'Arbeiter/Monat',
    note: '14 Tage kostenlos testen',
  },
  schema_sector_name: 'Bauwesen',
  schema_faq: [
    {
      question: 'Wer war auf der Baustelle und wann?',
      answer: 'Jede GPS-Stempelung ist mit Zeitstempel und Zertifikat versehen. GeoTapp erfasst reale Koordinaten zum Zeitpunkt der Stempelung — nicht manuell eingetragen. Die Daten sind jederzeit von der Bauleitung überprüfbar.',
    },
    {
      question: 'Wie verwalten Sie Subunternehmer auf der Baustelle?',
      answer: 'GeoTapp verfolgt Zugang und Anwesenheit aller Teams, einschließlich Subunternehmer. Jeder Arbeiter stempelt vom Smartphone und der Bauleiter sieht alles in Echtzeit auf einem Dashboard.',
    },
    {
      question: 'Kosten Baustellenberichte stundenlange Handarbeit?',
      answer: 'Nein. GeoTapp generiert Berichte automatisch mit GPS, Stunden und Anwesenheiten. Sie sind bereit für die Bauleitung und Aufmaße ohne manuelle Eingabe.',
    },
  ],
};

export default content;
