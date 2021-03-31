webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var _Users_misha_Desktop_miauth_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/Users/misha/Desktop/miauth/pages/login.jsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_misha_Desktop_miauth_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction Login() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    email: '',\n    password: ''\n  }),\n      formValues = _useState[0],\n      setFormValues = _useState[1];\n\n  var email = formValues.email,\n      password = formValues.password;\n\n  var onInputChange = function onInputChange(e) {\n    setFormValues(function (prevFormValues) {\n      return _objectSpread(_objectSpread({}, prevFormValues), {}, Object(_Users_misha_Desktop_miauth_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, e.target.name, e.target.value));\n    });\n  };\n\n  var onSubmit = function onSubmit() {\n    fetch('/api/login', {\n      method: 'POST',\n      body: JSON.stringify({\n        email: email,\n        password: password\n      })\n    }).then(function () {\n      return router.push('/me');\n    })[\"catch\"](function (e) {\n      return setError(e);\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n        onChange: onInputChange,\n        type: \"text\",\n        name: \"email\",\n        placeholder: \"email\",\n        value: email\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n        onChange: onInputChange,\n        type: \"text\",\n        name: \"password\",\n        placeholder: \"password\",\n        value: password\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n        onClick: onSubmit,\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 17\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Login, \"WjYRNq3y+IkLc/si49q48h/WQ9c=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Login;\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanN4P2U1MDciXSwibmFtZXMiOlsiTG9naW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsIm9uSW5wdXRDaGFuZ2UiLCJlIiwicHJldkZvcm1WYWx1ZXMiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJvblN1Ym1pdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicHVzaCIsInNldEVycm9yIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFDOUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEOEIsa0JBRU1DLHNEQUFRLENBQUM7QUFDM0NDLFNBQUssRUFBRSxFQURvQztBQUUzQ0MsWUFBUSxFQUFFO0FBRmlDLEdBQUQsQ0FGZDtBQUFBLE1BRXZCQyxVQUZ1QjtBQUFBLE1BRVhDLGFBRlc7O0FBQUEsTUFNdEJILEtBTnNCLEdBTUZFLFVBTkUsQ0FNdEJGLEtBTnNCO0FBQUEsTUFNZkMsUUFOZSxHQU1GQyxVQU5FLENBTWZELFFBTmU7O0FBUTlCLE1BQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3pCRixpQkFBYSxDQUFDLFVBQUFHLGNBQWM7QUFBQSw2Q0FDdkJBLGNBRHVCLDZJQUV6QkQsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLElBRmdCLEVBRVRILENBQUMsQ0FBQ0UsTUFBRixDQUFTRSxLQUZBO0FBQUEsS0FBZixDQUFiO0FBSUQsR0FMRDs7QUFNQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCQyxTQUFLLENBQUMsWUFBRCxFQUFlO0FBQ2xCQyxZQUFNLEVBQUUsTUFEVTtBQUVsQkMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQmYsYUFBSyxFQUFMQSxLQURtQjtBQUVuQkMsZ0JBQVEsRUFBUkE7QUFGbUIsT0FBZjtBQUZZLEtBQWYsQ0FBTCxDQU1HZSxJQU5ILENBTVE7QUFBQSxhQUFNbkIsTUFBTSxDQUFDb0IsSUFBUCxDQUFZLEtBQVosQ0FBTjtBQUFBLEtBTlIsV0FNd0MsVUFBQVosQ0FBQztBQUFBLGFBQUVhLFFBQVEsQ0FBQ2IsQ0FBRCxDQUFWO0FBQUEsS0FOekM7QUFPRCxHQVJEOztBQVNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSw4QkFDRTtBQUNFLGdCQUFRLEVBQUVELGFBRFo7QUFFRSxZQUFJLEVBQUMsTUFGUDtBQUdFLFlBQUksRUFBQyxPQUhQO0FBSUUsbUJBQVcsRUFBQyxPQUpkO0FBS0UsYUFBSyxFQUFFSjtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVFFO0FBQ0UsZ0JBQVEsRUFBRUksYUFEWjtBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsWUFBSSxFQUFDLFVBSFA7QUFJRSxtQkFBVyxFQUFDLFVBSmQ7QUFLRSxhQUFLLEVBQUVIO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGLGVBZUU7QUFBUSxlQUFPLEVBQUVTLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFrQkdTLEtBQUssaUJBQUk7QUFBQSxnQkFBTUE7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJaO0FBQUEsa0JBREY7QUFzQkQ7O0dBN0N1QnZCLEs7VUFDUEUscUQ7OztLQURPRixLIiwiZmlsZSI6Ii4vcGFnZXMvbG9naW4uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtmb3JtVmFsdWVzLCBzZXRGb3JtVmFsdWVzXSA9IHVzZVN0YXRlKHtcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICB9KVxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gZm9ybVZhbHVlc1xuXG4gIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSBlID0+IHtcbiAgICBzZXRGb3JtVmFsdWVzKHByZXZGb3JtVmFsdWVzID0+ICh7XG4gICAgICAuLi5wcmV2Rm9ybVZhbHVlcyxcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgfSkpXG4gIH1cbiAgY29uc3Qgb25TdWJtaXQgPSAoKSA9PiB7XG4gICAgZmV0Y2goJy9hcGkvbG9naW4nLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSksXG4gICAgfSkudGhlbigoKSA9PiByb3V0ZXIucHVzaCgnL21lJykpLmNhdGNoKGU9PnNldEVycm9yKGUpKVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J2VtYWlsJ1xuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICBwbGFjZWhvbGRlcj0ncGFzc3dvcmQnXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAge2Vycm9yICYmIDxkaXY+e2Vycm9yfTwvZGl2Pn1cbiAgICA8Lz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.jsx\n");

/***/ })

})