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
    title: 'GeoTapp-Funktionen: GPS-Zeiterfassung, offline, verschlüsselt',
    description:
      'Stempeln mit GPS, Geofence-Prüfung und Anti-Spoofing, Offline-Modus mit Synchronisierung bei Empfang, AES-256-Verschlüsselung und Live-Daten fürs Büro.',
  },
  es: {
    title: 'Funciones de GeoTapp: fichaje GPS, modo offline y cifrado',
    description:
      'Fichaje con GPS y control de geocerca, protección anti-spoofing, modo offline que sincroniza al volver la señal, cifrado AES-256 y datos en tiempo real.',
  },
  fr: {
    title: 'Fonctionnalités GeoTapp : pointage GPS, hors ligne, chiffrement',
    description:
      'Pointage GPS avec contrôle de géorepérage et anti-spoofing, mode hors ligne synchronisé au retour du réseau, chiffrement AES-256 et données en temps réel.',
  },
  pt: {
    title: 'Funcionalidades GeoTapp: ponto GPS, modo offline e encriptação',
    description:
      'Registo de ponto com GPS e verificação de geofence, anti-spoofing, modo offline com sincronização automática, encriptação AES-256 e dados em tempo real.',
  },
  nl: {
    title: 'GeoTapp-functies: GPS-inklokken, offline modus, versleuteling',
    description:
      'Inklokken met GPS en geofence-controle, anti-spoofing, een offline modus die synchroniseert zodra er bereik is, AES-256-versleuteling en realtime gegevens.',
  },
  da: {
    title: 'GeoTapp-funktioner: GPS-stempling, offline-tilstand, kryptering',
    description:
      'Stempling med GPS og geofence-kontrol, anti-spoofing, offline-tilstand der synkroniserer når der er dækning, AES-256-kryptering og data i realtid.',
  },
  sv: {
    title: 'GeoTapp-funktioner: GPS-stämpling, offlineläge, kryptering',
    description:
      'Stämpling med GPS och geofence-kontroll, anti-spoofing, offlineläge som synkar när täckningen är tillbaka, AES-256-kryptering och data i realtid.',
  },
  nb: {
    title: 'GeoTapp-funksjoner: GPS-stempling, frakoblet modus, kryptering',
    description:
      'Stempling med GPS og geofence-kontroll, anti-spoofing, frakoblet modus som synkroniserer når dekningen er tilbake, AES-256-kryptering og sanntidsdata.',
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
