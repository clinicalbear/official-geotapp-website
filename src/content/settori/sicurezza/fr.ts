import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Logiciel sécurité privée | GeoTapp - Vacations avec GPS',
    description: 'Le logiciel pour sociétés de sécurité privée : vacations avec position aux pointages, rondes documentées, photos de preuve. Conçu pour le RGPD. Essai gratuit.',
  },
  hero: {
    badge: 'Logiciel pour sécurité privée, agents de sécurité et sécurité événementielle',
    h1_line1: 'Présences et vacations vérifiables',
    h1_line2: 'pour la sécurité privée',
    subtitle: 'GeoTapp Flow et TimeTracker documentent la présence des agents aux postes assignés : position et heure à chaque pointage, photos de preuve, rapports scellés. Vacations, demandes d\'échange de poste et communications sur une seule plateforme. L\'app pour la sécurité privée qui scelle chaque vacation, chaque ronde, chaque présence.',
    cta_primary: 'Essayez gratuitement pendant 14 jours',
    cta_note: 'L\'essai ne vous engage à rien. Aucune carte bancaire.',
  },
  pain: {
    title: 'Les problèmes que vous connaissez déjà',
    items: [
      {
        title: 'Prouver la présence aux postes assignés',
        desc: 'Le client conteste la présence d\'un agent à une heure précise. Sans position ni horaires enregistrés, il reste votre parole contre la sienne, et vous risquez le contrat.',
      },
      {
        title: 'Des rapports d\'incident sans preuve de position',
        desc: 'Un rapport d\'incident rédigé à la main, sans position ni heure enregistrées, est facile à contester.',
      },
      {
        title: 'Passation de consignes encore sur papier',
        desc: 'La relève entre agents se fait avec des papiers ou des appels. Des informations critiques se perdent, les responsabilités ne sont pas claires et reconstituer après coup est difficile.',
      },
    ],
  },
  workflow: {
    title: 'Comment ça fonctionne en trois étapes',
    subtitle: 'Du poste de garde au bureau, sans papier.',
    steps: [
      {
        title: 'L\'agent pointe à son poste',
        desc: 'GeoTapp TimeTracker enregistre l\'arrivée, les pauses et le départ avec la position et l\'heure, ainsi que les photos de preuve aux points de contrôle. Chaque contrôle est documenté par l\'agent d\'un geste : entre deux pointages, rien n\'est enregistré automatiquement.',
      },
      {
        title: 'Le responsable voit les vacations dès qu\'elles arrivent',
        desc: 'Flow reçoit les données dès qu\'elles arrivent. Le responsable d\'exploitation vérifie la couverture de tous les postes, les échanges de poste et les écarts éventuels sans appeler le terrain.',
      },
      {
        title: 'Le rapport est votre preuve, défendable en audit',
        desc: 'En fin de vacation, le registre de présence est généré avec les positions enregistrées aux pointages, et toute modification est détectable. Le client ou les autorités peuvent en vérifier l\'intégrité eux-mêmes.',
      },
    ],
  },
  differenza: {
    title: 'Logiciel pour sociétés de sécurité : registre de présence ou preuves vérifiables ?',
    subtitle: 'La plupart des logiciels enregistrent les vacations. GeoTapp scelle chaque présence dans un rapport vérifiable.',
    rows: [
      {
        label: 'Ce qui est enregistré',
        competitor: 'Heure de début et de fin de vacation',
        geotapp: 'Heure + position au pointage + photos + position au poste assigné',
      },
      {
        label: 'Qui peut vérifier',
        competitor: 'Uniquement votre bureau',
        geotapp: 'Vous, le donneur d\'ordre, les autorités, en toute autonomie',
      },
      {
        label: 'En cas de litige',
        competitor: 'Votre seule parole',
        geotapp: 'Rapport scellé, vérifiable par des tiers',
      },
      {
        label: 'Preuve de ronde',
        competitor: 'Absente ou sur papier',
        geotapp: 'Position, heure et photo au point de contrôle',
      },
      {
        label: 'RGPD',
        competitor: 'Souvent à vérifier',
        geotapp: 'Conçu pour rester dans le cadre du RGPD, formulaires inclus',
      },
    ],
  },

  prima_dopo: {
    title: 'Ce qui se passe aujourd\'hui. Ce qui se passe avec GeoTapp.',
    prima: [
      'Le client conteste la présence de l\'agent à une heure précise.',
      'L\'agent dit « j\'étais là ». Le client dit « ce n\'est pas ce qui est enregistré ».',
      'Vous n\'avez rien pour le prouver. Le litige s\'éternise.',
      'Vous risquez de perdre le contrat.',
    ],
    dopo: [
      'Le client conteste la présence de l\'agent à une heure précise.',
      'Vous ouvrez le rapport : position au poste assigné, horaires, photo du site.',
      'Vous le lui envoyez, et il le vérifie lui-même.',
      'Vous avez une preuve à montrer.',
    ],
  },

  scenario: {
    title: 'Un cas typique',
    body: 'Le donneur d\'ordre affirme que l\'agent n\'était pas à son poste à une heure critique. Avec GeoTapp, vous ouvrez le rapport de vacation : position enregistrée au point de contrôle, horodatage scellé, photo du site, le tout enregistré depuis le smartphone de l\'agent quand il a pointé et pris les photos.',
    resolution: 'Au lieu d\'une parole contre une autre, il y a un document que le donneur d\'ordre vérifie lui-même.',
  },

  features: {
    title: 'Logiciel pour sociétés de sécurité : vacations scellées, contrôles documentés.',
    items: [
      {
        title: 'Pointage GPS vérifiable pour chaque agent',
        desc: 'Chaque présence est liée à une position, une heure et un poste assigné. À montrer au client, à l\'inspection du travail ou lors d\'un audit contractuel en cas de besoin.',
      },
      {
        title: 'Fiche de chaque agent',
        desc: 'Conservez dans la fiche de chaque agent son rôle, ses contacts et ses postes assignés, et décidez qui voit quoi dans l\'app.',
      },
      {
        title: 'Export Excel ou CSV pour la paie',
        desc: 'Exportez les présences du mois en Excel ou CSV, prêtes pour votre gestionnaire de paie. Le traitement de la paie devient une opération rapide, sans erreurs de ressaisie.',
      },
      {
        title: 'Passation de consignes numérique',
        desc: 'Les demandes d\'échange de poste passent par l\'app et les communications restent dans le canal du contrat : moins de papiers et d\'appels entre deux vacations.',
      },
      {
        title: 'Tableau de bord multisite mis à jour à chaque pointage',
        desc: 'Le responsable voit la dernière position pointée de chaque agent, l\'état de chaque poste et les échanges de poste en cours, depuis n\'importe quel appareil, sans appels.',
      },
      {
        title: 'Des rapports défendables en audit et devant les autorités',
        desc: 'Chaque vacation génère un rapport scellé avec positions, horaires et photos de preuve, que le client et les autorités peuvent vérifier eux-mêmes.',
      },
    ],
  },

  cta_mid: {
    title: 'Vous voulez voir comment ça fonctionne sur un vrai cas de contestation ?',
    body: 'Essayez-le sur le service réel, de l\'agent qui pointe à son poste au rapport que reçoit le donneur d\'ordre : 14 jours gratuits, sans carte bancaire.',
    cta: 'Essayez gratuitement pendant 14 jours',
  },

  trust: {
    title: 'Toute modification de nos rapports se voit, que ce soit vous ou nous.',
    body: 'Les rapports GeoTapp sont générés par le système au moment de la vacation. Une fois le rapport scellé, corriger une heure ou déplacer une photo brise le sceau, et la vérification le signale. Celui qui le reçoit, donneur d\'ordre ou autorités, peut le contrôler lui-même.',
    badge: 'Vérifiable par n\'importe qui, sans accès à votre compte',
  },
  testimonial: {
    quote: 'À nos clients, nous envoyons le registre de présence scellé, avec les positions des pointages : quand ils contestent, ils contrôlent eux-mêmes.',
    author: 'Laurent M.',
    role: 'Directeur des opérations, société de sécurité privée',
  },
  faq: {
    title: 'Questions fréquentes',
    subtitle: 'Ce qu\'on nous demande le plus souvent avant de commencer.',
    items: [
      {
        q: 'GeoTapp convient-il à la sécurité privée et aux agents de sécurité ?',
        a: 'Oui. GeoTapp est utilisé par des sociétés de sécurité privée pour documenter les présences aux postes assignés avec la position, gérer les vacations et les échanges de poste et recueillir les photos de preuve aux points de contrôle.',
      },
      {
        q: 'Comment GeoTapp aide-t-il pour les rapports d\'incident ?',
        a: 'TimeTracker relie chaque événement à une position et à une heure, scellées dans le rapport. Le rapport d\'incident généré par GeoTapp comprend les coordonnées, l\'heure et les photos, et le donneur d\'ordre peut vérifier lui-même que le document n\'a pas été modifié.',
      },
      {
        q: 'GeoTapp aide-t-il pour la relève entre agents ?',
        a: 'Oui. Les demandes d\'échange de poste passent par l\'app, les vacations figurent dans le calendrier de Flow et les communications restent dans le canal du contrat. Le responsable voit qui couvre quoi sans dépendre des appels.',
      },
    ],
  },
  cta: {
    title: 'La vacation a eu lieu. Maintenant, prouvez-le.',
    subtitle: 'GeoTapp génère des preuves vérifiables de chaque présence, des rapports scellés que le client et les autorités peuvent contrôler eux-mêmes.',
    primary: 'Essayez gratuitement pendant 14 jours',
    secondary: 'Voir les tarifs',
  },
  pricing_hint: {
    label: 'Postes TimeTracker à partir de',
    per: 'par opérateur et par mois, plus le forfait Flow à partir de 39 € par mois',
    note: 'Essai gratuit de 14 jours',
  },

  schema_sector_name: 'Sécurité privée',
  schema_faq: [
    {
      question: 'GeoTapp convient-il à la gestion des agents de sécurité et des rondes ?',
      answer: 'Oui. GeoTapp permet aux sociétés de sécurité de sceller chaque vacation et chaque ronde : les agents pointent depuis leur smartphone avec la position, et il en résulte des preuves documentées du service réalisé.',
    },
    {
      question: 'Comment documenter les rondes et les contrôles périodiques ?',
      answer: 'Chaque contrôle est enregistré avec GeoTapp TimeTracker : heure, position, photo du site et notes. Le rapport scellé est disponible pour le donneur d\'ordre dès sa génération, ou à la fin de la vacation.',
    },
    {
      question: 'Puis-je démontrer au client que les rondes ont été effectuées régulièrement ?',
      answer: 'Oui. Les rapports GeoTapp sont scellés et comprennent les positions, les horaires et les photos de preuve des points de contrôle. Le donneur d\'ordre peut vérifier lui-même que le rapport n\'a pas été modifié et voir à quelle heure et où l\'agent a pointé.',
    },
    {
      question: 'GeoTapp aide-t-il pour le travail de nuit et les conventions collectives de la sécurité ?',
      answer: 'GeoTapp enregistre les horaires, les heures supplémentaires et les majorations de nuit et de jours fériés, et les exporte pour votre gestionnaire de paie, qui les applique selon la convention collective. Il est conçu pour rester dans le cadre du RGPD : position enregistrée uniquement quand l\'agent pointe.',
    },
    {
      question: 'Est-ce que ça fonctionne aussi pour coordonner plusieurs équipes sur des sites différents ?',
      answer: 'Oui. Avec GeoTapp Flow, le responsable voit la dernière position pointée de tous les agents, assigne les vacations, gère les remplacements urgents et recueille les rapports de tous les sites sur un seul écran.',
    },
  ],
};

export default content;
