import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App pour Plombiers & Chauffagistes | GeoTapp — GPS',
    description: 'GeoTapp est l\'app pour plombiers et chauffagistes : rapports GPS vérifiés, photos d\'installation et comptes-rendus inviolables. Clôturez les litiges avec de vraies preuves. Essai gratuit.',
  },
  hero: {
    badge: 'App pour Plombiers, Chauffagistes et Techniciens CVC',
    h1_line1: 'App pour plombiers et chauffagistes :',
    h1_line2: 'rapports GPS, preuves photo et zéro litige.',
    subtitle: 'GeoTapp enregistre chaque intervention plomberie et chauffage avec GPS, photos et horodatages vérifiables. Le client conteste ? Montrez le rapport — pas de discussion. Vos techniciens sont protégés, vos factures aussi.',
    cta_primary: 'Commencer gratuitement',
    cta_note: 'Sans engagement. Réponse sous 12 heures ouvrées.',
  },
  pain: {
    title: 'Le problème que chaque plombier connaît',
    items: [
      {
        title: 'Le client conteste l\'intervention ou les matériaux',
        desc: 'Il affirme que la réparation n\'a pas été effectuée ou que les matériaux étaient différents. Sans preuves vérifiables, chaque litige devient parole contre parole.',
      },
      {
        title: 'Aucune documentation après l\'intervention',
        desc: 'Le technicien a terminé le travail, mais aucune trace photographique ni note technique. En cas de panne ultérieure, reconstruire ce qui a été fait devient impossible.',
      },
      {
        title: 'Les urgences sont impossibles à documenter',
        desc: 'Les interventions d\'urgence sont les plus difficiles à documenter. Le technicien part en vitesse, travaille sans paperasse, et ensuite il n\'y a rien à montrer au client.',
      },
    ],
  },
  workflow: {
    title: 'Comment ça fonctionne en trois étapes',
    subtitle: 'De l\'intervention au bureau — sans appels téléphoniques.',
    steps: [
      {
        title: 'Le technicien enregistre l\'intervention sur site',
        desc: 'Avec GeoTapp TimeTracker, il pointe avec GPS, photographie le système avant et après, et ajoute des notes techniques depuis son smartphone.',
      },
      {
        title: 'Le bureau voit tout en temps réel',
        desc: 'GeoTapp Flow reçoit les données instantanément. Le responsable voit la mission, l\'avancement et les preuves photo sans appeler.',
      },
      {
        title: 'Le rapport est votre preuve',
        desc: 'À la fin de l\'intervention, un rapport scellé est généré : horodatage GPS, photos système, matériaux utilisés. Inviolable. Le client peut le vérifier de façon autonome.',
      },
    ],
  },
  features: {
    title: 'App pour plombiers et chauffagistes : ce que vous obtenez.',
    items: [
      {
        title: 'Pointage GPS vérifiable',
        desc: 'Chaque arrivée et départ est enregistré avec localisation, horodatage et mission. Défendable face aux clients et organismes de contrôle.',
      },
      {
        title: 'Photos système scellées',
        desc: 'Le technicien photographie avant et après l\'intervention. Chaque image est liée au GPS et à l\'horodatage — inviolable.',
      },
      {
        title: 'Rapports automatiques',
        desc: 'Heures, photos, notes, matériaux et signature prêts à la fin de l\'intervention. Le technicien envoie directement depuis l\'app.',
      },
      {
        title: 'Gestion urgences et maintenance',
        desc: 'Gérez interventions d\'urgence et maintenances planifiées depuis le même tableau de bord avec historique complet.',
      },
      {
        title: 'Export paie',
        desc: 'Présences mensuelles compatibles Sage, Cegid, Silae. La paie devient rapide.',
      },
      {
        title: 'Vos plombiers sont protégés',
        desc: 'Un rapport vérifiable protège le technicien des accusations infondées sur des travaux non réalisés ou des matériaux contestés.',
      },
    ],
  },
  testimonial: {
    quote: 'Avant, je passais des heures à expliquer les interventions aux clients. Maintenant j\'envoie le rapport et la discussion s\'arrête là.',
    author: 'Christophe L.',
    role: 'Gérant, plomberie et chauffage',
  },
  faq: {
    title: 'Questions fréquentes',
    subtitle: 'Ce que les plombiers nous demandent le plus souvent.',
    items: [
      {
        q: 'GeoTapp convient-elle pour les plombiers et chauffagistes ?',
        a: 'Oui. GeoTapp gère interventions, feuilles de temps, présences et documentation photo des systèmes pour plombiers et techniciens CVC.',
      },
      {
        q: 'GeoTapp gère-t-elle urgences et maintenance planifiée ?',
        a: 'Oui. Les deux types d\'intervention sont gérés depuis la même app. Chaque intervention génère un dossier avec preuves photo et GPS.',
      },
      {
        q: 'GeoTapp aide-t-elle à résoudre les litiges clients ?',
        a: 'C\'est l\'usage principal : GPS, preuves photo et rapports scellés rendent tout litige infondé résolvable en quelques minutes.',
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
    per: 'opérateur/mois',
    note: 'Essai gratuit 14 jours',
  },
  schema_sector_name: 'Plombiers et Chauffagistes',
};

export default content;
