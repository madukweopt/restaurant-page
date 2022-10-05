

function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');
    
    const firstPara = document.createElement('p');
    firstPara.textContent = ' We confidently boast of being the best eatery in the country. '

    const homeImage = document.createElement('img');
    homeImage.src = 'images/home.jpg';

    const secondPara = document.createElement('p')
    secondPara.textContent = 'Eat quality food with good taste';

    home.appendChild(firstPara);
    home.appendChild(homeImage);
    home.appendChild(secondPara);

    return home;
}

function loadHome() {
    const main = document.querySelector('.main')
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome
    
   