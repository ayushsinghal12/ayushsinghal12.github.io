function menuchange() {
    var menubar1 = document.querySelector('#bar1')
    var menubar2 = document.querySelector('#bar2')
    var menubar3 = document.querySelector('#bar3')
    var ul = document.querySelector('ul')
    menubar1.classList.toggle('bar1change')
    menubar2.classList.toggle('bar2change')
    menubar3.classList.toggle('bar3change')
    ul.classList.toggle('ulchange')
}