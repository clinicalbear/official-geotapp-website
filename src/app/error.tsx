'use client';

import { useEffect } from 'react';

const T: Record<string, { title: string; desc: string; retry: string }> = {
  it: { title: 'Qualcosa è andato storto!', desc: 'Ci scusiamo, si è verificato un errore imprevisto.', retry: 'Riprova' },
  en: { title: 'Something went wrong!', desc: 'We apologise, an unexpected error occurred.', retry: 'Try again' },
  de: { title: 'Etwas ist schiefgelaufen!', desc: 'Entschuldigung, ein unerwarteter Fehler ist aufgetreten.', retry: 'Erneut versuchen' },
  fr: { title: 'Une erreur est survenue !', desc: 'Nous nous excusons, une erreur inattendue s\'est produite.', retry: 'Réessayer' },
  es: { title: '¡Algo salió mal!', desc: 'Lo sentimos, se ha producido un error inesperado.', retry: 'Reintentar' },
};

function getT() {
  if (typeof navigator === 'undefined') return T.en;
  const lang = navigator.language?.split('-')[0];
  return T[lang ?? ''] ?? T.en;
}

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const t = getT();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {t.title}
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        {t.desc}
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-geotapp-primary text-white rounded-lg hover:bg-geotapp-600 transition"
      >
        {t.retry}
      </button>
    </div>
  );
}
