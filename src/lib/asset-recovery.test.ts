import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { describe, expect, it } from 'vitest';
import { ASSET_RECOVERY_SCRIPT } from './asset-recovery';

type Link = { rel?: string; href?: string; sheet?: unknown; disabled?: boolean };

/** Esegue lo script in una finestra finta e registra le ricariche. */
function pagina(opts: { memoria?: Record<string, string>; link?: Link[]; stato?: string; via?: string; ora?: number } = {}) {
  const ascoltatori: Record<string, (e: unknown) => void> = {};
  const memoria = opts.memoria ?? {};
  const timer: number[] = [];
  const mondo = {
    reload: 0,
    radice: { style: { visibility: '' } },
  };
  const documento = {
    documentElement: mondo.radice,
    readyState: opts.stato ?? 'loading',
    querySelectorAll: () => opts.link ?? [],
  };
  vm.runInNewContext(ASSET_RECOVERY_SCRIPT, {
    document: documento,
    location: { pathname: opts.via ?? '/it/stampa/', reload: () => { mondo.reload += 1; } },
    sessionStorage: {
      getItem: (k: string) => memoria[k] ?? null,
      setItem: (k: string, v: string) => { memoria[k] = v; },
    },
    addEventListener: (nome: string, f: (e: unknown) => void) => { ascoltatori[nome] = f; },
    setTimeout: (f: () => void, ms: number) => { timer.push(ms); f(); },
    Date: { now: () => opts.ora ?? 1000000 },
    JSON,
  });
  return { ascoltatori, memoria, mondo, timer, documento };
}

const CSS = { tagName: 'LINK', rel: 'stylesheet', href: 'https://geotapp.com/_next/static/chunks/a.css' };
const JS = { tagName: 'SCRIPT', src: 'https://geotapp.com/_next/static/chunks/a.js' };

describe('recupero dei file mancanti dopo un deploy', () => {
  it('nasconde la pagina e la ricarica se manca un CSS del sito', () => {
    const p = pagina();
    p.ascoltatori.error({ target: CSS });
    expect(p.mondo.reload).toBe(1);
    expect(p.mondo.radice.style.visibility).toBe('hidden');
    expect(p.timer).toEqual([0]);
  });

  it('ricarica una volta sola anche se mancano piu file', () => {
    const p = pagina();
    p.ascoltatori.error({ target: CSS });
    p.ascoltatori.error({ target: { ...CSS, href: 'https://geotapp.com/_next/static/chunks/b.css' } });
    expect(p.mondo.reload).toBe(1);
  });

  it('il secondo tentativo aspetta, il terzo non parte e la pagina resta visibile', () => {
    const memoria: Record<string, string> = {};
    const prima = pagina({ memoria });
    prima.ascoltatori.error({ target: CSS });
    const seconda = pagina({ memoria, ora: 1005000 });
    seconda.ascoltatori.error({ target: CSS });
    expect(seconda.timer).toEqual([2000]);
    const terza = pagina({ memoria, ora: 1010000 });
    terza.ascoltatori.error({ target: CSS });
    expect(terza.mondo.reload).toBe(0);
    expect(terza.mondo.radice.style.visibility).toBe('');
  });

  it('riparte da zero dopo un minuto o su un altra pagina', () => {
    const memoria = { 'gt-asset-reload': JSON.stringify({ p: '/it/stampa/', t: 1000000, n: 2 }) };
    const dopo = pagina({ memoria: { ...memoria }, ora: 1061000 });
    dopo.ascoltatori.error({ target: CSS });
    expect(dopo.mondo.reload).toBe(1);
    const altra = pagina({ memoria: { ...memoria }, via: '/it/pricing/' });
    altra.ascoltatori.error({ target: CSS });
    expect(altra.mondo.reload).toBe(1);
  });

  it('ignora preload, file di altri e JS a pagina gia caricata', () => {
    const p = pagina({ stato: 'complete' });
    p.ascoltatori.error({ target: { ...CSS, rel: 'preload' } });
    p.ascoltatori.error({ target: { ...CSS, href: 'https://www.googletagmanager.com/x.css' } });
    p.ascoltatori.error({ target: JS });
    p.ascoltatori.error({ target: { tagName: 'IMG', src: CSS.href } });
    p.ascoltatori.error({ target: {} });
    expect(p.mondo.reload).toBe(0);
  });

  it('ricarica se manca un JS del sito mentre la pagina si carica', () => {
    const p = pagina({ stato: 'interactive' });
    p.ascoltatori.error({ target: JS });
    expect(p.mondo.reload).toBe(1);
  });

  it('al load trova i CSS falliti prima che lo script partisse', () => {
    const sano = { rel: 'stylesheet', href: CSS.href, sheet: {} };
    const p = pagina({ link: [sano] });
    p.ascoltatori.load({});
    expect(p.mondo.reload).toBe(0);
    const q = pagina({ link: [sano, { rel: 'stylesheet', href: CSS.href, sheet: null }] });
    q.ascoltatori.load({});
    expect(q.mondo.reload).toBe(1);
  });

  it('non ricarica se sessionStorage non funziona, per non girare in tondo', () => {
    const ascoltatori: Record<string, (e: unknown) => void> = {};
    let ricariche = 0;
    vm.runInNewContext(ASSET_RECOVERY_SCRIPT, {
      document: { documentElement: { style: {} }, readyState: 'loading', querySelectorAll: () => [] },
      location: { pathname: '/', reload: () => { ricariche += 1; } },
      sessionStorage: { getItem: () => { throw new Error('bloccato'); }, setItem: () => undefined },
      addEventListener: (nome: string, f: (e: unknown) => void) => { ascoltatori[nome] = f; },
      setTimeout: (f: () => void) => f(),
      Date,
      JSON,
    });
    ascoltatori.error({ target: CSS });
    expect(ricariche).toBe(0);
  });

  it('sta in tutti i layout del sito che hanno <html>', () => {
    for (const f of ['[locale]', 'blog', 'candidatura', 'links', 'verify-report', 'r', 'embed/[locale]']) {
      const testo = readFileSync(new URL(`../app/${f}/layout.tsx`, import.meta.url), 'utf8');
      expect(testo, f).toContain('<AssetRecoveryScript />');
    }
  });
});
