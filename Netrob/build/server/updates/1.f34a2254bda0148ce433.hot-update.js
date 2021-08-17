require("source-map-support").install();
exports.id = 1;
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
/* harmony import */ var webrob_src_InputController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("webrob/src//InputController");
/* harmony import */ var webrob_src_InputController__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webrob_src_InputController__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var eulerutil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("eulerutil");
/* harmony import */ var eulerutil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(eulerutil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tmp_webRob_src_test_data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../../../tmp/webRob/src/test/data.js");
/* harmony import */ var _babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("@babylonjs/core/Loading/sceneLoader");
/* harmony import */ var _babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/Simulator/DefaultPlayground.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






 //import { executeMultiRobotProgram, loadRobots } from "webrob/src/robot/MultiRobotHandler";



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
  rot: Object(eulerutil__WEBPACK_IMPORTED_MODULE_5__["eulerToQuaternion"])(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 0)),
  chains: [{
    base: 'base_link',
    flange: 'axis3',
    ik: 'cartesianik',
    tools: [{
      position: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, -0.05),
      rotationQuaternion: Object(eulerutil__WEBPACK_IMPORTED_MODULE_5__["eulerToQuaternion"])(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 0)),
      type: 'vacuumGripper',
      visual: {
        parameter: {
          diameter: 0.01,
          height: 0.05
        },
        position: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, -0.025),
        rotationQuaternion: Object(eulerutil__WEBPACK_IMPORTED_MODULE_5__["eulerToQuaternion"])(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_0__["Vector3"](Math.PI / 2, 0, 0))
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
      inputController = new webrob_src_InputController__WEBPACK_IMPORTED_MODULE_4___default.a(scene);
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
      light.intensity = 0.7; //const axes = createAxes(scene, 0.5, 1.0, true);

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
      lineNumber: 215,
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
      //tcp.position = tcp.position.add(shift)
      // allrobots.forEach(r => r.setTCPTo(tcp.position, tcp.rotationQuaternion))
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var webrob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("webrob");
/* harmony import */ var webrob__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webrob__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@babylonjs/core");
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _URDFJSONLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/ide/Simulator/URDFJSONLoader.js");
/* harmony import */ var _misc_palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/misc/palette.js");
/* harmony import */ var _misc_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/misc/hooks/index.js");
/* harmony import */ var eulerutil_src_EulerUtil_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("eulerutil/src/EulerUtil.js");
/* harmony import */ var eulerutil_src_EulerUtil_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(eulerutil_src_EulerUtil_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ToolBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/ide/ToolBar/ToolBar.js");
/* harmony import */ var _ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/ide/ToolBar/ToolBarIconButton.js");
/* harmony import */ var _ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/ide/ToolBar/ToolBarItem.js");
/* harmony import */ var _Simulator_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/ide/Simulator/Simulator.scss");
/* harmony import */ var _Simulator_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Simulator_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _simulation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/ide/Simulator/simulation/index.js");
/* harmony import */ var _SimulatorEditor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/components/ide/SimulatorEditor/SimulatorEditor.js");
/* harmony import */ var _default_simulation_xml__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/components/ide/Simulator/default_simulation.xml");
/* harmony import */ var _default_simulation_xml__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_default_simulation_xml__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babylonjs_core_Debug_debugLayer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("@babylonjs/core/Debug/debugLayer");
/* harmony import */ var _babylonjs_core_Debug_debugLayer__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babylonjs_core_Debug_debugLayer__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _babylonjs_inspector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("@babylonjs/inspector");
/* harmony import */ var _babylonjs_inspector__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_babylonjs_inspector__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _DefaultPlayground__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/components/ide/Simulator/DefaultPlayground.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/Netrob/src/components/ide/Simulator/Simulator.js";


 //import createAxes from "webrob/src/AxesHelper.js";



console.log('Direkt vor OnPluginActivatedObservable');
_babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_0__["SceneLoader"].OnPluginActivatedObservable.add(function (loader) {
  if (loader.name === "urdfjson") {
    loader.assetsManager = assetsManager;
    console.log('Injected AssetManager');
  }
});
console.log('Direkt nach OnPluginActivatedObservable');
 //import {URDFJSONLoader} from "webrob/src/URDFJSONLoader"

console.log('nach import urdfjson');


 //import Robot from 'webrob/src/robot/Robot.js'






 // $FlowExpectError

 //import InputController from "webrob/src/InputController.js";

const defaultSimulationConfig = Object(_SimulatorEditor__WEBPACK_IMPORTED_MODULE_14__["generateConfigFromXml"])(_default_simulation_xml__WEBPACK_IMPORTED_MODULE_15___default.a);
var inputController;
const bgIntensity = 0.8;
 // Augments the scene with the debug methods

 //import { TEST_CMDS } from "webrob/src/test/data"; // Injects a local ES6 version of the inspector to prevent automatically relying on the none compatible version

const inputsDef = {
  xAxis: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Keyboard, [-'S'.charCodeAt(0), 'W'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].DualShock, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DualShockInput"].LStickXAxis]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Xbox, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["XboxInput"].LStickXAxis]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Generic, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["XboxInput"].LStickXAxis]]],
  yAxis: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Keyboard, [-'A'.charCodeAt(0), 'D'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].DualShock, [-_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DualShockInput"].LStickYAxis]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Xbox, [-_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["XboxInput"].LStickYAxis]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Generic, [-_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["XboxInput"].LStickYAxis]]],
  zAxis: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Keyboard, [-'Q'.charCodeAt(0), 'E'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].DualShock, [-_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DualShockInput"].RStickYAxis]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Xbox, [-_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["XboxInput"].RStickYAxis]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Generic, [-_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["XboxInput"].RStickYAxis]]],
  mode: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Keyboard, [' '.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].DualShock, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DualShockInput"].R1, _babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DualShockInput"].L1]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Xbox, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["XboxInput"].RB, _babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["XboxInput"].LB]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Generic, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["XboxInput"].RB, _babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["XboxInput"].LB]]],
  fast: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Keyboard, ['O'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].DualShock, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DualShockInput"].R2]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Xbox, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["XboxInput"].RT]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Generic, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["XboxInput"].RT]]],
  slow: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Keyboard, ['L'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].DualShock, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DualShockInput"].L2]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Xbox, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["XboxInput"].LT]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Generic, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["XboxInput"].LT]]],
  tool1: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Keyboard, ['1'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].DualShock, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DualShockInput"].Cross]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Xbox, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["XboxInput"].A]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Generic, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["XboxInput"].A]]],
  tool2: [[_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Keyboard, ['2'.charCodeAt(0)]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].DualShock, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DualShockInput"].Circle]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Xbox, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["XboxInput"].B]], [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].Generic, [_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["XboxInput"].B]]]
};
var assetsManager;
/**
 * The simulator displays a 2D environment containing a simulated robot.
 *
 * Besides the simulation itself, the toolbar allows terminating programs and resetting the simulation.
 */

 //import { loadRobots } from "webrob/src/robot/MultiRobotHandler";
//import URDFJSONLoader from "./URDFJSONLoader";
// import {loadRobots} from "webrob";

