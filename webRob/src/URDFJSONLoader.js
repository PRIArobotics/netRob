import {eulerToQuaternion} from 'eulerutil';
import {
    Vector3,
    AssetContainer,
    Quaternion,
    TransformNode,
    StandardMaterial,
    MeshBuilder,
    Tools,
    AssetsManager,
    Color3,
    SceneLoader
} from "@babylonjs/core";
import Robot from "./robot/Robot.js";
import Joint from "./robot/Joint.js";
import createAxes from "./AxesHelper";


function parseVector(val) {
    if (!val) return Vector3.Zero();
    return Vector3.FromArray(val.trim().split(/\s+/g).map(parseFloat));
}

function splitFolderPath(path){
    const sepIndex = path.lastIndexOf('/')+1;
    return [path.substr(0, sepIndex), path.substr(sepIndex)]
}

/**
 * URDF JSON loader.
 * This is a babylon scene loader plugin.
 */
export default class URDFJSONLoader {

    constructor() {
        this.assetsManager = null;
        this.importVisual = true;
        this.importCollision = false;
        this.overrideMeshMaterial = false;
        this.packagePath = 'robot/';
    }

    /**
     * Defines the name of the plugin.
     */
    name = "urdfjson";


    extensions = {
        ".urdfjson": { isBinary: false },
    };

    /**
     * Load into a scene.
     * @param scene The scene to load into
     * @param data The data to import
     * @param rootUrl The root url for scene and resources
     * @param onError The callback when import fails
     * @returns true if successful or false otherwise
     */
    load(scene, data, rootUrl) {
        return this.importMesh(null, scene, data, rootUrl, null, null, null);
    }

    /**
     * Load into an asset container.
     * @param scene The scene to load into
     * @param data The data to import
     * @param rootUrl The root url for scene and resources
     * @param onError The callback when import fails
     * @returns The loaded asset container
     */
    loadAssetContainer(scene, data, rootUrl, onError) {
        const container = new AssetContainer(scene);
        scene._blockEntityCollection = true;
        this.importMesh(null, scene, data, rootUrl, container.meshes, null, null);
        scene._blockEntityCollection = false;
        return container;
    }

    /**
     * Import meshes into a scene.
     * @param meshesNames An array of mesh names, a single mesh name, or empty string for all meshes that filter what meshes are imported
     * @param scene The scene to import into
     * @param data The data to import
     * @param rootUrl The root url for scene and resources
     * @param meshes The meshes array to import into
     * @param particleSystems The particle systems array to import into
     * @param skeletons The skeletons array to import into
     * @param onError The callback when import fails
     * @returns True if successful or false otherwise
     */
    importMesh(meshesNames, scene, data, rootUrl, meshes, particleSystems, skeleton) {
        const materials = {'DefaultMaterial': new StandardMaterial('DefaultMaterial', scene)};
        const assetsManager = this.assetsManager || new AssetsManager(scene);

        if (typeof data !== "object"){
            if (typeof data === "string") {
                data = JSON.parse(data)
            } else {
                // convert to string
                const array_buffer = new Uint8Array(data);
                let str = '';
                for (let i = 0; i < data.byteLength; i++) {
                    str += String.fromCharCode(array_buffer[i]); // implicitly assumes little-endian
                }
                data = JSON.parse(str);
            }
        }
        if (typeof data !== "object"){
            Tools.Error("URDFJSONLoader: Invalid data format provided");
            return false;
        }
        const robotData = data.robot;

        console.log("Importing robotData: "+robotData.name)
        const robot = new Robot(robotData.name, scene)
        //robot.rotationQuaternion = fromRotation
        //robot.scale = fromScale

        if (robotData.material){
            robotData.material.forEach(m => this.importMaterial(m, materials, assetsManager, scene));
        }
        robotData.link.forEach(l => this.importLink(l, robot, scene, materials, assetsManager));
        robotData.joint.forEach((j,index) => this.importJoint(j, robot, index, scene));

        robot.rootLink = _.find(robot.links, l => l.parent === null)
        robot.rootLink.parent = robot

        /*
        Object.values(robot.links).forEach(l => {
            //console.log("Adding axis to "+l.name)
            const axes = createAxes(scene, 0.2, 0.3, false);
            axes.parent = l
        });*/

        if (this.assetsManager !== assetsManager) assetsManager.load()

        if (meshes) {
            meshes.push(robot);
        }
        return true;
    }

    importJoint(jointData, robot, index, scene) {
        let joint = null;
        joint = new Joint(jointData.name, scene);
        joint.index = index
        robot.joints[jointData.name] = joint
        joint.jointType = jointData.type;

        const child = robot.links[jointData.child.link];
        const parent = robot.links[jointData.parent.link]

        child.parent = joint
        joint.parent = parent

        if (jointData.origin){
            joint.position = parseVector(jointData.origin.xyz);
            eulerToQuaternion(parseVector(jointData.origin.rpy), 'XYZ', joint.rotationQuaternion)
        }
        if (jointData.limit){
            joint.limit.lower = parseFloat(jointData.limit.lower);
            joint.limit.upper = parseFloat(jointData.limit.upper);
            joint.velocity = parseFloat(jointData.limit.velocity)
        }

        if (jointData.axis) {
            joint.axis = parseVector(jointData.axis.xyz);
            joint.axis.normalize();
        }
    }

