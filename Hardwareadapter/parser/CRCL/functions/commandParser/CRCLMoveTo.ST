(*@PROPERTIES_EX@
TYPE: POU
LOCALE: 0
IEC_LANGUAGE: ST
PLC_TYPE: independent
PROC_TYPE: independent
*)
(*@KEY@:DESCRIPTION*)

(*@KEY@:END_DESCRIPTION*)
FUNCTION_BLOCK CRCLMoveTo
VAR_IN_OUT
	
END_VAR
VAR_INPUT
	commandState: BYTE (* CRCL.State_ --> determines what to do *);
	commandIndex: BYTE;
	jsonProperty: JsonProperty;
END_VAR
VAR_OUTPUT
	successful: BOOL;
END_VAR
VAR
	statusMessage: StringTextSize := 'Not yet used';
	moveToParams: ARRAY[0..5] OF MoveTo;
	(* parsing helper variables *)
	Xfound: BOOL;
	Yfound: BOOL;
	Zfound: BOOL;
	Afound: BOOL;
	Bfound: BOOL;
	Cfound: BOOL;
	straight: BOOL;
END_VAR
VAR_EXTERNAL
	Constants: GeneralConstants;
	Ascii: AsciiConstants;
	Json: JsonConstants;
END_VAR


(*@KEY@: WORKSHEET
NAME: CRCLMoveTo
IEC_LANGUAGE: ST
*)
IF ParserGlobals.resetParser THEN
	successful := FALSE;
	statusMessage := 'Reset';
	moveToParams[0].A := LREAL#0;
	moveToParams[0].B := LREAL#0;
	moveToParams[0].C := LREAL#0;
	moveToParams[0].X := LREAL#0;
	moveToParams[0].Y := LREAL#0;
	moveToParams[0].Z := LREAL#0;
	moveToParams[0].straight := FALSE;
	moveToParams[1].A := LREAL#0;
	moveToParams[1].B := LREAL#0;
	moveToParams[1].C := LREAL#0;
	moveToParams[1].X := LREAL#0;
	moveToParams[1].Y := LREAL#0;
	moveToParams[1].Z := LREAL#0;
	moveToParams[1].straight := FALSE;
	moveToParams[2].A := LREAL#0;
	moveToParams[2].B := LREAL#0;
	moveToParams[2].C := LREAL#0;
	moveToParams[2].X := LREAL#0;
	moveToParams[2].Y := LREAL#0;
	moveToParams[2].Z := LREAL#0;
	moveToParams[2].straight := FALSE;
	moveToParams[3].A := LREAL#0;
	moveToParams[3].B := LREAL#0;
	moveToParams[3].C := LREAL#0;
	moveToParams[3].X := LREAL#0;
	moveToParams[3].Y := LREAL#0;
	moveToParams[3].Z := LREAL#0;
	moveToParams[3].straight := FALSE;
	moveToParams[4].A := LREAL#0;
	moveToParams[4].B := LREAL#0;
	moveToParams[4].C := LREAL#0;
	moveToParams[4].X := LREAL#0;
	moveToParams[4].Y := LREAL#0;
	moveToParams[4].Z := LREAL#0;
	moveToParams[4].straight := FALSE;
	RETURN;
END_IF

