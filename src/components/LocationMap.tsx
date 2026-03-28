'use client';

import { MapPin } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLocaleFromPathname } from '@/lib/i18n/locale-routing';

// Coordinate sede GeoTapp — Trenzano (BS)
const LAT = 45.4771587;
const LNG = 10.0041003;
const ZOOM = 15;

// Free embed URL — no API key, no billing, no quota.
// Format derived from Google Maps share → Embed a map.
const MAP_SRC = `https://www.google.com/maps/embed?pb=!1m3!2m1!1s${LAT},${LNG}!6i${ZOOM}`;

interface LocationMapProps {
  apiKey?: string;
}

export default function LocationMap({ apiKey: _apiKey }: LocationMapProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const d = getDictionary(locale).contact;

  return (
    <div
      className="w-full rounded-2xl overflow-hidden border border-border shadow-lg"
      style={{ height: 450 }}
    >
      <iframe
        title="GeoTapp — Trenzano (BS)"
        src={MAP_SRC}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
