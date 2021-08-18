import _ from 'lodash'
import CRCLCommand from "./CRCLCommand.mjs";

function Command(cmd, name, param, cid){
    return new CRCLCommand(cmd, name, param, cid)
}

function MoveTo(name, position, rotation, straight, blending) {
    if (straight === undefined) straight = false;
    if (blending === undefined) blending = false;
    position = position.map(e => _.round(e, 3))
    rotation = rotation.map(e => _.round(e, 3))
    const poseMatrix = {
        "X": position[0],
        "Y": position[1],
        "Z": position[2],
        "A": rotation[0],
        "B": rotation[1],
        "C": rotation[2],
    }
    const cmd = Command("MoveTo", name, {"Straight": straight, "Pose": poseMatrix})
    if (blending !== false) cmd.param["Blending"] = blending
    return cmd;
}

function SetEndEffector(name, setting) {
    return Command("SetEndEffector", name, {"Setting" : setting});
}

function SetEndEffectorParameters(name, toolid) {
    return Command("SetEndEffectorParameters", name, {"ToolID" : toolid});
}

function Wait(name, time) {
    return Command("Wait", name, {"Time" : time});
}

function SetTransSpeed(name, relative) {
    return Command("SetTransSpeed", name, {"Relative" : relative});
}

function SetTransAccel(name, relative) {
    return Command("SetTransAccel", name, {"Relative" : relative});
}

const CommandFactory = {
    Command,
    MoveTo,
    SetEndEffector,
    SetEndEffectorParameters,
    Wait,
    SetTransSpeed,
    SetTransAccel,
};

export default CommandFactory;

