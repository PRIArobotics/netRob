require("source-map-support").install();
exports.ids = ["contest"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/contest/Contest.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.Contest-root-hDyK7 {\n  padding: 40px 20px;\n}\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/netRob/HedgehogIDE (another copy)/src/routes/contest/Contest.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,gCAAgC;EAChC,+BAA+B;;EAE/B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;;AAED;EACE,mBAAmB;CACpB","file":"Contest.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.root {\n  padding: 40px 20px;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Contest-root-hDyK7"
};

/***/ }),

/***/ "./src/routes/contest/Contest.js":
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
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Contest_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/routes/contest/Contest.scss");
/* harmony import */ var _Contest_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Contest_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/sarah/Documents/Arbeit/netRob/HedgehogIDE (another copy)/src/routes/contest/Contest.js";







function Contest() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {
    maxWidth: "md",
    className: _Contest_scss__WEBPACK_IMPORTED_MODULE_5___default.a.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    component: "h1",
    variant: "h3",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "Robotics Day 2020 Modellierungswettbewerb"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "Im Rahmen des Robotics Day 2020 findet ein Modellierungs-Wettbewerb statt. Im Vorfeld wird ein simulierter Roboter hier in der Hedgehog-IDE gesteuert, um in zwei verschiedenen Szenarien Aufgaben zu erf\xFCllen. Dabei ist die visuelle Programmierumgebung Blockly zu benutzen, die den Programmcode vom Ausf\xFChrungstarget abstrahiert: zun\xE4chst ein simulierter, am Robotics Day ein echter Roboter."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2___default.a, {
    severity: "info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Die L\xF6sungen f\xFCr beide Aufgaben k\xF6nnen bis 17. Februar per Email an modellierung@roboticsday.at eingeschickt werden. Fragen gehen ebenfalls an diese Adresse. Die Hedgehog IDE befindet sich noch in Entwicklung, wir bitten deshalb kleinere Fehler zu verzeihen.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "Am Robotics Day werden die L\xF6sungen auf echten Robotern getestet. Eine Fachjury bestehend aus Experten von SparxSystems und PRIA bewertet sowohl das Abschneiden der Modelle am echten Roboter, als auch die Struktur der Modelle."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "Als Hauptpreis lockt ein Hedgehog Roboter-Controller im Wert von \u20AC250! Um den Hauptpreis zu gewinnen ist Anwesenheit am Robotics Day notwendig, wir freuen uns aber auch \xFCber reine Online-Teilnahmen."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    component: "h2",
    variant: "h4",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "Aufgabe 1 \u2013 Irrgarten"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "Ein einfach zusammenh\xE4ngender Irrgarten kann mit der", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "https://de.wikipedia.org/wiki/L%C3%B6sungsalgorithmen_f%C3%BCr_Irrg%C3%A4rten#Rechte-Hand-Methode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Rechte-Hand-Methode"), ' ', "gel\xF6st werden. In Aufgabe 1 ist so ein Irrgarten-Netz in schwarz am Boden markiert."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, "Entwirf ein Programm, mit dem der Roboter entsprechend der Rechte-Hand-Methode endlos durch das Netz navigiert. Im Gegensatz zur Skizze auf Wikipedia muss der Roboter dabei alle Kreuzungspunkte und Sackgassen erkennen und eine entsprechende Entscheidung treffen. Das bedeutet, es ist nicht ausreichend w\xF6rtlich genommen das Netz nach rechts fahrend zu verfolgen! Der Roboter muss erkennen, dass es mehrere M\xF6glichkeiten gibt den Weg fortzusetzen (also eine Kreuzung vorliegt) bzw. gar keine (also eine Sackgasse). Danach muss entsprechend der Methode der rechtest-m\xF6gliche weg eingeschlagen werden."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "Eine Ausgabe o.\xC4. ist nicht n\xF6tig, es ist aber mit der Blockly-Kommentarfunktion zu dokumentieren, wie die Erkennung passiert und Entscheidungen vorgenommen werden."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    component: "h2",
    variant: "h4",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, "Aufgabe 2 \u2013 Navigation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, "Aufbauend auf der L\xF6sung zur Aufgabe 1 sollte die zweite Aufgabe leicht zu l\xF6sen sein: finde den Weg von der links oberen zur rechts unteren, schr\xE4g gegen\xFCber liegenden Ecke. Dort soll das Programm beendet werden und der Roboter stehen bleiben."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, "Wie in Aufgabe 1 sollen die Entscheidungspunkte im Modell deutlich identifizierbar sein. Das bedeutet, dass der Ablauf"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "body1",
    component: "div",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, "fahre an der ersten Kreuzung gerade aus,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, "biege an der zweiten Kreuzung rechts ab,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, "biege an der dritten Kreuzung links ab"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "body1",
    paragraph: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, "im Modell leicht erkennbar sein m\xFCsste. Nutze wieder die Blockly-Kommentarfunktion, um wichtige Stellen zu dokumentieren."));
}

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_Contest_scss__WEBPACK_IMPORTED_MODULE_5___default.a)(Contest));

