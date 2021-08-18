(*@PROPERTIES_EX@
TYPE: POU
LOCALE: 0
IEC_LANGUAGE: ST
PLC_TYPE: independent
PROC_TYPE: independent
*)
(*@KEY@:DESCRIPTION*)

(*@KEY@:END_DESCRIPTION*)
FUNCTION_BLOCK ResetAxisErrors
VAR_INPUT
END_VAR
VAR_OUTPUT
	completed: BOOL; (* indicates whether error resetting has been completed *)
END_VAR
VAR
	reset_x: MC_Reset;
	reset_y: MC_Reset;
	reset_z: MC_Reset;
	reset_u: MC_Reset;
END_VAR


(*@KEY@: WORKSHEET
NAME: ResetAxisErrors
IEC_LANGUAGE: ST
*)
reset_x(Axis:=CMMT_AS_X,Execute:=TRUE);
reset_y(Axis:=CMMT_AS_Y,Execute:=TRUE);
reset_z(Axis:=CMMT_AS_Z,Execute:=TRUE);
reset_u(Axis:=CMMT_ST_U,Execute:=TRUE);
IF reset_x.Done = TRUE AND reset_y.Done = TRUE AND reset_z.Done = TRUE AND reset_u.Done = TRUE THEN
	reset_x(Axis:=CMMT_AS_X,Execute:=FALSE);
	reset_y(Axis:=CMMT_AS_Y,Execute:=FALSE);
	reset_z(Axis:=CMMT_AS_Z,Execute:=FALSE);
	reset_u(Axis:=CMMT_ST_U,Execute:=FALSE);
	completed := TRUE;
END_IF
(*@KEY@: END_WORKSHEET *)
END_FUNCTION_BLOCK
