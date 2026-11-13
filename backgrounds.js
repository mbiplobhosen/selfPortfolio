/* Each placement has a deliberate image and uncropped display mode. */
(function () {
 'use strict';
 document.addEventListener('DOMContentLoaded', function () {
  var page=document.body.dataset.page;
  var manifest=window.SCENE_ASSETS || {};
  function scene(el,key,type) {
   if(!el || !manifest[key])return;
   el.classList.add('scenic',type||'scenic-section');el.dataset.scene=key;
   var asset=manifest[key],media=document.createElement('div'),img=document.createElement('img');
   media.className='scene-media';media.setAttribute('aria-hidden','true');
   img.alt='';img.src=asset.src;img.width=asset.width;img.height=asset.height;
   img.loading=(type==='scenic-header'||type==='scenic-home'||type==='scenic-photo')?'eager':'lazy';img.decoding='async';
   if(asset.mobile){img.srcset=asset.mobile+' 1000w, '+asset.src+' '+asset.width+'w';img.sizes=type==='scenic-column'?'(max-width:760px) 100vw, 650px':'100vw';}
   if(type==='scenic-footer'){
    var picture=document.createElement('picture'),source=document.createElement('source');
    source.media='(max-width:760px)';source.srcset='assets/scenes/footer-mobile.webp';
    picture.appendChild(source);picture.appendChild(img);media.appendChild(picture);
   } else media.appendChild(img);
   el.prepend(media);
  }
  scene(document.querySelector('.hero'),'home-hero','scenic-home');
  if(page==='photography')scene(document.querySelector('#app>.ph'),'photography-original','scenic-photo');
  else scene(document.querySelector('#app>.ph'),page==='project'?'projects-hero':page+'-hero','scenic-header');
  var rules={
   home:{'Photography':['home-gallery'],'Explore':['home-explore','panel']},
   about:{'Education':['about-education'],'More about me':['about-beyond'],'Journey':['about-journey','panel']},
   experience:{'Work experience':['experience-work'],'Training & workshops':['experience-training'],'Field experience':['experience-field','panel']},
   skills:{'Toolbox':['skills-toolbox'],'Equipment & level':['skills-gear','panel']},
   research:{'MSc thesis':['research-thesis'],'Conferences':['research-conferences','panel']}
  };
  document.querySelectorAll('#app>section .sh .eb span').forEach(function(label){
   var rule=(rules[page]||{})[label.textContent.trim()];if(!rule)return;
   var section=label.closest('section');scene(rule[1]==='panel'?section.querySelector('.wrap'):section,rule[0],rule[1]==='panel'?'scenic-panel':'scenic-section');
  });
  scene(document.querySelector('.about .ar'),'about-story','scenic-column');
  scene(document.querySelector('.behind>div:last-child'),'photography-camera','scenic-column');
  scene(document.querySelector('.bdl'),'travel-places','scenic-column');
  document.querySelectorAll('.band').forEach(function(el){scene(el,'cta-'+page,'scenic-band');});
  scene(document.querySelector('.phd2'),'home-phd','scenic-band');
  scene(document.querySelector('.foot'),'footer-panorama','scenic-footer');
 });
})();
