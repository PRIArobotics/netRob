require("source-map-support").install();
exports.ids = ["contest"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/contest/Contest.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.Contest-root-hDyK7 {\n  padding: 40px 20px;\n}\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/routes/contest/Contest.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,gCAAgC;EAChC,+BAA+B;;EAE/B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;;AAED;EACE,mBAAmB;CACpB","file":"Contest.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.root {\n  padding: 40px 20px;\n}\n"],"sourceRoot":""}]);

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/routes/contest/Contest.js";







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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/routes/contest/index.js";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2NvbnRlc3QuanMiLCJzb3VyY2VzIjpbIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL3JvdXRlcy9jb250ZXN0L0NvbnRlc3Quc2NzcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL3JvdXRlcy9jb250ZXN0L0NvbnRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9jb250ZXN0L0NvbnRlc3Quc2Nzcz81NDA0IiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvcm91dGVzL2NvbnRlc3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6ICdTZWdvZSBVSScsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTAwMHB4O1xcblxcbiAgLypcXG4gICAqIEFwcGxpY2F0aW9uIHNwZWNpZmljXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0taGVkZ2Vob2ctZ3JlZW4tbGlnaHQ6ICMzOGI0NDk7XFxuICAtLWhlZGdlaG9nLWdyZWVuLWRhcms6ICMwMDdjM2M7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4uQ29udGVzdC1yb290LWhEeUs3IHtcXG4gIHBhZGRpbmc6IDQwcHggMjBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL3JvdXRlcy9jb250ZXN0L0NvbnRlc3Quc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HOztBQUVIOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRTs7Z0ZBRThFOztFQUU5RSxrRUFBa0U7O0VBRWxFOztnRkFFOEU7O0VBRTlFLDRCQUE0Qjs7RUFFNUI7O2dGQUU4RTs7RUFFOUUsZ0NBQWdDO0VBQ2hDLCtCQUErQjs7RUFFL0I7O2dGQUU4RTs7RUFFOUUsdUJBQXVCLEVBQUUsZ0NBQWdDO0VBQ3pELHVCQUF1QixFQUFFLDJCQUEyQjtFQUNwRCx1QkFBdUIsRUFBRSw2QkFBNkI7RUFDdEQsd0JBQXdCLENBQUMsaUNBQWlDO0NBQzNEOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCXCIsXCJmaWxlXCI6XCJDb250ZXN0LnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogJ1NlZ29lIFVJJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDAwcHg7XFxuXFxuICAvKlxcbiAgICogQXBwbGljYXRpb24gc3BlY2lmaWNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1oZWRnZWhvZy1ncmVlbi1saWdodDogIzM4YjQ0OTtcXG4gIC0taGVkZ2Vob2ctZ3JlZW4tZGFyazogIzAwN2MzYztcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxufVxcblxcbi5yb290IHtcXG4gIHBhZGRpbmc6IDQwcHggMjBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJDb250ZXN0LXJvb3QtaER5SzdcIlxufTsiLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci93aXRoU3R5bGVzJztcblxuaW1wb3J0IEFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5cbmltcG9ydCBzIGZyb20gJy4vQ29udGVzdC5zY3NzJztcblxuZnVuY3Rpb24gQ29udGVzdCgpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoM1wiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgUm9ib3RpY3MgRGF5IDIwMjAgTW9kZWxsaWVydW5nc3dldHRiZXdlcmJcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgSW0gUmFobWVuIGRlcyBSb2JvdGljcyBEYXkgMjAyMCBmaW5kZXQgZWluIE1vZGVsbGllcnVuZ3MtV2V0dGJld2VyYiBzdGF0dC4gSW0gVm9yZmVsZCB3aXJkXG4gICAgICAgIGVpbiBzaW11bGllcnRlciBSb2JvdGVyIGhpZXIgaW4gZGVyIEhlZGdlaG9nLUlERSBnZXN0ZXVlcnQsIHVtIGluIHp3ZWkgdmVyc2NoaWVkZW5lblxuICAgICAgICBTemVuYXJpZW4gQXVmZ2FiZW4genUgZXJmw7xsbGVuLiBEYWJlaSBpc3QgZGllIHZpc3VlbGxlIFByb2dyYW1taWVydW1nZWJ1bmcgQmxvY2tseSB6dVxuICAgICAgICBiZW51dHplbiwgZGllIGRlbiBQcm9ncmFtbWNvZGUgdm9tIEF1c2bDvGhydW5nc3RhcmdldCBhYnN0cmFoaWVydDogenVuw6RjaHN0IGVpbiBzaW11bGllcnRlcixcbiAgICAgICAgYW0gUm9ib3RpY3MgRGF5IGVpbiBlY2h0ZXIgUm9ib3Rlci5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiIHBhcmFncmFwaD5cbiAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiaW5mb1wiPlxuICAgICAgICAgIERpZSBMw7ZzdW5nZW4gZsO8ciBiZWlkZSBBdWZnYWJlbiBrw7ZubmVuIGJpcyAxNy4gRmVicnVhciBwZXIgRW1haWwgYW5cbiAgICAgICAgICBtb2RlbGxpZXJ1bmdAcm9ib3RpY3NkYXkuYXQgZWluZ2VzY2hpY2t0IHdlcmRlbi4gRnJhZ2VuIGdlaGVuIGViZW5mYWxscyBhbiBkaWVzZSBBZHJlc3NlLlxuICAgICAgICAgIERpZSBIZWRnZWhvZyBJREUgYmVmaW5kZXQgc2ljaCBub2NoIGluIEVudHdpY2tsdW5nLCB3aXIgYml0dGVuIGRlc2hhbGIga2xlaW5lcmUgRmVobGVyIHp1XG4gICAgICAgICAgdmVyemVpaGVuLlxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICBBbSBSb2JvdGljcyBEYXkgd2VyZGVuIGRpZSBMw7ZzdW5nZW4gYXVmIGVjaHRlbiBSb2JvdGVybiBnZXRlc3RldC4gRWluZSBGYWNoanVyeSBiZXN0ZWhlbmRcbiAgICAgICAgYXVzIEV4cGVydGVuIHZvbiBTcGFyeFN5c3RlbXMgdW5kIFBSSUEgYmV3ZXJ0ZXQgc293b2hsIGRhcyBBYnNjaG5laWRlbiBkZXIgTW9kZWxsZSBhbSBlY2h0ZW5cbiAgICAgICAgUm9ib3RlciwgYWxzIGF1Y2ggZGllIFN0cnVrdHVyIGRlciBNb2RlbGxlLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICBBbHMgSGF1cHRwcmVpcyBsb2NrdCBlaW4gSGVkZ2Vob2cgUm9ib3Rlci1Db250cm9sbGVyIGltIFdlcnQgdm9uIOKCrDI1MCEgVW0gZGVuIEhhdXB0cHJlaXMgenVcbiAgICAgICAgZ2V3aW5uZW4gaXN0IEFud2VzZW5oZWl0IGFtIFJvYm90aWNzIERheSBub3R3ZW5kaWcsIHdpciBmcmV1ZW4gdW5zIGFiZXIgYXVjaCDDvGJlciByZWluZVxuICAgICAgICBPbmxpbmUtVGVpbG5haG1lbi5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgyXCIgdmFyaWFudD1cImg0XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICBBdWZnYWJlIDEgJm5kYXNoOyBJcnJnYXJ0ZW5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgRWluIGVpbmZhY2ggenVzYW1tZW5ow6RuZ2VuZGVyIElycmdhcnRlbiBrYW5uIG1pdCBkZXJ7JyAnfVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kZS53aWtpcGVkaWEub3JnL3dpa2kvTCVDMyVCNnN1bmdzYWxnb3JpdGhtZW5fZiVDMyVCQ3JfSXJyZyVDMyVBNHJ0ZW4jUmVjaHRlLUhhbmQtTWV0aG9kZVwiPlxuICAgICAgICAgIFJlY2h0ZS1IYW5kLU1ldGhvZGVcbiAgICAgICAgPC9hPnsnICd9XG4gICAgICAgIGdlbMO2c3Qgd2VyZGVuLiBJbiBBdWZnYWJlIDEgaXN0IHNvIGVpbiBJcnJnYXJ0ZW4tTmV0eiBpbiBzY2h3YXJ6IGFtIEJvZGVuIG1hcmtpZXJ0LlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCIgcGFyYWdyYXBoPlxuICAgICAgICBFbnR3aXJmIGVpbiBQcm9ncmFtbSwgbWl0IGRlbSBkZXIgUm9ib3RlciBlbnRzcHJlY2hlbmQgZGVyIFJlY2h0ZS1IYW5kLU1ldGhvZGUgZW5kbG9zIGR1cmNoXG4gICAgICAgIGRhcyBOZXR6IG5hdmlnaWVydC4gSW0gR2VnZW5zYXR6IHp1ciBTa2l6emUgYXVmIFdpa2lwZWRpYSBtdXNzIGRlciBSb2JvdGVyIGRhYmVpIGFsbGVcbiAgICAgICAgS3JldXp1bmdzcHVua3RlIHVuZCBTYWNrZ2Fzc2VuIGVya2VubmVuIHVuZCBlaW5lIGVudHNwcmVjaGVuZGUgRW50c2NoZWlkdW5nIHRyZWZmZW4uIERhc1xuICAgICAgICBiZWRldXRldCwgZXMgaXN0IG5pY2h0IGF1c3JlaWNoZW5kIHfDtnJ0bGljaCBnZW5vbW1lbiBkYXMgTmV0eiBuYWNoIHJlY2h0cyBmYWhyZW5kIHp1XG4gICAgICAgIHZlcmZvbGdlbiEgRGVyIFJvYm90ZXIgbXVzcyBlcmtlbm5lbiwgZGFzcyBlcyBtZWhyZXJlIE3DtmdsaWNoa2VpdGVuIGdpYnQgZGVuIFdlZ1xuICAgICAgICBmb3J0enVzZXR6ZW4gKGFsc28gZWluZSBLcmV1enVuZyB2b3JsaWVndCkgYnp3LiBnYXIga2VpbmUgKGFsc28gZWluZSBTYWNrZ2Fzc2UpLiBEYW5hY2ggbXVzc1xuICAgICAgICBlbnRzcHJlY2hlbmQgZGVyIE1ldGhvZGUgZGVyIHJlY2h0ZXN0LW3DtmdsaWNoZSB3ZWcgZWluZ2VzY2hsYWdlbiB3ZXJkZW4uXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgIEVpbmUgQXVzZ2FiZSBvLsOELiBpc3QgbmljaHQgbsO2dGlnLCBlcyBpc3QgYWJlciBtaXQgZGVyIEJsb2NrbHktS29tbWVudGFyZnVua3Rpb24genVcbiAgICAgICAgZG9rdW1lbnRpZXJlbiwgd2llIGRpZSBFcmtlbm51bmcgcGFzc2llcnQgdW5kIEVudHNjaGVpZHVuZ2VuIHZvcmdlbm9tbWVuIHdlcmRlbi5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgyXCIgdmFyaWFudD1cImg0XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICBBdWZnYWJlIDIgJm5kYXNoOyBOYXZpZ2F0aW9uXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgIEF1ZmJhdWVuZCBhdWYgZGVyIEzDtnN1bmcgenVyIEF1ZmdhYmUgMSBzb2xsdGUgZGllIHp3ZWl0ZSBBdWZnYWJlIGxlaWNodCB6dSBsw7ZzZW4gc2VpbjogZmluZGVcbiAgICAgICAgZGVuIFdlZyB2b24gZGVyIGxpbmtzIG9iZXJlbiB6dXIgcmVjaHRzIHVudGVyZW4sIHNjaHLDpGcgZ2VnZW7DvGJlciBsaWVnZW5kZW4gRWNrZS4gRG9ydCBzb2xsXG4gICAgICAgIGRhcyBQcm9ncmFtbSBiZWVuZGV0IHdlcmRlbiB1bmQgZGVyIFJvYm90ZXIgc3RlaGVuIGJsZWliZW4uXG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBwYXJhZ3JhcGg+XG4gICAgICAgIFdpZSBpbiBBdWZnYWJlIDEgc29sbGVuIGRpZSBFbnRzY2hlaWR1bmdzcHVua3RlIGltIE1vZGVsbCBkZXV0bGljaCBpZGVudGlmaXppZXJiYXIgc2Vpbi4gRGFzXG4gICAgICAgIGJlZGV1dGV0LCBkYXNzIGRlciBBYmxhdWZcbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbXBvbmVudD1cImRpdlwiIHBhcmFncmFwaD5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5mYWhyZSBhbiBkZXIgZXJzdGVuIEtyZXV6dW5nIGdlcmFkZSBhdXMsPC9saT5cbiAgICAgICAgICA8bGk+YmllZ2UgYW4gZGVyIHp3ZWl0ZW4gS3JldXp1bmcgcmVjaHRzIGFiLDwvbGk+XG4gICAgICAgICAgPGxpPmJpZWdlIGFuIGRlciBkcml0dGVuIEtyZXV6dW5nIGxpbmtzIGFiPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHBhcmFncmFwaD5cbiAgICAgICAgaW0gTW9kZWxsIGxlaWNodCBlcmtlbm5iYXIgc2VpbiBtw7xzc3RlLiBOdXR6ZSB3aWVkZXIgZGllIEJsb2NrbHktS29tbWVudGFyZnVua3Rpb24sIHVtXG4gICAgICAgIHdpY2h0aWdlIFN0ZWxsZW4genUgZG9rdW1lbnRpZXJlbi5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShDb250ZXN0KTtcbiIsIlxuICAgIHZhciByZWZzID0gMDtcbiAgICB2YXIgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0zIS4vQ29udGVzdC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9pbnNlcnRDc3MuanNcIik7XG4gICAgdmFyIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG5cbiAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjc3MubG9jYWxzIHx8IHt9O1xuICAgIGV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiAnJyArIGNzczsgfTtcbiAgICBleHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcblxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0zIS4vQ29udGVzdC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTMhLi9Db250ZXN0LnNjc3NcIik7XG4gICAgICAgIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29udGVzdCBmcm9tICcuL0NvbnRlc3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQvTGF5b3V0JztcblxuYXN5bmMgZnVuY3Rpb24gYWN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnQ29udGVzdCcsXG4gICAgY2h1bmtzOiBbJ2NvbnRlc3QnXSxcbiAgICBjb21wb25lbnQ6IChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxDb250ZXN0IC8+XG4gICAgICA8L0xheW91dD5cbiAgICApLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb247XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9