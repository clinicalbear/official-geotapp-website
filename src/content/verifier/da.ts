import type { VerifierCopy } from './types';

const da: VerifierCopy = {
  hero_badge: 'GeoTapp Verifier — Verificering af Arbejdsrapporter',
  hero_title: 'Jeres arbejdsrapporter\ner verificerbare.',
  hero_subtitle:
    'GeoTapp Verifier kontrollerer, at en interventionsrapport stemmer overens med de operationelle data, der er registreret i marken, og ikke er blevet ændret. Mere troværdighed over for kunden, færre tvister.',
  hero_cta_primary: 'Anmod om en demo',
  hero_cta_secondary: 'Se hvordan det fungerer',
  terminal_integrity: 'Dokumentintegritet: VERIFICERET',
  terminal_timestamps: 'Tidsstempel-match: BEKRÆFTET',
  terminal_gps: 'GPS-koordinater: KONSISTENTE',
  terminal_not_modified: 'Dokument ikke ændret: BEKRÆFTET',
  terminal_operator: 'Operatør verificeret: OK',
  terminal_summary_title: 'Verificeringsresumé',
  terminal_technician_label: 'Tekniker:',
  terminal_date_label: 'Interventionsdato:',
  terminal_site_label: 'Sted:',
  terminal_verified_line: 'RAPPORT AUTENTISK OG INTAKT',
  ecosystem_timetracker_desc:
    'Indsamler operationelle data i marken: GPS-tidsstempler, fotos, noter og kundens underskrift.',
  ecosystem_timetracker_link: 'Udforsk TimeTracker',
  ecosystem_flow_desc:
    'Organiserer opgaver, hold og genererer strukturerede rapporter med kryptografisk identifikator.',
  ecosystem_flow_link: 'Udforsk Flow',
  ecosystem_verifier_desc:
    'Verificerer integriteten af enhver rapport. Sammenligner dokumentet med de originale data og certificerer ægtheden.',
  problem_badge: 'Det reelle problem',
  problem_title: 'En ikke-verificerbar rapport er en bestridelseværdig rapport.',
  problem_items: [
    {
      title: 'Kunder der sætter spørgsmålstegn ved udført arbejde',
      desc: 'Uden uafhængige beviser kan enhver rapport bestrids. Kunden ved ikke, om det, der er skrevet, svarer til, hvad der faktisk blev gjort.',
    },
    {
      title: 'Timesedler der er svære at forsvare',
      desc: 'Manuelle underskrifter og papirtimesedler er ikke nok. Når en tvist opstår om timer eller tilstedeværelse på stedet, overbeviser dokumentet alene ikke.',
    },
    {
      title: 'Rapporter der kan redigeres efterfølgende',
      desc: 'Et dokument, der kan ændres efter aflevering, tilbyder ingen reelle garantier. Kunder ved dette, og det skaber mistro, selv når arbejdet blev udført perfekt.',
    },
  ],
  what_badge: 'Hvad er GeoTapp Verifier',
  what_title: 'Uafhængig verificering af interventionsrapporter.',
  what_desc:
    'GeoTapp Verifier er det system, der gør det muligt at verificere ægtheden og integriteten af rapporter genereret af GeoTapp Flow og TimeTracker. Det sammenligner dokumentet med de originale operationelle data — GPS-tidsstempler, placeringer, fotodokumentation — og certificerer, at rapporten ikke er blevet ændret.',
  how_badge: 'Sådan fungerer det',
  how_title: 'Tre trin. Én verificeret rapport.',
  how_steps: [
    {
      num: '01',
      title: 'Teknikeren registrerer feltaktivitet',
      desc: 'Med GeoTapp TimeTracker genererer hver intervention operationelle data: GPS-tidsstempler, fotos, noter og kundens underskrift. Data synkroniseres med GeoTapp Flow i realtid.',
    },
    {
      num: '02',
      title: 'Flow genererer den strukturerede rapport',
      desc: 'GeoTapp Flow indsamler alle opgavedata og producerer en struktureret arbejdsrapport. Rapporten indeholder en kryptografisk identifikator, der knytter dokumentet til de originale data.',
    },
    {
      num: '03',
      title: 'Verifier kontrollerer integriteten',
      desc: 'Alle kan verificere rapporten med GeoTapp Verifier. Systemet sammenligner dokumentet med de registrerede operationelle data og certificerer, om rapporten er intakt og autentisk.',
    },
  ],
  features_badge: 'Hvad verificeres',
  features_title: 'Ethvert aspekt af rapporten er kontrollerbart.',
  features: [
    {
      title: 'Timer og varighed',
      desc: 'Verificerer, at de rapporterede timer svarer til GPS-tidsstempler registreret af TimeTracker i marken.',
    },
    {
      title: 'Placeringer og steder',
      desc: 'Kontrollerer, at koordinater og adresser i rapporten svarer til GPS-data indsamlet under interventionen.',
    },
    {
      title: 'Dokumentintegritet',
      desc: 'Certificerer, at dokumentet ikke er blevet ændret efter generering. Enhver ændring opdages.',
    },
    {
      title: 'Dataautenticitet',
      desc: 'Verificerer, at de operationelle data i rapporten kommer fra GeoTapp-systemer og ikke er indtastet manuelt.',
    },
    {
      title: 'Operatører og tildelinger',
      desc: 'Kontrollerer, at teknikerne i rapporten er de samme som dem, der registrerede feltaktivitet.',
    },
    {
      title: 'Verificerbar uden platformadgang',
      desc: 'Kunden kan verificere rapporten uafhængigt, uden at have adgang til GeoTapp-platformen.',
    },
  ],
  who_badge: 'Hvem er det til',
  who_title: 'Til virksomheder der skal forsvare deres arbejde.',
  who_items: [
    'Vedligeholdelses- og teknisk assistancevirksomheder',
    'Rengørings- og facility management-virksomheder',
    'Sikkerheds- og overvågningstjenester',
    'Installationshold og feltteams',
    'Enhver virksomhed der skal bevise tilstedeværelse og feltaktivitet',
  ],
  ecosystem_badge: 'GeoTapp-økosystemet',
  ecosystem_title: 'Verifier arbejder med Flow og TimeTracker.',
  ecosystem_desc:
    'GeoTapp Verifier er ikke et selvstændigt værktøj. Det er det sidste trin i en integreret operationel cyklus: data indsamles i marken med TimeTracker, organiseres i Flow og certificeres derefter af Verifier.',
  cta_title: 'Begynd at producere verificerbare rapporter.',
  cta_subtitle:
    'Opdag, hvordan GeoTapp Verifier kan hjælpe din virksomhed med at reducere tvister og øge troværdigheden over for kunder.',
  cta_primary: 'Anmod om en demo',
  cta_flow: 'Udforsk GeoTapp Flow',
  cta_timetracker: 'Udforsk GeoTapp TimeTracker',
  faq_badge: 'Ofte stillede spørgsmål',
  faq_title: 'Alt hvad du vil vide om Verifier.',
  faqs: [
    {
      q: 'Skal kunden have en GeoTapp-konto for at verificere en rapport?',
      a: 'Nej. GeoTapp Verifier er designet til uafhængig verificering. Kunden modtager rapporten og kan verificere dens ægthed uden at registrere sig eller tilgå platformen.',
    },
    {
      q: 'Hvad sker der, hvis nogen forsøger at ændre rapporten?',
      a: 'Enhver ændring af dokumentet efter generering opdages af Verifier. Systemet sammenligner rapporten med de originale operationelle data og markerer straks enhver uoverensstemmelse.',
    },
    {
      q: 'Fungerer Verifier til historiske rapporter?',
      a: 'Ja. Alle rapporter genereret af GeoTapp Flow med TimeTracker-data kan verificeres til enhver tid, selv måneder eller år efter de blev produceret.',
    },
    {
      q: 'Skal Verifier købes separat?',
      a: 'GeoTapp Verifier er integreret i GeoTapp-økosystemet. Kontakt os for at finde ud af, hvilken plan der passer bedst til din virksomheds behov.',
    },
  ],
  hero_cta_download: 'Download gratis — v0.1.0',
  cta_download: 'Download Verifier gratis',
  download_badge: 'Gratis download',
  download_title: 'Download GeoTapp Verifier.',
  download_desc: 'Åbent CLI-værktøj til offline verifikation af GeoTapp-rapportintegritet. Ingen konto nødvendig. Virker fra terminal eller som Node.js-bibliotek.',
  download_btn: 'Download report-verifier-0.1.0.zip',
  download_version: 'v0.1.0 — ~40 KB — Kræver Node.js ≥ 18',
  download_requirements: 'Kræver Node.js ≥ 18',
  download_cli_title: 'Fra terminal',
  download_api_title: 'Som Node.js-bibliotek',
};

export default da;
