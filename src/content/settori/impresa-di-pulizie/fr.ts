import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: "Appli pour entreprise de propreté : équipes et GPS | GeoTapp",
    description: "Gérez équipes, vacations et présences avec des pointages GPS. Preuves de service automatiques, à montrer quand un client conteste. Conçu pour le RGPD.",
  },

  hero: {
    badge: "Appli pour entreprises de propreté et multiservices",
    h1_line1: "Votre entreprise de propreté,",
    h1_line2: "gérée pointage après pointage.",
    subtitle: "Pointages GPS, preuves de service automatiques et gestion des vacations dans une seule appli. Plus de tableurs. Un client se plaint ? Vous envoyez le rapport au lieu de vous expliquer de vive voix.",
    cta_primary: "Essayez-le sur un vrai contrat",
    cta_note: "14 jours, jusqu'à 50 agents sur le terrain, sans carte bancaire.",
  },

  pain: {
    title: "Les problèmes que nous résolvons chaque jour",
    items: [
      {
        title: "Les clients contestent les heures effectuées ?",
        desc: "Chaque pointage enregistre la position et l'heure. Vous envoyez le rapport et le client peut le contrôler seul.",
      },
      {
        title: "Les feuilles de présence papier ne sont pas fiables ?",
        desc: "Des pointages depuis le smartphone, sans saisie manuelle. La donnée reste telle qu'elle a été enregistrée : toute modification est détectable.",
      },
      {
        title: "Difficile de coordonner plusieurs équipes ?",
        desc: "Vous voyez qui a pointé, et où, sur tous les sites, depuis un seul écran. Sans coups de fil.",
      },
    ],
  },

  prima_dopo: {
    title: "Ce qui se passe aujourd'hui. Ce qui se passe avec GeoTapp.",
    prima: [
      "Le client appelle et dit que les toilettes n'ont pas été nettoyées.",
      "L'agent dit « je l'ai fait ». Le client dit « non, vous ne l'avez pas fait ».",
      "Vous n'avez rien en main pour prouver quoi que ce soit.",
      "La discussion dure des jours. Parfois, vous perdez le contrat.",
    ],
    dopo: [
      "Le client appelle et dit que les toilettes n'ont pas été nettoyées.",
      "Vous ouvrez le rapport d'intervention : photo des toilettes propres, heure, position.",
      "Vous le lui envoyez, et il le vérifie lui-même.",
      "Vous avez de quoi montrer ce qui s'est passé. L'agent aussi.",
    ],
  },

  workflow: {
    title: "Comment ça marche",
    subtitle: "Trois étapes simples. Zéro papier. Zéro coup de fil.",
    steps: [
      {
        title: "L'agent pointe sur site",
        desc: "Il ouvre et clôt sa vacation depuis son smartphone. GeoTapp enregistre la position et l'heure à cet instant et, si besoin, des photos de preuve. Entre deux pointages, rien n'est enregistré automatiquement.",
      },
      {
        title: "Le responsable voit chaque pointage dès qu'il arrive",
        desc: "Un seul écran pour tous les sites. Vous voyez qui a pointé, où et à quelle heure, sans courir après personne.",
      },
      {
        title: "Le rapport est prêt automatiquement",
        desc: "En fin de vacation, le système génère un rapport scellé avec GPS, photos et sceau. Envoyez-le au client, qui peut le vérifier en toute autonomie.",
      },
    ],
  },

  differenza: {
    title: "Pointage ou preuve de service.",
    subtitle: "La plupart des applis enregistrent des horaires. GeoTapp produit des preuves pour votre client.",
    rows: [
      {
        label: "Ce qui est enregistré",
        competitor: "Heure d'entrée et de sortie",
        geotapp: "Heure + position au pointage + photos + tâches réalisées",
      },
      {
        label: "Qui peut vérifier",
        competitor: "Uniquement votre bureau",
        geotapp: "Vous, le client, un tiers, en toute autonomie",
      },
      {
        label: "En cas de contestation",
        competitor: "Uniquement votre parole",
        geotapp: "Rapport scellé, toute modification est détectable",
      },
      {
        label: "Photos de preuve",
        competitor: "Absentes ou déconnectées",
        geotapp: "Jointes au rapport avec horodatage et GPS",
      },
      {
        label: "Conformité RGPD",
        competitor: "Souvent à vérifier",
        geotapp: "Conçu pour rester dans le cadre du RGPD, modèles de documents inclus",
      },
    ],
  },

  features: {
    title: "Appli pour entreprise de propreté : des preuves de service, pas seulement des pointages.",
    items: [
      {
        title: "Preuves de service automatiques",
        desc: "Chaque intervention terminée génère un rapport avec GPS, photos et horodatage. Le client le reçoit et le vérifie seul, sans accès à votre système.",
      },
      {
        title: "Une vision claire de tous les sites",
        desc: "Vous voyez qui a pointé, et où, dans tous les bâtiments, à mesure que chaque pointage arrive. Pas de coups de fil, pas d'e-mails. Entre deux pointages, rien n'est enregistré automatiquement.",
      },
      {
        title: "Des rapports que chacun peut contrôler",
        desc: "Chaque rapport est scellé, et toute modification est détectable. Un client, un inspecteur ou un conseil peut le vérifier en toute autonomie.",
      },
      {
        title: "Gestion des vacations et des équipes",
        desc: "Assignez les vacations, gérez les chantiers et recevez une alerte si une vacation reste ouverte.",
      },
      {
        title: "Documentation photographique",
        desc: "Les agents prennent des photos directement depuis l'appli. Chaque image porte l'heure et la position : une preuve visuelle du travail accompli.",
      },
      {
        title: "Votre personnel est protégé",
        desc: "Un rapport vérifiable donne aussi à l'agent de quoi répondre aux accusations infondées. Un travail bien fait se démontre avec des données.",
      },
    ],
  },

  testimonial: {
    quote: "Quand un client conteste une prestation, nous envoyons le rapport avec photos et position et il le contrôle lui-même.",
    author: "Sabine M.",
    role: "Dirigeante, entreprise de propreté",
  },

  faq: {
    title: "Questions fréquentes",
    subtitle: "Ce qu'on nous demande le plus souvent avant de commencer.",
    items: [
      {
        q: "Comment fonctionne le pointage GPS pour les entreprises de propreté ?",
        a: "L'agent pointe son arrivée et son départ depuis son smartphone. GeoTapp enregistre la position GPS à cet instant, sans saisie manuelle. Chaque pointage figure dans le rapport scellé avec horodatage et position, que le client peut vérifier.",
      },
      {
        q: "Puis-je prouver au client que la prestation a été réalisée ?",
        a: "Oui. GeoTapp génère automatiquement un rapport scellé avec GPS, photos et horodatage à la fin de chaque intervention. Le client le reçoit et le vérifie seul, sans accès à votre système.",
      },
      {
        q: "GeoTapp est-il conçu pour rester dans le cadre du RGPD pour la géolocalisation des salariés ?",
        a: "GeoTapp est conçu pour rester dans le cadre des règles de protection des données : il n'enregistre la position que lorsque l'agent pointe (début, pause, fin) ou prend une photo de preuve, fait signer l'information aux salariés dans l'appli avant le premier pointage et ne collecte aucune donnée inutile. Rien n'est enregistré automatiquement entre-temps.",
      },
      {
        q: "Comment gérer des équipes réparties sur plusieurs sites ?",
        a: "Avec GeoTapp Flow, vous avez un seul écran pour tous les sites. Vous voyez qui a pointé et où, vous assignez des chantiers et vous recevez une alerte si une vacation reste ouverte.",
      },
      {
        q: "Les feuilles de présence papier sont-elles encore nécessaires ?",
        a: "Non. GeoTapp remplace les feuilles de présence papier par des pointages depuis le smartphone. Les données s'exportent en Excel ou CSV pour le traitement de la paie.",
      },
      {
        q: "Combien coûte GeoTapp pour une entreprise de propreté ?",
        a: "GeoTapp Flow démarre à 39 € par mois ; chaque agent équipé de l'appli TimeTracker coûte 3 € de plus par mois (2,50 € à partir du 26e poste). L'abonnement court sur 12 mois minimum. Les prix sont hors TVA. Vous pouvez l'essayer gratuitement pendant 14 jours, sans carte bancaire.",
      },
      {
        q: "GeoTapp fait-il du suivi GPS des agents ?",
        a: "Pas de suivi en continu. L'agent pointe son arrivée et son départ depuis son smartphone et chaque pointage est lié à une position GPS et à un horodatage, enregistrés à cet instant (début, pause, fin) et lorsqu'une photo de preuve est prise. C'est une position pour prouver la présence, pas de la surveillance : rien n'est enregistré automatiquement entre-temps, et l'appli ne demande pas l'autorisation de localisation en arrière-plan.",
      },
    ],
  },

  cta: {
    title: "Vos agents font du bon travail. Faites en sorte que le client le voie.",
    subtitle: "Chaque intervention devient un rapport que vous pouvez montrer, et que le client peut vérifier seul.",
    primary: "Essayer gratuitement pendant 14 jours",
    secondary: "Voir les tarifs",
  },

  pricing_hint: {
    label: "Postes TimeTracker à partir de",
    per: "par agent et par mois, en plus de l'offre Flow à partir de 39 € par mois (hors TVA)",
    note: "Essai gratuit de 14 jours",
  },

  schema_sector_name: "Entreprise de propreté",

  schema_faq: [
    {
      question: "Comment fonctionne le pointage GPS pour les entreprises de propreté ?",
      answer: "L'agent pointe son arrivée et son départ depuis son smartphone. GeoTapp enregistre la position GPS à cet instant, sans saisie manuelle. Chaque pointage figure dans le rapport scellé avec horodatage et position, que le client peut vérifier.",
    },
    {
      question: "Puis-je prouver au client que la prestation a été réalisée ?",
      answer: "Oui. GeoTapp génère automatiquement un rapport scellé avec GPS, photos et horodatage. Le client le reçoit et le vérifie seul.",
    },
    {
      question: "GeoTapp est-il conçu pour rester dans le cadre du RGPD pour la géolocalisation des salariés ?",
      answer: "GeoTapp est conçu pour rester dans le cadre des règles de protection des données : il n'enregistre la position que lorsque l'agent pointe (début, pause, fin) ou prend une photo de preuve, fait signer l'information aux salariés dans l'appli avant le premier pointage et ne collecte aucune donnée inutile. Rien n'est enregistré automatiquement entre-temps.",
    },
    {
      question: "GeoTapp fait-il du suivi GPS des agents ?",
      answer: "Pas de suivi en continu. L'agent pointe son arrivée et son départ depuis son smartphone et chaque pointage est lié à une position GPS et à un horodatage, enregistrés à cet instant (début, pause, fin) et lorsqu'une photo de preuve est prise. Rien n'est enregistré automatiquement entre-temps.",
    },
  ],
};

export default content;
