import { describe, it, expect } from 'vitest';
import { localizePath } from './locale-routing';

describe('localizePath — GPS lavoratori UE resource tool', () => {
  it('localizes tool + country segments to German', () => {
    expect(localizePath('/risorse/gps-lavoratori-ue/germania/', 'de')).toBe(
      '/de/ressourcen/gps-mitarbeiter-eu/deutschland/',
    );
  });

  it('localizes tool + country segments to French', () => {
    expect(localizePath('/risorse/gps-lavoratori-ue/germania/', 'fr')).toBe(
      '/fr/ressources/gps-travailleurs-ue/allemagne/',
    );
  });

  it('keeps Italian canonical slugs for it locale', () => {
    expect(localizePath('/risorse/gps-lavoratori-ue/italia/', 'it')).toBe(
      '/it/risorse/gps-lavoratori-ue/italia/',
    );
  });

  it('localizes for an en-* variant (en-gb)', () => {
    expect(localizePath('/risorse/gps-lavoratori-ue/germania/', 'en-gb')).toBe(
      '/en-gb/resources/gps-workers-eu/germany/',
    );
  });

  it('localizes the Netherlands country slug to Dutch', () => {
    expect(localizePath('/risorse/gps-lavoratori-ue/olanda/', 'nl')).toBe(
      '/nl/bronnen/gps-werknemers-eu/nederland/',
    );
  });

  it('localizes Spain and France country slugs to Russian', () => {
    expect(localizePath('/risorse/gps-lavoratori-ue/spagna/', 'ru')).toBe(
      '/ru/resursy/gps-rabotniki-es/ispaniya/',
    );
    expect(localizePath('/risorse/gps-lavoratori-ue/francia/', 'ru')).toBe(
      '/ru/resursy/gps-rabotniki-es/frantsiya/',
    );
  });
});
