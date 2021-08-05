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
var _jsxFileName = "/home/sarah/Documents/Arbeit/netRob/HedgehogIDE (another copy)/src/components/ide/ReadOnlyBlockly/ReadOnlyBlockly.js";






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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzLzYuanMiLCJzb3VyY2VzIjpbIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvbmV0Um9iL0hlZGdlaG9nSURFIChhbm90aGVyIGNvcHkpL3NyYy9jb21wb25lbnRzL2lkZS9SZWFkT25seUJsb2NrbHkvUmVhZE9ubHlCbG9ja2x5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcblxuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vbG9jYWxlJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vdHJhbnNsYXRpb25zJztcblxuaW1wb3J0IEJsb2NrbHksIHsgTE9DQUxFUyB9IGZyb20gJy4uL1Zpc3VhbEVkaXRvci9ibG9ja2x5X2NvbmZpZyc7XG5cbmltcG9ydCB7IHR5cGUgUHJvcHMgfSBmcm9tICcuJztcblxuZnVuY3Rpb24gUmVhZE9ubHlCbG9ja2x5KHsgY2hpbGRyZW4sIHdpZHRoLCBoZWlnaHQgfTogUHJvcHMpIHtcbiAgY29uc3QgW3dvcmtzcGFjZURpdiwgc2V0V29ya3NwYWNlRGl2XSA9IFJlYWN0LnVzZVN0YXRlPFJlYWN0LkVsZW1lbnRSZWY8J2Rpdic+IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHsgcHJlZmVycmVkTG9jYWxlcyB9ID0gdXNlTG9jYWxlKCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod29ya3NwYWNlRGl2ID09PSBudWxsKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgeyBydGwsIG1zZyB9ID0gZ2V0VHJhbnNsYXRpb24ocHJlZmVycmVkTG9jYWxlcywgTE9DQUxFUykgPz8gTE9DQUxFUy5lbjtcblxuICAgIEJsb2NrbHkuc2V0TG9jYWxlKG1zZyk7XG4gICAgY29uc3Qgd29ya3NwYWNlID0gQmxvY2tseS5pbmplY3Qod29ya3NwYWNlRGl2LCB7XG4gICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgc3BhY2luZzogMjAsXG4gICAgICAgIGxlbmd0aDogMyxcbiAgICAgICAgY29sb3VyOiAnI2NjYycsXG4gICAgICAgIHNuYXA6IHRydWUsXG4gICAgICB9LFxuICAgICAgcnRsLFxuICAgICAgdHJhc2hjYW46IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgeG1sID0gUmVhY3RET00ucmVuZGVyVG9TdGF0aWNNYXJrdXAoXG4gICAgICA8eG1sIHhtbG5zPVwiaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYmxvY2tseS94bWxcIj57Y2hpbGRyZW59PC94bWw+LFxuICAgICk7XG4gICAgY29uc3QgZG9tID0gQmxvY2tseS5YbWwudGV4dFRvRG9tKHhtbCk7XG4gICAgQmxvY2tseS5YbWwuY2xlYXJXb3Jrc3BhY2VBbmRMb2FkRnJvbVhtbChkb20sIHdvcmtzcGFjZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd29ya3NwYWNlLmRpc3Bvc2UoKTtcbiAgICB9O1xuICB9LCBbd29ya3NwYWNlRGl2LCBjaGlsZHJlbiwgcHJlZmVycmVkTG9jYWxlc10pO1xuXG4gIHJldHVybiA8ZGl2IHJlZj17c2V0V29ya3NwYWNlRGl2fSBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0IH19IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFkT25seUJsb2NrbHk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFUQTtBQVlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=