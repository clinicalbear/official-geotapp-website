'use client';

const T: Record<string, { title: string; desc: string; retry: string }> = {
  it: { title: 'Errore Critico!', desc: 'Si è verificato un errore critico che impedisce il caricamento del layout.', retry: 'Riprova' },
  en: { title: 'Critical Error!', desc: 'A critical error occurred that prevents the layout from loading.', retry: 'Try again' },
  de: { title: 'Kritischer Fehler!', desc: 'Ein kritischer Fehler verhindert das Laden des Layouts.', retry: 'Erneut versuchen' },
  fr: { title: 'Erreur critique !', desc: 'Une erreur critique empêche le chargement de la mise en page.', retry: 'Réessayer' },
  es: { title: '¡Error crítico!', desc: 'Un error crítico impide la carga del diseño.', retry: 'Reintentar' },
  nl: { title: 'Kritieke fout!', desc: 'Er is een kritieke fout opgetreden waardoor de lay-out niet kan laden.', retry: 'Opnieuw proberen' },
  pt: { title: 'Erro crítico!', desc: 'Ocorreu um erro crítico que impede o carregamento do layout.', retry: 'Tentar novamente' },
  da: { title: 'Kritisk fejl!', desc: 'Der opstod en kritisk fejl, som forhindrer layoutet i at indlæse.', retry: 'Prøv igen' },
  sv: { title: 'Kritiskt fel!', desc: 'Ett kritiskt fel uppstod som hindrar layouten från att laddas.', retry: 'Försök igen' },
  nb: { title: 'Kritisk feil!', desc: 'Det oppstod en kritisk feil som hindrer layouten i å lastes.', retry: 'Prøv igjen' },
  ru: { title: 'Критическая ошибка!', desc: 'Произошла критическая ошибка, из-за которой макет не загружается.', retry: 'Повторить' },
};

function getT() {
  if (typeof navigator === 'undefined') return T.en;
  const lang = navigator.language?.split('-')[0];
  return T[lang ?? ''] ?? T.en;
}

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = getT();

  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
          <div className="rounded-lg bg-white p-6 shadow-xl">
            <h2 className="mb-4 text-2xl font-bold text-red-600">
              {t.title}
            </h2>
            <p className="mb-4 text-gray-700">
              {t.desc}
            </p>
            <div className="mb-4 overflow-auto rounded bg-gray-100 p-2 text-sm text-red-800">
              {error.message}
            </div>
            <button
              onClick={() => reset()}
              className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              {t.retry}
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
