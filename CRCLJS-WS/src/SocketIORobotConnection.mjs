import Emitter from "component-emitter";

export default class SocketIORobotConnection extends Emitter{

    constructor(name, socket) {
        super()
        this.name = name
        this.socket = socket
        this.socket.on(this.name, (line) => this.onData(line));
        this.socket.on("connect", () => this.log(`Connecting`));
        this.socket.on("disconnect", () => this.log('Disconnected'));
    }

    log(message){
        console.log(`${this.name}: ${message}`)
    }

    get connected(){
        return this.socket.connected
    }

    onData(line){
        //this.log(`Received: ${line}`)
        super.emit(this.name, line)
    }

    emit(name, line){
        if (this.name !== name) throw new Error('robot')
        //this.log(`Sending: ${line}`)
        this.socket.emit(this.name, line)
    }

    async disconnect(){
        this.log("Disconnecting from robot");
        await this.socket.disconnect()
    }
}