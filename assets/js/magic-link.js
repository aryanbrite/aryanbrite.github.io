window.magicCurrentStep=0;
window.magicSteps=[
  {text:"Hi reviewer !!", btn:"Hii"},
  {text:"How is the weather in Vermont today?<br><br>Did you realize that you've been staring at the screen for idk <i>howww</i> long?", btn:"oh ya uff"},
  {text:"First of all, take a break cause you have reviewed a lot of applications until now.", btn:"UMMmm"},
  {text:"This is a reminder to take a 10 min break and drink water, coffee, or maybe go on a walk.", btn:"OKAYY !!"},
  {text:"Reviewing applications is tough—especially when the pool is so competitive as well as filled with a lot of slop.<br><br>I hope this break will help you give the same effort as you were giving to the applications in the beginning. Have a good day!<br><br><i>This is a special version of my site just for you cause you are so busy. I'll redirect you straight to my timeline, but you can scroll up whenever you want to know more about my personality.</i>", btn:"okayyy"}
];
window.magicNextStep=function(e) {
  if (e) e.preventDefault();
  window.magicCurrentStep++;
  var textEl=document.getElementById('magicText');
  var btnEl=document.getElementById('magicBtn');
  
  if (window.magicCurrentStep >= window.magicSteps.length) {
    window.location.href="/#my-timeline";
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
