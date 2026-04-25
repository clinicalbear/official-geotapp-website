import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Application pour Installateurs & Techniciens : Suivi GPS des Interventions | GeoTapp',
    description: 'Suivez interventions, heures et matériaux pour installateurs CVC, électriciens et plombiers avec GPS. Preuves de service automatiques, zéro litiges clients. Essayez GeoTapp gratuitement.',
  },
  hero: {
    badge: 'Application pour installateurs, techniciens et équipes de service',
    h1_line1: 'Chaque intervention documentée,',
    h1_line2: 'chaque heure tracée.',
    subtitle: 'Pour installateurs électriques, plombiers, techniciens CVC et spécialistes en génie climatique. GeoTapp connecte Flow + TimeTracker pour suivre GPS, heures et photos par mission — du véhicule au bureau sans appels téléphoniques.',
    cta_primary: 'Essayez GeoTapp gratuitement pendant 14 jours',
    cta_note: 'Sans engagement. Aucune carte bancaire requise.',
  },
  pain: {
    title: 'Problèmes que nous résolvons chaque jour',
    items: [
      {
        title: 'Les clients contestent les heures d\'intervention',
        desc: 'Pointages GPS horodatés comme preuve irréfutable. Les données sont certifiées au moment de l\'intervention — non modifiables après coup.',
      },
      {
        title: 'Courir après les techniciens pour des nouvelles',
        desc: 'Carte en temps réel avec le statut de chaque intervention. Vous savez où se trouvent tous vos techniciens sans passer un seul appel.',
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
        desc: 'Il ouvre la mission depuis son smartphone. GeoTapp enregistre les coordonnées GPS réelles, l\'horodatage et des photos — entièrement automatique, infalsifiable.',
      },
      {
        title: 'Les heures sont enregistrées automatiquement par mission',
        desc: 'Chaque minute travaillée est associée à la bonne mission. Le responsable voit en temps réel qui travaille où.',
      },
      {
        title: 'Le rapport client est généré sans rien saisir',
        desc: 'En fin d\'intervention, le système génère un rapport avec GPS, heures et signature numérique. Le client le reçoit et le vérifie de manière autonome.',
      },
    ],
  },
  differenza: {
    title: 'Application installateurs : pointage ou certification ?',
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
        geotapp: 'Vous, le client, un tiers — de manière indépendante',
      },
      {
        label: 'En cas de litige',
        competitor: 'Données non défendables',
        geotapp: 'Rapport scellé, infalsifiable',
      },
      {
        label: 'Rapport d\'intervention',
        competitor: 'Manuel ou absent',
        geotapp: 'Généré automatiquement avec GPS et photos',
      },
      {
        label: 'Conformité RGPD',
        competitor: 'Souvent douteuse',
        geotapp: 'Conforme par conception, formulaires inclus',
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
      'En fin de mois, l\'export est déjà prêt — heures et missions agrégées automatiquement.',
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
        desc: 'Le technicien photographie depuis l\'application. Chaque image est liée à l\'intervention avec GPS et horodatage — infalsifiable après génération.',
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
        desc: 'Géolocalisation conforme par conception à la réglementation RGPD. Modèles de déclaration de confidentialité pour les employés inclus.',
      },
    ],
  },
  testimonial: {
    quote: 'Les clients ne contestent plus les heures. Nous ouvrons le rapport avec GPS et photos et la discussion s\'arrête là.',
    author: 'Robert F.',
    role: 'Dirigeant, entreprise d\'installation — 20 techniciens',
  },
  faq: {
    title: 'Questions fréquentes',
    subtitle: 'Ce qu\'on nous demande le plus souvent avant de commencer.',
    items: [
      {
        q: 'Les clients contestent-ils les heures d\'intervention ?',
        a: 'Avec GeoTapp, les pointages GPS sont horodatés au moment de l\'intervention et ne sont pas modifiables. Ils constituent une preuve irréfutable des heures travaillées, éliminant tout litige.',
      },
      {
        q: 'Comment surveiller plusieurs équipes sur différentes missions ?',
        a: 'GeoTapp offre une carte en temps réel avec le statut de chaque intervention. Vous savez exactement où se trouvent vos techniciens et sur quelle mission ils travaillent, sans téléphoner.',
      },
      {
        q: 'Comment accélérer la facturation des interventions terminées ?',
        a: 'GeoTapp génère automatiquement l\'export des heures et missions prêt pour votre logiciel comptable. Aucune saisie manuelle, aucun risque d\'erreur — la facturation se fait en un clic.',
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
    price: '3 €',
    per: 'technicien/mois',
    note: 'Essai gratuit de 14 jours',
  },
  schema_sector_name: 'Installations techniques',
  schema_faq: [
    {
      question: 'Les clients contestent-ils les heures d\'intervention ?',
      answer: 'Avec GeoTapp, les pointages GPS sont horodatés au moment de l\'intervention et ne sont pas modifiables. Ils constituent une preuve irréfutable des heures travaillées, éliminant tout litige.',
    },
    {
      question: 'Comment surveiller plusieurs équipes sur différentes missions ?',
      answer: 'GeoTapp offre une carte en temps réel avec le statut de chaque intervention. Vous savez exactement où se trouvent vos techniciens et sur quelle mission ils travaillent, sans téléphoner.',
    },
    {
      question: 'Comment accélérer la facturation des interventions terminées ?',
      answer: 'GeoTapp génère automatiquement l\'export des heures et missions prêt pour votre logiciel comptable. Aucune saisie manuelle, aucun risque d\'erreur — la facturation se fait en un clic.',
    },
  ],
};

export default content;
