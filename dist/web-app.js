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
___CSS_LOADER_EXPORT___.push([module.id, "\n/* font-family: 'Montserrat', sans-serif; */\n\n* {\n    box-sizing: border-box;\n    font-size: 10px;\n    font-family: 'Montserrat', sans-serif;\n\n    /* Style 1 */\n    --main-txt-light: white;\n    --main-txt-color: #4E5340;\n    --sub-txt-color: #697268;\n\n    --main-bg-color: #B7D1DA;\n    --sub-bg-color: #E2E8DD;\n\n    --alt-light-color: #95A3A4;\n    --sub-bg-opaque: #95a3a457;\n\n}\n\n/*Main Section Styles*/\nbody {\n    position: relative;\n    background-color: var(--main-bg-color);\n    width: 100vw;\n    height: 100vh;\n}\n\n#search-bar {\n    grid-area: 1/1/2/2;\n    display: flex;\n    justify-content: flex-start;\n    position: relative;\n    height: 5rem;\n    margin: 2rem 2rem;\n\n\n}\n\n#weather-display {\n    position: relative;\n    top: 25vh;\n    left: 25vw;\n    \n    background-color: var(--sub-bg-color);\n    border-radius: .5rem;\n    box-shadow: 0 2px 5px var(--main-bg-color);\n    padding: 1rem;\n    width:450px;\n    max-width: 100%;\n    height: 300px;\n    overflow: hidden;\n    display: grid;\n    grid-template-rows: repeat(10,1fr);\n    grid-template-columns: repeat(10,1fr);\n}\n\n/*Search Bar Styles*/\n\n#form {\n    position: relative;\n    /* width: 20vw;\n    min-width: 4rem; */\n    top: 0;\n    left:0;\n}\n\n#form input {\n    background-color: var(--sub-bg-opaque);\n    color: var(--main-txt-light);\n    padding: .3rem .3rem .3rem 3rem;\n    height: 3rem;\n    width: 20vw;\n    min-width: 20rem;\n    border: none;\n    border-radius: .5rem;\n\n    font-family: inherit;\n    font-size: 1.5rem;\n\n}\n\n#form button {\n    height: 3rem;\n    width: 3rem;\n    background-color: transparent;\n    position: absolute;\n    border: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: contain;\n\n}\n\n#input-error {\n    color: red;\n}\n\n#form button:hover {\n    cursor: pointer;\n}\n\n#form input:focus-visible {\n    outline: none;\n}\n\n#form input::placeholder {\n    color: var(--main-txt-light)\n}\n\n\n\n/*Weather Display Content Styles*/\n#city {\n    grid-area: 1/1/4/9 ;\n    padding: 0 0 2rem 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    overflow-wrap: break-word;\n}\n\n#city p {\n    font-size: 2.5rem;\n    color: var(--main-txt-color);\n}\n\n#weather {\n    grid-area: 3/1/5/8 ;\n    padding: 0 0 0 3rem;\n\n}\n\n#weather p {\n    font-size: 1.75rem;\n    color: var(--sub-txt-color);\n}\n\n#weather-img {\n    grid-area: 1/8/5/11 ;\n    display: flex;\n    justify-content: center;\n}\n\n#temp-now {\n    grid-area: 5/1/11/6 ;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#temp-now p {\n    font-size: 9rem;\n    font-family: 'Montserrat', sans-serif; \n    color: var(--main-txt-color);\n\n}\n\n#units {\n    grid-area: 5/6/8/8 ;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n}\n\n#units p {\n    grid-area: 5/6/8/8 ;\n    font-size: 2rem;\n    font-family: 'Montserrat', sans-serif; \n    color: var(--sub-txt-color);\n}\n\n#unit-switch {\n    grid-area: 8/6/11/8 ;\n}\n\n#sub-info {\n    grid-area: 5/8/11/11 ;\n    display: flex;\n    flex-direction: column;\n    display: flex;\n    flex-direction: column;\n    /* margin-left: 1rem; */\n    justify-content: center;\n}\n\n#sub-info p {\n    font-size: 1.25rem;\n    color: var(--sub-txt-color);\n}\n\n#unit-toggle {\n    /* border: 1px solid var(--sub-dark-color); */\n    border: none;\n    background-color: var(--alt-light-color);\n    border-radius: .5rem;\n    padding: .5rem;\n    font-size: 1rem;\n    color: var(--sub-bg-color);\n}\n\n#unit-toggle:hover {\n    /* border: 1px solid var(--sub-dark-color); */\n    border: none;\n    background-color: var(--main-bg-color);\n    color: var(--main-txt-color);\n    cursor: pointer;\n}\n\n#unit-toggle:active {\n    border: 1px solid var(--main-txt-color);\n}\n\n\n\n\n\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AAEA,2CAA2C;;AAE3C;IACI,sBAAsB;IACtB,eAAe;IACf,qCAAqC;;IAErC,YAAY;IACZ,uBAAuB;IACvB,yBAAyB;IACzB,wBAAwB;;IAExB,wBAAwB;IACxB,uBAAuB;;IAEvB,0BAA0B;IAC1B,0BAA0B;;AAE9B;;AAEA,sBAAsB;AACtB;IACI,kBAAkB;IAClB,sCAAsC;IACtC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,2BAA2B;IAC3B,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;;;AAGrB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;;IAEV,qCAAqC;IACrC,oBAAoB;IACpB,0CAA0C;IAC1C,aAAa;IACb,WAAW;IACX,eAAe;IACf,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,kCAAkC;IAClC,qCAAqC;AACzC;;AAEA,oBAAoB;;AAEpB;IACI,kBAAkB;IAClB;sBACkB;IAClB,MAAM;IACN,MAAM;AACV;;AAEA;IACI,sCAAsC;IACtC,4BAA4B;IAC5B,+BAA+B;IAC/B,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,oBAAoB;;IAEpB,oBAAoB;IACpB,iBAAiB;;AAErB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,6BAA6B;IAC7B,kBAAkB;IAClB,YAAY;IACZ,yDAA+C;IAC/C,wBAAwB;;AAE5B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI;AACJ;;;;AAIA,iCAAiC;AACjC;IACI,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,4BAA4B;AAChC;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;;AAEvB;;AAEA;IACI,kBAAkB;IAClB,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,qCAAqC;IACrC,4BAA4B;;AAEhC;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,qCAAqC;IACrC,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,2BAA2B;AAC/B;;AAEA;IACI,6CAA6C;IAC7C,YAAY;IACZ,wCAAwC;IACxC,oBAAoB;IACpB,cAAc;IACd,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,6CAA6C;IAC7C,YAAY;IACZ,sCAAsC;IACtC,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C","sourcesContent":["\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');\n/* font-family: 'Montserrat', sans-serif; */\n\n* {\n    box-sizing: border-box;\n    font-size: 10px;\n    font-family: 'Montserrat', sans-serif;\n\n    /* Style 1 */\n    --main-txt-light: white;\n    --main-txt-color: #4E5340;\n    --sub-txt-color: #697268;\n\n    --main-bg-color: #B7D1DA;\n    --sub-bg-color: #E2E8DD;\n\n    --alt-light-color: #95A3A4;\n    --sub-bg-opaque: #95a3a457;\n\n}\n\n/*Main Section Styles*/\nbody {\n    position: relative;\n    background-color: var(--main-bg-color);\n    width: 100vw;\n    height: 100vh;\n}\n\n#search-bar {\n    grid-area: 1/1/2/2;\n    display: flex;\n    justify-content: flex-start;\n    position: relative;\n    height: 5rem;\n    margin: 2rem 2rem;\n\n\n}\n\n#weather-display {\n    position: relative;\n    top: 25vh;\n    left: 25vw;\n    \n    background-color: var(--sub-bg-color);\n    border-radius: .5rem;\n    box-shadow: 0 2px 5px var(--main-bg-color);\n    padding: 1rem;\n    width:450px;\n    max-width: 100%;\n    height: 300px;\n    overflow: hidden;\n    display: grid;\n    grid-template-rows: repeat(10,1fr);\n    grid-template-columns: repeat(10,1fr);\n}\n\n/*Search Bar Styles*/\n\n#form {\n    position: relative;\n    /* width: 20vw;\n    min-width: 4rem; */\n    top: 0;\n    left:0;\n}\n\n#form input {\n    background-color: var(--sub-bg-opaque);\n    color: var(--main-txt-light);\n    padding: .3rem .3rem .3rem 3rem;\n    height: 3rem;\n    width: 20vw;\n    min-width: 20rem;\n    border: none;\n    border-radius: .5rem;\n\n    font-family: inherit;\n    font-size: 1.5rem;\n\n}\n\n#form button {\n    height: 3rem;\n    width: 3rem;\n    background-color: transparent;\n    position: absolute;\n    border: none;\n    background-image: url(./images/search-icon.png);\n    background-size: contain;\n\n}\n\n#input-error {\n    color: red;\n}\n\n#form button:hover {\n    cursor: pointer;\n}\n\n#form input:focus-visible {\n    outline: none;\n}\n\n#form input::placeholder {\n    color: var(--main-txt-light)\n}\n\n\n\n/*Weather Display Content Styles*/\n#city {\n    grid-area: 1/1/4/9 ;\n    padding: 0 0 2rem 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    overflow-wrap: break-word;\n}\n\n#city p {\n    font-size: 2.5rem;\n    color: var(--main-txt-color);\n}\n\n#weather {\n    grid-area: 3/1/5/8 ;\n    padding: 0 0 0 3rem;\n\n}\n\n#weather p {\n    font-size: 1.75rem;\n    color: var(--sub-txt-color);\n}\n\n#weather-img {\n    grid-area: 1/8/5/11 ;\n    display: flex;\n    justify-content: center;\n}\n\n#temp-now {\n    grid-area: 5/1/11/6 ;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#temp-now p {\n    font-size: 9rem;\n    font-family: 'Montserrat', sans-serif; \n    color: var(--main-txt-color);\n\n}\n\n#units {\n    grid-area: 5/6/8/8 ;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n}\n\n#units p {\n    grid-area: 5/6/8/8 ;\n    font-size: 2rem;\n    font-family: 'Montserrat', sans-serif; \n    color: var(--sub-txt-color);\n}\n\n#unit-switch {\n    grid-area: 8/6/11/8 ;\n}\n\n#sub-info {\n    grid-area: 5/8/11/11 ;\n    display: flex;\n    flex-direction: column;\n    display: flex;\n    flex-direction: column;\n    /* margin-left: 1rem; */\n    justify-content: center;\n}\n\n#sub-info p {\n    font-size: 1.25rem;\n    color: var(--sub-txt-color);\n}\n\n#unit-toggle {\n    /* border: 1px solid var(--sub-dark-color); */\n    border: none;\n    background-color: var(--alt-light-color);\n    border-radius: .5rem;\n    padding: .5rem;\n    font-size: 1rem;\n    color: var(--sub-bg-color);\n}\n\n#unit-toggle:hover {\n    /* border: 1px solid var(--sub-dark-color); */\n    border: none;\n    background-color: var(--main-bg-color);\n    color: var(--main-txt-color);\n    cursor: pointer;\n}\n\n#unit-toggle:active {\n    border: 1px solid var(--main-txt-color);\n}\n\n\n\n\n\n\n\n\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0JBQStCLG9CQUFvQjtBQUNuRDtBQUNBO0FBQ0EsMkRBQTJELHdCQUF3QjtBQUNuRjtBQUNBO0FBQ0EsK0JBQStCLG9CQUFvQjtBQUNuRDtBQUNBO0FBQ0EsNkJBQTZCLHFCQUFxQjtBQUNsRDtBQUNBO0FBQ0EsNENBQTRDLHNCQUFzQixHQUFHLHFCQUFxQjtBQUMxRjtBQUNBO0FBQ0Esa0NBQWtDLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLDJDQUEyQztBQUM3SDtBQUNBO0FBQ0EsdUNBQXVDLHFCQUFxQjtBQUM1RDtBQUNBO0FBQ0EsMENBQTBDLHFCQUFxQixFQUFFLHNCQUFzQjtBQUN2Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvc2VhcmNoLWljb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRANTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4vKiBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyAqL1xcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuXFxuICAgIC8qIFN0eWxlIDEgKi9cXG4gICAgLS1tYWluLXR4dC1saWdodDogd2hpdGU7XFxuICAgIC0tbWFpbi10eHQtY29sb3I6ICM0RTUzNDA7XFxuICAgIC0tc3ViLXR4dC1jb2xvcjogIzY5NzI2ODtcXG5cXG4gICAgLS1tYWluLWJnLWNvbG9yOiAjQjdEMURBO1xcbiAgICAtLXN1Yi1iZy1jb2xvcjogI0UyRThERDtcXG5cXG4gICAgLS1hbHQtbGlnaHQtY29sb3I6ICM5NUEzQTQ7XFxuICAgIC0tc3ViLWJnLW9wYXF1ZTogIzk1YTNhNDU3O1xcblxcbn1cXG5cXG4vKk1haW4gU2VjdGlvbiBTdHlsZXMqL1xcbmJvZHkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNzZWFyY2gtYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBtYXJnaW46IDJyZW0gMnJlbTtcXG5cXG5cXG59XFxuXFxuI3dlYXRoZXItZGlzcGxheSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAyNXZoO1xcbiAgICBsZWZ0OiAyNXZ3O1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWJnLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgd2lkdGg6NDUwcHg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsMWZyKTtcXG59XFxuXFxuLypTZWFyY2ggQmFyIFN0eWxlcyovXFxuXFxuI2Zvcm0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC8qIHdpZHRoOiAyMHZ3O1xcbiAgICBtaW4td2lkdGg6IDRyZW07ICovXFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDowO1xcbn1cXG5cXG4jZm9ybSBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1iZy1vcGFxdWUpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10eHQtbGlnaHQpO1xcbiAgICBwYWRkaW5nOiAuM3JlbSAuM3JlbSAuM3JlbSAzcmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAyMHZ3O1xcbiAgICBtaW4td2lkdGg6IDIwcmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcblxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuXFxufVxcblxcbiNmb3JtIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcblxcbn1cXG5cXG4jaW5wdXQtZXJyb3Ige1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jZm9ybSBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNmb3JtIGlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10eHQtbGlnaHQpXFxufVxcblxcblxcblxcbi8qV2VhdGhlciBEaXNwbGF5IENvbnRlbnQgU3R5bGVzKi9cXG4jY2l0eSB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzQvOSA7XFxuICAgIHBhZGRpbmc6IDAgMCAycmVtIDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuI2NpdHkgcCB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY29sb3IpO1xcbn1cXG5cXG4jd2VhdGhlciB7XFxuICAgIGdyaWQtYXJlYTogMy8xLzUvOCA7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDNyZW07XFxuXFxufVxcblxcbiN3ZWF0aGVyIHAge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zdWItdHh0LWNvbG9yKTtcXG59XFxuXFxuI3dlYXRoZXItaW1nIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzgvNS8xMSA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jdGVtcC1ub3cge1xcbiAgICBncmlkLWFyZWE6IDUvMS8xMS82IDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiN0ZW1wLW5vdyBwIHtcXG4gICAgZm9udC1zaXplOiA5cmVtO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyBcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG5cXG59XFxuXFxuI3VuaXRzIHtcXG4gICAgZ3JpZC1hcmVhOiA1LzYvOC84IDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3VuaXRzIHAge1xcbiAgICBncmlkLWFyZWE6IDUvNi84LzggO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7IFxcbiAgICBjb2xvcjogdmFyKC0tc3ViLXR4dC1jb2xvcik7XFxufVxcblxcbiN1bml0LXN3aXRjaCB7XFxuICAgIGdyaWQtYXJlYTogOC82LzExLzggO1xcbn1cXG5cXG4jc3ViLWluZm8ge1xcbiAgICBncmlkLWFyZWE6IDUvOC8xMS8xMSA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIG1hcmdpbi1sZWZ0OiAxcmVtOyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3N1Yi1pbmZvIHAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zdWItdHh0LWNvbG9yKTtcXG59XFxuXFxuI3VuaXQtdG9nZ2xlIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3ViLWRhcmstY29sb3IpOyAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1saWdodC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tc3ViLWJnLWNvbG9yKTtcXG59XFxuXFxuI3VuaXQtdG9nZ2xlOmhvdmVyIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3ViLWRhcmstY29sb3IpOyAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN1bml0LXRvZ2dsZTphY3RpdmUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLXR4dC1jb2xvcik7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUVBLDJDQUEyQzs7QUFFM0M7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHFDQUFxQzs7SUFFckMsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsd0JBQXdCOztJQUV4Qix3QkFBd0I7SUFDeEIsdUJBQXVCOztJQUV2QiwwQkFBMEI7SUFDMUIsMEJBQTBCOztBQUU5Qjs7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSSxrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7OztBQUdyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTs7SUFFVixxQ0FBcUM7SUFDckMsb0JBQW9CO0lBQ3BCLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2IsV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMscUNBQXFDO0FBQ3pDOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSSxrQkFBa0I7SUFDbEI7c0JBQ2tCO0lBQ2xCLE1BQU07SUFDTixNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osb0JBQW9COztJQUVwQixvQkFBb0I7SUFDcEIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseURBQStDO0lBQy9DLHdCQUF3Qjs7QUFFNUI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO0FBQ0o7Ozs7QUFJQSxpQ0FBaUM7QUFDakM7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQ0FBcUM7SUFDckMsNEJBQTRCOztBQUVoQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw2Q0FBNkM7SUFDN0MsWUFBWTtJQUNaLHdDQUF3QztJQUN4QyxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSw2Q0FBNkM7SUFDN0MsWUFBWTtJQUNaLHNDQUFzQztJQUN0Qyw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xcbi8qIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7ICovXFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcXG5cXG4gICAgLyogU3R5bGUgMSAqL1xcbiAgICAtLW1haW4tdHh0LWxpZ2h0OiB3aGl0ZTtcXG4gICAgLS1tYWluLXR4dC1jb2xvcjogIzRFNTM0MDtcXG4gICAgLS1zdWItdHh0LWNvbG9yOiAjNjk3MjY4O1xcblxcbiAgICAtLW1haW4tYmctY29sb3I6ICNCN0QxREE7XFxuICAgIC0tc3ViLWJnLWNvbG9yOiAjRTJFOEREO1xcblxcbiAgICAtLWFsdC1saWdodC1jb2xvcjogIzk1QTNBNDtcXG4gICAgLS1zdWItYmctb3BhcXVlOiAjOTVhM2E0NTc7XFxuXFxufVxcblxcbi8qTWFpbiBTZWN0aW9uIFN0eWxlcyovXFxuYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI3NlYXJjaC1iYXIge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIG1hcmdpbjogMnJlbSAycmVtO1xcblxcblxcbn1cXG5cXG4jd2VhdGhlci1kaXNwbGF5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDI1dmg7XFxuICAgIGxlZnQ6IDI1dnc7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItYmctY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICB3aWR0aDo0NTBweDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbn1cXG5cXG4vKlNlYXJjaCBCYXIgU3R5bGVzKi9cXG5cXG4jZm9ybSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLyogd2lkdGg6IDIwdnc7XFxuICAgIG1pbi13aWR0aDogNHJlbTsgKi9cXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OjA7XFxufVxcblxcbiNmb3JtIGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWJnLW9wYXF1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXR4dC1saWdodCk7XFxuICAgIHBhZGRpbmc6IC4zcmVtIC4zcmVtIC4zcmVtIDNyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDIwdnc7XFxuICAgIG1pbi13aWR0aDogMjByZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG5cXG59XFxuXFxuI2Zvcm0gYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvc2VhcmNoLWljb24ucG5nKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcblxcbn1cXG5cXG4jaW5wdXQtZXJyb3Ige1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jZm9ybSBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNmb3JtIGlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10eHQtbGlnaHQpXFxufVxcblxcblxcblxcbi8qV2VhdGhlciBEaXNwbGF5IENvbnRlbnQgU3R5bGVzKi9cXG4jY2l0eSB7XFxuICAgIGdyaWQtYXJlYTogMS8xLzQvOSA7XFxuICAgIHBhZGRpbmc6IDAgMCAycmVtIDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuI2NpdHkgcCB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY29sb3IpO1xcbn1cXG5cXG4jd2VhdGhlciB7XFxuICAgIGdyaWQtYXJlYTogMy8xLzUvOCA7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDNyZW07XFxuXFxufVxcblxcbiN3ZWF0aGVyIHAge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zdWItdHh0LWNvbG9yKTtcXG59XFxuXFxuI3dlYXRoZXItaW1nIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzgvNS8xMSA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jdGVtcC1ub3cge1xcbiAgICBncmlkLWFyZWE6IDUvMS8xMS82IDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiN0ZW1wLW5vdyBwIHtcXG4gICAgZm9udC1zaXplOiA5cmVtO1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmOyBcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdHh0LWNvbG9yKTtcXG5cXG59XFxuXFxuI3VuaXRzIHtcXG4gICAgZ3JpZC1hcmVhOiA1LzYvOC84IDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3VuaXRzIHAge1xcbiAgICBncmlkLWFyZWE6IDUvNi84LzggO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7IFxcbiAgICBjb2xvcjogdmFyKC0tc3ViLXR4dC1jb2xvcik7XFxufVxcblxcbiN1bml0LXN3aXRjaCB7XFxuICAgIGdyaWQtYXJlYTogOC82LzExLzggO1xcbn1cXG5cXG4jc3ViLWluZm8ge1xcbiAgICBncmlkLWFyZWE6IDUvOC8xMS8xMSA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIG1hcmdpbi1sZWZ0OiAxcmVtOyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3N1Yi1pbmZvIHAge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zdWItdHh0LWNvbG9yKTtcXG59XFxuXFxuI3VuaXQtdG9nZ2xlIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3ViLWRhcmstY29sb3IpOyAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1saWdodC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tc3ViLWJnLWNvbG9yKTtcXG59XFxuXFxuI3VuaXQtdG9nZ2xlOmhvdmVyIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3ViLWRhcmstY29sb3IpOyAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10eHQtY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN1bml0LXRvZ2dsZTphY3RpdmUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLXR4dC1jb2xvcik7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5jb25zdCB3ZWF0aGVyRGF0YSA9ICB7XG4gICAgY2l0eTogXCJcIixcbiAgICB3ZWF0aGVyOiBcIlwiLFxuICAgIHdlYXRoZXJJY29uOiBcIlwiLFxuICAgIHRlbXBOb3c6IFwiXCIsXG4gICAgdGVtcEZlZWw6IFwiXCIsXG4gICAgd2luZFNwZWVkOiBcIlwiLFxuICAgIHdpbmREaXJlY3Rpb246IFwiXCIsXG4gICAgaHVtaWRpdHk6IFwiXCIsXG4gICAgcHJlc3N1cmU6IFwiXCIsXG4gICAgdGVtcFVuaXQ6IFwiXCIsXG4gICAgcHJlc3NVbml0OiBcIlwiLFxuICAgIHdpbmRVbml0OiBcIlwiLFxuICAgIHN3aXRjaFRlbXBVbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMudGVtcFVuaXQgPT09IFwiRlwiKSB7XG4gICAgICAgICAgICAvL3RvIE1ldHJpY1xuICAgICAgICAgICAgdGhpcy50ZW1wVW5pdCA9IFwiQ1wiO1xuICAgICAgICAgICAgdGhpcy5wcmVzc1VuaXQgPSBcImhQYVwiO1xuICAgICAgICAgICAgdGhpcy53aW5kVW5pdCA9IFwia3BoXCI7XG4gICAgICAgICAgICB0aGlzLnRlbXBOb3cgPSBNYXRoLnJvdW5kKCgodGhpcy50ZW1wTm93IC0gMzIpLyg5LzUpKSoxMCkvMTA7XG4gICAgICAgICAgICB0aGlzLnRlbXBGZWVsID0gTWF0aC5yb3VuZCgoKHRoaXMudGVtcEZlZWwgLSAzMikvKDkvNSkpKjEwKS8xMDtcbiAgICAgICAgICAgIHRoaXMud2luZFNwZWVkID0gTWF0aC5yb3VuZCgodGhpcy53aW5kU3BlZWQqMS42MDkzNDQpKjEwKS8xMDtcbiAgICAgICAgICAgIHRoaXMucHJlc3N1cmUgPSBNYXRoLnJvdW5kKCh0aGlzLnByZXNzdXJlLzAuMDI5NTI5OTgzMDcxNDQ1KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3RvIEltcGVyaWFsXG4gICAgICAgICAgICB0aGlzLnRlbXBVbml0ID0gXCJGXCI7XG4gICAgICAgICAgICB0aGlzLnByZXNzVW5pdCA9IFwiaW5IZ1wiO1xuICAgICAgICAgICAgdGhpcy53aW5kVW5pdCA9IFwibXBoXCI7XG4gICAgICAgICAgICB0aGlzLnRlbXBOb3cgPSBNYXRoLnJvdW5kKCgodGhpcy50ZW1wTm93Kig5LzUpKSArIDMyKSoxMCkvMTA7XG4gICAgICAgICAgICB0aGlzLnRlbXBGZWVsID0gTWF0aC5yb3VuZCgoKHRoaXMudGVtcEZlZWwqKDkvNSkpICsgMzIpKjEwKS8xMDtcbiAgICAgICAgICAgIHRoaXMud2luZFNwZWVkID0gTWF0aC5yb3VuZCgodGhpcy53aW5kU3BlZWQvMS42MDkzNDQpKjEwKS8xMDtcbiAgICAgICAgICAgIHRoaXMucHJlc3N1cmUgPSBNYXRoLnJvdW5kKCh0aGlzLnByZXNzdXJlKjAuMDI5NTI5OTgzMDcxNDQ1KSoxMDApLzEwMDtcbiAgICAgICAgfVxuICAgIH0sXG59XG5cbmNvbnN0IGxvY2F0aW9uRGF0YSA9ICB7XG4gICAgY2l0eTogXCJcIixcbiAgICBjb3VudHJ5OiBcIlwiLFxuICAgIHN0YXRlOiBcIlwiLFxuICAgIGxvbmc6IFwiXCIsXG4gICAgbGF0OiBcIlwiLFxufVxuXG5jb25zdCBhZGRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgbGV0IGZvcm1JbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKTtcbiAgICBmb3JtSW4uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLHN1Ym1pdEluKTtcbiAgICAvL3N1Ym1pdHMgb24gZW50ZXIga2V5IGZyb20gaW5wdXQgZWxlbWVudCBvciBzdWJtaXQgYnV0dG9uIFxufVxuXG5jb25zdCBhZGRVbml0TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIC8vYWRkcyBzd2l0Y2ggdW5pdCBsaXN0ZW5lciBzaW5jZSBpdCBpc250IG5lY2Vzc2FyeSBpbml0aWFsbHkgXG4gICAgbGV0IHVuaXRTd2l0Y2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVuaXQtdG9nZ2xlXCIpO1xuICAgIHVuaXRTd2l0Y2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsc3dpdGNoVW5pdHMpO1xufVxuXG5cblxuY29uc3Qgc3VibWl0SW4gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgc2VhcmNoSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtaW5wdXRcIik7XG4gICAgbGV0IHNlYXJjaFZhbHVlID0gY2xlYW5JbnB1dChzZWFyY2hJbnB1dEVsZW1lbnQudmFsdWUudHJpbSgpKTtcblxuICAgIGlmIChzZWFyY2hWYWx1ZSA8IDEpIHtcbiAgICAgICAgc2VhcmNoSW5wdXRFbGVtZW50LmNsYXNzTGlzdCA9IFwic2VhcmNoLWlucHV0IGludmFsaWRcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1lcnJvclwiKS5pbm5lckhUTUwgPSBcIlBsZWFzZSBpbnB1dCBhIGxvY2F0aW9uLlwiO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk5vIFZhbHVlIElucHV0XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNlYXJjaElucHV0RWxlbWVudC5jbGFzc0xpc3QgPSBcInNlYXJjaC1pbnB1dFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWVycm9yXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVmFsaWQgSW5wdXRcIik7XG4gICAgICAgIC8vSW50aWF0ZXMgQVBJIENhbGwgZm9yIEdlbyBMb2NhdGlvblxuICAgICAgICBnZXRHZW8oc2VhcmNoVmFsdWUpLnRoZW4oKHJlc3VsdEdlbykgPT4ge1xuXG4gICAgICAgICAgICBsb2NhdGlvbkRhdGEuY2l0eSA9IHJlc3VsdEdlb1swXS5uYW1lO1xuICAgICAgICAgICAgbG9jYXRpb25EYXRhLmNvdW50cnkgPSByZXN1bHRHZW9bMF0uY291bnRyeTtcbiAgICAgICAgICAgIGxvY2F0aW9uRGF0YS5zdGF0ZSA9IHJlc3VsdEdlb1swXS5zdGF0ZTtcbiAgICAgICAgICAgIGxvY2F0aW9uRGF0YS5sb25nID0gcmVzdWx0R2VvWzBdLmxvbjtcbiAgICAgICAgICAgIGxvY2F0aW9uRGF0YS5sYXQgPSByZXN1bHRHZW9bMF0ubGF0O1xuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGdldFdlYXRoZXIoKS50aGVuKChyZXN1bHRXZWF0aGVyKSA9PiB7XG4gICAgXG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEuY2l0eSA9IHJlc3VsdFdlYXRoZXIubmFtZTtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS53ZWF0aGVyID0gcmVzdWx0V2VhdGhlci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLndlYXRoZXJJY29uID0gcmVzdWx0V2VhdGhlci53ZWF0aGVyWzBdLmljb247XG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEudGVtcE5vdyA9IE1hdGgucm91bmQoKHJlc3VsdFdlYXRoZXIubWFpbi50ZW1wIC0gMjczLjE1KSoxMCkvMTA7XG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEudGVtcEZlZWwgPSBNYXRoLnJvdW5kKChyZXN1bHRXZWF0aGVyLm1haW4uZmVlbHNfbGlrZSAtIDI3My4xNSkqMTApLzEwO1xuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLnRlbXBVbml0ID0gXCJDXCI7XG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEucHJlc3NVbml0ID0gXCJoUGFcIjtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyRGF0YS53aW5kVW5pdCA9IFwia3BoXCI7XG4gICAgICAgICAgICAgICAgd2VhdGhlckRhdGEud2luZFNwZWVkID0gcmVzdWx0V2VhdGhlci53aW5kLnNwZWVkO1xuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLndpbmREaXJlY3Rpb24gPSByZXN1bHRXZWF0aGVyLndpbmQuZGVnO1xuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLmh1bWlkaXR5ID0gcmVzdWx0V2VhdGhlci5tYWluLmh1bWlkaXR5O1xuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLnByZXNzdXJlID0gcmVzdWx0V2VhdGhlci5tYWluLnByZXNzdXJlO1xuICAgICAgICAgICAgICAgIGFkZFVuaXRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVEaXNwbGF5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmNvbnN0IGdldEdlbyA9IGFzeW5jIChsb2NhdGlvbkluKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGFwaUtleUdlbyA9IFwiYTM1YmUwMWU2NDhkMjRjNjFkZTc0YjE2ODQ2NTZiZTlcIiAvL2ZyZWUgYXBpIGtleSwgc2FtZSBmb3IgR2VvIGFuZCBXZWF0aGVyIEFQSXNcbiAgICAgICAgbGV0IHVybEdlbyA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9uSW59JmxpbWl0PTMmYXBwaWQ9JHthcGlLZXlHZW99YDtcbiAgICAgICAgbGV0IHJlc3BvbnNlR2VvID0gYXdhaXQgZmV0Y2godXJsR2VvLCB7bW9kZTogXCJjb3JzXCJ9KTtcbiAgICAgICAgbGV0IGdlb0RhdGFPdXQgPSBhd2FpdCByZXNwb25zZUdlby5qc29uKCk7XG4gICAgICAgIGlmIChnZW9EYXRhT3V0Lmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHRocm93IFwiVGhlIGxvY2F0aW9uIGVudGVyZWQgd2FzIG5vdCBmb3VuZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2VvRGF0YU91dDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtaW5wdXRcIikuY2xhc3NMaXN0ID0gXCJzZWFyY2gtaW5wdXQgaW52YWxpZFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWVycm9yXCIpLmlubmVySFRNTCA9IGAke2Vycn1gO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxufVxuXG5jb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCBhcGlLZXkgPSBcImEzNWJlMDFlNjQ4ZDI0YzYxZGU3NGIxNjg0NjU2YmU5XCIgLy9mcmVlIGFwaSBrZXlcbiAgICAgICAgbGV0IFVSTCA9YGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xvY2F0aW9uRGF0YS5sYXR9Jmxvbj0ke2xvY2F0aW9uRGF0YS5sb25nfSZhcHBpZD0ke2FwaUtleX1gO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwsIHttb2RlOiBcImNvcnNcIn0pO1xuICAgICAgICBsZXQgd2VhdGhlckRhdGFPdXQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIC8vQUREIGVycm9yIGNhdGNoaW5nIGhlcmUgdG8gdGhyb3cgZXJyb3IgaWYgaXNzdWUgcHVsbGluZyB3ZWF0aGVyIGRhdGFcbiAgICAgICAgaWYgKHdlYXRoZXJEYXRhT3V0Lmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHRocm93IFwiVGhlIHdlYXRoZXIgZm9yIHRoYXQgbG9jYXRpb24gd2FzIG5vdCBmb3VuZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2VhdGhlckRhdGFPdXQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWlucHV0XCIpLmNsYXNzTGlzdCA9IFwic2VhcmNoLWlucHV0IGludmFsaWRcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1lcnJvclwiKS5pbm5lckhUTUwgPSBgJHtlcnJ9YDtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbn1cblxuY29uc3QgdXBkYXRlRGlzcGxheSA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZ1xuICAgIC8vTG9jYXRpb25cbiAgICBpZiAobG9jYXRpb25EYXRhLnN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGV0IGxvY2F0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY2l0eSBwXCIpO1xuICAgICAgICBsb2NhdGlvblRleHQuaW5uZXJIVE1MID0gYCR7bG9jYXRpb25EYXRhLmNpdHl9LCAke2xvY2F0aW9uRGF0YS5jb3VudHJ5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGxvY2F0aW9uVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY2l0eSBwXCIpO1xuICAgICAgICBsb2NhdGlvblRleHQuaW5uZXJIVE1MID0gYCR7bG9jYXRpb25EYXRhLmNpdHl9LCAke2xvY2F0aW9uRGF0YS5zdGF0ZX0sICR7bG9jYXRpb25EYXRhLmNvdW50cnl9YDtcbiAgICB9XG4gICAgLy9XZWF0aGVyIERlc2NyaXB0aW9uXG4gICAgbGV0IHdlYXRoZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiN3ZWF0aGVyIHBcIik7XG4gICAgd2VhdGhlclRleHQuaW5uZXJIVE1MID0gYCR7d2VhdGhlckRhdGEud2VhdGhlcn1gO1xuICAgIC8vV2VhdGhlciBJbWFnZVxuICAgIGxldCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjd2VhdGhlci1pbWcgaW1nXCIpO1xuICAgIHdlYXRoZXJJY29uLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyRGF0YS53ZWF0aGVySWNvbn1AMngucG5nYDtcbiAgICAvL1RlbXAgQ3VycmVudFxuICAgIGxldCB0ZW1wTm93VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjdGVtcC1ub3cgcFwiKTtcbiAgICB0ZW1wTm93VGV4dC5pbm5lckhUTUwgPSBgJHt3ZWF0aGVyRGF0YS50ZW1wTm93fWA7XG4gICAgLy9Vbml0c1xuICAgIGxldCB1bml0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjdW5pdHMgcFwiKTtcbiAgICB1bml0VGV4dC5pbm5lckhUTUwgPSBgwrAke3dlYXRoZXJEYXRhLnRlbXBVbml0fWA7XG4gICAgLy9UZW1wIEZlZWxzIExpa2VcbiAgICBsZXQgdGVtcEZlZWxUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiN0ZW1wLWZlZWwgcFwiKTtcbiAgICB0ZW1wRmVlbFRleHQuaW5uZXJIVE1MID0gYEZlZWxzIExpa2U6ICR7d2VhdGhlckRhdGEudGVtcEZlZWx9IMKwJHt3ZWF0aGVyRGF0YS50ZW1wVW5pdH1gO1xuICAgIC8vV2luZFxuICAgIGxldCB3aW5kVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjd2luZCBwXCIpO1xuICAgIHdpbmRUZXh0LmlubmVySFRNTCA9IGBXaW5kOiAke3dlYXRoZXJEYXRhLndpbmRTcGVlZH0ke3dlYXRoZXJEYXRhLndpbmRVbml0fSAke3JldHVybkRpcmVjdGlvbih3ZWF0aGVyRGF0YS53aW5kRGlyZWN0aW9uKX1gO1xuICAgIC8vSHVtaWRpdHlcbiAgICBsZXQgaHVtaWRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNodW1pZGl0eSBwXCIpO1xuICAgIGh1bWlkVGV4dC5pbm5lckhUTUwgPSBgSHVtaWRpdHk6ICR7d2VhdGhlckRhdGEuaHVtaWRpdHl9JWA7XG4gICAgLy9QcmVzc3VyZVxuICAgIGxldCBwcmVzc3VyZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I3ByZXNzdXJlIHBcIik7XG4gICAgcHJlc3N1cmVUZXh0LmlubmVySFRNTCA9IGBQcmVzc3VyZTogJHt3ZWF0aGVyRGF0YS5wcmVzc3VyZX0ke3dlYXRoZXJEYXRhLnByZXNzVW5pdH1gO1xufVxuXG5jb25zdCByZXR1cm5EaXJlY3Rpb24gPSAod2luZERlZ3JlZXMpID0+IHtcbiAgICBpZiAoNjcuNSA+IHdpbmREZWdyZWVzICYmIHdpbmREZWdyZWVzID49IDIyLjUpIHtcbiAgICAgICAgcmV0dXJuIFwiTkVcIlxuICAgIH0gZWxzZSBpZiAoMTEyLjUgPiB3aW5kRGVncmVlcyAmJiB3aW5kRGVncmVlcyA+PSA2Ny41KSB7XG4gICAgICAgIHJldHVybiBcIkVcIlxuICAgIH1cbiAgICBlbHNlIGlmICgxNTcuNSA+IHdpbmREZWdyZWVzICYmIHdpbmREZWdyZWVzID49IDExMi41KSB7XG4gICAgICAgIHJldHVybiBcIlNFXCJcbiAgICB9XG4gICAgZWxzZSBpZiAoMjAyLjUgPiB3aW5kRGVncmVlcyAmJiB3aW5kRGVncmVlcyA+PSAxNTcuNSkge1xuICAgICAgICByZXR1cm4gXCJTXCJcbiAgICB9XG4gICAgZWxzZSBpZiAoMjQ3LjUgPiB3aW5kRGVncmVlcyAmJiB3aW5kRGVncmVlcyA+PSAyMDIuNSkge1xuICAgICAgICByZXR1cm4gXCJTV1wiXG4gICAgfVxuICAgIGVsc2UgaWYgKDI5NS41ID4gd2luZERlZ3JlZXMgJiYgd2luZERlZ3JlZXMgPj0gMjQ3LjUpIHtcbiAgICAgICAgcmV0dXJuIFwiV1wiXG4gICAgfVxuICAgIGVsc2UgaWYgKDMzNy41ID4gd2luZERlZ3JlZXMgJiYgd2luZERlZ3JlZXMgPj0gMjk1LjUpIHtcbiAgICAgICAgcmV0dXJuIFwiTldcIlxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiTlwiXG4gICAgfVxufVxuXG5jb25zdCBzd2l0Y2hVbml0cyA9ICgpID0+IHtcbiAgICB3ZWF0aGVyRGF0YS5zd2l0Y2hUZW1wVW5pdCgpO1xuICAgIHVwZGF0ZURpc3BsYXkoKTtcbn1cblxuY29uc3QgY2xlYW5JbnB1dCA9IChpbnB1dFZhbHVlKSA9PiB7XG4gICAgLy9GdW5jdGlvbiB0byBzYW5pdGl6ZSB1bnNlciBpbnB1dCBmb3IgQXBpIExvY2F0aW9uIHNlYXJjaFxuICAgIC8vRm9yIG5vdyBzaW1wbHkgc3BsaXR0aW5nIG91dCBpbiBjYXNlIG9mIGNvbW1hIGlucHV0XG4gICAgbGV0IGlucHV0c0FsbCA9IGlucHV0VmFsdWUuc3BsaXQoXCIsXCIpO1xuICAgIHJldHVybiBpbnB1dHNBbGxbMF07XG59XG5cbi8vSW5pdGlhbGl6aW5nIHBhZ2Ugd2l0aCBBdGxhbnRhIERhdGFcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhZGRMaXN0ZW5lcnMoKSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pbnB1dFwiKS52YWx1ZSA9IFwiQXRsYW50YVwiO1xuY29uc3QgZXZlbnRTdGFydCA9IG5ldyBFdmVudCgnc3VibWl0Jyk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIikuZGlzcGF0Y2hFdmVudChldmVudFN0YXJ0KTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWlucHV0XCIpLnZhbHVlID0gXCJcIjtcblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9