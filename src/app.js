function menuchange() {
    var menubar1 = document.querySelector('#bar1')
    var menubar2 = document.querySelector('#bar2')
    var menubar3 = document.querySelector('#bar3')
    var ul = document.querySelector('#navbar ul')
    menubar1.classList.toggle('bar1-change')
    menubar2.classList.toggle('bar2-change')
    menubar3.classList.toggle('bar3-change')
    ul.classList.toggle('ulchange')
}

window.onscroll = function() { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        navbar.style.display = "flex"
    } else {
        navbar.classList.remove("sticky");
        navbar.style.display = "none"
    }
}