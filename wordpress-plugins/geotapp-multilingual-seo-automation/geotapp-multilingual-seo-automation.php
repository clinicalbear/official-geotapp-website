<?php
/**
 * Plugin Name: GeoTapp Multilingual SEO Automation
 * Plugin URI: https://geotapp.com
 * Description: Auto-translates historical and new posts with Polylang + DeepL, links translations, and adds reverse-proxy-safe SEO signals.
 * Version: 1.1.0
 * Author: GeoTapp
 * License: GPL2
 */

if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('gtmsa_register_fatal_logger')) {
    function gtmsa_register_fatal_logger() {
        register_shutdown_function(function () {
            $error = error_get_last();
            if (!is_array($error)) {
                return;
            }

            $fatal_types = [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR, E_USER_ERROR, E_RECOVERABLE_ERROR];
            if (!in_array((int) ($error['type'] ?? 0), $fatal_types, true)) {
                return;
            }

            error_log('GTMSA_FATAL: ' . wp_json_encode($error));
        });
    }
    gtmsa_register_fatal_logger();
}

const GTMSA_OPTION_KEY = 'gtmsa_settings';
const GTMSA_QUEUE_OPTION_KEY = 'gtmsa_translation_queue';
const GTMSA_CRON_HOOK = 'gtmsa_process_translation_queue';
const GTMSA_BACKFILL_NONCE = 'gtmsa_backfill_nonce';
const GTMSA_LAST_ERROR_OPTION_KEY = 'gtmsa_last_error';

function gtmsa_default_settings() {
    return [
        'source_language' => 'it',
        'target_languages' => 'en,de,fr,es,pt,nl,sv,da,nb,ru',
        'deepl_api_key' => '',
        'deepl_api_url' => 'https://api.deepl.com/v2/translate',
        'auto_translate_on_publish' => 1,
        'sync_updates' => 0,
        'publish_translations' => 1,
        'translate_slug' => 1,
        'noindex_origin_host' => 1,
        'queue_batch_size' => 3,
    ];
}

function gtmsa_allowed_languages() {
    return ['it', 'en', 'de', 'fr', 'es', 'pt', 'nl', 'sv', 'da', 'nb', 'ru'];
}

function gtmsa_normalize_language($value, $fallback = 'it') {
    $value = strtolower(trim((string) $value));
    return in_array($value, gtmsa_allowed_languages(), true) ? $value : $fallback;
}

function gtmsa_normalize_language_list($value, $source_language) {
    $source = gtmsa_normalize_language($source_language, 'it');
    $parts = array_filter(array_map('trim', explode(',', strtolower((string) $value))));
    $normalized = [];

    foreach ($parts as $part) {
        $lang = gtmsa_normalize_language($part, '');
        if (!$lang || $lang === $source) {
            continue;
        }
        $normalized[$lang] = $lang;
    }

    if (!$normalized) {
        return gtmsa_default_settings()['target_languages'];
    }

    return implode(',', array_values($normalized));
}

function gtmsa_get_settings() {
    $raw = get_option(GTMSA_OPTION_KEY, []);
    if (!is_array($raw)) {
        $raw = [];
    }

    $settings = wp_parse_args($raw, gtmsa_default_settings());

    $settings['source_language'] = gtmsa_normalize_language($settings['source_language'], 'it');
    $settings['target_languages'] = gtmsa_normalize_language_list(
        $settings['target_languages'],
        $settings['source_language']
    );

    $settings['auto_translate_on_publish'] = empty($settings['auto_translate_on_publish']) ? 0 : 1;
    $settings['sync_updates'] = empty($settings['sync_updates']) ? 0 : 1;
    $settings['publish_translations'] = empty($settings['publish_translations']) ? 0 : 1;
    $settings['translate_slug'] = empty($settings['translate_slug']) ? 0 : 1;
    $settings['noindex_origin_host'] = empty($settings['noindex_origin_host']) ? 0 : 1;
    $settings['queue_batch_size'] = max(1, min(20, (int) $settings['queue_batch_size']));
    $settings['deepl_api_url'] = esc_url_raw(trim((string) $settings['deepl_api_url']));

    return $settings;
}

function gtmsa_get_target_languages($settings = null) {
    $settings = $settings ?: gtmsa_get_settings();
    $source = $settings['source_language'];
    $parts = array_filter(array_map('trim', explode(',', (string) $settings['target_languages'])));
    $langs = [];

    foreach ($parts as $part) {
        $lang = gtmsa_normalize_language($part, '');
        if (!$lang || $lang === $source) {
            continue;
        }
        $langs[$lang] = $lang;
    }

    return array_values($langs);
}

