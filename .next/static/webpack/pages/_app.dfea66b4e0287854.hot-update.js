"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layouts/index.jsx":
/*!**************************************!*\
  !*** ./components/layouts/index.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./components/layouts/Header.jsx\");\n/* harmony import */ var _public_svgs_taare_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/svgs/taare.svg */ \"./public/svgs/taare.svg\");\n/* harmony import */ var _NavigationMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavigationMenu */ \"./components/layouts/NavigationMenu.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar DefaultLayout = function(param) {\n    var children = param.children;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        window.onscroll = function() {\n            console.log(\"hello world\");\n        };\n    }, []);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isNavOpen = ref[0], setIsNavOpen = ref[1];\n    // boxShadow: 'inset 0 0 0 1000px rgba(25, 50, 71,0.5)'\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavigationMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isNavOpen: isNavOpen,\n                setIsNavOpen: setIsNavOpen\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Hamza Javed\\\\Downloads\\\\lapaas-changes-main\\\\components\\\\layouts\\\\index.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen bg-black text-white relative default-layout \".concat(router.pathname !== \"/\" && \"BlueBg\"),\n                style: {\n                    //   backgroundImage: `url(${Taare.src})`,\n                    width: \"100%\",\n                    height: \"100%\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            background: \"red\",\n                            position: \"absolute\",\n                            width: \"150%\",\n                            height: \"150%\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                            animate: {\n                                x: [\n                                    0,\n                                    -100,\n                                    100,\n                                    0\n                                ],\n                                y: [\n                                    0,\n                                    -100,\n                                    100,\n                                    0\n                                ]\n                            },\n                            style: {\n                                backgroundImage: \"url(\".concat(_public_svgs_taare_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src, \")\"),\n                                width: \"100%\",\n                                height: \"100%\",\n                                opacity: 1\n                            },\n                            transition: {\n                                ease: \"easeInOut\",\n                                duration: 2,\n                                repeat: 20\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Hamza Javed\\\\Downloads\\\\lapaas-changes-main\\\\components\\\\layouts\\\\index.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hamza Javed\\\\Downloads\\\\lapaas-changes-main\\\\components\\\\layouts\\\\index.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        setIsNavOpen: setIsNavOpen\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Hamza Javed\\\\Downloads\\\\lapaas-changes-main\\\\components\\\\layouts\\\\index.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Hamza Javed\\\\Downloads\\\\lapaas-changes-main\\\\components\\\\layouts\\\\index.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(DefaultLayout, \"mYKPKUCWfRvqtROBklyC+Kw+rsQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = DefaultLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DefaultLayout);\nvar _c;\n$RefreshReg$(_c, \"DefaultLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ1Y7QUFDa0I7QUFDRjtBQUNOO0FBQ0Q7O0FBRXZDLElBQU1PLGFBQWEsR0FBRyxnQkFBa0I7UUFBZkMsUUFBUSxTQUFSQSxRQUFROztJQUMvQixJQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFFMUJMLHNEQUFlLENBQUMsV0FBTTtRQUNwQlcsTUFBTSxDQUFDQyxRQUFRLEdBQUcsV0FBTTtZQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDNUIsQ0FBQztLQUNILEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxJQUFrQ2IsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUExQ2MsU0FBUyxHQUFrQmQsR0FBZSxHQUFqQyxFQUFFZSxZQUFZLEdBQUlmLEdBQWUsR0FBbkI7SUFDOUIsdURBQXVEO0lBQ3ZELHFCQUNFOzswQkFDRSw4REFBQ0csdURBQWM7Z0JBQUNXLFNBQVMsRUFBRUEsU0FBUztnQkFBRUMsWUFBWSxFQUFFQSxZQUFZOzs7OztxQkFBSTswQkFDcEUsOERBQUNDLEtBQUc7Z0JBQ0ZDLFNBQVMsRUFBRSwyREFBMEQsQ0FFcEUsT0FEQ1QsTUFBTSxDQUFDVSxRQUFRLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FDbkM7Z0JBQ0ZDLEtBQUssRUFBRTtvQkFDTCwwQ0FBMEM7b0JBQzFDQyxLQUFLLEVBQUUsTUFBTTtvQkFDYkMsTUFBTSxFQUFFLE1BQU07aUJBQ2Y7O2tDQUVELDhEQUFDTCxLQUFHO3dCQUNGRyxLQUFLLEVBQUU7NEJBQ0xHLFVBQVUsRUFBRSxLQUFLOzRCQUNqQkMsUUFBUSxFQUFFLFVBQVU7NEJBQ3BCSCxLQUFLLEVBQUUsTUFBTTs0QkFDYkMsTUFBTSxFQUFFLE1BQU07eUJBQ2Y7a0NBRUQsNEVBQUNoQixxREFBVTs0QkFDVG1CLE9BQU8sRUFBRTtnQ0FDUEMsQ0FBQyxFQUFFO0FBQUMscUNBQUM7b0NBQUUsQ0FBQyxHQUFHO0FBQUUsdUNBQUc7QUFBRSxxQ0FBQztpQ0FBQztnQ0FDcEJDLENBQUMsRUFBRTtBQUFDLHFDQUFDO29DQUFFLENBQUMsR0FBRztBQUFFLHVDQUFHO0FBQUUscUNBQUM7aUNBQUM7NkJBQ3JCOzRCQUNEUCxLQUFLLEVBQUU7Z0NBQ0xRLGVBQWUsRUFBRSxNQUFLLENBQVksTUFBQyxDQUFYekIsa0VBQVMsRUFBQyxHQUFDLENBQUM7Z0NBQ3BDa0IsS0FBSyxFQUFFLE1BQU07Z0NBQ2JDLE1BQU0sRUFBRSxNQUFNO2dDQUNkUSxPQUFPLEVBQUUsQ0FBQzs2QkFDWDs0QkFDREMsVUFBVSxFQUFFO2dDQUFFQyxJQUFJLEVBQUUsV0FBVztnQ0FBRUMsUUFBUSxFQUFFLENBQUM7Z0NBQUVDLE1BQU0sRUFBRSxFQUFFOzZCQUFFOzs7OztpQ0FHL0M7Ozs7OzZCQUNUO2tDQUVOLDhEQUFDaEMsK0NBQU07d0JBQUNjLFlBQVksRUFBRUEsWUFBWTs7Ozs7NkJBQUk7b0JBQ3JDUixRQUFROzs7Ozs7cUJBQ0w7O29CQUNMLENBQ0g7Q0FDSDtHQXJES0QsYUFBYTs7UUFDRkYsa0RBQVM7OztBQURwQkUsS0FBQUEsYUFBYTtBQXVEbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dHMvaW5kZXguanN4P2Q4YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IFRhYXJlIGZyb20gXCIuLi8uLi9wdWJsaWMvc3Zncy90YWFyZS5zdmdcIjtcbmltcG9ydCBOYXZpZ2F0aW9uTWVudSBmcm9tIFwiLi9OYXZpZ2F0aW9uTWVudVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBEZWZhdWx0TGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGRcIik7XG4gICAgfTtcbiAgfSwgW10pO1xuICBjb25zdCBbaXNOYXZPcGVuLCBzZXRJc05hdk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBib3hTaGFkb3c6ICdpbnNldCAwIDAgMCAxMDAwcHggcmdiYSgyNSwgNTAsIDcxLDAuNSknXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZpZ2F0aW9uTWVudSBpc05hdk9wZW49e2lzTmF2T3Blbn0gc2V0SXNOYXZPcGVuPXtzZXRJc05hdk9wZW59IC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YG1pbi1oLXNjcmVlbiBiZy1ibGFjayB0ZXh0LXdoaXRlIHJlbGF0aXZlIGRlZmF1bHQtbGF5b3V0ICR7XG4gICAgICAgICAgcm91dGVyLnBhdGhuYW1lICE9PSBcIi9cIiAmJiBcIkJsdWVCZ1wiXG4gICAgICAgIH1gfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIC8vICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7VGFhcmUuc3JjfSlgLFxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmVkXCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiMTUwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjE1MCVcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICAgICAgeDogWzAsIC0xMDAsIDEwMCwgMF0sXG4gICAgICAgICAgICAgIHk6IFswLCAtMTAwLCAxMDAsIDBdLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1RhYXJlLnNyY30pYCxcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZWFzZTogXCJlYXNlSW5PdXRcIiwgZHVyYXRpb246IDIsIHJlcGVhdDogMjAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogPGltZyBzcmM9e30gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IC8+ICovfVxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8UGFydGljbGVBcmVhIC8+ICovfVxuICAgICAgICA8SGVhZGVyIHNldElzTmF2T3Blbj17c2V0SXNOYXZPcGVufSAvPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRMYXlvdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIlRhYXJlIiwiTmF2aWdhdGlvbk1lbnUiLCJ1c2VSb3V0ZXIiLCJtb3Rpb24iLCJEZWZhdWx0TGF5b3V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsImNvbnNvbGUiLCJsb2ciLCJpc05hdk9wZW4iLCJzZXRJc05hdk9wZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJwYXRobmFtZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwicG9zaXRpb24iLCJhbmltYXRlIiwieCIsInkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzcmMiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsInJlcGVhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/index.jsx\n"));

/***/ })

});