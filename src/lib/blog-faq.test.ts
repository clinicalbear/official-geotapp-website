import { describe, expect, it } from 'vitest';
import { blogFaqJsonLd, extractBlogFaq } from './blog-faq';

const HTML = `
<p>Corpo.</p>
<section class="gt-faq"><h2>Domande frequenti</h2>
<h3>L&#8217;informativa è obbligatoria?</h3><p>Sì, <a href="/x">per l&#8217;art. 13</a> del GDPR.</p>
<h3>Serve il DPO?</h3><p>Dipende dall&#8217;art. 37.</p>
</section>
<h3>Fuori dalla sezione?</h3><p>Non conta.</p>`;

describe('extractBlogFaq', () => {
  it('legge solo le coppie h3/p dentro .gt-faq e toglie i tag', () => {
    const r = extractBlogFaq(HTML);
    expect(r).toHaveLength(2);
    expect(r[0]).toEqual({ question: 'L’informativa è obbligatoria?', answer: 'Sì, per l’art. 13 del GDPR.' });
  });
  it('senza sezione non produce niente', () => {
    expect(extractBlogFaq('<h3>Domanda?</h3><p>Risposta.</p>')).toEqual([]);
    expect(blogFaqJsonLd([])).toBeNull();
  });
  it('costruisce FAQPage', () => {
    const j = blogFaqJsonLd(extractBlogFaq(HTML));
    expect(j?.['@type']).toBe('FAQPage');
    expect(j?.mainEntity).toHaveLength(2);
  });
});
