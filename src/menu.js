function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const istMenu = document.createElement('div');
    const imageOne = document.createElement('img');
    const imageText1 = document.createElement('div');
    imageText1.textContent = 'Egusi Soup';
    imageOne.src = 'images/egusi.jpg';
    istMenu.appendChild(imageOne);
    istMenu.appendChild(imageText1);
    menu.appendChild(istMenu);

    const secondMenu = document.createElement('div');
    const imageTwo = document.createElement('img');
    const imageText2 = document.createElement('div');
    imageText2.textContent = 'African Salad';
    imageTwo.src = 'images/africanSalad.png';
    secondMenu.appendChild(imageTwo);
    secondMenu.appendChild(imageText2);
    menu.appendChild(secondMenu);

    const thirdMenu = document.createElement('div');
    const imageThree = document.createElement('img');
    const imageText3 = document.createElement('div');
    imageText3.textContent = 'Oha Soup';
    imageThree.src = 'images/oha.jpg';
    thirdMenu.appendChild(imageThree);
    thirdMenu.appendChild(imageText3);
    menu.appendChild(thirdMenu);

    const fourthMenu = document.createElement('div');
    const imageFour = document.createElement('img');
    const imageText4 = document.createElement('div');
    imageText4.textContent = 'Vegetable Soup';
    imageFour.src = 'images/vegetable.jpg';
    fourthMenu.appendChild(imageFour);
    fourthMenu.appendChild(imageText4);
    menu.appendChild(fourthMenu);

    const fifthMenu = document.createElement('div');
    const imageFive = document.createElement('img');
    const imageText5 = document.createElement('div');
    imageText5.textContent = 'Okpa';
    imageFive.src = 'images/okpa.png';
    fifthMenu.appendChild(imageFive);
    fifthMenu.appendChild(imageText5);
    menu.appendChild(fifthMenu);

    const sixthMenu = document.createElement('div');
    const imageSix = document.createElement('img');
    const imageText6 = document.createElement('div');
    imageText6.textContent = 'Bitter Leaf Soup';
    imageSix.src = 'images/bitterLeaf.jpeg';
    sixthMenu.appendChild(imageSix);
    sixthMenu.appendChild(imageText6);
    menu.appendChild(sixthMenu);

    return menu;
}

function loadMenu() {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;