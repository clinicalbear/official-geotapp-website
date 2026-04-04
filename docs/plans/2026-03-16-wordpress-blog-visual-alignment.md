# WordPress Blog Visual Alignment — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Allineare visivamente il blog WordPress (`geotapp.com/blog`) al sito ufficiale Next.js (`geotapp.com`) — stessi font, colori, spaziature, footer, glow effects, animazioni, senza sidebar negli articoli.

**Architecture:** Patch chirurgica su 4 file del tema `official-v2`. Nessun nuovo tema, nessun child theme. Upload diretto via SFTP dopo ogni modifica. Ogni task è indipendente.

**Tech Stack:** WordPress PHP, Tailwind CSS (CDN inline config), GSAP + ScrollTrigger, SFTP per deploy.

**SFTP:** `sftp -P 22 su325938@access-5018990701.webspace-host.com` — path base `/blog/wp-content/themes/official-v2/`

---

## Task 1: Fix `style.css` — font, colori, spaziatura, copertura wp-block-*

**Files:**
- Modify: `/blog/wp-content/themes/official-v2/style.css` (download → edit → upload)

**Step 1: Download il file attuale**

```bash
sftp -P 22 su325938@access-5018990701.webspace-host.com <<'EOF'
get /blog/wp-content/themes/official-v2/style.css /tmp/wp-style.css
EOF
```

**Step 2: Sostituisci l'intero contenuto con il seguente**

Scrivi `/tmp/wp-style.css` con questo contenuto:

