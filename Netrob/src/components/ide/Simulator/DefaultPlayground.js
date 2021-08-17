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
import _ from 'lodash';
import createAxes from "webrob/src/AxesHelper";
import React, { useEffect, useRef } from "react";
import InputController from "webrob/src//InputController";
import { eulerToQuaternion } from 'eulerutil';

//import { executeMultiRobotProgram, loadRobots } from "webrob/src/robot/MultiRobotHandler";
import { TEST_CMDS } from "../../../../../../../../tmp/webRob/src/test/data.js";
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";

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
var inputController;
var scene;
var rendering = false;
var engine;
var assetsManager;
var assetsManager = new AssetsManager(scene)

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

export default (props) => {
    const reactCanvas = useRef(null);
    const { antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady, ...rest } = props;
    
    useEffect(() => {
        if (reactCanvas.current) {
            engine = new Engine(reactCanvas.current, antialias, engineOptions, adaptToDeviceRatio);
            scene = new Scene(engine, sceneOptions);
            assetsManager = new AssetsManager(scene);
            
            inputController = new InputController(scene)
            inputController.setInputDefinition(inputsDef)
            inputController.currentInputsProcessed.add(() => inputsProcessed())
            const cameraRadius = 2
            const alpha = Tools.ToRadians(-45)
            const beta = Tools.ToRadians(45)
            const camera = new ArcRotateCamera("camera", alpha, beta, cameraRadius, new Vector3(0, 0, 0.2)/*robot.workRangeCenter*/, scene);
            camera.attachControl(reactCanvas.current, true);
            camera.wheelPrecision = 20
            camera.upVector = new Vector3(0, 0, 1)
            scene.useRightHandedSystem = true
            camera.minZ = 0.03

            const light = new HemisphericLight("light1", new Vector3(0, 0, 1), scene);
            light.intensity = 0.7;

            //const axes = createAxes(scene, 0.5, 1.0, true);
           
            
            if (scene.isReady()) {
                props.onSceneReady(scene);
            } else {
                scene.onReadyObservable.addOnce((scene) => props.onSceneReady(scene));
               
            }

            engine.runRenderLoop(() => {
                if (typeof onRender === "function") {
                    onRender(scene);
                    camera.inputs.checkInputs()
                    inputController.processInputs();
                    if (camera.inertialAlphaOffset === 0 &&
                        camera.inertialBetaOffset === 0 &&
                        camera.inertialRadiusOffset === 0 &&
                        camera.inertialPanningX === 0 &&
                        camera.inertialPanningY === 0 &&
                        scene._activeAnimatables.length === 0 &&
                        inputController.activatedInputs.length === 0 &&
                        inputController.changedInputs.length === 0
                    ) {
                        if (rendering === true) {
                            console.log("Paused Renderloop");
                            rendering = false;
                        }
                    } else {
                        scene.render();
                        if (rendering === false) {
                           
                            let allrobots = null;
                            console.log("Started Renderloop");
                            
                           

                               // await r.Wait(2)
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

    return <canvas ref={reactCanvas} {...rest} />;
};

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
        allrobots.forEach(r => r.setTCPTo(tcp.position, tcp.rotationQuaternion))
        rendering = true
    } else {
        shift = new Vector3(-inputs.xAxis, inputs.yAxis, inputs.zAxis).scale(scale * 0.3) // TODO rotate viewer pos
        if (shift.length() > 0 || forceupdate) {
            //tcp.position = tcp.position.add(shift)
           // allrobots.forEach(r => r.setTCPTo(tcp.position, tcp.rotationQuaternion))
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
            } */
        }
    } catch (e) {
        console.log(e.message)
    }
}


