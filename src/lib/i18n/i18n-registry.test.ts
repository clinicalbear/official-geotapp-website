import { describe, expect, it } from 'vitest';
import { getDictionary } from './dictionaries';
import { getLocaleFromPathname, localizePath, stripLocaleFromPathname } from './locale-routing';
import { SUPPORTED_LOCALES } from './config';
import { ASSETS, COPY, UI, baseLocale } from '@/content/lead-assets';
import fs from 'node:fs';
import path from 'node:path';

describe('registro dei dizionari', () => {
  it('espone testi pubblici localizzati per le lingue europee', () => {
    expect(getDictionary('fr').navbar.products).toBe('Produits');
    expect(getDictionary('de').navbar.pricing).toBe('Preise');
    expect(getDictionary('es').contact.form.send).toBe('Enviar');
    expect(getDictionary('pt').login_hub.flow.btn).toBe('Entrar no Flow');
    expect(getDictionary('nl').footer.rights).toBe('Alle rechten voorbehouden.');
    expect(getDictionary('nb').navbar.contact).toBe('Kontakt');
    expect(getDictionary('ru').contact.form.name).toBe('Имя');
    // sv e da: stessa regola, senza fissare lo slogan che cambia con le campagne
    expect(getDictionary('sv').landing.hero_cta_primary.length).toBeGreaterThan(3);
    expect(getDictionary('da').login_hub.timetracker.btn.length).toBeGreaterThan(3);
  });
});

describe('helper di routing per lingua', () => {
  it('riconosce e toglie il prefisso di lingua', () => {
    expect(getLocaleFromPathname('/fr/pricing')).toBe('fr');
    expect(getLocaleFromPathname('/en/products/geotapp-flow')).toBe('en');
    expect(getLocaleFromPathname('/pricing')).toBeNull();
    expect(stripLocaleFromPathname('/fr/pricing')).toBe('/pricing');
    expect(stripLocaleFromPathname('/it')).toBe('/');
    expect(stripLocaleFromPathname('/contact')).toBe('/contact');
  });

  it('localizza anche gli slug e chiude con la barra finale', () => {
    expect(localizePath('/pricing', 'de')).toBe('/de/preise/');
    expect(localizePath('/', 'it')).toBe('/it/');
    expect(localizePath('/fr/products/geotapp-app', 'nl')).toBe('/nl/producten/geotapp-app/');
  });
});

describe('manuale e checklist scaricabili dietro email', () => {
  const keys = ['manuale', 'checklist'] as const;
  const locales = Array.from(new Set(SUPPORTED_LOCALES.map((l) => baseLocale(l))));

  it('ogni lingua ha tutti i testi, senza segnaposto vuoti', () => {
    for (const l of locales) {
      const ui = UI[l];
      expect(ui.consent, l).toContain('{privacy}');
      for (const k of keys) {
        const c = COPY[l][k];
        for (const f of [c.metaTitle, c.metaDesc, c.h1, c.subtitle, c.p1, c.p2, ui.downloadLabel[k], ui.kicker[k]]) {
          expect(f.trim().length, `${l}/${k}`).toBeGreaterThan(5);
        }
        expect(c.metaDesc.length, `${l}/${k} metaDesc`).toBeLessThanOrEqual(270);
        if (l !== 'it') expect(ui.comingText[k].length, `${l}/${k} coming`).toBeGreaterThan(40);
      }
      if (l !== 'it') expect(ui.comingTitle.length).toBeGreaterThan(5);
    }
  });

  it('i PDF esistono nella cartella riservata e non sono linkati in chiaro', () => {
    for (const k of keys) {
      const f = path.join(process.cwd(), 'public', ASSETS[k].file);
      expect(fs.existsSync(f), ASSETS[k].file).toBe(true);
      expect(fs.statSync(f).size).toBeGreaterThan(10000);
      expect(ASSETS[k].file).toContain('/downloads/riservati/');
    }
  });

  it('la sitemap e il robots tengono conto delle nuove pagine', () => {
    const mw = fs.readFileSync(path.join(process.cwd(), 'src', 'middleware.ts'), 'utf8');
    const robots = fs.readFileSync(path.join(process.cwd(), 'src', 'app', 'robots.ts'), 'utf8');
    for (const k of keys) expect(mw).toContain(`path: '${ASSETS[k].path}'`);
    expect(robots).toContain('/downloads/riservati/');
  });
});