```css
/*
Theme Name: Official V2
Theme URI: https://geotapp.com
Author: GeoTapp Team
Author URI: https://geotapp.com
Description: A custom theme designed to perfectly match the Next.js official site (V2).
Version: 1.2
License: Proprietary
*/

/* 1. Typography Imports */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

/* 2. Basic Reset & Variables */
:root {
    --color-primary: #0F172A;       /* Slate 900 */
    --color-secondary: #475569;     /* Slate 600 */
    --color-accent: #8FC436;        /* GeoTapp brand green */
    --color-text: #374151;          /* Gray 700 */
    --color-muted: #94a3b8;         /* Slate 400 */
    --color-bg: #FFFFFF;
    --color-surface: #f8fafc;       /* Slate 50 */
    --color-border: #e2e8f0;        /* Slate 200 */
    --font-body: 'Inter', sans-serif;
    --font-heading: 'Poppins', sans-serif;
}

body {
    margin: 0;
    padding: 0;
    background-color: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
}

/* 3. Article Container */
article.prose {
    max-width: 760px;
    margin: 0 auto;
    font-size: 1.125rem;
    line-height: 1.75;
    font-family: var(--font-body);
}

/* 4. Headings */
.prose h1,
.prose h2,
.prose h3,
.prose h4 {
    font-family: var(--font-heading);
    color: var(--color-primary);
    font-weight: 700;
    margin-top: 2.5em;
    margin-bottom: 0.8em;
    line-height: 1.3;
}

.prose h1 { font-size: 2.5rem; }

.prose h2 {
    font-size: 2rem;
    /* No border-bottom — allineato al sito ufficiale */
}

.prose h3 {
    font-size: 1.5rem;
    margin-top: 2em;
}

.prose h4 {
    font-size: 1.125rem;
    margin-top: 1.5em;
}

/* 5. Content Elements */
.prose p {
    margin-bottom: 1.5em;
    color: var(--color-text);
    font-family: var(--font-body);
}

.prose ul,
.prose ol {
    margin-bottom: 1.5em;
    padding-left: 1.5em;
}

.prose ul li {
    list-style-type: disc;
    margin-bottom: 0.5em;
    padding-left: 0.5em;
}

.prose ol li {
    list-style-type: decimal;
    margin-bottom: 0.5em;
    padding-left: 0.5em;
}

.prose strong {
    color: var(--color-primary);
    font-weight: 600;
}

.prose em {
    color: var(--color-secondary);
}

.prose blockquote {
    border-left: 4px solid var(--color-accent);
    padding: 1.25rem 1.5rem;
    font-style: italic;
    color: var(--color-secondary);
    background: var(--color-surface);
    border-radius: 0 8px 8px 0;
    margin: 2em 0;
}

/* 6. Links */
.prose a {
    color: var(--color-accent);
    text-decoration: none;
    font-weight: 500;
    border-bottom: 1px solid transparent;
    transition: all 0.2s;
}

.prose a:hover {
    color: #7ab325;
    border-bottom-color: currentColor;
}

/* 7. Images — Zenith custom blocks */
.zenith-image-block {
    margin: 2.5rem 0 !important;
    display: block;
    text-align: center;
}

.zenith-image-block img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.12);
    transition: transform 0.3s ease;
}

.zenith-image-block img:hover {
    transform: translateY(-2px);
}

.zenith-image-block figcaption {
    margin-top: 0.75rem;
    font-size: 0.875rem;
    color: var(--color-muted);
    font-family: var(--font-body);
    font-style: italic;
}

/* 8. Images — Gutenberg native wp-block-* */
.wp-block-image {
    margin: 2.5rem 0 !important;
    text-align: center;
}

.wp-block-image img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.12);
    transition: transform 0.3s ease;
    display: inline-block;
}

.wp-block-image img:hover {
    transform: translateY(-2px);
}

.wp-block-image figcaption {
    margin-top: 0.75rem;
    font-size: 0.875rem;
    color: var(--color-muted);
    font-family: var(--font-body);
    font-style: italic;
    text-align: center;
}

/* Immagini standalone dentro .prose */
.prose img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.12);
    margin: 2rem auto;
    display: block;
}

/* 9. Gutenberg paragraph / heading blocks */
.wp-block-paragraph {
    margin-bottom: 1.5em;
    font-family: var(--font-body);
    font-size: 1.125rem;
    line-height: 1.75;
    color: var(--color-text);
}

.wp-block-heading {
    font-family: var(--font-heading);
    color: var(--color-primary);
    font-weight: 700;
    line-height: 1.3;
    margin-top: 2.5em;
    margin-bottom: 0.8em;
}

/* 10. Gutenberg separator */
.wp-block-separator {
    border: none;
    border-top: 1px solid var(--color-border);
    margin: 2.5rem 0;
}

/* 11. Code */
.prose code,
.wp-block-code code {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 4px;
    padding: 0.2em 0.4em;
    font-size: 0.875em;
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    color: #c026d3;
}

.prose pre,
.wp-block-code {
    background: #1e293b;
    border-radius: 12px;
    padding: 1.5rem;
    overflow-x: auto;
    margin: 2rem 0;
}

.prose pre code,
.wp-block-code code {
    background: none;
    border: none;
    padding: 0;
    color: #e2e8f0;
    font-size: 0.9rem;
}

/* 12. Tables */
.prose table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    font-size: 0.9rem;
}

.prose table th {
    background: var(--color-surface);
    font-family: var(--font-heading);
    font-weight: 600;
    color: var(--color-primary);
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 2px solid var(--color-border);
}

.prose table td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--color-border);
    color: var(--color-text);
}

/* 13. Zenith helper classes */
.zenith-p {
    margin-bottom: 1.5rem !important;
}

.zenith-h2 {
    margin-top: 3rem !important;
}

/* 14. Responsive */
@media (max-width: 768px) {
    article.prose {
        font-size: 1rem;
    }

    .prose h2 { font-size: 1.5rem; }
    .prose h3 { font-size: 1.25rem; }
}
```

**Step 3: Upload**

```bash
sftp -P 22 su325938@access-5018990701.webspace-host.com <<'EOF'
put /tmp/wp-style.css /blog/wp-content/themes/official-v2/style.css
EOF
```

**Step 4: Verifica visiva**

Apri `geotapp.com/blog` in un articolo qualsiasi. Controlla:
- [ ] Font body = Inter (sans-serif, regular weight)
- [ ] Titoli = Poppins (bold)
- [ ] Link = verde `#8FC436`
- [ ] H2 senza linea separatrice sotto
- [ ] Immagini Gutenberg con bordo-raggio e ombra + margine verticale

---

## Task 2: Fix `header.php` — glow effects background

**Files:**
- Modify: `/blog/wp-content/themes/official-v2/header.php`

**Step 1: Download**

