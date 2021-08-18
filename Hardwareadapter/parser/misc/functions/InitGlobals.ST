(*@PROPERTIES_EX@
TYPE: POU
LOCALE: 0
IEC_LANGUAGE: ST
PLC_TYPE: independent
PROC_TYPE: independent
*)
(*@KEY@:DESCRIPTION*)

(*@KEY@:END_DESCRIPTION*)
FUNCTION InitGlobals : BOOL
VAR_INPUT
	input: BOOL; (* ignored *)
END_VAR
VAR_EXTERNAL
	Constants: GeneralConstants;
END_VAR


(*@KEY@: WORKSHEET
NAME: InitGlobals
IEC_LANGUAGE: ST
*)
Constants.KEY_SIZE := 255;
Constants.TEXT_VALUE_SIZE := 1024;
Constants.MAX_NESTING_DEPTH := 5;

InitGlobals := input;

(*@KEY@: END_WORKSHEET *)
END_FUNCTION