/**
 * Returns only those target languages that are registered in Polylang.
 * Pure function — accepts the lists rather than calling Polylang directly,
 * making it unit-testable.
 *
 * @param string[] $targets    Language slugs we want to translate to.
 * @param string[] $registered Language slugs registered in Polylang.
 * @return string[]
 */
function gtmsa_filter_target_languages(array $targets, array $registered): array {
    $filtered = [];
    foreach ($targets as $lang) {
        if (in_array($lang, $registered, true)) {
            $filtered[] = $lang;
        } else {
            error_log('GTMSA: skipping lang ' . $lang . ' — not registered in Polylang');
        }
    }
    return $filtered;
}

function gtmsa_is_polylang_ready() {
    return function_exists('pll_languages_list')
        && function_exists('pll_get_post_language')
        && function_exists('pll_set_post_language')
        && function_exists('pll_get_post_translations')
        && function_exists('pll_save_post_translations');
}

function gtmsa_admin_notice_polylang_missing() {
    if (!current_user_can('manage_options')) {
        return;
    }

    if (gtmsa_is_polylang_ready()) {
        return;
    }

    echo '<div class="notice notice-error"><p><strong>GeoTapp Multilingual SEO Automation:</strong> Polylang non è attivo. Attiva Polylang per abilitare la traduzione automatica.</p></div>';
}
add_action('admin_notices', 'gtmsa_admin_notice_polylang_missing');

function gtmsa_add_cron_schedules($schedules) {
    if (!isset($schedules['every_five_minutes'])) {
        $schedules['every_five_minutes'] = [
            'interval' => 5 * MINUTE_IN_SECONDS,
            'display' => __('Every Five Minutes', 'gtmsa'),
        ];
    }
    return $schedules;
}
add_filter('cron_schedules', 'gtmsa_add_cron_schedules');

function gtmsa_schedule_queue_runner($timestamp = null) {
    $timestamp = $timestamp ?: (time() + 60);
    if (!wp_next_scheduled(GTMSA_CRON_HOOK)) {
        wp_schedule_event($timestamp, 'every_five_minutes', GTMSA_CRON_HOOK);
    }
}

function gtmsa_activate() {
    if (!get_option(GTMSA_OPTION_KEY, null)) {
        add_option(GTMSA_OPTION_KEY, gtmsa_default_settings(), '', false);
    }
    if (!get_option(GTMSA_QUEUE_OPTION_KEY, null)) {
        add_option(GTMSA_QUEUE_OPTION_KEY, [], '', false);
    }

    gtmsa_schedule_queue_runner(time() + 60);
}
register_activation_hook(__FILE__, 'gtmsa_activate');

function gtmsa_deactivate() {
    wp_clear_scheduled_hook(GTMSA_CRON_HOOK);
}
register_deactivation_hook(__FILE__, 'gtmsa_deactivate');

function gtmsa_get_queue(): array {
    $raw = get_option(GTMSA_QUEUE_OPTION_KEY, []);
    if (!is_array($raw)) {
        return [];
    }
    $entries = [];
    $seen    = [];
    foreach ($raw as $item) {
        $entry = gtmsa_normalize_queue_entry($item);
        if ($entry['id'] <= 0 || isset($seen[$entry['id']])) {
            continue;
        }
        $seen[$entry['id']] = true;
        $entries[]          = $entry;
    }
    return $entries;
}

function gtmsa_save_queue(array $queue): void {
    $normalized = [];
    $seen       = [];
    foreach ($queue as $entry) {
        $e = gtmsa_normalize_queue_entry($entry);
        if ($e['id'] <= 0 || isset($seen[$e['id']])) {
            continue;
        }
        $seen[$e['id']] = true;
        $normalized[]   = $e;
    }
    update_option(GTMSA_QUEUE_OPTION_KEY, $normalized, false);
}

const GTMSA_MAX_RETRIES = 5;

/**
 * Normalise a raw queue entry to ['id' => int, 'retries' => int].
 * Handles legacy format (plain int) for backwards compatibility.
 */
function gtmsa_normalize_queue_entry($entry): array {
    if (is_int($entry) || (is_string($entry) && ctype_digit($entry))) {
        return ['id' => (int) $entry, 'retries' => 0];
    }
    if (is_array($entry)) {
        return [
            'id'      => (int) ($entry['id'] ?? 0),
            'retries' => (int) ($entry['retries'] ?? 0),
        ];
    }
    return ['id' => 0, 'retries' => 0];
}

/** Returns true when the entry has exhausted all retry attempts. */
function gtmsa_should_drop_entry(array $entry): bool {
    return (int) ($entry['retries'] ?? 0) >= GTMSA_MAX_RETRIES;
}

/** Returns a new entry with retries incremented by one. */
function gtmsa_increment_retries(array $entry): array {
    return ['id' => $entry['id'], 'retries' => (int) ($entry['retries'] ?? 0) + 1];
}

