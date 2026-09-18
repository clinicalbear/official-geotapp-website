/**
 * I dati strutturati del giro completo.
 *
 * Google mostra i video in SERP solo se trova un `VideoObject` con la
 * miniatura, la data e il file vero; e i `Clip` dei sette atti sono quelli che
 * diventano i "momenti chiave" sotto il risultato, cioe' il motivo per cui una
 * ricerca su "prova del lavoro svolto" puo' atterrare direttamente al minuto
 * giusto invece che sulla homepage.
 *
 * `contentUrl` e' il nostro file, `embedUrl` la stessa voce su YouTube: le due
 * copie vanno dichiarate insieme, altrimenti Google le tratta come due video
 * diversi che si fanno concorrenza.
 */
import type { AppLocale } from './i18n/config';
import { getDictionary } from './i18n/dictionaries';
import {
  GIRO_ALTEZZA,
  GIRO_CAPITOLI,
  GIRO_DATA,
  GIRO_DURATA_ISO,
  GIRO_LARGHEZZA,
  giroLocandina,
  giroMiniatura,
  giroVideoSrc,
  giroYouTubeEmbed,
  linguaGiro,
} from './video-giro';
import { GIRO_CONTENUTI } from './video-giro-contenuti';

const BASE_URL = 'https://geotapp.com';

export function giroVideoJsonLd(locale: AppLocale | string, urlPagina: string) {
  const t = getDictionary(locale as AppLocale).videoGiro;
  const contenuto = GIRO_CONTENUTI[linguaGiro(locale)];
  const url = urlPagina.startsWith('http') ? urlPagina : `${BASE_URL}${urlPagina}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: t.page.metaTitle,
    description: t.page.metaDescription,
    thumbnailUrl: [`${BASE_URL}${giroMiniatura(locale)}`, `${BASE_URL}${giroLocandina(locale)}`],
    uploadDate: GIRO_DATA,
    duration: GIRO_DURATA_ISO,
    contentUrl: `${BASE_URL}${giroVideoSrc(locale)}`,
    embedUrl: giroYouTubeEmbed(locale),
    url,
    width: GIRO_LARGHEZZA,
    height: GIRO_ALTEZZA,
    inLanguage: linguaGiro(locale),
    isFamilyFriendly: true,
    transcript: contenuto.trascrizione.map((v) => v.testo).join(' '),
    publisher: {
      '@type': 'Organization',
      name: 'GeoTapp',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/LogoGeoTapp.webp` },
    },
    hasPart: GIRO_CAPITOLI.map((c, i) => ({
      '@type': 'Clip',
      name: contenuto.atti[i],
      startOffset: c.da,
      endOffset: c.a,
      url: `${url}#t=${c.da}`,
    })),
  };
}
