import type * as React from "react";
import { SectionMedia } from "@/components/section-media";
import { RichText } from "@/components/rich-text";
import type { SiteContent } from "@/lib/siteContentSchema";

type HowItWorks = SiteContent["howItWorks"];

const ICONS: Record<string, React.ReactElement> = {
  "step-1": (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "step-2": (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L3 13.17V3h10.17l7.42 7.42a2 2 0 010 2.83z"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
      />
      <line x1="7" y1="7" x2="7" y2="7" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  "step-3": (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        d="M22 12h-4l-3 9L9 3l-3 9H2"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export function HowItWorks({ howItWorks }: { howItWorks: HowItWorks }) {
  return (
    <section className="bg-white" id="how-it-works">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-4 text-center">
          <RichText
            as="h2"
            html={howItWorks.title}
            className="text-3xl font-semibold text-slate-900"
          />
          <RichText
            html={howItWorks.intro}
            className="text-lg text-slate-600"
          />
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {howItWorks.steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-slate-900/90 text-white">
                  {ICONS[`step-${index + 1}`] ?? ICONS["step-1"]}
                </div>
              </div>
              <div className="mt-4">
                <RichText
                  as="h3"
                  html={step.title}
                  className="text-lg font-medium text-slate-900"
                />
                <RichText
                  as="p"
                  html={step.description}
                  className="mt-2 text-base text-slate-600"
                />
              </div>
              {step.media && (
                <div className="mt-4 w-full">
                  <SectionMedia media={step.media} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
