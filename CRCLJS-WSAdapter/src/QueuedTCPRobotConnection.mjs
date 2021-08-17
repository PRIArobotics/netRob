import {TCPRobotConnection} from 'crcljs-node'

export default class QueuedTCPRobotConnection extends TCPRobotConnection {

    constructor(name, address, port) {
        super(name, port, address)
        this.queue = []
    }

    async connect(){
        await super.connect()
        while (this.queue.length > 0){
            await super.emit(this.name, this.queue.shift())
        }
    }

    emit(name, line){
        if (this.connected){
            super.emit(this.name, line)
        } else {
            this.log(`Queueing: ${line}`);
            this.queue.push(line)
            this.connect();
        }
    }
}