function gtmsa_set_last_error($message) {
    update_option(
        GTMSA_LAST_ERROR_OPTION_KEY,
        [
            'message' => sanitize_text_field((string) $message),
            'at' => gmdate('c'),
        ],
        false
    );
}

function gtmsa_get_last_error() {
    $raw = get_option(GTMSA_LAST_ERROR_OPTION_KEY, null);
    return is_array($raw) ? $raw : null;
}

function gtmsa_clear_last_error() {
    delete_option(GTMSA_LAST_ERROR_OPTION_KEY);
}

function gtmsa_enqueue_post_id(int $post_id): void {
    if ($post_id <= 0) {
        return;
    }
    $queue = gtmsa_get_queue();
    foreach ($queue as $entry) {
        if ((int) $entry['id'] === $post_id) {
            return; // already queued
        }
    }
    $queue[] = ['id' => $post_id, 'retries' => 0];
    gtmsa_save_queue($queue);
}

function gtmsa_get_post_language_safe($post_id, $settings = null) {
    if (!gtmsa_is_polylang_ready()) {
        $settings = $settings ?: gtmsa_get_settings();
        return $settings['source_language'];
    }

    $lang = pll_get_post_language((int) $post_id);
    if (!$lang) {
        $settings = $settings ?: gtmsa_get_settings();
        return $settings['source_language'];
    }

    return gtmsa_normalize_language($lang, ($settings ?: gtmsa_get_settings())['source_language']);
}

function gtmsa_is_generated_translation($post_id) {
    return (bool) get_post_meta((int) $post_id, '_gtmsa_generated_from', true);
}

function gtmsa_on_transition_post_status($new_status = '', $old_status = '', $post = null) {
    if (!($post instanceof WP_Post)) {
        return;
    }

    if ('post' !== $post->post_type || 'publish' !== $new_status || wp_is_post_revision($post->ID)) {
        return;
    }

    $settings = gtmsa_get_settings();
    if (empty($settings['auto_translate_on_publish']) || !gtmsa_is_polylang_ready()) {
        return;
    }

    if (gtmsa_is_generated_translation($post->ID)) {
        return;
    }

    $source_language = $settings['source_language'];
    $post_language = gtmsa_get_post_language_safe($post->ID, $settings);

    if ($post_language !== $source_language) {
        return;
    }

    $is_update = ('publish' === $old_status);
    if ($is_update && empty($settings['sync_updates'])) {
        return;
    }

    gtmsa_enqueue_post_id($post->ID);
    gtmsa_schedule_queue_runner(time() + 20);
}
add_action('transition_post_status', 'gtmsa_on_transition_post_status', 10, 3);

function gtmsa_map_deepl_source($lang) {
    $lang = gtmsa_normalize_language($lang, '');
    $map = [
        'it' => 'IT',
        'en' => 'EN',
        'de' => 'DE',
        'fr' => 'FR',
        'es' => 'ES',
        'pt' => 'PT',
        'nl' => 'NL',
        'sv' => 'SV',
        'da' => 'DA',
        'nb' => 'NB',
        'ru' => 'RU',
    ];
    return $map[$lang] ?? null;
}

function gtmsa_map_deepl_target($lang) {
    $lang = gtmsa_normalize_language($lang, '');
    $map = [
        'it' => 'IT',
        'en' => 'EN-GB',
        'de' => 'DE',
        'fr' => 'FR',
        'es' => 'ES',
        'pt' => 'PT-PT',
        'nl' => 'NL',
        'sv' => 'SV',
        'da' => 'DA',
        'nb' => 'NB',
        'ru' => 'RU',
    ];
    return $map[$lang] ?? null;
}

function gtmsa_translate_text_batch($texts, $source_language, $target_language, $settings) {
    $api_key = trim((string) $settings['deepl_api_key']);
    if ($api_key === '') {
        return null;
    }

    $source = gtmsa_map_deepl_source($source_language);
    $target = gtmsa_map_deepl_target($target_language);

    if (!$source || !$target) {
        return null;
    }

    $api_url = esc_url_raw($settings['deepl_api_url']);
    if (!$api_url) {
        return null;
    }

    $payload = 'source_lang=' . rawurlencode($source)
        . '&target_lang=' . rawurlencode($target)
        . '&tag_handling=html';

    foreach ($texts as $text) {
        $payload .= '&text=' . rawurlencode((string) $text);
    }

    $response = wp_remote_post($api_url, [
        'timeout' => 60,
        'headers' => [
            'Authorization' => 'DeepL-Auth-Key ' . $api_key,
            'Content-Type' => 'application/x-www-form-urlencoded',
        ],
        'body' => $payload,
    ]);

    if (is_wp_error($response)) {
        error_log('GTMSA DeepL error: ' . $response->get_error_message());
        return null;
    }

    $status = wp_remote_retrieve_response_code($response);
    if ($status < 200 || $status >= 300) {
        error_log('GTMSA DeepL HTTP error: ' . $status);
        return null;
    }

    $body = wp_remote_retrieve_body($response);
    $decoded = json_decode($body, true);

    if (!is_array($decoded) || empty($decoded['translations']) || !is_array($decoded['translations'])) {
        error_log('GTMSA DeepL payload invalid.');
        return null;
    }

    $translated = [];
    foreach ($decoded['translations'] as $item) {
        $translated[] = isset($item['text']) ? (string) $item['text'] : '';
    }

    if (count($translated) !== count($texts)) {
        error_log('GTMSA DeepL count mismatch.');
        return null;
    }

    return $translated;
}

