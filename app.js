/* ==========================================================================
   app.js — মূল অংশ: নেভিগেশন, ফুটার, কার্ড, popup। এখানে সাধারণত হাত দেওয়ার দরকার নেই।
   সব লেখা/ছবি/লিংক আছে content.js এ। পেজগুলো pages1.js, pages2.js, pages3.js এ।
   ========================================================================== */
(function () {
  'use strict';
  var S = window.SITE, U = window.UI, IC = U.IC;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var esc = function (t) { return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var param = function (k) { return new URLSearchParams(location.search).get(k); };
  var TXT = { rg: 'RG', orcid: 'iD' };
  function ic(n, extra) {
    if (TXT[n]) return '<span class="tb ic" aria-hidden="true" style="font-size:1.05em">' + TXT[n] + '</span>';
    if (n === 'water') n = 'drop';
    return '<svg class="ic ' + (extra || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (IC[n] || IC.star) + '</svg>';
  }
  function ib(n, tone, size) { return '<span class="ib ' + (tone || '') + ' ' + (size || '') + '">' + ic(n) + '</span>'; }

  /* ---------- গ্রাফিক্স: কনটুর, ঢেউ ---------- */
  function contours(seed, n, col) {
    n = n || 9; var p = '', i, k, a, r, pts;
    for (i = 0; i < n; i++) {
      pts = [];
      for (k = 0; k <= 72; k++) {
        a = k / 72 * Math.PI * 2; r = (40 + i * 30) * (1 + .1 * Math.sin(3 * a + seed + i * .35) + .06 * Math.sin(5 * a + seed * 1.7 - i * .2) + .03 * Math.sin(8 * a + i));
        pts.push((300 + r * Math.cos(a)).toFixed(1) + ' ' + (300 + r * Math.sin(a)).toFixed(1));
      }
      p += '<path d="M' + pts.join('L') + 'Z"/>';
    }
    return '<svg ' + (col ? 'xmlns="http://www.w3.org/2000/svg" ' : '') + 'viewBox="0 0 600 600" fill="none" stroke="' + (col || 'currentColor') + '" stroke-width="1.4">' + p + '</svg>';
  }
  function cont(cls, seed) { return '<div class="cont ' + (cls || '') + '" aria-hidden="true">' + contours(seed || 1) + '</div>'; }
  var UL = '<svg viewBox="0 0 120 14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M3 9c10-8 20 8 30 0s20 8 30 0 20 8 30 0 20 8 24 2"/></svg>';
  function wave(t) { return '<svg class="wave ' + (t ? 't' : '') + '" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 34C240 0 480 62 720 32S1200 4 1440 30V60H0z"/></svg>'; }
  function setBg() {
    var enc = function (s) { return 'url("data:image/svg+xml,' + encodeURIComponent(s) + '")'; };
    document.documentElement.style.setProperty('--ct1', enc(contours(3, 10, '#145C59')));
    document.documentElement.style.setProperty('--ct2', enc(contours(8, 10, '#B58B55')));
  }

  /* ---------- ছবি ও ছবি-আঁকা (illustration tile) ---------- */
  var SPARSE = ' camera cert work compass medal plane leaf air raster lab ev film code people ';
  function artTile(name, tone, cls) { return '<div class="arttile ' + (tone || '') + ' ' + (cls || '') + (SPARSE.indexOf(' ' + name + ' ') > -1 ? ' sp' : '') + '">' + cont('', 3 + (name ? name.length : 0)) + U.art(name) + '</div>'; }
  function pic(src, alt, art, cls, tone) {
    if (!src) return artTile(art, tone);
    return '<img src="' + esc(src) + '" alt="' + esc(alt || '') + '" loading="lazy" data-art="' + esc(art || 'camera') + '" data-tone="' + esc(tone || '') + '"' + (cls ? ' class="' + cls + '"' : '') + '>';
  }
  document.addEventListener('error', function (e) {
    var t = e.target;
    if (t && t.tagName === 'IMG' && t.dataset && t.dataset.art) { var d = document.createElement('div'); d.innerHTML = artTile(t.dataset.art, t.dataset.tone); t.replaceWith(d.firstChild); }
  }, true);

  /* ---------- সোশ্যাল লিংক ---------- */
  var SOC = [['scholar', 'Google Scholar', 'grad'], ['researchgate', 'ResearchGate', 'rg'], ['orcid', 'ORCID', 'orcid'], ['linkedin', 'LinkedIn', 'linkedin'], ['github', 'GitHub', 'gh'], ['instagram', 'Instagram', 'insta'], ['facebook', 'Facebook', 'fb'], ['facebookPage', 'Photography page', 'camera']];
  function socials() {
    return SOC.filter(function (s) { return S.links[s[0]]; }).map(function (s) {
      return '<a href="' + esc(S.links[s[0]]) + '" target="_blank" rel="noopener" aria-label="' + s[1] + '" title="' + s[1] + '">' + ic(s[2]) + '</a>';
    }).join('');
  }
  function bold(a) { return esc(a).replace(/Hosen, M\. B\./g, '<b>Hosen, M. B.</b>'); }
  var cvBtn = function (c) { return S.cv ? '<a class="btn ' + (c || '') + '" href="' + esc(S.cv) + '" download>' + ic('dl') + ' Download CV</a>' : ''; };

  /* ---------- নেভিগেশন ও ফুটার ---------- */
  var NAV = [['index.html', 'Home', 'home', 'home'], ['about.html', 'About', 'user', 'about'], ['experience.html', 'Experience', 'briefcase', 'experience'], ['skills.html', 'Skills', 'tools', 'skills'], ['research.html', 'Research', 'flask', 'research'], ['projects.html', 'Projects', 'folder', 'projects']];
  function nav() {
    var cur = document.body.dataset.page; if (cur === 'project') cur = 'projects';
    var L = S.lens, lensOn = (cur === 'photography' || cur === 'travel');
    $('#nav').innerHTML = '<header class="nav"><div class="wrap"><a class="logo" href="index.html" aria-label="' + esc(S.name) + ' — home" title="' + esc(S.name) + '"><span class="av"><img src="photos/avatar.jpg" alt=""></span><span class="lm">' + ic('drop') + '</span></a>' +
      '<nav class="nl" id="nl" aria-label="Main">' + NAV.map(function (n) { return '<a href="' + n[0] + '"' + (n[3] === cur ? ' class="on"' : '') + '>' + ic(n[2]) + n[1] + '</a>'; }).join('') +
      '<div class="dd' + (lensOn ? ' on' : '') + '"><button class="ddb" type="button" aria-haspopup="true" aria-expanded="false">' + ic('camera') + esc(L.name) + ic('chevd', 'cv') + '</button><div class="ddm">' +
      '<a href="photography.html"' + (cur === 'photography' ? ' class="on"' : '') + '>' + ib('camera', 'gold') + '<span><b>' + esc(L.photography) + '</b><small>Gallery and albums</small></span></a>' +
      '<a href="travel.html"' + (cur === 'travel' ? ' class="on"' : '') + '>' + ib('compass', 'sky') + '<span><b>' + esc(L.travel) + '</b><small>Stories and photographs</small></span></a></div></div>' +
      '<a href="contact.html"' + (cur === 'contact' ? ' class="on"' : '') + '>' + ic('mail') + 'Contact</a>' +
      '</nav>' +
      '<button class="burger" id="bg" aria-label="Menu" aria-expanded="false">' + ic('menu') + '</button></div></header>';
    $('#bg').addEventListener('click', function () { var o = $('#nl').classList.toggle('open'); this.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; });
    var dd = $('.dd'), btn = $('.ddb');
    btn.addEventListener('click', function (e) { e.stopPropagation(); var o = dd.classList.toggle('open'); btn.setAttribute('aria-expanded', o); });
    document.addEventListener('click', function () { dd.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); });
  }
  function footer() {
    var L = S.lens;
    $('#foot').innerHTML = '<footer class="foot">' + wave() + cont('gold', 7) + '<div class="wrap"><div class="g"><div class="brand"><div class="who"><span class="av"><img src="photos/avatar.jpg" alt=""></span><div><b>' + esc(S.name) + '</b><small>' + esc(S.role) + '</small></div></div>' +
      '<p>Water and environmental researcher and photographer from Bangladesh, working with GIS, remote sensing and hydrological modelling.</p><blockquote class="fq">' + ic('quote') + '<span>' + esc(S.story.headline) + '</span></blockquote><div class="soc">' + socials() + '</div></div>' +
      '<div><h5>Explore</h5><ul>' + NAV.slice(0, 4).map(function (n) { return '<li><a href="' + n[0] + '">' + ic(n[2]) + n[1] + '</a></li>'; }).join('') + '</ul></div>' +
      '<div><h5>More</h5><ul><li><a href="research.html">' + ic('flask') + 'Research</a></li><li><a href="projects.html">' + ic('folder') + 'Projects</a></li><li><a href="photography.html">' + ic('camera') + esc(L.photography) + '</a></li><li><a href="travel.html">' + ic('compass') + esc(L.travel) + '</a></li></ul></div>' +
      '<div><h5>Get in touch</h5><ul><li><a href="mailto:' + esc(S.email) + '">' + ic('mail') + esc(S.email) + '</a></li><li><a href="contact.html">' + ic('send') + 'Send a message</a></li><li><span class="plain">' + ic('pin') + esc(S.location) + '</span></li>' + '</ul></div></div>' +
      '<div class="bar"><span class="cr">Developed and Powered by <b>thySelf</b></span><a class="top" href="#top" id="totop" aria-label="Back to top">' + ic('up') + '<span>Back to top</span></a></div></div></footer>';
    $('#totop').addEventListener('click', function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  /* ---------- অংশ: সেকশন হেডিং ও পেজ হেডার ---------- */
  function sh(eyebrow, title, lead) {
    return '<header class="sh rv">' + (eyebrow ? '<div class="eb"><i></i><span>' + esc(eyebrow) + '</span><i></i></div>' : '') + '<h2>' + title + '</h2><div class="ul">' + UL + '</div>' + (lead ? '<p class="lead">' + esc(lead) + '</p>' : '') + '</header>';
  }
  function phead(icon, kicker, headline, sub, extra, crumb, orbs, badge) {
    var w = String(headline).split(' '), last = w.pop(); orbs = orbs || [];
    return '<section class="ph">' + cont('', 2) + '<div class="dots" style="right:6%;bottom:12%;width:170px;height:130px"></div>' + wave() + '<div class="wrap"><div class="pt">' + (crumb || '') + (kicker ? '<span class="eb2"><i></i>' + esc(kicker) + '</span>' : '') + (badge ? '<div class="hbadge" aria-hidden="true">' + artTile(badge[0], badge[1]) + '</div>' : '') + '<h1>' + esc(w.join(' ')) + ' <em>' + esc(last) + '</em></h1>' + (sub ? '<p class="s">' + esc(sub) + '</p>' : '') + (extra || '') + '</div>' +
      '<div class="pg" aria-hidden="true"><span class="ring"></span><span class="ring r2"></span><span class="core">' + ic(icon) + '</span>' + orbs.map(function (o, i) { return '<span class="orb o' + (i + 1) + '">' + ic(o) + '</span>'; }).join('') + '</div></div></section>';
  }
  function band(title, text, buttons) {
    return '<section><div class="wrap"><div class="band rv">' + cont('', 5) + '<div><h2>' + esc(title) + '</h2><p>' + esc(text) + '</p></div><div style="display:flex;gap:12px;flex-wrap:wrap">' + buttons + '</div></div></div></section>';
  }
  function ctaBand() {
    return band('Let\'s work on something together.', 'Open to research collaboration, consulting and new ideas.', '<a class="btn pri" href="contact.html">' + ic('mail') + ' Get in touch</a>');
  }
  function lensSwitch(cur) {
    var L = S.lens;
    return '<div class="lensnav"><a href="photography.html"' + (cur === 'photography' ? ' class="on"' : '') + '>' + ic('camera') + esc(L.photography) + '</a><a href="travel.html"' + (cur === 'travel' ? ' class="on"' : '') + '>' + ic('compass') + esc(L.travel) + '</a></div>';
  }

  /* ---------- মোডাল (পপআপ) ---------- */
  var mo;
  function initModal() {
    mo = document.createElement('div'); mo.className = 'mo'; mo.setAttribute('role', 'dialog'); mo.setAttribute('aria-modal', 'true');
    mo.innerHTML = '<div class="box"><button class="x" aria-label="Close">' + ic('close') + '</button><div id="mc"></div></div>';
    document.body.appendChild(mo);
    mo.addEventListener('click', function (e) { if (e.target === mo || e.target.closest('.x')) closeModal(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && mo.classList.contains('on')) closeModal(); });
  }
  function openModal(html) { $('#mc').innerHTML = html; mo.classList.add('on'); mo.scrollTop = 0; document.body.style.overflow = 'hidden'; $('.x', mo).focus(); }
  function closeModal() { mo.classList.remove('on'); document.body.style.overflow = ''; }

  /* popup photo gallery (opens the shared lightbox) */
  function galHTML(g, h) {
    if (!g || !g.length) return '';
    return (h ? '<h4 class="bh">' + esc(h) + '</h4>' : '') + '<div class="mgal">' + g.map(function (x, i) { return '<button type="button" class="mg" data-g="' + i + '" aria-label="Open photo: ' + esc(x.title || 'photo') + '">' + pic(x.file, x.title || '', 'camera') + '</button>'; }).join('') + '</div>';
  }
  function galBind(g, album) {
    $$('.mg', mo).forEach(function (b) {
      b.addEventListener('click', function () {
        U._lb = U._lb || U.makeLightbox();
        U._lb.open(g.map(function (x) { return { file: x.file, title: x.title || '', album: album || '' }; }), +b.dataset.g);
      });
    });
  }
  function badgesHTML(b, h) {
    if (!b || !b.length) return '';
    return (h ? '<h4 class="bh">' + esc(h) + '</h4>' : '') + '<div class="bdgs">' + b.map(function (x) { return '<span class="bdg ' + (x.tone || '') + '">' + ic(x.icon || 'users') + esc(x.t) + '</span>'; }).join('') + '</div>';
  }

  /* generic info popup */
  var REG = [];
  function reg(o) { REG.push(o); return REG.length - 1; }
  function listHTML(a) { return '<ul class="chk">' + a.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>'; }
  function pubIndex(id) { for (var i = 0; i < S.publications.length; i++) if (S.publications[i].id === id) return i; return -1; }
  function info(o) {
    var imgs = o.images || [];
    var h = (imgs[0] ? '<div class="mh">' + pic(imgs[0], o.title, o.art, '', o.tone) + '</div>' : '<div class="mh art ' + (o.tone || '') + '">' + cont('', 5) + U.art(o.art || 'compass') + '</div>') +
      '<div class="mb"><div class="tags">' + (o.kicker ? '<span class="chip">' + ic(o.kickerIcon || 'star') + esc(o.kicker) + '</span>' : '') + (o.chips || []).map(function (c) { return '<span class="chip">' + esc(c) + '</span>'; }).join('') + '</div><h2>' + esc(o.title) + '</h2>';
    if (o.sub) h += '<p class="au">' + esc(o.sub) + '</p>';
    if (o.meta && o.meta.length) h += '<div class="info">' + o.meta.map(function (m) { return '<div>' + ic(m[0]) + '<span>' + esc(m[1]) + '</span></div>'; }).join('') + '</div>';
    (o.text || []).forEach(function (p) { h += '<p>' + esc(p) + '</p>'; });
    (o.blocks || []).forEach(function (b) {
      if (!b) return;
      h += '<h4 class="bh">' + esc(b.h) + '</h4>';
      if (b.list && b.list.length) h += listHTML(b.list);
      if (b.chips && b.chips.length) h += '<div class="tags">' + b.chips.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>';
      if (b.roles && b.roles.length) h += '<div class="roles">' + b.roles.map(function (r) { return '<div class="role"><span>' + esc(r.role) + '</span>' + (r.when ? '<small>' + esc(r.when) + '</small>' : '') + '</div>'; }).join('') + '</div>';
      if (b.defs && b.defs.length) h += '<dl class="defs">' + b.defs.map(function (d) { return '<div><dt>' + esc(d[0]) + '</dt><dd>' + esc(d[1]) + '</dd></div>'; }).join('') + '</dl>';
    });
    h += badgesHTML(o.badges, o.badgesH);
    h += galHTML(o.gallery, o.galleryH);
    if (o.pubs && o.pubs.length) {
      h += '<h4 class="bh">Related papers</h4><div class="rels">' + o.pubs.map(function (id) {
        var i = pubIndex(id); if (i < 0) return ''; var p = S.publications[i];
        return '<button class="rel" type="button" data-pubid="' + esc(id) + '">' + ic('book') + '<span>' + esc(p.title) + '<small>' + esc(jshort(p.journal)) + ' · ' + esc(p.year) + '</small></span>' + ic('arrow') + '</button>';
      }).join('') + '</div>';
    }
    if (imgs.length > 1) h += '<div class="imgs">' + imgs.slice(1).map(function (f) { return '<div>' + pic(f, o.title, 'camera') + '</div>'; }).join('') + '</div>';
    if (o.soon) h += '<div class="note">' + ic('clock') + ' ' + esc(o.soonText || 'Photos and more details will be added here soon.') + '</div>';
    if (o.links && o.links.length) h += '<div class="row">' + o.links.map(function (l, i) { return '<a class="btn ' + (i ? '' : 'pri') + ' sm"' + (/^https?:/.test(l.href) ? ' target="_blank" rel="noopener"' : '') + ' href="' + esc(l.href) + '">' + ic(l.icon || 'arrow') + ' ' + esc(l.label) + '</a>'; }).join('') + '</div>';
    openModal(h + '</div>');
    $$('.rel', mo).forEach(function (b) { b.addEventListener('click', function () { pubModal(pubIndex(b.dataset.pubid)); }); });
    galBind(o.gallery, o.galleryAlbum);
  }

  /* ---------- প্রকাশনা ও কনফারেন্স কার্ড ---------- */
  var TAGMAP = [[/fuzzy/i, 'Fuzzy AHP'], [/\bAHP\b|analytical hierarchy/i, 'AHP'], [/flood/i, 'Flood'], [/groundwater/i, 'Groundwater'], [/landslide/i, 'Landslide'], [/soil erosion|RUSLE|erosion/i, 'Erosion'], [/hydrogen|solar|charging/i, 'Energy'], [/land surface temperature|heat|LST/i, 'Heat'], [/drought|SPEI/i, 'Drought'], [/suitab|dragon/i, 'Suitability'], [/water (access|quality)|hydro-chemical|drinking/i, 'Water quality'], [/multi-hazard/i, 'Multi-hazard'], [/air quality/i, 'Air quality'], [/GIS/i, 'GIS']];
  var TAGART = { 'Flood': 'flood', 'Groundwater': 'ground', 'Landslide': 'mountain', 'Heat': 'climate', 'Drought': 'climate', 'Energy': 'ev', 'Suitability': 'leaf', 'Water quality': 'river', 'Erosion': 'ground', 'Multi-hazard': 'flood', 'Air quality': 'air' };
  function tagsOf(title) { var o = []; TAGMAP.forEach(function (m) { if (m[0].test(title) && o.indexOf(m[1]) < 0) o.push(m[1]); }); return o.slice(0, 3); }
  function artOf(title) { var t = tagsOf(title); for (var i = 0; i < t.length; i++) if (TAGART[t[i]]) return TAGART[t[i]]; return 'chart'; }
  function stLabel(p) { return p.status === 'published' ? 'Published ' + p.year : p.status === 'review' ? 'Under review' : 'In preparation'; }
  function stIcon(p) { return p.status === 'published' ? 'check' : p.status === 'review' ? 'clock' : 'file'; }
  function jshort(j) { return j ? String(j).replace(/,.*$/, '') : ''; }
  function pubThumb(p, big) {
    return '<div class="thumb fit' + (big ? ' big' : '') + '"' + (p.image ? ' style="--bgi:url(\'' + esc(p.image) + '\')"' : '') + '>' + pic(p.image, p.title, artOf(p.title)) + '</div>';
  }
  function pubCard(p, i) {
    var tags = tagsOf(p.title);
    return '<article class="card pub lift btnlike rv" tabindex="0" role="button" data-pub="' + i + '" aria-label="Details: ' + esc(p.title) + '"><div class="tw">' + pubThumb(p) + '<span class="chip st-' + p.status + '">' + ic(stIcon(p)) + stLabel(p) + '</span>' + (p.q ? '<span class="q">' + esc(p.q.split(' · ')[0]) + '</span>' : '') + '</div>' +
      '<div class="cb"><h3>' + esc(p.title) + '</h3>' + (p.summary ? '<p class="clamp">' + esc(p.summary) + '</p>' : '') +
      '<div class="tags">' + tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>' +
      '<div class="cm"><span>' + esc(p.status === 'published' ? jshort(p.journal) : '') + '</span><span class="more">Details ' + ic('arrow') + '</span></div></div></article>';
  }
  function citation(p) {
    return p.authors + (p.year ? ' (' + p.year + ').' : '') + ' ' + p.title + '.' + (p.status === 'published' ? ' ' + p.journal + '.' : '') + (p.doi ? ' https://doi.org/' + p.doi : '');
  }
  function pubModal(i) {
    if (i < 0) return;
    var p = S.publications[i];
    var rows = [];
    if (p.area) rows.push(['pin', 'Study area', p.area]);
    if (p.method) rows.push(['layers', 'Method', p.method]);
    var h = '<div class="mh fitmh"' + (p.image ? ' style="--bgi:url(\'' + esc(p.image) + '\')"' : '') + '>' + pic(p.image, p.title, artOf(p.title)) + '</div><div class="mb"><div class="tags"><span class="chip st-' + p.status + '">' + ic(stIcon(p)) + stLabel(p) + '</span>' + (p.q ? '<span class="chip">' + ic('star') + esc(p.q) + '</span>' : '') + '</div>' +
      '<h2>' + esc(p.title) + '</h2><p class="au">' + bold(p.authors) + '</p>' +
      (p.status === 'published' ? '<div class="info"><div>' + ic('book') + '<span>' + esc(p.journal) + '</span></div><div>' + ic('cal') + '<span>' + esc(p.year) + '</span></div></div>' : '') +
      (p.summary ? '<p>' + esc(p.summary) + '</p>' : '<div class="note">' + ic('clock') + ' This manuscript is ' + (p.status === 'review' ? 'under review' : 'in preparation') + '. Details will be added after publication.</div>') +
      (rows.length ? '<dl class="defs">' + rows.map(function (r) { return '<div><dt>' + ic(r[0]) + r[1] + '</dt><dd>' + esc(r[2]) + '</dd></div>'; }).join('') + '</dl>' : '') +
      (p.findings && p.findings.length ? '<h4 class="bh">Key findings</h4>' + listHTML(p.findings) : '') +
      '<div class="tags" style="margin-top:18px">' + (p.keywords && p.keywords.length ? p.keywords : tagsOf(p.title)).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>' +
      '<div class="row">' + (p.doi ? '<a class="btn pri sm" target="_blank" rel="noopener" href="https://doi.org/' + esc(p.doi) + '">' + ic('ext') + ' Open article</a>' : '') + '<button class="btn sm" id="cpy">' + ic('copy') + ' Copy citation</button></div></div>';
    openModal(h);
    $('#cpy').addEventListener('click', function () { var b = this; (navigator.clipboard ? navigator.clipboard.writeText(citation(p)) : Promise.reject()).then(function () { b.innerHTML = ic('check') + ' Copied'; }, function () { b.innerHTML = 'Select & copy: ' + esc(citation(p)); }); });
  }
  function confParts(c) { var a = String(c.venue).split(' · '); return { venue: a[0], date: a[1] || '' }; }
  function confCard(c, i) {
    var v = confParts(c);
    return '<article class="card conf lift btnlike rv" tabindex="0" role="button" data-conf="' + i + '"><div class="top"><span class="yr">' + esc(c.year) + '</span>' + (c.award ? '<span class="ribbon">' + ic('award') + 'Award</span>' : '<span class="tag">' + ic('mic') + 'Conference</span>') + '</div>' +
      '<h3 class="clamp">' + esc(c.title) + '</h3><div class="ven">' + ic('pin') + '<span>' + esc(v.venue) + (v.date ? ' · ' + esc(v.date) : '') + '</span></div><span class="more">Details ' + ic('arrow') + '</span></article>';
  }
  function confModal(i) {
    var c = S.conferences[i], v = confParts(c), imgs = c.images || [];
    var h = (imgs[0] ? '<div class="mh">' + pic(imgs[0], c.title, 'people') + '</div>' : '<div class="mh art gold">' + cont('', 4) + U.art(c.award ? 'medal' : 'people') + '</div>') + '<div class="mb"><div class="tags"><span class="chip">' + ic('mic') + 'Conference paper</span>' + (c.award ? '<span class="ribbon">' + ic('award') + 'Presenting Paper Award</span>' : '') + '</div>' +
      '<h2>' + esc(c.title) + '</h2>' + (c.authors ? '<p class="au">' + bold(c.authors) + '</p>' : '') +
      '<div class="info"><div>' + ic('pin') + '<span>' + esc(v.venue) + '</span></div><div>' + ic('cal') + '<span>' + esc(v.date || c.year) + '</span></div></div>' +
      (c.desc ? '<p>' + esc(c.desc) + '</p>' : '') +
      (imgs.length > 1 ? '<div class="imgs">' + imgs.slice(1).map(function (f) { return '<div>' + pic(f, c.title, 'camera') + '</div>'; }).join('') + '</div>' : '') +
      galHTML(c.gallery, c.galleryH || 'Photos') +
      ((imgs.length || (c.gallery && c.gallery.length)) ? '' : '<div class="note">' + ic('clock') + ' Photos and more details from this conference will be added here.</div>') + '</div>';
    openModal(h);
    galBind(c.gallery, c.galleryAlbum || v.venue);
  }
  function bindCards(root) {
    function bind(sel, attr, fn) {
      $$(sel, root).forEach(function (el) { if (el._b) return; el._b = 1; var f = function () { fn(+el.getAttribute(attr)); }; el.addEventListener('click', f); el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); f(); } }); });
    }
    bind('[data-pub]', 'data-pub', pubModal);
    bind('[data-conf]', 'data-conf', confModal);
    bind('[data-info]', 'data-info', function (n) { info(REG[n]); });
  }
  /* কার্ডের ওপরের ছবি-আঁকা অংশ + popup বাঁধার attribute */
  function btn(o) { return ' tabindex="0" role="button" data-info="' + reg(o) + '"'; }

  var KT = { research: '', consulting: 'gold', tool: 'sky', media: 'rose', web: 'sand' };
  function projectCard(p) {
    return '<a class="card pcard lift rv" href="project.html?p=' + esc(p.id) + '"><div class="tw"><div class="thumb">' + pic(p.photo || p.map, p.title, p.art || 'folder', '', KT[p.kind] || '') + '</div><span class="chip st">' + esc(p.statusLabel) + '</span></div>' +
      '<div class="cb"><h3>' + esc(p.title) + '</h3><p class="clamp">' + esc(p.summary) + '</p><div class="tags">' + p.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div><span class="more">' + (p.period ? esc(p.period) + ' · ' : '') + 'View project ' + ic('arrow') + '</span></div></a>';
  }
  function statsHTML() {
    return '<section class="stats"><div class="wrap"><div class="grid">' + S.stats.map(function (s, i) {
      return '<div class="stat rv d' + i + '">' + ib(s.icon, ['', 'sky', 'gold', 'rose'][i % 4], 'lg') + '<div><b data-n="' + (s.auto === 'projects' ? S.projects.length : s.n) + '">' + (s.auto === 'projects' ? S.projects.length : s.n) + '</b><span class="l">' + esc(s.label) + '</span></div></div>';
    }).join('') + '</div></div></section>';
  }
  function phdBand() {
    var P = S.phd, st = S.stats || [];
    var nums = st.slice(0, 3).map(function (x) { return '<div class="p2s"><b>' + esc(x.n) + '</b><span>' + esc(x.label) + '</span></div>'; }).join('');
    return '<section><div class="wrap"><div class="phd2 rv">' + cont('', 4) +
      '<div class="p2t"><div class="p2pic">' + pic(P.photo, S.name, 'cert') + '</div><div class="p2h"><span class="eb2"><i></i>' + esc(P.kicker || 'Next step') + '</span><h3>' + esc(P.title) + '</h3><p>' + esc(P.text) + '</p>' +
      '<div class="p2b"><a class="btn pri" href="contact.html">' + ic('mail') + ' Get in touch</a>' + cvBtn() + '<a class="btn" href="research.html">' + ic('flask') + ' My research</a></div></div></div>' +
      '<div class="p2a">' + (P.areas || []).map(function (a, i) { return '<div class="p2c"><span class="ib ' + ['', 'sky', 'gold', 'rose', 'sand'][i % 5] + '">' + ic(a.icon) + '</span><div><b>' + esc(a.title) + '</b><p>' + esc(a.text) + '</p></div></div>'; }).join('') + '</div>' +
      '<div class="p2f"><div class="p2n">' + nums + '</div><div class="p2k"><small>' + esc(P.toolsH || 'Tools') + '</small><div class="tags">' + (P.tools || []).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div></div></div>' +
      '</div></div></section>';
  }

  /* ---------- অ্যানিমেশন ---------- */
  function reveal() {
    var els = $$('.rv:not(.in)');
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { threshold: .08, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (e) { io.observe(e); });
  }
  function count() {
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) {
        if (!x.isIntersecting) return; io.unobserve(x.target);
        var el = x.target, n = +el.dataset.n, i = 0, steps = 24;
        var t = setInterval(function () { i++; el.textContent = Math.round(n * i / steps); if (i >= steps) clearInterval(t); }, 45);
        setTimeout(function () { el.textContent = n; }, 1800);
      });
    }, { threshold: .6 });
    $$('[data-n]').forEach(function (e) { io.observe(e); });
  }

  /* ---------- পেজ বদলের নরম ট্রানজিশন ---------- */
  function pageFx() {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href]');
      if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if ((a.target && a.target !== '_self') || a.hasAttribute('download')) return;
      var h = a.getAttribute('href');
      if (!h || h.charAt(0) === '#' || /^(mailto:|tel:|javascript:)/i.test(h)) return;
      if (a.origin !== location.origin) return;
      if (a.pathname === location.pathname && a.search === location.search) return;
      e.preventDefault(); document.body.classList.add('pg-out');
      setTimeout(function () { location.href = a.href; }, 220);
    });
    window.addEventListener('pageshow', function (e) { if (e.persisted) document.body.classList.remove('pg-out'); });
  }

  /* বাইরে থেকে পেজ-ফাইলগুলো যা ব্যবহার করবে */
  U.S = S; U.$ = $; U.$$ = $$; U.esc = esc; U.param = param; U.ic = ic; U.ib = ib; U.cont = cont; U.UL = UL; U.wave = wave; U.pic = pic; U.artTile = artTile;
  U.SOC = SOC; U.socials = socials; U.bold = bold; U.cvBtn = cvBtn; U.sh = sh; U.phead = phead; U.band = band; U.ctaBand = ctaBand; U.lensSwitch = lensSwitch;
  U.openModal = openModal; U.closeModal = closeModal; U.info = info; U.reg = reg; U.btn = btn; U.bindCards = bindCards; U.listHTML = listHTML;
  U.galHTML = galHTML; U.galBind = galBind; U.pubCard = pubCard; U.pubModal = pubModal; U.pubIndex = pubIndex; U.pubThumb = pubThumb; U.tagsOf = tagsOf; U.artOf = artOf; U.jshort = jshort;
  U.KT = KT; U.confCard = confCard; U.projectCard = projectCard; U.statsHTML = statsHTML; U.phdBand = phdBand; U.NAV = NAV;
  U.pages = {};

  /* ---------- শুরু ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    setBg(); nav(); initModal();
    var pg = document.body.dataset.page;
    try { (U.pages[pg] || U.pages.home)(); } catch (err) { $('#app').innerHTML = '<section><div class="wrap"><p>Something went wrong while loading this page.</p></div></section>'; if (window.console) console.error(err); }
    footer(); bindCards(document); reveal(); count(); pageFx();
  });
})();
