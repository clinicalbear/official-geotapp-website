'use client';

import React from 'react';

export default function TermsPage() {
    return (
        <div className="pt-32 pb-24 px-6 min-h-screen bg-white text-slate-900">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Termini e Condizioni di Servizio</h1>
                <p className="text-slate-500 mb-12">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>

                <div className="prose prose-slate max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Accettazione dei Termini</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Utilizzando i servizi offerti da GeoTapp ("Servizio", "Piattaforma"), l'utente accetta di essere vincolato dai presenti Termini e Condizioni ("Termini"). Se non accetti questi termini, ti preghiamo di non utilizzare il nostro servizio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. Descrizione del Servizio</h2>
                        <p className="text-slate-600 leading-relaxed">
                            GeoTapp fornisce soluzioni software SaaS per la gestione aziendale, ottimizzazione dei flussi di lavoro e automazione tramite AI. Il servizio è fornito "così com'è" e GeoTapp si riserva il diritto di modificare o interrompere funzionalità in qualsiasi momento.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Account Utente</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Per accedere ad alcune funzionalità, è necessario creare un account. Sei responsabile del mantenimento della sicurezza delle tue credenziali e di tutte le attività che avvengono sotto il tuo account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Proprietà Intellettuale</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Tutto il software, il design, la tecnologia e i contenuti presenti sulla piattaforma sono di proprietà esclusiva di GeoTapp e sono protetti dalle leggi sul copyright e sulla proprietà intellettuale.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Limitazione di Responsabilità</h2>
                        <p className="text-slate-600 leading-relaxed">
                            GeoTapp non sarà responsabile per danni diretti, indiretti, incidentali o consequenziali derivanti dall'uso o dall'impossibilità di utilizzare il servizio, inclusi, a titolo esemplificativo, perdita di profitti o dati.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">6. Modifiche ai Termini</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Ci riserviamo il diritto di aggiornare questi termini in qualsiasi momento. Le modifiche entreranno in vigore immediatamente dopo la pubblicazione su questa pagina.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">7. Contatti</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Per domande riguardanti questi Termini, contattaci all'indirizzo email: <a href="mailto:legal@geotapp.com" className="text-primary hover:underline">legal@geotapp.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
