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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ \"./src/modules/weather.js\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n\n\nconst searchButton = document.querySelector('#submit');\nconst searchForm = document.querySelector('#search');\nsearchButton.addEventListener('click', search);\n\nasync function search() {\n  const location = searchForm.value;\n  const coordinatesUrl = _modules_weather__WEBPACK_IMPORTED_MODULE_0__.getWeather.requestCoordinates(location);\n  const coordinates = await _modules_weather__WEBPACK_IMPORTED_MODULE_0__.getWeather.getCoordinates(coordinatesUrl);\n  const forecastUrl = _modules_weather__WEBPACK_IMPORTED_MODULE_0__.getWeather.requestWeatherFromCoord(coordinates);\n  const weatherData = await _modules_weather__WEBPACK_IMPORTED_MODULE_0__.getWeather.getForecast(forecastUrl);\n  _modules_dom__WEBPACK_IMPORTED_MODULE_1__.displayResults.generateDom(weatherData);\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayResults\": () => (/* binding */ displayResults)\n/* harmony export */ });\nconst displayResults = (() => {\n  function getWeatherIcon(forecast) {\n    let icon = '';\n\n    if (forecast.weather[0].main === 'Clear') {\n      icon = \"./dist/assets/svg/day.svg\";\n    } else if (forecast.weather[0].main === 'Rain') {\n      icon = \"./dist/assets/svg/rainy-6.svg\";\n    } else if (forecast.weather[0].main === 'Clouds') {\n      icon = \"./dist/assets/svg/cloudy-day-1.svg\";\n    }\n\n    return icon;\n  }\n\n  function generateDom(forecast) {\n    if (!forecast) return;\n    const weatherModule = document.querySelector(\"#weather-view\");\n    weatherModule.classList.add('visible');\n    const icon = document.querySelector('#icon');\n    const name = document.querySelector(\"#name\");\n    const temp = document.querySelector('#temp');\n    const cond = document.querySelector('#cond');\n    const humidity = document.querySelector('#humidity');\n    const rain = document.querySelector('#rain');\n    name.textContent = `${forecast.name}`;\n    temp.textContent = `${forecast.main.temp} °`;\n    icon.src = getWeatherIcon(forecast);\n  }\n\n  return {\n    generateDom\n  };\n})();\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather)\n/* harmony export */ });\nconst getWeather = (() => {\n  const apiKey = \"0a260536bb797a4020787c47ad3ef113\";\n\n  function requestCoordinates(location) {\n    return `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${apiKey}`;\n  }\n\n  function requestWeatherFromCoord(coordinates) {\n    var lat = coordinates.lat;\n    var lon = coordinates.lon;\n    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;\n  }\n\n  async function getCoordinates(url) {\n    const response = await fetch(url);\n    const data = await response.json();\n    return data[0];\n  }\n\n  async function getForecast(url) {\n    const response = await fetch(url);\n    const forecast = await response.json();\n    console.log(forecast.weather[0].main);\n    return forecast;\n  }\n\n  return {\n    requestCoordinates,\n    requestWeatherFromCoord,\n    getForecast,\n    getCoordinates\n  };\n})();\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/weather.js?");

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