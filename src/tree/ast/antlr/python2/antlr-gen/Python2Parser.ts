// Generated from src/tree/ast/antlr/python2/Python2.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { Python2Listener } from './Python2Listener';
import { Python2Visitor } from './Python2Visitor';


export class Python2Parser extends Parser {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly T__3=4;
	public static readonly T__4=5;
	public static readonly T__5=6;
	public static readonly T__6=7;
	public static readonly T__7=8;
	public static readonly T__8=9;
	public static readonly T__9=10;
	public static readonly T__10=11;
	public static readonly T__11=12;
	public static readonly T__12=13;
	public static readonly T__13=14;
	public static readonly T__14=15;
	public static readonly T__15=16;
	public static readonly T__16=17;
	public static readonly T__17=18;
	public static readonly T__18=19;
	public static readonly T__19=20;
	public static readonly T__20=21;
	public static readonly T__21=22;
	public static readonly T__22=23;
	public static readonly T__23=24;
	public static readonly T__24=25;
	public static readonly T__25=26;
	public static readonly T__26=27;
	public static readonly T__27=28;
	public static readonly T__28=29;
	public static readonly T__29=30;
	public static readonly T__30=31;
	public static readonly T__31=32;
	public static readonly T__32=33;
	public static readonly T__33=34;
	public static readonly T__34=35;
	public static readonly T__35=36;
	public static readonly T__36=37;
	public static readonly T__37=38;
	public static readonly T__38=39;
	public static readonly T__39=40;
	public static readonly T__40=41;
	public static readonly T__41=42;
	public static readonly T__42=43;
	public static readonly T__43=44;
	public static readonly T__44=45;
	public static readonly T__45=46;
	public static readonly T__46=47;
	public static readonly T__47=48;
	public static readonly T__48=49;
	public static readonly T__49=50;
	public static readonly T__50=51;
	public static readonly T__51=52;
	public static readonly T__52=53;
	public static readonly T__53=54;
	public static readonly T__54=55;
	public static readonly T__55=56;
	public static readonly T__56=57;
	public static readonly T__57=58;
	public static readonly T__58=59;
	public static readonly T__59=60;
	public static readonly T__60=61;
	public static readonly T__61=62;
	public static readonly T__62=63;
	public static readonly T__63=64;
	public static readonly T__64=65;
	public static readonly T__65=66;
	public static readonly T__66=67;
	public static readonly T__67=68;
	public static readonly T__68=69;
	public static readonly NAME=70;
	public static readonly NUMBER=71;
	public static readonly STRING=72;
	public static readonly LINENDING=73;
	public static readonly WHITESPACE=74;
	public static readonly COMMENT=75;
	public static readonly OPEN_PAREN=76;
	public static readonly CLOSE_PAREN=77;
	public static readonly OPEN_BRACE=78;
	public static readonly CLOSE_BRACE=79;
	public static readonly OPEN_BRACKET=80;
	public static readonly CLOSE_BRACKET=81;
	public static readonly UNKNOWN=82;
	public static readonly INDENT=83;
	public static readonly DEDENT=84;
	public static readonly NEWLINE=85;
	public static readonly ENDMARKER=86;
	public static readonly RULE_single_input = 0;
	public static readonly RULE_file_input = 1;
	public static readonly RULE_eval_input = 2;
	public static readonly RULE_decorator = 3;
	public static readonly RULE_decorators = 4;
	public static readonly RULE_decorated = 5;
	public static readonly RULE_funcdef = 6;
	public static readonly RULE_parameters = 7;
	public static readonly RULE_varargslist = 8;
	public static readonly RULE_fpdef = 9;
	public static readonly RULE_fplist = 10;
	public static readonly RULE_stmt = 11;
	public static readonly RULE_simple_stmt = 12;
	public static readonly RULE_small_stmt = 13;
	public static readonly RULE_expr_stmt = 14;
	public static readonly RULE_augassign = 15;
	public static readonly RULE_print_stmt = 16;
	public static readonly RULE_del_stmt = 17;
	public static readonly RULE_pass_stmt = 18;
	public static readonly RULE_flow_stmt = 19;
	public static readonly RULE_break_stmt = 20;
	public static readonly RULE_continue_stmt = 21;
	public static readonly RULE_return_stmt = 22;
	public static readonly RULE_yield_stmt = 23;
	public static readonly RULE_raise_stmt = 24;
	public static readonly RULE_import_stmt = 25;
	public static readonly RULE_import_name = 26;
	public static readonly RULE_import_from = 27;
	public static readonly RULE_import_as_name = 28;
	public static readonly RULE_dotted_as_name = 29;
	public static readonly RULE_import_as_names = 30;
	public static readonly RULE_dotted_as_names = 31;
	public static readonly RULE_dotted_name = 32;
	public static readonly RULE_global_stmt = 33;
	public static readonly RULE_exec_stmt = 34;
	public static readonly RULE_assert_stmt = 35;
	public static readonly RULE_compound_stmt = 36;
	public static readonly RULE_if_stmt = 37;
	public static readonly RULE_while_stmt = 38;
	public static readonly RULE_for_stmt = 39;
	public static readonly RULE_try_stmt = 40;
	public static readonly RULE_with_stmt = 41;
	public static readonly RULE_with_item = 42;
	public static readonly RULE_except_clause = 43;
	public static readonly RULE_suite = 44;
	public static readonly RULE_testlist_safe = 45;
	public static readonly RULE_old_test = 46;
	public static readonly RULE_old_lambdef = 47;
	public static readonly RULE_test = 48;
	public static readonly RULE_or_test = 49;
	public static readonly RULE_and_test = 50;
	public static readonly RULE_not_test = 51;
	public static readonly RULE_comparison = 52;
	public static readonly RULE_comp_op = 53;
	public static readonly RULE_expr = 54;
	public static readonly RULE_xor_expr = 55;
	public static readonly RULE_and_expr = 56;
	public static readonly RULE_shift_expr = 57;
	public static readonly RULE_arith_expr = 58;
	public static readonly RULE_term = 59;
	public static readonly RULE_factor = 60;
	public static readonly RULE_power = 61;
	public static readonly RULE_atom = 62;
	public static readonly RULE_listmaker = 63;
	public static readonly RULE_testlist_comp = 64;
	public static readonly RULE_lambdef = 65;
	public static readonly RULE_trailer = 66;
	public static readonly RULE_subscriptlist = 67;
	public static readonly RULE_subscript = 68;
	public static readonly RULE_sliceop = 69;
	public static readonly RULE_exprlist = 70;
	public static readonly RULE_testlist = 71;
	public static readonly RULE_dictorsetmaker = 72;
	public static readonly RULE_classdef = 73;
	public static readonly RULE_arglist = 74;
	public static readonly RULE_argument = 75;
	public static readonly RULE_list_iter = 76;
	public static readonly RULE_list_for = 77;
	public static readonly RULE_list_if = 78;
	public static readonly RULE_comp_iter = 79;
	public static readonly RULE_comp_for = 80;
	public static readonly RULE_comp_if = 81;
	public static readonly RULE_testlist1 = 82;
	public static readonly RULE_encoding_decl = 83;
	public static readonly RULE_yield_expr = 84;
	public static readonly ruleNames: string[] = [
		"single_input", "file_input", "eval_input", "decorator", "decorators", 
		"decorated", "funcdef", "parameters", "varargslist", "fpdef", "fplist", 
		"stmt", "simple_stmt", "small_stmt", "expr_stmt", "augassign", "print_stmt", 
		"del_stmt", "pass_stmt", "flow_stmt", "break_stmt", "continue_stmt", "return_stmt", 
		"yield_stmt", "raise_stmt", "import_stmt", "import_name", "import_from", 
		"import_as_name", "dotted_as_name", "import_as_names", "dotted_as_names", 
		"dotted_name", "global_stmt", "exec_stmt", "assert_stmt", "compound_stmt", 
		"if_stmt", "while_stmt", "for_stmt", "try_stmt", "with_stmt", "with_item", 
		"except_clause", "suite", "testlist_safe", "old_test", "old_lambdef", 
		"test", "or_test", "and_test", "not_test", "comparison", "comp_op", "expr", 
		"xor_expr", "and_expr", "shift_expr", "arith_expr", "term", "factor", 
		"power", "atom", "listmaker", "testlist_comp", "lambdef", "trailer", "subscriptlist", 
		"subscript", "sliceop", "exprlist", "testlist", "dictorsetmaker", "classdef", 
		"arglist", "argument", "list_iter", "list_for", "list_if", "comp_iter", 
		"comp_for", "comp_if", "testlist1", "encoding_decl", "yield_expr"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'@'", "'def'", "':'", "'='", "','", "'*'", "'**'", "';'", 
		"'+='", "'-='", "'*='", "'/='", "'%='", "'&='", "'|='", "'^='", "'<<='", 
		"'>>='", "'**='", "'//='", "'>>'", "'del'", "'pass'", "'break'", "'continue'", 
		"'return'", "'raise'", "'import'", "'from'", "'.'", "'as'", "'global'", 
		"'exec'", "'in'", "'assert'", "'if'", "'elif'", "'else'", "'while'", "'for'", 
		"'try'", "'finally'", "'with'", "'except'", "'lambda'", "'or'", "'and'", 
		"'not'", "'<'", "'>'", "'=='", "'>='", "'<='", "'<>'", "'!='", "'is'", 
		"'|'", "'^'", "'&'", "'<<'", "'+'", "'-'", "'/'", "'%'", "'//'", "'~'", 
		"'`'", "'class'", "'yield'", undefined, undefined, undefined, undefined, 
		undefined, undefined, "'('", "')'", "'{'", "'}'", "'['", "']'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"NAME", "NUMBER", "STRING", "LINENDING", "WHITESPACE", "COMMENT", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "OPEN_BRACKET", "CLOSE_BRACKET", 
		"UNKNOWN", "INDENT", "DEDENT", "NEWLINE", "ENDMARKER"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Python2Parser._LITERAL_NAMES, Python2Parser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return Python2Parser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "Python2.g4"; }

	@Override
	public get ruleNames(): string[] { return Python2Parser.ruleNames; }

