require("source-map-support").install();
exports.ids = [0];
exports.modules = {

/***/ "./src/components/ide/VisualEditor/blockly_config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCALES", function() { return LOCALES; });
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("blockly/core");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var blockly_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("blockly/blocks");
/* harmony import */ var blockly_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockly_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var blockly_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("blockly/javascript");
/* harmony import */ var blockly_javascript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blockly_javascript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var blockly_python__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("blockly/python");
/* harmony import */ var blockly_python__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(blockly_python__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var blockly_msg_de__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("blockly/msg/de");
/* harmony import */ var blockly_msg_de__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(blockly_msg_de__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var blockly_msg_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("blockly/msg/en");
/* harmony import */ var blockly_msg_en__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(blockly_msg_en__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _blocks_async_procedures_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/ide/VisualEditor/blocks/async_procedures_js.js");
/* harmony import */ var _blocks_hedgehog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/ide/VisualEditor/blocks/hedgehog.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "hedgehogBlocks", function() { return _blocks_hedgehog__WEBPACK_IMPORTED_MODULE_7__; });
/* harmony import */ var _blocks_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/ide/VisualEditor/blocks/misc.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "miscBlocks", function() { return _blocks_misc__WEBPACK_IMPORTED_MODULE_8__; });
/* harmony import */ var _blocks_hedgehog_msg_de__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/ide/VisualEditor/blocks/hedgehog_msg_de.js");
/* harmony import */ var _blocks_hedgehog_msg_en__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/ide/VisualEditor/blocks/hedgehog_msg_en.js");
/* harmony import */ var _blocks_misc_msg_de__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/ide/VisualEditor/blocks/misc_msg_de.js");
/* harmony import */ var _blocks_misc_msg_en__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/ide/VisualEditor/blocks/misc_msg_en.js");













const LOCALES = {
  de: {
    rtl: false,
    msg: { ...blockly_msg_de__WEBPACK_IMPORTED_MODULE_4___default.a,
      ..._blocks_hedgehog_msg_de__WEBPACK_IMPORTED_MODULE_9__["default"],
      ..._blocks_misc_msg_de__WEBPACK_IMPORTED_MODULE_11__["default"]
    }
  },
  en: {
    rtl: false,
    msg: { ...blockly_msg_en__WEBPACK_IMPORTED_MODULE_5___default.a,
      ..._blocks_hedgehog_msg_en__WEBPACK_IMPORTED_MODULE_10__["default"],
      ..._blocks_misc_msg_en__WEBPACK_IMPORTED_MODULE_12__["default"]
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a);


/***/ }),

/***/ "./src/components/ide/VisualEditor/blocks/async_procedures_js.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("blockly");
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_0__);

blockly__WEBPACK_IMPORTED_MODULE_0___default.a.Extensions.registerMixin('requires_async_js_function', {
  requiresAsyncJsFunction: true
}); // TODO prevent infinite recursion for recursive functions

function requiresAsyncJsFunction(block) {
  // eslint-disable-next-line no-use-before-define
  return isAsyncProcedureCall(block) || block.requiresAsyncJsFunction;
}

function isAsyncProcedureCall(block) {
  if (block.type !== 'procedures_callnoreturn' && block.type !== 'procedures_callreturn') return false;
  const defBlock = blockly__WEBPACK_IMPORTED_MODULE_0___default.a.Procedures.getDefinition(block.getProcedureCall(), block.workspace); // eslint-disable-next-line no-use-before-define

  return isAsyncProcedure(defBlock);
}

function isAsyncProcedure(block) {
  if (block.type !== 'procedures_defnoreturn' && block.type !== 'procedures_defreturn') return false; // a procedure is async if any descendant is async,
  // i.e. if not every descendant is not async

  return !block.getDescendants().every(child => !requiresAsyncJsFunction(child));
} // eslint-disable-next-line camelcase


const original_procedures_callreturn_generator = blockly__WEBPACK_IMPORTED_MODULE_0___default.a.JavaScript.procedures_callreturn;

blockly__WEBPACK_IMPORTED_MODULE_0___default.a.JavaScript.procedures_callreturn = block => {
  let code = original_procedures_callreturn_generator(block)[0];
  if (isAsyncProcedureCall(block)) code = `await ${code}`;
  return [code, blockly__WEBPACK_IMPORTED_MODULE_0___default.a.JavaScript.ORDER_AWAIT];
}; // eslint-disable-next-line camelcase, no-underscore-dangle


const original_scrub_ = blockly__WEBPACK_IMPORTED_MODULE_0___default.a.JavaScript.scrub_; // eslint-disable-next-line camelcase, no-underscore-dangle

blockly__WEBPACK_IMPORTED_MODULE_0___default.a.JavaScript.scrub_ = (block, code, opt_thisOnly) => {
  const newCode = isAsyncProcedure(block) ? `async ${code}` : code;
  return original_scrub_(block, newCode, opt_thisOnly);
};

/***/ }),

/***/ "./src/components/ide/VisualEditor/blocks/hedgehog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEDGEHOG_MOVE", function() { return HEDGEHOG_MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEDGEHOG_MOVE_UNLIMITED", function() { return HEDGEHOG_MOVE_UNLIMITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEDGEHOG_MOTOR_OFF", function() { return HEDGEHOG_MOTOR_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEDGEHOG_BRAKE", function() { return HEDGEHOG_BRAKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEDGEHOG_MOVE2", function() { return HEDGEHOG_MOVE2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEDGEHOG_MOVE2_UNLIMITED", function() { return HEDGEHOG_MOVE2_UNLIMITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEDGEHOG_MOTOR_OFF2", function() { return HEDGEHOG_MOTOR_OFF2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEDGEHOG_BRAKE2", function() { return HEDGEHOG_BRAKE2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEDGEHOG_SERVO", function() { return HEDGEHOG_SERVO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEDGEHOG_SERVO_OFF", function() { return HEDGEHOG_SERVO_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEDGEHOG_READ_ANALOG", function() { return HEDGEHOG_READ_ANALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEDGEHOG_READ_DIGITAL", function() { return HEDGEHOG_READ_DIGITAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEDGEHOG_SLEEP", function() { return HEDGEHOG_SLEEP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("blockly/core");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/ide/VisualEditor/blocks/index.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/VisualEditor/blocks/hedgehog.js";

/* eslint-disable */



const HEDGEHOG_MOVE = {
  blockJson: {
    type: 'hedgehog_move',
    message0: '%{BKY_HEDGEHOG_MOVE}',
    args0: [{
      "type": "field_number",
      "name": "PORT",
      "value": 0,
      "min": 0,
      "max": 3,
      "precision": 1
    }, {
      "type": "input_value",
      "name": "SPEED",
      "check": "Number"
    }, {
      "type": "input_value",
      "name": "TIME",
      "check": "Number"
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: '%{BKY_HEDGEHOG_MOVE_TOOLTIP}',
    helpUrl: '/help#blockly-motors',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      const port = block.getFieldValue('PORT'); // <GSL customizable: hedgehog_move-body-JavaScript>

      const speed = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.valueToCode(block, 'SPEED', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_NONE);
      const time = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.valueToCode(block, 'TIME', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_NONE);
      let code = '';
      code += `await hedgehog.moveMotor(${port}, ${speed});\n`;
      code += `await sleep(${time} * 1000);\n`;
      code += `await hedgehog.moveMotor(${port}, 0);\n`;
      return code; // </GSL customizable: hedgehog_move-body-JavaScript>
    },
    Python: block => {
      const port = block.getFieldValue('PORT'); // <GSL customizable: hedgehog_move-body-Python>

      const speed = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.valueToCode(block, 'SPEED', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_NONE);
      const time = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.valueToCode(block, 'TIME', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_NONE); // TODO import sleep

      let code = '';
      code += `hedgehog.move_motor(${port}, ${speed})\n`;
      code += `sleep(${time})\n`;
      code += `hedgehog.brake(${port})\n`;
      return code; // </GSL customizable: hedgehog_move-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "hedgehog_move",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "SPEED",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("shadow", {
      type: "math_number",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }, "1000"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "TIME",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("shadow", {
      type: "math_number",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }, "1")))) // <default GSL customizable: hedgehog_move-extra-toolbox />

  }
};
const HEDGEHOG_MOVE_UNLIMITED = {
  blockJson: {
    type: 'hedgehog_move_unlimited',
    message0: '%{BKY_HEDGEHOG_MOVE_UNLIMITED}',
    args0: [{
      "type": "field_number",
      "name": "PORT",
      "value": 0,
      "min": 0,
      "max": 3,
      "precision": 1
    }, {
      "type": "input_value",
      "name": "SPEED",
      "check": "Number"
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: '%{BKY_HEDGEHOG_MOVE_UNLIMITED_TOOLTIP}',
    helpUrl: '/help#blockly-motors',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      const port = block.getFieldValue('PORT'); // <GSL customizable: hedgehog_move_unlimited-body-JavaScript>

      const speed = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.valueToCode(block, 'SPEED', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_NONE);
      const code = `await hedgehog.moveMotor(${port}, ${speed});\n`;
      return code; // </GSL customizable: hedgehog_move_unlimited-body-JavaScript>
    },
    Python: block => {
      const port = block.getFieldValue('PORT'); // <GSL customizable: hedgehog_move_unlimited-body-Python>

      const speed = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.valueToCode(block, 'SPEED', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_NONE);
      const code = `hedgehog.move_motor(${port}, ${speed})\n`;
      return code; // </GSL customizable: hedgehog_move_unlimited-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "hedgehog_move_unlimited",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "SPEED",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("shadow", {
      type: "math_number",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }
    }, "1000")))) // <default GSL customizable: hedgehog_move_unlimited-extra-toolbox />

  }
};
const HEDGEHOG_MOTOR_OFF = {
  blockJson: {
    type: 'hedgehog_motor_off',
    message0: '%{BKY_HEDGEHOG_MOTOR_OFF}',
    args0: [{
      "type": "field_number",
      "name": "PORT",
      "value": 0,
      "min": 0,
      "max": 3,
      "precision": 1
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: '%{BKY_HEDGEHOG_MOTOR_OFF_TOOLTIP}',
    helpUrl: '/help#blockly-motors',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      const port = block.getFieldValue('PORT'); // <GSL customizable: hedgehog_motor_off-body-JavaScript>

      const code = `await hedgehog.moveMotor(${port}, 0);\n`;
      return code; // </GSL customizable: hedgehog_motor_off-body-JavaScript>
    },
    Python: block => {
      const port = block.getFieldValue('PORT'); // <GSL customizable: hedgehog_motor_off-body-Python>

      const code = `hedgehog.motor_off(${port})\n`;
      return code; // </GSL customizable: hedgehog_motor_off-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "hedgehog_motor_off",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 7
      }
    }) // <default GSL customizable: hedgehog_motor_off-extra-toolbox />

  }
};
const HEDGEHOG_BRAKE = {
  blockJson: {
    type: 'hedgehog_brake',
    message0: '%{BKY_HEDGEHOG_BRAKE}',
    args0: [{
      "type": "field_number",
      "name": "PORT",
      "value": 0,
      "min": 0,
      "max": 3,
      "precision": 1
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: '%{BKY_HEDGEHOG_BRAKE_TOOLTIP}',
    helpUrl: '/help#blockly-motors',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      const port = block.getFieldValue('PORT'); // <GSL customizable: hedgehog_brake-body-JavaScript>

      const code = `await hedgehog.moveMotor(${port}, 0);\n`;
      return code; // </GSL customizable: hedgehog_brake-body-JavaScript>
    },
    Python: block => {
      const port = block.getFieldValue('PORT'); // <GSL customizable: hedgehog_brake-body-Python>

      const code = `hedgehog.brake(${port})\n`;
      return code; // </GSL customizable: hedgehog_brake-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "hedgehog_brake",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 7
      }
    }) // <default GSL customizable: hedgehog_brake-extra-toolbox />

  }
};
const HEDGEHOG_MOVE2 = {
  blockJson: {
    type: 'hedgehog_move2',
    message0: '%{BKY_HEDGEHOG_MOVE2}',
    args0: [{
      "type": "field_number",
      "name": "PORT1",
      "value": 0,
      "min": 0,
      "max": 3,
      "precision": 1
    }, {
      "type": "field_number",
      "name": "PORT2",
      "value": 1,
      "min": 0,
      "max": 3,
      "precision": 1
    }, {
      "type": "input_value",
      "name": "SPEED1",
      "check": "Number"
    }, {
      "type": "input_value",
      "name": "SPEED2",
      "check": "Number"
    }, {
      "type": "input_value",
      "name": "TIME",
      "check": "Number"
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: '%{BKY_HEDGEHOG_MOVE2_TOOLTIP}',
    helpUrl: '/help#blockly-drive',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      const port1 = block.getFieldValue('PORT1');
      const port2 = block.getFieldValue('PORT2'); // <GSL customizable: hedgehog_move2-body-JavaScript>

      const speed1 = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.valueToCode(block, 'SPEED1', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_NONE);
      const speed2 = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.valueToCode(block, 'SPEED2', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_NONE);
      const time = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.valueToCode(block, 'TIME', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_NONE);
      const indent = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.INDENT;
      let code = '';
      code += 'await hedgehog.commands(\n';
      code += `${indent}Hedgehog.moveMotorCmd(${port1}, ${speed1}),\n`;
      code += `${indent}Hedgehog.moveMotorCmd(${port2}, ${speed2}),\n`;
      code += ');\n';
      code += `await sleep(${time} * 1000);\n`;
      code += 'await hedgehog.commands(\n';
      code += `${indent}Hedgehog.moveMotorCmd(${port1}, 0),\n`;
      code += `${indent}Hedgehog.moveMotorCmd(${port2}, 0),\n`;
      code += ');\n';
      return code; // </GSL customizable: hedgehog_move2-body-JavaScript>
    },
    Python: block => {
      const port1 = block.getFieldValue('PORT1');
      const port2 = block.getFieldValue('PORT2'); // <GSL customizable: hedgehog_move2-body-Python>

      const speed1 = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.valueToCode(block, 'SPEED1', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_NONE);
      const speed2 = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.valueToCode(block, 'SPEED2', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_NONE);
      const time = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.valueToCode(block, 'TIME', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_NONE);
      const indent = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.INDENT;
      let code = '';
      code += 'hedgehog.commands(\n';
      code += `${indent}hedgehog.move_motor_cmd(${port1}, ${speed1}),\n`;
      code += `${indent}hedgehog.move_motor_cmd(${port2}, ${speed2}),\n`;
      code += ')\n';
      code += `sleep(${time})\n`;
      code += 'hedgehog.commands(\n';
      code += `${indent}hedgehog.brake_cmd(${port1}),\n`;
      code += `${indent}hedgehog.brake_cmd(${port2}),\n`;
      code += ')\n';
      return code; // </GSL customizable: hedgehog_move2-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "hedgehog_move2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "SPEED1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("shadow", {
      type: "math_number",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 13
      }
    }, "1000"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "SPEED2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("shadow", {
      type: "math_number",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 13
      }
    }, "1000"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "TIME",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("shadow", {
      type: "math_number",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 13
      }
    }, "1")))) // <default GSL customizable: hedgehog_move2-extra-toolbox />

  }
};
const HEDGEHOG_MOVE2_UNLIMITED = {
  blockJson: {
    type: 'hedgehog_move2_unlimited',
    message0: '%{BKY_HEDGEHOG_MOVE2_UNLIMITED}',
    args0: [{
      "type": "field_number",
      "name": "PORT1",
      "value": 0,
      "min": 0,
      "max": 3,
      "precision": 1
    }, {
      "type": "field_number",
      "name": "PORT2",
      "value": 1,
      "min": 0,
      "max": 3,
      "precision": 1
    }, {
      "type": "input_value",
      "name": "SPEED1",
      "check": "Number"
    }, {
      "type": "input_value",
      "name": "SPEED2",
      "check": "Number"
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: '%{BKY_HEDGEHOG_MOVE2_UNLIMITED_TOOLTIP}',
    helpUrl: '/help#blockly-drive',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      const port1 = block.getFieldValue('PORT1');
      const port2 = block.getFieldValue('PORT2'); // <GSL customizable: hedgehog_move2_unlimited-body-JavaScript>

      const speed1 = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.valueToCode(block, 'SPEED1', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_NONE);
      const speed2 = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.valueToCode(block, 'SPEED2', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_NONE);
      const indent = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.INDENT;
      let code = '';
      code += 'await commands(\n';
      code += `${indent}hedgehog.moveMotor(${port1}, ${speed1}),\n`;
      code += `${indent}hedgehog.moveMotor(${port2}, ${speed2}),\n`;
      code += ');\n';
      return code; // </GSL customizable: hedgehog_move2_unlimited-body-JavaScript>
    },
    Python: block => {
      const port1 = block.getFieldValue('PORT1');
      const port2 = block.getFieldValue('PORT2'); // <GSL customizable: hedgehog_move2_unlimited-body-Python>

      const speed1 = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.valueToCode(block, 'SPEED1', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_NONE);
      const speed2 = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.valueToCode(block, 'SPEED2', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_NONE);
      const indent = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.INDENT;
      let code = '';
      code += 'hedgehog.commands(\n';
      code += `${indent}hedgehog.move_motor_cmd(${port1}, ${speed1}),\n`;
      code += `${indent}hedgehog.move_motor_cmd(${port2}, ${speed2}),\n`;
      code += ')\n';
      return code; // </GSL customizable: hedgehog_move2_unlimited-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "hedgehog_move2_unlimited",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "SPEED1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("shadow", {
      type: "math_number",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 440,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 441,
        columnNumber: 13
      }
    }, "1000"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "SPEED2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("shadow", {
      type: "math_number",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 13
      }
    }, "1000")))) // <default GSL customizable: hedgehog_move2_unlimited-extra-toolbox />

  }
};
const HEDGEHOG_MOTOR_OFF2 = {
  blockJson: {
    type: 'hedgehog_motor_off2',
    message0: '%{BKY_HEDGEHOG_MOTOR_OFF2}',
    args0: [{
      "type": "field_number",
      "name": "PORT1",
      "value": 0,
      "min": 0,
      "max": 3,
      "precision": 1
    }, {
      "type": "field_number",
      "name": "PORT2",
      "value": 1,
      "min": 0,
      "max": 3,
      "precision": 1
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: '%{BKY_HEDGEHOG_MOTOR_OFF2_TOOLTIP}',
    helpUrl: '/help#blockly-drive',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      const port1 = block.getFieldValue('PORT1');
      const port2 = block.getFieldValue('PORT2'); // <GSL customizable: hedgehog_motor_off2-body-JavaScript>

      const indent = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.INDENT;
      let code = '';
      code += 'await commands(\n';
      code += `${indent}hedgehog.moveMotor(${port1}, 0),\n`;
      code += `${indent}hedgehog.moveMotor(${port2}, 0),\n`;
      code += ');\n';
      return code; // </GSL customizable: hedgehog_motor_off2-body-JavaScript>
    },
    Python: block => {
      const port1 = block.getFieldValue('PORT1');
      const port2 = block.getFieldValue('PORT2'); // <GSL customizable: hedgehog_motor_off2-body-Python>

      const indent = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.INDENT;
      let code = '';
      code += 'hedgehog.commands(\n';
      code += `${indent}hedgehog.motor_off_cmd(${port1}),\n`;
      code += `${indent}hedgehog.motor_off_cmd(${port2}),\n`;
      code += ')\n';
      return code; // </GSL customizable: hedgehog_motor_off2-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "hedgehog_motor_off2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516,
        columnNumber: 7
      }
    }) // <default GSL customizable: hedgehog_motor_off2-extra-toolbox />

  }
};
const HEDGEHOG_BRAKE2 = {
  blockJson: {
    type: 'hedgehog_brake2',
    message0: '%{BKY_HEDGEHOG_BRAKE2}',
    args0: [{
      "type": "field_number",
      "name": "PORT1",
      "value": 0,
      "min": 0,
      "max": 3,
      "precision": 1
    }, {
      "type": "field_number",
      "name": "PORT2",
      "value": 1,
      "min": 0,
      "max": 3,
      "precision": 1
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: '%{BKY_HEDGEHOG_BRAKE2_TOOLTIP}',
    helpUrl: '/help#blockly-drive',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      const port1 = block.getFieldValue('PORT1');
      const port2 = block.getFieldValue('PORT2'); // <GSL customizable: hedgehog_brake2-body-JavaScript>

      const indent = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.INDENT;
      let code = '';
      code += 'await commands(\n';
      code += `${indent}hedgehog.moveMotor(${port1}, 0),\n`;
      code += `${indent}hedgehog.moveMotor(${port2}, 0),\n`;
      code += ');\n';
      return code; // </GSL customizable: hedgehog_brake2-body-JavaScript>
    },
    Python: block => {
      const port1 = block.getFieldValue('PORT1');
      const port2 = block.getFieldValue('PORT2'); // <GSL customizable: hedgehog_brake2-body-Python>

      const indent = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.INDENT;
      let code = '';
      code += 'hedgehog.commands(\n';
      code += `${indent}hedgehog.brake_cmd(${port1}),\n`;
      code += `${indent}hedgehog.brake_cmd(${port2}),\n`;
      code += ')\n';
      return code; // </GSL customizable: hedgehog_brake2-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "hedgehog_brake2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 585,
        columnNumber: 7
      }
    }) // <default GSL customizable: hedgehog_brake2-extra-toolbox />

  }
};
const HEDGEHOG_SERVO = {
  blockJson: {
    type: 'hedgehog_servo',
    message0: '%{BKY_HEDGEHOG_SERVO}',
    args0: [{
      "type": "field_number",
      "name": "PORT",
      "value": 0,
      "min": 0,
      "max": 5,
      "precision": 1
    }, {
      "type": "input_value",
      "name": "ANGLE",
      "check": "Number"
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: '%{BKY_HEDGEHOG_SERVO_TOOLTIP}',
    helpUrl: '/help#blockly-servos'
  },
  generators: {
    JavaScript: block => {
      const port = block.getFieldValue('PORT'); // <GSL customizable: hedgehog_servo-body-JavaScript>

      const angle = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.valueToCode(block, 'ANGLE', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_MULTIPLICATION);
      const code = `await hedgehog.setServo(${port}, Math.round(${angle} * 1000 / 180));\n`;
      return code; // </GSL customizable: hedgehog_servo-body-JavaScript>
    },
    Python: block => {
      const port = block.getFieldValue('PORT'); // <GSL customizable: hedgehog_servo-body-Python>

      const angle = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.valueToCode(block, 'ANGLE', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_MULTIPLICATIVE);
      let code = '';
      code += `hedgehog.set_servo(${port}, int(${angle} * 1000 / 180))\n`;
      code += 'sleep(0.1)\n';
      return code; // </GSL customizable: hedgehog_servo-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "hedgehog_servo",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 642,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "ANGLE",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 644,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("shadow", {
      type: "math_number",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 645,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 646,
        columnNumber: 13
      }
    }, "90")))) // <default GSL customizable: hedgehog_servo-extra-toolbox />

  }
};
const HEDGEHOG_SERVO_OFF = {
  blockJson: {
    type: 'hedgehog_servo_off',
    message0: '%{BKY_HEDGEHOG_SERVO_OFF}',
    args0: [{
      "type": "field_number",
      "name": "PORT",
      "value": 0,
      "min": 0,
      "max": 5,
      "precision": 1
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: '%{BKY_HEDGEHOG_SERVO_OFF_TOOLTIP}',
    helpUrl: '/help#blockly-servos'
  },
  generators: {
    JavaScript: block => {
      const port = block.getFieldValue('PORT'); // <GSL customizable: hedgehog_servo_off-body-JavaScript>

      const code = `await hedgehog.setServo(${port}, null);\n`;
      return code; // </GSL customizable: hedgehog_servo_off-body-JavaScript>
    },
    Python: block => {
      const port = block.getFieldValue('PORT'); // <GSL customizable: hedgehog_servo_off-body-Python>

      const code = `hedgehog.set_servo(${port}, None)\n`;
      return code; // </GSL customizable: hedgehog_servo_off-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "hedgehog_servo_off",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 695,
        columnNumber: 7
      }
    }) // <default GSL customizable: hedgehog_servo_off-extra-toolbox />

  }
};
const HEDGEHOG_READ_ANALOG = {
  blockJson: {
    type: 'hedgehog_read_analog',
    message0: '%{BKY_HEDGEHOG_READ_ANALOG}',
    args0: [{
      "type": "field_number",
      "name": "PORT",
      "value": 0,
      "min": 0,
      "max": 15,
      "precision": 1
    }],
    output: 'Number',
    colour: 120,
    tooltip: '%{BKY_HEDGEHOG_READ_ANALOG_TOOLTIP}',
    helpUrl: '/help#blockly-sensors',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      const port = block.getFieldValue('PORT'); // <GSL customizable: hedgehog_read_analog-body-JavaScript>

      const code = `await hedgehog.getAnalog(${port})`;
      return [code, blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_AWAIT]; // </GSL customizable: hedgehog_read_analog-body-JavaScript>
    },
    Python: block => {
      const port = block.getFieldValue('PORT'); // <GSL customizable: hedgehog_read_analog-body-Python>

      const code = `hedgehog.get_analog(${port})`;
      return [code, blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_MEMBER]; // </GSL customizable: hedgehog_read_analog-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "hedgehog_read_analog",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 742,
        columnNumber: 7
      }
    }),
    // <GSL customizable: hedgehog_read_analog-extra-toolbox>
    comparison: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "logic_compare",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 749,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "OP",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 750,
        columnNumber: 9
      }
    }, "GTE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "A",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 751,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "hedgehog_read_analog",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 752,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "B",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 754,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("shadow", {
      type: "math_number",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 755,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 756,
        columnNumber: 13
      }
    }, "2048")))) // </GSL customizable: hedgehog_read_analog-extra-toolbox>

  }
};
const HEDGEHOG_READ_DIGITAL = {
  blockJson: {
    type: 'hedgehog_read_digital',
    message0: '%{BKY_HEDGEHOG_READ_DIGITAL}',
    args0: [{
      "type": "field_number",
      "name": "PORT",
      "value": 0,
      "min": 0,
      "max": 15,
      "precision": 1
    }],
    output: 'Boolean',
    colour: 120,
    tooltip: '%{BKY_HEDGEHOG_READ_DIGITAL_TOOLTIP}',
    helpUrl: '/help#blockly-sensors',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      const port = block.getFieldValue('PORT'); // <GSL customizable: hedgehog_read_digital-body-JavaScript>
      // TODO generate code

      const code = `await hedgehog.getDigital(${port})`;
      return [code, blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_AWAIT]; // </GSL customizable: hedgehog_read_digital-body-JavaScript>
    },
    Python: block => {
      const port = block.getFieldValue('PORT'); // <GSL customizable: hedgehog_read_digital-body-Python>

      const code = `hedgehog.get_digital(${port})`;
      return [code, blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_MEMBER]; // </GSL customizable: hedgehog_read_digital-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "hedgehog_read_digital",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 804,
        columnNumber: 7
      }
    }) // <default GSL customizable: hedgehog_read_digital-extra-toolbox />

  }
};
const HEDGEHOG_SLEEP = {
  blockJson: {
    type: 'hedgehog_sleep',
    message0: '%{BKY_HEDGEHOG_SLEEP}',
    args0: [{
      "type": "input_value",
      "name": "TIME",
      "check": "Number"
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: '%{BKY_HEDGEHOG_SLEEP_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      // <GSL customizable: hedgehog_sleep-body-JavaScript>
      const time = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.valueToCode(block, 'TIME', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_MULTIPLICATION);
      const code = `await sleep(${time} * 1000);\n`;
      return code; // </GSL customizable: hedgehog_sleep-body-JavaScript>
    },
    Python: block => {
      // <GSL customizable: hedgehog_sleep-body-Python>
      const time = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.valueToCode(block, 'TIME', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_ATOMIC);
      const code = `sleep(${time})\n`;
      return code; // </GSL customizable: hedgehog_sleep-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "hedgehog_sleep",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 850,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "TIME",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 852,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("shadow", {
      type: "math_number",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 853,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 854,
        columnNumber: 13
      }
    }, "1")))) // <default GSL customizable: hedgehog_sleep-extra-toolbox />

  }
};
const blocks = [HEDGEHOG_MOVE, HEDGEHOG_MOVE_UNLIMITED, HEDGEHOG_MOTOR_OFF, HEDGEHOG_BRAKE, HEDGEHOG_MOVE2, HEDGEHOG_MOVE2_UNLIMITED, HEDGEHOG_MOTOR_OFF2, HEDGEHOG_BRAKE2, HEDGEHOG_SERVO, HEDGEHOG_SERVO_OFF, HEDGEHOG_READ_ANALOG, HEDGEHOG_READ_DIGITAL, HEDGEHOG_SLEEP];
blocks.forEach(___WEBPACK_IMPORTED_MODULE_2__["registerBlocklyBlock"]);
/* harmony default export */ __webpack_exports__["default"] = (blocks);

/***/ }),

/***/ "./src/components/ide/VisualEditor/blocks/hedgehog_msg_de.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
const Msg = {};
/* harmony default export */ __webpack_exports__["default"] = (Msg);
Msg['HEDGEHOG_CAT_DRIVE'] = 'Fahren';
Msg['HEDGEHOG_CAT_MOTORS'] = 'Motoren';
Msg['HEDGEHOG_CAT_SERVOS'] = 'Servos';
Msg['HEDGEHOG_CAT_SENSORS'] = 'Sensoren';
Msg['HEDGEHOG_MOVE'] = 'bewege Motor %1 mit Geschwindigkeit %2 für %3 Sekunden';
Msg['HEDGEHOG_MOVE_TOOLTIP'] = 'Bewegt einen Motor in eine bestimmte Richtung';
Msg['HEDGEHOG_MOVE_UNLIMITED'] = 'bewege Motor %1 mit Geschwindigkeit %2';
Msg['HEDGEHOG_MOVE_UNLIMITED_TOOLTIP'] = 'bewegt einen Motor solange bis er explizit gestoppt wird';
Msg['HEDGEHOG_MOTOR_OFF'] = 'schalte Motor %1 aus';
Msg['HEDGEHOG_MOTOR_OFF_TOOLTIP'] = 'schaltet einen Motor aus';
Msg['HEDGEHOG_BRAKE'] = 'bremse Motor %1';
Msg['HEDGEHOG_BRAKE_TOOLTIP'] = 'bremst einen Motor sofort';
Msg['HEDGEHOG_MOVE2'] = 'bewege Motor %1 und %2 mit Geschwindigkeit %3 und %4 für %5 Sekunden';
Msg['HEDGEHOG_MOVE2_TOOLTIP'] = 'Bewegt zwei Motor in eine bestimmte Richtung';
Msg['HEDGEHOG_MOVE2_UNLIMITED'] = 'bewege Motor %1 und %2 mit Geschwindigkeit %3 und %4';
Msg['HEDGEHOG_MOVE2_UNLIMITED_TOOLTIP'] = 'bewegt zwei Motoren solange bis sie explizit gestoppt werden';
Msg['HEDGEHOG_FORWARD'] = 'bewege Motor %1 und %2 %3 für %4 Sekunden';
Msg['HEDGEHOG_FORWARD_TOOLTIP'] = 'Bewegt zwei Motoren in eine bestimmte Richtung';
Msg['HEDGEHOG_TURN'] = 'wende mit Motor %1 und %2 %3 für %4 Sekunden';
Msg['HEDGEHOG_TURN_TOOLTIP'] = 'wendet den Hedgehog indem zwei Motoren in entgegengesetzter Richtung laufen gelassen werden';
Msg['HEDGEHOG_MOTOR_OFF2'] = 'schalte Motoren %1 und %2 aus';
Msg['HEDGEHOG_MOTOR_OFF2_TOOLTIP'] = 'schaltet zwei Motoren gleichzeitig aus';
Msg['HEDGEHOG_BRAKE2'] = 'bremse Motoren %1 und %2';
Msg['HEDGEHOG_BRAKE2_TOOLTIP'] = 'bremst zwei Motoren gleichzeitig';
Msg['HEDGEHOG_SERVO'] = 'setze Servo %1 auf %2 Grad';
Msg['HEDGEHOG_SERVO_TOOLTIP'] = 'verändert die position eines Servos';
Msg['HEDGEHOG_SERVO_OFF'] = 'schalte Servo %1 aus';
Msg['HEDGEHOG_SERVO_OFF_TOOLTIP'] = 'deaktiviert einen Servo';
Msg['HEDGEHOG_SPEAKER'] = 'schalte Lautsprecher auf %1 Hz';
Msg['HEDGEHOG_SPEAKER_TOOLTIP'] = 'schaltet den Lautsprecher auf eine bestimmte Frequenz';
Msg['HEDGEHOG_SPEAKER_OFF'] = 'schalte Lautsprecher aus';
Msg['HEDGEHOG_SPEAKER_OFF_TOOLTIP'] = 'deaktiviert den Lautsprecher';
Msg['HEDGEHOG_PULLUP'] = 'setze Pullup für Sensor %1 auf %2';
Msg['HEDGEHOG_PULLUP_TOOLTIP'] = 'Setze einen Pullup Widerstand für einen bestimmten IO Sensor Port';
Msg['HEDGEHOG_READ_ANALOG'] = 'Wert von analogem Sensor %1';
Msg['HEDGEHOG_READ_ANALOG_TOOLTIP'] = 'gibt den Wert eines analogen Sensors zurück';
Msg['HEDGEHOG_READ_DIGITAL'] = 'Wert von digitalem Sensor %1';
Msg['HEDGEHOG_READ_DIGITAL_TOOLTIP'] = 'gibt den Wert eines analogen Sensors zurück';
Msg['HEDGEHOG_READ_IMU'] = 'Achse %2 der %1 des Lagesensors';
Msg['HEDGEHOG_READ_IMU_TOOLTIP'] = 'gibt einen oder alle Werte des Lagesensors zurück';
Msg['HEDGEHOG_READ_IMU_POSE'] = 'Pose';
Msg['HEDGEHOG_READ_IMU_ACCELERATION'] = 'Beschleunigung';
Msg['HEDGEHOG_READ_IMU_RATE'] = 'Winkelgeschwindigkeit';
Msg['HEDGEHOG_SLEEP'] = 'pausiere für %1 Sekunden';
Msg['HEDGEHOG_SLEEP_TOOLTIP'] = 'pausiert den Programmablauf für eine bestimmte Zeit';
Msg['HEDGEHOG_CREATE_SCOPE'] = 'iRobot Create scope %1 %2';
Msg['HEDGEHOG_CREATE_SCOPE_TOOLTIP'] = 'Alle Create Blöcke müssen sich innerhalb eines Create oder Create2 scope Blocks befinden';
Msg['HEDGEHOG_CREATE2_SCOPE'] = 'iRobot Create2 scope %1 %2';
Msg['HEDGEHOG_CREATE_DRIVE_DIRECT'] = 'fahre mit dem Create %1 Sekunden lang mit Geschwindigkeiten %2 & %3';
Msg['HEDGEHOG_CREATE_DRIVE_DIRECT_TOOLTIP'] = 'Fährt den Create für eine bestimmte Zeit';
Msg['HEDGEHOG_LEGO_MOTOR_CONFIG'] = 'konfiguriere Motor %1 als Lego-Motor';
Msg['HEDGEHOG_LEGO_MOTOR_CONFIG_TOOLTIP'] = 'konfiguriert einen Motor als Lego-Motor';
Msg['HEDGEHOG_LEGO_SENSOR_CONFIG'] = 'konfiguriere Sensor %1 als Lego-Sensor';
Msg['HEDGEHOG_LEGO_SENSOR_CONFIG_TOOLTIP'] = 'konfiguriert einen Sensor als Lego-Sensor';
Msg['HEDGEHOG_LEGO_MOVE'] = 'bewege Motor %1 %2 für %3 Sekunden';
Msg['HEDGEHOG_LEGO_MOVE_TOOLTIP'] = 'Bewegt einen Motor in eine bestimmte Richtung';
Msg['HEDGEHOG_LEGO_MOVE_UNLIMITED'] = 'bewege Motor %1 %2';
Msg['HEDGEHOG_LEGO_MOVE_UNLIMITED_TOOLTIP'] = 'bewegt einen Motor solange bis er explizit gestoppt wird';
Msg['HEDGEHOG_LEGO_MOVE2'] = 'bewege Motor %1 und %2 mit Geschwindigkeit %3 und %4 für %5 Sekunden';
Msg['HEDGEHOG_LEGO_MOVE2_TOOLTIP'] = 'Bewegt zwei Motor in eine bestimmte Richtung';
Msg['HEDGEHOG_LEGO_MOVE2_UNLIMITED'] = 'bewege Motor %1 und %2 mit Geschwindigkeit %3 und %4';
Msg['HEDGEHOG_LEGO_MOVE2_UNLIMITED_TOOLTIP'] = 'bewegt zwei Motoren solange bis sie explizit gestoppt werden';
Msg['HEDGEHOG_LEGO_FORWARD'] = 'bewege Motor %1 und %2 %3 für %4 Sekunden';
Msg['HEDGEHOG_LEGO_FORWARD_TOOLTIP'] = 'Bewegt zwei Motoren in eine bestimmte Richtung';
Msg['HEDGEHOG_LEGO_TURN'] = 'wende mit Motor %1 und %2 %3 für %4 Sekunden';
Msg['HEDGEHOG_LEGO_TURN_TOOLTIP'] = 'wendet den Hedgehog indem zwei Motoren in entgegengesetzter Richtung laufen gelassen werden';

