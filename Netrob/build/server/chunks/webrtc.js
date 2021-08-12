require("source-map-support").install();
exports.ids = ["webrtc"];
exports.modules = {

/***/ "./src/components/misc/NoSSR.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Prevents the render function passed as `children` from being rendered on the server.
 */
class NoSSR extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      children: null
    });
  }

  componentDidMount() {
    if (false) {}
  }

  render() {
    return this.state.children;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NoSSR);

/***/ }),

/***/ "./src/routes/webrtc/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/layout/Layout/Layout.js");
/* harmony import */ var _components_misc_NoSSR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/misc/NoSSR.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/routes/webrtc/index.js";




async function action() {
  const showWebRTC = async () => {
    const {
      default: WebRTC
    } = await __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, "./src/routes/webrtc/WebRTC.js"));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WebRTC, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 12
      }
    });
  };

  return {
    title: 'WebRTC',
    chunks: ['webrtc'],
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_misc_NoSSR__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: "webrtc",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, showWebRTC))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3dlYnJ0Yy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29tcG9uZW50cy9taXNjL05vU1NSLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvcm91dGVzL3dlYnJ0Yy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnR5cGUgUHJvcFR5cGVzID0ge3xcbiAgY2hpbGRyZW46ICgpID0+IFByb21pc2U8UmVhY3QuTm9kZT4sXG58fTtcbnR5cGUgU3RhdGVUeXBlcyA9IHt8XG4gIGNoaWxkcmVuOiBSZWFjdC5Ob2RlIHwgbnVsbCxcbnx9O1xuXG4vKipcbiAqIFByZXZlbnRzIHRoZSByZW5kZXIgZnVuY3Rpb24gcGFzc2VkIGFzIGBjaGlsZHJlbmAgZnJvbSBiZWluZyByZW5kZXJlZCBvbiB0aGUgc2VydmVyLlxuICovXG5jbGFzcyBOb1NTUiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wVHlwZXMsIFN0YXRlVHlwZXM+IHtcbiAgc3RhdGUgPSB7XG4gICAgY2hpbGRyZW46IG51bGwsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4oKS50aGVuKChjaGlsZHJlbikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuY2hpbGRyZW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9TU1I7XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcbmltcG9ydCBOb1NTUiBmcm9tICcuLi8uLi9jb21wb25lbnRzL21pc2MvTm9TU1InO1xuXG5hc3luYyBmdW5jdGlvbiBhY3Rpb24oKSB7XG4gIGNvbnN0IHNob3dXZWJSVEMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkZWZhdWx0OiBXZWJSVEMgfSA9IGF3YWl0IGltcG9ydCgnLi9XZWJSVEMnKTtcblxuICAgIHJldHVybiA8V2ViUlRDIC8+O1xuICB9O1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnV2ViUlRDJyxcbiAgICBjaHVua3M6IFsnd2VicnRjJ10sXG4gICAgY29tcG9uZW50OiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Tm9TU1Iga2V5PVwid2VicnRjXCI+e3Nob3dXZWJSVEN9PC9Ob1NTUj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICksXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQURBO0FBQ0E7QUFJQTtBQUNBLGlCQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBQ0E7QUFtQkE7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9