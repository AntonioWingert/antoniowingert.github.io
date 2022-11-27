"use strict";
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 9221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__(2042);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Header/styles.ts


const Container = (external_styled_components_default()).header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 1px solid ${({ theme  })=>theme.backgroundLight};

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;
const NavLinkContainer = (external_styled_components_default()).li`
  a {
    text-transform: uppercase;
    color: ${(props)=>props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;

    &:hover {
      color: ${(props)=>props.isActive ? (0,external_polished_.lighten)(0.2, props.theme.primary) : (0,external_polished_.lighten)(0.2, props.theme.textHighlight)};
    }
  }
`;

;// CONCATENATED MODULE: ./src/components/Header/NavLink.tsx




function NavLink({ title , path , includes =false  }) {
    const router = (0,router_.useRouter)();
    function verifyIfIsActive() {
        if (includes) {
            return router.pathname.includes(path);
        }
        return path === router.pathname;
    }
    const isActive = verifyIfIsActive();
    return /*#__PURE__*/ jsx_runtime_.jsx(NavLinkContainer, {
        isActive: isActive,
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: path,
            children: title
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Header/index.tsx



function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                    title: "Home",
                    path: "/"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                    title: "Projetos",
                    path: "/projetos",
                    includes: true
                })
            ]
        })
    });
}
/* harmony default export */ const components_Header = (Header);


/***/ })

};
;