window.addEventListener('scroll', function () {
    let nav = document.querySelector('#nav');
    let windowPosition = window.scrollY > 0;
    nav.classList.toggle('scrolling-active', windowPosition);
})

const toogleMobileNav = () => {
    let mobileNav = document.querySelector('.nav-mobile')
    mobileNav.classList.toggle('display')
  }