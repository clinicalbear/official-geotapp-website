import { ChevronDown } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';

export interface RisorsaFaqItem {
  q: string;
  a: string;
}

export interface RisorsaFaqProps {
  title: string;
  items: RisorsaFaqItem[];
}

/**
 * FAQ ad accordion (domanda visibile, risposta collassabile) + JSON-LD FAQPage
 * per le pagine /risorse. Usa <details>/<summary> nativi: nessun JS lato client,
 * resta un server component e la risposta resta nel DOM (leggibile da Google
 * anche da chiusa). Il blocco `faq` arriva dal dizionario per-locale
 * (getDictionary(locale).<pagina>.faq); se manca o è vuoto non renderizza nulla.
 */
export default function RisorsaFaq({ title, items }: RisorsaFaqProps) {
  if (!items || items.length === 0) return null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };

  return (
    <section className="px-6 py-16 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
          {title}
        </h2>
        <div className="space-y-3">
          {items.map((it, i) => (
            <details
              key={i}
              className="group rounded-xl border border-slate-200 bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                <span>{it.q}</span>
                <ChevronDown
                  size={20}
                  className="shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-6">
                <p className="text-sm leading-relaxed text-slate-600">{it.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqSchema} />
    </section>
  );
}
