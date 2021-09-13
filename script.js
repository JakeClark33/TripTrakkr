// mobile menu for when the sizing doesn't show the text

const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    console.log(navbarMenu.classList);
    navbarMenu.classList.toggle('is-active');
});

// modal and sign-in

const signinbutton = document.querySelector('#signin');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const box = document.querySelector('.box');

signinbutton.addEventListener('click', () => { 
    modal.classList.add('is-active');
    box.classList.remove('is-hidden');

 });

modalClose.addEventListener('click', ()=> {
    modal.classList.remove('is-active');
});

// Carousel Code

bulmaCarousel.attach('#post_images', {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
  });