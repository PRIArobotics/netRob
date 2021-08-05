// @flow

import * as React from 'react';
//import DefaultPlayground from "./DefaultPlayground";
import useStyles from 'isomorphic-style-loader/useStyles';
import {
  Engine,
  Scene,
  Color3,
  Vector3,
  ArcRotateCamera,
  HemisphericLight,
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

//import { Robot } from '../../../../node_modules/webrob/module.mjs';
//import {eulerToQuaternion} from 'eulerutil';
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
const Simulator = React.forwardRef<Props, Instance>(
  ({ running, zoom, zoomMode, onUpdate, onExecutionAction }: Props, ref: Ref<Instance>) => {
    const simulation = hooks.useValue(() => {
      const sim = new Simulation();
      sim.jsonInit(defaultSimulationConfig);
      //return sim;
    });

    // mount simulator in the target and simulate continuously
    //const [renderTarget, setRenderTarget] = React.useState<HTMLCanvasElement | null>(null);
    /**React.useEffect(() => {
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
    **/
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
   
        <canvas id="renderCanvas" touch-action="none"></canvas>
        <h1>   </h1> 
        </div>
      </div>
     
    );
  },
);

export type SimulatorType = React.ElementRef<typeof Simulator>;
export default Simulator;