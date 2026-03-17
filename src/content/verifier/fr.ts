import type { VerifierCopy } from './types';

const fr: VerifierCopy = {
  hero_badge: 'GeoTapp Verifier — Vérification des Rapports de Travail',
  hero_title: 'Vos rapports de travail\nsont vérifiables.',
  hero_subtitle:
    "GeoTapp Verifier vérifie qu'un rapport d'intervention correspond aux données opérationnelles enregistrées sur le terrain et n'a pas été modifié. Plus de crédibilité pour le client, moins de litiges.",
  hero_cta_primary: 'Demander une démo',
  hero_cta_secondary: 'Voir comment ça fonctionne',
  terminal_integrity: "Intégrité du document : VÉRIFIÉE",
  terminal_timestamps: "Correspondance des horodatages : CONFIRMÉE",
  terminal_gps: "Coordonnées GPS : COHÉRENTES",
  terminal_not_modified: "Document non modifié : CONFIRMÉ",
  terminal_operator: "Opérateur vérifié : OK",
  terminal_summary_title: "Résumé de vérification",
  terminal_technician_label: "Technicien :",
  terminal_date_label: "Date d'intervention :",
  terminal_site_label: "Site :",
  terminal_verified_line: "RAPPORT AUTHENTIQUE ET INTACT",
  ecosystem_timetracker_desc:
    "Collecte les données opérationnelles sur le terrain : horodatages GPS, photos, notes et signature du client.",
  ecosystem_timetracker_link: "Découvrir TimeTracker",
  ecosystem_flow_desc:
    "Organise les chantiers, les équipes et génère des rapports structurés avec identifiant cryptographique.",
  ecosystem_flow_link: "Découvrir Flow",
  ecosystem_verifier_desc:
    "Vérifie l'intégrité de chaque rapport. Compare le document avec les données d'origine et certifie l'authenticité.",
  problem_badge: 'Le vrai problème',
  problem_title: 'Un rapport invérifiable est un rapport contestable.',
  problem_items: [
    {
      title: 'Des clients qui remettent en question le travail effectué',
      desc: "Sans preuve indépendante, n'importe quel rapport peut être contesté. Le client ne sait pas si ce qui est écrit correspond à ce qui a réellement été fait.",
    },
    {
      title: 'Des feuilles de temps difficiles à défendre',
      desc: "Les signatures manuelles et les feuilles de présence papier ne suffisent pas. Lorsqu'un litige survient sur les heures ou la présence sur site, le document seul ne convainc pas.",
    },
    {
      title: 'Des rapports qui peuvent être modifiés après coup',
      desc: "Un document pouvant être modifié après remise n'offre aucune garantie réelle. Les clients le savent, ce qui crée de la méfiance même quand le travail a été parfaitement réalisé.",
    },
  ],
  what_badge: "Qu'est-ce que GeoTapp Verifier",
  what_title: "Vérification indépendante des rapports d'intervention.",
  what_desc:
    "GeoTapp Verifier est le système qui permet de vérifier l'authenticité et l'intégrité des rapports générés par GeoTapp Flow et TimeTracker. Il compare le document avec les données opérationnelles d'origine — horodatages GPS, localisations, preuves photographiques — et certifie que le rapport n'a pas été altéré.",
  how_badge: 'Comment ça fonctionne',
  how_title: 'Trois étapes. Un rapport vérifié.',
  how_steps: [
    {
      num: '01',
      title: 'Le technicien enregistre l\'activité terrain',
      desc: "Avec GeoTapp TimeTracker, chaque intervention génère des données opérationnelles : horodatages GPS, photos, notes et signature du client. Les données sont synchronisées en temps réel avec GeoTapp Flow.",
    },
    {
      num: '02',
      title: 'Flow génère le rapport structuré',
      desc: "GeoTapp Flow collecte toutes les données de chantier et produit un rapport de travail structuré. Le rapport inclut un identifiant cryptographique qui lie le document aux données d'origine.",
    },
    {
      num: '03',
      title: "Verifier vérifie l'intégrité",
      desc: "N'importe qui peut vérifier le rapport avec GeoTapp Verifier. Le système compare le document avec les données opérationnelles enregistrées et certifie si le rapport est intact et authentique.",
    },
  ],
  features_badge: 'Ce qui est vérifié',
  features_title: 'Chaque aspect du rapport est contrôlable.',
  features: [
    {
      title: 'Heures et durées',
      desc: "Vérifie que les heures déclarées correspondent aux horodatages GPS enregistrés par TimeTracker sur le terrain.",
    },
    {
      title: 'Localisations et sites',
      desc: "Contrôle que les coordonnées et les adresses dans le rapport correspondent aux données GPS capturées lors de l'intervention.",
    },
    {
      title: 'Intégrité du document',
      desc: "Certifie que le document n'a pas été modifié après sa génération. Toute altération est détectée.",
    },
    {
      title: 'Authenticité des données',
      desc: "Vérifie que les données opérationnelles du rapport proviennent des systèmes GeoTapp et n'ont pas été saisies manuellement.",
    },
    {
      title: 'Opérateurs et affectations',
      desc: "Contrôle que les techniciens mentionnés dans le rapport sont bien ceux qui ont enregistré l'activité terrain.",
    },
    {
      title: 'Vérifiable sans accès à la plateforme',
      desc: "Le client peut vérifier le rapport de façon indépendante, sans avoir besoin d'accéder à la plateforme GeoTapp.",
    },
  ],
  who_badge: "À qui s'adresse-t-il",
  who_title: 'Pour les entreprises qui doivent défendre leur travail.',
  who_items: [
    "Entreprises de maintenance et d'assistance technique",
    'Entreprises de nettoyage et de facility management',
    'Services de sécurité et de surveillance',
    "Équipes d'installation et d'intervention terrain",
    "Toute entreprise devant prouver sa présence et son activité sur le terrain",
  ],
  ecosystem_badge: 'Écosystème GeoTapp',
  ecosystem_title: 'Verifier fonctionne avec Flow et TimeTracker.',
  ecosystem_desc:
    "GeoTapp Verifier n'est pas un outil autonome. C'est la dernière étape d'un cycle opérationnel intégré : les données sont collectées sur le terrain avec TimeTracker, organisées dans Flow, puis certifiées par Verifier.",
  cta_title: 'Commencez à produire des rapports vérifiables.',
  cta_subtitle:
    "Découvrez comment GeoTapp Verifier peut aider votre entreprise à réduire les litiges et à renforcer sa crédibilité auprès des clients.",
  cta_primary: 'Demander une démo',
  cta_flow: 'Explorer GeoTapp Flow',
  cta_timetracker: 'Explorer GeoTapp TimeTracker',
  faq_badge: 'Questions fréquentes',
  faq_title: 'Tout ce que vous voulez savoir sur Verifier.',
  faqs: [
    {
      q: 'Le client doit-il avoir un compte GeoTapp pour vérifier un rapport ?',
      a: "Non. GeoTapp Verifier est conçu pour la vérification indépendante. Le client reçoit le rapport et peut en vérifier l'authenticité sans s'inscrire ni accéder à la plateforme.",
    },
    {
      q: "Que se passe-t-il si quelqu'un tente de modifier le rapport ?",
      a: "Toute modification apportée au document après sa génération est détectée par Verifier. Le système compare le rapport avec les données opérationnelles d'origine et signale immédiatement toute anomalie.",
    },
    {
      q: 'Verifier fonctionne-t-il pour les rapports historiques ?',
      a: "Oui. Tous les rapports générés par GeoTapp Flow avec des données TimeTracker peuvent être vérifiés à tout moment, même des mois ou des années après leur production.",
    },
    {
      q: 'Verifier doit-il être acheté séparément ?',
      a: "GeoTapp Verifier est intégré à l'écosystème GeoTapp. Contactez-nous pour déterminer quel plan correspond le mieux aux besoins de votre entreprise.",
    },
  ],
  hero_cta_download: 'Télécharger gratuitement — v0.2.0',
  cta_download: 'Télécharger Verifier gratuitement',
  download_badge: 'Téléchargement gratuit',
  download_title: 'Télécharger GeoTapp Verifier.',
  download_desc: "Outil CLI open pour vérifier hors ligne l'intégrité des rapports GeoTapp. Aucun compte requis. Fonctionne en terminal ou comme bibliothèque Node.js.",
  download_btn: 'Télécharger report-verifier-0.2.0.zip',
  download_version: 'v0.2.0 — ~46 Ko — Nécessite Node.js ≥ 18',
  download_requirements: 'Nécessite Node.js ≥ 18',
  download_cli_title: 'Depuis le terminal',
  download_api_title: 'Comme bibliothèque Node.js',

  online_verify_badge: 'Instant verification',
  online_verify_title: 'Verify a report online',
  online_verify_desc: 'Upload the report ZIP file. Verification happens on the server and the file is not stored.',
  online_verify_upload_label: 'Drag the report ZIP here, or click to select',
  online_verify_upload_hint: '.zip files only — max 25MB',
  online_verify_btn: 'Verify now',
  online_verify_privacy_note: 'The file is processed in memory and never stored or shared with third parties.',
  online_verify_size_limit: 'Maximum size: 25MB',
  online_verify_result_valid_sealed: 'Valid report — sealed and signed',
  online_verify_result_valid_unsigned: 'Valid report — content intact, seal not cryptographically signed',
  online_verify_result_legacy: 'Legacy report — readable, no strong seal',
  online_verify_result_invalid: 'Invalid report — content may have been altered',
  online_verify_error_too_large: 'File too large. Maximum size: 25MB.',
  online_verify_error_not_zip: 'File must be a ZIP archive.',
  online_verify_error_generic: 'Verification error. The file may be corrupted.',
  compare_badge: 'Two ways to verify',
  compare_title: 'Local or online verification?',
  compare_local_title: 'Local (CLI / SDK)',
  compare_local_items: [
    'File stays on your device',
    'Works without internet connection',
    'No practical size limit',
    'Ideal for audits, legal, consultants',
    'Requires Node.js installed',
  ],
  compare_online_title: 'Online (this site)',
  compare_online_items: [
    'No tool to install',
    'Instant result in the browser',
    'File passes through the server (disclosed)',
    '25MB file size limit',
    'Ideal for quick checks',
  ],
  compare_same_engine_note: 'Same verification engine in both cases. The difference is where it runs.',
};

export default fr;
