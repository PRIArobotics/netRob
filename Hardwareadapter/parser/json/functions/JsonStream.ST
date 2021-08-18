(*@PROPERTIES_EX@
TYPE: POU
LOCALE: 0
IEC_LANGUAGE: ST
PLC_TYPE: independent
PROC_TYPE: independent
*)
(*@KEY@:DESCRIPTION*)

(*@KEY@:END_DESCRIPTION*)
FUNCTION_BLOCK JsonStream
(* Note: http://json.org/ http://notes.eatonphil.com/writing-a-simple-json-parser.html *)
VAR_IN_OUT
	(* is set by this program, when a new property is available; 
		and reset by users if they wish that parsing now goes on *)
	stopForRelease: BOOL;
END_VAR
VAR_INPUT
	actualCharacter: BYTE; (* The code of the ASCII character to process next *)
END_VAR
VAR_OUTPUT
	jsonProperty: JsonProperty; (* Is only valid when stopForRelease is true *)
	parsingError: BOOL;
	parsingFinished: BOOL;
END_VAR
VAR
	parsingPosition: JsonPosition; (* logical (token based) position of the parser inside the json document *)
	newToken: BYTE (* JsonToken *);
	decreaseDepthFromLastTime: BOOL;
	increaseDepthFromLastTime: BOOL;
	insideArray: BOOL;
	insideObject: BOOL;
	nestingDepthHelper: UINT;
	debugMessage: StringKeySize;
	valueParser: JsonValueParser;
END_VAR
VAR_EXTERNAL
	Constants: GeneralConstants;
	Ascii: AsciiConstants;
	Json: JsonConstants;
END_VAR


(*@KEY@: WORKSHEET
NAME: JsonStream
IEC_LANGUAGE: ST
*)
(* Block until the caller has read the property and confirmed this by setting stopForRelease := FALSE *)
IF	stopForRelease THEN 
	RETURN;
END_IF;

IF ParserGlobals.resetParser THEN (* Reset the parser *)
	parsingError := FALSE;
	parsingFinished := FALSE;
	stopForRelease := FALSE;
	parsingPosition.tokenFinished := TRUE;
	parsingPosition.actualToken := Json.Token_BEFORE_DOCUMENT;
	jsonProperty.nestingDepth := UINT#0;
	valueParser(actualCharacter := actualCharacter, newJsonToken := parsingPosition.actualToken);
	
	jsonProperty.nestingDepth := 0;
	jsonProperty.value.decimalValue := LREAL#0;
	jsonProperty.value.integerValue := LINT#0;
	jsonProperty.value.stringValue := '';
	jsonProperty.value.valueType := BYTE#0;
	jsonProperty.keys[1].index := UINT#0;
	jsonProperty.keys[1].propertyName := '';
	jsonProperty.keys[2].index := UINT#0;
	jsonProperty.keys[2].propertyName := '';
	jsonProperty.keys[3].index := UINT#0;
	jsonProperty.keys[3].propertyName := '';
	jsonProperty.keys[4].index := UINT#0;
	jsonProperty.keys[4].propertyName := '';
	jsonProperty.keys[5].index := UINT#0;
	jsonProperty.keys[5].propertyName := '';
	jsonProperty.keys[6].index := UINT#0;
	jsonProperty.keys[6].propertyName := '';
	jsonProperty.keys[7].index := UINT#0;
	jsonProperty.keys[7].propertyName := '';
	jsonProperty.keys[8].index := UINT#0;
	jsonProperty.keys[8].propertyName := '';
	jsonProperty.keys[9].index := UINT#0;
	jsonProperty.keys[9].propertyName := '';
	newtoken := Json.Token_BEFORE_DOCUMENT;
	insideObject := FALSE;
	nestingDepthHelper := UINT#0;
	debugMessage := 'Reset Parser';
	RETURN;
END_IF;

IF actualCharacter = Ascii.NULL
THEN
	debugMessage := 'Ascii byte is NULL';
	(* Check if buffer ended in a valid state according to json notation *)
	parsingerror := NOT(parsingPosition.actualToken = Json.Token_AFTER_DOCUMENT);
ELSE
IF NOT(parsingPosition.tokenFinished)
THEN
	debugMessage := 'Work on actual Token to finish it';
	(* WORK ON ACTUAL TOKEN TO FINISH IT *)	
	valueParser(actualCharacter := actualCharacter, newJsonToken := parsingPosition.actualToken);
	(*parsingPosition.actualToken := valueParser.newJsonToken; -- Multiprog Syntax *)
	IF valueParser.resultAvailable
	THEN
		parsingPosition.tokenFinished := TRUE; (* Finish Token *)
		IF parsingPosition.actualToken = Json.Token_KEY
		THEN (* Copy token to right place *)
			nestingDepthHelper := jsonProperty.nestingDepth;
			jsonProperty.keys[nestingDepthHelper].propertyName := valueParser.result.stringValue;
		ELSE (* Release new property value *)
			(* Special cases after numbers, if end of object follows } *)
			IF parsingPosition.actualToken = Json.Token_CLOSE_OBJECT THEN
				nestingDepthHelper := jsonProperty.nestingDepth;
				IF jsonProperty.nestingDepth > UINT#0 AND
					NOT(jsonProperty.keys[nestingDepthHelper].index > UINT#00)
				THEN (* Inside object *)
					decreaseDepthFromLastTime := TRUE; (* depth will be decreased after property is read by user *)
					(* Special case: AFTER_DOCUMENT is nesting depth is 0 *)
					IF jsonProperty.nestingDepth = UINT#0 THEN
						parsingPosition.actualToken := Json.Token_AFTER_DOCUMENT;
						parsingFinished := TRUE;
					END_IF;
				ELSE
					parsingError := TRUE;
				END_IF;
			END_IF;
			(* Special cases after numbers, if end of array follows ] *)
			IF parsingPosition.actualToken = Json.Token_CLOSE_ARRAY THEN
				nestingDepthHelper := jsonProperty.nestingDepth;
				IF jsonProperty.nestingDepth = UINT#0 OR
					jsonProperty.keys[nestingDepthHelper].index = UINT#0
				THEN (* Not inside array !!! *)
					parsingError := TRUE;
				END_IF;
			END_IF;
			(* array index has already been increased at the beginning of the value *)
			jsonProperty.value := valueParser.result;
			stopForRelease := TRUE;
		END_IF;
	END_IF;
	parsingError := valueParser.parsingError; (* Error reporting *)