/***/ }),

/***/ "./src/components/ide/VisualEditor/blocks/hedgehog_msg_en.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
const Msg = {};
/* harmony default export */ __webpack_exports__["default"] = (Msg);
Msg['HEDGEHOG_CAT_DRIVE'] = 'Drive';
Msg['HEDGEHOG_CAT_MOTORS'] = 'Motors';
Msg['HEDGEHOG_CAT_SERVOS'] = 'Servos';
Msg['HEDGEHOG_CAT_SENSORS'] = 'Sensors';
Msg['HEDGEHOG_MOVE'] = 'move motor %1 with speeds %2 for %3 seconds';
Msg['HEDGEHOG_MOVE_TOOLTIP'] = 'move one motor for a certain duration';
Msg['HEDGEHOG_MOVE_UNLIMITED'] = 'move motor %1 with speeds %2';
Msg['HEDGEHOG_MOVE_UNLIMITED_TOOLTIP'] = 'move motor until stopped explicitly';
Msg['HEDGEHOG_MOTOR_OFF2'] = 'turn motors %1 and %2 off';
Msg['HEDGEHOG_MOTOR_OFF2_TOOLTIP'] = 'turns two motors off simultaneously';
Msg['HEDGEHOG_BRAKE2'] = 'brake motors %1 and %2';
Msg['HEDGEHOG_BRAKE2_TOOLTIP'] = 'brakes two motors simultaneously';
Msg['HEDGEHOG_MOVE2'] = 'move motor %1 and %2 with speeds %3 and %4 for %5 seconds';
Msg['HEDGEHOG_MOVE2_TOOLTIP'] = 'move two motors for a certain duration';
Msg['HEDGEHOG_MOVE2_UNLIMITED'] = 'move motor %1 and %2 with speeds %3 and %4';
Msg['HEDGEHOG_MOVE2_UNLIMITED_TOOLTIP'] = 'move two motors until stopped explicitly';
Msg['HEDGEHOG_FORWARD'] = 'move motor %1 and %2 %3 for %4 seconds';
Msg['HEDGEHOG_FORWARD_TOOLTIP'] = 'move two motors for a certain duration';
Msg['HEDGEHOG_TURN'] = 'turn motors %1 and %2 %3 for %4 seconds';
Msg['HEDGEHOG_TURN_TOOLTIP'] = 'turn the Hedgehog for a certain duration';
Msg['HEDGEHOG_MOTOR_OFF'] = 'turn motor %1 off';
Msg['HEDGEHOG_MOTOR_OFF_TOOLTIP'] = 'turns one motor off';
Msg['HEDGEHOG_BRAKE'] = 'brake motor %1';
Msg['HEDGEHOG_BRAKE_TOOLTIP'] = 'brakes a motor immediately';
Msg['HEDGEHOG_SERVO'] = 'set servo %1 to %2 degrees';
Msg['HEDGEHOG_SERVO_TOOLTIP'] = 'move a servo to a specified position';
Msg['HEDGEHOG_SERVO_OFF'] = 'turn servo %1 off';
Msg['HEDGEHOG_SERVO_OFF_TOOLTIP'] = 'turn a servo off';
Msg['HEDGEHOG_SPEAKER'] = 'turn speaker to %1 Hz';
Msg['HEDGEHOG_SPEAKER_TOOLTIP'] = 'turns speaker to a certain frequency';
Msg['HEDGEHOG_SPEAKER_OFF'] = 'turn speaker off';
Msg['HEDGEHOG_SPEAKER_OFF_TOOLTIP'] = 'deaktivates the speaker';
Msg['HEDGEHOG_PULLUP'] = 'set pullup for sensor %1 to %2';
Msg['HEDGEHOG_PULLUP_TOOLTIP'] = 'set the pullup state for a specified IO sensor port';
Msg['HEDGEHOG_READ_ANALOG'] = 'value of analog sensor %1';
Msg['HEDGEHOG_READ_ANALOG_TOOLTIP'] = 'get the value of an analog sensor';
Msg['HEDGEHOG_READ_DIGITAL'] = 'value of digital sensor %1';
Msg['HEDGEHOG_READ_DIGITAL_TOOLTIP'] = 'get the value of a digital sensor';
Msg['HEDGEHOG_READ_IMU'] = "%2 axis of the pose sensor's %1";
Msg['HEDGEHOG_READ_IMU_TOOLTIP'] = 'get one or all axes of the pose sensor';
Msg['HEDGEHOG_READ_IMU_POSE'] = 'pose';
Msg['HEDGEHOG_READ_IMU_ACCELERATION'] = 'acceleration';
Msg['HEDGEHOG_READ_IMU_RATE'] = 'angular velocity';
Msg['HEDGEHOG_SLEEP'] = 'sleep for %1 seconds';
Msg['HEDGEHOG_SLEEP_TOOLTIP'] = 'pause the program for a certain amount of time';
Msg['HEDGEHOG_CREATE_SCOPE'] = 'iRobot Create scope %1 %2';
Msg['HEDGEHOG_CREATE_SCOPE_TOOLTIP'] = 'All Create blocks have to be inside of this block';
Msg['HEDGEHOG_CREATE2_SCOPE'] = 'iRobot Create2 scope %1 %2';
Msg['HEDGEHOG_CREATE_DRIVE_DIRECT'] = 'drive the Create for %1 seconds with velocities %2 & %3';
Msg['HEDGEHOG_CREATE_DRIVE_DIRECT_TOOLTIP'] = 'Drives the Create for a certain amount of time';
Msg['HEDGEHOG_LEGO_MOTOR_CONFIG'] = 'configure motor %1 as Lego motor';
Msg['HEDGEHOG_LEGO_MOTOR_CONFIG_TOOLTIP'] = 'configures a motor as a Lego motor';
Msg['HEDGEHOG_LEGO_SENSOR_CONFIG'] = 'configure sensor %1 as Lego sensor';
Msg['HEDGEHOG_LEGO_SENSOR_CONFIG_TOOLTIP'] = 'configures a sensor as a Lego sensor';
Msg['HEDGEHOG_LEGO_MOVE'] = 'move motor %1 %2 for %3 seconds';
Msg['HEDGEHOG_LEGO_MOVE_TOOLTIP'] = 'move one motor for a certain duration';
Msg['HEDGEHOG_LEGO_MOVE_UNLIMITED'] = 'move motor %1 %2';
Msg['HEDGEHOG_LEGO_MOVE_UNLIMITED_TOOLTIP'] = 'move motor until stopped explicitly';
Msg['HEDGEHOG_LEGO_MOVE2'] = 'move motor %1 and %2 with speeds %3 and %4 for %5 seconds';
Msg['HEDGEHOG_LEGO_MOVE2_TOOLTIP'] = 'move two motors for a certain duration';
Msg['HEDGEHOG_LEGO_MOVE2_UNLIMITED'] = 'move motor %1 and %2 with speeds %3 and %4';
Msg['HEDGEHOG_LEGO_MOVE2_UNLIMITED_TOOLTIP'] = 'move two motors until stopped explicitly';
Msg['HEDGEHOG_LEGO_FORWARD'] = 'move motor %1 and %2 %3 for %4 seconds';
Msg['HEDGEHOG_LEGO_FORWARD_TOOLTIP'] = 'move two motors for a certain duration';
Msg['HEDGEHOG_LEGO_TURN'] = 'turn motors %1 and %2 %3 for %4 seconds';
Msg['HEDGEHOG_LEGO_TURN_TOOLTIP'] = 'turn the Hedgehog for a certain duration';

/***/ }),

/***/ "./src/components/ide/VisualEditor/blocks/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBlocklyBlock", function() { return registerBlocklyBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("blockly/core");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_1__);


function registerBlocklyBlock(block) {
  const {
    type
  } = block.blockJson;
  blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Blocks[type] = {
    init() {
      this.jsonInit(block.blockJson);
    }

  };
  blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript[type] = block.generators.JavaScript;
  blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python[type] = block.generators.Python;
}

/***/ }),

/***/ "./src/components/ide/VisualEditor/blocks/misc.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRCL_SET_TCP", function() { return CRCL_SET_TCP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRCL_SET_TOOL_VALUE", function() { return CRCL_SET_TOOL_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRCL_SWITCH_TOOL", function() { return CRCL_SWITCH_TOOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRCL_WAIT", function() { return CRCL_WAIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRCL_TOOL_ON_OFF", function() { return CRCL_TOOL_ON_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRCL_VELOCITY", function() { return CRCL_VELOCITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRCL_ACCELERATION", function() { return CRCL_ACCELERATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRINT_BLOCK", function() { return PRINT_BLOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_INPUT_BLOCK", function() { return GET_INPUT_BLOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROTATION_ABC", function() { return ROTATION_ABC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VECTOR_XYZ", function() { return VECTOR_XYZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VECTOR_SKALAR", function() { return VECTOR_SKALAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRCL_MOVE_VECTOR_ROTATION", function() { return CRCL_MOVE_VECTOR_ROTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRCL_MOVE_DIRECTION", function() { return CRCL_MOVE_DIRECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CRCL_ROTATE_Z", function() { return CRCL_ROTATE_Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VECTOR_OPERATION", function() { return VECTOR_OPERATION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("blockly/core");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/ide/VisualEditor/blocks/index.js");
/* harmony import */ var crcljs_src_MultiRobotInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("crcljs/src/MultiRobotInterface");
/* harmony import */ var crcljs_src_MultiRobotInterface__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crcljs_src_MultiRobotInterface__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var crcljs_src_CommandFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("crcljs/src/CommandFactory");
/* harmony import */ var crcljs_src_CommandFactory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crcljs_src_CommandFactory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var crcljs_src_CRCLCommand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("crcljs/src/CRCLCommand");
/* harmony import */ var crcljs_src_CRCLCommand__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crcljs_src_CRCLCommand__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var crcljs_src_RobotInterface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("crcljs/src/RobotInterface");
/* harmony import */ var crcljs_src_RobotInterface__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(crcljs_src_RobotInterface__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var crcljs_node_src_TCPRobotConnection_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("crcljs-node/src/TCPRobotConnection.mjs");
/* harmony import */ var crcljs_node_src_TCPRobotConnection_mjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(crcljs_node_src_TCPRobotConnection_mjs__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/VisualEditor/blocks/misc.js";

/* eslint-disable */







 //robots = new MultiRobotInterface();
//robots.addRobot(new RobotInterface(new TCPRobotConnection('Festo', 9000, '127.0.0.1')))

const CRCL_SET_TCP = {
  blockJson: {
    type: 'crcl_set_tcp',
    message0: '%{BKY_CRCL_SET_TCP}',
    args0: [{
      "type": "input_value",
      "name": "Vector",
      "check": "Vector"
    }, {
      "type": "input_value",
      "name": "Rotation",
      "check": "Rotation"
    }, {
      "type": "field_checkbox",
      "name": "Linear"
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 280,
    tooltip: '%{BKY_CRCL_SET_TCP_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      const linear = block.getFieldValue('Linear') === 'TRUE'; // <default GSL customizable: crcl_set_tcp-body-JavaScript>

      const vector = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.valueToCode(block, 'Vector', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_ATOMIC);
      const rotation = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.valueToCode(block, 'Rotation', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_ATOMIC); // TODO generate code

      return code; // </GSL customizable: crcl_set_tcp-body-JavaScript>
    },
    Python: block => {
      const linear = block.getFieldValue('Linear') === 'TRUE'; // <default GSL customizable: crcl_set_tcp-body-Python>

      const vector = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.valueToCode(block, 'Vector', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_ATOMIC);
      const rotation = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.valueToCode(block, 'Rotation', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_ATOMIC); // TODO generate code

      const code = '';
      return code; // </GSL customizable: crcl_set_tcp-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "crcl_set_tcp",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 7
      }
    }) // <default GSL customizable: crcl_set_tcp-extra-toolbox />

  }
};
const CRCL_SET_TOOL_VALUE = {
  blockJson: {
    type: 'crcl_set_tool_value',
    message0: '%{BKY_CRCL_SET_TOOL_VALUE}',
    args0: [{
      "type": "field_number",
      "name": "value"
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 70,
    tooltip: '%{BKY_CRCL_SET_TOOL_VALUE_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      const value = block.getFieldValue('value'); // <default GSL customizable: crcl_set_tool_value-body-JavaScript>
      // TODO generate code
      // robots.addToQueue(robots[0], new CRCLCommand('SetEndEffector',"Picking Target",{"Setting": $value }));
      // console.log(new CRCLCommand('SetEndEffector',"Picking Target",{"Setting": $value }).toString())

      return code; // </GSL customizable: crcl_set_tool_value-body-JavaScript>
    },
    Python: block => {
      const value = block.getFieldValue('value'); // <default GSL customizable: crcl_set_tool_value-body-Python>
      // TODO generate code

      const code = '';
      return code; // </GSL customizable: crcl_set_tool_value-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "crcl_set_tool_value",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 7
      }
    }) // <default GSL customizable: crcl_set_tool_value-extra-toolbox />

  }
};
const CRCL_SWITCH_TOOL = {
  blockJson: {
    type: 'crcl_switch_tool',
    message0: '%{BKY_CRCL_SWITCH_TOOL}',
    args0: [{
      "type": "field_number",
      "name": "toolNumber"
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 70,
    tooltip: '%{BKY_CRCL_SWITCH_TOOL_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      const toolnumber = block.getFieldValue('toolNumber'); // <default GSL customizable: crcl_switch_tool-body-JavaScript>
      // TODO generate code

      const code = ''; //  console.log( new CRCLCommand("SetEndEffectorParameters","Using Tool "+$toolNumber, {"ToolID": $toolNumber});
      //robots.addToQueue(robots[0], new CRCLCommand("SetEndEffectorParameters","Using Tool "+$toolNumber, {"ToolID": $toolNumber}))

      return code; // </GSL customizable: crcl_switch_tool-body-JavaScript>
    },
    Python: block => {
      const toolnumber = block.getFieldValue('toolNumber'); // <default GSL customizable: crcl_switch_tool-body-Python>
      // TODO generate code

      const code = '';
      return code; // </GSL customizable: crcl_switch_tool-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "crcl_switch_tool",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 7
      }
    }) // <default GSL customizable: crcl_switch_tool-extra-toolbox />

  }
};
const CRCL_WAIT = {
  blockJson: {
    type: 'crcl_wait',
    message0: '%{BKY_CRCL_WAIT}',
    args0: [{
      "type": "field_number",
      "name": "time"
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 70,
    tooltip: '%{BKY_CRCL_WAIT_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      const time = block.getFieldValue('time'); // <default GSL customizable: crcl_wait-body-JavaScript>
      // TODO generate code

      const code = '';
      robots.addToQueue(robots[0], new crcljs_src_CRCLCommand__WEBPACK_IMPORTED_MODULE_5___default.a('Wait', 'Wait ' + $time, {
        "Time": $time
      }));
      return code; // </GSL customizable: crcl_wait-body-JavaScript>
    },
    Python: block => {
      const time = block.getFieldValue('time'); // <default GSL customizable: crcl_wait-body-Python>
      // TODO generate code

      const code = '';
      return code; // </GSL customizable: crcl_wait-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "crcl_wait",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 7
      }
    }) // <default GSL customizable: crcl_wait-extra-toolbox />

  }
};
const CRCL_TOOL_ON_OFF = {
  blockJson: {
    type: 'crcl_tool_on_off',
    message0: '%{BKY_CRCL_TOOL_ON_OFF}',
    args0: [{
      "type": "field_dropdown",
      "name": "onof",
      "options": [["ON", "ON"], ["OFF", "OFF"]]
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 280,
    tooltip: '%{BKY_CRCL_TOOL_ON_OFF_TOOLTIP}',
    helpUrl: '/help#blockly-misc'
  },
  generators: {
    JavaScript: block => {
      const onof = block.getFieldValue('onof');

      if (onof = 'ON') {
        robots.addToQueue(robots[0], new crcljs_src_CRCLCommand__WEBPACK_IMPORTED_MODULE_5___default.a('SetEndEffector', "Picking Target", {
          "Setting": 1.00
        }));
      } else {
        robots.addToQueue(robots[0], new crcljs_src_CRCLCommand__WEBPACK_IMPORTED_MODULE_5___default.a('SetEndEffector', "Picking Target", {
          "Setting": 0.00
        }));
      } // <default GSL customizable: crcl_tool_on_off-body-JavaScript>
      // TODO generate code


      const code = '';
      return code; // </GSL customizable: crcl_tool_on_off-body-JavaScript>
    },
    Python: block => {
      const onof = block.getFieldValue('onof'); // <default GSL customizable: crcl_tool_on_off-body-Python>
      // TODO generate code

      const code = '';
      return code; // </GSL customizable: crcl_tool_on_off-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "crcl_tool_on_off",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 7
      }
    }) // <default GSL customizable: crcl_tool_on_off-extra-toolbox />

  }
};
const CRCL_VELOCITY = {
  blockJson: {
    type: 'crcl_velocity',
    message0: '%{BKY_CRCL_VELOCITY}',
    args0: [{
      "type": "field_number",
      "name": "velocity"
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 70,
    tooltip: '%{BKY_CRCL_VELOCITY_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      const velocity = block.getFieldValue('velocity'); // <default GSL customizable: crcl_velocity-body-JavaScript>
      // TODO generate code

      const code = '';
      return code; // </GSL customizable: crcl_velocity-body-JavaScript>
    },
    Python: block => {
      const velocity = block.getFieldValue('velocity'); // <default GSL customizable: crcl_velocity-body-Python>
      // TODO generate code

      const code = '';
      robots.addToQueue(robots[0], crcljs_src_CommandFactory__WEBPACK_IMPORTED_MODULE_4___default.a.SetTransSpeed('Set slow speed', $velocity));
      return code; // </GSL customizable: crcl_velocity-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "crcl_velocity",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 7
      }
    }) // <default GSL customizable: crcl_velocity-extra-toolbox />

  }
};
const CRCL_ACCELERATION = {
  blockJson: {
    type: 'crcl_acceleration',
    message0: '%{BKY_CRCL_ACCELERATION}',
    args0: [{
      "type": "field_number",
      "name": "acceleration"
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 70,
    tooltip: '%{BKY_CRCL_ACCELERATION_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      const acceleration = block.getFieldValue('acceleration'); // <default GSL customizable: crcl_acceleration-body-JavaScript>
      // TODO generate code

      const code = '';
      robots.addToQueue(robots[0], crcljs_src_CommandFactory__WEBPACK_IMPORTED_MODULE_4___default.a.SetTransAccel('Set accelaration speed', acceleration));
      return code; // </GSL customizable: crcl_acceleration-body-JavaScript>
    },
    Python: block => {
      const acceleration = block.getFieldValue('acceleration'); // <default GSL customizable: crcl_acceleration-body-Python>
      // TODO generate code

      const code = '';
      return code; // </GSL customizable: crcl_acceleration-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "crcl_acceleration",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 7
      }
    }) // <default GSL customizable: crcl_acceleration-extra-toolbox />

  }
};
const PRINT_BLOCK = {
  blockJson: {
    type: 'print_block',
    message0: '%{BKY_PRINT_BLOCK}',
    args0: [{
      "type": "input_value",
      "name": "TEXT",
      "check": ["Number", "Boolean", "String", "Vector"]
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 311,
    tooltip: '%{BKY_PRINT_BLOCK_TOOLTIP}',
    helpUrl: '/help#blockly-misc'
  },
  generators: {
    JavaScript: block => {
      // <default GSL customizable: print_block-body-JavaScript>
      const text = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.valueToCode(block, 'TEXT', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_ATOMIC); // TODO generate code

      const code = '';
      return code; // </GSL customizable: print_block-body-JavaScript>
    },
    Python: block => {
      // <default GSL customizable: print_block-body-Python>
      const text = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.valueToCode(block, 'TEXT', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_ATOMIC); // TODO generate code

      const code = '';
      return code; // </GSL customizable: print_block-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "print_block",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 7
      }
    }) // <default GSL customizable: print_block-extra-toolbox />

  }
};
const GET_INPUT_BLOCK = {
  blockJson: {
    type: 'get_input_block',
    message0: '%{BKY_GET_INPUT_BLOCK}',
    args0: [],
    output: 'String',
    colour: 70,
    tooltip: '%{BKY_GET_INPUT_BLOCK_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      // <default GSL customizable: get_input_block-body-JavaScript>
      // TODO generate code
      const code = '';
      return [code, blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_NONE]; // </GSL customizable: get_input_block-body-JavaScript>
    },
    Python: block => {
      // <default GSL customizable: get_input_block-body-Python>
      // TODO generate code
      const code = '';
      return [code, blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_NONE]; // </GSL customizable: get_input_block-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "get_input_block",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463,
        columnNumber: 7
      }
    }) // <default GSL customizable: get_input_block-extra-toolbox />

  }
};
const ROTATION_ABC = {
  blockJson: {
    type: 'rotation_abc',
    message0: '%{BKY_ROTATION_ABC}',
    args0: [{
      "type": "field_number",
      "name": "A",
      "value": 0,
      "min": 0,
      "max": 360
    }, {
      "type": "field_number",
      "name": "B",
      "value": 0,
      "min": 0,
      "max": 360
    }, {
      "type": "field_number",
      "name": "C",
      "value": 90,
      "min": 0,
      "max": 360
    }],
    output: 'Rotation',
    colour: 311,
    tooltip: '%{BKY_ROTATION_ABC_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      const a = block.getFieldValue('A');
      const b = block.getFieldValue('B');
      const c = block.getFieldValue('C'); // <default GSL customizable: rotation_abc-body-JavaScript>
      // TODO generate code

      const code = '';
      return [code, blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_NONE]; // </GSL customizable: rotation_abc-body-JavaScript>
    },
    Python: block => {
      const a = block.getFieldValue('A');
      const b = block.getFieldValue('B');
      const c = block.getFieldValue('C'); // <default GSL customizable: rotation_abc-body-Python>
      // TODO generate code

      const code = '';
      return [code, blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_NONE]; // </GSL customizable: rotation_abc-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "rotation_abc",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529,
        columnNumber: 7
      }
    }) // <default GSL customizable: rotation_abc-extra-toolbox />

  }
};
const VECTOR_XYZ = {
  blockJson: {
    type: 'vector_xyz',
    message0: '%{BKY_VECTOR_XYZ}',
    args0: [{
      "type": "field_number",
      "name": "X",
      "value": 0
    }, {
      "type": "field_number",
      "name": "Y",
      "value": 0
    }, {
      "type": "field_number",
      "name": "Z",
      "value": 0
    }],
    output: 'Vector',
    colour: 70,
    tooltip: '%{BKY_VECTOR_XYZ_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      const x = block.getFieldValue('X');
      const y = block.getFieldValue('Y');
      const z = block.getFieldValue('Z'); // <default GSL customizable: vector_xyz-body-JavaScript>
      // TODO generate code

      const code = '';
      return [code, blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_NONE]; // </GSL customizable: vector_xyz-body-JavaScript>
    },
    Python: block => {
      const x = block.getFieldValue('X');
      const y = block.getFieldValue('Y');
      const z = block.getFieldValue('Z'); // <default GSL customizable: vector_xyz-body-Python>
      // TODO generate code

      const code = '';
      return [code, blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_NONE]; // </GSL customizable: vector_xyz-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "vector_xyz",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 589,
        columnNumber: 7
      }
    }) // <default GSL customizable: vector_xyz-extra-toolbox />

  }
};
const VECTOR_SKALAR = {
  blockJson: {
    type: 'vector_skalar',
    message0: '%{BKY_VECTOR_SKALAR}',
    args0: [{
      "type": "input_value",
      "name": "Vector",
      "check": "Vector"
    }, {
      "type": "field_number",
      "name": "Skalar"
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 280,
    tooltip: '%{BKY_VECTOR_SKALAR_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      const skalar = block.getFieldValue('Skalar'); // <default GSL customizable: vector_skalar-body-JavaScript>

      const vector = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.valueToCode(block, 'Vector', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_ATOMIC); // TODO generate code

      const code = '';
      return code; // </GSL customizable: vector_skalar-body-JavaScript>
    },
    Python: block => {
      const skalar = block.getFieldValue('Skalar'); // <default GSL customizable: vector_skalar-body-Python>

      const vector = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.valueToCode(block, 'Vector', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_ATOMIC); // TODO generate code

      const code = '';
      return code; // </GSL customizable: vector_skalar-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "vector_skalar",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 643,
        columnNumber: 7
      }
    }) // <default GSL customizable: vector_skalar-extra-toolbox />

  }
};
const CRCL_MOVE_VECTOR_ROTATION = {
  blockJson: {
    type: 'crcl_move_vector_rotation',
    message0: '%{BKY_CRCL_MOVE_VECTOR_ROTATION}',
    args0: [{
      "type": "input_value",
      "name": "Vector",
      "check": "Vector"
    }, {
      "type": "input_value",
      "name": "Rotation",
      "check": "Rotation"
    }, {
      "type": "field_checkbox",
      "name": "Linear"
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 280,
    tooltip: '%{BKY_CRCL_MOVE_VECTOR_ROTATION_TOOLTIP}',
    helpUrl: '/help#blockly-misc',
    extensions: ['requires_async_js_function']
  },
  generators: {
    JavaScript: block => {
      const linear = block.getFieldValue('Linear') === 'TRUE'; // <default GSL customizable: crcl_move_vector_rotation-body-JavaScript>

      const vector = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.valueToCode(block, 'Vector', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_ATOMIC);
      const rotation = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.valueToCode(block, 'Rotation', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_ATOMIC); // TODO generate code

      const code = '';
      return code; // </GSL customizable: crcl_move_vector_rotation-body-JavaScript>
    },
    Python: block => {
      const linear = block.getFieldValue('Linear') === 'TRUE'; // <default GSL customizable: crcl_move_vector_rotation-body-Python>

      const vector = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.valueToCode(block, 'Vector', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_ATOMIC);
      const rotation = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.valueToCode(block, 'Rotation', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_ATOMIC); // TODO generate code

      const code = '';
      return code; // </GSL customizable: crcl_move_vector_rotation-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "crcl_move_vector_rotation",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 704,
        columnNumber: 7
      }
    }) // <default GSL customizable: crcl_move_vector_rotation-extra-toolbox />

  }
};
const CRCL_MOVE_DIRECTION = {
  blockJson: {
    type: 'crcl_move_direction',
    message0: '%{BKY_CRCL_MOVE_DIRECTION}',
    args0: [{
      "type": "field_number",
      "name": "Distance"
    }, {
      "type": "field_dropdown",
      "name": "Direction",
      "options": [["forward", "forward"], ["backward", "backward"], ["left", "left"], ["right", "right"], ["up", "up"], ["down", "down"]]
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 280,
    tooltip: '%{BKY_CRCL_MOVE_DIRECTION_TOOLTIP}',
    helpUrl: '/help#blockly-misc'
  },
  generators: {
    JavaScript: block => {
      const distance = block.getFieldValue('Distance');
      const direction = block.getFieldValue('Direction'); // <default GSL customizable: crcl_move_direction-body-JavaScript>
      // TODO generate code

      const code = '';
      return code; // </GSL customizable: crcl_move_direction-body-JavaScript>
    },
    Python: block => {
      const distance = block.getFieldValue('Distance');
      const direction = block.getFieldValue('Direction'); // <default GSL customizable: crcl_move_direction-body-Python>
      // TODO generate code

      const code = '';
      return code; // </GSL customizable: crcl_move_direction-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "crcl_move_direction",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 782,
        columnNumber: 7
      }
    }) // <default GSL customizable: crcl_move_direction-extra-toolbox />

  }
};
const CRCL_ROTATE_Z = {
  blockJson: {
    type: 'crcl_rotate_z',
    message0: '%{BKY_CRCL_ROTATE_Z}',
    args0: [{
      "type": "field_dropdown",
      "name": "RotationDirection",
      "options": [["clockwise", "clockwise"], ["counterclockwise", "counterclockwise"]]
    }, {
      "type": "field_number",
      "name": "RotationZ",
      "value": 90,
      "min": 0,
      "max": 360
    }],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: 280,
    tooltip: '%{BKY_CRCL_ROTATE_Z_TOOLTIP}',
    helpUrl: '/help#blockly-misc'
  },
  generators: {
    JavaScript: block => {
      const rotationdirection = block.getFieldValue('RotationDirection');
      const rotationz = block.getFieldValue('RotationZ'); // <default GSL customizable: crcl_rotate_z-body-JavaScript>
      // TODO generate code

      const code = '';
      return code; // </GSL customizable: crcl_rotate_z-body-JavaScript>
    },
    Python: block => {
      const rotationdirection = block.getFieldValue('RotationDirection');
      const rotationz = block.getFieldValue('RotationZ'); // <default GSL customizable: crcl_rotate_z-body-Python>
      // TODO generate code

      const code = '';
      return code; // </GSL customizable: crcl_rotate_z-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "crcl_rotate_z",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 847,
        columnNumber: 7
      }
    }) // <default GSL customizable: crcl_rotate_z-extra-toolbox />

  }
};
const VECTOR_OPERATION = {
  blockJson: {
    type: 'vector_operation',
    message0: '%{BKY_VECTOR_OPERATION}',
    args0: [{
      "type": "input_value",
      "name": "Vector1",
      "check": "Vector"
    }, {
      "type": "field_dropdown",
      "name": "mathOperation",
      "options": [["+", "Plus"], ["-", "Minus"], ["/", "Division"], ["*", "Multiplicataion"], ["distance between", "Distance Between"], ["normalize", "Normalize"], ["multiplicate componentvise", "multiplicate componentvise"]]
    }, {
      "type": "input_value",
      "name": "Vector2",
      "check": "Vector"
    }],
    output: 'Vector',
    colour: 280,
    tooltip: '%{BKY_VECTOR_OPERATION_TOOLTIP}',
    helpUrl: '/help#blockly-misc'
  },
  generators: {
    JavaScript: block => {
      const mathoperation = block.getFieldValue('mathOperation'); // <default GSL customizable: vector_operation-body-JavaScript>

      const vector1 = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.valueToCode(block, 'Vector1', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_ATOMIC);
      const vector2 = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.valueToCode(block, 'Vector2', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_ATOMIC); // TODO generate code

      const code = '';
      return [code, blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.JavaScript.ORDER_NONE]; // </GSL customizable: vector_operation-body-JavaScript>
    },
    Python: block => {
      const mathoperation = block.getFieldValue('mathOperation'); // <default GSL customizable: vector_operation-body-Python>

      const vector1 = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.valueToCode(block, 'Vector1', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_ATOMIC);
      const vector2 = blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.valueToCode(block, 'Vector2', blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_ATOMIC); // TODO generate code

      const code = '';
      return [code, blockly_core__WEBPACK_IMPORTED_MODULE_1___default.a.Python.ORDER_NONE]; // </GSL customizable: vector_operation-body-Python>
    }
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "vector_operation",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 935,
        columnNumber: 7
      }
    }) // <default GSL customizable: vector_operation-extra-toolbox />

  }
};
const blocks = [CRCL_SET_TCP, CRCL_SET_TOOL_VALUE, CRCL_SWITCH_TOOL, CRCL_WAIT, CRCL_TOOL_ON_OFF, CRCL_VELOCITY, CRCL_ACCELERATION, PRINT_BLOCK, GET_INPUT_BLOCK, ROTATION_ABC, VECTOR_XYZ, VECTOR_SKALAR, CRCL_MOVE_VECTOR_ROTATION, CRCL_MOVE_DIRECTION, CRCL_ROTATE_Z, VECTOR_OPERATION];
blocks.forEach(___WEBPACK_IMPORTED_MODULE_2__["registerBlocklyBlock"]);
/* harmony default export */ __webpack_exports__["default"] = (blocks);

/***/ }),

