function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactImage = document.createElement('img');
    contactImage.src = 'images/contact.png';
   

    const contactPara1 = document.createElement('p');
    contactPara1.classList.add('contact-para');
    contactPara1.textContent = 'We are located at No 56 Kashim Ibrahim Street off constitution road, Angwan Remi, Kaduna, Kaduna state, Nigeria. TEL +2348461330981'

    contact.appendChild(contactImage);
    contact.appendChild(contactPara1); 

    return contact;
}

function loadContact() {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;