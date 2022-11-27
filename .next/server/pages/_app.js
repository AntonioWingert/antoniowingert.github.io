"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7160);
/* harmony import */ var _src_styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(483);
/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2640);
/* harmony import */ var _prismicio_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prismicio_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_services_prismic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3875);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_services_prismic__WEBPACK_IMPORTED_MODULE_5__]);
_src_services_prismic__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_prismicio_react__WEBPACK_IMPORTED_MODULE_4__.PrismicProvider, {
        client: _src_services_prismic__WEBPACK_IMPORTED_MODULE_5__/* .client */ .L,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
            theme: _src_styles_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_styles_global__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3875:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client)
/* harmony export */ });
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4582);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio_client__WEBPACK_IMPORTED_MODULE_0__]);
_prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const client = _prismicio_client__WEBPACK_IMPORTED_MODULE_0__.createClient("antonio-portfolio", {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2042);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme  })=>theme.primary};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme  })=>(0,polished__WEBPACK_IMPORTED_MODULE_0__.lighten)(0.4, theme.primary)};
    }
  }

  body {
    background: ${(props)=>props.theme.background};
    font: 400 1rem 'Montserrat', sans-serif;
  }

  .img {
    height: auto;
    width: 100%;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;
    @media(max-width:1450px) {
      max-width: 70rem;
    }
    @media(max-width:1000px) {
      max-width: 50rem;
    }
    @media(max-width:700px) {
      padding: 0 2rem;
    }
  }

`);


/***/ }),

/***/ 483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const theme = {
    background: "#11172B",
    backgroundLight: "#1B2138",
    primary: "#0EE7B7",
    secondary: "#7AC7E3",
    gradient: "linear-gradient(225deg, #313860 0%, #11172B 100%);",
    text: "#848DA0",
    textHighlight: "#444B5B",
    textLight: "#C4C4C4",
    border: "#313958",
    inputBackground: "#1E253E",
    error: "#d45d5d"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ 2640:
/***/ ((module) => {

module.exports = require("@prismicio/react");

/***/ }),

/***/ 2042:
/***/ ((module) => {

module.exports = require("polished");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 4582:
/***/ ((module) => {

module.exports = import("@prismicio/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3847));
module.exports = __webpack_exports__;

})();