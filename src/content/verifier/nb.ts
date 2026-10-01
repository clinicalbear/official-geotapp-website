import type { VerifierCopy } from './types';

const nb: VerifierCopy = {
  hero_badge: 'GeoTapp Verifier - verifisering av arbeidsrapporter',
  hero_title: 'Arbeidsrapportene dine\ner verifiserbare.',
  hero_subtitle:
    'GeoTapp Verifier kontrollerer at en GeoTapp-rapport ikke er endret etter forseglingen, og at den virkelig er utstedt av GeoTapp. Den er gratis, for deg og for kundene dine, og fungerer også uten nett.',
  hero_cta_primary: 'Prøv GeoTapp gratis',
  hero_cta_secondary: 'Se hvordan det fungerer',
  terminal_integrity: 'Hendelseskjede: INTAKT',
  terminal_timestamps: 'Tidspunkt for forseglingen: FRA SERVEREN',
  terminal_gps: 'Bildenes fingeravtrykk: STEMMER OVERENS',
  terminal_not_modified: 'Dokument ikke endret: BEKREFTET',
  terminal_operator: 'GeoTapps signatur: GYLDIG',
  terminal_summary_title: 'Verifiseringssammendrag',
  terminal_technician_label: 'Tekniker:',
  terminal_date_label: 'Dato for oppdraget:',
  terminal_site_label: 'Sted:',
  terminal_verified_line: 'DOKUMENT INTAKT OG SIGNERT',
  ecosystem_timetracker_desc:
    'Samler inn data ute i felt: stemplinger med posisjon og klokkeslett, bevisbilder og notater.',
  ecosystem_timetracker_link: 'Utforsk TimeTracker',
  ecosystem_flow_desc:
    'Organiserer oppdrag og team og lager strukturerte, forseglede rapporter, klare for verifisering.',
  ecosystem_flow_link: 'Utforsk Flow',
  ecosystem_verifier_desc:
    'Verifiserer integriteten til hver rapport: regner ut fingeravtrykkene på nytt og kontrollerer GeoTapps signatur.',
  problem_badge: 'Det virkelige problemet',
  problem_title: 'En rapport som ikke kan verifiseres, kan bestrides.',
  problem_items: [
    {
      title: 'Kunder som tviler på det utførte arbeidet',
      desc: 'Uten uavhengig bevis kan enhver rapport bestrides. Kunden vet ikke om det som står i rapporten stemmer med det som faktisk ble gjort.',
    },
    {
      title: 'Arbeidstid og oppmøte som er vanskelig å forsvare',
      desc: 'Signaturlister og manuelle stemplinger er ikke nok. Når det oppstår uenighet om timer eller oppmøte på byggeplassen, overbeviser ikke dokumentet alene.',
    },
    {
      title: 'Rapporter som er endret eller ufullstendige',
      desc: 'Et dokument som kan endres i ettertid uten å etterlate spor, kan ikke verifiseres. Kunden vet det, og det skaper mistillit, også når arbeidet er utført feilfritt.',
    },
  ],
  what_badge: 'Hva er GeoTapp Verifier',
  what_title: 'Uavhengig verifisering av arbeidsrapporter.',
  what_desc:
    'GeoTapp Verifier gjør det mulig for alle å kontrollere en rapport laget av GeoTapp Flow og TimeTracker: den regner ut fingeravtrykkene til stemplinger, posisjoner og bilder i pakken på nytt og kontrollerer GeoTapps signatur. Den forteller om dokumentet er intakt og hvor det kommer fra; alene beviser den ikke at forholdet har skjedd, og den er ikke juridisk rådgivning.',
  how_badge: 'Slik fungerer det',
  how_title: 'Tre trinn. Én verifisert rapport.',
  how_steps: [
    {
      num: '01',
      title: 'Teknikeren registrerer arbeidet ute i felt',
      desc: 'Med GeoTapp TimeTracker gir hvert oppdrag data: stemplinger med posisjon og klokkeslett, bevisbilder og notater. Dataene kommer fram til GeoTapp Flow så snart telefonen har dekning.',
    },
    {
      num: '02',
      title: 'Flow lager den strukturerte rapporten',
      desc: 'GeoTapp Flow samler dataene fra oppdraget og lager rapporten. Rapporten forsegles: fra det øyeblikket kan enhver endring oppdages.',
    },
    {
      num: '03',
      title: 'Verifier kontrollerer integriteten',
      desc: 'Alle kan verifisere rapporten med GeoTapp Verifier: den regner ut fingeravtrykkene på nytt, kontrollerer signaturen og forteller om rapporten er intakt og om den kommer fra GeoTapp.',
    },
  ],
  features_badge: 'Hva verifiseres',
  features_title: 'Alle sider ved rapporten kan kontrolleres.',
  features: [
    {
      title: 'Hendelseskjede',
      desc: 'Hver stempling er knyttet til den forrige med et SHA-256-fingeravtrykk: hvis en hendelse fjernes, legges til eller endres, brytes kjeden.',
    },
    {
      title: 'Bevisbilder',
      desc: 'Fingeravtrykket til hvert bilde ligger i pakken: det er nok å endre én piksel for at det ikke lenger stemmer.',
    },
    {
      title: 'Dokumentets integritet',
      desc: 'Verifiserer at dokumentet ikke er endret etter at det ble laget. Enhver endring oppdages.',
    },
    {
      title: 'GeoTapps signatur',
      desc: 'Roten til pakken er signert med GeoTapps nøkkel: verifiseringen forteller om det var vi som utstedte den.',
    },
    {
      title: 'Tidspunkt for forseglingen',
      desc: 'Tidspunktet for forseglingen kommer fra serverens klokke, ikke fra telefonens.',
    },
    {
      title: 'Kan verifiseres uten tilgang til plattformen',
      desc: 'Kunden kan verifisere rapporten uavhengig, uten tilgang til GeoTapp-plattformen, også uten nett.',
    },
  ],
  who_badge: 'Hvem er det for',
  who_title: 'For bedrifter som må dokumentere arbeidet de har utført.',
  who_items: [
    'Vedlikeholds- og teknisk servicebedrifter',
    'Renholds- og facility management-bedrifter',
    'Vakt- og sikkerhetstjenester',
    'Installatører og servicelag',
    'Enhver bedrift som må dokumentere tilstedeværelse og arbeid ute i felt',
  ],
  ecosystem_badge: 'GeoTapp-økosystemet',
  ecosystem_title: 'Verifier fungerer sammen med Flow og TimeTracker.',
  ecosystem_desc:
    'GeoTapp Verifier er ikke et isolert verktøy. Det er den avsluttende delen av en sammenhengende arbeidsflyt: dataene samles inn ute i felt med TimeTracker, organiseres i Flow og verifiseres deretter av Verifier.',
  cta_title: 'Begynn å lage verifiserbare rapporter.',
  cta_subtitle:
    'Med rapporter som kunden selv kan verifisere, har du et bevis å vise fram når noen bestrider dem, i stedet for ord mot ord.',
  cta_primary: 'Prøv GeoTapp gratis',
  cta_flow: 'Utforsk GeoTapp Flow',
  cta_timetracker: 'Utforsk GeoTapp TimeTracker',
  faq_badge: 'Ofte stilte spørsmål',
  faq_title: 'Alt du vil vite om Verifier.',
  faqs: [
    {
      q: 'Trenger kunden en GeoTapp-konto for å verifisere en rapport?',
      a: 'Nei. Kunden mottar rapporten og verifiserer den uten å registrere seg og uten å logge inn på plattformen: online eller med den gratis offline-verifikatoren.',
    },
    {
      q: 'Hva skjer hvis noen prøver å endre rapporten?',
      a: 'Verifikatoren regner ut fingeravtrykkene til hendelser og bilder på nytt: enhver endring etter at rapporten ble laget gjør at de avviker fra de forseglede, og verifiseringen markerer dokumentet som endret.',
    },
    {
      q: 'Fungerer Verifier også for historiske rapporter?',
      a: 'Ja. Alle rapporter laget av GeoTapp Flow med TimeTracker-data kan verifiseres når som helst, også måneder eller år etter at de ble laget.',
    },
    {
      q: 'Koster Verifier noe?',
      a: 'Nei, den er gratis: for deg og for alle som mottar en av rapportene dine.',
    },
  ],
  hero_cta_download: 'Last ned verifikatoren',
  cta_download: 'Last ned Verifier gratis',
  download_badge: 'Gratis nedlasting',
  download_title: 'Last ned GeoTapp Verifier.',
  download_desc: 'Kontroller integriteten til GeoTapp-rapporter uten nett. Ingen konto nødvendig: via terminal eller Node.js-bibliotek for utviklere, eller én HTML-fil som åpnes med dobbeltklikk for alle andre.',
  download_btn_cli: 'Last ned for kommandolinjen (Node.js)',
  download_btn_html: 'Last ned den lokale HTML-versjonen',
  download_version: 'v0.3.0 · samme verifiseringsmotor, to formater',
  download_requirements: 'Krever Node.js ≥ 18',
  download_cli_title: 'Fra terminal',
  download_api_title: 'Som Node.js-bibliotek',

  online_verify_badge: 'Verifisering på stedet',
  online_verify_title: 'Verifiser en rapport online',
  online_verify_desc: 'Last opp ZIP-filen til rapporten. Verifiseringen skjer på serveren, og filen lagres ikke.',
  online_verify_upload_label: 'Dra ZIP-filen til rapporten hit, eller klikk for å velge den',
  online_verify_upload_hint: 'Bare .zip-filer, maks. 25 MB',
  online_verify_btn: 'Verifiser nå',
  online_verify_privacy_note: 'Filen behandles i minnet og lagres eller deles ikke med tredjeparter.',
  online_verify_size_limit: 'Maksimal størrelse: 25 MB',
  online_verify_result_valid_sealed: 'Gyldig rapport, forseglet og signert',
  online_verify_result_valid_unsigned: 'Gyldig rapport, innholdet er intakt, forseglingen er ikke signert',
  online_verify_result_legacy: 'Eldre rapport, lesbar, uten sterk forsegling',
  online_verify_result_invalid: 'Ugyldig rapport, innholdet kan være endret',
  online_verify_error_too_large: 'Filen er for stor. Maksimal størrelse: 25 MB.',
  online_verify_error_not_zip: 'Filen må være et ZIP-arkiv.',
  online_verify_error_generic: 'Feil under verifiseringen. Filen kan være skadet.',

  compare_badge: 'To måter å verifisere på',
  compare_title: 'Lokal eller online verifisering?',
  compare_local_title: 'På din egen datamaskin',
  compare_local_items: [
    'Filen blir på enheten din',
    'Fungerer uten internettforbindelse',
    'Ingen praktisk størrelsesgrense',
    'Ideell for revisjoner, jurister og rådgivere',
    'HTML-versjonen krever ingen installasjon; kommandolinjeversjonen krever Node.js',
  ],
  compare_online_title: 'Online (dette nettstedet)',
  compare_online_items: [
    'Ingen verktøy å installere',
    'Resultat med en gang i nettleseren',
    'Filen går via serveren vår, som ikke lagrer den',
    'Grense på 25 MB per fil',
    'Ideell for raske kontroller',
  ],
  compare_same_engine_note: 'Samme verifiseringsmotor i begge tilfeller. Forskjellen er hvor den kjører.',
};

export default nb;
