function menuchange() {
    var menubar1 = document.querySelector('#bar1')
    var menubar2 = document.querySelector('#bar2')
    var menubar3 = document.querySelector('#bar3')
    var ul = document.querySelector('#navbar ul')
    menubar1.classList.toggle('bar1change')
    menubar2.classList.toggle('bar2change')
    menubar3.classList.toggle('bar3change')
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

// var texts = ["CRICKET", "CHESS", "MATH"]
// var imgs = ["cricket.jpg", "chess.jpg", "math.jpg"]
// var mainimg = document.getElementById("mainimg")
// var imgdesc = document.getElementById("imgdesc")
// var imganddesc = document.querySelector("#imganddesc")
// var time = 2500
// var i = 0

// setTimeout("changeimg()", time)

// function changeimg() {
//     if (i < imgs.length - 1) {
//         i++
//     } else {
//         i = 0
//     }
//     mainimg.src = imgs[i]
//     imgdesc.innerHTML = texts[i]
//     setTimeout("changeimg()", time)
// }