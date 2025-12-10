const hamMenu = document.querySelector('.ham-menu');
const log = document.getElementById('.log');

hamMenu.addEventListener('click', () => {
    log.classList.toggle('active');   // toggle menu visibility
    hamMenu.classList.toggle('active');    // animate hamburger into X
});