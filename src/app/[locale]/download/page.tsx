// Overview: page.tsx
// Module: src > app > [locale] > download
// Purpose: documents intent and boundaries to speed up maintenance and reviews.
// Safety: keep permissions, tenancy isolation, and API/data compatibility unchanged unless explicitly required.

// Documentation Contract:
// - Boundaries: this file may orchestrate UI/data flow, but it must keep business invariants intact.
// - Security: preserve role/tenant checks and never broaden access scope implicitly.
// - Data Integrity: keep field names and payload schemas stable unless a migration is planned.
// - Compatibility: companyId/tenantId fallbacks may still be required for legacy records.
// - Performance: avoid extra roundtrips in hot paths and prefer incremental updates.
// - Error Handling: prefer graceful degradation over hard-fail in non-critical rendering paths.
// - UX Stability: keep deterministic ordering/filtering to avoid visual flicker/regressions.
// - Testing: update module tests when changing control flow, query composition, or serialization.
// - Operations: changes touching auth/rules/functions must stay aligned across apps.
// - Maintainability: keep additive changes whenever possible to reduce rollback risk.



import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';

const DOWNLOAD_META: Record<string, { title: string; description: string }> = {
  it: { title: 'Scarica GeoTapp — App e Plugin | GeoTapp', description: 'Scarica l\'app GeoTapp per Android e iOS, il plugin WordPress e il client Windows. Installa e inizia a documentare ogni intervento con GPS e prove fotografiche.' },
  en: { title: 'Download GeoTapp — App & Plugins | GeoTapp', description: 'Download the GeoTapp app for Android and iOS, the WordPress plugin and the Windows client. Install and start documenting every job with GPS and photo evidence.' },
  de: { title: 'GeoTapp herunterladen — App & Plugins | GeoTapp', description: 'Laden Sie die GeoTapp-App für Android und iOS, das WordPress-Plugin und den Windows-Client herunter. Installieren Sie und beginnen Sie, jeden Einsatz mit GPS und Fotobelegen zu dokumentieren.' },
  fr: { title: 'Télécharger GeoTapp — Application & Plugins | GeoTapp', description: 'Téléchargez l\'application GeoTapp pour Android et iOS, le plugin WordPress et le client Windows. Installez et commencez à documenter chaque intervention avec GPS et preuves photographiques.' },
  es: { title: 'Descargar GeoTapp — App y Plugins | GeoTapp', description: 'Descarga la app GeoTapp para Android e iOS, el plugin de WordPress y el cliente Windows. Instala y empieza a documentar cada intervención con GPS y evidencias fotográficas.' },
  pt: { title: 'Descarregar GeoTapp — App e Plugins | GeoTapp', description: 'Descarregue a app GeoTapp para Android e iOS, o plugin WordPress e o cliente Windows. Instale e comece a documentar cada intervenção com GPS e provas fotográficas.' },
  nl: { title: 'GeoTapp downloaden — App & Plugins | GeoTapp', description: 'Download de GeoTapp-app voor Android en iOS, de WordPress-plugin en de Windows-client. Installeer en begin elke opdracht te documenteren met GPS en fotobewijs.' },
  da: { title: 'Download GeoTapp — App og Plugins | GeoTapp', description: 'Download GeoTapp-appen til Android og iOS, WordPress-pluginnet og Windows-klienten. Installer og begynd at dokumentere hvert job med GPS og fotobeviser.' },
  sv: { title: 'Ladda ned GeoTapp — App och Plugins | GeoTapp', description: 'Ladda ned GeoTapp-appen för Android och iOS, WordPress-pluginet och Windows-klienten. Installera och börja dokumentera varje uppdrag med GPS och fotobevis.' },
  nb: { title: 'Last ned GeoTapp — App og Plugins | GeoTapp', description: 'Last ned GeoTapp-appen for Android og iOS, WordPress-pluginen og Windows-klienten. Installer og begynn å dokumentere hvert oppdrag med GPS og fotobevis.' },
  ru: { title: 'Скачать GeoTapp — Приложение и Плагины | GeoTapp', description: 'Скачайте приложение GeoTapp для Android и iOS, плагин WordPress и клиент Windows. Установите и начните документировать каждый выезд с GPS и фотодоказательствами.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = DOWNLOAD_META[locale] ?? DOWNLOAD_META.en;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: buildLocaleAlternates(locale, '/download/'),
  };
}
export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../../download/page';
