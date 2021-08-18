(*@PROPERTIES_EX@
TYPE: POU
LOCALE: 0
IEC_LANGUAGE: ST
PLC_TYPE: independent
PROC_TYPE: independent
*)
(*@KEY@:DESCRIPTION*)

(*@KEY@:END_DESCRIPTION*)
FUNCTION_BLOCK JsonValueParser
VAR_IN_OUT
	newJsonToken: BYTE (* JsonToken *);
END_VAR
VAR_INPUT
	actualCharacter: BYTE;
END_VAR
VAR_OUTPUT
	result: JsonValue;
	resultAvailable:BOOL;
	parsingError: BOOL;
END_VAR
VAR
	valueState: BYTE (* JsonValueType *); (* := Json.Value_UNDEFINED; *)
	newValueState: BYTE (* JsonValueType *);
	alternativeCharacter: BYTE;
	
	stringValue: StringTextSize;
	beforeDecimal: DINT;
	afterDecimal: DINT;
	literalCounter: UINT; (* | null/true/false: position in token | number: digits after decimal point *)
	literalFlag: BOOL; (* | number: TRUE = negative number | *)
END_VAR
VAR_EXTERNAL
	Constants: GeneralConstants;
	Ascii: AsciiConstants;
	Json: JsonConstants;
END_VAR


(*@KEY@: WORKSHEET
NAME: JsonValueParser
IEC_LANGUAGE: ST
*)
(* Reset state variables *)
resultAvailable := FALSE;
parsingError := FALSE;

IF ParserGlobals.resetParser THEN
	result.decimalValue := LREAL#0;
	result.integerValue := LINT#0;
	result.stringValue := '';
	result.valueType := BYTE#0;
	stringValue := '';
	literalCounter := UINT#0;
	RETURN;
END_IF

(* Determine which value has just started *)
IF valueState = Json.Value_UNDEFINED
THEN
	IF actualCharacter = Ascii.OPEN_BRACE (* Object *) THEN
		result.valueType := Json.Type_TYPE_OBJECT;
		resultAvailable := TRUE;
	ELSE IF actualCharacter = Ascii.OPEN_BRACKET (* Array *) THEN
		result.valueType := Json.Type_TYPE_ARRAY;
		resultAvailable := TRUE;
	ELSE IF actualCharacter = Ascii.DOUBLE_QUOTE (* String *) THEN
		newValueState :=  Json.Value_VALUE_STRING;
		stringValue := '';
	ELSE IF actualCharacter = Ascii.LOWERCASE_N OR actualCharacter = Ascii.UPPERCASE_N (* null *) THEN
		newValueState :=  Json.Value_VALUE_NULL;
	ELSE IF actualCharacter = Ascii.LOWERCASE_T OR actualCharacter = Ascii.UPPERCASE_T (* true *) THEN
		newValueState :=  Json.Value_VALUE_TRUE;
	ELSE IF actualCharacter = Ascii.LOWERCASE_F OR actualCharacter = Ascii.UPPERCASE_F (* false *) THEN
		newValueState :=  Json.Value_VALUE_FALSE;
	ELSE IF actualCharacter = Ascii.PLUS OR actualCharacter = Ascii.MINUS
			OR (actualCharacter >=  Ascii.NUMBER_0 AND actualCharacter <= Ascii.NUMBER_9) (* Digit *) THEN
		newValueState :=  Json.Value_BEFORE_DECIMAL;
		beforeDecimal := DINT#0;
		afterDecimal := DINT#0;
		literalFlag := FALSE; (* positive number *)
		IF actualCharacter = Ascii.MINUS THEN
			literalFlag := TRUE; (* negative number *)
		ELSE IF NOT(actualCharacter = Ascii.PLUS) THEN (* Ignoring plus, handling numbers *)
			beforeDecimal := (BYTE_TO_DINT(actualCharacter) - BYTE_TO_DINT(Ascii.NUMBER_0));
		END_IF; END_IF;
	ELSE
			(* TODO Noting matches --> mailformed json *)
			parsingError := TRUE;
	END_IF; END_IF; END_IF; END_IF; END_IF; END_IF; END_IF;
	literalCounter := UINT#0;
ELSE
(* Work on actual (value) token to finish it *)
IF valueState = Json.Value_VALUE_STRING
THEN
	IF actualCharacter = Ascii.BACKSLASH
	THEN
		(* Skip escape character and prepare for parsing escape sequence *)
		newValueState :=  Json.Value_ESCAPE;
	ELSE
	IF actualCharacter = Ascii.DOUBLE_QUOTE
	THEN
		(* End of string value *)
		newValueState :=  Json.Value_UNDEFINED;
		result.valueType := Json.Type_TYPE_STRING;
		result.stringValue := stringValue;
		resultAvailable := TRUE;
	ELSE
	IF actualCharacter >= Ascii.SPACE
	THEN
		(* Add this character to string value and increase pointer *)
		IF LEN(stringValue) < UINT_TO_DINT(Constants.TEXT_VALUE_SIZE) THEN
			stringValue := CONCAT(stringValue, AsciiChar(actualCharacter));
		(* ELSE	*)
			(* TODO Error because things (key / string value) are too long! Or better just skip them? *)
		END_IF;
	ELSE
		(* TODO Error because non-printable character used in string *)
		parsingError := TRUE;
	END_IF; END_IF; END_IF;

