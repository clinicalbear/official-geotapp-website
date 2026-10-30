/* GeoTapp, stile "ibrido" del sito (30/10/2026): barra a pillola, menu delle lingue, pulsanti, testi che si riempiono,
   forme morbide e ombre, firma del fondatore, articoli del blog impaginati (capitoli, note e fonti, rinforzi).
   Gira sopra le pagine gia' rese da Next: non cambia i testi, li impagina. Lo stile sta in src/app/ibrida.css. */
(function () {
  if (window.__ibrida) return; window.__ibrida = 1;
  var LG = (document.documentElement.lang || 'it').slice(0, 2).toLowerCase();
  // testi dell'interfaccia aggiunta, in tutte le lingue del sito
  var T = {
    it: { lang: 'Lingua', share: 'Condividi su LinkedIn', copy: 'Copia la frase', copied: 'Copiata', resume: 'Riprendi da dove eri', close: 'Chiudi', tool: 'Strumento gratuito', toolGo: 'Apri lo strumento', page: 'Scheda di approfondimento', pageGo: 'Apri la scheda', next: 'Leggi il prossimo', nextGo: 'Continua a leggere', src: 'Fonte', checked: 'link verificato il' },
    en: { lang: 'Language', share: 'Share on LinkedIn', copy: 'Copy the quote', copied: 'Copied', resume: 'Pick up where you left off', close: 'Close', tool: 'Free tool', toolGo: 'Open the tool', page: 'In-depth guide', pageGo: 'Open the guide', next: 'Read next', nextGo: 'Keep reading', src: 'Source', checked: 'link checked on' },
    de: { lang: 'Sprache', share: 'Auf LinkedIn teilen', copy: 'Satz kopieren', copied: 'Kopiert', resume: 'Dort weiterlesen, wo du warst', close: 'Schließen', tool: 'Kostenloses Tool', toolGo: 'Tool öffnen', page: 'Vertiefung', pageGo: 'Seite öffnen', next: 'Als Nächstes lesen', nextGo: 'Weiterlesen', src: 'Quelle', checked: 'Link geprüft am' },
    fr: { lang: 'Langue', share: 'Partager sur LinkedIn', copy: 'Copier la phrase', copied: 'Copiée', resume: 'Reprendre là où vous en étiez', close: 'Fermer', tool: 'Outil gratuit', toolGo: 'Ouvrir l’outil', page: 'Fiche détaillée', pageGo: 'Ouvrir la fiche', next: 'À lire ensuite', nextGo: 'Continuer la lecture', src: 'Source', checked: 'lien vérifié le' },
    es: { lang: 'Idioma', share: 'Compartir en LinkedIn', copy: 'Copiar la frase', copied: 'Copiada', resume: 'Sigue donde lo dejaste', close: 'Cerrar', tool: 'Herramienta gratuita', toolGo: 'Abrir la herramienta', page: 'Ficha de ampliación', pageGo: 'Abrir la ficha', next: 'Lee lo siguiente', nextGo: 'Seguir leyendo', src: 'Fuente', checked: 'enlace verificado el' },
    pt: { lang: 'Idioma', share: 'Partilhar no LinkedIn', copy: 'Copiar a frase', copied: 'Copiada', resume: 'Retomar onde parou', close: 'Fechar', tool: 'Ferramenta gratuita', toolGo: 'Abrir a ferramenta', page: 'Ficha de aprofundamento', pageGo: 'Abrir a ficha', next: 'Ler a seguir', nextGo: 'Continuar a ler', src: 'Fonte', checked: 'link verificado em' },
    nl: { lang: 'Taal', share: 'Delen op LinkedIn', copy: 'Zin kopiëren', copied: 'Gekopieerd', resume: 'Verder waar je was', close: 'Sluiten', tool: 'Gratis tool', toolGo: 'Tool openen', page: 'Verdieping', pageGo: 'Pagina openen', next: 'Lees hierna', nextGo: 'Verder lezen', src: 'Bron', checked: 'link gecontroleerd op' },
    da: { lang: 'Sprog', share: 'Del på LinkedIn', copy: 'Kopiér sætningen', copied: 'Kopieret', resume: 'Fortsæt hvor du slap', close: 'Luk', tool: 'Gratis værktøj', toolGo: 'Åbn værktøjet', page: 'Uddybning', pageGo: 'Åbn siden', next: 'Læs næste', nextGo: 'Læs videre', src: 'Kilde', checked: 'link tjekket den' },
    sv: { lang: 'Språk', share: 'Dela på LinkedIn', copy: 'Kopiera meningen', copied: 'Kopierad', resume: 'Fortsätt där du slutade', close: 'Stäng', tool: 'Gratis verktyg', toolGo: 'Öppna verktyget', page: 'Fördjupning', pageGo: 'Öppna sidan', next: 'Läs härnäst', nextGo: 'Läs vidare', src: 'Källa', checked: 'länk kontrollerad den' },
    nb: { lang: 'Språk', share: 'Del på LinkedIn', copy: 'Kopier setningen', copied: 'Kopiert', resume: 'Fortsett der du slapp', close: 'Lukk', tool: 'Gratis verktøy', toolGo: 'Åpne verktøyet', page: 'Fordypning', pageGo: 'Åpne siden', next: 'Les neste', nextGo: 'Les videre', src: 'Kilde', checked: 'lenke sjekket' },
    ru: { lang: 'Язык', share: 'Поделиться в LinkedIn', copy: 'Скопировать фразу', copied: 'Скопировано', resume: 'Продолжить с того места', close: 'Закрыть', tool: 'Бесплатный инструмент', toolGo: 'Открыть инструмент', page: 'Подробный материал', pageGo: 'Открыть материал', next: 'Читать далее', nextGo: 'Продолжить чтение', src: 'Источник', checked: 'ссылка проверена' }
  };
  T.no = T.nb; var TX = T[LG] || T.en;   // TX e non t: t e' un nome locale comune nelle funzioni sotto

  /* la navigazione interna ricarica la pagina intera: gli effetti lavorano sull'HTML gia' reso da React, e una pagina
     cambiata da React senza ricaricare li perderebbe (o React troverebbe nodi spostati e andrebbe in errore) */
  addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]'); if (!a || a.target || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.hasAttribute('download')) return;
    var u; try { u = new URL(a.href, location.href); } catch (er) { return; }
    if (u.origin !== location.origin || (u.pathname === location.pathname && u.search === location.search)) return;
    e.preventDefault(); e.stopPropagation(); location.href = u.href;
  }, true);
  var push = history.pushState;
  history.pushState = function (st, ti, url) { var before = location.pathname; push.apply(this, arguments); if (location.pathname !== before) location.reload(); };
  function langPicker() {
    var sel = document.querySelector('.nvr select'); if (!sel || sel.dataset.fxLang) return; sel.dataset.fxLang = '1';
    var lab = sel.closest('label') || sel.parentNode;
    var split = function (txt) { var m = txt.trim().match(/^(\S+)\s+(.*)$/); return m ? [m[1], m[2]] : ['', txt.trim()]; };
    var btn = document.createElement('button'); btn.type = 'button'; btn.className = 'fx-lang-btn';
    btn.setAttribute('aria-haspopup', 'listbox'); btn.setAttribute('aria-expanded', 'false');
    var menu = document.createElement('div'); menu.className = 'fx-lang-menu'; menu.setAttribute('role', 'listbox'); menu.hidden = true;
    var paint = function () { var o = sel.options[sel.selectedIndex], p = split(o ? o.textContent : '');
      btn.innerHTML = '<span class="f">' + p[0] + '</span><span class="t">' + p[1] + '</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      btn.setAttribute('aria-label', TX.lang + ': ' + p[1]); };
    Array.prototype.forEach.call(sel.options, function (o, i) { var p = split(o.textContent), it = document.createElement('button');
      it.type = 'button'; it.className = 'fx-lang-opt'; it.setAttribute('role', 'option'); it.dataset.i = i;
      it.innerHTML = '<span class="f">' + p[0] + '</span><span class="t">' + p[1] + '</span>'; menu.appendChild(it); });
    var mark = function () { Array.prototype.forEach.call(menu.children, function (it) { var on = +it.dataset.i === sel.selectedIndex; it.classList.toggle('on', on); it.setAttribute('aria-selected', on ? 'true' : 'false'); }); };
    var place = function () { var r = btn.getBoundingClientRect(); menu.style.top = (r.bottom + 12) + 'px'; menu.style.right = Math.max(12, innerWidth - r.right - 40) + 'px'; };
    /* apertura come un'app sull'iPhone: il pannello nasce dalla pillola del pulsante e si espande con una piccola molla,
       poi le lingue compaiono una dopo l'altra; alla chiusura rientra nel pulsante */
    var reduceM = matchMedia('(prefers-reduced-motion: reduce)').matches, anim = null;
    var fromBtn = function () { var b = btn.getBoundingClientRect(), m = menu.getBoundingClientRect();
      return 'translate(' + (b.left - m.left) + 'px,' + (b.top - m.top) + 'px) scale(' + (b.width / m.width) + ',' + (b.height / m.height) + ')'; };
    var open = function (v) { btn.setAttribute('aria-expanded', v ? 'true' : 'false'); btn.classList.toggle('open', v);
      if (anim) { anim.cancel(); anim = null; }
      if (v) {
        menu.hidden = false; mark(); place(); menu.classList.add('in');
        if (!reduceM) {
          anim = menu.animate([{ transform: fromBtn(), borderRadius: '999px', opacity: .6 }, { transform: 'none', borderRadius: '22px', opacity: 1 }],
            { duration: 520, easing: 'linear(0, .25 9%, .62 20%, .9 32%, 1.03 45%, 1.05 54%, 1.02 68%, 1)' });
          Array.prototype.forEach.call(menu.children, function (it, i) {
            it.animate([{ opacity: 0, transform: 'scale(.85)' }, { opacity: 1, transform: 'none' }], { duration: 260, delay: 140 + i * 14, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'backwards' }); });
        }
        var c = menu.querySelector('.on') || menu.firstChild; c.focus({ preventScroll: true });
      } else if (!menu.hidden) {
        if (reduceM) { menu.hidden = true; menu.classList.remove('in'); return; }
        anim = menu.animate([{ transform: 'none', borderRadius: '22px', opacity: 1 }, { transform: fromBtn(), borderRadius: '999px', opacity: 0 }],
          { duration: 300, easing: 'cubic-bezier(.4,0,.2,1)' });
        anim.onfinish = function () { menu.hidden = true; menu.classList.remove('in'); anim = null; };
      } };
    var choose = function (i) { var set = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set;
      set.call(sel, sel.options[i].value); sel.dispatchEvent(new Event('input', { bubbles: true })); sel.dispatchEvent(new Event('change', { bubbles: true }));
      paint(); open(false); btn.focus(); };
    btn.addEventListener('click', function () { open(menu.hidden); });
    menu.addEventListener('click', function (e) { var it = e.target.closest('.fx-lang-opt'); if (it) choose(+it.dataset.i); });
    menu.addEventListener('keydown', function (e) { var items = Array.prototype.slice.call(menu.children), k = items.indexOf(document.activeElement);
      if (e.key === 'Escape') { open(false); btn.focus(); }
      else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); (items[k + 1] || items[0]).focus(); }
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); (items[k - 1] || items[items.length - 1]).focus(); } });
    document.addEventListener('click', function (e) { if (!menu.hidden && !menu.contains(e.target) && !btn.contains(e.target)) open(false); });
    addEventListener('resize', function () { if (!menu.hidden) place(); });
    sel.addEventListener('change', paint);
    paint(); lab.classList.add('fx-lang-wrap'); lab.appendChild(btn); document.body.appendChild(menu);
  }

  /* ---------- testi che si riempiono di liquido quando entrano nello schermo (o quando il loro blocco si attiva) ---------- */
  var home, items = [], queue = [], qBusy = false;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // avvolge la prima occorrenza di "phrase" dentro el in uno span; senza phrase avvolge tutto il contenuto di el
  function wrap(el, phrase) {
    if (!el) return null;
    var sp = document.createElement('span');
    if (!phrase) { while (el.firstChild) sp.appendChild(el.firstChild); el.appendChild(sp); return sp; }
    var tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), t;
    while ((t = tw.nextNode())) {
      var i = t.data.indexOf(phrase); if (i < 0) continue;
      var r = document.createRange(); r.setStart(t, i); r.setEnd(t, i + phrase.length); r.surroundContents(sp); return sp;
    }
    return null;
  }
  var lum = function (c) { var m = c.match(/\d+(\.\d+)?/g); return m ? (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255 : 0; };
  // base = colore del titolo che lo contiene (la parola gia' verde parte bianca o navy), riempimento = verde del sito
  function ink(sp, opt) {
    if (!sp) return null; opt = opt || {};
    var host = sp.parentElement.closest('h1, h2, h3, p, blockquote') || sp.parentElement;
    var base = getComputedStyle(host).color;
    sp.classList.add('ib-ink', lum(base) > .5 ? 'dk' : 'lt'); sp.style.setProperty('--base', base);
    var it = { el: sp, gate: opt.gate, reset: !!opt.reset, seq: !!opt.seq, delay: opt.delay || 0, on: false };
    items.push(it); return it;
  }
  function find(sel, phrase, opt) { var el = home.querySelector(sel); return el ? ink(wrap(el, phrase), opt) : null; }
  function measure() { items.forEach(function (it) { var r = it.el.getClientRects()[0]; if (r) it.el.style.setProperty('--h', r.height + 'px'); }); }

  function shown(it) {
    var el = it.el, r = el.getBoundingClientRect();
    if (!r.width || r.top > innerHeight * .86 || r.bottom < innerHeight * .08) return false;
    if (el.checkVisibility && !el.checkVisibility({ opacityProperty: true, visibilityProperty: true })) return false;
    return it.gate ? it.gate(el) : true;
  }
  function fire(it) { it.on = true; setTimeout(function () { if (it.on) it.el.classList.add('on'); }, it.delay); }
  function pump() { // settori: uno alla volta
    if (qBusy || !queue.length) return; qBusy = true; var it = queue.shift(); it.el.classList.add('on');
    setTimeout(function () { qBusy = false; pump(); }, 700);
  }
  function tick() {
    items.forEach(function (it) {
      var s = shown(it);
      if (s && !it.on) { if (it.seq) { it.on = true; queue.push(it); pump(); } else fire(it); }
      else if (!s && it.on && it.reset) { it.on = false; it.el.classList.remove('on'); }
    });
    founder();
  }

  // nelle schede prodotto il testo si riempie quando la scheda e' quella aperta
  var accOpen = function (el) { var p = el.closest('.p'), a = el.closest('.acc'); return !p || !a || p.getBoundingClientRect().width > a.getBoundingClientRect().width * .45; };

  /* La frase del fondatore: non e' liquido. Una scia di luce la colora tutta, dalle prime alle ultime virgolette,
     seguendo il testo da sinistra a destra riga per riga; poi sotto si scrive la sua firma. */
  var fdr = null;
  function setupFounder() {
    var q = home.querySelector('.fdr blockquote p'); if (!q) return;
    var sp = wrap(q); sp.classList.add('ib-sweep'); sp.style.setProperty('--base', getComputedStyle(q).color);
    var sig = document.createElement('div'); sig.className = 'ib-firma'; sig.setAttribute('aria-hidden', 'true');
    var F = window.IB_FIRMA, NS = 'http://www.w3.org/2000/svg';
    if (F) {
      // l'inchiostro e' firma-verde.png (la firma vera, con la pressione del pennino); i tratti della penna sono la maschera che lo scopre
      var svg = document.createElementNS(NS, 'svg'); svg.setAttribute('viewBox', '0 0 ' + F.w + ' ' + F.h);
      var mask = document.createElementNS(NS, 'mask'); mask.id = 'ib-firma-penna'; mask.setAttribute('maskUnits', 'userSpaceOnUse');
      var g = document.createElementNS(NS, 'g'); g.setAttribute('stroke-width', F.stroke); mask.appendChild(g);
      F.paths.forEach(function (d) { var p = document.createElementNS(NS, 'path'); p.setAttribute('d', d); g.appendChild(p); });
      var im = document.createElementNS(NS, 'image'); im.setAttribute('href', '/ibrida/firma-verde.png');
      im.setAttribute('width', F.w); im.setAttribute('height', F.h); im.setAttribute('mask', 'url(#ib-firma-penna)');
      svg.appendChild(mask); svg.appendChild(im);
      sig.appendChild(svg);
    }
    q.parentNode.insertBefore(sig, q.nextSibling);
    fdr = { q: q, sp: sp, sig: sig, on: false };
  }
  // la penna scrive i tratti uno dopo l'altro, sempre alla stessa velocita': ogni tratto dura quanto e' lungo
  function writeSignature(sig) {
    var paths = sig.querySelectorAll('mask path'), t = 0, SPEED = 2000, GAP = 0.03; // px del disegno al secondo, pausa fra un tratto e l'altro
    Array.prototype.forEach.call(paths, function (p) {
      var L = p.getTotalLength(), dur = L / SPEED;
      p.style.strokeDasharray = L + ' ' + (L + 2);
      if (reduce) return;
      p.animate([{ strokeDashoffset: L }, { strokeDashoffset: 0 }], { duration: dur * 1000, delay: t * 1000, easing: 'linear', fill: 'backwards' });
      t += dur + (L > 20 ? GAP : 0); // la penna si stacca solo fra i tratti veri, non fra i pezzetti
    });
    sig.classList.add('on');
  }
  function founder() {
    if (!fdr || fdr.on) return; var r = fdr.q.getBoundingClientRect();
    if (r.top < innerHeight * .78 && r.bottom > innerHeight * .1) { fdr.on = true; fdr.sp.classList.add('on');
      setTimeout(function () { writeSignature(fdr.sig); }, reduce ? 0 : 3400); }
  }

  // copertina di un articolo del blog: l'immagine in evidenza, nel formato medio, chiesta a WordPress (poche centinaia di byte)
  var coverMemo = {};
  function coverFor(href) {
    var slug = (href || '').replace(/[?#].*$/, '').replace(/\/+$/, '').split('/').pop(); if (!slug) return Promise.resolve(null);
    if (coverMemo[slug]) return coverMemo[slug];
    try { var c = sessionStorage.getItem('ib-cv:' + slug); if (c) return (coverMemo[slug] = Promise.resolve(c)); } catch (e) {}
    return (coverMemo[slug] = fetch('/blog/wp-json/wp/v2/posts/?slug=' + encodeURIComponent(slug) + '&_fields=featured_media,yoast_head_json.og_image').then(function (r) { return r.json(); }).then(function (j) {
      var p = j && j[0]; if (!p) return null; var og = p.yoast_head_json && p.yoast_head_json.og_image && p.yoast_head_json.og_image[0] && p.yoast_head_json.og_image[0].url;
      if (!p.featured_media) return og || null;
      return fetch('/blog/wp-json/wp/v2/media/' + p.featured_media + '/?_fields=source_url,media_details').then(function (r) { return r.json(); }).then(function (m) {
        var z = m && m.media_details && m.media_details.sizes || {}; var pick = z.medium_large || z.large || z['1536x1536'] || null; return (pick && pick.source_url) || (m && m.source_url) || og || null; }).catch(function () { return og || null; });
    }).then(function (u) { if (u) try { sessionStorage.setItem('ib-cv:' + slug, u); } catch (e) {} return u; }).catch(function () { return null; }));
  }
  // Risorse utili (home): la copertina dell'articolo in cima a ogni scheda
  function covers() {
    Array.prototype.forEach.call(home.querySelectorAll('.jr a[href*="/blog/"]'), function (a) {
      if (a.querySelector('.ib-cover')) return;
      coverFor(a.getAttribute('href')).then(function (src) { if (!src || a.querySelector('.ib-cover')) return;
        var f = document.createElement('figure'); f.className = 'ib-cover';
        var im = document.createElement('img'); im.src = src; im.alt = ''; im.loading = 'lazy'; im.decoding = 'async';
        f.appendChild(im); a.insertBefore(f, a.firstChild); });
    });
  }

  function setupInk() {
    home = document.querySelector('.lp-home') || document.querySelector('main'); if (!home) return;
    if (document.querySelector('.lp-home')) {                         // le parole scelte della home
      find('.op h1 > span:last-of-type b', null, { delay: 400 });
      find('.cl h2 span.s');
      find('.sec h2', 'niente di ricostruito');
      find('.seq h2', 'Chi ha la prova');
      var steps = home.querySelectorAll('.seq h3'), sk = ['nega.', 'non arriva.', 'non esiste.'];
      steps.forEach(function (h, i) { ink(wrap(h, sk[i]), { reset: true, delay: 250 }); });
      var deck = home.querySelectorAll('.deck h2'), dk = ['è una prova.', 'tre strumenti', 'mai'];
      deck.forEach(function (h, i) { ink(wrap(h, dk[i])); });
      find('.roi-wrap h2', 'ti costano.'); find('.roi-wrap h3', 'dimostrare?');
      var acc = home.querySelectorAll('.acc .ct h3'), ak = [null, 'appena arriva.', null];
      acc.forEach(function (h, i) { var ev = h.querySelector('i.ev'); ink(ev ? wrap(ev) : wrap(h, ak[i]), { gate: accOpen, reset: true, delay: 350 }); });
      setupFounder();
      find('.set h2', 'verificabile');
      home.querySelectorAll('.set h3').forEach(function (h) { ink(wrap(h), { seq: true }); });
      find('.rev h2', 'ogni giorno');
      find('.jr h2', 'il tuo settore');
      find('.fq h2', 'frequenti');
      find('.end h2', 'dimostrato'); find('.end h2', 'vai a casa', { delay: 1900 });
    }
    items = items.filter(Boolean);
    covers(); measure();
    addEventListener('scroll', tick, { passive: true }); addEventListener('resize', function () { measure(); tick(); });
    setInterval(tick, 250); tick();
  }

  /* ---------- forme morbide e ombre "da Mac" su ogni pagina, non solo sulla home ---------- */
  var SKIP = /^(HTML|BODY|MAIN|SECTION|HEADER|FOOTER|NAV|TD|TH|TR|TABLE|TBODY|THEAD|HR|IMG|VIDEO|IFRAME|CANVAS|PICTURE|SOURCE|TRACK|svg|path|g)$/;
  var seenSoft = new WeakSet(), seenMac = new WeakSet();
  function softCorners() {
    var vw = innerWidth;
    Array.prototype.forEach.call(document.querySelectorAll('body *'), function (e) {
      if (seenSoft.has(e)) return;
      if (SKIP.test(e.tagName) || e.closest('svg, .ib-firma, .fx-lang-menu, #fx-ink')) { seenSoft.add(e); return; }
      var c = getComputedStyle(e); if (c.display === 'none') return;                        // nascosto ora: si riguarda quando compare
      if (parseFloat(c.borderTopLeftRadius) >= 6 || c.display === 'inline') { seenSoft.add(e); return; }   // anche gli angoli quasi vivi (2-5 px)
      var r = e.getBoundingClientRect(); if (!r.width || !r.height) return;
      seenSoft.add(e); if (r.width < 24 || r.height < 16 || r.width >= vw - 16) return;     // le fasce da bordo a bordo restano dritte
      var bg = c.backgroundColor !== 'rgba(0, 0, 0, 0)' || c.backgroundImage !== 'none';
      var box = ['Top', 'Right', 'Bottom', 'Left'].every(function (s) { return c['border' + s + 'Width'] !== '0px' && c['border' + s + 'Style'] !== 'none'; });
      if (!bg && !box) return;                                          // una sola riga di bordo (filetti, accenti a sinistra) resta dritta
      var clickable = e.matches('button, a, input[type=submit], input[type=button], [role=button]');
      var rad = clickable && r.height <= 64 ? '999px' : (r.height < 44 ? '10px' : '20px');
      e.style.setProperty('border-radius', rad, 'important');
      if (bg && c.overflow === 'visible' && (e.querySelector('img, video') || c.display === 'grid' && c.gap !== 'normal')) e.style.setProperty('overflow', 'hidden');
    });
  }
  function macShadows() {
    Array.prototype.forEach.call(document.querySelectorAll('body *'), function (e) {
      if (seenMac.has(e) || e.closest('svg, footer')) return;
      var v = getComputedStyle(e).boxShadow; if (v === 'none') return; seenMac.add(e); if (v.indexOf('0.5px') > -1) return;
      var up = /\) 0px -\d/.test(v), h = e.getBoundingClientRect().height;
      e.style.setProperty('box-shadow', up ? 'var(--mac-up)' : (h < 90 ? 'var(--mac-sm)' : 'var(--mac)'), 'important');
    });
  }
  // le parole messe in risalto nei titoli delle altre pagine si riempiono di liquido come in home
  function genericInk() {
    if (!home || document.querySelector('.lp-home')) return;        // la home ha la sua lista (la classe lp-home c'e' solo li')
    if (/^\/([a-z]{2}(-[a-z]{2})?\/)?blog(\/|$)/.test(location.pathname)) {   // /blog/... e /it/blog/                    // blog: i titoli non hanno parole in risalto, si riempie tutto il titolo
      Array.prototype.forEach.call(document.querySelectorAll('main h1, main a h2, main a h3, main .tx h2'), function (h) {
        if (h.querySelector('.ib-ink') || !h.textContent.trim()) return; ink(wrap(h));
      });
      measure(); return;
    }
    Array.prototype.forEach.call(document.querySelectorAll('main h1, main h2, .lp-home h1, .lp-home h2'), function (h) {
      var hc = getComputedStyle(h).color;
      Array.prototype.forEach.call(h.querySelectorAll('span, i, em, b, strong, mark'), function (w) {
        if (w.querySelector('span, i, em, b') || w.classList.contains('ib-ink') || getComputedStyle(w).color === hc || !w.textContent.trim()) return;
        w.style.color = hc; ink(wrap(w));
      });
    });
    measure();
  }
  /* ogni chiamata all'azione (Prova gratis, Invia, Iscriviti, Aggiungi al carrello, ...) prende l'effetto del pulsante della home:
     pallina con la freccia a sinistra che al passaggio scorre a destra mentre il pulsante si riempie */
  function ctas() {
    Array.prototype.forEach.call(document.querySelectorAll('a, button'), function (e) {
      if (e.dataset.ibCta || e.matches('.lp-home a.b1') || e.closest('[role=dialog][aria-label*=ookie], .fx-lang-menu, .fx-lang-wrap, nav.mn')) return;   // fuori solo il banner dei cookie, non le altre finestre (newsletter)
      if ((e.getAttribute('href') || '').charAt(0) === '#' || e.hasAttribute('aria-pressed') || e.getAttribute('role') === 'tab') return;   // "salta al contenuto", filtri, schede
      if (e.parentElement && e.parentElement.querySelectorAll(':scope > button').length >= 3) return;                                    // gruppi di filtri (Tutti, GPS, ...)
      var t = (e.textContent || '').trim(); if (t.length < 3) return;
      var c = getComputedStyle(e), r = e.getBoundingClientRect();
      if (r.height < 30 || r.height > 84 || r.width < 60 || c.display === 'none') return;
      var m = c.backgroundColor.match(/[\d.]+/g); if (!m || (m[3] !== undefined && +m[3] < .9)) return;          // solo pulsanti pieni
      var l = (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255;
      if (l > .9) return;                                                                                           // i pulsanti bianchi restano come sono
      var n = e.parentElement, bl = 1;                                                                              // il fondo su cui sta il pulsante
      while (n) { var cb = getComputedStyle(n).backgroundColor.match(/[\d.]+/g); if (cb && (cb[3] === undefined || +cb[3] > .5)) { bl = (0.2126 * cb[0] + 0.7152 * cb[1] + 0.0722 * cb[2]) / 255; break; } n = n.parentElement; }
      e.dataset.ibCta = '1'; e.classList.add('ib-cta'); if (bl > .5) e.classList.add('on-light'); if (l < .2) e.classList.add('is-dark');
      e.style.setProperty('--ib-h', Math.round(r.height) + 'px');
    });
  }
  // "Accedi" e il carrello stanno ad almeno 20 px dalla pillola della lingua, qualunque sia la lunghezza del pulsante a destra
  function navGap() {
    var ne = document.querySelector('header.nv .ne'), lang = document.querySelector('.fx-lang-btn') || document.querySelector('.nvr select');
    if (!ne || !lang) return; ne.style.transform = '';
    var kids = Array.prototype.filter.call(ne.children, function (k) { return k.getBoundingClientRect().width > 0; }); if (!kids.length) return;
    var right = Math.max.apply(null, kids.map(function (k) { return k.getBoundingClientRect().right; }));
    var gap = lang.getBoundingClientRect().left - right;
    if (gap < 24) ne.style.transform = 'translateX(' + Math.round(gap - 24) + 'px)';
  }
  function polish() { softCorners(); macShadows(); ctas(); navGap(); relatedCovers(); if (home && document.querySelector('.lp-home')) covers(); }   // schede che arrivano dopo: anche le copertine

  /* sezioni "Prova GeoTapp gratis per 14 giorni" (in fondo a molte pagine e articoli): si riempiono GeoTapp, Prova e 14, una dopo l'altra */
  function wrapRe(el, re) { var tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), t;
    while ((t = tw.nextNode())) { if (t.parentElement.closest('.ib-ink')) continue; var m = re.exec(t.data); if (!m) continue;
      var r = document.createRange(), sp = document.createElement('span'); r.setStart(t, m.index); r.setEnd(t, m.index + m[0].length); r.surroundContents(sp); return sp; }
    return null; }
  function provaSections() {
    Array.prototype.forEach.call(document.querySelectorAll('h1, h2, h3'), function (h) {
      if (h.dataset.ibProva || !/prova/i.test(h.textContent) || !/14/.test(h.textContent) || !/giorni/i.test(h.textContent)) return;
      h.dataset.ibProva = '1';
      var sps = [/GeoTapp/, /\bProva\w*|\bprova\w*/, /\b14\b/].map(function (re) { return wrapRe(h, re); }).filter(Boolean);
      sps.sort(function (x, y) { return x.compareDocumentPosition(y) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1; });   // in ordine di lettura
      sps.forEach(function (sp, i) { ink(sp, { delay: i * 700 }); });
    });
    measure();
  }

  // articoli correlati e "leggi anche": la copertina dell'articolo in cima alla scheda
  function relatedCovers() {
    Array.prototype.forEach.call(document.querySelectorAll('a.cardn[href*="/blog/"]'), function (a) {
      if (a.querySelector('.ib-cover')) return;                       // React puo' ridisegnare la scheda: se la copertina manca, si rimette
      coverFor(a.getAttribute('href')).then(function (src) { if (!src || a.querySelector('.ib-cover')) return;
        var f = document.createElement('figure'); f.className = 'ib-cover'; var im = document.createElement('img'); im.src = src; im.alt = ''; im.loading = 'lazy'; im.decoding = 'async';
        f.appendChild(im); a.insertBefore(f, a.firstChild); });
    });
  }


  /* ============================================================================================
     Articoli del blog impaginati come un giornale, senza toccare il testo: attacco grande, capitoli numerati che si
     riempiono, cifre e fonti riprese a margine, elenchi in schede, citazioni a tutta larghezza, immagini larghe,
     indice con il capitolo attivo e l'avanzamento della lettura dentro la barra a pillola.
     ============================================================================================ */
  // a margine solo cio' che il lettore deve portarsi via: importi (multe, costi), scadenze ("entro il ..."), percentuali
  var FIG = [/\b\d{1,3}(?:\.\d{3})+(?:,\d+)?\s?(?:euro|€)|€\s?\d[\d.,]*|\b\d+(?:,\d+)?\s?(?:euro|€)/i,
    /\bentro\s(?:il\s|l'|la\s|fine\s)?\d{1,2}\s(?:gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)(?:\s\d{4})?/i,
    /\b\d{1,2}\s(?:gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)(?:\s\d{4})?(?=[^.]{0,40}\b(?:entro|scadenz|termine))/i,   // "il 2 dicembre 2026 e' la data entro cui ..."
    /\b\d+(?:,\d+)?\s?%/];
  function articleLayout() {
    if (!/^\/blog\/\d{4}\//.test(location.pathname)) return;
    // il testo di un articolo puo' essere diviso in piu' blocchi .article-content (fra uno e l'altro il sito mette altre schede):
    // tutto quello che segue vale per l'articolo intero, con i capitoli numerati di seguito
    var blocks = Array.prototype.slice.call(document.querySelectorAll('.article-content')); var ac = blocks[0];
    if (!ac || ac.dataset.ibArt) return; ac.dataset.ibArt = '1'; ART.blocks = blocks;
    document.documentElement.classList.add('ib-art');
    var kids = []; blocks.forEach(function (b) { kids = kids.concat(Array.prototype.slice.call(b.children)); });
    // attacco: il primo paragrafo piu' grande, con il capolettera
    var lead = kids.filter(function (k) { return k.tagName === 'P' && k.textContent.trim().length > 60; })[0]; if (lead) lead.classList.add('ib-lead');
    // capitoli: numero grande prima di ogni sottotitolo, il titolo si riempie di liquido
    var chaps = kids.filter(function (k) { return k.tagName === 'H2'; });
    chaps.forEach(function (h, i) {
      var n = document.createElement('div'); n.className = 'ib-chn'; n.setAttribute('aria-hidden', 'true'); n.textContent = (i + 1 < 10 ? '0' : '') + (i + 1);
      h.parentNode.insertBefore(n, h); h.classList.add('ib-chap'); ink(wrap(h));
    });
    // a margine: la cifra chiave del paragrafo (al massimo una per paragrafo, quattro per articolo) e le fonti citate
    var figs = 0, usedFig = {};
    kids.forEach(function (p) {
      if (p.tagName !== 'P') return;
      var notes = [];
      if (figs < 4) for (var i = 0; i < FIG.length; i++) { var m = p.textContent.match(FIG[i]); if (m && !usedFig[m[0].toLowerCase()]) { usedFig[m[0].toLowerCase()] = 1;   // la stessa cifra non si ripete
        // la frase dell'articolo che contiene la cifra; se e' lunga, una finestra di parole intere attorno alla cifra
        var sent = (p.textContent.split(/(?<=[.!?…»”])\s+(?=[A-ZÀ-Ý«"“])/)   // fine frase solo se dopo viene una maiuscola: 'n. 382' non spezza
          .filter(function (x) { return x.indexOf(m[0]) > -1; })[0] || '').trim();
        if (sent.length > 120) { var w = sent.split(/\s+/), first = m[0].split(/\s+/)[0], wi = 0;
          for (var q = 0; q < w.length; q++) if (w[q].indexOf(first) > -1) { wi = q; break; }
          var a0 = Math.max(0, wi - 8), a1 = Math.min(w.length, wi + m[0].split(/\s+/).length + 8);
          sent = (a0 > 0 ? '… ' : '') + w.slice(a0, a1).join(' ') + (a1 < w.length ? ' …' : ''); }
        var f = document.createElement('aside'); f.className = 'ib-note ib-fig';
        var big = document.createElement('b'); big.textContent = m[0]; var sm = document.createElement('span'); sm.textContent = sent;
        f.appendChild(big); f.appendChild(sm); f._ink = big; f._anc = wrapRe(p, FIG[i]) || p; notes.push(f); figs++; break; } }
      Array.prototype.forEach.call(p.querySelectorAll('a[href^="http"]'), function (a) {
        var host = a.hostname.replace(/^www\./, ''); if (/geotapp\.com$/.test(host)) return;
        var f = document.createElement('a'); f.className = 'ib-note ib-src'; f.href = a.href; f.target = '_blank'; f.rel = 'nofollow noopener';
        var k = document.createElement('small'); k.textContent = TX.src; var h = document.createElement('span'); h.textContent = host;
        f.appendChild(k); f.appendChild(h); f._anc = a; notes.push(f);
      });
      var narrow = innerWidth < 1200;                                   // sul telefono la nota va dopo il suo paragrafo, a margine va prima (galleggia accanto)
      notes.forEach(function (nt) { p.parentNode.insertBefore(nt, narrow ? p.nextSibling : p); if (nt._ink) ink(nt._ink);   // il riempimento si prepara a nota gia' nella pagina
        if (nt._anc && nt._anc !== p) { nt._anc.classList.add('ib-anc'); links.push({ a: nt._anc, n: nt, p: p });
          [nt, nt._anc].forEach(function (el) { el.addEventListener('mouseenter', function () { nt.classList.add('hot'); nt._anc.classList.add('hot'); if (nt._path) nt._path.classList.add('hot'); });
            el.addEventListener('mouseleave', function () { nt.classList.remove('hot'); nt._anc.classList.remove('hot'); if (nt._path) nt._path.classList.remove('hot'); }); }); } });
    });
    // titoletto in cima alla colonna delle note, come "In questo articolo" nella barra laterale
    var first = document.querySelector('.article-content .ib-note');
    if (first) { var NF = { it: 'Note e fonti', en: 'Notes and sources', de: 'Anmerkungen und Quellen', fr: 'Notes et sources', es: 'Notas y fuentes', pt: 'Notas e fontes', nl: 'Noten en bronnen', da: 'Noter og kilder', sv: 'Noter och källor', nb: 'Notater og kilder', no: 'Notater og kilder', ru: 'Примечания и источники' };
      var lg = (document.documentElement.lang || 'it').slice(0, 2).toLowerCase();
      first.classList.add('ib-first');
      var SO = { it: 'Fonti', en: 'Sources', de: 'Quellen', fr: 'Sources', es: 'Fuentes', pt: 'Fontes', nl: 'Bronnen', da: 'Kilder', sv: 'Källor', nb: 'Kilder', no: 'Kilder', ru: 'Источники' };
      first.setAttribute('data-hd', document.querySelector('.article-content .ib-fig') ? (NF[lg] || NF.it) : (SO[lg] || SO.it)); }   // il titoletto e' attaccato sopra la prima nota: non spinge il capolettera
    // elenchi in schede, citazioni a tutta larghezza (la frase si riempie), immagini larghe
    Array.prototype.forEach.call(document.querySelectorAll('.article-content > ul, .article-content > ol'), function (l) { l.classList.add('ib-cards'); });
    Array.prototype.forEach.call(document.querySelectorAll('.article-content > blockquote, .article-content > figure.wp-block-pullquote, .article-content > .wp-block-quote'), function (q) {
      q.classList.add('ib-pull'); var pp = q.querySelector('p'); if (pp) { var sp = wrap(pp); sp.classList.add('ib-sweep'); sp.style.setProperty('--base', getComputedStyle(pp).color); pullQ.push(sp); } });
    Array.prototype.forEach.call(document.querySelectorAll('.article-content > figure.wp-block-image'), function (f) { f.classList.add('ib-wide'); });
    // il sito ha gia' una sua barretta di avanzamento in cima allo schermo: con la linea nella pillola sarebbero due
    Array.prototype.forEach.call(document.querySelectorAll('body *'), function (e) { var c = getComputedStyle(e);
      var r = e.getBoundingClientRect();
      if (c.position === 'fixed' && parseFloat(c.top) <= 1 && r.height > 0 && r.height <= 5 && !e.children.length && c.backgroundColor !== 'rgba(0, 0, 0, 0)' && !e.classList.contains('ib-read')) e.style.setProperty('display', 'none', 'important'); });
    blogExtras();
    fitFigs(); measure(); readProgress(); drawLinks();
    [400, 1500, 3500].forEach(function (t) { setTimeout(drawLinks, t); });                 // dopo font e immagini le righe si spostano
    Array.prototype.forEach.call(document.querySelectorAll('.article-content img'), function (im) { im.addEventListener('load', drawLinks); });
    addEventListener('resize', function () { fitFigs(); drawLinks(); }); addEventListener('scroll', linkReveal, { passive: true });
    addEventListener('scroll', readProgress, { passive: true }); addEventListener('resize', readProgress);
  }
  /* ============================================================================================
     Rinforzi degli articoli (prova da valutare, si possono togliere uno per uno):
     1 schede dei nostri strumenti citati, 2 "leggi il prossimo", 3 condividi la frase selezionata,
     4 riprendi da dove eri, 5 glossario a comparsa, 6 link delle fonti verificati.
     ============================================================================================ */
  var ART = { blocks: [],
    all: function (sel) { var o = []; this.blocks.forEach(function (b) { o = o.concat(Array.prototype.slice.call(b.querySelectorAll(sel))); }); return o; },
    top: function () { return this.blocks[0].getBoundingClientRect().top; },
    height: function () { var b = this.blocks; return b[b.length - 1].getBoundingClientRect().bottom - b[0].getBoundingClientRect().top; },
    contains: function (n) { return this.blocks.some(function (b) { return b.contains(n); }); } };
  function getMeta(url) {   // titolo, descrizione e immagine di una pagina del sito (stessa origine)
    return fetch(url).then(function (r) { return r.text(); }).then(function (t) {
      var g = function (pr) { var m = t.match(new RegExp('<meta[^>]+property="' + pr + '"[^>]+content="([^"]*)"')) || t.match(new RegExp('<meta[^>]+content="([^"]*)"[^>]+property="' + pr + '"'));
        return m ? m[1].replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"') : ''; };
      var nm = (t.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/) || [])[1] || '';
      var h1 = ((t.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").trim();
      var generic = /Field Work Verification Platform|Clock-in with location/i;                 // dati social generici di alcune pagine: non si usano
      var ogt = g('og:title'), ogd = g('og:description');
      return { title: h1 || (generic.test(ogt) ? '' : ogt.replace(/\s*[|·–-]\s*GeoTapp\s*$/i, '')), desc: (!generic.test(ogd) && ogd) || nm.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'"), img: g('og:image') };
    }).catch(function () { return {}; });
  }
  var el = function (tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };

  // 1. i nostri strumenti citati nel testo diventano una scheda sotto il paragrafo
  function toolCards() {
    var seen = {}, n = 0;
    ART.all('p a[href]').forEach(function (a) {
      if (n >= 2) return; var u; try { u = new URL(a.href, location.href); } catch (e) { return; }
      if (!/(^|\.)geotapp\.com$|^127\.0\.0\.1$/.test(u.hostname) || !/\/(risorse|roi-calculator|calcolatore)/.test(u.pathname) || seen[u.pathname]) return;
      seen[u.pathname] = 1; n++;
      var tool = /generatore|calcolat|roi/.test(u.pathname);
      var card = el('a', 'ib-tool'); card.href = u.pathname + u.search;
      var ic = el('span', 'ic'); ic.innerHTML = tool ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/></svg>' : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h12l4 4v12H4z"/><path d="M8 12h8M8 16h6"/></svg>';
      var tx = el('span', 'tx'); var k = el('small', null, tool ? TX.tool : TX.page); var t = el('b', null, a.textContent.trim()); var d = el('span', 'd', '');
      tx.appendChild(k); tx.appendChild(t); tx.appendChild(d);
      var go = el('span', 'go', tool ? TX.toolGo : TX.pageGo);
      card.appendChild(ic); card.appendChild(tx); card.appendChild(go);
      var p = a.closest('p'); p.parentNode.insertBefore(card, p.nextSibling);
      getMeta(u.pathname).then(function (m) { if (m.title) t.textContent = m.title; if (m.desc) d.textContent = m.desc; });
    });
  }
  // 2. in fondo all'articolo, prima dei correlati: il prossimo da leggere, grande, con la copertina
  function nextRead() {
    var ac = ART.blocks[ART.blocks.length - 1];
    var c = document.querySelector('a.cardn[href*="/blog/"]'); if (!c || document.querySelector('.ib-next')) return;
    var nx = el('a', 'ib-next'); nx.href = c.getAttribute('href');
    var fig = el('span', 'cv'); var tx = el('span', 'tx');
    tx.appendChild(el('small', null, TX.next));
    tx.appendChild(el('b', null, (c.querySelector('b') || c).textContent.trim()));
    var ex = c.querySelector('p'); if (ex) tx.appendChild(el('span', 'd', ex.textContent.trim()));
    tx.appendChild(el('span', 'go', TX.nextGo));
    nx.appendChild(fig); nx.appendChild(tx);
    var after = ac.closest('.py-16') || ac; after.parentNode.insertBefore(nx, after.nextSibling);
    coverFor(c.getAttribute('href')).then(function (src) { if (src) { var im = el('img'); im.src = src; im.alt = ''; im.loading = 'lazy'; im.decoding = 'async'; fig.appendChild(im); } });
  }
  // 3. selezioni una frase: compare la pillola per condividerla su LinkedIn o copiarla con il link
  function shareSelection() {
    var pill = el('div', 'ib-share'); pill.setAttribute('role', 'toolbar');
    var li = el('button', null, TX.share); var cp = el('button', null, TX.copy); li.type = cp.type = 'button'; li.dataset.ibCta = cp.dataset.ibCta = '1';
    pill.appendChild(li); pill.appendChild(cp); document.body.appendChild(pill);
    var quote = '';
    var hide = function () { pill.classList.remove('on'); };
    document.addEventListener('selectionchange', function () {
      var sel = getSelection(); if (!sel.rangeCount) return hide(); var t = sel.toString().trim();
      if (t.length < 20 || t.length > 300 || !ART.contains(sel.anchorNode)) return hide();
      quote = t; var r = sel.getRangeAt(0).getBoundingClientRect();
      pill.style.left = Math.max(12, Math.min(innerWidth - 300, r.left + r.width / 2 - 140)) + 'px'; pill.style.top = (r.top + scrollY - 54) + 'px'; pill.classList.add('on');
    });
    var url = location.href.split('#')[0];
    li.addEventListener('mousedown', function (e) { e.preventDefault(); open('https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url), '_blank', 'noopener'); hide(); });
    cp.addEventListener('mousedown', function (e) { e.preventDefault(); (navigator.clipboard ? navigator.clipboard.writeText('“' + quote + '” — ' + url) : Promise.reject()).then(function () { cp.textContent = TX.copied; setTimeout(function () { cp.textContent = TX.copy; hide(); }, 1200); }).catch(hide); });
  }
  // 4. riprendi da dove eri: se torni su un articolo lasciato a meta', una pillola ti riporta al punto
  function resumeReading() {
    var key = 'ib-read:' + location.pathname, saved = 0; try { saved = +localStorage.getItem(key) || 0; } catch (e) {}
    var save = function () { var p = (innerHeight * .35 - ART.top()) / ART.height(); try { if (p > .08 && p < .92) localStorage.setItem(key, p.toFixed(3)); else if (p >= .92) localStorage.removeItem(key); } catch (e) {} };
    var t = 0; addEventListener('scroll', function () { clearTimeout(t); t = setTimeout(save, 400); }, { passive: true });
    if (saved > .08 && scrollY < 200) {
      var pill = el('div', 'ib-resume'); var go = el('button', null, TX.resume + ' · ' + Math.round(saved * 100) + '%'); var x = el('button', 'x', '×'); go.type = x.type = 'button'; go.dataset.ibCta = x.dataset.ibCta = '1'; x.setAttribute('aria-label', TX.close);
      pill.appendChild(go); pill.appendChild(x); document.body.appendChild(pill); requestAnimationFrame(function () { pill.classList.add('on'); });
      go.addEventListener('click', function () { scrollTo({ top: ART.top() + scrollY + saved * ART.height() - innerHeight * .35, behavior: 'smooth' }); pill.remove(); });
      x.addEventListener('click', function () { pill.remove(); });
      setTimeout(function () { if (pill.isConnected) { pill.classList.remove('on'); setTimeout(function () { pill.remove(); }, 400); } }, 12000);
    }
  }
  // 5. glossario: alla prima occorrenza nel testo, passando sopra compare una riga di spiegazione
  //    solo italiano: sono leggi e istituzioni italiane. Voci passate al controllo dei claim il 30/10/2026.
  var GLOSS = [
    [/\bStatuto dei [Ll]avoratori\b/, 'Statuto dei Lavoratori', 'Legge 300 del 1970. L’articolo 4 regola gli strumenti da cui può derivare un controllo a distanza dei lavoratori.'],
    [/\bGDPR\b/, 'GDPR', 'Regolamento europeo 2016/679 sulla protezione dei dati personali, applicato dal 25 maggio 2018.'],
    [/\bGarante(?: per la protezione dei dati personali| privacy)?\b/, 'Garante privacy', 'L’autorità italiana che vigila sulla protezione dei dati personali e può sanzionare chi non rispetta le regole sulla protezione dei dati.'],
    [/\b[Ii]nformativa\b/, 'Informativa', 'Il documento che spiega alle persone chi tratta i loro dati, per quali scopi, per quanto tempo e con quali diritti (articoli 13 e 14 del GDPR).'],
    [/\bIspettorato(?: nazionale)? del [Ll]avoro\b/, 'Ispettorato nazionale del lavoro', 'L’ente pubblico che vigila sulle regole del lavoro. Per l’articolo 4 dello Statuto autorizza gli strumenti di controllo a distanza quando manca l’accordo con le rappresentanze sindacali.'],
    [/\bRSU\b/, 'RSU e RSA', 'Le rappresentanze sindacali in azienda: con loro si firma l’accordo previsto dall’articolo 4 dello Statuto dei Lavoratori.'],
    [/\bvalutazione d['’]impatto\b/i, 'Valutazione d’impatto', 'La DPIA dell’articolo 35 del GDPR: analisi dei rischi richiesta prima dei trattamenti che possono presentare un rischio elevato per i diritti e le libertà delle persone.']
  ];
  function glossary() {
    if (LG !== 'it') return;                                          // voci italiane (Statuto, Garante, INL): solo sulle pagine in italiano
    var tip = el('div', 'ib-gtip'); tip.setAttribute('role', 'tooltip'); document.body.appendChild(tip);
    GLOSS.forEach(function (g) {
      var sp = null; ART.all(':scope > p').some(function (p) { if (p.closest('a')) return false; sp = wrapRe(p, g[0]); return !!sp; });
      if (!sp || sp.closest('a, .ib-anc')) return;
      sp.className = 'ib-gl'; sp.tabIndex = 0; sp.dataset.t = g[1]; sp.dataset.d = g[2];
      var show = function () { tip.innerHTML = ''; tip.appendChild(el('b', null, sp.dataset.t)); tip.appendChild(el('span', null, sp.dataset.d));
        var r = sp.getBoundingClientRect(); tip.style.left = Math.max(12, Math.min(innerWidth - 332, r.left + r.width / 2 - 160)) + 'px'; tip.style.top = (r.bottom + scrollY + 10) + 'px'; tip.classList.add('on'); };
      sp.addEventListener('mouseenter', show); sp.addEventListener('focus', show); sp.addEventListener('click', show);
      sp.addEventListener('mouseleave', function () { tip.classList.remove('on'); }); sp.addEventListener('blur', function () { tip.classList.remove('on'); });
    });
  }
  // 6. le fonti: /api/fonti apre (dal server, una volta al giorno per articolo) i link esterni dell'articolo e dice quali rispondono.
  //    La riga "link verificato il ..." compare solo per quelli che rispondono; per gli altri non si scrive nulla.
  function checkSources() {
    var pills = document.querySelectorAll('.ib-src'); if (!pills.length) return;
    var slug = location.pathname.replace(/\/+$/, '').split('/').pop();
    fetch('/api/fonti/?slug=' + encodeURIComponent(slug)).then(function (r) { return r.ok ? r.json() : null; }).then(function (j) {
      if (!j || !j.links) return; var when = j.checked ? new Date(j.checked) : new Date();
      var day = when.toLocaleDateString(document.documentElement.lang || 'it', { day: 'numeric', month: 'long', year: 'numeric' });
      var norm = function (u) { return (u || '').replace(/^https?:\/\/(www\.)?/, '').replace(/[#?].*$/, '').replace(/\/+$/, ''); };
      var ok = {}; Object.keys(j.links).forEach(function (u) { if (j.links[u] === 'ok') ok[norm(u)] = 1; });
      Array.prototype.forEach.call(pills, function (pill) { if (!ok[norm(pill.href)] || pill.querySelector('em')) return;
        pill.appendChild(el('em', 'ok', TX.checked + ' ' + day)); });
      drawLinks();
    }).catch(function () {});
  }
  function blogExtras() { toolCards(); nextRead(); shareSelection(); resumeReading(); glossary(); checkSources(); }

  var pullQ = [], links = [];
  /* il filo fra la parola e la sua nota: sottolinea la parola, corre nello spazio sotto la riga fino al bordo della colonna,
     poi curva fino alla nota. Solo quando la nota sta a margine (schermi larghi). Si disegna quando la nota entra nello schermo. */
  function drawLinks() {
    if (!links.length) return; var NS = 'http://www.w3.org/2000/svg';
    if (innerWidth < 1200) { Array.prototype.forEach.call(document.querySelectorAll('svg.ib-links'), function (sv) { sv.style.display = 'none'; }); return; }
    var svgOf = function (ac) { var svg = ac.querySelector(':scope > svg.ib-links');
      if (!svg) { svg = document.createElementNS(NS, 'svg'); svg.setAttribute('class', 'ib-links'); svg.setAttribute('aria-hidden', 'true'); ac.insertBefore(svg, ac.firstChild); }
      var A = ac.getBoundingClientRect(); svg.style.display = '';
      svg.setAttribute('width', A.width + 340); svg.setAttribute('height', A.height); svg.style.width = (A.width + 340) + 'px'; svg.style.height = A.height + 'px'; return svg; };
    links.forEach(function (L) {
      var ac = L.p.closest('.article-content'); if (!ac) return; var svg = svgOf(ac), A = ac.getBoundingClientRect();
      var rs = L.a.getClientRects(); if (!rs.length) return; var r = rs[0], N = L.n.getBoundingClientRect(), P = L.p.getBoundingClientRect();
      var x0 = r.left - A.left, y0 = r.bottom - A.top + 2, colR = P.right - A.left + 14, x1 = N.left - A.left - 2;
      var y1 = N.top - A.top + (L.n.classList.contains('ib-src') ? N.height / 2 : 34);
      var d = 'M' + x0.toFixed(1) + ' ' + y0.toFixed(1) + ' H' + colR.toFixed(1) + ' C' + (colR + 34).toFixed(1) + ' ' + y0.toFixed(1) + ' ' + (x1 - 34).toFixed(1) + ' ' + y1.toFixed(1) + ' ' + x1.toFixed(1) + ' ' + y1.toFixed(1);
      if (!L.n._path) { L.n._path = document.createElementNS(NS, 'path'); svg.appendChild(L.n._path); L.n._dot = document.createElementNS(NS, 'circle'); L.n._dot.setAttribute('r', '3.5'); svg.appendChild(L.n._dot); }
      L.n._path.setAttribute('d', d); L.n._dot.setAttribute('cx', x1.toFixed(1)); L.n._dot.setAttribute('cy', y1.toFixed(1));
      var len = L.n._path.getTotalLength(); L.n._path.style.strokeDasharray = len + ' ' + len;
      if (!L.n._path.classList.contains('on')) L.n._path.style.strokeDashoffset = len;
    });
    linkReveal();
  }
  // la cifra a margine: grande, ma sempre dentro il riquadro, al massimo su due righe e senza spezzare le parole
  function fitFigs() {
    Array.prototype.forEach.call(document.querySelectorAll('.ib-fig b'), function (b) {
      var fs = 34; b.style.fontSize = fs + 'px';
      while (fs > 18 && (b.scrollWidth > b.clientWidth + 1 || b.getBoundingClientRect().height > fs * 1.05 * 2 + 2)) { fs -= 2; b.style.fontSize = fs + 'px'; }
    });
    measure();
  }
  function linkReveal() {
    links.forEach(function (L) { var p = L.n._path; if (!p || p.classList.contains('on')) return; var N = L.n.getBoundingClientRect();
      if (N.top < innerHeight * .8 && N.bottom > 0) { p.classList.add('on'); p.style.strokeDashoffset = 0; L.n._dot.classList.add('on'); } });
  }
  // avanzamento: una linea verde dentro la pillola, e nell'indice il capitolo che stai leggendo
  function readProgress() {
    if (!ART.blocks.length) return;
    var r = { top: ART.top(), height: ART.height() }; r.bottom = r.top + r.height; var p = Math.min(1, Math.max(0, (innerHeight * .35 - r.top) / r.height));
    var bar = document.querySelector('.ib-read'); if (!bar) { bar = document.createElement('div'); bar.className = 'ib-read'; bar.setAttribute('aria-hidden', 'true'); document.body.appendChild(bar); }
    bar.style.setProperty('--p', p.toFixed(4));
    var hs = document.querySelectorAll('.article-content h2.ib-chap'), cur = -1; Array.prototype.forEach.call(hs, function (h, i) { if (h.getBoundingClientRect().top < innerHeight * .4) cur = i; });
    var toc = document.querySelectorAll('aside.side nav.toc a');
    Array.prototype.forEach.call(toc, function (a, i) {
      var on = i === cur; a.classList.toggle('ib-on', on);
      var nx = hs[i + 1], st = hs[i], fill = 0;
      if (st) { var a0 = st.getBoundingClientRect().top + scrollY, a1 = nx ? nx.getBoundingClientRect().top + scrollY : r.bottom + scrollY; fill = Math.min(1, Math.max(0, (scrollY + innerHeight * .4 - a0) / (a1 - a0))); }
      a.style.setProperty('--f', fill.toFixed(3));
    });
    pullQ.forEach(function (sp) { var b = sp.getBoundingClientRect(); if (b.top < innerHeight * .75) sp.classList.add('on'); });
  }

  var start = function () { langPicker(); setupInk(); articleLayout(); genericInk(); provaSections(); relatedCovers(); polish(); setTimeout(polish, 2500); addEventListener('resize', navGap);
    // pulsanti, riquadri e finestre che compaiono piu' tardi: un ripasso quando la pagina aggiunge nodi, al massimo uno al secondo
    var due = 0; new MutationObserver(function () { if (due) return; due = setTimeout(function () { due = 0; polish(); }, 1000); }).observe(document.body, { childList: true, subtree: true }); };
  // la firma del fondatore (tratti della penna) si scarica solo dove c'e' la sua frase
  var boot = function () {
    if (document.querySelector('.lp-home .fdr blockquote') && !window.IB_FIRMA) {
      var sc = document.createElement('script'); sc.src = '/ibrida/firma-tratti.js'; sc.onload = sc.onerror = start; document.head.appendChild(sc);
    } else start();
  };
  if (document.readyState === 'complete') setTimeout(boot, 300); else addEventListener('load', function () { setTimeout(boot, 300); });
})();
