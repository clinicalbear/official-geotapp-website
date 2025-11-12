/* eslint-disable @next/next/no-img-element */
import type { SiteContent } from "@/lib/siteContentSchema";

type Branding = SiteContent["branding"];

export function SiteFooter({ branding }: { branding?: Branding }) {
  const year = new Date().getFullYear();
  const baseWidth = Math.min(Math.max(branding?.logoWidth ?? 160, 80), 240);
  const footerLogoWidth = Math.min(Math.max(Math.round(baseWidth * 0.6), 56), 160);
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          {branding?.logoDataUrl ? (
            <img
              src={branding.logoDataUrl}
              alt={branding.logoAlt}
              className="object-contain"
              style={{ width: `${footerLogoWidth}px`, height: "auto" }}
            />
          ) : (
            <div
              className="flex items-center justify-center rounded-2xl text-lg font-semibold"
              style={{
                width: `${footerLogoWidth}px`,
                minHeight: "48px",
                backgroundColor: branding?.accentColor ?? "#0ea5e9",
                color: "#0f172a",
              }}
            >
              GT
            </div>
          )}
          <div>
            <p className="text-lg font-semibold text-white">GeoTapp</p>
            <p className="text-sm text-slate-400">
              Operazioni, pagamenti e scheduling in sincronia.
            </p>
          </div>
        </div>
        <p className="text-xs text-slate-500">© {year} GeoTapp. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}
