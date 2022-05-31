/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/search-icon.png */ "./src/images/search-icon.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap'); */\n/* @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap'); */\n/* font-family: 'Montserrat', sans-serif; */\n\n* {\n    box-sizing: border-box;\n    font-size: 10px;\n    font-family: 'Montserrat', sans-serif;\n\n    /* Style 1\n    --main-bg-color: #A9E5BB;\n    --sub-dark-color: #2D1E2F;\n    --sub-light-color: #FCF6B1;\n    --alt-dark-color: #F72C25;\n    --alt-light-color: #F7B32B; */\n\n    /* Style 2  */\n    --main-txt-light: white;\n    --main-txt-color: #4E5340;\n    --sub-txt-color: #697268;\n\n    --main-bg-color: #B7D1DA;\n    --sub-bg-color: #E2E8DD;\n\n    --alt-light-color: #95A3A4;\n    --sub-bg-opaque: #95a3a457;\n\n    /* Style 2 \n    --main-txt-light: white;\n    --main-bg-color: #BFD7EA;\n    --main-txt-color: black;\n    --sub-dark-color: #E0FF4F;\n    --sub-light-color: #0B3954;\n    --alt-dark-color: #FF6663;\n    --alt-light-color: #FEFFFE;\n    --sub-bg-opaque: #95a3a457; */\n\n    /* Style 2 \n    --main-txt-light: #FFFD82;\n    --main-bg-color: #1C2541;\n    --main-txt-color: 5BC0BE;\n    --sub-dark-color: #5BC0BE;\n    --sub-light-color: #0B132B;\n    --alt-dark-color: #3A506B;\n    --alt-light-color: #1C2541;\n    --sub-bg-opaque: #95a3a457;\n     */\n\n    /* Neon\n    --main-txt-light: #56E39F;\n    --main-bg-color: #1D201F;\n    --main-txt-color: black;\n    --sub-dark-color: #009DDC;\n    --sub-light-color: #032B43;\n    --alt-dark-color: #EC91D8;\n    --alt-light-color: #56E39F;\n    --sub-bg-opaque: #95a3a457;\n     */\n}\n\n/*Main Section Styles*/\nbody {\n    position: relative;\n    background-color: var(--main-bg-color);\n    width: 100vw;\n    height: 100vh;\n}\n\n#search-bar {\n    grid-area: 1/1/2/2;\n    display: flex;\n    justify-content: flex-start;\n    position: relative;\n    height: 5rem;\n    margin: 2rem 2rem;\n\n\n}\n\n#weather-display {\n    position: relative;\n    top: 25vh;\n    left: 25vw;\n    \n    background-color: var(--sub-bg-color);\n    border-radius: .5rem;\n    box-shadow: 0 2px 5px var(--main-bg-color);\n    padding: 1rem;\n    width:450px;\n    max-width: 100%;\n    height: 300px;\n    overflow: hidden;\n    display: grid;\n    grid-template-rows: repeat(10,1fr);\n    grid-template-columns: repeat(10,1fr);\n}\n\n/*Search Bar Styles*/\n\n#form {\n    position: relative;\n    /* width: 20vw;\n    min-width: 4rem; */\n    top: 0;\n    left:0;\n}\n\n#form input {\n    background-color: var(--sub-bg-opaque);\n    color: var(--main-txt-light);\n    padding: .3rem .3rem .3rem 3rem;\n    height: 3rem;\n    width: 20vw;\n    min-width: 20rem;\n    border: none;\n    border-radius: .5rem;\n\n    font-family: inherit;\n    font-size: 1.5rem;\n\n}\n\n#form button {\n    height: 3rem;\n    width: 3rem;\n    background-color: transparent;\n    position: absolute;\n    border: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: contain;\n\n}\n\n#input-error {\n    color: red;\n}\n\n#form button:hover {\n    cursor: pointer;\n}\n\n#form input:focus-visible {\n    outline: none;\n}\n\n#form input::placeholder {\n    color: var(--main-txt-light)\n}\n\n\n\n/*Weather Display Content Styles*/\n#city {\n    grid-area: 1/1/4/9 ;\n    padding: 0 0 2rem 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    overflow-wrap: break-word;\n}\n\n#city p {\n    font-size: 2.5rem;\n    color: var(--main-txt-color);\n}\n\n#weather {\n    grid-area: 3/1/5/8 ;\n    padding: 0 0 0 3rem;\n\n}\n\n#weather p {\n    font-size: 1.75rem;\n    color: var(--sub-txt-color);\n}\n\n#weather-img {\n    grid-area: 1/8/5/11 ;\n    display: flex;\n    justify-content: center;\n}\n\n#temp-now {\n    grid-area: 5/1/11/6 ;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#temp-now p {\n    font-size: 9rem;\n    font-family: 'Montserrat', sans-serif; \n    color: var(--main-txt-color);\n\n}\n\n#units {\n    grid-area: 5/6/8/8 ;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n}\n\n#units p {\n    grid-area: 5/6/8/8 ;\n    font-size: 2rem;\n    font-family: 'Montserrat', sans-serif; \n    color: var(--sub-txt-color);\n}\n\n#unit-switch {\n    grid-area: 8/6/11/8 ;\n}\n\n#sub-info {\n    grid-area: 5/8/11/11 ;\n    display: flex;\n    flex-direction: column;\n    display: flex;\n    flex-direction: column;\n    /* margin-left: 1rem; */\n    justify-content: center;\n}\n\n#sub-info p {\n    font-size: 1.25rem;\n    color: var(--sub-txt-color);\n}\n\n#unit-toggle {\n    /* border: 1px solid var(--sub-dark-color); */\n    border: none;\n    background-color: var(--alt-light-color);\n    border-radius: .5rem;\n    padding: .5rem;\n    font-size: 1rem;\n    color: var(--sub-bg-color);\n}\n\n#unit-toggle:hover {\n    /* border: 1px solid var(--sub-dark-color); */\n    border: none;\n    background-color: var(--main-bg-color);\n    color: var(--main-txt-color);\n    cursor: pointer;\n}\n\n#unit-toggle:active {\n    border: 1px solid var(--main-txt-color);\n}\n\n\n\n\n\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,2FAA2F;AAC3F,qFAAqF;AAErF,2CAA2C;;AAE3C;IACI,sBAAsB;IACtB,eAAe;IACf,qCAAqC;;IAErC;;;;;iCAK6B;;IAE7B,aAAa;IACb,uBAAuB;IACvB,yBAAyB;IACzB,wBAAwB;;IAExB,wBAAwB;IACxB,uBAAuB;;IAEvB,0BAA0B;IAC1B,0BAA0B;;IAE1B;;;;;;;;iCAQ6B;;IAE7B;;;;;;;;;MASE;;IAEF;;;;;;;;;MASE;AACN;;AAEA,sBAAsB;AACtB;IACI,kBAAkB;IAClB,sCAAsC;IACtC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,2BAA2B;IAC3B,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;;;AAGrB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;;IAEV,qCAAqC;IACrC,oBAAoB;IACpB,0CAA0C;IAC1C,aAAa;IACb,WAAW;IACX,eAAe;IACf,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,kCAAkC;IAClC,qCAAqC;AACzC;;AAEA,oBAAoB;;AAEpB;IACI,kBAAkB;IAClB;sBACkB;IAClB,MAAM;IACN,MAAM;AACV;;AAEA;IACI,sCAAsC;IACtC,4BAA4B;IAC5B,+BAA+B;IAC/B,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,oBAAoB;;IAEpB,oBAAoB;IACpB,iBAAiB;;AAErB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,6BAA6B;IAC7B,kBAAkB;IAClB,YAAY;IACZ,yDAA+C;IAC/C,wBAAwB;;AAE5B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI;AACJ;;;;AAIA,iCAAiC;AACjC;IACI,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,4BAA4B;AAChC;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;;AAEvB;;AAEA;IACI,kBAAkB;IAClB,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,qCAAqC;IACrC,4BAA4B;;AAEhC;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,qCAAqC;IACrC,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,2BAA2B;AAC/B;;AAEA;IACI,6CAA6C;IAC7C,YAAY;IACZ,wCAAwC;IACxC,oBAAoB;IACpB,cAAc;IACd,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,6CAA6C;IAC7C,YAAY;IACZ,sCAAsC;IACtC,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C","sourcesContent":["/* @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap'); */\n/* @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap'); */\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');\n/* font-family: 'Montserrat', sans-serif; */\n\n* {\n    box-sizing: border-box;\n    font-size: 10px;\n    font-family: 'Montserrat', sans-serif;\n\n    /* Style 1\n    --main-bg-color: #A9E5BB;\n    --sub-dark-color: #2D1E2F;\n    --sub-light-color: #FCF6B1;\n    --alt-dark-color: #F72C25;\n    --alt-light-color: #F7B32B; */\n\n    /* Style 2  */\n    --main-txt-light: white;\n    --main-txt-color: #4E5340;\n    --sub-txt-color: #697268;\n\n    --main-bg-color: #B7D1DA;\n    --sub-bg-color: #E2E8DD;\n\n    --alt-light-color: #95A3A4;\n    --sub-bg-opaque: #95a3a457;\n\n    /* Style 2 \n    --main-txt-light: white;\n    --main-bg-color: #BFD7EA;\n    --main-txt-color: black;\n    --sub-dark-color: #E0FF4F;\n    --sub-light-color: #0B3954;\n    --alt-dark-color: #FF6663;\n    --alt-light-color: #FEFFFE;\n    --sub-bg-opaque: #95a3a457; */\n\n    /* Style 2 \n    --main-txt-light: #FFFD82;\n    --main-bg-color: #1C2541;\n    --main-txt-color: 5BC0BE;\n    --sub-dark-color: #5BC0BE;\n    --sub-light-color: #0B132B;\n    --alt-dark-color: #3A506B;\n    --alt-light-color: #1C2541;\n    --sub-bg-opaque: #95a3a457;\n     */\n\n    /* Neon\n    --main-txt-light: #56E39F;\n    --main-bg-color: #1D201F;\n    --main-txt-color: black;\n    --sub-dark-color: #009DDC;\n    --sub-light-color: #032B43;\n    --alt-dark-color: #EC91D8;\n    --alt-light-color: #56E39F;\n    --sub-bg-opaque: #95a3a457;\n     */\n}\n\n/*Main Section Styles*/\nbody {\n    position: relative;\n    background-color: var(--main-bg-color);\n    width: 100vw;\n    height: 100vh;\n}\n\n#search-bar {\n    grid-area: 1/1/2/2;\n    display: flex;\n    justify-content: flex-start;\n    position: relative;\n    height: 5rem;\n    margin: 2rem 2rem;\n\n\n}\n\n#weather-display {\n    position: relative;\n    top: 25vh;\n    left: 25vw;\n    \n    background-color: var(--sub-bg-color);\n    border-radius: .5rem;\n    box-shadow: 0 2px 5px var(--main-bg-color);\n    padding: 1rem;\n    width:450px;\n    max-width: 100%;\n    height: 300px;\n    overflow: hidden;\n    display: grid;\n    grid-template-rows: repeat(10,1fr);\n    grid-template-columns: repeat(10,1fr);\n}\n\n/*Search Bar Styles*/\n\n#form {\n    position: relative;\n    /* width: 20vw;\n    min-width: 4rem; */\n    top: 0;\n    left:0;\n}\n\n#form input {\n    background-color: var(--sub-bg-opaque);\n    color: var(--main-txt-light);\n    padding: .3rem .3rem .3rem 3rem;\n    height: 3rem;\n    width: 20vw;\n    min-width: 20rem;\n    border: none;\n    border-radius: .5rem;\n\n    font-family: inherit;\n    font-size: 1.5rem;\n\n}\n\n#form button {\n    height: 3rem;\n    width: 3rem;\n    background-color: transparent;\n    position: absolute;\n    border: none;\n    background-image: url(./images/search-icon.png);\n    background-size: contain;\n\n}\n\n#input-error {\n    color: red;\n}\n\n#form button:hover {\n    cursor: pointer;\n}\n\n#form input:focus-visible {\n    outline: none;\n}\n\n#form input::placeholder {\n    color: var(--main-txt-light)\n}\n\n\n\n/*Weather Display Content Styles*/\n#city {\n    grid-area: 1/1/4/9 ;\n    padding: 0 0 2rem 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    overflow-wrap: break-word;\n}\n\n#city p {\n    font-size: 2.5rem;\n    color: var(--main-txt-color);\n}\n\n#weather {\n    grid-area: 3/1/5/8 ;\n    padding: 0 0 0 3rem;\n\n}\n\n#weather p {\n    font-size: 1.75rem;\n    color: var(--sub-txt-color);\n}\n\n#weather-img {\n    grid-area: 1/8/5/11 ;\n    display: flex;\n    justify-content: center;\n}\n\n#temp-now {\n    grid-area: 5/1/11/6 ;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#temp-now p {\n    font-size: 9rem;\n    font-family: 'Montserrat', sans-serif; \n    color: var(--main-txt-color);\n\n}\n\n#units {\n    grid-area: 5/6/8/8 ;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n}\n\n#units p {\n    grid-area: 5/6/8/8 ;\n    font-size: 2rem;\n    font-family: 'Montserrat', sans-serif; \n    color: var(--sub-txt-color);\n}\n\n#unit-switch {\n    grid-area: 8/6/11/8 ;\n}\n\n#sub-info {\n    grid-area: 5/8/11/11 ;\n    display: flex;\n    flex-direction: column;\n    display: flex;\n    flex-direction: column;\n    /* margin-left: 1rem; */\n    justify-content: center;\n}\n\n#sub-info p {\n    font-size: 1.25rem;\n    color: var(--sub-txt-color);\n}\n\n#unit-toggle {\n    /* border: 1px solid var(--sub-dark-color); */\n    border: none;\n    background-color: var(--alt-light-color);\n    border-radius: .5rem;\n    padding: .5rem;\n    font-size: 1rem;\n    color: var(--sub-bg-color);\n}\n\n#unit-toggle:hover {\n    /* border: 1px solid var(--sub-dark-color); */\n    border: none;\n    background-color: var(--main-bg-color);\n    color: var(--main-txt-color);\n    cursor: pointer;\n}\n\n#unit-toggle:active {\n    border: 1px solid var(--main-txt-color);\n}\n\n\n\n\n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/search-icon.png":
/*!************************************!*\
  !*** ./src/images/search-icon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cfa7ebbeaa2ca49497a2.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const weatherData =  {
    city: "",
    weather: "",
    weatherIcon: "",
    tempNow: "",
    tempFeel: "",
    windSpeed: "",
    windDirection: "",
    humidity: "",
    pressure: "",
    tempUnit: "",
    pressUnit: "",
    windUnit: "",
    switchTempUnit: function() {
        if (this.tempUnit === "F") {
            //to Metric
            this.tempUnit = "C";
            this.pressUnit = "hPa";
            this.windUnit = "kph";
            this.tempNow = Math.round(((this.tempNow - 32)/(9/5))*10)/10;
            this.tempFeel = Math.round(((this.tempFeel - 32)/(9/5))*10)/10;
            this.windSpeed = Math.round((this.windSpeed*1.609344)*10)/10;
            this.pressure = Math.round((this.pressure/0.029529983071445));
        } else {
            //to Imperial
            this.tempUnit = "F";
            this.pressUnit = "inHg";
            this.windUnit = "mph";
            this.tempNow = Math.round(((this.tempNow*(9/5)) + 32)*10)/10;
            this.tempFeel = Math.round(((this.tempFeel*(9/5)) + 32)*10)/10;
            this.windSpeed = Math.round((this.windSpeed/1.609344)*10)/10;
            this.pressure = Math.round((this.pressure*0.029529983071445)*100)/100;
        }
    },
}

const locationData =  {
    city: "",
    country: "",
    state: "",
    long: "",
    lat: "",
}

const addListeners = () => {
    let formIn = document.getElementById("form");
    formIn.addEventListener("submit",submitIn);
    //submits on enter key from input element or submit button 
}

const addUnitListeners = () => {
    //adds switch unit listener since it isnt necessary initially 
    let unitSwitchBtn = document.getElementById("unit-toggle");
    unitSwitchBtn.addEventListener("click",switchUnits);
}



const submitIn = (e) => {
    e.preventDefault();
    let searchInputElement = document.getElementById("search-input");
    let searchValue = cleanInput(searchInputElement.value.trim());

    if (searchValue < 1) {
        searchInputElement.classList = "search-input invalid";
        document.getElementById("input-error").innerHTML = "Please input a location.";
        // console.log("No Value Input");
    } else {
        searchInputElement.classList = "search-input";
        document.getElementById("input-error").innerHTML = "";
        // console.log("Valid Input");
        //Intiates API Call for Geo Location
        getGeo(searchValue).then((resultGeo) => {

            locationData.city = resultGeo[0].name;
            locationData.country = resultGeo[0].country;
            locationData.state = resultGeo[0].state;
            locationData.long = resultGeo[0].lon;
            locationData.lat = resultGeo[0].lat;
        }).then(() => {
            getWeather().then((resultWeather) => {
    
                weatherData.city = resultWeather.name;
                weatherData.weather = resultWeather.weather[0].description;
                weatherData.weatherIcon = resultWeather.weather[0].icon;
                weatherData.tempNow = Math.round((resultWeather.main.temp - 273.15)*10)/10;
                weatherData.tempFeel = Math.round((resultWeather.main.feels_like - 273.15)*10)/10;
                weatherData.tempUnit = "C";
                weatherData.pressUnit = "hPa";
                weatherData.windUnit = "kph";
                weatherData.windSpeed = resultWeather.wind.speed;
                weatherData.windDirection = resultWeather.wind.deg;
                weatherData.humidity = resultWeather.main.humidity;
                weatherData.pressure = resultWeather.main.pressure;
                addUnitListeners();
                updateDisplay();
            });
        })
    }
}

const getGeo = async (locationIn) => {
    try {
        let apiKeyGeo = "a35be01e648d24c61de74b1684656be9" //free api key, same for Geo and Weather APIs
        let urlGeo = `https://api.openweathermap.org/geo/1.0/direct?q=${locationIn}&limit=3&appid=${apiKeyGeo}`;
        let responseGeo = await fetch(urlGeo, {mode: "cors"});
        let geoDataOut = await responseGeo.json();
        if (geoDataOut.length < 1) {
            throw "The location entered was not found. Please try again.";
        }
        return geoDataOut;
    } catch (err) {
        document.getElementById("search-input").classList = "search-input invalid";
        document.getElementById("input-error").innerHTML = `${err}`;
        console.error(err);
    }
}

const getWeather = async () => {
    try {
        let apiKey = "a35be01e648d24c61de74b1684656be9" //free api key
        let URL =`https://api.openweathermap.org/data/2.5/weather?lat=${locationData.lat}&lon=${locationData.long}&appid=${apiKey}`;
        let response = await fetch(URL, {mode: "cors"});
        let weatherDataOut = await response.json();
        //ADD error catching here to throw error if issue pulling weather data
        if (weatherDataOut.length < 1) {
            throw "The weather for that location was not found. Please try again.";
        }
        return weatherDataOut;
    } catch (err) {
        document.getElementById("search-input").classList = "search-input invalid";
        document.getElementById("input-error").innerHTML = `${err}`;
        console.error(err);
    }
}

const updateDisplay = () => {
    console.log
    //Location
    if (locationData.state === undefined) {
        let locationText = document.querySelector("div#city p");
        locationText.innerHTML = `${locationData.city}, ${locationData.country}`;
    } else {
        let locationText = document.querySelector("div#city p");
        locationText.innerHTML = `${locationData.city}, ${locationData.state}, ${locationData.country}`;
    }
    //Weather Description
    let weatherText = document.querySelector("div#weather p");
    weatherText.innerHTML = `${weatherData.weather}`;
    //Weather Image
    let weatherIcon = document.querySelector("div#weather-img img");
    weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.weatherIcon}@2x.png`;
    //Temp Current
    let tempNowText = document.querySelector("div#temp-now p");
    tempNowText.innerHTML = `${weatherData.tempNow}`;
    //Units
    let unitText = document.querySelector("div#units p");
    unitText.innerHTML = `°${weatherData.tempUnit}`;
    //Temp Feels Like
    let tempFeelText = document.querySelector("div#temp-feel p");
    tempFeelText.innerHTML = `Feels Like: ${weatherData.tempFeel} °${weatherData.tempUnit}`;
    //Wind
    let windText = document.querySelector("div#wind p");
    windText.innerHTML = `Wind: ${weatherData.windSpeed}${weatherData.windUnit} ${returnDirection(weatherData.windDirection)}`;
    //Humidity
    let humidText = document.querySelector("div#humidity p");
    humidText.innerHTML = `Humidity: ${weatherData.humidity}%`;
    //Pressure
    let pressureText = document.querySelector("div#pressure p");
    pressureText.innerHTML = `Pressure: ${weatherData.pressure}${weatherData.pressUnit}`;
}

const returnDirection = (windDegrees) => {
    if (67.5 > windDegrees && windDegrees >= 22.5) {
        return "NE"
    } else if (112.5 > windDegrees && windDegrees >= 67.5) {
        return "E"
    }
    else if (157.5 > windDegrees && windDegrees >= 112.5) {
        return "SE"
    }
    else if (202.5 > windDegrees && windDegrees >= 157.5) {
        return "S"
    }
    else if (247.5 > windDegrees && windDegrees >= 202.5) {
        return "SW"
    }
    else if (295.5 > windDegrees && windDegrees >= 247.5) {
        return "W"
    }
    else if (337.5 > windDegrees && windDegrees >= 295.5) {
        return "NW"
    }
    else {
        return "N"
    }
}

const switchUnits = () => {
    weatherData.switchTempUnit();
    updateDisplay();
}

const cleanInput = (inputValue) => {
    //Function to sanitize unser input for Api Location search
    //For now simply splitting out in case of comma input
    let inputsAll = inputValue.split(",");
    return inputsAll[0];
}

//Initializing page with Atlanta Data
document.addEventListener('DOMContentLoaded', addListeners());
document.getElementById("search-input").value = "Atlanta";
const eventStart = new Event('submit');
document.getElementById("form").dispatchEvent(eventStart);
document.getElementById("search-input").value = "";








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9zZWFyY2gtaWNvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7ICovXFxuLyogQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTsgKi9cXG4vKiBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyAqL1xcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuXFxuICAgIC8qIFN0eWxlIDFcXG4gICAgLS1tYWluLWJnLWNvbG9yOiAjQTlFNUJCO1xcbiAgICAtLXN1Yi1kYXJrLWNvbG9yOiAjMkQxRTJGO1xcbiAgICAtLXN1Yi1saWdodC1jb2xvcjogI0ZDRjZCMTtcXG4gICAgLS1hbHQtZGFyay1jb2xvcjogI0Y3MkMyNTtcXG4gICAgLS1hbHQtbGlnaHQtY29sb3I6ICNGN0IzMkI7ICovXFxuXFxuICAgIC8qIFN0eWxlIDIgICovXFxuICAgIC0tbWFpbi10eHQtbGlnaHQ6IHdoaXRlO1xcbiAgICAtLW1haW4tdHh0LWNvbG9yOiAjNEU1MzQwO1xcbiAgICAtLXN1Yi10eHQtY29sb3I6ICM2OTcyNjg7XFxuXFxuICAgIC0tbWFpbi1iZy1jb2xvcjogI0I3RDFEQTtcXG4gICAgLS1zdWItYmctY29sb3I6ICNFMkU4REQ7XFxuXFxuICAgIC0tYWx0LWxpZ2h0LWNvbG9yOiAjOTVBM0E0O1xcbiAgICAtLXN1Yi1iZy1vcGFxdWU6ICM5NWEzYTQ1NztcXG5cXG4gICAgLyogU3R5bGUgMiBcXG4gICAgLS1tYWluLXR4dC1saWdodDogd2hpdGU7XFxuICAgIC0tbWFpbi1iZy1jb2xvcjogI0JGRDdFQTtcXG4gICAgLS1tYWluLXR4dC1jb2xvcjogYmxhY2s7XFxuICAgIC0tc3ViLWRhcmstY29sb3I6ICNFMEZGNEY7XFxuICAgIC0tc3ViLWxpZ2h0LWNvbG9yOiAjMEIzOTU0O1xcbiAgICAtLWFsdC1kYXJrLWNvbG9yOiAjRkY2NjYzO1xcbiAgICAtLWFsdC1saWdodC1jb2xvcjogI0ZFRkZGRTtcXG4gICAgLS1zdWItYmctb3BhcXVlOiAjOTVhM2E0NTc7ICovXFxuXFxuICAgIC8qIFN0eWxlIDIgXFxuICAgIC0tbWFpbi10eHQtbGlnaHQ6ICNGRkZEODI7XFxuICAgIC0tbWFpbi1iZy1jb2xvcjogIzFDMjU0MTtcXG4gICAgLS1tYWluLXR4dC1jb2xvcjogNUJDMEJFO1xcbiAgICAtLXN1Yi1kYXJrLWNvbG9yOiAjNUJDMEJFO1xcbiAgICAtLXN1Yi1saWdodC1jb2xvcjogIzBCMTMyQjtcXG4gICAgLS1hbHQtZGFyay1jb2xvcjogIzNBNTA2QjtcXG4gICAgLS1hbHQtbGlnaHQtY29sb3I6ICMxQzI1NDE7XFxuICAgIC0tc3ViLWJnLW9wYXF1ZTogIzk1YTNhNDU3O1xcbiAgICAgKi9cXG5cXG4gICAgLyogTmVvblxcbiAgICAtLW1haW4tdHh0LWxpZ2h0OiAjNTZFMzlGO1xcbiAgICAtLW1haW4tYmctY29sb3I6ICMxRDIwMUY7XFxuICAgIC0tbWFpbi10eHQtY29sb3I6IGJsYWNrO1xcbiAgICAtLXN1Yi1kYXJrLWNvbG9yOiAjMDA5RERDO1xcbiAgICAtLXN1Yi1saWdodC1jb2xvcjogIzAzMkI0MztcXG4gICAgLS1hbHQtZGFyay1jb2xvcjogI0VDOTFEODtcXG4gICAgLS1hbHQtbGlnaHQtY29sb3I6ICM1NkUzOUY7XFxuICAgIC0tc3ViLWJnLW9wYXF1ZTogIzk1YTNhNDU3O1xcbiAgICAgKi9cXG59XFxuXFxuLypNYWluIFNlY3Rpb24gU3R5bGVzKi9cXG5ib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jc2VhcmNoLWJhciB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgbWFyZ2luOiAycmVtIDJyZW07XFxuXFxuXFxufVxcblxcbiN3ZWF0aGVyLWRpc3BsYXkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMjV2aDtcXG4gICAgbGVmdDogMjV2dztcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1iZy1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHdpZHRoOjQ1MHB4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxufVxcblxcbi8qU2VhcmNoIEJhciBTdHlsZXMqL1xcblxcbiNmb3JtIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAvKiB3aWR0aDogMjB2dztcXG4gICAgbWluLXdpZHRoOiA0cmVtOyAqL1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6MDtcXG59XFxuXFxuI2Zvcm0gaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItYmctb3BhcXVlKTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWxpZ2h0KTtcXG4gICAgcGFkZGluZzogLjNyZW0gLjNyZW0gLjNyZW0gM3JlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgbWluLXdpZHRoOiAyMHJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG5cXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcblxcbn1cXG5cXG4jZm9ybSBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG5cXG59XFxuXFxuI2lucHV0LWVycm9yIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuI2Zvcm0gYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZm9ybSBpbnB1dDpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI2Zvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWxpZ2h0KVxcbn1cXG5cXG5cXG5cXG4vKldlYXRoZXIgRGlzcGxheSBDb250ZW50IFN0eWxlcyovXFxuI2NpdHkge1xcbiAgICBncmlkLWFyZWE6IDEvMS80LzkgO1xcbiAgICBwYWRkaW5nOiAwIDAgMnJlbSAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbiNjaXR5IHAge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG59XFxuXFxuI3dlYXRoZXIge1xcbiAgICBncmlkLWFyZWE6IDMvMS81LzggO1xcbiAgICBwYWRkaW5nOiAwIDAgMCAzcmVtO1xcblxcbn1cXG5cXG4jd2VhdGhlciBwIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tc3ViLXR4dC1jb2xvcik7XFxufVxcblxcbiN3ZWF0aGVyLWltZyB7XFxuICAgIGdyaWQtYXJlYTogMS84LzUvMTEgO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3RlbXAtbm93IHtcXG4gICAgZ3JpZC1hcmVhOiA1LzEvMTEvNiA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdGVtcC1ub3cgcCB7XFxuICAgIGZvbnQtc2l6ZTogOXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jb2xvcik7XFxuXFxufVxcblxcbiN1bml0cyB7XFxuICAgIGdyaWQtYXJlYTogNS82LzgvOCA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiN1bml0cyBwIHtcXG4gICAgZ3JpZC1hcmVhOiA1LzYvOC84IDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyBcXG4gICAgY29sb3I6IHZhcigtLXN1Yi10eHQtY29sb3IpO1xcbn1cXG5cXG4jdW5pdC1zd2l0Y2gge1xcbiAgICBncmlkLWFyZWE6IDgvNi8xMS84IDtcXG59XFxuXFxuI3N1Yi1pbmZvIHtcXG4gICAgZ3JpZC1hcmVhOiA1LzgvMTEvMTEgO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBtYXJnaW4tbGVmdDogMXJlbTsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNzdWItaW5mbyBwIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tc3ViLXR4dC1jb2xvcik7XFxufVxcblxcbiN1bml0LXRvZ2dsZSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1Yi1kYXJrLWNvbG9yKTsgKi9cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtbGlnaHQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXN1Yi1iZy1jb2xvcik7XFxufVxcblxcbiN1bml0LXRvZ2dsZTpob3ZlciB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1Yi1kYXJrLWNvbG9yKTsgKi9cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdW5pdC10b2dnbGU6YWN0aXZlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi10eHQtY29sb3IpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJGQUEyRjtBQUMzRixxRkFBcUY7QUFFckYsMkNBQTJDOztBQUUzQztJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YscUNBQXFDOztJQUVyQzs7Ozs7aUNBSzZCOztJQUU3QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6Qix3QkFBd0I7O0lBRXhCLHdCQUF3QjtJQUN4Qix1QkFBdUI7O0lBRXZCLDBCQUEwQjtJQUMxQiwwQkFBMEI7O0lBRTFCOzs7Ozs7OztpQ0FRNkI7O0lBRTdCOzs7Ozs7Ozs7TUFTRTs7SUFFRjs7Ozs7Ozs7O01BU0U7QUFDTjs7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSSxrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7OztBQUdyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTs7SUFFVixxQ0FBcUM7SUFDckMsb0JBQW9CO0lBQ3BCLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2IsV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMscUNBQXFDO0FBQ3pDOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSSxrQkFBa0I7SUFDbEI7c0JBQ2tCO0lBQ2xCLE1BQU07SUFDTixNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osb0JBQW9COztJQUVwQixvQkFBb0I7SUFDcEIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseURBQStDO0lBQy9DLHdCQUF3Qjs7QUFFNUI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO0FBQ0o7Ozs7QUFJQSxpQ0FBaUM7QUFDakM7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQ0FBcUM7SUFDckMsNEJBQTRCOztBQUVoQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw2Q0FBNkM7SUFDN0MsWUFBWTtJQUNaLHdDQUF3QztJQUN4QyxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSw2Q0FBNkM7SUFDN0MsWUFBWTtJQUNaLHNDQUFzQztJQUN0Qyw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpOyAqL1xcbi8qIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7ICovXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcXG4vKiBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyAqL1xcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuXFxuICAgIC8qIFN0eWxlIDFcXG4gICAgLS1tYWluLWJnLWNvbG9yOiAjQTlFNUJCO1xcbiAgICAtLXN1Yi1kYXJrLWNvbG9yOiAjMkQxRTJGO1xcbiAgICAtLXN1Yi1saWdodC1jb2xvcjogI0ZDRjZCMTtcXG4gICAgLS1hbHQtZGFyay1jb2xvcjogI0Y3MkMyNTtcXG4gICAgLS1hbHQtbGlnaHQtY29sb3I6ICNGN0IzMkI7ICovXFxuXFxuICAgIC8qIFN0eWxlIDIgICovXFxuICAgIC0tbWFpbi10eHQtbGlnaHQ6IHdoaXRlO1xcbiAgICAtLW1haW4tdHh0LWNvbG9yOiAjNEU1MzQwO1xcbiAgICAtLXN1Yi10eHQtY29sb3I6ICM2OTcyNjg7XFxuXFxuICAgIC0tbWFpbi1iZy1jb2xvcjogI0I3RDFEQTtcXG4gICAgLS1zdWItYmctY29sb3I6ICNFMkU4REQ7XFxuXFxuICAgIC0tYWx0LWxpZ2h0LWNvbG9yOiAjOTVBM0E0O1xcbiAgICAtLXN1Yi1iZy1vcGFxdWU6ICM5NWEzYTQ1NztcXG5cXG4gICAgLyogU3R5bGUgMiBcXG4gICAgLS1tYWluLXR4dC1saWdodDogd2hpdGU7XFxuICAgIC0tbWFpbi1iZy1jb2xvcjogI0JGRDdFQTtcXG4gICAgLS1tYWluLXR4dC1jb2xvcjogYmxhY2s7XFxuICAgIC0tc3ViLWRhcmstY29sb3I6ICNFMEZGNEY7XFxuICAgIC0tc3ViLWxpZ2h0LWNvbG9yOiAjMEIzOTU0O1xcbiAgICAtLWFsdC1kYXJrLWNvbG9yOiAjRkY2NjYzO1xcbiAgICAtLWFsdC1saWdodC1jb2xvcjogI0ZFRkZGRTtcXG4gICAgLS1zdWItYmctb3BhcXVlOiAjOTVhM2E0NTc7ICovXFxuXFxuICAgIC8qIFN0eWxlIDIgXFxuICAgIC0tbWFpbi10eHQtbGlnaHQ6ICNGRkZEODI7XFxuICAgIC0tbWFpbi1iZy1jb2xvcjogIzFDMjU0MTtcXG4gICAgLS1tYWluLXR4dC1jb2xvcjogNUJDMEJFO1xcbiAgICAtLXN1Yi1kYXJrLWNvbG9yOiAjNUJDMEJFO1xcbiAgICAtLXN1Yi1saWdodC1jb2xvcjogIzBCMTMyQjtcXG4gICAgLS1hbHQtZGFyay1jb2xvcjogIzNBNTA2QjtcXG4gICAgLS1hbHQtbGlnaHQtY29sb3I6ICMxQzI1NDE7XFxuICAgIC0tc3ViLWJnLW9wYXF1ZTogIzk1YTNhNDU3O1xcbiAgICAgKi9cXG5cXG4gICAgLyogTmVvblxcbiAgICAtLW1haW4tdHh0LWxpZ2h0OiAjNTZFMzlGO1xcbiAgICAtLW1haW4tYmctY29sb3I6ICMxRDIwMUY7XFxuICAgIC0tbWFpbi10eHQtY29sb3I6IGJsYWNrO1xcbiAgICAtLXN1Yi1kYXJrLWNvbG9yOiAjMDA5RERDO1xcbiAgICAtLXN1Yi1saWdodC1jb2xvcjogIzAzMkI0MztcXG4gICAgLS1hbHQtZGFyay1jb2xvcjogI0VDOTFEODtcXG4gICAgLS1hbHQtbGlnaHQtY29sb3I6ICM1NkUzOUY7XFxuICAgIC0tc3ViLWJnLW9wYXF1ZTogIzk1YTNhNDU3O1xcbiAgICAgKi9cXG59XFxuXFxuLypNYWluIFNlY3Rpb24gU3R5bGVzKi9cXG5ib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jc2VhcmNoLWJhciB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgbWFyZ2luOiAycmVtIDJyZW07XFxuXFxuXFxufVxcblxcbiN3ZWF0aGVyLWRpc3BsYXkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMjV2aDtcXG4gICAgbGVmdDogMjV2dztcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1iZy1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHdpZHRoOjQ1MHB4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxufVxcblxcbi8qU2VhcmNoIEJhciBTdHlsZXMqL1xcblxcbiNmb3JtIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAvKiB3aWR0aDogMjB2dztcXG4gICAgbWluLXdpZHRoOiA0cmVtOyAqL1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6MDtcXG59XFxuXFxuI2Zvcm0gaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItYmctb3BhcXVlKTtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWxpZ2h0KTtcXG4gICAgcGFkZGluZzogLjNyZW0gLjNyZW0gLjNyZW0gM3JlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogMjB2dztcXG4gICAgbWluLXdpZHRoOiAyMHJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG5cXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcblxcbn1cXG5cXG4jZm9ybSBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9zZWFyY2gtaWNvbi5wbmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuXFxufVxcblxcbiNpbnB1dC1lcnJvciB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbiNmb3JtIGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2Zvcm0gaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNmb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1saWdodClcXG59XFxuXFxuXFxuXFxuLypXZWF0aGVyIERpc3BsYXkgQ29udGVudCBTdHlsZXMqL1xcbiNjaXR5IHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvNC85IDtcXG4gICAgcGFkZGluZzogMCAwIDJyZW0gMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4jY2l0eSBwIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jb2xvcik7XFxufVxcblxcbiN3ZWF0aGVyIHtcXG4gICAgZ3JpZC1hcmVhOiAzLzEvNS84IDtcXG4gICAgcGFkZGluZzogMCAwIDAgM3JlbTtcXG5cXG59XFxuXFxuI3dlYXRoZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXN1Yi10eHQtY29sb3IpO1xcbn1cXG5cXG4jd2VhdGhlci1pbWcge1xcbiAgICBncmlkLWFyZWE6IDEvOC81LzExIDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiN0ZW1wLW5vdyB7XFxuICAgIGdyaWQtYXJlYTogNS8xLzExLzYgO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3RlbXAtbm93IHAge1xcbiAgICBmb250LXNpemU6IDlyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7IFxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY29sb3IpO1xcblxcbn1cXG5cXG4jdW5pdHMge1xcbiAgICBncmlkLWFyZWE6IDUvNi84LzggO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdW5pdHMgcCB7XFxuICAgIGdyaWQtYXJlYTogNS82LzgvOCA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgXFxuICAgIGNvbG9yOiB2YXIoLS1zdWItdHh0LWNvbG9yKTtcXG59XFxuXFxuI3VuaXQtc3dpdGNoIHtcXG4gICAgZ3JpZC1hcmVhOiA4LzYvMTEvOCA7XFxufVxcblxcbiNzdWItaW5mbyB7XFxuICAgIGdyaWQtYXJlYTogNS84LzExLzExIDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDFyZW07ICovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jc3ViLWluZm8gcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXN1Yi10eHQtY29sb3IpO1xcbn1cXG5cXG4jdW5pdC10b2dnbGUge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdWItZGFyay1jb2xvcik7ICovXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWxpZ2h0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zdWItYmctY29sb3IpO1xcbn1cXG5cXG4jdW5pdC10b2dnbGU6aG92ZXIge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdWItZGFyay1jb2xvcik7ICovXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3VuaXQtdG9nZ2xlOmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5cbmNvbnN0IHdlYXRoZXJEYXRhID0gIHtcbiAgICBjaXR5OiBcIlwiLFxuICAgIHdlYXRoZXI6IFwiXCIsXG4gICAgd2VhdGhlckljb246IFwiXCIsXG4gICAgdGVtcE5vdzogXCJcIixcbiAgICB0ZW1wRmVlbDogXCJcIixcbiAgICB3aW5kU3BlZWQ6IFwiXCIsXG4gICAgd2luZERpcmVjdGlvbjogXCJcIixcbiAgICBodW1pZGl0eTogXCJcIixcbiAgICBwcmVzc3VyZTogXCJcIixcbiAgICB0ZW1wVW5pdDogXCJcIixcbiAgICBwcmVzc1VuaXQ6IFwiXCIsXG4gICAgd2luZFVuaXQ6IFwiXCIsXG4gICAgc3dpdGNoVGVtcFVuaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy50ZW1wVW5pdCA9PT0gXCJGXCIpIHtcbiAgICAgICAgICAgIC8vdG8gTWV0cmljXG4gICAgICAgICAgICB0aGlzLnRlbXBVbml0ID0gXCJDXCI7XG4gICAgICAgICAgICB0aGlzLnByZXNzVW5pdCA9IFwiaFBhXCI7XG4gICAgICAgICAgICB0aGlzLndpbmRVbml0ID0gXCJrcGhcIjtcbiAgICAgICAgICAgIHRoaXMudGVtcE5vdyA9IE1hdGgucm91bmQoKCh0aGlzLnRlbXBOb3cgLSAzMikvKDkvNSkpKjEwKS8xMDtcbiAgICAgICAgICAgIHRoaXMudGVtcEZlZWwgPSBNYXRoLnJvdW5kKCgodGhpcy50ZW1wRmVlbCAtIDMyKS8oOS81KSkqMTApLzEwO1xuICAgICAgICAgICAgdGhpcy53aW5kU3BlZWQgPSBNYXRoLnJvdW5kKCh0aGlzLndpbmRTcGVlZCoxLjYwOTM0NCkqMTApLzEwO1xuICAgICAgICAgICAgdGhpcy5wcmVzc3VyZSA9IE1hdGgucm91bmQoKHRoaXMucHJlc3N1cmUvMC4wMjk1Mjk5ODMwNzE0NDUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vdG8gSW1wZXJpYWxcbiAgICAgICAgICAgIHRoaXMudGVtcFVuaXQgPSBcIkZcIjtcbiAgICAgICAgICAgIHRoaXMucHJlc3NVbml0ID0gXCJpbkhnXCI7XG4gICAgICAgICAgICB0aGlzLndpbmRVbml0ID0gXCJtcGhcIjtcbiAgICAgICAgICAgIHRoaXMudGVtcE5vdyA9IE1hdGgucm91bmQoKCh0aGlzLnRlbXBOb3cqKDkvNSkpICsgMzIpKjEwKS8xMDtcbiAgICAgICAgICAgIHRoaXMudGVtcEZlZWwgPSBNYXRoLnJvdW5kKCgodGhpcy50ZW1wRmVlbCooOS81KSkgKyAzMikqMTApLzEwO1xuICAgICAgICAgICAgdGhpcy53aW5kU3BlZWQgPSBNYXRoLnJvdW5kKCh0aGlzLndpbmRTcGVlZC8xLjYwOTM0NCkqMTApLzEwO1xuICAgICAgICAgICAgdGhpcy5wcmVzc3VyZSA9IE1hdGgucm91bmQoKHRoaXMucHJlc3N1cmUqMC4wMjk1Mjk5ODMwNzE0NDUpKjEwMCkvMTAwO1xuICAgICAgICB9XG4gICAgfSxcbn1cblxuY29uc3QgbG9jYXRpb25EYXRhID0gIHtcbiAgICBjaXR5OiBcIlwiLFxuICAgIGNvdW50cnk6IFwiXCIsXG4gICAgc3RhdGU6IFwiXCIsXG4gICAgbG9uZzogXCJcIixcbiAgICBsYXQ6IFwiXCIsXG59XG5cbmNvbnN0IGFkZExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBsZXQgZm9ybUluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xuICAgIGZvcm1Jbi5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsc3VibWl0SW4pO1xuICAgIC8vc3VibWl0cyBvbiBlbnRlciBrZXkgZnJvbSBpbnB1dCBlbGVtZW50IG9yIHN1Ym1pdCBidXR0b24gXG59XG5cbmNvbnN0IGFkZFVuaXRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgLy9hZGRzIHN3aXRjaCB1bml0IGxpc3RlbmVyIHNpbmNlIGl0IGlzbnQgbmVjZXNzYXJ5IGluaXRpYWxseSBcbiAgICBsZXQgdW5pdFN3aXRjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW5pdC10b2dnbGVcIik7XG4gICAgdW5pdFN3aXRjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixzd2l0Y2hVbml0cyk7XG59XG5cblxuXG5jb25zdCBzdWJtaXRJbiA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBzZWFyY2hJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pbnB1dFwiKTtcbiAgICBsZXQgc2VhcmNoVmFsdWUgPSBjbGVhbklucHV0KHNlYXJjaElucHV0RWxlbWVudC52YWx1ZS50cmltKCkpO1xuXG4gICAgaWYgKHNlYXJjaFZhbHVlIDwgMSkge1xuICAgICAgICBzZWFyY2hJbnB1dEVsZW1lbnQuY2xhc3NMaXN0ID0gXCJzZWFyY2gtaW5wdXQgaW52YWxpZFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWVycm9yXCIpLmlubmVySFRNTCA9IFwiUGxlYXNlIGlucHV0IGEgbG9jYXRpb24uXCI7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTm8gVmFsdWUgSW5wdXRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2VhcmNoSW5wdXRFbGVtZW50LmNsYXNzTGlzdCA9IFwic2VhcmNoLWlucHV0XCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZXJyb3JcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJWYWxpZCBJbnB1dFwiKTtcbiAgICAgICAgLy9JbnRpYXRlcyBBUEkgQ2FsbCBmb3IgR2VvIExvY2F0aW9uXG4gICAgICAgIGdldEdlbyhzZWFyY2hWYWx1ZSkudGhlbigocmVzdWx0R2VvKSA9PiB7XG5cbiAgICAgICAgICAgIGxvY2F0aW9uRGF0YS5jaXR5ID0gcmVzdWx0R2VvWzBdLm5hbWU7XG4gICAgICAgICAgICBsb2NhdGlvbkRhdGEuY291bnRyeSA9IHJlc3VsdEdlb1swXS5jb3VudHJ5O1xuICAgICAgICAgICAgbG9jYXRpb25EYXRhLnN0YXRlID0gcmVzdWx0R2VvWzBdLnN0YXRlO1xuICAgICAgICAgICAgbG9jYXRpb25EYXRhLmxvbmcgPSByZXN1bHRHZW9bMF0ubG9uO1xuICAgICAgICAgICAgbG9jYXRpb25EYXRhLmxhdCA9IHJlc3VsdEdlb1swXS5sYXQ7XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgZ2V0V2VhdGhlcigpLnRoZW4oKHJlc3VsdFdlYXRoZXIpID0+IHtcbiAgICBcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS5jaXR5ID0gcmVzdWx0V2VhdGhlci5uYW1lO1xuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLndlYXRoZXIgPSByZXN1bHRXZWF0aGVyLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEud2VhdGhlckljb24gPSByZXN1bHRXZWF0aGVyLndlYXRoZXJbMF0uaWNvbjtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS50ZW1wTm93ID0gTWF0aC5yb3VuZCgocmVzdWx0V2VhdGhlci5tYWluLnRlbXAgLSAyNzMuMTUpKjEwKS8xMDtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS50ZW1wRmVlbCA9IE1hdGgucm91bmQoKHJlc3VsdFdlYXRoZXIubWFpbi5mZWVsc19saWtlIC0gMjczLjE1KSoxMCkvMTA7XG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEudGVtcFVuaXQgPSBcIkNcIjtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS5wcmVzc1VuaXQgPSBcImhQYVwiO1xuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLndpbmRVbml0ID0gXCJrcGhcIjtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS53aW5kU3BlZWQgPSByZXN1bHRXZWF0aGVyLndpbmQuc3BlZWQ7XG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEud2luZERpcmVjdGlvbiA9IHJlc3VsdFdlYXRoZXIud2luZC5kZWc7XG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEuaHVtaWRpdHkgPSByZXN1bHRXZWF0aGVyLm1haW4uaHVtaWRpdHk7XG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEucHJlc3N1cmUgPSByZXN1bHRXZWF0aGVyLm1haW4ucHJlc3N1cmU7XG4gICAgICAgICAgICAgICAgYWRkVW5pdExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZURpc3BsYXkoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuY29uc3QgZ2V0R2VvID0gYXN5bmMgKGxvY2F0aW9uSW4pID0+IHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgYXBpS2V5R2VvID0gXCJhMzViZTAxZTY0OGQyNGM2MWRlNzRiMTY4NDY1NmJlOVwiIC8vZnJlZSBhcGkga2V5LCBzYW1lIGZvciBHZW8gYW5kIFdlYXRoZXIgQVBJc1xuICAgICAgICBsZXQgdXJsR2VvID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb25Jbn0mbGltaXQ9MyZhcHBpZD0ke2FwaUtleUdlb31gO1xuICAgICAgICBsZXQgcmVzcG9uc2VHZW8gPSBhd2FpdCBmZXRjaCh1cmxHZW8sIHttb2RlOiBcImNvcnNcIn0pO1xuICAgICAgICBsZXQgZ2VvRGF0YU91dCA9IGF3YWl0IHJlc3BvbnNlR2VvLmpzb24oKTtcbiAgICAgICAgaWYgKGdlb0RhdGFPdXQubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhyb3cgXCJUaGUgbG9jYXRpb24gZW50ZXJlZCB3YXMgbm90IGZvdW5kLiBQbGVhc2UgdHJ5IGFnYWluLlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZW9EYXRhT3V0O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pbnB1dFwiKS5jbGFzc0xpc3QgPSBcInNlYXJjaC1pbnB1dCBpbnZhbGlkXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZXJyb3JcIikuaW5uZXJIVE1MID0gYCR7ZXJyfWA7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG59XG5cbmNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGFwaUtleSA9IFwiYTM1YmUwMWU2NDhkMjRjNjFkZTc0YjE2ODQ2NTZiZTlcIiAvL2ZyZWUgYXBpIGtleVxuICAgICAgICBsZXQgVVJMID1gaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bG9jYXRpb25EYXRhLmxhdH0mbG9uPSR7bG9jYXRpb25EYXRhLmxvbmd9JmFwcGlkPSR7YXBpS2V5fWA7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCwge21vZGU6IFwiY29yc1wifSk7XG4gICAgICAgIGxldCB3ZWF0aGVyRGF0YU91dCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgLy9BREQgZXJyb3IgY2F0Y2hpbmcgaGVyZSB0byB0aHJvdyBlcnJvciBpZiBpc3N1ZSBwdWxsaW5nIHdlYXRoZXIgZGF0YVxuICAgICAgICBpZiAod2VhdGhlckRhdGFPdXQubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhyb3cgXCJUaGUgd2VhdGhlciBmb3IgdGhhdCBsb2NhdGlvbiB3YXMgbm90IGZvdW5kLiBQbGVhc2UgdHJ5IGFnYWluLlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YU91dDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtaW5wdXRcIikuY2xhc3NMaXN0ID0gXCJzZWFyY2gtaW5wdXQgaW52YWxpZFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWVycm9yXCIpLmlubmVySFRNTCA9IGAke2Vycn1gO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxufVxuXG5jb25zdCB1cGRhdGVEaXNwbGF5ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nXG4gICAgLy9Mb2NhdGlvblxuICAgIGlmIChsb2NhdGlvbkRhdGEuc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsZXQgbG9jYXRpb25UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNjaXR5IHBcIik7XG4gICAgICAgIGxvY2F0aW9uVGV4dC5pbm5lckhUTUwgPSBgJHtsb2NhdGlvbkRhdGEuY2l0eX0sICR7bG9jYXRpb25EYXRhLmNvdW50cnl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbG9jYXRpb25UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNjaXR5IHBcIik7XG4gICAgICAgIGxvY2F0aW9uVGV4dC5pbm5lckhUTUwgPSBgJHtsb2NhdGlvbkRhdGEuY2l0eX0sICR7bG9jYXRpb25EYXRhLnN0YXRlfSwgJHtsb2NhdGlvbkRhdGEuY291bnRyeX1gO1xuICAgIH1cbiAgICAvL1dlYXRoZXIgRGVzY3JpcHRpb25cbiAgICBsZXQgd2VhdGhlclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I3dlYXRoZXIgcFwiKTtcbiAgICB3ZWF0aGVyVGV4dC5pbm5lckhUTUwgPSBgJHt3ZWF0aGVyRGF0YS53ZWF0aGVyfWA7XG4gICAgLy9XZWF0aGVyIEltYWdlXG4gICAgbGV0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiN3ZWF0aGVyLWltZyBpbWdcIik7XG4gICAgd2VhdGhlckljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJEYXRhLndlYXRoZXJJY29ufUAyeC5wbmdgO1xuICAgIC8vVGVtcCBDdXJyZW50XG4gICAgbGV0IHRlbXBOb3dUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiN0ZW1wLW5vdyBwXCIpO1xuICAgIHRlbXBOb3dUZXh0LmlubmVySFRNTCA9IGAke3dlYXRoZXJEYXRhLnRlbXBOb3d9YDtcbiAgICAvL1VuaXRzXG4gICAgbGV0IHVuaXRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiN1bml0cyBwXCIpO1xuICAgIHVuaXRUZXh0LmlubmVySFRNTCA9IGDCsCR7d2VhdGhlckRhdGEudGVtcFVuaXR9YDtcbiAgICAvL1RlbXAgRmVlbHMgTGlrZVxuICAgIGxldCB0ZW1wRmVlbFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I3RlbXAtZmVlbCBwXCIpO1xuICAgIHRlbXBGZWVsVGV4dC5pbm5lckhUTUwgPSBgRmVlbHMgTGlrZTogJHt3ZWF0aGVyRGF0YS50ZW1wRmVlbH0gwrAke3dlYXRoZXJEYXRhLnRlbXBVbml0fWA7XG4gICAgLy9XaW5kXG4gICAgbGV0IHdpbmRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiN3aW5kIHBcIik7XG4gICAgd2luZFRleHQuaW5uZXJIVE1MID0gYFdpbmQ6ICR7d2VhdGhlckRhdGEud2luZFNwZWVkfSR7d2VhdGhlckRhdGEud2luZFVuaXR9ICR7cmV0dXJuRGlyZWN0aW9uKHdlYXRoZXJEYXRhLndpbmREaXJlY3Rpb24pfWA7XG4gICAgLy9IdW1pZGl0eVxuICAgIGxldCBodW1pZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2h1bWlkaXR5IHBcIik7XG4gICAgaHVtaWRUZXh0LmlubmVySFRNTCA9IGBIdW1pZGl0eTogJHt3ZWF0aGVyRGF0YS5odW1pZGl0eX0lYDtcbiAgICAvL1ByZXNzdXJlXG4gICAgbGV0IHByZXNzdXJlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjcHJlc3N1cmUgcFwiKTtcbiAgICBwcmVzc3VyZVRleHQuaW5uZXJIVE1MID0gYFByZXNzdXJlOiAke3dlYXRoZXJEYXRhLnByZXNzdXJlfSR7d2VhdGhlckRhdGEucHJlc3NVbml0fWA7XG59XG5cbmNvbnN0IHJldHVybkRpcmVjdGlvbiA9ICh3aW5kRGVncmVlcykgPT4ge1xuICAgIGlmICg2Ny41ID4gd2luZERlZ3JlZXMgJiYgd2luZERlZ3JlZXMgPj0gMjIuNSkge1xuICAgICAgICByZXR1cm4gXCJORVwiXG4gICAgfSBlbHNlIGlmICgxMTIuNSA+IHdpbmREZWdyZWVzICYmIHdpbmREZWdyZWVzID49IDY3LjUpIHtcbiAgICAgICAgcmV0dXJuIFwiRVwiXG4gICAgfVxuICAgIGVsc2UgaWYgKDE1Ny41ID4gd2luZERlZ3JlZXMgJiYgd2luZERlZ3JlZXMgPj0gMTEyLjUpIHtcbiAgICAgICAgcmV0dXJuIFwiU0VcIlxuICAgIH1cbiAgICBlbHNlIGlmICgyMDIuNSA+IHdpbmREZWdyZWVzICYmIHdpbmREZWdyZWVzID49IDE1Ny41KSB7XG4gICAgICAgIHJldHVybiBcIlNcIlxuICAgIH1cbiAgICBlbHNlIGlmICgyNDcuNSA+IHdpbmREZWdyZWVzICYmIHdpbmREZWdyZWVzID49IDIwMi41KSB7XG4gICAgICAgIHJldHVybiBcIlNXXCJcbiAgICB9XG4gICAgZWxzZSBpZiAoMjk1LjUgPiB3aW5kRGVncmVlcyAmJiB3aW5kRGVncmVlcyA+PSAyNDcuNSkge1xuICAgICAgICByZXR1cm4gXCJXXCJcbiAgICB9XG4gICAgZWxzZSBpZiAoMzM3LjUgPiB3aW5kRGVncmVlcyAmJiB3aW5kRGVncmVlcyA+PSAyOTUuNSkge1xuICAgICAgICByZXR1cm4gXCJOV1wiXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJOXCJcbiAgICB9XG59XG5cbmNvbnN0IHN3aXRjaFVuaXRzID0gKCkgPT4ge1xuICAgIHdlYXRoZXJEYXRhLnN3aXRjaFRlbXBVbml0KCk7XG4gICAgdXBkYXRlRGlzcGxheSgpO1xufVxuXG5jb25zdCBjbGVhbklucHV0ID0gKGlucHV0VmFsdWUpID0+IHtcbiAgICAvL0Z1bmN0aW9uIHRvIHNhbml0aXplIHVuc2VyIGlucHV0IGZvciBBcGkgTG9jYXRpb24gc2VhcmNoXG4gICAgLy9Gb3Igbm93IHNpbXBseSBzcGxpdHRpbmcgb3V0IGluIGNhc2Ugb2YgY29tbWEgaW5wdXRcbiAgICBsZXQgaW5wdXRzQWxsID0gaW5wdXRWYWx1ZS5zcGxpdChcIixcIik7XG4gICAgcmV0dXJuIGlucHV0c0FsbFswXTtcbn1cblxuLy9Jbml0aWFsaXppbmcgcGFnZSB3aXRoIEF0bGFudGEgRGF0YVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFkZExpc3RlbmVycygpKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWlucHV0XCIpLnZhbHVlID0gXCJBdGxhbnRhXCI7XG5jb25zdCBldmVudFN0YXJ0ID0gbmV3IEV2ZW50KCdzdWJtaXQnKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKS5kaXNwYXRjaEV2ZW50KGV2ZW50U3RhcnQpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtaW5wdXRcIikudmFsdWUgPSBcIlwiO1xuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=