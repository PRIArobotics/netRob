require("source-map-support").install();
exports.ids = ["help"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/help/Help.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.Help-root-3_QhB {\n  padding: 40px 20px;\n}\n\n.Help-gridImg-3ymCs {\n  text-align: center\n}\n\n.Help-gridImg-3ymCs img {\n    width: 100%;\n  }\n\n.Help-gridImg-3ymCs.Help-gridImgSm-35gDE img {\n    max-width: 220px;\n  }\n\n.Help-gridImg-3ymCs.Help-gridImgLg-2ZE8Z img {\n    max-width: 440px;\n  }\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/routes/help/Help.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,gCAAgC;EAChC,+BAA+B;;EAE/B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,kBAAkB;CACnB;;AAED;IACI,YAAY;GACb;;AAEH;IACI,iBAAiB;GAClB;;AAEH;IACI,iBAAiB;GAClB","file":"Help.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.root {\n  padding: 40px 20px;\n}\n\n.gridImg {\n  text-align: center\n}\n\n.gridImg img {\n    width: 100%;\n  }\n\n.gridImg.gridImgSm img {\n    max-width: 220px;\n  }\n\n.gridImg.gridImgLg img {\n    max-width: 440px;\n  }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Help-root-3_QhB",
	"gridImg": "Help-gridImg-3ymCs",
	"gridImgSm": "Help-gridImgSm-35gDE",
	"gridImgLg": "Help-gridImgLg-2ZE8Z"
};

/***/ }),

/***/ "./src/components/ide/ReadOnlyBlockly/Wrapper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_NoSSR__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/misc/NoSSR.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/ide/ReadOnlyBlockly/Wrapper.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function showReadOnlyBlockly(props) {
  return async () => {
    const {
      default: ReadOnlyBlockly
    } = await __webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, "./src/components/ide/ReadOnlyBlockly/ReadOnlyBlockly.js"));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ReadOnlyBlockly, _extends({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 12
      }
    }));
  };
}

function Wrapper(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_NoSSR__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 10
    }
  }, showReadOnlyBlockly(props));
}

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

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

/***/ "./src/routes/help/Help.scss":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/help/Help.scss");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if ( true && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/help/Help.scss", function() {
        css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/help/Help.scss");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/routes/help/de/Help.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/withStyles");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_misc_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/misc/Link.js");
/* harmony import */ var _components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/ide/ReadOnlyBlockly/Wrapper.js");
/* harmony import */ var _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/ide/VisualEditor/blockly_config.js");
/* harmony import */ var _Help_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/routes/help/Help.scss");
/* harmony import */ var _Help_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Help_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _en_1_create_project_1_open_ide_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/routes/help/en/1_create_project/1_open_ide.png");
/* harmony import */ var _en_1_create_project_1_open_ide_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_en_1_create_project_1_open_ide_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _en_1_create_project_2_click_plus_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/routes/help/en/1_create_project/2_click_plus.png");
/* harmony import */ var _en_1_create_project_2_click_plus_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_en_1_create_project_2_click_plus_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _en_1_create_project_3_create_project_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/routes/help/en/1_create_project/3_create_project.png");
/* harmony import */ var _en_1_create_project_3_create_project_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_en_1_create_project_3_create_project_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _en_1_create_project_4_open_project_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/routes/help/en/1_create_project/4_open_project.png");
/* harmony import */ var _en_1_create_project_4_open_project_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_en_1_create_project_4_open_project_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _en_2_create_file_1_context_menu_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/routes/help/en/2_create_file/1_context_menu.png");
/* harmony import */ var _en_2_create_file_1_context_menu_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_en_2_create_file_1_context_menu_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _en_2_create_file_2_create_file_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/routes/help/en/2_create_file/2_create_file.png");
/* harmony import */ var _en_2_create_file_2_create_file_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_en_2_create_file_2_create_file_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _en_2_create_file_3_open_file_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/routes/help/en/2_create_file/3_open_file.png");
/* harmony import */ var _en_2_create_file_3_open_file_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_en_2_create_file_3_open_file_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _en_3_open_simulator_1_drag_tab_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/routes/help/en/3_open_simulator/1_drag_tab.png");
/* harmony import */ var _en_3_open_simulator_1_drag_tab_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_en_3_open_simulator_1_drag_tab_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _en_3_open_simulator_2_result_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/routes/help/en/3_open_simulator/2_result.png");
/* harmony import */ var _en_3_open_simulator_2_result_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_en_3_open_simulator_2_result_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _en_4_import_export_1_export_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/routes/help/en/4_import_export/1_export.png");
/* harmony import */ var _en_4_import_export_1_export_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_en_4_import_export_1_export_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _en_4_import_export_2_import_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/routes/help/en/4_import_export/2_import.png");
/* harmony import */ var _en_4_import_export_2_import_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_en_4_import_export_2_import_png__WEBPACK_IMPORTED_MODULE_20__);
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/routes/help/de/Help.js";






















function Help() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {
    maxWidth: "md",
    className: _Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h1",
    variant: "h3",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Erste Schritte"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "Die Hedgehog IDE erm\xF6glicht es dir, einfach eigene Programme zu schreiben und auszuf\xFChren, ohne vorher zus\xE4tzliche Software installieren oder ein Konto erstellen zu m\xFCssen. Wir legen gro\xDFen Wert auf Privatsph\xE4re und Datenschutz, deshalb fragen wir dich nach keinen Daten die wir nicht unbedingt ben\xF6tigen. Im Gro\xDFen und Ganzen hei\xDFt das, au\xDFer deinem Code musst du uns keine Daten geben."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2___default.a, {
    severity: "info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Die Hedgehog IDE befindet sich noch im Anfangsstadium. Manche Funktionen sind vielleicht noch nicht ganz ausgereift oder fehlen noch. Zuk\xFCnftige Features, wie etwa eigenen Code mit anderen zu teilen, k\xF6nnen zus\xE4tzliche Daten von dir ben\xF6tigen. Solche Features werden jedenfalls opt-in sein, das hei\xDFt du entscheidest ob du diese nutzt und uns die notwendigen Daten gibst."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h2",
    variant: "h4",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: "project",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "Ein Projekt anlegen")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, "Ein Softwareprojekt enth\xE4lt Dateien, die zusammen ein Programm ergeben. Ein Projekt anzulegen ist deshalb der erste Schritt. Klicke in deiner", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_misc_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    to: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, "Projekt\xFCbersicht"), ", auf den \"+\"-Button und such dir einen Namen aus. Klicke danach auf das Projekt um es zu \xF6ffnen."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    spacing: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 6,
    md: 3,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgSm}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _en_1_create_project_1_open_ide_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "die IDE \xF6ffne",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 6,
    md: 3,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgSm}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _en_1_create_project_2_click_plus_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "auf den \"+\"-Button klicken",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 6,
    md: 3,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgSm}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _en_1_create_project_3_create_project_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "Projekt benennen und anlegen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 6,
    md: 3,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgSm}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _en_1_create_project_4_open_project_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "Projekt \xF6ffnen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, "Nachdem du das Projekt ge\xF6ffnet hast, mach einen Rechtsklick auf den Projektordner, um darin eine Datei anzulegen. In diesem Beispiel w\xE4hlen wir \"Neue Blockly Datei\" \u2013 mit Blockly kannst du dein Programm grafisch erstellen. Nachdem du die Datei angelegt hast, wird diese automatisch ge\xF6ffnet, du solltest also den leeren Blockly-Arbeitsbereich sehen."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    spacing: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 6,
    sm: 4,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgSm}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _en_2_create_file_1_context_menu_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "Kontextmenu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 6,
    sm: 4,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgSm}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _en_2_create_file_2_create_file_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: "Datei anlegen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 6,
    sm: 4,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgSm}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _en_2_create_file_3_open_file_png__WEBPACK_IMPORTED_MODULE_16___default.a,
    alt: "Datei \xF6ffnen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 15
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h2",
    variant: "h4",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: "simulation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, "Einen simulierten Roboter mit Blockly steuern")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, "Bevor du beginnst Bl\xF6cke zu deinem Programm hinzuzuf\xFCgen, machen wir schnell einen Blick auf den Simulator. Klicke \xFCber dem Projektordner auf das Symbol mit den X,Y,Z Achsen um ihn zu \xF6ffnen, dann ziehe den neu ge\xF6ffneten Tab nach unten, damit Blockly und der Simulator gleichzeitig sichtbar sind."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    spacing: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    sm: 12,
    md: 6,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgLg}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _en_3_open_simulator_1_drag_tab_png__WEBPACK_IMPORTED_MODULE_17___default.a,
    alt: "den Simulator verschieben",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    sm: 12,
    md: 6,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgLg}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _en_3_open_simulator_2_result_png__WEBPACK_IMPORTED_MODULE_18___default.a,
    alt: "Blockly und Simulator nebeneinander",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, "Der Simulator (und \xFCbrigens auch die Konsole, die mit dem zweiten Button \xFCber dem Projektordner ge\xF6ffnet wird) \xF6ffnen sich automatisch, wenn ein Befehl an den Roboter gegeben (oder eben Text ausgegeben) werden soll. Es ist aber trotzdem praktischer, diese Tabs vorher selbst zu platzieren.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h2",
    variant: "h4",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: "blockly",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, "Die Blockly-Befehle")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h3",
    variant: "h5",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: "blockly-drive",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, "Fahren")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, "Diese Kategorie enth\xE4lt Befehle, um immer zwei Motoren gleichzeitig zu steuern. Dadurch k\xF6nnen beide R\xE4der des Roboters zeitgleich gestartet oder angehalten werden. Die Geschwindigkeit der Motoren wird als Zahl zwischen -1000 und +1000 angegeben. Der Simulierte Roboter hat sein linkes Rad an Motor 0, sein rechtes an Motor 1."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "60px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_MOVE2_UNLIMITED.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "60px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_MOVE2.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, "Diese Befehle starten die Motoren. Bei der zweiten Variante wird der Roboter nach einer gewissen Zeit wieder abgebremst."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "50px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_MOTOR_OFF2.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "50px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_BRAKE2.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, "Diese Befehle stoppen die Motoren. Momentan machen beide Befehle in der Simulation das gleiche, aber die Idee ist, dass der Roboter bei Ausschalten weiter ausrollt, beim Bremsen schnell stehenbleibt.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h3",
    variant: "h5",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: "blockly-motors",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, "Motoren")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, "In dieser Kategorie sind Befehle, um Motoren einzeln anzusteuern. Die Befehle funktionieren sonst genau so wie die Fahrbefehle."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "60px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_MOVE_UNLIMITED.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "60px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_MOVE.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }, "Diese Befehle starten einen Motor. Bei der zweiten Variante wird der Motor nach einer gewissen Zeit wieder abgebremst."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "50px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_MOTOR_OFF.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "50px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_BRAKE.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 11
    }
  }, "Diese Befehle stoppen einen Motor. Momentan machen beide Befehle in der Simulation das gleiche, aber die Idee ist, dass der Motor bei Ausschalten weiter ausrollt, beim Bremsen schnell stehenbleibt.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h3",
    variant: "h5",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: "blockly-servos",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }
  }, "Servos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 11
    }
  }, "Servos k\xF6nnen auf Positionen eingestellt werden, die zwischen 0 und 1000 bzw. zwischen 0\xB0 und 180\xB0 angegeben werden. Der simulierte Roboter hat momentan noch keine Servos."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "60px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_SERVO.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 11
    }
  }, "Dieser Befehl stellt den Servo auf eine Position ein. Auch bei Widerstand (z.B. einem Hindernis) versucht der Servo den eingestellten Winkel zu halten."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "50px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_SERVO_OFF.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 11
    }
  }, "Dieser Befehl schaltet den Servo aus. Der Servo wird seine Position bei Widerstand nicht halten.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h3",
    variant: "h5",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: "blockly-sensors",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }
  }, "Sensoren")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 11
    }
  }, "Mit Sensoren kann der Roboter seine Umgebung wahrnehmen. Sensorwerte liegen zwischen 0 und 4095, die genauen Wertebereiche h\xE4ngen aber von der Art des Sensors ab."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 11
    }
  }, "Vorne hat der simulierte Roboter acht Sensoren:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 15
    }
  }, "Vier Liniensensoren, die schwarze Linien auf dem Boden erkennen k\xF6nnen. Das sind von links nach rechts die Sensoren 0 bis 3. Die Sensoren werden orange dargestellt, wenn eine Linie erkannt wird.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 17
    }
  }, "Werte:"), " Wenn eine (dunkle) Linie unter dem Sensor erkannt wird, ist der Sensorwert hoch, sonst (auf heller Oberfl\xE4che) niedrig."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 15
    }
  }, "Drei Abstandssensoren, die seitlich und direkt nach vorne gerichtet sind und mit denen Hindernissen ohne Ber\xFChrung erkannt werden k\xF6nnen. Das sind von links nach rechts die Sensoren 4 bis 6. Die Strahlen vor dem Roboter stellen die Richtung und Reichweite der Abstandssensoren dar.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 17
    }
  }, "Werte:"), " Wenn ein Hindernis n\xE4her kommt steigt der Wert zuerst an, wenn es den Roboter fast ber\xFChrt sinkt er wieder. Dieses Verhalten bildet einen h\xE4ufig verwendeten Abstandssensor aus der Hobby-Robotik nach."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 15
    }
  }, "Ein Sto\xDFsensor, der fast so breit ist wie der Roboter selbst, befindet sich vorne am Roboter. Dieser Sensor hat die Nummer 8. Er wird orange dargestellt, wenn eine Kollision erkannt wird.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 17
    }
  }, "Werte:"), " Der Wert ist niedrig, wenn eine Kollision erkannt wird. Dieses Verhalten bildet die elektronische \"pull-up\" Schaltung f\xFCr Tastsensoren nach."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 11
    }
  }, "Sensoren gibt es in zwei Arten, analog und digital:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 17
    }
  }, "Analoge"), " Sensoren k\xF6nnen viele verschiedene Werte Annehmen; der Abstandssensor ist daf\xFCr ein gutes Beispiel. Um einen Analogsensor zu benutzen, musst du mit den Werten zwischen 0 und 4095 arbeiten."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 17
    }
  }, "Digitale"), " Sensoren haben nur zwei m\xF6gliche Zust\xE4nde, zum Beispiel \"Zusammensto\xDF\" und \"kein Zusammensto\xDF\" oder \"Linie erkannt\" und \"keine Linie erkannt\". Bei diesen Sensoren kann man auch den entsprechenden Digitalwert abfragen:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 19
    }
  }, "Analogwerte 0 bis 2047: Digitalwert ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 57
    }
  }, "false"), ", \"falsch\""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 19
    }
  }, "Analogwerte 2048 bis 4095: Digitalwert ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 60
    }
  }, "true"), ", \"wahr\""))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "50px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_READ_DIGITAL.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 11
    }
  }, "Liest den digitalen Wert eines Sensors aus."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "50px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_READ_ANALOG.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "60px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_READ_ANALOG.toolboxBlocks.comparison())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 11
    }
  }, "Liest den analogen Wert eines Sensors aus. Das untere Beispiel vergleicht den Wert mit einem Grenzwert, um daraus einen (digitalen) Wahrheitswert (wahr/falsch) zu machen. Der Grenzwert 2048 verh\xE4lt sich genau gleich wie der obere Block zum auslesen des Digitalwerts. Mit dem Vergleichsblock kann der Grenzwert aber angepasst werden.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h3",
    variant: "h5",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: "blockly-misc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 13
    }
  }, "Verschiedenes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "60px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_SLEEP.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 11
    }
  }, "Dieser Befehl unterbricht das Programm f\xFCr eine gewisse Zeit. Wenn w\xE4hrenddessen ein Motor eingeschalten ist, wird sich dieser weiterdrehen."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "60px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["miscBlocks"].PRINT_BLOCK.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 11
    }
  }, "Dieser Befehl gibt einen Wert auf der Konsole aus. Der Wert kann ein Text sein, oder eine Zahl oder ein digitaler Wahrheitswert. Oft hilft es, sich den Wert eines Sensors anzeigen zu lassen, wenn ein Programm nicht tut was man will."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 9
    }
  }, "Probieren wir jetzt ein simples Programm:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "160px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
    type: "hedgehog_move2_unlimited",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
    name: "PORT1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 15
    }
  }, "0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
    name: "PORT2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 15
    }
  }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
    name: "SPEED1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("shadow", {
    type: "math_number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
    name: "NUM",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 19
    }
  }, "1000"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
    name: "SPEED2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("shadow", {
    type: "math_number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
    name: "NUM",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 19
    }
  }, "1000"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("next", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
    type: "controls_whileUntil",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
    name: "MODE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 19
    }
  }, "WHILE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
    name: "BOOL",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
    type: "hedgehog_read_digital",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
    name: "PORT",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 23
    }
  }, "8"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("statement", {
    name: "DO",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
    type: "hedgehog_sleep",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
    name: "TIME",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("shadow", {
    type: "math_number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
    name: "NUM",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 27
    }
  }, "0.01"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("next", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
    type: "hedgehog_brake2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
    name: "PORT1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 23
    }
  }, "0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
    name: "PORT2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 23
    }
  }, "1")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 9
    }
  }, "Erstelle dieses Programm in deinem Projekt, dann klicke auf den gr\xFCnen Pfeil. Du wirst sehen, wie der Roboter bis zur n\xE4chsten Wand f\xE4hrt und dort nach der Kollision stehenbleibt. Schritt f\xFCr Schritt ist folgendes passiert:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 13
    }
  }, "Der erste Block l\xE4sst den Roboter vorw\xE4rts losfahren."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 13
    }
  }, "Der n\xE4chste Block ist eine Schleife, die aufgef\xFChrt wird solange der Sensor 8 einen hohen Digitalwert hat. Sensor 8 ist ein Sto\xDFsensor, und ein hoher Wert bedeutet keine Kollision. Anders ausgedr\xFCckt, die Schleife wird wiederholt, solange der Sensor keinen Zusammensto\xDF erkennt."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 13
    }
  }, "In der Schleife wird das Programm kurz unterbrochen. Auch wenn das Programm eine Pause macht bewegen sich die Motoren weiter, das hei\xDFt der Roboter f\xE4hrt bis der Sensor die Schleife zum Abbruch bringt."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 13
    }
  }, "Nach der Schleife, also nach einer Kollision, bleibt der Roboter stehen. Da das der letzte Befehl ist endet das Programm danach.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h2",
    variant: "h4",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: "export-import",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 11
    }
  }, "Dateien exportieren & importieren")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 9
    }
  }, "Willst du eine deiner Dateien herunterzuladen, z.B. um diese mit anderen zu teilen, mach einen Rechtsklick auf diese Datei und w\xE4hle \"Herunterladen\". \xC4hnlich kannst du Dateien in die IDE importieren, indem du auf einen Ordner rechtsklickst umd \"Hochladen\" w\xE4hlst. Achtung, momentan werden dadurch bestehende Dateien ohne Warnung \xFCberschrieben!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 9
    }
  }, "Trotz der Namen dieser Befehle werden deine Dateien nicht auf unseren Servern gespeichert, sondern lokal in deinem Browser wo nur du Zugriff darauf hast. In der Zukunft wird es auch die M\xF6glichkeit geben, Projekte auf unseren Servern zu speichern, du wirst aber immer gefragt werden, ob du deine Daten mit uns teilen willst."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2___default.a, {
    severity: "info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 11
    }
  }, "Ganze Ordner hoch- oder herunterzuladen ist leider noch nicht m\xF6glich.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    spacing: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    sm: 12,
    md: 6,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgSm}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _en_4_import_export_1_export_png__WEBPACK_IMPORTED_MODULE_19___default.a,
    alt: "eine Datei herunterladen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    sm: 12,
    md: 6,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgSm}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _en_4_import_export_2_import_png__WEBPACK_IMPORTED_MODULE_20___default.a,
    alt: "eine Datei hochladen",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 15
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a)(Help));

