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
    pt: '/blog/pt/2026/07/24/geotapp-vs-clockify-2026-comparacao-assiduidade/',
    da: '/blog/da/2026/07/24/geotapp-vs-clockify-2026-fremmode-sammenligning/',
    sv: '/blog/sv/2026/07/24/geotapp-vs-clockify-2026-narvaro-jamforelse/',
  },
  connecteam: {
    it: '/blog/2026/05/19/geotapp-vs-connecteam-2026-confronto-app-squadre-campo/',
    en: '/blog/en/2026/05/19/geotapp-vs-connecteam-2026-workforce-comparison/',
    de: '/blog/de/2026/05/19/geotapp-vs-connecteam-2026-aussendienst-vergleich/',
    fr: '/blog/fr/2026/05/19/geotapp-vs-connecteam-2026-comparaison-equipes-terrain/',
    es: '/blog/es/2026/05/19/geotapp-vs-connecteam-2026-comparacion-equipos-campo/',
    nl: '/blog/nl/2026/05/19/geotapp-vs-connecteam-2026-buitendienst-vergelijking/',
    pt: '/blog/pt/2026/07/24/geotapp-vs-connecteam-2026-comparacao-assiduidade/',
    da: '/blog/da/2026/07/24/geotapp-vs-connecteam-2026-fremmode-sammenligning/',
    sv: '/blog/sv/2026/07/24/geotapp-vs-connecteam-2026-narvaro-jamforelse/',
  },
  hubstaff: {
    it: '/blog/2026/05/21/geotapp-vs-hubstaff-2026-sorveglianza-vs-certificazione/',
    en: '/blog/en/2026/05/21/geotapp-vs-hubstaff-2026-surveillance-vs-certification-2/',
    de: '/blog/de/2026/05/21/geotapp-vs-hubstaff-2026-ueberwachung-vs-zertifizierung/',
    fr: '/blog/fr/2026/05/21/geotapp-vs-hubstaff-2026-surveillance-vs-certification/',
    es: '/blog/es/2026/05/21/geotapp-vs-hubstaff-2026-vigilancia-vs-certificacion/',
    nl: '/blog/nl/2026/05/21/geotapp-vs-hubstaff-2026-surveillance-vs-certificering/',
    pt: '/blog/pt/2026/07/24/geotapp-vs-hubstaff-2026-vigilancia-vs-prova/',
    da: '/blog/da/2026/07/24/geotapp-vs-hubstaff-2026-overvaagning-vs-bevis/',
    sv: '/blog/sv/2026/07/24/geotapp-vs-hubstaff-2026-overvakning-vs-bevis/',
  },
  jibble: {
    it: '/blog/2026/05/18/geotapp-vs-jibble-2026-confronto-app-presenze/',
    en: '/blog/en/2026/05/18/geotapp-vs-jibble-2026-time-tracking-comparison/',
    de: '/blog/de/2026/05/18/geotapp-vs-jibble-2026-zeiterfassungs-vergleich/',
    fr: '/blog/fr/2026/05/18/geotapp-vs-jibble-2026-comparaison-pointage/',
    es: '/blog/es/2026/05/18/geotapp-vs-jibble-2026-comparacion-fichaje/',
    nl: '/blog/nl/2026/05/18/geotapp-vs-jibble-2026-tijdregistratie-vergelijking/',
    pt: '/blog/pt/2026/07/24/geotapp-vs-jibble-2026-comparacao-assiduidade/',
    da: '/blog/da/2026/07/24/geotapp-vs-jibble-2026-fremmode-sammenligning/',
    sv: '/blog/sv/2026/07/24/geotapp-vs-jibble-2026-narvaro-jamforelse/',
  },
  libemax: {
    // Libemax ha l'articolo IT (piu' quello NL del 24/07/2026), ed e' la pagina con piu' citazioni AI del sito.
    it: '/blog/2026/05/15/geotapp-vs-libemax-2026-confronto-app-rilevazione-presenze/',
    nl: '/blog/nl/2026/07/24/geotapp-vs-libemax-2026-urenregistratie-vergelijking/',
    pt: '/blog/pt/2026/07/24/geotapp-vs-libemax-2026-comparacao-assiduidade/',
    da: '/blog/da/2026/07/24/geotapp-vs-libemax-2026-fremmode-sammenligning/',
    sv: '/blog/sv/2026/07/24/geotapp-vs-libemax-2026-narvaro-jamforelse/',
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
  nobadge: {
    sv: '/blog/sv/2026/07/24/geotapp-vs-nobadge-2026-stampling-vs-bevis/',
  },
  personio: {
    sv: '/blog/sv/2026/07/24/geotapp-vs-personio-2026-personal-vs-bevis/',
  },
  sage: {
    sv: '/blog/sv/2026/07/24/geotapp-vs-sage-2026-ekonomi-vs-bevis/',
  },
  blink: {
    sv: '/blog/sv/2026/07/24/geotapp-vs-blink-2026-stampling-vs-bevis/',
  },
};

// Testo dell'ancora per lingua ("Approfondisci sul blog: ...").
const ANCHOR: Record<string, string> = {
  it: 'Approfondisci il confronto sul blog',
  en: 'Read the in-depth comparison on the blog',
  de: 'Den ausführlichen Vergleich im Blog lesen',
  fr: 'Lire la comparaison détaillée sur le blog',
  es: 'Leer la comparativa detallada en el blog',
  pt: 'Ler a comparação detalhada no blogue',
  nl: 'Lees de uitgebreide vergelijking op de blog',
  sv: 'Läs den fördjupade jämförelsen på bloggen',
  nb: 'Les den grundige sammenligningen pa bloggen',
  da: 'Læs den dybdegående sammenligning på bloggen',
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
  const href = byLocale[locale] ?? (locale.startsWith('en-') ? byLocale.en : undefined) ?? byLocale.it;
  if (!href) return null;
  const label = ANCHOR[locale] ?? ANCHOR.en;
  return { href, label };
}
