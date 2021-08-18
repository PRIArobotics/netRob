(*@PROPERTIES_EX@
TYPE: POU
LOCALE: 0
IEC_LANGUAGE: ST
PLC_TYPE: independent
PROC_TYPE: independent
*)
(*@KEY@:DESCRIPTION*)

(*@KEY@:END_DESCRIPTION*)
FUNCTION_BLOCK CRCLCommandParser
VAR_INPUT
	commandState: BYTE (* CRCL.State_ --> determines what to do *);
	commandType: StringTextSize;
	commandIndex: BYTE;
	jsonProperty: JsonProperty;
END_VAR
VAR_OUTPUT
	successful: BOOL;
END_VAR
VAR
	(* List of all command-specific parsers *)
	moveToParser: CRCLMoveTo;
	setEndEffectorParser: CRCLSetEndEffector;
	setEndEffectorParameterParser: CRCLSetEndEffectorParameter;
END_VAR
VAR_EXTERNAL
	Constants: GeneralConstants;
	Ascii: AsciiConstants;
	Json: JsonConstants;
END_VAR


(*@KEY@: WORKSHEET
NAME: CRCLCommandParser
IEC_LANGUAGE: ST
*)
IF ParserGlobals.resetParser THEN
	commandState := BYTE#0;
	commandType := '';
	successful := FALSE;
	commandIndex := BYTE#0;
	moveToParser(commandState := commandState, commandIndex := commandIndex, jsonProperty := jsonProperty);
	setEndEffectorParser(commandState := commandState, commandIndex := commandIndex, jsonProperty := jsonProperty);
	setEndEffectorParameterParser(commandState := commandState, commandIndex := commandIndex, jsonProperty := jsonProperty);
	RETURN;
END_IF
(* Call all specific parsers for different command types *)
successful := FALSE;
IF commandType = 'MoveTo' THEN
	moveToParser(commandState := commandState, commandIndex := commandIndex, jsonProperty := jsonProperty);
	successful := moveToParser.successful;
ELSIF commandType = 'SetEndEffector' THEN
	setEndEffectorParser(commandState := commandState, commandIndex := commandIndex, jsonProperty := jsonProperty);
	successful := setEndEffectorParser.successful;
ELSIF commandType = 'SetEndEffectorParameter' THEN
	setEndEffectorParameterParser(commandState := commandState, commandIndex := commandIndex, jsonProperty := jsonProperty);
	successful := setEndEffectorParameterParser.successful;
END_IF;

(*@KEY@: END_WORKSHEET *)
END_FUNCTION_BLOCK
