// La pagina articolo deve calcolare il canonical dal permalink REALE del post
// (post.link, che porta il prefisso lingua corretto di Polylang), NON dall'URL
// con cui è stata richiesta. Così un post tedesco raggiunto all'URL senza
// prefisso emette canonical /blog/de/... e fa 301 verso quello, invece di
// auto-referenziarsi creando contenuto duplicato.
import { describe, it, expect } from 'vitest';
import { canonicalBlogPath, requestedBlogPath } from './blog-canonical';

describe('canonicalBlogPath', () => {
  it('usa il prefisso lingua dal permalink geotapp.com', () => {
    expect(canonicalBlogPath({
      link: 'https://geotapp.com/blog/de/2026/06/09/elektronische-arbeitszeiterfassung-pflicht-2026/',
      slug: 'elektronische-arbeitszeiterfassung-pflicht-2026',
    })).toBe('/blog/de/2026/06/09/elektronische-arbeitszeiterfassung-pflicht-2026/');
  });

  it('post italiano (default): nessun prefisso lingua', () => {
    expect(canonicalBlogPath({
      link: 'https://geotapp.com/blog/2026/06/10/decreto-25-2026-tabelle-costo-lavoro/',
      slug: 'decreto-25-2026-tabelle-costo-lavoro',
    })).toBe('/blog/2026/06/10/decreto-25-2026-tabelle-costo-lavoro/');
  });

  it('permalink su blog.geotapp.com viene prefissato con /blog', () => {
    expect(canonicalBlogPath({
      link: 'https://blog.geotapp.com/de/2026/06/09/slug/',
      slug: 'slug',
    })).toBe('/blog/de/2026/06/09/slug/');
  });

  it('garantisce lo slash finale', () => {
    expect(canonicalBlogPath({
      link: 'https://geotapp.com/blog/nl/2026/06/10/wkr-2026',
      slug: 'wkr-2026',
    })).toBe('/blog/nl/2026/06/10/wkr-2026/');
  });

  it('link non valido: fallback su /blog/{slug}/', () => {
    expect(canonicalBlogPath({ link: '', slug: 'fallback-slug' }))
      .toBe('/blog/fallback-slug/');
  });
});

describe('requestedBlogPath', () => {
  it('ricostruisce il path richiesto dai segmenti catch-all', () => {
    expect(requestedBlogPath(['2026', '06', '09', 'slug'])).toBe('/blog/2026/06/09/slug/');
    expect(requestedBlogPath(['de', '2026', '06', '09', 'slug'])).toBe('/blog/de/2026/06/09/slug/');
  });
});

describe('redirect decision', () => {
  it('post DE raggiunto senza prefisso → richiesto ≠ canonical → 301', () => {
    const post = {
      link: 'https://geotapp.com/blog/de/2026/06/09/slug/',
      slug: 'slug',
    };
    const requested = requestedBlogPath(['2026', '06', '09', 'slug']);
    expect(requested).not.toBe(canonicalBlogPath(post));
  });

  it('post DE raggiunto col prefisso corretto → nessun redirect', () => {
    const post = {
      link: 'https://geotapp.com/blog/de/2026/06/09/slug/',
      slug: 'slug',
    };
    const requested = requestedBlogPath(['de', '2026', '06', '09', 'slug']);
    expect(requested).toBe(canonicalBlogPath(post));
  });

  it('post IT ancora non riparato (link senza prefisso) → nessun redirect (safe pre-repair)', () => {
    const post = {
      link: 'https://geotapp.com/blog/2026/06/10/decreto/',
      slug: 'decreto',
    };
    const requested = requestedBlogPath(['2026', '06', '10', 'decreto']);
    expect(requested).toBe(canonicalBlogPath(post));
  });
});
