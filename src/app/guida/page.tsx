'use client';

/**
 * Guida utente, nella direzione L.
 * docs/redesign-sito-2026-07/esplorazione/guida.html
 * Il contenuto resta quello vero (guida-utente.md + dict.guida): cambia
 * solo come e' vestito. Sommario a fili costruito dai titoli reali del
 * documento, non da un indice inventato.
 */

import { useMemo } from 'react';
import { guidaPer } from '@/content/guida';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocaleFromPathname } from '@/lib/i18n/locale-routing';
import VideoTutorial from '@/components/VideoTutorial';
import './l-page.css';

/** I riquadri del manuale (`:::nota` ... `:::`) diventano citazioni con l'etichetta in grassetto. */
function riquadri(md: string, g: { box_note?: string; box_warning?: string; box_tip?: string }): string {
  const etichetta: Record<string, string> = {
    nota: g.box_note ?? 'Nota',
    attenzione: g.box_warning ?? 'Attenzione',
    suggerimento: g.box_tip ?? 'Suggerimento',
  };
  return md.replace(/^:::(\w+)\n([\s\S]*?)\n:::$/gm, (_m, tipo: string, corpo: string) =>
    corpo
      .split('\n')
      .map((riga, i) => `> ${i === 0 ? `**${etichetta[tipo] ?? tipo}.** ` : ''}${riga}`)
      .join('\n'),
  );
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function GuidePage() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const g = getDictionary(locale).guida;

  // La guida nella lingua della pagina, gia' nel bundle: niente fetch, e il testo c'e'
  // anche per chi legge la pagina senza eseguire JavaScript.
  const content = useMemo(() => riquadri(guidaPer(locale ?? 'it'), g), [locale, g]);

  const handleDownload = () => {
    window.print();
  };

  /* il sommario a fili: i titoli veri del documento (## …), non un indice inventato */
  const headings = useMemo(() => {
    const matches = [...content.matchAll(/^##\s+(.+)$/gm)];
    return matches.map((m) => ({ text: m[1].trim(), id: slugify(m[1]) }));
  }, [content]);

  const components: Components = {
    /* la H1 della pagina e' nella testata: il titolo del markdown scende a h2 per non duplicare il tag */
    h1: ({ children }) => <h2>{children}</h2>,
    h2: ({ children }) => {
      const text = String(Array.isArray(children) ? children.join('') : children);
      return <h2 id={slugify(text)}>{children}</h2>;
    },
  };

  return (
    <div className="lp-l lp-guida">
      <section className="ph">
        <div className="w">
          <h1>{g.page_title}</h1>
          <div className="acts">
            <button type="button" className="b1" onClick={handleDownload}>
              {g.download_pdf}
            </button>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="w">
          <div className="gl">
            <aside className="side r">
              <p className="k" style={{ color: '#475467', marginBottom: 14 }}>{g.page_title}</p>
              {headings.map((h) => (
                <a key={h.id} href={`#${h.id}`}>{h.text}</a>
              ))}
            </aside>
            <div className="body r d1">
              {/* In cima alla guida scritta, non in fondo: chi arriva qui ha
                  gia' una domanda, e due minuti guardati costano meno di
                  quaranta pagine lette. La guida resta sotto, intera. */}
              <VideoTutorial
                locale={locale}
                className="mb-12 print:hidden"
              />
              <ReactMarkdown components={components}>{content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
