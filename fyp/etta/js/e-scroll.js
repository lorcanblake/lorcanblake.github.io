window.onscroll = function () { scrollSpy() };

var filter = document.getElementById("filter");
var sticky = filter.offsetTop;

function scrollSpy() {
  if (window.pageYOffset >= sticky) {
    filter.classList.add("sticky", "db", "fade");
  }
}
