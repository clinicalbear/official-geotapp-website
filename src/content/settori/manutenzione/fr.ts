import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App maintenance : équipes et interventions avec GPS | GeoTapp',
    description:
      'Gérez vos équipes de maintenance avec le GPS : interventions, plannings, preuves de service. Historique complet par site client. Essayez GeoTapp gratuitement.',
  },

  hero: {
    badge: 'Application pour équipes de maintenance',
    h1_line1: 'Votre équipe de maintenance,',
    h1_line2: 'chaque visite documentée.',
    subtitle:
      'Enregistrez les interventions, planifiez les équipes et documentez chaque visite avec la position au pointage et des photos de preuve. Historique complet par installation et par client, sans aucune saisie manuelle.',
    cta_primary: 'Essayez GeoTapp gratuitement pendant 14 jours',
    cta_note: 'L\'essai ne vous engage à rien. Aucune carte bancaire requise.',
  },

  pain: {
    title: 'Les problèmes que nous résolvons chaque jour',
    items: [
      {
        title: 'Comment documentez-vous les interventions périodiques ?',
        desc: 'Rapport automatique avec GPS, heures et photos pour chaque visite. L\'historique est complet et téléchargeable, sans aucune saisie manuelle.',
      },
      {
        title: 'Les techniciens arrivent-ils vraiment à l\'heure prévue ?',
        desc: 'Vous le voyez dès que le technicien pointe, sans appel : l\'heure et la position d\'arrivée sont déjà dans Flow, pour chaque site.',
      },
      {
        title: 'Comment prouvez-vous le service rendu à vos clients ?',
        desc: 'Historique complet téléchargeable pour chaque site : dates, heures, GPS et photos. Le client vérifie de son côté, sans accéder à votre système.',
      },
    ],
  },

  workflow: {
    title: 'Comment ça fonctionne',
    subtitle: 'Trois étapes simples. Zéro papier. Zéro appel.',
    steps: [
      {
        title: 'Le technicien pointe avec le GPS à son arrivée sur le site',
        desc: 'Il ouvre l\'intervention depuis son smartphone. GeoTapp enregistre l\'heure et la position à cet instant, ainsi que les photos de preuve. Entre deux pointages, rien n\'est enregistré automatiquement.',
      },
      {
        title: 'Les heures et l\'intervention sont enregistrées automatiquement',
        desc: 'Les heures travaillées sont rattachées au site et au type d\'intervention. À chaque pointage, le responsable voit l\'état de chaque visite.',
      },
      {
        title: 'Le client reçoit le rapport scellé',
        desc: 'À la fin de l\'intervention, le système génère un rapport avec GPS, heures et sceau. Le client le vérifie de son côté, sans accès à votre outil de gestion.',
      },
    ],
  },

  features: {
    title: 'App maintenance : chaque intervention documentée.',
    items: [
      {
        title: 'Présences avec position et heure',
        desc: 'Chaque arrivée, pause et départ est enregistré avec la position, l\'heure et le site assigné, et figure dans le rapport scellé. À montrer au client ou à l\'inspection du travail en cas de besoin.',
      },
      {
        title: 'Historique de maintenance par installation',
        desc: 'Chaque intervention est liée au site ou à l\'installation. L\'historique complet est consultable et téléchargeable, pour vous et pour le client.',
      },
      {
        title: 'Rapports automatiques et scellés',
        desc: 'À la fin de l\'intervention, le système génère un rapport scellé : heures, positions, photos et sceau. Le client peut le vérifier lui-même.',
      },
      {
        title: 'Planification des plannings et des équipes',
        desc: 'Assignez les interventions, gérez les plannings et recevez une alerte si un pointage reste ouvert.',
      },
      {
        title: 'Documentation photographique',
        desc: 'Les techniciens prennent des photos directement depuis l\'app : avant, pendant et après l\'intervention. Chaque image est géolocalisée et horodatée.',
      },
      {
        title: 'Pointage en un geste',
        desc: 'Le technicien pointe son arrivée avec le GPS, note ses pauses et clôture l\'intervention d\'un geste. Chaque photo prise reste liée à l\'intervention et à ses horaires.',
      },
    ],
  },

  testimonial: {
    quote:
      'Avec GeoTapp, chaque intervention de maintenance est documentée, et nous envoyons à nos clients le rapport de chaque visite.',
    author: 'André L.',
    role: 'Responsable maintenance, facility management',
  },

  faq: {
    title: 'Questions fréquentes',
    subtitle: 'Ce qu\'on nous demande le plus souvent avant de commencer.',
    items: [
      {
        q: 'Comment documentez-vous les interventions périodiques de maintenance ?',
        a: 'GeoTapp génère automatiquement un rapport pour chaque visite avec GPS, heures et photos. L\'historique est complet et téléchargeable par installation ou par site client, sans aucune saisie manuelle.',
      },
      {
        q: 'Les techniciens arrivent-ils vraiment à l\'heure prévue ?',
        a: 'Avec GeoTapp, vous voyez l\'heure d\'arrivée et la position de chaque technicien au moment où il pointe. Aucun appel : la donnée est déjà dans Flow.',
      },
      {
        q: 'Comment prouver au client le service de maintenance rendu ?',
        a: 'GeoTapp conserve un historique complet téléchargeable pour chaque site client : dates, heures, GPS et photos de chaque intervention. Vous envoyez au client le rapport scellé, qu\'il vérifie lui-même sans accéder à votre système.',
      },
      {
        q: 'GeoTapp convient-il à la maintenance d\'installations et au facility management ?',
        a: 'Oui. GeoTapp est utilisé par des entreprises de maintenance, de facility management et des sociétés dont les équipes sont réparties sur plusieurs sites. Il convient aussi bien à une petite équipe qu\'à une entreprise de plusieurs centaines de techniciens.',
      },
      {
        q: 'GeoTapp respecte-t-il le RGPD pour la géolocalisation ?',
        a: 'GeoTapp est conçu pour rester dans le cadre du RGPD : il enregistre la position uniquement quand le technicien pointe (arrivée, pauses, départ) ou prend une photo de preuve, fait signer l\'information aux salariés dans l\'app avant le premier pointage et ne collecte aucune donnée inutile.',
      },
      {
        q: 'Combien coûte GeoTapp pour une entreprise de maintenance ?',
        a: 'GeoTapp Flow démarre à 39 € par mois ; les postes TimeTracker pour les techniciens coûtent 3 € par mois chacun jusqu\'à 25. Abonnement d\'une durée minimale de 12 mois. Vous pouvez d\'abord l\'essayer gratuitement pendant 14 jours, sans carte bancaire. Prix hors TVA.',
      },
    ],
  },

  cta: {
    title: 'Chaque intervention de maintenance mérite une preuve. GeoTapp la génère.',
    subtitle:
      'Rapports vérifiables, position aux pointages, historique complet pour chaque installation.',
    primary: 'Essayez gratuitement pendant 14 jours',
    secondary: 'Voir les tarifs',
  },

  pricing_hint: {
    label: 'Postes TimeTracker à partir de',
    per: 'par opérateur et par mois, plus le forfait Flow à partir de 39 € par mois',
    note: 'Essai gratuit de 14 jours',
  },

  schema_sector_name: 'Maintenance',

  schema_faq: [
    {
      question: 'Comment documentez-vous les interventions périodiques de maintenance ?',
      answer:
        'GeoTapp génère automatiquement un rapport pour chaque visite avec GPS, heures et photos. L\'historique est complet et téléchargeable par installation ou par site client, sans aucune saisie manuelle.',
    },
    {
      question: 'Les techniciens arrivent-ils vraiment à l\'heure prévue ?',
      answer:
        'Avec GeoTapp, vous voyez l\'heure d\'arrivée et la position de chaque technicien au moment où il pointe. La donnée est déjà dans Flow, sans appel.',
    },
    {
      question: 'Comment prouver au client le service de maintenance rendu ?',
      answer:
        'GeoTapp conserve un historique complet téléchargeable pour chaque site client : dates, heures, GPS et photos de chaque intervention. Vous envoyez au client le rapport scellé, qu\'il vérifie lui-même.',
    },
  ],
};

export default content;
