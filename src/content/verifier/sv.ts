import type { VerifierCopy } from './types';

const sv: VerifierCopy = {
  hero_badge: 'GeoTapp Verifier - Kontroll av arbetsrapporter',
  hero_title: 'Dina arbetsrapporter\när verifierbara.',
  hero_subtitle:
    'GeoTapp Verifier kontrollerar att en GeoTapp-rapport inte har ändrats efter förseglingen och att den verkligen kommer från GeoTapp. Det är gratis, för dig och för dina kunder, och fungerar även offline.',
  hero_cta_primary: 'Testa GeoTapp gratis',
  hero_cta_secondary: 'Se hur det fungerar',
  terminal_integrity: 'Händelsekedja: INTAKT',
  terminal_timestamps: 'Tid för förseglingen: FRÅN SERVERN',
  terminal_gps: 'Fotons fingeravtryck: STÄMMER',
  terminal_not_modified: 'Dokument oförändrat: BEKRÄFTAT',
  terminal_operator: 'GeoTapps signatur: GILTIG',
  terminal_summary_title: 'Sammanfattning av kontrollen',
  terminal_technician_label: 'Tekniker:',
  terminal_date_label: 'Datum för insatsen:',
  terminal_site_label: 'Plats:',
  terminal_verified_line: 'DOKUMENTET ÄR INTAKT OCH SIGNERAT',
  ecosystem_timetracker_desc:
    'Samlar in data i fält: instämplingar med position och tid, bevisfoton och anteckningar.',
  ecosystem_timetracker_link: 'Utforska TimeTracker',
  ecosystem_flow_desc:
    'Organiserar uppdrag och team och skapar strukturerade, förseglade rapporter som är redo för kontroll.',
  ecosystem_flow_link: 'Utforska Flow',
  ecosystem_verifier_desc:
    'Kontrollerar integriteten hos varje rapport: räknar om fingeravtrycken och kontrollerar GeoTapps signatur.',
  problem_badge: 'Det verkliga problemet',
  problem_title: 'En rapport som inte går att kontrollera går att ifrågasätta.',
  problem_items: [
    {
      title: 'Kunder som ifrågasätter det utförda arbetet',
      desc: 'Utan oberoende underlag kan vilken rapport som helst ifrågasättas. Kunden vet inte om det som står skrivet stämmer med det som verkligen gjordes.',
    },
    {
      title: 'Arbetstider och närvaro som är svåra att försvara',
      desc: 'Underskrivna listor och manuella stämplingar räcker inte. När en tvist uppstår om timmar eller närvaro på arbetsplatsen övertygar dokumentet inte på egen hand.',
    },
    {
      title: 'Ändrade eller ofullständiga rapporter',
      desc: 'Ett dokument som kan ändras i efterhand utan att lämna spår går inte att kontrollera. Kunden vet det, och det skapar misstro även när arbetet har utförts felfritt.',
    },
  ],
  what_badge: 'Vad är GeoTapp Verifier',
  what_title: 'Oberoende kontroll av insatsrapporter.',
  what_desc:
    'Med GeoTapp Verifier kan vem som helst kontrollera en rapport som skapats av GeoTapp Flow och TimeTracker: verktyget räknar om fingeravtrycken för instämplingar, positioner och foton i paketet och kontrollerar GeoTapps signatur. Det visar om dokumentet är intakt och var det kommer ifrån; i sig bevisar det inte att händelsen har inträffat och är inte juridisk rådgivning.',
  how_badge: 'Så fungerar det',
  how_title: 'Tre steg. En kontrollerad rapport.',
  how_steps: [
    {
      num: '01',
      title: 'Teknikern registrerar arbetet i fält',
      desc: 'Med GeoTapp TimeTracker ger varje insats data: instämplingar med position och tid, bevisfoton och anteckningar. Uppgifterna når GeoTapp Flow så fort telefonen har täckning.',
    },
    {
      num: '02',
      title: 'Flow skapar den strukturerade rapporten',
      desc: 'GeoTapp Flow samlar uppdragets data och tar fram rapporten. Rapporten förseglas: från det ögonblicket går varje ändring att upptäcka.',
    },
    {
      num: '03',
      title: 'Verifier kontrollerar integriteten',
      desc: 'Vem som helst kan kontrollera rapporten med GeoTapp Verifier: den räknar om fingeravtrycken, kontrollerar signaturen och visar om rapporten är intakt och om den kommer från GeoTapp.',
    },
  ],
  features_badge: 'Vad kontrolleras',
  features_title: 'Varje del av rapporten går att kontrollera.',
  features: [
    {
      title: 'Händelsekedja',
      desc: 'Varje instämpling är kopplad till den föregående med ett SHA-256-fingeravtryck: om en händelse tas bort, läggs till eller ändras bryts kedjan.',
    },
    {
      title: 'Bevisfoton',
      desc: 'Varje fotos fingeravtryck finns i paketet: det räcker att ändra en enda pixel för att det inte ska stämma längre.',
    },
    {
      title: 'Dokumentets integritet',
      desc: 'Kontrollerar att dokumentet inte har ändrats efter att det skapades. Varje förändring upptäcks.',
    },
    {
      title: 'GeoTapps signatur',
      desc: 'Paketets rot är signerad med GeoTapps nyckel: kontrollen visar om det var vi som gav ut det.',
    },
    {
      title: 'Tid för förseglingen',
      desc: 'Tiden för förseglingen kommer från serverns klocka, inte från telefonens.',
    },
    {
      title: 'Kan kontrolleras utan åtkomst till plattformen',
      desc: 'Kunden kan kontrollera rapporten på egen hand, utan att behöva logga in på GeoTapp, även offline.',
    },
  ],
  who_badge: 'Vem det är för',
  who_title: 'För företag som behöver visa det arbete de har utfört.',
  who_items: [
    'Underhålls- och serviceföretag',
    'Städ- och fastighetsserviceföretag',
    'Bevaknings- och säkerhetstjänster',
    'Installatörer och utryckningsteam',
    'Alla företag som behöver visa närvaro och arbete i fält',
  ],
  ecosystem_badge: 'GeoTapp-ekosystemet',
  ecosystem_title: 'Verifier fungerar med Flow och TimeTracker.',
  ecosystem_desc:
    'GeoTapp Verifier är inte ett fristående verktyg. Det är den sista delen i ett sammanhängande arbetsflöde: uppgifterna samlas in i fält med TimeTracker, organiseras i Flow och kontrolleras sedan av Verifier.',
  cta_title: 'Börja ta fram rapporter som går att kontrollera.',
  cta_subtitle:
    'Med rapporter som kunden kan kontrollera själv har du något att visa när någon ifrågasätter, i stället för ord mot ord.',
  cta_primary: 'Testa GeoTapp gratis',
  cta_flow: 'Utforska GeoTapp Flow',
  cta_timetracker: 'Utforska GeoTapp TimeTracker',
  faq_badge: 'Vanliga frågor',
  faq_title: 'Allt du vill veta om Verifier.',
  faqs: [
    {
      q: 'Behöver kunden ett GeoTapp-konto för att kontrollera en rapport?',
      a: 'Nej. Kunden får rapporten och kontrollerar den utan att registrera sig och utan att logga in på plattformen: online eller med den kostnadsfria offlineverifieraren.',
    },
    {
      q: 'Vad händer om någon försöker ändra rapporten?',
      a: 'Verifieraren räknar om fingeravtrycken för händelser och foton: varje ändring efter att rapporten skapades gör att de inte längre stämmer med de förseglade, och kontrollen markerar dokumentet som ändrat.',
    },
    {
      q: 'Fungerar Verifier även för äldre rapporter?',
      a: 'Ja. Alla rapporter som skapats av GeoTapp Flow med data från TimeTracker kan kontrolleras när som helst, även månader eller år efter att de togs fram.',
    },
    {
      q: 'Kostar Verifier något?',
      a: 'Nej, det är gratis: för dig och för alla som får en rapport av dig.',
    },
  ],
  hero_cta_download: 'Ladda ner verifieraren',
  cta_download: 'Ladda ner Verifier gratis',
  download_badge: 'Gratis nedladdning',
  download_title: 'Ladda ner GeoTapp Verifier.',
  download_desc: 'Kontrollera integriteten hos GeoTapp-rapporter offline. Inget konto krävs: via terminalen eller som Node.js-bibliotek för dig som utvecklar, eller som en HTML-fil som öppnas med ett dubbelklick för alla andra.',
  download_btn_cli: 'Ladda ner för kommandoraden (Node.js)',
  download_btn_html: 'Ladda ner den lokala HTML-versionen',
  download_version: 'v0.3.0 · samma kontrollmotor, två format',
  download_requirements: 'Kräver Node.js ≥ 18',
  download_cli_title: 'Från terminalen',
  download_api_title: 'Som Node.js-bibliotek',

  online_verify_badge: 'Direkt kontroll',
  online_verify_title: 'Kontrollera en rapport online',
  online_verify_desc: 'Ladda upp rapportens ZIP-fil. Kontrollen sker på servern och filen sparas inte.',
  online_verify_upload_label: 'Dra rapportens ZIP-fil hit, eller klicka för att välja den',
  online_verify_upload_hint: 'Endast .zip-filer, högst 25 MB',
  online_verify_btn: 'Kontrollera nu',
  online_verify_privacy_note: 'Filen analyseras i minnet och sparas eller skickas inte vidare till tredje part.',
  online_verify_size_limit: 'Största storlek: 25 MB',
  online_verify_result_valid_sealed: 'Giltig rapport, förseglad och signerad',
  online_verify_result_valid_unsigned: 'Giltig rapport, innehållet intakt, förseglingen osignerad',
  online_verify_result_legacy: 'Äldre rapport, läsbar, utan stark försegling',
  online_verify_result_invalid: 'Ogiltig rapport, innehållet kan ha ändrats',
  online_verify_error_too_large: 'Filen är för stor. Största storlek: 25 MB.',
  online_verify_error_not_zip: 'Filen måste vara ett ZIP-arkiv.',
  online_verify_error_generic: 'Fel vid kontrollen. Filen kan vara skadad.',

  compare_badge: 'Två sätt att kontrollera',
  compare_title: 'Lokal eller online-kontroll?',
  compare_local_title: 'På din dator',
  compare_local_items: [
    'Filen stannar på din enhet',
    'Fungerar utan internetanslutning',
    'Ingen praktisk storleksgräns',
    'Perfekt för revisioner, jurister och konsulter',
    'HTML-versionen kräver ingen installation; kommandoradsversionen kräver Node.js',
  ],
  compare_online_title: 'Online (den här webbplatsen)',
  compare_online_items: [
    'Inget verktyg att installera',
    'Direkt resultat i webbläsaren',
    'Filen passerar vår server, som inte sparar den',
    'Gräns på 25 MB per fil',
    'Perfekt för snabba kontroller',
  ],
  compare_same_engine_note: 'Samma kontrollmotor i båda fallen. Skillnaden är var den körs.',
};

export default sv;
