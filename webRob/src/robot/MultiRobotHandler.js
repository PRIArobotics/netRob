import {SceneLoader} from "@babylonjs/core/Loading/sceneLoader";
import WASMIK from "../WASMIK";
import CartesianIK from "../CartesianIK";
import {Vector3} from "@babylonjs/core";
import {splitPath} from "../Util";


const ikfactories = {
    'wasmik': (...param) => new WASMIK( ...param),
    'cartesianik' : (...param) => new CartesianIK( ...param),
}

export async function loadRobots(robotsData, scene, assetsManager) {
    let loadingChains = []
    for (let robotData of robotsData){
        robotData.path = splitPath(robotData.path)
        robotData.loadingRobot = SceneLoader.ImportMeshAsync("", robotData.path.dirname+'/', robotData.path.filename+'.'+robotData.path.suffix, scene)
    }
    await Promise.all(robotsData.map(rd => rd.loadingRobot))
    for (let robotData of robotsData){
        robotData.robot = await robotData.loadingRobot
        robotData.robot = robotData.robot.meshes[0]
        robotData.robot.position = robotData.pos
        robotData.robot.rotationQuaternion = robotData.rot
        robotData.loadingChains = []

        for (let chainData of robotData.chains){
            const factory = ikfactories[chainData.ik]
            chainData.ikparam = chainData.ikparam || []
            const chainInstance = factory(chainData.base, chainData.flange, chainData.ikparam)
            const chainloader = chainInstance.load()
            chainData.loadingChain = chainloader
            loadingChains.push(chainloader)
        }
    }
    await Promise.all([assetsManager.loadAsync(), ...loadingChains])
    for (let robotData of robotsData){
        for (let chain of robotData.chains) {
            robotData.robot.addIK(await chain.loadingChain)
            for (let tool of chain.tools){
                robotData.robot.addTool(tool)
            }
        }
    }
    return robotsData.map(rd => rd.robot)
}

export async function executeMultiRobotProgram(robots, program){
    const namedRobots = _.keyBy(robots, 'name')
    for (let queue of program){
        const robot = namedRobots[queue.robot]
        await robot.executeCmds(queue.cmds)
    }
}
