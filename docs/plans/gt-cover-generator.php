<?php
if ( empty($_GET['secret']) || $_GET['secret'] !== 'gt2026cover' ) { die('Forbidden'); }
require_once __DIR__ . '/wp-load.php';

$cat_colors = array(
    'gps'               => array(59,  174, 224),
    'tracking'          => array(59,  174, 224),
    'geolocalizzazione' => array(59,  174, 224),
    'sicurezza'         => array(99,  102, 241),
    'security'          => array(99,  102, 241),
    'gestione'          => array(82,  192, 101),
    'operazioni'        => array(82,  192, 101),
    'business'          => array(82,  192, 101),
    'tecnologia'        => array(217, 119,   6),
    'app'               => array(217, 119,   6),
    'software'          => array(217, 119,   6),
);
$default_color = array(143, 196, 54);

function gt_get_color($post_id, $cat_colors, $default) {
    foreach (get_the_category($post_id) as $cat) {
        $slug = strtolower($cat->slug);
        $slug = preg_replace('/-[a-z]{2}$/', '', $slug);
        if (isset($cat_colors[$slug])) return $cat_colors[$slug];
    }
    return $default;
}

function gt_apply_overlay($src_path, $rgb, $alpha = 0.60) {
    if (!file_exists($src_path)) return false;
    $info = @getimagesize($src_path);
    if (!$info) return false;
    switch ($info['mime']) {
        case 'image/jpeg': $img = @imagecreatefromjpeg($src_path); break;
        case 'image/png':  $img = @imagecreatefrompng($src_path); break;
        case 'image/webp': $img = function_exists('imagecreatefromwebp') ? @imagecreatefromwebp($src_path) : false; break;
        default: return false;
    }
    if (!$img) return false;
    $w = imagesx($img); $h = imagesy($img);
    $gd_alpha = (int)round((1 - $alpha) * 127);
    $overlay = imagecreatetruecolor($w, $h);
    imagealphablending($overlay, false);
    imagesavealpha($overlay, true);
    $col = imagecolorallocatealpha($overlay, $rgb[0], $rgb[1], $rgb[2], $gd_alpha);
    imagefill($overlay, 0, 0, $col);
    imagealphablending($img, true);
    imagecopy($img, $overlay, 0, 0, 0, 0, $w, $h);
    imagedestroy($overlay);
    $out = preg_replace('/\.[a-zA-Z]+$/', '-branded.jpg', $src_path);
    $ok = imagejpeg($img, $out, 88);
    imagedestroy($img);
    return $ok ? $out : false;
}

$offset = isset($_GET['offset']) ? (int)$_GET['offset'] : 0;
$limit  = isset($_GET['limit'])  ? (int)$_GET['limit']  : 10;

$all_posts = get_posts(array('post_type'=>'post','post_status'=>'publish','posts_per_page'=>-1,'fields'=>'ids'));
$total = count($all_posts);
$posts = get_posts(array('post_type'=>'post','post_status'=>'publish','posts_per_page'=>$limit,'offset'=>$offset));
$results = array();

foreach ($posts as $post) {
    $thumb_id = get_post_thumbnail_id($post->ID);
    if (!$thumb_id) { $results[] = "[{$post->ID}] SKIP (no thumbnail)"; continue; }
    $path = get_attached_file($thumb_id);
    $rgb = gt_get_color($post->ID, $cat_colors, $default_color);
    $out = gt_apply_overlay($path, $rgb);
    if ($out) {
        $attach_id = wp_insert_attachment(array(
            'post_mime_type' => 'image/jpeg',
            'post_title'     => sanitize_file_name(basename($out)),
            'post_content'   => '',
            'post_status'    => 'inherit',
        ), $out, $post->ID);
        require_once ABSPATH . 'wp-admin/includes/image.php';
        $meta = wp_generate_attachment_metadata($attach_id, $out);
        wp_update_attachment_metadata($attach_id, $meta);
        set_post_thumbnail($post->ID, $attach_id);
        $results[] = "[{$post->ID}] OK: " . basename($out);
    } else {
        $results[] = "[{$post->ID}] FAIL: " . basename((string)$path);
    }
}

header('Content-Type: text/plain; charset=utf-8');
echo "TOTAL:{$total} OFFSET:{$offset} LIMIT:{$limit} BATCH:" . count($posts) . "\n";
echo implode("\n", $results) . "\n";
$next = $offset + $limit;
if ($next < $total) {
    echo "NEXT_OFFSET:{$next}\n";
} else {
    echo "DONE\n";
}
