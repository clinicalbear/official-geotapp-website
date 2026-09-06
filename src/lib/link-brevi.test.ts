import { describe, expect, it } from 'vitest';

import { LINK_BREVI, risolviLinkBreve, urlLinkBreve } from './link-brevi';

describe('link brevi dei gruppi', () => {
  it('manda ogni codice noto alla pagina del sondaggio nella sua lingua', () => {
    for (const [codice, voce] of Object.entries(LINK_BREVI)) {
      expect(voce.destinazione, codice).toMatch(/^\/([a-z]{2}\/)?survey\/$/);
      expect(risolviLinkBreve(codice).destinazione).toBe(voce.destinazione);
      expect(risolviLinkBreve(codice).conosciuto).toBe(true);
    }
  });

  it('non lascia un codice storpiato su un 404', () => {
    // Un copia e incolla sbagliato dentro un post non si puo' correggere a
    // posteriori: deve comunque atterrare sul sondaggio.
    const esito = risolviLinkBreve('fb-JIMDO-inesistente');
    expect(esito.destinazione).toBe('/survey/');
    expect(esito.conosciuto).toBe(false);
  });

  it('tollera maiuscole e barra finale, che i social aggiungono da soli', () => {
    expect(risolviLinkBreve('FB-Jimdo/').destinazione).toBe('/de/survey/');
    expect(risolviLinkBreve(' fb-jimdo ').destinazione).toBe('/de/survey/');
  });

  it('ha codici corti e senza caratteri da sfuggire nelle URL', () => {
    for (const codice of Object.keys(LINK_BREVI)) {
      expect(codice, codice).toMatch(/^[a-z]{1,2}-[a-z0-9]{2,16}$/);
    }
  });

  it('compone l indirizzo da incollare nel post', () => {
    expect(urlLinkBreve('fb-jimdo')).toBe('https://geotapp.com/s/fb-jimdo');
  });
});
