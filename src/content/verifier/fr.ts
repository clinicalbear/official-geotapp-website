import type { VerifierCopy } from './types';

const fr: VerifierCopy = {
  hero_badge: "GeoTapp Verifier - Vérification des rapports de travail",
  hero_title: 'Vos rapports de travail\nsont vérifiables.',
  hero_subtitle:
    "GeoTapp Verifier contrôle qu’un rapport GeoTapp n’a pas été modifié après le scellement, et que c’est bien GeoTapp qui l’a émis. Il est gratuit, pour vous comme pour vos clients, et fonctionne aussi hors ligne.",
  hero_cta_primary: "Essayer GeoTapp gratuitement",
  hero_cta_secondary: "Voir comment ça fonctionne",
  terminal_integrity: "Chaîne des événements : INTACTE",
  terminal_timestamps: "Heure du scellement : DU SERVEUR",
  terminal_gps: "Empreintes des photos : CONCORDANTES",
  terminal_not_modified: "Document non modifié : CONFIRMÉ",
  terminal_operator: "Signature de GeoTapp : VALIDE",
  terminal_summary_title: "Résumé de la vérification",
  terminal_technician_label: "Technicien :",
  terminal_date_label: "Date d’intervention :",
  terminal_site_label: "Site :",
  terminal_verified_line: "DOCUMENT INTACT ET SIGNÉ",
  ecosystem_timetracker_desc:
    "Collecte les données sur le terrain : pointages avec position et heure, photos de preuve et notes.",
  ecosystem_timetracker_link: "Découvrir TimeTracker",
  ecosystem_flow_desc:
    "Organise les chantiers et les équipes, et génère des rapports structurés et scellés, prêts pour la vérification.",
  ecosystem_flow_link: "Découvrir Flow",
  ecosystem_verifier_desc:
    "Vérifie l’intégrité de chaque rapport : recalcule les empreintes et contrôle la signature de GeoTapp.",
  problem_badge: 'Le vrai problème',
  problem_title: "Un rapport invérifiable est un rapport contestable.",
  problem_items: [
    {
      title: 'Des clients qui remettent en question le travail effectué',
      desc: "Sans preuve indépendante, n’importe quel rapport peut être remis en cause. Le client ne sait pas si ce qui est écrit correspond à ce qui a réellement été fait.",
    },
    {
      title: 'Des horaires et des présences difficiles à défendre',
      desc: "Les feuilles d’émargement et les pointages manuels ne suffisent pas. Quand un litige survient sur les heures ou sur la présence sur le chantier, le document seul ne convainc pas.",
    },
    {
      title: 'Des rapports modifiés ou incomplets',
      desc: "Un document que l’on peut modifier après coup sans laisser de trace ne se vérifie pas. Le client le sait, et cela nourrit la méfiance même quand le travail a été parfaitement exécuté.",
    },
  ],
  what_badge: "Qu’est-ce que GeoTapp Verifier",
  what_title: "Vérification indépendante des rapports d’intervention.",
  what_desc:
    "GeoTapp Verifier permet à quiconque de contrôler un rapport généré par GeoTapp Flow et TimeTracker : il recalcule les empreintes des pointages, des positions et des photos contenus dans le paquet, et vérifie la signature de GeoTapp. Il indique si le document est intact et d’où il vient ; à lui seul, il ne prouve pas que le fait a eu lieu, et ce n’est pas un conseil juridique.",
  how_badge: 'Comment ça fonctionne',
  how_title: 'Trois étapes. Un rapport vérifié.',
  how_steps: [
    {
      num: '01',
      title: 'Le technicien enregistre l’activité sur le terrain',
      desc: "Avec GeoTapp TimeTracker, chaque intervention génère des données : pointages avec position et heure, photos de preuve et notes. Les données arrivent dans GeoTapp Flow dès que le téléphone a du réseau.",
    },
    {
      num: '02',
      title: 'Flow génère le rapport structuré',
      desc: "GeoTapp Flow rassemble les données du chantier et produit le rapport. Le rapport est scellé : à partir de ce moment, toute modification est détectable.",
    },
    {
      num: '03',
      title: "Verifier vérifie l’intégrité",
      desc: "N’importe qui peut vérifier le rapport avec GeoTapp Verifier : il recalcule les empreintes, contrôle la signature et indique si le rapport est intact et s’il provient de GeoTapp.",
    },
  ],
  features_badge: 'Ce qui est vérifié',
  features_title: 'Chaque aspect du rapport est contrôlable.',
  features: [
    {
      title: 'Chaîne des événements',
      desc: "Chaque pointage est lié au précédent par une empreinte SHA-256 : si un événement est retiré, ajouté ou modifié, la chaîne se rompt.",
    },
    {
      title: 'Photos de preuve',
      desc: "L’empreinte de chaque photo figure dans le paquet : il suffit de changer un pixel pour qu’elle ne corresponde plus.",
    },
    {
      title: 'Intégrité du document',
      desc: "Vérifie que le document n’a pas été modifié après sa génération. Toute altération est détectée.",
    },
    {
      title: 'Signature de GeoTapp',
      desc: "La racine du paquet est signée avec la clé de GeoTapp : la vérification indique si c’est bien nous qui l’avons émis.",
    },
    {
      title: 'Heure du scellement',
      desc: "L’heure du scellement vient de l’horloge du serveur, pas de celle du téléphone.",
    },
    {
      title: 'Vérifiable sans accès à la plateforme',
      desc: "Le client peut vérifier le rapport de façon indépendante, sans avoir besoin d’accéder à la plateforme GeoTapp, même hors ligne.",
    },
  ],
  who_badge: 'À qui cela s’adresse',
  who_title: "Pour les entreprises qui doivent démontrer le travail effectué.",
  who_items: [
    "Entreprises de maintenance et d’assistance technique",
    'Entreprises de nettoyage et de facility management',
    'Services de sécurité et de surveillance',
    "Équipes d’installation et d’intervention terrain",
    'Toute entreprise qui doit démontrer sa présence et son activité sur le terrain',
  ],
  ecosystem_badge: 'Écosystème GeoTapp',
  ecosystem_title: 'Verifier fonctionne avec Flow et TimeTracker.',
  ecosystem_desc:
    "GeoTapp Verifier n’est pas un outil autonome. C’est la dernière étape d’un cycle opérationnel intégré : les données sont collectées sur le terrain avec TimeTracker, organisées dans Flow, puis vérifiées par Verifier.",
  cta_title: 'Commencez à produire des rapports vérifiables.',
  cta_subtitle:
    "Avec des rapports que le client peut vérifier lui-même, quand quelqu’un conteste vous avez une preuve à montrer, pas une parole contre une autre.",
  cta_primary: "Essayer GeoTapp gratuitement",
  cta_flow: "Découvrir GeoTapp Flow",
  cta_timetracker: "Découvrir GeoTapp TimeTracker",
  faq_badge: 'Questions fréquentes',
  faq_title: "Tout ce que vous voulez savoir sur Verifier.",
  faqs: [
    {
      q: 'Le client doit-il avoir un compte GeoTapp pour vérifier un rapport ?',
      a: "Non. Le client reçoit le rapport et le vérifie sans s’inscrire et sans accéder à la plateforme : en ligne, ou avec le vérificateur hors ligne gratuit.",
    },
    {
      q: 'Que se passe-t-il si quelqu’un tente de modifier le rapport ?',
      a: "Le vérificateur recalcule les empreintes des événements et des photos : toute modification après la génération les rend différentes de celles qui ont été scellées, et la vérification signale le document comme altéré.",
    },
    {
      q: 'Verifier fonctionne-t-il pour les rapports historiques ?',
      a: "Oui. Tous les rapports générés par GeoTapp Flow avec des données TimeTracker peuvent être vérifiés à tout moment, même des mois ou des années après leur production.",
    },
    {
      q: 'Verifier est-il payant ?',
      a: "Non, il est gratuit : pour vous et pour toute personne qui reçoit l’un de vos rapports.",
    },
  ],
  hero_cta_download: 'Télécharger le vérificateur',
  cta_download: 'Télécharger Verifier gratuitement',
  download_badge: 'Téléchargement gratuit',
  download_title: 'Télécharger GeoTapp Verifier.',
  download_desc:
    "Vérifiez hors ligne l’intégrité des rapports GeoTapp. Aucun compte requis : en ligne de commande ou bibliothèque Node.js pour les développeurs, ou un fichier HTML qui s’ouvre d’un double-clic pour tous les autres.",
  download_btn_cli: 'Télécharger en ligne de commande (Node.js)',
  download_btn_html: 'Télécharger la version HTML locale',
  download_version: 'v0.3.0 · même moteur de vérification, deux formats',
  download_requirements: 'Nécessite Node.js ≥ 18',
  download_cli_title: 'Depuis le terminal',
  download_api_title: 'Comme bibliothèque Node.js',

  online_verify_badge: "Vérification instantanée",
  online_verify_title: "Vérifier un rapport en ligne",
  online_verify_desc:
    "Chargez le fichier ZIP du rapport. La vérification se fait sur le serveur et le fichier n’est pas conservé.",
  online_verify_upload_label: "Glissez le ZIP du rapport ici, ou cliquez pour le sélectionner",
  online_verify_upload_hint: "Fichiers .zip uniquement, taille maximale 25 Mo",
  online_verify_btn: "Vérifier maintenant",
  online_verify_privacy_note:
    "Le fichier est analysé en mémoire et n’est ni conservé ni transmis à des tiers.",
  online_verify_size_limit: "Taille maximale : 25 Mo",
  online_verify_result_valid_sealed: "Rapport valide, scellé et signé",
  online_verify_result_valid_unsigned: "Rapport valide, contenu intact, scellé non signé",
  online_verify_result_legacy: "Rapport ancien format, lisible, sans scellé renforcé",
  online_verify_result_invalid: "Rapport non valide, contenu potentiellement altéré",
  online_verify_error_too_large: "Fichier trop volumineux. Taille maximale : 25 Mo.",
  online_verify_error_not_zip: "Le fichier doit être une archive ZIP.",
  online_verify_error_generic: "Erreur pendant la vérification. Le fichier est peut-être endommagé.",
  compare_badge: "Deux façons de vérifier",
  compare_title: "Vérification locale ou en ligne ?",
  compare_local_title: "Sur votre ordinateur",
  compare_local_items: [
    'Le fichier reste sur votre appareil',
    'Fonctionne sans connexion internet',
    'Aucune limite de taille en pratique',
    'Idéal pour les audits, les juristes, les conseils',
    'La version HTML ne demande aucune installation ; celle en ligne de commande nécessite Node.js',
  ],
  compare_online_title: 'Online (this site)',
  compare_online_items: [
    'Aucun outil à installer',
    'Résultat immédiat dans le navigateur',
    'Le fichier transite par notre serveur, qui ne le conserve pas',
    'Limite de 25 Mo par fichier',
    'Idéal pour les contrôles rapides',
  ],
  compare_same_engine_note:
    "Même moteur de vérification dans les deux cas. La différence, c’est l’endroit où il s’exécute.",
};

export default fr;
