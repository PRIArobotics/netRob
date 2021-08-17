import net from "net"
import PromiseSocket from "promise-socket"
import _ from 'lodash'
import Emitter from "component-emitter"

export default class TCPRobotConnection extends Emitter {

    constructor(name, port, address) {
        super();
        this.name = name
        this.port = port
        this.address = address
        this.isConnecting = false
    }

    log(message){
        console.log(`${this.name}: ${message}`)
    }

    async connect() {
        this.isConnecting = true
        this.socket = new net.Socket()
        this.socket.on('data', (buffer) => this.onStatus(buffer))
        this.socket.on('end', () => this.log('Socket received end'))
        //this.socket.on('ready', () => this.log('Socket ready'))
        //this.socket.on('connect', () => this.log('Socket connect'))
        this.socket.on('error', (e) => this.log('Socket error:', e))
        this.socket.on('close', () => this.log('Socket closed'))
        try {
            this.promiseSocket = new PromiseSocket.PromiseSocket(this.socket)
            this.log(`Connecting ${this.address}:${this.port}`);
            await this.promiseSocket.connect(this.port, this.address)
            this.log(`Connected`)
        } catch (error){
            console.error(`Could not connect to ${this.address}:${this.port}: ${error.message}`)
        }
        this.isConnecting = false
        return this;
    }

    get connected(){
        if (!this.socket) return false
        return this.socket.readyState === 'open';
    }

    emit(name, line){
        if (name !== this.name) throw new Error('Wrong robot name provided')
        //this.log(`Emitting: ${line}`)
        this.promiseSocket.write(Buffer.from(line + '\r\n', 'utf8'));
    }

    onStatus(buffer) {
        //this.log(`Received: ${buffer.toString()}`)
        const lines = buffer.toString().split(/\r?\n/).filter(_.negate(_.isEmpty))
        lines.forEach(line => super.emit(this.name, line))
    }

    async disconnect(){
        this.log("Disconnecting");
        await this.promiseSocket.end()
        this.socket.destroy()
        this.log("Disconnected");
    }
}