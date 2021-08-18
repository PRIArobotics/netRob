
# CRCLCommand

Convention of the order of the attribute keys has to be

1. `CRCLCommand` : string - type of command determines the crcl params
2. `CommandID` : integer - unique positive identifier, incremental
3. (`Name`) : string - description of the command for humans
4. `CRCLParam` : object - additional parameters

## MoveTo

### CRCLParam:

1. `Pose` : object - target TCP position `X`, (`Y`), (`Z`), (`A`), (`B`), (`C`). The angles A,B,C are Euler angles in degrees: Fixed angles X-Y-Z (equivalent to rotating Z-Y'-X'' euler angles, equivalent to Yaw, Pitch, Roll)
2. (`Straight`) : boolean - if true, TCP stays in line between origin and target position, otherwise arbitrary trajectory (default).
3. (`Blending`) : float - blending radius in [mm] to blend this movement with the next movement, no blending with 0 (default)

### Examples

```json
{
    "CommandID" : 1,
    "Name" : "Move Kuka",
    "CRCLCommand" : "MoveTo",
    "CRCLParam" : { 
        "Pose" : {
            "X": -60.0,
            "Y": 120.0,
            "Z": 90.0,
            "A": -80.0,
            "B": 100.0,
            "C": 130.0
        },
        "Straight" : true
    }
}
```

```json
{
    "CommandID" : 2,
    "Name" : "Move Festo",
    "CRCLCommand" : "MoveTo",
    "CRCLParam" : { 
        "Pose" : {
            "X" : -60.0,
            "Y" : 120.0,
            "Z" : 90.0,
            "C" : 130.0
        },
        "Straight" : true,
    }
}
```

```json
{
    "CommandID" : 3,
    "Name" : "Move Conveyor",
    "CRCLCommand" : "MoveTo",
    "CRCLParam" : { 
        "Pose" : {
            "X" : 0.0,
        },
        "Straight" : true,
    }
}
```

## SetEndEffector

### CRCLParam

1. `Setting` : float - tool, for example gripper, state between 0.0 and 1.0

### Examples

```json
{
    "CRCLCommand" : "SetEndEffector", 
    "Name" : "Grasp", 
    "CommandID" : 4, 
    "CRCLParam" : {
        "Setting" : 0.0
    }
}
```


## SetEndEffectorParameters

### CRCLParam

1. `ToolID` : integer - id of the tool, for example gripper id

### Examples

```json
{
    "CRCLCommand" : "SetEndEffectorParameters", 
    "Name" : "Use Tool 7", 
    "CommandID" : 5, 
    "CRCLParam" : {
        "ToolID" : 7
    }
}
```

## SetTransSpeed

### CRCLParam

1. (`Relative`) : float - fraction of the maximum translational speed.

### Examples

```json
{
    "CRCLCommand" : "SetTransSpeed", 
    "Name" : "Set Movement Speed to 50 percent", 
    "CommandID" : 6, 
    "CRCLParam" : {
        "Relative" : 0.3
    }
}
```

## SetTransAccel

### CRCLParam

1. (`Relative`) : float - fraction of the maximum translational acceleration.

### Examples

```json
{
    "CRCLCommand" : "SetTransAccel", 
    "Name" : "Set movement acceleration to 50 percent", 
    "CommandID" : 7, 
    "CRCLParam" : {
        "Relative" : 0.3
    }
}
```

## Wait

### CRCLParam

1. (`Time`) : float - time im seconds to wait

### Examples

```json
{
    "CRCLCommand" : "Wait", 
    "Name" : "Wait 0.5s", 
    "CommandID" : 7, 
    "CRCLParam" : {
        "Time" : 0.5
    }
}
```

# CRCL Status

## Param

1. `CommandID` : integer - the CommandID of the command which is referenced with this status message
2. `StatusID` : integer - the unique positive status identifier, incremental
3. `CommandState` : string - state description enum: 
    2. `CRCL_Working` - command started
    3. `CRCL_Done` - command finished
    4. `CRCL_Error` - command failed
4. (`StateDescription`) : string - description of the state for humans

## Examples

```json
{
    "CommandStatus": {
        "CommandID": 1,
        "StatusID": 1,
        "CommandState": "CRCL_Working"
    }
}
```
