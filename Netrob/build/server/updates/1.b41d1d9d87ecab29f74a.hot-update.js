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
/* harmony import */ var webrob_src_test_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("webrob/src/test/data");
/* harmony import */ var webrob_src_test_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webrob_src_test_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@babylonjs/core");
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__);
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



 //import "webrob/src/URDFJSONLoader";
//import {loadRobots} from ""
//import createAxes from "webrob/src/AxesHelper.js";



console.log('Direkt vor OnPluginActivatedObservable');
_babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_0__["SceneLoader"].OnPluginActivatedObservable.add(function (loader) {
  if (loader.name === "urdfjson") {
    loader.assetsManager = assetsManager;
    console.log('Injected AssetManager');
  }
});
console.log('Direkt nach OnPluginActivatedObservable'); //import "./URDFJSONLoader"
//import {URDFJSONLoader} from "webrob/src/URDFJSONLoader"

console.log('nach import urdfjson');


 //import Robot from 'webrob/src/robot/Robot.js'






 // $FlowExpectError

 //import InputController from "webrob/src/InputController.js";

const defaultSimulationConfig = Object(_SimulatorEditor__WEBPACK_IMPORTED_MODULE_14__["generateConfigFromXml"])(_default_simulation_xml__WEBPACK_IMPORTED_MODULE_15___default.a);
var inputController;
const bgIntensity = 0.8; //export type SimulatorZoomAction = 'ZOOM_IN' | 'ZOOM_100' | 'ZOOM_OUT' | 'ZOOM_FIT';

 // Augments the scene with the debug methods

 //import { TEST_CMDS } from "webrob/src/test/data"; // Injects a local ES6 version of the inspector to prevent automatically relying on the none compatible version

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


/** 
function inputsProcessed(forceupdate = false) {
  const inputs = inputController.inputs
  const fastscale = 1 + (inputs.fast * 2) // inputs.fast: [0, 1] -> [1, 2]
  const slowscale = (1 - (Math.min(inputs.slow, 0.97))) // inputs.slow: [0, 1] -> [0, 1]

  const scale = scene.getAnimationRatio() * 0.01 * fastscale * slowscale
  let shift = Vector3.Zero()
  if (inputs.mode > 0.5) {
    shift = new Vector3(-inputs.yAxis, inputs.xAxis, inputs.zAxis).scale(scale)
    const shiftQuaternion = Quaternion.FromEulerVector(shift)
    tcp.rotationQuaternion = tcp.rotationQuaternion.multiply(shiftQuaternion)
   // allrobots.forEach(r => r.setTCPTo(tcp.position, tcp.rotationQuaternion))
    rendering = true
  } else {
    shift = new Vector3(-inputs.xAxis, inputs.yAxis, inputs.zAxis).scale(scale * 0.3) // TODO rotate viewer pos
    if (shift.length() > 0 || forceupdate) {
      //todo
      // tcp.position = tcp.position.add(shift)
      //allrobots.forEach(r => r.setTCPTo(tcp.position, tcp.rotationQuaternion))
      rendering = true
    }
  }
  try {
    if (inputController.changedInputs.tool1 && inputs.tool1 >= 0.5) {
      console.log('Gripping')
      /*
      if (coneMaterial.diffuseColor.equals(Color3.Gray())){
          coneMaterial.diffuseColor = Color3.Black()
          console.log('Gripping')
          //robotInterface.send(CommandFactory.SetEndEffector('Gripping', 1.0))
      } else {
          coneMaterial.diffuseColor = Color3.Gray()
          console.log('Releasing')
          //robotInterface.send(CommandFactory.SetEndEffector('Releasing', 0.0))
      } 
    }
  } catch (e) {
    console.log(e.message)
  }
}
*/

