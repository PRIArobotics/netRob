// @flow
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";

import * as React from 'react';
import createAxes from "webrob/src/AxesHelper.js";
import useStyles from 'isomorphic-style-loader/useStyles';
import {
  Engine,
  Scene,
  Color3,
  Vector3,
  ArcRotateCamera,
  HemisphericLight,
  FreeCamera,
  Tools,
  DeviceType,
  XboxInput,
  DualShockInput, Quaternion
  , AssetsManager, MeshBuilder, StandardMaterial, TransformNode, Matrix,
} from "@babylonjs/core";


import {
  TerminateIcon,
  ResetIcon,
  TerminateAndResetIcon,
  ZoomInIcon,
  ZoomOutIcon,
  ZoomFitIcon,
  ZoomResetIcon,
  RotateOrbitIcon,
  ResizeIcon,
  RobotIndustrialIcon,
  ArrowAllIcon,

} from '../../misc/palette';
import * as hooks from '../../misc/hooks';
import { eulerToQuaternion } from 'eulerutil/src/EulerUtil.js';
import Robot from 'webrob/src/robot/Robot.js'

import { type ExecutionAction } from '../Ide';
import ToolBar from '../ToolBar';
import ToolBarIconButton from '../ToolBar/ToolBarIconButton';
import ToolBarItem from '../ToolBar/ToolBarItem';

import s from './Simulator.scss';

import { Simulation } from './simulation';

import { generateConfigFromXml } from '../SimulatorEditor';
// $FlowExpectError
import defaultSimulationXml from './default_simulation.xml';
import InputController from "webrob/src/InputController.js";
const defaultSimulationConfig = generateConfigFromXml(defaultSimulationXml);
var inputController;

const bgIntensity = 0.8


export type SimulatorZoomAction = 'ZOOM_IN' | 'ZOOM_100' | 'ZOOM_OUT' | 'ZOOM_FIT';

export type ControlledState = {|
  zoom: number,
    zoomMode: 'MANUAL' | 'FIT',
|};

type Props = {|
  running: boolean,
  ...ControlledState,
  onUpdate: (state: ControlledState) => void | Promise < void>,
    onExecutionAction: (action: ExecutionAction) => void | Promise < void>,
|};
type Instance = {|
  simulation: Simulation,
|};

import "@babylonjs/core/Debug/debugLayer"; // Augments the scene with the debug methods
import "@babylonjs/inspector";
import { TEST_CMDS } from "webrob/src/test/data"; // Injects a local ES6 version of the inspector to prevent automatically relying on the none compatible version

const inputsDef = {
  xAxis: [
    [DeviceType.Keyboard, [-'S'.charCodeAt(0), 'W'.charCodeAt(0)]],
    [DeviceType.DualShock, [DualShockInput.LStickXAxis]],
    [DeviceType.Xbox, [XboxInput.LStickXAxis]],
    [DeviceType.Generic, [XboxInput.LStickXAxis]],
  ],
  yAxis: [
    [DeviceType.Keyboard, [-'A'.charCodeAt(0), 'D'.charCodeAt(0)]],
    [DeviceType.DualShock, [-DualShockInput.LStickYAxis]],
    [DeviceType.Xbox, [-XboxInput.LStickYAxis]],
    [DeviceType.Generic, [-XboxInput.LStickYAxis]],
  ],
  zAxis: [
    [DeviceType.Keyboard, [-'Q'.charCodeAt(0), 'E'.charCodeAt(0)]],
    [DeviceType.DualShock, [-DualShockInput.RStickYAxis]],
    [DeviceType.Xbox, [-XboxInput.RStickYAxis]],
    [DeviceType.Generic, [-XboxInput.RStickYAxis]],
  ],
  mode: [
    [DeviceType.Keyboard, [' '.charCodeAt(0)]],
    [DeviceType.DualShock, [DualShockInput.R1, DualShockInput.L1]],
    [DeviceType.Xbox, [XboxInput.RB, XboxInput.LB]],
    [DeviceType.Generic, [XboxInput.RB, XboxInput.LB]],
  ],
  fast: [
    [DeviceType.Keyboard, ['O'.charCodeAt(0)]],
    [DeviceType.DualShock, [DualShockInput.R2]],
    [DeviceType.Xbox, [XboxInput.RT]],
    [DeviceType.Generic, [XboxInput.RT]],
  ],
  slow: [
    [DeviceType.Keyboard, ['L'.charCodeAt(0)]],
    [DeviceType.DualShock, [DualShockInput.L2]],
    [DeviceType.Xbox, [XboxInput.LT]],
    [DeviceType.Generic, [XboxInput.LT]],
  ],
  tool1: [
    [DeviceType.Keyboard, ['1'.charCodeAt(0)]],
    [DeviceType.DualShock, [DualShockInput.Cross]],
    [DeviceType.Xbox, [XboxInput.A]],
    [DeviceType.Generic, [XboxInput.A]],
  ],
  tool2: [
    [DeviceType.Keyboard, ['2'.charCodeAt(0)]],
    [DeviceType.DualShock, [DualShockInput.Circle]],
    [DeviceType.Xbox, [XboxInput.B]],
    [DeviceType.Generic, [XboxInput.B]],
  ],
};
var assetsManager;
/**
 * The simulator displays a 2D environment containing a simulated robot.
 *
 * Besides the simulation itself, the toolbar allows terminating programs and resetting the simulation.
 */