/***/ }),

/***/ "./src/routes/help/en/1_create_project/1_open_ide.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/routes/help/en/1_create_project/1_open_ide.png?ffda95c8";

/***/ }),

/***/ "./src/routes/help/en/1_create_project/2_click_plus.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/routes/help/en/1_create_project/2_click_plus.png?4acfa21c";

/***/ }),

/***/ "./src/routes/help/en/1_create_project/3_create_project.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/routes/help/en/1_create_project/3_create_project.png?294b4e7a";

/***/ }),

/***/ "./src/routes/help/en/1_create_project/4_open_project.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/routes/help/en/1_create_project/4_open_project.png?6dad80fe";

/***/ }),

/***/ "./src/routes/help/en/2_create_file/1_context_menu.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/routes/help/en/2_create_file/1_context_menu.png?710f3702";

/***/ }),

/***/ "./src/routes/help/en/2_create_file/2_create_file.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/routes/help/en/2_create_file/2_create_file.png?f3544150";

/***/ }),

/***/ "./src/routes/help/en/2_create_file/3_open_file.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/routes/help/en/2_create_file/3_open_file.png?af024f2a";

/***/ }),

/***/ "./src/routes/help/en/3_open_simulator/1_drag_tab.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/routes/help/en/3_open_simulator/1_drag_tab.png?e45f6e95";

/***/ }),

/***/ "./src/routes/help/en/3_open_simulator/2_result.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/routes/help/en/3_open_simulator/2_result.png?0d150aae";

/***/ }),

/***/ "./src/routes/help/en/4_import_export/1_export.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/routes/help/en/4_import_export/1_export.png?ffe84352";

/***/ }),

/***/ "./src/routes/help/en/4_import_export/2_import.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/routes/help/en/4_import_export/2_import.png?617bda2c";

/***/ }),

/***/ "./src/routes/help/en/Help.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/withStyles");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_misc_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/misc/Link.js");
/* harmony import */ var _components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/ide/ReadOnlyBlockly/Wrapper.js");
/* harmony import */ var _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/ide/VisualEditor/blockly_config.js");
/* harmony import */ var _Help_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/routes/help/Help.scss");
/* harmony import */ var _Help_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Help_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _1_create_project_1_open_ide_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/routes/help/en/1_create_project/1_open_ide.png");
/* harmony import */ var _1_create_project_1_open_ide_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_1_create_project_1_open_ide_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _1_create_project_2_click_plus_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/routes/help/en/1_create_project/2_click_plus.png");
/* harmony import */ var _1_create_project_2_click_plus_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_1_create_project_2_click_plus_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _1_create_project_3_create_project_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/routes/help/en/1_create_project/3_create_project.png");
/* harmony import */ var _1_create_project_3_create_project_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_1_create_project_3_create_project_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _1_create_project_4_open_project_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/routes/help/en/1_create_project/4_open_project.png");
/* harmony import */ var _1_create_project_4_open_project_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_1_create_project_4_open_project_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _2_create_file_1_context_menu_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/routes/help/en/2_create_file/1_context_menu.png");
/* harmony import */ var _2_create_file_1_context_menu_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_2_create_file_1_context_menu_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _2_create_file_2_create_file_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/routes/help/en/2_create_file/2_create_file.png");
/* harmony import */ var _2_create_file_2_create_file_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_2_create_file_2_create_file_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _2_create_file_3_open_file_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/routes/help/en/2_create_file/3_open_file.png");
/* harmony import */ var _2_create_file_3_open_file_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_2_create_file_3_open_file_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _3_open_simulator_1_drag_tab_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/routes/help/en/3_open_simulator/1_drag_tab.png");
/* harmony import */ var _3_open_simulator_1_drag_tab_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_3_open_simulator_1_drag_tab_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _3_open_simulator_2_result_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/routes/help/en/3_open_simulator/2_result.png");
/* harmony import */ var _3_open_simulator_2_result_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_3_open_simulator_2_result_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _4_import_export_1_export_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/routes/help/en/4_import_export/1_export.png");
/* harmony import */ var _4_import_export_1_export_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_4_import_export_1_export_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _4_import_export_2_import_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/routes/help/en/4_import_export/2_import.png");
/* harmony import */ var _4_import_export_2_import_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_4_import_export_2_import_png__WEBPACK_IMPORTED_MODULE_20__);
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/routes/help/en/Help.js";






















