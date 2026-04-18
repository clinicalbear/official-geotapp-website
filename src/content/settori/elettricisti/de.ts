import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App für Elektriker | GeoTapp — GPS-Einsatzberichte & Beweise',
    description: 'GeoTapp ist die App für Elektriker: GPS-verifizierte Einsatzberichte, Anlagenfotos und manipulationssichere Nachweise. Streitigkeiten mit echten Beweisen abschließen. Gratis testen.',
  },
  hero: {
    badge: 'App für Elektriker und Elektroinstallationsbetriebe',
    h1_line1: 'App für Elektriker:',
    h1_line2: 'GPS-Einsatzberichte, Fotobeweise und keine Streitigkeiten.',
    subtitle: 'GeoTapp erfasst jeden Elektroeinsatz mit GPS, Fotos und verifizierbaren Zeitstempeln. Kunde bestreitet den Einsatz? Zeigen Sie den Bericht — keine Diskussion nötig. Ihre Techniker sind geschützt, Ihre Rechnungen auch.',
    cta_primary: 'Jetzt kostenlos starten',
    cta_note: 'Keine Bindung. Antwort innerhalb von 12 Geschäftsstunden.',
  },
  pain: {
    title: 'Das Problem, das jeder Elektrobetrieb kennt',
    items: [
      {
        title: 'Kunde bestreitet Einsatz oder Arbeitszeit',
        desc: 'Er sagt, der Techniker war nicht vor Ort oder die Anlage wurde nicht fertiggestellt. Ohne verifizierbare Beweise zieht sich der Streit wochenlang hin.',
      },
      {
        title: 'Keine Dokumentation der Anlage nach dem Einsatz',
        desc: 'Der Techniker hat die Arbeit abgeschlossen, aber es gibt keine Fotodokumentation oder technische Notiz. Die Rekonstruktion wird unmöglich.',
      },
      {
        title: 'Büro weiß nicht, wo die Techniker sind',
        desc: 'Telefonate, Nachrichten, Unsicherheit. Jedes Mal, wenn Sie einen Kunden über den Fortschritt informieren müssen, müssen Sie zuerst den Techniker aufspüren.',
      },
    ],
  },
  workflow: {
    title: 'So funktioniert es in drei Schritten',
    subtitle: 'Von der Baustelle ins Büro — ohne Telefonate.',
    steps: [
      {
        title: 'Techniker erfasst den Einsatz vor Ort',
        desc: 'Mit GeoTapp TimeTracker stempelt er Ein- und Ausgang mit GPS, fotografiert die Anlage und fügt technische Notizen vom Smartphone hinzu.',
      },
      {
        title: 'Büro sieht alles in Echtzeit',
        desc: 'GeoTapp Flow empfängt die Daten sofort. Der Teamleiter sieht Auftrag, zugewiesenen Techniker, Fortschritt und Fotobeweise ohne anzurufen.',
      },
      {
        title: 'Der Einsatzbericht ist Ihr Nachweis',
        desc: 'Am Ende des Einsatzes generiert das System einen versiegelten Bericht: GPS-Zeitstempel, Anlagenfotos, technische Notizen. Manipulationssicher. Der Kunde kann ihn unabhängig prüfen.',
      },
    ],
  },
  differenza: {
    title: 'App für Elektriker: Zeiterfassung oder Einsatzzertifizierung?',
    subtitle: 'Die meisten Apps erfassen den Stempelvorgang. GeoTapp liefert verifizierbare Beweise.',
    rows: [
      {
        label: 'Was erfasst wird',
        competitor: 'Ein- und Ausstempelzeit',
        geotapp: 'Zeit + verifiziertes GPS + Anlagenfotos + technische Notizen',
      },
      {
        label: 'Im Streitfall',
        competitor: 'Daten nicht verteidigbar',
        geotapp: 'Versiegelter Bericht, manipulationssicher',
      },
      {
        label: 'Einsatzdokumentation',
        competitor: 'Manuell oder nicht vorhanden',
        geotapp: 'Automatisch mit GPS und Fotos erstellt',
      },
      {
        label: 'Wer prüfen kann',
        competitor: 'Nur Ihr Büro',
        geotapp: 'Sie, der Auftraggeber, ein Dritter',
      },
      {
        label: 'DSGVO-Konformität',
        competitor: 'Oft zu prüfen',
        geotapp: 'Konform by Design, Vorlagen inklusive',
      },
    ],
  },
  prima_dopo: {
    title: 'Vor GeoTapp. Nach GeoTapp.',
    prima: [
      'Kunde bestreitet, dass die Anlage fertiggestellt wurde.',
      'Sie haben keine Fotos oder verifizierbaren Zeiten.',
      'Der Streit dauert Wochen. Sie riskieren, nicht bezahlt zu werden.',
      'Der Techniker hat nichts in der Hand, um sich zu verteidigen.',
    ],
    dopo: [
      'Kunde bestreitet, dass die Anlage fertiggestellt wurde.',
      'Sie öffnen den Bericht: GPS-Foto der Anlage, zertifizierter Zeitstempel, Unterschrift.',
      'Sie schicken ihn. Der Streit endet in einer Minute.',
      'Die Rechnung ist sicher. Der Techniker ist geschützt.',
    ],
  },
  scenario: {
    title: 'Realer Fall',
    body: 'Ein Kunde bestreitet den Abschluss einer Elektroinstallation und weigert sich, die letzte Rechnung zu bezahlen. Mit GeoTapp öffnen Sie den Einsatzbericht: Foto des fertiggestellten Schaltschranks, GPS-Zeitstempel für Beginn und Ende der Arbeiten, technische Notizen des Technikers — alles automatisch vom Smartphone vor Ort generiert.',
    resolution: 'Die Beschwerde fällt. Die Rechnung wird vollständig bezahlt.',
  },
  features: {
    title: 'App für Elektriker: Was Sie mit GeoTapp erhalten.',
    items: [
      {
        title: 'Verifizierbare GPS-Zeiterfassung',
        desc: 'Jeder Einsatzbeginn und -abschluss wird mit Standort, Zeitstempel und Auftrag erfasst. Verteidigbar gegenüber Kunden und Behörden.',
      },
      {
        title: 'Versiegelte Anlagenfotos',
        desc: 'Der Techniker fotografiert aus der App am Ende des Einsatzes. Jedes Bild ist mit GPS und Zeitstempel verknüpft — nach der Erstellung manipulationssicher.',
      },
      {
        title: 'Automatische digitale Einsatzberichte',
        desc: 'Am Ende des Einsatzes ist der Bericht fertig: Stunden, Fotos, technische Notizen und Unterschrift. Kein Papier, keine Anrufe. Der Techniker sendet ihn direkt aus der App.',
      },
      {
        title: 'Multi-Baustellen-Auftragsverwaltung',
        desc: 'Aufträge zuweisen, Fortschritt verfolgen und Benachrichtigungen erhalten, wenn ein Einsatz nicht rechtzeitig geöffnet oder abgeschlossen wird.',
      },
      {
        title: 'Export für die Lohnbuchhaltung',
        desc: 'Monatliche Anwesenheitsdaten für DATEV, Lexware und Personio exportieren. Die Lohnabrechnung wird zur schnellen Aufgabe.',
      },
      {
        title: 'Ihre Elektriker sind geschützt',
        desc: 'Ein verifizierbarer Bericht schützt den Techniker vor unbegründeten Anschuldigungen. Gute Arbeit wird durch Daten bewiesen.',
      },
    ],
  },
  cta_mid: {
    title: 'Möchten Sie sehen, wie es bei einem echten Elektroeinsatz funktioniert?',
    body: 'Wir zeigen Ihnen den vollständigen Ablauf: von der Auftragsöffnung bis zum Bericht, den der Kunde erhält. In 20 Minuten wissen Sie, ob es das Richtige für Sie ist.',
    cta: 'Jetzt kostenlos starten',
  },
  trust: {
    title: 'Unsere Berichte können nicht verändert werden. Nicht von Ihnen. Nicht von uns.',
    body: 'GeoTapp-Berichte werden vom System im Moment des Einsatzes erstellt. Es gibt kein Panel, um eine Zeit zu "korrigieren" oder ein Foto zu verschieben. Die Daten sind wie sie sind — digital signiert, mit echtem GPS.',
    badge: 'Überprüfbar von jedem — ohne Zugang zu Ihrem Konto',
  },
  testimonial: {
    quote: 'Mit GeoTapp erfassen meine Techniker die Anlage sofort nach Abschluss. Kein Streit hält dem Bericht stand. Rechnungen werden bezahlt.',
    author: 'Klaus M.',
    role: 'Inhaber, Elektroinstallationsbetrieb',
  },
  faq: {
    title: 'Häufige Fragen',
    subtitle: 'Was Elektriker uns am häufigsten vor dem Start fragen.',
    items: [
      {
        q: 'Ist GeoTapp als App für Elektriker geeignet?',
        a: 'Ja. GeoTapp wird von Elektrikern und Elektrobetrieben zur Verwaltung von Einsätzen, Stundenzetteln, Anwesenheit und Anlagen-Fotodokumentation eingesetzt. Es funktioniert für Einzelaufträge und mehrere gleichzeitige Baustellen.',
      },
      {
        q: 'Kann ich GeoTapp zur Dokumentation von Elektroanlagen einsetzen?',
        a: 'Ja. Der Techniker fotografiert aus der App während oder am Ende des Einsatzes. Jedes Bild ist mit GPS, Zeitstempel und Auftrag verknüpft — im manipulationssicheren Bericht enthalten.',
      },
      {
        q: 'Hilft GeoTapp bei der Lösung von Kundenstreitigkeiten?',
        a: 'Das ist der Hauptanwendungsfall: GPS-Zeitstempel, Fotobeweise und versiegelte Einsatzberichte machen jeden unbegründeten Streit in wenigen Minuten lösbar.',
      },
    ],
  },
  cta: {
    title: 'Jeder gut gemachte Einsatz verdient einen Nachweis. GeoTapp erstellt ihn.',
    subtitle: 'Verifizierbare Berichte, echtes GPS, versiegelte Fotos. Ihre Arbeit ist verteidigbar.',
    primary: 'Jetzt kostenlos starten',
    secondary: 'Preise ansehen',
  },
  pricing_hint: {
    label: 'Ab',
    price: '3 €',
    per: 'Mitarbeiter/Monat',
    note: '14 Tage kostenlos testen',
  },
  schema_sector_name: 'Elektriker',
  schema_faq: [
    {
      question: 'Funktioniert GeoTapp als App für Elektriker?',
      answer: 'Ja. GeoTapp ist die App für Elektriker, die jeden Einsatz mit GPS, Fotos und verifizierbaren Zeitstempeln erfasst. Der Techniker stempelt vom Außendienst, das Büro sieht alles in Echtzeit, der Kunde erhält einen versiegelten Einsatzbericht.',
    },
    {
      question: 'Wie zertifiziere ich einen Elektroeinsatz mit GeoTapp?',
      answer: 'Der Techniker erfasst Start- und Endzeit mit verifiziertem GPS, fotografiert die Anlage und fügt technische Notizen hinzu. Das System erstellt einen versiegelten Bericht, den der Kunde unabhängig prüfen kann.',
    },
    {
      question: 'Verwaltet GeoTapp mehrere Elektriker-Teams auf verschiedenen Baustellen?',
      answer: 'Ja. GeoTapp Flow ermöglicht dem Inhaber, mehrere Teams zu koordinieren, Aufträge zuzuweisen, Einsatzstatus zu verfolgen und Fotobeweise von allen aktiven Baustellen in Echtzeit zu sammeln.',
    },
    {
      question: 'Werden GeoTapp-Einsatzberichte bei Streitigkeiten anerkannt?',
      answer: 'GeoTapp-Berichte sind mit GPS, Zeitstempeln und Fotobeweisen versiegelt. Sie wurden erfolgreich eingesetzt, um Streitigkeiten über vom Kunden abgelehnte Einsätze zu lösen.',
    },
  ],
};

export default content;
