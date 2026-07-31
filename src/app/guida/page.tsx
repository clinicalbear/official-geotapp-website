'use client';

/**
 * Guida utente, nella direzione L.
 * docs/redesign-sito-2026-07/esplorazione/guida.html
 * Il contenuto resta quello vero (guida-utente.md + dict.guida): cambia
 * solo come e' vestito. Sommario a fili costruito dai titoli reali del
 * documento, non da un indice inventato.
 */

import { useState, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocaleFromPathname } from '@/lib/i18n/locale-routing';
import './l-page.css';

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

  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/guida-utente.md')
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  const handleDownload = () => {
    window.print();
  };

  /* il sommario a fili: i titoli veri del documento (## …), non un indice inventato */
  const headings = useMemo(() => {
    const matches = [...content.matchAll(/^##\s+(.+)$/gm)];
    return matches.map((m) => ({ text: m[1].trim(), id: slugify(m[1]) }));
  }, [content]);

  const components: Components = {
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
              <p className="k" style={{ color: '#78836F', marginBottom: 14 }}>{g.page_title}</p>
              {headings.map((h) => (
                <a key={h.id} href={`#${h.id}`}>{h.text}</a>
              ))}
            </aside>
            <div className="body r d1">
              <ReactMarkdown components={components}>{content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
