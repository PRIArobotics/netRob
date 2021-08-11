require("source-map-support").install();
exports.ids = ["about~admin~contact~contest~help~ide~indexedDB~login~not-found~privacy~register~webrtc"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/layout/Footer/Footer.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.Footer-root-3UnPj {\n  background: #333;\n  color: #fff;\n}\n\n.Footer-container-vn1Ww {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1000px;\n  max-width: var(--max-content-width);\n  text-align: center;\n}\n\n.Footer-text-2Ff98 {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.Footer-spacer-PsYhT {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.Footer-text-2Ff98,\n.Footer-link-2TBmn {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.Footer-link-2TBmn,\n.Footer-link-2TBmn:active,\n.Footer-link-2TBmn:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.Footer-link-2TBmn:hover {\n  color: rgba(255, 255, 255, 1);\n}\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/layout/Footer/Footer.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,gCAAgC;EAChC,+BAA+B;;EAE/B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;;AAED;EACE,iBAAiB;EACjB,YAAY;CACb;;AAED;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,oCAAoC;EACpC,mBAAmB;CACpB;;AAED;EACE,gCAAgC;CACjC;;AAED;EACE,gCAAgC;CACjC;;AAED;;EAEE,iBAAiB;EACjB,eAAe;CAChB;;AAED;;;EAGE,gCAAgC;EAChC,sBAAsB;CACvB;;AAED;EACE,8BAA8B;CAC/B","file":"Footer.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.root {\n  background: #333;\n  color: #fff;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1000px;\n  max-width: var(--max-content-width);\n  text-align: center;\n}\n\n.text {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.text,\n.link {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n"],"sourceRoot":""}]);

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/layout/Footer/Footer.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/layout/Header/Header.js";

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
      "defaultMessage": "Hedgehog IDE"
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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/layout/Layout/Layout.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









 // OpenDrawer component

// eslint-disable-next-line react/prop-types
const OpenDrawer = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](({
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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/layout/Sidebar/Sidebar.js";

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/misc/Link.js";

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
/* harmony import */ var mdi_material_ui_Magnify__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__("mdi-material-ui/Magnify");
/* harmony import */ var mdi_material_ui_Magnify__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_Magnify__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var mdi_material_ui_ChevronLeft__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__("mdi-material-ui/ChevronLeft");
/* harmony import */ var mdi_material_ui_ChevronLeft__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_ChevronLeft__WEBPACK_IMPORTED_MODULE_45__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "SlideLeftIcon", function() { return mdi_material_ui_ChevronLeft__WEBPACK_IMPORTED_MODULE_45___default.a; });
/* harmony import */ var mdi_material_ui_ChevronRight__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__("mdi-material-ui/ChevronRight");
/* harmony import */ var mdi_material_ui_ChevronRight__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_ChevronRight__WEBPACK_IMPORTED_MODULE_46__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "SlideRightIcon", function() { return mdi_material_ui_ChevronRight__WEBPACK_IMPORTED_MODULE_46___default.a; });
/* harmony import */ var mdi_material_ui_AccountCircle__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__("mdi-material-ui/AccountCircle");
/* harmony import */ var mdi_material_ui_AccountCircle__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_AccountCircle__WEBPACK_IMPORTED_MODULE_47__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "AccountCircleIcon", function() { return mdi_material_ui_AccountCircle__WEBPACK_IMPORTED_MODULE_47___default.a; });
/* harmony import */ var mdi_material_ui_ExitToApp__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__("mdi-material-ui/ExitToApp");
/* harmony import */ var mdi_material_ui_ExitToApp__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui_ExitToApp__WEBPACK_IMPORTED_MODULE_48__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ExitToAppIcon", function() { return mdi_material_ui_ExitToApp__WEBPACK_IMPORTED_MODULE_48___default.a; });
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/misc/palette.js";

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
const TerminateAndResetIcon = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((props, ref) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TerminateAndResetIconBadge, {
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
      lineNumber: 102,
      columnNumber: 19
    }
  }),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](mdi_material_ui_Stop__WEBPACK_IMPORTED_MODULE_35___default.a, _extends({
  ref: ref
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104,
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
const ZoomResetIcon = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((props, ref) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ZoomResetIconBadge, {
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
      lineNumber: 128,
      columnNumber: 19
    }
  }),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](mdi_material_ui_Magnify__WEBPACK_IMPORTED_MODULE_44___default.a, _extends({
  ref: ref
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130,
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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/users/Login.js";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2Fib3V0fmFkbWlufmNvbnRhY3R+Y29udGVzdH5oZWxwfmlkZX5pbmRleGVkREJ+bG9naW5+bm90LWZvdW5kfnByaXZhY3l+cmVnaXN0ZXJ+d2VicnRjLmpzIiwic291cmNlcyI6WyIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3Rlci9Gb290ZXIuc2NzcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyL0Zvb3Rlci5zY3NzP2Y3ZWMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci9IZWFkZXIuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvSGVkZ2Vob2dJREUvc3JjL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci9sb2dvLnN2ZyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0L0xheW91dC5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29tcG9uZW50cy9sYXlvdXQvU2lkZWJhci9TaWRlYmFyLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9jb21wb25lbnRzL21pc2MvTGluay5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29tcG9uZW50cy9taXNjL2NvbW1vbk1lc3NhZ2VzLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL0hlZGdlaG9nSURFL3NyYy9jb21wb25lbnRzL21pc2MvcGFsZXR0ZS5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29tcG9uZW50cy91c2Vycy9Mb2dpbi5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29yZS9oaXN0b3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiAnU2Vnb2UgVUknLCAnSGVsdmV0aWNhTmV1ZS1MaWdodCcsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwMDBweDtcXG5cXG4gIC8qXFxuICAgKiBBcHBsaWNhdGlvbiBzcGVjaWZpY1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWhlZGdlaG9nLWdyZWVuLWxpZ2h0OiAjMzhiNDQ5O1xcbiAgLS1oZWRnZWhvZy1ncmVlbi1kYXJrOiAjMDA3YzNjO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLkZvb3Rlci1yb290LTNVblBqIHtcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLkZvb3Rlci1jb250YWluZXItdm4xV3cge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAyMHB4IDE1cHg7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIG1heC13aWR0aDogdmFyKC0tbWF4LWNvbnRlbnQtd2lkdGgpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uRm9vdGVyLXRleHQtMkZmOTgge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLkZvb3Rlci1zcGFjZXItUHNZaFQge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXFxuLkZvb3Rlci10ZXh0LTJGZjk4LFxcbi5Gb290ZXItbGluay0yVEJtbiB7XFxuICBwYWRkaW5nOiAycHggNXB4O1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi5Gb290ZXItbGluay0yVEJtbixcXG4uRm9vdGVyLWxpbmstMlRCbW46YWN0aXZlLFxcbi5Gb290ZXItbGluay0yVEJtbjp2aXNpdGVkIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5Gb290ZXItbGluay0yVEJtbjpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyL0Zvb3Rlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0dBT0c7O0FBRUg7Ozs7Ozs7R0FPRzs7QUFFSDtFQUNFOztnRkFFOEU7O0VBRTlFLGtFQUFrRTs7RUFFbEU7O2dGQUU4RTs7RUFFOUUsNEJBQTRCOztFQUU1Qjs7Z0ZBRThFOztFQUU5RSxnQ0FBZ0M7RUFDaEMsK0JBQStCOztFQUUvQjs7Z0ZBRThFOztFQUU5RSx1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELHVCQUF1QixFQUFFLDZCQUE2QjtFQUN0RCx3QkFBd0IsQ0FBQyxpQ0FBaUM7Q0FDM0Q7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGdDQUFnQztDQUNqQzs7QUFFRDtFQUNFLGdDQUFnQztDQUNqQzs7QUFFRDs7RUFFRSxpQkFBaUI7RUFDakIsZUFBZTtDQUNoQjs7QUFFRDs7O0VBR0UsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLDhCQUE4QjtDQUMvQlwiLFwiZmlsZVwiOlwiRm9vdGVyLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogJ1NlZ29lIFVJJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDAwcHg7XFxuXFxuICAvKlxcbiAgICogQXBwbGljYXRpb24gc3BlY2lmaWNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1oZWRnZWhvZy1ncmVlbi1saWdodDogIzM4YjQ0OTtcXG4gIC0taGVkZ2Vob2ctZ3JlZW4tZGFyazogIzAwN2MzYztcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxufVxcblxcbi5yb290IHtcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHggMTVweDtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGVudC13aWR0aCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50ZXh0IHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5zcGFjZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcXG59XFxuXFxuLnRleHQsXFxuLmxpbmsge1xcbiAgcGFkZGluZzogMnB4IDVweDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4ubGluayxcXG4ubGluazphY3RpdmUsXFxuLmxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubGluazpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJGb290ZXItcm9vdC0zVW5QalwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkZvb3Rlci1jb250YWluZXItdm4xV3dcIixcblx0XCJ0ZXh0XCI6IFwiRm9vdGVyLXRleHQtMkZmOThcIixcblx0XCJzcGFjZXJcIjogXCJGb290ZXItc3BhY2VyLVBzWWhUXCIsXG5cdFwibGlua1wiOiBcIkZvb3Rlci1saW5rLTJUQm1uXCJcbn07IiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci91c2VTdHlsZXMnO1xuaW1wb3J0IHsgZGVmaW5lTWVzc2FnZXMsIEZvcm1hdHRlZE1lc3NhZ2UgYXMgTSB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5pbXBvcnQgTGluayBmcm9tICcuLi8uLi9taXNjL0xpbmsnO1xuXG5pbXBvcnQgcyBmcm9tICcuL0Zvb3Rlci5zY3NzJztcblxuY29uc3QgbWVzc2FnZXMgPSBkZWZpbmVNZXNzYWdlcyh7XG4gIGhvbWU6IHtcbiAgICBpZDogJ2FwcC5mb290ZXIuaG9tZScsXG4gICAgZGVzY3JpcHRpb246ICdMaW5rIHRvIHRoZSBob21lIHBhZ2UnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnSG9tZScsXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gRm9vdGVyKCkge1xuICB1c2VTdHlsZXMocyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MudGV4dH0+wqkgUFJJQTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLnNwYWNlcn0+wrc8L3NwYW4+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT17cy5saW5rfSB0bz1cIi9cIj5cbiAgICAgICAgICA8TSB7Li4ubWVzc2FnZXMuaG9tZX0gLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICB7X19ERVZfXyA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLnNwYWNlcn0+wrc8L3NwYW4+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3MubGlua30gdG89XCIvcHJpdmFjeVwiPlxuICAgICAgICAgICAgICBQcml2YWN5XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Muc3BhY2VyfT7Ctzwvc3Bhbj5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17cy5saW5rfSB0bz1cIi9hZG1pblwiPlxuICAgICAgICAgICAgICBBZG1pblxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLnNwYWNlcn0+wrc8L3NwYW4+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3MubGlua30gdG89XCIvbm90LWZvdW5kXCI+XG4gICAgICAgICAgICAgIE5vdCBGb3VuZFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJcbiAgICB2YXIgcmVmcyA9IDA7XG4gICAgdmFyIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMyEuL0Zvb3Rlci5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9pbnNlcnRDc3MuanNcIik7XG4gICAgdmFyIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG5cbiAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjc3MubG9jYWxzIHx8IHt9O1xuICAgIGV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiAnJyArIGNzczsgfTtcbiAgICBleHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcblxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0zIS4vRm9vdGVyLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMyEuL0Zvb3Rlci5zY3NzXCIpO1xuICAgICAgICBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCB7IGRlZmluZU1lc3NhZ2VzLCB1c2VJbnRsLCBGb3JtYXR0ZWRNZXNzYWdlIGFzIE0gfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcblxuaW1wb3J0IHsgdXNlUG9wdXBTdGF0ZSwgYmluZFRyaWdnZXIsIGJpbmRNZW51IH0gZnJvbSAnbWF0ZXJpYWwtdWktcG9wdXAtc3RhdGUvaG9va3MnO1xuXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi9sb2NhbGUnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vbWlzYy9MaW5rJztcbmltcG9ydCB7IFNlbGVjdExhbmd1YWdlSWNvbiwgQWNjb3VudENpcmNsZUljb24sIEV4aXRUb0FwcEljb24gfSBmcm9tICcuLi8uLi9taXNjL3BhbGV0dGUnO1xuaW1wb3J0IGNvbW1vbk1lc3NhZ2VzIGZyb20gJy4uLy4uL21pc2MvY29tbW9uTWVzc2FnZXMnO1xuXG5pbXBvcnQgbG9nb1VybCBmcm9tICcuL2xvZ28uc3ZnJztcbmltcG9ydCBMb2dpbiBmcm9tICcuLi8uLi91c2Vycy9Mb2dpbic7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXNlcnMvQXV0aFByb3ZpZGVyJztcblxuY29uc3QgbWVzc2FnZXMgPSB7XG4gIC4uLmRlZmluZU1lc3NhZ2VzKHtcbiAgICBob21lTGFiZWw6IHtcbiAgICAgIGlkOiAnYXBwLmhlYWRlci5ob21lX2xhYmVsJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSG9tZSBidXR0b24gbGFiZWwgZm9yIHNjcmVlbnJlYWRlcnMnLFxuICAgICAgZGVmYXVsdE1lc3NhZ2U6ICdIb21lJyxcbiAgICB9LFxuICAgIGhvbWVMb2dvQWx0OiB7XG4gICAgICBpZDogJ2FwcC5oZWFkZXIuaG9tZV9sb2dvX2FsdCcsXG4gICAgICBkZXNjcmlwdGlvbjogXCJhbHQtdGV4dCBmb3IgdGhlIGhvbWUgYnV0dG9uJ3MgaWNvblwiLFxuICAgICAgZGVmYXVsdE1lc3NhZ2U6ICdIZWRnZWhvZyBMb2dvJyxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBpZDogJ2FwcC5oZWFkZXIudGl0bGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdNYWluIEhlZGdlaG9nIElERSB0aXRsZScsXG4gICAgICBkZWZhdWx0TWVzc2FnZTogJ0hlZGdlaG9nIElERScsXG4gICAgfSxcbiAgICBzZWxlY3RMYW5ndWFnZVRvb2x0aXA6IHtcbiAgICAgIGlkOiAnYXBwLmhlYWRlci5zZWxlY3RfbGFuZ3VhZ2VfdG9vbHRpcCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Rvb2x0aXAgZm9yIHRoZSBsYW5ndWFnZSBzZWxlY3Rpb24gbWVudSBidXR0b24nLFxuICAgICAgZGVmYXVsdE1lc3NhZ2U6ICdTZWxlY3QgTGFuZ3VhZ2UnLFxuICAgIH0sXG4gICAgbXlBY2NvdW50OiB7XG4gICAgICBpZDogJ2FwcC5oZWFkZXIubXlfYWNjb3VudF90b29sdGlwJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVG9vbHRpcCBmb3IgdGhlIGFjY291bnQgdG9nZ2xlIG1lbnUgYnV0dG9uJyxcbiAgICAgIGRlZmF1bHRNZXNzYWdlOiAnTXkgQWNjb3VudCcsXG4gICAgfSxcbiAgfSksXG4gIC4uLmNvbW1vbk1lc3NhZ2VzLFxufTtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIGd1dHRlcnM6IHtcbiAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgYnJhbmRUeHQ6IHtcbiAgICBtYXJnaW5MZWZ0OiAnMTBweCcsXG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG59KSk7XG5cbi8qKlxuICogVGhlIEhlYWRlciBjb21wb25lbnQgZGlzcGxheXMgdGhlIGhvbWUgYnV0dG9uIGFsb25nIHdpdGggYSBsYW5ndWFnZSBjaG9vc2VyIGFuZCBsb2dpbi9sb2dvdXQgVUkuXG4gKi9cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xuICBjb25zdCBpbnRsID0gdXNlSW50bCgpO1xuICBjb25zdCB7IHNldFByZWZlcnJlZExvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG5cbiAgY29uc3QgW2xvZ2luT3Blbiwgc2V0TG9naW5PcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzZWxlY3RMYW5ndWFnZVBvcHVwU3RhdGUgPSB1c2VQb3B1cFN0YXRlKHtcbiAgICB2YXJpYW50OiAncG9wb3ZlcicsXG4gICAgcG9wdXBJZDogJ3NlbGVjdC1sYW5ndWFnZS1tZW51JyxcbiAgfSk7XG4gIGNvbnN0IGF1dGhQb3B1cFN0YXRlID0gdXNlUG9wdXBTdGF0ZSh7XG4gICAgdmFyaWFudDogJ3BvcG92ZXInLFxuICAgIHBvcHVwSWQ6ICdhdXRoLW1lbnUnLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxUb29sYmFyIGNsYXNzZXM9e3sgZ3V0dGVyczogY2xhc3Nlcy5ndXR0ZXJzIH19PlxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgZWRnZT1cInN0YXJ0XCJcbiAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgY29tcG9uZW50PXtMaW5rfVxuICAgICAgICB0bz1cIi9cIlxuICAgICAgICBhcmlhLWxhYmVsPXtpbnRsLmZvcm1hdE1lc3NhZ2UobWVzc2FnZXMuaG9tZUxhYmVsKX1cbiAgICAgID5cbiAgICAgICAgPEljb24+XG4gICAgICAgICAgPGltZyBzcmM9e2xvZ29Vcmx9IGFsdD17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLmhvbWVMb2dvQWx0KX0gLz5cbiAgICAgICAgPC9JY29uPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmJyYW5kVHh0fSB2YXJpYW50PVwiaDZcIiBub1dyYXA+XG4gICAgICAgIDxNIHsuLi5tZXNzYWdlcy50aXRsZX0gLz5cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDxUb29sdGlwIHRpdGxlPXs8TSB7Li4ubWVzc2FnZXMuc2VsZWN0TGFuZ3VhZ2VUb29sdGlwfSAvPn0+XG4gICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIHsuLi5iaW5kVHJpZ2dlcihzZWxlY3RMYW5ndWFnZVBvcHVwU3RhdGUpfT5cbiAgICAgICAgICA8U2VsZWN0TGFuZ3VhZ2VJY29uIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDxNZW51XG4gICAgICAgIGFuY2hvck9yaWdpbj17eyBob3Jpem9udGFsOiAncmlnaHQnLCB2ZXJ0aWNhbDogJ3RvcCcgfX1cbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7IGhvcml6b250YWw6ICdyaWdodCcsIHZlcnRpY2FsOiAndG9wJyB9fVxuICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICB7Li4uYmluZE1lbnUoc2VsZWN0TGFuZ3VhZ2VQb3B1cFN0YXRlKX1cbiAgICAgID5cbiAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0UHJlZmVycmVkTG9jYWxlKCdkZScpO1xuICAgICAgICAgICAgc2VsZWN0TGFuZ3VhZ2VQb3B1cFN0YXRlLmNsb3NlKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIERldXRzY2hcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0UHJlZmVycmVkTG9jYWxlKCdlbicpO1xuICAgICAgICAgICAgc2VsZWN0TGFuZ3VhZ2VQb3B1cFN0YXRlLmNsb3NlKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEVuZ2xpc2hcbiAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgIDwvTWVudT5cbiAgICAgIHthdXRoLmF1dGhEYXRhID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXs8TSB7Li4ubWVzc2FnZXMubXlBY2NvdW50fSAvPn0+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiB7Li4uYmluZFRyaWdnZXIoYXV0aFBvcHVwU3RhdGUpfT5cbiAgICAgICAgICAgICAgPEFjY291bnRDaXJjbGVJY29uIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICBhbmNob3JPcmlnaW49e3sgaG9yaXpvbnRhbDogJ3JpZ2h0JywgdmVydGljYWw6ICd0b3AnIH19XG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3sgaG9yaXpvbnRhbDogJ3JpZ2h0JywgdmVydGljYWw6ICd0b3AnIH19XG4gICAgICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICAgICAgey4uLmJpbmRNZW51KGF1dGhQb3B1cFN0YXRlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17YXV0aC5sb2dvdXR9PlxuICAgICAgICAgICAgICA8TSB7Li4ubWVzc2FnZXMubG9nb3V0fSAvPlxuICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9ezxNIHsuLi5tZXNzYWdlcy5sb2dpbn0gLz59PlxuICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9eygpID0+IHNldExvZ2luT3Blbih0cnVlKX0+XG4gICAgICAgICAgICA8RXhpdFRvQXBwSWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgKX1cblxuICAgICAgPExvZ2luXG4gICAgICAgIG9wZW49e2xvZ2luT3Blbn1cbiAgICAgICAgb25TdWNjZXNzPXsoKSA9PiBzZXRMb2dpbk9wZW4oZmFsc2UpfVxuICAgICAgICBvbkVycm9yPXsoKSA9PiBzZXRMb2dpbk9wZW4oZmFsc2UpfVxuICAgICAgLz5cbiAgICA8L1Rvb2xiYXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9jb21wb25lbnRzL2xheW91dC9IZWFkZXIvbG9nby5zdmc/NzA5MDI4ZTdcIjsiLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5cbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL1NpZGViYXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Gb290ZXInO1xuXG4vLyBPcGVuRHJhd2VyIGNvbXBvbmVudFxuXG50eXBlIE9wZW5EcmF3ZXJQcm9wcyA9IHt8XG4gIGRyYXdlckNsYXNzZXM/OiBPYmplY3QsXG4gIC4uLlJlYWN0LkVsZW1lbnRDb25maWc8dHlwZW9mIERyYXdlcj4sXG58fTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbmNvbnN0IE9wZW5EcmF3ZXIgPSBSZWFjdC5mb3J3YXJkUmVmPE9wZW5EcmF3ZXJQcm9wcywgUmVhY3QuRWxlbWVudDx0eXBlb2YgRHJhd2VyPj4oXG4gICh7IGRyYXdlckNsYXNzZXMsIC4uLnByb3BzIH06IE9wZW5EcmF3ZXJQcm9wcywgcmVmOiBSZWY8dHlwZW9mIERyYXdlcj4pID0+IChcbiAgICA8RHJhd2VyIHJlZj17cmVmfSB2YXJpYW50PVwicGVybWFuZW50XCIgb3BlbiBjbGFzc2VzPXtkcmF3ZXJDbGFzc2VzfSB7Li4ucHJvcHN9IC8+XG4gICksXG4pO1xuXG4vLyBtYWluIGNvbXBvbmVudFxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgYXBwQmFyOiB7XG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcbiAgfSxcbiAgYXBwQmFyU3BhY2VyOiB0aGVtZS5taXhpbnMudG9vbGJhcixcbiAgc2lkZWJhcjoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGhlaWdodDogJzEwMHZoJyxcbiAgfSxcbn0pKTtcblxudHlwZSBQcm9wcyA9IHt8XG4gIGNoaWxkcmVuOiBSZWFjdC5Ob2RlLFxuICBjb250ZW50RmlsbDogYm9vbGVhbixcbnx9O1xuXG4vKipcbiAqIFRoZSBMYXlvdXQgY29tcG9uZW50IHB1bGxzIHRvZ2V0aGVyIEhlYWRlciwgU2lkZWJhciwgRm9vdGVyIGFuZCBjb250ZW50LlxuICpcbiAqIENvbnRlbnQgY2FuIGJlIHN0eWxlZCBhcyBgY29udGVudEZpbGxgLCBtZWFuaW5nIHRoZSBtYWluIGFyZWEgb2YgdGhlIHBhZ2Ugc2hvdWxkIGZpbGwgdGhlIHZpZXdwb3J0IGV4YWN0bHksXG4gKiB0aGUgbWFpbiBjb21wb25lbnQgaGFuZGxlcyBzaXppbmcgdGhlIGNvbnRlbnQgdG8gdGhlIHBhZ2Ugc2l6ZTtcbiAqIG9yIHJlZ3VsYXIgc2Nyb2xsaW5nLCBtZWFuaW5nIHRoZSBjb250ZW50IGNhbiBvdmVyZmxvdyB0aGUgdmlld3BvcnQgYW5kIHdpbGwgYmUgc2Nyb2xsZWQgYXMgdXN1YWwuXG4gKi9cbmZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCBjb250ZW50RmlsbCB9OiBQcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiIHdyYXA9XCJub3dyYXBcIj5cbiAgICAgIDxBcHBCYXIgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn0+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDwvQXBwQmFyPlxuICAgICAgPEdyaWQgaXRlbSBjb21wb25lbnQ9e09wZW5EcmF3ZXJ9IGRyYXdlckNsYXNzZXM9e3sgcGFwZXI6IGNsYXNzZXMuc2lkZWJhciB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyU3BhY2VyfSAvPlxuICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiAnYXV0bycgfX0+XG4gICAgICAgICAgPFNpZGViYXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0dyaWQ+XG4gICAgICA8R3JpZFxuICAgICAgICBpdGVtXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZmxleDogJzEgYXV0bycsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICB9fVxuICAgICAgICBjb250YWluZXJcbiAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgd3JhcD1cIm5vd3JhcFwiXG4gICAgICA+XG4gICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhclNwYWNlcn0gLz5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBpdGVtXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGZsZXg6ICcxIGF1dG8nLFxuICAgICAgICAgICAgLy8gd2hlbiBub3QgaW4gY29udGVudEZpbGwgbW9kZSwgYWxsb3cgc2Nyb2xsaW5nXG4gICAgICAgICAgICAuLi4oY29udGVudEZpbGwgPyB7fSA6IHsgb3ZlcmZsb3c6ICdhdXRvJyB9KSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgd3JhcD1cIm5vd3JhcFwiXG4gICAgICAgID5cbiAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi4oY29udGVudEZpbGxcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZml4IGhlaWdodCB0byBmaWxsIHRoZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgZmxleDogJzEgMCAwJyxcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAwLFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAvLyBmaWxsLCBidXQgZG9uJ3Qgc2hyaW5rIHRvIGZpdFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgcGFyZW50IHNjcm9sbCB0aGUgbWFpbiBjb250ZW50IHRvZ2V0aGVyIHdpdGggdGhlIGZvb3RlclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAnMSBhdXRvJyxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cbkxheW91dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRlbnRGaWxsOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCB7IGRlZmluZU1lc3NhZ2VzLCBGb3JtYXR0ZWRNZXNzYWdlIGFzIE0gfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sdGlwJztcblxuaW1wb3J0IHtcbiAgSGVscEljb24sXG4gIENvbnRlc3RJY29uLFxuICAvLyBDb250cm9sc0ljb24sXG4gIEluZGV4REJUZXN0SWNvbixcbiAgV2ViUlRDVGVzdEljb24sXG59IGZyb20gJy4uLy4uL21pc2MvcGFsZXR0ZSc7XG5cbmltcG9ydCBMaW5rIGZyb20gJy4uLy4uL21pc2MvTGluayc7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZGVmaW5lTWVzc2FnZXMoe1xuICBoZWxwVG9vbHRpcDoge1xuICAgIGlkOiAnYXBwLnNpZGViYXIuaGVscF90b29sdGlwJyxcbiAgICBkZXNjcmlwdGlvbjogJ1Rvb2x0aXAgZm9yIHRoZSBIZWxwIHBhZ2UnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnSGVscCcsXG4gIH0sXG4gIGNvbnRlc3RUb29sdGlwOiB7XG4gICAgaWQ6ICdhcHAuc2lkZWJhci5jb250ZXN0X3Rvb2x0aXAnLFxuICAgIGRlc2NyaXB0aW9uOiAnVG9vbHRpcCBmb3IgdGhlIENvbnRlc3QgcGFnZScsXG4gICAgZGVmYXVsdE1lc3NhZ2U6ICdDb250ZXN0JyxcbiAgfSxcbn0pO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgbGlzdEl0ZW1JY29uOiB7XG4gICAgbWluV2lkdGg6ICdhdXRvJyxcbiAgfSxcbn0pO1xuXG50eXBlIE5hdkl0ZW1Qcm9wcyA9IHt8XG4gIHRpdGxlPzogc3RyaW5nLFxuICB0aXRsZU1zZz86IE9iamVjdCxcbiAgdGFyZ2V0OiBzdHJpbmcsXG4gIGljb246IENsYXNzPFJlYWN0LkNvbXBvbmVudDxhbnk+Pixcbnx9O1xuXG5mdW5jdGlvbiBOYXZJdGVtKHsgdGl0bGUsIHRpdGxlTXNnLCB0YXJnZXQsIGljb246IFRoZUljb24gfTogTmF2SXRlbVByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8VG9vbHRpcCB0aXRsZT17dGl0bGVNc2cgPyA8TSB7Li4udGl0bGVNc2d9IC8+IDogdGl0bGV9IHBsYWNlbWVudD1cInJpZ2h0XCI+XG4gICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNvbXBvbmVudD17TGlua30gdG89e3RhcmdldH0+XG4gICAgICAgIDxMaXN0SXRlbUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtSWNvbn0+XG4gICAgICAgICAgPFRoZUljb24gLz5cbiAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICA8L0xpc3RJdGVtPlxuICAgIDwvVG9vbHRpcD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2lkZWJhcigpIHtcbiAgcmV0dXJuIChcbiAgICA8TGlzdD5cbiAgICAgIDxOYXZJdGVtIHRpdGxlTXNnPXttZXNzYWdlcy5oZWxwVG9vbHRpcH0gdGFyZ2V0PVwiL2hlbHBcIiBpY29uPXtIZWxwSWNvbn0gLz5cbiAgICAgIDxOYXZJdGVtIHRpdGxlTXNnPXttZXNzYWdlcy5jb250ZXN0VG9vbHRpcH0gdGFyZ2V0PVwiL2NvbnRlc3RcIiBpY29uPXtDb250ZXN0SWNvbn0gLz5cbiAgICAgIHsvKiA8TmF2SXRlbSB0aXRsZU1zZz17bWVzc2FnZXMuY29udHJvbHNUb29sdGlwfSB0YXJnZXQ9XCIvY29udHJvbFwiIGljb249e0NvbnRyb2xzSWNvbn0gLz4gKi99XG4gICAgICB7X19ERVZfXyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgIDxOYXZJdGVtIHRpdGxlPVwiSW5kZXhlZERCIFRlc3RcIiB0YXJnZXQ9XCIvaW5kZXhlZERCXCIgaWNvbj17SW5kZXhEQlRlc3RJY29ufSAvPlxuICAgICAgICAgIDxOYXZJdGVtIHRpdGxlPVwiV2ViUlRDIFRlc3RcIiB0YXJnZXQ9XCIvd2VicnRjXCIgaWNvbj17V2ViUlRDVGVzdEljb259IC8+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9MaXN0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBoaXN0b3J5IGZyb20gJy4uLy4uL2NvcmUvaGlzdG9yeSc7XG5cbmZ1bmN0aW9uIGlzTGVmdENsaWNrRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn1cblxudHlwZSBQcm9wVHlwZXMgPSB7fFxuICB0bzogc3RyaW5nLFxuICBvbkNsaWNrPzogKE9iamVjdCkgPT4gdm9pZCxcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlLFxuICBjbGFzc05hbWU/OiBzdHJpbmcsXG58fTtcblxuY2xhc3MgTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wVHlwZXM+IHtcbiAgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTW9kaWZpZWRFdmVudChldmVudCkgfHwgIWlzTGVmdENsaWNrRXZlbnQoZXZlbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhpc3RvcnkucHVzaCh0aGlzLnByb3BzLnRvKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0bywgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPXt0b30gey4uLnByb3BzfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9hPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGluaztcbiIsImltcG9ydCB7IGRlZmluZU1lc3NhZ2VzIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZGVmaW5lTWVzc2FnZXMoe1xuICBvazoge1xuICAgIGlkOiAnYXBwLmRpYWxvZy5vaycsXG4gICAgZGVzY3JpcHRpb246ICd0ZXh0IGZvciB0aGUgT0sgYnV0dG9uIGluIGRpYWxvZ3MnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnT0snLFxuICB9LFxuICBjYW5jZWw6IHtcbiAgICBpZDogJ2FwcC5kaWFsb2cuY2FuY2VsJyxcbiAgICBkZXNjcmlwdGlvbjogJ3RleHQgZm9yIHRoZSBDYW5jZWwgYnV0dG9uIGluIGRpYWxvZ3MnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnQ2FuY2VsJyxcbiAgfSxcbiAgbG9naW46IHtcbiAgICBpZDogJ2FwcC5sb2dpbicsXG4gICAgZGVzY3JpcHRpb246ICdMb2cgSW4gVGl0bGUnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnTG9nIEluJyxcbiAgfSxcbiAgbG9nb3V0OiB7XG4gICAgaWQ6ICdhcHAubG9nb3V0JyxcbiAgICBkZXNjcmlwdGlvbjogJ0xvZyBPdXQgVGl0bGUnLFxuICAgIGRlZmF1bHRNZXNzYWdlOiAnTG9nIE91dCcsXG4gIH0sXG59KTtcbmV4cG9ydCBkZWZhdWx0IG1lc3NhZ2VzO1xuIiwiLy8gQGZsb3dcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1kdXBsaWNhdGVzLCBpbXBvcnQvZmlyc3QgKi9cblxuLyoqXG4gKiBJY29ucyAoYW5kIHBvdGVudGlhbGx5IG90aGVyIFVJIGVsZW1lbnRzKSBhcmUgYXNzb2NpYXRlZCB3aXRoIG1vcmUgc2VtYW50aWMgbmFtZXMgaGVyZSBhbmQgcmUtZXhwb3J0ZWQuXG4gKiBGb3IgZXhhbXBsZSwgaW5zdGVhZCBvZiB1c2luZyBgQXJyb3dMZWZ0SWNvbmAgZm9yIGEgXCJiYWNrXCIgbmF2aWdhdGlvbiBhY3Rpb24sXG4gKiBhIFwiQmFja0ljb25cIiBleHBvcnQgc2hvdWxkIGJlIGFkZGVkIGhlcmUgc28gdGhhdFxuICogYW4gaWNvbiBmb3IgdGhlIFwiYmFja1wiIG5hdmlnYXRpb24gYWN0aW9uIGlzIG9ubHkgZGVmaW5lZCBvbmNlLCBoZXJlLFxuICogYW5kIGNhbiBiZSBjaGFuZ2VkIGluIGEgc2luZ2xlIHBsYWNlLlxuICpcbiAqIEljb25zIGNhbiBiZSBmb3VuZCBhdCBodHRwczovL21hdGVyaWFsZGVzaWduaWNvbnMuY29tL1xuICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBCYWRnZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZSc7XG5cbmltcG9ydCBNZW51SWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvRG90c1ZlcnRpY2FsJztcblxuLy8gZmlsZXM6IGdlbmVyYWxcbmltcG9ydCBGaWxlSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvRmlsZSc7XG5pbXBvcnQgRm9sZGVySWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvRm9sZGVyJztcbmltcG9ydCBGb2xkZXJPcGVuSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvRm9sZGVyT3Blbic7XG5cbi8vIGZpbGVzOiBjb2RlXG5pbXBvcnQgTGFuZ3VhZ2VCbG9ja2x5SWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvV2lkZ2V0cyc7XG5pbXBvcnQgTGFuZ3VhZ2VKYXZhc2NyaXB0SWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvTGFuZ3VhZ2VKYXZhc2NyaXB0JztcbmltcG9ydCBMYW5ndWFnZVB5dGhvbkljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0xhbmd1YWdlUHl0aG9uJztcblxuLy8gZmlsZXM6IG90aGVyIGZpbGUgdHlwZXNcbmltcG9ydCBJbWFnZUZpbGVJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9JbWFnZSc7XG5pbXBvcnQgTWFya2Rvd25GaWxlSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvTGFuZ3VhZ2VNYXJrZG93bic7XG5pbXBvcnQgUGRmRmlsZUljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0ZpbGVQZGYnO1xuXG4vLyBmaWxlczogbWV0YWRhdGFcbmltcG9ydCBNZXRhZGF0YVBsdWdpbnNJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9Ub3lCcmljayc7XG5pbXBvcnQgTWV0YWRhdGFBc3NldHNJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9Gb2xkZXJJbWFnZSc7XG5pbXBvcnQgTWV0YWRhdGFMYXlvdXRJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9WaWV3Q29tcGFjdE91dGxpbmUnO1xuaW1wb3J0IE1ldGFkYXRhU2ltdWxhdG9ySWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvQXhpc0Fycm93JztcbmltcG9ydCBNZXRhZGF0YVRvb2xib3hJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9Ub29sYm94T3V0bGluZSc7XG5cbi8vIHByb2plY3RzXG5pbXBvcnQgTG9jYWxQcm9qZWN0SWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvRm9sZGVyJztcbmltcG9ydCBVcGxvYWRFeGVyY2lzZUljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0Nsb3VkVXBsb2FkJztcblxuLy8gcHJvamVjdCBhY3Rpb25zXG5pbXBvcnQgUmVzdG9yZUxheW91dEljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL1ZpZXdDb21wYWN0T3V0bGluZSc7XG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9Db2dzJztcblxuLy8gSURFIG5hdmlnYXRpb25cbmltcG9ydCBTZWxlY3RMYW5ndWFnZUljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL1RyYW5zbGF0ZSc7XG5pbXBvcnQgSGVscEljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0hlbHBDaXJjbGVPdXRsaW5lJztcbmltcG9ydCBDb250ZXN0SWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvRXhjbGFtYXRpb25UaGljayc7XG5pbXBvcnQgQ29udHJvbHNJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9UdW5lVmVydGljYWwnO1xuaW1wb3J0IEluZGV4REJUZXN0SWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvRGF0YWJhc2UnO1xuaW1wb3J0IFdlYlJUQ1Rlc3RJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9Gb3J1bSc7XG5cbi8vIElERSB0YWIgY29tcG9uZW50c1xuaW1wb3J0IENvbnNvbGVJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9Db25zb2xlJztcbmltcG9ydCBTaW11bGF0b3JJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9BeGlzQXJyb3cnO1xuXG4vLyBmaWxlL2NvbGxlY3Rpb24gYWN0aW9uc1xuaW1wb3J0IENyZWF0ZUljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL1BsdXMnO1xuaW1wb3J0IE9wZW5JY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9Gb2xkZXJPcGVuJztcbmltcG9ydCBSZW5hbWVJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9QZW5jaWwnO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0RlbGV0ZSc7XG5pbXBvcnQgUmVmcmVzaEljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL1JlZnJlc2gnO1xuaW1wb3J0IERvd25sb2FkSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvRG93bmxvYWQnO1xuaW1wb3J0IFVwbG9hZEljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL1VwbG9hZCc7XG5pbXBvcnQgU2hhcmVJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9TaGFyZSdcblxuLy8gZXhlY3V0aW9uICYgc2ltdWxhdGlvbiBhY3Rpb25zXG5pbXBvcnQgRXhlY3V0ZUljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL1BsYXknO1xuaW1wb3J0IFRlcm1pbmF0ZUljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL1N0b3AnO1xuaW1wb3J0IFJlc2V0SWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvUm90YXRlTGVmdCc7XG5pbXBvcnQgWm9vbUluSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvTWFnbmlmeVBsdXNPdXRsaW5lJztcbmltcG9ydCBab29tT3V0SWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvTWFnbmlmeU1pbnVzT3V0bGluZSc7XG5pbXBvcnQgWm9vbUZpdEljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL01hZ25pZnlTY2FuJztcbi8vIDNEIFNpbXVsYXRpb25cbmltcG9ydCAgUm90YXRlT3JiaXRJY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9Sb3RhdGVPcmJpdCc7IFxuaW1wb3J0ICBSZXNpemVJY29uICBmcm9tICdtZGktbWF0ZXJpYWwtdWkvUmVzaXplJzsgXG5pbXBvcnQgIEFycm93QWxsSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvQXJyb3dBbGwnO1xuaW1wb3J0IFJvYm90SW5kdXN0cmlhbEljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL1JvYm90SW5kdXN0cmlhbCdcbmNvbnN0IFRlcm1pbmF0ZUFuZFJlc2V0SWNvbkJhZGdlID0gd2l0aFN0eWxlcyh7XG4gIGJhZGdlOiB7XG4gICAgYm90dG9tOiAnMjUlJyxcbiAgICByaWdodDogJzI1JScsXG4gICAgYmFja2dyb3VuZDogJyNlOGU4ZTgnLFxuICAgIG1pbldpZHRoOiAnYXV0bycsXG4gICAgd2lkdGg6ICcxNXB4JyxcbiAgICBoZWlnaHQ6ICcxNXB4JyxcbiAgfSxcbn0pKEJhZGdlKTtcblxuY29uc3QgVGVybWluYXRlQW5kUmVzZXRJY29uID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudENvbmZpZzx0eXBlb2YgVGVybWluYXRlSWNvbj4sXG4gIFRlcm1pbmF0ZUljb24sXG4+KChwcm9wcywgcmVmKSA9PiAoXG4gIDxUZXJtaW5hdGVBbmRSZXNldEljb25CYWRnZVxuICAgIG92ZXJsYXA9XCJjaXJjbGVcIlxuICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ2JvdHRvbScsIGhvcml6b250YWw6ICdyaWdodCcgfX1cbiAgICBiYWRnZUNvbnRlbnQ9ezxSZXNldEljb24gc3R5bGU9e3sgZm9udFNpemU6ICcxNXB4JyB9fSAvPn1cbiAgPlxuICAgIDxUZXJtaW5hdGVJY29uIHJlZj17cmVmfSB7Li4ucHJvcHN9IC8+XG4gIDwvVGVybWluYXRlQW5kUmVzZXRJY29uQmFkZ2U+XG4pKTtcblxuaW1wb3J0IFpvb21JY29uIGZyb20gJ21kaS1tYXRlcmlhbC11aS9NYWduaWZ5JztcblxuY29uc3QgWm9vbVJlc2V0SWNvbkJhZGdlID0gd2l0aFN0eWxlcyh7XG4gIGJhZGdlOiB7XG4gICAgYm90dG9tOiAnMjUlJyxcbiAgICBsZWZ0OiAnMjUlJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2U4ZThlOCcsXG4gICAgbWluV2lkdGg6ICdhdXRvJyxcbiAgICB3aWR0aDogJzEzcHgnLFxuICAgIGhlaWdodDogJzEzcHgnLFxuICB9LFxufSkoQmFkZ2UpO1xuXG5jb25zdCBab29tUmVzZXRJY29uID0gUmVhY3QuZm9yd2FyZFJlZjxcbiAgUmVhY3QuRWxlbWVudENvbmZpZzx0eXBlb2YgWm9vbUljb24+LFxuICBab29tSWNvbixcbj4oKHByb3BzLCByZWYpID0+IChcbiAgPFpvb21SZXNldEljb25CYWRnZVxuICAgIG92ZXJsYXA9XCJjaXJjbGVcIlxuICAgIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ2JvdHRvbScsIGhvcml6b250YWw6ICdsZWZ0JyB9fVxuICAgIGJhZGdlQ29udGVudD17PFJlc2V0SWNvbiBzdHlsZT17eyBmb250U2l6ZTogJzEzcHgnIH19IC8+fVxuICA+XG4gICAgPFpvb21JY29uIHJlZj17cmVmfSB7Li4ucHJvcHN9IC8+XG4gIDwvWm9vbVJlc2V0SWNvbkJhZGdlPlxuKSk7XG5cbi8vIG1pc2MgYWN0aW9uc1xuaW1wb3J0IFNsaWRlTGVmdEljb24gZnJvbSAnbWRpLW1hdGVyaWFsLXVpL0NoZXZyb25MZWZ0JztcbmltcG9ydCBTbGlkZVJpZ2h0SWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvQ2hldnJvblJpZ2h0JztcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvQWNjb3VudENpcmNsZSc7XG5pbXBvcnQgRXhpdFRvQXBwSWNvbiBmcm9tICdtZGktbWF0ZXJpYWwtdWkvRXhpdFRvQXBwJztcblxuZXhwb3J0IHtcbiAgUm90YXRlT3JiaXRJY29uLFxuICBSZXNpemVJY29uLFxuICBBcnJvd0FsbEljb24sXG4gIE1lbnVJY29uLFxuICBGaWxlSWNvbixcbiAgRm9sZGVySWNvbixcbiAgRm9sZGVyT3Blbkljb24sXG4gIExhbmd1YWdlQmxvY2tseUljb24sXG4gIExhbmd1YWdlSmF2YXNjcmlwdEljb24sXG4gIExhbmd1YWdlUHl0aG9uSWNvbixcbiAgSW1hZ2VGaWxlSWNvbixcbiAgTWFya2Rvd25GaWxlSWNvbixcbiAgUGRmRmlsZUljb24sXG4gIE1ldGFkYXRhUGx1Z2luc0ljb24sXG4gIE1ldGFkYXRhQXNzZXRzSWNvbixcbiAgTWV0YWRhdGFMYXlvdXRJY29uLFxuICBNZXRhZGF0YVNpbXVsYXRvckljb24sXG4gIE1ldGFkYXRhVG9vbGJveEljb24sXG4gIExvY2FsUHJvamVjdEljb24sXG4gIFVwbG9hZEV4ZXJjaXNlSWNvbixcbiAgUmVzdG9yZUxheW91dEljb24sXG4gIFNldHRpbmdzSWNvbixcbiAgU2VsZWN0TGFuZ3VhZ2VJY29uLFxuICBIZWxwSWNvbixcbiAgQ29udGVzdEljb24sXG4gIENvbnRyb2xzSWNvbixcbiAgSW5kZXhEQlRlc3RJY29uLFxuICBXZWJSVENUZXN0SWNvbixcbiAgQ29uc29sZUljb24sXG4gIFNpbXVsYXRvckljb24sXG4gIENyZWF0ZUljb24sXG4gIE9wZW5JY29uLFxuICBSZW5hbWVJY29uLFxuICBEZWxldGVJY29uLFxuICBEb3dubG9hZEljb24sXG4gIFVwbG9hZEljb24sXG4gIFJlZnJlc2hJY29uLFxuICBFeGVjdXRlSWNvbixcbiAgVGVybWluYXRlSWNvbixcbiAgUmVzZXRJY29uLFxuICBab29tSW5JY29uLFxuICBab29tT3V0SWNvbixcbiAgWm9vbUZpdEljb24sXG4gIFpvb21SZXNldEljb24sXG4gIFRlcm1pbmF0ZUFuZFJlc2V0SWNvbixcbiAgU2xpZGVMZWZ0SWNvbixcbiAgU2xpZGVSaWdodEljb24sXG4gIEFjY291bnRDaXJjbGVJY29uLFxuICBFeGl0VG9BcHBJY29uLFxuICBTaGFyZUljb24sXG4gIFJvYm90SW5kdXN0cmlhbEljb25cbn07XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB7IGRlZmluZU1lc3NhZ2VzLCBGb3JtYXR0ZWRNZXNzYWdlIGFzIE0sIHVzZUludGwgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuaW1wb3J0IEFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xuaW1wb3J0IEFsZXJ0VGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydFRpdGxlJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuaW1wb3J0IHsgQXBvbGxvRXJyb3IgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcblxuaW1wb3J0IGNvbW1vbk1lc3NhZ2VzIGZyb20gJy4uL21pc2MvY29tbW9uTWVzc2FnZXMnO1xuXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi9BdXRoUHJvdmlkZXInO1xuXG5jb25zdCBtZXNzYWdlcyA9IHtcbiAgLi4uZGVmaW5lTWVzc2FnZXMoe1xuICAgIGxvZ2luRmFpbGVkOiB7XG4gICAgICBpZDogJ2FwcC5sb2dpbi5mYWlsZWQnLFxuICAgICAgZGVzY3JpcHRpb246ICdMb2cgSW4gRmFpbGVkIEVycm9yIE1lc3NhZ2UgVGl0bGUnLFxuICAgICAgZGVmYXVsdE1lc3NhZ2U6ICdMb2cgSW4gRmFpbGVkJyxcbiAgICB9LFxuICAgIHVzZXJuYW1lOiB7XG4gICAgICBpZDogJ2FwcC5hdXRoLnVzZXJuYW1lJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVXNlcm5hbWUnLFxuICAgICAgZGVmYXVsdE1lc3NhZ2U6ICdVc2VybmFtZScsXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgaWQ6ICdhcHAuYXV0aC5wYXNzd29yZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Bhc3N3b3JkJyxcbiAgICAgIGRlZmF1bHRNZXNzYWdlOiAnUGFzc3dvcmQnLFxuICAgIH0sXG4gIH0pLFxuICAuLi5jb21tb25NZXNzYWdlcyxcbn07XG5cbnR5cGUgTG9naW5Qcm9wcyA9IHt8XG4gIG9wZW46IGJvb2xlYW4sXG4gIG9uU3VjY2VzczogKCkgPT4gdm9pZCB8IFByb21pc2U8dm9pZD4sXG4gIG9uRXJyb3I6IChlcnI6IGFueSkgPT4gdm9pZCB8IFByb21pc2U8dm9pZD4sXG58fTtcblxuLyoqXG4gKiBEaWFsb2cgZm9yIGVudGVyaW5nIGxvZ2luIGNyZWRlbnRpYWxzIGFuZCBwZXJmb3JtaW5nIGF1dGhlbnRpY2F0aW9uLlxuICovXG5mdW5jdGlvbiBMb2dpbih7IG9wZW4sIG9uU3VjY2Vzcywgb25FcnJvciB9OiBMb2dpblByb3BzKSB7XG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XG4gIGNvbnN0IGludGwgPSB1c2VJbnRsKCk7XG5cbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBsb2dpbiA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGF1dGgubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgICAgIGlmIChvblN1Y2Nlc3MpIHtcbiAgICAgICAgb25TdWNjZXNzKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyIGluc3RhbmNlb2YgQXBvbGxvRXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRVc2VybmFtZSgnJyk7XG4gICAgICBzZXRQYXNzd29yZCgnJyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZyBvcGVuPXtvcGVufSBvbkNsb3NlPXsoKSA9PiBvbkVycm9yKCdDQU5DRUwnKX0+XG4gICAgICA8RGlhbG9nVGl0bGU+XG4gICAgICAgIDxNIHsuLi5tZXNzYWdlcy5sb2dpbn0gLz5cbiAgICAgIDwvRGlhbG9nVGl0bGU+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17bG9naW59PlxuICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICB7ZXJyb3IgPyAoXG4gICAgICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiPlxuICAgICAgICAgICAgICA8QWxlcnRUaXRsZT5cbiAgICAgICAgICAgICAgICA8TSB7Li4ubWVzc2FnZXMubG9naW5GYWlsZWR9IC8+XG4gICAgICAgICAgICAgIDwvQWxlcnRUaXRsZT5cbiAgICAgICAgICAgICAge2Vycm9yfVxuICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgbGFiZWw9e2ludGwuZm9ybWF0TWVzc2FnZShtZXNzYWdlcy51c2VybmFtZSl9XG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBsYWJlbD17aW50bC5mb3JtYXRNZXNzYWdlKG1lc3NhZ2VzLnBhc3N3b3JkKX1cbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gb25FcnJvcignQ0FOQ0VMJyl9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICA8TSB7Li4ubWVzc2FnZXMuY2FuY2VsfSAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgPE0gey4uLm1lc3NhZ2VzLmxvZ2lufSAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9EaWFsb2c+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuXG4vLyBOYXZpZ2F0aW9uIG1hbmFnZXIsIGUuZy4gaGlzdG9yeS5wdXNoKCcvaG9tZScpXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbWphY2tzb24vaGlzdG9yeVxuZXhwb3J0IGRlZmF1bHQgcHJvY2Vzcy5lbnYuQlJPV1NFUiAmJiBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUNBOzs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFyQkE7QUEyQkE7QUE1QkE7QUErQkE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFhQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBQ0E7QUFpQkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUExQkE7QUFDQTtBQTJCQTs7Ozs7Ozs7QUMxREE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBaEJBO0FBc0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQVdBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFXQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFpQkE7QUFsQkE7QUFDQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0hBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9