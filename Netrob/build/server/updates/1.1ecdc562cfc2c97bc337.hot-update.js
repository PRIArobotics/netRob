require("source-map-support").install();
exports.id = 1;
exports.modules = {

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
    Object(webrob__WEBPACK_IMPORTED_MODULE_2__["loadRobots"])(robotData, scene, assetsManager);
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

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8xLjFlY2RjNTYyY2ZjMmM5N2JjMzM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvbXBvbmVudHMvaWRlL1NpbXVsYXRvci9TaW11bGF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCB7IFNjZW5lTG9hZGVyIH0gZnJvbSBcIkBiYWJ5bG9uanMvY29yZS9Mb2FkaW5nL3NjZW5lTG9hZGVyXCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSW5wdXRDb250cm9sbGVyLCBsb2FkUm9ib3RzfSBmcm9tIFwid2Vicm9iXCJcblxuLy9pbXBvcnQgY3JlYXRlQXhlcyBmcm9tIFwid2Vicm9iL3NyYy9BeGVzSGVscGVyLmpzXCI7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL3VzZVN0eWxlcyc7XG5pbXBvcnQge1xuICBFbmdpbmUsXG4gIFNjZW5lLFxuICBDb2xvcjMsXG4gIFZlY3RvcjMsXG4gIEFyY1JvdGF0ZUNhbWVyYSxcbiAgSGVtaXNwaGVyaWNMaWdodCxcbiAgRnJlZUNhbWVyYSxcbiAgVG9vbHMsXG4gIERldmljZVR5cGUsXG4gIFhib3hJbnB1dCxcbiAgRHVhbFNob2NrSW5wdXQsIFF1YXRlcm5pb25cbiAgLCBBc3NldHNNYW5hZ2VyLCBNZXNoQnVpbGRlciwgU3RhbmRhcmRNYXRlcmlhbCwgVHJhbnNmb3JtTm9kZSwgTWF0cml4LFxufSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlXCI7XG5jb25zb2xlLmxvZygnRGlyZWt0IHZvciBPblBsdWdpbkFjdGl2YXRlZE9ic2VydmFibGUnKVxuU2NlbmVMb2FkZXIuT25QbHVnaW5BY3RpdmF0ZWRPYnNlcnZhYmxlLmFkZChmdW5jdGlvbiAobG9hZGVyKSB7XG4gIGlmIChsb2FkZXIubmFtZSA9PT0gXCJ1cmRmanNvblwiKSB7XG4gICAgICBsb2FkZXIuYXNzZXRzTWFuYWdlciA9IGFzc2V0c01hbmFnZXI7XG4gICAgICBjb25zb2xlLmxvZygnSW5qZWN0ZWQgQXNzZXRNYW5hZ2VyJylcbiAgICAgIFxuICB9XG59KTtcbmNvbnNvbGUubG9nKCdEaXJla3QgbmFjaCBPblBsdWdpbkFjdGl2YXRlZE9ic2VydmFibGUnKVxuaW1wb3J0IFwiLi9VUkRGSlNPTkxvYWRlclwiXG4vL2ltcG9ydCB7VVJERkpTT05Mb2FkZXJ9IGZyb20gXCJ3ZWJyb2Ivc3JjL1VSREZKU09OTG9hZGVyXCJcbmNvbnNvbGUubG9nKCduYWNoIGltcG9ydCB1cmRmanNvbicpXG5cbmltcG9ydCB7XG4gIFRlcm1pbmF0ZUljb24sXG4gIFJlc2V0SWNvbixcbiAgVGVybWluYXRlQW5kUmVzZXRJY29uLFxuICBab29tSW5JY29uLFxuICBab29tT3V0SWNvbixcbiAgWm9vbUZpdEljb24sXG4gIFpvb21SZXNldEljb24sXG4gIFJvdGF0ZU9yYml0SWNvbixcbiAgUmVzaXplSWNvbixcbiAgUm9ib3RJbmR1c3RyaWFsSWNvbixcbiAgQXJyb3dBbGxJY29uLFxuXG59IGZyb20gJy4uLy4uL21pc2MvcGFsZXR0ZSc7XG5pbXBvcnQgKiBhcyBob29rcyBmcm9tICcuLi8uLi9taXNjL2hvb2tzJztcbmltcG9ydCB7IGV1bGVyVG9RdWF0ZXJuaW9uIH0gZnJvbSAnZXVsZXJ1dGlsL3NyYy9FdWxlclV0aWwuanMnO1xuLy9pbXBvcnQgUm9ib3QgZnJvbSAnd2Vicm9iL3NyYy9yb2JvdC9Sb2JvdC5qcydcblxuaW1wb3J0IHsgdHlwZSBFeGVjdXRpb25BY3Rpb24gfSBmcm9tICcuLi9JZGUnO1xuaW1wb3J0IFRvb2xCYXIgZnJvbSAnLi4vVG9vbEJhcic7XG5pbXBvcnQgVG9vbEJhckljb25CdXR0b24gZnJvbSAnLi4vVG9vbEJhci9Ub29sQmFySWNvbkJ1dHRvbic7XG5pbXBvcnQgVG9vbEJhckl0ZW0gZnJvbSAnLi4vVG9vbEJhci9Ub29sQmFySXRlbSc7XG5cbmltcG9ydCBzIGZyb20gJy4vU2ltdWxhdG9yLnNjc3MnO1xuXG5pbXBvcnQgeyBTaW11bGF0aW9uIH0gZnJvbSAnLi9zaW11bGF0aW9uJztcblxuaW1wb3J0IHsgZ2VuZXJhdGVDb25maWdGcm9tWG1sIH0gZnJvbSAnLi4vU2ltdWxhdG9yRWRpdG9yJztcbi8vICRGbG93RXhwZWN0RXJyb3JcbmltcG9ydCBkZWZhdWx0U2ltdWxhdGlvblhtbCBmcm9tICcuL2RlZmF1bHRfc2ltdWxhdGlvbi54bWwnO1xuLy9pbXBvcnQgSW5wdXRDb250cm9sbGVyIGZyb20gXCJ3ZWJyb2Ivc3JjL0lucHV0Q29udHJvbGxlci5qc1wiO1xuY29uc3QgZGVmYXVsdFNpbXVsYXRpb25Db25maWcgPSBnZW5lcmF0ZUNvbmZpZ0Zyb21YbWwoZGVmYXVsdFNpbXVsYXRpb25YbWwpO1xudmFyIGlucHV0Q29udHJvbGxlcjtcblxuY29uc3QgYmdJbnRlbnNpdHkgPSAwLjhcblxuXG5leHBvcnQgdHlwZSBTaW11bGF0b3Jab29tQWN0aW9uID0gJ1pPT01fSU4nIHwgJ1pPT01fMTAwJyB8ICdaT09NX09VVCcgfCAnWk9PTV9GSVQnO1xuXG5leHBvcnQgdHlwZSBDb250cm9sbGVkU3RhdGUgPSB7fFxuICB6b29tOiBudW1iZXIsXG4gICAgem9vbU1vZGU6ICdNQU5VQUwnIHwgJ0ZJVCcsXG58fTtcblxudHlwZSBQcm9wcyA9IHt8XG4gIHJ1bm5pbmc6IGJvb2xlYW4sXG4gIC4uLkNvbnRyb2xsZWRTdGF0ZSxcbiAgb25VcGRhdGU6IChzdGF0ZTogQ29udHJvbGxlZFN0YXRlKSA9PiB2b2lkIHwgUHJvbWlzZSA8IHZvaWQ+LFxuICAgIG9uRXhlY3V0aW9uQWN0aW9uOiAoYWN0aW9uOiBFeGVjdXRpb25BY3Rpb24pID0+IHZvaWQgfCBQcm9taXNlIDwgdm9pZD4sXG58fTtcbnR5cGUgSW5zdGFuY2UgPSB7fFxuICBzaW11bGF0aW9uOiBTaW11bGF0aW9uLFxufH07XG5cbmltcG9ydCBcIkBiYWJ5bG9uanMvY29yZS9EZWJ1Zy9kZWJ1Z0xheWVyXCI7IC8vIEF1Z21lbnRzIHRoZSBzY2VuZSB3aXRoIHRoZSBkZWJ1ZyBtZXRob2RzXG5pbXBvcnQgXCJAYmFieWxvbmpzL2luc3BlY3RvclwiO1xuLy9pbXBvcnQgeyBURVNUX0NNRFMgfSBmcm9tIFwid2Vicm9iL3NyYy90ZXN0L2RhdGFcIjsgLy8gSW5qZWN0cyBhIGxvY2FsIEVTNiB2ZXJzaW9uIG9mIHRoZSBpbnNwZWN0b3IgdG8gcHJldmVudCBhdXRvbWF0aWNhbGx5IHJlbHlpbmcgb24gdGhlIG5vbmUgY29tcGF0aWJsZSB2ZXJzaW9uXG5cbmNvbnN0IGlucHV0c0RlZiA9IHtcbiAgeEF4aXM6IFtcbiAgICBbRGV2aWNlVHlwZS5LZXlib2FyZCwgWy0nUycuY2hhckNvZGVBdCgwKSwgJ1cnLmNoYXJDb2RlQXQoMCldXSxcbiAgICBbRGV2aWNlVHlwZS5EdWFsU2hvY2ssIFtEdWFsU2hvY2tJbnB1dC5MU3RpY2tYQXhpc11dLFxuICAgIFtEZXZpY2VUeXBlLlhib3gsIFtYYm94SW5wdXQuTFN0aWNrWEF4aXNdXSxcbiAgICBbRGV2aWNlVHlwZS5HZW5lcmljLCBbWGJveElucHV0LkxTdGlja1hBeGlzXV0sXG4gIF0sXG4gIHlBeGlzOiBbXG4gICAgW0RldmljZVR5cGUuS2V5Ym9hcmQsIFstJ0EnLmNoYXJDb2RlQXQoMCksICdEJy5jaGFyQ29kZUF0KDApXV0sXG4gICAgW0RldmljZVR5cGUuRHVhbFNob2NrLCBbLUR1YWxTaG9ja0lucHV0LkxTdGlja1lBeGlzXV0sXG4gICAgW0RldmljZVR5cGUuWGJveCwgWy1YYm94SW5wdXQuTFN0aWNrWUF4aXNdXSxcbiAgICBbRGV2aWNlVHlwZS5HZW5lcmljLCBbLVhib3hJbnB1dC5MU3RpY2tZQXhpc11dLFxuICBdLFxuICB6QXhpczogW1xuICAgIFtEZXZpY2VUeXBlLktleWJvYXJkLCBbLSdRJy5jaGFyQ29kZUF0KDApLCAnRScuY2hhckNvZGVBdCgwKV1dLFxuICAgIFtEZXZpY2VUeXBlLkR1YWxTaG9jaywgWy1EdWFsU2hvY2tJbnB1dC5SU3RpY2tZQXhpc11dLFxuICAgIFtEZXZpY2VUeXBlLlhib3gsIFstWGJveElucHV0LlJTdGlja1lBeGlzXV0sXG4gICAgW0RldmljZVR5cGUuR2VuZXJpYywgWy1YYm94SW5wdXQuUlN0aWNrWUF4aXNdXSxcbiAgXSxcbiAgbW9kZTogW1xuICAgIFtEZXZpY2VUeXBlLktleWJvYXJkLCBbJyAnLmNoYXJDb2RlQXQoMCldXSxcbiAgICBbRGV2aWNlVHlwZS5EdWFsU2hvY2ssIFtEdWFsU2hvY2tJbnB1dC5SMSwgRHVhbFNob2NrSW5wdXQuTDFdXSxcbiAgICBbRGV2aWNlVHlwZS5YYm94LCBbWGJveElucHV0LlJCLCBYYm94SW5wdXQuTEJdXSxcbiAgICBbRGV2aWNlVHlwZS5HZW5lcmljLCBbWGJveElucHV0LlJCLCBYYm94SW5wdXQuTEJdXSxcbiAgXSxcbiAgZmFzdDogW1xuICAgIFtEZXZpY2VUeXBlLktleWJvYXJkLCBbJ08nLmNoYXJDb2RlQXQoMCldXSxcbiAgICBbRGV2aWNlVHlwZS5EdWFsU2hvY2ssIFtEdWFsU2hvY2tJbnB1dC5SMl1dLFxuICAgIFtEZXZpY2VUeXBlLlhib3gsIFtYYm94SW5wdXQuUlRdXSxcbiAgICBbRGV2aWNlVHlwZS5HZW5lcmljLCBbWGJveElucHV0LlJUXV0sXG4gIF0sXG4gIHNsb3c6IFtcbiAgICBbRGV2aWNlVHlwZS5LZXlib2FyZCwgWydMJy5jaGFyQ29kZUF0KDApXV0sXG4gICAgW0RldmljZVR5cGUuRHVhbFNob2NrLCBbRHVhbFNob2NrSW5wdXQuTDJdXSxcbiAgICBbRGV2aWNlVHlwZS5YYm94LCBbWGJveElucHV0LkxUXV0sXG4gICAgW0RldmljZVR5cGUuR2VuZXJpYywgW1hib3hJbnB1dC5MVF1dLFxuICBdLFxuICB0b29sMTogW1xuICAgIFtEZXZpY2VUeXBlLktleWJvYXJkLCBbJzEnLmNoYXJDb2RlQXQoMCldXSxcbiAgICBbRGV2aWNlVHlwZS5EdWFsU2hvY2ssIFtEdWFsU2hvY2tJbnB1dC5Dcm9zc11dLFxuICAgIFtEZXZpY2VUeXBlLlhib3gsIFtYYm94SW5wdXQuQV1dLFxuICAgIFtEZXZpY2VUeXBlLkdlbmVyaWMsIFtYYm94SW5wdXQuQV1dLFxuICBdLFxuICB0b29sMjogW1xuICAgIFtEZXZpY2VUeXBlLktleWJvYXJkLCBbJzInLmNoYXJDb2RlQXQoMCldXSxcbiAgICBbRGV2aWNlVHlwZS5EdWFsU2hvY2ssIFtEdWFsU2hvY2tJbnB1dC5DaXJjbGVdXSxcbiAgICBbRGV2aWNlVHlwZS5YYm94LCBbWGJveElucHV0LkJdXSxcbiAgICBbRGV2aWNlVHlwZS5HZW5lcmljLCBbWGJveElucHV0LkJdXSxcbiAgXSxcbn07XG52YXIgYXNzZXRzTWFuYWdlcjtcbi8qKlxuICogVGhlIHNpbXVsYXRvciBkaXNwbGF5cyBhIDJEIGVudmlyb25tZW50IGNvbnRhaW5pbmcgYSBzaW11bGF0ZWQgcm9ib3QuXG4gKlxuICogQmVzaWRlcyB0aGUgc2ltdWxhdGlvbiBpdHNlbGYsIHRoZSB0b29sYmFyIGFsbG93cyB0ZXJtaW5hdGluZyBwcm9ncmFtcyBhbmQgcmVzZXR0aW5nIHRoZSBzaW11bGF0aW9uLlxuICovXG5pbXBvcnQgRGVmYXVsdFBsYXlncm91bmQgZnJvbSBcIi4vRGVmYXVsdFBsYXlncm91bmRcIjtcbi8vaW1wb3J0IHsgbG9hZFJvYm90cyB9IGZyb20gXCJ3ZWJyb2Ivc3JjL3JvYm90L011bHRpUm9ib3RIYW5kbGVyXCI7XG4vL2ltcG9ydCBVUkRGSlNPTkxvYWRlciBmcm9tIFwiLi9VUkRGSlNPTkxvYWRlclwiO1xuLy8gaW1wb3J0IHtsb2FkUm9ib3RzfSBmcm9tIFwid2Vicm9iXCI7XG5mdW5jdGlvbiBpbnB1dHNQcm9jZXNzZWQgKGZvcmNldXBkYXRlPWZhbHNlKXtcbiAgY29uc3QgaW5wdXRzID0gaW5wdXRDb250cm9sbGVyLmlucHV0c1xuICBjb25zdCBmYXN0c2NhbGUgPSAxICsgKGlucHV0cy5mYXN0KjIpIC8vIGlucHV0cy5mYXN0OiBbMCwgMV0gLT4gWzEsIDJdXG4gIGNvbnN0IHNsb3dzY2FsZSA9ICgxIC0gKE1hdGgubWluKGlucHV0cy5zbG93LCAwLjk3KSkpIC8vIGlucHV0cy5zbG93OiBbMCwgMV0gLT4gWzAsIDFdXG5cbiAgY29uc3Qgc2NhbGUgPSBzY2VuZS5nZXRBbmltYXRpb25SYXRpbygpICogMC4wMSAqIGZhc3RzY2FsZSAqIHNsb3dzY2FsZVxuICBsZXQgc2hpZnQgPSBWZWN0b3IzLlplcm8oKVxuICBpZiAoaW5wdXRzLm1vZGUgPiAwLjUpe1xuICAgICAgc2hpZnQgPSBuZXcgVmVjdG9yMygtaW5wdXRzLnlBeGlzLCBpbnB1dHMueEF4aXMsIGlucHV0cy56QXhpcykuc2NhbGUoc2NhbGUpXG4gICAgICBjb25zdCBzaGlmdFF1YXRlcm5pb24gPSBRdWF0ZXJuaW9uLkZyb21FdWxlclZlY3RvcihzaGlmdClcbiAgICAgIHRjcC5yb3RhdGlvblF1YXRlcm5pb24gPSB0Y3Aucm90YXRpb25RdWF0ZXJuaW9uLm11bHRpcGx5KHNoaWZ0UXVhdGVybmlvbilcbiAgICAgIGFsbHJvYm90cy5mb3JFYWNoKHIgPT4gci5zZXRUQ1BUbyh0Y3AucG9zaXRpb24sIHRjcC5yb3RhdGlvblF1YXRlcm5pb24pKVxuICAgICAgcmVuZGVyaW5nID0gdHJ1ZVxuICB9IGVsc2Uge1xuICAgICAgc2hpZnQgPSBuZXcgVmVjdG9yMygtaW5wdXRzLnhBeGlzLCBpbnB1dHMueUF4aXMsIGlucHV0cy56QXhpcykuc2NhbGUoc2NhbGUqMC4zKSAvLyBUT0RPIHJvdGF0ZSB2aWV3ZXIgcG9zXG4gICAgICBpZiAoc2hpZnQubGVuZ3RoKCkgPiAwIHx8IGZvcmNldXBkYXRlKXtcbiAgICAgICAgLy90b2RvXG4gICAgICAgICAvLyB0Y3AucG9zaXRpb24gPSB0Y3AucG9zaXRpb24uYWRkKHNoaWZ0KVxuICAgICAgICAgIC8vYWxscm9ib3RzLmZvckVhY2gociA9PiByLnNldFRDUFRvKHRjcC5wb3NpdGlvbiwgdGNwLnJvdGF0aW9uUXVhdGVybmlvbikpXG4gICAgICAgICAgcmVuZGVyaW5nID0gdHJ1ZVxuICAgICAgfVxuICB9XG4gIHRyeXtcbiAgICAgIGlmIChpbnB1dENvbnRyb2xsZXIuY2hhbmdlZElucHV0cy50b29sMSAmJiBpbnB1dHMudG9vbDEgPj0gMC41KXtcbiAgICAgICAgICBjb25zb2xlLmxvZygnR3JpcHBpbmcnKVxuICAgICAgICAgIC8qXG4gICAgICAgICAgaWYgKGNvbmVNYXRlcmlhbC5kaWZmdXNlQ29sb3IuZXF1YWxzKENvbG9yMy5HcmF5KCkpKXtcbiAgICAgICAgICAgICAgY29uZU1hdGVyaWFsLmRpZmZ1c2VDb2xvciA9IENvbG9yMy5CbGFjaygpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHcmlwcGluZycpXG4gICAgICAgICAgICAgIC8vcm9ib3RJbnRlcmZhY2Uuc2VuZChDb21tYW5kRmFjdG9yeS5TZXRFbmRFZmZlY3RvcignR3JpcHBpbmcnLCAxLjApKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbmVNYXRlcmlhbC5kaWZmdXNlQ29sb3IgPSBDb2xvcjMuR3JheSgpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWxlYXNpbmcnKVxuICAgICAgICAgICAgICAvL3JvYm90SW50ZXJmYWNlLnNlbmQoQ29tbWFuZEZhY3RvcnkuU2V0RW5kRWZmZWN0b3IoJ1JlbGVhc2luZycsIDAuMCkpXG4gICAgICAgICAgfSAqL1xuICAgICAgfVxuICB9IGNhdGNoIChlKXtcbiAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSlcbiAgfVxufVxuY29uc3Qgcm9ib3REYXRhID0gW1xuXG5cblxuXG4gIHtcbiAgICAgIHBhdGg6IFwicm9ib3QvZmVzdG9fZGVzY3JpcHRpb24vdXJkZi9leGNtNDAudXJkZmpzb25cIixcbiAgICAgIHBvczogbmV3IFZlY3RvcjMoMCwgMCwgMCksXG4gICAgICByb3Q6IGV1bGVyVG9RdWF0ZXJuaW9uKG5ldyBWZWN0b3IzKDAsIDAsIDApKSxcbiAgICAgIGNoYWluczogW3tcbiAgICAgICAgICBiYXNlOiAnYmFzZV9saW5rJyxcbiAgICAgICAgICBmbGFuZ2U6ICdheGlzMycsXG4gICAgICAgICAgaWs6ICdjYXJ0ZXNpYW5paycsXG4gICAgICAgICAgdG9vbHM6IFt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMygwLCAwLCAtMC4wNSksXG4gICAgICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbjogZXVsZXJUb1F1YXRlcm5pb24obmV3IFZlY3RvcjMoMCwgMCwgMCkpLFxuICAgICAgICAgICAgICB0eXBlOiAndmFjdXVtR3JpcHBlcicsXG4gICAgICAgICAgICAgIHZpc3VhbDoge1xuICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyOiB7IGRpYW1ldGVyOiAwLjAxLCBoZWlnaHQ6IDAuMDUgfSxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMygwLCAwLCAtMC4wMjUpLFxuICAgICAgICAgICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uOiBldWxlclRvUXVhdGVybmlvbihuZXcgVmVjdG9yMyhNYXRoLlBJIC8gMiwgMCwgMCkpLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfV1cbiAgICAgIH1dXG5cbiAgfSxcblxuICAvL3twYXRoOiBcInJvYm90L3ByMl9kZXNjcmlwdGlvbi9yb2JvdHMvXCIsIGZpbGU6ICdwcjIudXJkZmpzb24nLCBwb3M6IG5ldyBWZWN0b3IzKDAsMCwwKX0sXG5cblxuXVxuY29uc3QgU2ltdWxhdG9yID0gUmVhY3QuZm9yd2FyZFJlZiA8IFByb3BzLCBJbnN0YW5jZT4gKFxuICAoeyBydW5uaW5nLCB6b29tLCB6b29tTW9kZSwgb25VcGRhdGUsIG9uRXhlY3V0aW9uQWN0aW9uIH06IFByb3BzLCByZWY6IFJlZjxJbnN0YW5jZT4pID0+IHtcbiAgICBjb25zdCBzaW11bGF0aW9uID0gaG9va3MudXNlVmFsdWUoKCkgPT4ge1xuICAgICAgY29uc3Qgc2ltID0gbmV3IFNpbXVsYXRpb24oKTtcbiAgICAgIC8vc2ltLmpzb25Jbml0KGRlZmF1bHRTaW11bGF0aW9uQ29uZmlnKTtcbiAgICAgIHJldHVybiBzaW07XG4gICAgfSk7XG4gICAgO1xuXG4gICAgY29uc3Qgb25TY2VuZVJlYWR5ID0gKHNjZW5lKSA9PiB7XG4gICAgICAvLyBUaGlzIGNyZWF0ZXMgYW5kIHBvc2l0aW9ucyBhIGZyZWUgY2FtZXJhIChub24tbWVzaClcbiAgICAgIFxuICAgICAgdmFyIGNhbWVyYSA9IG5ldyBGcmVlQ2FtZXJhKFwiY2FtZXJhMVwiLCBuZXcgVmVjdG9yMygwLCA1LCAtMTApLCBzY2VuZSk7XG5cbiAgICAgIC8vIFRoaXMgdGFyZ2V0cyB0aGUgY2FtZXJhIHRvIHNjZW5lIG9yaWdpblxuICAgICAgY2FtZXJhLnNldFRhcmdldChWZWN0b3IzLlplcm8oKSk7XG5cbiAgICAgIGNvbnN0IGNhbnZhcyA9IHNjZW5lLmdldEVuZ2luZSgpLmdldFJlbmRlcmluZ0NhbnZhcygpO1xuXG4gICAgICAvLyBUaGlzIGF0dGFjaGVzIHRoZSBjYW1lcmEgdG8gdGhlIGNhbnZhc1xuICAgICAgY2FtZXJhLmF0dGFjaENvbnRyb2woY2FudmFzLCB0cnVlKTtcblxuICAgICAgLy8gVGhpcyBjcmVhdGVzIGEgbGlnaHQsIGFpbWluZyAwLDEsMCAtIHRvIHRoZSBza3kgKG5vbi1tZXNoKVxuICAgICAgdmFyIGxpZ2h0ID0gbmV3IEhlbWlzcGhlcmljTGlnaHQoXCJsaWdodFwiLCBuZXcgVmVjdG9yMygwLCAxLCAwKSwgc2NlbmUpO1xuXG4gICAgICAvLyBEZWZhdWx0IGludGVuc2l0eSBpcyAxLiBMZXQncyBkaW0gdGhlIGxpZ2h0IGEgc21hbGwgYW1vdW50XG4gICAgICBsaWdodC5pbnRlbnNpdHkgPSAwLjc7XG5cbiAgICAgIGlucHV0Q29udHJvbGxlciA9IG5ldyBJbnB1dENvbnRyb2xsZXIoc2NlbmUpXG4gICAgICBpbnB1dENvbnRyb2xsZXIuc2V0SW5wdXREZWZpbml0aW9uKGlucHV0c0RlZilcbiAgICAgIGlucHV0Q29udHJvbGxlci5jdXJyZW50SW5wdXRzUHJvY2Vzc2VkLmFkZCgoKSA9PiBpbnB1dHNQcm9jZXNzZWQoKSlcblxuICAgICAgY29uc3QgYXhlcyA9IGNyZWF0ZUF4ZXMoc2NlbmUsIDAuNSwgMS4wLCB0cnVlKTtcbiAgICAgIGFzc2V0c01hbmFnZXIgPSBuZXcgQXNzZXRzTWFuYWdlcihzY2VuZSlcbiAgICAgIC8vIFNjZW5lTG9hZGVyLlJlZ2lzdGVyUGx1Z2luKG5ldyBVUkRGSlNPTkxvYWRlcigpKVxuICAgICAgY29uc29sZS5sb2coJ25hY2ggQXNzZXQgTWFuYWdlciAnKVxuICAgICAgbG9hZFJvYm90cyhyb2JvdERhdGEsc2NlbmUsYXNzZXRzTWFuYWdlcik7XG4gICAgICBjb25zb2xlLmxvZygnbmFjaCBsb2Fkcm9ib3RzJylcbiAgICAgIHNjZW5lLnJlbmRlcigpO1xuICAgICAgLy8gT3VyIGJ1aWx0LWluICdncm91bmQnIHNoYXBlLlxuICAgICAgTWVzaEJ1aWxkZXIuQ3JlYXRlR3JvdW5kKFwiZ3JvdW5kXCIsIHsgd2lkdGg6IDYsIGhlaWdodDogNiB9LCBzY2VuZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFdpbGwgcnVuIG9uIGV2ZXJ5IGZyYW1lIHJlbmRlci4gIFdlIGFyZSBzcGlubmluZyB0aGUgYm94IG9uIHktYXhpcy5cbiAgICAgKi9cbiAgICBjb25zdCBvblJlbmRlciA9IChzY2VuZSkgPT4ge1xuICAgICBcbiAgICB9O1xuICBcbiAgXG4gICAgLy8gbW91bnQgc2ltdWxhdG9yIGluIHRoZSB0YXJnZXQgYW5kIHNpbXVsYXRlIGNvbnRpbnVvdXNseVxuICAgIGNvbnN0IFtyZW5kZXJUYXJnZXQsIHNldFJlbmRlclRhcmdldF0gPSBSZWFjdC51c2VTdGF0ZSA8IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCA+IChudWxsKTtcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKHJlbmRlclRhcmdldCA9PT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZDsgXG5cbiAgICAgIHNpbXVsYXRpb24ubW91bnQocmVuZGVyVGFyZ2V0KTtcbiAgICAgIHNpbXVsYXRpb24uc3RhcnRNYXR0ZXIoKTtcbiAgICAgIHNpbXVsYXRpb24uc3RhcnRSZW5kZXIoKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHNpbXVsYXRpb24uc3RvcFJlbmRlcigpO1xuICAgICAgICBzaW11bGF0aW9uLnN0b3BNYXR0ZXIoKTtcbiAgICAgICAgc2ltdWxhdGlvbi51bm1vdW50KCk7XG4gICAgICB9O1xuICAgIH0sIFtyZW5kZXJUYXJnZXQsIHNpbXVsYXRpb25dKTtcbiBcbiAgICAvLyBOZWVkIHRvIHVzZSBhIGRlcGVuZGVuY3kgYXJyYXkgaGVyZSwgYmVjYXVzZSBJZGUgcmVxdWlyZXMgYSBzdGFibGUgcmVmLlxuICAgIC8vIE9uIGVhY2ggY2hhbmdlIHRvIHRoZSBTaW11bGF0b3IgcmVmLCBqc29uSW5pdCBpcyBwb3RlbnRpYWxseSBjYWxsZWQuXG4gICAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7IHNpbXVsYXRpb24gfSksIFtzaW11bGF0aW9uXSk7XG4gICAgXG4gICAgdXNlU3R5bGVzKHMpO1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuXG5cblxuICAgICAgICA8VG9vbEJhcj5cbiAgICAgICAgICB7cnVubmluZyA/IChcbiAgICAgICAgICAgIDxUb29sQmFySXRlbSBrZXk9XCJ0ZXJtaW5hdGUtYW5kLXJlc2V0XCI+XG4gICAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uRXhlY3V0aW9uQWN0aW9uKHsgYWN0aW9uOiAnVEVSTUlOQVRFJywgcmVzZXQ6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpY29uPXtUZXJtaW5hdGVBbmRSZXNldEljb259XG4gICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVG9vbEJhckl0ZW0+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUb29sQmFySXRlbSBrZXk9XCJyZXNldFwiPlxuICAgICAgICAgICAgICA8VG9vbEJhckljb25CdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBvbkV4ZWN1dGlvbkFjdGlvbih7IGFjdGlvbjogJ1JFU0VUJyB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGljb249e1Jlc2V0SWNvbn1cbiAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPFRvb2xCYXJJdGVtPlxuICAgICAgICAgICAgPFRvb2xCYXJJY29uQnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBvbkV4ZWN1dGlvbkFjdGlvbih7IGFjdGlvbjogJ1RFUk1JTkFURScsIHJlc2V0OiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgaWNvbj17VGVybWluYXRlSWNvbn1cbiAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshcnVubmluZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Ub29sQmFySXRlbT5cbiAgICAgICAgICA8VG9vbEJhckl0ZW0+XG4gICAgICAgICAgICA8VG9vbEJhckljb25CdXR0b24gb25DbGljaz17KCkgPT4gb25VcGRhdGUoe1xuICAgICAgICAgICAgICB6b29tOiBNYXRoLm1pbih6b29tICsgMTAsIDE1MCksXG4gICAgICAgICAgICAgIHpvb21Nb2RlOiAnTUFOVUFMJyxcbiAgICAgICAgICAgIH0pfSBpY29uPXtab29tSW5JY29ufSBkaXNhYmxlUmlwcGxlIC8+XG4gICAgICAgICAgPC9Ub29sQmFySXRlbT5cbiAgICAgICAgICA8VG9vbEJhckl0ZW0+XG4gICAgICAgICAgICA8VG9vbEJhckljb25CdXR0b24gb25DbGljaz17KCkgPT4gb25VcGRhdGUoe1xuICAgICAgICAgICAgICB6b29tOiAxMDAsXG4gICAgICAgICAgICAgIHpvb21Nb2RlOiAnTUFOVUFMJyxcbiAgICAgICAgICAgIH0pfSBpY29uPXtab29tUmVzZXRJY29ufSBkaXNhYmxlUmlwcGxlIC8+XG4gICAgICAgICAgPC9Ub29sQmFySXRlbT5cbiAgICAgICAgICA8VG9vbEJhckl0ZW0+XG4gICAgICAgICAgICA8VG9vbEJhckljb25CdXR0b24gb25DbGljaz17KCkgPT4gb25VcGRhdGUoe1xuICAgICAgICAgICAgICB6b29tOiBNYXRoLm1heCh6b29tIC0gMTAsIDUwKSxcbiAgICAgICAgICAgICAgem9vbU1vZGU6ICdNQU5VQUwnLFxuICAgICAgICAgICAgfSl9IGljb249e1pvb21PdXRJY29ufSBkaXNhYmxlUmlwcGxlIC8+XG4gICAgICAgICAgPC9Ub29sQmFySXRlbT5cbiAgICAgICAgICA8VG9vbEJhckl0ZW0+XG4gICAgICAgICAgICA8VG9vbEJhckljb25CdXR0b24gb25DbGljaz17KCkgPT4gb25VcGRhdGUoe1xuICAgICAgICAgICAgICB6b29tLFxuICAgICAgICAgICAgICB6b29tTW9kZTogJ0ZJVCcsXG4gICAgICAgICAgICB9KX0gaWNvbj17Wm9vbUZpdEljb259IGRpc2FibGVSaXBwbGUgLz5cbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuXG5cbiAgICAgICAgICA8VG9vbEJhckl0ZW0+XG4gICAgICAgICAgICA8VG9vbEJhckljb25CdXR0b24gb25DbGljaz17KCkgPT4gb25VcGRhdGUoe1xuXG4gICAgICAgICAgICB9KX0gaWNvbj17Um90YXRlT3JiaXRJY29ufSBkaXNhYmxlUmlwcGxlIC8+XG4gICAgICAgICAgPC9Ub29sQmFySXRlbT5cbiAgICAgICAgICA8VG9vbEJhckl0ZW0+XG4gICAgICAgICAgICA8VG9vbEJhckljb25CdXR0b24gb25DbGljaz17KCkgPT4gb25VcGRhdGUoe1xuXG4gICAgICAgICAgICB9KX0gaWNvbj17UmVzaXplSWNvbn0gZGlzYWJsZVJpcHBsZSAvPlxuICAgICAgICAgIDwvVG9vbEJhckl0ZW0+XG4gICAgICAgICAgPFRvb2xCYXJJdGVtPlxuICAgICAgICAgICAgPFRvb2xCYXJJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uVXBkYXRlKHtcblxuICAgICAgICAgICAgfSl9IGljb249e0Fycm93QWxsSWNvbn0gZGlzYWJsZVJpcHBsZSAvPlxuICAgICAgICAgIDwvVG9vbEJhckl0ZW0+XG4gICAgICAgICAgPFRvb2xCYXJJdGVtPlxuXG4gICAgICAgICAgICBTZXRUQ1BcbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG5cbiAgICAgICAgICAgIH0pfSBpY29uPXtSb2JvdEluZHVzdHJpYWxJY29ufSBkaXNhYmxlUmlwcGxlIC8+XG4gICAgICAgICAgPC9Ub29sQmFySXRlbT5cblxuXG4gICAgICAgIDwvVG9vbEJhcj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNpbXVsYXRpb24zRFwiPlxuICAgICAgICAgIDxEZWZhdWx0UGxheWdyb3VuZCBhbnRpYWxpYXMgb25TY2VuZVJlYWR5PXtvblNjZW5lUmVhZHl9IG9uUmVuZGVyPXtvblJlbmRlcn0gaWQ9XCJteS1jYW52YXNcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICApO1xuICB9LFxuKTtcblxuZXhwb3J0IHR5cGUgU2ltdWxhdG9yVHlwZSA9IFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFNpbXVsYXRvcj47XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXVsYXRvcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBY0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBb0JBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBTUE7QUFNQTtBQU1BO0FBTUE7QUFNQTtBQU1BO0FBM0NBO0FBa0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFKQTtBQUpBO0FBTEE7QUErQkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUtBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=