function inputsProcessed(forceupdate = false) {
  const inputs = inputController.inputs;
  const fastscale = 1 + inputs.fast * 2; // inputs.fast: [0, 1] -> [1, 2]

  const slowscale = 1 - Math.min(inputs.slow, 0.97); // inputs.slow: [0, 1] -> [0, 1]

  const scale = scene.getAnimationRatio() * 0.01 * fastscale * slowscale;
  let shift = _babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["Vector3"].Zero();

  if (inputs.mode > 0.5) {
    shift = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["Vector3"](-inputs.yAxis, inputs.xAxis, inputs.zAxis).scale(scale);
    const shiftQuaternion = _babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["Quaternion"].FromEulerVector(shift);
    tcp.rotationQuaternion = tcp.rotationQuaternion.multiply(shiftQuaternion);
    allrobots.forEach(r => r.setTCPTo(tcp.position, tcp.rotationQuaternion));
    rendering = true;
  } else {
    shift = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["Vector3"](-inputs.xAxis, inputs.yAxis, inputs.zAxis).scale(scale * 0.3); // TODO rotate viewer pos

    if (shift.length() > 0 || forceupdate) {
      //todo
      // tcp.position = tcp.position.add(shift)
      //allrobots.forEach(r => r.setTCPTo(tcp.position, tcp.rotationQuaternion))
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
  pos: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["Vector3"](0, 0, 0),
  rot: Object(eulerutil_src_EulerUtil_js__WEBPACK_IMPORTED_MODULE_8__["eulerToQuaternion"])(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["Vector3"](0, 0, 0)),
  chains: [{
    base: 'base_link',
    flange: 'axis3',
    ik: 'cartesianik',
    tools: [{
      position: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["Vector3"](0, 0, -0.05),
      rotationQuaternion: Object(eulerutil_src_EulerUtil_js__WEBPACK_IMPORTED_MODULE_8__["eulerToQuaternion"])(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["Vector3"](0, 0, 0)),
      type: 'vacuumGripper',
      visual: {
        parameter: {
          diameter: 0.01,
          height: 0.05
        },
        position: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["Vector3"](0, 0, -0.025),
        rotationQuaternion: Object(eulerutil_src_EulerUtil_js__WEBPACK_IMPORTED_MODULE_8__["eulerToQuaternion"])(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["Vector3"](Math.PI / 2, 0, 0))
      }
    }]
  }]
} //{path: "robot/pr2_description/robots/", file: 'pr2.urdfjson', pos: new Vector3(0,0,0)},
];
const Simulator = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](({
  running,
  zoom,
  zoomMode,
  onUpdate,
  onExecutionAction
}, ref) => {
  const simulation = _misc_hooks__WEBPACK_IMPORTED_MODULE_7__["useValue"](() => {
    const sim = new _simulation__WEBPACK_IMPORTED_MODULE_13__["Simulation"](); //sim.jsonInit(defaultSimulationConfig);

    return sim;
  });
  ;

  const onSceneReady = scene => {
    // This creates and positions a free camera (non-mesh)
    var camera = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["FreeCamera"]("camera1", new _babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["Vector3"](0, 5, -10), scene); // This targets the camera to scene origin

    camera.setTarget(_babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["Vector3"].Zero());
    const canvas = scene.getEngine().getRenderingCanvas(); // This attaches the camera to the canvas

    camera.attachControl(canvas, true); // This creates a light, aiming 0,1,0 - to the sky (non-mesh)

    var light = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["HemisphericLight"]("light", new _babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["Vector3"](0, 1, 0), scene); // Default intensity is 1. Let's dim the light a small amount

    light.intensity = 0.7;
    inputController = new webrob__WEBPACK_IMPORTED_MODULE_2__["InputController"](scene);
    inputController.setInputDefinition(inputsDef);
    inputController.currentInputsProcessed.add(() => inputsProcessed());
    const axes = createAxes(scene, 0.5, 1.0, true);
    assetsManager = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["AssetsManager"](scene); // SceneLoader.RegisterPlugin(new URDFJSONLoader())

    console.log('nach Asset Manager ');
    loadRobots(robotData, scene, assetsManager);
    console.log('nach loadrobots');
    scene.render(); // Our built-in 'ground' shape.

    _babylonjs_core__WEBPACK_IMPORTED_MODULE_4__["MeshBuilder"].CreateGround("ground", {
      width: 6,
      height: 6
    }, scene);
  };
  /**
   * Will run on every frame render.  We are spinning the box on y-axis.
   */


  const onRender = scene => {}; // mount simulator in the target and simulate continuously


  const [renderTarget, setRenderTarget] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](null);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
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

  react__WEBPACK_IMPORTED_MODULE_1__["useImperativeHandle"](ref, () => ({
    simulation
  }), [simulation]);
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_3___default()(_Simulator_scss__WEBPACK_IMPORTED_MODULE_12___default.a);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _Simulator_scss__WEBPACK_IMPORTED_MODULE_12___default.a.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 9
    }
  }, running ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: "terminate-and-reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      lineNumber: 306,
      columnNumber: 15
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: "reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      lineNumber: 317,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      lineNumber: 327,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => onUpdate({
      zoom: Math.min(zoom + 10, 150),
      zoomMode: 'MANUAL'
    }),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["ZoomInIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => onUpdate({
      zoom: 100,
      zoomMode: 'MANUAL'
    }),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["ZoomResetIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => onUpdate({
      zoom: Math.max(zoom - 10, 50),
      zoomMode: 'MANUAL'
    }),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["ZoomOutIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => onUpdate({
      zoom,
      zoomMode: 'FIT'
    }),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["ZoomFitIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => onUpdate({}),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["RotateOrbitIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => onUpdate({}),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["ResizeIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => onUpdate({}),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["ArrowAllIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 11
    }
  }, "SetTCP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => onUpdate({}),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["RobotIndustrialIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "Simulation3D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DefaultPlayground__WEBPACK_IMPORTED_MODULE_18__["default"], {
    antialias: true,
    onSceneReady: onSceneReady,
    onRender: onRender,
    id: "my-canvas",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
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

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8xLmYzNGEyMjU0YmRhMDE0OGNlNDMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9ob21lL3NhcmFoL0RvY3VtZW50cy90bXAvd2ViUm9iL3NyYy90ZXN0L2RhdGEuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb21wb25lbnRzL2lkZS9TaW11bGF0b3IvU2ltdWxhdG9yLnNjc3MiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb21wb25lbnRzL2lkZS9TaW11bGF0b3IvRGVmYXVsdFBsYXlncm91bmQuanMiLCIvaG9tZS9zYXJhaC9Eb2N1bWVudHMvQXJiZWl0L2dpdGh1Yi9uZXRSb2IvTmV0cm9iL3NyYy9jb21wb25lbnRzL2lkZS9TaW11bGF0b3IvU2ltdWxhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lkZS9TaW11bGF0b3IvU2ltdWxhdG9yLnNjc3M/ZTRlOCIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvbXBvbmVudHMvaWRlL1NpbXVsYXRvci9VUkRGSlNPTkxvYWRlci5qcyIsIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvbXBvbmVudHMvaWRlL1NpbXVsYXRvci9kZWZhdWx0X3NpbXVsYXRpb24ueG1sIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBURVNUX0NNRFMgPSBbXG4gICAge1xuICAgICAgICBcInJvYm90XCI6IFwidXI1XCIsXG4gICAgICAgIFwiY21kc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJDb21tYW5kSURcIjogMCxcbiAgICAgICAgICAgICAgICBcIk5hbWVcIjogXCJVc2luZyBHcmlwcGVyIDBcIixcbiAgICAgICAgICAgICAgICBcIkNSQ0xDb21tYW5kXCI6IFwiU2V0RW5kRWZmZWN0b3JQYXJhbWV0ZXJzXCIsXG4gICAgICAgICAgICAgICAgXCJDUkNMUGFyYW1cIjoge1wiVG9vbElEXCI6IDB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1wiQ29tbWFuZElEXCI6IDEsIFwiTmFtZVwiOiBcIlNldCBmYXN0IHNwZWVkXCIsIFwiQ1JDTENvbW1hbmRcIjogXCJTZXRUcmFuc1NwZWVkXCIsIFwiQ1JDTFBhcmFtXCI6IHtcIlJlbGF0aXZlXCI6IDAuNX19XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJyb2JvdFwiOiBcImt1a2Ffa3I2cjcwMHNpeHhcIixcbiAgICAgICAgXCJjbWRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIkNvbW1hbmRJRFwiOiAyLFxuICAgICAgICAgICAgICAgIFwiTmFtZVwiOiBcIlVzaW5nIEdyaXBwZXIgMFwiLFxuICAgICAgICAgICAgICAgIFwiQ1JDTENvbW1hbmRcIjogXCJTZXRFbmRFZmZlY3RvclBhcmFtZXRlcnNcIixcbiAgICAgICAgICAgICAgICBcIkNSQ0xQYXJhbVwiOiB7XCJUb29sSURcIjogMH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XCJDb21tYW5kSURcIjogMywgXCJOYW1lXCI6IFwiU2V0IGZhc3Qgc3BlZWRcIiwgXCJDUkNMQ29tbWFuZFwiOiBcIlNldFRyYW5zU3BlZWRcIiwgXCJDUkNMUGFyYW1cIjoge1wiUmVsYXRpdmVcIjogMC41fX1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcInJvYm90XCI6IFwidXI1XCIsXG4gICAgICAgIFwiY21kc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJDb21tYW5kSURcIjogNCxcbiAgICAgICAgICAgICAgICBcIk5hbWVcIjogXCJNb3ZlIFRvXCIsXG4gICAgICAgICAgICAgICAgXCJDUkNMQ29tbWFuZFwiOiBcIk1vdmVUb1wiLFxuICAgICAgICAgICAgICAgIFwiQ1JDTFBhcmFtXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJTdHJhaWdodFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgXCJQb3NlXCI6IHtcIlhcIjogMzAwLCBcIllcIjogNDAwLCBcIlpcIjogMzAwLCBcIkFcIjogMCwgXCJCXCI6IE1hdGguUEkgLyAyLCBcIkNcIjogLU1hdGguUEkgKyAwLjF9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIkNvbW1hbmRJRFwiOiA1LFxuICAgICAgICAgICAgICAgIFwiTmFtZVwiOiBcIk1vdmUgVG9cIixcbiAgICAgICAgICAgICAgICBcIkNSQ0xDb21tYW5kXCI6IFwiTW92ZVRvXCIsXG4gICAgICAgICAgICAgICAgXCJDUkNMUGFyYW1cIjoge1xuICAgICAgICAgICAgICAgICAgICBcIlN0cmFpZ2h0XCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiUG9zZVwiOiB7XCJYXCI6IDMwMCwgXCJZXCI6IDUwMCwgXCJaXCI6IDMwMCwgXCJBXCI6IDAsIFwiQlwiOiBNYXRoLlBJIC8gMiwgXCJDXCI6IC1NYXRoLlBJICsgMC4xfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XCJDb21tYW5kSURcIjogNiwgXCJOYW1lXCI6IFwiUGlja2luZyBQYXJ0XCIsIFwiQ1JDTENvbW1hbmRcIjogXCJTZXRFbmRFZmZlY3RvclBhcmFtZXRlcnNcIiwgXCJDUkNMUGFyYW1cIjoge1wiU2V0dGluZ1wiOiAxfX0sXG4gICAgICAgICAgICB7XCJDb21tYW5kSURcIjogNywgXCJOYW1lXCI6IFwiV2FpdCAwLjVzM1wiLCBcIkNSQ0xDb21tYW5kXCI6IFwiV2FpdFwiLCBcIkNSQ0xQYXJhbVwiOiB7XCJUaW1lXCI6IDAuNX19LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiQ29tbWFuZElEXCI6IDgsXG4gICAgICAgICAgICAgICAgXCJOYW1lXCI6IFwiTW92ZSBUb1wiLFxuICAgICAgICAgICAgICAgIFwiQ1JDTENvbW1hbmRcIjogXCJNb3ZlVG9cIixcbiAgICAgICAgICAgICAgICBcIkNSQ0xQYXJhbVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiU3RyYWlnaHRcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwiUG9zZVwiOiB7XCJYXCI6IDMwMCwgXCJZXCI6IDMwMCwgXCJaXCI6IDMwMCwgXCJBXCI6IDAsIFwiQlwiOiBNYXRoLlBJIC8gMiwgXCJDXCI6IC1NYXRoLlBJICsgMC4xfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XCJDb21tYW5kSURcIjogOSwgXCJOYW1lXCI6IFwiUmVsZWFzaW5nIFBhcnRcIiwgXCJDUkNMQ29tbWFuZFwiOiBcIlNldEVuZEVmZmVjdG9yUGFyYW1ldGVyc1wiLCBcIkNSQ0xQYXJhbVwiOiB7XCJTZXR0aW5nXCI6IDB9fSxcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiQ29tbWFuZElEXCI6IDEwLFxuICAgICAgICAgICAgICAgIFwiTmFtZVwiOiBcIk1vdmUgVG9cIixcbiAgICAgICAgICAgICAgICBcIkNSQ0xDb21tYW5kXCI6IFwiTW92ZVRvXCIsXG4gICAgICAgICAgICAgICAgXCJDUkNMUGFyYW1cIjoge1xuICAgICAgICAgICAgICAgICAgICBcIlN0cmFpZ2h0XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBcIlBvc2VcIjoge1wiWFwiOiAzMDAsIFwiWVwiOiA0MDAsIFwiWlwiOiAzMDAsIFwiQVwiOiAwLCBcIkJcIjogTWF0aC5QSSAvIDIsIFwiQ1wiOiAtTWF0aC5QSSArIDAuMX1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgfSxcbl1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXFxuICpcXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuICpcXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxcbiAqL1xcblxcbjpyb290IHtcXG4gIC8qXFxuICAgKiBUeXBvZ3JhcGh5XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tZm9udC1mYW1pbHktYmFzZTogJ1NlZ29lIFVJJywgJ0hlbHZldGljYU5ldWUtTGlnaHQnLCBzYW5zLXNlcmlmO1xcblxcbiAgLypcXG4gICAqIExheW91dFxcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLW1heC1jb250ZW50LXdpZHRoOiAxMDAwcHg7XFxuXFxuICAvKlxcbiAgICogQXBwbGljYXRpb24gc3BlY2lmaWNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1oZWRnZWhvZy1ncmVlbi1saWdodDogIzM4YjQ0OTtcXG4gIC0taGVkZ2Vob2ctZ3JlZW4tZGFyazogIzAwN2MzYztcXG5cXG4gIC8qXFxuICAgKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tc2NyZWVuLXhzLW1pbjogNDgwcHg7ICAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiAgLS1zY3JlZW4tc20tbWluOiA3NjhweDsgIC8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xcbiAgLS1zY3JlZW4tbWQtbWluOiA5OTJweDsgIC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuICAtLXNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxufVxcblxcbi5TaW11bGF0b3Itcm9vdC0xWHNESyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLlNpbXVsYXRvci1TaW11bGF0aW9uM0QtMzM4cEEge1xcbiAgXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6MTAwJTtcXG59XFxuXFxuLlNpbXVsYXRvci1jb250YWluZXItM2xiQ3Mge1xcbiAgXFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIFxcbiAgZGlzcGxheTogZmxleFxcbn1cXG5cXG4uU2ltdWxhdG9yLWNvbnRhaW5lci0zbGJDcy5TaW11bGF0b3Item9vbWVkLTF5b1Z6IHtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIH1cXG5cXG4uU2ltdWxhdG9yLWNvbnRhaW5lci0zbGJDcy5TaW11bGF0b3Item9vbWVkLTF5b1Z6IC5TaW11bGF0b3ItY2FudmFzLUotejdQIHtcXG4gICAgLW1zLWZsZXgtbmVnYXRpdmU6IDA7XFxuICAgICAgICBmbGV4LXNocmluazogMDtcXG4gIH1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvc2FyYWgvRG9jdW1lbnRzL0FyYmVpdC9naXRodWIvbmV0Um9iL05ldHJvYi9zcmMvY29tcG9uZW50cy9pZGUvU2ltdWxhdG9yL1NpbXVsYXRvci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7O0dBT0c7O0FBRUg7RUFDRTs7Z0ZBRThFOztFQUU5RSxrRUFBa0U7O0VBRWxFOztnRkFFOEU7O0VBRTlFLDRCQUE0Qjs7RUFFNUI7O2dGQUU4RTs7RUFFOUUsZ0NBQWdDO0VBQ2hDLCtCQUErQjs7RUFFL0I7O2dGQUU4RTs7RUFFOUUsdUJBQXVCLEVBQUUsZ0NBQWdDO0VBQ3pELHVCQUF1QixFQUFFLDJCQUEyQjtFQUNwRCx1QkFBdUIsRUFBRSw2QkFBNkI7RUFDdEQsd0JBQXdCLENBQUMsaUNBQWlDO0NBQzNEOztBQUVEO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsY0FBYztDQUNmOztBQUVEOztFQUVFLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osWUFBWTtDQUNiOztBQUVEOztFQUVFLHFCQUFxQjs7RUFFckIsYUFBYTtDQUNkOztBQUVEO0lBQ0ksaUJBQWlCO0dBQ2xCOztBQUVIO0lBQ0kscUJBQXFCO1FBQ2pCLGVBQWU7R0FDcEJcIixcImZpbGVcIjpcIlNpbXVsYXRvci5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcXG4gKlxcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cXG4gKlxcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXFxuICovXFxuXFxuOnJvb3Qge1xcbiAgLypcXG4gICAqIFR5cG9ncmFwaHlcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1mb250LWZhbWlseS1iYXNlOiAnU2Vnb2UgVUknLCAnSGVsdmV0aWNhTmV1ZS1MaWdodCcsIHNhbnMtc2VyaWY7XFxuXFxuICAvKlxcbiAgICogTGF5b3V0XFxuICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4gIC0tbWF4LWNvbnRlbnQtd2lkdGg6IDEwMDBweDtcXG5cXG4gIC8qXFxuICAgKiBBcHBsaWNhdGlvbiBzcGVjaWZpY1xcbiAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuICAtLWhlZGdlaG9nLWdyZWVuLWxpZ2h0OiAjMzhiNDQ5O1xcbiAgLS1oZWRnZWhvZy1ncmVlbi1kYXJrOiAjMDA3YzNjO1xcblxcbiAgLypcXG4gICAqIE1lZGlhIHF1ZXJpZXMgYnJlYWtwb2ludHNcXG4gICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiAgLS1zY3JlZW4teHMtbWluOiA0ODBweDsgIC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuICAtLXNjcmVlbi1zbS1taW46IDc2OHB4OyAgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuICAtLXNjcmVlbi1tZC1taW46IDk5MnB4OyAgLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cXG4gIC0tc2NyZWVuLWxnLW1pbjogMTIwMHB4OyAvKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cXG59XFxuXFxuLnJvb3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5TaW11bGF0aW9uM0Qge1xcbiAgXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6MTAwJTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4XFxufVxcblxcbi5jb250YWluZXIuem9vbWVkIHtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIH1cXG5cXG4uY29udGFpbmVyLnpvb21lZCAuY2FudmFzIHtcXG4gICAgLW1zLWZsZXgtbmVnYXRpdmU6IDA7XFxuICAgICAgICBmbGV4LXNocmluazogMDtcXG4gIH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIlNpbXVsYXRvci1yb290LTFYc0RLXCIsXG5cdFwiU2ltdWxhdGlvbjNEXCI6IFwiU2ltdWxhdG9yLVNpbXVsYXRpb24zRC0zMzhwQVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIlNpbXVsYXRvci1jb250YWluZXItM2xiQ3NcIixcblx0XCJ6b29tZWRcIjogXCJTaW11bGF0b3Item9vbWVkLTF5b1Z6XCIsXG5cdFwiY2FudmFzXCI6IFwiU2ltdWxhdG9yLWNhbnZhcy1KLXo3UFwiXG59OyIsImltcG9ydCB7XG4gICAgRW5naW5lLFxuICAgIFNjZW5lLFxuICAgIENvbG9yMyxcbiAgICBWZWN0b3IzLFxuICAgIEFyY1JvdGF0ZUNhbWVyYSxcbiAgICBIZW1pc3BoZXJpY0xpZ2h0LFxuICAgIFRvb2xzLFxuICAgIERldmljZVR5cGUsXG4gICAgWGJveElucHV0LFxuICAgIER1YWxTaG9ja0lucHV0LCBRdWF0ZXJuaW9uXG4gICAgLCBBc3NldHNNYW5hZ2VyLCBNZXNoQnVpbGRlciwgU3RhbmRhcmRNYXRlcmlhbCwgVHJhbnNmb3JtTm9kZSwgTWF0cml4LFxufSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlXCI7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGNyZWF0ZUF4ZXMgZnJvbSBcIndlYnJvYi9zcmMvQXhlc0hlbHBlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5wdXRDb250cm9sbGVyIGZyb20gXCJ3ZWJyb2Ivc3JjLy9JbnB1dENvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGV1bGVyVG9RdWF0ZXJuaW9uIH0gZnJvbSAnZXVsZXJ1dGlsJztcblxuLy9pbXBvcnQgeyBleGVjdXRlTXVsdGlSb2JvdFByb2dyYW0sIGxvYWRSb2JvdHMgfSBmcm9tIFwid2Vicm9iL3NyYy9yb2JvdC9NdWx0aVJvYm90SGFuZGxlclwiO1xuaW1wb3J0IHsgVEVTVF9DTURTIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3RtcC93ZWJSb2Ivc3JjL3Rlc3QvZGF0YS5qc1wiO1xuaW1wb3J0IHsgU2NlbmVMb2FkZXIgfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIjtcblxuY29uc3QgaW5wdXRzRGVmID0ge1xuICAgIHhBeGlzOiBbXG4gICAgICAgIFtEZXZpY2VUeXBlLktleWJvYXJkLCBbLSdTJy5jaGFyQ29kZUF0KDApLCAnVycuY2hhckNvZGVBdCgwKV1dLFxuICAgICAgICBbRGV2aWNlVHlwZS5EdWFsU2hvY2ssIFtEdWFsU2hvY2tJbnB1dC5MU3RpY2tYQXhpc11dLFxuICAgICAgICBbRGV2aWNlVHlwZS5YYm94LCBbWGJveElucHV0LkxTdGlja1hBeGlzXV0sXG4gICAgICAgIFtEZXZpY2VUeXBlLkdlbmVyaWMsIFtYYm94SW5wdXQuTFN0aWNrWEF4aXNdXSxcbiAgICBdLFxuICAgIHlBeGlzOiBbXG4gICAgICAgIFtEZXZpY2VUeXBlLktleWJvYXJkLCBbLSdBJy5jaGFyQ29kZUF0KDApLCAnRCcuY2hhckNvZGVBdCgwKV1dLFxuICAgICAgICBbRGV2aWNlVHlwZS5EdWFsU2hvY2ssIFstRHVhbFNob2NrSW5wdXQuTFN0aWNrWUF4aXNdXSxcbiAgICAgICAgW0RldmljZVR5cGUuWGJveCwgWy1YYm94SW5wdXQuTFN0aWNrWUF4aXNdXSxcbiAgICAgICAgW0RldmljZVR5cGUuR2VuZXJpYywgWy1YYm94SW5wdXQuTFN0aWNrWUF4aXNdXSxcbiAgICBdLFxuICAgIHpBeGlzOiBbXG4gICAgICAgIFtEZXZpY2VUeXBlLktleWJvYXJkLCBbLSdRJy5jaGFyQ29kZUF0KDApLCAnRScuY2hhckNvZGVBdCgwKV1dLFxuICAgICAgICBbRGV2aWNlVHlwZS5EdWFsU2hvY2ssIFstRHVhbFNob2NrSW5wdXQuUlN0aWNrWUF4aXNdXSxcbiAgICAgICAgW0RldmljZVR5cGUuWGJveCwgWy1YYm94SW5wdXQuUlN0aWNrWUF4aXNdXSxcbiAgICAgICAgW0RldmljZVR5cGUuR2VuZXJpYywgWy1YYm94SW5wdXQuUlN0aWNrWUF4aXNdXSxcbiAgICBdLFxuICAgIG1vZGU6IFtcbiAgICAgICAgW0RldmljZVR5cGUuS2V5Ym9hcmQsIFsnICcuY2hhckNvZGVBdCgwKV1dLFxuICAgICAgICBbRGV2aWNlVHlwZS5EdWFsU2hvY2ssIFtEdWFsU2hvY2tJbnB1dC5SMSwgRHVhbFNob2NrSW5wdXQuTDFdXSxcbiAgICAgICAgW0RldmljZVR5cGUuWGJveCwgW1hib3hJbnB1dC5SQiwgWGJveElucHV0LkxCXV0sXG4gICAgICAgIFtEZXZpY2VUeXBlLkdlbmVyaWMsIFtYYm94SW5wdXQuUkIsIFhib3hJbnB1dC5MQl1dLFxuICAgIF0sXG4gICAgZmFzdDogW1xuICAgICAgICBbRGV2aWNlVHlwZS5LZXlib2FyZCwgWydPJy5jaGFyQ29kZUF0KDApXV0sXG4gICAgICAgIFtEZXZpY2VUeXBlLkR1YWxTaG9jaywgW0R1YWxTaG9ja0lucHV0LlIyXV0sXG4gICAgICAgIFtEZXZpY2VUeXBlLlhib3gsIFtYYm94SW5wdXQuUlRdXSxcbiAgICAgICAgW0RldmljZVR5cGUuR2VuZXJpYywgW1hib3hJbnB1dC5SVF1dLFxuICAgIF0sXG4gICAgc2xvdzogW1xuICAgICAgICBbRGV2aWNlVHlwZS5LZXlib2FyZCwgWydMJy5jaGFyQ29kZUF0KDApXV0sXG4gICAgICAgIFtEZXZpY2VUeXBlLkR1YWxTaG9jaywgW0R1YWxTaG9ja0lucHV0LkwyXV0sXG4gICAgICAgIFtEZXZpY2VUeXBlLlhib3gsIFtYYm94SW5wdXQuTFRdXSxcbiAgICAgICAgW0RldmljZVR5cGUuR2VuZXJpYywgW1hib3hJbnB1dC5MVF1dLFxuICAgIF0sXG4gICAgdG9vbDE6IFtcbiAgICAgICAgW0RldmljZVR5cGUuS2V5Ym9hcmQsIFsnMScuY2hhckNvZGVBdCgwKV1dLFxuICAgICAgICBbRGV2aWNlVHlwZS5EdWFsU2hvY2ssIFtEdWFsU2hvY2tJbnB1dC5Dcm9zc11dLFxuICAgICAgICBbRGV2aWNlVHlwZS5YYm94LCBbWGJveElucHV0LkFdXSxcbiAgICAgICAgW0RldmljZVR5cGUuR2VuZXJpYywgW1hib3hJbnB1dC5BXV0sXG4gICAgXSxcbiAgICB0b29sMjogW1xuICAgICAgICBbRGV2aWNlVHlwZS5LZXlib2FyZCwgWycyJy5jaGFyQ29kZUF0KDApXV0sXG4gICAgICAgIFtEZXZpY2VUeXBlLkR1YWxTaG9jaywgW0R1YWxTaG9ja0lucHV0LkNpcmNsZV1dLFxuICAgICAgICBbRGV2aWNlVHlwZS5YYm94LCBbWGJveElucHV0LkJdXSxcbiAgICAgICAgW0RldmljZVR5cGUuR2VuZXJpYywgW1hib3hJbnB1dC5CXV0sXG4gICAgXSxcbn07XG52YXIgaW5wdXRDb250cm9sbGVyO1xudmFyIHNjZW5lO1xudmFyIHJlbmRlcmluZyA9IGZhbHNlO1xudmFyIGVuZ2luZTtcbnZhciBhc3NldHNNYW5hZ2VyO1xudmFyIGFzc2V0c01hbmFnZXIgPSBuZXcgQXNzZXRzTWFuYWdlcihzY2VuZSlcblxuY29uc3Qgcm9ib3REYXRhID0gW1xuXG5cblxuXG4gICAge1xuICAgICAgICBwYXRoOiBcInJvYm90L2Zlc3RvX2Rlc2NyaXB0aW9uL3VyZGYvZXhjbTQwLnVyZGZqc29uXCIsXG4gICAgICAgIHBvczogbmV3IFZlY3RvcjMoMCwgMCwgMCksXG4gICAgICAgIHJvdDogZXVsZXJUb1F1YXRlcm5pb24obmV3IFZlY3RvcjMoMCwgMCwgMCkpLFxuICAgICAgICBjaGFpbnM6IFt7XG4gICAgICAgICAgICBiYXNlOiAnYmFzZV9saW5rJyxcbiAgICAgICAgICAgIGZsYW5nZTogJ2F4aXMzJyxcbiAgICAgICAgICAgIGlrOiAnY2FydGVzaWFuaWsnLFxuICAgICAgICAgICAgdG9vbHM6IFt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IzKDAsIDAsIC0wLjA1KSxcbiAgICAgICAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb246IGV1bGVyVG9RdWF0ZXJuaW9uKG5ldyBWZWN0b3IzKDAsIDAsIDApKSxcbiAgICAgICAgICAgICAgICB0eXBlOiAndmFjdXVtR3JpcHBlcicsXG4gICAgICAgICAgICAgICAgdmlzdWFsOiB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlcjogeyBkaWFtZXRlcjogMC4wMSwgaGVpZ2h0OiAwLjA1IH0sXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMygwLCAwLCAtMC4wMjUpLFxuICAgICAgICAgICAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb246IGV1bGVyVG9RdWF0ZXJuaW9uKG5ldyBWZWN0b3IzKE1hdGguUEkgLyAyLCAwLCAwKSksXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfV1cblxuICAgIH0sXG5cbiAgICAvL3twYXRoOiBcInJvYm90L3ByMl9kZXNjcmlwdGlvbi9yb2JvdHMvXCIsIGZpbGU6ICdwcjIudXJkZmpzb24nLCBwb3M6IG5ldyBWZWN0b3IzKDAsMCwwKX0sXG5cblxuXVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcbiAgICBjb25zdCByZWFjdENhbnZhcyA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCB7IGFudGlhbGlhcywgZW5naW5lT3B0aW9ucywgYWRhcHRUb0RldmljZVJhdGlvLCBzY2VuZU9wdGlvbnMsIG9uUmVuZGVyLCBvblNjZW5lUmVhZHksIC4uLnJlc3QgfSA9IHByb3BzO1xuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChyZWFjdENhbnZhcy5jdXJyZW50KSB7XG4gICAgICAgICAgICBlbmdpbmUgPSBuZXcgRW5naW5lKHJlYWN0Q2FudmFzLmN1cnJlbnQsIGFudGlhbGlhcywgZW5naW5lT3B0aW9ucywgYWRhcHRUb0RldmljZVJhdGlvKTtcbiAgICAgICAgICAgIHNjZW5lID0gbmV3IFNjZW5lKGVuZ2luZSwgc2NlbmVPcHRpb25zKTtcbiAgICAgICAgICAgIGFzc2V0c01hbmFnZXIgPSBuZXcgQXNzZXRzTWFuYWdlcihzY2VuZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlucHV0Q29udHJvbGxlciA9IG5ldyBJbnB1dENvbnRyb2xsZXIoc2NlbmUpXG4gICAgICAgICAgICBpbnB1dENvbnRyb2xsZXIuc2V0SW5wdXREZWZpbml0aW9uKGlucHV0c0RlZilcbiAgICAgICAgICAgIGlucHV0Q29udHJvbGxlci5jdXJyZW50SW5wdXRzUHJvY2Vzc2VkLmFkZCgoKSA9PiBpbnB1dHNQcm9jZXNzZWQoKSlcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYVJhZGl1cyA9IDJcbiAgICAgICAgICAgIGNvbnN0IGFscGhhID0gVG9vbHMuVG9SYWRpYW5zKC00NSlcbiAgICAgICAgICAgIGNvbnN0IGJldGEgPSBUb29scy5Ub1JhZGlhbnMoNDUpXG4gICAgICAgICAgICBjb25zdCBjYW1lcmEgPSBuZXcgQXJjUm90YXRlQ2FtZXJhKFwiY2FtZXJhXCIsIGFscGhhLCBiZXRhLCBjYW1lcmFSYWRpdXMsIG5ldyBWZWN0b3IzKDAsIDAsIDAuMikvKnJvYm90LndvcmtSYW5nZUNlbnRlciovLCBzY2VuZSk7XG4gICAgICAgICAgICBjYW1lcmEuYXR0YWNoQ29udHJvbChyZWFjdENhbnZhcy5jdXJyZW50LCB0cnVlKTtcbiAgICAgICAgICAgIGNhbWVyYS53aGVlbFByZWNpc2lvbiA9IDIwXG4gICAgICAgICAgICBjYW1lcmEudXBWZWN0b3IgPSBuZXcgVmVjdG9yMygwLCAwLCAxKVxuICAgICAgICAgICAgc2NlbmUudXNlUmlnaHRIYW5kZWRTeXN0ZW0gPSB0cnVlXG4gICAgICAgICAgICBjYW1lcmEubWluWiA9IDAuMDNcblxuICAgICAgICAgICAgY29uc3QgbGlnaHQgPSBuZXcgSGVtaXNwaGVyaWNMaWdodChcImxpZ2h0MVwiLCBuZXcgVmVjdG9yMygwLCAwLCAxKSwgc2NlbmUpO1xuICAgICAgICAgICAgbGlnaHQuaW50ZW5zaXR5ID0gMC43O1xuXG4gICAgICAgICAgICAvL2NvbnN0IGF4ZXMgPSBjcmVhdGVBeGVzKHNjZW5lLCAwLjUsIDEuMCwgdHJ1ZSk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoc2NlbmUuaXNSZWFkeSgpKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMub25TY2VuZVJlYWR5KHNjZW5lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2NlbmUub25SZWFkeU9ic2VydmFibGUuYWRkT25jZSgoc2NlbmUpID0+IHByb3BzLm9uU2NlbmVSZWFkeShzY2VuZSkpO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVuZ2luZS5ydW5SZW5kZXJMb29wKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9uUmVuZGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgb25SZW5kZXIoc2NlbmUpO1xuICAgICAgICAgICAgICAgICAgICBjYW1lcmEuaW5wdXRzLmNoZWNrSW5wdXRzKClcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250cm9sbGVyLnByb2Nlc3NJbnB1dHMoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbWVyYS5pbmVydGlhbEFscGhhT2Zmc2V0ID09PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmEuaW5lcnRpYWxCZXRhT2Zmc2V0ID09PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmEuaW5lcnRpYWxSYWRpdXNPZmZzZXQgPT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbWVyYS5pbmVydGlhbFBhbm5pbmdYID09PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmEuaW5lcnRpYWxQYW5uaW5nWSA9PT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUuX2FjdGl2ZUFuaW1hdGFibGVzLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250cm9sbGVyLmFjdGl2YXRlZElucHV0cy5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0Q29udHJvbGxlci5jaGFuZ2VkSW5wdXRzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZW5kZXJpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhdXNlZCBSZW5kZXJsb29wXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NlbmUucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVuZGVyaW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsbHJvYm90cyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdGFydGVkIFJlbmRlcmxvb3BcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF3YWl0IHIuV2FpdCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3Iuc3BlZWQgPSAwLjJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9yLnNldFRDUFRvKCBuZXcgVmVjdG9yMygwLjMsIDAuMywgMC4zKSwgZXVsZXJUb1F1YXRlcm5pb24obmV3IFZlY3RvcjMoMCwgTWF0aC5QSSAvIDIsIC1NYXRoLlBJICsgMC4xKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qYXdhaXQgci5Nb3ZlVG8oe1N0cmFpZ2h0OiBmYWxzZSwgUG9zZTogeydBJzogMCwgJ0InOiBNYXRoLlBJIC8gMiwgJ0MnOi1NYXRoLlBJICsgMC4xLCAnWCc6MzAwLCAnWSc6NDAwLCAnWic6IDMwMH19KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCByLmxpbihNYXRyaXguQ29tcG9zZShWZWN0b3IzLk9uZSgpLCBldWxlclRvUXVhdGVybmlvbihuZXcgVmVjdG9yMygwLCBNYXRoLlBJIC8gMiwgLU1hdGguUEkgKyAwLjEpKSwgbmV3IFZlY3RvcjMoMC4zLCAwLjUsIDAuMykpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByLlNldEVuZEVmZmVjdG9yUGFyYW1ldGVycyh7c2V0dGluZzogMS4wfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgci5wdHAoTWF0cml4LkNvbXBvc2UoVmVjdG9yMy5PbmUoKSwgZXVsZXJUb1F1YXRlcm5pb24obmV3IFZlY3RvcjMoMCwgTWF0aC5QSSAvIDIsIC1NYXRoLlBJICsgMC4xKSksIG5ldyBWZWN0b3IzKDAuMywgMC4zLCAwLjMpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgci5TZXRFbmRFZmZlY3RvclBhcmFtZXRlcnMoe3NldHRpbmc6IDAuMH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHIucHRwKE1hdHJpeC5Db21wb3NlKFZlY3RvcjMuT25lKCksIGV1bGVyVG9RdWF0ZXJuaW9uKG5ldyBWZWN0b3IzKDAsIE1hdGguUEkgLyAyLCAtTWF0aC5QSSArIDAuMSkpLCBuZXcgVmVjdG9yMygwLjMsIDAuNCwgMC4zKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYXdhaXQgZXhlY3V0ZU11bHRpUm9ib3RQcm9ncmFtKGFsbHJvYm90cywgVEVTVF9DTURTKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNjZW5lLnJlbmRlcigpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzY2VuZS5nZXRFbmdpbmUoKS5yZXNpemUoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNjZW5lLmdldEVuZ2luZSgpLmRpc3Bvc2UoKTtcblxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwgW3JlYWN0Q2FudmFzXSk7XG5cbiAgICByZXR1cm4gPGNhbnZhcyByZWY9e3JlYWN0Q2FudmFzfSB7Li4ucmVzdH0gLz47XG59O1xuXG5mdW5jdGlvbiBpbnB1dHNQcm9jZXNzZWQoZm9yY2V1cGRhdGUgPSBmYWxzZSkge1xuICAgIGNvbnN0IGlucHV0cyA9IGlucHV0Q29udHJvbGxlci5pbnB1dHNcbiAgICBjb25zdCBmYXN0c2NhbGUgPSAxICsgKGlucHV0cy5mYXN0ICogMikgLy8gaW5wdXRzLmZhc3Q6IFswLCAxXSAtPiBbMSwgMl1cbiAgICBjb25zdCBzbG93c2NhbGUgPSAoMSAtIChNYXRoLm1pbihpbnB1dHMuc2xvdywgMC45NykpKSAvLyBpbnB1dHMuc2xvdzogWzAsIDFdIC0+IFswLCAxXVxuXG4gICAgY29uc3Qgc2NhbGUgPSBzY2VuZS5nZXRBbmltYXRpb25SYXRpbygpICogMC4wMSAqIGZhc3RzY2FsZSAqIHNsb3dzY2FsZVxuICAgIGxldCBzaGlmdCA9IFZlY3RvcjMuWmVybygpXG4gICAgaWYgKGlucHV0cy5tb2RlID4gMC41KSB7XG4gICAgICAgIHNoaWZ0ID0gbmV3IFZlY3RvcjMoLWlucHV0cy55QXhpcywgaW5wdXRzLnhBeGlzLCBpbnB1dHMuekF4aXMpLnNjYWxlKHNjYWxlKVxuICAgICAgICBjb25zdCBzaGlmdFF1YXRlcm5pb24gPSBRdWF0ZXJuaW9uLkZyb21FdWxlclZlY3RvcihzaGlmdClcbiAgICAgICAgdGNwLnJvdGF0aW9uUXVhdGVybmlvbiA9IHRjcC5yb3RhdGlvblF1YXRlcm5pb24ubXVsdGlwbHkoc2hpZnRRdWF0ZXJuaW9uKVxuICAgICAgICBhbGxyb2JvdHMuZm9yRWFjaChyID0+IHIuc2V0VENQVG8odGNwLnBvc2l0aW9uLCB0Y3Aucm90YXRpb25RdWF0ZXJuaW9uKSlcbiAgICAgICAgcmVuZGVyaW5nID0gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaWZ0ID0gbmV3IFZlY3RvcjMoLWlucHV0cy54QXhpcywgaW5wdXRzLnlBeGlzLCBpbnB1dHMuekF4aXMpLnNjYWxlKHNjYWxlICogMC4zKSAvLyBUT0RPIHJvdGF0ZSB2aWV3ZXIgcG9zXG4gICAgICAgIGlmIChzaGlmdC5sZW5ndGgoKSA+IDAgfHwgZm9yY2V1cGRhdGUpIHtcbiAgICAgICAgICAgIC8vdGNwLnBvc2l0aW9uID0gdGNwLnBvc2l0aW9uLmFkZChzaGlmdClcbiAgICAgICAgICAgLy8gYWxscm9ib3RzLmZvckVhY2gociA9PiByLnNldFRDUFRvKHRjcC5wb3NpdGlvbiwgdGNwLnJvdGF0aW9uUXVhdGVybmlvbikpXG4gICAgICAgICAgICByZW5kZXJpbmcgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKGlucHV0Q29udHJvbGxlci5jaGFuZ2VkSW5wdXRzLnRvb2wxICYmIGlucHV0cy50b29sMSA+PSAwLjUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHcmlwcGluZycpXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgaWYgKGNvbmVNYXRlcmlhbC5kaWZmdXNlQ29sb3IuZXF1YWxzKENvbG9yMy5HcmF5KCkpKXtcbiAgICAgICAgICAgICAgICBjb25lTWF0ZXJpYWwuZGlmZnVzZUNvbG9yID0gQ29sb3IzLkJsYWNrKClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR3JpcHBpbmcnKVxuICAgICAgICAgICAgICAgIC8vcm9ib3RJbnRlcmZhY2Uuc2VuZChDb21tYW5kRmFjdG9yeS5TZXRFbmRFZmZlY3RvcignR3JpcHBpbmcnLCAxLjApKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25lTWF0ZXJpYWwuZGlmZnVzZUNvbG9yID0gQ29sb3IzLkdyYXkoKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWxlYXNpbmcnKVxuICAgICAgICAgICAgICAgIC8vcm9ib3RJbnRlcmZhY2Uuc2VuZChDb21tYW5kRmFjdG9yeS5TZXRFbmRFZmZlY3RvcignUmVsZWFzaW5nJywgMC4wKSlcbiAgICAgICAgICAgIH0gKi9cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKVxuICAgIH1cbn1cblxuXG4iLCIvLyBAZmxvd1xuaW1wb3J0IHsgU2NlbmVMb2FkZXIgfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBJbnB1dENvbnRyb2xsZXJ9IGZyb20gXCJ3ZWJyb2JcIlxuXG4vL2ltcG9ydCBjcmVhdGVBeGVzIGZyb20gXCJ3ZWJyb2Ivc3JjL0F4ZXNIZWxwZXIuanNcIjtcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvdXNlU3R5bGVzJztcbmltcG9ydCB7XG4gIEVuZ2luZSxcbiAgU2NlbmUsXG4gIENvbG9yMyxcbiAgVmVjdG9yMyxcbiAgQXJjUm90YXRlQ2FtZXJhLFxuICBIZW1pc3BoZXJpY0xpZ2h0LFxuICBGcmVlQ2FtZXJhLFxuICBUb29scyxcbiAgRGV2aWNlVHlwZSxcbiAgWGJveElucHV0LFxuICBEdWFsU2hvY2tJbnB1dCwgUXVhdGVybmlvblxuICAsIEFzc2V0c01hbmFnZXIsIE1lc2hCdWlsZGVyLCBTdGFuZGFyZE1hdGVyaWFsLCBUcmFuc2Zvcm1Ob2RlLCBNYXRyaXgsXG59IGZyb20gXCJAYmFieWxvbmpzL2NvcmVcIjtcbmNvbnNvbGUubG9nKCdEaXJla3Qgdm9yIE9uUGx1Z2luQWN0aXZhdGVkT2JzZXJ2YWJsZScpXG5TY2VuZUxvYWRlci5PblBsdWdpbkFjdGl2YXRlZE9ic2VydmFibGUuYWRkKGZ1bmN0aW9uIChsb2FkZXIpIHtcbiAgaWYgKGxvYWRlci5uYW1lID09PSBcInVyZGZqc29uXCIpIHtcbiAgICAgIGxvYWRlci5hc3NldHNNYW5hZ2VyID0gYXNzZXRzTWFuYWdlcjtcbiAgICAgIGNvbnNvbGUubG9nKCdJbmplY3RlZCBBc3NldE1hbmFnZXInKVxuICAgICAgXG4gIH1cbn0pO1xuY29uc29sZS5sb2coJ0RpcmVrdCBuYWNoIE9uUGx1Z2luQWN0aXZhdGVkT2JzZXJ2YWJsZScpXG5pbXBvcnQgXCIuL1VSREZKU09OTG9hZGVyXCJcbi8vaW1wb3J0IHtVUkRGSlNPTkxvYWRlcn0gZnJvbSBcIndlYnJvYi9zcmMvVVJERkpTT05Mb2FkZXJcIlxuY29uc29sZS5sb2coJ25hY2ggaW1wb3J0IHVyZGZqc29uJylcblxuaW1wb3J0IHtcbiAgVGVybWluYXRlSWNvbixcbiAgUmVzZXRJY29uLFxuICBUZXJtaW5hdGVBbmRSZXNldEljb24sXG4gIFpvb21Jbkljb24sXG4gIFpvb21PdXRJY29uLFxuICBab29tRml0SWNvbixcbiAgWm9vbVJlc2V0SWNvbixcbiAgUm90YXRlT3JiaXRJY29uLFxuICBSZXNpemVJY29uLFxuICBSb2JvdEluZHVzdHJpYWxJY29uLFxuICBBcnJvd0FsbEljb24sXG5cbn0gZnJvbSAnLi4vLi4vbWlzYy9wYWxldHRlJztcbmltcG9ydCAqIGFzIGhvb2tzIGZyb20gJy4uLy4uL21pc2MvaG9va3MnO1xuaW1wb3J0IHsgZXVsZXJUb1F1YXRlcm5pb24gfSBmcm9tICdldWxlcnV0aWwvc3JjL0V1bGVyVXRpbC5qcyc7XG4vL2ltcG9ydCBSb2JvdCBmcm9tICd3ZWJyb2Ivc3JjL3JvYm90L1JvYm90LmpzJ1xuXG5pbXBvcnQgeyB0eXBlIEV4ZWN1dGlvbkFjdGlvbiB9IGZyb20gJy4uL0lkZSc7XG5pbXBvcnQgVG9vbEJhciBmcm9tICcuLi9Ub29sQmFyJztcbmltcG9ydCBUb29sQmFySWNvbkJ1dHRvbiBmcm9tICcuLi9Ub29sQmFyL1Rvb2xCYXJJY29uQnV0dG9uJztcbmltcG9ydCBUb29sQmFySXRlbSBmcm9tICcuLi9Ub29sQmFyL1Rvb2xCYXJJdGVtJztcblxuaW1wb3J0IHMgZnJvbSAnLi9TaW11bGF0b3Iuc2Nzcyc7XG5cbmltcG9ydCB7IFNpbXVsYXRpb24gfSBmcm9tICcuL3NpbXVsYXRpb24nO1xuXG5pbXBvcnQgeyBnZW5lcmF0ZUNvbmZpZ0Zyb21YbWwgfSBmcm9tICcuLi9TaW11bGF0b3JFZGl0b3InO1xuLy8gJEZsb3dFeHBlY3RFcnJvclxuaW1wb3J0IGRlZmF1bHRTaW11bGF0aW9uWG1sIGZyb20gJy4vZGVmYXVsdF9zaW11bGF0aW9uLnhtbCc7XG4vL2ltcG9ydCBJbnB1dENvbnRyb2xsZXIgZnJvbSBcIndlYnJvYi9zcmMvSW5wdXRDb250cm9sbGVyLmpzXCI7XG5jb25zdCBkZWZhdWx0U2ltdWxhdGlvbkNvbmZpZyA9IGdlbmVyYXRlQ29uZmlnRnJvbVhtbChkZWZhdWx0U2ltdWxhdGlvblhtbCk7XG52YXIgaW5wdXRDb250cm9sbGVyO1xuXG5jb25zdCBiZ0ludGVuc2l0eSA9IDAuOFxuXG5cbmV4cG9ydCB0eXBlIFNpbXVsYXRvclpvb21BY3Rpb24gPSAnWk9PTV9JTicgfCAnWk9PTV8xMDAnIHwgJ1pPT01fT1VUJyB8ICdaT09NX0ZJVCc7XG5cbmV4cG9ydCB0eXBlIENvbnRyb2xsZWRTdGF0ZSA9IHt8XG4gIHpvb206IG51bWJlcixcbiAgICB6b29tTW9kZTogJ01BTlVBTCcgfCAnRklUJyxcbnx9O1xuXG50eXBlIFByb3BzID0ge3xcbiAgcnVubmluZzogYm9vbGVhbixcbiAgLi4uQ29udHJvbGxlZFN0YXRlLFxuICBvblVwZGF0ZTogKHN0YXRlOiBDb250cm9sbGVkU3RhdGUpID0+IHZvaWQgfCBQcm9taXNlIDwgdm9pZD4sXG4gICAgb25FeGVjdXRpb25BY3Rpb246IChhY3Rpb246IEV4ZWN1dGlvbkFjdGlvbikgPT4gdm9pZCB8IFByb21pc2UgPCB2b2lkPixcbnx9O1xudHlwZSBJbnN0YW5jZSA9IHt8XG4gIHNpbXVsYXRpb246IFNpbXVsYXRpb24sXG58fTtcblxuaW1wb3J0IFwiQGJhYnlsb25qcy9jb3JlL0RlYnVnL2RlYnVnTGF5ZXJcIjsgLy8gQXVnbWVudHMgdGhlIHNjZW5lIHdpdGggdGhlIGRlYnVnIG1ldGhvZHNcbmltcG9ydCBcIkBiYWJ5bG9uanMvaW5zcGVjdG9yXCI7XG4vL2ltcG9ydCB7IFRFU1RfQ01EUyB9IGZyb20gXCJ3ZWJyb2Ivc3JjL3Rlc3QvZGF0YVwiOyAvLyBJbmplY3RzIGEgbG9jYWwgRVM2IHZlcnNpb24gb2YgdGhlIGluc3BlY3RvciB0byBwcmV2ZW50IGF1dG9tYXRpY2FsbHkgcmVseWluZyBvbiB0aGUgbm9uZSBjb21wYXRpYmxlIHZlcnNpb25cblxuY29uc3QgaW5wdXRzRGVmID0ge1xuICB4QXhpczogW1xuICAgIFtEZXZpY2VUeXBlLktleWJvYXJkLCBbLSdTJy5jaGFyQ29kZUF0KDApLCAnVycuY2hhckNvZGVBdCgwKV1dLFxuICAgIFtEZXZpY2VUeXBlLkR1YWxTaG9jaywgW0R1YWxTaG9ja0lucHV0LkxTdGlja1hBeGlzXV0sXG4gICAgW0RldmljZVR5cGUuWGJveCwgW1hib3hJbnB1dC5MU3RpY2tYQXhpc11dLFxuICAgIFtEZXZpY2VUeXBlLkdlbmVyaWMsIFtYYm94SW5wdXQuTFN0aWNrWEF4aXNdXSxcbiAgXSxcbiAgeUF4aXM6IFtcbiAgICBbRGV2aWNlVHlwZS5LZXlib2FyZCwgWy0nQScuY2hhckNvZGVBdCgwKSwgJ0QnLmNoYXJDb2RlQXQoMCldXSxcbiAgICBbRGV2aWNlVHlwZS5EdWFsU2hvY2ssIFstRHVhbFNob2NrSW5wdXQuTFN0aWNrWUF4aXNdXSxcbiAgICBbRGV2aWNlVHlwZS5YYm94LCBbLVhib3hJbnB1dC5MU3RpY2tZQXhpc11dLFxuICAgIFtEZXZpY2VUeXBlLkdlbmVyaWMsIFstWGJveElucHV0LkxTdGlja1lBeGlzXV0sXG4gIF0sXG4gIHpBeGlzOiBbXG4gICAgW0RldmljZVR5cGUuS2V5Ym9hcmQsIFstJ1EnLmNoYXJDb2RlQXQoMCksICdFJy5jaGFyQ29kZUF0KDApXV0sXG4gICAgW0RldmljZVR5cGUuRHVhbFNob2NrLCBbLUR1YWxTaG9ja0lucHV0LlJTdGlja1lBeGlzXV0sXG4gICAgW0RldmljZVR5cGUuWGJveCwgWy1YYm94SW5wdXQuUlN0aWNrWUF4aXNdXSxcbiAgICBbRGV2aWNlVHlwZS5HZW5lcmljLCBbLVhib3hJbnB1dC5SU3RpY2tZQXhpc11dLFxuICBdLFxuICBtb2RlOiBbXG4gICAgW0RldmljZVR5cGUuS2V5Ym9hcmQsIFsnICcuY2hhckNvZGVBdCgwKV1dLFxuICAgIFtEZXZpY2VUeXBlLkR1YWxTaG9jaywgW0R1YWxTaG9ja0lucHV0LlIxLCBEdWFsU2hvY2tJbnB1dC5MMV1dLFxuICAgIFtEZXZpY2VUeXBlLlhib3gsIFtYYm94SW5wdXQuUkIsIFhib3hJbnB1dC5MQl1dLFxuICAgIFtEZXZpY2VUeXBlLkdlbmVyaWMsIFtYYm94SW5wdXQuUkIsIFhib3hJbnB1dC5MQl1dLFxuICBdLFxuICBmYXN0OiBbXG4gICAgW0RldmljZVR5cGUuS2V5Ym9hcmQsIFsnTycuY2hhckNvZGVBdCgwKV1dLFxuICAgIFtEZXZpY2VUeXBlLkR1YWxTaG9jaywgW0R1YWxTaG9ja0lucHV0LlIyXV0sXG4gICAgW0RldmljZVR5cGUuWGJveCwgW1hib3hJbnB1dC5SVF1dLFxuICAgIFtEZXZpY2VUeXBlLkdlbmVyaWMsIFtYYm94SW5wdXQuUlRdXSxcbiAgXSxcbiAgc2xvdzogW1xuICAgIFtEZXZpY2VUeXBlLktleWJvYXJkLCBbJ0wnLmNoYXJDb2RlQXQoMCldXSxcbiAgICBbRGV2aWNlVHlwZS5EdWFsU2hvY2ssIFtEdWFsU2hvY2tJbnB1dC5MMl1dLFxuICAgIFtEZXZpY2VUeXBlLlhib3gsIFtYYm94SW5wdXQuTFRdXSxcbiAgICBbRGV2aWNlVHlwZS5HZW5lcmljLCBbWGJveElucHV0LkxUXV0sXG4gIF0sXG4gIHRvb2wxOiBbXG4gICAgW0RldmljZVR5cGUuS2V5Ym9hcmQsIFsnMScuY2hhckNvZGVBdCgwKV1dLFxuICAgIFtEZXZpY2VUeXBlLkR1YWxTaG9jaywgW0R1YWxTaG9ja0lucHV0LkNyb3NzXV0sXG4gICAgW0RldmljZVR5cGUuWGJveCwgW1hib3hJbnB1dC5BXV0sXG4gICAgW0RldmljZVR5cGUuR2VuZXJpYywgW1hib3hJbnB1dC5BXV0sXG4gIF0sXG4gIHRvb2wyOiBbXG4gICAgW0RldmljZVR5cGUuS2V5Ym9hcmQsIFsnMicuY2hhckNvZGVBdCgwKV1dLFxuICAgIFtEZXZpY2VUeXBlLkR1YWxTaG9jaywgW0R1YWxTaG9ja0lucHV0LkNpcmNsZV1dLFxuICAgIFtEZXZpY2VUeXBlLlhib3gsIFtYYm94SW5wdXQuQl1dLFxuICAgIFtEZXZpY2VUeXBlLkdlbmVyaWMsIFtYYm94SW5wdXQuQl1dLFxuICBdLFxufTtcbnZhciBhc3NldHNNYW5hZ2VyO1xuLyoqXG4gKiBUaGUgc2ltdWxhdG9yIGRpc3BsYXlzIGEgMkQgZW52aXJvbm1lbnQgY29udGFpbmluZyBhIHNpbXVsYXRlZCByb2JvdC5cbiAqXG4gKiBCZXNpZGVzIHRoZSBzaW11bGF0aW9uIGl0c2VsZiwgdGhlIHRvb2xiYXIgYWxsb3dzIHRlcm1pbmF0aW5nIHByb2dyYW1zIGFuZCByZXNldHRpbmcgdGhlIHNpbXVsYXRpb24uXG4gKi9cbmltcG9ydCBEZWZhdWx0UGxheWdyb3VuZCBmcm9tIFwiLi9EZWZhdWx0UGxheWdyb3VuZFwiO1xuLy9pbXBvcnQgeyBsb2FkUm9ib3RzIH0gZnJvbSBcIndlYnJvYi9zcmMvcm9ib3QvTXVsdGlSb2JvdEhhbmRsZXJcIjtcbi8vaW1wb3J0IFVSREZKU09OTG9hZGVyIGZyb20gXCIuL1VSREZKU09OTG9hZGVyXCI7XG4vLyBpbXBvcnQge2xvYWRSb2JvdHN9IGZyb20gXCJ3ZWJyb2JcIjtcbmZ1bmN0aW9uIGlucHV0c1Byb2Nlc3NlZCAoZm9yY2V1cGRhdGU9ZmFsc2Upe1xuICBjb25zdCBpbnB1dHMgPSBpbnB1dENvbnRyb2xsZXIuaW5wdXRzXG4gIGNvbnN0IGZhc3RzY2FsZSA9IDEgKyAoaW5wdXRzLmZhc3QqMikgLy8gaW5wdXRzLmZhc3Q6IFswLCAxXSAtPiBbMSwgMl1cbiAgY29uc3Qgc2xvd3NjYWxlID0gKDEgLSAoTWF0aC5taW4oaW5wdXRzLnNsb3csIDAuOTcpKSkgLy8gaW5wdXRzLnNsb3c6IFswLCAxXSAtPiBbMCwgMV1cblxuICBjb25zdCBzY2FsZSA9IHNjZW5lLmdldEFuaW1hdGlvblJhdGlvKCkgKiAwLjAxICogZmFzdHNjYWxlICogc2xvd3NjYWxlXG4gIGxldCBzaGlmdCA9IFZlY3RvcjMuWmVybygpXG4gIGlmIChpbnB1dHMubW9kZSA+IDAuNSl7XG4gICAgICBzaGlmdCA9IG5ldyBWZWN0b3IzKC1pbnB1dHMueUF4aXMsIGlucHV0cy54QXhpcywgaW5wdXRzLnpBeGlzKS5zY2FsZShzY2FsZSlcbiAgICAgIGNvbnN0IHNoaWZ0UXVhdGVybmlvbiA9IFF1YXRlcm5pb24uRnJvbUV1bGVyVmVjdG9yKHNoaWZ0KVxuICAgICAgdGNwLnJvdGF0aW9uUXVhdGVybmlvbiA9IHRjcC5yb3RhdGlvblF1YXRlcm5pb24ubXVsdGlwbHkoc2hpZnRRdWF0ZXJuaW9uKVxuICAgICAgYWxscm9ib3RzLmZvckVhY2gociA9PiByLnNldFRDUFRvKHRjcC5wb3NpdGlvbiwgdGNwLnJvdGF0aW9uUXVhdGVybmlvbikpXG4gICAgICByZW5kZXJpbmcgPSB0cnVlXG4gIH0gZWxzZSB7XG4gICAgICBzaGlmdCA9IG5ldyBWZWN0b3IzKC1pbnB1dHMueEF4aXMsIGlucHV0cy55QXhpcywgaW5wdXRzLnpBeGlzKS5zY2FsZShzY2FsZSowLjMpIC8vIFRPRE8gcm90YXRlIHZpZXdlciBwb3NcbiAgICAgIGlmIChzaGlmdC5sZW5ndGgoKSA+IDAgfHwgZm9yY2V1cGRhdGUpe1xuICAgICAgICAvL3RvZG9cbiAgICAgICAgIC8vIHRjcC5wb3NpdGlvbiA9IHRjcC5wb3NpdGlvbi5hZGQoc2hpZnQpXG4gICAgICAgICAgLy9hbGxyb2JvdHMuZm9yRWFjaChyID0+IHIuc2V0VENQVG8odGNwLnBvc2l0aW9uLCB0Y3Aucm90YXRpb25RdWF0ZXJuaW9uKSlcbiAgICAgICAgICByZW5kZXJpbmcgPSB0cnVlXG4gICAgICB9XG4gIH1cbiAgdHJ5e1xuICAgICAgaWYgKGlucHV0Q29udHJvbGxlci5jaGFuZ2VkSW5wdXRzLnRvb2wxICYmIGlucHV0cy50b29sMSA+PSAwLjUpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdHcmlwcGluZycpXG4gICAgICAgICAgLypcbiAgICAgICAgICBpZiAoY29uZU1hdGVyaWFsLmRpZmZ1c2VDb2xvci5lcXVhbHMoQ29sb3IzLkdyYXkoKSkpe1xuICAgICAgICAgICAgICBjb25lTWF0ZXJpYWwuZGlmZnVzZUNvbG9yID0gQ29sb3IzLkJsYWNrKClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dyaXBwaW5nJylcbiAgICAgICAgICAgICAgLy9yb2JvdEludGVyZmFjZS5zZW5kKENvbW1hbmRGYWN0b3J5LlNldEVuZEVmZmVjdG9yKCdHcmlwcGluZycsIDEuMCkpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uZU1hdGVyaWFsLmRpZmZ1c2VDb2xvciA9IENvbG9yMy5HcmF5KClcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlbGVhc2luZycpXG4gICAgICAgICAgICAgIC8vcm9ib3RJbnRlcmZhY2Uuc2VuZChDb21tYW5kRmFjdG9yeS5TZXRFbmRFZmZlY3RvcignUmVsZWFzaW5nJywgMC4wKSlcbiAgICAgICAgICB9ICovXG4gICAgICB9XG4gIH0gY2F0Y2ggKGUpe1xuICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKVxuICB9XG59XG5jb25zdCByb2JvdERhdGEgPSBbXG5cblxuXG5cbiAge1xuICAgICAgcGF0aDogXCJyb2JvdC9mZXN0b19kZXNjcmlwdGlvbi91cmRmL2V4Y200MC51cmRmanNvblwiLFxuICAgICAgcG9zOiBuZXcgVmVjdG9yMygwLCAwLCAwKSxcbiAgICAgIHJvdDogZXVsZXJUb1F1YXRlcm5pb24obmV3IFZlY3RvcjMoMCwgMCwgMCkpLFxuICAgICAgY2hhaW5zOiBbe1xuICAgICAgICAgIGJhc2U6ICdiYXNlX2xpbmsnLFxuICAgICAgICAgIGZsYW5nZTogJ2F4aXMzJyxcbiAgICAgICAgICBpazogJ2NhcnRlc2lhbmlrJyxcbiAgICAgICAgICB0b29sczogW3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IzKDAsIDAsIC0wLjA1KSxcbiAgICAgICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uOiBldWxlclRvUXVhdGVybmlvbihuZXcgVmVjdG9yMygwLCAwLCAwKSksXG4gICAgICAgICAgICAgIHR5cGU6ICd2YWN1dW1HcmlwcGVyJyxcbiAgICAgICAgICAgICAgdmlzdWFsOiB7XG4gICAgICAgICAgICAgICAgICBwYXJhbWV0ZXI6IHsgZGlhbWV0ZXI6IDAuMDEsIGhlaWdodDogMC4wNSB9LFxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IzKDAsIDAsIC0wLjAyNSksXG4gICAgICAgICAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb246IGV1bGVyVG9RdWF0ZXJuaW9uKG5ldyBWZWN0b3IzKE1hdGguUEkgLyAyLCAwLCAwKSksXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XVxuICAgICAgfV1cblxuICB9LFxuXG4gIC8ve3BhdGg6IFwicm9ib3QvcHIyX2Rlc2NyaXB0aW9uL3JvYm90cy9cIiwgZmlsZTogJ3ByMi51cmRmanNvbicsIHBvczogbmV3IFZlY3RvcjMoMCwwLDApfSxcblxuXG5dXG5jb25zdCBTaW11bGF0b3IgPSBSZWFjdC5mb3J3YXJkUmVmIDwgUHJvcHMsIEluc3RhbmNlPiAoXG4gICh7IHJ1bm5pbmcsIHpvb20sIHpvb21Nb2RlLCBvblVwZGF0ZSwgb25FeGVjdXRpb25BY3Rpb24gfTogUHJvcHMsIHJlZjogUmVmPEluc3RhbmNlPikgPT4ge1xuICAgIGNvbnN0IHNpbXVsYXRpb24gPSBob29rcy51c2VWYWx1ZSgoKSA9PiB7XG4gICAgICBjb25zdCBzaW0gPSBuZXcgU2ltdWxhdGlvbigpO1xuICAgICAgLy9zaW0uanNvbkluaXQoZGVmYXVsdFNpbXVsYXRpb25Db25maWcpO1xuICAgICAgcmV0dXJuIHNpbTtcbiAgICB9KTtcbiAgICA7XG5cbiAgICBjb25zdCBvblNjZW5lUmVhZHkgPSAoc2NlbmUpID0+IHtcbiAgICAgIC8vIFRoaXMgY3JlYXRlcyBhbmQgcG9zaXRpb25zIGEgZnJlZSBjYW1lcmEgKG5vbi1tZXNoKVxuICAgICAgXG4gICAgICB2YXIgY2FtZXJhID0gbmV3IEZyZWVDYW1lcmEoXCJjYW1lcmExXCIsIG5ldyBWZWN0b3IzKDAsIDUsIC0xMCksIHNjZW5lKTtcblxuICAgICAgLy8gVGhpcyB0YXJnZXRzIHRoZSBjYW1lcmEgdG8gc2NlbmUgb3JpZ2luXG4gICAgICBjYW1lcmEuc2V0VGFyZ2V0KFZlY3RvcjMuWmVybygpKTtcblxuICAgICAgY29uc3QgY2FudmFzID0gc2NlbmUuZ2V0RW5naW5lKCkuZ2V0UmVuZGVyaW5nQ2FudmFzKCk7XG5cbiAgICAgIC8vIFRoaXMgYXR0YWNoZXMgdGhlIGNhbWVyYSB0byB0aGUgY2FudmFzXG4gICAgICBjYW1lcmEuYXR0YWNoQ29udHJvbChjYW52YXMsIHRydWUpO1xuXG4gICAgICAvLyBUaGlzIGNyZWF0ZXMgYSBsaWdodCwgYWltaW5nIDAsMSwwIC0gdG8gdGhlIHNreSAobm9uLW1lc2gpXG4gICAgICB2YXIgbGlnaHQgPSBuZXcgSGVtaXNwaGVyaWNMaWdodChcImxpZ2h0XCIsIG5ldyBWZWN0b3IzKDAsIDEsIDApLCBzY2VuZSk7XG5cbiAgICAgIC8vIERlZmF1bHQgaW50ZW5zaXR5IGlzIDEuIExldCdzIGRpbSB0aGUgbGlnaHQgYSBzbWFsbCBhbW91bnRcbiAgICAgIGxpZ2h0LmludGVuc2l0eSA9IDAuNztcblxuICAgICAgaW5wdXRDb250cm9sbGVyID0gbmV3IElucHV0Q29udHJvbGxlcihzY2VuZSlcbiAgICAgIGlucHV0Q29udHJvbGxlci5zZXRJbnB1dERlZmluaXRpb24oaW5wdXRzRGVmKVxuICAgICAgaW5wdXRDb250cm9sbGVyLmN1cnJlbnRJbnB1dHNQcm9jZXNzZWQuYWRkKCgpID0+IGlucHV0c1Byb2Nlc3NlZCgpKVxuXG4gICAgICBjb25zdCBheGVzID0gY3JlYXRlQXhlcyhzY2VuZSwgMC41LCAxLjAsIHRydWUpO1xuICAgICAgYXNzZXRzTWFuYWdlciA9IG5ldyBBc3NldHNNYW5hZ2VyKHNjZW5lKVxuICAgICAgLy8gU2NlbmVMb2FkZXIuUmVnaXN0ZXJQbHVnaW4obmV3IFVSREZKU09OTG9hZGVyKCkpXG4gICAgICBjb25zb2xlLmxvZygnbmFjaCBBc3NldCBNYW5hZ2VyICcpXG4gICAgICBsb2FkUm9ib3RzKHJvYm90RGF0YSxzY2VuZSxhc3NldHNNYW5hZ2VyKTtcbiAgICAgIGNvbnNvbGUubG9nKCduYWNoIGxvYWRyb2JvdHMnKVxuICAgICAgc2NlbmUucmVuZGVyKCk7XG4gICAgICAvLyBPdXIgYnVpbHQtaW4gJ2dyb3VuZCcgc2hhcGUuXG4gICAgICBNZXNoQnVpbGRlci5DcmVhdGVHcm91bmQoXCJncm91bmRcIiwgeyB3aWR0aDogNiwgaGVpZ2h0OiA2IH0sIHNjZW5lKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogV2lsbCBydW4gb24gZXZlcnkgZnJhbWUgcmVuZGVyLiAgV2UgYXJlIHNwaW5uaW5nIHRoZSBib3ggb24geS1heGlzLlxuICAgICAqL1xuICAgIGNvbnN0IG9uUmVuZGVyID0gKHNjZW5lKSA9PiB7XG4gICAgIFxuICAgIH07XG4gIFxuICBcbiAgICAvLyBtb3VudCBzaW11bGF0b3IgaW4gdGhlIHRhcmdldCBhbmQgc2ltdWxhdGUgY29udGludW91c2x5XG4gICAgY29uc3QgW3JlbmRlclRhcmdldCwgc2V0UmVuZGVyVGFyZ2V0XSA9IFJlYWN0LnVzZVN0YXRlIDwgSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsID4gKG51bGwpO1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAocmVuZGVyVGFyZ2V0ID09PSBudWxsKSByZXR1cm4gdW5kZWZpbmVkOyBcblxuICAgICAgc2ltdWxhdGlvbi5tb3VudChyZW5kZXJUYXJnZXQpO1xuICAgICAgc2ltdWxhdGlvbi5zdGFydE1hdHRlcigpO1xuICAgICAgc2ltdWxhdGlvbi5zdGFydFJlbmRlcigpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgc2ltdWxhdGlvbi5zdG9wUmVuZGVyKCk7XG4gICAgICAgIHNpbXVsYXRpb24uc3RvcE1hdHRlcigpO1xuICAgICAgICBzaW11bGF0aW9uLnVubW91bnQoKTtcbiAgICAgIH07XG4gICAgfSwgW3JlbmRlclRhcmdldCwgc2ltdWxhdGlvbl0pO1xuIFxuICAgIC8vIE5lZWQgdG8gdXNlIGEgZGVwZW5kZW5jeSBhcnJheSBoZXJlLCBiZWNhdXNlIElkZSByZXF1aXJlcyBhIHN0YWJsZSByZWYuXG4gICAgLy8gT24gZWFjaCBjaGFuZ2UgdG8gdGhlIFNpbXVsYXRvciByZWYsIGpzb25Jbml0IGlzIHBvdGVudGlhbGx5IGNhbGxlZC5cbiAgICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHsgc2ltdWxhdGlvbiB9KSwgW3NpbXVsYXRpb25dKTtcbiAgICBcbiAgICB1c2VTdHlsZXMocyk7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG5cblxuXG4gICAgICAgIDxUb29sQmFyPlxuICAgICAgICAgIHtydW5uaW5nID8gKFxuICAgICAgICAgICAgPFRvb2xCYXJJdGVtIGtleT1cInRlcm1pbmF0ZS1hbmQtcmVzZXRcIj5cbiAgICAgICAgICAgICAgPFRvb2xCYXJJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25FeGVjdXRpb25BY3Rpb24oeyBhY3Rpb246ICdURVJNSU5BVEUnLCByZXNldDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGljb249e1Rlcm1pbmF0ZUFuZFJlc2V0SWNvbn1cbiAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Ub29sQmFySXRlbT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFRvb2xCYXJJdGVtIGtleT1cInJlc2V0XCI+XG4gICAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uRXhlY3V0aW9uQWN0aW9uKHsgYWN0aW9uOiAnUkVTRVQnIH0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgaWNvbj17UmVzZXRJY29ufVxuICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVG9vbEJhckl0ZW0+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8VG9vbEJhckl0ZW0+XG4gICAgICAgICAgICA8VG9vbEJhckljb25CdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIG9uRXhlY3V0aW9uQWN0aW9uKHsgYWN0aW9uOiAnVEVSTUlOQVRFJywgcmVzZXQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpY29uPXtUZXJtaW5hdGVJY29ufVxuICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFydW5uaW5nfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG4gICAgICAgICAgICAgIHpvb206IE1hdGgubWluKHpvb20gKyAxMCwgMTUwKSxcbiAgICAgICAgICAgICAgem9vbU1vZGU6ICdNQU5VQUwnLFxuICAgICAgICAgICAgfSl9IGljb249e1pvb21Jbkljb259IGRpc2FibGVSaXBwbGUgLz5cbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG4gICAgICAgICAgICAgIHpvb206IDEwMCxcbiAgICAgICAgICAgICAgem9vbU1vZGU6ICdNQU5VQUwnLFxuICAgICAgICAgICAgfSl9IGljb249e1pvb21SZXNldEljb259IGRpc2FibGVSaXBwbGUgLz5cbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG4gICAgICAgICAgICAgIHpvb206IE1hdGgubWF4KHpvb20gLSAxMCwgNTApLFxuICAgICAgICAgICAgICB6b29tTW9kZTogJ01BTlVBTCcsXG4gICAgICAgICAgICB9KX0gaWNvbj17Wm9vbU91dEljb259IGRpc2FibGVSaXBwbGUgLz5cbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG4gICAgICAgICAgICAgIHpvb20sXG4gICAgICAgICAgICAgIHpvb21Nb2RlOiAnRklUJyxcbiAgICAgICAgICAgIH0pfSBpY29uPXtab29tRml0SWNvbn0gZGlzYWJsZVJpcHBsZSAvPlxuICAgICAgICAgIDwvVG9vbEJhckl0ZW0+XG5cblxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG5cbiAgICAgICAgICAgIH0pfSBpY29uPXtSb3RhdGVPcmJpdEljb259IGRpc2FibGVSaXBwbGUgLz5cbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG5cbiAgICAgICAgICAgIH0pfSBpY29uPXtSZXNpemVJY29ufSBkaXNhYmxlUmlwcGxlIC8+XG4gICAgICAgICAgPC9Ub29sQmFySXRlbT5cbiAgICAgICAgICA8VG9vbEJhckl0ZW0+XG4gICAgICAgICAgICA8VG9vbEJhckljb25CdXR0b24gb25DbGljaz17KCkgPT4gb25VcGRhdGUoe1xuXG4gICAgICAgICAgICB9KX0gaWNvbj17QXJyb3dBbGxJY29ufSBkaXNhYmxlUmlwcGxlIC8+XG4gICAgICAgICAgPC9Ub29sQmFySXRlbT5cbiAgICAgICAgICA8VG9vbEJhckl0ZW0+XG5cbiAgICAgICAgICAgIFNldFRDUFxuICAgICAgICAgIDwvVG9vbEJhckl0ZW0+XG4gICAgICAgICAgPFRvb2xCYXJJdGVtPlxuICAgICAgICAgICAgPFRvb2xCYXJJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uVXBkYXRlKHtcblxuICAgICAgICAgICAgfSl9IGljb249e1JvYm90SW5kdXN0cmlhbEljb259IGRpc2FibGVSaXBwbGUgLz5cbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuXG5cbiAgICAgICAgPC9Ub29sQmFyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2ltdWxhdGlvbjNEXCI+XG4gICAgICAgICAgPERlZmF1bHRQbGF5Z3JvdW5kIGFudGlhbGlhcyBvblNjZW5lUmVhZHk9e29uU2NlbmVSZWFkeX0gb25SZW5kZXI9e29uUmVuZGVyfSBpZD1cIm15LWNhbnZhc1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuICAgICk7XG4gIH0sXG4pO1xuXG5leHBvcnQgdHlwZSBTaW11bGF0b3JUeXBlID0gUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU2ltdWxhdG9yPjtcblxuZXhwb3J0IGRlZmF1bHQgU2ltdWxhdG9yO1xuIiwiXG4gICAgdmFyIHJlZnMgPSAwO1xuICAgIHZhciBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTMhLi9TaW11bGF0b3Iuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvaW5zZXJ0Q3NzLmpzXCIpO1xuICAgIHZhciBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuXG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3NzLmxvY2FscyB8fCB7fTtcbiAgICBleHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIGV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gJycgKyBjc3M7IH07XG4gICAgZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG5cbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctcnVsZXMtMyEuL1NpbXVsYXRvci5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LXJ1bGVzLTMhLi9TaW11bGF0b3Iuc2Nzc1wiKTtcbiAgICAgICAgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJpbXBvcnQge2V1bGVyVG9RdWF0ZXJuaW9ufSBmcm9tICdldWxlcnV0aWwnO1xuaW1wb3J0IHtcbiAgICBWZWN0b3IzLFxuICAgIEFzc2V0Q29udGFpbmVyLFxuICAgIFF1YXRlcm5pb24sXG4gICAgVHJhbnNmb3JtTm9kZSxcbiAgICBTdGFuZGFyZE1hdGVyaWFsLFxuICAgIE1lc2hCdWlsZGVyLFxuICAgIFRvb2xzLFxuICAgIEFzc2V0c01hbmFnZXIsXG4gICAgQ29sb3IzLFxuICAgIFNjZW5lTG9hZGVyXG59IGZyb20gXCJAYmFieWxvbmpzL2NvcmVcIjtcbmltcG9ydCAgUm9ib3QgZnJvbSBcIndlYnJvYi9zcmMvcm9ib3QvUm9ib3RcIjtcbmltcG9ydCBKb2ludCBmcm9tIFwid2Vicm9iL3NyYy9yb2JvdC9Kb2ludFwiO1xuaW1wb3J0IGNyZWF0ZUF4ZXMgZnJvbSBcIndlYnJvYi9zcmMvQXhlc0hlbHBlclwiO1xuXG5cbmZ1bmN0aW9uIHBhcnNlVmVjdG9yKHZhbCkge1xuICAgIGlmICghdmFsKSByZXR1cm4gVmVjdG9yMy5aZXJvKCk7XG4gICAgcmV0dXJuIFZlY3RvcjMuRnJvbUFycmF5KHZhbC50cmltKCkuc3BsaXQoL1xccysvZykubWFwKHBhcnNlRmxvYXQpKTtcbn1cblxuZnVuY3Rpb24gc3BsaXRGb2xkZXJQYXRoKHBhdGgpe1xuICAgIGNvbnN0IHNlcEluZGV4ID0gcGF0aC5sYXN0SW5kZXhPZignLycpKzE7XG4gICAgcmV0dXJuIFtwYXRoLnN1YnN0cigwLCBzZXBJbmRleCksIHBhdGguc3Vic3RyKHNlcEluZGV4KV1cbn1cblxuLyoqXG4gKiBVUkRGIEpTT04gbG9hZGVyLlxuICogVGhpcyBpcyBhIGJhYnlsb24gc2NlbmUgbG9hZGVyIHBsdWdpbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVVJERkpTT05Mb2FkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICBcbiAgICAgICAgdGhpcy5hc3NldHNNYW5hZ2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbXBvcnRWaXN1YWwgPSB0cnVlO1xuICAgICAgICB0aGlzLmltcG9ydENvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLm92ZXJyaWRlTWVzaE1hdGVyaWFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFja2FnZVBhdGggPSAncm9ib3QvJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBuYW1lIG9mIHRoZSBwbHVnaW4uXG4gICAgICovXG4gICAgbmFtZSA9IFwidXJkZmpzb25cIjtcblxuXG4gICAgZXh0ZW5zaW9ucyA9IHtcbiAgICAgICAgXCIudXJkZmpzb25cIjogeyBpc0JpbmFyeTogZmFsc2UgfSxcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTG9hZCBpbnRvIGEgc2NlbmUuXG4gICAgICogQHBhcmFtIHNjZW5lIFRoZSBzY2VuZSB0byBsb2FkIGludG9cbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBpbXBvcnRcbiAgICAgKiBAcGFyYW0gcm9vdFVybCBUaGUgcm9vdCB1cmwgZm9yIHNjZW5lIGFuZCByZXNvdXJjZXNcbiAgICAgKiBAcGFyYW0gb25FcnJvciBUaGUgY2FsbGJhY2sgd2hlbiBpbXBvcnQgZmFpbHNcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHN1Y2Nlc3NmdWwgb3IgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgbG9hZChzY2VuZSwgZGF0YSwgcm9vdFVybCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImljaCBiaW4gaGllclwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1wb3J0TWVzaChudWxsLCBzY2VuZSwgZGF0YSwgcm9vdFVybCwgbnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBpbnRvIGFuIGFzc2V0IGNvbnRhaW5lci5cbiAgICAgKiBAcGFyYW0gc2NlbmUgVGhlIHNjZW5lIHRvIGxvYWQgaW50b1xuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHRvIGltcG9ydFxuICAgICAqIEBwYXJhbSByb290VXJsIFRoZSByb290IHVybCBmb3Igc2NlbmUgYW5kIHJlc291cmNlc1xuICAgICAqIEBwYXJhbSBvbkVycm9yIFRoZSBjYWxsYmFjayB3aGVuIGltcG9ydCBmYWlsc1xuICAgICAqIEByZXR1cm5zIFRoZSBsb2FkZWQgYXNzZXQgY29udGFpbmVyXG4gICAgICovXG4gICAgbG9hZEFzc2V0Q29udGFpbmVyKHNjZW5lLCBkYXRhLCByb290VXJsLCBvbkVycm9yKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBBc3NldENvbnRhaW5lcihzY2VuZSk7XG4gICAgICAgIHNjZW5lLl9ibG9ja0VudGl0eUNvbGxlY3Rpb24gPSB0cnVlO1xuICAgICAgICB0aGlzLmltcG9ydE1lc2gobnVsbCwgc2NlbmUsIGRhdGEsIHJvb3RVcmwsIGNvbnRhaW5lci5tZXNoZXMsIG51bGwsIG51bGwpO1xuICAgICAgICBzY2VuZS5fYmxvY2tFbnRpdHlDb2xsZWN0aW9uID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW1wb3J0IG1lc2hlcyBpbnRvIGEgc2NlbmUuXG4gICAgICogQHBhcmFtIG1lc2hlc05hbWVzIEFuIGFycmF5IG9mIG1lc2ggbmFtZXMsIGEgc2luZ2xlIG1lc2ggbmFtZSwgb3IgZW1wdHkgc3RyaW5nIGZvciBhbGwgbWVzaGVzIHRoYXQgZmlsdGVyIHdoYXQgbWVzaGVzIGFyZSBpbXBvcnRlZFxuICAgICAqIEBwYXJhbSBzY2VuZSBUaGUgc2NlbmUgdG8gaW1wb3J0IGludG9cbiAgICAgKiBAcGFyYW0gZGF0YSBUaGUgZGF0YSB0byBpbXBvcnRcbiAgICAgKiBAcGFyYW0gcm9vdFVybCBUaGUgcm9vdCB1cmwgZm9yIHNjZW5lIGFuZCByZXNvdXJjZXNcbiAgICAgKiBAcGFyYW0gbWVzaGVzIFRoZSBtZXNoZXMgYXJyYXkgdG8gaW1wb3J0IGludG9cbiAgICAgKiBAcGFyYW0gcGFydGljbGVTeXN0ZW1zIFRoZSBwYXJ0aWNsZSBzeXN0ZW1zIGFycmF5IHRvIGltcG9ydCBpbnRvXG4gICAgICogQHBhcmFtIHNrZWxldG9ucyBUaGUgc2tlbGV0b25zIGFycmF5IHRvIGltcG9ydCBpbnRvXG4gICAgICogQHBhcmFtIG9uRXJyb3IgVGhlIGNhbGxiYWNrIHdoZW4gaW1wb3J0IGZhaWxzXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiBzdWNjZXNzZnVsIG9yIGZhbHNlIG90aGVyd2lzZVxuICAgICAqL1xuICAgIGltcG9ydE1lc2gobWVzaGVzTmFtZXMsIHNjZW5lLCBkYXRhLCByb290VXJsLCBtZXNoZXMsIHBhcnRpY2xlU3lzdGVtcywgc2tlbGV0b24pIHtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzID0geydEZWZhdWx0TWF0ZXJpYWwnOiBuZXcgU3RhbmRhcmRNYXRlcmlhbCgnRGVmYXVsdE1hdGVyaWFsJywgc2NlbmUpfTtcbiAgICAgICAgY29uc3QgYXNzZXRzTWFuYWdlciA9IHRoaXMuYXNzZXRzTWFuYWdlciB8fCBuZXcgQXNzZXRzTWFuYWdlcihzY2VuZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhICE9PSBcIm9iamVjdFwiKXtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNvbnZlcnQgdG8gc3RyaW5nXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyYXlfYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gICAgICAgICAgICAgICAgbGV0IHN0ciA9ICcnO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5ieXRlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYXJyYXlfYnVmZmVyW2ldKTsgLy8gaW1wbGljaXRseSBhc3N1bWVzIGxpdHRsZS1lbmRpYW5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2Uoc3RyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRhdGEgIT09IFwib2JqZWN0XCIpe1xuICAgICAgICAgICAgVG9vbHMuRXJyb3IoXCJVUkRGSlNPTkxvYWRlcjogSW52YWxpZCBkYXRhIGZvcm1hdCBwcm92aWRlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb2JvdERhdGEgPSBkYXRhLnJvYm90O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW1wb3J0aW5nIHJvYm90RGF0YTogXCIrcm9ib3REYXRhLm5hbWUpXG4gICAgICAgIGNvbnN0IHJvYm90ID0gbmV3IFJvYm90KHJvYm90RGF0YS5uYW1lLCBzY2VuZSlcbiAgICAgICAgLy9yb2JvdC5yb3RhdGlvblF1YXRlcm5pb24gPSBmcm9tUm90YXRpb25cbiAgICAgICAgLy9yb2JvdC5zY2FsZSA9IGZyb21TY2FsZVxuXG4gICAgICAgIGlmIChyb2JvdERhdGEubWF0ZXJpYWwpe1xuICAgICAgICAgICAgcm9ib3REYXRhLm1hdGVyaWFsLmZvckVhY2gobSA9PiB0aGlzLmltcG9ydE1hdGVyaWFsKG0sIG1hdGVyaWFscywgYXNzZXRzTWFuYWdlciwgc2NlbmUpKTtcbiAgICAgICAgfVxuICAgICAgICByb2JvdERhdGEubGluay5mb3JFYWNoKGwgPT4gdGhpcy5pbXBvcnRMaW5rKGwsIHJvYm90LCBzY2VuZSwgbWF0ZXJpYWxzLCBhc3NldHNNYW5hZ2VyKSk7XG4gICAgICAgIHJvYm90RGF0YS5qb2ludC5mb3JFYWNoKChqLGluZGV4KSA9PiB0aGlzLmltcG9ydEpvaW50KGosIHJvYm90LCBpbmRleCwgc2NlbmUpKTtcblxuICAgICAgICByb2JvdC5yb290TGluayA9IF8uZmluZChyb2JvdC5saW5rcywgbCA9PiBsLnBhcmVudCA9PT0gbnVsbClcbiAgICAgICAgcm9ib3Qucm9vdExpbmsucGFyZW50ID0gcm9ib3RcblxuICAgICAgICAvKlxuICAgICAgICBPYmplY3QudmFsdWVzKHJvYm90LmxpbmtzKS5mb3JFYWNoKGwgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkFkZGluZyBheGlzIHRvIFwiK2wubmFtZSlcbiAgICAgICAgICAgIGNvbnN0IGF4ZXMgPSBjcmVhdGVBeGVzKHNjZW5lLCAwLjIsIDAuMywgZmFsc2UpO1xuICAgICAgICAgICAgYXhlcy5wYXJlbnQgPSBsXG4gICAgICAgIH0pOyovXG5cbiAgICAgICAgaWYgKHRoaXMuYXNzZXRzTWFuYWdlciAhPT0gYXNzZXRzTWFuYWdlcikgYXNzZXRzTWFuYWdlci5sb2FkKClcblxuICAgICAgICBpZiAobWVzaGVzKSB7XG4gICAgICAgICAgICBtZXNoZXMucHVzaChyb2JvdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaW1wb3J0Sm9pbnQoam9pbnREYXRhLCByb2JvdCwgaW5kZXgsIHNjZW5lKSB7XG4gICAgICAgIGxldCBqb2ludCA9IG51bGw7XG4gICAgICAgIGpvaW50ID0gbmV3IEpvaW50KGpvaW50RGF0YS5uYW1lLCBzY2VuZSk7XG4gICAgICAgIGpvaW50LmluZGV4ID0gaW5kZXhcbiAgICAgICAgcm9ib3Quam9pbnRzW2pvaW50RGF0YS5uYW1lXSA9IGpvaW50XG4gICAgICAgIGpvaW50LmpvaW50VHlwZSA9IGpvaW50RGF0YS50eXBlO1xuXG4gICAgICAgIGNvbnN0IGNoaWxkID0gcm9ib3QubGlua3Nbam9pbnREYXRhLmNoaWxkLmxpbmtdO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSByb2JvdC5saW5rc1tqb2ludERhdGEucGFyZW50LmxpbmtdXG5cbiAgICAgICAgY2hpbGQucGFyZW50ID0gam9pbnRcbiAgICAgICAgam9pbnQucGFyZW50ID0gcGFyZW50XG5cbiAgICAgICAgaWYgKGpvaW50RGF0YS5vcmlnaW4pe1xuICAgICAgICAgICAgam9pbnQucG9zaXRpb24gPSBwYXJzZVZlY3Rvcihqb2ludERhdGEub3JpZ2luLnh5eik7XG4gICAgICAgICAgICBldWxlclRvUXVhdGVybmlvbihwYXJzZVZlY3Rvcihqb2ludERhdGEub3JpZ2luLnJweSksICdYWVonLCBqb2ludC5yb3RhdGlvblF1YXRlcm5pb24pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGpvaW50RGF0YS5saW1pdCl7XG4gICAgICAgICAgICBqb2ludC5saW1pdC5sb3dlciA9IHBhcnNlRmxvYXQoam9pbnREYXRhLmxpbWl0Lmxvd2VyKTtcbiAgICAgICAgICAgIGpvaW50LmxpbWl0LnVwcGVyID0gcGFyc2VGbG9hdChqb2ludERhdGEubGltaXQudXBwZXIpO1xuICAgICAgICAgICAgam9pbnQudmVsb2NpdHkgPSBwYXJzZUZsb2F0KGpvaW50RGF0YS5saW1pdC52ZWxvY2l0eSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqb2ludERhdGEuYXhpcykge1xuICAgICAgICAgICAgam9pbnQuYXhpcyA9IHBhcnNlVmVjdG9yKGpvaW50RGF0YS5heGlzLnh5eik7XG4gICAgICAgICAgICBqb2ludC5heGlzLm5vcm1hbGl6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW1wb3J0TGluayhsaW5rRGF0YSwgcm9ib3QsIHNjZW5lLCBtYXRlcmlhbHMsIGFzc2V0c01hbmFnZXIpIHtcbiAgICAgICAgY29uc3QgbGluayA9IG5ldyBUcmFuc2Zvcm1Ob2RlKGxpbmtEYXRhLm5hbWUsIHNjZW5lKTtcbiAgICAgICAgcm9ib3QubGlua3NbbGlua0RhdGEubmFtZV0gPSBsaW5rXG4gICAgICAgIGxpbmsucm90YXRpb25RdWF0ZXJuaW9uID0gUXVhdGVybmlvbi5JZGVudGl0eSgpXG5cbiAgICAgICAgaWYgKHRoaXMuaW1wb3J0VmlzdWFsICYmIGxpbmtEYXRhLnZpc3VhbCkge1xuICAgICAgICAgICAgaWYgKCFfLmlzQXJyYXkobGlua0RhdGEudmlzdWFsKSkgbGlua0RhdGEudmlzdWFsID0gW2xpbmtEYXRhLnZpc3VhbF07XG4gICAgICAgICAgICBsaW5rRGF0YS52aXN1YWwuZm9yRWFjaCh2aXN1YWwgPT4gdGhpcy5pbXBvcnRMaW5rRWxlbWVudCh2aXN1YWwsIGxpbmssICdfdmlzdWFsJywgcm9ib3QudmlzdWFsLCBtYXRlcmlhbHMsIGFzc2V0c01hbmFnZXIsIHNjZW5lKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW1wb3J0Q29sbGlzaW9uICYmIGxpbmtEYXRhLmNvbGxpc2lvbikge1xuICAgICAgICAgICAgaWYgKCFfLmlzQXJyYXkobGlua0RhdGEuY29sbGlzaW9uKSkgbGlua0RhdGEuY29sbGlzaW9uID0gW2xpbmtEYXRhLmNvbGxpc2lvbl07XG4gICAgICAgICAgICBsaW5rRGF0YS5jb2xsaXNpb24uZm9yRWFjaChjb2xsaXNpb24gPT4gdGhpcy5pbXBvcnRMaW5rRWxlbWVudChjb2xsaXNpb24sIGxpbmssICdfY29sbGlzaW9uJywgcm9ib3QuY29sbGlzaW9uLCBtYXRlcmlhbHMsIGFzc2V0c01hbmFnZXIsIHNjZW5lKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbXBvcnRMaW5rRWxlbWVudChsaW5rRGF0YSwgcGFyZW50LCBuYW1lc3VmZml4LCBjb2xsZWN0aW9uLCBtYXRlcmlhbHMsIGFzc2V0c01hbmFnZXIsIHNjZW5lKSB7XG4gICAgICAgIGxldCBlbGVtZW50TmFtZSA9IGxpbmtEYXRhLm5hbWVcbiAgICAgICAgaWYgKCFlbGVtZW50TmFtZSkgZWxlbWVudE5hbWUgPSBwYXJlbnQubmFtZSArIG5hbWVzdWZmaXhcblxuICAgICAgICBsZXQgbWF0ZXJpYWwgPSBudWxsO1xuICAgICAgICBpZiAobGlua0RhdGEubWF0ZXJpYWwpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsTmFtZSA9IGxpbmtEYXRhLm1hdGVyaWFsLm5hbWU7XG4gICAgICAgICAgICBpZiAobWF0ZXJpYWxOYW1lICYmIG1hdGVyaWFsTmFtZSBpbiBtYXRlcmlhbHMpIHtcbiAgICAgICAgICAgICAgICBtYXRlcmlhbCA9IG1hdGVyaWFsc1ttYXRlcmlhbE5hbWVdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtYXRlcmlhbCA9IHRoaXMuaW1wb3J0TWF0ZXJpYWwobGlua0RhdGEubWF0ZXJpYWwsIG1hdGVyaWFscywgYXNzZXRzTWFuYWdlciwgc2NlbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF0ZXJpYWwgPSBtYXRlcmlhbHNbJ0RlZmF1bHRNYXRlcmlhbCddO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IG5ldyBUcmFuc2Zvcm1Ob2RlKGVsZW1lbnROYW1lLCBzY2VuZSlcbiAgICAgICAgZWxlbWVudC5yb3RhdGlvblF1YXRlcm5pb24gPSBRdWF0ZXJuaW9uLklkZW50aXR5KClcblxuICAgICAgICBlbGVtZW50LnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgY29sbGVjdGlvbltlbGVtZW50TmFtZV0gPSBlbGVtZW50O1xuXG4gICAgICAgIGlmIChsaW5rRGF0YS5vcmlnaW4pe1xuICAgICAgICAgICAgZWxlbWVudC5wb3NpdGlvbiA9IHBhcnNlVmVjdG9yKGxpbmtEYXRhLm9yaWdpbi54eXopO1xuICAgICAgICAgICAgZXVsZXJUb1F1YXRlcm5pb24ocGFyc2VWZWN0b3IobGlua0RhdGEub3JpZ2luLnJweSksICdYWVonLCBlbGVtZW50LnJvdGF0aW9uUXVhdGVybmlvbilcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaW5rRGF0YS5nZW9tZXRyeSl7XG4gICAgICAgICAgICBjb25zdCBnZW9tID0gbGlua0RhdGEuZ2VvbWV0cnlcbiAgICAgICAgICAgIGlmIChnZW9tLm1lc2gpe1xuICAgICAgICAgICAgICAgIHRoaXMuaW1wb3J0TWVzaFJlZmVyZW5jZShnZW9tLm1lc2guZmlsZW5hbWUsIGVsZW1lbnQsIG1hdGVyaWFsLCBhc3NldHNNYW5hZ2VyKVxuICAgICAgICAgICAgICAgIGlmIChnZW9tLm1lc2guc2NhbGUpIGVsZW1lbnQuc2NhbGUgPSBwYXJzZVZlY3RvcihnZW9tLm1lc2guc2NhbGUpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdlb20uYm94KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHBhcnNlVmVjdG9yKGdlb20uYm94LnNpemUpIHx8IFZlY3RvcjMuT25lKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYm94ID0gTWVzaEJ1aWxkZXIuQ3JlYXRlQm94KGVsZW1lbnROYW1lK1wiQm94XCIsIHt3aWR0aDogc2l6ZS54LCBkZXB0aDogc2l6ZS55LCAgaGVpZ2h0OiBzaXplLnp9LCBzY2VuZSk7XG4gICAgICAgICAgICAgICAgYm94Lm1hdGVyaWFsID0gbWF0ZXJpYWw7XG4gICAgICAgICAgICAgICAgYm94LnBhcmVudCA9IGVsZW1lbnRcbiAgICAgICAgICAgICAgICBib3gucm90YXRpb24uc2V0KE1hdGguUEkvMiwgMCwgMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdlb20uc3BoZXJlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gcGFyc2VGbG9hdChnZW9tLnNwaGVyZS5yYWRpdXMpIHx8IDE7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BoZXJlID0gTWVzaEJ1aWxkZXIuQ3JlYXRlU3BoZXJlKGVsZW1lbnROYW1lK1wiU3BoZXJlXCIsIHtkaWFtZXRlcjogcmFkaXVzKjJ9LCBzY2VuZSk7XG4gICAgICAgICAgICAgICAgc3BoZXJlLm1hdGVyaWFsID0gbWF0ZXJpYWw7XG4gICAgICAgICAgICAgICAgc3BoZXJlLnBhcmVudCA9IGVsZW1lbnRcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2VvbS5jeWxpbmRlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IHBhcnNlRmxvYXQoZ2VvbS5jeWxpbmRlci5yYWRpdXMpIHx8IDE7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gcGFyc2VGbG9hdChnZW9tLmN5bGluZGVyLmxlbmd0aCkgfHwgMTtcbiAgICAgICAgICAgICAgICBjb25zdCBjeWxpbmRlciA9IE1lc2hCdWlsZGVyLkNyZWF0ZUN5bGluZGVyKGVsZW1lbnROYW1lK1wiQ3lsaW5kZXJcIiwge2hlaWdodDogbGVuZ3RoLCBkaWFtZXRlcjogcmFkaXVzKjJ9LCBzY2VuZSk7XG4gICAgICAgICAgICAgICAgY3lsaW5kZXIubWF0ZXJpYWwgPSBtYXRlcmlhbDtcbiAgICAgICAgICAgICAgICBjeWxpbmRlci5wYXJlbnQgPSBlbGVtZW50XG4gICAgICAgICAgICAgICAgY3lsaW5kZXIucm90YXRpb24uc2V0KE1hdGguUEkvMiwgMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9XG5cbiAgICBpbXBvcnRNZXNoUmVmZXJlbmNlKHBhdGgsIHBhcmVudCwgbWF0ZXJpYWwsIGFzc2V0c01hbmFnZXIpe1xuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMucmVzb2x2ZVBhdGgocGF0aCk7XG4gICAgICAgIC8vIGZpbGUgcGF0aCBpcyBudWxsIGlmIGEgcGFja2FnZSBkaXJlY3RvcnkgaXMgbm90IHByb3ZpZGVkLlxuICAgICAgICBpZiAoZmlsZVBhdGggIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IFtmb2xkZXIsIGZpbGVdID0gc3BsaXRGb2xkZXJQYXRoKGZpbGVQYXRoKVxuICAgICAgICAgICAgY29uc3QgbWVzaFRhc2sgPSBhc3NldHNNYW5hZ2VyLmFkZE1lc2hUYXNrKFwibWVzaFRhc2tcIitmaWxlLCBcIlwiLCBmb2xkZXIsIGZpbGUpO1xuICAgICAgICAgICAgbWVzaFRhc2sub25TdWNjZXNzID0gICgodGFzaykgPT4ge1xuICAgICAgICAgICAgICAgIHRhc2subG9hZGVkTWVzaGVzLmZvckVhY2gobSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG0ucGFyZW50ID0gcGFyZW50XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxlLmVuZHNXaXRoKCcuc3RsJykpIG0ucm90YXRpb24uc2V0KE1hdGguUEkvMiwgMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm92ZXJyaWRlTWVzaE1hdGVyaWFsIHx8ICFtLm1hdGVyaWFsKSBtLm1hdGVyaWFsID0gbWF0ZXJpYWw7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBtZXNoVGFzay5vbkVycm9yID0gKCh0YXNrLCBtc2csIGV4KSA9PlxuICAgICAgICAgICAgICAgIFRvb2xzLkVycm9yKCdVUkRGSlNPTkxvYWRlcjogRXJyb3IgbG9hZGluZyBtZXNoOicrbXNnLCBleCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbXBvcnRNYXRlcmlhbChtYXRlcmlhbERhdGEsIG1hdGVyaWFscywgYXNzZXRzTWFuYWdlciwgc2NlbmUpIHtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgU3RhbmRhcmRNYXRlcmlhbChtYXRlcmlhbERhdGEubmFtZSwgc2NlbmUpO1xuICAgICAgICBtYXRlcmlhbHNbbWF0ZXJpYWxEYXRhLm5hbWVdID0gbWF0ZXJpYWxcbiAgICAgICAgaWYgKG1hdGVyaWFsRGF0YS5jb2xvcikge1xuICAgICAgICAgICAgY29uc3QgcmdiYSA9IG1hdGVyaWFsRGF0YS5jb2xvci5yZ2JhLnNwbGl0KC9cXHMvZykubWFwKHBhcnNlRmxvYXQpXG4gICAgICAgICAgICBtYXRlcmlhbC5kaWZmdXNlQ29sb3IgPSBuZXcgQ29sb3IzKHJnYmFbMF0sIHJnYmFbMV0sIHJnYmFbMl0pO1xuICAgICAgICAgICAgbWF0ZXJpYWwub3BhY2l0eSA9IHJnYmFbM107XG4gICAgICAgICAgICBtYXRlcmlhbC50cmFuc3BhcmVudCA9IHJnYmFbM10gPCAxO1xuICAgICAgICAgICAgbWF0ZXJpYWwuZGlzYWJsZURlcHRoV3JpdGUgPSBtYXRlcmlhbC50cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0ZXJpYWxEYXRhLnRleHR1cmUpe1xuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLnJlc29sdmVQYXRoKG1hdGVyaWFsRGF0YS50ZXh0dXJlLmZpbGVuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVUYXNrID0gYXNzZXRzTWFuYWdlci5hZGRUZXh0dXJlVGFzayhcInRleHR1cmVUYXNrXCIrbWF0ZXJpYWxEYXRhLnRleHR1cmUuZmlsZW5hbWUsIGZpbGVQYXRoKTtcbiAgICAgICAgICAgIHRleHR1cmVUYXNrLm9uU3VjY2VzcyA9ICgodGFzaykgPT5cbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5kaWZmdXNlVGV4dHVyZSA9IHRhc2sudGV4dHVyZSlcbiAgICAgICAgICAgIHRleHR1cmVUYXNrLm9uRXJyb3IgPSAoKHRhc2ssIG1zZywgZXgpID0+XG4gICAgICAgICAgICAgICAgVG9vbHMuRXJyb3IoJ1VSREZKU09OTG9hZGVyOiBFcnJvciBsb2FkaW5nIG1lc2g6Jyttc2csIGV4KSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0ZXJpYWxcbiAgICB9XG5cbiAgICByZXNvbHZlUGF0aChwYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhY2thZ2VQYXRoICsgcGF0aC5yZXBsYWNlKC9ecGFja2FnZTpcXC9cXC8vLCAnJylcbiAgICB9XG59XG5cbmlmIChTY2VuZUxvYWRlcikge1xuICAgIFNjZW5lTG9hZGVyLlJlZ2lzdGVyUGx1Z2luKG5ldyBVUkRGSlNPTkxvYWRlcigpKTtcbiAgICBjb25zb2xlLmxvZygnUmVnaXN0ZXJlZCBVUkRGSlNPTkxvYWRlcicpXG59IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwiQ291bGQgbm90IHJlZ2lzdGVyIFVSREZKU09OTG9hZGVyXCIpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHhtbCB4bWxucz1cXFwiaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYmxvY2tseS94bWxcXFwiPlxcbiAgPGJsb2NrIHR5cGU9XFxcInNpbXVsYXRvcl9yb290XFxcIiBpZD1cXFwiVWQwdDVlT2J5T0MrVGdCMiFmdC9cXFwiIHg9XFxcIi01MFxcXCIgeT1cXFwiLTUwXFxcIj5cXG4gICAgPGZpZWxkIG5hbWU9XFxcIlhcXFwiPjA8L2ZpZWxkPlxcbiAgICA8ZmllbGQgbmFtZT1cXFwiWVxcXCI+MDwvZmllbGQ+XFxuICAgIDxmaWVsZCBuYW1lPVxcXCJXXFxcIj43MjA8L2ZpZWxkPlxcbiAgICA8ZmllbGQgbmFtZT1cXFwiSFxcXCI+NTAwPC9maWVsZD5cXG4gICAgPGZpZWxkIG5hbWU9XFxcIldBTExTXFxcIj5GQUxTRTwvZmllbGQ+XFxuICAgIDxzdGF0ZW1lbnQgbmFtZT1cXFwiT0JKRUNUU1xcXCI+XFxuICAgICAgPGJsb2NrIHR5cGU9XFxcInNpbXVsYXRvcl9ncm91cFxcXCIgaWQ9XFxcIil4dmg0NExaQElMeHtxSSNUMVBTXFxcIj5cXG4gICAgICAgIDx2YWx1ZSBuYW1lPVxcXCJTRVRUSU5HU1xcXCI+XFxuICAgICAgICAgIDxibG9jayB0eXBlPVxcXCJzaW11bGF0b3Jfc2V0dGluZ3Nfc3RhdGljXFxcIiBpZD1cXFwifSpEdWdPeWVAaTdlQ0BaZCQvQW1cXFwiPlxcbiAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJTVEFUSUNcXFwiPlRSVUU8L2ZpZWxkPlxcbiAgICAgICAgICA8L2Jsb2NrPlxcbiAgICAgICAgPC92YWx1ZT5cXG4gICAgICAgIDxzdGF0ZW1lbnQgbmFtZT1cXFwiT0JKRUNUU1xcXCI+XFxuICAgICAgICAgIDxibG9jayB0eXBlPVxcXCJzaW11bGF0b3JfcmVjdFxcXCIgaWQ9XFxcIltgdWUxaC1OUEZ3XVVbcm55YGNTXFxcIj5cXG4gICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiV1xcXCI+MTA8L2ZpZWxkPlxcbiAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJIXFxcIj41MDA8L2ZpZWxkPlxcbiAgICAgICAgICAgIDx2YWx1ZSBuYW1lPVxcXCJTRVRUSU5HU1xcXCI+XFxuICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3NldHRpbmdzX2NvbG9yXFxcIiBpZD1cXFwiZEEoKnRMbVFCW15gQnhWQn5mZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiQ09MT1VSXFxcIj4jMjIyMjIyPC9maWVsZD5cXG4gICAgICAgICAgICAgICAgPHZhbHVlIG5hbWU9XFxcIk1PUkVcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxibG9jayB0eXBlPVxcXCJzaW11bGF0b3Jfc2V0dGluZ3Nfc2Vuc29yXFxcIiBpZD1cXFwiTippRjRPYStBJT9MNEhNVj8rbVhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIlNFTlNPUlxcXCI+VFJVRTwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dmFsdWUgbmFtZT1cXFwiTU9SRVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgIDxibG9jayB0eXBlPVxcXCJzaW11bGF0b3Jfc2V0dGluZ3NfbGluZVxcXCIgaWQ9XFxcInF9IV0hfTNXaXNIITk3VXIkSTYtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiTElORVxcXCI+VFJVRTwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHZhbHVlIG5hbWU9XFxcIk1PUkVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJsb2NrIHR5cGU9XFxcInNpbXVsYXRvcl9zZXR0aW5nc190cmFuc2xhdGVcXFwiIGlkPVxcXCIwSk5BNDNfMSQhWUw7Lmh3OUdhb1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJYXFxcIj4tMjAwPC9maWVsZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIllcXFwiPjA8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ibG9jaz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZhbHVlPlxcbiAgICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrPlxcbiAgICAgICAgICAgICAgICAgICAgPC92YWx1ZT5cXG4gICAgICAgICAgICAgICAgICA8L2Jsb2NrPlxcbiAgICAgICAgICAgICAgICA8L3ZhbHVlPlxcbiAgICAgICAgICAgICAgPC9ibG9jaz5cXG4gICAgICAgICAgICA8L3ZhbHVlPlxcbiAgICAgICAgICAgIDxuZXh0PlxcbiAgICAgICAgICAgICAgPGJsb2NrIHR5cGU9XFxcInNpbXVsYXRvcl9ncm91cFxcXCIgaWQ9XFxcIlRTKklpbXVQMGJiL2FmNyppdXphXFxcIj5cXG4gICAgICAgICAgICAgICAgPHZhbHVlIG5hbWU9XFxcIlNFVFRJTkdTXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3NldHRpbmdzX2NvbG9yXFxcIiBpZD1cXFwiak1XKnlXeTlFYTBtTEIqZlAzVUJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIkNPTE9VUlxcXCI+IzMzZmYzMzwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dmFsdWUgbmFtZT1cXFwiTU9SRVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgIDxibG9jayB0eXBlPVxcXCJzaW11bGF0b3Jfc2V0dGluZ3NfdHJhbnNsYXRlXFxcIiBpZD1cXFwiSWElPWFjVkkuaX1HYEd5LjVYSWlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJYXFxcIj4tMjA8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJZXFxcIj4wPC9maWVsZD5cXG4gICAgICAgICAgICAgICAgICAgICAgPC9ibG9jaz5cXG4gICAgICAgICAgICAgICAgICAgIDwvdmFsdWU+XFxuICAgICAgICAgICAgICAgICAgPC9ibG9jaz5cXG4gICAgICAgICAgICAgICAgPC92YWx1ZT5cXG4gICAgICAgICAgICAgICAgPHN0YXRlbWVudCBuYW1lPVxcXCJPQkpFQ1RTXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3JlY3RcXFwiIGlkPVxcXCJ6PWI0fHVaQDdZZjUxcnk7V1hRM1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiV1xcXCI+MTEwPC9maWVsZD5cXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJIXFxcIj40PC9maWVsZD5cXG4gICAgICAgICAgICAgICAgICAgIDx2YWx1ZSBuYW1lPVxcXCJTRVRUSU5HU1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgIDxibG9jayB0eXBlPVxcXCJzaW11bGF0b3Jfc2V0dGluZ3NfdHJhbnNsYXRlXFxcIiBpZD1cXFwiWHtHI1Bgcl98O1JkN0JPP1J5TkpcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJYXFxcIj4wPC9maWVsZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiWVxcXCI+NjA8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrPlxcbiAgICAgICAgICAgICAgICAgICAgPC92YWx1ZT5cXG4gICAgICAgICAgICAgICAgICAgIDxuZXh0PlxcbiAgICAgICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3JlY3RcXFwiIGlkPVxcXCJkejhVVyppcSg2VUcsXTJsc2J5Q1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIldcXFwiPjExMDwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIkhcXFwiPjQ8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZSBuYW1lPVxcXCJTRVRUSU5HU1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3NldHRpbmdzX3RyYW5zbGF0ZVxcXCIgaWQ9XFxcIi00eEA3YVVPYSxjekQ6aFAjP0ExXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIlhcXFwiPjA8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiWVxcXCI+LTYwPC9maWVsZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92YWx1ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmV4dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxibG9jayB0eXBlPVxcXCJzaW11bGF0b3JfcmVjdFxcXCIgaWQ9XFxcInVJUV12XlRPWn5KRys7VGwlanROXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIldcXFwiPjQ8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiSFxcXCI+MTI0PC9maWVsZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZhbHVlIG5hbWU9XFxcIlNFVFRJTkdTXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3NldHRpbmdzX3RyYW5zbGF0ZVxcXCIgaWQ9XFxcIjZeYyElWzJwX3BvRHxMOm9sMmgwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJYXFxcIj41NTwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiWVxcXCI+MDwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ibG9jaz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92YWx1ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5leHQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJsb2NrIHR5cGU9XFxcInNpbXVsYXRvcl9yZWN0XFxcIiBpZD1cXFwiWzpIXSMsJCx4R2xiWXUvSzQqSnlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIldcXFwiPjUwPC9maWVsZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJIXFxcIj4xMTY8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZhbHVlIG5hbWU9XFxcIlNFVFRJTkdTXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJsb2NrIHR5cGU9XFxcInNpbXVsYXRvcl9zZXR0aW5nc19jb2xvclxcXCIgaWQ9XFxcIjFDRWVkS1VAVVZqVTcoaUVqUnI9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiQ09MT1VSXFxcIj4jZmZmZmZmPC9maWVsZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmFsdWUgbmFtZT1cXFwiTU9SRVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3NldHRpbmdzX3NlbnNvclxcXCIgaWQ9XFxcInNlSClReHBuNDUtOFF6MnNSRzdQXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIlNFTlNPUlxcXCI+VFJVRTwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZSBuYW1lPVxcXCJNT1JFXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3NldHRpbmdzX3RyYW5zbGF0ZVxcXCIgaWQ9XFxcIncoQmhJejppcj9UPVd9TTAofitUXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJYXFxcIj4yODwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiWVxcXCI+MDwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmFsdWUgbmFtZT1cXFwiTU9SRVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxibG9jayB0eXBlPVxcXCJzaW11bGF0b3Jfc2V0dGluZ3NfbGFiZWxcXFwiIGlkPVxcXCIre0tdbHJKfk1nMnB2Q2ZSNVp0S1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIkxBQkVMXFxcIj5ncmVlbjwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZhbHVlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdmFsdWU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdmFsdWU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZhbHVlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmV4dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZXh0PlxcbiAgICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrPlxcbiAgICAgICAgICAgICAgICAgICAgPC9uZXh0PlxcbiAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XFxuICAgICAgICAgICAgICAgIDwvc3RhdGVtZW50PlxcbiAgICAgICAgICAgICAgICA8bmV4dD5cXG4gICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX2dyb3VwXFxcIiBpZD1cXFwic1JBcH5XWGppMEE5IUQlXTJXXmRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHZhbHVlIG5hbWU9XFxcIlNFVFRJTkdTXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgPGJsb2NrIHR5cGU9XFxcInNpbXVsYXRvcl9zZXR0aW5nc19jb2xvclxcXCIgaWQ9XFxcImh2LjVlSXpDPS8hXSl2M0BCeFhAXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiQ09MT1VSXFxcIj4jMzMzM2ZmPC9maWVsZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dmFsdWUgbmFtZT1cXFwiTU9SRVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3NldHRpbmdzX3RyYW5zbGF0ZVxcXCIgaWQ9XFxcImhrOkE3KHx+JDFofE1HekNIR1FyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIlhcXFwiPjI3MDwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJZXFxcIj4xNzA8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmFsdWUgbmFtZT1cXFwiTU9SRVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJsb2NrIHR5cGU9XFxcInNpbXVsYXRvcl9zZXR0aW5nc19yb3RhdGVcXFwiIGlkPVxcXCIjNERWeGFlQS5fTn1XUislMT11P1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiQU5HTEVcXFwiPjMxNTwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ibG9jaz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92YWx1ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC92YWx1ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgPC9ibG9jaz5cXG4gICAgICAgICAgICAgICAgICAgIDwvdmFsdWU+XFxuICAgICAgICAgICAgICAgICAgICA8c3RhdGVtZW50IG5hbWU9XFxcIk9CSkVDVFNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3JlY3RcXFwiIGlkPVxcXCIvZTgwb0I0dnhEOHJiRzhmXjp4a1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIldcXFwiPjExMDwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIkhcXFwiPjQ8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZSBuYW1lPVxcXCJTRVRUSU5HU1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3NldHRpbmdzX3RyYW5zbGF0ZVxcXCIgaWQ9XFxcImZeeXFYWC5SKkxuN1chaGUzdCU2XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIlhcXFwiPjA8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiWVxcXCI+NTA8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ibG9jaz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZhbHVlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZXh0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJsb2NrIHR5cGU9XFxcInNpbXVsYXRvcl9yZWN0XFxcIiBpZD1cXFwidCNkemNnSVVDKmIqRCxFZGBBS1VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiV1xcXCI+MTEwPC9maWVsZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIkhcXFwiPjQ8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmFsdWUgbmFtZT1cXFwiU0VUVElOR1NcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxibG9jayB0eXBlPVxcXCJzaW11bGF0b3Jfc2V0dGluZ3NfdHJhbnNsYXRlXFxcIiBpZD1cXFwiI1AoXUEwKjRsQjRIJV8jdzV+V09cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIlhcXFwiPjA8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIllcXFwiPi01MDwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ibG9jaz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92YWx1ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5leHQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJsb2NrIHR5cGU9XFxcInNpbXVsYXRvcl9yZWN0XFxcIiBpZD1cXFwiQUxYayQtOiU7MXtbIVRfT1NoRXdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIldcXFwiPjQ8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIkhcXFwiPjEwNDwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmFsdWUgbmFtZT1cXFwiU0VUVElOR1NcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3NldHRpbmdzX3RyYW5zbGF0ZVxcXCIgaWQ9XFxcInQ0biR9czIsblVHPzhWaF18R0NpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiWFxcXCI+NTU8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJZXFxcIj4wPC9maWVsZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ibG9jaz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdmFsdWU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmV4dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJsb2NrIHR5cGU9XFxcInNpbXVsYXRvcl9yZWN0XFxcIiBpZD1cXFwiY2hpbXxdcEd1WDpSU3BmUXpQeGtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJXXFxcIj41MDwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIkhcXFwiPjk2PC9maWVsZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmFsdWUgbmFtZT1cXFwiU0VUVElOR1NcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJsb2NrIHR5cGU9XFxcInNpbXVsYXRvcl9zZXR0aW5nc19jb2xvclxcXCIgaWQ9XFxcIkEyOXtObGY0Q1ZqP1dsOWFiSUV6XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIkNPTE9VUlxcXCI+I2ZmZmZmZjwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZSBuYW1lPVxcXCJNT1JFXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3NldHRpbmdzX3NlbnNvclxcXCIgaWQ9XFxcIjB8Xzt9OGtMOjo9anlaYV5aTEJTXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJTRU5TT1JcXFwiPlRSVUU8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZhbHVlIG5hbWU9XFxcIk1PUkVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3NldHRpbmdzX3RyYW5zbGF0ZVxcXCIgaWQ9XFxcIjB5R0tOfC17cjE4ei9iSCpdQz9YXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiWFxcXCI+Mjg8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJZXFxcIj4wPC9maWVsZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmFsdWUgbmFtZT1cXFwiTU9SRVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3NldHRpbmdzX2xhYmVsXFxcIiBpZD1cXFwiL28zPUtsUyNzJXMjQyNaO24pMVFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiTEFCRUxcXFwiPmJsdWU8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ibG9jaz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZhbHVlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92YWx1ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZhbHVlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ibG9jaz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZhbHVlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZXh0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmV4dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZXh0PlxcbiAgICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrPlxcbiAgICAgICAgICAgICAgICAgICAgPC9zdGF0ZW1lbnQ+XFxuICAgICAgICAgICAgICAgICAgICA8bmV4dD5cXG4gICAgICAgICAgICAgICAgICAgICAgPGJsb2NrIHR5cGU9XFxcInNpbXVsYXRvcl9ncm91cFxcXCIgaWQ9XFxcImRudm4wTz9GbGxdLUhJKkBFcFtqXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dmFsdWUgbmFtZT1cXFwiU0VUVElOR1NcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJsb2NrIHR5cGU9XFxcInNpbXVsYXRvcl9zZXR0aW5nc19jb2xvclxcXCIgaWQ9XFxcInswSCF8SDojey1UUkxoTSNGP1E6XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIkNPTE9VUlxcXCI+I2ZmZmYwMDwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZSBuYW1lPVxcXCJNT1JFXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3NldHRpbmdzX3RyYW5zbGF0ZVxcXCIgaWQ9XFxcIkNyMy95TlFwT005Z3RbeXZxTjcwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJYXFxcIj4xMzA8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIllcXFwiPi0xNzA8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZhbHVlIG5hbWU9XFxcIk1PUkVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3NldHRpbmdzX3JvdGF0ZVxcXCIgaWQ9XFxcIjU6bzIsaVprLUgsbkNSLGVyaWVQXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiQU5HTEVcXFwiPjE4MDwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZhbHVlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdmFsdWU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdmFsdWU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0YXRlbWVudCBuYW1lPVxcXCJPQkpFQ1RTXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxibG9jayB0eXBlPVxcXCJzaW11bGF0b3JfcmVjdFxcXCIgaWQ9XFxcIn4wSm4rLXJXKDl7cVEsXVYqVypCXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIldcXFwiPjExMDwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJIXFxcIj40PC9maWVsZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZhbHVlIG5hbWU9XFxcIlNFVFRJTkdTXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3NldHRpbmdzX3RyYW5zbGF0ZVxcXCIgaWQ9XFxcIl9KLVVUS0ZxYldaLXpZSmJgL0RxXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJYXFxcIj4wPC9maWVsZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJZXFxcIj40NTwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ibG9jaz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92YWx1ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5leHQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJsb2NrIHR5cGU9XFxcInNpbXVsYXRvcl9yZWN0XFxcIiBpZD1cXFwiKVYtazZdTlpFYWlPITVoIWN+Y3VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIldcXFwiPjExMDwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiSFxcXCI+NDwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmFsdWUgbmFtZT1cXFwiU0VUVElOR1NcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3NldHRpbmdzX3RyYW5zbGF0ZVxcXCIgaWQ9XFxcIlBSTmhjI24vfSsxJXFuelRqbEJDXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiWFxcXCI+MDwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIllcXFwiPi00NTwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZhbHVlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5leHQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxibG9jayB0eXBlPVxcXCJzaW11bGF0b3JfcmVjdFxcXCIgaWQ9XFxcIig6aFRQbTdOUV9zcmlxdXNpbV1pXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiV1xcXCI+NDwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIkhcXFwiPjk0PC9maWVsZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmFsdWUgbmFtZT1cXFwiU0VUVElOR1NcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJsb2NrIHR5cGU9XFxcInNpbXVsYXRvcl9zZXR0aW5nc190cmFuc2xhdGVcXFwiIGlkPVxcXCJwKCtCbFdOcV01XV9URkZlbDdGKFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJYXFxcIj41NTwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJZXFxcIj4wPC9maWVsZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92YWx1ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmV4dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxibG9jayB0eXBlPVxcXCJzaW11bGF0b3JfcmVjdFxcXCIgaWQ9XFxcImxaJFhSZm5ZeSgyLSRGWHFxb2daXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIldcXFwiPjUwPC9maWVsZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIkhcXFwiPjg2PC9maWVsZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZhbHVlIG5hbWU9XFxcIlNFVFRJTkdTXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3NldHRpbmdzX2NvbG9yXFxcIiBpZD1cXFwiRTFxTi8qfEYoS1kwV0ZCZkAzZVRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIkNPTE9VUlxcXCI+I2ZmZmZmZjwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmFsdWUgbmFtZT1cXFwiTU9SRVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxibG9jayB0eXBlPVxcXCJzaW11bGF0b3Jfc2V0dGluZ3Nfc2Vuc29yXFxcIiBpZD1cXFwiVX1wMDE4U0FNfU8zXTdFSjZhanZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJTRU5TT1JcXFwiPlRSVUU8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZSBuYW1lPVxcXCJNT1JFXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxibG9jayB0eXBlPVxcXCJzaW11bGF0b3Jfc2V0dGluZ3NfdHJhbnNsYXRlXFxcIiBpZD1cXFwiSWBhcjh8YURqaVRtIzZ6X3EoZ0JcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiWFxcXCI+Mjg8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiWVxcXCI+MDwvZmllbGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZSBuYW1lPVxcXCJNT1JFXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3NldHRpbmdzX2xhYmVsXFxcIiBpZD1cXFwiOipEREVDZVoycjlYYmtlaH0rUD1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIkxBQkVMXFxcIj55ZWxsb3c8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdmFsdWU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdmFsdWU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ZhbHVlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdmFsdWU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmV4dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ibG9jaz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmV4dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25leHQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3RhdGVtZW50PlxcbiAgICAgICAgICAgICAgICAgICAgICA8L2Jsb2NrPlxcbiAgICAgICAgICAgICAgICAgICAgPC9uZXh0PlxcbiAgICAgICAgICAgICAgICAgIDwvYmxvY2s+XFxuICAgICAgICAgICAgICAgIDwvbmV4dD5cXG4gICAgICAgICAgICAgIDwvYmxvY2s+XFxuICAgICAgICAgICAgPC9uZXh0PlxcbiAgICAgICAgICA8L2Jsb2NrPlxcbiAgICAgICAgPC9zdGF0ZW1lbnQ+XFxuICAgICAgICA8bmV4dD5cXG4gICAgICAgICAgPGJsb2NrIHR5cGU9XFxcInNpbXVsYXRvcl9yb2JvdFxcXCIgaWQ9XFxcIndALndMOkwsWjgxNmUtMkhnX15OXFxcIj5cXG4gICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiTkFNRVxcXCI+aGVkZ2Vob2c8L2ZpZWxkPlxcbiAgICAgICAgICAgIDxmaWVsZCBuYW1lPVxcXCJERUZBVUxUX1NFTlNPUlNcXFwiPlRSVUU8L2ZpZWxkPlxcbiAgICAgICAgICAgIDx2YWx1ZSBuYW1lPVxcXCJTRVRUSU5HU1xcXCI+XFxuICAgICAgICAgICAgICA8YmxvY2sgdHlwZT1cXFwic2ltdWxhdG9yX3NldHRpbmdzX3RyYW5zbGF0ZVxcXCIgaWQ9XFxcIlg/fUtIaCNwQFliQmJ3N0w9aVU7XFxcIj5cXG4gICAgICAgICAgICAgICAgPGZpZWxkIG5hbWU9XFxcIlhcXFwiPi0yNzA8L2ZpZWxkPlxcbiAgICAgICAgICAgICAgICA8ZmllbGQgbmFtZT1cXFwiWVxcXCI+MDwvZmllbGQ+XFxuICAgICAgICAgICAgICA8L2Jsb2NrPlxcbiAgICAgICAgICAgIDwvdmFsdWU+XFxuICAgICAgICAgIDwvYmxvY2s+XFxuICAgICAgICA8L25leHQ+XFxuICAgICAgPC9ibG9jaz5cXG4gICAgPC9zdGF0ZW1lbnQ+XFxuICA8L2Jsb2NrPlxcbjwveG1sPlwiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFNQTtBQU1BO0FBTUE7QUFNQTtBQU1BO0FBTUE7QUEzQ0E7QUFrREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBSkE7QUFKQTtBQUxBO0FBZ0NBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5UEE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBY0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBb0JBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBTUE7QUFNQTtBQU1BO0FBTUE7QUFNQTtBQU1BO0FBM0NBO0FBa0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFKQTtBQUpBO0FBTEE7QUErQkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUtBOzs7Ozs7O0FDbFpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBZ0JBO0FBQUE7QUFBQTtBQURBO0FBQ0E7QUFkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5UEE7QUFDQTtBQStQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyU0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==