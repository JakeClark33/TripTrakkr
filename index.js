// mobile menu for when the sizing doesn't show the text

const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    console.log(navbarMenu.classList);
    navbarMenu.classList.toggle('is-active');
});

// modal and sign-in

const signinlink = document.querySelector('#signin');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');

signinlink.addEventListener('click', () => { 
    modal.classlist.add('is-active');
    Box.classList.remove('is-active');

})

signinlink.addEventListener('click',() => {
    modal.classList.remove('is-active');
    box.classList.toggle('is-active');
})

