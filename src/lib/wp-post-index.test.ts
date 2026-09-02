import { describe, it, expect } from 'vitest';
import { blogPostPath, filterPosts, type WpIndexPost } from './wp-post-index';
import { toBlogLocale } from './blog-locale';

const post = (over: Partial<WpIndexPost>): WpIndexPost => ({
  id: 1,
  slug: 'x',
  title: { rendered: 'x' },
  excerpt: { rendered: 'x' },
  date: '2026-09-01T08:00:00',
  link: 'https://geotapp.com/blog/2026/09/01/x/',
  ...over,
});

describe('blogPostPath', () => {
  it('tiene lingua e data del permalink su geotapp.com', () => {
    expect(blogPostPath('https://geotapp.com/blog/de/2026/06/30/ueberstunden/', 'ueberstunden'))
      .toBe('/blog/de/2026/06/30/ueberstunden/');
  });

  it('non raddoppia /blog', () => {
    expect(blogPostPath('https://geotapp.com/blog/2026/04/21/guida/', 'guida'))
      .not.toContain('/blog/blog/');
  });

  it('gestisce anche il vecchio host del blog', () => {
    expect(blogPostPath('https://blog.geotapp.com/2026/04/21/guida/', 'guida'))
      .toBe('/blog/2026/04/21/guida/');
  });

  it('con un link malformato ripiega sullo slug', () => {
    expect(blogPostPath('non-un-url', 'guida')).toBe('/blog/guida/');
  });
});

describe('filterPosts', () => {
  const posts = [
    post({ id: 1, gtmsa_lang: 'it', categories: [9] }),
    post({ id: 2, gtmsa_lang: 'de', categories: [435] }),
    post({ id: 3, gtmsa_lang: 'en', categories: [376] }),
    post({ id: 4, gtmsa_lang: 'it', categories: [54] }),
  ];

  it('filtra per lingua e categoria', () => {
    expect(filterPosts(posts, [9], 'it').map((p) => p.id)).toEqual([1]);
    expect(filterPosts(posts, [435], 'de').map((p) => p.id)).toEqual([2]);
  });

  it('categoria di un altra lingua non produce nulla', () => {
    expect(filterPosts(posts, [9], 'de')).toEqual([]);
  });

  it('senza categorie filtra solo per lingua', () => {
    expect(filterPosts(posts, [], 'it').map((p) => p.id)).toEqual([1, 4]);
  });

  it('i locale regionali leggono i post inglesi', () => {
    expect(filterPosts(posts, [376], 'en-us').map((p) => p.id)).toEqual([3]);
    expect(filterPosts(posts, [376], 'en-gb').map((p) => p.id)).toEqual([3]);
  });

  it('rispetta il limite', () => {
    expect(filterPosts(posts, [], 'it', 1).map((p) => p.id)).toEqual([1]);
  });
});

describe('toBlogLocale', () => {
  it('lascia stare le 11 lingue del blog', () => {
    for (const l of ['it', 'en', 'de', 'nl', 'fr', 'es', 'pt', 'da', 'sv', 'nb', 'ru']) {
      expect(toBlogLocale(l)).toBe(l);
    }
  });

  it('porta le varianti regionali sulla lingua base', () => {
    expect(toBlogLocale('en-us')).toBe('en');
    expect(toBlogLocale('en-gb')).toBe('en');
    expect(toBlogLocale('en-au')).toBe('en');
    expect(toBlogLocale('en-ie')).toBe('en');
    expect(toBlogLocale('en-ca')).toBe('en');
  });

  it('su una lingua sconosciuta ripiega sull inglese', () => {
    expect(toBlogLocale('zz')).toBe('en');
    expect(toBlogLocale('')).toBe('en');
  });
});
