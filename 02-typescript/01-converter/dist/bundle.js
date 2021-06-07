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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (() => {

eval("\nconst inputA = document.querySelector(\"#a\");\nconst inputB = document.querySelector(\"#b\");\nif (!(inputA instanceof HTMLInputElement)) {\n    throw new Error(\"No input\");\n}\nif (!(inputB instanceof HTMLInputElement)) {\n    throw new Error(\"No input\");\n}\nconst conversionC = () => {\n    const celsius = (parseInt(inputB.value) - 32 / 1.8).toString();\n    return inputA.value = celsius;\n};\nconst conversionF = () => {\n    const fahrenheit = (parseInt(inputA.value) * 1.8 + 32).toString();\n    return inputB.value = fahrenheit;\n};\ninputA.addEventListener(\"input\", conversionF);\ninputB.addEventListener(\"input\", conversionC);\n\n\n//# sourceURL=webpack://01-addition/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;