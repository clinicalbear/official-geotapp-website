import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: 'Logiciel pour Agents de Sécurité & SSIAP | Présences Vérifiées et Rapports | GeoTapp',
    description: 'Gestion de la main-d\'œuvre pour sociétés de sécurité privée, agents SSIAP et sécurité événementielle : présences GPS vérifiées, rapports d\'incidents géolocalisés et suivi des agréments CNAPS.',
  },
  hero: {
    badge: 'Logiciel pour Agents de Sécurité, SSIAP et Sécurité Événementielle',
    h1_line1: 'Présences vérifiées et rapports de rondes',
    h1_line2: 'pour agents de sécurité et SSIAP',
    subtitle: 'GeoTapp Flow et TimeTracker documentent la présence des agents aux postes assignés avec GPS vérifié et horodatages inaltérables. Suivi des agréments CNAPS, passation de consignes numérique et rapports d\'incidents géolocalisés — tout sur une seule plateforme.',
    cta_primary: 'Demander une Démo',
    cta_note: 'Sans engagement. Réponse sous 12 heures ouvrées.',
  },
  pain: {
    title: 'Les problèmes que vous connaissez déjà',
    items: [
      {
        title: 'Prouver la présence aux postes au moment contractuel',
        desc: 'Un client conteste la présence d\'un agent à une heure précise. Sans GPS vérifié ni horodatage inaltérable, le différend reste ouvert et la conformité contractuelle est impossible à démontrer.',
      },
      {
        title: 'Rapports d\'incidents sans preuve de localisation',
        desc: 'Un rapport d\'incident rédigé à la main a peu de valeur probante sans position GPS certifiée ni horodatage infalsifiable. Les registres papier sont trop faciles à contester devant le CNAPS ou en justice.',
      },
      {
        title: 'Passation de consignes encore sur papier',
        desc: 'Les relèves d\'agents se font à l\'oral ou sur des feuillets. Des informations critiques se perdent, les responsabilités sont floues et tout audit ultérieur devient approximatif.',
      },
    ],
  },
  workflow: {
    title: 'Comment ça fonctionne en trois étapes',
    subtitle: 'Du poste de sécurité au bureau — sans paperasse.',
    steps: [
      {
        title: 'L\'agent pointe au poste assigné',
        desc: 'GeoTapp TimeTracker enregistre l\'entrée, la sortie, la position GPS et des photos avec horodatages inaltérables. Chaque ronde est journalisée automatiquement depuis le smartphone de l\'agent.',
      },
      {
        title: 'Le responsable voit tous les postes en temps réel',
        desc: 'Flow reçoit les données instantanément. Le chef de site vérifie la couverture complète des postes, les relèves et les écarts sans appeler le terrain.',
      },
      {
        title: 'Le rapport de présence est prêt pour le client',
        desc: 'En fin de vacation, le registre de présence est structuré avec de vraies données GPS, prêt pour l\'audit client ou un contrôle de conformité CNAPS.',
      },
    ],
  },
  features: {
    title: 'Ce que vous obtenez',
    items: [
      {
        title: 'Présence GPS vérifiée par agent',
        desc: 'Chaque pointage est lié à la position, à l\'horodatage et au poste assigné. Défendable auprès du client, du CNAPS et dans tout litige contractuel.',
      },
      {
        title: 'Suivi des agréments CNAPS et qualifications SSIAP',
        desc: 'Suivez les numéros d\'agrément CNAPS, les habilitations SSIAP et les dates d\'expiration de chaque agent. Aucun agent non qualifié déployé par erreur.',
      },
      {
        title: 'Export compatible avec Silae et Cegid',
        desc: 'Exportez les présences mensuelles dans les formats acceptés par les principaux logiciels de paie français. Le traitement de la paie devient une opération rapide et sans ressaisie.',
      },
    ],
  },
  testimonial: {
    quote: 'Depuis GeoTapp, les litiges sur la couverture des postes ont disparu. Les clients reçoivent un registre de présence horodaté GPS — il n\'y a plus rien à discuter.',
    author: 'Laurent D.',
    role: 'Directeur des Opérations, société de sécurité privée',
  },
  faq: {
    title: 'Questions fréquentes',
    subtitle: 'Ce que les équipes nous posent le plus souvent avant de commencer.',
    items: [
      {
        q: 'GeoTapp est-il adapté aux sociétés de sécurité privée et aux agents SSIAP ?',
        a: 'Oui. GeoTapp est utilisé par des sociétés de sécurité privée pour documenter la présence des agents aux postes assignés avec GPS vérifié, gérer les relèves et suivre les agréments CNAPS de l\'ensemble du personnel.',
      },
      {
        q: 'Comment GeoTapp aide-t-il à documenter les rapports d\'incidents ?',
        a: 'TimeTracker lie chaque incident à une position GPS certifiée et un horodatage inaltérable. Le rapport d\'incident généré par GeoTapp contient les coordonnées, l\'heure et des photos, le rendant défendable en procédure judiciaire et contractuelle.',
      },
      {
        q: 'GeoTapp prend-il en charge la passation de consignes numérique entre agents ?',
        a: 'Oui. Les relèves sont enregistrées numériquement avec accusé de réception, consignes opérationnelles et état des postes. Le responsable a une visibilité complète de la continuité du service sans dépendre des transmissions verbales.',
      },
    ],
  },
  cta: {
    title: 'Fini les litiges sur la couverture des postes.',
    subtitle: 'GeoTapp Flow et TimeTracker donnent à votre société de sécurité les preuves vérifiables que clients et régulateurs exigent.',
    primary: 'Demander une Démo',
    secondary: 'Voir les Tarifs',
  },
  schema_sector_name: 'Agents de Sécurité',
};

export default content;
