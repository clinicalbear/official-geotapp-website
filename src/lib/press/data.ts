import type { AppLocale } from '@/lib/i18n/config';

export type PressItem = {
  date: string;       // ISO 'YYYY-MM-DD'
  outlet: string;     // testata o ente
  title: string;
  url: string;
  locale: AppLocale;  // lingua del pezzo
  country?: string;   // ISO 3166-1 alpha-2 della nazione della TESTATA (it, fr, gb, us...):
                      // mostra la bandiera in pagina. Serve l'SVG in /public/flags/<country>.svg
  logo?: string;      // path in /public del logo della testata (opzionale)
  follow?: boolean;   // reciprocità rel: true = diamo dofollow SOLO a chi ci ha dato un link dofollow;
                      // assente/false = nofollow (chi ci cita in nofollow o senza link). Fonti autorevoli solo.
};

// rel del nostro link uscente verso la testata.
// DECISIONE 13/07/2026: niente più reciprocità. TUTTI i link esterni escono nofollow,
// senza eccezioni, anche verso chi ci concede un dofollow. Il flag `follow` resta nel tipo
// solo come annotazione storica di chi ci linka dofollow, ma NON cambia più il rel.
export function pressRel(_item: PressItem): string {
  return 'noopener noreferrer nofollow';
}

