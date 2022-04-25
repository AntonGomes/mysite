exports.id = 481;
exports.ids = [481];
exports.modules = {

/***/ 6151:
/***/ ((module) => {

// Exports
module.exports = {
	"body": "default_body__yZxGp"
};


/***/ }),

/***/ 5823:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__E_Uzl",
	"contacts": "footer_contacts__hlHJT"
};


/***/ }),

/***/ 1787:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "navbar_header__hIzPL",
	"nav": "navbar_nav__t3TC8",
	"active": "navbar_active__BSQ3J",
	"contact": "navbar_contact__zmKj4"
};


/***/ }),

/***/ 1481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Default)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./styles/navbar.module.css
var navbar_module = __webpack_require__(1787);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./components/navbar.js





function Navbar(props) {
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (navbar_module_default()).header,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: (navbar_module_default()).nav,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: router.pathname == "/" ? (navbar_module_default()).active : "",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: "Anton Gomes"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: router.pathname == "/blog" ? (navbar_module_default()).active : "",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/blog",
                            children: "Blog"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: router.pathname == "/bordle" ? (navbar_module_default()).active : "",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/bordle",
                            children: "Bordle"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: router.pathname == "/thought" ? (navbar_module_default()).active : "",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/thought",
                            children: "A Shower Thought"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (navbar_module_default()).contact,
                children: "Contact"
            })
        ]
    }));
};

// EXTERNAL MODULE: ./styles/footer.module.css
var footer_module = __webpack_require__(5823);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./components/footer.js



function Footer(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (footer_module_default()).footer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: (footer_module_default()).contacts,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://github.com/AntonGomes",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithub, {})
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://twitter.com/AomlGomes",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTwitter, {})
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "mailto:aoml@gmail.com",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaInbox, {})
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.linkedin.com/in/anton-gomes-377a97233/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaLinkedin, {})
                    })
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ./styles/default.module.css
var default_module = __webpack_require__(6151);
var default_module_default = /*#__PURE__*/__webpack_require__.n(default_module);
;// CONCATENATED MODULE: ./components/default.jsx




function Default(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (default_module_default()).body,
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    }));
};


/***/ })

};
;