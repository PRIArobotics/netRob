require("source-map-support").install();
exports.ids = ["about~admin~contact~contest~help~ide~indexedDB~login~not-found~privacy~register~webrtc"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/layout/Footer/Footer.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.Footer-root-3UnPj {\n  background: #333;\n  color: #fff;\n}\n\n.Footer-container-vn1Ww {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1000px;\n  max-width: var(--max-content-width);\n  text-align: center;\n}\n\n.Footer-text-2Ff98 {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.Footer-spacer-PsYhT {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.Footer-text-2Ff98,\n.Footer-link-2TBmn {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.Footer-link-2TBmn,\n.Footer-link-2TBmn:active,\n.Footer-link-2TBmn:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.Footer-link-2TBmn:hover {\n  color: rgba(255, 255, 255, 1);\n}\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/layout/Footer/Footer.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,gCAAgC;EAChC,+BAA+B;;EAE/B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;;AAED;EACE,iBAAiB;EACjB,YAAY;CACb;;AAED;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,oCAAoC;EACpC,mBAAmB;CACpB;;AAED;EACE,gCAAgC;CACjC;;AAED;EACE,gCAAgC;CACjC;;AAED;;EAEE,iBAAiB;EACjB,eAAe;CAChB;;AAED;;;EAGE,gCAAgC;EAChC,sBAAsB;CACvB;;AAED;EACE,8BAA8B;CAC/B","file":"Footer.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.root {\n  background: #333;\n  color: #fff;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1000px;\n  max-width: var(--max-content-width);\n  text-align: center;\n}\n\n.text {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.text,\n.link {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Footer-root-3UnPj",
	"container": "Footer-container-vn1Ww",
	"text": "Footer-text-2Ff98",
	"spacer": "Footer-spacer-PsYhT",
	"link": "Footer-link-2TBmn"
};

/***/ }),

/***/ "./src/components/layout/Footer/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _misc_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/misc/Link.js");
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/layout/Footer/Footer.scss");
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Footer_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/layout/Footer/Footer.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["defineMessages"])({
  home: {
    "id": "app.footer.home",
    "defaultMessage": "Home"
  }
});

function Footer() {
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default()(_Footer_scss__WEBPACK_IMPORTED_MODULE_4___default.a);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _Footer_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _Footer_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: _Footer_scss__WEBPACK_IMPORTED_MODULE_4___default.a.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "\xA9 PRIA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: _Footer_scss__WEBPACK_IMPORTED_MODULE_4___default.a.spacer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _Footer_scss__WEBPACK_IMPORTED_MODULE_4___default.a.link,
    to: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, messages.home, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }))),  true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: _Footer_scss__WEBPACK_IMPORTED_MODULE_4___default.a.spacer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _Footer_scss__WEBPACK_IMPORTED_MODULE_4___default.a.link,
    to: "/privacy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Privacy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: _Footer_scss__WEBPACK_IMPORTED_MODULE_4___default.a.spacer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _Footer_scss__WEBPACK_IMPORTED_MODULE_4___default.a.link,
    to: "/admin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Admin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: _Footer_scss__WEBPACK_IMPORTED_MODULE_4___default.a.spacer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "\xB7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _Footer_scss__WEBPACK_IMPORTED_MODULE_4___default.a.link,
    to: "/not-found",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "Not Found")) : undefined));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/layout/Footer/Footer.scss":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/layout/Footer/Footer.scss");
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
      module.hot.accept("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/layout/Footer/Footer.scss", function() {
        css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/layout/Footer/Footer.scss");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/layout/Header/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("material-ui-popup-state/hooks");
/* harmony import */ var material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/locale/index.js");
/* harmony import */ var _misc_Link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/misc/Link.js");
/* harmony import */ var _misc_palette__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/misc/palette.js");
/* harmony import */ var _misc_commonMessages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/components/misc/commonMessages.js");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/components/layout/Header/logo.svg");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _users_Login__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/components/users/Login.js");
/* harmony import */ var _users_AuthProvider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/components/users/AuthProvider.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/layout/Header/Header.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



















const messages = { ...Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["defineMessages"])({
    homeLabel: {
      "id": "app.header.home_label",
      "defaultMessage": "Home"
    },
    homeLogoAlt: {
      "id": "app.header.home_logo_alt",
      "defaultMessage": "Hedgehog Logo"
    },
    title: {
      "id": "app.header.title",
      "defaultMessage": "Netrob IDE"
    },
    selectLanguageTooltip: {
      "id": "app.header.select_language_tooltip",
      "defaultMessage": "Select Language"
    },
    myAccount: {
      "id": "app.header.my_account_tooltip",
      "defaultMessage": "My Account"
    }
  }),
  ..._misc_commonMessages__WEBPACK_IMPORTED_MODULE_14__["default"]
};
const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  gutters: {
    paddingLeft: theme.spacing(2)
  },
  brandTxt: {
    marginLeft: '10px',
    flexGrow: 1
  }
}));
/**
 * The Header component displays the home button along with a language chooser and login/logout UI.
 */

function Header() {
  const classes = useStyles();
  const auth = Object(_users_AuthProvider__WEBPACK_IMPORTED_MODULE_17__["useAuth"])();
  const intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["useIntl"])();
  const {
    setPreferredLocale
  } = Object(_locale__WEBPACK_IMPORTED_MODULE_11__["useLocale"])();
  const [loginOpen, setLoginOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const selectLanguagePopupState = Object(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_10__["usePopupState"])({
    variant: 'popover',
    popupId: 'select-language-menu'
  });
  const authPopupState = Object(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_10__["usePopupState"])({
    variant: 'popover',
    popupId: 'auth-menu'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    classes: {
      gutters: classes.gutters
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, {
    edge: "start",
    color: "inherit",
    component: _misc_Link__WEBPACK_IMPORTED_MODULE_12__["default"],
    to: "/",
    "aria-label": intl.formatMessage(messages.homeLabel),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _logo_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: intl.formatMessage(messages.homeLogoAlt),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.brandTxt,
    variant: "h6",
    noWrap: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, messages.title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, messages.selectLanguageTooltip, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 23
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, _extends({
    color: "inherit"
  }, Object(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_10__["bindTrigger"])(selectLanguagePopupState), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_13__["SelectLanguageIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
    anchorOrigin: {
      horizontal: 'right',
      vertical: 'top'
    },
    transformOrigin: {
      horizontal: 'right',
      vertical: 'top'
    },
    keepMounted: true
  }, Object(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_10__["bindMenu"])(selectLanguagePopupState), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: () => {
      setPreferredLocale('de');
      selectLanguagePopupState.close();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, "Deutsch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: () => {
      setPreferredLocale('en');
      selectLanguagePopupState.close();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, "English")), auth.authData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, messages.myAccount, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 27
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, _extends({
    color: "inherit"
  }, Object(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_10__["bindTrigger"])(authPopupState), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_13__["AccountCircleIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
    anchorOrigin: {
      horizontal: 'right',
      vertical: 'top'
    },
    transformOrigin: {
      horizontal: 'right',
      vertical: 'top'
    },
    keepMounted: true
  }, Object(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_10__["bindMenu"])(authPopupState), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    onClick: auth.logout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, messages.logout, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, messages.login, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 25
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, {
    color: "inherit",
    onClick: () => setLoginOpen(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_13__["ExitToAppIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_users_Login__WEBPACK_IMPORTED_MODULE_16__["default"], {
    open: loginOpen,
    onSuccess: () => setLoginOpen(false),
    onError: () => setLoginOpen(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/layout/Header/logo.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/layout/Header/logo.svg?709028e7";

/***/ }),

/***/ "./src/components/layout/Layout/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/layout/Header/Header.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/layout/Sidebar/Sidebar.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/layout/Footer/Footer.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/layout/Layout/Layout.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









 // OpenDrawer component

// eslint-disable-next-line react/prop-types
const OpenDrawer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](({
  drawerClasses,
  ...props
}, ref) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
  ref: ref,
  variant: "permanent",
  open: true,
  classes: drawerClasses
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }
}))); // main component

const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  appBarSpacer: theme.mixins.toolbar,
  sidebar: {
    position: 'relative',
    height: '100vh'
  }
}));

/**
 * The Layout component pulls together Header, Sidebar, Footer and content.
 *
 * Content can be styled as `contentFill`, meaning the main area of the page should fill the viewport exactly,
 * the main component handles sizing the content to the page size;
 * or regular scrolling, meaning the content can overflow the viewport and will be scrolled as usual.
 */
function Layout({
  children,
  contentFill
}) {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    container: true,
    direction: "row",
    wrap: "nowrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.appBar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    component: OpenDrawer,
    drawerClasses: {
      paper: classes.sidebar
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classes.appBarSpacer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: {
      overflow: 'auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    style: {
      flex: '1 auto',
      height: '100vh'
    },
    container: true,
    direction: "column",
    wrap: "nowrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    className: classes.appBarSpacer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    style: {
      flex: '1 auto',
      // when not in contentFill mode, allow scrolling
      ...(contentFill ? {} : {
        overflow: 'auto'
      })
    },
    container: true,
    direction: "column",
    wrap: "nowrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    component: "main",
    style: { ...(contentFill ? {
        // fix height to fill the container
        flex: '1 0 0',
        minHeight: 0
      } : {
        // fill, but don't shrink to fit
        // the parent scroll the main content together with the footer
        flex: '1 auto'
      })
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }))));
}

Layout.defaultProps = {
  contentFill: false
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/layout/Sidebar/Sidebar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _misc_palette__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/misc/palette.js");
/* harmony import */ var _misc_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/misc/Link.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/layout/Sidebar/Sidebar.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["defineMessages"])({
  helpTooltip: {
    "id": "app.sidebar.help_tooltip",
    "defaultMessage": "Help"
  },
  contestTooltip: {
    "id": "app.sidebar.contest_tooltip",
    "defaultMessage": "Contest"
  }
});
const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  listItemIcon: {
    minWidth: 'auto'
  }
});

function NavItem({
  title,
  titleMsg,
  target,
  icon: TheIcon
}) {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7___default.a, {
    title: titleMsg ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], _extends({}, titleMsg, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 32
      }
    })) : title,
    placement: "right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    button: true,
    component: _misc_Link__WEBPACK_IMPORTED_MODULE_9__["default"],
    to: target,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.listItemIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TheIcon, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }))));
}

