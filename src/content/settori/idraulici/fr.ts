import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: "Appli pour plombiers-chauffagistes | GeoTapp",
    description: "Appli pour plombiers et chauffagistes : rapports avec position et photos, toute modification est détectable. À montrer en cas de contestation. Essai gratuit.",
  },
  hero: {
    badge: "Appli pour plombiers, chauffagistes et installateurs",
    h1_line1: "Appli pour plombiers et chauffagistes :",
    h1_line2: "rapports GPS, photos de preuve et moins de litiges.",
    subtitle: "GeoTapp enregistre chaque intervention de plomberie avec GPS, photos et horaires enregistrés. Le client conteste ? Vous montrez le rapport d'intervention au lieu de discuter de vive voix.",
    cta_primary: "Essayer gratuitement pendant 14 jours",
    cta_note: "L'essai ne vous engage à rien. Sans carte bancaire.",
  },
  pain: {
    title: "Le problème que toute entreprise de plomberie connaît bien",
    items: [
      {
        title: "Le client nie l'intervention ou les matériaux utilisés",
        desc: "Il dit que la réparation n'a pas été faite ou que les matériaux étaient différents. Sans preuves vérifiables, chaque contestation devient la parole de l'un contre celle de l'autre.",
      },
      {
        title: "Aucune documentation de l'installation après l'intervention",
        desc: "Le technicien a fini le travail, mais il n'y a ni trace photographique ni note technique. En cas de panne ultérieure, reconstituer ce qui a été fait devient impossible.",
      },
      {
        title: "Les urgences restent sans documents",
        desc: "Les interventions d'urgence sont les plus difficiles à documenter. Le technicien part en catastrophe, travaille sans papier, et ensuite il n'y a rien à montrer au client.",
      },
    ],
  },
  workflow: {
    title: "Comment ça marche, en trois étapes",
    subtitle: "Du chantier au bureau, sans coups de fil.",
    steps: [
      {
        title: "Le technicien enregistre l'intervention sur le terrain",
        desc: "Avec GeoTapp TimeTracker, il pointe son arrivée, ses pauses et son départ avec la position, prend des photos de l'installation de plomberie et ajoute des notes techniques depuis son smartphone.",
      },
      {
        title: "Le bureau voit tout dès que ça arrive",
        desc: "GeoTapp Flow reçoit les données dès que le téléphone a du réseau. Le responsable voit l'affaire, le technicien assigné, l'avancement et les photos de preuve sans avoir à appeler.",
      },
      {
        title: "Le rapport d'intervention est votre preuve",
        desc: "En fin d'intervention, le système génère un rapport scellé : horaire GPS, photos de l'installation, matériaux utilisés, notes techniques. Toute modification est détectable. Le client peut le vérifier en toute autonomie.",
      },
    ],
  },
  differenza: {
    title: "Appli pour plombiers : simple enregistrement ou preuve vérifiable ?",
    subtitle: "La plupart des applis enregistrent l'heure. GeoTapp produit des preuves vérifiables.",
    rows: [
      {
        label: "Ce qui est enregistré",
        competitor: "Heure d'entrée et de sortie",
        geotapp: "Heure + position au pointage + photos de l'installation + matériaux et notes",
      },
      {
        label: "En cas de contestation",
        competitor: "Uniquement votre parole",
        geotapp: "Rapport scellé, toute modification est détectable",
      },
      {
        label: "Documentation de l'intervention",
        competitor: "Manuelle ou absente",
        geotapp: "Générée automatiquement avec GPS et photos",
      },
      {
        label: "Qui peut vérifier",
        competitor: "Uniquement votre bureau",
        geotapp: "Vous, le client, un tiers",
      },
      {
        label: "Conformité RGPD",
        competitor: "Souvent à vérifier",
        geotapp: "Conçu pour rester dans le cadre du RGPD, modèles de documents inclus",
      },
    ],
  },
  prima_dopo: {
    title: "Avant GeoTapp. Après GeoTapp.",
    prima: [
      "Le client nie que la réparation ait été effectuée.",
      "Vous n'avez ni photos ni horaires vérifiables.",
      "La discussion dure des semaines. Vous risquez de ne pas être payé.",
      "Le technicien n'a rien en main pour se défendre.",
    ],
    dopo: [
      "Le client nie que la réparation ait été effectuée.",
      "Vous ouvrez le rapport d'intervention : photos GPS de l'installation, horaire scellé, notes techniques.",
      "Vous le lui envoyez, et il le vérifie lui-même.",
      "Vous avez de quoi montrer ce qui s'est passé. Le technicien aussi.",
    ],
  },
  scenario: {
    title: "Un cas typique",
    body: "Un client conteste une intervention de plomberie-chauffage urgente et refuse de payer en soutenant que les travaux n'ont pas été terminés. Avec GeoTapp, vous ouvrez le rapport d'intervention : photos de l'installation avant et après, horaires GPS d'arrivée et de fin des travaux, notes techniques sur les matériaux remplacés, le tout généré automatiquement depuis le smartphone du technicien, sur place.",
    resolution: "Au lieu de la parole de l'un contre celle de l'autre, il y a un document que le client contrôle lui-même.",
  },
  features: {
    title: "Appli pour plombiers et chauffagistes : ce que vous trouvez dans GeoTapp.",
    items: [
      {
        title: "Pointage GPS vérifiable",
        desc: "Chaque arrivée, pause et départ est enregistré avec la position, l'horodatage et l'affaire. À montrer au client en cas de besoin.",
      },
      {
        title: "Photos d'installations scellées",
        desc: "Le technicien prend des photos avant et après l'intervention. Chaque image est liée au GPS et à l'horodatage : toute modification ultérieure est détectable.",
      },
      {
        title: "Rapports d'intervention numériques automatiques",
        desc: "En fin de travaux, le rapport est déjà prêt : heures, photos, notes techniques et matériaux. Le bureau l'envoie au client depuis Flow en un clic.",
      },
      {
        title: "Gestion des urgences et de la maintenance programmée",
        desc: "Gérez les interventions d'urgence comme les maintenances périodiques depuis le même tableau de bord. Chaque intervention a son affaire et son historique.",
      },
      {
        title: "Export des présences pour la paie",
        desc: "Exportez les présences du mois en Excel ou CSV, prêtes pour votre cabinet comptable ou votre gestionnaire de paie. Le traitement de la paie devient une opération rapide.",
      },
      {
        title: "Vos plombiers sont protégés",
        desc: "Un rapport vérifiable donne au technicien de quoi répondre aux accusations infondées sur des travaux non réalisés ou des matériaux non utilisés.",
      },
    ],
  },
  cta_mid: {
    title: "Envie de voir comment ça marche sur une vraie intervention de plomberie ?",
    body: "Essayez-le sur une intervention réelle, de l'ouverture de l'affaire au rapport que reçoit le client : 14 jours gratuits, sans carte bancaire.",
    cta: "Essayer gratuitement pendant 14 jours",
  },
  trust: {
    title: "Dans nos rapports, chaque modification se voit, que ce soit vous ou nous qui la fassiez.",
    body: "Les rapports GeoTapp sont générés par le système au moment de l'intervention. Une fois le rapport scellé, corriger un horaire ou déplacer une photo brise le sceau, et la vérification le signale.",
    badge: "Vérifiable par tous, sans accès à votre compte",
  },
  testimonial: {
    quote: "Avant, je perdais des heures à expliquer les interventions aux clients. Maintenant j'envoie le rapport d'intervention et le client le contrôle lui-même.",
    author: "Robert C.",
    role: "Dirigeant, installations de plomberie et de chauffage",
  },
  faq: {
    title: "Questions fréquentes",
    subtitle: "Ce que les plombiers nous demandent avant de commencer.",
    items: [
      {
        q: "GeoTapp convient-il comme appli pour plombiers et chauffagistes ?",
        a: "Oui. GeoTapp est utilisé par des plombiers et des chauffagistes pour gérer interventions, rapports, heures et photos de preuve des installations. Il fonctionne aussi bien pour les urgences que pour les maintenances programmées.",
      },
      {
        q: "Puis-je utiliser GeoTapp pour documenter les interventions de plomberie et de chauffage ?",
        a: "Oui. Le technicien prend des photos avant et après l'intervention depuis l'appli. Chaque image est liée au GPS, à l'horodatage et à l'affaire, et intégrée à un rapport où toute modification est détectable.",
      },
      {
        q: "GeoTapp gère-t-il à la fois les urgences et la maintenance programmée ?",
        a: "Oui. Chaque type d'intervention, urgence, maintenance, réception, a son affaire dans GeoTapp. L'historique de chaque installation est toujours disponible, avec toutes les photos de preuve.",
      },
    ],
  },
  cta: {
    title: "Chaque intervention bien faite mérite une preuve. GeoTapp la génère.",
    subtitle: "Des rapports vérifiables, la position aux pointages, des photos scellées dans le rapport.",
    primary: "Essayer gratuitement pendant 14 jours",
    secondary: "Voir les tarifs",
  },
  pricing_hint: {
    label: "Postes TimeTracker à partir de",
    per: "par technicien et par mois, en plus de l'offre Flow à partir de 39 € par mois (hors TVA)",
    note: "Essai gratuit de 14 jours",
  },
  schema_sector_name: "Plombiers",
  schema_faq: [
    {
      question: "GeoTapp fonctionne-t-il comme appli pour plombiers et chauffagistes ?",
      answer: "Oui. GeoTapp est l'appli pour plombiers et chauffagistes qui enregistre chaque intervention avec GPS, photos et horaires enregistrés. Le technicien pointe depuis le terrain, le bureau voit tout dès que ça arrive, le client reçoit un rapport d'intervention scellé.",
    },
    {
      question: "Comment sceller une intervention de plomberie avec GeoTapp ?",
      answer: "Le technicien enregistre dans GeoTapp l'heure de début et de fin avec la position, les photos de l'installation avant et après, et les notes techniques sur les matériaux utilisés. Le système génère un rapport d'intervention scellé que le client peut vérifier de façon autonome.",
    },
    {
      question: "GeoTapp gère-t-il les urgences de plomberie et les maintenances programmées ?",
      answer: "Oui. Les interventions d'urgence comme les maintenances périodiques sont gérées par la même appli. Chaque intervention génère un historique avec photos de preuve, horaires et positions enregistrés aux pointages.",
    },
    {
      question: "Les rapports GeoTapp sont-ils acceptés en cas de contestation ?",
      answer: "Les rapports GeoTapp sont scellés avec GPS, horodatage et photos de preuve. Le client les vérifie lui-même. Ils aident à montrer que le document n'a pas été modifié ; à eux seuls, ils ne constituent ni une preuve absolue des faits ni un conseil juridique.",
    },
  ],
};

export default content;
