var slider = document.getElementById("radius-slider");
var output = document.getElementById("radius");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}
