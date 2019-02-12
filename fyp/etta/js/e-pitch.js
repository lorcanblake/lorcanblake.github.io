var o = document.getElementById("new-offer");
var s = document.getElementById("new-service");

var oCta = document.getElementById("new-offer-onboard");
var sCta = document.getElementById("new-service-onboard");

var oSteps = document.getElementById("offer-steps");
var stepNumber = document.getElementById("step-number").innerHTML;

var s1 = document.getElementById("step-1");
var s2 = document.getElementById("step-2");

var help = document.getElementById("help-text");


function choosePitch(opt) {

  // h.classList.remove("db");
  // h.classList.add("dn");

  if (opt === o) {
    s.classList.remove("dtc", "dib");
    s.classList.add("dn");
    oCta.classList.add("dib", "fade");
    help.classList.remove("db");
    help.classList.add("dn");
  }
  if (opt === s) {
    o.classList.remove("dtc", "dib");
    o.classList.add("dn");
    sCta.classList.add("dib", "fade");
    help.classList.remove("db");
    help.classList.add("dn");
  }

  
}
