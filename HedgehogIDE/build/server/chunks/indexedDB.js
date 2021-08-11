require("source-map-support").install();
exports.ids = ["indexedDB"];
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

/***/ "./src/routes/indexedDB/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/layout/Layout/Layout.js");
/* harmony import */ var _components_misc_NoSSR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/misc/NoSSR.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/routes/indexedDB/index.js";




async function action() {
  const showIndexedDB = async () => {
    const {
      default: IndexedDB
    } = await __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, "./src/routes/indexedDB/IndexedDB.js"));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IndexedDB, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 12
      }
    });
  };

  return {
    title: 'IndexedDB',
    chunks: ['indexedDB'],
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_misc_NoSSR__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: "indexedDB",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, showIndexedDB))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2luZGV4ZWREQi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9jb21wb25lbnRzL21pc2MvTm9TU1IuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3JvdXRlcy9pbmRleGVkREIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG50eXBlIFByb3BUeXBlcyA9IHt8XG4gIGNoaWxkcmVuOiAoKSA9PiBQcm9taXNlPFJlYWN0Lk5vZGU+LFxufH07XG50eXBlIFN0YXRlVHlwZXMgPSB7fFxuICBjaGlsZHJlbjogUmVhY3QuTm9kZSB8IG51bGwsXG58fTtcblxuLyoqXG4gKiBQcmV2ZW50cyB0aGUgcmVuZGVyIGZ1bmN0aW9uIHBhc3NlZCBhcyBgY2hpbGRyZW5gIGZyb20gYmVpbmcgcmVuZGVyZWQgb24gdGhlIHNlcnZlci5cbiAqL1xuY2xhc3MgTm9TU1IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcFR5cGVzLCBTdGF0ZVR5cGVzPiB7XG4gIHN0YXRlID0ge1xuICAgIGNoaWxkcmVuOiBudWxsLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuKCkudGhlbigoY2hpbGRyZW4pID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vU1NSO1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XG5pbXBvcnQgTm9TU1IgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9taXNjL05vU1NSJztcblxuYXN5bmMgZnVuY3Rpb24gYWN0aW9uKCkge1xuICBjb25zdCBzaG93SW5kZXhlZERCID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGVmYXVsdDogSW5kZXhlZERCIH0gPSBhd2FpdCBpbXBvcnQoJy4vSW5kZXhlZERCJyk7XG5cbiAgICByZXR1cm4gPEluZGV4ZWREQiAvPjtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0luZGV4ZWREQicsXG4gICAgY2h1bmtzOiBbJ2luZGV4ZWREQiddLFxuICAgIGNvbXBvbmVudDogKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPE5vU1NSIGtleT1cImluZGV4ZWREQlwiPntzaG93SW5kZXhlZERCfTwvTm9TU1I+XG4gICAgICA8L0xheW91dD5cbiAgICApLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb247XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFEQTtBQUNBO0FBSUE7QUFDQSxpQkFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQUNBO0FBbUJBOzs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==