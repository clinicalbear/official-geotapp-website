import { describe, it, expect } from 'vitest';
import { ePaginaDiCompito } from './pagine-di-compito';

describe('ePaginaDiCompito', () => {
  it('riconosce il trial con e senza prefisso lingua', () => {
    expect(ePaginaDiCompito('/trial/')).toBe(true);
    expect(ePaginaDiCompito('/it/trial/')).toBe(true);
    expect(ePaginaDiCompito('/de/trial')).toBe(true);
    expect(ePaginaDiCompito('/ru/trial/')).toBe(true);
  });

  it('copre le altre pagine dove si sta facendo qualcosa', () => {
    for (const p of ['/it/abbonati/', '/login', '/en/demo/', '/it/contact/',
                     '/it/success/', '/fr/survey/', '/it/delete-account/',
                     '/verify-report/', '/it/newsletter/']) {
      expect(ePaginaDiCompito(p), p).toBe(true);
    }
  });

  it('lascia passare le pagine di lettura', () => {
    for (const p of ['/', '/it/', '/it/settori/pulizie/', '/blog/',
                     '/it/prezzi/', '/it/chi-siamo/', '/it/risorse/']) {
      expect(ePaginaDiCompito(p), p).toBe(false);
    }
  });

  it('non si fa ingannare da uno slug di blog che si chiama come una pagina', () => {
    expect(ePaginaDiCompito('/blog/qualcosa/demo/')).toBe(false);
    expect(ePaginaDiCompito('/it/risorse/contact/')).toBe(false);
  });
});
