import {
    Matrix, Quaternion, Vector3
} from "@babylonjs/core";


export default class CartesianIK {
    constructor(base, flange, param) {
        this.base = base
        this.flange = flange
        this.affineFactor = param.affineFactor || Vector3.One()
        this.affineSummand = param.affineFactor || Vector3.Zero()
    }

    async load(){
        return this
    }

    unload(){

    }

    get numberOfJoints(){
        return 3;
    }

    forward(axisValues) {
        const position = Vector3.FromArray(axisValues).divide(this.affineFactor).subtractInPlace(this.affineSummand)
        return Matrix.Compose(Vector3.One(), Quaternion.Identity(), position)
    }

    inverse(pose) {
        let position = Vector3.Zero()
        pose.decompose(null, null, position)
        let axisValues = []
        position.multiply(this.affineFactor).addInPlace(this.affineSummand).toArray(axisValues)
        return [axisValues]
    }

}
