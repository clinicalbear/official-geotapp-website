import type { VerifierCopy } from './types';

const da: VerifierCopy = {
  hero_badge: 'GeoTapp Verifier - verificering af arbejdsrapporter',
  hero_title: 'Dine arbejdsrapporter\ner verificerbare.',
  hero_subtitle:
    'GeoTapp Verifier kontrollerer, at en GeoTapp-rapport ikke er blevet ændret efter forseglingen, og at den virkelig er udstedt af GeoTapp. Den er gratis, for dig og for dine kunder, og virker også offline.',
  hero_cta_primary: 'Prøv GeoTapp gratis',
  hero_cta_secondary: 'Se hvordan det fungerer',
  terminal_integrity: 'Hændelseskæde: INTAKT',
  terminal_timestamps: 'Forseglingens tidspunkt: FRA SERVEREN',
  terminal_gps: 'Fotoernes fingeraftryk: STEMMER OVERENS',
  terminal_not_modified: 'Dokument ikke ændret: BEKRÆFTET',
  terminal_operator: 'GeoTapps signatur: GYLDIG',
  terminal_summary_title: 'Verificeringsresumé',
  terminal_technician_label: 'Tekniker:',
  terminal_date_label: 'Dato for opgaven:',
  terminal_site_label: 'Sted:',
  terminal_verified_line: 'DOKUMENT INTAKT OG SIGNERET',
  ecosystem_timetracker_desc:
    'Indsamler data i marken: stemplinger med position og klokkeslæt, fotos som bevis og noter.',
  ecosystem_timetracker_link: 'Udforsk TimeTracker',
  ecosystem_flow_desc:
    'Organiserer opgaver og hold og genererer strukturerede, forseglede rapporter, klar til verificering.',
  ecosystem_flow_link: 'Udforsk Flow',
  ecosystem_verifier_desc:
    'Verificerer integriteten af hver rapport: genberegner fingeraftrykkene og kontrollerer GeoTapps signatur.',
  problem_badge: 'Det reelle problem',
  problem_title: 'En rapport, der ikke kan verificeres, kan anfægtes.',
  problem_items: [
    {
      title: 'Kunder der drager det udførte arbejde i tvivl',
      desc: 'Uden uafhængige beviser kan enhver rapport anfægtes. Kunden ved ikke, om det, der står i rapporten, svarer til det, der rent faktisk blev gjort.',
    },
    {
      title: 'Arbejdstid og fremmøde, der er svære at forsvare',
      desc: 'Underskriftslister og manuelle stemplinger er ikke nok. Når der opstår en strid om timer eller fremmøde på byggepladsen, overbeviser dokumentet alene ikke.',
    },
    {
      title: 'Rapporter, der er ændret eller ufuldstændige',
      desc: 'Et dokument, der kan ændres bagefter uden at efterlade spor, kan ikke verificeres. Kunden ved det, og det skaber mistillid, også når arbejdet er udført perfekt.',
    },
  ],
  what_badge: 'Hvad er GeoTapp Verifier',
  what_title: 'Uafhængig verificering af arbejdsrapporter.',
  what_desc:
    'GeoTapp Verifier gør det muligt for enhver at kontrollere en rapport genereret af GeoTapp Flow og TimeTracker: den genberegner fingeraftrykkene for stemplinger, positioner og fotos i pakken og kontrollerer GeoTapps signatur. Den fortæller, om dokumentet er intakt, og hvor det kommer fra; alene beviser den ikke, at forholdet er sket, og den er ikke juridisk rådgivning.',
  how_badge: 'Sådan fungerer det',
  how_title: 'Tre trin. Én verificeret rapport.',
  how_steps: [
    {
      num: '01',
      title: 'Teknikeren registrerer arbejdet i marken',
      desc: 'Med GeoTapp TimeTracker giver hver opgave data: stemplinger med position og klokkeslæt, fotos som bevis og noter. Dataene når frem til GeoTapp Flow, så snart telefonen har signal.',
    },
    {
      num: '02',
      title: 'Flow genererer den strukturerede rapport',
      desc: 'GeoTapp Flow samler opgavens data og producerer rapporten. Rapporten forsegles: fra det øjeblik kan enhver ændring opdages.',
    },
    {
      num: '03',
      title: 'Verifier kontrollerer integriteten',
      desc: 'Alle kan verificere rapporten med GeoTapp Verifier: den genberegner fingeraftrykkene, kontrollerer signaturen og fortæller, om rapporten er intakt, og om den kommer fra GeoTapp.',
    },
  ],
  features_badge: 'Hvad verificeres',
  features_title: 'Ethvert aspekt af rapporten kan kontrolleres.',
  features: [
    {
      title: 'Hændelseskæde',
      desc: 'Hver stempling er knyttet til den forrige med et SHA-256-fingeraftryk: hvis en hændelse fjernes, tilføjes eller ændres, brydes kæden.',
    },
    {
      title: 'Fotos som bevis',
      desc: 'Hvert fotos fingeraftryk ligger i pakken: det er nok at ændre én pixel, for at det ikke længere stemmer.',
    },
    {
      title: 'Dokumentets integritet',
      desc: 'Verificerer, at dokumentet ikke er blevet ændret, efter at det blev genereret. Enhver ændring opdages.',
    },
    {
      title: 'GeoTapps signatur',
      desc: 'Pakkens rod er signeret med GeoTapps nøgle: verificeringen fortæller, om det var os, der udstedte den.',
    },
    {
      title: 'Forseglingens tidspunkt',
      desc: 'Forseglingens tidspunkt kommer fra serverens ur, ikke fra telefonens.',
    },
    {
      title: 'Verificerbar uden adgang til platformen',
      desc: 'Kunden kan verificere rapporten uafhængigt, uden at have adgang til GeoTapp-platformen, også offline.',
    },
  ],
  who_badge: 'Hvem er det til',
  who_title: 'Til virksomheder, der skal dokumentere det udførte arbejde.',
  who_items: [
    'Vedligeholdelses- og teknisk servicevirksomheder',
    'Rengørings- og facility management-virksomheder',
    'Vagt- og sikkerhedstjenester',
    'Installatører og servicehold',
    'Enhver virksomhed, der skal dokumentere tilstedeværelse og arbejde i marken',
  ],
  ecosystem_badge: 'GeoTapp-økosystemet',
  ecosystem_title: 'Verifier virker sammen med Flow og TimeTracker.',
  ecosystem_desc:
    'GeoTapp Verifier er ikke et isoleret værktøj. Det er den afsluttende del af en sammenhængende arbejdsgang: dataene indsamles i marken med TimeTracker, organiseres i Flow og verificeres derefter af Verifier.',
  cta_title: 'Begynd at producere verificerbare rapporter.',
  cta_subtitle:
    'Med rapporter, som kunden selv kan verificere, har du et bevis at vise frem, når nogen anfægter dem, i stedet for ord mod ord.',
  cta_primary: 'Prøv GeoTapp gratis',
  cta_flow: 'Udforsk GeoTapp Flow',
  cta_timetracker: 'Udforsk GeoTapp TimeTracker',
  faq_badge: 'Ofte stillede spørgsmål',
  faq_title: 'Alt hvad du vil vide om Verifier.',
  faqs: [
    {
      q: 'Skal kunden have en GeoTapp-konto for at verificere en rapport?',
      a: 'Nej. Kunden modtager rapporten og verificerer den uden at oprette sig og uden at logge ind på platformen: online eller med den gratis offline-verifikator.',
    },
    {
      q: 'Hvad sker der, hvis nogen forsøger at ændre rapporten?',
      a: 'Verifikatoren genberegner fingeraftrykkene for hændelser og fotos: enhver ændring efter genereringen gør, at de afviger fra de forseglede, og verificeringen markerer dokumentet som ændret.',
    },
    {
      q: 'Fungerer Verifier også til historiske rapporter?',
      a: 'Ja. Alle rapporter genereret af GeoTapp Flow med TimeTracker-data kan verificeres til enhver tid, også måneder eller år efter, at de blev produceret.',
    },
    {
      q: 'Koster Verifier noget?',
      a: 'Nej, den er gratis: for dig og for enhver, der modtager en af dine rapporter.',
    },
  ],
  hero_cta_download: 'Download verifikatoren',
  cta_download: 'Download Verifier gratis',
  download_badge: 'Gratis download',
  download_title: 'Download GeoTapp Verifier.',
  download_desc: 'Verificér integriteten af GeoTapp-rapporter offline. Ingen konto nødvendig: via terminal eller Node.js-bibliotek for udviklere, eller en HTML-fil, der åbnes med et dobbeltklik, for alle andre.',
  download_btn_cli: 'Download til kommandolinjen (Node.js)',
  download_btn_html: 'Download den lokale HTML-version',
  download_version: 'v0.3.0 · samme verificeringsmotor, to formater',
  download_requirements: 'Kræver Node.js ≥ 18',
  download_cli_title: 'Fra terminal',
  download_api_title: 'Som Node.js-bibliotek',

  online_verify_badge: 'Øjeblikkelig verificering',
  online_verify_title: 'Verificér en rapport online',
  online_verify_desc: 'Upload rapportens ZIP-fil. Verificeringen sker på serveren, og filen gemmes ikke.',
  online_verify_upload_label: 'Træk rapportens ZIP-fil hertil, eller klik for at vælge den',
  online_verify_upload_hint: 'Kun .zip-filer, maks. 25 MB',
  online_verify_btn: 'Verificér nu',
  online_verify_privacy_note: 'Filen behandles i hukommelsen og gemmes eller videregives ikke til tredjepart.',
  online_verify_size_limit: 'Maksimal størrelse: 25 MB',
  online_verify_result_valid_sealed: 'Gyldig rapport, forseglet og signeret',
  online_verify_result_valid_unsigned: 'Gyldig rapport, indholdet er intakt, forseglingen er ikke signeret',
  online_verify_result_legacy: 'Ældre rapport, læsbar, uden stærk forsegling',
  online_verify_result_invalid: 'Ugyldig rapport, indholdet kan være ændret',
  online_verify_error_too_large: 'Filen er for stor. Maksimal størrelse: 25 MB.',
  online_verify_error_not_zip: 'Filen skal være et ZIP-arkiv.',
  online_verify_error_generic: 'Fejl under verificeringen. Filen kan være beskadiget.',

  compare_badge: 'To måder at verificere på',
  compare_title: 'Lokal eller online verificering?',
  compare_local_title: 'På din computer',
  compare_local_items: [
    'Filen bliver på din enhed',
    'Virker uden internetforbindelse',
    'Ingen praktisk størrelsesgrænse',
    'Ideel til revisioner, jurister og rådgivere',
    'HTML-versionen kræver ingen installation; kommandolinjeversionen kræver Node.js',
  ],
  compare_online_title: 'Online (dette websted)',
  compare_online_items: [
    'Intet værktøj at installere',
    'Øjeblikkeligt resultat i browseren',
    'Filen passerer vores server, som ikke gemmer den',
    'Grænse på 25 MB pr. fil',
    'Ideel til hurtige kontroller',
  ],
  compare_same_engine_note: 'Samme verificeringsmotor i begge tilfælde. Forskellen er, hvor den kører.',
};

export default da;
