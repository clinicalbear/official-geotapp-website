//          Renders a <script type="application/ld+json"> tag for Schema.org data.
//          Must be used only in Server Components (no 'use client').

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
