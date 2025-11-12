import { SectionMedia } from "@/components/section-media";
import { RichText } from "@/components/rich-text";
import type { SiteContent } from "@/lib/siteContentSchema";

type HeroContent = SiteContent["hero"];

export function HeroSection({ hero }: { hero: HeroContent }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.45),_transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2">
        <div className="space-y-8">
          <RichText
            as="p"
            html={hero.eyebrow}
            className="text-sm font-semibold uppercase tracking-[0.4em] text-sky-400"
          />
          <RichText
            as="h1"
            html={hero.title}
            className="text-4xl font-semibold leading-tight text-white lg:text-5xl space-y-1"
          />
          <RichText html={hero.description} className="text-lg text-slate-300 space-y-2" />
          <RichText html={hero.supporting} className="text-base text-slate-400 space-y-2" />
          <div className="flex flex-wrap gap-4">
            <a
              href={hero.primaryCta.href}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              <RichText as="span" html={hero.primaryCta.label} />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              <RichText as="span" html={hero.secondaryCta.label} />
            </a>
          </div>
        </div>
        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.55)]">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <RichText as="span" html={hero.mediaBadge} />
          </div>
          {hero.media ? (
            <SectionMedia media={hero.media} variant="dark" />
          ) : (
            <div className="space-y-6 rounded-2xl bg-slate-900/70 p-6 backdrop-blur">
              <div className="grid grid-cols-3 gap-3 text-center text-xs text-slate-300">
                <div className="rounded-xl border border-white/10 p-3">
                  <p className="text-2xl font-semibold text-white">3</p>
                  <p>Moduli core</p>
                </div>
                <div className="rounded-xl border border-white/10 p-3">
                  <p className="text-2xl font-semibold text-white">8</p>
                  <p>Automazioni</p>
                </div>
                <div className="rounded-xl border border-white/10 p-3">
                  <p className="text-2xl font-semibold text-white">0</p>
                  <p>Code legacy</p>
                </div>
              </div>
            </div>
          )}
          <RichText html={hero.mediaCaption} className="mt-4 text-sm text-slate-300 space-y-1" />
        </div>
      </div>
    </section>
  );
}
