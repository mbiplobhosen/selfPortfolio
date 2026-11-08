/* ==========================================================================
   art.js — আইকন ও হালকা রঙের ছবি-আঁকা (SVG illustration)। এখানে হাত দেওয়ার দরকার নেই।
   ========================================================================== */
(function () {
  'use strict';
  var U = window.UI = window.UI || {};

  /* ---------- আইকন (নিজেদের আঁকা SVG সেট) ---------- */
  var IC = {
    chevd: '<path d="M6 9l6 6 6-6"/>',
    up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
    send: '<path d="M21 3L10 14"/><path d="M21 3l-7 18-4-7-7-4z"/>',
    quote: '<path d="M7 17c-2 0-3-1.3-3-3.2C4 10.5 6 8 9 7M17 17c-2 0-3-1.3-3-3.2 0-3.3 2-5.8 5-6.8"/>',
    news: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8M8 13h8M8 17h5"/>',
    home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18"/>',
    grad: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5M22 9v6"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14.5L7 22l5-3 5 3-1.5-7.5"/>',
    tools: '<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5"/><path d="M3 17l9 5 9-5"/>',
    book: '<path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2z"/><path d="M4 21V5M8 7h7M8 11h5"/>',
    flask: '<path d="M9 3h6M10 3v6l-5.5 9.5A1.5 1.5 0 005.8 21h12.4a1.5 1.5 0 001.3-2.5L14 9V3"/><path d="M7.5 15h9"/>',
    folder: '<path d="M3 6a2 2 0 012-2h4l2 2h8a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z"/><circle cx="12" cy="13.5" r="3.8"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    pin: '<path d="M12 21s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    drone: '<circle cx="5" cy="6" r="2.5"/><circle cx="19" cy="6" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><rect x="9" y="9.5" width="6" height="5" rx="1.5"/><path d="M7 7.5l2.5 2.5M17 7.5L14.5 10M7 16.5l2.5-2.5M17 16.5L14.5 14"/>',
    drop: '<path d="M12 3s6 6.4 6 11a6 6 0 01-12 0c0-4.6 6-11 6-11z"/><path d="M9.5 14.5a2.5 2.5 0 002.5 2.5"/>',
    flood: '<path d="M3 8c2 0 2-2 4.5-2S10 8 12 8s2.5-2 4.5-2S19 8 21 8"/><path d="M3 13c2 0 2-2 4.5-2S10 13 12 13s2.5-2 4.5-2S19 13 21 13"/><path d="M3 18c2 0 2-2 4.5-2S10 18 12 18s2.5-2 4.5-2S19 18 21 18"/>',
    heat: '<path d="M14 14.5V5a2 2 0 10-4 0v9.5a4 4 0 104 0z"/><path d="M12 9v7"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
    map: '<path d="M9 4L3 6.5v13L9 17l6 3 6-2.5v-13L15 7z"/><path d="M9 4v13M15 7v13"/>',
    code: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    leaf: '<path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15"/><path d="M5 19c3-5 6-7 9-8"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14c2.8 0 4.5 1.9 4.5 5"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/>',
    cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    dl: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    ext: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/>',
    arrow: '<path d="M4 12h16M14 6l6 6-6 6"/>',
    back: '<path d="M20 12H4M10 6l-6 6 6 6"/>',
    video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3z"/>',
    chart: '<path d="M4 20V4M4 20h16"/><path d="M8 16v-4M12 16V8M16 16v-6"/>',
    mountain: '<path d="M3 19l6-11 4 6 3-4 5 9z"/>',
    bolt: '<path d="M13 3L5 14h6l-1 7 8-11h-6z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M4 16V6a2 2 0 012-2h10"/>',
    file: '<path d="M6 3h8l5 5v13H6z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
    cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    star: '<path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.3l1.1-6.2L3 9.7l6.2-.9z"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V16M8 7.8v.1M12 16v-5.5M12 13c0-1.7 1-2.7 2.4-2.7S17 11.3 17 13v3"/>',
    insta: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".8"/>',
    fb: '<path d="M14 21v-8h3l.5-3.5H14V7.7c0-1 .4-1.7 1.8-1.7H18V3.2C17.6 3.1 16.5 3 15.3 3 12.7 3 11 4.5 11 7.3v2.2H8V13h3v8z"/>',
    gh: '<path d="M15 22v-4a4.8 4.8 0 00-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 004 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>'
  };
  IC.chevd = '<path d="M6 9l6 6 6-6"/>';
  IC.up = '<path d="M12 20V5M6 11l6-6 6 6"/>';
  IC.send = '<path d="M21 3L3 10.5l7 3 3 7z"/><path d="M10 13.5L21 3"/>';
  IC.quote = '<path d="M9 7H5v6h4c0 3-1 4-3 5M19 7h-4v6h4c0 3-1 4-3 5"/>';
  IC.sparkle = '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16v4M17 18h4"/>';
  IC.plane = IC.send;
  IC.news = '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8M8 13h8M8 17h5"/>';
  U.IC = IC;

  /* ---------- হালকা রঙের ছবি-আঁকা (illustrations), viewBox 200x120 ---------- */
  var CLOUD = 'M0 16h26a8 8 0 000-16 11 11 0 00-21-3 9 9 0 00-5 19z';
  function cloud(x, y, s, cls) { return '<path class="' + (cls || 'f s') + '" transform="translate(' + x + ' ' + y + ') scale(' + s + ')" d="' + CLOUD + '"/>'; }
  function aiNet() {
    var L = [[40, [28, 60, 92]], [100, [18, 46, 74, 102]], [160, [44, 76]]], o = '', i, j, k, a, b;
    for (i = 0; i < L.length - 1; i++) for (j = 0; j < L[i][1].length; j++) for (k = 0; k < L[i + 1][1].length; k++)
      o += '<path class="s" style="opacity:.28" d="M' + L[i][0] + ' ' + L[i][1][j] + 'L' + L[i + 1][0] + ' ' + L[i + 1][1][k] + '"/>';
    for (i = 0; i < L.length; i++) for (j = 0; j < L[i][1].length; j++)
      o += '<circle class="' + (i === 2 ? 'fg2' : 'nd') + '" cx="' + L[i][0] + '" cy="' + L[i][1][j] + '" r="7"/>';
    return o;
  }
  function pixels() {
    var o = '', i, j, v;
    for (i = 0; i < 9; i++) for (j = 0; j < 5; j++) { v = .12 + .5 * (.5 + .5 * Math.sin(i * .9 + j * 1.3)); o += '<rect x="' + (38 + i * 15) + '" y="' + (22 + j * 15) + '" width="13" height="13" rx="2" fill="currentColor" opacity="' + v.toFixed(2) + '"/>'; }
    return o + '<rect class="g" x="83" y="37" width="28" height="28" rx="3"/><path class="g" d="M120 74l14 12"/>';
  }
  var ART = {
    flood: '<path class="f" d="M0 84C26 72 40 96 70 84s50-12 80 0 40 12 50 2V120H0z"/><path class="s" d="M0 84C26 72 40 96 70 84s50-12 80 0 40 12 50 2"/><path class="g" d="M0 102C26 92 40 112 70 102s50-12 80 0 40 12 50 2"/><path class="s" d="M44 80V56l18-14 18 14v24"/><path class="s" d="M56 80V66h12v14"/><path class="s" d="M110 82V64l12-9 12 9v18"/>' + cloud(136, 18, 1.1) + '<path class="g" d="M142 46l-3 8M152 46l-3 8M162 46l-3 8"/>',
    river: '<path class="f" d="M0 120V80q24-34 54-12t56-14 90 24v42z"/><path class="s" d="M0 80q24-34 54-12t56-14 90 24"/><path class="g" style="stroke-width:3" d="M106 56c10 12-14 20-6 32s24 8 16 32"/><path class="s" d="M30 66l14-20 12 14"/>' + cloud(124, 12, .9) + '<path class="g" d="M130 38l-3 7M140 38l-3 7M150 38l-3 7"/>',
    satellite: '<path class="f" d="M100 112L38 92l62-20 62 20z"/><path class="s" d="M100 98L38 78l62-20 62 20z"/><path class="s" d="M100 84L38 64l62-20 62 20z"/><circle class="fg" cx="100" cy="64" r="5"/><circle class="fg" cx="72" cy="74" r="3.5"/><circle class="fg" cx="128" cy="74" r="3.5"/><g transform="rotate(-28 150 22)"><rect class="s" x="143" y="16" width="14" height="12" rx="3"/><path class="s" d="M126 18h14v8h-14zM160 18h14v8h-14z"/></g><path class="g" stroke-dasharray="3 4" d="M148 36L112 58M152 36l16 22"/>',
    climate: '<circle class="fg" cx="62" cy="42" r="19"/><circle class="g" cx="62" cy="42" r="19"/><path class="g" d="M62 10v8M62 66v8M30 42h8M86 42h8M39 19l6 6M79 59l6 6M85 19l-6 6M45 59l-6 6"/>' + cloud(86, 34, 1.5) + '<path class="s" d="M18 110l30-14 24 8 34-24 36-10"/><path class="s" d="M140 70h12v12"/>',
    ground: '<path class="f" d="M0 42Q50 30 100 42T200 40V120H0z"/><path class="s" d="M0 42Q50 30 100 42T200 40"/><path class="s" style="opacity:.5" d="M0 68Q50 58 100 70T200 66"/><path class="g" d="M0 92Q50 82 100 94T200 90"/><path class="s" d="M96 34v62M104 34v62"/><path class="fg" d="M100 104c-6-9 0-9 0-13 0 4 6 4 0 13z"/><path class="s" d="M44 40V26M44 32l-8-6M44 30l8-6M150 38V24M150 30l-8-6M150 28l8-6"/>',
    ai: aiNet(),
    nature: '<path class="f" d="M0 96C30 88 50 104 80 96s50-8 120 2v22H0z"/><path class="g" d="M0 100C30 92 50 108 80 100s50-8 120 2"/><path class="s" d="M96 96V66"/><circle class="f" cx="96" cy="46" r="24"/><circle class="s" cx="96" cy="46" r="24"/><path class="s" d="M96 74l-10-10M96 68l10-10"/><path class="s" d="M52 96V80"/><circle class="s" cx="52" cy="72" r="11"/><path class="s" d="M150 98V72M158 98V64M166 98V74"/><path class="fg" d="M158 64c8-4 10-12 8-18-8 2-10 10-8 18z"/>',
    city: '<path class="f" d="M38 112V52h32v60z"/><path class="s" d="M38 112V52h32v60z"/><path class="g" d="M38 52h32"/><path class="s" d="M46 64h6M56 64h6M46 76h6M56 76h6M46 88h6M56 88h6"/><path class="s" d="M78 112V74h26v38z"/><path class="s" d="M85 84h5M85 96h5"/><circle class="fg" cx="130" cy="84" r="14"/><circle class="g" cx="130" cy="84" r="14"/><path class="s" d="M130 98v14"/><circle class="g" cx="160" cy="92" r="10"/><path class="s" d="M160 102v10M16 112h168"/>',
    chart: '<path class="s" d="M28 18v90h152"/><rect class="f" x="44" y="72" width="20" height="36"/><rect class="s" x="44" y="72" width="20" height="36"/><rect class="f" x="74" y="52" width="20" height="56"/><rect class="s" x="74" y="52" width="20" height="56"/><rect class="f" x="104" y="64" width="20" height="44"/><rect class="s" x="104" y="64" width="20" height="44"/><rect class="f" x="134" y="38" width="20" height="70"/><rect class="s" x="134" y="38" width="20" height="70"/><path class="g" d="M50 54l30-18 30 10 44-30"/><circle class="fg" cx="154" cy="16" r="4"/>',
    drone: '<rect class="f" x="86" y="30" width="28" height="14" rx="5"/><rect class="s" x="86" y="30" width="28" height="14" rx="5"/><path class="s" d="M86 34L68 26M114 34l18-8"/><ellipse class="s" cx="60" cy="24" rx="12" ry="3"/><ellipse class="s" cx="140" cy="24" rx="12" ry="3"/><circle class="g" cx="100" cy="50" r="4"/><path class="g" stroke-dasharray="3 4" d="M100 56L62 100M100 56l38 44"/><path class="f" d="M0 120V100q30-14 60 0t60-4 80 10v14z"/><path class="s" d="M0 100q30-14 60 0t60-4 80 10"/>',
    code: '<rect class="f" x="34" y="20" width="132" height="84" rx="10"/><rect class="s" x="34" y="20" width="132" height="84" rx="10"/><path class="s" d="M34 38h132"/><circle class="g" cx="46" cy="29" r="2.6"/><circle class="g" cx="56" cy="29" r="2.6"/><circle class="g" cx="66" cy="29" r="2.6"/><path class="s" d="M72 58l-12 12 12 12M128 58l12 12-12 12"/><path class="g" d="M108 54l-16 32"/>',
    camera: '<rect class="f" x="50" y="40" width="100" height="64" rx="12"/><rect class="s" x="50" y="40" width="100" height="64" rx="12"/><path class="s" d="M80 40l6-12h28l6 12"/><circle class="s" cx="100" cy="72" r="21"/><circle class="g" cx="100" cy="72" r="11"/><circle class="fg" cx="136" cy="54" r="4"/>',
    cert: '<path class="f" d="M100 24L36 50l64 26 64-26z"/><path class="s" d="M100 24L36 50l64 26 64-26z"/><path class="s" d="M64 63v24c0 7 16 15 36 15s36-8 36-15V63"/><path class="g" d="M164 50v32"/><circle class="fg" cx="164" cy="86" r="5"/>',
    people: '<circle class="f" cx="100" cy="46" r="15"/><circle class="s" cx="100" cy="46" r="15"/><path class="s" d="M68 104c0-19 14-30 32-30s32 11 32 30"/><circle class="s" cx="52" cy="58" r="10"/><path class="s" d="M32 104c0-14 8-22 20-22"/><circle class="s" cx="148" cy="58" r="10"/><path class="s" d="M168 104c0-14-8-22-20-22"/><path class="g" d="M30 112h140"/>',
    work: '<rect class="f" x="48" y="46" width="104" height="60" rx="10"/><rect class="s" x="48" y="46" width="104" height="60" rx="10"/><path class="s" d="M80 46v-8a6 6 0 016-6h28a6 6 0 016 6v8M48 76h104"/><rect class="fg" x="91" y="69" width="18" height="14" rx="3"/><rect class="g" x="91" y="69" width="18" height="14" rx="3"/>',
    lab: '<path class="f" d="M88 70L66 100a6 6 0 005 9h58a6 6 0 005-9l-22-30z"/><path class="s" d="M88 22h24M92 22v30L66 98a6 6 0 005 9h58a6 6 0 005-9l-26-46V22"/><path class="g" d="M77 86h46"/><circle class="fg" cx="96" cy="94" r="3.4"/><circle class="fg" cx="108" cy="90" r="2.6"/><circle class="g" cx="150" cy="34" r="6"/><circle class="g" cx="164" cy="52" r="4"/>',
    coast: '<circle class="fg" cx="152" cy="34" r="15"/><circle class="g" cx="152" cy="34" r="15"/><path class="fg" d="M0 120V94c40-14 80-6 110-2s60 12 90 4v24z"/><path class="f" d="M0 68c20-8 36 8 56 0s36-8 56 0 56 8 88 0v14c-40 8-70-6-100 0S40 90 0 82z"/><path class="s" d="M0 68c20-8 36 8 56 0s36-8 56 0 56 8 88 0"/><path class="g" d="M0 94c40-14 80-6 110-2s60 12 90 4"/>',
    film: '<rect class="f" x="40" y="44" width="120" height="62" rx="8"/><rect class="s" x="40" y="44" width="120" height="62" rx="8"/><path class="s" d="M40 60h120M40 44l12-16h20l-12 16M80 44l12-16h20l-12 16M120 44l12-16h20l-12 16"/><path class="fg" d="M92 70l26 14-26 14z"/><path class="g" d="M92 70l26 14-26 14z"/>',
    raster: pixels(),
    air: cloud(56, 28, 2, 'f s') + '<circle class="fg" cx="40" cy="36" r="4"/><circle class="fg" cx="162" cy="30" r="3"/><circle class="fg" cx="170" cy="56" r="4.5"/><circle class="g" cx="30" cy="62" r="3"/><path class="g" d="M26 92h56M42 104h76M110 92h44"/>',
    factory: '<path class="f" d="M30 108V70l32 16V70l32 16V70l32 16v22z"/><path class="s" d="M30 108V70l32 16V70l32 16V70l32 16v22zM30 108h96"/><rect class="s" x="140" y="48" width="14" height="60"/><path class="g" d="M147 40c-8-6 6-12-2-22M158 34c-6-6 5-10-1-16"/><path class="g" d="M20 116c10-6 22 6 32 0s22 6 32 0 22 6 32 0 22 6 32 0"/>',
    ev: '<path class="f" d="M34 90h132V76c0-5-3-9-8-10l-20-4-16-16H86L70 62l-24 4c-5 1-12 5-12 10z"/><path class="s" d="M34 90h132V76c0-5-3-9-8-10l-20-4-16-16H86L70 62l-24 4c-5 1-12 5-12 10z"/><circle class="s" cx="68" cy="92" r="10"/><circle class="s" cx="134" cy="92" r="10"/><path class="fg" d="M108 38l-14 16h11l-6 14 17-18h-11z"/><path class="g" d="M108 38l-14 16h11l-6 14 17-18h-11z"/>',
    medal: '<path class="f" d="M80 16h16l4 14 4-14h16l-20 44z"/><path class="s" d="M80 16h16l4 14 4-14h16l-20 44z"/><circle class="f" cx="100" cy="80" r="26"/><circle class="s" cx="100" cy="80" r="26"/><circle class="g" cx="100" cy="80" r="17"/><path class="fg" d="M100 68l4 8 9 1-6 6 2 9-9-5-9 5 2-9-6-6 9-1z"/>',
    compass: '<circle class="f" cx="100" cy="62" r="42"/><circle class="s" cx="100" cy="62" r="42"/><circle class="s" cx="100" cy="62" r="33" stroke-dasharray="2 5"/><path class="fg" d="M100 32l9 30h-18z"/><path class="g" d="M100 32l9 30h-18z"/><path class="s" d="M100 92l-9-30h18z"/><path class="s" d="M100 14v6M100 104v6M52 62h6M142 62h6"/>',
    plane: '<path class="f" d="M30 62L172 28 122 100 100 74z"/><path class="s" d="M30 62L172 28 122 100 100 74zM100 74L172 28"/><path class="g" d="M100 74l-4 22 16-12"/><path class="g" stroke-dasharray="3 5" d="M16 104c30 8 40-30 80-28"/>',
    leaf: '<path class="s" d="M100 106V50"/><path class="f s" d="M100 72c-24 0-30-15-30-26 17 0 30 6 30 26z"/><path class="f s" d="M100 58c24 0 30-14 30-26-17 0-30 6-30 26z"/><path class="g" d="M30 106h140"/><circle class="fg" cx="52" cy="96" r="3"/><circle class="fg" cx="148" cy="98" r="3"/><circle class="fg" cx="72" cy="100" r="2.4"/>',
    mangrove: '<circle class="fg" cx="152" cy="30" r="13"/><circle class="g" cx="152" cy="30" r="13"/><path class="s" d="M22 36q5-6 10 0q5-6 10 0"/><path class="f" d="M0 98C30 92 56 102 90 96s60-6 110 2V120H0z"/><path class="g" d="M0 102C30 96 56 106 90 100s60-6 110 2"/><path class="f s" d="M58 66c-14 0-22-8-22-17 0-9 8-15 18-13 3-8 18-8 22 0 10 0 16 7 14 15-2 9-12 15-32 15z"/><path class="s" d="M58 66v14M58 70l-12 20M58 70l12 20M58 69l-5 21M58 69l5 21"/><path class="f s" d="M126 72c-10 0-16-6-16-13 0-7 6-11 13-10 3-6 13-6 16 0 8 0 12 5 10 11-2 7-9 12-23 12z"/><path class="s" d="M126 72v11M126 75l-9 14M126 75l9 14"/><path class="s" d="M92 98v-9M98 98v-7M104 98v-10M156 100v-8M162 100v-6"/>',
    sunrise: '<path class="fg" d="M72 76a28 28 0 0156 0z"/><path class="g" d="M72 76a28 28 0 0156 0"/><path class="g" d="M100 30v9M68 40l6 6M132 40l-6 6M50 58l8 3M150 58l-8 3"/><path class="s" d="M0 76h200"/><path class="f" d="M0 76h200v12H0z" style="opacity:.55"/><path class="g" d="M24 84q8-5 16 0t16 0 16 0 16 0 16 0 16 0 16 0"/><path class="f" d="M0 104Q50 94 100 101T200 98V120H0z"/><path class="s" d="M0 104Q50 94 100 101T200 98"/><path class="s" d="M156 100V78M156 80c-8-6-16-4-20 2M156 80c8-6 16-4 20 2M156 82c-5-8-14-10-20-6M156 82c5-8 14-10 20-6"/>',
    haor: '<path class="f" d="M0 76q30-34 62-14t58-6q40-14 80 18V120H0z"/><path class="s" d="M0 76q30-34 62-14t58-6q40-14 80 18"/><path class="s" style="opacity:.5" d="M22 72q20-12 40-6M32 82q24-12 52-6M78 68q20-8 40-4M126 70q20-8 40-2"/>' + cloud(118, 14, .8) + '<path class="f" d="M0 100c30-6 50 6 80 0s60-6 120 0V120H0z"/><path class="g" d="M0 106c30-6 50 6 80 0s60-6 120 0"/><path class="s" d="M118 102l6 6h22l6-6z"/><path class="g" d="M135 102V88l10 14"/>',
    mountain: '<path class="f" d="M14 108l48-64 30 38 22-26 72 52z"/><path class="s" d="M14 108l48-64 30 38 22-26 72 52z"/><circle class="fg" cx="156" cy="34" r="12"/>'
  };
  U.ART = ART;
  /* art(name) → SVG */
  U.art = function (n) { return '<svg class="il" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid meet" aria-hidden="true">' + (ART[n] || ART.compass) + '</svg>'; };
})();
