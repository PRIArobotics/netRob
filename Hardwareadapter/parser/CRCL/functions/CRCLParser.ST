(*@PROPERTIES_EX@
TYPE: POU
LOCALE: 0
IEC_LANGUAGE: ST
PLC_TYPE: independent
PROC_TYPE: independent
*)
(*@KEY@:DESCRIPTION*)

(*@KEY@:END_DESCRIPTION*)
FUNCTION_BLOCK CRCLParser
VAR_INPUT
	jsonParsingFinished: BOOL; (* From json parser *)
	jsonProperty: JsonProperty; (* From json parser *)
END_VAR
VAR_OUTPUT
	parsingError: BOOL;
	commandExecuted: BOOL;
END_VAR
VAR_IN_OUT
	
END_VAR
VAR
	statusMessage: StringTextSize := 'Not yet used';

	commandTypeFound: BOOL;
	commandIdFound: BOOL;
	commandIndex: BYTE := 255;
	commandIds: ARRAY[0..10] OF LINT;
	commandTypes: ARRAY[0 .. 10] OF StringTextSize; (*alternative: CRCLCommand *)
	commandParser: CRCLCommandParser;
	(*moveToParams: ARRAY[0 .. 255] OF MoveTo;
	setEndEffectors: ARRAY[0 .. 255] OF SetEndEffector;
	setEndEffectorParams: ARRAY[0 .. 255] OF SetEndEffectorParameter;*)
	
	key: StringKeySize;
	value: StringTextSize;
	decimalValue: LREAL;
END_VAR
VAR_EXTERNAL
	Constants: GeneralConstants;
	Ascii: AsciiConstants;
	Json: JsonConstants;
END_VAR


(*@KEY@: WORKSHEET
NAME: CRCLParser
IEC_LANGUAGE: ST
*)
IF ParserGlobals.resetParser THEN
	commandExecuted := FALSE;
	statusMessage := 'Resetting parser';
	commandTypeFound := FALSE;
	commandIdFound := FALSE;
	commandIds[0] := LINT#0;
	commandIds[1] := LINT#0;
	commandIds[2] := LINT#0;
	commandIds[3] := LINT#0;
	commandIds[4] := LINT#0;
	commandIds[5] := LINT#0;
	commandIds[6] := LINT#0;
	commandIds[7] := LINT#0;
	commandIds[8] := LINT#0;
	commandIds[9] := LINT#0;
	commandTypes[0] := '';
	commandTypes[1] := '';
	commandTypes[2] := '';
	commandTypes[3] := '';
	commandTypes[4] := '';
	commandTypes[5] := '';
	commandTypes[6] := '';
	commandTypes[7] := '';
	commandTypes[8] := '';
	commandTypes[9] := '';
	key := '';
	commandParser(commandState := CRCL.State_FINISHED_COMMAND, commandType := commandTypes[commandIndex], commandIndex := commandIndex, jsonProperty := jsonProperty);
	RETURN;
END_IF

parsingError := FALSE;
IF jsonParsingFinished THEN
	(* Call all specific CRCL command parsers to validate the current command *)
	commandParser(commandState := CRCL.State_VALIDATE_COMMAND, commandType := commandTypes[commandIndex], commandIndex := commandIndex, jsonProperty := jsonProperty);
	IF commandParser.successful AND commandTypeFound AND commandIdFound THEN
		statusMessage := 'Valid command parsed!';
		commandParser(commandState := CRCL.State_EXECUTE_COMMAND, commandType := commandTypes[commandIndex], commandIndex := commandIndex, jsonProperty := jsonProperty);
		commandExecuted:= TRUE;
	ELSE
		statusMessage := 'Command invalid';
	END_IF;
ELSIF jsonProperty.value.valueType = Json.Type_DOCUMENT_BEGIN THEN
	(* Initialise things *)
	commandTypeFound := FALSE;
	commandIdFound := FALSE;
	commandIndex := commandIndex + BYTE#1;
	IF commandIndex > BYTE#4 THEN // TODO BUG OVERFLOW 
		commandIndex := BYTE#0;
	END_IF;
	commandIds[commandIndex] := LINT#0;
	commandTypes[commandIndex]:= '';
ELSE
	(* Validate json properties *)
	IF jsonProperty.nestingDepth = UINT#1 THEN
		(* Basic properties: CommandId and CRCLCommand (= type) *)
		key := jsonProperty.keys[UINT#1].propertyName;
		IF key = 'CRCLCommand' AND jsonProperty.value.valueType = Json.Type_TYPE_STRING THEN
			commandTypeFound := TRUE;
			commandTypes[commandIndex] := jsonProperty.value.stringValue; (* Command type will be saved, validation is done later on *)
		ELSIF key = 'CommandID' AND jsonProperty.value.valueType = Json.Type_TYPE_INTEGER THEN
			commandIdFound := TRUE;
			commandIds[commandIndex] := jsonProperty.value.integerValue;
		ELSIF NOT((key = 'CRCLParam' AND jsonProperty.value.valueType = Json.Type_TYPE_OBJECT) 
				OR (key = 'Name' AND jsonProperty.value.valueType = Json.Type_TYPE_STRING)) THEN
			statusMessage := 'Invalid level 1 property!';
			parsingError := TRUE;
		END_IF;
	ELSE
		(* Specific commands for different command types *)
		IF commandTypeFound AND jsonProperty.nestingDepth > UINT#1 AND jsonProperty.keys[UINT#1].propertyName = 'CRCLParam' THEN
			(* Call all specific parsers for different command types *)
			commandParser(commandState := CRCL.State_PARSE_PARAMETER, commandType := commandTypes[commandIndex], commandIndex := commandIndex, jsonProperty := jsonProperty);
			IF NOT(commandParser.successful) THEN
				statusMessage := 'No parser successful!';
				parsingError := TRUE;
			END_IF;
		ELSE
			statusMessage := 'Command Type not found or not a param!';
			parsingError := TRUE; (* Can't parse Params until CommandType (CRCLCommand) is found *)
		END_IF;
	END_IF;
END_IF;

(*@KEY@: END_WORKSHEET *)
END_FUNCTION_BLOCK
