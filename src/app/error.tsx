'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Qualcosa è andato storto!</h2>
            <p className="text-gray-600 mb-8 max-w-md">
                Ci scusiamo, si è verificato un errore imprevisto.
            </p>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                className="px-6 py-3 bg-geotapp-primary text-white rounded-lg hover:bg-geotapp-600 transition"
            >
                Riprova
            </button>
        </div>
    );
}
