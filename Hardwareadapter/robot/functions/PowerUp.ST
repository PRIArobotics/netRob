(*@PROPERTIES_EX@
TYPE: POU
LOCALE: 0
IEC_LANGUAGE: ST
PLC_TYPE: independent
PROC_TYPE: independent
*)
(*@KEY@:DESCRIPTION*)

(*@KEY@:END_DESCRIPTION*)
FUNCTION_BLOCK PowerUp
VAR_IN_OUT
	completed: BOOL; (* Indicates if all axes have completed the startup phase.*)
END_VAR
VAR
	power_x: MC_Power;
	power_y: MC_Power;
	power_z: MC_Power;
	power_u: MC_Power;
END_VAR


(*@KEY@: WORKSHEET
NAME: PowerUp
IEC_LANGUAGE: ST
*)
power_x(Axis:=CMMT_AS_X,Enable:=TRUE,bRegulatorOn:=TRUE,bdriveStart:=TRUE);
power_y(Axis:=CMMT_AS_Y,Enable:=TRUE,bRegulatorOn:=TRUE,bdriveStart:=TRUE);
power_z(Axis:=CMMT_AS_Z,Enable:=TRUE,bRegulatorOn:=TRUE,bdriveStart:=TRUE);
power_u(Axis:=CMMT_ST_U,Enable:=TRUE,bRegulatorOn:=TRUE,bdriveStart:=TRUE);

IF power_x.Status = TRUE AND power_y.Status = TRUE AND power_z.Status = TRUE AND power_u.Status = TRUE THEN
	completed := TRUE;
END_IF
(*@KEY@: END_WORKSHEET *)
END_FUNCTION_BLOCK
