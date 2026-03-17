import type { VerifierCopy } from './types';

const nl: VerifierCopy = {
  hero_badge: 'GeoTapp Verifier — Verificatie van Werkrapporten',
  hero_title: 'Uw werkrapporten\nzijn verifieerbaar.',
  hero_subtitle:
    'GeoTapp Verifier controleert of een interventierapport overeenkomt met de operationele gegevens die in het veld zijn geregistreerd en niet is gewijzigd. Meer geloofwaardigheid bij de klant, minder geschillen.',
  hero_cta_primary: 'Demo aanvragen',
  hero_cta_secondary: 'Zie hoe het werkt',
  terminal_integrity: 'Documentintegriteit: GEVERIFIEERD',
  terminal_timestamps: 'Tijdstempelovereenkomst: BEVESTIGD',
  terminal_gps: 'GPS-coördinaten: CONSISTENT',
  terminal_not_modified: 'Document niet gewijzigd: BEVESTIGD',
  terminal_operator: 'Medewerker geverifieerd: OK',
  terminal_summary_title: 'Verificatieoverzicht',
  terminal_technician_label: 'Technicus:',
  terminal_date_label: 'Interventiedatum:',
  terminal_site_label: 'Locatie:',
  terminal_verified_line: 'RAPPORT AUTHENTIEK EN ONGESCHONDEN',
  ecosystem_timetracker_desc:
    'Verzamelt operationele gegevens in het veld: GPS-tijdstempels, foto\'s, notities en handtekening van de klant.',
  ecosystem_timetracker_link: 'TimeTracker verkennen',
  ecosystem_flow_desc:
    'Organiseert opdrachten, teams en genereert gestructureerde rapporten met cryptografische identifier.',
  ecosystem_flow_link: 'Flow verkennen',
  ecosystem_verifier_desc:
    'Verifieert de integriteit van elk rapport. Vergelijkt het document met de originele gegevens en certificeert de authenticiteit.',
  problem_badge: 'Het echte probleem',
  problem_title: 'Een niet-verifieerbaar rapport is een betwistbaar rapport.',
  problem_items: [
    {
      title: 'Klanten die het uitgevoerde werk in twijfel trekken',
      desc: 'Zonder onafhankelijk bewijs kan elk rapport worden betwist. De klant weet niet of wat er staat overeenkomt met wat er daadwerkelijk is gedaan.',
    },
    {
      title: 'Urenstaten die moeilijk te verdedigen zijn',
      desc: 'Handmatige handtekeningen en papieren aanwezigheidslijsten zijn niet genoeg. Wanneer er een geschil ontstaat over uren of aanwezigheid op locatie, overtuigt het document alleen niet.',
    },
    {
      title: 'Rapporten die achteraf bewerkt kunnen worden',
      desc: 'Een document dat na aflevering kan worden gewijzigd biedt geen echte garanties. Klanten weten dit en het wekt wantrouwen, zelfs als het werk perfect is uitgevoerd.',
    },
  ],
  what_badge: 'Wat is GeoTapp Verifier',
  what_title: 'Onafhankelijke verificatie van interventierapporten.',
  what_desc:
    'GeoTapp Verifier is het systeem waarmee u de authenticiteit en integriteit van rapporten die door GeoTapp Flow en TimeTracker zijn gegenereerd kunt verifiëren. Het vergelijkt het document met de originele operationele gegevens — GPS-tijdstempels, locaties, fotobewijs — en certificeert dat het rapport niet is gewijzigd.',
  how_badge: 'Hoe het werkt',
  how_title: 'Drie stappen. Één geverifieerd rapport.',
  how_steps: [
    {
      num: '01',
      title: 'De technicus registreert veldactiviteit',
      desc: 'Met GeoTapp TimeTracker genereert elke interventie operationele gegevens: GPS-tijdstempels, foto\'s, notities en handtekening van de klant. Gegevens worden in realtime gesynchroniseerd met GeoTapp Flow.',
    },
    {
      num: '02',
      title: 'Flow genereert het gestructureerde rapport',
      desc: 'GeoTapp Flow verzamelt alle opdrachtgegevens en produceert een gestructureerd werkrapport. Het rapport bevat een cryptografische identifier die het document koppelt aan de originele gegevens.',
    },
    {
      num: '03',
      title: 'Verifier controleert de integriteit',
      desc: 'Iedereen kan het rapport verifiëren met GeoTapp Verifier. Het systeem vergelijkt het document met de geregistreerde operationele gegevens en certificeert of het rapport intact en authentiek is.',
    },
  ],
  features_badge: 'Wat wordt geverifieerd',
  features_title: 'Elk aspect van het rapport is controleerbaar.',
  features: [
    {
      title: 'Uren en duur',
      desc: 'Verifieert dat de gerapporteerde uren overeenkomen met GPS-tijdstempels die door TimeTracker in het veld zijn geregistreerd.',
    },
    {
      title: 'Locaties en vestigingen',
      desc: 'Controleert of coördinaten en adressen in het rapport overeenkomen met de GPS-gegevens die tijdens de interventie zijn vastgelegd.',
    },
    {
      title: 'Documentintegriteit',
      desc: 'Certificeert dat het document na het aanmaken niet is gewijzigd. Elke wijziging wordt gedetecteerd.',
    },
    {
      title: 'Gegevensauthenticiteit',
      desc: 'Verifieert dat de operationele gegevens in het rapport afkomstig zijn van GeoTapp-systemen en niet handmatig zijn ingevoerd.',
    },
    {
      title: 'Medewerkers en toewijzingen',
      desc: 'Controleert of de technici in het rapport dezelfde zijn als degenen die veldactiviteit hebben geregistreerd.',
    },
    {
      title: 'Verifieerbaar zonder platformtoegang',
      desc: 'De klant kan het rapport onafhankelijk verifiëren, zonder toegang tot het GeoTapp-platform.',
    },
  ],
  who_badge: 'Voor wie is het',
  who_title: 'Voor bedrijven die hun werk moeten verdedigen.',
  who_items: [
    'Onderhouds- en technische assistentiebedrijven',
    'Schoonmaak- en facilitaire managementbedrijven',
    'Beveiligings- en bewakingsdiensten',
    'Installatieteams en buitendienstteams',
    'Elk bedrijf dat aanwezigheid en veldactiviteit moet aantonen',
  ],
  ecosystem_badge: 'GeoTapp-ecosysteem',
  ecosystem_title: 'Verifier werkt samen met Flow en TimeTracker.',
  ecosystem_desc:
    'GeoTapp Verifier is geen op zichzelf staand hulpmiddel. Het is de laatste stap van een geïntegreerde operationele cyclus: gegevens worden in het veld verzameld met TimeTracker, georganiseerd in Flow en vervolgens gecertificeerd door Verifier.',
  cta_title: 'Begin met het produceren van verifieerbare rapporten.',
  cta_subtitle:
    'Ontdek hoe GeoTapp Verifier uw bedrijf kan helpen geschillen te verminderen en geloofwaardigheid bij klanten te vergroten.',
  cta_primary: 'Demo aanvragen',
  cta_flow: 'GeoTapp Flow verkennen',
  cta_timetracker: 'GeoTapp TimeTracker verkennen',
  faq_badge: 'Veelgestelde vragen',
  faq_title: 'Alles wat u wilt weten over Verifier.',
  faqs: [
    {
      q: 'Heeft de klant een GeoTapp-account nodig om een rapport te verifiëren?',
      a: 'Nee. GeoTapp Verifier is ontworpen voor onafhankelijke verificatie. De klant ontvangt het rapport en kan de authenticiteit ervan verifiëren zonder zich te registreren of het platform te openen.',
    },
    {
      q: 'Wat gebeurt er als iemand probeert het rapport te wijzigen?',
      a: 'Elke wijziging aan het document na het aanmaken wordt door Verifier gedetecteerd. Het systeem vergelijkt het rapport met de originele operationele gegevens en markeert onmiddellijk elke discrepantie.',
    },
    {
      q: 'Werkt Verifier ook voor historische rapporten?',
      a: 'Ja. Alle rapporten die door GeoTapp Flow met TimeTracker-gegevens zijn gegenereerd kunnen op elk moment worden geverifieerd, ook maanden of jaren na de productie.',
    },
    {
      q: 'Moet Verifier apart worden aangeschaft?',
      a: 'GeoTapp Verifier is geïntegreerd in het GeoTapp-ecosysteem. Neem contact met ons op om te bepalen welk abonnement het beste bij uw bedrijf past.',
    },
  ],
  hero_cta_download: 'Gratis downloaden — v0.2.0',
  cta_download: 'Verifier gratis downloaden',
  download_badge: 'Gratis download',
  download_title: 'Download GeoTapp Verifier.',
  download_desc: 'Open CLI-tool voor offline verificatie van de integriteit van GeoTapp-rapporten. Geen account vereist. Werkt via terminal of als Node.js-bibliotheek.',
  download_btn: 'Download report-verifier-0.2.0.zip',
  download_version: 'v0.2.0 — ~46 KB — Vereist Node.js ≥ 18',
  download_requirements: 'Vereist Node.js ≥ 18',
  download_cli_title: 'Via terminal',
  download_api_title: 'Als Node.js-bibliotheek',

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

export default nl;
