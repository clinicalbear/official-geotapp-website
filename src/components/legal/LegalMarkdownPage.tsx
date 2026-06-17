

type LegalMarkdownPageProps = {
  markdownContent: string;
  title: string;
  subtitle: string;
};

/**
 * Minimal markdown → HTML converter for legal pages.
 * Handles: headings (H1-H3), bold, italic, links, horizontal rules,
 * unordered/ordered lists, blockquotes, tables, and paragraphs.
 * No external dependencies, safe in all runtimes including Cloudflare Workers.
 */
function markdownToHtml(md: string): string {
  const lines = md.split('\n');
  const out: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Heading
    const hMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (hMatch) {
      const level = hMatch[1].length;
      out.push(`<h${level}>${inlineFormat(hMatch[2])}</h${level}>`);
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

  return out.join('\n');
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
}: LegalMarkdownPageProps) {
  const html = markdownToHtml(markdownContent);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-white text-slate-900">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-slate-500 mb-12">{subtitle}</p>

        <div
          className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-table:block prose-table:overflow-x-auto prose-th:text-left prose-td:align-top"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