```bash
sftp -P 22 su325938@access-5018990701.webspace-host.com <<'EOF'
get /blog/wp-content/themes/official-v2/header.php /tmp/wp-header.php
EOF
```

**Step 2: Trova la riga `<body <?php body_class...`**

Subito dopo `<body <?php body_class('bg-white text-gray-900'); ?>>` inserisci il blocco glow:

```html
<body <?php body_class('bg-white text-gray-900'); ?>>

    <!-- Glow Effects — identici a geotapp.com -->
    <div style="position:fixed;top:0;left:0;width:800px;height:800px;background:rgb(224,242,254);filter:blur(120px);opacity:0.6;transform:translate(-50%,-50%);pointer-events:none;border-radius:9999px;z-index:0;"></div>
    <div style="position:fixed;bottom:0;right:0;width:800px;height:800px;background:rgb(243,232,255);filter:blur(120px);opacity:0.6;transform:translate(50%,50%);pointer-events:none;border-radius:9999px;z-index:0;"></div>

    <!-- TopBar -->
```

`rgb(224,242,254)` = sky-100, `rgb(243,232,255)` = purple-100 — identici al Next.js.

**Step 3: Upload**

```bash
sftp -P 22 su325938@access-5018990701.webspace-host.com <<'EOF'
put /tmp/wp-header.php /blog/wp-content/themes/official-v2/header.php
EOF
```

**Step 4: Verifica visiva**

Apri qualsiasi pagina del blog. Devi vedere una sfumatura azzurrina in alto-sinistra e lilla in basso-destra, sottile, identica al sito ufficiale.

---

## Task 3: Fix `single.php` — layout full-width, autore, correlati, newsletter, animazioni

**Files:**
- Modify: `/blog/wp-content/themes/official-v2/single.php`

**Step 1: Download**

```bash
sftp -P 22 su325938@access-5018990701.webspace-host.com <<'EOF'
get /blog/wp-content/themes/official-v2/single.php /tmp/wp-single.php
EOF
```

**Step 2: Riscrivi completamente `/tmp/wp-single.php`**

