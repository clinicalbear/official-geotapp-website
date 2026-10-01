// Metadati della pagina Funzionalita' (29/09/2026).
// page.tsx e' un componente client e non puo' esportare generateMetadata: fino a oggi la
// pagina usciva con title "GeoTapp" e la description di ripiego del sito, in inglese anche
// sulle versioni tradotte (/es/funciones/, /en-us/features/ in GSC con impressioni e zero clic).
// Le description NON dicono "sai dove e' la squadra in tempo reale": GeoTapp prende la
// posizione solo alla timbratura (scheda claim).
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';
import { translatePath } from '@/lib/i18n/slug-map';
import type { AppLocale } from '@/lib/i18n/config';

const META: Record<string, { title: string; description: string }> = {
  en: {
    title: 'GeoTapp features: clock-in with location and sealed reports',
    description:
      'Location only when you clock in, false locations rejected, clock-ins saved even without a signal, sealed reports the client verifies alone, data in Europe.',
  },
  it: {
    title: 'Funzionalità GeoTapp: timbratura con posizione e report sigillati',
    description:
      'Posizione solo quando si timbra, posizioni false rifiutate, timbrature salvate anche senza rete, report sigillati che il cliente verifica da solo, dati in Europa.',
  },
  de: {
    title: 'GeoTapp-Funktionen: Stempeln mit Standort und versiegelte Berichte',
    description:
      'Standort nur beim Stempeln, falsche Standorte werden abgewiesen, Buchungen auch ohne Netz gespeichert, versiegelte Berichte, die der Kunde selbst prüft, Daten in Europa.',
  },
  es: {
    title: 'GeoTapp: fichaje con ubicación e informes sellados',
    description:
      'Ubicación solo cuando se ficha, ubicaciones falsas rechazadas, fichajes guardados aunque no haya cobertura, informes sellados que el cliente verifica por sí mismo, datos en Europa.',
  },
  fr: {
    title: 'Fonctionnalités GeoTapp : pointage et rapports scellés',
    description:
      'Position relevée uniquement au pointage, fausses positions refusées, pointages conservés même sans réseau, rapports scellés que le client vérifie seul, données en Europe.',
  },
  pt: {
    title: 'GeoTapp: picagem com localização e relatórios selados',
    description:
      'Localização só quando se pica o ponto, localizações falsas recusadas, picagens guardadas sem rede, relatórios selados que o cliente verifica sozinho, dados na Europa.',
  },
  nl: {
    title: 'GeoTapp-functies: registreren met locatie en verzegelde rapporten',
    description:
      'Locatie alleen bij het registreren, valse locaties worden geweigerd, registraties ook zonder netwerk bewaard, verzegelde rapporten die de klant zelf controleert, gegevens in Europa.',
  },
  da: {
    title: 'GeoTapp: stempling med position og forseglede rapporter',
    description:
      'Position kun ved stempling, falske positioner afvises, stemplinger gemmes også uden dækning, forseglede rapporter som kunden selv verificerer, data i Europa.',
  },
  sv: {
    title: 'GeoTapp: stämpling med position och förseglade rapporter',
    description:
      'Position bara vid stämpling, falska positioner avvisas, stämplingar sparas även utan täckning, förseglade rapporter som kunden själv kontrollerar, data i Europa.',
  },
  nb: {
    title: 'GeoTapp: stempling med posisjon og forseglede rapporter',
    description:
      'Posisjon bare ved stempling, falske posisjoner avvises, stemplinger lagres også uten dekning, forseglede rapporter som kunden selv kontrollerer, data i Europa.',
  },
  ru: {
    title: 'Функции GeoTapp: отметка по GPS, офлайн-режим, шифрование',
    description:
      'Отметка начала и конца смены по GPS с проверкой геозоны и защитой от подмены, офлайн-режим с синхронизацией, шифрование AES-256 и данные в реальном времени.',
  },
};

function metaPer(locale: string) {
  // en-us, en-gb, en-au, en-ie, en-ca usano l'inglese
  return META[locale] ?? META[locale.split('-')[0]] ?? META.en;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = metaPer(locale);
  const url = `https://geotapp.com/${locale}${translatePath('/features/', locale as AppLocale)}`;
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: buildLocaleAlternates(locale, '/features/'),
    openGraph: { title: m.title, description: m.description, type: 'website', url },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description },
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
