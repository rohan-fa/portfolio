"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/sections/Navbar.tsx":
/*!*********************************!*\
  !*** ./src/sections/Navbar.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Logo */ \"./src/components/Logo.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/gi */ \"./node_modules/react-icons/gi/index.esm.js\");\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Navbar() {\n    _s();\n    const [navbarVisible, setNavbarVisible] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [responsiveNavVisible, setResponsiveNavVisible] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const sectionLinks = [\n        {\n            name: \"About\",\n            link: \"/#about\"\n        },\n        {\n            name: \"Experience\",\n            link: \"/#experience\"\n        },\n        {\n            name: \"Work\",\n            link: \"/#work\"\n        },\n        {\n            name: \"Contact\",\n            link: \"/#contact\"\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", ()=>{\n            window.pageYOffset > 100 ? setNavbarVisible(true) : setNavbarVisible(false);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const links = document.querySelectorAll(\".nav-items-list-item-link\");\n        links.forEach((link)=>{\n            link.addEventListener(\"click\", ()=>setResponsiveNavVisible(false));\n        });\n        const nav = document.querySelector(\".nav-items\");\n        nav === null || nav === void 0 ? void 0 : nav.addEventListener(\"click\", (e)=>{\n            e.stopPropagation();\n        });\n        const html = document.querySelector(\"html\");\n        html === null || html === void 0 ? void 0 : html.addEventListener(\"click\", (e)=>{\n            setResponsiveNavVisible(false);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const main = document.querySelector(\"main\");\n        if (responsiveNavVisible) {\n            main === null || main === void 0 ? void 0 : main.classList.add(\"blur\");\n        } else {\n            main === null || main === void 0 ? void 0 : main.classList.remove(\"blur\");\n        }\n    }, [\n        responsiveNavVisible\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrapper \".concat(navbarVisible ? \"blur-nav\" : \"\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    className: \"brand\",\n                    initial: {\n                        opacity: 0\n                    },\n                    animate: {\n                        opacity: 1\n                    },\n                    transition: {\n                        duration: 0.3,\n                        ease: \"easeInOut\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/sections/Navbar.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/sections/Navbar.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/sections/Navbar.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    className: \"nav-responsive-toggle\",\n                    initial: {\n                        opacity: 0,\n                        y: 5\n                    },\n                    animate: {\n                        opacity: 1,\n                        y: 0\n                    },\n                    transition: {\n                        duration: 0.3,\n                        ease: \"easeInOut\"\n                    },\n                    children: responsiveNavVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_cg__WEBPACK_IMPORTED_MODULE_6__.CgClose, {\n                        onClick: (e)=>{\n                            e.stopPropagation();\n                            setResponsiveNavVisible(false);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/sections/Navbar.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_gi__WEBPACK_IMPORTED_MODULE_7__.GiHamburgerMenu, {\n                        onClick: (e)=>{\n                            e.stopPropagation();\n                            setResponsiveNavVisible(true);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/sections/Navbar.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/sections/Navbar.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(responsiveNavVisible && \"nav-responsive\", \" nav-items\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"nav-items-list\",\n                            children: sectionLinks.map((param, index)=>/*#__PURE__*/ {\n                                let { name , link  } = param;\n                                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                                    className: \"nav-items-list-item\",\n                                    initial: {\n                                        opacity: 0,\n                                        y: -25\n                                    },\n                                    animate: {\n                                        opacity: 1,\n                                        y: 0\n                                    },\n                                    transition: {\n                                        duration: 0.3,\n                                        ease: \"easeInOut\",\n                                        delay: 0.3 + index * 0.1\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: link,\n                                        className: \"nav-items-list-item-link\",\n                                        children: name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/sections/Navbar.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 17\n                                    }, this)\n                                }, name, false, {\n                                    fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/sections/Navbar.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/sections/Navbar.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                            className: \"nav-items-button\",\n                            initial: {\n                                opacity: 0,\n                                y: -25\n                            },\n                            animate: {\n                                opacity: 1,\n                                y: 0\n                            },\n                            transition: {\n                                duration: 0.3,\n                                ease: \"easeInOut\",\n                                delay: 0.6\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                text: \"Resume\",\n                                link: \"https://drive.google.com/file/d/1Bc5NViNYHosc4Bv81PNnnKNhGlCwAiFL/view?usp=sharing\"\n                            }, void 0, false, {\n                                fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/sections/Navbar.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/sections/Navbar.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/sections/Navbar.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/sections/Navbar.tsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/sections/Navbar.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"CX9rHtQaKkdEIVhMUjooA74qqKg=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUFBZTs0QkFDakJkLHdCQUF3QixJQUFJO3dCQUM5Qjs7Ozs7NEJBRUg7Ozs7Ozs4QkFFSCw4REFBQ29CO29CQUNDQyxXQUFXLEdBQTRDLE9BQXpDdEIsd0JBQXdCLGtCQUFpQjs7c0NBRXZELDhEQUFDZ0M7NEJBQUdWLFdBQVU7c0NBQ1hwQixhQUFhK0IsR0FBRyxDQUFDLFFBQWlCQyxzQkFDakM7b0NBRGlCLEVBQUUvQixLQUFJLEVBQUVDLEtBQUksRUFBRTt1Q0FDL0IsOERBQUNSLG9EQUFTO29DQUVSMEIsV0FBVTtvQ0FDVkMsU0FBUzt3Q0FBRUMsU0FBUzt3Q0FBR00sR0FBRyxDQUFDO29DQUFHO29DQUM5QkwsU0FBUzt3Q0FBRUQsU0FBUzt3Q0FBR00sR0FBRztvQ0FBRTtvQ0FDNUJKLFlBQVk7d0NBQ1ZDLFVBQVU7d0NBQ1ZDLE1BQU07d0NBQ05RLE9BQU8sTUFBTUYsUUFBUTtvQ0FDdkI7OENBRUEsNEVBQUM1QyxrREFBSUE7d0NBQUN1QyxNQUFNekI7d0NBQU1rQixXQUFVO2tEQUN6Qm5COzs7Ozs7bUNBWEVBOzs7Ozs0QkFhSTs7Ozs7O3NDQUdmLDhEQUFDUCxxREFBVTs0QkFDVDBCLFdBQVU7NEJBQ1ZDLFNBQVM7Z0NBQUVDLFNBQVM7Z0NBQUdNLEdBQUcsQ0FBQzs0QkFBRzs0QkFDOUJMLFNBQVM7Z0NBQUVELFNBQVM7Z0NBQUdNLEdBQUc7NEJBQUU7NEJBQzVCSixZQUFZO2dDQUNWQyxVQUFVO2dDQUNWQyxNQUFNO2dDQUNOUSxPQUFPOzRCQUNUO3NDQUVBLDRFQUFDaEQsMERBQU1BO2dDQUFDaUQsTUFBSztnQ0FBU2pDLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkM7R0E1SFNQO0tBQUFBO0FBOEhULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZWN0aW9ucy9OYXZiYXIudHN4Pzk1OTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIkAvY29tcG9uZW50cy9Mb2dvXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBHaUhhbWJ1cmdlck1lbnUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ2lcIjtcbmltcG9ydCB7IENnQ2xvc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvY2dcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuZnVuY3Rpb24gTmF2YmFyKCkge1xuICBjb25zdCBbbmF2YmFyVmlzaWJsZSwgc2V0TmF2YmFyVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZXNwb25zaXZlTmF2VmlzaWJsZSwgc2V0UmVzcG9uc2l2ZU5hdlZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzZWN0aW9uTGlua3MgPSBbXG4gICAgeyBuYW1lOiBcIkFib3V0XCIsIGxpbms6IFwiLyNhYm91dFwiIH0sXG4gICAgeyBuYW1lOiBcIkV4cGVyaWVuY2VcIiwgbGluazogXCIvI2V4cGVyaWVuY2VcIiB9LFxuICAgIHsgbmFtZTogXCJXb3JrXCIsIGxpbms6IFwiLyN3b3JrXCIgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkNvbnRhY3RcIixcbiAgICAgIGxpbms6IFwiLyNjb250YWN0XCIsXG4gICAgfSxcbiAgXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCA+IDEwMFxuICAgICAgICA/IHNldE5hdmJhclZpc2libGUodHJ1ZSlcbiAgICAgICAgOiBzZXROYXZiYXJWaXNpYmxlKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1pdGVtcy1saXN0LWl0ZW0tbGlua1wiKTtcbiAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzZXRSZXNwb25zaXZlTmF2VmlzaWJsZShmYWxzZSkpO1xuICAgIH0pO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWl0ZW1zXCIpO1xuICAgIG5hdj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcbiAgICBodG1sPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHNldFJlc3BvbnNpdmVOYXZWaXNpYmxlKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIGlmIChyZXNwb25zaXZlTmF2VmlzaWJsZSkge1xuICAgICAgbWFpbj8uY2xhc3NMaXN0LmFkZChcImJsdXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1haW4/LmNsYXNzTGlzdC5yZW1vdmUoXCJibHVyXCIpO1xuICAgIH1cbiAgfSwgW3Jlc3BvbnNpdmVOYXZWaXNpYmxlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B3cmFwcGVyICR7bmF2YmFyVmlzaWJsZSA/IFwiYmx1ci1uYXZcIiA6IFwiXCJ9YH0+XG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnJhbmRcIlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TGluayBocmVmPVwiXCI+XG4gICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1yZXNwb25zaXZlLXRvZ2dsZVwiXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiA1IH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtyZXNwb25zaXZlTmF2VmlzaWJsZSA/IChcbiAgICAgICAgICAgIDxDZ0Nsb3NlXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zaXZlTmF2VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8R2lIYW1idXJnZXJNZW51XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBzZXRSZXNwb25zaXZlTmF2VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtyZXNwb25zaXZlTmF2VmlzaWJsZSAmJiBcIm5hdi1yZXNwb25zaXZlXCJ9IG5hdi1pdGVtc2B9XG4gICAgICAgID5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2LWl0ZW1zLWxpc3RcIj5cbiAgICAgICAgICAgIHtzZWN0aW9uTGlua3MubWFwKCh7IG5hbWUsIGxpbmsgfSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgICAgICAgIGtleT17bmFtZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbXMtbGlzdC1pdGVtXCJcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC0yNSB9fVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICAgICAgICAgICAgZGVsYXk6IDAuMyArIGluZGV4ICogMC4xLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfSBjbGFzc05hbWU9XCJuYXYtaXRlbXMtbGlzdC1pdGVtLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbXMtYnV0dG9uXCJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogLTI1IH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcbiAgICAgICAgICAgICAgZGVsYXk6IDAuNixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiUmVzdW1lXCIgbGluaz1cImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUJjNU5WaU5ZSG9zYzRCdjgxUE5ubktOaEdsQ3dBaUZML3ZpZXc/dXNwPXNoYXJpbmdcIiAvPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkxvZ28iLCJMaW5rIiwiR2lIYW1idXJnZXJNZW51IiwiQ2dDbG9zZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJOYXZiYXIiLCJuYXZiYXJWaXNpYmxlIiwic2V0TmF2YmFyVmlzaWJsZSIsInJlc3BvbnNpdmVOYXZWaXNpYmxlIiwic2V0UmVzcG9uc2l2ZU5hdlZpc2libGUiLCJzZWN0aW9uTGlua3MiLCJuYW1lIiwibGluayIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYWdlWU9mZnNldCIsImxpbmtzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIm5hdiIsInF1ZXJ5U2VsZWN0b3IiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiaHRtbCIsIm1haW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiaHJlZiIsInkiLCJvbkNsaWNrIiwidWwiLCJtYXAiLCJpbmRleCIsImxpIiwiZGVsYXkiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/Navbar.tsx\n"));

/***/ })

});