function gtmsa_copy_taxonomies($source_post_id, $target_post_id, $target_language) {
    $taxonomies = get_object_taxonomies(get_post_type($source_post_id), 'names');

    foreach ($taxonomies as $taxonomy) {
        $term_ids = wp_get_object_terms($source_post_id, $taxonomy, ['fields' => 'ids']);
        if (is_wp_error($term_ids) || empty($term_ids)) {
            continue;
        }

        $translated_term_ids = [];
        foreach ($term_ids as $term_id) {
            $translated = (function_exists('pll_get_term'))
                ? pll_get_term((int) $term_id, $target_language)
                : 0;
            $translated_term_ids[] = $translated ? (int) $translated : (int) $term_id;
        }

        wp_set_object_terms($target_post_id, array_values(array_unique($translated_term_ids)), $taxonomy, false);
    }
}

function gtmsa_sync_featured_image($source_post_id, $target_post_id) {
    $thumbnail_id = get_post_thumbnail_id($source_post_id);
    if ($thumbnail_id) {
        set_post_thumbnail($target_post_id, $thumbnail_id);
    }
}

function gtmsa_translate_one_post($source_post_id, $settings) {
    if (!gtmsa_is_polylang_ready()) {
        return false;
    }

    $source_post = get_post((int) $source_post_id);
    if (!$source_post || 'post' !== $source_post->post_type || 'publish' !== $source_post->post_status) {
        return true;
    }

    $source_language = $settings['source_language'];
    $post_language = gtmsa_get_post_language_safe($source_post->ID, $settings);

    if (!$post_language) {
        pll_set_post_language($source_post->ID, $source_language);
        $post_language = $source_language;
    }

    if ($post_language !== $source_language) {
        return true;
    }

    $target_languages = gtmsa_get_target_languages($settings);
    if (!$target_languages) {
        return true;
    }

    // Filter to only languages registered in Polylang
    $registered_langs = pll_languages_list(['fields' => 'slug']);
    if (is_array($registered_langs)) {
        $target_languages = gtmsa_filter_target_languages($target_languages, $registered_langs);
    }
    if (!$target_languages) {
        return true;
    }

    $all_ok = true;

    $translations_map = pll_get_post_translations($source_post->ID);
    if (!is_array($translations_map)) {
        $translations_map = [];
    }
    $translations_map[$source_language] = (int) $source_post->ID;

    foreach ($target_languages as $target_language) {
        $existing_translation_id = isset($translations_map[$target_language])
            ? (int) $translations_map[$target_language]
            : 0;

        $should_update_existing = $existing_translation_id > 0 && !empty($settings['sync_updates']);
        if ($existing_translation_id > 0 && !$should_update_existing) {
            continue;
        }

        $translated = gtmsa_translate_text_batch(
            [$source_post->post_title, $source_post->post_excerpt, $source_post->post_content],
            $source_language,
            $target_language,
            $settings
        );

        if (!$translated) {
            $all_ok = false;
            continue;
        }

        $translated_title = wp_strip_all_tags((string) $translated[0]);
        $translated_excerpt = wp_strip_all_tags((string) $translated[1]);
        $translated_content = (string) $translated[2];

        $translated_slug = !empty($settings['translate_slug'])
            ? sanitize_title($translated_title)
            : sanitize_title($source_post->post_name . '-' . $target_language);

        $translated_status = !empty($settings['publish_translations']) ? 'publish' : 'draft';

        $payload = [
            'post_title' => $translated_title,
            'post_excerpt' => $translated_excerpt,
            'post_content' => $translated_content,
            'post_name' => $translated_slug,
            'post_type' => 'post',
            'post_author' => (int) $source_post->post_author,
            'post_status' => $translated_status,
            'comment_status' => $source_post->comment_status,
            'ping_status' => $source_post->ping_status,
        ];

        if ($should_update_existing) {
            $payload['ID'] = $existing_translation_id;
            $target_post_id = wp_update_post($payload, true);
        } else {
            $target_post_id = wp_insert_post($payload, true);
        }

        if (is_wp_error($target_post_id)) {
            error_log('GTMSA post insert/update error: ' . $target_post_id->get_error_message());
            $all_ok = false;
            continue;
        }

        $target_post_id = (int) $target_post_id;
        pll_set_post_language($target_post_id, $target_language);
        gtmsa_copy_taxonomies($source_post->ID, $target_post_id, $target_language);
        gtmsa_sync_featured_image($source_post->ID, $target_post_id);

        update_post_meta($target_post_id, '_gtmsa_generated_from', (int) $source_post->ID);
        update_post_meta($target_post_id, '_gtmsa_generated_lang', $target_language);

        $translations_map[$target_language] = $target_post_id;
    }

    pll_save_post_translations($translations_map);

    return $all_ok;
}

