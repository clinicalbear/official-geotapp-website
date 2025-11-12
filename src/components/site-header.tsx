import { RichText } from "@/components/rich-text";
import type { SiteContent } from "@/lib/siteContentSchema";

const navigation = [
  { label: "Servizi", href: "/servizi" },
  { label: "Prezzi", href: "/prezzi" },
  { label: "Chi siamo", href: "/chi-siamo" },
];

type Branding = SiteContent["branding"];

export function SiteHeader({ branding }: { branding?: Branding }) {
  const accent = branding?.accentColor ?? "#0ea5e9";
  const logoWidth = Math.min(Math.max(branding?.logoWidth ?? 160, 80), 240);
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <a
          href={branding?.logoHref ?? "/"}
          className="group inline-flex flex-shrink-0 items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
        >
          {branding?.logoDataUrl ? (
            <span className="inline-flex flex-shrink-0" style={{ width: `${logoWidth}px` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={branding.logoDataUrl}
                alt={branding.logoAlt}
                className="h-auto w-full object-contain"
              />
            </span>
          ) : (
            <span
              className="inline-flex flex-shrink-0 items-center justify-center rounded-2xl text-base font-semibold"
              style={{
                width: `${logoWidth}px`,
                minHeight: "56px",
                backgroundColor: accent,
                color: "#0f172a",
              }}
              aria-hidden="true"
            >
              GT
            </span>
          )}
          <span className="flex flex-col space-y-1 text-left">
            {branding?.titleHtml ? (
              <RichText
                html={branding.titleHtml}
                as="span"
                className="text-lg font-semibold tracking-tight"
                allowedTags={["span", "strong", "b", "em", "i", "u", "small", "sup", "sub", "mark", "br"]}
              />
            ) : (
              <span className="text-lg font-semibold tracking-tight">GeoTapp</span>
            )}
            {branding?.subtitleHtml ? (
              <RichText
                html={branding.subtitleHtml}
                as="span"
                className="text-xs uppercase tracking-[0.4em] text-slate-300"
                allowedTags={["span", "strong", "b", "em", "i", "u", "small", "sup", "sub", "mark", "br"]}
              />
            ) : (
              <span className="text-xs uppercase tracking-[0.4em] text-slate-300">
                Official Website
              </span>
            )}
          </span>
        </a>
        <nav className="ml-auto hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
