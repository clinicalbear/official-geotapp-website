<?php
/**
 * Plugin Name: GeoTapp lingua bloccata + avviso commenti
 * Description: (1) Blocca la lingua Polylang dei post impostata esplicitamente, cosi' un salvataggio non la riporta alla lingua delle categorie. (2) Avvisa via email dei commenti che arrivano dal sito headless (via REST WordPress non manda gli avvisi da solo).
 * Version: 1.0 (29/09/2026)
 * Author: GeoTapp
 */

if (!defined('ABSPATH')) {
    exit;
}

/* ---------- 1. Lingua bloccata ---------- */

// Post riportati alla lingua giusta il 29/09/2026: le loro categorie sono di un'altra lingua.
function gt_ll_seed_map() {
    return array(
        11710 => 'it', 7991 => 'it', 7852 => 'it', 7842 => 'it', 7832 => 'it', 7523 => 'it',
        7515 => 'it', 7674 => 'it', 7666 => 'it', 7662 => 'it', 7363 => 'it', 7359 => 'it',
        7355 => 'it', 8059 => 'it', 8096 => 'it', 9310 => 'nl', 5635 => 'nl', 5639 => 'fr',
        5652 => 'nl', 5649 => 'it', 5650 => 'en', 5651 => 'de',
    );
}

add_action('init', function () {
    if (get_option('gt_lang_lock_seed_v1')) {
        return;
    }
    foreach (gt_ll_seed_map() as $id => $lang) {
        update_post_meta($id, '_gt_lang_lock', $lang);
    }
    update_option('gt_lang_lock_seed_v1', gmdate('c'), false);
}, 20);

function gt_ll_apply_lock($post_id) {
    if (!function_exists('pll_get_post_language') || !function_exists('pll_set_post_language')) {
        return;
    }
    if (wp_is_post_revision($post_id) || get_post_type($post_id) !== 'post') {
        return;
    }
    $lock = (string) get_post_meta($post_id, '_gt_lang_lock', true);
    if ($lock !== '' && pll_get_post_language($post_id) !== $lock) {
        pll_set_post_language($post_id, $lock);
    }
}

// Chi imposta la lingua via REST (campo gtmsa_lang) la blocca.
add_action('rest_after_insert_post', function ($post, $request) {
    $lang = $request->get_param('gtmsa_lang');
    if (is_string($lang) && preg_match('/^[a-z]{2}$/', $lang)) {
        update_post_meta($post->ID, '_gt_lang_lock', $lang);
    }
    gt_ll_apply_lock($post->ID);
}, 50, 2);

// Rete di sicurezza per l'editor classico e per ogni altro salvataggio.
add_action('save_post_post', function ($post_id) {
    gt_ll_apply_lock($post_id);
}, 2000, 1);

/* ---------- 2. Avviso commenti ---------- */

add_filter('notify_moderator', '__return_true');
add_filter('notify_post_author', '__return_true');
add_filter('comment_moderation_recipients', function ($emails) {
    $emails[] = 'michele@geotapp.com';
    return array_values(array_unique($emails));
});
add_filter('comment_notification_recipients', function ($emails) {
    $emails[] = 'michele@geotapp.com';
    return array_values(array_unique($emails));
});

add_action('rest_after_insert_comment', function ($comment, $request, $creating) {
    if (!$creating) {
        return;
    }
    $c = get_comment($comment->comment_ID);
    if (!$c) {
        return;
    }
    $st = (string) $c->comment_approved;
    if ($st === '0') {
        $ok = wp_notify_moderator($c->comment_ID);
    } elseif ($st === '1') {
        $ok = wp_notify_postauthor($c->comment_ID);
    } else {
        return; // spam: nessun avviso
    }
    gt_cn_log('comment ' . $c->comment_ID . ' status ' . $st . ' notify ' . ($ok ? 'ok' : 'false'));
}, 20, 3);

// Registro minimo degli ultimi invii, per verificare che la posta parta davvero.
function gt_cn_log($line) {
    $log = get_option('gt_comment_notify_log', array());
    if (!is_array($log)) {
        $log = array();
    }
    array_unshift($log, gmdate('c') . ' ' . $line);
    update_option('gt_comment_notify_log', array_slice($log, 0, 30), false);
}
add_action('wp_mail_failed', function ($err) {
    gt_cn_log('wp_mail_failed ' . (is_wp_error($err) ? $err->get_error_message() : ''));
});
add_action('wp_mail_succeeded', function ($data) {
    $to = isset($data['to']) ? implode(',', (array) $data['to']) : '';
    gt_cn_log('wp_mail_succeeded to ' . $to);
});
add_action('rest_api_init', function () {
    register_rest_route('gt/v1', '/comment-notify-log', array(
        'methods' => 'GET',
        'callback' => function () {
            return get_option('gt_comment_notify_log', array());
        },
        'permission_callback' => function () {
            return current_user_can('manage_options');
        },
    ));
});
