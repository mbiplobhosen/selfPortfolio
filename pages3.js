/* ==========================================================================
   pages3.js — Photography, Travel blog, Contact পেজ। এখানে সাধারণত হাত দেওয়ার দরকার নেই।
   ========================================================================== */
(function () {
  'use strict';
  var U = window.UI, S = U.S, $ = U.$, $$ = U.$$, esc = U.esc, ic = U.ic, ib = U.ib, cont = U.cont, pic = U.pic, artTile = U.artTile, param = U.param;
  var sh = U.sh, phead = U.phead;
  var tags = function (a) { return (a || []).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join(''); };

  /* ---------- Photography + lightbox ---------- */
  function photography() {
    var P = S.photography;
    var me = P.photos.filter(function (p) { return p.title === 'Colour-fest photographer'; })[0];
    var chips = '<div class="rstats">' + [[P.photos.length, 'photographs', 'camera'], [P.albums.length, 'albums', 'layers']].map(function (x) { return '<span>' + ic(x[2]) + '<b>' + x[0] + '</b> ' + x[1] + '</span>'; }).join('') + '</div>';
    $('#app').innerHTML = phead('camera', P.kicker, P.headline, P.intro, chips, U.lensSwitch('photography'), ['drone', 'sun']) +
      '<section><div class="wrap">' + sh('Gallery', 'Selected <em>frames</em>', 'Browse by album, and tap any photograph to see it large.') +
      '<div class="tabs" id="atabs"><button class="on" data-a="all">All <small>' + P.photos.length + '</small></button>' + P.albums.map(function (a) { return '<button data-a="' + esc(a) + '">' + esc(a) + '</button>'; }).join('') + '</div>' +
      '<div class="masonry" id="gal"></div></div></section>' +
      '<section class="tint"><div class="wrap">' + sh('Behind the lens', 'Camera in <em>hand</em>', 'The gear I shoot with and the photographic societies I belong to.') +
      '<div class="behind"><div class="vf rv"><span class="plate p1"></span><span class="plate p2"></span>' + cont('', 6) + '<div class="vfimg land">' + pic(me ? me.file : 'photos/photo-21.jpg', 'Md. Biplob Hosen with a camera', 'camera') + '</div><i class="c tl"></i><i class="c tr"></i><i class="c bl"></i><i class="c br"></i></div>' +
      '<div class="rv"><div class="gears">' + S.gear.slice(0, 2).map(function (g) { return '<div class="gearm">' + ib(g.icon, g.tone, 'lg') + '<div><h4>' + esc(g.name) + '</h4><p>' + esc(g.note) + '</p></div></div>'; }).join('') + '</div>' +
      '<h4 class="bh" style="margin-top:26px">Photographic societies</h4><div class="roles big">' + P.roles.map(function (r) { return '<div class="role">' + ic('camera') + '<span><b>' + esc(r.role) + '</b><em>' + esc(r.org) + '</em></span>' + (r.years ? '<small>' + esc(r.years) + '</small>' : '') + '</div>'; }).join('') + '</div></div></div></div></section>';
    var list = P.photos.slice(), cur = 0;
    function cap(p) { return (p.place ? esc(p.place) + ' · ' : '') + esc(p.album); }
    function draw(a) {
      list = P.photos.filter(function (p) { return a === 'all' || p.album === a; });
      $('#gal').innerHTML = list.map(function (p, i) {
        return '<button class="gi" style="aspect-ratio:' + esc(p.r || '3/2') + '" data-i="' + i + '" aria-label="' + esc(p.title) + '">' + pic(p.file, p.title, 'camera') + '<span class="cap"><b>' + esc(p.title) + '</b><small>' + cap(p) + '</small></span></button>';
      }).join('');
      $$('#gal .gi').forEach(function (b) { b.addEventListener('click', function () { open(+b.dataset.i); }); });
    }
    draw('all');
    $$('#atabs button').forEach(function (b) { b.addEventListener('click', function () { $$('#atabs button').forEach(function (x) { x.classList.toggle('on', x === b); }); draw(b.dataset.a); }); });
    var lb = document.createElement('div'); lb.className = 'lb';
    lb.innerHTML = '<button class="x" aria-label="Close">' + ic('close') + '</button><button class="pv" aria-label="Previous">' + ic('back') + '</button><div class="stage"></div><div class="lc"></div><button class="nx" aria-label="Next">' + ic('arrow') + '</button>';
    document.body.appendChild(lb);
    function show() { var p = list[cur]; $('.stage', lb).innerHTML = pic(p.file, p.title, 'camera'); $('.lc', lb).innerHTML = '<b>' + esc(p.title) + '</b><div>' + cap(p) + '</div>'; }
    function open(i) { cur = i; show(); lb.classList.add('on'); document.body.style.overflow = 'hidden'; }
    function close() { lb.classList.remove('on'); document.body.style.overflow = ''; }
    function step(d) { cur = (cur + d + list.length) % list.length; show(); }
    $('.x', lb).onclick = close; $('.pv', lb).onclick = function () { step(-1); }; $('.nx', lb).onclick = function () { step(1); };
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) { if (!lb.classList.contains('on')) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') step(-1); if (e.key === 'ArrowRight') step(1); });
  }

  /* ---------- Travel blog ---------- */
  function travel() {
    var T = S.travel, lang = param('lang') === 'bn' ? 'bn' : 'en', id = param('p') || param('t');
    var L = function (o) { return o ? (o[lang] || o.en || o.bn || '') : ''; };
    var LA = function (o) { return o ? ((o[lang] && o[lang].length) ? o[lang] : (o.en && o.en.length ? o.en : (o.bn || []))) : []; };
    var cls = lang === 'bn' ? ' bn' : '';
    document.body.classList.toggle('bn-on', lang === 'bn');
    var langSw = '<div class="lang" id="lang"><button data-l="en"' + (lang === 'en' ? ' class="on"' : '') + '>English</button><button data-l="bn"' + (lang === 'bn' ? ' class="on"' : '') + '>বাংলা</button></div>';
    function fdate(d) {
      if (!d) return ''; var dt = new Date(d + (d.length === 7 ? '-01' : '') + 'T00:00:00');
      if (isNaN(dt)) return d;
      try { return dt.toLocaleDateString(lang === 'bn' ? 'bn-BD' : 'en-GB', { day: d.length > 7 ? 'numeric' : undefined, month: 'long', year: 'numeric' }); } catch (e) { return d; }
    }
    function mins(t) { var w = LA(t.body).join(' ').split(/\s+/).length; return Math.max(1, Math.round(w / 200)); }
    function readTxt(t) { return t.soon ? '' : (lang === 'bn' ? mins(t) + ' মিনিটের পাঠ' : mins(t) + ' min read'); }
    function card(t) {
      return '<a class="card tcard lift rv' + (t.soon ? ' soon' : '') + '" href="travel.html?p=' + esc(t.id) + '&lang=' + lang + '"><div class="tw"><div class="thumb">' + pic(t.cover, L(t.title), 'compass', '', 'sky') + '</div><span class="chip">' + ic('pin') + esc(t.place || L(t.region)) + '</span>' + (t.soon ? '<span class="ribbon cur">' + ic('clock') + (lang === 'bn' ? 'শিগগিরই আসছে' : 'Story coming soon') + '</span>' : '') + '</div>' +
        '<div class="cb' + cls + '"><span class="meta">' + [fdate(t.date) || t.when, L(t.region), readTxt(t)].filter(Boolean).map(esc).join(' · ') + '</span><h3>' + esc(L(t.title)) + '</h3><p class="clamp">' + esc(L(t.summary)) + '</p><div class="tags">' + tags(t.tags) + '</div><span class="more">' + (lang === 'bn' ? 'গল্পটি পড়ুন' : 'Read story') + ' ' + ic('arrow') + '</span></div></a>';
    }
    var tr = T.posts.filter(function (x) { return x.id === id; })[0];
    if (tr) {
      document.title = L(tr.title) + ' — ' + S.name;
      var meta = '<div class="pmeta">' + [['cal', fdate(tr.date) || tr.when], ['pin', tr.place], ['clock', readTxt(tr)]].filter(function (m) { return m[1]; }).map(function (m) { return '<span>' + ic(m[0]) + esc(m[1]) + '</span>'; }).join('') + '</div>';
      var body = LA(tr.body).map(function (s) {
        s = String(s);
        if (s.indexOf('## ') === 0) return '<h2>' + esc(s.slice(3)) + '</h2>';
        if (s.indexOf('> ') === 0) return '<blockquote>' + ic('quote') + '<p>' + esc(s.slice(2)) + '</p></blockquote>';
        if (s.indexOf('img:') === 0) { var a = s.slice(4).split('|'); return '<figure class="pfig">' + pic(a[0], a[1] || '', 'compass', '', 'sky') + (a[1] ? '<figcaption>' + esc(a[1]) + '</figcaption>' : '') + '</figure>'; }
        return '<p>' + esc(s) + '</p>';
      }).join('');
      var idx = T.posts.indexOf(tr), prev = T.posts[idx - 1], next = T.posts[idx + 1];
      var pn = function (t, dir) { return t ? '<a class="pn ' + dir + '" href="travel.html?p=' + esc(t.id) + '&lang=' + lang + '">' + (dir === 'p' ? ic('back') : '') + '<span><small>' + (dir === 'p' ? (lang === 'bn' ? 'আগের গল্প' : 'Previous story') : (lang === 'bn' ? 'পরের গল্প' : 'Next story')) + '</small>' + esc(L(t.title)) + '</span>' + (dir === 'n' ? ic('arrow') : '') + '</a>' : '<span></span>'; };
      $('#app').innerHTML = phead('compass', (lang === 'bn' ? 'ভ্রমণ · ' : 'Travel · ') + L(tr.region), L(tr.title), L(tr.summary), meta + '<div style="margin-top:18px">' + langSw + '</div>', '<a class="crumb" href="travel.html?lang=' + lang + '">' + ic('back') + ' ' + (lang === 'bn' ? 'সব গল্প' : 'All stories') + '</a>' + U.lensSwitch('travel'), ['pin', 'mountain']) +
        '<section><div class="wrap"><article class="post' + cls + '"><div class="figure">' + pic(tr.cover, L(tr.title), 'compass', '', 'sky') + '</div>' + body +
        (tr.photos && tr.photos.length ? '<div class="masonry pgal">' + tr.photos.map(function (f) { return '<div class="gi">' + pic(f, L(tr.title), 'camera') + '</div>'; }).join('') + '</div>' : '') +
        (tr.tags && tr.tags.length ? '<div class="tags" style="margin-top:30px">' + tags(tr.tags) + '</div>' : '') +
        '<div class="pns">' + pn(prev, 'p') + pn(next, 'n') + '</div></article></div></section>';
    } else {
      var posts = T.posts, real = posts.filter(function (p) { return !p.soon; }), feat = real[0] || posts[0], rest = posts.filter(function (p) { return p !== feat; });
      var places = []; posts.forEach(function (p) { if (p.place && places.indexOf(p.place) < 0) places.push(p.place); });
      $('#app').innerHTML = phead('compass', T.kicker, T.headline, L(T.intro), '<div style="margin-top:20px">' + langSw + '</div>', U.lensSwitch('travel'), ['pin', 'mountain']) +
        '<section><div class="wrap">' + sh(lang === 'bn' ? 'সাম্প্রতিক' : 'Latest', lang === 'bn' ? 'সবচেয়ে নতুন <em>গল্প</em>' : 'The newest <em>story</em>', '') +
        '<a class="feat card lift rv" href="travel.html?p=' + esc(feat.id) + '&lang=' + lang + '"><div class="tw"><div class="thumb">' + pic(feat.cover, L(feat.title), 'compass', '', 'sky') + '</div>' + (feat.soon ? '<span class="ribbon cur">' + ic('clock') + (lang === 'bn' ? 'শিগগিরই আসছে' : 'Story coming soon') + '</span>' : '') + '</div><div class="cb' + cls + '"><span class="chip">' + ic('pin') + esc(feat.place || L(feat.region)) + '</span><span class="meta">' + [fdate(feat.date) || feat.when, L(feat.region), readTxt(feat)].filter(Boolean).map(esc).join(' · ') + '</span><h3>' + esc(L(feat.title)) + '</h3><p>' + esc(L(feat.summary)) + '</p><div class="tags">' + tags(feat.tags) + '</div><span class="btn pri sm">' + (lang === 'bn' ? 'গল্পটি পড়ুন' : 'Read the story') + ' ' + ic('arrow') + '</span></div></a>' +
        (rest.length ? '<div class="cards c3" style="margin-top:34px">' + rest.map(card).join('') + '</div>' : '') + '</div></section>' +
        '<section class="tint"><div class="wrap">' + sh(lang === 'bn' ? 'পথচলা' : 'Journeys', lang === 'bn' ? 'যেসব জায়গায় <em>গিয়েছি</em>' : 'Places I have <em>been</em>', '') +
        '<div class="tags places rv">' + places.map(function (p) { return '<span class="chip">' + ic('pin') + esc(p) + '</span>'; }).join('') + '</div></div></section>' +
        U.band('New stories are on the way', 'I add a post after every trip, in English and in Bangla. In the meantime, the photography gallery has frames from many of these places.', '<a class="btn pri" href="photography.html">' + ic('camera') + ' Open the gallery</a>' + (S.links.instagram ? '<a class="btn" target="_blank" rel="noopener" href="' + esc(S.links.instagram) + '">' + ic('insta') + ' Instagram</a>' : ''));
    }
    $$('#lang button').forEach(function (b) { b.addEventListener('click', function () { var u = new URL(location.href); u.searchParams.set('lang', b.dataset.l); location.href = u.toString(); }); });
  }

  /* ---------- Contact ---------- */
  function contact() {
    var C = S.contact;
    $('#app').innerHTML = phead('mail', C.kicker, C.headline, C.text, '', '', ['send', 'pin']) +
      '<section class="csec"><div class="wrap ct"><div class="ccol">' +
      '<div class="ccard rv">' + cont('', 4) + '<h3>Say hello</h3><div class="crow"><a class="cm" href="mailto:' + esc(S.email) + '">' + ib('mail', '', '') + '<span><small>Email</small>' + esc(S.email) + '</span></a><button class="cp" id="cpm" type="button" aria-label="Copy email">' + ic('copy') + '</button></div>' +
      '<div class="crow">' + ib('pin', 'gold', '') + '<span><small>Based in</small>' + esc(S.location) + '</span></div>' +
      '<div class="crow">' + ib('clock', 'sky', '') + '<span><small>Reply time</small>Usually within a few days</span></div></div>' +
      '<h4 class="bh rv" style="margin-top:28px">What would you like to talk about?</h4><div class="topics rv">' + C.topics.map(function (t, i) { return '<button type="button" class="tp' + (i ? '' : ' on') + '" data-k="' + esc(t.key) + '">' + ib(t.icon, ['', 'gold', 'sky'][i % 3], '') + '<span><b>' + esc(t.key) + '</b><small>' + esc(t.text) + '</small></span></button>'; }).join('') + '</div>' +
      '<h4 class="bh rv" style="margin-top:28px">Find me elsewhere</h4><div class="sl rv">' + U.SOC.filter(function (s) { return S.links[s[0]]; }).map(function (s) { return '<a href="' + esc(S.links[s[0]]) + '" target="_blank" rel="noopener">' + ic(s[2]) + s[1] + '</a>'; }).join('') + '</div>' + (S.cv ? '<div class="rv" style="margin-top:20px">' + U.cvBtn('pri') + '</div>' : '') + '</div>' +
      '<form class="f rv" id="cf"><div class="fplane">' + U.art('plane') + '</div><h3>Send a message</h3><p class="fs">Fill in the form and your email app will open with the message ready to send.</p>' +
      '<label>Your name<span class="fi">' + ic('user') + '<input name="name" required autocomplete="name" placeholder="Your full name"></span></label>' +
      '<label>Your email<span class="fi">' + ic('mail') + '<input name="email" type="email" required autocomplete="email" placeholder="you@example.com"></span></label>' +
      '<label>What is this about?<span class="fi">' + ic('target') + '<select name="category" id="cat">' + C.topics.map(function (t) { return '<option>' + esc(t.key) + '</option>'; }).join('') + '</select></span></label>' +
      '<label>Message<span class="fi ta">' + ic('news') + '<textarea name="message" required placeholder="Write your message here"></textarea></span></label><button class="btn pri" type="submit">' + ic('send') + ' Send message</button><div class="fm" id="fm"></div></form></div></section>';
    $$('.tp').forEach(function (b) { b.addEventListener('click', function () { $$('.tp').forEach(function (x) { x.classList.toggle('on', x === b); }); $('#cat').value = b.dataset.k; }); });
    $('#cat').addEventListener('change', function () { var v = this.value; $$('.tp').forEach(function (x) { x.classList.toggle('on', x.dataset.k === v); }); });
    $('#cpm').addEventListener('click', function () { var b = this; (navigator.clipboard ? navigator.clipboard.writeText(S.email) : Promise.reject()).then(function () { b.innerHTML = ic('check'); b.classList.add('ok'); setTimeout(function () { b.innerHTML = ic('copy'); b.classList.remove('ok'); }, 1800); }, function () { location.href = 'mailto:' + S.email; }); });
    $('#cf').addEventListener('submit', function (e) {
      e.preventDefault();
      var f = e.target, d = {}; new FormData(f).forEach(function (v, k) { d[k] = v; });
      var fm = $('#fm');
      if (S.formEndpoint) {
        fm.className = 'fm'; fm.textContent = 'Sending…';
        fetch(S.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(d) })
          .then(function (r) { if (!r.ok) throw 0; fm.className = 'fm ok'; fm.textContent = 'Thank you — your message has been sent.'; f.reset(); })
          .catch(function () { fm.className = 'fm er'; fm.textContent = 'Could not send. Please email me directly at ' + S.email; });
      } else {
        location.href = 'mailto:' + S.email + '?subject=' + encodeURIComponent('[' + d.category + '] from ' + d.name) + '&body=' + encodeURIComponent(d.message + '\n\n— ' + d.name + ' (' + d.email + ')');
        fm.className = 'fm ok'; fm.textContent = 'Opening your email app…';
      }
    });
  }

  U.pages.photography = photography; U.pages.travel = travel; U.pages.contact = contact;
})();
