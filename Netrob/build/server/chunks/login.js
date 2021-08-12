require("source-map-support").install();
exports.ids = ["login"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/login/Login.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n.Login-root-3Vk6J {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.Login-container-2IZbL {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n.Login-lead-25ZSA {\n  font-size: 1.25em;\n}\n.Login-formGroup-uHfQ- {\n  margin-bottom: 15px;\n}\n.Login-label-Mf2-c {\n  display: block;\n  font-weight: 700;\n}\n.Login-input-HfRjv {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 5px 0 0;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n}\n.Login-input-HfRjv:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login-button-2JhAE {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n.Login-button-2JhAE:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n.Login-button-2JhAE:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login-facebook-QGMxt {\n  border-color: #3b5998;\n  background: #3b5998;\n}\n.Login-facebook-QGMxt:hover {\n  background: #2d4373;\n}\n.Login-google-17cIx {\n  border-color: #dd4b39;\n  background: #dd4b39;\n}\n.Login-google-17cIx:hover {\n  background: #c23321;\n}\n.Login-twitter-21gEV {\n  border-color: #55acee;\n  background: #55acee;\n}\n.Login-twitter-21gEV:hover {\n  background: #2795e9;\n}\n.Login-icon-2Dc1q {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n.Login-lineThrough-2wlls {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n.Login-lineThrough-2wlls::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n.Login-lineThrough-2wlls::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/routes/login/Login.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;AACH;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,gCAAgC;EAChC,+BAA+B;;EAE/B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;AACD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,+BAA+B;UACvB,uBAAuB;EAC/B,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,yDAAyD;UACjD,iDAAiD;EACzD,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,yFAAyF;EACzF,iFAAiF;EACjF,4EAA4E;EAC5E,yEAAyE;EACzE,+GAA+G;CAChH;AACD;EACE,sBAAsB;EACtB,yFAAyF;UACjF,iFAAiF;CAC1F;AACD;EACE,eAAe;EACf,+BAA+B;UACvB,uBAAuB;EAC/B,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;CACjB;AACD;EACE,mCAAmC;CACpC;AACD;EACE,sBAAsB;EACtB,mDAAmD;UAC3C,2CAA2C;CACpD;AACD;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,YAAY;CACb","file":"Login.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n.lead {\n  font-size: 1.25em;\n}\n.formGroup {\n  margin-bottom: 15px;\n}\n.label {\n  display: block;\n  font-weight: 700;\n}\n.input {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 5px 0 0;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n}\n.input:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.button {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n.button:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n.button:focus {\n  border-color: #0074c2;\n  -webkit-box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n          box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.facebook {\n  border-color: #3b5998;\n  background: #3b5998;\n  composes: button;\n}\n.facebook:hover {\n  background: #2d4373;\n}\n.google {\n  border-color: #dd4b39;\n  background: #dd4b39;\n  composes: button;\n}\n.google:hover {\n  background: #c23321;\n}\n.twitter {\n  border-color: #55acee;\n  background: #55acee;\n  composes: button;\n}\n.twitter:hover {\n  background: #2795e9;\n}\n.icon {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n.lineThrough {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n.lineThrough::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n.lineThrough::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Login-root-3Vk6J",
	"container": "Login-container-2IZbL",
	"lead": "Login-lead-25ZSA",
	"formGroup": "Login-formGroup-uHfQ-",
	"label": "Login-label-Mf2-c",
	"input": "Login-input-HfRjv",
	"button": "Login-button-2JhAE",
	"facebook": "Login-facebook-QGMxt Login-button-2JhAE",
	"google": "Login-google-17cIx Login-button-2JhAE",
	"twitter": "Login-twitter-21gEV Login-button-2JhAE",
	"icon": "Login-icon-2Dc1q",
	"lineThrough": "Login-lineThrough-2wlls"
};

/***/ }),

/***/ "./src/routes/login/Login.css":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/login/Login.css");
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
      module.hot.accept("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/login/Login.css", function() {
        css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/routes/login/Login.css");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/routes/login/Login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/withStyles");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/login/Login.css");
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Login_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/routes/login/Login.js";

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.root,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, this.props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.lead,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }, "Log in with your username or company email address."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.formGroup,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.facebook,
      href: "/login/facebook",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
      width: "30",
      height: "30",
      viewBox: "0 0 30 30",
      xmlns: "http://www.w3.org/2000/svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: "M22 16l1-5h-5V7c0-1.544.784-2 3-2h2V0h-4c-4.072 0-7 2.435-7 7v4H7v5h5v14h6V16h4z",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 15
      }
    }, "Log in with Facebook"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.formGroup,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.google,
      href: "/login/google",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
      width: "30",
      height: "30",
      viewBox: "0 0 30 30",
      xmlns: "http://www.w3.org/2000/svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: 'M30 13h-4V9h-2v4h-4v2h4v4h2v-4h4m-15 2s-2-1.15-2-2c0 0-.5-1.828 1-3 ' + '1.537-1.2 3-3.035 3-5 0-2.336-1.046-5-3-6h3l2.387-1H10C5.835 0 2 3.345 2 7c0 ' + '3.735 2.85 6.56 7.086 6.56.295 0 .58-.006.86-.025-.273.526-.47 1.12-.47 1.735 ' + '0 1.037.817 2.042 1.523 2.73H9c-5.16 0-9 2.593-9 6 0 3.355 4.87 6 10.03 6 5.882 ' + '0 9.97-3 9.97-7 0-2.69-2.545-4.264-5-6zm-4-4c-2.395 0-5.587-2.857-6-6C4.587 ' + '3.856 6.607.93 9 1c2.394.07 4.603 2.908 5.017 6.052C14.43 10.195 13 13 11 ' + '13zm-1 15c-3.566 0-7-1.29-7-4 0-2.658 3.434-5.038 7-5 .832.01 2 0 2 0 1 0 ' + '2.88.88 4 2 1 1 1 2.674 1 3 0 3-1.986 4-7 4z',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }
    }, "Log in with Google"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.formGroup,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.twitter,
      href: "/login/twitter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
      width: "30",
      height: "30",
      viewBox: "0 0 30 30",
      xmlns: "http://www.w3.org/2000/svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
      d: 'M30 6.708c-1.105.49-2.756 1.143-4 1.292 1.273-.762 2.54-2.56 ' + '3-4-.97.577-2.087 1.355-3.227 1.773L25 5c-1.12-1.197-2.23-2-4-2-3.398 0-6 ' + '2.602-6 6 0 .4.047.7.11.956L15 10C9 10 5.034 8.724 2 5c-.53.908-1 1.872-1 ' + '3 0 2.136 1.348 3.894 3 5-1.01-.033-2.17-.542-3-1 0 2.98 4.186 6.432 7 7-1 ' + '1-4.623.074-5 0 .784 2.447 3.31 3.95 6 4-2.105 1.648-4.647 2.51-7.53 2.51-.5 ' + '0-.988-.03-1.47-.084C2.723 27.17 6.523 28 10 28c11.322 0 17-8.867 17-17 ' + '0-.268.008-.736 0-1 1.2-.868 2.172-2.058 3-3.292z',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 15
      }
    }, "Log in with Twitter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.lineThrough,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }
    }, "OR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
      method: "post",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.formGroup,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.label,
      htmlFor: "usernameOrEmail",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 15
      }
    }, "Username or email address:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.input,
      id: "usernameOrEmail",
      type: "text",
      name: "usernameOrEmail",
      autoFocus: true // eslint-disable-line jsx-a11y/no-autofocus
      ,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.formGroup,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.label,
      htmlFor: "password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 15
      }
    }, "Password:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.input,
      id: "password",
      type: "password",
      name: "password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.formGroup,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 15
      }
    }, "Log in")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_Login_css__WEBPACK_IMPORTED_MODULE_2___default.a)(Login));

