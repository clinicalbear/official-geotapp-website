import { ContactForm } from "@/components/contact-form";
import { SectionMedia } from "@/components/section-media";
import { RichText } from "@/components/rich-text";
import type { SiteContent } from "@/lib/siteContentSchema";

export function ContactSection({ contact }: { contact: SiteContent["contact"] }) {
  return (
    <section className="bg-white" id="contact">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">
            Contattaci
          </p>
          <RichText
            as="h2"
            html={contact.title}
            className="text-3xl font-semibold text-slate-900 space-y-1"
          />
          <RichText html={contact.description} className="text-base text-slate-600 space-y-2" />
          <ul className="space-y-3 text-sm text-slate-500">
            {contact.details.map((detail) => (
              <li key={detail} className="flex items-center gap-3">
                <span className="h-1 w-6 rounded-full bg-slate-900" />
                <RichText as="span" html={detail} className="text-sm" />
              </li>
            ))}
          </ul>
          {contact.media && <SectionMedia media={contact.media} />}
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