	@Override
	public get serializedATN(): string { return Python2Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Python2Parser._ATN, this);
	}
	@RuleVersion(0)
	public single_input(): Single_inputContext {
		let _localctx: Single_inputContext = new Single_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Python2Parser.RULE_single_input);
		try {
			this.state = 175;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,0,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 170;
				this.match(Python2Parser.NEWLINE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 171;
				this.simple_stmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 172;
				this.compound_stmt();
				this.state = 173;
				this.match(Python2Parser.NEWLINE);
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
	@RuleVersion(0)
	public file_input(): File_inputContext {
		let _localctx: File_inputContext = new File_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Python2Parser.RULE_file_input);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,2,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					this.state = 179;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,1,this._ctx) ) {
					case 1:
						{
						this.state = 177;
						this.match(Python2Parser.NEWLINE);
						}
						break;

					case 2:
						{
						this.state = 178;
						this.stmt();
						}
						break;
					}
					} 
				}
				this.state = 183;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,2,this._ctx);
			}
			this.state = 184;
			this.match(Python2Parser.ENDMARKER);
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
	@RuleVersion(0)
	public eval_input(): Eval_inputContext {
		let _localctx: Eval_inputContext = new Eval_inputContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Python2Parser.RULE_eval_input);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.testlist();
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python2Parser.NEWLINE) {
				{
				{
				this.state = 187;
				this.match(Python2Parser.NEWLINE);
				}
				}
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 193;
			this.match(Python2Parser.ENDMARKER);
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
	@RuleVersion(0)
	public decorator(): DecoratorContext {
		let _localctx: DecoratorContext = new DecoratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Python2Parser.RULE_decorator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.match(Python2Parser.T__0);
			this.state = 196;
			this.dotted_name();
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.OPEN_PAREN) {
				{
				this.state = 197;
				this.match(Python2Parser.OPEN_PAREN);
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python2Parser.T__5) | (1 << Python2Parser.T__6) | (1 << Python2Parser.T__29))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (Python2Parser.T__44 - 45)) | (1 << (Python2Parser.T__47 - 45)) | (1 << (Python2Parser.T__60 - 45)) | (1 << (Python2Parser.T__61 - 45)) | (1 << (Python2Parser.T__65 - 45)) | (1 << (Python2Parser.T__66 - 45)) | (1 << (Python2Parser.NAME - 45)) | (1 << (Python2Parser.NUMBER - 45)) | (1 << (Python2Parser.STRING - 45)) | (1 << (Python2Parser.OPEN_PAREN - 45)))) !== 0) || _la===Python2Parser.OPEN_BRACE || _la===Python2Parser.OPEN_BRACKET) {
					{
					this.state = 198;
					this.arglist();
					}
				}

				this.state = 201;
				this.match(Python2Parser.CLOSE_PAREN);
				}
			}

			this.state = 204;
			this.match(Python2Parser.NEWLINE);
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
	@RuleVersion(0)
	public decorators(): DecoratorsContext {
		let _localctx: DecoratorsContext = new DecoratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Python2Parser.RULE_decorators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 206;
				this.decorator();
				}
				}
				this.state = 209; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===Python2Parser.T__0 );
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
	@RuleVersion(0)
	public decorated(): DecoratedContext {
		let _localctx: DecoratedContext = new DecoratedContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Python2Parser.RULE_decorated);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.decorators();
			this.state = 214;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python2Parser.T__67:
				{
				this.state = 212;
				this.classdef();
				}
				break;
			case Python2Parser.T__1:
				{
				this.state = 213;
				this.funcdef();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	@RuleVersion(0)
	public funcdef(): FuncdefContext {
		let _localctx: FuncdefContext = new FuncdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Python2Parser.RULE_funcdef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.match(Python2Parser.T__1);
			this.state = 217;
			this.match(Python2Parser.NAME);
			this.state = 218;
			this.parameters();
			this.state = 219;
			this.match(Python2Parser.T__2);
			this.state = 220;
			this.suite();
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
	@RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Python2Parser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.match(Python2Parser.OPEN_PAREN);
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__5 || _la===Python2Parser.T__6 || _la===Python2Parser.NAME || _la===Python2Parser.OPEN_PAREN) {
				{
				this.state = 223;
				this.varargslist();
				}
			}

			this.state = 226;
			this.match(Python2Parser.CLOSE_PAREN);
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
	@RuleVersion(0)
	public varargslist(): VarargslistContext {
		let _localctx: VarargslistContext = new VarargslistContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Python2Parser.RULE_varargslist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,17,this._ctx) ) {
			case 1:
				{
				this.state = 237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Python2Parser.NAME || _la===Python2Parser.OPEN_PAREN) {
					{
					{
					this.state = 228;
					this.fpdef();
					this.state = 231;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===Python2Parser.T__3) {
						{
						this.state = 229;
						this.match(Python2Parser.T__3);
						this.state = 230;
						this.test();
						}
					}

					this.state = 233;
					this.match(Python2Parser.T__4);
					}
					}
					this.state = 239;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 249;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python2Parser.T__5:
					{
					this.state = 240;
					this.match(Python2Parser.T__5);
					this.state = 241;
					this.match(Python2Parser.NAME);
					this.state = 245;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===Python2Parser.T__4) {
						{
						this.state = 242;
						this.match(Python2Parser.T__4);
						this.state = 243;
						this.match(Python2Parser.T__6);
						this.state = 244;
						this.match(Python2Parser.NAME);
						}
					}

					}
					break;
				case Python2Parser.T__6:
					{
					this.state = 247;
					this.match(Python2Parser.T__6);
					this.state = 248;
					this.match(Python2Parser.NAME);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				{
				this.state = 251;
				this.fpdef();
				this.state = 254;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python2Parser.T__3) {
					{
					this.state = 252;
					this.match(Python2Parser.T__3);
					this.state = 253;
					this.test();
					}
				}

				this.state = 264;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,15,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 256;
						this.match(Python2Parser.T__4);
						this.state = 257;
						this.fpdef();
						this.state = 260;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===Python2Parser.T__3) {
							{
							this.state = 258;
							this.match(Python2Parser.T__3);
							this.state = 259;
							this.test();
							}
						}

						}
						} 
					}
					this.state = 266;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,15,this._ctx);
				}
				this.state = 268;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python2Parser.T__4) {
					{
					this.state = 267;
					this.match(Python2Parser.T__4);
					}
				}

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
	@RuleVersion(0)
	public fpdef(): FpdefContext {
		let _localctx: FpdefContext = new FpdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Python2Parser.RULE_fpdef);
		try {
			this.state = 277;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python2Parser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 272;
				this.match(Python2Parser.NAME);
				}
				break;
			case Python2Parser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 273;
				this.match(Python2Parser.OPEN_PAREN);
				this.state = 274;
				this.fplist();
				this.state = 275;
				this.match(Python2Parser.CLOSE_PAREN);
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
	@RuleVersion(0)
	public fplist(): FplistContext {
		let _localctx: FplistContext = new FplistContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Python2Parser.RULE_fplist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this.fpdef();
			this.state = 284;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,19,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 280;
					this.match(Python2Parser.T__4);
					this.state = 281;
					this.fpdef();
					}
					} 
				}
				this.state = 286;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,19,this._ctx);
			}
			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__4) {
				{
				this.state = 287;
				this.match(Python2Parser.T__4);
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
	@RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Python2Parser.RULE_stmt);
		try {
			this.state = 292;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,21,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 290;
				this.simple_stmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 291;
				this.compound_stmt();
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
	@RuleVersion(0)
	public simple_stmt(): Simple_stmtContext {
		let _localctx: Simple_stmtContext = new Simple_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, Python2Parser.RULE_simple_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 294;
			this.small_stmt();
			this.state = 299;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,22,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 295;
					this.match(Python2Parser.T__7);
					this.state = 296;
					this.small_stmt();
					}
					} 
				}
				this.state = 301;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,22,this._ctx);
			}
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__7) {
				{
				this.state = 302;
				this.match(Python2Parser.T__7);
				}
			}

			this.state = 305;
			this.match(Python2Parser.NEWLINE);
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
	@RuleVersion(0)
	public small_stmt(): Small_stmtContext {
		let _localctx: Small_stmtContext = new Small_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, Python2Parser.RULE_small_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,24,this._ctx) ) {
			case 1:
				{
				this.state = 307;
				this.expr_stmt();
				}
				break;

			case 2:
				{
				this.state = 308;
				this.print_stmt();
				}
				break;

			case 3:
				{
				this.state = 309;
				this.del_stmt();
				}
				break;

			case 4:
				{
				this.state = 310;
				this.pass_stmt();
				}
				break;

			case 5:
				{
				this.state = 311;
				this.flow_stmt();
				}
				break;

			case 6:
				{
				this.state = 312;
				this.import_stmt();
				}
				break;

			case 7:
				{
				this.state = 313;
				this.global_stmt();
				}
				break;

			case 8:
				{
				this.state = 314;
				this.exec_stmt();
				}
				break;

			case 9:
				{
				this.state = 315;
				this.assert_stmt();
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
	@RuleVersion(0)
	public expr_stmt(): Expr_stmtContext {
		let _localctx: Expr_stmtContext = new Expr_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, Python2Parser.RULE_expr_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this.testlist();
			this.state = 334;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python2Parser.T__8:
			case Python2Parser.T__9:
			case Python2Parser.T__10:
			case Python2Parser.T__11:
			case Python2Parser.T__12:
			case Python2Parser.T__13:
			case Python2Parser.T__14:
			case Python2Parser.T__15:
			case Python2Parser.T__16:
			case Python2Parser.T__17:
			case Python2Parser.T__18:
			case Python2Parser.T__19:
				{
				this.state = 319;
				this.augassign();
				this.state = 322;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python2Parser.T__68:
					{
					this.state = 320;
					this.yield_expr();
					}
					break;
				case Python2Parser.T__29:
				case Python2Parser.T__44:
				case Python2Parser.T__47:
				case Python2Parser.T__60:
				case Python2Parser.T__61:
				case Python2Parser.T__65:
				case Python2Parser.T__66:
				case Python2Parser.NAME:
				case Python2Parser.NUMBER:
				case Python2Parser.STRING:
				case Python2Parser.OPEN_PAREN:
				case Python2Parser.OPEN_BRACE:
				case Python2Parser.OPEN_BRACKET:
					{
					this.state = 321;
					this.testlist();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case Python2Parser.T__3:
			case Python2Parser.T__7:
			case Python2Parser.NEWLINE:
				{
				this.state = 331;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Python2Parser.T__3) {
					{
					{
					this.state = 324;
					this.match(Python2Parser.T__3);
					this.state = 327;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case Python2Parser.T__68:
						{
						this.state = 325;
						this.yield_expr();
						}
						break;
					case Python2Parser.T__29:
					case Python2Parser.T__44:
					case Python2Parser.T__47:
					case Python2Parser.T__60:
					case Python2Parser.T__61:
					case Python2Parser.T__65:
					case Python2Parser.T__66:
					case Python2Parser.NAME:
					case Python2Parser.NUMBER:
					case Python2Parser.STRING:
					case Python2Parser.OPEN_PAREN:
					case Python2Parser.OPEN_BRACE:
					case Python2Parser.OPEN_BRACKET:
						{
						this.state = 326;
						this.testlist();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					this.state = 333;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	@RuleVersion(0)
	public augassign(): AugassignContext {
		let _localctx: AugassignContext = new AugassignContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, Python2Parser.RULE_augassign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python2Parser.T__8) | (1 << Python2Parser.T__9) | (1 << Python2Parser.T__10) | (1 << Python2Parser.T__11) | (1 << Python2Parser.T__12) | (1 << Python2Parser.T__13) | (1 << Python2Parser.T__14) | (1 << Python2Parser.T__15) | (1 << Python2Parser.T__16) | (1 << Python2Parser.T__17) | (1 << Python2Parser.T__18) | (1 << Python2Parser.T__19))) !== 0)) ) {
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
	@RuleVersion(0)
	public print_stmt(): Print_stmtContext {
		let _localctx: Print_stmtContext = new Print_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, Python2Parser.RULE_print_stmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 338;
			if (!(this._input.LT(1).text==='print')) throw new FailedPredicateException(this, "this._input.LT(1).text==='print'");
			this.state = 339;
			this.match(Python2Parser.NAME);
			this.state = 366;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python2Parser.T__7:
			case Python2Parser.T__29:
			case Python2Parser.T__44:
			case Python2Parser.T__47:
			case Python2Parser.T__60:
			case Python2Parser.T__61:
			case Python2Parser.T__65:
			case Python2Parser.T__66:
			case Python2Parser.NAME:
			case Python2Parser.NUMBER:
			case Python2Parser.STRING:
			case Python2Parser.OPEN_PAREN:
			case Python2Parser.OPEN_BRACE:
			case Python2Parser.OPEN_BRACKET:
			case Python2Parser.NEWLINE:
				{
				this.state = 351;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (Python2Parser.T__29 - 30)) | (1 << (Python2Parser.T__44 - 30)) | (1 << (Python2Parser.T__47 - 30)) | (1 << (Python2Parser.T__60 - 30)))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (Python2Parser.T__61 - 62)) | (1 << (Python2Parser.T__65 - 62)) | (1 << (Python2Parser.T__66 - 62)) | (1 << (Python2Parser.NAME - 62)) | (1 << (Python2Parser.NUMBER - 62)) | (1 << (Python2Parser.STRING - 62)) | (1 << (Python2Parser.OPEN_PAREN - 62)) | (1 << (Python2Parser.OPEN_BRACE - 62)) | (1 << (Python2Parser.OPEN_BRACKET - 62)))) !== 0)) {
					{
					this.state = 340;
					this.test();
					this.state = 345;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,29,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 341;
							this.match(Python2Parser.T__4);
							this.state = 342;
							this.test();
							}
							} 
						}
						this.state = 347;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,29,this._ctx);
					}
					this.state = 349;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===Python2Parser.T__4) {
						{
						this.state = 348;
						this.match(Python2Parser.T__4);
						}
					}

					}
				}

				}
				break;
			case Python2Parser.T__20:
				{
				this.state = 353;
				this.match(Python2Parser.T__20);
				this.state = 354;
				this.test();
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python2Parser.T__4) {
					{
					this.state = 357; 
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 355;
							this.match(Python2Parser.T__4);
							this.state = 356;
							this.test();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 359; 
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,32,this._ctx);
					} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
					this.state = 362;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===Python2Parser.T__4) {
						{
						this.state = 361;
						this.match(Python2Parser.T__4);
						}
					}

					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
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
	@RuleVersion(0)
	public del_stmt(): Del_stmtContext {
		let _localctx: Del_stmtContext = new Del_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, Python2Parser.RULE_del_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.match(Python2Parser.T__21);
			this.state = 369;
			this.exprlist();
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
	@RuleVersion(0)
	public pass_stmt(): Pass_stmtContext {
		let _localctx: Pass_stmtContext = new Pass_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, Python2Parser.RULE_pass_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.match(Python2Parser.T__22);
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
	@RuleVersion(0)
	public flow_stmt(): Flow_stmtContext {
		let _localctx: Flow_stmtContext = new Flow_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, Python2Parser.RULE_flow_stmt);
		try {
			this.state = 378;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python2Parser.T__23:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 373;
				this.break_stmt();
				}
				break;
			case Python2Parser.T__24:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 374;
				this.continue_stmt();
				}
				break;
			case Python2Parser.T__25:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 375;
				this.return_stmt();
				}
				break;
			case Python2Parser.T__26:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 376;
				this.raise_stmt();
				}
				break;
			case Python2Parser.T__68:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 377;
				this.yield_stmt();
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
	@RuleVersion(0)
	public break_stmt(): Break_stmtContext {
		let _localctx: Break_stmtContext = new Break_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, Python2Parser.RULE_break_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this.match(Python2Parser.T__23);
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
	@RuleVersion(0)
	public continue_stmt(): Continue_stmtContext {
		let _localctx: Continue_stmtContext = new Continue_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, Python2Parser.RULE_continue_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this.match(Python2Parser.T__24);
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
	@RuleVersion(0)
	public return_stmt(): Return_stmtContext {
		let _localctx: Return_stmtContext = new Return_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, Python2Parser.RULE_return_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this.match(Python2Parser.T__25);
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (Python2Parser.T__29 - 30)) | (1 << (Python2Parser.T__44 - 30)) | (1 << (Python2Parser.T__47 - 30)) | (1 << (Python2Parser.T__60 - 30)))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (Python2Parser.T__61 - 62)) | (1 << (Python2Parser.T__65 - 62)) | (1 << (Python2Parser.T__66 - 62)) | (1 << (Python2Parser.NAME - 62)) | (1 << (Python2Parser.NUMBER - 62)) | (1 << (Python2Parser.STRING - 62)) | (1 << (Python2Parser.OPEN_PAREN - 62)) | (1 << (Python2Parser.OPEN_BRACE - 62)) | (1 << (Python2Parser.OPEN_BRACKET - 62)))) !== 0)) {
				{
				this.state = 385;
				this.testlist();
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
	@RuleVersion(0)
	public yield_stmt(): Yield_stmtContext {
		let _localctx: Yield_stmtContext = new Yield_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, Python2Parser.RULE_yield_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 388;
			this.yield_expr();
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
	@RuleVersion(0)
	public raise_stmt(): Raise_stmtContext {
		let _localctx: Raise_stmtContext = new Raise_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, Python2Parser.RULE_raise_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.match(Python2Parser.T__26);
			this.state = 400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (Python2Parser.T__29 - 30)) | (1 << (Python2Parser.T__44 - 30)) | (1 << (Python2Parser.T__47 - 30)) | (1 << (Python2Parser.T__60 - 30)))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (Python2Parser.T__61 - 62)) | (1 << (Python2Parser.T__65 - 62)) | (1 << (Python2Parser.T__66 - 62)) | (1 << (Python2Parser.NAME - 62)) | (1 << (Python2Parser.NUMBER - 62)) | (1 << (Python2Parser.STRING - 62)) | (1 << (Python2Parser.OPEN_PAREN - 62)) | (1 << (Python2Parser.OPEN_BRACE - 62)) | (1 << (Python2Parser.OPEN_BRACKET - 62)))) !== 0)) {
				{
				this.state = 391;
				this.test();
				this.state = 398;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python2Parser.T__4) {
					{
					this.state = 392;
					this.match(Python2Parser.T__4);
					this.state = 393;
					this.test();
					this.state = 396;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===Python2Parser.T__4) {
						{
						this.state = 394;
						this.match(Python2Parser.T__4);
						this.state = 395;
						this.test();
						}
					}

					}
				}

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
	@RuleVersion(0)
	public import_stmt(): Import_stmtContext {
		let _localctx: Import_stmtContext = new Import_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, Python2Parser.RULE_import_stmt);
		try {
			this.state = 404;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python2Parser.T__27:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 402;
				this.import_name();
				}
				break;
			case Python2Parser.T__28:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 403;
				this.import_from();
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
	@RuleVersion(0)
	public import_name(): Import_nameContext {
		let _localctx: Import_nameContext = new Import_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, Python2Parser.RULE_import_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			this.match(Python2Parser.T__27);
			this.state = 407;
			this.dotted_as_names();
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
	@RuleVersion(0)
	public import_from(): Import_fromContext {
		let _localctx: Import_fromContext = new Import_fromContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, Python2Parser.RULE_import_from);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 409;
			this.match(Python2Parser.T__28);
			this.state = 422;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,44,this._ctx) ) {
			case 1:
				{
				this.state = 413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===Python2Parser.T__29) {
					{
					{
					this.state = 410;
					this.match(Python2Parser.T__29);
					}
					}
					this.state = 415;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 416;
				this.dotted_name();
				}
				break;

			case 2:
				{
				this.state = 418; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 417;
					this.match(Python2Parser.T__29);
					}
					}
					this.state = 420; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( _la===Python2Parser.T__29 );
				}
				break;
			}
			this.state = 424;
			this.match(Python2Parser.T__27);
			this.state = 431;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python2Parser.T__5:
				{
				this.state = 425;
				this.match(Python2Parser.T__5);
				}
				break;
			case Python2Parser.OPEN_PAREN:
				{
				this.state = 426;
				this.match(Python2Parser.OPEN_PAREN);
				this.state = 427;
				this.import_as_names();
				this.state = 428;
				this.match(Python2Parser.CLOSE_PAREN);
				}
				break;
			case Python2Parser.NAME:
				{
				this.state = 430;
				this.import_as_names();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	@RuleVersion(0)
	public import_as_name(): Import_as_nameContext {
		let _localctx: Import_as_nameContext = new Import_as_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, Python2Parser.RULE_import_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.match(Python2Parser.NAME);
			this.state = 436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__30) {
				{
				this.state = 434;
				this.match(Python2Parser.T__30);
				this.state = 435;
				this.match(Python2Parser.NAME);
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
	@RuleVersion(0)
	public dotted_as_name(): Dotted_as_nameContext {
		let _localctx: Dotted_as_nameContext = new Dotted_as_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, Python2Parser.RULE_dotted_as_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 438;
			this.dotted_name();
			this.state = 441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__30) {
				{
				this.state = 439;
				this.match(Python2Parser.T__30);
				this.state = 440;
				this.match(Python2Parser.NAME);
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
	@RuleVersion(0)
	public import_as_names(): Import_as_namesContext {
		let _localctx: Import_as_namesContext = new Import_as_namesContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, Python2Parser.RULE_import_as_names);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			this.import_as_name();
			this.state = 448;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,48,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 444;
					this.match(Python2Parser.T__4);
					this.state = 445;
					this.import_as_name();
					}
					} 
				}
				this.state = 450;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,48,this._ctx);
			}
			this.state = 452;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__4) {
				{
				this.state = 451;
				this.match(Python2Parser.T__4);
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
	@RuleVersion(0)
	public dotted_as_names(): Dotted_as_namesContext {
		let _localctx: Dotted_as_namesContext = new Dotted_as_namesContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, Python2Parser.RULE_dotted_as_names);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
			this.dotted_as_name();
			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python2Parser.T__4) {
				{
				{
				this.state = 455;
				this.match(Python2Parser.T__4);
				this.state = 456;
				this.dotted_as_name();
				}
				}
				this.state = 461;
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
	@RuleVersion(0)
	public dotted_name(): Dotted_nameContext {
		let _localctx: Dotted_nameContext = new Dotted_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, Python2Parser.RULE_dotted_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			this.match(Python2Parser.NAME);
			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python2Parser.T__29) {
				{
				{
				this.state = 463;
				this.match(Python2Parser.T__29);
				this.state = 464;
				this.match(Python2Parser.NAME);
				}
				}
				this.state = 469;
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
	@RuleVersion(0)
	public global_stmt(): Global_stmtContext {
		let _localctx: Global_stmtContext = new Global_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, Python2Parser.RULE_global_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 470;
			this.match(Python2Parser.T__31);
			this.state = 471;
			this.match(Python2Parser.NAME);
			this.state = 476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python2Parser.T__4) {
				{
				{
				this.state = 472;
				this.match(Python2Parser.T__4);
				this.state = 473;
				this.match(Python2Parser.NAME);
				}
				}
				this.state = 478;
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
	@RuleVersion(0)
	public exec_stmt(): Exec_stmtContext {
		let _localctx: Exec_stmtContext = new Exec_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, Python2Parser.RULE_exec_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 479;
			this.match(Python2Parser.T__32);
			this.state = 480;
			this.expr();
			this.state = 487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__33) {
				{
				this.state = 481;
				this.match(Python2Parser.T__33);
				this.state = 482;
				this.test();
				this.state = 485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python2Parser.T__4) {
					{
					this.state = 483;
					this.match(Python2Parser.T__4);
					this.state = 484;
					this.test();
					}
				}

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
	@RuleVersion(0)
	public assert_stmt(): Assert_stmtContext {
		let _localctx: Assert_stmtContext = new Assert_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, Python2Parser.RULE_assert_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.match(Python2Parser.T__34);
			this.state = 490;
			this.test();
			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__4) {
				{
				this.state = 491;
				this.match(Python2Parser.T__4);
				this.state = 492;
				this.test();
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
	@RuleVersion(0)
	public compound_stmt(): Compound_stmtContext {
		let _localctx: Compound_stmtContext = new Compound_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, Python2Parser.RULE_compound_stmt);
		try {
			this.state = 503;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python2Parser.T__35:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 495;
				this.if_stmt();
				}
				break;
			case Python2Parser.T__38:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 496;
				this.while_stmt();
				}
				break;
			case Python2Parser.T__39:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 497;
				this.for_stmt();
				}
				break;
			case Python2Parser.T__40:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 498;
				this.try_stmt();
				}
				break;
			case Python2Parser.T__42:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 499;
				this.with_stmt();
				}
				break;
			case Python2Parser.T__1:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 500;
				this.funcdef();
				}
				break;
			case Python2Parser.T__67:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 501;
				this.classdef();
				}
				break;
			case Python2Parser.T__0:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 502;
				this.decorated();
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
	@RuleVersion(0)
	public if_stmt(): If_stmtContext {
		let _localctx: If_stmtContext = new If_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, Python2Parser.RULE_if_stmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 505;
			this.match(Python2Parser.T__35);
			this.state = 506;
			this.test();
			this.state = 507;
			this.match(Python2Parser.T__2);
			this.state = 508;
			this.suite();
			this.state = 516;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,57,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 509;
					this.match(Python2Parser.T__36);
					this.state = 510;
					this.test();
					this.state = 511;
					this.match(Python2Parser.T__2);
					this.state = 512;
					this.suite();
					}
					} 
				}
				this.state = 518;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,57,this._ctx);
			}
			this.state = 522;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,58,this._ctx) ) {
			case 1:
				{
				this.state = 519;
				this.match(Python2Parser.T__37);
				this.state = 520;
				this.match(Python2Parser.T__2);
				this.state = 521;
				this.suite();
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
	@RuleVersion(0)
	public while_stmt(): While_stmtContext {
		let _localctx: While_stmtContext = new While_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, Python2Parser.RULE_while_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			this.match(Python2Parser.T__38);
			this.state = 525;
			this.test();
			this.state = 526;
			this.match(Python2Parser.T__2);
			this.state = 527;
			this.suite();
			this.state = 531;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,59,this._ctx) ) {
			case 1:
				{
				this.state = 528;
				this.match(Python2Parser.T__37);
				this.state = 529;
				this.match(Python2Parser.T__2);
				this.state = 530;
				this.suite();
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
	@RuleVersion(0)
	public for_stmt(): For_stmtContext {
		let _localctx: For_stmtContext = new For_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, Python2Parser.RULE_for_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 533;
			this.match(Python2Parser.T__39);
			this.state = 534;
			this.exprlist();
			this.state = 535;
			this.match(Python2Parser.T__33);
			this.state = 536;
			this.testlist();
			this.state = 537;
			this.match(Python2Parser.T__2);
			this.state = 538;
			this.suite();
			this.state = 542;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,60,this._ctx) ) {
			case 1:
				{
				this.state = 539;
				this.match(Python2Parser.T__37);
				this.state = 540;
				this.match(Python2Parser.T__2);
				this.state = 541;
				this.suite();
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
	@RuleVersion(0)
	public try_stmt(): Try_stmtContext {
		let _localctx: Try_stmtContext = new Try_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, Python2Parser.RULE_try_stmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 544;
			this.match(Python2Parser.T__40);
			this.state = 545;
			this.match(Python2Parser.T__2);
			this.state = 546;
			this.suite();
			this.state = 568;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python2Parser.T__43:
				{
				this.state = 551; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 547;
						this.except_clause();
						this.state = 548;
						this.match(Python2Parser.T__2);
						this.state = 549;
						this.suite();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 553; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,61,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				this.state = 558;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,62,this._ctx) ) {
				case 1:
					{
					this.state = 555;
					this.match(Python2Parser.T__37);
					this.state = 556;
					this.match(Python2Parser.T__2);
					this.state = 557;
					this.suite();
					}
					break;
				}
				this.state = 563;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,63,this._ctx) ) {
				case 1:
					{
					this.state = 560;
					this.match(Python2Parser.T__41);
					this.state = 561;
					this.match(Python2Parser.T__2);
					this.state = 562;
					this.suite();
					}
					break;
				}
				}
				break;
			case Python2Parser.T__41:
				{
				this.state = 565;
				this.match(Python2Parser.T__41);
				this.state = 566;
				this.match(Python2Parser.T__2);
				this.state = 567;
				this.suite();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	@RuleVersion(0)
	public with_stmt(): With_stmtContext {
		let _localctx: With_stmtContext = new With_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, Python2Parser.RULE_with_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 570;
			this.match(Python2Parser.T__42);
			this.state = 571;
			this.with_item();
			this.state = 576;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python2Parser.T__4) {
				{
				{
				this.state = 572;
				this.match(Python2Parser.T__4);
				this.state = 573;
				this.with_item();
				}
				}
				this.state = 578;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 579;
			this.match(Python2Parser.T__2);
			this.state = 580;
			this.suite();
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
	@RuleVersion(0)
	public with_item(): With_itemContext {
		let _localctx: With_itemContext = new With_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, Python2Parser.RULE_with_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 582;
			this.test();
			this.state = 585;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__30) {
				{
				this.state = 583;
				this.match(Python2Parser.T__30);
				this.state = 584;
				this.expr();
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
	@RuleVersion(0)
	public except_clause(): Except_clauseContext {
		let _localctx: Except_clauseContext = new Except_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, Python2Parser.RULE_except_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 587;
			this.match(Python2Parser.T__43);
			this.state = 593;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (Python2Parser.T__29 - 30)) | (1 << (Python2Parser.T__44 - 30)) | (1 << (Python2Parser.T__47 - 30)) | (1 << (Python2Parser.T__60 - 30)))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (Python2Parser.T__61 - 62)) | (1 << (Python2Parser.T__65 - 62)) | (1 << (Python2Parser.T__66 - 62)) | (1 << (Python2Parser.NAME - 62)) | (1 << (Python2Parser.NUMBER - 62)) | (1 << (Python2Parser.STRING - 62)) | (1 << (Python2Parser.OPEN_PAREN - 62)) | (1 << (Python2Parser.OPEN_BRACE - 62)) | (1 << (Python2Parser.OPEN_BRACKET - 62)))) !== 0)) {
				{
				this.state = 588;
				this.test();
				this.state = 591;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python2Parser.T__4 || _la===Python2Parser.T__30) {
					{
					this.state = 589;
					_la = this._input.LA(1);
					if ( !(_la===Python2Parser.T__4 || _la===Python2Parser.T__30) ) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 590;
					this.test();
					}
				}

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
	@RuleVersion(0)
	public suite(): SuiteContext {
		let _localctx: SuiteContext = new SuiteContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, Python2Parser.RULE_suite);
		try {
			let _alt: number;
			this.state = 605;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,70,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 595;
				this.simple_stmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 596;
				this.match(Python2Parser.NEWLINE);
				this.state = 597;
				this.match(Python2Parser.INDENT);
				this.state = 599; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 598;
						this.stmt();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 601; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,69,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				this.state = 603;
				this.match(Python2Parser.DEDENT);
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
	@RuleVersion(0)
	public testlist_safe(): Testlist_safeContext {
		let _localctx: Testlist_safeContext = new Testlist_safeContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, Python2Parser.RULE_testlist_safe);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 607;
			this.old_test();
			this.state = 617;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__4) {
				{
				this.state = 610; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 608;
						this.match(Python2Parser.T__4);
						this.state = 609;
						this.old_test();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 612; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,71,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				this.state = 615;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python2Parser.T__4) {
					{
					this.state = 614;
					this.match(Python2Parser.T__4);
					}
				}

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
	@RuleVersion(0)
	public old_test(): Old_testContext {
		let _localctx: Old_testContext = new Old_testContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, Python2Parser.RULE_old_test);
		try {
			this.state = 621;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python2Parser.T__29:
			case Python2Parser.T__47:
			case Python2Parser.T__60:
			case Python2Parser.T__61:
			case Python2Parser.T__65:
			case Python2Parser.T__66:
			case Python2Parser.NAME:
			case Python2Parser.NUMBER:
			case Python2Parser.STRING:
			case Python2Parser.OPEN_PAREN:
			case Python2Parser.OPEN_BRACE:
			case Python2Parser.OPEN_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 619;
				this.or_test();
				}
				break;
			case Python2Parser.T__44:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 620;
				this.old_lambdef();
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
	@RuleVersion(0)
	public old_lambdef(): Old_lambdefContext {
		let _localctx: Old_lambdefContext = new Old_lambdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, Python2Parser.RULE_old_lambdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 623;
			this.match(Python2Parser.T__44);
			this.state = 625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__5 || _la===Python2Parser.T__6 || _la===Python2Parser.NAME || _la===Python2Parser.OPEN_PAREN) {
				{
				this.state = 624;
				this.varargslist();
				}
			}

			this.state = 627;
			this.match(Python2Parser.T__2);
			this.state = 628;
			this.old_test();
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
	@RuleVersion(0)
	public test(): TestContext {
		let _localctx: TestContext = new TestContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, Python2Parser.RULE_test);
		let _la: number;
		try {
			this.state = 639;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python2Parser.T__29:
			case Python2Parser.T__47:
			case Python2Parser.T__60:
			case Python2Parser.T__61:
			case Python2Parser.T__65:
			case Python2Parser.T__66:
			case Python2Parser.NAME:
			case Python2Parser.NUMBER:
			case Python2Parser.STRING:
			case Python2Parser.OPEN_PAREN:
			case Python2Parser.OPEN_BRACE:
			case Python2Parser.OPEN_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 630;
				this.or_test();
				this.state = 636;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python2Parser.T__35) {
					{
					this.state = 631;
					this.match(Python2Parser.T__35);
					this.state = 632;
					this.or_test();
					this.state = 633;
					this.match(Python2Parser.T__37);
					this.state = 634;
					this.test();
					}
				}

				}
				break;
			case Python2Parser.T__44:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 638;
				this.lambdef();
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
	@RuleVersion(0)
	public or_test(): Or_testContext {
		let _localctx: Or_testContext = new Or_testContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, Python2Parser.RULE_or_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 641;
			this.and_test();
			this.state = 646;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python2Parser.T__45) {
				{
				{
				this.state = 642;
				this.match(Python2Parser.T__45);
				this.state = 643;
				this.and_test();
				}
				}
				this.state = 648;
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
	@RuleVersion(0)
	public and_test(): And_testContext {
		let _localctx: And_testContext = new And_testContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, Python2Parser.RULE_and_test);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 649;
			this.not_test();
			this.state = 654;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python2Parser.T__46) {
				{
				{
				this.state = 650;
				this.match(Python2Parser.T__46);
				this.state = 651;
				this.not_test();
				}
				}
				this.state = 656;
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
	@RuleVersion(0)
	public not_test(): Not_testContext {
		let _localctx: Not_testContext = new Not_testContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, Python2Parser.RULE_not_test);
		try {
			this.state = 660;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python2Parser.T__47:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 657;
				this.match(Python2Parser.T__47);
				this.state = 658;
				this.not_test();
				}
				break;
			case Python2Parser.T__29:
			case Python2Parser.T__60:
			case Python2Parser.T__61:
			case Python2Parser.T__65:
			case Python2Parser.T__66:
			case Python2Parser.NAME:
			case Python2Parser.NUMBER:
			case Python2Parser.STRING:
			case Python2Parser.OPEN_PAREN:
			case Python2Parser.OPEN_BRACE:
			case Python2Parser.OPEN_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 659;
				this.comparison();
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
	@RuleVersion(0)
	public comparison(): ComparisonContext {
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, Python2Parser.RULE_comparison);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 662;
			this.expr();
			this.state = 668;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (Python2Parser.T__33 - 34)) | (1 << (Python2Parser.T__47 - 34)) | (1 << (Python2Parser.T__48 - 34)) | (1 << (Python2Parser.T__49 - 34)) | (1 << (Python2Parser.T__50 - 34)) | (1 << (Python2Parser.T__51 - 34)) | (1 << (Python2Parser.T__52 - 34)) | (1 << (Python2Parser.T__53 - 34)) | (1 << (Python2Parser.T__54 - 34)) | (1 << (Python2Parser.T__55 - 34)))) !== 0)) {
				{
				{
				this.state = 663;
				this.comp_op();
				this.state = 664;
				this.expr();
				}
				}
				this.state = 670;
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
	@RuleVersion(0)
	public comp_op(): Comp_opContext {
		let _localctx: Comp_opContext = new Comp_opContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, Python2Parser.RULE_comp_op);
		try {
			this.state = 684;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,82,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 671;
				this.match(Python2Parser.T__48);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 672;
				this.match(Python2Parser.T__49);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 673;
				this.match(Python2Parser.T__50);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 674;
				this.match(Python2Parser.T__51);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 675;
				this.match(Python2Parser.T__52);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 676;
				this.match(Python2Parser.T__53);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 677;
				this.match(Python2Parser.T__54);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 678;
				this.match(Python2Parser.T__33);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 679;
				this.match(Python2Parser.T__47);
				this.state = 680;
				this.match(Python2Parser.T__33);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 681;
				this.match(Python2Parser.T__55);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 682;
				this.match(Python2Parser.T__55);
				this.state = 683;
				this.match(Python2Parser.T__47);
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
	@RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, Python2Parser.RULE_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 686;
			this.xor_expr();
			this.state = 691;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python2Parser.T__56) {
				{
				{
				this.state = 687;
				this.match(Python2Parser.T__56);
				this.state = 688;
				this.xor_expr();
				}
				}
				this.state = 693;
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
	@RuleVersion(0)
	public xor_expr(): Xor_exprContext {
		let _localctx: Xor_exprContext = new Xor_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, Python2Parser.RULE_xor_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 694;
			this.and_expr();
			this.state = 699;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python2Parser.T__57) {
				{
				{
				this.state = 695;
				this.match(Python2Parser.T__57);
				this.state = 696;
				this.and_expr();
				}
				}
				this.state = 701;
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
	@RuleVersion(0)
	public and_expr(): And_exprContext {
		let _localctx: And_exprContext = new And_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, Python2Parser.RULE_and_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 702;
			this.shift_expr();
			this.state = 707;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python2Parser.T__58) {
				{
				{
				this.state = 703;
				this.match(Python2Parser.T__58);
				this.state = 704;
				this.shift_expr();
				}
				}
				this.state = 709;
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
	@RuleVersion(0)
	public shift_expr(): Shift_exprContext {
		let _localctx: Shift_exprContext = new Shift_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, Python2Parser.RULE_shift_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 710;
			this.arith_expr();
			this.state = 715;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python2Parser.T__20 || _la===Python2Parser.T__59) {
				{
				{
				this.state = 711;
				_la = this._input.LA(1);
				if ( !(_la===Python2Parser.T__20 || _la===Python2Parser.T__59) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 712;
				this.arith_expr();
				}
				}
				this.state = 717;
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
	@RuleVersion(0)
	public arith_expr(): Arith_exprContext {
		let _localctx: Arith_exprContext = new Arith_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, Python2Parser.RULE_arith_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 718;
			this.term();
			this.state = 723;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python2Parser.T__60 || _la===Python2Parser.T__61) {
				{
				{
				this.state = 719;
				_la = this._input.LA(1);
				if ( !(_la===Python2Parser.T__60 || _la===Python2Parser.T__61) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 720;
				this.term();
				}
				}
				this.state = 725;
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
	@RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, Python2Parser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 726;
			this.factor();
			this.state = 731;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python2Parser.T__5 || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (Python2Parser.T__62 - 63)) | (1 << (Python2Parser.T__63 - 63)) | (1 << (Python2Parser.T__64 - 63)))) !== 0)) {
				{
				{
				this.state = 727;
				_la = this._input.LA(1);
				if ( !(_la===Python2Parser.T__5 || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (Python2Parser.T__62 - 63)) | (1 << (Python2Parser.T__63 - 63)) | (1 << (Python2Parser.T__64 - 63)))) !== 0)) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 728;
				this.factor();
				}
				}
				this.state = 733;
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
	@RuleVersion(0)
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, Python2Parser.RULE_factor);
		let _la: number;
		try {
			this.state = 737;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python2Parser.T__60:
			case Python2Parser.T__61:
			case Python2Parser.T__65:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 734;
				_la = this._input.LA(1);
				if ( !(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (Python2Parser.T__60 - 61)) | (1 << (Python2Parser.T__61 - 61)) | (1 << (Python2Parser.T__65 - 61)))) !== 0)) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 735;
				this.factor();
				}
				break;
			case Python2Parser.T__29:
			case Python2Parser.T__66:
			case Python2Parser.NAME:
			case Python2Parser.NUMBER:
			case Python2Parser.STRING:
			case Python2Parser.OPEN_PAREN:
			case Python2Parser.OPEN_BRACE:
			case Python2Parser.OPEN_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 736;
				this.power();
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
	@RuleVersion(0)
	public power(): PowerContext {
		let _localctx: PowerContext = new PowerContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, Python2Parser.RULE_power);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 739;
			this.atom();
			this.state = 743;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python2Parser.T__29 || _la===Python2Parser.OPEN_PAREN || _la===Python2Parser.OPEN_BRACKET) {
				{
				{
				this.state = 740;
				this.trailer();
				}
				}
				this.state = 745;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 748;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__6) {
				{
				this.state = 746;
				this.match(Python2Parser.T__6);
				this.state = 747;
				this.factor();
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
	@RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, Python2Parser.RULE_atom);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 780;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python2Parser.OPEN_PAREN:
				{
				this.state = 750;
				this.match(Python2Parser.OPEN_PAREN);
				this.state = 753;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python2Parser.T__68:
					{
					this.state = 751;
					this.yield_expr();
					}
					break;
				case Python2Parser.T__29:
				case Python2Parser.T__44:
				case Python2Parser.T__47:
				case Python2Parser.T__60:
				case Python2Parser.T__61:
				case Python2Parser.T__65:
				case Python2Parser.T__66:
				case Python2Parser.NAME:
				case Python2Parser.NUMBER:
				case Python2Parser.STRING:
				case Python2Parser.OPEN_PAREN:
				case Python2Parser.OPEN_BRACE:
				case Python2Parser.OPEN_BRACKET:
					{
					this.state = 752;
					this.testlist_comp();
					}
					break;
				case Python2Parser.CLOSE_PAREN:
					break;
				default:
					break;
				}
				this.state = 755;
				this.match(Python2Parser.CLOSE_PAREN);
				}
				break;
			case Python2Parser.OPEN_BRACKET:
				{
				this.state = 756;
				this.match(Python2Parser.OPEN_BRACKET);
				this.state = 758;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (Python2Parser.T__29 - 30)) | (1 << (Python2Parser.T__44 - 30)) | (1 << (Python2Parser.T__47 - 30)) | (1 << (Python2Parser.T__60 - 30)))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (Python2Parser.T__61 - 62)) | (1 << (Python2Parser.T__65 - 62)) | (1 << (Python2Parser.T__66 - 62)) | (1 << (Python2Parser.NAME - 62)) | (1 << (Python2Parser.NUMBER - 62)) | (1 << (Python2Parser.STRING - 62)) | (1 << (Python2Parser.OPEN_PAREN - 62)) | (1 << (Python2Parser.OPEN_BRACE - 62)) | (1 << (Python2Parser.OPEN_BRACKET - 62)))) !== 0)) {
					{
					this.state = 757;
					this.listmaker();
					}
				}

				this.state = 760;
				this.match(Python2Parser.CLOSE_BRACKET);
				}
				break;
			case Python2Parser.OPEN_BRACE:
				{
				this.state = 761;
				this.match(Python2Parser.OPEN_BRACE);
				this.state = 763;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (Python2Parser.T__29 - 30)) | (1 << (Python2Parser.T__44 - 30)) | (1 << (Python2Parser.T__47 - 30)) | (1 << (Python2Parser.T__60 - 30)))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (Python2Parser.T__61 - 62)) | (1 << (Python2Parser.T__65 - 62)) | (1 << (Python2Parser.T__66 - 62)) | (1 << (Python2Parser.NAME - 62)) | (1 << (Python2Parser.NUMBER - 62)) | (1 << (Python2Parser.STRING - 62)) | (1 << (Python2Parser.OPEN_PAREN - 62)) | (1 << (Python2Parser.OPEN_BRACE - 62)) | (1 << (Python2Parser.OPEN_BRACKET - 62)))) !== 0)) {
					{
					this.state = 762;
					this.dictorsetmaker();
					}
				}

				this.state = 765;
				this.match(Python2Parser.CLOSE_BRACE);
				}
				break;
			case Python2Parser.T__66:
				{
				this.state = 766;
				this.match(Python2Parser.T__66);
				this.state = 767;
				this.testlist1();
				this.state = 768;
				this.match(Python2Parser.T__66);
				}
				break;
			case Python2Parser.T__29:
				{
				this.state = 770;
				this.match(Python2Parser.T__29);
				this.state = 771;
				this.match(Python2Parser.T__29);
				this.state = 772;
				this.match(Python2Parser.T__29);
				}
				break;
			case Python2Parser.NAME:
				{
				this.state = 773;
				this.match(Python2Parser.NAME);
				}
				break;
			case Python2Parser.NUMBER:
				{
				this.state = 774;
				this.match(Python2Parser.NUMBER);
				}
				break;
			case Python2Parser.STRING:
				{
				this.state = 776; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 775;
					this.match(Python2Parser.STRING);
					}
					}
					this.state = 778; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( _la===Python2Parser.STRING );
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	@RuleVersion(0)
	public listmaker(): ListmakerContext {
		let _localctx: ListmakerContext = new ListmakerContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, Python2Parser.RULE_listmaker);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 782;
			this.test();
			this.state = 794;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python2Parser.T__39:
				{
				this.state = 783;
				this.list_for();
				}
				break;
			case Python2Parser.T__4:
			case Python2Parser.CLOSE_BRACKET:
				{
				this.state = 788;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,97,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 784;
						this.match(Python2Parser.T__4);
						this.state = 785;
						this.test();
						}
						} 
					}
					this.state = 790;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,97,this._ctx);
				}
				this.state = 792;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python2Parser.T__4) {
					{
					this.state = 791;
					this.match(Python2Parser.T__4);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
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
	@RuleVersion(0)
	public testlist_comp(): Testlist_compContext {
		let _localctx: Testlist_compContext = new Testlist_compContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, Python2Parser.RULE_testlist_comp);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 796;
			this.test();
			this.state = 808;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python2Parser.T__39:
				{
				this.state = 797;
				this.comp_for();
				}
				break;
			case Python2Parser.T__4:
			case Python2Parser.CLOSE_PAREN:
				{
				this.state = 802;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,100,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 798;
						this.match(Python2Parser.T__4);
						this.state = 799;
						this.test();
						}
						} 
					}
					this.state = 804;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,100,this._ctx);
				}
				this.state = 806;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python2Parser.T__4) {
					{
					this.state = 805;
					this.match(Python2Parser.T__4);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
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
	@RuleVersion(0)
	public lambdef(): LambdefContext {
		let _localctx: LambdefContext = new LambdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, Python2Parser.RULE_lambdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 810;
			this.match(Python2Parser.T__44);
			this.state = 812;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__5 || _la===Python2Parser.T__6 || _la===Python2Parser.NAME || _la===Python2Parser.OPEN_PAREN) {
				{
				this.state = 811;
				this.varargslist();
				}
			}

			this.state = 814;
			this.match(Python2Parser.T__2);
			this.state = 815;
			this.test();
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
	@RuleVersion(0)
	public trailer(): TrailerContext {
		let _localctx: TrailerContext = new TrailerContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, Python2Parser.RULE_trailer);
		let _la: number;
		try {
			this.state = 828;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python2Parser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 817;
				this.match(Python2Parser.OPEN_PAREN);
				this.state = 819;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Python2Parser.T__5) | (1 << Python2Parser.T__6) | (1 << Python2Parser.T__29))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (Python2Parser.T__44 - 45)) | (1 << (Python2Parser.T__47 - 45)) | (1 << (Python2Parser.T__60 - 45)) | (1 << (Python2Parser.T__61 - 45)) | (1 << (Python2Parser.T__65 - 45)) | (1 << (Python2Parser.T__66 - 45)) | (1 << (Python2Parser.NAME - 45)) | (1 << (Python2Parser.NUMBER - 45)) | (1 << (Python2Parser.STRING - 45)) | (1 << (Python2Parser.OPEN_PAREN - 45)))) !== 0) || _la===Python2Parser.OPEN_BRACE || _la===Python2Parser.OPEN_BRACKET) {
					{
					this.state = 818;
					this.arglist();
					}
				}

				this.state = 821;
				this.match(Python2Parser.CLOSE_PAREN);
				}
				break;
			case Python2Parser.OPEN_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 822;
				this.match(Python2Parser.OPEN_BRACKET);
				this.state = 823;
				this.subscriptlist();
				this.state = 824;
				this.match(Python2Parser.CLOSE_BRACKET);
				}
				break;
			case Python2Parser.T__29:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 826;
				this.match(Python2Parser.T__29);
				this.state = 827;
				this.match(Python2Parser.NAME);
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
	@RuleVersion(0)
	public subscriptlist(): SubscriptlistContext {
		let _localctx: SubscriptlistContext = new SubscriptlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, Python2Parser.RULE_subscriptlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 830;
			this.subscript();
			this.state = 835;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,106,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 831;
					this.match(Python2Parser.T__4);
					this.state = 832;
					this.subscript();
					}
					} 
				}
				this.state = 837;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,106,this._ctx);
			}
			this.state = 839;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__4) {
				{
				this.state = 838;
				this.match(Python2Parser.T__4);
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
	@RuleVersion(0)
	public subscript(): SubscriptContext {
		let _localctx: SubscriptContext = new SubscriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, Python2Parser.RULE_subscript);
		let _la: number;
		try {
			this.state = 855;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,111,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 841;
				this.match(Python2Parser.T__29);
				this.state = 842;
				this.match(Python2Parser.T__29);
				this.state = 843;
				this.match(Python2Parser.T__29);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 844;
				this.test();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 846;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (Python2Parser.T__29 - 30)) | (1 << (Python2Parser.T__44 - 30)) | (1 << (Python2Parser.T__47 - 30)) | (1 << (Python2Parser.T__60 - 30)))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (Python2Parser.T__61 - 62)) | (1 << (Python2Parser.T__65 - 62)) | (1 << (Python2Parser.T__66 - 62)) | (1 << (Python2Parser.NAME - 62)) | (1 << (Python2Parser.NUMBER - 62)) | (1 << (Python2Parser.STRING - 62)) | (1 << (Python2Parser.OPEN_PAREN - 62)) | (1 << (Python2Parser.OPEN_BRACE - 62)) | (1 << (Python2Parser.OPEN_BRACKET - 62)))) !== 0)) {
					{
					this.state = 845;
					this.test();
					}
				}

				this.state = 848;
				this.match(Python2Parser.T__2);
				this.state = 850;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (Python2Parser.T__29 - 30)) | (1 << (Python2Parser.T__44 - 30)) | (1 << (Python2Parser.T__47 - 30)) | (1 << (Python2Parser.T__60 - 30)))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (Python2Parser.T__61 - 62)) | (1 << (Python2Parser.T__65 - 62)) | (1 << (Python2Parser.T__66 - 62)) | (1 << (Python2Parser.NAME - 62)) | (1 << (Python2Parser.NUMBER - 62)) | (1 << (Python2Parser.STRING - 62)) | (1 << (Python2Parser.OPEN_PAREN - 62)) | (1 << (Python2Parser.OPEN_BRACE - 62)) | (1 << (Python2Parser.OPEN_BRACKET - 62)))) !== 0)) {
					{
					this.state = 849;
					this.test();
					}
				}

				this.state = 853;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python2Parser.T__2) {
					{
					this.state = 852;
					this.sliceop();
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
	@RuleVersion(0)
	public sliceop(): SliceopContext {
		let _localctx: SliceopContext = new SliceopContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, Python2Parser.RULE_sliceop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 857;
			this.match(Python2Parser.T__2);
			this.state = 859;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (Python2Parser.T__29 - 30)) | (1 << (Python2Parser.T__44 - 30)) | (1 << (Python2Parser.T__47 - 30)) | (1 << (Python2Parser.T__60 - 30)))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (Python2Parser.T__61 - 62)) | (1 << (Python2Parser.T__65 - 62)) | (1 << (Python2Parser.T__66 - 62)) | (1 << (Python2Parser.NAME - 62)) | (1 << (Python2Parser.NUMBER - 62)) | (1 << (Python2Parser.STRING - 62)) | (1 << (Python2Parser.OPEN_PAREN - 62)) | (1 << (Python2Parser.OPEN_BRACE - 62)) | (1 << (Python2Parser.OPEN_BRACKET - 62)))) !== 0)) {
				{
				this.state = 858;
				this.test();
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
	@RuleVersion(0)
	public exprlist(): ExprlistContext {
		let _localctx: ExprlistContext = new ExprlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, Python2Parser.RULE_exprlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 861;
			this.expr();
			this.state = 866;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,113,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 862;
					this.match(Python2Parser.T__4);
					this.state = 863;
					this.expr();
					}
					} 
				}
				this.state = 868;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,113,this._ctx);
			}
			this.state = 870;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__4) {
				{
				this.state = 869;
				this.match(Python2Parser.T__4);
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
	@RuleVersion(0)
	public testlist(): TestlistContext {
		let _localctx: TestlistContext = new TestlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, Python2Parser.RULE_testlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 872;
			this.test();
			this.state = 877;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,115,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 873;
					this.match(Python2Parser.T__4);
					this.state = 874;
					this.test();
					}
					} 
				}
				this.state = 879;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,115,this._ctx);
			}
			this.state = 881;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__4) {
				{
				this.state = 880;
				this.match(Python2Parser.T__4);
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
	@RuleVersion(0)
	public dictorsetmaker(): DictorsetmakerContext {
		let _localctx: DictorsetmakerContext = new DictorsetmakerContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, Python2Parser.RULE_dictorsetmaker);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 916;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,123,this._ctx) ) {
			case 1:
				{
				{
				this.state = 883;
				this.test();
				this.state = 884;
				this.match(Python2Parser.T__2);
				this.state = 885;
				this.test();
				this.state = 900;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python2Parser.T__39:
					{
					this.state = 886;
					this.comp_for();
					}
					break;
				case Python2Parser.T__4:
				case Python2Parser.CLOSE_BRACE:
					{
					this.state = 894;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,117,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 887;
							this.match(Python2Parser.T__4);
							this.state = 888;
							this.test();
							this.state = 889;
							this.match(Python2Parser.T__2);
							this.state = 890;
							this.test();
							}
							} 
						}
						this.state = 896;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,117,this._ctx);
					}
					this.state = 898;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===Python2Parser.T__4) {
						{
						this.state = 897;
						this.match(Python2Parser.T__4);
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				break;

			case 2:
				{
				{
				this.state = 902;
				this.test();
				this.state = 914;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case Python2Parser.T__39:
					{
					this.state = 903;
					this.comp_for();
					}
					break;
				case Python2Parser.T__4:
				case Python2Parser.CLOSE_BRACE:
					{
					this.state = 908;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,120,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 904;
							this.match(Python2Parser.T__4);
							this.state = 905;
							this.test();
							}
							} 
						}
						this.state = 910;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,120,this._ctx);
					}
					this.state = 912;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===Python2Parser.T__4) {
						{
						this.state = 911;
						this.match(Python2Parser.T__4);
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
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
	@RuleVersion(0)
	public classdef(): ClassdefContext {
		let _localctx: ClassdefContext = new ClassdefContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, Python2Parser.RULE_classdef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 918;
			this.match(Python2Parser.T__67);
			this.state = 919;
			this.match(Python2Parser.NAME);
			this.state = 925;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.OPEN_PAREN) {
				{
				this.state = 920;
				this.match(Python2Parser.OPEN_PAREN);
				this.state = 922;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (Python2Parser.T__29 - 30)) | (1 << (Python2Parser.T__44 - 30)) | (1 << (Python2Parser.T__47 - 30)) | (1 << (Python2Parser.T__60 - 30)))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (Python2Parser.T__61 - 62)) | (1 << (Python2Parser.T__65 - 62)) | (1 << (Python2Parser.T__66 - 62)) | (1 << (Python2Parser.NAME - 62)) | (1 << (Python2Parser.NUMBER - 62)) | (1 << (Python2Parser.STRING - 62)) | (1 << (Python2Parser.OPEN_PAREN - 62)) | (1 << (Python2Parser.OPEN_BRACE - 62)) | (1 << (Python2Parser.OPEN_BRACKET - 62)))) !== 0)) {
					{
					this.state = 921;
					this.testlist();
					}
				}

				this.state = 924;
				this.match(Python2Parser.CLOSE_PAREN);
				}
			}

			this.state = 927;
			this.match(Python2Parser.T__2);
			this.state = 928;
			this.suite();
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
	@RuleVersion(0)
	public arglist(): ArglistContext {
		let _localctx: ArglistContext = new ArglistContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, Python2Parser.RULE_arglist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 935;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,126,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 930;
					this.argument();
					this.state = 931;
					this.match(Python2Parser.T__4);
					}
					} 
				}
				this.state = 937;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,126,this._ctx);
			}
			this.state = 958;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python2Parser.T__29:
			case Python2Parser.T__44:
			case Python2Parser.T__47:
			case Python2Parser.T__60:
			case Python2Parser.T__61:
			case Python2Parser.T__65:
			case Python2Parser.T__66:
			case Python2Parser.NAME:
			case Python2Parser.NUMBER:
			case Python2Parser.STRING:
			case Python2Parser.OPEN_PAREN:
			case Python2Parser.OPEN_BRACE:
			case Python2Parser.OPEN_BRACKET:
				{
				this.state = 938;
				this.argument();
				this.state = 940;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python2Parser.T__4) {
					{
					this.state = 939;
					this.match(Python2Parser.T__4);
					}
				}

				}
				break;
			case Python2Parser.T__5:
				{
				this.state = 942;
				this.match(Python2Parser.T__5);
				this.state = 943;
				this.test();
				this.state = 948;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,128,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 944;
						this.match(Python2Parser.T__4);
						this.state = 945;
						this.argument();
						}
						} 
					}
					this.state = 950;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,128,this._ctx);
				}
				this.state = 954;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python2Parser.T__4) {
					{
					this.state = 951;
					this.match(Python2Parser.T__4);
					this.state = 952;
					this.match(Python2Parser.T__6);
					this.state = 953;
					this.test();
					}
				}

				}
				break;
			case Python2Parser.T__6:
				{
				this.state = 956;
				this.match(Python2Parser.T__6);
				this.state = 957;
				this.test();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	@RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, Python2Parser.RULE_argument);
		let _la: number;
		try {
			this.state = 968;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,132,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 960;
				this.test();
				this.state = 962;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===Python2Parser.T__39) {
					{
					this.state = 961;
					this.comp_for();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 964;
				this.test();
				this.state = 965;
				this.match(Python2Parser.T__3);
				this.state = 966;
				this.test();
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
	@RuleVersion(0)
	public list_iter(): List_iterContext {
		let _localctx: List_iterContext = new List_iterContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, Python2Parser.RULE_list_iter);
		try {
			this.state = 972;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python2Parser.T__39:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 970;
				this.list_for();
				}
				break;
			case Python2Parser.T__35:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 971;
				this.list_if();
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
	@RuleVersion(0)
	public list_for(): List_forContext {
		let _localctx: List_forContext = new List_forContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, Python2Parser.RULE_list_for);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 974;
			this.match(Python2Parser.T__39);
			this.state = 975;
			this.exprlist();
			this.state = 976;
			this.match(Python2Parser.T__33);
			this.state = 977;
			this.testlist_safe();
			this.state = 979;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__35 || _la===Python2Parser.T__39) {
				{
				this.state = 978;
				this.list_iter();
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
	@RuleVersion(0)
	public list_if(): List_ifContext {
		let _localctx: List_ifContext = new List_ifContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, Python2Parser.RULE_list_if);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 981;
			this.match(Python2Parser.T__35);
			this.state = 982;
			this.old_test();
			this.state = 984;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__35 || _la===Python2Parser.T__39) {
				{
				this.state = 983;
				this.list_iter();
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
	@RuleVersion(0)
	public comp_iter(): Comp_iterContext {
		let _localctx: Comp_iterContext = new Comp_iterContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, Python2Parser.RULE_comp_iter);
		try {
			this.state = 988;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Python2Parser.T__39:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 986;
				this.comp_for();
				}
				break;
			case Python2Parser.T__35:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 987;
				this.comp_if();
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
	@RuleVersion(0)
	public comp_for(): Comp_forContext {
		let _localctx: Comp_forContext = new Comp_forContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, Python2Parser.RULE_comp_for);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 990;
			this.match(Python2Parser.T__39);
			this.state = 991;
			this.exprlist();
			this.state = 992;
			this.match(Python2Parser.T__33);
			this.state = 993;
			this.or_test();
			this.state = 995;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__35 || _la===Python2Parser.T__39) {
				{
				this.state = 994;
				this.comp_iter();
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
	@RuleVersion(0)
	public comp_if(): Comp_ifContext {
		let _localctx: Comp_ifContext = new Comp_ifContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, Python2Parser.RULE_comp_if);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 997;
			this.match(Python2Parser.T__35);
			this.state = 998;
			this.old_test();
			this.state = 1000;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__35 || _la===Python2Parser.T__39) {
				{
				this.state = 999;
				this.comp_iter();
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
	@RuleVersion(0)
	public testlist1(): Testlist1Context {
		let _localctx: Testlist1Context = new Testlist1Context(this._ctx, this.state);
		this.enterRule(_localctx, 164, Python2Parser.RULE_testlist1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1002;
			this.test();
			this.state = 1007;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===Python2Parser.T__4) {
				{
				{
				this.state = 1003;
				this.match(Python2Parser.T__4);
				this.state = 1004;
				this.test();
				}
				}
				this.state = 1009;
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
	@RuleVersion(0)
	public encoding_decl(): Encoding_declContext {
		let _localctx: Encoding_declContext = new Encoding_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, Python2Parser.RULE_encoding_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1010;
			this.match(Python2Parser.NAME);
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
	@RuleVersion(0)
	public yield_expr(): Yield_exprContext {
		let _localctx: Yield_exprContext = new Yield_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, Python2Parser.RULE_yield_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1012;
			this.match(Python2Parser.T__68);
			this.state = 1014;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===Python2Parser.T__28) {
				{
				this.state = 1013;
				this.match(Python2Parser.T__28);
				}
			}

			this.state = 1017;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (Python2Parser.T__29 - 30)) | (1 << (Python2Parser.T__44 - 30)) | (1 << (Python2Parser.T__47 - 30)) | (1 << (Python2Parser.T__60 - 30)))) !== 0) || ((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (Python2Parser.T__61 - 62)) | (1 << (Python2Parser.T__65 - 62)) | (1 << (Python2Parser.T__66 - 62)) | (1 << (Python2Parser.NAME - 62)) | (1 << (Python2Parser.NUMBER - 62)) | (1 << (Python2Parser.STRING - 62)) | (1 << (Python2Parser.OPEN_PAREN - 62)) | (1 << (Python2Parser.OPEN_BRACE - 62)) | (1 << (Python2Parser.OPEN_BRACKET - 62)))) !== 0)) {
				{
				this.state = 1016;
				this.testlist();
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 16:
			return this.print_stmt_sempred(_localctx as Print_stmtContext, predIndex);
		}
		return true;
	}
	private print_stmt_sempred(_localctx: Print_stmtContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this._input.LT(1).text==='print';
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03X\u03FE\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04"+
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04"+
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#"+
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+"+
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044"+
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04"+
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04"+
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x03\x02\x03"+
		"\x02\x03\x02\x03\x02\x03\x02\x05\x02\xB2\n\x02\x03\x03\x03\x03\x07\x03"+
		"\xB6\n\x03\f\x03\x0E\x03\xB9\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x07"+
		"\x04\xBF\n\x04\f\x04\x0E\x04\xC2\v\x04\x03\x04\x03\x04\x03\x05\x03\x05"+
		"\x03\x05\x03\x05\x05\x05\xCA\n\x05\x03\x05\x05\x05\xCD\n\x05\x03\x05\x03"+
		"\x05\x03\x06\x06\x06\xD2\n\x06\r\x06\x0E\x06\xD3\x03\x07\x03\x07\x03\x07"+
		"\x05\x07\xD9\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x05"+
		"\t\xE3\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x05\n\xEA\n\n\x03\n\x03\n\x07"+
		"\n\xEE\n\n\f\n\x0E\n\xF1\v\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xF8\n"+
		"\n\x03\n\x03\n\x05\n\xFC\n\n\x03\n\x03\n\x03\n\x05\n\u0101\n\n\x03\n\x03"+
		"\n\x03\n\x03\n\x05\n\u0107\n\n\x07\n\u0109\n\n\f\n\x0E\n\u010C\v\n\x03"+
		"\n\x05\n\u010F\n\n\x05\n\u0111\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v"+
		"\u0118\n\v\x03\f\x03\f\x03\f\x07\f\u011D\n\f\f\f\x0E\f\u0120\v\f\x03\f"+
		"\x05\f\u0123\n\f\x03\r\x03\r\x05\r\u0127\n\r\x03\x0E\x03\x0E\x03\x0E\x07"+
		"\x0E\u012C\n\x0E\f\x0E\x0E\x0E\u012F\v\x0E\x03\x0E\x05\x0E\u0132\n\x0E"+
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F"+
		"\x03\x0F\x03\x0F\x05\x0F\u013F\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x05"+
		"\x10\u0145\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\u014A\n\x10\x07\x10\u014C"+
		"\n\x10\f\x10\x0E\x10\u014F\v\x10\x05\x10\u0151\n\x10\x03\x11\x03\x11\x03"+
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u015A\n\x12\f\x12\x0E\x12"+
		"\u015D\v\x12\x03\x12\x05\x12\u0160\n\x12\x05\x12\u0162\n\x12\x03\x12\x03"+
		"\x12\x03\x12\x03\x12\x06\x12\u0168\n\x12\r\x12\x0E\x12\u0169\x03\x12\x05"+
		"\x12\u016D\n\x12\x05\x12\u016F\n\x12\x05\x12\u0171\n\x12\x03\x13\x03\x13"+
		"\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15"+
		"\u017D\n\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x05\x18\u0185"+
		"\n\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A"+
		"\x05\x1A\u018F\n\x1A\x05\x1A\u0191\n\x1A\x05\x1A\u0193\n\x1A\x03\x1B\x03"+
		"\x1B\x05\x1B\u0197\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x07\x1D"+
		"\u019E\n\x1D\f\x1D\x0E\x1D\u01A1\v\x1D\x03\x1D\x03\x1D\x06\x1D\u01A5\n"+
		"\x1D\r\x1D\x0E\x1D\u01A6\x05\x1D\u01A9\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03"+
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01B2\n\x1D\x03\x1E\x03\x1E\x03\x1E"+
		"\x05\x1E\u01B7\n\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01BC\n\x1F\x03 "+
		"\x03 \x03 \x07 \u01C1\n \f \x0E \u01C4\v \x03 \x05 \u01C7\n \x03!\x03"+
		"!\x03!\x07!\u01CC\n!\f!\x0E!\u01CF\v!\x03\"\x03\"\x03\"\x07\"\u01D4\n"+
		"\"\f\"\x0E\"\u01D7\v\"\x03#\x03#\x03#\x03#\x07#\u01DD\n#\f#\x0E#\u01E0"+
		"\v#\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u01E8\n$\x05$\u01EA\n$\x03%\x03"+
		"%\x03%\x03%\x05%\u01F0\n%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05"+
		"&\u01FA\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'"+
		"\u0205\n\'\f\'\x0E\'\u0208\v\'\x03\'\x03\'\x03\'\x05\'\u020D\n\'\x03("+
		"\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u0216\n(\x03)\x03)\x03)\x03)\x03)"+
		"\x03)\x03)\x03)\x03)\x05)\u0221\n)\x03*\x03*\x03*\x03*\x03*\x03*\x03*"+
		"\x06*\u022A\n*\r*\x0E*\u022B\x03*\x03*\x03*\x05*\u0231\n*\x03*\x03*\x03"+
		"*\x05*\u0236\n*\x03*\x03*\x03*\x05*\u023B\n*\x03+\x03+\x03+\x03+\x07+"+
		"\u0241\n+\f+\x0E+\u0244\v+\x03+\x03+\x03+\x03,\x03,\x03,\x05,\u024C\n"+
		",\x03-\x03-\x03-\x03-\x05-\u0252\n-\x05-\u0254\n-\x03.\x03.\x03.\x03."+
		"\x06.\u025A\n.\r.\x0E.\u025B\x03.\x03.\x05.\u0260\n.\x03/\x03/\x03/\x06"+
		"/\u0265\n/\r/\x0E/\u0266\x03/\x05/\u026A\n/\x05/\u026C\n/\x030\x030\x05"+
		"0\u0270\n0\x031\x031\x051\u0274\n1\x031\x031\x031\x032\x032\x032\x032"+
		"\x032\x032\x052\u027F\n2\x032\x052\u0282\n2\x033\x033\x033\x073\u0287"+
		"\n3\f3\x0E3\u028A\v3\x034\x034\x034\x074\u028F\n4\f4\x0E4\u0292\v4\x03"+
		"5\x035\x035\x055\u0297\n5\x036\x036\x036\x036\x076\u029D\n6\f6\x0E6\u02A0"+
		"\v6\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x037\x05"+
		"7\u02AF\n7\x038\x038\x038\x078\u02B4\n8\f8\x0E8\u02B7\v8\x039\x039\x03"+
		"9\x079\u02BC\n9\f9\x0E9\u02BF\v9\x03:\x03:\x03:\x07:\u02C4\n:\f:\x0E:"+
		"\u02C7\v:\x03;\x03;\x03;\x07;\u02CC\n;\f;\x0E;\u02CF\v;\x03<\x03<\x03"+
		"<\x07<\u02D4\n<\f<\x0E<\u02D7\v<\x03=\x03=\x03=\x07=\u02DC\n=\f=\x0E="+
		"\u02DF\v=\x03>\x03>\x03>\x05>\u02E4\n>\x03?\x03?\x07?\u02E8\n?\f?\x0E"+
		"?\u02EB\v?\x03?\x03?\x05?\u02EF\n?\x03@\x03@\x03@\x05@\u02F4\n@\x03@\x03"+
		"@\x03@\x05@\u02F9\n@\x03@\x03@\x03@\x05@\u02FE\n@\x03@\x03@\x03@\x03@"+
		"\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x06@\u030B\n@\r@\x0E@\u030C\x05@\u030F"+
		"\n@\x03A\x03A\x03A\x03A\x07A\u0315\nA\fA\x0EA\u0318\vA\x03A\x05A\u031B"+
		"\nA\x05A\u031D\nA\x03B\x03B\x03B\x03B\x07B\u0323\nB\fB\x0EB\u0326\vB\x03"+
		"B\x05B\u0329\nB\x05B\u032B\nB\x03C\x03C\x05C\u032F\nC\x03C\x03C\x03C\x03"+
		"D\x03D\x05D\u0336\nD\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u033F\nD"+
		"\x03E\x03E\x03E\x07E\u0344\nE\fE\x0EE\u0347\vE\x03E\x05E\u034A\nE\x03"+
		"F\x03F\x03F\x03F\x03F\x05F\u0351\nF\x03F\x03F\x05F\u0355\nF\x03F\x05F"+
		"\u0358\nF\x05F\u035A\nF\x03G\x03G\x05G\u035E\nG\x03H\x03H\x03H\x07H\u0363"+
		"\nH\fH\x0EH\u0366\vH\x03H\x05H\u0369\nH\x03I\x03I\x03I\x07I\u036E\nI\f"+
		"I\x0EI\u0371\vI\x03I\x05I\u0374\nI\x03J\x03J\x03J\x03J\x03J\x03J\x03J"+
		"\x03J\x03J\x07J\u037F\nJ\fJ\x0EJ\u0382\vJ\x03J\x05J\u0385\nJ\x05J\u0387"+
		"\nJ\x03J\x03J\x03J\x03J\x07J\u038D\nJ\fJ\x0EJ\u0390\vJ\x03J\x05J\u0393"+
		"\nJ\x05J\u0395\nJ\x05J\u0397\nJ\x03K\x03K\x03K\x03K\x05K\u039D\nK\x03"+
		"K\x05K\u03A0\nK\x03K\x03K\x03K\x03L\x03L\x03L\x07L\u03A8\nL\fL\x0EL\u03AB"+
		"\vL\x03L\x03L\x05L\u03AF\nL\x03L\x03L\x03L\x03L\x07L\u03B5\nL\fL\x0EL"+
		"\u03B8\vL\x03L\x03L\x03L\x05L\u03BD\nL\x03L\x03L\x05L\u03C1\nL\x03M\x03"+
		"M\x05M\u03C5\nM\x03M\x03M\x03M\x03M\x05M\u03CB\nM\x03N\x03N\x05N\u03CF"+
		"\nN\x03O\x03O\x03O\x03O\x03O\x05O\u03D6\nO\x03P\x03P\x03P\x05P\u03DB\n"+
		"P\x03Q\x03Q\x05Q\u03DF\nQ\x03R\x03R\x03R\x03R\x03R\x05R\u03E6\nR\x03S"+
		"\x03S\x03S\x05S\u03EB\nS\x03T\x03T\x03T\x07T\u03F0\nT\fT\x0ET\u03F3\v"+
		"T\x03U\x03U\x03V\x03V\x05V\u03F9\nV\x03V\x05V\u03FC\nV\x03V\x02\x02\x02"+
		"W\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14"+
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02"+
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02"+
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02"+
		"b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02"+
		"~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02"+
		"\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02"+
		"\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\x02\b\x03\x02\v\x16\x04\x02\x07"+
		"\x07!!\x04\x02\x17\x17>>\x03\x02?@\x04\x02\b\bAC\x04\x02?@DD\u045B\x02"+
		"\xB1\x03\x02\x02\x02\x04\xB7\x03\x02\x02\x02\x06\xBC\x03\x02\x02\x02\b"+
		"\xC5\x03\x02\x02\x02\n\xD1\x03\x02\x02\x02\f\xD5\x03\x02\x02\x02\x0E\xDA"+
		"\x03\x02\x02\x02\x10\xE0\x03\x02\x02\x02\x12\u0110\x03\x02\x02\x02\x14"+
		"\u0117\x03\x02\x02\x02\x16\u0119\x03\x02\x02\x02\x18\u0126\x03\x02\x02"+
		"\x02\x1A\u0128\x03\x02\x02\x02\x1C\u013E\x03\x02\x02\x02\x1E\u0140\x03"+
		"\x02\x02\x02 \u0152\x03\x02\x02\x02\"\u0154\x03\x02\x02\x02$\u0172\x03"+
		"\x02\x02\x02&\u0175\x03\x02\x02\x02(\u017C\x03\x02\x02\x02*\u017E\x03"+
		"\x02\x02\x02,\u0180\x03\x02\x02\x02.\u0182\x03\x02\x02\x020\u0186\x03"+
		"\x02\x02\x022\u0188\x03\x02\x02\x024\u0196\x03\x02\x02\x026\u0198\x03"+
		"\x02\x02\x028\u019B\x03\x02\x02\x02:\u01B3\x03\x02\x02\x02<\u01B8\x03"+
		"\x02\x02\x02>\u01BD\x03\x02\x02\x02@\u01C8\x03\x02\x02\x02B\u01D0\x03"+
		"\x02\x02\x02D\u01D8\x03\x02\x02\x02F\u01E1\x03\x02\x02\x02H\u01EB\x03"+
		"\x02\x02\x02J\u01F9\x03\x02\x02\x02L\u01FB\x03\x02\x02\x02N\u020E\x03"+
		"\x02\x02\x02P\u0217\x03\x02\x02\x02R\u0222\x03\x02\x02\x02T\u023C\x03"+
		"\x02\x02\x02V\u0248\x03\x02\x02\x02X\u024D\x03\x02\x02\x02Z\u025F\x03"+
		"\x02\x02\x02\\\u0261\x03\x02\x02\x02^\u026F\x03\x02\x02\x02`\u0271\x03"+
		"\x02\x02\x02b\u0281\x03\x02\x02\x02d\u0283\x03\x02\x02\x02f\u028B\x03"+
		"\x02\x02\x02h\u0296\x03\x02\x02\x02j\u0298\x03\x02\x02\x02l\u02AE\x03"+
		"\x02\x02\x02n\u02B0\x03\x02\x02\x02p\u02B8\x03\x02\x02\x02r\u02C0\x03"+
		"\x02\x02\x02t\u02C8\x03\x02\x02\x02v\u02D0\x03\x02\x02\x02x\u02D8\x03"+
		"\x02\x02\x02z\u02E3\x03\x02\x02\x02|\u02E5\x03\x02\x02\x02~\u030E\x03"+
		"\x02\x02\x02\x80\u0310\x03\x02\x02\x02\x82\u031E\x03\x02\x02\x02\x84\u032C"+
		"\x03\x02\x02\x02\x86\u033E\x03\x02\x02\x02\x88\u0340\x03\x02\x02\x02\x8A"+
		"\u0359\x03\x02\x02\x02\x8C\u035B\x03\x02\x02\x02\x8E\u035F\x03\x02\x02"+
		"\x02\x90\u036A\x03\x02\x02\x02\x92\u0396\x03\x02\x02\x02\x94\u0398\x03"+
		"\x02\x02\x02\x96\u03A9\x03\x02\x02\x02\x98\u03CA\x03\x02\x02\x02\x9A\u03CE"+
		"\x03\x02\x02\x02\x9C\u03D0\x03\x02\x02\x02\x9E\u03D7\x03\x02\x02\x02\xA0"+
		"\u03DE\x03\x02\x02\x02\xA2\u03E0\x03\x02\x02\x02\xA4\u03E7\x03\x02\x02"+
		"\x02\xA6\u03EC\x03\x02\x02\x02\xA8\u03F4\x03\x02\x02\x02\xAA\u03F6\x03"+
		"\x02\x02\x02\xAC\xB2\x07W\x02\x02\xAD\xB2\x05\x1A\x0E\x02\xAE\xAF\x05"+
		"J&\x02\xAF\xB0\x07W\x02\x02\xB0\xB2\x03\x02\x02\x02\xB1\xAC\x03\x02\x02"+
		"\x02\xB1\xAD\x03\x02\x02\x02\xB1\xAE\x03\x02\x02\x02\xB2\x03\x03\x02\x02"+
		"\x02\xB3\xB6\x07W\x02\x02\xB4\xB6\x05\x18\r\x02\xB5\xB3\x03\x02\x02\x02"+
		"\xB5\xB4\x03\x02\x02\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02"+
		"\xB7\xB8\x03\x02\x02\x02\xB8\xBA\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02"+
		"\xBA\xBB\x07X\x02\x02\xBB\x05\x03\x02\x02\x02\xBC\xC0\x05\x90I\x02\xBD"+
		"\xBF\x07W\x02\x02\xBE\xBD\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0"+
		"\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC3\x03\x02\x02\x02\xC2"+
		"\xC0\x03\x02\x02\x02\xC3\xC4\x07X\x02\x02\xC4\x07\x03\x02\x02\x02\xC5"+
		"\xC6\x07\x03\x02\x02\xC6\xCC\x05B\"\x02\xC7\xC9\x07N\x02\x02\xC8\xCA\x05"+
		"\x96L\x02\xC9\xC8\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCB\x03"+
		"\x02\x02\x02\xCB\xCD\x07O\x02\x02\xCC\xC7\x03\x02\x02\x02\xCC\xCD\x03"+
		"\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCF\x07W\x02\x02\xCF\t\x03\x02"+
		"\x02\x02\xD0\xD2\x05\b\x05\x02\xD1\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02"+
		"\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\v\x03\x02"+
		"\x02\x02\xD5\xD8\x05\n\x06\x02\xD6\xD9\x05\x94K\x02\xD7\xD9\x05\x0E\b"+
		"\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD7\x03\x02\x02\x02\xD9\r\x03\x02\x02"+
		"\x02\xDA\xDB\x07\x04\x02\x02\xDB\xDC\x07H\x02\x02\xDC\xDD\x05\x10\t\x02"+
		"\xDD\xDE\x07\x05\x02\x02\xDE\xDF\x05Z.\x02\xDF\x0F\x03\x02\x02\x02\xE0"+
		"\xE2\x07N\x02\x02\xE1\xE3\x05\x12\n\x02\xE2\xE1\x03\x02\x02\x02\xE2\xE3"+
		"\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE5\x07O\x02\x02\xE5\x11"+
		"\x03\x02\x02\x02\xE6\xE9\x05\x14\v\x02\xE7\xE8\x07\x06\x02\x02\xE8\xEA"+
		"\x05b2\x02\xE9\xE7\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEB\x03"+
		"\x02\x02\x02\xEB\xEC\x07\x07\x02\x02\xEC\xEE\x03\x02\x02\x02\xED\xE6\x03"+
		"\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03"+
		"\x02\x02\x02\xF0\xFB\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF2\xF3\x07"+
		"\b\x02\x02\xF3\xF7\x07H\x02\x02\xF4\xF5\x07\x07\x02\x02\xF5\xF6\x07\t"+
		"\x02\x02\xF6\xF8\x07H\x02\x02\xF7\xF4\x03\x02\x02\x02\xF7\xF8\x03\x02"+
		"\x02\x02\xF8\xFC\x03\x02\x02\x02\xF9\xFA\x07\t\x02\x02\xFA\xFC\x07H\x02"+
		"\x02\xFB\xF2\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFC\u0111\x03\x02"+
		"\x02\x02\xFD\u0100\x05\x14\v\x02\xFE\xFF\x07\x06\x02\x02\xFF\u0101\x05"+
		"b2\x02\u0100\xFE\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u010A"+
		"\x03\x02\x02\x02\u0102\u0103\x07\x07\x02\x02\u0103\u0106\x05\x14\v\x02"+
		"\u0104\u0105\x07\x06\x02\x02\u0105\u0107\x05b2\x02\u0106\u0104\x03\x02"+
		"\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0109\x03\x02\x02\x02\u0108"+
		"\u0102\x03\x02\x02\x02\u0109\u010C\x03\x02\x02\x02\u010A\u0108\x03\x02"+
		"\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010E\x03\x02\x02\x02\u010C"+
		"\u010A\x03\x02\x02\x02\u010D\u010F\x07\x07\x02\x02\u010E\u010D\x03\x02"+
		"\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0111\x03\x02\x02\x02\u0110"+
		"\xEF\x03\x02\x02\x02\u0110\xFD\x03\x02\x02\x02\u0111\x13\x03\x02\x02\x02"+
		"\u0112\u0118\x07H\x02\x02\u0113\u0114\x07N\x02\x02\u0114\u0115\x05\x16"+
		"\f\x02\u0115\u0116\x07O\x02\x02\u0116\u0118\x03\x02\x02\x02\u0117\u0112"+
		"\x03\x02\x02\x02\u0117\u0113\x03\x02\x02\x02\u0118\x15\x03\x02\x02\x02"+
		"\u0119\u011E\x05\x14\v\x02\u011A\u011B\x07\x07\x02\x02\u011B\u011D\x05"+
		"\x14\v\x02\u011C\u011A\x03\x02\x02\x02\u011D\u0120\x03\x02\x02\x02\u011E"+
		"\u011C\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0122\x03\x02"+
		"\x02\x02\u0120\u011E\x03\x02\x02\x02\u0121\u0123\x07\x07\x02\x02\u0122"+
		"\u0121\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\x17\x03\x02\x02"+
		"\x02\u0124\u0127\x05\x1A\x0E\x02\u0125\u0127\x05J&\x02\u0126\u0124\x03"+
		"\x02\x02\x02\u0126\u0125\x03\x02\x02\x02\u0127\x19\x03\x02\x02\x02\u0128"+
		"\u012D\x05\x1C\x0F\x02\u0129\u012A\x07\n\x02\x02\u012A\u012C\x05\x1C\x0F"+
		"\x02\u012B\u0129\x03\x02\x02\x02\u012C\u012F\x03\x02\x02\x02\u012D\u012B"+
		"\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u0131\x03\x02\x02\x02"+
		"\u012F\u012D\x03\x02\x02\x02\u0130\u0132\x07\n\x02\x02\u0131\u0130\x03"+
		"\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133"+
		"\u0134\x07W\x02\x02\u0134\x1B\x03\x02\x02\x02\u0135\u013F\x05\x1E\x10"+
		"\x02\u0136\u013F\x05\"\x12\x02\u0137\u013F\x05$\x13\x02\u0138\u013F\x05"+
		"&\x14\x02\u0139\u013F\x05(\x15\x02\u013A\u013F\x054\x1B\x02\u013B\u013F"+
		"\x05D#\x02\u013C\u013F\x05F$\x02\u013D\u013F\x05H%\x02\u013E\u0135\x03"+
		"\x02\x02\x02\u013E\u0136\x03\x02\x02\x02\u013E\u0137\x03\x02\x02\x02\u013E"+
		"\u0138\x03\x02\x02\x02\u013E\u0139\x03\x02\x02\x02\u013E\u013A\x03\x02"+
		"\x02\x02\u013E\u013B\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013E"+
		"\u013D\x03\x02\x02\x02\u013F\x1D\x03\x02\x02\x02\u0140\u0150\x05\x90I"+
		"\x02\u0141\u0144\x05 \x11\x02\u0142\u0145\x05\xAAV\x02\u0143\u0145\x05"+
		"\x90I\x02\u0144\u0142\x03\x02\x02\x02\u0144\u0143\x03\x02\x02\x02\u0145"+
		"\u0151\x03\x02\x02\x02\u0146\u0149\x07\x06\x02\x02\u0147\u014A\x05\xAA"+
		"V\x02\u0148\u014A\x05\x90I\x02\u0149\u0147\x03\x02\x02\x02\u0149\u0148"+
		"\x03\x02\x02\x02\u014A\u014C\x03\x02\x02\x02\u014B\u0146\x03\x02\x02\x02"+
		"\u014C\u014F\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02\u014D\u014E\x03"+
		"\x02\x02\x02\u014E\u0151\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u0150"+
		"\u0141\x03\x02\x02\x02\u0150\u014D\x03\x02\x02\x02\u0151\x1F\x03\x02\x02"+
		"\x02\u0152\u0153\t\x02\x02\x02\u0153!\x03\x02\x02\x02\u0154\u0155\x06"+
		"\x12\x02\x02\u0155\u0170\x07H\x02\x02\u0156\u015B\x05b2\x02\u0157\u0158"+
		"\x07\x07\x02\x02\u0158\u015A\x05b2\x02\u0159\u0157\x03\x02\x02\x02\u015A"+
		"\u015D\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B\u015C\x03\x02"+
		"\x02\x02\u015C\u015F\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015E"+
		"\u0160\x07\x07\x02\x02\u015F\u015E\x03\x02\x02\x02\u015F\u0160\x03\x02"+
		"\x02\x02\u0160\u0162\x03\x02\x02\x02\u0161\u0156\x03\x02\x02\x02\u0161"+
		"\u0162\x03\x02\x02\x02\u0162\u0171\x03\x02\x02\x02\u0163\u0164\x07\x17"+
		"\x02\x02\u0164\u016E\x05b2\x02\u0165\u0166\x07\x07\x02\x02\u0166\u0168"+
		"\x05b2\x02\u0167\u0165\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169"+
		"\u0167\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016C\x03\x02"+
		"\x02\x02\u016B\u016D\x07\x07\x02\x02\u016C\u016B\x03\x02\x02\x02\u016C"+
		"\u016D\x03\x02\x02\x02\u016D\u016F\x03\x02\x02\x02\u016E\u0167\x03\x02"+
		"\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0171\x03\x02\x02\x02\u0170"+
		"\u0161\x03\x02\x02\x02\u0170\u0163\x03\x02\x02\x02\u0171#\x03\x02\x02"+
		"\x02\u0172\u0173\x07\x18\x02\x02\u0173\u0174\x05\x8EH\x02\u0174%\x03\x02"+
		"\x02\x02\u0175\u0176\x07\x19\x02\x02\u0176\'\x03\x02\x02\x02\u0177\u017D"+
		"\x05*\x16\x02\u0178\u017D\x05,\x17\x02\u0179\u017D\x05.\x18\x02\u017A"+
		"\u017D\x052\x1A\x02\u017B\u017D\x050\x19\x02\u017C\u0177\x03\x02\x02\x02"+
		"\u017C\u0178\x03\x02\x02\x02\u017C\u0179\x03\x02\x02\x02\u017C\u017A\x03"+
		"\x02\x02\x02\u017C\u017B\x03\x02\x02\x02\u017D)\x03\x02\x02\x02\u017E"+
		"\u017F\x07\x1A\x02\x02\u017F+\x03\x02\x02\x02\u0180\u0181\x07\x1B\x02"+
		"\x02\u0181-\x03\x02\x02\x02\u0182\u0184\x07\x1C\x02\x02\u0183\u0185\x05"+
		"\x90I\x02\u0184\u0183\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185"+
		"/\x03\x02\x02\x02\u0186\u0187\x05\xAAV\x02\u01871\x03\x02\x02\x02\u0188"+
		"\u0192\x07\x1D\x02\x02\u0189\u0190\x05b2\x02\u018A\u018B\x07\x07\x02\x02"+
		"\u018B\u018E\x05b2\x02\u018C\u018D\x07\x07\x02\x02\u018D\u018F\x05b2\x02"+
		"\u018E\u018C\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0191\x03"+
		"\x02\x02\x02\u0190\u018A\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191"+
		"\u0193\x03\x02\x02\x02\u0192\u0189\x03\x02\x02\x02\u0192\u0193\x03\x02"+
		"\x02\x02\u01933\x03\x02\x02\x02\u0194\u0197\x056\x1C\x02\u0195\u0197\x05"+
		"8\x1D\x02\u0196\u0194\x03\x02\x02\x02\u0196\u0195\x03\x02\x02\x02\u0197"+
		"5\x03\x02\x02\x02\u0198\u0199\x07\x1E\x02\x02\u0199\u019A\x05@!\x02\u019A"+
		"7\x03\x02\x02\x02\u019B\u01A8\x07\x1F\x02\x02\u019C\u019E\x07 \x02\x02"+
		"\u019D\u019C\x03\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F\u019D\x03"+
		"\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A2\x03\x02\x02\x02\u01A1"+
		"\u019F\x03\x02\x02\x02\u01A2\u01A9\x05B\"\x02\u01A3\u01A5\x07 \x02\x02"+
		"\u01A4\u01A3\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A4\x03"+
		"\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A9\x03\x02\x02\x02\u01A8"+
		"\u019F\x03\x02\x02\x02\u01A8\u01A4\x03\x02\x02\x02\u01A9\u01AA\x03\x02"+
		"\x02\x02\u01AA\u01B1\x07\x1E\x02\x02\u01AB\u01B2\x07\b\x02\x02\u01AC\u01AD"+
		"\x07N\x02\x02\u01AD\u01AE\x05> \x02\u01AE\u01AF\x07O\x02\x02\u01AF\u01B2"+
		"\x03\x02\x02\x02\u01B0\u01B2\x05> \x02\u01B1\u01AB\x03\x02\x02\x02\u01B1"+
		"\u01AC\x03\x02\x02\x02\u01B1\u01B0\x03\x02\x02\x02\u01B29\x03\x02\x02"+
		"\x02\u01B3\u01B6\x07H\x02\x02\u01B4\u01B5\x07!\x02\x02\u01B5\u01B7\x07"+
		"H\x02\x02\u01B6\u01B4\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7"+
		";\x03\x02\x02\x02\u01B8\u01BB\x05B\"\x02\u01B9\u01BA\x07!\x02\x02\u01BA"+
		"\u01BC\x07H\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02"+
		"\x02\u01BC=\x03\x02\x02\x02\u01BD\u01C2\x05:\x1E\x02\u01BE\u01BF\x07\x07"+
		"\x02\x02\u01BF\u01C1\x05:\x1E\x02\u01C0\u01BE\x03\x02\x02\x02\u01C1\u01C4"+
		"\x03\x02\x02\x02\u01C2\u01C0\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02"+
		"\u01C3\u01C6\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u01C4\u01C2\x03\x02\x02\x02\u01C5\u01C7\x07\x07\x02\x02\u01C6\u01C5\x03"+
		"\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7?\x03\x02\x02\x02\u01C8"+
		"\u01CD\x05<\x1F\x02\u01C9\u01CA\x07\x07\x02\x02\u01CA\u01CC\x05<\x1F\x02"+
		"\u01CB\u01C9\x03\x02\x02\x02\u01CC\u01CF\x03\x02\x02\x02\u01CD\u01CB\x03"+
		"\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CEA\x03\x02\x02\x02\u01CF"+
		"\u01CD\x03\x02\x02\x02\u01D0\u01D5\x07H\x02\x02\u01D1\u01D2\x07 \x02\x02"+
		"\u01D2\u01D4\x07H\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D4\u01D7\x03"+
		"\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6"+
		"C\x03\x02\x02\x02\u01D7\u01D5\x03\x02\x02\x02\u01D8\u01D9\x07\"\x02\x02"+
		"\u01D9\u01DE\x07H\x02\x02\u01DA\u01DB\x07\x07\x02\x02\u01DB\u01DD\x07"+
		"H\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD\u01E0\x03\x02\x02\x02\u01DE"+
		"\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DFE\x03\x02\x02"+
		"\x02\u01E0\u01DE\x03\x02\x02\x02\u01E1\u01E2\x07#\x02\x02\u01E2\u01E9"+
		"\x05n8\x02\u01E3\u01E4\x07$\x02\x02\u01E4\u01E7\x05b2\x02\u01E5\u01E6"+
		"\x07\x07\x02\x02\u01E6\u01E8\x05b2\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7"+
		"\u01E8\x03\x02\x02\x02\u01E8\u01EA\x03\x02\x02\x02\u01E9\u01E3\x03\x02"+
		"\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EAG\x03\x02\x02\x02\u01EB\u01EC"+
		"\x07%\x02\x02\u01EC\u01EF\x05b2\x02\u01ED\u01EE\x07\x07\x02\x02\u01EE"+
		"\u01F0\x05b2\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02"+
		"\u01F0I\x03\x02\x02\x02\u01F1\u01FA\x05L\'\x02\u01F2\u01FA\x05N(\x02\u01F3"+
		"\u01FA\x05P)\x02\u01F4\u01FA\x05R*\x02\u01F5\u01FA\x05T+\x02\u01F6\u01FA"+
		"\x05\x0E\b\x02\u01F7\u01FA\x05\x94K\x02\u01F8\u01FA\x05\f\x07\x02\u01F9"+
		"\u01F1\x03\x02\x02\x02\u01F9\u01F2\x03\x02\x02\x02\u01F9\u01F3\x03\x02"+
		"\x02\x02\u01F9\u01F4\x03\x02\x02\x02\u01F9\u01F5\x03\x02\x02\x02\u01F9"+
		"\u01F6\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01F8\x03\x02"+
		"\x02\x02\u01FAK\x03\x02\x02\x02\u01FB\u01FC\x07&\x02\x02\u01FC\u01FD\x05"+
		"b2\x02\u01FD\u01FE\x07\x05\x02\x02\u01FE\u0206\x05Z.\x02\u01FF\u0200\x07"+
		"\'\x02\x02\u0200\u0201\x05b2\x02\u0201\u0202\x07\x05\x02\x02\u0202\u0203"+
		"\x05Z.\x02\u0203\u0205\x03\x02\x02\x02\u0204\u01FF\x03\x02\x02\x02\u0205"+
		"\u0208\x03\x02\x02\x02\u0206\u0204\x03\x02\x02\x02\u0206\u0207\x03\x02"+
		"\x02\x02\u0207\u020C\x03\x02\x02\x02\u0208\u0206\x03\x02\x02\x02\u0209"+
		"\u020A\x07(\x02\x02\u020A\u020B\x07\x05\x02\x02\u020B\u020D\x05Z.\x02"+
		"\u020C\u0209\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020DM\x03\x02"+
		"\x02\x02\u020E\u020F\x07)\x02\x02\u020F\u0210\x05b2\x02\u0210\u0211\x07"+
		"\x05\x02\x02\u0211\u0215\x05Z.\x02\u0212\u0213\x07(\x02\x02\u0213\u0214"+
		"\x07\x05\x02\x02\u0214\u0216\x05Z.\x02\u0215\u0212\x03\x02\x02\x02\u0215"+
		"\u0216\x03\x02\x02\x02\u0216O\x03\x02\x02\x02\u0217\u0218\x07*\x02\x02"+
		"\u0218\u0219\x05\x8EH\x02\u0219\u021A\x07$\x02\x02\u021A\u021B\x05\x90"+
		"I\x02\u021B\u021C\x07\x05\x02\x02\u021C\u0220\x05Z.\x02\u021D\u021E\x07"+
		"(\x02\x02\u021E\u021F\x07\x05\x02\x02\u021F\u0221\x05Z.\x02\u0220\u021D"+
		"\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221Q\x03\x02\x02\x02\u0222"+
		"\u0223\x07+\x02\x02\u0223\u0224\x07\x05\x02\x02\u0224\u023A\x05Z.\x02"+
		"\u0225\u0226\x05X-\x02\u0226\u0227\x07\x05\x02\x02\u0227\u0228\x05Z.\x02"+
		"\u0228\u022A\x03\x02\x02\x02\u0229\u0225\x03\x02\x02\x02\u022A\u022B\x03"+
		"\x02\x02\x02\u022B\u0229\x03\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C"+
		"\u0230\x03\x02\x02\x02\u022D\u022E\x07(\x02\x02\u022E\u022F\x07\x05\x02"+
		"\x02\u022F\u0231\x05Z.\x02\u0230\u022D\x03\x02\x02\x02\u0230\u0231\x03"+
		"\x02\x02\x02\u0231\u0235\x03\x02\x02\x02\u0232\u0233\x07,\x02\x02\u0233"+
		"\u0234\x07\x05\x02\x02\u0234\u0236\x05Z.\x02\u0235\u0232\x03\x02\x02\x02"+
		"\u0235\u0236\x03\x02\x02\x02\u0236\u023B\x03\x02\x02\x02\u0237\u0238\x07"+
		",\x02\x02\u0238\u0239\x07\x05\x02\x02\u0239\u023B\x05Z.\x02\u023A\u0229"+
		"\x03\x02\x02\x02\u023A\u0237\x03\x02\x02\x02\u023BS\x03\x02\x02\x02\u023C"+
		"\u023D\x07-\x02\x02\u023D\u0242\x05V,\x02\u023E\u023F\x07\x07\x02\x02"+
		"\u023F\u0241\x05V,\x02\u0240\u023E\x03\x02\x02\x02\u0241\u0244\x03\x02"+
		"\x02\x02\u0242\u0240\x03\x02\x02\x02\u0242\u0243\x03\x02\x02\x02\u0243"+
		"\u0245\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0245\u0246\x07\x05"+
		"\x02\x02\u0246\u0247\x05Z.\x02\u0247U\x03\x02\x02\x02\u0248\u024B\x05"+
		"b2\x02\u0249\u024A\x07!\x02\x02\u024A\u024C\x05n8\x02\u024B\u0249\x03"+
		"\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024CW\x03\x02\x02\x02\u024D"+
		"\u0253\x07.\x02\x02\u024E\u0251\x05b2\x02\u024F\u0250\t\x03\x02\x02\u0250"+
		"\u0252\x05b2\x02\u0251\u024F\x03\x02\x02\x02\u0251\u0252\x03\x02\x02\x02"+
		"\u0252\u0254\x03\x02\x02\x02\u0253\u024E\x03\x02\x02\x02\u0253\u0254\x03"+
		"\x02\x02\x02\u0254Y\x03\x02\x02\x02\u0255\u0260\x05\x1A\x0E\x02\u0256"+
		"\u0257\x07W\x02\x02\u0257\u0259\x07U\x02\x02\u0258\u025A\x05\x18\r\x02"+
		"\u0259\u0258\x03\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u0259\x03"+
		"\x02\x02\x02\u025B\u025C\x03\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D"+
		"\u025E\x07V\x02\x02\u025E\u0260\x03\x02\x02\x02\u025F\u0255\x03\x02\x02"+
		"\x02\u025F\u0256\x03\x02\x02\x02\u0260[\x03\x02\x02\x02\u0261\u026B\x05"+
		"^0\x02\u0262\u0263\x07\x07\x02\x02\u0263\u0265\x05^0\x02\u0264\u0262\x03"+
		"\x02\x02\x02\u0265\u0266\x03\x02\x02\x02\u0266\u0264\x03\x02\x02\x02\u0266"+
		"\u0267\x03\x02\x02\x02\u0267\u0269\x03\x02\x02\x02\u0268\u026A\x07\x07"+
		"\x02\x02\u0269\u0268\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A"+
		"\u026C\x03\x02\x02\x02\u026B\u0264\x03\x02\x02\x02\u026B\u026C\x03\x02"+
		"\x02\x02\u026C]\x03\x02\x02\x02\u026D\u0270\x05d3\x02\u026E\u0270\x05"+
		"`1\x02\u026F\u026D\x03\x02\x02\x02\u026F\u026E\x03\x02\x02\x02\u0270_"+
		"\x03\x02\x02\x02\u0271\u0273\x07/\x02\x02\u0272\u0274\x05\x12\n\x02\u0273"+
		"\u0272\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274\u0275\x03\x02"+
		"\x02\x02\u0275\u0276\x07\x05\x02\x02\u0276\u0277\x05^0\x02\u0277a\x03"+
		"\x02\x02\x02\u0278\u027E\x05d3\x02\u0279\u027A\x07&\x02\x02\u027A\u027B"+
		"\x05d3\x02\u027B\u027C\x07(\x02\x02\u027C\u027D\x05b2\x02\u027D\u027F"+
		"\x03\x02\x02\x02\u027E\u0279\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02"+
		"\u027F\u0282\x03\x02\x02\x02\u0280\u0282\x05\x84C\x02\u0281\u0278\x03"+
		"\x02\x02\x02\u0281\u0280\x03\x02\x02\x02\u0282c\x03\x02\x02\x02\u0283"+
		"\u0288\x05f4\x02\u0284\u0285\x070\x02\x02\u0285\u0287\x05f4\x02\u0286"+
		"\u0284\x03\x02\x02\x02\u0287\u028A\x03\x02\x02\x02\u0288\u0286\x03\x02"+
		"\x02\x02\u0288\u0289\x03\x02\x02\x02\u0289e\x03\x02\x02\x02\u028A\u0288"+
		"\x03\x02\x02\x02\u028B\u0290\x05h5\x02\u028C\u028D\x071\x02\x02\u028D"+
		"\u028F\x05h5\x02\u028E\u028C\x03\x02\x02\x02\u028F\u0292\x03\x02\x02\x02"+
		"\u0290\u028E\x03\x02\x02\x02\u0290\u0291\x03\x02\x02\x02\u0291g\x03\x02"+
		"\x02\x02\u0292\u0290\x03\x02\x02\x02\u0293\u0294\x072\x02\x02\u0294\u0297"+
		"\x05h5\x02\u0295\u0297\x05j6\x02\u0296\u0293\x03\x02\x02\x02\u0296\u0295"+
		"\x03\x02\x02\x02\u0297i\x03\x02\x02\x02\u0298\u029E\x05n8\x02\u0299\u029A"+
		"\x05l7\x02\u029A\u029B\x05n8\x02\u029B\u029D\x03\x02\x02\x02\u029C\u0299"+
		"\x03\x02\x02\x02\u029D\u02A0\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02"+
		"\u029E\u029F\x03\x02\x02\x02\u029Fk\x03\x02\x02\x02\u02A0\u029E\x03\x02"+
		"\x02\x02\u02A1\u02AF\x073\x02\x02\u02A2\u02AF\x074\x02\x02\u02A3\u02AF"+
		"\x075\x02\x02\u02A4\u02AF\x076\x02\x02\u02A5\u02AF\x077\x02\x02\u02A6"+
		"\u02AF\x078\x02\x02\u02A7\u02AF\x079\x02\x02\u02A8\u02AF\x07$\x02\x02"+
		"\u02A9\u02AA\x072\x02\x02\u02AA\u02AF\x07$\x02\x02\u02AB\u02AF\x07:\x02"+
		"\x02\u02AC\u02AD\x07:\x02\x02\u02AD\u02AF\x072\x02\x02\u02AE\u02A1\x03"+
		"\x02\x02\x02\u02AE\u02A2\x03\x02\x02\x02\u02AE\u02A3\x03\x02\x02\x02\u02AE"+
		"\u02A4\x03\x02\x02\x02\u02AE\u02A5\x03\x02\x02\x02\u02AE\u02A6\x03\x02"+
		"\x02\x02\u02AE\u02A7\x03\x02\x02\x02\u02AE\u02A8\x03\x02\x02\x02\u02AE"+
		"\u02A9\x03\x02\x02\x02\u02AE\u02AB\x03\x02\x02\x02\u02AE\u02AC\x03\x02"+
		"\x02\x02\u02AFm\x03\x02\x02\x02\u02B0\u02B5\x05p9\x02\u02B1\u02B2\x07"+
		";\x02\x02\u02B2\u02B4\x05p9\x02\u02B3\u02B1\x03\x02\x02\x02\u02B4\u02B7"+
		"\x03\x02\x02\x02\u02B5\u02B3\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02"+
		"\u02B6o\x03\x02\x02\x02\u02B7\u02B5\x03\x02\x02\x02\u02B8\u02BD\x05r:"+
		"\x02\u02B9\u02BA\x07<\x02\x02\u02BA\u02BC\x05r:\x02\u02BB\u02B9\x03\x02"+
		"\x02\x02\u02BC\u02BF\x03\x02\x02\x02\u02BD\u02BB\x03\x02\x02\x02\u02BD"+
		"\u02BE\x03\x02\x02\x02\u02BEq\x03\x02\x02\x02\u02BF\u02BD\x03\x02\x02"+
		"\x02\u02C0\u02C5\x05t;\x02\u02C1\u02C2\x07=\x02\x02\u02C2\u02C4\x05t;"+
		"\x02\u02C3\u02C1\x03\x02\x02\x02\u02C4\u02C7\x03\x02\x02\x02\u02C5\u02C3"+
		"\x03\x02\x02\x02\u02C5\u02C6\x03\x02\x02\x02\u02C6s\x03\x02\x02\x02\u02C7"+
		"\u02C5\x03\x02\x02\x02\u02C8\u02CD\x05v<\x02\u02C9\u02CA\t\x04\x02\x02"+
		"\u02CA\u02CC\x05v<\x02\u02CB\u02C9\x03\x02\x02\x02\u02CC\u02CF\x03\x02"+
		"\x02\x02\u02CD\u02CB\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE"+
		"u\x03\x02\x02\x02\u02CF\u02CD\x03\x02\x02\x02\u02D0\u02D5\x05x=\x02\u02D1"+
		"\u02D2\t\x05\x02\x02\u02D2\u02D4\x05x=\x02\u02D3\u02D1\x03\x02\x02\x02"+
		"\u02D4\u02D7\x03\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D5\u02D6\x03"+
		"\x02\x02\x02\u02D6w\x03\x02\x02\x02\u02D7\u02D5\x03\x02\x02\x02\u02D8"+
		"\u02DD\x05z>\x02\u02D9\u02DA\t\x06\x02\x02\u02DA\u02DC\x05z>\x02\u02DB"+
		"\u02D9\x03\x02\x02\x02\u02DC\u02DF\x03\x02\x02\x02\u02DD\u02DB\x03\x02"+
		"\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DEy\x03\x02\x02\x02\u02DF\u02DD"+
		"\x03\x02\x02\x02\u02E0\u02E1\t\x07\x02\x02\u02E1\u02E4\x05z>\x02\u02E2"+
		"\u02E4\x05|?\x02\u02E3\u02E0\x03\x02\x02\x02\u02E3\u02E2\x03\x02\x02\x02"+
		"\u02E4{\x03\x02\x02\x02\u02E5\u02E9\x05~@\x02\u02E6\u02E8\x05\x86D\x02"+
		"\u02E7\u02E6\x03\x02\x02\x02\u02E8\u02EB\x03\x02\x02\x02\u02E9\u02E7\x03"+
		"\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA\u02EE\x03\x02\x02\x02\u02EB"+
		"\u02E9\x03\x02\x02\x02\u02EC\u02ED\x07\t\x02\x02\u02ED\u02EF\x05z>\x02"+
		"\u02EE\u02EC\x03\x02\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF}\x03\x02"+
		"\x02\x02\u02F0\u02F3\x07N\x02\x02\u02F1\u02F4\x05\xAAV\x02\u02F2\u02F4"+
		"\x05\x82B\x02\u02F3\u02F1\x03\x02\x02\x02\u02F3\u02F2\x03\x02\x02\x02"+
		"\u02F3\u02F4\x03\x02\x02\x02\u02F4\u02F5\x03\x02\x02\x02\u02F5\u030F\x07"+
		"O\x02\x02\u02F6\u02F8\x07R\x02\x02\u02F7\u02F9\x05\x80A\x02\u02F8\u02F7"+
		"\x03\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02\x02"+
		"\u02FA\u030F\x07S\x02\x02\u02FB\u02FD\x07P\x02\x02\u02FC\u02FE\x05\x92"+
		"J\x02\u02FD\u02FC\x03\x02\x02\x02\u02FD\u02FE\x03\x02\x02\x02\u02FE\u02FF"+
		"\x03\x02\x02\x02\u02FF\u030F\x07Q\x02\x02\u0300\u0301\x07E\x02\x02\u0301"+
		"\u0302\x05\xA6T\x02\u0302\u0303\x07E\x02\x02\u0303\u030F\x03\x02\x02\x02"+
		"\u0304\u0305\x07 \x02\x02\u0305\u0306\x07 \x02\x02\u0306\u030F\x07 \x02"+
		"\x02\u0307\u030F\x07H\x02\x02\u0308\u030F\x07I\x02\x02\u0309\u030B\x07"+
		"J\x02\x02\u030A\u0309\x03\x02\x02\x02\u030B\u030C\x03\x02\x02\x02\u030C"+
		"\u030A\x03\x02\x02\x02\u030C\u030D\x03\x02\x02\x02\u030D\u030F\x03\x02"+
		"\x02\x02\u030E\u02F0\x03\x02\x02\x02\u030E\u02F6\x03\x02\x02\x02\u030E"+
		"\u02FB\x03\x02\x02\x02\u030E\u0300\x03\x02\x02\x02\u030E\u0304\x03\x02"+
		"\x02\x02\u030E\u0307\x03\x02\x02\x02\u030E\u0308\x03\x02\x02\x02\u030E"+
		"\u030A\x03\x02\x02\x02\u030F\x7F\x03\x02\x02\x02\u0310\u031C\x05b2\x02"+
		"\u0311\u031D\x05\x9CO\x02\u0312\u0313\x07\x07\x02\x02\u0313\u0315\x05"+
		"b2\x02\u0314\u0312\x03\x02\x02\x02\u0315\u0318\x03\x02\x02\x02\u0316\u0314"+
		"\x03\x02\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317\u031A\x03\x02\x02\x02"+
		"\u0318\u0316\x03\x02\x02\x02\u0319\u031B\x07\x07\x02\x02\u031A\u0319\x03"+
		"\x02\x02\x02\u031A\u031B\x03\x02\x02\x02\u031B\u031D\x03\x02\x02\x02\u031C"+
		"\u0311\x03\x02\x02\x02\u031C\u0316\x03\x02\x02\x02\u031D\x81\x03\x02\x02"+
		"\x02\u031E\u032A\x05b2\x02\u031F\u032B\x05\xA2R\x02\u0320\u0321\x07\x07"+
		"\x02\x02\u0321\u0323\x05b2\x02\u0322\u0320\x03\x02\x02\x02\u0323\u0326"+
		"\x03\x02\x02\x02\u0324\u0322\x03\x02\x02\x02\u0324\u0325\x03\x02\x02\x02"+
		"\u0325\u0328\x03\x02\x02\x02\u0326\u0324\x03\x02\x02\x02\u0327\u0329\x07"+
		"\x07\x02\x02\u0328\u0327\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329"+
		"\u032B\x03\x02\x02\x02\u032A\u031F\x03\x02\x02\x02\u032A\u0324\x03\x02"+
		"\x02\x02\u032B\x83\x03\x02\x02\x02\u032C\u032E\x07/\x02\x02\u032D\u032F"+
		"\x05\x12\n\x02\u032E\u032D\x03\x02\x02\x02\u032E\u032F\x03\x02\x02\x02"+
		"\u032F\u0330\x03\x02\x02\x02\u0330\u0331\x07\x05\x02\x02\u0331\u0332\x05"+
		"b2\x02\u0332\x85\x03\x02\x02\x02\u0333\u0335\x07N\x02\x02\u0334\u0336"+
		"\x05\x96L\x02\u0335\u0334\x03\x02\x02\x02\u0335\u0336\x03\x02\x02\x02"+
		"\u0336\u0337\x03\x02\x02\x02\u0337\u033F\x07O\x02\x02\u0338\u0339\x07"+
		"R\x02\x02\u0339\u033A\x05\x88E\x02\u033A\u033B\x07S\x02\x02\u033B\u033F"+
		"\x03\x02\x02\x02\u033C\u033D\x07 \x02\x02\u033D\u033F\x07H\x02\x02\u033E"+
		"\u0333\x03\x02\x02\x02\u033E\u0338\x03\x02\x02\x02\u033E\u033C\x03\x02"+
		"\x02\x02\u033F\x87\x03\x02\x02\x02\u0340\u0345\x05\x8AF\x02\u0341\u0342"+
		"\x07\x07\x02\x02\u0342\u0344\x05\x8AF\x02\u0343\u0341\x03\x02\x02\x02"+
		"\u0344\u0347\x03\x02\x02\x02\u0345\u0343\x03\x02\x02\x02\u0345\u0346\x03"+
		"\x02\x02\x02\u0346\u0349\x03\x02\x02\x02\u0347\u0345\x03\x02\x02\x02\u0348"+
		"\u034A\x07\x07\x02\x02\u0349\u0348\x03\x02\x02\x02\u0349\u034A\x03\x02"+
		"\x02\x02\u034A\x89\x03\x02\x02\x02\u034B\u034C\x07 \x02\x02\u034C\u034D"+
		"\x07 \x02\x02\u034D\u035A\x07 \x02\x02\u034E\u035A\x05b2\x02\u034F\u0351"+
		"\x05b2\x02\u0350\u034F\x03\x02\x02\x02\u0350\u0351\x03\x02\x02\x02\u0351"+
		"\u0352\x03\x02\x02\x02\u0352\u0354\x07\x05\x02\x02\u0353\u0355\x05b2\x02"+
		"\u0354\u0353\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02\u0355\u0357\x03"+
		"\x02\x02\x02\u0356\u0358\x05\x8CG\x02\u0357\u0356\x03\x02\x02\x02\u0357"+
		"\u0358\x03\x02\x02\x02\u0358\u035A\x03\x02\x02\x02\u0359\u034B\x03\x02"+
		"\x02\x02\u0359\u034E\x03\x02\x02\x02\u0359\u0350\x03\x02\x02\x02\u035A"+
		"\x8B\x03\x02\x02\x02\u035B\u035D\x07\x05\x02\x02\u035C\u035E\x05b2\x02"+
		"\u035D\u035C\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E\x8D\x03"+
		"\x02\x02\x02\u035F\u0364\x05n8\x02\u0360\u0361\x07\x07\x02\x02\u0361\u0363"+
		"\x05n8\x02\u0362\u0360\x03\x02\x02\x02\u0363\u0366\x03\x02\x02\x02\u0364"+
		"\u0362\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365\u0368\x03\x02"+
		"\x02\x02\u0366\u0364\x03\x02\x02\x02\u0367\u0369\x07\x07\x02\x02\u0368"+
		"\u0367\x03\x02\x02\x02\u0368\u0369\x03\x02\x02\x02\u0369\x8F\x03\x02\x02"+
		"\x02\u036A\u036F\x05b2\x02\u036B\u036C\x07\x07\x02\x02\u036C\u036E\x05"+
		"b2\x02\u036D\u036B\x03\x02\x02\x02\u036E\u0371\x03\x02\x02\x02\u036F\u036D"+
		"\x03\x02\x02\x02\u036F\u0370\x03\x02\x02\x02\u0370\u0373\x03\x02\x02\x02"+
		"\u0371\u036F\x03\x02\x02\x02\u0372\u0374\x07\x07\x02\x02\u0373\u0372\x03"+
		"\x02\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374\x91\x03\x02\x02\x02\u0375"+
		"\u0376\x05b2\x02\u0376\u0377\x07\x05\x02\x02\u0377\u0386\x05b2\x02\u0378"+
		"\u0387\x05\xA2R\x02\u0379\u037A\x07\x07\x02\x02\u037A\u037B\x05b2\x02"+
		"\u037B\u037C\x07\x05\x02\x02\u037C\u037D\x05b2\x02\u037D\u037F\x03\x02"+
		"\x02\x02\u037E\u0379\x03\x02\x02\x02\u037F\u0382\x03\x02\x02\x02\u0380"+
		"\u037E\x03\x02\x02\x02\u0380\u0381\x03\x02\x02\x02\u0381\u0384\x03\x02"+
		"\x02\x02\u0382\u0380\x03\x02\x02\x02\u0383\u0385\x07\x07\x02\x02\u0384"+
		"\u0383\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385\u0387\x03\x02"+
		"\x02\x02\u0386\u0378\x03\x02\x02\x02\u0386\u0380\x03\x02\x02\x02\u0387"+
		"\u0397\x03\x02\x02\x02\u0388\u0394\x05b2\x02\u0389\u0395\x05\xA2R\x02"+
		"\u038A\u038B\x07\x07\x02\x02\u038B\u038D\x05b2\x02\u038C\u038A\x03\x02"+
		"\x02\x02\u038D\u0390\x03\x02\x02\x02\u038E\u038C\x03\x02\x02\x02\u038E"+
		"\u038F\x03\x02\x02\x02\u038F\u0392\x03\x02\x02\x02\u0390\u038E\x03\x02"+
		"\x02\x02\u0391\u0393\x07\x07\x02\x02\u0392\u0391\x03\x02\x02\x02\u0392"+
		"\u0393\x03\x02\x02\x02\u0393\u0395\x03\x02\x02\x02\u0394\u0389\x03\x02"+
		"\x02\x02\u0394\u038E\x03\x02\x02\x02\u0395\u0397\x03\x02\x02\x02\u0396"+
		"\u0375\x03\x02\x02\x02\u0396\u0388\x03\x02\x02\x02\u0397\x93\x03\x02\x02"+
		"\x02\u0398\u0399\x07F\x02\x02\u0399\u039F\x07H\x02\x02\u039A\u039C\x07"+
		"N\x02\x02\u039B\u039D\x05\x90I\x02\u039C\u039B\x03\x02\x02\x02\u039C\u039D"+
		"\x03\x02\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E\u03A0\x07O\x02\x02"+
		"\u039F\u039A\x03\x02\x02\x02\u039F\u03A0\x03\x02\x02\x02\u03A0\u03A1\x03"+
		"\x02\x02\x02\u03A1\u03A2\x07\x05\x02\x02\u03A2\u03A3\x05Z.\x02\u03A3\x95"+
		"\x03\x02\x02\x02\u03A4\u03A5\x05\x98M\x02\u03A5\u03A6\x07\x07\x02\x02"+
		"\u03A6\u03A8\x03\x02\x02\x02\u03A7\u03A4\x03\x02\x02\x02\u03A8\u03AB\x03"+
		"\x02\x02\x02\u03A9\u03A7\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA"+
		"\u03C0\x03\x02\x02\x02\u03AB\u03A9\x03\x02\x02\x02\u03AC\u03AE\x05\x98"+
		"M\x02\u03AD\u03AF\x07\x07\x02\x02\u03AE\u03AD\x03\x02\x02\x02\u03AE\u03AF"+
		"\x03\x02\x02\x02\u03AF\u03C1\x03\x02\x02\x02\u03B0\u03B1\x07\b\x02\x02"+
		"\u03B1\u03B6\x05b2\x02\u03B2\u03B3\x07\x07\x02\x02\u03B3\u03B5\x05\x98"+
		"M\x02\u03B4\u03B2\x03\x02\x02\x02\u03B5\u03B8\x03\x02\x02\x02\u03B6\u03B4"+
		"\x03\x02\x02\x02\u03B6\u03B7\x03\x02\x02\x02\u03B7\u03BC\x03\x02\x02\x02"+
		"\u03B8\u03B6\x03\x02\x02\x02\u03B9\u03BA\x07\x07\x02\x02\u03BA\u03BB\x07"+
		"\t\x02\x02\u03BB\u03BD\x05b2\x02\u03BC\u03B9\x03\x02\x02\x02\u03BC\u03BD"+
		"\x03\x02\x02\x02\u03BD\u03C1\x03\x02\x02\x02\u03BE\u03BF\x07\t\x02\x02"+
		"\u03BF\u03C1\x05b2\x02\u03C0\u03AC\x03\x02\x02\x02\u03C0\u03B0\x03\x02"+
		"\x02\x02\u03C0\u03BE\x03\x02\x02\x02\u03C1\x97\x03\x02\x02\x02\u03C2\u03C4"+
		"\x05b2\x02\u03C3\u03C5\x05\xA2R\x02\u03C4\u03C3\x03\x02\x02\x02\u03C4"+
		"\u03C5\x03\x02\x02\x02\u03C5\u03CB\x03\x02\x02\x02\u03C6\u03C7\x05b2\x02"+
		"\u03C7\u03C8\x07\x06\x02\x02\u03C8\u03C9\x05b2\x02\u03C9\u03CB\x03\x02"+
		"\x02\x02\u03CA\u03C2\x03\x02\x02\x02\u03CA\u03C6\x03\x02\x02\x02\u03CB"+
		"\x99\x03\x02\x02\x02\u03CC\u03CF\x05\x9CO\x02\u03CD\u03CF\x05\x9EP\x02"+
		"\u03CE\u03CC\x03\x02\x02\x02\u03CE\u03CD\x03\x02\x02\x02\u03CF\x9B\x03"+
		"\x02\x02\x02\u03D0\u03D1\x07*\x02\x02\u03D1\u03D2\x05\x8EH\x02\u03D2\u03D3"+
		"\x07$\x02\x02\u03D3\u03D5\x05\\/\x02\u03D4\u03D6\x05\x9AN\x02\u03D5\u03D4"+
		"\x03\x02\x02\x02\u03D5\u03D6\x03\x02\x02\x02\u03D6\x9D\x03\x02\x02\x02"+
		"\u03D7\u03D8\x07&\x02\x02\u03D8\u03DA\x05^0\x02\u03D9\u03DB\x05\x9AN\x02"+
		"\u03DA\u03D9\x03\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB\x9F\x03"+
		"\x02\x02\x02\u03DC\u03DF\x05\xA2R\x02\u03DD\u03DF\x05\xA4S\x02\u03DE\u03DC"+
		"\x03\x02\x02\x02\u03DE\u03DD\x03\x02\x02\x02\u03DF\xA1\x03\x02\x02\x02"+
		"\u03E0\u03E1\x07*\x02\x02\u03E1\u03E2\x05\x8EH\x02\u03E2\u03E3\x07$\x02"+
		"\x02\u03E3\u03E5\x05d3\x02\u03E4\u03E6\x05\xA0Q\x02\u03E5\u03E4\x03\x02"+
		"\x02\x02\u03E5\u03E6\x03\x02\x02\x02\u03E6\xA3\x03\x02\x02\x02\u03E7\u03E8"+
		"\x07&\x02\x02\u03E8\u03EA\x05^0\x02\u03E9\u03EB\x05\xA0Q\x02\u03EA\u03E9"+
		"\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02\x02\u03EB\xA5\x03\x02\x02\x02"+
		"\u03EC\u03F1\x05b2\x02\u03ED\u03EE\x07\x07\x02\x02\u03EE\u03F0\x05b2\x02"+
		"\u03EF\u03ED\x03\x02\x02\x02\u03F0\u03F3\x03\x02\x02\x02\u03F1\u03EF\x03"+
		"\x02\x02\x02\u03F1\u03F2\x03\x02\x02\x02\u03F2\xA7\x03\x02\x02\x02\u03F3"+
		"\u03F1\x03\x02\x02\x02\u03F4\u03F5\x07H\x02\x02\u03F5\xA9\x03\x02\x02"+
		"\x02\u03F6\u03F8\x07G\x02\x02\u03F7\u03F9\x07\x1F\x02\x02\u03F8\u03F7"+
		"\x03\x02\x02\x02\u03F8\u03F9\x03\x02\x02\x02\u03F9\u03FB\x03\x02\x02\x02"+
		"\u03FA\u03FC\x05\x90I\x02\u03FB\u03FA\x03\x02\x02\x02\u03FB\u03FC\x03"+
		"\x02\x02\x02\u03FC\xAB\x03\x02\x02\x02\x90\xB1\xB5\xB7\xC0\xC9\xCC\xD3"+
		"\xD8\xE2\xE9\xEF\xF7\xFB\u0100\u0106\u010A\u010E\u0110\u0117\u011E\u0122"+
		"\u0126\u012D\u0131\u013E\u0144\u0149\u014D\u0150\u015B\u015F\u0161\u0169"+
		"\u016C\u016E\u0170\u017C\u0184\u018E\u0190\u0192\u0196\u019F\u01A6\u01A8"+
		"\u01B1\u01B6\u01BB\u01C2\u01C6\u01CD\u01D5\u01DE\u01E7\u01E9\u01EF\u01F9"+
		"\u0206\u020C\u0215\u0220\u022B\u0230\u0235\u023A\u0242\u024B\u0251\u0253"+
		"\u025B\u025F\u0266\u0269\u026B\u026F\u0273\u027E\u0281\u0288\u0290\u0296"+
		"\u029E\u02AE\u02B5\u02BD\u02C5\u02CD\u02D5\u02DD\u02E3\u02E9\u02EE\u02F3"+
		"\u02F8\u02FD\u030C\u030E\u0316\u031A\u031C\u0324\u0328\u032A\u032E\u0335"+
		"\u033E\u0345\u0349\u0350\u0354\u0357\u0359\u035D\u0364\u0368\u036F\u0373"+
		"\u0380\u0384\u0386\u038E\u0392\u0394\u0396\u039C\u039F\u03A9\u03AE\u03B6"+
		"\u03BC\u03C0\u03C4\u03CA\u03CE\u03D5\u03DA\u03DE\u03E5\u03EA\u03F1\u03F8"+
		"\u03FB";
	public static readonly _serializedATN: string = Utils.join(
		[
			Python2Parser._serializedATNSegment0,
			Python2Parser._serializedATNSegment1
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Python2Parser.__ATN) {
			Python2Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Python2Parser._serializedATN));
		}

		return Python2Parser.__ATN;
	}

}

