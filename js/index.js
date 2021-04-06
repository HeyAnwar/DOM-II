// const links = document.querySelectorAll('.nav');
// links.addEventListener('mouseenter', function(event){
//     event.target.style.color = 'purple';
// })
//#1
const funBus = document.querySelector('h1.logo-heading')
funBus.addEventListener('mouseenter', function(event) {
    event.target.style.color = 'green';
  });
//#2
const welcomeBus = document.querySelector('.intro')
welcomeBus.addEventListener('mouseenter', function(event){
    event.target.style.background = 'purple'
})
//#3
const textContent = document.querySelector('.text-content')
textContent.addEventListener('dblclick', function (event){
    event.target.style.background = 'blue'
  });