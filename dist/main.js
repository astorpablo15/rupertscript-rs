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

/***/ "./src/Perimetro.ts":
/*!**************************!*\
  !*** ./src/Perimetro.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass Perimetro {\r\n    constructor() { }\r\n    cuadrado(lado) {\r\n        return parseInt(lado) * 4;\r\n    }\r\n    rectangulo(b, h) {\r\n        return (parseInt(b) * 2) + (parseInt(h) * 2);\r\n    }\r\n    circulo(r) {\r\n        const PI = Math.PI;\r\n        return (2 * PI * parseInt(r));\r\n    }\r\n}\r\nexports[\"default\"] = Perimetro;\r\n\n\n//# sourceURL=webpack://clase-15-vivo-ts/./src/Perimetro.ts?");

/***/ }),

/***/ "./src/Persona.ts":
/*!************************!*\
  !*** ./src/Persona.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass Persona {\r\n    constructor(name, lastname) {\r\n        this.name = name;\r\n        this.lastname = lastname;\r\n    }\r\n    getFullName() {\r\n        return `${this.name} ${this.lastname}`;\r\n    }\r\n}\r\nexports[\"default\"] = Persona;\r\n\n\n//# sourceURL=webpack://clase-15-vivo-ts/./src/Persona.ts?");

/***/ }),

/***/ "./src/Superficie.ts":
/*!***************************!*\
  !*** ./src/Superficie.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass Superficie {\r\n    constructor() { }\r\n    cuadrado(lado) {\r\n        return Math.pow(parseInt(lado), 2);\r\n    }\r\n    rectangulo(b, h) {\r\n        return parseInt(b) * parseInt(h);\r\n    }\r\n    circulo(r) {\r\n        const PI = Math.PI;\r\n        return (PI * (Math.pow(parseInt(r), 2)));\r\n    }\r\n}\r\nexports[\"default\"] = Superficie;\r\n\n\n//# sourceURL=webpack://clase-15-vivo-ts/./src/Superficie.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\ndotenv_1.default.config();\r\nconst Persona_1 = __importDefault(__webpack_require__(/*! ./Persona */ \"./src/Persona.ts\"));\r\nconst Perimetro_1 = __importDefault(__webpack_require__(/*! ./Perimetro */ \"./src/Perimetro.ts\"));\r\nconst Superficie_1 = __importDefault(__webpack_require__(/*! ./Superficie */ \"./src/Superficie.ts\"));\r\nconst utils_1 = __webpack_require__(/*! ./lib/utils */ \"./src/lib/utils.ts\");\r\nconst app = (0, express_1.default)();\r\nconst persona = new Persona_1.default('Pablo', 'Dominguez');\r\nconst superficie = new Superficie_1.default();\r\nconst perimetro = new Perimetro_1.default();\r\napp.use(express_1.default.json());\r\napp.use(express_1.default.urlencoded({ extended: true }));\r\napp.get('/', (_req, res) => {\r\n    res.status(200).json({\r\n        fyh: (0, utils_1.getDate)(),\r\n        fullName: persona.getFullName()\r\n    });\r\n});\r\napp.get('/circulo/:radio', (req, res) => {\r\n    const radio = req.params.radio;\r\n    const op = req.query.op;\r\n    switch (op) {\r\n        case 'PER':\r\n            return res.status(200).send(`El perimetro es ${perimetro.circulo(radio)}`);\r\n        default:\r\n            return res.status(200).send(`El area es ${superficie.circulo(radio)}`);\r\n    }\r\n});\r\napp.get('/cuadrado/:lado', (req, res) => {\r\n    const lado = req.params.lado;\r\n    const op = req.query.op;\r\n    switch (op) {\r\n        case 'PER':\r\n            return res.status(200).send(`El perimetro es ${perimetro.cuadrado(lado)}`);\r\n        default:\r\n            return res.status(200).send(`El area es ${superficie.cuadrado(lado)}`);\r\n    }\r\n});\r\napp.get('/rectangulo/:base/:altura', (req, res) => {\r\n    const base = req.params.base;\r\n    const altura = req.params.altura;\r\n    const op = req.query.op;\r\n    switch (op) {\r\n        case 'PER':\r\n            return res.status(200).send(`El perimetro es ${perimetro.rectangulo(base, altura)}`);\r\n        default:\r\n            return res.status(200).send(`El area es ${superficie.rectangulo(base, altura)}`);\r\n    }\r\n});\r\nconst PORT = process.env.PORT || '3000';\r\napp.listen(parseInt(PORT), () => console.info(`App up and running on port ${PORT}`));\r\n\n\n//# sourceURL=webpack://clase-15-vivo-ts/./src/index.ts?");

/***/ }),

/***/ "./src/lib/utils.ts":
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.getDate = void 0;\r\nconst getDate = () => {\r\n    return new Date();\r\n};\r\nexports.getDate = getDate;\r\n\n\n//# sourceURL=webpack://clase-15-vivo-ts/./src/lib/utils.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;