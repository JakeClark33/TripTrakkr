// mobile menu for when the sizing doesn't show the text

const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
})

// modal and sign-in

const signin = document.getElementsByTagName('#signin');
const modalBg = document.querySelector('.modal-background');
const modal = document.query.selector('.modal');

signin.addEventListener('click',() => { 
    modal.classlist.add('is-active');

})

signin.addEventListener('click',() => {
    modal.classlist.remove('is-active');
})