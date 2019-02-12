function injectComponents() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("etta-include");
    fullPath = "../etta/components/" + file;
    console.log(fullPath);
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Component not found 😭"; }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("etta-include");
          injectComponents();
        }
      }
      xhttp.open("GET", fullPath, true);
      xhttp.send();
      /* inject icons then exit */
      feather.replace();
      console.log("injected components and icons");
      addActiveClass();
      console.log("added active class to primary nav");
      return;
    }
  }
};