// script.js
function toggleMenu() {
    const menu = document.querySelector('.menu-items');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}