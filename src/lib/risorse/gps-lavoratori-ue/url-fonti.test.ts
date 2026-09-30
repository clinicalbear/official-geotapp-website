import { describe, it, expect } from 'vitest';
import { PAESI } from './index';

/**
 * Un URL di fonte si copia com'e' dal sito dell'ente, mai "corretto".
 * Il 29/09/2026 la passata che rimetteva le dieresi nei testi tedeschi le ha
 * messe anche dentro due URL: bfdi.bund.de/.../Laender/ e' diventato Länder/
 * (404) e dsb.gv.at/ueber-... e' diventato über-... (pagina vuota). Il 17/06
 * la passata sugli accenti italiani aveva fatto lo stesso col greco traslitterato
 * ergodoti-gia- (per dire "per"), diventato già- (403). Questo test fallisce se
 * un URL contiene lettere latine accentate o spazi. Il cirillico resta ammesso:
 * cpdp.bg usa davvero indirizzi in bulgaro.
 */
function tuttiGliUrl(): string[] {
  const out: string[] = [];
  for (const s of PAESI) {
    for (const f of s.fonti ?? []) out.push(`${s.codiceISO} ${f.url}`);
    for (const v of s.checklist ?? []) if (v.fonte) out.push(`${s.codiceISO} ${v.fonte.url}`);
    out.push(`${s.codiceISO} ${s.sanzioneMax.urlFonte}`);
    for (const c of [s.autoritaCompetente, ...(s.contatti ?? [])]) {
      out.push(`${s.codiceISO} ${c.urlFonte}`);
      if (c.portale) out.push(`${s.codiceISO} ${c.portale}`);
    }
    if (s.modelloPdf) out.push(`${s.codiceISO} ${s.modelloPdf.url}`);
  }
  return out;
}

describe('URL delle fonti', () => {
  it('nessun URL contiene lettere latine accentate o spazi', () => {
    const sporchi = tuttiGliUrl().filter((x) => /[\u00c0-\u024f\s]/.test(x.split(' ')[1] ?? ''));
    expect(sporchi).toEqual([]);
  });
});
