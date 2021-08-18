import {AxisDragGizmo, Color3, DynamicTexture, Mesh, StandardMaterial, TransformNode, Vector3} from "@babylonjs/core";
import {fromRotation, fromScale, toNorm, toRotation} from "./Util";

function makeTextPlane(scene, text, color, size) {
    const dynamicTexture = new DynamicTexture("TextPlane", 50, scene, true);
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color , "transparent", true);
    const plane = new Mesh.CreateGround("TextPlane", size, size, 0, scene);
    plane.material = new StandardMaterial("TextPlaneMaterial", scene);
    plane.material.backFaceCulling = false;
    plane.material.specularColor = new Color3(0, 0, 0);
    plane.material.diffuseTexture = dynamicTexture;
    return plane;
}

let coloredMaterialCounter = 0
function createColoredMaterial(color, scene, alpha=1.0){
    const material = new StandardMaterial("ColoredMaterial"+(coloredMaterialCounter++), scene);
    material.diffuseColor = color;
    material.alpha = alpha;
    return material;
}

export default function createAxes(scene, scaling = 1, alpha = 1.0)  {
    const axes = new TransformNode("axes", scene);

    const scale = new Vector3(3,3,3);
    let arrow = AxisDragGizmo._CreateArrow(scene, createColoredMaterial(Color3.Red(), scene, alpha))
    arrow.parent = axes
    arrow.scaling = scale
    arrow.rotation.y = Math.PI/2

    let textPlane = makeTextPlane(scene, "X", "red", 0.1);
    textPlane.position = new Vector3(1, 0, 0.05 );
    textPlane.parent = axes

    arrow = AxisDragGizmo._CreateArrow(scene, createColoredMaterial(Color3.Green(), scene, alpha))
    arrow.parent = axes
    arrow.scaling = scale
    arrow.rotation.x = -Math.PI/2

    textPlane = makeTextPlane(scene,"Y", "green",  0.1);
    textPlane.position = new Vector3(0, 1, 0.05 );
    textPlane.parent = axes

    arrow = AxisDragGizmo._CreateArrow(scene, createColoredMaterial(Color3.Blue(), scene, alpha))
    arrow.parent = axes
    arrow.scaling = scale

    textPlane = makeTextPlane(scene,"Z", "blue",  0.1);
    textPlane.position = new Vector3(0.05 , 0, 1);
    textPlane.parent = axes

    axes.scaling.scaleInPlace(scaling)

    return axes
};
