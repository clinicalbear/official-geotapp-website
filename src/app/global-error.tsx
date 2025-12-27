'use client';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
                    <div className="rounded-lg bg-white p-6 shadow-xl">
                        <h2 className="mb-4 text-2xl font-bold text-red-600">Errore Critico!</h2>
                        <p className="mb-4 text-gray-700">
                            Si è verificato un errore critico che impedisce il caricamento del layout.
                        </p>
                        <div className="mb-4 overflow-auto rounded bg-gray-100 p-2 text-sm text-red-800">
                            {error.message}
                        </div>
                        <button
                            onClick={() => reset()}
                            className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
                        >
                            Riprova
                        </button>
                    </div>
                </div>
            </body>
        </html>
    );
}
