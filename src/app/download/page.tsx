'use client';

export default function DownloadPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold font-display text-gray-900 mb-4">
                            Download GeoTap
                        </h1>
                        <p className="text-xl text-gray-600">
                            Scegli la versione adatta alle tue esigenze.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Windows App Card */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
                            <div className="p-8 flex-1">
                                <div className="w-20 h-20 mb-6 flex items-center justify-center">
                                    <img
                                        src="/windows-logo.png"
                                        alt="Windows Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    GeoTap per Windows
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    L'applicazione desktop completa per la gestione aziendale.
                                    Ideale per l'amministrazione e il controllo completo.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        'Gestione completa flotta',
                                        'Pianificazione turni',
                                        'Export paghe',
                                        'Notifiche desktop'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                                            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-8 bg-gray-50 border-t border-gray-100 mt-auto">
                                <a
                                    href="/geotap-windows-setup.zip"
                                    className="block w-full text-center px-6 py-3 bg-geotapp-primary text-white font-semibold rounded-xl shadow hover:bg-geotapp-600 transition"
                                >
                                    Scarica per Windows
                                </a>
                                <p className="mt-3 text-xs text-center text-gray-400">
                                    v1.0.0 • 64-bit • .zip
                                </p>
                            </div>
                        </div>

                        {/* WordPress Plugin Card */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
                            <div className="p-8 flex-1">
                                <div className="w-20 h-20 mb-6 flex items-center justify-center">
                                    <img
                                        src="/wordpress-logo.png"
                                        alt="WordPress Logo"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    Plugin WordPress
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Integra GeoTap nel tuo sito aziendale.
                                    Permetti ai dipendenti di accedere direttamente dalla tua intranet.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        'Integrazione Iframe sicura',
                                        'Shortcode [geotap_app]',
                                        'Login automatico',
                                        'Compatibile con tutti i temi'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                                            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-8 bg-gray-50 border-t border-gray-100 mt-auto">
                                <a
                                    href="/geotap_wordpress_plugin.zip"
                                    className="block w-full text-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-xl shadow hover:bg-blue-800 transition"
                                >
                                    Scarica Plugin
                                </a>
                                <p className="mt-3 text-xs text-center text-gray-400">
                                    v1.0.0 • .zip
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
