
import { localizePath } from '@/lib/i18n/locale-routing';
import type { AppLocale } from '@/lib/i18n/config';
import './l-page.css';

type LegalSlug = 'privacy' | 'terms' | 'cookies';

type LegalMarkdownPageProps = {
  markdownContent: string;
  title: string;
  subtitle: string;
  /** Meta description gia' esistente nella pagina (SEO): riusata come lede visibile. */
  description?: string;
  /** Quale dei tre documenti e' questo, per il sommario e per segnare "on". */
  slug: LegalSlug;
  locale: AppLocale;
};

/**
 * Le stesse etichette gia' scritte, per ciascuna lingua, dentro
 * privacy/page.tsx, terms/page.tsx e cookies/page.tsx (campo pageTitle
 * delle rispettive META). Copiate qui verbatim solo per poter mostrare,
 * nel sommario di UN documento, il titolo reale degli ALTRI due: nessun
 * testo nuovo, solo la stessa stringa gia' esistente resa raggiungibile
 * da chi la deve linkare.
 */
const LEGAL_NAV_LABELS: Record<LegalSlug, Record<string, string>> = {
  privacy: {
    it: 'Informativa Privacy', en: 'Privacy Policy', de: 'Datenschutzerklärung',
    fr: 'Politique de confidentialité', es: 'Política de privacidad', pt: 'Política de privacidade',
    nl: 'Privacybeleid', da: 'Privatlivspolitik', nb: 'Personvernerklæring',
    sv: 'Integritetspolicy', ru: 'Политика конфиденциальности',
  },
  terms: {
    it: 'Termini di Servizio', en: 'Terms of Use', de: 'Nutzungsbedingungen',
    fr: "Conditions d'utilisation", es: 'Condiciones de uso', pt: 'Termos de utilização',
    nl: 'Gebruiksvoorwaarden', da: 'Brugsvilkår', nb: 'Bruksvilkår',
    sv: 'Användarvillkor', ru: 'Условия использования',
  },
  cookies: {
    it: 'Informativa Cookie', en: 'Cookie Policy', de: 'Cookie-Richtlinie',
    fr: 'Politique de cookies', es: 'Política de cookies', pt: 'Política de cookies',
    nl: 'Cookiebeleid', da: 'Cookiepolitik', nb: 'Retningslinjer for informasjonskapsler',
    sv: 'Cookiepolicy', ru: 'Политика использования файлов cookie',
  },
};

const LEGAL_ROUTES: Record<LegalSlug, string> = {
  privacy: '/privacy',
  terms: '/terms',
  cookies: '/cookies',
};

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Minimal markdown → HTML converter for legal pages.
 * Handles: headings (H1-H3), bold, italic, links, horizontal rules,
 * unordered/ordered lists, blockquotes, tables, and paragraphs.
 * No external dependencies, safe in all runtimes including Cloudflare Workers.
 *
 * Gli h2 ricevono un id (slug del titolo vero) per poter essere raggiunti
 * dal sommario: e' solo un attributo aggiunto al markup, il testo e
 * l'ordine delle clausole restano quelli originali.
 */
