/* eslint-disable @next/next/no-img-element */

type SectionMediaProps = {
  media?: {
    image?: string;
    video?: string;
    caption?: string;
    alt?: string;
  };
  variant?: "light" | "dark";
};

export function SectionMedia({ media, variant = "light" }: SectionMediaProps) {
  if (!media || (!media.image && !media.video)) {
    return null;
  }

  const isDark = variant === "dark";

  return (
    <div
      className={`rounded-3xl border p-4 ${
        isDark
          ? "border-white/10 bg-white/5 text-slate-200"
          : "border-slate-200 bg-white text-slate-600"
      }`}
    >
      <div className="overflow-hidden rounded-2xl border border-current/10">
        {media.video ? (
          <video
            src={media.video}
            className="h-full w-full object-cover"
            controls
            playsInline
            loop
            muted
          />
        ) : (
          <img
            src={media.image}
            alt={media.alt ?? "Anteprima sezione GeoTapp"}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      {media.caption && (
        <p className={`mt-3 text-sm ${isDark ? "text-slate-300" : "text-slate-500"}`}>
          {media.caption}
        </p>
      )}
    </div>
  );
}
