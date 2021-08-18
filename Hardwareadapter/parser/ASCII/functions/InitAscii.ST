(*@PROPERTIES_EX@
TYPE: POU
LOCALE: 0
IEC_LANGUAGE: ST
PLC_TYPE: independent
PROC_TYPE: independent
*)
(*@KEY@:DESCRIPTION*)

(*@KEY@:END_DESCRIPTION*)
FUNCTION InitAscii : BOOL
VAR_INPUT
	input: BOOL; (* ignored *)
END_VAR
VAR_EXTERNAL
	Ascii: AsciiConstants;
END_VAR


(*@KEY@: WORKSHEET
NAME: InitAscii
IEC_LANGUAGE: ST
*)
Ascii.NULL := 0;
Ascii.SOH := 1;
Ascii.STX := 2;
Ascii.ETX := 3;
Ascii.EOT := 4;
Ascii.ENQ := 5;
Ascii.ACK := 6;
Ascii.BELL := 7;
Ascii.BACKSPACE := 8;
Ascii.HORIZONTAL_TAB := 9;
Ascii.NEW_LINE := 10;
Ascii.VERTICAL_TAB := 11;
Ascii.FORMFEED := 12;
Ascii.CARRIAGE_RETURN := 13;
Ascii.SO := 14;
Ascii.SI := 15;
Ascii.DLE := 16;
Ascii.DC1 := 17;
Ascii.DC2 := 18;
Ascii.DC3 := 19;
Ascii.DC4 := 20;
Ascii.NAK := 21;
Ascii.SYN := 22;
Ascii.ETB := 23;
Ascii.CAN := 24;
Ascii.EM := 25;
Ascii.SUBSTITUDE := 26;
Ascii.ESC := 27;
Ascii.FS := 28;
Ascii.GS := 29;
Ascii.RS := 30;
Ascii.US := 31;
Ascii.SPACE := 32;
Ascii.BANG := 33;
Ascii.DOUBLE_QUOTE := 34;
Ascii.HASH := 35;
Ascii.DOLLAR := 36;
Ascii.PERCENT := 37;
Ascii.AMPERSAND := 38;
Ascii.SINGLE_QUOTE := 39;
Ascii.OPEN_PAREN := 40;
Ascii.CLOSE_PAREN := 41;
Ascii.STAR := 42;
Ascii.PLUS := 43;
Ascii.COMMA := 44;
Ascii.MINUS := 45;
Ascii.DOT := 46;
Ascii.SLASH := 47;
Ascii.NUMBER_0 := 48;
Ascii.NUMBER_1 := 49;
Ascii.NUMBER_2 := 50;
Ascii.NUMBER_3 := 51;
Ascii.NUMBER_4 := 52;
Ascii.NUMBER_5 := 53;
Ascii.NUMBER_6 := 54;
Ascii.NUMBER_7 := 55;
Ascii.NUMBER_8 := 56;
Ascii.NUMBER_9 := 57;
Ascii.COLON := 58;
Ascii.SEMICOLON := 59;
Ascii.LESS_THAN := 60;
Ascii.EQUALS := 61;
Ascii.GREATER_THAN := 62;
Ascii.QUESTION := 63;
Ascii.AT_SIGN := 64;
Ascii.UPPERCASE_A := 65;
Ascii.UPPERCASE_B := 66;
Ascii.UPPERCASE_C := 67;
Ascii.UPPERCASE_D := 68;
Ascii.UPPERCASE_E := 69;
Ascii.UPPERCASE_F := 70;
Ascii.UPPERCASE_G := 71;
Ascii.UPPERCASE_H := 72;
Ascii.UPPERCASE_I := 73;
Ascii.UPPERCASE_J := 74;
Ascii.UPPERCASE_K := 75;
Ascii.UPPERCASE_L := 76;
Ascii.UPPERCASE_M := 77;
Ascii.UPPERCASE_N := 78;
Ascii.UPPERCASE_O := 79;
Ascii.UPPERCASE_P := 80;
Ascii.UPPERCASE_Q := 81;
Ascii.UPPERCASE_R := 82;
Ascii.UPPERCASE_S := 83;
Ascii.UPPERCASE_T := 84;
Ascii.UPPERCASE_U := 85;
Ascii.UPPERCASE_V := 86;
Ascii.UPPERCASE_W := 87;
Ascii.UPPERCASE_X := 88;
Ascii.UPPERCASE_Y := 89;
Ascii.UPPERCASE_Z := 90;
Ascii.OPEN_BRACKET := 91;
Ascii.BACKSLASH := 92;
Ascii.CLOSE_BRACKET := 93;
Ascii.CARET := 94;
Ascii.UNDERSCORE := 95;
Ascii.BACKQUOTE := 96;
Ascii.LOWERCASE_A := 97;
Ascii.LOWERCASE_B := 98;
Ascii.LOWERCASE_C := 99;
Ascii.LOWERCASE_D := 100;
Ascii.LOWERCASE_E := 101;
Ascii.LOWERCASE_F := 102;
Ascii.LOWERCASE_G := 103;
Ascii.LOWERCASE_H := 104;
Ascii.LOWERCASE_I := 105;
Ascii.LOWERCASE_J := 106;
Ascii.LOWERCASE_K := 107;
Ascii.LOWERCASE_L := 108;
Ascii.LOWERCASE_M := 109;
Ascii.LOWERCASE_N := 110;
Ascii.LOWERCASE_O := 111;
Ascii.LOWERCASE_P := 112;
Ascii.LOWERCASE_Q := 113;
Ascii.LOWERCASE_R := 114;
Ascii.LOWERCASE_S := 115;
Ascii.LOWERCASE_T := 116;
Ascii.LOWERCASE_U := 117;
Ascii.LOWERCASE_V := 118;
Ascii.LOWERCASE_W := 119;
Ascii.LOWERCASE_X := 120;
Ascii.LOWERCASE_Y := 121;
Ascii.LOWERCASE_Z := 122;
Ascii.OPEN_BRACE := 123;
Ascii.PIPE := 124;
Ascii.CLOSE_BRACE := 125;
Ascii.TILDE := 126;
Ascii.DELETE := 127;

InitAscii := input;

(*@KEY@: END_WORKSHEET *)
END_FUNCTION
