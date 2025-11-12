import { SectionMedia } from "@/components/section-media";
import { RichText } from "@/components/rich-text";
import type { SiteContent } from "@/lib/siteContentSchema";

type FeatureCluster = SiteContent["featureCluster"];

const ICONS: Record<string, JSX.Element> = {
  calendar: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        d="M7 3v4M17 3v4M4 9h16M6 7h12a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V9a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),
  payments: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
      />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="9" cy="15" r="1" fill="currentColor" />
      <circle cx="13" cy="15" r="1" fill="currentColor" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="5" r="2" fill="currentColor" />
      <circle cx="5" cy="12" r="2" fill="currentColor" />
      <circle cx="12" cy="19" r="2" fill="currentColor" />
      <circle cx="19" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
};

export function FeatureGrid({ featureCluster }: { featureCluster: FeatureCluster }) {
  return (
    <section className="bg-slate-50" id="features">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-4 text-center md:text-left">
          <RichText
            as="p"
            html={featureCluster.title}
            className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500"
          />
          <RichText
            html={featureCluster.intro}
            className="text-3xl font-semibold text-slate-900 space-y-2"
          />
        </div>
        {featureCluster.media && (
          <div className="mt-10">
            <SectionMedia media={featureCluster.media} />
          </div>
        )}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featureCluster.items.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 text-slate-700">
                <span className="rounded-xl bg-slate-900/90 p-3 text-white">
                  {ICONS[feature.icon] ?? ICONS.automation}
                </span>
                <RichText
                  as="span"
                  html={feature.pill}
                  className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500"
                />
              </div>
              <RichText
                as="h3"
                html={feature.title}
                className="text-xl font-semibold text-slate-900 space-y-1"
              />
              <RichText html={feature.description} className="text-base text-slate-600 flex-1" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