function Sidebar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NavItem, {
    titleMsg: messages.helpTooltip,
    target: "/help",
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_8__["HelpIcon"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NavItem, {
    titleMsg: messages.contestTooltip,
    target: "/contest",
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_8__["ContestIcon"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }),  true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NavItem, {
    title: "IndexedDB Test",
    target: "/indexedDB",
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_8__["IndexDBTestIcon"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](NavItem, {
    title: "WebRTC Test",
    target: "/webrtc",
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_8__["WebRTCTestIcon"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  })) : undefined);
}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/components/misc/Link.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/history.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/misc/Link.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Link extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleClick", event => {
      if (this.props.onClick) {
        this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      _core_history__WEBPACK_IMPORTED_MODULE_1__["default"].push(this.props.to);
    });
  }

  render() {
    const {
      to,
      children,
      ...props
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", _extends({
      href: to
    }, props, {
      onClick: this.handleClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }
    }), children);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./src/components/misc/commonMessages.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);

const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_0__["defineMessages"])({
  ok: {
    "id": "app.dialog.ok",
    "defaultMessage": "OK"
  },
  cancel: {
    "id": "app.dialog.cancel",
    "defaultMessage": "Cancel"
  },
  login: {
    "id": "app.login",
    "defaultMessage": "Log In"
  },
  logout: {
    "id": "app.logout",
    "defaultMessage": "Log Out"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (messages);

/***/ }),

/***/ "./src/components/misc/palette.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomResetIcon", function() { return ZoomResetIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminateAndResetIcon", function() { return TerminateAndResetIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mdi_material_ui_DotsVertical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mdi-material-ui/DotsVertical");
/* harmony import */ var mdi_material_ui_DotsVertical__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_DotsVertical__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "MenuIcon", function() { return mdi_material_ui_DotsVertical__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var mdi_material_ui_File__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mdi-material-ui/File");
/* harmony import */ var mdi_material_ui_File__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_File__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "FileIcon", function() { return mdi_material_ui_File__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var mdi_material_ui_Folder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("mdi-material-ui/Folder");
/* harmony import */ var mdi_material_ui_Folder__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Folder__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "FolderIcon", function() { return mdi_material_ui_Folder__WEBPACK_IMPORTED_MODULE_5___default.a; });
/* harmony import */ var mdi_material_ui_FolderOpen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("mdi-material-ui/FolderOpen");
/* harmony import */ var mdi_material_ui_FolderOpen__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_FolderOpen__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "FolderOpenIcon", function() { return mdi_material_ui_FolderOpen__WEBPACK_IMPORTED_MODULE_6___default.a; });
/* harmony import */ var mdi_material_ui_Widgets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("mdi-material-ui/Widgets");
/* harmony import */ var mdi_material_ui_Widgets__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Widgets__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "LanguageBlocklyIcon", function() { return mdi_material_ui_Widgets__WEBPACK_IMPORTED_MODULE_7___default.a; });
/* harmony import */ var mdi_material_ui_LanguageJavascript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("mdi-material-ui/LanguageJavascript");
/* harmony import */ var mdi_material_ui_LanguageJavascript__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_LanguageJavascript__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "LanguageJavascriptIcon", function() { return mdi_material_ui_LanguageJavascript__WEBPACK_IMPORTED_MODULE_8___default.a; });
/* harmony import */ var mdi_material_ui_LanguagePython__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("mdi-material-ui/LanguagePython");
/* harmony import */ var mdi_material_ui_LanguagePython__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_LanguagePython__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "LanguagePythonIcon", function() { return mdi_material_ui_LanguagePython__WEBPACK_IMPORTED_MODULE_9___default.a; });
/* harmony import */ var mdi_material_ui_Image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("mdi-material-ui/Image");
/* harmony import */ var mdi_material_ui_Image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Image__WEBPACK_IMPORTED_MODULE_10__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ImageFileIcon", function() { return mdi_material_ui_Image__WEBPACK_IMPORTED_MODULE_10___default.a; });
/* harmony import */ var mdi_material_ui_LanguageMarkdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("mdi-material-ui/LanguageMarkdown");
/* harmony import */ var mdi_material_ui_LanguageMarkdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_LanguageMarkdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "MarkdownFileIcon", function() { return mdi_material_ui_LanguageMarkdown__WEBPACK_IMPORTED_MODULE_11___default.a; });
/* harmony import */ var mdi_material_ui_FilePdf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("mdi-material-ui/FilePdf");
/* harmony import */ var mdi_material_ui_FilePdf__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_FilePdf__WEBPACK_IMPORTED_MODULE_12__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PdfFileIcon", function() { return mdi_material_ui_FilePdf__WEBPACK_IMPORTED_MODULE_12___default.a; });
/* harmony import */ var mdi_material_ui_ToyBrick__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("mdi-material-ui/ToyBrick");
/* harmony import */ var mdi_material_ui_ToyBrick__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_ToyBrick__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "MetadataPluginsIcon", function() { return mdi_material_ui_ToyBrick__WEBPACK_IMPORTED_MODULE_13___default.a; });
/* harmony import */ var mdi_material_ui_FolderImage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("mdi-material-ui/FolderImage");
/* harmony import */ var mdi_material_ui_FolderImage__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_FolderImage__WEBPACK_IMPORTED_MODULE_14__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "MetadataAssetsIcon", function() { return mdi_material_ui_FolderImage__WEBPACK_IMPORTED_MODULE_14___default.a; });
/* harmony import */ var mdi_material_ui_ViewCompactOutline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("mdi-material-ui/ViewCompactOutline");
/* harmony import */ var mdi_material_ui_ViewCompactOutline__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_ViewCompactOutline__WEBPACK_IMPORTED_MODULE_15__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "MetadataLayoutIcon", function() { return mdi_material_ui_ViewCompactOutline__WEBPACK_IMPORTED_MODULE_15___default.a; });
/* harmony import */ var mdi_material_ui_AxisArrow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("mdi-material-ui/AxisArrow");
/* harmony import */ var mdi_material_ui_AxisArrow__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_AxisArrow__WEBPACK_IMPORTED_MODULE_16__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "MetadataSimulatorIcon", function() { return mdi_material_ui_AxisArrow__WEBPACK_IMPORTED_MODULE_16___default.a; });
/* harmony import */ var mdi_material_ui_ToolboxOutline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("mdi-material-ui/ToolboxOutline");
/* harmony import */ var mdi_material_ui_ToolboxOutline__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_ToolboxOutline__WEBPACK_IMPORTED_MODULE_17__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "MetadataToolboxIcon", function() { return mdi_material_ui_ToolboxOutline__WEBPACK_IMPORTED_MODULE_17___default.a; });
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "LocalProjectIcon", function() { return mdi_material_ui_Folder__WEBPACK_IMPORTED_MODULE_5___default.a; });
/* harmony import */ var mdi_material_ui_CloudUpload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("mdi-material-ui/CloudUpload");
/* harmony import */ var mdi_material_ui_CloudUpload__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_CloudUpload__WEBPACK_IMPORTED_MODULE_18__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "UploadExerciseIcon", function() { return mdi_material_ui_CloudUpload__WEBPACK_IMPORTED_MODULE_18___default.a; });
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "RestoreLayoutIcon", function() { return mdi_material_ui_ViewCompactOutline__WEBPACK_IMPORTED_MODULE_15___default.a; });
/* harmony import */ var mdi_material_ui_Cogs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("mdi-material-ui/Cogs");
/* harmony import */ var mdi_material_ui_Cogs__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Cogs__WEBPACK_IMPORTED_MODULE_19__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "SettingsIcon", function() { return mdi_material_ui_Cogs__WEBPACK_IMPORTED_MODULE_19___default.a; });
/* harmony import */ var mdi_material_ui_Translate__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("mdi-material-ui/Translate");
/* harmony import */ var mdi_material_ui_Translate__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Translate__WEBPACK_IMPORTED_MODULE_20__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "SelectLanguageIcon", function() { return mdi_material_ui_Translate__WEBPACK_IMPORTED_MODULE_20___default.a; });
/* harmony import */ var mdi_material_ui_HelpCircleOutline__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("mdi-material-ui/HelpCircleOutline");
/* harmony import */ var mdi_material_ui_HelpCircleOutline__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_HelpCircleOutline__WEBPACK_IMPORTED_MODULE_21__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "HelpIcon", function() { return mdi_material_ui_HelpCircleOutline__WEBPACK_IMPORTED_MODULE_21___default.a; });
/* harmony import */ var mdi_material_ui_ExclamationThick__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("mdi-material-ui/ExclamationThick");
/* harmony import */ var mdi_material_ui_ExclamationThick__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_ExclamationThick__WEBPACK_IMPORTED_MODULE_22__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ContestIcon", function() { return mdi_material_ui_ExclamationThick__WEBPACK_IMPORTED_MODULE_22___default.a; });
/* harmony import */ var mdi_material_ui_TuneVertical__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("mdi-material-ui/TuneVertical");
/* harmony import */ var mdi_material_ui_TuneVertical__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_TuneVertical__WEBPACK_IMPORTED_MODULE_23__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ControlsIcon", function() { return mdi_material_ui_TuneVertical__WEBPACK_IMPORTED_MODULE_23___default.a; });
/* harmony import */ var mdi_material_ui_Database__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("mdi-material-ui/Database");
/* harmony import */ var mdi_material_ui_Database__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Database__WEBPACK_IMPORTED_MODULE_24__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "IndexDBTestIcon", function() { return mdi_material_ui_Database__WEBPACK_IMPORTED_MODULE_24___default.a; });
/* harmony import */ var mdi_material_ui_Forum__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("mdi-material-ui/Forum");
/* harmony import */ var mdi_material_ui_Forum__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Forum__WEBPACK_IMPORTED_MODULE_25__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "WebRTCTestIcon", function() { return mdi_material_ui_Forum__WEBPACK_IMPORTED_MODULE_25___default.a; });
/* harmony import */ var mdi_material_ui_Console__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("mdi-material-ui/Console");
/* harmony import */ var mdi_material_ui_Console__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Console__WEBPACK_IMPORTED_MODULE_26__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ConsoleIcon", function() { return mdi_material_ui_Console__WEBPACK_IMPORTED_MODULE_26___default.a; });
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "SimulatorIcon", function() { return mdi_material_ui_AxisArrow__WEBPACK_IMPORTED_MODULE_16___default.a; });
/* harmony import */ var mdi_material_ui_Plus__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("mdi-material-ui/Plus");
/* harmony import */ var mdi_material_ui_Plus__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Plus__WEBPACK_IMPORTED_MODULE_27__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "CreateIcon", function() { return mdi_material_ui_Plus__WEBPACK_IMPORTED_MODULE_27___default.a; });
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "OpenIcon", function() { return mdi_material_ui_FolderOpen__WEBPACK_IMPORTED_MODULE_6___default.a; });
/* harmony import */ var mdi_material_ui_Pencil__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("mdi-material-ui/Pencil");
/* harmony import */ var mdi_material_ui_Pencil__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Pencil__WEBPACK_IMPORTED_MODULE_28__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "RenameIcon", function() { return mdi_material_ui_Pencil__WEBPACK_IMPORTED_MODULE_28___default.a; });
/* harmony import */ var mdi_material_ui_Delete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("mdi-material-ui/Delete");
/* harmony import */ var mdi_material_ui_Delete__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Delete__WEBPACK_IMPORTED_MODULE_29__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "DeleteIcon", function() { return mdi_material_ui_Delete__WEBPACK_IMPORTED_MODULE_29___default.a; });
/* harmony import */ var mdi_material_ui_Refresh__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("mdi-material-ui/Refresh");
/* harmony import */ var mdi_material_ui_Refresh__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Refresh__WEBPACK_IMPORTED_MODULE_30__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "RefreshIcon", function() { return mdi_material_ui_Refresh__WEBPACK_IMPORTED_MODULE_30___default.a; });
/* harmony import */ var mdi_material_ui_Download__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("mdi-material-ui/Download");
/* harmony import */ var mdi_material_ui_Download__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Download__WEBPACK_IMPORTED_MODULE_31__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "DownloadIcon", function() { return mdi_material_ui_Download__WEBPACK_IMPORTED_MODULE_31___default.a; });
/* harmony import */ var mdi_material_ui_Upload__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("mdi-material-ui/Upload");
/* harmony import */ var mdi_material_ui_Upload__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Upload__WEBPACK_IMPORTED_MODULE_32__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "UploadIcon", function() { return mdi_material_ui_Upload__WEBPACK_IMPORTED_MODULE_32___default.a; });
/* harmony import */ var mdi_material_ui_Share__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("mdi-material-ui/Share");
/* harmony import */ var mdi_material_ui_Share__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Share__WEBPACK_IMPORTED_MODULE_33__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ShareIcon", function() { return mdi_material_ui_Share__WEBPACK_IMPORTED_MODULE_33___default.a; });
/* harmony import */ var mdi_material_ui_Play__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("mdi-material-ui/Play");
/* harmony import */ var mdi_material_ui_Play__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Play__WEBPACK_IMPORTED_MODULE_34__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ExecuteIcon", function() { return mdi_material_ui_Play__WEBPACK_IMPORTED_MODULE_34___default.a; });
/* harmony import */ var mdi_material_ui_Stop__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("mdi-material-ui/Stop");
/* harmony import */ var mdi_material_ui_Stop__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Stop__WEBPACK_IMPORTED_MODULE_35__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "TerminateIcon", function() { return mdi_material_ui_Stop__WEBPACK_IMPORTED_MODULE_35___default.a; });
/* harmony import */ var mdi_material_ui_RotateLeft__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("mdi-material-ui/RotateLeft");
/* harmony import */ var mdi_material_ui_RotateLeft__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_RotateLeft__WEBPACK_IMPORTED_MODULE_36__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ResetIcon", function() { return mdi_material_ui_RotateLeft__WEBPACK_IMPORTED_MODULE_36___default.a; });
/* harmony import */ var mdi_material_ui_MagnifyPlusOutline__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("mdi-material-ui/MagnifyPlusOutline");
/* harmony import */ var mdi_material_ui_MagnifyPlusOutline__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_MagnifyPlusOutline__WEBPACK_IMPORTED_MODULE_37__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ZoomInIcon", function() { return mdi_material_ui_MagnifyPlusOutline__WEBPACK_IMPORTED_MODULE_37___default.a; });
/* harmony import */ var mdi_material_ui_MagnifyMinusOutline__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("mdi-material-ui/MagnifyMinusOutline");
/* harmony import */ var mdi_material_ui_MagnifyMinusOutline__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_MagnifyMinusOutline__WEBPACK_IMPORTED_MODULE_38__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ZoomOutIcon", function() { return mdi_material_ui_MagnifyMinusOutline__WEBPACK_IMPORTED_MODULE_38___default.a; });
/* harmony import */ var mdi_material_ui_MagnifyScan__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("mdi-material-ui/MagnifyScan");
/* harmony import */ var mdi_material_ui_MagnifyScan__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_MagnifyScan__WEBPACK_IMPORTED_MODULE_39__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ZoomFitIcon", function() { return mdi_material_ui_MagnifyScan__WEBPACK_IMPORTED_MODULE_39___default.a; });
/* harmony import */ var mdi_material_ui_RotateOrbit__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__("mdi-material-ui/RotateOrbit");
/* harmony import */ var mdi_material_ui_RotateOrbit__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_RotateOrbit__WEBPACK_IMPORTED_MODULE_40__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "RotateOrbitIcon", function() { return mdi_material_ui_RotateOrbit__WEBPACK_IMPORTED_MODULE_40___default.a; });
/* harmony import */ var mdi_material_ui_Resize__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__("mdi-material-ui/Resize");
/* harmony import */ var mdi_material_ui_Resize__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Resize__WEBPACK_IMPORTED_MODULE_41__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ResizeIcon", function() { return mdi_material_ui_Resize__WEBPACK_IMPORTED_MODULE_41___default.a; });
/* harmony import */ var mdi_material_ui_ArrowAll__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__("mdi-material-ui/ArrowAll");
/* harmony import */ var mdi_material_ui_ArrowAll__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_ArrowAll__WEBPACK_IMPORTED_MODULE_42__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ArrowAllIcon", function() { return mdi_material_ui_ArrowAll__WEBPACK_IMPORTED_MODULE_42___default.a; });
/* harmony import */ var mdi_material_ui_RobotIndustrial__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__("mdi-material-ui/RobotIndustrial");
/* harmony import */ var mdi_material_ui_RobotIndustrial__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_RobotIndustrial__WEBPACK_IMPORTED_MODULE_43__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "RobotIndustrialIcon", function() { return mdi_material_ui_RobotIndustrial__WEBPACK_IMPORTED_MODULE_43___default.a; });
/* harmony import */ var mdi_material_ui_CodeJson__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__("mdi-material-ui/CodeJson");
/* harmony import */ var mdi_material_ui_CodeJson__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_CodeJson__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var mdi_material_ui_Magnify__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__("mdi-material-ui/Magnify");
/* harmony import */ var mdi_material_ui_Magnify__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Magnify__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var mdi_material_ui_ChevronLeft__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__("mdi-material-ui/ChevronLeft");
/* harmony import */ var mdi_material_ui_ChevronLeft__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_ChevronLeft__WEBPACK_IMPORTED_MODULE_46__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "SlideLeftIcon", function() { return mdi_material_ui_ChevronLeft__WEBPACK_IMPORTED_MODULE_46___default.a; });
/* harmony import */ var mdi_material_ui_ChevronRight__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__("mdi-material-ui/ChevronRight");
/* harmony import */ var mdi_material_ui_ChevronRight__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_ChevronRight__WEBPACK_IMPORTED_MODULE_47__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "SlideRightIcon", function() { return mdi_material_ui_ChevronRight__WEBPACK_IMPORTED_MODULE_47___default.a; });
/* harmony import */ var mdi_material_ui_AccountCircle__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__("mdi-material-ui/AccountCircle");
/* harmony import */ var mdi_material_ui_AccountCircle__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_AccountCircle__WEBPACK_IMPORTED_MODULE_48__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "AccountCircleIcon", function() { return mdi_material_ui_AccountCircle__WEBPACK_IMPORTED_MODULE_48___default.a; });
/* harmony import */ var mdi_material_ui_ExitToApp__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__("mdi-material-ui/ExitToApp");
/* harmony import */ var mdi_material_ui_ExitToApp__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_ExitToApp__WEBPACK_IMPORTED_MODULE_49__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ExitToAppIcon", function() { return mdi_material_ui_ExitToApp__WEBPACK_IMPORTED_MODULE_49___default.a; });
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/misc/palette.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable import/no-duplicates, import/first */