export class Single_inputContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(Python2Parser.NEWLINE, 0); }
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public compound_stmt(): Compound_stmtContext | undefined {
		return this.tryGetRuleContext(0, Compound_stmtContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_single_input; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterSingle_input) listener.enterSingle_input(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitSingle_input) listener.exitSingle_input(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitSingle_input) return visitor.visitSingle_input(this);
		else return visitor.visitChildren(this);
	}
}


export class File_inputContext extends ParserRuleContext {
	public ENDMARKER(): TerminalNode { return this.getToken(Python2Parser.ENDMARKER, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python2Parser.NEWLINE);
		} else {
			return this.getToken(Python2Parser.NEWLINE, i);
		}
	}
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_file_input; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterFile_input) listener.enterFile_input(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitFile_input) listener.exitFile_input(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitFile_input) return visitor.visitFile_input(this);
		else return visitor.visitChildren(this);
	}
}


export class Eval_inputContext extends ParserRuleContext {
	public testlist(): TestlistContext {
		return this.getRuleContext(0, TestlistContext);
	}
	public ENDMARKER(): TerminalNode { return this.getToken(Python2Parser.ENDMARKER, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python2Parser.NEWLINE);
		} else {
			return this.getToken(Python2Parser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_eval_input; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterEval_input) listener.enterEval_input(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitEval_input) listener.exitEval_input(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitEval_input) return visitor.visitEval_input(this);
		else return visitor.visitChildren(this);
	}
}


