import { SectionMedia } from "@/components/section-media";
import { RichText } from "@/components/rich-text";
import type { SiteContent } from "@/lib/siteContentSchema";

export function PricingSection({ pricing }: { pricing: SiteContent["pricing"] }) {
  const highlightBg = pricing.highlightBackgroundColor ?? "#0f172a";
  const highlightText = pricing.highlightTextColor ?? "#ffffff";

  return (
    <section className="bg-slate-50" id="pricing">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-4 text-center">
          <RichText
            html={pricing.subtitle}
            className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 space-y-1"
          />
          <RichText
            as="h2"
            html={pricing.title}
            className="text-3xl font-semibold text-slate-900 space-y-1"
          />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricing.tiers.map((tier) => {
            const isEmphasized = Boolean(tier.emphasized);
            const cardClass = `flex flex-col gap-4 rounded-3xl border p-6 ${
              isEmphasized
                ? "shadow-[0_25px_70px_rgba(15,23,42,0.4)]"
                : "border-slate-200 bg-white text-slate-900 shadow-sm"
            }`;
            const cardStyle = isEmphasized
              ? { backgroundColor: highlightBg, color: highlightText, borderColor: highlightBg }
              : undefined;

            return (
              <article key={tier.name} className={cardClass} style={cardStyle}>
                <div>
                  <RichText
                    as="p"
                    html={tier.name}
                    className="text-sm font-semibold uppercase tracking-[0.3em]"
                  />
                  <RichText
                    as="p"
                    html={tier.price}
                    className="mt-3 text-3xl font-semibold"
                  />
                  <RichText as="p" html={tier.cadence} className="text-sm opacity-80" />
                </div>
                <div style={tier.emphasized ? { color: highlightText, opacity: 0.9 } : undefined}>
                  <RichText
                    html={tier.description}
                    className={`text-base ${tier.emphasized ? "" : "text-slate-600"}`}
                  />
                </div>
                <ul className="space-y-2 text-sm">
                  {tier.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className={`mt-1 h-2 w-2 rounded-full ${
                          tier.emphasized ? "" : "bg-emerald-400"
                        }`}
                        style={tier.emphasized ? { backgroundColor: highlightText } : undefined}
                      />
                      <RichText as="span" html={item} />
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.ctaHref}
                  className={`mt-auto rounded-full px-5 py-2 text-center text-sm font-semibold ${
                    tier.emphasized
                      ? "bg-white text-slate-900"
                      : "border border-slate-300 text-slate-900"
                  }`}
                >
                  <RichText as="span" html={tier.ctaLabel} />
                </a>
              </article>
            );
          })}
        </div>
        {pricing.media && (
          <div className="mt-10">
            <SectionMedia media={pricing.media} />
          </div>
        )}
      </div>
    </section>
  );
}
