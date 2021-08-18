(*@PROPERTIES_EX@
TYPE: POU
LOCALE: 0
IEC_LANGUAGE: ST
PLC_TYPE: independent
PROC_TYPE: independent
*)
(*@KEY@:DESCRIPTION*)

(*@KEY@:END_DESCRIPTION*)
FUNCTION_BLOCK ReadBuffer
VAR_INPUT
	buffer: OSCAT_NETWORK.NW_BUF_LONG;
END_VAR
VAR_OUTPUT
	actualCharacter: BYTE;
END_VAR
VAR
	position: DINT := 0;
END_VAR
VAR_EXTERNAL
	Constants: GeneralConstants;
	Ascii: AsciiConstants;
	Json: JsonConstants;
END_VAR


(*@KEY@: WORKSHEET
NAME: ReadBuffer
IEC_LANGUAGE: ST
*)
(* Initialise position to the begin of the buffer or *)
(* Reset position to the begin of a (probably new) buffer *)
IF ParserGlobals.resetParser THEN
	position := DINT#0;
	actualCharacter := BYTE#0;
	RETURN;
END_IF;
(* Get the actual character and shift position if it isn't the end *)
actualCharacter := buffer[position];
IF NOT(actualCharacter = Ascii.NULL) THEN
	position := position +1;
END_IF;

(*@KEY@: END_WORKSHEET *)
END_FUNCTION_BLOCK
