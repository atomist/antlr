// Generated from lib/tree/ast/antlr/java/Java9.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { Java9Listener } from "../Java9Listener";
import { Java9Visitor } from "../Java9Visitor";


export class Java9Parser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly ABSTRACT = 11;
	public static readonly ASSERT = 12;
	public static readonly BOOLEAN = 13;
	public static readonly BREAK = 14;
	public static readonly BYTE = 15;
	public static readonly CASE = 16;
	public static readonly CATCH = 17;
	public static readonly CHAR = 18;
	public static readonly CLASS = 19;
	public static readonly CONST = 20;
	public static readonly CONTINUE = 21;
	public static readonly DEFAULT = 22;
	public static readonly DO = 23;
	public static readonly DOUBLE = 24;
	public static readonly ELSE = 25;
	public static readonly ENUM = 26;
	public static readonly EXTENDS = 27;
	public static readonly FINAL = 28;
	public static readonly FINALLY = 29;
	public static readonly FLOAT = 30;
	public static readonly FOR = 31;
	public static readonly IF = 32;
	public static readonly GOTO = 33;
	public static readonly IMPLEMENTS = 34;
	public static readonly IMPORT = 35;
	public static readonly INSTANCEOF = 36;
	public static readonly INT = 37;
	public static readonly INTERFACE = 38;
	public static readonly LONG = 39;
	public static readonly NATIVE = 40;
	public static readonly NEW = 41;
	public static readonly PACKAGE = 42;
	public static readonly PRIVATE = 43;
	public static readonly PROTECTED = 44;
	public static readonly PUBLIC = 45;
	public static readonly RETURN = 46;
	public static readonly SHORT = 47;
	public static readonly STATIC = 48;
	public static readonly STRICTFP = 49;
	public static readonly SUPER = 50;
	public static readonly SWITCH = 51;
	public static readonly SYNCHRONIZED = 52;
	public static readonly THIS = 53;
	public static readonly THROW = 54;
	public static readonly THROWS = 55;
	public static readonly TRANSIENT = 56;
	public static readonly TRY = 57;
	public static readonly VOID = 58;
	public static readonly VOLATILE = 59;
	public static readonly WHILE = 60;
	public static readonly UNDER_SCORE = 61;
	public static readonly IntegerLiteral = 62;
	public static readonly FloatingPointLiteral = 63;
	public static readonly BooleanLiteral = 64;
	public static readonly CharacterLiteral = 65;
	public static readonly StringLiteral = 66;
	public static readonly NullLiteral = 67;
	public static readonly LPAREN = 68;
	public static readonly RPAREN = 69;
	public static readonly LBRACE = 70;
	public static readonly RBRACE = 71;
	public static readonly LBRACK = 72;
	public static readonly RBRACK = 73;
	public static readonly SEMI = 74;
	public static readonly COMMA = 75;
	public static readonly DOT = 76;
	public static readonly ELLIPSIS = 77;
	public static readonly AT = 78;
	public static readonly COLONCOLON = 79;
	public static readonly ASSIGN = 80;
	public static readonly GT = 81;
	public static readonly LT = 82;
	public static readonly BANG = 83;
	public static readonly TILDE = 84;
	public static readonly QUESTION = 85;
	public static readonly COLON = 86;
	public static readonly ARROW = 87;
	public static readonly EQUAL = 88;
	public static readonly LE = 89;
	public static readonly GE = 90;
	public static readonly NOTEQUAL = 91;
	public static readonly AND = 92;
	public static readonly OR = 93;
	public static readonly INC = 94;
	public static readonly DEC = 95;
	public static readonly ADD = 96;
	public static readonly SUB = 97;
	public static readonly MUL = 98;
	public static readonly DIV = 99;
	public static readonly BITAND = 100;
	public static readonly BITOR = 101;
	public static readonly CARET = 102;
	public static readonly MOD = 103;
	public static readonly ADD_ASSIGN = 104;
	public static readonly SUB_ASSIGN = 105;
	public static readonly MUL_ASSIGN = 106;
	public static readonly DIV_ASSIGN = 107;
	public static readonly AND_ASSIGN = 108;
	public static readonly OR_ASSIGN = 109;
	public static readonly XOR_ASSIGN = 110;
	public static readonly MOD_ASSIGN = 111;
	public static readonly LSHIFT_ASSIGN = 112;
	public static readonly RSHIFT_ASSIGN = 113;
	public static readonly URSHIFT_ASSIGN = 114;
	public static readonly Identifier = 115;
	public static readonly WS = 116;
	public static readonly COMMENT = 117;
	public static readonly LINE_COMMENT = 118;
	public static readonly RULE_literal = 0;
	public static readonly RULE_primitiveType = 1;
	public static readonly RULE_numericType = 2;
	public static readonly RULE_integralType = 3;
	public static readonly RULE_floatingPointType = 4;
	public static readonly RULE_referenceType = 5;
	public static readonly RULE_classOrInterfaceType = 6;
	public static readonly RULE_classType = 7;
	public static readonly RULE_classType_lf_classOrInterfaceType = 8;
	public static readonly RULE_classType_lfno_classOrInterfaceType = 9;
	public static readonly RULE_interfaceType = 10;
	public static readonly RULE_interfaceType_lf_classOrInterfaceType = 11;
	public static readonly RULE_interfaceType_lfno_classOrInterfaceType = 12;
	public static readonly RULE_typeVariable = 13;
	public static readonly RULE_arrayType = 14;
	public static readonly RULE_dims = 15;
	public static readonly RULE_typeParameter = 16;
	public static readonly RULE_typeParameterModifier = 17;
	public static readonly RULE_typeBound = 18;
	public static readonly RULE_additionalBound = 19;
	public static readonly RULE_typeArguments = 20;
	public static readonly RULE_typeArgumentList = 21;
	public static readonly RULE_typeArgument = 22;
	public static readonly RULE_wildcard = 23;
	public static readonly RULE_wildcardBounds = 24;
	public static readonly RULE_moduleName = 25;
	public static readonly RULE_packageName = 26;
	public static readonly RULE_typeName = 27;
	public static readonly RULE_packageOrTypeName = 28;
	public static readonly RULE_expressionName = 29;
	public static readonly RULE_methodName = 30;
	public static readonly RULE_ambiguousName = 31;
	public static readonly RULE_compilationUnit = 32;
	public static readonly RULE_ordinaryCompilation = 33;
	public static readonly RULE_modularCompilation = 34;
	public static readonly RULE_packageDeclaration = 35;
	public static readonly RULE_packageModifier = 36;
	public static readonly RULE_importDeclaration = 37;
	public static readonly RULE_singleTypeImportDeclaration = 38;
	public static readonly RULE_typeImportOnDemandDeclaration = 39;
	public static readonly RULE_singleStaticImportDeclaration = 40;
	public static readonly RULE_staticImportOnDemandDeclaration = 41;
	public static readonly RULE_typeDeclaration = 42;
	public static readonly RULE_moduleDeclaration = 43;
	public static readonly RULE_moduleDirective = 44;
	public static readonly RULE_requiresModifier = 45;
	public static readonly RULE_classDeclaration = 46;
	public static readonly RULE_normalClassDeclaration = 47;
	public static readonly RULE_classModifier = 48;
	public static readonly RULE_typeParameters = 49;
	public static readonly RULE_typeParameterList = 50;
	public static readonly RULE_superclass = 51;
	public static readonly RULE_superinterfaces = 52;
	public static readonly RULE_interfaceTypeList = 53;
	public static readonly RULE_classBody = 54;
	public static readonly RULE_classBodyDeclaration = 55;
	public static readonly RULE_classMemberDeclaration = 56;
	public static readonly RULE_fieldDeclaration = 57;
	public static readonly RULE_fieldModifier = 58;
	public static readonly RULE_variableDeclaratorList = 59;
	public static readonly RULE_variableDeclarator = 60;
	public static readonly RULE_variableDeclaratorId = 61;
	public static readonly RULE_variableInitializer = 62;
	public static readonly RULE_unannType = 63;
	public static readonly RULE_unannPrimitiveType = 64;
	public static readonly RULE_unannReferenceType = 65;
	public static readonly RULE_unannClassOrInterfaceType = 66;
	public static readonly RULE_unannClassType = 67;
	public static readonly RULE_unannClassType_lf_unannClassOrInterfaceType = 68;
	public static readonly RULE_unannClassType_lfno_unannClassOrInterfaceType = 69;
	public static readonly RULE_unannInterfaceType = 70;
	public static readonly RULE_unannInterfaceType_lf_unannClassOrInterfaceType = 71;
	public static readonly RULE_unannInterfaceType_lfno_unannClassOrInterfaceType = 72;
	public static readonly RULE_unannTypeVariable = 73;
	public static readonly RULE_unannArrayType = 74;
	public static readonly RULE_methodDeclaration = 75;
	public static readonly RULE_methodModifier = 76;
	public static readonly RULE_methodHeader = 77;
	public static readonly RULE_result = 78;
	public static readonly RULE_methodDeclarator = 79;
	public static readonly RULE_formalParameterList = 80;
	public static readonly RULE_formalParameters = 81;
	public static readonly RULE_formalParameter = 82;
	public static readonly RULE_variableModifier = 83;
	public static readonly RULE_lastFormalParameter = 84;
	public static readonly RULE_receiverParameter = 85;
	public static readonly RULE_throws_ = 86;
	public static readonly RULE_exceptionTypeList = 87;
	public static readonly RULE_exceptionType = 88;
	public static readonly RULE_methodBody = 89;
	public static readonly RULE_instanceInitializer = 90;
	public static readonly RULE_staticInitializer = 91;
	public static readonly RULE_constructorDeclaration = 92;
	public static readonly RULE_constructorModifier = 93;
	public static readonly RULE_constructorDeclarator = 94;
	public static readonly RULE_simpleTypeName = 95;
	public static readonly RULE_constructorBody = 96;
	public static readonly RULE_explicitConstructorInvocation = 97;
	public static readonly RULE_enumDeclaration = 98;
	public static readonly RULE_enumBody = 99;
	public static readonly RULE_enumConstantList = 100;
	public static readonly RULE_enumConstant = 101;
	public static readonly RULE_enumConstantModifier = 102;
	public static readonly RULE_enumBodyDeclarations = 103;
	public static readonly RULE_interfaceDeclaration = 104;
	public static readonly RULE_normalInterfaceDeclaration = 105;
	public static readonly RULE_interfaceModifier = 106;
	public static readonly RULE_extendsInterfaces = 107;
	public static readonly RULE_interfaceBody = 108;
	public static readonly RULE_interfaceMemberDeclaration = 109;
	public static readonly RULE_constantDeclaration = 110;
	public static readonly RULE_constantModifier = 111;
	public static readonly RULE_interfaceMethodDeclaration = 112;
	public static readonly RULE_interfaceMethodModifier = 113;
	public static readonly RULE_annotationTypeDeclaration = 114;
	public static readonly RULE_annotationTypeBody = 115;
	public static readonly RULE_annotationTypeMemberDeclaration = 116;
	public static readonly RULE_annotationTypeElementDeclaration = 117;
	public static readonly RULE_annotationTypeElementModifier = 118;
	public static readonly RULE_defaultValue = 119;
	public static readonly RULE_annotation = 120;
	public static readonly RULE_normalAnnotation = 121;
	public static readonly RULE_elementValuePairList = 122;
	public static readonly RULE_elementValuePair = 123;
	public static readonly RULE_elementValue = 124;
	public static readonly RULE_elementValueArrayInitializer = 125;
	public static readonly RULE_elementValueList = 126;
	public static readonly RULE_markerAnnotation = 127;
	public static readonly RULE_singleElementAnnotation = 128;
	public static readonly RULE_arrayInitializer = 129;
	public static readonly RULE_variableInitializerList = 130;
	public static readonly RULE_block = 131;
	public static readonly RULE_blockStatements = 132;
	public static readonly RULE_blockStatement = 133;
	public static readonly RULE_localVariableDeclarationStatement = 134;
	public static readonly RULE_localVariableDeclaration = 135;
	public static readonly RULE_statement = 136;
	public static readonly RULE_statementNoShortIf = 137;
	public static readonly RULE_statementWithoutTrailingSubstatement = 138;
	public static readonly RULE_emptyStatement = 139;
	public static readonly RULE_labeledStatement = 140;
	public static readonly RULE_labeledStatementNoShortIf = 141;
	public static readonly RULE_expressionStatement = 142;
	public static readonly RULE_statementExpression = 143;
	public static readonly RULE_ifThenStatement = 144;
	public static readonly RULE_ifThenElseStatement = 145;
	public static readonly RULE_ifThenElseStatementNoShortIf = 146;
	public static readonly RULE_assertStatement = 147;
	public static readonly RULE_switchStatement = 148;
	public static readonly RULE_switchBlock = 149;
	public static readonly RULE_switchBlockStatementGroup = 150;
	public static readonly RULE_switchLabels = 151;
	public static readonly RULE_switchLabel = 152;
	public static readonly RULE_enumConstantName = 153;
	public static readonly RULE_whileStatement = 154;
	public static readonly RULE_whileStatementNoShortIf = 155;
	public static readonly RULE_doStatement = 156;
	public static readonly RULE_forStatement = 157;
	public static readonly RULE_forStatementNoShortIf = 158;
	public static readonly RULE_basicForStatement = 159;
	public static readonly RULE_basicForStatementNoShortIf = 160;
	public static readonly RULE_forInit = 161;
	public static readonly RULE_forUpdate = 162;
	public static readonly RULE_statementExpressionList = 163;
	public static readonly RULE_enhancedForStatement = 164;
	public static readonly RULE_enhancedForStatementNoShortIf = 165;
	public static readonly RULE_breakStatement = 166;
	public static readonly RULE_continueStatement = 167;
	public static readonly RULE_returnStatement = 168;
	public static readonly RULE_throwStatement = 169;
	public static readonly RULE_synchronizedStatement = 170;
	public static readonly RULE_tryStatement = 171;
	public static readonly RULE_catches = 172;
	public static readonly RULE_catchClause = 173;
	public static readonly RULE_catchFormalParameter = 174;
	public static readonly RULE_catchType = 175;
	public static readonly RULE_finally_ = 176;
	public static readonly RULE_tryWithResourcesStatement = 177;
	public static readonly RULE_resourceSpecification = 178;
	public static readonly RULE_resourceList = 179;
	public static readonly RULE_resource = 180;
	public static readonly RULE_variableAccess = 181;
	public static readonly RULE_primary = 182;
	public static readonly RULE_primaryNoNewArray = 183;
	public static readonly RULE_primaryNoNewArray_lf_arrayAccess = 184;
	public static readonly RULE_primaryNoNewArray_lfno_arrayAccess = 185;
	public static readonly RULE_primaryNoNewArray_lf_primary = 186;
	public static readonly RULE_primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary = 187;
	public static readonly RULE_primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary = 188;
	public static readonly RULE_primaryNoNewArray_lfno_primary = 189;
	public static readonly RULE_primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary = 190;
	public static readonly RULE_primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary = 191;
	public static readonly RULE_classLiteral = 192;
	public static readonly RULE_classInstanceCreationExpression = 193;
	public static readonly RULE_classInstanceCreationExpression_lf_primary = 194;
	public static readonly RULE_classInstanceCreationExpression_lfno_primary = 195;
	public static readonly RULE_typeArgumentsOrDiamond = 196;
	public static readonly RULE_fieldAccess = 197;
	public static readonly RULE_fieldAccess_lf_primary = 198;
	public static readonly RULE_fieldAccess_lfno_primary = 199;
	public static readonly RULE_arrayAccess = 200;
	public static readonly RULE_arrayAccess_lf_primary = 201;
	public static readonly RULE_arrayAccess_lfno_primary = 202;
	public static readonly RULE_methodInvocation = 203;
	public static readonly RULE_methodInvocation_lf_primary = 204;
	public static readonly RULE_methodInvocation_lfno_primary = 205;
	public static readonly RULE_argumentList = 206;
	public static readonly RULE_methodReference = 207;
	public static readonly RULE_methodReference_lf_primary = 208;
	public static readonly RULE_methodReference_lfno_primary = 209;
	public static readonly RULE_arrayCreationExpression = 210;
	public static readonly RULE_dimExprs = 211;
	public static readonly RULE_dimExpr = 212;
	public static readonly RULE_constantExpression = 213;
	public static readonly RULE_expression = 214;
	public static readonly RULE_lambdaExpression = 215;
	public static readonly RULE_lambdaParameters = 216;
	public static readonly RULE_inferredFormalParameterList = 217;
	public static readonly RULE_lambdaBody = 218;
	public static readonly RULE_assignmentExpression = 219;
	public static readonly RULE_assignment = 220;
	public static readonly RULE_leftHandSide = 221;
	public static readonly RULE_assignmentOperator = 222;
	public static readonly RULE_conditionalExpression = 223;
	public static readonly RULE_conditionalOrExpression = 224;
	public static readonly RULE_conditionalAndExpression = 225;
	public static readonly RULE_inclusiveOrExpression = 226;
	public static readonly RULE_exclusiveOrExpression = 227;
	public static readonly RULE_andExpression = 228;
	public static readonly RULE_equalityExpression = 229;
	public static readonly RULE_relationalExpression = 230;
	public static readonly RULE_shiftExpression = 231;
	public static readonly RULE_additiveExpression = 232;
	public static readonly RULE_multiplicativeExpression = 233;
	public static readonly RULE_unaryExpression = 234;
	public static readonly RULE_preIncrementExpression = 235;
	public static readonly RULE_preDecrementExpression = 236;
	public static readonly RULE_unaryExpressionNotPlusMinus = 237;
	public static readonly RULE_postfixExpression = 238;
	public static readonly RULE_postIncrementExpression = 239;
	public static readonly RULE_postIncrementExpression_lf_postfixExpression = 240;
	public static readonly RULE_postDecrementExpression = 241;
	public static readonly RULE_postDecrementExpression_lf_postfixExpression = 242;
	public static readonly RULE_castExpression = 243;
	public static readonly RULE_identifier = 244;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"literal", "primitiveType", "numericType", "integralType", "floatingPointType", 
		"referenceType", "classOrInterfaceType", "classType", "classType_lf_classOrInterfaceType", 
		"classType_lfno_classOrInterfaceType", "interfaceType", "interfaceType_lf_classOrInterfaceType", 
		"interfaceType_lfno_classOrInterfaceType", "typeVariable", "arrayType", 
		"dims", "typeParameter", "typeParameterModifier", "typeBound", "additionalBound", 
		"typeArguments", "typeArgumentList", "typeArgument", "wildcard", "wildcardBounds", 
		"moduleName", "packageName", "typeName", "packageOrTypeName", "expressionName", 
		"methodName", "ambiguousName", "compilationUnit", "ordinaryCompilation", 
		"modularCompilation", "packageDeclaration", "packageModifier", "importDeclaration", 
		"singleTypeImportDeclaration", "typeImportOnDemandDeclaration", "singleStaticImportDeclaration", 
		"staticImportOnDemandDeclaration", "typeDeclaration", "moduleDeclaration", 
		"moduleDirective", "requiresModifier", "classDeclaration", "normalClassDeclaration", 
		"classModifier", "typeParameters", "typeParameterList", "superclass", 
		"superinterfaces", "interfaceTypeList", "classBody", "classBodyDeclaration", 
		"classMemberDeclaration", "fieldDeclaration", "fieldModifier", "variableDeclaratorList", 
		"variableDeclarator", "variableDeclaratorId", "variableInitializer", "unannType", 
		"unannPrimitiveType", "unannReferenceType", "unannClassOrInterfaceType", 
		"unannClassType", "unannClassType_lf_unannClassOrInterfaceType", "unannClassType_lfno_unannClassOrInterfaceType", 
		"unannInterfaceType", "unannInterfaceType_lf_unannClassOrInterfaceType", 
		"unannInterfaceType_lfno_unannClassOrInterfaceType", "unannTypeVariable", 
		"unannArrayType", "methodDeclaration", "methodModifier", "methodHeader", 
		"result", "methodDeclarator", "formalParameterList", "formalParameters", 
		"formalParameter", "variableModifier", "lastFormalParameter", "receiverParameter", 
		"throws_", "exceptionTypeList", "exceptionType", "methodBody", "instanceInitializer", 
		"staticInitializer", "constructorDeclaration", "constructorModifier", 
		"constructorDeclarator", "simpleTypeName", "constructorBody", "explicitConstructorInvocation", 
		"enumDeclaration", "enumBody", "enumConstantList", "enumConstant", "enumConstantModifier", 
		"enumBodyDeclarations", "interfaceDeclaration", "normalInterfaceDeclaration", 
		"interfaceModifier", "extendsInterfaces", "interfaceBody", "interfaceMemberDeclaration", 
		"constantDeclaration", "constantModifier", "interfaceMethodDeclaration", 
		"interfaceMethodModifier", "annotationTypeDeclaration", "annotationTypeBody", 
		"annotationTypeMemberDeclaration", "annotationTypeElementDeclaration", 
		"annotationTypeElementModifier", "defaultValue", "annotation", "normalAnnotation", 
		"elementValuePairList", "elementValuePair", "elementValue", "elementValueArrayInitializer", 
		"elementValueList", "markerAnnotation", "singleElementAnnotation", "arrayInitializer", 
		"variableInitializerList", "block", "blockStatements", "blockStatement", 
		"localVariableDeclarationStatement", "localVariableDeclaration", "statement", 
		"statementNoShortIf", "statementWithoutTrailingSubstatement", "emptyStatement", 
		"labeledStatement", "labeledStatementNoShortIf", "expressionStatement", 
		"statementExpression", "ifThenStatement", "ifThenElseStatement", "ifThenElseStatementNoShortIf", 
		"assertStatement", "switchStatement", "switchBlock", "switchBlockStatementGroup", 
		"switchLabels", "switchLabel", "enumConstantName", "whileStatement", "whileStatementNoShortIf", 
		"doStatement", "forStatement", "forStatementNoShortIf", "basicForStatement", 
		"basicForStatementNoShortIf", "forInit", "forUpdate", "statementExpressionList", 
		"enhancedForStatement", "enhancedForStatementNoShortIf", "breakStatement", 
		"continueStatement", "returnStatement", "throwStatement", "synchronizedStatement", 
		"tryStatement", "catches", "catchClause", "catchFormalParameter", "catchType", 
		"finally_", "tryWithResourcesStatement", "resourceSpecification", "resourceList", 
		"resource", "variableAccess", "primary", "primaryNoNewArray", "primaryNoNewArray_lf_arrayAccess", 
		"primaryNoNewArray_lfno_arrayAccess", "primaryNoNewArray_lf_primary", 
		"primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary", "primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary", 
		"primaryNoNewArray_lfno_primary", "primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary", 
		"primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary", "classLiteral", 
		"classInstanceCreationExpression", "classInstanceCreationExpression_lf_primary", 
		"classInstanceCreationExpression_lfno_primary", "typeArgumentsOrDiamond", 
		"fieldAccess", "fieldAccess_lf_primary", "fieldAccess_lfno_primary", "arrayAccess", 
		"arrayAccess_lf_primary", "arrayAccess_lfno_primary", "methodInvocation", 
		"methodInvocation_lf_primary", "methodInvocation_lfno_primary", "argumentList", 
		"methodReference", "methodReference_lf_primary", "methodReference_lfno_primary", 
		"arrayCreationExpression", "dimExprs", "dimExpr", "constantExpression", 
		"expression", "lambdaExpression", "lambdaParameters", "inferredFormalParameterList", 
		"lambdaBody", "assignmentExpression", "assignment", "leftHandSide", "assignmentOperator", 
		"conditionalExpression", "conditionalOrExpression", "conditionalAndExpression", 
		"inclusiveOrExpression", "exclusiveOrExpression", "andExpression", "equalityExpression", 
		"relationalExpression", "shiftExpression", "additiveExpression", "multiplicativeExpression", 
		"unaryExpression", "preIncrementExpression", "preDecrementExpression", 
		"unaryExpressionNotPlusMinus", "postfixExpression", "postIncrementExpression", 
		"postIncrementExpression_lf_postfixExpression", "postDecrementExpression", 
		"postDecrementExpression_lf_postfixExpression", "castExpression", "identifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'open'", "'module'", "'requires'", "'exports'", "'to'", "'opens'", 
		"'uses'", "'provides'", "'with'", "'transitive'", "'abstract'", "'assert'", 
		"'boolean'", "'break'", "'byte'", "'case'", "'catch'", "'char'", "'class'", 
		"'const'", "'continue'", "'default'", "'do'", "'double'", "'else'", "'enum'", 
		"'extends'", "'final'", "'finally'", "'float'", "'for'", "'if'", "'goto'", 
		"'implements'", "'import'", "'instanceof'", "'int'", "'interface'", "'long'", 
		"'native'", "'new'", "'package'", "'private'", "'protected'", "'public'", 
		"'return'", "'short'", "'static'", "'strictfp'", "'super'", "'switch'", 
		"'synchronized'", "'this'", "'throw'", "'throws'", "'transient'", "'try'", 
		"'void'", "'volatile'", "'while'", "'_'", undefined, undefined, undefined, 
		undefined, undefined, "'null'", "'('", "')'", "'{'", "'}'", "'['", "']'", 
		"';'", "','", "'.'", "'...'", "'@'", "'::'", "'='", "'>'", "'<'", "'!'", 
		"'~'", "'?'", "':'", "'->'", "'=='", "'<='", "'>='", "'!='", "'&&'", "'||'", 
		"'++'", "'--'", "'+'", "'-'", "'*'", "'/'", "'&'", "'|'", "'^'", "'%'", 
		"'+='", "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", "'%='", "'<<='", 
		"'>>='", "'>>>='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "ABSTRACT", "ASSERT", "BOOLEAN", 
		"BREAK", "BYTE", "CASE", "CATCH", "CHAR", "CLASS", "CONST", "CONTINUE", 
		"DEFAULT", "DO", "DOUBLE", "ELSE", "ENUM", "EXTENDS", "FINAL", "FINALLY", 
		"FLOAT", "FOR", "IF", "GOTO", "IMPLEMENTS", "IMPORT", "INSTANCEOF", "INT", 
		"INTERFACE", "LONG", "NATIVE", "NEW", "PACKAGE", "PRIVATE", "PROTECTED", 
		"PUBLIC", "RETURN", "SHORT", "STATIC", "STRICTFP", "SUPER", "SWITCH", 
		"SYNCHRONIZED", "THIS", "THROW", "THROWS", "TRANSIENT", "TRY", "VOID", 
		"VOLATILE", "WHILE", "UNDER_SCORE", "IntegerLiteral", "FloatingPointLiteral", 
		"BooleanLiteral", "CharacterLiteral", "StringLiteral", "NullLiteral", 
		"LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", 
		"DOT", "ELLIPSIS", "AT", "COLONCOLON", "ASSIGN", "GT", "LT", "BANG", "TILDE", 
		"QUESTION", "COLON", "ARROW", "EQUAL", "LE", "GE", "NOTEQUAL", "AND", 
		"OR", "INC", "DEC", "ADD", "SUB", "MUL", "DIV", "BITAND", "BITOR", "CARET", 
		"MOD", "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", 
		"OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", 
		"URSHIFT_ASSIGN", "Identifier", "WS", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Java9Parser._LITERAL_NAMES, Java9Parser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return Java9Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	@Override
	public get grammarFileName(): string { return "Java9.g4"; }

	@Override
	public get ruleNames(): string[] { return Java9Parser.ruleNames; }

	@Override
	public get serializedATN(): string { return Java9Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Java9Parser._ATN, this);
	}
	//@RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Java9Parser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 490;
			_la = this._input.LA(1);
			if (!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (Java9Parser.IntegerLiteral - 62)) | (1 << (Java9Parser.FloatingPointLiteral - 62)) | (1 << (Java9Parser.BooleanLiteral - 62)) | (1 << (Java9Parser.CharacterLiteral - 62)) | (1 << (Java9Parser.StringLiteral - 62)) | (1 << (Java9Parser.NullLiteral - 62)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Java9Parser.RULE_primitiveType);
		let _la: number;
		try {
			this.state = 506;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.AT) {
					{
					{
					this.state = 492;
					this.annotation();
					}
					}
					this.state = 497;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 498;
				this.numericType();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 502;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.AT) {
					{
					{
					this.state = 499;
					this.annotation();
					}
					}
					this.state = 504;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 505;
				this.match(Java9Parser.BOOLEAN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public numericType(): NumericTypeContext {
		let _localctx: NumericTypeContext = new NumericTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Java9Parser.RULE_numericType);
		try {
			this.state = 510;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.BYTE:
			case Java9Parser.CHAR:
			case Java9Parser.INT:
			case Java9Parser.LONG:
			case Java9Parser.SHORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 508;
				this.integralType();
				}
				break;
			case Java9Parser.DOUBLE:
			case Java9Parser.FLOAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 509;
				this.floatingPointType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public integralType(): IntegralTypeContext {
		let _localctx: IntegralTypeContext = new IntegralTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Java9Parser.RULE_integralType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			_la = this._input.LA(1);
			if (!(_la === Java9Parser.BYTE || _la === Java9Parser.CHAR || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.SHORT - 37)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public floatingPointType(): FloatingPointTypeContext {
		let _localctx: FloatingPointTypeContext = new FloatingPointTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Java9Parser.RULE_floatingPointType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			_la = this._input.LA(1);
			if (!(_la === Java9Parser.DOUBLE || _la === Java9Parser.FLOAT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public referenceType(): ReferenceTypeContext {
		let _localctx: ReferenceTypeContext = new ReferenceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Java9Parser.RULE_referenceType);
		try {
			this.state = 519;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 516;
				this.classOrInterfaceType();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 517;
				this.typeVariable();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 518;
				this.arrayType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		let _localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Java9Parser.RULE_classOrInterfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 521;
				this.classType_lfno_classOrInterfaceType();
				}
				break;
			case 2:
				{
				this.state = 522;
				this.interfaceType_lfno_classOrInterfaceType();
				}
				break;
			}
			this.state = 529;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 527;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						this.state = 525;
						this.classType_lf_classOrInterfaceType();
						}
						break;
					case 2:
						{
						this.state = 526;
						this.interfaceType_lf_classOrInterfaceType();
						}
						break;
					}
					}
				}
				this.state = 531;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public classType(): ClassTypeContext {
		let _localctx: ClassTypeContext = new ClassTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Java9Parser.RULE_classType);
		let _la: number;
		try {
			this.state = 554;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.AT) {
					{
					{
					this.state = 532;
					this.annotation();
					}
					}
					this.state = 537;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 538;
				this.identifier();
				this.state = 540;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 539;
					this.typeArguments();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 542;
				this.classOrInterfaceType();
				this.state = 543;
				this.match(Java9Parser.DOT);
				this.state = 547;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.AT) {
					{
					{
					this.state = 544;
					this.annotation();
					}
					}
					this.state = 549;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 550;
				this.identifier();
				this.state = 552;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 551;
					this.typeArguments();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public classType_lf_classOrInterfaceType(): ClassType_lf_classOrInterfaceTypeContext {
		let _localctx: ClassType_lf_classOrInterfaceTypeContext = new ClassType_lf_classOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Java9Parser.RULE_classType_lf_classOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 556;
			this.match(Java9Parser.DOT);
			this.state = 560;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.AT) {
				{
				{
				this.state = 557;
				this.annotation();
				}
				}
				this.state = 562;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 563;
			this.identifier();
			this.state = 565;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 564;
				this.typeArguments();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public classType_lfno_classOrInterfaceType(): ClassType_lfno_classOrInterfaceTypeContext {
		let _localctx: ClassType_lfno_classOrInterfaceTypeContext = new ClassType_lfno_classOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Java9Parser.RULE_classType_lfno_classOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.AT) {
				{
				{
				this.state = 567;
				this.annotation();
				}
				}
				this.state = 572;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 573;
			this.identifier();
			this.state = 575;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 574;
				this.typeArguments();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public interfaceType(): InterfaceTypeContext {
		let _localctx: InterfaceTypeContext = new InterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Java9Parser.RULE_interfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 577;
			this.classType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public interfaceType_lf_classOrInterfaceType(): InterfaceType_lf_classOrInterfaceTypeContext {
		let _localctx: InterfaceType_lf_classOrInterfaceTypeContext = new InterfaceType_lf_classOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Java9Parser.RULE_interfaceType_lf_classOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 579;
			this.classType_lf_classOrInterfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public interfaceType_lfno_classOrInterfaceType(): InterfaceType_lfno_classOrInterfaceTypeContext {
		let _localctx: InterfaceType_lfno_classOrInterfaceTypeContext = new InterfaceType_lfno_classOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, Java9Parser.RULE_interfaceType_lfno_classOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 581;
			this.classType_lfno_classOrInterfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public typeVariable(): TypeVariableContext {
		let _localctx: TypeVariableContext = new TypeVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, Java9Parser.RULE_typeVariable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.AT) {
				{
				{
				this.state = 583;
				this.annotation();
				}
				}
				this.state = 588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 589;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, Java9Parser.RULE_arrayType);
		try {
			this.state = 600;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 591;
				this.primitiveType();
				this.state = 592;
				this.dims();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 594;
				this.classOrInterfaceType();
				this.state = 595;
				this.dims();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 597;
				this.typeVariable();
				this.state = 598;
				this.dims();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public dims(): DimsContext {
		let _localctx: DimsContext = new DimsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, Java9Parser.RULE_dims);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 605;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.AT) {
				{
				{
				this.state = 602;
				this.annotation();
				}
				}
				this.state = 607;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 608;
			this.match(Java9Parser.LBRACK);
			this.state = 609;
			this.match(Java9Parser.RBRACK);
			this.state = 620;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 613;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === Java9Parser.AT) {
						{
						{
						this.state = 610;
						this.annotation();
						}
						}
						this.state = 615;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 616;
					this.match(Java9Parser.LBRACK);
					this.state = 617;
					this.match(Java9Parser.RBRACK);
					}
					}
				}
				this.state = 622;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, Java9Parser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.AT) {
				{
				{
				this.state = 623;
				this.typeParameterModifier();
				}
				}
				this.state = 628;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 629;
			this.identifier();
			this.state = 631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.EXTENDS) {
				{
				this.state = 630;
				this.typeBound();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public typeParameterModifier(): TypeParameterModifierContext {
		let _localctx: TypeParameterModifierContext = new TypeParameterModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, Java9Parser.RULE_typeParameterModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 633;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public typeBound(): TypeBoundContext {
		let _localctx: TypeBoundContext = new TypeBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, Java9Parser.RULE_typeBound);
		let _la: number;
		try {
			this.state = 645;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 635;
				this.match(Java9Parser.EXTENDS);
				this.state = 636;
				this.typeVariable();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 637;
				this.match(Java9Parser.EXTENDS);
				this.state = 638;
				this.classOrInterfaceType();
				this.state = 642;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.BITAND) {
					{
					{
					this.state = 639;
					this.additionalBound();
					}
					}
					this.state = 644;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public additionalBound(): AdditionalBoundContext {
		let _localctx: AdditionalBoundContext = new AdditionalBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, Java9Parser.RULE_additionalBound);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 647;
			this.match(Java9Parser.BITAND);
			this.state = 648;
			this.interfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, Java9Parser.RULE_typeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 650;
			this.match(Java9Parser.LT);
			this.state = 651;
			this.typeArgumentList();
			this.state = 652;
			this.match(Java9Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public typeArgumentList(): TypeArgumentListContext {
		let _localctx: TypeArgumentListContext = new TypeArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, Java9Parser.RULE_typeArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 654;
			this.typeArgument();
			this.state = 659;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.COMMA) {
				{
				{
				this.state = 655;
				this.match(Java9Parser.COMMA);
				this.state = 656;
				this.typeArgument();
				}
				}
				this.state = 661;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public typeArgument(): TypeArgumentContext {
		let _localctx: TypeArgumentContext = new TypeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, Java9Parser.RULE_typeArgument);
		try {
			this.state = 664;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 662;
				this.referenceType();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 663;
				this.wildcard();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public wildcard(): WildcardContext {
		let _localctx: WildcardContext = new WildcardContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, Java9Parser.RULE_wildcard);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 669;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.AT) {
				{
				{
				this.state = 666;
				this.annotation();
				}
				}
				this.state = 671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 672;
			this.match(Java9Parser.QUESTION);
			this.state = 674;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.EXTENDS || _la === Java9Parser.SUPER) {
				{
				this.state = 673;
				this.wildcardBounds();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public wildcardBounds(): WildcardBoundsContext {
		let _localctx: WildcardBoundsContext = new WildcardBoundsContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, Java9Parser.RULE_wildcardBounds);
		try {
			this.state = 680;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.EXTENDS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 676;
				this.match(Java9Parser.EXTENDS);
				this.state = 677;
				this.referenceType();
				}
				break;
			case Java9Parser.SUPER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 678;
				this.match(Java9Parser.SUPER);
				this.state = 679;
				this.referenceType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public moduleName(): ModuleNameContext;
	public moduleName(_p: number): ModuleNameContext;
	//@RuleVersion(0)
	public moduleName(_p?: number): ModuleNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ModuleNameContext = new ModuleNameContext(this._ctx, _parentState);
		let _prevctx: ModuleNameContext = _localctx;
		let _startState: number = 50;
		this.enterRecursionRule(_localctx, 50, Java9Parser.RULE_moduleName, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 683;
			this.identifier();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 690;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ModuleNameContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_moduleName);
					this.state = 685;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 686;
					this.match(Java9Parser.DOT);
					this.state = 687;
					this.identifier();
					}
					}
				}
				this.state = 692;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public packageName(): PackageNameContext;
	public packageName(_p: number): PackageNameContext;
	//@RuleVersion(0)
	public packageName(_p?: number): PackageNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PackageNameContext = new PackageNameContext(this._ctx, _parentState);
		let _prevctx: PackageNameContext = _localctx;
		let _startState: number = 52;
		this.enterRecursionRule(_localctx, 52, Java9Parser.RULE_packageName, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 694;
			this.identifier();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 701;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new PackageNameContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_packageName);
					this.state = 696;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 697;
					this.match(Java9Parser.DOT);
					this.state = 698;
					this.identifier();
					}
					}
				}
				this.state = 703;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, Java9Parser.RULE_typeName);
		try {
			this.state = 709;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 704;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 705;
				this.packageOrTypeName(0);
				this.state = 706;
				this.match(Java9Parser.DOT);
				this.state = 707;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public packageOrTypeName(): PackageOrTypeNameContext;
	public packageOrTypeName(_p: number): PackageOrTypeNameContext;
	//@RuleVersion(0)
	public packageOrTypeName(_p?: number): PackageOrTypeNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PackageOrTypeNameContext = new PackageOrTypeNameContext(this._ctx, _parentState);
		let _prevctx: PackageOrTypeNameContext = _localctx;
		let _startState: number = 56;
		this.enterRecursionRule(_localctx, 56, Java9Parser.RULE_packageOrTypeName, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 712;
			this.identifier();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 719;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new PackageOrTypeNameContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_packageOrTypeName);
					this.state = 714;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 715;
					this.match(Java9Parser.DOT);
					this.state = 716;
					this.identifier();
					}
					}
				}
				this.state = 721;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public expressionName(): ExpressionNameContext {
		let _localctx: ExpressionNameContext = new ExpressionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, Java9Parser.RULE_expressionName);
		try {
			this.state = 727;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 722;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 723;
				this.ambiguousName(0);
				this.state = 724;
				this.match(Java9Parser.DOT);
				this.state = 725;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public methodName(): MethodNameContext {
		let _localctx: MethodNameContext = new MethodNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, Java9Parser.RULE_methodName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 729;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public ambiguousName(): AmbiguousNameContext;
	public ambiguousName(_p: number): AmbiguousNameContext;
	//@RuleVersion(0)
	public ambiguousName(_p?: number): AmbiguousNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AmbiguousNameContext = new AmbiguousNameContext(this._ctx, _parentState);
		let _prevctx: AmbiguousNameContext = _localctx;
		let _startState: number = 62;
		this.enterRecursionRule(_localctx, 62, Java9Parser.RULE_ambiguousName, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 732;
			this.identifier();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 739;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new AmbiguousNameContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_ambiguousName);
					this.state = 734;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 735;
					this.match(Java9Parser.DOT);
					this.state = 736;
					this.identifier();
					}
					}
				}
				this.state = 741;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, Java9Parser.RULE_compilationUnit);
		try {
			this.state = 744;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 742;
				this.ordinaryCompilation();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 743;
				this.modularCompilation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public ordinaryCompilation(): OrdinaryCompilationContext {
		let _localctx: OrdinaryCompilationContext = new OrdinaryCompilationContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, Java9Parser.RULE_ordinaryCompilation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 747;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 746;
				this.packageDeclaration();
				}
				break;
			}
			this.state = 752;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.IMPORT) {
				{
				{
				this.state = 749;
				this.importDeclaration();
				}
				}
				this.state = 754;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 758;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.ABSTRACT) | (1 << Java9Parser.CLASS) | (1 << Java9Parser.ENUM) | (1 << Java9Parser.FINAL))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (Java9Parser.INTERFACE - 38)) | (1 << (Java9Parser.PRIVATE - 38)) | (1 << (Java9Parser.PROTECTED - 38)) | (1 << (Java9Parser.PUBLIC - 38)) | (1 << (Java9Parser.STATIC - 38)) | (1 << (Java9Parser.STRICTFP - 38)))) !== 0) || _la === Java9Parser.SEMI || _la === Java9Parser.AT) {
				{
				{
				this.state = 755;
				this.typeDeclaration();
				}
				}
				this.state = 760;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 761;
			this.match(Java9Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public modularCompilation(): ModularCompilationContext {
		let _localctx: ModularCompilationContext = new ModularCompilationContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, Java9Parser.RULE_modularCompilation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 766;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.IMPORT) {
				{
				{
				this.state = 763;
				this.importDeclaration();
				}
				}
				this.state = 768;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 769;
			this.moduleDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public packageDeclaration(): PackageDeclarationContext {
		let _localctx: PackageDeclarationContext = new PackageDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, Java9Parser.RULE_packageDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 774;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.AT) {
				{
				{
				this.state = 771;
				this.packageModifier();
				}
				}
				this.state = 776;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 777;
			this.match(Java9Parser.PACKAGE);
			this.state = 778;
			this.packageName(0);
			this.state = 779;
			this.match(Java9Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public packageModifier(): PackageModifierContext {
		let _localctx: PackageModifierContext = new PackageModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, Java9Parser.RULE_packageModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 781;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, Java9Parser.RULE_importDeclaration);
		try {
			this.state = 787;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 783;
				this.singleTypeImportDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 784;
				this.typeImportOnDemandDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 785;
				this.singleStaticImportDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 786;
				this.staticImportOnDemandDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public singleTypeImportDeclaration(): SingleTypeImportDeclarationContext {
		let _localctx: SingleTypeImportDeclarationContext = new SingleTypeImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, Java9Parser.RULE_singleTypeImportDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this.match(Java9Parser.IMPORT);
			this.state = 790;
			this.typeName();
			this.state = 791;
			this.match(Java9Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public typeImportOnDemandDeclaration(): TypeImportOnDemandDeclarationContext {
		let _localctx: TypeImportOnDemandDeclarationContext = new TypeImportOnDemandDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, Java9Parser.RULE_typeImportOnDemandDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 793;
			this.match(Java9Parser.IMPORT);
			this.state = 794;
			this.packageOrTypeName(0);
			this.state = 795;
			this.match(Java9Parser.DOT);
			this.state = 796;
			this.match(Java9Parser.MUL);
			this.state = 797;
			this.match(Java9Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public singleStaticImportDeclaration(): SingleStaticImportDeclarationContext {
		let _localctx: SingleStaticImportDeclarationContext = new SingleStaticImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, Java9Parser.RULE_singleStaticImportDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 799;
			this.match(Java9Parser.IMPORT);
			this.state = 800;
			this.match(Java9Parser.STATIC);
			this.state = 801;
			this.typeName();
			this.state = 802;
			this.match(Java9Parser.DOT);
			this.state = 803;
			this.identifier();
			this.state = 804;
			this.match(Java9Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public staticImportOnDemandDeclaration(): StaticImportOnDemandDeclarationContext {
		let _localctx: StaticImportOnDemandDeclarationContext = new StaticImportOnDemandDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, Java9Parser.RULE_staticImportOnDemandDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 806;
			this.match(Java9Parser.IMPORT);
			this.state = 807;
			this.match(Java9Parser.STATIC);
			this.state = 808;
			this.typeName();
			this.state = 809;
			this.match(Java9Parser.DOT);
			this.state = 810;
			this.match(Java9Parser.MUL);
			this.state = 811;
			this.match(Java9Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, Java9Parser.RULE_typeDeclaration);
		try {
			this.state = 816;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 813;
				this.classDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 814;
				this.interfaceDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 815;
				this.match(Java9Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public moduleDeclaration(): ModuleDeclarationContext {
		let _localctx: ModuleDeclarationContext = new ModuleDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, Java9Parser.RULE_moduleDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 821;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.AT) {
				{
				{
				this.state = 818;
				this.annotation();
				}
				}
				this.state = 823;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 825;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.T__0) {
				{
				this.state = 824;
				this.match(Java9Parser.T__0);
				}
			}

			this.state = 827;
			this.match(Java9Parser.T__1);
			this.state = 828;
			this.moduleName(0);
			this.state = 829;
			this.match(Java9Parser.LBRACE);
			this.state = 833;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7))) !== 0)) {
				{
				{
				this.state = 830;
				this.moduleDirective();
				}
				}
				this.state = 835;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 836;
			this.match(Java9Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public moduleDirective(): ModuleDirectiveContext {
		let _localctx: ModuleDirectiveContext = new ModuleDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, Java9Parser.RULE_moduleDirective);
		let _la: number;
		try {
			this.state = 895;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 838;
				this.match(Java9Parser.T__2);
				this.state = 842;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.T__9 || _la === Java9Parser.STATIC) {
					{
					{
					this.state = 839;
					this.requiresModifier();
					}
					}
					this.state = 844;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 845;
				this.moduleName(0);
				this.state = 846;
				this.match(Java9Parser.SEMI);
				}
				break;
			case Java9Parser.T__3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 848;
				this.match(Java9Parser.T__3);
				this.state = 849;
				this.packageName(0);
				this.state = 859;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.T__4) {
					{
					this.state = 850;
					this.match(Java9Parser.T__4);
					this.state = 851;
					this.moduleName(0);
					this.state = 856;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === Java9Parser.COMMA) {
						{
						{
						this.state = 852;
						this.match(Java9Parser.COMMA);
						this.state = 853;
						this.moduleName(0);
						}
						}
						this.state = 858;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 861;
				this.match(Java9Parser.SEMI);
				}
				break;
			case Java9Parser.T__5:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 863;
				this.match(Java9Parser.T__5);
				this.state = 864;
				this.packageName(0);
				this.state = 874;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.T__4) {
					{
					this.state = 865;
					this.match(Java9Parser.T__4);
					this.state = 866;
					this.moduleName(0);
					this.state = 871;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === Java9Parser.COMMA) {
						{
						{
						this.state = 867;
						this.match(Java9Parser.COMMA);
						this.state = 868;
						this.moduleName(0);
						}
						}
						this.state = 873;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 876;
				this.match(Java9Parser.SEMI);
				}
				break;
			case Java9Parser.T__6:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 878;
				this.match(Java9Parser.T__6);
				this.state = 879;
				this.typeName();
				this.state = 880;
				this.match(Java9Parser.SEMI);
				}
				break;
			case Java9Parser.T__7:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 882;
				this.match(Java9Parser.T__7);
				this.state = 883;
				this.typeName();
				this.state = 884;
				this.match(Java9Parser.T__8);
				this.state = 885;
				this.typeName();
				this.state = 890;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.COMMA) {
					{
					{
					this.state = 886;
					this.match(Java9Parser.COMMA);
					this.state = 887;
					this.typeName();
					}
					}
					this.state = 892;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 893;
				this.match(Java9Parser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public requiresModifier(): RequiresModifierContext {
		let _localctx: RequiresModifierContext = new RequiresModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, Java9Parser.RULE_requiresModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 897;
			_la = this._input.LA(1);
			if (!(_la === Java9Parser.T__9 || _la === Java9Parser.STATIC)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, Java9Parser.RULE_classDeclaration);
		try {
			this.state = 901;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 899;
				this.normalClassDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 900;
				this.enumDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public normalClassDeclaration(): NormalClassDeclarationContext {
		let _localctx: NormalClassDeclarationContext = new NormalClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, Java9Parser.RULE_normalClassDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 906;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.ABSTRACT || _la === Java9Parser.FINAL || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (Java9Parser.PRIVATE - 43)) | (1 << (Java9Parser.PROTECTED - 43)) | (1 << (Java9Parser.PUBLIC - 43)) | (1 << (Java9Parser.STATIC - 43)) | (1 << (Java9Parser.STRICTFP - 43)))) !== 0) || _la === Java9Parser.AT) {
				{
				{
				this.state = 903;
				this.classModifier();
				}
				}
				this.state = 908;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 909;
			this.match(Java9Parser.CLASS);
			this.state = 910;
			this.identifier();
			this.state = 912;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.LT) {
				{
				this.state = 911;
				this.typeParameters();
				}
			}

			this.state = 915;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.EXTENDS) {
				{
				this.state = 914;
				this.superclass();
				}
			}

			this.state = 918;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.IMPLEMENTS) {
				{
				this.state = 917;
				this.superinterfaces();
				}
			}

			this.state = 920;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public classModifier(): ClassModifierContext {
		let _localctx: ClassModifierContext = new ClassModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, Java9Parser.RULE_classModifier);
		try {
			this.state = 930;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 922;
				this.annotation();
				}
				break;
			case Java9Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 923;
				this.match(Java9Parser.PUBLIC);
				}
				break;
			case Java9Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 924;
				this.match(Java9Parser.PROTECTED);
				}
				break;
			case Java9Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 925;
				this.match(Java9Parser.PRIVATE);
				}
				break;
			case Java9Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 926;
				this.match(Java9Parser.ABSTRACT);
				}
				break;
			case Java9Parser.STATIC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 927;
				this.match(Java9Parser.STATIC);
				}
				break;
			case Java9Parser.FINAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 928;
				this.match(Java9Parser.FINAL);
				}
				break;
			case Java9Parser.STRICTFP:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 929;
				this.match(Java9Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, Java9Parser.RULE_typeParameters);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 932;
			this.match(Java9Parser.LT);
			this.state = 933;
			this.typeParameterList();
			this.state = 934;
			this.match(Java9Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public typeParameterList(): TypeParameterListContext {
		let _localctx: TypeParameterListContext = new TypeParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, Java9Parser.RULE_typeParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 936;
			this.typeParameter();
			this.state = 941;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.COMMA) {
				{
				{
				this.state = 937;
				this.match(Java9Parser.COMMA);
				this.state = 938;
				this.typeParameter();
				}
				}
				this.state = 943;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public superclass(): SuperclassContext {
		let _localctx: SuperclassContext = new SuperclassContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, Java9Parser.RULE_superclass);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 944;
			this.match(Java9Parser.EXTENDS);
			this.state = 945;
			this.classType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public superinterfaces(): SuperinterfacesContext {
		let _localctx: SuperinterfacesContext = new SuperinterfacesContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, Java9Parser.RULE_superinterfaces);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 947;
			this.match(Java9Parser.IMPLEMENTS);
			this.state = 948;
			this.interfaceTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public interfaceTypeList(): InterfaceTypeListContext {
		let _localctx: InterfaceTypeListContext = new InterfaceTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, Java9Parser.RULE_interfaceTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 950;
			this.interfaceType();
			this.state = 955;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.COMMA) {
				{
				{
				this.state = 951;
				this.match(Java9Parser.COMMA);
				this.state = 952;
				this.interfaceType();
				}
				}
				this.state = 957;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, Java9Parser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 958;
			this.match(Java9Parser.LBRACE);
			this.state = 962;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.ABSTRACT) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.CLASS) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.ENUM) | (1 << Java9Parser.FINAL) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.INTERFACE - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NATIVE - 37)) | (1 << (Java9Parser.PRIVATE - 37)) | (1 << (Java9Parser.PROTECTED - 37)) | (1 << (Java9Parser.PUBLIC - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.STATIC - 37)) | (1 << (Java9Parser.STRICTFP - 37)) | (1 << (Java9Parser.SYNCHRONIZED - 37)) | (1 << (Java9Parser.TRANSIENT - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.VOLATILE - 37)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (Java9Parser.LBRACE - 70)) | (1 << (Java9Parser.SEMI - 70)) | (1 << (Java9Parser.AT - 70)) | (1 << (Java9Parser.LT - 70)))) !== 0) || _la === Java9Parser.Identifier) {
				{
				{
				this.state = 959;
				this.classBodyDeclaration();
				}
				}
				this.state = 964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 965;
			this.match(Java9Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		let _localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, Java9Parser.RULE_classBodyDeclaration);
		try {
			this.state = 971;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 967;
				this.classMemberDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 968;
				this.instanceInitializer();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 969;
				this.staticInitializer();
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 970;
				this.constructorDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public classMemberDeclaration(): ClassMemberDeclarationContext {
		let _localctx: ClassMemberDeclarationContext = new ClassMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, Java9Parser.RULE_classMemberDeclaration);
		try {
			this.state = 978;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 973;
				this.fieldDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 974;
				this.methodDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 975;
				this.classDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 976;
				this.interfaceDeclaration();
				}
				break;
			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 977;
				this.match(Java9Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, Java9Parser.RULE_fieldDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 983;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (Java9Parser.FINAL - 28)) | (1 << (Java9Parser.PRIVATE - 28)) | (1 << (Java9Parser.PROTECTED - 28)) | (1 << (Java9Parser.PUBLIC - 28)) | (1 << (Java9Parser.STATIC - 28)) | (1 << (Java9Parser.TRANSIENT - 28)) | (1 << (Java9Parser.VOLATILE - 28)))) !== 0) || _la === Java9Parser.AT) {
				{
				{
				this.state = 980;
				this.fieldModifier();
				}
				}
				this.state = 985;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 986;
			this.unannType();
			this.state = 987;
			this.variableDeclaratorList();
			this.state = 988;
			this.match(Java9Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public fieldModifier(): FieldModifierContext {
		let _localctx: FieldModifierContext = new FieldModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, Java9Parser.RULE_fieldModifier);
		try {
			this.state = 998;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 990;
				this.annotation();
				}
				break;
			case Java9Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 991;
				this.match(Java9Parser.PUBLIC);
				}
				break;
			case Java9Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 992;
				this.match(Java9Parser.PROTECTED);
				}
				break;
			case Java9Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 993;
				this.match(Java9Parser.PRIVATE);
				}
				break;
			case Java9Parser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 994;
				this.match(Java9Parser.STATIC);
				}
				break;
			case Java9Parser.FINAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 995;
				this.match(Java9Parser.FINAL);
				}
				break;
			case Java9Parser.TRANSIENT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 996;
				this.match(Java9Parser.TRANSIENT);
				}
				break;
			case Java9Parser.VOLATILE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 997;
				this.match(Java9Parser.VOLATILE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public variableDeclaratorList(): VariableDeclaratorListContext {
		let _localctx: VariableDeclaratorListContext = new VariableDeclaratorListContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, Java9Parser.RULE_variableDeclaratorList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1000;
			this.variableDeclarator();
			this.state = 1005;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.COMMA) {
				{
				{
				this.state = 1001;
				this.match(Java9Parser.COMMA);
				this.state = 1002;
				this.variableDeclarator();
				}
				}
				this.state = 1007;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, Java9Parser.RULE_variableDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1008;
			this.variableDeclaratorId();
			this.state = 1011;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.ASSIGN) {
				{
				this.state = 1009;
				this.match(Java9Parser.ASSIGN);
				this.state = 1010;
				this.variableInitializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		let _localctx: VariableDeclaratorIdContext = new VariableDeclaratorIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, Java9Parser.RULE_variableDeclaratorId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1013;
			this.identifier();
			this.state = 1015;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.LBRACK || _la === Java9Parser.AT) {
				{
				this.state = 1014;
				this.dims();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public variableInitializer(): VariableInitializerContext {
		let _localctx: VariableInitializerContext = new VariableInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, Java9Parser.RULE_variableInitializer);
		try {
			this.state = 1019;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.T__0:
			case Java9Parser.T__1:
			case Java9Parser.T__2:
			case Java9Parser.T__3:
			case Java9Parser.T__4:
			case Java9Parser.T__5:
			case Java9Parser.T__6:
			case Java9Parser.T__7:
			case Java9Parser.T__8:
			case Java9Parser.BOOLEAN:
			case Java9Parser.BYTE:
			case Java9Parser.CHAR:
			case Java9Parser.DOUBLE:
			case Java9Parser.FLOAT:
			case Java9Parser.INT:
			case Java9Parser.LONG:
			case Java9Parser.NEW:
			case Java9Parser.SHORT:
			case Java9Parser.SUPER:
			case Java9Parser.THIS:
			case Java9Parser.VOID:
			case Java9Parser.IntegerLiteral:
			case Java9Parser.FloatingPointLiteral:
			case Java9Parser.BooleanLiteral:
			case Java9Parser.CharacterLiteral:
			case Java9Parser.StringLiteral:
			case Java9Parser.NullLiteral:
			case Java9Parser.LPAREN:
			case Java9Parser.AT:
			case Java9Parser.BANG:
			case Java9Parser.TILDE:
			case Java9Parser.INC:
			case Java9Parser.DEC:
			case Java9Parser.ADD:
			case Java9Parser.SUB:
			case Java9Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1017;
				this.expression();
				}
				break;
			case Java9Parser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1018;
				this.arrayInitializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public unannType(): UnannTypeContext {
		let _localctx: UnannTypeContext = new UnannTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, Java9Parser.RULE_unannType);
		try {
			this.state = 1023;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1021;
				this.unannPrimitiveType();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1022;
				this.unannReferenceType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public unannPrimitiveType(): UnannPrimitiveTypeContext {
		let _localctx: UnannPrimitiveTypeContext = new UnannPrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, Java9Parser.RULE_unannPrimitiveType);
		try {
			this.state = 1027;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.BYTE:
			case Java9Parser.CHAR:
			case Java9Parser.DOUBLE:
			case Java9Parser.FLOAT:
			case Java9Parser.INT:
			case Java9Parser.LONG:
			case Java9Parser.SHORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1025;
				this.numericType();
				}
				break;
			case Java9Parser.BOOLEAN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1026;
				this.match(Java9Parser.BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public unannReferenceType(): UnannReferenceTypeContext {
		let _localctx: UnannReferenceTypeContext = new UnannReferenceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, Java9Parser.RULE_unannReferenceType);
		try {
			this.state = 1032;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1029;
				this.unannClassOrInterfaceType();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1030;
				this.unannTypeVariable();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1031;
				this.unannArrayType();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext {
		let _localctx: UnannClassOrInterfaceTypeContext = new UnannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, Java9Parser.RULE_unannClassOrInterfaceType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1036;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
			case 1:
				{
				this.state = 1034;
				this.unannClassType_lfno_unannClassOrInterfaceType();
				}
				break;
			case 2:
				{
				this.state = 1035;
				this.unannInterfaceType_lfno_unannClassOrInterfaceType();
				}
				break;
			}
			this.state = 1042;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 1040;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
					case 1:
						{
						this.state = 1038;
						this.unannClassType_lf_unannClassOrInterfaceType();
						}
						break;
					case 2:
						{
						this.state = 1039;
						this.unannInterfaceType_lf_unannClassOrInterfaceType();
						}
						break;
					}
					}
				}
				this.state = 1044;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public unannClassType(): UnannClassTypeContext {
		let _localctx: UnannClassTypeContext = new UnannClassTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, Java9Parser.RULE_unannClassType);
		let _la: number;
		try {
			this.state = 1061;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1045;
				this.identifier();
				this.state = 1047;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 1046;
					this.typeArguments();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1049;
				this.unannClassOrInterfaceType();
				this.state = 1050;
				this.match(Java9Parser.DOT);
				this.state = 1054;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.AT) {
					{
					{
					this.state = 1051;
					this.annotation();
					}
					}
					this.state = 1056;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1057;
				this.identifier();
				this.state = 1059;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 1058;
					this.typeArguments();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public unannClassType_lf_unannClassOrInterfaceType(): UnannClassType_lf_unannClassOrInterfaceTypeContext {
		let _localctx: UnannClassType_lf_unannClassOrInterfaceTypeContext = new UnannClassType_lf_unannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, Java9Parser.RULE_unannClassType_lf_unannClassOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1063;
			this.match(Java9Parser.DOT);
			this.state = 1067;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.AT) {
				{
				{
				this.state = 1064;
				this.annotation();
				}
				}
				this.state = 1069;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1070;
			this.identifier();
			this.state = 1072;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.LT) {
				{
				this.state = 1071;
				this.typeArguments();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public unannClassType_lfno_unannClassOrInterfaceType(): UnannClassType_lfno_unannClassOrInterfaceTypeContext {
		let _localctx: UnannClassType_lfno_unannClassOrInterfaceTypeContext = new UnannClassType_lfno_unannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, Java9Parser.RULE_unannClassType_lfno_unannClassOrInterfaceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1074;
			this.identifier();
			this.state = 1076;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.LT) {
				{
				this.state = 1075;
				this.typeArguments();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public unannInterfaceType(): UnannInterfaceTypeContext {
		let _localctx: UnannInterfaceTypeContext = new UnannInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, Java9Parser.RULE_unannInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1078;
			this.unannClassType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public unannInterfaceType_lf_unannClassOrInterfaceType(): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext {
		let _localctx: UnannInterfaceType_lf_unannClassOrInterfaceTypeContext = new UnannInterfaceType_lf_unannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, Java9Parser.RULE_unannInterfaceType_lf_unannClassOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1080;
			this.unannClassType_lf_unannClassOrInterfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public unannInterfaceType_lfno_unannClassOrInterfaceType(): UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext {
		let _localctx: UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext = new UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, Java9Parser.RULE_unannInterfaceType_lfno_unannClassOrInterfaceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1082;
			this.unannClassType_lfno_unannClassOrInterfaceType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public unannTypeVariable(): UnannTypeVariableContext {
		let _localctx: UnannTypeVariableContext = new UnannTypeVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, Java9Parser.RULE_unannTypeVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1084;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public unannArrayType(): UnannArrayTypeContext {
		let _localctx: UnannArrayTypeContext = new UnannArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, Java9Parser.RULE_unannArrayType);
		try {
			this.state = 1095;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1086;
				this.unannPrimitiveType();
				this.state = 1087;
				this.dims();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1089;
				this.unannClassOrInterfaceType();
				this.state = 1090;
				this.dims();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1092;
				this.unannTypeVariable();
				this.state = 1093;
				this.dims();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public methodDeclaration(): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, Java9Parser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.ABSTRACT || _la === Java9Parser.FINAL || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (Java9Parser.NATIVE - 40)) | (1 << (Java9Parser.PRIVATE - 40)) | (1 << (Java9Parser.PROTECTED - 40)) | (1 << (Java9Parser.PUBLIC - 40)) | (1 << (Java9Parser.STATIC - 40)) | (1 << (Java9Parser.STRICTFP - 40)) | (1 << (Java9Parser.SYNCHRONIZED - 40)))) !== 0) || _la === Java9Parser.AT) {
				{
				{
				this.state = 1097;
				this.methodModifier();
				}
				}
				this.state = 1102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1103;
			this.methodHeader();
			this.state = 1104;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public methodModifier(): MethodModifierContext {
		let _localctx: MethodModifierContext = new MethodModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, Java9Parser.RULE_methodModifier);
		try {
			this.state = 1116;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1106;
				this.annotation();
				}
				break;
			case Java9Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1107;
				this.match(Java9Parser.PUBLIC);
				}
				break;
			case Java9Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1108;
				this.match(Java9Parser.PROTECTED);
				}
				break;
			case Java9Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1109;
				this.match(Java9Parser.PRIVATE);
				}
				break;
			case Java9Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1110;
				this.match(Java9Parser.ABSTRACT);
				}
				break;
			case Java9Parser.STATIC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1111;
				this.match(Java9Parser.STATIC);
				}
				break;
			case Java9Parser.FINAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1112;
				this.match(Java9Parser.FINAL);
				}
				break;
			case Java9Parser.SYNCHRONIZED:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1113;
				this.match(Java9Parser.SYNCHRONIZED);
				}
				break;
			case Java9Parser.NATIVE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1114;
				this.match(Java9Parser.NATIVE);
				}
				break;
			case Java9Parser.STRICTFP:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1115;
				this.match(Java9Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public methodHeader(): MethodHeaderContext {
		let _localctx: MethodHeaderContext = new MethodHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, Java9Parser.RULE_methodHeader);
		let _la: number;
		try {
			this.state = 1135;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.T__0:
			case Java9Parser.T__1:
			case Java9Parser.T__2:
			case Java9Parser.T__3:
			case Java9Parser.T__4:
			case Java9Parser.T__5:
			case Java9Parser.T__6:
			case Java9Parser.T__7:
			case Java9Parser.T__8:
			case Java9Parser.BOOLEAN:
			case Java9Parser.BYTE:
			case Java9Parser.CHAR:
			case Java9Parser.DOUBLE:
			case Java9Parser.FLOAT:
			case Java9Parser.INT:
			case Java9Parser.LONG:
			case Java9Parser.SHORT:
			case Java9Parser.VOID:
			case Java9Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1118;
				this.result();
				this.state = 1119;
				this.methodDeclarator();
				this.state = 1121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.THROWS) {
					{
					this.state = 1120;
					this.throws_();
					}
				}

				}
				break;
			case Java9Parser.LT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1123;
				this.typeParameters();
				this.state = 1127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.AT) {
					{
					{
					this.state = 1124;
					this.annotation();
					}
					}
					this.state = 1129;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1130;
				this.result();
				this.state = 1131;
				this.methodDeclarator();
				this.state = 1133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.THROWS) {
					{
					this.state = 1132;
					this.throws_();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public result(): ResultContext {
		let _localctx: ResultContext = new ResultContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, Java9Parser.RULE_result);
		try {
			this.state = 1139;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.T__0:
			case Java9Parser.T__1:
			case Java9Parser.T__2:
			case Java9Parser.T__3:
			case Java9Parser.T__4:
			case Java9Parser.T__5:
			case Java9Parser.T__6:
			case Java9Parser.T__7:
			case Java9Parser.T__8:
			case Java9Parser.BOOLEAN:
			case Java9Parser.BYTE:
			case Java9Parser.CHAR:
			case Java9Parser.DOUBLE:
			case Java9Parser.FLOAT:
			case Java9Parser.INT:
			case Java9Parser.LONG:
			case Java9Parser.SHORT:
			case Java9Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1137;
				this.unannType();
				}
				break;
			case Java9Parser.VOID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1138;
				this.match(Java9Parser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public methodDeclarator(): MethodDeclaratorContext {
		let _localctx: MethodDeclaratorContext = new MethodDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, Java9Parser.RULE_methodDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1141;
			this.identifier();
			this.state = 1142;
			this.match(Java9Parser.LPAREN);
			this.state = 1144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FINAL) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.SHORT - 37)))) !== 0) || _la === Java9Parser.AT || _la === Java9Parser.Identifier) {
				{
				this.state = 1143;
				this.formalParameterList();
				}
			}

			this.state = 1146;
			this.match(Java9Parser.RPAREN);
			this.state = 1148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.LBRACK || _la === Java9Parser.AT) {
				{
				this.state = 1147;
				this.dims();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, Java9Parser.RULE_formalParameterList);
		try {
			this.state = 1156;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1150;
				this.formalParameters();
				this.state = 1151;
				this.match(Java9Parser.COMMA);
				this.state = 1152;
				this.lastFormalParameter();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1154;
				this.lastFormalParameter();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1155;
				this.receiverParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, Java9Parser.RULE_formalParameters);
		try {
			let _alt: number;
			this.state = 1174;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1158;
				this.formalParameter();
				this.state = 1163;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1159;
						this.match(Java9Parser.COMMA);
						this.state = 1160;
						this.formalParameter();
						}
						}
					}
					this.state = 1165;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 96, this._ctx);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1166;
				this.receiverParameter();
				this.state = 1171;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1167;
						this.match(Java9Parser.COMMA);
						this.state = 1168;
						this.formalParameter();
						}
						}
					}
					this.state = 1173;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, Java9Parser.RULE_formalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.FINAL || _la === Java9Parser.AT) {
				{
				{
				this.state = 1176;
				this.variableModifier();
				}
				}
				this.state = 1181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1182;
			this.unannType();
			this.state = 1183;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public variableModifier(): VariableModifierContext {
		let _localctx: VariableModifierContext = new VariableModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, Java9Parser.RULE_variableModifier);
		try {
			this.state = 1187;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1185;
				this.annotation();
				}
				break;
			case Java9Parser.FINAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1186;
				this.match(Java9Parser.FINAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public lastFormalParameter(): LastFormalParameterContext {
		let _localctx: LastFormalParameterContext = new LastFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, Java9Parser.RULE_lastFormalParameter);
		let _la: number;
		try {
			this.state = 1206;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.FINAL || _la === Java9Parser.AT) {
					{
					{
					this.state = 1189;
					this.variableModifier();
					}
					}
					this.state = 1194;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1195;
				this.unannType();
				this.state = 1199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.AT) {
					{
					{
					this.state = 1196;
					this.annotation();
					}
					}
					this.state = 1201;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1202;
				this.match(Java9Parser.ELLIPSIS);
				this.state = 1203;
				this.variableDeclaratorId();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1205;
				this.formalParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public receiverParameter(): ReceiverParameterContext {
		let _localctx: ReceiverParameterContext = new ReceiverParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, Java9Parser.RULE_receiverParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.AT) {
				{
				{
				this.state = 1208;
				this.annotation();
				}
				}
				this.state = 1213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1214;
			this.unannType();
			this.state = 1218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8))) !== 0) || _la === Java9Parser.Identifier) {
				{
				this.state = 1215;
				this.identifier();
				this.state = 1216;
				this.match(Java9Parser.DOT);
				}
			}

			this.state = 1220;
			this.match(Java9Parser.THIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public throws_(): Throws_Context {
		let _localctx: Throws_Context = new Throws_Context(this._ctx, this.state);
		this.enterRule(_localctx, 172, Java9Parser.RULE_throws_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1222;
			this.match(Java9Parser.THROWS);
			this.state = 1223;
			this.exceptionTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public exceptionTypeList(): ExceptionTypeListContext {
		let _localctx: ExceptionTypeListContext = new ExceptionTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, Java9Parser.RULE_exceptionTypeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1225;
			this.exceptionType();
			this.state = 1230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.COMMA) {
				{
				{
				this.state = 1226;
				this.match(Java9Parser.COMMA);
				this.state = 1227;
				this.exceptionType();
				}
				}
				this.state = 1232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public exceptionType(): ExceptionTypeContext {
		let _localctx: ExceptionTypeContext = new ExceptionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, Java9Parser.RULE_exceptionType);
		try {
			this.state = 1235;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1233;
				this.classType();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1234;
				this.typeVariable();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public methodBody(): MethodBodyContext {
		let _localctx: MethodBodyContext = new MethodBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, Java9Parser.RULE_methodBody);
		try {
			this.state = 1239;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1237;
				this.block();
				}
				break;
			case Java9Parser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1238;
				this.match(Java9Parser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public instanceInitializer(): InstanceInitializerContext {
		let _localctx: InstanceInitializerContext = new InstanceInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, Java9Parser.RULE_instanceInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1241;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public staticInitializer(): StaticInitializerContext {
		let _localctx: StaticInitializerContext = new StaticInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, Java9Parser.RULE_staticInitializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1243;
			this.match(Java9Parser.STATIC);
			this.state = 1244;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public constructorDeclaration(): ConstructorDeclarationContext {
		let _localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, Java9Parser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (Java9Parser.PRIVATE - 43)) | (1 << (Java9Parser.PROTECTED - 43)) | (1 << (Java9Parser.PUBLIC - 43)))) !== 0) || _la === Java9Parser.AT) {
				{
				{
				this.state = 1246;
				this.constructorModifier();
				}
				}
				this.state = 1251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1252;
			this.constructorDeclarator();
			this.state = 1254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.THROWS) {
				{
				this.state = 1253;
				this.throws_();
				}
			}

			this.state = 1256;
			this.constructorBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public constructorModifier(): ConstructorModifierContext {
		let _localctx: ConstructorModifierContext = new ConstructorModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, Java9Parser.RULE_constructorModifier);
		try {
			this.state = 1262;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1258;
				this.annotation();
				}
				break;
			case Java9Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1259;
				this.match(Java9Parser.PUBLIC);
				}
				break;
			case Java9Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1260;
				this.match(Java9Parser.PROTECTED);
				}
				break;
			case Java9Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1261;
				this.match(Java9Parser.PRIVATE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public constructorDeclarator(): ConstructorDeclaratorContext {
		let _localctx: ConstructorDeclaratorContext = new ConstructorDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, Java9Parser.RULE_constructorDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.LT) {
				{
				this.state = 1264;
				this.typeParameters();
				}
			}

			this.state = 1267;
			this.simpleTypeName();
			this.state = 1268;
			this.match(Java9Parser.LPAREN);
			this.state = 1270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FINAL) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.SHORT - 37)))) !== 0) || _la === Java9Parser.AT || _la === Java9Parser.Identifier) {
				{
				this.state = 1269;
				this.formalParameterList();
				}
			}

			this.state = 1272;
			this.match(Java9Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public simpleTypeName(): SimpleTypeNameContext {
		let _localctx: SimpleTypeNameContext = new SimpleTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, Java9Parser.RULE_simpleTypeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1274;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public constructorBody(): ConstructorBodyContext {
		let _localctx: ConstructorBodyContext = new ConstructorBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, Java9Parser.RULE_constructorBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1276;
			this.match(Java9Parser.LBRACE);
			this.state = 1278;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				this.state = 1277;
				this.explicitConstructorInvocation();
				}
				break;
			}
			this.state = 1281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.ABSTRACT) | (1 << Java9Parser.ASSERT) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BREAK) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.CLASS) | (1 << Java9Parser.CONTINUE) | (1 << Java9Parser.DO) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.ENUM) | (1 << Java9Parser.FINAL) | (1 << Java9Parser.FLOAT) | (1 << Java9Parser.FOR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Java9Parser.IF - 32)) | (1 << (Java9Parser.INT - 32)) | (1 << (Java9Parser.LONG - 32)) | (1 << (Java9Parser.NEW - 32)) | (1 << (Java9Parser.PRIVATE - 32)) | (1 << (Java9Parser.PROTECTED - 32)) | (1 << (Java9Parser.PUBLIC - 32)) | (1 << (Java9Parser.RETURN - 32)) | (1 << (Java9Parser.SHORT - 32)) | (1 << (Java9Parser.STATIC - 32)) | (1 << (Java9Parser.STRICTFP - 32)) | (1 << (Java9Parser.SUPER - 32)) | (1 << (Java9Parser.SWITCH - 32)) | (1 << (Java9Parser.SYNCHRONIZED - 32)) | (1 << (Java9Parser.THIS - 32)) | (1 << (Java9Parser.THROW - 32)) | (1 << (Java9Parser.TRY - 32)) | (1 << (Java9Parser.VOID - 32)) | (1 << (Java9Parser.WHILE - 32)) | (1 << (Java9Parser.IntegerLiteral - 32)) | (1 << (Java9Parser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (Java9Parser.BooleanLiteral - 64)) | (1 << (Java9Parser.CharacterLiteral - 64)) | (1 << (Java9Parser.StringLiteral - 64)) | (1 << (Java9Parser.NullLiteral - 64)) | (1 << (Java9Parser.LPAREN - 64)) | (1 << (Java9Parser.LBRACE - 64)) | (1 << (Java9Parser.SEMI - 64)) | (1 << (Java9Parser.AT - 64)) | (1 << (Java9Parser.INC - 64)) | (1 << (Java9Parser.DEC - 64)))) !== 0) || _la === Java9Parser.Identifier) {
				{
				this.state = 1280;
				this.blockStatements();
				}
			}

			this.state = 1283;
			this.match(Java9Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public explicitConstructorInvocation(): ExplicitConstructorInvocationContext {
		let _localctx: ExplicitConstructorInvocationContext = new ExplicitConstructorInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, Java9Parser.RULE_explicitConstructorInvocation);
		let _la: number;
		try {
			this.state = 1331;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 1285;
					this.typeArguments();
					}
				}

				this.state = 1288;
				this.match(Java9Parser.THIS);
				this.state = 1289;
				this.match(Java9Parser.LPAREN);
				this.state = 1291;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 1290;
					this.argumentList();
					}
				}

				this.state = 1293;
				this.match(Java9Parser.RPAREN);
				this.state = 1294;
				this.match(Java9Parser.SEMI);
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 1295;
					this.typeArguments();
					}
				}

				this.state = 1298;
				this.match(Java9Parser.SUPER);
				this.state = 1299;
				this.match(Java9Parser.LPAREN);
				this.state = 1301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 1300;
					this.argumentList();
					}
				}

				this.state = 1303;
				this.match(Java9Parser.RPAREN);
				this.state = 1304;
				this.match(Java9Parser.SEMI);
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1305;
				this.expressionName();
				this.state = 1306;
				this.match(Java9Parser.DOT);
				this.state = 1308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 1307;
					this.typeArguments();
					}
				}

				this.state = 1310;
				this.match(Java9Parser.SUPER);
				this.state = 1311;
				this.match(Java9Parser.LPAREN);
				this.state = 1313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 1312;
					this.argumentList();
					}
				}

				this.state = 1315;
				this.match(Java9Parser.RPAREN);
				this.state = 1316;
				this.match(Java9Parser.SEMI);
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1318;
				this.primary();
				this.state = 1319;
				this.match(Java9Parser.DOT);
				this.state = 1321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 1320;
					this.typeArguments();
					}
				}

				this.state = 1323;
				this.match(Java9Parser.SUPER);
				this.state = 1324;
				this.match(Java9Parser.LPAREN);
				this.state = 1326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 1325;
					this.argumentList();
					}
				}

				this.state = 1328;
				this.match(Java9Parser.RPAREN);
				this.state = 1329;
				this.match(Java9Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, Java9Parser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.ABSTRACT || _la === Java9Parser.FINAL || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (Java9Parser.PRIVATE - 43)) | (1 << (Java9Parser.PROTECTED - 43)) | (1 << (Java9Parser.PUBLIC - 43)) | (1 << (Java9Parser.STATIC - 43)) | (1 << (Java9Parser.STRICTFP - 43)))) !== 0) || _la === Java9Parser.AT) {
				{
				{
				this.state = 1333;
				this.classModifier();
				}
				}
				this.state = 1338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1339;
			this.match(Java9Parser.ENUM);
			this.state = 1340;
			this.identifier();
			this.state = 1342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.IMPLEMENTS) {
				{
				this.state = 1341;
				this.superinterfaces();
				}
			}

			this.state = 1344;
			this.enumBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public enumBody(): EnumBodyContext {
		let _localctx: EnumBodyContext = new EnumBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, Java9Parser.RULE_enumBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1346;
			this.match(Java9Parser.LBRACE);
			this.state = 1348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8))) !== 0) || _la === Java9Parser.AT || _la === Java9Parser.Identifier) {
				{
				this.state = 1347;
				this.enumConstantList();
				}
			}

			this.state = 1351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.COMMA) {
				{
				this.state = 1350;
				this.match(Java9Parser.COMMA);
				}
			}

			this.state = 1354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.SEMI) {
				{
				this.state = 1353;
				this.enumBodyDeclarations();
				}
			}

			this.state = 1356;
			this.match(Java9Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public enumConstantList(): EnumConstantListContext {
		let _localctx: EnumConstantListContext = new EnumConstantListContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, Java9Parser.RULE_enumConstantList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1358;
			this.enumConstant();
			this.state = 1363;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1359;
					this.match(Java9Parser.COMMA);
					this.state = 1360;
					this.enumConstant();
					}
					}
				}
				this.state = 1365;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 130, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public enumConstant(): EnumConstantContext {
		let _localctx: EnumConstantContext = new EnumConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, Java9Parser.RULE_enumConstant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1369;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.AT) {
				{
				{
				this.state = 1366;
				this.enumConstantModifier();
				}
				}
				this.state = 1371;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1372;
			this.identifier();
			this.state = 1378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.LPAREN) {
				{
				this.state = 1373;
				this.match(Java9Parser.LPAREN);
				this.state = 1375;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 1374;
					this.argumentList();
					}
				}

				this.state = 1377;
				this.match(Java9Parser.RPAREN);
				}
			}

			this.state = 1381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.LBRACE) {
				{
				this.state = 1380;
				this.classBody();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public enumConstantModifier(): EnumConstantModifierContext {
		let _localctx: EnumConstantModifierContext = new EnumConstantModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, Java9Parser.RULE_enumConstantModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1383;
			this.annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public enumBodyDeclarations(): EnumBodyDeclarationsContext {
		let _localctx: EnumBodyDeclarationsContext = new EnumBodyDeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, Java9Parser.RULE_enumBodyDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1385;
			this.match(Java9Parser.SEMI);
			this.state = 1389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.ABSTRACT) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.CLASS) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.ENUM) | (1 << Java9Parser.FINAL) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.INTERFACE - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NATIVE - 37)) | (1 << (Java9Parser.PRIVATE - 37)) | (1 << (Java9Parser.PROTECTED - 37)) | (1 << (Java9Parser.PUBLIC - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.STATIC - 37)) | (1 << (Java9Parser.STRICTFP - 37)) | (1 << (Java9Parser.SYNCHRONIZED - 37)) | (1 << (Java9Parser.TRANSIENT - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.VOLATILE - 37)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (Java9Parser.LBRACE - 70)) | (1 << (Java9Parser.SEMI - 70)) | (1 << (Java9Parser.AT - 70)) | (1 << (Java9Parser.LT - 70)))) !== 0) || _la === Java9Parser.Identifier) {
				{
				{
				this.state = 1386;
				this.classBodyDeclaration();
				}
				}
				this.state = 1391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let _localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, Java9Parser.RULE_interfaceDeclaration);
		try {
			this.state = 1394;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1392;
				this.normalInterfaceDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1393;
				this.annotationTypeDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext {
		let _localctx: NormalInterfaceDeclarationContext = new NormalInterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, Java9Parser.RULE_normalInterfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.ABSTRACT || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (Java9Parser.PRIVATE - 43)) | (1 << (Java9Parser.PROTECTED - 43)) | (1 << (Java9Parser.PUBLIC - 43)) | (1 << (Java9Parser.STATIC - 43)) | (1 << (Java9Parser.STRICTFP - 43)))) !== 0) || _la === Java9Parser.AT) {
				{
				{
				this.state = 1396;
				this.interfaceModifier();
				}
				}
				this.state = 1401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1402;
			this.match(Java9Parser.INTERFACE);
			this.state = 1403;
			this.identifier();
			this.state = 1405;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.LT) {
				{
				this.state = 1404;
				this.typeParameters();
				}
			}

			this.state = 1408;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.EXTENDS) {
				{
				this.state = 1407;
				this.extendsInterfaces();
				}
			}

			this.state = 1410;
			this.interfaceBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public interfaceModifier(): InterfaceModifierContext {
		let _localctx: InterfaceModifierContext = new InterfaceModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, Java9Parser.RULE_interfaceModifier);
		try {
			this.state = 1419;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1412;
				this.annotation();
				}
				break;
			case Java9Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1413;
				this.match(Java9Parser.PUBLIC);
				}
				break;
			case Java9Parser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1414;
				this.match(Java9Parser.PROTECTED);
				}
				break;
			case Java9Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1415;
				this.match(Java9Parser.PRIVATE);
				}
				break;
			case Java9Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1416;
				this.match(Java9Parser.ABSTRACT);
				}
				break;
			case Java9Parser.STATIC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1417;
				this.match(Java9Parser.STATIC);
				}
				break;
			case Java9Parser.STRICTFP:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1418;
				this.match(Java9Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public extendsInterfaces(): ExtendsInterfacesContext {
		let _localctx: ExtendsInterfacesContext = new ExtendsInterfacesContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, Java9Parser.RULE_extendsInterfaces);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1421;
			this.match(Java9Parser.EXTENDS);
			this.state = 1422;
			this.interfaceTypeList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public interfaceBody(): InterfaceBodyContext {
		let _localctx: InterfaceBodyContext = new InterfaceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, Java9Parser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1424;
			this.match(Java9Parser.LBRACE);
			this.state = 1428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.ABSTRACT) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.CLASS) | (1 << Java9Parser.DEFAULT) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.ENUM) | (1 << Java9Parser.FINAL) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.INTERFACE - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.PRIVATE - 37)) | (1 << (Java9Parser.PROTECTED - 37)) | (1 << (Java9Parser.PUBLIC - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.STATIC - 37)) | (1 << (Java9Parser.STRICTFP - 37)) | (1 << (Java9Parser.VOID - 37)))) !== 0) || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (Java9Parser.SEMI - 74)) | (1 << (Java9Parser.AT - 74)) | (1 << (Java9Parser.LT - 74)))) !== 0) || _la === Java9Parser.Identifier) {
				{
				{
				this.state = 1425;
				this.interfaceMemberDeclaration();
				}
				}
				this.state = 1430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1431;
			this.match(Java9Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext {
		let _localctx: InterfaceMemberDeclarationContext = new InterfaceMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, Java9Parser.RULE_interfaceMemberDeclaration);
		try {
			this.state = 1438;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1433;
				this.constantDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1434;
				this.interfaceMethodDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1435;
				this.classDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1436;
				this.interfaceDeclaration();
				}
				break;
			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1437;
				this.match(Java9Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public constantDeclaration(): ConstantDeclarationContext {
		let _localctx: ConstantDeclarationContext = new ConstantDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, Java9Parser.RULE_constantDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (Java9Parser.FINAL - 28)) | (1 << (Java9Parser.PUBLIC - 28)) | (1 << (Java9Parser.STATIC - 28)))) !== 0) || _la === Java9Parser.AT) {
				{
				{
				this.state = 1440;
				this.constantModifier();
				}
				}
				this.state = 1445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1446;
			this.unannType();
			this.state = 1447;
			this.variableDeclaratorList();
			this.state = 1448;
			this.match(Java9Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public constantModifier(): ConstantModifierContext {
		let _localctx: ConstantModifierContext = new ConstantModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, Java9Parser.RULE_constantModifier);
		try {
			this.state = 1454;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1450;
				this.annotation();
				}
				break;
			case Java9Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1451;
				this.match(Java9Parser.PUBLIC);
				}
				break;
			case Java9Parser.STATIC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1452;
				this.match(Java9Parser.STATIC);
				}
				break;
			case Java9Parser.FINAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1453;
				this.match(Java9Parser.FINAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		let _localctx: InterfaceMethodDeclarationContext = new InterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, Java9Parser.RULE_interfaceMethodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.ABSTRACT || _la === Java9Parser.DEFAULT || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (Java9Parser.PRIVATE - 43)) | (1 << (Java9Parser.PUBLIC - 43)) | (1 << (Java9Parser.STATIC - 43)) | (1 << (Java9Parser.STRICTFP - 43)))) !== 0) || _la === Java9Parser.AT) {
				{
				{
				this.state = 1456;
				this.interfaceMethodModifier();
				}
				}
				this.state = 1461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1462;
			this.methodHeader();
			this.state = 1463;
			this.methodBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public interfaceMethodModifier(): InterfaceMethodModifierContext {
		let _localctx: InterfaceMethodModifierContext = new InterfaceMethodModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, Java9Parser.RULE_interfaceMethodModifier);
		try {
			this.state = 1472;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1465;
				this.annotation();
				}
				break;
			case Java9Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1466;
				this.match(Java9Parser.PUBLIC);
				}
				break;
			case Java9Parser.PRIVATE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1467;
				this.match(Java9Parser.PRIVATE);
				}
				break;
			case Java9Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1468;
				this.match(Java9Parser.ABSTRACT);
				}
				break;
			case Java9Parser.DEFAULT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1469;
				this.match(Java9Parser.DEFAULT);
				}
				break;
			case Java9Parser.STATIC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1470;
				this.match(Java9Parser.STATIC);
				}
				break;
			case Java9Parser.STRICTFP:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1471;
				this.match(Java9Parser.STRICTFP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		let _localctx: AnnotationTypeDeclarationContext = new AnnotationTypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, Java9Parser.RULE_annotationTypeDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1477;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1474;
					this.interfaceModifier();
					}
					}
				}
				this.state = 1479;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
			}
			this.state = 1480;
			this.match(Java9Parser.AT);
			this.state = 1481;
			this.match(Java9Parser.INTERFACE);
			this.state = 1482;
			this.identifier();
			this.state = 1483;
			this.annotationTypeBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public annotationTypeBody(): AnnotationTypeBodyContext {
		let _localctx: AnnotationTypeBodyContext = new AnnotationTypeBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, Java9Parser.RULE_annotationTypeBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1485;
			this.match(Java9Parser.LBRACE);
			this.state = 1489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.ABSTRACT) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.CLASS) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.ENUM) | (1 << Java9Parser.FINAL) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.INTERFACE - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.PRIVATE - 37)) | (1 << (Java9Parser.PROTECTED - 37)) | (1 << (Java9Parser.PUBLIC - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.STATIC - 37)) | (1 << (Java9Parser.STRICTFP - 37)))) !== 0) || _la === Java9Parser.SEMI || _la === Java9Parser.AT || _la === Java9Parser.Identifier) {
				{
				{
				this.state = 1486;
				this.annotationTypeMemberDeclaration();
				}
				}
				this.state = 1491;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1492;
			this.match(Java9Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public annotationTypeMemberDeclaration(): AnnotationTypeMemberDeclarationContext {
		let _localctx: AnnotationTypeMemberDeclarationContext = new AnnotationTypeMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, Java9Parser.RULE_annotationTypeMemberDeclaration);
		try {
			this.state = 1499;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1494;
				this.annotationTypeElementDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1495;
				this.constantDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1496;
				this.classDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1497;
				this.interfaceDeclaration();
				}
				break;
			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1498;
				this.match(Java9Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext {
		let _localctx: AnnotationTypeElementDeclarationContext = new AnnotationTypeElementDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, Java9Parser.RULE_annotationTypeElementDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.ABSTRACT || _la === Java9Parser.PUBLIC || _la === Java9Parser.AT) {
				{
				{
				this.state = 1501;
				this.annotationTypeElementModifier();
				}
				}
				this.state = 1506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1507;
			this.unannType();
			this.state = 1508;
			this.identifier();
			this.state = 1509;
			this.match(Java9Parser.LPAREN);
			this.state = 1510;
			this.match(Java9Parser.RPAREN);
			this.state = 1512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.LBRACK || _la === Java9Parser.AT) {
				{
				this.state = 1511;
				this.dims();
				}
			}

			this.state = 1515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.DEFAULT) {
				{
				this.state = 1514;
				this.defaultValue();
				}
			}

			this.state = 1517;
			this.match(Java9Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public annotationTypeElementModifier(): AnnotationTypeElementModifierContext {
		let _localctx: AnnotationTypeElementModifierContext = new AnnotationTypeElementModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, Java9Parser.RULE_annotationTypeElementModifier);
		try {
			this.state = 1522;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1519;
				this.annotation();
				}
				break;
			case Java9Parser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1520;
				this.match(Java9Parser.PUBLIC);
				}
				break;
			case Java9Parser.ABSTRACT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1521;
				this.match(Java9Parser.ABSTRACT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public defaultValue(): DefaultValueContext {
		let _localctx: DefaultValueContext = new DefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, Java9Parser.RULE_defaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1524;
			this.match(Java9Parser.DEFAULT);
			this.state = 1525;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, Java9Parser.RULE_annotation);
		try {
			this.state = 1530;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1527;
				this.normalAnnotation();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1528;
				this.markerAnnotation();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1529;
				this.singleElementAnnotation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public normalAnnotation(): NormalAnnotationContext {
		let _localctx: NormalAnnotationContext = new NormalAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, Java9Parser.RULE_normalAnnotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1532;
			this.match(Java9Parser.AT);
			this.state = 1533;
			this.typeName();
			this.state = 1534;
			this.match(Java9Parser.LPAREN);
			this.state = 1536;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8))) !== 0) || _la === Java9Parser.Identifier) {
				{
				this.state = 1535;
				this.elementValuePairList();
				}
			}

			this.state = 1538;
			this.match(Java9Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public elementValuePairList(): ElementValuePairListContext {
		let _localctx: ElementValuePairListContext = new ElementValuePairListContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, Java9Parser.RULE_elementValuePairList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1540;
			this.elementValuePair();
			this.state = 1545;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.COMMA) {
				{
				{
				this.state = 1541;
				this.match(Java9Parser.COMMA);
				this.state = 1542;
				this.elementValuePair();
				}
				}
				this.state = 1547;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public elementValuePair(): ElementValuePairContext {
		let _localctx: ElementValuePairContext = new ElementValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, Java9Parser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1548;
			this.identifier();
			this.state = 1549;
			this.match(Java9Parser.ASSIGN);
			this.state = 1550;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public elementValue(): ElementValueContext {
		let _localctx: ElementValueContext = new ElementValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, Java9Parser.RULE_elementValue);
		try {
			this.state = 1555;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 157, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1552;
				this.conditionalExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1553;
				this.elementValueArrayInitializer();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1554;
				this.annotation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		let _localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, Java9Parser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1557;
			this.match(Java9Parser.LBRACE);
			this.state = 1559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (Java9Parser.LBRACE - 70)) | (1 << (Java9Parser.AT - 70)) | (1 << (Java9Parser.BANG - 70)) | (1 << (Java9Parser.TILDE - 70)) | (1 << (Java9Parser.INC - 70)) | (1 << (Java9Parser.DEC - 70)) | (1 << (Java9Parser.ADD - 70)) | (1 << (Java9Parser.SUB - 70)))) !== 0) || _la === Java9Parser.Identifier) {
				{
				this.state = 1558;
				this.elementValueList();
				}
			}

			this.state = 1562;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.COMMA) {
				{
				this.state = 1561;
				this.match(Java9Parser.COMMA);
				}
			}

			this.state = 1564;
			this.match(Java9Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public elementValueList(): ElementValueListContext {
		let _localctx: ElementValueListContext = new ElementValueListContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, Java9Parser.RULE_elementValueList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1566;
			this.elementValue();
			this.state = 1571;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1567;
					this.match(Java9Parser.COMMA);
					this.state = 1568;
					this.elementValue();
					}
					}
				}
				this.state = 1573;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public markerAnnotation(): MarkerAnnotationContext {
		let _localctx: MarkerAnnotationContext = new MarkerAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, Java9Parser.RULE_markerAnnotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1574;
			this.match(Java9Parser.AT);
			this.state = 1575;
			this.typeName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public singleElementAnnotation(): SingleElementAnnotationContext {
		let _localctx: SingleElementAnnotationContext = new SingleElementAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, Java9Parser.RULE_singleElementAnnotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1577;
			this.match(Java9Parser.AT);
			this.state = 1578;
			this.typeName();
			this.state = 1579;
			this.match(Java9Parser.LPAREN);
			this.state = 1580;
			this.elementValue();
			this.state = 1581;
			this.match(Java9Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, Java9Parser.RULE_arrayInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1583;
			this.match(Java9Parser.LBRACE);
			this.state = 1585;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (Java9Parser.LBRACE - 70)) | (1 << (Java9Parser.AT - 70)) | (1 << (Java9Parser.BANG - 70)) | (1 << (Java9Parser.TILDE - 70)) | (1 << (Java9Parser.INC - 70)) | (1 << (Java9Parser.DEC - 70)) | (1 << (Java9Parser.ADD - 70)) | (1 << (Java9Parser.SUB - 70)))) !== 0) || _la === Java9Parser.Identifier) {
				{
				this.state = 1584;
				this.variableInitializerList();
				}
			}

			this.state = 1588;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.COMMA) {
				{
				this.state = 1587;
				this.match(Java9Parser.COMMA);
				}
			}

			this.state = 1590;
			this.match(Java9Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public variableInitializerList(): VariableInitializerListContext {
		let _localctx: VariableInitializerListContext = new VariableInitializerListContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, Java9Parser.RULE_variableInitializerList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1592;
			this.variableInitializer();
			this.state = 1597;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1593;
					this.match(Java9Parser.COMMA);
					this.state = 1594;
					this.variableInitializer();
					}
					}
				}
				this.state = 1599;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, Java9Parser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1600;
			this.match(Java9Parser.LBRACE);
			this.state = 1602;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.ABSTRACT) | (1 << Java9Parser.ASSERT) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BREAK) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.CLASS) | (1 << Java9Parser.CONTINUE) | (1 << Java9Parser.DO) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.ENUM) | (1 << Java9Parser.FINAL) | (1 << Java9Parser.FLOAT) | (1 << Java9Parser.FOR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Java9Parser.IF - 32)) | (1 << (Java9Parser.INT - 32)) | (1 << (Java9Parser.LONG - 32)) | (1 << (Java9Parser.NEW - 32)) | (1 << (Java9Parser.PRIVATE - 32)) | (1 << (Java9Parser.PROTECTED - 32)) | (1 << (Java9Parser.PUBLIC - 32)) | (1 << (Java9Parser.RETURN - 32)) | (1 << (Java9Parser.SHORT - 32)) | (1 << (Java9Parser.STATIC - 32)) | (1 << (Java9Parser.STRICTFP - 32)) | (1 << (Java9Parser.SUPER - 32)) | (1 << (Java9Parser.SWITCH - 32)) | (1 << (Java9Parser.SYNCHRONIZED - 32)) | (1 << (Java9Parser.THIS - 32)) | (1 << (Java9Parser.THROW - 32)) | (1 << (Java9Parser.TRY - 32)) | (1 << (Java9Parser.VOID - 32)) | (1 << (Java9Parser.WHILE - 32)) | (1 << (Java9Parser.IntegerLiteral - 32)) | (1 << (Java9Parser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (Java9Parser.BooleanLiteral - 64)) | (1 << (Java9Parser.CharacterLiteral - 64)) | (1 << (Java9Parser.StringLiteral - 64)) | (1 << (Java9Parser.NullLiteral - 64)) | (1 << (Java9Parser.LPAREN - 64)) | (1 << (Java9Parser.LBRACE - 64)) | (1 << (Java9Parser.SEMI - 64)) | (1 << (Java9Parser.AT - 64)) | (1 << (Java9Parser.INC - 64)) | (1 << (Java9Parser.DEC - 64)))) !== 0) || _la === Java9Parser.Identifier) {
				{
				this.state = 1601;
				this.blockStatements();
				}
			}

			this.state = 1604;
			this.match(Java9Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public blockStatements(): BlockStatementsContext {
		let _localctx: BlockStatementsContext = new BlockStatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, Java9Parser.RULE_blockStatements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1606;
				this.blockStatement();
				}
				}
				this.state = 1609;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.ABSTRACT) | (1 << Java9Parser.ASSERT) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BREAK) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.CLASS) | (1 << Java9Parser.CONTINUE) | (1 << Java9Parser.DO) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.ENUM) | (1 << Java9Parser.FINAL) | (1 << Java9Parser.FLOAT) | (1 << Java9Parser.FOR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (Java9Parser.IF - 32)) | (1 << (Java9Parser.INT - 32)) | (1 << (Java9Parser.LONG - 32)) | (1 << (Java9Parser.NEW - 32)) | (1 << (Java9Parser.PRIVATE - 32)) | (1 << (Java9Parser.PROTECTED - 32)) | (1 << (Java9Parser.PUBLIC - 32)) | (1 << (Java9Parser.RETURN - 32)) | (1 << (Java9Parser.SHORT - 32)) | (1 << (Java9Parser.STATIC - 32)) | (1 << (Java9Parser.STRICTFP - 32)) | (1 << (Java9Parser.SUPER - 32)) | (1 << (Java9Parser.SWITCH - 32)) | (1 << (Java9Parser.SYNCHRONIZED - 32)) | (1 << (Java9Parser.THIS - 32)) | (1 << (Java9Parser.THROW - 32)) | (1 << (Java9Parser.TRY - 32)) | (1 << (Java9Parser.VOID - 32)) | (1 << (Java9Parser.WHILE - 32)) | (1 << (Java9Parser.IntegerLiteral - 32)) | (1 << (Java9Parser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (Java9Parser.BooleanLiteral - 64)) | (1 << (Java9Parser.CharacterLiteral - 64)) | (1 << (Java9Parser.StringLiteral - 64)) | (1 << (Java9Parser.NullLiteral - 64)) | (1 << (Java9Parser.LPAREN - 64)) | (1 << (Java9Parser.LBRACE - 64)) | (1 << (Java9Parser.SEMI - 64)) | (1 << (Java9Parser.AT - 64)) | (1 << (Java9Parser.INC - 64)) | (1 << (Java9Parser.DEC - 64)))) !== 0) || _la === Java9Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, Java9Parser.RULE_blockStatement);
		try {
			this.state = 1614;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1611;
				this.localVariableDeclarationStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1612;
				this.classDeclaration();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1613;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext {
		let _localctx: LocalVariableDeclarationStatementContext = new LocalVariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, Java9Parser.RULE_localVariableDeclarationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1616;
			this.localVariableDeclaration();
			this.state = 1617;
			this.match(Java9Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, Java9Parser.RULE_localVariableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1622;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.FINAL || _la === Java9Parser.AT) {
				{
				{
				this.state = 1619;
				this.variableModifier();
				}
				}
				this.state = 1624;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1625;
			this.unannType();
			this.state = 1626;
			this.variableDeclaratorList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, Java9Parser.RULE_statement);
		try {
			this.state = 1634;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 168, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1628;
				this.statementWithoutTrailingSubstatement();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1629;
				this.labeledStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1630;
				this.ifThenStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1631;
				this.ifThenElseStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1632;
				this.whileStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1633;
				this.forStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public statementNoShortIf(): StatementNoShortIfContext {
		let _localctx: StatementNoShortIfContext = new StatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, Java9Parser.RULE_statementNoShortIf);
		try {
			this.state = 1641;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 169, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1636;
				this.statementWithoutTrailingSubstatement();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1637;
				this.labeledStatementNoShortIf();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1638;
				this.ifThenElseStatementNoShortIf();
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1639;
				this.whileStatementNoShortIf();
				}
				break;
			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1640;
				this.forStatementNoShortIf();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext {
		let _localctx: StatementWithoutTrailingSubstatementContext = new StatementWithoutTrailingSubstatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, Java9Parser.RULE_statementWithoutTrailingSubstatement);
		try {
			this.state = 1655;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1643;
				this.block();
				}
				break;
			case Java9Parser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1644;
				this.emptyStatement();
				}
				break;
			case Java9Parser.T__0:
			case Java9Parser.T__1:
			case Java9Parser.T__2:
			case Java9Parser.T__3:
			case Java9Parser.T__4:
			case Java9Parser.T__5:
			case Java9Parser.T__6:
			case Java9Parser.T__7:
			case Java9Parser.T__8:
			case Java9Parser.BOOLEAN:
			case Java9Parser.BYTE:
			case Java9Parser.CHAR:
			case Java9Parser.DOUBLE:
			case Java9Parser.FLOAT:
			case Java9Parser.INT:
			case Java9Parser.LONG:
			case Java9Parser.NEW:
			case Java9Parser.SHORT:
			case Java9Parser.SUPER:
			case Java9Parser.THIS:
			case Java9Parser.VOID:
			case Java9Parser.IntegerLiteral:
			case Java9Parser.FloatingPointLiteral:
			case Java9Parser.BooleanLiteral:
			case Java9Parser.CharacterLiteral:
			case Java9Parser.StringLiteral:
			case Java9Parser.NullLiteral:
			case Java9Parser.LPAREN:
			case Java9Parser.AT:
			case Java9Parser.INC:
			case Java9Parser.DEC:
			case Java9Parser.Identifier:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1645;
				this.expressionStatement();
				}
				break;
			case Java9Parser.ASSERT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1646;
				this.assertStatement();
				}
				break;
			case Java9Parser.SWITCH:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1647;
				this.switchStatement();
				}
				break;
			case Java9Parser.DO:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1648;
				this.doStatement();
				}
				break;
			case Java9Parser.BREAK:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1649;
				this.breakStatement();
				}
				break;
			case Java9Parser.CONTINUE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1650;
				this.continueStatement();
				}
				break;
			case Java9Parser.RETURN:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1651;
				this.returnStatement();
				}
				break;
			case Java9Parser.SYNCHRONIZED:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1652;
				this.synchronizedStatement();
				}
				break;
			case Java9Parser.THROW:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1653;
				this.throwStatement();
				}
				break;
			case Java9Parser.TRY:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1654;
				this.tryStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public emptyStatement(): EmptyStatementContext {
		let _localctx: EmptyStatementContext = new EmptyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, Java9Parser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1657;
			this.match(Java9Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public labeledStatement(): LabeledStatementContext {
		let _localctx: LabeledStatementContext = new LabeledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, Java9Parser.RULE_labeledStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1659;
			this.identifier();
			this.state = 1660;
			this.match(Java9Parser.COLON);
			this.state = 1661;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public labeledStatementNoShortIf(): LabeledStatementNoShortIfContext {
		let _localctx: LabeledStatementNoShortIfContext = new LabeledStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, Java9Parser.RULE_labeledStatementNoShortIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1663;
			this.identifier();
			this.state = 1664;
			this.match(Java9Parser.COLON);
			this.state = 1665;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, Java9Parser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1667;
			this.statementExpression();
			this.state = 1668;
			this.match(Java9Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public statementExpression(): StatementExpressionContext {
		let _localctx: StatementExpressionContext = new StatementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, Java9Parser.RULE_statementExpression);
		try {
			this.state = 1677;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 171, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1670;
				this.assignment();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1671;
				this.preIncrementExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1672;
				this.preDecrementExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1673;
				this.postIncrementExpression();
				}
				break;
			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1674;
				this.postDecrementExpression();
				}
				break;
			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1675;
				this.methodInvocation();
				}
				break;
			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1676;
				this.classInstanceCreationExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public ifThenStatement(): IfThenStatementContext {
		let _localctx: IfThenStatementContext = new IfThenStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, Java9Parser.RULE_ifThenStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1679;
			this.match(Java9Parser.IF);
			this.state = 1680;
			this.match(Java9Parser.LPAREN);
			this.state = 1681;
			this.expression();
			this.state = 1682;
			this.match(Java9Parser.RPAREN);
			this.state = 1683;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public ifThenElseStatement(): IfThenElseStatementContext {
		let _localctx: IfThenElseStatementContext = new IfThenElseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, Java9Parser.RULE_ifThenElseStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1685;
			this.match(Java9Parser.IF);
			this.state = 1686;
			this.match(Java9Parser.LPAREN);
			this.state = 1687;
			this.expression();
			this.state = 1688;
			this.match(Java9Parser.RPAREN);
			this.state = 1689;
			this.statementNoShortIf();
			this.state = 1690;
			this.match(Java9Parser.ELSE);
			this.state = 1691;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public ifThenElseStatementNoShortIf(): IfThenElseStatementNoShortIfContext {
		let _localctx: IfThenElseStatementNoShortIfContext = new IfThenElseStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, Java9Parser.RULE_ifThenElseStatementNoShortIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1693;
			this.match(Java9Parser.IF);
			this.state = 1694;
			this.match(Java9Parser.LPAREN);
			this.state = 1695;
			this.expression();
			this.state = 1696;
			this.match(Java9Parser.RPAREN);
			this.state = 1697;
			this.statementNoShortIf();
			this.state = 1698;
			this.match(Java9Parser.ELSE);
			this.state = 1699;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public assertStatement(): AssertStatementContext {
		let _localctx: AssertStatementContext = new AssertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, Java9Parser.RULE_assertStatement);
		try {
			this.state = 1711;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 172, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1701;
				this.match(Java9Parser.ASSERT);
				this.state = 1702;
				this.expression();
				this.state = 1703;
				this.match(Java9Parser.SEMI);
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1705;
				this.match(Java9Parser.ASSERT);
				this.state = 1706;
				this.expression();
				this.state = 1707;
				this.match(Java9Parser.COLON);
				this.state = 1708;
				this.expression();
				this.state = 1709;
				this.match(Java9Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, Java9Parser.RULE_switchStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1713;
			this.match(Java9Parser.SWITCH);
			this.state = 1714;
			this.match(Java9Parser.LPAREN);
			this.state = 1715;
			this.expression();
			this.state = 1716;
			this.match(Java9Parser.RPAREN);
			this.state = 1717;
			this.switchBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public switchBlock(): SwitchBlockContext {
		let _localctx: SwitchBlockContext = new SwitchBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, Java9Parser.RULE_switchBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1719;
			this.match(Java9Parser.LBRACE);
			this.state = 1723;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1720;
					this.switchBlockStatementGroup();
					}
					}
				}
				this.state = 1725;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 173, this._ctx);
			}
			this.state = 1729;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.CASE || _la === Java9Parser.DEFAULT) {
				{
				{
				this.state = 1726;
				this.switchLabel();
				}
				}
				this.state = 1731;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1732;
			this.match(Java9Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
		let _localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, Java9Parser.RULE_switchBlockStatementGroup);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1734;
			this.switchLabels();
			this.state = 1735;
			this.blockStatements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public switchLabels(): SwitchLabelsContext {
		let _localctx: SwitchLabelsContext = new SwitchLabelsContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, Java9Parser.RULE_switchLabels);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1738;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1737;
				this.switchLabel();
				}
				}
				this.state = 1740;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === Java9Parser.CASE || _la === Java9Parser.DEFAULT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public switchLabel(): SwitchLabelContext {
		let _localctx: SwitchLabelContext = new SwitchLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, Java9Parser.RULE_switchLabel);
		try {
			this.state = 1752;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 176, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1742;
				this.match(Java9Parser.CASE);
				this.state = 1743;
				this.constantExpression();
				this.state = 1744;
				this.match(Java9Parser.COLON);
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1746;
				this.match(Java9Parser.CASE);
				this.state = 1747;
				this.enumConstantName();
				this.state = 1748;
				this.match(Java9Parser.COLON);
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1750;
				this.match(Java9Parser.DEFAULT);
				this.state = 1751;
				this.match(Java9Parser.COLON);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public enumConstantName(): EnumConstantNameContext {
		let _localctx: EnumConstantNameContext = new EnumConstantNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, Java9Parser.RULE_enumConstantName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1754;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, Java9Parser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1756;
			this.match(Java9Parser.WHILE);
			this.state = 1757;
			this.match(Java9Parser.LPAREN);
			this.state = 1758;
			this.expression();
			this.state = 1759;
			this.match(Java9Parser.RPAREN);
			this.state = 1760;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public whileStatementNoShortIf(): WhileStatementNoShortIfContext {
		let _localctx: WhileStatementNoShortIfContext = new WhileStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, Java9Parser.RULE_whileStatementNoShortIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1762;
			this.match(Java9Parser.WHILE);
			this.state = 1763;
			this.match(Java9Parser.LPAREN);
			this.state = 1764;
			this.expression();
			this.state = 1765;
			this.match(Java9Parser.RPAREN);
			this.state = 1766;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public doStatement(): DoStatementContext {
		let _localctx: DoStatementContext = new DoStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, Java9Parser.RULE_doStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1768;
			this.match(Java9Parser.DO);
			this.state = 1769;
			this.statement();
			this.state = 1770;
			this.match(Java9Parser.WHILE);
			this.state = 1771;
			this.match(Java9Parser.LPAREN);
			this.state = 1772;
			this.expression();
			this.state = 1773;
			this.match(Java9Parser.RPAREN);
			this.state = 1774;
			this.match(Java9Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, Java9Parser.RULE_forStatement);
		try {
			this.state = 1778;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 177, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1776;
				this.basicForStatement();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1777;
				this.enhancedForStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public forStatementNoShortIf(): ForStatementNoShortIfContext {
		let _localctx: ForStatementNoShortIfContext = new ForStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, Java9Parser.RULE_forStatementNoShortIf);
		try {
			this.state = 1782;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1780;
				this.basicForStatementNoShortIf();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1781;
				this.enhancedForStatementNoShortIf();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public basicForStatement(): BasicForStatementContext {
		let _localctx: BasicForStatementContext = new BasicForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, Java9Parser.RULE_basicForStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1784;
			this.match(Java9Parser.FOR);
			this.state = 1785;
			this.match(Java9Parser.LPAREN);
			this.state = 1787;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FINAL) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)))) !== 0) || _la === Java9Parser.Identifier) {
				{
				this.state = 1786;
				this.forInit();
				}
			}

			this.state = 1789;
			this.match(Java9Parser.SEMI);
			this.state = 1791;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
				{
				this.state = 1790;
				this.expression();
				}
			}

			this.state = 1793;
			this.match(Java9Parser.SEMI);
			this.state = 1795;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)))) !== 0) || _la === Java9Parser.Identifier) {
				{
				this.state = 1794;
				this.forUpdate();
				}
			}

			this.state = 1797;
			this.match(Java9Parser.RPAREN);
			this.state = 1798;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public basicForStatementNoShortIf(): BasicForStatementNoShortIfContext {
		let _localctx: BasicForStatementNoShortIfContext = new BasicForStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, Java9Parser.RULE_basicForStatementNoShortIf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1800;
			this.match(Java9Parser.FOR);
			this.state = 1801;
			this.match(Java9Parser.LPAREN);
			this.state = 1803;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FINAL) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)))) !== 0) || _la === Java9Parser.Identifier) {
				{
				this.state = 1802;
				this.forInit();
				}
			}

			this.state = 1805;
			this.match(Java9Parser.SEMI);
			this.state = 1807;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
				{
				this.state = 1806;
				this.expression();
				}
			}

			this.state = 1809;
			this.match(Java9Parser.SEMI);
			this.state = 1811;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)))) !== 0) || _la === Java9Parser.Identifier) {
				{
				this.state = 1810;
				this.forUpdate();
				}
			}

			this.state = 1813;
			this.match(Java9Parser.RPAREN);
			this.state = 1814;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, Java9Parser.RULE_forInit);
		try {
			this.state = 1818;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 185, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1816;
				this.statementExpressionList();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1817;
				this.localVariableDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public forUpdate(): ForUpdateContext {
		let _localctx: ForUpdateContext = new ForUpdateContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, Java9Parser.RULE_forUpdate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1820;
			this.statementExpressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public statementExpressionList(): StatementExpressionListContext {
		let _localctx: StatementExpressionListContext = new StatementExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, Java9Parser.RULE_statementExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1822;
			this.statementExpression();
			this.state = 1827;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.COMMA) {
				{
				{
				this.state = 1823;
				this.match(Java9Parser.COMMA);
				this.state = 1824;
				this.statementExpression();
				}
				}
				this.state = 1829;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public enhancedForStatement(): EnhancedForStatementContext {
		let _localctx: EnhancedForStatementContext = new EnhancedForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, Java9Parser.RULE_enhancedForStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1830;
			this.match(Java9Parser.FOR);
			this.state = 1831;
			this.match(Java9Parser.LPAREN);
			this.state = 1835;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.FINAL || _la === Java9Parser.AT) {
				{
				{
				this.state = 1832;
				this.variableModifier();
				}
				}
				this.state = 1837;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1838;
			this.unannType();
			this.state = 1839;
			this.variableDeclaratorId();
			this.state = 1840;
			this.match(Java9Parser.COLON);
			this.state = 1841;
			this.expression();
			this.state = 1842;
			this.match(Java9Parser.RPAREN);
			this.state = 1843;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public enhancedForStatementNoShortIf(): EnhancedForStatementNoShortIfContext {
		let _localctx: EnhancedForStatementNoShortIfContext = new EnhancedForStatementNoShortIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, Java9Parser.RULE_enhancedForStatementNoShortIf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1845;
			this.match(Java9Parser.FOR);
			this.state = 1846;
			this.match(Java9Parser.LPAREN);
			this.state = 1850;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.FINAL || _la === Java9Parser.AT) {
				{
				{
				this.state = 1847;
				this.variableModifier();
				}
				}
				this.state = 1852;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1853;
			this.unannType();
			this.state = 1854;
			this.variableDeclaratorId();
			this.state = 1855;
			this.match(Java9Parser.COLON);
			this.state = 1856;
			this.expression();
			this.state = 1857;
			this.match(Java9Parser.RPAREN);
			this.state = 1858;
			this.statementNoShortIf();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, Java9Parser.RULE_breakStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1860;
			this.match(Java9Parser.BREAK);
			this.state = 1862;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8))) !== 0) || _la === Java9Parser.Identifier) {
				{
				this.state = 1861;
				this.identifier();
				}
			}

			this.state = 1864;
			this.match(Java9Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, Java9Parser.RULE_continueStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1866;
			this.match(Java9Parser.CONTINUE);
			this.state = 1868;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8))) !== 0) || _la === Java9Parser.Identifier) {
				{
				this.state = 1867;
				this.identifier();
				}
			}

			this.state = 1870;
			this.match(Java9Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, Java9Parser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1872;
			this.match(Java9Parser.RETURN);
			this.state = 1874;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
				{
				this.state = 1873;
				this.expression();
				}
			}

			this.state = 1876;
			this.match(Java9Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, Java9Parser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1878;
			this.match(Java9Parser.THROW);
			this.state = 1879;
			this.expression();
			this.state = 1880;
			this.match(Java9Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public synchronizedStatement(): SynchronizedStatementContext {
		let _localctx: SynchronizedStatementContext = new SynchronizedStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, Java9Parser.RULE_synchronizedStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1882;
			this.match(Java9Parser.SYNCHRONIZED);
			this.state = 1883;
			this.match(Java9Parser.LPAREN);
			this.state = 1884;
			this.expression();
			this.state = 1885;
			this.match(Java9Parser.RPAREN);
			this.state = 1886;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, Java9Parser.RULE_tryStatement);
		let _la: number;
		try {
			this.state = 1900;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 193, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1888;
				this.match(Java9Parser.TRY);
				this.state = 1889;
				this.block();
				this.state = 1890;
				this.catches();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1892;
				this.match(Java9Parser.TRY);
				this.state = 1893;
				this.block();
				this.state = 1895;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.CATCH) {
					{
					this.state = 1894;
					this.catches();
					}
				}

				this.state = 1897;
				this.finally_();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1899;
				this.tryWithResourcesStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public catches(): CatchesContext {
		let _localctx: CatchesContext = new CatchesContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, Java9Parser.RULE_catches);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1903;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1902;
				this.catchClause();
				}
				}
				this.state = 1905;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === Java9Parser.CATCH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, Java9Parser.RULE_catchClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1907;
			this.match(Java9Parser.CATCH);
			this.state = 1908;
			this.match(Java9Parser.LPAREN);
			this.state = 1909;
			this.catchFormalParameter();
			this.state = 1910;
			this.match(Java9Parser.RPAREN);
			this.state = 1911;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public catchFormalParameter(): CatchFormalParameterContext {
		let _localctx: CatchFormalParameterContext = new CatchFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, Java9Parser.RULE_catchFormalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1916;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.FINAL || _la === Java9Parser.AT) {
				{
				{
				this.state = 1913;
				this.variableModifier();
				}
				}
				this.state = 1918;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1919;
			this.catchType();
			this.state = 1920;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public catchType(): CatchTypeContext {
		let _localctx: CatchTypeContext = new CatchTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, Java9Parser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1922;
			this.unannClassType();
			this.state = 1927;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.BITOR) {
				{
				{
				this.state = 1923;
				this.match(Java9Parser.BITOR);
				this.state = 1924;
				this.classType();
				}
				}
				this.state = 1929;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public finally_(): Finally_Context {
		let _localctx: Finally_Context = new Finally_Context(this._ctx, this.state);
		this.enterRule(_localctx, 352, Java9Parser.RULE_finally_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1930;
			this.match(Java9Parser.FINALLY);
			this.state = 1931;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public tryWithResourcesStatement(): TryWithResourcesStatementContext {
		let _localctx: TryWithResourcesStatementContext = new TryWithResourcesStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, Java9Parser.RULE_tryWithResourcesStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1933;
			this.match(Java9Parser.TRY);
			this.state = 1934;
			this.resourceSpecification();
			this.state = 1935;
			this.block();
			this.state = 1937;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.CATCH) {
				{
				this.state = 1936;
				this.catches();
				}
			}

			this.state = 1940;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.FINALLY) {
				{
				this.state = 1939;
				this.finally_();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public resourceSpecification(): ResourceSpecificationContext {
		let _localctx: ResourceSpecificationContext = new ResourceSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, Java9Parser.RULE_resourceSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1942;
			this.match(Java9Parser.LPAREN);
			this.state = 1943;
			this.resourceList();
			this.state = 1945;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.SEMI) {
				{
				this.state = 1944;
				this.match(Java9Parser.SEMI);
				}
			}

			this.state = 1947;
			this.match(Java9Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public resourceList(): ResourceListContext {
		let _localctx: ResourceListContext = new ResourceListContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, Java9Parser.RULE_resourceList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1949;
			this.resource();
			this.state = 1954;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 200, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1950;
					this.match(Java9Parser.SEMI);
					this.state = 1951;
					this.resource();
					}
					}
				}
				this.state = 1956;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 200, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public resource(): ResourceContext {
		let _localctx: ResourceContext = new ResourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, Java9Parser.RULE_resource);
		let _la: number;
		try {
			this.state = 1969;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 202, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1960;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.FINAL || _la === Java9Parser.AT) {
					{
					{
					this.state = 1957;
					this.variableModifier();
					}
					}
					this.state = 1962;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1963;
				this.unannType();
				this.state = 1964;
				this.variableDeclaratorId();
				this.state = 1965;
				this.match(Java9Parser.ASSIGN);
				this.state = 1966;
				this.expression();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1968;
				this.variableAccess();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public variableAccess(): VariableAccessContext {
		let _localctx: VariableAccessContext = new VariableAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, Java9Parser.RULE_variableAccess);
		try {
			this.state = 1973;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 203, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1971;
				this.expressionName();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1972;
				this.fieldAccess();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, Java9Parser.RULE_primary);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1977;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 204, this._ctx) ) {
			case 1:
				{
				this.state = 1975;
				this.primaryNoNewArray_lfno_primary();
				}
				break;
			case 2:
				{
				this.state = 1976;
				this.arrayCreationExpression();
				}
				break;
			}
			this.state = 1982;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 205, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1979;
					this.primaryNoNewArray_lf_primary();
					}
					}
				}
				this.state = 1984;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 205, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public primaryNoNewArray(): PrimaryNoNewArrayContext {
		let _localctx: PrimaryNoNewArrayContext = new PrimaryNoNewArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, Java9Parser.RULE_primaryNoNewArray);
		try {
			this.state = 2001;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 206, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1985;
				this.literal();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1986;
				this.classLiteral();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1987;
				this.match(Java9Parser.THIS);
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1988;
				this.typeName();
				this.state = 1989;
				this.match(Java9Parser.DOT);
				this.state = 1990;
				this.match(Java9Parser.THIS);
				}
				break;
			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1992;
				this.match(Java9Parser.LPAREN);
				this.state = 1993;
				this.expression();
				this.state = 1994;
				this.match(Java9Parser.RPAREN);
				}
				break;
			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1996;
				this.classInstanceCreationExpression();
				}
				break;
			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1997;
				this.fieldAccess();
				}
				break;
			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1998;
				this.arrayAccess();
				}
				break;
			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1999;
				this.methodInvocation();
				}
				break;
			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2000;
				this.methodReference();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public primaryNoNewArray_lf_arrayAccess(): PrimaryNoNewArray_lf_arrayAccessContext {
		let _localctx: PrimaryNoNewArray_lf_arrayAccessContext = new PrimaryNoNewArray_lf_arrayAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, Java9Parser.RULE_primaryNoNewArray_lf_arrayAccess);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public primaryNoNewArray_lfno_arrayAccess(): PrimaryNoNewArray_lfno_arrayAccessContext {
		let _localctx: PrimaryNoNewArray_lfno_arrayAccessContext = new PrimaryNoNewArray_lfno_arrayAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, Java9Parser.RULE_primaryNoNewArray_lfno_arrayAccess);
		let _la: number;
		try {
			this.state = 2033;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 208, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2005;
				this.literal();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2006;
				this.typeName();
				this.state = 2011;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.LBRACK) {
					{
					{
					this.state = 2007;
					this.match(Java9Parser.LBRACK);
					this.state = 2008;
					this.match(Java9Parser.RBRACK);
					}
					}
					this.state = 2013;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2014;
				this.match(Java9Parser.DOT);
				this.state = 2015;
				this.match(Java9Parser.CLASS);
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2017;
				this.match(Java9Parser.VOID);
				this.state = 2018;
				this.match(Java9Parser.DOT);
				this.state = 2019;
				this.match(Java9Parser.CLASS);
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2020;
				this.match(Java9Parser.THIS);
				}
				break;
			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2021;
				this.typeName();
				this.state = 2022;
				this.match(Java9Parser.DOT);
				this.state = 2023;
				this.match(Java9Parser.THIS);
				}
				break;
			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2025;
				this.match(Java9Parser.LPAREN);
				this.state = 2026;
				this.expression();
				this.state = 2027;
				this.match(Java9Parser.RPAREN);
				}
				break;
			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2029;
				this.classInstanceCreationExpression();
				}
				break;
			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2030;
				this.fieldAccess();
				}
				break;
			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2031;
				this.methodInvocation();
				}
				break;
			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2032;
				this.methodReference();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public primaryNoNewArray_lf_primary(): PrimaryNoNewArray_lf_primaryContext {
		let _localctx: PrimaryNoNewArray_lf_primaryContext = new PrimaryNoNewArray_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, Java9Parser.RULE_primaryNoNewArray_lf_primary);
		try {
			this.state = 2040;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 209, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2035;
				this.classInstanceCreationExpression_lf_primary();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2036;
				this.fieldAccess_lf_primary();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2037;
				this.arrayAccess_lf_primary();
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2038;
				this.methodInvocation_lf_primary();
				}
				break;
			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2039;
				this.methodReference_lf_primary();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext {
		let _localctx: PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext = new PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, Java9Parser.RULE_primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext {
		let _localctx: PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext = new PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, Java9Parser.RULE_primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary);
		try {
			this.state = 2048;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 210, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2044;
				this.classInstanceCreationExpression_lf_primary();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2045;
				this.fieldAccess_lf_primary();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2046;
				this.methodInvocation_lf_primary();
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2047;
				this.methodReference_lf_primary();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public primaryNoNewArray_lfno_primary(): PrimaryNoNewArray_lfno_primaryContext {
		let _localctx: PrimaryNoNewArray_lfno_primaryContext = new PrimaryNoNewArray_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, Java9Parser.RULE_primaryNoNewArray_lfno_primary);
		let _la: number;
		try {
			this.state = 2090;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 213, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2050;
				this.literal();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2051;
				this.typeName();
				this.state = 2056;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.LBRACK) {
					{
					{
					this.state = 2052;
					this.match(Java9Parser.LBRACK);
					this.state = 2053;
					this.match(Java9Parser.RBRACK);
					}
					}
					this.state = 2058;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2059;
				this.match(Java9Parser.DOT);
				this.state = 2060;
				this.match(Java9Parser.CLASS);
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2062;
				this.unannPrimitiveType();
				this.state = 2067;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.LBRACK) {
					{
					{
					this.state = 2063;
					this.match(Java9Parser.LBRACK);
					this.state = 2064;
					this.match(Java9Parser.RBRACK);
					}
					}
					this.state = 2069;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2070;
				this.match(Java9Parser.DOT);
				this.state = 2071;
				this.match(Java9Parser.CLASS);
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2073;
				this.match(Java9Parser.VOID);
				this.state = 2074;
				this.match(Java9Parser.DOT);
				this.state = 2075;
				this.match(Java9Parser.CLASS);
				}
				break;
			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2076;
				this.match(Java9Parser.THIS);
				}
				break;
			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2077;
				this.typeName();
				this.state = 2078;
				this.match(Java9Parser.DOT);
				this.state = 2079;
				this.match(Java9Parser.THIS);
				}
				break;
			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2081;
				this.match(Java9Parser.LPAREN);
				this.state = 2082;
				this.expression();
				this.state = 2083;
				this.match(Java9Parser.RPAREN);
				}
				break;
			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2085;
				this.classInstanceCreationExpression_lfno_primary();
				}
				break;
			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2086;
				this.fieldAccess_lfno_primary();
				}
				break;
			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2087;
				this.arrayAccess_lfno_primary();
				}
				break;
			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2088;
				this.methodInvocation_lfno_primary();
				}
				break;
			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2089;
				this.methodReference_lfno_primary();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext {
		let _localctx: PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext = new PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, Java9Parser.RULE_primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext {
		let _localctx: PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext = new PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, Java9Parser.RULE_primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary);
		let _la: number;
		try {
			this.state = 2133;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 216, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2094;
				this.literal();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2095;
				this.typeName();
				this.state = 2100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.LBRACK) {
					{
					{
					this.state = 2096;
					this.match(Java9Parser.LBRACK);
					this.state = 2097;
					this.match(Java9Parser.RBRACK);
					}
					}
					this.state = 2102;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2103;
				this.match(Java9Parser.DOT);
				this.state = 2104;
				this.match(Java9Parser.CLASS);
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2106;
				this.unannPrimitiveType();
				this.state = 2111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.LBRACK) {
					{
					{
					this.state = 2107;
					this.match(Java9Parser.LBRACK);
					this.state = 2108;
					this.match(Java9Parser.RBRACK);
					}
					}
					this.state = 2113;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2114;
				this.match(Java9Parser.DOT);
				this.state = 2115;
				this.match(Java9Parser.CLASS);
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2117;
				this.match(Java9Parser.VOID);
				this.state = 2118;
				this.match(Java9Parser.DOT);
				this.state = 2119;
				this.match(Java9Parser.CLASS);
				}
				break;
			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2120;
				this.match(Java9Parser.THIS);
				}
				break;
			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2121;
				this.typeName();
				this.state = 2122;
				this.match(Java9Parser.DOT);
				this.state = 2123;
				this.match(Java9Parser.THIS);
				}
				break;
			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2125;
				this.match(Java9Parser.LPAREN);
				this.state = 2126;
				this.expression();
				this.state = 2127;
				this.match(Java9Parser.RPAREN);
				}
				break;
			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2129;
				this.classInstanceCreationExpression_lfno_primary();
				}
				break;
			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2130;
				this.fieldAccess_lfno_primary();
				}
				break;
			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2131;
				this.methodInvocation_lfno_primary();
				}
				break;
			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2132;
				this.methodReference_lfno_primary();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public classLiteral(): ClassLiteralContext {
		let _localctx: ClassLiteralContext = new ClassLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 384, Java9Parser.RULE_classLiteral);
		let _la: number;
		try {
			this.state = 2152;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.T__0:
			case Java9Parser.T__1:
			case Java9Parser.T__2:
			case Java9Parser.T__3:
			case Java9Parser.T__4:
			case Java9Parser.T__5:
			case Java9Parser.T__6:
			case Java9Parser.T__7:
			case Java9Parser.T__8:
			case Java9Parser.BOOLEAN:
			case Java9Parser.BYTE:
			case Java9Parser.CHAR:
			case Java9Parser.DOUBLE:
			case Java9Parser.FLOAT:
			case Java9Parser.INT:
			case Java9Parser.LONG:
			case Java9Parser.SHORT:
			case Java9Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2138;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Java9Parser.T__0:
				case Java9Parser.T__1:
				case Java9Parser.T__2:
				case Java9Parser.T__3:
				case Java9Parser.T__4:
				case Java9Parser.T__5:
				case Java9Parser.T__6:
				case Java9Parser.T__7:
				case Java9Parser.T__8:
				case Java9Parser.Identifier:
					{
					this.state = 2135;
					this.typeName();
					}
					break;
				case Java9Parser.BYTE:
				case Java9Parser.CHAR:
				case Java9Parser.DOUBLE:
				case Java9Parser.FLOAT:
				case Java9Parser.INT:
				case Java9Parser.LONG:
				case Java9Parser.SHORT:
					{
					this.state = 2136;
					this.numericType();
					}
					break;
				case Java9Parser.BOOLEAN:
					{
					this.state = 2137;
					this.match(Java9Parser.BOOLEAN);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.LBRACK) {
					{
					{
					this.state = 2140;
					this.match(Java9Parser.LBRACK);
					this.state = 2141;
					this.match(Java9Parser.RBRACK);
					}
					}
					this.state = 2146;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2147;
				this.match(Java9Parser.DOT);
				this.state = 2148;
				this.match(Java9Parser.CLASS);
				}
				break;
			case Java9Parser.VOID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2149;
				this.match(Java9Parser.VOID);
				this.state = 2150;
				this.match(Java9Parser.DOT);
				this.state = 2151;
				this.match(Java9Parser.CLASS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext {
		let _localctx: ClassInstanceCreationExpressionContext = new ClassInstanceCreationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, Java9Parser.RULE_classInstanceCreationExpression);
		let _la: number;
		try {
			this.state = 2237;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 237, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2154;
				this.match(Java9Parser.NEW);
				this.state = 2156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2155;
					this.typeArguments();
					}
				}

				this.state = 2161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.AT) {
					{
					{
					this.state = 2158;
					this.annotation();
					}
					}
					this.state = 2163;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2164;
				this.identifier();
				this.state = 2175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.DOT) {
					{
					{
					this.state = 2165;
					this.match(Java9Parser.DOT);
					this.state = 2169;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === Java9Parser.AT) {
						{
						{
						this.state = 2166;
						this.annotation();
						}
						}
						this.state = 2171;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2172;
					this.identifier();
					}
					}
					this.state = 2177;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2178;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2181;
				this.match(Java9Parser.LPAREN);
				this.state = 2183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 2182;
					this.argumentList();
					}
				}

				this.state = 2185;
				this.match(Java9Parser.RPAREN);
				this.state = 2187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LBRACE) {
					{
					this.state = 2186;
					this.classBody();
					}
				}

				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2189;
				this.expressionName();
				this.state = 2190;
				this.match(Java9Parser.DOT);
				this.state = 2191;
				this.match(Java9Parser.NEW);
				this.state = 2193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2192;
					this.typeArguments();
					}
				}

				this.state = 2198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.AT) {
					{
					{
					this.state = 2195;
					this.annotation();
					}
					}
					this.state = 2200;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2201;
				this.identifier();
				this.state = 2203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2202;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2205;
				this.match(Java9Parser.LPAREN);
				this.state = 2207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 2206;
					this.argumentList();
					}
				}

				this.state = 2209;
				this.match(Java9Parser.RPAREN);
				this.state = 2211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LBRACE) {
					{
					this.state = 2210;
					this.classBody();
					}
				}

				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2213;
				this.primary();
				this.state = 2214;
				this.match(Java9Parser.DOT);
				this.state = 2215;
				this.match(Java9Parser.NEW);
				this.state = 2217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2216;
					this.typeArguments();
					}
				}

				this.state = 2222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.AT) {
					{
					{
					this.state = 2219;
					this.annotation();
					}
					}
					this.state = 2224;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2225;
				this.identifier();
				this.state = 2227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2226;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2229;
				this.match(Java9Parser.LPAREN);
				this.state = 2231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 2230;
					this.argumentList();
					}
				}

				this.state = 2233;
				this.match(Java9Parser.RPAREN);
				this.state = 2235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LBRACE) {
					{
					this.state = 2234;
					this.classBody();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public classInstanceCreationExpression_lf_primary(): ClassInstanceCreationExpression_lf_primaryContext {
		let _localctx: ClassInstanceCreationExpression_lf_primaryContext = new ClassInstanceCreationExpression_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 388, Java9Parser.RULE_classInstanceCreationExpression_lf_primary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2239;
			this.match(Java9Parser.DOT);
			this.state = 2240;
			this.match(Java9Parser.NEW);
			this.state = 2242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.LT) {
				{
				this.state = 2241;
				this.typeArguments();
				}
			}

			this.state = 2247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.AT) {
				{
				{
				this.state = 2244;
				this.annotation();
				}
				}
				this.state = 2249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2250;
			this.identifier();
			this.state = 2252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.LT) {
				{
				this.state = 2251;
				this.typeArgumentsOrDiamond();
				}
			}

			this.state = 2254;
			this.match(Java9Parser.LPAREN);
			this.state = 2256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
				{
				this.state = 2255;
				this.argumentList();
				}
			}

			this.state = 2258;
			this.match(Java9Parser.RPAREN);
			this.state = 2260;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 242, this._ctx) ) {
			case 1:
				{
				this.state = 2259;
				this.classBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public classInstanceCreationExpression_lfno_primary(): ClassInstanceCreationExpression_lfno_primaryContext {
		let _localctx: ClassInstanceCreationExpression_lfno_primaryContext = new ClassInstanceCreationExpression_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 390, Java9Parser.RULE_classInstanceCreationExpression_lfno_primary);
		let _la: number;
		try {
			this.state = 2321;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.NEW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2262;
				this.match(Java9Parser.NEW);
				this.state = 2264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2263;
					this.typeArguments();
					}
				}

				this.state = 2269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.AT) {
					{
					{
					this.state = 2266;
					this.annotation();
					}
					}
					this.state = 2271;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2272;
				this.identifier();
				this.state = 2283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.DOT) {
					{
					{
					this.state = 2273;
					this.match(Java9Parser.DOT);
					this.state = 2277;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === Java9Parser.AT) {
						{
						{
						this.state = 2274;
						this.annotation();
						}
						}
						this.state = 2279;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2280;
					this.identifier();
					}
					}
					this.state = 2285;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2286;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2289;
				this.match(Java9Parser.LPAREN);
				this.state = 2291;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 2290;
					this.argumentList();
					}
				}

				this.state = 2293;
				this.match(Java9Parser.RPAREN);
				this.state = 2295;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 249, this._ctx) ) {
				case 1:
					{
					this.state = 2294;
					this.classBody();
					}
					break;
				}
				}
				break;
			case Java9Parser.T__0:
			case Java9Parser.T__1:
			case Java9Parser.T__2:
			case Java9Parser.T__3:
			case Java9Parser.T__4:
			case Java9Parser.T__5:
			case Java9Parser.T__6:
			case Java9Parser.T__7:
			case Java9Parser.T__8:
			case Java9Parser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2297;
				this.expressionName();
				this.state = 2298;
				this.match(Java9Parser.DOT);
				this.state = 2299;
				this.match(Java9Parser.NEW);
				this.state = 2301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2300;
					this.typeArguments();
					}
				}

				this.state = 2306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.AT) {
					{
					{
					this.state = 2303;
					this.annotation();
					}
					}
					this.state = 2308;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2309;
				this.identifier();
				this.state = 2311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2310;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 2313;
				this.match(Java9Parser.LPAREN);
				this.state = 2315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 2314;
					this.argumentList();
					}
				}

				this.state = 2317;
				this.match(Java9Parser.RPAREN);
				this.state = 2319;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 254, this._ctx) ) {
				case 1:
					{
					this.state = 2318;
					this.classBody();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		let _localctx: TypeArgumentsOrDiamondContext = new TypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localctx, 392, Java9Parser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 2326;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 256, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2323;
				this.typeArguments();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2324;
				this.match(Java9Parser.LT);
				this.state = 2325;
				this.match(Java9Parser.GT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public fieldAccess(): FieldAccessContext {
		let _localctx: FieldAccessContext = new FieldAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 394, Java9Parser.RULE_fieldAccess);
		try {
			this.state = 2341;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 257, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2328;
				this.primary();
				this.state = 2329;
				this.match(Java9Parser.DOT);
				this.state = 2330;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2332;
				this.match(Java9Parser.SUPER);
				this.state = 2333;
				this.match(Java9Parser.DOT);
				this.state = 2334;
				this.identifier();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2335;
				this.typeName();
				this.state = 2336;
				this.match(Java9Parser.DOT);
				this.state = 2337;
				this.match(Java9Parser.SUPER);
				this.state = 2338;
				this.match(Java9Parser.DOT);
				this.state = 2339;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public fieldAccess_lf_primary(): FieldAccess_lf_primaryContext {
		let _localctx: FieldAccess_lf_primaryContext = new FieldAccess_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 396, Java9Parser.RULE_fieldAccess_lf_primary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2343;
			this.match(Java9Parser.DOT);
			this.state = 2344;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public fieldAccess_lfno_primary(): FieldAccess_lfno_primaryContext {
		let _localctx: FieldAccess_lfno_primaryContext = new FieldAccess_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 398, Java9Parser.RULE_fieldAccess_lfno_primary);
		try {
			this.state = 2355;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.SUPER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2346;
				this.match(Java9Parser.SUPER);
				this.state = 2347;
				this.match(Java9Parser.DOT);
				this.state = 2348;
				this.identifier();
				}
				break;
			case Java9Parser.T__0:
			case Java9Parser.T__1:
			case Java9Parser.T__2:
			case Java9Parser.T__3:
			case Java9Parser.T__4:
			case Java9Parser.T__5:
			case Java9Parser.T__6:
			case Java9Parser.T__7:
			case Java9Parser.T__8:
			case Java9Parser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2349;
				this.typeName();
				this.state = 2350;
				this.match(Java9Parser.DOT);
				this.state = 2351;
				this.match(Java9Parser.SUPER);
				this.state = 2352;
				this.match(Java9Parser.DOT);
				this.state = 2353;
				this.identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public arrayAccess(): ArrayAccessContext {
		let _localctx: ArrayAccessContext = new ArrayAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 400, Java9Parser.RULE_arrayAccess);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2367;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 259, this._ctx) ) {
			case 1:
				{
				this.state = 2357;
				this.expressionName();
				this.state = 2358;
				this.match(Java9Parser.LBRACK);
				this.state = 2359;
				this.expression();
				this.state = 2360;
				this.match(Java9Parser.RBRACK);
				}
				break;
			case 2:
				{
				this.state = 2362;
				this.primaryNoNewArray_lfno_arrayAccess();
				this.state = 2363;
				this.match(Java9Parser.LBRACK);
				this.state = 2364;
				this.expression();
				this.state = 2365;
				this.match(Java9Parser.RBRACK);
				}
				break;
			}
			this.state = 2376;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.LBRACK) {
				{
				{
				this.state = 2369;
				this.primaryNoNewArray_lf_arrayAccess();
				this.state = 2370;
				this.match(Java9Parser.LBRACK);
				this.state = 2371;
				this.expression();
				this.state = 2372;
				this.match(Java9Parser.RBRACK);
				}
				}
				this.state = 2378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public arrayAccess_lf_primary(): ArrayAccess_lf_primaryContext {
		let _localctx: ArrayAccess_lf_primaryContext = new ArrayAccess_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 402, Java9Parser.RULE_arrayAccess_lf_primary);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2379;
			this.primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary();
			this.state = 2380;
			this.match(Java9Parser.LBRACK);
			this.state = 2381;
			this.expression();
			this.state = 2382;
			this.match(Java9Parser.RBRACK);
			}
			this.state = 2391;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 261, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2384;
					this.primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary();
					this.state = 2385;
					this.match(Java9Parser.LBRACK);
					this.state = 2386;
					this.expression();
					this.state = 2387;
					this.match(Java9Parser.RBRACK);
					}
					}
				}
				this.state = 2393;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 261, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public arrayAccess_lfno_primary(): ArrayAccess_lfno_primaryContext {
		let _localctx: ArrayAccess_lfno_primaryContext = new ArrayAccess_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 404, Java9Parser.RULE_arrayAccess_lfno_primary);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2404;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 262, this._ctx) ) {
			case 1:
				{
				this.state = 2394;
				this.expressionName();
				this.state = 2395;
				this.match(Java9Parser.LBRACK);
				this.state = 2396;
				this.expression();
				this.state = 2397;
				this.match(Java9Parser.RBRACK);
				}
				break;
			case 2:
				{
				this.state = 2399;
				this.primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary();
				this.state = 2400;
				this.match(Java9Parser.LBRACK);
				this.state = 2401;
				this.expression();
				this.state = 2402;
				this.match(Java9Parser.RBRACK);
				}
				break;
			}
			this.state = 2413;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 263, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2406;
					this.primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary();
					this.state = 2407;
					this.match(Java9Parser.LBRACK);
					this.state = 2408;
					this.expression();
					this.state = 2409;
					this.match(Java9Parser.RBRACK);
					}
					}
				}
				this.state = 2415;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 263, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public methodInvocation(): MethodInvocationContext {
		let _localctx: MethodInvocationContext = new MethodInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 406, Java9Parser.RULE_methodInvocation);
		let _la: number;
		try {
			this.state = 2485;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 275, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2416;
				this.methodName();
				this.state = 2417;
				this.match(Java9Parser.LPAREN);
				this.state = 2419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 2418;
					this.argumentList();
					}
				}

				this.state = 2421;
				this.match(Java9Parser.RPAREN);
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2423;
				this.typeName();
				this.state = 2424;
				this.match(Java9Parser.DOT);
				this.state = 2426;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2425;
					this.typeArguments();
					}
				}

				this.state = 2428;
				this.identifier();
				this.state = 2429;
				this.match(Java9Parser.LPAREN);
				this.state = 2431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 2430;
					this.argumentList();
					}
				}

				this.state = 2433;
				this.match(Java9Parser.RPAREN);
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2435;
				this.expressionName();
				this.state = 2436;
				this.match(Java9Parser.DOT);
				this.state = 2438;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2437;
					this.typeArguments();
					}
				}

				this.state = 2440;
				this.identifier();
				this.state = 2441;
				this.match(Java9Parser.LPAREN);
				this.state = 2443;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 2442;
					this.argumentList();
					}
				}

				this.state = 2445;
				this.match(Java9Parser.RPAREN);
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2447;
				this.primary();
				this.state = 2448;
				this.match(Java9Parser.DOT);
				this.state = 2450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2449;
					this.typeArguments();
					}
				}

				this.state = 2452;
				this.identifier();
				this.state = 2453;
				this.match(Java9Parser.LPAREN);
				this.state = 2455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 2454;
					this.argumentList();
					}
				}

				this.state = 2457;
				this.match(Java9Parser.RPAREN);
				}
				break;
			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2459;
				this.match(Java9Parser.SUPER);
				this.state = 2460;
				this.match(Java9Parser.DOT);
				this.state = 2462;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2461;
					this.typeArguments();
					}
				}

				this.state = 2464;
				this.identifier();
				this.state = 2465;
				this.match(Java9Parser.LPAREN);
				this.state = 2467;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 2466;
					this.argumentList();
					}
				}

				this.state = 2469;
				this.match(Java9Parser.RPAREN);
				}
				break;
			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2471;
				this.typeName();
				this.state = 2472;
				this.match(Java9Parser.DOT);
				this.state = 2473;
				this.match(Java9Parser.SUPER);
				this.state = 2474;
				this.match(Java9Parser.DOT);
				this.state = 2476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2475;
					this.typeArguments();
					}
				}

				this.state = 2478;
				this.identifier();
				this.state = 2479;
				this.match(Java9Parser.LPAREN);
				this.state = 2481;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 2480;
					this.argumentList();
					}
				}

				this.state = 2483;
				this.match(Java9Parser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public methodInvocation_lf_primary(): MethodInvocation_lf_primaryContext {
		let _localctx: MethodInvocation_lf_primaryContext = new MethodInvocation_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 408, Java9Parser.RULE_methodInvocation_lf_primary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2487;
			this.match(Java9Parser.DOT);
			this.state = 2489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.LT) {
				{
				this.state = 2488;
				this.typeArguments();
				}
			}

			this.state = 2491;
			this.identifier();
			this.state = 2492;
			this.match(Java9Parser.LPAREN);
			this.state = 2494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
				{
				this.state = 2493;
				this.argumentList();
				}
			}

			this.state = 2496;
			this.match(Java9Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public methodInvocation_lfno_primary(): MethodInvocation_lfno_primaryContext {
		let _localctx: MethodInvocation_lfno_primaryContext = new MethodInvocation_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 410, Java9Parser.RULE_methodInvocation_lfno_primary);
		let _la: number;
		try {
			this.state = 2555;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 287, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2498;
				this.methodName();
				this.state = 2499;
				this.match(Java9Parser.LPAREN);
				this.state = 2501;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 2500;
					this.argumentList();
					}
				}

				this.state = 2503;
				this.match(Java9Parser.RPAREN);
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2505;
				this.typeName();
				this.state = 2506;
				this.match(Java9Parser.DOT);
				this.state = 2508;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2507;
					this.typeArguments();
					}
				}

				this.state = 2510;
				this.identifier();
				this.state = 2511;
				this.match(Java9Parser.LPAREN);
				this.state = 2513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 2512;
					this.argumentList();
					}
				}

				this.state = 2515;
				this.match(Java9Parser.RPAREN);
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2517;
				this.expressionName();
				this.state = 2518;
				this.match(Java9Parser.DOT);
				this.state = 2520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2519;
					this.typeArguments();
					}
				}

				this.state = 2522;
				this.identifier();
				this.state = 2523;
				this.match(Java9Parser.LPAREN);
				this.state = 2525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 2524;
					this.argumentList();
					}
				}

				this.state = 2527;
				this.match(Java9Parser.RPAREN);
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2529;
				this.match(Java9Parser.SUPER);
				this.state = 2530;
				this.match(Java9Parser.DOT);
				this.state = 2532;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2531;
					this.typeArguments();
					}
				}

				this.state = 2534;
				this.identifier();
				this.state = 2535;
				this.match(Java9Parser.LPAREN);
				this.state = 2537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 2536;
					this.argumentList();
					}
				}

				this.state = 2539;
				this.match(Java9Parser.RPAREN);
				}
				break;
			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2541;
				this.typeName();
				this.state = 2542;
				this.match(Java9Parser.DOT);
				this.state = 2543;
				this.match(Java9Parser.SUPER);
				this.state = 2544;
				this.match(Java9Parser.DOT);
				this.state = 2546;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2545;
					this.typeArguments();
					}
				}

				this.state = 2548;
				this.identifier();
				this.state = 2549;
				this.match(Java9Parser.LPAREN);
				this.state = 2551;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.NEW - 37)) | (1 << (Java9Parser.SHORT - 37)) | (1 << (Java9Parser.SUPER - 37)) | (1 << (Java9Parser.THIS - 37)) | (1 << (Java9Parser.VOID - 37)) | (1 << (Java9Parser.IntegerLiteral - 37)) | (1 << (Java9Parser.FloatingPointLiteral - 37)) | (1 << (Java9Parser.BooleanLiteral - 37)) | (1 << (Java9Parser.CharacterLiteral - 37)) | (1 << (Java9Parser.StringLiteral - 37)) | (1 << (Java9Parser.NullLiteral - 37)) | (1 << (Java9Parser.LPAREN - 37)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (Java9Parser.AT - 78)) | (1 << (Java9Parser.BANG - 78)) | (1 << (Java9Parser.TILDE - 78)) | (1 << (Java9Parser.INC - 78)) | (1 << (Java9Parser.DEC - 78)) | (1 << (Java9Parser.ADD - 78)) | (1 << (Java9Parser.SUB - 78)))) !== 0) || _la === Java9Parser.Identifier) {
					{
					this.state = 2550;
					this.argumentList();
					}
				}

				this.state = 2553;
				this.match(Java9Parser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 412, Java9Parser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2557;
			this.expression();
			this.state = 2562;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.COMMA) {
				{
				{
				this.state = 2558;
				this.match(Java9Parser.COMMA);
				this.state = 2559;
				this.expression();
				}
				}
				this.state = 2564;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public methodReference(): MethodReferenceContext {
		let _localctx: MethodReferenceContext = new MethodReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 414, Java9Parser.RULE_methodReference);
		let _la: number;
		try {
			this.state = 2612;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 295, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2565;
				this.expressionName();
				this.state = 2566;
				this.match(Java9Parser.COLONCOLON);
				this.state = 2568;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2567;
					this.typeArguments();
					}
				}

				this.state = 2570;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2572;
				this.referenceType();
				this.state = 2573;
				this.match(Java9Parser.COLONCOLON);
				this.state = 2575;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2574;
					this.typeArguments();
					}
				}

				this.state = 2577;
				this.identifier();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2579;
				this.primary();
				this.state = 2580;
				this.match(Java9Parser.COLONCOLON);
				this.state = 2582;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2581;
					this.typeArguments();
					}
				}

				this.state = 2584;
				this.identifier();
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2586;
				this.match(Java9Parser.SUPER);
				this.state = 2587;
				this.match(Java9Parser.COLONCOLON);
				this.state = 2589;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2588;
					this.typeArguments();
					}
				}

				this.state = 2591;
				this.identifier();
				}
				break;
			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2592;
				this.typeName();
				this.state = 2593;
				this.match(Java9Parser.DOT);
				this.state = 2594;
				this.match(Java9Parser.SUPER);
				this.state = 2595;
				this.match(Java9Parser.COLONCOLON);
				this.state = 2597;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2596;
					this.typeArguments();
					}
				}

				this.state = 2599;
				this.identifier();
				}
				break;
			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2601;
				this.classType();
				this.state = 2602;
				this.match(Java9Parser.COLONCOLON);
				this.state = 2604;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2603;
					this.typeArguments();
					}
				}

				this.state = 2606;
				this.match(Java9Parser.NEW);
				}
				break;
			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2608;
				this.arrayType();
				this.state = 2609;
				this.match(Java9Parser.COLONCOLON);
				this.state = 2610;
				this.match(Java9Parser.NEW);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public methodReference_lf_primary(): MethodReference_lf_primaryContext {
		let _localctx: MethodReference_lf_primaryContext = new MethodReference_lf_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 416, Java9Parser.RULE_methodReference_lf_primary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2614;
			this.match(Java9Parser.COLONCOLON);
			this.state = 2616;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Java9Parser.LT) {
				{
				this.state = 2615;
				this.typeArguments();
				}
			}

			this.state = 2618;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public methodReference_lfno_primary(): MethodReference_lfno_primaryContext {
		let _localctx: MethodReference_lfno_primaryContext = new MethodReference_lfno_primaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 418, Java9Parser.RULE_methodReference_lfno_primary);
		let _la: number;
		try {
			this.state = 2660;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 302, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2620;
				this.expressionName();
				this.state = 2621;
				this.match(Java9Parser.COLONCOLON);
				this.state = 2623;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2622;
					this.typeArguments();
					}
				}

				this.state = 2625;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2627;
				this.referenceType();
				this.state = 2628;
				this.match(Java9Parser.COLONCOLON);
				this.state = 2630;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2629;
					this.typeArguments();
					}
				}

				this.state = 2632;
				this.identifier();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2634;
				this.match(Java9Parser.SUPER);
				this.state = 2635;
				this.match(Java9Parser.COLONCOLON);
				this.state = 2637;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2636;
					this.typeArguments();
					}
				}

				this.state = 2639;
				this.identifier();
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2640;
				this.typeName();
				this.state = 2641;
				this.match(Java9Parser.DOT);
				this.state = 2642;
				this.match(Java9Parser.SUPER);
				this.state = 2643;
				this.match(Java9Parser.COLONCOLON);
				this.state = 2645;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2644;
					this.typeArguments();
					}
				}

				this.state = 2647;
				this.identifier();
				}
				break;
			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2649;
				this.classType();
				this.state = 2650;
				this.match(Java9Parser.COLONCOLON);
				this.state = 2652;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Java9Parser.LT) {
					{
					this.state = 2651;
					this.typeArguments();
					}
				}

				this.state = 2654;
				this.match(Java9Parser.NEW);
				}
				break;
			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2656;
				this.arrayType();
				this.state = 2657;
				this.match(Java9Parser.COLONCOLON);
				this.state = 2658;
				this.match(Java9Parser.NEW);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public arrayCreationExpression(): ArrayCreationExpressionContext {
		let _localctx: ArrayCreationExpressionContext = new ArrayCreationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 420, Java9Parser.RULE_arrayCreationExpression);
		try {
			this.state = 2684;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 305, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2662;
				this.match(Java9Parser.NEW);
				this.state = 2663;
				this.primitiveType();
				this.state = 2664;
				this.dimExprs();
				this.state = 2666;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 303, this._ctx) ) {
				case 1:
					{
					this.state = 2665;
					this.dims();
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2668;
				this.match(Java9Parser.NEW);
				this.state = 2669;
				this.classOrInterfaceType();
				this.state = 2670;
				this.dimExprs();
				this.state = 2672;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 304, this._ctx) ) {
				case 1:
					{
					this.state = 2671;
					this.dims();
					}
					break;
				}
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2674;
				this.match(Java9Parser.NEW);
				this.state = 2675;
				this.primitiveType();
				this.state = 2676;
				this.dims();
				this.state = 2677;
				this.arrayInitializer();
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2679;
				this.match(Java9Parser.NEW);
				this.state = 2680;
				this.classOrInterfaceType();
				this.state = 2681;
				this.dims();
				this.state = 2682;
				this.arrayInitializer();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public dimExprs(): DimExprsContext {
		let _localctx: DimExprsContext = new DimExprsContext(this._ctx, this.state);
		this.enterRule(_localctx, 422, Java9Parser.RULE_dimExprs);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2687;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2686;
					this.dimExpr();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2689;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 306, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public dimExpr(): DimExprContext {
		let _localctx: DimExprContext = new DimExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 424, Java9Parser.RULE_dimExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2694;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.AT) {
				{
				{
				this.state = 2691;
				this.annotation();
				}
				}
				this.state = 2696;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2697;
			this.match(Java9Parser.LBRACK);
			this.state = 2698;
			this.expression();
			this.state = 2699;
			this.match(Java9Parser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public constantExpression(): ConstantExpressionContext {
		let _localctx: ConstantExpressionContext = new ConstantExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 426, Java9Parser.RULE_constantExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2701;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 428, Java9Parser.RULE_expression);
		try {
			this.state = 2705;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 308, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2703;
				this.lambdaExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2704;
				this.assignmentExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public lambdaExpression(): LambdaExpressionContext {
		let _localctx: LambdaExpressionContext = new LambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 430, Java9Parser.RULE_lambdaExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2707;
			this.lambdaParameters();
			this.state = 2708;
			this.match(Java9Parser.ARROW);
			this.state = 2709;
			this.lambdaBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public lambdaParameters(): LambdaParametersContext {
		let _localctx: LambdaParametersContext = new LambdaParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 432, Java9Parser.RULE_lambdaParameters);
		let _la: number;
		try {
			this.state = 2721;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 310, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2711;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2712;
				this.match(Java9Parser.LPAREN);
				this.state = 2714;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8) | (1 << Java9Parser.BOOLEAN) | (1 << Java9Parser.BYTE) | (1 << Java9Parser.CHAR) | (1 << Java9Parser.DOUBLE) | (1 << Java9Parser.FINAL) | (1 << Java9Parser.FLOAT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (Java9Parser.INT - 37)) | (1 << (Java9Parser.LONG - 37)) | (1 << (Java9Parser.SHORT - 37)))) !== 0) || _la === Java9Parser.AT || _la === Java9Parser.Identifier) {
					{
					this.state = 2713;
					this.formalParameterList();
					}
				}

				this.state = 2716;
				this.match(Java9Parser.RPAREN);
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2717;
				this.match(Java9Parser.LPAREN);
				this.state = 2718;
				this.inferredFormalParameterList();
				this.state = 2719;
				this.match(Java9Parser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public inferredFormalParameterList(): InferredFormalParameterListContext {
		let _localctx: InferredFormalParameterListContext = new InferredFormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 434, Java9Parser.RULE_inferredFormalParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2723;
			this.identifier();
			this.state = 2728;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Java9Parser.COMMA) {
				{
				{
				this.state = 2724;
				this.match(Java9Parser.COMMA);
				this.state = 2725;
				this.identifier();
				}
				}
				this.state = 2730;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public lambdaBody(): LambdaBodyContext {
		let _localctx: LambdaBodyContext = new LambdaBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 436, Java9Parser.RULE_lambdaBody);
		try {
			this.state = 2733;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.T__0:
			case Java9Parser.T__1:
			case Java9Parser.T__2:
			case Java9Parser.T__3:
			case Java9Parser.T__4:
			case Java9Parser.T__5:
			case Java9Parser.T__6:
			case Java9Parser.T__7:
			case Java9Parser.T__8:
			case Java9Parser.BOOLEAN:
			case Java9Parser.BYTE:
			case Java9Parser.CHAR:
			case Java9Parser.DOUBLE:
			case Java9Parser.FLOAT:
			case Java9Parser.INT:
			case Java9Parser.LONG:
			case Java9Parser.NEW:
			case Java9Parser.SHORT:
			case Java9Parser.SUPER:
			case Java9Parser.THIS:
			case Java9Parser.VOID:
			case Java9Parser.IntegerLiteral:
			case Java9Parser.FloatingPointLiteral:
			case Java9Parser.BooleanLiteral:
			case Java9Parser.CharacterLiteral:
			case Java9Parser.StringLiteral:
			case Java9Parser.NullLiteral:
			case Java9Parser.LPAREN:
			case Java9Parser.AT:
			case Java9Parser.BANG:
			case Java9Parser.TILDE:
			case Java9Parser.INC:
			case Java9Parser.DEC:
			case Java9Parser.ADD:
			case Java9Parser.SUB:
			case Java9Parser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2731;
				this.expression();
				}
				break;
			case Java9Parser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2732;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public assignmentExpression(): AssignmentExpressionContext {
		let _localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 438, Java9Parser.RULE_assignmentExpression);
		try {
			this.state = 2737;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 313, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2735;
				this.conditionalExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2736;
				this.assignment();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 440, Java9Parser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2739;
			this.leftHandSide();
			this.state = 2740;
			this.assignmentOperator();
			this.state = 2741;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public leftHandSide(): LeftHandSideContext {
		let _localctx: LeftHandSideContext = new LeftHandSideContext(this._ctx, this.state);
		this.enterRule(_localctx, 442, Java9Parser.RULE_leftHandSide);
		try {
			this.state = 2746;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 314, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2743;
				this.expressionName();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2744;
				this.fieldAccess();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2745;
				this.arrayAccess();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 444, Java9Parser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2748;
			_la = this._input.LA(1);
			if (!(((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & ((1 << (Java9Parser.ASSIGN - 80)) | (1 << (Java9Parser.ADD_ASSIGN - 80)) | (1 << (Java9Parser.SUB_ASSIGN - 80)) | (1 << (Java9Parser.MUL_ASSIGN - 80)) | (1 << (Java9Parser.DIV_ASSIGN - 80)) | (1 << (Java9Parser.AND_ASSIGN - 80)) | (1 << (Java9Parser.OR_ASSIGN - 80)) | (1 << (Java9Parser.XOR_ASSIGN - 80)) | (1 << (Java9Parser.MOD_ASSIGN - 80)))) !== 0) || ((((_la - 112)) & ~0x1F) === 0 && ((1 << (_la - 112)) & ((1 << (Java9Parser.LSHIFT_ASSIGN - 112)) | (1 << (Java9Parser.RSHIFT_ASSIGN - 112)) | (1 << (Java9Parser.URSHIFT_ASSIGN - 112)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 446, Java9Parser.RULE_conditionalExpression);
		try {
			this.state = 2759;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 316, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2750;
				this.conditionalOrExpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2751;
				this.conditionalOrExpression(0);
				this.state = 2752;
				this.match(Java9Parser.QUESTION);
				this.state = 2753;
				this.expression();
				this.state = 2754;
				this.match(Java9Parser.COLON);
				this.state = 2757;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 315, this._ctx) ) {
				case 1:
					{
					this.state = 2755;
					this.conditionalExpression();
					}
					break;
				case 2:
					{
					this.state = 2756;
					this.lambdaExpression();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public conditionalOrExpression(): ConditionalOrExpressionContext;
	public conditionalOrExpression(_p: number): ConditionalOrExpressionContext;
	//@RuleVersion(0)
	public conditionalOrExpression(_p?: number): ConditionalOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ConditionalOrExpressionContext = new ConditionalOrExpressionContext(this._ctx, _parentState);
		let _prevctx: ConditionalOrExpressionContext = _localctx;
		let _startState: number = 448;
		this.enterRecursionRule(_localctx, 448, Java9Parser.RULE_conditionalOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2762;
			this.conditionalAndExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2769;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 317, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ConditionalOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_conditionalOrExpression);
					this.state = 2764;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 2765;
					this.match(Java9Parser.OR);
					this.state = 2766;
					this.conditionalAndExpression(0);
					}
					}
				}
				this.state = 2771;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 317, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public conditionalAndExpression(): ConditionalAndExpressionContext;
	public conditionalAndExpression(_p: number): ConditionalAndExpressionContext;
	//@RuleVersion(0)
	public conditionalAndExpression(_p?: number): ConditionalAndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ConditionalAndExpressionContext = new ConditionalAndExpressionContext(this._ctx, _parentState);
		let _prevctx: ConditionalAndExpressionContext = _localctx;
		let _startState: number = 450;
		this.enterRecursionRule(_localctx, 450, Java9Parser.RULE_conditionalAndExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2773;
			this.inclusiveOrExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2780;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 318, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ConditionalAndExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_conditionalAndExpression);
					this.state = 2775;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 2776;
					this.match(Java9Parser.AND);
					this.state = 2777;
					this.inclusiveOrExpression(0);
					}
					}
				}
				this.state = 2782;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 318, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public inclusiveOrExpression(): InclusiveOrExpressionContext;
	public inclusiveOrExpression(_p: number): InclusiveOrExpressionContext;
	//@RuleVersion(0)
	public inclusiveOrExpression(_p?: number): InclusiveOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: InclusiveOrExpressionContext = new InclusiveOrExpressionContext(this._ctx, _parentState);
		let _prevctx: InclusiveOrExpressionContext = _localctx;
		let _startState: number = 452;
		this.enterRecursionRule(_localctx, 452, Java9Parser.RULE_inclusiveOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2784;
			this.exclusiveOrExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2791;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 319, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new InclusiveOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_inclusiveOrExpression);
					this.state = 2786;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 2787;
					this.match(Java9Parser.BITOR);
					this.state = 2788;
					this.exclusiveOrExpression(0);
					}
					}
				}
				this.state = 2793;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 319, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public exclusiveOrExpression(): ExclusiveOrExpressionContext;
	public exclusiveOrExpression(_p: number): ExclusiveOrExpressionContext;
	//@RuleVersion(0)
	public exclusiveOrExpression(_p?: number): ExclusiveOrExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExclusiveOrExpressionContext = new ExclusiveOrExpressionContext(this._ctx, _parentState);
		let _prevctx: ExclusiveOrExpressionContext = _localctx;
		let _startState: number = 454;
		this.enterRecursionRule(_localctx, 454, Java9Parser.RULE_exclusiveOrExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2795;
			this.andExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2802;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 320, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExclusiveOrExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_exclusiveOrExpression);
					this.state = 2797;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 2798;
					this.match(Java9Parser.CARET);
					this.state = 2799;
					this.andExpression(0);
					}
					}
				}
				this.state = 2804;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 320, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public andExpression(): AndExpressionContext;
	public andExpression(_p: number): AndExpressionContext;
	//@RuleVersion(0)
	public andExpression(_p?: number): AndExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AndExpressionContext = new AndExpressionContext(this._ctx, _parentState);
		let _prevctx: AndExpressionContext = _localctx;
		let _startState: number = 456;
		this.enterRecursionRule(_localctx, 456, Java9Parser.RULE_andExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2806;
			this.equalityExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2813;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 321, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new AndExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_andExpression);
					this.state = 2808;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 2809;
					this.match(Java9Parser.BITAND);
					this.state = 2810;
					this.equalityExpression(0);
					}
					}
				}
				this.state = 2815;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 321, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public equalityExpression(): EqualityExpressionContext;
	public equalityExpression(_p: number): EqualityExpressionContext;
	//@RuleVersion(0)
	public equalityExpression(_p?: number): EqualityExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: EqualityExpressionContext = new EqualityExpressionContext(this._ctx, _parentState);
		let _prevctx: EqualityExpressionContext = _localctx;
		let _startState: number = 458;
		this.enterRecursionRule(_localctx, 458, Java9Parser.RULE_equalityExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2817;
			this.relationalExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2827;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 323, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2825;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 322, this._ctx) ) {
					case 1:
						{
						_localctx = new EqualityExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_equalityExpression);
						this.state = 2819;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 2820;
						this.match(Java9Parser.EQUAL);
						this.state = 2821;
						this.relationalExpression(0);
						}
						break;
					case 2:
						{
						_localctx = new EqualityExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_equalityExpression);
						this.state = 2822;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 2823;
						this.match(Java9Parser.NOTEQUAL);
						this.state = 2824;
						this.relationalExpression(0);
						}
						break;
					}
					}
				}
				this.state = 2829;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 323, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public relationalExpression(): RelationalExpressionContext;
	public relationalExpression(_p: number): RelationalExpressionContext;
	//@RuleVersion(0)
	public relationalExpression(_p?: number): RelationalExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, _parentState);
		let _prevctx: RelationalExpressionContext = _localctx;
		let _startState: number = 460;
		this.enterRecursionRule(_localctx, 460, Java9Parser.RULE_relationalExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2831;
			this.shiftExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2850;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 325, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2848;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 324, this._ctx) ) {
					case 1:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_relationalExpression);
						this.state = 2833;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 2834;
						this.match(Java9Parser.LT);
						this.state = 2835;
						this.shiftExpression(0);
						}
						break;
					case 2:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_relationalExpression);
						this.state = 2836;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 2837;
						this.match(Java9Parser.GT);
						this.state = 2838;
						this.shiftExpression(0);
						}
						break;
					case 3:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_relationalExpression);
						this.state = 2839;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 2840;
						this.match(Java9Parser.LE);
						this.state = 2841;
						this.shiftExpression(0);
						}
						break;
					case 4:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_relationalExpression);
						this.state = 2842;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 2843;
						this.match(Java9Parser.GE);
						this.state = 2844;
						this.shiftExpression(0);
						}
						break;
					case 5:
						{
						_localctx = new RelationalExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_relationalExpression);
						this.state = 2845;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 2846;
						this.match(Java9Parser.INSTANCEOF);
						this.state = 2847;
						this.referenceType();
						}
						break;
					}
					}
				}
				this.state = 2852;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 325, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public shiftExpression(): ShiftExpressionContext;
	public shiftExpression(_p: number): ShiftExpressionContext;
	//@RuleVersion(0)
	public shiftExpression(_p?: number): ShiftExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ShiftExpressionContext = new ShiftExpressionContext(this._ctx, _parentState);
		let _prevctx: ShiftExpressionContext = _localctx;
		let _startState: number = 462;
		this.enterRecursionRule(_localctx, 462, Java9Parser.RULE_shiftExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2854;
			this.additiveExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2871;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 327, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2869;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 326, this._ctx) ) {
					case 1:
						{
						_localctx = new ShiftExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_shiftExpression);
						this.state = 2856;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 2857;
						this.match(Java9Parser.LT);
						this.state = 2858;
						this.match(Java9Parser.LT);
						this.state = 2859;
						this.additiveExpression(0);
						}
						break;
					case 2:
						{
						_localctx = new ShiftExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_shiftExpression);
						this.state = 2860;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 2861;
						this.match(Java9Parser.GT);
						this.state = 2862;
						this.match(Java9Parser.GT);
						this.state = 2863;
						this.additiveExpression(0);
						}
						break;
					case 3:
						{
						_localctx = new ShiftExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_shiftExpression);
						this.state = 2864;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 2865;
						this.match(Java9Parser.GT);
						this.state = 2866;
						this.match(Java9Parser.GT);
						this.state = 2867;
						this.match(Java9Parser.GT);
						this.state = 2868;
						this.additiveExpression(0);
						}
						break;
					}
					}
				}
				this.state = 2873;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 327, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public additiveExpression(): AdditiveExpressionContext;
	public additiveExpression(_p: number): AdditiveExpressionContext;
	//@RuleVersion(0)
	public additiveExpression(_p?: number): AdditiveExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, _parentState);
		let _prevctx: AdditiveExpressionContext = _localctx;
		let _startState: number = 464;
		this.enterRecursionRule(_localctx, 464, Java9Parser.RULE_additiveExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2875;
			this.multiplicativeExpression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2885;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 329, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2883;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 328, this._ctx) ) {
					case 1:
						{
						_localctx = new AdditiveExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_additiveExpression);
						this.state = 2877;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 2878;
						this.match(Java9Parser.ADD);
						this.state = 2879;
						this.multiplicativeExpression(0);
						}
						break;
					case 2:
						{
						_localctx = new AdditiveExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_additiveExpression);
						this.state = 2880;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 2881;
						this.match(Java9Parser.SUB);
						this.state = 2882;
						this.multiplicativeExpression(0);
						}
						break;
					}
					}
				}
				this.state = 2887;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 329, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public multiplicativeExpression(): MultiplicativeExpressionContext;
	public multiplicativeExpression(_p: number): MultiplicativeExpressionContext;
	//@RuleVersion(0)
	public multiplicativeExpression(_p?: number): MultiplicativeExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, _parentState);
		let _prevctx: MultiplicativeExpressionContext = _localctx;
		let _startState: number = 466;
		this.enterRecursionRule(_localctx, 466, Java9Parser.RULE_multiplicativeExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2889;
			this.unaryExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2902;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 331, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2900;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 330, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_multiplicativeExpression);
						this.state = 2891;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 2892;
						this.match(Java9Parser.MUL);
						this.state = 2893;
						this.unaryExpression();
						}
						break;
					case 2:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_multiplicativeExpression);
						this.state = 2894;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 2895;
						this.match(Java9Parser.DIV);
						this.state = 2896;
						this.unaryExpression();
						}
						break;
					case 3:
						{
						_localctx = new MultiplicativeExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Java9Parser.RULE_multiplicativeExpression);
						this.state = 2897;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 2898;
						this.match(Java9Parser.MOD);
						this.state = 2899;
						this.unaryExpression();
						}
						break;
					}
					}
				}
				this.state = 2904;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 331, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 468, Java9Parser.RULE_unaryExpression);
		try {
			this.state = 2912;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Java9Parser.INC:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2905;
				this.preIncrementExpression();
				}
				break;
			case Java9Parser.DEC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2906;
				this.preDecrementExpression();
				}
				break;
			case Java9Parser.ADD:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2907;
				this.match(Java9Parser.ADD);
				this.state = 2908;
				this.unaryExpression();
				}
				break;
			case Java9Parser.SUB:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2909;
				this.match(Java9Parser.SUB);
				this.state = 2910;
				this.unaryExpression();
				}
				break;
			case Java9Parser.T__0:
			case Java9Parser.T__1:
			case Java9Parser.T__2:
			case Java9Parser.T__3:
			case Java9Parser.T__4:
			case Java9Parser.T__5:
			case Java9Parser.T__6:
			case Java9Parser.T__7:
			case Java9Parser.T__8:
			case Java9Parser.BOOLEAN:
			case Java9Parser.BYTE:
			case Java9Parser.CHAR:
			case Java9Parser.DOUBLE:
			case Java9Parser.FLOAT:
			case Java9Parser.INT:
			case Java9Parser.LONG:
			case Java9Parser.NEW:
			case Java9Parser.SHORT:
			case Java9Parser.SUPER:
			case Java9Parser.THIS:
			case Java9Parser.VOID:
			case Java9Parser.IntegerLiteral:
			case Java9Parser.FloatingPointLiteral:
			case Java9Parser.BooleanLiteral:
			case Java9Parser.CharacterLiteral:
			case Java9Parser.StringLiteral:
			case Java9Parser.NullLiteral:
			case Java9Parser.LPAREN:
			case Java9Parser.AT:
			case Java9Parser.BANG:
			case Java9Parser.TILDE:
			case Java9Parser.Identifier:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2911;
				this.unaryExpressionNotPlusMinus();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public preIncrementExpression(): PreIncrementExpressionContext {
		let _localctx: PreIncrementExpressionContext = new PreIncrementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 470, Java9Parser.RULE_preIncrementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2914;
			this.match(Java9Parser.INC);
			this.state = 2915;
			this.unaryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public preDecrementExpression(): PreDecrementExpressionContext {
		let _localctx: PreDecrementExpressionContext = new PreDecrementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 472, Java9Parser.RULE_preDecrementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2917;
			this.match(Java9Parser.DEC);
			this.state = 2918;
			this.unaryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext {
		let _localctx: UnaryExpressionNotPlusMinusContext = new UnaryExpressionNotPlusMinusContext(this._ctx, this.state);
		this.enterRule(_localctx, 474, Java9Parser.RULE_unaryExpressionNotPlusMinus);
		try {
			this.state = 2926;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 333, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2920;
				this.postfixExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2921;
				this.match(Java9Parser.TILDE);
				this.state = 2922;
				this.unaryExpression();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2923;
				this.match(Java9Parser.BANG);
				this.state = 2924;
				this.unaryExpression();
				}
				break;
			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2925;
				this.castExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public postfixExpression(): PostfixExpressionContext {
		let _localctx: PostfixExpressionContext = new PostfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 476, Java9Parser.RULE_postfixExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2930;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 334, this._ctx) ) {
			case 1:
				{
				this.state = 2928;
				this.primary();
				}
				break;
			case 2:
				{
				this.state = 2929;
				this.expressionName();
				}
				break;
			}
			this.state = 2936;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 336, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 2934;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Java9Parser.INC:
						{
						this.state = 2932;
						this.postIncrementExpression_lf_postfixExpression();
						}
						break;
					case Java9Parser.DEC:
						{
						this.state = 2933;
						this.postDecrementExpression_lf_postfixExpression();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 2938;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 336, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public postIncrementExpression(): PostIncrementExpressionContext {
		let _localctx: PostIncrementExpressionContext = new PostIncrementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 478, Java9Parser.RULE_postIncrementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2939;
			this.postfixExpression();
			this.state = 2940;
			this.match(Java9Parser.INC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public postIncrementExpression_lf_postfixExpression(): PostIncrementExpression_lf_postfixExpressionContext {
		let _localctx: PostIncrementExpression_lf_postfixExpressionContext = new PostIncrementExpression_lf_postfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 480, Java9Parser.RULE_postIncrementExpression_lf_postfixExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2942;
			this.match(Java9Parser.INC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public postDecrementExpression(): PostDecrementExpressionContext {
		let _localctx: PostDecrementExpressionContext = new PostDecrementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 482, Java9Parser.RULE_postDecrementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2944;
			this.postfixExpression();
			this.state = 2945;
			this.match(Java9Parser.DEC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public postDecrementExpression_lf_postfixExpression(): PostDecrementExpression_lf_postfixExpressionContext {
		let _localctx: PostDecrementExpression_lf_postfixExpressionContext = new PostDecrementExpression_lf_postfixExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 484, Java9Parser.RULE_postDecrementExpression_lf_postfixExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2947;
			this.match(Java9Parser.DEC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public castExpression(): CastExpressionContext {
		let _localctx: CastExpressionContext = new CastExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 486, Java9Parser.RULE_castExpression);
		let _la: number;
		try {
			this.state = 2976;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 339, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2949;
				this.match(Java9Parser.LPAREN);
				this.state = 2950;
				this.primitiveType();
				this.state = 2951;
				this.match(Java9Parser.RPAREN);
				this.state = 2952;
				this.unaryExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2954;
				this.match(Java9Parser.LPAREN);
				this.state = 2955;
				this.referenceType();
				this.state = 2959;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.BITAND) {
					{
					{
					this.state = 2956;
					this.additionalBound();
					}
					}
					this.state = 2961;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2962;
				this.match(Java9Parser.RPAREN);
				this.state = 2963;
				this.unaryExpressionNotPlusMinus();
				}
				break;
			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2965;
				this.match(Java9Parser.LPAREN);
				this.state = 2966;
				this.referenceType();
				this.state = 2970;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Java9Parser.BITAND) {
					{
					{
					this.state = 2967;
					this.additionalBound();
					}
					}
					this.state = 2972;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2973;
				this.match(Java9Parser.RPAREN);
				this.state = 2974;
				this.lambdaExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	//@RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 488, Java9Parser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2978;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Java9Parser.T__0) | (1 << Java9Parser.T__1) | (1 << Java9Parser.T__2) | (1 << Java9Parser.T__3) | (1 << Java9Parser.T__4) | (1 << Java9Parser.T__5) | (1 << Java9Parser.T__6) | (1 << Java9Parser.T__7) | (1 << Java9Parser.T__8))) !== 0) || _la === Java9Parser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 25:
			return this.moduleName_sempred(_localctx as ModuleNameContext, predIndex);
		case 26:
			return this.packageName_sempred(_localctx as PackageNameContext, predIndex);
		case 28:
			return this.packageOrTypeName_sempred(_localctx as PackageOrTypeNameContext, predIndex);
		case 31:
			return this.ambiguousName_sempred(_localctx as AmbiguousNameContext, predIndex);
		case 224:
			return this.conditionalOrExpression_sempred(_localctx as ConditionalOrExpressionContext, predIndex);
		case 225:
			return this.conditionalAndExpression_sempred(_localctx as ConditionalAndExpressionContext, predIndex);
		case 226:
			return this.inclusiveOrExpression_sempred(_localctx as InclusiveOrExpressionContext, predIndex);
		case 227:
			return this.exclusiveOrExpression_sempred(_localctx as ExclusiveOrExpressionContext, predIndex);
		case 228:
			return this.andExpression_sempred(_localctx as AndExpressionContext, predIndex);
		case 229:
			return this.equalityExpression_sempred(_localctx as EqualityExpressionContext, predIndex);
		case 230:
			return this.relationalExpression_sempred(_localctx as RelationalExpressionContext, predIndex);
		case 231:
			return this.shiftExpression_sempred(_localctx as ShiftExpressionContext, predIndex);
		case 232:
			return this.additiveExpression_sempred(_localctx as AdditiveExpressionContext, predIndex);
		case 233:
			return this.multiplicativeExpression_sempred(_localctx as MultiplicativeExpressionContext, predIndex);
		}
		return true;
	}
	private moduleName_sempred(_localctx: ModuleNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private packageName_sempred(_localctx: PackageNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private packageOrTypeName_sempred(_localctx: PackageOrTypeNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private ambiguousName_sempred(_localctx: AmbiguousNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private conditionalOrExpression_sempred(_localctx: ConditionalOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private conditionalAndExpression_sempred(_localctx: ConditionalAndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private inclusiveOrExpression_sempred(_localctx: InclusiveOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private exclusiveOrExpression_sempred(_localctx: ExclusiveOrExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private andExpression_sempred(_localctx: AndExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equalityExpression_sempred(_localctx: EqualityExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.precpred(this._ctx, 2);
		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relationalExpression_sempred(_localctx: RelationalExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 5);
		case 12:
			return this.precpred(this._ctx, 4);
		case 13:
			return this.precpred(this._ctx, 3);
		case 14:
			return this.precpred(this._ctx, 2);
		case 15:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private shiftExpression_sempred(_localctx: ShiftExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 16:
			return this.precpred(this._ctx, 3);
		case 17:
			return this.precpred(this._ctx, 2);
		case 18:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additiveExpression_sempred(_localctx: AdditiveExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return this.precpred(this._ctx, 2);
		case 20:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private multiplicativeExpression_sempred(_localctx: MultiplicativeExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 21:
			return this.precpred(this._ctx, 3);
		case 22:
			return this.precpred(this._ctx, 2);
		case 23:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 6;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03x\u0BA7\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2" +
		"\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7" +
		"\x04\xC8\t\xC8\x04\xC9\t\xC9\x04\xCA\t\xCA\x04\xCB\t\xCB\x04\xCC\t\xCC" +
		"\x04\xCD\t\xCD\x04\xCE\t\xCE\x04\xCF\t\xCF\x04\xD0\t\xD0\x04\xD1\t\xD1" +
		"\x04\xD2\t\xD2\x04\xD3\t\xD3\x04\xD4\t\xD4\x04\xD5\t\xD5\x04\xD6\t\xD6" +
		"\x04\xD7\t\xD7\x04\xD8\t\xD8\x04\xD9\t\xD9\x04\xDA\t\xDA\x04\xDB\t\xDB" +
		"\x04\xDC\t\xDC\x04\xDD\t\xDD\x04\xDE\t\xDE\x04\xDF\t\xDF\x04\xE0\t\xE0" +
		"\x04\xE1\t\xE1\x04\xE2\t\xE2\x04\xE3\t\xE3\x04\xE4\t\xE4\x04\xE5\t\xE5" +
		"\x04\xE6\t\xE6\x04\xE7\t\xE7\x04\xE8\t\xE8\x04\xE9\t\xE9\x04\xEA\t\xEA" +
		"\x04\xEB\t\xEB\x04\xEC\t\xEC\x04\xED\t\xED\x04\xEE\t\xEE\x04\xEF\t\xEF" +
		"\x04\xF0\t\xF0\x04\xF1\t\xF1\x04\xF2\t\xF2\x04\xF3\t\xF3\x04\xF4\t\xF4" +
		"\x04\xF5\t\xF5\x04\xF6\t\xF6\x03\x02\x03\x02\x03\x03\x07\x03\u01F0\n\x03" +
		"\f\x03\x0E\x03\u01F3\v\x03\x03\x03\x03\x03\x07\x03\u01F7\n\x03\f\x03\x0E" +
		"\x03\u01FA\v\x03\x03\x03\x05\x03\u01FD\n\x03\x03\x04\x03\x04\x05\x04\u0201" +
		"\n\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\u020A\n\x07\x03\b\x03\b\x05\b\u020E\n\b\x03\b\x03\b\x07\b\u0212\n\b\f" +
		"\b\x0E\b\u0215\v\b\x03\t\x07\t\u0218\n\t\f\t\x0E\t\u021B\v\t\x03\t\x03" +
		"\t\x05\t\u021F\n\t\x03\t\x03\t\x03\t\x07\t\u0224\n\t\f\t\x0E\t\u0227\v" +
		"\t\x03\t\x03\t\x05\t\u022B\n\t\x05\t\u022D\n\t\x03\n\x03\n\x07\n\u0231" +
		"\n\n\f\n\x0E\n\u0234\v\n\x03\n\x03\n\x05\n\u0238\n\n\x03\v\x07\v\u023B" +
		"\n\v\f\v\x0E\v\u023E\v\v\x03\v\x03\v\x05\v\u0242\n\v\x03\f\x03\f\x03\r" +
		"\x03\r\x03\x0E\x03\x0E\x03\x0F\x07\x0F\u024B\n\x0F\f\x0F\x0E\x0F\u024E" +
		"\v\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x05\x10\u025B\n\x10\x03\x11\x07\x11\u025E\n\x11" +
		"\f\x11\x0E\x11\u0261\v\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0266\n\x11" +
		"\f\x11\x0E\x11\u0269\v\x11\x03\x11\x03\x11\x07\x11\u026D\n\x11\f\x11\x0E" +
		"\x11\u0270\v\x11\x03\x12\x07\x12\u0273\n\x12\f\x12\x0E\x12\u0276\v\x12" +
		"\x03\x12\x03\x12\x05\x12\u027A\n\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x07\x14\u0283\n\x14\f\x14\x0E\x14\u0286\v\x14\x05" +
		"\x14\u0288\n\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x17\x03\x17\x03\x17\x07\x17\u0294\n\x17\f\x17\x0E\x17\u0297\v\x17" +
		"\x03\x18\x03\x18\x05\x18\u029B\n\x18\x03\x19\x07\x19\u029E\n\x19\f\x19" +
		"\x0E\x19\u02A1\v\x19\x03\x19\x03\x19\x05\x19\u02A5\n\x19\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x05\x1A\u02AB\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x07\x1B\u02B3\n\x1B\f\x1B\x0E\x1B\u02B6\v\x1B\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u02BE\n\x1C\f\x1C\x0E\x1C" +
		"\u02C1\v\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u02C8\n\x1D" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u02D0\n\x1E\f" +
		"\x1E\x0E\x1E\u02D3\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F" +
		"\u02DA\n\x1F\x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x07!\u02E4\n!\f!" +
		"\x0E!\u02E7\v!\x03\"\x03\"\x05\"\u02EB\n\"\x03#\x05#\u02EE\n#\x03#\x07" +
		"#\u02F1\n#\f#\x0E#\u02F4\v#\x03#\x07#\u02F7\n#\f#\x0E#\u02FA\v#\x03#\x03" +
		"#\x03$\x07$\u02FF\n$\f$\x0E$\u0302\v$\x03$\x03$\x03%\x07%\u0307\n%\f%" +
		"\x0E%\u030A\v%\x03%\x03%\x03%\x03%\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x05" +
		"\'\u0316\n\'\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03*\x03" +
		"*\x03*\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03" +
		",\x03,\x05,\u0333\n,\x03-\x07-\u0336\n-\f-\x0E-\u0339\v-\x03-\x05-\u033C" +
		"\n-\x03-\x03-\x03-\x03-\x07-\u0342\n-\f-\x0E-\u0345\v-\x03-\x03-\x03." +
		"\x03.\x07.\u034B\n.\f.\x0E.\u034E\v.\x03.\x03.\x03.\x03.\x03.\x03.\x03" +
		".\x03.\x03.\x07.\u0359\n.\f.\x0E.\u035C\v.\x05.\u035E\n.\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x07.\u0368\n.\f.\x0E.\u036B\v.\x05.\u036D\n" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x07.\u037B" +
		"\n.\f.\x0E.\u037E\v.\x03.\x03.\x05.\u0382\n.\x03/\x03/\x030\x030\x050" +
		"\u0388\n0\x031\x071\u038B\n1\f1\x0E1\u038E\v1\x031\x031\x031\x051\u0393" +
		"\n1\x031\x051\u0396\n1\x031\x051\u0399\n1\x031\x031\x032\x032\x032\x03" +
		"2\x032\x032\x032\x032\x052\u03A5\n2\x033\x033\x033\x033\x034\x034\x03" +
		"4\x074\u03AE\n4\f4\x0E4\u03B1\v4\x035\x035\x035\x036\x036\x036\x037\x03" +
		"7\x037\x077\u03BC\n7\f7\x0E7\u03BF\v7\x038\x038\x078\u03C3\n8\f8\x0E8" +
		"\u03C6\v8\x038\x038\x039\x039\x039\x039\x059\u03CE\n9\x03:\x03:\x03:\x03" +
		":\x03:\x05:\u03D5\n:\x03;\x07;\u03D8\n;\f;\x0E;\u03DB\v;\x03;\x03;\x03" +
		";\x03;\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u03E9\n<\x03=\x03" +
		"=\x03=\x07=\u03EE\n=\f=\x0E=\u03F1\v=\x03>\x03>\x03>\x05>\u03F6\n>\x03" +
		"?\x03?\x05?\u03FA\n?\x03@\x03@\x05@\u03FE\n@\x03A\x03A\x05A\u0402\nA\x03" +
		"B\x03B\x05B\u0406\nB\x03C\x03C\x03C\x05C\u040B\nC\x03D\x03D\x05D\u040F" +
		"\nD\x03D\x03D\x07D\u0413\nD\fD\x0ED\u0416\vD\x03E\x03E\x05E\u041A\nE\x03" +
		"E\x03E\x03E\x07E\u041F\nE\fE\x0EE\u0422\vE\x03E\x03E\x05E\u0426\nE\x05" +
		"E\u0428\nE\x03F\x03F\x07F\u042C\nF\fF\x0EF\u042F\vF\x03F\x03F\x05F\u0433" +
		"\nF\x03G\x03G\x05G\u0437\nG\x03H\x03H\x03I\x03I\x03J\x03J\x03K\x03K\x03" +
		"L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u044A\nL\x03M\x07M\u044D" +
		"\nM\fM\x0EM\u0450\vM\x03M\x03M\x03M\x03N\x03N\x03N\x03N\x03N\x03N\x03" +
		"N\x03N\x03N\x03N\x05N\u045F\nN\x03O\x03O\x03O\x05O\u0464\nO\x03O\x03O" +
		"\x07O\u0468\nO\fO\x0EO\u046B\vO\x03O\x03O\x03O\x05O\u0470\nO\x05O\u0472" +
		"\nO\x03P\x03P\x05P\u0476\nP\x03Q\x03Q\x03Q\x05Q\u047B\nQ\x03Q\x03Q\x05" +
		"Q\u047F\nQ\x03R\x03R\x03R\x03R\x03R\x03R\x05R\u0487\nR\x03S\x03S\x03S" +
		"\x07S\u048C\nS\fS\x0ES\u048F\vS\x03S\x03S\x03S\x07S\u0494\nS\fS\x0ES\u0497" +
		"\vS\x05S\u0499\nS\x03T\x07T\u049C\nT\fT\x0ET\u049F\vT\x03T\x03T\x03T\x03" +
		"U\x03U\x05U\u04A6\nU\x03V\x07V\u04A9\nV\fV\x0EV\u04AC\vV\x03V\x03V\x07" +
		"V\u04B0\nV\fV\x0EV\u04B3\vV\x03V\x03V\x03V\x03V\x05V\u04B9\nV\x03W\x07" +
		"W\u04BC\nW\fW\x0EW\u04BF\vW\x03W\x03W\x03W\x03W\x05W\u04C5\nW\x03W\x03" +
		"W\x03X\x03X\x03X\x03Y\x03Y\x03Y\x07Y\u04CF\nY\fY\x0EY\u04D2\vY\x03Z\x03" +
		"Z\x05Z\u04D6\nZ\x03[\x03[\x05[\u04DA\n[\x03\\\x03\\\x03]\x03]\x03]\x03" +
		"^\x07^\u04E2\n^\f^\x0E^\u04E5\v^\x03^\x03^\x05^\u04E9\n^\x03^\x03^\x03" +
		"_\x03_\x03_\x03_\x05_\u04F1\n_\x03`\x05`\u04F4\n`\x03`\x03`\x03`\x05`" +
		"\u04F9\n`\x03`\x03`\x03a\x03a\x03b\x03b\x05b\u0501\nb\x03b\x05b\u0504" +
		"\nb\x03b\x03b\x03c\x05c\u0509\nc\x03c\x03c\x03c\x05c\u050E\nc\x03c\x03" +
		"c\x03c\x05c\u0513\nc\x03c\x03c\x03c\x05c\u0518\nc\x03c\x03c\x03c\x03c" +
		"\x03c\x05c\u051F\nc\x03c\x03c\x03c\x05c\u0524\nc\x03c\x03c\x03c\x03c\x03" +
		"c\x03c\x05c\u052C\nc\x03c\x03c\x03c\x05c\u0531\nc\x03c\x03c\x03c\x05c" +
		"\u0536\nc\x03d\x07d\u0539\nd\fd\x0Ed\u053C\vd\x03d\x03d\x03d\x05d\u0541" +
		"\nd\x03d\x03d\x03e\x03e\x05e\u0547\ne\x03e\x05e\u054A\ne\x03e\x05e\u054D" +
		"\ne\x03e\x03e\x03f\x03f\x03f\x07f\u0554\nf\ff\x0Ef\u0557\vf\x03g\x07g" +
		"\u055A\ng\fg\x0Eg\u055D\vg\x03g\x03g\x03g\x05g\u0562\ng\x03g\x05g\u0565" +
		"\ng\x03g\x05g\u0568\ng\x03h\x03h\x03i\x03i\x07i\u056E\ni\fi\x0Ei\u0571" +
		"\vi\x03j\x03j\x05j\u0575\nj\x03k\x07k\u0578\nk\fk\x0Ek\u057B\vk\x03k\x03" +
		"k\x03k\x05k\u0580\nk\x03k\x05k\u0583\nk\x03k\x03k\x03l\x03l\x03l\x03l" +
		"\x03l\x03l\x03l\x05l\u058E\nl\x03m\x03m\x03m\x03n\x03n\x07n\u0595\nn\f" +
		"n\x0En\u0598\vn\x03n\x03n\x03o\x03o\x03o\x03o\x03o\x05o\u05A1\no\x03p" +
		"\x07p\u05A4\np\fp\x0Ep\u05A7\vp\x03p\x03p\x03p\x03p\x03q\x03q\x03q\x03" +
		"q\x05q\u05B1\nq\x03r\x07r\u05B4\nr\fr\x0Er\u05B7\vr\x03r\x03r\x03r\x03" +
		"s\x03s\x03s\x03s\x03s\x03s\x03s\x05s\u05C3\ns\x03t\x07t\u05C6\nt\ft\x0E" +
		"t\u05C9\vt\x03t\x03t\x03t\x03t\x03t\x03u\x03u\x07u\u05D2\nu\fu\x0Eu\u05D5" +
		"\vu\x03u\x03u\x03v\x03v\x03v\x03v\x03v\x05v\u05DE\nv\x03w\x07w\u05E1\n" +
		"w\fw\x0Ew\u05E4\vw\x03w\x03w\x03w\x03w\x03w\x05w\u05EB\nw\x03w\x05w\u05EE" +
		"\nw\x03w\x03w\x03x\x03x\x03x\x05x\u05F5\nx\x03y\x03y\x03y\x03z\x03z\x03" +
		"z\x05z\u05FD\nz\x03{\x03{\x03{\x03{\x05{\u0603\n{\x03{\x03{\x03|\x03|" +
		"\x03|\x07|\u060A\n|\f|\x0E|\u060D\v|\x03}\x03}\x03}\x03}\x03~\x03~\x03" +
		"~\x05~\u0616\n~\x03\x7F\x03\x7F\x05\x7F\u061A\n\x7F\x03\x7F\x05\x7F\u061D" +
		"\n\x7F\x03\x7F\x03\x7F\x03\x80\x03\x80\x03\x80\x07\x80\u0624\n\x80\f\x80" +
		"\x0E\x80\u0627\v\x80\x03\x81\x03\x81\x03\x81\x03\x82\x03\x82\x03\x82\x03" +
		"\x82\x03\x82\x03\x82\x03\x83\x03\x83\x05\x83\u0634\n\x83\x03\x83\x05\x83" +
		"\u0637\n\x83\x03\x83\x03\x83\x03\x84\x03\x84\x03\x84\x07\x84\u063E\n\x84" +
		"\f\x84\x0E\x84\u0641\v\x84\x03\x85\x03\x85\x05\x85\u0645\n\x85\x03\x85" +
		"\x03\x85\x03\x86\x06\x86\u064A\n\x86\r\x86\x0E\x86\u064B\x03\x87\x03\x87" +
		"\x03\x87\x05\x87\u0651\n\x87\x03\x88\x03\x88\x03\x88\x03\x89\x07\x89\u0657" +
		"\n\x89\f\x89\x0E\x89\u065A\v\x89\x03\x89\x03\x89\x03\x89\x03\x8A\x03\x8A" +
		"\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u0665\n\x8A\x03\x8B\x03\x8B\x03" +
		"\x8B\x03\x8B\x03\x8B\x05\x8B\u066C\n\x8B\x03\x8C\x03\x8C\x03\x8C\x03\x8C" +
		"\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x05\x8C" +
		"\u067A\n\x8C\x03\x8D\x03\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8F\x03" +
		"\x8F\x03\x8F\x03\x8F\x03\x90\x03\x90\x03\x90\x03\x91\x03\x91\x03\x91\x03" +
		"\x91\x03\x91\x03\x91\x03\x91\x05\x91\u0690\n\x91\x03\x92\x03\x92\x03\x92" +
		"\x03\x92\x03\x92\x03\x92\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93\x03\x93" +
		"\x03\x93\x03\x93\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94" +
		"\x03\x94\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95" +
		"\x03\x95\x03\x95\x05\x95\u06B2\n\x95\x03\x96\x03\x96\x03\x96\x03\x96\x03" +
		"\x96\x03\x96\x03\x97\x03\x97\x07\x97\u06BC\n\x97\f\x97\x0E\x97\u06BF\v" +
		"\x97\x03\x97\x07\x97\u06C2\n\x97\f\x97\x0E\x97\u06C5\v\x97\x03\x97\x03" +
		"\x97\x03\x98\x03\x98\x03\x98\x03\x99\x06\x99\u06CD\n\x99\r\x99\x0E\x99" +
		"\u06CE\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A\x03\x9A" +
		"\x03\x9A\x03\x9A\x05\x9A\u06DB\n\x9A\x03\x9B\x03\x9B\x03\x9C\x03\x9C\x03" +
		"\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x03" +
		"\x9D\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03" +
		"\x9F\x03\x9F\x05\x9F\u06F5\n\x9F\x03\xA0\x03\xA0\x05\xA0\u06F9\n\xA0\x03" +
		"\xA1\x03\xA1\x03\xA1\x05\xA1\u06FE\n\xA1\x03\xA1\x03\xA1\x05\xA1\u0702" +
		"\n\xA1\x03\xA1\x03\xA1\x05\xA1\u0706\n\xA1\x03\xA1\x03\xA1\x03\xA1\x03" +
		"\xA2\x03\xA2\x03\xA2\x05\xA2\u070E\n\xA2\x03\xA2\x03\xA2\x05\xA2\u0712" +
		"\n\xA2\x03\xA2\x03\xA2\x05\xA2\u0716\n\xA2\x03\xA2\x03\xA2\x03\xA2\x03" +
		"\xA3\x03\xA3\x05\xA3\u071D\n\xA3\x03\xA4\x03\xA4\x03\xA5\x03\xA5\x03\xA5" +
		"\x07\xA5\u0724\n\xA5\f\xA5\x0E\xA5\u0727\v\xA5\x03\xA6\x03\xA6\x03\xA6" +
		"\x07\xA6\u072C\n\xA6\f\xA6\x0E\xA6\u072F\v\xA6\x03\xA6\x03\xA6\x03\xA6" +
		"\x03\xA6\x03\xA6\x03\xA6\x03\xA6\x03\xA7\x03\xA7\x03\xA7\x07\xA7\u073B" +
		"\n\xA7\f\xA7\x0E\xA7\u073E\v\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7\x03\xA7" +
		"\x03\xA7\x03\xA7\x03\xA8\x03\xA8\x05\xA8\u0749\n\xA8\x03\xA8\x03\xA8\x03" +
		"\xA9\x03\xA9\x05\xA9\u074F\n\xA9\x03\xA9\x03\xA9\x03\xAA\x03\xAA\x05\xAA" +
		"\u0755\n\xAA\x03\xAA\x03\xAA\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAC\x03" +
		"\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAC\x03\xAD\x03\xAD\x03\xAD\x03\xAD\x03" +
		"\xAD\x03\xAD\x03\xAD\x05\xAD\u076A\n\xAD\x03\xAD\x03\xAD\x03\xAD\x05\xAD" +
		"\u076F\n\xAD\x03\xAE\x06\xAE\u0772\n\xAE\r\xAE\x0E\xAE\u0773\x03\xAF\x03" +
		"\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xAF\x03\xB0\x07\xB0\u077D\n\xB0\f\xB0" +
		"\x0E\xB0\u0780\v\xB0\x03\xB0\x03\xB0\x03\xB0\x03\xB1\x03\xB1\x03\xB1\x07" +
		"\xB1\u0788\n\xB1\f\xB1\x0E\xB1\u078B\v\xB1\x03\xB2\x03\xB2\x03\xB2\x03" +
		"\xB3\x03\xB3\x03\xB3\x03\xB3\x05\xB3\u0794\n\xB3\x03\xB3\x05\xB3\u0797" +
		"\n\xB3\x03\xB4\x03\xB4\x03\xB4\x05\xB4\u079C\n\xB4\x03\xB4\x03\xB4\x03" +
		"\xB5\x03\xB5\x03\xB5\x07\xB5\u07A3\n\xB5\f\xB5\x0E\xB5\u07A6\v\xB5\x03" +
		"\xB6\x07\xB6\u07A9\n\xB6\f\xB6\x0E\xB6\u07AC\v\xB6\x03\xB6\x03\xB6\x03" +
		"\xB6\x03\xB6\x03\xB6\x03\xB6\x05\xB6\u07B4\n\xB6\x03\xB7\x03\xB7\x05\xB7" +
		"\u07B8\n\xB7\x03\xB8\x03\xB8\x05\xB8\u07BC\n\xB8\x03\xB8\x07\xB8\u07BF" +
		"\n\xB8\f\xB8\x0E\xB8\u07C2\v\xB8\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9" +
		"\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9" +
		"\x03\xB9\x03\xB9\x05\xB9\u07D4\n\xB9\x03\xBA\x03\xBA\x03\xBB\x03\xBB\x03" +
		"\xBB\x03\xBB\x07\xBB\u07DC\n\xBB\f\xBB\x0E\xBB\u07DF\v\xBB\x03\xBB\x03" +
		"\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03" +
		"\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x05" +
		"\xBB\u07F4\n\xBB\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x05\xBC\u07FB" +
		"\n\xBC\x03\xBD\x03\xBD\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x05\xBE\u0803\n" +
		"\xBE\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x07\xBF\u0809\n\xBF\f\xBF\x0E\xBF" +
		"\u080C\v\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x07\xBF\u0814" +
		"\n\xBF\f\xBF\x0E\xBF\u0817\v\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF" +
		"\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF" +
		"\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x03\xBF\x05\xBF\u082D\n\xBF\x03" +
		"\xC0\x03\xC0\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x07\xC1\u0835\n\xC1\f\xC1" +
		"\x0E\xC1\u0838\v\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x07" +
		"\xC1\u0840\n\xC1\f\xC1\x0E\xC1\u0843\v\xC1\x03\xC1\x03\xC1\x03\xC1\x03" +
		"\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x03" +
		"\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x03\xC1\x05\xC1\u0858\n\xC1" +
		"\x03\xC2\x03\xC2\x03\xC2\x05\xC2\u085D\n\xC2\x03\xC2\x03\xC2\x07\xC2\u0861" +
		"\n\xC2\f\xC2\x0E\xC2\u0864\v\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2" +
		"\x05\xC2\u086B\n\xC2\x03\xC3\x03\xC3\x05\xC3\u086F\n\xC3\x03\xC3\x07\xC3" +
		"\u0872\n\xC3\f\xC3\x0E\xC3\u0875\v\xC3\x03\xC3\x03\xC3\x03\xC3\x07\xC3" +
		"\u087A\n\xC3\f\xC3\x0E\xC3\u087D\v\xC3\x03\xC3\x07\xC3\u0880\n\xC3\f\xC3" +
		"\x0E\xC3\u0883\v\xC3\x03\xC3\x05\xC3\u0886\n\xC3\x03\xC3\x03\xC3\x05\xC3" +
		"\u088A\n\xC3\x03\xC3\x03\xC3\x05\xC3\u088E\n\xC3\x03\xC3\x03\xC3\x03\xC3" +
		"\x03\xC3\x05\xC3\u0894\n\xC3\x03\xC3\x07\xC3\u0897\n\xC3\f\xC3\x0E\xC3" +
		"\u089A\v\xC3\x03\xC3\x03\xC3\x05\xC3\u089E\n\xC3\x03\xC3\x03\xC3\x05\xC3" +
		"\u08A2\n\xC3\x03\xC3\x03\xC3\x05\xC3\u08A6\n\xC3\x03\xC3\x03\xC3\x03\xC3" +
		"\x03\xC3\x05\xC3\u08AC\n\xC3\x03\xC3\x07\xC3\u08AF\n\xC3\f\xC3\x0E\xC3" +
		"\u08B2\v\xC3\x03\xC3\x03\xC3\x05\xC3\u08B6\n\xC3\x03\xC3\x03\xC3\x05\xC3" +
		"\u08BA\n\xC3\x03\xC3\x03\xC3\x05\xC3\u08BE\n\xC3\x05\xC3\u08C0\n\xC3\x03" +
		"\xC4\x03\xC4\x03\xC4\x05\xC4\u08C5\n\xC4\x03\xC4\x07\xC4\u08C8\n\xC4\f" +
		"\xC4\x0E\xC4\u08CB\v\xC4\x03\xC4\x03\xC4\x05\xC4\u08CF\n\xC4\x03\xC4\x03" +
		"\xC4\x05\xC4\u08D3\n\xC4\x03\xC4\x03\xC4\x05\xC4\u08D7\n\xC4\x03\xC5\x03" +
		"\xC5\x05\xC5\u08DB\n\xC5\x03\xC5\x07\xC5\u08DE\n\xC5\f\xC5\x0E\xC5\u08E1" +
		"\v\xC5\x03\xC5\x03\xC5\x03\xC5\x07\xC5\u08E6\n\xC5\f\xC5\x0E\xC5\u08E9" +
		"\v\xC5\x03\xC5\x07\xC5\u08EC\n\xC5\f\xC5\x0E\xC5\u08EF\v\xC5\x03\xC5\x05" +
		"\xC5\u08F2\n\xC5\x03\xC5\x03\xC5\x05\xC5\u08F6\n\xC5\x03\xC5\x03\xC5\x05" +
		"\xC5\u08FA\n\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x05\xC5\u0900\n\xC5\x03" +
		"\xC5\x07\xC5\u0903\n\xC5\f\xC5\x0E\xC5\u0906\v\xC5\x03\xC5\x03\xC5\x05" +
		"\xC5\u090A\n\xC5\x03\xC5\x03\xC5\x05\xC5\u090E\n\xC5\x03\xC5\x03\xC5\x05" +
		"\xC5\u0912\n\xC5\x05";
	private static readonly _serializedATNSegment1: string =
		"\xC5\u0914\n\xC5\x03\xC6\x03\xC6\x03\xC6\x05\xC6\u0919\n\xC6\x03\xC7\x03" +
		"\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x03\xC7\x03" +
		"\xC7\x03\xC7\x03\xC7\x05\xC7\u0928\n\xC7\x03\xC8\x03\xC8\x03\xC8\x03\xC9" +
		"\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x03\xC9\x05\xC9" +
		"\u0936\n\xC9\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA\x03" +
		"\xCA\x03\xCA\x03\xCA\x05\xCA\u0942\n\xCA\x03\xCA\x03\xCA\x03\xCA\x03\xCA" +
		"\x03\xCA\x07\xCA\u0949\n\xCA\f\xCA\x0E\xCA\u094C\v\xCA\x03\xCB\x03\xCB" +
		"\x03\xCB\x03\xCB\x03\xCB\x03\xCB\x03\xCB\x03\xCB\x03\xCB\x03\xCB\x07\xCB" +
		"\u0958\n\xCB\f\xCB\x0E\xCB\u095B\v\xCB\x03\xCC\x03\xCC\x03\xCC\x03\xCC" +
		"\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x05\xCC\u0967\n\xCC\x03" +
		"\xCC\x03\xCC\x03\xCC\x03\xCC\x03\xCC\x07\xCC\u096E\n\xCC\f\xCC\x0E\xCC" +
		"\u0971\v\xCC\x03\xCD\x03\xCD\x03\xCD\x05\xCD\u0976\n\xCD\x03\xCD\x03\xCD" +
		"\x03\xCD\x03\xCD\x03\xCD\x05\xCD\u097D\n\xCD\x03\xCD\x03\xCD\x03\xCD\x05" +
		"\xCD\u0982\n\xCD\x03\xCD\x03\xCD\x03\xCD\x03\xCD\x03\xCD\x05\xCD\u0989" +
		"\n\xCD\x03\xCD\x03\xCD\x03\xCD\x05\xCD\u098E\n\xCD\x03\xCD\x03\xCD\x03" +
		"\xCD\x03\xCD\x03\xCD\x05\xCD\u0995\n\xCD\x03\xCD\x03\xCD\x03\xCD\x05\xCD" +
		"\u099A\n\xCD\x03\xCD\x03\xCD\x03\xCD\x03\xCD\x03\xCD\x05\xCD\u09A1\n\xCD" +
		"\x03\xCD\x03\xCD\x03\xCD\x05\xCD\u09A6\n\xCD\x03\xCD\x03\xCD\x03\xCD\x03" +
		"\xCD\x03\xCD\x03\xCD\x03\xCD\x05\xCD\u09AF\n\xCD\x03\xCD\x03\xCD\x03\xCD" +
		"\x05\xCD\u09B4\n\xCD\x03\xCD\x03\xCD\x05\xCD\u09B8\n\xCD\x03\xCE\x03\xCE" +
		"\x05\xCE\u09BC\n\xCE\x03\xCE\x03\xCE\x03\xCE\x05\xCE\u09C1\n\xCE\x03\xCE" +
		"\x03\xCE\x03\xCF\x03\xCF\x03\xCF\x05\xCF\u09C8\n\xCF\x03\xCF\x03\xCF\x03" +
		"\xCF\x03\xCF\x03\xCF\x05\xCF\u09CF\n\xCF\x03\xCF\x03\xCF\x03\xCF\x05\xCF" +
		"\u09D4\n\xCF\x03\xCF\x03\xCF\x03\xCF\x03\xCF\x03\xCF\x05\xCF\u09DB\n\xCF" +
		"\x03\xCF\x03\xCF\x03\xCF\x05\xCF\u09E0\n\xCF\x03\xCF\x03\xCF\x03\xCF\x03" +
		"\xCF\x03\xCF\x05\xCF\u09E7\n\xCF\x03\xCF\x03\xCF\x03\xCF\x05\xCF\u09EC" +
		"\n\xCF\x03\xCF\x03\xCF\x03\xCF\x03\xCF\x03\xCF\x03\xCF\x03\xCF\x05\xCF" +
		"\u09F5\n\xCF\x03\xCF\x03\xCF\x03\xCF\x05\xCF\u09FA\n\xCF\x03\xCF\x03\xCF" +
		"\x05\xCF\u09FE\n\xCF\x03\xD0\x03\xD0\x03\xD0\x07\xD0\u0A03\n\xD0\f\xD0" +
		"\x0E\xD0\u0A06\v\xD0\x03\xD1\x03\xD1\x03\xD1\x05\xD1\u0A0B\n\xD1\x03\xD1" +
		"\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x05\xD1\u0A12\n\xD1\x03\xD1\x03\xD1\x03" +
		"\xD1\x03\xD1\x03\xD1\x05\xD1\u0A19\n\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1" +
		"\x03\xD1\x05\xD1\u0A20\n\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03" +
		"\xD1\x05\xD1\u0A28\n\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x05\xD1" +
		"\u0A2F\n\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD1\x05\xD1\u0A37" +
		"\n\xD1\x03\xD2\x03\xD2\x05\xD2\u0A3B\n\xD2\x03\xD2\x03\xD2\x03\xD3\x03" +
		"\xD3\x03\xD3\x05\xD3\u0A42\n\xD3\x03\xD3\x03\xD3\x03\xD3\x03\xD3\x03\xD3" +
		"\x05\xD3\u0A49\n\xD3\x03\xD3\x03\xD3\x03\xD3\x03\xD3\x03\xD3\x05\xD3\u0A50" +
		"\n\xD3\x03\xD3\x03\xD3\x03\xD3\x03\xD3\x03\xD3\x03\xD3\x05\xD3\u0A58\n" +
		"\xD3\x03\xD3\x03\xD3\x03\xD3\x03\xD3\x03\xD3\x05\xD3\u0A5F\n\xD3\x03\xD3" +
		"\x03\xD3\x03\xD3\x03\xD3\x03\xD3\x03\xD3\x05\xD3\u0A67\n\xD3\x03\xD4\x03" +
		"\xD4\x03\xD4\x03\xD4\x05\xD4\u0A6D\n\xD4\x03\xD4\x03\xD4\x03\xD4\x03\xD4" +
		"\x05\xD4\u0A73\n\xD4\x03\xD4\x03\xD4\x03\xD4\x03\xD4\x03\xD4\x03\xD4\x03" +
		"\xD4\x03\xD4\x03\xD4\x03\xD4\x05\xD4\u0A7F\n\xD4\x03\xD5\x06\xD5\u0A82" +
		"\n\xD5\r\xD5\x0E\xD5\u0A83\x03\xD6\x07\xD6\u0A87\n\xD6\f\xD6\x0E\xD6\u0A8A" +
		"\v\xD6\x03\xD6\x03\xD6\x03\xD6\x03\xD6\x03\xD7\x03\xD7\x03\xD8\x03\xD8" +
		"\x05\xD8\u0A94\n\xD8\x03\xD9\x03\xD9\x03\xD9\x03\xD9\x03\xDA\x03\xDA\x03" +
		"\xDA\x05\xDA\u0A9D\n\xDA\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x03\xDA\x05\xDA" +
		"\u0AA4\n\xDA\x03\xDB\x03\xDB\x03\xDB\x07\xDB\u0AA9\n\xDB\f\xDB\x0E\xDB" +
		"\u0AAC\v\xDB\x03\xDC\x03\xDC\x05\xDC\u0AB0\n\xDC\x03\xDD\x03\xDD\x05\xDD" +
		"\u0AB4\n\xDD\x03\xDE\x03\xDE\x03\xDE\x03\xDE\x03\xDF\x03\xDF\x03\xDF\x05" +
		"\xDF\u0ABD\n\xDF\x03\xE0\x03\xE0\x03\xE1\x03\xE1\x03\xE1\x03\xE1\x03\xE1" +
		"\x03\xE1\x03\xE1\x05\xE1\u0AC8\n\xE1\x05\xE1\u0ACA\n\xE1\x03\xE2\x03\xE2" +
		"\x03\xE2\x03\xE2\x03\xE2\x03\xE2\x07\xE2\u0AD2\n\xE2\f\xE2\x0E\xE2\u0AD5" +
		"\v\xE2\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x03\xE3\x07\xE3\u0ADD\n" +
		"\xE3\f\xE3\x0E\xE3\u0AE0\v\xE3\x03\xE4\x03\xE4\x03\xE4\x03\xE4\x03\xE4" +
		"\x03\xE4\x07\xE4\u0AE8\n\xE4\f\xE4\x0E\xE4\u0AEB\v\xE4\x03\xE5\x03\xE5" +
		"\x03\xE5\x03\xE5\x03\xE5\x03\xE5\x07\xE5\u0AF3\n\xE5\f\xE5\x0E\xE5\u0AF6" +
		"\v\xE5\x03\xE6\x03\xE6\x03\xE6\x03\xE6\x03\xE6\x03\xE6\x07\xE6\u0AFE\n" +
		"\xE6\f\xE6\x0E\xE6\u0B01\v\xE6\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x03\xE7" +
		"\x03\xE7\x03\xE7\x03\xE7\x03\xE7\x07\xE7\u0B0C\n\xE7\f\xE7\x0E\xE7\u0B0F" +
		"\v\xE7\x03\xE8\x03\xE8\x03\xE8\x03\xE8\x03\xE8\x03\xE8\x03\xE8\x03\xE8" +
		"\x03\xE8\x03\xE8\x03\xE8\x03\xE8\x03\xE8\x03\xE8\x03\xE8\x03\xE8\x03\xE8" +
		"\x03\xE8\x07\xE8\u0B23\n\xE8\f\xE8\x0E\xE8\u0B26\v\xE8\x03\xE9\x03\xE9" +
		"\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9" +
		"\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x03\xE9\x07\xE9\u0B38\n\xE9\f\xE9\x0E" +
		"\xE9\u0B3B\v\xE9\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x03\xEA\x03\xEA" +
		"\x03\xEA\x03\xEA\x07\xEA\u0B46\n\xEA\f\xEA\x0E\xEA\u0B49\v\xEA\x03\xEB" +
		"\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB\x03\xEB" +
		"\x03\xEB\x03\xEB\x07\xEB\u0B57\n\xEB\f\xEB\x0E\xEB\u0B5A\v\xEB\x03\xEC" +
		"\x03\xEC\x03\xEC\x03\xEC\x03\xEC\x03\xEC\x03\xEC\x05\xEC\u0B63\n\xEC\x03" +
		"\xED\x03\xED\x03\xED\x03\xEE\x03\xEE\x03\xEE\x03\xEF\x03\xEF\x03\xEF\x03" +
		"\xEF\x03\xEF\x03\xEF\x05\xEF\u0B71\n\xEF\x03\xF0\x03\xF0\x05\xF0\u0B75" +
		"\n\xF0\x03\xF0\x03\xF0\x07\xF0\u0B79\n\xF0\f\xF0\x0E\xF0\u0B7C\v\xF0\x03" +
		"\xF1\x03\xF1\x03\xF1\x03\xF2\x03\xF2\x03\xF3\x03\xF3\x03\xF3\x03\xF4\x03" +
		"\xF4\x03\xF5\x03\xF5\x03\xF5\x03\xF5\x03\xF5\x03\xF5\x03\xF5\x03\xF5\x07" +
		"\xF5\u0B90\n\xF5\f\xF5\x0E\xF5\u0B93\v\xF5\x03\xF5\x03\xF5\x03\xF5\x03" +
		"\xF5\x03\xF5\x03\xF5\x07\xF5\u0B9B\n\xF5\f\xF5\x0E\xF5\u0B9E\v\xF5\x03" +
		"\xF5\x03\xF5\x03\xF5\x05\xF5\u0BA3\n\xF5\x03\xF6\x03\xF6\x03\xF6\x02\x02" +
		"\x1046:@\u01C2\u01C4\u01C6\u01C8\u01CA\u01CC\u01CE\u01D0\u01D2\u01D4\xF7" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
		"b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02" +
		"~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02" +
		"\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02" +
		"\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02" +
		"\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02" +
		"\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02" +
		"\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02" +
		"\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02" +
		"\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02\u010A" +
		"\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02\u0118" +
		"\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02\u0126" +
		"\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132\x02\u0134" +
		"\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140\x02\u0142" +
		"\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E\x02\u0150" +
		"\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C\x02\u015E" +
		"\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02\u0168\x02\u016A\x02\u016C" +
		"\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02\u0176\x02\u0178\x02\u017A" +
		"\x02\u017C\x02\u017E\x02\u0180\x02\u0182\x02\u0184\x02\u0186\x02\u0188" +
		"\x02\u018A\x02\u018C\x02\u018E\x02\u0190\x02\u0192\x02\u0194\x02\u0196" +
		"\x02\u0198\x02\u019A\x02\u019C\x02\u019E\x02\u01A0\x02\u01A2\x02\u01A4" +
		"\x02\u01A6\x02\u01A8\x02\u01AA\x02\u01AC\x02\u01AE\x02\u01B0\x02\u01B2" +
		"\x02\u01B4\x02\u01B6\x02\u01B8\x02\u01BA\x02\u01BC\x02\u01BE\x02\u01C0" +
		"\x02\u01C2\x02\u01C4\x02\u01C6\x02\u01C8\x02\u01CA\x02\u01CC\x02\u01CE" +
		"\x02\u01D0\x02\u01D2\x02\u01D4\x02\u01D6\x02\u01D8\x02\u01DA\x02\u01DC" +
		"\x02\u01DE\x02\u01E0\x02\u01E2\x02\u01E4\x02\u01E6\x02\u01E8\x02\u01EA" +
		"\x02\x02\b\x03\x02@E\x07\x02\x11\x11\x14\x14\'\'))11\x04\x02\x1A\x1A " +
		" \x04\x02\f\f22\x04\x02RRjt\x04\x02\x03\vuu\u0CA5\x02\u01EC\x03\x02\x02" +
		"\x02\x04\u01FC\x03\x02\x02\x02\x06\u0200\x03\x02\x02\x02\b\u0202\x03\x02" +
		"\x02\x02\n\u0204\x03\x02\x02\x02\f\u0209\x03\x02\x02\x02\x0E\u020D\x03" +
		"\x02\x02\x02\x10\u022C\x03\x02\x02\x02\x12\u022E\x03\x02\x02\x02\x14\u023C" +
		"\x03\x02\x02\x02\x16\u0243\x03\x02\x02\x02\x18\u0245\x03\x02\x02\x02\x1A" +
		"\u0247\x03\x02\x02\x02\x1C\u024C\x03\x02\x02\x02\x1E\u025A\x03\x02\x02" +
		"\x02 \u025F\x03\x02\x02\x02\"\u0274\x03\x02\x02\x02$\u027B\x03\x02\x02" +
		"\x02&\u0287\x03\x02\x02\x02(\u0289\x03\x02\x02\x02*\u028C\x03\x02\x02" +
		"\x02,\u0290\x03\x02\x02\x02.\u029A\x03\x02\x02\x020\u029F\x03\x02\x02" +
		"\x022\u02AA\x03\x02\x02\x024\u02AC\x03\x02\x02\x026\u02B7\x03\x02\x02" +
		"\x028\u02C7\x03\x02\x02\x02:\u02C9\x03\x02\x02\x02<\u02D9\x03\x02\x02" +
		"\x02>\u02DB\x03\x02\x02\x02@\u02DD\x03\x02\x02\x02B\u02EA\x03\x02\x02" +
		"\x02D\u02ED\x03\x02\x02\x02F\u0300\x03\x02\x02\x02H\u0308\x03\x02\x02" +
		"\x02J\u030F\x03\x02\x02\x02L\u0315\x03\x02\x02\x02N\u0317\x03\x02\x02" +
		"\x02P\u031B\x03\x02\x02\x02R\u0321\x03\x02\x02\x02T\u0328\x03\x02\x02" +
		"\x02V\u0332\x03\x02\x02\x02X\u0337\x03\x02\x02\x02Z\u0381\x03\x02\x02" +
		"\x02\\\u0383\x03\x02\x02\x02^\u0387\x03\x02\x02\x02`\u038C\x03\x02\x02" +
		"\x02b\u03A4\x03\x02\x02\x02d\u03A6\x03\x02\x02\x02f\u03AA\x03\x02\x02" +
		"\x02h\u03B2\x03\x02\x02\x02j\u03B5\x03\x02\x02\x02l\u03B8\x03\x02\x02" +
		"\x02n\u03C0\x03\x02\x02\x02p\u03CD\x03\x02\x02\x02r\u03D4\x03\x02\x02" +
		"\x02t\u03D9\x03\x02\x02\x02v\u03E8\x03\x02\x02\x02x\u03EA\x03\x02\x02" +
		"\x02z\u03F2\x03\x02\x02\x02|\u03F7\x03\x02\x02\x02~\u03FD\x03\x02\x02" +
		"\x02\x80\u0401\x03\x02\x02\x02\x82\u0405\x03\x02\x02\x02\x84\u040A\x03" +
		"\x02\x02\x02\x86\u040E\x03\x02\x02\x02\x88\u0427\x03\x02\x02\x02\x8A\u0429" +
		"\x03\x02\x02\x02\x8C\u0434\x03\x02\x02\x02\x8E\u0438\x03\x02\x02\x02\x90" +
		"\u043A\x03\x02\x02\x02\x92\u043C\x03\x02\x02\x02\x94\u043E\x03\x02\x02" +
		"\x02\x96\u0449\x03\x02\x02\x02\x98\u044E\x03\x02\x02\x02\x9A\u045E\x03" +
		"\x02\x02\x02\x9C\u0471\x03\x02\x02\x02\x9E\u0475\x03\x02\x02\x02\xA0\u0477" +
		"\x03\x02\x02\x02\xA2\u0486\x03\x02\x02\x02\xA4\u0498\x03\x02\x02\x02\xA6" +
		"\u049D\x03\x02\x02\x02\xA8\u04A5\x03\x02\x02\x02\xAA\u04B8\x03\x02\x02" +
		"\x02\xAC\u04BD\x03\x02\x02\x02\xAE\u04C8\x03\x02\x02\x02\xB0\u04CB\x03" +
		"\x02\x02\x02\xB2\u04D5\x03\x02\x02\x02\xB4\u04D9\x03\x02\x02\x02\xB6\u04DB" +
		"\x03\x02\x02\x02\xB8\u04DD\x03\x02\x02\x02\xBA\u04E3\x03\x02\x02\x02\xBC" +
		"\u04F0\x03\x02\x02\x02\xBE\u04F3\x03\x02\x02\x02\xC0\u04FC\x03\x02\x02" +
		"\x02\xC2\u04FE\x03\x02\x02\x02\xC4\u0535\x03\x02\x02\x02\xC6\u053A\x03" +
		"\x02\x02\x02\xC8\u0544\x03\x02\x02\x02\xCA\u0550\x03\x02\x02\x02\xCC\u055B" +
		"\x03\x02\x02\x02\xCE\u0569\x03\x02\x02\x02\xD0\u056B\x03\x02\x02\x02\xD2" +
		"\u0574\x03\x02\x02\x02\xD4\u0579\x03\x02\x02\x02\xD6\u058D\x03\x02\x02" +
		"\x02\xD8\u058F\x03\x02\x02\x02\xDA\u0592\x03\x02\x02\x02\xDC\u05A0\x03" +
		"\x02\x02\x02\xDE\u05A5\x03\x02\x02\x02\xE0\u05B0\x03\x02\x02\x02\xE2\u05B5" +
		"\x03\x02\x02\x02\xE4\u05C2\x03\x02\x02\x02\xE6\u05C7\x03\x02\x02\x02\xE8" +
		"\u05CF\x03\x02\x02\x02\xEA\u05DD\x03\x02\x02\x02\xEC\u05E2\x03\x02\x02" +
		"\x02\xEE\u05F4\x03\x02\x02\x02\xF0\u05F6\x03\x02\x02\x02\xF2\u05FC\x03" +
		"\x02\x02\x02\xF4\u05FE\x03\x02\x02\x02\xF6\u0606\x03\x02\x02\x02\xF8\u060E" +
		"\x03\x02\x02\x02\xFA\u0615\x03\x02\x02\x02\xFC\u0617\x03\x02\x02\x02\xFE" +
		"\u0620\x03\x02\x02\x02\u0100\u0628\x03\x02\x02\x02\u0102\u062B\x03\x02" +
		"\x02\x02\u0104\u0631\x03\x02\x02\x02\u0106\u063A\x03\x02\x02\x02\u0108" +
		"\u0642\x03\x02\x02\x02\u010A\u0649\x03\x02\x02\x02\u010C\u0650\x03\x02" +
		"\x02\x02\u010E\u0652\x03\x02\x02\x02\u0110\u0658\x03\x02\x02\x02\u0112" +
		"\u0664\x03\x02\x02\x02\u0114\u066B\x03\x02\x02\x02\u0116\u0679\x03\x02" +
		"\x02\x02\u0118\u067B\x03\x02\x02\x02\u011A\u067D\x03\x02\x02\x02\u011C" +
		"\u0681\x03\x02\x02\x02\u011E\u0685\x03\x02\x02\x02\u0120\u068F\x03\x02" +
		"\x02\x02\u0122\u0691\x03\x02\x02\x02\u0124\u0697\x03\x02\x02\x02\u0126" +
		"\u069F\x03\x02\x02\x02\u0128\u06B1\x03\x02\x02\x02\u012A\u06B3\x03\x02" +
		"\x02\x02\u012C\u06B9\x03\x02\x02\x02\u012E\u06C8\x03\x02\x02\x02\u0130" +
		"\u06CC\x03\x02\x02\x02\u0132\u06DA\x03\x02\x02\x02\u0134\u06DC\x03\x02" +
		"\x02\x02\u0136\u06DE\x03\x02\x02\x02\u0138\u06E4\x03\x02\x02\x02\u013A" +
		"\u06EA\x03\x02\x02\x02\u013C\u06F4\x03\x02\x02\x02\u013E\u06F8\x03\x02" +
		"\x02\x02\u0140\u06FA\x03\x02\x02\x02\u0142\u070A\x03\x02\x02\x02\u0144" +
		"\u071C\x03\x02\x02\x02\u0146\u071E\x03\x02\x02\x02\u0148\u0720\x03\x02" +
		"\x02\x02\u014A\u0728\x03\x02\x02\x02\u014C\u0737\x03\x02\x02\x02\u014E" +
		"\u0746\x03\x02\x02\x02\u0150\u074C\x03\x02\x02\x02\u0152\u0752\x03\x02" +
		"\x02\x02\u0154\u0758\x03\x02\x02\x02\u0156\u075C\x03\x02\x02\x02\u0158" +
		"\u076E\x03\x02\x02\x02\u015A\u0771\x03\x02\x02\x02\u015C\u0775\x03\x02" +
		"\x02\x02\u015E\u077E\x03\x02\x02\x02\u0160\u0784\x03\x02\x02\x02\u0162" +
		"\u078C\x03\x02\x02\x02\u0164\u078F\x03\x02\x02\x02\u0166\u0798\x03\x02" +
		"\x02\x02\u0168\u079F\x03\x02\x02\x02\u016A\u07B3\x03\x02\x02\x02\u016C" +
		"\u07B7\x03\x02\x02\x02\u016E\u07BB\x03\x02\x02\x02\u0170\u07D3\x03\x02" +
		"\x02\x02\u0172\u07D5\x03\x02\x02\x02\u0174\u07F3\x03\x02\x02\x02\u0176" +
		"\u07FA\x03\x02\x02\x02\u0178\u07FC\x03\x02\x02\x02\u017A\u0802\x03\x02" +
		"\x02\x02\u017C\u082C\x03\x02\x02\x02\u017E\u082E\x03\x02\x02\x02\u0180" +
		"\u0857\x03\x02\x02\x02\u0182\u086A\x03\x02\x02\x02\u0184\u08BF\x03\x02" +
		"\x02\x02\u0186\u08C1\x03\x02\x02\x02\u0188\u0913\x03\x02\x02\x02\u018A" +
		"\u0918\x03\x02\x02\x02\u018C\u0927\x03\x02\x02\x02\u018E\u0929\x03\x02" +
		"\x02\x02\u0190\u0935\x03\x02\x02\x02\u0192\u0941\x03\x02\x02\x02\u0194" +
		"\u094D\x03\x02\x02\x02\u0196\u0966\x03\x02\x02\x02\u0198\u09B7\x03\x02" +
		"\x02\x02\u019A\u09B9\x03\x02\x02\x02\u019C\u09FD\x03\x02\x02\x02\u019E" +
		"\u09FF\x03\x02\x02\x02\u01A0\u0A36\x03\x02\x02\x02\u01A2\u0A38\x03\x02" +
		"\x02\x02\u01A4\u0A66\x03\x02\x02\x02\u01A6\u0A7E\x03\x02\x02\x02\u01A8" +
		"\u0A81\x03\x02\x02\x02\u01AA\u0A88\x03\x02\x02\x02\u01AC\u0A8F\x03\x02" +
		"\x02\x02\u01AE\u0A93\x03\x02\x02\x02\u01B0\u0A95\x03\x02\x02\x02\u01B2" +
		"\u0AA3\x03\x02\x02\x02\u01B4\u0AA5\x03\x02\x02\x02\u01B6\u0AAF\x03\x02" +
		"\x02\x02\u01B8\u0AB3\x03\x02\x02\x02\u01BA\u0AB5\x03\x02\x02\x02\u01BC" +
		"\u0ABC\x03\x02\x02\x02\u01BE\u0ABE\x03\x02\x02\x02\u01C0\u0AC9\x03\x02" +
		"\x02\x02\u01C2\u0ACB\x03\x02\x02\x02\u01C4\u0AD6\x03\x02\x02\x02\u01C6" +
		"\u0AE1\x03\x02\x02\x02\u01C8\u0AEC\x03\x02\x02\x02\u01CA\u0AF7\x03\x02" +
		"\x02\x02\u01CC\u0B02\x03\x02\x02\x02\u01CE\u0B10\x03\x02\x02\x02\u01D0" +
		"\u0B27\x03\x02\x02\x02\u01D2\u0B3C\x03\x02\x02\x02\u01D4\u0B4A\x03\x02" +
		"\x02\x02\u01D6\u0B62\x03\x02\x02\x02\u01D8\u0B64\x03\x02\x02\x02\u01DA" +
		"\u0B67\x03\x02\x02\x02\u01DC\u0B70\x03\x02\x02\x02\u01DE\u0B74\x03\x02" +
		"\x02\x02\u01E0\u0B7D\x03\x02\x02\x02\u01E2\u0B80\x03\x02\x02\x02\u01E4" +
		"\u0B82\x03\x02\x02\x02\u01E6\u0B85\x03\x02\x02\x02\u01E8\u0BA2\x03\x02" +
		"\x02\x02\u01EA\u0BA4\x03\x02\x02\x02\u01EC\u01ED\t\x02\x02\x02\u01ED\x03" +
		"\x03\x02\x02\x02\u01EE\u01F0\x05\xF2z\x02\u01EF\u01EE\x03\x02\x02\x02" +
		"\u01F0\u01F3\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1\u01F2\x03" +
		"\x02\x02\x02\u01F2\u01F4\x03\x02\x02\x02\u01F3\u01F1\x03\x02\x02\x02\u01F4" +
		"\u01FD\x05\x06\x04\x02\u01F5\u01F7\x05\xF2z\x02\u01F6\u01F5\x03\x02\x02" +
		"\x02\u01F7\u01FA\x03\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F9" +
		"\x03\x02\x02\x02\u01F9\u01FB\x03\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02" +
		"\u01FB\u01FD\x07\x0F\x02\x02\u01FC\u01F1\x03\x02\x02\x02\u01FC\u01F8\x03" +
		"\x02\x02\x02\u01FD\x05\x03\x02\x02\x02\u01FE\u0201\x05\b\x05\x02\u01FF" +
		"\u0201\x05\n\x06\x02\u0200\u01FE\x03\x02\x02\x02\u0200\u01FF\x03\x02\x02" +
		"\x02\u0201\x07\x03\x02\x02\x02\u0202\u0203\t\x03\x02\x02\u0203\t\x03\x02" +
		"\x02\x02\u0204\u0205\t\x04\x02\x02\u0205\v\x03\x02\x02\x02\u0206\u020A" +
		"\x05\x0E\b\x02\u0207\u020A\x05\x1C\x0F\x02\u0208\u020A\x05\x1E\x10\x02" +
		"\u0209\u0206\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u0209\u0208\x03" +
		"\x02\x02\x02\u020A\r\x03\x02\x02\x02\u020B\u020E\x05\x14\v\x02\u020C\u020E" +
		"\x05\x1A\x0E\x02\u020D\u020B\x03\x02\x02\x02\u020D\u020C\x03\x02\x02\x02" +
		"\u020E\u0213\x03\x02\x02\x02\u020F\u0212\x05\x12\n\x02\u0210\u0212\x05" +
		"\x18\r\x02\u0211\u020F\x03\x02\x02\x02\u0211\u0210\x03\x02\x02\x02\u0212" +
		"\u0215\x03\x02\x02\x02\u0213\u0211\x03\x02\x02\x02\u0213\u0214\x03\x02" +
		"\x02\x02\u0214\x0F\x03\x02\x02\x02\u0215\u0213\x03\x02\x02\x02\u0216\u0218" +
		"\x05\xF2z\x02\u0217\u0216\x03\x02\x02\x02\u0218\u021B\x03\x02\x02\x02" +
		"\u0219\u0217\x03\x02\x02\x02\u0219\u021A\x03\x02\x02\x02\u021A\u021C\x03" +
		"\x02\x02\x02\u021B\u0219\x03\x02\x02\x02\u021C\u021E\x05\u01EA\xF6\x02" +
		"\u021D\u021F\x05*\x16\x02\u021E\u021D\x03\x02\x02\x02\u021E\u021F\x03" +
		"\x02\x02\x02\u021F\u022D\x03\x02\x02\x02\u0220\u0221\x05\x0E\b\x02\u0221" +
		"\u0225\x07N\x02\x02\u0222\u0224\x05\xF2z\x02\u0223\u0222\x03\x02\x02\x02" +
		"\u0224\u0227\x03\x02\x02\x02\u0225\u0223\x03\x02\x02\x02\u0225\u0226\x03" +
		"\x02\x02\x02\u0226\u0228\x03\x02\x02\x02\u0227\u0225\x03\x02\x02\x02\u0228" +
		"\u022A\x05\u01EA\xF6\x02\u0229\u022B\x05*\x16\x02\u022A\u0229\x03\x02" +
		"\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022D\x03\x02\x02\x02\u022C" +
		"\u0219\x03\x02\x02\x02\u022C\u0220\x03\x02\x02\x02\u022D\x11\x03\x02\x02" +
		"\x02\u022E\u0232\x07N\x02\x02\u022F\u0231\x05\xF2z\x02\u0230\u022F\x03" +
		"\x02\x02\x02\u0231\u0234\x03\x02\x02\x02\u0232\u0230\x03\x02\x02\x02\u0232" +
		"\u0233\x03\x02\x02\x02\u0233\u0235\x03\x02\x02\x02\u0234\u0232\x03\x02" +
		"\x02\x02\u0235\u0237\x05\u01EA\xF6\x02\u0236\u0238\x05*\x16\x02\u0237" +
		"\u0236\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238\x13\x03\x02\x02" +
		"\x02\u0239\u023B\x05\xF2z\x02\u023A\u0239\x03\x02\x02\x02\u023B\u023E" +
		"\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02" +
		"\u023D\u023F\x03\x02\x02\x02\u023E\u023C\x03\x02\x02\x02\u023F\u0241\x05" +
		"\u01EA\xF6\x02\u0240\u0242\x05*\x16\x02\u0241\u0240\x03\x02\x02\x02\u0241" +
		"\u0242\x03\x02\x02\x02\u0242\x15\x03\x02\x02\x02\u0243\u0244\x05\x10\t" +
		"\x02\u0244\x17\x03\x02\x02\x02\u0245\u0246\x05\x12\n\x02\u0246\x19\x03" +
		"\x02\x02\x02\u0247\u0248\x05\x14\v\x02\u0248\x1B\x03\x02\x02\x02\u0249" +
		"\u024B\x05\xF2z\x02\u024A\u0249\x03\x02\x02\x02\u024B\u024E\x03\x02\x02" +
		"\x02\u024C\u024A\x03\x02\x02\x02\u024C\u024D\x03\x02\x02\x02\u024D\u024F" +
		"\x03\x02\x02\x02\u024E\u024C\x03\x02\x02\x02\u024F\u0250\x05\u01EA\xF6" +
		"\x02\u0250\x1D\x03\x02\x02\x02\u0251\u0252\x05\x04\x03\x02\u0252\u0253" +
		"\x05 \x11\x02\u0253\u025B\x03\x02\x02\x02\u0254\u0255\x05\x0E\b\x02\u0255" +
		"\u0256\x05 \x11\x02\u0256\u025B\x03\x02\x02\x02\u0257\u0258\x05\x1C\x0F" +
		"\x02\u0258\u0259\x05 \x11\x02\u0259\u025B\x03\x02\x02\x02\u025A\u0251" +
		"\x03\x02\x02\x02\u025A\u0254\x03\x02\x02\x02\u025A\u0257\x03\x02\x02\x02" +
		"\u025B\x1F\x03\x02\x02\x02\u025C\u025E\x05\xF2z\x02\u025D\u025C\x03\x02" +
		"\x02\x02\u025E\u0261\x03\x02\x02\x02\u025F\u025D\x03\x02\x02\x02\u025F" +
		"\u0260\x03\x02\x02\x02\u0260\u0262\x03\x02\x02\x02\u0261\u025F\x03\x02" +
		"\x02\x02\u0262\u0263\x07J\x02\x02\u0263\u026E\x07K\x02\x02\u0264\u0266" +
		"\x05\xF2z\x02\u0265\u0264\x03\x02\x02\x02\u0266\u0269\x03\x02\x02\x02" +
		"\u0267\u0265\x03\x02\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268\u026A\x03" +
		"\x02\x02\x02\u0269\u0267\x03\x02\x02\x02\u026A\u026B\x07J\x02\x02\u026B" +
		"\u026D\x07K\x02\x02\u026C\u0267\x03\x02\x02\x02\u026D\u0270\x03\x02\x02" +
		"\x02\u026E\u026C\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02\u026F!\x03" +
		"\x02\x02\x02\u0270\u026E\x03\x02\x02\x02\u0271\u0273\x05$\x13\x02\u0272" +
		"\u0271\x03\x02\x02\x02\u0273\u0276\x03\x02\x02\x02\u0274\u0272\x03\x02" +
		"\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0277\x03\x02\x02\x02\u0276" +
		"\u0274\x03\x02\x02\x02\u0277\u0279\x05\u01EA\xF6\x02\u0278\u027A\x05&" +
		"\x14\x02\u0279\u0278\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A" +
		"#\x03\x02\x02\x02\u027B\u027C\x05\xF2z\x02\u027C%\x03\x02\x02\x02\u027D" +
		"\u027E\x07\x1D\x02\x02\u027E\u0288\x05\x1C\x0F\x02\u027F\u0280\x07\x1D" +
		"\x02\x02\u0280\u0284\x05\x0E\b\x02\u0281\u0283\x05(\x15\x02\u0282\u0281" +
		"\x03\x02\x02\x02\u0283\u0286\x03\x02\x02\x02\u0284\u0282\x03\x02\x02\x02" +
		"\u0284\u0285\x03\x02\x02\x02\u0285\u0288\x03\x02\x02\x02\u0286\u0284\x03" +
		"\x02\x02\x02\u0287\u027D\x03\x02\x02\x02\u0287\u027F\x03\x02\x02\x02\u0288" +
		"\'\x03\x02\x02\x02\u0289\u028A\x07f\x02\x02\u028A\u028B\x05\x16\f\x02" +
		"\u028B)\x03\x02\x02\x02\u028C\u028D\x07T\x02\x02\u028D\u028E\x05,\x17" +
		"\x02\u028E\u028F\x07S\x02\x02\u028F+\x03\x02\x02\x02\u0290\u0295\x05." +
		"\x18\x02\u0291\u0292\x07M\x02\x02\u0292\u0294\x05.\x18\x02\u0293\u0291" +
		"\x03\x02\x02\x02\u0294\u0297\x03\x02\x02\x02\u0295\u0293\x03\x02\x02\x02" +
		"\u0295\u0296\x03\x02\x02\x02\u0296-\x03\x02\x02\x02\u0297\u0295\x03\x02" +
		"\x02\x02\u0298\u029B\x05\f\x07\x02\u0299\u029B\x050\x19\x02\u029A\u0298" +
		"\x03\x02\x02\x02\u029A\u0299\x03\x02\x02\x02\u029B/\x03\x02\x02\x02\u029C" +
		"\u029E\x05\xF2z\x02\u029D\u029C\x03\x02\x02\x02\u029E\u02A1\x03\x02\x02" +
		"\x02\u029F\u029D\x03\x02\x02\x02\u029F\u02A0\x03\x02\x02\x02\u02A0\u02A2" +
		"\x03\x02\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A2\u02A4\x07W\x02\x02" +
		"\u02A3\u02A5\x052\x1A\x02\u02A4\u02A3\x03\x02\x02\x02\u02A4\u02A5\x03" +
		"\x02\x02\x02\u02A51\x03\x02\x02\x02\u02A6\u02A7\x07\x1D\x02\x02\u02A7" +
		"\u02AB\x05\f\x07\x02\u02A8\u02A9\x074\x02\x02\u02A9\u02AB\x05\f\x07\x02" +
		"\u02AA\u02A6\x03\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02\u02AB3\x03\x02" +
		"\x02\x02\u02AC\u02AD\b\x1B\x01\x02\u02AD\u02AE\x05\u01EA\xF6\x02\u02AE" +
		"\u02B4\x03\x02\x02\x02\u02AF\u02B0\f\x03\x02\x02\u02B0\u02B1\x07N\x02" +
		"\x02\u02B1\u02B3\x05\u01EA\xF6\x02\u02B2\u02AF\x03\x02\x02\x02\u02B3\u02B6" +
		"\x03\x02\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02" +
		"\u02B55\x03\x02\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B7\u02B8\b\x1C" +
		"\x01\x02\u02B8\u02B9\x05\u01EA\xF6\x02\u02B9\u02BF\x03\x02\x02\x02\u02BA" +
		"\u02BB\f\x03\x02\x02\u02BB\u02BC\x07N\x02\x02\u02BC\u02BE\x05\u01EA\xF6" +
		"\x02\u02BD\u02BA\x03\x02\x02\x02\u02BE\u02C1\x03\x02\x02\x02\u02BF\u02BD" +
		"\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C07\x03\x02\x02\x02\u02C1" +
		"\u02BF\x03\x02\x02\x02\u02C2\u02C8\x05\u01EA\xF6\x02\u02C3\u02C4\x05:" +
		"\x1E\x02\u02C4\u02C5\x07N\x02\x02\u02C5\u02C6\x05\u01EA\xF6\x02\u02C6" +
		"\u02C8\x03\x02\x02\x02\u02C7\u02C2\x03\x02\x02\x02\u02C7\u02C3\x03\x02" +
		"\x02\x02\u02C89\x03\x02\x02\x02\u02C9\u02CA\b\x1E\x01\x02\u02CA\u02CB" +
		"\x05\u01EA\xF6\x02\u02CB\u02D1\x03\x02\x02\x02\u02CC";
	private static readonly _serializedATNSegment2: string =
		"\u02CD\f\x03\x02\x02\u02CD\u02CE\x07N\x02\x02\u02CE\u02D0\x05\u01EA\xF6" +
		"\x02\u02CF\u02CC\x03\x02\x02\x02\u02D0\u02D3\x03\x02\x02\x02\u02D1\u02CF" +
		"\x03\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2;\x03\x02\x02\x02\u02D3" +
		"\u02D1\x03\x02\x02\x02\u02D4\u02DA\x05\u01EA\xF6\x02\u02D5\u02D6\x05@" +
		"!\x02\u02D6\u02D7\x07N\x02\x02\u02D7\u02D8\x05\u01EA\xF6\x02\u02D8\u02DA" +
		"\x03\x02\x02\x02\u02D9\u02D4\x03\x02\x02\x02\u02D9\u02D5\x03\x02\x02\x02" +
		"\u02DA=\x03\x02\x02\x02\u02DB\u02DC\x05\u01EA\xF6\x02\u02DC?\x03\x02\x02" +
		"\x02\u02DD\u02DE\b!\x01\x02\u02DE\u02DF\x05\u01EA\xF6\x02\u02DF\u02E5" +
		"\x03\x02\x02\x02\u02E0\u02E1\f\x03\x02\x02\u02E1\u02E2\x07N\x02\x02\u02E2" +
		"\u02E4\x05\u01EA\xF6\x02\u02E3\u02E0\x03\x02\x02\x02\u02E4\u02E7\x03\x02" +
		"\x02\x02\u02E5\u02E3\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6" +
		"A\x03\x02\x02\x02\u02E7\u02E5\x03\x02\x02\x02\u02E8\u02EB\x05D#\x02\u02E9" +
		"\u02EB\x05F$\x02\u02EA\u02E8\x03\x02\x02\x02\u02EA\u02E9\x03\x02\x02\x02" +
		"\u02EBC\x03\x02\x02\x02\u02EC\u02EE\x05H%\x02\u02ED\u02EC\x03\x02\x02" +
		"\x02\u02ED\u02EE\x03\x02\x02\x02\u02EE\u02F2\x03\x02\x02\x02\u02EF\u02F1" +
		"\x05L\'\x02\u02F0\u02EF\x03\x02\x02\x02\u02F1\u02F4\x03\x02\x02\x02\u02F2" +
		"\u02F0\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3\u02F8\x03\x02" +
		"\x02\x02\u02F4\u02F2\x03\x02\x02\x02\u02F5\u02F7\x05V,\x02\u02F6\u02F5" +
		"\x03\x02\x02\x02\u02F7\u02FA\x03\x02\x02\x02\u02F8\u02F6\x03\x02\x02\x02" +
		"\u02F8\u02F9\x03\x02\x02\x02\u02F9\u02FB\x03\x02\x02\x02\u02FA\u02F8\x03" +
		"\x02\x02\x02\u02FB\u02FC\x07\x02\x02\x03\u02FCE\x03\x02\x02\x02\u02FD" +
		"\u02FF\x05L\'\x02\u02FE\u02FD\x03\x02\x02\x02\u02FF\u0302\x03\x02\x02" +
		"\x02\u0300\u02FE\x03\x02\x02\x02\u0300\u0301\x03\x02\x02\x02\u0301\u0303" +
		"\x03\x02\x02\x02\u0302\u0300\x03\x02\x02\x02\u0303\u0304\x05X-\x02\u0304" +
		"G\x03\x02\x02\x02\u0305\u0307\x05J&\x02\u0306\u0305\x03\x02\x02\x02\u0307" +
		"\u030A\x03\x02\x02\x02\u0308\u0306\x03\x02\x02\x02\u0308\u0309\x03\x02" +
		"\x02\x02\u0309\u030B\x03\x02\x02\x02\u030A\u0308\x03\x02\x02\x02\u030B" +
		"\u030C\x07,\x02\x02\u030C\u030D\x056\x1C\x02\u030D\u030E\x07L\x02\x02" +
		"\u030EI\x03\x02\x02\x02\u030F\u0310\x05\xF2z\x02\u0310K\x03\x02\x02\x02" +
		"\u0311\u0316\x05N(\x02\u0312\u0316\x05P)\x02\u0313\u0316\x05R*\x02\u0314" +
		"\u0316\x05T+\x02\u0315\u0311\x03\x02\x02\x02\u0315\u0312\x03\x02\x02\x02" +
		"\u0315\u0313\x03\x02\x02\x02\u0315\u0314\x03\x02\x02\x02\u0316M\x03\x02" +
		"\x02\x02\u0317\u0318\x07%\x02\x02\u0318\u0319\x058\x1D\x02\u0319\u031A" +
		"\x07L\x02\x02\u031AO\x03\x02\x02\x02\u031B\u031C\x07%\x02\x02\u031C\u031D" +
		"\x05:\x1E\x02\u031D\u031E\x07N\x02\x02\u031E\u031F\x07d\x02\x02\u031F" +
		"\u0320\x07L\x02\x02\u0320Q\x03\x02\x02\x02\u0321\u0322\x07%\x02\x02\u0322" +
		"\u0323\x072\x02\x02\u0323\u0324\x058\x1D\x02\u0324\u0325\x07N\x02\x02" +
		"\u0325\u0326\x05\u01EA\xF6\x02\u0326\u0327\x07L\x02\x02\u0327S\x03\x02" +
		"\x02\x02\u0328\u0329\x07%\x02\x02\u0329\u032A\x072\x02\x02\u032A\u032B" +
		"\x058\x1D\x02\u032B\u032C\x07N\x02\x02\u032C\u032D\x07d\x02\x02\u032D" +
		"\u032E\x07L\x02\x02\u032EU\x03\x02\x02\x02\u032F\u0333\x05^0\x02\u0330" +
		"\u0333\x05\xD2j\x02\u0331\u0333\x07L\x02\x02\u0332\u032F\x03\x02\x02\x02" +
		"\u0332\u0330\x03\x02\x02\x02\u0332\u0331\x03\x02\x02\x02\u0333W\x03\x02" +
		"\x02\x02\u0334\u0336\x05\xF2z\x02\u0335\u0334\x03\x02\x02\x02\u0336\u0339" +
		"\x03\x02\x02\x02\u0337\u0335\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02" +
		"\u0338\u033B\x03\x02\x02\x02\u0339\u0337\x03\x02\x02\x02\u033A\u033C\x07" +
		"\x03\x02\x02\u033B\u033A\x03\x02\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C" +
		"\u033D\x03\x02\x02\x02\u033D\u033E\x07\x04\x02\x02\u033E\u033F\x054\x1B" +
		"\x02\u033F\u0343\x07H\x02\x02\u0340\u0342\x05Z.\x02\u0341\u0340\x03\x02" +
		"\x02\x02\u0342\u0345\x03\x02\x02\x02\u0343\u0341\x03\x02\x02\x02\u0343" +
		"\u0344\x03\x02\x02\x02\u0344\u0346\x03\x02\x02\x02\u0345\u0343\x03\x02" +
		"\x02\x02\u0346\u0347\x07I\x02\x02\u0347Y\x03\x02\x02\x02\u0348\u034C\x07" +
		"\x05\x02\x02\u0349\u034B\x05\\/\x02\u034A\u0349\x03\x02\x02\x02\u034B" +
		"\u034E\x03\x02\x02\x02\u034C\u034A\x03\x02\x02\x02\u034C\u034D\x03\x02" +
		"\x02\x02\u034D\u034F\x03\x02\x02\x02\u034E\u034C\x03\x02\x02\x02\u034F" +
		"\u0350\x054\x1B\x02\u0350\u0351\x07L\x02\x02\u0351\u0382\x03\x02\x02\x02" +
		"\u0352\u0353\x07\x06\x02\x02\u0353\u035D\x056\x1C\x02\u0354\u0355\x07" +
		"\x07\x02\x02\u0355\u035A\x054\x1B\x02\u0356\u0357\x07M\x02\x02\u0357\u0359" +
		"\x054\x1B\x02\u0358\u0356\x03\x02\x02\x02\u0359\u035C\x03\x02\x02\x02" +
		"\u035A\u0358\x03\x02\x02\x02\u035A\u035B\x03\x02\x02\x02\u035B\u035E\x03" +
		"\x02\x02\x02\u035C\u035A\x03\x02\x02\x02\u035D\u0354\x03\x02\x02\x02\u035D" +
		"\u035E\x03\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F\u0360\x07L\x02" +
		"\x02\u0360\u0382\x03\x02\x02\x02\u0361\u0362\x07\b\x02\x02\u0362\u036C" +
		"\x056\x1C\x02\u0363\u0364\x07\x07\x02\x02\u0364\u0369\x054\x1B\x02\u0365" +
		"\u0366\x07M\x02\x02\u0366\u0368\x054\x1B\x02\u0367\u0365\x03\x02\x02\x02" +
		"\u0368\u036B\x03\x02\x02\x02\u0369\u0367\x03\x02\x02\x02\u0369\u036A\x03" +
		"\x02\x02\x02\u036A\u036D\x03\x02\x02\x02\u036B\u0369\x03\x02\x02\x02\u036C" +
		"\u0363\x03\x02\x02\x02\u036C\u036D\x03\x02\x02\x02\u036D\u036E\x03\x02" +
		"\x02\x02\u036E\u036F\x07L\x02\x02\u036F\u0382\x03\x02\x02\x02\u0370\u0371" +
		"\x07\t\x02\x02\u0371\u0372\x058\x1D\x02\u0372\u0373\x07L\x02\x02\u0373" +
		"\u0382\x03\x02\x02\x02\u0374\u0375\x07\n\x02\x02\u0375\u0376\x058\x1D" +
		"\x02\u0376\u0377\x07\v\x02\x02\u0377\u037C\x058\x1D\x02\u0378\u0379\x07" +
		"M\x02\x02\u0379\u037B\x058\x1D\x02\u037A\u0378\x03\x02\x02\x02\u037B\u037E" +
		"\x03\x02\x02\x02\u037C\u037A\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02" +
		"\u037D\u037F\x03\x02\x02\x02\u037E\u037C\x03\x02\x02\x02\u037F\u0380\x07" +
		"L\x02\x02\u0380\u0382\x03\x02\x02\x02\u0381\u0348\x03\x02\x02\x02\u0381" +
		"\u0352\x03\x02\x02\x02\u0381\u0361\x03\x02\x02\x02\u0381\u0370\x03\x02" +
		"\x02\x02\u0381\u0374\x03\x02\x02\x02\u0382[\x03\x02\x02\x02\u0383\u0384" +
		"\t\x05\x02\x02\u0384]\x03\x02\x02\x02\u0385\u0388\x05`1\x02\u0386\u0388" +
		"\x05\xC6d\x02\u0387\u0385\x03\x02\x02\x02\u0387\u0386\x03\x02\x02\x02" +
		"\u0388_\x03\x02\x02\x02\u0389\u038B\x05b2\x02\u038A\u0389\x03\x02\x02" +
		"\x02\u038B\u038E\x03\x02\x02\x02\u038C\u038A\x03\x02\x02\x02\u038C\u038D" +
		"\x03\x02\x02\x02\u038D\u038F\x03\x02\x02\x02\u038E\u038C\x03\x02\x02\x02" +
		"\u038F\u0390\x07\x15\x02\x02\u0390\u0392\x05\u01EA\xF6\x02\u0391\u0393" +
		"\x05d3\x02\u0392\u0391\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393" +
		"\u0395\x03\x02\x02\x02\u0394\u0396\x05h5\x02\u0395\u0394\x03\x02\x02\x02" +
		"\u0395\u0396\x03\x02\x02\x02\u0396\u0398\x03\x02\x02\x02\u0397\u0399\x05" +
		"j6\x02\u0398\u0397\x03\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399\u039A" +
		"\x03\x02\x02\x02\u039A\u039B\x05n8\x02\u039Ba\x03\x02\x02\x02\u039C\u03A5" +
		"\x05\xF2z\x02\u039D\u03A5\x07/\x02\x02\u039E\u03A5\x07.\x02\x02\u039F" +
		"\u03A5\x07-\x02\x02\u03A0\u03A5\x07\r\x02\x02\u03A1\u03A5\x072\x02\x02" +
		"\u03A2\u03A5\x07\x1E\x02\x02\u03A3\u03A5\x073\x02\x02\u03A4\u039C\x03" +
		"\x02\x02\x02\u03A4\u039D\x03\x02\x02\x02\u03A4\u039E\x03\x02\x02\x02\u03A4" +
		"\u039F\x03\x02\x02\x02\u03A4\u03A0\x03\x02\x02\x02\u03A4\u03A1\x03\x02" +
		"\x02\x02\u03A4\u03A2\x03\x02\x02\x02\u03A4\u03A3\x03\x02\x02\x02\u03A5" +
		"c\x03\x02\x02\x02\u03A6\u03A7\x07T\x02\x02\u03A7\u03A8\x05f4\x02\u03A8" +
		"\u03A9\x07S\x02\x02\u03A9e\x03\x02\x02\x02\u03AA\u03AF\x05\"\x12\x02\u03AB" +
		"\u03AC\x07M\x02\x02\u03AC\u03AE\x05\"\x12\x02\u03AD\u03AB\x03\x02\x02" +
		"\x02\u03AE\u03B1\x03\x02\x02\x02\u03AF\u03AD\x03\x02\x02\x02\u03AF\u03B0" +
		"\x03\x02\x02\x02\u03B0g\x03\x02\x02\x02\u03B1\u03AF\x03\x02\x02\x02\u03B2" +
		"\u03B3\x07\x1D\x02\x02\u03B3\u03B4\x05\x10\t\x02\u03B4i\x03\x02\x02\x02" +
		"\u03B5\u03B6\x07$\x02\x02\u03B6\u03B7\x05l7\x02\u03B7k\x03\x02\x02\x02" +
		"\u03B8\u03BD\x05\x16\f\x02\u03B9\u03BA\x07M\x02\x02\u03BA\u03BC\x05\x16" +
		"\f\x02\u03BB\u03B9\x03\x02\x02\x02\u03BC\u03BF\x03\x02\x02\x02\u03BD\u03BB" +
		"\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BEm\x03\x02\x02\x02\u03BF" +
		"\u03BD\x03\x02\x02\x02\u03C0\u03C4\x07H\x02\x02\u03C1\u03C3\x05p9\x02" +
		"\u03C2\u03C1\x03\x02\x02\x02\u03C3\u03C6\x03\x02\x02\x02\u03C4\u03C2\x03" +
		"\x02\x02\x02\u03C4\u03C5\x03\x02\x02\x02\u03C5\u03C7\x03\x02\x02\x02\u03C6" +
		"\u03C4\x03\x02\x02\x02\u03C7\u03C8\x07I\x02\x02\u03C8o\x03\x02\x02\x02" +
		"\u03C9\u03CE\x05r:\x02\u03CA\u03CE\x05\xB6\\\x02\u03CB\u03CE\x05\xB8]" +
		"\x02\u03CC\u03CE\x05\xBA^\x02\u03CD\u03C9\x03\x02\x02\x02\u03CD\u03CA" +
		"\x03\x02\x02\x02\u03CD\u03CB\x03\x02\x02\x02\u03CD\u03CC\x03\x02\x02\x02" +
		"\u03CEq\x03\x02\x02\x02\u03CF\u03D5\x05t;\x02\u03D0\u03D5\x05\x98M\x02" +
		"\u03D1\u03D5\x05^0\x02\u03D2\u03D5\x05\xD2j\x02\u03D3\u03D5\x07L\x02\x02" +
		"\u03D4\u03CF\x03\x02\x02\x02\u03D4\u03D0\x03\x02\x02\x02\u03D4\u03D1\x03" +
		"\x02\x02\x02\u03D4\u03D2\x03\x02\x02\x02\u03D4\u03D3\x03\x02\x02\x02\u03D5" +
		"s\x03\x02\x02\x02\u03D6\u03D8\x05v<\x02\u03D7\u03D6\x03\x02\x02\x02\u03D8" +
		"\u03DB\x03\x02\x02\x02\u03D9\u03D7\x03\x02\x02\x02\u03D9\u03DA\x03\x02" +
		"\x02\x02\u03DA\u03DC\x03\x02\x02\x02\u03DB\u03D9\x03\x02\x02\x02\u03DC" +
		"\u03DD\x05\x80A\x02\u03DD\u03DE\x05x=\x02\u03DE\u03DF\x07L\x02\x02\u03DF" +
		"u\x03\x02\x02\x02\u03E0\u03E9\x05\xF2z\x02\u03E1\u03E9\x07/\x02\x02\u03E2" +
		"\u03E9\x07.\x02\x02\u03E3\u03E9\x07-\x02\x02\u03E4\u03E9\x072\x02\x02" +
		"\u03E5\u03E9\x07\x1E\x02\x02\u03E6\u03E9\x07:\x02\x02\u03E7\u03E9\x07" +
		"=\x02\x02\u03E8\u03E0\x03\x02\x02\x02\u03E8\u03E1\x03\x02\x02\x02\u03E8" +
		"\u03E2\x03\x02\x02\x02\u03E8\u03E3\x03\x02\x02\x02\u03E8\u03E4\x03\x02" +
		"\x02\x02\u03E8\u03E5\x03\x02\x02\x02\u03E8\u03E6\x03\x02\x02\x02\u03E8" +
		"\u03E7\x03\x02\x02\x02\u03E9w\x03\x02\x02\x02\u03EA\u03EF\x05z>\x02\u03EB" +
		"\u03EC\x07M\x02\x02\u03EC\u03EE\x05z>\x02\u03ED\u03EB\x03\x02\x02\x02" +
		"\u03EE\u03F1\x03\x02\x02\x02\u03EF\u03ED\x03\x02\x02\x02\u03EF\u03F0\x03" +
		"\x02\x02\x02\u03F0y\x03\x02\x02\x02\u03F1\u03EF\x03\x02\x02\x02\u03F2" +
		"\u03F5\x05|?\x02\u03F3\u03F4\x07R\x02\x02\u03F4\u03F6\x05~@\x02\u03F5" +
		"\u03F3\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6{\x03\x02\x02" +
		"\x02\u03F7\u03F9\x05\u01EA\xF6\x02\u03F8\u03FA\x05 \x11\x02\u03F9\u03F8" +
		"\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA}\x03\x02\x02\x02\u03FB" +
		"\u03FE\x05\u01AE\xD8\x02\u03FC\u03FE\x05\u0104\x83\x02\u03FD\u03FB\x03" +
		"\x02\x02\x02\u03FD\u03FC\x03\x02\x02\x02\u03FE\x7F\x03\x02\x02\x02\u03FF" +
		"\u0402\x05\x82B\x02\u0400\u0402\x05\x84C\x02\u0401\u03FF\x03\x02\x02\x02" +
		"\u0401\u0400\x03\x02\x02\x02\u0402\x81\x03\x02\x02\x02\u0403\u0406\x05" +
		"\x06\x04\x02\u0404\u0406\x07\x0F\x02\x02\u0405\u0403\x03\x02\x02\x02\u0405" +
		"\u0404\x03\x02\x02\x02\u0406\x83\x03\x02\x02\x02\u0407\u040B\x05\x86D" +
		"\x02\u0408\u040B\x05\x94K\x02\u0409\u040B\x05\x96L\x02\u040A\u0407\x03" +
		"\x02\x02\x02\u040A\u0408\x03\x02\x02\x02\u040A\u0409\x03\x02\x02\x02\u040B" +
		"\x85\x03\x02\x02\x02\u040C\u040F\x05\x8CG\x02\u040D\u040F\x05\x92J\x02" +
		"\u040E\u040C\x03\x02\x02\x02\u040E\u040D\x03\x02\x02\x02\u040F\u0414\x03" +
		"\x02\x02\x02\u0410\u0413\x05\x8AF\x02\u0411\u0413\x05\x90I\x02\u0412\u0410" +
		"\x03\x02\x02\x02\u0412\u0411\x03\x02\x02\x02\u0413\u0416\x03\x02\x02\x02" +
		"\u0414\u0412\x03\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\x87\x03" +
		"\x02\x02\x02\u0416\u0414\x03\x02\x02\x02\u0417\u0419\x05\u01EA\xF6\x02" +
		"\u0418\u041A\x05*\x16\x02\u0419\u0418\x03\x02\x02\x02\u0419\u041A\x03" +
		"\x02\x02\x02\u041A\u0428\x03\x02\x02\x02\u041B\u041C\x05\x86D\x02\u041C" +
		"\u0420\x07N\x02\x02\u041D\u041F\x05\xF2z\x02\u041E\u041D\x03\x02\x02\x02" +
		"\u041F\u0422\x03\x02\x02\x02\u0420\u041E\x03\x02\x02\x02\u0420\u0421\x03" +
		"\x02\x02\x02\u0421\u0423\x03\x02\x02\x02\u0422\u0420\x03\x02\x02\x02\u0423" +
		"\u0425\x05\u01EA\xF6\x02\u0424\u0426\x05*\x16\x02\u0425\u0424\x03\x02" +
		"\x02\x02\u0425\u0426\x03\x02\x02\x02\u0426\u0428\x03\x02\x02\x02\u0427" +
		"\u0417\x03\x02\x02\x02\u0427\u041B\x03\x02\x02\x02\u0428\x89\x03\x02\x02" +
		"\x02\u0429\u042D\x07N\x02\x02\u042A\u042C\x05\xF2z\x02\u042B\u042A\x03" +
		"\x02\x02\x02\u042C\u042F\x03\x02\x02\x02\u042D\u042B\x03\x02\x02\x02\u042D" +
		"\u042E\x03\x02\x02\x02\u042E\u0430\x03\x02\x02\x02\u042F\u042D\x03\x02" +
		"\x02\x02\u0430\u0432\x05\u01EA\xF6\x02\u0431\u0433\x05*\x16\x02\u0432" +
		"\u0431\x03\x02\x02\x02\u0432\u0433\x03\x02\x02\x02\u0433\x8B\x03\x02\x02" +
		"\x02\u0434\u0436\x05\u01EA\xF6\x02\u0435\u0437\x05*\x16\x02\u0436\u0435" +
		"\x03\x02\x02\x02\u0436\u0437\x03\x02\x02\x02\u0437\x8D\x03\x02\x02\x02" +
		"\u0438\u0439\x05\x88E\x02\u0439\x8F\x03\x02\x02\x02\u043A\u043B\x05\x8A" +
		"F\x02\u043B\x91\x03\x02\x02\x02\u043C\u043D\x05\x8CG\x02\u043D\x93\x03" +
		"\x02\x02\x02\u043E\u043F\x05\u01EA\xF6\x02\u043F\x95\x03\x02\x02\x02\u0440" +
		"\u0441\x05\x82B\x02\u0441\u0442\x05 \x11\x02\u0442\u044A\x03\x02\x02\x02" +
		"\u0443\u0444\x05\x86D\x02\u0444\u0445\x05 \x11\x02\u0445\u044A\x03\x02" +
		"\x02\x02\u0446\u0447\x05\x94K\x02\u0447\u0448\x05 \x11\x02\u0448\u044A" +
		"\x03\x02\x02\x02\u0449\u0440\x03\x02\x02\x02\u0449\u0443\x03\x02\x02\x02" +
		"\u0449\u0446\x03\x02\x02\x02\u044A\x97\x03\x02\x02\x02\u044B\u044D\x05" +
		"\x9AN\x02\u044C\u044B\x03\x02\x02\x02\u044D\u0450\x03\x02\x02\x02\u044E" +
		"\u044C\x03\x02\x02\x02\u044E\u044F\x03\x02\x02\x02\u044F\u0451\x03\x02" +
		"\x02\x02\u0450\u044E\x03\x02\x02\x02\u0451\u0452\x05\x9CO\x02\u0452\u0453" +
		"\x05\xB4[\x02\u0453\x99\x03\x02\x02\x02\u0454\u045F\x05\xF2z\x02\u0455" +
		"\u045F\x07/\x02\x02\u0456\u045F\x07.\x02\x02\u0457\u045F\x07-\x02\x02" +
		"\u0458\u045F\x07\r\x02\x02\u0459\u045F\x072\x02\x02\u045A\u045F\x07\x1E" +
		"\x02\x02\u045B\u045F\x076\x02\x02\u045C\u045F\x07*\x02\x02\u045D\u045F" +
		"\x073\x02\x02\u045E\u0454\x03\x02\x02\x02\u045E\u0455\x03\x02\x02\x02" +
		"\u045E\u0456\x03\x02\x02\x02\u045E\u0457\x03\x02\x02\x02\u045E\u0458\x03" +
		"\x02\x02\x02\u045E\u0459\x03\x02\x02\x02\u045E\u045A\x03\x02\x02\x02\u045E" +
		"\u045B\x03\x02\x02\x02\u045E\u045C\x03\x02\x02\x02\u045E\u045D\x03\x02" +
		"\x02\x02\u045F\x9B\x03\x02\x02\x02\u0460\u0461\x05\x9EP\x02\u0461\u0463" +
		"\x05\xA0Q\x02\u0462\u0464\x05\xAEX\x02\u0463\u0462\x03\x02\x02\x02\u0463" +
		"\u0464\x03\x02\x02\x02\u0464\u0472\x03\x02\x02\x02\u0465\u0469\x05d3\x02" +
		"\u0466\u0468\x05\xF2z\x02\u0467\u0466\x03\x02\x02\x02\u0468\u046B\x03" +
		"\x02\x02\x02\u0469\u0467\x03\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u046A" +
		"\u046C\x03\x02\x02\x02\u046B\u0469\x03\x02\x02\x02\u046C\u046D\x05\x9E" +
		"P\x02\u046D\u046F\x05\xA0Q\x02\u046E\u0470\x05\xAEX\x02\u046F\u046E\x03" +
		"\x02\x02\x02\u046F\u0470\x03\x02\x02\x02\u0470\u0472\x03\x02\x02\x02\u0471" +
		"\u0460\x03\x02\x02\x02\u0471\u0465\x03\x02\x02\x02\u0472\x9D\x03\x02\x02" +
		"\x02\u0473\u0476\x05\x80A\x02\u0474\u0476\x07<\x02\x02\u0475\u0473\x03" +
		"\x02\x02\x02\u0475\u0474\x03\x02\x02\x02\u0476\x9F\x03\x02\x02\x02\u0477" +
		"\u0478\x05\u01EA\xF6\x02\u0478\u047A\x07F\x02\x02\u0479\u047B\x05\xA2" +
		"R\x02\u047A\u0479\x03\x02\x02\x02\u047A\u047B\x03\x02\x02\x02\u047B\u047C" +
		"\x03\x02\x02\x02\u047C\u047E\x07G\x02\x02\u047D\u047F\x05 \x11\x02\u047E" +
		"\u047D\x03\x02\x02\x02\u047E\u047F\x03\x02\x02\x02\u047F\xA1\x03\x02\x02" +
		"\x02\u0480\u0481\x05\xA4S\x02\u0481\u0482\x07M\x02\x02\u0482\u0483\x05" +
		"\xAAV\x02\u0483\u0487\x03\x02\x02\x02\u0484\u0487\x05\xAAV\x02\u0485\u0487" +
		"\x05\xACW\x02\u0486\u0480\x03\x02\x02\x02\u0486\u0484\x03\x02\x02\x02" +
		"\u0486\u0485\x03\x02\x02\x02\u0487\xA3\x03\x02\x02\x02\u0488\u048D\x05" +
		"\xA6T\x02\u0489\u048A\x07M\x02\x02\u048A\u048C\x05\xA6T\x02\u048B\u0489" +
		"\x03\x02\x02\x02\u048C\u048F\x03\x02\x02\x02\u048D\u048B\x03\x02\x02\x02" +
		"\u048D\u048E\x03\x02\x02\x02\u048E\u0499\x03\x02\x02\x02\u048F\u048D\x03" +
		"\x02\x02\x02\u0490\u0495\x05\xACW\x02\u0491\u0492\x07M\x02\x02\u0492\u0494" +
		"\x05\xA6T\x02\u0493\u0491\x03\x02\x02\x02\u0494\u0497\x03\x02\x02\x02" +
		"\u0495\u0493\x03\x02\x02\x02\u0495\u0496\x03\x02\x02\x02\u0496\u0499\x03" +
		"\x02\x02\x02\u0497\u0495\x03\x02\x02\x02\u0498\u0488\x03\x02\x02\x02\u0498" +
		"\u0490\x03\x02\x02\x02\u0499\xA5\x03\x02\x02\x02\u049A\u049C\x05\xA8U" +
		"\x02\u049B\u049A\x03\x02\x02\x02\u049C\u049F\x03\x02\x02\x02\u049D\u049B" +
		"\x03\x02\x02\x02\u049D\u049E\x03\x02\x02\x02\u049E\u04A0\x03\x02\x02\x02" +
		"\u049F\u049D\x03\x02\x02\x02\u04A0\u04A1\x05\x80A\x02\u04A1\u04A2\x05" +
		"|?\x02\u04A2\xA7\x03\x02\x02\x02\u04A3\u04A6\x05\xF2z\x02\u04A4\u04A6" +
		"\x07\x1E\x02\x02\u04A5\u04A3\x03\x02\x02\x02\u04A5\u04A4\x03\x02\x02\x02" +
		"\u04A6\xA9\x03\x02\x02\x02\u04A7\u04A9\x05\xA8U\x02\u04A8\u04A7\x03\x02" +
		"\x02\x02\u04A9\u04AC\x03\x02\x02\x02\u04AA\u04A8\x03\x02\x02\x02\u04AA" +
		"\u04AB\x03\x02\x02\x02\u04AB\u04AD\x03\x02\x02\x02\u04AC\u04AA\x03\x02" +
		"\x02\x02\u04AD\u04B1\x05\x80A\x02\u04AE\u04B0\x05\xF2z\x02\u04AF\u04AE" +
		"\x03\x02\x02\x02\u04B0\u04B3\x03\x02\x02\x02\u04B1\u04AF\x03\x02\x02\x02" +
		"\u04B1\u04B2\x03\x02\x02\x02\u04B2\u04B4\x03\x02\x02\x02\u04B3\u04B1\x03" +
		"\x02\x02\x02\u04B4\u04B5\x07O\x02\x02\u04B5\u04B6\x05|?\x02\u04B6\u04B9" +
		"\x03\x02\x02\x02\u04B7\u04B9\x05\xA6T\x02\u04B8\u04AA\x03\x02\x02\x02" +
		"\u04B8\u04B7\x03\x02\x02\x02\u04B9\xAB\x03\x02\x02\x02\u04BA\u04BC\x05" +
		"\xF2z\x02\u04BB\u04BA\x03\x02\x02\x02\u04BC\u04BF\x03\x02\x02\x02\u04BD" +
		"\u04BB\x03\x02\x02\x02\u04BD\u04BE\x03\x02\x02\x02\u04BE\u04C0\x03\x02" +
		"\x02\x02\u04BF\u04BD\x03\x02\x02\x02\u04C0\u04C4\x05\x80A\x02\u04C1\u04C2" +
		"\x05\u01EA\xF6\x02\u04C2\u04C3\x07N\x02\x02\u04C3\u04C5\x03\x02\x02\x02" +
		"\u04C4\u04C1\x03\x02\x02\x02\u04C4\u04C5\x03\x02\x02\x02\u04C5\u04C6\x03" +
		"\x02\x02\x02\u04C6\u04C7\x077\x02\x02\u04C7\xAD\x03\x02\x02\x02\u04C8" +
		"\u04C9\x079\x02\x02\u04C9\u04CA\x05\xB0Y\x02\u04CA\xAF\x03\x02\x02\x02" +
		"\u04CB\u04D0\x05\xB2Z\x02\u04CC\u04CD\x07M\x02\x02\u04CD\u04CF\x05\xB2" +
		"Z\x02\u04CE\u04CC\x03\x02\x02\x02\u04CF\u04D2\x03\x02\x02\x02\u04D0\u04CE" +
		"\x03\x02\x02\x02\u04D0\u04D1\x03\x02\x02\x02\u04D1\xB1\x03\x02\x02\x02" +
		"\u04D2\u04D0\x03\x02\x02\x02\u04D3\u04D6\x05\x10\t\x02\u04D4\u04D6\x05" +
		"\x1C\x0F\x02\u04D5\u04D3\x03\x02\x02\x02\u04D5\u04D4\x03\x02\x02\x02\u04D6" +
		"\xB3\x03\x02\x02\x02\u04D7\u04DA\x05\u0108\x85\x02\u04D8\u04DA\x07L\x02" +
		"\x02\u04D9\u04D7\x03\x02\x02\x02\u04D9\u04D8\x03\x02\x02\x02\u04DA\xB5" +
		"\x03\x02\x02\x02\u04DB\u04DC\x05\u0108\x85\x02\u04DC\xB7\x03\x02\x02\x02" +
		"\u04DD\u04DE\x072\x02\x02\u04DE\u04DF\x05\u0108\x85\x02\u04DF\xB9\x03" +
		"\x02\x02\x02\u04E0\u04E2\x05\xBC_\x02\u04E1\u04E0\x03\x02\x02\x02\u04E2" +
		"\u04E5\x03\x02\x02\x02\u04E3\u04E1\x03\x02\x02\x02\u04E3\u04E4\x03\x02" +
		"\x02\x02\u04E4\u04E6\x03\x02\x02\x02\u04E5\u04E3\x03\x02\x02\x02\u04E6" +
		"\u04E8\x05\xBE`\x02\u04E7\u04E9\x05\xAEX\x02\u04E8\u04E7\x03\x02\x02\x02" +
		"\u04E8\u04E9\x03\x02\x02\x02\u04E9\u04EA\x03\x02\x02\x02\u04EA\u04EB\x05" +
		"\xC2b\x02\u04EB\xBB\x03\x02\x02\x02\u04EC\u04F1\x05\xF2z\x02\u04ED\u04F1" +
		"\x07/\x02\x02\u04EE\u04F1\x07.\x02\x02\u04EF\u04F1\x07-\x02\x02\u04F0" +
		"\u04EC\x03\x02\x02\x02\u04F0\u04ED\x03\x02\x02\x02\u04F0\u04EE\x03\x02" +
		"\x02\x02\u04F0\u04EF\x03\x02\x02\x02\u04F1\xBD\x03\x02\x02\x02\u04F2\u04F4" +
		"\x05d3\x02\u04F3\u04F2\x03\x02\x02\x02\u04F3\u04F4\x03\x02\x02\x02\u04F4" +
		"\u04F5\x03\x02\x02\x02\u04F5\u04F6\x05\xC0a\x02\u04F6\u04F8\x07F\x02\x02" +
		"\u04F7\u04F9\x05\xA2R\x02\u04F8\u04F7\x03\x02\x02\x02\u04F8\u04F9\x03" +
		"\x02\x02\x02\u04F9\u04FA\x03\x02\x02\x02\u04FA\u04FB\x07G\x02\x02\u04FB" +
		"\xBF\x03\x02\x02\x02\u04FC\u04FD\x05\u01EA\xF6\x02\u04FD\xC1\x03\x02\x02" +
		"\x02\u04FE\u0500\x07H\x02\x02\u04FF\u0501\x05\xC4c\x02\u0500\u04FF\x03" +
		"\x02\x02\x02\u0500\u0501\x03\x02\x02\x02\u0501\u0503\x03\x02\x02\x02\u0502" +
		"\u0504\x05\u010A\x86\x02\u0503\u0502\x03\x02\x02\x02\u0503\u0504\x03\x02" +
		"\x02\x02\u0504\u0505\x03\x02\x02\x02\u0505\u0506\x07I\x02\x02\u0506\xC3" +
		"\x03\x02\x02\x02\u0507\u0509\x05*\x16\x02\u0508\u0507\x03\x02\x02\x02" +
		"\u0508\u0509\x03\x02\x02\x02\u0509\u050A\x03\x02\x02\x02\u050A\u050B\x07" +
		"7\x02\x02\u050B\u050D\x07F\x02\x02\u050C\u050E\x05\u019E\xD0\x02\u050D" +
		"\u050C\x03\x02\x02\x02\u050D\u050E\x03\x02\x02\x02\u050E\u050F\x03\x02" +
		"\x02\x02\u050F\u0510\x07G\x02\x02\u0510\u0536\x07L\x02\x02\u0511\u0513" +
		"\x05*\x16\x02\u0512\u0511\x03\x02\x02\x02\u0512\u0513\x03\x02\x02\x02" +
		"\u0513\u0514\x03\x02\x02\x02\u0514\u0515\x074\x02\x02\u0515\u0517\x07" +
		"F\x02\x02\u0516\u0518\x05\u019E\xD0\x02\u0517\u0516\x03\x02\x02\x02\u0517" +
		"\u0518\x03\x02\x02\x02\u0518\u0519\x03\x02\x02\x02\u0519\u051A\x07G\x02" +
		"\x02\u051A\u0536\x07L\x02\x02\u051B\u051C\x05<\x1F\x02\u051C\u051E\x07" +
		"N\x02\x02\u051D\u051F\x05*\x16\x02\u051E\u051D\x03\x02\x02\x02\u051E\u051F" +
		"\x03\x02\x02\x02\u051F\u0520\x03\x02\x02\x02\u0520\u0521\x074\x02\x02" +
		"\u0521\u0523\x07F\x02\x02\u0522\u0524\x05\u019E\xD0\x02\u0523\u0522\x03" +
		"\x02\x02\x02\u0523\u0524\x03\x02\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525" +
		"\u0526\x07G\x02\x02\u0526\u0527\x07L\x02\x02\u0527\u0536\x03\x02\x02\x02" +
		"\u0528\u0529\x05\u016E\xB8\x02\u0529\u052B\x07N\x02\x02\u052A\u052C\x05" +
		"*\x16\x02\u052B\u052A\x03\x02\x02\x02\u052B\u052C\x03\x02\x02\x02\u052C" +
		"\u052D\x03\x02\x02\x02\u052D\u052E\x074\x02\x02\u052E\u0530\x07F\x02\x02" +
		"\u052F\u0531\x05\u019E\xD0\x02\u0530\u052F\x03\x02\x02\x02\u0530\u0531" +
		"\x03\x02\x02\x02\u0531\u0532\x03\x02\x02\x02\u0532\u0533\x07G\x02\x02" +
		"\u0533\u0534\x07L\x02\x02\u0534\u0536\x03\x02\x02\x02\u0535\u0508\x03" +
		"\x02\x02\x02\u0535\u0512\x03\x02\x02\x02\u0535\u051B\x03\x02\x02\x02\u0535" +
		"\u0528\x03\x02\x02\x02\u0536\xC5\x03\x02\x02\x02\u0537\u0539\x05b2\x02" +
		"\u0538\u0537\x03\x02\x02\x02\u0539\u053C\x03\x02\x02\x02\u053A\u0538\x03" +
		"\x02\x02\x02\u053A\u053B\x03\x02\x02\x02\u053B\u053D\x03\x02\x02\x02\u053C" +
		"\u053A\x03\x02\x02\x02\u053D\u053E\x07\x1C\x02\x02\u053E\u0540\x05\u01EA" +
		"\xF6\x02\u053F\u0541\x05j6\x02\u0540\u053F\x03\x02\x02\x02\u0540\u0541" +
		"\x03\x02\x02\x02\u0541\u0542\x03\x02\x02\x02\u0542\u0543\x05\xC8e\x02" +
		"\u0543\xC7\x03\x02\x02\x02\u0544\u0546\x07H\x02\x02\u0545\u0547\x05\xCA" +
		"f\x02\u0546\u0545\x03\x02\x02\x02\u0546\u0547\x03\x02\x02\x02\u0547\u0549" +
		"\x03\x02\x02\x02\u0548\u054A\x07M\x02\x02\u0549\u0548\x03\x02\x02\x02" +
		"\u0549\u054A\x03\x02\x02\x02\u054A\u054C\x03\x02\x02\x02\u054B\u054D\x05" +
		"\xD0i\x02\u054C\u054B\x03\x02\x02\x02\u054C\u054D\x03\x02\x02\x02\u054D" +
		"\u054E\x03\x02\x02\x02\u054E\u054F\x07I\x02\x02\u054F\xC9\x03\x02\x02" +
		"\x02\u0550\u0555\x05\xCCg\x02\u0551\u0552\x07M\x02\x02\u0552\u0554\x05" +
		"\xCCg\x02\u0553\u0551\x03\x02\x02\x02\u0554\u0557\x03\x02\x02\x02\u0555" +
		"\u0553\x03\x02\x02\x02\u0555\u0556\x03\x02\x02\x02\u0556\xCB\x03\x02\x02" +
		"\x02\u0557\u0555\x03\x02\x02\x02\u0558\u055A\x05\xCEh\x02\u0559\u0558" +
		"\x03\x02\x02\x02\u055A\u055D\x03\x02\x02\x02\u055B\u0559\x03\x02\x02\x02" +
		"\u055B\u055C\x03\x02\x02\x02\u055C\u055E\x03\x02\x02\x02\u055D\u055B\x03" +
		"\x02\x02\x02\u055E\u0564\x05\u01EA\xF6\x02\u055F\u0561\x07F\x02\x02\u0560" +
		"\u0562\x05\u019E\xD0\x02\u0561\u0560\x03\x02\x02\x02\u0561\u0562\x03\x02" +
		"\x02\x02\u0562\u0563\x03\x02\x02\x02\u0563\u0565\x07G\x02\x02\u0564\u055F" +
		"\x03\x02\x02\x02\u0564\u0565\x03\x02\x02\x02\u0565\u0567\x03\x02\x02\x02" +
		"\u0566\u0568\x05n8\x02\u0567\u0566\x03\x02\x02\x02\u0567\u0568\x03\x02" +
		"\x02\x02\u0568\xCD\x03\x02\x02\x02\u0569\u056A\x05\xF2z\x02\u056A\xCF" +
		"\x03\x02\x02\x02\u056B\u056F\x07L\x02\x02\u056C\u056E\x05p9\x02\u056D" +
		"\u056C\x03\x02\x02\x02\u056E\u0571\x03\x02\x02\x02\u056F\u056D\x03\x02" +
		"\x02\x02\u056F\u0570\x03\x02\x02\x02\u0570\xD1\x03\x02\x02\x02\u0571\u056F" +
		"\x03\x02\x02\x02\u0572\u0575\x05\xD4k\x02\u0573\u0575\x05\xE6t\x02\u0574" +
		"\u0572\x03\x02\x02\x02\u0574\u0573\x03\x02\x02\x02\u0575\xD3\x03\x02\x02" +
		"\x02\u0576\u0578\x05\xD6l\x02\u0577\u0576\x03\x02\x02\x02\u0578\u057B" +
		"\x03\x02\x02\x02\u0579\u0577\x03\x02\x02\x02\u0579\u057A\x03\x02\x02\x02" +
		"\u057A\u057C\x03\x02\x02\x02\u057B\u0579\x03\x02\x02\x02\u057C\u057D\x07" +
		"(\x02\x02\u057D\u057F\x05\u01EA\xF6\x02\u057E\u0580\x05d3\x02\u057F\u057E" +
		"\x03";
	private static readonly _serializedATNSegment3: string =
		"\x02\x02\x02\u057F\u0580\x03\x02\x02\x02\u0580\u0582\x03\x02\x02\x02\u0581" +
		"\u0583\x05\xD8m\x02\u0582\u0581\x03\x02\x02\x02\u0582\u0583\x03\x02\x02" +
		"\x02\u0583\u0584\x03\x02\x02\x02\u0584\u0585\x05\xDAn\x02\u0585\xD5\x03" +
		"\x02\x02\x02\u0586\u058E\x05\xF2z\x02\u0587\u058E\x07/\x02\x02\u0588\u058E" +
		"\x07.\x02\x02\u0589\u058E\x07-\x02\x02\u058A\u058E\x07\r\x02\x02\u058B" +
		"\u058E\x072\x02\x02\u058C\u058E\x073\x02\x02\u058D\u0586\x03\x02\x02\x02" +
		"\u058D\u0587\x03\x02\x02\x02\u058D\u0588\x03\x02\x02\x02\u058D\u0589\x03" +
		"\x02\x02\x02\u058D\u058A\x03\x02\x02\x02\u058D\u058B\x03\x02\x02\x02\u058D" +
		"\u058C\x03\x02\x02\x02\u058E\xD7\x03\x02\x02\x02\u058F\u0590\x07\x1D\x02" +
		"\x02\u0590\u0591\x05l7\x02\u0591\xD9\x03\x02\x02\x02\u0592\u0596\x07H" +
		"\x02\x02\u0593\u0595\x05\xDCo\x02\u0594\u0593\x03\x02\x02\x02\u0595\u0598" +
		"\x03\x02\x02\x02\u0596\u0594\x03\x02\x02\x02\u0596\u0597\x03\x02\x02\x02" +
		"\u0597\u0599\x03\x02\x02\x02\u0598\u0596\x03\x02\x02\x02\u0599\u059A\x07" +
		"I\x02\x02\u059A\xDB\x03\x02\x02\x02\u059B\u05A1\x05\xDEp\x02\u059C\u05A1" +
		"\x05\xE2r\x02\u059D\u05A1\x05^0\x02\u059E\u05A1\x05\xD2j\x02\u059F\u05A1" +
		"\x07L\x02\x02\u05A0\u059B\x03\x02\x02\x02\u05A0\u059C\x03\x02\x02\x02" +
		"\u05A0\u059D\x03\x02\x02\x02\u05A0\u059E\x03\x02\x02\x02\u05A0\u059F\x03" +
		"\x02\x02\x02\u05A1\xDD\x03\x02\x02\x02\u05A2\u05A4\x05\xE0q\x02\u05A3" +
		"\u05A2\x03\x02\x02\x02\u05A4\u05A7\x03\x02\x02\x02\u05A5\u05A3\x03\x02" +
		"\x02\x02\u05A5\u05A6\x03\x02\x02\x02\u05A6\u05A8\x03\x02\x02\x02\u05A7" +
		"\u05A5\x03\x02\x02\x02\u05A8\u05A9\x05\x80A\x02\u05A9\u05AA\x05x=\x02" +
		"\u05AA\u05AB\x07L\x02\x02\u05AB\xDF\x03\x02\x02\x02\u05AC\u05B1\x05\xF2" +
		"z\x02\u05AD\u05B1\x07/\x02\x02\u05AE\u05B1\x072\x02\x02\u05AF\u05B1\x07" +
		"\x1E\x02\x02\u05B0\u05AC\x03\x02\x02\x02\u05B0\u05AD\x03\x02\x02\x02\u05B0" +
		"\u05AE\x03\x02\x02\x02\u05B0\u05AF\x03\x02\x02\x02\u05B1\xE1\x03\x02\x02" +
		"\x02\u05B2\u05B4\x05\xE4s\x02\u05B3\u05B2\x03\x02\x02\x02\u05B4\u05B7" +
		"\x03\x02\x02\x02\u05B5\u05B3\x03\x02\x02\x02\u05B5\u05B6\x03\x02\x02\x02" +
		"\u05B6\u05B8\x03\x02\x02\x02\u05B7\u05B5\x03\x02\x02\x02\u05B8\u05B9\x05" +
		"\x9CO\x02\u05B9\u05BA\x05\xB4[\x02\u05BA\xE3\x03\x02\x02\x02\u05BB\u05C3" +
		"\x05\xF2z\x02\u05BC\u05C3\x07/\x02\x02\u05BD\u05C3\x07-\x02\x02\u05BE" +
		"\u05C3\x07\r\x02\x02\u05BF\u05C3\x07\x18\x02\x02\u05C0\u05C3\x072\x02" +
		"\x02\u05C1\u05C3\x073\x02\x02\u05C2\u05BB\x03\x02\x02\x02\u05C2\u05BC" +
		"\x03\x02\x02\x02\u05C2\u05BD\x03\x02\x02\x02\u05C2\u05BE\x03\x02\x02\x02" +
		"\u05C2\u05BF\x03\x02\x02\x02\u05C2\u05C0\x03\x02\x02\x02\u05C2\u05C1\x03" +
		"\x02\x02\x02\u05C3\xE5\x03\x02\x02\x02\u05C4\u05C6\x05\xD6l\x02\u05C5" +
		"\u05C4\x03\x02\x02\x02\u05C6\u05C9\x03\x02\x02\x02\u05C7\u05C5\x03\x02" +
		"\x02\x02\u05C7\u05C8\x03\x02\x02\x02\u05C8\u05CA\x03\x02\x02\x02\u05C9" +
		"\u05C7\x03\x02\x02\x02\u05CA\u05CB\x07P\x02\x02\u05CB\u05CC\x07(\x02\x02" +
		"\u05CC\u05CD\x05\u01EA\xF6\x02\u05CD\u05CE\x05\xE8u\x02\u05CE\xE7\x03" +
		"\x02\x02\x02\u05CF\u05D3\x07H\x02\x02\u05D0\u05D2\x05\xEAv\x02\u05D1\u05D0" +
		"\x03\x02\x02\x02\u05D2\u05D5\x03\x02\x02\x02\u05D3\u05D1\x03\x02\x02\x02" +
		"\u05D3\u05D4\x03\x02\x02\x02\u05D4\u05D6\x03\x02\x02\x02\u05D5\u05D3\x03" +
		"\x02\x02\x02\u05D6\u05D7\x07I\x02\x02\u05D7\xE9\x03\x02\x02\x02\u05D8" +
		"\u05DE\x05\xECw\x02\u05D9\u05DE\x05\xDEp\x02\u05DA\u05DE\x05^0\x02\u05DB" +
		"\u05DE\x05\xD2j\x02\u05DC\u05DE\x07L\x02\x02\u05DD\u05D8\x03\x02\x02\x02" +
		"\u05DD\u05D9\x03\x02\x02\x02\u05DD\u05DA\x03\x02\x02\x02\u05DD\u05DB\x03" +
		"\x02\x02\x02\u05DD\u05DC\x03\x02\x02\x02\u05DE\xEB\x03\x02\x02\x02\u05DF" +
		"\u05E1\x05\xEEx\x02\u05E0\u05DF\x03\x02\x02\x02\u05E1\u05E4\x03\x02\x02" +
		"\x02\u05E2\u05E0\x03\x02\x02\x02\u05E2\u05E3\x03\x02\x02\x02\u05E3\u05E5" +
		"\x03\x02\x02\x02\u05E4\u05E2\x03\x02\x02\x02\u05E5\u05E6\x05\x80A\x02" +
		"\u05E6\u05E7\x05\u01EA\xF6\x02\u05E7\u05E8\x07F\x02\x02\u05E8\u05EA\x07" +
		"G\x02\x02\u05E9\u05EB\x05 \x11\x02\u05EA\u05E9\x03\x02\x02\x02\u05EA\u05EB" +
		"\x03\x02\x02\x02\u05EB\u05ED\x03\x02\x02\x02\u05EC\u05EE\x05\xF0y\x02" +
		"\u05ED\u05EC\x03\x02\x02\x02\u05ED\u05EE\x03\x02\x02\x02\u05EE\u05EF\x03" +
		"\x02\x02\x02\u05EF\u05F0\x07L\x02\x02\u05F0\xED\x03\x02\x02\x02\u05F1" +
		"\u05F5\x05\xF2z\x02\u05F2\u05F5\x07/\x02\x02\u05F3\u05F5\x07\r\x02\x02" +
		"\u05F4\u05F1\x03\x02\x02\x02\u05F4\u05F2\x03\x02\x02\x02\u05F4\u05F3\x03" +
		"\x02\x02\x02\u05F5\xEF\x03\x02\x02\x02\u05F6\u05F7\x07\x18\x02\x02\u05F7" +
		"\u05F8\x05\xFA~\x02\u05F8\xF1\x03\x02\x02\x02\u05F9\u05FD\x05\xF4{\x02" +
		"\u05FA\u05FD\x05\u0100\x81\x02\u05FB\u05FD\x05\u0102\x82\x02\u05FC\u05F9" +
		"\x03\x02\x02\x02\u05FC\u05FA\x03\x02\x02\x02\u05FC\u05FB\x03\x02\x02\x02" +
		"\u05FD\xF3\x03\x02\x02\x02\u05FE\u05FF\x07P\x02\x02\u05FF\u0600\x058\x1D" +
		"\x02\u0600\u0602\x07F\x02\x02\u0601\u0603\x05\xF6|\x02\u0602\u0601\x03" +
		"\x02\x02\x02\u0602\u0603\x03\x02\x02\x02\u0603\u0604\x03\x02\x02\x02\u0604" +
		"\u0605\x07G\x02\x02\u0605\xF5\x03\x02\x02\x02\u0606\u060B\x05\xF8}\x02" +
		"\u0607\u0608\x07M\x02\x02\u0608\u060A\x05\xF8}\x02\u0609\u0607\x03\x02" +
		"\x02\x02\u060A\u060D\x03\x02\x02\x02\u060B\u0609\x03\x02\x02\x02\u060B" +
		"\u060C\x03\x02\x02\x02\u060C\xF7\x03\x02\x02\x02\u060D\u060B\x03\x02\x02" +
		"\x02\u060E\u060F\x05\u01EA\xF6\x02\u060F\u0610\x07R\x02\x02\u0610\u0611" +
		"\x05\xFA~\x02\u0611\xF9\x03\x02\x02\x02\u0612\u0616\x05\u01C0\xE1\x02" +
		"\u0613\u0616\x05\xFC\x7F\x02\u0614\u0616\x05\xF2z\x02\u0615\u0612\x03" +
		"\x02\x02\x02\u0615\u0613\x03\x02\x02\x02\u0615\u0614\x03\x02\x02\x02\u0616" +
		"\xFB\x03\x02\x02\x02\u0617\u0619\x07H\x02\x02\u0618\u061A\x05\xFE\x80" +
		"\x02\u0619\u0618\x03\x02\x02\x02\u0619\u061A\x03\x02\x02\x02\u061A\u061C" +
		"\x03\x02\x02\x02\u061B\u061D\x07M\x02\x02\u061C\u061B\x03\x02\x02\x02" +
		"\u061C\u061D\x03\x02\x02\x02\u061D\u061E\x03\x02\x02\x02\u061E\u061F\x07" +
		"I\x02\x02\u061F\xFD\x03\x02\x02\x02\u0620\u0625\x05\xFA~\x02\u0621\u0622" +
		"\x07M\x02\x02\u0622\u0624\x05\xFA~\x02\u0623\u0621\x03\x02\x02\x02\u0624" +
		"\u0627\x03\x02\x02\x02\u0625\u0623\x03\x02\x02\x02\u0625\u0626\x03\x02" +
		"\x02\x02\u0626\xFF\x03\x02\x02\x02\u0627\u0625\x03\x02\x02\x02\u0628\u0629" +
		"\x07P\x02\x02\u0629\u062A\x058\x1D\x02\u062A\u0101\x03\x02\x02\x02\u062B" +
		"\u062C\x07P\x02\x02\u062C\u062D\x058\x1D\x02\u062D\u062E\x07F\x02\x02" +
		"\u062E\u062F\x05\xFA~\x02\u062F\u0630\x07G\x02\x02\u0630\u0103\x03\x02" +
		"\x02\x02\u0631\u0633\x07H\x02\x02\u0632\u0634\x05\u0106\x84\x02\u0633" +
		"\u0632\x03\x02\x02\x02\u0633\u0634\x03\x02\x02\x02\u0634\u0636\x03\x02" +
		"\x02\x02\u0635\u0637\x07M\x02\x02\u0636\u0635\x03\x02\x02\x02\u0636\u0637" +
		"\x03\x02\x02\x02\u0637\u0638\x03\x02\x02\x02\u0638\u0639\x07I\x02\x02" +
		"\u0639\u0105\x03\x02\x02\x02\u063A\u063F\x05~@\x02\u063B\u063C\x07M\x02" +
		"\x02\u063C\u063E\x05~@\x02\u063D\u063B\x03\x02\x02\x02\u063E\u0641\x03" +
		"\x02\x02\x02\u063F\u063D\x03\x02\x02\x02\u063F\u0640\x03\x02\x02\x02\u0640" +
		"\u0107\x03\x02\x02\x02\u0641\u063F\x03\x02\x02\x02\u0642\u0644\x07H\x02" +
		"\x02\u0643\u0645\x05\u010A\x86\x02\u0644\u0643\x03\x02\x02\x02\u0644\u0645" +
		"\x03\x02\x02\x02\u0645\u0646\x03\x02\x02\x02\u0646\u0647\x07I\x02\x02" +
		"\u0647\u0109\x03\x02\x02\x02\u0648\u064A\x05\u010C\x87\x02\u0649\u0648" +
		"\x03\x02\x02\x02\u064A\u064B\x03\x02\x02\x02\u064B\u0649\x03\x02\x02\x02" +
		"\u064B\u064C\x03\x02\x02\x02\u064C\u010B\x03\x02\x02\x02\u064D\u0651\x05" +
		"\u010E\x88\x02\u064E\u0651\x05^0\x02\u064F\u0651\x05\u0112\x8A\x02\u0650" +
		"\u064D\x03\x02\x02\x02\u0650\u064E\x03\x02\x02\x02\u0650\u064F\x03\x02" +
		"\x02\x02\u0651\u010D\x03\x02\x02\x02\u0652\u0653\x05\u0110\x89\x02\u0653" +
		"\u0654\x07L\x02\x02\u0654\u010F\x03\x02\x02\x02\u0655\u0657\x05\xA8U\x02" +
		"\u0656\u0655\x03\x02\x02\x02\u0657\u065A\x03\x02\x02\x02\u0658\u0656\x03" +
		"\x02\x02\x02\u0658\u0659\x03\x02\x02\x02\u0659\u065B\x03\x02\x02\x02\u065A" +
		"\u0658\x03\x02\x02\x02\u065B\u065C\x05\x80A\x02\u065C\u065D\x05x=\x02" +
		"\u065D\u0111\x03\x02\x02\x02\u065E\u0665\x05\u0116\x8C\x02\u065F\u0665" +
		"\x05\u011A\x8E\x02\u0660\u0665\x05\u0122\x92\x02\u0661\u0665\x05\u0124" +
		"\x93\x02\u0662\u0665\x05\u0136\x9C\x02\u0663\u0665\x05\u013C\x9F\x02\u0664" +
		"\u065E\x03\x02\x02\x02\u0664\u065F\x03\x02\x02\x02\u0664\u0660\x03\x02" +
		"\x02\x02\u0664\u0661\x03\x02\x02\x02\u0664\u0662\x03\x02\x02\x02\u0664" +
		"\u0663\x03\x02\x02\x02\u0665\u0113\x03\x02\x02\x02\u0666\u066C\x05\u0116" +
		"\x8C\x02\u0667\u066C\x05\u011C\x8F\x02\u0668\u066C\x05\u0126\x94\x02\u0669" +
		"\u066C\x05\u0138\x9D\x02\u066A\u066C\x05\u013E\xA0\x02\u066B\u0666\x03" +
		"\x02\x02\x02\u066B\u0667\x03\x02\x02\x02\u066B\u0668\x03\x02\x02\x02\u066B" +
		"\u0669\x03\x02\x02\x02\u066B\u066A\x03\x02\x02\x02\u066C\u0115\x03\x02" +
		"\x02\x02\u066D\u067A\x05\u0108\x85\x02\u066E\u067A\x05\u0118\x8D\x02\u066F" +
		"\u067A\x05\u011E\x90\x02\u0670\u067A\x05\u0128\x95\x02\u0671\u067A\x05" +
		"\u012A\x96\x02\u0672\u067A\x05\u013A\x9E\x02\u0673\u067A\x05\u014E\xA8" +
		"\x02\u0674\u067A\x05\u0150\xA9\x02\u0675\u067A\x05\u0152\xAA\x02\u0676" +
		"\u067A\x05\u0156\xAC\x02\u0677\u067A\x05\u0154\xAB\x02\u0678\u067A\x05" +
		"\u0158\xAD\x02\u0679\u066D\x03\x02\x02\x02\u0679\u066E\x03\x02\x02\x02" +
		"\u0679\u066F\x03\x02\x02\x02\u0679\u0670\x03\x02\x02\x02\u0679\u0671\x03" +
		"\x02\x02\x02\u0679\u0672\x03\x02\x02\x02\u0679\u0673\x03\x02\x02\x02\u0679" +
		"\u0674\x03\x02\x02\x02\u0679\u0675\x03\x02\x02\x02\u0679\u0676\x03\x02" +
		"\x02\x02\u0679\u0677\x03\x02\x02\x02\u0679\u0678\x03\x02\x02\x02\u067A" +
		"\u0117\x03\x02\x02\x02\u067B\u067C\x07L\x02\x02\u067C\u0119\x03\x02\x02" +
		"\x02\u067D\u067E\x05\u01EA\xF6\x02\u067E\u067F\x07X\x02\x02\u067F\u0680" +
		"\x05\u0112\x8A\x02\u0680\u011B\x03\x02\x02\x02\u0681\u0682\x05\u01EA\xF6" +
		"\x02\u0682\u0683\x07X\x02\x02\u0683\u0684\x05\u0114\x8B\x02\u0684\u011D" +
		"\x03\x02\x02\x02\u0685\u0686\x05\u0120\x91\x02\u0686\u0687\x07L\x02\x02" +
		"\u0687\u011F\x03\x02\x02\x02\u0688\u0690\x05\u01BA\xDE\x02\u0689\u0690" +
		"\x05\u01D8\xED\x02\u068A\u0690\x05\u01DA\xEE\x02\u068B\u0690\x05\u01E0" +
		"\xF1\x02\u068C\u0690\x05\u01E4\xF3\x02\u068D\u0690\x05\u0198\xCD\x02\u068E" +
		"\u0690\x05\u0184\xC3\x02\u068F\u0688\x03\x02\x02\x02\u068F\u0689\x03\x02" +
		"\x02\x02\u068F\u068A\x03\x02\x02\x02\u068F\u068B\x03\x02\x02\x02\u068F" +
		"\u068C\x03\x02\x02\x02\u068F\u068D\x03\x02\x02\x02\u068F\u068E\x03\x02" +
		"\x02\x02\u0690\u0121\x03\x02\x02\x02\u0691\u0692\x07\"\x02\x02\u0692\u0693" +
		"\x07F\x02\x02\u0693\u0694\x05\u01AE\xD8\x02\u0694\u0695\x07G\x02\x02\u0695" +
		"\u0696\x05\u0112\x8A\x02\u0696\u0123\x03\x02\x02\x02\u0697\u0698\x07\"" +
		"\x02\x02\u0698\u0699\x07F\x02\x02\u0699\u069A\x05\u01AE\xD8\x02\u069A" +
		"\u069B\x07G\x02\x02\u069B\u069C\x05\u0114\x8B\x02\u069C\u069D\x07\x1B" +
		"\x02\x02\u069D\u069E\x05\u0112\x8A\x02\u069E\u0125\x03\x02\x02\x02\u069F" +
		"\u06A0\x07\"\x02\x02\u06A0\u06A1\x07F\x02\x02\u06A1\u06A2\x05\u01AE\xD8" +
		"\x02\u06A2\u06A3\x07G\x02\x02\u06A3\u06A4\x05\u0114\x8B\x02\u06A4\u06A5" +
		"\x07\x1B\x02\x02\u06A5\u06A6\x05\u0114\x8B\x02\u06A6\u0127\x03\x02\x02" +
		"\x02\u06A7\u06A8\x07\x0E\x02\x02\u06A8\u06A9\x05\u01AE\xD8\x02\u06A9\u06AA" +
		"\x07L\x02\x02\u06AA\u06B2\x03\x02\x02\x02\u06AB\u06AC\x07\x0E\x02\x02" +
		"\u06AC\u06AD\x05\u01AE\xD8\x02\u06AD\u06AE\x07X\x02\x02\u06AE\u06AF\x05" +
		"\u01AE\xD8\x02\u06AF\u06B0\x07L\x02\x02\u06B0\u06B2\x03\x02\x02\x02\u06B1" +
		"\u06A7\x03\x02\x02\x02\u06B1\u06AB\x03\x02\x02\x02\u06B2\u0129\x03\x02" +
		"\x02\x02\u06B3\u06B4\x075\x02\x02\u06B4\u06B5\x07F\x02\x02\u06B5\u06B6" +
		"\x05\u01AE\xD8\x02\u06B6\u06B7\x07G\x02\x02\u06B7\u06B8\x05\u012C\x97" +
		"\x02\u06B8\u012B\x03\x02\x02\x02\u06B9\u06BD\x07H\x02\x02\u06BA\u06BC" +
		"\x05\u012E\x98\x02\u06BB\u06BA\x03\x02\x02\x02\u06BC\u06BF\x03\x02\x02" +
		"\x02\u06BD\u06BB\x03\x02\x02\x02\u06BD\u06BE\x03\x02\x02\x02\u06BE\u06C3" +
		"\x03\x02\x02\x02\u06BF\u06BD\x03\x02\x02\x02\u06C0\u06C2\x05\u0132\x9A" +
		"\x02\u06C1\u06C0\x03\x02\x02\x02\u06C2\u06C5\x03\x02\x02\x02\u06C3\u06C1" +
		"\x03\x02\x02\x02\u06C3\u06C4\x03\x02\x02\x02\u06C4\u06C6\x03\x02\x02\x02" +
		"\u06C5\u06C3\x03\x02\x02\x02\u06C6\u06C7\x07I\x02\x02\u06C7\u012D\x03" +
		"\x02\x02\x02\u06C8\u06C9\x05\u0130\x99\x02\u06C9\u06CA\x05\u010A\x86\x02" +
		"\u06CA\u012F\x03\x02\x02\x02\u06CB\u06CD\x05\u0132\x9A\x02\u06CC\u06CB" +
		"\x03\x02\x02\x02\u06CD\u06CE\x03\x02\x02\x02\u06CE\u06CC\x03\x02\x02\x02" +
		"\u06CE\u06CF\x03\x02\x02\x02\u06CF\u0131\x03\x02\x02\x02\u06D0\u06D1\x07" +
		"\x12\x02\x02\u06D1\u06D2\x05\u01AC\xD7\x02\u06D2\u06D3\x07X\x02\x02\u06D3" +
		"\u06DB\x03\x02\x02\x02\u06D4\u06D5\x07\x12\x02\x02\u06D5\u06D6\x05\u0134" +
		"\x9B\x02\u06D6\u06D7\x07X\x02\x02\u06D7\u06DB\x03\x02\x02\x02\u06D8\u06D9" +
		"\x07\x18\x02\x02\u06D9\u06DB\x07X\x02\x02\u06DA\u06D0\x03\x02\x02\x02" +
		"\u06DA\u06D4\x03\x02\x02\x02\u06DA\u06D8\x03\x02\x02\x02\u06DB\u0133\x03" +
		"\x02\x02\x02\u06DC\u06DD\x05\u01EA\xF6\x02\u06DD\u0135\x03\x02\x02\x02" +
		"\u06DE\u06DF\x07>\x02\x02\u06DF\u06E0\x07F\x02\x02\u06E0\u06E1\x05\u01AE" +
		"\xD8\x02\u06E1\u06E2\x07G\x02\x02\u06E2\u06E3\x05\u0112\x8A\x02\u06E3" +
		"\u0137\x03\x02\x02\x02\u06E4\u06E5\x07>\x02\x02\u06E5\u06E6\x07F\x02\x02" +
		"\u06E6\u06E7\x05\u01AE\xD8\x02\u06E7\u06E8\x07G\x02\x02\u06E8\u06E9\x05" +
		"\u0114\x8B\x02\u06E9\u0139\x03\x02\x02\x02\u06EA\u06EB\x07\x19\x02\x02" +
		"\u06EB\u06EC\x05\u0112\x8A\x02\u06EC\u06ED\x07>\x02\x02\u06ED\u06EE\x07" +
		"F\x02\x02\u06EE\u06EF\x05\u01AE\xD8\x02\u06EF\u06F0\x07G\x02\x02\u06F0" +
		"\u06F1\x07L\x02\x02\u06F1\u013B\x03\x02\x02\x02\u06F2\u06F5\x05\u0140" +
		"\xA1\x02\u06F3\u06F5\x05\u014A\xA6\x02\u06F4\u06F2\x03\x02\x02\x02\u06F4" +
		"\u06F3\x03\x02\x02\x02\u06F5\u013D\x03\x02\x02\x02\u06F6\u06F9\x05\u0142" +
		"\xA2\x02\u06F7\u06F9\x05\u014C\xA7\x02\u06F8\u06F6\x03\x02\x02\x02\u06F8" +
		"\u06F7\x03\x02\x02\x02\u06F9\u013F\x03\x02\x02\x02\u06FA\u06FB\x07!\x02" +
		"\x02\u06FB\u06FD\x07F\x02\x02\u06FC\u06FE\x05\u0144\xA3\x02\u06FD\u06FC" +
		"\x03\x02\x02\x02\u06FD\u06FE\x03\x02\x02\x02\u06FE\u06FF\x03\x02\x02\x02" +
		"\u06FF\u0701\x07L\x02\x02\u0700\u0702\x05\u01AE\xD8\x02\u0701\u0700\x03" +
		"\x02\x02\x02\u0701\u0702\x03\x02\x02\x02\u0702\u0703\x03\x02\x02\x02\u0703" +
		"\u0705\x07L\x02\x02\u0704\u0706\x05\u0146\xA4\x02\u0705\u0704\x03\x02" +
		"\x02\x02\u0705\u0706\x03\x02\x02\x02\u0706\u0707\x03\x02\x02\x02\u0707" +
		"\u0708\x07G\x02\x02\u0708\u0709\x05\u0112\x8A\x02\u0709\u0141\x03\x02" +
		"\x02\x02\u070A\u070B\x07!\x02\x02\u070B\u070D\x07F\x02\x02\u070C\u070E" +
		"\x05\u0144\xA3\x02\u070D\u070C\x03\x02\x02\x02\u070D\u070E\x03\x02\x02" +
		"\x02\u070E\u070F\x03\x02\x02\x02\u070F\u0711\x07L\x02\x02\u0710\u0712" +
		"\x05\u01AE\xD8\x02\u0711\u0710\x03\x02\x02\x02\u0711\u0712\x03\x02\x02" +
		"\x02\u0712\u0713\x03\x02\x02\x02\u0713\u0715\x07L\x02\x02\u0714\u0716" +
		"\x05\u0146\xA4\x02\u0715\u0714\x03\x02\x02\x02\u0715\u0716\x03\x02\x02" +
		"\x02\u0716\u0717\x03\x02\x02\x02\u0717\u0718\x07G\x02\x02\u0718\u0719" +
		"\x05\u0114\x8B\x02\u0719\u0143\x03\x02\x02\x02\u071A\u071D\x05\u0148\xA5" +
		"\x02\u071B\u071D\x05\u0110\x89\x02\u071C\u071A\x03\x02\x02\x02\u071C\u071B" +
		"\x03\x02\x02\x02\u071D\u0145\x03\x02\x02\x02\u071E\u071F\x05\u0148\xA5" +
		"\x02\u071F\u0147\x03\x02\x02\x02\u0720\u0725\x05\u0120\x91\x02\u0721\u0722" +
		"\x07M\x02\x02\u0722\u0724\x05\u0120\x91\x02\u0723\u0721\x03\x02\x02\x02" +
		"\u0724\u0727\x03\x02\x02\x02\u0725\u0723\x03\x02\x02\x02\u0725\u0726\x03" +
		"\x02\x02\x02\u0726\u0149\x03\x02\x02\x02\u0727\u0725\x03\x02\x02\x02\u0728" +
		"\u0729\x07!\x02\x02\u0729\u072D\x07F\x02\x02\u072A\u072C\x05\xA8U\x02" +
		"\u072B\u072A\x03\x02\x02\x02\u072C\u072F\x03\x02\x02\x02\u072D\u072B\x03" +
		"\x02\x02\x02\u072D\u072E\x03\x02\x02\x02\u072E\u0730\x03\x02\x02\x02\u072F" +
		"\u072D\x03\x02\x02\x02\u0730\u0731\x05\x80A\x02\u0731\u0732\x05|?\x02" +
		"\u0732\u0733\x07X\x02\x02\u0733\u0734\x05\u01AE\xD8\x02\u0734\u0735\x07" +
		"G\x02\x02\u0735\u0736\x05\u0112\x8A\x02\u0736\u014B\x03\x02\x02\x02\u0737" +
		"\u0738\x07!\x02\x02\u0738\u073C\x07F\x02\x02\u0739\u073B\x05\xA8U\x02" +
		"\u073A\u0739\x03\x02\x02\x02\u073B\u073E\x03\x02\x02\x02\u073C\u073A\x03" +
		"\x02\x02\x02\u073C\u073D\x03\x02\x02\x02\u073D\u073F\x03\x02\x02\x02\u073E" +
		"\u073C\x03\x02\x02\x02\u073F\u0740\x05\x80A\x02\u0740\u0741\x05|?\x02" +
		"\u0741\u0742\x07X\x02\x02\u0742\u0743\x05\u01AE\xD8\x02\u0743\u0744\x07" +
		"G\x02\x02\u0744\u0745\x05\u0114\x8B\x02\u0745\u014D\x03\x02\x02\x02\u0746" +
		"\u0748\x07\x10\x02\x02\u0747\u0749\x05\u01EA\xF6\x02\u0748\u0747\x03\x02" +
		"\x02\x02\u0748\u0749\x03\x02\x02\x02\u0749\u074A\x03\x02\x02\x02\u074A" +
		"\u074B\x07L\x02\x02\u074B\u014F\x03\x02\x02\x02\u074C\u074E\x07\x17\x02" +
		"\x02\u074D\u074F\x05\u01EA\xF6\x02\u074E\u074D\x03\x02\x02\x02\u074E\u074F" +
		"\x03\x02\x02\x02\u074F\u0750\x03\x02\x02\x02\u0750\u0751\x07L\x02\x02" +
		"\u0751\u0151\x03\x02\x02\x02\u0752\u0754\x070\x02\x02\u0753\u0755\x05" +
		"\u01AE\xD8\x02\u0754\u0753\x03\x02\x02\x02\u0754\u0755\x03\x02\x02\x02" +
		"\u0755\u0756\x03\x02\x02\x02\u0756\u0757\x07L\x02\x02\u0757\u0153\x03" +
		"\x02\x02\x02\u0758\u0759\x078\x02\x02\u0759\u075A\x05\u01AE\xD8\x02\u075A" +
		"\u075B\x07L\x02\x02\u075B\u0155\x03\x02\x02\x02\u075C\u075D\x076\x02\x02" +
		"\u075D\u075E\x07F\x02\x02\u075E\u075F\x05\u01AE\xD8\x02\u075F\u0760\x07" +
		"G\x02\x02\u0760\u0761\x05\u0108\x85\x02\u0761\u0157\x03\x02\x02\x02\u0762" +
		"\u0763\x07;\x02\x02\u0763\u0764\x05\u0108\x85\x02\u0764\u0765\x05\u015A" +
		"\xAE\x02\u0765\u076F\x03\x02\x02\x02\u0766\u0767\x07;\x02\x02\u0767\u0769" +
		"\x05\u0108\x85\x02\u0768\u076A\x05\u015A\xAE\x02\u0769\u0768\x03\x02\x02" +
		"\x02\u0769\u076A\x03\x02\x02\x02\u076A\u076B\x03\x02\x02\x02\u076B\u076C" +
		"\x05\u0162\xB2\x02\u076C\u076F\x03\x02\x02\x02\u076D\u076F\x05\u0164\xB3" +
		"\x02\u076E\u0762\x03\x02\x02\x02\u076E\u0766\x03\x02\x02\x02\u076E\u076D" +
		"\x03\x02\x02\x02\u076F\u0159\x03\x02\x02\x02\u0770\u0772\x05\u015C\xAF" +
		"\x02\u0771\u0770\x03\x02\x02\x02\u0772\u0773\x03\x02\x02\x02\u0773\u0771" +
		"\x03\x02\x02\x02\u0773\u0774\x03\x02\x02\x02\u0774\u015B\x03\x02\x02\x02" +
		"\u0775\u0776\x07\x13\x02\x02\u0776\u0777\x07F\x02\x02\u0777\u0778\x05" +
		"\u015E\xB0\x02\u0778\u0779\x07G\x02\x02\u0779\u077A\x05\u0108\x85\x02" +
		"\u077A\u015D\x03\x02\x02\x02\u077B\u077D\x05\xA8U\x02\u077C\u077B\x03" +
		"\x02\x02\x02\u077D\u0780\x03\x02\x02\x02\u077E\u077C\x03\x02\x02\x02\u077E" +
		"\u077F\x03\x02\x02\x02\u077F\u0781\x03\x02\x02\x02\u0780\u077E\x03\x02" +
		"\x02\x02\u0781\u0782\x05\u0160\xB1\x02\u0782\u0783\x05|?\x02\u0783\u015F" +
		"\x03\x02\x02\x02\u0784\u0789\x05\x88E\x02\u0785\u0786\x07g\x02\x02\u0786" +
		"\u0788\x05\x10\t\x02\u0787\u0785\x03\x02\x02\x02\u0788\u078B\x03\x02\x02" +
		"\x02\u0789\u0787\x03\x02\x02\x02\u0789\u078A\x03\x02\x02\x02\u078A\u0161" +
		"\x03\x02\x02\x02\u078B\u0789\x03\x02\x02\x02\u078C\u078D\x07\x1F\x02\x02" +
		"\u078D\u078E\x05\u0108\x85\x02\u078E\u0163\x03\x02\x02\x02\u078F\u0790" +
		"\x07;\x02\x02\u0790\u0791\x05\u0166\xB4\x02\u0791\u0793\x05\u0108\x85" +
		"\x02\u0792\u0794\x05\u015A\xAE\x02\u0793\u0792\x03\x02\x02\x02\u0793\u0794" +
		"\x03\x02\x02\x02\u0794\u0796\x03\x02\x02\x02\u0795\u0797\x05\u0162\xB2" +
		"\x02\u0796\u0795\x03\x02\x02\x02\u0796\u0797\x03\x02\x02\x02\u0797\u0165" +
		"\x03\x02\x02\x02\u0798\u0799\x07F\x02\x02\u0799\u079B\x05\u0168\xB5\x02" +
		"\u079A\u079C\x07L\x02\x02\u079B\u079A\x03\x02\x02\x02\u079B\u079C\x03" +
		"\x02\x02\x02\u079C\u079D\x03\x02\x02\x02\u079D\u079E\x07G\x02\x02\u079E" +
		"\u0167\x03\x02\x02\x02\u079F\u07A4\x05\u016A\xB6\x02\u07A0\u07A1\x07L" +
		"\x02\x02\u07A1\u07A3\x05\u016A\xB6\x02\u07A2\u07A0\x03\x02\x02\x02\u07A3" +
		"\u07A6\x03\x02\x02\x02\u07A4\u07A2\x03\x02\x02\x02\u07A4\u07A5\x03\x02" +
		"\x02\x02\u07A5\u0169\x03\x02\x02\x02\u07A6\u07A4\x03\x02\x02\x02\u07A7" +
		"\u07A9\x05\xA8U\x02\u07A8\u07A7\x03\x02\x02\x02\u07A9\u07AC\x03\x02\x02" +
		"\x02\u07AA\u07A8\x03\x02\x02\x02\u07AA\u07AB\x03\x02\x02\x02\u07AB\u07AD" +
		"\x03\x02\x02\x02\u07AC\u07AA\x03\x02\x02\x02\u07AD\u07AE\x05\x80A\x02" +
		"\u07AE\u07AF\x05|?\x02\u07AF\u07B0\x07R\x02\x02\u07B0\u07B1\x05\u01AE" +
		"\xD8\x02\u07B1\u07B4\x03\x02\x02\x02\u07B2\u07B4\x05\u016C\xB7\x02\u07B3" +
		"\u07AA\x03\x02\x02\x02\u07B3\u07B2\x03\x02\x02\x02\u07B4\u016B\x03\x02" +
		"\x02\x02\u07B5\u07B8\x05<\x1F\x02\u07B6\u07B8\x05\u018C\xC7\x02\u07B7" +
		"\u07B5\x03\x02\x02\x02\u07B7\u07B6\x03\x02\x02\x02\u07B8\u016D\x03\x02" +
		"\x02\x02\u07B9\u07BC\x05\u017C\xBF\x02\u07BA\u07BC\x05\u01A6\xD4\x02\u07BB" +
		"\u07B9\x03\x02\x02\x02\u07BB\u07BA\x03\x02\x02\x02\u07BC\u07C0\x03\x02" +
		"\x02\x02\u07BD\u07BF\x05\u0176\xBC\x02\u07BE\u07BD\x03\x02\x02\x02\u07BF" +
		"\u07C2\x03\x02\x02\x02\u07C0\u07BE\x03\x02\x02\x02\u07C0\u07C1\x03\x02" +
		"\x02\x02\u07C1\u016F\x03\x02\x02\x02\u07C2\u07C0\x03\x02\x02\x02\u07C3" +
		"\u07D4\x05\x02\x02\x02\u07C4\u07D4\x05\u0182\xC2\x02\u07C5\u07D4\x077" +
		"\x02\x02\u07C6\u07C7\x058\x1D\x02\u07C7\u07C8\x07N\x02\x02\u07C8\u07C9" +
		"\x077\x02\x02\u07C9\u07D4\x03\x02\x02\x02\u07CA\u07CB\x07F\x02\x02\u07CB" +
		"\u07CC\x05\u01AE\xD8\x02\u07CC\u07CD\x07G\x02\x02\u07CD\u07D4\x03\x02" +
		"\x02\x02\u07CE\u07D4\x05\u0184\xC3\x02\u07CF\u07D4\x05\u018C\xC7\x02\u07D0" +
		"\u07D4\x05\u0192\xCA\x02\u07D1\u07D4\x05\u0198\xCD\x02\u07D2\u07D4\x05" +
		"\u01A0\xD1\x02\u07D3\u07C3\x03\x02\x02\x02\u07D3\u07C4\x03\x02\x02\x02" +
		"\u07D3\u07C5\x03\x02\x02\x02\u07D3\u07C6\x03\x02\x02\x02\u07D3\u07CA\x03" +
		"\x02\x02\x02\u07D3\u07CE\x03\x02\x02\x02\u07D3\u07CF\x03\x02\x02\x02\u07D3" +
		"\u07D0\x03\x02\x02\x02\u07D3\u07D1\x03\x02\x02\x02\u07D3\u07D2\x03\x02" +
		"\x02\x02\u07D4\u0171\x03\x02\x02\x02\u07D5\u07D6\x03\x02\x02\x02\u07D6" +
		"\u0173\x03\x02\x02\x02\u07D7\u07F4\x05\x02\x02\x02\u07D8\u07DD\x058\x1D" +
		"\x02\u07D9\u07DA\x07J\x02\x02\u07DA\u07DC\x07K\x02\x02\u07DB\u07D9\x03" +
		"\x02\x02\x02\u07DC\u07DF\x03\x02\x02\x02\u07DD\u07DB\x03\x02\x02\x02\u07DD" +
		"\u07DE\x03\x02\x02\x02\u07DE\u07E0\x03\x02\x02\x02\u07DF\u07DD\x03\x02" +
		"\x02\x02\u07E0\u07E1\x07N\x02\x02\u07E1\u07E2\x07\x15\x02\x02\u07E2\u07F4" +
		"\x03\x02\x02\x02\u07E3\u07E4\x07<\x02\x02\u07E4\u07E5\x07N\x02\x02\u07E5" +
		"\u07F4\x07\x15\x02\x02\u07E6\u07F4\x077\x02\x02\u07E7\u07E8\x058\x1D\x02" +
		"\u07E8\u07E9\x07N\x02\x02\u07E9\u07EA\x077\x02\x02\u07EA\u07F4\x03\x02" +
		"\x02\x02\u07EB\u07EC\x07F\x02\x02\u07EC\u07ED\x05\u01AE\xD8\x02\u07ED" +
		"\u07EE\x07G\x02\x02\u07EE\u07F4\x03\x02\x02\x02\u07EF\u07F4\x05\u0184" +
		"\xC3\x02\u07F0\u07F4\x05\u018C\xC7\x02\u07F1\u07F4\x05\u0198\xCD\x02\u07F2" +
		"\u07F4\x05\u01A0\xD1\x02\u07F3\u07D7\x03\x02\x02\x02\u07F3\u07D8\x03\x02" +
		"\x02\x02\u07F3\u07E3\x03\x02\x02\x02\u07F3\u07E6\x03\x02\x02\x02\u07F3" +
		"\u07E7\x03\x02\x02\x02\u07F3\u07EB\x03\x02\x02\x02\u07F3\u07EF\x03\x02" +
		"\x02\x02\u07F3\u07F0\x03\x02\x02\x02\u07F3\u07F1\x03\x02\x02\x02\u07F3" +
		"\u07F2\x03\x02\x02\x02\u07F4\u0175\x03\x02\x02\x02\u07F5\u07FB\x05\u0186" +
		"\xC4\x02\u07F6\u07FB\x05\u018E\xC8\x02\u07F7\u07FB\x05\u0194\xCB\x02\u07F8" +
		"\u07FB\x05\u019A\xCE\x02\u07F9\u07FB\x05\u01A2\xD2\x02\u07FA\u07F5\x03" +
		"\x02\x02\x02\u07FA\u07F6\x03\x02\x02\x02\u07FA\u07F7\x03\x02\x02\x02\u07FA" +
		"\u07F8\x03\x02\x02\x02\u07FA\u07F9\x03\x02\x02\x02\u07FB\u0177\x03\x02" +
		"\x02\x02\u07FC\u07FD\x03\x02\x02\x02\u07FD\u0179\x03\x02\x02\x02\u07FE" +
		"\u0803\x05\u0186\xC4\x02\u07FF\u0803\x05\u018E\xC8\x02\u0800\u0803\x05" +
		"\u019A\xCE\x02\u0801\u0803\x05\u01A2\xD2\x02\u0802\u07FE\x03\x02\x02\x02" +
		"\u0802\u07FF\x03\x02\x02\x02\u0802\u0800\x03\x02\x02\x02\u0802\u0801\x03" +
		"\x02\x02\x02\u0803\u017B\x03\x02\x02\x02\u0804\u082D\x05\x02\x02\x02\u0805" +
		"\u080A\x058\x1D\x02\u0806\u0807\x07J\x02\x02\u0807\u0809\x07K\x02\x02" +
		"\u0808\u0806\x03\x02\x02\x02\u0809\u080C\x03\x02\x02\x02\u080A\u0808\x03" +
		"\x02\x02\x02\u080A\u080B\x03\x02\x02\x02\u080B\u080D\x03\x02\x02\x02\u080C" +
		"\u080A\x03\x02\x02\x02\u080D\u080E\x07N\x02\x02\u080E\u080F\x07\x15\x02" +
		"\x02\u080F\u082D\x03\x02\x02\x02\u0810\u0815\x05\x82B\x02\u0811\u0812" +
		"\x07J\x02\x02\u0812\u0814\x07K\x02\x02\u0813\u0811\x03\x02\x02\x02\u0814" +
		"\u0817\x03\x02\x02\x02\u0815\u0813\x03\x02\x02\x02\u0815\u0816\x03\x02" +
		"\x02\x02\u0816\u0818\x03\x02\x02\x02\u0817\u0815\x03\x02\x02\x02\u0818" +
		"\u0819\x07N\x02\x02\u0819\u081A\x07\x15\x02\x02\u081A\u082D\x03\x02\x02" +
		"\x02\u081B\u081C\x07<\x02\x02\u081C\u081D\x07N\x02\x02\u081D\u082D\x07" +
		"\x15\x02\x02\u081E\u082D\x077\x02\x02\u081F\u0820\x058\x1D\x02\u0820\u0821" +
		"\x07N\x02\x02\u0821\u0822\x077\x02\x02\u0822\u082D\x03\x02\x02\x02\u0823" +
		"\u0824\x07F\x02\x02\u0824\u0825\x05\u01AE\xD8\x02\u0825\u0826\x07G\x02" +
		"\x02\u0826\u082D\x03\x02\x02\x02\u0827\u082D\x05\u0188\xC5\x02\u0828\u082D" +
		"\x05\u0190\xC9\x02\u0829\u082D\x05\u0196\xCC\x02\u082A\u082D\x05\u019C" +
		"\xCF\x02\u082B\u082D\x05\u01A4\xD3\x02\u082C\u0804\x03\x02\x02\x02\u082C" +
		"\u0805\x03\x02\x02\x02\u082C\u0810\x03\x02\x02\x02\u082C\u081B\x03\x02" +
		"\x02\x02\u082C\u081E\x03\x02\x02\x02\u082C\u081F\x03\x02\x02\x02\u082C" +
		"\u0823\x03\x02\x02";
	private static readonly _serializedATNSegment4: string =
		"\x02\u082C\u0827\x03\x02\x02\x02\u082C\u0828\x03\x02\x02\x02\u082C\u0829" +
		"\x03\x02\x02\x02\u082C\u082A\x03\x02\x02\x02\u082C\u082B\x03\x02\x02\x02" +
		"\u082D\u017D\x03\x02\x02\x02\u082E\u082F\x03\x02\x02\x02\u082F\u017F\x03" +
		"\x02\x02\x02\u0830\u0858\x05\x02\x02\x02\u0831\u0836\x058\x1D\x02\u0832" +
		"\u0833\x07J\x02\x02\u0833\u0835\x07K\x02\x02\u0834\u0832\x03\x02\x02\x02" +
		"\u0835\u0838\x03\x02\x02\x02\u0836\u0834\x03\x02\x02\x02\u0836\u0837\x03" +
		"\x02\x02\x02\u0837\u0839\x03\x02\x02\x02\u0838\u0836\x03\x02\x02\x02\u0839" +
		"\u083A\x07N\x02\x02\u083A\u083B\x07\x15\x02\x02\u083B\u0858\x03\x02\x02" +
		"\x02\u083C\u0841\x05\x82B\x02\u083D\u083E\x07J\x02\x02\u083E\u0840\x07" +
		"K\x02\x02\u083F\u083D\x03\x02\x02\x02\u0840\u0843\x03\x02\x02\x02\u0841" +
		"\u083F\x03\x02\x02\x02\u0841\u0842\x03\x02\x02\x02\u0842\u0844\x03\x02" +
		"\x02\x02\u0843\u0841\x03\x02\x02\x02\u0844\u0845\x07N\x02\x02\u0845\u0846" +
		"\x07\x15\x02\x02\u0846\u0858\x03\x02\x02\x02\u0847\u0848\x07<\x02\x02" +
		"\u0848\u0849\x07N\x02\x02\u0849\u0858\x07\x15\x02\x02\u084A\u0858\x07" +
		"7\x02\x02\u084B\u084C\x058\x1D\x02\u084C\u084D\x07N\x02\x02\u084D\u084E" +
		"\x077\x02\x02\u084E\u0858\x03\x02\x02\x02\u084F\u0850\x07F\x02\x02\u0850" +
		"\u0851\x05\u01AE\xD8\x02\u0851\u0852\x07G\x02\x02\u0852\u0858\x03\x02" +
		"\x02\x02\u0853\u0858\x05\u0188\xC5\x02\u0854\u0858\x05\u0190\xC9\x02\u0855" +
		"\u0858\x05\u019C\xCF\x02\u0856\u0858\x05\u01A4\xD3\x02\u0857\u0830\x03" +
		"\x02\x02\x02\u0857\u0831\x03\x02\x02\x02\u0857\u083C\x03\x02\x02\x02\u0857" +
		"\u0847\x03\x02\x02\x02\u0857\u084A\x03\x02\x02\x02\u0857\u084B\x03\x02" +
		"\x02\x02\u0857\u084F\x03\x02\x02\x02\u0857\u0853\x03\x02\x02\x02\u0857" +
		"\u0854\x03\x02\x02\x02\u0857\u0855\x03\x02\x02\x02\u0857\u0856\x03\x02" +
		"\x02\x02\u0858\u0181\x03\x02\x02\x02\u0859\u085D\x058\x1D\x02\u085A\u085D" +
		"\x05\x06\x04\x02\u085B\u085D\x07\x0F\x02\x02\u085C\u0859\x03\x02\x02\x02" +
		"\u085C\u085A\x03\x02\x02\x02\u085C\u085B\x03\x02\x02\x02\u085D\u0862\x03" +
		"\x02\x02\x02\u085E\u085F\x07J\x02\x02\u085F\u0861\x07K\x02\x02\u0860\u085E" +
		"\x03\x02\x02\x02\u0861\u0864\x03\x02\x02\x02\u0862\u0860\x03\x02\x02\x02" +
		"\u0862\u0863\x03\x02\x02\x02\u0863\u0865\x03\x02\x02\x02\u0864\u0862\x03" +
		"\x02\x02\x02\u0865\u0866\x07N\x02\x02\u0866\u086B\x07\x15\x02\x02\u0867" +
		"\u0868\x07<\x02\x02\u0868\u0869\x07N\x02\x02\u0869\u086B\x07\x15\x02\x02" +
		"\u086A\u085C\x03\x02\x02\x02\u086A\u0867\x03\x02\x02\x02\u086B\u0183\x03" +
		"\x02\x02\x02\u086C\u086E\x07+\x02\x02\u086D\u086F\x05*\x16\x02\u086E\u086D" +
		"\x03\x02\x02\x02\u086E\u086F\x03\x02\x02\x02\u086F\u0873\x03\x02\x02\x02" +
		"\u0870\u0872\x05\xF2z\x02\u0871\u0870\x03\x02\x02\x02\u0872\u0875\x03" +
		"\x02\x02\x02\u0873\u0871\x03\x02\x02\x02\u0873\u0874\x03\x02\x02\x02\u0874" +
		"\u0876\x03\x02\x02\x02\u0875\u0873\x03\x02\x02\x02\u0876\u0881\x05\u01EA" +
		"\xF6\x02\u0877\u087B\x07N\x02\x02\u0878\u087A\x05\xF2z\x02\u0879\u0878" +
		"\x03\x02\x02\x02\u087A\u087D\x03\x02\x02\x02\u087B\u0879\x03\x02\x02\x02" +
		"\u087B\u087C\x03\x02\x02\x02\u087C\u087E\x03\x02\x02\x02\u087D\u087B\x03" +
		"\x02\x02\x02\u087E\u0880\x05\u01EA\xF6\x02\u087F\u0877\x03\x02\x02\x02" +
		"\u0880\u0883\x03\x02\x02\x02\u0881\u087F\x03\x02\x02\x02\u0881\u0882\x03" +
		"\x02\x02\x02\u0882\u0885\x03\x02\x02\x02\u0883\u0881\x03\x02\x02\x02\u0884" +
		"\u0886\x05\u018A\xC6\x02\u0885\u0884\x03\x02\x02\x02\u0885\u0886\x03\x02" +
		"\x02\x02\u0886\u0887\x03\x02\x02\x02\u0887\u0889\x07F\x02\x02\u0888\u088A" +
		"\x05\u019E\xD0\x02\u0889\u0888\x03\x02\x02\x02\u0889\u088A\x03\x02\x02" +
		"\x02\u088A\u088B\x03\x02\x02\x02\u088B\u088D\x07G\x02\x02\u088C\u088E" +
		"\x05n8\x02\u088D\u088C\x03\x02\x02\x02\u088D\u088E\x03\x02\x02\x02\u088E" +
		"\u08C0\x03\x02\x02\x02\u088F\u0890\x05<\x1F\x02\u0890\u0891\x07N\x02\x02" +
		"\u0891\u0893\x07+\x02\x02\u0892\u0894\x05*\x16\x02\u0893\u0892\x03\x02" +
		"\x02\x02\u0893\u0894\x03\x02\x02\x02\u0894\u0898\x03\x02\x02\x02\u0895" +
		"\u0897\x05\xF2z\x02\u0896\u0895\x03\x02\x02\x02\u0897\u089A\x03\x02\x02" +
		"\x02\u0898\u0896\x03\x02\x02\x02\u0898\u0899\x03\x02\x02\x02\u0899\u089B" +
		"\x03\x02\x02\x02\u089A\u0898\x03\x02\x02\x02\u089B\u089D\x05\u01EA\xF6" +
		"\x02\u089C\u089E\x05\u018A\xC6\x02\u089D\u089C\x03\x02\x02\x02\u089D\u089E" +
		"\x03\x02\x02\x02\u089E\u089F\x03\x02\x02\x02\u089F\u08A1\x07F\x02\x02" +
		"\u08A0\u08A2\x05\u019E\xD0\x02\u08A1\u08A0\x03\x02\x02\x02\u08A1\u08A2" +
		"\x03\x02\x02\x02\u08A2\u08A3\x03\x02\x02\x02\u08A3\u08A5\x07G\x02\x02" +
		"\u08A4\u08A6\x05n8\x02\u08A5\u08A4\x03\x02\x02\x02\u08A5\u08A6\x03\x02" +
		"\x02\x02\u08A6\u08C0\x03\x02\x02\x02\u08A7\u08A8\x05\u016E\xB8\x02\u08A8" +
		"\u08A9\x07N\x02\x02\u08A9\u08AB\x07+\x02\x02\u08AA\u08AC\x05*\x16\x02" +
		"\u08AB\u08AA\x03\x02\x02\x02\u08AB\u08AC\x03\x02\x02\x02\u08AC\u08B0\x03" +
		"\x02\x02\x02\u08AD\u08AF\x05\xF2z\x02\u08AE\u08AD\x03\x02\x02\x02\u08AF" +
		"\u08B2\x03\x02\x02\x02\u08B0\u08AE\x03\x02\x02\x02\u08B0\u08B1\x03\x02" +
		"\x02\x02\u08B1\u08B3\x03\x02\x02\x02\u08B2\u08B0\x03\x02\x02\x02\u08B3" +
		"\u08B5\x05\u01EA\xF6\x02\u08B4\u08B6\x05\u018A\xC6\x02\u08B5\u08B4\x03" +
		"\x02\x02\x02\u08B5\u08B6\x03\x02\x02\x02\u08B6\u08B7\x03\x02\x02\x02\u08B7" +
		"\u08B9\x07F\x02\x02\u08B8\u08BA\x05\u019E\xD0\x02\u08B9\u08B8\x03\x02" +
		"\x02\x02\u08B9\u08BA\x03\x02\x02\x02\u08BA\u08BB\x03\x02\x02\x02\u08BB" +
		"\u08BD\x07G\x02\x02\u08BC\u08BE\x05n8\x02\u08BD\u08BC\x03\x02\x02\x02" +
		"\u08BD\u08BE\x03\x02\x02\x02\u08BE\u08C0\x03\x02\x02\x02\u08BF\u086C\x03" +
		"\x02\x02\x02\u08BF\u088F\x03\x02\x02\x02\u08BF\u08A7\x03\x02\x02\x02\u08C0" +
		"\u0185\x03\x02\x02\x02\u08C1\u08C2\x07N\x02\x02\u08C2\u08C4\x07+\x02\x02" +
		"\u08C3\u08C5\x05*\x16\x02\u08C4\u08C3\x03\x02\x02\x02\u08C4\u08C5\x03" +
		"\x02\x02\x02\u08C5\u08C9\x03\x02\x02\x02\u08C6\u08C8\x05\xF2z\x02\u08C7" +
		"\u08C6\x03\x02\x02\x02\u08C8\u08CB\x03\x02\x02\x02\u08C9\u08C7\x03\x02" +
		"\x02\x02\u08C9\u08CA\x03\x02\x02\x02\u08CA\u08CC\x03\x02\x02\x02\u08CB" +
		"\u08C9\x03\x02\x02\x02\u08CC\u08CE\x05\u01EA\xF6\x02\u08CD\u08CF\x05\u018A" +
		"\xC6\x02\u08CE\u08CD\x03\x02\x02\x02\u08CE\u08CF\x03\x02\x02\x02\u08CF" +
		"\u08D0\x03\x02\x02\x02\u08D0\u08D2\x07F\x02\x02\u08D1\u08D3\x05\u019E" +
		"\xD0\x02\u08D2\u08D1\x03\x02\x02\x02\u08D2\u08D3\x03\x02\x02\x02\u08D3" +
		"\u08D4\x03\x02\x02\x02\u08D4\u08D6\x07G\x02\x02\u08D5\u08D7\x05n8\x02" +
		"\u08D6\u08D5\x03\x02\x02\x02\u08D6\u08D7\x03\x02\x02\x02\u08D7\u0187\x03" +
		"\x02\x02\x02\u08D8\u08DA\x07+\x02\x02\u08D9\u08DB\x05*\x16\x02\u08DA\u08D9" +
		"\x03\x02\x02\x02\u08DA\u08DB\x03\x02\x02\x02\u08DB\u08DF\x03\x02\x02\x02" +
		"\u08DC\u08DE\x05\xF2z\x02\u08DD\u08DC\x03\x02\x02\x02\u08DE\u08E1\x03" +
		"\x02\x02\x02\u08DF\u08DD\x03\x02\x02\x02\u08DF\u08E0\x03\x02\x02\x02\u08E0" +
		"\u08E2\x03\x02\x02\x02\u08E1\u08DF\x03\x02\x02\x02\u08E2\u08ED\x05\u01EA" +
		"\xF6\x02\u08E3\u08E7\x07N\x02\x02\u08E4\u08E6\x05\xF2z\x02\u08E5\u08E4" +
		"\x03\x02\x02\x02\u08E6\u08E9\x03\x02\x02\x02\u08E7\u08E5\x03\x02\x02\x02" +
		"\u08E7\u08E8\x03\x02\x02\x02\u08E8\u08EA\x03\x02\x02\x02\u08E9\u08E7\x03" +
		"\x02\x02\x02\u08EA\u08EC\x05\u01EA\xF6\x02\u08EB\u08E3\x03\x02\x02\x02" +
		"\u08EC\u08EF\x03\x02\x02\x02\u08ED\u08EB\x03\x02\x02\x02\u08ED\u08EE\x03" +
		"\x02\x02\x02\u08EE\u08F1\x03\x02\x02\x02\u08EF\u08ED\x03\x02\x02\x02\u08F0" +
		"\u08F2\x05\u018A\xC6\x02\u08F1\u08F0\x03\x02\x02\x02\u08F1\u08F2\x03\x02" +
		"\x02\x02\u08F2\u08F3\x03\x02\x02\x02\u08F3\u08F5\x07F\x02\x02\u08F4\u08F6" +
		"\x05\u019E\xD0\x02\u08F5\u08F4\x03\x02\x02\x02\u08F5\u08F6\x03\x02\x02" +
		"\x02\u08F6\u08F7\x03\x02\x02\x02\u08F7\u08F9\x07G\x02\x02\u08F8\u08FA" +
		"\x05n8\x02\u08F9\u08F8\x03\x02\x02\x02\u08F9\u08FA\x03\x02\x02\x02\u08FA" +
		"\u0914\x03\x02\x02\x02\u08FB\u08FC\x05<\x1F\x02\u08FC\u08FD\x07N\x02\x02" +
		"\u08FD\u08FF\x07+\x02\x02\u08FE\u0900\x05*\x16\x02\u08FF\u08FE\x03\x02" +
		"\x02\x02\u08FF\u0900\x03\x02\x02\x02\u0900\u0904\x03\x02\x02\x02\u0901" +
		"\u0903\x05\xF2z\x02\u0902\u0901\x03\x02\x02\x02\u0903\u0906\x03\x02\x02" +
		"\x02\u0904\u0902\x03\x02\x02\x02\u0904\u0905\x03\x02\x02\x02\u0905\u0907" +
		"\x03\x02\x02\x02\u0906\u0904\x03\x02\x02\x02\u0907\u0909\x05\u01EA\xF6" +
		"\x02\u0908\u090A\x05\u018A\xC6\x02\u0909\u0908\x03\x02\x02\x02\u0909\u090A" +
		"\x03\x02\x02\x02\u090A\u090B\x03\x02\x02\x02\u090B\u090D\x07F\x02\x02" +
		"\u090C\u090E\x05\u019E\xD0\x02\u090D\u090C\x03\x02\x02\x02\u090D\u090E" +
		"\x03\x02\x02\x02\u090E\u090F\x03\x02\x02\x02\u090F\u0911\x07G\x02\x02" +
		"\u0910\u0912\x05n8\x02\u0911\u0910\x03\x02\x02\x02\u0911\u0912\x03\x02" +
		"\x02\x02\u0912\u0914\x03\x02\x02\x02\u0913\u08D8\x03\x02\x02\x02\u0913" +
		"\u08FB\x03\x02\x02\x02\u0914\u0189\x03\x02\x02\x02\u0915\u0919\x05*\x16" +
		"\x02\u0916\u0917\x07T\x02\x02\u0917\u0919\x07S\x02\x02\u0918\u0915\x03" +
		"\x02\x02\x02\u0918\u0916\x03\x02\x02\x02\u0919\u018B\x03\x02\x02\x02\u091A" +
		"\u091B\x05\u016E\xB8\x02\u091B\u091C\x07N\x02\x02\u091C\u091D\x05\u01EA" +
		"\xF6\x02\u091D\u0928\x03\x02\x02\x02\u091E\u091F\x074\x02\x02\u091F\u0920" +
		"\x07N\x02\x02\u0920\u0928\x05\u01EA\xF6\x02\u0921\u0922\x058\x1D\x02\u0922" +
		"\u0923\x07N\x02\x02\u0923\u0924\x074\x02\x02\u0924\u0925\x07N\x02\x02" +
		"\u0925\u0926\x05\u01EA\xF6\x02\u0926\u0928\x03\x02\x02\x02\u0927\u091A" +
		"\x03\x02\x02\x02\u0927\u091E\x03\x02\x02\x02\u0927\u0921\x03\x02\x02\x02" +
		"\u0928\u018D\x03\x02\x02\x02\u0929\u092A\x07N\x02\x02\u092A\u092B\x05" +
		"\u01EA\xF6\x02\u092B\u018F\x03\x02\x02\x02\u092C\u092D\x074\x02\x02\u092D" +
		"\u092E\x07N\x02\x02\u092E\u0936\x05\u01EA\xF6\x02\u092F\u0930\x058\x1D" +
		"\x02\u0930\u0931\x07N\x02\x02\u0931\u0932\x074\x02\x02\u0932\u0933\x07" +
		"N\x02\x02\u0933\u0934\x05\u01EA\xF6\x02\u0934\u0936\x03\x02\x02\x02\u0935" +
		"\u092C\x03\x02\x02\x02\u0935\u092F\x03\x02\x02\x02\u0936\u0191\x03\x02" +
		"\x02\x02\u0937\u0938\x05<\x1F\x02\u0938\u0939\x07J\x02\x02\u0939\u093A" +
		"\x05\u01AE\xD8\x02\u093A\u093B\x07K\x02\x02\u093B\u0942\x03\x02\x02\x02" +
		"\u093C\u093D\x05\u0174\xBB\x02\u093D\u093E\x07J\x02\x02\u093E\u093F\x05" +
		"\u01AE\xD8\x02\u093F\u0940\x07K\x02\x02\u0940\u0942\x03\x02\x02\x02\u0941" +
		"\u0937\x03\x02\x02\x02\u0941\u093C\x03\x02\x02\x02\u0942\u094A\x03\x02" +
		"\x02\x02\u0943\u0944\x05\u0172\xBA\x02\u0944\u0945\x07J\x02\x02\u0945" +
		"\u0946\x05\u01AE\xD8\x02\u0946\u0947\x07K\x02\x02\u0947\u0949\x03\x02" +
		"\x02\x02\u0948\u0943\x03\x02\x02\x02\u0949\u094C\x03\x02\x02\x02\u094A" +
		"\u0948\x03\x02\x02\x02\u094A\u094B\x03\x02\x02\x02\u094B\u0193\x03\x02" +
		"\x02\x02\u094C\u094A\x03\x02\x02\x02\u094D\u094E\x05\u017A\xBE\x02\u094E" +
		"\u094F\x07J\x02\x02\u094F\u0950\x05\u01AE\xD8\x02\u0950\u0951\x07K\x02" +
		"\x02\u0951\u0959\x03\x02\x02\x02\u0952\u0953\x05\u0178\xBD\x02\u0953\u0954" +
		"\x07J\x02\x02\u0954\u0955\x05\u01AE\xD8\x02\u0955\u0956\x07K\x02\x02\u0956" +
		"\u0958\x03\x02\x02\x02\u0957\u0952\x03\x02\x02\x02\u0958\u095B\x03\x02" +
		"\x02\x02\u0959\u0957\x03\x02\x02\x02\u0959\u095A\x03\x02\x02\x02\u095A" +
		"\u0195\x03\x02\x02\x02\u095B\u0959\x03\x02\x02\x02\u095C\u095D\x05<\x1F" +
		"\x02\u095D\u095E\x07J\x02\x02\u095E\u095F\x05\u01AE\xD8\x02\u095F\u0960" +
		"\x07K\x02\x02\u0960\u0967\x03\x02\x02\x02\u0961\u0962\x05\u0180\xC1\x02" +
		"\u0962\u0963\x07J\x02\x02\u0963\u0964\x05\u01AE\xD8\x02\u0964\u0965\x07" +
		"K\x02\x02\u0965\u0967\x03\x02\x02\x02\u0966\u095C\x03\x02\x02\x02\u0966" +
		"\u0961\x03\x02\x02\x02\u0967\u096F\x03\x02\x02\x02\u0968\u0969\x05\u017E" +
		"\xC0\x02\u0969\u096A\x07J\x02\x02\u096A\u096B\x05\u01AE\xD8\x02\u096B" +
		"\u096C\x07K\x02\x02\u096C\u096E\x03\x02\x02\x02\u096D\u0968\x03\x02\x02" +
		"\x02\u096E\u0971\x03\x02\x02\x02\u096F\u096D\x03\x02\x02\x02\u096F\u0970" +
		"\x03\x02\x02\x02\u0970\u0197\x03\x02\x02\x02\u0971\u096F\x03\x02\x02\x02" +
		"\u0972\u0973\x05> \x02\u0973\u0975\x07F\x02\x02\u0974\u0976\x05\u019E" +
		"\xD0\x02\u0975\u0974\x03\x02\x02\x02\u0975\u0976\x03\x02\x02\x02\u0976" +
		"\u0977\x03\x02\x02\x02\u0977\u0978\x07G\x02\x02\u0978\u09B8\x03\x02\x02" +
		"\x02\u0979\u097A\x058\x1D\x02\u097A\u097C\x07N\x02\x02\u097B\u097D\x05" +
		"*\x16\x02\u097C\u097B\x03\x02\x02\x02\u097C\u097D\x03\x02\x02\x02\u097D" +
		"\u097E\x03\x02\x02\x02\u097E\u097F\x05\u01EA\xF6\x02\u097F\u0981\x07F" +
		"\x02\x02\u0980\u0982\x05\u019E\xD0\x02\u0981\u0980\x03\x02\x02\x02\u0981" +
		"\u0982\x03\x02\x02\x02\u0982\u0983\x03\x02\x02\x02\u0983\u0984\x07G\x02" +
		"\x02\u0984\u09B8\x03\x02\x02\x02\u0985\u0986\x05<\x1F\x02\u0986\u0988" +
		"\x07N\x02\x02\u0987\u0989\x05*\x16\x02\u0988\u0987\x03\x02\x02\x02\u0988" +
		"\u0989\x03\x02\x02\x02\u0989\u098A\x03\x02\x02\x02\u098A\u098B\x05\u01EA" +
		"\xF6\x02\u098B\u098D\x07F\x02\x02\u098C\u098E\x05\u019E\xD0\x02\u098D" +
		"\u098C\x03\x02\x02\x02\u098D\u098E\x03\x02\x02\x02\u098E\u098F\x03\x02" +
		"\x02\x02\u098F\u0990\x07G\x02\x02\u0990\u09B8\x03\x02\x02\x02\u0991\u0992" +
		"\x05\u016E\xB8\x02\u0992\u0994\x07N\x02\x02\u0993\u0995\x05*\x16\x02\u0994" +
		"\u0993\x03\x02\x02\x02\u0994\u0995\x03\x02\x02\x02\u0995\u0996\x03\x02" +
		"\x02\x02\u0996\u0997\x05\u01EA\xF6\x02\u0997\u0999\x07F\x02\x02\u0998" +
		"\u099A\x05\u019E\xD0\x02\u0999\u0998\x03\x02\x02\x02\u0999\u099A\x03\x02" +
		"\x02\x02\u099A\u099B\x03\x02\x02\x02\u099B\u099C\x07G\x02\x02\u099C\u09B8" +
		"\x03\x02\x02\x02\u099D\u099E\x074\x02\x02\u099E\u09A0\x07N\x02\x02\u099F" +
		"\u09A1\x05*\x16\x02\u09A0\u099F\x03\x02\x02\x02\u09A0\u09A1\x03\x02\x02" +
		"\x02\u09A1\u09A2\x03\x02\x02\x02\u09A2\u09A3\x05\u01EA\xF6\x02\u09A3\u09A5" +
		"\x07F\x02\x02\u09A4\u09A6\x05\u019E\xD0\x02\u09A5\u09A4\x03\x02\x02\x02" +
		"\u09A5\u09A6\x03\x02\x02\x02\u09A6\u09A7\x03\x02\x02\x02\u09A7\u09A8\x07" +
		"G\x02\x02\u09A8\u09B8\x03\x02\x02\x02\u09A9\u09AA\x058\x1D\x02\u09AA\u09AB" +
		"\x07N\x02\x02\u09AB\u09AC\x074\x02\x02\u09AC\u09AE\x07N\x02\x02\u09AD" +
		"\u09AF\x05*\x16\x02\u09AE\u09AD\x03\x02\x02\x02\u09AE\u09AF\x03\x02\x02" +
		"\x02\u09AF\u09B0\x03\x02\x02\x02\u09B0\u09B1\x05\u01EA\xF6\x02\u09B1\u09B3" +
		"\x07F\x02\x02\u09B2\u09B4\x05\u019E\xD0\x02\u09B3\u09B2\x03\x02\x02\x02" +
		"\u09B3\u09B4\x03\x02\x02\x02\u09B4\u09B5\x03\x02\x02\x02\u09B5\u09B6\x07" +
		"G\x02\x02\u09B6\u09B8\x03\x02\x02\x02\u09B7\u0972\x03\x02\x02\x02\u09B7" +
		"\u0979\x03\x02\x02\x02\u09B7\u0985\x03\x02\x02\x02\u09B7\u0991\x03\x02" +
		"\x02\x02\u09B7\u099D\x03\x02\x02\x02\u09B7\u09A9\x03\x02\x02\x02\u09B8" +
		"\u0199\x03\x02\x02\x02\u09B9\u09BB\x07N\x02\x02\u09BA\u09BC\x05*\x16\x02" +
		"\u09BB\u09BA\x03\x02\x02\x02\u09BB\u09BC\x03\x02\x02\x02\u09BC\u09BD\x03" +
		"\x02\x02\x02\u09BD\u09BE\x05\u01EA\xF6\x02\u09BE\u09C0\x07F\x02\x02\u09BF" +
		"\u09C1\x05\u019E\xD0\x02\u09C0\u09BF\x03\x02\x02\x02\u09C0\u09C1\x03\x02" +
		"\x02\x02\u09C1\u09C2\x03\x02\x02\x02\u09C2\u09C3\x07G\x02\x02\u09C3\u019B" +
		"\x03\x02\x02\x02\u09C4\u09C5\x05> \x02\u09C5\u09C7\x07F\x02\x02\u09C6" +
		"\u09C8\x05\u019E\xD0\x02\u09C7\u09C6\x03\x02\x02\x02\u09C7\u09C8\x03\x02" +
		"\x02\x02\u09C8\u09C9\x03\x02\x02\x02\u09C9\u09CA\x07G\x02\x02\u09CA\u09FE" +
		"\x03\x02\x02\x02\u09CB\u09CC\x058\x1D\x02\u09CC\u09CE\x07N\x02\x02\u09CD" +
		"\u09CF\x05*\x16\x02\u09CE\u09CD\x03\x02\x02\x02\u09CE\u09CF\x03\x02\x02" +
		"\x02\u09CF\u09D0\x03\x02\x02\x02\u09D0\u09D1\x05\u01EA\xF6\x02\u09D1\u09D3" +
		"\x07F\x02\x02\u09D2\u09D4\x05\u019E\xD0\x02\u09D3\u09D2\x03\x02\x02\x02" +
		"\u09D3\u09D4\x03\x02\x02\x02\u09D4\u09D5\x03\x02\x02\x02\u09D5\u09D6\x07" +
		"G\x02\x02\u09D6\u09FE\x03\x02\x02\x02\u09D7\u09D8\x05<\x1F\x02\u09D8\u09DA" +
		"\x07N\x02\x02\u09D9\u09DB\x05*\x16\x02\u09DA\u09D9\x03\x02\x02\x02\u09DA" +
		"\u09DB\x03\x02\x02\x02\u09DB\u09DC\x03\x02\x02\x02\u09DC\u09DD\x05\u01EA" +
		"\xF6\x02\u09DD\u09DF\x07F\x02\x02\u09DE\u09E0\x05\u019E\xD0\x02\u09DF" +
		"\u09DE\x03\x02\x02\x02\u09DF\u09E0\x03\x02\x02\x02\u09E0\u09E1\x03\x02" +
		"\x02\x02\u09E1\u09E2\x07G\x02\x02\u09E2\u09FE\x03\x02\x02\x02\u09E3\u09E4" +
		"\x074\x02\x02\u09E4\u09E6\x07N\x02\x02\u09E5\u09E7\x05*\x16\x02\u09E6" +
		"\u09E5\x03\x02\x02\x02\u09E6\u09E7\x03\x02\x02\x02\u09E7\u09E8\x03\x02" +
		"\x02\x02\u09E8\u09E9\x05\u01EA\xF6\x02\u09E9\u09EB\x07F\x02\x02\u09EA" +
		"\u09EC\x05\u019E\xD0\x02\u09EB\u09EA\x03\x02\x02\x02\u09EB\u09EC\x03\x02" +
		"\x02\x02\u09EC\u09ED\x03\x02\x02\x02\u09ED\u09EE\x07G\x02\x02\u09EE\u09FE" +
		"\x03\x02\x02\x02\u09EF\u09F0\x058\x1D\x02\u09F0\u09F1\x07N\x02\x02\u09F1" +
		"\u09F2\x074\x02\x02\u09F2\u09F4\x07N\x02\x02\u09F3\u09F5\x05*\x16\x02" +
		"\u09F4\u09F3\x03\x02\x02\x02\u09F4\u09F5\x03\x02\x02\x02\u09F5\u09F6\x03" +
		"\x02\x02\x02\u09F6\u09F7\x05\u01EA\xF6\x02\u09F7\u09F9\x07F\x02\x02\u09F8" +
		"\u09FA\x05\u019E\xD0\x02\u09F9\u09F8\x03\x02\x02\x02\u09F9\u09FA\x03\x02" +
		"\x02\x02\u09FA\u09FB\x03\x02\x02\x02\u09FB\u09FC\x07G\x02\x02\u09FC\u09FE" +
		"\x03\x02\x02\x02\u09FD\u09C4\x03\x02\x02\x02\u09FD\u09CB\x03\x02\x02\x02" +
		"\u09FD\u09D7\x03\x02\x02\x02\u09FD\u09E3\x03\x02\x02\x02\u09FD\u09EF\x03" +
		"\x02\x02\x02\u09FE\u019D\x03\x02\x02\x02\u09FF\u0A04\x05\u01AE\xD8\x02" +
		"\u0A00\u0A01\x07M\x02\x02\u0A01\u0A03\x05\u01AE\xD8\x02\u0A02\u0A00\x03" +
		"\x02\x02\x02\u0A03\u0A06\x03\x02\x02\x02\u0A04\u0A02\x03\x02\x02\x02\u0A04" +
		"\u0A05\x03\x02\x02\x02\u0A05\u019F\x03\x02\x02\x02\u0A06\u0A04\x03\x02" +
		"\x02\x02\u0A07\u0A08\x05<\x1F\x02\u0A08\u0A0A\x07Q\x02\x02\u0A09\u0A0B" +
		"\x05*\x16\x02\u0A0A\u0A09\x03\x02\x02\x02\u0A0A\u0A0B\x03\x02\x02\x02" +
		"\u0A0B\u0A0C\x03\x02\x02\x02\u0A0C\u0A0D\x05\u01EA\xF6\x02\u0A0D\u0A37" +
		"\x03\x02\x02\x02\u0A0E\u0A0F\x05\f\x07\x02\u0A0F\u0A11\x07Q\x02\x02\u0A10" +
		"\u0A12\x05*\x16\x02\u0A11\u0A10\x03\x02\x02\x02\u0A11\u0A12\x03\x02\x02" +
		"\x02\u0A12\u0A13\x03\x02\x02\x02\u0A13\u0A14\x05\u01EA\xF6\x02\u0A14\u0A37" +
		"\x03\x02\x02\x02\u0A15\u0A16\x05\u016E\xB8\x02\u0A16\u0A18\x07Q\x02\x02" +
		"\u0A17\u0A19\x05*\x16\x02\u0A18\u0A17\x03\x02\x02\x02\u0A18\u0A19\x03" +
		"\x02\x02\x02\u0A19\u0A1A\x03\x02\x02\x02\u0A1A\u0A1B\x05\u01EA\xF6\x02" +
		"\u0A1B\u0A37\x03\x02\x02\x02\u0A1C\u0A1D\x074\x02\x02\u0A1D\u0A1F\x07" +
		"Q\x02\x02\u0A1E\u0A20\x05*\x16\x02\u0A1F\u0A1E\x03\x02\x02\x02\u0A1F\u0A20" +
		"\x03\x02\x02\x02\u0A20\u0A21\x03\x02\x02\x02\u0A21\u0A37\x05\u01EA\xF6" +
		"\x02\u0A22\u0A23\x058\x1D\x02\u0A23\u0A24\x07N\x02\x02\u0A24\u0A25\x07" +
		"4\x02\x02\u0A25\u0A27\x07Q\x02\x02\u0A26\u0A28\x05*\x16\x02\u0A27\u0A26" +
		"\x03\x02\x02\x02\u0A27\u0A28\x03\x02\x02\x02\u0A28\u0A29\x03\x02\x02\x02" +
		"\u0A29\u0A2A\x05\u01EA\xF6\x02\u0A2A\u0A37\x03\x02\x02\x02\u0A2B\u0A2C" +
		"\x05\x10\t\x02\u0A2C\u0A2E\x07Q\x02\x02\u0A2D\u0A2F\x05*\x16\x02\u0A2E" +
		"\u0A2D\x03\x02\x02\x02\u0A2E\u0A2F\x03\x02\x02\x02\u0A2F\u0A30\x03\x02" +
		"\x02\x02\u0A30\u0A31\x07+\x02\x02\u0A31\u0A37\x03\x02\x02\x02\u0A32\u0A33" +
		"\x05\x1E\x10\x02\u0A33\u0A34\x07Q\x02\x02\u0A34\u0A35\x07+\x02\x02\u0A35" +
		"\u0A37\x03\x02\x02\x02\u0A36\u0A07\x03\x02\x02\x02\u0A36\u0A0E\x03\x02" +
		"\x02\x02\u0A36\u0A15\x03\x02\x02\x02\u0A36\u0A1C\x03\x02\x02\x02\u0A36" +
		"\u0A22\x03\x02\x02\x02\u0A36\u0A2B\x03\x02\x02\x02\u0A36\u0A32\x03\x02" +
		"\x02\x02\u0A37\u01A1\x03\x02\x02\x02\u0A38\u0A3A\x07Q\x02\x02\u0A39\u0A3B" +
		"\x05*\x16\x02\u0A3A\u0A39\x03\x02\x02\x02\u0A3A\u0A3B\x03\x02\x02\x02" +
		"\u0A3B\u0A3C\x03\x02\x02\x02\u0A3C\u0A3D\x05\u01EA\xF6\x02\u0A3D\u01A3" +
		"\x03\x02\x02\x02\u0A3E\u0A3F\x05<\x1F\x02\u0A3F\u0A41\x07Q\x02\x02\u0A40" +
		"\u0A42\x05*\x16\x02\u0A41\u0A40\x03\x02\x02\x02\u0A41\u0A42\x03\x02\x02" +
		"\x02\u0A42\u0A43\x03\x02\x02\x02\u0A43\u0A44\x05\u01EA\xF6\x02\u0A44\u0A67" +
		"\x03\x02\x02\x02\u0A45\u0A46\x05\f\x07\x02\u0A46\u0A48\x07Q\x02\x02\u0A47" +
		"\u0A49\x05*\x16\x02\u0A48\u0A47\x03\x02\x02\x02\u0A48\u0A49\x03\x02\x02" +
		"\x02\u0A49\u0A4A\x03\x02\x02\x02\u0A4A\u0A4B\x05\u01EA\xF6\x02\u0A4B\u0A67" +
		"\x03\x02\x02\x02\u0A4C\u0A4D\x074\x02\x02\u0A4D\u0A4F\x07Q\x02\x02\u0A4E" +
		"\u0A50\x05*\x16\x02\u0A4F\u0A4E\x03\x02\x02\x02\u0A4F\u0A50\x03\x02\x02" +
		"\x02\u0A50\u0A51\x03\x02\x02\x02\u0A51\u0A67\x05\u01EA\xF6\x02\u0A52\u0A53" +
		"\x058\x1D\x02\u0A53\u0A54\x07N\x02\x02\u0A54\u0A55\x074\x02\x02\u0A55" +
		"\u0A57\x07Q\x02\x02\u0A56\u0A58\x05*\x16\x02\u0A57\u0A56\x03\x02\x02\x02" +
		"\u0A57\u0A58\x03\x02\x02\x02\u0A58\u0A59\x03\x02\x02\x02\u0A59\u0A5A\x05" +
		"\u01EA\xF6\x02\u0A5A\u0A67\x03\x02\x02\x02\u0A5B\u0A5C\x05\x10\t\x02\u0A5C" +
		"\u0A5E\x07Q\x02\x02\u0A5D\u0A5F\x05*\x16\x02\u0A5E\u0A5D\x03\x02\x02\x02" +
		"\u0A5E\u0A5F\x03\x02\x02\x02\u0A5F\u0A60\x03\x02\x02\x02\u0A60\u0A61\x07" +
		"+\x02\x02\u0A61\u0A67\x03\x02\x02\x02\u0A62\u0A63\x05\x1E\x10\x02\u0A63" +
		"\u0A64\x07Q\x02\x02\u0A64\u0A65\x07+\x02\x02\u0A65\u0A67\x03\x02\x02\x02" +
		"\u0A66\u0A3E\x03\x02\x02\x02\u0A66\u0A45\x03\x02\x02\x02\u0A66\u0A4C\x03" +
		"\x02\x02\x02\u0A66\u0A52\x03\x02\x02\x02\u0A66\u0A5B\x03\x02\x02\x02\u0A66" +
		"\u0A62\x03\x02\x02\x02\u0A67\u01A5\x03\x02\x02\x02\u0A68\u0A69\x07+\x02" +
		"\x02\u0A69\u0A6A\x05\x04\x03\x02\u0A6A\u0A6C\x05\u01A8\xD5\x02\u0A6B\u0A6D" +
		"\x05 \x11\x02\u0A6C\u0A6B\x03\x02\x02\x02\u0A6C\u0A6D\x03\x02\x02\x02" +
		"\u0A6D\u0A7F\x03\x02\x02\x02\u0A6E\u0A6F\x07+\x02\x02\u0A6F\u0A70\x05" +
		"\x0E\b\x02\u0A70\u0A72\x05\u01A8\xD5\x02\u0A71\u0A73\x05 \x11\x02\u0A72" +
		"\u0A71\x03\x02\x02\x02\u0A72\u0A73\x03\x02\x02\x02\u0A73\u0A7F\x03\x02" +
		"\x02\x02\u0A74\u0A75\x07+\x02\x02\u0A75\u0A76\x05\x04\x03\x02\u0A76\u0A77" +
		"\x05 \x11\x02\u0A77\u0A78\x05\u0104\x83\x02\u0A78\u0A7F\x03\x02\x02\x02" +
		"\u0A79\u0A7A\x07+\x02\x02\u0A7A\u0A7B\x05\x0E\b\x02\u0A7B\u0A7C\x05 \x11" +
		"\x02\u0A7C\u0A7D\x05\u0104\x83\x02\u0A7D\u0A7F\x03\x02\x02\x02\u0A7E\u0A68" +
		"\x03\x02\x02\x02\u0A7E\u0A6E\x03\x02\x02\x02\u0A7E\u0A74\x03\x02\x02\x02" +
		"\u0A7E\u0A79\x03\x02\x02\x02\u0A7F\u01A7\x03\x02\x02\x02\u0A80\u0A82\x05" +
		"\u01AA\xD6\x02\u0A81\u0A80\x03\x02\x02\x02\u0A82\u0A83\x03\x02\x02\x02" +
		"\u0A83\u0A81\x03\x02\x02\x02\u0A83\u0A84\x03\x02\x02\x02\u0A84\u01A9\x03" +
		"\x02\x02\x02\u0A85\u0A87\x05\xF2z\x02\u0A86\u0A85\x03\x02\x02\x02\u0A87" +
		"\u0A8A\x03\x02\x02\x02\u0A88\u0A86\x03\x02\x02\x02\u0A88\u0A89\x03\x02" +
		"\x02\x02\u0A89\u0A8B\x03\x02\x02\x02\u0A8A\u0A88\x03\x02\x02\x02\u0A8B" +
		"\u0A8C\x07J\x02\x02\u0A8C\u0A8D\x05\u01AE\xD8\x02\u0A8D\u0A8E\x07K\x02" +
		"\x02\u0A8E\u01AB\x03\x02\x02\x02\u0A8F\u0A90\x05\u01AE\xD8\x02\u0A90\u01AD" +
		"\x03\x02\x02\x02\u0A91\u0A94\x05\u01B0\xD9\x02\u0A92\u0A94\x05\u01B8\xDD" +
		"\x02\u0A93\u0A91\x03\x02\x02\x02\u0A93\u0A92\x03\x02\x02\x02\u0A94\u01AF" +
		"\x03\x02\x02\x02\u0A95\u0A96\x05\u01B2\xDA\x02\u0A96\u0A97\x07Y\x02\x02" +
		"\u0A97\u0A98\x05\u01B6\xDC\x02\u0A98\u01B1\x03\x02\x02\x02\u0A99\u0AA4" +
		"\x05\u01EA\xF6\x02\u0A9A\u0A9C\x07F\x02\x02\u0A9B\u0A9D\x05\xA2R\x02\u0A9C" +
		"\u0A9B\x03\x02\x02\x02\u0A9C\u0A9D\x03\x02\x02\x02\u0A9D\u0A9E\x03\x02" +
		"\x02\x02\u0A9E\u0AA4\x07G\x02\x02\u0A9F\u0AA0\x07F\x02\x02\u0AA0\u0AA1" +
		"\x05\u01B4\xDB\x02\u0AA1\u0AA2\x07G\x02\x02\u0AA2\u0AA4\x03\x02\x02\x02" +
		"\u0AA3\u0A99\x03\x02\x02\x02\u0AA3\u0A9A\x03\x02\x02\x02\u0AA3\u0A9F\x03" +
		"\x02\x02\x02\u0AA4\u01B3\x03\x02\x02\x02\u0AA5\u0AAA\x05\u01EA\xF6\x02" +
		"\u0AA6\u0AA7\x07M\x02\x02\u0AA7\u0AA9\x05\u01EA\xF6\x02\u0AA8\u0AA6\x03" +
		"\x02\x02\x02\u0AA9\u0AAC\x03\x02\x02\x02\u0AAA\u0AA8\x03\x02\x02\x02\u0AAA" +
		"\u0AAB\x03\x02\x02\x02\u0AAB\u01B5\x03\x02\x02\x02\u0AAC\u0AAA\x03\x02" +
		"\x02\x02\u0AAD\u0AB0\x05\u01AE\xD8\x02\u0AAE\u0AB0\x05\u0108\x85\x02\u0AAF" +
		"\u0AAD\x03\x02\x02\x02\u0AAF\u0AAE\x03\x02\x02\x02\u0AB0\u01B7\x03\x02" +
		"\x02\x02\u0AB1\u0AB4\x05\u01C0\xE1\x02\u0AB2\u0AB4\x05\u01BA\xDE\x02\u0AB3" +
		"\u0AB1\x03\x02\x02\x02\u0AB3\u0AB2\x03\x02\x02\x02\u0AB4\u01B9\x03\x02" +
		"\x02\x02\u0AB5\u0AB6\x05\u01BC\xDF\x02\u0AB6\u0AB7\x05\u01BE\xE0\x02\u0AB7" +
		"\u0AB8\x05\u01AE\xD8\x02\u0AB8\u01BB\x03\x02\x02\x02\u0AB9\u0ABD\x05<" +
		"\x1F\x02\u0ABA\u0ABD\x05\u018C\xC7\x02\u0ABB\u0ABD\x05\u0192\xCA\x02\u0ABC" +
		"\u0AB9\x03\x02\x02\x02\u0ABC\u0ABA\x03\x02\x02\x02\u0ABC\u0ABB\x03\x02" +
		"\x02\x02\u0ABD\u01BD\x03\x02\x02\x02\u0ABE\u0ABF\t\x06\x02\x02\u0ABF\u01BF" +
		"\x03\x02\x02\x02\u0AC0\u0ACA\x05\u01C2\xE2\x02\u0AC1\u0AC2\x05\u01C2\xE2" +
		"\x02\u0AC2\u0AC3\x07W\x02\x02\u0AC3\u0AC4\x05\u01AE\xD8\x02\u0AC4\u0AC7" +
		"\x07X\x02\x02\u0AC5\u0AC8\x05\u01C0\xE1\x02\u0AC6\u0AC8\x05\u01B0\xD9" +
		"\x02\u0AC7\u0AC5\x03\x02\x02\x02\u0AC7\u0AC6\x03\x02\x02\x02\u0AC8\u0ACA" +
		"\x03\x02\x02\x02\u0AC9\u0AC0\x03\x02\x02\x02\u0AC9\u0AC1\x03\x02\x02\x02" +
		"\u0ACA\u01C1\x03\x02\x02\x02\u0ACB\u0ACC\b\xE2\x01\x02\u0ACC\u0ACD\x05" +
		"\u01C4\xE3\x02\u0ACD\u0AD3\x03\x02\x02\x02\u0ACE\u0ACF\f\x03\x02\x02\u0ACF" +
		"\u0AD0\x07_\x02\x02\u0AD0\u0AD2\x05\u01C4\xE3\x02\u0AD1\u0ACE\x03\x02" +
		"\x02\x02\u0AD2\u0AD5\x03\x02\x02\x02\u0AD3\u0AD1\x03\x02\x02\x02\u0AD3" +
		"\u0AD4\x03\x02\x02\x02\u0AD4\u01C3\x03\x02\x02\x02\u0AD5\u0AD3\x03\x02" +
		"\x02\x02\u0AD6\u0AD7\b\xE3\x01\x02\u0AD7\u0AD8\x05\u01C6\xE4\x02\u0AD8" +
		"\u0ADE\x03\x02\x02\x02\u0AD9\u0ADA\f\x03\x02\x02\u0ADA\u0ADB\x07^\x02" +
		"\x02\u0ADB\u0ADD\x05\u01C6\xE4\x02\u0ADC\u0AD9\x03\x02\x02\x02\u0ADD\u0AE0" +
		"\x03\x02\x02\x02\u0ADE\u0ADC\x03\x02\x02\x02\u0ADE\u0ADF\x03\x02\x02\x02" +
		"\u0ADF\u01C5\x03\x02\x02\x02\u0AE0";
	private static readonly _serializedATNSegment5: string =
		"\u0ADE\x03\x02\x02\x02\u0AE1\u0AE2\b\xE4\x01\x02\u0AE2\u0AE3\x05\u01C8" +
		"\xE5\x02\u0AE3\u0AE9\x03\x02\x02\x02\u0AE4\u0AE5\f\x03\x02\x02\u0AE5\u0AE6" +
		"\x07g\x02\x02\u0AE6\u0AE8\x05\u01C8\xE5\x02\u0AE7\u0AE4\x03\x02\x02\x02" +
		"\u0AE8\u0AEB\x03\x02\x02\x02\u0AE9\u0AE7\x03\x02\x02\x02\u0AE9\u0AEA\x03" +
		"\x02\x02\x02\u0AEA\u01C7\x03\x02\x02\x02\u0AEB\u0AE9\x03\x02\x02\x02\u0AEC" +
		"\u0AED\b\xE5\x01\x02\u0AED\u0AEE\x05\u01CA\xE6\x02\u0AEE\u0AF4\x03\x02" +
		"\x02\x02\u0AEF\u0AF0\f\x03\x02\x02\u0AF0\u0AF1\x07h\x02\x02\u0AF1\u0AF3" +
		"\x05\u01CA\xE6\x02\u0AF2\u0AEF\x03\x02\x02\x02\u0AF3\u0AF6\x03\x02\x02" +
		"\x02\u0AF4\u0AF2\x03\x02\x02\x02\u0AF4\u0AF5\x03\x02\x02\x02\u0AF5\u01C9" +
		"\x03\x02\x02\x02\u0AF6\u0AF4\x03\x02\x02\x02\u0AF7\u0AF8\b\xE6\x01\x02" +
		"\u0AF8\u0AF9\x05\u01CC\xE7\x02\u0AF9\u0AFF\x03\x02\x02\x02\u0AFA\u0AFB" +
		"\f\x03\x02\x02\u0AFB\u0AFC\x07f\x02\x02\u0AFC\u0AFE\x05\u01CC\xE7\x02" +
		"\u0AFD\u0AFA\x03\x02\x02\x02\u0AFE\u0B01\x03\x02\x02\x02\u0AFF\u0AFD\x03" +
		"\x02\x02\x02\u0AFF\u0B00\x03\x02\x02\x02\u0B00\u01CB\x03\x02\x02\x02\u0B01" +
		"\u0AFF\x03\x02\x02\x02\u0B02\u0B03\b\xE7\x01\x02\u0B03\u0B04\x05\u01CE" +
		"\xE8\x02\u0B04\u0B0D\x03\x02\x02\x02\u0B05\u0B06\f\x04\x02\x02\u0B06\u0B07" +
		"\x07Z\x02\x02\u0B07\u0B0C\x05\u01CE\xE8\x02\u0B08\u0B09\f\x03\x02\x02" +
		"\u0B09\u0B0A\x07]\x02\x02\u0B0A\u0B0C\x05\u01CE\xE8\x02\u0B0B\u0B05\x03" +
		"\x02\x02\x02\u0B0B\u0B08\x03\x02\x02\x02\u0B0C\u0B0F\x03\x02\x02\x02\u0B0D" +
		"\u0B0B\x03\x02\x02\x02\u0B0D\u0B0E\x03\x02\x02\x02\u0B0E\u01CD\x03\x02" +
		"\x02\x02\u0B0F\u0B0D\x03\x02\x02\x02\u0B10\u0B11\b\xE8\x01\x02\u0B11\u0B12" +
		"\x05\u01D0\xE9\x02\u0B12\u0B24\x03\x02\x02\x02\u0B13\u0B14\f\x07\x02\x02" +
		"\u0B14\u0B15\x07T\x02\x02\u0B15\u0B23\x05\u01D0\xE9\x02\u0B16\u0B17\f" +
		"\x06\x02\x02\u0B17\u0B18\x07S\x02\x02\u0B18\u0B23\x05\u01D0\xE9\x02\u0B19" +
		"\u0B1A\f\x05\x02\x02\u0B1A\u0B1B\x07[\x02\x02\u0B1B\u0B23\x05\u01D0\xE9" +
		"\x02\u0B1C\u0B1D\f\x04\x02\x02\u0B1D\u0B1E\x07\\\x02\x02\u0B1E\u0B23\x05" +
		"\u01D0\xE9\x02\u0B1F\u0B20\f\x03\x02\x02\u0B20\u0B21\x07&\x02\x02\u0B21" +
		"\u0B23\x05\f\x07\x02\u0B22\u0B13\x03\x02\x02\x02\u0B22\u0B16\x03\x02\x02" +
		"\x02\u0B22\u0B19\x03\x02\x02\x02\u0B22\u0B1C\x03\x02\x02\x02\u0B22\u0B1F" +
		"\x03\x02\x02\x02\u0B23\u0B26\x03\x02\x02\x02\u0B24\u0B22\x03\x02\x02\x02" +
		"\u0B24\u0B25\x03\x02\x02\x02\u0B25\u01CF\x03\x02\x02\x02\u0B26\u0B24\x03" +
		"\x02\x02\x02\u0B27\u0B28\b\xE9\x01\x02\u0B28\u0B29\x05\u01D2\xEA\x02\u0B29" +
		"\u0B39\x03\x02\x02\x02\u0B2A\u0B2B\f\x05\x02\x02\u0B2B\u0B2C\x07T\x02" +
		"\x02\u0B2C\u0B2D\x07T\x02\x02\u0B2D\u0B38\x05\u01D2\xEA\x02\u0B2E\u0B2F" +
		"\f\x04\x02\x02\u0B2F\u0B30\x07S\x02\x02\u0B30\u0B31\x07S\x02\x02\u0B31" +
		"\u0B38\x05\u01D2\xEA\x02\u0B32\u0B33\f\x03\x02\x02\u0B33\u0B34\x07S\x02" +
		"\x02\u0B34\u0B35\x07S\x02\x02\u0B35\u0B36\x07S\x02\x02\u0B36\u0B38\x05" +
		"\u01D2\xEA\x02\u0B37\u0B2A\x03\x02\x02\x02\u0B37\u0B2E\x03\x02\x02\x02" +
		"\u0B37\u0B32\x03\x02\x02\x02\u0B38\u0B3B\x03\x02\x02\x02\u0B39\u0B37\x03" +
		"\x02\x02\x02\u0B39\u0B3A\x03\x02\x02\x02\u0B3A\u01D1\x03\x02\x02\x02\u0B3B" +
		"\u0B39\x03\x02\x02\x02\u0B3C\u0B3D\b\xEA\x01\x02\u0B3D\u0B3E\x05\u01D4" +
		"\xEB\x02\u0B3E\u0B47\x03\x02\x02\x02\u0B3F\u0B40\f\x04\x02\x02\u0B40\u0B41" +
		"\x07b\x02\x02\u0B41\u0B46\x05\u01D4\xEB\x02\u0B42\u0B43\f\x03\x02\x02" +
		"\u0B43\u0B44\x07c\x02\x02\u0B44\u0B46\x05\u01D4\xEB\x02\u0B45\u0B3F\x03" +
		"\x02\x02\x02\u0B45\u0B42\x03\x02\x02\x02\u0B46\u0B49\x03\x02\x02\x02\u0B47" +
		"\u0B45\x03\x02\x02\x02\u0B47\u0B48\x03\x02\x02\x02\u0B48\u01D3\x03\x02" +
		"\x02\x02\u0B49\u0B47\x03\x02\x02\x02\u0B4A\u0B4B\b\xEB\x01\x02\u0B4B\u0B4C" +
		"\x05\u01D6\xEC\x02\u0B4C\u0B58\x03\x02\x02\x02\u0B4D\u0B4E\f\x05\x02\x02" +
		"\u0B4E\u0B4F\x07d\x02\x02\u0B4F\u0B57\x05\u01D6\xEC\x02\u0B50\u0B51\f" +
		"\x04\x02\x02\u0B51\u0B52\x07e\x02\x02\u0B52\u0B57\x05\u01D6\xEC\x02\u0B53" +
		"\u0B54\f\x03\x02\x02\u0B54\u0B55\x07i\x02\x02\u0B55\u0B57\x05\u01D6\xEC" +
		"\x02\u0B56\u0B4D\x03\x02\x02\x02\u0B56\u0B50\x03\x02\x02\x02\u0B56\u0B53" +
		"\x03\x02\x02\x02\u0B57\u0B5A\x03\x02\x02\x02\u0B58\u0B56\x03\x02\x02\x02" +
		"\u0B58\u0B59\x03\x02\x02\x02\u0B59\u01D5\x03\x02\x02\x02\u0B5A\u0B58\x03" +
		"\x02\x02\x02\u0B5B\u0B63\x05\u01D8\xED\x02\u0B5C\u0B63\x05\u01DA\xEE\x02" +
		"\u0B5D\u0B5E\x07b\x02\x02\u0B5E\u0B63\x05\u01D6\xEC\x02\u0B5F\u0B60\x07" +
		"c\x02\x02\u0B60\u0B63\x05\u01D6\xEC\x02\u0B61\u0B63\x05\u01DC\xEF\x02" +
		"\u0B62\u0B5B\x03\x02\x02\x02\u0B62\u0B5C\x03\x02\x02\x02\u0B62\u0B5D\x03" +
		"\x02\x02\x02\u0B62\u0B5F\x03\x02\x02\x02\u0B62\u0B61\x03\x02\x02\x02\u0B63" +
		"\u01D7\x03\x02\x02\x02\u0B64\u0B65\x07`\x02\x02\u0B65\u0B66\x05\u01D6" +
		"\xEC\x02\u0B66\u01D9\x03\x02\x02\x02\u0B67\u0B68\x07a\x02\x02\u0B68\u0B69" +
		"\x05\u01D6\xEC\x02\u0B69\u01DB\x03\x02\x02\x02\u0B6A\u0B71\x05\u01DE\xF0" +
		"\x02\u0B6B\u0B6C\x07V\x02\x02\u0B6C\u0B71\x05\u01D6\xEC\x02\u0B6D\u0B6E" +
		"\x07U\x02\x02\u0B6E\u0B71\x05\u01D6\xEC\x02\u0B6F\u0B71\x05\u01E8\xF5" +
		"\x02\u0B70\u0B6A\x03\x02\x02\x02\u0B70\u0B6B\x03\x02\x02\x02\u0B70\u0B6D" +
		"\x03\x02\x02\x02\u0B70\u0B6F\x03\x02\x02\x02\u0B71\u01DD\x03\x02\x02\x02" +
		"\u0B72\u0B75\x05\u016E\xB8\x02\u0B73\u0B75\x05<\x1F\x02\u0B74\u0B72\x03" +
		"\x02\x02\x02\u0B74\u0B73\x03\x02\x02\x02\u0B75\u0B7A\x03\x02\x02\x02\u0B76" +
		"\u0B79\x05\u01E2\xF2\x02\u0B77\u0B79\x05\u01E6\xF4\x02\u0B78\u0B76\x03" +
		"\x02\x02\x02\u0B78\u0B77\x03\x02\x02\x02\u0B79\u0B7C\x03\x02\x02\x02\u0B7A" +
		"\u0B78\x03\x02\x02\x02\u0B7A\u0B7B\x03\x02\x02\x02\u0B7B\u01DF\x03\x02" +
		"\x02\x02\u0B7C\u0B7A\x03\x02\x02\x02\u0B7D\u0B7E\x05\u01DE\xF0\x02\u0B7E" +
		"\u0B7F\x07`\x02\x02\u0B7F\u01E1\x03\x02\x02\x02\u0B80\u0B81\x07`\x02\x02" +
		"\u0B81\u01E3\x03\x02\x02\x02\u0B82\u0B83\x05\u01DE\xF0\x02\u0B83\u0B84" +
		"\x07a\x02\x02\u0B84\u01E5\x03\x02\x02\x02\u0B85\u0B86\x07a\x02\x02\u0B86" +
		"\u01E7\x03\x02\x02\x02\u0B87\u0B88\x07F\x02\x02\u0B88\u0B89\x05\x04\x03" +
		"\x02\u0B89\u0B8A\x07G\x02\x02\u0B8A\u0B8B\x05\u01D6\xEC\x02\u0B8B\u0BA3" +
		"\x03\x02\x02\x02\u0B8C\u0B8D\x07F\x02\x02\u0B8D\u0B91\x05\f\x07\x02\u0B8E" +
		"\u0B90\x05(\x15\x02\u0B8F\u0B8E\x03\x02\x02\x02\u0B90\u0B93\x03\x02\x02" +
		"\x02\u0B91\u0B8F\x03\x02\x02\x02\u0B91\u0B92\x03\x02\x02\x02\u0B92\u0B94" +
		"\x03\x02\x02\x02\u0B93\u0B91\x03\x02\x02\x02\u0B94\u0B95\x07G\x02\x02" +
		"\u0B95\u0B96\x05\u01DC\xEF\x02\u0B96\u0BA3\x03\x02\x02\x02\u0B97\u0B98" +
		"\x07F\x02\x02\u0B98\u0B9C\x05\f\x07\x02\u0B99\u0B9B\x05(\x15\x02\u0B9A" +
		"\u0B99\x03\x02\x02\x02\u0B9B\u0B9E\x03\x02\x02\x02\u0B9C\u0B9A\x03\x02" +
		"\x02\x02\u0B9C\u0B9D\x03\x02\x02\x02\u0B9D\u0B9F\x03\x02\x02\x02\u0B9E" +
		"\u0B9C\x03\x02\x02\x02\u0B9F\u0BA0\x07G\x02\x02\u0BA0\u0BA1\x05\u01B0" +
		"\xD9\x02\u0BA1\u0BA3\x03\x02\x02\x02\u0BA2\u0B87\x03\x02\x02\x02\u0BA2" +
		"\u0B8C\x03\x02\x02\x02\u0BA2\u0B97\x03\x02\x02\x02\u0BA3\u01E9\x03\x02" +
		"\x02\x02\u0BA4\u0BA5\t\x07\x02\x02\u0BA5\u01EB\x03\x02\x02\x02\u0156\u01F1" +
		"\u01F8\u01FC\u0200\u0209\u020D\u0211\u0213\u0219\u021E\u0225\u022A\u022C" +
		"\u0232\u0237\u023C\u0241\u024C\u025A\u025F\u0267\u026E\u0274\u0279\u0284" +
		"\u0287\u0295\u029A\u029F\u02A4\u02AA\u02B4\u02BF\u02C7\u02D1\u02D9\u02E5" +
		"\u02EA\u02ED\u02F2\u02F8\u0300\u0308\u0315\u0332\u0337\u033B\u0343\u034C" +
		"\u035A\u035D\u0369\u036C\u037C\u0381\u0387\u038C\u0392\u0395\u0398\u03A4" +
		"\u03AF\u03BD\u03C4\u03CD\u03D4\u03D9\u03E8\u03EF\u03F5\u03F9\u03FD\u0401" +
		"\u0405\u040A\u040E\u0412\u0414\u0419\u0420\u0425\u0427\u042D\u0432\u0436" +
		"\u0449\u044E\u045E\u0463\u0469\u046F\u0471\u0475\u047A\u047E\u0486\u048D" +
		"\u0495\u0498\u049D\u04A5\u04AA\u04B1\u04B8\u04BD\u04C4\u04D0\u04D5\u04D9" +
		"\u04E3\u04E8\u04F0\u04F3\u04F8\u0500\u0503\u0508\u050D\u0512\u0517\u051E" +
		"\u0523\u052B\u0530\u0535\u053A\u0540\u0546\u0549\u054C\u0555\u055B\u0561" +
		"\u0564\u0567\u056F\u0574\u0579\u057F\u0582\u058D\u0596\u05A0\u05A5\u05B0" +
		"\u05B5\u05C2\u05C7\u05D3\u05DD\u05E2\u05EA\u05ED\u05F4\u05FC\u0602\u060B" +
		"\u0615\u0619\u061C\u0625\u0633\u0636\u063F\u0644\u064B\u0650\u0658\u0664" +
		"\u066B\u0679\u068F\u06B1\u06BD\u06C3\u06CE\u06DA\u06F4\u06F8\u06FD\u0701" +
		"\u0705\u070D\u0711\u0715\u071C\u0725\u072D\u073C\u0748\u074E\u0754\u0769" +
		"\u076E\u0773\u077E\u0789\u0793\u0796\u079B\u07A4\u07AA\u07B3\u07B7\u07BB" +
		"\u07C0\u07D3\u07DD\u07F3\u07FA\u0802\u080A\u0815\u082C\u0836\u0841\u0857" +
		"\u085C\u0862\u086A\u086E\u0873\u087B\u0881\u0885\u0889\u088D\u0893\u0898" +
		"\u089D\u08A1\u08A5\u08AB\u08B0\u08B5\u08B9\u08BD\u08BF\u08C4\u08C9\u08CE" +
		"\u08D2\u08D6\u08DA\u08DF\u08E7\u08ED\u08F1\u08F5\u08F9\u08FF\u0904\u0909" +
		"\u090D\u0911\u0913\u0918\u0927\u0935\u0941\u094A\u0959\u0966\u096F\u0975" +
		"\u097C\u0981\u0988\u098D\u0994\u0999\u09A0\u09A5\u09AE\u09B3\u09B7\u09BB" +
		"\u09C0\u09C7\u09CE\u09D3\u09DA\u09DF\u09E6\u09EB\u09F4\u09F9\u09FD\u0A04" +
		"\u0A0A\u0A11\u0A18\u0A1F\u0A27\u0A2E\u0A36\u0A3A\u0A41\u0A48\u0A4F\u0A57" +
		"\u0A5E\u0A66\u0A6C\u0A72\u0A7E\u0A83\u0A88\u0A93\u0A9C\u0AA3\u0AAA\u0AAF" +
		"\u0AB3\u0ABC\u0AC7\u0AC9\u0AD3\u0ADE\u0AE9\u0AF4\u0AFF\u0B0B\u0B0D\u0B22" +
		"\u0B24\u0B37\u0B39\u0B45\u0B47\u0B56\u0B58\u0B62\u0B70\u0B74\u0B78\u0B7A" +
		"\u0B91\u0B9C\u0BA2";
	public static readonly _serializedATN: string = Utils.join(
		[
			Java9Parser._serializedATNSegment0,
			Java9Parser._serializedATNSegment1,
			Java9Parser._serializedATNSegment2,
			Java9Parser._serializedATNSegment3,
			Java9Parser._serializedATNSegment4,
			Java9Parser._serializedATNSegment5,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Java9Parser.__ATN) {
			Java9Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Java9Parser._serializedATN));
		}

		return Java9Parser.__ATN;
	}

}

export class LiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(Java9Parser.IntegerLiteral, 0); }
	public FloatingPointLiteral(): TerminalNode | undefined { return this.tryGetToken(Java9Parser.FloatingPointLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(Java9Parser.BooleanLiteral, 0); }
	public CharacterLiteral(): TerminalNode | undefined { return this.tryGetToken(Java9Parser.CharacterLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(Java9Parser.StringLiteral, 0); }
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(Java9Parser.NullLiteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_literal; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public numericType(): NumericTypeContext | undefined {
		return this.tryGetRuleContext(0, NumericTypeContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_primitiveType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericTypeContext extends ParserRuleContext {
	public integralType(): IntegralTypeContext | undefined {
		return this.tryGetRuleContext(0, IntegralTypeContext);
	}
	public floatingPointType(): FloatingPointTypeContext | undefined {
		return this.tryGetRuleContext(0, FloatingPointTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_numericType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterNumericType) {
			listener.enterNumericType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitNumericType) {
			listener.exitNumericType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitNumericType) {
			return visitor.visitNumericType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegralTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_integralType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterIntegralType) {
			listener.enterIntegralType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitIntegralType) {
			listener.exitIntegralType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitIntegralType) {
			return visitor.visitIntegralType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatingPointTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_floatingPointType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterFloatingPointType) {
			listener.enterFloatingPointType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitFloatingPointType) {
			listener.exitFloatingPointType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitFloatingPointType) {
			return visitor.visitFloatingPointType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferenceTypeContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public typeVariable(): TypeVariableContext | undefined {
		return this.tryGetRuleContext(0, TypeVariableContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_referenceType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterReferenceType) {
			listener.enterReferenceType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitReferenceType) {
			listener.exitReferenceType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitReferenceType) {
			return visitor.visitReferenceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceTypeContext extends ParserRuleContext {
	public classType_lfno_classOrInterfaceType(): ClassType_lfno_classOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassType_lfno_classOrInterfaceTypeContext);
	}
	public interfaceType_lfno_classOrInterfaceType(): InterfaceType_lfno_classOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, InterfaceType_lfno_classOrInterfaceTypeContext);
	}
	public classType_lf_classOrInterfaceType(): ClassType_lf_classOrInterfaceTypeContext[];
	public classType_lf_classOrInterfaceType(i: number): ClassType_lf_classOrInterfaceTypeContext;
	public classType_lf_classOrInterfaceType(i?: number): ClassType_lf_classOrInterfaceTypeContext | ClassType_lf_classOrInterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassType_lf_classOrInterfaceTypeContext);
		} else {
			return this.getRuleContext(i, ClassType_lf_classOrInterfaceTypeContext);
		}
	}
	public interfaceType_lf_classOrInterfaceType(): InterfaceType_lf_classOrInterfaceTypeContext[];
	public interfaceType_lf_classOrInterfaceType(i: number): InterfaceType_lf_classOrInterfaceTypeContext;
	public interfaceType_lf_classOrInterfaceType(i?: number): InterfaceType_lf_classOrInterfaceTypeContext | InterfaceType_lf_classOrInterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceType_lf_classOrInterfaceTypeContext);
		} else {
			return this.getRuleContext(i, InterfaceType_lf_classOrInterfaceTypeContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_classOrInterfaceType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterClassOrInterfaceType) {
			listener.enterClassOrInterfaceType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitClassOrInterfaceType) {
			listener.exitClassOrInterfaceType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitClassOrInterfaceType) {
			return visitor.visitClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassTypeContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_classType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterClassType) {
			listener.enterClassType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitClassType) {
			listener.exitClassType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitClassType) {
			return visitor.visitClassType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassType_lf_classOrInterfaceTypeContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_classType_lf_classOrInterfaceType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterClassType_lf_classOrInterfaceType) {
			listener.enterClassType_lf_classOrInterfaceType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitClassType_lf_classOrInterfaceType) {
			listener.exitClassType_lf_classOrInterfaceType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitClassType_lf_classOrInterfaceType) {
			return visitor.visitClassType_lf_classOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassType_lfno_classOrInterfaceTypeContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_classType_lfno_classOrInterfaceType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterClassType_lfno_classOrInterfaceType) {
			listener.enterClassType_lfno_classOrInterfaceType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitClassType_lfno_classOrInterfaceType) {
			listener.exitClassType_lfno_classOrInterfaceType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitClassType_lfno_classOrInterfaceType) {
			return visitor.visitClassType_lfno_classOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceTypeContext extends ParserRuleContext {
	public classType(): ClassTypeContext {
		return this.getRuleContext(0, ClassTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_interfaceType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterInterfaceType) {
			listener.enterInterfaceType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitInterfaceType) {
			listener.exitInterfaceType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitInterfaceType) {
			return visitor.visitInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceType_lf_classOrInterfaceTypeContext extends ParserRuleContext {
	public classType_lf_classOrInterfaceType(): ClassType_lf_classOrInterfaceTypeContext {
		return this.getRuleContext(0, ClassType_lf_classOrInterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_interfaceType_lf_classOrInterfaceType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterInterfaceType_lf_classOrInterfaceType) {
			listener.enterInterfaceType_lf_classOrInterfaceType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitInterfaceType_lf_classOrInterfaceType) {
			listener.exitInterfaceType_lf_classOrInterfaceType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitInterfaceType_lf_classOrInterfaceType) {
			return visitor.visitInterfaceType_lf_classOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceType_lfno_classOrInterfaceTypeContext extends ParserRuleContext {
	public classType_lfno_classOrInterfaceType(): ClassType_lfno_classOrInterfaceTypeContext {
		return this.getRuleContext(0, ClassType_lfno_classOrInterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_interfaceType_lfno_classOrInterfaceType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterInterfaceType_lfno_classOrInterfaceType) {
			listener.enterInterfaceType_lfno_classOrInterfaceType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitInterfaceType_lfno_classOrInterfaceType) {
			listener.exitInterfaceType_lfno_classOrInterfaceType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitInterfaceType_lfno_classOrInterfaceType) {
			return visitor.visitInterfaceType_lfno_classOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeVariableContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_typeVariable; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterTypeVariable) {
			listener.enterTypeVariable(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitTypeVariable) {
			listener.exitTypeVariable(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitTypeVariable) {
			return visitor.visitTypeVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public dims(): DimsContext {
		return this.getRuleContext(0, DimsContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public typeVariable(): TypeVariableContext | undefined {
		return this.tryGetRuleContext(0, TypeVariableContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_arrayType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimsContext extends ParserRuleContext {
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_dims; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterDims) {
			listener.enterDims(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitDims) {
			listener.exitDims(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitDims) {
			return visitor.visitDims(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public typeParameterModifier(): TypeParameterModifierContext[];
	public typeParameterModifier(i: number): TypeParameterModifierContext;
	public typeParameterModifier(i?: number): TypeParameterModifierContext | TypeParameterModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterModifierContext);
		} else {
			return this.getRuleContext(i, TypeParameterModifierContext);
		}
	}
	public typeBound(): TypeBoundContext | undefined {
		return this.tryGetRuleContext(0, TypeBoundContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_typeParameter; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext {
		return this.getRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_typeParameterModifier; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterTypeParameterModifier) {
			listener.enterTypeParameterModifier(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitTypeParameterModifier) {
			listener.exitTypeParameterModifier(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitTypeParameterModifier) {
			return visitor.visitTypeParameterModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeBoundContext extends ParserRuleContext {
	public typeVariable(): TypeVariableContext | undefined {
		return this.tryGetRuleContext(0, TypeVariableContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public additionalBound(): AdditionalBoundContext[];
	public additionalBound(i: number): AdditionalBoundContext;
	public additionalBound(i?: number): AdditionalBoundContext | AdditionalBoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditionalBoundContext);
		} else {
			return this.getRuleContext(i, AdditionalBoundContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_typeBound; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterTypeBound) {
			listener.enterTypeBound(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitTypeBound) {
			listener.exitTypeBound(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitTypeBound) {
			return visitor.visitTypeBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditionalBoundContext extends ParserRuleContext {
	public interfaceType(): InterfaceTypeContext {
		return this.getRuleContext(0, InterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_additionalBound; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterAdditionalBound) {
			listener.enterAdditionalBound(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitAdditionalBound) {
			listener.exitAdditionalBound(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitAdditionalBound) {
			return visitor.visitAdditionalBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public typeArgumentList(): TypeArgumentListContext {
		return this.getRuleContext(0, TypeArgumentListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_typeArguments; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentListContext extends ParserRuleContext {
	public typeArgument(): TypeArgumentContext[];
	public typeArgument(i: number): TypeArgumentContext;
	public typeArgument(i?: number): TypeArgumentContext | TypeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentContext);
		} else {
			return this.getRuleContext(i, TypeArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_typeArgumentList; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterTypeArgumentList) {
			listener.enterTypeArgumentList(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitTypeArgumentList) {
			listener.exitTypeArgumentList(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitTypeArgumentList) {
			return visitor.visitTypeArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentContext extends ParserRuleContext {
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public wildcard(): WildcardContext | undefined {
		return this.tryGetRuleContext(0, WildcardContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_typeArgument; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterTypeArgument) {
			listener.enterTypeArgument(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitTypeArgument) {
			listener.exitTypeArgument(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitTypeArgument) {
			return visitor.visitTypeArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WildcardContext extends ParserRuleContext {
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public wildcardBounds(): WildcardBoundsContext | undefined {
		return this.tryGetRuleContext(0, WildcardBoundsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_wildcard; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterWildcard) {
			listener.enterWildcard(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitWildcard) {
			listener.exitWildcard(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitWildcard) {
			return visitor.visitWildcard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WildcardBoundsContext extends ParserRuleContext {
	public referenceType(): ReferenceTypeContext {
		return this.getRuleContext(0, ReferenceTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_wildcardBounds; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterWildcardBounds) {
			listener.enterWildcardBounds(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitWildcardBounds) {
			listener.exitWildcardBounds(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitWildcardBounds) {
			return visitor.visitWildcardBounds(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public moduleName(): ModuleNameContext | undefined {
		return this.tryGetRuleContext(0, ModuleNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_moduleName; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterModuleName) {
			listener.enterModuleName(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitModuleName) {
			listener.exitModuleName(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitModuleName) {
			return visitor.visitModuleName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public packageName(): PackageNameContext | undefined {
		return this.tryGetRuleContext(0, PackageNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_packageName; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPackageName) {
			listener.enterPackageName(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPackageName) {
			listener.exitPackageName(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPackageName) {
			return visitor.visitPackageName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public packageOrTypeName(): PackageOrTypeNameContext | undefined {
		return this.tryGetRuleContext(0, PackageOrTypeNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_typeName; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageOrTypeNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public packageOrTypeName(): PackageOrTypeNameContext | undefined {
		return this.tryGetRuleContext(0, PackageOrTypeNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_packageOrTypeName; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPackageOrTypeName) {
			listener.enterPackageOrTypeName(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPackageOrTypeName) {
			listener.exitPackageOrTypeName(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPackageOrTypeName) {
			return visitor.visitPackageOrTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ambiguousName(): AmbiguousNameContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_expressionName; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterExpressionName) {
			listener.enterExpressionName(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitExpressionName) {
			listener.exitExpressionName(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitExpressionName) {
			return visitor.visitExpressionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_methodName; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterMethodName) {
			listener.enterMethodName(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitMethodName) {
			listener.exitMethodName(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitMethodName) {
			return visitor.visitMethodName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AmbiguousNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ambiguousName(): AmbiguousNameContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_ambiguousName; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterAmbiguousName) {
			listener.enterAmbiguousName(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitAmbiguousName) {
			listener.exitAmbiguousName(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitAmbiguousName) {
			return visitor.visitAmbiguousName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompilationUnitContext extends ParserRuleContext {
	public ordinaryCompilation(): OrdinaryCompilationContext | undefined {
		return this.tryGetRuleContext(0, OrdinaryCompilationContext);
	}
	public modularCompilation(): ModularCompilationContext | undefined {
		return this.tryGetRuleContext(0, ModularCompilationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_compilationUnit; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrdinaryCompilationContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(Java9Parser.EOF, 0); }
	public packageDeclaration(): PackageDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PackageDeclarationContext);
	}
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	public typeDeclaration(): TypeDeclarationContext[];
	public typeDeclaration(i: number): TypeDeclarationContext;
	public typeDeclaration(i?: number): TypeDeclarationContext | TypeDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDeclarationContext);
		} else {
			return this.getRuleContext(i, TypeDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_ordinaryCompilation; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterOrdinaryCompilation) {
			listener.enterOrdinaryCompilation(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitOrdinaryCompilation) {
			listener.exitOrdinaryCompilation(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitOrdinaryCompilation) {
			return visitor.visitOrdinaryCompilation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModularCompilationContext extends ParserRuleContext {
	public moduleDeclaration(): ModuleDeclarationContext {
		return this.getRuleContext(0, ModuleDeclarationContext);
	}
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_modularCompilation; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterModularCompilation) {
			listener.enterModularCompilation(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitModularCompilation) {
			listener.exitModularCompilation(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitModularCompilation) {
			return visitor.visitModularCompilation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageDeclarationContext extends ParserRuleContext {
	public packageName(): PackageNameContext {
		return this.getRuleContext(0, PackageNameContext);
	}
	public packageModifier(): PackageModifierContext[];
	public packageModifier(i: number): PackageModifierContext;
	public packageModifier(i?: number): PackageModifierContext | PackageModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PackageModifierContext);
		} else {
			return this.getRuleContext(i, PackageModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_packageDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPackageDeclaration) {
			listener.enterPackageDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPackageDeclaration) {
			listener.exitPackageDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPackageDeclaration) {
			return visitor.visitPackageDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext {
		return this.getRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_packageModifier; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPackageModifier) {
			listener.enterPackageModifier(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPackageModifier) {
			listener.exitPackageModifier(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPackageModifier) {
			return visitor.visitPackageModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public singleTypeImportDeclaration(): SingleTypeImportDeclarationContext | undefined {
		return this.tryGetRuleContext(0, SingleTypeImportDeclarationContext);
	}
	public typeImportOnDemandDeclaration(): TypeImportOnDemandDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeImportOnDemandDeclarationContext);
	}
	public singleStaticImportDeclaration(): SingleStaticImportDeclarationContext | undefined {
		return this.tryGetRuleContext(0, SingleStaticImportDeclarationContext);
	}
	public staticImportOnDemandDeclaration(): StaticImportOnDemandDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StaticImportOnDemandDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_importDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleTypeImportDeclarationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_singleTypeImportDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterSingleTypeImportDeclaration) {
			listener.enterSingleTypeImportDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitSingleTypeImportDeclaration) {
			listener.exitSingleTypeImportDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitSingleTypeImportDeclaration) {
			return visitor.visitSingleTypeImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeImportOnDemandDeclarationContext extends ParserRuleContext {
	public packageOrTypeName(): PackageOrTypeNameContext {
		return this.getRuleContext(0, PackageOrTypeNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_typeImportOnDemandDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterTypeImportOnDemandDeclaration) {
			listener.enterTypeImportOnDemandDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitTypeImportOnDemandDeclaration) {
			listener.exitTypeImportOnDemandDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitTypeImportOnDemandDeclaration) {
			return visitor.visitTypeImportOnDemandDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleStaticImportDeclarationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_singleStaticImportDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterSingleStaticImportDeclaration) {
			listener.enterSingleStaticImportDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitSingleStaticImportDeclaration) {
			listener.exitSingleStaticImportDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitSingleStaticImportDeclaration) {
			return visitor.visitSingleStaticImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticImportOnDemandDeclarationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_staticImportOnDemandDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterStaticImportOnDemandDeclaration) {
			listener.enterStaticImportOnDemandDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitStaticImportOnDemandDeclaration) {
			listener.exitStaticImportOnDemandDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitStaticImportOnDemandDeclaration) {
			return visitor.visitStaticImportOnDemandDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_typeDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleDeclarationContext extends ParserRuleContext {
	public moduleName(): ModuleNameContext {
		return this.getRuleContext(0, ModuleNameContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public moduleDirective(): ModuleDirectiveContext[];
	public moduleDirective(i: number): ModuleDirectiveContext;
	public moduleDirective(i?: number): ModuleDirectiveContext | ModuleDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleDirectiveContext);
		} else {
			return this.getRuleContext(i, ModuleDirectiveContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_moduleDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterModuleDeclaration) {
			listener.enterModuleDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitModuleDeclaration) {
			listener.exitModuleDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitModuleDeclaration) {
			return visitor.visitModuleDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleDirectiveContext extends ParserRuleContext {
	public moduleName(): ModuleNameContext[];
	public moduleName(i: number): ModuleNameContext;
	public moduleName(i?: number): ModuleNameContext | ModuleNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleNameContext);
		} else {
			return this.getRuleContext(i, ModuleNameContext);
		}
	}
	public requiresModifier(): RequiresModifierContext[];
	public requiresModifier(i: number): RequiresModifierContext;
	public requiresModifier(i?: number): RequiresModifierContext | RequiresModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RequiresModifierContext);
		} else {
			return this.getRuleContext(i, RequiresModifierContext);
		}
	}
	public packageName(): PackageNameContext | undefined {
		return this.tryGetRuleContext(0, PackageNameContext);
	}
	public typeName(): TypeNameContext[];
	public typeName(i: number): TypeNameContext;
	public typeName(i?: number): TypeNameContext | TypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeNameContext);
		} else {
			return this.getRuleContext(i, TypeNameContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_moduleDirective; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterModuleDirective) {
			listener.enterModuleDirective(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitModuleDirective) {
			listener.exitModuleDirective(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitModuleDirective) {
			return visitor.visitModuleDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RequiresModifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_requiresModifier; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterRequiresModifier) {
			listener.enterRequiresModifier(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitRequiresModifier) {
			listener.exitRequiresModifier(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitRequiresModifier) {
			return visitor.visitRequiresModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public normalClassDeclaration(): NormalClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, NormalClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_classDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalClassDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public classModifier(): ClassModifierContext[];
	public classModifier(i: number): ClassModifierContext;
	public classModifier(i?: number): ClassModifierContext | ClassModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassModifierContext);
		} else {
			return this.getRuleContext(i, ClassModifierContext);
		}
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public superclass(): SuperclassContext | undefined {
		return this.tryGetRuleContext(0, SuperclassContext);
	}
	public superinterfaces(): SuperinterfacesContext | undefined {
		return this.tryGetRuleContext(0, SuperinterfacesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_normalClassDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterNormalClassDeclaration) {
			listener.enterNormalClassDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitNormalClassDeclaration) {
			listener.exitNormalClassDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitNormalClassDeclaration) {
			return visitor.visitNormalClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_classModifier; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterClassModifier) {
			listener.enterClassModifier(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitClassModifier) {
			listener.exitClassModifier(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitClassModifier) {
			return visitor.visitClassModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public typeParameterList(): TypeParameterListContext {
		return this.getRuleContext(0, TypeParameterListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_typeParameters; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterListContext extends ParserRuleContext {
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_typeParameterList; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterTypeParameterList) {
			listener.enterTypeParameterList(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitTypeParameterList) {
			listener.exitTypeParameterList(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitTypeParameterList) {
			return visitor.visitTypeParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuperclassContext extends ParserRuleContext {
	public classType(): ClassTypeContext {
		return this.getRuleContext(0, ClassTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_superclass; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterSuperclass) {
			listener.enterSuperclass(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitSuperclass) {
			listener.exitSuperclass(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitSuperclass) {
			return visitor.visitSuperclass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuperinterfacesContext extends ParserRuleContext {
	public interfaceTypeList(): InterfaceTypeListContext {
		return this.getRuleContext(0, InterfaceTypeListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_superinterfaces; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterSuperinterfaces) {
			listener.enterSuperinterfaces(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitSuperinterfaces) {
			listener.exitSuperinterfaces(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitSuperinterfaces) {
			return visitor.visitSuperinterfaces(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceTypeListContext extends ParserRuleContext {
	public interfaceType(): InterfaceTypeContext[];
	public interfaceType(i: number): InterfaceTypeContext;
	public interfaceType(i?: number): InterfaceTypeContext | InterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceTypeContext);
		} else {
			return this.getRuleContext(i, InterfaceTypeContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_interfaceTypeList; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterInterfaceTypeList) {
			listener.enterInterfaceTypeList(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitInterfaceTypeList) {
			listener.exitInterfaceTypeList(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitInterfaceTypeList) {
			return visitor.visitInterfaceTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_classBody; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterClassBody) {
			listener.enterClassBody(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitClassBody) {
			listener.exitClassBody(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitClassBody) {
			return visitor.visitClassBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	public classMemberDeclaration(): ClassMemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassMemberDeclarationContext);
	}
	public instanceInitializer(): InstanceInitializerContext | undefined {
		return this.tryGetRuleContext(0, InstanceInitializerContext);
	}
	public staticInitializer(): StaticInitializerContext | undefined {
		return this.tryGetRuleContext(0, StaticInitializerContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_classBodyDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterClassBodyDeclaration) {
			listener.enterClassBodyDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitClassBodyDeclaration) {
			listener.exitClassBodyDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitClassBodyDeclaration) {
			return visitor.visitClassBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassMemberDeclarationContext extends ParserRuleContext {
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_classMemberDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterClassMemberDeclaration) {
			listener.enterClassMemberDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitClassMemberDeclaration) {
			listener.exitClassMemberDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitClassMemberDeclaration) {
			return visitor.visitClassMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorList(): VariableDeclaratorListContext {
		return this.getRuleContext(0, VariableDeclaratorListContext);
	}
	public fieldModifier(): FieldModifierContext[];
	public fieldModifier(i: number): FieldModifierContext;
	public fieldModifier(i?: number): FieldModifierContext | FieldModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldModifierContext);
		} else {
			return this.getRuleContext(i, FieldModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_fieldDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_fieldModifier; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterFieldModifier) {
			listener.enterFieldModifier(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitFieldModifier) {
			listener.exitFieldModifier(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitFieldModifier) {
			return visitor.visitFieldModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorListContext extends ParserRuleContext {
	public variableDeclarator(): VariableDeclaratorContext[];
	public variableDeclarator(i: number): VariableDeclaratorContext;
	public variableDeclarator(i?: number): VariableDeclaratorContext | VariableDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclaratorContext);
		} else {
			return this.getRuleContext(i, VariableDeclaratorContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_variableDeclaratorList; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterVariableDeclaratorList) {
			listener.enterVariableDeclaratorList(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitVariableDeclaratorList) {
			listener.exitVariableDeclaratorList(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitVariableDeclaratorList) {
			return visitor.visitVariableDeclaratorList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_variableDeclarator; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterVariableDeclarator) {
			listener.enterVariableDeclarator(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitVariableDeclarator) {
			listener.exitVariableDeclarator(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitVariableDeclarator) {
			return visitor.visitVariableDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorIdContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public dims(): DimsContext | undefined {
		return this.tryGetRuleContext(0, DimsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_variableDeclaratorId; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterVariableDeclaratorId) {
			listener.enterVariableDeclaratorId(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitVariableDeclaratorId) {
			listener.exitVariableDeclaratorId(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitVariableDeclaratorId) {
			return visitor.visitVariableDeclaratorId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableInitializerContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_variableInitializer; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterVariableInitializer) {
			listener.enterVariableInitializer(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitVariableInitializer) {
			listener.exitVariableInitializer(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitVariableInitializer) {
			return visitor.visitVariableInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannTypeContext extends ParserRuleContext {
	public unannPrimitiveType(): UnannPrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannPrimitiveTypeContext);
	}
	public unannReferenceType(): UnannReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannReferenceTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_unannType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterUnannType) {
			listener.enterUnannType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitUnannType) {
			listener.exitUnannType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitUnannType) {
			return visitor.visitUnannType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannPrimitiveTypeContext extends ParserRuleContext {
	public numericType(): NumericTypeContext | undefined {
		return this.tryGetRuleContext(0, NumericTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_unannPrimitiveType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterUnannPrimitiveType) {
			listener.enterUnannPrimitiveType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitUnannPrimitiveType) {
			listener.exitUnannPrimitiveType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitUnannPrimitiveType) {
			return visitor.visitUnannPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannReferenceTypeContext extends ParserRuleContext {
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannClassOrInterfaceTypeContext);
	}
	public unannTypeVariable(): UnannTypeVariableContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeVariableContext);
	}
	public unannArrayType(): UnannArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannArrayTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_unannReferenceType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterUnannReferenceType) {
			listener.enterUnannReferenceType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitUnannReferenceType) {
			listener.exitUnannReferenceType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitUnannReferenceType) {
			return visitor.visitUnannReferenceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannClassOrInterfaceTypeContext extends ParserRuleContext {
	public unannClassType_lfno_unannClassOrInterfaceType(): UnannClassType_lfno_unannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannClassType_lfno_unannClassOrInterfaceTypeContext);
	}
	public unannInterfaceType_lfno_unannClassOrInterfaceType(): UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext);
	}
	public unannClassType_lf_unannClassOrInterfaceType(): UnannClassType_lf_unannClassOrInterfaceTypeContext[];
	public unannClassType_lf_unannClassOrInterfaceType(i: number): UnannClassType_lf_unannClassOrInterfaceTypeContext;
	public unannClassType_lf_unannClassOrInterfaceType(i?: number): UnannClassType_lf_unannClassOrInterfaceTypeContext | UnannClassType_lf_unannClassOrInterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnannClassType_lf_unannClassOrInterfaceTypeContext);
		} else {
			return this.getRuleContext(i, UnannClassType_lf_unannClassOrInterfaceTypeContext);
		}
	}
	public unannInterfaceType_lf_unannClassOrInterfaceType(): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext[];
	public unannInterfaceType_lf_unannClassOrInterfaceType(i: number): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext;
	public unannInterfaceType_lf_unannClassOrInterfaceType(i?: number): UnannInterfaceType_lf_unannClassOrInterfaceTypeContext | UnannInterfaceType_lf_unannClassOrInterfaceTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnannInterfaceType_lf_unannClassOrInterfaceTypeContext);
		} else {
			return this.getRuleContext(i, UnannInterfaceType_lf_unannClassOrInterfaceTypeContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_unannClassOrInterfaceType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterUnannClassOrInterfaceType) {
			listener.enterUnannClassOrInterfaceType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitUnannClassOrInterfaceType) {
			listener.exitUnannClassOrInterfaceType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitUnannClassOrInterfaceType) {
			return visitor.visitUnannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannClassTypeContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannClassOrInterfaceTypeContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_unannClassType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterUnannClassType) {
			listener.enterUnannClassType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitUnannClassType) {
			listener.exitUnannClassType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitUnannClassType) {
			return visitor.visitUnannClassType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannClassType_lf_unannClassOrInterfaceTypeContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_unannClassType_lf_unannClassOrInterfaceType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterUnannClassType_lf_unannClassOrInterfaceType) {
			listener.enterUnannClassType_lf_unannClassOrInterfaceType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitUnannClassType_lf_unannClassOrInterfaceType) {
			listener.exitUnannClassType_lf_unannClassOrInterfaceType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitUnannClassType_lf_unannClassOrInterfaceType) {
			return visitor.visitUnannClassType_lf_unannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannClassType_lfno_unannClassOrInterfaceTypeContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_unannClassType_lfno_unannClassOrInterfaceType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterUnannClassType_lfno_unannClassOrInterfaceType) {
			listener.enterUnannClassType_lfno_unannClassOrInterfaceType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitUnannClassType_lfno_unannClassOrInterfaceType) {
			listener.exitUnannClassType_lfno_unannClassOrInterfaceType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitUnannClassType_lfno_unannClassOrInterfaceType) {
			return visitor.visitUnannClassType_lfno_unannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannInterfaceTypeContext extends ParserRuleContext {
	public unannClassType(): UnannClassTypeContext {
		return this.getRuleContext(0, UnannClassTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_unannInterfaceType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterUnannInterfaceType) {
			listener.enterUnannInterfaceType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitUnannInterfaceType) {
			listener.exitUnannInterfaceType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitUnannInterfaceType) {
			return visitor.visitUnannInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannInterfaceType_lf_unannClassOrInterfaceTypeContext extends ParserRuleContext {
	public unannClassType_lf_unannClassOrInterfaceType(): UnannClassType_lf_unannClassOrInterfaceTypeContext {
		return this.getRuleContext(0, UnannClassType_lf_unannClassOrInterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_unannInterfaceType_lf_unannClassOrInterfaceType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterUnannInterfaceType_lf_unannClassOrInterfaceType) {
			listener.enterUnannInterfaceType_lf_unannClassOrInterfaceType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitUnannInterfaceType_lf_unannClassOrInterfaceType) {
			listener.exitUnannInterfaceType_lf_unannClassOrInterfaceType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitUnannInterfaceType_lf_unannClassOrInterfaceType) {
			return visitor.visitUnannInterfaceType_lf_unannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext extends ParserRuleContext {
	public unannClassType_lfno_unannClassOrInterfaceType(): UnannClassType_lfno_unannClassOrInterfaceTypeContext {
		return this.getRuleContext(0, UnannClassType_lfno_unannClassOrInterfaceTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_unannInterfaceType_lfno_unannClassOrInterfaceType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterUnannInterfaceType_lfno_unannClassOrInterfaceType) {
			listener.enterUnannInterfaceType_lfno_unannClassOrInterfaceType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitUnannInterfaceType_lfno_unannClassOrInterfaceType) {
			listener.exitUnannInterfaceType_lfno_unannClassOrInterfaceType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitUnannInterfaceType_lfno_unannClassOrInterfaceType) {
			return visitor.visitUnannInterfaceType_lfno_unannClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannTypeVariableContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_unannTypeVariable; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterUnannTypeVariable) {
			listener.enterUnannTypeVariable(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitUnannTypeVariable) {
			listener.exitUnannTypeVariable(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitUnannTypeVariable) {
			return visitor.visitUnannTypeVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnannArrayTypeContext extends ParserRuleContext {
	public unannPrimitiveType(): UnannPrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannPrimitiveTypeContext);
	}
	public dims(): DimsContext {
		return this.getRuleContext(0, DimsContext);
	}
	public unannClassOrInterfaceType(): UnannClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannClassOrInterfaceTypeContext);
	}
	public unannTypeVariable(): UnannTypeVariableContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeVariableContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_unannArrayType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterUnannArrayType) {
			listener.enterUnannArrayType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitUnannArrayType) {
			listener.exitUnannArrayType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitUnannArrayType) {
			return visitor.visitUnannArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	public methodHeader(): MethodHeaderContext {
		return this.getRuleContext(0, MethodHeaderContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	public methodModifier(): MethodModifierContext[];
	public methodModifier(i: number): MethodModifierContext;
	public methodModifier(i?: number): MethodModifierContext | MethodModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodModifierContext);
		} else {
			return this.getRuleContext(i, MethodModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_methodDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_methodModifier; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterMethodModifier) {
			listener.enterMethodModifier(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitMethodModifier) {
			listener.exitMethodModifier(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitMethodModifier) {
			return visitor.visitMethodModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodHeaderContext extends ParserRuleContext {
	public result(): ResultContext {
		return this.getRuleContext(0, ResultContext);
	}
	public methodDeclarator(): MethodDeclaratorContext {
		return this.getRuleContext(0, MethodDeclaratorContext);
	}
	public throws_(): Throws_Context | undefined {
		return this.tryGetRuleContext(0, Throws_Context);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_methodHeader; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterMethodHeader) {
			listener.enterMethodHeader(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitMethodHeader) {
			listener.exitMethodHeader(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitMethodHeader) {
			return visitor.visitMethodHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResultContext extends ParserRuleContext {
	public unannType(): UnannTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_result; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterResult) {
			listener.enterResult(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitResult) {
			listener.exitResult(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitResult) {
			return visitor.visitResult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclaratorContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public dims(): DimsContext | undefined {
		return this.tryGetRuleContext(0, DimsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_methodDeclarator; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterMethodDeclarator) {
			listener.enterMethodDeclarator(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitMethodDeclarator) {
			listener.exitMethodDeclarator(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitMethodDeclarator) {
			return visitor.visitMethodDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameters(): FormalParametersContext | undefined {
		return this.tryGetRuleContext(0, FormalParametersContext);
	}
	public lastFormalParameter(): LastFormalParameterContext | undefined {
		return this.tryGetRuleContext(0, LastFormalParameterContext);
	}
	public receiverParameter(): ReceiverParameterContext | undefined {
		return this.tryGetRuleContext(0, ReceiverParameterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_formalParameterList; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext[];
	public formalParameter(i: number): FormalParameterContext;
	public formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext(i, FormalParameterContext);
		}
	}
	public receiverParameter(): ReceiverParameterContext | undefined {
		return this.tryGetRuleContext(0, ReceiverParameterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_formalParameters; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterFormalParameters) {
			listener.enterFormalParameters(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitFormalParameters) {
			listener.exitFormalParameters(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitFormalParameters) {
			return visitor.visitFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_formalParameter; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterFormalParameter) {
			listener.enterFormalParameter(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitFormalParameter) {
			listener.exitFormalParameter(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitFormalParameter) {
			return visitor.visitFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_variableModifier; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterVariableModifier) {
			listener.enterVariableModifier(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitVariableModifier) {
			listener.exitVariableModifier(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitVariableModifier) {
			return visitor.visitVariableModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LastFormalParameterContext extends ParserRuleContext {
	public unannType(): UnannTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public formalParameter(): FormalParameterContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_lastFormalParameter; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterLastFormalParameter) {
			listener.enterLastFormalParameter(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitLastFormalParameter) {
			listener.exitLastFormalParameter(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitLastFormalParameter) {
			return visitor.visitLastFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReceiverParameterContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_receiverParameter; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterReceiverParameter) {
			listener.enterReceiverParameter(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitReceiverParameter) {
			listener.exitReceiverParameter(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitReceiverParameter) {
			return visitor.visitReceiverParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Throws_Context extends ParserRuleContext {
	public exceptionTypeList(): ExceptionTypeListContext {
		return this.getRuleContext(0, ExceptionTypeListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_throws_; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterThrows_) {
			listener.enterThrows_(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitThrows_) {
			listener.exitThrows_(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitThrows_) {
			return visitor.visitThrows_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExceptionTypeListContext extends ParserRuleContext {
	public exceptionType(): ExceptionTypeContext[];
	public exceptionType(i: number): ExceptionTypeContext;
	public exceptionType(i?: number): ExceptionTypeContext | ExceptionTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExceptionTypeContext);
		} else {
			return this.getRuleContext(i, ExceptionTypeContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_exceptionTypeList; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterExceptionTypeList) {
			listener.enterExceptionTypeList(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitExceptionTypeList) {
			listener.exitExceptionTypeList(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitExceptionTypeList) {
			return visitor.visitExceptionTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExceptionTypeContext extends ParserRuleContext {
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	public typeVariable(): TypeVariableContext | undefined {
		return this.tryGetRuleContext(0, TypeVariableContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_exceptionType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterExceptionType) {
			listener.enterExceptionType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitExceptionType) {
			listener.exitExceptionType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitExceptionType) {
			return visitor.visitExceptionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodBodyContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_methodBody; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterMethodBody) {
			listener.enterMethodBody(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitMethodBody) {
			listener.exitMethodBody(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitMethodBody) {
			return visitor.visitMethodBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstanceInitializerContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_instanceInitializer; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterInstanceInitializer) {
			listener.enterInstanceInitializer(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitInstanceInitializer) {
			listener.exitInstanceInitializer(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitInstanceInitializer) {
			return visitor.visitInstanceInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StaticInitializerContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_staticInitializer; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterStaticInitializer) {
			listener.enterStaticInitializer(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitStaticInitializer) {
			listener.exitStaticInitializer(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitStaticInitializer) {
			return visitor.visitStaticInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	public constructorDeclarator(): ConstructorDeclaratorContext {
		return this.getRuleContext(0, ConstructorDeclaratorContext);
	}
	public constructorBody(): ConstructorBodyContext {
		return this.getRuleContext(0, ConstructorBodyContext);
	}
	public constructorModifier(): ConstructorModifierContext[];
	public constructorModifier(i: number): ConstructorModifierContext;
	public constructorModifier(i?: number): ConstructorModifierContext | ConstructorModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstructorModifierContext);
		} else {
			return this.getRuleContext(i, ConstructorModifierContext);
		}
	}
	public throws_(): Throws_Context | undefined {
		return this.tryGetRuleContext(0, Throws_Context);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_constructorDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterConstructorDeclaration) {
			listener.enterConstructorDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitConstructorDeclaration) {
			listener.exitConstructorDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitConstructorDeclaration) {
			return visitor.visitConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_constructorModifier; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterConstructorModifier) {
			listener.enterConstructorModifier(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitConstructorModifier) {
			listener.exitConstructorModifier(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitConstructorModifier) {
			return visitor.visitConstructorModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclaratorContext extends ParserRuleContext {
	public simpleTypeName(): SimpleTypeNameContext {
		return this.getRuleContext(0, SimpleTypeNameContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_constructorDeclarator; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterConstructorDeclarator) {
			listener.enterConstructorDeclarator(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitConstructorDeclarator) {
			listener.exitConstructorDeclarator(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitConstructorDeclarator) {
			return visitor.visitConstructorDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleTypeNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_simpleTypeName; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterSimpleTypeName) {
			listener.enterSimpleTypeName(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitSimpleTypeName) {
			listener.exitSimpleTypeName(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitSimpleTypeName) {
			return visitor.visitSimpleTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorBodyContext extends ParserRuleContext {
	public explicitConstructorInvocation(): ExplicitConstructorInvocationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitConstructorInvocationContext);
	}
	public blockStatements(): BlockStatementsContext | undefined {
		return this.tryGetRuleContext(0, BlockStatementsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_constructorBody; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterConstructorBody) {
			listener.enterConstructorBody(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitConstructorBody) {
			listener.exitConstructorBody(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitConstructorBody) {
			return visitor.visitConstructorBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitConstructorInvocationContext extends ParserRuleContext {
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_explicitConstructorInvocation; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterExplicitConstructorInvocation) {
			listener.enterExplicitConstructorInvocation(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitExplicitConstructorInvocation) {
			listener.exitExplicitConstructorInvocation(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitExplicitConstructorInvocation) {
			return visitor.visitExplicitConstructorInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public enumBody(): EnumBodyContext {
		return this.getRuleContext(0, EnumBodyContext);
	}
	public classModifier(): ClassModifierContext[];
	public classModifier(i: number): ClassModifierContext;
	public classModifier(i?: number): ClassModifierContext | ClassModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassModifierContext);
		} else {
			return this.getRuleContext(i, ClassModifierContext);
		}
	}
	public superinterfaces(): SuperinterfacesContext | undefined {
		return this.tryGetRuleContext(0, SuperinterfacesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_enumDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterEnumDeclaration) {
			listener.enterEnumDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitEnumDeclaration) {
			listener.exitEnumDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitEnumDeclaration) {
			return visitor.visitEnumDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyContext extends ParserRuleContext {
	public enumConstantList(): EnumConstantListContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantListContext);
	}
	public enumBodyDeclarations(): EnumBodyDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, EnumBodyDeclarationsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_enumBody; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterEnumBody) {
			listener.enterEnumBody(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitEnumBody) {
			listener.exitEnumBody(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitEnumBody) {
			return visitor.visitEnumBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantListContext extends ParserRuleContext {
	public enumConstant(): EnumConstantContext[];
	public enumConstant(i: number): EnumConstantContext;
	public enumConstant(i?: number): EnumConstantContext | EnumConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantContext);
		} else {
			return this.getRuleContext(i, EnumConstantContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_enumConstantList; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterEnumConstantList) {
			listener.enterEnumConstantList(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitEnumConstantList) {
			listener.exitEnumConstantList(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitEnumConstantList) {
			return visitor.visitEnumConstantList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public enumConstantModifier(): EnumConstantModifierContext[];
	public enumConstantModifier(i: number): EnumConstantModifierContext;
	public enumConstantModifier(i?: number): EnumConstantModifierContext | EnumConstantModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantModifierContext);
		} else {
			return this.getRuleContext(i, EnumConstantModifierContext);
		}
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_enumConstant; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterEnumConstant) {
			listener.enterEnumConstant(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitEnumConstant) {
			listener.exitEnumConstant(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitEnumConstant) {
			return visitor.visitEnumConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext {
		return this.getRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_enumConstantModifier; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterEnumConstantModifier) {
			listener.enterEnumConstantModifier(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitEnumConstantModifier) {
			listener.exitEnumConstantModifier(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitEnumConstantModifier) {
			return visitor.visitEnumConstantModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyDeclarationsContext extends ParserRuleContext {
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_enumBodyDeclarations; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterEnumBodyDeclarations) {
			listener.enterEnumBodyDeclarations(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitEnumBodyDeclarations) {
			listener.exitEnumBodyDeclarations(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitEnumBodyDeclarations) {
			return visitor.visitEnumBodyDeclarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	public normalInterfaceDeclaration(): NormalInterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, NormalInterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_interfaceDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterInterfaceDeclaration) {
			listener.enterInterfaceDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitInterfaceDeclaration) {
			listener.exitInterfaceDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitInterfaceDeclaration) {
			return visitor.visitInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalInterfaceDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public interfaceBody(): InterfaceBodyContext {
		return this.getRuleContext(0, InterfaceBodyContext);
	}
	public interfaceModifier(): InterfaceModifierContext[];
	public interfaceModifier(i: number): InterfaceModifierContext;
	public interfaceModifier(i?: number): InterfaceModifierContext | InterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceModifierContext);
		}
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public extendsInterfaces(): ExtendsInterfacesContext | undefined {
		return this.tryGetRuleContext(0, ExtendsInterfacesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_normalInterfaceDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterNormalInterfaceDeclaration) {
			listener.enterNormalInterfaceDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitNormalInterfaceDeclaration) {
			listener.exitNormalInterfaceDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitNormalInterfaceDeclaration) {
			return visitor.visitNormalInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_interfaceModifier; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterInterfaceModifier) {
			listener.enterInterfaceModifier(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitInterfaceModifier) {
			listener.exitInterfaceModifier(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitInterfaceModifier) {
			return visitor.visitInterfaceModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtendsInterfacesContext extends ParserRuleContext {
	public interfaceTypeList(): InterfaceTypeListContext {
		return this.getRuleContext(0, InterfaceTypeListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_extendsInterfaces; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterExtendsInterfaces) {
			listener.enterExtendsInterfaces(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitExtendsInterfaces) {
			listener.exitExtendsInterfaces(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitExtendsInterfaces) {
			return visitor.visitExtendsInterfaces(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceBodyContext extends ParserRuleContext {
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext[];
	public interfaceMemberDeclaration(i: number): InterfaceMemberDeclarationContext;
	public interfaceMemberDeclaration(i?: number): InterfaceMemberDeclarationContext | InterfaceMemberDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceMemberDeclarationContext);
		} else {
			return this.getRuleContext(i, InterfaceMemberDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_interfaceBody; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterInterfaceBody) {
			listener.enterInterfaceBody(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitInterfaceBody) {
			listener.exitInterfaceBody(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitInterfaceBody) {
			return visitor.visitInterfaceBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMemberDeclarationContext extends ParserRuleContext {
	public constantDeclaration(): ConstantDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstantDeclarationContext);
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMethodDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_interfaceMemberDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterInterfaceMemberDeclaration) {
			listener.enterInterfaceMemberDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitInterfaceMemberDeclaration) {
			listener.exitInterfaceMemberDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitInterfaceMemberDeclaration) {
			return visitor.visitInterfaceMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDeclarationContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorList(): VariableDeclaratorListContext {
		return this.getRuleContext(0, VariableDeclaratorListContext);
	}
	public constantModifier(): ConstantModifierContext[];
	public constantModifier(i: number): ConstantModifierContext;
	public constantModifier(i?: number): ConstantModifierContext | ConstantModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantModifierContext);
		} else {
			return this.getRuleContext(i, ConstantModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_constantDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterConstantDeclaration) {
			listener.enterConstantDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitConstantDeclaration) {
			listener.exitConstantDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitConstantDeclaration) {
			return visitor.visitConstantDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_constantModifier; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterConstantModifier) {
			listener.enterConstantModifier(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitConstantModifier) {
			listener.exitConstantModifier(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitConstantModifier) {
			return visitor.visitConstantModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodDeclarationContext extends ParserRuleContext {
	public methodHeader(): MethodHeaderContext {
		return this.getRuleContext(0, MethodHeaderContext);
	}
	public methodBody(): MethodBodyContext {
		return this.getRuleContext(0, MethodBodyContext);
	}
	public interfaceMethodModifier(): InterfaceMethodModifierContext[];
	public interfaceMethodModifier(i: number): InterfaceMethodModifierContext;
	public interfaceMethodModifier(i?: number): InterfaceMethodModifierContext | InterfaceMethodModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceMethodModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceMethodModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_interfaceMethodDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterInterfaceMethodDeclaration) {
			listener.enterInterfaceMethodDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitInterfaceMethodDeclaration) {
			listener.exitInterfaceMethodDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitInterfaceMethodDeclaration) {
			return visitor.visitInterfaceMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_interfaceMethodModifier; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterInterfaceMethodModifier) {
			listener.enterInterfaceMethodModifier(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitInterfaceMethodModifier) {
			listener.exitInterfaceMethodModifier(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitInterfaceMethodModifier) {
			return visitor.visitInterfaceMethodModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public annotationTypeBody(): AnnotationTypeBodyContext {
		return this.getRuleContext(0, AnnotationTypeBodyContext);
	}
	public interfaceModifier(): InterfaceModifierContext[];
	public interfaceModifier(i: number): InterfaceModifierContext;
	public interfaceModifier(i?: number): InterfaceModifierContext | InterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceModifierContext);
		} else {
			return this.getRuleContext(i, InterfaceModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_annotationTypeDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterAnnotationTypeDeclaration) {
			listener.enterAnnotationTypeDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitAnnotationTypeDeclaration) {
			listener.exitAnnotationTypeDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitAnnotationTypeDeclaration) {
			return visitor.visitAnnotationTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeBodyContext extends ParserRuleContext {
	public annotationTypeMemberDeclaration(): AnnotationTypeMemberDeclarationContext[];
	public annotationTypeMemberDeclaration(i: number): AnnotationTypeMemberDeclarationContext;
	public annotationTypeMemberDeclaration(i?: number): AnnotationTypeMemberDeclarationContext | AnnotationTypeMemberDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationTypeMemberDeclarationContext);
		} else {
			return this.getRuleContext(i, AnnotationTypeMemberDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_annotationTypeBody; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterAnnotationTypeBody) {
			listener.enterAnnotationTypeBody(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitAnnotationTypeBody) {
			listener.exitAnnotationTypeBody(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitAnnotationTypeBody) {
			return visitor.visitAnnotationTypeBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeMemberDeclarationContext extends ParserRuleContext {
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeElementDeclarationContext);
	}
	public constantDeclaration(): ConstantDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstantDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_annotationTypeMemberDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterAnnotationTypeMemberDeclaration) {
			listener.enterAnnotationTypeMemberDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitAnnotationTypeMemberDeclaration) {
			listener.exitAnnotationTypeMemberDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitAnnotationTypeMemberDeclaration) {
			return visitor.visitAnnotationTypeMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public annotationTypeElementModifier(): AnnotationTypeElementModifierContext[];
	public annotationTypeElementModifier(i: number): AnnotationTypeElementModifierContext;
	public annotationTypeElementModifier(i?: number): AnnotationTypeElementModifierContext | AnnotationTypeElementModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationTypeElementModifierContext);
		} else {
			return this.getRuleContext(i, AnnotationTypeElementModifierContext);
		}
	}
	public dims(): DimsContext | undefined {
		return this.tryGetRuleContext(0, DimsContext);
	}
	public defaultValue(): DefaultValueContext | undefined {
		return this.tryGetRuleContext(0, DefaultValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_annotationTypeElementDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterAnnotationTypeElementDeclaration) {
			listener.enterAnnotationTypeElementDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitAnnotationTypeElementDeclaration) {
			listener.exitAnnotationTypeElementDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementDeclaration) {
			return visitor.visitAnnotationTypeElementDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeElementModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_annotationTypeElementModifier; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterAnnotationTypeElementModifier) {
			listener.enterAnnotationTypeElementModifier(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitAnnotationTypeElementModifier) {
			listener.exitAnnotationTypeElementModifier(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementModifier) {
			return visitor.visitAnnotationTypeElementModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultValueContext extends ParserRuleContext {
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_defaultValue; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterDefaultValue) {
			listener.enterDefaultValue(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitDefaultValue) {
			listener.exitDefaultValue(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitDefaultValue) {
			return visitor.visitDefaultValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public normalAnnotation(): NormalAnnotationContext | undefined {
		return this.tryGetRuleContext(0, NormalAnnotationContext);
	}
	public markerAnnotation(): MarkerAnnotationContext | undefined {
		return this.tryGetRuleContext(0, MarkerAnnotationContext);
	}
	public singleElementAnnotation(): SingleElementAnnotationContext | undefined {
		return this.tryGetRuleContext(0, SingleElementAnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_annotation; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NormalAnnotationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public elementValuePairList(): ElementValuePairListContext | undefined {
		return this.tryGetRuleContext(0, ElementValuePairListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_normalAnnotation; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterNormalAnnotation) {
			listener.enterNormalAnnotation(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitNormalAnnotation) {
			listener.exitNormalAnnotation(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitNormalAnnotation) {
			return visitor.visitNormalAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairListContext extends ParserRuleContext {
	public elementValuePair(): ElementValuePairContext[];
	public elementValuePair(i: number): ElementValuePairContext;
	public elementValuePair(i?: number): ElementValuePairContext | ElementValuePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValuePairContext);
		} else {
			return this.getRuleContext(i, ElementValuePairContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_elementValuePairList; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterElementValuePairList) {
			listener.enterElementValuePairList(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitElementValuePairList) {
			listener.exitElementValuePairList(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitElementValuePairList) {
			return visitor.visitElementValuePairList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_elementValuePair; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterElementValuePair) {
			listener.enterElementValuePair(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitElementValuePair) {
			listener.exitElementValuePair(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitElementValuePair) {
			return visitor.visitElementValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_elementValue; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterElementValue) {
			listener.enterElementValue(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitElementValue) {
			listener.exitElementValue(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitElementValue) {
			return visitor.visitElementValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	public elementValueList(): ElementValueListContext | undefined {
		return this.tryGetRuleContext(0, ElementValueListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_elementValueArrayInitializer; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterElementValueArrayInitializer) {
			listener.enterElementValueArrayInitializer(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitElementValueArrayInitializer) {
			listener.exitElementValueArrayInitializer(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitElementValueArrayInitializer) {
			return visitor.visitElementValueArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueListContext extends ParserRuleContext {
	public elementValue(): ElementValueContext[];
	public elementValue(i: number): ElementValueContext;
	public elementValue(i?: number): ElementValueContext | ElementValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValueContext);
		} else {
			return this.getRuleContext(i, ElementValueContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_elementValueList; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterElementValueList) {
			listener.enterElementValueList(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitElementValueList) {
			listener.exitElementValueList(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitElementValueList) {
			return visitor.visitElementValueList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MarkerAnnotationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_markerAnnotation; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterMarkerAnnotation) {
			listener.enterMarkerAnnotation(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitMarkerAnnotation) {
			listener.exitMarkerAnnotation(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitMarkerAnnotation) {
			return visitor.visitMarkerAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleElementAnnotationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_singleElementAnnotation; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterSingleElementAnnotation) {
			listener.enterSingleElementAnnotation(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitSingleElementAnnotation) {
			listener.exitSingleElementAnnotation(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitSingleElementAnnotation) {
			return visitor.visitSingleElementAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	public variableInitializerList(): VariableInitializerListContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_arrayInitializer; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterArrayInitializer) {
			listener.enterArrayInitializer(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitArrayInitializer) {
			listener.exitArrayInitializer(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitArrayInitializer) {
			return visitor.visitArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableInitializerListContext extends ParserRuleContext {
	public variableInitializer(): VariableInitializerContext[];
	public variableInitializer(i: number): VariableInitializerContext;
	public variableInitializer(i?: number): VariableInitializerContext | VariableInitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableInitializerContext);
		} else {
			return this.getRuleContext(i, VariableInitializerContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_variableInitializerList; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterVariableInitializerList) {
			listener.enterVariableInitializerList(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitVariableInitializerList) {
			listener.exitVariableInitializerList(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitVariableInitializerList) {
			return visitor.visitVariableInitializerList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public blockStatements(): BlockStatementsContext | undefined {
		return this.tryGetRuleContext(0, BlockStatementsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_block; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementsContext extends ParserRuleContext {
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_blockStatements; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterBlockStatements) {
			listener.enterBlockStatements(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitBlockStatements) {
			listener.exitBlockStatements(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitBlockStatements) {
			return visitor.visitBlockStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationStatementContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_blockStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterBlockStatement) {
			listener.enterBlockStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitBlockStatement) {
			listener.exitBlockStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitBlockStatement) {
			return visitor.visitBlockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getRuleContext(0, LocalVariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_localVariableDeclarationStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterLocalVariableDeclarationStatement) {
			listener.enterLocalVariableDeclarationStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitLocalVariableDeclarationStatement) {
			listener.exitLocalVariableDeclarationStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitLocalVariableDeclarationStatement) {
			return visitor.visitLocalVariableDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorList(): VariableDeclaratorListContext {
		return this.getRuleContext(0, VariableDeclaratorListContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_localVariableDeclaration; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterLocalVariableDeclaration) {
			listener.enterLocalVariableDeclaration(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitLocalVariableDeclaration) {
			listener.exitLocalVariableDeclaration(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) {
			return visitor.visitLocalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext | undefined {
		return this.tryGetRuleContext(0, StatementWithoutTrailingSubstatementContext);
	}
	public labeledStatement(): LabeledStatementContext | undefined {
		return this.tryGetRuleContext(0, LabeledStatementContext);
	}
	public ifThenStatement(): IfThenStatementContext | undefined {
		return this.tryGetRuleContext(0, IfThenStatementContext);
	}
	public ifThenElseStatement(): IfThenElseStatementContext | undefined {
		return this.tryGetRuleContext(0, IfThenElseStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_statement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementNoShortIfContext extends ParserRuleContext {
	public statementWithoutTrailingSubstatement(): StatementWithoutTrailingSubstatementContext | undefined {
		return this.tryGetRuleContext(0, StatementWithoutTrailingSubstatementContext);
	}
	public labeledStatementNoShortIf(): LabeledStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, LabeledStatementNoShortIfContext);
	}
	public ifThenElseStatementNoShortIf(): IfThenElseStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, IfThenElseStatementNoShortIfContext);
	}
	public whileStatementNoShortIf(): WhileStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementNoShortIfContext);
	}
	public forStatementNoShortIf(): ForStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, ForStatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_statementNoShortIf; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterStatementNoShortIf) {
			listener.enterStatementNoShortIf(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitStatementNoShortIf) {
			listener.exitStatementNoShortIf(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitStatementNoShortIf) {
			return visitor.visitStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementWithoutTrailingSubstatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public emptyStatement(): EmptyStatementContext | undefined {
		return this.tryGetRuleContext(0, EmptyStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public assertStatement(): AssertStatementContext | undefined {
		return this.tryGetRuleContext(0, AssertStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public doStatement(): DoStatementContext | undefined {
		return this.tryGetRuleContext(0, DoStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public synchronizedStatement(): SynchronizedStatementContext | undefined {
		return this.tryGetRuleContext(0, SynchronizedStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_statementWithoutTrailingSubstatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterStatementWithoutTrailingSubstatement) {
			listener.enterStatementWithoutTrailingSubstatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitStatementWithoutTrailingSubstatement) {
			listener.exitStatementWithoutTrailingSubstatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitStatementWithoutTrailingSubstatement) {
			return visitor.visitStatementWithoutTrailingSubstatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_emptyStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterEmptyStatement) {
			listener.enterEmptyStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitEmptyStatement) {
			listener.exitEmptyStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitEmptyStatement) {
			return visitor.visitEmptyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledStatementContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_labeledStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterLabeledStatement) {
			listener.enterLabeledStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitLabeledStatement) {
			listener.exitLabeledStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitLabeledStatement) {
			return visitor.visitLabeledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabeledStatementNoShortIfContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_labeledStatementNoShortIf; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterLabeledStatementNoShortIf) {
			listener.enterLabeledStatementNoShortIf(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitLabeledStatementNoShortIf) {
			listener.exitLabeledStatementNoShortIf(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitLabeledStatementNoShortIf) {
			return visitor.visitLabeledStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public statementExpression(): StatementExpressionContext {
		return this.getRuleContext(0, StatementExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_expressionStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementExpressionContext extends ParserRuleContext {
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public preIncrementExpression(): PreIncrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreIncrementExpressionContext);
	}
	public preDecrementExpression(): PreDecrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreDecrementExpressionContext);
	}
	public postIncrementExpression(): PostIncrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostIncrementExpressionContext);
	}
	public postDecrementExpression(): PostDecrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostDecrementExpressionContext);
	}
	public methodInvocation(): MethodInvocationContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocationContext);
	}
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_statementExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterStatementExpression) {
			listener.enterStatementExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitStatementExpression) {
			listener.exitStatementExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitStatementExpression) {
			return visitor.visitStatementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_ifThenStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterIfThenStatement) {
			listener.enterIfThenStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitIfThenStatement) {
			listener.exitIfThenStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitIfThenStatement) {
			return visitor.visitIfThenStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenElseStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_ifThenElseStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterIfThenElseStatement) {
			listener.enterIfThenElseStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitIfThenElseStatement) {
			listener.exitIfThenElseStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitIfThenElseStatement) {
			return visitor.visitIfThenElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenElseStatementNoShortIfContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statementNoShortIf(): StatementNoShortIfContext[];
	public statementNoShortIf(i: number): StatementNoShortIfContext;
	public statementNoShortIf(i?: number): StatementNoShortIfContext | StatementNoShortIfContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementNoShortIfContext);
		} else {
			return this.getRuleContext(i, StatementNoShortIfContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_ifThenElseStatementNoShortIf; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterIfThenElseStatementNoShortIf) {
			listener.enterIfThenElseStatementNoShortIf(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitIfThenElseStatementNoShortIf) {
			listener.exitIfThenElseStatementNoShortIf(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitIfThenElseStatementNoShortIf) {
			return visitor.visitIfThenElseStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssertStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_assertStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterAssertStatement) {
			listener.enterAssertStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitAssertStatement) {
			listener.exitAssertStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitAssertStatement) {
			return visitor.visitAssertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public switchBlock(): SwitchBlockContext {
		return this.getRuleContext(0, SwitchBlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_switchStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockContext extends ParserRuleContext {
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
	public switchBlockStatementGroup(i?: number): SwitchBlockStatementGroupContext | SwitchBlockStatementGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchBlockStatementGroupContext);
		} else {
			return this.getRuleContext(i, SwitchBlockStatementGroupContext);
		}
	}
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_switchBlock; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterSwitchBlock) {
			listener.enterSwitchBlock(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitSwitchBlock) {
			listener.exitSwitchBlock(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitSwitchBlock) {
			return visitor.visitSwitchBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	public switchLabels(): SwitchLabelsContext {
		return this.getRuleContext(0, SwitchLabelsContext);
	}
	public blockStatements(): BlockStatementsContext {
		return this.getRuleContext(0, BlockStatementsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_switchBlockStatementGroup; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterSwitchBlockStatementGroup) {
			listener.enterSwitchBlockStatementGroup(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitSwitchBlockStatementGroup) {
			listener.exitSwitchBlockStatementGroup(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitSwitchBlockStatementGroup) {
			return visitor.visitSwitchBlockStatementGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchLabelsContext extends ParserRuleContext {
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_switchLabels; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterSwitchLabels) {
			listener.enterSwitchLabels(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitSwitchLabels) {
			listener.exitSwitchLabels(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitSwitchLabels) {
			return visitor.visitSwitchLabels(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchLabelContext extends ParserRuleContext {
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public enumConstantName(): EnumConstantNameContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_switchLabel; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterSwitchLabel) {
			listener.enterSwitchLabel(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitSwitchLabel) {
			listener.exitSwitchLabel(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitSwitchLabel) {
			return visitor.visitSwitchLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_enumConstantName; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterEnumConstantName) {
			listener.enterEnumConstantName(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitEnumConstantName) {
			listener.exitEnumConstantName(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitEnumConstantName) {
			return visitor.visitEnumConstantName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_whileStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementNoShortIfContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_whileStatementNoShortIf; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterWhileStatementNoShortIf) {
			listener.enterWhileStatementNoShortIf(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitWhileStatementNoShortIf) {
			listener.exitWhileStatementNoShortIf(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitWhileStatementNoShortIf) {
			return visitor.visitWhileStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_doStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterDoStatement) {
			listener.enterDoStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitDoStatement) {
			listener.exitDoStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitDoStatement) {
			return visitor.visitDoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public basicForStatement(): BasicForStatementContext | undefined {
		return this.tryGetRuleContext(0, BasicForStatementContext);
	}
	public enhancedForStatement(): EnhancedForStatementContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_forStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementNoShortIfContext extends ParserRuleContext {
	public basicForStatementNoShortIf(): BasicForStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, BasicForStatementNoShortIfContext);
	}
	public enhancedForStatementNoShortIf(): EnhancedForStatementNoShortIfContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForStatementNoShortIfContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_forStatementNoShortIf; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterForStatementNoShortIf) {
			listener.enterForStatementNoShortIf(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitForStatementNoShortIf) {
			listener.exitForStatementNoShortIf(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitForStatementNoShortIf) {
			return visitor.visitForStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicForStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public forUpdate(): ForUpdateContext | undefined {
		return this.tryGetRuleContext(0, ForUpdateContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_basicForStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterBasicForStatement) {
			listener.enterBasicForStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitBasicForStatement) {
			listener.exitBasicForStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitBasicForStatement) {
			return visitor.visitBasicForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasicForStatementNoShortIfContext extends ParserRuleContext {
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public forUpdate(): ForUpdateContext | undefined {
		return this.tryGetRuleContext(0, ForUpdateContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_basicForStatementNoShortIf; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterBasicForStatementNoShortIf) {
			listener.enterBasicForStatementNoShortIf(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitBasicForStatementNoShortIf) {
			listener.exitBasicForStatementNoShortIf(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitBasicForStatementNoShortIf) {
			return visitor.visitBasicForStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	public statementExpressionList(): StatementExpressionListContext | undefined {
		return this.tryGetRuleContext(0, StatementExpressionListContext);
	}
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_forInit; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterForInit) {
			listener.enterForInit(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitForInit) {
			listener.exitForInit(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitForInit) {
			return visitor.visitForInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForUpdateContext extends ParserRuleContext {
	public statementExpressionList(): StatementExpressionListContext {
		return this.getRuleContext(0, StatementExpressionListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_forUpdate; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterForUpdate) {
			listener.enterForUpdate(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitForUpdate) {
			listener.exitForUpdate(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitForUpdate) {
			return visitor.visitForUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementExpressionListContext extends ParserRuleContext {
	public statementExpression(): StatementExpressionContext[];
	public statementExpression(i: number): StatementExpressionContext;
	public statementExpression(i?: number): StatementExpressionContext | StatementExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementExpressionContext);
		} else {
			return this.getRuleContext(i, StatementExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_statementExpressionList; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterStatementExpressionList) {
			listener.enterStatementExpressionList(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitStatementExpressionList) {
			listener.exitStatementExpressionList(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitStatementExpressionList) {
			return visitor.visitStatementExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForStatementContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_enhancedForStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterEnhancedForStatement) {
			listener.enterEnhancedForStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitEnhancedForStatement) {
			listener.exitEnhancedForStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitEnhancedForStatement) {
			return visitor.visitEnhancedForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForStatementNoShortIfContext extends ParserRuleContext {
	public unannType(): UnannTypeContext {
		return this.getRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statementNoShortIf(): StatementNoShortIfContext {
		return this.getRuleContext(0, StatementNoShortIfContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_enhancedForStatementNoShortIf; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterEnhancedForStatementNoShortIf) {
			listener.enterEnhancedForStatementNoShortIf(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitEnhancedForStatementNoShortIf) {
			listener.exitEnhancedForStatementNoShortIf(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitEnhancedForStatementNoShortIf) {
			return visitor.visitEnhancedForStatementNoShortIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_breakStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_continueStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_returnStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_throwStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SynchronizedStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_synchronizedStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterSynchronizedStatement) {
			listener.enterSynchronizedStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitSynchronizedStatement) {
			listener.exitSynchronizedStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitSynchronizedStatement) {
			return visitor.visitSynchronizedStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public catches(): CatchesContext | undefined {
		return this.tryGetRuleContext(0, CatchesContext);
	}
	public finally_(): Finally_Context | undefined {
		return this.tryGetRuleContext(0, Finally_Context);
	}
	public tryWithResourcesStatement(): TryWithResourcesStatementContext | undefined {
		return this.tryGetRuleContext(0, TryWithResourcesStatementContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_tryStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchesContext extends ParserRuleContext {
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_catches; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterCatches) {
			listener.enterCatches(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitCatches) {
			listener.exitCatches(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitCatches) {
			return visitor.visitCatches(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public catchFormalParameter(): CatchFormalParameterContext {
		return this.getRuleContext(0, CatchFormalParameterContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_catchClause; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchFormalParameterContext extends ParserRuleContext {
	public catchType(): CatchTypeContext {
		return this.getRuleContext(0, CatchTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_catchFormalParameter; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterCatchFormalParameter) {
			listener.enterCatchFormalParameter(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitCatchFormalParameter) {
			listener.exitCatchFormalParameter(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitCatchFormalParameter) {
			return visitor.visitCatchFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchTypeContext extends ParserRuleContext {
	public unannClassType(): UnannClassTypeContext {
		return this.getRuleContext(0, UnannClassTypeContext);
	}
	public classType(): ClassTypeContext[];
	public classType(i: number): ClassTypeContext;
	public classType(i?: number): ClassTypeContext | ClassTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassTypeContext);
		} else {
			return this.getRuleContext(i, ClassTypeContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_catchType; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterCatchType) {
			listener.enterCatchType(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitCatchType) {
			listener.exitCatchType(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitCatchType) {
			return visitor.visitCatchType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Finally_Context extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_finally_; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterFinally_) {
			listener.enterFinally_(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitFinally_) {
			listener.exitFinally_(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitFinally_) {
			return visitor.visitFinally_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryWithResourcesStatementContext extends ParserRuleContext {
	public resourceSpecification(): ResourceSpecificationContext {
		return this.getRuleContext(0, ResourceSpecificationContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public catches(): CatchesContext | undefined {
		return this.tryGetRuleContext(0, CatchesContext);
	}
	public finally_(): Finally_Context | undefined {
		return this.tryGetRuleContext(0, Finally_Context);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_tryWithResourcesStatement; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterTryWithResourcesStatement) {
			listener.enterTryWithResourcesStatement(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitTryWithResourcesStatement) {
			listener.exitTryWithResourcesStatement(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitTryWithResourcesStatement) {
			return visitor.visitTryWithResourcesStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceSpecificationContext extends ParserRuleContext {
	public resourceList(): ResourceListContext {
		return this.getRuleContext(0, ResourceListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_resourceSpecification; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterResourceSpecification) {
			listener.enterResourceSpecification(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitResourceSpecification) {
			listener.exitResourceSpecification(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitResourceSpecification) {
			return visitor.visitResourceSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceListContext extends ParserRuleContext {
	public resource(): ResourceContext[];
	public resource(i: number): ResourceContext;
	public resource(i?: number): ResourceContext | ResourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ResourceContext);
		} else {
			return this.getRuleContext(i, ResourceContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_resourceList; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterResourceList) {
			listener.enterResourceList(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitResourceList) {
			listener.exitResourceList(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitResourceList) {
			return visitor.visitResourceList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceContext extends ParserRuleContext {
	public unannType(): UnannTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclaratorIdContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	public variableAccess(): VariableAccessContext | undefined {
		return this.tryGetRuleContext(0, VariableAccessContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_resource; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterResource) {
			listener.enterResource(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitResource) {
			listener.exitResource(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitResource) {
			return visitor.visitResource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableAccessContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public fieldAccess(): FieldAccessContext | undefined {
		return this.tryGetRuleContext(0, FieldAccessContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_variableAccess; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterVariableAccess) {
			listener.enterVariableAccess(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitVariableAccess) {
			listener.exitVariableAccess(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitVariableAccess) {
			return visitor.visitVariableAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public primaryNoNewArray_lfno_primary(): PrimaryNoNewArray_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryNoNewArray_lfno_primaryContext);
	}
	public arrayCreationExpression(): ArrayCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreationExpressionContext);
	}
	public primaryNoNewArray_lf_primary(): PrimaryNoNewArray_lf_primaryContext[];
	public primaryNoNewArray_lf_primary(i: number): PrimaryNoNewArray_lf_primaryContext;
	public primaryNoNewArray_lf_primary(i?: number): PrimaryNoNewArray_lf_primaryContext | PrimaryNoNewArray_lf_primaryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryNoNewArray_lf_primaryContext);
		} else {
			return this.getRuleContext(i, PrimaryNoNewArray_lf_primaryContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_primary; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArrayContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public classLiteral(): ClassLiteralContext | undefined {
		return this.tryGetRuleContext(0, ClassLiteralContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpressionContext);
	}
	public fieldAccess(): FieldAccessContext | undefined {
		return this.tryGetRuleContext(0, FieldAccessContext);
	}
	public arrayAccess(): ArrayAccessContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccessContext);
	}
	public methodInvocation(): MethodInvocationContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocationContext);
	}
	public methodReference(): MethodReferenceContext | undefined {
		return this.tryGetRuleContext(0, MethodReferenceContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_primaryNoNewArray; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPrimaryNoNewArray) {
			listener.enterPrimaryNoNewArray(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPrimaryNoNewArray) {
			listener.exitPrimaryNoNewArray(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray) {
			return visitor.visitPrimaryNoNewArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lf_arrayAccessContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_primaryNoNewArray_lf_arrayAccess; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPrimaryNoNewArray_lf_arrayAccess) {
			listener.enterPrimaryNoNewArray_lf_arrayAccess(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPrimaryNoNewArray_lf_arrayAccess) {
			listener.exitPrimaryNoNewArray_lf_arrayAccess(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lf_arrayAccess) {
			return visitor.visitPrimaryNoNewArray_lf_arrayAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lfno_arrayAccessContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public classInstanceCreationExpression(): ClassInstanceCreationExpressionContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpressionContext);
	}
	public fieldAccess(): FieldAccessContext | undefined {
		return this.tryGetRuleContext(0, FieldAccessContext);
	}
	public methodInvocation(): MethodInvocationContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocationContext);
	}
	public methodReference(): MethodReferenceContext | undefined {
		return this.tryGetRuleContext(0, MethodReferenceContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_primaryNoNewArray_lfno_arrayAccess; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPrimaryNoNewArray_lfno_arrayAccess) {
			listener.enterPrimaryNoNewArray_lfno_arrayAccess(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPrimaryNoNewArray_lfno_arrayAccess) {
			listener.exitPrimaryNoNewArray_lfno_arrayAccess(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lfno_arrayAccess) {
			return visitor.visitPrimaryNoNewArray_lfno_arrayAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lf_primaryContext extends ParserRuleContext {
	public classInstanceCreationExpression_lf_primary(): ClassInstanceCreationExpression_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpression_lf_primaryContext);
	}
	public fieldAccess_lf_primary(): FieldAccess_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, FieldAccess_lf_primaryContext);
	}
	public arrayAccess_lf_primary(): ArrayAccess_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccess_lf_primaryContext);
	}
	public methodInvocation_lf_primary(): MethodInvocation_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocation_lf_primaryContext);
	}
	public methodReference_lf_primary(): MethodReference_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodReference_lf_primaryContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_primaryNoNewArray_lf_primary; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPrimaryNoNewArray_lf_primary) {
			listener.enterPrimaryNoNewArray_lf_primary(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPrimaryNoNewArray_lf_primary) {
			listener.exitPrimaryNoNewArray_lf_primary(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lf_primary) {
			return visitor.visitPrimaryNoNewArray_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary) {
			listener.enterPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary) {
			listener.exitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary) {
			return visitor.visitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext extends ParserRuleContext {
	public classInstanceCreationExpression_lf_primary(): ClassInstanceCreationExpression_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpression_lf_primaryContext);
	}
	public fieldAccess_lf_primary(): FieldAccess_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, FieldAccess_lf_primaryContext);
	}
	public methodInvocation_lf_primary(): MethodInvocation_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocation_lf_primaryContext);
	}
	public methodReference_lf_primary(): MethodReference_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodReference_lf_primaryContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary) {
			listener.enterPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary) {
			listener.exitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary) {
			return visitor.visitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lfno_primaryContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public unannPrimitiveType(): UnannPrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannPrimitiveTypeContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public classInstanceCreationExpression_lfno_primary(): ClassInstanceCreationExpression_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpression_lfno_primaryContext);
	}
	public fieldAccess_lfno_primary(): FieldAccess_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, FieldAccess_lfno_primaryContext);
	}
	public arrayAccess_lfno_primary(): ArrayAccess_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccess_lfno_primaryContext);
	}
	public methodInvocation_lfno_primary(): MethodInvocation_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocation_lfno_primaryContext);
	}
	public methodReference_lfno_primary(): MethodReference_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodReference_lfno_primaryContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_primaryNoNewArray_lfno_primary; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPrimaryNoNewArray_lfno_primary) {
			listener.enterPrimaryNoNewArray_lfno_primary(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPrimaryNoNewArray_lfno_primary) {
			listener.exitPrimaryNoNewArray_lfno_primary(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lfno_primary) {
			return visitor.visitPrimaryNoNewArray_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary) {
			listener.enterPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary) {
			listener.exitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary) {
			return visitor.visitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public unannPrimitiveType(): UnannPrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, UnannPrimitiveTypeContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public classInstanceCreationExpression_lfno_primary(): ClassInstanceCreationExpression_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, ClassInstanceCreationExpression_lfno_primaryContext);
	}
	public fieldAccess_lfno_primary(): FieldAccess_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, FieldAccess_lfno_primaryContext);
	}
	public methodInvocation_lfno_primary(): MethodInvocation_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodInvocation_lfno_primaryContext);
	}
	public methodReference_lfno_primary(): MethodReference_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, MethodReference_lfno_primaryContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary) {
			listener.enterPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary) {
			listener.exitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary) {
			return visitor.visitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassLiteralContext extends ParserRuleContext {
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public numericType(): NumericTypeContext | undefined {
		return this.tryGetRuleContext(0, NumericTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_classLiteral; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterClassLiteral) {
			listener.enterClassLiteral(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitClassLiteral) {
			listener.exitClassLiteral(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitClassLiteral) {
			return visitor.visitClassLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassInstanceCreationExpressionContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsOrDiamondContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_classInstanceCreationExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterClassInstanceCreationExpression) {
			listener.enterClassInstanceCreationExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitClassInstanceCreationExpression) {
			listener.exitClassInstanceCreationExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitClassInstanceCreationExpression) {
			return visitor.visitClassInstanceCreationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassInstanceCreationExpression_lf_primaryContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsOrDiamondContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_classInstanceCreationExpression_lf_primary; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterClassInstanceCreationExpression_lf_primary) {
			listener.enterClassInstanceCreationExpression_lf_primary(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitClassInstanceCreationExpression_lf_primary) {
			listener.exitClassInstanceCreationExpression_lf_primary(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitClassInstanceCreationExpression_lf_primary) {
			return visitor.visitClassInstanceCreationExpression_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassInstanceCreationExpression_lfno_primaryContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsOrDiamondContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_classInstanceCreationExpression_lfno_primary; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterClassInstanceCreationExpression_lfno_primary) {
			listener.enterClassInstanceCreationExpression_lfno_primary(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitClassInstanceCreationExpression_lfno_primary) {
			listener.exitClassInstanceCreationExpression_lfno_primary(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitClassInstanceCreationExpression_lfno_primary) {
			return visitor.visitClassInstanceCreationExpression_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_typeArgumentsOrDiamond; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterTypeArgumentsOrDiamond) {
			listener.enterTypeArgumentsOrDiamond(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitTypeArgumentsOrDiamond) {
			listener.exitTypeArgumentsOrDiamond(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitTypeArgumentsOrDiamond) {
			return visitor.visitTypeArgumentsOrDiamond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldAccessContext extends ParserRuleContext {
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_fieldAccess; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterFieldAccess) {
			listener.enterFieldAccess(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitFieldAccess) {
			listener.exitFieldAccess(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitFieldAccess) {
			return visitor.visitFieldAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldAccess_lf_primaryContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_fieldAccess_lf_primary; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterFieldAccess_lf_primary) {
			listener.enterFieldAccess_lf_primary(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitFieldAccess_lf_primary) {
			listener.exitFieldAccess_lf_primary(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitFieldAccess_lf_primary) {
			return visitor.visitFieldAccess_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldAccess_lfno_primaryContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_fieldAccess_lfno_primary; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterFieldAccess_lfno_primary) {
			listener.enterFieldAccess_lfno_primary(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitFieldAccess_lfno_primary) {
			listener.exitFieldAccess_lfno_primary(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitFieldAccess_lfno_primary) {
			return visitor.visitFieldAccess_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayAccessContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public primaryNoNewArray_lfno_arrayAccess(): PrimaryNoNewArray_lfno_arrayAccessContext | undefined {
		return this.tryGetRuleContext(0, PrimaryNoNewArray_lfno_arrayAccessContext);
	}
	public primaryNoNewArray_lf_arrayAccess(): PrimaryNoNewArray_lf_arrayAccessContext[];
	public primaryNoNewArray_lf_arrayAccess(i: number): PrimaryNoNewArray_lf_arrayAccessContext;
	public primaryNoNewArray_lf_arrayAccess(i?: number): PrimaryNoNewArray_lf_arrayAccessContext | PrimaryNoNewArray_lf_arrayAccessContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryNoNewArray_lf_arrayAccessContext);
		} else {
			return this.getRuleContext(i, PrimaryNoNewArray_lf_arrayAccessContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_arrayAccess; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterArrayAccess) {
			listener.enterArrayAccess(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitArrayAccess) {
			listener.exitArrayAccess(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitArrayAccess) {
			return visitor.visitArrayAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayAccess_lf_primaryContext extends ParserRuleContext {
	public primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext[];
	public primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(i: number): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext;
	public primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(i?: number): PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext | PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext);
		} else {
			return this.getRuleContext(i, PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_arrayAccess_lf_primary; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterArrayAccess_lf_primary) {
			listener.enterArrayAccess_lf_primary(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitArrayAccess_lf_primary) {
			listener.exitArrayAccess_lf_primary(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitArrayAccess_lf_primary) {
			return visitor.visitArrayAccess_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayAccess_lfno_primaryContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext);
	}
	public primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext[];
	public primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(i: number): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext;
	public primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(i?: number): PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext | PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext);
		} else {
			return this.getRuleContext(i, PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_arrayAccess_lfno_primary; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterArrayAccess_lfno_primary) {
			listener.enterArrayAccess_lfno_primary(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitArrayAccess_lfno_primary) {
			listener.exitArrayAccess_lfno_primary(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitArrayAccess_lfno_primary) {
			return visitor.visitArrayAccess_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodInvocationContext extends ParserRuleContext {
	public methodName(): MethodNameContext | undefined {
		return this.tryGetRuleContext(0, MethodNameContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_methodInvocation; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterMethodInvocation) {
			listener.enterMethodInvocation(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitMethodInvocation) {
			listener.exitMethodInvocation(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitMethodInvocation) {
			return visitor.visitMethodInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodInvocation_lf_primaryContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_methodInvocation_lf_primary; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterMethodInvocation_lf_primary) {
			listener.enterMethodInvocation_lf_primary(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitMethodInvocation_lf_primary) {
			listener.exitMethodInvocation_lf_primary(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitMethodInvocation_lf_primary) {
			return visitor.visitMethodInvocation_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodInvocation_lfno_primaryContext extends ParserRuleContext {
	public methodName(): MethodNameContext | undefined {
		return this.tryGetRuleContext(0, MethodNameContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_methodInvocation_lfno_primary; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterMethodInvocation_lfno_primary) {
			listener.enterMethodInvocation_lfno_primary(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitMethodInvocation_lfno_primary) {
			listener.exitMethodInvocation_lfno_primary(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitMethodInvocation_lfno_primary) {
			return visitor.visitMethodInvocation_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_argumentList; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodReferenceContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_methodReference; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterMethodReference) {
			listener.enterMethodReference(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitMethodReference) {
			listener.exitMethodReference(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitMethodReference) {
			return visitor.visitMethodReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodReference_lf_primaryContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_methodReference_lf_primary; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterMethodReference_lf_primary) {
			listener.enterMethodReference_lf_primary(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitMethodReference_lf_primary) {
			listener.exitMethodReference_lf_primary(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitMethodReference_lf_primary) {
			return visitor.visitMethodReference_lf_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodReference_lfno_primaryContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_methodReference_lfno_primary; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterMethodReference_lfno_primary) {
			listener.enterMethodReference_lfno_primary(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitMethodReference_lfno_primary) {
			listener.exitMethodReference_lfno_primary(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitMethodReference_lfno_primary) {
			return visitor.visitMethodReference_lfno_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayCreationExpressionContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public dimExprs(): DimExprsContext | undefined {
		return this.tryGetRuleContext(0, DimExprsContext);
	}
	public dims(): DimsContext | undefined {
		return this.tryGetRuleContext(0, DimsContext);
	}
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_arrayCreationExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterArrayCreationExpression) {
			listener.enterArrayCreationExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitArrayCreationExpression) {
			listener.exitArrayCreationExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitArrayCreationExpression) {
			return visitor.visitArrayCreationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimExprsContext extends ParserRuleContext {
	public dimExpr(): DimExprContext[];
	public dimExpr(i: number): DimExprContext;
	public dimExpr(i?: number): DimExprContext | DimExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DimExprContext);
		} else {
			return this.getRuleContext(i, DimExprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_dimExprs; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterDimExprs) {
			listener.enterDimExprs(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitDimExprs) {
			listener.exitDimExprs(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitDimExprs) {
			return visitor.visitDimExprs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimExprContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_dimExpr; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterDimExpr) {
			listener.enterDimExpr(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitDimExpr) {
			listener.exitDimExpr(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitDimExpr) {
			return visitor.visitDimExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_constantExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterConstantExpression) {
			listener.enterConstantExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitConstantExpression) {
			listener.exitConstantExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitConstantExpression) {
			return visitor.visitConstantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
	}
	public assignmentExpression(): AssignmentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssignmentExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_expression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaExpressionContext extends ParserRuleContext {
	public lambdaParameters(): LambdaParametersContext {
		return this.getRuleContext(0, LambdaParametersContext);
	}
	public lambdaBody(): LambdaBodyContext {
		return this.getRuleContext(0, LambdaBodyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_lambdaExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterLambdaExpression) {
			listener.enterLambdaExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitLambdaExpression) {
			listener.exitLambdaExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitLambdaExpression) {
			return visitor.visitLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaParametersContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	public inferredFormalParameterList(): InferredFormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, InferredFormalParameterListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_lambdaParameters; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterLambdaParameters) {
			listener.enterLambdaParameters(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitLambdaParameters) {
			listener.exitLambdaParameters(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitLambdaParameters) {
			return visitor.visitLambdaParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InferredFormalParameterListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_inferredFormalParameterList; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterInferredFormalParameterList) {
			listener.enterInferredFormalParameterList(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitInferredFormalParameterList) {
			listener.exitInferredFormalParameterList(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitInferredFormalParameterList) {
			return visitor.visitInferredFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaBodyContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_lambdaBody; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterLambdaBody) {
			listener.enterLambdaBody(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitLambdaBody) {
			listener.exitLambdaBody(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitLambdaBody) {
			return visitor.visitLambdaBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_assignmentExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public leftHandSide(): LeftHandSideContext {
		return this.getRuleContext(0, LeftHandSideContext);
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_assignment; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LeftHandSideContext extends ParserRuleContext {
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public fieldAccess(): FieldAccessContext | undefined {
		return this.tryGetRuleContext(0, FieldAccessContext);
	}
	public arrayAccess(): ArrayAccessContext | undefined {
		return this.tryGetRuleContext(0, ArrayAccessContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_leftHandSide; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterLeftHandSide) {
			listener.enterLeftHandSide(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitLeftHandSide) {
			listener.exitLeftHandSide(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitLeftHandSide) {
			return visitor.visitLeftHandSide(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_assignmentOperator; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public conditionalOrExpression(): ConditionalOrExpressionContext {
		return this.getRuleContext(0, ConditionalOrExpressionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public conditionalExpression(): ConditionalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalExpressionContext);
	}
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_conditionalExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalOrExpressionContext extends ParserRuleContext {
	public conditionalAndExpression(): ConditionalAndExpressionContext {
		return this.getRuleContext(0, ConditionalAndExpressionContext);
	}
	public conditionalOrExpression(): ConditionalOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalOrExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_conditionalOrExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterConditionalOrExpression) {
			listener.enterConditionalOrExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitConditionalOrExpression) {
			listener.exitConditionalOrExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitConditionalOrExpression) {
			return visitor.visitConditionalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalAndExpressionContext extends ParserRuleContext {
	public inclusiveOrExpression(): InclusiveOrExpressionContext {
		return this.getRuleContext(0, InclusiveOrExpressionContext);
	}
	public conditionalAndExpression(): ConditionalAndExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConditionalAndExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_conditionalAndExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterConditionalAndExpression) {
			listener.enterConditionalAndExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitConditionalAndExpression) {
			listener.exitConditionalAndExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitConditionalAndExpression) {
			return visitor.visitConditionalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InclusiveOrExpressionContext extends ParserRuleContext {
	public exclusiveOrExpression(): ExclusiveOrExpressionContext {
		return this.getRuleContext(0, ExclusiveOrExpressionContext);
	}
	public inclusiveOrExpression(): InclusiveOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, InclusiveOrExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_inclusiveOrExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterInclusiveOrExpression) {
			listener.enterInclusiveOrExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitInclusiveOrExpression) {
			listener.exitInclusiveOrExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitInclusiveOrExpression) {
			return visitor.visitInclusiveOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExclusiveOrExpressionContext extends ParserRuleContext {
	public andExpression(): AndExpressionContext {
		return this.getRuleContext(0, AndExpressionContext);
	}
	public exclusiveOrExpression(): ExclusiveOrExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExclusiveOrExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_exclusiveOrExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterExclusiveOrExpression) {
			listener.enterExclusiveOrExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitExclusiveOrExpression) {
			listener.exitExclusiveOrExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitExclusiveOrExpression) {
			return visitor.visitExclusiveOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndExpressionContext extends ParserRuleContext {
	public equalityExpression(): EqualityExpressionContext {
		return this.getRuleContext(0, EqualityExpressionContext);
	}
	public andExpression(): AndExpressionContext | undefined {
		return this.tryGetRuleContext(0, AndExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_andExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterAndExpression) {
			listener.enterAndExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitAndExpression) {
			listener.exitAndExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	public relationalExpression(): RelationalExpressionContext {
		return this.getRuleContext(0, RelationalExpressionContext);
	}
	public equalityExpression(): EqualityExpressionContext | undefined {
		return this.tryGetRuleContext(0, EqualityExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_equalityExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	public shiftExpression(): ShiftExpressionContext | undefined {
		return this.tryGetRuleContext(0, ShiftExpressionContext);
	}
	public relationalExpression(): RelationalExpressionContext | undefined {
		return this.tryGetRuleContext(0, RelationalExpressionContext);
	}
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_relationalExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShiftExpressionContext extends ParserRuleContext {
	public additiveExpression(): AdditiveExpressionContext {
		return this.getRuleContext(0, AdditiveExpressionContext);
	}
	public shiftExpression(): ShiftExpressionContext | undefined {
		return this.tryGetRuleContext(0, ShiftExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_shiftExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterShiftExpression) {
			listener.enterShiftExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitShiftExpression) {
			listener.exitShiftExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitShiftExpression) {
			return visitor.visitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		return this.getRuleContext(0, MultiplicativeExpressionContext);
	}
	public additiveExpression(): AdditiveExpressionContext | undefined {
		return this.tryGetRuleContext(0, AdditiveExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_additiveExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	public multiplicativeExpression(): MultiplicativeExpressionContext | undefined {
		return this.tryGetRuleContext(0, MultiplicativeExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_multiplicativeExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public preIncrementExpression(): PreIncrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreIncrementExpressionContext);
	}
	public preDecrementExpression(): PreDecrementExpressionContext | undefined {
		return this.tryGetRuleContext(0, PreDecrementExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionNotPlusMinusContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_unaryExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterUnaryExpression) {
			listener.enterUnaryExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitUnaryExpression) {
			listener.exitUnaryExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PreIncrementExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_preIncrementExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPreIncrementExpression) {
			listener.enterPreIncrementExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPreIncrementExpression) {
			listener.exitPreIncrementExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPreIncrementExpression) {
			return visitor.visitPreIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PreDecrementExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext {
		return this.getRuleContext(0, UnaryExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_preDecrementExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPreDecrementExpression) {
			listener.enterPreDecrementExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPreDecrementExpression) {
			listener.exitPreDecrementExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPreDecrementExpression) {
			return visitor.visitPreDecrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionNotPlusMinusContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext | undefined {
		return this.tryGetRuleContext(0, PostfixExpressionContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public castExpression(): CastExpressionContext | undefined {
		return this.tryGetRuleContext(0, CastExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_unaryExpressionNotPlusMinus; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterUnaryExpressionNotPlusMinus) {
			listener.enterUnaryExpressionNotPlusMinus(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitUnaryExpressionNotPlusMinus) {
			listener.exitUnaryExpressionNotPlusMinus(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitUnaryExpressionNotPlusMinus) {
			return visitor.visitUnaryExpressionNotPlusMinus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public expressionName(): ExpressionNameContext | undefined {
		return this.tryGetRuleContext(0, ExpressionNameContext);
	}
	public postIncrementExpression_lf_postfixExpression(): PostIncrementExpression_lf_postfixExpressionContext[];
	public postIncrementExpression_lf_postfixExpression(i: number): PostIncrementExpression_lf_postfixExpressionContext;
	public postIncrementExpression_lf_postfixExpression(i?: number): PostIncrementExpression_lf_postfixExpressionContext | PostIncrementExpression_lf_postfixExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PostIncrementExpression_lf_postfixExpressionContext);
		} else {
			return this.getRuleContext(i, PostIncrementExpression_lf_postfixExpressionContext);
		}
	}
	public postDecrementExpression_lf_postfixExpression(): PostDecrementExpression_lf_postfixExpressionContext[];
	public postDecrementExpression_lf_postfixExpression(i: number): PostDecrementExpression_lf_postfixExpressionContext;
	public postDecrementExpression_lf_postfixExpression(i?: number): PostDecrementExpression_lf_postfixExpressionContext | PostDecrementExpression_lf_postfixExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PostDecrementExpression_lf_postfixExpressionContext);
		} else {
			return this.getRuleContext(i, PostDecrementExpression_lf_postfixExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_postfixExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPostfixExpression) {
			listener.enterPostfixExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPostfixExpression) {
			listener.exitPostfixExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostIncrementExpressionContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_postIncrementExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPostIncrementExpression) {
			listener.enterPostIncrementExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPostIncrementExpression) {
			listener.exitPostIncrementExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPostIncrementExpression) {
			return visitor.visitPostIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostIncrementExpression_lf_postfixExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_postIncrementExpression_lf_postfixExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPostIncrementExpression_lf_postfixExpression) {
			listener.enterPostIncrementExpression_lf_postfixExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPostIncrementExpression_lf_postfixExpression) {
			listener.exitPostIncrementExpression_lf_postfixExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPostIncrementExpression_lf_postfixExpression) {
			return visitor.visitPostIncrementExpression_lf_postfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostDecrementExpressionContext extends ParserRuleContext {
	public postfixExpression(): PostfixExpressionContext {
		return this.getRuleContext(0, PostfixExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_postDecrementExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPostDecrementExpression) {
			listener.enterPostDecrementExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPostDecrementExpression) {
			listener.exitPostDecrementExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPostDecrementExpression) {
			return visitor.visitPostDecrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostDecrementExpression_lf_postfixExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_postDecrementExpression_lf_postfixExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterPostDecrementExpression_lf_postfixExpression) {
			listener.enterPostDecrementExpression_lf_postfixExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitPostDecrementExpression_lf_postfixExpression) {
			listener.exitPostDecrementExpression_lf_postfixExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitPostDecrementExpression_lf_postfixExpression) {
			return visitor.visitPostDecrementExpression_lf_postfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastExpressionContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public referenceType(): ReferenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferenceTypeContext);
	}
	public unaryExpressionNotPlusMinus(): UnaryExpressionNotPlusMinusContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionNotPlusMinusContext);
	}
	public additionalBound(): AdditionalBoundContext[];
	public additionalBound(i: number): AdditionalBoundContext;
	public additionalBound(i?: number): AdditionalBoundContext | AdditionalBoundContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditionalBoundContext);
		} else {
			return this.getRuleContext(i, AdditionalBoundContext);
		}
	}
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_castExpression; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterCastExpression) {
			listener.enterCastExpression(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitCastExpression) {
			listener.exitCastExpression(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitCastExpression) {
			return visitor.visitCastExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(Java9Parser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Java9Parser.RULE_identifier; }
	@Override
	public enterRule(listener: Java9Listener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	@Override
	public exitRule(listener: Java9Listener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	@Override
	public accept<Result>(visitor: Java9Visitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