```php
<?php get_header(); ?>

<?php while (have_posts()) : the_post(); ?>

    <!-- Hero Section -->
    <?php
    $thumb_id  = get_post_thumbnail_id();
    $thumb_data = wp_get_attachment_image_src($thumb_id, 'full');
    $hero_url  = $thumb_data ? $thumb_data[0] : '';
    $hero_w    = $thumb_data ? $thumb_data[1] : 1200;
    $hero_h    = $thumb_data ? $thumb_data[2] : 630;
    ?>

    <section class="hero-section relative overflow-hidden" style="min-height:60vh;display:flex;align-items:center;justify-content:center;">

        <div class="hero-bg-layer" style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;">
            <?php if ($hero_url) : ?>
                <img src="<?php echo esc_url($hero_url); ?>"
                     width="<?php echo esc_attr($hero_w); ?>"
                     height="<?php echo esc_attr($hero_h); ?>"
                     class="hero-img w-full h-full object-cover"
                     alt="<?php the_title_attribute(); ?>"
                     fetchpriority="high"
                     decoding="async">
                <div style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;background:rgba(0,0,0,0.6);"></div>
            <?php else : ?>
                <div style="width:100%;height:100%;background:linear-gradient(135deg,#1a202c 0%,#2d3748 100%);"></div>
            <?php endif; ?>
        </div>

        <div class="hero-content max-w-4xl mx-auto px-6 text-center relative" style="z-index:10;">
            <div class="mb-6" id="single-meta">
                <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border border-white/30 text-white bg-white/10 backdrop-blur-md">
                    <?php the_category(', '); ?>
                </span>
                <span class="text-gray-300 text-sm ml-3 font-medium">
                    <?php echo get_the_date('d F Y'); ?>
                </span>
            </div>

            <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" id="single-title"
                style="font-family:'Poppins',sans-serif;text-shadow:0 2px 4px rgba(0,0,0,0.3);">
                <?php the_title(); ?>
            </h1>

            <div class="flex items-center justify-center gap-3" id="single-author-hero">
                <?php echo get_avatar(get_the_author_meta('ID'), 56, '', '', array('class' => 'rounded-full border-2 border-white/40 shadow-sm')); ?>
                <div class="text-left">
                    <p class="text-sm font-bold text-white mb-0"><?php the_author(); ?></p>
                    <p class="text-xs text-gray-400 mt-0">Lettura: <?php echo ceil(str_word_count(strip_tags(get_the_content())) / 200); ?> min</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Article Body -->
    <main id="main-content" class="py-16 bg-white min-h-screen relative" style="z-index:1;">
        <div class="max-w-3xl mx-auto px-6">

            <article class="prose max-w-none" id="single-content">
                <?php the_content(); ?>
            </article>

            <!-- Tags -->
            <?php if (get_the_tags()) : ?>
            <div class="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-2" id="single-tags">
                <?php foreach (get_the_tags() as $tag) : ?>
                    <a href="<?php echo get_tag_link($tag->term_id); ?>"
                       class="px-3 py-1 text-xs font-medium rounded-full border"
                       style="border-color:#e2e8f0;color:#475569;background:#f8fafc;">
                        #<?php echo esc_html($tag->name); ?>
                    </a>
                <?php endforeach; ?>
            </div>
            <?php endif; ?>

            <!-- Author Block -->
            <?php
            $author_bio = get_the_author_meta('description');
            $author_url = get_author_posts_url(get_the_author_meta('ID'));
            ?>
            <div class="mt-14 rounded-2xl p-6 flex gap-5 items-start" id="single-author-block"
                 style="background:#f8fafc;border:1px solid #e2e8f0;">
                <div class="flex-shrink-0">
                    <?php echo get_avatar(get_the_author_meta('ID'), 96, '', '', array(
                        'class' => 'rounded-full ring-2',
                        'style' => 'ring-color:#e2e8f0;'
                    )); ?>
                </div>
                <div>
                    <p class="text-xs font-bold uppercase tracking-wider mb-1" style="color:#8FC436;">Scritto da</p>
                    <h3 class="text-lg font-bold mb-1" style="font-family:'Poppins',sans-serif;color:#0f172a;">
                        <?php the_author(); ?>
                    </h3>
                    <?php if ($author_bio) : ?>
                        <p class="text-sm leading-relaxed" style="color:#475569;">
                            <?php echo esc_html($author_bio); ?>
                        </p>
                    <?php endif; ?>
                    <a href="<?php echo esc_url($author_url); ?>"
                       class="inline-flex items-center gap-1 text-sm font-medium mt-2"
                       style="color:#8FC436;">
                        Tutti gli articoli &rarr;
                    </a>
                </div>
            </div>

            <!-- Back to Blog -->
            <div class="mt-10">
                <a href="<?php echo home_url(); ?>"
                   class="inline-flex items-center gap-2 text-sm font-semibold"
                   style="color:#8FC436;">
                    &larr; Torna al Blog
                </a>
            </div>

        </div><!-- /max-w-3xl -->

        <!-- Related Posts — full container width -->
        <?php
        $cat_ids = wp_get_post_categories(get_the_ID());
        if (!empty($cat_ids)) :
            $related = new WP_Query(array(
                'category__in'   => $cat_ids,
                'post__not_in'   => array(get_the_ID()),
                'posts_per_page' => 3,
                'orderby'        => 'date',
                'order'          => 'DESC',
            ));
        ?>
        <?php if ($related->have_posts()) : ?>
        <div class="mt-20 border-t pt-16" style="border-color:#e2e8f0;" id="related-posts">
            <div class="max-w-7xl mx-auto px-6">
                <h2 class="text-2xl font-bold mb-8" style="font-family:'Poppins',sans-serif;color:#0f172a;">
                    Continua a leggere
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <?php while ($related->have_posts()) : $related->the_post(); ?>
                        <a href="<?php the_permalink(); ?>"
                           class="group block rounded-2xl overflow-hidden border transition-all hover:-translate-y-1 hover:shadow-lg"
                           style="border-color:#e2e8f0;background:#fff;">
                            <?php if (has_post_thumbnail()) : ?>
                                <div style="aspect-ratio:16/9;overflow:hidden;">
                                    <?php the_post_thumbnail('medium_large', array(
                                        'class' => 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-300',
                                        'style' => 'display:block;'
                                    )); ?>
                                </div>
                            <?php endif; ?>
                            <div class="p-5">
                                <span class="text-xs font-bold uppercase tracking-wider" style="color:#8FC436;">
                                    <?php the_category(', '); ?>
                                </span>
                                <h3 class="mt-2 font-bold leading-snug line-clamp-2"
                                    style="font-family:'Poppins',sans-serif;color:#0f172a;">
                                    <?php the_title(); ?>
                                </h3>
                                <p class="text-xs mt-2" style="color:#94a3b8;">
                                    <?php echo get_the_date('d M Y'); ?>
                                </p>
                            </div>
                        </a>
                    <?php endwhile; wp_reset_postdata(); ?>
                </div>
            </div>
        </div>
        <?php endif; ?>
        <?php endif; ?>

        <!-- Newsletter CTA -->
        <div class="mt-20 mx-6" id="newsletter-cta">
            <div class="max-w-2xl mx-auto rounded-2xl p-10 text-center"
                 style="background:rgba(143,196,54,0.08);border:1px solid rgba(143,196,54,0.2);">
                <h2 class="text-2xl font-bold mb-2" style="font-family:'Poppins',sans-serif;color:#0f172a;">
                    Resta aggiornato
                </h2>
                <p class="text-sm mb-6" style="color:#475569;">
                    Ricevi i migliori articoli su gestione, HR e tecnologia direttamente nella tua email.
                </p>
                <form class="flex flex-col sm:flex-row gap-3 justify-center" method="post" action="<?php echo home_url('/newsletter/'); ?>">
                    <input type="email" name="email" required
                           placeholder="La tua email"
                           class="flex-1 px-4 py-3 rounded-xl border text-sm outline-none"
                           style="border-color:#e2e8f0;background:#fff;max-width:320px;">
                    <button type="submit"
                            class="px-6 py-3 rounded-xl text-sm font-bold text-white transition hover:opacity-90"
                            style="background:#8FC436;">
                        Iscriviti
                    </button>
                </form>
            </div>
        </div>

    </main>

<?php endwhile; ?>

<script>
document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    gsap.from(["#single-meta", "#single-title", "#single-author-hero"], {
        y: 20, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out"
    });

    // Article paragraphs & lists
    ScrollTrigger.batch(".prose p, .prose ul, .prose ol, .prose blockquote", {
        onEnter: batch => gsap.fromTo(batch,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out" }
        ),
        start: "top 90%"
    });

    // Article headings
    document.querySelectorAll('.prose h2, .prose h3, .prose h4').forEach(h => {
        gsap.fromTo(h,
            { opacity: 0, x: -20 },
            { scrollTrigger: { trigger: h, start: "top 85%", toggleActions: "play none none reverse" },
              opacity: 1, x: 0, duration: 0.7, ease: "power2.out" }
        );
    });

    // Article images
    document.querySelectorAll('.prose img, .wp-block-image img, .zenith-image-block img').forEach(img => {
        gsap.fromTo(img,
            { opacity: 0, scale: 0.96 },
            { scrollTrigger: { trigger: img, start: "top 80%", toggleActions: "play none none reverse" },
              opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.2)" }
        );
    });

    // Author block
    gsap.fromTo("#single-author-block",
        { opacity: 0, y: 30 },
        { scrollTrigger: { trigger: "#single-author-block", start: "top 85%" },
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    // Tags
    gsap.fromTo("#single-tags",
        { opacity: 0, y: 15 },
        { scrollTrigger: { trigger: "#single-tags", start: "top 90%" },
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    // Related posts stagger
    ScrollTrigger.batch("#related-posts .group", {
        onEnter: batch => gsap.fromTo(batch,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" }
        ),
        start: "top 85%"
    });

    // Newsletter CTA
    gsap.fromTo("#newsletter-cta > div",
        { opacity: 0, scale: 0.97 },
        { scrollTrigger: { trigger: "#newsletter-cta", start: "top 88%" },
          opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
    );
});
</script>

<?php get_footer(); ?>
```

