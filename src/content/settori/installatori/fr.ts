import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App pour installateurs et chauffagistes | GeoTapp - Rapports GPS',
    description: 'Rapports d\'intervention avec position et photos, preuves photographiques et rapports où toute modification est détectable. Essayez GeoTapp gratuitement.',
  },
  hero: {
    badge: 'App pour installateurs, plombiers et chauffagistes',
    h1_line1: 'Le client conteste les heures ?',
    h1_line2: 'Montrez-lui le rapport GPS.',
    subtitle: 'Vos techniciens pointent depuis leur smartphone d\'un simple geste. Le système génère un rapport d\'intervention avec la position enregistrée et des photos : toute modification est détectable. Quand le client demande « combien de temps avez-vous mis ? », vous avez la réponse.',
    cta_primary: 'Essayez gratuitement pendant 14 jours',
    cta_note: 'Aucune carte bancaire. Opérationnel dès le premier jour.',
  },
  pain: {
    title: 'Le problème que vous connaissez déjà',
    items: [
      {
        title: 'Contestations sur les heures et les interventions',
        desc: 'Le client conteste l\'horaire. Le technicien n\'a aucune preuve. Le litige dure des semaines et coûte plus cher que l\'intervention elle-même.',
      },
      {
        title: 'Le bureau court après le terrain',
        desc: 'Le responsable appelle les techniciens pour savoir où ils sont, ce qu\'ils ont fait, quand ils terminent. Chaque appel interrompt les deux parties.',
      },
      {
        title: 'Rapports incomplets ou perdus',
        desc: 'Papiers, WhatsApp, e-mails : les données arrivent incomplètes, en retard ou pas du tout. Reconstituer le décompte final est un travail à part entière.',
      },
    ],
  },
  workflow: {
    title: 'Comment ça fonctionne en trois étapes',
    subtitle: 'De la camionnette au bureau, sans appels téléphoniques.',
    steps: [
      {
        title: 'Le technicien pointe sur le terrain',
        desc: 'Avec GeoTapp TimeTracker, il enregistre l\'arrivée, les pauses, le départ, les photos et les notes directement depuis son smartphone. La position n\'est relevée qu\'au moment du pointage, jamais en continu.',
      },
      {
        title: 'Le bureau voit tout dès que ça arrive',
        desc: 'Flow reçoit les données dès que le téléphone a du réseau. Le responsable voit l\'affaire, l\'avancement, le technicien assigné et les preuves photographiques sans appeler.',
      },
      {
        title: 'Le rapport est votre preuve, à montrer au client',
        desc: 'En fin d\'intervention, le rapport est généré avec les données GPS enregistrées et les preuves photographiques. Toute modification est détectable. Le client peut le vérifier lui-même. Quand un doute surgit, vous n\'avez rien à expliquer. Vous n\'avez qu\'à montrer.',
      },
    ],
  },
  differenza: {
    title: 'App pour installateurs : pointage ou preuve vérifiable ?',
    subtitle: 'La plupart des apps enregistrent l\'heure. GeoTapp produit des preuves vérifiables.',
    rows: [
      {
        label: 'Ce qui est enregistré',
        competitor: 'Heure d\'entrée et de sortie',
        geotapp: 'Heure + position au pointage + photos + activité réalisée',
      },
      {
        label: 'Qui peut vérifier',
        competitor: 'Uniquement votre bureau',
        geotapp: 'Vous, le donneur d\'ordre, un tiers, en toute autonomie',
      },
      {
        label: 'En cas de litige',
        competitor: 'Votre seule parole',
        geotapp: 'Rapport scellé, toute modification est détectable',
      },
      {
        label: 'Rapport d\'intervention',
        competitor: 'Manuel ou absent',
        geotapp: 'Généré automatiquement avec GPS et photos',
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
      'Le client conteste l\'heure ou l\'intervention réalisée.',
      'Le technicien dit « je l\'ai fait ». Le client dit « ce n\'est pas ce qui est enregistré ».',
      'Vous n\'avez rien en main. La discussion dure des jours.',
      'Parfois, vous perdez le paiement. Vous perdez toujours du temps.',
    ],
    dopo: [
      'Le client conteste l\'heure ou l\'intervention réalisée.',
      'Vous ouvrez le rapport : photos, GPS, heure, sceau.',
      'Vous le lui envoyez. La discussion est close en une minute.',
      'Vous avez une preuve à montrer. Le technicien aussi a quelque chose en main.',
    ],
  },

  scenario: {
    title: 'Un cas typique',
    body: 'Le client conteste l\'heure de fin des travaux et demande une remise sur la facture. Avec GeoTapp, vous ouvrez le rapport d\'intervention : photo de l\'installation terminée, heures et positions des pointages, durée calculée automatiquement, le tout généré depuis le smartphone du technicien au moment du travail.',
    resolution: 'Au lieu d\'une parole contre une autre, il y a un document que le client vérifie lui-même.',
  },

  features: {
    title: 'App pour installateurs et chauffagistes : rapports GPS et preuves photographiques.',
    items: [
      {
        title: 'Pointage GPS vérifiable',
        desc: 'Chaque arrivée, pause et départ est lié à la position, à l\'heure et à l\'affaire. À montrer au client ou à l\'inspection du travail en cas de besoin.',
      },
      {
        title: 'Preuves photographiques scellées',
        desc: 'Le technicien prend des photos depuis l\'app. Chaque image est liée à l\'intervention avec le GPS et l\'horodatage, puis incluse dans le rapport. Personne ne peut les modifier sans que le système le détecte.',
      },
      {
        title: 'Export pour la paie',
        desc: 'Exportez les présences du mois en Excel ou CSV, prêtes pour votre gestionnaire de paie ou votre expert-comptable.',
      },
      {
        title: 'Gestion des affaires multi-chantiers',
        desc: 'Assignez les affaires, suivez l\'avancement de chaque chantier et recevez une alerte si une vacation reste ouverte.',
      },
      {
        title: 'Rapports d\'intervention numériques automatiques',
        desc: 'En fin d\'intervention, le rapport est déjà prêt : heures, photos et notes. Pas de papier, pas d\'appels. Le bureau l\'envoie au client depuis Flow en un clic.',
      },
      {
        title: 'Vos techniciens aussi ont une preuve',
        desc: 'Un rapport vérifiable donne au technicien de quoi répondre aux accusations infondées. Celui qui travaille bien le prouve avec les données. Plus de zone grise entre le terrain et le bureau.',
      },
    ],
  },

  cta_mid: {
    title: 'Vous voulez voir comment ça fonctionne sur une vraie intervention ?',
    body: 'Essayez-le sur une vraie intervention, de l\'ouverture de l\'affaire au rapport que reçoit le client : 14 jours gratuits, sans carte bancaire.',
    cta: 'Essayez gratuitement pendant 14 jours',
  },

  trust: {
    title: 'Nos rapports : toute modification est détectable. Que ce soit vous ou nous.',
    body: 'Les rapports GeoTapp sont générés par le système au moment de l\'intervention. Une fois le rapport scellé, corriger une heure ou déplacer une photo brise le sceau, et la vérification le signale. Celui qui le reçoit, client ou consultant, peut le contrôler lui-même.',
    badge: 'Vérifiable par n\'importe qui, sans accès à votre compte',
  },
  testimonial: {
    quote: 'Avant, nous passions des heures à récupérer les feuilles du terrain. Maintenant, le rapport est déjà prêt quand le technicien retourne à la camionnette.',
    author: 'Philippe D.',
    role: 'Responsable d\'exploitation, installations du bâtiment',
  },
  faq: {
    title: 'Questions fréquentes',
    subtitle: 'Ce qu\'on nous demande le plus souvent avant de commencer.',
    items: [
      {
        q: 'GeoTapp convient-il comme logiciel pour installateurs et entreprises de maintenance ?',
        a: 'Oui. GeoTapp aide les installateurs, électriciens, plombiers et équipes de maintenance à gérer les interventions, les rapports, les heures, les déplacements et les preuves du travail réalisé entre le terrain et le bureau.',
      },
      {
        q: 'Puis-je utiliser GeoTapp pour les rapports d\'intervention et les preuves photographiques ?',
        a: 'Oui. TimeTracker recueille photos, notes et pointages vérifiables sur le terrain, tandis que Flow relie tout à l\'affaire et à l\'historique opérationnel.',
      },
      {
        q: 'GeoTapp aide-t-il à réduire les contestations sur les heures et les travaux effectués ?',
        a: 'C\'est l\'un des principaux cas d\'usage : les heures, la position, les notes et les preuves photographiques rendent la reconstitution de l\'intervention plus claire et plus facile à montrer.',
      },
    ],
  },
  cta: {
    title: 'Le travail a été fait. Maintenant, prouvez-le.',
    subtitle: 'GeoTapp génère des preuves vérifiables de chaque intervention, des rapports scellés que le client peut contrôler lui-même.',
    primary: 'Essayez gratuitement pendant 14 jours',
    secondary: 'Voir les tarifs',
  },
  pricing_hint: {
    label: 'Postes TimeTracker à partir de',
    per: 'par opérateur et par mois, plus le forfait Flow à partir de 39 € par mois',
    note: 'Essai gratuit de 14 jours',
  },

  schema_sector_name: 'Installateurs',
  schema_faq: [
    {
      question: 'GeoTapp fonctionne-t-il pour les plombiers et chauffagistes en déplacement ?',
      answer: 'Oui. GeoTapp est l\'app pour installateurs et chauffagistes pensée pour ceux qui travaillent sur des chantiers et chez des particuliers. Avec la gestion des rapports intégrée, les techniciens enregistrent interventions, photos et heures directement depuis leur smartphone, sans repasser par le bureau.',
    },
    {
      question: 'Comment documenter une intervention de maintenance ou d\'installation ?',
      answer: 'À la fin de chaque intervention, le technicien enregistre dans GeoTapp : l\'heure de début et de fin avec la position, les photos du travail réalisé et les notes techniques. Le système produit un rapport scellé que le client peut vérifier de façon autonome.',
    },
    {
      question: 'Puis-je utiliser GeoTapp pour gérer plusieurs équipes d\'installateurs sur différents chantiers ?',
      answer: 'Oui. GeoTapp Flow permet au dirigeant de coordonner plusieurs équipes, d\'assigner des affaires, de suivre l\'état des interventions et de recueillir les preuves photographiques de tous les chantiers actifs, dès qu\'elles arrivent.',
    },
    {
      question: 'Les rapports servent-ils en cas de contestation avec le client ?',
      answer: 'Les rapports GeoTapp sont scellés avec la position, l\'horodatage et les preuves photographiques. Le client les vérifie lui-même. Ils aident à montrer que le document n\'a pas été modifié ; à eux seuls, ils ne constituent ni une preuve absolue des faits ni un conseil juridique.',
    },
    {
      question: 'GeoTapp respecte-t-il le RGPD pour la géolocalisation des techniciens ?',
      answer: 'Il est conçu pour cela : la position n\'est enregistrée que lorsque le technicien pointe ou prend une photo de preuve, jamais en continu, et l\'information aux salariés se signe dans l\'app avant le premier pointage. Le reste (accord collectif ou consultation des représentants du personnel, là où ils sont requis) relève de l\'employeur.',
    },
  ],
};

export default content;
