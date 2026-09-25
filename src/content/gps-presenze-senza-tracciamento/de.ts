import type { PresenzeCopy } from './types';

const de: PresenzeCopy = {
  metaTitle: 'GPS-Zeiterfassung ohne durchgehende Überwachung: geht das? - GeoTapp',
  metaDesc:
    'Ja, wenn der Standort nur beim Ein- und Ausstempeln erfasst wird. Was ein italienisches Gericht 2026 entschieden hat, was Aufsichtsbehörden wirklich sanktionieren, und was eine DSGVO-konforme GPS-Zeiterfassung tatsächlich speichert.',
  h1: 'GPS-Zeiterfassung ohne durchgehende Überwachung: geht das?',
  lede:
    'Ja. Ein System, das den Standort nur in dem Moment erfasst, in dem eine Mitarbeiterin oder ein Mitarbeiter ein- oder ausstempelt oder eine Pause beginnt, überwacht die Person nicht dauerhaft: Es dokumentiert einen Zeitpunkt. Genau diese Unterscheidung hat 2026 ein italienisches Gericht bestätigt, und sie deckt sich damit, was Datenschutzaufsichtsbehörden tatsächlich sanktionieren: durchgehendes Tracking, nicht die punktuelle Standorterfassung.',
  updatedLabel: 'Aktualisiert am 25. September 2026',
  sections: [
    {
      heading: 'Wann ist GPS für die Zeiterfassung überhaupt zulässig?',
      paragraphs: [
        'In den meisten EU-Ländern gilt derselbe Grundsatz: Systeme, aus denen sich eine durchgehende Verhaltens- oder Leistungskontrolle ergeben könnte, brauchen vorab eine Mitbestimmung des Betriebsrats bzw. der Arbeitnehmervertretung oder eine behördliche Genehmigung, bevor sie eingeschaltet werden. In Deutschland ist das insbesondere § 87 Abs. 1 Nr. 6 BetrVG bei technischen Einrichtungen zur Überwachung von Verhalten oder Leistung; in Italien ist es Art. 4 des Arbeitnehmerstatuts (Gesetz Nr. 300/1970). Reine Zutritts- und Anwesenheitserfassung fällt regelmäßig nicht unter diese verschärften Anforderungen.',
        'Ein Urteil aus Italien vom 1. Juli 2026 (Landgericht Cosenza, Urteil Nr. 972) zeigt, wo die Grenze bei GPS-basierten Stempel-Apps verläuft: Wird der Standort ausschließlich im Moment des Stempelns erfasst, ohne fortlaufende Bewegungsverfolgung dazwischen, gilt das System als reines Zeiterfassungsinstrument, nicht als Fernüberwachung. Das Gericht hob deshalb ein Bußgeld von 50.000 Euro auf, das die italienische Datenschutzbehörde gegen eine öffentliche Einrichtung wegen einer solchen App verhängt hatte.',
        'Die praktische Regel: Ein GPS-Punkt zu Schichtbeginn und -ende hält einen Moment fest. Eine Punktspur im Minutentakt verfolgt eine Person. Dieselbe Satellitentechnik, aber zwei völlig unterschiedliche Werkzeuge vor dem Gesetz.',
      ],
    },
    {
      heading: 'Was erfasst GeoTapp, und was nicht',
      paragraphs: [
        'GeoTapp erfasst den Standort nur bei einer konkreten Handlung der Mitarbeiterin oder des Mitarbeiters: beim Einstempeln, bei Beginn und Ende jeder Pause, beim Ausstempeln, sowie einen Punkt pro live aufgenommenem Arbeitsnachweisfoto. Zwischen zwei Stempelvorgängen wird nichts automatisch aufgezeichnet: keine Bewegungsspur, kein Tracking im Hintergrund, kein Standort ohne Wissen der Mitarbeiterin oder des Mitarbeiters.',
      ],
    },
    {
      heading: 'Wie ein Betriebsrat, eine Fachanwältin oder ein Datenschutzbeauftragter das prüfen kann, ohne uns zu fragen',
      paragraphs: [
        'Man muss uns dabei nicht glauben, das lässt sich unabhängig nachprüfen. In der Android-App verlangt das Manifest nur die Berechtigungen ACCESS_FINE_LOCATION und ACCESS_COARSE_LOCATION. Die Berechtigung ACCESS_BACKGROUND_LOCATION, die für ein Verfolgen bei geschlossener App nötig wäre, wird nicht angefordert, und es gibt keinen Vordergrunddienst für Standortdaten: Ohne diese Berechtigung liefert das Betriebssystem schlicht keine Standortdaten an eine App, die nicht aktiv geöffnet ist. Auf iOS fragt die App nur die Berechtigung "bei Verwendung der App" ab (requestWhenInUseAuthorization), nie die Berechtigung für Hintergrund-Tracking.',
        'Das ist eine Prüfung, die ein Betriebsratsmitglied, eine auf Arbeitsrecht spezialisierte Anwältin oder ein Datenschutzbeauftragter in wenigen Minuten selbst durchführen kann, indem er das App-Manifest oder das von den App Stores veröffentlichte Datenschutz-Label liest, noch bevor er die vom Arbeitgeber vorgelegte Information überhaupt gelesen hat.',
      ],
    },
    {
      heading: 'Wie lange bleiben die erfassten Standortdaten gespeichert?',
      paragraphs: [
        'Im Zeiterfassungsprotokoll werden die Koordinaten nach zwölf Monaten gelöscht; ein Unternehmen kann diesen Zeitraum auf bis zu dreißig Tage verkürzen. In bereits an einen Kunden ausgelieferten Berichten bleiben die Standortdaten dagegen erhalten: Das sind versiegelte Dokumente, die als Nachweis der geleisteten Arbeit dienen und der für diese Art von Dokumentation geltenden Aufbewahrungsfrist folgen, nicht der des Protokolls.',
        'Es sind zwei unterschiedliche Regeln für zwei unterschiedliche Dinge. Das Betriebsprotokoll wird mit der Zeit schlanker; ein bereits ausgehändigtes Dokument folgt seinen eigenen Regeln, wie jedes Dokument, das die eigenen Systeme einmal verlassen hat.',
      ],
    },
    {
      heading: 'Und außerhalb Italiens?',
      paragraphs: [
        'Die DSGVO (insbesondere Art. 5, 6, 12-14 und 25 der EU-Verordnung 2016/679) gilt in der gesamten Europäischen Union und schreibt überall dieselben Grundsätze vor: Datenminimierung, ein klar festgelegter Zweck, eine verständliche Information für die Beschäftigten. Was sich von Land zu Land unterscheidet, ist das Verfahren bei der Fernüberwachung: das lokale Gegenstück zum italienischen Art. 4, die Rolle von Betriebsrat oder Gewerkschaft, die zuständige Aufsichtsbehörde. Für die Rechtslage im jeweiligen Land sammelt die GPS-Länderkarte für Arbeitnehmer geprüfte Profile Land für Land.',
      ],
    },
  ],
  table: {
    title: 'Was erfasst wird und was nicht',
    colLeft: 'Wird erfasst',
    colRight: 'Wird nicht erfasst',
    left: [
      'Standort beim Ein- und Ausstempeln',
      'Standort bei Beginn und Ende jeder Pause',
      'Ein GPS-Punkt pro live aufgenommenem Arbeitsnachweisfoto',
      'Ein vom Server generierter Zeitstempel, nicht vom Gerät der Mitarbeiterin oder des Mitarbeiters',
    ],
    right: [
      'Keine Bewegung während der Schicht, zwischen zwei Stempelvorgängen',
      'Kein Standort außerhalb der Schicht oder bei geschlossener App',
      'Keine Bewertung oder Profilbildung anhand von Verhalten',
      'Kein Standort aus Fotos aus einer Galerie: nur live aufgenommene Kamerafotos',
    ],
  },
  sourcesTitle: 'Quellen und Verweise',
  sources: [
    'Landgericht Cosenza (Italien), Urteil Nr. 972 vom 1. Juli 2026',
    'Italienische Datenschutzbehörde (Garante), Maßnahme Nr. 382 vom 28. Mai 2026 (doc-web 10259916)',
    'Italienische Datenschutzbehörde (Garante), Maßnahme Nr. 135 vom 13. März 2025 (doc-web 10128005), durch das obige Urteil aufgehoben',
    'Italienisches Gesetz Nr. 300 vom 20. Mai 1970 (Arbeitnehmerstatut), Art. 4',
    'Verordnung (EU) 2016/679 (DSGVO), Art. 5, 6, 12-14, 25',
    'Betriebsverfassungsgesetz (BetrVG), § 87 Abs. 1 Nr. 6',
  ],
  disclaimer:
    'Diese Seite beschreibt allgemeine, an der Quelle nachprüfbare Grundsätze und ist keine Rechtsberatung: Für Ihre konkrete Situation wenden Sie sich an eine Fachanwältin für Arbeitsrecht oder eine Datenschutzbeauftragte.',
  faq: {
    title: 'Häufig gestellte Fragen',
    items: [
      {
        q: 'Ist GPS-Ortung von Mitarbeitenden nach der DSGVO verboten?',
        a: 'Nein. Datenschutzaufsichtsbehörden haben GPS bei Beschäftigten als solches nie verboten. Sanktioniert wird durchgehendes Tracking, eine fehlende oder unklare Information, sowie das Erfassen von Daten, die mit der Arbeit nichts zu tun haben: nicht die punktuelle Standorterfassung beim Stempeln.',
      },
      {
        q: 'Braucht man für GPS-Zeiterfassung immer eine Mitbestimmung des Betriebsrats?',
        a: 'Sie ist dort nötig, wo das System eine durchgehende Verhaltens- oder Leistungskontrolle ermöglichen könnte. Ein italienisches Gericht hat jedoch entschieden, dass ein System, das den Standort nur beim Stempeln erfasst, ohne fortlaufende Verfolgung, unter die reine Zeiterfassung fällt, die dieses Verfahren nicht erfordert.',
      },
      {
        q: 'Was passiert, wenn das System auch während der Pausen ortet?',
        a: 'Das ist einer der Fehler, die zu tatsächlichen Bußgeldern geführt haben: Ein Transportunternehmen wurde unter anderem deshalb mit 50.000 Euro belegt, weil das Tracking auch während der Pausen weiterlief. Der Grundsatz der Datenminimierung (Art. 5 DSGVO) verlangt, dass die Erfassung endet, wenn die Schicht endet.',
      },
      {
        q: 'Kann GeoTapp eine Mitarbeiterin oder einen Mitarbeiter durchgehend orten, wenn ich das möchte?',
        a: 'Nein. Die App fordert nie die Berechtigung für Standortzugriff im Hintergrund an und hat keinen Dienst, der bei geschlossener App weiter ortet: Das ist keine abgeschaltete Option, sondern eine Berechtigung, die der Code gar nicht anfragt. Nachprüfbar über das App-Manifest oder das Datenschutz-Label im Store.',
      },
      {
        q: 'Bleiben die erfassten Standortdaten für immer gespeichert?',
        a: 'Nein. Im Zeiterfassungsprotokoll werden sie nach zwölf Monaten gelöscht, ein Unternehmen kann diesen Zeitraum auf dreißig Tage verkürzen. Sie bleiben jedoch in bereits an einen Kunden ausgelieferten Berichten erhalten, weil das versiegelte Dokumente sind, die als Nachweis der geleisteten Arbeit gelten.',
      },
    ],
  },
  relatedTitle: 'Verwandte Ressourcen',
};

export default de;
