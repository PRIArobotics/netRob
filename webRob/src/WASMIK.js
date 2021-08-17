import {
    Matrix, Quaternion, Vector3
} from "@babylonjs/core";
import {loadScript, splitPath} from "./Util.js";

function reshape(arr, length){
    arr = [...arr];
    var newArr = [];
    while(arr.length) newArr.push(arr.splice(0,length));
    return newArr
}

export default class WASMIK {
    constructor(base, flange, param) {
        this.base = base
        this.flange = flange

        this.path = splitPath(param.path)
        this.IKFastModule = null
        this.kinematics = null
    }

    async load(){
        await loadScript(this.path.dirname + '/' + this.path.filename + '.' + this.path.suffix)
        this.IKFastModule = await window[this.path.filename]()
        this.kinematics = new this.IKFastModule.Kinematics();
        return this
    }

    unload(){
        this.kinematics.delete();
        this.kinematics = null;
        this.IKFastModule = null
    }

    get numberOfJoints(){
        return this.kinematics.num_of_joints;
    }

    toVectorFloat(array){ /// TODO optimize
        const vec = new this.IKFastModule.VectorFloat();
        array.forEach(e => vec.push_back(e));
        return vec
    }

    fromVectorFloat(vec){
        return [...Array(vec.size()).keys()].map((i) => vec.get(i));
    }

    forward(angles) {
        if (angles.length != this.numberOfJoints){
            console.error("Invalid number of joint angles")
            return null
        }
        const anglesVector = this.toVectorFloat(angles)
        const poseVector = this.kinematics.forward(anglesVector)
        const poseArray = this.fromVectorFloat(poseVector);
        const pose = Matrix.FromArray([...poseArray, 0, 0, 0, 1]).transpose()

        return pose;
    }

    inverse(pose) {
        const poseArray = []
        pose = pose.transpose()
        pose.copyToArray(poseArray)
        poseArray.splice(12,4)
        const poseVector = this.toVectorFloat(poseArray)
        const multiAnglesVector = this.kinematics.inverse(poseVector)
        const multiAnglesArray = this.fromVectorFloat(multiAnglesVector);
        const multiAngles = reshape(multiAnglesArray, this.numberOfJoints);
        return multiAngles
    }

}
