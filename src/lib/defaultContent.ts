import type { SiteContent } from "./siteContentSchema";

export const defaultContent: SiteContent = {
  publication: {
    status: "draft",
    lastEditedBy: "Team GeoTapp",
    lastUpdatedAt: "2025-11-09T00:00:00.000Z",
  },
  branding: {
    logoDataUrl: "",
    logoAlt: "Logo provvisorio GeoTapp",
    logoHref: "/",
    accentColor: "#0ea5e9",
    logoWidth: 160,
    titleHtml: "<span style=\"color:#fff;\">GeoTapp</span>",
    subtitleHtml:
      '<span style="letter-spacing:0.4em;text-transform:uppercase;color:#94a3b8;">Official Website</span>',
  },
  seo: {
    title: "GeoTapp Preview | Landing dimostrativa",
    description:
      "Pagina di prova con testi riempitivi per testare il CMS e la gestione dei contenuti dinamici.",
    keywords: ["geotapp", "demo", "placeholder", "landing"],
    ogImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    canonicalUrl: "https://app.geotapp.com/demo",
  },
  analytics: {
    headHtml: "<!-- Inserisci qui il codice Analytics definitivo -->",
  },
  socialProof: {
    title: "Hanno già provato la demo",
    subtitle: "Testimonianze e loghi puramente dimostrativi per simulare una sezione trust.",
    logos: [
      "https://dummyimage.com/120x40/0ea5e9/ffffff&text=Logo+1",
      "https://dummyimage.com/120x40/475569/ffffff&text=Logo+2",
      "https://dummyimage.com/120x40/94a3b8/ffffff&text=Logo+3",
      "https://dummyimage.com/120x40/1e293b/ffffff&text=Logo+4",
    ],
    testimonials: [
      {
        quote:
          "“Testo riempitivo: racconta come GeoTapp ha velocizzato i processi e migliorato la visibilità sui pagamenti.”",
        author: "Maria Rossi",
        role: "COO, Azienda Demo",
        avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
      },
      {
        quote:
          "“Placeholder per la seconda testimonianza. Puoi sostituirla da CMS con una citazione reale.”",
        author: "Luca Bianchi",
        role: "Head of Operations",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      },
    ],
  },
  hero: {
    eyebrow: "Preview 2025",
    title: "Titolo dimostrativo per raccontare il valore di GeoTapp",
    description:
      "Questo blocco contiene testo fittizio. Modificalo dal CMS per inserire il tuo copy reale e raccontare la tua value proposition.",
    supporting:
      "Puoi aggiornare CTA, descrizione, badge e media in qualsiasi momento direttamente dal pannello protetto.",
    primaryCta: {
      label: "Call to action principale",
      href: "#contact",
    },
    secondaryCta: {
      label: "CTA secondaria",
      href: "#pricing",
    },
    mediaBadge: "Integrazioni live demo",
    mediaCaption: "Esempio di dashboard mostrata con contenuti placeholder",
    media: {
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
      caption: "Screenshot dimostrativo di una dashboard",
      alt: "Dashboard di esempio",
    },
  },
  metrics: [
    {
      value: "+120%",
      label: "Metric 01",
      detail: "Testo descrittivo di esempio per raccontare un risultato importante.",
    },
    {
      value: "48h",
      label: "Metric 02",
      detail: "Placeholder che puoi sostituire con il tempo medio di attivazione del servizio.",
    },
    {
      value: "99,9%",
      label: "Metric 03",
      detail: "Un altro indicatore chiave che potrai aggiornare in autonomia.",
    },
  ],
  featureCluster: {
    title: "Sezione funzionalità dimostrative",
    intro:
      "Ogni scheda contiene testo di prova. Dal CMS puoi cambiare icona, pill, titolo e descrizione in pochi clic.",
    items: [
      {
        title: "Feature uno",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae ligula vel eros egestas placerat.",
        icon: "calendar",
        pill: "Modulo A",
      },
      {
        title: "Feature due",
        description:
          "Suspendisse potenti. Donec at felis nec velit condimentum gravida in vitae nisl.",
        icon: "payments",
        pill: "Modulo B",
      },
      {
        title: "Feature tre",
        description:
          "Phasellus vitae venenatis metus. Cras eget turpis sit amet mauris vulputate consequat.",
        icon: "automation",
        pill: "Modulo C",
      },
    ],
    media: {
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
      caption: "Team al lavoro con la piattaforma",
      alt: "Team in riunione",
    },
  },
  howItWorks: {
    title: "Come funziona",
    intro: "Dalla configurazione iniziale al monitoraggio dei risultati, scopri come GeoTapp semplifica ogni passo del processo.",
    steps: [
      {
        title: "Step 1: Configurazione",
        description: "Collega i tuoi account, imposta le regole e personalizza le dashboard in pochi minuti.",
        media: {
          image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
          alt: "Illustrazione dello step 1"
        }
      },
      {
        title: "Step 2: Automazione",
        description: "Lascia che GeoTapp gestisca le attività ripetitive, dagli inviti ai pagamenti, senza intervento manuale.",
        media: {
          image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1",
          alt: "Illustrazione dello step 2"
        }
      },
      {
        title: "Step 3: Analisi",
        description: "Monitora le performance con report in tempo reale e ottimizza le strategie sulla base di dati concreti.",
        media: {
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
          alt: "Illustrazione dello step 3"
        }
      }
    ]
  },
  parallax: {
    eyebrow: "Blocco sticky demo",
    title: "Evidenzia le sezioni chiave mentre l'utente scorre",
    description:
      "Questi testi sono riempitivi: descrivi qui messaggi chiave e aggiungi card per raccontare i plus principali.",
    stickyHighlights: [
      {
        title: "Highlight A",
        detail: "Descrizione breve dedicata al primo beneficio della piattaforma.",
      },
      {
        title: "Highlight B",
        detail: "Altro messaggio di esempio per mantenere l'attenzione sul valore.",
      },
      {
        title: "Highlight C",
        detail: "Testo sostituibile dal CMS per completare il racconto.",
      },
    ],
    cards: [
      {
        title: "Card 1",
        detail: "Contenuto fittizio per spiegare una funzionalità.",
        pill: "Focus",
      },
      {
        title: "Card 2",
        detail: "Ulteriore esempio di testo riempitivo che puoi personalizzare.",
        pill: "Insight",
      },
      {
        title: "Card 3",
        detail: "Ancora un paragrafo dimostrativo per testare la resa grafica.",
        pill: "Operatività",
      },
    ],
    texture: "/textures/grid.svg",
    media: {
      video: "https://storage.googleapis.com/gt-app/videos/control-center.mp4",
      caption: "Video dimostrativo da sostituire con un asset reale",
    },
  },
  timeline: {
    title: "Roadmap provvisoria",
    helper: "Fasi di progetto da personalizzare",
    steps: [
      {
        title: "Fase 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet consequat lectus.",
        duration: "Settimana 1",
      },
      {
        title: "Fase 2",
        description:
          "Integer gravida, nibh non sodales pharetra, ipsum eros lobortis purus, sed cursus arcu lorem ut nulla.",
        duration: "Settimana 2",
      },
      {
        title: "Fase 3",
        description:
          "Vivamus eget pretium arcu. Proin fringilla dolor vel lacus iaculis, id lobortis libero porta.",
        duration: "Settimana 3",
      },
    ],
    media: {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      caption: "Gantt e milestone di esempio",
    },
  },
  pricing: {
    title: "Sezione prezzi di esempio",
    subtitle: "I valori economici sono placeholder e possono essere aggiornati dal CMS",
    tiers: [
      {
        name: "Piano Base",
        description: "Descrizione fittizia dedicata al primo pacchetto.",
        price: "€ 49",
        cadence: "al mese",
        highlights: [
          "Voce di elenco uno",
          "Voce di elenco due",
          "Voce di elenco tre",
        ],
        ctaLabel: "Richiedi info",
        ctaHref: "#contact",
      },
      {
        name: "Piano Pro",
        description: "Testo di esempio per il piano principale.",
        price: "€ 99",
        cadence: "al mese",
        highlights: [
          "Caratteristica aggiuntiva",
          "Supporto dedicato",
          "Accesso anticipato",
        ],
        ctaLabel: "Attiva demo",
        ctaHref: "#contact",
        emphasized: true,
      },
      {
        name: "Piano Enterprise",
        description: "Note generiche rivolte ai team enterprise.",
        price: "Custom",
        cadence: "annuale",
        highlights: [
          "SLA su misura",
          "Roadmap condivisa",
          "Onboarding dedicato",
        ],
        ctaLabel: "Parla con noi",
        ctaHref: "#contact",
      },
    ],
    media: {
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
      caption: "Tabella prezzi con dati fittizi",
    },
  },
  contact: {
    title: "Contattaci per personalizzare la demo",
    description:
      "Compila il form con i tuoi dati reali. Questo testo è solo un segnaposto per mostrare la resa visiva.",
    details: [
      "demo@geotapp.com",
      "Disponibili 9:00 - 18:00 CET",
      "Tempo di risposta medio: 1 giorno",
    ],
    media: {
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
      caption: "Team di supporto pronto ad aiutarti",
    },
  },
  servicesPage: {
    hero: {
      eyebrow: "Suite servizi",
      title: "Attiva solo i moduli che ti servono",
      description:
        "Dalla gestione degli appuntamenti alla sincronizzazione dei pagamenti: ogni blocco del sito è collegato a un servizio reale del backend GeoTapp.",
    },
    services: [
      {
        title: "Orchestrazione meeting",
        description: "Automatizza inviti, reminder e follow-up usando la stessa logica dell'app Flutter.",
        icon: "calendar",
      },
      {
        title: "Billing SaaS",
        description: "Collega i Price ID di Stripe, sincronizza gli stati e ricevi notifiche dal CMS.",
        icon: "payments",
      },
      {
        title: "Automazioni Firebase",
        description: "Allinea ruoli e collezioni tra backend Django e database in tempo reale.",
        icon: "automation",
      },
    ],
    highlights: [
      {
        title: "Checklist guidate",
        description: "Ogni attivazione include passi precisi per evitare colli di bottiglia.",
      },
      {
        title: "Team dedicato",
        description: "Siamo noi ad aver costruito il prodotto: puoi parlare direttamente con chi sviluppa.",
      },
    ],
    cta: {
      title: "Vuoi vedere un servizio in azione?",
      description: "Prenota una sessione live: entro 48h ti mostriamo come collegarlo al tuo stack.",
      primaryLabel: "Prenota una call",
      primaryHref: "#contact",
    },
  },
  pricingPage: {
    hero: {
      eyebrow: "Modelli di pricing",
      title: "Scegli il piano o costruiscine uno con noi",
      description:
        "Tutti i piani supportano deployment su Cloudflare Pages + Render. Cambia ID e copy senza ridistribuire il sito.",
    },
    tiers: [
      {
        name: "Launch",
        description: "Per startup che vogliono andare live in meno di una settimana.",
        price: "€ 59",
        cadence: "al mese",
        highlights: ["CMS completo", "Integrazione Stripe test", "Supporto via chat"],
        ctaLabel: "Avvia prova",
        ctaHref: "#contact",
      },
      {
        name: "Scale",
        description: "Pensato per team che hanno bisogno di più ambienti e automazioni.",
        price: "€ 129",
        cadence: "al mese",
        highlights: ["Webhook personalizzati", "Firebase jobs", "Supporto prioritario"],
        ctaLabel: "Parla con noi",
        ctaHref: "#contact",
        emphasized: true,
      },
      {
        name: "Enterprise+",
        description: "Linee guida, migrazioni e sviluppo condiviso della roadmap.",
        price: "Custom",
        cadence: "annuale",
        highlights: ["SLA dedicati", "Training team marketing", "Accesso al team prodotto"],
        ctaLabel: "Richiedi offerta",
        ctaHref: "#contact",
      },
    ],
    faqs: [
      {
        question: "Posso usare ID diversi tra landing e pagina prezzi?",
        answer:
          "Sì, i Price ID qui sono indipendenti da quelli della home. Puoi evidenziare promozioni o bundle differenti.",
      },
      {
        question: "Il prezzo include il deploy?",
        answer:
          "Ti aiutiamo a configurare Cloudflare Pages e Render. Eventuali costi di hosting restano a carico del tuo account.",
      },
    ],
    note: "IVA esclusa. Sconti e condizioni custom disponibili per contratti annuali.",
  },
  aboutPage: {
    hero: {
      eyebrow: "Chi siamo",
      title: "Un team prodotto che vive il proprio stack",
      description:
        "GeoTapp è nato per supportare l'app Flutter interna. Oggi condividiamo gli stessi strumenti con i nostri clienti.",
    },
    values: [
      {
        title: "Trasparenza",
        description: "Ogni blocco del CMS corrisponde a una sezione reale del sito e del backend.",
      },
      {
        title: "Velocità",
        description: "Target: portarti online in meno di 5 giorni lavorativi, con checklist integrate.",
      },
      {
        title: "Partnership",
        description: "Non vendiamo solo un tema: lavoriamo con il tuo team prodotto e marketing.",
      },
    ],
    story: [
      {
        year: "2023",
        title: "Lancio interno",
        description: "Il CMS nasce per sincronizzare la documentazione dell'app Flutter e le pagine marketing.",
      },
      {
        year: "2024",
        title: "Apertura beta",
        description: "Primi clienti esterni su Cloudflare + Render, con workflow condivisi via checklist.",
      },
      {
        year: "2025",
        title: "Suite completa",
        description: "Introduzione dell'admin guidato, pagine dedicate e integrazioni testabili con un click.",
      },
    ],
    teamNote:
      "Operiamo tra Milano e Torino, con un team misto prodotto/ops. Amiamo lavorare con SaaS europei orientati all'automation.",
  },
};
