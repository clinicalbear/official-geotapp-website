import type { RegionalBlock } from '@/content/regional-pages';

/**
 * Blocco di testo per paese delle varianti inglesi regionali. Rende null se non c'e'
 * un blocco (tutte le altre lingue). Stile proprio, chiaro, per stare su qualunque
 * sfondo di pagina senza dipendere dal CSS della pagina che lo ospita.
 * Testi e fonti: src/content/regional-pages.ts.
 */
export default function RegionalNote({ block }: { block: RegionalBlock | null | undefined }) {
  if (!block) return null;
  return (
    <section
      aria-label={block.title}
      style={{ maxWidth: 820, margin: '48px auto', padding: '0 20px' }}
    >
      <div
        style={{
          background: '#fff',
          border: '1px solid #E4E7EC',
          borderRadius: 12,
          padding: '28px 28px 14px',
          color: '#344054',
        }}
      >
        <h2 style={{ fontSize: 22, lineHeight: 1.3, margin: '0 0 14px', color: '#101828' }}>{block.title}</h2>
        {block.paras.map((para, i) => (
          <p key={i} style={{ fontSize: 16, lineHeight: 1.65, margin: '0 0 14px' }}>
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}
