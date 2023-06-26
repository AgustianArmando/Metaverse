const imageHero = document.getElementById('hero-animation')

window.addEventListener('scroll', function(){
    let value = window.scrollY

    if (value > 0) {
        imageHero.style.left = 0 + value * -2 + 'px';
    }
})


// dropdown
const bar = document.querySelector('.bar');
const navBar = document.querySelector('.nav-bar');

bar.addEventListener('click', function(){
    navBar.classList.toggle('nav-active');
})

const buttonNav = document.querySelectorAll('.nav-bar li')

buttonNav.addEventListener('click', function(){
    navBar.classList.remove('nav-active');
})