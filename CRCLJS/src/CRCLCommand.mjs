import _ from 'lodash'

let CommandIDCount = 0;

export default class CRCLCommand {

    static fromJSON(json) {
        const cmd = JSON.parse(json)
        return new CRCLCommand(cmd.CRCLCommand, cmd.Name, cmd.CRCLParam, cmd.CommandID)
    }

    constructor(cmd, name, param, cid) {
        this.cmd = cmd;
        this.name = name;
        this.param = param;
        this.cid = _.isUndefined(cid) ? CommandIDCount++ : cid;
    }

    toJSON(pretty = false){
        return JSON.stringify({
            CommandID: this.cid,
            Name: this.name,
            CRCLCommand: this.cmd,
            CRCLParam: this.param,
        }, null, pretty ? 2 : 0)
    }

    toString(){
        return `${this.name}: ${this.cmd} (${this.cid}) ${JSON.stringify(this.param)} `
    }
}