function gtmsa_process_translation_queue() {
    if (!gtmsa_is_polylang_ready()) {
        return;
    }

    $settings = gtmsa_get_settings();
    if (trim((string) $settings['deepl_api_key']) === '') {
        return;
    }

    $queue = gtmsa_get_queue();
    if (!$queue) {
        return;
    }

    $batch_size = $settings['queue_batch_size'];
    $current_batch = array_slice($queue, 0, $batch_size);
    $remaining = array_slice($queue, $batch_size);

    foreach ($current_batch as $entry) {
        $post_id = (int) $entry['id'];
        $ok      = gtmsa_translate_one_post($post_id, $settings);
        if (!$ok) {
            if (gtmsa_should_drop_entry($entry)) {
                error_log('GTMSA: post ' . $post_id . ' dropped from queue after ' . GTMSA_MAX_RETRIES . ' retries');
            } else {
                $remaining[] = gtmsa_increment_retries($entry);
            }
        }
    }

    gtmsa_save_queue($remaining);

    if (!empty($remaining)) {
        gtmsa_schedule_queue_runner(time() + 60);
    }
}
add_action(GTMSA_CRON_HOOK, 'gtmsa_process_translation_queue');

function gtmsa_get_public_blog_url($url) {
    $url = (string) $url;
    if ($url === '') {
        return $url;
    }

    $parsed = wp_parse_url($url);
    if (!$parsed || empty($parsed['host'])) {
        return $url;
    }

    $host = strtolower((string) $parsed['host']);
    $scheme = !empty($parsed['scheme']) ? $parsed['scheme'] : 'https';
    $path = !empty($parsed['path']) ? $parsed['path'] : '/';
    $query = isset($parsed['query']) ? ('?' . $parsed['query']) : '';
    $fragment = isset($parsed['fragment']) ? ('#' . $parsed['fragment']) : '';

    if ('blog.geotapp.com' === $host) {
        if (strpos($path, '/blog/') !== 0 && '/blog' !== $path) {
            $path = '/blog' . (strpos($path, '/') === 0 ? $path : '/' . $path);
        }
        return $scheme . '://geotapp.com' . $path . $query . $fragment;
    }

    return $url;
}

function gtmsa_filter_canonical_url($canonical_url = '', $post = null) {
    if (!($post instanceof WP_Post) || 'post' !== $post->post_type) {
        return $canonical_url;
    }

    return gtmsa_get_public_blog_url($canonical_url);
}
add_filter('get_canonical_url', 'gtmsa_filter_canonical_url', 10, 2);

function gtmsa_to_hreflang($lang) {
    $map = [
        'it' => 'it-IT',
        'en' => 'en',
        'de' => 'de',
        'fr' => 'fr',
        'es' => 'es',
        'pt' => 'pt-PT',
        'nl' => 'nl',
        'sv' => 'sv',
        'da' => 'da',
        'nb' => 'nb-NO',
        'ru' => 'ru',
    ];

    return $map[$lang] ?? $lang;
}

function gtmsa_print_hreflang_links() {
    if (!is_singular('post') || !gtmsa_is_polylang_ready()) {
        return;
    }

    $post_id = get_queried_object_id();
    if (!$post_id) {
        return;
    }

    $translations = pll_get_post_translations((int) $post_id);
    if (!is_array($translations) || empty($translations)) {
        return;
    }

    $settings = gtmsa_get_settings();
    $source_language = $settings['source_language'];

    foreach ($translations as $lang => $translated_post_id) {
        $url = gtmsa_get_public_blog_url(get_permalink((int) $translated_post_id));
        if (!$url) {
            continue;
        }

        echo '<link rel="alternate" hreflang="' . esc_attr(gtmsa_to_hreflang($lang))
            . '" href="' . esc_url($url) . '" />' . "\n";
    }

    if (!empty($translations[$source_language])) {
        $xdefault = gtmsa_get_public_blog_url(get_permalink((int) $translations[$source_language]));
        if ($xdefault) {
            echo '<link rel="alternate" hreflang="x-default" href="' . esc_url($xdefault) . '" />' . "\n";
        }
    }
}
add_action('wp_head', 'gtmsa_print_hreflang_links', 5);

