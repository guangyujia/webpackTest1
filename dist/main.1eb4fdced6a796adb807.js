/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpacktest1"] = self["webpackChunkwebpacktest1"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("function getComponent() { \n    return __webpack_require__.e(/*! import() */ \"vendors\").then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ \"./node_modules/lodash/lodash.js\", 23))\n    .then(({default: _}) => {\n        const element = document.createElement('div');\n        element.innerHTML = _.join(['世界', '你好'], ['']);\n        return element;\n    })\n    .catch(err => 'An error occured while loading the component');\n}\ngetComponent().then((component) => {\n    document.body.appendChild(component)\n})\n\n//# sourceURL=webpack://webpacktest1/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);