'use client';

import { MapPin } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocaleFromPathname } from '@/lib/i18n/locale-routing';

// Coordinate sede GeoTapp — Trenzano (BS)
const LAT = 45.4771587;
const LNG = 10.0041003;

interface LocationMapProps {
  apiKey: string;
}

export default function LocationMap({ apiKey }: LocationMapProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const d = getDictionary(locale).contact;

  if (!apiKey || apiKey === 'YOUR_MAPS_API_KEY') {
    return (
      <div
        className="w-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center gap-3 text-slate-400"
        style={{ height: 420 }}
      >
        <MapPin size={32} className="text-slate-300" />
        <p className="text-sm font-medium">{d.map_unavailable}</p>
        <a
          href={`https://maps.google.com/?q=${LAT},${LNG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-primary underline underline-offset-2"
        >
          {d.open_maps}
        </a>
      </div>
    );
  }

  const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${LAT},${LNG}&zoom=15`;

  return (
    <div
      className="w-full rounded-2xl overflow-hidden border border-border shadow-lg"
      style={{ height: 450 }}
    >
      <iframe
        title="GeoTapp — Trenzano (BS)"
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
