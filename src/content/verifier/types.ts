export interface VerifierCopy {
  hero_badge: string;
  hero_title: string;
  hero_subtitle: string;
  hero_cta_primary: string;
  hero_cta_secondary: string;
  // terminal mock strings
  terminal_integrity: string;
  terminal_timestamps: string;
  terminal_gps: string;
  terminal_not_modified: string;
  terminal_operator: string;
  terminal_summary_title: string;
  terminal_technician_label: string;
  terminal_date_label: string;
  terminal_site_label: string;
  terminal_verified_line: string;
  // ecosystem section inline strings
  ecosystem_timetracker_desc: string;
  ecosystem_timetracker_link: string;
  ecosystem_flow_desc: string;
  ecosystem_flow_link: string;
  ecosystem_verifier_desc: string;
  problem_badge: string;
  problem_title: string;
  problem_items: Array<{ title: string; desc: string }>;
  what_badge: string;
  what_title: string;
  what_desc: string;
  how_badge: string;
  how_title: string;
  how_steps: Array<{ num: string; title: string; desc: string }>;
  features_badge: string;
  features_title: string;
  features: Array<{ title: string; desc: string }>;
  who_badge: string;
  who_title: string;
  who_items: string[];
  ecosystem_badge: string;
  ecosystem_title: string;
  ecosystem_desc: string;
  cta_title: string;
  cta_subtitle: string;
  cta_primary: string;
  cta_flow: string;
  cta_timetracker: string;
  faq_badge: string;
  faq_title: string;
  faqs: Array<{ q: string; a: string }>;
  // download section
  download_badge: string;
  download_title: string;
  download_desc: string;
  download_btn: string;
  download_version: string;
  download_requirements: string;
  download_cli_title: string;
  download_api_title: string;
  // hero download CTA
  hero_cta_download: string;
  // final CTA download button
  cta_download: string;

  // Online verification section
  online_verify_badge: string;
  online_verify_title: string;
  online_verify_desc: string;
  online_verify_upload_label: string;
  online_verify_upload_hint: string;
  online_verify_btn: string;
  online_verify_privacy_note: string;
  online_verify_size_limit: string;
  online_verify_result_valid_sealed: string;
  online_verify_result_valid_unsigned: string;
  online_verify_result_legacy: string;
  online_verify_result_invalid: string;
  online_verify_error_too_large: string;
  online_verify_error_not_zip: string;
  online_verify_error_generic: string;

  // Local vs Online section
  compare_badge: string;
  compare_title: string;
  compare_local_title: string;
  compare_local_items: string[];
  compare_online_title: string;
  compare_online_items: string[];
  compare_same_engine_note: string;
}
