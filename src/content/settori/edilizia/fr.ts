import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: "Appli chantier BTP : pointage GPS et équipes | GeoTapp",
    description: "Gérez présences, équipes et sécurité sur vos chantiers grâce au pointage GPS. Rapports scellés et automatiques, conçus pour le RGPD, pour les entreprises du BTP.",
  },
  hero: {
    badge: "Appli pour entreprises du BTP et chantiers",
    h1_line1: "Votre chantier documenté,",
    h1_line2: "à chaque pointage.",
    subtitle: "Pointages avec position, gestion des équipes et rapports scellés automatiques. Zéro papier, et en cas de contestation, vous avez de quoi montrer ce qui s'est passé. GeoTapp associe Flow + TimeTracker pour ceux qui gèrent des chantiers, des sous-traitants et la maîtrise d'œuvre.",
    cta_primary: "Essayez-le sur un vrai chantier",
    cta_note: "14 jours, jusqu'à 50 intervenants sur le terrain, sans carte bancaire.",
  },
  pain: {
    title: "Les problèmes que nous résolvons chaque jour",
    items: [
      {
        title: "Qui était sur le chantier, et quand ?",
        desc: "Chaque pointage enregistre l'heure et la position relevées par le téléphone à cet instant, sans saisie manuelle, et alimente le rapport scellé que la maîtrise d'œuvre peut vérifier.",
      },
      {
        title: "Comment gérer les sous-traitants ?",
        desc: "Enregistrez les présences de toutes les équipes, sous-traitants compris, depuis un tableau de bord unique, mis à jour à chaque pointage.",
      },
      {
        title: "Les rapports de chantier vous prennent des heures ?",
        desc: "Ils sont générés automatiquement avec GPS, heures et présences. Prêts pour la maîtrise d'œuvre et pour les situations de travaux, sans aucune saisie manuelle.",
      },
    ],
  },
  workflow: {
    title: "Comment ça marche",
    subtitle: "Trois étapes simples. Zéro papier. Zéro coup de fil.",
    steps: [
      {
        title: "L'ouvrier pointe à l'entrée du chantier",
        desc: "Il ouvre sa journée depuis son smartphone. GeoTapp enregistre l'heure et la position à cet instant et, si besoin, des photos de preuve. Entre deux pointages, rien n'est enregistré automatiquement.",
      },
      {
        title: "Le chef de chantier voit les pointages dès qu'ils arrivent",
        desc: "Un seul tableau de bord pour toutes les équipes et tous les chantiers. Qui a pointé, où et à quelle heure, sans courir après personne au téléphone.",
      },
      {
        title: "Le rapport est prêt pour les situations de travaux et la maîtrise d'œuvre",
        desc: "En fin de journée ou de chantier, le système génère un rapport scellé avec présences, GPS et heures. Prêt pour la maîtrise d'œuvre sans une minute de travail manuel.",
      },
    ],
  },
  differenza: {
    title: "Appli chantier : un simple pointage ou une preuve vérifiable ?",
    subtitle: "La plupart des applis enregistrent l'heure. GeoTapp produit des preuves vérifiables.",
    rows: [
      {
        label: "Ce qui est enregistré",
        competitor: "Heure d'entrée et de sortie",
        geotapp: "Heure + position au pointage + photos + tâche réalisée",
      },
      {
        label: "Qui peut vérifier",
        competitor: "Uniquement votre bureau",
        geotapp: "Vous, la maîtrise d'œuvre, un tiers, en toute autonomie",
      },
      {
        label: "En cas de contestation",
        competitor: "Uniquement votre parole",
        geotapp: "Rapport scellé, toute modification est détectable",
      },
      {
        label: "Rapport de chantier",
        competitor: "Manuel ou absent",
        geotapp: "Généré automatiquement avec GPS et présences",
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
      "La maîtrise d'œuvre demande qui était sur le chantier mardi. Personne ne le sait avec certitude.",
      "Les feuilles de présence arrivent incomplètes, en retard ou illisibles.",
      "Le sous-traitant conteste les heures. Vous n'avez aucune preuve.",
      "Vous préparez la situation de travaux à la main, en reconstituant les données à partir des messages WhatsApp.",
    ],
    dopo: [
      "La maîtrise d'œuvre demande qui était là mardi. Vous ouvrez les pointages de ce jour-là : tout y est.",
      "Les présences sont enregistrées à chaque pointage, avec l'heure et la position.",
      "Le sous-traitant conteste ? Vous montrez le rapport scellé.",
      "La situation de travaux est déjà prête : heures, présences et GPS agrégés automatiquement.",
    ],
  },
  features: {
    title: "Des fonctionnalités pensées pour le chantier BTP",
    items: [
      {
        title: "Présences GPS scellées",
        desc: "Chaque arrivée, pause et départ du chantier est enregistré avec la position et l'heure. À montrer à la maîtrise d'œuvre, au maître d'ouvrage et à l'inspection du travail en cas de besoin.",
      },
      {
        title: "Tableau de bord multi-chantiers",
        desc: "Suivez plusieurs chantiers depuis un seul écran : pour chacun, vous voyez qui a pointé, où et à quelle heure, dès que le pointage arrive.",
      },
      {
        title: "Rapports automatiques pour les situations de travaux",
        desc: "Le système génère des rapports avec présences, heures et GPS agrégés. Prêts pour les situations de travaux et la maîtrise d'œuvre, sans saisie manuelle.",
      },
      {
        title: "Suivi des sous-traitants",
        desc: "Chaque équipe, interne ou externe, pointe depuis son smartphone. Le chef de chantier voit tout le monde sur un seul tableau de bord, sans courir après personne.",
      },
      {
        title: "Photos de preuve scellées",
        desc: "Les ouvriers prennent des photos depuis l'appli. Chaque image est rattachée au chantier avec GPS et horodatage : toute modification ultérieure est détectable.",
      },
      {
        title: "Position uniquement au pointage",
        desc: "Une géolocalisation conçue pour rester dans le cadre du RGPD : la position n'est relevée qu'au pointage, jamais en continu, et l'information aux salariés est signée dans l'appli avant de pointer.",
      },
    ],
  },
  testimonial: {
    quote: "Depuis que nous utilisons GeoTapp, la maîtrise d'œuvre ne nous réclame plus les feuilles de présence. Nous ouvrons le rapport et la situation de travaux est déjà prête.",
    author: "Joseph M.",
    role: "Dirigeant, entreprise du BTP, 35 salariés",
  },
  faq: {
    title: "Questions fréquentes",
    subtitle: "Ce qu'on nous demande le plus souvent avant de commencer.",
    items: [
      {
        q: "Qui était sur le chantier, et quand ?",
        a: "Chaque pointage enregistre l'heure et la position relevées par le téléphone à cet instant, sans saisie manuelle, et alimente le rapport scellé que la maîtrise d'œuvre peut vérifier.",
      },
      {
        q: "Comment gérer les sous-traitants sur le chantier ?",
        a: "GeoTapp enregistre les présences de toutes les équipes, sous-traitants compris. Chaque ouvrier pointe depuis son propre smartphone et le chef de chantier voit les pointages dès qu'ils arrivent, sur un tableau de bord unique.",
      },
      {
        q: "Les rapports de chantier demandent-ils des heures de travail manuel ?",
        a: "Non. GeoTapp génère les rapports automatiquement avec GPS, heures et présences. Ils sont prêts pour la maîtrise d'œuvre et pour les situations de travaux, sans aucune saisie manuelle.",
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
    per: "par ouvrier et par mois, en plus de l'offre Flow à partir de 39 € par mois (hors TVA)",
    note: "Essai gratuit de 14 jours",
  },
  schema_sector_name: "BTP",
  schema_faq: [
    {
      question: "Qui était sur le chantier, et quand ?",
      answer: "Chaque pointage enregistre l'heure et la position relevées par le téléphone à cet instant, sans saisie manuelle, et alimente le rapport scellé que la maîtrise d'œuvre peut vérifier.",
    },
    {
      question: "Comment gérer les sous-traitants sur le chantier ?",
      answer: "GeoTapp enregistre les présences de toutes les équipes, sous-traitants compris. Chaque ouvrier pointe depuis son propre smartphone et le chef de chantier voit les pointages dès qu'ils arrivent, sur un tableau de bord unique.",
    },
    {
      question: "Les rapports de chantier demandent-ils des heures de travail manuel ?",
      answer: "Non. GeoTapp génère les rapports automatiquement avec GPS, heures et présences. Ils sont prêts pour la maîtrise d'œuvre et pour les situations de travaux, sans aucune saisie manuelle.",
    },
  ],
};

export default content;
