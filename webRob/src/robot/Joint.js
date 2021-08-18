import {
    Quaternion,
    TransformNode, Vector3,
} from "@babylonjs/core";

export default class Joint extends TransformNode {
    constructor(name, scene) {
        super(name, scene);

        this.rotationQuaternion = Quaternion.Identity()

        this.jointValue = null;
        this.jointType = 'fixed';
        this.axis = new Vector3(1, 0, 0);
        this.limit = { lower: 0, upper: 0 };
        this.velocity = Math.PI*2 // rad/s

        this.originalPosition = null;
        this.originalQuaternion = null;

    }

    get jointType() {
        return this._jointType;
    }

    set jointType(v) {
        if (this.jointType === v) return;
        this._jointType = v;
        switch (v) {
            case 'fixed':
                this.jointValue = [];
                break;
            case 'continuous':
            case 'revolute':
            case 'prismatic':
                this.jointValue = [0];
                break;
            case 'planar':
            case 'floating':
                console.warn(`Joint: Unsupported joint type ${this.jointType}`);
                break;
        }
    }

    get value() {
        return this.jointValue[0];
    }

    get values(){
        return this.jointValue
    }

    set value(newValue){
        this.values = newValue
    }

    checkValue(newValue){
        return (newValue > this.limit.lower && newValue < this.limit.upper)
    }

    set values(newValues) {
        if (!_.isArray(newValues)) newValues = [newValues]
        newValues = newValues.map(v => parseFloat(v));
        if (!this.originalPosition || !this.originalQuaternion) {
            this.originalPosition = this.position.clone();
            this.originalQuaternion = this.rotationQuaternion.clone();
        }


        switch (this.jointType) {
            case 'fixed':
            case 'continuous':
            case 'revolute': {
                let angle = newValues[0];
                if (angle == null) return;
                if (angle === this.jointValue[0]) return;
                angle = Math.min(this.limit.upper, angle);
                angle = Math.max(this.limit.lower, angle);
                this.rotationQuaternion = this.originalQuaternion.clone().multiplyInPlace(Quaternion.RotationAxis(this.axis, angle))
                if (this.jointValue[0] !== angle) {
                    this.jointValue[0] = angle;
                }
            }

            case 'prismatic': {
                let pos = newValues[0];
                if (pos == null) return ;
                if (pos === this.jointValue[0]) return;
                pos = Math.min(this.limit.upper, pos);
                pos = Math.max(this.limit.lower, pos);
                this.position = this.axis.scale(pos).addInPlace(this.originalPosition)
                if (this.jointValue[0] !== pos) {
                    this.jointValue[0] = pos;
                    return;
                }
            }
            case 'floating':
            case 'planar':
                console.warn(`Joint: Invalid joint type ${this.jointType}`);
        }
        return;
    }

}
