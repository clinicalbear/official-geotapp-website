import { describe, expect, it } from 'vitest';
import { buildChecklistPrintHtml, esc, type ChecklistInput } from './checklist-pdf';

const base = (over: Partial<ChecklistInput> = {}): ChecklistInput => ({
  locale: 'de',
  titolo: 'Deutschland: Checkliste',
  intro: 'Intro',
  paese: 'Deutschland',
  autorita: 'BfDI',
  verificatoIl: '15. Juni 2026',
  verificatoLabel: 'geprüft am',
  sezioneVoci: 'Was Sie brauchen',
  sezioneProcedura: 'Verfahren',
  sezioneContatti: 'Kontakt',
  voci: [
    { voce: 'Betriebsrat <anhören>', rispostaLabel: 'Ja', risposta: 'si', dettaglio: 'Pflicht & Frist', fonteTitolo: 'BetrVG § 87', fonteUrl: 'https://www.gesetze-im-internet.de/betrvg/__87.html' },
    { voce: 'DSFA', rispostaLabel: 'Kommt darauf an', risposta: 'dipende', dettaglio: 'x', fonteTitolo: 'Quelle', fonteUrl: 'javascript:alert(1)' },
  ],
  passi: ['Schritt eins', 'Schritt zwei'],
  contatti: [{ ente: 'BfDI', email: 'poststelle@bfdi.bund.de' }],
  disclaimer: 'Keine Rechtsberatung',
  footer: 'GeoTapp',
  ...over,
});

describe('buildChecklistPrintHtml', () => {
  it('mette una casella per ogni voce e per ogni passo', () => {
    const h = buildChecklistPrintHtml(base());
    expect((h.match(/class="box"/g) ?? []).length).toBe(4);
    expect(h).toContain('window.print()');
  });
  it('esegue l’escape di testo e attributi', () => {
    const h = buildChecklistPrintHtml(base());
    expect(h).toContain('Betriebsrat &lt;anhören&gt;');
    expect(h).toContain('Pflicht &amp; Frist');
    expect(esc('a"b')).toBe('a&quot;b');
  });
  it('non lascia passare un URL che non sia http(s)', () => {
    const h = buildChecklistPrintHtml(base());
    expect(h).not.toContain('javascript:');
    expect(h).toContain('href="https://www.gesetze-im-internet.de/betrvg/__87.html"');
  });
});