// VUOTI al lancio. Aggiungere una voce = la sezione compare da sola in pagina.
export const PRESS_RELEASES: PressItem[] = [];
export const PRESS_COVERAGE: PressItem[] = [
  {
    date: '2026-09-01',
    outlet: 'ClockOn',
    title: '11 Payroll Checks Before Finalising a Pay Run',
    url: 'https://www.clockon.com.au/blog/11-payroll-checks-before-finalising-a-pay-run',
    locale: 'en',
    country: 'au',
    logo: '/press/clockon.png',
    // Citazione (non a firma) di Michele Angelo Petraroli, CEO & Founder GeoTapp, tra 11
    // esperti payroll/finance/HR interpellati da ClockOn (Clockon Pty Ltd, azienda payroll/time
    // & attendance australiana indipendente, nessun rapporto con Featured/Connectively).
    // Foto usata nel riquadro esperto proviene dal profilo Connectively di Michele: la citazione
    // e' arrivata tramite una media query Connectively, non un contatto diretto con ClockOn.
    // NIENTE link a geotapp.com: verificato su HTML grezzo (0 occorrenze di "geotapp.com" nel
    // documento). Nessun giornalista/autore individuale in byline (autore pagina: "ClockOn").
  },
  {
    date: '2026-08-27',
    outlet: 'PME Magazine',
    title: 'Geolocalização no trabalho: onde acaba a prova e começa o controlo',
    url: 'https://pmemagazine.sapo.pt/geolocalizacao-no-trabalho-onde-acaba-a-prova-e-comeca-o-controlo/',
    locale: 'pt',
    country: 'pt',
    logo: '/press/pmemagazine.png',
    // Opinião a firma di Michele Angelo Petraroli, CEO GeoTapp (nao una citazione dentro
    // un pezzo altrui). NIENTE link a geotapp.com: verificato sull'HTML grezzo (0 occorrenze
    // di "geotapp.com" nel documento), coerente con quanto Daniela Felicio (Redacao) aveva
    // gia' anticipato il 23/07: il link nel pezzo e' riservato ai contenuti sponsorizzati.
    // Menzione/autorita', NON backlink. Editore Massive Media, Lda. (PT), nessun rapporto
    // con Featured/Connectively.
  },
  {
    date: '2026-08-20',
    outlet: 'Personnel Today',
    title: 'Can GPS at work ever protect workers as well as bosses?',
    url: 'https://www.personneltoday.com/hr/gps-at-work/',
    locale: 'en',
    country: 'gb',
    logo: '/press/personneltoday.png',
    follow: true, // Dofollow verificato sull'HTML grezzo: <a href="https://geotapp.com/en-gb/">GeoTapp</a>
                  // nella bio autore, senza rel. Nella stessa pagina xperthr.co.uk e brightmine.com
                  // sono rel="sponsored", quindi il dofollow a noi e' una scelta della redazione.
                  // NB: dal 13/07/2026 il flag NON concede piu' dofollow in uscita.
                  // ✅ Testata INDIPENDENTE (ProMedia Group UK Ltd), nessun rapporto con
                  // Featured/Connectively. Articolo COMMISSIONATO a firma di Michele, non un
                  // roundup. Esclusiva di pubblicazione a loro: il testo non si ripubblica sul
                  // nostro blog in nessuna lingua, e la condivisione social linka sempre loro.
  },
  {
    date: '2026-08-11',
    outlet: 'COO Insider',
    title: 'How operations leaders win adoption for process changes without disrupting the day',
    url: 'https://cooinsider.com/qa/how-operations-leaders-win-adoption-for-process-changes-without-disrupting-the-day#answer1167',
    locale: 'en',
    country: 'us',
    logo: '/press/cooinsider.png',
    follow: true, // Ci linkano in dofollow: rel="" verificato nel DOM sull'ancora "GeoTapp" ->
                  // https://geotapp.com/. Nella stessa pagina i profili LinkedIn degli altri
                  // esperti sono rel="nofollow", quindi e' una scelta, non distrazione.
                  // NB: dal 13/07/2026 il flag NON concede piu' dofollow in uscita.
                  // ⚠️ Testata di PROPRIETA' della piattaforma: la pagina "about" di COO Insider
                  // dice "Driving the content excellence at COO Insider is Featured" (Featured =
                  // vecchio nome di Connectively) e gli articoli sono firmati Brett Farmiloe,
                  // CEO di Connectively. Stessa cosa per Small Business Leader. Vale come
                  // menzione, NON come stampa indipendente: l'unica indipendente qui e' AZ Big Media.
  },
  {
    date: '2026-07-24',
    outlet: 'GPO Magazine',
    title: "GPS et salariés : ce n'est pas de la surveillance si c'est une preuve du travail effectué",
    url: 'https://www.gpomag.fr/gps-et-salaries-ce-nest-pas-de-la-surveillance-si-cest-une-preuve-du-travail-effectue/',
    locale: 'fr',
    country: 'fr',
    logo: '/press/gpomag.png',
    // Tribuna firmata, non promozionale: ci citano come "Michele Angelo Petraroli,
    // fondateur de GeoTapp" ma SENZA link (menzione non linkata, per accordo editoriale).
  },
  {
    date: '2026-07-13',
    outlet: 'Small Business Leader',
    title: 'Stop scope creep in service work: boundaries that protect margin and relationships',
    url: 'https://smallbizleader.com/qa/stop-scope-creep-in-service-work-boundaries-that-protect-margin-and-relationships/',
    locale: 'en',
    country: 'us',
    logo: '/press/smallbizleader.png',
    // NIENTE follow: ci linkano in dofollow (rel="" verificato nel DOM), ma il dominio ha
    // Spam Score Moz 37% (fascia media) -> non ricambiamo. Reversibile in ogni momento.
  },
  {
    date: '2026-07-13',
    outlet: 'AZ Big Media',
    title: 'Workflow automation: How leaders pick first-win pilots without hurting quality',
    url: 'https://azbigmedia.com/business/workflow-automation-how-leaders-pick-first-win-pilots-without-hurting-quality/#answer7',
    locale: 'en',
    country: 'us',
    logo: '/press/azbigmedia.png',
    follow: true, // AZ Big Media ci linka in dofollow (rel="noopener", verificato).
                  // NB: dal 13/07/2026 questo flag NON concede piu' dofollow (pressRel torna
                  // sempre nofollow): resta solo come annotazione di chi ci linka dofollow.
  },
  {
    date: '2026-07-08',
    outlet: 'Vigilanza Privata Online',
    title: 'GPS e vigilanza privata, prova del servizio o controllo del lavoratore?',
    url: 'https://www.vigilanzaprivataonline.com/vigilanza-tecnologica/gps-e-vigilanza-privata-prova-del-servizio-o-controllo-del-lavoratore-3560.html',
    locale: 'it',
    country: 'it',
    logo: '/press/vigilanzaprivataonline-v2.png',
  },
  {
    date: '2026-06-30',
    outlet: 'Risorse Umane HR',
    title: 'Presenze, GPS e art. 4: dove finisce la prova e dove comincia la sorveglianza',
    url: 'https://www.risorseumane-hr.it/presenze-gps-articolo-4/',
    locale: 'it',
    country: 'it',
    logo: '/press/logoHR.png',
  },
];

export function hasPress(items: PressItem[]): boolean {
  return items.length > 0;
}
