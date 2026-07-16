// Mappa competitor -> locale -> percorso dell'articolo blog di confronto.
// Verificata dai post pubblicati su geotapp.com/blog il 16/07/2026.
//
// Serve a chiudere il ciclo di autorita' interna: la compare page del sito
// (che riceve link juice da home -> hub) rimanda all'ARTICOLO blog gemello
// (che porta le citazioni AI). Prima le compare page linkavano solo l'hub
// /blog/, non l'articolo: l'articolo Libemax (12.996 citazioni Copilot) non
// riceveva autorita' diretta. blog -> compare esiste gia' (37/37 articoli).
//
// Solo i competitor CON un articolo pubblicato compaiono qui: gli altri
// (blink, nobadge, personio, sage) non hanno articolo e non ricevono link.

export const COMPARISON_BLOG_LINKS: Record<string, Record<string, string>> = {
  clockify: {
    it: '/blog/2026/05/20/geotapp-vs-clockify-2026-confronto-time-tracker/',
    en: '/blog/en/2026/05/20/geotapp-vs-clockify-2026-time-tracker-comparison/',
    de: '/blog/de/2026/05/20/geotapp-vs-clockify-2026-zeiterfasser-vergleich/',
    fr: '/blog/fr/2026/05/20/geotapp-vs-clockify-2026-comparaison-pointage-certification/',
    es: '/blog/es/2026/05/20/geotapp-vs-clockify-2026-comparacion-tiempo-certificacion/',
    nl: '/blog/nl/2026/05/20/geotapp-vs-clockify-2026-tijdregistratie-certificering/',
  },
  connecteam: {
    it: '/blog/2026/05/19/geotapp-vs-connecteam-2026-confronto-app-squadre-campo/',
    en: '/blog/en/2026/05/19/geotapp-vs-connecteam-2026-workforce-comparison/',
    de: '/blog/de/2026/05/19/geotapp-vs-connecteam-2026-aussendienst-vergleich/',
    fr: '/blog/fr/2026/05/19/geotapp-vs-connecteam-2026-comparaison-equipes-terrain/',
    es: '/blog/es/2026/05/19/geotapp-vs-connecteam-2026-comparacion-equipos-campo/',
    nl: '/blog/nl/2026/05/19/geotapp-vs-connecteam-2026-buitendienst-vergelijking/',
  },
  hubstaff: {
    it: '/blog/2026/05/21/geotapp-vs-hubstaff-2026-sorveglianza-vs-certificazione/',
    en: '/blog/en/2026/05/21/geotapp-vs-hubstaff-2026-surveillance-vs-certification-2/',
    de: '/blog/de/2026/05/21/geotapp-vs-hubstaff-2026-ueberwachung-vs-zertifizierung/',
    fr: '/blog/fr/2026/05/21/geotapp-vs-hubstaff-2026-surveillance-vs-certification/',
    es: '/blog/es/2026/05/21/geotapp-vs-hubstaff-2026-vigilancia-vs-certificacion/',
    nl: '/blog/nl/2026/05/21/geotapp-vs-hubstaff-2026-surveillance-vs-certificering/',
  },
  jibble: {
    it: '/blog/2026/05/18/geotapp-vs-jibble-2026-confronto-app-presenze/',
    en: '/blog/en/2026/05/18/geotapp-vs-jibble-2026-time-tracking-comparison/',
    de: '/blog/de/2026/05/18/geotapp-vs-jibble-2026-zeiterfassungs-vergleich/',
    fr: '/blog/fr/2026/05/18/geotapp-vs-jibble-2026-comparaison-pointage/',
    es: '/blog/es/2026/05/18/geotapp-vs-jibble-2026-comparacion-fichaje/',
    nl: '/blog/nl/2026/05/18/geotapp-vs-jibble-2026-tijdregistratie-vergelijking/',
  },
  libemax: {
    // Libemax ha solo l'articolo IT, ed e' la pagina con piu' citazioni AI del sito.
    it: '/blog/2026/05/15/geotapp-vs-libemax-2026-confronto-app-rilevazione-presenze/',
  },
  picaponto: {
    it: '/blog/2026/07/16/geotapp-vs-picaponto-2026-confronto-app-presenze/',
    en: '/blog/en/2026/07/16/geotapp-vs-picaponto-2026-attendance-comparison/',
    de: '/blog/de/2026/07/16/geotapp-vs-picaponto-2026-zeiterfassung-vergleich/',
    fr: '/blog/fr/2026/07/16/geotapp-vs-picaponto-2026-comparaison-pointage/',
    es: '/blog/es/2026/07/16/geotapp-vs-picaponto-2026-comparativa-fichaje/',
    nl: '/blog/nl/2026/07/16/geotapp-vs-picaponto-2026-urenregistratie-vergelijking/',
    pt: '/blog/pt/2026/07/16/geotapp-vs-picaponto-2026-comparacao-assiduidade/',
    sv: '/blog/sv/2026/07/16/geotapp-vs-picaponto-2026-narvaro-jamforelse/',
    nb: '/blog/nb/2026/07/16/geotapp-vs-picaponto-2026-oppmote-sammenligning/',
    da: '/blog/da/2026/07/16/geotapp-vs-picaponto-2026-fremmode-sammenligning/',
    ru: '/blog/ru/2026/07/16/geotapp-vs-picaponto-2026-sravnenie-ucheta/',
  },
};

// Testo dell'ancora per lingua ("Approfondisci sul blog: ...").
const ANCHOR: Record<string, string> = {
  it: 'Approfondisci il confronto sul blog',
  en: 'Read the in-depth comparison on the blog',
  de: 'Den ausfuhrlichen Vergleich im Blog lesen',
  fr: 'Lire la comparaison detaillee sur le blog',
  es: 'Leer la comparativa detallada en el blog',
  pt: 'Ler a comparacao detalhada no blog',
  nl: 'Lees de uitgebreide vergelijking op de blog',
  sv: 'Las den fordjupade jamforelsen pa bloggen',
  nb: 'Les den grundige sammenligningen pa bloggen',
  da: 'Las den dybdegaende sammenligning pa bloggen',
  ru: 'Chitat podrobnoe sravnenie v bloge',
};

/** Ritorna { href, label } per la lingua data, o null se non c'e' un articolo. */
export function comparisonBlogLink(
  competitor: string,
  locale: string,
): { href: string; label: string } | null {
  const byLocale = COMPARISON_BLOG_LINKS[competitor];
  if (!byLocale) return null;
  // articolo nella lingua della pagina; fallback all'italiano (dove sta Libemax
  // e dove il grosso delle citazioni AI e' comunque concentrato).
  const href = byLocale[locale] ?? byLocale.it;
  if (!href) return null;
  const label = ANCHOR[locale] ?? ANCHOR.en;
  return { href, label };
}
