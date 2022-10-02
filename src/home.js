const content = document.querySelector('#content');
const header = document.createElement('header');

function createHeader() {   
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('name');
    restaurantName.textContent = 'Delicio Kitchen';

    header.appendChild(restaurantName);
    content.appendChild(header);

    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    const home = document.createElement('button');
    home.textContent = 'Home';

    const menu = document.createElement('button');
    menu.textContent = 'Menu';

    const contact = document.createElement('button');
    contact.textContent = 'Contact';

    nav.appendChild(home);
    nav.appendChild(menu)
    nav.appendChild(contact);
    header.appendChild(nav)
    content.appendChild(header);

}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');

    const firstPara = document.createElement('p');
    firstPara.textContent = ' We confidently boast of being the best eatery in the country. '

    const homeImage = document.createElement('img');
    homeImage.src = 'images/home.jpg';

    const secondPara = document.createElement('p')
    secondPara.textContent = 'Eat quality food with good taste';

    main.appendChild(firstPara);
    main.appendChild(homeImage);
    main.appendChild(secondPara);

    content.append(main);

}

export {
    createHeader,
    createNav,
    createMain
    }