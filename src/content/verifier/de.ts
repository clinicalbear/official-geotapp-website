import type { VerifierCopy } from './types';

const de: VerifierCopy = {
  hero_badge: 'GeoTapp Verifier - Prüfung von Arbeitsberichten',
  hero_title: 'Ihre Arbeitsberichte\nlassen sich prüfen.',
  hero_subtitle:
    'GeoTapp Verifier prüft, ob ein GeoTapp-Bericht seit dem Versiegeln nicht verändert wurde und ob er tatsächlich von GeoTapp ausgestellt wurde. Die Prüfung ist kostenlos, für Sie und für Ihre Kunden, und funktioniert auch offline.',
  hero_cta_primary: 'GeoTapp kostenlos testen',
  hero_cta_secondary: 'So funktioniert es',
  terminal_integrity: 'Ereigniskette: UNVERSEHRT',
  terminal_timestamps: 'Siegelzeit: VOM SERVER',
  terminal_gps: 'Foto-Fingerabdrücke: STIMMEN ÜBEREIN',
  terminal_not_modified: 'Dokument unverändert: BESTÄTIGT',
  terminal_operator: 'GeoTapp-Signatur: GÜLTIG',
  terminal_summary_title: 'Zusammenfassung der Prüfung',
  terminal_technician_label: 'Techniker:',
  terminal_date_label: 'Einsatzdatum:',
  terminal_site_label: 'Einsatzort:',
  terminal_verified_line: 'DOKUMENT UNVERSEHRT UND SIGNIERT',
  ecosystem_timetracker_desc:
    'Erfasst die Daten vor Ort: Stempelungen mit Standort und Uhrzeit, Nachweisfotos und Notizen.',
  ecosystem_timetracker_link: 'TimeTracker entdecken',
  ecosystem_flow_desc:
    'Organisiert Aufträge und Teams und erstellt strukturierte, versiegelte Berichte, die sich prüfen lassen.',
  ecosystem_flow_link: 'Flow entdecken',
  ecosystem_verifier_desc:
    'Prüft die Integrität jedes Berichts: Er berechnet die Fingerabdrücke neu und kontrolliert die GeoTapp-Signatur.',
  problem_badge: 'Das eigentliche Problem',
  problem_title: 'Ein nicht prüfbarer Bericht ist ein anfechtbarer Bericht.',
  problem_items: [
    {
      title: 'Kunden, die die geleistete Arbeit in Frage stellen',
      desc: 'Ohne unabhängigen Nachweis lässt sich jeder Bericht anzweifeln. Der Kunde weiß nicht, ob das Geschriebene mit dem tatsächlich Geleisteten übereinstimmt.',
    },
    {
      title: 'Arbeitszeiten und Anwesenheit, die schwer zu verteidigen sind',
      desc: 'Anwesenheitslisten und von Hand eingetragene Stempelungen reichen nicht aus. Wenn ein Streit über Arbeitsstunden oder Anwesenheit vor Ort entsteht, überzeugt das Dokument allein nicht.',
    },
    {
      title: 'Berichte, die bearbeitet oder unvollständig sind',
      desc: 'Ein Dokument, das sich nachträglich ohne Spur verändern lässt, kann man nicht prüfen. Kunden wissen das, und es schafft Misstrauen, selbst wenn die Arbeit einwandfrei ausgeführt wurde.',
    },
  ],
  what_badge: 'Was ist GeoTapp Verifier',
  what_title: 'Unabhängige Prüfung von Einsatzberichten.',
  what_desc:
    'Mit GeoTapp Verifier kann jeder einen Bericht aus GeoTapp Flow und TimeTracker prüfen: Er berechnet die Fingerabdrücke der Stempelungen, Standorte und Fotos im Paket neu und kontrolliert die GeoTapp-Signatur. Er zeigt, ob das Dokument unversehrt ist und woher es stammt; für sich allein beweist er nicht, dass das Ereignis stattgefunden hat, und er ist keine Rechtsberatung.',
  how_badge: 'So funktioniert es',
  how_title: 'Drei Schritte. Ein prüfbarer Bericht.',
  how_steps: [
    {
      num: '01',
      title: 'Der Techniker erfasst die Arbeit vor Ort',
      desc: 'Mit GeoTapp TimeTracker erzeugt jeder Einsatz Daten: Stempelungen mit Standort und Uhrzeit, Nachweisfotos und Notizen. Die Daten kommen in GeoTapp Flow an, sobald das Smartphone wieder Empfang hat.',
    },
    {
      num: '02',
      title: 'Flow erstellt den strukturierten Bericht',
      desc: 'GeoTapp Flow sammelt die Auftragsdaten und erstellt den Bericht. Danach wird der Bericht versiegelt: Ab diesem Moment lässt sich jede Änderung erkennen.',
    },
    {
      num: '03',
      title: 'Verifier prüft die Integrität',
      desc: 'Jeder kann den Bericht mit GeoTapp Verifier prüfen: Er berechnet die Fingerabdrücke neu, kontrolliert die Signatur und zeigt, ob der Bericht unversehrt ist und ob er von GeoTapp stammt.',
    },
  ],
  features_badge: 'Was wird geprüft',
  features_title: 'Jeder Teil des Berichts ist überprüfbar.',
  features: [
    {
      title: 'Ereigniskette',
      desc: 'Jede Stempelung ist über einen SHA-256-Fingerabdruck mit der vorherigen verknüpft: Wird ein Ereignis entfernt, hinzugefügt oder geändert, reißt die Kette.',
    },
    {
      title: 'Nachweisfotos',
      desc: 'Der Fingerabdruck jedes Fotos steht im Paket: Schon die Änderung eines einzigen Pixels genügt, damit er nicht mehr übereinstimmt.',
    },
    {
      title: 'Dokumentintegrität',
      desc: 'Prüft, dass das Dokument nach der Erstellung nicht verändert wurde. Jede Änderung wird erkannt.',
    },
    {
      title: 'GeoTapp-Signatur',
      desc: 'Die Wurzel des Pakets ist mit dem GeoTapp-Schlüssel signiert: Die Prüfung zeigt, ob wirklich wir es ausgestellt haben.',
    },
    {
      title: 'Siegelzeit',
      desc: 'Die Siegelzeit stammt von der Uhr des Servers, nicht vom Smartphone.',
    },
    {
      title: 'Prüfbar ohne Zugang zur Plattform',
      desc: 'Der Kunde kann den Bericht selbstständig prüfen, ohne auf die GeoTapp-Plattform zugreifen zu müssen, auch offline.',
    },
  ],
  who_badge: 'Für wen ist es gedacht',
  who_title: 'Für Unternehmen, die ihre Arbeit belegen müssen.',
  who_items: [
    'Wartungs- und technische Servicebetriebe',
    'Reinigungs- und Facility-Management-Unternehmen',
    'Sicherheits- und Wachdienste',
    'Installationsteams und Montagetrupps',
    'Jedes Unternehmen, das Anwesenheit und Arbeit vor Ort belegen muss',
  ],
  ecosystem_badge: 'GeoTapp-Ökosystem',
  ecosystem_title: 'Verifier arbeitet mit Flow und TimeTracker zusammen.',
  ecosystem_desc:
    'GeoTapp Verifier ist kein eigenständiges Werkzeug. Er ist der letzte Schritt eines zusammenhängenden Ablaufs: Die Daten werden vor Ort mit TimeTracker erfasst, in Flow organisiert und am Ende mit Verifier geprüft.',
  cta_title: 'Erstellen Sie Berichte, die sich prüfen lassen.',
  cta_subtitle:
    'Mit Berichten, die der Kunde allein prüfen kann, haben Sie im Streitfall einen Nachweis in der Hand statt Aussage gegen Aussage.',
  cta_primary: 'GeoTapp kostenlos testen',
  cta_flow: 'GeoTapp Flow entdecken',
  cta_timetracker: 'GeoTapp TimeTracker entdecken',
  faq_badge: 'Häufig gestellte Fragen',
  faq_title: 'Alles, was Sie über Verifier wissen möchten.',
  faqs: [
    {
      q: 'Braucht der Kunde ein GeoTapp-Konto, um einen Bericht zu prüfen?',
      a: 'Nein. Der Kunde erhält den Bericht und prüft ihn ohne Registrierung und ohne Zugang zur Plattform: online oder mit dem kostenlosen Offline-Verifier.',
    },
    {
      q: 'Was passiert, wenn jemand versucht, den Bericht zu ändern?',
      a: 'Der Verifier berechnet die Fingerabdrücke von Ereignissen und Fotos neu: Jede Änderung nach der Erstellung sorgt dafür, dass sie von den versiegelten abweichen, und die Prüfung kennzeichnet das Dokument als verändert.',
    },
    {
      q: 'Funktioniert Verifier auch für ältere Berichte?',
      a: 'Ja. Alle von GeoTapp Flow mit TimeTracker-Daten erstellten Berichte lassen sich jederzeit prüfen, auch Monate oder Jahre nach ihrer Erstellung.',
    },
    {
      q: 'Kostet Verifier etwas?',
      a: 'Nein, er ist kostenlos: für Sie und für alle, die einen Ihrer Berichte erhalten.',
    },
  ],
  hero_cta_download: 'Verifier herunterladen',
  cta_download: 'Verifier kostenlos herunterladen',
  download_badge: 'Kostenloser Download',
  download_title: 'GeoTapp Verifier herunterladen.',
  download_desc: 'Prüfen Sie die Integrität von GeoTapp-Berichten offline. Kein Konto nötig: über das Terminal oder die Node.js-Bibliothek für Entwickler, oder als einzelne HTML-Datei, die sich per Doppelklick öffnet, für alle anderen.',
  download_btn_cli: 'Für die Kommandozeile herunterladen (Node.js)',
  download_btn_html: 'Lokale HTML-Version herunterladen',
  download_version: 'v0.3.0 · dieselbe Prüf-Engine, zwei Formate',
  download_requirements: 'Benötigt Node.js ≥ 18',
  download_cli_title: 'Im Terminal',
  download_api_title: 'Als Node.js-Bibliothek',

  online_verify_badge: 'Sofortige Prüfung',
  online_verify_title: 'Einen Bericht online prüfen',
  online_verify_desc: 'Laden Sie die ZIP-Datei des Berichts hoch. Die Prüfung läuft auf dem Server, die Datei wird nicht gespeichert.',
  online_verify_upload_label: 'Bericht-ZIP hierher ziehen oder zum Auswählen klicken',
  online_verify_upload_hint: 'Nur .zip-Dateien, höchstens 25 MB',
  online_verify_btn: 'Jetzt prüfen',
  online_verify_privacy_note: 'Die Datei wird im Arbeitsspeicher verarbeitet und weder gespeichert noch an Dritte weitergegeben.',
  online_verify_size_limit: 'Maximale Größe: 25 MB',
  online_verify_result_valid_sealed: 'Gültiger Bericht, versiegelt und signiert',
  online_verify_result_valid_unsigned: 'Gültiger Bericht, Inhalt unversehrt, Siegel nicht kryptografisch signiert',
  online_verify_result_legacy: 'Älterer Bericht, lesbar, ohne starkes Siegel',
  online_verify_result_invalid: 'Ungültiger Bericht, der Inhalt wurde möglicherweise verändert',
  online_verify_error_too_large: 'Datei zu groß. Maximale Größe: 25 MB.',
  online_verify_error_not_zip: 'Die Datei muss ein ZIP-Archiv sein.',
  online_verify_error_generic: 'Fehler bei der Prüfung. Die Datei ist möglicherweise beschädigt.',
  compare_badge: 'Zwei Wege zur Prüfung',
  compare_title: 'Lokal oder online prüfen?',
  compare_local_title: 'Auf Ihrem Computer',
  compare_local_items: [
    'Die Datei bleibt auf Ihrem Gerät',
    'Funktioniert ohne Internetverbindung',
    'Keine praktische Größenbegrenzung',
    'Ideal für Audits, Anwälte, Berater',
    'Die HTML-Version braucht keine Installation; die Kommandozeilen-Version benötigt Node.js',
  ],
  compare_online_title: 'Online (diese Seite)',
  compare_online_items: [
    'Kein Programm zu installieren',
    'Sofortiges Ergebnis im Browser',
    'Die Datei läuft über unseren Server, der sie nicht speichert',
    'Dateigröße bis höchstens 25 MB',
    'Ideal für schnelle Prüfungen',
  ],
  compare_same_engine_note: 'In beiden Fällen dieselbe Prüf-Engine. Der Unterschied ist, wo sie läuft.',
};

export default de;
