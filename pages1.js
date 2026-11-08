/* ==========================================================================
   pages1.js — Home, About, Experience, Skills পেজ। এখানে সাধারণত হাত দেওয়ার দরকার নেই।
   ========================================================================== */
(function () {
  'use strict';
  var U = window.UI, S = U.S, $ = U.$, esc = U.esc, ic = U.ic, ib = U.ib, cont = U.cont, UL = U.UL, wave = U.wave, pic = U.pic, artTile = U.artTile;
  var sh = U.sh, phead = U.phead, btn = U.btn, bindCards = U.bindCards;
  var TONES = ['', 'sky', 'gold', 'rose', 'sand'];
  var tone = function (i) { return TONES[i % TONES.length]; };
  var tags = function (a, cls) { return (a || []).map(function (t) { return '<span class="' + (cls || 'tag') + '">' + esc(t) + '</span>'; }).join(''); };
  var more = function (t) { return '<span class="more">' + (t || 'Details') + ' ' + ic('arrow') + '</span>'; };

  function interestInfo(it) {
    return { art: it.art, tone: it.tone, kicker: 'Field of interest', kickerIcon: 'target', title: it.title, text: it.text,
      blocks: [{ h: 'What it involves', list: it.points }, { h: 'Tools and methods', chips: it.tools }, it.work && it.work.length ? { h: 'In my work', list: it.work } : null],
      pubs: it.pubs, links: [{ label: 'See my research', href: 'research.html', icon: 'flask' }] };
  }
  U.interestInfo = interestInfo;
  function interestCard(it, compact) {
    return '<article class="card ifc lift rv' + (compact ? ' sm' : '') + '"' + btn(interestInfo(it)) + '><div class="aw">' + artTile(it.art, it.tone) + '</div><div class="cb"><h3>' + esc(it.title) + '</h3><p>' + esc(it.short) + '</p>' + more('Explore') + '</div></article>';
  }

  /* ---------- হোম ---------- */
  function portraitHero() {
    var f = [['drop', 'Hydrology', ''], ['layers', 'GIS & Remote Sensing', 'sky'], ['camera', 'Photography', 'gold'], ['drone', 'Drone survey', 'rose']];
    return '<div class="pf rv in">' + cont('', 6) + '<span class="lay l1"></span><span class="lay l2"></span><div class="arch">' + pic(S.portrait, S.name, 'people') + '</div>' +
      f.map(function (x, i) { return '<div class="float f' + (i + 1) + '">' + ib(x[0], x[2]) + x[1] + '</div>'; }).join('') + '</div>';
  }
  function home() {
    var h = S.hero, hl = esc(h.headline).replace(/(rivers)/i, '<em>$1' + UL + '</em>');
    var ph = S.photography.photos.slice(0, 8);
    var tiles = [['about.html', 'About', 'user', '', 'The story behind the work'], ['experience.html', 'Experience', 'briefcase', 'sky', 'Roles, organisations, field work'], ['skills.html', 'Skills', 'tools', 'gold', 'Tools, methods and training'], ['research.html', 'Research', 'flask', 'rose', 'Papers, thesis and conferences'],
      ['projects.html', 'Projects', 'folder', 'sand', 'Studies, tools and a documentary'], ['photography.html', S.lens.photography, 'camera', 'gold', 'Frames from rivers to faces'], ['travel.html', S.lens.travel, 'compass', 'sky', 'Stories from the road'], ['contact.html', 'Contact', 'mail', 'rose', 'Say hello']];
    $('#app').innerHTML =
      '<section class="hero">' + cont('c1', 1) + cont('c2 gold', 9) + '<span class="blob b1"></span><span class="blob b2"></span><div class="dots" style="left:4%;top:8%;width:160px;height:160px"></div><div class="dots" style="right:3%;bottom:16%;width:120px;height:120px"></div>' + wave() + '<div class="wrap"><div class="hl">' +
      '<div class="hello"><span class="hi">' + esc(h.hello) + '</span><b>' + esc(S.name) + '</b>' + UL + '</div>' +
      '<div class="kicker">' + ic('flask') + esc(h.kicker) + '</div><h1>' + hl + '</h1><p class="sub">' + esc(h.sub) + '</p>' +
      '<div class="chips">' + h.chips.map(function (c) { return '<span class="chip">' + ic('check') + esc(c) + '</span>'; }).join('') + '</div>' +
      '<div class="cta"><a class="btn pri" href="research.html">' + ic('flask') + ' Explore my research</a><a class="btn" href="contact.html">' + ic('mail') + ' Contact me</a>' + U.cvBtn() + '</div><div class="soc">' + U.socials() + '</div></div>' + portraitHero() + '</div></section>' +
      U.statsHTML() +
      '<section class="foi"><div class="wrap">' + sh('Field of interest', 'Where my <em>curiosity</em> flows', 'Eight topics I keep coming back to. Open any card to read more.') + '<div class="cards c4 sm-2">' + S.interests.map(function (it) { return interestCard(it); }).join('') + '</div>' +
      '<p class="ctr" style="margin-top:36px"><a class="btn" href="research.html">' + ic('flask') + ' See my research ' + ic('arrow') + '</a></p></div></section>' +
      '<section class="tint"><div class="wrap">' + sh('Photography', 'Frames from the <em>field</em>', S.photography.intro) +
      '<div class="mosaic" id="mos">' + ph.map(function (p, i) { return '<button type="button" class="mi rv" data-i="' + i + '" aria-label="Open photo: ' + esc(p.title) + '">' + pic(p.file, p.title, 'camera') + '<span>' + ic('camera') + esc(p.title) + '</span></button>'; }).join('') + '</div>' +
      '<p class="ctr" style="margin-top:34px"><a class="btn pri" href="photography.html">' + ic('camera') + ' See the full gallery</a></p></div></section>' +
      '<section><div class="wrap">' + sh('Explore', 'Wander through the <em>portfolio</em>', '') + '<div class="tiles">' + tiles.map(function (t) {
        return '<a class="tile lift rv" href="' + t[0] + '">' + ib(t[2], t[3], 'lg') + '<span><b>' + esc(t[1]) + '</b><small>' + esc(t[4]) + '</small></span>' + ic('arrow') + '</a>';
      }).join('') + '</div></div></section>' +
      U.phdBand();
    var LB = U.makeLightbox();
    U.$$('#mos .mi').forEach(function (b) { b.addEventListener('click', function () { LB.open(S.photography.photos, +b.dataset.i); }); });
  }

  /* ---------- About ---------- */
  function frame() {
    return '<div class="vf rv"><span class="plate p1"></span><span class="plate p2"></span>' + cont('', 6) + '<div class="vfimg">' + pic(S.aboutPhoto, S.name, 'people') + '</div><i class="c tl"></i><i class="c tr"></i><i class="c bl"></i><i class="c br"></i><span class="dotsq"></span></div>';
  }
  function zigzag() {
    var L = [], R = [];
    S.journey.forEach(function (j, i) {
      var o = { art: j.art, tone: tone(i), kicker: j.year, kickerIcon: 'cal', title: j.title, text: [].concat(j.text), blocks: [j.points ? { h: 'Highlights', list: j.points } : null], gallery: j.gallery, galleryH: j.galleryH, galleryAlbum: j.galleryAlbum };
      var c = '<article class="card zc ' + (i % 2 ? 'r' : 'l') + (j.now ? ' now' : '') + ' rv" style="--o:' + i + '"' + btn(o) + '><span class="yr">' + esc(j.year) + '</span><div class="zb"><span class="zart ' + tone(i) + '">' + U.art(j.art) + '</span><div><h4>' + esc(j.title) + '</h4><p>' + esc(j.short) + '</p>' + more() + '</div></div></article>';
      (i % 2 ? R : L).push(c);
    });
    return '<div class="zz">' + cont('', 9) + '<div class="zl">' + L.join('') + '</div><div class="zr">' + R.join('') + '</div></div>';
  }
  function about() {
    var st = S.story, fic = { 'Based in': 'pin', 'Position': 'briefcase', 'Degree': 'grad', 'Looking for': 'target', 'Languages': 'globe' };
    $('#app').innerHTML = phead('user', '', st.headline, '', '', '', ['camera', 'drop']) +
      '<section><div class="wrap about"><div class="al">' + frame() + '</div><div class="af">' +
      '<div class="facts rv">' + st.facts.map(function (f) { return '<div class="fact">' + ib(fic[f[0]] || 'star') + '<div><small>' + esc(f[0]) + '</small><span class="v">' + esc(f[1]) + '</span></div></div>'; }).join('') + '</div></div><div class="ar">' +
      '<div class="prose rv">' + st.paragraphs.map(function (p, i) { return '<p' + (i === 0 ? ' class="lede"' : '') + '>' + esc(p) + '</p>'; }).join('') + '</div>' +
      '<div class="lines rv">' + st.lines.map(function (l) { return '<div class="line">' + ib(l.icon, '', '') + '<span>' + esc(l.text) + '</span></div>'; }).join('') + '</div>' +
      '<div class="rv" style="margin-top:28px;display:flex;gap:12px;flex-wrap:wrap">' + U.cvBtn('pri') + '<a class="btn" href="contact.html">' + ic('mail') + ' Contact me</a></div></div></div></section>' +
      '<section class="tint"><div class="wrap">' + sh('Education', 'Where I <em>studied</em>', 'Open a card for the details.') + '<div class="cards c2">' + S.education.map(function (e, i) {
        var o = { art: e.art, tone: tone(i + 1), kicker: e.when, kickerIcon: 'cal', title: e.title, sub: e.org, text: e.text, blocks: [{ h: 'Highlights', list: e.points }], badges: e.badges, badgesH: e.badgesH, gallery: e.gallery, galleryH: e.galleryH, galleryAlbum: e.galleryAlbum };
        return '<article class="card edu lift rv"' + btn(o) + '><div class="aw">' + artTile(e.art, tone(i + 1)) + '</div><div class="cb"><span class="when">' + esc(e.when) + '</span><h3>' + esc(e.title) + '</h3><div class="org">' + esc(e.org) + '</div><p>' + esc(e.note) + '</p>' + more() + '</div></article>';
      }).join('') + '</div></div></section>' +
      '<section><div class="wrap">' + sh('More about me', 'Beyond the <em>lab</em>', 'The other half of the picture. Open a card to read more.') + '<div class="cards c3' + (S.beyond.length % 3 === 2 ? ' c5' : '') + '">' + S.beyond.map(function (b, i) {
        var o = { art: b.art, tone: b.tone, kicker: 'Beyond the lab', kickerIcon: 'star', title: b.title, text: b.text, blocks: [b.points ? { h: 'Highlights', list: b.points } : null, b.chips ? { h: 'Focus', chips: b.chips } : null], links: b.link ? [b.link] : [] };
        return '<article class="card ifc lift rv"' + btn(o) + '><div class="aw">' + artTile(b.art, b.tone) + '</div><div class="cb"><h3>' + esc(b.title) + '</h3><p>' + esc(b.short) + '</p>' + more('Read more') + '</div></article>';
      }).join('') + '</div></div></section>' +
      '<section class="tint jr-sec"><div class="wrap">' + sh('Journey', 'How I <em>got here</em>', 'The milestones so far. Open any block for the details.') + zigzag() + '</div></section>';
  }

  /* ---------- Experience ---------- */
  function trainingSection() {
    var T = S.trainings || [];
    if (!T.length) return '';
    return '<section class="tint" id="training"><div class="wrap">' + sh('Training & workshops', 'Training I have <em>delivered</em>', S.trainingIntro) +
      '<div class="tags tp rv">' + (S.trainTopics || []).map(function (t) { return '<span class="chip">' + ic('check') + esc(t) + '</span>'; }).join('') + '</div>' +
      '<div class="cards c3">' + T.map(function (t, i) {
        var o = { art: t.art, tone: t.tone, kicker: t.when, kickerIcon: 'cal', title: t.title, sub: t.org, text: t.text, chips: [t.role, t.mode].filter(Boolean), blocks: [t.points ? { h: 'Highlights', list: t.points } : null], links: t.link ? [t.link] : [] };
        return '<article class="card ifc lift rv"' + btn(o) + '><div class="aw">' + artTile(t.art, t.tone) + '<span class="ribbon cur">' + ic('cal') + esc(t.when) + '</span></div><div class="cb"><span class="when">' + esc(t.role) + '</span><h3>' + esc(t.title) + '</h3><p>' + esc(t.org) + (t.mode ? ' · ' + esc(t.mode) : '') + '</p>' + more() + '</div></article>';
      }).join('') + '</div></div></section>';
  }
  function experience() {
    var X = S.expIntro, A = S.awards;
    var jump = '<div class="jump">' + [['#work', 'Work', 'briefcase'], ['#training', 'Training', 'mic'], ['#orgs', 'Organisations', 'users'], ['#field', 'Field experience', 'leaf'], ['#recognition', 'Recognition', 'award']].map(function (j) { return '<a href="' + j[0] + '">' + ic(j[2]) + j[1] + '</a>'; }).join('') + '</div>';
    $('#app').innerHTML = phead('briefcase', X.kicker, X.headline, X.sub, jump, '', ['flask', 'award']) +
      '<section id="work"><div class="wrap">' + sh('Work experience', 'Where I <em>work</em>', 'Research and consulting roles. Open a card for the details and related projects.') + '<div class="cards ' + (S.experience.length % 3 === 1 ? 'c2' : 'c3') + '">' + S.experience.map(function (e, i) {
        var o = { art: e.art, tone: tone(i), kicker: e.when, kickerIcon: 'cal', title: e.title, sub: e.org, text: e.text, blocks: [e.list ? { h: 'Projects I worked on', list: e.list } : null, e.points && !e.list ? { h: 'Highlights', list: e.points } : null, e.tags ? { h: 'Focus', chips: e.tags } : null], links: e.links ? e.links.map(function (l, k) { return { label: (k === 0 ? 'Related project: ' : '') + l.label, href: l.href, icon: l.icon }; }) : (e.link ? [e.link] : []) };
        return '<article class="card wk lift rv"' + btn(o) + '><div class="aw">' + artTile(e.art, tone(i)) + (e.now ? '<span class="ribbon cur">' + ic('check') + 'Current</span>' : '') + '</div><div class="cb"><span class="when">' + esc(e.when) + '</span><h3>' + esc(e.title) + '</h3><div class="org">' + esc(e.org) + '</div><div class="tags">' + tags(e.tags) + '</div>' + more(e.links ? 'Details and related projects' : 'Details') + '</div></article>';
      }).join('') + '</div></div></section>' + trainingSection() +
      '<section id="orgs"><div class="wrap">' + sh('Leadership & volunteering', 'Organisations I have been <em>part of</em>', 'Photography societies, student and environmental organisations.') + '<div class="cards c2">' + S.leadership.map(function (l, i) {
        var o = { art: l.art, tone: l.tone, kicker: l.when || 'Organisation', kickerIcon: 'users', title: l.org, text: l.more, blocks: [l.roles && l.roles.length ? { h: 'My roles', roles: l.roles } : null], images: l.images, soon: !(l.images && l.images.length), links: l.link ? [l.link] : [] };
        return '<article class="card org lift rv"' + btn(o) + '><div class="aw">' + artTile(l.art, l.tone) + '</div><div class="cb"><h3>' + esc(l.org) + '</h3>' + (l.when ? '<span class="meta">' + esc(l.when) + '</span>' : '') + '<p>' + esc(l.text) + '</p><div class="tags">' + (l.roles || []).map(function (r) { return '<span class="tag">' + esc(r.role) + (r.when ? ' · ' + esc(r.when) : '') + '</span>'; }).join('') + '</div>' + more() + '</div></article>';
      }).join('') + '</div></div></section>' +
      '<section class="tint" id="field"><div class="wrap">' + sh('Field experience', 'Learning on the <em>ground</em>', 'The surveys and field work behind the data. Open a card to see what each one involves.') + '<div class="cards c4">' + S.fieldwork.map(function (f, i) {
        var o = { art: f.art, tone: f.tone, kicker: 'Field experience', kickerIcon: 'leaf', title: f.title, text: [f.text], blocks: [{ h: 'What it involves', list: f.involves }, { h: 'What it builds', list: f.builds }] };
        return '<article class="card ifc lift rv"' + btn(o) + '><div class="aw">' + artTile(f.art, f.tone) + '</div><div class="cb"><h3>' + esc(f.title) + '</h3><p>' + esc(f.text) + '</p>' + more('What I learned') + '</div></article>';
      }).join('') + '</div></div></section>' +
      '<section id="recognition"><div class="wrap">' + sh('Recognition', 'Awards & <em>memberships</em>', '') + '<div class="cards c2">' + A.map(function (a, i) {
        var o = { art: 'medal', tone: 'gold', kicker: a.when, kickerIcon: 'cal', title: a.title, sub: a.where, text: a.paper ? ['Awarded for the conference paper:'] : [], blocks: [a.paper ? { h: 'Paper', list: [a.paper] } : null], gallery: a.gallery, galleryH: a.galleryH, galleryAlbum: a.galleryAlbum };
        return '<article class="card aw2 lift rv"' + btn(o) + '><span class="medal">' + U.art('medal') + '</span><div><span class="when">' + esc(a.when) + '</span><h3>' + esc(a.title) + '</h3><p>' + esc(a.where) + '</p>' + more() + '</div></article>';
      }).join('') + '</div>' +
      '<div class="tags mem rv">' + S.memberships.map(function (m) { return '<span class="chip">' + ic('users') + esc(m) + '</span>'; }).join('') + '</div>' +
      '<article class="card exp rv" style="margin-top:22px">' + ib('shield', 'sky', 'lg') + '<div><span class="when">Referees</span><h3>' + esc(S.referees) + '</h3><p>References are shared on request.</p></div></article></div></section>' + U.ctaBand();
  }

  /* ---------- Skills ---------- */
  function skills() {
    $('#app').innerHTML = phead('tools', 'Skills & Training', 'Tools, methods and the craft behind my work', 'From satellite data and hydrological models to a drone, a camera and a code editor: the software, methods and training I rely on, and what I use each one for.', '', '', ['code', 'layers']) +
      '<section><div class="wrap">' + sh('Toolbox', 'What I can <em>do</em>', S.skills.length + ' groups of tools and methods. Open a card to see each tool and how I use it.') + '<div class="cards c4">' +
      S.skills.map(function (k, i) {
        var o = { art: k.art, tone: k.tone, kicker: 'Skills', kickerIcon: 'tools', title: k.group, text: [k.used], blocks: [{ h: 'Tools', defs: k.tools }, { h: 'How I use it', list: k.uses }], pubs: k.pubs, links: k.link ? [k.link] : [] };
        return '<article class="card skill lift rv"' + btn(o) + '><div class="aw">' + artTile(k.art, k.tone) + '</div><div class="cb"><h3>' + esc(k.group) + '</h3><div class="it">' + k.items.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</div><p>' + esc(k.used) + '</p>' + more() + '</div></article>';
      }).join('') + '</div></div></section>' +
      '<section class="tint"><div class="wrap">' + sh('Equipment & level', 'Gear and <em>programming</em>', '') + '<div class="cards c3">' + S.gear.map(function (g) {
        var o = { art: g.art, tone: g.tone, kicker: 'Equipment', kickerIcon: g.icon, title: g.name, sub: g.note, text: g.text, links: g.link ? [g.link] : [] };
        return '<article class="card ifc lift rv"' + btn(o) + '><div class="aw">' + artTile(g.art, g.tone) + '</div><div class="cb"><h3>' + esc(g.name) + (g.level ? ' <span class="lvl"><i class="on"></i><i class="on"></i><i></i></span>' : '') + '</h3><p>' + esc(g.note) + '</p>' + more() + '</div></article>';
      }).join('') + '</div></div></section>' +
      '<section><div class="wrap">' + sh('Training', 'Courses and <em>training</em>', '') + '<div class="cards c3">' + S.training.map(function (t, i) {
        var o = { art: t.art, tone: tone(i), kicker: t.when, kickerIcon: 'cal', title: t.title, sub: t.where, text: [t.text] };
        return '<article class="card ifc lift rv"' + btn(o) + '><div class="aw">' + artTile(t.art, tone(i)) + '<span class="ribbon cur">' + ic('cal') + esc(t.when) + '</span></div><div class="cb"><h3>' + esc(t.title) + '</h3>' + (t.where ? '<p>' + esc(t.where) + '</p>' : '') + more() + '</div></article>';
      }).join('') + '</div></div></section>' + U.ctaBand();
  }

  U.pages.home = home; U.pages.about = about; U.pages.experience = experience; U.pages.skills = skills;
})();
