var primNav = document.getElementById("prim-nav");
var sideNav = document.getElementById("side-nav");
var view = document.getElementById("main");

function openNav() {
    let sideNav = document.getElementById("side-nav");
    sideNav.classList.add("w-side-nav");
    view.classList.add("ml-side-nav", "o-50");
}

function closeNav() {
    let sideNav = document.getElementById("side-nav");
    sideNav.classList.remove("w-side-nav");
    view.classList.remove("ml-side-nav", "o-50");
}