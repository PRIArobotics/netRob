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
var _jsxFileName = "/home/sarah/Documents/Arbeit/netRob/HedgehogIDE (another copy)/src/routes/webrtc/index.js";




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3dlYnJ0Yy5qcyIsInNvdXJjZXMiOlsiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9uZXRSb2IvSGVkZ2Vob2dJREUgKGFub3RoZXIgY29weSkvc3JjL2NvbXBvbmVudHMvbWlzYy9Ob1NTUi5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvbmV0Um9iL0hlZGdlaG9nSURFIChhbm90aGVyIGNvcHkpL3NyYy9yb3V0ZXMvd2VicnRjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBQcm9wVHlwZXMgPSB7fFxuICBjaGlsZHJlbjogKCkgPT4gUHJvbWlzZTxSZWFjdC5Ob2RlPixcbnx9O1xudHlwZSBTdGF0ZVR5cGVzID0ge3xcbiAgY2hpbGRyZW46IFJlYWN0Lk5vZGUgfCBudWxsLFxufH07XG5cbi8qKlxuICogUHJldmVudHMgdGhlIHJlbmRlciBmdW5jdGlvbiBwYXNzZWQgYXMgYGNoaWxkcmVuYCBmcm9tIGJlaW5nIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIuXG4gKi9cbmNsYXNzIE5vU1NSIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BUeXBlcywgU3RhdGVUeXBlcz4ge1xuICBzdGF0ZSA9IHtcbiAgICBjaGlsZHJlbjogbnVsbCxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbigpLnRoZW4oKGNoaWxkcmVuKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5jaGlsZHJlbjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb1NTUjtcbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xuaW1wb3J0IE5vU1NSIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWlzYy9Ob1NTUic7XG5cbmFzeW5jIGZ1bmN0aW9uIGFjdGlvbigpIHtcbiAgY29uc3Qgc2hvd1dlYlJUQyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGRlZmF1bHQ6IFdlYlJUQyB9ID0gYXdhaXQgaW1wb3J0KCcuL1dlYlJUQycpO1xuXG4gICAgcmV0dXJuIDxXZWJSVEMgLz47XG4gIH07XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdXZWJSVEMnLFxuICAgIGNodW5rczogWyd3ZWJydGMnXSxcbiAgICBjb21wb25lbnQ6IChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxOb1NTUiBrZXk9XCJ3ZWJydGNcIj57c2hvd1dlYlJUQ308L05vU1NSPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBREE7QUFDQTtBQUlBO0FBQ0EsaUJBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFDQTtBQW1CQTs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBU0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=