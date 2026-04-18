import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App pour Électriciens | GeoTapp — Rapports GPS & Preuves',
    description: 'GeoTapp est l\'app pour électriciens : rapports GPS vérifiés, photos d\'installation et comptes-rendus inviolables. Clôturez les litiges avec de vraies preuves. Essai gratuit.',
  },
  hero: {
    badge: 'App pour Électriciens et Installateurs Électriques',
    h1_line1: 'App pour électriciens :',
    h1_line2: 'rapports GPS, preuves photo et zéro litige.',
    subtitle: 'GeoTapp enregistre chaque intervention électrique avec GPS, photos et horodatages vérifiables. Le client conteste ? Montrez le rapport — pas de discussion. Vos techniciens sont protégés, vos factures aussi.',
    cta_primary: 'Commencer gratuitement',
    cta_note: 'Sans engagement. Réponse sous 12 heures ouvrées.',
  },
  pain: {
    title: 'Le problème que chaque électricien connaît',
    items: [
      {
        title: 'Le client conteste l\'intervention ou les heures',
        desc: 'Il affirme que le technicien n\'était pas sur place ou que l\'installation n\'a pas été finalisée. Sans preuves vérifiables, le litige s\'étire pendant des semaines.',
      },
      {
        title: 'Aucune documentation de l\'installation après l\'intervention',
        desc: 'Le technicien a terminé le travail, mais il n\'y a aucune trace photographique ni note technique. Reconstruire ce qui a été fait devient impossible.',
      },
      {
        title: 'Le bureau ne sait pas où sont les techniciens',
        desc: 'Appels, messages, incertitude. Chaque fois que vous devez informer un client sur l\'avancement, vous devez d\'abord localiser le technicien.',
      },
    ],
  },
  workflow: {
    title: 'Comment ça fonctionne en trois étapes',
    subtitle: 'Du chantier au bureau — sans appels téléphoniques.',
    steps: [
      {
        title: 'Le technicien enregistre l\'intervention sur site',
        desc: 'Avec GeoTapp TimeTracker, il pointe entrée et sortie avec GPS, photographie l\'installation et ajoute des notes techniques depuis son smartphone.',
      },
      {
        title: 'Le bureau voit tout en temps réel',
        desc: 'GeoTapp Flow reçoit les données instantanément. Le responsable voit le chantier, le technicien affecté, l\'avancement et les preuves photo sans appeler.',
      },
      {
        title: 'Le rapport d\'intervention est votre preuve',
        desc: 'À la fin de l\'intervention, le système génère un rapport scellé : horodatage GPS, photos installation, notes techniques. Inviolable. Le client peut le vérifier de façon autonome.',
      },
    ],
  },
  features: {
    title: 'App pour électriciens : ce que vous obtenez avec GeoTapp.',
    items: [
      {
        title: 'Pointage GPS vérifiable',
        desc: 'Chaque arrivée et départ sur site est enregistré avec localisation, horodatage et chantier. Défendable face aux clients et aux organismes de contrôle.',
      },
      {
        title: 'Photos d\'installation scellées',
        desc: 'Le technicien photographie depuis l\'app en fin d\'intervention. Chaque image est liée au GPS et à l\'horodatage — inviolable après génération.',
      },
      {
        title: 'Rapports d\'intervention automatiques',
        desc: 'À la fin de la mission, le rapport est prêt : heures, photos, notes techniques et signature. Le technicien l\'envoie au client directement depuis l\'app.',
      },
      {
        title: 'Gestion multi-chantiers',
        desc: 'Affectez des interventions, suivez l\'avancement et recevez des alertes si une mission n\'est pas ouverte ou clôturée dans les délais.',
      },
      {
        title: 'Export paie',
        desc: 'Exportez les présences mensuelles compatibles avec Sage, Cegid et Silae. La gestion de la paie devient rapide.',
      },
      {
        title: 'Vos électriciens sont protégés',
        desc: 'Un rapport vérifiable protège le technicien des accusations infondées. Le bon travail est prouvé par les données.',
      },
    ],
  },
  testimonial: {
    quote: 'Avec GeoTapp, mes techniciens documentent l\'installation dès qu\'ils ont terminé. Aucun litige ne résiste au rapport. Les factures sont payées.',
    author: 'Jean-Pierre M.',
    role: 'Gérant, installation électrique',
  },
  faq: {
    title: 'Questions fréquentes',
    subtitle: 'Ce que les électriciens nous demandent le plus souvent avant de démarrer.',
    items: [
      {
        q: 'GeoTapp convient-elle comme app pour électriciens ?',
        a: 'Oui. GeoTapp est utilisée par des électriciens et des installateurs électriques pour gérer les interventions, les feuilles de temps, les présences et la documentation photo des installations.',
      },
      {
        q: 'GeoTapp aide-t-elle à résoudre les litiges clients ?',
        a: 'C\'est l\'usage principal : horodatages GPS, preuves photo et rapports scellés rendent tout litige infondé résolvable en quelques minutes.',
      },
      {
        q: 'GeoTapp est-elle conforme au RGPD ?',
        a: 'Oui. GeoTapp gère la géolocalisation des employés en conformité avec le RGPD. Les formulaires d\'information pour les collaborateurs sont fournis.',
      },
    ],
  },
  cta: {
    title: 'Chaque intervention bien faite mérite une preuve. GeoTapp la génère.',
    subtitle: 'Rapports vérifiables, GPS réel, photos scellées. Votre travail est défendable.',
    primary: 'Commencer gratuitement',
    secondary: 'Voir les tarifs',
  },
  pricing_hint: {
    label: 'À partir de',
    price: '3 €',
    per: 'opérateur/mois',
    note: 'Essai gratuit 14 jours',
  },
  schema_sector_name: 'Électriciens',
};

export default content;
