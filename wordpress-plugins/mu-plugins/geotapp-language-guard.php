<?php
/**
 * Plugin Name: GeoTapp Language Guard
 * Description: Garantisce che ogni post abbia la lingua Polylang corretta, dedotta dalle categorie. Gira PRIMA del GTMSA per impedire che articoli senza lingua vengano scambiati per italiani.
 * Version: 1.1 (29/09/2026: rispetta il blocco lingua _gt_lang_lock)
 * Author: GeoTapp
 *
 * INSTALLAZIONE: copiare questo file in  wp-content/mu-plugins/geotapp-language-guard.php
 * I mu-plugin si attivano da soli, non serve attivarli dal pannello.
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Deduce la lingua di un post dalle lingue Polylang delle sue categorie.
 * Le categorie del blog sono separate per lingua; in Polylang ogni categoria
 * ha una sua lingua. Se tutte le categorie del post concordano su una lingua,
 * quella e' la lingua del post.
 *
 * @return string slug lingua ('it','fr','de',...) oppure '' se non determinabile.
 */
function geotapp_lg_detect_language($post_id) {
    if (!function_exists('pll_get_term_language')) {
        return '';
    }
    $cat_ids = wp_get_post_terms((int) $post_id, 'category', array('fields' => 'ids'));
    if (is_wp_error($cat_ids) || empty($cat_ids)) {
        return '';
    }
    $langs = array();
    foreach ($cat_ids as $cid) {
        $l = pll_get_term_language((int) $cid);
        if ($l) {
            $langs[$l] = true;
        }
    }
    // Lingua certa solo se TUTTE le categorie concordano su una sola lingua.
    return (count($langs) === 1) ? (string) array_key_first($langs) : '';
}

/**
 * Controller vero e proprio: assegna al post la lingua dedotta dalle categorie
 * se manca o se non coincide (es. doppio flag 'fr,it' o flag errato).
 * pll_set_post_language sostituisce i termini lingua, quindi ripulisce anche
 * eventuali doppie etichette.
 */
function geotapp_lg_enforce_language($post_id) {
    if (!function_exists('pll_set_post_language') || !function_exists('pll_get_post_language')) {
        return;
    }
    // Lingua bloccata (meta _gt_lang_lock, vedi gt-lang-lock-comment-notify.php):
    // vince sulle categorie. Serve per i post con categorie della lingua sbagliata,
    // che a ogni salvataggio venivano riportati alla lingua della categoria.
    $lock = (string) get_post_meta((int) $post_id, '_gt_lang_lock', true);
    if ($lock !== '') {
        if (pll_get_post_language((int) $post_id) !== $lock) {
            pll_set_post_language((int) $post_id, $lock);
        }
        return;
    }
    $detected = geotapp_lg_detect_language($post_id);
    if (!$detected) {
        // Categorie ambigue o assenti: non si indovina. Si registra e basta.
        error_log(sprintf('geotapp-language-guard: post %d lingua non determinabile dalle categorie, lasciato invariato', (int) $post_id));
        return;
    }
    $current = pll_get_post_language((int) $post_id);
    if ($current !== $detected) {
        pll_set_post_language((int) $post_id, $detected);
        error_log(sprintf('geotapp-language-guard: post %d lingua "%s" -> "%s"', (int) $post_id, $current ? $current : 'nessuna', $detected));
    }
}

/**
 * Si aggancia a transition_post_status a priorita' 5, cioe' PRIMA del GTMSA
 * (gtmsa_on_transition_post_status gira a priorita' 10). Cosi' quando il GTMSA
 * valuta il post, la lingua e' gia' corretta.
 */
add_action('transition_post_status', function ($new_status, $old_status, $post) {
    if (!($post instanceof WP_Post) || 'post' !== $post->post_type) {
        return;
    }
    if ('publish' !== $new_status) {
        return;
    }
    if (wp_is_post_revision($post->ID)) {
        return;
    }
    // Le traduzioni generate dal GTMSA hanno gia' la loro lingua: si saltano.
    if (get_post_meta($post->ID, '_gtmsa_generated_from', true)) {
        return;
    }
    geotapp_lg_enforce_language($post->ID);
}, 5, 3);
