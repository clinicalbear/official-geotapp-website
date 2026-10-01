import type { Metadata } from 'next';
import { buildLocaleAlternates } from '@/lib/i18n/locale-metadata';

const META: Record<string, { title: string; description: string }> = {
  it: {
    title: 'Verifica un report GeoTapp | GeoTapp',
    description:
      'Carica il pacchetto firmato e verifica la firma elettronica, la catena degli eventi e le impronte delle foto. Il controllo gira nel tuo browser: il file non ci viene inviato.',
  },
  en: {
    title: 'Verify a GeoTapp report | GeoTapp',
    description:
      'Upload the signed package to check the electronic signature, the event chain and the photo fingerprints. Verification runs in your browser: the file is never sent to us.',
  },
  de: {
    title: 'Einen GeoTapp-Bericht prüfen | GeoTapp',
    description:
      'Laden Sie das signierte Paket hoch und prüfen Sie die elektronische Signatur, die Ereigniskette und die Foto-Fingerabdrücke. Die Prüfung läuft in Ihrem Browser: die Datei wird nicht an uns übertragen.',
  },
  fr: {
    title: 'Vérifier un rapport GeoTapp | GeoTapp',
    description:
      "Chargez le paquet signé et vérifiez la signature électronique, la chaîne des événements et les empreintes des photos. La vérification tourne dans votre navigateur : le fichier ne nous est jamais envoyé.",
  },
  es: {
    title: 'Verifica un informe de GeoTapp | GeoTapp',
    description:
      'Sube el paquete firmado y verifica la firma electrónica, la cadena de eventos y las huellas de las fotos. La verificación se ejecuta en tu navegador: el archivo no se nos envía.',
  },
  nl: {
    title: 'Een GeoTapp-rapport controleren | GeoTapp',
    description:
      'Upload het ondertekende pakket en controleer de elektronische handtekening, de keten van gebeurtenissen en de vingerafdrukken van de foto’s. De controle draait in uw browser: het bestand wordt niet naar ons gestuurd.',
  },
  pt: {
    title: 'Verificar um relatório GeoTapp | GeoTapp',
    description:
      'Carregue o pacote assinado e verifique a assinatura eletrónica, a cadeia de eventos e as impressões digitais das fotografias. A verificação corre no seu navegador: o ficheiro não nos é enviado.',
  },
  da: {
    title: 'Kontrollér en GeoTapp-rapport | GeoTapp',
    description:
      'Upload den underskrevne pakke og kontrollér den elektroniske signatur, hændelseskæden og fotografiernes fingeraftryk. Kontrollen kører i din browser: filen bliver ikke sendt til os.',
  },
  sv: {
    title: 'Kontrollera en GeoTapp-rapport | GeoTapp',
    description:
      'Ladda upp det signerade paketet och kontrollera den elektroniska signaturen, händelsekedjan och fotografiernas fingeravtryck. Kontrollen körs i din webbläsare: filen skickas inte till oss.',
  },
  nb: {
    title: 'Verifiser en GeoTapp-rapport | GeoTapp',
    description:
      'Last opp den signerte pakken og kontroller den elektroniske signaturen, hendelseskjeden og bildenes fingeravtrykk. Kontrollen kjører i nettleseren din: filen sendes ikke til oss.',
  },
  ru: {
    title: 'Проверка отчёта GeoTapp | GeoTapp',
    description:
      'Загрузите подписанный пакет и проверьте электронную подпись, цепочку событий и отпечатки фотографий. Проверка выполняется в вашем браузере: файл нам не отправляется.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = META[locale] ?? META.en;
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: buildLocaleAlternates(locale, '/verify-report/'),
    openGraph: {
      url: `https://geotapp.com/${locale}/verify-report/`,
      type: 'website',
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

export { generateLocaleStaticParams as generateStaticParams } from '@/lib/i18n/static-params';
export { default } from '../../verify-report/page';