import DefaultPlayground from "./DefaultPlayground";
import { loadRobots } from "webrob/src/robot/MultiRobotHandler";
function inputsProcessed (forceupdate=false){
  const inputs = inputController.inputs
  const fastscale = 1 + (inputs.fast*2) // inputs.fast: [0, 1] -> [1, 2]
  const slowscale = (1 - (Math.min(inputs.slow, 0.97))) // inputs.slow: [0, 1] -> [0, 1]

  const scale = scene.getAnimationRatio() * 0.01 * fastscale * slowscale
  let shift = Vector3.Zero()
  if (inputs.mode > 0.5){
      shift = new Vector3(-inputs.yAxis, inputs.xAxis, inputs.zAxis).scale(scale)
      const shiftQuaternion = Quaternion.FromEulerVector(shift)
      tcp.rotationQuaternion = tcp.rotationQuaternion.multiply(shiftQuaternion)
      allrobots.forEach(r => r.setTCPTo(tcp.position, tcp.rotationQuaternion))
      rendering = true
  } else {
      shift = new Vector3(-inputs.xAxis, inputs.yAxis, inputs.zAxis).scale(scale*0.3) // TODO rotate viewer pos
      if (shift.length() > 0 || forceupdate){
        //todo
         // tcp.position = tcp.position.add(shift)
          //allrobots.forEach(r => r.setTCPTo(tcp.position, tcp.rotationQuaternion))
          rendering = true
      }
  }
  try{
      if (inputController.changedInputs.tool1 && inputs.tool1 >= 0.5){
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
          } */
      }
  } catch (e){
      console.log(e.message)
  }
}
const robotData = [




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

  //{path: "robot/pr2_description/robots/", file: 'pr2.urdfjson', pos: new Vector3(0,0,0)},


]
const Simulator = React.forwardRef < Props, Instance> (
  ({ running, zoom, zoomMode, onUpdate, onExecutionAction }: Props, ref: Ref<Instance>) => {
    const simulation = hooks.useValue(() => {
      const sim = new Simulation();
      //sim.jsonInit(defaultSimulationConfig);
      return sim;
    });
    ;

    const onSceneReady = (scene) => {
      // This creates and positions a free camera (non-mesh)
      
      var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

      // This targets the camera to scene origin
      camera.setTarget(Vector3.Zero());

      const canvas = scene.getEngine().getRenderingCanvas();

      // This attaches the camera to the canvas
      camera.attachControl(canvas, true);

      // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
      var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

      // Default intensity is 1. Let's dim the light a small amount
      light.intensity = 0.7;

      inputController = new InputController(scene)
      inputController.setInputDefinition(inputsDef)
      inputController.currentInputsProcessed.add(() => inputsProcessed())

      const axes = createAxes(scene, 0.5, 1.0, true);
      assetsManager = new AssetsManager(scene)
     
      //loadRobots(robotData,scene,assetsManager);
      scene.render();
      // Our built-in 'ground' shape.
      MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
    };

    /**
     * Will run on every frame render.  We are spinning the box on y-axis.
     */
    const onRender = (scene) => {
     
    };
  
  
    // mount simulator in the target and simulate continuously
    const [renderTarget, setRenderTarget] = React.useState < HTMLCanvasElement | null > (null);
    React.useEffect(() => {
      if (renderTarget === null) return undefined; 

      simulation.mount(renderTarget);
      simulation.startMatter();
      simulation.startRender();
      return () => {
        simulation.stopRender();
        simulation.stopMatter();
        simulation.unmount();
      };
    }, [renderTarget, simulation]);
 
    // Need to use a dependency array here, because Ide requires a stable ref.
    // On each change to the Simulator ref, jsonInit is potentially called.
    React.useImperativeHandle(ref, () => ({ simulation }), [simulation]);
    
    useStyles(s);
    return (

      <div className={s.root}>



        <ToolBar>
          {running ? (
            <ToolBarItem key="terminate-and-reset">
              <ToolBarIconButton
                onClick={() => {
                  onExecutionAction({ action: 'TERMINATE', reset: true });
                }}
                icon={TerminateAndResetIcon}
                color="red"
                disableRipple
              />
            </ToolBarItem>
          ) : (
            <ToolBarItem key="reset">
              <ToolBarIconButton
                onClick={() => {
                  onExecutionAction({ action: 'RESET' });
                }}
                icon={ResetIcon}
                disableRipple
              />
            </ToolBarItem>
          )}
          <ToolBarItem>
            <ToolBarIconButton
              onClick={() => {
                onExecutionAction({ action: 'TERMINATE', reset: false });
              }}
              icon={TerminateIcon}
              color="red"
              disableRipple
              disabled={!running}
            />
          </ToolBarItem>
          <ToolBarItem>
            <ToolBarIconButton onClick={() => onUpdate({
              zoom: Math.min(zoom + 10, 150),
              zoomMode: 'MANUAL',
            })} icon={ZoomInIcon} disableRipple />
          </ToolBarItem>
          <ToolBarItem>
            <ToolBarIconButton onClick={() => onUpdate({
              zoom: 100,
              zoomMode: 'MANUAL',
            })} icon={ZoomResetIcon} disableRipple />
          </ToolBarItem>
          <ToolBarItem>
            <ToolBarIconButton onClick={() => onUpdate({
              zoom: Math.max(zoom - 10, 50),
              zoomMode: 'MANUAL',
            })} icon={ZoomOutIcon} disableRipple />
          </ToolBarItem>
          <ToolBarItem>
            <ToolBarIconButton onClick={() => onUpdate({
              zoom,
              zoomMode: 'FIT',
            })} icon={ZoomFitIcon} disableRipple />
          </ToolBarItem>


          <ToolBarItem>
            <ToolBarIconButton onClick={() => onUpdate({

            })} icon={RotateOrbitIcon} disableRipple />
          </ToolBarItem>
          <ToolBarItem>
            <ToolBarIconButton onClick={() => onUpdate({

            })} icon={ResizeIcon} disableRipple />
          </ToolBarItem>
          <ToolBarItem>
            <ToolBarIconButton onClick={() => onUpdate({

            })} icon={ArrowAllIcon} disableRipple />
          </ToolBarItem>
          <ToolBarItem>

            SetTCP
          </ToolBarItem>
          <ToolBarItem>
            <ToolBarIconButton onClick={() => onUpdate({

            })} icon={RobotIndustrialIcon} disableRipple />
          </ToolBarItem>


        </ToolBar>

        <div className="Simulation3D">
          <DefaultPlayground antialias onSceneReady={onSceneReady} onRender={onRender} id="my-canvas" />
        </div>
      </div>


    );
  },
);

export type SimulatorType = React.ElementRef<typeof Simulator>;

export default Simulator;
