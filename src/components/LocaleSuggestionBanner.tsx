'use client';

/**
 * Suggerisce la versione italiana a chi arriva su una pagina EN (generica o
 * regionale: en-us, en-gb, en-au, en-ie, en-ca) con il browser in italiano.
 * Copre il caso che il redirect geo del middleware non tocca di proposito:
 * un URL /en/ (o /en-us/, /en-gb/...) esplicito non viene mai rediretto
 * altrove, per non rompere hreflang/SEO. Qui la scelta resta dell'utente:
 * nessun redirect automatico, solo un suggerimento dismissibile.
 */

import { useEffect, useState } from 'react';
import Link from 'next/link';

const SESSION_KEY = 'gtapp_locale_banner_dismissed';

export default function LocaleSuggestionBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      /* private mode, ignore */
    }
    const lang = navigator.language ?? '';
    if (lang.toLowerCase().startsWith('it')) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      /* private mode, ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="w-full bg-brand-blue/[0.06] border-b border-brand-blue/20 px-4 py-2 flex items-center justify-center gap-3 text-sm text-slate-700">
      <span>Stai cercando GeoTapp in italiano?</span>
      <Link
        href="/it/"
        onClick={dismiss}
        className="font-semibold text-brand-blue hover:underline whitespace-nowrap"
      >
        Vai alla versione italiana →
      </Link>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Chiudi"
        className="ml-2 text-slate-400 hover:text-slate-600 text-lg leading-none"
      >
        ×
      </button>
    </div>
  );
}
