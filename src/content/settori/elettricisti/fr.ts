import type { SettoreContent } from '../types';

const content: SettoreContent = {
  meta: {
    title: "Appli pour électriciens : heure, position et photos",
    description: "Un appui à l'arrivée, un au départ, les photos du tableau jointes à l'intervention. Le rapport est prêt quand vous repartez. 14 jours gratuits.",
  },
  hero: {
    badge: "Appli pour électriciens et installateurs électriques",
    h1_line1: "Appli pour électriciens :",
    h1_line2: "rapports GPS, photos de preuve et moins de litiges.",
    subtitle: "GeoTapp enregistre chaque intervention électrique avec GPS, photos et horaires enregistrés. Le client conteste ? Vous montrez le rapport d'intervention au lieu de discuter de vive voix.",
    cta_primary: "Essayer gratuitement pendant 14 jours",
    cta_note: "L'essai ne vous engage à rien. Sans carte bancaire.",
  },
  pain: {
    title: "Le problème que toute entreprise d'électricité connaît bien",
    items: [
      {
        title: "Le client nie l'intervention ou l'horaire",
        desc: "Il dit que le technicien n'était pas là ou que l'installation n'a pas été terminée. Sans preuves vérifiables, le litige traîne pendant des semaines.",
      },
      {
        title: "Aucune documentation de l'installation après l'intervention",
        desc: "Le technicien a fini le travail, mais il n'y a ni trace photographique ni note technique. Reconstituer ce qui a été fait devient impossible.",
      },
      {
        title: "Le bureau ne sait pas où sont les techniciens",
        desc: "Coups de fil, messages, incertitude. Chaque fois que vous devez informer un client de l'avancement des travaux, il faut d'abord retrouver le technicien.",
      },
    ],
  },
  workflow: {
    title: "Comment ça marche, en trois étapes",
    subtitle: "Du chantier au bureau, sans coups de fil.",
    steps: [
      {
        title: "Le technicien enregistre l'intervention sur le terrain",
        desc: "Avec GeoTapp TimeTracker, il pointe son arrivée, ses pauses et son départ avec la position, prend des photos de l'installation et ajoute des notes techniques depuis son smartphone.",
      },
      {
        title: "Le bureau voit tout dès que ça arrive",
        desc: "GeoTapp Flow reçoit les données dès que le téléphone a du réseau. Le responsable voit l'affaire, le technicien assigné, l'avancement et les photos de preuve sans avoir à appeler.",
      },
      {
        title: "Le rapport d'intervention est votre preuve",
        desc: "En fin d'intervention, le système génère un rapport scellé : horaire GPS, photos de l'installation, notes techniques. Toute modification est détectable. Le client peut le vérifier en toute autonomie.",
      },
    ],
  },
  differenza: {
    title: "Appli pour électriciens : simple enregistrement ou preuve vérifiable ?",
    subtitle: "La plupart des applis enregistrent l'heure. GeoTapp produit des preuves vérifiables.",
    rows: [
      {
        label: "Ce qui est enregistré",
        competitor: "Heure d'entrée et de sortie",
        geotapp: "Heure + position au pointage + photos de l'installation + notes techniques",
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
      "Le client nie que l'installation ait été terminée.",
      "Vous n'avez ni photos ni horaires vérifiables.",
      "La discussion dure des semaines. Vous risquez de ne pas être payé.",
      "Le technicien n'a rien en main pour se défendre.",
    ],
    dopo: [
      "Le client nie que l'installation ait été terminée.",
      "Vous ouvrez le rapport d'intervention : photos GPS de l'installation, horaire scellé, signature.",
      "Vous le lui envoyez, et il le vérifie lui-même.",
      "Vous avez de quoi montrer ce qui s'est passé. Le technicien aussi.",
    ],
  },
  scenario: {
    title: "Un cas typique",
    body: "Un client conteste l'achèvement de l'installation électrique et refuse de payer la dernière facture. Avec GeoTapp, vous ouvrez le rapport d'intervention : photos du tableau terminé, horaires GPS de début et de fin des travaux, notes techniques du technicien, le tout généré automatiquement depuis le smartphone, sur place.",
    resolution: "Au lieu de la parole de l'un contre celle de l'autre, il y a un document que le client contrôle lui-même.",
  },
  cosa_cambia: {
    title: "Ce qui change vraiment, dès la première intervention",
    items: [
      {
        title: "Le soir, plus rien à recopier",
        desc: "Les heures ne passent plus par la feuille, puis par le message, puis par le logiciel de gestion. Elles naissent directement sur la bonne affaire, avec la position et l'horaire du moment où elles ont été faites, et en fin de mois l'export pour la paie est prêt sans que personne ait à les retaper.",
      },
      {
        title: "Le rapport d'intervention cesse d'être une discussion",
        desc: "Quand le client demande combien d'heures ont été passées sur son installation, la réponse n'est pas la parole du technicien contre la sienne : c'est un document scellé avec les photos du tableau, les horaires et les notes techniques, qu'il peut contrôler seul sans entrer dans votre compte.",
      },
      {
        title: "Le technicien aussi a quelque chose en main",
        desc: "Cela vaut dans les deux sens. Celui qui travaille bien et s'entend dire qu'il est arrivé en retard a la preuve de l'horaire, et n'a pas à se rappeler de mémoire ce qu'il a fait il y a trois semaines pour se défendre.",
      },
    ],
  },
  features: {
    title: "Appli pour électriciens : ce que vous trouvez dans GeoTapp.",
    items: [
      {
        title: "Pointage GPS vérifiable",
        desc: "Chaque arrivée, pause et départ est enregistré avec la position, l'horodatage et l'affaire. À montrer au client en cas de besoin.",
      },
      {
        title: "Photos de preuve de l'installation",
        desc: "Le technicien prend des photos depuis l'appli à la fin de l'intervention. Chaque image est liée au GPS et à l'horodatage : toute modification ultérieure est détectable.",
      },
      {
        title: "Rapports d'intervention numériques automatiques",
        desc: "En fin de travaux, le rapport est déjà prêt : heures, photos et notes techniques. Le bureau l'envoie au client depuis Flow en un clic.",
      },
      {
        title: "Gestion des affaires multi-chantiers",
        desc: "Assignez les interventions et suivez l'avancement affaire par affaire.",
      },
      {
        title: "Export des présences pour la paie",
        desc: "Exportez les présences du mois en Excel ou CSV, prêtes pour votre cabinet comptable ou votre gestionnaire de paie. Le traitement de la paie devient une opération rapide.",
      },
      {
        title: "Vos électriciens sont protégés",
        desc: "Un rapport vérifiable donne au technicien de quoi répondre aux accusations infondées. Celui qui travaille bien le démontre avec des données.",
      },
    ],
  },
  cta_mid: {
    title: "Envie de voir comment ça marche sur une vraie intervention électrique ?",
    body: "Essayez-le sur une intervention réelle, de l'ouverture de l'affaire au rapport que reçoit le client : 14 jours gratuits, sans carte bancaire.",
    cta: "Essayer gratuitement pendant 14 jours",
  },
  trust: {
    title: "Dans nos rapports, chaque modification se voit, que ce soit vous ou nous qui la fassiez.",
    body: "Les rapports GeoTapp sont générés par le système au moment de l'intervention. Une fois le rapport scellé, corriger un horaire ou déplacer une photo brise le sceau, et la vérification le signale.",
    badge: "Vérifiable par tous, sans accès à votre compte",
  },
  testimonial: {
    quote: "Avec GeoTapp, mes techniciens enregistrent l'installation dès qu'elle est terminée. Quand un client conteste, nous avons le rapport d'intervention à montrer.",
    author: "Luc M.",
    role: "Dirigeant, installations électriques résidentielles et industrielles",
  },
  faq: {
    title: "Questions fréquentes",
    subtitle: "Ce que les électriciens nous demandent avant de commencer.",
    items: [
      {
        q: "GeoTapp convient-il comme appli pour électriciens ?",
        a: "Oui. GeoTapp est utilisé par des électriciens et des installateurs pour gérer interventions, rapports, heures et photos de preuve des installations. Il fonctionne aussi bien pour une seule affaire que pour plusieurs chantiers en parallèle.",
      },
      {
        q: "Puis-je utiliser GeoTapp pour documenter les installations et interventions électriques ?",
        a: "Oui. Le technicien prend des photos depuis l'appli pendant ou à la fin de l'intervention. Chaque image est liée au GPS, à l'horodatage et à l'affaire, et intégrée à un rapport où toute modification est détectable.",
      },
      {
        q: "GeoTapp aide-t-il à régler les litiges avec les clients ?",
        a: "C'est exactement l'usage principal : horaire GPS, photos de preuve et rapport scellé vous donnent un document à montrer quand une contestation est infondée.",
      },
      {
        q: "Est-ce aussi une appli pour installateurs, pas seulement pour électriciens ?",
        a: "Oui. Installations électriques, plomberie-chauffage, climatisation, protection incendie, photovoltaïque. Le métier change, le problème reste le même : démontrer qui est allé où, combien de temps il y est resté et ce qu'il a laissé terminé. Le rapport d'intervention est identique pour tous.",
      },
      {
        q: "Comment fonctionnent les rapports d'intervention pour les installateurs ?",
        a: "Le technicien clôt l'intervention depuis son téléphone et le rapport est déjà rédigé, avec heures, position, photos de l'installation et notes techniques. Plus de formulaire à remplir le soir, ce qui est justement la raison pour laquelle les rapports arrivent en retard ou n'arrivent pas.",
      },
      {
        q: "Peut-on arrêter de collecter heures et photos sur WhatsApp ?",
        a: "C'est la raison pour laquelle la plupart des entreprises nous rejoignent. Dans une discussion, les heures se perdent entre les messages, les photos sont compressées et, en fin de mois, quelqu'un doit tout recopier à la main. Ici, la donnée naît déjà liée à l'affaire et à la personne.",
      },
    ],
  },
  cta: {
    title: "Chaque installation bien faite mérite une preuve. GeoTapp la génère.",
    subtitle: "Des rapports vérifiables, la position aux pointages, des photos scellées dans le rapport.",
    primary: "Essayer gratuitement pendant 14 jours",
    secondary: "Voir les tarifs",
  },
  pricing_hint: {
    label: "Postes TimeTracker à partir de",
    per: "par technicien et par mois, en plus de l'offre Flow à partir de 39 € par mois (hors TVA)",
    note: "Essai gratuit de 14 jours",
  },
  schema_sector_name: "Électriciens",
  schema_faq: [
    {
      question: "GeoTapp fonctionne-t-il comme appli pour électriciens ?",
      answer: "Oui. GeoTapp est l'appli pour électriciens et installateurs qui enregistre chaque intervention avec GPS, photos et horaires enregistrés. Le technicien pointe depuis le terrain, le bureau voit tout dès que ça arrive, le client reçoit un rapport d'intervention scellé.",
    },
    {
      question: "Comment sceller une intervention électrique avec GeoTapp ?",
      answer: "Le technicien enregistre dans GeoTapp l'heure de début et de fin avec la position, les photos de l'installation et les notes techniques. Le système génère un rapport d'intervention scellé que le client peut vérifier de façon autonome.",
    },
    {
      question: "GeoTapp aide-t-il à gérer plusieurs équipes d'électriciens sur des chantiers différents ?",
      answer: "Oui. GeoTapp Flow permet au dirigeant de coordonner plusieurs équipes, d'assigner des affaires, de suivre l'état des interventions et de recueillir les photos de preuve de tous les chantiers actifs, dès leur envoi.",
    },
    {
      question: "Les rapports GeoTapp sont-ils acceptés en cas de contestation ?",
      answer: "Les rapports GeoTapp sont scellés avec GPS, horodatage et photos de preuve. Le client les vérifie lui-même. Ils aident à montrer que le document n'a pas été modifié ; à eux seuls, ils ne constituent ni une preuve absolue des faits ni un conseil juridique.",
    },
    {
      question: "GeoTapp fonctionne-t-il aussi comme appli pour installateurs ?",
      answer: "Oui. Outre les installations électriques, il couvre la plomberie-chauffage, la climatisation, la protection incendie et le photovoltaïque. Le technicien enregistre l'intervention depuis le terrain avec GPS et photos, et le rapport est généré de la même façon pour chaque type d'installation.",
    },
    {
      question: "GeoTapp suit-il la position des techniciens pendant la journée ?",
      answer: "Non. La position n'est enregistrée que lorsque le technicien pointe (arrivée, pauses, départ) ou prend une photo de preuve. Entre deux pointages, rien n'est enregistré automatiquement : l'appli ne demande même pas l'autorisation de lire la position en arrière-plan.",
    },
  ],
};

export default content;
