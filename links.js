/* Clean addresses: on the live site, links and the address bar show
   biplobhosen.com/about instead of biplobhosen.com/about.html.
   On your own computer (opening the files directly) nothing changes. */
(function () {
  'use strict';
  var host = location.hostname;
  if (location.protocol === 'file:' || host === 'localhost' || host === '127.0.0.1' || host === '') return;
  var RE = /^([a-z0-9\-]+)\.html(?=$|[?#])/i;
  function clean(href) {
    if (!href || !RE.test(href)) return null;
    return href.replace(RE, function (m, name) { return name.toLowerCase() === 'index' ? './' : name; });
  }
  function fix(root) {
    if (!root || !root.querySelectorAll) return;
    var list = root.querySelectorAll('a[href]');
    for (var i = 0; i < list.length; i++) {
      var c = clean(list[i].getAttribute('href'));
      if (c !== null) list[i].setAttribute('href', c);
    }
    if (root.matches && root.matches('a[href]')) { var s = clean(root.getAttribute('href')); if (s !== null) root.setAttribute('href', s); }
  }
  try {
    var p = location.pathname, np = p.replace(/\/index\.html$/i, '/').replace(/\.html$/i, '');
    if (np !== p) history.replaceState(null, '', np + location.search + location.hash);
  } catch (e) {}
  function start() {
    fix(document);
    if (window.MutationObserver) {
      new MutationObserver(function (ms) {
        for (var i = 0; i < ms.length; i++) for (var j = 0; j < ms[i].addedNodes.length; j++) fix(ms[i].addedNodes[j]);
      }).observe(document.documentElement, { childList: true, subtree: true });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
