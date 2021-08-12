require("source-map-support").install();
exports.ids = ["privacy"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Page/Page.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.Page-root-3k28D {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Page-container-2CBp_ {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n  max-width: var(--max-content-width);\n}\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/Page/Page.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,gCAAgC;EAChC,+BAA+B;;EAE/B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;;AAED;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,oCAAoC;CACrC","file":"Page.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n  max-width: var(--max-content-width);\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Page-root-3k28D",
	"container": "Page-container-2CBp_"
};

/***/ }),

/***/ "./src/components/Page/Page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/withStyles");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Page/Page.scss");
/* harmony import */ var _Page_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Page_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/Page/Page.js";




function Page({
  title,
  html
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _Page_scss__WEBPACK_IMPORTED_MODULE_2___default.a.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _Page_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML: {
      __html: html
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_Page_scss__WEBPACK_IMPORTED_MODULE_2___default.a)(Page));

/***/ }),

/***/ "./src/components/Page/Page.scss":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Page/Page.scss");
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
      module.hot.accept("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Page/Page.scss", function() {
        css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Page/Page.scss");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/routes/privacy/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/layout/Layout/Layout.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Page/Page.js");
/* harmony import */ var _privacy_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/privacy/privacy.md");
/* harmony import */ var _privacy_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_privacy_md__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/routes/privacy/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





function action() {
  return {
    chunks: ['privacy'],
    title: _privacy_md__WEBPACK_IMPORTED_MODULE_3___default.a.title,
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Page__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, _privacy_md__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    })))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ }),

