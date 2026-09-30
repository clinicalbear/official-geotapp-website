import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'App plombier-chauffagiste : rapports GPS et photos',
    description: 'Rapports avec GPS au pointage et photos de chaque installation : les preuves à montrer quand le client conteste une chaudière. Essai gratuit 14 jours.',
  },
  hero: {
    badge: 'App pour plombiers-chauffagistes et installateurs thermiques',
    h1_line1: 'App pour plombiers-chauffagistes :',
    h1_line2: 'rapports GPS, preuves photo et moins de litiges.',
    subtitle: 'GeoTapp enregistre chaque intervention sur chaudière et installation avec GPS, photos et horaires enregistrés. Le client conteste les pièces remplacées ? Montrez le rapport au lieu de discuter de vive voix.',
    cta_primary: 'Essayez gratuitement pendant 14 jours',
    cta_note: 'L\'essai ne vous engage à rien. Aucune carte bancaire.',
  },
  pain: {
    title: 'Le problème que toute entreprise de chauffage connaît bien',
    items: [
      {
        title: 'Le client conteste les pièces remplacées sur la chaudière',
        desc: 'Il dit que vous avez changé d\'autres composants que ceux convenus, ou que l\'installation était déjà dans cet état. Sans preuves photographiques, le litige devient parole contre parole.',
      },
      {
        title: 'Aucune documentation de l\'installation après l\'intervention',
        desc: 'Le technicien a terminé la réparation, mais il n\'y a ni trace photographique ni note technique. Si la panne revient, il est impossible de reconstituer ce qui a été fait.',
      },
      {
        title: 'Les urgences de nuit et de week-end ne sont pas traçables',
        desc: 'Les pannes de chauffage surviennent à des heures impossibles. Le technicien intervient, règle le problème, mais il ne reste rien à montrer au client ou à l\'assurance.',
      },
    ],
  },
  workflow: {
    title: 'Comment ça fonctionne en trois étapes',
    subtitle: 'Du chantier au bureau, sans appels téléphoniques.',
    steps: [
      {
        title: 'Le technicien enregistre l\'intervention sur le terrain',
        desc: 'Avec GeoTapp TimeTracker, il pointe l\'arrivée, les pauses et le départ avec la position, prend des photos de l\'installation et de la chaudière et ajoute depuis son smartphone des notes sur les pièces remplacées.',
      },
      {
        title: 'Le bureau voit tout dès que ça arrive',
        desc: 'GeoTapp Flow reçoit les données dès que le téléphone a du réseau. Le responsable voit le chantier, le technicien assigné, l\'avancement et les preuves photo sans appeler.',
      },
      {
        title: 'Le rapport est votre preuve',
        desc: 'En fin d\'intervention, le système génère un rapport scellé : heure et position GPS, photos de l\'installation et des pièces, notes techniques. Toute modification est détectable. Le client peut le vérifier de façon autonome.',
      },
    ],
  },
  differenza: {
    title: 'App pour plombiers-chauffagistes : pointage ou preuve vérifiable ?',
    subtitle: 'La plupart des apps enregistrent l\'heure. GeoTapp produit des preuves vérifiables.',
    rows: [
      {
        label: 'Ce qui est enregistré',
        competitor: 'Heure d\'entrée et de sortie',
        geotapp: 'Heure + position au pointage + photos de l\'installation + pièces remplacées',
      },
      {
        label: 'En cas de litige',
        competitor: 'Votre seule parole',
        geotapp: 'Rapport scellé, toute modification est détectable',
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
        label: 'RGPD',
        competitor: 'Souvent à vérifier',
        geotapp: 'Conçu pour rester dans le cadre du RGPD, formulaires inclus',
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
      'Vous ouvrez le rapport : photo de la pièce retirée, de la nouvelle montée, heure GPS, notes techniques.',
      'Vous le lui envoyez, et il le vérifie lui-même.',
      'Vous avez une preuve à montrer. Le technicien aussi a quelque chose en main.',
    ],
  },
  scenario: {
    title: 'Un cas typique',
    body: 'Un client conteste le remplacement d\'un brûleur de chaudière et refuse de payer la facture. Avec GeoTapp, vous ouvrez le rapport : photo de la pièce défectueuse retirée, de la nouvelle installée, heure GPS de l\'intervention et notes techniques du technicien, le tout généré automatiquement depuis le smartphone, sur place.',
    resolution: 'Au lieu d\'une parole contre une autre, il y a un document que le client vérifie lui-même.',
  },
  features: {
    title: 'App pour plombiers-chauffagistes : ce que vous trouvez dans GeoTapp.',
    items: [
      {
        title: 'Pointage GPS vérifiable',
        desc: 'Chaque arrivée, pause et départ est enregistré avec la position, l\'horodatage et le chantier. À montrer au client et à l\'assurance en cas de besoin.',
      },
      {
        title: 'Preuves photographiques de l\'installation',
        desc: 'Le technicien prend des photos depuis l\'app pendant et après l\'intervention. Chaque image est liée à la position et à l\'heure, et figure dans le rapport scellé : toute modification ultérieure est détectable.',
      },
      {
        title: 'Rapports d\'intervention numériques automatiques',
        desc: 'En fin de travaux, le rapport est déjà prêt : heures, photos, pièces remplacées. Le bureau l\'envoie au client depuis Flow en un clic.',
      },
      {
        title: 'Gestion des chantiers et des urgences',
        desc: 'Assignez les interventions urgentes et suivez l\'avancement chantier par chantier.',
      },
      {
        title: 'Export des présences pour la paie',
        desc: 'Exportez les présences du mois en Excel ou CSV, prêtes pour votre gestionnaire de paie ou votre expert-comptable. Le traitement de la paie devient une opération rapide.',
      },
      {
        title: 'Vos techniciens aussi ont une preuve',
        desc: 'Un rapport vérifiable donne au technicien de quoi répondre aux accusations infondées sur les pièces ou les horaires. Celui qui travaille bien le prouve avec les données.',
      },
    ],
  },
  cta_mid: {
    title: 'Vous voulez voir comment ça fonctionne sur une vraie intervention de chauffage ?',
    body: 'Essayez-le sur une vraie intervention, de l\'ouverture du chantier au rapport que reçoit le client : 14 jours gratuits, sans carte bancaire.',
    cta: 'Essayez gratuitement pendant 14 jours',
  },
  trust: {
    title: 'Toute modification de nos rapports se voit. Que ce soit vous ou nous.',
    body: 'Les rapports GeoTapp sont générés par le système au moment de l\'intervention. Une fois le rapport scellé, corriger une heure ou déplacer une photo brise le sceau, et la vérification le signale.',
    badge: 'Vérifiable par n\'importe qui, sans accès à votre compte',
  },
  testimonial: {
    quote: 'Avec GeoTapp, mes techniciens photographient l\'installation avant et après chaque intervention. Quand un client conteste les pièces, nous avons les photos à montrer.',
    author: 'Marc S.',
    role: 'Gérant, installations thermiques résidentielles et industrielles',
  },
  faq: {
    title: 'Questions fréquentes',
    subtitle: 'Ce que les plombiers-chauffagistes nous demandent avant de commencer.',
    items: [
      {
        q: 'GeoTapp convient-il comme app pour plombiers-chauffagistes ?',
        a: 'Oui. GeoTapp est utilisé par des plombiers-chauffagistes et des installateurs thermiques pour gérer les interventions sur chaudières, installations de chauffage et sanitaires, avec des rapports GPS, des photos et des heures vérifiables.',
      },
      {
        q: 'Puis-je utiliser GeoTapp pour documenter le remplacement de pièces sur des chaudières ?',
        a: 'Oui. Le technicien photographie depuis l\'app la pièce retirée et celle qui est installée. Chaque image est liée au GPS, à l\'horodatage et au chantier, et incluse dans le rapport scellé.',
      },
      {
        q: 'GeoTapp aide-t-il à résoudre les litiges avec les clients sur les installations ?',
        a: 'C\'est exactement le principal cas d\'usage : l\'heure GPS, les preuves photographiques des matériaux et le rapport scellé vous donnent un document à montrer quand une contestation est infondée.',
      },
    ],
  },
  cta: {
    title: 'Chaque intervention de chauffage bien faite mérite une preuve. GeoTapp la génère.',
    subtitle: 'Rapports vérifiables, position aux pointages, photos scellées dans le rapport.',
    primary: 'Essayez gratuitement pendant 14 jours',
    secondary: 'Voir les tarifs',
  },
  pricing_hint: {
    label: 'Postes TimeTracker à partir de',
    per: 'par opérateur et par mois, plus le forfait Flow à partir de 39 € par mois',
    note: 'Essai gratuit de 14 jours',
  },
  schema_sector_name: 'Plombiers-chauffagistes',
  schema_faq: [
    {
      question: 'GeoTapp fonctionne-t-il comme app pour plombiers-chauffagistes ?',
      answer: 'Oui. GeoTapp est l\'app pour plombiers-chauffagistes et installateurs qui enregistre chaque intervention sur chaudière et installation avec GPS, photos et horaires enregistrés. Le technicien pointe depuis le terrain, le bureau voit tout dès que ça arrive, le client reçoit un rapport scellé.',
    },
    {
      question: 'Comment sceller une intervention sur chaudière avec GeoTapp ?',
      answer: 'Le technicien enregistre dans GeoTapp l\'heure de début et de fin avec la position, les photos des pièces remplacées et les notes techniques. Le système génère un rapport scellé que le client peut vérifier de façon autonome.',
    },
    {
      question: 'GeoTapp aide-t-il à gérer plusieurs équipes de chauffagistes sur des interventions différentes ?',
      answer: 'Oui. GeoTapp Flow permet au dirigeant de coordonner plusieurs équipes, d\'assigner des chantiers urgents, de suivre l\'état des interventions et de collecter les preuves photo de tous les chantiers actifs, dès qu\'elles sont envoyées.',
    },
    {
      question: 'Les rapports GeoTapp servent-ils en cas de litige sur des installations thermiques ?',
      answer: 'Les rapports GeoTapp sont scellés avec le GPS, l\'horodatage et les preuves photographiques. Le client les vérifie lui-même. Ils aident à montrer que le document n\'a pas été modifié ; à eux seuls, ils ne constituent ni une preuve absolue des faits ni un conseil juridique.',
    },
  ],
};

export default content;
