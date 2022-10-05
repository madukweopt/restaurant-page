
function createHeader() {  
    const header = document.createElement('header'); 
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('name');
    restaurantName.textContent = 'Delicio Kitchen';

    const nav = document.createElement('nav');
    const homeButton = document.createElement('button');
    homeButton.classList.add('home-btn');
    homeButton.textContent = 'Home';

    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-btn');
    menuButton.textContent = 'Menu';

    const contactButton = document.createElement('button');
    contactButton.classList.add('contact-btn');
    contactButton.textContent = 'Contact';

    nav.appendChild(homeButton);
    nav.appendChild(menuButton)
    nav.appendChild(contactButton);

    header.appendChild(restaurantName);
    header.appendChild(nav);

    return header;

}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    return main;
}

function loadSite() {
    const content = document.querySelector('#content');
    content.appendChild(createHeader());
    content.appendChild(createMain());

}

export default loadSite