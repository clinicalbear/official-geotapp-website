import { SectionMedia } from "@/components/section-media";
import { RichText } from "@/components/rich-text";
import type { SiteContent } from "@/lib/siteContentSchema";

const PLACEHOLDER_MARKERS = ["lorem ipsum"];
const PLACEHOLDER_REGEX = /lorem(?:\s|&nbsp;|<[^>]+>)+ipsum/i;

function cleanHtml(html?: string | null): string {
  if (!html) return "";
  const lower = html.toLowerCase();

  const cutAt = PLACEHOLDER_MARKERS.reduce((idx, marker) => {
    const found = lower.indexOf(marker);
    return found >= 0 ? (idx === -1 ? found : Math.min(idx, found)) : idx;
  }, -1);

  const regexMatch = cutAt === -1 ? lower.match(PLACEHOLDER_REGEX) : null;
  const placeholderIndex = cutAt >= 0 ? cutAt : regexMatch?.index ?? -1;

  if (placeholderIndex === -1) return html;

  return placeholderIndex > 0 ? html.slice(0, placeholderIndex).trim() : "";
}

export function ParallaxShowcase({ parallax }: { parallax: SiteContent["parallax"] }) {
  return (
    <section className="relative isolate bg-slate-950 text-white" id="parallax">
      <div className="absolute inset-0 bg-slate-950/80" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${parallax.texture})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 lg:min-h-screen will-change-transform">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:sticky lg:top-48 lg:bg-white/10">
            <RichText
              as="p"
              html={cleanHtml(parallax.eyebrow)}
              className="text-sm font-semibold uppercase tracking-[0.4em] text-sky-300"
            />
            <RichText
              as="h2"
              html={cleanHtml(parallax.title)}
              className="text-3xl font-semibold text-white space-y-1"
            />
            <RichText html={cleanHtml(parallax.description)} className="text-base text-slate-200 space-y-2" />
            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              {parallax.stickyHighlights.map((highlight) => (
                <div key={highlight.title}>
                  <RichText
                    as="p"
                    html={cleanHtml(highlight.title)}
                    className="text-lg font-semibold text-white"
                  />
                  <RichText html={cleanHtml(highlight.detail)} className="text-sm text-slate-300 space-y-1" />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6 lg:pr-2">
            {parallax.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_40px_rgba(8,47,73,0.25)] lg:min-h-[420px]"
              >
                {card.pill && (
                  <RichText
                    as="span"
                    html={cleanHtml(card.pill)}
                    className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300"
                  />
                )}
                <RichText
                  as="h3"
                  html={cleanHtml(card.title)}
                  className="mt-2 text-2xl font-semibold text-white space-y-1"
                />
                <RichText html={cleanHtml(card.detail)} className="mt-3 text-base text-slate-200 space-y-2" />
              </article>
            ))}
          </div>
        </div>
        {(parallax.media || parallax.postMediaCopy) && (
          <div className="mt-10 space-y-4">
            {parallax.media && <SectionMedia media={parallax.media} variant="dark" />}
            {parallax.postMediaCopy && (
              <RichText
                html={cleanHtml(parallax.postMediaCopy)}
                className="text-base text-slate-200 space-y-2"
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
