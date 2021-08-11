require("source-map-support").install();
exports.ids = ["contest"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/contest/Contest.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.Contest-root-hDyK7 {\n  padding: 40px 20px;\n}\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/routes/contest/Contest.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,gCAAgC;EAChC,+BAA+B;;EAE/B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;;AAED;EACE,mBAAmB;CACpB","file":"Contest.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.root {\n  padding: 40px 20px;\n}\n"],"sourceRoot":""}]);

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/routes/contest/Contest.js";







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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/routes/contest/index.js";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2NvbnRlc3QuanMiLCJzb3VyY2VzIjpbIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvcm91dGVzL2NvbnRlc3QvQ29udGVzdC5zY3NzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9yb3V0ZXMvY29udGVzdC9Db250ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvY29udGVzdC9Db250ZXN0LnNjc3M/NTQwNCIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvcm91dGVzL2NvbnRlc3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6ICdTZWdvZSBVSScsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTAwMHB4O1xcblxcbiAgLypcXG4gICAqIEFwcGxpY2F0aW9uIHNwZWNpZmljXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0taGVkZ2Vob2ctZ3JlZW4tbGlnaHQ6ICMzOGI0NDk7XFxuICAtLWhlZGdlaG9nLWdyZWVuLWRhcms6ICMwMDdjM2M7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4uQ29udGVzdC1yb290LWhEeUs3IHtcXG4gIHBhZGRpbmc6IDQwcHggMjBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvcm91dGVzL2NvbnRlc3QvQ29udGVzdC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0dBT0c7O0FBRUg7Ozs7Ozs7R0FPRzs7QUFFSDtFQUNFOztnRkFFOEU7O0VBRTlFLGtFQUFrRTs7RUFFbEU7O2dGQUU4RTs7RUFFOUUsNEJBQTRCOztFQUU1Qjs7Z0ZBRThFOztFQUU5RSxnQ0FBZ0M7RUFDaEMsK0JBQStCOztFQUUvQjs7Z0ZBRThFOztFQUU5RSx1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELHVCQUF1QixFQUFFLDZCQUE2QjtFQUN0RCx3QkFBd0IsQ0FBQyxpQ0FBaUM7Q0FDM0Q7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEJcIixcImZpbGVcIjpcIkNvbnRlc3Quc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiAnU2Vnb2UgVUknLCAnSGVsdmV0aWNhTmV1ZS1MaWdodCcsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwMDBweDtcXG5cXG4gIC8qXFxuICAgKiBBcHBsaWNhdGlvbiBzcGVjaWZpY1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWhlZGdlaG9nLWdyZWVuLWxpZ2h0OiAjMzhiNDQ5O1xcbiAgLS1oZWRnZWhvZy1ncmVlbi1kYXJrOiAjMDA3YzNjO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLnJvb3Qge1xcbiAgcGFkZGluZzogNDBweCAyMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkNvbnRlc3Qtcm9vdC1oRHlLN1wiXG59OyIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL3dpdGhTdHlsZXMnO1xuXG5pbXBvcnQgQWxlcnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuaW1wb3J0IHMgZnJvbSAnLi9Db250ZXN0LnNjc3MnO1xuXG5mdW5jdGlvbiBDb250ZXN0KCkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiIGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImgzXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICBSb2JvdGljcyBEYXkgMjAyMCBNb2RlbGxpZXJ1bmdzd2V0dGJld2VyYlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICBJbSBSYWhtZW4gZGVzIFJvYm90aWNzIERheSAyMDIwIGZpbmRldCBlaW4gTW9kZWxsaWVydW5ncy1XZXR0YmV3ZXJiIHN0YXR0LiBJbSBWb3JmZWxkIHdpcmRcbiAgICAgICAgZWluIHNpbXVsaWVydGVyIFJvYm90ZXIgaGllciBpbiBkZXIgSGVkZ2Vob2ctSURFIGdlc3RldWVydCwgdW0gaW4gendlaSB2ZXJzY2hpZWRlbmVuXG4gICAgICAgIFN6ZW5hcmllbiBBdWZnYWJlbiB6dSBlcmbDvGxsZW4uIERhYmVpIGlzdCBkaWUgdmlzdWVsbGUgUHJvZ3JhbW1pZXJ1bWdlYnVuZyBCbG9ja2x5IHp1XG4gICAgICAgIGJlbnV0emVuLCBkaWUgZGVuIFByb2dyYW1tY29kZSB2b20gQXVzZsO8aHJ1bmdzdGFyZ2V0IGFic3RyYWhpZXJ0OiB6dW7DpGNoc3QgZWluIHNpbXVsaWVydGVyLFxuICAgICAgICBhbSBSb2JvdGljcyBEYXkgZWluIGVjaHRlciBSb2JvdGVyLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJpbmZvXCI+XG4gICAgICAgICAgRGllIEzDtnN1bmdlbiBmw7xyIGJlaWRlIEF1ZmdhYmVuIGvDtm5uZW4gYmlzIDE3LiBGZWJydWFyIHBlciBFbWFpbCBhblxuICAgICAgICAgIG1vZGVsbGllcnVuZ0Byb2JvdGljc2RheS5hdCBlaW5nZXNjaGlja3Qgd2VyZGVuLiBGcmFnZW4gZ2VoZW4gZWJlbmZhbGxzIGFuIGRpZXNlIEFkcmVzc2UuXG4gICAgICAgICAgRGllIEhlZGdlaG9nIElERSBiZWZpbmRldCBzaWNoIG5vY2ggaW4gRW50d2lja2x1bmcsIHdpciBiaXR0ZW4gZGVzaGFsYiBrbGVpbmVyZSBGZWhsZXIgenVcbiAgICAgICAgICB2ZXJ6ZWloZW4uXG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgIEFtIFJvYm90aWNzIERheSB3ZXJkZW4gZGllIEzDtnN1bmdlbiBhdWYgZWNodGVuIFJvYm90ZXJuIGdldGVzdGV0LiBFaW5lIEZhY2hqdXJ5IGJlc3RlaGVuZFxuICAgICAgICBhdXMgRXhwZXJ0ZW4gdm9uIFNwYXJ4U3lzdGVtcyB1bmQgUFJJQSBiZXdlcnRldCBzb3dvaGwgZGFzIEFic2NobmVpZGVuIGRlciBNb2RlbGxlIGFtIGVjaHRlblxuICAgICAgICBSb2JvdGVyLCBhbHMgYXVjaCBkaWUgU3RydWt0dXIgZGVyIE1vZGVsbGUuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgIEFscyBIYXVwdHByZWlzIGxvY2t0IGVpbiBIZWRnZWhvZyBSb2JvdGVyLUNvbnRyb2xsZXIgaW0gV2VydCB2b24g4oKsMjUwISBVbSBkZW4gSGF1cHRwcmVpcyB6dVxuICAgICAgICBnZXdpbm5lbiBpc3QgQW53ZXNlbmhlaXQgYW0gUm9ib3RpY3MgRGF5IG5vdHdlbmRpZywgd2lyIGZyZXVlbiB1bnMgYWJlciBhdWNoIMO8YmVyIHJlaW5lXG4gICAgICAgIE9ubGluZS1UZWlsbmFobWVuLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDJcIiB2YXJpYW50PVwiaDRcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgIEF1ZmdhYmUgMSAmbmRhc2g7IElycmdhcnRlblxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICBFaW4gZWluZmFjaCB6dXNhbW1lbmjDpG5nZW5kZXIgSXJyZ2FydGVuIGthbm4gbWl0IGRlcnsnICd9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2RlLndpa2lwZWRpYS5vcmcvd2lraS9MJUMzJUI2c3VuZ3NhbGdvcml0aG1lbl9mJUMzJUJDcl9JcnJnJUMzJUE0cnRlbiNSZWNodGUtSGFuZC1NZXRob2RlXCI+XG4gICAgICAgICAgUmVjaHRlLUhhbmQtTWV0aG9kZVxuICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgZ2Vsw7ZzdCB3ZXJkZW4uIEluIEF1ZmdhYmUgMSBpc3Qgc28gZWluIElycmdhcnRlbi1OZXR6IGluIHNjaHdhcnogYW0gQm9kZW4gbWFya2llcnQuXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgIEVudHdpcmYgZWluIFByb2dyYW1tLCBtaXQgZGVtIGRlciBSb2JvdGVyIGVudHNwcmVjaGVuZCBkZXIgUmVjaHRlLUhhbmQtTWV0aG9kZSBlbmRsb3MgZHVyY2hcbiAgICAgICAgZGFzIE5ldHogbmF2aWdpZXJ0LiBJbSBHZWdlbnNhdHogenVyIFNraXp6ZSBhdWYgV2lraXBlZGlhIG11c3MgZGVyIFJvYm90ZXIgZGFiZWkgYWxsZVxuICAgICAgICBLcmV1enVuZ3NwdW5rdGUgdW5kIFNhY2tnYXNzZW4gZXJrZW5uZW4gdW5kIGVpbmUgZW50c3ByZWNoZW5kZSBFbnRzY2hlaWR1bmcgdHJlZmZlbi4gRGFzXG4gICAgICAgIGJlZGV1dGV0LCBlcyBpc3QgbmljaHQgYXVzcmVpY2hlbmQgd8O2cnRsaWNoIGdlbm9tbWVuIGRhcyBOZXR6IG5hY2ggcmVjaHRzIGZhaHJlbmQgenVcbiAgICAgICAgdmVyZm9sZ2VuISBEZXIgUm9ib3RlciBtdXNzIGVya2VubmVuLCBkYXNzIGVzIG1laHJlcmUgTcO2Z2xpY2hrZWl0ZW4gZ2lidCBkZW4gV2VnXG4gICAgICAgIGZvcnR6dXNldHplbiAoYWxzbyBlaW5lIEtyZXV6dW5nIHZvcmxpZWd0KSBiencuIGdhciBrZWluZSAoYWxzbyBlaW5lIFNhY2tnYXNzZSkuIERhbmFjaCBtdXNzXG4gICAgICAgIGVudHNwcmVjaGVuZCBkZXIgTWV0aG9kZSBkZXIgcmVjaHRlc3QtbcO2Z2xpY2hlIHdlZyBlaW5nZXNjaGxhZ2VuIHdlcmRlbi5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgRWluZSBBdXNnYWJlIG8uw4QuIGlzdCBuaWNodCBuw7Z0aWcsIGVzIGlzdCBhYmVyIG1pdCBkZXIgQmxvY2tseS1Lb21tZW50YXJmdW5rdGlvbiB6dVxuICAgICAgICBkb2t1bWVudGllcmVuLCB3aWUgZGllIEVya2VubnVuZyBwYXNzaWVydCB1bmQgRW50c2NoZWlkdW5nZW4gdm9yZ2Vub21tZW4gd2VyZGVuLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDJcIiB2YXJpYW50PVwiaDRcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgIEF1ZmdhYmUgMiAmbmRhc2g7IE5hdmlnYXRpb25cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgQXVmYmF1ZW5kIGF1ZiBkZXIgTMO2c3VuZyB6dXIgQXVmZ2FiZSAxIHNvbGx0ZSBkaWUgendlaXRlIEF1ZmdhYmUgbGVpY2h0IHp1IGzDtnNlbiBzZWluOiBmaW5kZVxuICAgICAgICBkZW4gV2VnIHZvbiBkZXIgbGlua3Mgb2JlcmVuIHp1ciByZWNodHMgdW50ZXJlbiwgc2NocsOkZyBnZWdlbsO8YmVyIGxpZWdlbmRlbiBFY2tlLiBEb3J0IHNvbGxcbiAgICAgICAgZGFzIFByb2dyYW1tIGJlZW5kZXQgd2VyZGVuIHVuZCBkZXIgUm9ib3RlciBzdGVoZW4gYmxlaWJlbi5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgV2llIGluIEF1ZmdhYmUgMSBzb2xsZW4gZGllIEVudHNjaGVpZHVuZ3NwdW5rdGUgaW0gTW9kZWxsIGRldXRsaWNoIGlkZW50aWZpemllcmJhciBzZWluLiBEYXNcbiAgICAgICAgYmVkZXV0ZXQsIGRhc3MgZGVyIEFibGF1ZlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgY29tcG9uZW50PVwiZGl2XCIgcGFyYWdyYXBoPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPmZhaHJlIGFuIGRlciBlcnN0ZW4gS3JldXp1bmcgZ2VyYWRlIGF1cyw8L2xpPlxuICAgICAgICAgIDxsaT5iaWVnZSBhbiBkZXIgendlaXRlbiBLcmV1enVuZyByZWNodHMgYWIsPC9saT5cbiAgICAgICAgICA8bGk+YmllZ2UgYW4gZGVyIGRyaXR0ZW4gS3JldXp1bmcgbGlua3MgYWI8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICBpbSBNb2RlbGwgbGVpY2h0IGVya2VubmJhciBzZWluIG3DvHNzdGUuIE51dHplIHdpZWRlciBkaWUgQmxvY2tseS1Lb21tZW50YXJmdW5rdGlvbiwgdW1cbiAgICAgICAgd2ljaHRpZ2UgU3RlbGxlbiB6dSBkb2t1bWVudGllcmVuLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKENvbnRlc3QpO1xuIiwiXG4gICAgdmFyIHJlZnMgPSAwO1xuICAgIHZhciBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTMhLi9Db250ZXN0LnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2luc2VydENzcy5qc1wiKTtcbiAgICB2YXIgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcblxuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNzcy5sb2NhbHMgfHwge307XG4gICAgZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBleHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuICcnICsgY3NzOyB9O1xuICAgIGV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTMhLi9Db250ZXN0LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMyEuL0NvbnRlc3Quc2Nzc1wiKTtcbiAgICAgICAgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb250ZXN0IGZyb20gJy4vQ29udGVzdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC9MYXlvdXQnO1xuXG5hc3luYyBmdW5jdGlvbiBhY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdDb250ZXN0JyxcbiAgICBjaHVua3M6IFsnY29udGVzdCddLFxuICAgIGNvbXBvbmVudDogKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPENvbnRlc3QgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICksXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTs7Ozs7OztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBU0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=