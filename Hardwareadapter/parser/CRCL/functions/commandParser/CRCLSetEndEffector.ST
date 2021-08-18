(*@PROPERTIES_EX@
TYPE: POU
LOCALE: 0
IEC_LANGUAGE: ST
PLC_TYPE: independent
PROC_TYPE: independent
*)
(*@KEY@:DESCRIPTION*)

(*@KEY@:END_DESCRIPTION*)
FUNCTION_BLOCK CRCLSetEndEffector
VAR_INPUT
	commandState: BYTE (* CRCL.State_ --> determines what to do *);
	commandIndex: BYTE;
	jsonProperty: JsonProperty;
END_VAR
VAR_OUTPUT
	successful: BOOL;
END_VAR
VAR
	settings: ARRAY[0 .. 9] OF LREAL; (* SetEndEffector's CRCLParam *)
	settingFound: BOOL;
END_VAR
VAR_EXTERNAL
	Constants: GeneralConstants;
	Ascii: AsciiConstants;
	Json: JsonConstants;
END_VAR


(*@KEY@: WORKSHEET
NAME: CRCLSetEndEffector
IEC_LANGUAGE: ST
*)
IF ParserGlobals.resetParser THEN
	successful := FALSE;
	settings[0] := LREAL#0;
	settings[1] := LREAL#0;
	settings[2] := LREAL#0;
	settings[3] := LREAL#0;
	settings[4] := LREAL#0;
	settings[5] := LREAL#0;
	settings[6] := LREAL#0;
	settings[7] := LREAL#0;
	settings[8] := LREAL#0;
	settings[9] := LREAL#0;
	RETURN;
END_IF

IF commandState = CRCL.State_PARSE_PARAMETER
THEN
	(* Parese Command = Find all json properties *)
	IF jsonProperty.nestingDepth = UINT#2 
			AND jsonProperty.keys[DINT#1].propertyName = 'CRCLParam' 
			AND jsonProperty.keys[DINT#2].propertyName = 'Setting' 
			AND jsonProperty.value.valueType = Json.Type_TYPE_DECIMAL
	THEN
		settings[commandIndex] := jsonProperty.value.decimalValue;
		settingFound := TRUE;
		successful := TRUE;
	ELSE
		successful := FALSE;
	END_IF;
ELSE
IF commandState = CRCL.State_VALIDATE_COMMAND
THEN
	(* Validate command and reset parsing helper *)
	IF settingFound THEN
		successful := TRUE;
		settingFound := FALSE; (* reset parsing helper variables *)
	ELSE
		successful := FALSE; (* TODO reset anyway? *)
	END_IF;
ELSE
IF commandState = CRCL.State_EXECUTE_COMMAND
THEN
	IF settings[commandIndex] = LREAL#1
	THEN
		IF SocketData.useGripperOne
		THEN
			SocketData.gripperOne := TRUE;	
		ELSE
			SocketData.gripperTwo := TRUE;	
		END_IF;
	ELSIF settings[commandIndex] = LREAL#0
	THEN
		IF SocketData.useGripperOne
		THEN
			SocketData.gripperOne := FALSE;	
		ELSE
			SocketData.gripperTwo := FALSE;	
		END_IF;
	END_IF;
	SocketData.setEndEffector := TRUE;
	SocketData.dataInBuffer := FALSE;
	commandState := CRCL.State_FINISHED_COMMAND;
	(* Start execution or wait for it to finish *)
	(* TODO set `successful` flag if movements have finished (and reset otherwise) *)
END_IF; END_IF; END_IF;

(*@KEY@: END_WORKSHEET *)
END_FUNCTION_BLOCK
