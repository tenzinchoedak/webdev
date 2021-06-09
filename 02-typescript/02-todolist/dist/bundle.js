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

eval("\nconst appMain = document.getElementById(\"app\");\nif (!(appMain instanceof HTMLDivElement)) {\n    throw new Error(\"No id 'app' found\");\n}\nlet toDo = [];\n//get input\nconst getInput = (input) => {\n    const result = input.value;\n    return result;\n};\n//render the Application \nconst render = () => {\n    appMain.innerHTML = \"\";\n    //add <ul>\n    const todoUl = document.createElement(\"ul\");\n    //add <li>\n    for (const i of toDo) {\n        const todoLi = document.createElement(\"li\");\n        todoLi.textContent = i.title;\n        todoUl.appendChild(todoLi);\n        const todoCheck = document.createElement(\"input\");\n        todoCheck.setAttribute(\"type\", \"checkbox\");\n        todoLi.appendChild(todoCheck);\n    }\n    //add <input>\n    const todoInput = document.createElement(\"input\");\n    todoInput.setAttribute(\"type\", \"text\");\n    appMain.appendChild(todoInput);\n    //add <button>\n    const todoButton = document.createElement(\"input\");\n    todoButton.setAttribute(\"type\", \"submit\");\n    todoButton.setAttribute(\"value\", \"Add New Task\");\n    appMain.appendChild(todoButton);\n    //add <p>\n    todoButton.addEventListener('click', (event) => {\n        event.preventDefault();\n        toDo.push({ title: getInput(todoInput), done: false });\n        render();\n    });\n    appMain.appendChild(todoUl);\n};\nrender();\n\n\n//# sourceURL=webpack://01-addition/./src/main.ts?");

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