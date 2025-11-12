import { RichText } from "@/components/rich-text";
import { ContactSection } from "@/components/sections/contact";
import { SocialProofSection } from "@/components/sections/social-proof";
import { getSiteContent } from "@/lib/contentStore";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Chi siamo | GeoTapp",
  description:
    "La storia del team GeoTapp, la roadmap condivisa con i clienti e i valori che guidano la piattaforma.",
};

export default async function AboutPage() {
  const content = await getSiteContent();
  const about = content.aboutPage;

  return (
    <div className="bg-white text-slate-900">
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 lg:flex-row lg:items-center">
          <div className="space-y-4">
            <RichText
              as="p"
              html={about.hero.eyebrow}
              className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300"
            />
            <RichText
              as="h1"
              html={about.hero.title}
              className="text-4xl font-semibold space-y-1"
            />
            <RichText html={about.hero.description} className="text-base text-slate-300 space-y-2" />
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-300">Team</p>
            <p className="mt-2 text-2xl font-semibold text-white">Always-on product</p>
            <RichText html={about.teamNote} className="mt-4 text-sm text-slate-300 space-y-2" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl gap-4 px-6 md:grid-cols-3">
          {about.values.map((value) => (
            <article
              key={value.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-700"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-500">
                Valore
              </p>
              <RichText
                as="h3"
                html={value.title}
                className="mt-2 text-xl font-semibold text-slate-900"
              />
              <RichText html={value.description} className="mt-2 text-sm" />
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-semibold">Timeline</h2>
          <div className="mt-6 space-y-4">
            {about.story.map((event) => (
              <article
                key={event.year}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100"
              >
                <RichText
                  as="p"
                  html={event.year}
                  className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300"
                />
                <RichText
                  as="h3"
                  html={event.title}
                  className="mt-2 text-xl font-semibold text-white"
                />
                <RichText html={event.description} className="mt-2 text-sm text-slate-200" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Team note</h2>
          <RichText html={about.teamNote} className="text-base text-slate-600 space-y-2" />
        </div>
      </section>

      <SocialProofSection socialProof={content.socialProof} />
      <ContactSection contact={content.contact} />
    </div>
  );
}
