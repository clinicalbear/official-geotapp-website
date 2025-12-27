'use client';

import React from 'react';

export default function PrivacyPage() {
    return (
        <div className="pt-32 pb-24 px-6 min-h-screen bg-white text-slate-900">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
                <p className="text-slate-500 mb-12">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>

                <div className="prose prose-slate max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Titolare del Trattamento</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Il Titolare del trattamento dei dati è <strong>GeoTapp</strong>, con sede legale in Brescia, Italia. Per qualsiasi chiarimento, informazione o esercizio dei diritti elencati in questa Informativa, è possibile contattare il Titolare all'indirizzo email: <a href="mailto:privacy@geotapp.com" className="text-primary hover:underline">privacy@geotapp.com</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. Tipologie di Dati Raccolti</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Durante l'utilizzo della nostra piattaforma, potremmo raccogliere le seguenti categorie di dati:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-2">
                            <li><strong>Dati di Navigazione:</strong> Indirizzi IP, tipo di browser, orari di accesso.</li>
                            <li><strong>Dati di Contatto:</strong> Nome, email, numero di telefono (se forniti volontariamente tramite form).</li>
                            <li><strong>Cookie e Dati di Utilizzo:</strong> Informazioni su come interagisci con il nostro sito.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Finalità del Trattamento</h2>
                        <p className="text-slate-600 leading-relaxed">
                            I Dati dell’Utente sono raccolti per consentire al Titolare di fornire i propri Servizi, così come per le seguenti finalità:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-2">
                            <li>Contattare l'Utente (es. risposta a richieste di supporto o demo).</li>
                            <li>Gestione dei pagamenti (tramite Stripe o servizi terzi).</li>
                            <li>Statistica e analisi del traffico (in forma anonimizzata).</li>
                            <li>Remarketing e behavioral targeting.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Base Giuridica</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Il trattamento dei dati personali si fonda sul consenso dell'utente (es. iscrizione newsletter), sull'esecuzione di un contratto (es. utilizzo del Software) o sul legittimo interesse del Titolare.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Diritti dell'Utente</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Gli utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare, in particolare:
                        </p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-2">
                            <li>Revocare il consenso in ogni momento.</li>
                            <li>Accedere ai propri Dati.</li>
                            <li>Verificare e chiedere la rettificazione.</li>
                            <li>Ottenere la cancellazione o la rimozione dei propri Dati.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