export class DecoratorContext extends ParserRuleContext {
	public dotted_name(): Dotted_nameContext {
		return this.getRuleContext(0, Dotted_nameContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(Python2Parser.NEWLINE, 0); }
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_decorator; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterDecorator) listener.enterDecorator(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitDecorator) listener.exitDecorator(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitDecorator) return visitor.visitDecorator(this);
		else return visitor.visitChildren(this);
	}
}


export class DecoratorsContext extends ParserRuleContext {
	public decorator(): DecoratorContext[];
	public decorator(i: number): DecoratorContext;
	public decorator(i?: number): DecoratorContext | DecoratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DecoratorContext);
		} else {
			return this.getRuleContext(i, DecoratorContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_decorators; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterDecorators) listener.enterDecorators(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitDecorators) listener.exitDecorators(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitDecorators) return visitor.visitDecorators(this);
		else return visitor.visitChildren(this);
	}
}


export class DecoratedContext extends ParserRuleContext {
	public decorators(): DecoratorsContext {
		return this.getRuleContext(0, DecoratorsContext);
	}
	public classdef(): ClassdefContext | undefined {
		return this.tryGetRuleContext(0, ClassdefContext);
	}
	public funcdef(): FuncdefContext | undefined {
		return this.tryGetRuleContext(0, FuncdefContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_decorated; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterDecorated) listener.enterDecorated(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitDecorated) listener.exitDecorated(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitDecorated) return visitor.visitDecorated(this);
		else return visitor.visitChildren(this);
	}
}