/***/ }),

/***/ "./src/routes/login/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/layout/Layout/Layout.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/login/Login.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/routes/login/index.js";

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const title = 'Log In';

function action() {
  return {
    chunks: ['login'],
    title,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Login__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2xvZ2luLmpzIiwic291cmNlcyI6WyIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9yb3V0ZXMvbG9naW4vTG9naW4uY3NzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvbG9naW4vTG9naW4uY3NzPzNkYzIiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9yb3V0ZXMvbG9naW4vTG9naW4uanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9yb3V0ZXMvbG9naW4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6ICdTZWdvZSBVSScsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTAwMHB4O1xcblxcbiAgLypcXG4gICAqIEFwcGxpY2F0aW9uIHNwZWNpZmljXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0taGVkZ2Vob2ctZ3JlZW4tbGlnaHQ6ICMzOGI0NDk7XFxuICAtLWhlZGdlaG9nLWdyZWVuLWRhcms6ICMwMDdjM2M7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG4uTG9naW4tcm9vdC0zVms2SiB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG4uTG9naW4tY29udGFpbmVyLTJJWmJMIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAwIDQwcHg7XFxuICBtYXgtd2lkdGg6IDM4MHB4O1xcbn1cXG4uTG9naW4tbGVhZC0yNVpTQSB7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuLkxvZ2luLWZvcm1Hcm91cC11SGZRLSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uTG9naW4tbGFiZWwtTWYyLWMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uTG9naW4taW5wdXQtSGZSanYge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDVweCAwIDA7XFxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDZweDtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcbiAgY29sb3I6ICM2MTYxNjE7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMS4zMzMzMzMzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgMC4xNXMsIC13ZWJraXQtYm94LXNoYWRvdyBlYXNlLWluLW91dCAwLjE1cztcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAwLjE1cywgLXdlYmtpdC1ib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzO1xcbiAgLW8tdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzLCAtd2Via2l0LWJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXM7XFxufVxcbi5Mb2dpbi1pbnB1dC1IZlJqdjpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMwMDc0YzI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDhweCByZ2JhKDAsIDExNiwgMTk0LCAwLjYpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA4cHggcmdiYSgwLCAxMTYsIDE5NCwgMC42KTtcXG59XFxuLkxvZ2luLWJ1dHRvbi0ySmhBRSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNzMyNzc7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYmFja2dyb3VuZDogIzM3MzI3NztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLkxvZ2luLWJ1dHRvbi0ySmhBRTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDU0LCA1MCwgMTE5LCAwLjgpO1xcbn1cXG4uTG9naW4tYnV0dG9uLTJKaEFFOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwNzRjMjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDExNiwgMTk0LCAwLjYpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMTE2LCAxOTQsIDAuNik7XFxufVxcbi5Mb2dpbi1mYWNlYm9vay1RR014dCB7XFxuICBib3JkZXItY29sb3I6ICMzYjU5OTg7XFxuICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xcbn1cXG4uTG9naW4tZmFjZWJvb2stUUdNeHQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzJkNDM3MztcXG59XFxuLkxvZ2luLWdvb2dsZS0xN2NJeCB7XFxuICBib3JkZXItY29sb3I6ICNkZDRiMzk7XFxuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xcbn1cXG4uTG9naW4tZ29vZ2xlLTE3Y0l4OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNjMjMzMjE7XFxufVxcbi5Mb2dpbi10d2l0dGVyLTIxZ0VWIHtcXG4gIGJvcmRlci1jb2xvcjogIzU1YWNlZTtcXG4gIGJhY2tncm91bmQ6ICM1NWFjZWU7XFxufVxcbi5Mb2dpbi10d2l0dGVyLTIxZ0VWOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMyNzk1ZTk7XFxufVxcbi5Mb2dpbi1pY29uLTJEYzFxIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogLTJweCAxMnB4IC0ycHggMDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XFxuLkxvZ2luLWxpbmVUaHJvdWdoLTJ3bGxzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiAjNzU3NTc1O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcbi5Mb2dpbi1saW5lVGhyb3VnaC0yd2xsczo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgei1pbmRleDogLTE7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29udGVudDogJyc7XFxufVxcbi5Mb2dpbi1saW5lVGhyb3VnaC0yd2xsczo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0OSU7XFxuICB6LWluZGV4OiAtMjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXG4gIGNvbnRlbnQ6ICcnO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvcm91dGVzL2xvZ2luL0xvZ2luLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7OztHQU9HO0FBQ0g7Ozs7Ozs7R0FPRztBQUNIO0VBQ0U7O2dGQUU4RTs7RUFFOUUsa0VBQWtFOztFQUVsRTs7Z0ZBRThFOztFQUU5RSw0QkFBNEI7O0VBRTVCOztnRkFFOEU7O0VBRTlFLGdDQUFnQztFQUNoQywrQkFBK0I7O0VBRS9COztnRkFFOEU7O0VBRTlFLHVCQUF1QixFQUFFLGdDQUFnQztFQUN6RCx1QkFBdUIsRUFBRSwyQkFBMkI7RUFDcEQsdUJBQXVCLEVBQUUsNkJBQTZCO0VBQ3RELHdCQUF3QixDQUFDLGlDQUFpQztDQUMzRDtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsK0JBQStCO1VBQ3ZCLHVCQUF1QjtFQUMvQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHlEQUF5RDtVQUNqRCxpREFBaUQ7RUFDekQsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIseUZBQXlGO0VBQ3pGLGlGQUFpRjtFQUNqRiw0RUFBNEU7RUFDNUUseUVBQXlFO0VBQ3pFLCtHQUErRztDQUNoSDtBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLHlGQUF5RjtVQUNqRixpRkFBaUY7Q0FDMUY7QUFDRDtFQUNFLGVBQWU7RUFDZiwrQkFBK0I7VUFDdkIsdUJBQXVCO0VBQy9CLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsbUNBQW1DO0NBQ3BDO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsbURBQW1EO1VBQzNDLDJDQUEyQztDQUNwRDtBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLG9CQUFvQjtDQUVyQjtBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsb0JBQW9CO0NBRXJCO0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QixvQkFBb0I7Q0FFckI7QUFDRDtFQUNFLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0NBQ2I7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLFlBQVk7Q0FDYlwiLFwiZmlsZVwiOlwiTG9naW4uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6ICdTZWdvZSBVSScsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTAwMHB4O1xcblxcbiAgLypcXG4gICAqIEFwcGxpY2F0aW9uIHNwZWNpZmljXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0taGVkZ2Vob2ctZ3JlZW4tbGlnaHQ6ICMzOGI0NDk7XFxuICAtLWhlZGdlaG9nLWdyZWVuLWRhcms6ICMwMDdjM2M7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG4ucm9vdCB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAwIDQwcHg7XFxuICBtYXgtd2lkdGg6IDM4MHB4O1xcbn1cXG4ubGVhZCB7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuLmZvcm1Hcm91cCB7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4ubGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDVweCAwIDA7XFxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDZweDtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xcbiAgY29sb3I6ICM2MTYxNjE7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMS4zMzMzMzMzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgMC4xNXMsIC13ZWJraXQtYm94LXNoYWRvdyBlYXNlLWluLW91dCAwLjE1cztcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAwLjE1cywgLXdlYmtpdC1ib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzO1xcbiAgLW8tdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzLCAtd2Via2l0LWJveC1zaGFkb3cgZWFzZS1pbi1vdXQgMC4xNXM7XFxufVxcbi5pbnB1dDpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMwMDc0YzI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDhweCByZ2JhKDAsIDExNiwgMTk0LCAwLjYpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSksIDAgMCA4cHggcmdiYSgwLCAxMTYsIDE5NCwgMC42KTtcXG59XFxuLmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNzMyNzc7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYmFja2dyb3VuZDogIzM3MzI3NztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDU0LCA1MCwgMTE5LCAwLjgpO1xcbn1cXG4uYnV0dG9uOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwNzRjMjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDExNiwgMTk0LCAwLjYpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IHJnYmEoMCwgMTE2LCAxOTQsIDAuNik7XFxufVxcbi5mYWNlYm9vayB7XFxuICBib3JkZXItY29sb3I6ICMzYjU5OTg7XFxuICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xcbiAgY29tcG9zZXM6IGJ1dHRvbjtcXG59XFxuLmZhY2Vib29rOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMyZDQzNzM7XFxufVxcbi5nb29nbGUge1xcbiAgYm9yZGVyLWNvbG9yOiAjZGQ0YjM5O1xcbiAgYmFja2dyb3VuZDogI2RkNGIzOTtcXG4gIGNvbXBvc2VzOiBidXR0b247XFxufVxcbi5nb29nbGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2MyMzMyMTtcXG59XFxuLnR3aXR0ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjNTVhY2VlO1xcbiAgYmFja2dyb3VuZDogIzU1YWNlZTtcXG4gIGNvbXBvc2VzOiBidXR0b247XFxufVxcbi50d2l0dGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMyNzk1ZTk7XFxufVxcbi5pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogLTJweCAxMnB4IC0ycHggMDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XFxuLmxpbmVUaHJvdWdoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiAjNzU3NTc1O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcbi5saW5lVGhyb3VnaDo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgei1pbmRleDogLTE7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29udGVudDogJyc7XFxufVxcbi5saW5lVGhyb3VnaDo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0OSU7XFxuICB6LWluZGV4OiAtMjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXG4gIGNvbnRlbnQ6ICcnO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkxvZ2luLXJvb3QtM1ZrNkpcIixcblx0XCJjb250YWluZXJcIjogXCJMb2dpbi1jb250YWluZXItMklaYkxcIixcblx0XCJsZWFkXCI6IFwiTG9naW4tbGVhZC0yNVpTQVwiLFxuXHRcImZvcm1Hcm91cFwiOiBcIkxvZ2luLWZvcm1Hcm91cC11SGZRLVwiLFxuXHRcImxhYmVsXCI6IFwiTG9naW4tbGFiZWwtTWYyLWNcIixcblx0XCJpbnB1dFwiOiBcIkxvZ2luLWlucHV0LUhmUmp2XCIsXG5cdFwiYnV0dG9uXCI6IFwiTG9naW4tYnV0dG9uLTJKaEFFXCIsXG5cdFwiZmFjZWJvb2tcIjogXCJMb2dpbi1mYWNlYm9vay1RR014dCBMb2dpbi1idXR0b24tMkpoQUVcIixcblx0XCJnb29nbGVcIjogXCJMb2dpbi1nb29nbGUtMTdjSXggTG9naW4tYnV0dG9uLTJKaEFFXCIsXG5cdFwidHdpdHRlclwiOiBcIkxvZ2luLXR3aXR0ZXItMjFnRVYgTG9naW4tYnV0dG9uLTJKaEFFXCIsXG5cdFwiaWNvblwiOiBcIkxvZ2luLWljb24tMkRjMXFcIixcblx0XCJsaW5lVGhyb3VnaFwiOiBcIkxvZ2luLWxpbmVUaHJvdWdoLTJ3bGxzXCJcbn07IiwiXG4gICAgdmFyIHJlZnMgPSAwO1xuICAgIHZhciBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTMhLi9Mb2dpbi5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2luc2VydENzcy5qc1wiKTtcbiAgICB2YXIgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcblxuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNzcy5sb2NhbHMgfHwge307XG4gICAgZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBleHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuICcnICsgY3NzOyB9O1xuICAgIGV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTMhLi9Mb2dpbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMyEuL0xvZ2luLmNzc1wiKTtcbiAgICAgICAgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL0xvZ2luLmNzcyc7XG5cbnR5cGUgUHJvcFR5cGVzID0ge1xuICB0aXRsZTogc3RyaW5nLFxufTtcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcFR5cGVzPiB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGgxPnt0aGlzLnByb3BzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLmxlYWR9PkxvZyBpbiB3aXRoIHlvdXIgdXNlcm5hbWUgb3IgY29tcGFueSBlbWFpbCBhZGRyZXNzLjwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5mb3JtR3JvdXB9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzLmZhY2Vib29rfSBocmVmPVwiL2xvZ2luL2ZhY2Vib29rXCI+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuaWNvbn1cbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMCAzMFwiXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIyIDE2bDEtNWgtNVY3YzAtMS41NDQuNzg0LTIgMy0yaDJWMGgtNGMtNC4wNzIgMC03IDIuNDM1LTcgN3Y0SDd2NWg1djE0aDZWMTZoNHpcIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPHNwYW4+TG9nIGluIHdpdGggRmFjZWJvb2s8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZm9ybUdyb3VwfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cy5nb29nbGV9IGhyZWY9XCIvbG9naW4vZ29vZ2xlXCI+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuaWNvbn1cbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMCAzMFwiXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgZD17XG4gICAgICAgICAgICAgICAgICAgICdNMzAgMTNoLTRWOWgtMnY0aC00djJoNHY0aDJ2LTRoNG0tMTUgMnMtMi0xLjE1LTItMmMwIDAtLjUtMS44MjggMS0zICcgK1xuICAgICAgICAgICAgICAgICAgICAnMS41MzctMS4yIDMtMy4wMzUgMy01IDAtMi4zMzYtMS4wNDYtNS0zLTZoM2wyLjM4Ny0xSDEwQzUuODM1IDAgMiAzLjM0NSAyIDdjMCAnICtcbiAgICAgICAgICAgICAgICAgICAgJzMuNzM1IDIuODUgNi41NiA3LjA4NiA2LjU2LjI5NSAwIC41OC0uMDA2Ljg2LS4wMjUtLjI3My41MjYtLjQ3IDEuMTItLjQ3IDEuNzM1ICcgK1xuICAgICAgICAgICAgICAgICAgICAnMCAxLjAzNy44MTcgMi4wNDIgMS41MjMgMi43M0g5Yy01LjE2IDAtOSAyLjU5My05IDYgMCAzLjM1NSA0Ljg3IDYgMTAuMDMgNiA1Ljg4MiAnICtcbiAgICAgICAgICAgICAgICAgICAgJzAgOS45Ny0zIDkuOTctNyAwLTIuNjktMi41NDUtNC4yNjQtNS02em0tNC00Yy0yLjM5NSAwLTUuNTg3LTIuODU3LTYtNkM0LjU4NyAnICtcbiAgICAgICAgICAgICAgICAgICAgJzMuODU2IDYuNjA3LjkzIDkgMWMyLjM5NC4wNyA0LjYwMyAyLjkwOCA1LjAxNyA2LjA1MkMxNC40MyAxMC4xOTUgMTMgMTMgMTEgJyArXG4gICAgICAgICAgICAgICAgICAgICcxM3ptLTEgMTVjLTMuNTY2IDAtNy0xLjI5LTctNCAwLTIuNjU4IDMuNDM0LTUuMDM4IDctNSAuODMyLjAxIDIgMCAyIDAgMSAwICcgK1xuICAgICAgICAgICAgICAgICAgICAnMi44OC44OCA0IDIgMSAxIDEgMi42NzQgMSAzIDAgMy0xLjk4NiA0LTcgNHonXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxzcGFuPkxvZyBpbiB3aXRoIEdvb2dsZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5mb3JtR3JvdXB9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzLnR3aXR0ZXJ9IGhyZWY9XCIvbG9naW4vdHdpdHRlclwiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmljb259XG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGQ9e1xuICAgICAgICAgICAgICAgICAgICAnTTMwIDYuNzA4Yy0xLjEwNS40OS0yLjc1NiAxLjE0My00IDEuMjkyIDEuMjczLS43NjIgMi41NC0yLjU2ICcgK1xuICAgICAgICAgICAgICAgICAgICAnMy00LS45Ny41NzctMi4wODcgMS4zNTUtMy4yMjcgMS43NzNMMjUgNWMtMS4xMi0xLjE5Ny0yLjIzLTItNC0yLTMuMzk4IDAtNiAnICtcbiAgICAgICAgICAgICAgICAgICAgJzIuNjAyLTYgNiAwIC40LjA0Ny43LjExLjk1NkwxNSAxMEM5IDEwIDUuMDM0IDguNzI0IDIgNWMtLjUzLjkwOC0xIDEuODcyLTEgJyArXG4gICAgICAgICAgICAgICAgICAgICczIDAgMi4xMzYgMS4zNDggMy44OTQgMyA1LTEuMDEtLjAzMy0yLjE3LS41NDItMy0xIDAgMi45OCA0LjE4NiA2LjQzMiA3IDctMSAnICtcbiAgICAgICAgICAgICAgICAgICAgJzEtNC42MjMuMDc0LTUgMCAuNzg0IDIuNDQ3IDMuMzEgMy45NSA2IDQtMi4xMDUgMS42NDgtNC42NDcgMi41MS03LjUzIDIuNTEtLjUgJyArXG4gICAgICAgICAgICAgICAgICAgICcwLS45ODgtLjAzLTEuNDctLjA4NEMyLjcyMyAyNy4xNyA2LjUyMyAyOCAxMCAyOGMxMS4zMjIgMCAxNy04Ljg2NyAxNy0xNyAnICtcbiAgICAgICAgICAgICAgICAgICAgJzAtLjI2OC4wMDgtLjczNiAwLTEgMS4yLS44NjggMi4xNzItMi4wNTggMy0zLjI5MnonXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxzcGFuPkxvZyBpbiB3aXRoIFR3aXR0ZXI8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e3MubGluZVRocm91Z2h9Pk9SPC9zdHJvbmc+XG4gICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZm9ybUdyb3VwfT5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5sYWJlbH0gaHRtbEZvcj1cInVzZXJuYW1lT3JFbWFpbFwiPlxuICAgICAgICAgICAgICAgIFVzZXJuYW1lIG9yIGVtYWlsIGFkZHJlc3M6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuaW5wdXR9XG4gICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lT3JFbWFpbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVPckVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGpzeC1hMTF5L25vLWF1dG9mb2N1c1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmZvcm1Hcm91cH0+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MubGFiZWx9IGh0bWxGb3I9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgIFBhc3N3b3JkOlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3MuaW5wdXR9IGlkPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5mb3JtR3JvdXB9PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cy5idXR0b259IHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICBMb2cgaW5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKExvZ2luKTtcbiIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbic7XG5cbmNvbnN0IHRpdGxlID0gJ0xvZyBJbic7XG5cbmZ1bmN0aW9uIGFjdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBjaHVua3M6IFsnbG9naW4nXSxcbiAgICB0aXRsZSxcbiAgICBjb21wb25lbnQ6IChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxMb2dpbiB0aXRsZT17dGl0bGV9IC8+XG4gICAgICA8L0xheW91dD5cbiAgICApLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb247XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBcEdBO0FBQ0E7QUFxR0E7Ozs7Ozs7Ozs7Ozs7OztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9