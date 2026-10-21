/**
 * Domande frequenti di un articolo del blog, ricavate dal suo HTML.
 *
 * In WordPress la sezione e' un blocco HTML con class="gt-faq": un <h2> col titolo
 * ("Domande frequenti") e, per ogni domanda, un <h3> seguito da un <p> con la risposta.
 * Qui si legge la stessa sezione e se ne fa lo schema FAQPage, cosi' il testo
 * visibile e i dati strutturati non possono divergere (si scrive una volta sola).
 */

export type BlogFaqItem = { question: string; answer: string };

const SEZIONE = /<(section|div)[^>]*class="[^"]*\bgt-faq\b[^"]*"[^>]*>([\s\S]*?)<\/\1>/i;
const COPPIA = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;

function testo(html: string): string {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#8217;|&rsquo;/g, '’')
    .replace(/&#039;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

export function extractBlogFaq(html: string): BlogFaqItem[] {
  const sezione = SEZIONE.exec(html);
  if (!sezione) return [];
  const out: BlogFaqItem[] = [];
  for (const m of sezione[2].matchAll(COPPIA)) {
    const question = testo(m[1]);
    const answer = testo(m[2]);
    if (question && answer) out.push({ question, answer });
  }
  return out;
}

export function blogFaqJsonLd(items: BlogFaqItem[]) {
  if (items.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.question,
      acceptedAnswer: { '@type': 'Answer', text: i.answer },
    })),
  };
}