export class FuncdefContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Python2Parser.NAME, 0); }
	public parameters(): ParametersContext {
		return this.getRuleContext(0, ParametersContext);
	}
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_funcdef; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterFuncdef) listener.enterFuncdef(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitFuncdef) listener.exitFuncdef(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitFuncdef) return visitor.visitFuncdef(this);
		else return visitor.visitChildren(this);
	}
}


export class ParametersContext extends ParserRuleContext {
	public varargslist(): VarargslistContext | undefined {
		return this.tryGetRuleContext(0, VarargslistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_parameters; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterParameters) listener.enterParameters(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitParameters) listener.exitParameters(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitParameters) return visitor.visitParameters(this);
		else return visitor.visitChildren(this);
	}
}


export class VarargslistContext extends ParserRuleContext {
	public fpdef(): FpdefContext[];
	public fpdef(i: number): FpdefContext;
	public fpdef(i?: number): FpdefContext | FpdefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FpdefContext);
		} else {
			return this.getRuleContext(i, FpdefContext);
		}
	}
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python2Parser.NAME);
		} else {
			return this.getToken(Python2Parser.NAME, i);
		}
	}
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_varargslist; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterVarargslist) listener.enterVarargslist(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitVarargslist) listener.exitVarargslist(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitVarargslist) return visitor.visitVarargslist(this);
		else return visitor.visitChildren(this);
	}
}


