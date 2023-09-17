const navToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})

