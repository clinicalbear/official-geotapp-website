import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Application pour Installateurs & Techniciens : Suivi GPS des Interventions | GeoTapp',
    description: 'Suivez interventions, heures et matériaux pour installateurs CVC, électriciens et plombiers. Preuves de service automatiques, moins de litiges. Essai gratuit.',
  },
  hero: {
    badge: 'Application pour installateurs, techniciens et équipes de service',
    h1_line1: 'Chaque intervention documentée,',
    h1_line2: 'chaque heure tracée.',
    subtitle: 'Pour installateurs électriques, plombiers, techniciens CVC et spécialistes en génie climatique. GeoTapp connecte Flow + TimeTracker pour suivre GPS, heures et photos par mission, du véhicule au bureau sans appels téléphoniques.',
    cta_primary: 'Essayez GeoTapp gratuitement pendant 14 jours',
    cta_note: 'Sans engagement. Aucune carte bancaire requise.',
  },
  pain: {
    title: 'Problèmes que nous résolvons chaque jour',
    items: [
      {
        title: 'Les clients contestent les heures d\'intervention',
        desc: 'Pointages GPS horodatés et scellés au moment de l\'intervention. Toute modification ultérieure est détectable.',
      },
      {
        title: 'Courir après les techniciens pour des nouvelles',
        desc: 'Carte avec le statut de chaque intervention, mise à jour dès qu\'un technicien pointe. Vous savez où en est chaque mission sans passer un seul appel.',
      },
      {
        title: 'Rapports d\'intervention incomplets ou jamais remis',
        desc: 'Les données arrivent en retard, incomplètes ou pas du tout. Reconstituer heures et interventions en fin de mois est un travail à part qui coûte temps et argent.',
      },
    ],
  },
  workflow: {
    title: 'Comment ça marche',
    subtitle: 'Trois étapes simples. Zéro papier. Zéro appels.',
    steps: [
      {
        title: 'Le technicien pointe par GPS au début de l\'intervention',
        desc: 'Il ouvre la mission depuis son smartphone. GeoTapp enregistre les coordonnées GPS réelles, l\'horodatage et des photos, entièrement automatique, et toute modification est détectable.',
      },
      {
        title: 'Les heures sont enregistrées automatiquement par mission',
        desc: 'Chaque minute travaillée est associée à la bonne mission. Le responsable voit qui travaille où, dès que le pointage arrive.',
      },
      {
        title: 'Le rapport client est généré sans rien saisir',
        desc: 'En fin d\'intervention, le système génère un rapport avec GPS, heures et signature numérique. Le client le reçoit et le vérifie de manière autonome.',
      },
    ],
  },
  differenza: {
    title: 'Application installateurs : pointage ou preuve vérifiable ?',
    subtitle: 'La plupart des applications enregistrent l\'heure. GeoTapp produit des preuves vérifiables.',
    rows: [
      {
        label: 'Ce qui est enregistré',
        competitor: 'Heure d\'entrée/sortie',
        geotapp: 'Heure + GPS vérifié + photos + travaux réalisés',
      },
      {
        label: 'Qui peut vérifier',
        competitor: 'Votre bureau uniquement',
        geotapp: 'Vous, le client, un tiers, de manière indépendante',
      },
      {
        label: 'En cas de litige',
        competitor: 'Données non défendables',
        geotapp: 'Rapport scellé, toute modification détectable',
      },
      {
        label: 'Rapport d\'intervention',
        competitor: 'Manuel ou absent',
        geotapp: 'Généré automatiquement avec GPS et photos',
      },
      {
        label: 'Conformité RGPD',
        competitor: 'Souvent douteuse',
        geotapp: 'Conçu pour rester dans le cadre du RGPD, formulaires inclus',
      },
    ],
  },
  prima_dopo: {
    title: 'Ce qui se passe maintenant. Ce qui se passe avec GeoTapp.',
    prima: [
      'Le client conteste l\'heure de fin et demande une remise.',
      'Le technicien dit « j\'ai fait 4 heures ». Le client dit « il n\'y en a que 2 ».',
      'Vous n\'avez aucune preuve. La discussion dure des jours et le paiement est menacé.',
      'En fin de mois, vous reconstituez heures et missions depuis les messages WhatsApp.',
    ],
    dopo: [
      'Le client conteste ? Ouvrez le rapport : photos, GPS, horodatage, signature numérique.',
      'Vous l\'envoyez. Le litige est réglé en une minute.',
      'Le paiement est sécurisé. Le technicien est protégé.',
      'En fin de mois, l\'export est déjà prêt, heures et missions agrégées automatiquement.',
    ],
  },
  features: {
    title: 'Fonctionnalités conçues pour installateurs et équipes de service',
    items: [
      {
        title: 'Pointage GPS vérifiable',
        desc: 'Chaque entrée et sortie est liée au lieu, à l\'horodatage et à la mission. Défendable devant clients et inspecteurs.',
      },
      {
        title: 'Preuves photographiques scellées',
        desc: 'Le technicien photographie depuis l\'application. Chaque image est liée à l\'intervention avec GPS et horodatage, et toute modification après génération est détectable.',
      },
      {
        title: 'Gestion multi-sites des missions',
        desc: 'Attribuez des missions, suivez l\'avancement sur tous les sites et recevez des alertes automatiques si une mission n\'est pas ouverte ou clôturée à temps.',
      },
      {
        title: 'Rapports d\'intervention numériques automatiques',
        desc: 'En fin d\'intervention, le rapport est prêt : heures, photos, notes et signature. Pas de papier, pas d\'appels. Le technicien l\'envoie au client depuis l\'application.',
      },
      {
        title: 'Export pour la paie et la facturation',
        desc: 'Exportez les présences mensuelles et les heures par mission. La paie et la facturation deviennent l\'affaire de quelques minutes.',
      },
      {
        title: 'Conformité RGPD intégrée',
        desc: 'Géolocalisation conçue pour rester dans le cadre du RGPD. Modèles de déclaration de confidentialité pour les employés inclus.',
      },
    ],
  },
  testimonial: {
    quote: 'Les clients contestent beaucoup moins les heures. Nous ouvrons le rapport avec GPS et photos et la discussion s\'arrête là.',
    author: 'Robert F.',
    role: 'Dirigeant, entreprise d\'installation, 20 techniciens',
  },
  faq: {
    title: 'Questions fréquentes',
    subtitle: 'Ce qu\'on nous demande le plus souvent avant de commencer.',
    items: [
      {
        q: 'Les clients contestent-ils les heures d\'intervention ?',
        a: 'Avec GeoTapp, les pointages GPS sont horodatés au moment de l\'intervention et toute modification est détectable. Ils constituent une preuve vérifiable des heures travaillées, utile en cas de litige.',
      },
      {
        q: 'Comment surveiller plusieurs équipes sur différentes missions ?',
        a: 'GeoTapp offre une carte avec le statut de chaque intervention, mise à jour dès qu\'un technicien pointe. Vous savez sur quelle mission chacun travaille, sans téléphoner.',
      },
      {
        q: 'Comment accélérer la facturation des interventions terminées ?',
        a: 'GeoTapp génère automatiquement l\'export des heures et missions prêt pour votre logiciel comptable. Aucune saisie manuelle, aucun risque d\'erreur, la facturation se fait en un clic.',
      },
    ],
  },
  cta: {
    title: 'Essayez GeoTapp gratuitement pendant 14 jours',
    subtitle: 'Sans engagement. Aucune carte bancaire requise. Réponse sous 12 heures ouvrées.',
    primary: 'Commencer gratuitement',
    secondary: 'Voir les tarifs',
  },
  pricing_hint: {
    label: 'À partir de',
    per: 'technicien/mois',
    note: 'Essai gratuit de 14 jours',
  },
  schema_sector_name: 'Installations techniques',
  schema_faq: [
    {
      question: 'Les clients contestent-ils les heures d\'intervention ?',
      answer: 'Avec GeoTapp, les pointages GPS sont horodatés au moment de l\'intervention et toute modification est détectable. Ils constituent une preuve vérifiable des heures travaillées, utile en cas de litige.',
    },
    {
      question: 'Comment surveiller plusieurs équipes sur différentes missions ?',
      answer: 'GeoTapp offre une carte avec le statut de chaque intervention, mise à jour dès qu\'un technicien pointe. Vous savez sur quelle mission chacun travaille, sans téléphoner.',
    },
    {
      question: 'Comment accélérer la facturation des interventions terminées ?',
      answer: 'GeoTapp génère automatiquement l\'export des heures et missions prêt pour votre logiciel comptable. Aucune saisie manuelle, aucun risque d\'erreur, la facturation se fait en un clic.',
    },
  ],
};

export default content;