export class FpdefContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Python2Parser.NAME, 0); }
	public fplist(): FplistContext | undefined {
		return this.tryGetRuleContext(0, FplistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_fpdef; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterFpdef) listener.enterFpdef(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitFpdef) listener.exitFpdef(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitFpdef) return visitor.visitFpdef(this);
		else return visitor.visitChildren(this);
	}
}


export class FplistContext extends ParserRuleContext {
	public fpdef(): FpdefContext[];
	public fpdef(i: number): FpdefContext;
	public fpdef(i?: number): FpdefContext | FpdefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FpdefContext);
		} else {
			return this.getRuleContext(i, FpdefContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_fplist; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterFplist) listener.enterFplist(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitFplist) listener.exitFplist(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitFplist) return visitor.visitFplist(this);
		else return visitor.visitChildren(this);
	}
}


export class StmtContext extends ParserRuleContext {
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public compound_stmt(): Compound_stmtContext | undefined {
		return this.tryGetRuleContext(0, Compound_stmtContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterStmt) listener.enterStmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitStmt) listener.exitStmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitStmt) return visitor.visitStmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Simple_stmtContext extends ParserRuleContext {
	public small_stmt(): Small_stmtContext[];
	public small_stmt(i: number): Small_stmtContext;
	public small_stmt(i?: number): Small_stmtContext | Small_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Small_stmtContext);
		} else {
			return this.getRuleContext(i, Small_stmtContext);
		}
	}
	public NEWLINE(): TerminalNode { return this.getToken(Python2Parser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_simple_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterSimple_stmt) listener.enterSimple_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitSimple_stmt) listener.exitSimple_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitSimple_stmt) return visitor.visitSimple_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Small_stmtContext extends ParserRuleContext {
	public expr_stmt(): Expr_stmtContext | undefined {
		return this.tryGetRuleContext(0, Expr_stmtContext);
	}
	public print_stmt(): Print_stmtContext | undefined {
		return this.tryGetRuleContext(0, Print_stmtContext);
	}
	public del_stmt(): Del_stmtContext | undefined {
		return this.tryGetRuleContext(0, Del_stmtContext);
	}
	public pass_stmt(): Pass_stmtContext | undefined {
		return this.tryGetRuleContext(0, Pass_stmtContext);
	}
	public flow_stmt(): Flow_stmtContext | undefined {
		return this.tryGetRuleContext(0, Flow_stmtContext);
	}
	public import_stmt(): Import_stmtContext | undefined {
		return this.tryGetRuleContext(0, Import_stmtContext);
	}
	public global_stmt(): Global_stmtContext | undefined {
		return this.tryGetRuleContext(0, Global_stmtContext);
	}
	public exec_stmt(): Exec_stmtContext | undefined {
		return this.tryGetRuleContext(0, Exec_stmtContext);
	}
	public assert_stmt(): Assert_stmtContext | undefined {
		return this.tryGetRuleContext(0, Assert_stmtContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_small_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterSmall_stmt) listener.enterSmall_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitSmall_stmt) listener.exitSmall_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitSmall_stmt) return visitor.visitSmall_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Expr_stmtContext extends ParserRuleContext {
	public testlist(): TestlistContext[];
	public testlist(i: number): TestlistContext;
	public testlist(i?: number): TestlistContext | TestlistContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestlistContext);
		} else {
			return this.getRuleContext(i, TestlistContext);
		}
	}
	public augassign(): AugassignContext | undefined {
		return this.tryGetRuleContext(0, AugassignContext);
	}
	public yield_expr(): Yield_exprContext[];
	public yield_expr(i: number): Yield_exprContext;
	public yield_expr(i?: number): Yield_exprContext | Yield_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Yield_exprContext);
		} else {
			return this.getRuleContext(i, Yield_exprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_expr_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterExpr_stmt) listener.enterExpr_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitExpr_stmt) listener.exitExpr_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitExpr_stmt) return visitor.visitExpr_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class AugassignContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_augassign; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterAugassign) listener.enterAugassign(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitAugassign) listener.exitAugassign(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitAugassign) return visitor.visitAugassign(this);
		else return visitor.visitChildren(this);
	}
}


