var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link")
    }


    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

function openMenu(){
    var sideMenu = document.getElementById("side-menu")
    sideMenu.style.right = "0";

}

function closeMenu(){
    var sideMenu = document.getElementById("side-menu")
    sideMenu.style.right = "-200px";

}