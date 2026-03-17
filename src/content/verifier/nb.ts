import type { VerifierCopy } from './types';

const nb: VerifierCopy = {
  hero_badge: 'GeoTapp Verifier — Verifisering av Arbeidsrapporter',
  hero_title: 'Arbeidsrapportene dine\ner verifiserbare.',
  hero_subtitle:
    'GeoTapp Verifier kontrollerer at en intervensjonsrapport stemmer overens med de operative dataene som er registrert i felt, og ikke har blitt endret. Mer troverdighet overfor kunden, færre tvister.',
  hero_cta_primary: 'Be om en demo',
  hero_cta_secondary: 'Se hvordan det fungerer',
  terminal_integrity: 'Dokumentintegritet: VERIFISERT',
  terminal_timestamps: 'Tidsstempel-samsvar: BEKREFTET',
  terminal_gps: 'GPS-koordinater: KONSISTENTE',
  terminal_not_modified: 'Dokument ikke endret: BEKREFTET',
  terminal_operator: 'Operatør verifisert: OK',
  terminal_summary_title: 'Verifiseringssammendrag',
  terminal_technician_label: 'Tekniker:',
  terminal_date_label: 'Intervensjonsdato:',
  terminal_site_label: 'Sted:',
  terminal_verified_line: 'RAPPORT AUTENTISK OG INTAKT',
  ecosystem_timetracker_desc:
    'Samler inn operative data i felt: GPS-tidsstempler, bilder, notater og kundens underskrift.',
  ecosystem_timetracker_link: 'Utforsk TimeTracker',
  ecosystem_flow_desc:
    'Organiserer oppdrag, team og genererer strukturerte rapporter med kryptografisk identifikator.',
  ecosystem_flow_link: 'Utforsk Flow',
  ecosystem_verifier_desc:
    'Verifiserer integriteten til hver rapport. Sammenligner dokumentet med originaldataene og sertifiserer autentisiteten.',
  problem_badge: 'Det virkelige problemet',
  problem_title: 'En ikke-verifiserbar rapport er en bestridbar rapport.',
  problem_items: [
    {
      title: 'Kunder som stiller spørsmål ved utført arbeid',
      desc: 'Uten uavhengig bevis kan enhver rapport bestrids. Kunden vet ikke om det som er skrevet stemmer med hva som faktisk ble gjort.',
    },
    {
      title: 'Timesedler som er vanskelige å forsvare',
      desc: 'Manuelle underskrifter og papirtimesedler er ikke nok. Når en tvist oppstår om timer eller tilstedeværelse på stedet, overbeviser ikke dokumentet alene.',
    },
    {
      title: 'Rapporter som kan redigeres i ettertid',
      desc: 'Et dokument som kan endres etter levering gir ingen reelle garantier. Kunder vet dette, og det skaper mistillit selv når arbeidet ble utført perfekt.',
    },
  ],
  what_badge: 'Hva er GeoTapp Verifier',
  what_title: 'Uavhengig verifisering av intervensjonsrapporter.',
  what_desc:
    'GeoTapp Verifier er systemet som gjør det mulig å verifisere autentisiteten og integriteten til rapporter generert av GeoTapp Flow og TimeTracker. Det sammenligner dokumentet med de originale operative dataene — GPS-tidsstempler, lokasjoner, fotodokumentasjon — og sertifiserer at rapporten ikke har blitt endret.',
  how_badge: 'Slik fungerer det',
  how_title: 'Tre trinn. Én verifisert rapport.',
  how_steps: [
    {
      num: '01',
      title: 'Teknikeren registrerer feltaktivitet',
      desc: 'Med GeoTapp TimeTracker genererer hver intervensjon operative data: GPS-tidsstempler, bilder, notater og kundens underskrift. Data synkroniseres med GeoTapp Flow i sanntid.',
    },
    {
      num: '02',
      title: 'Flow genererer den strukturerte rapporten',
      desc: 'GeoTapp Flow samler alle oppdragsdata og produserer en strukturert arbeidsrapport. Rapporten inneholder en kryptografisk identifikator som knytter dokumentet til originaldataene.',
    },
    {
      num: '03',
      title: 'Verifier kontrollerer integriteten',
      desc: 'Alle kan verifisere rapporten med GeoTapp Verifier. Systemet sammenligner dokumentet med de registrerte operative dataene og sertifiserer om rapporten er intakt og autentisk.',
    },
  ],
  features_badge: 'Hva verifiseres',
  features_title: 'Ethvert aspekt av rapporten er kontrollerbart.',
  features: [
    {
      title: 'Timer og varigheter',
      desc: 'Verifiserer at de rapporterte timene stemmer overens med GPS-tidsstempler registrert av TimeTracker i felt.',
    },
    {
      title: 'Lokasjoner og steder',
      desc: 'Kontrollerer at koordinater og adresser i rapporten stemmer overens med GPS-data innsamlet under intervensjonen.',
    },
    {
      title: 'Dokumentintegritet',
      desc: 'Sertifiserer at dokumentet ikke har blitt endret etter generering. Enhver endring oppdages.',
    },
    {
      title: 'Dataautentisitet',
      desc: 'Verifiserer at de operative dataene i rapporten kommer fra GeoTapp-systemer og ikke har blitt lagt inn manuelt.',
    },
    {
      title: 'Operatører og tildelinger',
      desc: 'Kontrollerer at teknikerne i rapporten er de samme som registrerte feltaktivitet.',
    },
    {
      title: 'Verifiserbar uten plattformtilgang',
      desc: 'Kunden kan verifisere rapporten uavhengig, uten å trenge tilgang til GeoTapp-plattformen.',
    },
  ],
  who_badge: 'Hvem er det for',
  who_title: 'For bedrifter som må forsvare arbeidet sitt.',
  who_items: [
    'Vedlikeholds- og teknisk assistansebedrifter',
    'Rengjørings- og facility management-bedrifter',
    'Sikkerhets- og overvåkningstjenester',
    'Installasjonsteam og feltteam',
    'Enhver bedrift som må bevise tilstedeværelse og feltaktivitet',
  ],
  ecosystem_badge: 'GeoTapp-økosystemet',
  ecosystem_title: 'Verifier fungerer med Flow og TimeTracker.',
  ecosystem_desc:
    'GeoTapp Verifier er ikke et frittstående verktøy. Det er det siste trinnet i en integrert operasjonell syklus: data samles inn i felt med TimeTracker, organiseres i Flow og sertifiseres deretter av Verifier.',
  cta_title: 'Begynn å produsere verifiserbare rapporter.',
  cta_subtitle:
    'Oppdag hvordan GeoTapp Verifier kan hjelpe bedriften din med å redusere tvister og øke troverdigheten overfor kunder.',
  cta_primary: 'Be om en demo',
  cta_flow: 'Utforsk GeoTapp Flow',
  cta_timetracker: 'Utforsk GeoTapp TimeTracker',
  faq_badge: 'Ofte stilte spørsmål',
  faq_title: 'Alt du vil vite om Verifier.',
  faqs: [
    {
      q: 'Trenger kunden en GeoTapp-konto for å verifisere en rapport?',
      a: 'Nei. GeoTapp Verifier er designet for uavhengig verifisering. Kunden mottar rapporten og kan verifisere dens autentisitet uten å registrere seg eller få tilgang til plattformen.',
    },
    {
      q: 'Hva skjer hvis noen prøver å endre rapporten?',
      a: 'Enhver endring av dokumentet etter generering oppdages av Verifier. Systemet sammenligner rapporten med de originale operative dataene og markerer umiddelbart ethvert avvik.',
    },
    {
      q: 'Fungerer Verifier for historiske rapporter?',
      a: 'Ja. Alle rapporter generert av GeoTapp Flow med TimeTracker-data kan verifiseres når som helst, selv måneder eller år etter at de ble produsert.',
    },
    {
      q: 'Må Verifier kjøpes separat?',
      a: 'GeoTapp Verifier er integrert i GeoTapp-økosystemet. Kontakt oss for å finne ut hvilken plan som passer best for bedriftens behov.',
    },
  ],
  hero_cta_download: 'Last ned gratis — v0.2.0',
  cta_download: 'Last ned Verifier gratis',
  download_badge: 'Gratis nedlasting',
  download_title: 'Last ned GeoTapp Verifier.',
  download_desc: 'Åpent CLI-verktøy for offline verifisering av GeoTapp-rapportintegritet. Ingen konto nødvendig. Fungerer fra terminal eller som Node.js-bibliotek.',
  download_btn: 'Last ned report-verifier-0.2.0.zip',
  download_version: 'v0.2.0 — ~46 KB — Krever Node.js ≥ 18',
  download_requirements: 'Krever Node.js ≥ 18',
  download_cli_title: 'Fra terminal',
  download_api_title: 'Som Node.js-bibliotek',

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

export default nb;
