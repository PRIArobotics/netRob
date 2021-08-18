(*@PROPERTIES_EX@
TYPE: POU
LOCALE: 0
IEC_LANGUAGE: ST
PLC_TYPE: independent
PROC_TYPE: independent
*)
(*@KEY@:DESCRIPTION*)

(*@KEY@:END_DESCRIPTION*)
FUNCTION_BLOCK StopMovement
VAR_INPUT
END_VAR
VAR_IN_OUT
	completed: BOOL;
END_VAR
VAR	
	stop_x: MC_Stop;
	stop_y: MC_Stop;
	stop_z: MC_Stop;
	stop_u: MC_Stop;
END_VAR


(*@KEY@: WORKSHEET
NAME: StopMovement
IEC_LANGUAGE: ST
*)
stop_x(Axis:=CMMT_AS_X,Execute:=TRUE,Deceleration:=1000,Jerk:=100000);
stop_y(Axis:=CMMT_AS_Y,Execute:=TRUE,Deceleration:=1000,Jerk:=100000);
stop_z(Axis:=CMMT_AS_Z,Execute:=TRUE,Deceleration:=1000,Jerk:=100000);
stop_u(Axis:=CMMT_ST_U,Execute:=TRUE,Deceleration:=1000,Jerk:=100000);

IF stop_x.Done = TRUE AND stop_y.Done = TRUE AND stop_z.Done = TRUE AND stop_u.Done = TRUE THEN
	stop_x(Axis:=CMMT_AS_X,Execute:=FALSE);
	stop_y(Axis:=CMMT_AS_Y,Execute:=FALSE);
	stop_z(Axis:=CMMT_AS_Z,Execute:=FALSE);
	stop_u(Axis:=CMMT_ST_U,Execute:=FALSE);
	completed := TRUE;
END_IF
(*@KEY@: END_WORKSHEET *)
END_FUNCTION_BLOCK
