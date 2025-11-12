import { RichText } from "@/components/rich-text";
import type { SiteContent } from "@/lib/siteContentSchema";

export function MetricsSection({ metrics }: { metrics: SiteContent["metrics"] }) {
  return (
    <section className="bg-white" id="metrics">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <RichText
                html={metric.value}
                className="text-4xl font-semibold text-slate-900 space-y-1"
              />
              <RichText
                html={metric.label}
                className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500"
              />
              <RichText
                html={metric.detail}
                className="mt-4 text-base text-slate-600 space-y-1"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
