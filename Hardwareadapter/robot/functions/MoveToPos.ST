(*@PROPERTIES_EX@
TYPE: POU
LOCALE: 0
IEC_LANGUAGE: ST
PLC_TYPE: independent
PROC_TYPE: independent
*)
(*@KEY@:DESCRIPTION*)

(*@KEY@:END_DESCRIPTION*)
FUNCTION_BLOCK MoveToPos
VAR_INPUT
	x: LREAL;
	y: LREAL;
	z: LREAL;
	u: LREAL;
END_VAR
VAR_IN_OUT
	completed: BOOL;
END_VAR
VAR
	move_x: MC_MoveAbsolute;
	move_y: MC_MoveAbsolute;
	move_z: MC_MoveAbsolute;
	move_u: MC_MoveAbsolute;
END_VAR


(*@KEY@: WORKSHEET
NAME: MoveToPos
IEC_LANGUAGE: ST
*)
move_x(Axis:=CMMT_AS_X,Execute:=TRUE,Position:=x,Velocity:=100,Acceleration:=1000,Deceleration:=1000,Jerk:=10000);
move_y(Axis:=CMMT_AS_Y,Execute:=TRUE,Position:=y,Velocity:=100,Acceleration:=1000,Deceleration:=1000,Jerk:=10000);
move_z(Axis:=CMMT_AS_Z,Execute:=TRUE,Position:=z,Velocity:=50,Acceleration:=1000,Deceleration:=1000,Jerk:=10000);
move_u(Axis:=CMMT_ST_U,Execute:=TRUE,Position:=u,Velocity:=100,Acceleration:=1000,Deceleration:=1000,Jerk:=10000);

IF move_x.Done = TRUE AND move_y.Done = TRUE AND move_z.Done = TRUE AND move_u.Done = TRUE THEN
	move_x(Axis:=CMMT_AS_X,Execute:=FALSE);
	move_y(Axis:=CMMT_AS_Y,Execute:=FALSE);
	move_z(Axis:=CMMT_AS_Z,Execute:=FALSE);
	move_u(Axis:=CMMT_ST_U,Execute:=FALSE);
	completed := TRUE;
END_IF
(*@KEY@: END_WORKSHEET *)
END_FUNCTION_BLOCK
