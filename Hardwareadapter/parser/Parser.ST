(*@PROPERTIES_EX@
TYPE: POU
LOCALE: 0
IEC_LANGUAGE: ST
PLC_TYPE: independent
PROC_TYPE: independent
*)
(*@KEY@:DESCRIPTION*)

(*@KEY@:END_DESCRIPTION*)
PROGRAM Parser
VAR
	
	
erg: StringTextSize; (* Concatenation of already processed json text parts *)
	
	resetLoopDone: BOOL;
	actualCharacter: BYTE;
	thisCharacter: STRING1;
	characterStream: ReadBuffer;
	propertyStream: JsonStream;
	crclStream: CRCLParser;
	
	resultFinished: BOOL;
	key: StringKeySize;
	value: StringTextSize;
	initialised, test: BOOL;
END_VAR
VAR_EXTERNAL
	Constants: GeneralConstants;
	Ascii: AsciiConstants;
	Json: JsonConstants;
END_VAR


(*@KEY@: WORKSHEET
NAME: Parser
IEC_LANGUAGE: ST
*)
IF resultFinished THEN (* hack to make it not stop on element end *)
	resultFinished := FALSE;
END_IF;

IF propertyStream.parsingFinished = TRUE AND crclStream.commandExecuted = TRUE THEN
	ParserGlobals.resetParser := TRUE;
	characterStream(buffer := SocketData.jsonData);
	actualCharacter := BYTE#0;
	propertyStream(actualCharacter := actualCharacter, stopForRelease := resultFinished);
	crclStream(jsonProperty := propertyStream.jsonProperty, jsonParsingFinished := propertyStream.parsingFinished);
	ParserGlobals.resetParser := FALSE;
	RETURN;
END_IF;

IF NOT SocketData.dataInBuffer THEN
	RETURN;
END_IF

IF NOT(resultFinished OR propertyStream.parsingFinished) THEN
	(* Read from Buffer *)
	
	characterStream(buffer := SocketData.jsonData);
	actualCharacter := characterStream.actualCharacter;
	thisCharacter := AsciiChar(actualCharacter);
	
	IF NOT(actualCharacter = Ascii.NULL) THEN
		erg := CONCAT(erg, AsciiChar(actualCharacter));
		propertyStream(actualCharacter := actualCharacter, stopForRelease := resultFinished);
		IF resultFinished OR propertyStream.parsingFinished THEN
			crclStream(jsonProperty := propertyStream.jsonProperty, jsonParsingFinished := propertyStream.parsingFinished);
			
		END_IF;
	END_IF;
ELSIF propertyStream.jsonProperty.nestingDepth > 0 THEN
	key := propertyStream.jsonProperty.keys[propertyStream.jsonProperty.nestingDepth].propertyName;
	value := propertyStream.jsonProperty.value.stringValue;
END_IF;


(*@KEY@: END_WORKSHEET *)
END_PROGRAM
