/* ==========================================================================
   pages2.js — Research, Projects, Project detail পেজ। এখানে সাধারণত হাত দেওয়ার দরকার নেই।
   ========================================================================== */
(function () {
  'use strict';
  var U = window.UI, S = U.S, $ = U.$, $$ = U.$$, esc = U.esc, ic = U.ic, ib = U.ib, cont = U.cont, pic = U.pic, artTile = U.artTile, param = U.param;
  var sh = U.sh, phead = U.phead, btn = U.btn, bindCards = U.bindCards;
  var tags = function (a) { return (a || []).map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join(''); };
  var more = function (t) { return '<span class="more">' + (t || 'Details') + ' ' + ic('arrow') + '</span>'; };

  /* ---------- Research ---------- */
  function areaCard(a) {
    var o = { images: a.images, art: a.art, tone: a.tone, kicker: 'Research area', kickerIcon: 'flask', title: a.title, text: a.more, blocks: [{ h: 'Questions and work', list: a.points }, { h: 'Methods', chips: a.tags }], pubs: a.pubs };
    return '<article class="card ifc area2 lift rv"' + btn(o) + '><div class="aw">' + artTile(a.art, a.tone) + '</div><div class="cb"><h3>' + esc(a.title) + '</h3><p>' + esc(a.text) + '</p><div class="tags">' + tags(a.tags) + '</div>' + more('Explore') + '</div></article>';
  }
  function research() {
    var R = S.research, T = S.thesis, pubs = S.publications, cf = S.conferences;
    var cnt = function (st) { return pubs.filter(function (p) { return p.status === st; }).length; };
    var years = []; cf.forEach(function (c) { if (years.indexOf(c.year) < 0) years.push(c.year); });
    var rs = '<div class="rstats">' + [[cnt('published'), 'journal articles', 'book'], [cnt('review') + cnt('prep'), 'under review or in progress', 'clock'], [cf.length, 'conference papers', 'mic'], [S.confList.length, 'conferences, each with a participation award', 'award']].map(function (x) { return '<span>' + ic(x[2]) + '<b>' + x[0] + '</b> ' + x[1] + '</span>'; }).join('') + '</div>';
    $('#app').innerHTML = phead('flask', R.kicker, R.headline, R.statement, rs, '', ['drop', 'chart']) +
      '<section><div class="wrap">' + sh('Research areas', 'What I <em>explore</em>', 'Four broad areas of work. Open a card to see the questions and the studies behind it.') + '<div class="cards c4">' + S.areas.map(areaCard).join('') + '</div>' +
      '<h3 class="subh rv"><i></i><span>Topics I keep coming back to</span><i></i></h3><div class="cards c4 sm-2">' + S.interests.map(function (it) { return U.pages._interestCard(it, true); }).join('') + '</div></div></section>' +
      '<section class="tint"><div class="wrap">' + sh('MSc thesis', 'Thesis <em>work</em>', '') +
      '<article class="card thesis rv"><div class="thesis-copy"><span class="chip">' + ic('clock') + esc(T.status) + '</span><h3>' + esc(T.title) + '</h3><dl>' +
      [['Supervisor', T.supervisor], ['Where', T.where], ['Question', T.question], ['Study area', T.area], ['Methods', T.methods], ['Progress', T.progress]].filter(function (r) { return r[1]; }).map(function (r) { return '<dt>' + r[0] + '</dt><dd>' + esc(r[1]) + '</dd>'; }).join('') + '</dl></div><figure class="thesis-map"><button type="button" data-visual="maps/sangu-basin.png" data-title="Sangu River basin" aria-label="Enlarge Sangu River basin map"><img src="maps/sangu-basin.png" width="2067" height="2541" loading="lazy" alt="Published map of the Sangu River basin, main river and tributaries"></button><figcaption><a href="https://piahs.copernicus.org/articles/386/109/2024/" target="_blank" rel="noopener">Rahman et al. (2024)</a> · CC BY 4.0</figcaption></figure></article>' + U.visualFigure(T.visual, 'Land use, climate and streamflow', '') + '</div></section>' +
      '<section id="pubs"><div class="wrap">' + sh('Journal articles', 'Peer-reviewed <em>publications</em>', 'Open any card for the study area, method, key findings and a ready citation.') +
      '<div class="tabs" id="ptabs"><button class="on" data-f="all">All <small>' + pubs.length + '</small></button><button data-f="published">Published <small>' + cnt('published') + '</small></button><button data-f="review">Under review <small>' + cnt('review') + '</small></button><button data-f="prep">In progress <small>' + cnt('prep') + '</small></button></div>' +
      '<div class="cards c3" id="pg"></div></div></section>' +
      '<section class="tint" id="conferences"><div class="wrap">' + sh('Conferences', 'Conferences I have <em>presented at</em>', 'Open a conference to see the paper or papers I presented there.') +
      '<div class="cards c3" id="cg">' + S.confList.map(function (g) { return U.confGroupCard(g).replace(' rv"', ' rv in"'); }).join('') + '</div></div></section>' +
      U.band('Read more of my work', 'Full lists are on my academic profiles.', ['scholar', 'researchgate', 'orcid'].filter(function (k) { return S.links[k]; }).map(function (k, i) { return '<a class="btn ' + (i ? '' : 'pri') + '" target="_blank" rel="noopener" href="' + esc(S.links[k]) + '">' + ic(k === 'scholar' ? 'grad' : k === 'orcid' ? 'orcid' : 'rg') + ' ' + { scholar: 'Google Scholar', researchgate: 'ResearchGate', orcid: 'ORCID' }[k] + '</a>'; }).join(''));
    function drawP(f) { $('#pg').innerHTML = pubs.map(function (p, i) { return (f === 'all' || p.status === f) ? U.pubCard(p, i).replace(' rv"', ' rv in"') : ''; }).join(''); bindCards($('#pg')); }
    drawP('all'); bindCards($('#cg'));
    [['#ptabs', drawP]].forEach(function (x) { $$(x[0] + ' button').forEach(function (b) { b.addEventListener('click', function () { $$(x[0] + ' button').forEach(function (y) { y.classList.toggle('on', y === b); }); x[1](b.dataset.f); }); }); });
  }

  /* ---------- Projects ---------- */
  function projects() {
    var P = S.projects, kinds = [['all', 'All', 'folder'], ['research', 'Research', 'flask'], ['consulting', 'Consulting', 'briefcase'], ['tool', 'Tools', 'code'], ['web', 'Web', 'globe'], ['media', 'Media', 'video']];
    var count = function (k) { return k === 'all' ? P.length : P.filter(function (p) { return p.kind === k; }).length; };
    var feat = P.filter(function (p) { return p.featured; })[0];
    $('#app').innerHTML = phead('folder', 'Projects', 'Projects, studies and tools in the making', 'Funded research, consulting studies, a documentary and tools I am building. Each card opens the full story, and photos and results are added as every project matures. Journal articles live on the Research page.', '', '', ['bolt', 'leaf']) +
      '<section><div class="wrap">' + sh('All projects', 'What I am <em>working on</em>', '') +
      '<div class="tabs" id="jt">' + kinds.filter(function (k) { return count(k[0]); }).map(function (k, i) { return '<button' + (i ? '' : ' class="on"') + ' data-k="' + k[0] + '">' + ic(k[2]) + k[1] + ' <small>' + count(k[0]) + '</small></button>'; }).join('') + '</div>' +
      '<div class="cards c3" id="pj"></div></div></section>' + U.ctaBand();
    function draw(k) { $('#pj').innerHTML = P.filter(function (p) { return k === 'all' || p.kind === k; }).map(function (p) { return U.projectCard(p).replace(' rv"', ' rv in"'); }).join(''); }
    draw('all');
    $$('#jt button').forEach(function (b) { b.addEventListener('click', function () { $$('#jt button').forEach(function (x) { x.classList.toggle('on', x === b); }); draw(b.dataset.k); }); });
  }
  function projectDetail() {
    var p = S.projects.filter(function (x) { return x.id === param('p'); })[0];
    if (!p) { $('#app').innerHTML = phead('folder', 'Projects', 'Project not found', 'Please go back to the project list.', '<p style="margin-top:20px"><a class="btn pri" href="projects.html">All projects</a></p>'); return; }
    document.title = p.title + ' — ' + S.name;
    var sec = function (h, t, i) { return t ? '<div class="ps rv">' + ib(i, '', '') + '<div><h3>' + h + '</h3><p>' + esc(t) + '</p></div></div>' : ''; };
    var fullT = p.fullTitle ? '<div class="ps rv">' + ib('file', 'gold', '') + '<div><h3>Project title</h3><p>' + esc(p.fullTitle) + '</p></div></div>' : '';
    var finds = (p.findings && p.findings.length) ? '<div class="ps rv">' + ib('star', 'gold', '') + '<div><h3>Key findings</h3>' + U.listHTML(p.findings) + '</div></div>' : '';
    var toolz = (p.tools && p.tools.length) ? '<div class="ps rv">' + ib('tools', 'sky', '') + '<div><h3>Tools and methods</h3><div class="tags">' + tags(p.tools) + '</div></div></div>' : '';
    var ack = p.ack ? '<div class="note rv" style="margin-top:22px">' + ic('award') + ' ' + esc(p.ack) + '</div>' : '';
    var rel = (p.related || []).map(function (id) { return S.projects.filter(function (x) { return x.id === id; })[0]; }).filter(Boolean);
    var relH = rel.length ? '<div class="ps rv">' + ib('folder', '', '') + '<div><h3>Related projects</h3><div class="mats">' + rel.map(function (r) { return '<a href="project.html?p=' + esc(r.id) + '">' + ic('arrow') + esc(r.title) + '</a>'; }).join('') + '</div></div></div>' : '';
    var mats = (p.materials && p.materials.length) ? '<div class="ps rv">' + ib('ext', 'sky', '') + '<div><h3>Materials</h3><div class="mats">' + p.materials.map(function (m) { return '<a href="' + esc(m.url) + '" target="_blank" rel="noopener">' + ic('ext') + esc(m.label) + '</a>'; }).join('') + '</div></div></div>' : '';
    var vid = p.video ? '<div class="ps rv">' + ib('video', 'rose', '') + '<div><h3>Watch</h3><div class="mats"><a href="' + esc(p.video) + '" target="_blank" rel="noopener">' + ic('video') + ' Watch the video</a></div></div></div>' : '';
    var rows = [['Status', p.statusLabel, 'check'], ['Period', p.period, 'cal'], ['My role', p.role, 'user'], ['Lead', p.lead, 'users'], ['Institution', p.org, 'pin']].filter(function (r) { return r[1]; });
    var others = S.projects.filter(function (x) { return x.id !== p.id; }).slice(0, 3);
    $('#app').innerHTML = phead('folder', 'Project', p.title, p.summary, '<div class="tags" style="margin-top:20px">' + tags(p.tags) + '</div>', '<a class="crumb" href="projects.html">' + ic('back') + ' All projects</a><br>', ['bolt', 'leaf']) +
      '<section><div class="wrap pd"><div><div class="figure">' + pic(p.photo || p.map, p.title, p.art || 'folder', '', U.KT[p.kind] || '') + '</div>' + (p.photoNote ? '<p class="visual-note">' + esc(p.photoNote) + '</p>' : '') + (p.gallery && p.gallery.length ? '<div class="imgs shots">' + p.gallery.map(function (f) { return '<div>' + pic(f, p.title, 'camera') + '</div>'; }).join('') + '</div>' : '') +
      fullT + sec('The problem', p.problem, 'target') + sec('Approach', p.method, 'layers') + (p.workflow ? U.visualFigure(p.workflow, p.title + ' workflow', 'Method overview based on the project description.') : '') + toolz + sec('Results', p.results, 'chart') + finds + vid +
      mats + relH + ack + '</div>' +
      '<aside class="side">' + rows.map(function (r) { return '<div>' + ib(r[2]) + '<span><small>' + r[0] + '</small>' + esc(r[1]) + '</span></div>'; }).join('') + '</aside></div></section>' +
      '<section class="tint"><div class="wrap">' + sh('More', 'Other <em>projects</em>', '') + '<div class="cards c3">' + others.map(U.projectCard).join('') + '</div></div></section>' + U.ctaBand();
  }

  U.pages.research = research; U.pages.projects = projects; U.pages.project = projectDetail;
  U.pages._interestCard = function (it, c) { return '<article class="card ifc lift rv sm"' + btn(U.interestInfo(it)) + '><div class="aw">' + artTile(it.art, it.tone) + '</div><div class="cb"><h3>' + esc(it.title) + '</h3><p>' + esc(it.short) + '</p>' + more('Explore') + '</div></article>'; };
})();
