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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/ReadOnlyBlockly/ReadOnlyBlockly.js";






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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzLzYuanMiLCJzb3VyY2VzIjpbIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvbXBvbmVudHMvaWRlL1JlYWRPbmx5QmxvY2tseS9SZWFkT25seUJsb2NrbHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi9sb2NhbGUnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi90cmFuc2xhdGlvbnMnO1xuXG5pbXBvcnQgQmxvY2tseSwgeyBMT0NBTEVTIH0gZnJvbSAnLi4vVmlzdWFsRWRpdG9yL2Jsb2NrbHlfY29uZmlnJztcblxuaW1wb3J0IHsgdHlwZSBQcm9wcyB9IGZyb20gJy4nO1xuXG5mdW5jdGlvbiBSZWFkT25seUJsb2NrbHkoeyBjaGlsZHJlbiwgd2lkdGgsIGhlaWdodCB9OiBQcm9wcykge1xuICBjb25zdCBbd29ya3NwYWNlRGl2LCBzZXRXb3Jrc3BhY2VEaXZdID0gUmVhY3QudXNlU3RhdGU8UmVhY3QuRWxlbWVudFJlZjwnZGl2Jz4gfCBudWxsPihudWxsKTtcbiAgY29uc3QgeyBwcmVmZXJyZWRMb2NhbGVzIH0gPSB1c2VMb2NhbGUoKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh3b3Jrc3BhY2VEaXYgPT09IG51bGwpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCB7IHJ0bCwgbXNnIH0gPSBnZXRUcmFuc2xhdGlvbihwcmVmZXJyZWRMb2NhbGVzLCBMT0NBTEVTKSA/PyBMT0NBTEVTLmVuO1xuXG4gICAgQmxvY2tseS5zZXRMb2NhbGUobXNnKTtcbiAgICBjb25zdCB3b3Jrc3BhY2UgPSBCbG9ja2x5LmluamVjdCh3b3Jrc3BhY2VEaXYsIHtcbiAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgZ3JpZDoge1xuICAgICAgICBzcGFjaW5nOiAyMCxcbiAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICBjb2xvdXI6ICcjY2NjJyxcbiAgICAgICAgc25hcDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBydGwsXG4gICAgICB0cmFzaGNhbjogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBjb25zdCB4bWwgPSBSZWFjdERPTS5yZW5kZXJUb1N0YXRpY01hcmt1cChcbiAgICAgIDx4bWwgeG1sbnM9XCJodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9ibG9ja2x5L3htbFwiPntjaGlsZHJlbn08L3htbD4sXG4gICAgKTtcbiAgICBjb25zdCBkb20gPSBCbG9ja2x5LlhtbC50ZXh0VG9Eb20oeG1sKTtcbiAgICBCbG9ja2x5LlhtbC5jbGVhcldvcmtzcGFjZUFuZExvYWRGcm9tWG1sKGRvbSwgd29ya3NwYWNlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3b3Jrc3BhY2UuZGlzcG9zZSgpO1xuICAgIH07XG4gIH0sIFt3b3Jrc3BhY2VEaXYsIGNoaWxkcmVuLCBwcmVmZXJyZWRMb2NhbGVzXSk7XG5cbiAgcmV0dXJuIDxkaXYgcmVmPXtzZXRXb3Jrc3BhY2VEaXZ9IHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQgfX0gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWRPbmx5QmxvY2tseTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==