'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default function GuidePage() {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('/guida-utente.md')
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    const handleDownload = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <main className="pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold font-display text-gray-900">Guida Utente</h1>
                        <button
                            onClick={handleDownload}
                            className="px-4 py-2 bg-geotapp-primary text-white rounded-lg shadow-sm hover:bg-geotapp-600 transition flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            Scarica / Stampa PDF
                        </button>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm prose prose-lg prose-geotapp max-w-none">
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
                </div>
            </main>
        </div>
    );
}