/***/ "./src/components/ide/VisualEditor/blocks/misc_msg_de.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
const Msg = {};
/* harmony default export */ __webpack_exports__["default"] = (Msg);
Msg['CAT_CUSTOM'] = 'Spezialblöcke';
Msg['CAT_LOGIC'] = 'Logik';
Msg['CAT_LOOPS'] = 'Schleifen';
Msg['CAT_MATH'] = 'Mathe';
Msg['CAT_LISTS'] = 'Listen';
Msg['CAT_VARIABLES'] = 'Variablen';
Msg['CAT_FUNCTIONS'] = 'Funktionen';
Msg['CAT_TEXT'] = 'Text';
Msg['PRINT_BLOCK'] = 'Gib Text %1 aus';
Msg['PRINT_BLOCK_TOOLTIP'] = 'Gibt einen Text oder Wert auf dem Bildschirm aus';
Msg['GET_INPUT_BLOCK'] = 'Texteingabe';
Msg['GET_INPUT_BLOCK_TOOLTIP'] = 'Wartet auf eine Texteingabe auf der Konsole und gibt diese zurück';
Msg['VECTOR_XYZ'] = 'Vektor (x: %1, y: %2, z: %3)';
Msg['VECTOR_XYZ_TOOLTIP'] = 'Ein 3D-Vektor';
Msg['ROTATION_ABC'] = 'Rotation(a: %1, b: %2, c: %3)';
Msg['ROTATION_ABC_TOOLTIP'] = 'Ein Rotations Datentyp';
Msg['VECTOR_OPERATION'] = 'Vektor  %1, %2, z: %3)';
Msg['VECTOR_OPERATION_TOOLTIP'] = 'Ein 3D-Vektor';
Msg['VECTOR_SKALAR'] = 'Multipliziere Vektor %1 mit Skalar %2';
Msg['VECTOR_SKALAR_TOOLTIP'] = 'Multpliziere einen Vektor mit einer Zahl';
Msg['CRCL_MOVE_VECTOR_ROTATION'] = 'Fahre zu Vektor %1 Rotation %2 linear %3';
Msg['CRCL_MOVE_VECTOR_ROTATION_TOOLTIP'] = 'tooltip';
Msg['CRCL_MOVE_DIRECTION'] = 'Fahre %1 mm %2';
Msg['CRCL_MOVE_DIRECTION_TOOLTIP'] = 'Fahre in richtung';
Msg['CRCL_ROTATE_Z'] = 'Drehe %1 um  %2 °';
Msg['CRCL_ROTATE_Z_TOOLTIP'] = 'Rotate clockwise/counterclockwise by 180° // Z-axis.';
Msg['CRCL_VELOCITY'] = 'Setzte Geschwindigkeit zu  %1 mm/s.';
Msg['CRCL_VELOCITY_TOOLTIP'] = 'Set velocity of the robot';
Msg['CRCL_TOOL_ON_OFF'] = 'Drehe das Tool  %1';
Msg['CRCL_TOOL_ON_OFF_TOOLTIP'] = 'Turn the tool on or off';
Msg['CRCL_SET_TOOL_VALUE'] = 'Setze den Tool wert %1 ';
Msg['CRCL_SET_TOOL_VALUE_TOOLTIP'] = 'Set tool value to %1 ';
Msg['CRCL_SWITCH_TOOL'] = 'Wechsle zu Tool %1';
Msg['CRCL_SWITCH_TOOL_TOOLTIP'] = 'Switch to tool %1';
Msg['CRCL_WAIT'] = 'Warte für  %1 ms.';
Msg['CRCL_WAIT_TOOLTIP'] = 'Wait for %1 ms.';
Msg['CRCL_SET_TCP'] = 'Set Tool Center Point zu %1 %2';
Msg['CRCL_SET_TCP_TOOLTIP'] = 'Set Tool Center Point';
Msg['CRCL_ACCELERATION'] = 'Set Beschleunigung zu %1 mm/s².';
Msg['CRCL_ACCELERATION_TOOLTIP'] = 'Set acceleration of the robot';
Msg['CRCL_SET_IP'] = 'Set Robot Ip to   %1 . %2 . %3 ';
Msg['CRCL_SET_IP_TOOLTIP'] = 'Set Ip of the Robot';

/***/ }),

