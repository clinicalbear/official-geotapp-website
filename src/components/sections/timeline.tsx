import { SectionMedia } from "@/components/section-media";
import { RichText } from "@/components/rich-text";
import type { SiteContent } from "@/lib/siteContentSchema";

export function TimelineSection({ timeline }: { timeline: SiteContent["timeline"] }) {
  return (
    <section className="bg-white" id="timeline">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-3 text-center">
          <RichText
            as="p"
            html={timeline.helper}
            className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500"
          />
          <RichText
            as="h2"
            html={timeline.title}
            className="text-3xl font-semibold text-slate-900 space-y-1"
          />
        </div>
        <div className="mt-12 space-y-6">
          {timeline.steps.map((step, index) => (
            <article
              key={step.title}
              className="grid gap-6 rounded-3xl border border-slate-200 p-6 shadow-sm md:grid-cols-3"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Step {index + 1}
                </p>
                <RichText
                  as="h3"
                  html={step.title}
                  className="mt-2 text-2xl font-semibold text-slate-900 space-y-1"
                />
              </div>
              <RichText html={step.description} className="text-base text-slate-600 md:col-span-2" />
              <RichText
                as="p"
                html={step.duration}
                className="text-sm font-medium text-slate-500"
              />
            </article>
          ))}
        </div>
        {timeline.media && (
          <div className="mt-10">
            <SectionMedia media={timeline.media} />
          </div>
        )}
      </div>
    </section>
  );
}