/**
 * Icons (and potentially other UI elements) are associated with more semantic names here and re-exported.
 * For example, instead of using `ArrowLeftIcon` for a "back" navigation action,
 * a "BackIcon" export should be added here so that
 * an icon for the "back" navigation action is only defined once, here,
 * and can be changed in a single place.
 *
 * Icons can be found at https://materialdesignicons.com/
 */



 // files: general



 // files: code



 // files: other file types



 // files: metadata





 // projects


 // project actions


 // IDE navigation






 // IDE tab components


 // file/collection actions








 // execution & simulation actions






 // 3D Simulation






const TerminateAndResetIconBadge = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])({
  badge: {
    bottom: '25%',
    right: '25%',
    background: '#e8e8e8',
    minWidth: 'auto',
    width: '15px',
    height: '15px'
  }
})(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_2___default.a);
const TerminateAndResetIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((props, ref) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TerminateAndResetIconBadge, {
  overlap: "circle",
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right'
  },
  badgeContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](mdi_material_ui_RotateLeft__WEBPACK_IMPORTED_MODULE_36___default.a, {
    style: {
      fontSize: '15px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](mdi_material_ui_Stop__WEBPACK_IMPORTED_MODULE_35___default.a, _extends({
  ref: ref
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }
}))));

const ZoomResetIconBadge = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])({
  badge: {
    bottom: '25%',
    left: '25%',
    background: '#e8e8e8',
    minWidth: 'auto',
    width: '13px',
    height: '13px'
  }
})(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_2___default.a);
const ZoomResetIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((props, ref) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ZoomResetIconBadge, {
  overlap: "circle",
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  badgeContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](mdi_material_ui_RotateLeft__WEBPACK_IMPORTED_MODULE_36___default.a, {
    style: {
      fontSize: '13px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }
  }),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](mdi_material_ui_Magnify__WEBPACK_IMPORTED_MODULE_45___default.a, _extends({
  ref: ref
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 131,
    columnNumber: 5
  }
})))); // misc actions







