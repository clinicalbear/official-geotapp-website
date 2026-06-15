import { describe, it, expect } from 'vitest';
import {
  BASE_URL,
  absoluteLocalizedUrl,
  buildBreadcrumbItems,
  buildBreadcrumbJsonLd,
  buildSchedaArticleJsonLd,
} from './jsonLd';

describe('jsonLd: risorsa GPS lavoratori UE', () => {
  it('absoluteLocalizedUrl produce URL assoluta col path localizzato', () => {
    // it: slug invariato; de: "risorse" -> "ressourcen", "gps-lavoratori-ue" -> "gps-mitarbeiter-eu"
    expect(absoluteLocalizedUrl('/risorse/gps-lavoratori-ue/', 'it')).toBe(
      `${BASE_URL}/it/risorse/gps-lavoratori-ue/`,
    );
    expect(absoluteLocalizedUrl('/risorse/gps-lavoratori-ue/', 'de')).toBe(
      `${BASE_URL}/de/ressourcen/gps-mitarbeiter-eu/`,
    );
  });

  it('buildBreadcrumbItems (selettore) = Home + Strumento, niente nodo Risorse', () => {
    const items = buildBreadcrumbItems('it', 'GPS paese per paese');
    expect(items).toHaveLength(2);
    expect(items[0]).toEqual({ name: 'GeoTapp', item: `${BASE_URL}/it/` });
    expect(items[1].name).toBe('GPS paese per paese');
    expect(items[1].item).toBe(`${BASE_URL}/it/risorse/gps-lavoratori-ue/`);
  });

  it('buildBreadcrumbItems con paese aggiunge il nodo-scheda in coda con slug localizzato', () => {
    const items = buildBreadcrumbItems('de', 'GPS', {
      name: 'Italien',
      canonicalSlug: 'italia',
    });
    expect(items).toHaveLength(3);
    expect(items[2].name).toBe('Italien');
    // "italia" -> "italien" in de
    expect(items[2].item).toBe(
      `${BASE_URL}/de/ressourcen/gps-mitarbeiter-eu/italien/`,
    );
  });

  it('buildBreadcrumbJsonLd assegna position 1..N e i tipi corretti', () => {
    const json = buildBreadcrumbJsonLd(
      buildBreadcrumbItems('it', 'GPS', { name: 'Italia', canonicalSlug: 'italia' }),
    ) as {
      '@type': string;
      itemListElement: Array<{ '@type': string; position: number; name: string; item: string }>;
    };
    expect(json['@type']).toBe('BreadcrumbList');
    expect(json.itemListElement.map((e) => e.position)).toEqual([1, 2, 3]);
    expect(json.itemListElement.every((e) => e['@type'] === 'ListItem')).toBe(true);
    expect(json.itemListElement.every((e) => e.item.startsWith('https://'))).toBe(true);
  });

  it('buildSchedaArticleJsonLd usa Article, Organization come publisher e URL assoluta', () => {
    const json = buildSchedaArticleJsonLd({
      locale: 'it',
      headline: 'GPS sui lavoratori in Italia',
      description: 'Cosa serve per essere a norma in Italia.',
      dateModified: '2026-06-12',
      canonicalSlug: 'italia',
    }) as Record<string, unknown>;
    expect(json['@type']).toBe('Article');
    expect(json.headline).toBe('GPS sui lavoratori in Italia');
    expect(json.inLanguage).toBe('it');
    expect(json.dateModified).toBe('2026-06-12');
    expect(json.url).toBe(`${BASE_URL}/it/risorse/gps-lavoratori-ue/italia/`);
    expect(json.publisher).toEqual({ '@id': `${BASE_URL}/#organization` });
    expect(json.author).toEqual({ '@id': `${BASE_URL}/#organization` });
  });
});
