// mobile menu for when the sizing doesn't show the text

const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
})

// modal and sign-in

const signinbutton = document.querySelector('#signin');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

signinbutton.addEventListener('click', () => { 
    modal.classlist.add('is-active');
    Box.classlist.remove('is-active');

})

console.log("#signin");

signinbutton.addEventListener('click',() => {
    modal.classlist.remove('is-active');
    box.classlist.toggle('is-active');
})