/* Page and section background artwork. */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    var page = document.body.dataset.page;
    var headers = {
      about: 'about-riverside', experience: 'experience-fieldwork',
      skills: 'skills-workspace', research: 'research-watershed',
      projects: 'projects-landscape', photography: 'photography-dramatic',
      travel: 'journey-trail', contact: 'contact-confluence'
    };
    var sectionScenes = {
      'Photography': 'wetland-mist',
      'Explore': 'journey-trail',
      'Education': 'academic-campus',
      'More about me': 'camera-still-life',
      'Journey': 'journey-trail',
      'Work experience': 'skills-workspace',
      'Training & workshops': 'training-room',
      'Field experience': 'coastal-mangroves',
      'Toolbox': 'research-watershed',
      'Equipment & level': 'camera-still-life',
      'MSc thesis': 'research-watershed',
      'Conferences': 'conference-hall',
      'More': 'projects-landscape',
    };
    var projectScenes = {
      'iee-etp-sirajganj': 'projects-landscape',
      'ev-charging-dhaka': 'projects-landscape',
      'shitalakshya-water': 'research-watershed',
      'msc-thesis': 'research-watershed',
      'kuakata-research': 'coastal-mangroves',
      'ctcrp-documentary': 'coastal-mangroves',
      'raster-downscaling-tool': 'skills-workspace',
      'bgrc-website': 'skills-workspace',
      'bgrc-gis-training': 'education-path',
      'bgrc-duet-thesis': 'research-watershed',
      'bgrc-iubat-thesis': 'education-path'
    };
    var targets = [];
    function scene(element, name, type) {
      if (!element || !name) return;
      element.classList.add('scenic', type || 'scenic-section');
      element.dataset.scene = name;
      targets.push(element);
    }
    var header = document.querySelector('#app > .ph');
    var headerScene = headers[page];
    if (page === 'project') {
      headerScene = projectScenes[new URLSearchParams(location.search).get('p')] || 'projects-landscape';
      scene(document.querySelector('.pd')?.closest('section'), headerScene, 'scenic-detail');
    }
    scene(header, headerScene, page === 'photography' ? 'scenic-photo' : 'scenic-header');
    document.querySelectorAll('#app > section .sh .eb span').forEach(function (label) {
      var key=label.textContent.trim(),section=label.closest('section'),contained=['Explore','Journey','Field experience','Equipment & level','Conferences'].includes(key); scene(contained?section.querySelector('.wrap'):section,sectionScenes[key],contained?'scenic-panel':'scenic-section');
    });
    scene(document.querySelector('.about .ar'),'wetland-mist','scenic-column'); scene(document.querySelector('.behind > div:last-child'),'camera-still-life','scenic-column'); scene(document.querySelector('.bdl'),'journey-trail','scenic-column');
    
    document.querySelectorAll('.band').forEach(function (el) { scene(el,({home:'about-riverside',about:'journey-trail',experience:'experience-fieldwork',skills:'skills-workspace',research:'research-watershed',projects:'projects-landscape',travel:'coastal-mangroves'})[page]||'camera-still-life','scenic-band'); });
    scene(document.querySelector('.phd2'), 'journey-trail', 'scenic-band');
    document.querySelector('.foot')?.classList.add('footer-refined');

    // Load lower-page backgrounds as they approach the viewport.
    var narrow = window.matchMedia('(max-width:760px)');
    function loadScene(element) {
      var suffix = narrow.matches ? '-mobile' : '';
      element.style.setProperty('--scene-image', 'url("assets/backgrounds/' + element.dataset.scene + suffix + '.webp")');
      element.dataset.sceneLoaded = 'true';
    }
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          loadScene(entry.target);
          observer.unobserve(entry.target);
        });
      }, { rootMargin: '300px' });
      targets.forEach(function (el) { observer.observe(el); });
    } else {
      targets.forEach(loadScene);
    }
    narrow.addEventListener('change', function () {
      targets.filter(function (el) { return el.dataset.sceneLoaded; }).forEach(loadScene);
    });
  });
})();
