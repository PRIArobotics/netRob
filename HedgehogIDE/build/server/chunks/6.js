require("source-map-support").install();
exports.ids = [6];
exports.modules = {

/***/ "./src/components/ide/ReadOnlyBlockly/ReadOnlyBlockly.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/locale/index.js");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/translations/index.js");
/* harmony import */ var _VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/ide/VisualEditor/blockly_config.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/ide/ReadOnlyBlockly/ReadOnlyBlockly.js";






function ReadOnlyBlockly({
  children,
  width,
  height
}) {
  const [workspaceDiv, setWorkspaceDiv] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  const {
    preferredLocales
  } = Object(_locale__WEBPACK_IMPORTED_MODULE_2__["useLocale"])();
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    var _getTranslation;

    if (workspaceDiv === null) return undefined;
    const {
      rtl,
      msg
    } = (_getTranslation = Object(_translations__WEBPACK_IMPORTED_MODULE_3__["getTranslation"])(preferredLocales, _VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_4__["LOCALES"])) !== null && _getTranslation !== void 0 ? _getTranslation : _VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_4__["LOCALES"].en;
    _VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_4__["default"].setLocale(msg);
    const workspace = _VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_4__["default"].inject(workspaceDiv, {
      readOnly: true,
      grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true
      },
      rtl,
      trashcan: false
    });
    const xml = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToStaticMarkup( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("xml", {
      xmlns: "https://developers.google.com/blockly/xml",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }
    }, children));
    const dom = _VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_4__["default"].Xml.textToDom(xml);
    _VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_4__["default"].Xml.clearWorkspaceAndLoadFromXml(dom, workspace);
    return () => {
      workspace.dispose();
    };
  }, [workspaceDiv, children, preferredLocales]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    ref: setWorkspaceDiv,
    style: {
      width,
      height
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 10
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ReadOnlyBlockly);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzLzYuanMiLCJzb3VyY2VzIjpbIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29tcG9uZW50cy9pZGUvUmVhZE9ubHlCbG9ja2x5L1JlYWRPbmx5QmxvY2tseS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5cbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJy4uLy4uL2xvY2FsZSc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL3RyYW5zbGF0aW9ucyc7XG5cbmltcG9ydCBCbG9ja2x5LCB7IExPQ0FMRVMgfSBmcm9tICcuLi9WaXN1YWxFZGl0b3IvYmxvY2tseV9jb25maWcnO1xuXG5pbXBvcnQgeyB0eXBlIFByb3BzIH0gZnJvbSAnLic7XG5cbmZ1bmN0aW9uIFJlYWRPbmx5QmxvY2tseSh7IGNoaWxkcmVuLCB3aWR0aCwgaGVpZ2h0IH06IFByb3BzKSB7XG4gIGNvbnN0IFt3b3Jrc3BhY2VEaXYsIHNldFdvcmtzcGFjZURpdl0gPSBSZWFjdC51c2VTdGF0ZTxSZWFjdC5FbGVtZW50UmVmPCdkaXYnPiB8IG51bGw+KG51bGwpO1xuICBjb25zdCB7IHByZWZlcnJlZExvY2FsZXMgfSA9IHVzZUxvY2FsZSgpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdvcmtzcGFjZURpdiA9PT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IHsgcnRsLCBtc2cgfSA9IGdldFRyYW5zbGF0aW9uKHByZWZlcnJlZExvY2FsZXMsIExPQ0FMRVMpID8/IExPQ0FMRVMuZW47XG5cbiAgICBCbG9ja2x5LnNldExvY2FsZShtc2cpO1xuICAgIGNvbnN0IHdvcmtzcGFjZSA9IEJsb2NrbHkuaW5qZWN0KHdvcmtzcGFjZURpdiwge1xuICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICBncmlkOiB7XG4gICAgICAgIHNwYWNpbmc6IDIwLFxuICAgICAgICBsZW5ndGg6IDMsXG4gICAgICAgIGNvbG91cjogJyNjY2MnLFxuICAgICAgICBzbmFwOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHJ0bCxcbiAgICAgIHRyYXNoY2FuOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHhtbCA9IFJlYWN0RE9NLnJlbmRlclRvU3RhdGljTWFya3VwKFxuICAgICAgPHhtbCB4bWxucz1cImh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2Jsb2NrbHkveG1sXCI+e2NoaWxkcmVufTwveG1sPixcbiAgICApO1xuICAgIGNvbnN0IGRvbSA9IEJsb2NrbHkuWG1sLnRleHRUb0RvbSh4bWwpO1xuICAgIEJsb2NrbHkuWG1sLmNsZWFyV29ya3NwYWNlQW5kTG9hZEZyb21YbWwoZG9tLCB3b3Jrc3BhY2UpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdvcmtzcGFjZS5kaXNwb3NlKCk7XG4gICAgfTtcbiAgfSwgW3dvcmtzcGFjZURpdiwgY2hpbGRyZW4sIHByZWZlcnJlZExvY2FsZXNdKTtcblxuICByZXR1cm4gPGRpdiByZWY9e3NldFdvcmtzcGFjZURpdn0gc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhZE9ubHlCbG9ja2x5O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9