const robotData = [
/** 
 {
   path: "robot/ur_description/urdf/ur5_joint_limited_robot.urdfjson",
   pos: new Vector3(0,0,0),
   rot: eulerToQuaternion(new Vector3(0, 0,0)),
   chains: [{
       base: 'base_link',
       flange: 'tool0',
       ik: 'wasmik',
       ikparam: {path: "robot/ur_description/urdf/ur5_joint_limited_robot.js"},
       tools: [{
           position: new Vector3(0,0,0.1),
           rotationQuaternion: eulerToQuaternion(new Vector3(0, Math.PI/2,0)),
           type: 'vacuumGripper'
       }]
   }]
 },
**/
{
  path: "robot/kuka_kr6_support/urdf/kr6r700sixx.urdfjson",
  pos: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"](0, 0, 0),
  rot: Object(eulerutil_src_EulerUtil_js__WEBPACK_IMPORTED_MODULE_8__["eulerToQuaternion"])(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"](0, 0, 0)),
  chains: [{
    base: 'base_link',
    flange: 'tool0',
    ik: 'wasmik',
    ikparam: {
      path: "robot/kuka_kr6_support/urdf/kr6r700sixx.js"
    },
    tools: [{
      position: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"](0, 0, 0.05),
      rotationQuaternion: Object(eulerutil_src_EulerUtil_js__WEBPACK_IMPORTED_MODULE_8__["eulerToQuaternion"])(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"](0, Math.PI / 2, 0)),
      type: 'vacuumGripper',
      visual: {
        parameter: {
          diameter: 0.01,
          height: 0.05
        },
        position: new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"](0, 0, 0.025),
        rotationQuaternion: Object(eulerutil_src_EulerUtil_js__WEBPACK_IMPORTED_MODULE_8__["eulerToQuaternion"])(new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"](Math.PI / 2, 0, 0))
      }
    }]
  }]
}
/** 
  {
    path: "robot/festo_description/urdf/excm40.urdfjson",
    pos: new Vector3(0, 0, 0),
    rot: eulerToQuaternion(new Vector3(0, 0, 0)),
    chains: [{
      base: 'base_link',
      flange: 'axis3',
      ik: 'cartesianik',
      tools: [{
        position: new Vector3(0, 0, -0.05),
        rotationQuaternion: eulerToQuaternion(new Vector3(0, 0, 0)),
        type: 'vacuumGripper',
        visual: {
          parameter: { diameter: 0.01, height: 0.05 },
          position: new Vector3(0, 0, -0.025),
          rotationQuaternion: eulerToQuaternion(new Vector3(Math.PI / 2, 0, 0)),
        }
      }]
    }]

  },

**/
//{path: "robot/pr2_description/robots/", file: 'pr2.urdfjson', pos: new Vector3(0,0,0)},
];
let allrobots = null;
Simulator = null;
Simulator = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](({
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
    var camera = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["FreeCamera"]("camera1", new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"](0, 5, -10), scene); // This targets the camera to scene origin

    camera.setTarget(_babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"].Zero());
    const canvas = scene.getEngine().getRenderingCanvas(); // This attaches the camera to the canvas

    camera.attachControl(canvas, true); // This creates a light, aiming 0,1,0 - to the sky (non-mesh)

    var light = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["HemisphericLight"]("light", new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["Vector3"](0, 1, 0), scene); // Default intensity is 1. Let's dim the light a small amount

    light.intensity = 0.7;
    inputController = new webrob__WEBPACK_IMPORTED_MODULE_2__["InputController"](scene);
    inputController.setInputDefinition(inputsDef);
    inputController.currentInputsProcessed.add(() => inputsProcessed());
    const axes = Object(webrob__WEBPACK_IMPORTED_MODULE_2__["createAxes"])(scene, 0.5, 1.0, true);
    assetsManager = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_5__["AssetsManager"](scene);
    _babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_0__["SceneLoader"].RegisterPlugin(new webrob__WEBPACK_IMPORTED_MODULE_2__["URDFJSONLoader"]());
    scene.render();
    Object(webrob__WEBPACK_IMPORTED_MODULE_2__["loadRobots"])(robotData, scene, assetsManager).then(async robots => {
      allrobots = robots;
      const r = allrobots[0]; //inputsProcessed(true)

      scene.render(); //   await r.ptp(Matrix.Compose(Vector3.One(), eulerToQuaternion(new Vector3(0, Math.PI / 2, -Math.PI + 0.1)), new Vector3(0.3, 0.4, 0.3)),scene)
      // r.speed = 0.2

      /**
      await  r.setTCPTo(new Vector3(0.3, 0.3, 0.3), eulerToQuaternion(new Vector3(0, Math.PI / 2, -Math.PI + 0.1)))
      r.setTCPTo( new Vector3(0.3, 0.3, 0.3), eulerToQuaternion(new Vector3(0, Math.PI / 2, -Math.PI + 0.1)))
      await r.MoveTo({Straight: false, Pose: {'A': 0, 'B': Math.PI / 2, 'C':-Math.PI + 0.1, 'X':300, 'Y':400, 'Z': 300}},scene)
      await r.lin(Matrix.Compose(Vector3.One(), eulerToQuaternion(new Vector3(0, Math.PI / 2, -Math.PI + 0.1)), new Vector3(0.3, 0.5, 0.3)),scene)
      r.SetEndEffectorParameters({setting: 1.0})
      await r.ptp(Matrix.Compose(Vector3.One(), eulerToQuaternion(new Vector3(0, Math.PI / 2, -Math.PI + 0.1)), new Vector3(0.3, 0.3, 0.3)),scene)
      r.SetEndEffectorParameters({setting: 0.0})
      await r.ptp(Matrix.Compose(Vector3.One(), eulerToQuaternion(new Vector3(0, Math.PI / 2, -Math.PI + 0.1)), new Vector3(0.3, 0.4, 0.3)),scene)
      */
      // await executeMultiRobotProgram(allrobots, TEST_CMDS,scene)
    });
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
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_4___default()(_Simulator_scss__WEBPACK_IMPORTED_MODULE_12___default.a);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: _Simulator_scss__WEBPACK_IMPORTED_MODULE_12___default.a.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 9
    }
  }, running ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: "terminate-and-reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => {
      Object(webrob__WEBPACK_IMPORTED_MODULE_2__["executeMultiRobotProgram"])(allrobots, webrob_src_test_data__WEBPACK_IMPORTED_MODULE_3__["TEST_CMDS"], scene);
    },
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["TerminateAndResetIcon"],
    color: "red",
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 15
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: "reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => {//  onExecutionAction({ action: 'RESET' });
    },
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["ResetIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
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
      lineNumber: 385,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
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
      lineNumber: 396,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
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
      lineNumber: 402,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
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
      lineNumber: 408,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
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
      lineNumber: 414,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => onUpdate({}),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["RotateOrbitIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => onUpdate({}),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["ResizeIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => onUpdate({}),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["ArrowAllIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 11
    }
  }, "SetTCP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: () => onUpdate({}),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_6__["RobotIndustrialIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "Simulation3D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
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
      lineNumber: 450,
      columnNumber: 11
    }
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Simulator);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8xLmI0MWQxZDlkODdlY2FiMjlmNzRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9OZXRyb2Ivc3JjL2NvbXBvbmVudHMvaWRlL1NpbXVsYXRvci9TaW11bGF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCB7IFNjZW5lTG9hZGVyIH0gZnJvbSBcIkBiYWJ5bG9uanMvY29yZS9Mb2FkaW5nL3NjZW5lTG9hZGVyXCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSW5wdXRDb250cm9sbGVyLCBsb2FkUm9ib3RzLCBjcmVhdGVBeGVzLCBVUkRGSlNPTkxvYWRlciwgZXhlY3V0ZU11bHRpUm9ib3RQcm9ncmFtIH0gZnJvbSBcIndlYnJvYlwiXG5pbXBvcnQgeyBURVNUX0NNRFMgfSBmcm9tIFwid2Vicm9iL3NyYy90ZXN0L2RhdGFcIlxuLy9pbXBvcnQgXCJ3ZWJyb2Ivc3JjL1VSREZKU09OTG9hZGVyXCI7XG4vL2ltcG9ydCB7bG9hZFJvYm90c30gZnJvbSBcIlwiXG5cbi8vaW1wb3J0IGNyZWF0ZUF4ZXMgZnJvbSBcIndlYnJvYi9zcmMvQXhlc0hlbHBlci5qc1wiO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci91c2VTdHlsZXMnO1xuaW1wb3J0IHtcbiAgRW5naW5lLFxuICBTY2VuZSxcbiAgQ29sb3IzLFxuICBWZWN0b3IzLFxuICBBcmNSb3RhdGVDYW1lcmEsXG4gIEhlbWlzcGhlcmljTGlnaHQsXG4gIEZyZWVDYW1lcmEsXG4gIFRvb2xzLFxuICBEZXZpY2VUeXBlLFxuICBYYm94SW5wdXQsXG4gIER1YWxTaG9ja0lucHV0LCBRdWF0ZXJuaW9uXG4gICwgQXNzZXRzTWFuYWdlciwgTWVzaEJ1aWxkZXIsIFN0YW5kYXJkTWF0ZXJpYWwsIFRyYW5zZm9ybU5vZGUsIE1hdHJpeCwgTG9hZGVyc1xufSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlXCI7XG5jb25zb2xlLmxvZygnRGlyZWt0IHZvciBPblBsdWdpbkFjdGl2YXRlZE9ic2VydmFibGUnKVxuXG5TY2VuZUxvYWRlci5PblBsdWdpbkFjdGl2YXRlZE9ic2VydmFibGUuYWRkKGZ1bmN0aW9uIChsb2FkZXIpIHtcbiAgaWYgKGxvYWRlci5uYW1lID09PSBcInVyZGZqc29uXCIpIHtcbiAgICBsb2FkZXIuYXNzZXRzTWFuYWdlciA9IGFzc2V0c01hbmFnZXI7XG4gICAgY29uc29sZS5sb2coJ0luamVjdGVkIEFzc2V0TWFuYWdlcicpXG5cbiAgfVxufSk7XG5jb25zb2xlLmxvZygnRGlyZWt0IG5hY2ggT25QbHVnaW5BY3RpdmF0ZWRPYnNlcnZhYmxlJylcbi8vaW1wb3J0IFwiLi9VUkRGSlNPTkxvYWRlclwiXG4vL2ltcG9ydCB7VVJERkpTT05Mb2FkZXJ9IGZyb20gXCJ3ZWJyb2Ivc3JjL1VSREZKU09OTG9hZGVyXCJcbmNvbnNvbGUubG9nKCduYWNoIGltcG9ydCB1cmRmanNvbicpXG5cbmltcG9ydCB7XG4gIFRlcm1pbmF0ZUljb24sXG4gIFJlc2V0SWNvbixcbiAgVGVybWluYXRlQW5kUmVzZXRJY29uLFxuICBab29tSW5JY29uLFxuICBab29tT3V0SWNvbixcbiAgWm9vbUZpdEljb24sXG4gIFpvb21SZXNldEljb24sXG4gIFJvdGF0ZU9yYml0SWNvbixcbiAgUmVzaXplSWNvbixcbiAgUm9ib3RJbmR1c3RyaWFsSWNvbixcbiAgQXJyb3dBbGxJY29uLFxuXG59IGZyb20gJy4uLy4uL21pc2MvcGFsZXR0ZSc7XG5pbXBvcnQgKiBhcyBob29rcyBmcm9tICcuLi8uLi9taXNjL2hvb2tzJztcbmltcG9ydCB7IGV1bGVyVG9RdWF0ZXJuaW9uIH0gZnJvbSAnZXVsZXJ1dGlsL3NyYy9FdWxlclV0aWwuanMnO1xuLy9pbXBvcnQgUm9ib3QgZnJvbSAnd2Vicm9iL3NyYy9yb2JvdC9Sb2JvdC5qcydcblxuaW1wb3J0IHsgdHlwZSBFeGVjdXRpb25BY3Rpb24gfSBmcm9tICcuLi9JZGUnO1xuaW1wb3J0IFRvb2xCYXIgZnJvbSAnLi4vVG9vbEJhcic7XG5pbXBvcnQgVG9vbEJhckljb25CdXR0b24gZnJvbSAnLi4vVG9vbEJhci9Ub29sQmFySWNvbkJ1dHRvbic7XG5pbXBvcnQgVG9vbEJhckl0ZW0gZnJvbSAnLi4vVG9vbEJhci9Ub29sQmFySXRlbSc7XG5cbmltcG9ydCBzIGZyb20gJy4vU2ltdWxhdG9yLnNjc3MnO1xuXG5pbXBvcnQgeyBTaW11bGF0aW9uIH0gZnJvbSAnLi9zaW11bGF0aW9uJztcblxuaW1wb3J0IHsgZ2VuZXJhdGVDb25maWdGcm9tWG1sIH0gZnJvbSAnLi4vU2ltdWxhdG9yRWRpdG9yJztcbi8vICRGbG93RXhwZWN0RXJyb3JcbmltcG9ydCBkZWZhdWx0U2ltdWxhdGlvblhtbCBmcm9tICcuL2RlZmF1bHRfc2ltdWxhdGlvbi54bWwnO1xuLy9pbXBvcnQgSW5wdXRDb250cm9sbGVyIGZyb20gXCJ3ZWJyb2Ivc3JjL0lucHV0Q29udHJvbGxlci5qc1wiO1xuY29uc3QgZGVmYXVsdFNpbXVsYXRpb25Db25maWcgPSBnZW5lcmF0ZUNvbmZpZ0Zyb21YbWwoZGVmYXVsdFNpbXVsYXRpb25YbWwpO1xudmFyIGlucHV0Q29udHJvbGxlcjtcblxuY29uc3QgYmdJbnRlbnNpdHkgPSAwLjhcblxuXG4vL2V4cG9ydCB0eXBlIFNpbXVsYXRvclpvb21BY3Rpb24gPSAnWk9PTV9JTicgfCAnWk9PTV8xMDAnIHwgJ1pPT01fT1VUJyB8ICdaT09NX0ZJVCc7XG5cblxuaW1wb3J0IFwiQGJhYnlsb25qcy9jb3JlL0RlYnVnL2RlYnVnTGF5ZXJcIjsgLy8gQXVnbWVudHMgdGhlIHNjZW5lIHdpdGggdGhlIGRlYnVnIG1ldGhvZHNcbmltcG9ydCBcIkBiYWJ5bG9uanMvaW5zcGVjdG9yXCI7XG4vL2ltcG9ydCB7IFRFU1RfQ01EUyB9IGZyb20gXCJ3ZWJyb2Ivc3JjL3Rlc3QvZGF0YVwiOyAvLyBJbmplY3RzIGEgbG9jYWwgRVM2IHZlcnNpb24gb2YgdGhlIGluc3BlY3RvciB0byBwcmV2ZW50IGF1dG9tYXRpY2FsbHkgcmVseWluZyBvbiB0aGUgbm9uZSBjb21wYXRpYmxlIHZlcnNpb25cblxuY29uc3QgaW5wdXRzRGVmID0ge1xuICB4QXhpczogW1xuICAgIFtEZXZpY2VUeXBlLktleWJvYXJkLCBbLSdTJy5jaGFyQ29kZUF0KDApLCAnVycuY2hhckNvZGVBdCgwKV1dLFxuICAgIFtEZXZpY2VUeXBlLkR1YWxTaG9jaywgW0R1YWxTaG9ja0lucHV0LkxTdGlja1hBeGlzXV0sXG4gICAgW0RldmljZVR5cGUuWGJveCwgW1hib3hJbnB1dC5MU3RpY2tYQXhpc11dLFxuICAgIFtEZXZpY2VUeXBlLkdlbmVyaWMsIFtYYm94SW5wdXQuTFN0aWNrWEF4aXNdXSxcbiAgXSxcbiAgeUF4aXM6IFtcbiAgICBbRGV2aWNlVHlwZS5LZXlib2FyZCwgWy0nQScuY2hhckNvZGVBdCgwKSwgJ0QnLmNoYXJDb2RlQXQoMCldXSxcbiAgICBbRGV2aWNlVHlwZS5EdWFsU2hvY2ssIFstRHVhbFNob2NrSW5wdXQuTFN0aWNrWUF4aXNdXSxcbiAgICBbRGV2aWNlVHlwZS5YYm94LCBbLVhib3hJbnB1dC5MU3RpY2tZQXhpc11dLFxuICAgIFtEZXZpY2VUeXBlLkdlbmVyaWMsIFstWGJveElucHV0LkxTdGlja1lBeGlzXV0sXG4gIF0sXG4gIHpBeGlzOiBbXG4gICAgW0RldmljZVR5cGUuS2V5Ym9hcmQsIFstJ1EnLmNoYXJDb2RlQXQoMCksICdFJy5jaGFyQ29kZUF0KDApXV0sXG4gICAgW0RldmljZVR5cGUuRHVhbFNob2NrLCBbLUR1YWxTaG9ja0lucHV0LlJTdGlja1lBeGlzXV0sXG4gICAgW0RldmljZVR5cGUuWGJveCwgWy1YYm94SW5wdXQuUlN0aWNrWUF4aXNdXSxcbiAgICBbRGV2aWNlVHlwZS5HZW5lcmljLCBbLVhib3hJbnB1dC5SU3RpY2tZQXhpc11dLFxuICBdLFxuICBtb2RlOiBbXG4gICAgW0RldmljZVR5cGUuS2V5Ym9hcmQsIFsnICcuY2hhckNvZGVBdCgwKV1dLFxuICAgIFtEZXZpY2VUeXBlLkR1YWxTaG9jaywgW0R1YWxTaG9ja0lucHV0LlIxLCBEdWFsU2hvY2tJbnB1dC5MMV1dLFxuICAgIFtEZXZpY2VUeXBlLlhib3gsIFtYYm94SW5wdXQuUkIsIFhib3hJbnB1dC5MQl1dLFxuICAgIFtEZXZpY2VUeXBlLkdlbmVyaWMsIFtYYm94SW5wdXQuUkIsIFhib3hJbnB1dC5MQl1dLFxuICBdLFxuICBmYXN0OiBbXG4gICAgW0RldmljZVR5cGUuS2V5Ym9hcmQsIFsnTycuY2hhckNvZGVBdCgwKV1dLFxuICAgIFtEZXZpY2VUeXBlLkR1YWxTaG9jaywgW0R1YWxTaG9ja0lucHV0LlIyXV0sXG4gICAgW0RldmljZVR5cGUuWGJveCwgW1hib3hJbnB1dC5SVF1dLFxuICAgIFtEZXZpY2VUeXBlLkdlbmVyaWMsIFtYYm94SW5wdXQuUlRdXSxcbiAgXSxcbiAgc2xvdzogW1xuICAgIFtEZXZpY2VUeXBlLktleWJvYXJkLCBbJ0wnLmNoYXJDb2RlQXQoMCldXSxcbiAgICBbRGV2aWNlVHlwZS5EdWFsU2hvY2ssIFtEdWFsU2hvY2tJbnB1dC5MMl1dLFxuICAgIFtEZXZpY2VUeXBlLlhib3gsIFtYYm94SW5wdXQuTFRdXSxcbiAgICBbRGV2aWNlVHlwZS5HZW5lcmljLCBbWGJveElucHV0LkxUXV0sXG4gIF0sXG4gIHRvb2wxOiBbXG4gICAgW0RldmljZVR5cGUuS2V5Ym9hcmQsIFsnMScuY2hhckNvZGVBdCgwKV1dLFxuICAgIFtEZXZpY2VUeXBlLkR1YWxTaG9jaywgW0R1YWxTaG9ja0lucHV0LkNyb3NzXV0sXG4gICAgW0RldmljZVR5cGUuWGJveCwgW1hib3hJbnB1dC5BXV0sXG4gICAgW0RldmljZVR5cGUuR2VuZXJpYywgW1hib3hJbnB1dC5BXV0sXG4gIF0sXG4gIHRvb2wyOiBbXG4gICAgW0RldmljZVR5cGUuS2V5Ym9hcmQsIFsnMicuY2hhckNvZGVBdCgwKV1dLFxuICAgIFtEZXZpY2VUeXBlLkR1YWxTaG9jaywgW0R1YWxTaG9ja0lucHV0LkNpcmNsZV1dLFxuICAgIFtEZXZpY2VUeXBlLlhib3gsIFtYYm94SW5wdXQuQl1dLFxuICAgIFtEZXZpY2VUeXBlLkdlbmVyaWMsIFtYYm94SW5wdXQuQl1dLFxuICBdLFxufTtcbnZhciBhc3NldHNNYW5hZ2VyO1xuLyoqXG4gKiBUaGUgc2ltdWxhdG9yIGRpc3BsYXlzIGEgMkQgZW52aXJvbm1lbnQgY29udGFpbmluZyBhIHNpbXVsYXRlZCByb2JvdC5cbiAqXG4gKiBCZXNpZGVzIHRoZSBzaW11bGF0aW9uIGl0c2VsZiwgdGhlIHRvb2xiYXIgYWxsb3dzIHRlcm1pbmF0aW5nIHByb2dyYW1zIGFuZCByZXNldHRpbmcgdGhlIHNpbXVsYXRpb24uXG4gKi9cbmltcG9ydCBEZWZhdWx0UGxheWdyb3VuZCBmcm9tIFwiLi9EZWZhdWx0UGxheWdyb3VuZFwiO1xuLyoqIFxuZnVuY3Rpb24gaW5wdXRzUHJvY2Vzc2VkKGZvcmNldXBkYXRlID0gZmFsc2UpIHtcbiAgY29uc3QgaW5wdXRzID0gaW5wdXRDb250cm9sbGVyLmlucHV0c1xuICBjb25zdCBmYXN0c2NhbGUgPSAxICsgKGlucHV0cy5mYXN0ICogMikgLy8gaW5wdXRzLmZhc3Q6IFswLCAxXSAtPiBbMSwgMl1cbiAgY29uc3Qgc2xvd3NjYWxlID0gKDEgLSAoTWF0aC5taW4oaW5wdXRzLnNsb3csIDAuOTcpKSkgLy8gaW5wdXRzLnNsb3c6IFswLCAxXSAtPiBbMCwgMV1cblxuICBjb25zdCBzY2FsZSA9IHNjZW5lLmdldEFuaW1hdGlvblJhdGlvKCkgKiAwLjAxICogZmFzdHNjYWxlICogc2xvd3NjYWxlXG4gIGxldCBzaGlmdCA9IFZlY3RvcjMuWmVybygpXG4gIGlmIChpbnB1dHMubW9kZSA+IDAuNSkge1xuICAgIHNoaWZ0ID0gbmV3IFZlY3RvcjMoLWlucHV0cy55QXhpcywgaW5wdXRzLnhBeGlzLCBpbnB1dHMuekF4aXMpLnNjYWxlKHNjYWxlKVxuICAgIGNvbnN0IHNoaWZ0UXVhdGVybmlvbiA9IFF1YXRlcm5pb24uRnJvbUV1bGVyVmVjdG9yKHNoaWZ0KVxuICAgIHRjcC5yb3RhdGlvblF1YXRlcm5pb24gPSB0Y3Aucm90YXRpb25RdWF0ZXJuaW9uLm11bHRpcGx5KHNoaWZ0UXVhdGVybmlvbilcbiAgIC8vIGFsbHJvYm90cy5mb3JFYWNoKHIgPT4gci5zZXRUQ1BUbyh0Y3AucG9zaXRpb24sIHRjcC5yb3RhdGlvblF1YXRlcm5pb24pKVxuICAgIHJlbmRlcmluZyA9IHRydWVcbiAgfSBlbHNlIHtcbiAgICBzaGlmdCA9IG5ldyBWZWN0b3IzKC1pbnB1dHMueEF4aXMsIGlucHV0cy55QXhpcywgaW5wdXRzLnpBeGlzKS5zY2FsZShzY2FsZSAqIDAuMykgLy8gVE9ETyByb3RhdGUgdmlld2VyIHBvc1xuICAgIGlmIChzaGlmdC5sZW5ndGgoKSA+IDAgfHwgZm9yY2V1cGRhdGUpIHtcbiAgICAgIC8vdG9kb1xuICAgICAgLy8gdGNwLnBvc2l0aW9uID0gdGNwLnBvc2l0aW9uLmFkZChzaGlmdClcbiAgICAgIC8vYWxscm9ib3RzLmZvckVhY2gociA9PiByLnNldFRDUFRvKHRjcC5wb3NpdGlvbiwgdGNwLnJvdGF0aW9uUXVhdGVybmlvbikpXG4gICAgICByZW5kZXJpbmcgPSB0cnVlXG4gICAgfVxuICB9XG4gIHRyeSB7XG4gICAgaWYgKGlucHV0Q29udHJvbGxlci5jaGFuZ2VkSW5wdXRzLnRvb2wxICYmIGlucHV0cy50b29sMSA+PSAwLjUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdHcmlwcGluZycpXG4gICAgICAvKlxuICAgICAgaWYgKGNvbmVNYXRlcmlhbC5kaWZmdXNlQ29sb3IuZXF1YWxzKENvbG9yMy5HcmF5KCkpKXtcbiAgICAgICAgICBjb25lTWF0ZXJpYWwuZGlmZnVzZUNvbG9yID0gQ29sb3IzLkJsYWNrKClcbiAgICAgICAgICBjb25zb2xlLmxvZygnR3JpcHBpbmcnKVxuICAgICAgICAgIC8vcm9ib3RJbnRlcmZhY2Uuc2VuZChDb21tYW5kRmFjdG9yeS5TZXRFbmRFZmZlY3RvcignR3JpcHBpbmcnLCAxLjApKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25lTWF0ZXJpYWwuZGlmZnVzZUNvbG9yID0gQ29sb3IzLkdyYXkoKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWxlYXNpbmcnKVxuICAgICAgICAgIC8vcm9ib3RJbnRlcmZhY2Uuc2VuZChDb21tYW5kRmFjdG9yeS5TZXRFbmRFZmZlY3RvcignUmVsZWFzaW5nJywgMC4wKSlcbiAgICAgIH0gXG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZS5tZXNzYWdlKVxuICB9XG59XG4qL1xuY29uc3Qgcm9ib3REYXRhID0gW1xuICAvKiogXG4gICB7XG4gICAgIHBhdGg6IFwicm9ib3QvdXJfZGVzY3JpcHRpb24vdXJkZi91cjVfam9pbnRfbGltaXRlZF9yb2JvdC51cmRmanNvblwiLFxuICAgICBwb3M6IG5ldyBWZWN0b3IzKDAsMCwwKSxcbiAgICAgcm90OiBldWxlclRvUXVhdGVybmlvbihuZXcgVmVjdG9yMygwLCAwLDApKSxcbiAgICAgY2hhaW5zOiBbe1xuICAgICAgICAgYmFzZTogJ2Jhc2VfbGluaycsXG4gICAgICAgICBmbGFuZ2U6ICd0b29sMCcsXG4gICAgICAgICBpazogJ3dhc21paycsXG4gICAgICAgICBpa3BhcmFtOiB7cGF0aDogXCJyb2JvdC91cl9kZXNjcmlwdGlvbi91cmRmL3VyNV9qb2ludF9saW1pdGVkX3JvYm90LmpzXCJ9LFxuICAgICAgICAgdG9vbHM6IFt7XG4gICAgICAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IzKDAsMCwwLjEpLFxuICAgICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbjogZXVsZXJUb1F1YXRlcm5pb24obmV3IFZlY3RvcjMoMCwgTWF0aC5QSS8yLDApKSxcbiAgICAgICAgICAgICB0eXBlOiAndmFjdXVtR3JpcHBlcidcbiAgICAgICAgIH1dXG4gICAgIH1dXG4gXG4gfSxcbiAqKi9cbiAge1xuICAgIHBhdGg6IFwicm9ib3Qva3VrYV9rcjZfc3VwcG9ydC91cmRmL2tyNnI3MDBzaXh4LnVyZGZqc29uXCIsXG4gICAgcG9zOiBuZXcgVmVjdG9yMygwLCAwLCAwKSxcbiAgICByb3Q6IGV1bGVyVG9RdWF0ZXJuaW9uKG5ldyBWZWN0b3IzKDAsIDAsIDApKSxcbiAgICBjaGFpbnM6IFt7XG4gICAgICBiYXNlOiAnYmFzZV9saW5rJyxcbiAgICAgIGZsYW5nZTogJ3Rvb2wwJyxcbiAgICAgIGlrOiAnd2FzbWlrJyxcbiAgICAgIGlrcGFyYW06IHsgcGF0aDogXCJyb2JvdC9rdWthX2tyNl9zdXBwb3J0L3VyZGYva3I2cjcwMHNpeHguanNcIiB9LFxuICAgICAgdG9vbHM6IFt7XG4gICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMygwLCAwLCAwLjA1KSxcbiAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uOiBldWxlclRvUXVhdGVybmlvbihuZXcgVmVjdG9yMygwLCBNYXRoLlBJIC8gMiwgMCkpLFxuICAgICAgICB0eXBlOiAndmFjdXVtR3JpcHBlcicsXG4gICAgICAgIHZpc3VhbDoge1xuICAgICAgICAgIHBhcmFtZXRlcjogeyBkaWFtZXRlcjogMC4wMSwgaGVpZ2h0OiAwLjA1IH0sXG4gICAgICAgICAgcG9zaXRpb246IG5ldyBWZWN0b3IzKDAsIDAsIDAuMDI1KSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb246IGV1bGVyVG9RdWF0ZXJuaW9uKG5ldyBWZWN0b3IzKE1hdGguUEkgLyAyLCAwLCAwKSksXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfV1cblxuICB9LFxuLyoqIFxuICB7XG4gICAgcGF0aDogXCJyb2JvdC9mZXN0b19kZXNjcmlwdGlvbi91cmRmL2V4Y200MC51cmRmanNvblwiLFxuICAgIHBvczogbmV3IFZlY3RvcjMoMCwgMCwgMCksXG4gICAgcm90OiBldWxlclRvUXVhdGVybmlvbihuZXcgVmVjdG9yMygwLCAwLCAwKSksXG4gICAgY2hhaW5zOiBbe1xuICAgICAgYmFzZTogJ2Jhc2VfbGluaycsXG4gICAgICBmbGFuZ2U6ICdheGlzMycsXG4gICAgICBpazogJ2NhcnRlc2lhbmlrJyxcbiAgICAgIHRvb2xzOiBbe1xuICAgICAgICBwb3NpdGlvbjogbmV3IFZlY3RvcjMoMCwgMCwgLTAuMDUpLFxuICAgICAgICByb3RhdGlvblF1YXRlcm5pb246IGV1bGVyVG9RdWF0ZXJuaW9uKG5ldyBWZWN0b3IzKDAsIDAsIDApKSxcbiAgICAgICAgdHlwZTogJ3ZhY3V1bUdyaXBwZXInLFxuICAgICAgICB2aXN1YWw6IHtcbiAgICAgICAgICBwYXJhbWV0ZXI6IHsgZGlhbWV0ZXI6IDAuMDEsIGhlaWdodDogMC4wNSB9LFxuICAgICAgICAgIHBvc2l0aW9uOiBuZXcgVmVjdG9yMygwLCAwLCAtMC4wMjUpLFxuICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbjogZXVsZXJUb1F1YXRlcm5pb24obmV3IFZlY3RvcjMoTWF0aC5QSSAvIDIsIDAsIDApKSxcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9XVxuXG4gIH0sXG5cbioqL1xuICAvL3twYXRoOiBcInJvYm90L3ByMl9kZXNjcmlwdGlvbi9yb2JvdHMvXCIsIGZpbGU6ICdwcjIudXJkZmpzb24nLCBwb3M6IG5ldyBWZWN0b3IzKDAsMCwwKX0sXG5cblxuXVxubGV0IGFsbHJvYm90cyA9IG51bGxcbiBTaW11bGF0b3IgPSBudWxsXG4gU2ltdWxhdG9yID0gUmVhY3QuZm9yd2FyZFJlZiA8IFByb3BzLCBJbnN0YW5jZT4gKFxuICAoeyBydW5uaW5nLCB6b29tLCB6b29tTW9kZSwgb25VcGRhdGUsIG9uRXhlY3V0aW9uQWN0aW9uIH06IFByb3BzLCByZWY6IFJlZjxJbnN0YW5jZT4pID0+IHtcbiAgICBjb25zdCBzaW11bGF0aW9uID0gaG9va3MudXNlVmFsdWUoKCkgPT4ge1xuICAgICAgY29uc3Qgc2ltID0gbmV3IFNpbXVsYXRpb24oKTtcbiAgICAgIC8vc2ltLmpzb25Jbml0KGRlZmF1bHRTaW11bGF0aW9uQ29uZmlnKTtcbiAgICAgIHJldHVybiBzaW07XG4gICAgfSk7XG4gICAgO1xuXG4gICAgY29uc3Qgb25TY2VuZVJlYWR5ID0gKHNjZW5lKSA9PiB7XG4gICAgICAvLyBUaGlzIGNyZWF0ZXMgYW5kIHBvc2l0aW9ucyBhIGZyZWUgY2FtZXJhIChub24tbWVzaClcblxuICAgICAgdmFyIGNhbWVyYSA9IG5ldyBGcmVlQ2FtZXJhKFwiY2FtZXJhMVwiLCBuZXcgVmVjdG9yMygwLCA1LCAtMTApLCBzY2VuZSk7XG5cbiAgICAgIC8vIFRoaXMgdGFyZ2V0cyB0aGUgY2FtZXJhIHRvIHNjZW5lIG9yaWdpblxuICAgICAgY2FtZXJhLnNldFRhcmdldChWZWN0b3IzLlplcm8oKSk7XG5cbiAgICAgIGNvbnN0IGNhbnZhcyA9IHNjZW5lLmdldEVuZ2luZSgpLmdldFJlbmRlcmluZ0NhbnZhcygpO1xuXG4gICAgICAvLyBUaGlzIGF0dGFjaGVzIHRoZSBjYW1lcmEgdG8gdGhlIGNhbnZhc1xuICAgICAgY2FtZXJhLmF0dGFjaENvbnRyb2woY2FudmFzLCB0cnVlKTtcblxuICAgICAgLy8gVGhpcyBjcmVhdGVzIGEgbGlnaHQsIGFpbWluZyAwLDEsMCAtIHRvIHRoZSBza3kgKG5vbi1tZXNoKVxuICAgICAgdmFyIGxpZ2h0ID0gbmV3IEhlbWlzcGhlcmljTGlnaHQoXCJsaWdodFwiLCBuZXcgVmVjdG9yMygwLCAxLCAwKSwgc2NlbmUpO1xuXG4gICAgICAvLyBEZWZhdWx0IGludGVuc2l0eSBpcyAxLiBMZXQncyBkaW0gdGhlIGxpZ2h0IGEgc21hbGwgYW1vdW50XG4gICAgICBsaWdodC5pbnRlbnNpdHkgPSAwLjc7XG5cbiAgICAgIGlucHV0Q29udHJvbGxlciA9IG5ldyBJbnB1dENvbnRyb2xsZXIoc2NlbmUpXG4gICAgICBpbnB1dENvbnRyb2xsZXIuc2V0SW5wdXREZWZpbml0aW9uKGlucHV0c0RlZilcbiAgICAgIGlucHV0Q29udHJvbGxlci5jdXJyZW50SW5wdXRzUHJvY2Vzc2VkLmFkZCgoKSA9PiBpbnB1dHNQcm9jZXNzZWQoKSlcblxuICAgICAgY29uc3QgYXhlcyA9IGNyZWF0ZUF4ZXMoc2NlbmUsIDAuNSwgMS4wLCB0cnVlKTtcbiAgICAgIGFzc2V0c01hbmFnZXIgPSBuZXcgQXNzZXRzTWFuYWdlcihzY2VuZSlcbiAgICAgIFNjZW5lTG9hZGVyLlJlZ2lzdGVyUGx1Z2luKG5ldyBVUkRGSlNPTkxvYWRlcigpKVxuXG5cbiAgICAgIHNjZW5lLnJlbmRlcigpO1xuXG4gICAgICBsb2FkUm9ib3RzKHJvYm90RGF0YSwgc2NlbmUsIGFzc2V0c01hbmFnZXIpLnRoZW4oYXN5bmMgKHJvYm90cykgPT4ge1xuICAgICAgICBhbGxyb2JvdHMgPSByb2JvdHNcblxuXG5cbiAgICAgICAgY29uc3QgciA9IGFsbHJvYm90c1swXVxuICAgICAgICAvL2lucHV0c1Byb2Nlc3NlZCh0cnVlKVxuICAgICAgICBzY2VuZS5yZW5kZXIoKVxuXG5cbiAgICAgLy8gICBhd2FpdCByLnB0cChNYXRyaXguQ29tcG9zZShWZWN0b3IzLk9uZSgpLCBldWxlclRvUXVhdGVybmlvbihuZXcgVmVjdG9yMygwLCBNYXRoLlBJIC8gMiwgLU1hdGguUEkgKyAwLjEpKSwgbmV3IFZlY3RvcjMoMC4zLCAwLjQsIDAuMykpLHNjZW5lKVxuXG5cbiAgICAgICAvLyByLnNwZWVkID0gMC4yXG4gICAgICAgLyoqXG4gICAgICAgYXdhaXQgIHIuc2V0VENQVG8obmV3IFZlY3RvcjMoMC4zLCAwLjMsIDAuMyksIGV1bGVyVG9RdWF0ZXJuaW9uKG5ldyBWZWN0b3IzKDAsIE1hdGguUEkgLyAyLCAtTWF0aC5QSSArIDAuMSkpKVxuICAgICAgci5zZXRUQ1BUbyggbmV3IFZlY3RvcjMoMC4zLCAwLjMsIDAuMyksIGV1bGVyVG9RdWF0ZXJuaW9uKG5ldyBWZWN0b3IzKDAsIE1hdGguUEkgLyAyLCAtTWF0aC5QSSArIDAuMSkpKVxuICAgICAgYXdhaXQgci5Nb3ZlVG8oe1N0cmFpZ2h0OiBmYWxzZSwgUG9zZTogeydBJzogMCwgJ0InOiBNYXRoLlBJIC8gMiwgJ0MnOi1NYXRoLlBJICsgMC4xLCAnWCc6MzAwLCAnWSc6NDAwLCAnWic6IDMwMH19LHNjZW5lKVxuICAgICAgYXdhaXQgci5saW4oTWF0cml4LkNvbXBvc2UoVmVjdG9yMy5PbmUoKSwgZXVsZXJUb1F1YXRlcm5pb24obmV3IFZlY3RvcjMoMCwgTWF0aC5QSSAvIDIsIC1NYXRoLlBJICsgMC4xKSksIG5ldyBWZWN0b3IzKDAuMywgMC41LCAwLjMpKSxzY2VuZSlcbiAgICAgIHIuU2V0RW5kRWZmZWN0b3JQYXJhbWV0ZXJzKHtzZXR0aW5nOiAxLjB9KVxuICAgICAgYXdhaXQgci5wdHAoTWF0cml4LkNvbXBvc2UoVmVjdG9yMy5PbmUoKSwgZXVsZXJUb1F1YXRlcm5pb24obmV3IFZlY3RvcjMoMCwgTWF0aC5QSSAvIDIsIC1NYXRoLlBJICsgMC4xKSksIG5ldyBWZWN0b3IzKDAuMywgMC4zLCAwLjMpKSxzY2VuZSlcbiAgICAgIHIuU2V0RW5kRWZmZWN0b3JQYXJhbWV0ZXJzKHtzZXR0aW5nOiAwLjB9KVxuICAgICAgYXdhaXQgci5wdHAoTWF0cml4LkNvbXBvc2UoVmVjdG9yMy5PbmUoKSwgZXVsZXJUb1F1YXRlcm5pb24obmV3IFZlY3RvcjMoMCwgTWF0aC5QSSAvIDIsIC1NYXRoLlBJICsgMC4xKSksIG5ldyBWZWN0b3IzKDAuMywgMC40LCAwLjMpKSxzY2VuZSlcbiAgICAgICAqL1xuICAgIFxuICAgICAgIC8vIGF3YWl0IGV4ZWN1dGVNdWx0aVJvYm90UHJvZ3JhbShhbGxyb2JvdHMsIFRFU1RfQ01EUyxzY2VuZSlcblxuICAgICAgfSlcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogV2lsbCBydW4gb24gZXZlcnkgZnJhbWUgcmVuZGVyLiAgV2UgYXJlIHNwaW5uaW5nIHRoZSBib3ggb24geS1heGlzLlxuICAgICAqL1xuICAgIGNvbnN0IG9uUmVuZGVyID0gKHNjZW5lKSA9PiB7XG5cbiAgICB9O1xuXG5cbiAgICAvLyBtb3VudCBzaW11bGF0b3IgaW4gdGhlIHRhcmdldCBhbmQgc2ltdWxhdGUgY29udGludW91c2x5XG4gICAgY29uc3QgW3JlbmRlclRhcmdldCwgc2V0UmVuZGVyVGFyZ2V0XSA9IFJlYWN0LnVzZVN0YXRlIDwgSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsID4gKG51bGwpO1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAocmVuZGVyVGFyZ2V0ID09PSBudWxsKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICBzaW11bGF0aW9uLm1vdW50KHJlbmRlclRhcmdldCk7XG4gICAgICBzaW11bGF0aW9uLnN0YXJ0TWF0dGVyKCk7XG4gICAgICBzaW11bGF0aW9uLnN0YXJ0UmVuZGVyKCk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBzaW11bGF0aW9uLnN0b3BSZW5kZXIoKTtcbiAgICAgICAgc2ltdWxhdGlvbi5zdG9wTWF0dGVyKCk7XG4gICAgICAgIHNpbXVsYXRpb24udW5tb3VudCgpO1xuICAgICAgfTtcbiAgICB9LCBbcmVuZGVyVGFyZ2V0LCBzaW11bGF0aW9uXSk7XG5cbiAgICAvLyBOZWVkIHRvIHVzZSBhIGRlcGVuZGVuY3kgYXJyYXkgaGVyZSwgYmVjYXVzZSBJZGUgcmVxdWlyZXMgYSBzdGFibGUgcmVmLlxuICAgIC8vIE9uIGVhY2ggY2hhbmdlIHRvIHRoZSBTaW11bGF0b3IgcmVmLCBqc29uSW5pdCBpcyBwb3RlbnRpYWxseSBjYWxsZWQuXG4gICAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7IHNpbXVsYXRpb24gfSksIFtzaW11bGF0aW9uXSk7XG5cbiAgICB1c2VTdHlsZXMocyk7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG5cblxuXG4gICAgICAgIDxUb29sQmFyPlxuICAgICAgICAgIHtydW5uaW5nID8gKFxuICAgICAgICAgICAgPFRvb2xCYXJJdGVtIGtleT1cInRlcm1pbmF0ZS1hbmQtcmVzZXRcIj5cbiAgICAgICAgICAgICAgPFRvb2xCYXJJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZXhlY3V0ZU11bHRpUm9ib3RQcm9ncmFtKGFsbHJvYm90cywgVEVTVF9DTURTLHNjZW5lKTtcblxuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpY29uPXtUZXJtaW5hdGVBbmRSZXNldEljb259XG4gICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVG9vbEJhckl0ZW0+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUb29sQmFySXRlbSBrZXk9XCJyZXNldFwiPlxuICAgICAgICAgICAgICA8VG9vbEJhckljb25CdXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyAgb25FeGVjdXRpb25BY3Rpb24oeyBhY3Rpb246ICdSRVNFVCcgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBpY29uPXtSZXNldEljb259XG4gICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Ub29sQmFySXRlbT5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgb25FeGVjdXRpb25BY3Rpb24oeyBhY3Rpb246ICdURVJNSU5BVEUnLCByZXNldDogZmFsc2UgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGljb249e1Rlcm1pbmF0ZUljb259XG4gICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IXJ1bm5pbmd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvVG9vbEJhckl0ZW0+XG4gICAgICAgICAgPFRvb2xCYXJJdGVtPlxuICAgICAgICAgICAgPFRvb2xCYXJJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uVXBkYXRlKHtcbiAgICAgICAgICAgICAgem9vbTogTWF0aC5taW4oem9vbSArIDEwLCAxNTApLFxuICAgICAgICAgICAgICB6b29tTW9kZTogJ01BTlVBTCcsXG4gICAgICAgICAgICB9KX0gaWNvbj17Wm9vbUluSWNvbn0gZGlzYWJsZVJpcHBsZSAvPlxuICAgICAgICAgIDwvVG9vbEJhckl0ZW0+XG4gICAgICAgICAgPFRvb2xCYXJJdGVtPlxuICAgICAgICAgICAgPFRvb2xCYXJJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uVXBkYXRlKHtcbiAgICAgICAgICAgICAgem9vbTogMTAwLFxuICAgICAgICAgICAgICB6b29tTW9kZTogJ01BTlVBTCcsXG4gICAgICAgICAgICB9KX0gaWNvbj17Wm9vbVJlc2V0SWNvbn0gZGlzYWJsZVJpcHBsZSAvPlxuICAgICAgICAgIDwvVG9vbEJhckl0ZW0+XG4gICAgICAgICAgPFRvb2xCYXJJdGVtPlxuICAgICAgICAgICAgPFRvb2xCYXJJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uVXBkYXRlKHtcbiAgICAgICAgICAgICAgem9vbTogTWF0aC5tYXgoem9vbSAtIDEwLCA1MCksXG4gICAgICAgICAgICAgIHpvb21Nb2RlOiAnTUFOVUFMJyxcbiAgICAgICAgICAgIH0pfSBpY29uPXtab29tT3V0SWNvbn0gZGlzYWJsZVJpcHBsZSAvPlxuICAgICAgICAgIDwvVG9vbEJhckl0ZW0+XG4gICAgICAgICAgPFRvb2xCYXJJdGVtPlxuICAgICAgICAgICAgPFRvb2xCYXJJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uVXBkYXRlKHtcbiAgICAgICAgICAgICAgem9vbSxcbiAgICAgICAgICAgICAgem9vbU1vZGU6ICdGSVQnLFxuICAgICAgICAgICAgfSl9IGljb249e1pvb21GaXRJY29ufSBkaXNhYmxlUmlwcGxlIC8+XG4gICAgICAgICAgPC9Ub29sQmFySXRlbT5cblxuXG4gICAgICAgICAgPFRvb2xCYXJJdGVtPlxuICAgICAgICAgICAgPFRvb2xCYXJJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uVXBkYXRlKHtcblxuICAgICAgICAgICAgfSl9IGljb249e1JvdGF0ZU9yYml0SWNvbn0gZGlzYWJsZVJpcHBsZSAvPlxuICAgICAgICAgIDwvVG9vbEJhckl0ZW0+XG4gICAgICAgICAgPFRvb2xCYXJJdGVtPlxuICAgICAgICAgICAgPFRvb2xCYXJJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uVXBkYXRlKHtcblxuICAgICAgICAgICAgfSl9IGljb249e1Jlc2l6ZUljb259IGRpc2FibGVSaXBwbGUgLz5cbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG5cbiAgICAgICAgICAgIH0pfSBpY29uPXtBcnJvd0FsbEljb259IGRpc2FibGVSaXBwbGUgLz5cbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuICAgICAgICAgIDxUb29sQmFySXRlbT5cblxuICAgICAgICAgICAgU2V0VENQXG4gICAgICAgICAgPC9Ub29sQmFySXRlbT5cbiAgICAgICAgICA8VG9vbEJhckl0ZW0+XG4gICAgICAgICAgICA8VG9vbEJhckljb25CdXR0b24gb25DbGljaz17KCkgPT4gb25VcGRhdGUoe1xuXG4gICAgICAgICAgICB9KX0gaWNvbj17Um9ib3RJbmR1c3RyaWFsSWNvbn0gZGlzYWJsZVJpcHBsZSAvPlxuICAgICAgICAgIDwvVG9vbEJhckl0ZW0+XG5cblxuICAgICAgICA8L1Rvb2xCYXI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTaW11bGF0aW9uM0RcIj5cbiAgICAgICAgICA8RGVmYXVsdFBsYXlncm91bmQgYW50aWFsaWFzIG9uU2NlbmVSZWFkeT17b25TY2VuZVJlYWR5fSBvblJlbmRlcj17b25SZW5kZXJ9IGlkPVwibXktY2FudmFzXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgKTtcbiAgfSxcbik7XG5cbmV4cG9ydCB0eXBlIFNpbXVsYXRvclR5cGUgPSBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBTaW11bGF0b3I+O1xuXG5leHBvcnQgZGVmYXVsdCBTaW11bGF0b3I7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFjQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFjQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBTUE7QUFNQTtBQU1BO0FBTUE7QUFNQTtBQU1BO0FBM0NBO0FBa0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBTEE7QUFKQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxFQTtBQXNFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFLQTs7OztBIiwic291cmNlUm9vdCI6IiJ9