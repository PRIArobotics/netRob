require("source-map-support").install();
exports.id = 1;
exports.modules = {

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
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/ide/Simulator/Simulator.js";















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
    assetsManager = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["AssetsManager"](scene);
    Object(webrob_src_robot_MultiRobotHandler__WEBPACK_IMPORTED_MODULE_22__["loadRobots"])(robotData, scene, assetsManager);
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

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8xLjQwN2I3ZGNhYzA5YWFiNWQ3N2EyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29tcG9uZW50cy9pZGUvU2ltdWxhdG9yL1NpbXVsYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0IHsgU2NlbmVMb2FkZXIgfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIjtcbmltcG9ydCAnLi9VUkRGSlNPTkxvYWRlcidcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVBeGVzIGZyb20gXCJ3ZWJyb2Ivc3JjL0F4ZXNIZWxwZXIuanNcIjtcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvdXNlU3R5bGVzJztcbmltcG9ydCB7XG4gIEVuZ2luZSxcbiAgU2NlbmUsXG4gIENvbG9yMyxcbiAgVmVjdG9yMyxcbiAgQXJjUm90YXRlQ2FtZXJhLFxuICBIZW1pc3BoZXJpY0xpZ2h0LFxuICBGcmVlQ2FtZXJhLFxuICBUb29scyxcbiAgRGV2aWNlVHlwZSxcbiAgWGJveElucHV0LFxuICBEdWFsU2hvY2tJbnB1dCwgUXVhdGVybmlvblxuICAsIEFzc2V0c01hbmFnZXIsIE1lc2hCdWlsZGVyLCBTdGFuZGFyZE1hdGVyaWFsLCBUcmFuc2Zvcm1Ob2RlLCBNYXRyaXgsXG59IGZyb20gXCJAYmFieWxvbmpzL2NvcmVcIjtcblxuXG5pbXBvcnQge1xuICBUZXJtaW5hdGVJY29uLFxuICBSZXNldEljb24sXG4gIFRlcm1pbmF0ZUFuZFJlc2V0SWNvbixcbiAgWm9vbUluSWNvbixcbiAgWm9vbU91dEljb24sXG4gIFpvb21GaXRJY29uLFxuICBab29tUmVzZXRJY29uLFxuICBSb3RhdGVPcmJpdEljb24sXG4gIFJlc2l6ZUljb24sXG4gIFJvYm90SW5kdXN0cmlhbEljb24sXG4gIEFycm93QWxsSWNvbixcblxufSBmcm9tICcuLi8uLi9taXNjL3BhbGV0dGUnO1xuaW1wb3J0ICogYXMgaG9va3MgZnJvbSAnLi4vLi4vbWlzYy9ob29rcyc7XG5pbXBvcnQgeyBldWxlclRvUXVhdGVybmlvbiB9IGZyb20gJ2V1bGVydXRpbC9zcmMvRXVsZXJVdGlsLmpzJztcbmltcG9ydCBSb2JvdCBmcm9tICd3ZWJyb2Ivc3JjL3JvYm90L1JvYm90LmpzJ1xuXG5pbXBvcnQgeyB0eXBlIEV4ZWN1dGlvbkFjdGlvbiB9IGZyb20gJy4uL0lkZSc7XG5pbXBvcnQgVG9vbEJhciBmcm9tICcuLi9Ub29sQmFyJztcbmltcG9ydCBUb29sQmFySWNvbkJ1dHRvbiBmcm9tICcuLi9Ub29sQmFyL1Rvb2xCYXJJY29uQnV0dG9uJztcbmltcG9ydCBUb29sQmFySXRlbSBmcm9tICcuLi9Ub29sQmFyL1Rvb2xCYXJJdGVtJztcblxuaW1wb3J0IHMgZnJvbSAnLi9TaW11bGF0b3Iuc2Nzcyc7XG5cbmltcG9ydCB7IFNpbXVsYXRpb24gfSBmcm9tICcuL3NpbXVsYXRpb24nO1xuXG5pbXBvcnQgeyBnZW5lcmF0ZUNvbmZpZ0Zyb21YbWwgfSBmcm9tICcuLi9TaW11bGF0b3JFZGl0b3InO1xuLy8gJEZsb3dFeHBlY3RFcnJvclxuaW1wb3J0IGRlZmF1bHRTaW11bGF0aW9uWG1sIGZyb20gJy4vZGVmYXVsdF9zaW11bGF0aW9uLnhtbCc7XG5pbXBvcnQgSW5wdXRDb250cm9sbGVyIGZyb20gXCJ3ZWJyb2Ivc3JjL0lucHV0Q29udHJvbGxlci5qc1wiO1xuY29uc3QgZGVmYXVsdFNpbXVsYXRpb25Db25maWcgPSBnZW5lcmF0ZUNvbmZpZ0Zyb21YbWwoZGVmYXVsdFNpbXVsYXRpb25YbWwpO1xudmFyIGlucHV0Q29udHJvbGxlcjtcblxuY29uc3QgYmdJbnRlbnNpdHkgPSAwLjhcblxuXG5leHBvcnQgdHlwZSBTaW11bGF0b3Jab29tQWN0aW9uID0gJ1pPT01fSU4nIHwgJ1pPT01fMTAwJyB8ICdaT09NX09VVCcgfCAnWk9PTV9GSVQnO1xuXG5leHBvcnQgdHlwZSBDb250cm9sbGVkU3RhdGUgPSB7fFxuICB6b29tOiBudW1iZXIsXG4gICAgem9vbU1vZGU6ICdNQU5VQUwnIHwgJ0ZJVCcsXG58fTtcblxudHlwZSBQcm9wcyA9IHt8XG4gIHJ1bm5pbmc6IGJvb2xlYW4sXG4gIC4uLkNvbnRyb2xsZWRTdGF0ZSxcbiAgb25VcGRhdGU6IChzdGF0ZTogQ29udHJvbGxlZFN0YXRlKSA9PiB2b2lkIHwgUHJvbWlzZSA8IHZvaWQ+LFxuICAgIG9uRXhlY3V0aW9uQWN0aW9uOiAoYWN0aW9uOiBFeGVjdXRpb25BY3Rpb24pID0+IHZvaWQgfCBQcm9taXNlIDwgdm9pZD4sXG58fTtcbnR5cGUgSW5zdGFuY2UgPSB7fFxuICBzaW11bGF0aW9uOiBTaW11bGF0aW9uLFxufH07XG5cbmltcG9ydCBcIkBiYWJ5bG9uanMvY29yZS9EZWJ1Zy9kZWJ1Z0xheWVyXCI7IC8vIEF1Z21lbnRzIHRoZSBzY2VuZSB3aXRoIHRoZSBkZWJ1ZyBtZXRob2RzXG5pbXBvcnQgXCJAYmFieWxvbmpzL2luc3BlY3RvclwiO1xuaW1wb3J0IHsgVEVTVF9DTURTIH0gZnJvbSBcIndlYnJvYi9zcmMvdGVzdC9kYXRhXCI7IC8vIEluamVjdHMgYSBsb2NhbCBFUzYgdmVyc2lvbiBvZiB0aGUgaW5zcGVjdG9yIHRvIHByZXZlbnQgYXV0b21hdGljYWxseSByZWx5aW5nIG9uIHRoZSBub25lIGNvbXBhdGlibGUgdmVyc2lvblxuXG5jb25zdCBpbnB1dHNEZWYgPSB7XG4gIHhBeGlzOiBbXG4gICAgW0RldmljZVR5cGUuS2V5Ym9hcmQsIFstJ1MnLmNoYXJDb2RlQXQoMCksICdXJy5jaGFyQ29kZUF0KDApXV0sXG4gICAgW0RldmljZVR5cGUuRHVhbFNob2NrLCBbRHVhbFNob2NrSW5wdXQuTFN0aWNrWEF4aXNdXSxcbiAgICBbRGV2aWNlVHlwZS5YYm94LCBbWGJveElucHV0LkxTdGlja1hBeGlzXV0sXG4gICAgW0RldmljZVR5cGUuR2VuZXJpYywgW1hib3hJbnB1dC5MU3RpY2tYQXhpc11dLFxuICBdLFxuICB5QXhpczogW1xuICAgIFtEZXZpY2VUeXBlLktleWJvYXJkLCBbLSdBJy5jaGFyQ29kZUF0KDApLCAnRCcuY2hhckNvZGVBdCgwKV1dLFxuICAgIFtEZXZpY2VUeXBlLkR1YWxTaG9jaywgWy1EdWFsU2hvY2tJbnB1dC5MU3RpY2tZQXhpc11dLFxuICAgIFtEZXZpY2VUeXBlLlhib3gsIFstWGJveElucHV0LkxTdGlja1lBeGlzXV0sXG4gICAgW0RldmljZVR5cGUuR2VuZXJpYywgWy1YYm94SW5wdXQuTFN0aWNrWUF4aXNdXSxcbiAgXSxcbiAgekF4aXM6IFtcbiAgICBbRGV2aWNlVHlwZS5LZXlib2FyZCwgWy0nUScuY2hhckNvZGVBdCgwKSwgJ0UnLmNoYXJDb2RlQXQoMCldXSxcbiAgICBbRGV2aWNlVHlwZS5EdWFsU2hvY2ssIFstRHVhbFNob2NrSW5wdXQuUlN0aWNrWUF4aXNdXSxcbiAgICBbRGV2aWNlVHlwZS5YYm94LCBbLVhib3hJbnB1dC5SU3RpY2tZQXhpc11dLFxuICAgIFtEZXZpY2VUeXBlLkdlbmVyaWMsIFstWGJveElucHV0LlJTdGlja1lBeGlzXV0sXG4gIF0sXG4gIG1vZGU6IFtcbiAgICBbRGV2aWNlVHlwZS5LZXlib2FyZCwgWycgJy5jaGFyQ29kZUF0KDApXV0sXG4gICAgW0RldmljZVR5cGUuRHVhbFNob2NrLCBbRHVhbFNob2NrSW5wdXQuUjEsIER1YWxTaG9ja0lucHV0LkwxXV0sXG4gICAgW0RldmljZVR5cGUuWGJveCwgW1hib3hJbnB1dC5SQiwgWGJveElucHV0LkxCXV0sXG4gICAgW0RldmljZVR5cGUuR2VuZXJpYywgW1hib3hJbnB1dC5SQiwgWGJveElucHV0LkxCXV0sXG4gIF0sXG4gIGZhc3Q6IFtcbiAgICBbRGV2aWNlVHlwZS5LZXlib2FyZCwgWydPJy5jaGFyQ29kZUF0KDApXV0sXG4gICAgW0RldmljZVR5cGUuRHVhbFNob2NrLCBbRHVhbFNob2NrSW5wdXQuUjJdXSxcbiAgICBbRGV2aWNlVHlwZS5YYm94LCBbWGJveElucHV0LlJUXV0sXG4gICAgW0RldmljZVR5cGUuR2VuZXJpYywgW1hib3hJbnB1dC5SVF1dLFxuICBdLFxuICBzbG93OiBbXG4gICAgW0RldmljZVR5cGUuS2V5Ym9hcmQsIFsnTCcuY2hhckNvZGVBdCgwKV1dLFxuICAgIFtEZXZpY2VUeXBlLkR1YWxTaG9jaywgW0R1YWxTaG9ja0lucHV0LkwyXV0sXG4gICAgW0RldmljZVR5cGUuWGJveCwgW1hib3hJbnB1dC5MVF1dLFxuICAgIFtEZXZpY2VUeXBlLkdlbmVyaWMsIFtYYm94SW5wdXQuTFRdXSxcbiAgXSxcbiAgdG9vbDE6IFtcbiAgICBbRGV2aWNlVHlwZS5LZXlib2FyZCwgWycxJy5jaGFyQ29kZUF0KDApXV0sXG4gICAgW0RldmljZVR5cGUuRHVhbFNob2NrLCBbRHVhbFNob2NrSW5wdXQuQ3Jvc3NdXSxcbiAgICBbRGV2aWNlVHlwZS5YYm94LCBbWGJveElucHV0LkFdXSxcbiAgICBbRGV2aWNlVHlwZS5HZW5lcmljLCBbWGJveElucHV0LkFdXSxcbiAgXSxcbiAgdG9vbDI6IFtcbiAgICBbRGV2aWNlVHlwZS5LZXlib2FyZCwgWycyJy5jaGFyQ29kZUF0KDApXV0sXG4gICAgW0RldmljZVR5cGUuRHVhbFNob2NrLCBbRHVhbFNob2NrSW5wdXQuQ2lyY2xlXV0sXG4gICAgW0RldmljZVR5cGUuWGJveCwgW1hib3hJbnB1dC5CXV0sXG4gICAgW0RldmljZVR5cGUuR2VuZXJpYywgW1hib3hJbnB1dC5CXV0sXG4gIF0sXG59O1xudmFyIGFzc2V0c01hbmFnZXI7XG4vKipcbiAqIFRoZSBzaW11bGF0b3IgZGlzcGxheXMgYSAyRCBlbnZpcm9ubWVudCBjb250YWluaW5nIGEgc2ltdWxhdGVkIHJvYm90LlxuICpcbiAqIEJlc2lkZXMgdGhlIHNpbXVsYXRpb24gaXRzZWxmLCB0aGUgdG9vbGJhciBhbGxvd3MgdGVybWluYXRpbmcgcHJvZ3JhbXMgYW5kIHJlc2V0dGluZyB0aGUgc2ltdWxhdGlvbi5cbiAqL1xuaW1wb3J0IERlZmF1bHRQbGF5Z3JvdW5kIGZyb20gXCIuL0RlZmF1bHRQbGF5Z3JvdW5kXCI7XG5pbXBvcnQgeyBsb2FkUm9ib3RzIH0gZnJvbSBcIndlYnJvYi9zcmMvcm9ib3QvTXVsdGlSb2JvdEhhbmRsZXJcIjtcbmZ1bmN0aW9uIGlucHV0c1Byb2Nlc3NlZCAoZm9yY2V1cGRhdGU9ZmFsc2Upe1xuICBjb25zdCBpbnB1dHMgPSBpbnB1dENvbnRyb2xsZXIuaW5wdXRzXG4gIGNvbnN0IGZhc3RzY2FsZSA9IDEgKyAoaW5wdXRzLmZhc3QqMikgLy8gaW5wdXRzLmZhc3Q6IFswLCAxXSAtPiBbMSwgMl1cbiAgY29uc3Qgc2xvd3NjYWxlID0gKDEgLSAoTWF0aC5taW4oaW5wdXRzLnNsb3csIDAuOTcpKSkgLy8gaW5wdXRzLnNsb3c6IFswLCAxXSAtPiBbMCwgMV1cblxuICBjb25zdCBzY2FsZSA9IHNjZW5lLmdldEFuaW1hdGlvblJhdGlvKCkgKiAwLjAxICogZmFzdHNjYWxlICogc2xvd3NjYWxlXG4gIGxldCBzaGlmdCA9IFZlY3RvcjMuWmVybygpXG4gIGlmIChpbnB1dHMubW9kZSA+IDAuNSl7XG4gICAgICBzaGlmdCA9IG5ldyBWZWN0b3IzKC1pbnB1dHMueUF4aXMsIGlucHV0cy54QXhpcywgaW5wdXRzLnpBeGlzKS5zY2FsZShzY2FsZSlcbiAgICAgIGNvbnN0IHNoaWZ0UXVhdGVybmlvbiA9IFF1YXRlcm5pb24uRnJvbUV1bGVyVmVjdG9yKHNoaWZ0KVxuICAgICAgdGNwLnJvdGF0aW9uUXVhdGVybmlvbiA9IHRjcC5yb3RhdGlvblF1YXRlcm5pb24ubXVsdGlwbHkoc2hpZnRRdWF0ZXJuaW9uKVxuICAgICAgYWxscm9ib3RzLmZvckVhY2gociA9PiByLnNldFRDUFRvKHRjcC5wb3NpdGlvbiwgdGNwLnJvdGF0aW9uUXVhdGVybmlvbikpXG4gICAgICByZW5kZXJpbmcgPSB0cnVlXG4gIH0gZWxzZSB7XG4gICAgICBzaGlmdCA9IG5ldyBWZWN0b3IzKC1pbnB1dHMueEF4aXMsIGlucHV0cy55QXhpcywgaW5wdXRzLnpBeGlzKS5zY2FsZShzY2FsZSowLjMpIC8vIFRPRE8gcm90YXRlIHZpZXdlciBwb3NcbiAgICAgIGlmIChzaGlmdC5sZW5ndGgoKSA+IDAgfHwgZm9yY2V1cGRhdGUpe1xuICAgICAgICAgIHRjcC5wb3NpdGlvbiA9IHRjcC5wb3NpdGlvbi5hZGQoc2hpZnQpXG4gICAgICAgICAgYWxscm9ib3RzLmZvckVhY2gociA9PiByLnNldFRDUFRvKHRjcC5wb3NpdGlvbiwgdGNwLnJvdGF0aW9uUXVhdGVybmlvbikpXG4gICAgICAgICAgcmVuZGVyaW5nID0gdHJ1ZVxuICAgICAgfVxuICB9XG4gIHRyeXtcbiAgICAgIGlmIChpbnB1dENvbnRyb2xsZXIuY2hhbmdlZElucHV0cy50b29sMSAmJiBpbnB1dHMudG9vbDEgPj0gMC41KXtcbiAgICAgICAgICBjb25zb2xlLmxvZygnR3JpcHBpbmcnKVxuICAgICAgICAgIC8qXG4gICAgICAgICAgaWYgKGNvbmVNYXRlcmlhbC5kaWZmdXNlQ29sb3IuZXF1YWxzKENvbG9yMy5HcmF5KCkpKXtcbiAgICAgICAgICAgICAgY29uZU1hdGVyaWFsLmRpZmZ1c2VDb2xvciA9IENvbG9yMy5CbGFjaygpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHcmlwcGluZycpXG4gICAgICAgICAgICAgIC8vcm9ib3RJbnRlcmZhY2Uuc2VuZChDb21tYW5kRmFjdG9yeS5TZXRFbmRFZmZlY3RvcignR3JpcHBpbmcnLCAxLjApKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbmVNYXRlcmlhbC5kaWZmdXNlQ29sb3IgPSBDb2xvcjMuR3JheSgpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWxlYXNpbmcnKVxuICAgICAgICAgICAgICAvL3JvYm90SW50ZXJmYWNlLnNlbmQoQ29tbWFuZEZhY3RvcnkuU2V0RW5kRWZmZWN0b3IoJ1JlbGVhc2luZycsIDAuMCkpXG4gICAgICAgICAgfSAqL1xuICAgICAgfVxuICB9IGNhdGNoIChlKXtcbiAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSlcbiAgfVxufVxuY29uc3Qgcm9ib3REYXRhID0gW1xuXG5cblxuXG4gIHtcbiAgICAgIHBhdGg6IFwicm9ib3QvZmVzdG9fZGVzY3JpcHRpb24vdXJkZi9leGNtNDAudXJkZmpzb25cIixcbiAgICAgIHBvczogbmV3IFZlY3RvcjMoMCwgMCwgMCksXG4gICAgICByb3Q6IGV1bGVyVG9RdWF0ZXJuaW9uKG5ldyBWZWN0b3IzKDAsIDAsIDApKSxcbiAgICAgIGNoYWluczogW3tcbiAgICAgICAgICBiYXNlOiAnYmFzZV9saW5rJyxcbiAgICAgICAgICBmbGFuZ2U6ICdheGlzMycsXG4gICAgICAgICAgaWs6ICdjYXJ0ZXNpYW5paycsXG4gICAgICAgICAgdG9vbHM6IFt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMygwLCAwLCAtMC4wNSksXG4gICAgICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbjogZXVsZXJUb1F1YXRlcm5pb24obmV3IFZlY3RvcjMoMCwgMCwgMCkpLFxuICAgICAgICAgICAgICB0eXBlOiAndmFjdXVtR3JpcHBlcicsXG4gICAgICAgICAgICAgIHZpc3VhbDoge1xuICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyOiB7IGRpYW1ldGVyOiAwLjAxLCBoZWlnaHQ6IDAuMDUgfSxcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMygwLCAwLCAtMC4wMjUpLFxuICAgICAgICAgICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uOiBldWxlclRvUXVhdGVybmlvbihuZXcgVmVjdG9yMyhNYXRoLlBJIC8gMiwgMCwgMCkpLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfV1cbiAgICAgIH1dXG5cbiAgfSxcblxuICAvL3twYXRoOiBcInJvYm90L3ByMl9kZXNjcmlwdGlvbi9yb2JvdHMvXCIsIGZpbGU6ICdwcjIudXJkZmpzb24nLCBwb3M6IG5ldyBWZWN0b3IzKDAsMCwwKX0sXG5cblxuXVxuY29uc3QgU2ltdWxhdG9yID0gUmVhY3QuZm9yd2FyZFJlZiA8IFByb3BzLCBJbnN0YW5jZT4gKFxuICAoeyBydW5uaW5nLCB6b29tLCB6b29tTW9kZSwgb25VcGRhdGUsIG9uRXhlY3V0aW9uQWN0aW9uIH06IFByb3BzLCByZWY6IFJlZjxJbnN0YW5jZT4pID0+IHtcbiAgICBjb25zdCBzaW11bGF0aW9uID0gaG9va3MudXNlVmFsdWUoKCkgPT4ge1xuICAgICAgY29uc3Qgc2ltID0gbmV3IFNpbXVsYXRpb24oKTtcbiAgICAgIC8vc2ltLmpzb25Jbml0KGRlZmF1bHRTaW11bGF0aW9uQ29uZmlnKTtcbiAgICAgIC8vcmV0dXJuIHNpbTtcbiAgICB9KTtcbiAgICA7XG5cbiAgICBjb25zdCBvblNjZW5lUmVhZHkgPSAoc2NlbmUpID0+IHtcbiAgICAgIC8vIFRoaXMgY3JlYXRlcyBhbmQgcG9zaXRpb25zIGEgZnJlZSBjYW1lcmEgKG5vbi1tZXNoKVxuICAgICAgXG4gICAgICB2YXIgY2FtZXJhID0gbmV3IEZyZWVDYW1lcmEoXCJjYW1lcmExXCIsIG5ldyBWZWN0b3IzKDAsIDUsIC0xMCksIHNjZW5lKTtcblxuICAgICAgLy8gVGhpcyB0YXJnZXRzIHRoZSBjYW1lcmEgdG8gc2NlbmUgb3JpZ2luXG4gICAgICBjYW1lcmEuc2V0VGFyZ2V0KFZlY3RvcjMuWmVybygpKTtcblxuICAgICAgY29uc3QgY2FudmFzID0gc2NlbmUuZ2V0RW5naW5lKCkuZ2V0UmVuZGVyaW5nQ2FudmFzKCk7XG5cbiAgICAgIC8vIFRoaXMgYXR0YWNoZXMgdGhlIGNhbWVyYSB0byB0aGUgY2FudmFzXG4gICAgICBjYW1lcmEuYXR0YWNoQ29udHJvbChjYW52YXMsIHRydWUpO1xuXG4gICAgICAvLyBUaGlzIGNyZWF0ZXMgYSBsaWdodCwgYWltaW5nIDAsMSwwIC0gdG8gdGhlIHNreSAobm9uLW1lc2gpXG4gICAgICB2YXIgbGlnaHQgPSBuZXcgSGVtaXNwaGVyaWNMaWdodChcImxpZ2h0XCIsIG5ldyBWZWN0b3IzKDAsIDEsIDApLCBzY2VuZSk7XG5cbiAgICAgIC8vIERlZmF1bHQgaW50ZW5zaXR5IGlzIDEuIExldCdzIGRpbSB0aGUgbGlnaHQgYSBzbWFsbCBhbW91bnRcbiAgICAgIGxpZ2h0LmludGVuc2l0eSA9IDAuNztcblxuICAgICAgaW5wdXRDb250cm9sbGVyID0gbmV3IElucHV0Q29udHJvbGxlcihzY2VuZSlcbiAgICAgIGlucHV0Q29udHJvbGxlci5zZXRJbnB1dERlZmluaXRpb24oaW5wdXRzRGVmKVxuICAgICAgaW5wdXRDb250cm9sbGVyLmN1cnJlbnRJbnB1dHNQcm9jZXNzZWQuYWRkKCgpID0+IGlucHV0c1Byb2Nlc3NlZCgpKVxuXG4gICAgICBjb25zdCBheGVzID0gY3JlYXRlQXhlcyhzY2VuZSwgMC41LCAxLjAsIHRydWUpO1xuICAgICAgYXNzZXRzTWFuYWdlciA9IG5ldyBBc3NldHNNYW5hZ2VyKHNjZW5lKVxuICAgICAgXG4gICAgICBsb2FkUm9ib3RzKHJvYm90RGF0YSxzY2VuZSxhc3NldHNNYW5hZ2VyKTtcbiAgICAgIHNjZW5lLnJlbmRlcigpO1xuICAgICAgLy8gT3VyIGJ1aWx0LWluICdncm91bmQnIHNoYXBlLlxuICAgICAgTWVzaEJ1aWxkZXIuQ3JlYXRlR3JvdW5kKFwiZ3JvdW5kXCIsIHsgd2lkdGg6IDYsIGhlaWdodDogNiB9LCBzY2VuZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFdpbGwgcnVuIG9uIGV2ZXJ5IGZyYW1lIHJlbmRlci4gIFdlIGFyZSBzcGlubmluZyB0aGUgYm94IG9uIHktYXhpcy5cbiAgICAgKi9cbiAgICBjb25zdCBvblJlbmRlciA9IChzY2VuZSkgPT4ge1xuICAgICBcbiAgICB9O1xuICAgIFNjZW5lTG9hZGVyLk9uUGx1Z2luQWN0aXZhdGVkT2JzZXJ2YWJsZS5hZGQoZnVuY3Rpb24gKGxvYWRlcikge1xuICAgICAgaWYgKGxvYWRlci5uYW1lID09PSBcInVyZGZqc29uXCIpIHtcbiAgICAgICAgICBsb2FkZXIuYXNzZXRzTWFuYWdlciA9IGFzc2V0c01hbmFnZXI7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0luamVjdGVkIEFzc2V0TWFuYWdlcicpXG4gICAgICB9XG4gIH0pO1xuICBcbiAgICAvLyBtb3VudCBzaW11bGF0b3IgaW4gdGhlIHRhcmdldCBhbmQgc2ltdWxhdGUgY29udGludW91c2x5XG4gICAgY29uc3QgW3JlbmRlclRhcmdldCwgc2V0UmVuZGVyVGFyZ2V0XSA9IFJlYWN0LnVzZVN0YXRlIDwgSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsID4gKG51bGwpO1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAocmVuZGVyVGFyZ2V0ID09PSBudWxsKSByZXR1cm4gdW5kZWZpbmVkOyBcblxuICAgICAgc2ltdWxhdGlvbi5tb3VudChyZW5kZXJUYXJnZXQpO1xuICAgICAgc2ltdWxhdGlvbi5zdGFydE1hdHRlcigpO1xuICAgICAgc2ltdWxhdGlvbi5zdGFydFJlbmRlcigpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgc2ltdWxhdGlvbi5zdG9wUmVuZGVyKCk7XG4gICAgICAgIHNpbXVsYXRpb24uc3RvcE1hdHRlcigpO1xuICAgICAgICBzaW11bGF0aW9uLnVubW91bnQoKTtcbiAgICAgIH07XG4gICAgfSwgW3JlbmRlclRhcmdldCwgc2ltdWxhdGlvbl0pO1xuIFxuICAgIC8vIE5lZWQgdG8gdXNlIGEgZGVwZW5kZW5jeSBhcnJheSBoZXJlLCBiZWNhdXNlIElkZSByZXF1aXJlcyBhIHN0YWJsZSByZWYuXG4gICAgLy8gT24gZWFjaCBjaGFuZ2UgdG8gdGhlIFNpbXVsYXRvciByZWYsIGpzb25Jbml0IGlzIHBvdGVudGlhbGx5IGNhbGxlZC5cbiAgICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHsgc2ltdWxhdGlvbiB9KSwgW3NpbXVsYXRpb25dKTtcbiAgICBcbiAgICB1c2VTdHlsZXMocyk7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG5cblxuXG4gICAgICAgIDxUb29sQmFyPlxuICAgICAgICAgIHtydW5uaW5nID8gKFxuICAgICAgICAgICAgPFRvb2xCYXJJdGVtIGtleT1cInRlcm1pbmF0ZS1hbmQtcmVzZXRcIj5cbiAgICAgICAgICAgICAgPFRvb2xCYXJJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25FeGVjdXRpb25BY3Rpb24oeyBhY3Rpb246ICdURVJNSU5BVEUnLCByZXNldDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGljb249e1Rlcm1pbmF0ZUFuZFJlc2V0SWNvbn1cbiAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Ub29sQmFySXRlbT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFRvb2xCYXJJdGVtIGtleT1cInJlc2V0XCI+XG4gICAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uRXhlY3V0aW9uQWN0aW9uKHsgYWN0aW9uOiAnUkVTRVQnIH0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgaWNvbj17UmVzZXRJY29ufVxuICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVG9vbEJhckl0ZW0+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8VG9vbEJhckl0ZW0+XG4gICAgICAgICAgICA8VG9vbEJhckljb25CdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIG9uRXhlY3V0aW9uQWN0aW9uKHsgYWN0aW9uOiAnVEVSTUlOQVRFJywgcmVzZXQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpY29uPXtUZXJtaW5hdGVJY29ufVxuICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFydW5uaW5nfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG4gICAgICAgICAgICAgIHpvb206IE1hdGgubWluKHpvb20gKyAxMCwgMTUwKSxcbiAgICAgICAgICAgICAgem9vbU1vZGU6ICdNQU5VQUwnLFxuICAgICAgICAgICAgfSl9IGljb249e1pvb21Jbkljb259IGRpc2FibGVSaXBwbGUgLz5cbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG4gICAgICAgICAgICAgIHpvb206IDEwMCxcbiAgICAgICAgICAgICAgem9vbU1vZGU6ICdNQU5VQUwnLFxuICAgICAgICAgICAgfSl9IGljb249e1pvb21SZXNldEljb259IGRpc2FibGVSaXBwbGUgLz5cbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG4gICAgICAgICAgICAgIHpvb206IE1hdGgubWF4KHpvb20gLSAxMCwgNTApLFxuICAgICAgICAgICAgICB6b29tTW9kZTogJ01BTlVBTCcsXG4gICAgICAgICAgICB9KX0gaWNvbj17Wm9vbU91dEljb259IGRpc2FibGVSaXBwbGUgLz5cbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG4gICAgICAgICAgICAgIHpvb20sXG4gICAgICAgICAgICAgIHpvb21Nb2RlOiAnRklUJyxcbiAgICAgICAgICAgIH0pfSBpY29uPXtab29tRml0SWNvbn0gZGlzYWJsZVJpcHBsZSAvPlxuICAgICAgICAgIDwvVG9vbEJhckl0ZW0+XG5cblxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG5cbiAgICAgICAgICAgIH0pfSBpY29uPXtSb3RhdGVPcmJpdEljb259IGRpc2FibGVSaXBwbGUgLz5cbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG5cbiAgICAgICAgICAgIH0pfSBpY29uPXtSZXNpemVJY29ufSBkaXNhYmxlUmlwcGxlIC8+XG4gICAgICAgICAgPC9Ub29sQmFySXRlbT5cbiAgICAgICAgICA8VG9vbEJhckl0ZW0+XG4gICAgICAgICAgICA8VG9vbEJhckljb25CdXR0b24gb25DbGljaz17KCkgPT4gb25VcGRhdGUoe1xuXG4gICAgICAgICAgICB9KX0gaWNvbj17QXJyb3dBbGxJY29ufSBkaXNhYmxlUmlwcGxlIC8+XG4gICAgICAgICAgPC9Ub29sQmFySXRlbT5cbiAgICAgICAgICA8VG9vbEJhckl0ZW0+XG5cbiAgICAgICAgICAgIFNldFRDUFxuICAgICAgICAgIDwvVG9vbEJhckl0ZW0+XG4gICAgICAgICAgPFRvb2xCYXJJdGVtPlxuICAgICAgICAgICAgPFRvb2xCYXJJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uVXBkYXRlKHtcblxuICAgICAgICAgICAgfSl9IGljb249e1JvYm90SW5kdXN0cmlhbEljb259IGRpc2FibGVSaXBwbGUgLz5cbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuXG5cbiAgICAgICAgPC9Ub29sQmFyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2ltdWxhdGlvbjNEXCI+XG4gICAgICAgICAgPERlZmF1bHRQbGF5Z3JvdW5kIGFudGlhbGlhcyBvblNjZW5lUmVhZHk9e29uU2NlbmVSZWFkeX0gb25SZW5kZXI9e29uUmVuZGVyfSBpZD1cIm15LWNhbnZhc1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuICAgICk7XG4gIH0sXG4pO1xuXG5leHBvcnQgdHlwZSBTaW11bGF0b3JUeXBlID0gUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU2ltdWxhdG9yPjtcblxuZXhwb3J0IGRlZmF1bHQgU2ltdWxhdG9yO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQWNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQW9CQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBTUE7QUFNQTtBQU1BO0FBTUE7QUFNQTtBQU1BO0FBM0NBO0FBa0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFKQTtBQUpBO0FBSkE7QUFMQTtBQStCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUtBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=