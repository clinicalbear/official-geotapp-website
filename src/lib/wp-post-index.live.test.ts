// Dry run REALE contro il blog in produzione: nessuna scrittura, si stampa soltanto
// cosa mostrerebbero le sezioni "Dal blog" e le pagine risorse dopo la modifica.
//
//   LIVE_WP=1 npx vitest run src/lib/wp-post-index.live.test.ts
//
// Fuori da quel comando il file si salta, per non appendere la suite alla rete.

import { describe, it, expect } from 'vitest';
import { getPostIndex, getPostsInCategory, localizeCategoryId, resetWpPostIndexCache } from './wp-post-index';
import { detectPostLocale, toBlogLocale } from './blog-locale';

const live = process.env.LIVE_WP === '1';

// Le categorie passate oggi a BlogHighlights dalle pagine (id italiani).
const CASI: Array<{ categoria: number; nome: string; locali: string[] }> = [
  { categoria: 9, nome: 'gestione-presenze (pulizie, sicurezza)', locali: ['it', 'en', 'de', 'en-us'] },
  { categoria: 65, nome: 'geotapp-flow (edilizia, impianti)', locali: ['it', 'de', 'fr'] },
  { categoria: 54, nome: 'digitalizzazione-aziendale (home)', locali: ['it', 'de', 'nl'] },
  { categoria: 108, nome: 'geotapp-timetracker (prodotto)', locali: ['it', 'de'] },
];

describe.skipIf(!live)('dry run sezioni blog del sito', () => {
  it('ogni categoria trova articoli nella lingua della pagina', async () => {
    const index = await getPostIndex();
    console.log(`\nIndice: ${index.length} post pubblicati\n`);
    expect(index.length).toBeGreaterThan(0);

    for (const caso of CASI) {
      for (const locale of caso.locali) {
        const lang = toBlogLocale(locale);
        const categoriaLocale = await localizeCategoryId(caso.categoria, locale);
        const posts = await getPostsInCategory(caso.categoria, locale, 3);

        console.log(
          `── ${caso.nome} · pagina ${locale} → lingua ${lang}, categoria ${categoriaLocale} · ${posts.length} articoli`,
        );
        for (const p of posts) console.log(`   [${detectPostLocale(p)}] ${p.title.rendered.slice(0, 60)}`);

        // Il punto della modifica: se escono articoli, sono nella lingua della pagina.
        for (const p of posts) expect(detectPostLocale(p)).toBe(lang);
      }
    }
  }, 120_000);
});

describe.skipIf(!live)('indice ridotto delle pagine /links (force-dynamic)', () => {
  it('con 3 pagine restano abbastanza post per ogni lingua', async () => {
    resetWpPostIndexCache();
    const ridotto = await getPostIndex({ maxPages: 2, withContent: true });
    console.log(`\nIndice ridotto (con contenuti): ${ridotto.length} post`);

    const perLingua: Record<string, number> = {};
    for (const p of ridotto) {
      const l = detectPostLocale(p);
      perLingua[l] = (perLingua[l] ?? 0) + 1;
    }
    console.log(`Per lingua: ${JSON.stringify(perLingua)}`);

    // Le pagine /links mostrano 4 articoli per lingua piu' i pinnati di settore.
    for (const lang of ['it', 'en', 'de', 'fr', 'es', 'pt', 'nl', 'da', 'sv', 'nb', 'ru']) {
      expect(perLingua[lang] ?? 0).toBeGreaterThanOrEqual(4);
    }
  }, 120_000);
});
