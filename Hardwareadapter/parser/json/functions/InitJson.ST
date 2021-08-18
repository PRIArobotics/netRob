(*@PROPERTIES_EX@
TYPE: POU
LOCALE: 0
IEC_LANGUAGE: ST
PLC_TYPE: independent
PROC_TYPE: independent
*)
(*@KEY@:DESCRIPTION*)

(*@KEY@:END_DESCRIPTION*)
FUNCTION InitJson : BOOL
VAR_INPUT
	input: BOOL; (* ignored *)
END_VAR
VAR_EXTERNAL
	Json: JsonConstants;
END_VAR


(*@KEY@: WORKSHEET
NAME: InitJson
IEC_LANGUAGE: ST
*)
(* JsonDataType *)
Json.Type_DOCUMENT_BEGIN := 0;
Json.Type_TYPE_STRING := 1;
Json.Type_TYPE_INTEGER := 2;
Json.Type_TYPE_DECIMAL := 3;
Json.Type_TYPE_ARRAY := 4;
Json.Type_TYPE_OBJECT := 5;
Json.Type_VALUE_TRUE := 6;
Json.Type_VALUE_FALSE := 7;
Json.Type_VALUE_NULL := 8;

(* JsonToken *)
Json.Token_BEFORE_DOCUMENT := 0; 
Json.Token_AFTER_DOCUMENT := 1; 
Json.Token_OPEN_OBJECT := 2; (* { *)
Json.Token_CLOSE_OBJECT := 3; (* } *)
Json.Token_OPEN_ARRAY := 4; (* [ *)
Json.Token_CLOSE_ARRAY := 5; (* ] *)
Json.Token_KEY := 6; (* " *)
Json.Token_ASSIGN := 7; (* : *)
Json.Token_VALUE := 8; (* literal *)
Json.Token_SEPARATE := 9; (* , *)

(* JsonValueParsingState *)
Json.Value_UNDEFINED := 0;
Json.Value_VALUE_STRING := 1;
Json.Value_ESCAPE := 2;
Json.Value_HEX_ESCAPE := 3;
Json.Value_BEFORE_DECIMAL := 4;
Json.Value_AFTER_DECIMAL := 5;
Json.Value_VALUE_NULL := 6;
Json.Value_VALUE_TRUE := 7;
Json.Value_VALUE_FALSE := 8;

InitJson := input;

(*@KEY@: END_WORKSHEET *)
END_FUNCTION