function gtmsa_get_effective_request_host() {
    $forwarded_host = isset($_SERVER['HTTP_X_FORWARDED_HOST'])
        ? strtolower((string) $_SERVER['HTTP_X_FORWARDED_HOST'])
        : '';

    if ($forwarded_host !== '') {
        $parts = array_map('trim', explode(',', $forwarded_host));
        if (!empty($parts[0])) {
            return $parts[0];
        }
    }

    return isset($_SERVER['HTTP_HOST']) ? strtolower((string) $_SERVER['HTTP_HOST']) : '';
}

function gtmsa_set_origin_noindex_header() {
    $settings = gtmsa_get_settings();
    if (empty($settings['noindex_origin_host'])) {
        return;
    }

    $effective_host = gtmsa_get_effective_request_host();
    if (in_array($effective_host, ['geotapp.com', 'www.geotapp.com'], true)) {
        return;
    }

    $origin_host = isset($_SERVER['HTTP_HOST']) ? strtolower((string) $_SERVER['HTTP_HOST']) : '';
    if ('blog.geotapp.com' === $origin_host) {
        header('X-Robots-Tag: noindex, nofollow, noarchive', true);
    }
}
add_action('send_headers', 'gtmsa_set_origin_noindex_header');

function gtmsa_filter_robots_txt($output = '', $public = true) {
    $settings = gtmsa_get_settings();
    if (empty($settings['noindex_origin_host'])) {
        return $output;
    }

    $effective_host = gtmsa_get_effective_request_host();
    if (in_array($effective_host, ['geotapp.com', 'www.geotapp.com'], true)) {
        return $output;
    }

    $origin_host = isset($_SERVER['HTTP_HOST']) ? strtolower((string) $_SERVER['HTTP_HOST']) : '';
    if ('blog.geotapp.com' !== $origin_host) {
        return $output;
    }

    return "User-agent: *\nDisallow: /\n";
}
add_filter('robots_txt', 'gtmsa_filter_robots_txt', 10, 2);

function gtmsa_register_settings() {
    register_setting(GTMSA_OPTION_KEY, GTMSA_OPTION_KEY, 'gtmsa_sanitize_settings');
}
add_action('admin_init', 'gtmsa_register_settings');

function gtmsa_sanitize_settings($input) {
    $defaults = gtmsa_default_settings();
    $input = is_array($input) ? $input : [];

    $output = [];
    $output['source_language'] = gtmsa_normalize_language($input['source_language'] ?? $defaults['source_language']);
    $output['target_languages'] = gtmsa_normalize_language_list(
        $input['target_languages'] ?? $defaults['target_languages'],
        $output['source_language']
    );
    $output['deepl_api_key'] = sanitize_text_field($input['deepl_api_key'] ?? '');
    $output['deepl_api_url'] = esc_url_raw($input['deepl_api_url'] ?? $defaults['deepl_api_url']);

    $bool_keys = ['auto_translate_on_publish', 'sync_updates', 'publish_translations', 'translate_slug', 'noindex_origin_host'];
    foreach ($bool_keys as $key) {
        $output[$key] = empty($input[$key]) ? 0 : 1;
    }

    $output['queue_batch_size'] = max(1, min(20, (int) ($input['queue_batch_size'] ?? $defaults['queue_batch_size'])));

    return $output;
}

function gtmsa_add_admin_menu() {
    add_options_page(
        'GeoTapp Blog Multilingual SEO',
        'GeoTapp Blog i18n',
        'manage_options',
        'gtmsa-settings',
        'gtmsa_render_settings_page'
    );
}
add_action('admin_menu', 'gtmsa_add_admin_menu');

function gtmsa_render_checkbox($name, $value) {
    echo '<label><input type="checkbox" name="' . esc_attr(GTMSA_OPTION_KEY) . '[' . esc_attr($name) . ']" value="1" ' . checked(1, (int) $value, false) . ' /> Abilitato</label>';
}

