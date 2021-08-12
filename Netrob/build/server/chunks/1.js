require("source-map-support").install();
exports.ids = [1];
exports.modules = {

/***/ "../../../../tmp/webRob/src/test/data.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEST_CMDS", function() { return TEST_CMDS; });
const TEST_CMDS = [
    {
        "robot": "ur5",
        "cmds": [
            {
                "CommandID": 0,
                "Name": "Using Gripper 0",
                "CRCLCommand": "SetEndEffectorParameters",
                "CRCLParam": {"ToolID": 0}
            },
            {"CommandID": 1, "Name": "Set fast speed", "CRCLCommand": "SetTransSpeed", "CRCLParam": {"Relative": 0.5}}
        ]
    },
    {
        "robot": "kuka_kr6r700sixx",
        "cmds": [
            {
                "CommandID": 2,
                "Name": "Using Gripper 0",
                "CRCLCommand": "SetEndEffectorParameters",
                "CRCLParam": {"ToolID": 0}
            },
            {"CommandID": 3, "Name": "Set fast speed", "CRCLCommand": "SetTransSpeed", "CRCLParam": {"Relative": 0.5}}
        ]
    },
    {
        "robot": "ur5",
        "cmds": [
            {
                "CommandID": 4,
                "Name": "Move To",
                "CRCLCommand": "MoveTo",
                "CRCLParam": {
                    "Straight": false,
                    "Pose": {"X": 300, "Y": 400, "Z": 300, "A": 0, "B": Math.PI / 2, "C": -Math.PI + 0.1}
                }
            },
            {
                "CommandID": 5,
                "Name": "Move To",
                "CRCLCommand": "MoveTo",
                "CRCLParam": {
                    "Straight": true,
                    "Pose": {"X": 300, "Y": 500, "Z": 300, "A": 0, "B": Math.PI / 2, "C": -Math.PI + 0.1}
                }
            },
            {"CommandID": 6, "Name": "Picking Part", "CRCLCommand": "SetEndEffectorParameters", "CRCLParam": {"Setting": 1}},
            {"CommandID": 7, "Name": "Wait 0.5s3", "CRCLCommand": "Wait", "CRCLParam": {"Time": 0.5}},
            {
                "CommandID": 8,
                "Name": "Move To",
                "CRCLCommand": "MoveTo",
                "CRCLParam": {
                    "Straight": false,
                    "Pose": {"X": 300, "Y": 300, "Z": 300, "A": 0, "B": Math.PI / 2, "C": -Math.PI + 0.1}
                }
            },
            {"CommandID": 9, "Name": "Releasing Part", "CRCLCommand": "SetEndEffectorParameters", "CRCLParam": {"Setting": 0}},

            {
                "CommandID": 10,
                "Name": "Move To",
                "CRCLCommand": "MoveTo",
                "CRCLParam": {
                    "Straight": false,
                    "Pose": {"X": 300, "Y": 400, "Z": 300, "A": 0, "B": Math.PI / 2, "C": -Math.PI + 0.1}
                }
            },
        ]
    },
]


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Blockly/Blockly.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.Blockly-blocklyContainer-1X04O {\n  -ms-flex: 1 0 auto;\n      flex: 1 0 auto;\n  position: relative\n}\n\n.Blockly-blocklyContainer-1X04O .Blockly-blockly-ccpth {\n    position: absolute;\n  }\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/Blockly/Blockly.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,gCAAgC;EAChC,+BAA+B;;EAE/B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;;AAED;EACE,mBAAmB;MACf,eAAe;EACnB,kBAAkB;CACnB;;AAED;IACI,mBAAmB;GACpB","file":"Blockly.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.blocklyContainer {\n  -ms-flex: 1 0 auto;\n      flex: 1 0 auto;\n  position: relative\n}\n\n.blocklyContainer .blockly {\n    position: absolute;\n  }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"blocklyContainer": "Blockly-blocklyContainer-1X04O",
	"blockly": "Blockly-blockly-ccpth"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Console/Console.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".Console-root-1D0Cx {\n  height: 100%;\n  font-family: monospace;\n  font-size: 19px;\n  min-width: 300px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap;\n}\n\n.Console-outputPane-34M0t {\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  overflow-y: scroll;\n}\n\n.Console-output-19hYm {\n  margin: 0;\n  white-space: pre-wrap;\n  word-wrap: break-word\n}\n\n.Console-output-19hYm.Console-stdin-P0V8j {\n    color: green;\n  }\n\n.Console-output-19hYm.Console-stdout-LLTvW {\n    color: black;\n  }\n\n.Console-output-19hYm.Console-stderr-23mbq {\n    color: red;\n  }\n\n.Console-inputForm-2ZCt0 {\n  -ms-flex: 0 0 auto;\n      flex: 0 0 auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap\n}\n\n.Console-inputForm-2ZCt0 input {\n    -ms-flex: 1 0 auto;\n        flex: 1 0 auto;\n    font-family: inherit;\n    font-size: inherit;\n    border: none;\n  }\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/Console/Console.scss"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;EACrB,cAAc;EACd,6BAA6B;MACzB,yBAAyB;CAC9B;;AAED;EACE,mBAAmB;MACf,eAAe;EACnB,mBAAmB;CACpB;;AAED;EACE,UAAU;EACV,sBAAsB;EACtB,qBAAqB;CACtB;;AAED;IACI,aAAa;GACd;;AAEH;IACI,aAAa;GACd;;AAEH;IACI,WAAW;GACZ;;AAEH;EACE,mBAAmB;MACf,eAAe;EACnB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,qBAAqB;CAC1B;;AAED;IACI,mBAAmB;QACf,eAAe;IACnB,qBAAqB;IACrB,mBAAmB;IACnB,aAAa;GACd","file":"Console.scss","sourcesContent":[".root {\n  height: 100%;\n  font-family: monospace;\n  font-size: 19px;\n  min-width: 300px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap;\n}\n\n.outputPane {\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  overflow-y: scroll;\n}\n\n.output {\n  margin: 0;\n  white-space: pre-wrap;\n  word-wrap: break-word\n}\n\n.output.stdin {\n    color: green;\n  }\n\n.output.stdout {\n    color: black;\n  }\n\n.output.stderr {\n    color: red;\n  }\n\n.inputForm {\n  -ms-flex: 0 0 auto;\n      flex: 0 0 auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap\n}\n\n.inputForm input {\n    -ms-flex: 1 0 auto;\n        flex: 1 0 auto;\n    font-family: inherit;\n    font-size: inherit;\n    border: none;\n  }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Console-root-1D0Cx",
	"outputPane": "Console-outputPane-34M0t",
	"output": "Console-output-19hYm",
	"stdin": "Console-stdin-P0V8j",
	"stdout": "Console-stdout-LLTvW",
	"stderr": "Console-stderr-23mbq",
	"inputForm": "Console-inputForm-2ZCt0"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Editor/Editor.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.Editor-container-3YCqn {\n  -ms-flex: 1 0 auto;\n      flex: 1 0 auto;\n}\n\n.Editor-root-_87Cp {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n  height: 100%;\n}\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/Editor/Editor.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,gCAAgC;EAChC,+BAA+B;;EAE/B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;;AAED;EACE,mBAAmB;MACf,eAAe;CACpB;;AAED;EACE,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,sBAAsB;EAC1B,aAAa;CACd","file":"Editor.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.container {\n  -ms-flex: 1 0 auto;\n      flex: 1 0 auto;\n}\n\n.root {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n  height: 100%;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "Editor-container-3YCqn",
	"root": "Editor-root-_87Cp"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/FileTree/FileTree.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.FileTree-fileIcon-1i-rQ {\n  font-size: 19.2px;\n  font-size: 1.2rem;\n  margin: 0 1.6px -4px 0;\n  margin: 0 0.1rem -0.25rem 0;\n}\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/FileTree/FileTree.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,gCAAgC;EAChC,+BAA+B;;EAE/B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;;AAED;EACE,kBAAkB;EAClB,kBAAkB;EAClB,uBAAuB;EACvB,4BAA4B;CAC7B","file":"FileTree.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.fileIcon {\n  font-size: 19.2px;\n  font-size: 1.2rem;\n  margin: 0 1.6px -4px 0;\n  margin: 0 0.1rem -0.25rem 0;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"fileIcon": "FileTree-fileIcon-1i-rQ"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Ide/flex_layout_ide.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".flex_layout_ide-flexlayout__layout-GUu2r {\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  overflow: hidden;\n\n  /* --flexlayout_test: {top:12}; */\n}\n\n.flex_layout_ide-flexlayout__splitter-3QkAT {\n  background-color: #ddd;\n}\n\n.flex_layout_ide-flexlayout__splitter-3QkAT:hover {\n  background-color: #ccc;\n}\n\n.flex_layout_ide-flexlayout__splitter_drag-2HMvZ {\n  border-radius: 5px;\n  background-color: #bbb;\n  z-index: 1000;\n}\n\n.flex_layout_ide-flexlayout__outline_rect-2r0D0 {\n  position: absolute;\n  cursor: move;\n  border: 2px solid red;\n  -webkit-box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.2);\n          box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  z-index: 1000;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.flex_layout_ide-flexlayout__outline_rect_edge-3wfVD {\n  cursor: move;\n  border: 2px solid green;\n  -webkit-box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.2);\n          box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  z-index: 1000;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.flex_layout_ide-flexlayout__edge_rect-2MGHP {\n  position: absolute;\n  z-index: 1000;\n\n  /* border: 2px solid gray; */\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n  background-color: lightgray;\n\n  /* box-sizing:border-box; */\n}\n\n.flex_layout_ide-flexlayout__drag_rect-2zLZF {\n  position: absolute;\n  cursor: move;\n  border: 2px solid #aaa;\n  -webkit-box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.3);\n          box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.3);\n  border-radius: 5px;\n  z-index: 1000;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #eee;\n  opacity: 0.9;\n  text-align: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  overflow: hidden;\n  padding: 10px;\n  word-wrap: break-word;\n}\n\n.flex_layout_ide-flexlayout__tabset-3-_is {\n  overflow: hidden;\n  background-color: white;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n\n  /* border-radius: 5px; */\n\n  /* box-shadow: 2px 2px 4px #aaa; */\n}\n\n.flex_layout_ide-flexlayout__tab-gXNqT {\n  overflow: hidden;\n  position: absolute;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: white;\n}\n\n.flex_layout_ide-flexlayout__tab_button-oR2fL {\n  cursor: pointer;\n  padding: 2px 8px 3px 8px;\n  margin: 2px;\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.15);\n          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.15);\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  float: left;\n  vertical-align: top;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.flex_layout_ide-flexlayout__tab_button--selected-3l0Hl {\n  color: black;\n  background-color: #ddd;\n}\n\n.flex_layout_ide-flexlayout__tab_button--unselected-iWMwY {\n  color: gray;\n}\n\n.flex_layout_ide-flexlayout__tab_button_leading-2Z-b8 {\n  float: left;\n  display: inline-block;\n}\n\n.flex_layout_ide-flexlayout__tab_button_content-3VHoG {\n  float: left;\n  display: inline-block;\n}\n\n.flex_layout_ide-flexlayout__tab_button_textbox-x6V4J {\n  float: left;\n  border: none;\n  color: green;\n  background-color: #ddd;\n}\n\n.flex_layout_ide-flexlayout__tab_button_textbox-x6V4J:focus {\n  outline: none;\n}\n\n.flex_layout_ide-flexlayout__tab_button_trailing-3E37v {\n  float: left;\n  display: inline-block;\n  margin-left: 5px;\n  margin-top: 3px;\n  width: 8px;\n  height: 8px;\n}\n\n.flex_layout_ide-flexlayout__tab_button--selected-3l0Hl .flex_layout_ide-flexlayout__tab_button_trailing-3E37v,\n.flex_layout_ide-flexlayout__tab_button-oR2fL:hover .flex_layout_ide-flexlayout__tab_button_trailing-3E37v {\n  background: transparent url(" + escape(__webpack_require__("./node_modules/flexlayout-react/images/close.png")) + ") no-repeat center;\n}\n\n.flex_layout_ide-flexlayout__tab_button_overflow-220pF {\n  float: left;\n  width: 20px;\n  height: 15px;\n  margin-top: 2px;\n  padding-left: 12px;\n  border: none;\n  font-size: 10px;\n  font-family: Arial, sans-serif;\n  background: transparent url(" + escape(__webpack_require__("./node_modules/flexlayout-react/images/more.png")) + ") no-repeat left;\n}\n\n.flex_layout_ide-flexlayout__tabset_header-2Tfbs {\n  position: absolute;\n  left: 0;\n  right: 0;\n  background-color: #e8e8e8;\n  padding: 3px 3px 3px 5px;\n  -webkit-box-shadow: inset 0 0 3px 0 rgba(136, 136, 136, 0.54);\n          box-shadow: inset 0 0 3px 0 rgba(136, 136, 136, 0.54);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.flex_layout_ide-flexlayout__tab_header_outer-3K2A2 {\n  background-color: white;\n  position: absolute;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#eee));\n  background-image: -o-linear-gradient(#fff, #eee);\n  background-image: linear-gradient(#fff, #eee);\n}\n\n.flex_layout_ide-flexlayout__tab_header_inner-3FpAm {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 10000px;\n}\n\n.flex_layout_ide-flexlayout__tabset-selected-R6Oi4 {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#ccc));\n  background-image: -o-linear-gradient(#fff, #ccc);\n  background-image: linear-gradient(#fff, #ccc);\n}\n\n.flex_layout_ide-flexlayout__tabset-maximized-1OqY_ {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#aaa), to(#eee));\n  background-image: -o-linear-gradient(#aaa, #eee);\n  background-image: linear-gradient(#aaa, #eee);\n}\n\n.flex_layout_ide-flexlayout__tab_toolbar-22s-F {\n  position: absolute;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row-reverse;\n      flex-direction: row-reverse;\n  -ms-flex-align: center;\n      align-items: center;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.flex_layout_ide-flexlayout__tab_toolbar_button-min-1TkQA {\n  width: 20px;\n  height: 20px;\n  border: none;\n  outline-width: 0;\n  background: transparent url(" + escape(__webpack_require__("./node_modules/flexlayout-react/images/maximize.png")) + ") no-repeat center;\n}\n\n.flex_layout_ide-flexlayout__tab_toolbar_button-max-3IPIO {\n  width: 20px;\n  height: 20px;\n  border: none;\n  outline-width: 0;\n  background: transparent url(" + escape(__webpack_require__("./node_modules/flexlayout-react/images/restore.png")) + ") no-repeat center;\n}\n\n/* stylelint-disable block-no-empty */\n\n.flex_layout_ide-flexlayout__popup_menu-2mS1Z {\n}\n\n.flex_layout_ide-flexlayout__popup_menu_item-1bX6a {\n  padding: 2px 10px 2px 10px;\n}\n\n.flex_layout_ide-flexlayout__popup_menu_item-1bX6a:hover {\n  background-color: lightgray;\n}\n\n.flex_layout_ide-flexlayout__popup_menu_container-bY7Vr {\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.15);\n          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.15);\n  border: 1px solid lightgrey;\n  background: white;\n  border-radius: 3px;\n  position: absolute;\n  z-index: 1000;\n}\n\n.flex_layout_ide-flexlayout__border_top-3vYTs {\n  background-color: #eee;\n  border-bottom: 1px solid #ddd;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n}\n\n.flex_layout_ide-flexlayout__border_bottom-3OZOx {\n  background-color: #eee;\n  border-top: 1px solid #ddd;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n}\n\n.flex_layout_ide-flexlayout__border_left-QuSsf {\n  background-color: #eee;\n  border-right: 1px solid #ddd;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n}\n\n.flex_layout_ide-flexlayout__border_right-1sFZ1 {\n  background-color: #eee;\n  border-left: 1px solid #ddd;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n}\n\n.flex_layout_ide-flexlayout__border_inner_bottom-2TBkO {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.flex_layout_ide-flexlayout__border_inner_left-xw2Kj {\n  position: absolute;\n  white-space: nowrap;\n  right: 23px;\n  -webkit-transform-origin: top right;\n      -ms-transform-origin: top right;\n          transform-origin: top right;\n  -webkit-transform: rotate(-90deg);\n      -ms-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n\n.flex_layout_ide-flexlayout__border_inner_right-xQwg6 {\n  position: absolute;\n  white-space: nowrap;\n  left: 23px;\n  -webkit-transform-origin: top left;\n      -ms-transform-origin: top left;\n          transform-origin: top left;\n  -webkit-transform: rotate(90deg);\n      -ms-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.flex_layout_ide-flexlayout__border_button-J3Y6n {\n  display: inline-block;\n  cursor: pointer;\n  padding: 2px 8px 3px 8px;\n  margin: 2px;\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.15);\n          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.15);\n  border-radius: 3px;\n  vertical-align: top;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  white-space: nowrap;\n}\n\n.flex_layout_ide-flexlayout__border_button--selected-2n-Zr {\n  color: black;\n  background-color: #ddd;\n}\n\n.flex_layout_ide-flexlayout__border_button--unselected-2yLQU {\n  color: gray;\n}\n\n.flex_layout_ide-flexlayout__border_button_leading-2MQ3c {\n  float: left;\n  display: inline;\n}\n\n.flex_layout_ide-flexlayout__border_button_content-1LKLl {\n  display: inline-block;\n}\n\n.flex_layout_ide-flexlayout__border_button_textbox-1xCPj {\n  float: left;\n  border: none;\n  color: green;\n  background-color: #ddd;\n}\n\n.flex_layout_ide-flexlayout__border_button_textbox-1xCPj:focus {\n  outline: none;\n}\n\n.flex_layout_ide-flexlayout__border_button_trailing-BjEoF {\n  display: inline-block;\n  margin-left: 5px;\n  margin-top: 3px;\n  width: 8px;\n  height: 8px;\n}\n\n.flex_layout_ide-flexlayout__border_button--selected-2n-Zr .flex_layout_ide-flexlayout__border_button_trailing-BjEoF,\n.flex_layout_ide-flexlayout__border_button-J3Y6n:hover .flex_layout_ide-flexlayout__border_button_trailing-BjEoF {\n  background: transparent url(" + escape(__webpack_require__("./node_modules/flexlayout-react/images/close.png")) + ") no-repeat center;\n}\n\n.flex_layout_ide-flexlayout__border_toolbar_left-3Fyup {\n  position: absolute;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column-reverse;\n      flex-direction: column-reverse;\n  -ms-flex-align: center;\n      align-items: center;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.flex_layout_ide-flexlayout__border_toolbar_right-2cXu9 {\n  position: absolute;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column-reverse;\n      flex-direction: column-reverse;\n  -ms-flex-align: center;\n      align-items: center;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.flex_layout_ide-flexlayout__border_toolbar_top-MftFl {\n  position: absolute;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row-reverse;\n      flex-direction: row-reverse;\n  -ms-flex-align: center;\n      align-items: center;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.flex_layout_ide-flexlayout__border_toolbar_bottom-2RZbb {\n  position: absolute;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row-reverse;\n      flex-direction: row-reverse;\n  -ms-flex-align: center;\n      align-items: center;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/Ide/flex_layout_ide.css"],"names":[],"mappings":"AAAA;EACE,QAAQ;EACR,OAAO;EACP,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,iBAAiB;;EAEjB,kCAAkC;CACnC;;AAED;EACE,uBAAuB;CACxB;;AAED;EACE,uBAAuB;CACxB;;AAED;EACE,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;CACf;;AAED;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,sDAAsD;UAC9C,8CAA8C;EACtD,mBAAmB;EACnB,cAAc;EACd,+BAA+B;UACvB,uBAAuB;CAChC;;AAED;EACE,aAAa;EACb,wBAAwB;EACxB,sDAAsD;UAC9C,8CAA8C;EACtD,mBAAmB;EACnB,cAAc;EACd,+BAA+B;UACvB,uBAAuB;CAChC;;AAED;EACE,mBAAmB;EACnB,cAAc;;EAEd,6BAA6B;EAC7B,qDAAqD;UAC7C,6CAA6C;EACrD,4BAA4B;;EAE5B,4BAA4B;CAC7B;;AAED;EACE,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,sDAAsD;UAC9C,8CAA8C;EACtD,mBAAmB;EACnB,cAAc;EACd,+BAA+B;UACvB,uBAAuB;EAC/B,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,cAAc;EACd,sBAAsB;MAClB,wBAAwB;EAC5B,2BAA2B;MACvB,uBAAuB;EAC3B,iBAAiB;EACjB,cAAc;EACd,sBAAsB;CACvB;;AAED;EACE,iBAAiB;EACjB,wBAAwB;EACxB,+BAA+B;UACvB,uBAAuB;;EAE/B,yBAAyB;;EAEzB,mCAAmC;CACpC;;AAED;EACE,iBAAiB;EACjB,mBAAmB;EACnB,+BAA+B;UACvB,uBAAuB;EAC/B,wBAAwB;CACzB;;AAED;EACE,gBAAgB;EAChB,yBAAyB;EACzB,YAAY;EACZ,sDAAsD;UAC9C,8CAA8C;EACtD,4BAA4B;EAC5B,6BAA6B;EAC7B,YAAY;EACZ,oBAAoB;EACpB,+BAA+B;UACvB,uBAAuB;CAChC;;AAED;EACE,aAAa;EACb,uBAAuB;CACxB;;AAED;EACE,YAAY;CACb;;AAED;EACE,YAAY;EACZ,sBAAsB;CACvB;;AAED;EACE,YAAY;EACZ,sBAAsB;CACvB;;AAED;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;CACxB;;AAED;EACE,cAAc;CACf;;AAED;EACE,YAAY;EACZ,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;EACX,YAAY;CACb;;AAED;;EAEE,uEAAkF;CACnF;;AAED;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,+BAA+B;EAC/B,qEAA+E;CAChF;;AAED;EACE,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,0BAA0B;EAC1B,yBAAyB;EACzB,8DAA8D;UACtD,sDAAsD;EAC9D,+BAA+B;UACvB,uBAAuB;CAChC;;AAED;EACE,wBAAwB;EACxB,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,iBAAiB;EACjB,wFAAwF;EACxF,iDAAiD;EACjD,8CAA8C;CAC/C;;AAED;EACE,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,UAAU;EACV,eAAe;CAChB;;AAED;EACE,wFAAwF;EACxF,iDAAiD;EACjD,8CAA8C;CAC/C;;AAED;EACE,wFAAwF;EACxF,iDAAiD;EACjD,8CAA8C;CAC/C;;AAED;EACE,mBAAmB;EACnB,qBAAqB;EACrB,cAAc;EACd,gCAAgC;MAC5B,4BAA4B;EAChC,uBAAuB;MACnB,oBAAoB;EACxB,OAAO;EACP,UAAU;EACV,SAAS;CACV;;AAED;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,iBAAiB;EACjB,uEAAqF;CACtF;;AAED;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,iBAAiB;EACjB,uEAAoF;CACrF;;AAED,sCAAsC;;AAEtC;CACC;;AAED;EACE,2BAA2B;CAC5B;;AAED;EACE,4BAA4B;CAC7B;;AAED;EACE,sDAAsD;UAC9C,8CAA8C;EACtD,4BAA4B;EAC5B,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,cAAc;CACf;;AAED;EACE,uBAAuB;EACvB,8BAA8B;EAC9B,+BAA+B;UACvB,uBAAuB;EAC/B,iBAAiB;CAClB;;AAED;EACE,uBAAuB;EACvB,2BAA2B;EAC3B,+BAA+B;UACvB,uBAAuB;EAC/B,iBAAiB;CAClB;;AAED;EACE,uBAAuB;EACvB,6BAA6B;EAC7B,+BAA+B;UACvB,uBAAuB;EAC/B,iBAAiB;CAClB;;AAED;EACE,uBAAuB;EACvB,4BAA4B;EAC5B,+BAA+B;UACvB,uBAAuB;EAC/B,iBAAiB;CAClB;;AAED;EACE,qBAAqB;EACrB,cAAc;CACf;;AAED;EACE,mBAAmB;EACnB,oBAAoB;EACpB,YAAY;EACZ,oCAAoC;MAChC,gCAAgC;UAC5B,4BAA4B;EACpC,kCAAkC;MAC9B,8BAA8B;UAC1B,0BAA0B;CACnC;;AAED;EACE,mBAAmB;EACnB,oBAAoB;EACpB,WAAW;EACX,mCAAmC;MAC/B,+BAA+B;UAC3B,2BAA2B;EACnC,iCAAiC;MAC7B,6BAA6B;UACzB,yBAAyB;CAClC;;AAED;EACE,sBAAsB;EACtB,gBAAgB;EAChB,yBAAyB;EACzB,YAAY;EACZ,sDAAsD;UAC9C,8CAA8C;EACtD,mBAAmB;EACnB,oBAAoB;EACpB,+BAA+B;UACvB,uBAAuB;EAC/B,oBAAoB;CACrB;;AAED;EACE,aAAa;EACb,uBAAuB;CACxB;;AAED;EACE,YAAY;CACb;;AAED;EACE,YAAY;EACZ,gBAAgB;CACjB;;AAED;EACE,sBAAsB;CACvB;;AAED;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;CACxB;;AAED;EACE,cAAc;CACf;;AAED;EACE,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;EACX,YAAY;CACb;;AAED;;EAEE,uEAAkF;CACnF;;AAED;EACE,mBAAmB;EACnB,qBAAqB;EACrB,cAAc;EACd,mCAAmC;MAC/B,+BAA+B;EACnC,uBAAuB;MACnB,oBAAoB;EACxB,UAAU;EACV,QAAQ;EACR,SAAS;CACV;;AAED;EACE,mBAAmB;EACnB,qBAAqB;EACrB,cAAc;EACd,mCAAmC;MAC/B,+BAA+B;EACnC,uBAAuB;MACnB,oBAAoB;EACxB,UAAU;EACV,QAAQ;EACR,SAAS;CACV;;AAED;EACE,mBAAmB;EACnB,qBAAqB;EACrB,cAAc;EACd,gCAAgC;MAC5B,4BAA4B;EAChC,uBAAuB;MACnB,oBAAoB;EACxB,OAAO;EACP,UAAU;EACV,SAAS;CACV;;AAED;EACE,mBAAmB;EACnB,qBAAqB;EACrB,cAAc;EACd,gCAAgC;MAC5B,4BAA4B;EAChC,uBAAuB;MACnB,oBAAoB;EACxB,OAAO;EACP,UAAU;EACV,SAAS;CACV","file":"flex_layout_ide.css","sourcesContent":[".flexlayout__layout {\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  overflow: hidden;\n\n  /* --flexlayout_test: {top:12}; */\n}\n\n.flexlayout__splitter {\n  background-color: #ddd;\n}\n\n.flexlayout__splitter:hover {\n  background-color: #ccc;\n}\n\n.flexlayout__splitter_drag {\n  border-radius: 5px;\n  background-color: #bbb;\n  z-index: 1000;\n}\n\n.flexlayout__outline_rect {\n  position: absolute;\n  cursor: move;\n  border: 2px solid red;\n  -webkit-box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.2);\n          box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  z-index: 1000;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.flexlayout__outline_rect_edge {\n  cursor: move;\n  border: 2px solid green;\n  -webkit-box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.2);\n          box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  z-index: 1000;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.flexlayout__edge_rect {\n  position: absolute;\n  z-index: 1000;\n\n  /* border: 2px solid gray; */\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n  background-color: lightgray;\n\n  /* box-sizing:border-box; */\n}\n\n.flexlayout__drag_rect {\n  position: absolute;\n  cursor: move;\n  border: 2px solid #aaa;\n  -webkit-box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.3);\n          box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.3);\n  border-radius: 5px;\n  z-index: 1000;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #eee;\n  opacity: 0.9;\n  text-align: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  overflow: hidden;\n  padding: 10px;\n  word-wrap: break-word;\n}\n\n.flexlayout__tabset {\n  overflow: hidden;\n  background-color: white;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n\n  /* border-radius: 5px; */\n\n  /* box-shadow: 2px 2px 4px #aaa; */\n}\n\n.flexlayout__tab {\n  overflow: hidden;\n  position: absolute;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: white;\n}\n\n.flexlayout__tab_button {\n  cursor: pointer;\n  padding: 2px 8px 3px 8px;\n  margin: 2px;\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.15);\n          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.15);\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  float: left;\n  vertical-align: top;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.flexlayout__tab_button--selected {\n  color: black;\n  background-color: #ddd;\n}\n\n.flexlayout__tab_button--unselected {\n  color: gray;\n}\n\n.flexlayout__tab_button_leading {\n  float: left;\n  display: inline-block;\n}\n\n.flexlayout__tab_button_content {\n  float: left;\n  display: inline-block;\n}\n\n.flexlayout__tab_button_textbox {\n  float: left;\n  border: none;\n  color: green;\n  background-color: #ddd;\n}\n\n.flexlayout__tab_button_textbox:focus {\n  outline: none;\n}\n\n.flexlayout__tab_button_trailing {\n  float: left;\n  display: inline-block;\n  margin-left: 5px;\n  margin-top: 3px;\n  width: 8px;\n  height: 8px;\n}\n\n.flexlayout__tab_button--selected .flexlayout__tab_button_trailing,\n.flexlayout__tab_button:hover .flexlayout__tab_button_trailing {\n  background: transparent url('flexlayout-react/images/close.png') no-repeat center;\n}\n\n.flexlayout__tab_button_overflow {\n  float: left;\n  width: 20px;\n  height: 15px;\n  margin-top: 2px;\n  padding-left: 12px;\n  border: none;\n  font-size: 10px;\n  font-family: Arial, sans-serif;\n  background: transparent url('flexlayout-react/images/more.png') no-repeat left;\n}\n\n.flexlayout__tabset_header {\n  position: absolute;\n  left: 0;\n  right: 0;\n  background-color: #e8e8e8;\n  padding: 3px 3px 3px 5px;\n  -webkit-box-shadow: inset 0 0 3px 0 rgba(136, 136, 136, 0.54);\n          box-shadow: inset 0 0 3px 0 rgba(136, 136, 136, 0.54);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.flexlayout__tab_header_outer {\n  background-color: white;\n  position: absolute;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#eee));\n  background-image: -o-linear-gradient(#fff, #eee);\n  background-image: linear-gradient(#fff, #eee);\n}\n\n.flexlayout__tab_header_inner {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 10000px;\n}\n\n.flexlayout__tabset-selected {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#ccc));\n  background-image: -o-linear-gradient(#fff, #ccc);\n  background-image: linear-gradient(#fff, #ccc);\n}\n\n.flexlayout__tabset-maximized {\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#aaa), to(#eee));\n  background-image: -o-linear-gradient(#aaa, #eee);\n  background-image: linear-gradient(#aaa, #eee);\n}\n\n.flexlayout__tab_toolbar {\n  position: absolute;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row-reverse;\n      flex-direction: row-reverse;\n  -ms-flex-align: center;\n      align-items: center;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.flexlayout__tab_toolbar_button-min {\n  width: 20px;\n  height: 20px;\n  border: none;\n  outline-width: 0;\n  background: transparent url('flexlayout-react/images/maximize.png') no-repeat center;\n}\n\n.flexlayout__tab_toolbar_button-max {\n  width: 20px;\n  height: 20px;\n  border: none;\n  outline-width: 0;\n  background: transparent url('flexlayout-react/images/restore.png') no-repeat center;\n}\n\n/* stylelint-disable block-no-empty */\n\n.flexlayout__popup_menu {\n}\n\n.flexlayout__popup_menu_item {\n  padding: 2px 10px 2px 10px;\n}\n\n.flexlayout__popup_menu_item:hover {\n  background-color: lightgray;\n}\n\n.flexlayout__popup_menu_container {\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.15);\n          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.15);\n  border: 1px solid lightgrey;\n  background: white;\n  border-radius: 3px;\n  position: absolute;\n  z-index: 1000;\n}\n\n.flexlayout__border_top {\n  background-color: #eee;\n  border-bottom: 1px solid #ddd;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n}\n\n.flexlayout__border_bottom {\n  background-color: #eee;\n  border-top: 1px solid #ddd;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n}\n\n.flexlayout__border_left {\n  background-color: #eee;\n  border-right: 1px solid #ddd;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n}\n\n.flexlayout__border_right {\n  background-color: #eee;\n  border-left: 1px solid #ddd;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n}\n\n.flexlayout__border_inner_bottom {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.flexlayout__border_inner_left {\n  position: absolute;\n  white-space: nowrap;\n  right: 23px;\n  -webkit-transform-origin: top right;\n      -ms-transform-origin: top right;\n          transform-origin: top right;\n  -webkit-transform: rotate(-90deg);\n      -ms-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n\n.flexlayout__border_inner_right {\n  position: absolute;\n  white-space: nowrap;\n  left: 23px;\n  -webkit-transform-origin: top left;\n      -ms-transform-origin: top left;\n          transform-origin: top left;\n  -webkit-transform: rotate(90deg);\n      -ms-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.flexlayout__border_button {\n  display: inline-block;\n  cursor: pointer;\n  padding: 2px 8px 3px 8px;\n  margin: 2px;\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.15);\n          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.15);\n  border-radius: 3px;\n  vertical-align: top;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  white-space: nowrap;\n}\n\n.flexlayout__border_button--selected {\n  color: black;\n  background-color: #ddd;\n}\n\n.flexlayout__border_button--unselected {\n  color: gray;\n}\n\n.flexlayout__border_button_leading {\n  float: left;\n  display: inline;\n}\n\n.flexlayout__border_button_content {\n  display: inline-block;\n}\n\n.flexlayout__border_button_textbox {\n  float: left;\n  border: none;\n  color: green;\n  background-color: #ddd;\n}\n\n.flexlayout__border_button_textbox:focus {\n  outline: none;\n}\n\n.flexlayout__border_button_trailing {\n  display: inline-block;\n  margin-left: 5px;\n  margin-top: 3px;\n  width: 8px;\n  height: 8px;\n}\n\n.flexlayout__border_button--selected .flexlayout__border_button_trailing,\n.flexlayout__border_button:hover .flexlayout__border_button_trailing {\n  background: transparent url('flexlayout-react/images/close.png') no-repeat center;\n}\n\n.flexlayout__border_toolbar_left {\n  position: absolute;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column-reverse;\n      flex-direction: column-reverse;\n  -ms-flex-align: center;\n      align-items: center;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.flexlayout__border_toolbar_right {\n  position: absolute;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column-reverse;\n      flex-direction: column-reverse;\n  -ms-flex-align: center;\n      align-items: center;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.flexlayout__border_toolbar_top {\n  position: absolute;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row-reverse;\n      flex-direction: row-reverse;\n  -ms-flex-align: center;\n      align-items: center;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.flexlayout__border_toolbar_bottom {\n  position: absolute;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row-reverse;\n      flex-direction: row-reverse;\n  -ms-flex-align: center;\n      align-items: center;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"flexlayout__layout": "flex_layout_ide-flexlayout__layout-GUu2r",
	"flexlayout__splitter": "flex_layout_ide-flexlayout__splitter-3QkAT",
	"flexlayout__splitter_drag": "flex_layout_ide-flexlayout__splitter_drag-2HMvZ",
	"flexlayout__outline_rect": "flex_layout_ide-flexlayout__outline_rect-2r0D0",
	"flexlayout__outline_rect_edge": "flex_layout_ide-flexlayout__outline_rect_edge-3wfVD",
	"flexlayout__edge_rect": "flex_layout_ide-flexlayout__edge_rect-2MGHP",
	"flexlayout__drag_rect": "flex_layout_ide-flexlayout__drag_rect-2zLZF",
	"flexlayout__tabset": "flex_layout_ide-flexlayout__tabset-3-_is",
	"flexlayout__tab": "flex_layout_ide-flexlayout__tab-gXNqT",
	"flexlayout__tab_button": "flex_layout_ide-flexlayout__tab_button-oR2fL",
	"flexlayout__tab_button--selected": "flex_layout_ide-flexlayout__tab_button--selected-3l0Hl",
	"flexlayout__tab_button--unselected": "flex_layout_ide-flexlayout__tab_button--unselected-iWMwY",
	"flexlayout__tab_button_leading": "flex_layout_ide-flexlayout__tab_button_leading-2Z-b8",
	"flexlayout__tab_button_content": "flex_layout_ide-flexlayout__tab_button_content-3VHoG",
	"flexlayout__tab_button_textbox": "flex_layout_ide-flexlayout__tab_button_textbox-x6V4J",
	"flexlayout__tab_button_trailing": "flex_layout_ide-flexlayout__tab_button_trailing-3E37v",
	"flexlayout__tab_button_overflow": "flex_layout_ide-flexlayout__tab_button_overflow-220pF",
	"flexlayout__tabset_header": "flex_layout_ide-flexlayout__tabset_header-2Tfbs",
	"flexlayout__tab_header_outer": "flex_layout_ide-flexlayout__tab_header_outer-3K2A2",
	"flexlayout__tab_header_inner": "flex_layout_ide-flexlayout__tab_header_inner-3FpAm",
	"flexlayout__tabset-selected": "flex_layout_ide-flexlayout__tabset-selected-R6Oi4",
	"flexlayout__tabset-maximized": "flex_layout_ide-flexlayout__tabset-maximized-1OqY_",
	"flexlayout__tab_toolbar": "flex_layout_ide-flexlayout__tab_toolbar-22s-F",
	"flexlayout__tab_toolbar_button-min": "flex_layout_ide-flexlayout__tab_toolbar_button-min-1TkQA",
	"flexlayout__tab_toolbar_button-max": "flex_layout_ide-flexlayout__tab_toolbar_button-max-3IPIO",
	"flexlayout__popup_menu": "flex_layout_ide-flexlayout__popup_menu-2mS1Z",
	"flexlayout__popup_menu_item": "flex_layout_ide-flexlayout__popup_menu_item-1bX6a",
	"flexlayout__popup_menu_container": "flex_layout_ide-flexlayout__popup_menu_container-bY7Vr",
	"flexlayout__border_top": "flex_layout_ide-flexlayout__border_top-3vYTs",
	"flexlayout__border_bottom": "flex_layout_ide-flexlayout__border_bottom-3OZOx",
	"flexlayout__border_left": "flex_layout_ide-flexlayout__border_left-QuSsf",
	"flexlayout__border_right": "flex_layout_ide-flexlayout__border_right-1sFZ1",
	"flexlayout__border_inner_bottom": "flex_layout_ide-flexlayout__border_inner_bottom-2TBkO",
	"flexlayout__border_inner_left": "flex_layout_ide-flexlayout__border_inner_left-xw2Kj",
	"flexlayout__border_inner_right": "flex_layout_ide-flexlayout__border_inner_right-xQwg6",
	"flexlayout__border_button": "flex_layout_ide-flexlayout__border_button-J3Y6n",
	"flexlayout__border_button--selected": "flex_layout_ide-flexlayout__border_button--selected-2n-Zr",
	"flexlayout__border_button--unselected": "flex_layout_ide-flexlayout__border_button--unselected-2yLQU",
	"flexlayout__border_button_leading": "flex_layout_ide-flexlayout__border_button_leading-2MQ3c",
	"flexlayout__border_button_content": "flex_layout_ide-flexlayout__border_button_content-1LKLl",
	"flexlayout__border_button_textbox": "flex_layout_ide-flexlayout__border_button_textbox-1xCPj",
	"flexlayout__border_button_trailing": "flex_layout_ide-flexlayout__border_button_trailing-BjEoF",
	"flexlayout__border_toolbar_left": "flex_layout_ide-flexlayout__border_toolbar_left-3Fyup",
	"flexlayout__border_toolbar_right": "flex_layout_ide-flexlayout__border_toolbar_right-2cXu9",
	"flexlayout__border_toolbar_top": "flex_layout_ide-flexlayout__border_toolbar_top-MftFl",
	"flexlayout__border_toolbar_bottom": "flex_layout_ide-flexlayout__border_toolbar_bottom-2RZbb"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Markdown/Markdown.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.Markdown-container-3q50J {\n  -ms-flex: 1 0 auto;\n      flex: 1 0 auto;\n  width: 100%;\n}\n\n.Markdown-root-3yhCb {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n  width: 100%;\n  height: 100%;\n}\n\n.Markdown-previewContainer-37xxD {\n  width: 100%;\n  height: 100%;\n  overflow: auto\n}\n\n.Markdown-previewContainer-37xxD .Markdown-previewViewport-YC1AD {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: column nowrap;\n        flex-flow: column nowrap;\n\n    padding: 0 20px 20px;\n    min-height: 100%;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content\n  }\n\n.Markdown-previewContainer-37xxD .Markdown-previewViewport-YC1AD .Markdown-preview-bOuMn {\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n    }\n\n.Markdown-previewContainer-37xxD .Markdown-previewViewport-YC1AD .Markdown-previewToolbar-14jPC {\n      margin-left: auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n    }\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/Markdown/Markdown.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,gCAAgC;EAChC,+BAA+B;;EAE/B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;;AAED;EACE,mBAAmB;MACf,eAAe;EACnB,YAAY;CACb;;AAED;EACE,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,sBAAsB;EAC1B,YAAY;EACZ,aAAa;CACd;;AAED;EACE,YAAY;EACZ,aAAa;EACb,cAAc;CACf;;AAED;IACI,qBAAqB;IACrB,cAAc;IACd,6BAA6B;QACzB,yBAAyB;;IAE7B,qBAAqB;IACrB,iBAAiB;IACjB,2BAA2B;IAC3B,wBAAwB;IACxB,kBAAkB;GACnB;;AAEH;MACM,mBAAmB;UACf,eAAe;KACpB;;AAEL;MACM,kBAAkB;MAClB,mBAAmB;UACf,eAAe;KACpB","file":"Markdown.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.container {\n  -ms-flex: 1 0 auto;\n      flex: 1 0 auto;\n  width: 100%;\n}\n\n.root {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n  width: 100%;\n  height: 100%;\n}\n\n.previewContainer {\n  width: 100%;\n  height: 100%;\n  overflow: auto\n}\n\n.previewContainer .previewViewport {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: column nowrap;\n        flex-flow: column nowrap;\n\n    padding: 0 20px 20px;\n    min-height: 100%;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content\n  }\n\n.previewContainer .previewViewport .preview {\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n    }\n\n.previewContainer .previewViewport .previewToolbar {\n      margin-left: auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n    }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "Markdown-container-3q50J",
	"root": "Markdown-root-3yhCb",
	"previewContainer": "Markdown-previewContainer-37xxD",
	"previewViewport": "Markdown-previewViewport-YC1AD",
	"preview": "Markdown-preview-bOuMn",
	"previewToolbar": "Markdown-previewToolbar-14jPC"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Simulator/Simulator.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.Simulator-root-1XsDK {\n  width: 100%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Simulator-Simulation3D-338pA {\n  \n  max-width: 100%;\n  max-height: 100%;\n}\n\ncanvas {\n  width: 100%;\n  height:100%;\n}\n\n.Simulator-container-3lbCs {\n  \n  display: -ms-flexbox;\n  \n  display: flex\n}\n\n.Simulator-container-3lbCs.Simulator-zoomed-1yoVz {\n    overflow: scroll;\n  }\n\n.Simulator-container-3lbCs.Simulator-zoomed-1yoVz .Simulator-canvas-J-z7P {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n  }\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/Simulator/Simulator.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,gCAAgC;EAChC,+BAA+B;;EAE/B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;;AAED;EACE,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,cAAc;CACf;;AAED;;EAEE,gBAAgB;EAChB,iBAAiB;CAClB;;AAED;EACE,YAAY;EACZ,YAAY;CACb;;AAED;;EAEE,qBAAqB;;EAErB,aAAa;CACd;;AAED;IACI,iBAAiB;GAClB;;AAEH;IACI,qBAAqB;QACjB,eAAe;GACpB","file":"Simulator.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.root {\n  width: 100%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Simulation3D {\n  \n  max-width: 100%;\n  max-height: 100%;\n}\n\ncanvas {\n  width: 100%;\n  height:100%;\n}\n\n.container {\n  \n  display: -ms-flexbox;\n  \n  display: flex\n}\n\n.container.zoomed {\n    overflow: scroll;\n  }\n\n.container.zoomed .canvas {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n  }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Simulator-root-1XsDK",
	"Simulation3D": "Simulator-Simulation3D-338pA",
	"container": "Simulator-container-3lbCs",
	"zoomed": "Simulator-zoomed-1yoVz",
	"canvas": "Simulator-canvas-J-z7P"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/SimulatorEditor/SimulatorEditor.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.SimulatorEditor-tabRoot-1lpKU {\n  width: 100%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n  overflow: hidden;\n}\n\n.SimulatorEditor-jsonContainer-XB5kB {\n  -ms-flex: 0 1 auto;\n      flex: 0 1 auto;\n  width: 400px;\n  overflow: auto;\n  padding: 6px 0 0 4px;\n  margin: 0;\n  -webkit-transition-property: width;\n  -o-transition-property: width;\n  transition-property: width;\n  -webkit-transition-duration: 0.3s;\n       -o-transition-duration: 0.3s;\n          transition-duration: 0.3s\n}\n\n.SimulatorEditor-jsonContainer-XB5kB.SimulatorEditor-collapsed-1H33c {\n    overflow: hidden;\n    padding-left: 0;\n    width: 0;\n  }\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/SimulatorEditor/SimulatorEditor.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,gCAAgC;EAChC,+BAA+B;;EAE/B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;;AAED;EACE,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,sBAAsB;EAC1B,iBAAiB;CAClB;;AAED;EACE,mBAAmB;MACf,eAAe;EACnB,aAAa;EACb,eAAe;EACf,qBAAqB;EACrB,UAAU;EACV,mCAAmC;EACnC,8BAA8B;EAC9B,2BAA2B;EAC3B,kCAAkC;OAC7B,6BAA6B;UAC1B,yBAAyB;CAClC;;AAED;IACI,iBAAiB;IACjB,gBAAgB;IAChB,SAAS;GACV","file":"SimulatorEditor.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.tabRoot {\n  width: 100%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n  overflow: hidden;\n}\n\n.jsonContainer {\n  -ms-flex: 0 1 auto;\n      flex: 0 1 auto;\n  width: 400px;\n  overflow: auto;\n  padding: 6px 0 0 4px;\n  margin: 0;\n  -webkit-transition-property: width;\n  -o-transition-property: width;\n  transition-property: width;\n  -webkit-transition-duration: 0.3s;\n       -o-transition-duration: 0.3s;\n          transition-duration: 0.3s\n}\n\n.jsonContainer.collapsed {\n    overflow: hidden;\n    padding-left: 0;\n    width: 0;\n  }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"tabRoot": "SimulatorEditor-tabRoot-1lpKU",
	"jsonContainer": "SimulatorEditor-jsonContainer-XB5kB",
	"collapsed": "SimulatorEditor-collapsed-1H33c"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/ToolBar/ToolBar.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".ToolBar-toolBar-28CNk {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap;\n  background-color: #e8e8e8;\n}\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/ToolBar/ToolBar.scss"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,cAAc;EACd,6BAA6B;MACzB,yBAAyB;EAC7B,0BAA0B;CAC3B","file":"ToolBar.scss","sourcesContent":[".toolBar {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap;\n  background-color: #e8e8e8;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"toolBar": "ToolBar-toolBar-28CNk"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/ToolBar/ToolBarItem.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".ToolBarItem-toolBarItem-2cdGR {\n  margin: 5px;\n}\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/ToolBar/ToolBarItem.scss"],"names":[],"mappings":"AAAA;EACE,YAAY;CACb","file":"ToolBarItem.scss","sourcesContent":[".toolBarItem {\n  margin: 5px;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"toolBarItem": "ToolBarItem-toolBarItem-2cdGR"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/VisualEditor/VisualEditor.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.VisualEditor-tabRoot-1S4KP {\n  width: 100%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n  overflow: hidden;\n}\n\n.VisualEditor-codeContainer-1jpzy {\n  -ms-flex: 0 1 auto;\n      flex: 0 1 auto;\n  width: 400px;\n  overflow: auto;\n  padding: 6px 0 0 4px;\n  margin: 0;\n  -webkit-transition-property: width;\n  -o-transition-property: width;\n  transition-property: width;\n  -webkit-transition-duration: 0.3s;\n       -o-transition-duration: 0.3s;\n          transition-duration: 0.3s\n}\n\n.VisualEditor-codeContainer-1jpzy.VisualEditor-collapsed-23WPh {\n    overflow: hidden;\n    padding-left: 0;\n    width: 0;\n  }\n", "", {"version":3,"sources":["/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/VisualEditor/VisualEditor.scss"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E,kEAAkE;;EAElE;;gFAE8E;;EAE9E,4BAA4B;;EAE5B;;gFAE8E;;EAE9E,gCAAgC;EAChC,+BAA+B;;EAE/B;;gFAE8E;;EAE9E,uBAAuB,EAAE,gCAAgC;EACzD,uBAAuB,EAAE,2BAA2B;EACpD,uBAAuB,EAAE,6BAA6B;EACtD,wBAAwB,CAAC,iCAAiC;CAC3D;;AAED;EACE,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,sBAAsB;EAC1B,iBAAiB;CAClB;;AAED;EACE,mBAAmB;MACf,eAAe;EACnB,aAAa;EACb,eAAe;EACf,qBAAqB;EACrB,UAAU;EACV,mCAAmC;EACnC,8BAA8B;EAC9B,2BAA2B;EAC3B,kCAAkC;OAC7B,6BAA6B;UAC1B,yBAAyB;CAClC;;AAED;IACI,iBAAiB;IACjB,gBAAgB;IAChB,SAAS;GACV","file":"VisualEditor.scss","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Application specific\n   * ======================================================================== */\n\n  --hedgehog-green-light: #38b449;\n  --hedgehog-green-dark: #007c3c;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n\n.tabRoot {\n  width: 100%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n  overflow: hidden;\n}\n\n.codeContainer {\n  -ms-flex: 0 1 auto;\n      flex: 0 1 auto;\n  width: 400px;\n  overflow: auto;\n  padding: 6px 0 0 4px;\n  margin: 0;\n  -webkit-transition-property: width;\n  -o-transition-property: width;\n  transition-property: width;\n  -webkit-transition-duration: 0.3s;\n       -o-transition-duration: 0.3s;\n          transition-duration: 0.3s\n}\n\n.codeContainer.collapsed {\n    overflow: hidden;\n    padding-left: 0;\n    width: 0;\n  }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"tabRoot": "VisualEditor-tabRoot-1S4KP",
	"codeContainer": "VisualEditor-codeContainer-1jpzy",
	"collapsed": "VisualEditor-collapsed-23WPh"
};

/***/ }),

/***/ "./src/client/poly-decomp-polyfill.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var poly_decomp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("poly-decomp");
/* harmony import */ var poly_decomp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(poly_decomp__WEBPACK_IMPORTED_MODULE_0__);


if (!window.decomp) {
  window.decomp = poly_decomp__WEBPACK_IMPORTED_MODULE_0___default.a;
}

/* harmony default export */ __webpack_exports__["default"] = (poly_decomp__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./src/components/ide/Blockly/Blockly.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/withStyles");
/* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("blockly/core");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Blockly_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/ide/Blockly/Blockly.scss");
/* harmony import */ var _Blockly_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Blockly_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/Blockly/Blockly.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * `BlocklyComponent` wraps the `Blockly` npm distribution to make it easily usable within Hedgehog
 * Cloud's requirements. In particular, Blockly editors are shown inside a flex layout, which may
 * resize and hide its tabs. Blockly needs to be told to resize its canvas to the container when a
 * resize happens, and to hide its "chaff" (pop-ups etc.) when it becomes invisible. The consumer of
 * this component is responsible for listening to the relevant events, and call the display update
 * methods of this component accordingly.
 *
 * This component also dynamically handles the localization of Blockly. While `rtl` (right-to-left
 * orientation) is a property of the workspace, localization messages are set globally and applied
 * to a workspace on creation. To dynamically change of the locale, this component will re-inject a
 * new Blockly workspace after setting the translation globally. This has the side effect of
 * clearing any undo history up to that point.
 *
 * Finally, this component allows listening to Blockly's zoom and scroll state, and can restore zoom
 * and scroll state on load.
 */
class BlocklyComponent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "containerRef", react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(this, "blocklyRef", react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());

    _defineProperty(this, "workspace", null);
  }

  componentDidMount() {
    // eslint-disable-next-line no-throw-literal
    if (this.blocklyRef.current === null) throw 'ref is null';
    this.props.forwardedRef.current = this;
    const {
      initialWorkspaceXml
    } = this.props;
    const dom = initialWorkspaceXml !== '' ? blockly_core__WEBPACK_IMPORTED_MODULE_2___default.a.Xml.textToDom(initialWorkspaceXml) : null;
    this.injectWorkspace(dom);
    this.refreshSize();
  }

  componentWillUnmount() {
    if (this.workspace === null) return;
    this.workspace.dispose();
    this.workspace = null;
  }

  componentDidUpdate(prevProps) {
    const {
      locale: {
        rtl: prevRtl,
        msg: prevMsg
      }
    } = prevProps;
    const {
      locale: {
        rtl,
        msg
      }
    } = this.props;
    if (this.workspace === null) return;
    const {
      workspace
    } = this;

    if (rtl !== prevRtl || msg !== prevMsg) {
      // re-inject workspace. this clears the undo-history, but should work otherwise
      const dom = blockly_core__WEBPACK_IMPORTED_MODULE_2___default.a.Xml.workspaceToDom(workspace);
      workspace.dispose();
      this.injectWorkspace(dom);
    }
  }

  injectWorkspace(dom) {
    // eslint-disable-next-line no-throw-literal
    if (this.blocklyRef.current === null) throw 'ref is null';
    const {
      locale: {
        rtl,
        msg
      },
      workspaceOptions,
      workspaceTransform
    } = this.props;
    blockly_core__WEBPACK_IMPORTED_MODULE_2___default.a.setLocale(msg);
    const workspace = blockly_core__WEBPACK_IMPORTED_MODULE_2___default.a.inject(this.blocklyRef.current, { ...workspaceOptions,
      rtl
    });

    if (dom !== null) {
      try {
        // don't record this reloading of the workspace for undo
        blockly_core__WEBPACK_IMPORTED_MODULE_2___default.a.Events.recordUndo = false;
        blockly_core__WEBPACK_IMPORTED_MODULE_2___default.a.Xml.clearWorkspaceAndLoadFromXml(dom, workspace);
        blockly_core__WEBPACK_IMPORTED_MODULE_2___default.a.Events.recordUndo = true;
      } catch (ex) {
        console.warn(ex);
      }
    }

    workspace.addChangeListener(() => {
      if (this.props.onChange) this.props.onChange(workspace);
    }); // TODO this is a terrible hack, but there's no scroll event
    // translate is the most fundamental in a set of methods
    // that move and zoom the workspace
    // using an arrow function, so `this` is the component not the workspace

    const translate = workspace.translate.bind(workspace);

    workspace.translate = (x, y) => {
      translate(x, y);
      if (this.props.onScroll) this.props.onScroll(workspace);
    };

    if (workspaceTransform) {
      const {
        scrollX,
        scrollY,
        scale
      } = workspaceTransform;
      setTimeout(() => {
        workspace.setScale(scale);
        workspace.scroll(scrollX, scrollY);
      }, 0);
    }

    this.workspace = workspace;
  }
  /**
   * Resizes the workspace to the dimensions of the component's container div
   */


  refreshSize() {
    const container = this.containerRef.current;
    const blockly = this.blocklyRef.current;
    if (container === null || blockly === null || this.workspace === null) return;
    blockly.style.width = `${container.offsetWidth}px`;
    blockly.style.height = `${container.offsetHeight}px`;
    blockly_core__WEBPACK_IMPORTED_MODULE_2___default.a.svgResize(this.workspace);
  }
  /**
   * Refreshes the workspace size on the next tick of the event loop
   */


  refreshSizeDeferred() {
    setTimeout(() => this.refreshSize(), 0);
  }
  /**
   * Handles a visibility change of the workspace. When hiding, hides the "chaff"; when showing,
   * refreshes the workspace size.
   */


  updateVisibility(visible) {
    if (visible) {
      this.refreshSizeDeferred();
    } else {
      blockly_core__WEBPACK_IMPORTED_MODULE_2___default.a.hideChaff();
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      ref: this.containerRef,
      className: _Blockly_scss__WEBPACK_IMPORTED_MODULE_3___default.a.blocklyContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      ref: this.blocklyRef,
      className: _Blockly_scss__WEBPACK_IMPORTED_MODULE_3___default.a.blockly,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default()(_Blockly_scss__WEBPACK_IMPORTED_MODULE_3___default.a)(BlocklyComponent));

/***/ }),

/***/ "./src/components/ide/Blockly/Blockly.scss":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Blockly/Blockly.scss");
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
      module.hot.accept("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Blockly/Blockly.scss", function() {
        css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Blockly/Blockly.scss");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/ide/Console/Console.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _misc_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/misc/hooks/index.js");
/* harmony import */ var _Console_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/ide/Console/Console.scss");
/* harmony import */ var _Console_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Console_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/Console/Console.js";


 // eslint-disable-next-line css-modules/no-unused-class



function consoleReducer(state, action) {
  switch (action.type) {
    case 'PRINT':
      {
        const key = state.nextKey;
        const {
          text,
          stream
        } = action;
        const newItem = {
          key,
          text,
          stream
        };
        const nextKey = state.nextKey + 1;
        const items = [...state.items.slice(-99), newItem];
        return {
          nextKey,
          items
        };
      }

    case 'CLEAR':
      {
        return {
          nextKey: 0,
          items: []
        };
      }

    default:
      // eslint-disable-next-line no-throw-literal
      throw 'unreachable';
  }
}

/**
 * The Console displays program outputs, but also accepts inputs.
 * That second capability is currently not used, except for a demo "/clear" command,
 * but may be hooked up to program execution to get inputs passed into user programs or plugins.
 */
const Console = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](({
  onInput
}, ref) => {
  const [{
    items
  }, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](consoleReducer, {
    nextKey: 0,
    items: []
  });
  const inputRef = _misc_hooks__WEBPACK_IMPORTED_MODULE_2__["useElementRef"]();
  const bottomRef = _misc_hooks__WEBPACK_IMPORTED_MODULE_2__["useElementRef"]();
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (bottomRef.current !== null) bottomRef.current.scrollIntoView(false);
  }, [items, bottomRef]);

  function print(text, stream) {
    dispatch({
      type: 'PRINT',
      text,
      stream
    });
  }

  function clear() {
    dispatch({
      type: 'CLEAR'
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputRef.current === null) return;
    const input = inputRef.current.value;
    inputRef.current.value = '';
    print(input, 'stdin');
    onInput(input);
  }

  react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"](ref, () => ({
    print,
    clear
  }));
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default()(_Console_scss__WEBPACK_IMPORTED_MODULE_3___default.a);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: {
      overflowX: 'auto',
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _Console_scss__WEBPACK_IMPORTED_MODULE_3___default.a.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _Console_scss__WEBPACK_IMPORTED_MODULE_3___default.a.outputPane,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, items.map(({
    key,
    text,
    stream
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("pre", {
    key: key,
    className: `${_Console_scss__WEBPACK_IMPORTED_MODULE_3___default.a.output} ${_Console_scss__WEBPACK_IMPORTED_MODULE_3___default.a[stream]}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    ref: bottomRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
    className: _Console_scss__WEBPACK_IMPORTED_MODULE_3___default.a.inputForm,
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, ">>>\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
    type: "text",
    ref: inputRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (Console);

/***/ }),

/***/ "./src/components/ide/Console/Console.scss":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Console/Console.scss");
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
      module.hot.accept("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Console/Console.scss", function() {
        css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Console/Console.scss");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/ide/Editor/Editor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-ace");
/* harmony import */ var react_ace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ace_builds_webpack_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ace-builds/webpack-resolver");
/* harmony import */ var ace_builds_webpack_resolver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ace_builds_webpack_resolver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ace-builds/src-noconflict/mode-javascript");
/* harmony import */ var ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_mode_javascript__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ace_builds_src_noconflict_ext_language_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ace-builds/src-noconflict/ext-language_tools");
/* harmony import */ var ace_builds_src_noconflict_ext_language_tools__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_ext_language_tools__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ace-builds/src-noconflict/theme-github");
/* harmony import */ var ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _misc_palette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/misc/palette.js");
/* harmony import */ var _misc_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/misc/hooks/index.js");
/* harmony import */ var _ToolBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/ide/ToolBar/ToolBar.js");
/* harmony import */ var _ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/ide/ToolBar/ToolBarIconButton.js");
/* harmony import */ var _ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/ide/ToolBar/ToolBarItem.js");
/* harmony import */ var _Editor_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/ide/Editor/Editor.scss");
/* harmony import */ var _Editor_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Editor_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _useFile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/ide/useFile.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/Editor/Editor.js";















/**
 * Wraps an `AceEditor` for display in a `FlexLayout` tab,
 * and for editing the contents of a project file.
 *
 * Besides the editor surface, the editor's toolbar allows running and terminating programs,
 * and resetting the simulation.
 */
function Editor({
  layoutNode,
  project,
  path,
  onExecutionAction,
  running
}) {
  const [[width, height], setDimension] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](['0', '0']);
  const containerRef = _misc_hooks__WEBPACK_IMPORTED_MODULE_8__["useElementRef"]();
  const [content, setContent] = Object(_useFile__WEBPACK_IMPORTED_MODULE_13__["default"])(project, path, 'utf8'); // update editor size when the containing tab is resized or made visible

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    const handleResize = () => {
      setTimeout(() => {
        if (containerRef.current === null) return;
        setDimension([`${containerRef.current.offsetWidth}px`, `${containerRef.current.offsetHeight}px`]);
      }, 0);
    };

    layoutNode.setEventListener('resize', handleResize);
    layoutNode.setEventListener('visibility', handleResize);
    handleResize();
    return () => {
      layoutNode.setEventListener('resize', null);
      layoutNode.setEventListener('visibility', null);
    };
  }, [layoutNode, containerRef]);
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default()(_Editor_scss__WEBPACK_IMPORTED_MODULE_12___default.a);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _Editor_scss__WEBPACK_IMPORTED_MODULE_12___default.a.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _Editor_scss__WEBPACK_IMPORTED_MODULE_12___default.a.container,
    ref: containerRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, content === null ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_ace__WEBPACK_IMPORTED_MODULE_2___default.a, {
    mode: "javascript",
    theme: "github",
    name: "editor",
    width: width,
    height: height // onLoad={onLoad}
    ,
    onChange: setContent,
    fontSize: 16 // onSelectionChange={onSelectionChange}
    // onCursorChange={onCursorChange}
    // onValidate={onValidate}
    ,
    value: content,
    showGutter: true,
    highlightActiveLine: true,
    autoScrollEditorIntoView: true,
    style: {
      position: 'absolute'
    },
    setOptions: {
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      // enableSnippets: enableSnippets,
      showLineNumbers: true,
      tabSize: 2
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_7__["ExecuteIcon"],
    color: "limegreen",
    onClick: () => {
      if (content !== null) onExecutionAction({
        action: 'EXECUTE',
        code: content
      });
    },
    disableRipple: true,
    disabled: running || content === null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  })), running ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: "terminate-and-reset",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => {
      onExecutionAction({
        action: 'TERMINATE',
        reset: true
      });
    },
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_7__["TerminateAndResetIcon"],
    color: "red",
    disableRipple: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: "reset",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => {
      onExecutionAction({
        action: 'RESET'
      });
    },
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_7__["ResetIcon"],
    disableRipple: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => {
      onExecutionAction({
        action: 'TERMINATE',
        reset: false
      });
    },
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_7__["TerminateIcon"],
    color: "red",
    disableRipple: true,
    disabled: !running,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ }),

/***/ "./src/components/ide/Editor/Editor.scss":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Editor/Editor.scss");
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
      module.hot.accept("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Editor/Editor.scss", function() {
        css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Editor/Editor.scss");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/ide/Executor/Executor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskHandle", function() { return TaskHandle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TaskExecutor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ide/Executor/TaskExecutor.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/util.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/Executor/Executor.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class TaskHandle {
  // eslint-disable-next-line no-use-before-define
  // eslint-disable-next-line no-use-before-define
  constructor(executor, task) {
    _defineProperty(this, "executor", void 0);

    _defineProperty(this, "task", void 0);

    _defineProperty(this, "handlers", void 0);

    _defineProperty(this, "frame", null);

    _defineProperty(this, "setFrame", frame => {
      this.frame = frame;
    });

    _defineProperty(this, "subscribe", ({
      event
    }) => {
      this.executor.registerForEvents(event, this.onEvent);
    });

    _defineProperty(this, "call", ({
      receiver,
      command,
      payload
    }) => {
      const receiverHandle = this.executor.getTaskHandle(receiver); // TODO without knowing whether the call expects a return value there is no way to report the error properly

      if (receiverHandle === null) {
        console.error(`unknown receiving task '${receiver}' for call ${command}() with payload`, payload);
        return;
      }

      receiverHandle.sendCall(this.task.name, command, payload);
    });

    _defineProperty(this, "emit", ({
      event,
      payload
    }) => {
      this.executor.sendEvent(this.task.name, event, payload);
    });

    _defineProperty(this, "reply", ({
      receiver,
      value
    }) => {
      const receiverHandle = this.executor.getTaskHandle(receiver); // even less chance to report back the error for a reply. log to console

      if (receiverHandle === null) {
        console.error(`unknown receiving task '${receiver}' for reply with value`, value);
        return;
      }

      receiverHandle.sendReply(this.task.name, value);
    });

    _defineProperty(this, "errorReply", ({
      receiver,
      error
    }) => {
      const receiverHandle = this.executor.getTaskHandle(receiver); // even less chance to report back the error for a reply. log to console

      if (receiverHandle === null) {
        console.error(`unknown receiving task '${receiver}' for reply with error`, error);
        return;
      }

      receiverHandle.sendErrorReply(this.task.name, error);
    });

    _defineProperty(this, "onEvent", (sender, event, payload) => {
      this.sendEvent(sender, event, payload);
    });

    this.executor = executor;
    this.task = task;
    this.handlers = { ...Object(_util__WEBPACK_IMPORTED_MODULE_2__["mapObject"])(task.api, // for each handler, create a function that takes the payload and invokes the handler
      handler => payload => handler(payload, this)),
      // built-in handlers
      subscribe: this.subscribe,
      call: this.call,
      emit: this.emit,
      reply: this.reply,
      errorReply: this.errorReply
    };
  } // handlers to be passed into components. arrow functions because of binding
  // used as the component ref for TaskExecutor, which has the instance type iframe


  // public API
  sendMessage(sender, command, payload) {
    if (this.frame === null) return;
    this.frame.contentWindow.postMessage({
      sender,
      command,
      payload
    }, '*');
  }

  sendCall(sender, command, payload) {
    this.sendMessage(sender, 'call', {
      command,
      payload
    });
  }

  sendEvent(sender, event, payload) {
    this.sendMessage(sender, 'event', {
      event,
      payload
    });
  }

  sendReply(sender, value) {
    this.sendMessage(sender, 'reply', value);
  }

  sendErrorReply(sender, error) {
    this.sendMessage(sender, 'errorReply', error);
  }

  async withReply(sender, cb) {
    try {
      const value = await cb();
      this.sendReply(sender, value);
    } catch (error) {
      console.error(sender, error);
      this.sendErrorReply(error.toString());
    }
  }

}

/**
 * The executor manages tasks that are running in sandboxed iframes.
 * The most common kind of task is a user program,
 * others are plugins that can interact with those programs, the simulation environment, etc. via the SDK.
 *
 * The `Task` type exported here represents a workload to be run by the Executor.
 * The executor then creates a `TaskExecutor` that runs that workload.
 */
class Executor extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "taskHandles", new Map());

    _defineProperty(this, "eventRegistry", new Map());

    _defineProperty(this, "state", {
      taskHandleList: []
    });
  }

  addTask(task) {
    const taskHandle = new TaskHandle(this, task);
    this.taskHandles.set(task.name, taskHandle);
    this.setState(state => ({
      taskHandleList: [...state.taskHandleList, taskHandle]
    }));
    return task;
  }

  removeTask(taskName) {
    const taskHandle = this.getTaskHandle(taskName);
    if (taskHandle === null) return;
    this.setState(state => ({
      taskHandleList: state.taskHandleList.filter(t => t !== taskHandle)
    }));
    this.taskHandles.delete(taskName);

    for (const listeners of this.eventRegistry.values()) {
      listeners.delete(taskHandle.onEvent);
    }
  }

  getTaskHandle(taskName) {
    var _this$taskHandles$get;

    return (_this$taskHandles$get = this.taskHandles.get(taskName)) !== null && _this$taskHandles$get !== void 0 ? _this$taskHandles$get : null;
  }

  registerForEvents(event, listener) {
    let listeners = this.eventRegistry.get(event); // create listeners array if necessary

    if (listeners === undefined) {
      listeners = new Set();
      this.eventRegistry.set(event, listeners);
    }

    listeners.add(listener);
  }

  sendEvent(sender, event, payload) {
    const listeners = this.eventRegistry.get(event);
    if (listeners === undefined) return;

    for (const listener of listeners) {
      listener(sender, event, payload);
    }
  }

  render() {
    const {
      taskHandleList
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, taskHandleList.map(taskHandle => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TaskExecutor__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: taskHandle.task.name,
      ref: taskHandle.setFrame,
      code: `return (async () => {${taskHandle.task.code}\n})();`,
      handlers: taskHandle.handlers,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 11
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Executor);

/***/ }),

/***/ "./src/components/ide/Executor/TaskExecutor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/Executor/TaskExecutor.js";

const fetchExecutorDoc = fetch('/executor').then(response => response.text());
/**
 * A TaskExecutor encapsulates a single hidden, sandboxed iframe containing the `/executor` document.
 * TaskExecutors are managed by an executor.
 *
 * The component sets up communication facilities for communication between the iframe and the IDE.
 */

const TaskExecutor = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](({
  code,
  handlers
}, ref) => {
  // load the executorDoc in the beginning
  const [executorDoc, setExecutorDoc] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    fetchExecutorDoc.then(setExecutorDoc);
  }, []); // the frame, stored for local use

  const [frame, setFrame] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null); // uses useCallback because otherwise each render resets the ref.
  // (the ref could be registered with a new callback, so the callback needs to be stable)

  const attachFrame = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](f => {
    // set the ref for this component
    if (typeof ref === 'function') ref(f);else ref.current = f; // set the frame state variable

    setFrame(f);
  }, [ref]); // register message listener

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (frame === null) return undefined;

    function receiveMessage({
      data,
      origin,
      source
    }) {
      var _handlers$command;

      if (origin !== 'null' || source !== frame.contentWindow) return;
      const {
        command,
        payload
      } = // if the source is what we expected, we assume the data is valid
      // $FlowExpectError
      data;
      (_handlers$command = handlers[command]) === null || _handlers$command === void 0 ? void 0 : _handlers$command.call(handlers, payload);
    }

    window.addEventListener('message', receiveMessage, false);
    return () => {
      window.removeEventListener('message', receiveMessage);
    };
  }, [frame, handlers]); // send execute command to iframe

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (frame === null) return;

    frame.onload = () => {
      const sender = null;
      const command = 'init';
      const payload = code;
      frame.contentWindow.postMessage({
        sender,
        command,
        payload
      }, '*');
    };
  }, [frame, code]); // only render the iframe after loading the executorDoc

  if (executorDoc === null) return null;
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("iframe", {
      ref: attachFrame,
      sandbox: "allow-scripts" // src="/executor"
      ,
      srcDoc: executorDoc,
      style: {
        display: 'none'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 7
      }
    })
  );
});
/* harmony default export */ __webpack_exports__["default"] = (TaskExecutor);

/***/ }),

/***/ "./src/components/ide/FileTree/FileMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _misc_palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/misc/palette.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/FileTree/FileMenu.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  createFolder: {
    "id": "app.ide.file_menu.create_folder",
    "defaultMessage": "New Folder"
  },
  createJavascriptFile: {
    "id": "app.ide.file_menu.create_js_file",
    "defaultMessage": "New Javascript File"
  },
  createBlocklyFile: {
    "id": "app.ide.file_menu.create_blockly_file",
    "defaultMessage": "New Blockly File"
  },
  createMarkdownFile: {
    "id": "app.ide.file_menu.create_markdown_file",
    "defaultMessage": "New Markdown File"
  },
  createPluginsDirectory: {
    "id": "app.ide.file_menu.create_plugins_directory",
    "defaultMessage": "Create Plugin Folder"
  },
  createAssetsDirectory: {
    "id": "app.ide.file_menu.create_assets_directory",
    "defaultMessage": "Create Assets Folder"
  },
  createSimulatorConfiguration: {
    "id": "app.ide.file_menu.create_simulator_configuration",
    "defaultMessage": "Create Simulator Configuration"
  },
  createLayoutConfiguration: {
    "id": "app.ide.file_menu.create_layout_configuration",
    "defaultMessage": "Create/Update Workspace Layout Configuration"
  },
  createToolboxConfiguration: {
    "id": "app.ide.file_menu.create_toolbox_configuration",
    "defaultMessage": "Create Toolbox Configuration"
  },
  rename: {
    "id": "app.ide.file_menu.rename",
    "defaultMessage": "Rename"
  },
  delete: {
    "id": "app.ide.file_menu.delete",
    "defaultMessage": "Delete"
  },
  upload: {
    "id": "app.ide.file_menu.upload",
    "defaultMessage": "Upload"
  },
  download: {
    "id": "app.ide.file_menu.download",
    "defaultMessage": "Download"
  }
});
const FileMenuItem = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](({
  titleMsg,
  icon: TheIcon,
  ...props
}, ref) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a, _extends({
  ref: ref
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 7
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TheIcon, {
  fontSize: "small",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 9
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, titleMsg, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 7
  }
}))));

class FileMenu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      visible: false,
      config: null
    });
  }

  show(anchorPosition, file) {
    this.setState({
      visible: true,
      config: {
        anchorPosition,
        file
      }
    });
  }

  hide() {
    this.setState({
      visible: false
    });
  }

  action(mkAction) {
    // eslint-disable-next-line no-throw-literal
    if (!this.state.visible) throw 'menu is not shown'; // eslint-disable-next-line no-throw-literal

    if (this.state.config === null) throw 'unreachable';
    const {
      config: {
        file
      }
    } = this.state;
    const action = mkAction(file);
    this.hide();
    this.props.onFileAction(action);
  }

  handleCreate(desc) {
    this.action(file => {
      // $FlowExpectError
      const parentDir = file;
      return {
        action: 'CREATE',
        parentDir,
        desc
      };
    });
  }

  handleRename() {
    this.action(file => ({
      action: 'RENAME',
      file
    }));
  }

  handleDelete() {
    this.action(file => ({
      action: 'DELETE',
      file
    }));
  }

  handleDownload() {
    this.action(file => ({
      action: 'DOWNLOAD',
      file
    }));
  }

  handleUpload() {
    this.action(file => {
      // $FlowExpectError
      const parentDir = file;
      return {
        action: 'UPLOAD',
        parentDir
      };
    });
  }

  render() {
    // this will only trigger before the first showing.
    // after that, the old config is still present and will ensure that
    // fade out animations won't glitch due to changing contents.
    if (this.state.config === null) return null;
    const {
      visible,
      config: {
        anchorPosition,
        file
      }
    } = this.state;
    const isRoot = file.path === '.';
    const isLeaf = !file.file.isDirectory();
    const isMetadata = file.path === './.metadata' && !isLeaf;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4___default.a, {
      keepMounted: true,
      anchorReference: "anchorPosition",
      anchorPosition: anchorPosition,
      open: visible,
      onClose: () => this.hide(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 7
      }
    }, [...(!isLeaf ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "create_directory",
      titleMsg: messages.createFolder,
      onClick: () => this.handleCreate({
        type: 'DIRECTORY'
      }),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["FolderIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 17
      }
    }), ...(isMetadata ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "create_plugins_directory",
      titleMsg: messages.createPluginsDirectory,
      onClick: () => this.handleCreate({
        type: 'METADATA',
        name: 'plugins',
        fileType: 'DIRECTORY'
      }),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["MetadataPluginsIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "create_assets_directory",
      titleMsg: messages.createAssetsDirectory,
      onClick: () => this.handleCreate({
        type: 'METADATA',
        name: 'assets',
        fileType: 'DIRECTORY'
      }),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["MetadataAssetsIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "create_layout_config",
      titleMsg: messages.createLayoutConfiguration,
      onClick: () => this.handleCreate({
        type: 'METADATA',
        name: 'layout',
        fileType: 'FILE'
      }),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["MetadataLayoutIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "create_simulator_config",
      titleMsg: messages.createSimulatorConfiguration,
      onClick: () => this.handleCreate({
        type: 'METADATA',
        name: 'simulator',
        fileType: 'FILE'
      }),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["MetadataSimulatorIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "create_toolbox_config",
      titleMsg: messages.createToolboxConfiguration,
      onClick: () => this.handleCreate({
        type: 'METADATA',
        name: 'toolbox',
        fileType: 'FILE'
      }),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["MetadataToolboxIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 23
      }
    })] : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "create_js_file",
      titleMsg: messages.createJavascriptFile,
      onClick: () => this.handleCreate({
        type: 'FILE',
        extension: '.js'
      }),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["LanguageJavascriptIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "create_blockly_file",
      titleMsg: messages.createBlocklyFile,
      onClick: () => this.handleCreate({
        type: 'FILE',
        extension: '.blockly'
      }),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["LanguageBlocklyIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "create_md_file",
      titleMsg: messages.createMarkdownFile,
      onClick: () => this.handleCreate({
        type: 'FILE',
        extension: '.md'
      }),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["MarkdownFileIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 23
      }
    })]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: "divider-directory",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 17
      }
    })] : []), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "rename",
      titleMsg: messages.rename,
      onClick: () => this.handleRename(),
      disabled: isRoot,
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["RenameIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "delete",
      titleMsg: messages.delete,
      onClick: () => this.handleDelete(),
      disabled: isRoot,
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["DeleteIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: "divider-upload-download",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 11
      }
    }), ...(!isLeaf ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "upload",
      titleMsg: messages.upload,
      onClick: () => this.handleUpload(),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["UploadIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 17
      }
    })] : [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FileMenuItem, {
      key: "download",
      titleMsg: messages.download,
      onClick: () => this.handleDownload(),
      icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["DownloadIcon"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 17
      }
    })])]);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FileMenu);

/***/ }),

/***/ "./src/components/ide/FileTree/FileTree.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rc-tree");
/* harmony import */ var rc_tree__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_tree__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_tree_assets_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rc-tree/assets/index.css");
/* harmony import */ var rc_tree_assets_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rc_tree_assets_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _misc_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/misc/palette.js");
/* harmony import */ var _misc_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/misc/hooks/index.js");
/* harmony import */ var _FileTree_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/ide/FileTree/FileTree.scss");
/* harmony import */ var _FileTree_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FileTree_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _FileMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/ide/FileTree/FileMenu.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/FileTree/FileTree.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



 // $FlowExpectError







/**
 * Displays all files and directories in a tree,
 * and provides actions to open, create, rename, move, delete files etc.
 */
function FileTree({
  files,
  expandedKeys,
  filter,
  onFileAction,
  onUpdate
}) {
  const [selectedKeys, setSelectedKeys] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
  const rootDivRef = _misc_hooks__WEBPACK_IMPORTED_MODULE_5__["useElementRef"]();
  const menuRef = _misc_hooks__WEBPACK_IMPORTED_MODULE_5__["useElementRef"]();

  function setExpandDirectory(file, state) {
    const newExpandedKeys = [...expandedKeys];
    const index = newExpandedKeys.indexOf(file.path);

    if (state === null) {
      // toggle
      if (index === -1) newExpandedKeys.push(file.path);else newExpandedKeys.splice(index, 1);
    } else {
      // set/reset
      // eslint-disable-next-line no-lonely-if
      if (index === -1 && state) newExpandedKeys.push(file.path);else if (index !== -1 && !state) newExpandedKeys.splice(index, 1);
    }

    onUpdate({
      expandedKeys: newExpandedKeys
    });
  }

  function handleFileClick(event, file) {
    setSelectedKeys([file.path]);
    event.preventDefault();
  }

  function handleFileRightClick(event, file) {
    setSelectedKeys([file.path]); // eslint-disable-next-line no-throw-literal

    if (menuRef.current === null) throw 'ref is null';
    menuRef.current.show({
      left: event.clientX - 2,
      top: event.clientY - 4
    }, file);
    event.preventDefault();
  }

  function handleFileDoubleClick(event, file) {
    setSelectedKeys([file.path]);
    if (file.file.isDirectory()) setExpandDirectory(file, null);else onFileAction({
      action: 'OPEN',
      file
    });
    event.preventDefault();
  }

  function handleFileKeyDown(event, file) {
    // we don't handle any of these
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.isComposing) return;
    if (file.file.isDirectory()) switch (event.key) {
      case 'ArrowLeft':
        setExpandDirectory(file, false);
        event.preventDefault();
        break;

      case 'ArrowRight':
        setExpandDirectory(file, true);
        event.preventDefault();
        break;

      case ' ':
      case 'Enter':
        setExpandDirectory(file, null);
        event.preventDefault();
        break;

      default:
    } else switch (event.key) {
      case ' ':
      case 'Enter':
        onFileAction({
          action: 'OPEN',
          file
        });
        event.preventDefault();
        break;

      default:
    }
  }

  function handleFileDrop({
    dragNode,
    node,
    dropToGap
  }) {
    const file = {
      path: dragNode.props.eventKey,
      file: dragNode.props.file
    };
    let destDirPath = node.props.eventKey;

    if (dropToGap) {
      if (destDirPath === '.') return;
      destDirPath += '/..';
    }

    onFileAction({
      action: 'MOVE',
      file,
      destDirPath
    });
  }

  const effectiveFilter = filter !== null && filter !== void 0 ? filter : () => true;

  function renderChildren(path, children) {
    return children.filter(child => effectiveFilter(path, child)).map(child => // eslint-disable-next-line no-use-before-define
    renderNode(`${path}/${child.name}`, child));
  }

  function renderNode(path, file) {
    const isLeaf = !file.isDirectory();
    const isExpanded = expandedKeys.includes(path);

    const TheIcon = (() => {
      if (isLeaf) {
        if (path === './.metadata/layout') return _misc_palette__WEBPACK_IMPORTED_MODULE_4__["MetadataLayoutIcon"];
        if (path === './.metadata/simulator') return _misc_palette__WEBPACK_IMPORTED_MODULE_4__["MetadataSimulatorIcon"];
        if (path === './.metadata/toolbox') return _misc_palette__WEBPACK_IMPORTED_MODULE_4__["MetadataToolboxIcon"];
        if (path.startsWith('./.metadata/plugins/') && file.name.endsWith('.js')) return _misc_palette__WEBPACK_IMPORTED_MODULE_4__["MetadataPluginsIcon"];
        if (file.name.endsWith('.blockly')) return _misc_palette__WEBPACK_IMPORTED_MODULE_4__["LanguageBlocklyIcon"];
        if (file.name.endsWith('.js')) return _misc_palette__WEBPACK_IMPORTED_MODULE_4__["LanguageJavascriptIcon"];
        if (file.name.endsWith('.py')) return _misc_palette__WEBPACK_IMPORTED_MODULE_4__["LanguagePythonIcon"];
        if (file.name.endsWith('.png') || file.name.endsWith('.jpg') || file.name.endsWith('.svg')) return _misc_palette__WEBPACK_IMPORTED_MODULE_4__["ImageFileIcon"];
        if (file.name.endsWith('.md')) return _misc_palette__WEBPACK_IMPORTED_MODULE_4__["MarkdownFileIcon"];
        if (file.name.endsWith('.pdf')) return _misc_palette__WEBPACK_IMPORTED_MODULE_4__["PdfFileIcon"];
        return _misc_palette__WEBPACK_IMPORTED_MODULE_4__["FileIcon"];
      } else {
        if (isExpanded) return _misc_palette__WEBPACK_IMPORTED_MODULE_4__["FolderOpenIcon"];
        if (path === './.metadata/assets') return _misc_palette__WEBPACK_IMPORTED_MODULE_4__["MetadataAssetsIcon"];
        return _misc_palette__WEBPACK_IMPORTED_MODULE_4__["FolderIcon"];
      }
    })();

    const attrs = {
      key: path,
      isLeaf,
      title:
      /*#__PURE__*/
      // TODO figure out accessibility
      react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        onClick: e => handleFileClick(e, {
          path,
          file
        }),
        onContextMenu: e => handleFileRightClick(e, {
          path,
          file
        }),
        onDoubleClick: e => handleFileDoubleClick(e, {
          path,
          file
        }),
        onKeyDown: e => handleFileKeyDown(e, {
          path,
          file
        }),
        role: "treeitem",
        tabIndex: "0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TheIcon, {
        className: _FileTree_scss__WEBPACK_IMPORTED_MODULE_6___default.a.fileIcon,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 11
        }
      }), file.name),
      file
    };

    if (isLeaf) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](rc_tree__WEBPACK_IMPORTED_MODULE_2__["TreeNode"], _extends({}, attrs, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 14
        }
      }));
    } else {
      // $FlowExpectError
      const dir = file;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](rc_tree__WEBPACK_IMPORTED_MODULE_2__["TreeNode"], _extends({}, attrs, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 14
        }
      }), renderChildren(path, dir.contents));
    }
  }

  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default()(rc_tree_assets_index_css__WEBPACK_IMPORTED_MODULE_3___default.a);
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default()(_FileTree_scss__WEBPACK_IMPORTED_MODULE_6___default.a);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    ref: rootDivRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](rc_tree__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "file-tree",
    showLine: true,
    showIcon: false,
    checkable: false,
    selectable: true,
    draggable: true,
    expandedKeys: expandedKeys,
    onExpand: // eslint-disable-next-line no-shadow
    expandedKeys => onUpdate({
      expandedKeys
    }),
    selectedKeys: selectedKeys,
    onDrop: handleFileDrop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 7
    }
  }, renderNode('.', files)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_FileMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: menuRef,
    onFileAction: onFileAction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (FileTree);

/***/ }),

/***/ "./src/components/ide/FileTree/FileTree.scss":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/FileTree/FileTree.scss");
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
      module.hot.accept("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/FileTree/FileTree.scss", function() {
        css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/FileTree/FileTree.scss");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/ide/FileTree/FileUpload.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/FileTree/FileUpload.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class FileUpload extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "inputRef", react__WEBPACK_IMPORTED_MODULE_0__["createRef"]());
  }

  async show() {
    return (
      /* await */
      new Promise((resolve, reject) => {
        // eslint-disable-next-line no-throw-literal
        if (this.inputRef.current === null) throw 'ref is null';
        this.inputRef.current.value = '';
        this.inputRef.current.click();
        window.addEventListener('focus', () => {
          // wait a few millis, because at least in FF
          // the onFocus happens before the file change...
          setTimeout(() => {
            if (this.inputRef.current === null) {
              // eslint-disable-next-line prefer-promise-reject-errors
              reject('ref is null');
              return;
            }

            resolve(this.inputRef.current.files);
          }, 50);
        }, {
          once: true
        });
      })
    );
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
      ref: this.inputRef,
      type: "file",
      style: {
        display: 'none'
      },
      "aria-hidden": true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 12
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FileUpload);

/***/ }),

/***/ "./src/components/ide/FileTree/useCreateFileDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCreateFileDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/misc/SimpleDialog.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/FileTree/useCreateFileDialog.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  title: {
    "id": "app.ide.create_file_dialog.title",
    "defaultMessage": "Create new {type, select, FILE {file} DIRECTORY {folder}}"
  },
  description: {
    "id": "app.ide.create_file_dialog.description",
    "defaultMessage": "Please enter the new {type, select, FILE {file's} DIRECTORY {folder's}} name."
  }
});
function useCreateFileDialog(onCreate) {
  var _config$desc;

  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [config, setConfig] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  const [newFileName, setNewFileName] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');

  function show(parentDir, desc) {
    setOpen(true);
    setConfig({
      parentDir,
      desc
    });
    setNewFileName('');
  }

  function onCancel() {
    setOpen(false);
  }

  function onChange(event) {
    const name = event.target.value;
    const nameClean = name.replace(/[^-\w#$%().,:; ]/g, '');
    setNewFileName(nameClean);
  }

  const [fileNameState, setFileNameState] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    actualNewFileName: '',
    valid: false
  });
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (config === null) return;
    const {
      parentDir,
      desc
    } = config;
    const actualNewFileName = desc.type === 'DIRECTORY' || newFileName.endsWith(desc.extension) ? newFileName : `${newFileName}${desc.extension}`;
    const valid = newFileName !== '' && parentDir.file.contents.every(f => f.name !== actualNewFileName);
    setFileNameState({
      actualNewFileName,
      valid
    });
  }, [config, newFileName]);

  async function onConfirm() {
    // eslint-disable-next-line no-throw-literal
    if (!open) throw 'dialog is not shown'; // eslint-disable-next-line no-throw-literal

    if (config === null) throw 'unreachable';
    const {
      parentDir,
      desc
    } = config;
    const {
      actualNewFileName
    } = fileNameState;
    const success = await onCreate(parentDir, actualNewFileName, desc.type);

    if (success) {
      setOpen(false);
    }
  }

  const desc = (_config$desc = config === null || config === void 0 ? void 0 : config.desc) !== null && _config$desc !== void 0 ? _config$desc : {
    type: 'DIRECTORY'
  };
  const {
    type
  } = desc;
  const {
    valid
  } = fileNameState;
  const placeholder = desc.type === 'FILE' ? `file${desc.extension}` : 'folder';
  return {
    show,

    mountSimpleDialog() {
      return {
        open,
        valid,
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.title, {
          values: {
            type
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 16
          }
        })),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.description, {
          values: {
            type
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 22
          }
        })),
        actions: 'OK_CANCEL',
        onCancel,
        onConfirm,
        children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {
          autoFocus: true,
          margin: "dense",
          id: "name",
          label: placeholder,
          type: "text",
          value: newFileName,
          onChange: onChange,
          error: !valid,
          fullWidth: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 11
          }
        })
      };
    }

  };
}

/***/ }),

/***/ "./src/components/ide/FileTree/useDeleteFileDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDeleteFileDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/misc/SimpleDialog.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/FileTree/useDeleteFileDialog.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  title: {
    "id": "app.ide.delete_file_dialog.title",
    "defaultMessage": "Confirm deletion"
  },
  description: {
    "id": "app.ide.delete_file_dialog.description",
    "defaultMessage": "Are you sure you want to delete {type, select, FILE {file} DIRECTORY {folder}} \"{name}\"?"
  }
});
function useDeleteFileDialog(onDelete) {
  var _file$name, _file$isDirectory;

  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [config, setConfig] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);

  function show(file) {
    setOpen(true);
    setConfig({
      file
    });
  }

  function onCancel() {
    setOpen(false);
  }

  async function onConfirm() {
    // eslint-disable-next-line no-throw-literal
    if (!open) throw 'dialog is not shown'; // eslint-disable-next-line no-throw-literal

    if (config === null) throw 'unreachable';
    const {
      file
    } = config; // whether the deletion succeeded or not, we want to hide the dialog.
    // Thus, ignore the result of onDelete

    await onDelete(file); // we don't set the file to null because that results in a display glitch:
    // the hide animation will leave the file name visible for a split second

    setOpen(false);
  }

  const file = config === null || config === void 0 ? void 0 : config.file.file;
  const name = (_file$name = file === null || file === void 0 ? void 0 : file.name) !== null && _file$name !== void 0 ? _file$name : '';
  const type = ((_file$isDirectory = file === null || file === void 0 ? void 0 : file.isDirectory()) !== null && _file$isDirectory !== void 0 ? _file$isDirectory : false) ? 'DIRECTORY' : 'FILE';
  return {
    show,

    mountSimpleDialog() {
      return {
        open,
        valid: true,
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.title, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 16
          }
        })),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.description, {
          values: {
            type,
            name
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 22
          }
        })),
        actions: 'OK_autofocus_CANCEL',
        onCancel,
        onConfirm
      };
    }

  };
}

/***/ }),

/***/ "./src/components/ide/FileTree/useFileDownload.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useFileDownload; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _misc_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/misc/hooks/index.js");

 // this type has all properties that are generated by mountLink()

function useFileDownload() {
  const [config, setConfig] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  const linkRef = _misc_hooks__WEBPACK_IMPORTED_MODULE_1__["useElementRef"](); // after setting the config, show the download window
  // whenever the config is changed, revoke the old objectURL

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (config === null) return undefined; // eslint-disable-next-line no-throw-literal

    if (linkRef.current === null) throw 'ref is null'; // by the time the effect is called, it should have the current objectURL
    // eslint-disable-next-line no-throw-literal

    if (linkRef.current.href !== config.objectURL) throw 'unreachable';
    linkRef.current.click();
    return () => {
      URL.revokeObjectURL(config.objectURL);
    };
  }, [config, linkRef]);

  function show(name, content) {
    const objectURL = URL.createObjectURL(new Blob([content]));
    setConfig({
      name,
      objectURL
    });
  }

  return {
    show,

    mountLink() {
      return {
        ref: linkRef,
        href: config === null || config === void 0 ? void 0 : config.objectURL,
        download: config === null || config === void 0 ? void 0 : config.name,
        style: {
          display: 'none'
        },
        'aria-hidden': true
      };
    }

  };
}

/***/ }),

/***/ "./src/components/ide/FileTree/useRenameFileDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useRenameFileDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/misc/SimpleDialog.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/FileTree/useRenameFileDialog.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["defineMessages"])({
  title: {
    "id": "app.ide.rename_file_dialog.title",
    "defaultMessage": "Rename {type, select, FILE {file} DIRECTORY {folder}}"
  },
  description: {
    "id": "app.ide.rename_file_dialog.description",
    "defaultMessage": "Please enter the {type, select, FILE {file's} DIRECTORY {folder's}} new name."
  }
});
function useRenameFileDialog(onRename) {
  var _config$file$file$isD, _config$siblingNames;

  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [config, setConfig] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  const [newFileName, setNewFileName] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');

  function show(file, siblingNames) {
    setOpen(true);
    setConfig({
      file,
      siblingNames
    });
    setNewFileName(file.file.name);
  }

  function onCancel() {
    setOpen(false);
  }

  function onChange(event) {
    const name = event.target.value;
    const nameClean = name.replace(/[^-\w#$%().,:; ]/g, '');
    setNewFileName(nameClean);
  }

  async function onConfirm() {
    // eslint-disable-next-line no-throw-literal
    if (!open) throw 'dialog is not shown'; // eslint-disable-next-line no-throw-literal

    if (config === null) throw 'unreachable';
    const {
      file
    } = config;
    const success = await onRename(file, newFileName);

    if (success) {
      setOpen(false);
    }
  }

  const type = ((_config$file$file$isD = config === null || config === void 0 ? void 0 : config.file.file.isDirectory()) !== null && _config$file$file$isD !== void 0 ? _config$file$file$isD : false) ? 'DIRECTORY' : 'FILE';
  const siblingNames = (_config$siblingNames = config === null || config === void 0 ? void 0 : config.siblingNames) !== null && _config$siblingNames !== void 0 ? _config$siblingNames : [];
  const valid = newFileName !== '' && siblingNames.every(name => name !== newFileName);
  return {
    show,

    mountSimpleDialog() {
      return {
        open,
        valid,
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.title, {
          values: {
            type
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 16
          }
        })),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, messages.description, {
          values: {
            type
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 22
          }
        })),
        actions: 'OK_CANCEL',
        onCancel,
        onConfirm,
        children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {
          autoFocus: true,
          margin: "dense",
          id: "name",
          type: "text",
          value: newFileName,
          onChange: onChange,
          error: !valid,
          fullWidth: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 11
          }
        })
      };
    }

  };
}

/***/ }),

/***/ "./src/components/ide/Ide/Ide.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("material-ui-popup-state/hooks");
/* harmony import */ var material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var filer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("filer");
/* harmony import */ var filer__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(filer__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flexlayout_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("flexlayout-react");
/* harmony import */ var flexlayout_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flexlayout_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _flex_layout_ide_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/ide/Ide/flex_layout_ide.css");
/* harmony import */ var _flex_layout_ide_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_flex_layout_ide_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _misc_palette__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/components/misc/palette.js");
/* harmony import */ var _misc_hooks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/components/misc/hooks/index.js");
/* harmony import */ var _misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/components/misc/SimpleDialog.js");
/* harmony import */ var _Console__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/components/ide/Console/Console.js");
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/components/ide/Editor/Editor.js");
/* harmony import */ var _FileTree__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/components/ide/FileTree/FileTree.js");
/* harmony import */ var _Markdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/components/ide/Markdown/Markdown.js");
/* harmony import */ var _IframeViewer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/components/ide/IframeViewer/IframeViewer.js");
/* harmony import */ var _Simulator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/components/ide/Simulator/Simulator.js");
/* harmony import */ var _SimulatorEditor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./src/components/ide/SimulatorEditor/SimulatorEditor.js");
/* harmony import */ var _VisualEditor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./src/components/ide/VisualEditor/VisualEditor.js");
/* harmony import */ var _Simulator_simulation__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./src/components/ide/Simulator/simulation/index.js");
/* harmony import */ var _core_store_projects__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./src/core/store/projects.js");
/* harmony import */ var _FileTree_useCreateFileDialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./src/components/ide/FileTree/useCreateFileDialog.js");
/* harmony import */ var _FileTree_useRenameFileDialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./src/components/ide/FileTree/useRenameFileDialog.js");
/* harmony import */ var _FileTree_useDeleteFileDialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./src/components/ide/FileTree/useDeleteFileDialog.js");
/* harmony import */ var _FileTree_FileUpload__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./src/components/ide/FileTree/FileUpload.js");
/* harmony import */ var _FileTree_useFileDownload__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./src/components/ide/FileTree/useFileDownload.js");
/* harmony import */ var _Executor__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./src/components/ide/Executor/Executor.js");
/* harmony import */ var _sdk_misc__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./src/sdk/misc.js");
/* harmony import */ var _sdk_hedgehog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./src/sdk/hedgehog.js");
/* harmony import */ var _sdk_PluginManager__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("./src/sdk/PluginManager.js");
/* harmony import */ var _useProjectInfo__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("./src/components/ide/Ide/useProjectInfo.js");
/* harmony import */ var _useProjectCache__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("./src/components/ide/Ide/useProjectCache.js");
/* harmony import */ var _usePersistentState__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("./src/components/ide/Ide/usePersistentState.js");
/* harmony import */ var _useLayoutModel__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("./src/components/ide/Ide/useLayoutModel.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/Ide/Ide.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













 // eslint-disable-next-line css-modules/no-unused-class




























const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["defineMessages"])({
  simulatorTooltip: {
    "id": "app.ide.toolbar.simulator_tooltip",
    "defaultMessage": "Simulator"
  },
  consoleTooltip: {
    "id": "app.ide.toolbar.console_tooltip",
    "defaultMessage": "Console"
  },
  restoreLayoutTooltip: {
    "id": "app.ide.toolbar.restore_layout_tooltip",
    "defaultMessage": "Restore layout"
  },
  projectSettingsTooltip: {
    "id": "app.ide.toolbar.project_settings_tooltip",
    "defaultMessage": "Project settings"
  },
  showHideMetadata: {
    "id": "app.ide.toolbar.project_settings.show_hide_metadata",
    "defaultMessage": "{action, select, SHOW {Show} HIDE {Hide}} Metadata"
  },
  createMetadata: {
    "id": "app.ide.toolbar.project_settings.create_metadata",
    "defaultMessage": "Create Metadata folder"
  }
});
const sh = new filer__WEBPACK_IMPORTED_MODULE_11__["fs"].Shell();
const SquarePaper = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"]((props, ref) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, _extends({
  ref: ref,
  square: true
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 19
  }
})));
const useStylesMaterial = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    boxSizing: 'border-box',
    height: '100%'
  },
  navToolbar: {
    padding: theme.spacing(1),
    paddingBottom: 0
  },
  editorContainer: {
    flex: '1 auto',
    position: 'relative'
  }
}));

/**
 * The main view of the Hedgehog IDE.
 *
 * This component combines managing of transient (what programs are running etc.)
 * and persisted (what files are open etc.) state
 * with UI for all the usual parts of an IDE: a file tree, a surface for file tabs,
 * and in this case a console along with a simulation environment.
 */
function Ide({
  projectName
}) {
  var _project$uid, _state$layoutState, _projectCache$simulat, _projectCache$assets, _projectCache$layoutJ;

  const project = Object(_useProjectInfo__WEBPACK_IMPORTED_MODULE_36__["default"])(projectName);
  const [pluginsLoaded, setPluginsLoaded] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [running, setRunning] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [projectCache, refreshProject] = Object(_useProjectCache__WEBPACK_IMPORTED_MODULE_37__["default"])(project);
  const [state, dispatch] = Object(_usePersistentState__WEBPACK_IMPORTED_MODULE_38__["default"])((_project$uid = project === null || project === void 0 ? void 0 : project.uid) !== null && _project$uid !== void 0 ? _project$uid : null);
  const consoleRef = _misc_hooks__WEBPACK_IMPORTED_MODULE_15__["useElementRef"]();
  const simulatorRef = _misc_hooks__WEBPACK_IMPORTED_MODULE_15__["useElementRef"]();
  const executorRef = _misc_hooks__WEBPACK_IMPORTED_MODULE_15__["useElementRef"]();
  const fileUploadRef = _misc_hooks__WEBPACK_IMPORTED_MODULE_15__["useElementRef"]();
  const pluginManagerRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  let initialLayoutState = (_state$layoutState = state === null || state === void 0 ? void 0 : state.layoutState) !== null && _state$layoutState !== void 0 ? _state$layoutState : null;

  if (initialLayoutState === _useLayoutModel__WEBPACK_IMPORTED_MODULE_39__["DEFAULT_LAYOUT_STATE"]) {
    if (projectCache === null) {
      // delay creation of the layout model until the cache is ready
      initialLayoutState = null;
    } else if (projectCache.layoutJson !== null) {
      // use the stored layout instead of the default layout
      initialLayoutState = JSON.parse(projectCache.layoutJson);
    } // fallthrough: no stored layout, just use the default layout

  }

  const [layoutModel, setLayoutState, layoutProps] = Object(_useLayoutModel__WEBPACK_IMPORTED_MODULE_39__["default"])(initialLayoutState, layoutState => {
    dispatch({
      type: 'LAYOUT',
      layoutState
    });
  }); // create new plugin manager when ready, but only once

  async function initializePluginManager() {
    if (project === null || layoutModel === null || executorRef.current === null || pluginsLoaded) return;
    const pluginManager = new _sdk_PluginManager__WEBPACK_IMPORTED_MODULE_35__["default"](executorRef.current, print, getInput, getSimulation);
    await pluginManager.initSdk();
    await pluginManager.loadFromProjectMetadata(project);
    pluginManagerRef.current = pluginManager;
    setPluginsLoaded(true);
  }

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    initializePluginManager();
  }, [project, layoutModel, pluginsLoaded]); // uses useCallback because otherwise each render resets the ref.
  // (the ref could be registered with a new callback,
  // so the callback needs to be stable)

  const attachExecutor = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](executor => {
    executorRef.current = executor;
    initializePluginManager();
  }, [executorRef, project, layoutModel, pluginsLoaded]); // load the project's simulator config if it or the simulator changes

  const simulatorXml = (_projectCache$simulat = projectCache === null || projectCache === void 0 ? void 0 : projectCache.simulatorXml) !== null && _projectCache$simulat !== void 0 ? _projectCache$simulat : null;
  const assets = (_projectCache$assets = projectCache === null || projectCache === void 0 ? void 0 : projectCache.assets) !== null && _projectCache$assets !== void 0 ? _projectCache$assets : null;

  function refreshSimulatorFromConfig(config) {
    if (simulatorRef.current === null || config === null || assets === null) return;
    simulatorRef.current.simulation.jsonInit(config, assets);
  }

  function refreshSimulator() {
    if (simulatorXml === null) return;
    const config = Object(_SimulatorEditor__WEBPACK_IMPORTED_MODULE_23__["generateConfigFromXml"])(simulatorXml);
    refreshSimulatorFromConfig(config);
  }

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    refreshSimulator();
  }, [simulatorXml, assets]); // uses useCallback because otherwise each render resets the ref.
  // (the ref could be registered with a new callback,
  // so the callback needs to be stable)

  const attachSimulator = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](sim => {
    simulatorRef.current = sim;
    refreshSimulator();
  }, [simulatorRef, simulatorXml]);

  function getFile(path) {
    // eslint-disable-next-line no-throw-literal
    if (projectCache === null) throw 'unreachable';

    const fragments = (() => {
      // the root path is the one path where a trailing slash is correct.
      // however, this confuses our use of `split`, so handle it as a special case
      if (path === './') return [];
      const [_root, ...fragments] = path.split('/');
      return fragments;
    })();

    const file = Object(_core_store_projects__WEBPACK_IMPORTED_MODULE_26__["getDescendant"])(projectCache.files, ...fragments);
    return {
      path,
      file
    };
  }

  function getNodes() {
    // eslint-disable-next-line no-throw-literal
    if (layoutModel === null) throw 'layoutModel is null';
    const nodes = {};
    layoutModel.visitNodes(node => {
      nodes[node.getId()] = node;
    });
    return nodes;
  }

  function openOrFocusTab(nodeJson, options) {
    // eslint-disable-next-line no-throw-literal
    if (layoutModel === null) throw 'layoutModel is null';
    const {
      id
    } = nodeJson;
    const nodes = getNodes();

    if (id in nodes) {
      // eslint-disable-next-line no-throw-literal
      if (nodes[id].getType() !== 'tab') throw `'${id}' is not a tab`; // the tab exists, select it

      layoutModel.doAction(flexlayout_react__WEBPACK_IMPORTED_MODULE_12___default.a.Actions.selectTab(id));
    } else {
      // create the tab.
      const {
        location,
        alwaysNewTabset
      } = {
        location: flexlayout_react__WEBPACK_IMPORTED_MODULE_12___default.a.DockLocation.RIGHT,
        alwaysNewTabset: false,
        ...(options !== null && options !== void 0 ? options : {})
      };
      let targetTabset;

      if (alwaysNewTabset) {
        targetTabset = null;
      } else {
        // what's the active tabset?
        const active = layoutModel.getActiveTabset(); // the active tabset may be undefined or a tabset that was already removed, handle that

        if (active !== undefined && active.getId() in nodes && nodes[active.getId()].getType() === 'tabset') {
          targetTabset = active;
        } else {
          targetTabset = null;
        }
      }

      if (targetTabset !== null) {
        // there's a target tabset; put the new tab there
        layoutModel.doAction(flexlayout_react__WEBPACK_IMPORTED_MODULE_12___default.a.Actions.addNode(nodeJson, targetTabset.getId(), flexlayout_react__WEBPACK_IMPORTED_MODULE_12___default.a.DockLocation.CENTER, -1));
      } else {
        // put the new tab into the root tabset, at the preferred location.
        layoutModel.doAction(flexlayout_react__WEBPACK_IMPORTED_MODULE_12___default.a.Actions.addNode(nodeJson, layoutModel.getRoot().getId(), location, -1));
      }
    }
  }

  function closeTabsForFile(file) {
    // eslint-disable-next-line no-throw-literal
    if (layoutModel === null) throw 'layoutModel is null'; // list all file paths below the given file/directory

    const pathsToClose = [];

    function listPaths(current) {
      if (current.file.isDirectory()) {
        // $FlowExpectError
        const dir = current;
        dir.file.contents.forEach(child => listPaths({
          path: `${dir.path}/${child.name}`,
          file: child
        }));
      } else {
        pathsToClose.push(current.path);
      }
    }

    listPaths(file); // close those paths that are open

    const nodes = getNodes();
    pathsToClose.forEach(path => {
      if (path in nodes) {
        layoutModel.doAction(flexlayout_react__WEBPACK_IMPORTED_MODULE_12___default.a.Actions.deleteTab(path));
      }
    });
  }

  async function waitForSimulator() {
    return (
      /* await */
      new Promise(resolve => {
        function tryIt() {
          if (simulatorRef.current) {
            resolve(simulatorRef.current);
          } else {
            setTimeout(tryIt, 0);
          }
        }

        tryIt();
      })
    );
  }

  function addSimulator() {
    openOrFocusTab({
      id: 'sim',
      type: 'tab',
      component: 'simulator',
      name: 'Simulator'
    });
    waitForSimulator().then(s => {
      // eslint-disable-next-line no-throw-literal
      if (pluginManagerRef.current === null) throw 'ref is null'; // TODO this is the only place where simulationAdded is called,
      // and it usually only happens through getSimulation through one
      // of the SDKs, e.g. the Hedgehog SDK when controlling the robot.
      // That means for a significant portion of the IDEs life,
      // the plugin manager does not know about the simulator,
      // just because no SDK called getSimulation yet.
      // the whole waitForSimulator call could be avoided when the
      // simulator has already been open, *if* we corrected the
      // lifecycle and made sure the plugin manager is aware of the
      // simulator from the beginning.

      pluginManagerRef.current.simulationAdded(s.simulation);
    });
  }

  async function getSimulation() {
    addSimulator();
    return (await waitForSimulator()).simulation;
  }

  async function waitForConsole() {
    return (
      /* await */
      new Promise(resolve => {
        function tryIt() {
          if (consoleRef.current) {
            resolve(consoleRef.current);
          } else {
            setTimeout(tryIt, 0);
          }
        }

        tryIt();
      })
    );
  }

  function addConsole() {
    openOrFocusTab({
      id: 'console',
      type: 'tab',
      component: 'console',
      name: 'Console'
    }, {
      location: flexlayout_react__WEBPACK_IMPORTED_MODULE_12___default.a.DockLocation.BOTTOM,
      alwaysNewTabset: true
    });
  }

  async function print(text, stream) {
    addConsole();
    (await waitForConsole()).print(text, stream);
  }

  const inputResolveRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);

  async function getInput() {
    if (inputResolveRef.current !== null) {
      return Promise.reject('there already is a pending input request');
    }

    return new Promise((resolve, _reject) => {
      inputResolveRef.current = resolve;
    });
  }

  async function handleConsoleInput(input) {
    const ideConsole = consoleRef.current; // eslint-disable-next-line no-throw-literal

    if (ideConsole === null) throw 'ref is null';

    if (inputResolveRef.current !== null) {
      inputResolveRef.current(input);
      inputResolveRef.current = null;
    } else if (input === '/c' || input === '/clear') {
      ideConsole.clear();
    }
  }

  async function handleExecute(code) {
    const executor = executorRef.current; // eslint-disable-next-line no-throw-literal

    if (executor === null) throw 'ref is null';
    const pluginManager = pluginManagerRef.current; // eslint-disable-next-line no-throw-literal

    if (pluginManager === null) throw 'ref is null';
    const sdk = {
      misc: await Object(_sdk_misc__WEBPACK_IMPORTED_MODULE_33__["default"])({
        print,
        getInput,
        onExit: handleTerminate,
        pluginManager,
        executor
      }),
      hedgehog: await Object(_sdk_hedgehog__WEBPACK_IMPORTED_MODULE_34__["default"])({
        getSimulation
      })
    };
    executor.addTask({
      // just some key that is unlikely to collide with a plugin
      // plugins are looked up by the .js file extension, so this should be safe
      name: '$user-program',
      code,
      api: { ...sdk.misc.handlers,
        ...sdk.hedgehog.handlers
      }
    });
    setRunning(true);
    pluginManager.getSdk().misc.emit(executor, 'programExecute', null);
  }

  async function handleTerminate(error) {
    const executor = executorRef.current; // eslint-disable-next-line no-throw-literal

    if (executor === null) throw 'ref is null';
    const pluginManager = pluginManagerRef.current; // eslint-disable-next-line no-throw-literal

    if (pluginManager === null) throw 'ref is null';
    executor.removeTask('$user-program');
    setRunning(false);
    pluginManager.getSdk().misc.emit(executor, 'programTerminate', {
      error
    });
    const simulator = simulatorRef.current;

    if (simulator !== null) {
      for (const robot of simulator.simulation.robots.values()) {
        robot.controller.off();
      }
    }
  }

  function handleReset() {
    const simulator = simulatorRef.current; // eslint-disable-next-line no-throw-literal

    if (simulator === null) throw 'ref is null';
    const executor = executorRef.current; // eslint-disable-next-line no-throw-literal

    if (executor === null) throw 'ref is null';
    const pluginManager = pluginManagerRef.current; // eslint-disable-next-line no-throw-literal

    if (pluginManager === null) throw 'ref is null';
    simulator.simulation.reset();
    pluginManager.getSdk().misc.emit(executor, 'simulationReset', null);
  }

  async function handleExecutionAction(action) {
    switch (action.action) {
      case 'EXECUTE':
        {
          const {
            code
          } = action;
          await handleExecute(code);
          break;
        }

      case 'TERMINATE':
        {
          const {
            reset
          } = action;
          await handleTerminate();

          if (reset && simulatorRef.current !== null) {
            // TODO this is a workaround for the simulated robot
            // (and probably other objects) still moving after terminating
            await new Promise(resolve => setTimeout(resolve, 100));
            await handleReset();
          }

          break;
        }

      case 'RESET':
        {
          if (simulatorRef.current !== null) await handleReset();
          break;
        }

      default:
        // eslint-disable-next-line no-throw-literal
        throw 'unreachable';
    }
  } // this is a hack to be able to open new files


  const [createdPath, setCreatedPath] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (createdPath === null) return;

    try {
      const file = getFile(createdPath);
      if (file.file.isFile()) handleFileAction({
        action: 'OPEN',
        file
      });
      setCreatedPath(null);
    } catch (_ex) {// will automatically try again when projectCache has been updated
    }
  }, [projectCache, createdPath]);

  async function confirmCreateFile(parentDir, name, type, content = '', overwriteIfExists = false) {
    // eslint-disable-next-line no-throw-literal
    if (project === null) throw 'unreachable';
    const path = project.resolve(parentDir.path, name); // check existence of the file/try creating the directory

    let isNew;

    if (type === 'FILE') {
      try {
        await filer__WEBPACK_IMPORTED_MODULE_11__["fs"].promises.stat(path);
        isNew = false;
      } catch (ex) {
        if (!(ex instanceof filer__WEBPACK_IMPORTED_MODULE_11___default.a.Errors.ENOENT)) {
          console.error(ex);
          throw ex;
        }

        isNew = true;
      }
    } else {
      try {
        await filer__WEBPACK_IMPORTED_MODULE_11__["fs"].promises.mkdir(path);
        isNew = true;
      } catch (ex) {
        if (!(ex instanceof filer__WEBPACK_IMPORTED_MODULE_11___default.a.Errors.EEXIST)) {
          console.error(ex);
          throw ex;
        }

        isNew = false;
      }
    }

    try {
      // directory was already created above, file needs to be created here
      if (type === 'FILE') {
        if (isNew || overwriteIfExists) {
          // create/update the file
          await filer__WEBPACK_IMPORTED_MODULE_11__["fs"].promises.writeFile(path, content, 'utf8');
        }
      } // no matter whether we actually created the file/directory, we want to
      // - refresh the project
      // - reveal the file
      // - TODO select the file in the file tree
      // - open the file


      await refreshProject();
      dispatch({
        type: 'EXPAND_DIRECTORY',
        path: parentDir.path
      }); // TODO select the file in the file tree

      setCreatedPath(`${parentDir.path}/${name}`);
      return isNew;
    } catch (ex) {
      console.error(ex);
      throw ex;
    }
  }

  const createFile = Object(_FileTree_useCreateFileDialog__WEBPACK_IMPORTED_MODULE_27__["default"])(confirmCreateFile);

  async function confirmRenameFile(file, newName) {
    // eslint-disable-next-line no-throw-literal
    if (project === null) throw 'unreachable';

    try {
      const path = project.resolve(file.path);
      const newPath = project.resolve(file.path, '..', newName);
      closeTabsForFile(file);
      await filer__WEBPACK_IMPORTED_MODULE_11__["fs"].promises.rename(path, newPath);
      await refreshProject();
      return true;
    } catch (ex) {
      if (ex instanceof filer__WEBPACK_IMPORTED_MODULE_11___default.a.Errors.EEXIST) {
        await refreshProject();
        return false;
      }

      if (ex instanceof filer__WEBPACK_IMPORTED_MODULE_11___default.a.Errors.ENOENT) {
        await refreshProject(); // close the dialog, the file is gone

        return true;
      }

      console.error(ex);
      throw ex;
    }
  }

  const renameFile = Object(_FileTree_useRenameFileDialog__WEBPACK_IMPORTED_MODULE_28__["default"])(confirmRenameFile);

  function beginRenameFile(file) {
    // split off the './' at the start and the file name at the end
    const path = file.path.split('/').slice(1, -1); // eslint-disable-next-line no-throw-literal

    if (projectCache === null) throw 'unreachable';
    const root = projectCache.files; // the project root is always a directory. assert and cast
    // eslint-disable-next-line no-throw-literal

    if (!root.isDirectory()) throw 'unreachable'; // $FlowExpectError

    let dir = root; // determine the files that are siblings of the event target

    path.forEach(fragment => {
      // right now `fragment` is a child of `dir`. look it up.
      const child = dir.contents.find(c => c.name === fragment); // the child is an ancestor of `file` and thus a directory. assert and cast
      // eslint-disable-next-line no-throw-literal

      if (child === undefined || !child.isDirectory()) throw 'unreachable'; // $FlowExpectError

      dir = child;
    });
    renameFile.show(file, dir.contents.map(f => f.name));
  }

  async function confirmDeleteFile(file) {
    // eslint-disable-next-line no-throw-literal
    if (project === null) throw 'unreachable';

    try {
      const path = project.resolve(file.path);
      closeTabsForFile(file);
      await sh.promises.rm(path, {
        recursive: true
      });
      await refreshProject();
      return true;
    } catch (ex) {
      if (ex instanceof filer__WEBPACK_IMPORTED_MODULE_11___default.a.Errors.EEXIST) {
        await refreshProject();
        return false;
      }

      if (ex instanceof filer__WEBPACK_IMPORTED_MODULE_11___default.a.Errors.ENOENT) {
        await refreshProject(); // close the dialog, the file is gone

        return true;
      }

      console.error(ex);
      throw ex;
    }
  }

  const deleteFile = Object(_FileTree_useDeleteFileDialog__WEBPACK_IMPORTED_MODULE_29__["default"])(confirmDeleteFile);

  async function moveFile(file, destDirPath) {
    // eslint-disable-next-line no-throw-literal
    if (project === null) throw 'unreachable';

    try {
      const path = project.resolve(file.path);
      const newPath = project.resolve(destDirPath, file.file.name);
      closeTabsForFile(file);
      await filer__WEBPACK_IMPORTED_MODULE_11__["fs"].promises.rename(path, newPath);
      await refreshProject();
      return true;
    } catch (ex) {
      if (ex instanceof filer__WEBPACK_IMPORTED_MODULE_11___default.a.Errors.EEXIST) {
        await refreshProject();
        return false;
      }

      if (ex instanceof filer__WEBPACK_IMPORTED_MODULE_11___default.a.Errors.ENOENT) {
        await refreshProject(); // close the dialog, the file is gone

        return true;
      }

      console.error(ex);
      throw ex;
    }
  }

  const fileDownload = Object(_FileTree_useFileDownload__WEBPACK_IMPORTED_MODULE_31__["default"])();

  async function downloadFile(file) {
    // eslint-disable-next-line no-throw-literal
    if (project === null) throw 'unreachable';
    const path = project.resolve(file.path);
    const content = await filer__WEBPACK_IMPORTED_MODULE_11__["fs"].promises.readFile(path, 'utf8');
    fileDownload.show(file.file.name, content);
  }

  async function uploadFiles(parentDir) {
    // eslint-disable-next-line no-throw-literal
    if (fileUploadRef.current === null) throw 'ref is null';
    const files = await fileUploadRef.current.show();
    if (files.length === 0) return; // eslint-disable-next-line no-throw-literal

    if (project === null) throw 'unreachable'; // TODO assumes there's exactly one file

    const file = files[0];

    try {
      const path = project.resolve(parentDir.path, file.name); // wrap into the augmented Node-style filer.Buffer object

      const buffer = filer__WEBPACK_IMPORTED_MODULE_11___default.a.Buffer.from(await file.arrayBuffer()); // TODO this overwrites files without warning

      await filer__WEBPACK_IMPORTED_MODULE_11__["fs"].promises.writeFile(path, buffer);
      await refreshProject();
    } catch (ex) {
      if (ex instanceof filer__WEBPACK_IMPORTED_MODULE_11___default.a.Errors.EEXIST) {
        await refreshProject();
        return;
      }

      console.error(ex);
      throw ex;
    }
  }

  function handleFileAction(action) {
    switch (action.action) {
      case 'CREATE':
        {
          const {
            parentDir,
            desc
          } = action;

          if (desc.type === 'METADATA') {
            if (parentDir.path === './.metadata' && desc.name === 'layout') {
              // eslint-disable-next-line no-throw-literal
              if (state === null) throw 'unreachable';
              const layoutJson = JSON.stringify(state.layoutState); // TODO this will not show the content in an already open file tab

              confirmCreateFile(parentDir, desc.name, desc.fileType, layoutJson, true);
            } else {
              confirmCreateFile(parentDir, desc.name, desc.fileType);
            }
          } else {
            createFile.show(parentDir, desc);
          }

          break;
        }

      case 'RENAME':
        {
          const {
            file
          } = action;
          beginRenameFile(file);
          break;
        }

      case 'DELETE':
        {
          const {
            file
          } = action;
          deleteFile.show(file);
          break;
        }

      case 'MOVE':
        {
          const {
            file,
            destDirPath
          } = action;
          moveFile(file, destDirPath);
          break;
        }

      case 'OPEN':
        {
          const {
            file: {
              path,
              file
            }
          } = action;

          const component = (() => {
            if (path === './.metadata/simulator') return 'simulator-editor'; // if (path === './.metadata/toolbox') return 'toolbox-editor';

            if (file.name.endsWith('.blockly')) return 'blockly';
            if (file.name.endsWith('.js')) return 'editor';
            if (file.name.endsWith('.md')) return 'markdown';
            if (file.name.endsWith('.pdf')) return 'iframe';
            if (file.name.endsWith('.png')) return 'iframe';
            if (file.name.endsWith('.jpg')) return 'iframe';
            return 'editor';
          })();

          openOrFocusTab({
            id: path,
            type: 'tab',
            component,
            name: file.name
          });
          break;
        }

      case 'DOWNLOAD':
        {
          const {
            file
          } = action;
          downloadFile(file);
          break;
        }

      case 'UPLOAD':
        {
          const {
            parentDir
          } = action;
          uploadFiles(parentDir);
          break;
        }

      default:
        // eslint-disable-next-line no-throw-literal
        throw 'unreachable';
    }
  }

  const projectSettingsPopupState = Object(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_10__["usePopupState"])({
    variant: 'popover',
    popupId: 'project-controls-menu'
  });
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default()(_flex_layout_ide_css__WEBPACK_IMPORTED_MODULE_13___default.a);
  const classes = useStylesMaterial();
  if (project === null || projectCache === null || state === null) return null;
  const {
    fileTreeState,
    showMetadataFolder
  } = state;
  let hasMetadataFolder;

  try {
    getFile('./.metadata');
    hasMetadataFolder = true;
  } catch (_ex) {
    hasMetadataFolder = false;
  }

  function factory(node) {
    function bindEditorProps(path, editorType) {
      return { ...(() => {
          const editorStates = state.editorStates[path];
          const editorState = editorStates ? editorStates[editorType] : null;
          return editorState;
        })(),
        onUpdate: editorState => {
          const editorStates = {
            [editorType]: editorState
          };
          dispatch({
            type: 'SET_EDITOR_STATE',
            path,
            editorStates
          });
        }
      };
    }

    const id = node.getId();

    switch (node.getComponent()) {
      case 'editor':
        {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Editor__WEBPACK_IMPORTED_MODULE_18__["default"], {
            layoutNode: node,
            project: project,
            path: id // {...bindEditorProps(id, 'editor')}
            ,
            onExecutionAction: handleExecutionAction,
            running: running,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 917,
              columnNumber: 11
            }
          });
        }

      case 'blockly':
        {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_VisualEditor__WEBPACK_IMPORTED_MODULE_24__["default"], _extends({
            layoutNode: node,
            project: project,
            path: id
          }, bindEditorProps(id, 'blockly'), {
            onExecutionAction: handleExecutionAction,
            running: running,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 929,
              columnNumber: 11
            }
          }));
        }

      case 'markdown':
        {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Markdown__WEBPACK_IMPORTED_MODULE_20__["default"], _extends({
            layoutNode: node,
            project: project,
            path: id,
            assets: projectCache.assets
          }, bindEditorProps(id, 'markdown'), {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 941,
              columnNumber: 11
            }
          }));
        }

      case 'iframe':
        {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_IframeViewer__WEBPACK_IMPORTED_MODULE_21__["default"], {
            layoutNode: node,
            project: project,
            path: id // {...bindEditorProps(id, 'iframe')}
            ,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 952,
              columnNumber: 11
            }
          });
        }

      case 'simulator-editor':
        {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SimulatorEditor__WEBPACK_IMPORTED_MODULE_23__["default"], _extends({
            layoutNode: node,
            project: project,
            path: id
          }, bindEditorProps(id, 'simulator-editor'), {
            onConfigChange: refreshSimulatorFromConfig,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 962,
              columnNumber: 11
            }
          }));
        }

      case 'simulator':
        {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Simulator__WEBPACK_IMPORTED_MODULE_22__["default"], _extends({
            ref: attachSimulator,
            running: running
          }, state.simulatorState, {
            onUpdate: simulatorState => {
              dispatch({
                type: 'SET_SIMULATOR_STATE',
                simulatorState
              });
            },
            onExecutionAction: handleExecutionAction,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 973,
              columnNumber: 11
            }
          }));
        }

      case 'console':
        {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Console__WEBPACK_IMPORTED_MODULE_17__["default"], {
            ref: consoleRef,
            onInput: handleConsoleInput,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 985,
              columnNumber: 16
            }
          });
        }

      default:
        return null;
    }
  }

  function filter(path, child) {
    if (path === '.' && child.name === '.metadata' && !showMetadataFolder) return false;
    return true;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.root,
    container: true,
    direction: "row",
    wrap: "nowrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 998,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    component: SquarePaper,
    style: {
      flex: '0 auto',
      minWidth: '150px',
      marginRight: '8px',
      overflow: 'auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 999,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classes.navToolbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1009,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9___default.a, {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, messages.simulatorTooltip, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1010,
        columnNumber: 27
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1010,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "contained",
    color: "primary",
    size: "small",
    onClick: addSimulator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1011,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_14__["SimulatorIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1012,
      columnNumber: 15
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9___default.a, {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, messages.consoleTooltip, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1015,
        columnNumber: 27
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1015,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "contained",
    color: "primary",
    size: "small",
    onClick: addConsole,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1016,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_14__["ConsoleIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1017,
      columnNumber: 15
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9___default.a, {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, messages.restoreLayoutTooltip, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1020,
        columnNumber: 27
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1020,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1021,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "contained",
    color: "primary",
    size: "small",
    disabled: ((_projectCache$layoutJ = projectCache === null || projectCache === void 0 ? void 0 : projectCache.layoutJson) !== null && _projectCache$layoutJ !== void 0 ? _projectCache$layoutJ : null) === null,
    onClick: () => {
      var _projectCache$layoutJ2;

      const layoutJson = (_projectCache$layoutJ2 = projectCache === null || projectCache === void 0 ? void 0 : projectCache.layoutJson) !== null && _projectCache$layoutJ2 !== void 0 ? _projectCache$layoutJ2 : null; // eslint-disable-next-line no-throw-literal

      if (layoutJson === null) throw 'unreachable';
      setLayoutState(JSON.parse(layoutJson));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1022,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_14__["RestoreLayoutIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1035,
      columnNumber: 17
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9___default.a, {
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, messages.projectSettingsTooltip, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1039,
        columnNumber: 27
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1039,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, _extends({
    variant: "contained",
    color: "primary",
    size: "small"
  }, Object(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_10__["bindTrigger"])(projectSettingsPopupState), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1040,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_14__["SettingsIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1046,
      columnNumber: 15
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({
    keepMounted: true
  }, Object(material_ui_popup_state_hooks__WEBPACK_IMPORTED_MODULE_10__["bindMenu"])(projectSettingsPopupState), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1049,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "contained",
    color: "primary",
    size: "small",
    onClick: () => {
      projectSettingsPopupState.close();

      if (hasMetadataFolder) {
        dispatch({
          type: 'TOGGLE_METADATA_FOLDER'
        });
      } else {
        // $FlowExpectError
        const parentDir = getFile('./');
        handleFileAction({
          action: 'CREATE',
          parentDir,
          desc: {
            type: 'METADATA',
            name: '.metadata',
            fileType: 'DIRECTORY'
          }
        });
        dispatch({
          type: 'SHOW_METADATA_FOLDER',
          value: true
        });
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1050,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], _extends({}, hasMetadataFolder ? messages.showHideMetadata : messages.createMetadata, {
    values: hasMetadataFolder ? {
      action: showMetadataFolder ? 'HIDE' : 'SHOW'
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1075,
      columnNumber: 15
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1087,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_FileTree__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({
    files: projectCache.files
  }, fileTreeState, {
    filter: filter,
    onFileAction: handleFileAction,
    onUpdate: // eslint-disable-next-line no-shadow
    fileTreeState => dispatch({
      type: 'UPDATE_FILE_TREE',
      fileTreeState
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1089,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({
    id: "create-file-dialog"
  }, createFile.mountSimpleDialog(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1099,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({
    id: "rename-file-dialog"
  }, renameFile.mountSimpleDialog(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1100,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_SimpleDialog__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({
    id: "delete-file-dialog"
  }, deleteFile.mountSimpleDialog(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1101,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_FileTree_FileUpload__WEBPACK_IMPORTED_MODULE_30__["default"], {
    ref: fileUploadRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1102,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", _extends({}, fileDownload.mountLink(), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1104,
      columnNumber: 9
    }
  }))), pluginsLoaded && layoutModel !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    item: true,
    component: SquarePaper,
    className: classes.editorContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1107,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](flexlayout_react__WEBPACK_IMPORTED_MODULE_12___default.a.Layout, _extends({}, layoutProps, {
    factory: factory,
    classNameMapper: className => _flex_layout_ide_css__WEBPACK_IMPORTED_MODULE_13___default.a[className],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1108,
      columnNumber: 11
    }
  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Executor__WEBPACK_IMPORTED_MODULE_32__["default"], {
    ref: attachExecutor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1115,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Ide);

/***/ }),

/***/ "./src/components/ide/Ide/flex_layout_ide.css":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Ide/flex_layout_ide.css");
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
      module.hot.accept("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Ide/flex_layout_ide.css", function() {
        css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Ide/flex_layout_ide.css");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/ide/Ide/useLayoutModel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LAYOUT_STATE", function() { return DEFAULT_LAYOUT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useLayoutModel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flexlayout_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("flexlayout-react");
/* harmony import */ var flexlayout_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flexlayout_react__WEBPACK_IMPORTED_MODULE_1__);


const DEFAULT_LAYOUT_STATE = {
  global: {},
  borders: [],
  layout: {
    type: 'tabset',
    children: []
  }
};
// FlexLayout.Model uses a different approach to state:
// It uses a mutable model object which is not suitable for react's regular
// handling of state updates.
// it is also not a plain JS object but an instance of a class that needs
// to be serialized for persistence.
// This hook bridges this API mismatch.
// The passed state is used to create a model the first time it is not null,
// and changes to the model (detected by a callback registered with the Layout)
// update the state.
// Subsequent changes to the state are assumed to be triggered by model changes
// and are therefore ignored.
//
//    const [state, setState] = React.useState(null);
//    const [model, layoutProps] = useLayoutModel(state, setState);
//    // somewhere, state is set to a non-null value
//
//    // layoutProps contains both model and onModelChange
//    return model && <FlexLayout.Layout {...layoutProps} />;
function useLayoutModel(layoutState, onLayoutStateChange) {
  const [model, setModel] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    // only load the model once when the layoutState becomes non-null
    if (layoutState === null || model !== null) return;
    setModel(flexlayout_react__WEBPACK_IMPORTED_MODULE_1___default.a.Model.fromJson(layoutState));
  }, [layoutState, model]);

  function setLayoutState(newLayoutState) {
    setModel(flexlayout_react__WEBPACK_IMPORTED_MODULE_1___default.a.Model.fromJson(newLayoutState));
  }

  return [model, setLayoutState, {
    model,

    onModelChange() {
      // eslint-disable-next-line no-throw-literal
      if (model === null) throw 'onModelChange when model is null';
      onLayoutStateChange(model.toJson());
    }

  }];
}

/***/ }),

/***/ "./src/components/ide/Ide/usePersistentState.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePersistentState; });
/* harmony import */ var _misc_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/misc/hooks/index.js");
/* harmony import */ var _useLayoutModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ide/Ide/useLayoutModel.js");



function ideState(state, action) {
  switch (action.type) {
    case 'SET_EDITOR_STATE':
      {
        const {
          path,
          editorStates
        } = action;
        return { ...state,
          editorStates: { ...state.editorStates,
            [path]: { ...state.editorStates[path],
              ...editorStates
            }
          }
        };
      }

    case 'SET_SIMULATOR_STATE':
      {
        const {
          simulatorState
        } = action;
        return { ...state,
          simulatorState
        };
      }

    case 'EXPAND_DIRECTORY':
      {
        const {
          path
        } = action;
        const {
          expandedKeys
        } = state.fileTreeState; // no need to update state if the parent directory is already expanded

        if (expandedKeys.includes(path)) return state;
        return { ...state,
          fileTreeState: { ...state.fileTreeState,
            expandedKeys: [...expandedKeys, path]
          }
        };
      }

    case 'TOGGLE_METADATA_FOLDER':
      {
        return { ...state,
          showMetadataFolder: !state.showMetadataFolder
        };
      }

    case 'SHOW_METADATA_FOLDER':
      {
        const {
          value
        } = action;
        return { ...state,
          showMetadataFolder: value
        };
      }

    case 'UPDATE_FILE_TREE':
      {
        const {
          fileTreeState
        } = action;
        return { ...state,
          fileTreeState
        };
      }

    case 'LAYOUT':
      {
        const {
          layoutState
        } = action;
        return { ...state,
          layoutState
        };
      }

    default:
      return state;
  }
}

const useStorage = Object(_misc_hooks__WEBPACK_IMPORTED_MODULE_0__["makeLocalStorageOpt"])(json => ({
  // default state
  fileTreeState: {
    expandedKeys: []
  },
  showMetadataFolder: false,
  layoutState: _useLayoutModel__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_LAYOUT_STATE"],
  simulatorState: {
    zoom: 100,
    zoomMode: 'FIT'
  },
  editorStates: {},
  // persisted state
  ...(json !== null ? JSON.parse(json) : null)
}), state => JSON.stringify(state));
function usePersistentState(projectUid) {
  const [state, setState] = useStorage(projectUid && `IDE-State-${projectUid}`);

  function dispatch(action) {
    setState(state => {
      // eslint-disable-next-line no-throw-literal
      if (state === undefined) throw 'state must be loaded first';
      return ideState(state, action);
    });
  }

  return [state !== null && state !== void 0 ? state : null, dispatch];
}

/***/ }),

/***/ "./src/components/ide/Ide/useProjectCache.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useProjectCache; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var filer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("filer");
/* harmony import */ var filer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(filer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_store_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/core/store/projects.js");
/* harmony import */ var _misc_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/misc/hooks/index.js");




function useProjectCache(project) {
  const [internalState, setInternalState] = Object(_misc_hooks__WEBPACK_IMPORTED_MODULE_3__["useAsyncState"])(null);

  function refreshProject() {
    if (project === null) {
      setInternalState(null);
      return;
    }

    async function loadAssets(root) {
      const assetBuffers = new Map();
      let assetsFile;

      try {
        assetsFile = Object(_core_store_projects__WEBPACK_IMPORTED_MODULE_2__["getDescendant"])(root, '.metadata', 'assets');
      } catch (err) {
        console.error(err);
        return assetBuffers;
      }

      if (!assetsFile.isDirectory()) return assetBuffers; // $FlowExpectError

      const assetsDir = assetsFile;

      async function walk(prefix, files) {
        await Promise.all(files.map(async f => {
          if (f.isDirectory()) {
            // $FlowExpectError
            const dir = f;
            await walk(`${prefix}${f.name}/`, dir.contents);
          } else {
            const absolutePath = project.resolve('./.metadata/assets', prefix, f.name);
            const buffer = await filer__WEBPACK_IMPORTED_MODULE_1__["fs"].promises.readFile(absolutePath);
            assetBuffers.set(`asset:${prefix}${f.name}`, buffer);
          }
        }));
      }

      await walk('', assetsDir.contents);
      return assetBuffers;
    }

    async function loadFilesAndAssets() {
      const files = await project.getFiles();
      const assetBuffers = await loadAssets(files);
      return [files, assetBuffers];
    }

    async function loadSimulatorXml() {
      const absolutePath = project.resolve('./.metadata/simulator');

      try {
        const workspaceXml = await filer__WEBPACK_IMPORTED_MODULE_1__["fs"].promises.readFile(absolutePath, 'utf8');
        if (workspaceXml === '') return null;
        return workspaceXml;
      } catch (ex) {
        if (!(ex instanceof filer__WEBPACK_IMPORTED_MODULE_1___default.a.Errors.ENOENT)) {
          throw ex;
        }

        return null;
      }
    }

    async function loadLayoutJson() {
      const absolutePath = project.resolve('./.metadata/layout');

      try {
        const layoutJson = await filer__WEBPACK_IMPORTED_MODULE_1__["fs"].promises.readFile(absolutePath, 'utf8');
        return layoutJson;
      } catch (ex) {
        if (!(ex instanceof filer__WEBPACK_IMPORTED_MODULE_1___default.a.Errors.ENOENT)) {
          throw ex;
        }

        return null;
      }
    }

    async function loadProjectCache() {
      // load project from the file system
      const [[files, assetBuffers], simulatorXml, layoutJson] = await Promise.all([loadFilesAndAssets(), loadSimulatorXml(), loadLayoutJson()]);
      return {
        files,
        simulatorXml,
        layoutJson,
        assetBuffers
      };
    }

    setInternalState(loadProjectCache());
  } // refresh project when projectName changes


  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    refreshProject();
  }, [project]);
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null); // provide blob URLs for assets

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (internalState === null) {
      setState(null);
      return undefined;
    }

    const {
      files,
      simulatorXml,
      layoutJson,
      assetBuffers
    } = internalState;
    const urls = [];
    const assets = new Map();

    for (const [key, buffer] of assetBuffers) {
      const blob = new Blob([buffer]);
      const url = URL.createObjectURL(blob);
      urls.push(url);
      assets.set(key, [url, buffer]);
    }

    setState({
      files,
      simulatorXml,
      layoutJson,
      assets
    });
    return () => {
      for (const url of urls) {
        URL.revokeObjectURL(url);
      }
    };
  }, [internalState]);
  return [state, refreshProject];
}

/***/ }),

/***/ "./src/components/ide/Ide/useProjectInfo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useProjectInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_store_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/store/projects.js");
/* harmony import */ var _misc_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/misc/hooks/index.js");



function useProjectInfo(projectName) {
  const [state, setState] = Object(_misc_hooks__WEBPACK_IMPORTED_MODULE_2__["useAsyncState"])(null); // refresh project when projectName changes

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    setState(_core_store_projects__WEBPACK_IMPORTED_MODULE_1__["Project"].getProject(projectName));
  }, [projectName]);
  return state;
}

/***/ }),

/***/ "./src/components/ide/IframeViewer/IframeViewer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useFileObjectURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ide/useFileObjectURL.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/IframeViewer/IframeViewer.js";



/**
 * Shows a project file in an iframe. This is effective for file types such as PDF documents or images.
 */
// eslint-disable-next-line no-unused-vars
function IframeViewer({
  layoutNode,
  project,
  path
}) {
  const url = Object(_useFileObjectURL__WEBPACK_IMPORTED_MODULE_1__["default"])(project, path);
  return url === null ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("iframe", {
    title: path,
    src: url,
    style: {
      width: '100%',
      height: '100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (IframeViewer);

/***/ }),

/***/ "./src/components/ide/Markdown/Markdown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _uiw_react_md_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@uiw/react-md-editor");
/* harmony import */ var _uiw_react_md_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_uiw_react_md_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _uiw_react_md_editor_dist_markdown_editor_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@uiw/react-md-editor/dist/markdown-editor.css");
/* harmony import */ var _uiw_react_md_editor_dist_markdown_editor_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_uiw_react_md_editor_dist_markdown_editor_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _misc_palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/misc/palette.js");
/* harmony import */ var _misc_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/misc/hooks/index.js");
/* harmony import */ var _Markdown_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/ide/Markdown/Markdown.scss");
/* harmony import */ var _Markdown_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Markdown_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _useFile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/ide/useFile.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/Markdown/Markdown.js";





/* eslint-disable camelcase */
// $FlowExpectError


/* eslint-enable camelcase */






/**
 * Wraps an `MDEditor` for display in a `FlexLayout` tab,
 * and for editing the contents of a project file.
 */
function Markdown({
  layoutNode,
  project,
  path,
  assets,
  mode,
  onUpdate
}) {
  const [height, setHeight] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](200);
  const containerRef = _misc_hooks__WEBPACK_IMPORTED_MODULE_7__["useElementRef"]();
  const [content, setContent] = Object(_useFile__WEBPACK_IMPORTED_MODULE_9__["default"])(project, path, 'utf8'); // update editor size when the containing tab is resized or made visible

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    const handleResize = () => {
      setTimeout(() => {
        if (containerRef.current === null) return;
        setHeight(containerRef.current.offsetHeight);
      }, 0);
    };

    layoutNode.setEventListener('resize', handleResize);
    layoutNode.setEventListener('visibility', handleResize);
    handleResize();
    return () => {
      layoutNode.setEventListener('resize', null);
      layoutNode.setEventListener('visibility', null);
    };
  }, [layoutNode, containerRef]); // update the mode on first load

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (mode !== 'default' || content === null) return;
    onUpdate({
      mode: content === '' ? 'edit' : 'preview'
    });
  }, [onUpdate, mode, content]); // resolve assets for the preview

  const [previewContent, setPreviewContent] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (content === null) {
      setPreviewContent(null);
      return;
    }

    const replaced = content.replace(/\]\((asset:.*?)\)/g, (_match, asset) => {
      var _assets$get$, _assets$get;

      return `](${(_assets$get$ = (_assets$get = assets.get(asset)) === null || _assets$get === void 0 ? void 0 : _assets$get[0]) !== null && _assets$get$ !== void 0 ? _assets$get$ : ''})`;
    });
    setPreviewContent(replaced);
  }, [content, assets]);
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default()(_Markdown_scss__WEBPACK_IMPORTED_MODULE_8___default.a);
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default()(_uiw_react_md_editor_dist_markdown_editor_css__WEBPACK_IMPORTED_MODULE_5___default.a);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _Markdown_scss__WEBPACK_IMPORTED_MODULE_8___default.a.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    key: `md-${height}`,
    className: _Markdown_scss__WEBPACK_IMPORTED_MODULE_8___default.a.container,
    ref: containerRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, content === null ? null : mode === 'edit' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_uiw_react_md_editor__WEBPACK_IMPORTED_MODULE_4___default.a, {
    value: content,
    onChange: setContent,
    visiableDragbar: false,
    height: height,
    commands: [..._uiw_react_md_editor__WEBPACK_IMPORTED_MODULE_4__["commands"].getCommands().slice(0, -1), {
      name: 'activatePreview',
      keyCommand: 'activatePreview',
      buttonProps: {
        'aria-label': 'Activate Preview'
      },
      icon: _uiw_react_md_editor__WEBPACK_IMPORTED_MODULE_4__["commands"].fullscreen.icon,
      execute: (_state, _api) => {
        onUpdate({
          mode: 'preview'
        });
      }
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _Markdown_scss__WEBPACK_IMPORTED_MODULE_8___default.a.previewContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _Markdown_scss__WEBPACK_IMPORTED_MODULE_8___default.a.previewViewport,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _Markdown_scss__WEBPACK_IMPORTED_MODULE_8___default.a.preview,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_uiw_react_md_editor__WEBPACK_IMPORTED_MODULE_4___default.a.Markdown, {
    source: previewContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _Markdown_scss__WEBPACK_IMPORTED_MODULE_8___default.a.previewToolbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_3___default.a, {
    title: "Edit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: "small",
    onClick: () => onUpdate({
      mode: 'edit'
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_misc_palette__WEBPACK_IMPORTED_MODULE_6__["MarkdownFileIcon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }))))))));
}

Markdown.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  mode: 'default'
};
/* harmony default export */ __webpack_exports__["default"] = (Markdown);

/***/ }),

/***/ "./src/components/ide/Markdown/Markdown.scss":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Markdown/Markdown.scss");
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
      module.hot.accept("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Markdown/Markdown.scss", function() {
        css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Markdown/Markdown.scss");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/ide/Simulator/DefaultPlayground.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@babylonjs/core");
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var webrob_src_AxesHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webrob/src/AxesHelper");
/* harmony import */ var webrob_src_AxesHelper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webrob_src_AxesHelper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _URDFJSONLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/ide/Simulator/URDFJSONLoader.js");
/* harmony import */ var webrob_src_InputController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("webrob/src//InputController");
/* harmony import */ var webrob_src_InputController__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(webrob_src_InputController__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var eulerutil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("eulerutil");
/* harmony import */ var eulerutil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(eulerutil__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var webrob_src_robot_MultiRobotHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("webrob/src/robot/MultiRobotHandler");
/* harmony import */ var webrob_src_robot_MultiRobotHandler__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(webrob_src_robot_MultiRobotHandler__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tmp_webRob_src_test_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../../../tmp/webRob/src/test/data.js");
/* harmony import */ var _babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("@babylonjs/core/Loading/sceneLoader");
/* harmony import */ var _babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/Simulator/DefaultPlayground.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const inputsDef = {
  xAxis: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Keyboard, [-'S'.charCodeAt(0), 'W'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].DualShock, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DualShockInput"].LStickXAxis]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Xbox, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["XboxInput"].LStickXAxis]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Generic, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["XboxInput"].LStickXAxis]]],
  yAxis: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Keyboard, [-'A'.charCodeAt(0), 'D'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].DualShock, [-_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DualShockInput"].LStickYAxis]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Xbox, [-_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["XboxInput"].LStickYAxis]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Generic, [-_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["XboxInput"].LStickYAxis]]],
  zAxis: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Keyboard, [-'Q'.charCodeAt(0), 'E'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].DualShock, [-_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DualShockInput"].RStickYAxis]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Xbox, [-_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["XboxInput"].RStickYAxis]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Generic, [-_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["XboxInput"].RStickYAxis]]],
  mode: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Keyboard, [' '.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].DualShock, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DualShockInput"].R1, _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DualShockInput"].L1]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Xbox, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["XboxInput"].RB, _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["XboxInput"].LB]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Generic, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["XboxInput"].RB, _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["XboxInput"].LB]]],
  fast: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Keyboard, ['O'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].DualShock, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DualShockInput"].R2]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Xbox, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["XboxInput"].RT]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Generic, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["XboxInput"].RT]]],
  slow: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Keyboard, ['L'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].DualShock, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DualShockInput"].L2]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Xbox, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["XboxInput"].LT]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Generic, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["XboxInput"].LT]]],
  tool1: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Keyboard, ['1'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].DualShock, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DualShockInput"].Cross]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Xbox, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["XboxInput"].A]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Generic, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["XboxInput"].A]]],
  tool2: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Keyboard, ['2'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].DualShock, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DualShockInput"].Circle]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Xbox, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["XboxInput"].B]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["DeviceType"].Generic, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["XboxInput"].B]]]
};
var inputController;
var scene;
var rendering = false;
var engine;
var assetsManager;
var assetsManager = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["AssetsManager"](scene);
const robotData = [{
  path: "robot/festo_description/urdf/excm40.urdfjson",
  pos: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 0),
  rot: Object(eulerutil__WEBPACK_IMPORTED_MODULE_6__["eulerToQuaternion"])(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 0)),
  chains: [{
    base: 'base_link',
    flange: 'axis3',
    ik: 'cartesianik',
    tools: [{
      position: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, -0.05),
      rotationQuaternion: Object(eulerutil__WEBPACK_IMPORTED_MODULE_6__["eulerToQuaternion"])(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 0)),
      type: 'vacuumGripper',
      visual: {
        parameter: {
          diameter: 0.01,
          height: 0.05
        },
        position: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, -0.025),
        rotationQuaternion: Object(eulerutil__WEBPACK_IMPORTED_MODULE_6__["eulerToQuaternion"])(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](Math.PI / 2, 0, 0))
      }
    }]
  }]
} //{path: "robot/pr2_description/robots/", file: 'pr2.urdfjson', pos: new Vector3(0,0,0)},
];
/* harmony default export */ __webpack_exports__["default"] = (props => {
  const reactCanvas = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  const {
    antialias,
    engineOptions,
    adaptToDeviceRatio,
    sceneOptions,
    onRender,
    onSceneReady,
    ...rest
  } = props;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (reactCanvas.current) {
      engine = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Engine"](reactCanvas.current, antialias, engineOptions, adaptToDeviceRatio);
      scene = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Scene"](engine, sceneOptions);
      assetsManager = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["AssetsManager"](scene);
      inputController = new webrob_src_InputController__WEBPACK_IMPORTED_MODULE_5___default.a(scene);
      inputController.setInputDefinition(inputsDef);
      inputController.currentInputsProcessed.add(() => inputsProcessed());
      const cameraRadius = 2;
      const alpha = _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Tools"].ToRadians(-45);
      const beta = _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Tools"].ToRadians(45);
      const camera = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["ArcRotateCamera"]("camera", alpha, beta, cameraRadius, new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 0.2)
      /*robot.workRangeCenter*/
      , scene);
      camera.attachControl(reactCanvas.current, true);
      camera.wheelPrecision = 20;
      camera.upVector = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 1);
      scene.useRightHandedSystem = true;
      camera.minZ = 0.03;
      const light = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["HemisphericLight"]("light1", new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 1), scene);
      light.intensity = 0.7;
      const axes = webrob_src_AxesHelper__WEBPACK_IMPORTED_MODULE_2___default()(scene, 0.5, 1.0, true);

      if (scene.isReady()) {
        props.onSceneReady(scene);
      } else {
        scene.onReadyObservable.addOnce(scene => props.onSceneReady(scene));
      }

      engine.runRenderLoop(() => {
        if (typeof onRender === "function") {
          onRender(scene);
          camera.inputs.checkInputs();
          inputController.processInputs();

          if (camera.inertialAlphaOffset === 0 && camera.inertialBetaOffset === 0 && camera.inertialRadiusOffset === 0 && camera.inertialPanningX === 0 && camera.inertialPanningY === 0 && scene._activeAnimatables.length === 0 && inputController.activatedInputs.length === 0 && inputController.changedInputs.length === 0) {
            if (rendering === true) {
              console.log("Paused Renderloop");
              rendering = false;
            }
          } else {
            scene.render();

            if (rendering === false) {
              let allrobots = null;
              console.log("Started Renderloop"); // await r.Wait(2)
              //r.speed = 0.2
              //r.setTCPTo( new Vector3(0.3, 0.3, 0.3), eulerToQuaternion(new Vector3(0, Math.PI / 2, -Math.PI + 0.1)))

              /*await r.MoveTo({Straight: false, Pose: {'A': 0, 'B': Math.PI / 2, 'C':-Math.PI + 0.1, 'X':300, 'Y':400, 'Z': 300}})
              await r.lin(Matrix.Compose(Vector3.One(), eulerToQuaternion(new Vector3(0, Math.PI / 2, -Math.PI + 0.1)), new Vector3(0.3, 0.5, 0.3)))
              r.SetEndEffectorParameters({setting: 1.0})
              await r.ptp(Matrix.Compose(Vector3.One(), eulerToQuaternion(new Vector3(0, Math.PI / 2, -Math.PI + 0.1)), new Vector3(0.3, 0.3, 0.3)))
              r.SetEndEffectorParameters({setting: 0.0})
              await r.ptp(Matrix.Compose(Vector3.One(), eulerToQuaternion(new Vector3(0, Math.PI / 2, -Math.PI + 0.1)), new Vector3(0.3, 0.4, 0.3)))
              */
              //await executeMultiRobotProgram(allrobots, TEST_CMDS)

              rendering = true;
            }
          }
        }

        scene.render();
      });

      const resize = () => {
        scene.getEngine().resize();
      };

      if (window) {
        window.addEventListener("resize", resize);
      }

      return () => {
        scene.getEngine().dispose();

        if (window) {
          window.removeEventListener("resize", resize);
        }
      };
    }
  }, [reactCanvas]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("canvas", _extends({
    ref: reactCanvas
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 12
    }
  }));
});

function inputsProcessed(forceupdate = false) {
  const inputs = inputController.inputs;
  const fastscale = 1 + inputs.fast * 2; // inputs.fast: [0, 1] -> [1, 2]

  const slowscale = 1 - Math.min(inputs.slow, 0.97); // inputs.slow: [0, 1] -> [0, 1]

  const scale = scene.getAnimationRatio() * 0.01 * fastscale * slowscale;
  let shift = _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Zero();

  if (inputs.mode > 0.5) {
    shift = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-inputs.yAxis, inputs.xAxis, inputs.zAxis).scale(scale);
    const shiftQuaternion = _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Quaternion"].FromEulerVector(shift);
    tcp.rotationQuaternion = tcp.rotationQuaternion.multiply(shiftQuaternion);
    allrobots.forEach(r => r.setTCPTo(tcp.position, tcp.rotationQuaternion));
    rendering = true;
  } else {
    shift = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-inputs.xAxis, inputs.yAxis, inputs.zAxis).scale(scale * 0.3); // TODO rotate viewer pos

    if (shift.length() > 0 || forceupdate) {
      tcp.position = tcp.position.add(shift);
      allrobots.forEach(r => r.setTCPTo(tcp.position, tcp.rotationQuaternion));
      rendering = true;
    }
  }

  try {
    if (inputController.changedInputs.tool1 && inputs.tool1 >= 0.5) {
      console.log('Gripping');
      /*
      if (coneMaterial.diffuseColor.equals(Color3.Gray())){
          coneMaterial.diffuseColor = Color3.Black()
          console.log('Gripping')
          //robotInterface.send(CommandFactory.SetEndEffector('Gripping', 1.0))
      } else {
          coneMaterial.diffuseColor = Color3.Gray()
          console.log('Releasing')
          //robotInterface.send(CommandFactory.SetEndEffector('Releasing', 0.0))
      } */
    }
  } catch (e) {
    console.log(e.message);
  }
}

/***/ }),

/***/ "./src/components/ide/Simulator/Simulator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@babylonjs/core/Loading/sceneLoader");
/* harmony import */ var _babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _URDFJSONLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ide/Simulator/URDFJSONLoader.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var webrob_src_AxesHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webrob/src/AxesHelper.js");
/* harmony import */ var webrob_src_AxesHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webrob_src_AxesHelper_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@babylonjs/core");
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _misc_palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/misc/palette.js");
/* harmony import */ var _misc_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/misc/hooks/index.js");
/* harmony import */ var eulerutil_src_EulerUtil_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("eulerutil/src/EulerUtil.js");
/* harmony import */ var eulerutil_src_EulerUtil_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(eulerutil_src_EulerUtil_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var webrob_src_robot_Robot_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("webrob/src/robot/Robot.js");
/* harmony import */ var webrob_src_robot_Robot_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(webrob_src_robot_Robot_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ToolBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/ide/ToolBar/ToolBar.js");
/* harmony import */ var _ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/ide/ToolBar/ToolBarIconButton.js");
/* harmony import */ var _ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/ide/ToolBar/ToolBarItem.js");
/* harmony import */ var _Simulator_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/ide/Simulator/Simulator.scss");
/* harmony import */ var _Simulator_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Simulator_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _simulation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/components/ide/Simulator/simulation/index.js");
/* harmony import */ var _SimulatorEditor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/components/ide/SimulatorEditor/SimulatorEditor.js");
/* harmony import */ var _default_simulation_xml__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/components/ide/Simulator/default_simulation.xml");
/* harmony import */ var _default_simulation_xml__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_default_simulation_xml__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var webrob_src_InputController_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("webrob/src/InputController.js");
/* harmony import */ var webrob_src_InputController_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(webrob_src_InputController_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _babylonjs_core_Debug_debugLayer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("@babylonjs/core/Debug/debugLayer");
/* harmony import */ var _babylonjs_core_Debug_debugLayer__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babylonjs_core_Debug_debugLayer__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _babylonjs_inspector__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("@babylonjs/inspector");
/* harmony import */ var _babylonjs_inspector__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_babylonjs_inspector__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var webrob_src_test_data__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("webrob/src/test/data");
/* harmony import */ var webrob_src_test_data__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(webrob_src_test_data__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _DefaultPlayground__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/components/ide/Simulator/DefaultPlayground.js");
/* harmony import */ var webrob_src_robot_MultiRobotHandler__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("webrob/src/robot/MultiRobotHandler");
/* harmony import */ var webrob_src_robot_MultiRobotHandler__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(webrob_src_robot_MultiRobotHandler__WEBPACK_IMPORTED_MODULE_22__);
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/Simulator/Simulator.js";















 // $FlowExpectError



const defaultSimulationConfig = Object(_SimulatorEditor__WEBPACK_IMPORTED_MODULE_15__["generateConfigFromXml"])(_default_simulation_xml__WEBPACK_IMPORTED_MODULE_16___default.a);
var inputController;
const bgIntensity = 0.8;
 // Augments the scene with the debug methods


 // Injects a local ES6 version of the inspector to prevent automatically relying on the none compatible version

const inputsDef = {
  xAxis: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Keyboard, [-'S'.charCodeAt(0), 'W'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].DualShock, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DualShockInput"].LStickXAxis]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Xbox, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["XboxInput"].LStickXAxis]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Generic, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["XboxInput"].LStickXAxis]]],
  yAxis: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Keyboard, [-'A'.charCodeAt(0), 'D'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].DualShock, [-_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DualShockInput"].LStickYAxis]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Xbox, [-_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["XboxInput"].LStickYAxis]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Generic, [-_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["XboxInput"].LStickYAxis]]],
  zAxis: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Keyboard, [-'Q'.charCodeAt(0), 'E'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].DualShock, [-_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DualShockInput"].RStickYAxis]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Xbox, [-_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["XboxInput"].RStickYAxis]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Generic, [-_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["XboxInput"].RStickYAxis]]],
  mode: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Keyboard, [' '.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].DualShock, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DualShockInput"].R1, _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DualShockInput"].L1]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Xbox, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["XboxInput"].RB, _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["XboxInput"].LB]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Generic, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["XboxInput"].RB, _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["XboxInput"].LB]]],
  fast: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Keyboard, ['O'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].DualShock, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DualShockInput"].R2]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Xbox, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["XboxInput"].RT]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Generic, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["XboxInput"].RT]]],
  slow: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Keyboard, ['L'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].DualShock, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DualShockInput"].L2]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Xbox, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["XboxInput"].LT]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Generic, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["XboxInput"].LT]]],
  tool1: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Keyboard, ['1'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].DualShock, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DualShockInput"].Cross]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Xbox, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["XboxInput"].A]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Generic, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["XboxInput"].A]]],
  tool2: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Keyboard, ['2'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].DualShock, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DualShockInput"].Circle]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Xbox, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["XboxInput"].B]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["DeviceType"].Generic, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["XboxInput"].B]]]
};
var assetsManager;
/**
 * The simulator displays a 2D environment containing a simulated robot.
 *
 * Besides the simulation itself, the toolbar allows terminating programs and resetting the simulation.
 */




function inputsProcessed(forceupdate = false) {
  const inputs = inputController.inputs;
  const fastscale = 1 + inputs.fast * 2; // inputs.fast: [0, 1] -> [1, 2]

  const slowscale = 1 - Math.min(inputs.slow, 0.97); // inputs.slow: [0, 1] -> [0, 1]

  const scale = scene.getAnimationRatio() * 0.01 * fastscale * slowscale;
  let shift = _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"].Zero();

  if (inputs.mode > 0.5) {
    shift = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"](-inputs.yAxis, inputs.xAxis, inputs.zAxis).scale(scale);
    const shiftQuaternion = _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Quaternion"].FromEulerVector(shift);
    tcp.rotationQuaternion = tcp.rotationQuaternion.multiply(shiftQuaternion);
    allrobots.forEach(r => r.setTCPTo(tcp.position, tcp.rotationQuaternion));
    rendering = true;
  } else {
    shift = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"](-inputs.xAxis, inputs.yAxis, inputs.zAxis).scale(scale * 0.3); // TODO rotate viewer pos

    if (shift.length() > 0 || forceupdate) {
      tcp.position = tcp.position.add(shift);
      allrobots.forEach(r => r.setTCPTo(tcp.position, tcp.rotationQuaternion));
      rendering = true;
    }
  }

  try {
    if (inputController.changedInputs.tool1 && inputs.tool1 >= 0.5) {
      console.log('Gripping');
      /*
      if (coneMaterial.diffuseColor.equals(Color3.Gray())){
          coneMaterial.diffuseColor = Color3.Black()
          console.log('Gripping')
          //robotInterface.send(CommandFactory.SetEndEffector('Gripping', 1.0))
      } else {
          coneMaterial.diffuseColor = Color3.Gray()
          console.log('Releasing')
          //robotInterface.send(CommandFactory.SetEndEffector('Releasing', 0.0))
      } */
    }
  } catch (e) {
    console.log(e.message);
  }
}

const robotData = [{
  path: "robot/festo_description/urdf/excm40.urdfjson",
  pos: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"](0, 0, 0),
  rot: Object(eulerutil_src_EulerUtil_js__WEBPACK_IMPORTED_MODULE_8__["eulerToQuaternion"])(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"](0, 0, 0)),
  chains: [{
    base: 'base_link',
    flange: 'axis3',
    ik: 'cartesianik',
    tools: [{
      position: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"](0, 0, -0.05),
      rotationQuaternion: Object(eulerutil_src_EulerUtil_js__WEBPACK_IMPORTED_MODULE_8__["eulerToQuaternion"])(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"](0, 0, 0)),
      type: 'vacuumGripper',
      visual: {
        parameter: {
          diameter: 0.01,
          height: 0.05
        },
        position: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"](0, 0, -0.025),
        rotationQuaternion: Object(eulerutil_src_EulerUtil_js__WEBPACK_IMPORTED_MODULE_8__["eulerToQuaternion"])(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"](Math.PI / 2, 0, 0))
      }
    }]
  }]
} //{path: "robot/pr2_description/robots/", file: 'pr2.urdfjson', pos: new Vector3(0,0,0)},
];
const Simulator = react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](({
  running,
  zoom,
  zoomMode,
  onUpdate,
  onExecutionAction
}, ref) => {
  const simulation = _misc_hooks__WEBPACK_IMPORTED_MODULE_7__["useValue"](() => {
    const sim = new _simulation__WEBPACK_IMPORTED_MODULE_14__["Simulation"](); //sim.jsonInit(defaultSimulationConfig);
    //return sim;
  });
  ;

  const onSceneReady = scene => {
    // This creates and positions a free camera (non-mesh)
    var camera = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["FreeCamera"]("camera1", new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"](0, 5, -10), scene); // This targets the camera to scene origin

    camera.setTarget(_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"].Zero());
    const canvas = scene.getEngine().getRenderingCanvas(); // This attaches the camera to the canvas

    camera.attachControl(canvas, true); // This creates a light, aiming 0,1,0 - to the sky (non-mesh)

    var light = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["HemisphericLight"]("light", new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"](0, 1, 0), scene); // Default intensity is 1. Let's dim the light a small amount

    light.intensity = 0.7;
    inputController = new webrob_src_InputController_js__WEBPACK_IMPORTED_MODULE_17___default.a(scene);
    inputController.setInputDefinition(inputsDef);
    inputController.currentInputsProcessed.add(() => inputsProcessed());
    const axes = webrob_src_AxesHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(scene, 0.5, 1.0, true);
    assetsManager = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["AssetsManager"](scene); // loadRobots(robotData,scene,assetsManager);

    scene.render(); // Our built-in 'ground' shape.

    _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["MeshBuilder"].CreateGround("ground", {
      width: 6,
      height: 6
    }, scene);
  };
  /**
   * Will run on every frame render.  We are spinning the box on y-axis.
   */


  const onRender = scene => {};

  _babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_0__["SceneLoader"].OnPluginActivatedObservable.add(function (loader) {
    if (loader.name === "urdfjson") {
      loader.assetsManager = assetsManager;
      console.log('Injected AssetManager');
    }
  }); // mount simulator in the target and simulate continuously

  const [renderTarget, setRenderTarget] = react__WEBPACK_IMPORTED_MODULE_2__["useState"](null);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](() => {
    if (renderTarget === null) return undefined;
    simulation.mount(renderTarget);
    simulation.startMatter();
    simulation.startRender();
    return () => {
      simulation.stopRender();
      simulation.stopMatter();
      simulation.unmount();
    };
  }, [renderTarget, simulation]); // Need to use a dependency array here, because Ide requires a stable ref.
  // On each change to the Simulator ref, jsonInit is potentially called.

  react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"](ref, () => ({
    simulation
  }), [simulation]);
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_4___default()(_Simulator_scss__WEBPACK_IMPORTED_MODULE_13___default.a);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: _Simulator_scss__WEBPACK_IMPORTED_MODULE_13___default.a.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 9
    }
  }, running ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    key: "terminate-and-reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: () => {
      onExecutionAction({
        action: 'TERMINATE',
        reset: true
      });
    },
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["TerminateAndResetIcon"],
    color: "red",
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 15
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    key: "reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: () => {
      onExecutionAction({
        action: 'RESET'
      });
    },
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["ResetIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: () => {
      onExecutionAction({
        action: 'TERMINATE',
        reset: false
      });
    },
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["TerminateIcon"],
    color: "red",
    disableRipple: true,
    disabled: !running,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: () => onUpdate({
      zoom: Math.min(zoom + 10, 150),
      zoomMode: 'MANUAL'
    }),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["ZoomInIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: () => onUpdate({
      zoom: 100,
      zoomMode: 'MANUAL'
    }),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["ZoomResetIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: () => onUpdate({
      zoom: Math.max(zoom - 10, 50),
      zoomMode: 'MANUAL'
    }),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["ZoomOutIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: () => onUpdate({
      zoom,
      zoomMode: 'FIT'
    }),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["ZoomFitIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: () => onUpdate({}),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["RotateOrbitIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: () => onUpdate({}),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["ResizeIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: () => onUpdate({}),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["ArrowAllIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 11
    }
  }, "SetTCP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: () => onUpdate({}),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["RobotIndustrialIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: "Simulation3D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_DefaultPlayground__WEBPACK_IMPORTED_MODULE_21__["default"], {
    antialias: true,
    onSceneReady: onSceneReady,
    onRender: onRender,
    id: "my-canvas",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 11
    }
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Simulator);

/***/ }),

/***/ "./src/components/ide/Simulator/Simulator.scss":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Simulator/Simulator.scss");
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
      module.hot.accept("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Simulator/Simulator.scss", function() {
        css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/Simulator/Simulator.scss");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/ide/Simulator/URDFJSONLoader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return URDFJSONLoader; });
/* harmony import */ var eulerutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eulerutil");
/* harmony import */ var eulerutil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eulerutil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@babylonjs/core");
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babylonjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var webrob_src_robot_Robot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webrob/src/robot/Robot");
/* harmony import */ var webrob_src_robot_Robot__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webrob_src_robot_Robot__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var webrob_src_robot_Joint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webrob/src/robot/Joint");
/* harmony import */ var webrob_src_robot_Joint__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webrob_src_robot_Joint__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var webrob_src_AxesHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("webrob/src/AxesHelper");
/* harmony import */ var webrob_src_AxesHelper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webrob_src_AxesHelper__WEBPACK_IMPORTED_MODULE_4__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function parseVector(val) {
  if (!val) return _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Vector3"].Zero();
  return _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Vector3"].FromArray(val.trim().split(/\s+/g).map(parseFloat));
}

function splitFolderPath(path) {
  const sepIndex = path.lastIndexOf('/') + 1;
  return [path.substr(0, sepIndex), path.substr(sepIndex)];
}
/**
 * URDF JSON loader.
 * This is a babylon scene loader plugin.
 */


class URDFJSONLoader {
  constructor() {
    _defineProperty(this, "name", "urdfjson");

    _defineProperty(this, "extensions", {
      ".urdfjson": {
        isBinary: false
      }
    });

    this.assetsManager = null;
    this.importVisual = true;
    this.importCollision = false;
    this.overrideMeshMaterial = false;
    this.packagePath = 'robot/';
  }
  /**
   * Defines the name of the plugin.
   */


  /**
   * Load into a scene.
   * @param scene The scene to load into
   * @param data The data to import
   * @param rootUrl The root url for scene and resources
   * @param onError The callback when import fails
   * @returns true if successful or false otherwise
   */
  load(scene, data, rootUrl) {
    console.log("ich bin hier");
    return this.importMesh(null, scene, data, rootUrl, null, null, null);
  }
  /**
   * Load into an asset container.
   * @param scene The scene to load into
   * @param data The data to import
   * @param rootUrl The root url for scene and resources
   * @param onError The callback when import fails
   * @returns The loaded asset container
   */


  loadAssetContainer(scene, data, rootUrl, onError) {
    const container = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["AssetContainer"](scene);
    scene._blockEntityCollection = true;
    this.importMesh(null, scene, data, rootUrl, container.meshes, null, null);
    scene._blockEntityCollection = false;
    return container;
  }
  /**
   * Import meshes into a scene.
   * @param meshesNames An array of mesh names, a single mesh name, or empty string for all meshes that filter what meshes are imported
   * @param scene The scene to import into
   * @param data The data to import
   * @param rootUrl The root url for scene and resources
   * @param meshes The meshes array to import into
   * @param particleSystems The particle systems array to import into
   * @param skeletons The skeletons array to import into
   * @param onError The callback when import fails
   * @returns True if successful or false otherwise
   */


  importMesh(meshesNames, scene, data, rootUrl, meshes, particleSystems, skeleton) {
    const materials = {
      'DefaultMaterial': new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["StandardMaterial"]('DefaultMaterial', scene)
    };
    const assetsManager = this.assetsManager || new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["AssetsManager"](scene);

    if (typeof data !== "object") {
      if (typeof data === "string") {
        data = JSON.parse(data);
      } else {
        // convert to string
        const array_buffer = new Uint8Array(data);
        let str = '';

        for (let i = 0; i < data.byteLength; i++) {
          str += String.fromCharCode(array_buffer[i]); // implicitly assumes little-endian
        }

        data = JSON.parse(str);
      }
    }

    if (typeof data !== "object") {
      _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Tools"].Error("URDFJSONLoader: Invalid data format provided");
      return false;
    }

    const robotData = data.robot;
    console.log("Importing robotData: " + robotData.name);
    const robot = new webrob_src_robot_Robot__WEBPACK_IMPORTED_MODULE_2___default.a(robotData.name, scene); //robot.rotationQuaternion = fromRotation
    //robot.scale = fromScale

    if (robotData.material) {
      robotData.material.forEach(m => this.importMaterial(m, materials, assetsManager, scene));
    }

    robotData.link.forEach(l => this.importLink(l, robot, scene, materials, assetsManager));
    robotData.joint.forEach((j, index) => this.importJoint(j, robot, index, scene));
    robot.rootLink = _.find(robot.links, l => l.parent === null);
    robot.rootLink.parent = robot;
    /*
    Object.values(robot.links).forEach(l => {
        //console.log("Adding axis to "+l.name)
        const axes = createAxes(scene, 0.2, 0.3, false);
        axes.parent = l
    });*/

    if (this.assetsManager !== assetsManager) assetsManager.load();

    if (meshes) {
      meshes.push(robot);
    }

    return true;
  }

  importJoint(jointData, robot, index, scene) {
    let joint = null;
    joint = new webrob_src_robot_Joint__WEBPACK_IMPORTED_MODULE_3___default.a(jointData.name, scene);
    joint.index = index;
    robot.joints[jointData.name] = joint;
    joint.jointType = jointData.type;
    const child = robot.links[jointData.child.link];
    const parent = robot.links[jointData.parent.link];
    child.parent = joint;
    joint.parent = parent;

    if (jointData.origin) {
      joint.position = parseVector(jointData.origin.xyz);
      Object(eulerutil__WEBPACK_IMPORTED_MODULE_0__["eulerToQuaternion"])(parseVector(jointData.origin.rpy), 'XYZ', joint.rotationQuaternion);
    }

    if (jointData.limit) {
      joint.limit.lower = parseFloat(jointData.limit.lower);
      joint.limit.upper = parseFloat(jointData.limit.upper);
      joint.velocity = parseFloat(jointData.limit.velocity);
    }

    if (jointData.axis) {
      joint.axis = parseVector(jointData.axis.xyz);
      joint.axis.normalize();
    }
  }

  importLink(linkData, robot, scene, materials, assetsManager) {
    const link = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["TransformNode"](linkData.name, scene);
    robot.links[linkData.name] = link;
    link.rotationQuaternion = _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Quaternion"].Identity();

    if (this.importVisual && linkData.visual) {
      if (!_.isArray(linkData.visual)) linkData.visual = [linkData.visual];
      linkData.visual.forEach(visual => this.importLinkElement(visual, link, '_visual', robot.visual, materials, assetsManager, scene));
    }

    if (this.importCollision && linkData.collision) {
      if (!_.isArray(linkData.collision)) linkData.collision = [linkData.collision];
      linkData.collision.forEach(collision => this.importLinkElement(collision, link, '_collision', robot.collision, materials, assetsManager, scene));
    }
  }

  importLinkElement(linkData, parent, namesuffix, collection, materials, assetsManager, scene) {
    let elementName = linkData.name;
    if (!elementName) elementName = parent.name + namesuffix;
    let material = null;

    if (linkData.material) {
      const materialName = linkData.material.name;

      if (materialName && materialName in materials) {
        material = materials[materialName];
      } else {
        material = this.importMaterial(linkData.material, materials, assetsManager, scene);
      }
    } else {
      material = materials['DefaultMaterial'];
    }

    const element = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["TransformNode"](elementName, scene);
    element.rotationQuaternion = _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Quaternion"].Identity();
    element.parent = parent;
    collection[elementName] = element;

    if (linkData.origin) {
      element.position = parseVector(linkData.origin.xyz);
      Object(eulerutil__WEBPACK_IMPORTED_MODULE_0__["eulerToQuaternion"])(parseVector(linkData.origin.rpy), 'XYZ', element.rotationQuaternion);
    }

    if (linkData.geometry) {
      const geom = linkData.geometry;

      if (geom.mesh) {
        this.importMeshReference(geom.mesh.filename, element, material, assetsManager);
        if (geom.mesh.scale) element.scale = parseVector(geom.mesh.scale);
      } else if (geom.box) {
        const size = parseVector(geom.box.size) || _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Vector3"].One();
        const box = _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["MeshBuilder"].CreateBox(elementName + "Box", {
          width: size.x,
          depth: size.y,
          height: size.z
        }, scene);
        box.material = material;
        box.parent = element;
        box.rotation.set(Math.PI / 2, 0, 0);
      } else if (geom.sphere) {
        const radius = parseFloat(geom.sphere.radius) || 1;
        const sphere = _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["MeshBuilder"].CreateSphere(elementName + "Sphere", {
          diameter: radius * 2
        }, scene);
        sphere.material = material;
        sphere.parent = element;
      } else if (geom.cylinder) {
        const radius = parseFloat(geom.cylinder.radius) || 1;
        const length = parseFloat(geom.cylinder.length) || 1;
        const cylinder = _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["MeshBuilder"].CreateCylinder(elementName + "Cylinder", {
          height: length,
          diameter: radius * 2
        }, scene);
        cylinder.material = material;
        cylinder.parent = element;
        cylinder.rotation.set(Math.PI / 2, 0, 0);
      }
    }

    return element;
  }

  importMeshReference(path, parent, material, assetsManager) {
    const filePath = this.resolvePath(path); // file path is null if a package directory is not provided.

    if (filePath !== null) {
      const [folder, file] = splitFolderPath(filePath);
      const meshTask = assetsManager.addMeshTask("meshTask" + file, "", folder, file);

      meshTask.onSuccess = task => {
        task.loadedMeshes.forEach(m => {
          m.parent = parent;
          if (file.endsWith('.stl')) m.rotation.set(Math.PI / 2, 0, 0);
          if (this.overrideMeshMaterial || !m.material) m.material = material;
        });
      };

      meshTask.onError = (task, msg, ex) => _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Tools"].Error('URDFJSONLoader: Error loading mesh:' + msg, ex);
    }
  }

  importMaterial(materialData, materials, assetsManager, scene) {
    const material = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["StandardMaterial"](materialData.name, scene);
    materials[materialData.name] = material;

    if (materialData.color) {
      const rgba = materialData.color.rgba.split(/\s/g).map(parseFloat);
      material.diffuseColor = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Color3"](rgba[0], rgba[1], rgba[2]);
      material.opacity = rgba[3];
      material.transparent = rgba[3] < 1;
      material.disableDepthWrite = material.transparent;
    }

    if (materialData.texture) {
      const filePath = this.resolvePath(materialData.texture.filename);
      const textureTask = assetsManager.addTextureTask("textureTask" + materialData.texture.filename, filePath);

      textureTask.onSuccess = task => material.diffuseTexture = task.texture;

      textureTask.onError = (task, msg, ex) => _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["Tools"].Error('URDFJSONLoader: Error loading mesh:' + msg, ex);
    }

    return material;
  }

  resolvePath(path) {
    return this.packagePath + path.replace(/^package:\/\//, '');
  }

}

if (_babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["SceneLoader"]) {
  _babylonjs_core__WEBPACK_IMPORTED_MODULE_1__["SceneLoader"].RegisterPlugin(new URDFJSONLoader());
  console.log('Registered URDFJSONLoader');
} else {
  console.log("Could not register URDFJSONLoader");
}

/***/ }),

/***/ "./src/components/ide/Simulator/default_simulation.xml":
/***/ (function(module, exports) {

module.exports = "<xml xmlns=\"https://developers.google.com/blockly/xml\">\n  <block type=\"simulator_root\" id=\"Ud0t5eObyOC+TgB2!ft/\" x=\"-50\" y=\"-50\">\n    <field name=\"X\">0</field>\n    <field name=\"Y\">0</field>\n    <field name=\"W\">720</field>\n    <field name=\"H\">500</field>\n    <field name=\"WALLS\">FALSE</field>\n    <statement name=\"OBJECTS\">\n      <block type=\"simulator_group\" id=\")xvh44LZ@ILx{qI#T1PS\">\n        <value name=\"SETTINGS\">\n          <block type=\"simulator_settings_static\" id=\"}*DugOye@i7eC@Zd$/Am\">\n            <field name=\"STATIC\">TRUE</field>\n          </block>\n        </value>\n        <statement name=\"OBJECTS\">\n          <block type=\"simulator_rect\" id=\"[`ue1h-NPFw]U[rny`cS\">\n            <field name=\"W\">10</field>\n            <field name=\"H\">500</field>\n            <value name=\"SETTINGS\">\n              <block type=\"simulator_settings_color\" id=\"dA(*tLmQB[^`BxVB~fem\">\n                <field name=\"COLOUR\">#222222</field>\n                <value name=\"MORE\">\n                  <block type=\"simulator_settings_sensor\" id=\"N*iF4Oa+A%?L4HMV?+mX\">\n                    <field name=\"SENSOR\">TRUE</field>\n                    <value name=\"MORE\">\n                      <block type=\"simulator_settings_line\" id=\"q}!]!}3WisH!97Ur$I6-\">\n                        <field name=\"LINE\">TRUE</field>\n                        <value name=\"MORE\">\n                          <block type=\"simulator_settings_translate\" id=\"0JNA43_1$!YL;.hw9Gao\">\n                            <field name=\"X\">-200</field>\n                            <field name=\"Y\">0</field>\n                          </block>\n                        </value>\n                      </block>\n                    </value>\n                  </block>\n                </value>\n              </block>\n            </value>\n            <next>\n              <block type=\"simulator_group\" id=\"TS*IimuP0bb/af7*iuza\">\n                <value name=\"SETTINGS\">\n                  <block type=\"simulator_settings_color\" id=\"jMW*yWy9Ea0mLB*fP3UB\">\n                    <field name=\"COLOUR\">#33ff33</field>\n                    <value name=\"MORE\">\n                      <block type=\"simulator_settings_translate\" id=\"Ia%=acVI.i}G`Gy.5XIi\">\n                        <field name=\"X\">-20</field>\n                        <field name=\"Y\">0</field>\n                      </block>\n                    </value>\n                  </block>\n                </value>\n                <statement name=\"OBJECTS\">\n                  <block type=\"simulator_rect\" id=\"z=b4|uZ@7Yf51ry;WXQ3\">\n                    <field name=\"W\">110</field>\n                    <field name=\"H\">4</field>\n                    <value name=\"SETTINGS\">\n                      <block type=\"simulator_settings_translate\" id=\"X{G#P`r_|;Rd7BO?RyNJ\">\n                        <field name=\"X\">0</field>\n                        <field name=\"Y\">60</field>\n                      </block>\n                    </value>\n                    <next>\n                      <block type=\"simulator_rect\" id=\"dz8UW*iq(6UG,]2lsbyC\">\n                        <field name=\"W\">110</field>\n                        <field name=\"H\">4</field>\n                        <value name=\"SETTINGS\">\n                          <block type=\"simulator_settings_translate\" id=\"-4x@7aUOa,czD:hP#?A1\">\n                            <field name=\"X\">0</field>\n                            <field name=\"Y\">-60</field>\n                          </block>\n                        </value>\n                        <next>\n                          <block type=\"simulator_rect\" id=\"uIQ]v^TOZ~JG+;Tl%jtN\">\n                            <field name=\"W\">4</field>\n                            <field name=\"H\">124</field>\n                            <value name=\"SETTINGS\">\n                              <block type=\"simulator_settings_translate\" id=\"6^c!%[2p_poD|L:ol2h0\">\n                                <field name=\"X\">55</field>\n                                <field name=\"Y\">0</field>\n                              </block>\n                            </value>\n                            <next>\n                              <block type=\"simulator_rect\" id=\"[:H]#,$,xGlbYu/K4*Jy\">\n                                <field name=\"W\">50</field>\n                                <field name=\"H\">116</field>\n                                <value name=\"SETTINGS\">\n                                  <block type=\"simulator_settings_color\" id=\"1CEedKU@UVjU7(iEjRr=\">\n                                    <field name=\"COLOUR\">#ffffff</field>\n                                    <value name=\"MORE\">\n                                      <block type=\"simulator_settings_sensor\" id=\"seH)Qxpn45-8Qz2sRG7P\">\n                                        <field name=\"SENSOR\">TRUE</field>\n                                        <value name=\"MORE\">\n                                          <block type=\"simulator_settings_translate\" id=\"w(BhIz:ir?T=W}M0(~+T\">\n                                            <field name=\"X\">28</field>\n                                            <field name=\"Y\">0</field>\n                                            <value name=\"MORE\">\n                                              <block type=\"simulator_settings_label\" id=\"+{K]lrJ~Mg2pvCfR5ZtK\">\n                                                <field name=\"LABEL\">green</field>\n                                              </block>\n                                            </value>\n                                          </block>\n                                        </value>\n                                      </block>\n                                    </value>\n                                  </block>\n                                </value>\n                              </block>\n                            </next>\n                          </block>\n                        </next>\n                      </block>\n                    </next>\n                  </block>\n                </statement>\n                <next>\n                  <block type=\"simulator_group\" id=\"sRAp~WXji0A9!D%]2W^d\">\n                    <value name=\"SETTINGS\">\n                      <block type=\"simulator_settings_color\" id=\"hv.5eIzC=/!])v3@BxX@\">\n                        <field name=\"COLOUR\">#3333ff</field>\n                        <value name=\"MORE\">\n                          <block type=\"simulator_settings_translate\" id=\"hk:A7(|~$1h|MGzCHGQr\">\n                            <field name=\"X\">270</field>\n                            <field name=\"Y\">170</field>\n                            <value name=\"MORE\">\n                              <block type=\"simulator_settings_rotate\" id=\"#4DVxaeA._N}WR+%1=u?\">\n                                <field name=\"ANGLE\">315</field>\n                              </block>\n                            </value>\n                          </block>\n                        </value>\n                      </block>\n                    </value>\n                    <statement name=\"OBJECTS\">\n                      <block type=\"simulator_rect\" id=\"/e80oB4vxD8rbG8f^:xk\">\n                        <field name=\"W\">110</field>\n                        <field name=\"H\">4</field>\n                        <value name=\"SETTINGS\">\n                          <block type=\"simulator_settings_translate\" id=\"f^yqXX.R*Ln7W!he3t%6\">\n                            <field name=\"X\">0</field>\n                            <field name=\"Y\">50</field>\n                          </block>\n                        </value>\n                        <next>\n                          <block type=\"simulator_rect\" id=\"t#dzcgIUC*b*D,Ed`AKU\">\n                            <field name=\"W\">110</field>\n                            <field name=\"H\">4</field>\n                            <value name=\"SETTINGS\">\n                              <block type=\"simulator_settings_translate\" id=\"#P(]A0*4lB4H%_#w5~WO\">\n                                <field name=\"X\">0</field>\n                                <field name=\"Y\">-50</field>\n                              </block>\n                            </value>\n                            <next>\n                              <block type=\"simulator_rect\" id=\"ALXk$-:%;1{[!T_OShEw\">\n                                <field name=\"W\">4</field>\n                                <field name=\"H\">104</field>\n                                <value name=\"SETTINGS\">\n                                  <block type=\"simulator_settings_translate\" id=\"t4n$}s2,nUG?8Vh]|GCi\">\n                                    <field name=\"X\">55</field>\n                                    <field name=\"Y\">0</field>\n                                  </block>\n                                </value>\n                                <next>\n                                  <block type=\"simulator_rect\" id=\"chim|]pGuX:RSpfQzPxk\">\n                                    <field name=\"W\">50</field>\n                                    <field name=\"H\">96</field>\n                                    <value name=\"SETTINGS\">\n                                      <block type=\"simulator_settings_color\" id=\"A29{Nlf4CVj?Wl9abIEz\">\n                                        <field name=\"COLOUR\">#ffffff</field>\n                                        <value name=\"MORE\">\n                                          <block type=\"simulator_settings_sensor\" id=\"0|_;}8kL::=jyZa^ZLBS\">\n                                            <field name=\"SENSOR\">TRUE</field>\n                                            <value name=\"MORE\">\n                                              <block type=\"simulator_settings_translate\" id=\"0yGKN|-{r18z/bH*]C?X\">\n                                                <field name=\"X\">28</field>\n                                                <field name=\"Y\">0</field>\n                                                <value name=\"MORE\">\n                                                  <block type=\"simulator_settings_label\" id=\"/o3=KlS#s%s#C#Z;n)1Q\">\n                                                    <field name=\"LABEL\">blue</field>\n                                                  </block>\n                                                </value>\n                                              </block>\n                                            </value>\n                                          </block>\n                                        </value>\n                                      </block>\n                                    </value>\n                                  </block>\n                                </next>\n                              </block>\n                            </next>\n                          </block>\n                        </next>\n                      </block>\n                    </statement>\n                    <next>\n                      <block type=\"simulator_group\" id=\"dnvn0O?Fll]-HI*@Ep[j\">\n                        <value name=\"SETTINGS\">\n                          <block type=\"simulator_settings_color\" id=\"{0H!|H:#{-TRLhM#F?Q:\">\n                            <field name=\"COLOUR\">#ffff00</field>\n                            <value name=\"MORE\">\n                              <block type=\"simulator_settings_translate\" id=\"Cr3/yNQpOM9gt[yvqN70\">\n                                <field name=\"X\">130</field>\n                                <field name=\"Y\">-170</field>\n                                <value name=\"MORE\">\n                                  <block type=\"simulator_settings_rotate\" id=\"5:o2,iZk-H,nCR,erieP\">\n                                    <field name=\"ANGLE\">180</field>\n                                  </block>\n                                </value>\n                              </block>\n                            </value>\n                          </block>\n                        </value>\n                        <statement name=\"OBJECTS\">\n                          <block type=\"simulator_rect\" id=\"~0Jn+-rW(9{qQ,]V*W*B\">\n                            <field name=\"W\">110</field>\n                            <field name=\"H\">4</field>\n                            <value name=\"SETTINGS\">\n                              <block type=\"simulator_settings_translate\" id=\"_J-UTKFqbWZ-zYJb`/Dq\">\n                                <field name=\"X\">0</field>\n                                <field name=\"Y\">45</field>\n                              </block>\n                            </value>\n                            <next>\n                              <block type=\"simulator_rect\" id=\")V-k6]NZEaiO!5h!c~cu\">\n                                <field name=\"W\">110</field>\n                                <field name=\"H\">4</field>\n                                <value name=\"SETTINGS\">\n                                  <block type=\"simulator_settings_translate\" id=\"PRNhc#n/}+1%qnzTjlBC\">\n                                    <field name=\"X\">0</field>\n                                    <field name=\"Y\">-45</field>\n                                  </block>\n                                </value>\n                                <next>\n                                  <block type=\"simulator_rect\" id=\"(:hTPm7NQ_sriqusim]i\">\n                                    <field name=\"W\">4</field>\n                                    <field name=\"H\">94</field>\n                                    <value name=\"SETTINGS\">\n                                      <block type=\"simulator_settings_translate\" id=\"p(+BlWNq]5]_TFFel7F(\">\n                                        <field name=\"X\">55</field>\n                                        <field name=\"Y\">0</field>\n                                      </block>\n                                    </value>\n                                    <next>\n                                      <block type=\"simulator_rect\" id=\"lZ$XRfnYy(2-$FXqqogZ\">\n                                        <field name=\"W\">50</field>\n                                        <field name=\"H\">86</field>\n                                        <value name=\"SETTINGS\">\n                                          <block type=\"simulator_settings_color\" id=\"E1qN/*|F(KY0WFBf@3eT\">\n                                            <field name=\"COLOUR\">#ffffff</field>\n                                            <value name=\"MORE\">\n                                              <block type=\"simulator_settings_sensor\" id=\"U}p018SAM}O3]7EJ6ajv\">\n                                                <field name=\"SENSOR\">TRUE</field>\n                                                <value name=\"MORE\">\n                                                  <block type=\"simulator_settings_translate\" id=\"I`ar8|aDjiTm#6z_q(gB\">\n                                                    <field name=\"X\">28</field>\n                                                    <field name=\"Y\">0</field>\n                                                    <value name=\"MORE\">\n                                                      <block type=\"simulator_settings_label\" id=\":*DDECeZ2r9Xbkeh}+P=\">\n                                                        <field name=\"LABEL\">yellow</field>\n                                                      </block>\n                                                    </value>\n                                                  </block>\n                                                </value>\n                                              </block>\n                                            </value>\n                                          </block>\n                                        </value>\n                                      </block>\n                                    </next>\n                                  </block>\n                                </next>\n                              </block>\n                            </next>\n                          </block>\n                        </statement>\n                      </block>\n                    </next>\n                  </block>\n                </next>\n              </block>\n            </next>\n          </block>\n        </statement>\n        <next>\n          <block type=\"simulator_robot\" id=\"w@.wL:L,Z816e-2Hg_^N\">\n            <field name=\"NAME\">hedgehog</field>\n            <field name=\"DEFAULT_SENSORS\">TRUE</field>\n            <value name=\"SETTINGS\">\n              <block type=\"simulator_settings_translate\" id=\"X?}KHh#p@YbBbw7L=iU;\">\n                <field name=\"X\">-270</field>\n                <field name=\"Y\">0</field>\n              </block>\n            </value>\n          </block>\n        </next>\n      </block>\n    </statement>\n  </block>\n</xml>"

/***/ }),

/***/ "./src/components/ide/Simulator/simulation/Hedgehog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hedgehog; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createArray(length, cb) {
  // Array.from({ length: n }, (v, i) => ...):
  // first parameter is array-like, so `length` is an array length
  // all values (`v`) are `undefined`, map them to something else.
  return Array.from({
    length
  }, (_elem, index) => cb(index));
}
/**
 * The Hedgehog class represents the controller of a simulated robot.
 * As such, it manages the simulated sensors (whose input values are set by the simulation when changes occur)
 * and actuators (which are set by user programs and queried by the simulation when needed).
 */


class Hedgehog {
  constructor() {
    _defineProperty(this, "motors", createArray(4, () => ({
      power: 0,
      onChange: null
    })));

    _defineProperty(this, "servos", createArray(6, () => ({
      position: null,
      onChange: null
    })));

    _defineProperty(this, "sensors", createArray(16, () => ({
      analogValue: 4095,
      noiseSource: null
    })));
  }

  // "public" APIs for the client
  moveMotor(port, power) {
    var _this$motors$port$onC, _this$motors$port;

    this.motors[port].power = power; // eslint-disable-next-line no-unused-expressions

    (_this$motors$port$onC = (_this$motors$port = this.motors[port]).onChange) === null || _this$motors$port$onC === void 0 ? void 0 : _this$motors$port$onC.call(_this$motors$port, port, power);
  }

  setServo(port, position) {
    var _this$servos$port$onC, _this$servos$port;

    this.servos[port].position = position; // eslint-disable-next-line no-unused-expressions

    (_this$servos$port$onC = (_this$servos$port = this.servos[port]).onChange) === null || _this$servos$port$onC === void 0 ? void 0 : _this$servos$port$onC.call(_this$servos$port, port, position);
  }

  getAnalog(port) {
    var _noiseSource;

    const {
      analogValue,
      noiseSource
    } = this.sensors[port];
    const noise = (_noiseSource = noiseSource === null || noiseSource === void 0 ? void 0 : noiseSource(port, analogValue)) !== null && _noiseSource !== void 0 ? _noiseSource : 0;
    const result = analogValue + noise;
    if (result > 4095) return 4095;
    if (result < 0) return 0;
    return result;
  }

  getDigital(port) {
    return this.getAnalog(port) > 2047;
  }

  off() {
    for (let port = 0; port < 4; port += 1) {
      this.moveMotor(port, 0);
    }

    for (let port = 0; port < 6; port += 1) {
      this.setServo(port, null);
    }
  } // "private" APIs needed by the simulation


  getMotor(port) {
    return this.motors[port].power;
  }

  getServo(port) {
    return this.servos[port].position;
  }

  setSensor(port, value) {
    this.sensors[port].analogValue = value;
  }

}

/***/ }),

/***/ "./src/components/ide/Simulator/simulation/Robot.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Robot; });
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("matter-js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ide/Simulator/simulation/index.js");
/* harmony import */ var _schema_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/ide/Simulator/simulation/schema/helpers.js");
/* harmony import */ var _drives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/ide/Simulator/simulation/drives.js");
/* harmony import */ var _sensors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/ide/Simulator/simulation/sensors.js");
/* harmony import */ var _servo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/ide/Simulator/simulation/servo.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function createArray(length, cb) {
  // Array.from({ length: n }, (v, i) => ...):
  // first parameter is array-like, so `length` is an array length
  // all values (`v`) are `undefined`, map them to something else.
  return Array.from({
    length
  }, (_elem, index) => cb(index));
}
/**
 * A simulated robot, capable of moving through and sensing the simulation.
 */


class Robot {
  constructor(config, assets = null) {
    _defineProperty(this, "controller", new ___WEBPACK_IMPORTED_MODULE_1__["Hedgehog"]());

    _defineProperty(this, "body", void 0);

    _defineProperty(this, "collisionSensors", void 0);

    _defineProperty(this, "drive", void 0);

    _defineProperty(this, "servoArms", void 0);

    _defineProperty(this, "robot", void 0);

    this.jsonInit(config, assets);
  }

  jsonInit({
    position: {
      x,
      y
    },
    angle,
    parts,
    render: renderBody
  }, assets = null) {
    Object(_schema_helpers__WEBPACK_IMPORTED_MODULE_2__["resolveSprite"])(renderBody === null || renderBody === void 0 ? void 0 : renderBody.sprite, assets);
    const material = {
      density: 1,
      frictionAir: 0.4
    };
    const materialGrabber = {
      density: 0.02,
      frictionAir: 0
    };
    const styleWheel = {
      render: {
        fillStyle: '#777777'
      }
    };
    const styleBody = {
      render: {
        fillStyle: '#38b449',
        ...renderBody
      }
    };
    const styleLineSensor = {// fillStyle controlled by sensor
    };
    const styleTouchSensor = {// fillStyle controlled by sensor
    };
    const styleDistanceSensor = {
      render: {
        fillStyle: '#555555'
      }
    };
    const optionsDistanceSensorSegment = {
      isSensor: true,
      density: 0,
      frictionAir: 0 // fillStyle & opacity controlled by sensor

    };
    const styleGrabber = {
      render: {
        fillStyle: '#777777'
      }
    };
    const leftWheel = matter_js__WEBPACK_IMPORTED_MODULE_0___default.a.Bodies.rectangle(7, -21, 20, 4, { ...material,
      ...styleWheel,
      label: 'leftWheel'
    });
    const rightWheel = matter_js__WEBPACK_IMPORTED_MODULE_0___default.a.Bodies.rectangle(7, 21, 20, 4, { ...material,
      ...styleWheel,
      label: 'rightWheel'
    });
    const mainBody = matter_js__WEBPACK_IMPORTED_MODULE_0___default.a.Bodies.rectangle(0, 0, 40, 32, { ...material,
      ...styleBody,
      label: 'mainBody'
    });
    this.collisionSensors = [];
    const partBodies = [];

    for (const part of parts) {
      try {
        switch (part.type) {
          case 'line':
            {
              const {
                type: _type,
                port,
                objects
              } = part;

              if (objects.length !== 1) {
                throw new Error(`robot part must have exactly one object: ${part.type} ${port}`);
              }

              const [object] = objects;
              const partBody = ___WEBPACK_IMPORTED_MODULE_1__["schema"].createBody({ ...material,
                ...styleLineSensor,
                ...object
              }, assets);
              const sensor = new _sensors__WEBPACK_IMPORTED_MODULE_4__["LineSensor"](this.controller, partBody, port);
              partBodies.push(partBody);
              this.collisionSensors.push(sensor);
              break;
            }

          case 'touch':
            {
              const {
                type: _type,
                port,
                objects
              } = part;

              if (objects.length !== 1) {
                throw new Error(`robot part must have exactly one object: ${part.type} ${port}`);
              }

              const [object] = objects;
              const partBody = ___WEBPACK_IMPORTED_MODULE_1__["schema"].createBody({ ...material,
                ...styleTouchSensor,
                ...object
              }, assets);
              const sensor = new _sensors__WEBPACK_IMPORTED_MODULE_4__["TouchSensor"](this.controller, partBody, port);
              partBodies.push(partBody);
              this.collisionSensors.push(sensor);
              break;
            }

          case 'distance':
            {
              const {
                type: _type,
                port,
                objects
              } = part;

              if (objects.length !== 1) {
                throw new Error(`robot part must have exactly one object: ${part.type} ${port}`);
              }

              const [object] = objects;
              const partBody = ___WEBPACK_IMPORTED_MODULE_1__["schema"].createBody({ ...material,
                ...styleDistanceSensor,
                ...object
              }, assets);
              const {
                position: {
                  x,
                  y
                },
                angle,
                label
              } = partBody;
              const cos = Math.cos(angle);
              const sin = Math.sin(angle);
              const length = 5;
              const numSegments = 60;
              const segments = createArray(numSegments, index => {
                const distance = length / 2 + length * index;
                const body = matter_js__WEBPACK_IMPORTED_MODULE_0___default.a.Bodies.rectangle(x + cos * distance, y + sin * distance, length, 2, { ...optionsDistanceSensorSegment,
                  angle,
                  label: `${label}-${index}`
                });
                return [body, // add another half length to get to the outer edge of the segment
                length * (index + 1)];
              });
              const sensor = new _sensors__WEBPACK_IMPORTED_MODULE_4__["DistanceSensor"](this.controller, port, segments);
              partBodies.push(partBody, ...segments.map(([body, _distance]) => body));
              this.collisionSensors.push(...sensor.segments);
              break;
            }

          case 'servo_arm':
            {
              // handled later
              break;
            }

          default:
            console.warn('unknown robot part:', part);
        }
      } catch (err) {
        console.error(err);
      }
    }

    this.body = matter_js__WEBPACK_IMPORTED_MODULE_0___default.a.Body.create({
      parts: [leftWheel, rightWheel, ...partBodies, mainBody],
      ...material,
      label: 'body'
    });
    this.drive = new _drives__WEBPACK_IMPORTED_MODULE_3__["DifferentialDrive"](this.controller, 0, 1, leftWheel, rightWheel, this.body);
    this.servoArms = [];
    const compositePartBodies = [];
    const compositePartConstraints = [];

    for (const part of parts) {
      try {
        switch (part.type) {
          case 'line':
          case 'touch':
          case 'distance':
            {
              // handled eariler
              break;
            }

          case 'servo_arm':
            {
              const {
                type: _type,
                port,
                pivotAnchor,
                pivotArm,
                length,
                objects
              } = part;

              if (objects.length !== 1) {
                throw new Error(`robot part must have exactly one object: ${part.type} ${port}`);
              }

              const [object] = objects;
              const partBody = ___WEBPACK_IMPORTED_MODULE_1__["schema"].createBody({ ...materialGrabber,
                ...styleGrabber,
                ...object
              }, assets);
              const servoArm = new _servo__WEBPACK_IMPORTED_MODULE_5__["ServoArm"](this.controller, port, this.body, pivotAnchor, partBody, pivotArm, length);
              compositePartBodies.push(partBody);
              compositePartConstraints.push(servoArm.pivotConstraint, servoArm.controlConstraint);
              this.servoArms.push(servoArm);
              break;
            }

          default:
            console.warn('unknown robot part:', part);
        }
      } catch (err) {
        console.error(err);
      }
    }

    this.robot = matter_js__WEBPACK_IMPORTED_MODULE_0___default.a.Composite.create({
      bodies: [this.body, ...compositePartBodies],
      constraints: [...compositePartConstraints],
      label: 'bot'
    });
    const pose = {
      x,
      y,
      angle
    };
    this.setPose(pose);
    Object(_schema_helpers__WEBPACK_IMPORTED_MODULE_2__["setInitialPose"])(this.body); // TODO temporary
  }

  setPose({
    x,
    y,
    angle
  }) {
    matter_js__WEBPACK_IMPORTED_MODULE_0___default.a.Body.setPosition(this.body, {
      x,
      y
    });
    matter_js__WEBPACK_IMPORTED_MODULE_0___default.a.Body.setAngle(this.body, angle);
  }

  beforeUpdate() {
    this.drive.beforeUpdate();

    for (const servoArm of this.servoArms) {
      servoArm.beforeUpdate();
    }
  }

  reset() {
    for (const servoArm of this.servoArms) {
      servoArm.reset();
    }
  }

}

/***/ }),

/***/ "./src/components/ide/Simulator/simulation/Simulation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Simulation; });
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lodash.merge");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("matter-js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pathseg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pathseg");
/* harmony import */ var pathseg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pathseg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client_poly_decomp_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/client/poly-decomp-polyfill.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/ide/Simulator/simulation/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/**
 * Manages a robot simulation.
 * The simulation can contain multiple robots, and objects representing the environment.
 * This class is responsible for managing the Matter.js simulation lifecycle
 * and triggering robot behavior (accelerating the robots, setting values for their sensors).
 */
class Simulation {
  // assets
  // special bodies for simulation logi
  // timers waiting for simulated time to pass
  constructor() {
    _defineProperty(this, "world", void 0);

    _defineProperty(this, "engine", void 0);

    _defineProperty(this, "runner", void 0);

    _defineProperty(this, "render", null);

    _defineProperty(this, "bounds", null);

    _defineProperty(this, "assets", null);

    _defineProperty(this, "robots", new Map());

    _defineProperty(this, "sensorsCache", new Set());

    _defineProperty(this, "timers", []);

    _defineProperty(this, "externalSensorHandlers", []);

    this.world = matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.World.create({
      gravity: {
        x: 0,
        y: 0
      }
    });
    this.engine = matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Engine.create({
      world: this.world
    });
    this.runner = matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Runner.create(); // robot update on simulation tick

    matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Events.on(this.runner, 'beforeUpdate', ({
      timestamp
    }) => {
      for (const robot of this.robots.values()) {
        robot.beforeUpdate();
      }

      this.timers = this.timers.filter(([deadline, resolve]) => {
        // keep timers that have not yet expired
        if (deadline > timestamp) return true; // process the timer and remove

        resolve();
        return false;
      });
    });

    function extractBodyForSDK({
      id,
      label,
      position,
      speed,
      velocity,
      angle,
      angularSpeed,
      angularVelocity,
      bounds
    }) {
      return {
        id,
        label,
        position,
        speed,
        velocity,
        angle,
        angularSpeed,
        angularVelocity,
        bounds
      };
    } // check for line detection


    const collisionHandler = ({
      name,
      pairs
    }) => {
      for (const {
        bodyA,
        bodyB
      } of pairs) {
        for (const handler of this.externalSensorHandlers) {
          handler(name, extractBodyForSDK(bodyA), extractBodyForSDK(bodyB));
        }

        let sensor = null;
        let other = null;

        if (this.sensorsCache.has(bodyA)) {
          sensor = bodyA;
          other = bodyB;
        } else if (this.sensorsCache.has(bodyB)) {
          sensor = bodyB;
          other = bodyA;
        } else {
          continue;
        }

        sensor.plugin.hedgehog.sensor.handleCollision(name, other);
      }
    };

    matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Events.on(this.engine, 'collisionStart', collisionHandler);
    matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Events.on(this.engine, 'collisionEnd', collisionHandler);
  }

  async sleep(millis) {
    return (
      /* await */
      new Promise(resolve => {
        this.timers.push([this.engine.timing.timestamp + millis, resolve]);
      })
    );
  }

  jsonInit({
    center: {
      x,
      y
    },
    // eslint-disable-next-line no-shadow
    width,
    // eslint-disable-next-line no-shadow
    height,
    objects
  }, assets = null) {
    this.clear(false);
    this.assets = assets;
    this.lookAt({
      min: {
        x: x - width / 2,
        y: y - height / 2
      },
      max: {
        x: x + width / 2,
        y: y + height / 2
      }
    });
    this.jsonAdd(objects);
  }

  jsonAdd(objects, temporary = false) {
    for (const object of objects) {
      try {
        if (object.type === 'robot') {
          const {
            type: _type,
            name,
            ...options
          } = object; // Robot is added here

          this.addRobot(name, new ___WEBPACK_IMPORTED_MODULE_4__["Robot"](options, this.assets));
        } else {
          // this fails cleanly if the object type is not known
          const body = ___WEBPACK_IMPORTED_MODULE_4__["schema"].createBody(object, this.assets, temporary);
          this.add([body]);
        }
      } catch (err) {
        console.error(err);
      }
    }

    this.updateSensorCache();
  }

  updateBodies(objects) {
    for (const body of this.world.bodies) {
      const settings = objects[body.label];

      if (settings !== undefined) {
        matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Body.set(body, { ...settings,
          // merge render, as that encapsulates multiple settings
          render: { ...body.render,
            ...settings.render,
            sprite: { ...body.render.sprite,
              ...settings.render.sprite
            }
          },
          // also recursively merge plugins, which encapsulate arbitrary data
          plugin: lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, body.plugin, settings.plugin)
        });
      }
    }
  }

  removeBodies(labels) {
    const bodiesToRemove = this.world.bodies.filter(body => labels.includes(body.label));

    for (const body of bodiesToRemove) {
      matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.World.remove(this.world, body);
    }
  }

  mount(canvas) {
    this.unmount();
    const dimension = {};

    if (this.bounds !== null) {
      dimension.width = this.bounds.max.x - this.bounds.min.x;
      dimension.height = this.bounds.max.y - this.bounds.min.y;
    } // TODO creating a Render instance with a running Engine will error,
    // as the Engine's internal state is recursive.
    // mount() can therefore not be called after initially starting the simulation


    this.render = matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Render.create({
      canvas,
      engine: this.engine,
      options: { ...dimension,
        wireframes: false,
        background: '#eeeeee'
      }
    });
    if (this.bounds !== null) matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Render.lookAt(this.render, this.bounds);
  }

  unmount() {
    if (this.render !== null) this.stopRender();
    this.render = null;
  }

  startMatter() {
    matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Runner.run(this.runner, this.engine);
  }

  startRender() {
    matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Render.run(this.render);
  }

  stopMatter() {
    matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Runner.stop(this.runner);
  }

  stopRender() {
    matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Render.stop(this.render);
  }

  lookAt(bounds) {
    this.bounds = bounds;
    if (this.render !== null) matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Render.lookAt(this.render, bounds);
  }

  add(bodies) {
    matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.World.add(this.world, bodies);
  }

  addSensorHandler(handler) {
    if (!this.externalSensorHandlers.includes(handler)) {
      this.externalSensorHandlers.push(handler);
    }
  }

  removeSensorHandler(handler) {
    const index = this.externalSensorHandlers.indexOf(handler);

    if (index !== -1) {
      this.externalSensorHandlers.splice(index, 1);
    }
  }

  addRobot(name, robot) {
    this.robots.set(name, robot);
    this.add(robot.robot);
  } // this method has to be called after adding one or more robots to the
  // simulation, before using any new robot's sensors.


  updateSensorCache() {
    this.sensorsCache.clear();

    for (const robot of this.robots.values()) {
      for (const sensor of robot.collisionSensors) {
        this.sensorsCache.add(sensor.sensorBody);
      }
    }
  }

  clear(keepStatic) {
    matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Composite.clear(this.world, keepStatic);
    this.robots.clear();
    this.updateSensorCache();
  }

  reset() {
    const bodiesToRemove = [];

    for (const composite of [...matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Composite.allComposites(this.world), ...matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Composite.allBodies(this.world)]) {
      var _composite$plugin$hed, _composite$plugin$hed2;

      if ((_composite$plugin$hed = composite.plugin.hedgehog) === null || _composite$plugin$hed === void 0 ? void 0 : _composite$plugin$hed.initialPose) {
        const {
          x,
          y,
          angle
        } = composite.plugin.hedgehog.initialPose;
        matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Body.setPosition(composite, {
          x,
          y
        });
        matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Body.setAngle(composite, angle);
        matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Body.setVelocity(composite, {
          x: 0,
          y: 0
        });
        matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.Body.setAngularVelocity(composite, 0);
      }

      if ((_composite$plugin$hed2 = composite.plugin.hedgehog) === null || _composite$plugin$hed2 === void 0 ? void 0 : _composite$plugin$hed2.temporary) {
        bodiesToRemove.push(composite);
      }
    }

    for (const body of bodiesToRemove) {
      matter_js__WEBPACK_IMPORTED_MODULE_1___default.a.World.remove(this.world, body);
    }

    for (const robot of this.robots.values()) {
      robot.reset();
    }
  }

}

/***/ }),

/***/ "./src/components/ide/Simulator/simulation/drives.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DifferentialDrive", function() { return DifferentialDrive; });
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("matter-js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ide/Simulator/simulation/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // eslint-disable-next-line import/prefer-default-export

class DifferentialDrive {
  constructor(controller, leftPort, rightPort, leftWheel, rightWheel, body) {
    _defineProperty(this, "controller", void 0);

    _defineProperty(this, "leftPort", void 0);

    _defineProperty(this, "rightPort", void 0);

    _defineProperty(this, "leftWheel", void 0);

    _defineProperty(this, "rightWheel", void 0);

    _defineProperty(this, "body", void 0);

    this.controller = controller;
    this.leftPort = leftPort;
    this.rightPort = rightPort;
    this.leftWheel = leftWheel;
    this.rightWheel = rightWheel;
    this.body = body;
  }

  applyForce(pos, force, cos, sin) {
    matter_js__WEBPACK_IMPORTED_MODULE_0___default.a.Body.applyForce(this.body, pos, {
      x: force * cos,
      y: force * sin
    });
  }

  beforeUpdate() {
    const lPos = this.leftWheel.position;
    const rPos = this.rightWheel.position;
    const dx = lPos.x - rPos.x;
    const dy = lPos.y - rPos.y;
    const hypot = Math.hypot(dx, dy); // cosine and sine of the angle in which the forces are directed
    // this is normal to the axis of the wheels, therefore [-dy, dx] instead of [dx, dy]

    const cos = -dy / hypot;
    const sin = dx / hypot;
    this.applyForce(lPos, this.controller.getMotor(this.leftPort) / 800, cos, sin);
    this.applyForce(rPos, this.controller.getMotor(this.rightPort) / 800, cos, sin);
  }

}

/***/ }),

/***/ "./src/components/ide/Simulator/simulation/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/ide/Simulator/simulation/schema/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "schema", function() { return _schema__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return _schema__WEBPACK_IMPORTED_MODULE_0__["Point"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pose", function() { return _schema__WEBPACK_IMPORTED_MODULE_0__["Pose"]; });

/* harmony import */ var _Hedgehog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ide/Simulator/simulation/Hedgehog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hedgehog", function() { return _Hedgehog__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Robot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/ide/Simulator/simulation/Robot.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Robot", function() { return _Robot__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Simulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/ide/Simulator/simulation/Simulation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Simulation", function() { return _Simulation__WEBPACK_IMPORTED_MODULE_3__["default"]; });

// work around https://github.com/benmosher/eslint-plugin-import/issues/1753







/***/ }),

/***/ "./src/components/ide/Simulator/simulation/schema/helpers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveSprite", function() { return resolveSprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInitialPose", function() { return setInitialPose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTemporary", function() { return setTemporary; });
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("matter-js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);

function resolveSprite(sprite, assets = null) {
  if ((sprite === null || sprite === void 0 ? void 0 : sprite.texture) && sprite.texture.startsWith('asset:')) {
    var _assets$get;

    if (assets === null) {
      throw new Error(`Trying to use '${sprite.texture}', but there's no asset map`);
    } // the result may be undefined, which is fine with us,
    // because that means Matter.js will not fail loading a texture


    sprite.texture = (_assets$get = assets.get(sprite.texture)) === null || _assets$get === void 0 ? void 0 : _assets$get[0];
  }
}
function setInitialPose(body, pose) {
  if (!body.plugin.hedgehog) body.plugin.hedgehog = {};
  body.plugin.hedgehog.initialPose = pose !== null && pose !== void 0 ? pose : { ...body.position,
    angle: body.angle
  };
}
function setTemporary(body, temporary) {
  if (!body.plugin.hedgehog) body.plugin.hedgehog = {};
  body.plugin.hedgehog.temporary = temporary;
}

/***/ }),

/***/ "./src/components/ide/Simulator/simulation/schema/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/ide/Simulator/simulation/schema/misc.js");
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_misc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _misc__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _misc__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _simulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ide/Simulator/simulation/schema/simulation.js");
/* harmony import */ var _simulation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_simulation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _simulation__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _simulation__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/ide/Simulator/simulation/schema/settings.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_settings__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _settings__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _settings__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/ide/Simulator/simulation/schema/objects.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBody", function() { return _objects__WEBPACK_IMPORTED_MODULE_3__["createBody"]; });

/* harmony import */ var _robot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/ide/Simulator/simulation/schema/robot.js");
/* harmony import */ var _robot__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_robot__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _robot__WEBPACK_IMPORTED_MODULE_4__) if(["createBody","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _robot__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));






/***/ }),

/***/ "./src/components/ide/Simulator/simulation/schema/misc.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/ide/Simulator/simulation/schema/objects.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBody", function() { return createBody; });
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("matter-js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ide/Simulator/simulation/schema/helpers.js");


function createBody(config, assets = null, temporary = false) {
  let body;

  switch (config.type) {
    case 'rectangle':
      {
        var _options$render;

        // eslint-disable-next-line no-shadow
        const {
          type: _type,
          width,
          height,
          ...options
        } = config;
        Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["resolveSprite"])(options === null || options === void 0 ? void 0 : (_options$render = options.render) === null || _options$render === void 0 ? void 0 : _options$render.sprite, assets);
        body = matter_js__WEBPACK_IMPORTED_MODULE_0___default.a.Bodies.rectangle(0, 0, width, height, options);
        break;
      }

    case 'circle':
      {
        var _options$render2;

        const {
          type: _type,
          radius,
          ...options
        } = config;
        Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["resolveSprite"])(options === null || options === void 0 ? void 0 : (_options$render2 = options.render) === null || _options$render2 === void 0 ? void 0 : _options$render2.sprite, assets);
        body = matter_js__WEBPACK_IMPORTED_MODULE_0___default.a.Bodies.circle(0, 0, radius, options);
        break;
      }

    case 'svg':
      {
        var _options$render3, _assets$get$, _assets$get;

        const {
          type: _type,
          src,
          scale,
          granularity,
          position: {
            x,
            y
          },
          angle,
          ...options
        } = config;
        Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["resolveSprite"])(options === null || options === void 0 ? void 0 : (_options$render3 = options.render) === null || _options$render3 === void 0 ? void 0 : _options$render3.sprite, assets);

        if (assets === null) {
          throw new Error(`Trying to use '${src}', but there's no asset map`);
        }

        const svgBuffer = (_assets$get$ = (_assets$get = assets.get(src)) === null || _assets$get === void 0 ? void 0 : _assets$get[1]) !== null && _assets$get$ !== void 0 ? _assets$get$ : null;

        if (svgBuffer === null) {
          throw new Error(`asset not found: '${src}'`);
        }

        const svgText = new TextDecoder('utf-8').decode(svgBuffer);
        const svgDocument = new DOMParser().parseFromString(svgText, 'image/svg+xml');
        const paths = Array.from(svgDocument.getElementsByTagName('path'));
        const vertexSets = paths.map(path => matter_js__WEBPACK_IMPORTED_MODULE_0___default.a.Vertices.scale(matter_js__WEBPACK_IMPORTED_MODULE_0___default.a.Svg.pathToVertices(path, granularity), scale, scale));
        body = matter_js__WEBPACK_IMPORTED_MODULE_0___default.a.Bodies.fromVertices(x, y, vertexSets, options, true);
        matter_js__WEBPACK_IMPORTED_MODULE_0___default.a.Body.setAngle(body, angle);
        break;
      }

    case 'robot':
      {
        throw new Error(`createBody can not handle robots`);
      }

    default:
      {
        throw new Error(`unknown simulation object: ${config.type}`);
      }
  }

  Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["setInitialPose"])(body);
  Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["setTemporary"])(body, temporary);
  return body;
}

/***/ }),

/***/ "./src/components/ide/Simulator/simulation/schema/robot.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/ide/Simulator/simulation/schema/settings.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/ide/Simulator/simulation/schema/simulation.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/ide/Simulator/simulation/sensors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollisionSensor", function() { return CollisionSensor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleCollisionSensor", function() { return SimpleCollisionSensor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchSensor", function() { return TouchSensor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineSensor", function() { return LineSensor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanceSensor", function() { return DistanceSensor; });
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("matter-js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ide/Simulator/simulation/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * A collision sensor senses its environment by keeping track of whether it currently collides with
 * other simulation objects.
 * A sensor can restrict the class of relevant collision bodies, and handle its collision state
 * in any way, but usually by setting a sensor value on its controller instance.
 */

class CollisionSensor {
  constructor(sensorBody) {
    _defineProperty(this, "sensorBody", void 0);

    _defineProperty(this, "collisionCount", 0);

    this.sensorBody = sensorBody;
    this.sensorBody.plugin.hedgehog = {
      sensor: this
    };
  }
  /**
   * Returns whether the body this sensor is colliding with is relevant for the sensor.
   * For example, a touch sensor would not want to detect collisions with sensor bodies,
   * as they are intangible
   */
  // eslint-disable-next-line class-methods-use-this


  matches(_other) {
    return true;
  }
  /**
   * Updates the sensor state after handling a collision.
   */


  update() {}

  isColliding() {
    return this.collisionCount > 0;
  }

  handleCollision(eventName, other) {
    if (!this.matches(other)) return;

    switch (eventName) {
      case 'collisionStart':
        this.collisionCount += 1;
        break;

      case 'collisionEnd':
        this.collisionCount -= 1;
        break;

      default:
        // eslint-disable-next-line no-throw-literal
        throw 'unreachable';
    }

    this.update();
  }

}
/**
 * Simple collision sensors are associated with a single sensor port and update that sensor with
 * one of two values, depending on whether there is a collision or not.
 */

class SimpleCollisionSensor extends CollisionSensor {
  // the sensor value when the sensor body is not collided or collided, respectively
  constructor(controller, sensorBody, port, values) {
    super(sensorBody);

    _defineProperty(this, "controller", void 0);

    _defineProperty(this, "port", void 0);

    _defineProperty(this, "values", void 0);

    this.controller = controller;
    this.port = port;
    this.values = values; // TODO add noise source to sensor
    // set initial value to not collided

    this.update(false);
  }

  update(colliding) {
    if (colliding === undefined) {
      colliding = this.isColliding();
    } // update sensor body style


    this.sensorBody.render.fillStyle = colliding ? '#ffa500' : '#777777';
    const value = colliding ? this.values[1] : this.values[0];
    this.controller.setSensor(this.port, value);
  }

}
/**
 * A touch sensor detects collisions with tangible bodies of the simulation
 */

class TouchSensor extends SimpleCollisionSensor {
  constructor(controller, sensorBody, port) {
    super(controller, sensorBody, port, [4095, 0]);
  } // eslint-disable-next-line class-methods-use-this


  matches(other) {
    return !other.isSensor;
  }

}
/**
 * A line sensor detects collisions with lines in the simulation, as indicated by the plugin
 * propery `hedgehog.isLine`.
 */

class LineSensor extends SimpleCollisionSensor {
  constructor(controller, sensorBody, port) {
    super(controller, sensorBody, port, [100, 4000]);
  } // eslint-disable-next-line class-methods-use-this


  matches(other) {
    var _other$plugin$hedgeho, _other$plugin$hedgeho2;

    return (_other$plugin$hedgeho = (_other$plugin$hedgeho2 = other.plugin.hedgehog) === null || _other$plugin$hedgeho2 === void 0 ? void 0 : _other$plugin$hedgeho2.isLine) !== null && _other$plugin$hedgeho !== void 0 ? _other$plugin$hedgeho : false;
  }

}

class DistanceSensorSegment extends CollisionSensor {
  // eslint-disable-next-line no-use-before-define
  // eslint-disable-next-line no-use-before-define
  constructor(sensor, sensorBody, distance) {
    super(sensorBody);

    _defineProperty(this, "sensor", void 0);

    _defineProperty(this, "distance", void 0);

    this.sensor = sensor;
    this.distance = distance;
  } // eslint-disable-next-line class-methods-use-this


  matches(other) {
    return !other.isSensor;
  }

  update() {
    this.sensor.update();
  }

}

class DistanceSensor {
  // segments are ordered near to far, so the first colliding segment determines the distance
  constructor(controller, port, segments) {
    _defineProperty(this, "controller", void 0);

    _defineProperty(this, "port", void 0);

    _defineProperty(this, "segments", void 0);

    _defineProperty(this, "maxDistance", void 0);

    this.controller = controller;
    this.port = port;
    this.segments = segments.map(([sensorBody, distance]) => new DistanceSensorSegment(this, sensorBody, distance));
    this.maxDistance = this.segments[this.segments.length - 1].distance + 1; // TODO add noise source to sensor
    // set initial value to maximum distance

    this.update(this.maxDistance);
  }

  getDistance() {
    for (const segment of this.segments) {
      if (segment.isColliding()) return segment.distance;
    }

    return this.maxDistance;
  }

  update(distance) {
    if (distance === undefined) {
      distance = this.getDistance();
    } // update sensor segment styles


    for (const segment of this.segments) {
      if (segment.distance < distance) {
        segment.sensorBody.render.fillStyle = '#555555';
        segment.sensorBody.render.opacity = 0.4;
      } else if (segment.distance === distance) {
        segment.sensorBody.render.fillStyle = '#000000';
        segment.sensorBody.render.opacity = 0.8;
      } else {
        segment.sensorBody.render.fillStyle = '#555555';
        segment.sensorBody.render.opacity = 0.05;
      }
    } // this is modelled loosely after https://lucsmall.com/images/preview/20130507-voltage-vs-distance.png
    // under a certain distance threshold, the value grows linearly with the distance to the max value
    // over that threshold, the value falls off from the max value inversely with the distance


    const maxValue = 4000;
    const distanceThreshold = 20;
    const bias = 20;
    const value = distance < distanceThreshold ? maxValue * (distance / distanceThreshold) : maxValue * (distanceThreshold + bias) / (distance + bias);
    this.controller.setSensor(this.port, value);
  }

}

/***/ }),

/***/ "./src/components/ide/Simulator/simulation/servo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServoArm", function() { return ServoArm; });
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("matter-js");
/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ide/Simulator/simulation/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function poseToPoint({
  x,
  y
}) {
  return {
    x,
    y
  };
}

function transform({
  x,
  y,
  angle
}, {
  x: dx,
  y: dy,
  angle: dangle
}) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return {
    x: x + cos * dx - sin * dy,
    y: y + sin * dx + cos * dy,
    angle: angle + dangle
  };
}

class ServoArm {
  constructor(controller, port, // the body to which the servo arm is anchored
  anchor, // the pose, relative to the anchor, where the arm's pivot point is located
  pivotAnchor, // the body representing the servo arm
  arm, // the pose, relative to the arm, where the arm's pivot point is located
  pivotArm, // the distance from the pivot constraint at which the control constraint attaches to the bodies
  length) {
    _defineProperty(this, "controller", void 0);

    _defineProperty(this, "port", void 0);

    _defineProperty(this, "anchor", void 0);

    _defineProperty(this, "pivotAnchor", void 0);

    _defineProperty(this, "arm", void 0);

    _defineProperty(this, "pivotArm", void 0);

    _defineProperty(this, "length", void 0);

    _defineProperty(this, "pivotConstraint", void 0);

    _defineProperty(this, "controlConstraint", void 0);

    this.controller = controller;
    this.port = port;
    this.anchor = anchor;
    this.pivotAnchor = pivotAnchor;
    this.arm = arm;
    this.pivotArm = pivotArm;
    this.length = length;
    this.pivotConstraint = matter_js__WEBPACK_IMPORTED_MODULE_0___default.a.Constraint.create({
      bodyA: anchor,
      pointA: poseToPoint(pivotAnchor),
      bodyB: arm,
      pointB: poseToPoint(pivotArm),
      length: 0,
      render: {
        visible: false
      }
    });
    const translation = {
      x: length,
      y: 0,
      angle: 0
    };
    this.controlConstraint = matter_js__WEBPACK_IMPORTED_MODULE_0___default.a.Constraint.create({
      bodyA: anchor,
      pointA: poseToPoint(transform(pivotAnchor, translation)),
      bodyB: arm,
      pointB: poseToPoint(transform(pivotArm, translation)),
      length: 0,
      render: {
        visible: false
      }
    });
  }

  setPosition(position) {
    // position 0..=1000 should be translated into angle -90°..=90°
    // 0..=1000 -> -500..=500 -> -1/2..=1/2 -> PI/2..=PI/2
    const dAngle = (position - 500) / 1000 * Math.PI; // the anchor pivot point rotated by dAngle

    let pivotAnchor = { ...this.pivotAnchor,
      angle: this.pivotAnchor.angle + dAngle
    }; // for some reason, we have to consider the anchor's angle, but not its position
    // this transformation rotates the coordinate frame in which the pivot pose is
    // specified by the pivot's angle

    const rotation = {
      x: 0,
      y: 0,
      angle: this.anchor.angle
    };
    pivotAnchor = transform(rotation, pivotAnchor);
    const translation = {
      x: this.length,
      y: 0,
      angle: 0
    };
    const pointA = poseToPoint(transform(pivotAnchor, translation));
    this.controlConstraint.pointA = pointA;
  }

  beforeUpdate() {
    const position = this.controller.getServo(this.port);
    if (position !== null) this.setPosition(position);
  }

  reset() {
    // the default position is in the middle of the value range, i.e. 500
    this.setPosition(500);
  }

}

/***/ }),

/***/ "./src/components/ide/SimulatorEditor/SimulatorEditor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateConfigFromXml", function() { return generateConfigFromXml; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("blockly/core");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var blockly_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("blockly/blocks");
/* harmony import */ var blockly_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(blockly_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/locale/index.js");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/translations/index.js");
/* harmony import */ var _misc_palette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/misc/palette.js");
/* harmony import */ var _misc_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/misc/hooks/index.js");
/* harmony import */ var _Blockly__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/ide/Blockly/Blockly.js");
/* harmony import */ var _ToolBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/ide/ToolBar/ToolBar.js");
/* harmony import */ var _ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/ide/ToolBar/ToolBarIconButton.js");
/* harmony import */ var _ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/ide/ToolBar/ToolBarItem.js");
/* harmony import */ var _SimulatorEditor_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/ide/SimulatorEditor/SimulatorEditor.scss");
/* harmony import */ var _SimulatorEditor_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_SimulatorEditor_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _useFile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/components/ide/useFile.js");
/* harmony import */ var _Simulator_simulation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/components/ide/Simulator/simulation/index.js");
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/components/ide/SimulatorEditor/blocks/index.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/SimulatorEditor/SimulatorEditor.js";



 // loading this clears any previously set blocks, so make sure this module is loaded
// before adding any custom blocks













 // TODO translate simulator editor

const LOCALES = {
  en: {
    rtl: false,
    msg: {}
  }
};
const workspaceOptions = {
  toolbox: react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToStaticMarkup( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("xml", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("category", {
    name: "Simulation",
    colour: "120",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_ROOT"].toolboxBlocks.default(), _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_RECT"].toolboxBlocks.default(), _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_CIRCLE"].toolboxBlocks.default(), _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_SVG"].toolboxBlocks.default(), _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_GROUP"].toolboxBlocks.default(), _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_GROUP"].toolboxBlocks.line()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("category", {
    name: "Settings",
    colour: "120",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_SETTINGS_TRANSLATE"].toolboxBlocks.default(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
    type: "simulator_settings_translate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
    name: "MORE",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
    type: "simulator_settings_rotate",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }))), _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_SETTINGS_COLOR"].toolboxBlocks.default(), _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_SETTINGS_VISIBILITY"].toolboxBlocks.default(), _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_SETTINGS_SPRITE"].toolboxBlocks.default(), _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_SETTINGS_SPRITE"].toolboxBlocks.external(), _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_SETTINGS_STATIC"].toolboxBlocks.default(), _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_SETTINGS_SENSOR"].toolboxBlocks.default(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
    type: "simulator_settings_sensor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
    name: "MORE",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
    type: "simulator_settings_line",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }))), _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_SETTINGS_DENSITY"].toolboxBlocks.default(), _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_SETTINGS_FRICTION_AIR"].toolboxBlocks.default(), _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_SETTINGS_LABEL"].toolboxBlocks.default()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("category", {
    name: "Robots",
    colour: "120",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_ROBOT"].toolboxBlocks.default(), _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_ROBOT_PART_LINE"].toolboxBlocks.default(), _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_ROBOT_PART_TOUCH"].toolboxBlocks.default(), _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_ROBOT_PART_DISTANCE"].toolboxBlocks.default(), _blocks__WEBPACK_IMPORTED_MODULE_16__["SIMULATOR_ROBOT_PART_SERVO_ARM"].toolboxBlocks.default()))),
  move: {
    scrollbars: true,
    drag: true,
    wheel: false
  },
  zoom: {
    controls: false,
    wheel: true,
    maxScale: 1.5,
    minScale: 0.4,
    scaleSpeed: 1.02
  },
  grid: {
    spacing: 20,
    length: 3,
    colour: '#ccc',
    snap: true
  },
  trashcan: false,
  scrollbars: true
};

function generateConfig(workspace) {
  const roots = workspace.getBlocksByType('simulator_root');
  if (roots.length !== 1) return null;
  const [simulation] = roots;
  return simulation.serialize();
}

function generateConfigFromXml(workspaceXml) {
  const workspace = new blockly_core__WEBPACK_IMPORTED_MODULE_3___default.a.Workspace();
  blockly_core__WEBPACK_IMPORTED_MODULE_3___default.a.Xml.domToWorkspace(blockly_core__WEBPACK_IMPORTED_MODULE_3___default.a.Xml.textToDom(workspaceXml), workspace);
  const result = generateConfig(workspace);
  workspace.dispose();
  return result;
}

function SimulatorEditor({
  layoutNode,
  project,
  path,
  onConfigChange,
  jsonCollapsed,
  workspaceTransform,
  onUpdate
}) {
  var _getTranslation;

  const blocklyRef = _misc_hooks__WEBPACK_IMPORTED_MODULE_8__["useElementRef"]();
  const jsonRef = _misc_hooks__WEBPACK_IMPORTED_MODULE_8__["useElementRef"]();
  const [content, setContent] = Object(_useFile__WEBPACK_IMPORTED_MODULE_14__["default"])(project, path, 'utf8'); // update workspace size when the containing tab is resized or made visible

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    layoutNode.setEventListener('resize', () => {
      if (blocklyRef.current) blocklyRef.current.refreshSizeDeferred();
    });
    layoutNode.setEventListener('visibility', ({
      visible
    }) => {
      if (blocklyRef.current) blocklyRef.current.updateVisibility(visible);
    });
    return () => {
      layoutNode.setEventListener('resize', null);
      layoutNode.setEventListener('visibility', null);
    };
  }, [layoutNode, blocklyRef]); // animate workspace size when the sidebar is expanding or collapsing

  const [startAnimation, stopAnimation] = _misc_hooks__WEBPACK_IMPORTED_MODULE_8__["useAnimationFrame"](() => {
    if (blocklyRef.current) blocklyRef.current.refreshSize();
  });
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (jsonRef.current === null) return undefined;
    const jsonElem = jsonRef.current;

    const onTransitionEnd = () => {
      stopAnimation();
      if (blocklyRef.current) blocklyRef.current.refreshSizeDeferred();
    };

    jsonElem.addEventListener('transitionend', onTransitionEnd);
    return () => {
      jsonElem.removeEventListener('transitionend', onTransitionEnd);
    };
  });

  function handleToggleJsonCollapsed() {
    onUpdate({
      jsonCollapsed: !jsonCollapsed,
      workspaceTransform
    });
    startAnimation();
  } // handle blockly changes by saving the file and regenerating code


  const [json, setJson] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);

  function handleBlocklyChange(workspace) {
    const config = generateConfig(workspace);
    setJson(config === null ? '' : JSON.stringify(config, undefined, 2));
    onConfigChange(config);
    const workspaceXml = blockly_core__WEBPACK_IMPORTED_MODULE_3___default.a.Xml.domToText(blockly_core__WEBPACK_IMPORTED_MODULE_3___default.a.Xml.workspaceToDom(workspace));
    setContent(workspaceXml);
  }

  function handleBlocklyScroll(workspace) {
    const {
      scrollX,
      scrollY,
      scale
    } = workspace; // eslint-disable-next-line no-shadow

    const workspaceTransform = {
      scrollX,
      scrollY,
      scale
    };
    onUpdate({
      jsonCollapsed,
      workspaceTransform
    });
  }

  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_2___default()(_SimulatorEditor_scss__WEBPACK_IMPORTED_MODULE_13___default.a);
  const {
    preferredLocales
  } = Object(_locale__WEBPACK_IMPORTED_MODULE_5__["useLocale"])();
  const locale = (_getTranslation = Object(_translations__WEBPACK_IMPORTED_MODULE_6__["getTranslation"])(preferredLocales, LOCALES)) !== null && _getTranslation !== void 0 ? _getTranslation : LOCALES.en;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _SimulatorEditor_scss__WEBPACK_IMPORTED_MODULE_13___default.a.tabRoot,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 5
    }
  }, content === null ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Blockly__WEBPACK_IMPORTED_MODULE_9__["default"], {
    forwardedRef: blocklyRef,
    initialWorkspaceXml: content,
    locale: locale,
    workspaceOptions: workspaceOptions,
    workspaceTransform: workspaceTransform,
    onChange: handleBlocklyChange,
    onScroll: handleBlocklyScroll,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: handleToggleJsonCollapsed,
    icon: jsonCollapsed ? _misc_palette__WEBPACK_IMPORTED_MODULE_7__["SlideLeftIcon"] : _misc_palette__WEBPACK_IMPORTED_MODULE_7__["SlideRightIcon"],
    disableRipple: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("pre", {
    ref: jsonRef,
    className: jsonCollapsed ? `${_SimulatorEditor_scss__WEBPACK_IMPORTED_MODULE_13___default.a.jsonContainer} ${_SimulatorEditor_scss__WEBPACK_IMPORTED_MODULE_13___default.a.collapsed}` : _SimulatorEditor_scss__WEBPACK_IMPORTED_MODULE_13___default.a.jsonContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 7
    }
  }, json));
}

SimulatorEditor.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  jsonCollapsed: true,
  // eslint-disable-next-line react/default-props-match-prop-types
  workspaceTransform: {
    scrollX: 0.0,
    scrollY: 0.0,
    scale: 1.0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (SimulatorEditor);

/***/ }),

/***/ "./src/components/ide/SimulatorEditor/SimulatorEditor.scss":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/SimulatorEditor/SimulatorEditor.scss");
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
      module.hot.accept("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/SimulatorEditor/SimulatorEditor.scss", function() {
        css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/SimulatorEditor/SimulatorEditor.scss");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/ide/SimulatorEditor/blocks/helpers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anyAncestor", function() { return anyAncestor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbidsAncestor", function() { return forbidsAncestor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputDescendants", function() { return getInputDescendants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettings", function() { return getSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectSettings", function() { return collectSettings; });
function anyAncestor(block, condition) {
  for (let ancestor = block.getSurroundParent(); ancestor !== null; ancestor = ancestor.getSurroundParent()) {
    if (condition(ancestor)) return true;
  }

  return false;
}
function forbidsAncestor(types, warning) {
  return function onchange() {
    // Don't change state at the start of a drag.
    if (this.workspace.isDragging()) return; // Is the block nested in a forbidden ancestor?

    const legal = !anyAncestor(this, block => types.indexOf(block.type) !== -1);

    if (legal) {
      this.setWarningText(null);
      if (!this.isInFlyout) this.setEnabled(true);
    } else {
      this.setWarningText(warning);

      if (!this.isInFlyout && !this.getInheritedDisabled()) {
        this.setEnabled(false);
      }
    }
  };
}
function getInputDescendants(input) {
  var _block$getDescendants;

  const block = this.getInputTargetBlock(input);
  return (_block$getDescendants = block === null || block === void 0 ? void 0 : block.getDescendants(true)) !== null && _block$getDescendants !== void 0 ? _block$getDescendants : [];
} // reads the SETTINGS input and recursively that block's MORE input
// to get a settings object

function getSettings() {
  let settings = {
    position: {
      x: 0,
      y: 0
    },
    angle: 0
  };

  for (let block = this.getInputTargetBlock('SETTINGS'); block !== null; block = block.getInputTargetBlock('MORE')) {
    var _settings$plugin, _moreSettings$plugin;

    const moreSettings = block.getSettings();
    settings = { // overwrite settings with later settings
      ...settings,
      ...moreSettings,
      // however merge some specific properties
      ...('render' in settings || 'render' in moreSettings ? {
        render: { ...settings.render,
          ...moreSettings.render
        }
      } : null),
      ...('plugin' in settings || 'plugin' in moreSettings ? {
        plugin: {
          hedgehog: { ...((_settings$plugin = settings.plugin) === null || _settings$plugin === void 0 ? void 0 : _settings$plugin.hedgehog),
            ...((_moreSettings$plugin = moreSettings.plugin) === null || _moreSettings$plugin === void 0 ? void 0 : _moreSettings$plugin.hedgehog)
          }
        }
      } : null)
    };
  }

  return settings;
} // collects settings from the object and all its ancestor groups and collects them into one setting object

function collectSettings(object) {
  // position and angle are treated separately to other settings
  let {
    position,
    angle,
    ...settings
  } = object.getSettings();

  for (let group = object.getSurroundParent(); group.type === 'simulator_group'; group = group.getSurroundParent()) {
    var _outerSettings$plugin, _settings$plugin2;

    const {
      position: outerPosition,
      angle: outerAngle,
      ...outerSettings
    } = group.getSettings();
    const cos = Math.cos(outerAngle);
    const sin = Math.sin(outerAngle);
    position = {
      x: outerPosition.x + cos * position.x - sin * position.y,
      y: outerPosition.y + sin * position.x + cos * position.y
    };
    angle += outerAngle;
    settings = { // we're going from most to least specific, so don't override properties already present
      ...outerSettings,
      ...settings,
      // however merge some specific properties
      ...('render' in outerSettings || 'render' in settings ? {
        render: { ...outerSettings.render,
          ...settings.render
        }
      } : null),
      ...('plugin' in outerSettings || 'plugin' in settings ? {
        plugin: {
          hedgehog: { ...((_outerSettings$plugin = outerSettings.plugin) === null || _outerSettings$plugin === void 0 ? void 0 : _outerSettings$plugin.hedgehog),
            ...((_settings$plugin2 = settings.plugin) === null || _settings$plugin2 === void 0 ? void 0 : _settings$plugin2.hedgehog)
          }
        }
      } : null)
    };
  }

  return {
    position,
    angle,
    ...settings
  };
}

/***/ }),

/***/ "./src/components/ide/SimulatorEditor/blocks/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("blockly/core");
/* harmony import */ var blockly_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockly_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _simulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ide/SimulatorEditor/blocks/simulation.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/ide/SimulatorEditor/blocks/settings.js");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/ide/SimulatorEditor/blocks/objects.js");
/* harmony import */ var _robot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/ide/SimulatorEditor/blocks/robot.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_ROOT", function() { return _simulation__WEBPACK_IMPORTED_MODULE_1__["SIMULATOR_ROOT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_TRANSLATE", function() { return _settings__WEBPACK_IMPORTED_MODULE_2__["SIMULATOR_SETTINGS_TRANSLATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_ROTATE", function() { return _settings__WEBPACK_IMPORTED_MODULE_2__["SIMULATOR_SETTINGS_ROTATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_COLOR", function() { return _settings__WEBPACK_IMPORTED_MODULE_2__["SIMULATOR_SETTINGS_COLOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_VISIBILITY", function() { return _settings__WEBPACK_IMPORTED_MODULE_2__["SIMULATOR_SETTINGS_VISIBILITY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_SPRITE", function() { return _settings__WEBPACK_IMPORTED_MODULE_2__["SIMULATOR_SETTINGS_SPRITE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_STATIC", function() { return _settings__WEBPACK_IMPORTED_MODULE_2__["SIMULATOR_SETTINGS_STATIC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_SENSOR", function() { return _settings__WEBPACK_IMPORTED_MODULE_2__["SIMULATOR_SETTINGS_SENSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_LINE", function() { return _settings__WEBPACK_IMPORTED_MODULE_2__["SIMULATOR_SETTINGS_LINE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_DENSITY", function() { return _settings__WEBPACK_IMPORTED_MODULE_2__["SIMULATOR_SETTINGS_DENSITY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_FRICTION_AIR", function() { return _settings__WEBPACK_IMPORTED_MODULE_2__["SIMULATOR_SETTINGS_FRICTION_AIR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_LABEL", function() { return _settings__WEBPACK_IMPORTED_MODULE_2__["SIMULATOR_SETTINGS_LABEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_RECT", function() { return _objects__WEBPACK_IMPORTED_MODULE_3__["SIMULATOR_RECT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_CIRCLE", function() { return _objects__WEBPACK_IMPORTED_MODULE_3__["SIMULATOR_CIRCLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SVG", function() { return _objects__WEBPACK_IMPORTED_MODULE_3__["SIMULATOR_SVG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_GROUP", function() { return _objects__WEBPACK_IMPORTED_MODULE_3__["SIMULATOR_GROUP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_ROBOT", function() { return _robot__WEBPACK_IMPORTED_MODULE_4__["SIMULATOR_ROBOT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_ROBOT_PART_LINE", function() { return _robot__WEBPACK_IMPORTED_MODULE_4__["SIMULATOR_ROBOT_PART_LINE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_ROBOT_PART_TOUCH", function() { return _robot__WEBPACK_IMPORTED_MODULE_4__["SIMULATOR_ROBOT_PART_TOUCH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_ROBOT_PART_DISTANCE", function() { return _robot__WEBPACK_IMPORTED_MODULE_4__["SIMULATOR_ROBOT_PART_DISTANCE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_ROBOT_PART_SERVO_ARM", function() { return _robot__WEBPACK_IMPORTED_MODULE_4__["SIMULATOR_ROBOT_PART_SERVO_ARM"]; });










const blocks = [..._simulation__WEBPACK_IMPORTED_MODULE_1__["default"], ..._settings__WEBPACK_IMPORTED_MODULE_2__["default"], ..._objects__WEBPACK_IMPORTED_MODULE_3__["default"], ..._robot__WEBPACK_IMPORTED_MODULE_4__["default"]];
blocks.forEach(block => {
  const {
    type
  } = block.blockJson;
  blockly_core__WEBPACK_IMPORTED_MODULE_0___default.a.Blocks[type] = {
    init() {
      this.jsonInit(block.blockJson);
    },

    ...block.blockExtras
  };
});
/* harmony default export */ __webpack_exports__["default"] = (blocks);

/***/ }),

/***/ "./src/components/ide/SimulatorEditor/blocks/objects.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_RECT", function() { return SIMULATOR_RECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_CIRCLE", function() { return SIMULATOR_CIRCLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SVG", function() { return SIMULATOR_SVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_GROUP", function() { return SIMULATOR_GROUP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Simulator_simulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ide/Simulator/simulation/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/ide/SimulatorEditor/blocks/helpers.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/SimulatorEditor/blocks/objects.js";



const SIMULATOR_RECT = {
  blockJson: {
    type: 'simulator_rect',
    message0: 'Rectangle with size %1 x %2 %3',
    args0: [{
      type: 'field_number',
      name: 'W',
      value: 100,
      precision: 1
    }, {
      type: 'field_number',
      name: 'H',
      value: 100,
      precision: 1
    }, {
      type: 'input_value',
      name: 'SETTINGS',
      check: 'SimulatorObjectSettings'
    }],
    previousStatement: 'SimulatorObject',
    nextStatement: 'SimulatorObject',
    colour: 240,
    tooltip: 'Rectangle defined by its width and height',
    helpUrl: 'TODO'
  },
  blockExtras: {
    getFields() {
      return {
        type: 'rectangle',
        width: this.getFieldValue('W'),
        height: this.getFieldValue('H')
      };
    },

    getSettings: _helpers__WEBPACK_IMPORTED_MODULE_2__["getSettings"],

    serialize() {
      return { ...this.getFields(),
        ...Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["collectSettings"])(this)
      };
    }

  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_rect",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 20
      }
    })
  }
};
const SIMULATOR_CIRCLE = {
  blockJson: {
    type: 'simulator_circle',
    message0: 'Circle with radius %1 %2',
    args0: [{
      type: 'field_number',
      name: 'R',
      value: 50,
      precision: 1
    }, {
      type: 'input_value',
      name: 'SETTINGS',
      check: 'SimulatorObjectSettings'
    }],
    previousStatement: 'SimulatorObject',
    nextStatement: 'SimulatorObject',
    colour: 240,
    tooltip: 'Circle defined by its radius',
    helpUrl: 'TODO'
  },
  blockExtras: {
    getFields() {
      return {
        type: 'circle',
        radius: this.getFieldValue('R')
      };
    },

    getSettings: _helpers__WEBPACK_IMPORTED_MODULE_2__["getSettings"],

    serialize() {
      return { ...this.getFields(),
        ...Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["collectSettings"])(this)
      };
    }

  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_circle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 20
      }
    })
  }
};
const SIMULATOR_SVG = {
  blockJson: {
    type: 'simulator_svg',
    message0: 'SVG %1 @ %2%%, granularity %3 %4',
    args0: [{
      type: 'field_input',
      name: 'SRC',
      value: 'asset:foo.svg'
    }, {
      type: 'field_number',
      name: 'SCALE',
      value: 100,
      min: 1,
      precision: 1
    }, {
      type: 'field_number',
      name: 'GRANULARITY',
      value: 15,
      min: 1,
      precision: 1
    }, {
      type: 'input_value',
      name: 'SETTINGS',
      check: 'SimulatorObjectSettings'
    }],
    previousStatement: 'SimulatorObject',
    nextStatement: 'SimulatorObject',
    colour: 240,
    tooltip: 'Shape from SVG',
    helpUrl: 'TODO'
  },
  blockExtras: {
    getFields() {
      return {
        type: 'svg',
        src: this.getFieldValue('SRC'),
        scale: this.getFieldValue('SCALE') / 100,
        granularity: this.getFieldValue('GRANULARITY')
      };
    },

    getSettings: _helpers__WEBPACK_IMPORTED_MODULE_2__["getSettings"],

    serialize() {
      return { ...this.getFields(),
        ...Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["collectSettings"])(this)
      };
    }

  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_svg",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 20
      }
    })
  }
};
const SIMULATOR_GROUP = {
  blockJson: {
    type: 'simulator_group',
    message0: 'Group %1 %2',
    args0: [{
      type: 'input_value',
      name: 'SETTINGS',
      check: 'SimulatorObjectSettings'
    }, {
      type: 'input_statement',
      name: 'OBJECTS',
      check: 'SimulatorObject'
    }],
    previousStatement: 'SimulatorObject',
    nextStatement: 'SimulatorObject',
    colour: 270,
    tooltip: 'Groups multiple objects and applies the settings to all of them. ' + 'More specific settings win; moving and rotating are composed.',
    helpUrl: 'TODO'
  },
  blockExtras: {
    getSettings: _helpers__WEBPACK_IMPORTED_MODULE_2__["getSettings"]
  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_group",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 20
      }
    }),
    line: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_group",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "SETTINGS",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_color",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "MORE",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_static",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "MORE",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_sensor",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "MORE",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_line",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 23
      }
    })))))))))
  }
};
/* harmony default export */ __webpack_exports__["default"] = ([SIMULATOR_RECT, SIMULATOR_CIRCLE, SIMULATOR_SVG, SIMULATOR_GROUP]);

/***/ }),

/***/ "./src/components/ide/SimulatorEditor/blocks/robot.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_ROBOT", function() { return SIMULATOR_ROBOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_ROBOT_PART_LINE", function() { return SIMULATOR_ROBOT_PART_LINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_ROBOT_PART_TOUCH", function() { return SIMULATOR_ROBOT_PART_TOUCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_ROBOT_PART_DISTANCE", function() { return SIMULATOR_ROBOT_PART_DISTANCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_ROBOT_PART_SERVO_ARM", function() { return SIMULATOR_ROBOT_PART_SERVO_ARM; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Simulator_simulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ide/Simulator/simulation/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/ide/SimulatorEditor/blocks/helpers.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/SimulatorEditor/blocks/robot.js";



const SIMULATOR_ROBOT = {
  blockJson: {
    type: 'simulator_robot',
    message0: 'Robot %1, with default sensors %2, with default grabber %3 %4 %5',
    args0: [{
      type: 'field_input',
      name: 'NAME',
      text: 'hedgehog'
    }, {
      type: 'field_checkbox',
      name: 'DEFAULT_SENSORS',
      checked: true
    }, {
      type: 'field_checkbox',
      name: 'DEFAULT_GRABBER',
      checked: false
    }, {
      type: 'input_value',
      name: 'SETTINGS',
      check: 'SimulatorObjectSettings'
    }, {
      type: 'input_statement',
      name: 'PARTS',
      align: 'RIGHT',
      check: 'SimulatorRobotPart'
    }],
    previousStatement: 'SimulatorObject',
    nextStatement: 'SimulatorObject',
    colour: 90,
    tooltip: 'simulated robot',
    helpUrl: 'TODO'
  },
  blockExtras: {
    getInputDescendants: _helpers__WEBPACK_IMPORTED_MODULE_2__["getInputDescendants"],

    getFields() {
      return {
        type: 'robot',
        name: this.getFieldValue('NAME')
      };
    },

    getSettings: _helpers__WEBPACK_IMPORTED_MODULE_2__["getSettings"],

    serialize() {
      const objectTypes = ['simulator_robot_part_line', 'simulator_robot_part_touch', 'simulator_robot_part_distance', 'simulator_robot_part_servo_arm'];
      let parts = this.getInputDescendants('PARTS').filter(block => objectTypes.includes(block.type)).map(object => object.serialize());

      if (this.getField('DEFAULT_GRABBER').getValueBoolean()) {
        function servoArm(port, x, y, angle, label) {
          return {
            type: 'servo_arm',
            port,
            pivotAnchor: {
              x,
              y,
              angle
            },
            pivotArm: {
              x: -17,
              y: 0,
              angle: 0
            },
            length: 30,
            objects: [{
              type: 'rectangle',
              width: 35,
              height: 3,
              position: {
                x: 0,
                y: 0
              },
              angle: 0,
              label
            }]
          };
        }

        parts = [servoArm(0, 27, -19, 0, 'leftServoArm'), servoArm(1, 27, 19, 0, 'leftServoArm'), ...parts];
      }

      if (this.getField('DEFAULT_SENSORS').getValueBoolean()) {
        function lineSensor(port, x, y, label) {
          return {
            type: 'line',
            port,
            objects: [{
              type: 'circle',
              radius: 2,
              angle: 0,
              position: {
                x,
                y
              },
              label
            }]
          };
        }

        function distanceSensor(port, x, y, angle, label) {
          return {
            type: 'distance',
            port,
            objects: [{
              type: 'rectangle',
              width: 3,
              height: 3,
              angle,
              position: {
                x,
                y
              },
              label
            }]
          };
        }

        function touchSensor(port, object) {
          return {
            type: 'touch',
            port,
            objects: [object]
          };
        }

        const deg = Math.PI / 180;
        parts = [lineSensor(0, 22, -22, 'leftLineSensor'), lineSensor(1, 22, -8, 'centerLeftLineSensor'), lineSensor(2, 22, 8, 'centerRightLineSensor'), lineSensor(3, 22, 22, 'rightLineSensor'), distanceSensor(4, 20, -14, -60 * deg, 'leftDistanceSensor'), distanceSensor(5, 20, 0, 0 * deg, 'centerDistanceSensor'), distanceSensor(6, 20, 14, 60 * deg, 'rightDistanceSensor'), touchSensor(8, {
          type: 'rectangle',
          width: 3,
          height: 32,
          angle: 0,
          position: {
            x: 24,
            y: 0
          },
          label: 'frontTouchSensor'
        }), ...parts];
      }

      const {
        static: _static,
        sensor: _sensor,
        density: _density,
        frictionAir: _frictionAir,
        ...settings
      } = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["collectSettings"])(this);
      return { ...this.getFields(),
        ...settings,
        parts
      };
    }

  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_robot",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 20
      }
    })
  }
};
const SIMULATOR_ROBOT_PART_LINE = {
  blockJson: {
    type: 'simulator_robot_part_line',
    message0: 'Line Sensor %1 %2 %3',
    args0: [{
      type: 'field_number',
      name: 'PORT',
      value: 0
    }, {
      type: 'input_dummy'
    }, {
      type: 'input_statement',
      name: 'OBJECTS',
      align: 'RIGHT',
      check: 'SimulatorObject'
    }],
    previousStatement: 'SimulatorRobotPart',
    nextStatement: 'SimulatorRobotPart',
    colour: 90,
    tooltip: 'simulated line (reflectance) sensor',
    helpUrl: 'TODO'
  },
  blockExtras: {
    getInputDescendants: _helpers__WEBPACK_IMPORTED_MODULE_2__["getInputDescendants"],

    getFields() {
      return {
        type: 'line',
        port: this.getFieldValue('PORT')
      };
    },

    serialize() {
      const objectTypes = ['simulator_rect', 'simulator_circle', 'simulator_svg'];
      const objects = this.getInputDescendants('OBJECTS').filter(block => objectTypes.includes(block.type)).map(object => object.serialize());
      return { ...this.getFields(),
        objects
      };
    }

  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_robot_part_line",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "OBJECTS",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_circle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "R",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 13
      }
    }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "SETTINGS",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_translate",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "MORE",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_label",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "LABEL",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 21
      }
    }, "lineSensor"))))))))
  }
};
const SIMULATOR_ROBOT_PART_TOUCH = {
  blockJson: {
    type: 'simulator_robot_part_touch',
    message0: 'Touch Sensor %1 %2 %3',
    args0: [{
      type: 'field_number',
      name: 'PORT',
      value: 0
    }, {
      type: 'input_dummy'
    }, {
      type: 'input_statement',
      name: 'OBJECTS',
      align: 'RIGHT',
      check: 'SimulatorObject'
    }],
    previousStatement: 'SimulatorRobotPart',
    nextStatement: 'SimulatorRobotPart',
    colour: 90,
    tooltip: 'simulated touch sensor',
    helpUrl: 'TODO'
  },
  blockExtras: {
    getInputDescendants: _helpers__WEBPACK_IMPORTED_MODULE_2__["getInputDescendants"],

    getFields() {
      return {
        type: 'touch',
        port: this.getFieldValue('PORT')
      };
    },

    serialize() {
      const objectTypes = ['simulator_rect', 'simulator_circle', 'simulator_svg'];
      const objects = this.getInputDescendants('OBJECTS').filter(block => objectTypes.includes(block.type)).map(object => object.serialize());
      return { ...this.getFields(),
        objects
      };
    }

  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_robot_part_touch",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "OBJECTS",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_rect",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "W",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 13
      }
    }, "3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "H",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 13
      }
    }, "32"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "SETTINGS",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_translate",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "MORE",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_label",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "LABEL",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 21
      }
    }, "touchSensor"))))))))
  }
};
const SIMULATOR_ROBOT_PART_DISTANCE = {
  blockJson: {
    type: 'simulator_robot_part_distance',
    message0: 'Distance Sensor %1 %2 %3',
    args0: [{
      type: 'field_number',
      name: 'PORT',
      value: 0
    }, {
      type: 'input_dummy'
    }, {
      type: 'input_statement',
      name: 'OBJECTS',
      align: 'RIGHT',
      check: 'SimulatorObject'
    }],
    previousStatement: 'SimulatorRobotPart',
    nextStatement: 'SimulatorRobotPart',
    colour: 90,
    tooltip: 'simulated (infrared triangulation) distance sensor',
    helpUrl: 'TODO'
  },
  blockExtras: {
    getInputDescendants: _helpers__WEBPACK_IMPORTED_MODULE_2__["getInputDescendants"],

    getFields() {
      return {
        type: 'distance',
        port: this.getFieldValue('PORT')
      };
    },

    serialize() {
      const objectTypes = ['simulator_rect', 'simulator_circle', 'simulator_svg'];
      const objects = this.getInputDescendants('OBJECTS').filter(block => objectTypes.includes(block.type)).map(object => object.serialize());
      return { ...this.getFields(),
        objects
      };
    }

  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_robot_part_distance",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "OBJECTS",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_rect",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "W",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 13
      }
    }, "3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "H",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 13
      }
    }, "3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "SETTINGS",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_translate",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "MORE",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_rotate",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "MORE",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_label",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 23
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "LABEL",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 25
      }
    }, "distanceSensor"))))))))))
  }
};
const SIMULATOR_ROBOT_PART_SERVO_ARM = {
  blockJson: {
    type: 'simulator_robot_part_servo_arm',
    message0: 'Servo Arm %1 %2 Anchor pivot at (%3, %4) %5° %6 Arm pivot at (%7, %8) %9° %10 Control point distance %11 %12 %13',
    args0: [{
      type: 'field_number',
      name: 'PORT',
      value: 0
    }, {
      type: 'input_dummy'
    }, {
      type: 'field_number',
      name: 'ANCHOR_X',
      value: 0
    }, {
      type: 'field_number',
      name: 'ANCHOR_Y',
      value: 0
    }, {
      type: 'field_angle',
      name: 'ANCHOR_ANGLE',
      value: 0
    }, {
      type: 'input_dummy'
    }, {
      type: 'field_number',
      name: 'ARM_X',
      value: 0
    }, {
      type: 'field_number',
      name: 'ARM_Y',
      value: 0
    }, {
      type: 'field_angle',
      name: 'ARM_ANGLE',
      value: 0
    }, {
      type: 'input_dummy'
    }, {
      type: 'field_number',
      name: 'CONTROL_LENGTH',
      value: 30
    }, {
      type: 'input_dummy'
    }, {
      type: 'input_statement',
      name: 'OBJECTS',
      align: 'RIGHT',
      check: 'SimulatorObject'
    }],
    previousStatement: 'SimulatorRobotPart',
    nextStatement: 'SimulatorRobotPart',
    colour: 90,
    tooltip: 'simulated servo arm',
    helpUrl: 'TODO'
  },
  blockExtras: {
    getInputDescendants: _helpers__WEBPACK_IMPORTED_MODULE_2__["getInputDescendants"],

    getFields() {
      return {
        type: 'servo_arm',
        port: this.getFieldValue('PORT'),
        pivotAnchor: {
          x: this.getFieldValue('ANCHOR_X'),
          y: this.getFieldValue('ANCHOR_Y'),
          angle: -(this.getFieldValue('ANCHOR_ANGLE') / 180) * Math.PI
        },
        pivotArm: {
          x: this.getFieldValue('ARM_X'),
          y: this.getFieldValue('ARM_Y'),
          angle: -(this.getFieldValue('ARM_ANGLE') / 180) * Math.PI
        },
        length: this.getFieldValue('CONTROL_LENGTH')
      };
    },

    serialize() {
      const objectTypes = ['simulator_rect', 'simulator_circle', 'simulator_svg'];
      const objects = this.getInputDescendants('OBJECTS').filter(block => objectTypes.includes(block.type)).map(object => object.serialize());
      return { ...this.getFields(),
        objects
      };
    }

  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_robot_part_servo_arm",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 511,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "OBJECTS",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_rect",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 513,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "W",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 514,
        columnNumber: 13
      }
    }, "35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "H",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 515,
        columnNumber: 13
      }
    }, "3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "SETTINGS",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_label",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "LABEL",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 518,
        columnNumber: 17
      }
    }, "servoArm"))))))
  }
};
/* harmony default export */ __webpack_exports__["default"] = ([SIMULATOR_ROBOT, SIMULATOR_ROBOT_PART_LINE, SIMULATOR_ROBOT_PART_TOUCH, SIMULATOR_ROBOT_PART_DISTANCE, SIMULATOR_ROBOT_PART_SERVO_ARM]);

/***/ }),

/***/ "./src/components/ide/SimulatorEditor/blocks/settings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_TRANSLATE", function() { return SIMULATOR_SETTINGS_TRANSLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_ROTATE", function() { return SIMULATOR_SETTINGS_ROTATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_COLOR", function() { return SIMULATOR_SETTINGS_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_VISIBILITY", function() { return SIMULATOR_SETTINGS_VISIBILITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_SPRITE", function() { return SIMULATOR_SETTINGS_SPRITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_STATIC", function() { return SIMULATOR_SETTINGS_STATIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_SENSOR", function() { return SIMULATOR_SETTINGS_SENSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_LINE", function() { return SIMULATOR_SETTINGS_LINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_DENSITY", function() { return SIMULATOR_SETTINGS_DENSITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_FRICTION_AIR", function() { return SIMULATOR_SETTINGS_FRICTION_AIR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_SETTINGS_LABEL", function() { return SIMULATOR_SETTINGS_LABEL; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ide/SimulatorEditor/blocks/helpers.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/SimulatorEditor/blocks/settings.js";


const SIMULATOR_SETTINGS_TRANSLATE = {
  blockJson: {
    type: 'simulator_settings_translate',
    message0: 'moved by (%1, %2) %3',
    args0: [{
      type: 'field_number',
      name: 'X',
      value: 0
    }, {
      type: 'field_number',
      name: 'Y',
      value: 0
    }, {
      type: 'input_value',
      name: 'MORE',
      check: 'SimulatorObjectSettings'
    }],
    inputsInline: false,
    output: 'SimulatorObjectSettings',
    colour: 180,
    tooltip: 'moves an object or group by the given x/y offset',
    helpUrl: 'TODO'
  },
  blockExtras: {
    getSettings() {
      return {
        position: {
          x: this.getFieldValue('X'),
          y: this.getFieldValue('Y')
        }
      };
    }

  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_translate",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 20
      }
    })
  }
};
const SIMULATOR_SETTINGS_ROTATE = {
  blockJson: {
    type: 'simulator_settings_rotate',
    message0: 'rotated by %1 %2',
    args0: [{
      type: 'field_angle',
      name: 'ANGLE',
      angle: 0
    }, {
      type: 'input_value',
      name: 'MORE',
      check: 'SimulatorObjectSettings'
    }],
    inputsInline: false,
    output: 'SimulatorObjectSettings',
    colour: 180,
    tooltip: 'rotates an object or group by the given angle',
    helpUrl: 'TODO'
  },
  blockExtras: {
    getSettings() {
      return {
        angle: -(this.getFieldValue('ANGLE') / 180) * Math.PI
      };
    }

  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_rotate",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 20
      }
    })
  }
};
const SIMULATOR_SETTINGS_COLOR = {
  blockJson: {
    type: 'simulator_settings_color',
    message0: 'color: %1 %2',
    args0: [{
      type: 'field_colour',
      name: 'COLOUR',
      colour: '#222222'
    }, {
      type: 'input_value',
      name: 'MORE',
      check: 'SimulatorObjectSettings'
    }],
    inputsInline: false,
    output: 'SimulatorObjectSettings',
    colour: 180,
    tooltip: 'sets the color of an object or group',
    helpUrl: 'TODO'
  },
  blockExtras: {
    getSettings() {
      return {
        render: {
          fillStyle: this.getFieldValue('COLOUR')
        }
      };
    }

  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_color",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 20
      }
    })
  }
};
const SIMULATOR_SETTINGS_VISIBILITY = {
  blockJson: {
    type: 'simulator_settings_visibility',
    message0: 'visible: %1 %2%% %3',
    args0: [{
      type: 'field_checkbox',
      name: 'VISIBILITY',
      checked: true
    }, {
      type: 'field_number',
      name: 'OPACITY',
      value: 100,
      min: 0,
      max: 100,
      precision: 1
    }, {
      type: 'input_value',
      name: 'MORE',
      check: 'SimulatorObjectSettings'
    }],
    inputsInline: false,
    output: 'SimulatorObjectSettings',
    colour: 180,
    tooltip: 'sets the visibility of an object or group',
    helpUrl: 'TODO'
  },
  blockExtras: {
    getSettings() {
      return {
        render: {
          opacity: this.getFieldValue('OPACITY') / 100,
          visible: this.getField('VISIBILITY').getValueBoolean()
        }
      };
    }

  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_visibility",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 20
      }
    })
  }
};
const SIMULATOR_SETTINGS_SPRITE = {
  blockJson: {
    type: 'simulator_settings_sprite',
    message0: 'sprite: %1 %2',
    args0: [{
      type: 'field_input',
      name: 'URL',
      value: ''
    }, {
      type: 'input_value',
      name: 'MORE',
      check: 'SimulatorObjectSettings'
    }],
    inputsInline: false,
    output: 'SimulatorObjectSettings',
    colour: 180,
    tooltip: 'sets a sprite to use to draw the object instead of a color',
    helpUrl: 'TODO'
  },
  blockExtras: {
    getSettings() {
      const url = this.getFieldValue('URL');
      return {
        render: {
          sprite: {
            texture: url
          }
        }
      };
    }

  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_sprite",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "URL",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }
    }, "asset:foo.png")),
    external: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_sprite",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "URL",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }
    }, "https://example.com/foo.png"))
  }
};
const SIMULATOR_SETTINGS_STATIC = {
  blockJson: {
    type: 'simulator_settings_static',
    message0: 'fixed: %1 %2',
    args0: [{
      type: 'field_checkbox',
      name: 'STATIC',
      checked: true
    }, {
      type: 'input_value',
      name: 'MORE',
      check: 'SimulatorObjectSettings'
    }],
    inputsInline: false,
    output: 'SimulatorObjectSettings',
    colour: 180,
    tooltip: 'a fixed object can not be moved',
    helpUrl: 'TODO'
  },
  blockExtras: {
    onchange: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["forbidsAncestor"])(['simulator_robot'], 'robots can not be fixed'),

    getSettings() {
      return {
        isStatic: this.getField('STATIC').getValueBoolean()
      };
    }

  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_static",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 20
      }
    })
  }
};
const SIMULATOR_SETTINGS_SENSOR = {
  blockJson: {
    type: 'simulator_settings_sensor',
    message0: 'passive: %1 %2',
    args0: [{
      type: 'field_checkbox',
      name: 'SENSOR',
      checked: true
    }, {
      type: 'input_value',
      name: 'MORE',
      check: 'SimulatorObjectSettings'
    }],
    inputsInline: false,
    output: 'SimulatorObjectSettings',
    colour: 180,
    tooltip: 'a passive object does not interact with other objects',
    helpUrl: 'TODO'
  },
  blockExtras: {
    onchange: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["forbidsAncestor"])(['simulator_robot'], 'robots can not be passive'),

    getSettings() {
      return {
        isSensor: this.getField('SENSOR').getValueBoolean()
      };
    }

  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_sensor",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 20
      }
    })
  }
};
const SIMULATOR_SETTINGS_LINE = {
  blockJson: {
    type: 'simulator_settings_line',
    message0: 'line: %1 %2',
    args0: [{
      type: 'field_checkbox',
      name: 'LINE',
      checked: true
    }, {
      type: 'input_value',
      name: 'MORE',
      check: 'SimulatorObjectSettings'
    }],
    inputsInline: false,
    output: 'SimulatorObjectSettings',
    colour: 180,
    tooltip: 'a line can be detected by line sensors; lines must also be set to passive',
    helpUrl: 'TODO'
  },
  blockExtras: {
    onchange: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["forbidsAncestor"])(['simulator_robot'], 'robots can not be lines'),

    getSettings() {
      return {
        plugin: {
          hedgehog: {
            isLine: this.getField('LINE').getValueBoolean()
          }
        }
      };
    }

  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_line",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 20
      }
    })
  }
};
const SIMULATOR_SETTINGS_DENSITY = {
  blockJson: {
    type: 'simulator_settings_density',
    message0: 'density: %1 %2',
    args0: [{
      type: 'field_number',
      name: 'DENSITY',
      value: 1
    }, {
      type: 'input_value',
      name: 'MORE',
      check: 'SimulatorObjectSettings'
    }],
    inputsInline: false,
    output: 'SimulatorObjectSettings',
    colour: 180,
    tooltip: 'density together with object size determines its weight',
    helpUrl: 'TODO'
  },
  blockExtras: {
    onchange: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["forbidsAncestor"])(['simulator_robot'], 'robots have fixed density'),

    getSettings() {
      return {
        density: this.getFieldValue('DENSITY')
      };
    }

  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_density",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 20
      }
    })
  }
};
const SIMULATOR_SETTINGS_FRICTION_AIR = {
  blockJson: {
    type: 'simulator_settings_friction_air',
    message0: 'friction: %1 %2',
    args0: [{
      type: 'field_number',
      name: 'FRICTION_AIR',
      value: 0.4
    }, {
      type: 'input_value',
      name: 'MORE',
      check: 'SimulatorObjectSettings'
    }],
    inputsInline: false,
    output: 'SimulatorObjectSettings',
    colour: 180,
    tooltip: 'friction determines how much resistance a sliding object experiences',
    helpUrl: 'TODO'
  },
  blockExtras: {
    onchange: Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["forbidsAncestor"])(['simulator_robot'], 'robots have fixed friction'),

    getSettings() {
      return {
        frictionAir: this.getFieldValue('FRICTION_AIR')
      };
    }

  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_friction_air",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 20
      }
    })
  }
};
const SIMULATOR_SETTINGS_LABEL = {
  blockJson: {
    type: 'simulator_settings_label',
    message0: 'label: %1 %2',
    args0: [{
      type: 'field_input',
      name: 'LABEL',
      value: ''
    }, {
      type: 'input_value',
      name: 'MORE',
      check: 'SimulatorObjectSettings'
    }],
    inputsInline: false,
    output: 'SimulatorObjectSettings',
    colour: 180,
    tooltip: 'sets a label for the body which can be used to identify the body and improve handling',
    helpUrl: 'TODO'
  },
  blockExtras: {
    getSettings() {
      return {
        label: this.getFieldValue('LABEL')
      };
    }

  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_settings_label",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 20
      }
    })
  }
};
/* harmony default export */ __webpack_exports__["default"] = ([SIMULATOR_SETTINGS_TRANSLATE, SIMULATOR_SETTINGS_ROTATE, SIMULATOR_SETTINGS_COLOR, SIMULATOR_SETTINGS_VISIBILITY, SIMULATOR_SETTINGS_SPRITE, SIMULATOR_SETTINGS_STATIC, SIMULATOR_SETTINGS_SENSOR, SIMULATOR_SETTINGS_LINE, SIMULATOR_SETTINGS_DENSITY, SIMULATOR_SETTINGS_FRICTION_AIR, SIMULATOR_SETTINGS_LABEL]);

/***/ }),

/***/ "./src/components/ide/SimulatorEditor/blocks/simulation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMULATOR_ROOT", function() { return SIMULATOR_ROOT; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Simulator_simulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ide/Simulator/simulation/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/ide/SimulatorEditor/blocks/helpers.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/SimulatorEditor/blocks/simulation.js";



const SIMULATOR_ROOT = {
  blockJson: {
    type: 'simulator_root',
    message0: 'Simulation centered at (%1, %2) sized %3 x %4, with wall:  %5 %6 %7',
    args0: [{
      type: 'field_number',
      name: 'X',
      value: 0,
      precision: 1
    }, {
      type: 'field_number',
      name: 'Y',
      value: 0,
      precision: 1
    }, {
      type: 'field_number',
      name: 'W',
      value: 600,
      precision: 1
    }, {
      type: 'field_number',
      name: 'H',
      value: 400,
      precision: 1
    }, {
      type: 'field_checkbox',
      name: 'WALLS',
      checked: true
    }, {
      type: 'input_dummy'
    }, {
      type: 'input_statement',
      name: 'OBJECTS',
      align: 'RIGHT',
      check: 'SimulatorObject'
    }],
    colour: 120,
    tooltip: 'Configuration for the whole simulation',
    helpUrl: 'TODO'
  },
  blockExtras: {
    getInputDescendants: _helpers__WEBPACK_IMPORTED_MODULE_2__["getInputDescendants"],

    onchange() {
      const roots = this.workspace.getBlocksByType('simulator_root');
      this.setWarningText(roots.length >= 2 ? 'only one configuration root allowed' : null);
    },

    serialize() {
      const objectTypes = ['simulator_robot', 'simulator_rect', 'simulator_circle', 'simulator_svg'];

      function isRobotPart(object) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["anyAncestor"])(object, ancestor => ancestor.type === 'simulator_robot');
      }

      const x = this.getFieldValue('X');
      const y = this.getFieldValue('Y');
      const width = this.getFieldValue('W');
      const height = this.getFieldValue('H');
      let objects = this.getInputDescendants('OBJECTS').filter(block => objectTypes.includes(block.type) && !isRobotPart(block)).map(object => object.serialize());

      if (this.getField('WALLS').getValueBoolean()) {
        const template = {
          type: 'rectangle',
          angle: 0,
          isStatic: true,
          render: {
            fillStyle: '#222222'
          }
        };
        objects = [{ ...template,
          width,
          height: 10,
          position: {
            x,
            y: y - (height / 2 - 5)
          }
        }, { ...template,
          width,
          height: 10,
          position: {
            x,
            y: y + (height / 2 - 5)
          }
        }, { ...template,
          width: 10,
          height,
          position: {
            x: x - (width / 2 - 5),
            y
          }
        }, { ...template,
          width: 10,
          height,
          position: {
            x: x + (width / 2 - 5),
            y
          }
        }, ...objects];
      }

      return {
        center: {
          x,
          y
        },
        width,
        height,
        objects
      };
    }

  },
  toolboxBlocks: {
    default: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "simulator_root",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 20
      }
    })
  }
};
/* harmony default export */ __webpack_exports__["default"] = ([SIMULATOR_ROOT]);

/***/ }),

/***/ "./src/components/ide/ToolBar/ToolBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ToolBar_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/ide/ToolBar/ToolBar.scss");
/* harmony import */ var _ToolBar_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ToolBar_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/ToolBar/ToolBar.js";




/**
 * A vertical toolbar for displaying controls in IDE editors,
 * such as for running or terminating a program.
 */
function ToolBar({
  children
}) {
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default()(_ToolBar_scss__WEBPACK_IMPORTED_MODULE_2___default.a);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _ToolBar_scss__WEBPACK_IMPORTED_MODULE_2___default.a.toolBar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }
  }, children);
}

/* harmony default export */ __webpack_exports__["default"] = (ToolBar);

/***/ }),

/***/ "./src/components/ide/ToolBar/ToolBar.scss":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/ToolBar/ToolBar.scss");
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
      module.hot.accept("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/ToolBar/ToolBar.scss", function() {
        css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/ToolBar/ToolBar.scss");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/ide/ToolBar/ToolBarIconButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/ToolBar/ToolBarIconButton.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const StyledIconButton = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["styled"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a)({
  padding: '4px'
});

/**
 * An icon button for the vertical toolbar.
 * This component handles color for disabled buttons correctly.
 */
function ToolBarIconButton({
  icon: Icon,
  color,
  ...props
}, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](StyledIconButton, _extends({
    ref: ref
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Icon, {
    style: { ...(!props.disabled && color ? {
        color
      } : {})
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](ToolBarIconButton));

/***/ }),

/***/ "./src/components/ide/ToolBar/ToolBarItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ToolBarItem_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/ide/ToolBar/ToolBarItem.scss");
/* harmony import */ var _ToolBarItem_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ToolBarItem_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/ToolBar/ToolBarItem.js";




/**
 * An item for the vertical toolbar.
 * This component adjusts the margins for the vertical layout.
 */
function ToolBarItem({
  children
}) {
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default()(_ToolBarItem_scss__WEBPACK_IMPORTED_MODULE_2___default.a);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _ToolBarItem_scss__WEBPACK_IMPORTED_MODULE_2___default.a.toolBarItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }
  }, children);
}

/* harmony default export */ __webpack_exports__["default"] = (ToolBarItem);

/***/ }),

/***/ "./src/components/ide/ToolBar/ToolBarItem.scss":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/ToolBar/ToolBarItem.scss");
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
      module.hot.accept("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/ToolBar/ToolBarItem.scss", function() {
        css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/ToolBar/ToolBarItem.scss");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/ide/VisualEditor/VisualEditor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/locale/index.js");
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/translations/index.js");
/* harmony import */ var _misc_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/misc/palette.js");
/* harmony import */ var _misc_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/misc/hooks/index.js");
/* harmony import */ var _Blockly__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/ide/Blockly/Blockly.js");
/* harmony import */ var _ToolBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/ide/ToolBar/ToolBar.js");
/* harmony import */ var _ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/ide/ToolBar/ToolBarIconButton.js");
/* harmony import */ var _ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/ide/ToolBar/ToolBarItem.js");
/* harmony import */ var _VisualEditor_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/ide/VisualEditor/VisualEditor.scss");
/* harmony import */ var _VisualEditor_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_VisualEditor_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _useFile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/ide/useFile.js");
/* harmony import */ var _blockly_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/ide/VisualEditor/blockly_config.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/VisualEditor/VisualEditor.js";















/**
 * The Visual editor allows creation of programs using a Blockly-based visual language.
 * Visual programs are translated into JavaScript code for execution,
 * and that code can also be viewed (read-only) side-by-side with the visual code.
 *
 * Besides the editor surface, the toolbar allows running and terminating programs, and resetting the simulation.
 */
function VisualEditor({
  layoutNode,
  project,
  path,
  codeCollapsed,
  codeLanguage,
  workspaceTransform,
  onUpdate,
  onExecutionAction,
  running
}) {
  var _getTranslation;

  const blocklyRef = _misc_hooks__WEBPACK_IMPORTED_MODULE_6__["useElementRef"]();
  const codeRef = _misc_hooks__WEBPACK_IMPORTED_MODULE_6__["useElementRef"]();
  const [content, setContent] = Object(_useFile__WEBPACK_IMPORTED_MODULE_12__["default"])(project, path, 'utf8'); // TODO this has a timing issue, as it depends on `VisualEditor.dynamicBlockLoaders`
  // being fully initialized before the VisualEditor component is created

  const workspaceOptions = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](() => {
    const dynamicBlocks = VisualEditor.dynamicBlockLoaders.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("category", {
      name: "%{BKY_CAT_CUSTOM}",
      colour: "120",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 7
      }
    }, VisualEditor.dynamicBlockLoaders.map(loader => loader().map(block => block.toolboxBlocks.default()))) : null;
    const toolbox = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToStaticMarkup( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("xml", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("category", {
      name: "%{BKY_HEDGEHOG_CAT_DRIVE}",
      colour: "120",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }
    }, _blockly_config__WEBPACK_IMPORTED_MODULE_13__["miscBlocks"].CRCL_MOVE_VECTOR_ROTATION.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["miscBlocks"].CRCL_MOVE_DIRECTION.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["miscBlocks"].CRCL_ROTATE_Z.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["miscBlocks"].VECTOR_XYZ.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["miscBlocks"].ROTATION_ABC.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["hedgehogBlocks"].HEDGEHOG_MOVE2_UNLIMITED.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["hedgehogBlocks"].HEDGEHOG_MOVE2.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["hedgehogBlocks"].HEDGEHOG_MOTOR_OFF2.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["hedgehogBlocks"].HEDGEHOG_BRAKE2.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["hedgehogBlocks"].HEDGEHOG_SLEEP.toolboxBlocks.default()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("category", {
      name: "Tooling",
      colour: "120",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }
    }, _blockly_config__WEBPACK_IMPORTED_MODULE_13__["miscBlocks"].CRCL_VELOCITY.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["miscBlocks"].CRCL_ACCELERATION.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["miscBlocks"].CRCL_TOOL_ON_OFF.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["miscBlocks"].CRCL_SWITCH_TOOL.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["miscBlocks"].CRCL_SET_TOOL_VALUE.toolboxBlocks.default()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("category", {
      name: "%{BKY_HEDGEHOG_CAT_MOTORS}",
      colour: "120",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }
    }, _blockly_config__WEBPACK_IMPORTED_MODULE_13__["hedgehogBlocks"].HEDGEHOG_MOVE_UNLIMITED.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["hedgehogBlocks"].HEDGEHOG_MOVE.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["hedgehogBlocks"].HEDGEHOG_MOTOR_OFF.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["hedgehogBlocks"].HEDGEHOG_BRAKE.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["hedgehogBlocks"].HEDGEHOG_SLEEP.toolboxBlocks.default()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("category", {
      name: "%{BKY_HEDGEHOG_CAT_SERVOS}",
      colour: "120",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }
    }, _blockly_config__WEBPACK_IMPORTED_MODULE_13__["hedgehogBlocks"].HEDGEHOG_SERVO.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["hedgehogBlocks"].HEDGEHOG_SERVO_OFF.toolboxBlocks.default()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("category", {
      name: "%{BKY_HEDGEHOG_CAT_SENSORS}",
      colour: "120",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }
    }, _blockly_config__WEBPACK_IMPORTED_MODULE_13__["hedgehogBlocks"].HEDGEHOG_READ_DIGITAL.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["hedgehogBlocks"].HEDGEHOG_READ_ANALOG.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["hedgehogBlocks"].HEDGEHOG_READ_ANALOG.toolboxBlocks.comparison()), dynamicBlocks, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("sep", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("category", {
      name: "%{BKY_CAT_LOGIC}",
      colour: "%{BKY_LOGIC_HUE}",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "controls_if",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "controls_if",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mutation", {
      else: "1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "controls_if",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("mutation", {
      elseif: "1",
      else: "1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "logic_compare",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "logic_operation",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "logic_negate",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "logic_boolean",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "logic_null",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "logic_ternary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("category", {
      name: "%{BKY_CAT_LOOPS}",
      colour: "%{BKY_LOOPS_HUE}",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "controls_repeat_ext",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "TIMES",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_number",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }
    }, "10")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "controls_whileUntil",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "controls_for",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "VAR",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 13
      }
    }, "i"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "FROM",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_number",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
      }
    }, "1"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "TO",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_number",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 17
      }
    }, "10"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "BY",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_number",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 17
      }
    }, "1")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "controls_forEach",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "controls_flow_statements",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("category", {
      name: "%{BKY_CAT_MATH}",
      colour: "%{BKY_MATH_HUE}",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }
    }, _blockly_config__WEBPACK_IMPORTED_MODULE_13__["miscBlocks"].VECTOR_SKALAR.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["miscBlocks"].VECTOR_OPERATION.toolboxBlocks.default(), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["miscBlocks"].CRCL_WAIT.toolboxBlocks.default(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_number",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }
    }, "0")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_arithmetic",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_single",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_trig",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_constant",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_number_property",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_round",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_on_list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_modulo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_constrain",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "LOW",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_number",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }
    }, "1"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "HIGH",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_number",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 17
      }
    }, "10")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_random_int",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "FROM",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_number",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }
    }, "1"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "TO",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_number",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 17
      }
    }, "10")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_random_float",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_atan2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("category", {
      name: "%{BKY_CAT_LISTS}",
      colour: "%{BKY_LISTS_HUE}",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "lists_create_empty",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "lists_create_with",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "lists_repeat",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("value", {
      name: "NUM",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "math_number",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("field", {
      name: "NUM",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 17
      }
    }, "5")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "lists_length",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "lists_isEmpty",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "lists_indexOf",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "lists_getIndex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "lists_setIndex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("sep", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("category", {
      name: "%{BKY_CAT_VARIABLES}",
      custom: "VARIABLE",
      colour: "%{BKY_VARIABLES_HUE}",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("category", {
      name: "%{BKY_CAT_FUNCTIONS}",
      custom: "PROCEDURE",
      colour: "%{BKY_PROCEDURES_HUE}",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("category", {
      name: "%{BKY_CAT_TEXT}",
      colour: "70",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }
    }, _blockly_config__WEBPACK_IMPORTED_MODULE_13__["miscBlocks"].PRINT_BLOCK.toolboxBlocks.default(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("block", {
      type: "text_join",
      inline: "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 11
      }
    }), _blockly_config__WEBPACK_IMPORTED_MODULE_13__["miscBlocks"].GET_INPUT_BLOCK.toolboxBlocks.default())));
    return {
      toolbox,
      move: {
        scrollbars: true,
        drag: true,
        wheel: false
      },
      zoom: {
        controls: false,
        wheel: true,
        maxScale: 1.5,
        minScale: 0.4,
        scaleSpeed: 1.02
      },
      grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true
      },
      trashcan: false,
      scrollbars: true
    };
  }, []); // update workspace size when the containing tab is resized or made visible

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    layoutNode.setEventListener('resize', () => {
      if (blocklyRef.current) blocklyRef.current.refreshSizeDeferred();
    });
    layoutNode.setEventListener('visibility', ({
      visible
    }) => {
      if (blocklyRef.current) blocklyRef.current.updateVisibility(visible);
    });
    return () => {
      layoutNode.setEventListener('resize', null);
      layoutNode.setEventListener('visibility', null);
    };
  }, [layoutNode, blocklyRef]); // animate workspace size when the sidebar is expanding or collapsing

  const [startAnimation, stopAnimation] = _misc_hooks__WEBPACK_IMPORTED_MODULE_6__["useAnimationFrame"](() => {
    if (blocklyRef.current) blocklyRef.current.refreshSize();
  });
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (codeRef.current === null) return undefined;
    const codeElem = codeRef.current;

    const onTransitionEnd = () => {
      stopAnimation();
      if (blocklyRef.current) blocklyRef.current.refreshSizeDeferred();
    };

    codeElem.addEventListener('transitionend', onTransitionEnd);
    return () => {
      codeElem.removeEventListener('transitionend', onTransitionEnd);
    };
  });

  function handleToggleCodeCollapsed() {
    onUpdate({
      codeLanguage,
      codeCollapsed: !codeCollapsed,
      workspaceTransform
    });
    startAnimation();
  } // handle blockly changes by saving the file and regenerating code


  const [code, setCode] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null); // eslint-disable-next-line no-shadow

  function generateCode(codeLanguage) {
    // eslint-disable-next-line no-throw-literal
    if (blocklyRef.current === null) throw 'ref is null'; // eslint-disable-next-line no-throw-literal

    if (blocklyRef.current.workspace === null) throw 'workspace is null';
    const language = _blockly_config__WEBPACK_IMPORTED_MODULE_13__["default"][codeLanguage];

    try {
      return language.workspaceToCode(blocklyRef.current.workspace);
    } catch (_err) {
      // Happens e.g. when deleting a function that is used somewhere.
      // Blockly will quickly recover from this, so it's not a big deal.
      // Just make sure the IDE doesn't crash until then.
      return null;
    }
  }

  function refreshCode() {
    if (blocklyRef.current === null || blocklyRef.current.workspace === null) return;
    setCode(generateCode(codeLanguage));
  }

  function handleBlocklyChange(workspace) {
    const workspaceXml = _blockly_config__WEBPACK_IMPORTED_MODULE_13__["default"].Xml.domToText(_blockly_config__WEBPACK_IMPORTED_MODULE_13__["default"].Xml.workspaceToDom(workspace));
    setContent(workspaceXml);
    refreshCode();
  }

  function handleBlocklyScroll(workspace) {
    const {
      scrollX,
      scrollY,
      scale
    } = workspace; // eslint-disable-next-line no-shadow

    const workspaceTransform = {
      scrollX,
      scrollY,
      scale
    };
    onUpdate({
      codeLanguage,
      codeCollapsed,
      workspaceTransform
    });
  } // handle language changes by regenerating code


  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    refreshCode();
  }); // eslint-disable-next-line no-shadow

  function setCodeLanguage(codeLanguage) {
    onUpdate({
      codeLanguage,
      codeCollapsed,
      workspaceTransform
    });
  }

  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_2___default()(_VisualEditor_scss__WEBPACK_IMPORTED_MODULE_11___default.a);
  const {
    preferredLocales
  } = Object(_locale__WEBPACK_IMPORTED_MODULE_3__["useLocale"])();
  const locale = (_getTranslation = Object(_translations__WEBPACK_IMPORTED_MODULE_4__["getTranslation"])(preferredLocales, _blockly_config__WEBPACK_IMPORTED_MODULE_13__["LOCALES"])) !== null && _getTranslation !== void 0 ? _getTranslation : _blockly_config__WEBPACK_IMPORTED_MODULE_13__["LOCALES"].en;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _VisualEditor_scss__WEBPACK_IMPORTED_MODULE_11___default.a.tabRoot,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 5
    }
  }, content === null ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Blockly__WEBPACK_IMPORTED_MODULE_7__["default"], {
    forwardedRef: blocklyRef,
    initialWorkspaceXml: content,
    locale: locale,
    workspaceOptions: workspaceOptions,
    workspaceTransform: workspaceTransform,
    onChange: handleBlocklyChange,
    onScroll: handleBlocklyScroll,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => {
      // eslint-disable-next-line no-shadow
      const code = generateCode('JavaScript');

      if (code !== null) {
        onExecutionAction({
          action: 'EXECUTE',
          code
        });
      }
    },
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_5__["ExecuteIcon"],
    color: "limegreen",
    disableRipple: true,
    disabled: running || blocklyRef.current === null || blocklyRef.current.workspace === null,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 11
    }
  })), running ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    key: "terminate-and-reset",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => {
      onExecutionAction({
        action: 'TERMINATE',
        reset: true
      });
    },
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_5__["TerminateAndResetIcon"],
    color: "red",
    disableRipple: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 13
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    key: "reset",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => {
      onExecutionAction({
        action: 'RESET'
      });
    },
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_5__["ResetIcon"],
    disableRipple: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => {
      onExecutionAction({
        action: 'TERMINATE',
        reset: false
      });
    },
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_5__["TerminateIcon"],
    color: "red",
    disableRipple: true,
    disabled: !running,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: {
      flex: '1 0 auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: handleToggleCodeCollapsed,
    icon: codeCollapsed ? _misc_palette__WEBPACK_IMPORTED_MODULE_5__["SlideLeftIcon"] : _misc_palette__WEBPACK_IMPORTED_MODULE_5__["SlideRightIcon"],
    disableRipple: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => setCodeLanguage('JavaScript'),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_5__["LanguageJavascriptIcon"],
    color: codeLanguage === 'JavaScript' ? 'black' : 'gray',
    disableRipple: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => setCodeLanguage('Python'),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_5__["LanguagePythonIcon"],
    color: codeLanguage === 'Python' ? 'black' : 'gray',
    disableRipple: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("pre", {
    ref: codeRef,
    className: codeCollapsed ? `${_VisualEditor_scss__WEBPACK_IMPORTED_MODULE_11___default.a.codeContainer} ${_VisualEditor_scss__WEBPACK_IMPORTED_MODULE_11___default.a.collapsed}` : _VisualEditor_scss__WEBPACK_IMPORTED_MODULE_11___default.a.codeContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 7
    }
  }, code));
}

VisualEditor.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  codeCollapsed: true,
  // eslint-disable-next-line react/default-props-match-prop-types
  codeLanguage: 'JavaScript',
  // eslint-disable-next-line react/default-props-match-prop-types
  workspaceTransform: {
    scrollX: 0.0,
    scrollY: 0.0,
    scale: 1.0
  }
}; // type: [() => Block[]]

VisualEditor.dynamicBlockLoaders = [];
/* harmony default export */ __webpack_exports__["default"] = (VisualEditor);

/***/ }),

/***/ "./src/components/ide/VisualEditor/VisualEditor.scss":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/VisualEditor/VisualEditor.scss");
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
      module.hot.accept("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/VisualEditor/VisualEditor.scss", function() {
        css = __webpack_require__("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/ide/VisualEditor/VisualEditor.scss");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/ide/useFile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useFile; });
/* harmony import */ var filer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("filer");
/* harmony import */ var filer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(filer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_store_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/core/store/projects.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return _core_store_projects__WEBPACK_IMPORTED_MODULE_1__["Project"]; });

/* harmony import */ var _misc_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/misc/hooks/index.js");





/**
 * Provides access to a file in a local project.
 * The file's content are loaded once, and saved on any modification.
 *
 * This function optionally accepts an encoding of `utf8`, in which case the file will be read and
 * written as utf8 text instead of binary.
 */
function useFile(project, path, encoding) {
  async function load() {
    const absolutePath = project.resolve(path);
    return (
      /* await */
      filer__WEBPACK_IMPORTED_MODULE_0__["fs"].promises.readFile(absolutePath, encoding)
    );
  }

  async function store(content) {
    const absolutePath = project.resolve(path);
    await filer__WEBPACK_IMPORTED_MODULE_0__["fs"].promises.writeFile(absolutePath, content, encoding);
  }

  return Object(_misc_hooks__WEBPACK_IMPORTED_MODULE_2__["useStore"])(load, store, [project, path]);
}

/***/ }),

/***/ "./src/components/ide/useFileObjectURL.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useFileObjectURL; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ide/useFile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return _useFile__WEBPACK_IMPORTED_MODULE_1__["Project"]; });





/**
 * Provides access to a file in a local project.
 * The file's content are loaded once, and saved on any modification.
 *
 * This function optionally accepts an encoding of `utf8`, in which case the file will be read and
 * written as utf8 text instead of binary.
 */
function useFileObjectURL(project, path, encoding) {
  const [content, _setContent] = Object(_useFile__WEBPACK_IMPORTED_MODULE_1__["default"])(project, path, encoding);
  const [url, setUrl] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (content === null) return undefined;
    const blob = new Blob([content]);
    const objectUrl = URL.createObjectURL(blob);
    setUrl(objectUrl);
    return () => {
      setUrl(null);
      URL.revokeObjectURL(objectUrl);
    };
  }, [content]);
  return url;
}

/***/ }),

/***/ "./src/components/misc/SimpleDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("@material-ui/core/DialogContentText");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _commonMessages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/misc/commonMessages.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/misc/SimpleDialog.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











/**
 * A wrapper for the material-ui `Dialog` component for easy display of dialogs
 * with title, main content, and actions.
 * The component takes care of basic ARIA attributes for title and description,
 * and dispatches close and submit events to the calling code.
 *
 * One of the `ActionConstant`s can be used to display OK/Cancel buttons,
 * or a custom list/fragment of buttons can be passed.
 */
function SimpleDialog({
  id,
  open,
  valid,
  title,
  description,
  actions,
  onCancel,
  onConfirm,
  children
}) {
  const conditionalProps = {};
  if (title !== undefined) conditionalProps['aria-labelledby'] = `${id}-title`;
  if (description !== undefined) conditionalProps['aria-describedby'] = `${id}-description`;
  let actionsNode;

  switch (actions) {
    case 'OK_CANCEL':
    case 'OK_autofocus_CANCEL':
    case 'OK_CANCEL_autofocus':
      actionsNode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onClick: onCancel,
        color: "secondary",
        autoFocus: actions === 'OK_CANCEL_autofocus',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _commonMessages__WEBPACK_IMPORTED_MODULE_8__["default"].cancel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "submit",
        color: "primary",
        disabled: !valid,
        autoFocus: actions === 'OK_autofocus_CANCEL',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], _extends({}, _commonMessages__WEBPACK_IMPORTED_MODULE_8__["default"].ok, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }
      }))));
      break;

    default:
      actionsNode = actions;
  }

  const handleSubmit = event => {
    if (onConfirm !== undefined) onConfirm();
    event.preventDefault();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
    open: open,
    onClose: onCancel
  }, conditionalProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, title !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: `${id}-title`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 32
    }
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, description !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: `${id}-description`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, description) : null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, actionsNode)));
}

/* harmony default export */ __webpack_exports__["default"] = (SimpleDialog);

/***/ }),

/***/ "./src/core/store/projects.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChild", function() { return getChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDescendant", function() { return getDescendant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectError", function() { return ProjectError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony import */ var filer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("filer");
/* harmony import */ var filer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(filer__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const sh = new filer__WEBPACK_IMPORTED_MODULE_0__["fs"].Shell(); // for the IDE relevant fields of fs.stat() results

/**
 * Given a file, returns the named child file.
 * The operation fails if the given file is not a directory,
 * or if the named child does not exist.
 */
function getChild(file, name) {
  if (!file.isDirectory()) throw new Error(`'${file.name}' is not a directory`); // $FlowExpectError

  const directory = file; // Find the child and make sure it exists

  const child = directory.contents.find(f => f.name === name);
  if (child === undefined) throw new Error(`'${name}' does not exist`);
  return child;
}
/**
 * Given a file, returns one of its descendant files.
 * The first fragment must be the name of a child of the given file,
 * The second the name of one of that file's children and so on.
 * The operation fails if an intermediate file file is not a directory,
 * or if a named descendant does not exist.
 */

function getDescendant(file, ...fragments) {
  return fragments.reduce(getChild, file);
}
class ProjectError extends Error {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "name", 'ProjectError');
  }

}

const cmpFile = (a, b) => {
  let result; // sort directories before files (& symlinks)

  const typeVal = f => f.isDirectory() ? 0 : 1;

  result = typeVal(a) - typeVal(b);
  if (result !== 0) return result; // sort alphabetically

  result = a.name.localeCompare(b.name);
  if (result !== 0) return result;
  return 0;
};

class Project {
  constructor(name, uid) {
    _defineProperty(this, "name", void 0);

    _defineProperty(this, "uid", void 0);

    this.name = name;
    this.uid = uid;
  }

  static async getProjects() {
    const projects = await sh.promises.ls('/');
    projects.sort((a, b) => a.name.localeCompare(b.name));
    return projects.map(({
      name,
      node: uid
    }) => new Project(name, uid));
  }

  static async getProject(name) {
    try {
      const path = filer__WEBPACK_IMPORTED_MODULE_0___default.a.path.resolve('/', name);
      const {
        node: uid
      } = await filer__WEBPACK_IMPORTED_MODULE_0__["fs"].promises.stat(path);
      return new Project(name, uid);
    } catch (ex) {
      if (ex instanceof filer__WEBPACK_IMPORTED_MODULE_0___default.a.Errors.ENOENT) throw new ProjectError(`Project "${name}" does not exist`);
      console.error(ex);
      throw ex;
    }
  }

  static async createProject(name) {
    try {
      const path = filer__WEBPACK_IMPORTED_MODULE_0___default.a.path.resolve('/', name);
      await filer__WEBPACK_IMPORTED_MODULE_0__["fs"].promises.mkdir(path);
      const {
        node: uid
      } = await filer__WEBPACK_IMPORTED_MODULE_0__["fs"].promises.stat(path);
      return new Project(name, uid);
    } catch (ex) {
      if (ex instanceof filer__WEBPACK_IMPORTED_MODULE_0___default.a.Errors.EEXIST) throw new ProjectError(`Project "${name}" does already exist`);
      console.error(ex);
      throw ex;
    }
  }

  resolve(...fragments) {
    return filer__WEBPACK_IMPORTED_MODULE_0___default.a.path.resolve('/', this.name, ...fragments);
  }

  get path() {
    return this.resolve();
  }

  async getFiles() {
    function sortRecursively(file) {
      if (!file.isDirectory()) return; // $FlowExpectError

      const dir = file;
      dir.contents.sort(cmpFile);
      dir.contents.forEach(f => sortRecursively(f));
    }

    const [root, contents] = await Promise.all([filer__WEBPACK_IMPORTED_MODULE_0__["fs"].promises.stat(this.path), sh.promises.ls(this.path, {
      recursive: true
    })]);
    root.contents = contents;
    sortRecursively(root);
    return root;
  }

  async rename(newName) {
    try {
      const newPath = filer__WEBPACK_IMPORTED_MODULE_0___default.a.path.resolve('/', newName);
      await filer__WEBPACK_IMPORTED_MODULE_0__["fs"].promises.rename(this.path, newPath);
      this.name = newName;
    } catch (ex) {
      if (ex instanceof filer__WEBPACK_IMPORTED_MODULE_0___default.a.Errors.ENOENT) throw new ProjectError(`Project "${this.name}" does no longer exist`);
      if (ex instanceof filer__WEBPACK_IMPORTED_MODULE_0___default.a.Errors.EEXIST) throw new ProjectError(`Project "${newName}" does already exist`);
      console.error(ex);
      throw ex;
    }
  }

  async delete() {
    try {
      // use Shell.rm as it supports recursive removal
      await sh.promises.rm(this.path, {
        recursive: true
      });
    } catch (ex) {
      if (ex instanceof filer__WEBPACK_IMPORTED_MODULE_0___default.a.Errors.ENOENT) throw new ProjectError(`Project "${this.name}" does no longer exist`);
      console.error(ex);
      throw ex;
    }
  }

}

/***/ }),

/***/ "./src/sdk/PluginManager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var filer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("filer");
/* harmony import */ var filer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(filer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ide_Executor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ide/Executor/Executor.js");
/* harmony import */ var _core_store_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/core/store/projects.js");
/* harmony import */ var _components_ide_Simulator_simulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/ide/Simulator/simulation/index.js");
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/sdk/misc.js");
/* harmony import */ var _hedgehog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/sdk/hedgehog.js");
/* harmony import */ var _blockly__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/sdk/blockly.js");
/* harmony import */ var _simulation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/sdk/simulation.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class PluginManager {
  constructor(executor, print, getInput, getSimulation) {
    _defineProperty(this, "executor", void 0);

    _defineProperty(this, "plugins", []);

    _defineProperty(this, "pluginReadyResolvers", []);

    _defineProperty(this, "print", void 0);

    _defineProperty(this, "getInput", void 0);

    _defineProperty(this, "getSimulation", void 0);

    _defineProperty(this, "sdk", void 0);

    _defineProperty(this, "onPluginReady", () => this.pluginReadyResolvers.shift()());

    this.executor = executor;
    this.print = print;
    this.getInput = getInput;
    this.getSimulation = getSimulation;
  }

  async initSdk() {
    const {
      executor,
      print,
      getInput,
      getSimulation
    } = this; // TODO: add on exit handler

    this.sdk = {
      misc: await Object(_misc__WEBPACK_IMPORTED_MODULE_4__["default"])({
        print,
        getInput,
        onExit: () => {},
        pluginManager: this,
        executor
      }),
      hedgehog: await Object(_hedgehog__WEBPACK_IMPORTED_MODULE_5__["default"])({
        getSimulation
      }),
      blockly: await Object(_blockly__WEBPACK_IMPORTED_MODULE_6__["default"])(),
      simulation: await Object(_simulation__WEBPACK_IMPORTED_MODULE_7__["default"])({
        executor,
        getSimulation
      })
    };
  }

  async loadFromProjectMetadata(project) {
    const pluginFolderPath = project.resolve('.metadata', 'plugins');

    try {
      const stat = await filer__WEBPACK_IMPORTED_MODULE_0__["fs"].promises.stat(pluginFolderPath);

      if (!stat.isDirectory()) {
        return;
      }
    } catch (e) {
      if ((e === null || e === void 0 ? void 0 : e.code) === 'ENOENT') {
        return;
      } else {
        throw e;
      }
    }

    const sh = new filer__WEBPACK_IMPORTED_MODULE_0__["fs"].Shell();
    const pluginFiles = await sh.promises.ls(pluginFolderPath);
    this.plugins.push(...(await Promise.all(pluginFiles.filter(pluginFile => pluginFile.name.endsWith('.js')).map(async pluginFile => {
      const code = await filer__WEBPACK_IMPORTED_MODULE_0__["fs"].promises.readFile(project.resolve('.metadata', 'plugins', pluginFile.name), 'utf8');
      return this.addPlugin(pluginFile.name, code);
    }))));
  }

  async addPlugin(name, code) {
    const readyPromise = new Promise(resolve => {
      this.pluginReadyResolvers.push(resolve);
    });
    const task = this.executor.addTask({
      name,
      code,
      api: { ...this.sdk.misc.handlers,
        ...this.sdk.hedgehog.handlers,
        ...this.sdk.blockly.handlers,
        ...this.sdk.simulation.handlers
      }
    });
    await readyPromise;
    return task;
  }

  simulationAdded(simulation) {
    this.sdk.simulation.simulationAdded(simulation);
  } // TODO this simply resolves one loading plugin, not the correct one


  getSdk() {
    return this.sdk;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PluginManager);

/***/ }),

/***/ "./src/sdk/base.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return emit; });
/* harmony import */ var _components_ide_Executor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/ide/Executor/Executor.js");

function emit(prefix, executor, event, payload) {
  executor.sendEvent(null, `${prefix}_${event}`, payload);
}

/***/ }),

/***/ "./src/sdk/blockly.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/sdk/base.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("blockly");
/* harmony import */ var blockly__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blockly__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ide_VisualEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/ide/VisualEditor/VisualEditor.js");
/* harmony import */ var _components_ide_VisualEditor_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/ide/VisualEditor/blocks/index.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/sdk/blockly.js";

/* eslint-disable */
// DO NOT DELETE GSL TAGS
 // <GSL customizable: blockly-imports>






function buildToolboxBlock(block) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("block", {
    type: block.blockJson.type,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, Object.entries(block.toolboxBlocksData).map(([name, input0]) => {
    // $FlowExpectError
    const input = input0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("value", {
      name: name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("shadow", {
      type: input.valueType,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, input.fields.map(field => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("field", {
      name: field.name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, field.value))));
  }));
} // </GSL customizable: blockly-imports>


async function init() {
  // <GSL customizable: blockly-init>
  // Your module initialization code
  const dynamicBlocks = [];
  _components_ide_VisualEditor__WEBPACK_IMPORTED_MODULE_3__["default"].dynamicBlockLoaders.push(() => {
    return dynamicBlocks;
  }); // </GSL customizable: blockly-init>

  const emit = _base__WEBPACK_IMPORTED_MODULE_0__["default"].bind(null, 'blockly');

  async function addBlock(taskHandle, dynamicBlock) {
    // <GSL customizable: blockly-body-addBlock>
    // Your function code goes here
    try {
      const {
        type
      } = dynamicBlock.blockJson;

      if (type in blockly__WEBPACK_IMPORTED_MODULE_2___default.a.Blocks) {
        throw new Error(`block with type '${type}' already exists`);
      }

      const toolboxBlock = buildToolboxBlock(dynamicBlock);
      const block = {
        blockJson: dynamicBlock.blockJson,
        generators: {
          JavaScript: block => {
            const hasOutput = ('output' in dynamicBlock.blockJson);
            const callFunction = hasOutput ? 'callWithReply' : 'call';
            let code = '';
            code += `await sdk.misc.${callFunction}('${taskHandle.task.name}', 'blk_${type}', {\n`;

            for (const {
              name,
              type
            } of dynamicBlock.blockJson.args0) {
              let res;

              if (type === 'input_value') {
                res = blockly__WEBPACK_IMPORTED_MODULE_2___default.a.JavaScript.valueToCode(block, name, blockly__WEBPACK_IMPORTED_MODULE_2___default.a.JavaScript.ORDER_NONE);
              } else if (type === 'input_statement') {
                // TODO input_statement unsupported for now
                res = undefined;
              } else if (type === 'input_dummy') {
                // nothing to do
                res = undefined;
              } else if (type.startsWith('field_')) {
                res = block.getFieldValue(name);
              } else {
                // hopefully unreachable
                res = undefined;
              }

              if (res !== undefined) code += `  ${name}: ${res},\n`;
            }

            code += `})`;

            if (hasOutput) {
              return [code, blockly__WEBPACK_IMPORTED_MODULE_2___default.a.JavaScript.ORDER_AWAIT];
            } else {
              return `${code};\n`;
            }
          },
          Python: block => {
            return '';
          }
        },
        toolboxBlocks: {
          default: () => toolboxBlock
        }
      };
      dynamicBlocks.push(block);
      Object(_components_ide_VisualEditor_blocks__WEBPACK_IMPORTED_MODULE_4__["registerBlocklyBlock"])(block);
    } catch (err) {
      console.log(err);
    } // </GSL customizable: blockly-body-addBlock>

  }

  return {
    // <default GSL customizable: blockly-extra-return>
    // Space for extra exports
    // </GSL customizable: blockly-extra-return>
    emit,
    handlers: {
      'blockly_addBlock': async ({
        dynamicBlock
      }, taskHandle) => {
        return taskHandle.withReply(null, addBlock.bind(null, taskHandle, dynamicBlock));
      }
    }
  };
}

/***/ }),

/***/ "./src/sdk/hedgehog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/sdk/base.js");
/* harmony import */ var _components_ide_Simulator_simulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ide/Simulator/simulation/index.js");
/* eslint-disable */
// DO NOT DELETE GSL TAGS
 // <GSL customizable: hedgehog-imports>


async function init({
  getSimulation
}) {
  // <GSL customizable: hedgehog-init>
  async function getRobot(name) {
    const robot = (await getSimulation()).robots.get(name);
    if (robot === undefined) throw new Error(`no robot named "${name}"`);
    return robot;
  } // </GSL customizable: hedgehog-init>


  const emit = _base__WEBPACK_IMPORTED_MODULE_0__["default"].bind(null, 'hedgehog');
  const moduleFunctions = {
    'commands': ({
      robot,
      cmds
    }) => commands(robot, cmds),
    'moveMotor': ({
      robot,
      port,
      power
    }) => moveMotor(robot, port, power),
    'setServo': ({
      robot,
      port,
      position
    }) => setServo(robot, port, position),
    'getAnalog': ({
      robot,
      port
    }) => getAnalog(robot, port),
    'getDigital': ({
      robot,
      port
    }) => getDigital(robot, port),
    'sleep': ({
      millis
    }) => sleep(millis)
  };

  async function commands(robot, cmds) {
    // <GSL customizable: hedgehog-body-commands>
    return (
      /* await */
      Promise.all(cmds.map(([command, payload]) => {
        if (Object.prototype.hasOwnProperty.call(moduleFunctions, command)) {
          // $FlowExpectError
          return moduleFunctions[command]({
            robot,
            ...payload
          });
        } else {
          return undefined;
        }
      }))
    ); // </GSL customizable: hedgehog-body-commands>
  }

  async function moveMotor(robot, port, power) {
    // <GSL customizable: hedgehog-body-moveMotor>
    (await getRobot(robot)).controller.moveMotor(port, power); // </GSL customizable: hedgehog-body-moveMotor>
  }

  async function setServo(robot, port, position) {
    // <GSL customizable: hedgehog-body-setServo>
    // Your function code goes here
    (await getRobot(robot)).controller.setServo(port, position); // </GSL customizable: hedgehog-body-setServo>
  }

  async function getAnalog(robot, port) {
    // <GSL customizable: hedgehog-body-getAnalog>
    return (await getRobot(robot)).controller.getAnalog(port); // </GSL customizable: hedgehog-body-getAnalog>
  }

  async function getDigital(robot, port) {
    // <GSL customizable: hedgehog-body-getDigital>
    return (await getRobot(robot)).controller.getDigital(port); // </GSL customizable: hedgehog-body-getDigital>
  }

  async function sleep(millis) {
    // <GSL customizable: hedgehog-body-sleep>
    const simulation = await getSimulation();
    await simulation.sleep(millis); // </GSL customizable: hedgehog-body-sleep>
  }

  return {
    // <default GSL customizable: hedgehog-extra-return>
    // Space for extra exports
    // </GSL customizable: hedgehog-extra-return>
    emit,
    handlers: {
      'hedgehog_commands': async ({
        robot,
        cmds
      }, taskHandle) => {
        return taskHandle.withReply(null, commands.bind(null, robot, cmds));
      },
      'hedgehog_moveMotor': async ({
        robot,
        port,
        power
      }, taskHandle) => {
        return taskHandle.withReply(null, moveMotor.bind(null, robot, port, power));
      },
      'hedgehog_setServo': async ({
        robot,
        port,
        position
      }, taskHandle) => {
        return taskHandle.withReply(null, setServo.bind(null, robot, port, position));
      },
      'hedgehog_getAnalog': async ({
        robot,
        port
      }, taskHandle) => {
        return taskHandle.withReply(null, getAnalog.bind(null, robot, port));
      },
      'hedgehog_getDigital': async ({
        robot,
        port
      }, taskHandle) => {
        return taskHandle.withReply(null, getDigital.bind(null, robot, port));
      },
      'hedgehog_sleep': async ({
        millis
      }, taskHandle) => {
        return taskHandle.withReply(null, sleep.bind(null, millis));
      }
    }
  };
}

/***/ }),

/***/ "./src/sdk/misc.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/sdk/base.js");
/* harmony import */ var _PluginManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/sdk/PluginManager.js");
/* harmony import */ var _components_ide_Executor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/ide/Executor/Executor.js");
/* eslint-disable */
// DO NOT DELETE GSL TAGS
 // <GSL customizable: misc-imports>



async function init({
  print,
  getInput,
  onExit,
  pluginManager,
  executor
}) {
  // <default GSL customizable: misc-init>
  // Your module initialization code
  // </GSL customizable: misc-init>
  const emit = _base__WEBPACK_IMPORTED_MODULE_0__["default"].bind(null, 'misc');

  async function handlePrint(text) {
    // <GSL customizable: misc-body-print>
    return (
      /* await */
      print(text.toString(), 'stdout')
    ); // </GSL customizable: misc-body-print>
  }

  async function handleGetInput() {
    // <GSL customizable: misc-body-getInput>
    return (
      /* await */
      getInput()
    ); // </GSL customizable: misc-body-getInput>
  }

  async function exit(error) {
    // <GSL customizable: misc-body-exit>
    // Your function code goes here
    if (error) {
      await print(error, 'stderr');
    }

    await onExit(error); // </GSL customizable: misc-body-exit>
  }

  async function pluginReady() {
    // <GSL customizable: misc-body-pluginReady>
    // Your function code goes here
    pluginManager.onPluginReady(); // </GSL customizable: misc-body-pluginReady>
  }

  return {
    // <default GSL customizable: misc-extra-return>
    // Space for extra exports
    // </GSL customizable: misc-extra-return>
    emit,
    handlers: {
      'misc_print': ({
        text
      }) => handlePrint(text),
      'misc_getInput': async ({}, taskHandle) => {
        return taskHandle.withReply(null, handleGetInput.bind(null));
      },
      'misc_exit': ({
        error
      }) => exit(error),
      'misc_pluginReady': ({}) => pluginReady()
    }
  };
}

/***/ }),

/***/ "./src/sdk/simulation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/sdk/base.js");
/* harmony import */ var _components_ide_Simulator_simulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ide/Simulator/simulation/index.js");
/* harmony import */ var _components_ide_Executor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/ide/Executor/Executor.js");
/* eslint-disable */
// DO NOT DELETE GSL TAGS
 // <GSL customizable: simulation-imports>


 // </GSL customizable: simulation-imports>

async function init({
  executor,
  getSimulation
}) {
  // <GSL customizable: simulation-init>
  // Your module initialization code
  function handleCollision(eventName, bodyA, bodyB) {
    emit(executor, 'collision', {
      eventName,
      bodyA,
      bodyB
    });
    emit(executor, `collision_${bodyA.label}`, {
      eventName,
      bodyA,
      bodyB
    });
    emit(executor, `collision_${bodyB.label}`, {
      eventName,
      bodyA: bodyB,
      bodyB: bodyA
    });

    if (eventName === 'collisionStart') {
      emit(executor, 'collision_start', {
        eventName,
        bodyA,
        bodyB
      });
      emit(executor, `collision_start_${bodyA.label}`, {
        eventName,
        bodyA,
        bodyB
      });
      emit(executor, `collision_start_${bodyB.label}`, {
        eventName,
        bodyA: bodyB,
        bodyB: bodyA
      });
    } else if (eventName === 'collisionEnd') {
      emit(executor, 'collision_end', {
        eventName,
        bodyA,
        bodyB
      });
      emit(executor, `collision_end_${bodyA.label}`, {
        eventName,
        bodyA,
        bodyB
      });
      emit(executor, `collision_end_${bodyB.label}`, {
        eventName,
        bodyA: bodyB,
        bodyB: bodyA
      });
    } else {
      // eslint-disable-next-line no-throw-literal
      throw 'unreachable';
    }
  }

  function simulationAdded(simulation) {
    simulation.addSensorHandler(handleCollision);
  } // </GSL customizable: simulation-init>


  const emit = _base__WEBPACK_IMPORTED_MODULE_0__["default"].bind(null, 'simulation');

  async function add(objects) {
    // <GSL customizable: simulation-body-add>
    const simulation = await getSimulation();
    simulation.jsonAdd(objects, true); // </GSL customizable: simulation-body-add>
  }

  async function update(objects) {
    // <GSL customizable: simulation-body-update>
    const simulation = await getSimulation();
    simulation.updateBodies(objects); // </GSL customizable: simulation-body-update>
  }

  async function remove(labels) {
    // <GSL customizable: simulation-body-remove>
    const simulation = await getSimulation();
    simulation.removeBodies(labels); // </GSL customizable: simulation-body-remove>
  }

  return {
    // <GSL customizable: simulation-extra-return>
    // Space for extra exports
    simulationAdded,
    // </GSL customizable: simulation-extra-return>
    emit,
    handlers: {
      'simulation_add': ({
        objects
      }) => add(objects),
      'simulation_update': ({
        objects
      }) => update(objects),
      'simulation_remove': ({
        labels
      }) => remove(labels)
    }
  };
}

/***/ }),

/***/ "./src/util.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promisify", function() { return promisify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return mapObject; });
/* eslint-disable import/prefer-default-export */
// takes a function that takes a callback `(err, result) => ...`
// as its last parameter and makes it into a function that returns a promise instead
// Flow doesn't manage to capture the type of `(...args, cb) => void` unfortunately,
// so the actual type of the promise can not be inferred, and argument types are not checked.
function promisify(fn) {
  return (...args) => new Promise((resolve, reject) => {
    fn(...args, (err, result) => {
      if (err) reject(err);else resolve(result);
    });
  });
}
function mapObject(obj, fn) {
  const entries = Object.entries(obj);
  const newEntries = entries.map(([key, value0]) => {
    // $FlowExpectError
    const value = value0;
    return [key, fn(value, key)];
  });
  return Object.fromEntries(newEntries);
}

/***/ })

};;