export class Print_stmtContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Python2Parser.NAME, 0); }
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_print_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterPrint_stmt) listener.enterPrint_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitPrint_stmt) listener.exitPrint_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitPrint_stmt) return visitor.visitPrint_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Del_stmtContext extends ParserRuleContext {
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_del_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterDel_stmt) listener.enterDel_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitDel_stmt) listener.exitDel_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitDel_stmt) return visitor.visitDel_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Pass_stmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_pass_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterPass_stmt) listener.enterPass_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitPass_stmt) listener.exitPass_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitPass_stmt) return visitor.visitPass_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Flow_stmtContext extends ParserRuleContext {
	public break_stmt(): Break_stmtContext | undefined {
		return this.tryGetRuleContext(0, Break_stmtContext);
	}
	public continue_stmt(): Continue_stmtContext | undefined {
		return this.tryGetRuleContext(0, Continue_stmtContext);
	}
	public return_stmt(): Return_stmtContext | undefined {
		return this.tryGetRuleContext(0, Return_stmtContext);
	}
	public raise_stmt(): Raise_stmtContext | undefined {
		return this.tryGetRuleContext(0, Raise_stmtContext);
	}
	public yield_stmt(): Yield_stmtContext | undefined {
		return this.tryGetRuleContext(0, Yield_stmtContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_flow_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterFlow_stmt) listener.enterFlow_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitFlow_stmt) listener.exitFlow_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitFlow_stmt) return visitor.visitFlow_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Break_stmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_break_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterBreak_stmt) listener.enterBreak_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitBreak_stmt) listener.exitBreak_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitBreak_stmt) return visitor.visitBreak_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Continue_stmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_continue_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterContinue_stmt) listener.enterContinue_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitContinue_stmt) listener.exitContinue_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitContinue_stmt) return visitor.visitContinue_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Return_stmtContext extends ParserRuleContext {
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_return_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterReturn_stmt) listener.enterReturn_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitReturn_stmt) listener.exitReturn_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitReturn_stmt) return visitor.visitReturn_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Yield_stmtContext extends ParserRuleContext {
	public yield_expr(): Yield_exprContext {
		return this.getRuleContext(0, Yield_exprContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_yield_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterYield_stmt) listener.enterYield_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitYield_stmt) listener.exitYield_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitYield_stmt) return visitor.visitYield_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Raise_stmtContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_raise_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterRaise_stmt) listener.enterRaise_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitRaise_stmt) listener.exitRaise_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitRaise_stmt) return visitor.visitRaise_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Import_stmtContext extends ParserRuleContext {
	public import_name(): Import_nameContext | undefined {
		return this.tryGetRuleContext(0, Import_nameContext);
	}
	public import_from(): Import_fromContext | undefined {
		return this.tryGetRuleContext(0, Import_fromContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_import_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterImport_stmt) listener.enterImport_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitImport_stmt) listener.exitImport_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitImport_stmt) return visitor.visitImport_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Import_nameContext extends ParserRuleContext {
	public dotted_as_names(): Dotted_as_namesContext {
		return this.getRuleContext(0, Dotted_as_namesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_import_name; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterImport_name) listener.enterImport_name(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitImport_name) listener.exitImport_name(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitImport_name) return visitor.visitImport_name(this);
		else return visitor.visitChildren(this);
	}
}


export class Import_fromContext extends ParserRuleContext {
	public dotted_name(): Dotted_nameContext | undefined {
		return this.tryGetRuleContext(0, Dotted_nameContext);
	}
	public import_as_names(): Import_as_namesContext | undefined {
		return this.tryGetRuleContext(0, Import_as_namesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_import_from; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterImport_from) listener.enterImport_from(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitImport_from) listener.exitImport_from(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitImport_from) return visitor.visitImport_from(this);
		else return visitor.visitChildren(this);
	}
}


export class Import_as_nameContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python2Parser.NAME);
		} else {
			return this.getToken(Python2Parser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_import_as_name; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterImport_as_name) listener.enterImport_as_name(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitImport_as_name) listener.exitImport_as_name(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitImport_as_name) return visitor.visitImport_as_name(this);
		else return visitor.visitChildren(this);
	}
}


export class Dotted_as_nameContext extends ParserRuleContext {
	public dotted_name(): Dotted_nameContext {
		return this.getRuleContext(0, Dotted_nameContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Python2Parser.NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_dotted_as_name; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterDotted_as_name) listener.enterDotted_as_name(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitDotted_as_name) listener.exitDotted_as_name(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitDotted_as_name) return visitor.visitDotted_as_name(this);
		else return visitor.visitChildren(this);
	}
}


export class Import_as_namesContext extends ParserRuleContext {
	public import_as_name(): Import_as_nameContext[];
	public import_as_name(i: number): Import_as_nameContext;
	public import_as_name(i?: number): Import_as_nameContext | Import_as_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Import_as_nameContext);
		} else {
			return this.getRuleContext(i, Import_as_nameContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_import_as_names; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterImport_as_names) listener.enterImport_as_names(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitImport_as_names) listener.exitImport_as_names(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitImport_as_names) return visitor.visitImport_as_names(this);
		else return visitor.visitChildren(this);
	}
}


export class Dotted_as_namesContext extends ParserRuleContext {
	public dotted_as_name(): Dotted_as_nameContext[];
	public dotted_as_name(i: number): Dotted_as_nameContext;
	public dotted_as_name(i?: number): Dotted_as_nameContext | Dotted_as_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Dotted_as_nameContext);
		} else {
			return this.getRuleContext(i, Dotted_as_nameContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_dotted_as_names; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterDotted_as_names) listener.enterDotted_as_names(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitDotted_as_names) listener.exitDotted_as_names(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitDotted_as_names) return visitor.visitDotted_as_names(this);
		else return visitor.visitChildren(this);
	}
}


export class Dotted_nameContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python2Parser.NAME);
		} else {
			return this.getToken(Python2Parser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_dotted_name; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterDotted_name) listener.enterDotted_name(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitDotted_name) listener.exitDotted_name(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitDotted_name) return visitor.visitDotted_name(this);
		else return visitor.visitChildren(this);
	}
}


