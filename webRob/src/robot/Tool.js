import {
    Quaternion,
    TransformNode, Vector3,
} from "@babylonjs/core";

export default class Tool extends TransformNode {
    constructor(name, robot, value = 0, position = Vector3.Zero(), rotationQuaternion = Quaternion.Identity()) {
        super(name, robot.getScene());
        this._value = value;
        this._robot = robot;
        this.position = position
        this.rotationQuaternion = rotationQuaternion
    }

    get value() {
        return this._value;
    }

    set value(value){
        this._value = value
    }

    get robot(){
        return this._robot
    }

    get matrix(){
        return Matrix.Compose(Vector3.Identity(), this.rotationQuaternion, this.position)
    }
}
