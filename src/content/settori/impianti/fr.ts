import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: "Appli pour installateurs : interventions et GPS | GeoTapp",
    description: "Documentez interventions, heures et matériaux, avec la position aux pointages. Des preuves de service à montrer en cas de contestation. Essai gratuit.",
  },
  hero: {
    badge: "Appli pour installateurs, techniciens et équipes d'intervention",
    h1_line1: "Chaque intervention documentée,",
    h1_line2: "chaque heure enregistrée.",
    subtitle: "Pour les installateurs en électricité, plomberie, chauffage et climatisation. GeoTapp associe Flow + TimeTracker pour enregistrer position, heures et photos de chaque affaire, du fourgon au bureau, sans coups de fil.",
    cta_primary: "Essayer GeoTapp gratuitement pendant 14 jours",
    cta_note: "L'essai ne vous engage à rien. Aucune carte bancaire requise.",
  },
  pain: {
    title: "Les problèmes que nous résolvons chaque jour",
    items: [
      {
        title: "Les clients contestent les heures d'intervention",
        desc: "Des pointages enregistrés avec position et heure. La donnée est scellée au moment de l'intervention : toute modification ultérieure est détectable.",
      },
      {
        title: "Vous courez après les techniciens pour savoir où ils sont",
        desc: "L'état des interventions sur un seul écran, mis à jour à chaque pointage d'un technicien. Vous voyez qui a pointé sur quelle affaire sans passer un seul coup de fil.",
      },
      {
        title: "Des rapports d'intervention incomplets ou jamais remis",
        desc: "Les données arrivent en retard, incomplètes, ou n'arrivent pas. Reconstituer heures et interventions en fin de mois est un travail à part, qui coûte du temps et de l'argent.",
      },
    ],
  },
  workflow: {
    title: "Comment ça marche",
    subtitle: "Trois étapes simples. Zéro papier. Zéro coup de fil.",
    steps: [
      {
        title: "Le technicien pointe au début de l'intervention",
        desc: "Il ouvre l'affaire depuis son smartphone. GeoTapp enregistre la position et l'heure à cet instant et, si besoin, des photos de preuve. Entre deux pointages, rien n'est enregistré automatiquement.",
      },
      {
        title: "Les heures sont enregistrées par affaire",
        desc: "À chaque pointage, les heures sont rattachées à la bonne affaire. Le responsable voit, dès qu'ils arrivent, qui a pointé sur quelle affaire.",
      },
      {
        title: "Le rapport client est généré sans rien saisir",
        desc: "En fin d'intervention, le système génère un rapport avec GPS, heures et sceau. Le client le reçoit et le vérifie en toute autonomie.",
      },
    ],
  },
  differenza: {
    title: "Appli pour installateurs : simple pointage ou preuve vérifiable ?",
    subtitle: "La plupart des applis enregistrent l'heure. GeoTapp produit des preuves vérifiables.",
    rows: [
      {
        label: "Ce qui est enregistré",
        competitor: "Heure d'entrée et de sortie",
        geotapp: "Heure + position au pointage + photos + travail réalisé",
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
        label: "Rapport d'intervention",
        competitor: "Manuel ou absent",
        geotapp: "Généré automatiquement avec GPS et photos",
      },
      {
        label: "Conformité RGPD",
        competitor: "Souvent à vérifier",
        geotapp: "Conçu pour rester dans le cadre du RGPD, modèles de documents inclus",
      },
    ],
  },
  prima_dopo: {
    title: "Ce qui se passe aujourd'hui. Ce qui se passe avec GeoTapp.",
    prima: [
      "Le client conteste l'heure de fin d'intervention et demande une remise.",
      "Le technicien dit « j'ai fait 4 heures ». Le client dit « je n'en vois que 2 ».",
      "Vous n'avez aucune preuve. La discussion dure des jours et le paiement est en jeu.",
      "En fin de mois, vous reconstituez heures et affaires à partir des messages WhatsApp.",
    ],
    dopo: [
      "Le client conteste ? Vous ouvrez le rapport : photos, position, horaires, sceau.",
      "Vous le lui envoyez. La discussion est réglée en une minute.",
      "Vous avez de quoi montrer ce qui s'est passé. Le technicien aussi.",
      "En fin de mois, l'export est déjà prêt, heures et affaires agrégées automatiquement.",
    ],
  },
  features: {
    title: "Des fonctionnalités pensées pour les installateurs et les équipes d'intervention",
    items: [
      {
        title: "Pointage GPS vérifiable",
        desc: "Chaque arrivée, pause et départ est lié à une position, une heure et une affaire. À montrer au client ou à l'inspection du travail en cas de besoin.",
      },
      {
        title: "Photos de preuve scellées",
        desc: "Le technicien prend des photos depuis l'appli. Chaque image est rattachée à l'intervention avec GPS et horodatage : toute modification après la génération est détectable.",
      },
      {
        title: "Gestion des affaires multi-chantiers",
        desc: "Assignez des affaires, suivez l'avancement de chaque intervention et recevez une alerte si une journée reste ouverte.",
      },
      {
        title: "Rapports d'intervention numériques automatiques",
        desc: "En fin d'intervention, le rapport est déjà prêt : heures, photos et notes. Pas de papier, pas de coups de fil. Le bureau l'envoie au client depuis Flow en un clic.",
      },
      {
        title: "Export pour la paie et la facturation",
        desc: "Exportez les présences mensuelles et les heures par affaire. Paie et facturation partent de données déjà prêtes, sans rien recopier.",
      },
      {
        title: "Position uniquement au pointage",
        desc: "Une géolocalisation conçue pour rester dans le cadre du RGPD : jamais en continu, et l'information aux salariés est signée dans l'appli avant de pointer.",
      },
    ],
  },
  testimonial: {
    quote: "Quand un client conteste les heures, nous ouvrons le rapport avec position et photos et il le contrôle lui-même.",
    author: "Robert F.",
    role: "Dirigeant, entreprise d'installations, 20 techniciens",
  },
  faq: {
    title: "Questions fréquentes",
    subtitle: "Ce qu'on nous demande le plus souvent avant de commencer.",
    items: [
      {
        q: "Les clients contestent-ils les heures d'intervention ?",
        a: "Avec GeoTapp, les pointages sont enregistrés avec la position et l'heure au moment de l'intervention, et toute modification est détectable. Vous avez un document à montrer quand quelqu'un met les heures en doute.",
      },
      {
        q: "Comment suivre plusieurs équipes sur des affaires différentes ?",
        a: "GeoTapp affiche l'état des interventions sur un seul écran, mis à jour à chaque pointage d'un technicien. Vous voyez qui a pointé sur quelle affaire, sans passer de coups de fil.",
      },
      {
        q: "Comment accélérer la facturation des interventions ?",
        a: "GeoTapp génère automatiquement l'export des heures et des affaires, en Excel ou CSV, prêt pour votre logiciel de gestion. Rien à recopier à la main : moins d'erreurs, et la facturation part de données déjà prêtes.",
      },
    ],
  },
  cta: {
    title: "Essayez GeoTapp gratuitement pendant 14 jours",
    subtitle: "L'essai ne vous engage à rien. Aucune carte bancaire requise.",
    primary: "Essayer gratuitement pendant 14 jours",
    secondary: "Voir les tarifs",
  },
  pricing_hint: {
    label: "Postes TimeTracker à partir de",
    per: "par technicien et par mois, en plus de l'offre Flow à partir de 39 € par mois (hors TVA)",
    note: "Essai gratuit de 14 jours",
  },
  schema_sector_name: "Installations",
  schema_faq: [
    {
      question: "Les clients contestent-ils les heures d'intervention ?",
      answer: "Avec GeoTapp, les pointages sont enregistrés avec la position et l'heure au moment de l'intervention, et toute modification est détectable. Vous avez un document à montrer quand quelqu'un met les heures en doute.",
    },
    {
      question: "Comment suivre plusieurs équipes sur des affaires différentes ?",
      answer: "GeoTapp affiche l'état des interventions sur un seul écran, mis à jour à chaque pointage d'un technicien. Vous voyez qui a pointé sur quelle affaire, sans passer de coups de fil.",
    },
    {
      question: "Comment accélérer la facturation des interventions ?",
      answer: "GeoTapp génère automatiquement l'export des heures et des affaires, en Excel ou CSV, prêt pour votre logiciel de gestion. Rien à recopier à la main : moins d'erreurs, et la facturation part de données déjà prêtes.",
    },
  ],
};

export default content;
