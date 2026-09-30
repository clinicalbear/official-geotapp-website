import type { VerifierCopy } from './types';

const nl: VerifierCopy = {
  hero_badge: 'GeoTapp Verifier - Werkrapporten controleren',
  hero_title: 'Uw werkrapporten\nzijn te controleren.',
  hero_subtitle:
    'GeoTapp Verifier controleert dat een GeoTapp-rapport na de verzegeling niet is gewijzigd, en dat het echt door GeoTapp is uitgegeven. Het is gratis, voor u en voor uw klanten, en werkt ook offline.',
  hero_cta_primary: 'Probeer GeoTapp gratis',
  hero_cta_secondary: 'Zie hoe het werkt',
  terminal_integrity: 'Keten van gebeurtenissen: INTACT',
  terminal_timestamps: 'Tijd van de verzegeling: VAN DE SERVER',
  terminal_gps: 'Vingerafdrukken van de foto\'s: KOMEN OVEREEN',
  terminal_not_modified: 'Document niet gewijzigd: BEVESTIGD',
  terminal_operator: 'Handtekening van GeoTapp: GELDIG',
  terminal_summary_title: 'Samenvatting van de controle',
  terminal_technician_label: 'Monteur:',
  terminal_date_label: 'Datum van de klus:',
  terminal_site_label: 'Locatie:',
  terminal_verified_line: 'DOCUMENT INTACT EN ONDERTEKEND',
  ecosystem_timetracker_desc:
    'Verzamelt de gegevens in het veld: registraties met locatie en tijd, bewijsfoto\'s en notities.',
  ecosystem_timetracker_link: 'Ontdek TimeTracker',
  ecosystem_flow_desc:
    'Organiseert opdrachten en teams en maakt de gestructureerde, verzegelde rapporten, klaar om te controleren.',
  ecosystem_flow_link: 'Ontdek Flow',
  ecosystem_verifier_desc:
    'Controleert de integriteit van elk rapport: berekent de vingerafdrukken opnieuw en controleert de handtekening van GeoTapp.',
  problem_badge: 'Het echte probleem',
  problem_title: 'Een rapport dat niet te controleren is, is een rapport dat te betwisten is.',
  problem_items: [
    {
      title: 'Klanten die twijfelen aan het uitgevoerde werk',
      desc: 'Zonder onafhankelijk bewijs kan elk rapport in twijfel worden getrokken. De klant weet niet of wat er staat overeenkomt met wat er echt is gedaan.',
    },
    {
      title: 'Tijden en aanwezigheid die moeilijk te verdedigen zijn',
      desc: 'Presentielijsten en handmatige registraties zijn niet genoeg. Wanneer er een geschil ontstaat over de uren of de aanwezigheid op de bouwplaats, overtuigt het document alleen niet.',
    },
    {
      title: 'Gewijzigde of onvolledige rapporten',
      desc: 'Een document dat achteraf zonder sporen kan worden gewijzigd, is niet te controleren. De klant weet dat, en dat voedt wantrouwen, ook als het werk perfect is uitgevoerd.',
    },
  ],
  what_badge: 'Wat is GeoTapp Verifier',
  what_title: 'Onafhankelijke controle van klusrapporten.',
  what_desc:
    'Met GeoTapp Verifier kan iedereen een rapport controleren dat is gegenereerd door GeoTapp Flow en TimeTracker: het berekent de vingerafdrukken van registraties, locaties en foto\'s in het pakket opnieuw, en controleert de handtekening van GeoTapp. Het zegt of het document intact is en waar het vandaan komt; op zichzelf bewijst het niet dat het feit heeft plaatsgevonden, en het is geen juridisch advies.',
  how_badge: 'Hoe het werkt',
  how_title: 'Drie stappen. Eén gecontroleerd rapport.',
  how_steps: [
    {
      num: '01',
      title: 'De monteur registreert de activiteit in het veld',
      desc: 'Met GeoTapp TimeTracker levert elke klus gegevens op: registraties met locatie en tijd, bewijsfoto\'s en notities. De gegevens komen in GeoTapp Flow aan zodra de telefoon netwerk heeft.',
    },
    {
      num: '02',
      title: 'Flow maakt het gestructureerde rapport',
      desc: 'GeoTapp Flow verzamelt de gegevens van de opdracht en maakt het rapport. Het rapport wordt verzegeld: vanaf dat moment is elke wijziging zichtbaar.',
    },
    {
      num: '03',
      title: 'Verifier controleert de integriteit',
      desc: 'Iedereen kan het rapport controleren met GeoTapp Verifier: het berekent de vingerafdrukken opnieuw, controleert de handtekening en zegt of het rapport intact is en van GeoTapp komt.',
    },
  ],
  features_badge: 'Wat het controleert',
  features_title: 'Elk onderdeel van het rapport is te controleren.',
  features: [
    {
      title: 'Keten van gebeurtenissen',
      desc: 'Elke registratie is met de vorige verbonden door een SHA-256-vingerafdruk: wordt er een gebeurtenis weggehaald, toegevoegd of veranderd, dan breekt de keten.',
    },
    {
      title: 'Bewijsfoto\'s',
      desc: 'De vingerafdruk van elke foto zit in het pakket: één veranderde pixel is genoeg om haar niet meer te laten overeenkomen.',
    },
    {
      title: 'Integriteit van het document',
      desc: 'Controleert dat het document na het aanmaken niet is gewijzigd. Elke aantasting wordt opgemerkt.',
    },
    {
      title: 'Handtekening van GeoTapp',
      desc: 'De wortel van het pakket is ondertekend met de sleutel van GeoTapp: de controle zegt of wij het hebben uitgegeven.',
    },
    {
      title: 'Tijd van de verzegeling',
      desc: 'De tijd van de verzegeling komt van de klok van de server, niet van die van de telefoon.',
    },
    {
      title: 'Te controleren zonder toegang tot het platform',
      desc: 'De klant kan het rapport zelfstandig controleren, zonder toegang tot het GeoTapp-platform nodig te hebben, ook offline.',
    },
  ],
  who_badge: 'Voor wie',
  who_title: 'Voor bedrijven die het uitgevoerde werk moeten aantonen.',
  who_items: [
    'Onderhouds- en servicebedrijven',
    'Schoonmaakbedrijven en facility management',
    'Bewakings- en beveiligingsdiensten',
    'Installateurs en interventieteams',
    'Elk bedrijf dat aanwezigheid en activiteit in het veld moet aantonen',
  ],
  ecosystem_badge: 'GeoTapp-ecosysteem',
  ecosystem_title: 'Verifier werkt met Flow en TimeTracker.',
  ecosystem_desc:
    'GeoTapp Verifier is geen losstaand hulpmiddel. Het is het laatste deel van een geïntegreerde operationele cyclus: de gegevens worden in het veld verzameld met TimeTracker, georganiseerd in Flow, en daarna gecontroleerd door Verifier.',
  cta_title: 'Begin met het maken van controleerbare rapporten.',
  cta_subtitle:
    'Met rapporten die de klant zelf kan controleren, hebt u bij een geschil een bewijs om te tonen in plaats van woord tegen woord.',
  cta_primary: 'Probeer GeoTapp gratis',
  cta_flow: 'Ontdek GeoTapp Flow',
  cta_timetracker: 'Ontdek GeoTapp TimeTracker',
  faq_badge: 'Veelgestelde vragen',
  faq_title: 'Alles wat u over Verifier wilt weten.',
  faqs: [
    {
      q: 'Moet de klant een GeoTapp-account hebben om een rapport te controleren?',
      a: 'Nee. De klant ontvangt het rapport en controleert het zonder zich te registreren en zonder toegang tot het platform: online, of met de gratis offline verifier.',
    },
    {
      q: 'Wat gebeurt er als iemand het rapport probeert te wijzigen?',
      a: 'De verifier berekent de vingerafdrukken van gebeurtenissen en foto\'s opnieuw: elke wijziging na het aanmaken zorgt ervoor dat ze afwijken van de verzegelde, en de controle meldt het document als gewijzigd.',
    },
    {
      q: 'Werkt Verifier ook voor oudere rapporten?',
      a: 'Ja. Alle rapporten die door GeoTapp Flow met TimeTracker-gegevens zijn gemaakt, kunnen op elk moment worden gecontroleerd, ook maanden of jaren nadat ze zijn gemaakt.',
    },
    {
      q: 'Is Verifier betaald?',
      a: 'Nee, het is gratis: voor u en voor iedereen die een rapport van u ontvangt.',
    },
  ],
  hero_cta_download: 'Download de verifier',
  cta_download: 'Download Verifier gratis',
  download_badge: 'Gratis download',
  download_title: 'Download GeoTapp Verifier.',
  download_desc: 'Controleer offline de integriteit van GeoTapp-rapporten. Geen account nodig: via de terminal of als Node.js-bibliotheek voor wie ontwikkelt, of als HTML-bestand dat met een dubbelklik opent voor iedereen anders.',
  download_btn_cli: 'Download voor de opdrachtregel (Node.js)',
  download_btn_html: 'Download de lokale HTML-versie',
  download_version: 'v0.3.0 · dezelfde controle-engine, twee formaten',
  download_requirements: 'Vereist Node.js ≥ 18',
  download_cli_title: 'Via de terminal',
  download_api_title: 'Als Node.js-bibliotheek',

  online_verify_badge: 'Directe controle',
  online_verify_title: 'Controleer een rapport online',
  online_verify_desc: 'Upload het ZIP-bestand van het rapport. De controle vindt plaats op de server en het bestand wordt niet opgeslagen.',
  online_verify_upload_label: 'Sleep het ZIP-bestand van het rapport hierheen, of klik om het te selecteren',
  online_verify_upload_hint: 'Alleen .zip-bestanden, maximale grootte 25 MB',
  online_verify_btn: 'Nu controleren',
  online_verify_privacy_note: 'Het bestand wordt in het geheugen geanalyseerd en niet opgeslagen of aan derden doorgegeven.',
  online_verify_size_limit: 'Maximale grootte: 25 MB',
  online_verify_result_valid_sealed: 'Rapport geldig, verzegeld en ondertekend',
  online_verify_result_valid_unsigned: 'Rapport geldig, inhoud intact, verzegeling niet ondertekend',
  online_verify_result_legacy: 'Ouder rapport, leesbaar, zonder sterke verzegeling',
  online_verify_result_invalid: 'Rapport ongeldig, inhoud mogelijk gewijzigd',
  online_verify_error_too_large: 'Bestand te groot. Maximale grootte: 25 MB.',
  online_verify_error_not_zip: 'Het bestand moet een ZIP-archief zijn.',
  online_verify_error_generic: 'Fout tijdens de controle. Het bestand is mogelijk beschadigd.',

  compare_badge: 'Twee manieren om te controleren',
  compare_title: 'Lokaal of online controleren?',
  compare_local_title: 'Op uw computer',
  compare_local_items: [
    'Het bestand blijft op uw apparaat',
    'Werkt zonder internetverbinding',
    'Geen praktische limiet op de grootte',
    'Ideaal voor audits, juristen, adviseurs',
    'De HTML-versie vraagt geen installatie; de versie voor de opdrachtregel vraagt Node.js',
  ],
  compare_online_title: 'Online (deze site)',
  compare_online_items: [
    'Geen tool om te installeren',
    'Direct resultaat in de browser',
    'Het bestand gaat via onze server, die het niet opslaat',
    'Limiet van 25 MB per bestand',
    'Ideaal voor snelle controles',
  ],
  compare_same_engine_note: 'In beide gevallen dezelfde controle-engine. Het verschil is waar ze draait.',
};

export default nl;