function gtmsa_render_settings_page() {
    if (!current_user_can('manage_options')) {
        return;
    }

    try {
        $settings = gtmsa_get_settings();
        $queue_count = count(gtmsa_get_queue());
        $backfill_done = isset($_GET['gtmsa_backfill_queued']) ? (int) $_GET['gtmsa_backfill_queued'] : null;
        $has_error = isset($_GET['gtmsa_error']) && (int) $_GET['gtmsa_error'] === 1;
        $last_error = gtmsa_get_last_error();

        ?>
        <div class="wrap">
          <h1>GeoTapp Blog Multilingual SEO</h1>
          <p>Automazione traduzioni articoli (passati e futuri) con Polylang + DeepL e protezioni SEO per reverse proxy <code>geotapp.com/blog</code>.</p>

          <?php if ($backfill_done !== null): ?>
            <div class="notice notice-success"><p>Backfill in coda: <?php echo esc_html((string) $backfill_done); ?> articoli.</p></div>
          <?php endif; ?>

          <?php if ($has_error && is_array($last_error)): ?>
            <div class="notice notice-error"><p>
              GTMSA errore: <?php echo esc_html((string) ($last_error['message'] ?? 'Errore sconosciuto')); ?>
              <?php if (!empty($last_error['at'])): ?>
                (<?php echo esc_html((string) $last_error['at']); ?>)
              <?php endif; ?>
            </p></div>
          <?php endif; ?>

          <div class="notice notice-info"><p>Post in coda traduzione: <strong><?php echo esc_html((string) $queue_count); ?></strong></p></div>

          <form method="post" action="options.php">
            <?php settings_fields(GTMSA_OPTION_KEY); ?>
            <table class="form-table" role="presentation">
          <tr>
            <th scope="row"><label for="gtmsa_source_language">Lingua sorgente</label></th>
            <td><input id="gtmsa_source_language" name="<?php echo esc_attr(GTMSA_OPTION_KEY); ?>[source_language]" type="text" value="<?php echo esc_attr($settings['source_language']); ?>" class="regular-text" /></td>
          </tr>
          <tr>
            <th scope="row"><label for="gtmsa_target_languages">Lingue target (CSV)</label></th>
            <td><input id="gtmsa_target_languages" name="<?php echo esc_attr(GTMSA_OPTION_KEY); ?>[target_languages]" type="text" value="<?php echo esc_attr($settings['target_languages']); ?>" class="regular-text" />
              <p class="description">Supportate: it,en,de,fr,es,pt,nl,sv,da,nb,ru</p>
            </td>
          </tr>
          <tr>
            <th scope="row"><label for="gtmsa_deepl_api_key">DeepL API Key</label></th>
            <td><input id="gtmsa_deepl_api_key" name="<?php echo esc_attr(GTMSA_OPTION_KEY); ?>[deepl_api_key]" type="password" value="<?php echo esc_attr($settings['deepl_api_key']); ?>" class="regular-text" autocomplete="new-password" /></td>
          </tr>
          <tr>
            <th scope="row"><label for="gtmsa_deepl_api_url">DeepL API URL</label></th>
            <td><input id="gtmsa_deepl_api_url" name="<?php echo esc_attr(GTMSA_OPTION_KEY); ?>[deepl_api_url]" type="url" value="<?php echo esc_attr($settings['deepl_api_url']); ?>" class="regular-text" /></td>
          </tr>
          <tr>
            <th scope="row">Auto traduzione nuovi articoli</th>
            <td><?php gtmsa_render_checkbox('auto_translate_on_publish', $settings['auto_translate_on_publish']); ?></td>
          </tr>
          <tr>
            <th scope="row">Sincronizza aggiornamenti articolo sorgente</th>
            <td><?php gtmsa_render_checkbox('sync_updates', $settings['sync_updates']); ?></td>
          </tr>
          <tr>
            <th scope="row">Pubblica automaticamente traduzioni</th>
            <td><?php gtmsa_render_checkbox('publish_translations', $settings['publish_translations']); ?></td>
          </tr>
          <tr>
            <th scope="row">Traduci slug</th>
            <td><?php gtmsa_render_checkbox('translate_slug', $settings['translate_slug']); ?></td>
          </tr>
          <tr>
            <th scope="row">Noindex su origin <code>blog.geotapp.com</code></th>
            <td><?php gtmsa_render_checkbox('noindex_origin_host', $settings['noindex_origin_host']); ?></td>
          </tr>
          <tr>
            <th scope="row"><label for="gtmsa_queue_batch_size">Batch queue (per ciclo cron)</label></th>
            <td><input id="gtmsa_queue_batch_size" name="<?php echo esc_attr(GTMSA_OPTION_KEY); ?>[queue_batch_size]" type="number" min="1" max="20" value="<?php echo esc_attr((string) $settings['queue_batch_size']); ?>" class="small-text" /></td>
          </tr>
            </table>

            <?php submit_button('Salva configurazione'); ?>
          </form>

          <hr />
          <h2>Backfill articoli passati</h2>
          <p>Inserisce in coda tutti i post pubblicati nella lingua sorgente e crea le traduzioni mancanti.</p>
          <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
            <input type="hidden" name="action" value="gtmsa_backfill" />
            <?php wp_nonce_field(GTMSA_BACKFILL_NONCE, '_gtmsa_nonce'); ?>
            <?php submit_button('Avvia backfill completo', 'secondary'); ?>
          </form>

          <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" style="margin-top:10px;">
            <input type="hidden" name="action" value="gtmsa_run_queue_now" />
            <?php wp_nonce_field('gtmsa_run_queue_now', '_gtmsa_run_nonce'); ?>
            <?php submit_button('Esegui queue adesso', 'secondary'); ?>
          </form>
        </div>
        <?php
    } catch (Throwable $e) {
        error_log('GTMSA_RENDER_ERROR: ' . $e->getMessage());
        echo '<div class="notice notice-error"><p>GTMSA errore rendering pagina impostazioni. Controlla debug.log (prefisso GTMSA_).</p></div>';
    }
}

