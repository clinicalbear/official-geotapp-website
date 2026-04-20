import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App für Heizungsinstallateure | GeoTapp — GPS, Auftragsberichte & Nachweise',
    description: 'GeoTapp ist die App für Sanitär- und Heizungstechniker: GPS-verifizierte Auftragsberichte, Anlagenfotos und fälschungssichere Dokumentation. Kundenbeschwerden mit echten Beweisen lösen. Kostenlos testen.',
  },
  hero: {
    badge: 'App für Heizungsinstallateure und Sanitär- und Heizungstechniker',
    h1_line1: 'App für Heizungsinstallateure:',
    h1_line2: 'GPS-Auftragsberichte, Fotodokumentation und null Streitigkeiten.',
    subtitle: 'GeoTapp erfasst jeden Heizungs- und Sanitäreinsatz mit GPS, Fotos und verifizierbaren Zeitstempeln. Der Kunde bestreitet ausgetauschte Teile? Zeigen Sie den Auftragsbericht — kein Streit nötig. Ihre Techniker sind geschützt, Ihre Rechnungen auch.',
    cta_primary: 'Jetzt kostenlos starten!',
    cta_note: 'Keine Bindung. Antwort innerhalb von 12 Wertstunden.',
  },
  pain: {
    title: 'Das Problem, das jedes Heizungsunternehmen kennt',
    items: [
      {
        title: 'Kunde bestreitet ausgetauschte Teile an der Heizung',
        desc: 'Er sagt, Sie hätten andere Komponenten eingebaut als vereinbart, oder die Anlage war schon so. Ohne Fotonachweis wird der Streit zum Wort-gegen-Wort.',
      },
      {
        title: 'Keine Dokumentation der Anlage nach dem Einsatz',
        desc: 'Der Techniker hat die Reparatur abgeschlossen, aber es gibt weder Fotonachweis noch technische Notiz. Wenn der Defekt wiederkehrt, ist es unmöglich zu rekonstruieren, was gemacht wurde.',
      },
      {
        title: 'Notfalleinsätze sind nicht nachvollziehbar',
        desc: 'Heizungsausfälle kommen zu unmöglichen Zeiten. Der Techniker kommt, behebt das Problem, aber es bleibt nichts, um dem Kunden oder der Versicherung zu zeigen.',
      },
    ],
  },
  workflow: {
    title: 'So funktioniert es in drei Schritten',
    subtitle: 'Vom Einsatzort ins Büro — ohne Anrufe.',
    steps: [
      {
        title: 'Techniker erfasst den Einsatz vor Ort',
        desc: 'Mit GeoTapp TimeTracker stempelt er Ein- und Ausgang mit GPS, fotografiert Anlage und Heizung und fügt Notizen zu ausgetauschten Teilen vom Smartphone hinzu.',
      },
      {
        title: 'Büro sieht alles in Echtzeit',
        desc: 'GeoTapp Flow empfängt die Daten sofort. Der Verantwortliche sieht Auftrag, zugewiesenen Techniker, Fortschritt und Fotonachweise ohne anzurufen.',
      },
      {
        title: 'Der Auftragsbericht ist Ihr Beweis',
        desc: 'Nach dem Einsatz erstellt das System einen versiegelten Bericht: GPS-Zeitstempel, Anlagenfotos und Teile, technische Notizen. Fälschungssicher. Der Kunde kann ihn selbstständig prüfen.',
      },
    ],
  },
  differenza: {
    title: 'App für Heizungsinstallateure: Zeiterfassung oder Auftragszertifizierung?',
    subtitle: 'Die meisten Apps erfassen die Stempelzeit. GeoTapp erstellt verifizierbare Nachweise.',
    rows: [
      {
        label: 'Was es erfasst',
        competitor: 'Ein- und Ausstempelzeit',
        geotapp: 'Zeit + verifiziertes GPS + Anlagenfotos + ausgetauschte Teile',
      },
      {
        label: 'Im Streitfall',
        competitor: 'Daten nicht verteidigbar',
        geotapp: 'Versiegelter Bericht, fälschungssicher',
      },
      {
        label: 'Auftragsdokumentation',
        competitor: 'Manuell oder fehlend',
        geotapp: 'Automatisch generiert mit GPS und Fotos',
      },
      {
        label: 'Wer prüfen kann',
        competitor: 'Nur Ihr Büro',
        geotapp: 'Sie, der Auftraggeber, ein Dritter',
      },
      {
        label: 'DSGVO-Konformität',
        competitor: 'Oft zu prüfen',
        geotapp: 'Konform by Design, Formulare inklusive',
      },
    ],
  },
  prima_dopo: {
    title: 'Vor GeoTapp. Nach GeoTapp.',
    prima: [
      'Kunde bestreitet, dass das Ventil ausgetauscht wurde.',
      'Sie haben keine Fotos und keine dokumentierten Teile.',
      'Der Streit dauert wochenlang. Sie riskieren, nicht bezahlt zu werden.',
      'Der Techniker hat nichts in der Hand, um sich zu verteidigen.',
    ],
    dopo: [
      'Kunde bestreitet, dass das Ventil ausgetauscht wurde.',
      'Sie öffnen den Bericht: Foto des ausgebauten Teils, des neu eingebauten, GPS-Zeitstempel, technische Notizen.',
      'Sie senden ihn. Der Streit endet in einer Minute.',
      'Die Rechnung ist sicher. Der Techniker ist geschützt.',
    ],
  },
  scenario: {
    title: 'Realer Fall',
    body: 'Ein Kunde bestreitet den Austausch eines Heizungsbrenners und verweigert die Zahlung. Mit GeoTapp öffnen Sie den Auftragsbericht: Foto des defekten, ausgebauten Teils, des neuen, eingebauten, GPS-Zeitstempel des Einsatzes und technische Notizen des Technikers — alles automatisch vom Smartphone vor Ort generiert.',
    resolution: 'Der Streit fällt weg. Die Rechnung wird vollständig bezahlt.',
  },
  features: {
    title: 'App für Heizungsinstallateure: was Sie in GeoTapp finden.',
    items: [
      {
        title: 'Verifizierbares GPS-Zeitstempeln',
        desc: 'Jede An- und Abreise von der Anlage wird mit Standort, Zeitstempel und Auftrag erfasst. Verteidigbar gegenüber Kunden und Versicherungen.',
      },
      {
        title: 'Versiegelte Anlagenfotos',
        desc: 'Der Techniker fotografiert aus der App während und nach dem Einsatz. Jedes Bild ist mit GPS und Zeitstempel verknüpft — nach der Erstellung fälschungssicher.',
      },
      {
        title: 'Automatische digitale Auftragsberichte',
        desc: 'Nach Abschluss des Auftrags ist der Bericht fertig: Stunden, Fotos, ausgetauschte Teile und Unterschrift. Der Techniker sendet ihn direkt aus der App an den Kunden.',
      },
      {
        title: 'Auftrags- und Notfallmanagement',
        desc: 'Dringende Einsätze zuweisen, Fortschritt verfolgen und Benachrichtigungen erhalten, wenn ein Auftrag nicht rechtzeitig abgeschlossen wird.',
      },
      {
        title: 'Gehaltsabrechnung-Export',
        desc: 'Monatliche Anwesenheit in Formaten exportieren, die mit DATEV und anderen Lohnsystemen kompatibel sind. Die Gehaltsabrechnung wird zur Routineaufgabe.',
      },
      {
        title: 'Ihre Techniker sind geschützt',
        desc: 'Ein verifizierbarer Bericht schützt den Techniker vor unbegründeten Vorwürfen zu Teilen oder Stunden. Gute Arbeit wird durch Daten bewiesen.',
      },
    ],
  },
  cta_mid: {
    title: 'Wollen Sie sehen, wie es bei einem echten Heizungseinsatz funktioniert?',
    body: 'Wir zeigen Ihnen den vollständigen Ablauf: von der Auftragsöffnung bis zum Bericht, den der Kunde erhält. In 20 Minuten wissen Sie, ob es das Richtige für Sie ist.',
    cta: 'Jetzt kostenlos starten!',
  },
  trust: {
    title: 'Unsere Berichte können nicht verändert werden. Nicht von Ihnen. Nicht von uns.',
    body: 'GeoTapp-Berichte werden vom System im Moment des Einsatzes generiert. Es gibt kein Panel, um eine Zeit zu "korrigieren" oder ein Foto zu verschieben. Die Daten sind wie sie sind — digital signiert, mit echtem GPS.',
    badge: 'Von jedem prüfbar — ohne Zugriff auf Ihr Konto',
  },
  testimonial: {
    quote: 'Mit GeoTapp fotografieren meine Techniker die Anlage vor und nach jedem Einsatz. Streitigkeiten über Teile sind verschwunden. Die Rechnungen werden bezahlt.',
    author: 'Marco S.',
    role: 'Inhaber, Wohn- und Gewerbeheizungsanlagen',
  },
  faq: {
    title: 'Häufig gestellte Fragen',
    subtitle: 'Was Heizungsinstallateure uns am häufigsten vor dem Start fragen.',
    items: [
      {
        q: 'Ist GeoTapp als App für Heizungsinstallateure geeignet?',
        a: 'Ja. GeoTapp wird von Heizungsinstallateuren und Sanitär- und Heizungstechnikern verwendet, um Einsätze an Heizungen und Anlagen mit GPS-Berichten, Fotos und verifizierbaren Stunden zu verwalten.',
      },
      {
        q: 'Kann ich GeoTapp verwenden, um ausgetauschte Teile an Heizungen zu dokumentieren?',
        a: 'Ja. Der Techniker fotografiert das ausgebaute und das neu eingebaute Teil aus der App. Jedes Bild ist mit GPS, Zeitstempel und Auftrag verknüpft — im fälschungssicheren Bericht enthalten.',
      },
      {
        q: 'Hilft GeoTapp bei der Beilegung von Kundenstreitigkeiten über Heizungsarbeiten?',
        a: 'Das ist genau der primäre Anwendungsfall: GPS-Zeitstempel, Fotonachweis von Teilen und ein versiegelter Bericht machen jeden unbegründeten Streit in Minuten lösbar.',
      },
    ],
  },
  cta: {
    title: 'Jeder gut gemachte Heizungseinsatz verdient einen Nachweis. GeoTapp erstellt ihn.',
    subtitle: 'Verifizierbare Berichte, echtes GPS, versiegelte Fotos. Ihre Arbeit ist verteidigbar.',
    primary: 'Jetzt kostenlos starten!',
    secondary: 'Preise ansehen',
  },
  pricing_hint: {
    label: 'Ab',
    price: '3 €',
    per: 'Operator/Monat',
    note: '14-tägige kostenlose Testphase',
  },
  schema_sector_name: 'Heizungsinstallateure',
  schema_faq: [
    {
      question: 'Funktioniert GeoTapp als App für Heizungsinstallateure?',
      answer: 'Ja. GeoTapp ist die App für Heizungsinstallateure und Sanitärtechniker, die jeden Einsatz an Heizungen und Anlagen mit GPS, Fotos und verifizierbaren Zeitstempeln erfasst. Der Techniker stempelt vom Einsatzort, das Büro sieht alles in Echtzeit und der Kunde erhält einen versiegelten Bericht.',
    },
    {
      question: 'Wie zertifiziere ich einen Heizungseinsatz mit GeoTapp?',
      answer: 'Der Techniker erfasst Beginn und Ende mit verifiziertem GPS, fotografiert die ausgetauschten Teile und fügt technische Notizen hinzu. Das System erstellt einen versiegelten Bericht, den der Kunde selbstständig prüfen kann.',
    },
    {
      question: 'Verwaltet GeoTapp mehrere Teams von Heizungsinstallateuren bei verschiedenen Einsätzen?',
      answer: 'Ja. GeoTapp Flow ermöglicht dem Inhaber, mehrere Teams zu koordinieren, dringende Einsätze zuzuweisen, den Auftragsstatus zu verfolgen und Fotonachweise von allen aktiven Baustellen in Echtzeit zu sammeln.',
    },
    {
      question: 'Werden GeoTapp-Berichte bei Heizungsstreitigkeiten akzeptiert?',
      answer: 'GeoTapp-Berichte sind mit GPS, Zeitstempeln und Fotonachweisen versiegelt. Sie wurden erfolgreich eingesetzt, um Streitigkeiten über vom Kunden bestrittene Arbeiten zu lösen.',
    },
  ],
};

export default content;
