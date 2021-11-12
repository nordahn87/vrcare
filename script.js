// Add class to navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('#nav');
    const windowPosition = window.scrollY;
    if (windowPosition >= 0) {
        nav.classList.toggle('scrolling-active', windowPosition);
    } 
})

let parrent = document.querySelector('#nav-mobile-links');
parrent.addEventListener("click", targetNavMobile);

function targetNavMobile(e) {
    if (e.target !== e.currentTarget) {
        mobileNav.classList.remove('display');
        burgerBtn.classList.remove('open');
    }
    e.stopPropagation();
}

const mobileNav = document.querySelector('.nav-mobile');

const toggleMobileNav = () => {
    mobileNav.classList.toggle('display')
}

const burgerBtn = document.querySelector('.burger-btn-container');
let menuOpen = false;
burgerBtn.addEventListener('click', () => {
    if (!menuOpen) {
        burgerBtn.classList.add('open');
        menuOpen = true;
    } else {
        burgerBtn.classList.remove('open');
        menuOpen = false;
    }
});

window.addEventListener('resize', () => {
    const windowInnerWidth = window.innerWidth;
    if (windowInnerWidth > 1050) {
        mobileNav.classList.remove('display');
        burgerBtn.classList.remove('open');
        menuOpen = false;
    }
})
