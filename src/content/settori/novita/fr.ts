import type { NovitaCopy } from './types';

const copy: NovitaCopy = {
  ui: {
    kicker: 'Nouveautés',
    flowCaption: 'Flow, le tableau de bord du dirigeant',
    phoneCaption: 'TimeTracker, sur le téléphone',
    altFlow: 'Flow, le tableau de bord du dirigeant : écran de {tool}',
    altPhone: 'TimeTracker sur le téléphone : écran de {tool}',
    flowOnly: 'Cet outil s\'utilise depuis Flow : rien à installer sur le téléphone de vos équipes.',
    seeAlso: 'Pour les vérifications électriques, les chaudières et les fluides frigorigènes, il existe des outils dédiés :',
    moreShots: 'Autres écrans de cet outil',
    enlarge: 'Agrandir : {name}',
    close: 'Fermer',
    prev: 'Précédent',
    next: 'Suivant',
  },
  sections: {
    sicurezza: {
      title: 'Nouveaux outils pour la sécurité privée : rondes, travailleur isolé, passation de consignes et Urgences',
      intro: 'Quand vous choisissez votre secteur, GeoTapp n\'active que les outils de votre métier. Pour la sécurité privée, il y en a trois, plus le module Urgences qui vaut pour tous les secteurs. Chacun a sa partie dans Flow, où vous décidez et contrôlez, et sa partie sur le téléphone de l\'agent.',
    },
    pulizie: {
      title: 'Nouveaux outils pour la propreté : contrôle qualité et fiches de données de sécurité',
      intro: 'Deux outils pensés pour les réclamations et les contrôles auxquels une entreprise de propreté fait face chaque semaine. Ils s\'activent quand vous indiquez votre secteur, les autres restent masqués.',
    },
    elettricisti: {
      title: 'Nouveaux outils pour les électriciens : mesures de fin de chantier et échéancier des vérifications',
      intro: 'Pour celui qui livre une installation et pour celui qui doit se souvenir des vérifications périodiques de ses clients. GeoTapp rassemble, met en page et rappelle : les vérifications, les attestations et les signatures restent à celui qui les établit.',
    },
    edilizia: {
      title: 'Nouveaux outils pour le bâtiment : documents des sous-traitants et estimation de la main-d\'œuvre',
      intro: 'Deux outils pour ceux qui coordonnent des chantiers avec des sous-traitants, afin d\'arriver aux rendez-vous avec des dossiers déjà en ordre. Ils s\'utilisent depuis Flow, dans le tableau de bord du dirigeant.',
    },
    idraulici: {
      title: 'Nouveaux outils pour plombiers et chauffagistes : entretien des chaudières et registre F-gaz',
      intro: 'Le travail qui revient chaque année et qu\'on oublie justement quand il faut y penser : relancer les clients pour l\'entretien de leur installation et garder en ordre les appareils contenant des fluides frigorigènes.',
    },
    installatori: {
      title: 'Nouveaux outils pour les installateurs : remise avec signature et stock du véhicule',
      intro: 'Deux outils pour les deux choses qui vous font perdre du temps à chaque chantier : clôturer la remise avec le client et savoir ce qu\'il y a vraiment dans le véhicule.',
    },
    manutenzione: {
      title: 'Nouveaux outils pour la maintenance : délais d\'intervention et QR sur les appareils',
      intro: 'Pour ceux qui travaillent avec des contrats de service et de nombreux équipements répartis sur plusieurs bâtiments : savoir combien de temps il reste pour chaque demande et retrouver l\'historique d\'une machine en un geste.',
    },
    impianti: {
      title: 'Nouveaux outils pour les installateurs techniques : remise avec signature et stock du véhicule',
      intro: 'Cette page s\'adresse à ceux qui montent et livrent des installations, de toute nature : vous trouvez donc ici les deux outils valables pour tous, la remise avec signature et le stock du véhicule. Les vérifications électriques et l\'entretien des chaudières sont des métiers à part et ont leurs outils dédiés.',
    },
  },
  tools: {
    giro_ronda: {
      title: 'Ronde de surveillance',
      body: 'Il est trois heures du matin et le client veut savoir si la ronde est passée à tous les points de l\'entrepôt. Dans Flow, vous placez les points sur la carte et réglez les rondes avec leurs horaires ; l\'agent, en passant, touche « Passage » sur son téléphone. Le matin, vous avez le rapport de la nuit, déjà mis en page.',
      note: 'La position n\'est lue qu\'au moment où l\'agent touche « Passage » : entre deux points, rien n\'est enregistré.',
    },
    lavoratore_isolato: {
      title: 'Travailleur isolé',
      body: 'Un agent seul sur un site, la nuit. Pour chaque site, vous choisissez un plan avec l\'intervalle qui vous convient : à ces intervalles, le téléphone demande « Tout va bien ? » et, si la réponse n\'arrive pas, prévient le responsable. Dans Flow, vous voyez les vacations en cours et l\'historique de qui a répondu et quand.',
      note: 'Aucune position n\'est envoyée. C\'est un outil d\'appui : il ne remplace pas les mesures de prévention prévues pour le travail isolé.',
    },
    consegne_turno: {
      title: 'Passation de consignes',
      body: 'À six heures, l\'agent de nuit laisse le site à celui du matin. Avant, c\'étaient des clés dans une boîte et un message vocal ; maintenant, en fin de vacation, il note les consignes, les clés et les anomalies pour celui qui arrive, qui les prend en charge depuis son téléphone. Dans Flow, vous voyez les relèves pas encore prises et les anomalies ouvertes. L\'historique ne peut pas être modifié.',
    },
    emergenze: {
      title: 'Urgences et exercices',
      body: 'Exercice d\'évacuation dans un bâtiment ou lors d\'un événement : le responsable choisit le scénario et touche sur le plan le point du danger. Chaque personne de l\'équipe reçoit sur son téléphone son rôle, ce qu\'il faut faire et les sorties dans l\'ordre, et répond d\'un geste : présent, j\'arrive, je ne peux pas. Le tableau de bord montre qui a répondu et au bout de combien de temps ; les plans s\'ouvrent aussi sans réseau.',
      note: 'C\'est un outil de coordination et d\'entraînement : il ne remplace pas votre plan d\'urgence et ne le valide pas, et une notification peut ne pas arriver, c\'est pourquoi chacun confirme.',
    },
    qualita_pulizie: {
      title: 'Contrôle qualité',
      body: 'Le référent du client dit que le troisième étage n\'a pas été bien nettoyé. La cheffe d\'équipe fait le tour de la zone avec la liste de points, note conforme, non conforme ou sans objet et joint la photo. Dans Flow, chaque point a un poids de 1 à 3, le score du mois est par site et par zone, et en fin de mois sort le PDF à montrer au client, avec les actions encore ouvertes.',
    },
    schede_consumi: {
      title: 'Fiches de données de sécurité et consommations',
      body: 'Lors d\'un contrôle, on veut voir la fiche de données de sécurité du produit qui se trouve sur le chariot. Dans Flow, chaque site a ses produits, chacun avec sa fiche en PDF, et vous voyez les prélèvements et les coûts du mois. Sur le téléphone, les fiches se lisent même sans réseau, et le prélèvement s\'enregistre sur le moment.',
    },
    verifiche_misure: {
      title: 'Vérifications et mesures',
      body: 'Tableau fermé, dernier jour de chantier : continuité, isolement, différentiels, terre. L\'électricien saisit chaque mesure depuis son téléphone avec le résultat et la photo de l\'appareil ; Flow rassemble les vérifications par chantier et les met en page pour les joindre à l\'attestation de conformité (norme NF C 15-100, visa du Consuel quand il est requis).',
      note: 'GeoTapp rassemble et met en page : il ne vérifie pas, ne valide pas, ne garantit pas la conformité. L\'attestation et la signature restent à l\'électricien.',
    },
    impianti_terra: {
      title: 'Échéancier des vérifications électriques',
      body: 'Pour chaque client, vous saisissez la date de la dernière vérification électrique périodique : Flow vous prévient avant l\'échéance, pour que vous ne la découvriez pas une fois dépassée. Pour les locaux de travail, cette vérification périodique est prévue par le Code du travail (article R. 4226-14).',
      note: 'Les dates sont saisies par votre entreprise : GeoTapp les rappelle, ne réalise pas la vérification et ne dit pas si elle est valable.',
    },
    documenti_imprese: {
      title: 'Documents des sous-traitants',
      body: 'Avant de laisser entrer un sous-traitant sur le chantier, vous voulez avoir ses papiers en règle et vous rappeler quand ils expirent. Flow tient l\'échéancier des documents de chaque sous-traitant et vous prévient avant la date.',
      note: 'Il prévient avant l\'échéance, il ne dit pas si un document est valable : cela, c\'est vous qui le contrôlez, ou votre conseil.',
    },
    congruita: {
      title: 'Estimation de la main-d\'œuvre',
      body: 'En fin de chantier, votre comptable ou votre conducteur de travaux vous demande quel poids pèse la main-d\'œuvre dans la valeur des travaux. Flow fait une estimation interne pour chaque chantier à partir des heures enregistrées et l\'exporte en CSV ou en PDF, à transmettre.',
      note: 'C\'est une estimation interne, pas un calcul officiel : en France, aucun organisme n\'impose ce ratio, il sert seulement à votre pilotage.',
    },
    caldaie: {
      title: 'Entretien des chaudières',
      body: 'Septembre : plusieurs clients ont leur entretien annuel à échéance. Flow vous montre les installations à relancer dans le mois et prépare le brouillon du message au client, qui ne part que si vous l\'envoyez. Sur le téléphone, le technicien a la liste des installations avec leurs échéances et remplit le rapport d\'entretien avec les mesures.',
      note: 'L\'attestation d\'entretien est remise par le technicien qui a fait le travail : GeoTapp rassemble et met en page les données, ne vérifie pas et ne garantit pas la conformité. Aucun registre national n\'est alimenté.',
    },
    fgas: {
      title: 'Registre F-gaz',
      body: 'Un équipement contenant des fluides frigorigènes a une charge, un équivalent CO2 et un historique d\'interventions. Dans Flow, vous voyez les équipements et ce qui doit être consigné ; depuis le téléphone, le technicien ouvre le dossier de l\'équipement et ajoute tout de suite la nouvelle intervention, sans tout recopier le soir.',
      note: 'La fiche d\'intervention (Cerfa 15497) est établie et signée par le technicien titulaire de l\'attestation de capacité : GeoTapp aide à la préparer, rien n\'est transmis à une administration.',
    },
    consegna_firma: {
      title: 'Remise avec signature',
      body: 'Le montage est terminé. Le technicien lit avec son téléphone le code-barres de chaque numéro de série, prend les photos finales et fait signer le client sur l\'écran. Il en sort un procès-verbal PDF avec votre logo, les données de l\'entreprise et le code-barres de chaque numéro de série, qui rejoint le rapport d\'intervention. Dans Flow, vous voyez les remises du mois et choisissez l\'aspect du procès-verbal : logo, données, textes, couleur.',
    },
    magazzino_furgone: {
      title: 'Stock du véhicule',
      body: 'Le technicien arrive chez le client et découvre qu\'il n\'a plus le bon raccord. Sur le téléphone, il voit ce qu\'il y a dans le véhicule et ce qui s\'épuise, et note le matériel utilisé sur chaque chantier. Dans Flow, vous réglez les seuils par véhicule, vous voyez ce qu\'il faut recommander et combien coûte le matériel de chaque intervention.',
    },
    sla: {
      title: 'Délais d\'intervention (SLA)',
      body: 'Le contrat avec le syndic dit sous quel délai prendre en charge une demande et sous quel délai la résoudre. Dans Flow, chaque demande affiche le temps qui reste pour l\'un et pour l\'autre, par contrat ; en fin de mois, il y a le rapport. Sur le téléphone, le technicien voit les demandes qui lui sont assignées, les prend en charge et les marque comme résolues.',
    },
    qr_apparecchi: {
      title: 'QR sur les appareils',
      body: 'Devant une pompe ou un tableau, le technicien scanne l\'étiquette QR et a tout de suite l\'historique et les interventions de cet équipement. Celui qui scanne sans compte, un locataire par exemple, peut signaler un problème. Dans Flow, vous gérez les équipements et imprimez les étiquettes.',
    },
  },
  shots: {
    flow_emergenze_attiva: 'Flow : le responsable choisit le scénario et touche sur le plan le point du danger pour lancer l\'exercice',
    flow_emergenze_evento: 'Flow : tableau de bord de l\'exercice en cours, avec qui a répondu et en combien de temps',
    flow_emergenze_evento_persone: 'Flow : la liste des personnes de l\'équipe avec leur réponse, présent, j\'arrive ou je ne peux pas',
    flow_emergenze_sito: 'Flow : le plan du site avec les sorties, les équipements de secours et les zones',
    flow_emergenze_protocolli: 'Flow : les protocoles par scénario et par rôle',
    flow_emergenze_squadre: 'Flow : les équipes avec leurs attestations, et celui qui manque est signalé',
    flow_emergenze_scadenzario: 'Flow : échéancier des attestations et des vérifications des équipements de secours',
    tt_emergenze_dashboard: 'Téléphone : l\'écran d\'accueil avec l\'alerte d\'exercice',
    tt_emergenze_indicazioni: 'Téléphone : les consignes personnelles, avec le rôle et ce qu\'il faut faire',
    tt_emergenze_indicazioni_2: 'Téléphone : les sorties dans l\'ordre, sans celles qui sont bloquées',
    tt_emergenze_risposta: 'Téléphone : la réponse d\'un geste, présent, j\'arrive ou je ne peux pas',
    tt_emergenze_piani: 'Téléphone : les plans, consultables même sans réseau',
  },
};

export default copy;