function markdownToHtml(md: string): { html: string; headings: { id: string; text: string }[] } {
  const lines = md.split('\n');
  const out: string[] = [];
  const headings: { id: string; text: string }[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Heading
    const hMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (hMatch) {
      const level = hMatch[1].length;
      const text = hMatch[2];
      if (level === 2) {
        const id = slugifyHeading(text);
        headings.push({ id, text: text.replace(/\*\*/g, '') });
        out.push(`<h${level} id="${id}">${inlineFormat(text)}</h${level}>`);
      } else {
        out.push(`<h${level}>${inlineFormat(text)}</h${level}>`);
      }
      i++; continue;
    }

    // Horizontal rule
    if (/^---+$/.test(line.trim())) {
      out.push('<hr/>');
      i++; continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      const content = line.slice(2);
      out.push(`<blockquote>${inlineFormat(content)}</blockquote>`);
      i++; continue;
    }

    // Unordered list
    if (/^[-*]\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s/.test(lines[i])) {
        items.push(`<li>${inlineFormat(lines[i].replace(/^[-*]\s/, ''))}</li>`);
        i++;
      }
      out.push(`<ul>${items.join('')}</ul>`);
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(`<li>${inlineFormat(lines[i].replace(/^\d+\.\s/, ''))}</li>`);
        i++;
      }
      out.push(`<ol>${items.join('')}</ol>`);
      continue;
    }

    // Table, collect all rows
    if (line.includes('|') && lines[i + 1]?.match(/^\|[-| :]+\|/)) {
      const rows: string[] = [];
      const headerCells = line.split('|').filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
      rows.push(`<thead><tr>${headerCells.map(c => `<th>${inlineFormat(c.trim())}</th>`).join('')}</tr></thead>`);
      i += 2; // skip header + separator
      const bodyRows: string[] = [];
      while (i < lines.length && lines[i].includes('|')) {
        const cells = lines[i].split('|').filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
        bodyRows.push(`<tr>${cells.map(c => `<td>${inlineFormat(c.trim())}</td>`).join('')}</tr>`);
        i++;
      }
      if (bodyRows.length) rows.push(`<tbody>${bodyRows.join('')}</tbody>`);
      out.push(`<table>${rows.join('')}</table>`);
      continue;
    }

    // Empty line → paragraph break (skip)
    if (line.trim() === '') {
      i++; continue;
    }

    // Paragraph, collect consecutive non-special lines.
    // Uses specific prefix checks so bold lines like "**Note:**" are
    // treated as paragraph text and not skipped (preventing infinite loops).
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].match(/^#{1,6}\s/) &&
      !lines[i].startsWith('> ') &&
      !/^[-*]\s/.test(lines[i]) &&
      !/^\d+\.\s/.test(lines[i]) &&
      !lines[i].includes('|') &&
      !lines[i].match(/^---+$/)
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length) {
      out.push(`<p>${inlineFormat(paraLines.join(' '))}</p>`);
    } else {
      // Safety: if no condition matched and nothing was consumed, skip the
      // line to prevent an infinite loop on unexpected input (e.g. bare `|`).
      i++;
    }
  }

  return { html: out.join('\n'), headings };
}

function inlineFormat(text: string): string {
  return text
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>');
}

export function LegalMarkdownPage({
  markdownContent,
  title,
  subtitle,
  description,
  slug,
  locale,
}: LegalMarkdownPageProps) {
  const { html, headings } = markdownToHtml(markdownContent);
  const docOrder: LegalSlug[] = ['privacy', 'terms', 'cookies'];

  return (
    <div className="lp-l lp-legale">
      <section className="ph">
        <div className="w">
          <h1>{title}</h1>
          {description ? <p className="lede">{description}</p> : null}
        </div>
      </section>

      <section className="sec">
        <div className="w">
          <div className="gl">
            <aside className="side r">
              <p className="k" style={{ color: '#78836F', marginBottom: 14 }}>{title}</p>
              {docOrder.map((s) => (
                <a
                  key={s}
                  href={localizePath(LEGAL_ROUTES[s], locale)}
                  className={s === slug ? 'on' : undefined}
                >
                  {LEGAL_NAV_LABELS[s][locale] ?? LEGAL_NAV_LABELS[s].en}
                </a>
              ))}
              {headings.length > 0 && (
                <div style={{ marginTop: 26, paddingTop: 18, borderTop: '1px solid rgba(14,14,12,.14)' }}>
                  {headings.map((h) => (
                    <a key={h.id} href={`#${h.id}`} style={{ fontSize: 13 }}>{h.text}</a>
                  ))}
                </div>
              )}
            </aside>
            <div className="body r d1">
              <span className="upd">{subtitle}</span>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
