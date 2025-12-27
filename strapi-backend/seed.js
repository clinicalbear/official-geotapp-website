const STRAPI_URL = 'http://localhost:1337';

const HOMEPAGE_DATA = {
    "data": {
        "hero_badge": "✨ Timbratura Geolocalizzata per PMI",
        "hero_title": "Tracciamento <span class=\"text-geotapp-500\">Presenze</span> che Funziona Davvero",
        "hero_subtitle": "GeoTapp nasce dalla frustrazione di chi lavora sul campo. Niente complicazioni, solo semplicità. Due tap: entrata e uscita. Il resto è automatico.",
        "hero_cta_primary_text": "Inizia Subito (Gratis per 14 giorni)",
        "hero_cta_primary_link": "/pricing",
        "hero_cta_secondary_text": "Scopri di Più",
        "hero_cta_secondary_link": "#features",
        "features_title": "Tre Pilastri",
        "features_subtitle": "Tutto quello di cui hai bisogno in tre principi semplici",
        "features": [
            {
                "icon": "📍",
                "title": "Geolocalizzazione Intelligente",
                "description": "Solo all'entrata e all'uscita. Non tracciamo i movimenti durante il lavoro. Privacy rispettata, dati certi."
            },
            {
                "icon": "✨",
                "title": "Semplicità Estrema",
                "description": "Due tap: entrata e uscita. Tutto il resto è automatico. Se tua nonna può usarlo, può usarlo chiunque."
            },
            {
                "icon": "🎯",
                "title": "Pensato per le PMI",
                "description": "Non per le Fortune 500. Per te che hai 5, 10, 50 collaboratori e vuoi una soluzione che funzioni senza impazzire."
            }
        ],
        "cta_title": "Pronto a Migliorare il Tracciamento?",
        "cta_subtitle": "Prova GeoTapp gratuitamente per 14 giorni. Nessuna carta di credito richiesta.",
        "cta_button_text": "Inizia la Prova Gratuita",
        "cta_button_link": "/pricing"
    }
};

async function seedData() {
    try {
        console.log('Seeding homepage data...');
        const response = await fetch(`${STRAPI_URL}/api/homepage`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(HOMEPAGE_DATA),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Successfully seeded homepage data:');
            console.log(JSON.stringify(data, null, 2));
        } else {
            console.error('Failed to seed homepage data:', response.status, response.statusText);
            const errorData = await response.json();
            console.error('Error details:', JSON.stringify(errorData, null, 2));
        }
    } catch (error) {
        console.error('An error occurred during seeding:', error);
    }
}

seedData();
