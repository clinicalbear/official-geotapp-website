import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App pour entreprises de nettoyage : GPS et photos par site',
    description: 'Pointages avec GPS au début et à la fin et photos de chaque intervention : les preuves à montrer au client quand il conteste une prestation. 14 jours gratuits.',
  },

  hero: {
    badge: 'App pour entreprises de nettoyage, facility management et multiservices',
    h1_line1: 'L\'app pour entreprise de nettoyage',
    h1_line2: 'qui scelle chaque intervention.',
    subtitle:
      'GeoTapp est l\'app pour entreprise de nettoyage qui transforme chaque intervention en preuve à montrer. Les clients contestent, et un horaire écrit ne suffit pas. GeoTapp enregistre la position à chaque pointage, recueille les photos de preuve et réunit le tout dans un rapport scellé, où toute modification est détectable, que le donneur d\'ordre peut vérifier lui-même.',
    cta_primary: 'Essayez-le sur un vrai contrat',
    cta_note: '14 jours, jusqu\'à 50 intervenants sur le terrain, sans carte bancaire.',
  },

  pain: {
    title: 'Si vous ne pouvez pas le prouver, pour le client, il ne s\'est rien passé.',
    items: [
      {
        title: 'Le client nie l\'intervention',
        desc: 'Il dit que la zone n\'a pas été nettoyée ou que l\'agent n\'était pas là. Vous avez un horaire écrit, lui a sa version. Sans preuves vérifiables, vous risquez le contrat.',
      },
      {
        title: 'Des agents sur le terrain que vous ne pouvez pas vérifier',
        desc: 'Vous ne pouvez pas être sur tous les sites. Vous ne savez pas si le travail a été fait tant que le client ne se plaint pas, et il est alors déjà trop tard pour reconstituer quoi que ce soit.',
      },
      {
        title: 'L\'inspection du travail demande de vrais documents',
        desc: 'Horaires, présences, heures supplémentaires, pauses : la feuille de présence ne suffit pas. Un contrôleur veut des horaires enregistrés, pas reconstitués de mémoire.',
      },
    ],
  },

  prima_dopo: {
    title: 'Ce qui se passe aujourd\'hui. Ce qui se passe avec GeoTapp.',
    prima: [
      'Le client appelle et dit que les toilettes n\'ont pas été nettoyées.',
      'L\'agent dit « je l\'ai fait ». Le client dit « il ne l\'a pas fait ».',
      'Vous n\'avez rien en main pour prouver quoi que ce soit.',
      'La discussion dure des jours. Parfois, vous perdez le contrat.',
    ],
    dopo: [
      'Le client appelle et dit que les toilettes n\'ont pas été nettoyées.',
      'Vous ouvrez le rapport d\'intervention : photo des toilettes nettoyées, heure, position.',
      'Vous le lui envoyez. Vous avez répondu avec des données, et il les vérifie lui-même.',
      'Vous avez une preuve à montrer. L\'agent aussi a quelque chose en main.',
    ],
  },

  scenario: {
    title: 'Un cas typique',
    body: 'Le client dit que les toilettes n\'ont pas été nettoyées. Avec GeoTapp, vous ouvrez le rapport et montrez la photo de la pièce, l\'heure de la prise de vue et la position, le tout généré automatiquement par l\'app de l\'agent au moment de l\'intervention.',
    resolution: 'Vous avez répondu avec des données, et non avec votre parole contre la sienne.',
  },

  differenza: {
    title: 'Pointage ou preuve vérifiable du travail.',
    subtitle: 'La plupart des apps enregistrent des données. GeoTapp produit des preuves.',
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
        label: 'Preuve photographique',
        competitor: 'Absente ou déconnectée',
        geotapp: 'Jointe au rapport avec l\'heure et la position',
      },
      {
        label: 'RGPD',
        competitor: 'Souvent à vérifier',
        geotapp: 'Conçu pour rester dans le cadre du RGPD, formulaires inclus',
      },
      {
        label: 'Visibilité mise à jour à chaque pointage',
        competitor: 'Non',
        geotapp: 'Oui, tous les sites, tous les agents',
      },
    ],
  },

  non_gestionale: {
    title: 'Ce n\'est pas seulement un logiciel de gestion.',
    subtitle: 'Les logiciels de gestion organisent le travail. GeoTapp l\'organise et, en plus, le scelle.',
    items: [
      {
        label: 'Objectif principal',
        gestionale: 'Planifier et organiser',
        geotapp: 'Produire des preuves vérifiables',
      },
      {
        label: 'Ce qu\'il produit',
        gestionale: 'Des données internes à votre système',
        geotapp: 'Des rapports scellés vérifiables par des tiers',
      },
      {
        label: 'En cas de litige',
        gestionale: 'Vous montrez des données que vous seul pouvez lire',
        geotapp: 'Vous envoyez un rapport que le client vérifie lui-même',
      },
      {
        label: 'Valeur pour le client',
        gestionale: 'Aucune, c\'est un outil interne',
        geotapp: 'Élevée : le client le vérifie lui-même',
      },
      {
        label: 'Preuve photographique',
        gestionale: 'Non prévue ou séparée',
        geotapp: 'Intégrée au rapport avec GPS et horodatage',
      },
    ],
  },

  workflow: {
    title: 'Du site au bureau, chaque intervention devient une preuve.',
    subtitle: 'Trois étapes. Zéro papier. Zéro appel.',
    steps: [
      {
        title: 'L\'agent scelle la preuve sur place',
        desc: 'Avec GeoTapp TimeTracker, il enregistre l\'arrivée, les pauses, le départ, les photos des locaux et les notes depuis son smartphone. La position est relevée par le téléphone à cet instant, pas saisie à la main, et toute modification ultérieure est détectable.',
      },
      {
        title: 'Le bureau est à jour à chaque pointage',
        desc: 'Flow montre sur un seul écran qui a pointé, où et à quelle heure. Vous voyez l\'état de chaque bâtiment, recevez une alerte si une vacation reste ouverte et assignez les chantiers, sans courir après personne.',
      },
      {
        title: 'Le rapport est déjà prêt. Scellé : toute modification se voit.',
        desc: 'En fin de vacation, le système génère automatiquement un rapport scellé avec positions, photos et sceau. Le donneur d\'ordre le reçoit et le vérifie lui-même, sans accès à votre système, sans avoir à vous croire sur parole.',
      },
    ],
  },

  features: {
    title: 'App pour entreprises de nettoyage : moins de discussions, plus de preuves.',
    items: [
      {
        title: 'Répondez à chaque contestation avec des données',
        desc: 'Quand chaque intervention a un rapport vérifiable, vous avez de quoi répondre tout de suite. Moins de négociations orales qui durent des semaines.',
      },
      {
        title: 'Un vrai contrôle sur tous les sites',
        desc: 'Vous savez où et à quelle heure chaque agent a pointé, dès que le pointage arrive, sur tous les bâtiments et depuis n\'importe quel appareil. Entre deux pointages, rien n\'est enregistré automatiquement.',
      },
      {
        title: 'Des rapports défendables en toute circonstance',
        desc: 'Chaque rapport est scellé : toute modification est détectable. Celui qui le reçoit, client, inspecteur ou gestionnaire de paie, peut le contrôler lui-même.',
      },
      {
        title: 'Prêt pour les contrôles',
        desc: 'Horaires, pauses, heures supplémentaires et majorations sont enregistrés vacation par vacation et figurent dans le récapitulatif pour votre gestionnaire de paie. En cas de contrôle, les documents sont déjà en ordre.',
      },
      {
        title: 'Gestion multisite sans appels',
        desc: 'Des dizaines de sites, un seul écran. Vous assignez les chantiers, voyez qui a pointé où et recevez une alerte si une vacation reste ouverte.',
      },
      {
        title: 'Votre personnel est protégé',
        desc: 'Un rapport vérifiable donne aussi à l\'agent de quoi répondre aux accusations infondées. Celui qui travaille bien le prouve.',
      },
    ],
  },

  cosa_cambia: {
    title: 'Ce qui change vraiment.',
    items: [
      {
        title: 'Vous n\'avez plus à faire confiance aveuglément.',
        desc: 'Non pas que vos agents ne soient pas fiables, mais vous n\'avez plus à vous en remettre à eux. Le système génère la preuve au moment de l\'intervention, quoi qu\'on vous dise. La donnée reste celle qui a été enregistrée.',
      },
      {
        title: 'Vous n\'avez plus à vous défendre de vive voix.',
        desc: 'Fini les explications, les justifications, les souvenirs à reconstituer. Quand un client conteste, vous ouvrez le rapport et vous l\'envoyez. Ce n\'est pas votre parole contre la sienne. C\'est un document vérifiable.',
      },
      {
        title: 'Vous avez des preuves vérifiables. Toujours.',
        desc: 'Chaque intervention clôturée devient automatiquement un rapport : positions, photos, horaires et sceau. Vous n\'avez rien de plus à faire. Le système s\'en charge pendant que vos agents travaillent.',
      },
    ],
  },

  prova_visiva: {
    title: 'Ce que vous voyez, ce que voit le client.',
    subtitle: 'L\'app pour ceux qui travaillent sur le terrain. Le rapport pour ceux qui doivent rendre des comptes.',
  },

  cta_mid: {
    title: 'Vous voulez voir comment ça fonctionne sur un cas réel ?',
    body: 'Essayez-le sur un vrai contrat, de l\'agent qui ouvre l\'intervention au rapport que reçoit le client : 14 jours gratuits, sans carte bancaire.',
    cta: 'Essayez gratuitement pendant 14 jours',
  },

  testimonial: {
    quote:
      'Avant, il y avait toujours un client qui contestait. Depuis que nous utilisons GeoTapp, nous envoyons le rapport et la conversation change tout de suite : on parle de données, pas de paroles. Les discussions raccourcissent nettement.',
    author: 'Roberta M.',
    role: 'Responsable d\'exploitation, entreprise de nettoyage industriel',
  },

  trust: {
    title: 'Si l\'un de nos rapports est modifié, cela se voit. Même si c\'est nous.',
    body:
      'Les rapports GeoTapp sont générés par le système au moment de l\'intervention. Une fois le rapport scellé, corriger une heure ou déplacer une photo brise le sceau, et la vérification le signale. Celui qui le reçoit, client, inspecteur ou gestionnaire de paie, peut le contrôler lui-même.',
    badge: 'Vérifiable par n\'importe qui, sans accès à votre compte',
  },

  faq: {
    title: 'Questions fréquentes',
    subtitle: 'Ce qu\'on nous demande le plus souvent avant de commencer.',
    items: [
      {
        q: 'GeoTapp est-il seulement une app de pointage pour entreprises de nettoyage ?',
        a: 'Non. GeoTapp est un système de preuve vérifiable du travail, pas seulement une app de pointage. Les apps de pointage enregistrent une heure. GeoTapp produit un rapport scellé avec la position, des preuves photographiques et un horodatage, que le donneur d\'ordre peut vérifier de façon autonome. La différence entre « c\'est écrit » et « on peut le démontrer ».',
      },
      {
        q: 'Est-il compatible avec la convention collective de mon secteur ?',
        a: 'GeoTapp enregistre les horaires, les pauses, les heures supplémentaires et les majorations, y compris de nuit et les jours fériés, et les exporte en Excel ou CSV pour votre gestionnaire de paie, qui les applique selon la convention collective en vigueur dans votre entreprise. En cas de contrôle, vous avez tous les documents prêts.',
      },
      {
        q: 'Comment gérer des équipes réparties sur plusieurs sites en même temps ?',
        a: 'Avec GeoTapp Flow, vous avez un seul écran pour tous les sites. Vous voyez qui a pointé où dès que le pointage arrive, vous assignez les chantiers et recevez une alerte si une vacation reste ouverte. Aucun appel, aucun e-mail.',
      },
      {
        q: 'Comment vérifier que les agents ont bien fait le travail ?',
        a: 'Chaque intervention est ouverte et clôturée avec la position relevée par le smartphone de l\'agent. L\'agent envoie les photos de preuve liées au chantier, avec l\'heure et la position. Le rapport est généré automatiquement et scellé à la clôture : toute modification se voit.',
      },
      {
        q: 'GeoTapp respecte-t-il le RGPD pour la géolocalisation des salariés ?',
        a: 'GeoTapp est conçu pour rester dans le cadre du RGPD : il enregistre la position uniquement quand l\'agent pointe (arrivée, pauses, départ) ou prend une photo de preuve, fait signer l\'information aux salariés dans l\'app avant le premier pointage et ne collecte aucune donnée inutile.',
      },
      {
        q: 'Est-ce que ça fonctionne aussi pour le facility management et le multiservices ?',
        a: 'Oui. GeoTapp est utilisé par des entreprises de nettoyage, de multiservices, de facility management et toute structure dont les agents sont répartis sur plusieurs sites. Il convient aussi bien à une petite équipe qu\'à une entreprise de plusieurs centaines d\'agents, sans configuration complexe.',
      },
      {
        q: 'Combien coûte GeoTapp pour une entreprise de nettoyage ?',
        a: 'GeoTapp Flow démarre à 39 € par mois ; les postes TimeTracker pour les agents coûtent 3 € par mois chacun jusqu\'à 25, puis 2,50 € à partir du 26e. Abonnement d\'une durée minimale de 12 mois. Vous pouvez d\'abord l\'essayer gratuitement pendant 14 jours, sans carte bancaire. Prix hors TVA.',
      },
    ],
  },

  cta: {
    title: 'Vos agents travaillent bien. Faites en sorte que cela se voie.',
    subtitle:
      'Chaque jour, le travail est fait. Le problème, c\'est que sans preuves vérifiables, quand quelqu\'un conteste, il reste votre parole contre la sienne. GeoTapp transforme chaque intervention en documents à montrer.',
    primary: 'Essayez gratuitement pendant 14 jours',
    secondary: 'Voir les tarifs',
  },

  pricing_hint: {
    label: 'Postes TimeTracker à partir de',
    per: 'par opérateur et par mois, plus le forfait Flow à partir de 39 € par mois',
    note: 'Essai gratuit de 14 jours',
  },

  schema_sector_name: 'Entreprises de nettoyage',

  schema_faq: [
    {
      question: 'GeoTapp est-il seulement une app de pointage pour entreprises de nettoyage ?',
      answer: 'Non. GeoTapp est l\'app et le logiciel pour entreprises de nettoyage et de multiservices qui va au-delà du pointage : il produit des rapports scellés avec positions, photos et horaires, que le donneur d\'ordre vérifie lui-même, et non un simple relevé d\'heures.',
    },
    {
      question: 'Est-il compatible avec la convention collective de mon secteur ?',
      answer: 'GeoTapp enregistre les horaires, les pauses, les heures supplémentaires et les majorations et les exporte en Excel ou CSV pour votre gestionnaire de paie, qui les applique selon la convention collective en vigueur dans votre entreprise.',
    },
    {
      question: 'Comment gérer plusieurs sites en même temps ?',
      answer: 'Un seul écran pour tous les sites. Vous voyez qui a pointé où dès que le pointage arrive, vous assignez les chantiers et recevez une alerte si une vacation reste ouverte, sans appels.',
    },
    {
      question: 'Comment documenter que le travail a été exécuté ?',
      answer: 'Chaque intervention est ouverte et clôturée avec la position enregistrée. L\'agent envoie les photos de preuve liées au chantier. Le rapport est généré automatiquement et scellé à la clôture : toute modification se voit.',
    },
    {
      question: 'GeoTapp respecte-t-il le RGPD pour la géolocalisation des salariés ?',
      answer: 'Conçu pour rester dans le cadre du RGPD : il enregistre la position uniquement quand l\'agent pointe ou prend une photo de preuve, jamais en continu, et fait signer l\'information aux salariés dans l\'app avant le premier pointage.',
    },
    {
      question: 'Est-ce que ça fonctionne aussi pour le facility management et le multiservices ?',
      answer: 'Oui. GeoTapp convient aux entreprises de nettoyage, de multiservices et de facility management, d\'une petite équipe à une entreprise de plusieurs centaines d\'agents.',
    },
    {
      question: 'Combien ça coûte ?',
      answer: 'GeoTapp Flow à partir de 39 € par mois, plus les postes TimeTracker à partir de 3 € par opérateur et par mois. Abonnement d\'une durée minimale de 12 mois. Vous pouvez d\'abord l\'essayer gratuitement pendant 14 jours, sans carte bancaire.',
    },
  ],
};

export default content;
