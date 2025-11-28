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
          "\"Testo riempitivo: racconta come GeoTapp ha velocizzato i processi e migliorato la visibilità sui pagamenti.\"",
        author: "Maria Rossi",
        role: "COO, Azienda Demo",
        avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
      },
      {
        quote:
          "\"Placeholder per la seconda testimonianza. Puoi sostituirla da CMS con una citazione reale.\"",
        author: "Luca Bianchi",
        role: "Head of Operations",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      },
      {
        quote:
          "\"Blocchetto numero tre: usa questo spazio per un feedback più tecnico, magari citando l'onboarding o le automazioni Stripe.\"",
        author: "Chiara Verdi",
        role: "Product Lead, Startup Beta",
        avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
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
    title: "Funzionalità Principali di GeoTapp",
    intro:
      "Scopri gli strumenti che rendono GeoTapp la scelta ideale per la gestione efficiente delle tue operazioni aziendali.",
    items: [
      {
        title: "Gestione Appuntamenti",
        description:
          "Automatizza la pianificazione e il follow-up degli appuntamenti per migliorare l'esperienza cliente.",
        icon: "calendar",
        pill: "Appuntamenti",
      },
      {
        title: "Elaborazione Pagamenti",
        description:
          "Integra pagamenti sicuri con Stripe, monitorando entrate e uscite in tempo reale.",
        icon: "payments",
        pill: "Pagamenti",
      },
      {
        title: "Automazioni Personalizzate",
        description:
          "Crea workflow automatizzati per sincronizzare dati e notifiche tra le tue piattaforme.",
        icon: "automation",
        pill: "Automazioni",
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
    eyebrow: "Automazioni Intelligenti",
    title: "Trasforma il tuo workflow con GeoTapp",
    description:
      "GeoTapp offre una suite completa di strumenti per automatizzare i processi aziendali, dalla gestione degli appuntamenti alla sincronizzazione dei pagamenti, garantendo efficienza e scalabilità.",
    stickyHighlights: [
      {
        title: "Automazione Completa",
        detail: "Integra tutti i tuoi strumenti in un'unica piattaforma per eliminare i task manuali e aumentare la produttività.",
      },
      {
        title: "Sicurezza Avanzata",
        detail: "Proteggi i tuoi dati con crittografia end-to-end e compliance GDPR per una tranquillità totale.",
      },
      {
        title: "Supporto 24/7",
        detail: "Il nostro team di esperti è sempre disponibile per assisterti in ogni fase del tuo percorso.",
      },
    ],
    cards: [
      {
        title: "Gestione Appuntamenti",
        detail: "Automatizza inviti, reminder e follow-up per i tuoi clienti, riducendo il tempo dedicato alle attività amministrative.",
        pill: "Automazione",
      },
      {
        title: "Integrazione Pagamenti",
        detail: "Collega Stripe per processare pagamenti sicuri e veloci, con report dettagliati sulle transazioni.",
        pill: "Pagamenti",
      },
      {
        title: "Analisi in Tempo Reale",
        detail: "Monitora le performance con dashboard interattive e ottieni insights per ottimizzare le tue strategie.",
        pill: "Analytics",
      },
    ],
    texture: "/textures/grid.svg",
    media: {
      video: "https://storage.googleapis.com/gt-app/videos/control-center.mp4",
      caption: "Video dimostrativo da sostituire con un asset reale",
    },
    postMediaCopy:
      "Testo di esempio sotto il video parallax: usa questo blocco per contestualizzare la clip o inserire una call-to-action alternativa.",
  },
  timeline: {
    title: "Il nostro Percorso",
    helper: "Le fasi chiave per implementare GeoTapp nella tua azienda",
    steps: [
      {
        title: "Configurazione",
        description:
          "Imposta il tuo account, collega le integrazioni e personalizza le impostazioni iniziali.",
        duration: "Settimana 1",
      },
      {
        title: "Formazione e Test",
        description:
          "Il nostro team ti guida attraverso l'uso della piattaforma con sessioni di formazione dedicate.",
        duration: "Settimana 2",
      },
      {
        title: "Lancio e Ottimizzazione",
        description:
          "Vai live con GeoTapp e monitora le performance per continui miglioramenti.",
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
    highlightBackgroundColor: "#0f172a",
    highlightTextColor: "#ffffff",
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
    simulator: {
      eyebrow: "Simulatore dinamico",
      title: "Scegli i tuoi collaboratori",
      description: "Trascina il cursore o digita i dipendenti per ottenere una stima annuale.",
      sliderLabel: "Collaboratori",
      sliderHint: "Per oltre {max} collaboratori compila il campo manuale e completa il checkout.",
      manualPlaceholder: "Inserisci il numero manualmente",
      emptyState: "Al momento non riusciamo a calcolare il preventivo. Riprova oppure contattaci.",
      buttonLabel: "Procedi al checkout sicuro",
    },
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
