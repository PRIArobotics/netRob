// @flow

import * as React from 'react';

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

import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";

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
import {eulerToQuaternion} from 'eulerutil/src/EulerUtil.js';
import  Robot from 'webrob/src/robot/Robot.js'

import { type ExecutionAction } from '../Ide';
import ToolBar from '../ToolBar';
import ToolBarIconButton from '../ToolBar/ToolBarIconButton';
import ToolBarItem from '../ToolBar/ToolBarItem';

import s from './Simulator.scss';

import { Simulation } from './simulation';

import { generateConfigFromXml } from '../SimulatorEditor';
// $FlowExpectError
import defaultSimulationXml from './default_simulation.xml';

const defaultSimulationConfig = generateConfigFromXml(defaultSimulationXml);

export type SimulatorZoomAction = 'ZOOM_IN' | 'ZOOM_100' | 'ZOOM_OUT' | 'ZOOM_FIT';

export type ControlledState = {|
  zoom: number,
  zoomMode: 'MANUAL' | 'FIT',
|};

type Props = {|
  running: boolean,
  ...ControlledState,
  onUpdate: (state: ControlledState) => void | Promise<void>,
  onExecutionAction: (action: ExecutionAction) => void | Promise<void>,
|};
type Instance = {|
  simulation: Simulation,
|};

/**
 * The simulator displays a 2D environment containing a simulated robot.
 *
 * Besides the simulation itself, the toolbar allows terminating programs and resetting the simulation.
 */
 import DefaultPlayground from "./DefaultPlayground";
const Simulator = React.forwardRef<Props, Instance>(
  ({ running, zoom, zoomMode, onUpdate, onExecutionAction }: Props, ref: Ref<Instance>) => {
    const simulation = hooks.useValue(() => {
      const sim = new Simulation();
      sim.jsonInit(defaultSimulationConfig);
      //return sim;
    });
let box;   
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

  // Our built-in 'box' shape.
  box = MeshBuilder.CreateBox("box", { size: 2 }, scene);

  // Move the box upward 1/2 its height
  box.position.y = 1;

  // Our built-in 'ground' shape.
  MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
};

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = (scene) => {
  if (box !== undefined) {
    var deltaTimeInMillis = scene.getEngine().getDeltaTime();

    const rpm = 10;
    box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
  }
};
    // mount simulator in the target and simulate continuously
    const [renderTarget, setRenderTarget] = React.useState<HTMLCanvasElement | null>(null);
    React.useEffect(() => {
      if (renderTarget === null) return undefined;f

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
        <div >
   
        
        <h1>   </h1> 
        <div className="App">
        <DefaultPlayground antialias onSceneReady={onSceneReady} onRender={onRender} id="my-canvas" />
        </div>
         
        </div>
      </div>
     
    );
  },
);

export type SimulatorType = React.ElementRef<typeof Simulator>;

export default Simulator;
