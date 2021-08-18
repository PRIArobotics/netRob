
export const WORKING = 'CRCL_Working'
export const DONE = 'CRCL_Done'
export const COMMAND_STATES = [WORKING, DONE]
export const COMMAND_STATES_IDs = Object.fromEntries(COMMAND_STATES.map((e,i)=>[e,i]))

export class CRCLCommandStatus {

    static fromJSON(json) {
        try {
            const cmd = JSON.parse(json)
            return new CRCLCommandStatus(cmd.CommandState, cmd.CommandID, cmd.StatusID, cmd.StateDescription)
        } catch (e) {
            console.error(`Could not parse CRCLCommandStatus '${json}': ${e.message}`);
        }
    }

    constructor(state, cid, sid, sdescription) {
        this.state = state;
        this.cid = cid;
        this.sid = sid;
        this.sdescription = sdescription;
    }

    toJSON(pretty = false){
        return JSON.stringify({
            CommandState: this.state,
            CommandID: this.cid,
            StatusID: this.sid,
            StateDescription: this.sdescription,
        }, null, pretty ? 2 : 0)
    }

    toString(){
        return `${this.state}: ${this.cid} (${this.sid})${this.sdescription ? ' '+JSON.stringify(this.sdescription) : ''}`
    }
}

export default CRCLCommandStatus;