export class Global_stmtContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python2Parser.NAME);
		} else {
			return this.getToken(Python2Parser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_global_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterGlobal_stmt) listener.enterGlobal_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitGlobal_stmt) listener.exitGlobal_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitGlobal_stmt) return visitor.visitGlobal_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Exec_stmtContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_exec_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterExec_stmt) listener.enterExec_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitExec_stmt) listener.exitExec_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitExec_stmt) return visitor.visitExec_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Assert_stmtContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_assert_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterAssert_stmt) listener.enterAssert_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitAssert_stmt) listener.exitAssert_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitAssert_stmt) return visitor.visitAssert_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Compound_stmtContext extends ParserRuleContext {
	public if_stmt(): If_stmtContext | undefined {
		return this.tryGetRuleContext(0, If_stmtContext);
	}
	public while_stmt(): While_stmtContext | undefined {
		return this.tryGetRuleContext(0, While_stmtContext);
	}
	public for_stmt(): For_stmtContext | undefined {
		return this.tryGetRuleContext(0, For_stmtContext);
	}
	public try_stmt(): Try_stmtContext | undefined {
		return this.tryGetRuleContext(0, Try_stmtContext);
	}
	public with_stmt(): With_stmtContext | undefined {
		return this.tryGetRuleContext(0, With_stmtContext);
	}
	public funcdef(): FuncdefContext | undefined {
		return this.tryGetRuleContext(0, FuncdefContext);
	}
	public classdef(): ClassdefContext | undefined {
		return this.tryGetRuleContext(0, ClassdefContext);
	}
	public decorated(): DecoratedContext | undefined {
		return this.tryGetRuleContext(0, DecoratedContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_compound_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterCompound_stmt) listener.enterCompound_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitCompound_stmt) listener.exitCompound_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitCompound_stmt) return visitor.visitCompound_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class If_stmtContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_if_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterIf_stmt) listener.enterIf_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitIf_stmt) listener.exitIf_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitIf_stmt) return visitor.visitIf_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class While_stmtContext extends ParserRuleContext {
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_while_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterWhile_stmt) listener.enterWhile_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitWhile_stmt) listener.exitWhile_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitWhile_stmt) return visitor.visitWhile_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class For_stmtContext extends ParserRuleContext {
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	public testlist(): TestlistContext {
		return this.getRuleContext(0, TestlistContext);
	}
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_for_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterFor_stmt) listener.enterFor_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitFor_stmt) listener.exitFor_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitFor_stmt) return visitor.visitFor_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class Try_stmtContext extends ParserRuleContext {
	public suite(): SuiteContext[];
	public suite(i: number): SuiteContext;
	public suite(i?: number): SuiteContext | SuiteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SuiteContext);
		} else {
			return this.getRuleContext(i, SuiteContext);
		}
	}
	public except_clause(): Except_clauseContext[];
	public except_clause(i: number): Except_clauseContext;
	public except_clause(i?: number): Except_clauseContext | Except_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Except_clauseContext);
		} else {
			return this.getRuleContext(i, Except_clauseContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_try_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterTry_stmt) listener.enterTry_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitTry_stmt) listener.exitTry_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitTry_stmt) return visitor.visitTry_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class With_stmtContext extends ParserRuleContext {
	public with_item(): With_itemContext[];
	public with_item(i: number): With_itemContext;
	public with_item(i?: number): With_itemContext | With_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(With_itemContext);
		} else {
			return this.getRuleContext(i, With_itemContext);
		}
	}
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_with_stmt; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterWith_stmt) listener.enterWith_stmt(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitWith_stmt) listener.exitWith_stmt(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitWith_stmt) return visitor.visitWith_stmt(this);
		else return visitor.visitChildren(this);
	}
}


export class With_itemContext extends ParserRuleContext {
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_with_item; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterWith_item) listener.enterWith_item(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitWith_item) listener.exitWith_item(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitWith_item) return visitor.visitWith_item(this);
		else return visitor.visitChildren(this);
	}
}


export class Except_clauseContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_except_clause; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterExcept_clause) listener.enterExcept_clause(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitExcept_clause) listener.exitExcept_clause(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitExcept_clause) return visitor.visitExcept_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class SuiteContext extends ParserRuleContext {
	public simple_stmt(): Simple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Simple_stmtContext);
	}
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(Python2Parser.NEWLINE, 0); }
	public INDENT(): TerminalNode | undefined { return this.tryGetToken(Python2Parser.INDENT, 0); }
	public DEDENT(): TerminalNode | undefined { return this.tryGetToken(Python2Parser.DEDENT, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_suite; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterSuite) listener.enterSuite(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitSuite) listener.exitSuite(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitSuite) return visitor.visitSuite(this);
		else return visitor.visitChildren(this);
	}
}


export class Testlist_safeContext extends ParserRuleContext {
	public old_test(): Old_testContext[];
	public old_test(i: number): Old_testContext;
	public old_test(i?: number): Old_testContext | Old_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Old_testContext);
		} else {
			return this.getRuleContext(i, Old_testContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_testlist_safe; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterTestlist_safe) listener.enterTestlist_safe(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitTestlist_safe) listener.exitTestlist_safe(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitTestlist_safe) return visitor.visitTestlist_safe(this);
		else return visitor.visitChildren(this);
	}
}


export class Old_testContext extends ParserRuleContext {
	public or_test(): Or_testContext | undefined {
		return this.tryGetRuleContext(0, Or_testContext);
	}
	public old_lambdef(): Old_lambdefContext | undefined {
		return this.tryGetRuleContext(0, Old_lambdefContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_old_test; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterOld_test) listener.enterOld_test(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitOld_test) listener.exitOld_test(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitOld_test) return visitor.visitOld_test(this);
		else return visitor.visitChildren(this);
	}
}


export class Old_lambdefContext extends ParserRuleContext {
	public old_test(): Old_testContext {
		return this.getRuleContext(0, Old_testContext);
	}
	public varargslist(): VarargslistContext | undefined {
		return this.tryGetRuleContext(0, VarargslistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_old_lambdef; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterOld_lambdef) listener.enterOld_lambdef(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitOld_lambdef) listener.exitOld_lambdef(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitOld_lambdef) return visitor.visitOld_lambdef(this);
		else return visitor.visitChildren(this);
	}
}


export class TestContext extends ParserRuleContext {
	public or_test(): Or_testContext[];
	public or_test(i: number): Or_testContext;
	public or_test(i?: number): Or_testContext | Or_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Or_testContext);
		} else {
			return this.getRuleContext(i, Or_testContext);
		}
	}
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	public lambdef(): LambdefContext | undefined {
		return this.tryGetRuleContext(0, LambdefContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_test; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterTest) listener.enterTest(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitTest) listener.exitTest(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitTest) return visitor.visitTest(this);
		else return visitor.visitChildren(this);
	}
}


export class Or_testContext extends ParserRuleContext {
	public and_test(): And_testContext[];
	public and_test(i: number): And_testContext;
	public and_test(i?: number): And_testContext | And_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(And_testContext);
		} else {
			return this.getRuleContext(i, And_testContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_or_test; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterOr_test) listener.enterOr_test(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitOr_test) listener.exitOr_test(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitOr_test) return visitor.visitOr_test(this);
		else return visitor.visitChildren(this);
	}
}


export class And_testContext extends ParserRuleContext {
	public not_test(): Not_testContext[];
	public not_test(i: number): Not_testContext;
	public not_test(i?: number): Not_testContext | Not_testContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Not_testContext);
		} else {
			return this.getRuleContext(i, Not_testContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_and_test; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterAnd_test) listener.enterAnd_test(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitAnd_test) listener.exitAnd_test(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitAnd_test) return visitor.visitAnd_test(this);
		else return visitor.visitChildren(this);
	}
}


export class Not_testContext extends ParserRuleContext {
	public not_test(): Not_testContext | undefined {
		return this.tryGetRuleContext(0, Not_testContext);
	}
	public comparison(): ComparisonContext | undefined {
		return this.tryGetRuleContext(0, ComparisonContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_not_test; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterNot_test) listener.enterNot_test(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitNot_test) listener.exitNot_test(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitNot_test) return visitor.visitNot_test(this);
		else return visitor.visitChildren(this);
	}
}


export class ComparisonContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public comp_op(): Comp_opContext[];
	public comp_op(i: number): Comp_opContext;
	public comp_op(i?: number): Comp_opContext | Comp_opContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Comp_opContext);
		} else {
			return this.getRuleContext(i, Comp_opContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_comparison; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterComparison) listener.enterComparison(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitComparison) listener.exitComparison(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitComparison) return visitor.visitComparison(this);
		else return visitor.visitChildren(this);
	}
}


export class Comp_opContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_comp_op; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterComp_op) listener.enterComp_op(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitComp_op) listener.exitComp_op(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitComp_op) return visitor.visitComp_op(this);
		else return visitor.visitChildren(this);
	}
}


export class ExprContext extends ParserRuleContext {
	public xor_expr(): Xor_exprContext[];
	public xor_expr(i: number): Xor_exprContext;
	public xor_expr(i?: number): Xor_exprContext | Xor_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Xor_exprContext);
		} else {
			return this.getRuleContext(i, Xor_exprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_expr; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterExpr) listener.enterExpr(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitExpr) listener.exitExpr(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitExpr) return visitor.visitExpr(this);
		else return visitor.visitChildren(this);
	}
}


export class Xor_exprContext extends ParserRuleContext {
	public and_expr(): And_exprContext[];
	public and_expr(i: number): And_exprContext;
	public and_expr(i?: number): And_exprContext | And_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(And_exprContext);
		} else {
			return this.getRuleContext(i, And_exprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_xor_expr; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterXor_expr) listener.enterXor_expr(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitXor_expr) listener.exitXor_expr(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitXor_expr) return visitor.visitXor_expr(this);
		else return visitor.visitChildren(this);
	}
}


export class And_exprContext extends ParserRuleContext {
	public shift_expr(): Shift_exprContext[];
	public shift_expr(i: number): Shift_exprContext;
	public shift_expr(i?: number): Shift_exprContext | Shift_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Shift_exprContext);
		} else {
			return this.getRuleContext(i, Shift_exprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_and_expr; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterAnd_expr) listener.enterAnd_expr(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitAnd_expr) listener.exitAnd_expr(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitAnd_expr) return visitor.visitAnd_expr(this);
		else return visitor.visitChildren(this);
	}
}


export class Shift_exprContext extends ParserRuleContext {
	public arith_expr(): Arith_exprContext[];
	public arith_expr(i: number): Arith_exprContext;
	public arith_expr(i?: number): Arith_exprContext | Arith_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Arith_exprContext);
		} else {
			return this.getRuleContext(i, Arith_exprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_shift_expr; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterShift_expr) listener.enterShift_expr(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitShift_expr) listener.exitShift_expr(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitShift_expr) return visitor.visitShift_expr(this);
		else return visitor.visitChildren(this);
	}
}


export class Arith_exprContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_arith_expr; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterArith_expr) listener.enterArith_expr(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitArith_expr) listener.exitArith_expr(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitArith_expr) return visitor.visitArith_expr(this);
		else return visitor.visitChildren(this);
	}
}


export class TermContext extends ParserRuleContext {
	public factor(): FactorContext[];
	public factor(i: number): FactorContext;
	public factor(i?: number): FactorContext | FactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FactorContext);
		} else {
			return this.getRuleContext(i, FactorContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_term; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterTerm) listener.enterTerm(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitTerm) listener.exitTerm(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitTerm) return visitor.visitTerm(this);
		else return visitor.visitChildren(this);
	}
}


export class FactorContext extends ParserRuleContext {
	public factor(): FactorContext | undefined {
		return this.tryGetRuleContext(0, FactorContext);
	}
	public power(): PowerContext | undefined {
		return this.tryGetRuleContext(0, PowerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_factor; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterFactor) listener.enterFactor(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitFactor) listener.exitFactor(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitFactor) return visitor.visitFactor(this);
		else return visitor.visitChildren(this);
	}
}


export class PowerContext extends ParserRuleContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	public trailer(): TrailerContext[];
	public trailer(i: number): TrailerContext;
	public trailer(i?: number): TrailerContext | TrailerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TrailerContext);
		} else {
			return this.getRuleContext(i, TrailerContext);
		}
	}
	public factor(): FactorContext | undefined {
		return this.tryGetRuleContext(0, FactorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_power; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterPower) listener.enterPower(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitPower) listener.exitPower(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitPower) return visitor.visitPower(this);
		else return visitor.visitChildren(this);
	}
}


export class AtomContext extends ParserRuleContext {
	public testlist1(): Testlist1Context | undefined {
		return this.tryGetRuleContext(0, Testlist1Context);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Python2Parser.NAME, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(Python2Parser.NUMBER, 0); }
	public yield_expr(): Yield_exprContext | undefined {
		return this.tryGetRuleContext(0, Yield_exprContext);
	}
	public testlist_comp(): Testlist_compContext | undefined {
		return this.tryGetRuleContext(0, Testlist_compContext);
	}
	public listmaker(): ListmakerContext | undefined {
		return this.tryGetRuleContext(0, ListmakerContext);
	}
	public dictorsetmaker(): DictorsetmakerContext | undefined {
		return this.tryGetRuleContext(0, DictorsetmakerContext);
	}
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Python2Parser.STRING);
		} else {
			return this.getToken(Python2Parser.STRING, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_atom; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterAtom) listener.enterAtom(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitAtom) listener.exitAtom(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitAtom) return visitor.visitAtom(this);
		else return visitor.visitChildren(this);
	}
}


export class ListmakerContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public list_for(): List_forContext | undefined {
		return this.tryGetRuleContext(0, List_forContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_listmaker; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterListmaker) listener.enterListmaker(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitListmaker) listener.exitListmaker(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitListmaker) return visitor.visitListmaker(this);
		else return visitor.visitChildren(this);
	}
}


export class Testlist_compContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_testlist_comp; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterTestlist_comp) listener.enterTestlist_comp(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitTestlist_comp) listener.exitTestlist_comp(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitTestlist_comp) return visitor.visitTestlist_comp(this);
		else return visitor.visitChildren(this);
	}
}


export class LambdefContext extends ParserRuleContext {
	public test(): TestContext {
		return this.getRuleContext(0, TestContext);
	}
	public varargslist(): VarargslistContext | undefined {
		return this.tryGetRuleContext(0, VarargslistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_lambdef; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterLambdef) listener.enterLambdef(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitLambdef) listener.exitLambdef(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitLambdef) return visitor.visitLambdef(this);
		else return visitor.visitChildren(this);
	}
}


export class TrailerContext extends ParserRuleContext {
	public arglist(): ArglistContext | undefined {
		return this.tryGetRuleContext(0, ArglistContext);
	}
	public subscriptlist(): SubscriptlistContext | undefined {
		return this.tryGetRuleContext(0, SubscriptlistContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(Python2Parser.NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_trailer; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterTrailer) listener.enterTrailer(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitTrailer) listener.exitTrailer(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitTrailer) return visitor.visitTrailer(this);
		else return visitor.visitChildren(this);
	}
}


export class SubscriptlistContext extends ParserRuleContext {
	public subscript(): SubscriptContext[];
	public subscript(i: number): SubscriptContext;
	public subscript(i?: number): SubscriptContext | SubscriptContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubscriptContext);
		} else {
			return this.getRuleContext(i, SubscriptContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_subscriptlist; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterSubscriptlist) listener.enterSubscriptlist(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitSubscriptlist) listener.exitSubscriptlist(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitSubscriptlist) return visitor.visitSubscriptlist(this);
		else return visitor.visitChildren(this);
	}
}


export class SubscriptContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public sliceop(): SliceopContext | undefined {
		return this.tryGetRuleContext(0, SliceopContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_subscript; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterSubscript) listener.enterSubscript(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitSubscript) listener.exitSubscript(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitSubscript) return visitor.visitSubscript(this);
		else return visitor.visitChildren(this);
	}
}


export class SliceopContext extends ParserRuleContext {
	public test(): TestContext | undefined {
		return this.tryGetRuleContext(0, TestContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_sliceop; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterSliceop) listener.enterSliceop(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitSliceop) listener.exitSliceop(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitSliceop) return visitor.visitSliceop(this);
		else return visitor.visitChildren(this);
	}
}


export class ExprlistContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_exprlist; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterExprlist) listener.enterExprlist(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitExprlist) listener.exitExprlist(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitExprlist) return visitor.visitExprlist(this);
		else return visitor.visitChildren(this);
	}
}


export class TestlistContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_testlist; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterTestlist) listener.enterTestlist(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitTestlist) listener.exitTestlist(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitTestlist) return visitor.visitTestlist(this);
		else return visitor.visitChildren(this);
	}
}


export class DictorsetmakerContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_dictorsetmaker; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterDictorsetmaker) listener.enterDictorsetmaker(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitDictorsetmaker) listener.exitDictorsetmaker(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitDictorsetmaker) return visitor.visitDictorsetmaker(this);
		else return visitor.visitChildren(this);
	}
}


export class ClassdefContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Python2Parser.NAME, 0); }
	public suite(): SuiteContext {
		return this.getRuleContext(0, SuiteContext);
	}
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_classdef; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterClassdef) listener.enterClassdef(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitClassdef) listener.exitClassdef(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitClassdef) return visitor.visitClassdef(this);
		else return visitor.visitChildren(this);
	}
}


export class ArglistContext extends ParserRuleContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_arglist; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterArglist) listener.enterArglist(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitArglist) listener.exitArglist(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitArglist) return visitor.visitArglist(this);
		else return visitor.visitChildren(this);
	}
}


export class ArgumentContext extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_argument; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterArgument) listener.enterArgument(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitArgument) listener.exitArgument(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitArgument) return visitor.visitArgument(this);
		else return visitor.visitChildren(this);
	}
}


export class List_iterContext extends ParserRuleContext {
	public list_for(): List_forContext | undefined {
		return this.tryGetRuleContext(0, List_forContext);
	}
	public list_if(): List_ifContext | undefined {
		return this.tryGetRuleContext(0, List_ifContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_list_iter; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterList_iter) listener.enterList_iter(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitList_iter) listener.exitList_iter(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitList_iter) return visitor.visitList_iter(this);
		else return visitor.visitChildren(this);
	}
}


export class List_forContext extends ParserRuleContext {
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	public testlist_safe(): Testlist_safeContext {
		return this.getRuleContext(0, Testlist_safeContext);
	}
	public list_iter(): List_iterContext | undefined {
		return this.tryGetRuleContext(0, List_iterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_list_for; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterList_for) listener.enterList_for(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitList_for) listener.exitList_for(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitList_for) return visitor.visitList_for(this);
		else return visitor.visitChildren(this);
	}
}


export class List_ifContext extends ParserRuleContext {
	public old_test(): Old_testContext {
		return this.getRuleContext(0, Old_testContext);
	}
	public list_iter(): List_iterContext | undefined {
		return this.tryGetRuleContext(0, List_iterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_list_if; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterList_if) listener.enterList_if(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitList_if) listener.exitList_if(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitList_if) return visitor.visitList_if(this);
		else return visitor.visitChildren(this);
	}
}


export class Comp_iterContext extends ParserRuleContext {
	public comp_for(): Comp_forContext | undefined {
		return this.tryGetRuleContext(0, Comp_forContext);
	}
	public comp_if(): Comp_ifContext | undefined {
		return this.tryGetRuleContext(0, Comp_ifContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_comp_iter; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterComp_iter) listener.enterComp_iter(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitComp_iter) listener.exitComp_iter(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitComp_iter) return visitor.visitComp_iter(this);
		else return visitor.visitChildren(this);
	}
}


export class Comp_forContext extends ParserRuleContext {
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	public or_test(): Or_testContext {
		return this.getRuleContext(0, Or_testContext);
	}
	public comp_iter(): Comp_iterContext | undefined {
		return this.tryGetRuleContext(0, Comp_iterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_comp_for; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterComp_for) listener.enterComp_for(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitComp_for) listener.exitComp_for(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitComp_for) return visitor.visitComp_for(this);
		else return visitor.visitChildren(this);
	}
}


export class Comp_ifContext extends ParserRuleContext {
	public old_test(): Old_testContext {
		return this.getRuleContext(0, Old_testContext);
	}
	public comp_iter(): Comp_iterContext | undefined {
		return this.tryGetRuleContext(0, Comp_iterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_comp_if; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterComp_if) listener.enterComp_if(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitComp_if) listener.exitComp_if(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitComp_if) return visitor.visitComp_if(this);
		else return visitor.visitChildren(this);
	}
}


export class Testlist1Context extends ParserRuleContext {
	public test(): TestContext[];
	public test(i: number): TestContext;
	public test(i?: number): TestContext | TestContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TestContext);
		} else {
			return this.getRuleContext(i, TestContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_testlist1; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterTestlist1) listener.enterTestlist1(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitTestlist1) listener.exitTestlist1(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitTestlist1) return visitor.visitTestlist1(this);
		else return visitor.visitChildren(this);
	}
}


export class Encoding_declContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(Python2Parser.NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_encoding_decl; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterEncoding_decl) listener.enterEncoding_decl(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitEncoding_decl) listener.exitEncoding_decl(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitEncoding_decl) return visitor.visitEncoding_decl(this);
		else return visitor.visitChildren(this);
	}
}


export class Yield_exprContext extends ParserRuleContext {
	public testlist(): TestlistContext | undefined {
		return this.tryGetRuleContext(0, TestlistContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return Python2Parser.RULE_yield_expr; }
	@Override
	public enterRule(listener: Python2Listener): void {
		if (listener.enterYield_expr) listener.enterYield_expr(this);
	}
	@Override
	public exitRule(listener: Python2Listener): void {
		if (listener.exitYield_expr) listener.exitYield_expr(this);
	}
	@Override
	public accept<Result>(visitor: Python2Visitor<Result>): Result {
		if (visitor.visitYield_expr) return visitor.visitYield_expr(this);
		else return visitor.visitChildren(this);
	}
}