/***/ }),

/***/ "./src/routes/contest/Contest.scss":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/contest/Contest.scss");
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
      module.hot.accept("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/contest/Contest.scss", function() {
        css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/contest/Contest.scss");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/routes/contest/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Contest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/routes/contest/Contest.js");
/* harmony import */ var _components_layout_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/layout/Layout/Layout.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/netRob/HedgehogIDE (another copy)/src/routes/contest/index.js";

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




async function action() {
  return {
    title: 'Contest',
    chunks: ['contest'],
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_layout_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Contest__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2NvbnRlc3QuanMiLCJzb3VyY2VzIjpbIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvbmV0Um9iL0hlZGdlaG9nSURFIChhbm90aGVyIGNvcHkpL3NyYy9yb3V0ZXMvY29udGVzdC9Db250ZXN0LnNjc3MiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L25ldFJvYi9IZWRnZWhvZ0lERSAoYW5vdGhlciBjb3B5KS9zcmMvcm91dGVzL2NvbnRlc3QvQ29udGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2NvbnRlc3QvQ29udGVzdC5zY3NzPzU0MDQiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L25ldFJvYi9IZWRnZWhvZ0lERSAoYW5vdGhlciBjb3B5KS9zcmMvcm91dGVzL2NvbnRlc3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6ICdTZWdvZSBVSScsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTAwMHB4O1xcblxcbiAgLypcXG4gICAqIEFwcGxpY2F0aW9uIHNwZWNpZmljXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0taGVkZ2Vob2ctZ3JlZW4tbGlnaHQ6ICMzOGI0NDk7XFxuICAtLWhlZGdlaG9nLWdyZWVuLWRhcms6ICMwMDdjM2M7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4uQ29udGVzdC1yb290LWhEeUs3IHtcXG4gIHBhZGRpbmc6IDQwcHggMjBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvbmV0Um9iL0hlZGdlaG9nSURFIChhbm90aGVyIGNvcHkpL3NyYy9yb3V0ZXMvY29udGVzdC9Db250ZXN0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSDs7Ozs7OztHQU9HOztBQUVIO0VBQ0U7O2dGQUU4RTs7RUFFOUUsa0VBQWtFOztFQUVsRTs7Z0ZBRThFOztFQUU5RSw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLGdDQUFnQztFQUNoQywrQkFBK0I7O0VBRS9COztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQztDQUMzRDs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQlwiLFwiZmlsZVwiOlwiQ29udGVzdC5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6ICdTZWdvZSBVSScsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTAwMHB4O1xcblxcbiAgLypcXG4gICAqIEFwcGxpY2F0aW9uIHNwZWNpZmljXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0taGVkZ2Vob2ctZ3JlZW4tbGlnaHQ6ICMzOGI0NDk7XFxuICAtLWhlZGdlaG9nLWdyZWVuLWRhcms6ICMwMDdjM2M7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4ucm9vdCB7XFxuICBwYWRkaW5nOiA0MHB4IDIwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiQ29udGVzdC1yb290LWhEeUs3XCJcbn07IiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvd2l0aFN0eWxlcyc7XG5cbmltcG9ydCBBbGVydCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5pbXBvcnQgcyBmcm9tICcuL0NvbnRlc3Quc2Nzcyc7XG5cbmZ1bmN0aW9uIENvbnRlc3QoKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCIgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDNcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgIFJvYm90aWNzIERheSAyMDIwIE1vZGVsbGllcnVuZ3N3ZXR0YmV3ZXJiXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgIEltIFJhaG1lbiBkZXMgUm9ib3RpY3MgRGF5IDIwMjAgZmluZGV0IGVpbiBNb2RlbGxpZXJ1bmdzLVdldHRiZXdlcmIgc3RhdHQuIEltIFZvcmZlbGQgd2lyZFxuICAgICAgICBlaW4gc2ltdWxpZXJ0ZXIgUm9ib3RlciBoaWVyIGluIGRlciBIZWRnZWhvZy1JREUgZ2VzdGV1ZXJ0LCB1bSBpbiB6d2VpIHZlcnNjaGllZGVuZW5cbiAgICAgICAgU3plbmFyaWVuIEF1ZmdhYmVuIHp1IGVyZsO8bGxlbi4gRGFiZWkgaXN0IGRpZSB2aXN1ZWxsZSBQcm9ncmFtbWllcnVtZ2VidW5nIEJsb2NrbHkgenVcbiAgICAgICAgYmVudXR6ZW4sIGRpZSBkZW4gUHJvZ3JhbW1jb2RlIHZvbSBBdXNmw7xocnVuZ3N0YXJnZXQgYWJzdHJhaGllcnQ6IHp1bsOkY2hzdCBlaW4gc2ltdWxpZXJ0ZXIsXG4gICAgICAgIGFtIFJvYm90aWNzIERheSBlaW4gZWNodGVyIFJvYm90ZXIuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIiBwYXJhZ3JhcGg+XG4gICAgICAgIDxBbGVydCBzZXZlcml0eT1cImluZm9cIj5cbiAgICAgICAgICBEaWUgTMO2c3VuZ2VuIGbDvHIgYmVpZGUgQXVmZ2FiZW4ga8O2bm5lbiBiaXMgMTcuIEZlYnJ1YXIgcGVyIEVtYWlsIGFuXG4gICAgICAgICAgbW9kZWxsaWVydW5nQHJvYm90aWNzZGF5LmF0IGVpbmdlc2NoaWNrdCB3ZXJkZW4uIEZyYWdlbiBnZWhlbiBlYmVuZmFsbHMgYW4gZGllc2UgQWRyZXNzZS5cbiAgICAgICAgICBEaWUgSGVkZ2Vob2cgSURFIGJlZmluZGV0IHNpY2ggbm9jaCBpbiBFbnR3aWNrbHVuZywgd2lyIGJpdHRlbiBkZXNoYWxiIGtsZWluZXJlIEZlaGxlciB6dVxuICAgICAgICAgIHZlcnplaWhlbi5cbiAgICAgICAgPC9BbGVydD5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgQW0gUm9ib3RpY3MgRGF5IHdlcmRlbiBkaWUgTMO2c3VuZ2VuIGF1ZiBlY2h0ZW4gUm9ib3Rlcm4gZ2V0ZXN0ZXQuIEVpbmUgRmFjaGp1cnkgYmVzdGVoZW5kXG4gICAgICAgIGF1cyBFeHBlcnRlbiB2b24gU3BhcnhTeXN0ZW1zIHVuZCBQUklBIGJld2VydGV0IHNvd29obCBkYXMgQWJzY2huZWlkZW4gZGVyIE1vZGVsbGUgYW0gZWNodGVuXG4gICAgICAgIFJvYm90ZXIsIGFscyBhdWNoIGRpZSBTdHJ1a3R1ciBkZXIgTW9kZWxsZS5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgQWxzIEhhdXB0cHJlaXMgbG9ja3QgZWluIEhlZGdlaG9nIFJvYm90ZXItQ29udHJvbGxlciBpbSBXZXJ0IHZvbiDigqwyNTAhIFVtIGRlbiBIYXVwdHByZWlzIHp1XG4gICAgICAgIGdld2lubmVuIGlzdCBBbndlc2VuaGVpdCBhbSBSb2JvdGljcyBEYXkgbm90d2VuZGlnLCB3aXIgZnJldWVuIHVucyBhYmVyIGF1Y2ggw7xiZXIgcmVpbmVcbiAgICAgICAgT25saW5lLVRlaWxuYWhtZW4uXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMlwiIHZhcmlhbnQ9XCJoNFwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgQXVmZ2FiZSAxICZuZGFzaDsgSXJyZ2FydGVuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgIEVpbiBlaW5mYWNoIHp1c2FtbWVuaMOkbmdlbmRlciBJcnJnYXJ0ZW4ga2FubiBtaXQgZGVyeycgJ31cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZGUud2lraXBlZGlhLm9yZy93aWtpL0wlQzMlQjZzdW5nc2FsZ29yaXRobWVuX2YlQzMlQkNyX0lycmclQzMlQTRydGVuI1JlY2h0ZS1IYW5kLU1ldGhvZGVcIj5cbiAgICAgICAgICBSZWNodGUtSGFuZC1NZXRob2RlXG4gICAgICAgIDwvYT57JyAnfVxuICAgICAgICBnZWzDtnN0IHdlcmRlbi4gSW4gQXVmZ2FiZSAxIGlzdCBzbyBlaW4gSXJyZ2FydGVuLU5ldHogaW4gc2Nod2FyeiBhbSBCb2RlbiBtYXJraWVydC5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgRW50d2lyZiBlaW4gUHJvZ3JhbW0sIG1pdCBkZW0gZGVyIFJvYm90ZXIgZW50c3ByZWNoZW5kIGRlciBSZWNodGUtSGFuZC1NZXRob2RlIGVuZGxvcyBkdXJjaFxuICAgICAgICBkYXMgTmV0eiBuYXZpZ2llcnQuIEltIEdlZ2Vuc2F0eiB6dXIgU2tpenplIGF1ZiBXaWtpcGVkaWEgbXVzcyBkZXIgUm9ib3RlciBkYWJlaSBhbGxlXG4gICAgICAgIEtyZXV6dW5nc3B1bmt0ZSB1bmQgU2Fja2dhc3NlbiBlcmtlbm5lbiB1bmQgZWluZSBlbnRzcHJlY2hlbmRlIEVudHNjaGVpZHVuZyB0cmVmZmVuLiBEYXNcbiAgICAgICAgYmVkZXV0ZXQsIGVzIGlzdCBuaWNodCBhdXNyZWljaGVuZCB3w7ZydGxpY2ggZ2Vub21tZW4gZGFzIE5ldHogbmFjaCByZWNodHMgZmFocmVuZCB6dVxuICAgICAgICB2ZXJmb2xnZW4hIERlciBSb2JvdGVyIG11c3MgZXJrZW5uZW4sIGRhc3MgZXMgbWVocmVyZSBNw7ZnbGljaGtlaXRlbiBnaWJ0IGRlbiBXZWdcbiAgICAgICAgZm9ydHp1c2V0emVuIChhbHNvIGVpbmUgS3JldXp1bmcgdm9ybGllZ3QpIGJ6dy4gZ2FyIGtlaW5lIChhbHNvIGVpbmUgU2Fja2dhc3NlKS4gRGFuYWNoIG11c3NcbiAgICAgICAgZW50c3ByZWNoZW5kIGRlciBNZXRob2RlIGRlciByZWNodGVzdC1tw7ZnbGljaGUgd2VnIGVpbmdlc2NobGFnZW4gd2VyZGVuLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICBFaW5lIEF1c2dhYmUgby7DhC4gaXN0IG5pY2h0IG7DtnRpZywgZXMgaXN0IGFiZXIgbWl0IGRlciBCbG9ja2x5LUtvbW1lbnRhcmZ1bmt0aW9uIHp1XG4gICAgICAgIGRva3VtZW50aWVyZW4sIHdpZSBkaWUgRXJrZW5udW5nIHBhc3NpZXJ0IHVuZCBFbnRzY2hlaWR1bmdlbiB2b3JnZW5vbW1lbiB3ZXJkZW4uXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMlwiIHZhcmlhbnQ9XCJoNFwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgQXVmZ2FiZSAyICZuZGFzaDsgTmF2aWdhdGlvblxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICBBdWZiYXVlbmQgYXVmIGRlciBMw7ZzdW5nIHp1ciBBdWZnYWJlIDEgc29sbHRlIGRpZSB6d2VpdGUgQXVmZ2FiZSBsZWljaHQgenUgbMO2c2VuIHNlaW46IGZpbmRlXG4gICAgICAgIGRlbiBXZWcgdm9uIGRlciBsaW5rcyBvYmVyZW4genVyIHJlY2h0cyB1bnRlcmVuLCBzY2hyw6RnIGdlZ2Vuw7xiZXIgbGllZ2VuZGVuIEVja2UuIERvcnQgc29sbFxuICAgICAgICBkYXMgUHJvZ3JhbW0gYmVlbmRldCB3ZXJkZW4gdW5kIGRlciBSb2JvdGVyIHN0ZWhlbiBibGVpYmVuLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICBXaWUgaW4gQXVmZ2FiZSAxIHNvbGxlbiBkaWUgRW50c2NoZWlkdW5nc3B1bmt0ZSBpbSBNb2RlbGwgZGV1dGxpY2ggaWRlbnRpZml6aWVyYmFyIHNlaW4uIERhc1xuICAgICAgICBiZWRldXRldCwgZGFzcyBkZXIgQWJsYXVmXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb21wb25lbnQ9XCJkaXZcIiBwYXJhZ3JhcGg+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+ZmFocmUgYW4gZGVyIGVyc3RlbiBLcmV1enVuZyBnZXJhZGUgYXVzLDwvbGk+XG4gICAgICAgICAgPGxpPmJpZWdlIGFuIGRlciB6d2VpdGVuIEtyZXV6dW5nIHJlY2h0cyBhYiw8L2xpPlxuICAgICAgICAgIDxsaT5iaWVnZSBhbiBkZXIgZHJpdHRlbiBLcmV1enVuZyBsaW5rcyBhYjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgIGltIE1vZGVsbCBsZWljaHQgZXJrZW5uYmFyIHNlaW4gbcO8c3N0ZS4gTnV0emUgd2llZGVyIGRpZSBCbG9ja2x5LUtvbW1lbnRhcmZ1bmt0aW9uLCB1bVxuICAgICAgICB3aWNodGlnZSBTdGVsbGVuIHp1IGRva3VtZW50aWVyZW4uXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoQ29udGVzdCk7XG4iLCJcbiAgICB2YXIgcmVmcyA9IDA7XG4gICAgdmFyIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMyEuL0NvbnRlc3Quc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvaW5zZXJ0Q3NzLmpzXCIpO1xuICAgIHZhciBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuXG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3NzLmxvY2FscyB8fCB7fTtcbiAgICBleHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIGV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gJycgKyBjc3M7IH07XG4gICAgZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG5cbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMyEuL0NvbnRlc3Quc2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0zIS4vQ29udGVzdC5zY3NzXCIpO1xuICAgICAgICBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnRlc3QgZnJvbSAnLi9Db250ZXN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0L0xheW91dCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGFjdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ0NvbnRlc3QnLFxuICAgIGNodW5rczogWydjb250ZXN0J10sXG4gICAgY29tcG9uZW50OiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Q29udGVzdCAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBOzs7Ozs7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==