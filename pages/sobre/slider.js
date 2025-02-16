const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;

function fixNav(){
    if(window.scrollY >= topOfNav){
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    }else{
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}
window.addEventListener('scroll', fixNav);
var imgs = document.querySelectorAll('.slide img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; 
const interval = 2000;
var timer = setInterval(changeSlide, interval);
function changeSlide(n){
    for(var i = 0; i < imgs.length; i++){
        imgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(' active','');
    }
    currentImg = (currentImg + 1) % imgs.length; 
    if(n != undefined){
        clearInterval(timer);
        timer = setInterval(changeSlide, interval);
        currentImg = n;
    }
    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
}