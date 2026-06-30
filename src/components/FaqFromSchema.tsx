import RisorsaFaq from '@/components/risorse/RisorsaFaq';

/**
 * Rende VISIBILE una FAQ (domande come heading H3) a partire da un oggetto
 * FAQPage JSON-LD già definito nella pagina. Riusa RisorsaFaq, che inietta anche
 * lo schema FAQPage: passare quindi SOLO questo componente e rimuovere
 * l'eventuale <script> JSON-LD manuale, per non duplicare lo schema.
 *
 * Scopo GEO/AI-search: le domande in forma di heading aumentano la citabilità
 * nei motori AI (Overviews, ChatGPT, Perplexity) senza toccare la prosa della
 * pagina. Le Q&A sono quelle già curate nello schema.
 */

const FAQ_TITLE: Record<string, string> = {
  it: 'Domande frequenti',
  en: 'Frequently asked questions',
  de: 'Häufige Fragen',
  fr: 'Questions fréquentes',
  es: 'Preguntas frecuentes',
  pt: 'Perguntas frequentes',
  nl: 'Veelgestelde vragen',
  da: 'Ofte stillede spørgsmål',
  sv: 'Vanliga frågor',
  nb: 'Vanlige spørsmål',
  ru: 'Частые вопросы',
};

type Question = { name?: string; acceptedAnswer?: { text?: string } };

export default function FaqFromSchema({ faq, locale }: { faq: unknown; locale: string }) {
  const main = (faq as { mainEntity?: unknown } | null | undefined)?.mainEntity;
  if (!Array.isArray(main)) return null;

  const items = main
    .map((entry) => {
      const q = entry as Question;
      return { q: q.name ?? '', a: q.acceptedAnswer?.text ?? '' };
    })
    .filter((it) => it.q && it.a);

  if (items.length === 0) return null;

  const base = (locale || 'en').split('-')[0];
  const title = FAQ_TITLE[base] ?? FAQ_TITLE.en;

  return <RisorsaFaq title={title} items={items} />;
}
