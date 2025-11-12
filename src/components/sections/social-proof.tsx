/* eslint-disable @next/next/no-img-element */
import { RichText } from "@/components/rich-text";
import type { SiteContent } from "@/lib/siteContentSchema";

export function SocialProofSection({ socialProof }: { socialProof: SiteContent["socialProof"] }) {
  return (
    <section className="bg-white" id="trust">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-3 text-center">
          <RichText
            html={socialProof.subtitle}
            className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500"
          />
          <RichText
            as="h2"
            html={socialProof.title}
            className="text-3xl font-semibold text-slate-900 space-y-1"
          />
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 opacity-80">
          {socialProof.logos.map((logo) => (
            <img
              key={logo}
              src={logo}
              alt="Logo partner"
              className="h-10 w-auto grayscale transition hover:grayscale-0"
            />
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {socialProof.testimonials.map((testimonial) => (
            <article
              key={testimonial.quote}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-700 shadow-sm"
            >
              <RichText html={testimonial.quote} className="text-lg font-medium text-slate-900" />
              <div className="mt-4 flex items-center gap-3">
                {testimonial.avatar && (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <RichText
                    as="p"
                    html={testimonial.author}
                    className="text-sm font-semibold text-slate-900"
                  />
                  <RichText
                    as="p"
                    html={testimonial.role}
                    className="text-xs text-slate-500"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
