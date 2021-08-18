(*@PROPERTIES_EX@
TYPE: POU
LOCALE: 0
IEC_LANGUAGE: ST
PLC_TYPE: independent
PROC_TYPE: independent
*)
(*@KEY@:DESCRIPTION*)

(*@KEY@:END_DESCRIPTION*)
FUNCTION_BLOCK CRCLSocket
VAR_INPUT
	executeFromSpecificIp: BOOL;
	masterIp: STRING;
	socketPort: WORD;
END_VAR
VAR_OUTPUT
	state: UINT;
	errorOccured: BOOL; (* Rising Flank when network error occured *)
	errorCode: DWORD;
	receive_buffer: OSCAT_NETWORK.NETWORK_BUFFER;
	send_buffer: OSCAT_NETWORK.NETWORK_BUFFER;
END_VAR
VAR
	IP_C : OSCAT_NETWORK.IP_C;
	IP_FIFO: OSCAT_NETWORK.IP_FIFO;
	IP_STATE: BYTE;
	IP_ID: BYTE;
	socket: OSCAT_NETWORK.IP_CONTROL;
	coordinatesReady: BOOL;
END_VAR


(*@KEY@: WORKSHEET
NAME: CRCLSocket
IEC_LANGUAGE: ST
*)
IF state = 00
THEN (* INIT *)
	state := 10;
	IP_STATE := BYTE#1; (* Anmelden *)
ELSIF (state = 10)
THEN (* Warten auf Zugriffsfreigabe zum Verbindung aufbauen und Datensenden/Empfangen *)
	IF IP_STATE = BYTE#3 THEN (* Resource acquired *)
		IF executeFromSpecificIp
		THEN
			IP_C.C_IP := OSCAT_NETWORK.IP4_DECODE(masterIp);
			IP_C.C_MODE := BYTE#4;
		ELSE
			IP_C.C_IP := OSCAT_NETWORK.IP4_DECODE('0.0.0.0');
			IP_C.C_MODE := BYTE#4;
		END_IF
		IP_C.C_PORT := socketPort;
		IP_C.C_ENABLE := TRUE;
		IP_C.TIME_RESET := TRUE;
		IP_C.R_OBSERVE := TRUE;
		receive_buffer.SIZE := UINT#0;
		state := 20;
	END_IF
ELSIF state = 20
THEN
	IF IP_C.ERROR <> 0
	THEN
		errorCode := IP_C.ERROR;
		errorOccured := TRUE;
	ELSIF (send_buffer.SIZE = UINT#0 AND receive_buffer.SIZE > 0)
	THEN
		SocketData.jsonData := receive_buffer.BUFFER;
		SocketData.dataInBuffer := TRUE;
		receive_buffer.SIZE := UINT#0;
		state := 30;
	END_IF
ELSIF state = 30 AND SocketData.movementCompleted OR SocketData.setEndeffector THEN
	SocketData.movementCompleted := FALSE;
	SocketData.setEndEffector := FALSE;
	send_buffer.BUFFER[0] := BYTE#111;
	send_buffer.BUFFER[1] := BYTE#107;
	send_buffer.BUFFER[2] := BYTE#13;
	send_buffer.BUFFER[3] := BYTE#11;
	send_buffer.BUFFER[4] := BYTE#0;
	send_buffer.SIZE := UINT#5;
	IP_STATE := BYTE#4;
	state := 40;
ELSIF state = 40 AND send_buffer.SIZE = UINT#0 THEN
	IP_C.C_ENABLE := FALSE;
	state := 00;
END_IF

IP_FIFO(FIFO := IP_C.FIFO, STATE:= IP_STATE, ID:=IP_ID);
socket(TIME_OUT:=T#10S, IP_C:= IP_C, S_BUF:=send_buffer, R_BUF:=receive_buffer);
(*@KEY@: END_WORKSHEET *)
END_FUNCTION_BLOCK