ELSE
IF actualCharacter <= Ascii.SPACE
THEN
	(* Whitespaces can be ignored between tokens *)
	debugMessage := 'Ignore Whitespace';
ELSE
	debugMessage := 'Validate next token: ';
	(* IF NOT A WHITESPACE AND LAST TOKEN FINISHED, VALIDATE NEXT TOKEN *)
	
	(* Clearup from } after number literals *)
	IF decreaseDepthFromLastTime THEN
		jsonProperty.nestingDepth := jsonProperty.nestingDepth -UINT#1;
		decreaseDepthFromLastTime := FALSE;
	END_IF;
	(* Clearup from nesting depth after { *)
	IF increaseDepthFromLastTime THEN
		jsonProperty.nestingDepth := jsonProperty.nestingDepth +UINT#1;
		increaseDepthFromLastTime := FALSE;
	END_IF;
	(* Clear up array index if array is closed *)
	IF parsingPosition.actualToken = Json.Token_CLOSE_ARRAY THEN
		nestingDepthHelper := jsonProperty.nestingDepth;
		jsonProperty.keys[nestingDepthHelper].index := UINT#0;
	END_IF;
	
	(* Set helper variables for actual object/appary scope *)
	insideArray := FALSE;
	insideObject := FALSE;
	IF jsonProperty.nestingDepth > UINT#0 THEN
		nestingDepthHelper := jsonProperty.nestingDepth;
		insideArray := parsingPosition.actualToken = Json.Token_OPEN_ARRAY
				OR jsonProperty.keys[nestingDepthHelper].index > UINT#0;
		insideObject := NOT(insideArray);
	END_IF;
	
	(* Special case: BEFORE_DOCUMENT expects } *)
	IF parsingPosition.actualToken = Json.Token_BEFORE_DOCUMENT AND actualCharacter = Ascii.OPEN_BRACE
	THEN
		debugMessage := CONCAT(debugMessage, 'OPEN_OBJECT');
		newToken := Json.Token_OPEN_OBJECT;
		(* Increase depth of nesting and clear array index flag *)
		(*lastFoundProperty.nestingDepth := lastFoundProperty.nestingDepth +UINT#1;*)
		increaseDepthFromLastTime := TRUE;
		nestingDepthHelper := jsonProperty.nestingDepth +UINT#1; (* +1 because nesting depth will be increased the next cycle *)
		jsonProperty.keys[nestingDepthHelper].index := UINT#0;
		(* Property notifiation *)
		jsonProperty.value.valueType := Json.Type_DOCUMENT_BEGIN;
		stopForRelease := TRUE;
	ELSE
	(* Valid next token is : *)
	IF actualCharacter = Ascii.COLON AND parsingPosition.actualToken = Json.Token_KEY
	THEN
		debugMessage := CONCAT(debugMessage, 'ASSIGN');
		newToken := Json.Token_ASSIGN;
	ELSE
	(* Valid next token is , *)
	IF actualCharacter = Ascii.COMMA AND (parsingPosition.actualToken = Json.Token_VALUE 
			OR parsingPosition.actualToken = Json.Token_CLOSE_ARRAY 
			OR (parsingPosition.actualToken = Json.Token_CLOSE_OBJECT AND (insideArray OR insideObject)))
	THEN
		debugMessage := CONCAT(debugMessage, 'SEPARATE');
		newToken := Json.Token_SEPARATE;
	ELSE
	(* Valid next token is } *)
	IF actualCharacter = Ascii.CLOSE_BRACE AND insideObject AND (parsingPosition.actualToken = Json.Token_OPEN_OBJECT 
			OR parsingPosition.actualToken = Json.Token_VALUE (* Close Array and Object count as value tokens, too *)
			OR parsingPosition.actualToken = Json.Token_CLOSE_ARRAY OR parsingPosition.actualToken = Json.Token_CLOSE_OBJECT)
	THEN
		debugMessage := CONCAT(debugMessage, 'CLOSE_OBJECT');
		newToken := Json.Token_CLOSE_OBJECT;
		(* Reduce depth of nesting *)
		jsonProperty.nestingDepth := jsonProperty.nestingDepth -UINT#1;
		(* Special case: AFTER_DOCUMENT is nesting depth is 0 *)
		IF jsonProperty.nestingDepth = UINT#0 THEN
			debugMessage := CONCAT(debugMessage, 'AFTER_DOCUMENT');
			newToken := Json.Token_AFTER_DOCUMENT;
			parsingFinished := TRUE;
		END_IF;
	ELSE
	(* Valid next token is ] *)
	IF actualCharacter = Ascii.CLOSE_BRACKET AND insideArray AND (parsingPosition.actualToken = Json.Token_OPEN_ARRAY
			OR parsingPosition.actualToken = Json.Token_VALUE (* Close Array and Object count as value tokens, too *)
			OR parsingPosition.actualToken = Json.Token_CLOSE_ARRAY OR parsingPosition.actualToken = Json.Token_CLOSE_OBJECT)
	THEN
		debugMessage := CONCAT(debugMessage, 'CLOSE_ARRAY');
		newToken := Json.Token_CLOSE_ARRAY;
	ELSE
	(* Valid next token is key *)
	IF actualCharacter = Ascii.DOUBLE_QUOTE AND 
			parsingPosition.actualToken = Json.Token_OPEN_OBJECT
			OR (insideObject AND parsingPosition.actualToken = Json.Token_SEPARATE)
	THEN
		debugMessage := CONCAT(debugMessage, 'KEY');
		newToken := Json.Token_KEY;
		parsingPosition.tokenFinished := FALSE;
		(* Initialising variables for string parsing (since a key is a string) *)
		valueParser(actualCharacter := actualCharacter, newJsonToken := parsingPosition.actualToken);
		(*parsingPosition.actualToken := valueParser.newJsonToken; -- Multiprog Syntax *)
		(* Result of a key token can't be finished within 1 charackter, so no check for resultAvailable *)
	ELSE
	(* Valid next token is value *)
	IF parsingPosition.actualToken = Json.Token_ASSIGN 
			OR parsingPosition.actualToken = Json.Token_OPEN_ARRAY 
			OR (insideArray AND parsingPosition.actualToken = Json.Token_SEPARATE)
	THEN
		debugMessage := CONCAT(debugMessage, 'VALUE');
		newToken := Json.Token_VALUE;
		parsingPosition.tokenFinished := FALSE;
		(* Initialise variables for value parsing *)
		valueParser(actualCharacter := actualCharacter, newJsonToken := parsingPosition.actualToken);
		(*parsingPosition.actualToken := valueParser.newJsonToken; -- Multiprog Syntax *)
		(* Only value tokens that can possibly be finished after 1 character are } and ] *)
		IF valueParser.resultAvailable
		THEN
			(* Release new property value *)
			parsingPosition.tokenFinished := TRUE;
			IF valueParser.result.valueType = Json.Type_TYPE_OBJECT
			THEN (* Opening Object *)
				debugMessage := CONCAT(debugMessage, 'OPEN_OBJECT');
				newToken := Json.Token_OPEN_OBJECT;
				(*lastFoundProperty.nestingDepth := lastFoundProperty.nestingDepth +UINT#1;*)
				increaseDepthFromLastTime := TRUE;
				nestingDepthHelper := jsonProperty.nestingDepth +UINT#1;(* +1 because nesting depth will be increased the next cycle *)
			ELSE (* Opening Array *)
				debugMessage := CONCAT(debugMessage, 'OPEN_ARRAY');
				newToken := Json.Token_OPEN_ARRAY;
				nestingDepthHelper := jsonProperty.nestingDepth;
			END_IF;
			jsonProperty.keys[nestingDepthHelper].index := UINT#0;
			jsonProperty.value.valueType := valueParser.result.valueType;
			stopForRelease := TRUE;
		ELSE
		nestingDepthHelper := jsonProperty.nestingDepth;
		IF NOT(valueParser.parsingError) AND (parsingPosition.actualToken = Json.Token_OPEN_ARRAY 
			OR jsonProperty.keys[nestingDepthHelper].index > UINT#0)
		THEN
			(* Increase index at start of value parsing if inside array *)
			(* since Constants.JsonToken_OPEN_ARAYY will be overwritten with VALUE soon *)
			nestingDepthHelper := jsonProperty.nestingDepth;
			jsonProperty.keys[nestingDepthHelper].index :=
					jsonProperty.keys[nestingDepthHelper].index +UINT#1;
		END_IF; END_IF;
		parsingError := valueParser.parsingError; (* Error reporting *)
	ELSE
		parsingError := TRUE; (* Noting matches --> mailformed json *)
	END_IF; END_IF; END_IF; END_IF; END_IF; END_IF; END_IF;
	parsingPosition.actualToken := newToken;
END_IF; END_IF; END_IF;

(*@KEY@: END_WORKSHEET *)
END_FUNCTION_BLOCK
