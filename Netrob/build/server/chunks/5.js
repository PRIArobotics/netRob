require("source-map-support").install();
exports.ids = [5];
exports.modules = {

/***/ "./src/core/store/connect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return connect; });
/* harmony import */ var jsstore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jsstore");
/* harmony import */ var jsstore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsstore__WEBPACK_IMPORTED_MODULE_0__);

const workerPath =  false ? undefined : __webpack_require__("jsstore/dist/jsstore.worker");
async function connect(schema) {
  const connection = new jsstore__WEBPACK_IMPORTED_MODULE_0__["Instance"](new Worker(workerPath));
  await connection.initDb(schema);
  return connection;
}

/***/ }),

/***/ "./src/core/store/state/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setState", function() { return setState; });
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/core/store/connect.js");

const schema = {
  name: 'State',
  tables: [{
    name: 'States',
    columns: {
      id: {
        primaryKey: true,
        dataType: 'string'
      },
      state: {
        default: '',
        dataType: 'string'
      }
    }
  }]
};
const connection = Object(_connect__WEBPACK_IMPORTED_MODULE_0__["default"])(schema);

function unique(result) {
  // eslint-disable-next-line no-throw-literal
  if (result.length === 0) throw 'not found'; // eslint-disable-next-line no-throw-literal

  if (result.length > 1) throw 'not unique';
  return result[0];
} // if you want to check initialization before making the first store access
// it doesn't do anything, but if initialization failed, this will be a rejected promise.


async function init() {
  await connection;
}
async function getState(id) {
  const conn = await connection;
  return unique(await conn.select({
    from: 'States',
    where: [{
      id
    }]
  })).state;
}
async function setState(id, state) {
  const conn = await connection;
  await conn.insert({
    into: 'States',
    values: [{
      id,
      state
    }],
    upsert: true
  });
}

/***/ }),

