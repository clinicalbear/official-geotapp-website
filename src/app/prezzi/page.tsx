import { RichText } from "@/components/rich-text";
import { ContactSection } from "@/components/sections/contact";
import { SocialProofSection } from "@/components/sections/social-proof";
import { getSiteContent } from "@/lib/contentStore";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Prezzi GeoTapp",
  description:
    "Consulta i piani attivi e prepara l’integrazione con Stripe e Django prima del go-live.",
};

export default async function PricingPage() {
  const content = await getSiteContent();
  const pricingContent = content.pricingPage;

  return (
    <div className="bg-white text-slate-900">
      <section className="bg-slate-950/95 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <RichText
            as="p"
            html={pricingContent.hero.eyebrow}
            className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300"
          />
          <RichText
            as="h1"
            html={pricingContent.hero.title}
            className="mt-4 text-4xl font-semibold space-y-1"
          />
          <RichText html={pricingContent.hero.description} className="mt-4 text-base text-slate-300" />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-3">
          {pricingContent.tiers.map((tier) => (
            <article
              key={tier.name}
              className={`rounded-3xl border p-6 ${
                tier.emphasized
                  ? "border-slate-900 bg-slate-900 text-white shadow-2xl"
                  : "border-slate-200 bg-slate-50 text-slate-900 shadow-sm"
              }`}
            >
              <RichText
                as="p"
                html={tier.cadence}
                className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-500"
              />
              <RichText
                as="h3"
                html={tier.name}
                className="mt-2 text-3xl font-semibold"
              />
              <RichText
                html={tier.description}
                className="mt-2 text-sm opacity-80 [&>*]:my-1"
              />
              <RichText as="p" html={tier.price} className="mt-6 text-4xl font-semibold" />
              <ul className="mt-4 space-y-2 text-sm">
                {tier.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-sky-500" />
                    <RichText as="span" html={highlight} />
                  </li>
                ))}
              </ul>
              <a
                href={tier.ctaHref}
                className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold ${
                  tier.emphasized
                    ? "bg-white text-slate-900"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                <RichText as="span" html={tier.ctaLabel} />
              </a>
            </article>
          ))}
        </div>
        <RichText
          html={pricingContent.note}
          className="mx-auto mt-6 max-w-4xl px-6 text-center text-sm text-slate-500"
        />
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl space-y-6 px-6">
          <h2 className="text-3xl font-semibold text-slate-900">FAQ sui prezzi</h2>
          <div className="space-y-4">
            {pricingContent.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                <RichText
                  html={faq.answer}
                  className="mt-2 text-sm text-slate-600 [&>*]:my-1 text-left"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <SocialProofSection socialProof={content.socialProof} />
      <ContactSection contact={content.contact} />
    </div>
  );
}
