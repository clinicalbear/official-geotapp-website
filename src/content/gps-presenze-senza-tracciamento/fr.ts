import type { PresenzeCopy } from './types';

const fr: PresenzeCopy = {
  metaTitle: 'Peut-on utiliser le GPS pour le pointage sans surveiller les salariés ? - GeoTapp',
  metaDesc:
    'Oui, si la position n\'est relevée qu\'au moment du pointage. Ce qu\'a jugé un tribunal italien en 2026, ce que sanctionnent réellement les autorités, et ce qu\'enregistre un système de pointage GPS conforme.',
  h1: 'Peut-on utiliser le GPS pour le pointage sans surveiller les salariés ?',
  lede:
    'Oui. Un système qui ne relève la position qu\'au moment précis où un salarié pointe son arrivée, sa pause ou son départ ne surveille pas la personne : il documente un fait. C\'est exactement la distinction qu\'un tribunal italien a confirmée en 2026, et elle correspond à ce que les autorités de protection des données sanctionnent réellement : le suivi continu, pas le relevé ponctuel de position.',
  updatedLabel: 'Mis à jour le 25 septembre 2026',
  sections: [
    {
      heading: 'Quand le GPS est-il autorisé pour le pointage ?',
      paragraphs: [
        'Dans la plupart des pays de l\'UE, le principe est le même : les outils susceptibles de permettre un contrôle continu de l\'activité d\'un salarié exigent, avant leur mise en service, une consultation du comité social et économique ou une autorisation de l\'autorité compétente. En Italie, c\'est l\'article 4 du Statut des travailleurs (loi n° 300/1970) qui pose cette exigence pour les outils de contrôle à distance, tout en exemptant explicitement les outils de simple enregistrement des accès et des présences.',
        'Un jugement rendu en Italie le 1er juillet 2026 (tribunal de Cosenza, jugement n° 972) indique où se situe la limite pour les applications de pointage GPS : lorsque la position n\'est relevée qu\'au moment du pointage, sans suivi continu des déplacements entre deux pointages, le système est qualifié d\'outil d\'enregistrement des présences, pas d\'outil de surveillance à distance. Le tribunal a ainsi annulé une amende de 50 000 euros infligée par l\'autorité italienne de protection des données à un organisme public, précisément sur cette base.',
        'La règle pratique : un point GPS relevé au début et à la fin d\'un poste capture un instant. Une trace de points relevés minute par minute suit une personne. Même technologie satellite, mais deux outils très différents au regard du droit.',
      ],
    },
    {
      heading: 'Ce que GeoTapp enregistre, et ce qu\'il n\'enregistre pas',
      paragraphs: [
        'GeoTapp ne relève la position que lorsqu\'un salarié effectue un geste précis : pointage d\'arrivée, début et fin de chaque pause, pointage de départ, plus un point par photo de preuve de travail. Entre deux pointages, rien n\'est enregistré automatiquement : aucune trace de déplacement, aucun suivi en arrière-plan, aucune position relevée à l\'insu du salarié.',
      ],
    },
    {
      heading: 'Comment un élu du CSE, un avocat en droit du travail ou un DPO peut le vérifier sans nous demander quoi que ce soit',
      paragraphs: [
        'Il n\'est pas nécessaire de nous croire sur parole : cela se vérifie de façon indépendante. Sur l\'application Android, le manifeste ne déclare que les permissions ACCESS_FINE_LOCATION et ACCESS_COARSE_LOCATION. La permission ACCESS_BACKGROUND_LOCATION, nécessaire pour suivre un salarié application fermée, n\'est pas demandée, et il n\'existe aucun service de premier plan dédié à la localisation : sans cette permission, le système d\'exploitation ne transmet tout simplement pas la position à une application qui n\'est pas ouverte à l\'écran. Sur iOS, l\'application ne demande que l\'autorisation "lors de l\'utilisation de l\'app" (requestWhenInUseAuthorization), jamais l\'autorisation de suivi en arrière-plan.',
        'C\'est une vérification qu\'un élu du personnel, un avocat spécialisé en droit du travail ou un délégué à la protection des données peut effectuer seul en quelques minutes, en lisant le manifeste de l\'application ou l\'étiquette de confidentialité publiée par le store, avant même de lire la note d\'information remise par l\'entreprise.',
      ],
    },
    {
      heading: 'Combien de temps les positions relevées sont-elles conservées ?',
      paragraphs: [
        'Dans le registre de pointage, les coordonnées sont supprimées après douze mois ; l\'entreprise peut réduire cette durée jusqu\'à trente jours. Dans les rapports déjà remis à un client, en revanche, les positions restent : ce sont des documents scellés qui documentent le travail effectué, et ils suivent la durée de conservation propre à ce type de document, pas celle du registre.',
        'Ce sont deux règles différentes pour deux objets différents. Le registre opérationnel s\'allège avec le temps ; un document déjà remis à un tiers suit ses propres règles, comme tout document une fois sorti de nos systèmes.',
      ],
    },
    {
      heading: 'Et en dehors de l\'Italie ?',
      paragraphs: [
        'Le RGPD (en particulier les articles 5, 6, 12 à 14 et 25 du règlement UE 2016/679) s\'applique dans toute l\'Union européenne et impose partout les mêmes principes : minimisation des données, finalité déclarée, information claire du salarié. Ce qui change d\'un pays à l\'autre, c\'est la procédure encadrant le contrôle à distance : l\'équivalent local de l\'article 4 italien, le rôle du comité social et économique ou du syndicat, l\'autorité de contrôle compétente. Pour la situation d\'un pays donné, la carte GPS des travailleurs en UE rassemble des fiches vérifiées pays par pays.',
      ],
    },
  ],
  table: {
    title: 'Ce qui est enregistré et ce qui ne l\'est pas',
    colLeft: 'Enregistré',
    colRight: 'Non enregistré',
    left: [
      'Position au pointage d\'arrivée et de départ',
      'Position au début et à la fin de chaque pause',
      'Un point GPS par photo de preuve de travail',
      'L\'horodatage du scellement du rapport, relevé sur l\'horloge du serveur',
    ],
    right: [
      'Aucun déplacement pendant le poste, entre deux pointages',
      'Aucune position hors poste ou application fermée',
      'Aucun score ni profilage des comportements',
    ],
  },
  sourcesTitle: 'Sources et références',
  sources: [
    'Tribunal de Cosenza (Italie), jugement n° 972 du 1er juillet 2026',
    'Autorité italienne de protection des données (Garante), décision n° 382 du 28 mai 2026 (doc-web 10259916)',
    'Autorité italienne de protection des données (Garante), décision n° 135 du 13 mars 2025 (doc-web 10128005), annulée par le jugement ci-dessus',
    'Loi italienne n° 300 du 20 mai 1970 (Statut des travailleurs), art. 4',
    'Règlement (UE) 2016/679 (RGPD), art. 5, 6, 12 à 14, 25',
  ],
  disclaimer:
    'Cette page décrit des principes généraux, vérifiables à la source, et ne constitue pas un conseil juridique : pour votre situation spécifique, consultez un avocat en droit du travail ou un délégué à la protection des données.',
  faq: {
    title: 'Questions fréquentes',
    items: [
      {
        q: 'Le suivi GPS des salariés est-il interdit par le RGPD ?',
        a: 'Non. Les autorités de protection des données n\'interdisent pas le GPS pour les salariés en tant que tel. Ce qu\'elles sanctionnent, c\'est le suivi continu, l\'absence d\'information, la collecte de données sans lien avec le travail : pas le relevé ponctuel de position au moment du pointage.',
      },
      {
        q: 'Faut-il toujours l\'accord du CSE pour utiliser le GPS dans le pointage ?',
        a: 'Il est nécessaire lorsque le système peut permettre un contrôle continu de l\'activité du salarié. Le tribunal de Cosenza a toutefois reconnu qu\'un système qui ne relève la position qu\'au pointage, sans suivi continu, relève des outils d\'enregistrement des présences qui n\'exigent pas cette procédure.',
      },
      {
        q: 'Que se passe-t-il si le système suit aussi pendant les pauses ?',
        a: 'C\'est l\'une des erreurs à l\'origine d\'amendes réelles : une entreprise de transport a été sanctionnée à hauteur de 50 000 euros, notamment parce que le suivi continuait pendant les pauses. Le principe de minimisation des données (art. 5 du RGPD) impose que la collecte s\'arrête quand le poste s\'arrête.',
      },
      {
        q: 'GeoTapp peut-il suivre un salarié en continu si je le demande ?',
        a: 'Non. L\'application ne demande jamais la permission de localisation en arrière-plan et n\'a aucun service qui suit un appareil application fermée : ce n\'est pas une option désactivée, c\'est une permission que le code ne demande jamais. Vérifiable en lisant le manifeste de l\'application ou l\'étiquette de confidentialité du store.',
      },
      {
        q: 'Les positions relevées restent-elles conservées indéfiniment ?',
        a: 'Non. Dans le registre de pointage, elles sont supprimées après douze mois, et l\'entreprise peut réduire ce délai à trente jours. Elles restent en revanche dans les rapports déjà remis à un client, car ce sont des documents scellés qui documentent le travail effectué.',
      },
    ],
  },
  relatedTitle: 'Ressources associées',
};

export default fr;
