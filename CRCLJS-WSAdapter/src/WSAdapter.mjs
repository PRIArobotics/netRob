import fs from "fs"
import express from 'express';
import http from 'http';
import {Server} from 'socket.io';
import QueuedTCPRobotConnection from "./QueuedTCPRobotConnection.mjs";

const DEFAULT_CONFIG_PATH = 'config.json'

export default class WSAdapter {

    constructor(config_path = DEFAULT_CONFIG_PATH) {
        if (config_path === undefined) config_path = DEFAULT_CONFIG_PATH
        console.log(`Using Config ${config_path}`)
        this.clients = new Set()
        this.clientCounter = 0
        this.config = JSON.parse(fs.readFileSync(config_path, 'utf8'));
        this.robots = {}
        for (const rc of this.config) {
            this.robots[rc.name] = new QueuedTCPRobotConnection(rc.name, rc.address, rc.port)
            this.robots[rc.name].on(rc.name, (lines) => this.receivedFromRobot(rc.name, lines))
        }
    }

    async startAll(){
        await this.startWebservice();
        await this.connectAllRobots();
    }

    async connectAllRobots(){
         await Promise.all(Object.values(this.robots).map(r => r.connect()))
    }

    receivedFromRobot(robot, line){
        if (this.clients.size === 0){
            console.log(`No clients to forward from ${robot}: ${line}`)
        }
        console.log(`Received from ${robot}: ${line}`)
        this.clients.forEach(c => c.emit(robot, line))
    }

    async startWebservice(){
        const app = express();
        this.httpServer = http.createServer(app);
        this.io = new Server(this.httpServer, { cors: {
                origin: "http://localhost:9000",
                methods: ["GET", "POST"]
            }});
        this.io.on('connection', (socket) => this.clientConnected(socket));

        app.get('/', (req, res) => {
            res.send('Robotserver is running');
        });
        this.httpServer.listen(3000, () => {
            console.log('Listening on *:3000');
        });
    }

    clientConnected(socket){
        this.clients.add(socket)
        const name = 'Client'+this.clientCounter++
        console.log(`${name} connected`);

        socket.onAny((robot, line) => {
            console.log(`Sending to ${robot}: ${line}`)
            this.robots[robot].emit(robot, line)
        });

        socket.on('disconnect', () => {
            console.log(`${name} disconnected`);
        });
    }

}