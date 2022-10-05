/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);
    
   

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");



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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadSite);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ "./src/website.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





(0,_website_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])()

function addMenuEvent() {
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
}
addMenuEvent()

function addHomeEvent() {
    const homeBtn = document.querySelector('.home-btn');
    homeBtn.addEventListener('click', _home_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
}
addHomeEvent()

function addContactEvent() {
    const contactBtn = document.querySelector('.contact-btn');
    contactBtn.addEventListener('click', _contact_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
}
addContactEvent();






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlCb0M7OztBQUdwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7QUN0RXZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlOzs7Ozs7VUM5Q2Y7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05tQztBQUNIO0FBQ0E7QUFDTTs7QUFFdEMsdURBQVE7QUFDUixvREFBUTs7QUFFUjtBQUNBO0FBQ0Esc0NBQXNDLGdEQUFRO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyxnREFBUTtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsbURBQVc7QUFDcEQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcblxuICAgIGNvbnN0IGNvbnRhY3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnRhY3RJbWFnZS5zcmMgPSAnaW1hZ2VzL2NvbnRhY3QucG5nJztcbiAgIFxuXG4gICAgY29uc3QgY29udGFjdFBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RQYXJhMS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXBhcmEnKTtcbiAgICBjb250YWN0UGFyYTEudGV4dENvbnRlbnQgPSAnV2UgYXJlIGxvY2F0ZWQgYXQgTm8gNTYgS2FzaGltIElicmFoaW0gU3RyZWV0IG9mZiBjb25zdGl0dXRpb24gcm9hZCwgQW5nd2FuIFJlbWksIEthZHVuYSwgS2FkdW5hIHN0YXRlLCBOaWdlcmlhLiBURUwgKzIzNDg0NjEzMzA5ODEnXG5cbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RJbWFnZSk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0UGFyYTEpOyBcblxuICAgIHJldHVybiBjb250YWN0O1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiLCJcblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgXG4gICAgY29uc3QgZmlyc3RQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZpcnN0UGFyYS50ZXh0Q29udGVudCA9ICcgV2UgY29uZmlkZW50bHkgYm9hc3Qgb2YgYmVpbmcgdGhlIGJlc3QgZWF0ZXJ5IGluIHRoZSBjb3VudHJ5LiAnXG5cbiAgICBjb25zdCBob21lSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBob21lSW1hZ2Uuc3JjID0gJ2ltYWdlcy9ob21lLmpwZyc7XG5cbiAgICBjb25zdCBzZWNvbmRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgc2Vjb25kUGFyYS50ZXh0Q29udGVudCA9ICdFYXQgcXVhbGl0eSBmb29kIHdpdGggZ29vZCB0YXN0ZSc7XG5cbiAgICBob21lLmFwcGVuZENoaWxkKGZpcnN0UGFyYSk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChob21lSW1hZ2UpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoc2Vjb25kUGFyYSk7XG5cbiAgICByZXR1cm4gaG9tZTtcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZVxuICAgIFxuICAgIiwiaW1wb3J0IHsgY3JlYXRlTWFpbiB9IGZyb20gXCIuL2hvbWVcIjtcblxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIGNvbnN0IGlzdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbWFnZU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGltYWdlVGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZVRleHQxLnRleHRDb250ZW50ID0gJ0VndXNpIFNvdXAnO1xuICAgIGltYWdlT25lLnNyYyA9ICdpbWFnZXMvZWd1c2kuanBnJztcbiAgICBpc3RNZW51LmFwcGVuZENoaWxkKGltYWdlT25lKTtcbiAgICBpc3RNZW51LmFwcGVuZENoaWxkKGltYWdlVGV4dDEpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaXN0TWVudSk7XG5cbiAgICBjb25zdCBzZWNvbmRNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1hZ2VUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBpbWFnZVRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VUZXh0Mi50ZXh0Q29udGVudCA9ICdBZnJpY2FuIFNhbGFkJztcbiAgICBpbWFnZVR3by5zcmMgPSAnaW1hZ2VzL2FmcmljYW5TYWxhZC5wbmcnO1xuICAgIHNlY29uZE1lbnUuYXBwZW5kQ2hpbGQoaW1hZ2VUd28pO1xuICAgIHNlY29uZE1lbnUuYXBwZW5kQ2hpbGQoaW1hZ2VUZXh0Mik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChzZWNvbmRNZW51KTtcblxuICAgIGNvbnN0IHRoaXJkTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltYWdlVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBpbWFnZVRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VUZXh0My50ZXh0Q29udGVudCA9ICdPaGEgU291cCc7XG4gICAgaW1hZ2VUaHJlZS5zcmMgPSAnaW1hZ2VzL29oYS5qcGcnO1xuICAgIHRoaXJkTWVudS5hcHBlbmRDaGlsZChpbWFnZVRocmVlKTtcbiAgICB0aGlyZE1lbnUuYXBwZW5kQ2hpbGQoaW1hZ2VUZXh0Myk7XG4gICAgbWVudS5hcHBlbmRDaGlsZCh0aGlyZE1lbnUpO1xuXG4gICAgY29uc3QgZm91cnRoTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltYWdlRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGltYWdlVGV4dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZVRleHQ0LnRleHRDb250ZW50ID0gJ1ZlZ2V0YWJsZSBTb3VwJztcbiAgICBpbWFnZUZvdXIuc3JjID0gJ2ltYWdlcy92ZWdldGFibGUuanBnJztcbiAgICBmb3VydGhNZW51LmFwcGVuZENoaWxkKGltYWdlRm91cik7XG4gICAgZm91cnRoTWVudS5hcHBlbmRDaGlsZChpbWFnZVRleHQ0KTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGZvdXJ0aE1lbnUpO1xuXG4gICAgY29uc3QgZmlmdGhNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1hZ2VGaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgaW1hZ2VUZXh0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlVGV4dDUudGV4dENvbnRlbnQgPSAnT2twYSc7XG4gICAgaW1hZ2VGaXZlLnNyYyA9ICdpbWFnZXMvb2twYS5wbmcnO1xuICAgIGZpZnRoTWVudS5hcHBlbmRDaGlsZChpbWFnZUZpdmUpO1xuICAgIGZpZnRoTWVudS5hcHBlbmRDaGlsZChpbWFnZVRleHQ1KTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGZpZnRoTWVudSk7XG5cbiAgICBjb25zdCBzaXh0aE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbWFnZVNpeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGltYWdlVGV4dDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZVRleHQ2LnRleHRDb250ZW50ID0gJ0JpdHRlciBMZWFmIFNvdXAnO1xuICAgIGltYWdlU2l4LnNyYyA9ICdpbWFnZXMvYml0dGVyTGVhZi5qcGVnJztcbiAgICBzaXh0aE1lbnUuYXBwZW5kQ2hpbGQoaW1hZ2VTaXgpO1xuICAgIHNpeHRoTWVudS5hcHBlbmRDaGlsZChpbWFnZVRleHQ2KTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHNpeHRoTWVudSk7XG5cbiAgICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHsgIFxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpOyBcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgcmVzdGF1cmFudE5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICAgIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gJ0RlbGljaW8gS2l0Y2hlbic7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdob21lLWJ0bicpO1xuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSAnSG9tZSc7XG5cbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ0bicpO1xuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWJ0bicpO1xuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pXG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIHJldHVybiBoZWFkZXI7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBsb2FkU2l0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZFNpdGUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkU2l0ZSBmcm9tICcuL3dlYnNpdGUuanMnXG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lLmpzJ1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudS5qcydcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnXG5cbmxvYWRTaXRlKCk7XG5sb2FkSG9tZSgpXG5cbmZ1bmN0aW9uIGFkZE1lbnVFdmVudCgpIHtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnRuJyk7XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRNZW51KTtcbn1cbmFkZE1lbnVFdmVudCgpXG5cbmZ1bmN0aW9uIGFkZEhvbWVFdmVudCgpIHtcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtYnRuJyk7XG4gICAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRIb21lKTtcbn1cbmFkZEhvbWVFdmVudCgpXG5cbmZ1bmN0aW9uIGFkZENvbnRhY3RFdmVudCgpIHtcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtYnRuJyk7XG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRDb250YWN0KTtcbn1cbmFkZENvbnRhY3RFdmVudCgpO1xuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==