/***/ "./src/routes/privacy/privacy.md":
/***/ (function(module, exports) {

module.exports = {"title":"Privacy Policy","key":"privacy","html":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat tortor\nfermentum mi fermentum dignissim. Nullam vel ipsum ut ligula elementum lobortis.\nMaecenas aliquam, massa laoreet lacinia pretium, nisi urna venenatis tortor, nec\nimperdiet tellus libero efficitur metus. Fusce semper posuere ligula, et\nfacilisis metus bibendum interdum. Mauris at mauris sit amet sem pharetra\ncommodo a eu leo. Nam at est non risus cursus maximus. Nam feugiat augue libero,\nid consectetur tortor bibendum non. Quisque nec fringilla lorem. Nullam\nefficitur vulputate mauris, nec maximus leo dignissim id.</p>\n<p>In hac habitasse platea dictumst. Duis sagittis dui ac ex suscipit maximus.\nMorbi pellentesque venenatis felis sed convallis. Nulla varius, nibh vitae\nplacerat tempus, mauris sem elementum ipsum, eget sollicitudin nisl est vel\npurus. Fusce malesuada odio velit, non cursus leo fermentum id. Cras pharetra\nsodales fringilla. Etiam quis est a dolor egestas pellentesque. Maecenas non\nscelerisque purus, congue cursus arcu. Donec vel dapibus mi. Mauris maximus\nposuere placerat. Sed et libero eu nibh tristique mollis a eget lectus. Donec\ninterdum augue sollicitudin vehicula hendrerit. Vivamus justo orci, molestie ac\nsollicitudin ac, lobortis at tellus. Etiam rhoncus ullamcorper risus eu tempor.\nSed porttitor, neque ac efficitur gravida, arcu lacus pharetra dui, in consequat\nelit tellus auctor nulla. Donec placerat elementum diam, vitae imperdiet lectus\nluctus at.</p>\n<p>Nullam eu feugiat mi. Quisque nec tristique nisl, dignissim dictum leo. Nam non\nquam nisi. Donec rutrum turpis ac diam blandit, id pulvinar mauris suscipit.\nPellentesque tincidunt libero ultricies risus iaculis, sit amet consequat velit\nblandit. Fusce quis varius nulla. Nullam nisi nisi, suscipit ut magna quis,\nfeugiat porta nibh. Sed id enim lectus. Suspendisse elementum justo sapien, sit\namet consequat orci accumsan et. Aliquam ornare ullamcorper sem sed finibus.\nNullam ac lacus pulvinar, egestas felis ut, accumsan est.</p>\n<p>Pellentesque sagittis vehicula sem quis luctus. Proin sodales magna in lorem\nhendrerit aliquam. Integer eu varius orci. Vestibulum ante ipsum primis in\nfaucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum\nprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut at mauris\nnibh. Suspendisse maximus ac eros at vestibulum.</p>\n<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas\ntortor et dui consequat faucibus. Nunc vitae odio ornare, venenatis ligula a,\nvulputate nisl. Aenean congue varius ex, sit amet bibendum odio posuere at.\nNulla facilisi. In finibus, nulla vitae tincidunt ornare, sapien nulla fermentum\nmauris, sed consectetur tortor arcu eget arcu. Vestibulum vel quam enim.</p>\n"};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL3ByaXZhY3kuanMiLCJzb3VyY2VzIjpbIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvbXBvbmVudHMvUGFnZS9QYWdlLnNjc3MiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb21wb25lbnRzL1BhZ2UvUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYWdlL1BhZ2Uuc2Nzcz9iOGJkIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvcm91dGVzL3ByaXZhY3kvaW5kZXguanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9yb3V0ZXMvcHJpdmFjeS9wcml2YWN5Lm1kIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiAnU2Vnb2UgVUknLCAnSGVsdmV0aWNhTmV1ZS1MaWdodCcsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwMDBweDtcXG5cXG4gIC8qXFxuICAgKiBBcHBsaWNhdGlvbiBzcGVjaWZpY1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWhlZGdlaG9nLWdyZWVuLWxpZ2h0OiAjMzhiNDQ5O1xcbiAgLS1oZWRnZWhvZy1ncmVlbi1kYXJrOiAjMDA3YzNjO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLlBhZ2Utcm9vdC0zazI4RCB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uUGFnZS1jb250YWluZXItMkNCcF8ge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDAgNDBweDtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGVudC13aWR0aCk7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb21wb25lbnRzL1BhZ2UvUGFnZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0dBT0c7O0FBRUg7Ozs7Ozs7R0FPRzs7QUFFSDtFQUNFOztnRkFFOEU7O0VBRTlFLGtFQUFrRTs7RUFFbEU7O2dGQUU4RTs7RUFFOUUsNEJBQTRCOztFQUU1Qjs7Z0ZBRThFOztFQUU5RSxnQ0FBZ0M7RUFDaEMsK0JBQStCOztFQUUvQjs7Z0ZBRThFOztFQUU5RSx1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsdUJBQXVCLEVBQUUsMkJBQTJCO0VBQ3BELHVCQUF1QixFQUFFLDZCQUE2QjtFQUN0RCx3QkFBd0IsQ0FBQyxpQ0FBaUM7Q0FDM0Q7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0NBQW9DO0NBQ3JDXCIsXCJmaWxlXCI6XCJQYWdlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxcbiAqXFxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxcbiAqXFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXFxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cXG4gKi9cXG5cXG4vKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogJ1NlZ29lIFVJJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDAwcHg7XFxuXFxuICAvKlxcbiAgICogQXBwbGljYXRpb24gc3BlY2lmaWNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1oZWRnZWhvZy1ncmVlbi1saWdodDogIzM4YjQ0OTtcXG4gIC0taGVkZ2Vob2ctZ3JlZW4tZGFyazogIzAwN2MzYztcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxufVxcblxcbi5yb290IHtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAwIDAgNDBweDtcXG4gIG1heC13aWR0aDogMTAwMHB4O1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtY29udGVudC13aWR0aCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiUGFnZS1yb290LTNrMjhEXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiUGFnZS1jb250YWluZXItMkNCcF9cIlxufTsiLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci93aXRoU3R5bGVzJztcblxuaW1wb3J0IHMgZnJvbSAnLi9QYWdlLnNjc3MnO1xuXG50eXBlIFBhZ2VQcm9wcyA9IHt8XG4gIHRpdGxlOiBzdHJpbmcsXG4gIGh0bWw6IHN0cmluZyxcbnx9O1xuXG5mdW5jdGlvbiBQYWdlKHsgdGl0bGUsIGh0bWwgfTogUGFnZVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGFuZ2VyXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShQYWdlKTtcbiIsIlxuICAgIHZhciByZWZzID0gMDtcbiAgICB2YXIgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0zIS4vUGFnZS5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9pbnNlcnRDc3MuanNcIik7XG4gICAgdmFyIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG5cbiAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjc3MubG9jYWxzIHx8IHt9O1xuICAgIGV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiAnJyArIGNzczsgfTtcbiAgICBleHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcblxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy1ydWxlcy0zIS4vUGFnZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTMhLi9QYWdlLnNjc3NcIik7XG4gICAgICAgIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0JztcbmltcG9ydCBQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnZSc7XG5pbXBvcnQgcHJpdmFjeSBmcm9tICcuL3ByaXZhY3kubWQnO1xuXG5mdW5jdGlvbiBhY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgY2h1bmtzOiBbJ3ByaXZhY3knXSxcbiAgICB0aXRsZTogcHJpdmFjeS50aXRsZSxcbiAgICBjb21wb25lbnQ6IChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxQYWdlIHsuLi5wcml2YWN5fSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ0aXRsZVwiOlwiUHJpdmFjeSBQb2xpY3lcIixcImtleVwiOlwicHJpdmFjeVwiLFwiaHRtbFwiOlwiPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWVuZWFuIGNvbnNlcXVhdCB0b3J0b3JcXG5mZXJtZW50dW0gbWkgZmVybWVudHVtIGRpZ25pc3NpbS4gTnVsbGFtIHZlbCBpcHN1bSB1dCBsaWd1bGEgZWxlbWVudHVtIGxvYm9ydGlzLlxcbk1hZWNlbmFzIGFsaXF1YW0sIG1hc3NhIGxhb3JlZXQgbGFjaW5pYSBwcmV0aXVtLCBuaXNpIHVybmEgdmVuZW5hdGlzIHRvcnRvciwgbmVjXFxuaW1wZXJkaWV0IHRlbGx1cyBsaWJlcm8gZWZmaWNpdHVyIG1ldHVzLiBGdXNjZSBzZW1wZXIgcG9zdWVyZSBsaWd1bGEsIGV0XFxuZmFjaWxpc2lzIG1ldHVzIGJpYmVuZHVtIGludGVyZHVtLiBNYXVyaXMgYXQgbWF1cmlzIHNpdCBhbWV0IHNlbSBwaGFyZXRyYVxcbmNvbW1vZG8gYSBldSBsZW8uIE5hbSBhdCBlc3Qgbm9uIHJpc3VzIGN1cnN1cyBtYXhpbXVzLiBOYW0gZmV1Z2lhdCBhdWd1ZSBsaWJlcm8sXFxuaWQgY29uc2VjdGV0dXIgdG9ydG9yIGJpYmVuZHVtIG5vbi4gUXVpc3F1ZSBuZWMgZnJpbmdpbGxhIGxvcmVtLiBOdWxsYW1cXG5lZmZpY2l0dXIgdnVscHV0YXRlIG1hdXJpcywgbmVjIG1heGltdXMgbGVvIGRpZ25pc3NpbSBpZC48L3A+XFxuPHA+SW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIER1aXMgc2FnaXR0aXMgZHVpIGFjIGV4IHN1c2NpcGl0IG1heGltdXMuXFxuTW9yYmkgcGVsbGVudGVzcXVlIHZlbmVuYXRpcyBmZWxpcyBzZWQgY29udmFsbGlzLiBOdWxsYSB2YXJpdXMsIG5pYmggdml0YWVcXG5wbGFjZXJhdCB0ZW1wdXMsIG1hdXJpcyBzZW0gZWxlbWVudHVtIGlwc3VtLCBlZ2V0IHNvbGxpY2l0dWRpbiBuaXNsIGVzdCB2ZWxcXG5wdXJ1cy4gRnVzY2UgbWFsZXN1YWRhIG9kaW8gdmVsaXQsIG5vbiBjdXJzdXMgbGVvIGZlcm1lbnR1bSBpZC4gQ3JhcyBwaGFyZXRyYVxcbnNvZGFsZXMgZnJpbmdpbGxhLiBFdGlhbSBxdWlzIGVzdCBhIGRvbG9yIGVnZXN0YXMgcGVsbGVudGVzcXVlLiBNYWVjZW5hcyBub25cXG5zY2VsZXJpc3F1ZSBwdXJ1cywgY29uZ3VlIGN1cnN1cyBhcmN1LiBEb25lYyB2ZWwgZGFwaWJ1cyBtaS4gTWF1cmlzIG1heGltdXNcXG5wb3N1ZXJlIHBsYWNlcmF0LiBTZWQgZXQgbGliZXJvIGV1IG5pYmggdHJpc3RpcXVlIG1vbGxpcyBhIGVnZXQgbGVjdHVzLiBEb25lY1xcbmludGVyZHVtIGF1Z3VlIHNvbGxpY2l0dWRpbiB2ZWhpY3VsYSBoZW5kcmVyaXQuIFZpdmFtdXMganVzdG8gb3JjaSwgbW9sZXN0aWUgYWNcXG5zb2xsaWNpdHVkaW4gYWMsIGxvYm9ydGlzIGF0IHRlbGx1cy4gRXRpYW0gcmhvbmN1cyB1bGxhbWNvcnBlciByaXN1cyBldSB0ZW1wb3IuXFxuU2VkIHBvcnR0aXRvciwgbmVxdWUgYWMgZWZmaWNpdHVyIGdyYXZpZGEsIGFyY3UgbGFjdXMgcGhhcmV0cmEgZHVpLCBpbiBjb25zZXF1YXRcXG5lbGl0IHRlbGx1cyBhdWN0b3IgbnVsbGEuIERvbmVjIHBsYWNlcmF0IGVsZW1lbnR1bSBkaWFtLCB2aXRhZSBpbXBlcmRpZXQgbGVjdHVzXFxubHVjdHVzIGF0LjwvcD5cXG48cD5OdWxsYW0gZXUgZmV1Z2lhdCBtaS4gUXVpc3F1ZSBuZWMgdHJpc3RpcXVlIG5pc2wsIGRpZ25pc3NpbSBkaWN0dW0gbGVvLiBOYW0gbm9uXFxucXVhbSBuaXNpLiBEb25lYyBydXRydW0gdHVycGlzIGFjIGRpYW0gYmxhbmRpdCwgaWQgcHVsdmluYXIgbWF1cmlzIHN1c2NpcGl0LlxcblBlbGxlbnRlc3F1ZSB0aW5jaWR1bnQgbGliZXJvIHVsdHJpY2llcyByaXN1cyBpYWN1bGlzLCBzaXQgYW1ldCBjb25zZXF1YXQgdmVsaXRcXG5ibGFuZGl0LiBGdXNjZSBxdWlzIHZhcml1cyBudWxsYS4gTnVsbGFtIG5pc2kgbmlzaSwgc3VzY2lwaXQgdXQgbWFnbmEgcXVpcyxcXG5mZXVnaWF0IHBvcnRhIG5pYmguIFNlZCBpZCBlbmltIGxlY3R1cy4gU3VzcGVuZGlzc2UgZWxlbWVudHVtIGp1c3RvIHNhcGllbiwgc2l0XFxuYW1ldCBjb25zZXF1YXQgb3JjaSBhY2N1bXNhbiBldC4gQWxpcXVhbSBvcm5hcmUgdWxsYW1jb3JwZXIgc2VtIHNlZCBmaW5pYnVzLlxcbk51bGxhbSBhYyBsYWN1cyBwdWx2aW5hciwgZWdlc3RhcyBmZWxpcyB1dCwgYWNjdW1zYW4gZXN0LjwvcD5cXG48cD5QZWxsZW50ZXNxdWUgc2FnaXR0aXMgdmVoaWN1bGEgc2VtIHF1aXMgbHVjdHVzLiBQcm9pbiBzb2RhbGVzIG1hZ25hIGluIGxvcmVtXFxuaGVuZHJlcml0IGFsaXF1YW0uIEludGVnZXIgZXUgdmFyaXVzIG9yY2kuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW5cXG5mYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IFZlc3RpYnVsdW0gYW50ZSBpcHN1bVxcbnByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgQ3VyYWU7IFV0IGF0IG1hdXJpc1xcbm5pYmguIFN1c3BlbmRpc3NlIG1heGltdXMgYWMgZXJvcyBhdCB2ZXN0aWJ1bHVtLjwvcD5cXG48cD5JbnRlcmR1bSBldCBtYWxlc3VhZGEgZmFtZXMgYWMgYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMuIFF1aXNxdWUgZWdlc3Rhc1xcbnRvcnRvciBldCBkdWkgY29uc2VxdWF0IGZhdWNpYnVzLiBOdW5jIHZpdGFlIG9kaW8gb3JuYXJlLCB2ZW5lbmF0aXMgbGlndWxhIGEsXFxudnVscHV0YXRlIG5pc2wuIEFlbmVhbiBjb25ndWUgdmFyaXVzIGV4LCBzaXQgYW1ldCBiaWJlbmR1bSBvZGlvIHBvc3VlcmUgYXQuXFxuTnVsbGEgZmFjaWxpc2kuIEluIGZpbmlidXMsIG51bGxhIHZpdGFlIHRpbmNpZHVudCBvcm5hcmUsIHNhcGllbiBudWxsYSBmZXJtZW50dW1cXG5tYXVyaXMsIHNlZCBjb25zZWN0ZXR1ciB0b3J0b3IgYXJjdSBlZ2V0IGFyY3UuIFZlc3RpYnVsdW0gdmVsIHF1YW0gZW5pbS48L3A+XFxuXCJ9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzQkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==