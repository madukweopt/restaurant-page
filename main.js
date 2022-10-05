/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7QUFDdkI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUJvQzs7O0FBR3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7OztBQ3RFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWU7Ozs7OztVQzlDZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNObUM7QUFDSDtBQUNBOztBQUVoQyx1REFBUTtBQUNSLG9EQUFROztBQUVSO0FBQ0E7QUFDQSxzQ0FBc0MsZ0RBQVE7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLGdEQUFRO0FBQzlDOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICBcbiAgICBjb25zdCBmaXJzdFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZmlyc3RQYXJhLnRleHRDb250ZW50ID0gJyBXZSBjb25maWRlbnRseSBib2FzdCBvZiBiZWluZyB0aGUgYmVzdCBlYXRlcnkgaW4gdGhlIGNvdW50cnkuICdcblxuICAgIGNvbnN0IGhvbWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGhvbWVJbWFnZS5zcmMgPSAnaW1hZ2VzL2hvbWUuanBnJztcblxuICAgIGNvbnN0IHNlY29uZFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBzZWNvbmRQYXJhLnRleHRDb250ZW50ID0gJ0VhdCBxdWFsaXR5IGZvb2Qgd2l0aCBnb29kIHRhc3RlJztcblxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoZmlyc3RQYXJhKTtcbiAgICBob21lLmFwcGVuZENoaWxkKGhvbWVJbWFnZSk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChzZWNvbmRQYXJhKTtcblxuICAgIHJldHVybiBob21lO1xufVxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lXG4gICAgXG4gICAiLCJpbXBvcnQgeyBjcmVhdGVNYWluIH0gZnJvbSBcIi4vaG9tZVwiO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgY29uc3QgaXN0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltYWdlT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgaW1hZ2VUZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlVGV4dDEudGV4dENvbnRlbnQgPSAnRWd1c2kgU291cCc7XG4gICAgaW1hZ2VPbmUuc3JjID0gJ2ltYWdlcy9lZ3VzaS5qcGcnO1xuICAgIGlzdE1lbnUuYXBwZW5kQ2hpbGQoaW1hZ2VPbmUpO1xuICAgIGlzdE1lbnUuYXBwZW5kQ2hpbGQoaW1hZ2VUZXh0MSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChpc3RNZW51KTtcblxuICAgIGNvbnN0IHNlY29uZE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbWFnZVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGltYWdlVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZVRleHQyLnRleHRDb250ZW50ID0gJ0FmcmljYW4gU2FsYWQnO1xuICAgIGltYWdlVHdvLnNyYyA9ICdpbWFnZXMvYWZyaWNhblNhbGFkLnBuZyc7XG4gICAgc2Vjb25kTWVudS5hcHBlbmRDaGlsZChpbWFnZVR3byk7XG4gICAgc2Vjb25kTWVudS5hcHBlbmRDaGlsZChpbWFnZVRleHQyKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHNlY29uZE1lbnUpO1xuXG4gICAgY29uc3QgdGhpcmRNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1hZ2VUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGltYWdlVGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZVRleHQzLnRleHRDb250ZW50ID0gJ09oYSBTb3VwJztcbiAgICBpbWFnZVRocmVlLnNyYyA9ICdpbWFnZXMvb2hhLmpwZyc7XG4gICAgdGhpcmRNZW51LmFwcGVuZENoaWxkKGltYWdlVGhyZWUpO1xuICAgIHRoaXJkTWVudS5hcHBlbmRDaGlsZChpbWFnZVRleHQzKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHRoaXJkTWVudSk7XG5cbiAgICBjb25zdCBmb3VydGhNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1hZ2VGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgaW1hZ2VUZXh0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlVGV4dDQudGV4dENvbnRlbnQgPSAnVmVnZXRhYmxlIFNvdXAnO1xuICAgIGltYWdlRm91ci5zcmMgPSAnaW1hZ2VzL3ZlZ2V0YWJsZS5qcGcnO1xuICAgIGZvdXJ0aE1lbnUuYXBwZW5kQ2hpbGQoaW1hZ2VGb3VyKTtcbiAgICBmb3VydGhNZW51LmFwcGVuZENoaWxkKGltYWdlVGV4dDQpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZm91cnRoTWVudSk7XG5cbiAgICBjb25zdCBmaWZ0aE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbWFnZUZpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBpbWFnZVRleHQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VUZXh0NS50ZXh0Q29udGVudCA9ICdPa3BhJztcbiAgICBpbWFnZUZpdmUuc3JjID0gJ2ltYWdlcy9va3BhLnBuZyc7XG4gICAgZmlmdGhNZW51LmFwcGVuZENoaWxkKGltYWdlRml2ZSk7XG4gICAgZmlmdGhNZW51LmFwcGVuZENoaWxkKGltYWdlVGV4dDUpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZmlmdGhNZW51KTtcblxuICAgIGNvbnN0IHNpeHRoTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltYWdlU2l4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgaW1hZ2VUZXh0NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlVGV4dDYudGV4dENvbnRlbnQgPSAnQml0dGVyIExlYWYgU291cCc7XG4gICAgaW1hZ2VTaXguc3JjID0gJ2ltYWdlcy9iaXR0ZXJMZWFmLmpwZWcnO1xuICAgIHNpeHRoTWVudS5hcHBlbmRDaGlsZChpbWFnZVNpeCk7XG4gICAgc2l4dGhNZW51LmFwcGVuZENoaWxkKGltYWdlVGV4dDYpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoc2l4dGhNZW51KTtcblxuICAgIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsIlxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkgeyAgXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7IFxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSAnRGVsaWNpbyBLaXRjaGVuJztcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hvbWUtYnRuJyk7XG4gICAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb21lJztcblxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtYnRuJyk7XG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtYnRuJyk7XG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICAgIG5hdi5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbilcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGxvYWRTaXRlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkU2l0ZSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRTaXRlIGZyb20gJy4vd2Vic2l0ZS5qcydcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWUuanMnXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51LmpzJ1xuXG5sb2FkU2l0ZSgpO1xubG9hZEhvbWUoKVxuXG5mdW5jdGlvbiBhZGRNZW51RXZlbnQoKSB7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ0bicpO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTWVudSk7XG59XG5hZGRNZW51RXZlbnQoKVxuXG5mdW5jdGlvbiBhZGRIb21lRXZlbnQoKSB7XG4gICAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLWJ0bicpO1xuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSG9tZSk7XG59XG5cbmFkZEhvbWVFdmVudCgpXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9