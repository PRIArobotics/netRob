import {
    Observable,
    Quaternion,
    TransformNode,
    Animation,
    Vector3,
    AnimationGroup,
    Matrix,
    EasingFunction,
    SineEase, MeshBuilder
} from "@babylonjs/core";
import _ from "lodash";
import {eulerToQuaternion} from 'eulerutil';
import Joint from "./Joint";

const FPS = 25

export default class Robot extends TransformNode{
    constructor(name, scene){
        super(name, scene);
        this.rotationQuaternion = Quaternion.Identity()

        this.links = {};
        this.joints = {};
        this.collision = {};
        this.visual = {};
        this.rootLink = null;

        this._chainID = -1
        this._ik = []
        this._chain = []

        this.tools = []
        this._toolID = 0
        this._acceleration = 0.5;
        this._speed = 0.5;
    }

    setNamedJointValue(jointName, ...value) {
        const joint = this.joints[jointName];
        if (!joint){
            console.warn(`Illegal joint name ${jointName}`)
            return false
        }
        return joint.setJointValue(...value);
    }

    setNamedJointValues(values) {
        let updated = false;
        for (const name in values) {
            const value = values[name];
            if (Array.isArray(value)) {
                updated = this.setNamedJointValue(name, ...value) || updated;
            } else {
                updated = this.setNamedJointValue(name, value) || updated;
            }
        }
        return updated;
    }

    setTCPTo(position, rotation){
        //console.log("Setting TCP to "+position.toString()+' - '+rotation.toString())
        let worldtoolmatrix = Matrix.Compose(Vector3.One(), rotation, position)
        const flangematrix = this.computeFlange(worldtoolmatrix)
        const allSolutions = this.ik.inverse(flangematrix)
        const angles = this.getFastestSolution(allSolutions).minSolution
        if (angles && angles.length > 0) this.chain.forEach((j, i) => j.value = angles[i])
    }

    computeFlange(worldtoolmatrix, tool = this.tool){
        return this.getToolMatrix().invert().multiply(worldtoolmatrix)
    }

    filterLimitedSolutions(solutions, chain = this.chain){
        return solutions.filter((solution) => {
            return chain.every((joint, i) => joint.checkValue(solution[i]))
        })
    }

    getFastestSolution(solutions, previousSolution, chain = this.chain){
        if (!previousSolution) previousSolution = chain.map(j => j.value)
        solutions = this.filterLimitedSolutions(solutions, chain)
        let minSolution = -1;
        let minOverallTime = Number.MAX_VALUE;
        solutions.forEach((solution, index) => {
            const rel_distance = _.zipWith(solution, previousSolution, _.subtract)
            const abs_distance = rel_distance.map(Math.abs)
            const velocity = chain.map(j => j.velocity) // rad/s
            const times = _.zipWith(abs_distance, velocity, _.divide) // velocity = distance/time => time = distance/velocity
            const overallTime = Math.max(...times)
            if (overallTime < minOverallTime) {
                minSolution = solution;
                minOverallTime = overallTime
            }
        })
        return {minSolution, minOverallTime};
    }

    async MoveTo(param){
        const pose = param.Pose
        const straight = param.Straight
        const position = new Vector3(pose['X'], pose['Y'], pose['Z']).scaleInPlace(0.001)
        const rotationQuaternion = eulerToQuaternion(new Vector3(pose['A'], pose['B'], pose['C']))
        const endPose = Matrix.Compose(Vector3.One(), rotationQuaternion, position)

        if (straight){
            await this.lin(endPose)
        } else {
            await this.ptp(endPose)
        }
    }

    async lin(endPose){
        //console.log("LIN from "+this.getValues())

        let startPose = this.getTCP()

        let startPosition = Vector3.Zero()
        let startRotation = Quaternion.Identity()
        startPose.decompose(Vector3.One(), startRotation, startPosition)

        //console.log("LIN from "+startPosition.toString()+' - '+startRotation.toString())

        const quat = eulerToQuaternion(new Vector3(0, Math.PI / 2, -Math.PI + 0.1))

        let endPosition = Vector3.Zero()
        let endRotation = Quaternion.Identity()
        endPose.decompose(Vector3.One(), endRotation, endPosition)

        //console.log("LIN to "+endPosition.toString()+' - '+endRotation.toString())

        const maxDistance = 0.01

        const length = endPosition.subtract(startPosition).length()
        const steps = Math.ceil(length/maxDistance)
        const stepsize = 1/steps

        for (let i = 0; i<=steps; i++){
            const position = Vector3.Lerp(startPosition, endPosition, stepsize*i);
            const rotationQuaternion = Quaternion.Slerp(startRotation, endRotation, stepsize*i)

            //const axes = createAxes(this.getScene(), 0.1)
            //axes.position = position
            //axes.rotationQuaternion = rotationQuaternion
            await this.ptp(Matrix.Compose(Vector3.One(), rotationQuaternion, position))
        }
    }

