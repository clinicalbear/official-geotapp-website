<?php
// tests/bootstrap.php

if (!defined('ABSPATH')) {
    define('ABSPATH', __DIR__ . '/');
}

// WordPress time constants
if (!defined('MINUTE_IN_SECONDS')) {
    define('MINUTE_IN_SECONDS', 60);
}
if (!defined('HOUR_IN_SECONDS')) {
    define('HOUR_IN_SECONDS', 3600);
}
if (!defined('DAY_IN_SECONDS')) {
    define('DAY_IN_SECONDS', 86400);
}

// --- WordPress function stubs ---

if (!function_exists('add_action')) {
    function add_action() {}
}
if (!function_exists('add_filter')) {
    function add_filter() {}
}
if (!function_exists('register_activation_hook')) {
    function register_activation_hook() {}
}
if (!function_exists('register_deactivation_hook')) {
    function register_deactivation_hook() {}
}
if (!function_exists('wp_json_encode')) {
    function wp_json_encode($data, $options = 0) {
        return json_encode($data, $options);
    }
}
if (!function_exists('get_option')) {
    function get_option($key, $default = false) { return $default; }
}
if (!function_exists('update_option')) {
    function update_option() { return true; }
}
if (!function_exists('add_option')) {
    function add_option() { return true; }
}
if (!function_exists('delete_option')) {
    function delete_option() { return true; }
}
if (!function_exists('sanitize_text_field')) {
    function sanitize_text_field($str) { return trim(strip_tags($str)); }
}
if (!function_exists('esc_url_raw')) {
    function esc_url_raw($url) { return filter_var(trim($url), FILTER_SANITIZE_URL) ?: ''; }
}
if (!function_exists('wp_parse_args')) {
    function wp_parse_args($args, $defaults = []) {
        return array_merge((array)$defaults, (array)$args);
    }
}
if (!function_exists('wp_next_scheduled')) {
    function wp_next_scheduled($hook) { return false; }
}
if (!function_exists('wp_schedule_event')) {
    function wp_schedule_event() { return true; }
}
if (!function_exists('wp_clear_scheduled_hook')) {
    function wp_clear_scheduled_hook() {}
}
if (!function_exists('wp_parse_url')) {
    function wp_parse_url($url, $component = -1) {
        return parse_url($url, $component);
    }
}
if (!function_exists('current_user_can')) {
    function current_user_can($cap) { return false; }
}
if (!function_exists('register_setting')) {
    function register_setting() {}
}
if (!function_exists('get_post_meta')) {
    function get_post_meta($post_id, $key = '', $single = false) {
        return $single ? '' : [];
    }
}
if (!function_exists('update_post_meta')) {
    function update_post_meta() { return true; }
}
if (!function_exists('get_post')) {
    function get_post($post_id = null, $output = OBJECT, $filter = 'raw') { return null; }
}
if (!function_exists('get_post_thumbnail_id')) {
    function get_post_thumbnail_id($post_id) { return 0; }
}
if (!function_exists('set_post_thumbnail')) {
    function set_post_thumbnail() { return true; }
}
if (!function_exists('get_object_taxonomies')) {
    function get_object_taxonomies($object, $output = 'names') { return []; }
}
if (!function_exists('get_post_type')) {
    function get_post_type($post = false) { return 'post'; }
}
if (!function_exists('wp_get_object_terms')) {
    function wp_get_object_terms() { return []; }
}
if (!function_exists('wp_set_object_terms')) {
    function wp_set_object_terms() { return []; }
}
if (!function_exists('wp_insert_post')) {
    function wp_insert_post($postarr, $wp_error = false) { return 0; }
}
if (!function_exists('wp_update_post')) {
    function wp_update_post($postarr, $wp_error = false) { return 0; }
}
if (!function_exists('wp_is_post_revision')) {
    function wp_is_post_revision($post) { return false; }
}
if (!function_exists('wp_strip_all_tags')) {
    function wp_strip_all_tags($text, $remove_breaks = false) { return strip_tags($text); }
}
if (!function_exists('wp_remote_post')) {
    function wp_remote_post($url, $args = []) { return []; }
}
if (!function_exists('wp_remote_retrieve_response_code')) {
    function wp_remote_retrieve_response_code($response) { return 200; }
}
if (!function_exists('wp_remote_retrieve_body')) {
    function wp_remote_retrieve_body($response) { return ''; }
}
if (!function_exists('is_wp_error')) {
    function is_wp_error($thing) { return false; }
}
if (!function_exists('sanitize_title')) {
    function sanitize_title($title, $fallback_title = '', $context = 'save') {
        return strtolower(preg_replace('/[^a-z0-9-]/i', '-', strip_tags($title)));
    }
}
if (!function_exists('is_singular')) {
    function is_singular($post_types = '') { return false; }
}
if (!function_exists('get_queried_object_id')) {
    function get_queried_object_id() { return 0; }
}
if (!function_exists('get_permalink')) {
    function get_permalink($post = 0, $leavename = false) { return ''; }
}
if (!function_exists('esc_attr')) {
    function esc_attr($text) { return htmlspecialchars($text, ENT_QUOTES, 'UTF-8'); }
}
if (!function_exists('esc_url')) {
    function esc_url($url, $protocols = null, $_context = 'display') { return htmlspecialchars($url, ENT_QUOTES, 'UTF-8'); }
}
if (!function_exists('esc_html')) {
    function esc_html($text) { return htmlspecialchars($text, ENT_QUOTES, 'UTF-8'); }
}
if (!function_exists('checked')) {
    function checked($checked, $current = true, $echo = true) {
        $result = $checked == $current ? ' checked="checked"' : '';
        if ($echo) { echo $result; }
        return $result;
    }
}
if (!function_exists('settings_fields')) {
    function settings_fields($option_group) {}
}
if (!function_exists('submit_button')) {
    function submit_button($text = null, $type = 'primary', $name = 'submit', $wrap = true, $other_attributes = null) {}
}
if (!function_exists('add_options_page')) {
    function add_options_page() {}
}
if (!function_exists('admin_url')) {
    function admin_url($path = '', $scheme = 'admin') { return 'http://example.com/wp-admin/' . $path; }
}
if (!function_exists('add_query_arg')) {
    function add_query_arg() {
        $args = func_get_args();
        if (is_array($args[0])) {
            $url = isset($args[1]) ? $args[1] : '';
            return $url . '?' . http_build_query($args[0]);
        }
        return '';
    }
}
if (!function_exists('wp_safe_redirect')) {
    function wp_safe_redirect($location, $status = 302, $x_redirect_by = 'WordPress') { return true; }
}
if (!function_exists('wp_die')) {
    function wp_die($message = '', $title = '', $args = []) { exit; }
}
if (!function_exists('wp_nonce_field')) {
    function wp_nonce_field($action = -1, $name = '_wpnonce', $referer = true, $echo = true) { return ''; }
}
if (!function_exists('check_admin_referer')) {
    function check_admin_referer($action = -1, $query_arg = '_wpnonce') { return 1; }
}
if (!function_exists('get_posts')) {
    function get_posts($args = null) { return []; }
}
if (!function_exists('__')) {
    function __($text, $domain = 'default') { return $text; }
}

// --- WP_Post class stub ---
if (!class_exists('WP_Post')) {
    class WP_Post {
        public $ID = 0;
        public $post_type = 'post';
        public $post_status = 'publish';
        public $post_title = '';
        public $post_content = '';
        public $post_excerpt = '';
        public $post_name = '';
        public $post_author = 0;
        public $comment_status = 'open';
        public $ping_status = 'open';
    }
}

// --- Polylang function stubs ---

if (!function_exists('pll_languages_list')) {
    function pll_languages_list($args = []) { return []; }
}
if (!function_exists('pll_get_post_language')) {
    function pll_get_post_language($id) { return false; }
}
if (!function_exists('pll_set_post_language')) {
    function pll_set_post_language($id, $lang) {}
}
if (!function_exists('pll_get_post_translations')) {
    function pll_get_post_translations($id) { return []; }
}
if (!function_exists('pll_save_post_translations')) {
    function pll_save_post_translations($arr) {}
}
if (!function_exists('pll_get_term')) {
    function pll_get_term($id, $lang) { return 0; }
}

require_once __DIR__ . '/../geotapp-multilingual-seo-automation.php';
