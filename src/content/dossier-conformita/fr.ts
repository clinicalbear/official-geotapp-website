import type { DossierCopy } from './types';

const fr: DossierCopy = {
  metaTitle: 'Dossier de conformité GeoTapp : preuve du travail, pas de surveillance',
  metaDesc:
    'Ce que fait et ne fait pas GeoTapp, sources juridiques à l’appui et limites annoncées sans détour. RGPD, CNIL, Code du travail, intégrité de la preuve.',
  badge: 'Dossier de conformité',
  h1: 'La preuve du travail, pas la surveillance',
  subtitle:
    'Ce que fait GeoTapp et, surtout, ce qu’il ne fait pas. Avec les sources juridiques en clair et les limites annoncées sans détour. Un document à lire, à vérifier et à citer.',
  sections: [
    {
      heading: 'Pourquoi ce document existe',
      paragraphs: [
        'À Bruxelles, on écrit en ce moment même les règles qui encadrent la manière dont on peut suivre les travailleurs : directive sur le travail via les plateformes, gestion algorithmique, règlement sur l’intelligence artificielle appliqué au travail. Pendant ce temps, celui qui envoie des équipes sur le terrain doit déjà relever les heures, les prouver quand quelqu’un les conteste, et le faire sans piétiner la vie privée des personnes. C’est un équilibre difficile, et c’est sur cet équilibre que se joue une bonne part de la confiance entre celui qui organise le travail et celui qui l’exécute.',
        'GeoTapp est né à l’intérieur de ce problème, pas à côté. C’est pourquoi, au lieu de promettre, il met par écrit ce qu’il fait et ce qu’il ne fait pas, sources juridiques à l’appui et limites annoncées sans détour. Ce qui suit peut se lire, se vérifier et se citer. Quiconque y trouve un point faible est invité à le signaler : un dossier de conformité vaut pour ce qui tient, pas pour la façon dont il sonne.',
      ],
    },
    {
      heading: 'Ce qu’il fait, et surtout ce qu’il ne fait pas',
      paragraphs: [
        'Le principe est unique : enregistrer le fait, pas suivre la personne.',
        'GeoTapp relève la position uniquement au moment du pointage, à l’entrée et à la sortie, et jamais pendant la journée. Entre un pointage et l’autre, il n’y a aucun suivi : pas de trace de déplacements, pas de position collectée à l’insu de la personne, pas de filature numérique. La photo qui accompagne le pointage ne peut être prise qu’en direct, depuis la caméra : on ne peut pas téléverser une image depuis la galerie. Les données collectées sont réduites au minimum nécessaire, par choix de conception et non comme correction après coup.',
        'Ce que GeoTapp ne fait pas compte tout autant. Il ne poursuit pas le salarié en dehors des horaires, ne profile pas les comportements, ne mesure pas l’activité syndicale, ne lit pas les états émotionnels, ne construit pas de scores sur les personnes. C’est exactement le périmètre que le Parlement européen a désigné comme à interdire, et GeoTapp s’en tient déjà à l’écart.',
      ],
    },
    {
      heading: 'Les principes du RGPD, appliqués et non récités',
      paragraphs: [
        'Minimisation des données (art. 5.1.c du RGPD) : la position est collectée seulement au pointage, jamais en continu.',
        'Limitation des finalités (art. 5.1.b) : le but est la preuve du travail accompli, pas le contrôle à distance de la personne.',
        'Base juridique (art. 6) : exécution du contrat de travail et intérêt légitime documenté, accompagnés de l’information préalable.',
        'Transparence (art. 12 à 14) : le salarié reçoit une information claire. GeoTapp met à disposition un modèle d’information GPS, gratuit et téléchargeable.',
        'Protection dès la conception (art. 25) : la collecte minimale est le comportement par défaut de l’outil, pas une option à activer.',
      ],
    },
    {
      heading: 'L’alignement avec le cadre français du contrôle à distance',
      paragraphs: [
        'En France, la mise en place d’un dispositif de géolocalisation des salariés relève à la fois du RGPD et du Code du travail, sous le contrôle de la CNIL. La géolocalisation doit être justifiée par une finalité légitime et rester proportionnée : elle ne peut servir qu’à ce qui ne peut être obtenu par un moyen moins intrusif. L’employeur doit informer chaque salarié à titre individuel avant la mise en service, et procéder à l’information et à la consultation du comité social et économique (CSE) lorsqu’il existe. La géolocalisation ne doit pas porter sur les déplacements hors temps de travail ni servir à un contrôle permanent.',
        'GeoTapp se situe à l’intérieur de ce cadre comme un outil qui facilite la conformité, non comme un raccourci qui la contourne. Le responsable de traitement reste l’employeur, avec ses obligations : information préalable, consultation du CSE, proportionnalité, registre des activités de traitement. GeoTapp fournit un outil conçu pour rester dans les règles, et les ressources pour les appliquer. Pour les autres pays européens, la carte GPS travailleurs UE rassemble trente-neuf fiches nationales vérifiées à la main, avec les obligations, l’autorité compétente et les sanctions de chaque pays.',
      ],
    },
    {
      heading: 'L’intégrité de la preuve',
      paragraphs: [
        'Quand GeoTapp parle de « preuve du travail », il entend quelque chose qui tient face à une contestation, et pour tenir cela doit être difficile à falsifier et impossible à retoucher après coup. La défense est en couches.',
        'La capture de la photo est verrouillée sur la caméra en direct : la valeur qui identifie ce mode est fixée dans les clients et, surtout, elle est vérifiée par les règles de la base de données au moment de l’écriture, qui rejettent un pointage présentant un autre mode. Pour chaque photo, le client calcule une empreinte cryptographique SHA-256, condition nécessaire pour aller plus loin.',
        'Les sessions de travail sont immuables une fois créées : l’heure de début, la position enregistrée au pointage et l’identité de l’utilisateur ne sont pas modifiables par le salarié, et la suppression est réservée aux administrateurs. Les sessions avec position naissent uniquement par une fonction côté serveur dotée de privilèges administratifs, jamais par écriture directe depuis l’application ; ainsi l’opérateur ne peut ni antidater un pointage, ni en déplacer la position, ni le faire disparaître.',
        'La détection du GPS falsifié agit avant même que le pointage ne parte. Sur les appareils Android, le contrôle est à plusieurs niveaux, avec une liste d’applications de spoofing connues, la vérification des autorisations de position fictive et des signes de root : s’il se déclenche, le pointage est bloqué, pas seulement signalé. Sur iOS, on utilise le signal natif du système d’exploitation qui indique une position simulée par logiciel. Est également intercepté le « téléportage », c’est-à-dire un déplacement à une vitesse physiquement impossible entre deux pointages.',
        'Chaque pointage laisse enfin une trace dans un journal d’audit côté serveur, avec un horodatage généré par le serveur et non par l’appareil, et aucun client ne peut écrire dans ce journal, pas même un administrateur.',
      ],
    },
    {
      heading: 'Les limites, dites clairement',
      paragraphs: [
        'C’est la section que beaucoup omettraient, et c’est justement celle qui rend crédible tout le reste. GeoTapp rend le spoofing difficile et atteste le contexte du pointage, mais il ne promet pas l’impossible, et le dire est une forme de respect envers celui qui lit.',
        'Le serveur ne revérifie pas les coordonnées par voie cryptographique : il contrôle qu’elles soient plausibles et à l’intérieur de l’éventuel geofence, mais il se fie à la position que l’appareil rapporte. L’attestation de l’appareil certifie que l’application provient des canaux officiels, elle ne met pas à l’abri d’un client modifié et analysé par quelqu’un qui en a les compétences. Le mode « caméra en direct uniquement » est une déclaration honnête de l’appareil, pas une preuve cryptographique que le serveur puisse refaire sur l’image. Les contrôles sont plus complets sur le smartphone que sur la montre. Et, surtout, l’outil ne décharge pas l’entreprise de son rôle de responsable de traitement : il lui reste le devoir d’information, de consultation du CSE lorsqu’elle s’impose, de proportionnalité.',
        'Autrement dit : GeoTapp relève le niveau et documente le fait, il ne vend pas l’invulnérabilité. Celui qui promet l’invulnérabilité, le plus souvent, n’a jamais eu à la démontrer devant un tribunal.',
      ],
    },
    {
      heading: 'Les ressources publiques à l’appui',
      paragraphs: [
        'Tout ce qui sert à appliquer ces principes est public et gratuit : la carte GPS travailleurs UE avec les fiches des trente-neuf pays, le modèle d’information GPS, le calculateur des sanctions, l’indice de la surveillance. Vérifiés à la source, libres d’usage et de citation en indiquant la provenance. Ils sont là parce que mettre le travail en conformité ne devrait pas être un privilège réservé à qui peut se payer un service juridique.',
      ],
    },
    {
      heading: 'Attestation',
      paragraphs: [
        'Les affirmations techniques de ce document sont rédigées et signées par Michele Angelo Petraroli, fondateur de GeoTapp, qui en assume la responsabilité et se tient disponible pour vérification et contradiction. L’appui d’un avocat en droit du travail et d’un DPO sera ajouté dans la version suivante du document.',
      ],
    },
  ],
  sourcesTitle: 'Sources et références',
  sources: [
    'Règlement (UE) 2016/679 (RGPD), en particulier art. 5, 6, 12 à 14, 25.',
    'Code du travail français et délibérations de la CNIL relatives à la géolocalisation des salariés.',
    'Obligations d’information préalable des salariés et de consultation du comité social et économique (CSE).',
    'Textes UE en discussion : directive sur le travail via les plateformes numériques ; dispositions sur la gestion algorithmique ; règlement sur l’intelligence artificielle appliqué au travail.',
  ],
  lastUpdated: 'Version 1.0',
  faq: {"title": "Questions fréquentes", "items": [{"q": "Qu'est-ce que le dossier de conformité ?", "a": "C'est le document qui explique, sources à l'appui, pourquoi GeoTapp est un outil de preuve du travail et non de surveillance, et comment cela tient face au RGPD et au droit du travail. Il s'adresse à quiconque veut vraiment comprendre comment les données sont traitées, pas à ceux qui se contentent d'un slogan."}, {"q": "GeoTapp est-il un système de surveillance ?", "a": "Non, et il a été conçu pour ne pas l'être. L'outil enregistre la localisation uniquement au pointage, quand quelqu'un ouvre ou ferme un chantier, jamais en continu, et il produit l'information à remettre. Il prouve ce qui a été fait et où, il ne surveille pas les gens."}, {"q": "À quoi ce dossier me sert-il ?", "a": "À répondre quand un salarié, un client ou un conseiller demande si ce que vous utilisez est conforme. Au lieu d'improviser, vous disposez d'un texte qui expose le raisonnement et les sources, et que vous pouvez transmettre tel quel."}, {"q": "Les sources sont-elles vérifiées ?", "a": "Oui, le dossier renvoie à des textes de loi et à des décisions réelles, listés à la fin avec la date de mise à jour. Cela reste néanmoins une ressource informative et non un conseil juridique : pour votre situation précise, faites tout vérifier par un professionnel."}, {"q": "Puis-je le montrer à un client ou dans un litige ?", "a": "Vous pouvez l'utiliser pour expliquer comment GeoTapp est configuré et pour montrer que la conformité n'est pas une affirmation lancée à la légère. En contentieux, toutefois, ce qui compte ce sont vos données réelles et votre information : le dossier est le contexte, la preuve, c'est la session de travail enregistrée."}, {"q": "Cela ne vaut-il que pour l'Italie ?", "a": "Le raisonnement de fond vaut dans toute l'Union, car il part du RGPD, mais les détails sur la surveillance des salariés changent d'un pays à l'autre. Pour la situation d'un État précis, partez de sa fiche, ici dans les ressources."}]},
};

export default fr;
