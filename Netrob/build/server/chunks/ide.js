require("source-map-support").install();
exports.ids = ["ide"];
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

/***/ "./src/routes/ide/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/layout/Layout/Layout.js");
/* harmony import */ var _components_misc_NoSSR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/misc/NoSSR.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/routes/ide/index.js";




async function action(_context, params) {
  const projectName = params.id;

  const showIde = async () => {
    const {
      default: Ide
    } = await Promise.all(/* import() */[__webpack_require__.e(4), __webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "./src/components/ide/Ide/Ide.js"));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Ide, {
      projectName: projectName,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 12
      }
    });
  };

  return {
    title: projectName,
    chunks: ['ide'],
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      contentFill: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_misc_NoSSR__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: `ide-${projectName}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, showIde))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),

/***/ "./src/routes/projects/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/layout/Layout/Layout.js");
/* harmony import */ var _components_misc_NoSSR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/misc/NoSSR.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/routes/projects/index.js";




async function action() {
  const showProjectList = async () => {
    const {
      default: ProjectList
    } = await __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, "./src/components/projects/ProjectList/ProjectList.js"));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ProjectList, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 12
      }
    });
  };

  return {
    title: 'Projects',
    chunks: ['ide'],
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_misc_NoSSR__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: "projects",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, showProjectList))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2lkZS5qcyIsInNvdXJjZXMiOlsiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29tcG9uZW50cy9taXNjL05vU1NSLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvcm91dGVzL2lkZS9pbmRleC5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL3JvdXRlcy9wcm9qZWN0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnR5cGUgUHJvcFR5cGVzID0ge3xcbiAgY2hpbGRyZW46ICgpID0+IFByb21pc2U8UmVhY3QuTm9kZT4sXG58fTtcbnR5cGUgU3RhdGVUeXBlcyA9IHt8XG4gIGNoaWxkcmVuOiBSZWFjdC5Ob2RlIHwgbnVsbCxcbnx9O1xuXG4vKipcbiAqIFByZXZlbnRzIHRoZSByZW5kZXIgZnVuY3Rpb24gcGFzc2VkIGFzIGBjaGlsZHJlbmAgZnJvbSBiZWluZyByZW5kZXJlZCBvbiB0aGUgc2VydmVyLlxuICovXG5jbGFzcyBOb1NTUiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wVHlwZXMsIFN0YXRlVHlwZXM+IHtcbiAgc3RhdGUgPSB7XG4gICAgY2hpbGRyZW46IG51bGwsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4oKS50aGVuKChjaGlsZHJlbikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuY2hpbGRyZW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9TU1I7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcbmltcG9ydCBOb1NTUiBmcm9tICcuLi8uLi9jb21wb25lbnRzL21pc2MvTm9TU1InO1xuXG5hc3luYyBmdW5jdGlvbiBhY3Rpb24oX2NvbnRleHQsIHBhcmFtcykge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IHBhcmFtcy5pZDtcblxuICBjb25zdCBzaG93SWRlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGVmYXVsdDogSWRlIH0gPSBhd2FpdCBpbXBvcnQoJy4uLy4uL2NvbXBvbmVudHMvaWRlL0lkZScpO1xuXG4gICAgcmV0dXJuIDxJZGUgcHJvamVjdE5hbWU9e3Byb2plY3ROYW1lfSAvPjtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogcHJvamVjdE5hbWUsXG4gICAgY2h1bmtzOiBbJ2lkZSddLFxuICAgIGNvbXBvbmVudDogKFxuICAgICAgPExheW91dCBjb250ZW50RmlsbD5cbiAgICAgICAgPE5vU1NSIGtleT17YGlkZS0ke3Byb2plY3ROYW1lfWB9PntzaG93SWRlfTwvTm9TU1I+XG4gICAgICA8L0xheW91dD5cbiAgICApLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb247XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcbmltcG9ydCBOb1NTUiBmcm9tICcuLi8uLi9jb21wb25lbnRzL21pc2MvTm9TU1InO1xuXG5hc3luYyBmdW5jdGlvbiBhY3Rpb24oKSB7XG4gIGNvbnN0IHNob3dQcm9qZWN0TGlzdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGRlZmF1bHQ6IFByb2plY3RMaXN0IH0gPSBhd2FpdCBpbXBvcnQoJy4uLy4uL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdExpc3QnKTtcblxuICAgIHJldHVybiA8UHJvamVjdExpc3QgLz47XG4gIH07XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdQcm9qZWN0cycsXG4gICAgY2h1bmtzOiBbJ2lkZSddLFxuICAgIGNvbXBvbmVudDogKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPE5vU1NSIGtleT1cInByb2plY3RzXCI+e3Nob3dQcm9qZWN0TGlzdH08L05vU1NSPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBREE7QUFDQTtBQUlBO0FBQ0EsaUJBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFDQTtBQW1CQTs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9