/**
 * Sanitizzazione HTML proveniente da WordPress (articoli, commenti, bio autore).
 *
 * Difesa in profondità: WordPress è hardened (login dietro Cloudflare Access,
 * xmlrpc off, REST users off), ma se un plugin o un account venisse compromesso
 * il contenuto iniettato arriverebbe ai lettori passando per dangerouslySetInnerHTML.
 * Questo modulo filtra tutto su allowlist PRIMA che l'HTML entri nel render.
 *
 * Libreria: `xss` (pure JS, niente DOM) — funziona sia nel Worker Cloudflare
 * (SSR/server components, dove jsdom/DOMPurify non girano) sia nel browser.
 */
import { FilterXSS, getDefaultWhiteList } from 'xss';

// Estende l'allowlist di default con i tag/attributi che WordPress emette
// davvero nei nostri articoli: figure/figcaption, iframe per embed video,
// class/id ovunque (servono a Tailwind/prose e alle ancore dei heading).
const whiteList: Record<string, string[]> = { ...getDefaultWhiteList() } as Record<string, string[]>;
for (const tag of Object.keys(whiteList)) {
  whiteList[tag] = [...(whiteList[tag] ?? []), 'class', 'id'];
}
whiteList.figure = ['class', 'id'];
whiteList.figcaption = ['class', 'id'];
whiteList.iframe = ['src', 'width', 'height', 'allow', 'allowfullscreen', 'frameborder', 'loading', 'title', 'class'];
whiteList.img = [...(whiteList.img ?? []), 'srcset', 'sizes', 'loading', 'decoding', 'width', 'height', 'alt', 'src'];
whiteList.a = [...(whiteList.a ?? []), 'rel', 'target', 'aria-label'];

// Host ammessi per gli iframe (embed legittimi negli articoli).
const IFRAME_HOSTS = new Set([
  'www.youtube.com', 'www.youtube-nocookie.com', 'player.vimeo.com', 'www.google.com',
]);

const filter = new FilterXSS({
  whiteList,
  stripIgnoreTag: true,
  stripIgnoreTagBody: ['script', 'style'],
  onTagAttr: (tag, name, value) => {
    if (tag === 'iframe' && name === 'src') {
      try {
        const u = new URL(value);
        if (u.protocol === 'https:' && IFRAME_HOSTS.has(u.hostname)) return undefined; // default: keep
      } catch { /* not a valid absolute URL */ }
      return ''; // drop src → iframe inerte
    }
    return undefined;
  },
});

/** Sanitizza HTML WordPress per il rendering via dangerouslySetInnerHTML. */
export function sanitizeWpHtml(html: string): string {
  if (!html) return '';
  return filter.process(html);
}
