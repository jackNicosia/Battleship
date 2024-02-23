/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domInteraction.js":
/*!*******************************!*\
  !*** ./src/domInteraction.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGameboard: () => (/* binding */ createGameboard),\n/* harmony export */   initializeGameboard: () => (/* binding */ initializeGameboard)\n/* harmony export */ });\n// Define the function to dynamically generate the grid cells\nfunction createGameboard(gameboardEl, cellClickedCallback) {\n  for (let y = 0; y < 10; y++) {\n    for (let x = 0; x < 10; x++) {\n      const cell = document.createElement(\"div\");\n      cell.dataset.x = x;\n      cell.dataset.y = y;\n      cell.classList.add(\"cell\"); // Adding a class for styling\n      cell.addEventListener(\"click\", () => cellClickedCallback(x, y));\n      gameboardEl.appendChild(cell);\n    }\n  }\n}\n\n// Function to initialize the gameboard and handle cell clicks.\n// This function setups up the gameboard and defines what happens when a cell is clicked.\nfunction initializeGameboard() {\n  const playerGameboard = document.getElementById(\"playerGameboard\");\n  const enemyGameboard = document.getElementById(\"enemyGameboard\");\n\n  // Define what happens when a cell is clicked.\n  // This function will need to integrate with your game's logic to handle the click event properly.\n  function cellClicked(x, y) {\n    console.log(`Cell clicked: (${x}, ${y})`);\n    // Here you would call your game logic function, e.g., handleAttack(x, y);\n  }\n\n  // Call createGameboard to setup the gameboard on page load or game start\n  createGameboard(playerGameboard, cellClicked);\n  createGameboard(enemyGameboard, cellClicked);\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/domInteraction.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _testFun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testFun */ \"./src/testFun.js\");\n/* harmony import */ var _domInteraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domInteraction */ \"./src/domInteraction.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_domInteraction__WEBPACK_IMPORTED_MODULE_1__.initializeGameboard)();\n});\n\n(0,_testFun__WEBPACK_IMPORTED_MODULE_0__.testFun)();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/testFun.js":
/*!************************!*\
  !*** ./src/testFun.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   testFun: () => (/* binding */ testFun)\n/* harmony export */ });\nfunction testFun() {\n  console.log(\"YEEHAWW SOO MUCH FUNN!!!! =)))\");\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/testFun.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;