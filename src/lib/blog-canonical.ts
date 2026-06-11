// Canonical URL e decisione di redirect per le pagine articolo del blog.
//
// Il blog WordPress serve ogni post a QUALSIASI URL con prefisso lingua (anche
// errato) e all'URL senza prefisso: il permalink è basato sulla data
// (/YYYY/MM/DD/slug/) e il prefisso lingua davanti non vincola il matching.
// Per evitare contenuto duplicato il canonical va calcolato dal permalink REALE
// del post (post.link, con il prefisso lingua corretto di Polylang), non
// dall'URL con cui la pagina è stata richiesta; e quando i due divergono la
// pagina deve fare 301 verso il canonical.

function ensureTrailingSlash(path: string): string {
  return path.endsWith('/') ? path : `${path}/`;
}

/** Path pubblico canonico del post (con prefisso lingua corretto) dal permalink WP. */
export function canonicalBlogPath(post: { link?: string; slug?: string }): string {
  try {
    const p = new URL(post.link ?? '');
    if (p.hostname === 'blog.geotapp.com') return ensureTrailingSlash(`/blog${p.pathname}`);
    if (p.hostname === 'geotapp.com') return ensureTrailingSlash(p.pathname);
  } catch {
    /* fallback sotto */
  }
  return `/blog/${post.slug ?? ''}/`;
}

/** Path richiesto, ricostruito dai segmenti della route catch-all, con slash finale. */
export function requestedBlogPath(slugSegments: string[]): string {
  return `/blog/${slugSegments.join('/')}/`;
}