function Help() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {
    maxWidth: "md",
    className: _Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h1",
    variant: "h3",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Getting Started"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "The Hedgehog IDE allows you to create and run your own programs easily, without installing extra software or creating accounts first. We respect your privacy and your data, so we don't require any of your data unless absolutely needed - that is, basically, the code you write and nothing else."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2___default.a, {
    severity: "info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "The Hedgehog IDE is still at the beginning. Things may be rough around the edges, and not all features are there yet. Future features, such as sharing code with others, will require you to share some more data with us. Those features will be strictly optional and opt-in, though."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h2",
    variant: "h4",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: "project",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "Creating a project")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "A software project contains files that work together to create a program. Creating one is the first thing you will have to do to get started. In your", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_misc_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    to: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, "project list"), ", click on the \"+\" icon and choose a name. After you created the project, click on it to open it."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    spacing: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 6,
    md: 3,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgSm}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _1_create_project_1_open_ide_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "open IDE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 6,
    md: 3,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgSm}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _1_create_project_2_click_plus_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "click \"+\" icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 6,
    md: 3,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgSm}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _1_create_project_3_create_project_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "name and create project",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 6,
    md: 3,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgSm}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _1_create_project_4_open_project_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "open project",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, "After opening the project, right click the project root to create a file in it. In this example, let's choose \"New Blockly File\" \u2013 Blockly allows the visual creation of programs. After creating the file, it is opened automatically and you should see an empty Blockly workspace where you can create your program."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    spacing: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 6,
    sm: 4,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgSm}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _2_create_file_1_context_menu_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "context menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 6,
    sm: 4,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgSm}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _2_create_file_2_create_file_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: "create file",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 6,
    sm: 4,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgSm}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _2_create_file_3_open_file_png__WEBPACK_IMPORTED_MODULE_16___default.a,
    alt: "open file",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h2",
    variant: "h4",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: "simulation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, "Controlling a simulated robot with Blockly")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, "Before you start adding blocks to your program, let's look at the simulator. Click on the X,Y,Z axis icon above the project tree to open it in a new tab, then drag that tab to the bottom to see Blockly and the simulator at the same time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    spacing: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    sm: 12,
    md: 6,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgLg}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _3_open_simulator_1_drag_tab_png__WEBPACK_IMPORTED_MODULE_17___default.a,
    alt: "moving the simulator",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    sm: 12,
    md: 6,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgLg}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _3_open_simulator_2_result_png__WEBPACK_IMPORTED_MODULE_18___default.a,
    alt: "Blockly and simulator side by side",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, "The Simulator (and the console, which is opened with the second button above the project tree) opens automatically when a program gives commands to the robot (or outputs text, respectively) if it is not already open. Nonetheless it is advisable to arrange these tabs in advance.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h2",
    variant: "h4",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: "blockly",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, "Blockly Commands")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h3",
    variant: "h5",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: "blockly-drive",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, "Drive")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, "Commands in this category let you drive the robot by starting or stopping two motors at the same time. Motors can use speeds between -1000 and +1000. The simulated robot's left wheel is motor 0, the right wheel motor 1."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "60px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_MOVE2_UNLIMITED.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "60px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_MOVE2.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, "These commands start the motors. The second variant also brakes the motors after the specified time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "50px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_MOTOR_OFF2.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "50px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_BRAKE2.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, "These commands stop the motors. Currently both commands do the same thing in the simulation. The idea is that turning off lets the wheels roll out, while braking stops the robot quickly.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h3",
    variant: "h5",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: "blockly-motors",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, "Motors")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }, "Commands in this category let you control the robot's motors individually. Apart from that, the commands work like those in the Drive category."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "60px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_MOVE_UNLIMITED.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "60px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_MOVE.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }, "These commands start a motor. The second variant also brakes the motor after the specified time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "50px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_MOTOR_OFF.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "50px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_BRAKE.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 11
    }
  }, "These commands stop the motor. Currently both commands do the same thing in the simulation. The idea is that turning off lets the wheel roll out, while braking stops the motor quickly.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h3",
    variant: "h5",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: "blockly-servos",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }
  }, "Servos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 11
    }
  }, "Servos hold a position that is set for them. Servo positions are between 0 and 1000, corresponding to 0\xB0 and 180\xB0. The simulated robot does not yet have any servos, though. Stay tuned!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "60px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_SERVO.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 11
    }
  }, "This command sets the servo to a certain position. Even if there's resistance (e.g. an obstacle) the servo will try to hold its position."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "50px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_SERVO_OFF.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 11
    }
  }, "This command turns the servo off. The servo will not hold its position if there's resistance.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h3",
    variant: "h5",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: "blockly-sensors",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }
  }, "Sensoren")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  }, "Sensors let the robot observe the simulated environment. Sensor values are between 0 and 4095, the exact value ranges depend on the type of sensor though."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 11
    }
  }, "The simulated robot has eight sensors at its front:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 15
    }
  }, "Four line sensors that can detect black lines on the ground; these are sensors 0 to 3, from left to right. These sensors change color to orange when a line is detected.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  }, "Values:"), " The sensor value is high when a (dark) line is detected, otherwise (on light surfaces) it is low."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 15
    }
  }, "Three distance sensors looking forward and slightly to the sides can detect obstacles without touching them; these are sensors 4 to 6, from left to right. The rays coming out of the robot's front indicate the direction and range of these sensors.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 17
    }
  }, "Values:"), " The sensor value increases when getting closer to an obstacle, then decreases again when the obstacle almost touches the robot. This behavior models a distance sensor very popular in hobby robotics."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 15
    }
  }, "One bump sensor that is almost as wide as the robot front; this is sensor 8. This sensor changes color to orange when a line is detected.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 17
    }
  }, "Values:"), " The sensor value is low when a collision is detected. This behavior models a \"pull-up\" circuit that is often used for touch sensors."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 11
    }
  }, "Sensors come in two varieties, analog and digital:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 17
    }
  }, "Analog"), " sensors can take on many different values; a good example is the distance sensor. To use an analog sensor, you have to work with the numeric values between 0 and 4095."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 17
    }
  }, "Digital"), " sensors only have two possible states, e.g. \"collision\" and \"no collision\" or \"line\" or \"no line\". For these sensors, you can simplify your work by using digital values:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 19
    }
  }, "Analog values 0 bis 2047: Digital value ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 61
    }
  }, "false")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 19
    }
  }, "Analog values 2048 bis 4095: Digital value ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 64
    }
  }, "true")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "50px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_READ_DIGITAL.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 11
    }
  }, "Reads the digital value of a sensor."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "50px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_READ_ANALOG.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "60px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_READ_ANALOG.toolboxBlocks.comparison())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 11
    }
  }, "Reads the analog value of a sensor. The second example compares the value to a threshold to convert it to a (digital) truth value (true/false). The threshold of 2048 leads to the same behavior as the block for reading a digital value, but using the comparison block lets you adjust the threshold.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h3",
    variant: "h5",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: "blockly-misc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 13
    }
  }, "Miscellaneous")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "60px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["hedgehogBlocks"].HEDGEHOG_SLEEP.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 11
    }
  }, "This block lets the program pause for the specified duration. If any motors are turned on, they will continue to move during that time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "60px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 13
    }
  }, _components_ide_VisualEditor_blockly_config__WEBPACK_IMPORTED_MODULE_8__["miscBlocks"].PRINT_BLOCK.toolboxBlocks.default())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 11
    }
  }, "This command displays a value on the console. The value may be a text, a number or a digital truth value. It's often useful to display sensor values when a program isn't doing what it should."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 9
    }
  }, "Now let's try out a simple program:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ide_ReadOnlyBlockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    width: "100%",
    height: "160px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
    type: "hedgehog_move2_unlimited",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
    name: "PORT1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 15
    }
  }, "0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
    name: "PORT2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 15
    }
  }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
    name: "SPEED1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("shadow", {
    type: "math_number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
    name: "NUM",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 19
    }
  }, "1000"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
    name: "SPEED2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("shadow", {
    type: "math_number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
    name: "NUM",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 19
    }
  }, "1000"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("next", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
    type: "controls_whileUntil",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
    name: "MODE",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 19
    }
  }, "WHILE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
    name: "BOOL",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
    type: "hedgehog_read_digital",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
    name: "PORT",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 23
    }
  }, "8"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("statement", {
    name: "DO",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
    type: "hedgehog_sleep",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
    name: "TIME",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("shadow", {
    type: "math_number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
    name: "NUM",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 27
    }
  }, "0.01"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("next", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
    type: "hedgehog_brake2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
    name: "PORT1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 23
    }
  }, "0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
    name: "PORT2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 23
    }
  }, "1")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 9
    }
  }, "Create this program in your project, then click the green \"Play\" button; you will see the robot driving to the other side of the simulation and stopping at the wall. In detail, what happened is the following:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 13
    }
  }, "The first block let the robot move forward."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 13
    }
  }, "The next block is a loop, running while the sensor on port 8 has a high digital value. Sensor 8 is the bump sensor, and high values mean no collison. In other words, the loop repeats until a collision is detected."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 13
    }
  }, "Inside the loop, the program simply sleeps. Even though the program pauses, the motors are still moving. That means that the robot will continue moving as long as there was no collision."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 13
    }
  }, "After the loop, i.e. as soon as there was a collision, the robot is stopped. This is the last command, so the program is finished.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "h2",
    variant: "h4",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    id: "export-import",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 11
    }
  }, "Exporting & importing files")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 9
    }
  }, "To download one of your files so that you can, for example, share it with others, right click on that file and choose \"Download\". Likewise, to import a file into the Hedgehog IDE, right click on a folder and choose \"Upload\". Beware, currently the Hedgehog IDE replaces existing files without warning!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 9
    }
  }, "Despite the name of these operations, your files are stored locally in your browser, not on our servers. Future features may allow that, but you will always be asked if you want to share data with us."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2___default.a, {
    severity: "info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 11
    }
  }, "Up- and downloading whole folders is not possible at the moment, sorry!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    spacing: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    sm: 12,
    md: 6,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgSm}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _4_import_export_1_export_png__WEBPACK_IMPORTED_MODULE_19___default.a,
    alt: "download a file",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    sm: 12,
    md: 6,
    className: `${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImg} ${_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a.gridImgSm}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _4_import_export_2_import_png__WEBPACK_IMPORTED_MODULE_20___default.a,
    alt: "upload a file",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 15
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_Help_scss__WEBPACK_IMPORTED_MODULE_9___default.a)(Help));

/***/ }),

/***/ "./src/routes/help/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _en_Help__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/routes/help/en/Help.js");
/* harmony import */ var _de_Help__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/help/de/Help.js");
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/layout/Layout/Layout.js");
/* harmony import */ var _components_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/locale/index.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/routes/help/index.js";

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





const HELP_COMPONENTS = {
  en: _en_Help__WEBPACK_IMPORTED_MODULE_1__["default"],
  de: _de_Help__WEBPACK_IMPORTED_MODULE_2__["default"]
};

async function action() {
  return {
    title: 'Help',
    chunks: ['help'],
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_locale__WEBPACK_IMPORTED_MODULE_4__["LocaleSelector"], {
      components: HELP_COMPONENTS,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2hlbHAuanMiLCJzb3VyY2VzIjpbIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvcm91dGVzL2hlbHAvSGVscC5zY3NzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9jb21wb25lbnRzL2lkZS9SZWFkT25seUJsb2NrbHkvV3JhcHBlci5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29tcG9uZW50cy9taXNjL05vU1NSLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvaGVscC9IZWxwLnNjc3M/M2U4MCIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvcm91dGVzL2hlbHAvZGUvSGVscC5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvcm91dGVzL2hlbHAvZW4vMV9jcmVhdGVfcHJvamVjdC8xX29wZW5faWRlLnBuZyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvcm91dGVzL2hlbHAvZW4vMV9jcmVhdGVfcHJvamVjdC8yX2NsaWNrX3BsdXMucG5nIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9yb3V0ZXMvaGVscC9lbi8xX2NyZWF0ZV9wcm9qZWN0LzNfY3JlYXRlX3Byb2plY3QucG5nIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9yb3V0ZXMvaGVscC9lbi8xX2NyZWF0ZV9wcm9qZWN0LzRfb3Blbl9wcm9qZWN0LnBuZyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvcm91dGVzL2hlbHAvZW4vMl9jcmVhdGVfZmlsZS8xX2NvbnRleHRfbWVudS5wbmciLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3JvdXRlcy9oZWxwL2VuLzJfY3JlYXRlX2ZpbGUvMl9jcmVhdGVfZmlsZS5wbmciLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3JvdXRlcy9oZWxwL2VuLzJfY3JlYXRlX2ZpbGUvM19vcGVuX2ZpbGUucG5nIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9yb3V0ZXMvaGVscC9lbi8zX29wZW5fc2ltdWxhdG9yLzFfZHJhZ190YWIucG5nIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9yb3V0ZXMvaGVscC9lbi8zX29wZW5fc2ltdWxhdG9yLzJfcmVzdWx0LnBuZyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvcm91dGVzL2hlbHAvZW4vNF9pbXBvcnRfZXhwb3J0LzFfZXhwb3J0LnBuZyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvcm91dGVzL2hlbHAvZW4vNF9pbXBvcnRfZXhwb3J0LzJfaW1wb3J0LnBuZyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvcm91dGVzL2hlbHAvZW4vSGVscC5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvcm91dGVzL2hlbHAvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6ICdTZWdvZSBVSScsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTAwMHB4O1xcblxcbiAgLypcXG4gICAqIEFwcGxpY2F0aW9uIHNwZWNpZmljXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0taGVkZ2Vob2ctZ3JlZW4tbGlnaHQ6ICMzOGI0NDk7XFxuICAtLWhlZGdlaG9nLWdyZWVuLWRhcms6ICMwMDdjM2M7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4uSGVscC1yb290LTNfUWhCIHtcXG4gIHBhZGRpbmc6IDQwcHggMjBweDtcXG59XFxuXFxuLkhlbHAtZ3JpZEltZy0zeW1DcyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXJcXG59XFxuXFxuLkhlbHAtZ3JpZEltZy0zeW1DcyBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4uSGVscC1ncmlkSW1nLTN5bUNzLkhlbHAtZ3JpZEltZ1NtLTM1Z0RFIGltZyB7XFxuICAgIG1heC13aWR0aDogMjIwcHg7XFxuICB9XFxuXFxuLkhlbHAtZ3JpZEltZy0zeW1Dcy5IZWxwLWdyaWRJbWdMZy0yWkU4WiBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDQ0MHB4O1xcbiAgfVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL3JvdXRlcy9oZWxwL0hlbHAuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HOztBQUVIOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRTs7Z0ZBRThFOztFQUU5RSxrRUFBa0U7O0VBRWxFOztnRkFFOEU7O0VBRTlFLDRCQUE0Qjs7RUFFNUI7O2dGQUU4RTs7RUFFOUUsZ0NBQWdDO0VBQ2hDLCtCQUErQjs7RUFFL0I7O2dGQUU4RTs7RUFFOUUsdUJBQXVCLEVBQUUsZ0NBQWdDO0VBQ3pELHVCQUF1QixFQUFFLDJCQUEyQjtFQUNwRCx1QkFBdUIsRUFBRSw2QkFBNkI7RUFDdEQsd0JBQXdCLENBQUMsaUNBQWlDO0NBQzNEOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0lBQ0ksWUFBWTtHQUNiOztBQUVIO0lBQ0ksaUJBQWlCO0dBQ2xCOztBQUVIO0lBQ0ksaUJBQWlCO0dBQ2xCXCIsXCJmaWxlXCI6XCJIZWxwLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogJ1NlZ29lIFVJJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDAwcHg7XFxuXFxuICAvKlxcbiAgICogQXBwbGljYXRpb24gc3BlY2lmaWNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1oZWRnZWhvZy1ncmVlbi1saWdodDogIzM4YjQ0OTtcXG4gIC0taGVkZ2Vob2ctZ3JlZW4tZGFyazogIzAwN2MzYztcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxufVxcblxcbi5yb290IHtcXG4gIHBhZGRpbmc6IDQwcHggMjBweDtcXG59XFxuXFxuLmdyaWRJbWcge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyXFxufVxcblxcbi5ncmlkSW1nIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbi5ncmlkSW1nLmdyaWRJbWdTbSBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDIyMHB4O1xcbiAgfVxcblxcbi5ncmlkSW1nLmdyaWRJbWdMZyBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDQ0MHB4O1xcbiAgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiSGVscC1yb290LTNfUWhCXCIsXG5cdFwiZ3JpZEltZ1wiOiBcIkhlbHAtZ3JpZEltZy0zeW1Dc1wiLFxuXHRcImdyaWRJbWdTbVwiOiBcIkhlbHAtZ3JpZEltZ1NtLTM1Z0RFXCIsXG5cdFwiZ3JpZEltZ0xnXCI6IFwiSGVscC1ncmlkSW1nTGctMlpFOFpcIlxufTsiLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBOb1NTUiBmcm9tICcuLi8uLi9taXNjL05vU1NSJztcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSB7fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXNcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXNcbiAgd2lkdGg6IHN0cmluZyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzXG4gIGhlaWdodDogc3RyaW5nLFxufH07XG5cbmZ1bmN0aW9uIHNob3dSZWFkT25seUJsb2NrbHkocHJvcHM6IFByb3BzKSB7XG4gIHJldHVybiBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkZWZhdWx0OiBSZWFkT25seUJsb2NrbHkgfSA9IGF3YWl0IGltcG9ydCgnLi9SZWFkT25seUJsb2NrbHknKTtcblxuICAgIHJldHVybiA8UmVhZE9ubHlCbG9ja2x5IHsuLi5wcm9wc30gLz47XG4gIH07XG59XG5cbmZ1bmN0aW9uIFdyYXBwZXIocHJvcHM6IFByb3BzKSB7XG4gIHJldHVybiA8Tm9TU1I+e3Nob3dSZWFkT25seUJsb2NrbHkocHJvcHMpfTwvTm9TU1I+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyO1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG50eXBlIFByb3BUeXBlcyA9IHt8XG4gIGNoaWxkcmVuOiAoKSA9PiBQcm9taXNlPFJlYWN0Lk5vZGU+LFxufH07XG50eXBlIFN0YXRlVHlwZXMgPSB7fFxuICBjaGlsZHJlbjogUmVhY3QuTm9kZSB8IG51bGwsXG58fTtcblxuLyoqXG4gKiBQcmV2ZW50cyB0aGUgcmVuZGVyIGZ1bmN0aW9uIHBhc3NlZCBhcyBgY2hpbGRyZW5gIGZyb20gYmVpbmcgcmVuZGVyZWQgb24gdGhlIHNlcnZlci5cbiAqL1xuY2xhc3MgTm9TU1IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcFR5cGVzLCBTdGF0ZVR5cGVzPiB7XG4gIHN0YXRlID0ge1xuICAgIGNoaWxkcmVuOiBudWxsLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuKCkudGhlbigoY2hpbGRyZW4pID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vU1NSO1xuIiwiXG4gICAgdmFyIHJlZnMgPSAwO1xuICAgIHZhciBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTMhLi9IZWxwLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2luc2VydENzcy5qc1wiKTtcbiAgICB2YXIgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcblxuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNzcy5sb2NhbHMgfHwge307XG4gICAgZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBleHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuICcnICsgY3NzOyB9O1xuICAgIGV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTMhLi9IZWxwLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMyEuL0hlbHAuc2Nzc1wiKTtcbiAgICAgICAgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci93aXRoU3R5bGVzJztcblxuaW1wb3J0IEFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9taXNjL0xpbmsnO1xuaW1wb3J0IFJlYWRPbmx5QmxvY2tseSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2lkZS9SZWFkT25seUJsb2NrbHknO1xuXG5pbXBvcnQgeyBoZWRnZWhvZ0Jsb2NrcywgbWlzY0Jsb2NrcyB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaWRlL1Zpc3VhbEVkaXRvci9ibG9ja2x5X2NvbmZpZyc7XG5cbmltcG9ydCBzIGZyb20gJy4uL0hlbHAuc2Nzcyc7XG5cbmltcG9ydCBoZWxwMWltZzEgZnJvbSAnLi4vZW4vMV9jcmVhdGVfcHJvamVjdC8xX29wZW5faWRlLnBuZyc7XG5pbXBvcnQgaGVscDFpbWcyIGZyb20gJy4uL2VuLzFfY3JlYXRlX3Byb2plY3QvMl9jbGlja19wbHVzLnBuZyc7XG5pbXBvcnQgaGVscDFpbWczIGZyb20gJy4uL2VuLzFfY3JlYXRlX3Byb2plY3QvM19jcmVhdGVfcHJvamVjdC5wbmcnO1xuaW1wb3J0IGhlbHAxaW1nNCBmcm9tICcuLi9lbi8xX2NyZWF0ZV9wcm9qZWN0LzRfb3Blbl9wcm9qZWN0LnBuZyc7XG5pbXBvcnQgaGVscDJpbWcxIGZyb20gJy4uL2VuLzJfY3JlYXRlX2ZpbGUvMV9jb250ZXh0X21lbnUucG5nJztcbmltcG9ydCBoZWxwMmltZzIgZnJvbSAnLi4vZW4vMl9jcmVhdGVfZmlsZS8yX2NyZWF0ZV9maWxlLnBuZyc7XG5pbXBvcnQgaGVscDJpbWczIGZyb20gJy4uL2VuLzJfY3JlYXRlX2ZpbGUvM19vcGVuX2ZpbGUucG5nJztcbmltcG9ydCBoZWxwM2ltZzEgZnJvbSAnLi4vZW4vM19vcGVuX3NpbXVsYXRvci8xX2RyYWdfdGFiLnBuZyc7XG5pbXBvcnQgaGVscDNpbWcyIGZyb20gJy4uL2VuLzNfb3Blbl9zaW11bGF0b3IvMl9yZXN1bHQucG5nJztcbmltcG9ydCBoZWxwNGltZzEgZnJvbSAnLi4vZW4vNF9pbXBvcnRfZXhwb3J0LzFfZXhwb3J0LnBuZyc7XG5pbXBvcnQgaGVscDRpbWcyIGZyb20gJy4uL2VuLzRfaW1wb3J0X2V4cG9ydC8yX2ltcG9ydC5wbmcnO1xuXG5mdW5jdGlvbiBIZWxwKCkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiIGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgIDw+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImgzXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgIEVyc3RlIFNjaHJpdHRlXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICAgIERpZSBIZWRnZWhvZyBJREUgZXJtw7ZnbGljaHQgZXMgZGlyLCBlaW5mYWNoIGVpZ2VuZSBQcm9ncmFtbWUgenUgc2NocmVpYmVuIHVuZCBhdXN6dWbDvGhyZW4sXG4gICAgICAgICAgb2huZSB2b3JoZXIgenVzw6R0emxpY2hlIFNvZnR3YXJlIGluc3RhbGxpZXJlbiBvZGVyIGVpbiBLb250byBlcnN0ZWxsZW4genUgbcO8c3Nlbi4gV2lyXG4gICAgICAgICAgbGVnZW4gZ3Jvw59lbiBXZXJ0IGF1ZiBQcml2YXRzcGjDpHJlIHVuZCBEYXRlbnNjaHV0eiwgZGVzaGFsYiBmcmFnZW4gd2lyIGRpY2ggbmFjaCBrZWluZW5cbiAgICAgICAgICBEYXRlbiBkaWUgd2lyIG5pY2h0IHVuYmVkaW5ndCBiZW7DtnRpZ2VuLiBJbSBHcm/Dn2VuIHVuZCBHYW56ZW4gaGVpw590IGRhcywgYXXDn2VyIGRlaW5lbSBDb2RlXG4gICAgICAgICAgbXVzc3QgZHUgdW5zIGtlaW5lIERhdGVuIGdlYmVuLlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiIHBhcmFncmFwaD5cbiAgICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJpbmZvXCI+XG4gICAgICAgICAgICBEaWUgSGVkZ2Vob2cgSURFIGJlZmluZGV0IHNpY2ggbm9jaCBpbSBBbmZhbmdzc3RhZGl1bS4gTWFuY2hlIEZ1bmt0aW9uZW4gc2luZCB2aWVsbGVpY2h0XG4gICAgICAgICAgICBub2NoIG5pY2h0IGdhbnogYXVzZ2VyZWlmdCBvZGVyIGZlaGxlbiBub2NoLiBadWvDvG5mdGlnZSBGZWF0dXJlcywgd2llIGV0d2EgZWlnZW5lbiBDb2RlXG4gICAgICAgICAgICBtaXQgYW5kZXJlbiB6dSB0ZWlsZW4sIGvDtm5uZW4genVzw6R0emxpY2hlIERhdGVuIHZvbiBkaXIgYmVuw7Z0aWdlbi4gU29sY2hlIEZlYXR1cmVzXG4gICAgICAgICAgICB3ZXJkZW4gamVkZW5mYWxscyBvcHQtaW4gc2VpbiwgZGFzIGhlacOfdCBkdSBlbnRzY2hlaWRlc3Qgb2IgZHUgZGllc2UgbnV0enQgdW5kIHVucyBkaWVcbiAgICAgICAgICAgIG5vdHdlbmRpZ2VuIERhdGVuIGdpYnN0LlxuICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvPlxuICAgICAgPD5cbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDJcIiB2YXJpYW50PVwiaDRcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgPHNwYW4gaWQ9XCJwcm9qZWN0XCI+RWluIFByb2pla3QgYW5sZWdlbjwvc3Bhbj5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgRWluIFNvZnR3YXJlcHJvamVrdCBlbnRow6RsdCBEYXRlaWVuLCBkaWUgenVzYW1tZW4gZWluIFByb2dyYW1tIGVyZ2ViZW4uIEVpbiBQcm9qZWt0XG4gICAgICAgICAgYW56dWxlZ2VuIGlzdCBkZXNoYWxiIGRlciBlcnN0ZSBTY2hyaXR0LiBLbGlja2UgaW4gZGVpbmVyeycgJ31cbiAgICAgICAgICA8TGluayB0bz1cIi9cIj5Qcm9qZWt0w7xiZXJzaWNodDwvTGluaz4sIGF1ZiBkZW4gJnF1b3Q7KyZxdW90Oy1CdXR0b24gdW5kIHN1Y2ggZGlyIGVpbmVuXG4gICAgICAgICAgTmFtZW4gYXVzLiBLbGlja2UgZGFuYWNoIGF1ZiBkYXMgUHJvamVrdCB1bSBlcyB6dSDDtmZmbmVuLlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiIHBhcmFncmFwaD5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17M30gY2xhc3NOYW1lPXtgJHtzLmdyaWRJbWd9ICR7cy5ncmlkSW1nU219YH0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtoZWxwMWltZzF9IGFsdD1cImRpZSBJREUgw7ZmZm5lXCIgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXszfSBjbGFzc05hbWU9e2Ake3MuZ3JpZEltZ30gJHtzLmdyaWRJbWdTbX1gfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2hlbHAxaW1nMn0gYWx0PSdhdWYgZGVuIFwiK1wiLUJ1dHRvbiBrbGlja2VuJyAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezN9IGNsYXNzTmFtZT17YCR7cy5ncmlkSW1nfSAke3MuZ3JpZEltZ1NtfWB9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aGVscDFpbWczfSBhbHQ9XCJQcm9qZWt0IGJlbmVubmVuIHVuZCBhbmxlZ2VuXCIgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXszfSBjbGFzc05hbWU9e2Ake3MuZ3JpZEltZ30gJHtzLmdyaWRJbWdTbX1gfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2hlbHAxaW1nNH0gYWx0PVwiUHJvamVrdCDDtmZmbmVuXCIgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICAgIE5hY2hkZW0gZHUgZGFzIFByb2pla3QgZ2XDtmZmbmV0IGhhc3QsIG1hY2ggZWluZW4gUmVjaHRza2xpY2sgYXVmIGRlbiBQcm9qZWt0b3JkbmVyLCB1bVxuICAgICAgICAgIGRhcmluIGVpbmUgRGF0ZWkgYW56dWxlZ2VuLiBJbiBkaWVzZW0gQmVpc3BpZWwgd8OkaGxlbiB3aXIgJnF1b3Q7TmV1ZSBCbG9ja2x5IERhdGVpJnF1b3Q7XG4gICAgICAgICAgJm5kYXNoOyBtaXQgQmxvY2tseSBrYW5uc3QgZHUgZGVpbiBQcm9ncmFtbSBncmFmaXNjaCBlcnN0ZWxsZW4uIE5hY2hkZW0gZHUgZGllIERhdGVpXG4gICAgICAgICAgYW5nZWxlZ3QgaGFzdCwgd2lyZCBkaWVzZSBhdXRvbWF0aXNjaCBnZcO2ZmZuZXQsIGR1IHNvbGx0ZXN0IGFsc28gZGVuIGxlZXJlblxuICAgICAgICAgIEJsb2NrbHktQXJiZWl0c2JlcmVpY2ggc2VoZW4uXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXs0fSBjbGFzc05hbWU9e2Ake3MuZ3JpZEltZ30gJHtzLmdyaWRJbWdTbX1gfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2hlbHAyaW1nMX0gYWx0PVwiS29udGV4dG1lbnVcIiAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezR9IGNsYXNzTmFtZT17YCR7cy5ncmlkSW1nfSAke3MuZ3JpZEltZ1NtfWB9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aGVscDJpbWcyfSBhbHQ9XCJEYXRlaSBhbmxlZ2VuXCIgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXs0fSBjbGFzc05hbWU9e2Ake3MuZ3JpZEltZ30gJHtzLmdyaWRJbWdTbX1gfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2hlbHAyaW1nM30gYWx0PVwiRGF0ZWkgw7ZmZm5lblwiIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8Lz5cbiAgICAgIDw+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgyXCIgdmFyaWFudD1cImg0XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgIDxzcGFuIGlkPVwic2ltdWxhdGlvblwiPkVpbmVuIHNpbXVsaWVydGVuIFJvYm90ZXIgbWl0IEJsb2NrbHkgc3RldWVybjwvc3Bhbj5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgQmV2b3IgZHUgYmVnaW5uc3QgQmzDtmNrZSB6dSBkZWluZW0gUHJvZ3JhbW0gaGluenV6dWbDvGdlbiwgbWFjaGVuIHdpciBzY2huZWxsIGVpbmVuIEJsaWNrXG4gICAgICAgICAgYXVmIGRlbiBTaW11bGF0b3IuIEtsaWNrZSDDvGJlciBkZW0gUHJvamVrdG9yZG5lciBhdWYgZGFzIFN5bWJvbCBtaXQgZGVuIFgsWSxaIEFjaHNlbiB1bVxuICAgICAgICAgIGlobiB6dSDDtmZmbmVuLCBkYW5uIHppZWhlIGRlbiBuZXUgZ2XDtmZmbmV0ZW4gVGFiIG5hY2ggdW50ZW4sIGRhbWl0IEJsb2NrbHkgdW5kIGRlclxuICAgICAgICAgIFNpbXVsYXRvciBnbGVpY2h6ZWl0aWcgc2ljaHRiYXIgc2luZC5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgPEdyaWQgaXRlbSBzbT17MTJ9IG1kPXs2fSBjbGFzc05hbWU9e2Ake3MuZ3JpZEltZ30gJHtzLmdyaWRJbWdMZ31gfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2hlbHAzaW1nMX0gYWx0PVwiZGVuIFNpbXVsYXRvciB2ZXJzY2hpZWJlblwiIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHNtPXsxMn0gbWQ9ezZ9IGNsYXNzTmFtZT17YCR7cy5ncmlkSW1nfSAke3MuZ3JpZEltZ0xnfWB9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aGVscDNpbWcyfSBhbHQ9XCJCbG9ja2x5IHVuZCBTaW11bGF0b3IgbmViZW5laW5hbmRlclwiIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgICBEZXIgU2ltdWxhdG9yICh1bmQgw7xicmlnZW5zIGF1Y2ggZGllIEtvbnNvbGUsIGRpZSBtaXQgZGVtIHp3ZWl0ZW4gQnV0dG9uIMO8YmVyIGRlbVxuICAgICAgICAgIFByb2pla3RvcmRuZXIgZ2XDtmZmbmV0IHdpcmQpIMO2ZmZuZW4gc2ljaCBhdXRvbWF0aXNjaCwgd2VubiBlaW4gQmVmZWhsIGFuIGRlbiBSb2JvdGVyXG4gICAgICAgICAgZ2VnZWJlbiAob2RlciBlYmVuIFRleHQgYXVzZ2VnZWJlbikgd2VyZGVuIHNvbGwuIEVzIGlzdCBhYmVyIHRyb3R6ZGVtIHByYWt0aXNjaGVyLCBkaWVzZVxuICAgICAgICAgIFRhYnMgdm9yaGVyIHNlbGJzdCB6dSBwbGF0emllcmVuLlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8Lz5cbiAgICAgIDw+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgyXCIgdmFyaWFudD1cImg0XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgIDxzcGFuIGlkPVwiYmxvY2tseVwiPkRpZSBCbG9ja2x5LUJlZmVobGU8L3NwYW4+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoM1wiIHZhcmlhbnQ9XCJoNVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwiYmxvY2tseS1kcml2ZVwiPkZhaHJlbjwvc3Bhbj5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgRGllc2UgS2F0ZWdvcmllIGVudGjDpGx0IEJlZmVobGUsIHVtIGltbWVyIHp3ZWkgTW90b3JlbiBnbGVpY2h6ZWl0aWcgenUgc3RldWVybi4gRGFkdXJjaFxuICAgICAgICAgICAga8O2bm5lbiBiZWlkZSBSw6RkZXIgZGVzIFJvYm90ZXJzIHplaXRnbGVpY2ggZ2VzdGFydGV0IG9kZXIgYW5nZWhhbHRlbiB3ZXJkZW4uIERpZVxuICAgICAgICAgICAgR2VzY2h3aW5kaWdrZWl0IGRlciBNb3RvcmVuIHdpcmQgYWxzIFphaGwgendpc2NoZW4gLTEwMDAgdW5kICsxMDAwIGFuZ2VnZWJlbi4gRGVyXG4gICAgICAgICAgICBTaW11bGllcnRlIFJvYm90ZXIgaGF0IHNlaW4gbGlua2VzIFJhZCBhbiBNb3RvciAwLCBzZWluIHJlY2h0ZXMgYW4gTW90b3IgMS5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgPFJlYWRPbmx5QmxvY2tseSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI2MHB4XCI+XG4gICAgICAgICAgICAgIHtoZWRnZWhvZ0Jsb2Nrcy5IRURHRUhPR19NT1ZFMl9VTkxJTUlURUQudG9vbGJveEJsb2Nrcy5kZWZhdWx0KCl9XG4gICAgICAgICAgICA8L1JlYWRPbmx5QmxvY2tseT5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgPFJlYWRPbmx5QmxvY2tseSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI2MHB4XCI+XG4gICAgICAgICAgICAgIHtoZWRnZWhvZ0Jsb2Nrcy5IRURHRUhPR19NT1ZFMi50b29sYm94QmxvY2tzLmRlZmF1bHQoKX1cbiAgICAgICAgICAgIDwvUmVhZE9ubHlCbG9ja2x5PlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICBEaWVzZSBCZWZlaGxlIHN0YXJ0ZW4gZGllIE1vdG9yZW4uIEJlaSBkZXIgendlaXRlbiBWYXJpYW50ZSB3aXJkIGRlciBSb2JvdGVyIG5hY2ggZWluZXJcbiAgICAgICAgICAgIGdld2lzc2VuIFplaXQgd2llZGVyIGFiZ2VicmVtc3QuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgIDxSZWFkT25seUJsb2NrbHkgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNTBweFwiPlxuICAgICAgICAgICAgICB7aGVkZ2Vob2dCbG9ja3MuSEVER0VIT0dfTU9UT1JfT0ZGMi50b29sYm94QmxvY2tzLmRlZmF1bHQoKX1cbiAgICAgICAgICAgIDwvUmVhZE9ubHlCbG9ja2x5PlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICA8UmVhZE9ubHlCbG9ja2x5IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjUwcHhcIj5cbiAgICAgICAgICAgICAge2hlZGdlaG9nQmxvY2tzLkhFREdFSE9HX0JSQUtFMi50b29sYm94QmxvY2tzLmRlZmF1bHQoKX1cbiAgICAgICAgICAgIDwvUmVhZE9ubHlCbG9ja2x5PlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICBEaWVzZSBCZWZlaGxlIHN0b3BwZW4gZGllIE1vdG9yZW4uIE1vbWVudGFuIG1hY2hlbiBiZWlkZSBCZWZlaGxlIGluIGRlciBTaW11bGF0aW9uIGRhc1xuICAgICAgICAgICAgZ2xlaWNoZSwgYWJlciBkaWUgSWRlZSBpc3QsIGRhc3MgZGVyIFJvYm90ZXIgYmVpIEF1c3NjaGFsdGVuIHdlaXRlciBhdXNyb2xsdCwgYmVpbVxuICAgICAgICAgICAgQnJlbXNlbiBzY2huZWxsIHN0ZWhlbmJsZWlidC5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvPlxuICAgICAgICA8PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgzXCIgdmFyaWFudD1cImg1XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJibG9ja2x5LW1vdG9yc1wiPk1vdG9yZW48L3NwYW4+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgIEluIGRpZXNlciBLYXRlZ29yaWUgc2luZCBCZWZlaGxlLCB1bSBNb3RvcmVuIGVpbnplbG4gYW56dXN0ZXVlcm4uIERpZSBCZWZlaGxlXG4gICAgICAgICAgICBmdW5rdGlvbmllcmVuIHNvbnN0IGdlbmF1IHNvIHdpZSBkaWUgRmFocmJlZmVobGUuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgIDxSZWFkT25seUJsb2NrbHkgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNjBweFwiPlxuICAgICAgICAgICAgICB7aGVkZ2Vob2dCbG9ja3MuSEVER0VIT0dfTU9WRV9VTkxJTUlURUQudG9vbGJveEJsb2Nrcy5kZWZhdWx0KCl9XG4gICAgICAgICAgICA8L1JlYWRPbmx5QmxvY2tseT5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgPFJlYWRPbmx5QmxvY2tseSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI2MHB4XCI+XG4gICAgICAgICAgICAgIHtoZWRnZWhvZ0Jsb2Nrcy5IRURHRUhPR19NT1ZFLnRvb2xib3hCbG9ja3MuZGVmYXVsdCgpfVxuICAgICAgICAgICAgPC9SZWFkT25seUJsb2NrbHk+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgIERpZXNlIEJlZmVobGUgc3RhcnRlbiBlaW5lbiBNb3Rvci4gQmVpIGRlciB6d2VpdGVuIFZhcmlhbnRlIHdpcmQgZGVyIE1vdG9yIG5hY2ggZWluZXJcbiAgICAgICAgICAgIGdld2lzc2VuIFplaXQgd2llZGVyIGFiZ2VicmVtc3QuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgIDxSZWFkT25seUJsb2NrbHkgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNTBweFwiPlxuICAgICAgICAgICAgICB7aGVkZ2Vob2dCbG9ja3MuSEVER0VIT0dfTU9UT1JfT0ZGLnRvb2xib3hCbG9ja3MuZGVmYXVsdCgpfVxuICAgICAgICAgICAgPC9SZWFkT25seUJsb2NrbHk+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgIDxSZWFkT25seUJsb2NrbHkgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNTBweFwiPlxuICAgICAgICAgICAgICB7aGVkZ2Vob2dCbG9ja3MuSEVER0VIT0dfQlJBS0UudG9vbGJveEJsb2Nrcy5kZWZhdWx0KCl9XG4gICAgICAgICAgICA8L1JlYWRPbmx5QmxvY2tseT5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgRGllc2UgQmVmZWhsZSBzdG9wcGVuIGVpbmVuIE1vdG9yLiBNb21lbnRhbiBtYWNoZW4gYmVpZGUgQmVmZWhsZSBpbiBkZXIgU2ltdWxhdGlvbiBkYXNcbiAgICAgICAgICAgIGdsZWljaGUsIGFiZXIgZGllIElkZWUgaXN0LCBkYXNzIGRlciBNb3RvciBiZWkgQXVzc2NoYWx0ZW4gd2VpdGVyIGF1c3JvbGx0LCBiZWltIEJyZW1zZW5cbiAgICAgICAgICAgIHNjaG5lbGwgc3RlaGVuYmxlaWJ0LlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC8+XG4gICAgICAgIDw+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDNcIiB2YXJpYW50PVwiaDVcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICA8c3BhbiBpZD1cImJsb2NrbHktc2Vydm9zXCI+U2Vydm9zPC9zcGFuPlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICBTZXJ2b3Mga8O2bm5lbiBhdWYgUG9zaXRpb25lbiBlaW5nZXN0ZWxsdCB3ZXJkZW4sIGRpZSB6d2lzY2hlbiAwIHVuZCAxMDAwIGJ6dy4gendpc2NoZW5cbiAgICAgICAgICAgIDDCsCB1bmQgMTgwwrAgYW5nZWdlYmVuIHdlcmRlbi4gRGVyIHNpbXVsaWVydGUgUm9ib3RlciBoYXQgbW9tZW50YW4gbm9jaCBrZWluZSBTZXJ2b3MuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgIDxSZWFkT25seUJsb2NrbHkgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNjBweFwiPlxuICAgICAgICAgICAgICB7aGVkZ2Vob2dCbG9ja3MuSEVER0VIT0dfU0VSVk8udG9vbGJveEJsb2Nrcy5kZWZhdWx0KCl9XG4gICAgICAgICAgICA8L1JlYWRPbmx5QmxvY2tseT5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgRGllc2VyIEJlZmVobCBzdGVsbHQgZGVuIFNlcnZvIGF1ZiBlaW5lIFBvc2l0aW9uIGVpbi4gQXVjaCBiZWkgV2lkZXJzdGFuZCAoei5CLiBlaW5lbVxuICAgICAgICAgICAgSGluZGVybmlzKSB2ZXJzdWNodCBkZXIgU2Vydm8gZGVuIGVpbmdlc3RlbGx0ZW4gV2lua2VsIHp1IGhhbHRlbi5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgPFJlYWRPbmx5QmxvY2tseSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI1MHB4XCI+XG4gICAgICAgICAgICAgIHtoZWRnZWhvZ0Jsb2Nrcy5IRURHRUhPR19TRVJWT19PRkYudG9vbGJveEJsb2Nrcy5kZWZhdWx0KCl9XG4gICAgICAgICAgICA8L1JlYWRPbmx5QmxvY2tseT5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgRGllc2VyIEJlZmVobCBzY2hhbHRldCBkZW4gU2Vydm8gYXVzLiBEZXIgU2Vydm8gd2lyZCBzZWluZSBQb3NpdGlvbiBiZWkgV2lkZXJzdGFuZCBuaWNodFxuICAgICAgICAgICAgaGFsdGVuLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC8+XG4gICAgICAgIDw+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDNcIiB2YXJpYW50PVwiaDVcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICA8c3BhbiBpZD1cImJsb2NrbHktc2Vuc29yc1wiPlNlbnNvcmVuPC9zcGFuPlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICBNaXQgU2Vuc29yZW4ga2FubiBkZXIgUm9ib3RlciBzZWluZSBVbWdlYnVuZyB3YWhybmVobWVuLiBTZW5zb3J3ZXJ0ZSBsaWVnZW4gendpc2NoZW4gMFxuICAgICAgICAgICAgdW5kIDQwOTUsIGRpZSBnZW5hdWVuIFdlcnRlYmVyZWljaGUgaMOkbmdlbiBhYmVyIHZvbiBkZXIgQXJ0IGRlcyBTZW5zb3JzIGFiLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICBWb3JuZSBoYXQgZGVyIHNpbXVsaWVydGUgUm9ib3RlciBhY2h0IFNlbnNvcmVuOlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgVmllciBMaW5pZW5zZW5zb3JlbiwgZGllIHNjaHdhcnplIExpbmllbiBhdWYgZGVtIEJvZGVuIGVya2VubmVuIGvDtm5uZW4uIERhcyBzaW5kIHZvblxuICAgICAgICAgICAgICAgIGxpbmtzIG5hY2ggcmVjaHRzIGRpZSBTZW5zb3JlbiAwIGJpcyAzLiBEaWUgU2Vuc29yZW4gd2VyZGVuIG9yYW5nZSBkYXJnZXN0ZWxsdCwgd2VublxuICAgICAgICAgICAgICAgIGVpbmUgTGluaWUgZXJrYW5udCB3aXJkLlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+V2VydGU6PC9zdHJvbmc+IFdlbm4gZWluZSAoZHVua2xlKSBMaW5pZSB1bnRlciBkZW0gU2Vuc29yIGVya2FubnQgd2lyZCwgaXN0XG4gICAgICAgICAgICAgICAgZGVyIFNlbnNvcndlcnQgaG9jaCwgc29uc3QgKGF1ZiBoZWxsZXIgT2JlcmZsw6RjaGUpIG5pZWRyaWcuXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBEcmVpIEFic3RhbmRzc2Vuc29yZW4sIGRpZSBzZWl0bGljaCB1bmQgZGlyZWt0IG5hY2ggdm9ybmUgZ2VyaWNodGV0IHNpbmQgdW5kIG1pdFxuICAgICAgICAgICAgICAgIGRlbmVuIEhpbmRlcm5pc3NlbiBvaG5lIEJlcsO8aHJ1bmcgZXJrYW5udCB3ZXJkZW4ga8O2bm5lbi4gRGFzIHNpbmQgdm9uIGxpbmtzIG5hY2hcbiAgICAgICAgICAgICAgICByZWNodHMgZGllIFNlbnNvcmVuIDQgYmlzIDYuIERpZSBTdHJhaGxlbiB2b3IgZGVtIFJvYm90ZXIgc3RlbGxlbiBkaWUgUmljaHR1bmcgdW5kXG4gICAgICAgICAgICAgICAgUmVpY2h3ZWl0ZSBkZXIgQWJzdGFuZHNzZW5zb3JlbiBkYXIuXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5XZXJ0ZTo8L3N0cm9uZz4gV2VubiBlaW4gSGluZGVybmlzIG7DpGhlciBrb21tdCBzdGVpZ3QgZGVyIFdlcnQgenVlcnN0IGFuLFxuICAgICAgICAgICAgICAgIHdlbm4gZXMgZGVuIFJvYm90ZXIgZmFzdCBiZXLDvGhydCBzaW5rdCBlciB3aWVkZXIuIERpZXNlcyBWZXJoYWx0ZW4gYmlsZGV0IGVpbmVuXG4gICAgICAgICAgICAgICAgaMOkdWZpZyB2ZXJ3ZW5kZXRlbiBBYnN0YW5kc3NlbnNvciBhdXMgZGVyIEhvYmJ5LVJvYm90aWsgbmFjaC5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIEVpbiBTdG/Dn3NlbnNvciwgZGVyIGZhc3Qgc28gYnJlaXQgaXN0IHdpZSBkZXIgUm9ib3RlciBzZWxic3QsIGJlZmluZGV0IHNpY2ggdm9ybmUgYW1cbiAgICAgICAgICAgICAgICBSb2JvdGVyLiBEaWVzZXIgU2Vuc29yIGhhdCBkaWUgTnVtbWVyIDguIEVyIHdpcmQgb3JhbmdlIGRhcmdlc3RlbGx0LCB3ZW5uIGVpbmVcbiAgICAgICAgICAgICAgICBLb2xsaXNpb24gZXJrYW5udCB3aXJkLlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+V2VydGU6PC9zdHJvbmc+IERlciBXZXJ0IGlzdCBuaWVkcmlnLCB3ZW5uIGVpbmUgS29sbGlzaW9uIGVya2FubnQgd2lyZC5cbiAgICAgICAgICAgICAgICBEaWVzZXMgVmVyaGFsdGVuIGJpbGRldCBkaWUgZWxla3Ryb25pc2NoZSAmcXVvdDtwdWxsLXVwJnF1b3Q7IFNjaGFsdHVuZyBmw7xyXG4gICAgICAgICAgICAgICAgVGFzdHNlbnNvcmVuIG5hY2guXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICBTZW5zb3JlbiBnaWJ0IGVzIGluIHp3ZWkgQXJ0ZW4sIGFuYWxvZyB1bmQgZGlnaXRhbDpcbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+QW5hbG9nZTwvc3Ryb25nPiBTZW5zb3JlbiBrw7ZubmVuIHZpZWxlIHZlcnNjaGllZGVuZSBXZXJ0ZSBBbm5laG1lbjsgZGVyXG4gICAgICAgICAgICAgICAgQWJzdGFuZHNzZW5zb3IgaXN0IGRhZsO8ciBlaW4gZ3V0ZXMgQmVpc3BpZWwuIFVtIGVpbmVuIEFuYWxvZ3NlbnNvciB6dSBiZW51dHplbixcbiAgICAgICAgICAgICAgICBtdXNzdCBkdSBtaXQgZGVuIFdlcnRlbiB6d2lzY2hlbiAwIHVuZCA0MDk1IGFyYmVpdGVuLlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5EaWdpdGFsZTwvc3Ryb25nPiBTZW5zb3JlbiBoYWJlbiBudXIgendlaSBtw7ZnbGljaGUgWnVzdMOkbmRlLCB6dW0gQmVpc3BpZWxcbiAgICAgICAgICAgICAgICAmcXVvdDtadXNhbW1lbnN0b8OfJnF1b3Q7IHVuZCAmcXVvdDtrZWluIFp1c2FtbWVuc3Rvw58mcXVvdDsgb2RlciAmcXVvdDtMaW5pZVxuICAgICAgICAgICAgICAgIGVya2FubnQmcXVvdDsgdW5kICZxdW90O2tlaW5lIExpbmllIGVya2FubnQmcXVvdDsuIEJlaSBkaWVzZW4gU2Vuc29yZW4ga2FubiBtYW4gYXVjaFxuICAgICAgICAgICAgICAgIGRlbiBlbnRzcHJlY2hlbmRlbiBEaWdpdGFsd2VydCBhYmZyYWdlbjpcbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIEFuYWxvZ3dlcnRlIDAgYmlzIDIwNDc6IERpZ2l0YWx3ZXJ0IDxjb2RlPmZhbHNlPC9jb2RlPiwgJnF1b3Q7ZmFsc2NoJnF1b3Q7XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICBBbmFsb2d3ZXJ0ZSAyMDQ4IGJpcyA0MDk1OiBEaWdpdGFsd2VydCA8Y29kZT50cnVlPC9jb2RlPiwgJnF1b3Q7d2FociZxdW90O1xuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgPFJlYWRPbmx5QmxvY2tseSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI1MHB4XCI+XG4gICAgICAgICAgICAgIHtoZWRnZWhvZ0Jsb2Nrcy5IRURHRUhPR19SRUFEX0RJR0lUQUwudG9vbGJveEJsb2Nrcy5kZWZhdWx0KCl9XG4gICAgICAgICAgICA8L1JlYWRPbmx5QmxvY2tseT5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgTGllc3QgZGVuIGRpZ2l0YWxlbiBXZXJ0IGVpbmVzIFNlbnNvcnMgYXVzLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICA8UmVhZE9ubHlCbG9ja2x5IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjUwcHhcIj5cbiAgICAgICAgICAgICAge2hlZGdlaG9nQmxvY2tzLkhFREdFSE9HX1JFQURfQU5BTE9HLnRvb2xib3hCbG9ja3MuZGVmYXVsdCgpfVxuICAgICAgICAgICAgPC9SZWFkT25seUJsb2NrbHk+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgIDxSZWFkT25seUJsb2NrbHkgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNjBweFwiPlxuICAgICAgICAgICAgICB7aGVkZ2Vob2dCbG9ja3MuSEVER0VIT0dfUkVBRF9BTkFMT0cudG9vbGJveEJsb2Nrcy5jb21wYXJpc29uKCl9XG4gICAgICAgICAgICA8L1JlYWRPbmx5QmxvY2tseT5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgTGllc3QgZGVuIGFuYWxvZ2VuIFdlcnQgZWluZXMgU2Vuc29ycyBhdXMuIERhcyB1bnRlcmUgQmVpc3BpZWwgdmVyZ2xlaWNodCBkZW4gV2VydCBtaXRcbiAgICAgICAgICAgIGVpbmVtIEdyZW56d2VydCwgdW0gZGFyYXVzIGVpbmVuIChkaWdpdGFsZW4pIFdhaHJoZWl0c3dlcnQgKHdhaHIvZmFsc2NoKSB6dSBtYWNoZW4uIERlclxuICAgICAgICAgICAgR3Jlbnp3ZXJ0IDIwNDggdmVyaMOkbHQgc2ljaCBnZW5hdSBnbGVpY2ggd2llIGRlciBvYmVyZSBCbG9jayB6dW0gYXVzbGVzZW4gZGVzXG4gICAgICAgICAgICBEaWdpdGFsd2VydHMuIE1pdCBkZW0gVmVyZ2xlaWNoc2Jsb2NrIGthbm4gZGVyIEdyZW56d2VydCBhYmVyIGFuZ2VwYXNzdCB3ZXJkZW4uXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8Lz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoM1wiIHZhcmlhbnQ9XCJoNVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwiYmxvY2tseS1taXNjXCI+VmVyc2NoaWVkZW5lczwvc3Bhbj5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgPFJlYWRPbmx5QmxvY2tseSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI2MHB4XCI+XG4gICAgICAgICAgICAgIHtoZWRnZWhvZ0Jsb2Nrcy5IRURHRUhPR19TTEVFUC50b29sYm94QmxvY2tzLmRlZmF1bHQoKX1cbiAgICAgICAgICAgIDwvUmVhZE9ubHlCbG9ja2x5PlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICBEaWVzZXIgQmVmZWhsIHVudGVyYnJpY2h0IGRhcyBQcm9ncmFtbSBmw7xyIGVpbmUgZ2V3aXNzZSBaZWl0LiBXZW5uIHfDpGhyZW5kZGVzc2VuIGVpblxuICAgICAgICAgICAgTW90b3IgZWluZ2VzY2hhbHRlbiBpc3QsIHdpcmQgc2ljaCBkaWVzZXIgd2VpdGVyZHJlaGVuLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICA8UmVhZE9ubHlCbG9ja2x5IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjYwcHhcIj5cbiAgICAgICAgICAgICAge21pc2NCbG9ja3MuUFJJTlRfQkxPQ0sudG9vbGJveEJsb2Nrcy5kZWZhdWx0KCl9XG4gICAgICAgICAgICA8L1JlYWRPbmx5QmxvY2tseT5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgRGllc2VyIEJlZmVobCBnaWJ0IGVpbmVuIFdlcnQgYXVmIGRlciBLb25zb2xlIGF1cy4gRGVyIFdlcnQga2FubiBlaW4gVGV4dCBzZWluLCBvZGVyXG4gICAgICAgICAgICBlaW5lIFphaGwgb2RlciBlaW4gZGlnaXRhbGVyIFdhaHJoZWl0c3dlcnQuIE9mdCBoaWxmdCBlcywgc2ljaCBkZW4gV2VydCBlaW5lcyBTZW5zb3JzXG4gICAgICAgICAgICBhbnplaWdlbiB6dSBsYXNzZW4sIHdlbm4gZWluIFByb2dyYW1tIG5pY2h0IHR1dCB3YXMgbWFuIHdpbGwuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8Lz5cbiAgICAgIDwvPlxuICAgICAgPD5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICAgIFByb2JpZXJlbiB3aXIgamV0enQgZWluIHNpbXBsZXMgUHJvZ3JhbW06XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICAgIDxSZWFkT25seUJsb2NrbHkgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTYwcHhcIj5cbiAgICAgICAgICAgIDxibG9jayB0eXBlPVwiaGVkZ2Vob2dfbW92ZTJfdW5saW1pdGVkXCI+XG4gICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVwiUE9SVDFcIj4wPC9maWVsZD5cbiAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XCJQT1JUMlwiPjE8L2ZpZWxkPlxuICAgICAgICAgICAgICA8dmFsdWUgbmFtZT1cIlNQRUVEMVwiPlxuICAgICAgICAgICAgICAgIDxzaGFkb3cgdHlwZT1cIm1hdGhfbnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cIk5VTVwiPjEwMDA8L2ZpZWxkPlxuICAgICAgICAgICAgICAgIDwvc2hhZG93PlxuICAgICAgICAgICAgICA8L3ZhbHVlPlxuICAgICAgICAgICAgICA8dmFsdWUgbmFtZT1cIlNQRUVEMlwiPlxuICAgICAgICAgICAgICAgIDxzaGFkb3cgdHlwZT1cIm1hdGhfbnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cIk5VTVwiPjEwMDA8L2ZpZWxkPlxuICAgICAgICAgICAgICAgIDwvc2hhZG93PlxuICAgICAgICAgICAgICA8L3ZhbHVlPlxuICAgICAgICAgICAgICA8bmV4dD5cbiAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cImNvbnRyb2xzX3doaWxlVW50aWxcIj5cbiAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVwiTU9ERVwiPldISUxFPC9maWVsZD5cbiAgICAgICAgICAgICAgICAgIDx2YWx1ZSBuYW1lPVwiQk9PTFwiPlxuICAgICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cImhlZGdlaG9nX3JlYWRfZGlnaXRhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVwiUE9SVFwiPjg8L2ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrPlxuICAgICAgICAgICAgICAgICAgPC92YWx1ZT5cbiAgICAgICAgICAgICAgICAgIDxzdGF0ZW1lbnQgbmFtZT1cIkRPXCI+XG4gICAgICAgICAgICAgICAgICAgIDxibG9jayB0eXBlPVwiaGVkZ2Vob2dfc2xlZXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dmFsdWUgbmFtZT1cIlRJTUVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzaGFkb3cgdHlwZT1cIm1hdGhfbnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVwiTlVNXCI+MC4wMTwvZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NoYWRvdz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3ZhbHVlPlxuICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrPlxuICAgICAgICAgICAgICAgICAgPC9zdGF0ZW1lbnQ+XG4gICAgICAgICAgICAgICAgICA8bmV4dD5cbiAgICAgICAgICAgICAgICAgICAgPGJsb2NrIHR5cGU9XCJoZWRnZWhvZ19icmFrZTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cIlBPUlQxXCI+MDwvZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XCJQT1JUMlwiPjE8L2ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrPlxuICAgICAgICAgICAgICAgICAgPC9uZXh0PlxuICAgICAgICAgICAgICAgIDwvYmxvY2s+XG4gICAgICAgICAgICAgIDwvbmV4dD5cbiAgICAgICAgICAgIDwvYmxvY2s+XG4gICAgICAgICAgPC9SZWFkT25seUJsb2NrbHk+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICAgIEVyc3RlbGxlIGRpZXNlcyBQcm9ncmFtbSBpbiBkZWluZW0gUHJvamVrdCwgZGFubiBrbGlja2UgYXVmIGRlbiBncsO8bmVuIFBmZWlsLiBEdSB3aXJzdFxuICAgICAgICAgIHNlaGVuLCB3aWUgZGVyIFJvYm90ZXIgYmlzIHp1ciBuw6RjaHN0ZW4gV2FuZCBmw6RocnQgdW5kIGRvcnQgbmFjaCBkZXIgS29sbGlzaW9uXG4gICAgICAgICAgc3RlaGVuYmxlaWJ0LiBTY2hyaXR0IGbDvHIgU2Nocml0dCBpc3QgZm9sZ2VuZGVzIHBhc3NpZXJ0OlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiIHBhcmFncmFwaD5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+RGVyIGVyc3RlIEJsb2NrIGzDpHNzdCBkZW4gUm9ib3RlciB2b3J3w6RydHMgbG9zZmFocmVuLjwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIERlciBuw6RjaHN0ZSBCbG9jayBpc3QgZWluZSBTY2hsZWlmZSwgZGllIGF1ZmdlZsO8aHJ0IHdpcmQgc29sYW5nZSBkZXIgU2Vuc29yIDggZWluZW5cbiAgICAgICAgICAgICAgaG9oZW4gRGlnaXRhbHdlcnQgaGF0LiBTZW5zb3IgOCBpc3QgZWluIFN0b8Ofc2Vuc29yLCB1bmQgZWluIGhvaGVyIFdlcnQgYmVkZXV0ZXQga2VpbmVcbiAgICAgICAgICAgICAgS29sbGlzaW9uLiBBbmRlcnMgYXVzZ2VkcsO8Y2t0LCBkaWUgU2NobGVpZmUgd2lyZCB3aWVkZXJob2x0LCBzb2xhbmdlIGRlciBTZW5zb3Iga2VpbmVuXG4gICAgICAgICAgICAgIFp1c2FtbWVuc3Rvw58gZXJrZW5udC5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIEluIGRlciBTY2hsZWlmZSB3aXJkIGRhcyBQcm9ncmFtbSBrdXJ6IHVudGVyYnJvY2hlbi4gQXVjaCB3ZW5uIGRhcyBQcm9ncmFtbSBlaW5lIFBhdXNlXG4gICAgICAgICAgICAgIG1hY2h0IGJld2VnZW4gc2ljaCBkaWUgTW90b3JlbiB3ZWl0ZXIsIGRhcyBoZWnDn3QgZGVyIFJvYm90ZXIgZsOkaHJ0IGJpcyBkZXIgU2Vuc29yIGRpZVxuICAgICAgICAgICAgICBTY2hsZWlmZSB6dW0gQWJicnVjaCBicmluZ3QuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICBOYWNoIGRlciBTY2hsZWlmZSwgYWxzbyBuYWNoIGVpbmVyIEtvbGxpc2lvbiwgYmxlaWJ0IGRlciBSb2JvdGVyIHN0ZWhlbi4gRGEgZGFzIGRlclxuICAgICAgICAgICAgICBsZXR6dGUgQmVmZWhsIGlzdCBlbmRldCBkYXMgUHJvZ3JhbW0gZGFuYWNoLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8Lz5cbiAgICAgIDw+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgyXCIgdmFyaWFudD1cImg0XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgIDxzcGFuIGlkPVwiZXhwb3J0LWltcG9ydFwiPkRhdGVpZW4gZXhwb3J0aWVyZW4gJmFtcDsgaW1wb3J0aWVyZW48L3NwYW4+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICAgIFdpbGxzdCBkdSBlaW5lIGRlaW5lciBEYXRlaWVuIGhlcnVudGVyenVsYWRlbiwgei5CLiB1bSBkaWVzZSBtaXQgYW5kZXJlbiB6dSB0ZWlsZW4sIG1hY2hcbiAgICAgICAgICBlaW5lbiBSZWNodHNrbGljayBhdWYgZGllc2UgRGF0ZWkgdW5kIHfDpGhsZSAmcXVvdDtIZXJ1bnRlcmxhZGVuJnF1b3Q7LiDDhGhubGljaCBrYW5uc3QgZHVcbiAgICAgICAgICBEYXRlaWVuIGluIGRpZSBJREUgaW1wb3J0aWVyZW4sIGluZGVtIGR1IGF1ZiBlaW5lbiBPcmRuZXIgcmVjaHRza2xpY2tzdCB1bWRcbiAgICAgICAgICAmcXVvdDtIb2NobGFkZW4mcXVvdDsgd8OkaGxzdC4gQWNodHVuZywgbW9tZW50YW4gd2VyZGVuIGRhZHVyY2ggYmVzdGVoZW5kZSBEYXRlaWVuIG9obmVcbiAgICAgICAgICBXYXJudW5nIMO8YmVyc2NocmllYmVuIVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgICBUcm90eiBkZXIgTmFtZW4gZGllc2VyIEJlZmVobGUgd2VyZGVuIGRlaW5lIERhdGVpZW4gbmljaHQgYXVmIHVuc2VyZW4gU2VydmVybiBnZXNwZWljaGVydCxcbiAgICAgICAgICBzb25kZXJuIGxva2FsIGluIGRlaW5lbSBCcm93c2VyIHdvIG51ciBkdSBadWdyaWZmIGRhcmF1ZiBoYXN0LiBJbiBkZXIgWnVrdW5mdCB3aXJkIGVzIGF1Y2hcbiAgICAgICAgICBkaWUgTcO2Z2xpY2hrZWl0IGdlYmVuLCBQcm9qZWt0ZSBhdWYgdW5zZXJlbiBTZXJ2ZXJuIHp1IHNwZWljaGVybiwgZHUgd2lyc3QgYWJlciBpbW1lclxuICAgICAgICAgIGdlZnJhZ3Qgd2VyZGVuLCBvYiBkdSBkZWluZSBEYXRlbiBtaXQgdW5zIHRlaWxlbiB3aWxsc3QuXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICAgIDxBbGVydCBzZXZlcml0eT1cImluZm9cIj5cbiAgICAgICAgICAgIEdhbnplIE9yZG5lciBob2NoLSBvZGVyIGhlcnVudGVyenVsYWRlbiBpc3QgbGVpZGVyIG5vY2ggbmljaHQgbcO2Z2xpY2guXG4gICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgPEdyaWQgaXRlbSBzbT17MTJ9IG1kPXs2fSBjbGFzc05hbWU9e2Ake3MuZ3JpZEltZ30gJHtzLmdyaWRJbWdTbX1gfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2hlbHA0aW1nMX0gYWx0PVwiZWluZSBEYXRlaSBoZXJ1bnRlcmxhZGVuXCIgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezEyfSBtZD17Nn0gY2xhc3NOYW1lPXtgJHtzLmdyaWRJbWd9ICR7cy5ncmlkSW1nU219YH0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtoZWxwNGltZzJ9IGFsdD1cImVpbmUgRGF0ZWkgaG9jaGxhZGVuXCIgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKEhlbHApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL3JvdXRlcy9oZWxwL2VuLzFfY3JlYXRlX3Byb2plY3QvMV9vcGVuX2lkZS5wbmc/ZmZkYTk1YzhcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvcm91dGVzL2hlbHAvZW4vMV9jcmVhdGVfcHJvamVjdC8yX2NsaWNrX3BsdXMucG5nPzRhY2ZhMjFjXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL3JvdXRlcy9oZWxwL2VuLzFfY3JlYXRlX3Byb2plY3QvM19jcmVhdGVfcHJvamVjdC5wbmc/Mjk0YjRlN2FcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvcm91dGVzL2hlbHAvZW4vMV9jcmVhdGVfcHJvamVjdC80X29wZW5fcHJvamVjdC5wbmc/NmRhZDgwZmVcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvcm91dGVzL2hlbHAvZW4vMl9jcmVhdGVfZmlsZS8xX2NvbnRleHRfbWVudS5wbmc/NzEwZjM3MDJcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvcm91dGVzL2hlbHAvZW4vMl9jcmVhdGVfZmlsZS8yX2NyZWF0ZV9maWxlLnBuZz9mMzU0NDE1MFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9yb3V0ZXMvaGVscC9lbi8yX2NyZWF0ZV9maWxlLzNfb3Blbl9maWxlLnBuZz9hZjAyNGYyYVwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9yb3V0ZXMvaGVscC9lbi8zX29wZW5fc2ltdWxhdG9yLzFfZHJhZ190YWIucG5nP2U0NWY2ZTk1XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL3JvdXRlcy9oZWxwL2VuLzNfb3Blbl9zaW11bGF0b3IvMl9yZXN1bHQucG5nPzBkMTUwYWFlXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL3JvdXRlcy9oZWxwL2VuLzRfaW1wb3J0X2V4cG9ydC8xX2V4cG9ydC5wbmc/ZmZlODQzNTJcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvcm91dGVzL2hlbHAvZW4vNF9pbXBvcnRfZXhwb3J0LzJfaW1wb3J0LnBuZz82MTdiZGEyY1wiOyIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL3dpdGhTdHlsZXMnO1xuXG5pbXBvcnQgQWxlcnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21pc2MvTGluayc7XG5pbXBvcnQgUmVhZE9ubHlCbG9ja2x5IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaWRlL1JlYWRPbmx5QmxvY2tseSc7XG5cbmltcG9ydCB7IGhlZGdlaG9nQmxvY2tzLCBtaXNjQmxvY2tzIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9pZGUvVmlzdWFsRWRpdG9yL2Jsb2NrbHlfY29uZmlnJztcblxuaW1wb3J0IHMgZnJvbSAnLi4vSGVscC5zY3NzJztcblxuaW1wb3J0IGhlbHAxaW1nMSBmcm9tICcuLzFfY3JlYXRlX3Byb2plY3QvMV9vcGVuX2lkZS5wbmcnO1xuaW1wb3J0IGhlbHAxaW1nMiBmcm9tICcuLzFfY3JlYXRlX3Byb2plY3QvMl9jbGlja19wbHVzLnBuZyc7XG5pbXBvcnQgaGVscDFpbWczIGZyb20gJy4vMV9jcmVhdGVfcHJvamVjdC8zX2NyZWF0ZV9wcm9qZWN0LnBuZyc7XG5pbXBvcnQgaGVscDFpbWc0IGZyb20gJy4vMV9jcmVhdGVfcHJvamVjdC80X29wZW5fcHJvamVjdC5wbmcnO1xuaW1wb3J0IGhlbHAyaW1nMSBmcm9tICcuLzJfY3JlYXRlX2ZpbGUvMV9jb250ZXh0X21lbnUucG5nJztcbmltcG9ydCBoZWxwMmltZzIgZnJvbSAnLi8yX2NyZWF0ZV9maWxlLzJfY3JlYXRlX2ZpbGUucG5nJztcbmltcG9ydCBoZWxwMmltZzMgZnJvbSAnLi8yX2NyZWF0ZV9maWxlLzNfb3Blbl9maWxlLnBuZyc7XG5pbXBvcnQgaGVscDNpbWcxIGZyb20gJy4vM19vcGVuX3NpbXVsYXRvci8xX2RyYWdfdGFiLnBuZyc7XG5pbXBvcnQgaGVscDNpbWcyIGZyb20gJy4vM19vcGVuX3NpbXVsYXRvci8yX3Jlc3VsdC5wbmcnO1xuaW1wb3J0IGhlbHA0aW1nMSBmcm9tICcuLzRfaW1wb3J0X2V4cG9ydC8xX2V4cG9ydC5wbmcnO1xuaW1wb3J0IGhlbHA0aW1nMiBmcm9tICcuLzRfaW1wb3J0X2V4cG9ydC8yX2ltcG9ydC5wbmcnO1xuXG5mdW5jdGlvbiBIZWxwKCkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiIGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgIDw+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImgzXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgIEdldHRpbmcgU3RhcnRlZFxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgICBUaGUgSGVkZ2Vob2cgSURFIGFsbG93cyB5b3UgdG8gY3JlYXRlIGFuZCBydW4geW91ciBvd24gcHJvZ3JhbXMgZWFzaWx5LCB3aXRob3V0IGluc3RhbGxpbmdcbiAgICAgICAgICBleHRyYSBzb2Z0d2FyZSBvciBjcmVhdGluZyBhY2NvdW50cyBmaXJzdC4gV2UgcmVzcGVjdCB5b3VyIHByaXZhY3kgYW5kIHlvdXIgZGF0YSwgc28gd2VcbiAgICAgICAgICBkb24mYXBvczt0IHJlcXVpcmUgYW55IG9mIHlvdXIgZGF0YSB1bmxlc3MgYWJzb2x1dGVseSBuZWVkZWQgLSB0aGF0IGlzLCBiYXNpY2FsbHksIHRoZVxuICAgICAgICAgIGNvZGUgeW91IHdyaXRlIGFuZCBub3RoaW5nIGVsc2UuXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICAgIDxBbGVydCBzZXZlcml0eT1cImluZm9cIj5cbiAgICAgICAgICAgIFRoZSBIZWRnZWhvZyBJREUgaXMgc3RpbGwgYXQgdGhlIGJlZ2lubmluZy4gVGhpbmdzIG1heSBiZSByb3VnaCBhcm91bmQgdGhlIGVkZ2VzLCBhbmRcbiAgICAgICAgICAgIG5vdCBhbGwgZmVhdHVyZXMgYXJlIHRoZXJlIHlldC4gRnV0dXJlIGZlYXR1cmVzLCBzdWNoIGFzIHNoYXJpbmcgY29kZSB3aXRoIG90aGVycywgd2lsbFxuICAgICAgICAgICAgcmVxdWlyZSB5b3UgdG8gc2hhcmUgc29tZSBtb3JlIGRhdGEgd2l0aCB1cy4gVGhvc2UgZmVhdHVyZXMgd2lsbCBiZSBzdHJpY3RseSBvcHRpb25hbFxuICAgICAgICAgICAgYW5kIG9wdC1pbiwgdGhvdWdoLlxuICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvPlxuICAgICAgPD5cbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDJcIiB2YXJpYW50PVwiaDRcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgPHNwYW4gaWQ9XCJwcm9qZWN0XCI+Q3JlYXRpbmcgYSBwcm9qZWN0PC9zcGFuPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgICBBIHNvZnR3YXJlIHByb2plY3QgY29udGFpbnMgZmlsZXMgdGhhdCB3b3JrIHRvZ2V0aGVyIHRvIGNyZWF0ZSBhIHByb2dyYW0uIENyZWF0aW5nIG9uZSBpc1xuICAgICAgICAgIHRoZSBmaXJzdCB0aGluZyB5b3Ugd2lsbCBoYXZlIHRvIGRvIHRvIGdldCBzdGFydGVkLiBJbiB5b3VyeycgJ31cbiAgICAgICAgICA8TGluayB0bz1cIi9cIj5wcm9qZWN0IGxpc3Q8L0xpbms+LCBjbGljayBvbiB0aGUgJnF1b3Q7KyZxdW90OyBpY29uIGFuZCBjaG9vc2UgYSBuYW1lLiBBZnRlclxuICAgICAgICAgIHlvdSBjcmVhdGVkIHRoZSBwcm9qZWN0LCBjbGljayBvbiBpdCB0byBvcGVuIGl0LlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiIHBhcmFncmFwaD5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17M30gY2xhc3NOYW1lPXtgJHtzLmdyaWRJbWd9ICR7cy5ncmlkSW1nU219YH0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtoZWxwMWltZzF9IGFsdD1cIm9wZW4gSURFXCIgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXszfSBjbGFzc05hbWU9e2Ake3MuZ3JpZEltZ30gJHtzLmdyaWRJbWdTbX1gfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2hlbHAxaW1nMn0gYWx0PSdjbGljayBcIitcIiBpY29uJyAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gbWQ9ezN9IGNsYXNzTmFtZT17YCR7cy5ncmlkSW1nfSAke3MuZ3JpZEltZ1NtfWB9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aGVscDFpbWczfSBhbHQ9XCJuYW1lIGFuZCBjcmVhdGUgcHJvamVjdFwiIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBtZD17M30gY2xhc3NOYW1lPXtgJHtzLmdyaWRJbWd9ICR7cy5ncmlkSW1nU219YH0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtoZWxwMWltZzR9IGFsdD1cIm9wZW4gcHJvamVjdFwiIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgICBBZnRlciBvcGVuaW5nIHRoZSBwcm9qZWN0LCByaWdodCBjbGljayB0aGUgcHJvamVjdCByb290IHRvIGNyZWF0ZSBhIGZpbGUgaW4gaXQuIEluIHRoaXNcbiAgICAgICAgICBleGFtcGxlLCBsZXQmYXBvcztzIGNob29zZSAmcXVvdDtOZXcgQmxvY2tseSBGaWxlJnF1b3Q7ICZuZGFzaDsgQmxvY2tseSBhbGxvd3MgdGhlIHZpc3VhbFxuICAgICAgICAgIGNyZWF0aW9uIG9mIHByb2dyYW1zLiBBZnRlciBjcmVhdGluZyB0aGUgZmlsZSwgaXQgaXMgb3BlbmVkIGF1dG9tYXRpY2FsbHkgYW5kIHlvdSBzaG91bGRcbiAgICAgICAgICBzZWUgYW4gZW1wdHkgQmxvY2tseSB3b3Jrc3BhY2Ugd2hlcmUgeW91IGNhbiBjcmVhdGUgeW91ciBwcm9ncmFtLlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiIHBhcmFncmFwaD5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17NH0gY2xhc3NOYW1lPXtgJHtzLmdyaWRJbWd9ICR7cy5ncmlkSW1nU219YH0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtoZWxwMmltZzF9IGFsdD1cImNvbnRleHQgbWVudVwiIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17NH0gY2xhc3NOYW1lPXtgJHtzLmdyaWRJbWd9ICR7cy5ncmlkSW1nU219YH0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtoZWxwMmltZzJ9IGFsdD1cImNyZWF0ZSBmaWxlXCIgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXs0fSBjbGFzc05hbWU9e2Ake3MuZ3JpZEltZ30gJHtzLmdyaWRJbWdTbX1gfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2hlbHAyaW1nM30gYWx0PVwib3BlbiBmaWxlXCIgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvPlxuICAgICAgPD5cbiAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDJcIiB2YXJpYW50PVwiaDRcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgPHNwYW4gaWQ9XCJzaW11bGF0aW9uXCI+Q29udHJvbGxpbmcgYSBzaW11bGF0ZWQgcm9ib3Qgd2l0aCBCbG9ja2x5PC9zcGFuPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgICBCZWZvcmUgeW91IHN0YXJ0IGFkZGluZyBibG9ja3MgdG8geW91ciBwcm9ncmFtLCBsZXQmYXBvcztzIGxvb2sgYXQgdGhlIHNpbXVsYXRvci4gQ2xpY2sgb25cbiAgICAgICAgICB0aGUgWCxZLFogYXhpcyBpY29uIGFib3ZlIHRoZSBwcm9qZWN0IHRyZWUgdG8gb3BlbiBpdCBpbiBhIG5ldyB0YWIsIHRoZW4gZHJhZyB0aGF0IHRhYiB0b1xuICAgICAgICAgIHRoZSBib3R0b20gdG8gc2VlIEJsb2NrbHkgYW5kIHRoZSBzaW11bGF0b3IgYXQgdGhlIHNhbWUgdGltZS5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgPEdyaWQgaXRlbSBzbT17MTJ9IG1kPXs2fSBjbGFzc05hbWU9e2Ake3MuZ3JpZEltZ30gJHtzLmdyaWRJbWdMZ31gfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2hlbHAzaW1nMX0gYWx0PVwibW92aW5nIHRoZSBzaW11bGF0b3JcIiAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSBzbT17MTJ9IG1kPXs2fSBjbGFzc05hbWU9e2Ake3MuZ3JpZEltZ30gJHtzLmdyaWRJbWdMZ31gfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2hlbHAzaW1nMn0gYWx0PVwiQmxvY2tseSBhbmQgc2ltdWxhdG9yIHNpZGUgYnkgc2lkZVwiIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgICBUaGUgU2ltdWxhdG9yIChhbmQgdGhlIGNvbnNvbGUsIHdoaWNoIGlzIG9wZW5lZCB3aXRoIHRoZSBzZWNvbmQgYnV0dG9uIGFib3ZlIHRoZSBwcm9qZWN0XG4gICAgICAgICAgdHJlZSkgb3BlbnMgYXV0b21hdGljYWxseSB3aGVuIGEgcHJvZ3JhbSBnaXZlcyBjb21tYW5kcyB0byB0aGUgcm9ib3QgKG9yIG91dHB1dHMgdGV4dCxcbiAgICAgICAgICByZXNwZWN0aXZlbHkpIGlmIGl0IGlzIG5vdCBhbHJlYWR5IG9wZW4uIE5vbmV0aGVsZXNzIGl0IGlzIGFkdmlzYWJsZSB0byBhcnJhbmdlIHRoZXNlIHRhYnNcbiAgICAgICAgICBpbiBhZHZhbmNlLlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8Lz5cbiAgICAgIDw+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgyXCIgdmFyaWFudD1cImg0XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgIDxzcGFuIGlkPVwiYmxvY2tseVwiPkJsb2NrbHkgQ29tbWFuZHM8L3NwYW4+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoM1wiIHZhcmlhbnQ9XCJoNVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwiYmxvY2tseS1kcml2ZVwiPkRyaXZlPC9zcGFuPlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICBDb21tYW5kcyBpbiB0aGlzIGNhdGVnb3J5IGxldCB5b3UgZHJpdmUgdGhlIHJvYm90IGJ5IHN0YXJ0aW5nIG9yIHN0b3BwaW5nIHR3byBtb3RvcnMgYXRcbiAgICAgICAgICAgIHRoZSBzYW1lIHRpbWUuIE1vdG9ycyBjYW4gdXNlIHNwZWVkcyBiZXR3ZWVuIC0xMDAwIGFuZCArMTAwMC4gVGhlIHNpbXVsYXRlZCByb2JvdCZhcG9zO3NcbiAgICAgICAgICAgIGxlZnQgd2hlZWwgaXMgbW90b3IgMCwgdGhlIHJpZ2h0IHdoZWVsIG1vdG9yIDEuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgIDxSZWFkT25seUJsb2NrbHkgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNjBweFwiPlxuICAgICAgICAgICAgICB7aGVkZ2Vob2dCbG9ja3MuSEVER0VIT0dfTU9WRTJfVU5MSU1JVEVELnRvb2xib3hCbG9ja3MuZGVmYXVsdCgpfVxuICAgICAgICAgICAgPC9SZWFkT25seUJsb2NrbHk+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgIDxSZWFkT25seUJsb2NrbHkgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNjBweFwiPlxuICAgICAgICAgICAgICB7aGVkZ2Vob2dCbG9ja3MuSEVER0VIT0dfTU9WRTIudG9vbGJveEJsb2Nrcy5kZWZhdWx0KCl9XG4gICAgICAgICAgICA8L1JlYWRPbmx5QmxvY2tseT5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgVGhlc2UgY29tbWFuZHMgc3RhcnQgdGhlIG1vdG9ycy4gVGhlIHNlY29uZCB2YXJpYW50IGFsc28gYnJha2VzIHRoZSBtb3RvcnMgYWZ0ZXIgdGhlXG4gICAgICAgICAgICBzcGVjaWZpZWQgdGltZS5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgPFJlYWRPbmx5QmxvY2tseSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI1MHB4XCI+XG4gICAgICAgICAgICAgIHtoZWRnZWhvZ0Jsb2Nrcy5IRURHRUhPR19NT1RPUl9PRkYyLnRvb2xib3hCbG9ja3MuZGVmYXVsdCgpfVxuICAgICAgICAgICAgPC9SZWFkT25seUJsb2NrbHk+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgIDxSZWFkT25seUJsb2NrbHkgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNTBweFwiPlxuICAgICAgICAgICAgICB7aGVkZ2Vob2dCbG9ja3MuSEVER0VIT0dfQlJBS0UyLnRvb2xib3hCbG9ja3MuZGVmYXVsdCgpfVxuICAgICAgICAgICAgPC9SZWFkT25seUJsb2NrbHk+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgIFRoZXNlIGNvbW1hbmRzIHN0b3AgdGhlIG1vdG9ycy4gQ3VycmVudGx5IGJvdGggY29tbWFuZHMgZG8gdGhlIHNhbWUgdGhpbmcgaW4gdGhlXG4gICAgICAgICAgICBzaW11bGF0aW9uLiBUaGUgaWRlYSBpcyB0aGF0IHR1cm5pbmcgb2ZmIGxldHMgdGhlIHdoZWVscyByb2xsIG91dCwgd2hpbGUgYnJha2luZyBzdG9wc1xuICAgICAgICAgICAgdGhlIHJvYm90IHF1aWNrbHkuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8Lz5cbiAgICAgICAgPD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoM1wiIHZhcmlhbnQ9XCJoNVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwiYmxvY2tseS1tb3RvcnNcIj5Nb3RvcnM8L3NwYW4+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgIENvbW1hbmRzIGluIHRoaXMgY2F0ZWdvcnkgbGV0IHlvdSBjb250cm9sIHRoZSByb2JvdCZhcG9zO3MgbW90b3JzIGluZGl2aWR1YWxseS4gQXBhcnRcbiAgICAgICAgICAgIGZyb20gdGhhdCwgdGhlIGNvbW1hbmRzIHdvcmsgbGlrZSB0aG9zZSBpbiB0aGUgRHJpdmUgY2F0ZWdvcnkuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgIDxSZWFkT25seUJsb2NrbHkgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNjBweFwiPlxuICAgICAgICAgICAgICB7aGVkZ2Vob2dCbG9ja3MuSEVER0VIT0dfTU9WRV9VTkxJTUlURUQudG9vbGJveEJsb2Nrcy5kZWZhdWx0KCl9XG4gICAgICAgICAgICA8L1JlYWRPbmx5QmxvY2tseT5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgPFJlYWRPbmx5QmxvY2tseSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI2MHB4XCI+XG4gICAgICAgICAgICAgIHtoZWRnZWhvZ0Jsb2Nrcy5IRURHRUhPR19NT1ZFLnRvb2xib3hCbG9ja3MuZGVmYXVsdCgpfVxuICAgICAgICAgICAgPC9SZWFkT25seUJsb2NrbHk+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgIFRoZXNlIGNvbW1hbmRzIHN0YXJ0IGEgbW90b3IuIFRoZSBzZWNvbmQgdmFyaWFudCBhbHNvIGJyYWtlcyB0aGUgbW90b3IgYWZ0ZXIgdGhlXG4gICAgICAgICAgICBzcGVjaWZpZWQgdGltZS5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgPFJlYWRPbmx5QmxvY2tseSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI1MHB4XCI+XG4gICAgICAgICAgICAgIHtoZWRnZWhvZ0Jsb2Nrcy5IRURHRUhPR19NT1RPUl9PRkYudG9vbGJveEJsb2Nrcy5kZWZhdWx0KCl9XG4gICAgICAgICAgICA8L1JlYWRPbmx5QmxvY2tseT5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgPFJlYWRPbmx5QmxvY2tseSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI1MHB4XCI+XG4gICAgICAgICAgICAgIHtoZWRnZWhvZ0Jsb2Nrcy5IRURHRUhPR19CUkFLRS50b29sYm94QmxvY2tzLmRlZmF1bHQoKX1cbiAgICAgICAgICAgIDwvUmVhZE9ubHlCbG9ja2x5PlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICBUaGVzZSBjb21tYW5kcyBzdG9wIHRoZSBtb3Rvci4gQ3VycmVudGx5IGJvdGggY29tbWFuZHMgZG8gdGhlIHNhbWUgdGhpbmcgaW4gdGhlXG4gICAgICAgICAgICBzaW11bGF0aW9uLiBUaGUgaWRlYSBpcyB0aGF0IHR1cm5pbmcgb2ZmIGxldHMgdGhlIHdoZWVsIHJvbGwgb3V0LCB3aGlsZSBicmFraW5nIHN0b3BzXG4gICAgICAgICAgICB0aGUgbW90b3IgcXVpY2tseS5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvPlxuICAgICAgICA8PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgzXCIgdmFyaWFudD1cImg1XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJibG9ja2x5LXNlcnZvc1wiPlNlcnZvczwvc3Bhbj5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgU2Vydm9zIGhvbGQgYSBwb3NpdGlvbiB0aGF0IGlzIHNldCBmb3IgdGhlbS4gU2Vydm8gcG9zaXRpb25zIGFyZSBiZXR3ZWVuIDAgYW5kIDEwMDAsXG4gICAgICAgICAgICBjb3JyZXNwb25kaW5nIHRvIDDCsCBhbmQgMTgwwrAuIFRoZSBzaW11bGF0ZWQgcm9ib3QgZG9lcyBub3QgeWV0IGhhdmUgYW55IHNlcnZvcywgdGhvdWdoLlxuICAgICAgICAgICAgU3RheSB0dW5lZCFcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgPFJlYWRPbmx5QmxvY2tseSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI2MHB4XCI+XG4gICAgICAgICAgICAgIHtoZWRnZWhvZ0Jsb2Nrcy5IRURHRUhPR19TRVJWTy50b29sYm94QmxvY2tzLmRlZmF1bHQoKX1cbiAgICAgICAgICAgIDwvUmVhZE9ubHlCbG9ja2x5PlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICBUaGlzIGNvbW1hbmQgc2V0cyB0aGUgc2Vydm8gdG8gYSBjZXJ0YWluIHBvc2l0aW9uLiBFdmVuIGlmIHRoZXJlJmFwb3M7cyByZXNpc3RhbmNlIChlLmcuXG4gICAgICAgICAgICBhbiBvYnN0YWNsZSkgdGhlIHNlcnZvIHdpbGwgdHJ5IHRvIGhvbGQgaXRzIHBvc2l0aW9uLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICA8UmVhZE9ubHlCbG9ja2x5IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjUwcHhcIj5cbiAgICAgICAgICAgICAge2hlZGdlaG9nQmxvY2tzLkhFREdFSE9HX1NFUlZPX09GRi50b29sYm94QmxvY2tzLmRlZmF1bHQoKX1cbiAgICAgICAgICAgIDwvUmVhZE9ubHlCbG9ja2x5PlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICBUaGlzIGNvbW1hbmQgdHVybnMgdGhlIHNlcnZvIG9mZi4gVGhlIHNlcnZvIHdpbGwgbm90IGhvbGQgaXRzIHBvc2l0aW9uIGlmIHRoZXJlJmFwb3M7c1xuICAgICAgICAgICAgcmVzaXN0YW5jZS5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvPlxuICAgICAgICA8PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgzXCIgdmFyaWFudD1cImg1XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJibG9ja2x5LXNlbnNvcnNcIj5TZW5zb3Jlbjwvc3Bhbj5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgU2Vuc29ycyBsZXQgdGhlIHJvYm90IG9ic2VydmUgdGhlIHNpbXVsYXRlZCBlbnZpcm9ubWVudC4gU2Vuc29yIHZhbHVlcyBhcmUgYmV0d2VlbiAwIGFuZFxuICAgICAgICAgICAgNDA5NSwgdGhlIGV4YWN0IHZhbHVlIHJhbmdlcyBkZXBlbmQgb24gdGhlIHR5cGUgb2Ygc2Vuc29yIHRob3VnaC5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgVGhlIHNpbXVsYXRlZCByb2JvdCBoYXMgZWlnaHQgc2Vuc29ycyBhdCBpdHMgZnJvbnQ6XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBGb3VyIGxpbmUgc2Vuc29ycyB0aGF0IGNhbiBkZXRlY3QgYmxhY2sgbGluZXMgb24gdGhlIGdyb3VuZDsgdGhlc2UgYXJlIHNlbnNvcnMgMCB0b1xuICAgICAgICAgICAgICAgIDMsIGZyb20gbGVmdCB0byByaWdodC4gVGhlc2Ugc2Vuc29ycyBjaGFuZ2UgY29sb3IgdG8gb3JhbmdlIHdoZW4gYSBsaW5lIGlzIGRldGVjdGVkLlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+VmFsdWVzOjwvc3Ryb25nPiBUaGUgc2Vuc29yIHZhbHVlIGlzIGhpZ2ggd2hlbiBhIChkYXJrKSBsaW5lIGlzIGRldGVjdGVkLFxuICAgICAgICAgICAgICAgIG90aGVyd2lzZSAob24gbGlnaHQgc3VyZmFjZXMpIGl0IGlzIGxvdy5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIFRocmVlIGRpc3RhbmNlIHNlbnNvcnMgbG9va2luZyBmb3J3YXJkIGFuZCBzbGlnaHRseSB0byB0aGUgc2lkZXMgY2FuIGRldGVjdFxuICAgICAgICAgICAgICAgIG9ic3RhY2xlcyB3aXRob3V0IHRvdWNoaW5nIHRoZW07IHRoZXNlIGFyZSBzZW5zb3JzIDQgdG8gNiwgZnJvbSBsZWZ0IHRvIHJpZ2h0LiBUaGVcbiAgICAgICAgICAgICAgICByYXlzIGNvbWluZyBvdXQgb2YgdGhlIHJvYm90JmFwb3M7cyBmcm9udCBpbmRpY2F0ZSB0aGUgZGlyZWN0aW9uIGFuZCByYW5nZSBvZiB0aGVzZVxuICAgICAgICAgICAgICAgIHNlbnNvcnMuXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5WYWx1ZXM6PC9zdHJvbmc+IFRoZSBzZW5zb3IgdmFsdWUgaW5jcmVhc2VzIHdoZW4gZ2V0dGluZyBjbG9zZXIgdG8gYW5cbiAgICAgICAgICAgICAgICBvYnN0YWNsZSwgdGhlbiBkZWNyZWFzZXMgYWdhaW4gd2hlbiB0aGUgb2JzdGFjbGUgYWxtb3N0IHRvdWNoZXMgdGhlIHJvYm90LiBUaGlzXG4gICAgICAgICAgICAgICAgYmVoYXZpb3IgbW9kZWxzIGEgZGlzdGFuY2Ugc2Vuc29yIHZlcnkgcG9wdWxhciBpbiBob2JieSByb2JvdGljcy5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIE9uZSBidW1wIHNlbnNvciB0aGF0IGlzIGFsbW9zdCBhcyB3aWRlIGFzIHRoZSByb2JvdCBmcm9udDsgdGhpcyBpcyBzZW5zb3IgOC4gVGhpc1xuICAgICAgICAgICAgICAgIHNlbnNvciBjaGFuZ2VzIGNvbG9yIHRvIG9yYW5nZSB3aGVuIGEgbGluZSBpcyBkZXRlY3RlZC5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPlZhbHVlczo8L3N0cm9uZz4gVGhlIHNlbnNvciB2YWx1ZSBpcyBsb3cgd2hlbiBhIGNvbGxpc2lvbiBpcyBkZXRlY3RlZC4gVGhpc1xuICAgICAgICAgICAgICAgIGJlaGF2aW9yIG1vZGVscyBhICZxdW90O3B1bGwtdXAmcXVvdDsgY2lyY3VpdCB0aGF0IGlzIG9mdGVuIHVzZWQgZm9yIHRvdWNoIHNlbnNvcnMuXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICBTZW5zb3JzIGNvbWUgaW4gdHdvIHZhcmlldGllcywgYW5hbG9nIGFuZCBkaWdpdGFsOlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5BbmFsb2c8L3N0cm9uZz4gc2Vuc29ycyBjYW4gdGFrZSBvbiBtYW55IGRpZmZlcmVudCB2YWx1ZXM7IGEgZ29vZCBleGFtcGxlIGlzXG4gICAgICAgICAgICAgICAgdGhlIGRpc3RhbmNlIHNlbnNvci4gVG8gdXNlIGFuIGFuYWxvZyBzZW5zb3IsIHlvdSBoYXZlIHRvIHdvcmsgd2l0aCB0aGUgbnVtZXJpY1xuICAgICAgICAgICAgICAgIHZhbHVlcyBiZXR3ZWVuIDAgYW5kIDQwOTUuXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkRpZ2l0YWw8L3N0cm9uZz4gc2Vuc29ycyBvbmx5IGhhdmUgdHdvIHBvc3NpYmxlIHN0YXRlcywgZS5nLlxuICAgICAgICAgICAgICAgICZxdW90O2NvbGxpc2lvbiZxdW90OyBhbmQgJnF1b3Q7bm8gY29sbGlzaW9uJnF1b3Q7IG9yICZxdW90O2xpbmUmcXVvdDsgb3IgJnF1b3Q7bm9cbiAgICAgICAgICAgICAgICBsaW5lJnF1b3Q7LiBGb3IgdGhlc2Ugc2Vuc29ycywgeW91IGNhbiBzaW1wbGlmeSB5b3VyIHdvcmsgYnkgdXNpbmcgZGlnaXRhbCB2YWx1ZXM6XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICBBbmFsb2cgdmFsdWVzIDAgYmlzIDIwNDc6IERpZ2l0YWwgdmFsdWUgPGNvZGU+ZmFsc2U8L2NvZGU+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICBBbmFsb2cgdmFsdWVzIDIwNDggYmlzIDQwOTU6IERpZ2l0YWwgdmFsdWUgPGNvZGU+dHJ1ZTwvY29kZT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgIDxSZWFkT25seUJsb2NrbHkgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNTBweFwiPlxuICAgICAgICAgICAgICB7aGVkZ2Vob2dCbG9ja3MuSEVER0VIT0dfUkVBRF9ESUdJVEFMLnRvb2xib3hCbG9ja3MuZGVmYXVsdCgpfVxuICAgICAgICAgICAgPC9SZWFkT25seUJsb2NrbHk+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgIFJlYWRzIHRoZSBkaWdpdGFsIHZhbHVlIG9mIGEgc2Vuc29yLlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICA8UmVhZE9ubHlCbG9ja2x5IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjUwcHhcIj5cbiAgICAgICAgICAgICAge2hlZGdlaG9nQmxvY2tzLkhFREdFSE9HX1JFQURfQU5BTE9HLnRvb2xib3hCbG9ja3MuZGVmYXVsdCgpfVxuICAgICAgICAgICAgPC9SZWFkT25seUJsb2NrbHk+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgIDxSZWFkT25seUJsb2NrbHkgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNjBweFwiPlxuICAgICAgICAgICAgICB7aGVkZ2Vob2dCbG9ja3MuSEVER0VIT0dfUkVBRF9BTkFMT0cudG9vbGJveEJsb2Nrcy5jb21wYXJpc29uKCl9XG4gICAgICAgICAgICA8L1JlYWRPbmx5QmxvY2tseT5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgUmVhZHMgdGhlIGFuYWxvZyB2YWx1ZSBvZiBhIHNlbnNvci4gVGhlIHNlY29uZCBleGFtcGxlIGNvbXBhcmVzIHRoZSB2YWx1ZSB0byBhIHRocmVzaG9sZFxuICAgICAgICAgICAgdG8gY29udmVydCBpdCB0byBhIChkaWdpdGFsKSB0cnV0aCB2YWx1ZSAodHJ1ZS9mYWxzZSkuIFRoZSB0aHJlc2hvbGQgb2YgMjA0OCBsZWFkcyB0b1xuICAgICAgICAgICAgdGhlIHNhbWUgYmVoYXZpb3IgYXMgdGhlIGJsb2NrIGZvciByZWFkaW5nIGEgZGlnaXRhbCB2YWx1ZSwgYnV0IHVzaW5nIHRoZSBjb21wYXJpc29uXG4gICAgICAgICAgICBibG9jayBsZXRzIHlvdSBhZGp1c3QgdGhlIHRocmVzaG9sZC5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvPlxuICAgICAgICA8PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgzXCIgdmFyaWFudD1cImg1XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJibG9ja2x5LW1pc2NcIj5NaXNjZWxsYW5lb3VzPC9zcGFuPlxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgICA8UmVhZE9ubHlCbG9ja2x5IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjYwcHhcIj5cbiAgICAgICAgICAgICAge2hlZGdlaG9nQmxvY2tzLkhFREdFSE9HX1NMRUVQLnRvb2xib3hCbG9ja3MuZGVmYXVsdCgpfVxuICAgICAgICAgICAgPC9SZWFkT25seUJsb2NrbHk+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgIFRoaXMgYmxvY2sgbGV0cyB0aGUgcHJvZ3JhbSBwYXVzZSBmb3IgdGhlIHNwZWNpZmllZCBkdXJhdGlvbi4gSWYgYW55IG1vdG9ycyBhcmUgdHVybmVkXG4gICAgICAgICAgICBvbiwgdGhleSB3aWxsIGNvbnRpbnVlIHRvIG1vdmUgZHVyaW5nIHRoYXQgdGltZS5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICAgICAgPFJlYWRPbmx5QmxvY2tseSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI2MHB4XCI+XG4gICAgICAgICAgICAgIHttaXNjQmxvY2tzLlBSSU5UX0JMT0NLLnRvb2xib3hCbG9ja3MuZGVmYXVsdCgpfVxuICAgICAgICAgICAgPC9SZWFkT25seUJsb2NrbHk+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgICAgIFRoaXMgY29tbWFuZCBkaXNwbGF5cyBhIHZhbHVlIG9uIHRoZSBjb25zb2xlLiBUaGUgdmFsdWUgbWF5IGJlIGEgdGV4dCwgYSBudW1iZXIgb3IgYVxuICAgICAgICAgICAgZGlnaXRhbCB0cnV0aCB2YWx1ZS4gSXQmYXBvcztzIG9mdGVuIHVzZWZ1bCB0byBkaXNwbGF5IHNlbnNvciB2YWx1ZXMgd2hlbiBhIHByb2dyYW1cbiAgICAgICAgICAgIGlzbiZhcG9zO3QgZG9pbmcgd2hhdCBpdCBzaG91bGQuXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8Lz5cbiAgICAgIDwvPlxuICAgICAgPD5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICAgIE5vdyBsZXQmYXBvcztzIHRyeSBvdXQgYSBzaW1wbGUgcHJvZ3JhbTpcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgPFJlYWRPbmx5QmxvY2tseSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxNjBweFwiPlxuICAgICAgICAgICAgPGJsb2NrIHR5cGU9XCJoZWRnZWhvZ19tb3ZlMl91bmxpbWl0ZWRcIj5cbiAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XCJQT1JUMVwiPjA8L2ZpZWxkPlxuICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cIlBPUlQyXCI+MTwvZmllbGQ+XG4gICAgICAgICAgICAgIDx2YWx1ZSBuYW1lPVwiU1BFRUQxXCI+XG4gICAgICAgICAgICAgICAgPHNoYWRvdyB0eXBlPVwibWF0aF9udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVwiTlVNXCI+MTAwMDwvZmllbGQ+XG4gICAgICAgICAgICAgICAgPC9zaGFkb3c+XG4gICAgICAgICAgICAgIDwvdmFsdWU+XG4gICAgICAgICAgICAgIDx2YWx1ZSBuYW1lPVwiU1BFRUQyXCI+XG4gICAgICAgICAgICAgICAgPHNoYWRvdyB0eXBlPVwibWF0aF9udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVwiTlVNXCI+MTAwMDwvZmllbGQ+XG4gICAgICAgICAgICAgICAgPC9zaGFkb3c+XG4gICAgICAgICAgICAgIDwvdmFsdWU+XG4gICAgICAgICAgICAgIDxuZXh0PlxuICAgICAgICAgICAgICAgIDxibG9jayB0eXBlPVwiY29udHJvbHNfd2hpbGVVbnRpbFwiPlxuICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XCJNT0RFXCI+V0hJTEU8L2ZpZWxkPlxuICAgICAgICAgICAgICAgICAgPHZhbHVlIG5hbWU9XCJCT09MXCI+XG4gICAgICAgICAgICAgICAgICAgIDxibG9jayB0eXBlPVwiaGVkZ2Vob2dfcmVhZF9kaWdpdGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XCJQT1JUXCI+ODwvZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XG4gICAgICAgICAgICAgICAgICA8L3ZhbHVlPlxuICAgICAgICAgICAgICAgICAgPHN0YXRlbWVudCBuYW1lPVwiRE9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJsb2NrIHR5cGU9XCJoZWRnZWhvZ19zbGVlcFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZSBuYW1lPVwiVElNRVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNoYWRvdyB0eXBlPVwibWF0aF9udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XCJOVU1cIj4wLjAxPC9maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2hhZG93PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdmFsdWU+XG4gICAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XG4gICAgICAgICAgICAgICAgICA8L3N0YXRlbWVudD5cbiAgICAgICAgICAgICAgICAgIDxuZXh0PlxuICAgICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cImhlZGdlaG9nX2JyYWtlMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVwiUE9SVDFcIj4wPC9maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cIlBPUlQyXCI+MTwvZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XG4gICAgICAgICAgICAgICAgICA8L25leHQ+XG4gICAgICAgICAgICAgICAgPC9ibG9jaz5cbiAgICAgICAgICAgICAgPC9uZXh0PlxuICAgICAgICAgICAgPC9ibG9jaz5cbiAgICAgICAgICA8L1JlYWRPbmx5QmxvY2tseT5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgICAgQ3JlYXRlIHRoaXMgcHJvZ3JhbSBpbiB5b3VyIHByb2plY3QsIHRoZW4gY2xpY2sgdGhlIGdyZWVuICZxdW90O1BsYXkmcXVvdDsgYnV0dG9uOyB5b3VcbiAgICAgICAgICB3aWxsIHNlZSB0aGUgcm9ib3QgZHJpdmluZyB0byB0aGUgb3RoZXIgc2lkZSBvZiB0aGUgc2ltdWxhdGlvbiBhbmQgc3RvcHBpbmcgYXQgdGhlIHdhbGwuXG4gICAgICAgICAgSW4gZGV0YWlsLCB3aGF0IGhhcHBlbmVkIGlzIHRoZSBmb2xsb3dpbmc6XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5UaGUgZmlyc3QgYmxvY2sgbGV0IHRoZSByb2JvdCBtb3ZlIGZvcndhcmQuPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgVGhlIG5leHQgYmxvY2sgaXMgYSBsb29wLCBydW5uaW5nIHdoaWxlIHRoZSBzZW5zb3Igb24gcG9ydCA4IGhhcyBhIGhpZ2ggZGlnaXRhbCB2YWx1ZS5cbiAgICAgICAgICAgICAgU2Vuc29yIDggaXMgdGhlIGJ1bXAgc2Vuc29yLCBhbmQgaGlnaCB2YWx1ZXMgbWVhbiBubyBjb2xsaXNvbi4gSW4gb3RoZXIgd29yZHMsIHRoZVxuICAgICAgICAgICAgICBsb29wIHJlcGVhdHMgdW50aWwgYSBjb2xsaXNpb24gaXMgZGV0ZWN0ZWQuXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICBJbnNpZGUgdGhlIGxvb3AsIHRoZSBwcm9ncmFtIHNpbXBseSBzbGVlcHMuIEV2ZW4gdGhvdWdoIHRoZSBwcm9ncmFtIHBhdXNlcywgdGhlIG1vdG9yc1xuICAgICAgICAgICAgICBhcmUgc3RpbGwgbW92aW5nLiBUaGF0IG1lYW5zIHRoYXQgdGhlIHJvYm90IHdpbGwgY29udGludWUgbW92aW5nIGFzIGxvbmcgYXMgdGhlcmUgd2FzXG4gICAgICAgICAgICAgIG5vIGNvbGxpc2lvbi5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIEFmdGVyIHRoZSBsb29wLCBpLmUuIGFzIHNvb24gYXMgdGhlcmUgd2FzIGEgY29sbGlzaW9uLCB0aGUgcm9ib3QgaXMgc3RvcHBlZC4gVGhpcyBpc1xuICAgICAgICAgICAgICB0aGUgbGFzdCBjb21tYW5kLCBzbyB0aGUgcHJvZ3JhbSBpcyBmaW5pc2hlZC5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC8+XG4gICAgICA8PlxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMlwiIHZhcmlhbnQ9XCJoNFwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICA8c3BhbiBpZD1cImV4cG9ydC1pbXBvcnRcIj5FeHBvcnRpbmcgJiBpbXBvcnRpbmcgZmlsZXM8L3NwYW4+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICAgIFRvIGRvd25sb2FkIG9uZSBvZiB5b3VyIGZpbGVzIHNvIHRoYXQgeW91IGNhbiwgZm9yIGV4YW1wbGUsIHNoYXJlIGl0IHdpdGggb3RoZXJzLCByaWdodFxuICAgICAgICAgIGNsaWNrIG9uIHRoYXQgZmlsZSBhbmQgY2hvb3NlICZxdW90O0Rvd25sb2FkJnF1b3Q7LiBMaWtld2lzZSwgdG8gaW1wb3J0IGEgZmlsZSBpbnRvIHRoZVxuICAgICAgICAgIEhlZGdlaG9nIElERSwgcmlnaHQgY2xpY2sgb24gYSBmb2xkZXIgYW5kIGNob29zZSAmcXVvdDtVcGxvYWQmcXVvdDsuIEJld2FyZSwgY3VycmVudGx5IHRoZVxuICAgICAgICAgIEhlZGdlaG9nIElERSByZXBsYWNlcyBleGlzdGluZyBmaWxlcyB3aXRob3V0IHdhcm5pbmchXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICAgIERlc3BpdGUgdGhlIG5hbWUgb2YgdGhlc2Ugb3BlcmF0aW9ucywgeW91ciBmaWxlcyBhcmUgc3RvcmVkIGxvY2FsbHkgaW4geW91ciBicm93c2VyLCBub3RcbiAgICAgICAgICBvbiBvdXIgc2VydmVycy4gRnV0dXJlIGZlYXR1cmVzIG1heSBhbGxvdyB0aGF0LCBidXQgeW91IHdpbGwgYWx3YXlzIGJlIGFza2VkIGlmIHlvdSB3YW50XG4gICAgICAgICAgdG8gc2hhcmUgZGF0YSB3aXRoIHVzLlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiIHBhcmFncmFwaD5cbiAgICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJpbmZvXCI+XG4gICAgICAgICAgICBVcC0gYW5kIGRvd25sb2FkaW5nIHdob2xlIGZvbGRlcnMgaXMgbm90IHBvc3NpYmxlIGF0IHRoZSBtb21lbnQsIHNvcnJ5IVxuICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezEyfSBtZD17Nn0gY2xhc3NOYW1lPXtgJHtzLmdyaWRJbWd9ICR7cy5ncmlkSW1nU219YH0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtoZWxwNGltZzF9IGFsdD1cImRvd25sb2FkIGEgZmlsZVwiIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHNtPXsxMn0gbWQ9ezZ9IGNsYXNzTmFtZT17YCR7cy5ncmlkSW1nfSAke3MuZ3JpZEltZ1NtfWB9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aGVscDRpbWcyfSBhbHQ9XCJ1cGxvYWQgYSBmaWxlXCIgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKEhlbHApO1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRW4gZnJvbSAnLi9lbi9IZWxwJztcbmltcG9ydCBEZSBmcm9tICcuL2RlL0hlbHAnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xuXG5pbXBvcnQgeyBMb2NhbGVTZWxlY3RvciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbG9jYWxlJztcbmltcG9ydCB7IHR5cGUgTG9jYWxlTWFwIH0gZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zJztcblxuY29uc3QgSEVMUF9DT01QT05FTlRTOiBMb2NhbGVNYXA8UmVhY3QuQ29tcG9uZW50VHlwZTx7fT4+ID0ge1xuICBlbjogRW4sXG4gIGRlOiBEZSxcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGFjdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0hlbHAnLFxuICAgIGNodW5rczogWydoZWxwJ10sXG4gICAgY29tcG9uZW50OiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8TG9jYWxlU2VsZWN0b3IgY29tcG9uZW50cz17SEVMUF9DT01QT05FTlRTfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBRUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQURBO0FBQ0E7QUFJQTtBQUNBLGlCQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBQ0E7QUFtQkE7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1Y0E7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0VBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDamNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9