IF commandState = CRCL.State_PARSE_PARAMETER
THEN
	successful := TRUE; (* will stay true unless an error occurs *)
	(* Parese Command = Find all json properties *)
	IF jsonProperty.nestingDepth = UINT#2
	THEN
		(* Straight and Pose *)
		IF jsonProperty.keys[2].propertyName = 'Straight' THEN
			IF jsonProperty.value.valueType = Json.Type_VALUE_TRUE THEN
				moveToParams[commandIndex].straight := TRUE;
				straight := TRUE;
				(* FOR DEBUGGING PURPOSES: *) statusMessage := 'Property parsed: straight = TRUE';
			ELSIF jsonProperty.value.valueType = Json.Type_VALUE_FALSE THEN
				moveToParams[commandIndex].straight := FALSE;
				straight := FALSE;
				(* FOR DEBUGGING PURPOSES: *) statusMessage := 'Property parsed: straight = FALSE';
			ELSE
				successful := FALSE;
			END_IF;
		ELSIF NOT(jsonProperty.keys[2].propertyName = 'Pose') THEN
			successful := FALSE;
		ELSE
			(* FOR DEBUGGING PURPOSES: *) statusMessage := 'Property parsed: Pose';
		END_IF;
	ELSE
	IF jsonProperty.nestingDepth = 3 AND jsonProperty.keys[2].propertyName = 'Pose' 
		AND jsonProperty.value.valueType = Json.Type_TYPE_DECIMAL
	THEN
		(* Parse position koordinates *)
		IF jsonProperty.keys[3].propertyName = 'X' THEN
			moveToParams[commandIndex].X := jsonProperty.value.decimalValue;
			Xfound := TRUE;
			(* FOR DEBUGGING PURPOSES: *) statusMessage := 'Property parsed: X';
		ELSIF jsonProperty.keys[3].propertyName = 'Y' THEN
			moveToParams[commandIndex].Y := jsonProperty.value.decimalValue;
			Yfound := TRUE;
			(* FOR DEBUGGING PURPOSES: *) statusMessage := 'Property parsed: Y';
		ELSIF jsonProperty.keys[3].propertyName = 'Z' THEN
			moveToParams[commandIndex].Z := jsonProperty.value.decimalValue;
			Zfound := TRUE;
			(* FOR DEBUGGING PURPOSES: *) statusMessage := 'Property parsed: Z';
		ELSIF jsonProperty.keys[3].propertyName = 'A' THEN
			moveToParams[commandIndex].A := jsonProperty.value.decimalValue;
			Afound := TRUE;
			(* FOR DEBUGGING PURPOSES: *) statusMessage := 'Property parsed: A';
		ELSIF jsonProperty.keys[3].propertyName = 'B' THEN
			moveToParams[commandIndex].B := jsonProperty.value.decimalValue;
			Bfound := TRUE;
			(* FOR DEBUGGING PURPOSES: *) statusMessage := 'Property parsed: B';
		ELSIF jsonProperty.keys[3].propertyName = 'C' THEN
			moveToParams[commandIndex].C := jsonProperty.value.decimalValue;
			Cfound := TRUE;
			(* FOR DEBUGGING PURPOSES: *) statusMessage := 'Property parsed: C';
		ELSE
			successful := FALSE;
		END_IF;
	ELSE
		successful := FALSE;
	END_IF; END_IF;
ELSE
IF commandState = CRCL.State_VALIDATE_COMMAND
THEN
	(* Validate command and reset parsing helper *)
	IF Xfound AND Yfound AND Zfound AND Afound AND Bfound AND Cfound THEN
		successful := TRUE;
		(* reset parsing helper variables *)
		Xfound := FALSE;
		Yfound := FALSE;
		Zfound := FALSE;
		Afound := FALSE;
		Bfound := FALSE;
		Cfound := FALSE;
		straight := FALSE;
	ELSE
		successful := FALSE; (* TODO reset anyway? *)
	END_IF;
ELSE
IF commandState = CRCL.State_EXECUTE_COMMAND
THEN
	SocketData.x := moveToParams[commandIndex].x;
	SocketData.y := moveToParams[commandIndex].y;
	SocketData.z := moveToParams[commandIndex].z;
	SocketData.u := moveToParams[commandIndex].A;
	
	SocketData.movementDataAvailable := TRUE;
	
	commandState := CRCL.State_FINISHED_COMMAND;
	(* FOR DEBUGGING PURPOSES: *) statusMessage := 'Moooooooooooooooooooooooooovvviiiiiiiiiiiiiiiiiiiiiiiinng!!!!';
	(* Start execution or wait for it to finish *)
	
	(* TODO set `successful` flag if movements have finished (and reset otherwise) *)
END_IF; END_IF; END_IF;

(*@KEY@: END_WORKSHEET *)
END_FUNCTION_BLOCK
