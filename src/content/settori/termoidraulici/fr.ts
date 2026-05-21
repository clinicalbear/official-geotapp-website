import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App pour Plombiers-Chauffagistes | GeoTapp — GPS, Rapports & Preuves',
    description: 'GeoTapp est l\'app pour installateurs de chauffage : rapports GPS vérifiés, photos d\'installations et documents infalsifiables. Résolvez les litiges avec de vraies preuves. Essayez gratuitement.',
  },
  hero: {
    badge: 'App pour Plombiers-Chauffagistes et Installateurs Thermosanitaires',
    h1_line1: 'App pour plombiers-chauffagistes :',
    h1_line2: 'rapports GPS, preuves photo et zéro litige.',
    subtitle: 'GeoTapp enregistre chaque intervention sur chaudière et installation avec GPS, photos et horodatages vérifiables. Le client conteste les pièces remplacées ? Montrez le rapport — pas de discussion. Vos techniciens sont protégés, vos factures aussi.',
    cta_primary: 'Démarrer gratuitement !',
    cta_note: 'Sans engagement. Réponse sous 12 heures ouvrables.',
  },
  pain: {
    title: 'Le problème que toute entreprise de chauffage connaît bien',
    items: [
      {
        title: 'Le client conteste les pièces remplacées sur la chaudière',
        desc: 'Il dit que vous avez installé des composants différents de ceux convenus, ou que l\'installation était déjà ainsi. Sans preuves photographiques, le litige devient parole contre parole.',
      },
      {
        title: 'Aucune documentation de l\'installation après l\'intervention',
        desc: 'Le technicien a terminé la réparation, mais il n\'y a ni trace photographique ni note technique. Si la panne revient, il est impossible de reconstituer ce qui a été fait.',
      },
      {
        title: 'Les urgences nocturnes et week-end ne sont pas traçables',
        desc: 'Les pannes de chauffage surviennent à des heures impossibles. Le technicien intervient, règle le problème, mais il ne reste rien à montrer au client ou à l\'assurance.',
      },
    ],
  },
  workflow: {
    title: 'Comment ça fonctionne en trois étapes',
    subtitle: 'Du chantier au bureau — sans appels téléphoniques.',
    steps: [
      {
        title: 'Le technicien enregistre l\'intervention sur le terrain',
        desc: 'Avec GeoTapp TimeTracker, il pointe l\'entrée et la sortie avec GPS, prend des photos de l\'installation et de la chaudière, ajoute des notes sur les pièces remplacées depuis son smartphone.',
      },
      {
        title: 'Le bureau voit tout en temps réel',
        desc: 'GeoTapp Flow reçoit les données instantanément. Le responsable voit le chantier, le technicien assigné, l\'avancement et les preuves photo sans appeler.',
      },
      {
        title: 'Le rapport est votre preuve',
        desc: 'En fin d\'intervention, le système génère un rapport scellé : horodatage GPS, photos de l\'installation et des pièces, notes techniques. Infalsifiable. Le client peut le vérifier de façon autonome.',
      },
    ],
  },
  differenza: {
    title: 'App pour plombiers-chauffagistes : enregistrement ou certification ?',
    subtitle: 'La plupart des apps enregistrent l\'heure de pointage. GeoTapp produit des preuves vérifiables.',
    rows: [
      {
        label: 'Ce qu\'il enregistre',
        competitor: 'Heure d\'entrée/sortie',
        geotapp: 'Heure + GPS vérifié + photos installation + pièces remplacées',
      },
      {
        label: 'En cas de litige',
        competitor: 'Donnée non défendable',
        geotapp: 'Rapport scellé, infalsifiable',
      },
      {
        label: 'Documentation de l\'intervention',
        competitor: 'Manuelle ou absente',
        geotapp: 'Générée automatiquement avec GPS et photos',
      },
      {
        label: 'Qui peut vérifier',
        competitor: 'Uniquement votre bureau',
        geotapp: 'Vous, le donneur d\'ordre, un tiers',
      },
      {
        label: 'Conformité RGPD',
        competitor: 'Souvent à vérifier',
        geotapp: 'Conforme par conception, formulaires inclus',
      },
    ],
  },
  prima_dopo: {
    title: 'Avant GeoTapp. Après GeoTapp.',
    prima: [
      'Le client conteste que la vanne a été remplacée.',
      'Vous n\'avez ni photos ni pièces documentées.',
      'La discussion dure des semaines. Vous risquez de ne pas être payé.',
      'Le technicien n\'a rien en main pour se défendre.',
    ],
    dopo: [
      'Le client conteste que la vanne a été remplacée.',
      'Vous ouvrez le rapport : photo de la pièce retirée, de la nouvelle installée, horodatage GPS, notes techniques.',
      'Vous l\'envoyez. Le litige se termine en une minute.',
      'La facture est sécurisée. Le technicien est protégé.',
    ],
  },
  scenario: {
    title: 'Cas réel',
    body: 'Un client conteste le remplacement d\'un brûleur de chaudière et refuse de payer la facture. Avec GeoTapp, vous ouvrez le rapport d\'intervention : photo de la pièce défectueuse retirée, de la nouvelle installée, horodatage GPS de l\'intervention et notes techniques du technicien — tout généré automatiquement depuis le smartphone sur place.',
    resolution: 'Le litige tombe. La facture est payée en totalité.',
  },
  features: {
    title: 'App pour plombiers-chauffagistes : ce que vous trouvez dans GeoTapp.',
    items: [
      {
        title: 'Pointage GPS vérifiable',
        desc: 'Chaque arrivée et départ de l\'installation est enregistré avec position, horodatage et chantier. Défendable devant le client et les assurances.',
      },
      {
        title: 'Photos d\'installation scellées',
        desc: 'Le technicien photographie depuis l\'app pendant et après l\'intervention. Chaque image est liée au GPS et à l\'horodatage — infalsifiable après génération.',
      },
      {
        title: 'Rapports d\'intervention numériques automatiques',
        desc: 'En fin de travaux, le rapport est prêt : heures, photos, pièces remplacées et signature. Le technicien l\'envoie au client directement depuis l\'app.',
      },
      {
        title: 'Gestion des chantiers et urgences',
        desc: 'Assignez des interventions urgentes, suivez l\'avancement et recevez des alertes si une activité n\'est pas terminée dans les délais prévus.',
      },
      {
        title: 'Export présences pour la paie',
        desc: 'Exportez les présences mensuelles compatibles avec les logiciels de paie français. Le traitement des salaires devient une opération rapide.',
      },
      {
        title: 'Vos techniciens sont protégés',
        desc: 'Un rapport vérifiable protège le technicien d\'accusations infondées sur les pièces ou les horaires. Celui qui travaille bien le prouve avec les données.',
      },
    ],
  },
  cta_mid: {
    title: 'Vous voulez voir comment ça fonctionne sur une vraie intervention chauffage ?',
    body: 'Nous vous montrons le flux complet : de l\'ouverture du chantier au rapport que reçoit le client. En 20 minutes, vous savez si c\'est fait pour vous.',
    cta: 'Démarrer gratuitement !',
  },
  trust: {
    title: 'Nos rapports ne peuvent pas être modifiés. Ni par vous. Ni par nous.',
    body: 'Les rapports GeoTapp sont générés par le système au moment de l\'intervention. Il n\'existe aucun panneau pour "corriger" une heure ou déplacer une photo. La donnée est celle-là — signée numériquement, avec un vrai GPS.',
    badge: 'Vérifiable par n\'importe qui — sans accès à votre compte',
  },
  testimonial: {
    quote: 'Avec GeoTapp, mes techniciens photographient l\'installation avant et après chaque intervention. Les litiges sur les pièces ont disparu. Les factures sont payées.',
    author: 'Marco S.',
    role: 'Gérant, installations thermosanitaires résidentielles et industrielles',
  },
  faq: {
    title: 'Questions fréquentes',
    subtitle: 'Ce que les plombiers-chauffagistes nous demandent le plus avant de commencer.',
    items: [
      {
        q: 'GeoTapp convient-il comme app pour plombiers-chauffagistes ?',
        a: 'Oui. GeoTapp est utilisé par les plombiers-chauffagistes et installateurs de chauffage pour gérer les interventions sur chaudières et installations avec rapports GPS, photos et heures vérifiables.',
      },
      {
        q: 'Puis-je utiliser GeoTapp pour documenter le remplacement de pièces sur chaudières ?',
        a: 'Oui. Le technicien photographie depuis l\'app la pièce retirée et celle installée. Chaque image est liée au GPS, à l\'horodatage et au chantier — incluse dans le rapport infalsifiable.',
      },
      {
        q: 'GeoTapp aide-t-il à résoudre les litiges clients sur les installations ?',
        a: 'C\'est exactement le principal cas d\'usage : horodatage GPS, preuves photographiques des pièces et rapport scellé rendent tout litige infondé résolvable en quelques minutes.',
      },
    ],
  },
  cta: {
    title: 'Chaque intervention chauffage bien faite mérite une preuve. GeoTapp la génère.',
    subtitle: 'Rapports vérifiables, GPS réel, photos scellées. Votre travail est défendable.',
    primary: 'Démarrer gratuitement !',
    secondary: 'Voir les tarifs',
  },
  pricing_hint: {
    label: 'À partir de',
    per: 'opérateur/mois',
    note: 'Essai gratuit 14 jours',
  },
  schema_sector_name: 'Plombiers-chauffagistes',
  schema_faq: [
    {
      question: 'GeoTapp fonctionne-t-il comme app pour plombiers-chauffagistes ?',
      answer: 'Oui. GeoTapp est l\'app pour plombiers-chauffagistes et installateurs qui enregistre chaque intervention sur chaudière et installation avec GPS, photos et horodatages vérifiables. Le technicien pointe depuis le terrain, le bureau voit tout en temps réel et le client reçoit un rapport scellé.',
    },
    {
      question: 'Comment certifier une intervention chaudière avec GeoTapp ?',
      answer: 'Le technicien enregistre le début et la fin avec GPS vérifié, photographie les pièces remplacées et ajoute des notes techniques. Le système génère un rapport scellé que le client peut vérifier de façon autonome.',
    },
    {
      question: 'GeoTapp gère-t-il plusieurs équipes de plombiers-chauffagistes sur différentes interventions ?',
      answer: 'Oui. GeoTapp Flow permet au dirigeant de coordonner plusieurs équipes, d\'assigner des interventions urgentes, de suivre l\'état des chantiers et de collecter les preuves photo de tous les sites actifs en temps réel.',
    },
    {
      question: 'Les rapports GeoTapp sont-ils acceptés en cas de litige sur installations thermiques ?',
      answer: 'Les rapports GeoTapp sont scellés avec GPS, horodatages et preuves photographiques. Ils ont été utilisés avec succès pour résoudre des litiges sur des travaux contestés par le client final.',
    },
  ],
};

export default content;
