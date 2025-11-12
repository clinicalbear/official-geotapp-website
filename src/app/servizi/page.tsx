export const runtime = 'edge';
import { RichText } from "@/components/rich-text";
import { ContactSection } from "@/components/sections/contact";
import { getSiteContent } from "@/lib/contentStore";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Servizi GeoTapp",
  description:
    "Dalla pianificazione delle riunioni alla fatturazione SaaS: scopri tutti i servizi che GeoTapp offre per accelerare il tuo team.",
};

export default async function ServicesPage() {
  const content = await getSiteContent();
  const services = content.servicesPage;

  return (
    <div className="bg-white text-slate-900">
      <section className="bg-slate-950/95 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <RichText
            as="p"
            html={services.hero.eyebrow}
            className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300"
          />
          <RichText
            as="h1"
            html={services.hero.title}
            className="mt-4 text-4xl font-semibold space-y-1"
          />
          <RichText html={services.hero.description} className="mt-4 text-base text-slate-300" />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          {services.services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-800 shadow-sm"
            >
              <RichText
                as="p"
                html={service.icon}
                className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-500"
              />
              <RichText
                as="h3"
                html={service.title}
                className="mt-3 text-2xl font-semibold text-slate-900"
              />
              <RichText html={service.description} className="mt-3 text-sm text-slate-600" />
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto grid max-w-5xl gap-6 px-6 md:grid-cols-2">
          {services.highlights.map((highlight) => (
            <article
              key={highlight.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-100"
            >
              <RichText
                as="h3"
                html={highlight.title}
                className="text-xl font-semibold text-white"
              />
              <RichText html={highlight.description} className="mt-3 text-sm text-slate-200" />
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 text-center text-slate-700">
        <div className="mx-auto max-w-3xl space-y-4 px-6">
          <RichText
            as="p"
            html={services.cta.title}
            className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-500"
          />
          <RichText html={services.cta.description} className="text-3xl font-semibold text-slate-900" />
          <a
            href={services.cta.primaryHref}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg"
          >
            <RichText as="span" html={services.cta.primaryLabel} />
          </a>
        </div>
      </section>

      <ContactSection contact={content.contact} />
    </div>
  );
}