    importLink(linkData, robot, scene, materials, assetsManager) {
        const link = new TransformNode(linkData.name, scene);
        robot.links[linkData.name] = link
        link.rotationQuaternion = Quaternion.Identity()

        if (this.importVisual && linkData.visual) {
            if (!_.isArray(linkData.visual)) linkData.visual = [linkData.visual];
            linkData.visual.forEach(visual => this.importLinkElement(visual, link, '_visual', robot.visual, materials, assetsManager, scene));
        }
        if (this.importCollision && linkData.collision) {
            if (!_.isArray(linkData.collision)) linkData.collision = [linkData.collision];
            linkData.collision.forEach(collision => this.importLinkElement(collision, link, '_collision', robot.collision, materials, assetsManager, scene));
        }
    }

    importLinkElement(linkData, parent, namesuffix, collection, materials, assetsManager, scene) {
        let elementName = linkData.name
        if (!elementName) elementName = parent.name + namesuffix

        let material = null;
        if (linkData.material) {
            const materialName = linkData.material.name;
            if (materialName && materialName in materials) {
                material = materials[materialName];
            } else {
                material = this.importMaterial(linkData.material, materials, assetsManager, scene);
            }
        } else {
            material = materials['DefaultMaterial'];
        }

        const element = new TransformNode(elementName, scene)
        element.rotationQuaternion = Quaternion.Identity()

        element.parent = parent;
        collection[elementName] = element;

        if (linkData.origin){
            element.position = parseVector(linkData.origin.xyz);
            eulerToQuaternion(parseVector(linkData.origin.rpy), 'XYZ', element.rotationQuaternion)
        }

        if (linkData.geometry){
            const geom = linkData.geometry
            if (geom.mesh){
                this.importMeshReference(geom.mesh.filename, element, material, assetsManager)
                if (geom.mesh.scale) element.scale = parseVector(geom.mesh.scale)
            } else if (geom.box) {
                const size = parseVector(geom.box.size) || Vector3.One();
                const box = MeshBuilder.CreateBox(elementName+"Box", {width: size.x, depth: size.y,  height: size.z}, scene);
                box.material = material;
                box.parent = element
                box.rotation.set(Math.PI/2, 0, 0);
            } else if (geom.sphere) {
                const radius = parseFloat(geom.sphere.radius) || 1;
                const sphere = MeshBuilder.CreateSphere(elementName+"Sphere", {diameter: radius*2}, scene);
                sphere.material = material;
                sphere.parent = element
            } else if (geom.cylinder) {
                const radius = parseFloat(geom.cylinder.radius) || 1;
                const length = parseFloat(geom.cylinder.length) || 1;
                const cylinder = MeshBuilder.CreateCylinder(elementName+"Cylinder", {height: length, diameter: radius*2}, scene);
                cylinder.material = material;
                cylinder.parent = element
                cylinder.rotation.set(Math.PI/2, 0, 0);
            }
        }
        return element
    }

    importMeshReference(path, parent, material, assetsManager){
        const filePath = this.resolvePath(path);
        // file path is null if a package directory is not provided.
        if (filePath !== null) {
            const [folder, file] = splitFolderPath(filePath)
            const meshTask = assetsManager.addMeshTask("meshTask"+file, "", folder, file);
            meshTask.onSuccess =  ((task) => {
                task.loadedMeshes.forEach(m => {
                    m.parent = parent
                    if (file.endsWith('.stl')) m.rotation.set(Math.PI/2, 0, 0);
                    if (this.overrideMeshMaterial || !m.material) m.material = material;
                })
            })
            meshTask.onError = ((task, msg, ex) =>
                Tools.Error('URDFJSONLoader: Error loading mesh:'+msg, ex))
        }
    }

    importMaterial(materialData, materials, assetsManager, scene) {
        const material = new StandardMaterial(materialData.name, scene);
        materials[materialData.name] = material
        if (materialData.color) {
            const rgba = materialData.color.rgba.split(/\s/g).map(parseFloat)
            material.diffuseColor = new Color3(rgba[0], rgba[1], rgba[2]);
            material.opacity = rgba[3];
            material.transparent = rgba[3] < 1;
            material.disableDepthWrite = material.transparent;
        }
        if (materialData.texture){
            const filePath = this.resolvePath(materialData.texture.filename);
            const textureTask = assetsManager.addTextureTask("textureTask"+materialData.texture.filename, filePath);
            textureTask.onSuccess = ((task) =>
                material.diffuseTexture = task.texture)
            textureTask.onError = ((task, msg, ex) =>
                Tools.Error('URDFJSONLoader: Error loading mesh:'+msg, ex))
        }
        return material
    }

    resolvePath(path) {
        return this.packagePath + path.replace(/^package:\/\//, '')
    }
}

if (SceneLoader) {
    SceneLoader.RegisterPlugin(new URDFJSONLoader());
    //console.log('Registered URDFJSONLoader')
} else {
    console.log("Could not register URDFJSONLoader")
}
