import loadSite from './website.js'
import loadHome from './home.js'
import loadMenu from './menu.js'
import loadContact from './contact.js'

loadSite();
loadHome()

function addEvents() {
    const homeBtn = document.querySelector('.home-btn')
    const menuBtn = document.querySelector('.menu-btn');
    const contactBtn = document.querySelector('.contact-btn');

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if(e.target.textContent === 'Menu') {
                menuBtn.classList.add('active');
                homeBtn.classList.remove('active');
                contactBtn.classList.remove('active');
                loadMenu();

            }else if(e.target.textContent === 'Contact') {
                menuBtn.classList.remove('active');
                homeBtn.classList.remove('active');
                contactBtn.classList.add('active');
                loadContact();

            }else if(e.target.textContent === 'Home') {
                menuBtn.classList.remove('active');
                homeBtn.classList.add('active');
                contactBtn.classList.remove('active');
                loadHome();
            }
        })
    })
}
addEvents()





