var notif = document.getElementById("notif");

function dismiss(){
  notif.classList.add("o-40");
  setTimeout(function () {
    notif.remove();
}, 600);
  
}


