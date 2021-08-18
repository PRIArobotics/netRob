(*@PROPERTIES_EX@
TYPE: POU
LOCALE: 0
IEC_LANGUAGE: ST
PLC_TYPE: independent
PROC_TYPE: independent
*)
(*@KEY@:DESCRIPTION*)

(*@KEY@:END_DESCRIPTION*)
PROGRAM AxesControl
VAR
	startupCompleted: BOOL := FALSE;
	pwr: PowerUp;
	stopMv: StopMovement;
	stop: BOOL;
	mv: MoveToPos;
	tmpX: LREAL;
	tmpY: LREAL;
	tmpZ: LREAL;
	tmpU: LREAL;
	
	conveyorAreaX: LREAL := 400;
	conveyorAreaY: LREAL := 390; //390 IRL application
	zSafePos: LREAL := 0;
	interMovNecessary: BOOL := FALSE;
	interMovOne: BOOL := FALSE;
	interMovTwo: BOOL := FALSE;
	interMovThree: BOOL := FALSE;
	
	pwrCompleted: BOOL := FALSE;
	mvCompleted: BOOL := FALSE;
	stopCompleted: BOOL := FALSE;
	hasNewData: BOOL := FALSE;
END_VAR


(*@KEY@: WORKSHEET
NAME: AxesControl
IEC_LANGUAGE: ST
*)
IF NOT startupCompleted THEN
	pwr(completed:=pwrCompleted);
	IF pwrCompleted THEN
		startupCompleted := TRUE;
		pwrCompleted:= FALSE;
	END_IF
END_IF

IF stop THEN
	stopMv(completed:=stopCompleted);
	IF stopCompleted THEN
		stop := FALSE;
		stopCompleted := FALSE;
	END_IF
END_IF

IF SocketData.movementDataAvailable THEN
	tmpX := SocketData.x;
	tmpY := SocketData.y;
	tmpZ := SocketData.z;
	tmpU := SocketData.u;
	IF tmpX < conveyorAreaX AND tmpY < conveyorAreaY OR CMMT_AS_X.fActPosition < conveyorAreaX AND CMMT_AS_Y.fActPosition < conveyorAreaY THEN
		interMovNecessary := TRUE;
	END_IF
	SocketData.movementDataAvailable := FALSE;
	hasNewData := TRUE;
	SocketData.dataInBuffer := FALSE;
END_IF
IF hasNewData THEN
	IF interMovNecessary THEN (* split movement into several movements if it intersects the defined work area *)
		IF NOT interMovOne AND NOT interMovTwo AND NOT interMovThree THEN
			mv(x:=CMMT_AS_X.fActPosition,y:=CMMT_AS_Y.fActPosition,z:=zSafePos,u:=CMMT_ST_U.fActPosition, completed:=interMovOne);	
		ELSIF interMovOne AND NOT interMovTwo AND NOT interMovThree THEN
			mv(x:=tmpX,y:=tmpY,z:=zSafePos,u:=tmpU, completed:=interMovTwo);
		ELSIF interMovOne AND interMovTwo AND NOT interMovThree THEN
			mv(x:=tmpX,y:=tmpY,z:=tmpZ,u:=tmpU, completed:=interMovThree);
		END_IF;
	ELSE
		mv(x:=tmpX,y:=tmpY,z:=tmpZ,u:=tmpU, completed:=mvCompleted);
	END_IF
END_IF
IF mvCompleted OR interMovOne AND interMovTwo AND interMovThree THEN
		SocketData.movementCompleted := TRUE;
		mvCompleted := FALSE;
		hasNewData := FALSE;
		interMovOne := FALSE;
		interMovTwo := FALSE;
		interMovThree := FALSE;
		interMovNecessary := FALSE;
END_IF
(*@KEY@: END_WORKSHEET *)
END_PROGRAM
