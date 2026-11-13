(function () {
  'use strict';
  var S = window.SITE;
  function asset(name) { return 'assets/visuals/' + name + '.webp'; }
  S.visualArt = {
    satellite: 'gis-remote-sensing', river: 'rainfall-runoff', climate: 'climate-water',
    ground: 'groundwater-erosion', flood: 'flood-risk', ai: 'ai-spatial-decisions',
    nature: 'nature-based-solutions', city: 'green-infrastructure'
  };
  S.areas.forEach(function (area, i) {
    area.images = [asset(['research-multihazard', 'research-water-resources', 'research-climate-land-surface', 'ai-spatial-decisions'][i])];
  });
  var projects = {
    'iee-etp-sirajganj': ['project-industrial-water'],
    'ev-charging-dhaka': ['project-ev-siting', 'workflow-ev-siting'],
    'shitalakshya-water': ['research-water-resources', 'workflow-water-security'],
    'msc-thesis': ['thesis-streamflow-cover'],
    'kuakata-research': [null, 'workflow-kuakata-study'],
    'raster-downscaling-tool': ['ai-spatial-decisions', 'workflow-raster-downscaling']
  };
  S.projects.forEach(function (project) {
    var visual = projects[project.id];
    if (!visual) return;
    if (visual[0]) {
      project.photo = asset(visual[0]);
      project.photoNote = 'Conceptual illustration';
    }
    if (visual[1]) project.workflow = asset(visual[1]);
  });
  S.thesis.visual = asset('thesis-streamflow-cover');
  S.skills.forEach(function (skill) {
    if (skill.group === 'Drone & field survey') skill.images = [asset('skills-drone-survey')];
    if (skill.group === 'Programming & data') skill.images = [asset('skills-research-workspace')];
    if (skill.group === 'Web development') skill.images = ['photos/projects/bgrc-home.jpg'];
    if (skill.group === 'Photography & video') skill.images = ['photos/photo-20.jpg'];
  });
  S.fieldwork.forEach(function (field) {
    if (field.title === 'Kuakata coast') field.images = ['photos/projects/kuakata-field.jpg'];
    if (field.title === 'Drone surveys') field.images = ['photos/photo-01.jpg'];
  });
  S.trainings.forEach(function (training) {
    if (training.title === 'Framing, Composition and Camera Manual Setting') training.images = ['photos/dps/dps-05.jpg'];
  });
})();