function gtmsa_queue_source_posts_for_backfill() {
    $settings = gtmsa_get_settings();
    $source_language = $settings['source_language'];
    $queued = 0;
    $paged = 1;
    $per_page = 200;
    $has_more = true;

    while ($has_more) {
        $args = [
            'post_type' => 'post',
            'post_status' => 'publish',
            'fields' => 'ids',
            'posts_per_page' => $per_page,
            'paged' => $paged,
            'orderby' => 'ID',
            'order' => 'ASC',
            'no_found_rows' => true,
            'suppress_filters' => false,
        ];

        if (gtmsa_is_polylang_ready()) {
            $args['lang'] = $source_language;
        }

        $ids = get_posts($args);
        if (!$ids) {
            break;
        }

        foreach ((array) $ids as $post_id) {
            gtmsa_enqueue_post_id((int) $post_id);
            $queued++;
        }

        $has_more = count($ids) === $per_page;
        $paged++;
    }

    gtmsa_schedule_queue_runner(time() + 15);

    return $queued;
}

function gtmsa_handle_backfill() {
    if (!current_user_can('manage_options')) {
        wp_die('Unauthorized');
    }

    try {
        check_admin_referer(GTMSA_BACKFILL_NONCE, '_gtmsa_nonce');
        gtmsa_clear_last_error();
        $queued = gtmsa_queue_source_posts_for_backfill();

        $redirect_url = add_query_arg(
            ['page' => 'gtmsa-settings', 'gtmsa_backfill_queued' => $queued],
            admin_url('options-general.php')
        );
    } catch (Throwable $e) {
        gtmsa_set_last_error($e->getMessage());
        error_log('GTMSA_BACKFILL_ERROR: ' . $e->getMessage());
        $redirect_url = add_query_arg(
            ['page' => 'gtmsa-settings', 'gtmsa_error' => 1],
            admin_url('options-general.php')
        );
    }

    wp_safe_redirect($redirect_url);
    exit;
}
add_action('admin_post_gtmsa_backfill', 'gtmsa_handle_backfill');

function gtmsa_handle_run_queue_now() {
    if (!current_user_can('manage_options')) {
        wp_die('Unauthorized');
    }

    try {
        check_admin_referer('gtmsa_run_queue_now', '_gtmsa_run_nonce');
        gtmsa_clear_last_error();
        gtmsa_process_translation_queue();
        $redirect_url = add_query_arg(['page' => 'gtmsa-settings'], admin_url('options-general.php'));
    } catch (Throwable $e) {
        gtmsa_set_last_error($e->getMessage());
        error_log('GTMSA_QUEUE_NOW_ERROR: ' . $e->getMessage());
        $redirect_url = add_query_arg(
            ['page' => 'gtmsa-settings', 'gtmsa_error' => 1],
            admin_url('options-general.php')
        );
    }

    wp_safe_redirect($redirect_url);
    exit;
}
add_action('admin_post_gtmsa_run_queue_now', 'gtmsa_handle_run_queue_now');

if (defined('WP_CLI') && WP_CLI && class_exists('WP_CLI')) {
    class GTMSA_CLI_Command {
        /**
         * Backfill all source posts into translation queue.
         *
         * ## EXAMPLES
         *
         *     wp gtmsa backfill
         */
        public function backfill($args, $assoc_args) {
            $queued = gtmsa_queue_source_posts_for_backfill();
            WP_CLI::success('Queued posts: ' . $queued);
        }

        /**
         * Run one queue processing cycle immediately.
         *
         * ## EXAMPLES
         *
         *     wp gtmsa run
         */
        public function run($args, $assoc_args) {
            gtmsa_process_translation_queue();
            $remaining = count(gtmsa_get_queue());
            WP_CLI::success('Queue processed. Remaining: ' . $remaining);
        }
    }

    WP_CLI::add_command('gtmsa', 'GTMSA_CLI_Command');
}
