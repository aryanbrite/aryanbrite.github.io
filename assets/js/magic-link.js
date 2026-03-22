window.magicCurrentStep=0;
window.magicSteps=[
  {text:"Hi reviewer !!", btn:"Hii"},
  {text:"How is the weather in Vermont today?<br><br>Did you realize that you've been staring at the screen for idk <i>howww</i> long?", btn:"oh ya uff"},
  {text:"First of all, take a break cause you have reviewed a lot of applications until now.", btn:"UMMmm"},
  {text:"This is a reminder to take a 10 min break and drink water, coffee, or maybe go on a walk.", btn:"OKAYY !!"},
  {text:"Reviewing applications is tough—especially when the pool is so competitive as well as filled with a lot of slop.<br><br>I hope this break will help you give the same effort as you were giving to the applications in the beginning. Have a good day!<br><br><i>This is a special version of my site just for you cause you are so busy. I'll redirect you straight to my timeline, but you can scroll up whenever you want to know more about my personality.</i>", btn:"okayyy"}
];

document.addEventListener("DOMContentLoaded", function() {
  if (window.location.hash.includes('magic') || window.location.search.includes('magic')) {
    var overlay = document.getElementById('magicOverlay');
    if (overlay) {
      overlay.style.display = 'flex';
      // Small timeout to allow display:flex to apply before setting opacity for transition
      setTimeout(function() { overlay.style.opacity = '1'; }, 50);
      document.body.style.overflow = 'hidden';
    }
  }
});

window.magicNextStep=function(e) {
  if (e) e.preventDefault();
  window.magicCurrentStep++;
  var textEl=document.getElementById('magicText');
  var btnEl=document.getElementById('magicBtn');
  var overlay=document.getElementById('magicOverlay');
  
  if (window.magicCurrentStep >= window.magicSteps.length) {
    if (overlay) {
      overlay.style.opacity = '0';
      overlay.style.transition = 'opacity 0.8s ease';
      setTimeout(function() {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        
        var timeline = document.getElementById('my-timeline');
        if (!timeline) {
          timeline = Array.from(document.querySelectorAll('h2, h3')).find(function(el) {
            return el.textContent && el.textContent.trim().toLowerCase() === 'my timeline';
          });
        }

        if (timeline) {
          var y = timeline.getBoundingClientRect().top + window.pageYOffset - 85;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
        
        window.history.replaceState(null, null, window.location.pathname);
      }, 800);
    }
    return;
  }
  
  textEl.style.opacity='0';
  textEl.style.transform='translateY(15px)';
  btnEl.style.opacity='0';
  btnEl.style.transform='translateY(15px)';
  btnEl.style.pointerEvents='none';
  
  setTimeout(function() {
    textEl.innerHTML=window.magicSteps[window.magicCurrentStep].text;
    btnEl.innerHTML=window.magicSteps[window.magicCurrentStep].btn;
    textEl.style.opacity='1';
    textEl.style.transform='translateY(0)';
    btnEl.style.opacity='1';
    btnEl.style.transform='translateY(0)';
    btnEl.style.pointerEvents='auto';
  }, 400);
};
