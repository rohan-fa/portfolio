/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Loader.tsx":
/*!***********************************!*\
  !*** ./src/components/Loader.tsx ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// import React, { useEffect, useState } from \"react\";\n// import Logo from \"./Logo\";\n// import { AnimatePresence, motion } from \"framer-motion\";\n// function Loader({ isLoading, setIsLoading }: any) {\n//   useEffect(() => {\n//     setTimeout(() => {\n//       setIsLoading();\n//     }, 1900);\n//   }, [setIsLoading]);\n//   return (\n//     <AnimatePresence>\n//       {isLoading && (\n//         <motion.div\n//           className=\"loader\"\n//           exit={{ scale: 0 }}\n//           key=\"motiondivleave\"\n//           transition={{\n//             duration: 0.45,\n//             ease: \"easeInOut\",\n//           }}\n//         >\n//           <motion.svg\n//             id=\"logo\"\n//             xmlns=\"http://www.w3.org/2000/svg\"\n//             viewBox=\"0 0 100 100\"\n//           >\n//             <title>Logo</title>\n//             <g>\n//               {/* <g id=\"K\" transform=\"translate(35.000000, 35.000000)\">\n//                 <motion.path\n//                   initial={{ opacity: 0 }}\n//                   animate={{ opacity: 1 }}\n//                   transition={{\n//                     duration: 1,\n//                     ease: \"easeInOut\",\n//                     delay: 1,\n//                   }}\n//                   exit={{\n//                     scale: 2,\n//                   }}\n//                   fill=\"currentColor\"\n//                   d=\"M 23.363281 24.847656 L 15.269531 13.421875 L 22.847656 4.730469 C 22.972656 4.582031 23.003906 4.375 22.925781 4.199219 C 22.847656 4.019531 22.675781 3.90625 22.488281 3.90625 L 18.683594 3.90625 C 18.546875 3.90625 18.417969 3.964844 18.324219 4.066406 L 10.429688 12.9375 L 10.429688 4.398438 C 10.429688 4.128906 10.210938 3.90625 9.945312 3.90625 L 6.566406 3.90625 C 6.300781 3.90625 6.085938 4.128906 6.085938 4.398438 L 6.085938 25.140625 C 6.085938 25.410156 6.300781 25.632812 6.566406 25.632812 L 9.945312 25.632812 C 10.210938 25.632812 10.429688 25.410156 10.429688 25.140625 L 10.429688 18.976562 L 12.644531 16.433594 L 19.007812 25.429688 C 19.097656 25.558594 19.246094 25.632812 19.398438 25.632812 L 22.972656 25.632812 C 23.15625 25.632812 23.320312 25.527344 23.402344 25.363281 C 23.484375 25.199219 23.472656 25 23.363281 24.847656 Z M 23.363281 24.847656 \"\n//                 />\n//               </g> */}\n//               <motion.path\n//                 initial={{ pathLength: 0 }}\n//                 animate={{ pathLength: 1 }}\n//                 transition={{\n//                   duration: 1,\n//                   ease: \"easeInOut\",\n//                 }}\n//                 exit={{\n//                   scale: 2,\n//                 }}\n//                 stroke=\"currentColor\"\n//                 strokeWidth=\"5\"\n//                 strokeLinecap=\"round\"\n//                 strokeLinejoin=\"round\"\n//                 d=\"M 50, 5\n//           L 11, 27\n//           L 11, 72\n//           L 50, 95\n//           L 89, 73\n//           L 89, 28 z\"\n//               />\n//             </g>\n//           </motion.svg>\n//         </motion.div>\n//       )}\n//     </AnimatePresence>\n//   );\n// }\n// export default Loader;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2FkZXIudHN4LmpzIiwibWFwcGluZ3MiOiJBQUFBLHNEQUFzRDtBQUN0RCw2QkFBNkI7QUFDN0IsMkRBQTJEO0FBRTNELHNEQUFzRDtBQUN0RCxzQkFBc0I7QUFDdEIseUJBQXlCO0FBQ3pCLHdCQUF3QjtBQUN4QixnQkFBZ0I7QUFDaEIsd0JBQXdCO0FBQ3hCLGFBQWE7QUFDYix3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0QiwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBQ2hDLGlDQUFpQztBQUNqQywwQkFBMEI7QUFDMUIsOEJBQThCO0FBQzlCLGlDQUFpQztBQUNqQyxlQUFlO0FBQ2YsWUFBWTtBQUNaLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsaURBQWlEO0FBQ2pELG9DQUFvQztBQUNwQyxjQUFjO0FBQ2Qsa0NBQWtDO0FBQ2xDLGtCQUFrQjtBQUNsQiwyRUFBMkU7QUFDM0UsK0JBQStCO0FBQy9CLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0Msa0NBQWtDO0FBQ2xDLG1DQUFtQztBQUNuQyx5Q0FBeUM7QUFDekMsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2Qiw0QkFBNEI7QUFDNUIsZ0NBQWdDO0FBQ2hDLHVCQUF1QjtBQUN2Qix3Q0FBd0M7QUFDeEMseTRCQUF5NEI7QUFDejRCLHFCQUFxQjtBQUNyQix5QkFBeUI7QUFDekIsNkJBQTZCO0FBQzdCLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsZ0NBQWdDO0FBQ2hDLGlDQUFpQztBQUNqQyx1Q0FBdUM7QUFDdkMscUJBQXFCO0FBQ3JCLDBCQUEwQjtBQUMxQiw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCLHdDQUF3QztBQUN4QyxrQ0FBa0M7QUFDbEMsd0NBQXdDO0FBQ3hDLHlDQUF5QztBQUN6Qyw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLDBCQUEwQjtBQUMxQix3QkFBd0I7QUFDeEIsV0FBVztBQUNYLHlCQUF5QjtBQUN6QixPQUFPO0FBQ1AsSUFBSTtBQUVKLHlCQUF5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Mb2FkZXIudHN4PzEzMmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcbi8vIGltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuLy8gZnVuY3Rpb24gTG9hZGVyKHsgaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmcgfTogYW55KSB7XG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgICAgICBzZXRJc0xvYWRpbmcoKTtcbi8vICAgICB9LCAxOTAwKTtcbi8vICAgfSwgW3NldElzTG9hZGluZ10pO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxBbmltYXRlUHJlc2VuY2U+XG4vLyAgICAgICB7aXNMb2FkaW5nICYmIChcbi8vICAgICAgICAgPG1vdGlvbi5kaXZcbi8vICAgICAgICAgICBjbGFzc05hbWU9XCJsb2FkZXJcIlxuLy8gICAgICAgICAgIGV4aXQ9e3sgc2NhbGU6IDAgfX1cbi8vICAgICAgICAgICBrZXk9XCJtb3Rpb25kaXZsZWF2ZVwiXG4vLyAgICAgICAgICAgdHJhbnNpdGlvbj17e1xuLy8gICAgICAgICAgICAgZHVyYXRpb246IDAuNDUsXG4vLyAgICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuLy8gICAgICAgICAgIH19XG4vLyAgICAgICAgID5cbi8vICAgICAgICAgICA8bW90aW9uLnN2Z1xuLy8gICAgICAgICAgICAgaWQ9XCJsb2dvXCJcbi8vICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuLy8gICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMDAgMTAwXCJcbi8vICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICA8dGl0bGU+TG9nbzwvdGl0bGU+XG4vLyAgICAgICAgICAgICA8Zz5cbi8vICAgICAgICAgICAgICAgey8qIDxnIGlkPVwiS1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNS4wMDAwMDAsIDM1LjAwMDAwMClcIj5cbi8vICAgICAgICAgICAgICAgICA8bW90aW9uLnBhdGhcbi8vICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuLy8gICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4vLyAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4vLyAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxuLy8gICAgICAgICAgICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuLy8gICAgICAgICAgICAgICAgICAgICBkZWxheTogMSxcbi8vICAgICAgICAgICAgICAgICAgIH19XG4vLyAgICAgICAgICAgICAgICAgICBleGl0PXt7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiAyLFxuLy8gICAgICAgICAgICAgICAgICAgfX1cbi8vICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuLy8gICAgICAgICAgICAgICAgICAgZD1cIk0gMjMuMzYzMjgxIDI0Ljg0NzY1NiBMIDE1LjI2OTUzMSAxMy40MjE4NzUgTCAyMi44NDc2NTYgNC43MzA0NjkgQyAyMi45NzI2NTYgNC41ODIwMzEgMjMuMDAzOTA2IDQuMzc1IDIyLjkyNTc4MSA0LjE5OTIxOSBDIDIyLjg0NzY1NiA0LjAxOTUzMSAyMi42NzU3ODEgMy45MDYyNSAyMi40ODgyODEgMy45MDYyNSBMIDE4LjY4MzU5NCAzLjkwNjI1IEMgMTguNTQ2ODc1IDMuOTA2MjUgMTguNDE3OTY5IDMuOTY0ODQ0IDE4LjMyNDIxOSA0LjA2NjQwNiBMIDEwLjQyOTY4OCAxMi45Mzc1IEwgMTAuNDI5Njg4IDQuMzk4NDM4IEMgMTAuNDI5Njg4IDQuMTI4OTA2IDEwLjIxMDkzOCAzLjkwNjI1IDkuOTQ1MzEyIDMuOTA2MjUgTCA2LjU2NjQwNiAzLjkwNjI1IEMgNi4zMDA3ODEgMy45MDYyNSA2LjA4NTkzOCA0LjEyODkwNiA2LjA4NTkzOCA0LjM5ODQzOCBMIDYuMDg1OTM4IDI1LjE0MDYyNSBDIDYuMDg1OTM4IDI1LjQxMDE1NiA2LjMwMDc4MSAyNS42MzI4MTIgNi41NjY0MDYgMjUuNjMyODEyIEwgOS45NDUzMTIgMjUuNjMyODEyIEMgMTAuMjEwOTM4IDI1LjYzMjgxMiAxMC40Mjk2ODggMjUuNDEwMTU2IDEwLjQyOTY4OCAyNS4xNDA2MjUgTCAxMC40Mjk2ODggMTguOTc2NTYyIEwgMTIuNjQ0NTMxIDE2LjQzMzU5NCBMIDE5LjAwNzgxMiAyNS40Mjk2ODggQyAxOS4wOTc2NTYgMjUuNTU4NTk0IDE5LjI0NjA5NCAyNS42MzI4MTIgMTkuMzk4NDM4IDI1LjYzMjgxMiBMIDIyLjk3MjY1NiAyNS42MzI4MTIgQyAyMy4xNTYyNSAyNS42MzI4MTIgMjMuMzIwMzEyIDI1LjUyNzM0NCAyMy40MDIzNDQgMjUuMzYzMjgxIEMgMjMuNDg0Mzc1IDI1LjE5OTIxOSAyMy40NzI2NTYgMjUgMjMuMzYzMjgxIDI0Ljg0NzY1NiBaIE0gMjMuMzYzMjgxIDI0Ljg0NzY1NiBcIlxuLy8gICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgIDwvZz4gKi99XG4vLyAgICAgICAgICAgICAgIDxtb3Rpb24ucGF0aFxuLy8gICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgcGF0aExlbmd0aDogMCB9fVxuLy8gICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgcGF0aExlbmd0aDogMSB9fVxuLy8gICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbi8vICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLFxuLy8gICAgICAgICAgICAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcbi8vICAgICAgICAgICAgICAgICB9fVxuLy8gICAgICAgICAgICAgICAgIGV4aXQ9e3tcbi8vICAgICAgICAgICAgICAgICAgIHNjYWxlOiAyLFxuLy8gICAgICAgICAgICAgICAgIH19XG4vLyAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbi8vICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjVcIlxuLy8gICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4vLyAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4vLyAgICAgICAgICAgICAgICAgZD1cIk0gNTAsIDVcbi8vICAgICAgICAgICBMIDExLCAyN1xuLy8gICAgICAgICAgIEwgMTEsIDcyXG4vLyAgICAgICAgICAgTCA1MCwgOTVcbi8vICAgICAgICAgICBMIDg5LCA3M1xuLy8gICAgICAgICAgIEwgODksIDI4IHpcIlxuLy8gICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgPC9nPlxuLy8gICAgICAgICAgIDwvbW90aW9uLnN2Zz5cbi8vICAgICAgICAgPC9tb3Rpb24uZGl2PlxuLy8gICAgICAgKX1cbi8vICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbi8vICAgKTtcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Loader.tsx\n"));

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Email */ \"./src/components/Email.tsx\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Loader */ \"./src/components/Loader.tsx\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_Loader__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_SocialIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/SocialIcons */ \"./src/components/SocialIcons.tsx\");\n/* harmony import */ var _sections_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/sections/Footer */ \"./src/sections/Footer.tsx\");\n/* harmony import */ var _sections_Hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/sections/Hero */ \"./src/sections/Hero.tsx\");\n/* harmony import */ var _sections_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/sections/Navbar */ \"./src/sections/Navbar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _sections_About__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/sections/About */ \"./src/sections/About.tsx\");\n/* harmony import */ var _sections_Contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/sections/Contact */ \"./src/sections/Contact.tsx\");\n/* harmony import */ var _sections_Projects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/sections/Projects */ \"./src/sections/Projects.tsx\");\n/* harmony import */ var _sections_Experience__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/sections/Experience */ \"./src/sections/Experience.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Index() {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(true);\n    const [showContent, setShowContent] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const handleLoaderLoaded = ()=>{\n        setIsLoading(false);\n        setTimeout(()=>setShowContent(true), 450);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"app\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Rohan Farzana\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/pages/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/pages/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            showContent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_Navbar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/pages/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SocialIcons__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/pages/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Email__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/pages/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_Hero__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/pages/index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_About__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/pages/index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_Experience__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/pages/index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_Projects__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/pages/index.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_Contact__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/pages/index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/pages/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Loader__WEBPACK_IMPORTED_MODULE_3___default()), {\n                isLoading: isLoading,\n                setIsLoading: handleLoaderLoaded\n            }, void 0, false, {\n                fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/pages/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rohanfarzana/Desktop/farzana/projects/portfolio/src/pages/index.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"h36wMPAZuL31Ljhp01hIbaLZawA=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1U7QUFDRTtBQUNVO0FBQ1o7QUFDSjtBQUNJO0FBQ0M7QUFDSDtBQUNJO0FBQ0U7QUFDSTtBQUUvQyxTQUFTYSxRQUFROztJQUNmLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQy9DLE1BQU0sQ0FBQ1EsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRXBELE1BQU1VLHFCQUFxQixJQUFNO1FBQy9CSCxhQUFhLEtBQUs7UUFDbEJJLFdBQVcsSUFBTUYsZUFBZSxJQUFJLEdBQUc7SUFDekM7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNyQixrREFBSUE7O2tDQUNILDhEQUFDc0I7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQWdCQyxNQUFLOzs7Ozs7Ozs7Ozs7WUFFaENULDZCQUNDOztrQ0FDRSw4REFBQ1Ysd0RBQU1BOzs7OztrQ0FDUCw4REFBQ0gsK0RBQVdBOzs7OztrQ0FDWiw4REFBQ0YseURBQUtBOzs7OztrQ0FDTiw4REFBQ3lCOzswQ0FDQyw4REFBQ3JCLHNEQUFJQTs7Ozs7MENBQ0wsOERBQUNJLHVEQUFLQTs7Ozs7MENBQ04sOERBQUNHLDZEQUFVQTs7Ozs7MENBQ1gsOERBQUNELDJEQUFRQTs7Ozs7MENBQ1QsOERBQUNELDBEQUFPQTs7Ozs7Ozs7Ozs7a0NBRVYsOERBQUNOLHdEQUFNQTs7Ozs7OzswQkFHWCw4REFBQ0YsMkRBQU1BO2dCQUFDWSxXQUFXQTtnQkFBV0MsY0FBY0c7Ozs7Ozs7Ozs7OztBQUdsRDtHQWpDU0w7S0FBQUE7QUFtQ1QsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBFbWFpbCBmcm9tIFwiQC9jb21wb25lbnRzL0VtYWlsXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvTG9hZGVyXCI7XG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSBcIkAvY29tcG9uZW50cy9Tb2NpYWxJY29uc1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiQC9zZWN0aW9ucy9Gb290ZXJcIjtcbmltcG9ydCBIZXJvIGZyb20gXCJAL3NlY3Rpb25zL0hlcm9cIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIkAvc2VjdGlvbnMvTmF2YmFyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBYm91dCBmcm9tIFwiQC9zZWN0aW9ucy9BYm91dFwiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIkAvc2VjdGlvbnMvQ29udGFjdFwiO1xuaW1wb3J0IFByb2plY3RzIGZyb20gXCJAL3NlY3Rpb25zL1Byb2plY3RzXCI7XG5pbXBvcnQgRXhwZXJpZW5jZSBmcm9tIFwiQC9zZWN0aW9ucy9FeHBlcmllbmNlXCI7XG5cbmZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzaG93Q29udGVudCwgc2V0U2hvd0NvbnRlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUxvYWRlckxvYWRlZCA9ICgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0U2hvd0NvbnRlbnQodHJ1ZSksIDQ1MCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Sb2hhbiBGYXJ6YW5hPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAge3Nob3dDb250ZW50ICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgPFNvY2lhbEljb25zIC8+XG4gICAgICAgICAgPEVtYWlsIC8+XG4gICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8SGVybyAvPlxuICAgICAgICAgICAgPEFib3V0IC8+XG4gICAgICAgICAgICA8RXhwZXJpZW5jZSAvPlxuICAgICAgICAgICAgPFByb2plY3RzIC8+XG4gICAgICAgICAgICA8Q29udGFjdCAvPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIDxMb2FkZXIgaXNMb2FkaW5nPXtpc0xvYWRpbmd9IHNldElzTG9hZGluZz17aGFuZGxlTG9hZGVyTG9hZGVkfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiRW1haWwiLCJMb2FkZXIiLCJTb2NpYWxJY29ucyIsIkZvb3RlciIsIkhlcm8iLCJOYXZiYXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiQWJvdXQiLCJDb250YWN0IiwiUHJvamVjdHMiLCJFeHBlcmllbmNlIiwiSW5kZXgiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzaG93Q29udGVudCIsInNldFNob3dDb250ZW50IiwiaGFuZGxlTG9hZGVyTG9hZGVkIiwic2V0VGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});