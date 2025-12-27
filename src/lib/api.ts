// src/lib/api.ts

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

async function fetchAPI(path: string, urlParamsObject: Record<string, any> = {}, options = {}) {
  try {
    // Merge default and user options
    const mergedOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    // Build request URL
    const queryString = new URLSearchParams(urlParamsObject).toString();
    const requestUrl = `${STRAPI_URL}/api${path}${queryString ? `?${queryString}` : ''}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    // Handle response
    if (!response.ok) {
      console.error('Error fetching API:', response.statusText);
      throw new Error(`An error occurred please try again`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in fetchAPI:', error);
    throw new Error(`An error occurred please try again`);
  }
}

export async function getHomepageData() {
  try {
    const data = await fetchAPI('/homepage', { populate: 'deep' });
    if (data && data.data && data.data.attributes) {
      return data.data.attributes;
    }
    throw new Error("No data");
  } catch (e) {
    console.warn("Strapi non raggiungibile o vuoto. Uso Mock Data.");
    return {
      hero_badge: "Nuova Versione 2.0",
      hero_title: "La Timbratura<br />Semplice per le PMI",
      hero_subtitle: "GeoTapp è la soluzione completa per la gestione delle presenze in mobilità. Geolocalizzazione, reportistica avanzata e conformità GDPR in un'unica app.",
      hero_cta_primary_text: "Prova Gratis",
      hero_cta_primary_link: "/register",
      hero_cta_secondary_text: "Scopri di più",
      hero_cta_secondary_link: "#features",
      features_title: "Tutto ciò che ti serve",
      features_subtitle: "Funzionalità progettate per semplificare il lavoro di HR e dipendenti.",
      features: [
        { id: 1, icon: "map-pin", title: "Geolocalizzazione", description: "Verifica la posizione delle timbrature in tempo reale." },
        { id: 2, icon: "smartphone", title: "App Mobile", description: "Timbratura facile da smartphone iOS e Android." },
        { id: 3, icon: "bar-chart-2", title: "Reportistica", description: "Export dati compatibile con i principali software paghe." }
      ],
      cta_title: "Pronto a semplificare la gestione presenze?",
      cta_subtitle: "Unisciti a centinaia di aziende che usano GeoTapp ogni giorno.",
      cta_button_text: "Inizia la prova gratuita",
      cta_button_link: "/register"
    };
  }

}

export async function submitContact(formData: any) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  if (!res.ok) throw new Error("Errore invio");
  return res.json();
}