import { describe, expect, it } from 'vitest';
import { wpHtmlImmagini, wpImmagine } from './wp-webp';
import { sanitizeWpHtml } from './sanitize-wp';

const PNG = 'https://geotapp.com/blog/wp-content/uploads/2026/03/Gemini_Generated_Image_z0mbxnz0mbxnz0mb.png';
const WEBP = 'https://geotapp.com/blog/wp-content/uploads/2026/03/Gemini_Generated_Image_z0mbxnz0mbxnz0mb-w.webp';
const FUORI = 'https://geotapp.com/blog/wp-content/uploads/2099/01/non-convertita.png';

describe('immagini del blog in WebP', () => {
  it('scambia solo le immagini convertite', () => {
    expect(wpImmagine(PNG)).toBe(WEBP);
    expect(wpImmagine(FUORI)).toBe(FUORI);
    expect(wpImmagine(null)).toBeNull();
  });
  it('scambia anche i vecchi WebP pesanti, ma mai una copia -w.webp', () => {
    const vecchio = 'https://geotapp.com/blog/wp-content/uploads/2026/03/Gemini_Generated_Image_z0mbxnz0mbxnz0mb.webp';
    expect(wpImmagine(vecchio)).toBe(WEBP);
    expect(wpImmagine(WEBP)).toBe(WEBP);
  });
  it('vale anche per il vecchio dominio blog.geotapp.com', () => {
    expect(wpImmagine(PNG.replace('geotapp.com/blog', 'blog.geotapp.com'))).toBe(WEBP);
  });
  it('scambia src e srcset nell HTML dell articolo, passando dal sanitizzatore', () => {
    const html = `<figure><img src="${PNG}" srcset="${PNG} 2752w, ${FUORI} 300w" alt="x"></figure>`;
    const out = sanitizeWpHtml(html);
    expect(out).toContain(`src="${WEBP}"`);
    expect(out).toContain(`${WEBP} 2752w, ${FUORI} 300w`);
    expect(wpHtmlImmagini('')).toBe('');
  });
});
