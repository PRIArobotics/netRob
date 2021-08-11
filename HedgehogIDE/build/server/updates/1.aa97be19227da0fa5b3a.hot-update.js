require("source-map-support").install();
exports.id = 1;
exports.modules = {

/***/ "./src/components/ide/Simulator/Simulator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@babylonjs/core");
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babylonjs_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@babylonjs/core/Loading/sceneLoader");
/* harmony import */ var _babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babylonjs_core_Loading_sceneLoader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _misc_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/misc/palette.js");
/* harmony import */ var _misc_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/misc/hooks/index.js");
/* harmony import */ var eulerutil_src_EulerUtil_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("eulerutil/src/EulerUtil.js");
/* harmony import */ var eulerutil_src_EulerUtil_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(eulerutil_src_EulerUtil_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var webrob_src_robot_Robot_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("webrob/src/robot/Robot.js");
/* harmony import */ var webrob_src_robot_Robot_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(webrob_src_robot_Robot_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ToolBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/ide/ToolBar/ToolBar.js");
/* harmony import */ var _ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/ide/ToolBar/ToolBarIconButton.js");
/* harmony import */ var _ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/ide/ToolBar/ToolBarItem.js");
/* harmony import */ var _Simulator_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/ide/Simulator/Simulator.scss");
/* harmony import */ var _Simulator_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Simulator_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _simulation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/ide/Simulator/simulation/index.js");
/* harmony import */ var _SimulatorEditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/ide/SimulatorEditor/SimulatorEditor.js");
/* harmony import */ var _default_simulation_xml__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/components/ide/Simulator/default_simulation.xml");
/* harmony import */ var _default_simulation_xml__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_default_simulation_xml__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _DefaultPlayground__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/components/ide/Simulator/DefaultPlayground.js");
var _jsxFileName = "/home/sarah/Documents/Arbeit/github/netRob/HedgehogIDE/src/components/ide/Simulator/Simulator.js";













 // $FlowExpectError


const defaultSimulationConfig = Object(_SimulatorEditor__WEBPACK_IMPORTED_MODULE_13__["generateConfigFromXml"])(_default_simulation_xml__WEBPACK_IMPORTED_MODULE_14___default.a);

/**
 * The simulator displays a 2D environment containing a simulated robot.
 *
 * Besides the simulation itself, the toolbar allows terminating programs and resetting the simulation.
 */

const Simulator = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](({
  running,
  zoom,
  zoomMode,
  onUpdate,
  onExecutionAction
}, ref) => {
  const simulation = _misc_hooks__WEBPACK_IMPORTED_MODULE_5__["useValue"](() => {
    const sim = new _simulation__WEBPACK_IMPORTED_MODULE_12__["Simulation"]();
    sim.jsonInit(defaultSimulationConfig); //return sim;
  });
  let box;

  const onSceneReady = scene => {
    // This creates and positions a free camera (non-mesh)
    var camera = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["FreeCamera"]("camera1", new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 5, -10), scene); // This targets the camera to scene origin

    camera.setTarget(_babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"].Zero());
    const canvas = scene.getEngine().getRenderingCanvas(); // This attaches the camera to the canvas

    camera.attachControl(canvas, true); // This creates a light, aiming 0,1,0 - to the sky (non-mesh)

    var light = new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["HemisphericLight"]("light", new _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 1, 0), scene); // Default intensity is 1. Let's dim the light a small amount

    light.intensity = 0.7; // Our built-in 'box' shape.

    box = _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["MeshBuilder"].CreateBox("box", {
      size: 2
    }, scene); // Move the box upward 1/2 its height

    box.position.y = 1; // Our built-in 'ground' shape.

    _babylonjs_core__WEBPACK_IMPORTED_MODULE_2__["MeshBuilder"].CreateGround("ground", {
      width: 6,
      height: 6
    }, scene);
  };
  /**
   * Will run on every frame render.  We are spinning the box on y-axis.
   */


  const onRender = scene => {
    if (box !== undefined) {
      var deltaTimeInMillis = scene.getEngine().getDeltaTime();
      const rpm = 10;
      box.rotation.y += rpm / 60 * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  }; // mount simulator in the target and simulate continuously


  const [renderTarget, setRenderTarget] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (renderTarget === null) return undefined;
    f;
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

  react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"](ref, () => ({
    simulation
  }), [simulation]);
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default()(_Simulator_scss__WEBPACK_IMPORTED_MODULE_11___default.a);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: _Simulator_scss__WEBPACK_IMPORTED_MODULE_11___default.a.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, running ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    key: "terminate-and-reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => {
      onExecutionAction({
        action: 'TERMINATE',
        reset: true
      });
    },
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_4__["TerminateAndResetIcon"],
    color: "red",
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    key: "reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => {
      onExecutionAction({
        action: 'RESET'
      });
    },
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_4__["ResetIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => {
      onExecutionAction({
        action: 'TERMINATE',
        reset: false
      });
    },
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_4__["TerminateIcon"],
    color: "red",
    disableRipple: true,
    disabled: !running,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => onUpdate({
      zoom: Math.min(zoom + 10, 150),
      zoomMode: 'MANUAL'
    }),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_4__["ZoomInIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => onUpdate({
      zoom: 100,
      zoomMode: 'MANUAL'
    }),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_4__["ZoomResetIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => onUpdate({
      zoom: Math.max(zoom - 10, 50),
      zoomMode: 'MANUAL'
    }),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_4__["ZoomOutIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => onUpdate({
      zoom,
      zoomMode: 'FIT'
    }),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_4__["ZoomFitIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => onUpdate({}),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_4__["RotateOrbitIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => onUpdate({}),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_4__["ResizeIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => onUpdate({}),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_4__["ArrowAllIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }, "SetTCP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ToolBar_ToolBarIconButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => onUpdate({}),
    icon: _misc_palette__WEBPACK_IMPORTED_MODULE_4__["RobotIndustrialIcon"],
    disableRipple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 9
    }
  }, "   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "App",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_DefaultPlayground__WEBPACK_IMPORTED_MODULE_15__["default"], {
    antialias: true,
    onSceneReady: onSceneReady,
    onRender: onRender,
    id: "my-canvas",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 9
    }
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (Simulator);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8xLmFhOTdiZTE5MjI3ZGEwZmE1YjNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9ob21lL3NhcmFoL0RvY3VtZW50cy9BcmJlaXQvZ2l0aHViL25ldFJvYi9IZWRnZWhvZ0lERS9zcmMvY29tcG9uZW50cy9pZGUvU2ltdWxhdG9yL1NpbXVsYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvdXNlU3R5bGVzJztcbmltcG9ydCB7XG4gIEVuZ2luZSxcbiAgU2NlbmUsXG4gIENvbG9yMyxcbiAgVmVjdG9yMyxcbiAgQXJjUm90YXRlQ2FtZXJhLFxuICBIZW1pc3BoZXJpY0xpZ2h0LFxuICBGcmVlQ2FtZXJhLFxuICBUb29scyxcbiAgRGV2aWNlVHlwZSxcbiAgWGJveElucHV0LFxuICBEdWFsU2hvY2tJbnB1dCwgUXVhdGVybmlvblxuICAsIEFzc2V0c01hbmFnZXIsIE1lc2hCdWlsZGVyLCBTdGFuZGFyZE1hdGVyaWFsLCBUcmFuc2Zvcm1Ob2RlLCBNYXRyaXgsXG59IGZyb20gXCJAYmFieWxvbmpzL2NvcmVcIjtcblxuaW1wb3J0IHsgU2NlbmVMb2FkZXIgfSBmcm9tIFwiQGJhYnlsb25qcy9jb3JlL0xvYWRpbmcvc2NlbmVMb2FkZXJcIjtcblxuaW1wb3J0IHtcbiAgVGVybWluYXRlSWNvbixcbiAgUmVzZXRJY29uLFxuICBUZXJtaW5hdGVBbmRSZXNldEljb24sXG4gIFpvb21Jbkljb24sXG4gIFpvb21PdXRJY29uLFxuICBab29tRml0SWNvbixcbiAgWm9vbVJlc2V0SWNvbixcbiAgUm90YXRlT3JiaXRJY29uLFxuICBSZXNpemVJY29uLFxuICBSb2JvdEluZHVzdHJpYWxJY29uLFxuICBBcnJvd0FsbEljb24sXG4gIFxufSBmcm9tICcuLi8uLi9taXNjL3BhbGV0dGUnO1xuaW1wb3J0ICogYXMgaG9va3MgZnJvbSAnLi4vLi4vbWlzYy9ob29rcyc7XG5pbXBvcnQge2V1bGVyVG9RdWF0ZXJuaW9ufSBmcm9tICdldWxlcnV0aWwvc3JjL0V1bGVyVXRpbC5qcyc7XG5pbXBvcnQgIFJvYm90IGZyb20gJ3dlYnJvYi9zcmMvcm9ib3QvUm9ib3QuanMnXG5cbmltcG9ydCB7IHR5cGUgRXhlY3V0aW9uQWN0aW9uIH0gZnJvbSAnLi4vSWRlJztcbmltcG9ydCBUb29sQmFyIGZyb20gJy4uL1Rvb2xCYXInO1xuaW1wb3J0IFRvb2xCYXJJY29uQnV0dG9uIGZyb20gJy4uL1Rvb2xCYXIvVG9vbEJhckljb25CdXR0b24nO1xuaW1wb3J0IFRvb2xCYXJJdGVtIGZyb20gJy4uL1Rvb2xCYXIvVG9vbEJhckl0ZW0nO1xuXG5pbXBvcnQgcyBmcm9tICcuL1NpbXVsYXRvci5zY3NzJztcblxuaW1wb3J0IHsgU2ltdWxhdGlvbiB9IGZyb20gJy4vc2ltdWxhdGlvbic7XG5cbmltcG9ydCB7IGdlbmVyYXRlQ29uZmlnRnJvbVhtbCB9IGZyb20gJy4uL1NpbXVsYXRvckVkaXRvcic7XG4vLyAkRmxvd0V4cGVjdEVycm9yXG5pbXBvcnQgZGVmYXVsdFNpbXVsYXRpb25YbWwgZnJvbSAnLi9kZWZhdWx0X3NpbXVsYXRpb24ueG1sJztcblxuY29uc3QgZGVmYXVsdFNpbXVsYXRpb25Db25maWcgPSBnZW5lcmF0ZUNvbmZpZ0Zyb21YbWwoZGVmYXVsdFNpbXVsYXRpb25YbWwpO1xuXG5leHBvcnQgdHlwZSBTaW11bGF0b3Jab29tQWN0aW9uID0gJ1pPT01fSU4nIHwgJ1pPT01fMTAwJyB8ICdaT09NX09VVCcgfCAnWk9PTV9GSVQnO1xuXG5leHBvcnQgdHlwZSBDb250cm9sbGVkU3RhdGUgPSB7fFxuICB6b29tOiBudW1iZXIsXG4gIHpvb21Nb2RlOiAnTUFOVUFMJyB8ICdGSVQnLFxufH07XG5cbnR5cGUgUHJvcHMgPSB7fFxuICBydW5uaW5nOiBib29sZWFuLFxuICAuLi5Db250cm9sbGVkU3RhdGUsXG4gIG9uVXBkYXRlOiAoc3RhdGU6IENvbnRyb2xsZWRTdGF0ZSkgPT4gdm9pZCB8IFByb21pc2U8dm9pZD4sXG4gIG9uRXhlY3V0aW9uQWN0aW9uOiAoYWN0aW9uOiBFeGVjdXRpb25BY3Rpb24pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+LFxufH07XG50eXBlIEluc3RhbmNlID0ge3xcbiAgc2ltdWxhdGlvbjogU2ltdWxhdGlvbixcbnx9O1xuXG4vKipcbiAqIFRoZSBzaW11bGF0b3IgZGlzcGxheXMgYSAyRCBlbnZpcm9ubWVudCBjb250YWluaW5nIGEgc2ltdWxhdGVkIHJvYm90LlxuICpcbiAqIEJlc2lkZXMgdGhlIHNpbXVsYXRpb24gaXRzZWxmLCB0aGUgdG9vbGJhciBhbGxvd3MgdGVybWluYXRpbmcgcHJvZ3JhbXMgYW5kIHJlc2V0dGluZyB0aGUgc2ltdWxhdGlvbi5cbiAqL1xuIGltcG9ydCBEZWZhdWx0UGxheWdyb3VuZCBmcm9tIFwiLi9EZWZhdWx0UGxheWdyb3VuZFwiO1xuY29uc3QgU2ltdWxhdG9yID0gUmVhY3QuZm9yd2FyZFJlZjxQcm9wcywgSW5zdGFuY2U+KFxuICAoeyBydW5uaW5nLCB6b29tLCB6b29tTW9kZSwgb25VcGRhdGUsIG9uRXhlY3V0aW9uQWN0aW9uIH06IFByb3BzLCByZWY6IFJlZjxJbnN0YW5jZT4pID0+IHtcbiAgICBjb25zdCBzaW11bGF0aW9uID0gaG9va3MudXNlVmFsdWUoKCkgPT4ge1xuICAgICAgY29uc3Qgc2ltID0gbmV3IFNpbXVsYXRpb24oKTtcbiAgICAgIHNpbS5qc29uSW5pdChkZWZhdWx0U2ltdWxhdGlvbkNvbmZpZyk7XG4gICAgICAvL3JldHVybiBzaW07XG4gICAgfSk7XG5sZXQgYm94OyAgIFxuY29uc3Qgb25TY2VuZVJlYWR5ID0gKHNjZW5lKSA9PiB7XG4gIC8vIFRoaXMgY3JlYXRlcyBhbmQgcG9zaXRpb25zIGEgZnJlZSBjYW1lcmEgKG5vbi1tZXNoKVxuICB2YXIgY2FtZXJhID0gbmV3IEZyZWVDYW1lcmEoXCJjYW1lcmExXCIsIG5ldyBWZWN0b3IzKDAsIDUsIC0xMCksIHNjZW5lKTtcblxuICAvLyBUaGlzIHRhcmdldHMgdGhlIGNhbWVyYSB0byBzY2VuZSBvcmlnaW5cbiAgY2FtZXJhLnNldFRhcmdldChWZWN0b3IzLlplcm8oKSk7XG5cbiAgY29uc3QgY2FudmFzID0gc2NlbmUuZ2V0RW5naW5lKCkuZ2V0UmVuZGVyaW5nQ2FudmFzKCk7XG5cbiAgLy8gVGhpcyBhdHRhY2hlcyB0aGUgY2FtZXJhIHRvIHRoZSBjYW52YXNcbiAgY2FtZXJhLmF0dGFjaENvbnRyb2woY2FudmFzLCB0cnVlKTtcblxuICAvLyBUaGlzIGNyZWF0ZXMgYSBsaWdodCwgYWltaW5nIDAsMSwwIC0gdG8gdGhlIHNreSAobm9uLW1lc2gpXG4gIHZhciBsaWdodCA9IG5ldyBIZW1pc3BoZXJpY0xpZ2h0KFwibGlnaHRcIiwgbmV3IFZlY3RvcjMoMCwgMSwgMCksIHNjZW5lKTtcblxuICAvLyBEZWZhdWx0IGludGVuc2l0eSBpcyAxLiBMZXQncyBkaW0gdGhlIGxpZ2h0IGEgc21hbGwgYW1vdW50XG4gIGxpZ2h0LmludGVuc2l0eSA9IDAuNztcblxuICAvLyBPdXIgYnVpbHQtaW4gJ2JveCcgc2hhcGUuXG4gIGJveCA9IE1lc2hCdWlsZGVyLkNyZWF0ZUJveChcImJveFwiLCB7IHNpemU6IDIgfSwgc2NlbmUpO1xuXG4gIC8vIE1vdmUgdGhlIGJveCB1cHdhcmQgMS8yIGl0cyBoZWlnaHRcbiAgYm94LnBvc2l0aW9uLnkgPSAxO1xuXG4gIC8vIE91ciBidWlsdC1pbiAnZ3JvdW5kJyBzaGFwZS5cbiAgTWVzaEJ1aWxkZXIuQ3JlYXRlR3JvdW5kKFwiZ3JvdW5kXCIsIHsgd2lkdGg6IDYsIGhlaWdodDogNiB9LCBzY2VuZSk7XG59O1xuXG4vKipcbiAqIFdpbGwgcnVuIG9uIGV2ZXJ5IGZyYW1lIHJlbmRlci4gIFdlIGFyZSBzcGlubmluZyB0aGUgYm94IG9uIHktYXhpcy5cbiAqL1xuY29uc3Qgb25SZW5kZXIgPSAoc2NlbmUpID0+IHtcbiAgaWYgKGJveCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGRlbHRhVGltZUluTWlsbGlzID0gc2NlbmUuZ2V0RW5naW5lKCkuZ2V0RGVsdGFUaW1lKCk7XG5cbiAgICBjb25zdCBycG0gPSAxMDtcbiAgICBib3gucm90YXRpb24ueSArPSAocnBtIC8gNjApICogTWF0aC5QSSAqIDIgKiAoZGVsdGFUaW1lSW5NaWxsaXMgLyAxMDAwKTtcbiAgfVxufTtcbiAgICAvLyBtb3VudCBzaW11bGF0b3IgaW4gdGhlIHRhcmdldCBhbmQgc2ltdWxhdGUgY29udGludW91c2x5XG4gICAgY29uc3QgW3JlbmRlclRhcmdldCwgc2V0UmVuZGVyVGFyZ2V0XSA9IFJlYWN0LnVzZVN0YXRlPEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbD4obnVsbCk7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChyZW5kZXJUYXJnZXQgPT09IG51bGwpIHJldHVybiB1bmRlZmluZWQ7ZlxuXG4gICAgICBzaW11bGF0aW9uLm1vdW50KHJlbmRlclRhcmdldCk7XG4gICAgICBzaW11bGF0aW9uLnN0YXJ0TWF0dGVyKCk7XG4gICAgICBzaW11bGF0aW9uLnN0YXJ0UmVuZGVyKCk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBzaW11bGF0aW9uLnN0b3BSZW5kZXIoKTtcbiAgICAgICAgc2ltdWxhdGlvbi5zdG9wTWF0dGVyKCk7XG4gICAgICAgIHNpbXVsYXRpb24udW5tb3VudCgpO1xuICAgICAgfTtcbiAgICB9LCBbcmVuZGVyVGFyZ2V0LCBzaW11bGF0aW9uXSk7XG5cbiAgICAvLyBOZWVkIHRvIHVzZSBhIGRlcGVuZGVuY3kgYXJyYXkgaGVyZSwgYmVjYXVzZSBJZGUgcmVxdWlyZXMgYSBzdGFibGUgcmVmLlxuICAgIC8vIE9uIGVhY2ggY2hhbmdlIHRvIHRoZSBTaW11bGF0b3IgcmVmLCBqc29uSW5pdCBpcyBwb3RlbnRpYWxseSBjYWxsZWQuXG4gICAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7IHNpbXVsYXRpb24gfSksIFtzaW11bGF0aW9uXSk7XG4gICAgXG4gICAgdXNlU3R5bGVzKHMpO1xuICAgIHJldHVybiAoXG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICBcbiAgICAgICAgXG4gICAgXG4gICAgICAgIDxUb29sQmFyPlxuICAgICAgICAgIHtydW5uaW5nID8gKFxuICAgICAgICAgICAgPFRvb2xCYXJJdGVtIGtleT1cInRlcm1pbmF0ZS1hbmQtcmVzZXRcIj5cbiAgICAgICAgICAgICAgPFRvb2xCYXJJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25FeGVjdXRpb25BY3Rpb24oeyBhY3Rpb246ICdURVJNSU5BVEUnLCByZXNldDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGljb249e1Rlcm1pbmF0ZUFuZFJlc2V0SWNvbn1cbiAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Ub29sQmFySXRlbT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFRvb2xCYXJJdGVtIGtleT1cInJlc2V0XCI+XG4gICAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uRXhlY3V0aW9uQWN0aW9uKHsgYWN0aW9uOiAnUkVTRVQnIH0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgaWNvbj17UmVzZXRJY29ufVxuICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVG9vbEJhckl0ZW0+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8VG9vbEJhckl0ZW0+XG4gICAgICAgICAgICA8VG9vbEJhckljb25CdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIG9uRXhlY3V0aW9uQWN0aW9uKHsgYWN0aW9uOiAnVEVSTUlOQVRFJywgcmVzZXQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBpY29uPXtUZXJtaW5hdGVJY29ufVxuICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFydW5uaW5nfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG4gICAgICAgICAgICAgIHpvb206IE1hdGgubWluKHpvb20gKyAxMCwgMTUwKSxcbiAgICAgICAgICAgICAgem9vbU1vZGU6ICdNQU5VQUwnLFxuICAgICAgICAgICAgfSl9IGljb249e1pvb21Jbkljb259IGRpc2FibGVSaXBwbGUgLz5cbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG4gICAgICAgICAgICAgIHpvb206IDEwMCxcbiAgICAgICAgICAgICAgem9vbU1vZGU6ICdNQU5VQUwnLFxuICAgICAgICAgICAgfSl9IGljb249e1pvb21SZXNldEljb259IGRpc2FibGVSaXBwbGUgLz5cbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG4gICAgICAgICAgICAgIHpvb206IE1hdGgubWF4KHpvb20gLSAxMCwgNTApLFxuICAgICAgICAgICAgICB6b29tTW9kZTogJ01BTlVBTCcsXG4gICAgICAgICAgICB9KX0gaWNvbj17Wm9vbU91dEljb259IGRpc2FibGVSaXBwbGUgLz5cbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG4gICAgICAgICAgICAgIHpvb20sXG4gICAgICAgICAgICAgIHpvb21Nb2RlOiAnRklUJyxcbiAgICAgICAgICAgIH0pfSBpY29uPXtab29tRml0SWNvbn0gZGlzYWJsZVJpcHBsZSAvPlxuICAgICAgICAgIDwvVG9vbEJhckl0ZW0+XG4gICAgICAgICBcbiAgICAgICAgIFxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSl9IGljb249e1JvdGF0ZU9yYml0SWNvbn0gZGlzYWJsZVJpcHBsZSAvPlxuICAgICAgICAgIDwvVG9vbEJhckl0ZW0+IFxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgfSl9IGljb249e1Jlc2l6ZUljb259IGRpc2FibGVSaXBwbGUgLz5cbiAgICAgICAgICA8L1Rvb2xCYXJJdGVtPlxuICAgICAgICAgIDxUb29sQmFySXRlbT5cbiAgICAgICAgICAgIDxUb29sQmFySWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblVwZGF0ZSh7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICB9KX0gaWNvbj17QXJyb3dBbGxJY29ufSBkaXNhYmxlUmlwcGxlIC8+XG4gICAgICAgICAgPC9Ub29sQmFySXRlbT5cbiAgICAgICAgICA8VG9vbEJhckl0ZW0+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFNldFRDUFxuICAgICAgICAgIDwvVG9vbEJhckl0ZW0+XG4gICAgICAgICAgPFRvb2xCYXJJdGVtPlxuICAgICAgICAgICAgPFRvb2xCYXJJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uVXBkYXRlKHtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pfSBpY29uPXtSb2JvdEluZHVzdHJpYWxJY29ufSBkaXNhYmxlUmlwcGxlIC8+XG4gICAgICAgICAgPC9Ub29sQmFySXRlbT5cbiAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICA8L1Rvb2xCYXI+XG4gICAgICAgIDxkaXYgPlxuICAgXG4gICAgICAgIFxuICAgICAgICA8aDE+ICAgPC9oMT4gXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICAgIDxEZWZhdWx0UGxheWdyb3VuZCBhbnRpYWxpYXMgb25TY2VuZVJlYWR5PXtvblNjZW5lUmVhZHl9IG9uUmVuZGVyPXtvblJlbmRlcn0gaWQ9XCJteS1jYW52YXNcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICBcbiAgICApO1xuICB9LFxuKTtcblxuZXhwb3J0IHR5cGUgU2ltdWxhdG9yVHlwZSA9IFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFNpbXVsYXRvcj47XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXVsYXRvcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBRUE7QUFDQTtBQWVBO0FBRUE7QUFjQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFBQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFLQTs7OztBIiwic291cmNlUm9vdCI6IiJ9