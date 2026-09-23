'use client';

/**
 * Dichiarazione di accessibilita'.
 *
 * Richiesta dall'European Accessibility Act (direttiva UE 2019/882) e, prima
 * ancora, da chi ci mette una gara pubblica davanti: e' la prima cosa che
 * cerca chi verifica, e fino al 23/09/2026 non esisteva.
 *
 * 🔴 Dice «parzialmente conforme», e lo dice apposta. Una dichiarazione che
 * promette conformita' piena senza una verifica manuale con lettore di schermo
 * e' una dichiarazione che cade alla prima obiezione. Qui si scrive cosa e'
 * stato provato, come, e cosa NON e' stato provato: il perimetro e' la parte
 * che regge.
 */

import { useParams } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';

/** Rende il **grassetto** del testo tradotto senza passare da un parser markdown. */
function ConGrassetto({ testo }: { testo: string }) {
  const parti = testo.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parti.map((p, i) => (i % 2 === 1 ? <strong key={i}>{p}</strong> : p))}
    </>
  );
}

export default function AccessibilitaPage() {
  const { locale } = useParams<{ locale: string }>();
  const t = getDictionary(locale as AppLocale).accessibilita;

  const sezioni = [
    [t.stato_t, t.stato],
    [t.fatto_t, t.fatto],
    [t.limiti_t, t.limiti],
    [t.metodo_t, t.metodo],
    [t.segnala_t, t.segnala],
    [t.data_t, t.data],
  ] as const;

  return (
    <article className="sec">
      <div className="w" style={{ maxWidth: '72ch' }}>
        <h1>{t.title}</h1>
        <p style={{ marginBottom: 32 }}>{t.intro}</p>

        {sezioni.map(([titolo, corpo]) => (
          <section key={titolo} style={{ marginBottom: 28 }}>
            <h2 style={{ marginBottom: 10 }}>{titolo}</h2>
            <p><ConGrassetto testo={corpo} /></p>
          </section>
        ))}
      </div>
    </article>
  );
}
