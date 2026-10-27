import type { ContestazioniCopy } from './types';

/**
 * Page "Quand quelqu'un conteste le travail" (27/10/2026), écrite nativement en français.
 * Chaque affirmation sur le produit vient de la fiche claim (docs/stampa/scheda-claim.md) ou des
 * chaînes déjà publiées dans dict.features. Voir it.ts pour la liste de ce qui ne s'écrit jamais ici.
 * La phrase sur la permission de position en arrière-plan vaut pour Android et iPhone seulement :
 * l'Apple Watch n'a pas été vérifiée.
 */
const formule =
  "Un dossier scellé aide à montrer que ce qui a été remis n'a pas été modifié, mais il ne constitue pas à lui seul une preuve absolue du fait matériel ni un conseil juridique.";

const fr: ContestazioniCopy = {
  metaTitle: 'Contestations sur le travail : ce qui change avec GeoTapp | GeoTapp',
  metaDesc:
    "Quand un client ou un salarié conteste le travail, qu'avez-vous en main ? La même discussion vue par trois parties : l'entreprise, celui qui travaille et le client.",
  kicker: 'Contestations sur le travail',
  h1: "Quand quelqu'un conteste le travail : ce qui change avec GeoTapp",
  lede:
    "Une contestation ne s'évite pas. Ce qui change, c'est ce que vous avez en main quand elle arrive : un souvenir contre un souvenir, ou un document. Voici la même discussion vue par trois parties : l'entreprise, celui qui travaille et celui qui a commandé le travail.",
  updatedLabel: 'Mis à jour le 27 octobre 2026',
  scenes: [
    {
      kicker: "L'entreprise",
      heading: "Si vous êtes l'entreprise",
      scene: "« Le client dit que vous n'êtes pas venus. Ou que vous êtes restés une heure, pas trois. »",
      haveTitle: 'Ce que vous avez en main',
      have: [
        "Les heures d'entrée, de pause et de sortie de chaque intervention.",
        "La position enregistrée au pointage. Au pointage, l'application refuse les positions simulées par des applications de fausse position, celles qui sont trop imprécises et les déplacements impossibles.",
        "Les photos de preuve de l'intervention. Sur les photos, rien n'est refusé : on signale, en comparant l'heure et la position de la prise de vue avec celles du pointage.",
        "Un rapport qui, en fin d'intervention, se constitue à partir des pointages, des photos et des notes, et qui est scellé : toute modification ultérieure est détectable.",
      ],
      changeTitle: 'Ce qui change',
      change: [
        "Au lieu de tout reconstituer de mémoire entre WhatsApp, e-mails et feuilles de papier, vous envoyez un document.",
        "S'il n'y a pas de réseau, le pointage reste enregistré sur le téléphone et part tout seul au retour du signal, avec l'heure à laquelle il a été fait.",
        "Des heures documentées sont des heures que vous pouvez montrer au moment de les facturer.",
      ],
    },
    {
      kicker: 'Celui qui travaille',
      heading: "Si c'est vous qui travaillez",
      scene: "« J'ai fait plus d'heures que celles qu'on m'a payées. »",
      haveTitle: 'Ce que vous avez',
      have: [
        "Vos sessions de travail, avec l'heure de début, les pauses et la fin, que vous pouvez revoir dans l'application par période, avec le total des heures.",
        "La position est enregistrée quand vous pointez ou prenez une photo de preuve : entrée, début et fin de pause, sortie.",
        "Entre deux pointages, rien n'est enregistré automatiquement et de façon continue. Sur Android et sur iPhone, l'application ne demande même pas la permission de position en arrière-plan.",
      ],
      changeTitle: 'Ce qui change',
      change: [
        "S'il y a une discussion sur les heures, il existe une heure enregistrée par un geste de votre part, qui ne dépend de la mémoire de personne.",
        "Le bureau voit chaque pointage dès son arrivée : l'écran s'appelle Pointages du jour et affiche ceux qui ont été faits, pas l'endroit où se trouve quelqu'un en ce moment.",
      ],
      extra: {
        title: 'Ce qui reste des positions, et pour combien de temps',
        paragraphs: [
          "Dans le registre, les positions sont supprimées après douze mois, une durée que l'entreprise peut raccourcir jusqu'à trente jours.",
          "Dans les rapports déjà remis, elles restent, car ce sont des documents scellés, et elles suivent le délai de conservation prévu par la loi : après cinq ans, le dossier est supprimé. Un rapport remis est une photographie : il ne se met pas à jour et ne se touche pas sans briser le sceau qui le rend vérifiable.",
        ],
      },
    },
    {
      kicker: 'Le client',
      heading: 'Si vous êtes le client',
      scene: "« On me dit que le travail a été fait. Comment le savoir sans les croire sur parole ? »",
      haveTitle: 'Ce que vous faites',
      have: [
        "Vous recevez un lien vers le rapport et vous le contrôlez seul, en ligne ou avec le vérificateur hors ligne : un fichier unique qui ne se connecte pas à internet et embarque la clé publique.",
        "Le contrôle recalcule les empreintes de chaque événement et de chaque photo, et vérifie la signature. La page de vérification montre deux choses distinctes : si le document est intact, et la signature.",
        "Cela fonctionne aussi dans des années, même sans GeoTapp : quiconque a le dossier et le vérificateur peut refaire le contrôle.",
      ],
      changeTitle: 'Ce que cela montre et ce que cela ne montre pas',
      change: [
        formule,
        "« Document intact » veut dire non modifié. C'est la signature, qui ne se refait pas sans la clé, qui dit que le dossier a bien été émis par nous.",
      ],
    },
  ],
  sample: {
    heading: 'Essayez avec un vrai rapport',
    paragraphs: [
      "Ci-dessous, un rapport d'exemple : le remplacement d'un tableau électrique. Téléchargez-le et contrôlez-le dans votre navigateur : la vérification s'exécute chez vous et le fichier ne nous est pas envoyé.",
    ],
  },
  limits: {
    heading: 'Ce que GeoTapp ne fait pas',
    items: [
      "Il ne suit pas en continu, même si on le voulait : sur Android et sur iPhone, l'application ne demande pas la permission de position en arrière-plan.",
      "Il ne démontre pas, à lui seul, que le fait a eu lieu : il dit si le dossier a été altéré après sa remise.",
      "Il ne promet pas que les contestations disparaissent : il change ce que vous présentez quand elles arrivent.",
      "Il ne remplace ni un avocat en droit du travail, ni le DPO, ni les accords avec les représentants du personnel (en France, le CSE), ni les autorisations que la loi de votre pays peut exiger.",
    ],
    formula: `En résumé : ${formule[0].toLowerCase()}${formule.slice(1)}`,
  },
  faq: {
    title: 'Questions fréquentes',
    items: [
      {
        q: 'Un rapport GeoTapp suffit-il pour gagner une contestation ?',
        a: "Pas à lui seul. Le rapport montre ce qui a été enregistré et permet à chacun de vérifier qu'il n'a pas été altéré après sa remise ; il ne démontre pas, à lui seul, que le fait a eu lieu, et ce n'est pas un conseil juridique. C'est un document ordonné et vérifiable à la place d'un souvenir contre un souvenir.",
      },
      {
        q: 'GeoTapp suit-il les salariés pendant la journée ?',
        a: "Non. La position est enregistrée seulement quand la personne fait un geste : entrée, début et fin de pause, sortie, photo de preuve. Entre deux pointages, rien n'est enregistré automatiquement et de façon continue. Sur Android et sur iPhone, l'application ne demande même pas la permission de position en arrière-plan.",
      },
      {
        q: 'Le client doit-il faire confiance à GeoTapp pour contrôler le rapport ?',
        a: "Non. Le vérificateur hors ligne est un fichier unique qui ne se connecte pas à internet et embarque la clé publique : il recalcule les empreintes et contrôle la signature, aussi dans des années, même sans GeoTapp. Ce que dit le contrôle, c'est si le dossier a été altéré, pas si le fait a eu lieu.",
      },
      {
        q: 'Que deviennent les positions après la remise ?',
        a: "Dans le registre, elles sont supprimées après douze mois, une durée que l'entreprise peut raccourcir jusqu'à trente jours. Dans les rapports déjà remis, elles restent, car ce sont des documents scellés, et elles suivent le délai de conservation prévu par la loi : après cinq ans, le dossier est supprimé.",
      },
      {
        q: 'Où sont les données ?',
        a: "Les données de travail et les photos sont archivées dans l'Union européenne.",
      },
      {
        q: "GeoTapp remplace-t-il un avocat en droit du travail ou l'accord avec le CSE ?",
        a: "Non. Il aide à rester dans le cadre du RGPD, mais il ne remplace ni un avocat en droit du travail, ni le DPO, ni les accords avec les représentants du personnel (en France, le CSE), ni les autorisations que la loi de votre pays peut exiger.",
      },
    ],
  },
  next: {
    heading: 'Pour aller plus loin',
    paragraph: "Si vous voulez voir fonction par fonction ce qu'il y a dedans, ou les tarifs, c'est par ici.",
    featuresLabel: 'Ce que fait GeoTapp, fonction par fonction →',
    pricingLabel: 'Voir les tarifs →',
  },
  card: {
    title: "Ce qui change quand quelqu'un conteste le travail",
    text: "L'entreprise, celui qui travaille et le client face à face.",
    cta: 'Lire la page',
  },
  disclaimer:
    "Cette page décrit ce que fait GeoTapp et n'est pas un conseil juridique. Pour votre situation précise, adressez-vous à un avocat en droit du travail ou à un DPO.",
};

export default fr;
