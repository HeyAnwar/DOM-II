// const links = document.querySelectorAll('.nav');
// links.addEventListener('mouseenter', function(event){
//     event.target.style.color = 'purple';
// })
//#1
const funBus = document.querySelector('h1.logo-heading')
funBus.addEventListener('click', function(event) {
    event.target.style.color = 'green';
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);
//#2
const welcomeBus = document.querySelector('.intro')
welcomeBus.addEventListener('mouseenter', function(event){
    event.target.style.background = 'purple'
    setTimeout(function() {
        event.target.style.background = "";
      }, 500);
    }, false);
//#3
const textContent = document.querySelector('.text-content')
textContent.addEventListener('dblclick', function(event){
    event.target.style.background = 'blue'
    setTimeout(function() {
        event.target.style.background = "";
      }, 500);
    }, false);
//#4
const textContent2 = document.querySelectorAll('.text-content')
textContent2[1].addEventListener('dblclick', function(event){
    event.target.style.background = 'yellow'
    setTimeout(function() {
        event.target.style.background = "";
      }, 500);
    }, false);
//#5
const navLinks = document.querySelectorAll('.nav')
navLinks[0].addEventListener('mouseover', function(event){
    event.target.style.color = 'yellow'
setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);
//#6
const pickDestination = document.querySelector('body')
pickDestination.addEventListener('keydown', function(event){
    event.target.style.color = 'red'
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);
//#7
const el = document.querySelector('.img-content');
let scale = 1;
el.onwheel = zoom;
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
    }
//#8
const containerHome = document.querySelector('body')
containerHome.addEventListener('keyup', function(event){
    event.target.style.color = 'blue'
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);
//#9
const footColor = document.querySelectorAll('.footer');
footColor[0].addEventListener('focus', function(event){
    if(target === '.footer'){
        event.target.style.background = 'brown'
    }
})
//#10
const cb = document.createElement('input');
cb.type = 'checkbox';
document.querySelector('.nav').appendChild(cb);
const allLinks = document.querySelector('.nav-link')
allLinks.addEventListener('click', e => {
    if (!cb.checked) {
        e.preventDefault();
    }
});