/***/ }),

/***/ "./src/components/users/Login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_lab_AlertTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@material-ui/lab/AlertTitle");
/* harmony import */ var _material_ui_lab_AlertTitle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_AlertTitle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _misc_commonMessages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/misc/commonMessages.js");
/* harmony import */ var _AuthProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/users/AuthProvider.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/users/Login.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














const messages = { ...Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["defineMessages"])({
    loginFailed: {
      "id": "app.login.failed",
      "defaultMessage": "Log In Failed"
    },
    username: {
      "id": "app.auth.username",
      "defaultMessage": "Username"
    },
    password: {
      "id": "app.auth.password",
      "defaultMessage": "Password"
    }
  }),
  ..._misc_commonMessages__WEBPACK_IMPORTED_MODULE_11__["default"]
};

/**
 * Dialog for entering login credentials and performing authentication.
 */
function Login({
  open,
  onSuccess,
  onError
}) {
  const auth = Object(_AuthProvider__WEBPACK_IMPORTED_MODULE_12__["useAuth"])();
  const intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["useIntl"])();
  const [username, setUsername] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
  const [password, setPassword] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);

  const login = async event => {
    event.preventDefault();

    try {
      await auth.login(username, password);

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      if (err instanceof apollo_client__WEBPACK_IMPORTED_MODULE_10__["ApolloError"]) {
        setError(err.message);
      } else {
        throw err;
      }
    } finally {
      setUsername('');
      setPassword('');
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6___default.a, {
    open: open,
    onClose: () => onError('CANCEL'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, messages.login, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
    onSubmit: login,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4___default.a, {
    severity: "error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_lab_AlertTitle__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, messages.loginFailed, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }))), error) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, {
    margin: "normal",
    required: true,
    fullWidth: true,
    label: intl.formatMessage(messages.username),
    value: username,
    onChange: e => setUsername(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, {
    margin: "normal",
    required: true,
    fullWidth: true,
    label: intl.formatMessage(messages.password),
    type: "password",
    value: password,
    onChange: e => setPassword(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: () => onError('CANCEL'),
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, messages.cancel, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "submit",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, messages.login, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/core/history.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_0__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
 // Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history

/* harmony default export */ __webpack_exports__["default"] = ( false && false);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2Fib3V0fmFkbWlufmNvbnRhY3R+Y29udGVzdH5oZWxwfmlkZX5pbmRleGVkREJ+bG9naW5+bm90LWZvdW5kfnByaXZhY3l+cmVnaXN0ZXJ+d2VicnRjLmpzIiwic291cmNlcyI6WyIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb21wb25lbnRzL2xheW91dC9Gb290ZXIvRm9vdGVyLnNjc3MiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb21wb25lbnRzL2xheW91dC9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC9Gb290ZXIvRm9vdGVyLnNjc3M/ZjdlYyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci9IZWFkZXIuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvbG9nby5zdmciLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb21wb25lbnRzL2xheW91dC9MYXlvdXQvTGF5b3V0LmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29tcG9uZW50cy9sYXlvdXQvU2lkZWJhci9TaWRlYmFyLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29tcG9uZW50cy9taXNjL0xpbmsuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb21wb25lbnRzL21pc2MvY29tbW9uTWVzc2FnZXMuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb21wb25lbnRzL21pc2MvcGFsZXR0ZS5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvbXBvbmVudHMvdXNlcnMvTG9naW4uanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb3JlL2hpc3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG46cm9vdCB7XFxuICAvKlxcbiAgICogVHlwb2dyYXBoeVxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWZvbnQtZmFtaWx5LWJhc2U6ICdTZWdvZSBVSScsICdIZWx2ZXRpY2FOZXVlLUxpZ2h0Jywgc2Fucy1zZXJpZjtcXG5cXG4gIC8qXFxuICAgKiBMYXlvdXRcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1tYXgtY29udGVudC13aWR0aDogMTAwMHB4O1xcblxcbiAgLypcXG4gICAqIEFwcGxpY2F0aW9uIHNwZWNpZmljXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0taGVkZ2Vob2ctZ3JlZW4tbGlnaHQ6ICMzOGI0NDk7XFxuICAtLWhlZGdlaG9nLWdyZWVuLWRhcms6ICMwMDdjM2M7XFxuXFxuICAvKlxcbiAgICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLXNjcmVlbi14cy1taW46IDQ4MHB4OyAgLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cXG4gIC0tc2NyZWVuLXNtLW1pbjogNzY4cHg7ICAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4gIC0tc2NyZWVuLW1kLW1pbjogOTkycHg7ICAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiAgLS1zY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcbn1cXG5cXG4uRm9vdGVyLXJvb3QtM1VuUGoge1xcbiAgYmFja2dyb3VuZDogIzMzMztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uRm9vdGVyLWNvbnRhaW5lci12bjFXdyB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHggMTVweDtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGVudC13aWR0aCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5Gb290ZXItdGV4dC0yRmY5OCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4uRm9vdGVyLXNwYWNlci1Qc1loVCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG5cXG4uRm9vdGVyLXRleHQtMkZmOTgsXFxuLkZvb3Rlci1saW5rLTJUQm1uIHtcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLkZvb3Rlci1saW5rLTJUQm1uLFxcbi5Gb290ZXItbGluay0yVEJtbjphY3RpdmUsXFxuLkZvb3Rlci1saW5rLTJUQm1uOnZpc2l0ZWQge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLkZvb3Rlci1saW5rLTJUQm1uOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyL0Zvb3Rlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0dBT0c7O0FBRUg7Ozs7Ozs7R0FPRzs7QUFFSDtFQUNFOztnRkFFOEU7O0VBRTlFLGtFQUFrRTs7RUFFbEU7O2dGQUU4RTs7RUFFOUUsNEJBQTRCOztFQUU1Qjs7Z0ZBRThFOztFQUU5RSxnQ0FBZ0M7RUFDaEMsK0JBQStCOztFQUUvQjs7Z0ZBRThFOztFQUU5RSx1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELHVCQUF1QixFQUFFLDZCQUE2QjtFQUN0RCx3QkFBd0IsQ0FBQyxpQ0FBaUM7Q0FDM0Q7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGdDQUFnQztDQUNqQzs7QUFFRDtFQUNFLGdDQUFnQztDQUNqQzs7QUFFRDs7RUFFRSxpQkFBaUI7RUFDakIsZUFBZTtDQUNoQjs7QUFFRDs7O0VBR0UsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLDhCQUE4QjtDQUMvQlwiLFwiZmlsZVwiOlwiRm9vdGVyLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogJ1NlZ29lIFVJJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDAwcHg7XFxuXFxuICAvKlxcbiAgICogQXBwbGljYXRpb24gc3BlY2lmaWNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1oZWRnZWhvZy1ncmVlbi1saWdodDogIzM4YjQ0OTtcXG4gIC0taGVkZ2Vob2ctZ3JlZW4tZGFyazogIzAwN2MzYztcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxufVxcblxcbi5yb290IHtcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHggMTVweDtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGVudC13aWR0aCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50ZXh0IHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5zcGFjZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXFxuLnRleHQsXFxuLmxpbmsge1xcbiAgcGFkZGluZzogMnB4IDVweDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4ubGluayxcXG4ubGluazphY3RpdmUsXFxuLmxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubGluazpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJGb290ZXItcm9vdC0zVW5QalwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkZvb3Rlci1jb250YWluZXItdm4xV3dcIixcblx0XCJ0ZXh0XCI6IFwiRm9vdGVyLXRleHQtMkZmOThcIixcblx0XCJzcGFjZXJcIjogXCJGb290ZXItc3BhY2VyLVBzWWhUXCIsXG5cdFwibGlua1wiOiBcIkZvb3Rlci1saW5rLTJUQm1uXCJcbn07IiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci91c2VTdHlsZXMnO1xuaW1wb3J0IHsgZGVmaW5lTWVzc2FnZXMsIEZvcm1hdHRlZE1lc3NhZ2UgYXMgTSB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9taXNjL0xpbmsnO1xuXG5pbXBvcnQgcyBmcm9tICcuL0Zvb3Rlci5zY3NzJztcblxuY29uc3QgbWVzc2FnZXMgPSBkZWZpbmVNZXNzYWdlcyh7XG4gIGhvbWU6IHtcbiAgICBpZDogJ2FwcC5mb290ZXIuaG9tZScsXG4gICAgZGVzY3JpcHRpb246ICdMaW5rIHRvIHRoZSBob21lIHBhZ2UnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnSG9tZScsXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gRm9vdGVyKCkge1xuICB1c2VTdHlsZXMocyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MudGV4dH0+wqkgUFJJQTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLnNwYWNlcn0+wrc8L3NwYW4+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT17cy5saW5rfSB0bz1cIi9cIj5cbiAgICAgICAgICA8TSB7Li4ubWVzc2FnZXMuaG9tZX0gLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICB7X19ERVZfXyA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLnNwYWNlcn0+wrc8L3NwYW4+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3MubGlua30gdG89XCIvcHJpdmFjeVwiPlxuICAgICAgICAgICAgICBQcml2YWN5XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Muc3BhY2VyfT7Ctzwvc3Bhbj5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17cy5saW5rfSB0bz1cIi9hZG1pblwiPlxuICAgICAgICAgICAgICBBZG1pblxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLnNwYWNlcn0+wrc8L3NwYW4+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3MubGlua30gdG89XCIvbm90LWZvdW5kXCI+XG4gICAgICAgICAgICAgIE5vdCBGb3VuZFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJcbiAgICB2YXIgcmVmcyA9IDA7XG4gICAgdmFyIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMyEuL0Zvb3Rlci5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9pbnNlcnRDc3MuanNcIik7XG4gICAgdmFyIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG5cbiAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjc3MubG9jYWxzIHx8IHt9O1xuICAgIGV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiAnJyArIGNzczsgfTtcbiAgICBleHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcblxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0zIS4vRm9vdGVyLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMyEuL0Zvb3Rlci5zY3NzXCIpO1xuICAgICAgICBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCB7IGRlZmluZU1lc3NhZ2VzLCB1c2VJbnRsLCBGb3JtYXR0ZWRNZXNzYWdlIGFzIE0gfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcblxuaW1wb3J0IHsgdXNlUG9wdXBTdGF0ZSwgYmluZFRyaWdnZXIsIGJpbmRNZW51IH0gZnJvbSAnbWF0ZXJpYWwtdWktcG9wdXAtc3RhdGUvaG9va3MnO1xuXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi9sb2NhbGUnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vbWlzYy9MaW5rJztcbmltcG9ydCB7IFNlbGVjdExhbmd1YWdlSWNvbiwgQWNjb3VudENpcmNsZUljb24sIEV4aXRUb0FwcEljb24gfSBmcm9tICcuLi8uLi9taXNjL3BhbGV0dGUnO1xuaW1wb3J0IGNvbW1vbk1lc3NhZ2VzIGZyb20gJy4uLy4uL21pc2MvY29tbW9uTWVzc2FnZXMnO1xuXG5pbXBvcnQgbG9nb1VybCBmcm9tICcuL2xvZ28uc3ZnJztcbmltcG9ydCBMb2dpbiBmcm9tICcuLi8uLi91c2Vycy9Mb2dpbic7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXNlcnMvQXV0aFByb3ZpZGVyJztcblxuY29uc3QgbWVzc2FnZXMgPSB7XG4gIC4uLmRlZmluZU1lc3NhZ2VzKHtcbiAgICBob21lTGFiZWw6IHtcbiAgICAgIGlkOiAnYXBwLmhlYWRlci5ob21lX2xhYmVsJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSG9tZSBidXR0b24gbGFiZWwgZm9yIHNjcmVlbnJlYWRlcnMnLFxuICAgICAgZGVmYXVsdE1lc3NhZ2U6ICdIb21lJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvQWx0OiB7XG4gICAgICBpZDogJ2FwcC5oZWFkZXIuaG9tZV9sb2dvX2FsdCcsXG4gICAgICBkZXNjcmlwdGlvbjogXCJhbHQtdGV4dCBmb3IgdGhlIGhvbWUgYnV0dG9uJ3MgaWNvblwiLFxuICAgICAgZGVmYXVsdE1lc3NhZ2U6ICdIZWRnZWhvZyBMb2dvJyxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBpZDogJ2FwcC5oZWFkZXIudGl0bGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdNYWluIE5ldHJvYiBJREUgdGl0bGUnLFxuICAgICAgZGVmYXVsdE1lc3NhZ2U6ICdOZXRyb2IgSURFJyxcbiAgICB9LFxuICAgIHNlbGVjdExhbmd1YWdlVG9vbHRpcDoge1xuICAgICAgaWQ6ICdhcHAuaGVhZGVyLnNlbGVjdF9sYW5ndWFnZV90b29sdGlwJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVG9vbHRpcCBmb3IgdGhlIGxhbmd1YWdlIHNlbGVjdGlvbiBtZW51IGJ1dHRvbicsXG4gICAgICBkZWZhdWx0TWVzc2FnZTogJ1NlbGVjdCBMYW5ndWFnZScsXG4gICAgfSxcbiAgICBteUFjY291bnQ6IHtcbiAgICAgIGlkOiAnYXBwLmhlYWRlci5teV9hY2NvdW50X3Rvb2x0aXAnLFxuICAgICAgZGVzY3JpcHRpb246ICdUb29sdGlwIGZvciB0aGUgYWNjb3VudCB0b2dnbGUgbWVudSBidXR0b24nLFxuICAgICAgZGVmYXVsdE1lc3NhZ2U6ICdNeSBBY2NvdW50JyxcbiAgICB9LFxuICB9KSxcbiAgLi4uY29tbW9uTWVzc2FnZXMsXG59O1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgZ3V0dGVyczoge1xuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICBicmFuZFR4dDoge1xuICAgIG1hcmdpbkxlZnQ6ICcxMHB4JyxcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbn0pKTtcblxuLyoqXG4gKiBUaGUgSGVhZGVyIGNvbXBvbmVudCBkaXNwbGF5cyB0aGUgaG9tZSBidXR0b24gYWxvbmcgd2l0aCBhIGxhbmd1YWdlIGNob29zZXIgYW5kIGxvZ2luL2xvZ291dCBVSS5cbiAqL1xuZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XG4gIGNvbnN0IGludGwgPSB1c2VJbnRsKCk7XG4gIGNvbnN0IHsgc2V0UHJlZmVycmVkTG9jYWxlIH0gPSB1c2VMb2NhbGUoKTtcblxuICBjb25zdCBbbG9naW5PcGVuLCBzZXRMb2dpbk9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHNlbGVjdExhbmd1YWdlUG9wdXBTdGF0ZSA9IHVzZVBvcHVwU3RhdGUoe1xuICAgIHZhcmlhbnQ6ICdwb3BvdmVyJyxcbiAgICBwb3B1cElkOiAnc2VsZWN0LWxhbmd1YWdlLW1lbnUnLFxuICB9KTtcbiAgY29uc3QgYXV0aFBvcHVwU3RhdGUgPSB1c2VQb3B1cFN0YXRlKHtcbiAgICB2YXJpYW50OiAncG9wb3ZlcicsXG4gICAgcG9wdXBJZDogJ2F1dGgtbWVudScsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFRvb2xiYXIgY2xhc3Nlcz17eyBndXR0ZXJzOiBjbGFzc2VzLmd1dHRlcnMgfX0+XG4gICAgICA8SWNvbkJ1dHRvblxuICAgICAgICBlZGdlPVwic3RhcnRcIlxuICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICBjb21wb25lbnQ9e0xpbmt9XG4gICAgICAgIHRvPVwiL1wiXG4gICAgICAgIGFyaWEtbGFiZWw9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy5ob21lTGFiZWwpfVxuICAgICAgPlxuICAgICAgICA8SWNvbj5cbiAgICAgICAgICA8aW1nIHNyYz17bG9nb1VybH0gYWx0PXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMuaG9tZUxvZ29BbHQpfSAvPlxuICAgICAgICA8L0ljb24+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuYnJhbmRUeHR9IHZhcmlhbnQ9XCJoNlwiIG5vV3JhcD5cbiAgICAgICAgPE0gey4uLm1lc3NhZ2VzLnRpdGxlfSAvPlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPFRvb2x0aXAgdGl0bGU9ezxNIHsuLi5tZXNzYWdlcy5zZWxlY3RMYW5ndWFnZVRvb2x0aXB9IC8+fT5cbiAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgey4uLmJpbmRUcmlnZ2VyKHNlbGVjdExhbmd1YWdlUG9wdXBTdGF0ZSl9PlxuICAgICAgICAgIDxTZWxlY3RMYW5ndWFnZUljb24gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPC9Ub29sdGlwPlxuICAgICAgPE1lbnVcbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7IGhvcml6b250YWw6ICdyaWdodCcsIHZlcnRpY2FsOiAndG9wJyB9fVxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3sgaG9yaXpvbnRhbDogJ3JpZ2h0JywgdmVydGljYWw6ICd0b3AnIH19XG4gICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgIHsuLi5iaW5kTWVudShzZWxlY3RMYW5ndWFnZVBvcHVwU3RhdGUpfVxuICAgICAgPlxuICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRQcmVmZXJyZWRMb2NhbGUoJ2RlJyk7XG4gICAgICAgICAgICBzZWxlY3RMYW5ndWFnZVBvcHVwU3RhdGUuY2xvc2UoKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgRGV1dHNjaFxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRQcmVmZXJyZWRMb2NhbGUoJ2VuJyk7XG4gICAgICAgICAgICBzZWxlY3RMYW5ndWFnZVBvcHVwU3RhdGUuY2xvc2UoKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgRW5nbGlzaFxuICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgPC9NZW51PlxuICAgICAge2F1dGguYXV0aERhdGEgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFRvb2x0aXAgdGl0bGU9ezxNIHsuLi5tZXNzYWdlcy5teUFjY291bnR9IC8+fT5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIHsuLi5iaW5kVHJpZ2dlcihhdXRoUG9wdXBTdGF0ZSl9PlxuICAgICAgICAgICAgICA8QWNjb3VudENpcmNsZUljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgIGFuY2hvck9yaWdpbj17eyBob3Jpem9udGFsOiAncmlnaHQnLCB2ZXJ0aWNhbDogJ3RvcCcgfX1cbiAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17eyBob3Jpem9udGFsOiAncmlnaHQnLCB2ZXJ0aWNhbDogJ3RvcCcgfX1cbiAgICAgICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgICAgICB7Li4uYmluZE1lbnUoYXV0aFBvcHVwU3RhdGUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXthdXRoLmxvZ291dH0+XG4gICAgICAgICAgICAgIDxNIHsuLi5tZXNzYWdlcy5sb2dvdXR9IC8+XG4gICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8VG9vbHRpcCB0aXRsZT17PE0gey4uLm1lc3NhZ2VzLmxvZ2lufSAvPn0+XG4gICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17KCkgPT4gc2V0TG9naW5PcGVuKHRydWUpfT5cbiAgICAgICAgICAgIDxFeGl0VG9BcHBJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICApfVxuXG4gICAgICA8TG9naW5cbiAgICAgICAgb3Blbj17bG9naW5PcGVufVxuICAgICAgICBvblN1Y2Nlc3M9eygpID0+IHNldExvZ2luT3BlbihmYWxzZSl9XG4gICAgICAgIG9uRXJyb3I9eygpID0+IHNldExvZ2luT3BlbihmYWxzZSl9XG4gICAgICAvPlxuICAgIDwvVG9vbGJhcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci9sb2dvLnN2Zz83MDkwMjhlN1wiOyIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcblxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IERyYXdlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXInO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXInO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vU2lkZWJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlcic7XG5cbi8vIE9wZW5EcmF3ZXIgY29tcG9uZW50XG5cbnR5cGUgT3BlbkRyYXdlclByb3BzID0ge3xcbiAgZHJhd2VyQ2xhc3Nlcz86IE9iamVjdCxcbiAgLi4uUmVhY3QuRWxlbWVudENvbmZpZzx0eXBlb2YgRHJhd2VyPixcbnx9O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuY29uc3QgT3BlbkRyYXdlciA9IFJlYWN0LmZvcndhcmRSZWY8T3BlbkRyYXdlclByb3BzLCBSZWFjdC5FbGVtZW50PHR5cGVvZiBEcmF3ZXI+PihcbiAgKHsgZHJhd2VyQ2xhc3NlcywgLi4ucHJvcHMgfTogT3BlbkRyYXdlclByb3BzLCByZWY6IFJlZjx0eXBlb2YgRHJhd2VyPikgPT4gKFxuICAgIDxEcmF3ZXIgcmVmPXtyZWZ9IHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuIGNsYXNzZXM9e2RyYXdlckNsYXNzZXN9IHsuLi5wcm9wc30gLz5cbiAgKSxcbik7XG5cbi8vIG1haW4gY29tcG9uZW50XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBhcHBCYXI6IHtcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxuICB9LFxuICBhcHBCYXJTcGFjZXI6IHRoZW1lLm1peGlucy50b29sYmFyLFxuICBzaWRlYmFyOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICB9LFxufSkpO1xuXG50eXBlIFByb3BzID0ge3xcbiAgY2hpbGRyZW46IFJlYWN0Lk5vZGUsXG4gIGNvbnRlbnRGaWxsOiBib29sZWFuLFxufH07XG5cbi8qKlxuICogVGhlIExheW91dCBjb21wb25lbnQgcHVsbHMgdG9nZXRoZXIgSGVhZGVyLCBTaWRlYmFyLCBGb290ZXIgYW5kIGNvbnRlbnQuXG4gKlxuICogQ29udGVudCBjYW4gYmUgc3R5bGVkIGFzIGBjb250ZW50RmlsbGAsIG1lYW5pbmcgdGhlIG1haW4gYXJlYSBvZiB0aGUgcGFnZSBzaG91bGQgZmlsbCB0aGUgdmlld3BvcnQgZXhhY3RseSxcbiAqIHRoZSBtYWluIGNvbXBvbmVudCBoYW5kbGVzIHNpemluZyB0aGUgY29udGVudCB0byB0aGUgcGFnZSBzaXplO1xuICogb3IgcmVndWxhciBzY3JvbGxpbmcsIG1lYW5pbmcgdGhlIGNvbnRlbnQgY2FuIG92ZXJmbG93IHRoZSB2aWV3cG9ydCBhbmQgd2lsbCBiZSBzY3JvbGxlZCBhcyB1c3VhbC5cbiAqL1xuZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4sIGNvbnRlbnRGaWxsIH06IFByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIgd3JhcD1cIm5vd3JhcFwiPlxuICAgICAgPEFwcEJhciBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyfT5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgPC9BcHBCYXI+XG4gICAgICA8R3JpZCBpdGVtIGNvbXBvbmVudD17T3BlbkRyYXdlcn0gZHJhd2VyQ2xhc3Nlcz17eyBwYXBlcjogY2xhc3Nlcy5zaWRlYmFyIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBCYXJTcGFjZXJ9IC8+XG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6ICdhdXRvJyB9fT5cbiAgICAgICAgICA8U2lkZWJhciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkXG4gICAgICAgIGl0ZW1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBmbGV4OiAnMSBhdXRvJyxcbiAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgIH19XG4gICAgICAgIGNvbnRhaW5lclxuICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICB3cmFwPVwibm93cmFwXCJcbiAgICAgID5cbiAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyU3BhY2VyfSAvPlxuICAgICAgICA8R3JpZFxuICAgICAgICAgIGl0ZW1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZmxleDogJzEgYXV0bycsXG4gICAgICAgICAgICAvLyB3aGVuIG5vdCBpbiBjb250ZW50RmlsbCBtb2RlLCBhbGxvdyBzY3JvbGxpbmdcbiAgICAgICAgICAgIC4uLihjb250ZW50RmlsbCA/IHt9IDogeyBvdmVyZmxvdzogJ2F1dG8nIH0pLFxuICAgICAgICAgIH19XG4gICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICB3cmFwPVwibm93cmFwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIC4uLihjb250ZW50RmlsbFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAvLyBmaXggaGVpZ2h0IHRvIGZpbGwgdGhlIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAnMSAwIDAnLFxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbGwsIGJ1dCBkb24ndCBzaHJpbmsgdG8gZml0XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBwYXJlbnQgc2Nyb2xsIHRoZSBtYWluIGNvbnRlbnQgdG9nZXRoZXIgd2l0aCB0aGUgZm9vdGVyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6ICcxIGF1dG8nLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9HcmlkPlxuICApO1xufVxuTGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udGVudEZpbGw6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IHsgZGVmaW5lTWVzc2FnZXMsIEZvcm1hdHRlZE1lc3NhZ2UgYXMgTSB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbic7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xuXG5pbXBvcnQge1xuICBIZWxwSWNvbixcbiAgQ29udGVzdEljb24sXG4gIC8vIENvbnRyb2xzSWNvbixcbiAgSW5kZXhEQlRlc3RJY29uLFxuICBXZWJSVENUZXN0SWNvbixcbn0gZnJvbSAnLi4vLi4vbWlzYy9wYWxldHRlJztcblxuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vbWlzYy9MaW5rJztcblxuY29uc3QgbWVzc2FnZXMgPSBkZWZpbmVNZXNzYWdlcyh7XG4gIGhlbHBUb29sdGlwOiB7XG4gICAgaWQ6ICdhcHAuc2lkZWJhci5oZWxwX3Rvb2x0aXAnLFxuICAgIGRlc2NyaXB0aW9uOiAnVG9vbHRpcCBmb3IgdGhlIEhlbHAgcGFnZScsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdIZWxwJyxcbiAgfSxcbiAgY29udGVzdFRvb2x0aXA6IHtcbiAgICBpZDogJ2FwcC5zaWRlYmFyLmNvbnRlc3RfdG9vbHRpcCcsXG4gICAgZGVzY3JpcHRpb246ICdUb29sdGlwIGZvciB0aGUgQ29udGVzdCBwYWdlJyxcbiAgICBkZWZhdWx0TWVzc2FnZTogJ0NvbnRlc3QnLFxuICB9LFxufSk7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBsaXN0SXRlbUljb246IHtcbiAgICBtaW5XaWR0aDogJ2F1dG8nLFxuICB9LFxufSk7XG5cbnR5cGUgTmF2SXRlbVByb3BzID0ge3xcbiAgdGl0bGU/OiBzdHJpbmcsXG4gIHRpdGxlTXNnPzogT2JqZWN0LFxuICB0YXJnZXQ6IHN0cmluZyxcbiAgaWNvbjogQ2xhc3M8UmVhY3QuQ29tcG9uZW50PGFueT4+LFxufH07XG5cbmZ1bmN0aW9uIE5hdkl0ZW0oeyB0aXRsZSwgdGl0bGVNc2csIHRhcmdldCwgaWNvbjogVGhlSWNvbiB9OiBOYXZJdGVtUHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxUb29sdGlwIHRpdGxlPXt0aXRsZU1zZyA/IDxNIHsuLi50aXRsZU1zZ30gLz4gOiB0aXRsZX0gcGxhY2VtZW50PVwicmlnaHRcIj5cbiAgICAgIDxMaXN0SXRlbSBidXR0b24gY29tcG9uZW50PXtMaW5rfSB0bz17dGFyZ2V0fT5cbiAgICAgICAgPExpc3RJdGVtSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW1JY29ufT5cbiAgICAgICAgICA8VGhlSWNvbiAvPlxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgPC9Ub29sdGlwPlxuICApO1xufVxuXG5mdW5jdGlvbiBTaWRlYmFyKCkge1xuICByZXR1cm4gKFxuICAgIDxMaXN0PlxuICAgICAgPE5hdkl0ZW0gdGl0bGVNc2c9e21lc3NhZ2VzLmhlbHBUb29sdGlwfSB0YXJnZXQ9XCIvaGVscFwiIGljb249e0hlbHBJY29ufSAvPlxuICAgICAgPE5hdkl0ZW0gdGl0bGVNc2c9e21lc3NhZ2VzLmNvbnRlc3RUb29sdGlwfSB0YXJnZXQ9XCIvY29udGVzdFwiIGljb249e0NvbnRlc3RJY29ufSAvPlxuICAgICAgey8qIDxOYXZJdGVtIHRpdGxlTXNnPXttZXNzYWdlcy5jb250cm9sc1Rvb2x0aXB9IHRhcmdldD1cIi9jb250cm9sXCIgaWNvbj17Q29udHJvbHNJY29ufSAvPiAqL31cbiAgICAgIHtfX0RFVl9fID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgPE5hdkl0ZW0gdGl0bGU9XCJJbmRleGVkREIgVGVzdFwiIHRhcmdldD1cIi9pbmRleGVkREJcIiBpY29uPXtJbmRleERCVGVzdEljb259IC8+XG4gICAgICAgICAgPE5hdkl0ZW0gdGl0bGU9XCJXZWJSVEMgVGVzdFwiIHRhcmdldD1cIi93ZWJydGNcIiBpY29uPXtXZWJSVENUZXN0SWNvbn0gLz5cbiAgICAgICAgPC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L0xpc3Q+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGhpc3RvcnkgZnJvbSAnLi4vLi4vY29yZS9oaXN0b3J5JztcblxuZnVuY3Rpb24gaXNMZWZ0Q2xpY2tFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuYnV0dG9uID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG50eXBlIFByb3BUeXBlcyA9IHt8XG4gIHRvOiBzdHJpbmcsXG4gIG9uQ2xpY2s/OiAoT2JqZWN0KSA9PiB2b2lkLFxuICBjaGlsZHJlbj86IFJlYWN0Lk5vZGUsXG4gIGNsYXNzTmFtZT86IHN0cmluZyxcbnx9O1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BUeXBlcz4ge1xuICBoYW5kbGVDbGljayA9IChldmVudDogYW55KSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB8fCAhaXNMZWZ0Q2xpY2tFdmVudChldmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGlzdG9yeS5wdXNoKHRoaXMucHJvcHMudG8pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRvLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGhyZWY9e3RvfSB7Li4ucHJvcHN9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuIiwiaW1wb3J0IHsgZGVmaW5lTWVzc2FnZXMgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuY29uc3QgbWVzc2FnZXMgPSBkZWZpbmVNZXNzYWdlcyh7XG4gIG9rOiB7XG4gICAgaWQ6ICdhcHAuZGlhbG9nLm9rJyxcbiAgICBkZXNjcmlwdGlvbjogJ3RleHQgZm9yIHRoZSBPSyBidXR0b24gaW4gZGlhbG9ncycsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdPSycsXG4gIH0sXG4gIGNhbmNlbDoge1xuICAgIGlkOiAnYXBwLmRpYWxvZy5jYW5jZWwnLFxuICAgIGRlc2NyaXB0aW9uOiAndGV4dCBmb3IgdGhlIENhbmNlbCBidXR0b24gaW4gZGlhbG9ncycsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdDYW5jZWwnLFxuICB9LFxuICBsb2dpbjoge1xuICAgIGlkOiAnYXBwLmxvZ2luJyxcbiAgICBkZXNjcmlwdGlvbjogJ0xvZyBJbiBUaXRsZScsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdMb2cgSW4nLFxuICB9LFxuICBsb2dvdXQ6IHtcbiAgICBpZDogJ2FwcC5sb2dvdXQnLFxuICAgIGRlc2NyaXB0aW9uOiAnTG9nIE91dCBUaXRsZScsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdMb2cgT3V0JyxcbiAgfSxcbn0pO1xuZXhwb3J0IGRlZmF1bHQgbWVzc2FnZXM7XG4iLCIvLyBAZmxvd1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWR1cGxpY2F0ZXMsIGltcG9ydC9maXJzdCAqL1xuXG4vKipcbiAqIEljb25zIChhbmQgcG90ZW50aWFsbHkgb3RoZXIgVUkgZWxlbWVudHMpIGFyZSBhc3NvY2lhdGVkIHdpdGggbW9yZSBzZW1hbnRpYyBuYW1lcyBoZXJlIGFuZCByZS1leHBvcnRlZC5cbiAqIEZvciBleGFtcGxlLCBpbnN0ZWFkIG9mIHVzaW5nIGBBcnJvd0xlZnRJY29uYCBmb3IgYSBcImJhY2tcIiBuYXZpZ2F0aW9uIGFjdGlvbixcbiAqIGEgXCJCYWNrSWNvblwiIGV4cG9ydCBzaG91bGQgYmUgYWRkZWQgaGVyZSBzbyB0aGF0XG4gKiBhbiBpY29uIGZvciB0aGUgXCJiYWNrXCIgbmF2aWdhdGlvbiBhY3Rpb24gaXMgb25seSBkZWZpbmVkIG9uY2UsIGhlcmUsXG4gKiBhbmQgY2FuIGJlIGNoYW5nZWQgaW4gYSBzaW5nbGUgcGxhY2UuXG4gKlxuICogSWNvbnMgY2FuIGJlIGZvdW5kIGF0IGh0dHBzOi8vbWF0ZXJpYWxkZXNpZ25pY29ucy5jb20vXG4gKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnO1xuaW1wb3J0IEJhZGdlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhZGdlJztcblxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9Eb3RzVmVydGljYWwnO1xuXG4vLyBmaWxlczogZ2VuZXJhbFxuaW1wb3J0IEZpbGVJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9GaWxlJztcbmltcG9ydCBGb2xkZXJJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9Gb2xkZXInO1xuaW1wb3J0IEZvbGRlck9wZW5JY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9Gb2xkZXJPcGVuJztcblxuLy8gZmlsZXM6IGNvZGVcbmltcG9ydCBMYW5ndWFnZUJsb2NrbHlJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9XaWRnZXRzJztcbmltcG9ydCBMYW5ndWFnZUphdmFzY3JpcHRJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9MYW5ndWFnZUphdmFzY3JpcHQnO1xuaW1wb3J0IExhbmd1YWdlUHl0aG9uSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvTGFuZ3VhZ2VQeXRob24nO1xuXG4vLyBmaWxlczogb3RoZXIgZmlsZSB0eXBlc1xuaW1wb3J0IEltYWdlRmlsZUljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0ltYWdlJztcbmltcG9ydCBNYXJrZG93bkZpbGVJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9MYW5ndWFnZU1hcmtkb3duJztcbmltcG9ydCBQZGZGaWxlSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvRmlsZVBkZic7XG5cbi8vIGZpbGVzOiBtZXRhZGF0YVxuaW1wb3J0IE1ldGFkYXRhUGx1Z2luc0ljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL1RveUJyaWNrJztcbmltcG9ydCBNZXRhZGF0YUFzc2V0c0ljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0ZvbGRlckltYWdlJztcbmltcG9ydCBNZXRhZGF0YUxheW91dEljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL1ZpZXdDb21wYWN0T3V0bGluZSc7XG5pbXBvcnQgTWV0YWRhdGFTaW11bGF0b3JJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9BeGlzQXJyb3cnO1xuaW1wb3J0IE1ldGFkYXRhVG9vbGJveEljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL1Rvb2xib3hPdXRsaW5lJztcblxuLy8gcHJvamVjdHNcbmltcG9ydCBMb2NhbFByb2plY3RJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9Gb2xkZXInO1xuaW1wb3J0IFVwbG9hZEV4ZXJjaXNlSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvQ2xvdWRVcGxvYWQnO1xuXG4vLyBwcm9qZWN0IGFjdGlvbnNcbmltcG9ydCBSZXN0b3JlTGF5b3V0SWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvVmlld0NvbXBhY3RPdXRsaW5lJztcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0NvZ3MnO1xuXG4vLyBJREUgbmF2aWdhdGlvblxuaW1wb3J0IFNlbGVjdExhbmd1YWdlSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvVHJhbnNsYXRlJztcbmltcG9ydCBIZWxwSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvSGVscENpcmNsZU91dGxpbmUnO1xuaW1wb3J0IENvbnRlc3RJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9FeGNsYW1hdGlvblRoaWNrJztcbmltcG9ydCBDb250cm9sc0ljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL1R1bmVWZXJ0aWNhbCc7XG5pbXBvcnQgSW5kZXhEQlRlc3RJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9EYXRhYmFzZSc7XG5pbXBvcnQgV2ViUlRDVGVzdEljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0ZvcnVtJztcblxuLy8gSURFIHRhYiBjb21wb25lbnRzXG5pbXBvcnQgQ29uc29sZUljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0NvbnNvbGUnO1xuaW1wb3J0IFNpbXVsYXRvckljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0F4aXNBcnJvdyc7XG5cbi8vIGZpbGUvY29sbGVjdGlvbiBhY3Rpb25zXG5pbXBvcnQgQ3JlYXRlSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvUGx1cyc7XG5pbXBvcnQgT3Blbkljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0ZvbGRlck9wZW4nO1xuaW1wb3J0IFJlbmFtZUljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL1BlbmNpbCc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvRGVsZXRlJztcbmltcG9ydCBSZWZyZXNoSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvUmVmcmVzaCc7XG5pbXBvcnQgRG93bmxvYWRJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9Eb3dubG9hZCc7XG5pbXBvcnQgVXBsb2FkSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvVXBsb2FkJztcbmltcG9ydCBTaGFyZUljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL1NoYXJlJ1xuXG4vLyBleGVjdXRpb24gJiBzaW11bGF0aW9uIGFjdGlvbnNcbmltcG9ydCBFeGVjdXRlSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvUGxheSc7XG5pbXBvcnQgVGVybWluYXRlSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvU3RvcCc7XG5pbXBvcnQgUmVzZXRJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9Sb3RhdGVMZWZ0JztcbmltcG9ydCBab29tSW5JY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9NYWduaWZ5UGx1c091dGxpbmUnO1xuaW1wb3J0IFpvb21PdXRJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9NYWduaWZ5TWludXNPdXRsaW5lJztcbmltcG9ydCBab29tRml0SWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvTWFnbmlmeVNjYW4nO1xuLy8gM0QgU2ltdWxhdGlvblxuaW1wb3J0ICBSb3RhdGVPcmJpdEljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL1JvdGF0ZU9yYml0JzsgXG5pbXBvcnQgIFJlc2l6ZUljb24gIGZyb20gJ21kaS1tYXRlcmlhbC11aS9SZXNpemUnOyBcbmltcG9ydCAgQXJyb3dBbGxJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9BcnJvd0FsbCc7XG5pbXBvcnQgUm9ib3RJbmR1c3RyaWFsSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvUm9ib3RJbmR1c3RyaWFsJztcbmltcG9ydCBDb2RlSnNvbkljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0NvZGVKc29uJztcbmNvbnN0IFRlcm1pbmF0ZUFuZFJlc2V0SWNvbkJhZGdlID0gd2l0aFN0eWxlcyh7XG4gIGJhZGdlOiB7XG4gICAgYm90dG9tOiAnMjUlJyxcbiAgICByaWdodDogJzI1JScsXG4gICAgYmFja2dyb3VuZDogJyNlOGU4ZTgnLFxuICAgIG1pbldpZHRoOiAnYXV0bycsXG4gICAgd2lkdGg6ICcxNXB4JyxcbiAgICBoZWlnaHQ6ICcxNXB4JyxcbiAgfSxcbn0pKEJhZGdlKTtcblxuY29uc3QgVGVybWluYXRlQW5kUmVzZXRJY29uID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudENvbmZpZzx0eXBlb2YgVGVybWluYXRlSWNvbj4sXG4gIFRlcm1pbmF0ZUljb24sXG4+KChwcm9wcywgcmVmKSA9PiAoXG4gIDxUZXJtaW5hdGVBbmRSZXNldEljb25CYWRnZVxuICAgIG92ZXJsYXA9XCJjaXJjbGVcIlxuICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ2JvdHRvbScsIGhvcml6b250YWw6ICdyaWdodCcgfX1cbiAgICBiYWRnZUNvbnRlbnQ9ezxSZXNldEljb24gc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JyB9fSAvPn1cbiAgPlxuICAgIDxUZXJtaW5hdGVJY29uIHJlZj17cmVmfSB7Li4ucHJvcHN9IC8+XG4gIDwvVGVybWluYXRlQW5kUmVzZXRJY29uQmFkZ2U+XG4pKTtcblxuaW1wb3J0IFpvb21JY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9NYWduaWZ5JztcblxuY29uc3QgWm9vbVJlc2V0SWNvbkJhZGdlID0gd2l0aFN0eWxlcyh7XG4gIGJhZGdlOiB7XG4gICAgYm90dG9tOiAnMjUlJyxcbiAgICBsZWZ0OiAnMjUlJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2U4ZThlOCcsXG4gICAgbWluV2lkdGg6ICdhdXRvJyxcbiAgICB3aWR0aDogJzEzcHgnLFxuICAgIGhlaWdodDogJzEzcHgnLFxuICB9LFxufSkoQmFkZ2UpO1xuXG5jb25zdCBab29tUmVzZXRJY29uID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudENvbmZpZzx0eXBlb2YgWm9vbUljb24+LFxuICBab29tSWNvbixcbj4oKHByb3BzLCByZWYpID0+IChcbiAgPFpvb21SZXNldEljb25CYWRnZVxuICAgIG92ZXJsYXA9XCJjaXJjbGVcIlxuICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ2JvdHRvbScsIGhvcml6b250YWw6ICdsZWZ0JyB9fVxuICAgIGJhZGdlQ29udGVudD17PFJlc2V0SWNvbiBzdHlsZT17eyBmb250U2l6ZTogJzEzcHgnIH19IC8+fVxuICA+XG4gICAgPFpvb21JY29uIHJlZj17cmVmfSB7Li4ucHJvcHN9IC8+XG4gIDwvWm9vbVJlc2V0SWNvbkJhZGdlPlxuKSk7XG5cbi8vIG1pc2MgYWN0aW9uc1xuaW1wb3J0IFNsaWRlTGVmdEljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0NoZXZyb25MZWZ0JztcbmltcG9ydCBTbGlkZVJpZ2h0SWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvQ2hldnJvblJpZ2h0JztcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvQWNjb3VudENpcmNsZSc7XG5pbXBvcnQgRXhpdFRvQXBwSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvRXhpdFRvQXBwJztcblxuZXhwb3J0IHtcbiAgUm90YXRlT3JiaXRJY29uLFxuICBSZXNpemVJY29uLFxuICBBcnJvd0FsbEljb24sXG4gIE1lbnVJY29uLFxuICBGaWxlSWNvbixcbiAgRm9sZGVySWNvbixcbiAgRm9sZGVyT3Blbkljb24sXG4gIExhbmd1YWdlQmxvY2tseUljb24sXG4gIExhbmd1YWdlSmF2YXNjcmlwdEljb24sXG4gIExhbmd1YWdlUHl0aG9uSWNvbixcbiAgSW1hZ2VGaWxlSWNvbixcbiAgTWFya2Rvd25GaWxlSWNvbixcbiAgUGRmRmlsZUljb24sXG4gIE1ldGFkYXRhUGx1Z2luc0ljb24sXG4gIE1ldGFkYXRhQXNzZXRzSWNvbixcbiAgTWV0YWRhdGFMYXlvdXRJY29uLFxuICBNZXRhZGF0YVNpbXVsYXRvckljb24sXG4gIE1ldGFkYXRhVG9vbGJveEljb24sXG4gIExvY2FsUHJvamVjdEljb24sXG4gIFVwbG9hZEV4ZXJjaXNlSWNvbixcbiAgUmVzdG9yZUxheW91dEljb24sXG4gIFNldHRpbmdzSWNvbixcbiAgU2VsZWN0TGFuZ3VhZ2VJY29uLFxuICBIZWxwSWNvbixcbiAgQ29udGVzdEljb24sXG4gIENvbnRyb2xzSWNvbixcbiAgSW5kZXhEQlRlc3RJY29uLFxuICBXZWJSVENUZXN0SWNvbixcbiAgQ29uc29sZUljb24sXG4gIFNpbXVsYXRvckljb24sXG4gIENyZWF0ZUljb24sXG4gIE9wZW5JY29uLFxuICBSZW5hbWVJY29uLFxuICBEZWxldGVJY29uLFxuICBEb3dubG9hZEljb24sXG4gIFVwbG9hZEljb24sXG4gIFJlZnJlc2hJY29uLFxuICBFeGVjdXRlSWNvbixcbiAgVGVybWluYXRlSWNvbixcbiAgUmVzZXRJY29uLFxuICBab29tSW5JY29uLFxuICBab29tT3V0SWNvbixcbiAgWm9vbUZpdEljb24sXG4gIFpvb21SZXNldEljb24sXG4gIFRlcm1pbmF0ZUFuZFJlc2V0SWNvbixcbiAgU2xpZGVMZWZ0SWNvbixcbiAgU2xpZGVSaWdodEljb24sXG4gIEFjY291bnRDaXJjbGVJY29uLFxuICBFeGl0VG9BcHBJY29uLFxuICBTaGFyZUljb24sXG4gIFJvYm90SW5kdXN0cmlhbEljb25cbn07XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB7IGRlZmluZU1lc3NhZ2VzLCBGb3JtYXR0ZWRNZXNzYWdlIGFzIE0sIHVzZUludGwgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW1wb3J0IEFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xuaW1wb3J0IEFsZXJ0VGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydFRpdGxlJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuaW1wb3J0IHsgQXBvbGxvRXJyb3IgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcblxuaW1wb3J0IGNvbW1vbk1lc3NhZ2VzIGZyb20gJy4uL21pc2MvY29tbW9uTWVzc2FnZXMnO1xuXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi9BdXRoUHJvdmlkZXInO1xuXG5jb25zdCBtZXNzYWdlcyA9IHtcbiAgLi4uZGVmaW5lTWVzc2FnZXMoe1xuICAgIGxvZ2luRmFpbGVkOiB7XG4gICAgICBpZDogJ2FwcC5sb2dpbi5mYWlsZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdMb2cgSW4gRmFpbGVkIEVycm9yIE1lc3NhZ2UgVGl0bGUnLFxuICAgICAgZGVmYXVsdE1lc3NhZ2U6ICdMb2cgSW4gRmFpbGVkJyxcbiAgICB9LFxuICAgIHVzZXJuYW1lOiB7XG4gICAgICBpZDogJ2FwcC5hdXRoLnVzZXJuYW1lJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVXNlcm5hbWUnLFxuICAgICAgZGVmYXVsdE1lc3NhZ2U6ICdVc2VybmFtZScsXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgaWQ6ICdhcHAuYXV0aC5wYXNzd29yZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Bhc3N3b3JkJyxcbiAgICAgIGRlZmF1bHRNZXNzYWdlOiAnUGFzc3dvcmQnLFxuICAgIH0sXG4gIH0pLFxuICAuLi5jb21tb25NZXNzYWdlcyxcbn07XG5cbnR5cGUgTG9naW5Qcm9wcyA9IHt8XG4gIG9wZW46IGJvb2xlYW4sXG4gIG9uU3VjY2VzczogKCkgPT4gdm9pZCB8IFByb21pc2U8dm9pZD4sXG4gIG9uRXJyb3I6IChlcnI6IGFueSkgPT4gdm9pZCB8IFByb21pc2U8dm9pZD4sXG58fTtcblxuLyoqXG4gKiBEaWFsb2cgZm9yIGVudGVyaW5nIGxvZ2luIGNyZWRlbnRpYWxzIGFuZCBwZXJmb3JtaW5nIGF1dGhlbnRpY2F0aW9uLlxuICovXG5mdW5jdGlvbiBMb2dpbih7IG9wZW4sIG9uU3VjY2Vzcywgb25FcnJvciB9OiBMb2dpblByb3BzKSB7XG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XG4gIGNvbnN0IGludGwgPSB1c2VJbnRsKCk7XG5cbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBsb2dpbiA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGF1dGgubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgICAgIGlmIChvblN1Y2Nlc3MpIHtcbiAgICAgICAgb25TdWNjZXNzKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgQXBvbGxvRXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRVc2VybmFtZSgnJyk7XG4gICAgICBzZXRQYXNzd29yZCgnJyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZyBvcGVuPXtvcGVufSBvbkNsb3NlPXsoKSA9PiBvbkVycm9yKCdDQU5DRUwnKX0+XG4gICAgICA8RGlhbG9nVGl0bGU+XG4gICAgICAgIDxNIHsuLi5tZXNzYWdlcy5sb2dpbn0gLz5cbiAgICAgIDwvRGlhbG9nVGl0bGU+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17bG9naW59PlxuICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICB7ZXJyb3IgPyAoXG4gICAgICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiPlxuICAgICAgICAgICAgICA8QWxlcnRUaXRsZT5cbiAgICAgICAgICAgICAgICA8TSB7Li4ubWVzc2FnZXMubG9naW5GYWlsZWR9IC8+XG4gICAgICAgICAgICAgIDwvQWxlcnRUaXRsZT5cbiAgICAgICAgICAgICAge2Vycm9yfVxuICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbGFiZWw9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy51c2VybmFtZSl9XG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBsYWJlbD17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnBhc3N3b3JkKX1cbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gb25FcnJvcignQ0FOQ0VMJyl9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICA8TSB7Li4ubWVzc2FnZXMuY2FuY2VsfSAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgPE0gey4uLm1lc3NhZ2VzLmxvZ2lufSAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9EaWFsb2c+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuXG4vLyBOYXZpZ2F0aW9uIG1hbmFnZXIsIGUuZy4gaGlzdG9yeS5wdXNoKCcvaG9tZScpXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbWphY2tzb24vaGlzdG9yeVxuZXhwb3J0IGRlZmF1bHQgcHJvY2Vzcy5lbnYuQlJPV1NFUiAmJiBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUNBOzs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFyQkE7QUEyQkE7QUE1QkE7QUErQkE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFhQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBQ0E7QUFpQkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUExQkE7QUFDQTtBQTJCQTs7Ozs7Ozs7QUMxREE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBaEJBO0FBc0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFXQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQURBO0FBV0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQVhBO0FBaUJBO0FBbEJBO0FBQ0E7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBOzs7Ozs7OztBQzNIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==