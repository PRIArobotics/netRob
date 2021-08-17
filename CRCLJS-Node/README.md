# CRCLJS - NodeJS

Specification and reference-implementation of the JSON-based PRIA-CRCLJS interface to control robots.

Original XML-Reference: https://github.com/ros-industrial/crcl/blob/master/doc/Reference.md

Our JSON-Reference: https://github.com/PRIArobotics/CRCLJS/blob/main/Reference.md

## Getting Started

Try it out here with the robot or clone this repo and start it as follows:

```bash
# Install project dependency CRCLJS
cd ../CRCLJS
npm install
npm link

# Install and add dependency
cd ../CRCLJS-Node
npm install
npm link crcljs
```