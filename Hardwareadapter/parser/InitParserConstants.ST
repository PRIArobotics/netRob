(*@PROPERTIES_EX@
TYPE: POU
LOCALE: 0
IEC_LANGUAGE: ST
PLC_TYPE: independent
PROC_TYPE: independent
*)
(*@KEY@:DESCRIPTION*)

(*@KEY@:END_DESCRIPTION*)
PROGRAM InitParserConstants
VAR
	finished: BOOL;
END_VAR
VAR_EXTERNAL
	Constants: GeneralConstants;
	Ascii: AsciiConstants;
	Json: JsonConstants;
END_VAR


(*@KEY@: WORKSHEET
NAME: InitParserConstants
IEC_LANGUAGE: ST
*)
IF NOT(finished) THEN
	finished := InitGlobals(TRUE) AND InitAscii(TRUE) AND InitJson(TRUE) AND InitCRCL(TRUE);
END_IF;

(*@KEY@: END_WORKSHEET *)
END_PROGRAM