ELSE
IF valueState = Json.Value_ESCAPE
THEN
	IF actualCharacter = Ascii.LOWERCASE_U
	THEN
		(* TODO prepare 4 hex digits escaping *)
		(* Actually: ignore Escape sequence and treat it as normal characters *)
		stringValue := CONCAT(stringValue, '\u');
	ELSE
		(* Single character escaping --> change actual character to whished character *)
		IF actualCharacter = Ascii.BACKSLASH OR actualCharacter = Ascii.DOUBLE_QUOTE THEN alternativeCharacter := actualCharacter; ELSE
		IF actualCharacter = Ascii.LOWERCASE_B (* backspace *) THEN alternativeCharacter := Ascii.BACKSPACE; ELSE
		IF actualCharacter = Ascii.LOWERCASE_F (* Formfeed *) THEN alternativeCharacter := Ascii.FORMFEED; ELSE
		IF actualCharacter = Ascii.LOWERCASE_N (* new line *) THEN alternativeCharacter := Ascii.NEW_LINE; ELSE
		IF actualCharacter =  Ascii.LOWERCASE_R (* carriage return *) THEN alternativeCharacter := Ascii.CARRIAGE_RETURN; ELSE
		IF actualCharacter = Ascii.LOWERCASE_T (* horizontal tab *) THEN alternativeCharacter := Ascii.HORIZONTAL_TAB; ELSE
		IF actualCharacter >= Ascii.SPACE
		THEN
			(* Add leading backslash in addition to the actual character to string value *)
			IF LEN(stringValue) < UINT_TO_DINT(Constants.TEXT_VALUE_SIZE) THEN
				stringValue := CONCAT(stringValue, '\');
			(* ELSE *)
				(* TODO Error because things (key / string value) are too long! Or better just skip them? *)
			END_IF;
		ELSE
			(* TODO Error because non-printable character used in string *)
			parsingError := TRUE;
		END_IF; END_IF; END_IF; END_IF; END_IF; END_IF; END_IF;
		(* Add (escaped) character to string value and increase pointer *)
		IF NOT(parsingError) AND LEN(stringValue) < UINT_TO_DINT(Constants.TEXT_VALUE_SIZE) THEN
			stringValue := CONCAT(stringValue, AsciiChar(alternativeCharacter));
		(* ELSE	*)
			(* TODO Error because things (key / string value) are too long! Or better just skip them? *)
		END_IF;
		newValueState := Json.Value_VALUE_STRING;
	END_IF;

ELSE
(*IF valueState = Json.Value_HEX_ESCAPE
THEN
	(* TODO *)
ELSE*)
IF valueState = Json.Value_BEFORE_DECIMAL
THEN
	IF actualCharacter = Ascii.DOT THEN
		newValueState :=  Json.Value_AFTER_DECIMAL;
		literalCounter := UINT#0;
	ELSE IF actualCharacter >= Ascii.NUMBER_0 AND actualCharacter <= Ascii.NUMBER_9 THEN
		beforeDecimal := beforeDecimal * DINT#10 + BYTE_TO_DINT(actualCharacter) - BYTE_TO_DINT(Ascii.NUMBER_0);
	ELSE IF actualCharacter = Ascii.COMMA OR actualCharacter = Ascii.CLOSE_BRACE OR actualCharacter = Ascii.CLOSE_BRACKET
			OR (actualCharacter >= Ascii.SOH AND actualCharacter <= Ascii.SPACE)
	THEN
		(* Release integer number *)
		newValueState :=  Json.Value_UNDEFINED;
		result.valueType := Json.Type_TYPE_INTEGER;
		result.integerValue := DINT_TO_INT(beforeDecimal);
		IF literalFlag THEN
			result.integerValue := -result.integerValue;
		END_IF;
		resultAvailable := TRUE;
		(* Set right next token, but JsonStream has to take care of reacting to that *)
		IF actualCharacter = Ascii.COMMA THEN
			newJsonToken := Json.Token_SEPARATE;
		ELSE IF actualCharacter = Ascii.CLOSE_BRACE THEN
			newJsonToken := Json.Token_CLOSE_OBJECT;
		ELSE IF actualCharacter = Ascii.CLOSE_BRACKET THEN
			newJsonToken := Json.Token_CLOSE_ARRAY;
		END_IF; END_IF; END_IF;
	ELSE
		(* TODO error handling *)
		parsingError := TRUE;
	END_IF; END_IF; END_IF;

ELSE
IF valueState = Json.Value_AFTER_DECIMAL
THEN
	IF actualCharacter >= Ascii.NUMBER_0 AND actualCharacter <= Ascii.NUMBER_9
	THEN
		afterDecimal := afterDecimal * 10 + actualCharacter - Ascii.NUMBER_0;
		literalCounter := literalCounter +UINT#1;
	ELSE
	IF actualCharacter = Ascii.COMMA OR actualCharacter =  Ascii.CLOSE_BRACE OR actualCharacter =  Ascii.CLOSE_BRACKET
			OR (actualCharacter >= Ascii.SOH AND actualCharacter <= Ascii.SPACE)
	THEN
		(* Release decimal number *)
		newValueState :=  Json.Value_UNDEFINED;
		result.valueType := Json.Type_TYPE_DECIMAL;
		result.decimalValue := DINT_TO_LREAL(beforeDecimal) + (DINT_TO_LREAL(afterDecimal) / EXPT(LREAL#10.0, literalCounter));
		IF literalFlag THEN
			result.decimalValue := -result.decimalValue;
		END_IF;
		resultAvailable := TRUE;
		(* Set right next token, but JsonStream has to take care of reacting to that *)
		IF actualCharacter = Ascii.COMMA THEN
			newJsonToken := Json.Token_SEPARATE;
		ELSE IF actualCharacter = Ascii.CLOSE_BRACE THEN
			newJsonToken := Json.Token_CLOSE_OBJECT;
		ELSE IF actualCharacter = Ascii.CLOSE_BRACKET THEN
			newJsonToken := Json.Token_CLOSE_ARRAY;
		END_IF; END_IF; END_IF;
	ELSE
		(* TODO error handling *)
		parsingError := TRUE;
	END_IF; END_IF;

ELSE
IF valueState = Json.Value_VALUE_NULL
THEN
	literalCounter := literalCounter + UINT#1;
	IF NOT((literalCounter = UINT#1 AND (actualCharacter = Ascii.LOWERCASE_U OR actualCharacter = Ascii.UPPERCASE_U))
			OR ((literalCounter = UINT#2 OR literalCounter = UINT#3)
			AND (actualCharacter = Ascii.LOWERCASE_L OR actualCharacter = Ascii.UPPERCASE_L)))
	THEN
		(* TODO There is an error! *)
		parsingError := TRUE;
	ELSE
	IF literalCounter = UINT#3 (* Release new property *)
	THEN
		newValueState :=  Json.Value_UNDEFINED;
		result.valueType := Json.Type_VALUE_NULL;
		resultAvailable := TRUE;
	END_IF; END_IF;

ELSE
IF valueState = Json.Value_VALUE_TRUE
THEN
	literalCounter := literalCounter +UINT#1;
	IF NOT((literalCounter = UINT#1 AND (actualCharacter = Ascii.LOWERCASE_R OR actualCharacter = Ascii.UPPERCASE_R))
			OR (literalCounter = UINT#2 AND (actualCharacter = Ascii.LOWERCASE_U OR actualCharacter = Ascii.UPPERCASE_U))
			OR (literalCounter = UINT#3 AND (actualCharacter = Ascii.LOWERCASE_E OR actualCharacter = Ascii.UPPERCASE_E)))
	THEN
		(* TODO There is an error! *)
		parsingError := TRUE;
	ELSE
	IF literalCounter = UINT#3 (* Release new property *)
	THEN
		newValueState :=  Json.Value_UNDEFINED;
		result.valueType := Json.Type_VALUE_TRUE;
		resultAvailable := TRUE;
	END_IF; END_IF;

ELSE
IF valueState = Json.Value_VALUE_FALSE
THEN
	literalCounter := literalCounter +UINT#1;
	IF NOT((literalCounter = UINT#1 AND (actualCharacter = Ascii.LOWERCASE_A OR actualCharacter = Ascii.UPPERCASE_A))
			OR (literalCounter = UINT#2 AND (actualCharacter = Ascii.LOWERCASE_L OR actualCharacter = Ascii.UPPERCASE_L))
			OR (literalCounter = UINT#3 AND (actualCharacter = Ascii.LOWERCASE_S OR actualCharacter = Ascii.UPPERCASE_S))
			OR (literalCounter = UINT#4 AND (actualCharacter = Ascii.LOWERCASE_E OR actualCharacter = Ascii.UPPERCASE_E)))
	THEN
		(* TODO There is an error! *)
		parsingError := TRUE;
	ELSE
	IF literalCounter = UINT#4 (* Release new property *)
	THEN
		newValueState :=  Json.Value_UNDEFINED;
		result.valueType := Json.Type_VALUE_FALSE;
		resultAvailable := TRUE;
	END_IF; END_IF;

END_IF; END_IF; END_IF; END_IF; END_IF; END_IF; END_IF; END_IF; (*END_IF; --> HEX_ESCAPE*)
valueState := newValueState;

(*@KEY@: END_WORKSHEET *)
END_FUNCTION_BLOCK
