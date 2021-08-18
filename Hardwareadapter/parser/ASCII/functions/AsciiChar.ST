(*@PROPERTIES_EX@
TYPE: POU
LOCALE: 0
IEC_LANGUAGE: ST
PLC_TYPE: independent
PROC_TYPE: independent
*)
(*@KEY@:DESCRIPTION*)

(*@KEY@:END_DESCRIPTION*)
FUNCTION AsciiChar : STRING1
VAR_INPUT
	character: BYTE;
END_VAR
VAR
END_VAR


(*@KEY@: WORKSHEET
NAME: AsciiChar
IEC_LANGUAGE: ST
*)
CASE character OF
	000: AsciiChar := '$00';
	001: AsciiChar := '$01';
	002: AsciiChar := '$02';
	003: AsciiChar := '$03';
	004: AsciiChar := '$04';
	005: AsciiChar := '$05';
	006: AsciiChar := '$06';
	007: AsciiChar := '$07';
	008: AsciiChar := '$08';
	009: AsciiChar := '$09';
	010: AsciiChar := '$0a';
	011: AsciiChar := '$0b';
	012: AsciiChar := '$0c';
	013: AsciiChar := '$0d';
	014: AsciiChar := '$0e';
	015: AsciiChar := '$0f';
	016: AsciiChar := '$10';
	017: AsciiChar := '$11';
	018: AsciiChar := '$12';
	019: AsciiChar := '$13';
	020: AsciiChar := '$14';
	021: AsciiChar := '$15';
	022: AsciiChar := '$16';
	023: AsciiChar := '$17';
	024: AsciiChar := '$18';
	025: AsciiChar := '$19';
	026: AsciiChar := '$1a';
	027: AsciiChar := '$1b';
	028: AsciiChar := '$1c';
	029: AsciiChar := '$1d';
	030: AsciiChar := '$1e';
	031: AsciiChar := '$1f';
	032: AsciiChar := '$20';
	033: AsciiChar := '$21';
	034: AsciiChar := '$22';
	035: AsciiChar := '$23';
	036: AsciiChar := '$24';
	037: AsciiChar := '$25';
	038: AsciiChar := '$26';
	039: AsciiChar := '$27';
	040: AsciiChar := '$28';
	041: AsciiChar := '$29';
	042: AsciiChar := '$2a';
	043: AsciiChar := '$2b';
	044: AsciiChar := '$2c';
	045: AsciiChar := '$2d';
	046: AsciiChar := '$2e';
	047: AsciiChar := '$2f';
	048: AsciiChar := '$30';
	049: AsciiChar := '$31';
	050: AsciiChar := '$32';
	051: AsciiChar := '$33';
	052: AsciiChar := '$34';
	053: AsciiChar := '$35';
	054: AsciiChar := '$36';
	055: AsciiChar := '$37';
	056: AsciiChar := '$38';
	057: AsciiChar := '$39';
	058: AsciiChar := '$3a';
	059: AsciiChar := '$3b';
	060: AsciiChar := '$3c';
	061: AsciiChar := '$3d';
	062: AsciiChar := '$3e';
	063: AsciiChar := '$3f';
	064: AsciiChar := '$40';
	065: AsciiChar := '$41';
	066: AsciiChar := '$42';
	067: AsciiChar := '$43';
	068: AsciiChar := '$44';
	069: AsciiChar := '$45';
	070: AsciiChar := '$46';
	071: AsciiChar := '$47';
	072: AsciiChar := '$48';
	073: AsciiChar := '$49';
	074: AsciiChar := '$4a';
	075: AsciiChar := '$4b';
	076: AsciiChar := '$4c';
	077: AsciiChar := '$4d';
	078: AsciiChar := '$4e';
	079: AsciiChar := '$4f';
	080: AsciiChar := '$50';
	081: AsciiChar := '$51';
	082: AsciiChar := '$52';
	083: AsciiChar := '$53';
	084: AsciiChar := '$54';
	085: AsciiChar := '$55';
	086: AsciiChar := '$56';
	087: AsciiChar := '$57';
	088: AsciiChar := '$58';
	089: AsciiChar := '$59';
	090: AsciiChar := '$5a';
	091: AsciiChar := '$5b';
	092: AsciiChar := '$5c';
	093: AsciiChar := '$5d';
	094: AsciiChar := '$5e';
	095: AsciiChar := '$5f';
	096: AsciiChar := '$60';
	097: AsciiChar := '$61';
	098: AsciiChar := '$62';
	099: AsciiChar := '$63';
	100: AsciiChar := '$64';
	101: AsciiChar := '$65';
	102: AsciiChar := '$66';
	103: AsciiChar := '$67';
	104: AsciiChar := '$68';
	105: AsciiChar := '$69';
	106: AsciiChar := '$6a';
	107: AsciiChar := '$6b';
	108: AsciiChar := '$6c';
	109: AsciiChar := '$6d';
	110: AsciiChar := '$6e';
	111: AsciiChar := '$6f';
	112: AsciiChar := '$70';
	113: AsciiChar := '$71';
	114: AsciiChar := '$72';
	115: AsciiChar := '$73';
	116: AsciiChar := '$74';
	117: AsciiChar := '$75';
	118: AsciiChar := '$76';
	119: AsciiChar := '$77';
	120: AsciiChar := '$78';
	121: AsciiChar := '$79';
	122: AsciiChar := '$7a';
	123: AsciiChar := '$7b';
	124: AsciiChar := '$7c';
	125: AsciiChar := '$7d';
	126: AsciiChar := '$7e';
	127: AsciiChar := '$7f';
END_CASE;

(*@KEY@: END_WORKSHEET *)
END_FUNCTION
