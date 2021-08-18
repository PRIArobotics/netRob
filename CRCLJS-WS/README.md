# CRCLJS-WS
CRCLJS Websocket Communication Interface

The implemented [SocketIORobotConnection](https://github.com/PRIArobotics/CRCLJS-WS/blob/main/src/SocketIORobotConnection.js) can connect to the websocket of the [CRCLJS WS Adapter](https://github.com/PRIARobotics/CRCLJS-WSAdapter) which forwards the CRCLJS commands to the robots. This enables CRCLJS robot communication in the browser since it does not depend on TCP.

## Dependencies

Use `npm link` to resolve the following dependencies:

* [CRCLJS](https://github.com/PRIARobotics/CRCLJS)
* [eulerutil](https://github.com/PRIARobotics/eulerutil)