/***/ "./src/routes/indexedDB/IndexedDB.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexedDB; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_store_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/store/state/index.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/routes/indexedDB/IndexedDB.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class IndexedDB extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "inputRef", react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(this, "handleInput", () => {
      if (this.inputRef.current === null) return;
      _core_store_state__WEBPACK_IMPORTED_MODULE_1__["setState"]('Input', this.inputRef.current.value);
    });
  }

  componentDidMount() {
    (async () => {
      await _core_store_state__WEBPACK_IMPORTED_MODULE_1__["init"]();
      const value = await _core_store_state__WEBPACK_IMPORTED_MODULE_1__["getState"]('Input');
      if (this.inputRef.current !== null) this.inputRef.current.value = value;
    })();
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, "IndexedDB with JsStore"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
      type: "text",
      ref: this.inputRef,
      onInput: this.handleInput,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }));
  }

}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzLzUuanMiLCJzb3VyY2VzIjpbIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvcmUvc3RvcmUvY29ubmVjdC5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvcmUvc3RvcmUvc3RhdGUvaW5kZXguanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9yb3V0ZXMvaW5kZXhlZERCL0luZGV4ZWREQi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBKc1N0b3JlIGZyb20gJ2pzc3RvcmUnO1xuXG5jb25zdCB3b3JrZXJQYXRoID1cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgID8gcmVxdWlyZSgnanNzdG9yZS9kaXN0L2pzc3RvcmUud29ya2VyLm1pbicpXG4gICAgOiByZXF1aXJlKCdqc3N0b3JlL2Rpc3QvanNzdG9yZS53b3JrZXInKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdChzY2hlbWE6IE9iamVjdCk6IFByb21pc2U8SnNTdG9yZS5JbnN0YW5jZT4ge1xuICBjb25zdCBjb25uZWN0aW9uID0gbmV3IEpzU3RvcmUuSW5zdGFuY2UobmV3IFdvcmtlcih3b3JrZXJQYXRoKSk7XG4gIGF3YWl0IGNvbm5lY3Rpb24uaW5pdERiKHNjaGVtYSk7XG4gIHJldHVybiBjb25uZWN0aW9uO1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0IGNvbm5lY3QgZnJvbSAnLi4vY29ubmVjdCc7XG5cbmNvbnN0IHNjaGVtYSA9IHtcbiAgbmFtZTogJ1N0YXRlJyxcbiAgdGFibGVzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ1N0YXRlcycsXG4gICAgICBjb2x1bW5zOiB7XG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgcHJpbWFyeUtleTogdHJ1ZSxcbiAgICAgICAgICBkYXRhVHlwZTogJ3N0cmluZycsXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgICAgZGF0YVR5cGU6ICdzdHJpbmcnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxufTtcblxuY29uc3QgY29ubmVjdGlvbiA9IGNvbm5lY3Qoc2NoZW1hKTtcblxuZnVuY3Rpb24gdW5pcXVlPFQ+KHJlc3VsdDogVFtdKTogVCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSB0aHJvdyAnbm90IGZvdW5kJztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgaWYgKHJlc3VsdC5sZW5ndGggPiAxKSB0aHJvdyAnbm90IHVuaXF1ZSc7XG4gIHJldHVybiByZXN1bHRbMF07XG59XG5cbi8vIGlmIHlvdSB3YW50IHRvIGNoZWNrIGluaXRpYWxpemF0aW9uIGJlZm9yZSBtYWtpbmcgdGhlIGZpcnN0IHN0b3JlIGFjY2Vzc1xuLy8gaXQgZG9lc24ndCBkbyBhbnl0aGluZywgYnV0IGlmIGluaXRpYWxpemF0aW9uIGZhaWxlZCwgdGhpcyB3aWxsIGJlIGEgcmVqZWN0ZWQgcHJvbWlzZS5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICBhd2FpdCBjb25uZWN0aW9uO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGUoaWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IGNvbm4gPSBhd2FpdCBjb25uZWN0aW9uO1xuXG4gIHJldHVybiB1bmlxdWUoXG4gICAgYXdhaXQgY29ubi5zZWxlY3Qoe1xuICAgICAgZnJvbTogJ1N0YXRlcycsXG4gICAgICB3aGVyZTogW3sgaWQgfV0sXG4gICAgfSksXG4gICkuc3RhdGU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRTdGF0ZShpZDogc3RyaW5nLCBzdGF0ZTogc3RyaW5nKSB7XG4gIGNvbnN0IGNvbm4gPSBhd2FpdCBjb25uZWN0aW9uO1xuXG4gIGF3YWl0IGNvbm4uaW5zZXJ0KHtcbiAgICBpbnRvOiAnU3RhdGVzJyxcbiAgICB2YWx1ZXM6IFt7IGlkLCBzdGF0ZSB9XSxcbiAgICB1cHNlcnQ6IHRydWUsXG4gIH0pO1xufVxuIiwiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgKiBhcyBTdGF0ZURCIGZyb20gJy4uLy4uL2NvcmUvc3RvcmUvc3RhdGUnO1xuXG50eXBlIFByb3BUeXBlcyA9IHt8fH07XG50eXBlIFN0YXRlVHlwZXMgPSB7fHx9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleGVkREIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcFR5cGVzLCBTdGF0ZVR5cGVzPiB7XG4gIGlucHV0UmVmOiBSZWZPYmplY3Q8J2lucHV0Jz4gPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgU3RhdGVEQi5pbml0KCk7XG5cbiAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgU3RhdGVEQi5nZXRTdGF0ZSgnSW5wdXQnKTtcbiAgICAgIGlmICh0aGlzLmlucHV0UmVmLmN1cnJlbnQgIT09IG51bGwpIHRoaXMuaW5wdXRSZWYuY3VycmVudC52YWx1ZSA9IHZhbHVlO1xuICAgIH0pKCk7XG4gIH1cblxuICBoYW5kbGVJbnB1dCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5pbnB1dFJlZi5jdXJyZW50ID09PSBudWxsKSByZXR1cm47XG5cbiAgICBTdGF0ZURCLnNldFN0YXRlKCdJbnB1dCcsIHRoaXMuaW5wdXRSZWYuY3VycmVudC52YWx1ZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+SW5kZXhlZERCIHdpdGggSnNTdG9yZTwvaDE+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj17dGhpcy5pbnB1dFJlZn0gb25JbnB1dD17dGhpcy5oYW5kbGVJbnB1dH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFGQTtBQUhBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBRUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQWFBO0FBRUE7QUFDQTtBQWhCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBMUJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=