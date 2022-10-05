import loadSite from './website.js'
import loadHome from './home.js'
import loadMenu from './menu.js'
import loadContact from './contact.js'

loadSite();
loadHome()

function addMenuEvent() {
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', loadMenu);
}
addMenuEvent()

function addHomeEvent() {
    const homeBtn = document.querySelector('.home-btn');
    homeBtn.addEventListener('click', loadHome);
}
addHomeEvent()

function addContactEvent() {
    const contactBtn = document.querySelector('.contact-btn');
    contactBtn.addEventListener('click', loadContact);
}
addContactEvent();