    ptp(endPose){
        const animationGroup = new AnimationGroup("animationGroup");

        const flangematrix = this.computeFlange(endPose)
        const allSolutions = this.ik.inverse(flangematrix)
        const fastestSolution = this.getFastestSolution(allSolutions)
        const newAngles = fastestSolution.minSolution

        const currentAngles = this.getValues()
        //console.log("PTP from "+currentAngles)
        //console.log("PTP to "+newAngles)

        for (let jointindex = 0; jointindex < this.chain.length; jointindex++){
            const joint = this.chain[jointindex]
            const animation = new Animation("AnimationJoint"+jointindex, "value", FPS,
                Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CONSTANT);
            animation.setKeys([
                { frame: 0, value: currentAngles[jointindex]},
                { frame: FPS*fastestSolution.minOverallTime/this.speed, value: newAngles[jointindex] }
            ]);

            const easingFunction = new SineEase();
            easingFunction.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT);
            animation.setEasingFunction(easingFunction);
            animationGroup.addTargetedAnimation(animation, joint);
        }

        return new Promise((resolve, reject) => {
            animationGroup.onAnimationGroupEndObservable.add(() => {
                if (newAngles && newAngles.length > 0) this.chain.forEach((j, i) => j.value = newAngles[i])
                resolve()
            })
            animationGroup.start()
        });

    }

    Wait(param){
        const time = param.time
        return new Promise((resolve, reject) => setTimeout(resolve, time*1000));
    }

    SetEndEffector(param){
        this.toolID = param.ToolID
    }

    SetEndEffectorParameters(param){
        this.toolValue = param.Setting
    }

    SetTransSpeed(param){
        this.speed = param.Relative
    }

    SetTransAccel(param){
        this.acceleration = param.Relative
    }

    async executeCmds(cmds){
        for (let cmd of cmds){
            console.log(`${this.name}: Executing ${cmd.CRCLCommand} (${cmd.CommandID}): ${cmd.Name} - ${JSON.stringify(cmd.CRCLParam)}`)
            await this[cmd.CRCLCommand].call(this, cmd.CRCLParam);
        }
    }

    addIK(newik){
        this.chainID = this._ik.length
        this.tools.push([])
        this._ik.push(newik)
        let link = _.find(this.links, l => l.name === newik.flange)
        if (!link) console.warn(`Illegal tool link name ${newik.flange}`)
        let chain = []
        while (link){
            if (link instanceof Joint && link.jointType !== 'fixed') chain.push(link)
            if (link.name === newik.base || !link.parent) break
            link = link.parent
        }
        if (link.name !== newik.base) console.warn(`Illegal base link name ${newik.base}`)
        this._chain.push(chain.reverse())
    }

    grab(){
        const rootMeshes = this.getScene().meshes.filter(m => m.parent == null)
        for (let mesh of rootMeshes){
            if (mesh.intersectsMesh(this.tool)) {
                mesh.setParent(this.tool);
                console.log("intersecting")
            } else {
                console.log("not intersecting")
            }
        }
    }

    release(){
        while (this.tool.getChildMeshes().length > 0)
            this.tool.removeChild(this.tool.getChildMeshes()[0]);
    }

    getValues(){
        return this.chain.map(j => j.value)
    }

    getFlange(){
        return this.ik.forward(this.getValues())
    }

    getTCP(){
        return this.getToolMatrix().multiply(this.getFlange())
    }

    getToolMatrix(){
        return Matrix.Compose(Vector3.One(), this.tool.rotationQuaternion, this.tool.position)
    }

    get ik(){
        if (this._chainID === -1) return null
        return this._ik[this._chainID]
    }

    get chain(){
        if (this._chainID === -1) return null
        return this._chain[this._chainID]
    }

    get flangeLink(){
        if (!this.ik) return null
        return this.links[this.ik.flange]
    }

    set chainID(chainID){
        this._chainID = chainID
    }

    get chainID(){
        return this._chainID
    }

    addTool(newToolData){
        if (!newToolData.tolerance) newToolData.tolerance = 0.01
        const newTool = MeshBuilder.CreateSphere("tcp"+this.tools.length, {diameter: newToolData.tolerance}, this.getScene());
        newTool.setParent(this.flangeLink);
        newTool.position = newToolData.position
        newTool.rotationQuaternion = newToolData.rotationQuaternion
        this.tools[this._chainID].push(newTool)

        if (newToolData.visual){
            const visualTool = MeshBuilder.CreateCylinder("visualTool"+this.tools.length, newToolData.visual.parameter, this.getScene());
            visualTool.setParent(this.flangeLink);
            visualTool.position = newToolData.visual.position
            visualTool.rotationQuaternion = newToolData.visual.rotationQuaternion
        }

    }

    get tool(){
        return this.tools[this._chainID][this.toolID]
    }

    set toolValue(toolValue){
        this.tool.value = toolValue
        if (toolValue > 0.5){
            this.grab()
        } else {
            this.release()
        }
    }

    get toolValue(){
        return this.tool.value
    }

    set toolID(toolID){
        this._toolID = toolID
    }

    get toolID(){
        return this._toolID
    }

    set speed(relative){
        this._speed = relative
    }

    get speed(){
        return this._speed
    }

    set acceleration(relative){
        this._acceleration = relative
    }

    get acceleration(){
        return this._acceleration
    }

}
