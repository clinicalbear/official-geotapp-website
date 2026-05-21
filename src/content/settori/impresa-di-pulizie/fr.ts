import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App pour Entreprise de Nettoyage : Gestion GPS des Équipes & Preuve de Service | GeoTapp',
    description:
      'Gérez équipes de nettoyage, plannings et présences avec GPS en temps réel. Preuves de service automatiques, zéro litiges clients. App conforme RGPD.',
  },

  hero: {
    badge: 'App pour entreprises de nettoyage et multiservices',
    h1_line1: 'Votre entreprise de nettoyage,',
    h1_line2: 'gérée en temps réel.',
    subtitle:
      'Pointage GPS, preuves de service automatiques et gestion des plannings dans une seule app. Fini les tableurs, fini les litiges. Le client conteste ? Envoyez le rapport et la discussion est close.',
    cta_primary: 'Essayez GeoTapp gratuitement pendant 14 jours',
    cta_note: 'Sans engagement. Aucune carte de crédit requise.',
  },

  pain: {
    title: 'Problèmes que nous résolvons chaque jour',
    items: [
      {
        title: 'Les clients contestent les heures travaillées ?',
        desc: 'Chaque pointage est vérifié par GPS et horodaté. Envoyez le rapport et la discussion se termine en trente secondes.',
      },
      {
        title: 'Les feuilles de présence papier sont peu fiables ?',
        desc: 'Suivi automatique depuis le smartphone, aucune saisie manuelle. Les données sont ce qu\'elles sont — et ne peuvent pas être modifiées.',
      },
      {
        title: 'Difficile de coordonner plusieurs équipes ?',
        desc: 'Voyez où tout le monde se trouve en temps réel, sur tous les sites, depuis un tableau de bord unique. Aucun appel.',
      },
    ],
  },

  prima_dopo: {
    title: 'Ce qui se passe maintenant. Ce qui se passe avec GeoTapp.',
    prima: [
      'Le client appelle et dit que les sanitaires n\'ont pas été nettoyés.',
      'L\'agent dit "Je l\'ai fait". Le client dit "Non, vous ne l\'avez pas fait".',
      'Vous n\'avez rien pour prouver quoi que ce soit.',
      'La discussion traîne pendant des jours. Parfois vous perdez le contrat.',
    ],
    dopo: [
      'Le client appelle et dit que les sanitaires n\'ont pas été nettoyés.',
      'Vous ouvrez le rapport d\'intervention : photo des sanitaires propres, heure, GPS.',
      'Vous l\'envoyez. La discussion se termine en trente secondes.',
      'Le contrat est en sécurité. L\'agent est protégé.',
    ],
  },

  workflow: {
    title: 'Comment ça fonctionne',
    subtitle: 'Trois étapes simples. Zéro papier. Zéro appels.',
    steps: [
      {
        title: 'L\'agent pointe avec GPS',
        desc: 'Ouvre et ferme son service depuis le smartphone. GeoTapp enregistre les coordonnées GPS réelles, photos et horodatage — entièrement automatique, infalsifiable.',
      },
      {
        title: 'Le responsable voit tout en temps réel',
        desc: 'Un seul tableau de bord pour tous les sites. Sachez exactement qui est sur place, où et depuis quand — sans courir après personne.',
      },
      {
        title: 'Le rapport est prêt automatiquement',
        desc: 'À la fin du service, le système génère un rapport scellé avec GPS, photos et signature numérique. Envoyez-le au client — vérifiable de manière autonome.',
      },
    ],
  },

  differenza: {
    title: 'Pointage vs Preuve de service.',
    subtitle: 'La plupart des apps enregistrent des horaires. GeoTapp produit des preuves pour votre client.',
    rows: [
      {
        label: 'Ce qui est enregistré',
        competitor: 'Heure de pointage entrée/sortie',
        geotapp: 'Heure + GPS vérifié + photos + tâches effectuées',
      },
      {
        label: 'Qui peut vérifier',
        competitor: 'Seulement votre bureau',
        geotapp: 'Vous, le donneur d\'ordre, un tiers — en autonomie',
      },
      {
        label: 'En cas de litige',
        competitor: 'Données non défendables',
        geotapp: 'Rapport scellé, infalsifiable',
      },
      {
        label: 'Preuve photographique',
        competitor: 'Absente ou déconnectée',
        geotapp: 'Jointe au rapport avec horodatage et GPS',
      },
      {
        label: 'Conformité RGPD',
        competitor: 'Souvent à vérifier',
        geotapp: 'Conforme par conception, formulaires inclus',
      },
    ],
  },

  features: {
    title: 'App pour entreprise de nettoyage : preuves de service, pas juste du pointage.',
    items: [
      {
        title: 'Preuves de service automatiques',
        desc: 'Chaque intervention terminée génère un rapport avec GPS, photos et horodatage. Le client le reçoit et vérifie de manière autonome.',
      },
      {
        title: 'Contrôle réel sur tous les sites',
        desc: 'Voyez en temps réel qui est actif où, sur tous les bâtiments simultanément. Aucun appel, aucun e-mail.',
      },
      {
        title: 'Rapports défendables partout',
        desc: 'Chaque rapport est signé numériquement et infalsifiable. Valable devant un client, un inspecteur ou un avocat.',
      },
      {
        title: 'Gestion des plannings et équipes',
        desc: 'Assignez des services, gérez les missions et recevez des alertes automatiques si une intervention n\'est pas ouverte ou fermée à temps.',
      },
      {
        title: 'Documentation photographique',
        desc: 'Les agents photographient directement depuis l\'app. Chaque image est géolocalisée avec horodatage — preuve visuelle du travail effectué.',
      },
      {
        title: 'Votre personnel est protégé',
        desc: 'Un rapport vérifiable protège aussi l\'agent contre les accusations infondées. Le bon travail est prouvé par les données.',
      },
    ],
  },

  testimonial: {
    quote:
      'Depuis que nous utilisons GeoTapp, les litiges clients se résolvent en une minute. Nous envoyons le rapport avec photos et GPS, et la discussion s\'arrête là. Nous n\'avons perdu aucun contrat en un an.',
    author: 'Sophie M.',
    role: 'Gérante, entreprise de nettoyage industriel — France',
  },

  faq: {
    title: 'Questions fréquentes',
    subtitle: 'Ce qu\'on nous demande le plus souvent avant de commencer.',
    items: [
      {
        q: 'Comment fonctionne le pointage GPS pour les entreprises de nettoyage ?',
        a: 'L\'agent pointe entrée et sortie depuis son smartphone. GeoTapp enregistre les coordonnées GPS à ce moment — pas de saisie manuelle. Chaque pointage est certifié avec horodatage et position vérifiable par le donneur d\'ordre.',
      },
      {
        q: 'Puis-je prouver au client que le service a été effectué ?',
        a: 'Oui. GeoTapp génère automatiquement un rapport scellé avec GPS, photos et horodatage à chaque fin d\'intervention. Le client le reçoit et vérifie de manière autonome.',
      },
      {
        q: 'GeoTapp est-il conforme au RGPD pour la géolocalisation des salariés ?',
        a: 'Oui. GeoTapp ne géolocalise que pendant les heures de travail actives, inclut les formulaires d\'information aux salariés et ne collecte aucune donnée inutile.',
      },
      {
        q: 'Comment gérer des équipes réparties sur plusieurs sites ?',
        a: 'Avec GeoTapp Flow vous avez un seul tableau de bord pour tous les sites. Voyez en temps réel qui est actif où, assignez des missions et recevez des alertes automatiques.',
      },
      {
        q: 'Les feuilles de présence papier sont-elles encore nécessaires ?',
        a: 'Non. GeoTapp remplace entièrement les feuilles de présence par un suivi GPS automatique depuis le smartphone. Les données sont exportables pour le traitement de la paie.',
      },
      {
        q: 'Combien coûte GeoTapp pour une entreprise de nettoyage ?',
        a: 'Les plans démarrent à quelques euros par agent par mois. Essai gratuit de 14 jours — sans engagement.',
      },
    ],
  },

  cta: {
    title: 'Vos agents font du bon travail. Faites en sorte que le client le voie.',
    subtitle:
      'Chaque intervention devient une preuve de service vérifiable. Zéro litige, zéro contrat perdu.',
    primary: 'Commencez gratuitement !',
    secondary: 'Voir les Tarifs',
  },

  pricing_hint: {
    label: 'À partir de',
    per: 'agent/mois',
    note: 'Essai gratuit 14 jours',
  },

  schema_sector_name: 'Entreprise de Nettoyage',

  schema_faq: [
    {
      question: 'Comment fonctionne le pointage GPS pour les entreprises de nettoyage ?',
      answer:
        'L\'agent pointe depuis son smartphone. GeoTapp enregistre les coordonnées GPS — pas de saisie manuelle. Chaque pointage est certifié avec horodatage et position vérifiable par le donneur d\'ordre.',
    },
    {
      question: 'Puis-je prouver au client que le service a été effectué ?',
      answer:
        'Oui. GeoTapp génère automatiquement un rapport scellé avec GPS, photos et horodatage. Le client le reçoit et vérifie de manière autonome.',
    },
    {
      question: 'GeoTapp est-il conforme au RGPD pour la géolocalisation des salariés ?',
      answer:
        'Oui. GeoTapp ne géolocalise que pendant les heures de travail actives, inclut les formulaires d\'information aux salariés et ne collecte aucune donnée inutile.',
    },
  ],
};

export default content;