**Step 3: Upload**

```bash
sftp -P 22 su325938@access-5018990701.webspace-host.com <<'EOF'
put /tmp/wp-single.php /blog/wp-content/themes/official-v2/single.php
EOF
```

**Step 4: Verifica visiva su un articolo**

- [ ] Layout singola colonna centrata (no sidebar)
- [ ] Blocco autore con foto Gravatar + nome + bio
- [ ] Sezione "Continua a leggere" con 3 card
- [ ] CTA Newsletter verde
- [ ] Animazioni scroll funzionanti

---

## Task 4: Fix `footer.php` — footer chiaro identico al sito ufficiale

**Files:**
- Modify: `/blog/wp-content/themes/official-v2/footer.php`

**Step 1: Download**

```bash
sftp -P 22 su325938@access-5018990701.webspace-host.com <<'EOF'
get /blog/wp-content/themes/official-v2/footer.php /tmp/wp-footer.php
EOF
```

**Step 2: Riscrivi completamente `/tmp/wp-footer.php`**

```php
    <footer style="background:#f8fafc;border-top:1px solid #e2e8f0;">
        <div class="max-w-7xl mx-auto px-6 py-12">
            <div class="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left">

                <!-- Brand -->
                <div>
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/logo.png"
                         alt="GeoTapp"
                         width="220"
                         height="48"
                         style="height:40px;width:auto;display:inline-block;"
                         onerror="this.src='https://geotapp.com/LogoGeoTapp.png'">
                    <p style="color:#94a3b8;font-size:0.875rem;margin-top:0.5rem;font-family:'Inter',sans-serif;">
                        Timbratura geolocalizzata per le PMI italiane.
                    </p>
                </div>

                <!-- Links -->
                <div class="flex gap-8" style="font-size:0.875rem;font-family:'Inter',sans-serif;">
                    <a href="https://geotapp.com/privacy" style="color:#475569;" class="hover:text-gray-900 transition">Privacy</a>
                    <a href="https://geotapp.com/terms" style="color:#475569;" class="hover:text-gray-900 transition">Termini</a>
                    <a href="<?php echo home_url(); ?>" style="color:#8FC436;" class="hover:opacity-80 transition">Blog</a>
                    <a href="https://geotapp.com/contact" style="color:#475569;" class="hover:text-gray-900 transition">Contatti</a>
                </div>

                <!-- Copyright -->
                <div style="color:#94a3b8;font-size:0.75rem;font-family:'Inter',sans-serif;">
                    &copy; <?php echo date('Y'); ?> GeoTapp. Tutti i diritti riservati.
                </div>

            </div>
        </div>
    </footer>

    <!-- Tailwind CSS (CDN) -->
    <script src="https://cdn.tailwindcss.com?plugins=typography" defer></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        geotapp: {
                            primary: '#8FC436',
                            600: '#7ab325',
                            50: '#f8faf5',
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Poppins', 'Inter', 'sans-serif'],
                    }
                }
            }
        }
    </script>

    <!-- GSAP -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>

    <?php wp_footer(); ?>
</body>
</html>
```

