// Add class to navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('#nav');
    const windowPosition = window.scrollY;
    if (windowPosition >= 0) {
        nav.classList.toggle('scrolling-active', windowPosition);
    }
})

const mobileNav = document.querySelector('.nav-mobile');

const toggleMobileNav = () => {
    mobileNav.classList.toggle('display')
}

window.addEventListener('resize', () => {
    const windowInnerWidth = window.innerWidth;
    if (windowInnerWidth > 1050) {
        mobileNav.classList.remove('display');
    }
})

let backgroundVideo = document.querySelector('#bgvid');
let a = 0;

backgroundVideo.onended = () => {
    a = a + 1;
    if (a != 3) {
        backgroundVideo.play();
    }
};

