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
    const homeBtn = document.querySelector('.home-btn');
    homeBtn.classList.add('active');
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
                (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

            }else if(e.target.textContent === 'Contact') {
                menuBtn.classList.remove('active');
                homeBtn.classList.remove('active');
                contactBtn.classList.add('active');
                (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

            }else if(e.target.textContent === 'Home') {
                menuBtn.classList.remove('active');
                homeBtn.classList.add('active');
                contactBtn.classList.remove('active');
                (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
            }
        })
    })
}
addEvents()






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTtBQUN2QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ29DOzs7QUFHcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0FDdEV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBLGlFQUFlOzs7Ozs7VUNoRGY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05tQztBQUNIO0FBQ0E7QUFDTTs7QUFFdEMsdURBQVE7QUFDUixvREFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvREFBUTs7QUFFeEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix1REFBVzs7QUFFM0IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvREFBUTtBQUN4QjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcblxuICAgIGNvbnN0IGNvbnRhY3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnRhY3RJbWFnZS5zcmMgPSAnaW1hZ2VzL2NvbnRhY3QucG5nJztcbiAgIFxuXG4gICAgY29uc3QgY29udGFjdFBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RQYXJhMS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXBhcmEnKTtcbiAgICBjb250YWN0UGFyYTEudGV4dENvbnRlbnQgPSAnV2UgYXJlIGxvY2F0ZWQgYXQgTm8gNTYgS2FzaGltIElicmFoaW0gU3RyZWV0IG9mZiBjb25zdGl0dXRpb24gcm9hZCwgQW5nd2FuIFJlbWksIEthZHVuYSwgS2FkdW5hIHN0YXRlLCBOaWdlcmlhLiBURUwgKzIzNDg0NjEzMzA5ODEnXG5cbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RJbWFnZSk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0UGFyYTEpOyBcblxuICAgIHJldHVybiBjb250YWN0O1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiLCJcblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgXG4gICAgY29uc3QgZmlyc3RQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZpcnN0UGFyYS50ZXh0Q29udGVudCA9ICcgV2UgY29uZmlkZW50bHkgYm9hc3Qgb2YgYmVpbmcgdGhlIGJlc3QgZWF0ZXJ5IGluIHRoZSBjb3VudHJ5LiAnXG5cbiAgICBjb25zdCBob21lSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBob21lSW1hZ2Uuc3JjID0gJ2ltYWdlcy9ob21lLmpwZyc7XG5cbiAgICBjb25zdCBzZWNvbmRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgc2Vjb25kUGFyYS50ZXh0Q29udGVudCA9ICdFYXQgcXVhbGl0eSBmb29kIHdpdGggZ29vZCB0YXN0ZSc7XG5cbiAgICBob21lLmFwcGVuZENoaWxkKGZpcnN0UGFyYSk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChob21lSW1hZ2UpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoc2Vjb25kUGFyYSk7XG5cbiAgICByZXR1cm4gaG9tZTtcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLWJ0bicpO1xuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZVxuICAgIFxuICAgIiwiaW1wb3J0IHsgY3JlYXRlTWFpbiB9IGZyb20gXCIuL2hvbWVcIjtcblxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIGNvbnN0IGlzdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbWFnZU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGltYWdlVGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZVRleHQxLnRleHRDb250ZW50ID0gJ0VndXNpIFNvdXAnO1xuICAgIGltYWdlT25lLnNyYyA9ICdpbWFnZXMvZWd1c2kuanBnJztcbiAgICBpc3RNZW51LmFwcGVuZENoaWxkKGltYWdlT25lKTtcbiAgICBpc3RNZW51LmFwcGVuZENoaWxkKGltYWdlVGV4dDEpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaXN0TWVudSk7XG5cbiAgICBjb25zdCBzZWNvbmRNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1hZ2VUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBpbWFnZVRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VUZXh0Mi50ZXh0Q29udGVudCA9ICdBZnJpY2FuIFNhbGFkJztcbiAgICBpbWFnZVR3by5zcmMgPSAnaW1hZ2VzL2FmcmljYW5TYWxhZC5wbmcnO1xuICAgIHNlY29uZE1lbnUuYXBwZW5kQ2hpbGQoaW1hZ2VUd28pO1xuICAgIHNlY29uZE1lbnUuYXBwZW5kQ2hpbGQoaW1hZ2VUZXh0Mik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChzZWNvbmRNZW51KTtcblxuICAgIGNvbnN0IHRoaXJkTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltYWdlVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBpbWFnZVRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VUZXh0My50ZXh0Q29udGVudCA9ICdPaGEgU291cCc7XG4gICAgaW1hZ2VUaHJlZS5zcmMgPSAnaW1hZ2VzL29oYS5qcGcnO1xuICAgIHRoaXJkTWVudS5hcHBlbmRDaGlsZChpbWFnZVRocmVlKTtcbiAgICB0aGlyZE1lbnUuYXBwZW5kQ2hpbGQoaW1hZ2VUZXh0Myk7XG4gICAgbWVudS5hcHBlbmRDaGlsZCh0aGlyZE1lbnUpO1xuXG4gICAgY29uc3QgZm91cnRoTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltYWdlRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGltYWdlVGV4dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZVRleHQ0LnRleHRDb250ZW50ID0gJ1ZlZ2V0YWJsZSBTb3VwJztcbiAgICBpbWFnZUZvdXIuc3JjID0gJ2ltYWdlcy92ZWdldGFibGUuanBnJztcbiAgICBmb3VydGhNZW51LmFwcGVuZENoaWxkKGltYWdlRm91cik7XG4gICAgZm91cnRoTWVudS5hcHBlbmRDaGlsZChpbWFnZVRleHQ0KTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGZvdXJ0aE1lbnUpO1xuXG4gICAgY29uc3QgZmlmdGhNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1hZ2VGaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgaW1hZ2VUZXh0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlVGV4dDUudGV4dENvbnRlbnQgPSAnT2twYSc7XG4gICAgaW1hZ2VGaXZlLnNyYyA9ICdpbWFnZXMvb2twYS5wbmcnO1xuICAgIGZpZnRoTWVudS5hcHBlbmRDaGlsZChpbWFnZUZpdmUpO1xuICAgIGZpZnRoTWVudS5hcHBlbmRDaGlsZChpbWFnZVRleHQ1KTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGZpZnRoTWVudSk7XG5cbiAgICBjb25zdCBzaXh0aE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbWFnZVNpeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGltYWdlVGV4dDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZVRleHQ2LnRleHRDb250ZW50ID0gJ0JpdHRlciBMZWFmIFNvdXAnO1xuICAgIGltYWdlU2l4LnNyYyA9ICdpbWFnZXMvYml0dGVyTGVhZi5qcGVnJztcbiAgICBzaXh0aE1lbnUuYXBwZW5kQ2hpbGQoaW1hZ2VTaXgpO1xuICAgIHNpeHRoTWVudS5hcHBlbmRDaGlsZChpbWFnZVRleHQ2KTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHNpeHRoTWVudSk7XG5cbiAgICByZXR1cm4gbWVudTtcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHsgIFxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpOyBcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgcmVzdGF1cmFudE5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICAgIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gJ0RlbGljaW8gS2l0Y2hlbic7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdob21lLWJ0bicpO1xuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSAnSG9tZSc7XG5cbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ0bicpO1xuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWJ0bicpO1xuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pXG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIHJldHVybiBoZWFkZXI7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIHJldHVybiBtYWluO1xufVxuXG5mdW5jdGlvbiBsb2FkU2l0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG5cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRTaXRlIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZFNpdGUgZnJvbSAnLi93ZWJzaXRlLmpzJ1xuaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vaG9tZS5qcydcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUuanMnXG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJ1xuXG5sb2FkU2l0ZSgpO1xubG9hZEhvbWUoKVxuXG5mdW5jdGlvbiBhZGRFdmVudHMoKSB7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLWJ0bicpXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ0bicpO1xuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC1idG4nKTtcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdNZW51Jykge1xuICAgICAgICAgICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgaG9tZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGxvYWRNZW51KCk7XG5cbiAgICAgICAgICAgIH1lbHNlIGlmKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSAnQ29udGFjdCcpIHtcbiAgICAgICAgICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGhvbWVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBsb2FkQ29udGFjdCgpO1xuXG4gICAgICAgICAgICB9ZWxzZSBpZihlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ0hvbWUnKSB7XG4gICAgICAgICAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBob21lQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbG9hZEhvbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuYWRkRXZlbnRzKClcblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=