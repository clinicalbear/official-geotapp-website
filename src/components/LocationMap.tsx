'use client';

// LocationMap.tsx
// Mostra la sede GeoTapp (Trenzano, BS) tramite Google Maps Extended Component Library.
// I Web Components (gmpx-*, gmp-*) vengono caricati dinamicamente dopo il mount
// per non bloccare il rendering del form di contatto.
//
// Setup API Key:
//   1. Google Cloud Console → APIs & Services → Abilita: Maps JavaScript API + Places API
//   2. Crea una API Key con restrizione HTTP referrer: geotapp.com/*
//   3. Aggiungi NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<tua-chiave> nel file .env.local
//   4. Su Cloudflare: Workers → Settings → Variables → aggiungi la stessa variabile

import { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

// Coordinate sede GeoTapp — Trenzano (BS)
const LAT = 45.4771587;
const LNG = 10.0041003;
// placeId: ChIJ... — aggiorna con l'ID preciso da Google Maps (opzionale, migliora il pin)
const PLACE_ID = '';

// Dichiarazione tipi per i Web Components di Google Maps.
// Necessario perché TypeScript non conosce i custom elements.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gmpx-api-loader': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { 'api-key'?: string; 'solution-channel'?: string };
      'gmp-map': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { center?: string; zoom?: string; 'map-id'?: string };
      'gmp-advanced-marker': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { position?: string; title?: string };
    }
  }
}

interface LocationMapProps {
  /** Iniettata da ContactPage via process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY */
  apiKey: string;
}

export default function LocationMap({ apiKey }: LocationMapProps) {
  const [loaded, setLoaded] = useState(false);
  const [missingKey, setMissingKey] = useState(false);
  const scriptRef = useRef(false);

  useEffect(() => {
    if (!apiKey || apiKey === 'YOUR_MAPS_API_KEY') {
      setMissingKey(true);
      return;
    }
    // Evita doppio caricamento (StrictMode / hot reload)
    if (scriptRef.current) return;
    scriptRef.current = true;

    const existing = document.getElementById('gmpx-extended-lib');
    if (existing) {
      setLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.id = 'gmpx-extended-lib';
    script.type = 'module';
    // Extended Component Library v0.6 — include gmpx-api-loader, gmp-map, gmp-advanced-marker
    script.src =
      'https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js';
    script.onload = () => setLoaded(true);
    script.onerror = () => console.error('[LocationMap] Failed to load Google Maps Extended Component Library');
    document.head.appendChild(script);
  }, [apiKey]);

  // Placeholder se la API key non è configurata
  if (missingKey) {
    return (
      <div className="w-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center gap-3 text-slate-400"
        style={{ height: 420 }}>
        <MapPin size={32} className="text-slate-300" />
        <p className="text-sm font-medium">Mappa non disponibile</p>
        <p className="text-xs text-center max-w-xs">
          Aggiungi{' '}
          <code className="bg-slate-100 px-1 rounded text-slate-600">
            NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
          </code>{' '}
          al file <code className="bg-slate-100 px-1 rounded text-slate-600">.env.local</code>
          {' '}e alle variabili Cloudflare Workers.
        </p>
        <a
          href={`https://maps.google.com/?q=${LAT},${LNG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-xs text-primary underline underline-offset-2"
        >
          Apri in Google Maps ↗
        </a>
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-border shadow-lg" style={{ height: 450 }}>
      {/* CSS custom properties: mappa i colori GeoTapp alle variabili del componente */}
      <style>{`
        .geotapp-map-wrapper {
          --gmpx-color-primary: #8FC436;
          --gmpx-color-primary-variant: #7ab02a;
          --gmpx-color-on-primary: #0f172a;
          --gmpx-color-surface: #ffffff;
          --gmpx-color-on-surface: #0f172a;
          --gmpx-color-on-surface-variant: #475569;
          --gmpx-color-outline: #e2e8f0;
          --gmpx-font-family-base: 'Inter', 'Poppins', sans-serif;
          --gmpx-font-size-base: 14px;
          height: 100%;
          width: 100%;
          display: block;
        }
        gmp-map {
          height: 100%;
          width: 100%;
        }
      `}</style>

      <div className="geotapp-map-wrapper">
        {/* gmpx-api-loader: carica Maps JS API + Places dopo che il componente è montato */}
        <gmpx-api-loader
          api-key={apiKey}
          solution-channel="GMP_QB_locatorplus_v10_cABD"
        />

        {loaded && (
          <gmp-map
            center={`${LAT},${LNG}`}
            zoom="15"
            map-id="geotapp-contact-map"
          >
            <gmp-advanced-marker
              position={`${LAT},${LNG}`}
              title="GeoTapp — Trenzano (BS)"
            />
          </gmp-map>
        )}
      </div>
    </div>
  );
}
