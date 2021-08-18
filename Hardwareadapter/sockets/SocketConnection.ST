(*@PROPERTIES_EX@
TYPE: POU
LOCALE: 0
IEC_LANGUAGE: ST
PLC_TYPE: independent
PROC_TYPE: independent
*)
(*@KEY@:DESCRIPTION*)

(*@KEY@:END_DESCRIPTION*)
PROGRAM SocketConnection
VAR
	socket: CRCLSocket(); 
END_VAR


(*@KEY@: WORKSHEET
NAME: SocketConnection
IEC_LANGUAGE: ST
*)
(* port 1337 does not work for some reason *)
socket(executeFromSpecificIp:=FALSE,masterIp:='',socketPort:=WORD#9910);
(*@KEY@: END_WORKSHEET *)
END_PROGRAM
