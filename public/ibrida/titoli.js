/* Titoli senza parole spezzate (16/11/2026).
   1) Il trattino dentro una parola composta ("e-mail", "quatre-vingts", "GPS-Zeiterfassung")
      e' un punto in cui il browser va a capo: si blocca con il WORD JOINER (U+2060, largo zero).
   2) Se una parola da sola non sta nella riga, si rimpicciolisce il titolo (fino al 62%)
      invece di spezzarla. Il CSS (overflow-wrap: break-word) resta come ultima risorsa. */
(function () {
  var SEL = 'h1,h2,h3,h4,.l-display,.big,.cardn b';
  var HY = /(\p{L})-(?=\p{L})/gu;
  var busy = false;

  function joinHyphens(el) {
    var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), n;
    while ((n = w.nextNode())) {
      var t = n.nodeValue;
      if (t.indexOf('-') > -1) {
        var u = t.replace(HY, '$1⁠-⁠');
        if (u !== t) n.nodeValue = u;
      }
    }
  }

  function fit(el) {
    if (el.clientWidth < 8) return; // titoli solo per lettori di schermo
    el.style.fontSize = '';
    el.style.overflowWrap = 'normal';
    var base = parseFloat(getComputedStyle(el).fontSize);
    var min = base * 0.62, fs = base, g = 0;
    while (el.scrollWidth > el.clientWidth + 1 && fs > min && g++ < 40) {
      fs -= 1;
      el.style.fontSize = fs + 'px';
    }
    el.style.overflowWrap = '';
    if (fs === base) el.style.fontSize = '';
  }

  function run() {
    if (busy) return;
    busy = true;
    try {
      document.querySelectorAll(SEL).forEach(function (el) {
        if (!el.dataset.tsj) { el.dataset.tsj = '1'; joinHyphens(el); }
        fit(el);
      });
    } catch (e) { /* mai rompere la pagina per un titolo */ }
    busy = false;
  }

  var t;
  function later() { clearTimeout(t); t = setTimeout(run, 120); }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(run); else run();
  addEventListener('resize', later);
  addEventListener('load', later);
  new MutationObserver(function (m) {
    for (var i = 0; i < m.length; i++) if (m[i].addedNodes.length) { later(); return; }
  }).observe(document.body, { childList: true, subtree: true });
})();