**Step 3: Upload**

```bash
sftp -P 22 su325938@access-5018990701.webspace-host.com <<'EOF'
put /tmp/wp-footer.php /blog/wp-content/themes/official-v2/footer.php
EOF
```

**Step 4: Verifica visiva**

- [ ] Footer chiaro `#f8fafc` (non più scuro)
- [ ] Logo visibile
- [ ] Link essenziali: Privacy / Termini / Blog / Contatti
- [ ] Copyright
- [ ] Stesso aspetto del footer su geotapp.com

---

## Verifica finale complessiva

Dopo tutti e 4 i task, confronta side-by-side:

| Elemento | geotapp.com | geotapp.com/blog |
|---|---|---|
| Font body | Inter | ✓ Inter |
| Font heading | Poppins bold | ✓ Poppins bold |
| Brand green | `#8FC436` | ✓ `#8FC436` |
| Glow bg | Sky + Purple blur | ✓ identici |
| Footer | Chiaro `#f8fafc` | ✓ chiaro |
| Articolo | Full-width centrato | ✓ no sidebar |
| Autore | — | ✓ card con Gravatar |
| Correlati | — | ✓ griglia 3 card |
| Newsletter | — | ✓ CTA verde |
| Animazioni GSAP | Framer Motion | ✓ GSAP equivalente |
