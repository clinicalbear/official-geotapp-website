import type { ContestazioniCopy } from './types';

/**
 * Seite "Wenn jemand die Arbeit beanstandet" (27.10.2026), nativ auf Deutsch geschrieben (Sie-Form).
 * Jede Aussage zum Produkt stammt aus der Claim-Schede (docs/stampa/scheda-claim.md) oder aus den
 * bereits veroeffentlichten Strings in dict.features (de.json). Die Formel zur Beweiskraft ist die im
 * Site-Woerterbuch bereits veroeffentlichte deutsche Fassung, identisch an beiden Stellen.
 */
const de: ContestazioniCopy = {
  metaTitle: 'Wenn jemand die Arbeit beanstandet: was GeoTapp ändert | GeoTapp',
  metaDesc:
    'Wenn ein Kunde oder ein Mitarbeiter die Arbeit beanstandet: was haben Sie dann in der Hand? Derselbe Streit aus drei Sichten: Betrieb, Mitarbeitende und Auftraggeber.',
  kicker: 'Beanstandungen der Arbeit',
  h1: 'Wenn jemand die Arbeit beanstandet: was GeoTapp ändert',
  lede:
    'Eine Beanstandung lässt sich nicht verhindern. Es ändert sich, was Sie in der Hand haben, wenn sie kommt: Erinnerung gegen Erinnerung oder ein Dokument. Hier sehen Sie denselben Streit aus drei Sichten: Betrieb, Mitarbeitende und Auftraggeber.',
  updatedLabel: 'Aktualisiert am 27. Oktober 2026',
  scenes: [
    {
      kicker: 'Der Betrieb',
      heading: 'Wenn Sie der Betrieb sind',
      scene: '„Der Kunde sagt, Ihre Leute seien gar nicht da gewesen. Oder nur eine Stunde statt drei.“',
      haveTitle: 'Was Sie in der Hand haben',
      have: [
        'Beginn, Pausen und Ende jedes Einsatzes mit Uhrzeit.',
        'Den bei der Stempelung erfassten Standort. Beim Stempeln lehnt die App Standorte ab, die von Fake-GPS-Apps simuliert werden, zu ungenaue Standorte und unmögliche Ortssprünge.',
        'Die Nachweisfotos des Einsatzes. Bei Fotos wird nichts abgelehnt: Sie werden markiert, indem Uhrzeit und Standort der Aufnahme mit denen der Stempelung verglichen werden.',
        'Einen Bericht, der am Ende des Einsatzes aus Stempelungen, Fotos und Notizen entsteht und versiegelt wird: Jede spätere Änderung ist erkennbar.',
      ],
      changeTitle: 'Was sich ändert',
      change: [
        'Statt aus dem Gedächtnis zwischen WhatsApp, E-Mails und Zetteln zu rekonstruieren, schicken Sie ein Dokument.',
        'Fehlt das Netz, bleibt die Stempelung auf dem Telefon gespeichert und wird von selbst gesendet, sobald wieder Empfang da ist, mit der Uhrzeit, zu der sie erfolgt ist.',
        'Dokumentierte Stunden sind Stunden, die Sie bei der Rechnungsstellung vorzeigen können.',
      ],
    },
    {
      kicker: 'Mitarbeitende',
      heading: 'Wenn Sie derjenige sind, der arbeitet',
      scene: '„Ich habe mehr Stunden gearbeitet, als mir bezahlt wurden.“',
      haveTitle: 'Was Sie haben',
      have: [
        'Ihre Arbeitssitzungen mit Beginn, Pausen und Ende, die Sie in der App nach Zeitraum und mit der Gesamtstundenzahl einsehen können.',
        'Der Standort wird nur erfasst, wenn Sie stempeln oder ein Nachweisfoto aufnehmen: Beginn, Pausenbeginn und -ende, Ende.',
        'Zwischen zwei Stempelungen wird nichts automatisch und kontinuierlich aufgezeichnet. Auf Android und iPhone fragt die App nicht einmal nach der Standortberechtigung im Hintergrund.',
      ],
      changeTitle: 'Was sich ändert',
      change: [
        'Gibt es Streit über die Stunden, gibt es eine Uhrzeit, die durch Ihre eigene Handlung erfasst wurde und von niemandes Gedächtnis abhängt.',
        'Das Büro sieht die Stempelungen, sobald sie eintreffen: Die Ansicht heißt „Heutige Stempelungen“ und zeigt, was gestempelt wurde, nicht, wo sich jemand gerade befindet.',
      ],
      extra: {
        title: 'Was von den Standorten bleibt, und wie lange',
        paragraphs: [
          'Im Register werden Standorte nach zwölf Monaten gelöscht, ein Zeitraum, den das Unternehmen bis auf dreißig Tage verkürzen kann.',
          'In bereits übergebenen Berichten bleiben sie, weil es versiegelte Dokumente sind, und es gilt die gesetzliche Aufbewahrungsfrist: Nach fünf Jahren wird das Paket gelöscht. Ein übergebener Bericht ist eine Momentaufnahme: Er wird nicht aktualisiert und lässt sich nicht verändern, ohne das Siegel zu brechen, das ihn überprüfbar macht.',
        ],
      },
    },
    {
      kicker: 'Der Auftraggeber',
      heading: 'Wenn Sie der Auftraggeber sind',
      scene: '„Man sagt mir, die Arbeit sei erledigt. Woher weiß ich das, ohne den Leuten einfach zu glauben?“',
      haveTitle: 'Was Sie tun',
      have: [
        'Sie erhalten einen Link zum Bericht und prüfen ihn selbst, online oder mit dem Offline-Verifier: eine einzelne Datei, die keine Verbindung zum Internet aufbaut und den öffentlichen Schlüssel enthält.',
        'Die Prüfung berechnet die Fingerabdrücke jedes Ereignisses und jedes Fotos neu und prüft die Signatur. Die Prüfseite zeigt zwei getrennte Dinge: ob das Dokument unversehrt ist und ob die Signatur stimmt.',
        'Das funktioniert auch noch in Jahren, auch ohne GeoTapp: Wer das Paket und den Verifier hat, kann die Prüfung wiederholen.',
      ],
      changeTitle: 'Was es zeigt und was nicht',
      change: [
        'Ein versiegeltes Paket hilft zu zeigen, dass das Übergebene nicht verändert wurde, ist für sich genommen aber kein absoluter Beweis des zugrunde liegenden Sachverhalts und keine Rechtsberatung.',
        '„Dokument unversehrt“ heißt: nicht manipuliert. Dass wir das Paket ausgestellt haben, sagt die Signatur, die sich ohne den Schlüssel nicht nachmachen lässt.',
      ],
    },
  ],
  sample: {
    heading: 'Probieren Sie es mit einem echten Bericht',
    paragraphs: [
      'Unten finden Sie einen Beispielbericht, den Austausch eines Schaltschranks. Laden Sie ihn herunter und prüfen Sie ihn in Ihrem Browser: Die Prüfung läuft bei Ihnen, die Datei wird nicht an uns gesendet.',
    ],
  },
  limits: {
    heading: 'Was GeoTapp nicht tut',
    items: [
      'Es zeichnet nicht kontinuierlich auf, auch wenn man es wollte: Auf Android und iPhone fragt die App nicht nach der Standortberechtigung im Hintergrund.',
      'Es zeigt für sich allein nicht, dass sich etwas tatsächlich zugetragen hat: Es sagt, ob das Paket nach der Übergabe verändert wurde.',
      'Es verspricht nicht, dass Beanstandungen verschwinden: Es ändert, was Sie vorlegen, wenn sie kommen.',
      'Es ersetzt weder eine Arbeitsrechtsberatung noch den Datenschutzbeauftragten, weder Vereinbarungen mit der Arbeitnehmervertretung (in Deutschland der Betriebsrat) noch Genehmigungen, die das Recht Ihres Landes verlangen kann.',
    ],
    formula:
      'Kurz gesagt: Ein versiegeltes Paket hilft zu zeigen, dass das Übergebene nicht verändert wurde, ist für sich genommen aber kein absoluter Beweis des zugrunde liegenden Sachverhalts und keine Rechtsberatung.',
  },
  faq: {
    title: 'Häufige Fragen',
    items: [
      {
        q: 'Reicht ein GeoTapp-Bericht, um eine Beanstandung zu gewinnen?',
        a: 'Nicht allein. Der Bericht zeigt, was erfasst wurde, und lässt jeden prüfen, dass er nach der Übergabe nicht verändert wurde; er zeigt für sich allein nicht, dass sich etwas tatsächlich zugetragen hat, und er ist keine Rechtsberatung. Er ist ein geordnetes, überprüfbares Dokument statt Erinnerung gegen Erinnerung.',
      },
      {
        q: 'Verfolgt GeoTapp die Mitarbeitenden während des Tages?',
        a: 'Nein. Der Standort wird nur erfasst, wenn die Mitarbeiterin oder der Mitarbeiter selbst stempelt oder ein Foto aufnimmt: Beginn, Pausenbeginn und -ende, Ende, Nachweisfoto. Zwischen zwei Stempelungen wird nichts automatisch und kontinuierlich aufgezeichnet. Auf Android und iPhone fragt die App nicht einmal nach der Standortberechtigung im Hintergrund.',
      },
      {
        q: 'Muss der Auftraggeber GeoTapp vertrauen, um den Bericht zu prüfen?',
        a: 'Nein. Der Offline-Verifier ist eine einzelne Datei, die keine Verbindung zum Internet aufbaut und den öffentlichen Schlüssel enthält: Er berechnet die Fingerabdrücke neu und prüft die Signatur, auch noch in Jahren, auch ohne GeoTapp. Die Prüfung sagt, ob das Paket verändert wurde, nicht, ob sich etwas tatsächlich zugetragen hat.',
      },
      {
        q: 'Was geschieht nach der Übergabe mit den Standorten?',
        a: 'Im Register werden sie nach zwölf Monaten gelöscht, ein Zeitraum, den das Unternehmen bis auf dreißig Tage verkürzen kann. In bereits übergebenen Berichten bleiben sie, weil es versiegelte Dokumente sind, und es gilt die gesetzliche Aufbewahrungsfrist: Nach fünf Jahren wird das Paket gelöscht.',
      },
      {
        q: 'Wo liegen die Daten?',
        a: 'Die Dienstdaten und die Fotos sind in der Europäischen Union gespeichert.',
      },
      {
        q: 'Ersetzt GeoTapp die Arbeitsrechtsberatung oder die Vereinbarung mit dem Betriebsrat?',
        a: 'Nein. GeoTapp hilft, die Vorgaben der DSGVO einzuhalten, ersetzt aber weder eine Beratung noch den Datenschutzbeauftragten, weder Vereinbarungen mit der Arbeitnehmervertretung (in Deutschland der Betriebsrat) noch Genehmigungen, die das Recht Ihres Landes verlangen kann.',
      },
    ],
  },
  next: {
    heading: 'Wie es weitergeht',
    paragraph: 'Wenn Sie Funktion für Funktion sehen möchten, was alles enthalten ist, oder die Preise: hier entlang.',
    featuresLabel: 'Was GeoTapp kann, Funktion für Funktion →',
    pricingLabel: 'Preise ansehen →',
  },
  card: {
    title: 'Was sich ändert, wenn jemand die Arbeit beanstandet',
    text: 'Betrieb, Mitarbeitende und Auftraggeber im Vergleich.',
    cta: 'Seite lesen',
  },
  disclaimer:
    'Diese Seite beschreibt, was GeoTapp tut, und ist keine Rechtsberatung. Für Ihre konkrete Situation wenden Sie sich an eine Fachperson für Arbeitsrecht oder an Ihren Datenschutzbeauftragten.',
};

export default de;
