import type { VerifierCopy } from './types';

const de: VerifierCopy = {
  hero_badge: 'GeoTapp Verifier — Arbeitsberichts-Verifizierung',
  hero_title: 'Ihre Arbeitsberichte\nsind verifizierbar.',
  hero_subtitle:
    'GeoTapp Verifier prüft, ob ein Einsatzbericht mit den vor Ort erfassten Betriebsdaten übereinstimmt und nicht verändert wurde. Mehr Glaubwürdigkeit beim Kunden, weniger Streitigkeiten.',
  hero_cta_primary: 'Demo anfordern',
  hero_cta_secondary: 'So funktioniert es',
  terminal_integrity: 'Dokumentintegrität: VERIFIZIERT',
  terminal_timestamps: 'Zeitstempel-Übereinstimmung: BESTÄTIGT',
  terminal_gps: 'GPS-Koordinaten: KONSISTENT',
  terminal_not_modified: 'Dokument unverändert: BESTÄTIGT',
  terminal_operator: 'Mitarbeiter verifiziert: OK',
  terminal_summary_title: 'Verifizierungszusammenfassung',
  terminal_technician_label: 'Techniker:',
  terminal_date_label: 'Einsatzdatum:',
  terminal_site_label: 'Standort:',
  terminal_verified_line: 'BERICHT AUTHENTISCH UND UNVERSEHRT',
  ecosystem_timetracker_desc:
    'Erfasst Betriebsdaten vor Ort: GPS-Zeitstempel, Fotos, Notizen und Kundenunterschrift.',
  ecosystem_timetracker_link: 'TimeTracker entdecken',
  ecosystem_flow_desc:
    'Verwaltet Aufträge, Teams und erstellt strukturierte Berichte mit kryptografischem Bezeichner.',
  ecosystem_flow_link: 'Flow entdecken',
  ecosystem_verifier_desc:
    'Verifiziert die Integrität jedes Berichts. Gleicht das Dokument mit den Originaldaten ab und bestätigt die Authentizität.',
  problem_badge: 'Das eigentliche Problem',
  problem_title: 'Ein nicht verifizierbarer Bericht ist ein anfechtbarer Bericht.',
  problem_items: [
    {
      title: 'Kunden, die die geleistete Arbeit in Frage stellen',
      desc: 'Ohne unabhängige Beweise kann jeder Bericht angefochten werden. Der Kunde weiß nicht, ob das Geschriebene mit dem tatsächlich Geleisteten übereinstimmt.',
    },
    {
      title: 'Stundenzettel, die schwer zu verteidigen sind',
      desc: 'Manuelle Unterschriften und Papierstundenzettel reichen nicht aus. Wenn ein Streit über Arbeitsstunden oder Anwesenheit vor Ort entsteht, überzeugt das Dokument allein nicht.',
    },
    {
      title: 'Berichte, die nachträglich bearbeitet werden können',
      desc: 'Ein Dokument, das nach der Abgabe verändert werden kann, bietet keine echten Garantien. Kunden wissen das, und es schafft Misstrauen, selbst wenn die Arbeit einwandfrei ausgeführt wurde.',
    },
  ],
  what_badge: 'Was ist GeoTapp Verifier',
  what_title: 'Unabhängige Verifizierung von Einsatzberichten.',
  what_desc:
    'GeoTapp Verifier ist das System, das es ermöglicht, die Authentizität und Integrität von Berichten aus GeoTapp Flow und TimeTracker zu überprüfen. Es gleicht das Dokument mit den ursprünglichen Betriebsdaten ab — GPS-Zeitstempel, Standorte, Fotodokumente — und bestätigt, dass der Bericht nicht verändert wurde.',
  how_badge: 'So funktioniert es',
  how_title: 'Drei Schritte. Ein verifizierter Bericht.',
  how_steps: [
    {
      num: '01',
      title: 'Der Techniker erfasst die Feldtätigkeit',
      desc: 'Mit GeoTapp TimeTracker generiert jeder Einsatz Betriebsdaten: GPS-Zeitstempel, Fotos, Notizen und Kundenunterschrift. Die Daten werden in Echtzeit mit GeoTapp Flow synchronisiert.',
    },
    {
      num: '02',
      title: 'Flow erstellt den strukturierten Bericht',
      desc: 'GeoTapp Flow sammelt alle Auftragsdaten und erstellt einen strukturierten Arbeitsbericht. Der Bericht enthält einen kryptografischen Bezeichner, der das Dokument mit den Originaldaten verknüpft.',
    },
    {
      num: '03',
      title: 'Verifier prüft die Integrität',
      desc: 'Jeder kann den Bericht mit GeoTapp Verifier überprüfen. Das System gleicht das Dokument mit den erfassten Betriebsdaten ab und bestätigt, ob der Bericht unverändert und authentisch ist.',
    },
  ],
  features_badge: 'Was wird verifiziert',
  features_title: 'Jeder Aspekt des Berichts ist überprüfbar.',
  features: [
    {
      title: 'Stunden und Dauer',
      desc: 'Verifiziert, dass die gemeldeten Stunden mit den GPS-Zeitstempeln übereinstimmen, die TimeTracker vor Ort erfasst hat.',
    },
    {
      title: 'Standorte und Einsatzorte',
      desc: 'Prüft, ob Koordinaten und Adressen im Bericht mit den GPS-Daten übereinstimmen, die während des Einsatzes erfasst wurden.',
    },
    {
      title: 'Dokumentintegrität',
      desc: 'Bestätigt, dass das Dokument nach der Erstellung nicht verändert wurde. Jede Änderung wird erkannt.',
    },
    {
      title: 'Datenauthentizität',
      desc: 'Verifiziert, dass die Betriebsdaten im Bericht aus GeoTapp-Systemen stammen und nicht manuell eingegeben wurden.',
    },
    {
      title: 'Mitarbeiter und Zuweisungen',
      desc: 'Prüft, ob die im Bericht aufgeführten Techniker dieselben sind, die die Feldtätigkeit erfasst haben.',
    },
    {
      title: 'Verifizierbar ohne Plattformzugang',
      desc: 'Der Kunde kann den Bericht unabhängig verifizieren, ohne auf die GeoTapp-Plattform zugreifen zu müssen.',
    },
  ],
  who_badge: 'Für wen ist es gedacht',
  who_title: 'Für Unternehmen, die ihre Arbeit belegen müssen.',
  who_items: [
    'Wartungs- und technische Assistenzunternehmen',
    'Reinigungs- und Facility-Management-Unternehmen',
    'Sicherheits- und Überwachungsdienste',
    'Installationsteams und Außendienstteams',
    'Jedes Unternehmen, das Anwesenheit und Feldtätigkeit nachweisen muss',
  ],
  ecosystem_badge: 'GeoTapp-Ökosystem',
  ecosystem_title: 'Verifier arbeitet mit Flow und TimeTracker zusammen.',
  ecosystem_desc:
    'GeoTapp Verifier ist kein eigenständiges Tool. Es ist der letzte Schritt eines integrierten Betriebszyklus: Daten werden im Feld mit TimeTracker erfasst, in Flow organisiert und dann von Verifier zertifiziert.',
  cta_title: 'Beginnen Sie mit der Erstellung verifizierbarer Berichte.',
  cta_subtitle:
    'Entdecken Sie, wie GeoTapp Verifier Ihrem Unternehmen helfen kann, Streitigkeiten zu reduzieren und die Glaubwürdigkeit bei Kunden zu steigern.',
  cta_primary: 'Demo anfordern',
  cta_flow: 'GeoTapp Flow entdecken',
  cta_timetracker: 'GeoTapp TimeTracker entdecken',
  faq_badge: 'Häufig gestellte Fragen',
  faq_title: 'Alles, was Sie über Verifier wissen möchten.',
  faqs: [
    {
      q: 'Benötigt der Kunde ein GeoTapp-Konto, um einen Bericht zu verifizieren?',
      a: 'Nein. GeoTapp Verifier ist für die unabhängige Verifizierung konzipiert. Der Kunde erhält den Bericht und kann dessen Authentizität ohne Registrierung oder Plattformzugang überprüfen.',
    },
    {
      q: 'Was passiert, wenn jemand versucht, den Bericht zu ändern?',
      a: 'Jede Änderung am Dokument nach der Erstellung wird von Verifier erkannt. Das System gleicht den Bericht mit den ursprünglichen Betriebsdaten ab und meldet sofort jede Unstimmigkeit.',
    },
    {
      q: 'Funktioniert Verifier auch für historische Berichte?',
      a: 'Ja. Alle von GeoTapp Flow mit TimeTracker-Daten erstellten Berichte können jederzeit verifiziert werden, auch Monate oder Jahre nach ihrer Erstellung.',
    },
    {
      q: 'Muss Verifier separat erworben werden?',
      a: 'GeoTapp Verifier ist in das GeoTapp-Ökosystem integriert. Kontaktieren Sie uns, um herauszufinden, welcher Plan am besten zu Ihrem Unternehmen passt.',
    },
  ],
  hero_cta_download: 'Kostenlos herunterladen — v0.1.0',
  cta_download: 'Verifier kostenlos herunterladen',
  download_badge: 'Kostenloser Download',
  download_title: 'GeoTapp Verifier herunterladen.',
  download_desc: 'Offline-CLI-Tool zur Überprüfung der Integrität von GeoTapp-Berichten. Kein Konto erforderlich.',
  download_btn: 'report-verifier-0.1.0.zip herunterladen',
  download_version: 'v0.1.0 — ~40 KB — Benötigt Node.js ≥ 18',
  download_requirements: 'Benötigt Node.js ≥ 18',
  download_cli_title: 'Im Terminal',
  download_api_title: 'Als Node.js-Bibliothek',

  online_verify_badge: 'Instant verification',
  online_verify_title: 'Verify a report online',
  online_verify_desc: 'Upload the report ZIP file. Verification happens on the server and the file is not stored.',
  online_verify_upload_label: 'Drag the report ZIP here, or click to select',
  online_verify_upload_hint: '.zip files only — max 25MB',
  online_verify_btn: 'Verify now',
  online_verify_privacy_note: 'The file is processed in memory and never stored or shared with third parties.',
  online_verify_size_limit: 'Maximum size: 25MB',
  online_verify_result_valid_sealed: 'Valid report — sealed and signed',
  online_verify_result_valid_unsigned: 'Valid report — content intact, seal not cryptographically signed',
  online_verify_result_legacy: 'Legacy report — readable, no strong seal',
  online_verify_result_invalid: 'Invalid report — content may have been altered',
  online_verify_error_too_large: 'File too large. Maximum size: 25MB.',
  online_verify_error_not_zip: 'File must be a ZIP archive.',
  online_verify_error_generic: 'Verification error. The file may be corrupted.',
  compare_badge: 'Two ways to verify',
  compare_title: 'Local or online verification?',
  compare_local_title: 'Local (CLI / SDK)',
  compare_local_items: [
    'File stays on your device',
    'Works without internet connection',
    'No practical size limit',
    'Ideal for audits, legal, consultants',
    'Requires Node.js installed',
  ],
  compare_online_title: 'Online (this site)',
  compare_online_items: [
    'No tool to install',
    'Instant result in the browser',
    'File passes through the server (disclosed)',
    '25MB file size limit',
    'Ideal for quick checks',
  ],
  compare_same_engine_note: 'Same verification engine in both cases. The difference is where it runs.',
};

export default de;