/***/ "./src/components/ide/VisualEditor/blocks/misc_msg_en.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
const Msg = {};
/* harmony default export */ __webpack_exports__["default"] = (Msg);
Msg['CAT_CUSTOM'] = 'Custom';
Msg['CAT_LOGIC'] = 'Logic';
Msg['CAT_LOOPS'] = 'Loops';
Msg['CAT_MATH'] = 'Math';
Msg['CAT_LISTS'] = 'Lists';
Msg['CAT_VARIABLES'] = 'Variables';
Msg['CAT_FUNCTIONS'] = 'Functions';
Msg['CAT_TEXT'] = 'Text';
Msg['PRINT_BLOCK'] = 'print text %1';
Msg['PRINT_BLOCK_TOOLTIP'] = 'Prints a text or value to the screen';
Msg['GET_INPUT_BLOCK'] = 'text input';
Msg['GET_INPUT_BLOCK_TOOLTIP'] = 'Waits for text input on the console and returns it';
Msg['VECTOR_XYZ'] = 'Vector (x: %1, y: %2, z: %3)';
Msg['VECTOR_XYZ_TOOLTIP'] = 'A 3D-Vector';
Msg['VECTOR_OPERATION'] = 'Vector  x: %1, y: %2, z: %3)';
Msg['VECTOR_OPERATION_TOOLTIP'] = 'A 3D-Vector';
Msg['ROTATION_ABC'] = 'Rotation (a: %1, b: %2, c: %3)';
Msg['ROTATION_ABC_TOOLTIP'] = 'A Rotation Datatype';
Msg['VECTOR_SKALAR'] = 'Multiplicate  vektor %1 with skalar %2';
Msg['VECTOR_SKALAR_TOOLTIP'] = 'Multiplicate vector with number';
Msg['CRCL_MOVE_VECTOR_ROTATION'] = 'Move to  %1  %2 linear %3';
Msg['CRCL_MOVE_VECTOR_ROTATION_TOOLTIP'] = 'tooltip';
Msg['CRCL_MOVE_DIRECTION'] = 'Move %1 mm %2';
Msg['CRCL_MOVE_DIRECTION_TOOLTIP'] = 'Move in direction';
Msg['CRCL_ROTATE_Z'] = 'Rotate %1 by %2 °';
Msg['CRCL_ROTATE_Z_TOOLTIP'] = 'Rotate clockwise/counterclockwise by 180° // Z-axis.';
Msg['CRCL_VELOCITY'] = 'Set velocity to %1 mm/s.';
Msg['CRCL_VELOCITY_TOOLTIP'] = 'Set velocity of the robot';
Msg['CRCL_ACCELERATION'] = 'Set acceleration to %1 mm/s².';
Msg['CRCL_ACCELERATION_TOOLTIP'] = 'Set acceleration of the robot';
Msg['CRCL_TOOL_ON_OFF'] = 'Turn tool %1';
Msg['CRCL_TOOL_ON_OFF_TOOLTIP'] = 'Turn the tool on or off';
Msg['CRCL_SET_TOOL_VALUE'] = 'Set tool value to %1 ';
Msg['CRCL_SET_TOOL_VALUE_TOOLTIP'] = 'Set tool value to %1 ';
Msg['CRCL_SWITCH_TOOL'] = 'Switch to tool %1';
Msg['CRCL_SWITCH_TOOL_TOOLTIP'] = 'Switch to tool %1';
Msg['CRCL_WAIT'] = 'Wait for %1 ms.';
Msg['CRCL_WAIT_TOOLTIP'] = 'Wait for %1 ms.';
Msg['CRCL_SET_TCP'] = 'Set Tool Center Point to %1 %2';
Msg['CRCL_SET_TCP_TOOLTIP'] = 'Set Tool Center Point';
Msg['CRCL_SET_IP'] = 'Set Robot Ip to   %1 . %2 . %3 ';
Msg['CRCL_SET_IP_TOOLTIP'] = 'Set Ip of the Robot';

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzLzAuanMiLCJzb3VyY2VzIjpbIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvbXBvbmVudHMvaWRlL1Zpc3VhbEVkaXRvci9ibG9ja2x5X2NvbmZpZy5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvbXBvbmVudHMvaWRlL1Zpc3VhbEVkaXRvci9ibG9ja3MvYXN5bmNfcHJvY2VkdXJlc19qcy5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvbXBvbmVudHMvaWRlL1Zpc3VhbEVkaXRvci9ibG9ja3MvaGVkZ2Vob2cuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb21wb25lbnRzL2lkZS9WaXN1YWxFZGl0b3IvYmxvY2tzL2hlZGdlaG9nX21zZ19kZS5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvbXBvbmVudHMvaWRlL1Zpc3VhbEVkaXRvci9ibG9ja3MvaGVkZ2Vob2dfbXNnX2VuLmpzIiwiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29tcG9uZW50cy9pZGUvVmlzdWFsRWRpdG9yL2Jsb2Nrcy9pbmRleC5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvbXBvbmVudHMvaWRlL1Zpc3VhbEVkaXRvci9ibG9ja3MvbWlzYy5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvbXBvbmVudHMvaWRlL1Zpc3VhbEVkaXRvci9ibG9ja3MvbWlzY19tc2dfZGUuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb21wb25lbnRzL2lkZS9WaXN1YWxFZGl0b3IvYmxvY2tzL21pc2NfbXNnX2VuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBCbG9ja2x5IGZyb20gJ2Jsb2NrbHkvY29yZSc7XG5pbXBvcnQgJ2Jsb2NrbHkvYmxvY2tzJztcbmltcG9ydCAnYmxvY2tseS9qYXZhc2NyaXB0JztcbmltcG9ydCAnYmxvY2tseS9weXRob24nO1xuaW1wb3J0IERlIGZyb20gJ2Jsb2NrbHkvbXNnL2RlJztcbmltcG9ydCBFbiBmcm9tICdibG9ja2x5L21zZy9lbic7XG5cbmltcG9ydCB7IHR5cGUgTG9jYWxlTWFwIH0gZnJvbSAnLi4vLi4vLi4vdHJhbnNsYXRpb25zJztcblxuaW1wb3J0IHsgdHlwZSBMb2NhbGUgYXMgQmxvY2tseUxvY2FsZSB9IGZyb20gJy4uL0Jsb2NrbHknO1xuXG5pbXBvcnQgJy4vYmxvY2tzL2FzeW5jX3Byb2NlZHVyZXNfanMnO1xuaW1wb3J0ICogYXMgaGVkZ2Vob2dCbG9ja3MgZnJvbSAnLi9ibG9ja3MvaGVkZ2Vob2cnO1xuaW1wb3J0ICogYXMgbWlzY0Jsb2NrcyBmcm9tICcuL2Jsb2Nrcy9taXNjJztcbmltcG9ydCBEZUhlZGdlaG9nIGZyb20gJy4vYmxvY2tzL2hlZGdlaG9nX21zZ19kZSc7XG5pbXBvcnQgRW5IZWRnZWhvZyBmcm9tICcuL2Jsb2Nrcy9oZWRnZWhvZ19tc2dfZW4nO1xuaW1wb3J0IERlTWlzYyBmcm9tICcuL2Jsb2Nrcy9taXNjX21zZ19kZSc7XG5pbXBvcnQgRW5NaXNjIGZyb20gJy4vYmxvY2tzL21pc2NfbXNnX2VuJztcblxuY29uc3QgTE9DQUxFUzogTG9jYWxlTWFwPEJsb2NrbHlMb2NhbGU+ID0ge1xuICBkZToge1xuICAgIHJ0bDogZmFsc2UsXG4gICAgbXNnOiB7IC4uLkRlLCAuLi5EZUhlZGdlaG9nLCAuLi5EZU1pc2MgfSxcbiAgfSxcbiAgZW46IHtcbiAgICBydGw6IGZhbHNlLFxuICAgIG1zZzogeyAuLi5FbiwgLi4uRW5IZWRnZWhvZywgLi4uRW5NaXNjIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9ja2x5O1xuXG5leHBvcnQgeyBoZWRnZWhvZ0Jsb2NrcywgbWlzY0Jsb2NrcywgTE9DQUxFUyB9O1xuIiwiLy8gQGZsb3dcblxuaW1wb3J0IEJsb2NrbHkgZnJvbSAnYmxvY2tseSc7XG5cbkJsb2NrbHkuRXh0ZW5zaW9ucy5yZWdpc3Rlck1peGluKCdyZXF1aXJlc19hc3luY19qc19mdW5jdGlvbicsIHtcbiAgcmVxdWlyZXNBc3luY0pzRnVuY3Rpb246IHRydWUsXG59KTtcblxuLy8gVE9ETyBwcmV2ZW50IGluZmluaXRlIHJlY3Vyc2lvbiBmb3IgcmVjdXJzaXZlIGZ1bmN0aW9uc1xuXG5mdW5jdGlvbiByZXF1aXJlc0FzeW5jSnNGdW5jdGlvbihibG9jazogQmxvY2tseS5CbG9jayk6IGJvb2xlYW4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgcmV0dXJuIGlzQXN5bmNQcm9jZWR1cmVDYWxsKGJsb2NrKSB8fCBibG9jay5yZXF1aXJlc0FzeW5jSnNGdW5jdGlvbjtcbn1cblxuZnVuY3Rpb24gaXNBc3luY1Byb2NlZHVyZUNhbGwoYmxvY2s6IEJsb2NrbHkuQmxvY2spOiBib29sZWFuIHtcbiAgaWYgKGJsb2NrLnR5cGUgIT09ICdwcm9jZWR1cmVzX2NhbGxub3JldHVybicgJiYgYmxvY2sudHlwZSAhPT0gJ3Byb2NlZHVyZXNfY2FsbHJldHVybicpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGNvbnN0IGRlZkJsb2NrID0gQmxvY2tseS5Qcm9jZWR1cmVzLmdldERlZmluaXRpb24oYmxvY2suZ2V0UHJvY2VkdXJlQ2FsbCgpLCBibG9jay53b3Jrc3BhY2UpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgcmV0dXJuIGlzQXN5bmNQcm9jZWR1cmUoZGVmQmxvY2spO1xufVxuXG5mdW5jdGlvbiBpc0FzeW5jUHJvY2VkdXJlKGJsb2NrOiBCbG9ja2x5LkJsb2NrKTogYm9vbGVhbiB7XG4gIGlmIChibG9jay50eXBlICE9PSAncHJvY2VkdXJlc19kZWZub3JldHVybicgJiYgYmxvY2sudHlwZSAhPT0gJ3Byb2NlZHVyZXNfZGVmcmV0dXJuJylcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gYSBwcm9jZWR1cmUgaXMgYXN5bmMgaWYgYW55IGRlc2NlbmRhbnQgaXMgYXN5bmMsXG4gIC8vIGkuZS4gaWYgbm90IGV2ZXJ5IGRlc2NlbmRhbnQgaXMgbm90IGFzeW5jXG4gIHJldHVybiAhYmxvY2suZ2V0RGVzY2VuZGFudHMoKS5ldmVyeSgoY2hpbGQpID0+ICFyZXF1aXJlc0FzeW5jSnNGdW5jdGlvbihjaGlsZCkpO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5jb25zdCBvcmlnaW5hbF9wcm9jZWR1cmVzX2NhbGxyZXR1cm5fZ2VuZXJhdG9yID0gQmxvY2tseS5KYXZhU2NyaXB0LnByb2NlZHVyZXNfY2FsbHJldHVybjtcbkJsb2NrbHkuSmF2YVNjcmlwdC5wcm9jZWR1cmVzX2NhbGxyZXR1cm4gPSAoYmxvY2spID0+IHtcbiAgbGV0IGNvZGUgPSBvcmlnaW5hbF9wcm9jZWR1cmVzX2NhbGxyZXR1cm5fZ2VuZXJhdG9yKGJsb2NrKVswXTtcbiAgaWYgKGlzQXN5bmNQcm9jZWR1cmVDYWxsKGJsb2NrKSkgY29kZSA9IGBhd2FpdCAke2NvZGV9YDtcbiAgcmV0dXJuIFtjb2RlLCBCbG9ja2x5LkphdmFTY3JpcHQuT1JERVJfQVdBSVRdO1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZSwgbm8tdW5kZXJzY29yZS1kYW5nbGVcbmNvbnN0IG9yaWdpbmFsX3NjcnViXyA9IEJsb2NrbHkuSmF2YVNjcmlwdC5zY3J1Yl87XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlLCBuby11bmRlcnNjb3JlLWRhbmdsZVxuQmxvY2tseS5KYXZhU2NyaXB0LnNjcnViXyA9IChibG9jaywgY29kZSwgb3B0X3RoaXNPbmx5KSA9PiB7XG4gIGNvbnN0IG5ld0NvZGUgPSBpc0FzeW5jUHJvY2VkdXJlKGJsb2NrKSA/IGBhc3luYyAke2NvZGV9YCA6IGNvZGU7XG4gIHJldHVybiBvcmlnaW5hbF9zY3J1Yl8oYmxvY2ssIG5ld0NvZGUsIG9wdF90aGlzT25seSk7XG59O1xuIiwiLy8gQGZsb3dcbi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCbG9ja2x5IGZyb20gJ2Jsb2NrbHkvY29yZSc7XG5cbmltcG9ydCB7IHR5cGUgQmxvY2ssIHJlZ2lzdGVyQmxvY2tseUJsb2NrIH0gZnJvbSAnLic7XG5cbmV4cG9ydCBjb25zdCBIRURHRUhPR19NT1ZFOiBCbG9jayA9IHtcbiAgYmxvY2tKc29uOiB7XG4gICAgdHlwZTogJ2hlZGdlaG9nX21vdmUnLFxuICAgIG1lc3NhZ2UwOiAnJXtCS1lfSEVER0VIT0dfTU9WRX0nLFxuICAgIGFyZ3MwOiBbXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImZpZWxkX251bWJlclwiLFxuICAgICAgICBcIm5hbWVcIjogXCJQT1JUXCIsXG4gICAgICAgIFwidmFsdWVcIjogMCxcbiAgICAgICAgXCJtaW5cIjogMCxcbiAgICAgICAgXCJtYXhcIjogMyxcbiAgICAgICAgXCJwcmVjaXNpb25cIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRfdmFsdWVcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiU1BFRURcIixcbiAgICAgICAgXCJjaGVja1wiOiBcIk51bWJlclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJpbnB1dF92YWx1ZVwiLFxuICAgICAgICBcIm5hbWVcIjogXCJUSU1FXCIsXG4gICAgICAgIFwiY2hlY2tcIjogXCJOdW1iZXJcIlxuICAgICAgfVxuICAgIF0sXG4gICAgaW5wdXRzSW5saW5lOiB0cnVlLFxuICAgIHByZXZpb3VzU3RhdGVtZW50OiBudWxsLFxuICAgIG5leHRTdGF0ZW1lbnQ6IG51bGwsXG4gICAgY29sb3VyOiAxMjAsXG4gICAgdG9vbHRpcDogJyV7QktZX0hFREdFSE9HX01PVkVfVE9PTFRJUH0nLFxuICAgIGhlbHBVcmw6ICcvaGVscCNibG9ja2x5LW1vdG9ycycsXG4gICAgZXh0ZW5zaW9uczogWydyZXF1aXJlc19hc3luY19qc19mdW5jdGlvbiddLFxuICB9LFxuICBnZW5lcmF0b3JzOiB7XG4gICAgSmF2YVNjcmlwdDogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgcG9ydCA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ1BPUlQnKTtcbiAgICAgIC8vIDxHU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19tb3ZlLWJvZHktSmF2YVNjcmlwdD5cbiAgICAgIGNvbnN0IHNwZWVkID0gQmxvY2tseS5KYXZhU2NyaXB0LnZhbHVlVG9Db2RlKGJsb2NrLCAnU1BFRUQnLCBCbG9ja2x5LkphdmFTY3JpcHQuT1JERVJfTk9ORSk7XG4gICAgICBjb25zdCB0aW1lID0gQmxvY2tseS5KYXZhU2NyaXB0LnZhbHVlVG9Db2RlKGJsb2NrLCAnVElNRScsIEJsb2NrbHkuSmF2YVNjcmlwdC5PUkRFUl9OT05FKTtcbiAgICAgIGxldCBjb2RlID0gJyc7XG4gICAgICBjb2RlICs9IGBhd2FpdCBoZWRnZWhvZy5tb3ZlTW90b3IoJHtwb3J0fSwgJHtzcGVlZH0pO1xcbmA7XG4gICAgICBjb2RlICs9IGBhd2FpdCBzbGVlcCgke3RpbWV9ICogMTAwMCk7XFxuYDtcbiAgICAgIGNvZGUgKz0gYGF3YWl0IGhlZGdlaG9nLm1vdmVNb3Rvcigke3BvcnR9LCAwKTtcXG5gO1xuICAgICAgcmV0dXJuIGNvZGU7XG4gICAgICAvLyA8L0dTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX21vdmUtYm9keS1KYXZhU2NyaXB0PlxuICAgIH0sXG4gICAgUHl0aG9uOiBibG9jayA9PiB7XG4gICAgICBjb25zdCBwb3J0ID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgnUE9SVCcpO1xuICAgICAgLy8gPEdTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX21vdmUtYm9keS1QeXRob24+XG4gICAgICBjb25zdCBzcGVlZCA9IEJsb2NrbHkuUHl0aG9uLnZhbHVlVG9Db2RlKGJsb2NrLCAnU1BFRUQnLCBCbG9ja2x5LlB5dGhvbi5PUkRFUl9OT05FKTtcbiAgICAgIGNvbnN0IHRpbWUgPSBCbG9ja2x5LlB5dGhvbi52YWx1ZVRvQ29kZShibG9jaywgJ1RJTUUnLCBCbG9ja2x5LlB5dGhvbi5PUkRFUl9OT05FKTtcbiAgICAgIC8vIFRPRE8gaW1wb3J0IHNsZWVwXG4gICAgICBsZXQgY29kZSA9ICcnO1xuICAgICAgY29kZSArPSBgaGVkZ2Vob2cubW92ZV9tb3Rvcigke3BvcnR9LCAke3NwZWVkfSlcXG5gO1xuICAgICAgY29kZSArPSBgc2xlZXAoJHt0aW1lfSlcXG5gO1xuICAgICAgY29kZSArPSBgaGVkZ2Vob2cuYnJha2UoJHtwb3J0fSlcXG5gO1xuICAgICAgICByZXR1cm4gY29kZTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfbW92ZS1ib2R5LVB5dGhvbj5cbiAgICB9LFxuICB9LFxuICB0b29sYm94QmxvY2tzOiB7XG4gICAgZGVmYXVsdDogKCkgPT4gKFxuICAgICAgPGJsb2NrIHR5cGU9XCJoZWRnZWhvZ19tb3ZlXCI+XG4gICAgICAgIHsvKiA8R1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfbW92ZS1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgICA8dmFsdWUgbmFtZT1cIlNQRUVEXCI+XG4gICAgICAgICAgPHNoYWRvdyB0eXBlPVwibWF0aF9udW1iZXJcIj5cbiAgICAgICAgICAgIDxmaWVsZCBuYW1lPVwiTlVNXCI+MTAwMDwvZmllbGQ+XG4gICAgICAgICAgPC9zaGFkb3c+XG4gICAgICAgIDwvdmFsdWU+XG4gICAgICAgIDx2YWx1ZSBuYW1lPVwiVElNRVwiPlxuICAgICAgICAgIDxzaGFkb3cgdHlwZT1cIm1hdGhfbnVtYmVyXCI+XG4gICAgICAgICAgICA8ZmllbGQgbmFtZT1cIk5VTVwiPjE8L2ZpZWxkPlxuICAgICAgICAgIDwvc2hhZG93PlxuICAgICAgICA8L3ZhbHVlPlxuICAgICAgICB7LyogPC9HU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19tb3ZlLWRlZmF1bHQtdG9vbGJveD4gKi99XG4gICAgICA8L2Jsb2NrPlxuICAgICksXG4gICAgLy8gPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfbW92ZS1leHRyYS10b29sYm94IC8+XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgSEVER0VIT0dfTU9WRV9VTkxJTUlURUQ6IEJsb2NrID0ge1xuICBibG9ja0pzb246IHtcbiAgICB0eXBlOiAnaGVkZ2Vob2dfbW92ZV91bmxpbWl0ZWQnLFxuICAgIG1lc3NhZ2UwOiAnJXtCS1lfSEVER0VIT0dfTU9WRV9VTkxJTUlURUR9JyxcbiAgICBhcmdzMDogW1xuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJmaWVsZF9udW1iZXJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiUE9SVFwiLFxuICAgICAgICBcInZhbHVlXCI6IDAsXG4gICAgICAgIFwibWluXCI6IDAsXG4gICAgICAgIFwibWF4XCI6IDMsXG4gICAgICAgIFwicHJlY2lzaW9uXCI6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImlucHV0X3ZhbHVlXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIlNQRUVEXCIsXG4gICAgICAgIFwiY2hlY2tcIjogXCJOdW1iZXJcIlxuICAgICAgfVxuICAgIF0sXG4gICAgaW5wdXRzSW5saW5lOiB0cnVlLFxuICAgIHByZXZpb3VzU3RhdGVtZW50OiBudWxsLFxuICAgIG5leHRTdGF0ZW1lbnQ6IG51bGwsXG4gICAgY29sb3VyOiAxMjAsXG4gICAgdG9vbHRpcDogJyV7QktZX0hFREdFSE9HX01PVkVfVU5MSU1JVEVEX1RPT0xUSVB9JyxcbiAgICBoZWxwVXJsOiAnL2hlbHAjYmxvY2tseS1tb3RvcnMnLFxuICAgIGV4dGVuc2lvbnM6IFsncmVxdWlyZXNfYXN5bmNfanNfZnVuY3Rpb24nXSxcbiAgfSxcbiAgZ2VuZXJhdG9yczoge1xuICAgIEphdmFTY3JpcHQ6IGJsb2NrID0+IHtcbiAgICAgIGNvbnN0IHBvcnQgPSBibG9jay5nZXRGaWVsZFZhbHVlKCdQT1JUJyk7XG4gICAgICAvLyA8R1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfbW92ZV91bmxpbWl0ZWQtYm9keS1KYXZhU2NyaXB0PlxuICAgICAgY29uc3Qgc3BlZWQgPSBCbG9ja2x5LkphdmFTY3JpcHQudmFsdWVUb0NvZGUoYmxvY2ssICdTUEVFRCcsIEJsb2NrbHkuSmF2YVNjcmlwdC5PUkRFUl9OT05FKTtcbiAgICAgIGNvbnN0IGNvZGUgPSBgYXdhaXQgaGVkZ2Vob2cubW92ZU1vdG9yKCR7cG9ydH0sICR7c3BlZWR9KTtcXG5gO1xuICAgICAgcmV0dXJuIGNvZGU7XG4gICAgICAvLyA8L0dTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX21vdmVfdW5saW1pdGVkLWJvZHktSmF2YVNjcmlwdD5cbiAgICB9LFxuICAgIFB5dGhvbjogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgcG9ydCA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ1BPUlQnKTtcbiAgICAgIC8vIDxHU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19tb3ZlX3VubGltaXRlZC1ib2R5LVB5dGhvbj5cbiAgICAgIGNvbnN0IHNwZWVkID0gQmxvY2tseS5QeXRob24udmFsdWVUb0NvZGUoYmxvY2ssICdTUEVFRCcsIEJsb2NrbHkuUHl0aG9uLk9SREVSX05PTkUpO1xuICAgICAgY29uc3QgY29kZSA9IGBoZWRnZWhvZy5tb3ZlX21vdG9yKCR7cG9ydH0sICR7c3BlZWR9KVxcbmA7XG4gICAgICByZXR1cm4gY29kZTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfbW92ZV91bmxpbWl0ZWQtYm9keS1QeXRob24+XG4gICAgfSxcbiAgfSxcbiAgdG9vbGJveEJsb2Nrczoge1xuICAgIGRlZmF1bHQ6ICgpID0+IChcbiAgICAgIDxibG9jayB0eXBlPVwiaGVkZ2Vob2dfbW92ZV91bmxpbWl0ZWRcIj5cbiAgICAgICAgey8qIDxHU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19tb3ZlX3VubGltaXRlZC1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgICA8dmFsdWUgbmFtZT1cIlNQRUVEXCI+XG4gICAgICAgICAgPHNoYWRvdyB0eXBlPVwibWF0aF9udW1iZXJcIj5cbiAgICAgICAgICAgIDxmaWVsZCBuYW1lPVwiTlVNXCI+MTAwMDwvZmllbGQ+XG4gICAgICAgICAgPC9zaGFkb3c+XG4gICAgICAgIDwvdmFsdWU+XG4gICAgICAgIHsvKiA8L0dTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX21vdmVfdW5saW1pdGVkLWRlZmF1bHQtdG9vbGJveD4gKi99XG4gICAgICA8L2Jsb2NrPlxuICAgICksXG4gICAgLy8gPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfbW92ZV91bmxpbWl0ZWQtZXh0cmEtdG9vbGJveCAvPlxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEhFREdFSE9HX01PVE9SX09GRjogQmxvY2sgPSB7XG4gIGJsb2NrSnNvbjoge1xuICAgIHR5cGU6ICdoZWRnZWhvZ19tb3Rvcl9vZmYnLFxuICAgIG1lc3NhZ2UwOiAnJXtCS1lfSEVER0VIT0dfTU9UT1JfT0ZGfScsXG4gICAgYXJnczA6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiZmllbGRfbnVtYmVyXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIlBPUlRcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiAwLFxuICAgICAgICBcIm1pblwiOiAwLFxuICAgICAgICBcIm1heFwiOiAzLFxuICAgICAgICBcInByZWNpc2lvblwiOiAxXG4gICAgICB9XG4gICAgXSxcbiAgICBpbnB1dHNJbmxpbmU6IHRydWUsXG4gICAgcHJldmlvdXNTdGF0ZW1lbnQ6IG51bGwsXG4gICAgbmV4dFN0YXRlbWVudDogbnVsbCxcbiAgICBjb2xvdXI6IDEyMCxcbiAgICB0b29sdGlwOiAnJXtCS1lfSEVER0VIT0dfTU9UT1JfT0ZGX1RPT0xUSVB9JyxcbiAgICBoZWxwVXJsOiAnL2hlbHAjYmxvY2tseS1tb3RvcnMnLFxuICAgIGV4dGVuc2lvbnM6IFsncmVxdWlyZXNfYXN5bmNfanNfZnVuY3Rpb24nXSxcbiAgfSxcbiAgZ2VuZXJhdG9yczoge1xuICAgIEphdmFTY3JpcHQ6IGJsb2NrID0+IHtcbiAgICAgIGNvbnN0IHBvcnQgPSBibG9jay5nZXRGaWVsZFZhbHVlKCdQT1JUJyk7XG4gICAgICAvLyA8R1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfbW90b3Jfb2ZmLWJvZHktSmF2YVNjcmlwdD5cbiAgICAgIGNvbnN0IGNvZGUgPSBgYXdhaXQgaGVkZ2Vob2cubW92ZU1vdG9yKCR7cG9ydH0sIDApO1xcbmA7XG4gICAgICByZXR1cm4gY29kZTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfbW90b3Jfb2ZmLWJvZHktSmF2YVNjcmlwdD5cbiAgICB9LFxuICAgIFB5dGhvbjogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgcG9ydCA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ1BPUlQnKTtcbiAgICAgIC8vIDxHU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19tb3Rvcl9vZmYtYm9keS1QeXRob24+XG4gICAgICBjb25zdCBjb2RlID0gYGhlZGdlaG9nLm1vdG9yX29mZigke3BvcnR9KVxcbmA7XG4gICAgICByZXR1cm4gY29kZTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfbW90b3Jfb2ZmLWJvZHktUHl0aG9uPlxuICAgIH0sXG4gIH0sXG4gIHRvb2xib3hCbG9ja3M6IHtcbiAgICBkZWZhdWx0OiAoKSA9PiAoXG4gICAgICA8YmxvY2sgdHlwZT1cImhlZGdlaG9nX21vdG9yX29mZlwiPlxuICAgICAgICB7LyogPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfbW90b3Jfb2ZmLWRlZmF1bHQtdG9vbGJveD4gKi99XG4gICAgICAgIHsvKiA8L0dTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX21vdG9yX29mZi1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgPC9ibG9jaz5cbiAgICApLFxuICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX21vdG9yX29mZi1leHRyYS10b29sYm94IC8+XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgSEVER0VIT0dfQlJBS0U6IEJsb2NrID0ge1xuICBibG9ja0pzb246IHtcbiAgICB0eXBlOiAnaGVkZ2Vob2dfYnJha2UnLFxuICAgIG1lc3NhZ2UwOiAnJXtCS1lfSEVER0VIT0dfQlJBS0V9JyxcbiAgICBhcmdzMDogW1xuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJmaWVsZF9udW1iZXJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiUE9SVFwiLFxuICAgICAgICBcInZhbHVlXCI6IDAsXG4gICAgICAgIFwibWluXCI6IDAsXG4gICAgICAgIFwibWF4XCI6IDMsXG4gICAgICAgIFwicHJlY2lzaW9uXCI6IDFcbiAgICAgIH1cbiAgICBdLFxuICAgIGlucHV0c0lubGluZTogdHJ1ZSxcbiAgICBwcmV2aW91c1N0YXRlbWVudDogbnVsbCxcbiAgICBuZXh0U3RhdGVtZW50OiBudWxsLFxuICAgIGNvbG91cjogMTIwLFxuICAgIHRvb2x0aXA6ICcle0JLWV9IRURHRUhPR19CUkFLRV9UT09MVElQfScsXG4gICAgaGVscFVybDogJy9oZWxwI2Jsb2NrbHktbW90b3JzJyxcbiAgICBleHRlbnNpb25zOiBbJ3JlcXVpcmVzX2FzeW5jX2pzX2Z1bmN0aW9uJ10sXG4gIH0sXG4gIGdlbmVyYXRvcnM6IHtcbiAgICBKYXZhU2NyaXB0OiBibG9jayA9PiB7XG4gICAgICBjb25zdCBwb3J0ID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgnUE9SVCcpO1xuICAgICAgLy8gPEdTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX2JyYWtlLWJvZHktSmF2YVNjcmlwdD5cbiAgICAgIGNvbnN0IGNvZGUgPSBgYXdhaXQgaGVkZ2Vob2cubW92ZU1vdG9yKCR7cG9ydH0sIDApO1xcbmA7XG4gICAgICByZXR1cm4gY29kZTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfYnJha2UtYm9keS1KYXZhU2NyaXB0PlxuICAgIH0sXG4gICAgUHl0aG9uOiBibG9jayA9PiB7XG4gICAgICBjb25zdCBwb3J0ID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgnUE9SVCcpO1xuICAgICAgLy8gPEdTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX2JyYWtlLWJvZHktUHl0aG9uPlxuICAgICAgY29uc3QgY29kZSA9IGBoZWRnZWhvZy5icmFrZSgke3BvcnR9KVxcbmA7XG4gICAgICByZXR1cm4gY29kZTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfYnJha2UtYm9keS1QeXRob24+XG4gICAgfSxcbiAgfSxcbiAgdG9vbGJveEJsb2Nrczoge1xuICAgIGRlZmF1bHQ6ICgpID0+IChcbiAgICAgIDxibG9jayB0eXBlPVwiaGVkZ2Vob2dfYnJha2VcIj5cbiAgICAgICAgey8qIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX2JyYWtlLWRlZmF1bHQtdG9vbGJveD4gKi99XG4gICAgICAgIHsvKiA8L0dTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX2JyYWtlLWRlZmF1bHQtdG9vbGJveD4gKi99XG4gICAgICA8L2Jsb2NrPlxuICAgICksXG4gICAgLy8gPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfYnJha2UtZXh0cmEtdG9vbGJveCAvPlxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEhFREdFSE9HX01PVkUyOiBCbG9jayA9IHtcbiAgYmxvY2tKc29uOiB7XG4gICAgdHlwZTogJ2hlZGdlaG9nX21vdmUyJyxcbiAgICBtZXNzYWdlMDogJyV7QktZX0hFREdFSE9HX01PVkUyfScsXG4gICAgYXJnczA6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiZmllbGRfbnVtYmVyXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIlBPUlQxXCIsXG4gICAgICAgIFwidmFsdWVcIjogMCxcbiAgICAgICAgXCJtaW5cIjogMCxcbiAgICAgICAgXCJtYXhcIjogMyxcbiAgICAgICAgXCJwcmVjaXNpb25cIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiZmllbGRfbnVtYmVyXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIlBPUlQyXCIsXG4gICAgICAgIFwidmFsdWVcIjogMSxcbiAgICAgICAgXCJtaW5cIjogMCxcbiAgICAgICAgXCJtYXhcIjogMyxcbiAgICAgICAgXCJwcmVjaXNpb25cIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRfdmFsdWVcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiU1BFRUQxXCIsXG4gICAgICAgIFwiY2hlY2tcIjogXCJOdW1iZXJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRfdmFsdWVcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiU1BFRUQyXCIsXG4gICAgICAgIFwiY2hlY2tcIjogXCJOdW1iZXJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRfdmFsdWVcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiVElNRVwiLFxuICAgICAgICBcImNoZWNrXCI6IFwiTnVtYmVyXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIGlucHV0c0lubGluZTogdHJ1ZSxcbiAgICBwcmV2aW91c1N0YXRlbWVudDogbnVsbCxcbiAgICBuZXh0U3RhdGVtZW50OiBudWxsLFxuICAgIGNvbG91cjogMTIwLFxuICAgIHRvb2x0aXA6ICcle0JLWV9IRURHRUhPR19NT1ZFMl9UT09MVElQfScsXG4gICAgaGVscFVybDogJy9oZWxwI2Jsb2NrbHktZHJpdmUnLFxuICAgIGV4dGVuc2lvbnM6IFsncmVxdWlyZXNfYXN5bmNfanNfZnVuY3Rpb24nXSxcbiAgfSxcbiAgZ2VuZXJhdG9yczoge1xuICAgIEphdmFTY3JpcHQ6IGJsb2NrID0+IHtcbiAgICAgIGNvbnN0IHBvcnQxID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgnUE9SVDEnKTtcbiAgICAgIGNvbnN0IHBvcnQyID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgnUE9SVDInKTtcbiAgICAgIC8vIDxHU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19tb3ZlMi1ib2R5LUphdmFTY3JpcHQ+XG4gICAgICBjb25zdCBzcGVlZDEgPSBCbG9ja2x5LkphdmFTY3JpcHQudmFsdWVUb0NvZGUoYmxvY2ssICdTUEVFRDEnLCBCbG9ja2x5LkphdmFTY3JpcHQuT1JERVJfTk9ORSk7XG4gICAgICBjb25zdCBzcGVlZDIgPSBCbG9ja2x5LkphdmFTY3JpcHQudmFsdWVUb0NvZGUoYmxvY2ssICdTUEVFRDInLCBCbG9ja2x5LkphdmFTY3JpcHQuT1JERVJfTk9ORSk7XG4gICAgICBjb25zdCB0aW1lID0gQmxvY2tseS5KYXZhU2NyaXB0LnZhbHVlVG9Db2RlKGJsb2NrLCAnVElNRScsIEJsb2NrbHkuSmF2YVNjcmlwdC5PUkRFUl9OT05FKTtcbiAgICAgIGNvbnN0IGluZGVudCA9IEJsb2NrbHkuSmF2YVNjcmlwdC5JTkRFTlQ7XG4gICAgICBsZXQgY29kZSA9ICcnO1xuICAgICAgY29kZSArPSAnYXdhaXQgaGVkZ2Vob2cuY29tbWFuZHMoXFxuJztcbiAgICAgIGNvZGUgKz0gYCR7aW5kZW50fUhlZGdlaG9nLm1vdmVNb3RvckNtZCgke3BvcnQxfSwgJHtzcGVlZDF9KSxcXG5gO1xuICAgICAgY29kZSArPSBgJHtpbmRlbnR9SGVkZ2Vob2cubW92ZU1vdG9yQ21kKCR7cG9ydDJ9LCAke3NwZWVkMn0pLFxcbmA7XG4gICAgICBjb2RlICs9ICcpO1xcbic7XG4gICAgICBjb2RlICs9IGBhd2FpdCBzbGVlcCgke3RpbWV9ICogMTAwMCk7XFxuYDtcbiAgICAgIGNvZGUgKz0gJ2F3YWl0IGhlZGdlaG9nLmNvbW1hbmRzKFxcbic7XG4gICAgICBjb2RlICs9IGAke2luZGVudH1IZWRnZWhvZy5tb3ZlTW90b3JDbWQoJHtwb3J0MX0sIDApLFxcbmA7XG4gICAgICBjb2RlICs9IGAke2luZGVudH1IZWRnZWhvZy5tb3ZlTW90b3JDbWQoJHtwb3J0Mn0sIDApLFxcbmA7XG4gICAgICBjb2RlICs9ICcpO1xcbic7XG4gICAgICByZXR1cm4gY29kZTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfbW92ZTItYm9keS1KYXZhU2NyaXB0PlxuICAgIH0sXG4gICAgUHl0aG9uOiBibG9jayA9PiB7XG4gICAgICBjb25zdCBwb3J0MSA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ1BPUlQxJyk7XG4gICAgICBjb25zdCBwb3J0MiA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ1BPUlQyJyk7XG4gICAgICAvLyA8R1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfbW92ZTItYm9keS1QeXRob24+XG4gICAgICBjb25zdCBzcGVlZDEgPSBCbG9ja2x5LlB5dGhvbi52YWx1ZVRvQ29kZShibG9jaywgJ1NQRUVEMScsIEJsb2NrbHkuUHl0aG9uLk9SREVSX05PTkUpO1xuICAgICAgY29uc3Qgc3BlZWQyID0gQmxvY2tseS5QeXRob24udmFsdWVUb0NvZGUoYmxvY2ssICdTUEVFRDInLCBCbG9ja2x5LlB5dGhvbi5PUkRFUl9OT05FKTtcbiAgICAgIGNvbnN0IHRpbWUgPSBCbG9ja2x5LlB5dGhvbi52YWx1ZVRvQ29kZShibG9jaywgJ1RJTUUnLCBCbG9ja2x5LlB5dGhvbi5PUkRFUl9OT05FKTtcbiAgICAgIGNvbnN0IGluZGVudCA9IEJsb2NrbHkuUHl0aG9uLklOREVOVDtcbiAgICAgIGxldCBjb2RlID0gJyc7XG4gICAgICBjb2RlICs9ICdoZWRnZWhvZy5jb21tYW5kcyhcXG4nO1xuICAgICAgY29kZSArPSBgJHtpbmRlbnR9aGVkZ2Vob2cubW92ZV9tb3Rvcl9jbWQoJHtwb3J0MX0sICR7c3BlZWQxfSksXFxuYDtcbiAgICAgIGNvZGUgKz0gYCR7aW5kZW50fWhlZGdlaG9nLm1vdmVfbW90b3JfY21kKCR7cG9ydDJ9LCAke3NwZWVkMn0pLFxcbmA7XG4gICAgICBjb2RlICs9ICcpXFxuJztcbiAgICAgIGNvZGUgKz0gYHNsZWVwKCR7dGltZX0pXFxuYDtcbiAgICAgIGNvZGUgKz0gJ2hlZGdlaG9nLmNvbW1hbmRzKFxcbic7XG4gICAgICBjb2RlICs9IGAke2luZGVudH1oZWRnZWhvZy5icmFrZV9jbWQoJHtwb3J0MX0pLFxcbmA7XG4gICAgICBjb2RlICs9IGAke2luZGVudH1oZWRnZWhvZy5icmFrZV9jbWQoJHtwb3J0Mn0pLFxcbmA7XG4gICAgICBjb2RlICs9ICcpXFxuJztcbiAgICAgIHJldHVybiBjb2RlO1xuICAgICAgLy8gPC9HU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19tb3ZlMi1ib2R5LVB5dGhvbj5cbiAgICB9LFxuICB9LFxuICB0b29sYm94QmxvY2tzOiB7XG4gICAgZGVmYXVsdDogKCkgPT4gKFxuICAgICAgPGJsb2NrIHR5cGU9XCJoZWRnZWhvZ19tb3ZlMlwiPlxuICAgICAgICB7LyogPEdTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX21vdmUyLWRlZmF1bHQtdG9vbGJveD4gKi99XG4gICAgICAgIDx2YWx1ZSBuYW1lPVwiU1BFRUQxXCI+XG4gICAgICAgICAgPHNoYWRvdyB0eXBlPVwibWF0aF9udW1iZXJcIj5cbiAgICAgICAgICAgIDxmaWVsZCBuYW1lPVwiTlVNXCI+MTAwMDwvZmllbGQ+XG4gICAgICAgICAgPC9zaGFkb3c+XG4gICAgICAgIDwvdmFsdWU+XG4gICAgICAgIDx2YWx1ZSBuYW1lPVwiU1BFRUQyXCI+XG4gICAgICAgICAgPHNoYWRvdyB0eXBlPVwibWF0aF9udW1iZXJcIj5cbiAgICAgICAgICAgIDxmaWVsZCBuYW1lPVwiTlVNXCI+MTAwMDwvZmllbGQ+XG4gICAgICAgICAgPC9zaGFkb3c+XG4gICAgICAgIDwvdmFsdWU+XG4gICAgICAgIDx2YWx1ZSBuYW1lPVwiVElNRVwiPlxuICAgICAgICAgIDxzaGFkb3cgdHlwZT1cIm1hdGhfbnVtYmVyXCI+XG4gICAgICAgICAgICA8ZmllbGQgbmFtZT1cIk5VTVwiPjE8L2ZpZWxkPlxuICAgICAgICAgIDwvc2hhZG93PlxuICAgICAgICA8L3ZhbHVlPlxuICAgICAgICB7LyogPC9HU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19tb3ZlMi1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgPC9ibG9jaz5cbiAgICApLFxuICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX21vdmUyLWV4dHJhLXRvb2xib3ggLz5cbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBIRURHRUhPR19NT1ZFMl9VTkxJTUlURUQ6IEJsb2NrID0ge1xuICBibG9ja0pzb246IHtcbiAgICB0eXBlOiAnaGVkZ2Vob2dfbW92ZTJfdW5saW1pdGVkJyxcbiAgICBtZXNzYWdlMDogJyV7QktZX0hFREdFSE9HX01PVkUyX1VOTElNSVRFRH0nLFxuICAgIGFyZ3MwOiBbXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImZpZWxkX251bWJlclwiLFxuICAgICAgICBcIm5hbWVcIjogXCJQT1JUMVwiLFxuICAgICAgICBcInZhbHVlXCI6IDAsXG4gICAgICAgIFwibWluXCI6IDAsXG4gICAgICAgIFwibWF4XCI6IDMsXG4gICAgICAgIFwicHJlY2lzaW9uXCI6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImZpZWxkX251bWJlclwiLFxuICAgICAgICBcIm5hbWVcIjogXCJQT1JUMlwiLFxuICAgICAgICBcInZhbHVlXCI6IDEsXG4gICAgICAgIFwibWluXCI6IDAsXG4gICAgICAgIFwibWF4XCI6IDMsXG4gICAgICAgIFwicHJlY2lzaW9uXCI6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImlucHV0X3ZhbHVlXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIlNQRUVEMVwiLFxuICAgICAgICBcImNoZWNrXCI6IFwiTnVtYmVyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImlucHV0X3ZhbHVlXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIlNQRUVEMlwiLFxuICAgICAgICBcImNoZWNrXCI6IFwiTnVtYmVyXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIGlucHV0c0lubGluZTogdHJ1ZSxcbiAgICBwcmV2aW91c1N0YXRlbWVudDogbnVsbCxcbiAgICBuZXh0U3RhdGVtZW50OiBudWxsLFxuICAgIGNvbG91cjogMTIwLFxuICAgIHRvb2x0aXA6ICcle0JLWV9IRURHRUhPR19NT1ZFMl9VTkxJTUlURURfVE9PTFRJUH0nLFxuICAgIGhlbHBVcmw6ICcvaGVscCNibG9ja2x5LWRyaXZlJyxcbiAgICBleHRlbnNpb25zOiBbJ3JlcXVpcmVzX2FzeW5jX2pzX2Z1bmN0aW9uJ10sXG4gIH0sXG4gIGdlbmVyYXRvcnM6IHtcbiAgICBKYXZhU2NyaXB0OiBibG9jayA9PiB7XG4gICAgICBjb25zdCBwb3J0MSA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ1BPUlQxJyk7XG4gICAgICBjb25zdCBwb3J0MiA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ1BPUlQyJyk7XG4gICAgICAvLyA8R1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfbW92ZTJfdW5saW1pdGVkLWJvZHktSmF2YVNjcmlwdD5cbiAgICAgIGNvbnN0IHNwZWVkMSA9IEJsb2NrbHkuSmF2YVNjcmlwdC52YWx1ZVRvQ29kZShibG9jaywgJ1NQRUVEMScsIEJsb2NrbHkuSmF2YVNjcmlwdC5PUkRFUl9OT05FKTtcbiAgICAgIGNvbnN0IHNwZWVkMiA9IEJsb2NrbHkuSmF2YVNjcmlwdC52YWx1ZVRvQ29kZShibG9jaywgJ1NQRUVEMicsIEJsb2NrbHkuSmF2YVNjcmlwdC5PUkRFUl9OT05FKTtcbiAgICAgIGNvbnN0IGluZGVudCA9IEJsb2NrbHkuSmF2YVNjcmlwdC5JTkRFTlQ7XG4gICAgICBsZXQgY29kZSA9ICcnO1xuICAgICAgY29kZSArPSAnYXdhaXQgY29tbWFuZHMoXFxuJztcbiAgICAgIGNvZGUgKz0gYCR7aW5kZW50fWhlZGdlaG9nLm1vdmVNb3Rvcigke3BvcnQxfSwgJHtzcGVlZDF9KSxcXG5gO1xuICAgICAgY29kZSArPSBgJHtpbmRlbnR9aGVkZ2Vob2cubW92ZU1vdG9yKCR7cG9ydDJ9LCAke3NwZWVkMn0pLFxcbmA7XG4gICAgICBjb2RlICs9ICcpO1xcbic7XG4gICAgICByZXR1cm4gY29kZTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfbW92ZTJfdW5saW1pdGVkLWJvZHktSmF2YVNjcmlwdD5cbiAgICB9LFxuICAgIFB5dGhvbjogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgcG9ydDEgPSBibG9jay5nZXRGaWVsZFZhbHVlKCdQT1JUMScpO1xuICAgICAgY29uc3QgcG9ydDIgPSBibG9jay5nZXRGaWVsZFZhbHVlKCdQT1JUMicpO1xuICAgICAgLy8gPEdTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX21vdmUyX3VubGltaXRlZC1ib2R5LVB5dGhvbj5cbiAgICAgIGNvbnN0IHNwZWVkMSA9IEJsb2NrbHkuUHl0aG9uLnZhbHVlVG9Db2RlKGJsb2NrLCAnU1BFRUQxJywgQmxvY2tseS5QeXRob24uT1JERVJfTk9ORSk7XG4gICAgICBjb25zdCBzcGVlZDIgPSBCbG9ja2x5LlB5dGhvbi52YWx1ZVRvQ29kZShibG9jaywgJ1NQRUVEMicsIEJsb2NrbHkuUHl0aG9uLk9SREVSX05PTkUpO1xuICAgICAgY29uc3QgaW5kZW50ID0gQmxvY2tseS5QeXRob24uSU5ERU5UO1xuICAgICAgbGV0IGNvZGUgPSAnJztcbiAgICAgIGNvZGUgKz0gJ2hlZGdlaG9nLmNvbW1hbmRzKFxcbic7XG4gICAgICBjb2RlICs9IGAke2luZGVudH1oZWRnZWhvZy5tb3ZlX21vdG9yX2NtZCgke3BvcnQxfSwgJHtzcGVlZDF9KSxcXG5gO1xuICAgICAgY29kZSArPSBgJHtpbmRlbnR9aGVkZ2Vob2cubW92ZV9tb3Rvcl9jbWQoJHtwb3J0Mn0sICR7c3BlZWQyfSksXFxuYDtcbiAgICAgIGNvZGUgKz0gJylcXG4nO1xuICAgICAgcmV0dXJuIGNvZGU7XG4gICAgICAvLyA8L0dTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX21vdmUyX3VubGltaXRlZC1ib2R5LVB5dGhvbj5cbiAgICB9LFxuICB9LFxuICB0b29sYm94QmxvY2tzOiB7XG4gICAgZGVmYXVsdDogKCkgPT4gKFxuICAgICAgPGJsb2NrIHR5cGU9XCJoZWRnZWhvZ19tb3ZlMl91bmxpbWl0ZWRcIj5cbiAgICAgICAgey8qIDxHU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19tb3ZlMl91bmxpbWl0ZWQtZGVmYXVsdC10b29sYm94PiAqL31cbiAgICAgICAgPHZhbHVlIG5hbWU9XCJTUEVFRDFcIj5cbiAgICAgICAgICA8c2hhZG93IHR5cGU9XCJtYXRoX251bWJlclwiPlxuICAgICAgICAgICAgPGZpZWxkIG5hbWU9XCJOVU1cIj4xMDAwPC9maWVsZD5cbiAgICAgICAgICA8L3NoYWRvdz5cbiAgICAgICAgPC92YWx1ZT5cbiAgICAgICAgPHZhbHVlIG5hbWU9XCJTUEVFRDJcIj5cbiAgICAgICAgICA8c2hhZG93IHR5cGU9XCJtYXRoX251bWJlclwiPlxuICAgICAgICAgICAgPGZpZWxkIG5hbWU9XCJOVU1cIj4xMDAwPC9maWVsZD5cbiAgICAgICAgICA8L3NoYWRvdz5cbiAgICAgICAgPC92YWx1ZT5cbiAgICAgICAgey8qIDwvR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfbW92ZTJfdW5saW1pdGVkLWRlZmF1bHQtdG9vbGJveD4gKi99XG4gICAgICA8L2Jsb2NrPlxuICAgICksXG4gICAgLy8gPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfbW92ZTJfdW5saW1pdGVkLWV4dHJhLXRvb2xib3ggLz5cbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBIRURHRUhPR19NT1RPUl9PRkYyOiBCbG9jayA9IHtcbiAgYmxvY2tKc29uOiB7XG4gICAgdHlwZTogJ2hlZGdlaG9nX21vdG9yX29mZjInLFxuICAgIG1lc3NhZ2UwOiAnJXtCS1lfSEVER0VIT0dfTU9UT1JfT0ZGMn0nLFxuICAgIGFyZ3MwOiBbXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImZpZWxkX251bWJlclwiLFxuICAgICAgICBcIm5hbWVcIjogXCJQT1JUMVwiLFxuICAgICAgICBcInZhbHVlXCI6IDAsXG4gICAgICAgIFwibWluXCI6IDAsXG4gICAgICAgIFwibWF4XCI6IDMsXG4gICAgICAgIFwicHJlY2lzaW9uXCI6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImZpZWxkX251bWJlclwiLFxuICAgICAgICBcIm5hbWVcIjogXCJQT1JUMlwiLFxuICAgICAgICBcInZhbHVlXCI6IDEsXG4gICAgICAgIFwibWluXCI6IDAsXG4gICAgICAgIFwibWF4XCI6IDMsXG4gICAgICAgIFwicHJlY2lzaW9uXCI6IDFcbiAgICAgIH1cbiAgICBdLFxuICAgIGlucHV0c0lubGluZTogdHJ1ZSxcbiAgICBwcmV2aW91c1N0YXRlbWVudDogbnVsbCxcbiAgICBuZXh0U3RhdGVtZW50OiBudWxsLFxuICAgIGNvbG91cjogMTIwLFxuICAgIHRvb2x0aXA6ICcle0JLWV9IRURHRUhPR19NT1RPUl9PRkYyX1RPT0xUSVB9JyxcbiAgICBoZWxwVXJsOiAnL2hlbHAjYmxvY2tseS1kcml2ZScsXG4gICAgZXh0ZW5zaW9uczogWydyZXF1aXJlc19hc3luY19qc19mdW5jdGlvbiddLFxuICB9LFxuICBnZW5lcmF0b3JzOiB7XG4gICAgSmF2YVNjcmlwdDogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgcG9ydDEgPSBibG9jay5nZXRGaWVsZFZhbHVlKCdQT1JUMScpO1xuICAgICAgY29uc3QgcG9ydDIgPSBibG9jay5nZXRGaWVsZFZhbHVlKCdQT1JUMicpO1xuICAgICAgLy8gPEdTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX21vdG9yX29mZjItYm9keS1KYXZhU2NyaXB0PlxuICAgICAgY29uc3QgaW5kZW50ID0gQmxvY2tseS5KYXZhU2NyaXB0LklOREVOVDtcbiAgICAgIGxldCBjb2RlID0gJyc7XG4gICAgICBjb2RlICs9ICdhd2FpdCBjb21tYW5kcyhcXG4nO1xuICAgICAgY29kZSArPSBgJHtpbmRlbnR9aGVkZ2Vob2cubW92ZU1vdG9yKCR7cG9ydDF9LCAwKSxcXG5gO1xuICAgICAgY29kZSArPSBgJHtpbmRlbnR9aGVkZ2Vob2cubW92ZU1vdG9yKCR7cG9ydDJ9LCAwKSxcXG5gO1xuICAgICAgY29kZSArPSAnKTtcXG4nO1xuICAgICAgcmV0dXJuIGNvZGU7XG4gICAgICAvLyA8L0dTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX21vdG9yX29mZjItYm9keS1KYXZhU2NyaXB0PlxuICAgIH0sXG4gICAgUHl0aG9uOiBibG9jayA9PiB7XG4gICAgICBjb25zdCBwb3J0MSA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ1BPUlQxJyk7XG4gICAgICBjb25zdCBwb3J0MiA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ1BPUlQyJyk7XG4gICAgICAvLyA8R1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfbW90b3Jfb2ZmMi1ib2R5LVB5dGhvbj5cbiAgICAgIGNvbnN0IGluZGVudCA9IEJsb2NrbHkuUHl0aG9uLklOREVOVDtcbiAgICAgIGxldCBjb2RlID0gJyc7XG4gICAgICBjb2RlICs9ICdoZWRnZWhvZy5jb21tYW5kcyhcXG4nO1xuICAgICAgY29kZSArPSBgJHtpbmRlbnR9aGVkZ2Vob2cubW90b3Jfb2ZmX2NtZCgke3BvcnQxfSksXFxuYDtcbiAgICAgIGNvZGUgKz0gYCR7aW5kZW50fWhlZGdlaG9nLm1vdG9yX29mZl9jbWQoJHtwb3J0Mn0pLFxcbmA7XG4gICAgICBjb2RlICs9ICcpXFxuJztcbiAgICAgIHJldHVybiBjb2RlO1xuICAgICAgLy8gPC9HU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19tb3Rvcl9vZmYyLWJvZHktUHl0aG9uPlxuICAgIH0sXG4gIH0sXG4gIHRvb2xib3hCbG9ja3M6IHtcbiAgICBkZWZhdWx0OiAoKSA9PiAoXG4gICAgICA8YmxvY2sgdHlwZT1cImhlZGdlaG9nX21vdG9yX29mZjJcIj5cbiAgICAgICAgey8qIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX21vdG9yX29mZjItZGVmYXVsdC10b29sYm94PiAqL31cbiAgICAgICAgey8qIDwvR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfbW90b3Jfb2ZmMi1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgPC9ibG9jaz5cbiAgICApLFxuICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX21vdG9yX29mZjItZXh0cmEtdG9vbGJveCAvPlxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEhFREdFSE9HX0JSQUtFMjogQmxvY2sgPSB7XG4gIGJsb2NrSnNvbjoge1xuICAgIHR5cGU6ICdoZWRnZWhvZ19icmFrZTInLFxuICAgIG1lc3NhZ2UwOiAnJXtCS1lfSEVER0VIT0dfQlJBS0UyfScsXG4gICAgYXJnczA6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiZmllbGRfbnVtYmVyXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIlBPUlQxXCIsXG4gICAgICAgIFwidmFsdWVcIjogMCxcbiAgICAgICAgXCJtaW5cIjogMCxcbiAgICAgICAgXCJtYXhcIjogMyxcbiAgICAgICAgXCJwcmVjaXNpb25cIjogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiZmllbGRfbnVtYmVyXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIlBPUlQyXCIsXG4gICAgICAgIFwidmFsdWVcIjogMSxcbiAgICAgICAgXCJtaW5cIjogMCxcbiAgICAgICAgXCJtYXhcIjogMyxcbiAgICAgICAgXCJwcmVjaXNpb25cIjogMVxuICAgICAgfVxuICAgIF0sXG4gICAgaW5wdXRzSW5saW5lOiB0cnVlLFxuICAgIHByZXZpb3VzU3RhdGVtZW50OiBudWxsLFxuICAgIG5leHRTdGF0ZW1lbnQ6IG51bGwsXG4gICAgY29sb3VyOiAxMjAsXG4gICAgdG9vbHRpcDogJyV7QktZX0hFREdFSE9HX0JSQUtFMl9UT09MVElQfScsXG4gICAgaGVscFVybDogJy9oZWxwI2Jsb2NrbHktZHJpdmUnLFxuICAgIGV4dGVuc2lvbnM6IFsncmVxdWlyZXNfYXN5bmNfanNfZnVuY3Rpb24nXSxcbiAgfSxcbiAgZ2VuZXJhdG9yczoge1xuICAgIEphdmFTY3JpcHQ6IGJsb2NrID0+IHtcbiAgICAgIGNvbnN0IHBvcnQxID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgnUE9SVDEnKTtcbiAgICAgIGNvbnN0IHBvcnQyID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgnUE9SVDInKTtcbiAgICAgIC8vIDxHU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19icmFrZTItYm9keS1KYXZhU2NyaXB0PlxuICAgICAgY29uc3QgaW5kZW50ID0gQmxvY2tseS5KYXZhU2NyaXB0LklOREVOVDtcbiAgICAgIGxldCBjb2RlID0gJyc7XG4gICAgICBjb2RlICs9ICdhd2FpdCBjb21tYW5kcyhcXG4nO1xuICAgICAgY29kZSArPSBgJHtpbmRlbnR9aGVkZ2Vob2cubW92ZU1vdG9yKCR7cG9ydDF9LCAwKSxcXG5gO1xuICAgICAgY29kZSArPSBgJHtpbmRlbnR9aGVkZ2Vob2cubW92ZU1vdG9yKCR7cG9ydDJ9LCAwKSxcXG5gO1xuICAgICAgY29kZSArPSAnKTtcXG4nO1xuICAgICAgcmV0dXJuIGNvZGU7XG4gICAgICAvLyA8L0dTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX2JyYWtlMi1ib2R5LUphdmFTY3JpcHQ+XG4gICAgfSxcbiAgICBQeXRob246IGJsb2NrID0+IHtcbiAgICAgIGNvbnN0IHBvcnQxID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgnUE9SVDEnKTtcbiAgICAgIGNvbnN0IHBvcnQyID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgnUE9SVDInKTtcbiAgICAgIC8vIDxHU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19icmFrZTItYm9keS1QeXRob24+XG4gICAgICBjb25zdCBpbmRlbnQgPSBCbG9ja2x5LlB5dGhvbi5JTkRFTlQ7XG4gICAgICBsZXQgY29kZSA9ICcnO1xuICAgICAgY29kZSArPSAnaGVkZ2Vob2cuY29tbWFuZHMoXFxuJztcbiAgICAgIGNvZGUgKz0gYCR7aW5kZW50fWhlZGdlaG9nLmJyYWtlX2NtZCgke3BvcnQxfSksXFxuYDtcbiAgICAgIGNvZGUgKz0gYCR7aW5kZW50fWhlZGdlaG9nLmJyYWtlX2NtZCgke3BvcnQyfSksXFxuYDtcbiAgICAgIGNvZGUgKz0gJylcXG4nO1xuICAgICAgcmV0dXJuIGNvZGU7XG4gICAgICAvLyA8L0dTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX2JyYWtlMi1ib2R5LVB5dGhvbj5cbiAgICB9LFxuICB9LFxuICB0b29sYm94QmxvY2tzOiB7XG4gICAgZGVmYXVsdDogKCkgPT4gKFxuICAgICAgPGJsb2NrIHR5cGU9XCJoZWRnZWhvZ19icmFrZTJcIj5cbiAgICAgICAgey8qIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX2JyYWtlMi1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgICB7LyogPC9HU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19icmFrZTItZGVmYXVsdC10b29sYm94PiAqL31cbiAgICAgIDwvYmxvY2s+XG4gICAgKSxcbiAgICAvLyA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19icmFrZTItZXh0cmEtdG9vbGJveCAvPlxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEhFREdFSE9HX1NFUlZPOiBCbG9jayA9IHtcbiAgYmxvY2tKc29uOiB7XG4gICAgdHlwZTogJ2hlZGdlaG9nX3NlcnZvJyxcbiAgICBtZXNzYWdlMDogJyV7QktZX0hFREdFSE9HX1NFUlZPfScsXG4gICAgYXJnczA6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiZmllbGRfbnVtYmVyXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIlBPUlRcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiAwLFxuICAgICAgICBcIm1pblwiOiAwLFxuICAgICAgICBcIm1heFwiOiA1LFxuICAgICAgICBcInByZWNpc2lvblwiOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJpbnB1dF92YWx1ZVwiLFxuICAgICAgICBcIm5hbWVcIjogXCJBTkdMRVwiLFxuICAgICAgICBcImNoZWNrXCI6IFwiTnVtYmVyXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIGlucHV0c0lubGluZTogdHJ1ZSxcbiAgICBwcmV2aW91c1N0YXRlbWVudDogbnVsbCxcbiAgICBuZXh0U3RhdGVtZW50OiBudWxsLFxuICAgIGNvbG91cjogMTIwLFxuICAgIHRvb2x0aXA6ICcle0JLWV9IRURHRUhPR19TRVJWT19UT09MVElQfScsXG4gICAgaGVscFVybDogJy9oZWxwI2Jsb2NrbHktc2Vydm9zJyxcbiAgfSxcbiAgZ2VuZXJhdG9yczoge1xuICAgIEphdmFTY3JpcHQ6IGJsb2NrID0+IHtcbiAgICAgIGNvbnN0IHBvcnQgPSBibG9jay5nZXRGaWVsZFZhbHVlKCdQT1JUJyk7XG4gICAgICAvLyA8R1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfc2Vydm8tYm9keS1KYXZhU2NyaXB0PlxuICAgICAgY29uc3QgYW5nbGUgPSBCbG9ja2x5LkphdmFTY3JpcHQudmFsdWVUb0NvZGUoYmxvY2ssICdBTkdMRScsIEJsb2NrbHkuSmF2YVNjcmlwdC5PUkRFUl9NVUxUSVBMSUNBVElPTik7XG4gICAgICBjb25zdCBjb2RlID0gYGF3YWl0IGhlZGdlaG9nLnNldFNlcnZvKCR7cG9ydH0sIE1hdGgucm91bmQoJHthbmdsZX0gKiAxMDAwIC8gMTgwKSk7XFxuYDtcbiAgICAgIHJldHVybiBjb2RlO1xuICAgICAgLy8gPC9HU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19zZXJ2by1ib2R5LUphdmFTY3JpcHQ+XG4gICAgfSxcbiAgICBQeXRob246IGJsb2NrID0+IHtcbiAgICAgIGNvbnN0IHBvcnQgPSBibG9jay5nZXRGaWVsZFZhbHVlKCdQT1JUJyk7XG4gICAgICAvLyA8R1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfc2Vydm8tYm9keS1QeXRob24+XG4gICAgICBjb25zdCBhbmdsZSA9IEJsb2NrbHkuUHl0aG9uLnZhbHVlVG9Db2RlKGJsb2NrLCAnQU5HTEUnLCBCbG9ja2x5LlB5dGhvbi5PUkRFUl9NVUxUSVBMSUNBVElWRSk7XG4gICAgICBsZXQgY29kZSA9ICcnO1xuICAgICAgY29kZSArPSBgaGVkZ2Vob2cuc2V0X3NlcnZvKCR7cG9ydH0sIGludCgke2FuZ2xlfSAqIDEwMDAgLyAxODApKVxcbmA7XG4gICAgICBjb2RlICs9ICdzbGVlcCgwLjEpXFxuJztcbiAgICAgICAgcmV0dXJuIGNvZGU7XG4gICAgICAvLyA8L0dTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX3NlcnZvLWJvZHktUHl0aG9uPlxuICAgIH0sXG4gIH0sXG4gIHRvb2xib3hCbG9ja3M6IHtcbiAgICBkZWZhdWx0OiAoKSA9PiAoXG4gICAgICA8YmxvY2sgdHlwZT1cImhlZGdlaG9nX3NlcnZvXCI+XG4gICAgICAgIHsvKiA8R1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfc2Vydm8tZGVmYXVsdC10b29sYm94PiAqL31cbiAgICAgICAgPHZhbHVlIG5hbWU9XCJBTkdMRVwiPlxuICAgICAgICAgIDxzaGFkb3cgdHlwZT1cIm1hdGhfbnVtYmVyXCI+XG4gICAgICAgICAgICA8ZmllbGQgbmFtZT1cIk5VTVwiPjkwPC9maWVsZD5cbiAgICAgICAgICA8L3NoYWRvdz5cbiAgICAgICAgPC92YWx1ZT5cbiAgICAgICAgey8qIDwvR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfc2Vydm8tZGVmYXVsdC10b29sYm94PiAqL31cbiAgICAgIDwvYmxvY2s+XG4gICAgKSxcbiAgICAvLyA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19zZXJ2by1leHRyYS10b29sYm94IC8+XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgSEVER0VIT0dfU0VSVk9fT0ZGOiBCbG9jayA9IHtcbiAgYmxvY2tKc29uOiB7XG4gICAgdHlwZTogJ2hlZGdlaG9nX3NlcnZvX29mZicsXG4gICAgbWVzc2FnZTA6ICcle0JLWV9IRURHRUhPR19TRVJWT19PRkZ9JyxcbiAgICBhcmdzMDogW1xuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJmaWVsZF9udW1iZXJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiUE9SVFwiLFxuICAgICAgICBcInZhbHVlXCI6IDAsXG4gICAgICAgIFwibWluXCI6IDAsXG4gICAgICAgIFwibWF4XCI6IDUsXG4gICAgICAgIFwicHJlY2lzaW9uXCI6IDFcbiAgICAgIH1cbiAgICBdLFxuICAgIGlucHV0c0lubGluZTogdHJ1ZSxcbiAgICBwcmV2aW91c1N0YXRlbWVudDogbnVsbCxcbiAgICBuZXh0U3RhdGVtZW50OiBudWxsLFxuICAgIGNvbG91cjogMTIwLFxuICAgIHRvb2x0aXA6ICcle0JLWV9IRURHRUhPR19TRVJWT19PRkZfVE9PTFRJUH0nLFxuICAgIGhlbHBVcmw6ICcvaGVscCNibG9ja2x5LXNlcnZvcycsXG4gIH0sXG4gIGdlbmVyYXRvcnM6IHtcbiAgICBKYXZhU2NyaXB0OiBibG9jayA9PiB7XG4gICAgICBjb25zdCBwb3J0ID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgnUE9SVCcpO1xuICAgICAgLy8gPEdTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX3NlcnZvX29mZi1ib2R5LUphdmFTY3JpcHQ+XG4gICAgICBjb25zdCBjb2RlID0gYGF3YWl0IGhlZGdlaG9nLnNldFNlcnZvKCR7cG9ydH0sIG51bGwpO1xcbmA7XG4gICAgICByZXR1cm4gY29kZTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfc2Vydm9fb2ZmLWJvZHktSmF2YVNjcmlwdD5cbiAgICB9LFxuICAgIFB5dGhvbjogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgcG9ydCA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ1BPUlQnKTtcbiAgICAgIC8vIDxHU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19zZXJ2b19vZmYtYm9keS1QeXRob24+XG4gICAgICBjb25zdCBjb2RlID0gYGhlZGdlaG9nLnNldF9zZXJ2bygke3BvcnR9LCBOb25lKVxcbmA7XG4gICAgICByZXR1cm4gY29kZTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfc2Vydm9fb2ZmLWJvZHktUHl0aG9uPlxuICAgIH0sXG4gIH0sXG4gIHRvb2xib3hCbG9ja3M6IHtcbiAgICBkZWZhdWx0OiAoKSA9PiAoXG4gICAgICA8YmxvY2sgdHlwZT1cImhlZGdlaG9nX3NlcnZvX29mZlwiPlxuICAgICAgICB7LyogPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfc2Vydm9fb2ZmLWRlZmF1bHQtdG9vbGJveD4gKi99XG4gICAgICAgIHsvKiA8L0dTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX3NlcnZvX29mZi1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgPC9ibG9jaz5cbiAgICApLFxuICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX3NlcnZvX29mZi1leHRyYS10b29sYm94IC8+XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgSEVER0VIT0dfUkVBRF9BTkFMT0c6IEJsb2NrID0ge1xuICBibG9ja0pzb246IHtcbiAgICB0eXBlOiAnaGVkZ2Vob2dfcmVhZF9hbmFsb2cnLFxuICAgIG1lc3NhZ2UwOiAnJXtCS1lfSEVER0VIT0dfUkVBRF9BTkFMT0d9JyxcbiAgICBhcmdzMDogW1xuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJmaWVsZF9udW1iZXJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiUE9SVFwiLFxuICAgICAgICBcInZhbHVlXCI6IDAsXG4gICAgICAgIFwibWluXCI6IDAsXG4gICAgICAgIFwibWF4XCI6IDE1LFxuICAgICAgICBcInByZWNpc2lvblwiOiAxXG4gICAgICB9XG4gICAgXSxcbiAgICBvdXRwdXQ6ICdOdW1iZXInLFxuICAgIGNvbG91cjogMTIwLFxuICAgIHRvb2x0aXA6ICcle0JLWV9IRURHRUhPR19SRUFEX0FOQUxPR19UT09MVElQfScsXG4gICAgaGVscFVybDogJy9oZWxwI2Jsb2NrbHktc2Vuc29ycycsXG4gICAgZXh0ZW5zaW9uczogWydyZXF1aXJlc19hc3luY19qc19mdW5jdGlvbiddLFxuICB9LFxuICBnZW5lcmF0b3JzOiB7XG4gICAgSmF2YVNjcmlwdDogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgcG9ydCA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ1BPUlQnKTtcbiAgICAgIC8vIDxHU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19yZWFkX2FuYWxvZy1ib2R5LUphdmFTY3JpcHQ+XG4gICAgICBjb25zdCBjb2RlID0gYGF3YWl0IGhlZGdlaG9nLmdldEFuYWxvZygke3BvcnR9KWA7XG4gICAgICByZXR1cm4gW2NvZGUsIEJsb2NrbHkuSmF2YVNjcmlwdC5PUkRFUl9BV0FJVF07XG4gICAgICAvLyA8L0dTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX3JlYWRfYW5hbG9nLWJvZHktSmF2YVNjcmlwdD5cbiAgICB9LFxuICAgIFB5dGhvbjogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgcG9ydCA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ1BPUlQnKTtcbiAgICAgIC8vIDxHU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19yZWFkX2FuYWxvZy1ib2R5LVB5dGhvbj5cbiAgICAgIGNvbnN0IGNvZGUgPSBgaGVkZ2Vob2cuZ2V0X2FuYWxvZygke3BvcnR9KWA7XG4gICAgICByZXR1cm4gW2NvZGUsIEJsb2NrbHkuUHl0aG9uLk9SREVSX01FTUJFUl07XG4gICAgICAvLyA8L0dTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX3JlYWRfYW5hbG9nLWJvZHktUHl0aG9uPlxuICAgIH0sXG4gIH0sXG4gIHRvb2xib3hCbG9ja3M6IHtcbiAgICBkZWZhdWx0OiAoKSA9PiAoXG4gICAgICA8YmxvY2sgdHlwZT1cImhlZGdlaG9nX3JlYWRfYW5hbG9nXCI+XG4gICAgICAgIHsvKiA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19yZWFkX2FuYWxvZy1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgICB7LyogPC9HU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19yZWFkX2FuYWxvZy1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgPC9ibG9jaz5cbiAgICApLFxuICAgIC8vIDxHU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19yZWFkX2FuYWxvZy1leHRyYS10b29sYm94PlxuICAgIGNvbXBhcmlzb246ICgpID0+IChcbiAgICAgIDxibG9jayB0eXBlPVwibG9naWNfY29tcGFyZVwiPlxuICAgICAgICA8ZmllbGQgbmFtZT1cIk9QXCI+R1RFPC9maWVsZD5cbiAgICAgICAgPHZhbHVlIG5hbWU9XCJBXCI+XG4gICAgICAgICAgPGJsb2NrIHR5cGU9XCJoZWRnZWhvZ19yZWFkX2FuYWxvZ1wiIC8+XG4gICAgICAgIDwvdmFsdWU+XG4gICAgICAgIDx2YWx1ZSBuYW1lPVwiQlwiPlxuICAgICAgICAgIDxzaGFkb3cgdHlwZT1cIm1hdGhfbnVtYmVyXCI+XG4gICAgICAgICAgICA8ZmllbGQgbmFtZT1cIk5VTVwiPjIwNDg8L2ZpZWxkPlxuICAgICAgICAgIDwvc2hhZG93PlxuICAgICAgICA8L3ZhbHVlPlxuICAgICAgPC9ibG9jaz5cbiAgICApLFxuICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfcmVhZF9hbmFsb2ctZXh0cmEtdG9vbGJveD5cbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBIRURHRUhPR19SRUFEX0RJR0lUQUw6IEJsb2NrID0ge1xuICBibG9ja0pzb246IHtcbiAgICB0eXBlOiAnaGVkZ2Vob2dfcmVhZF9kaWdpdGFsJyxcbiAgICBtZXNzYWdlMDogJyV7QktZX0hFREdFSE9HX1JFQURfRElHSVRBTH0nLFxuICAgIGFyZ3MwOiBbXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImZpZWxkX251bWJlclwiLFxuICAgICAgICBcIm5hbWVcIjogXCJQT1JUXCIsXG4gICAgICAgIFwidmFsdWVcIjogMCxcbiAgICAgICAgXCJtaW5cIjogMCxcbiAgICAgICAgXCJtYXhcIjogMTUsXG4gICAgICAgIFwicHJlY2lzaW9uXCI6IDFcbiAgICAgIH1cbiAgICBdLFxuICAgIG91dHB1dDogJ0Jvb2xlYW4nLFxuICAgIGNvbG91cjogMTIwLFxuICAgIHRvb2x0aXA6ICcle0JLWV9IRURHRUhPR19SRUFEX0RJR0lUQUxfVE9PTFRJUH0nLFxuICAgIGhlbHBVcmw6ICcvaGVscCNibG9ja2x5LXNlbnNvcnMnLFxuICAgIGV4dGVuc2lvbnM6IFsncmVxdWlyZXNfYXN5bmNfanNfZnVuY3Rpb24nXSxcbiAgfSxcbiAgZ2VuZXJhdG9yczoge1xuICAgIEphdmFTY3JpcHQ6IGJsb2NrID0+IHtcbiAgICAgIGNvbnN0IHBvcnQgPSBibG9jay5nZXRGaWVsZFZhbHVlKCdQT1JUJyk7XG4gICAgICAvLyA8R1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfcmVhZF9kaWdpdGFsLWJvZHktSmF2YVNjcmlwdD5cbiAgICAgIC8vIFRPRE8gZ2VuZXJhdGUgY29kZVxuICAgICAgY29uc3QgY29kZSA9IGBhd2FpdCBoZWRnZWhvZy5nZXREaWdpdGFsKCR7cG9ydH0pYDtcbiAgICAgIHJldHVybiBbY29kZSwgQmxvY2tseS5KYXZhU2NyaXB0Lk9SREVSX0FXQUlUXTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfcmVhZF9kaWdpdGFsLWJvZHktSmF2YVNjcmlwdD5cbiAgICB9LFxuICAgIFB5dGhvbjogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgcG9ydCA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ1BPUlQnKTtcbiAgICAgIC8vIDxHU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19yZWFkX2RpZ2l0YWwtYm9keS1QeXRob24+XG4gICAgICBjb25zdCBjb2RlID0gYGhlZGdlaG9nLmdldF9kaWdpdGFsKCR7cG9ydH0pYDtcbiAgICAgIHJldHVybiBbY29kZSwgQmxvY2tseS5QeXRob24uT1JERVJfTUVNQkVSXTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfcmVhZF9kaWdpdGFsLWJvZHktUHl0aG9uPlxuICAgIH0sXG4gIH0sXG4gIHRvb2xib3hCbG9ja3M6IHtcbiAgICBkZWZhdWx0OiAoKSA9PiAoXG4gICAgICA8YmxvY2sgdHlwZT1cImhlZGdlaG9nX3JlYWRfZGlnaXRhbFwiPlxuICAgICAgICB7LyogPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfcmVhZF9kaWdpdGFsLWRlZmF1bHQtdG9vbGJveD4gKi99XG4gICAgICAgIHsvKiA8L0dTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX3JlYWRfZGlnaXRhbC1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgPC9ibG9jaz5cbiAgICApLFxuICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGhlZGdlaG9nX3JlYWRfZGlnaXRhbC1leHRyYS10b29sYm94IC8+XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgSEVER0VIT0dfU0xFRVA6IEJsb2NrID0ge1xuICBibG9ja0pzb246IHtcbiAgICB0eXBlOiAnaGVkZ2Vob2dfc2xlZXAnLFxuICAgIG1lc3NhZ2UwOiAnJXtCS1lfSEVER0VIT0dfU0xFRVB9JyxcbiAgICBhcmdzMDogW1xuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJpbnB1dF92YWx1ZVwiLFxuICAgICAgICBcIm5hbWVcIjogXCJUSU1FXCIsXG4gICAgICAgIFwiY2hlY2tcIjogXCJOdW1iZXJcIlxuICAgICAgfVxuICAgIF0sXG4gICAgaW5wdXRzSW5saW5lOiB0cnVlLFxuICAgIHByZXZpb3VzU3RhdGVtZW50OiBudWxsLFxuICAgIG5leHRTdGF0ZW1lbnQ6IG51bGwsXG4gICAgY29sb3VyOiAxMjAsXG4gICAgdG9vbHRpcDogJyV7QktZX0hFREdFSE9HX1NMRUVQX1RPT0xUSVB9JyxcbiAgICBoZWxwVXJsOiAnL2hlbHAjYmxvY2tseS1taXNjJyxcbiAgICBleHRlbnNpb25zOiBbJ3JlcXVpcmVzX2FzeW5jX2pzX2Z1bmN0aW9uJ10sXG4gIH0sXG4gIGdlbmVyYXRvcnM6IHtcbiAgICBKYXZhU2NyaXB0OiBibG9jayA9PiB7XG4gICAgICAvLyA8R1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfc2xlZXAtYm9keS1KYXZhU2NyaXB0PlxuICAgICAgY29uc3QgdGltZSA9IEJsb2NrbHkuSmF2YVNjcmlwdC52YWx1ZVRvQ29kZShibG9jaywgJ1RJTUUnLCBCbG9ja2x5LkphdmFTY3JpcHQuT1JERVJfTVVMVElQTElDQVRJT04pO1xuICAgICAgY29uc3QgY29kZSA9IGBhd2FpdCBzbGVlcCgke3RpbWV9ICogMTAwMCk7XFxuYDtcbiAgICAgIHJldHVybiBjb2RlO1xuICAgICAgLy8gPC9HU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19zbGVlcC1ib2R5LUphdmFTY3JpcHQ+XG4gICAgfSxcbiAgICBQeXRob246IGJsb2NrID0+IHtcbiAgICAgIC8vIDxHU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19zbGVlcC1ib2R5LVB5dGhvbj5cbiAgICAgIGNvbnN0IHRpbWUgPSBCbG9ja2x5LlB5dGhvbi52YWx1ZVRvQ29kZShibG9jaywgJ1RJTUUnLCBCbG9ja2x5LlB5dGhvbi5PUkRFUl9BVE9NSUMpO1xuICAgICAgY29uc3QgY29kZSA9IGBzbGVlcCgke3RpbWV9KVxcbmA7XG4gICAgICByZXR1cm4gY29kZTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfc2xlZXAtYm9keS1QeXRob24+XG4gICAgfSxcbiAgfSxcbiAgdG9vbGJveEJsb2Nrczoge1xuICAgIGRlZmF1bHQ6ICgpID0+IChcbiAgICAgIDxibG9jayB0eXBlPVwiaGVkZ2Vob2dfc2xlZXBcIj5cbiAgICAgICAgey8qIDxHU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19zbGVlcC1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgICA8dmFsdWUgbmFtZT1cIlRJTUVcIj5cbiAgICAgICAgICA8c2hhZG93IHR5cGU9XCJtYXRoX251bWJlclwiPlxuICAgICAgICAgICAgPGZpZWxkIG5hbWU9XCJOVU1cIj4xPC9maWVsZD5cbiAgICAgICAgICA8L3NoYWRvdz5cbiAgICAgICAgPC92YWx1ZT5cbiAgICAgICAgey8qIDwvR1NMIGN1c3RvbWl6YWJsZTogaGVkZ2Vob2dfc2xlZXAtZGVmYXVsdC10b29sYm94PiAqL31cbiAgICAgIDwvYmxvY2s+XG4gICAgKSxcbiAgICAvLyA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiBoZWRnZWhvZ19zbGVlcC1leHRyYS10b29sYm94IC8+XG4gIH0sXG59O1xuXG5jb25zdCBibG9ja3MgPSBbXG4gIEhFREdFSE9HX01PVkUsXG4gIEhFREdFSE9HX01PVkVfVU5MSU1JVEVELFxuICBIRURHRUhPR19NT1RPUl9PRkYsXG4gIEhFREdFSE9HX0JSQUtFLFxuICBIRURHRUhPR19NT1ZFMixcbiAgSEVER0VIT0dfTU9WRTJfVU5MSU1JVEVELFxuICBIRURHRUhPR19NT1RPUl9PRkYyLFxuICBIRURHRUhPR19CUkFLRTIsXG4gIEhFREdFSE9HX1NFUlZPLFxuICBIRURHRUhPR19TRVJWT19PRkYsXG4gIEhFREdFSE9HX1JFQURfQU5BTE9HLFxuICBIRURHRUhPR19SRUFEX0RJR0lUQUwsXG4gIEhFREdFSE9HX1NMRUVQLFxuXTtcblxuYmxvY2tzLmZvckVhY2gocmVnaXN0ZXJCbG9ja2x5QmxvY2spO1xuXG5leHBvcnQgZGVmYXVsdCBibG9ja3M7XG4iLCIvLyBAZmxvd1xuLyogZXNsaW50LWRpc2FibGUgKi9cblxuY29uc3QgTXNnID0ge307XG5leHBvcnQgZGVmYXVsdCBNc2c7XG5cbk1zZ1snSEVER0VIT0dfQ0FUX0RSSVZFJ10gPSAnRmFocmVuJztcblxuTXNnWydIRURHRUhPR19DQVRfTU9UT1JTJ10gPSAnTW90b3Jlbic7XG5cbk1zZ1snSEVER0VIT0dfQ0FUX1NFUlZPUyddID0gJ1NlcnZvcyc7XG5cbk1zZ1snSEVER0VIT0dfQ0FUX1NFTlNPUlMnXSA9ICdTZW5zb3Jlbic7XG5cbk1zZ1snSEVER0VIT0dfTU9WRSddID0gJ2Jld2VnZSBNb3RvciAlMSBtaXQgR2VzY2h3aW5kaWdrZWl0ICUyIGbDvHIgJTMgU2VrdW5kZW4nO1xuTXNnWydIRURHRUhPR19NT1ZFX1RPT0xUSVAnXSA9ICdCZXdlZ3QgZWluZW4gTW90b3IgaW4gZWluZSBiZXN0aW1tdGUgUmljaHR1bmcnO1xuXG5Nc2dbJ0hFREdFSE9HX01PVkVfVU5MSU1JVEVEJ10gPSAnYmV3ZWdlIE1vdG9yICUxIG1pdCBHZXNjaHdpbmRpZ2tlaXQgJTInO1xuTXNnWydIRURHRUhPR19NT1ZFX1VOTElNSVRFRF9UT09MVElQJ10gPSAnYmV3ZWd0IGVpbmVuIE1vdG9yIHNvbGFuZ2UgYmlzIGVyIGV4cGxpeml0IGdlc3RvcHB0IHdpcmQnO1xuXG5Nc2dbJ0hFREdFSE9HX01PVE9SX09GRiddID0gJ3NjaGFsdGUgTW90b3IgJTEgYXVzJztcbk1zZ1snSEVER0VIT0dfTU9UT1JfT0ZGX1RPT0xUSVAnXSA9ICdzY2hhbHRldCBlaW5lbiBNb3RvciBhdXMnO1xuXG5Nc2dbJ0hFREdFSE9HX0JSQUtFJ10gPSAnYnJlbXNlIE1vdG9yICUxJztcbk1zZ1snSEVER0VIT0dfQlJBS0VfVE9PTFRJUCddID0gJ2JyZW1zdCBlaW5lbiBNb3RvciBzb2ZvcnQnO1xuXG5Nc2dbJ0hFREdFSE9HX01PVkUyJ10gPSAnYmV3ZWdlIE1vdG9yICUxIHVuZCAlMiBtaXQgR2VzY2h3aW5kaWdrZWl0ICUzIHVuZCAlNCBmw7xyICU1IFNla3VuZGVuJztcbk1zZ1snSEVER0VIT0dfTU9WRTJfVE9PTFRJUCddID0gJ0Jld2VndCB6d2VpIE1vdG9yIGluIGVpbmUgYmVzdGltbXRlIFJpY2h0dW5nJztcblxuTXNnWydIRURHRUhPR19NT1ZFMl9VTkxJTUlURUQnXSA9ICdiZXdlZ2UgTW90b3IgJTEgdW5kICUyIG1pdCBHZXNjaHdpbmRpZ2tlaXQgJTMgdW5kICU0Jztcbk1zZ1snSEVER0VIT0dfTU9WRTJfVU5MSU1JVEVEX1RPT0xUSVAnXSA9ICdiZXdlZ3QgendlaSBNb3RvcmVuIHNvbGFuZ2UgYmlzIHNpZSBleHBsaXppdCBnZXN0b3BwdCB3ZXJkZW4nO1xuXG5Nc2dbJ0hFREdFSE9HX0ZPUldBUkQnXSA9ICdiZXdlZ2UgTW90b3IgJTEgdW5kICUyICUzIGbDvHIgJTQgU2VrdW5kZW4nO1xuTXNnWydIRURHRUhPR19GT1JXQVJEX1RPT0xUSVAnXSA9ICdCZXdlZ3QgendlaSBNb3RvcmVuIGluIGVpbmUgYmVzdGltbXRlIFJpY2h0dW5nJztcblxuTXNnWydIRURHRUhPR19UVVJOJ10gPSAnd2VuZGUgbWl0IE1vdG9yICUxIHVuZCAlMiAlMyBmw7xyICU0IFNla3VuZGVuJztcbk1zZ1snSEVER0VIT0dfVFVSTl9UT09MVElQJ10gPSAnd2VuZGV0IGRlbiBIZWRnZWhvZyBpbmRlbSB6d2VpIE1vdG9yZW4gaW4gZW50Z2VnZW5nZXNldHp0ZXIgUmljaHR1bmcgbGF1ZmVuIGdlbGFzc2VuIHdlcmRlbic7XG5cbk1zZ1snSEVER0VIT0dfTU9UT1JfT0ZGMiddID0gJ3NjaGFsdGUgTW90b3JlbiAlMSB1bmQgJTIgYXVzJztcbk1zZ1snSEVER0VIT0dfTU9UT1JfT0ZGMl9UT09MVElQJ10gPSAnc2NoYWx0ZXQgendlaSBNb3RvcmVuIGdsZWljaHplaXRpZyBhdXMnO1xuXG5Nc2dbJ0hFREdFSE9HX0JSQUtFMiddID0gJ2JyZW1zZSBNb3RvcmVuICUxIHVuZCAlMic7XG5Nc2dbJ0hFREdFSE9HX0JSQUtFMl9UT09MVElQJ10gPSAnYnJlbXN0IHp3ZWkgTW90b3JlbiBnbGVpY2h6ZWl0aWcnO1xuXG5Nc2dbJ0hFREdFSE9HX1NFUlZPJ10gPSAnc2V0emUgU2Vydm8gJTEgYXVmICUyIEdyYWQnO1xuTXNnWydIRURHRUhPR19TRVJWT19UT09MVElQJ10gPSAndmVyw6RuZGVydCBkaWUgcG9zaXRpb24gZWluZXMgU2Vydm9zJztcblxuTXNnWydIRURHRUhPR19TRVJWT19PRkYnXSA9ICdzY2hhbHRlIFNlcnZvICUxIGF1cyc7XG5Nc2dbJ0hFREdFSE9HX1NFUlZPX09GRl9UT09MVElQJ10gPSAnZGVha3RpdmllcnQgZWluZW4gU2Vydm8nO1xuXG5Nc2dbJ0hFREdFSE9HX1NQRUFLRVInXSA9ICdzY2hhbHRlIExhdXRzcHJlY2hlciBhdWYgJTEgSHonO1xuTXNnWydIRURHRUhPR19TUEVBS0VSX1RPT0xUSVAnXSA9ICdzY2hhbHRldCBkZW4gTGF1dHNwcmVjaGVyIGF1ZiBlaW5lIGJlc3RpbW10ZSBGcmVxdWVueic7XG5cbk1zZ1snSEVER0VIT0dfU1BFQUtFUl9PRkYnXSA9ICdzY2hhbHRlIExhdXRzcHJlY2hlciBhdXMnO1xuTXNnWydIRURHRUhPR19TUEVBS0VSX09GRl9UT09MVElQJ10gPSAnZGVha3RpdmllcnQgZGVuIExhdXRzcHJlY2hlcic7XG5cbk1zZ1snSEVER0VIT0dfUFVMTFVQJ10gPSAnc2V0emUgUHVsbHVwIGbDvHIgU2Vuc29yICUxIGF1ZiAlMic7XG5Nc2dbJ0hFREdFSE9HX1BVTExVUF9UT09MVElQJ10gPSAnU2V0emUgZWluZW4gUHVsbHVwIFdpZGVyc3RhbmQgZsO8ciBlaW5lbiBiZXN0aW1tdGVuIElPIFNlbnNvciBQb3J0JztcblxuTXNnWydIRURHRUhPR19SRUFEX0FOQUxPRyddID0gJ1dlcnQgdm9uIGFuYWxvZ2VtIFNlbnNvciAlMSc7XG5Nc2dbJ0hFREdFSE9HX1JFQURfQU5BTE9HX1RPT0xUSVAnXSA9ICdnaWJ0IGRlbiBXZXJ0IGVpbmVzIGFuYWxvZ2VuIFNlbnNvcnMgenVyw7xjayc7XG5cbk1zZ1snSEVER0VIT0dfUkVBRF9ESUdJVEFMJ10gPSAnV2VydCB2b24gZGlnaXRhbGVtIFNlbnNvciAlMSc7XG5Nc2dbJ0hFREdFSE9HX1JFQURfRElHSVRBTF9UT09MVElQJ10gPSAnZ2lidCBkZW4gV2VydCBlaW5lcyBhbmFsb2dlbiBTZW5zb3JzIHp1csO8Y2snO1xuXG5Nc2dbJ0hFREdFSE9HX1JFQURfSU1VJ10gPSAnQWNoc2UgJTIgZGVyICUxIGRlcyBMYWdlc2Vuc29ycyc7XG5Nc2dbJ0hFREdFSE9HX1JFQURfSU1VX1RPT0xUSVAnXSA9ICdnaWJ0IGVpbmVuIG9kZXIgYWxsZSBXZXJ0ZSBkZXMgTGFnZXNlbnNvcnMgenVyw7xjayc7XG5cbk1zZ1snSEVER0VIT0dfUkVBRF9JTVVfUE9TRSddID0gJ1Bvc2UnO1xuXG5Nc2dbJ0hFREdFSE9HX1JFQURfSU1VX0FDQ0VMRVJBVElPTiddID0gJ0Jlc2NobGV1bmlndW5nJztcblxuTXNnWydIRURHRUhPR19SRUFEX0lNVV9SQVRFJ10gPSAnV2lua2VsZ2VzY2h3aW5kaWdrZWl0JztcblxuTXNnWydIRURHRUhPR19TTEVFUCddID0gJ3BhdXNpZXJlIGbDvHIgJTEgU2VrdW5kZW4nO1xuTXNnWydIRURHRUhPR19TTEVFUF9UT09MVElQJ10gPSAncGF1c2llcnQgZGVuIFByb2dyYW1tYWJsYXVmIGbDvHIgZWluZSBiZXN0aW1tdGUgWmVpdCc7XG5cbk1zZ1snSEVER0VIT0dfQ1JFQVRFX1NDT1BFJ10gPSAnaVJvYm90IENyZWF0ZSBzY29wZSAlMSAlMic7XG5Nc2dbJ0hFREdFSE9HX0NSRUFURV9TQ09QRV9UT09MVElQJ10gPSAnQWxsZSBDcmVhdGUgQmzDtmNrZSBtw7xzc2VuIHNpY2ggaW5uZXJoYWxiIGVpbmVzIENyZWF0ZSBvZGVyIENyZWF0ZTIgc2NvcGUgQmxvY2tzIGJlZmluZGVuJztcblxuTXNnWydIRURHRUhPR19DUkVBVEUyX1NDT1BFJ10gPSAnaVJvYm90IENyZWF0ZTIgc2NvcGUgJTEgJTInO1xuXG5Nc2dbJ0hFREdFSE9HX0NSRUFURV9EUklWRV9ESVJFQ1QnXSA9ICdmYWhyZSBtaXQgZGVtIENyZWF0ZSAlMSBTZWt1bmRlbiBsYW5nIG1pdCBHZXNjaHdpbmRpZ2tlaXRlbiAlMiAmICUzJztcbk1zZ1snSEVER0VIT0dfQ1JFQVRFX0RSSVZFX0RJUkVDVF9UT09MVElQJ10gPSAnRsOkaHJ0IGRlbiBDcmVhdGUgZsO8ciBlaW5lIGJlc3RpbW10ZSBaZWl0JztcblxuTXNnWydIRURHRUhPR19MRUdPX01PVE9SX0NPTkZJRyddID0gJ2tvbmZpZ3VyaWVyZSBNb3RvciAlMSBhbHMgTGVnby1Nb3Rvcic7XG5Nc2dbJ0hFREdFSE9HX0xFR09fTU9UT1JfQ09ORklHX1RPT0xUSVAnXSA9ICdrb25maWd1cmllcnQgZWluZW4gTW90b3IgYWxzIExlZ28tTW90b3InO1xuXG5Nc2dbJ0hFREdFSE9HX0xFR09fU0VOU09SX0NPTkZJRyddID0gJ2tvbmZpZ3VyaWVyZSBTZW5zb3IgJTEgYWxzIExlZ28tU2Vuc29yJztcbk1zZ1snSEVER0VIT0dfTEVHT19TRU5TT1JfQ09ORklHX1RPT0xUSVAnXSA9ICdrb25maWd1cmllcnQgZWluZW4gU2Vuc29yIGFscyBMZWdvLVNlbnNvcic7XG5cbk1zZ1snSEVER0VIT0dfTEVHT19NT1ZFJ10gPSAnYmV3ZWdlIE1vdG9yICUxICUyIGbDvHIgJTMgU2VrdW5kZW4nO1xuTXNnWydIRURHRUhPR19MRUdPX01PVkVfVE9PTFRJUCddID0gJ0Jld2VndCBlaW5lbiBNb3RvciBpbiBlaW5lIGJlc3RpbW10ZSBSaWNodHVuZyc7XG5cbk1zZ1snSEVER0VIT0dfTEVHT19NT1ZFX1VOTElNSVRFRCddID0gJ2Jld2VnZSBNb3RvciAlMSAlMic7XG5Nc2dbJ0hFREdFSE9HX0xFR09fTU9WRV9VTkxJTUlURURfVE9PTFRJUCddID0gJ2Jld2VndCBlaW5lbiBNb3RvciBzb2xhbmdlIGJpcyBlciBleHBsaXppdCBnZXN0b3BwdCB3aXJkJztcblxuTXNnWydIRURHRUhPR19MRUdPX01PVkUyJ10gPSAnYmV3ZWdlIE1vdG9yICUxIHVuZCAlMiBtaXQgR2VzY2h3aW5kaWdrZWl0ICUzIHVuZCAlNCBmw7xyICU1IFNla3VuZGVuJztcbk1zZ1snSEVER0VIT0dfTEVHT19NT1ZFMl9UT09MVElQJ10gPSAnQmV3ZWd0IHp3ZWkgTW90b3IgaW4gZWluZSBiZXN0aW1tdGUgUmljaHR1bmcnO1xuXG5Nc2dbJ0hFREdFSE9HX0xFR09fTU9WRTJfVU5MSU1JVEVEJ10gPSAnYmV3ZWdlIE1vdG9yICUxIHVuZCAlMiBtaXQgR2VzY2h3aW5kaWdrZWl0ICUzIHVuZCAlNCc7XG5Nc2dbJ0hFREdFSE9HX0xFR09fTU9WRTJfVU5MSU1JVEVEX1RPT0xUSVAnXSA9ICdiZXdlZ3QgendlaSBNb3RvcmVuIHNvbGFuZ2UgYmlzIHNpZSBleHBsaXppdCBnZXN0b3BwdCB3ZXJkZW4nO1xuXG5Nc2dbJ0hFREdFSE9HX0xFR09fRk9SV0FSRCddID0gJ2Jld2VnZSBNb3RvciAlMSB1bmQgJTIgJTMgZsO8ciAlNCBTZWt1bmRlbic7XG5Nc2dbJ0hFREdFSE9HX0xFR09fRk9SV0FSRF9UT09MVElQJ10gPSAnQmV3ZWd0IHp3ZWkgTW90b3JlbiBpbiBlaW5lIGJlc3RpbW10ZSBSaWNodHVuZyc7XG5cbk1zZ1snSEVER0VIT0dfTEVHT19UVVJOJ10gPSAnd2VuZGUgbWl0IE1vdG9yICUxIHVuZCAlMiAlMyBmw7xyICU0IFNla3VuZGVuJztcbk1zZ1snSEVER0VIT0dfTEVHT19UVVJOX1RPT0xUSVAnXSA9ICd3ZW5kZXQgZGVuIEhlZGdlaG9nIGluZGVtIHp3ZWkgTW90b3JlbiBpbiBlbnRnZWdlbmdlc2V0enRlciBSaWNodHVuZyBsYXVmZW4gZ2VsYXNzZW4gd2VyZGVuJztcbiIsIi8vIEBmbG93XG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5jb25zdCBNc2cgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IE1zZztcblxuTXNnWydIRURHRUhPR19DQVRfRFJJVkUnXSA9ICdEcml2ZSc7XG5cbk1zZ1snSEVER0VIT0dfQ0FUX01PVE9SUyddID0gJ01vdG9ycyc7XG5cbk1zZ1snSEVER0VIT0dfQ0FUX1NFUlZPUyddID0gJ1NlcnZvcyc7XG5cbk1zZ1snSEVER0VIT0dfQ0FUX1NFTlNPUlMnXSA9ICdTZW5zb3JzJztcblxuTXNnWydIRURHRUhPR19NT1ZFJ10gPSAnbW92ZSBtb3RvciAlMSB3aXRoIHNwZWVkcyAlMiBmb3IgJTMgc2Vjb25kcyc7XG5Nc2dbJ0hFREdFSE9HX01PVkVfVE9PTFRJUCddID0gJ21vdmUgb25lIG1vdG9yIGZvciBhIGNlcnRhaW4gZHVyYXRpb24nO1xuXG5Nc2dbJ0hFREdFSE9HX01PVkVfVU5MSU1JVEVEJ10gPSAnbW92ZSBtb3RvciAlMSB3aXRoIHNwZWVkcyAlMic7XG5Nc2dbJ0hFREdFSE9HX01PVkVfVU5MSU1JVEVEX1RPT0xUSVAnXSA9ICdtb3ZlIG1vdG9yIHVudGlsIHN0b3BwZWQgZXhwbGljaXRseSc7XG5cbk1zZ1snSEVER0VIT0dfTU9UT1JfT0ZGMiddID0gJ3R1cm4gbW90b3JzICUxIGFuZCAlMiBvZmYnO1xuTXNnWydIRURHRUhPR19NT1RPUl9PRkYyX1RPT0xUSVAnXSA9ICd0dXJucyB0d28gbW90b3JzIG9mZiBzaW11bHRhbmVvdXNseSc7XG5cbk1zZ1snSEVER0VIT0dfQlJBS0UyJ10gPSAnYnJha2UgbW90b3JzICUxIGFuZCAlMic7XG5Nc2dbJ0hFREdFSE9HX0JSQUtFMl9UT09MVElQJ10gPSAnYnJha2VzIHR3byBtb3RvcnMgc2ltdWx0YW5lb3VzbHknO1xuXG5Nc2dbJ0hFREdFSE9HX01PVkUyJ10gPSAnbW92ZSBtb3RvciAlMSBhbmQgJTIgd2l0aCBzcGVlZHMgJTMgYW5kICU0IGZvciAlNSBzZWNvbmRzJztcbk1zZ1snSEVER0VIT0dfTU9WRTJfVE9PTFRJUCddID0gJ21vdmUgdHdvIG1vdG9ycyBmb3IgYSBjZXJ0YWluIGR1cmF0aW9uJztcblxuTXNnWydIRURHRUhPR19NT1ZFMl9VTkxJTUlURUQnXSA9ICdtb3ZlIG1vdG9yICUxIGFuZCAlMiB3aXRoIHNwZWVkcyAlMyBhbmQgJTQnO1xuTXNnWydIRURHRUhPR19NT1ZFMl9VTkxJTUlURURfVE9PTFRJUCddID0gJ21vdmUgdHdvIG1vdG9ycyB1bnRpbCBzdG9wcGVkIGV4cGxpY2l0bHknO1xuXG5Nc2dbJ0hFREdFSE9HX0ZPUldBUkQnXSA9ICdtb3ZlIG1vdG9yICUxIGFuZCAlMiAlMyBmb3IgJTQgc2Vjb25kcyc7XG5Nc2dbJ0hFREdFSE9HX0ZPUldBUkRfVE9PTFRJUCddID0gJ21vdmUgdHdvIG1vdG9ycyBmb3IgYSBjZXJ0YWluIGR1cmF0aW9uJztcblxuTXNnWydIRURHRUhPR19UVVJOJ10gPSAndHVybiBtb3RvcnMgJTEgYW5kICUyICUzIGZvciAlNCBzZWNvbmRzJztcbk1zZ1snSEVER0VIT0dfVFVSTl9UT09MVElQJ10gPSAndHVybiB0aGUgSGVkZ2Vob2cgZm9yIGEgY2VydGFpbiBkdXJhdGlvbic7XG5cbk1zZ1snSEVER0VIT0dfTU9UT1JfT0ZGJ10gPSAndHVybiBtb3RvciAlMSBvZmYnO1xuTXNnWydIRURHRUhPR19NT1RPUl9PRkZfVE9PTFRJUCddID0gJ3R1cm5zIG9uZSBtb3RvciBvZmYnO1xuXG5Nc2dbJ0hFREdFSE9HX0JSQUtFJ10gPSAnYnJha2UgbW90b3IgJTEnO1xuTXNnWydIRURHRUhPR19CUkFLRV9UT09MVElQJ10gPSAnYnJha2VzIGEgbW90b3IgaW1tZWRpYXRlbHknO1xuXG5Nc2dbJ0hFREdFSE9HX1NFUlZPJ10gPSAnc2V0IHNlcnZvICUxIHRvICUyIGRlZ3JlZXMnO1xuTXNnWydIRURHRUhPR19TRVJWT19UT09MVElQJ10gPSAnbW92ZSBhIHNlcnZvIHRvIGEgc3BlY2lmaWVkIHBvc2l0aW9uJztcblxuTXNnWydIRURHRUhPR19TRVJWT19PRkYnXSA9ICd0dXJuIHNlcnZvICUxIG9mZic7XG5Nc2dbJ0hFREdFSE9HX1NFUlZPX09GRl9UT09MVElQJ10gPSAndHVybiBhIHNlcnZvIG9mZic7XG5cbk1zZ1snSEVER0VIT0dfU1BFQUtFUiddID0gJ3R1cm4gc3BlYWtlciB0byAlMSBIeic7XG5Nc2dbJ0hFREdFSE9HX1NQRUFLRVJfVE9PTFRJUCddID0gJ3R1cm5zIHNwZWFrZXIgdG8gYSBjZXJ0YWluIGZyZXF1ZW5jeSc7XG5cbk1zZ1snSEVER0VIT0dfU1BFQUtFUl9PRkYnXSA9ICd0dXJuIHNwZWFrZXIgb2ZmJztcbk1zZ1snSEVER0VIT0dfU1BFQUtFUl9PRkZfVE9PTFRJUCddID0gJ2RlYWt0aXZhdGVzIHRoZSBzcGVha2VyJztcblxuTXNnWydIRURHRUhPR19QVUxMVVAnXSA9ICdzZXQgcHVsbHVwIGZvciBzZW5zb3IgJTEgdG8gJTInO1xuTXNnWydIRURHRUhPR19QVUxMVVBfVE9PTFRJUCddID0gJ3NldCB0aGUgcHVsbHVwIHN0YXRlIGZvciBhIHNwZWNpZmllZCBJTyBzZW5zb3IgcG9ydCc7XG5cbk1zZ1snSEVER0VIT0dfUkVBRF9BTkFMT0cnXSA9ICd2YWx1ZSBvZiBhbmFsb2cgc2Vuc29yICUxJztcbk1zZ1snSEVER0VIT0dfUkVBRF9BTkFMT0dfVE9PTFRJUCddID0gJ2dldCB0aGUgdmFsdWUgb2YgYW4gYW5hbG9nIHNlbnNvcic7XG5cbk1zZ1snSEVER0VIT0dfUkVBRF9ESUdJVEFMJ10gPSAndmFsdWUgb2YgZGlnaXRhbCBzZW5zb3IgJTEnO1xuTXNnWydIRURHRUhPR19SRUFEX0RJR0lUQUxfVE9PTFRJUCddID0gJ2dldCB0aGUgdmFsdWUgb2YgYSBkaWdpdGFsIHNlbnNvcic7XG5cbk1zZ1snSEVER0VIT0dfUkVBRF9JTVUnXSA9IFwiJTIgYXhpcyBvZiB0aGUgcG9zZSBzZW5zb3IncyAlMVwiO1xuTXNnWydIRURHRUhPR19SRUFEX0lNVV9UT09MVElQJ10gPSAnZ2V0IG9uZSBvciBhbGwgYXhlcyBvZiB0aGUgcG9zZSBzZW5zb3InO1xuXG5Nc2dbJ0hFREdFSE9HX1JFQURfSU1VX1BPU0UnXSA9ICdwb3NlJztcblxuTXNnWydIRURHRUhPR19SRUFEX0lNVV9BQ0NFTEVSQVRJT04nXSA9ICdhY2NlbGVyYXRpb24nO1xuXG5Nc2dbJ0hFREdFSE9HX1JFQURfSU1VX1JBVEUnXSA9ICdhbmd1bGFyIHZlbG9jaXR5JztcblxuTXNnWydIRURHRUhPR19TTEVFUCddID0gJ3NsZWVwIGZvciAlMSBzZWNvbmRzJztcbk1zZ1snSEVER0VIT0dfU0xFRVBfVE9PTFRJUCddID0gJ3BhdXNlIHRoZSBwcm9ncmFtIGZvciBhIGNlcnRhaW4gYW1vdW50IG9mIHRpbWUnO1xuXG5Nc2dbJ0hFREdFSE9HX0NSRUFURV9TQ09QRSddID0gJ2lSb2JvdCBDcmVhdGUgc2NvcGUgJTEgJTInO1xuTXNnWydIRURHRUhPR19DUkVBVEVfU0NPUEVfVE9PTFRJUCddID0gJ0FsbCBDcmVhdGUgYmxvY2tzIGhhdmUgdG8gYmUgaW5zaWRlIG9mIHRoaXMgYmxvY2snO1xuXG5Nc2dbJ0hFREdFSE9HX0NSRUFURTJfU0NPUEUnXSA9ICdpUm9ib3QgQ3JlYXRlMiBzY29wZSAlMSAlMic7XG5cbk1zZ1snSEVER0VIT0dfQ1JFQVRFX0RSSVZFX0RJUkVDVCddID0gJ2RyaXZlIHRoZSBDcmVhdGUgZm9yICUxIHNlY29uZHMgd2l0aCB2ZWxvY2l0aWVzICUyICYgJTMnO1xuTXNnWydIRURHRUhPR19DUkVBVEVfRFJJVkVfRElSRUNUX1RPT0xUSVAnXSA9ICdEcml2ZXMgdGhlIENyZWF0ZSBmb3IgYSBjZXJ0YWluIGFtb3VudCBvZiB0aW1lJztcblxuTXNnWydIRURHRUhPR19MRUdPX01PVE9SX0NPTkZJRyddID0gJ2NvbmZpZ3VyZSBtb3RvciAlMSBhcyBMZWdvIG1vdG9yJztcbk1zZ1snSEVER0VIT0dfTEVHT19NT1RPUl9DT05GSUdfVE9PTFRJUCddID0gJ2NvbmZpZ3VyZXMgYSBtb3RvciBhcyBhIExlZ28gbW90b3InO1xuXG5Nc2dbJ0hFREdFSE9HX0xFR09fU0VOU09SX0NPTkZJRyddID0gJ2NvbmZpZ3VyZSBzZW5zb3IgJTEgYXMgTGVnbyBzZW5zb3InO1xuTXNnWydIRURHRUhPR19MRUdPX1NFTlNPUl9DT05GSUdfVE9PTFRJUCddID0gJ2NvbmZpZ3VyZXMgYSBzZW5zb3IgYXMgYSBMZWdvIHNlbnNvcic7XG5cbk1zZ1snSEVER0VIT0dfTEVHT19NT1ZFJ10gPSAnbW92ZSBtb3RvciAlMSAlMiBmb3IgJTMgc2Vjb25kcyc7XG5Nc2dbJ0hFREdFSE9HX0xFR09fTU9WRV9UT09MVElQJ10gPSAnbW92ZSBvbmUgbW90b3IgZm9yIGEgY2VydGFpbiBkdXJhdGlvbic7XG5cbk1zZ1snSEVER0VIT0dfTEVHT19NT1ZFX1VOTElNSVRFRCddID0gJ21vdmUgbW90b3IgJTEgJTInO1xuTXNnWydIRURHRUhPR19MRUdPX01PVkVfVU5MSU1JVEVEX1RPT0xUSVAnXSA9ICdtb3ZlIG1vdG9yIHVudGlsIHN0b3BwZWQgZXhwbGljaXRseSc7XG5cbk1zZ1snSEVER0VIT0dfTEVHT19NT1ZFMiddID0gJ21vdmUgbW90b3IgJTEgYW5kICUyIHdpdGggc3BlZWRzICUzIGFuZCAlNCBmb3IgJTUgc2Vjb25kcyc7XG5Nc2dbJ0hFREdFSE9HX0xFR09fTU9WRTJfVE9PTFRJUCddID0gJ21vdmUgdHdvIG1vdG9ycyBmb3IgYSBjZXJ0YWluIGR1cmF0aW9uJztcblxuTXNnWydIRURHRUhPR19MRUdPX01PVkUyX1VOTElNSVRFRCddID0gJ21vdmUgbW90b3IgJTEgYW5kICUyIHdpdGggc3BlZWRzICUzIGFuZCAlNCc7XG5Nc2dbJ0hFREdFSE9HX0xFR09fTU9WRTJfVU5MSU1JVEVEX1RPT0xUSVAnXSA9ICdtb3ZlIHR3byBtb3RvcnMgdW50aWwgc3RvcHBlZCBleHBsaWNpdGx5JztcblxuTXNnWydIRURHRUhPR19MRUdPX0ZPUldBUkQnXSA9ICdtb3ZlIG1vdG9yICUxIGFuZCAlMiAlMyBmb3IgJTQgc2Vjb25kcyc7XG5Nc2dbJ0hFREdFSE9HX0xFR09fRk9SV0FSRF9UT09MVElQJ10gPSAnbW92ZSB0d28gbW90b3JzIGZvciBhIGNlcnRhaW4gZHVyYXRpb24nO1xuXG5Nc2dbJ0hFREdFSE9HX0xFR09fVFVSTiddID0gJ3R1cm4gbW90b3JzICUxIGFuZCAlMiAlMyBmb3IgJTQgc2Vjb25kcyc7XG5Nc2dbJ0hFREdFSE9HX0xFR09fVFVSTl9UT09MVElQJ10gPSAndHVybiB0aGUgSGVkZ2Vob2cgZm9yIGEgY2VydGFpbiBkdXJhdGlvbic7XG4iLCIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmxvY2tseSBmcm9tICdibG9ja2x5L2NvcmUnO1xuXG5leHBvcnQgdHlwZSBCbG9jayA9IHt8XG4gIGJsb2NrSnNvbjogT2JqZWN0LFxuICBnZW5lcmF0b3JzOiB7IFtzdHJpbmddOiAoT2JqZWN0KSA9PiBzdHJpbmcgfCBbc3RyaW5nLCBudW1iZXJdIH0sXG4gIHRvb2xib3hCbG9ja3M6IHsgW3N0cmluZ106ICgpID0+IFJlYWN0Lk5vZGUgfSxcbnx9O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJCbG9ja2x5QmxvY2soYmxvY2s6IEJsb2NrKSB7XG4gIGNvbnN0IHsgdHlwZSB9ID0gYmxvY2suYmxvY2tKc29uO1xuXG4gIEJsb2NrbHkuQmxvY2tzW3R5cGVdID0ge1xuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLmpzb25Jbml0KGJsb2NrLmJsb2NrSnNvbik7XG4gICAgfSxcbiAgfTtcbiAgQmxvY2tseS5KYXZhU2NyaXB0W3R5cGVdID0gYmxvY2suZ2VuZXJhdG9ycy5KYXZhU2NyaXB0O1xuICBCbG9ja2x5LlB5dGhvblt0eXBlXSA9IGJsb2NrLmdlbmVyYXRvcnMuUHl0aG9uO1xufVxuIiwiLy8gQGZsb3dcbi8qIGVzbGludC1kaXNhYmxlICovXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCbG9ja2x5IGZyb20gJ2Jsb2NrbHkvY29yZSc7XG5cbmltcG9ydCB7IHR5cGUgQmxvY2ssIHJlZ2lzdGVyQmxvY2tseUJsb2NrIH0gZnJvbSAnLic7XG5pbXBvcnQgTXVsdGlSb2JvdEludGVyZmFjZSBmcm9tICdjcmNsanMvc3JjL011bHRpUm9ib3RJbnRlcmZhY2UnO1xuaW1wb3J0IENvbW1hbmRGYWN0b3J5IGZyb20gJ2NyY2xqcy9zcmMvQ29tbWFuZEZhY3RvcnknO1xuaW1wb3J0IENSQ0xDb21tYW5kIGZyb20gJ2NyY2xqcy9zcmMvQ1JDTENvbW1hbmQnO1xuaW1wb3J0IFJvYm90SW50ZXJmYWNlIGZyb20gJ2NyY2xqcy9zcmMvUm9ib3RJbnRlcmZhY2UnO1xuaW1wb3J0IFRDUFJvYm90Q29ubmVjdGlvbiAgZnJvbSAnY3JjbGpzLW5vZGUvc3JjL1RDUFJvYm90Q29ubmVjdGlvbi5tanMnXG5cblxuLy9yb2JvdHMgPSBuZXcgTXVsdGlSb2JvdEludGVyZmFjZSgpO1xuLy9yb2JvdHMuYWRkUm9ib3QobmV3IFJvYm90SW50ZXJmYWNlKG5ldyBUQ1BSb2JvdENvbm5lY3Rpb24oJ0Zlc3RvJywgOTAwMCwgJzEyNy4wLjAuMScpKSlcblxuZXhwb3J0IGNvbnN0IENSQ0xfU0VUX1RDUDogQmxvY2sgPSB7XG4gIGJsb2NrSnNvbjoge1xuICAgIHR5cGU6ICdjcmNsX3NldF90Y3AnLFxuICAgIG1lc3NhZ2UwOiAnJXtCS1lfQ1JDTF9TRVRfVENQfScsXG4gICAgYXJnczA6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRfdmFsdWVcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiVmVjdG9yXCIsXG4gICAgICAgIFwiY2hlY2tcIjogXCJWZWN0b3JcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRfdmFsdWVcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiUm90YXRpb25cIixcbiAgICAgICAgXCJjaGVja1wiOiBcIlJvdGF0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImZpZWxkX2NoZWNrYm94XCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkxpbmVhclwiXG4gICAgICB9XG4gICAgXSxcbiAgICBpbnB1dHNJbmxpbmU6IHRydWUsXG4gICAgcHJldmlvdXNTdGF0ZW1lbnQ6IG51bGwsXG4gICAgbmV4dFN0YXRlbWVudDogbnVsbCxcbiAgICBjb2xvdXI6IDI4MCxcbiAgICB0b29sdGlwOiAnJXtCS1lfQ1JDTF9TRVRfVENQX1RPT0xUSVB9JyxcbiAgICBoZWxwVXJsOiAnL2hlbHAjYmxvY2tseS1taXNjJyxcbiAgICBleHRlbnNpb25zOiBbJ3JlcXVpcmVzX2FzeW5jX2pzX2Z1bmN0aW9uJ10sXG4gIH0sXG4gIGdlbmVyYXRvcnM6IHtcbiAgICBKYXZhU2NyaXB0OiBibG9jayA9PiB7XG4gICAgICBjb25zdCBsaW5lYXIgPSBibG9jay5nZXRGaWVsZFZhbHVlKCdMaW5lYXInKSA9PT0gJ1RSVUUnO1xuICAgICAgLy8gPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogY3JjbF9zZXRfdGNwLWJvZHktSmF2YVNjcmlwdD5cbiAgICAgIGNvbnN0IHZlY3RvciA9IEJsb2NrbHkuSmF2YVNjcmlwdC52YWx1ZVRvQ29kZShibG9jaywgJ1ZlY3RvcicsIEJsb2NrbHkuSmF2YVNjcmlwdC5PUkRFUl9BVE9NSUMpO1xuICAgICAgY29uc3Qgcm90YXRpb24gPSBCbG9ja2x5LkphdmFTY3JpcHQudmFsdWVUb0NvZGUoYmxvY2ssICdSb3RhdGlvbicsIEJsb2NrbHkuSmF2YVNjcmlwdC5PUkRFUl9BVE9NSUMpO1xuICAgICAgLy8gVE9ETyBnZW5lcmF0ZSBjb2RlXG4gICAgICBcbiAgICAgIHJldHVybiBjb2RlO1xuICAgICAgLy8gPC9HU0wgY3VzdG9taXphYmxlOiBjcmNsX3NldF90Y3AtYm9keS1KYXZhU2NyaXB0PlxuICAgIH0sXG4gICAgUHl0aG9uOiBibG9jayA9PiB7XG4gICAgICBjb25zdCBsaW5lYXIgPSBibG9jay5nZXRGaWVsZFZhbHVlKCdMaW5lYXInKSA9PT0gJ1RSVUUnO1xuICAgICAgLy8gPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogY3JjbF9zZXRfdGNwLWJvZHktUHl0aG9uPlxuICAgICAgY29uc3QgdmVjdG9yID0gQmxvY2tseS5QeXRob24udmFsdWVUb0NvZGUoYmxvY2ssICdWZWN0b3InLCBCbG9ja2x5LlB5dGhvbi5PUkRFUl9BVE9NSUMpO1xuICAgICAgY29uc3Qgcm90YXRpb24gPSBCbG9ja2x5LlB5dGhvbi52YWx1ZVRvQ29kZShibG9jaywgJ1JvdGF0aW9uJywgQmxvY2tseS5QeXRob24uT1JERVJfQVRPTUlDKTtcbiAgICAgIC8vIFRPRE8gZ2VuZXJhdGUgY29kZVxuICAgICAgY29uc3QgY29kZSA9ICcnO1xuICAgICAgcmV0dXJuIGNvZGU7XG4gICAgICAvLyA8L0dTTCBjdXN0b21pemFibGU6IGNyY2xfc2V0X3RjcC1ib2R5LVB5dGhvbj5cbiAgICB9LFxuICB9LFxuICB0b29sYm94QmxvY2tzOiB7XG4gICAgZGVmYXVsdDogKCkgPT4gKFxuICAgICAgPGJsb2NrIHR5cGU9XCJjcmNsX3NldF90Y3BcIj5cbiAgICAgICAgey8qIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGNyY2xfc2V0X3RjcC1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgICB7LyogPC9HU0wgY3VzdG9taXphYmxlOiBjcmNsX3NldF90Y3AtZGVmYXVsdC10b29sYm94PiAqL31cbiAgICAgIDwvYmxvY2s+XG4gICAgKSxcbiAgICAvLyA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiBjcmNsX3NldF90Y3AtZXh0cmEtdG9vbGJveCAvPlxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IENSQ0xfU0VUX1RPT0xfVkFMVUU6IEJsb2NrID0ge1xuICBibG9ja0pzb246IHtcbiAgICB0eXBlOiAnY3JjbF9zZXRfdG9vbF92YWx1ZScsXG4gICAgbWVzc2FnZTA6ICcle0JLWV9DUkNMX1NFVF9UT09MX1ZBTFVFfScsXG4gICAgYXJnczA6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiZmllbGRfbnVtYmVyXCIsXG4gICAgICAgIFwibmFtZVwiOiBcInZhbHVlXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIGlucHV0c0lubGluZTogdHJ1ZSxcbiAgICBwcmV2aW91c1N0YXRlbWVudDogbnVsbCxcbiAgICBuZXh0U3RhdGVtZW50OiBudWxsLFxuICAgIGNvbG91cjogNzAsXG4gICAgdG9vbHRpcDogJyV7QktZX0NSQ0xfU0VUX1RPT0xfVkFMVUVfVE9PTFRJUH0nLFxuICAgIGhlbHBVcmw6ICcvaGVscCNibG9ja2x5LW1pc2MnLFxuICAgIGV4dGVuc2lvbnM6IFsncmVxdWlyZXNfYXN5bmNfanNfZnVuY3Rpb24nXSxcbiAgfSxcbiAgZ2VuZXJhdG9yczoge1xuICAgIEphdmFTY3JpcHQ6IGJsb2NrID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgndmFsdWUnKTtcbiAgICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGNyY2xfc2V0X3Rvb2xfdmFsdWUtYm9keS1KYXZhU2NyaXB0PlxuICAgICAgLy8gVE9ETyBnZW5lcmF0ZSBjb2RlXG4gICAgIC8vIHJvYm90cy5hZGRUb1F1ZXVlKHJvYm90c1swXSwgbmV3IENSQ0xDb21tYW5kKCdTZXRFbmRFZmZlY3RvcicsXCJQaWNraW5nIFRhcmdldFwiLHtcIlNldHRpbmdcIjogJHZhbHVlIH0pKTtcbiAgICAgLy8gY29uc29sZS5sb2cobmV3IENSQ0xDb21tYW5kKCdTZXRFbmRFZmZlY3RvcicsXCJQaWNraW5nIFRhcmdldFwiLHtcIlNldHRpbmdcIjogJHZhbHVlIH0pLnRvU3RyaW5nKCkpXG4gICAgICByZXR1cm4gY29kZTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogY3JjbF9zZXRfdG9vbF92YWx1ZS1ib2R5LUphdmFTY3JpcHQ+XG4gICAgfSxcbiAgICBQeXRob246IGJsb2NrID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgndmFsdWUnKTtcbiAgICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGNyY2xfc2V0X3Rvb2xfdmFsdWUtYm9keS1QeXRob24+XG4gICAgICAvLyBUT0RPIGdlbmVyYXRlIGNvZGVcbiAgICAgIGNvbnN0IGNvZGUgPSAnJztcbiAgICAgIHJldHVybiBjb2RlO1xuICAgICAgLy8gPC9HU0wgY3VzdG9taXphYmxlOiBjcmNsX3NldF90b29sX3ZhbHVlLWJvZHktUHl0aG9uPlxuICAgIH0sXG4gIH0sXG4gIHRvb2xib3hCbG9ja3M6IHtcbiAgICBkZWZhdWx0OiAoKSA9PiAoXG4gICAgICA8YmxvY2sgdHlwZT1cImNyY2xfc2V0X3Rvb2xfdmFsdWVcIj5cbiAgICAgICAgey8qIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGNyY2xfc2V0X3Rvb2xfdmFsdWUtZGVmYXVsdC10b29sYm94PiAqL31cbiAgICAgICAgey8qIDwvR1NMIGN1c3RvbWl6YWJsZTogY3JjbF9zZXRfdG9vbF92YWx1ZS1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgPC9ibG9jaz5cbiAgICApLFxuICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGNyY2xfc2V0X3Rvb2xfdmFsdWUtZXh0cmEtdG9vbGJveCAvPlxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IENSQ0xfU1dJVENIX1RPT0w6IEJsb2NrID0ge1xuICBibG9ja0pzb246IHtcbiAgICB0eXBlOiAnY3JjbF9zd2l0Y2hfdG9vbCcsXG4gICAgbWVzc2FnZTA6ICcle0JLWV9DUkNMX1NXSVRDSF9UT09MfScsXG4gICAgYXJnczA6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiZmllbGRfbnVtYmVyXCIsXG4gICAgICAgIFwibmFtZVwiOiBcInRvb2xOdW1iZXJcIlxuICAgICAgfVxuICAgIF0sXG4gICAgaW5wdXRzSW5saW5lOiB0cnVlLFxuICAgIHByZXZpb3VzU3RhdGVtZW50OiBudWxsLFxuICAgIG5leHRTdGF0ZW1lbnQ6IG51bGwsXG4gICAgY29sb3VyOiA3MCxcbiAgICB0b29sdGlwOiAnJXtCS1lfQ1JDTF9TV0lUQ0hfVE9PTF9UT09MVElQfScsXG4gICAgaGVscFVybDogJy9oZWxwI2Jsb2NrbHktbWlzYycsXG4gICAgZXh0ZW5zaW9uczogWydyZXF1aXJlc19hc3luY19qc19mdW5jdGlvbiddLFxuICB9LFxuICBnZW5lcmF0b3JzOiB7XG4gICAgSmF2YVNjcmlwdDogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgdG9vbG51bWJlciA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ3Rvb2xOdW1iZXInKTtcbiAgICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGNyY2xfc3dpdGNoX3Rvb2wtYm9keS1KYXZhU2NyaXB0PlxuICAgICAgLy8gVE9ETyBnZW5lcmF0ZSBjb2RlXG4gICAgICBjb25zdCBjb2RlID0gJyc7XG4gICAgLy8gIGNvbnNvbGUubG9nKCBuZXcgQ1JDTENvbW1hbmQoXCJTZXRFbmRFZmZlY3RvclBhcmFtZXRlcnNcIixcIlVzaW5nIFRvb2wgXCIrJHRvb2xOdW1iZXIsIHtcIlRvb2xJRFwiOiAkdG9vbE51bWJlcn0pO1xuICAgICAgLy9yb2JvdHMuYWRkVG9RdWV1ZShyb2JvdHNbMF0sIG5ldyBDUkNMQ29tbWFuZChcIlNldEVuZEVmZmVjdG9yUGFyYW1ldGVyc1wiLFwiVXNpbmcgVG9vbCBcIiskdG9vbE51bWJlciwge1wiVG9vbElEXCI6ICR0b29sTnVtYmVyfSkpXG4gICAgICByZXR1cm4gY29kZTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogY3JjbF9zd2l0Y2hfdG9vbC1ib2R5LUphdmFTY3JpcHQ+XG4gICAgfSxcbiAgICBQeXRob246IGJsb2NrID0+IHtcbiAgICAgIGNvbnN0IHRvb2xudW1iZXIgPSBibG9jay5nZXRGaWVsZFZhbHVlKCd0b29sTnVtYmVyJyk7XG4gICAgICAvLyA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiBjcmNsX3N3aXRjaF90b29sLWJvZHktUHl0aG9uPlxuICAgICAgLy8gVE9ETyBnZW5lcmF0ZSBjb2RlXG4gICAgICBjb25zdCBjb2RlID0gJyc7XG4gICAgICByZXR1cm4gY29kZTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogY3JjbF9zd2l0Y2hfdG9vbC1ib2R5LVB5dGhvbj5cbiAgICB9LFxuICB9LFxuICB0b29sYm94QmxvY2tzOiB7XG4gICAgZGVmYXVsdDogKCkgPT4gKFxuICAgICAgPGJsb2NrIHR5cGU9XCJjcmNsX3N3aXRjaF90b29sXCI+XG4gICAgICAgIHsvKiA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiBjcmNsX3N3aXRjaF90b29sLWRlZmF1bHQtdG9vbGJveD4gKi99XG4gICAgICAgIHsvKiA8L0dTTCBjdXN0b21pemFibGU6IGNyY2xfc3dpdGNoX3Rvb2wtZGVmYXVsdC10b29sYm94PiAqL31cbiAgICAgIDwvYmxvY2s+XG4gICAgKSxcbiAgICAvLyA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiBjcmNsX3N3aXRjaF90b29sLWV4dHJhLXRvb2xib3ggLz5cbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBDUkNMX1dBSVQ6IEJsb2NrID0ge1xuICBibG9ja0pzb246IHtcbiAgICB0eXBlOiAnY3JjbF93YWl0JyxcbiAgICBtZXNzYWdlMDogJyV7QktZX0NSQ0xfV0FJVH0nLFxuICAgIGFyZ3MwOiBbXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImZpZWxkX251bWJlclwiLFxuICAgICAgICBcIm5hbWVcIjogXCJ0aW1lXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIGlucHV0c0lubGluZTogdHJ1ZSxcbiAgICBwcmV2aW91c1N0YXRlbWVudDogbnVsbCxcbiAgICBuZXh0U3RhdGVtZW50OiBudWxsLFxuICAgIGNvbG91cjogNzAsXG4gICAgdG9vbHRpcDogJyV7QktZX0NSQ0xfV0FJVF9UT09MVElQfScsXG4gICAgaGVscFVybDogJy9oZWxwI2Jsb2NrbHktbWlzYycsXG4gICAgZXh0ZW5zaW9uczogWydyZXF1aXJlc19hc3luY19qc19mdW5jdGlvbiddLFxuICB9LFxuICBnZW5lcmF0b3JzOiB7XG4gICAgSmF2YVNjcmlwdDogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgdGltZSA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ3RpbWUnKTtcbiAgICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGNyY2xfd2FpdC1ib2R5LUphdmFTY3JpcHQ+XG4gICAgICAvLyBUT0RPIGdlbmVyYXRlIGNvZGVcbiAgICAgIGNvbnN0IGNvZGUgPSAnJztcbiAgICAgIHJvYm90cy5hZGRUb1F1ZXVlKHJvYm90c1swXSwgbmV3IENSQ0xDb21tYW5kKCdXYWl0JywnV2FpdCAnKyR0aW1lLHtcIlRpbWVcIjogJHRpbWV9KSk7XG4gICAgICByZXR1cm4gY29kZTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogY3JjbF93YWl0LWJvZHktSmF2YVNjcmlwdD5cbiAgICB9LFxuICAgIFB5dGhvbjogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgdGltZSA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ3RpbWUnKTtcbiAgICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGNyY2xfd2FpdC1ib2R5LVB5dGhvbj5cbiAgICAgIC8vIFRPRE8gZ2VuZXJhdGUgY29kZVxuICAgICAgY29uc3QgY29kZSA9ICcnO1xuICAgICAgcmV0dXJuIGNvZGU7XG4gICAgICAvLyA8L0dTTCBjdXN0b21pemFibGU6IGNyY2xfd2FpdC1ib2R5LVB5dGhvbj5cbiAgICB9LFxuICB9LFxuICB0b29sYm94QmxvY2tzOiB7XG4gICAgZGVmYXVsdDogKCkgPT4gKFxuICAgICAgPGJsb2NrIHR5cGU9XCJjcmNsX3dhaXRcIj5cbiAgICAgICAgey8qIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGNyY2xfd2FpdC1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgICB7LyogPC9HU0wgY3VzdG9taXphYmxlOiBjcmNsX3dhaXQtZGVmYXVsdC10b29sYm94PiAqL31cbiAgICAgIDwvYmxvY2s+XG4gICAgKSxcbiAgICAvLyA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiBjcmNsX3dhaXQtZXh0cmEtdG9vbGJveCAvPlxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IENSQ0xfVE9PTF9PTl9PRkY6IEJsb2NrID0ge1xuICBibG9ja0pzb246IHtcbiAgICB0eXBlOiAnY3JjbF90b29sX29uX29mZicsXG4gICAgbWVzc2FnZTA6ICcle0JLWV9DUkNMX1RPT0xfT05fT0ZGfScsXG4gICAgYXJnczA6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiZmllbGRfZHJvcGRvd25cIixcbiAgICAgICAgXCJuYW1lXCI6IFwib25vZlwiLFxuICAgICAgICBcIm9wdGlvbnNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwiT05cIixcbiAgICAgICAgICAgIFwiT05cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJPRkZcIixcbiAgICAgICAgICAgIFwiT0ZGXCJcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuICAgIGlucHV0c0lubGluZTogdHJ1ZSxcbiAgICBwcmV2aW91c1N0YXRlbWVudDogbnVsbCxcbiAgICBuZXh0U3RhdGVtZW50OiBudWxsLFxuICAgIGNvbG91cjogMjgwLFxuICAgIHRvb2x0aXA6ICcle0JLWV9DUkNMX1RPT0xfT05fT0ZGX1RPT0xUSVB9JyxcbiAgICBoZWxwVXJsOiAnL2hlbHAjYmxvY2tseS1taXNjJyxcbiAgfSxcbiAgZ2VuZXJhdG9yczoge1xuICAgIEphdmFTY3JpcHQ6IGJsb2NrID0+IHtcbiAgICAgIGNvbnN0IG9ub2YgPSBibG9jay5nZXRGaWVsZFZhbHVlKCdvbm9mJyk7XG4gICAgICBpZiAob25vZiA9ICdPTicpe1xuICAgICAgICByb2JvdHMuYWRkVG9RdWV1ZShyb2JvdHNbMF0sIG5ldyBDUkNMQ29tbWFuZCgnU2V0RW5kRWZmZWN0b3InLFwiUGlja2luZyBUYXJnZXRcIix7XCJTZXR0aW5nXCI6IDEuMDAgfSkpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJvYm90cy5hZGRUb1F1ZXVlKHJvYm90c1swXSwgbmV3IENSQ0xDb21tYW5kKCdTZXRFbmRFZmZlY3RvcicsXCJQaWNraW5nIFRhcmdldFwiLHtcIlNldHRpbmdcIjogMC4wMCB9KSk7XG4gICAgICB9XG4gICAgICAvLyA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiBjcmNsX3Rvb2xfb25fb2ZmLWJvZHktSmF2YVNjcmlwdD5cbiAgICAgIC8vIFRPRE8gZ2VuZXJhdGUgY29kZVxuICAgICAgY29uc3QgY29kZSA9ICcnO1xuICAgICAgcmV0dXJuIGNvZGU7XG4gICAgICAvLyA8L0dTTCBjdXN0b21pemFibGU6IGNyY2xfdG9vbF9vbl9vZmYtYm9keS1KYXZhU2NyaXB0PlxuICAgIH0sXG4gICAgUHl0aG9uOiBibG9jayA9PiB7XG4gICAgICBjb25zdCBvbm9mID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgnb25vZicpO1xuICAgICAgLy8gPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogY3JjbF90b29sX29uX29mZi1ib2R5LVB5dGhvbj5cbiAgICAgIC8vIFRPRE8gZ2VuZXJhdGUgY29kZVxuICAgICAgY29uc3QgY29kZSA9ICcnO1xuICAgICAgcmV0dXJuIGNvZGU7XG4gICAgICAvLyA8L0dTTCBjdXN0b21pemFibGU6IGNyY2xfdG9vbF9vbl9vZmYtYm9keS1QeXRob24+XG4gICAgfSxcbiAgfSxcbiAgdG9vbGJveEJsb2Nrczoge1xuICAgIGRlZmF1bHQ6ICgpID0+IChcbiAgICAgIDxibG9jayB0eXBlPVwiY3JjbF90b29sX29uX29mZlwiPlxuICAgICAgICB7LyogPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogY3JjbF90b29sX29uX29mZi1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgICB7LyogPC9HU0wgY3VzdG9taXphYmxlOiBjcmNsX3Rvb2xfb25fb2ZmLWRlZmF1bHQtdG9vbGJveD4gKi99XG4gICAgICA8L2Jsb2NrPlxuICAgICksXG4gICAgLy8gPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogY3JjbF90b29sX29uX29mZi1leHRyYS10b29sYm94IC8+XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgQ1JDTF9WRUxPQ0lUWTogQmxvY2sgPSB7XG4gIGJsb2NrSnNvbjoge1xuICAgIHR5cGU6ICdjcmNsX3ZlbG9jaXR5JyxcbiAgICBtZXNzYWdlMDogJyV7QktZX0NSQ0xfVkVMT0NJVFl9JyxcbiAgICBhcmdzMDogW1xuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJmaWVsZF9udW1iZXJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwidmVsb2NpdHlcIlxuICAgICAgfVxuICAgIF0sXG4gICAgaW5wdXRzSW5saW5lOiB0cnVlLFxuICAgIHByZXZpb3VzU3RhdGVtZW50OiBudWxsLFxuICAgIG5leHRTdGF0ZW1lbnQ6IG51bGwsXG4gICAgY29sb3VyOiA3MCxcbiAgICB0b29sdGlwOiAnJXtCS1lfQ1JDTF9WRUxPQ0lUWV9UT09MVElQfScsXG4gICAgaGVscFVybDogJy9oZWxwI2Jsb2NrbHktbWlzYycsXG4gICAgZXh0ZW5zaW9uczogWydyZXF1aXJlc19hc3luY19qc19mdW5jdGlvbiddLFxuICB9LFxuICBnZW5lcmF0b3JzOiB7XG4gICAgSmF2YVNjcmlwdDogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgdmVsb2NpdHkgPSBibG9jay5nZXRGaWVsZFZhbHVlKCd2ZWxvY2l0eScpO1xuICAgICAgLy8gPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogY3JjbF92ZWxvY2l0eS1ib2R5LUphdmFTY3JpcHQ+XG4gICAgICAvLyBUT0RPIGdlbmVyYXRlIGNvZGVcbiAgICAgIGNvbnN0IGNvZGUgPSAnJztcbiAgICAgIHJldHVybiBjb2RlO1xuICAgICAgLy8gPC9HU0wgY3VzdG9taXphYmxlOiBjcmNsX3ZlbG9jaXR5LWJvZHktSmF2YVNjcmlwdD5cbiAgICB9LFxuICAgIFB5dGhvbjogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgdmVsb2NpdHkgPSBibG9jay5nZXRGaWVsZFZhbHVlKCd2ZWxvY2l0eScpO1xuICAgICAgLy8gPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogY3JjbF92ZWxvY2l0eS1ib2R5LVB5dGhvbj5cbiAgICAgIC8vIFRPRE8gZ2VuZXJhdGUgY29kZVxuICAgICAgY29uc3QgY29kZSA9ICcnO1xuICAgICAgcm9ib3RzLmFkZFRvUXVldWUocm9ib3RzWzBdLCBDb21tYW5kRmFjdG9yeS5TZXRUcmFuc1NwZWVkKCdTZXQgc2xvdyBzcGVlZCcsICR2ZWxvY2l0eSkpXG4gICAgICByZXR1cm4gY29kZTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogY3JjbF92ZWxvY2l0eS1ib2R5LVB5dGhvbj5cbiAgICB9LFxuICB9LFxuICB0b29sYm94QmxvY2tzOiB7XG4gICAgZGVmYXVsdDogKCkgPT4gKFxuICAgICAgPGJsb2NrIHR5cGU9XCJjcmNsX3ZlbG9jaXR5XCI+XG4gICAgICAgIHsvKiA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiBjcmNsX3ZlbG9jaXR5LWRlZmF1bHQtdG9vbGJveD4gKi99XG4gICAgICAgIHsvKiA8L0dTTCBjdXN0b21pemFibGU6IGNyY2xfdmVsb2NpdHktZGVmYXVsdC10b29sYm94PiAqL31cbiAgICAgIDwvYmxvY2s+XG4gICAgKSxcbiAgICAvLyA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiBjcmNsX3ZlbG9jaXR5LWV4dHJhLXRvb2xib3ggLz5cbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBDUkNMX0FDQ0VMRVJBVElPTjogQmxvY2sgPSB7XG4gIGJsb2NrSnNvbjoge1xuICAgIHR5cGU6ICdjcmNsX2FjY2VsZXJhdGlvbicsXG4gICAgbWVzc2FnZTA6ICcle0JLWV9DUkNMX0FDQ0VMRVJBVElPTn0nLFxuICAgIGFyZ3MwOiBbXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImZpZWxkX251bWJlclwiLFxuICAgICAgICBcIm5hbWVcIjogXCJhY2NlbGVyYXRpb25cIlxuICAgICAgfVxuICAgIF0sXG4gICAgaW5wdXRzSW5saW5lOiB0cnVlLFxuICAgIHByZXZpb3VzU3RhdGVtZW50OiBudWxsLFxuICAgIG5leHRTdGF0ZW1lbnQ6IG51bGwsXG4gICAgY29sb3VyOiA3MCxcbiAgICB0b29sdGlwOiAnJXtCS1lfQ1JDTF9BQ0NFTEVSQVRJT05fVE9PTFRJUH0nLFxuICAgIGhlbHBVcmw6ICcvaGVscCNibG9ja2x5LW1pc2MnLFxuICAgIGV4dGVuc2lvbnM6IFsncmVxdWlyZXNfYXN5bmNfanNfZnVuY3Rpb24nXSxcbiAgfSxcbiAgZ2VuZXJhdG9yczoge1xuICAgIEphdmFTY3JpcHQ6IGJsb2NrID0+IHtcbiAgICAgIGNvbnN0IGFjY2VsZXJhdGlvbiA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ2FjY2VsZXJhdGlvbicpO1xuICAgICAgLy8gPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogY3JjbF9hY2NlbGVyYXRpb24tYm9keS1KYXZhU2NyaXB0PlxuICAgICAgLy8gVE9ETyBnZW5lcmF0ZSBjb2RlXG4gICAgICBjb25zdCBjb2RlID0gJyc7XG4gICAgICByb2JvdHMuYWRkVG9RdWV1ZShyb2JvdHNbMF0sIENvbW1hbmRGYWN0b3J5LlNldFRyYW5zQWNjZWwoJ1NldCBhY2NlbGFyYXRpb24gc3BlZWQnLCBhY2NlbGVyYXRpb24pKVxuICAgICAgcmV0dXJuIGNvZGU7XG4gICAgICAvLyA8L0dTTCBjdXN0b21pemFibGU6IGNyY2xfYWNjZWxlcmF0aW9uLWJvZHktSmF2YVNjcmlwdD5cbiAgICB9LFxuICAgIFB5dGhvbjogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgYWNjZWxlcmF0aW9uID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgnYWNjZWxlcmF0aW9uJyk7XG4gICAgICAvLyA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiBjcmNsX2FjY2VsZXJhdGlvbi1ib2R5LVB5dGhvbj5cbiAgICAgIC8vIFRPRE8gZ2VuZXJhdGUgY29kZVxuICAgICAgY29uc3QgY29kZSA9ICcnO1xuICAgICAgcmV0dXJuIGNvZGU7XG4gICAgICAvLyA8L0dTTCBjdXN0b21pemFibGU6IGNyY2xfYWNjZWxlcmF0aW9uLWJvZHktUHl0aG9uPlxuICAgIH0sXG4gIH0sXG4gIHRvb2xib3hCbG9ja3M6IHtcbiAgICBkZWZhdWx0OiAoKSA9PiAoXG4gICAgICA8YmxvY2sgdHlwZT1cImNyY2xfYWNjZWxlcmF0aW9uXCI+XG4gICAgICAgIHsvKiA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiBjcmNsX2FjY2VsZXJhdGlvbi1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgICB7LyogPC9HU0wgY3VzdG9taXphYmxlOiBjcmNsX2FjY2VsZXJhdGlvbi1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgPC9ibG9jaz5cbiAgICApLFxuICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGNyY2xfYWNjZWxlcmF0aW9uLWV4dHJhLXRvb2xib3ggLz5cbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBQUklOVF9CTE9DSzogQmxvY2sgPSB7XG4gIGJsb2NrSnNvbjoge1xuICAgIHR5cGU6ICdwcmludF9ibG9jaycsXG4gICAgbWVzc2FnZTA6ICcle0JLWV9QUklOVF9CTE9DS30nLFxuICAgIGFyZ3MwOiBbXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImlucHV0X3ZhbHVlXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIlRFWFRcIixcbiAgICAgICAgXCJjaGVja1wiOiBbXG4gICAgICAgICAgXCJOdW1iZXJcIixcbiAgICAgICAgICBcIkJvb2xlYW5cIixcbiAgICAgICAgICBcIlN0cmluZ1wiLFxuICAgICAgICAgIFwiVmVjdG9yXCJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0sXG4gICAgaW5wdXRzSW5saW5lOiB0cnVlLFxuICAgIHByZXZpb3VzU3RhdGVtZW50OiBudWxsLFxuICAgIG5leHRTdGF0ZW1lbnQ6IG51bGwsXG4gICAgY29sb3VyOiAzMTEsXG4gICAgdG9vbHRpcDogJyV7QktZX1BSSU5UX0JMT0NLX1RPT0xUSVB9JyxcbiAgICBoZWxwVXJsOiAnL2hlbHAjYmxvY2tseS1taXNjJyxcbiAgfSxcbiAgZ2VuZXJhdG9yczoge1xuICAgIEphdmFTY3JpcHQ6IGJsb2NrID0+IHtcbiAgICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IHByaW50X2Jsb2NrLWJvZHktSmF2YVNjcmlwdD5cbiAgICAgIGNvbnN0IHRleHQgPSBCbG9ja2x5LkphdmFTY3JpcHQudmFsdWVUb0NvZGUoYmxvY2ssICdURVhUJywgQmxvY2tseS5KYXZhU2NyaXB0Lk9SREVSX0FUT01JQyk7XG4gICAgICAvLyBUT0RPIGdlbmVyYXRlIGNvZGVcbiAgICAgIGNvbnN0IGNvZGUgPSAnJztcbiAgICAgIHJldHVybiBjb2RlO1xuICAgICAgLy8gPC9HU0wgY3VzdG9taXphYmxlOiBwcmludF9ibG9jay1ib2R5LUphdmFTY3JpcHQ+XG4gICAgfSxcbiAgICBQeXRob246IGJsb2NrID0+IHtcbiAgICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IHByaW50X2Jsb2NrLWJvZHktUHl0aG9uPlxuICAgICAgY29uc3QgdGV4dCA9IEJsb2NrbHkuUHl0aG9uLnZhbHVlVG9Db2RlKGJsb2NrLCAnVEVYVCcsIEJsb2NrbHkuUHl0aG9uLk9SREVSX0FUT01JQyk7XG4gICAgICAvLyBUT0RPIGdlbmVyYXRlIGNvZGVcbiAgICAgIGNvbnN0IGNvZGUgPSAnJztcbiAgICAgIHJldHVybiBjb2RlO1xuICAgICAgLy8gPC9HU0wgY3VzdG9taXphYmxlOiBwcmludF9ibG9jay1ib2R5LVB5dGhvbj5cbiAgICB9LFxuICB9LFxuICB0b29sYm94QmxvY2tzOiB7XG4gICAgZGVmYXVsdDogKCkgPT4gKFxuICAgICAgPGJsb2NrIHR5cGU9XCJwcmludF9ibG9ja1wiPlxuICAgICAgICB7LyogPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogcHJpbnRfYmxvY2stZGVmYXVsdC10b29sYm94PiAqL31cbiAgICAgICAgey8qIDwvR1NMIGN1c3RvbWl6YWJsZTogcHJpbnRfYmxvY2stZGVmYXVsdC10b29sYm94PiAqL31cbiAgICAgIDwvYmxvY2s+XG4gICAgKSxcbiAgICAvLyA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiBwcmludF9ibG9jay1leHRyYS10b29sYm94IC8+XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgR0VUX0lOUFVUX0JMT0NLOiBCbG9jayA9IHtcbiAgYmxvY2tKc29uOiB7XG4gICAgdHlwZTogJ2dldF9pbnB1dF9ibG9jaycsXG4gICAgbWVzc2FnZTA6ICcle0JLWV9HRVRfSU5QVVRfQkxPQ0t9JyxcbiAgICBhcmdzMDogW10sXG4gICAgb3V0cHV0OiAnU3RyaW5nJyxcbiAgICBjb2xvdXI6IDcwLFxuICAgIHRvb2x0aXA6ICcle0JLWV9HRVRfSU5QVVRfQkxPQ0tfVE9PTFRJUH0nLFxuICAgIGhlbHBVcmw6ICcvaGVscCNibG9ja2x5LW1pc2MnLFxuICAgIGV4dGVuc2lvbnM6IFsncmVxdWlyZXNfYXN5bmNfanNfZnVuY3Rpb24nXSxcbiAgfSxcbiAgZ2VuZXJhdG9yczoge1xuICAgIEphdmFTY3JpcHQ6IGJsb2NrID0+IHtcbiAgICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGdldF9pbnB1dF9ibG9jay1ib2R5LUphdmFTY3JpcHQ+XG4gICAgICAvLyBUT0RPIGdlbmVyYXRlIGNvZGVcbiAgICAgIGNvbnN0IGNvZGUgPSAnJztcbiAgICAgIHJldHVybiBbY29kZSwgQmxvY2tseS5KYXZhU2NyaXB0Lk9SREVSX05PTkVdO1xuICAgICAgLy8gPC9HU0wgY3VzdG9taXphYmxlOiBnZXRfaW5wdXRfYmxvY2stYm9keS1KYXZhU2NyaXB0PlxuICAgIH0sXG4gICAgUHl0aG9uOiBibG9jayA9PiB7XG4gICAgICAvLyA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiBnZXRfaW5wdXRfYmxvY2stYm9keS1QeXRob24+XG4gICAgICAvLyBUT0RPIGdlbmVyYXRlIGNvZGVcbiAgICAgIGNvbnN0IGNvZGUgPSAnJztcbiAgICAgIHJldHVybiBbY29kZSwgQmxvY2tseS5QeXRob24uT1JERVJfTk9ORV07XG4gICAgICAvLyA8L0dTTCBjdXN0b21pemFibGU6IGdldF9pbnB1dF9ibG9jay1ib2R5LVB5dGhvbj5cbiAgICB9LFxuICB9LFxuICB0b29sYm94QmxvY2tzOiB7XG4gICAgZGVmYXVsdDogKCkgPT4gKFxuICAgICAgPGJsb2NrIHR5cGU9XCJnZXRfaW5wdXRfYmxvY2tcIj5cbiAgICAgICAgey8qIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGdldF9pbnB1dF9ibG9jay1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgICB7LyogPC9HU0wgY3VzdG9taXphYmxlOiBnZXRfaW5wdXRfYmxvY2stZGVmYXVsdC10b29sYm94PiAqL31cbiAgICAgIDwvYmxvY2s+XG4gICAgKSxcbiAgICAvLyA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiBnZXRfaW5wdXRfYmxvY2stZXh0cmEtdG9vbGJveCAvPlxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IFJPVEFUSU9OX0FCQzogQmxvY2sgPSB7XG4gIGJsb2NrSnNvbjoge1xuICAgIHR5cGU6ICdyb3RhdGlvbl9hYmMnLFxuICAgIG1lc3NhZ2UwOiAnJXtCS1lfUk9UQVRJT05fQUJDfScsXG4gICAgYXJnczA6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiZmllbGRfbnVtYmVyXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkFcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiAwLFxuICAgICAgICBcIm1pblwiOiAwLFxuICAgICAgICBcIm1heFwiOiAzNjBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImZpZWxkX251bWJlclwiLFxuICAgICAgICBcIm5hbWVcIjogXCJCXCIsXG4gICAgICAgIFwidmFsdWVcIjogMCxcbiAgICAgICAgXCJtaW5cIjogMCxcbiAgICAgICAgXCJtYXhcIjogMzYwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJmaWVsZF9udW1iZXJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiQ1wiLFxuICAgICAgICBcInZhbHVlXCI6IDkwLFxuICAgICAgICBcIm1pblwiOiAwLFxuICAgICAgICBcIm1heFwiOiAzNjBcbiAgICAgIH1cbiAgICBdLFxuICAgIG91dHB1dDogJ1JvdGF0aW9uJyxcbiAgICBjb2xvdXI6IDMxMSxcbiAgICB0b29sdGlwOiAnJXtCS1lfUk9UQVRJT05fQUJDX1RPT0xUSVB9JyxcbiAgICBoZWxwVXJsOiAnL2hlbHAjYmxvY2tseS1taXNjJyxcbiAgICBleHRlbnNpb25zOiBbJ3JlcXVpcmVzX2FzeW5jX2pzX2Z1bmN0aW9uJ10sXG4gIH0sXG4gIGdlbmVyYXRvcnM6IHtcbiAgICBKYXZhU2NyaXB0OiBibG9jayA9PiB7XG4gICAgICBjb25zdCBhID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgnQScpO1xuICAgICAgY29uc3QgYiA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ0InKTtcbiAgICAgIGNvbnN0IGMgPSBibG9jay5nZXRGaWVsZFZhbHVlKCdDJyk7XG4gICAgICAvLyA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiByb3RhdGlvbl9hYmMtYm9keS1KYXZhU2NyaXB0PlxuICAgICAgLy8gVE9ETyBnZW5lcmF0ZSBjb2RlXG4gICAgICBjb25zdCBjb2RlID0gJyc7XG4gICAgICByZXR1cm4gW2NvZGUsIEJsb2NrbHkuSmF2YVNjcmlwdC5PUkRFUl9OT05FXTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogcm90YXRpb25fYWJjLWJvZHktSmF2YVNjcmlwdD5cbiAgICB9LFxuICAgIFB5dGhvbjogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgYSA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ0EnKTtcbiAgICAgIGNvbnN0IGIgPSBibG9jay5nZXRGaWVsZFZhbHVlKCdCJyk7XG4gICAgICBjb25zdCBjID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgnQycpO1xuICAgICAgLy8gPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogcm90YXRpb25fYWJjLWJvZHktUHl0aG9uPlxuICAgICAgLy8gVE9ETyBnZW5lcmF0ZSBjb2RlXG4gICAgICBjb25zdCBjb2RlID0gJyc7XG4gICAgICByZXR1cm4gW2NvZGUsIEJsb2NrbHkuUHl0aG9uLk9SREVSX05PTkVdO1xuICAgICAgLy8gPC9HU0wgY3VzdG9taXphYmxlOiByb3RhdGlvbl9hYmMtYm9keS1QeXRob24+XG4gICAgfSxcbiAgfSxcbiAgdG9vbGJveEJsb2Nrczoge1xuICAgIGRlZmF1bHQ6ICgpID0+IChcbiAgICAgIDxibG9jayB0eXBlPVwicm90YXRpb25fYWJjXCI+XG4gICAgICAgIHsvKiA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiByb3RhdGlvbl9hYmMtZGVmYXVsdC10b29sYm94PiAqL31cbiAgICAgICAgey8qIDwvR1NMIGN1c3RvbWl6YWJsZTogcm90YXRpb25fYWJjLWRlZmF1bHQtdG9vbGJveD4gKi99XG4gICAgICA8L2Jsb2NrPlxuICAgICksXG4gICAgLy8gPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogcm90YXRpb25fYWJjLWV4dHJhLXRvb2xib3ggLz5cbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBWRUNUT1JfWFlaOiBCbG9jayA9IHtcbiAgYmxvY2tKc29uOiB7XG4gICAgdHlwZTogJ3ZlY3Rvcl94eXonLFxuICAgIG1lc3NhZ2UwOiAnJXtCS1lfVkVDVE9SX1hZWn0nLFxuICAgIGFyZ3MwOiBbXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImZpZWxkX251bWJlclwiLFxuICAgICAgICBcIm5hbWVcIjogXCJYXCIsXG4gICAgICAgIFwidmFsdWVcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiZmllbGRfbnVtYmVyXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIllcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJmaWVsZF9udW1iZXJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiWlwiLFxuICAgICAgICBcInZhbHVlXCI6IDBcbiAgICAgIH1cbiAgICBdLFxuICAgIG91dHB1dDogJ1ZlY3RvcicsXG4gICAgY29sb3VyOiA3MCxcbiAgICB0b29sdGlwOiAnJXtCS1lfVkVDVE9SX1hZWl9UT09MVElQfScsXG4gICAgaGVscFVybDogJy9oZWxwI2Jsb2NrbHktbWlzYycsXG4gICAgZXh0ZW5zaW9uczogWydyZXF1aXJlc19hc3luY19qc19mdW5jdGlvbiddLFxuICB9LFxuICBnZW5lcmF0b3JzOiB7XG4gICAgSmF2YVNjcmlwdDogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgeCA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ1gnKTtcbiAgICAgIGNvbnN0IHkgPSBibG9jay5nZXRGaWVsZFZhbHVlKCdZJyk7XG4gICAgICBjb25zdCB6ID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgnWicpO1xuICAgICAgLy8gPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogdmVjdG9yX3h5ei1ib2R5LUphdmFTY3JpcHQ+XG4gICAgICAvLyBUT0RPIGdlbmVyYXRlIGNvZGVcbiAgICAgIGNvbnN0IGNvZGUgPSAnJztcbiAgICAgIHJldHVybiBbY29kZSwgQmxvY2tseS5KYXZhU2NyaXB0Lk9SREVSX05PTkVdO1xuICAgICAgLy8gPC9HU0wgY3VzdG9taXphYmxlOiB2ZWN0b3JfeHl6LWJvZHktSmF2YVNjcmlwdD5cbiAgICB9LFxuICAgIFB5dGhvbjogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgeCA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ1gnKTtcbiAgICAgIGNvbnN0IHkgPSBibG9jay5nZXRGaWVsZFZhbHVlKCdZJyk7XG4gICAgICBjb25zdCB6ID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgnWicpO1xuICAgICAgLy8gPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogdmVjdG9yX3h5ei1ib2R5LVB5dGhvbj5cbiAgICAgIC8vIFRPRE8gZ2VuZXJhdGUgY29kZVxuICAgICAgY29uc3QgY29kZSA9ICcnO1xuICAgICAgcmV0dXJuIFtjb2RlLCBCbG9ja2x5LlB5dGhvbi5PUkRFUl9OT05FXTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogdmVjdG9yX3h5ei1ib2R5LVB5dGhvbj5cbiAgICB9LFxuICB9LFxuICB0b29sYm94QmxvY2tzOiB7XG4gICAgZGVmYXVsdDogKCkgPT4gKFxuICAgICAgPGJsb2NrIHR5cGU9XCJ2ZWN0b3JfeHl6XCI+XG4gICAgICAgIHsvKiA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiB2ZWN0b3JfeHl6LWRlZmF1bHQtdG9vbGJveD4gKi99XG4gICAgICAgIHsvKiA8L0dTTCBjdXN0b21pemFibGU6IHZlY3Rvcl94eXotZGVmYXVsdC10b29sYm94PiAqL31cbiAgICAgIDwvYmxvY2s+XG4gICAgKSxcbiAgICAvLyA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiB2ZWN0b3JfeHl6LWV4dHJhLXRvb2xib3ggLz5cbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBWRUNUT1JfU0tBTEFSOiBCbG9jayA9IHtcbiAgYmxvY2tKc29uOiB7XG4gICAgdHlwZTogJ3ZlY3Rvcl9za2FsYXInLFxuICAgIG1lc3NhZ2UwOiAnJXtCS1lfVkVDVE9SX1NLQUxBUn0nLFxuICAgIGFyZ3MwOiBbXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImlucHV0X3ZhbHVlXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIlZlY3RvclwiLFxuICAgICAgICBcImNoZWNrXCI6IFwiVmVjdG9yXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImZpZWxkX251bWJlclwiLFxuICAgICAgICBcIm5hbWVcIjogXCJTa2FsYXJcIlxuICAgICAgfVxuICAgIF0sXG4gICAgaW5wdXRzSW5saW5lOiB0cnVlLFxuICAgIHByZXZpb3VzU3RhdGVtZW50OiBudWxsLFxuICAgIG5leHRTdGF0ZW1lbnQ6IG51bGwsXG4gICAgY29sb3VyOiAyODAsXG4gICAgdG9vbHRpcDogJyV7QktZX1ZFQ1RPUl9TS0FMQVJfVE9PTFRJUH0nLFxuICAgIGhlbHBVcmw6ICcvaGVscCNibG9ja2x5LW1pc2MnLFxuICAgIGV4dGVuc2lvbnM6IFsncmVxdWlyZXNfYXN5bmNfanNfZnVuY3Rpb24nXSxcbiAgfSxcbiAgZ2VuZXJhdG9yczoge1xuICAgIEphdmFTY3JpcHQ6IGJsb2NrID0+IHtcbiAgICAgIGNvbnN0IHNrYWxhciA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ1NrYWxhcicpO1xuICAgICAgLy8gPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogdmVjdG9yX3NrYWxhci1ib2R5LUphdmFTY3JpcHQ+XG4gICAgICBjb25zdCB2ZWN0b3IgPSBCbG9ja2x5LkphdmFTY3JpcHQudmFsdWVUb0NvZGUoYmxvY2ssICdWZWN0b3InLCBCbG9ja2x5LkphdmFTY3JpcHQuT1JERVJfQVRPTUlDKTtcbiAgICAgIC8vIFRPRE8gZ2VuZXJhdGUgY29kZVxuICAgICAgY29uc3QgY29kZSA9ICcnO1xuICAgICAgcmV0dXJuIGNvZGU7XG4gICAgICAvLyA8L0dTTCBjdXN0b21pemFibGU6IHZlY3Rvcl9za2FsYXItYm9keS1KYXZhU2NyaXB0PlxuICAgIH0sXG4gICAgUHl0aG9uOiBibG9jayA9PiB7XG4gICAgICBjb25zdCBza2FsYXIgPSBibG9jay5nZXRGaWVsZFZhbHVlKCdTa2FsYXInKTtcbiAgICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IHZlY3Rvcl9za2FsYXItYm9keS1QeXRob24+XG4gICAgICBjb25zdCB2ZWN0b3IgPSBCbG9ja2x5LlB5dGhvbi52YWx1ZVRvQ29kZShibG9jaywgJ1ZlY3RvcicsIEJsb2NrbHkuUHl0aG9uLk9SREVSX0FUT01JQyk7XG4gICAgICAvLyBUT0RPIGdlbmVyYXRlIGNvZGVcbiAgICAgIGNvbnN0IGNvZGUgPSAnJztcbiAgICAgIHJldHVybiBjb2RlO1xuICAgICAgLy8gPC9HU0wgY3VzdG9taXphYmxlOiB2ZWN0b3Jfc2thbGFyLWJvZHktUHl0aG9uPlxuICAgIH0sXG4gIH0sXG4gIHRvb2xib3hCbG9ja3M6IHtcbiAgICBkZWZhdWx0OiAoKSA9PiAoXG4gICAgICA8YmxvY2sgdHlwZT1cInZlY3Rvcl9za2FsYXJcIj5cbiAgICAgICAgey8qIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IHZlY3Rvcl9za2FsYXItZGVmYXVsdC10b29sYm94PiAqL31cbiAgICAgICAgey8qIDwvR1NMIGN1c3RvbWl6YWJsZTogdmVjdG9yX3NrYWxhci1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgPC9ibG9jaz5cbiAgICApLFxuICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IHZlY3Rvcl9za2FsYXItZXh0cmEtdG9vbGJveCAvPlxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IENSQ0xfTU9WRV9WRUNUT1JfUk9UQVRJT046IEJsb2NrID0ge1xuICBibG9ja0pzb246IHtcbiAgICB0eXBlOiAnY3JjbF9tb3ZlX3ZlY3Rvcl9yb3RhdGlvbicsXG4gICAgbWVzc2FnZTA6ICcle0JLWV9DUkNMX01PVkVfVkVDVE9SX1JPVEFUSU9OfScsXG4gICAgYXJnczA6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRfdmFsdWVcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiVmVjdG9yXCIsXG4gICAgICAgIFwiY2hlY2tcIjogXCJWZWN0b3JcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRfdmFsdWVcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiUm90YXRpb25cIixcbiAgICAgICAgXCJjaGVja1wiOiBcIlJvdGF0aW9uXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImZpZWxkX2NoZWNrYm94XCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkxpbmVhclwiXG4gICAgICB9XG4gICAgXSxcbiAgICBpbnB1dHNJbmxpbmU6IHRydWUsXG4gICAgcHJldmlvdXNTdGF0ZW1lbnQ6IG51bGwsXG4gICAgbmV4dFN0YXRlbWVudDogbnVsbCxcbiAgICBjb2xvdXI6IDI4MCxcbiAgICB0b29sdGlwOiAnJXtCS1lfQ1JDTF9NT1ZFX1ZFQ1RPUl9ST1RBVElPTl9UT09MVElQfScsXG4gICAgaGVscFVybDogJy9oZWxwI2Jsb2NrbHktbWlzYycsXG4gICAgZXh0ZW5zaW9uczogWydyZXF1aXJlc19hc3luY19qc19mdW5jdGlvbiddLFxuICB9LFxuICBnZW5lcmF0b3JzOiB7XG4gICAgSmF2YVNjcmlwdDogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgbGluZWFyID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgnTGluZWFyJykgPT09ICdUUlVFJztcbiAgICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGNyY2xfbW92ZV92ZWN0b3Jfcm90YXRpb24tYm9keS1KYXZhU2NyaXB0PlxuICAgICAgY29uc3QgdmVjdG9yID0gQmxvY2tseS5KYXZhU2NyaXB0LnZhbHVlVG9Db2RlKGJsb2NrLCAnVmVjdG9yJywgQmxvY2tseS5KYXZhU2NyaXB0Lk9SREVSX0FUT01JQyk7XG4gICAgICBjb25zdCByb3RhdGlvbiA9IEJsb2NrbHkuSmF2YVNjcmlwdC52YWx1ZVRvQ29kZShibG9jaywgJ1JvdGF0aW9uJywgQmxvY2tseS5KYXZhU2NyaXB0Lk9SREVSX0FUT01JQyk7XG4gICAgICAvLyBUT0RPIGdlbmVyYXRlIGNvZGVcbiAgICAgIGNvbnN0IGNvZGUgPSAnJztcbiAgICAgIHJldHVybiBjb2RlO1xuICAgICAgLy8gPC9HU0wgY3VzdG9taXphYmxlOiBjcmNsX21vdmVfdmVjdG9yX3JvdGF0aW9uLWJvZHktSmF2YVNjcmlwdD5cbiAgICB9LFxuICAgIFB5dGhvbjogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgbGluZWFyID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgnTGluZWFyJykgPT09ICdUUlVFJztcbiAgICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGNyY2xfbW92ZV92ZWN0b3Jfcm90YXRpb24tYm9keS1QeXRob24+XG4gICAgICBjb25zdCB2ZWN0b3IgPSBCbG9ja2x5LlB5dGhvbi52YWx1ZVRvQ29kZShibG9jaywgJ1ZlY3RvcicsIEJsb2NrbHkuUHl0aG9uLk9SREVSX0FUT01JQyk7XG4gICAgICBjb25zdCByb3RhdGlvbiA9IEJsb2NrbHkuUHl0aG9uLnZhbHVlVG9Db2RlKGJsb2NrLCAnUm90YXRpb24nLCBCbG9ja2x5LlB5dGhvbi5PUkRFUl9BVE9NSUMpO1xuICAgICAgLy8gVE9ETyBnZW5lcmF0ZSBjb2RlXG4gICAgICBjb25zdCBjb2RlID0gJyc7XG4gICAgICByZXR1cm4gY29kZTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogY3JjbF9tb3ZlX3ZlY3Rvcl9yb3RhdGlvbi1ib2R5LVB5dGhvbj5cbiAgICB9LFxuICB9LFxuICB0b29sYm94QmxvY2tzOiB7XG4gICAgZGVmYXVsdDogKCkgPT4gKFxuICAgICAgPGJsb2NrIHR5cGU9XCJjcmNsX21vdmVfdmVjdG9yX3JvdGF0aW9uXCI+XG4gICAgICAgIHsvKiA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiBjcmNsX21vdmVfdmVjdG9yX3JvdGF0aW9uLWRlZmF1bHQtdG9vbGJveD4gKi99XG4gICAgICAgIHsvKiA8L0dTTCBjdXN0b21pemFibGU6IGNyY2xfbW92ZV92ZWN0b3Jfcm90YXRpb24tZGVmYXVsdC10b29sYm94PiAqL31cbiAgICAgIDwvYmxvY2s+XG4gICAgKSxcbiAgICAvLyA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiBjcmNsX21vdmVfdmVjdG9yX3JvdGF0aW9uLWV4dHJhLXRvb2xib3ggLz5cbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBDUkNMX01PVkVfRElSRUNUSU9OOiBCbG9jayA9IHtcbiAgYmxvY2tKc29uOiB7XG4gICAgdHlwZTogJ2NyY2xfbW92ZV9kaXJlY3Rpb24nLFxuICAgIG1lc3NhZ2UwOiAnJXtCS1lfQ1JDTF9NT1ZFX0RJUkVDVElPTn0nLFxuICAgIGFyZ3MwOiBbXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImZpZWxkX251bWJlclwiLFxuICAgICAgICBcIm5hbWVcIjogXCJEaXN0YW5jZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJmaWVsZF9kcm9wZG93blwiLFxuICAgICAgICBcIm5hbWVcIjogXCJEaXJlY3Rpb25cIixcbiAgICAgICAgXCJvcHRpb25zXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcImZvcndhcmRcIixcbiAgICAgICAgICAgIFwiZm9yd2FyZFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcImJhY2t3YXJkXCIsXG4gICAgICAgICAgICBcImJhY2t3YXJkXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwibGVmdFwiLFxuICAgICAgICAgICAgXCJsZWZ0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwicmlnaHRcIixcbiAgICAgICAgICAgIFwicmlnaHRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJ1cFwiLFxuICAgICAgICAgICAgXCJ1cFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcImRvd25cIixcbiAgICAgICAgICAgIFwiZG93blwiXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXSxcbiAgICBpbnB1dHNJbmxpbmU6IHRydWUsXG4gICAgcHJldmlvdXNTdGF0ZW1lbnQ6IG51bGwsXG4gICAgbmV4dFN0YXRlbWVudDogbnVsbCxcbiAgICBjb2xvdXI6IDI4MCxcbiAgICB0b29sdGlwOiAnJXtCS1lfQ1JDTF9NT1ZFX0RJUkVDVElPTl9UT09MVElQfScsXG4gICAgaGVscFVybDogJy9oZWxwI2Jsb2NrbHktbWlzYycsXG4gIH0sXG4gIGdlbmVyYXRvcnM6IHtcbiAgICBKYXZhU2NyaXB0OiBibG9jayA9PiB7XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ0Rpc3RhbmNlJyk7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSBibG9jay5nZXRGaWVsZFZhbHVlKCdEaXJlY3Rpb24nKTtcbiAgICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGNyY2xfbW92ZV9kaXJlY3Rpb24tYm9keS1KYXZhU2NyaXB0PlxuICAgICAgLy8gVE9ETyBnZW5lcmF0ZSBjb2RlXG4gICAgICBjb25zdCBjb2RlID0gJyc7XG4gICAgICByZXR1cm4gY29kZTtcbiAgICAgIC8vIDwvR1NMIGN1c3RvbWl6YWJsZTogY3JjbF9tb3ZlX2RpcmVjdGlvbi1ib2R5LUphdmFTY3JpcHQ+XG4gICAgfSxcbiAgICBQeXRob246IGJsb2NrID0+IHtcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgnRGlzdGFuY2UnKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ0RpcmVjdGlvbicpO1xuICAgICAgLy8gPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogY3JjbF9tb3ZlX2RpcmVjdGlvbi1ib2R5LVB5dGhvbj5cbiAgICAgIC8vIFRPRE8gZ2VuZXJhdGUgY29kZVxuICAgICAgY29uc3QgY29kZSA9ICcnO1xuICAgICAgcmV0dXJuIGNvZGU7XG4gICAgICAvLyA8L0dTTCBjdXN0b21pemFibGU6IGNyY2xfbW92ZV9kaXJlY3Rpb24tYm9keS1QeXRob24+XG4gICAgfSxcbiAgfSxcbiAgdG9vbGJveEJsb2Nrczoge1xuICAgIGRlZmF1bHQ6ICgpID0+IChcbiAgICAgIDxibG9jayB0eXBlPVwiY3JjbF9tb3ZlX2RpcmVjdGlvblwiPlxuICAgICAgICB7LyogPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogY3JjbF9tb3ZlX2RpcmVjdGlvbi1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgICB7LyogPC9HU0wgY3VzdG9taXphYmxlOiBjcmNsX21vdmVfZGlyZWN0aW9uLWRlZmF1bHQtdG9vbGJveD4gKi99XG4gICAgICA8L2Jsb2NrPlxuICAgICksXG4gICAgLy8gPGRlZmF1bHQgR1NMIGN1c3RvbWl6YWJsZTogY3JjbF9tb3ZlX2RpcmVjdGlvbi1leHRyYS10b29sYm94IC8+XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgQ1JDTF9ST1RBVEVfWjogQmxvY2sgPSB7XG4gIGJsb2NrSnNvbjoge1xuICAgIHR5cGU6ICdjcmNsX3JvdGF0ZV96JyxcbiAgICBtZXNzYWdlMDogJyV7QktZX0NSQ0xfUk9UQVRFX1p9JyxcbiAgICBhcmdzMDogW1xuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJmaWVsZF9kcm9wZG93blwiLFxuICAgICAgICBcIm5hbWVcIjogXCJSb3RhdGlvbkRpcmVjdGlvblwiLFxuICAgICAgICBcIm9wdGlvbnNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwiY2xvY2t3aXNlXCIsXG4gICAgICAgICAgICBcImNsb2Nrd2lzZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcImNvdW50ZXJjbG9ja3dpc2VcIixcbiAgICAgICAgICAgIFwiY291bnRlcmNsb2Nrd2lzZVwiXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcInR5cGVcIjogXCJmaWVsZF9udW1iZXJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiUm90YXRpb25aXCIsXG4gICAgICAgIFwidmFsdWVcIjogOTAsXG4gICAgICAgIFwibWluXCI6IDAsXG4gICAgICAgIFwibWF4XCI6IDM2MFxuICAgICAgfVxuICAgIF0sXG4gICAgaW5wdXRzSW5saW5lOiB0cnVlLFxuICAgIHByZXZpb3VzU3RhdGVtZW50OiBudWxsLFxuICAgIG5leHRTdGF0ZW1lbnQ6IG51bGwsXG4gICAgY29sb3VyOiAyODAsXG4gICAgdG9vbHRpcDogJyV7QktZX0NSQ0xfUk9UQVRFX1pfVE9PTFRJUH0nLFxuICAgIGhlbHBVcmw6ICcvaGVscCNibG9ja2x5LW1pc2MnLFxuICB9LFxuICBnZW5lcmF0b3JzOiB7XG4gICAgSmF2YVNjcmlwdDogYmxvY2sgPT4ge1xuICAgICAgY29uc3Qgcm90YXRpb25kaXJlY3Rpb24gPSBibG9jay5nZXRGaWVsZFZhbHVlKCdSb3RhdGlvbkRpcmVjdGlvbicpO1xuICAgICAgY29uc3Qgcm90YXRpb256ID0gYmxvY2suZ2V0RmllbGRWYWx1ZSgnUm90YXRpb25aJyk7XG4gICAgICAvLyA8ZGVmYXVsdCBHU0wgY3VzdG9taXphYmxlOiBjcmNsX3JvdGF0ZV96LWJvZHktSmF2YVNjcmlwdD5cbiAgICAgIC8vIFRPRE8gZ2VuZXJhdGUgY29kZVxuICAgICAgY29uc3QgY29kZSA9ICcnO1xuICAgICAgcmV0dXJuIGNvZGU7XG4gICAgICAvLyA8L0dTTCBjdXN0b21pemFibGU6IGNyY2xfcm90YXRlX3otYm9keS1KYXZhU2NyaXB0PlxuICAgIH0sXG4gICAgUHl0aG9uOiBibG9jayA9PiB7XG4gICAgICBjb25zdCByb3RhdGlvbmRpcmVjdGlvbiA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ1JvdGF0aW9uRGlyZWN0aW9uJyk7XG4gICAgICBjb25zdCByb3RhdGlvbnogPSBibG9jay5nZXRGaWVsZFZhbHVlKCdSb3RhdGlvblonKTtcbiAgICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGNyY2xfcm90YXRlX3otYm9keS1QeXRob24+XG4gICAgICAvLyBUT0RPIGdlbmVyYXRlIGNvZGVcbiAgICAgIGNvbnN0IGNvZGUgPSAnJztcbiAgICAgIHJldHVybiBjb2RlO1xuICAgICAgLy8gPC9HU0wgY3VzdG9taXphYmxlOiBjcmNsX3JvdGF0ZV96LWJvZHktUHl0aG9uPlxuICAgIH0sXG4gIH0sXG4gIHRvb2xib3hCbG9ja3M6IHtcbiAgICBkZWZhdWx0OiAoKSA9PiAoXG4gICAgICA8YmxvY2sgdHlwZT1cImNyY2xfcm90YXRlX3pcIj5cbiAgICAgICAgey8qIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGNyY2xfcm90YXRlX3otZGVmYXVsdC10b29sYm94PiAqL31cbiAgICAgICAgey8qIDwvR1NMIGN1c3RvbWl6YWJsZTogY3JjbF9yb3RhdGVfei1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgPC9ibG9jaz5cbiAgICApLFxuICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IGNyY2xfcm90YXRlX3otZXh0cmEtdG9vbGJveCAvPlxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IFZFQ1RPUl9PUEVSQVRJT046IEJsb2NrID0ge1xuICBibG9ja0pzb246IHtcbiAgICB0eXBlOiAndmVjdG9yX29wZXJhdGlvbicsXG4gICAgbWVzc2FnZTA6ICcle0JLWV9WRUNUT1JfT1BFUkFUSU9OfScsXG4gICAgYXJnczA6IFtcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRfdmFsdWVcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiVmVjdG9yMVwiLFxuICAgICAgICBcImNoZWNrXCI6IFwiVmVjdG9yXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwidHlwZVwiOiBcImZpZWxkX2Ryb3Bkb3duXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIm1hdGhPcGVyYXRpb25cIixcbiAgICAgICAgXCJvcHRpb25zXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcIitcIixcbiAgICAgICAgICAgIFwiUGx1c1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcIi1cIixcbiAgICAgICAgICAgIFwiTWludXNcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCIvXCIsXG4gICAgICAgICAgICBcIkRpdmlzaW9uXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwiKlwiLFxuICAgICAgICAgICAgXCJNdWx0aXBsaWNhdGFpb25cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJkaXN0YW5jZSBiZXR3ZWVuXCIsXG4gICAgICAgICAgICBcIkRpc3RhbmNlIEJldHdlZW5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJub3JtYWxpemVcIixcbiAgICAgICAgICAgIFwiTm9ybWFsaXplXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwibXVsdGlwbGljYXRlIGNvbXBvbmVudHZpc2VcIixcbiAgICAgICAgICAgIFwibXVsdGlwbGljYXRlIGNvbXBvbmVudHZpc2VcIlxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRfdmFsdWVcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiVmVjdG9yMlwiLFxuICAgICAgICBcImNoZWNrXCI6IFwiVmVjdG9yXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG91dHB1dDogJ1ZlY3RvcicsXG4gICAgY29sb3VyOiAyODAsXG4gICAgdG9vbHRpcDogJyV7QktZX1ZFQ1RPUl9PUEVSQVRJT05fVE9PTFRJUH0nLFxuICAgIGhlbHBVcmw6ICcvaGVscCNibG9ja2x5LW1pc2MnLFxuICB9LFxuICBnZW5lcmF0b3JzOiB7XG4gICAgSmF2YVNjcmlwdDogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgbWF0aG9wZXJhdGlvbiA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ21hdGhPcGVyYXRpb24nKTtcbiAgICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IHZlY3Rvcl9vcGVyYXRpb24tYm9keS1KYXZhU2NyaXB0PlxuICAgICAgY29uc3QgdmVjdG9yMSA9IEJsb2NrbHkuSmF2YVNjcmlwdC52YWx1ZVRvQ29kZShibG9jaywgJ1ZlY3RvcjEnLCBCbG9ja2x5LkphdmFTY3JpcHQuT1JERVJfQVRPTUlDKTtcbiAgICAgIGNvbnN0IHZlY3RvcjIgPSBCbG9ja2x5LkphdmFTY3JpcHQudmFsdWVUb0NvZGUoYmxvY2ssICdWZWN0b3IyJywgQmxvY2tseS5KYXZhU2NyaXB0Lk9SREVSX0FUT01JQyk7XG4gICAgICAvLyBUT0RPIGdlbmVyYXRlIGNvZGVcbiAgICAgIGNvbnN0IGNvZGUgPSAnJztcbiAgICAgIHJldHVybiBbY29kZSwgQmxvY2tseS5KYXZhU2NyaXB0Lk9SREVSX05PTkVdO1xuICAgICAgLy8gPC9HU0wgY3VzdG9taXphYmxlOiB2ZWN0b3Jfb3BlcmF0aW9uLWJvZHktSmF2YVNjcmlwdD5cbiAgICB9LFxuICAgIFB5dGhvbjogYmxvY2sgPT4ge1xuICAgICAgY29uc3QgbWF0aG9wZXJhdGlvbiA9IGJsb2NrLmdldEZpZWxkVmFsdWUoJ21hdGhPcGVyYXRpb24nKTtcbiAgICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IHZlY3Rvcl9vcGVyYXRpb24tYm9keS1QeXRob24+XG4gICAgICBjb25zdCB2ZWN0b3IxID0gQmxvY2tseS5QeXRob24udmFsdWVUb0NvZGUoYmxvY2ssICdWZWN0b3IxJywgQmxvY2tseS5QeXRob24uT1JERVJfQVRPTUlDKTtcbiAgICAgIGNvbnN0IHZlY3RvcjIgPSBCbG9ja2x5LlB5dGhvbi52YWx1ZVRvQ29kZShibG9jaywgJ1ZlY3RvcjInLCBCbG9ja2x5LlB5dGhvbi5PUkRFUl9BVE9NSUMpO1xuICAgICAgLy8gVE9ETyBnZW5lcmF0ZSBjb2RlXG4gICAgICBjb25zdCBjb2RlID0gJyc7XG4gICAgICByZXR1cm4gW2NvZGUsIEJsb2NrbHkuUHl0aG9uLk9SREVSX05PTkVdO1xuICAgICAgLy8gPC9HU0wgY3VzdG9taXphYmxlOiB2ZWN0b3Jfb3BlcmF0aW9uLWJvZHktUHl0aG9uPlxuICAgIH0sXG4gIH0sXG4gIHRvb2xib3hCbG9ja3M6IHtcbiAgICBkZWZhdWx0OiAoKSA9PiAoXG4gICAgICA8YmxvY2sgdHlwZT1cInZlY3Rvcl9vcGVyYXRpb25cIj5cbiAgICAgICAgey8qIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IHZlY3Rvcl9vcGVyYXRpb24tZGVmYXVsdC10b29sYm94PiAqL31cbiAgICAgICAgey8qIDwvR1NMIGN1c3RvbWl6YWJsZTogdmVjdG9yX29wZXJhdGlvbi1kZWZhdWx0LXRvb2xib3g+ICovfVxuICAgICAgPC9ibG9jaz5cbiAgICApLFxuICAgIC8vIDxkZWZhdWx0IEdTTCBjdXN0b21pemFibGU6IHZlY3Rvcl9vcGVyYXRpb24tZXh0cmEtdG9vbGJveCAvPlxuICB9LFxufTtcblxuY29uc3QgYmxvY2tzID0gW1xuICBDUkNMX1NFVF9UQ1AsXG4gIENSQ0xfU0VUX1RPT0xfVkFMVUUsXG4gIENSQ0xfU1dJVENIX1RPT0wsXG4gIENSQ0xfV0FJVCxcbiAgQ1JDTF9UT09MX09OX09GRixcbiAgQ1JDTF9WRUxPQ0lUWSxcbiAgQ1JDTF9BQ0NFTEVSQVRJT04sXG4gIFBSSU5UX0JMT0NLLFxuICBHRVRfSU5QVVRfQkxPQ0ssXG4gIFJPVEFUSU9OX0FCQyxcbiAgVkVDVE9SX1hZWixcbiAgVkVDVE9SX1NLQUxBUixcbiAgQ1JDTF9NT1ZFX1ZFQ1RPUl9ST1RBVElPTixcbiAgQ1JDTF9NT1ZFX0RJUkVDVElPTixcbiAgQ1JDTF9ST1RBVEVfWixcbiAgVkVDVE9SX09QRVJBVElPTixcbl07XG5cbmJsb2Nrcy5mb3JFYWNoKHJlZ2lzdGVyQmxvY2tseUJsb2NrKTtcblxuZXhwb3J0IGRlZmF1bHQgYmxvY2tzO1xuIiwiLy8gQGZsb3dcbi8qIGVzbGludC1kaXNhYmxlICovXG5cbmNvbnN0IE1zZyA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgTXNnO1xuXG5Nc2dbJ0NBVF9DVVNUT00nXSA9ICdTcGV6aWFsYmzDtmNrZSc7XG5cbk1zZ1snQ0FUX0xPR0lDJ10gPSAnTG9naWsnO1xuXG5Nc2dbJ0NBVF9MT09QUyddID0gJ1NjaGxlaWZlbic7XG5cbk1zZ1snQ0FUX01BVEgnXSA9ICdNYXRoZSc7XG5cbk1zZ1snQ0FUX0xJU1RTJ10gPSAnTGlzdGVuJztcblxuTXNnWydDQVRfVkFSSUFCTEVTJ10gPSAnVmFyaWFibGVuJztcblxuTXNnWydDQVRfRlVOQ1RJT05TJ10gPSAnRnVua3Rpb25lbic7XG5cbk1zZ1snQ0FUX1RFWFQnXSA9ICdUZXh0JztcblxuTXNnWydQUklOVF9CTE9DSyddID0gJ0dpYiBUZXh0ICUxIGF1cyc7XG5Nc2dbJ1BSSU5UX0JMT0NLX1RPT0xUSVAnXSA9ICdHaWJ0IGVpbmVuIFRleHQgb2RlciBXZXJ0IGF1ZiBkZW0gQmlsZHNjaGlybSBhdXMnO1xuXG5Nc2dbJ0dFVF9JTlBVVF9CTE9DSyddID0gJ1RleHRlaW5nYWJlJztcbk1zZ1snR0VUX0lOUFVUX0JMT0NLX1RPT0xUSVAnXSA9ICdXYXJ0ZXQgYXVmIGVpbmUgVGV4dGVpbmdhYmUgYXVmIGRlciBLb25zb2xlIHVuZCBnaWJ0IGRpZXNlIHp1csO8Y2snO1xuXG5Nc2dbJ1ZFQ1RPUl9YWVonXSA9ICdWZWt0b3IgKHg6ICUxLCB5OiAlMiwgejogJTMpJztcbk1zZ1snVkVDVE9SX1hZWl9UT09MVElQJ10gPSAnRWluIDNELVZla3Rvcic7XG5cbk1zZ1snUk9UQVRJT05fQUJDJ10gPSAnUm90YXRpb24oYTogJTEsIGI6ICUyLCBjOiAlMyknO1xuTXNnWydST1RBVElPTl9BQkNfVE9PTFRJUCddID0gJ0VpbiBSb3RhdGlvbnMgRGF0ZW50eXAnO1xuXG5Nc2dbJ1ZFQ1RPUl9PUEVSQVRJT04nXSA9ICdWZWt0b3IgICUxLCAlMiwgejogJTMpJztcbk1zZ1snVkVDVE9SX09QRVJBVElPTl9UT09MVElQJ10gPSAnRWluIDNELVZla3Rvcic7XG5cbk1zZ1snVkVDVE9SX1NLQUxBUiddID0gJ011bHRpcGxpemllcmUgVmVrdG9yICUxIG1pdCBTa2FsYXIgJTInO1xuTXNnWydWRUNUT1JfU0tBTEFSX1RPT0xUSVAnXSA9ICdNdWx0cGxpemllcmUgZWluZW4gVmVrdG9yIG1pdCBlaW5lciBaYWhsJztcblxuTXNnWydDUkNMX01PVkVfVkVDVE9SX1JPVEFUSU9OJ10gPSAnRmFocmUgenUgVmVrdG9yICUxIFJvdGF0aW9uICUyIGxpbmVhciAlMyc7XG5Nc2dbJ0NSQ0xfTU9WRV9WRUNUT1JfUk9UQVRJT05fVE9PTFRJUCddID0gJ3Rvb2x0aXAnO1xuXG5Nc2dbJ0NSQ0xfTU9WRV9ESVJFQ1RJT04nXSA9ICdGYWhyZSAlMSBtbSAlMic7XG5Nc2dbJ0NSQ0xfTU9WRV9ESVJFQ1RJT05fVE9PTFRJUCddID0gJ0ZhaHJlIGluIHJpY2h0dW5nJztcblxuTXNnWydDUkNMX1JPVEFURV9aJ10gPSAnRHJlaGUgJTEgdW0gICUyIMKwJztcbk1zZ1snQ1JDTF9ST1RBVEVfWl9UT09MVElQJ10gPSAnUm90YXRlIGNsb2Nrd2lzZS9jb3VudGVyY2xvY2t3aXNlIGJ5IDE4MMKwIC8vIFotYXhpcy4nO1xuXG5Nc2dbJ0NSQ0xfVkVMT0NJVFknXSA9ICdTZXR6dGUgR2VzY2h3aW5kaWdrZWl0IHp1ICAlMSBtbS9zLic7XG5Nc2dbJ0NSQ0xfVkVMT0NJVFlfVE9PTFRJUCddID0gJ1NldCB2ZWxvY2l0eSBvZiB0aGUgcm9ib3QnO1xuXG5Nc2dbJ0NSQ0xfVE9PTF9PTl9PRkYnXSA9ICdEcmVoZSBkYXMgVG9vbCAgJTEnO1xuTXNnWydDUkNMX1RPT0xfT05fT0ZGX1RPT0xUSVAnXSA9ICdUdXJuIHRoZSB0b29sIG9uIG9yIG9mZic7XG5cbk1zZ1snQ1JDTF9TRVRfVE9PTF9WQUxVRSddID0gJ1NldHplIGRlbiBUb29sIHdlcnQgJTEgJztcbk1zZ1snQ1JDTF9TRVRfVE9PTF9WQUxVRV9UT09MVElQJ10gPSAnU2V0IHRvb2wgdmFsdWUgdG8gJTEgJztcblxuTXNnWydDUkNMX1NXSVRDSF9UT09MJ10gPSAnV2VjaHNsZSB6dSBUb29sICUxJztcbk1zZ1snQ1JDTF9TV0lUQ0hfVE9PTF9UT09MVElQJ10gPSAnU3dpdGNoIHRvIHRvb2wgJTEnO1xuXG5Nc2dbJ0NSQ0xfV0FJVCddID0gJ1dhcnRlIGbDvHIgICUxIG1zLic7XG5Nc2dbJ0NSQ0xfV0FJVF9UT09MVElQJ10gPSAnV2FpdCBmb3IgJTEgbXMuJztcblxuTXNnWydDUkNMX1NFVF9UQ1AnXSA9ICdTZXQgVG9vbCBDZW50ZXIgUG9pbnQgenUgJTEgJTInO1xuTXNnWydDUkNMX1NFVF9UQ1BfVE9PTFRJUCddID0gJ1NldCBUb29sIENlbnRlciBQb2ludCc7XG5cblxuTXNnWydDUkNMX0FDQ0VMRVJBVElPTiddID0gJ1NldCBCZXNjaGxldW5pZ3VuZyB6dSAlMSBtbS9zwrIuJztcbk1zZ1snQ1JDTF9BQ0NFTEVSQVRJT05fVE9PTFRJUCddID0gJ1NldCBhY2NlbGVyYXRpb24gb2YgdGhlIHJvYm90JztcblxuXG5Nc2dbJ0NSQ0xfU0VUX0lQJ10gPSAnU2V0IFJvYm90IElwIHRvICAgJTEgLiAlMiAuICUzICc7XG5Nc2dbJ0NSQ0xfU0VUX0lQX1RPT0xUSVAnXSA9ICdTZXQgSXAgb2YgdGhlIFJvYm90JztcbiIsIi8vIEBmbG93XG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG5jb25zdCBNc2cgPSB7fTtcbmV4cG9ydCBkZWZhdWx0IE1zZztcblxuTXNnWydDQVRfQ1VTVE9NJ10gPSAnQ3VzdG9tJztcblxuTXNnWydDQVRfTE9HSUMnXSA9ICdMb2dpYyc7XG5cbk1zZ1snQ0FUX0xPT1BTJ10gPSAnTG9vcHMnO1xuXG5Nc2dbJ0NBVF9NQVRIJ10gPSAnTWF0aCc7XG5cbk1zZ1snQ0FUX0xJU1RTJ10gPSAnTGlzdHMnO1xuXG5Nc2dbJ0NBVF9WQVJJQUJMRVMnXSA9ICdWYXJpYWJsZXMnO1xuXG5Nc2dbJ0NBVF9GVU5DVElPTlMnXSA9ICdGdW5jdGlvbnMnO1xuXG5Nc2dbJ0NBVF9URVhUJ10gPSAnVGV4dCc7XG5cbk1zZ1snUFJJTlRfQkxPQ0snXSA9ICdwcmludCB0ZXh0ICUxJztcbk1zZ1snUFJJTlRfQkxPQ0tfVE9PTFRJUCddID0gJ1ByaW50cyBhIHRleHQgb3IgdmFsdWUgdG8gdGhlIHNjcmVlbic7XG5cbk1zZ1snR0VUX0lOUFVUX0JMT0NLJ10gPSAndGV4dCBpbnB1dCc7XG5Nc2dbJ0dFVF9JTlBVVF9CTE9DS19UT09MVElQJ10gPSAnV2FpdHMgZm9yIHRleHQgaW5wdXQgb24gdGhlIGNvbnNvbGUgYW5kIHJldHVybnMgaXQnO1xuXG5Nc2dbJ1ZFQ1RPUl9YWVonXSA9ICdWZWN0b3IgKHg6ICUxLCB5OiAlMiwgejogJTMpJztcbk1zZ1snVkVDVE9SX1hZWl9UT09MVElQJ10gPSAnQSAzRC1WZWN0b3InO1xuXG5Nc2dbJ1ZFQ1RPUl9PUEVSQVRJT04nXSA9ICdWZWN0b3IgIHg6ICUxLCB5OiAlMiwgejogJTMpJztcbk1zZ1snVkVDVE9SX09QRVJBVElPTl9UT09MVElQJ10gPSAnQSAzRC1WZWN0b3InO1xuXG5Nc2dbJ1JPVEFUSU9OX0FCQyddID0gJ1JvdGF0aW9uIChhOiAlMSwgYjogJTIsIGM6ICUzKSc7XG5Nc2dbJ1JPVEFUSU9OX0FCQ19UT09MVElQJ10gPSAnQSBSb3RhdGlvbiBEYXRhdHlwZSc7XG5cbk1zZ1snVkVDVE9SX1NLQUxBUiddID0gJ011bHRpcGxpY2F0ZSAgdmVrdG9yICUxIHdpdGggc2thbGFyICUyJztcbk1zZ1snVkVDVE9SX1NLQUxBUl9UT09MVElQJ10gPSAnTXVsdGlwbGljYXRlIHZlY3RvciB3aXRoIG51bWJlcic7XG5cbk1zZ1snQ1JDTF9NT1ZFX1ZFQ1RPUl9ST1RBVElPTiddID0gJ01vdmUgdG8gICUxICAlMiBsaW5lYXIgJTMnO1xuTXNnWydDUkNMX01PVkVfVkVDVE9SX1JPVEFUSU9OX1RPT0xUSVAnXSA9ICd0b29sdGlwJztcblxuTXNnWydDUkNMX01PVkVfRElSRUNUSU9OJ10gPSAnTW92ZSAlMSBtbSAlMic7XG5Nc2dbJ0NSQ0xfTU9WRV9ESVJFQ1RJT05fVE9PTFRJUCddID0gJ01vdmUgaW4gZGlyZWN0aW9uJztcblxuTXNnWydDUkNMX1JPVEFURV9aJ10gPSAnUm90YXRlICUxIGJ5ICUyIMKwJztcbk1zZ1snQ1JDTF9ST1RBVEVfWl9UT09MVElQJ10gPSAnUm90YXRlIGNsb2Nrd2lzZS9jb3VudGVyY2xvY2t3aXNlIGJ5IDE4MMKwIC8vIFotYXhpcy4nO1xuXG5Nc2dbJ0NSQ0xfVkVMT0NJVFknXSA9ICdTZXQgdmVsb2NpdHkgdG8gJTEgbW0vcy4nO1xuTXNnWydDUkNMX1ZFTE9DSVRZX1RPT0xUSVAnXSA9ICdTZXQgdmVsb2NpdHkgb2YgdGhlIHJvYm90JztcblxuTXNnWydDUkNMX0FDQ0VMRVJBVElPTiddID0gJ1NldCBhY2NlbGVyYXRpb24gdG8gJTEgbW0vc8KyLic7XG5Nc2dbJ0NSQ0xfQUNDRUxFUkFUSU9OX1RPT0xUSVAnXSA9ICdTZXQgYWNjZWxlcmF0aW9uIG9mIHRoZSByb2JvdCc7XG5cbk1zZ1snQ1JDTF9UT09MX09OX09GRiddID0gJ1R1cm4gdG9vbCAlMSc7XG5Nc2dbJ0NSQ0xfVE9PTF9PTl9PRkZfVE9PTFRJUCddID0gJ1R1cm4gdGhlIHRvb2wgb24gb3Igb2ZmJztcblxuTXNnWydDUkNMX1NFVF9UT09MX1ZBTFVFJ10gPSAnU2V0IHRvb2wgdmFsdWUgdG8gJTEgJztcbk1zZ1snQ1JDTF9TRVRfVE9PTF9WQUxVRV9UT09MVElQJ10gPSAnU2V0IHRvb2wgdmFsdWUgdG8gJTEgJztcblxuTXNnWydDUkNMX1NXSVRDSF9UT09MJ10gPSAnU3dpdGNoIHRvIHRvb2wgJTEnO1xuTXNnWydDUkNMX1NXSVRDSF9UT09MX1RPT0xUSVAnXSA9ICdTd2l0Y2ggdG8gdG9vbCAlMSc7XG5cbk1zZ1snQ1JDTF9XQUlUJ10gPSAnV2FpdCBmb3IgJTEgbXMuJztcbk1zZ1snQ1JDTF9XQUlUX1RPT0xUSVAnXSA9ICdXYWl0IGZvciAlMSBtcy4nO1xuXG5Nc2dbJ0NSQ0xfU0VUX1RDUCddID0gJ1NldCBUb29sIENlbnRlciBQb2ludCB0byAlMSAlMic7XG5Nc2dbJ0NSQ0xfU0VUX1RDUF9UT09MVElQJ10gPSAnU2V0IFRvb2wgQ2VudGVyIFBvaW50JztcblxuXG5Nc2dbJ0NSQ0xfU0VUX0lQJ10gPSAnU2V0IFJvYm90IElwIHRvICAgJTEgLiAlMiAuICUzICc7XG5Nc2dbJ0NSQ0xfU0VUX0lQX1RPT0xUSVAnXSA9ICdTZXQgSXAgb2YgdGhlIFJvYm90JztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFMQTtBQVdBOzs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0JBO0FBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQXpCQTtBQTJCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBWkE7QUEzREE7QUFnRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFoQkE7QUFrQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBN0NBO0FBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBdENBO0FBaURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBdENBO0FBaURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQ0E7QUE0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQTFDQTtBQTRDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBakJBO0FBekZBO0FBbUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckNBO0FBdUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUE5QkE7QUFnQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVpBO0FBeEVBO0FBNkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQkE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUExQkE7QUE0QkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBMURBO0FBcUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQkE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUExQkE7QUE0QkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBMURBO0FBcUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFsQkE7QUFvQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVBBO0FBOUNBO0FBOERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQXJDQTtBQWdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBZEE7QUFnQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBakJBO0FBcENBO0FBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFtQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWZBO0FBaUJBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQXJDQTtBQWdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFQQTtBQW5DQTtBQW1EQTtBQWdCQTtBQUVBOzs7Ozs7OztBQ2gzQkE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7O0FDMUdBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7OztBQ3pHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpCQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFwQkE7QUFzQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBbERBO0FBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBaUJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBakJBO0FBbUJBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQXJDQTtBQWdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWlCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBbEJBO0FBb0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQXRDQTtBQWlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWlCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFqQkE7QUFtQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBckNBO0FBZ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhCQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBdEJBO0FBd0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQW5EQTtBQThEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWlCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQWpCQTtBQW1CQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFyQ0E7QUFnREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFqQkE7QUFtQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBckNBO0FBZ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFoQkE7QUFrQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBekNBO0FBb0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWRBO0FBZ0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQTNCQTtBQXNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlCQTtBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQXBCQTtBQXNCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUF2REE7QUFrRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4QkE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFwQkE7QUFzQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBakRBO0FBNERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFsQkE7QUFvQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBM0NBO0FBc0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6QkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFwQkE7QUFzQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBbERBO0FBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1Q0E7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQWxCQTtBQW9CQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFuRUE7QUE4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0JBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFsQkE7QUFvQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBdERBO0FBaUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBbUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFwREE7QUFzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFwQkE7QUFzQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBN0VBO0FBd0ZBO0FBbUJBO0FBRUE7Ozs7Ozs7O0FDbjhCQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7QUN4RUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==