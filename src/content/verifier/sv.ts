import type { VerifierCopy } from './types';

const sv: VerifierCopy = {
  hero_badge: 'GeoTapp Verifier — Verifiering av Arbetsrapporter',
  hero_title: 'Era arbetsrapporter\när verifierbara.',
  hero_subtitle:
    'GeoTapp Verifier kontrollerar att en interventionsrapport stämmer överens med de operativa data som registrerats i fält och inte har ändrats. Mer trovärdighet hos kunden, färre tvister.',
  hero_cta_primary: 'Begär en demo',
  hero_cta_secondary: 'Se hur det fungerar',
  terminal_integrity: 'Dokumentintegritet: VERIFIERAD',
  terminal_timestamps: 'Tidsstämpelmatchning: BEKRÄFTAD',
  terminal_gps: 'GPS-koordinater: KONSEKVENTA',
  terminal_not_modified: 'Dokument oförändrat: BEKRÄFTAT',
  terminal_operator: 'Operatör verifierad: OK',
  terminal_summary_title: 'Verifieringssammanfattning',
  terminal_technician_label: 'Tekniker:',
  terminal_date_label: 'Interventionsdatum:',
  terminal_site_label: 'Plats:',
  terminal_verified_line: 'RAPPORT AUTENTISK OCH INTAKT',
  ecosystem_timetracker_desc:
    'Samlar in operativa data i fält: GPS-tidsstämplar, foton, anteckningar och kundens underskrift.',
  ecosystem_timetracker_link: 'Utforska TimeTracker',
  ecosystem_flow_desc:
    'Organiserar uppdrag, team och genererar strukturerade rapporter med kryptografisk identifierare.',
  ecosystem_flow_link: 'Utforska Flow',
  ecosystem_verifier_desc:
    'Verifierar integriteten hos varje rapport. Jämför dokumentet med originaldata och certifierar äkthet.',
  problem_badge: 'Det verkliga problemet',
  problem_title: 'En overifierbar rapport är en bestridbar rapport.',
  problem_items: [
    {
      title: 'Kunder som ifrågasätter utfört arbete',
      desc: 'Utan oberoende bevis kan vilken rapport som helst bestridas. Kunden vet inte om det som är skrivet stämmer med vad som faktiskt gjordes.',
    },
    {
      title: 'Tidrapporter som är svåra att försvara',
      desc: 'Manuella underskrifter och papperstidrapporter räcker inte. När en tvist uppstår om timmar eller närvaro på plats, övertygar inte dokumentet ensamt.',
    },
    {
      title: 'Rapporter som kan redigeras i efterhand',
      desc: 'Ett dokument som kan ändras efter leverans erbjuder inga verkliga garantier. Kunder vet detta och det skapar misstro, även när arbetet utfördes perfekt.',
    },
  ],
  what_badge: 'Vad är GeoTapp Verifier',
  what_title: 'Oberoende verifiering av interventionsrapporter.',
  what_desc:
    'GeoTapp Verifier är systemet som gör det möjligt att verifiera äktheten och integriteten hos rapporter genererade av GeoTapp Flow och TimeTracker. Det jämför dokumentet med den ursprungliga operativa datan — GPS-tidsstämplar, platser, fotodokumentation — och certifierar att rapporten inte har ändrats.',
  how_badge: 'Hur det fungerar',
  how_title: 'Tre steg. En verifierad rapport.',
  how_steps: [
    {
      num: '01',
      title: 'Teknikern registrerar fältaktivitet',
      desc: 'Med GeoTapp TimeTracker genererar varje insats operativa data: GPS-tidsstämplar, foton, anteckningar och kundens underskrift. Data synkroniseras till GeoTapp Flow i realtid.',
    },
    {
      num: '02',
      title: 'Flow genererar den strukturerade rapporten',
      desc: 'GeoTapp Flow samlar all uppdragsdata och producerar en strukturerad arbetsrapport. Rapporten innehåller en kryptografisk identifierare som kopplar dokumentet till originaldata.',
    },
    {
      num: '03',
      title: 'Verifier kontrollerar integriteten',
      desc: 'Vem som helst kan verifiera rapporten med GeoTapp Verifier. Systemet jämför dokumentet med de registrerade operativa data och certifierar om rapporten är intakt och autentisk.',
    },
  ],
  features_badge: 'Vad verifieras',
  features_title: 'Varje aspekt av rapporten är kontrollerbar.',
  features: [
    {
      title: 'Timmar och varaktigheter',
      desc: 'Verifierar att rapporterade timmar stämmer överens med GPS-tidsstämplar registrerade av TimeTracker i fält.',
    },
    {
      title: 'Platser och arbetsplatser',
      desc: 'Kontrollerar att koordinater och adresser i rapporten stämmer överens med GPS-data insamlade under insatsen.',
    },
    {
      title: 'Dokumentintegritet',
      desc: 'Certifierar att dokumentet inte har ändrats efter generering. Varje ändring upptäcks.',
    },
    {
      title: 'Dataäkthet',
      desc: 'Verifierar att operativa data i rapporten kommer från GeoTapp-system och inte har angetts manuellt.',
    },
    {
      title: 'Operatörer och tilldelningar',
      desc: 'Kontrollerar att teknikerna i rapporten är samma som registrerade fältaktivitet.',
    },
    {
      title: 'Verifierbar utan plattformsåtkomst',
      desc: 'Kunden kan verifiera rapporten självständigt, utan att behöva tillgång till GeoTapp-plattformen.',
    },
  ],
  who_badge: 'Vem det är för',
  who_title: 'För företag som behöver försvara sitt arbete.',
  who_items: [
    'Underhålls- och teknisk assistansföretag',
    'Städ- och fastighetsförvaltningsföretag',
    'Säkerhets- och bevakingstjänster',
    'Installationsteam och fältteam',
    'Alla företag som behöver bevisa närvaro och fältaktivitet',
  ],
  ecosystem_badge: 'GeoTapp-ekosystemet',
  ecosystem_title: 'Verifier fungerar med Flow och TimeTracker.',
  ecosystem_desc:
    'GeoTapp Verifier är inte ett fristående verktyg. Det är det sista steget i en integrerad operativ cykel: data samlas in i fält med TimeTracker, organiseras i Flow och certifieras sedan av Verifier.',
  cta_title: 'Börja producera verifierbara rapporter.',
  cta_subtitle:
    'Upptäck hur GeoTapp Verifier kan hjälpa ert företag att minska tvister och öka trovärdigheten hos kunder.',
  cta_primary: 'Begär en demo',
  cta_flow: 'Utforska GeoTapp Flow',
  cta_timetracker: 'Utforska GeoTapp TimeTracker',
  faq_badge: 'Vanliga frågor',
  faq_title: 'Allt du vill veta om Verifier.',
  faqs: [
    {
      q: 'Behöver kunden ett GeoTapp-konto för att verifiera en rapport?',
      a: 'Nej. GeoTapp Verifier är utformat för oberoende verifiering. Kunden får rapporten och kan verifiera dess äkthet utan att registrera sig eller komma åt plattformen.',
    },
    {
      q: 'Vad händer om någon försöker ändra rapporten?',
      a: 'Varje ändring av dokumentet efter generering upptäcks av Verifier. Systemet jämför rapporten med de ursprungliga operativa data och markerar omedelbart eventuella avvikelser.',
    },
    {
      q: 'Fungerar Verifier för historiska rapporter?',
      a: 'Ja. Alla rapporter genererade av GeoTapp Flow med TimeTracker-data kan verifieras när som helst, även månader eller år efter att de producerades.',
    },
    {
      q: 'Måste Verifier köpas separat?',
      a: 'GeoTapp Verifier är integrerat i GeoTapp-ekosystemet. Kontakta oss för att ta reda på vilket abonnemang som passar ert företag bäst.',
    },
  ],
  hero_cta_download: 'Ladda ner gratis — v0.1.0',
  cta_download: 'Ladda ner Verifier gratis',
  download_badge: 'Gratis nedladdning',
  download_title: 'Ladda ner GeoTapp Verifier.',
  download_desc: 'Öppet CLI-verktyg för offlineverifiering av GeoTapp-rapportintegritet. Inget konto krävs. Fungerar från terminal eller som Node.js-bibliotek.',
  download_btn: 'Ladda ner report-verifier-0.1.0.zip',
  download_version: 'v0.1.0 — ~40 KB — Kräver Node.js ≥ 18',
  download_requirements: 'Kräver Node.js ≥ 18',
  download_cli_title: 'Från terminal',
  download_api_title: 'Som Node.js-bibliotek',
};

export default sv;
