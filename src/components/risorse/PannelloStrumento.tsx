import { getPannello } from '@/lib/risorse/pannello-strumento';
import type { PannelloToolKey } from '@/lib/risorse/pannello-strumento';

/**
 * Colonna destra della griglia .tool degli strumenti risorse: titolo +
 * spiegazione di cosa fa lo strumento e perché serve. Server component,
 * testi in 11 lingue da pannello-strumento.ts.
 */
export default function PannelloStrumento({
  tool,
  locale,
}: {
  tool: PannelloToolKey;
  locale: string;
}) {
  const c = getPannello(tool, locale);
  return (
    <aside className="tside r d1">
      <h2>{c.title}</h2>
      <p>{c.p1}</p>
      <p>{c.p2}</p>
    </aside>
  );
}
