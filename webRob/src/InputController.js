import {DeviceSourceManager, DeviceType, Observable} from "@babylonjs/core";
import _ from 'lodash';

export default class InputController{
    constructor(scene, dsm){
        this.scene = scene

        this.currentInputsProcessed = new Observable()
        this.hasChangedInputs = new Observable()
        this.hasActivatedInputs = new Observable()

        this.inputDefinition = {}

        if (!dsm){
            dsm = new DeviceSourceManager(scene.getEngine());
        }
        this.dsm = dsm;

        this.dsm.onDeviceConnectedObservable.add((device) => {
            console.log(`Device Connected: ${DeviceType[device.deviceType]}`)
        });
        this.dsm.onDeviceDisconnectedObservable.add((device) => {
            console.log(`Device Disconnected: ${DeviceType[device.deviceType]}`)
        });

        this.inputs = {}
        this.previousInputs = {}
        /*
        scene.registerBeforeRender(()=>{
            this.processInputs()
        });*/
    }

    processInputs(){
        this.inputs = {}
        this.changedInputs = []
        this.activatedInputs = []
        for(const fn of Object.keys(this.inputDefinition)) {
            this.inputs[fn] = 0
            for (const deviceType of this.inputDefinition[fn].keys()){
                const source = this.dsm.getDeviceSource(deviceType)
                if (source){
                    const inputslist = this.inputDefinition[fn].get(deviceType)
                    if (!inputslist) continue
                    let value = this.inputs[fn] || 0
                    for (const input of inputslist){
                        if (input >= 0){
                            value += source.getInput(input)
                        } else {
                            value -= source.getInput(-input)
                        }
                    }
                    if (isNaN(value)) value = 0
                    this.inputs[fn] = value
                }
            }
            if (this.inputs[fn] !== this.previousInputs[fn]) this.changedInputs.push(fn)
            if (this.inputs[fn] !== 0) this.activatedInputs.push(fn)
        }

        this.currentInputsProcessed.notifyObservers(this)
        if (_.isEmpty(this.activatedInputs)) this.hasActivatedInputs.notifyObservers(this)
        this.previousInputs = this.inputs
        if (_.isEmpty(this.changedInputs)){
            return false
        } else {
            this.hasChangedInputs.notifyObservers(this)
            return true
        }
    }

    setInputDefinition(inputDefinition){
        for(const fn of Object.keys(inputDefinition)) inputDefinition[fn] = new Map(inputDefinition[fn])
        this.inputDefinition = inputDefinition
    }


}




