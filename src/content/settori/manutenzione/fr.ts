import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App Maintenance : Gestion des Équipes et Interventions GPS | GeoTapp',
    description:
      'Gérez vos équipes de maintenance avec GPS : interventions, plannings, preuves de service. Historique complet par installation ou site client. Essayez GeoTapp gratuitement.',
  },

  hero: {
    badge: 'Application pour équipes de maintenance',
    h1_line1: 'Votre équipe de maintenance,',
    h1_line2: 'toujours sous contrôle.',
    subtitle:
      'Suivez les interventions, planifiez les équipes et documentez chaque visite avec GPS réel et preuves photo. Historique complet par installation et client — sans saisie manuelle.',
    cta_primary: 'Essayez GeoTapp gratuitement pendant 14 jours',
    cta_note: 'Sans engagement. Aucune carte de crédit requise.',
  },

  pain: {
    title: 'Problèmes que nous résolvons chaque jour',
    items: [
      {
        title: 'Comment documentez-vous les visites de maintenance périodiques ?',
        desc: 'Rapport automatique avec GPS, heures et photos pour chaque visite. Historique complet, téléchargeable — sans saisie manuelle.',
      },
      {
        title: 'Les techniciens arrivent-ils vraiment à l\'heure ?',
        desc: 'Vérification en temps réel sans appels. GPS et heure d\'arrivée sont déjà disponibles dans votre tableau de bord, pour chaque site.',
      },
      {
        title: 'Comment prouvez-vous le service rendu ?',
        desc: 'Historique complet téléchargeable par site client : dates, heures, GPS et photos. Le client vérifie de manière autonome, sans accès à votre système.',
      },
    ],
  },

  workflow: {
    title: 'Comment ça fonctionne',
    subtitle: 'Trois étapes simples. Zéro papier. Zéro appels.',
    steps: [
      {
        title: 'Le technicien pointe GPS à l\'arrivée',
        desc: 'Il ouvre l\'intervention depuis son smartphone. GeoTapp enregistre les coordonnées GPS réelles, l\'horodatage et les photos — entièrement automatique, infalsifiable.',
      },
      {
        title: 'Les heures et l\'intervention sont enregistrées automatiquement',
        desc: 'Chaque minute travaillée est liée au site et au type d\'intervention. Le responsable voit l\'état en temps réel de chaque visite.',
      },
      {
        title: 'Le client reçoit le rapport signé numériquement',
        desc: 'À la fin de l\'intervention, le système génère un rapport avec GPS, heures et signature numérique. Le client le vérifie de manière autonome.',
      },
    ],
  },

  features: {
    title: 'App maintenance : contrôle total sur chaque intervention.',
    items: [
      {
        title: 'Présence vérifiée par GPS',
        desc: 'Chaque arrivée et départ est certifié avec GPS réel, horodatage et site assigné. Défendable face au client et aux inspecteurs.',
      },
      {
        title: 'Historique de maintenance par installation',
        desc: 'Chaque intervention est liée au site ou à l\'installation. L\'historique complet est consultable et téléchargeable.',
      },
      {
        title: 'Rapports automatiques infalsifiables',
        desc: 'Après chaque intervention, le système génère un rapport scellé : heures, GPS, photos et signature numérique.',
      },
      {
        title: 'Planification des équipes',
        desc: 'Assignez des interventions, gérez les plannings et recevez des alertes automatiques si une tâche n\'est pas ouverte ou fermée à temps.',
      },
      {
        title: 'Documentation photographique',
        desc: 'Les techniciens prennent des photos directement depuis l\'app : avant, pendant et après l\'intervention. Chaque image est géolocalisée avec horodatage.',
      },
      {
        title: 'Fonctionne hors ligne',
        desc: 'Sur les sites sans connexion, les données sont sauvegardées localement et synchronisées dès le retour de la connexion.',
      },
    ],
  },

  testimonial: {
    quote:
      'Avec GeoTapp, chaque visite de maintenance est tracée. Les clients voient l\'historique complet par installation et il n\'y a plus de discussions sur les heures ou les travaux effectués.',
    author: 'André L.',
    role: 'Responsable maintenance, facility management — France',
  },

  faq: {
    title: 'Questions fréquentes',
    subtitle: 'Ce qu\'on nous demande le plus souvent avant de commencer.',
    items: [
      {
        q: 'Comment documentez-vous les visites de maintenance périodiques ?',
        a: 'GeoTapp génère automatiquement un rapport par visite avec GPS, heures et photos. Historique complet par installation ou site client — sans saisie manuelle.',
      },
      {
        q: 'Les techniciens arrivent-ils vraiment à l\'heure ?',
        a: 'Avec GeoTapp, vous pouvez vérifier l\'heure d\'arrivée et la position GPS de chaque technicien en temps réel. Aucun appel nécessaire.',
      },
      {
        q: 'Comment prouver au client le service de maintenance rendu ?',
        a: 'GeoTapp conserve un historique complet téléchargeable par site client : dates, heures, GPS et photos. Le client vérifie de manière autonome.',
      },
      {
        q: 'GeoTapp fonctionne-t-il pour la maintenance d\'installations et le facility management ?',
        a: 'Oui. GeoTapp est utilisé par des entreprises de maintenance, de facility management et des organisations avec des équipes réparties. La plateforme s\'adapte de 3 à 300 techniciens.',
      },
      {
        q: 'GeoTapp est-il conforme au RGPD ?',
        a: 'Oui. GeoTapp ne géolocalise que pendant les heures de travail actives, inclut les formulaires d\'information aux salariés et ne collecte aucune donnée inutile.',
      },
      {
        q: 'Combien coûte GeoTapp pour une entreprise de maintenance ?',
        a: 'Les plans démarrent à quelques euros par technicien par mois. Essai gratuit de 14 jours — sans engagement.',
      },
    ],
  },

  cta: {
    title: 'Chaque intervention de maintenance mérite une preuve. GeoTapp la crée.',
    subtitle:
      'Rapports vérifiables, GPS réel, historique complet par installation. Votre travail devient défendable.',
    primary: 'Commencez gratuitement !',
    secondary: 'Voir les Tarifs',
  },

  pricing_hint: {
    label: 'À partir de',
    per: 'technicien/mois',
    note: 'Essai gratuit 14 jours',
  },

  schema_sector_name: 'Maintenance',

  schema_faq: [
    {
      question: 'Comment documentez-vous les visites de maintenance périodiques ?',
      answer:
        'GeoTapp génère automatiquement un rapport par visite avec GPS, heures et photos. Historique complet par installation ou site client.',
    },
    {
      question: 'Les techniciens arrivent-ils vraiment à l\'heure ?',
      answer:
        'Avec GeoTapp, vous pouvez vérifier l\'heure d\'arrivée et la position GPS de chaque technicien en temps réel. Les données sont dans votre tableau de bord.',
    },
    {
      question: 'Comment prouver le service de maintenance rendu ?',
      answer:
        'GeoTapp conserve un historique complet téléchargeable par site client : dates, heures, GPS et photos. Le client vérifie de manière autonome.',
    },
  ],
};

export default content;
