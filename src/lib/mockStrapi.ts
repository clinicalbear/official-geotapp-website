// Mock Strapi API per sviluppo locale
export const mockPages = {
  home: {
    id: 1,
    attributes: {
      title: "GeoTapp",
      description: "Localizzazione in tempo reale per team mobili",
      features: [
        { name: "Mappa in tempo reale", icon: "📍" },
        { name: "Tracking GPS", icon: "🛰️" },
        { name: "Analitiche", icon: "📊" },
      ],
    },
  },
};

export const mockBlogPosts = [
  {
    id: 1,
    attributes: {
      title: "Introduzione a GeoTapp",
      description: "Scopri come GeoTapp rivoluziona il tracciamento del team",
      content: "...",
      publishedAt: "2024-01-01",
    },
  },
];

export async function fetchPageContent(page: string) {
  return mockPages[page as keyof typeof mockPages] || null;
}

export async function fetchBlogPosts() {
  return mockBlogPosts;
}
