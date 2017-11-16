// Generated from src/tree/ast/antlr/python2/Python2.g4 by ANTLR 4.6-SNAPSHOT



import { Python2Parser } from "./Python2Parser";
import { Token } from "antlr4ts/Token";
import { CommonToken } from "antlr4ts";


class IndentStack {
    _s: number[] = [];
    empty() { return this._s.length === 0; }
    push(wsval) { this._s.push(wsval); }
    pop() { this._s.pop(); }
    wsval() { return (!this.empty()) ? this._s[this._s.length - 1] : 0; }
}

class TokenQueue {
    _q: any[] = [];
    empty()  { return this._q.length === 0; }
    enq(t) { this._q.push(t); }
    deq(){ return this._q.shift(); }
}


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';


export class Python2Lexer extends Lexer {
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
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE"
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
		"T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40", 
		"T__41", "T__42", "T__43", "T__44", "T__45", "T__46", "T__47", "T__48", 
		"T__49", "T__50", "T__51", "T__52", "T__53", "T__54", "T__55", "T__56", 
		"T__57", "T__58", "T__59", "T__60", "T__61", "T__62", "T__63", "T__64", 
		"T__65", "T__66", "T__67", "T__68", "NAME", "NUMBER", "STRING", "LINENDING", 
		"WHITESPACE", "COMMENT", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", 
		"OPEN_BRACKET", "CLOSE_BRACKET", "UNKNOWN"
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
		"UNKNOWN"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Python2Lexer._LITERAL_NAMES, Python2Lexer._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return Python2Lexer.VOCABULARY;
	}


	    // Indented to append code to the constructor.
	    openBRCount: number       = 0;
	    suppressNewlines: boolean  = false;
	    lineContinuation: boolean  = false;
	    private _tokens            = new TokenQueue();
	    private _indents           = new IndentStack();

	    private _tokenStartColumn: number;

	 nextToken() {
	    if (!this._tokens.empty())
	        return this._tokens.deq();
	    else {
	        const t = super.nextToken();
	        if (t.type !== Token.EOF)
	            return t;
	        else {
	            if (!this.suppressNewlines)
	                this.emitNewline();
	            this.emitFullDedent();
	            this.emitEndmarker();
	            this.emitEndToken(t);
	            return this._tokens.deq();
	            }
	       }
	     }
	            
	 emitEndToken(token) {
	    this._tokens.enq(token);
	    }

	 emitIndent(length=0, text='INDENT') {
	    const t = this.createToken(Python2Parser.INDENT, text, length);
	    this._tokens.enq(t);
	    }

	 emitDedent() {
	    const t = this.createToken(Python2Parser.DEDENT, 'DEDENT');
	    this._tokens.enq(t);
	    }

	 emitFullDedent() {
	    while (!this._indents.empty()) {
	        this._indents.pop();
	        this.emitDedent();
	      }
	   }

	 emitEndmarker() {
	    const t = this.createToken(Python2Parser.ENDMARKER, 'ENDMARKER');
	    this._tokens.enq(t);
	    }

	 emitNewline() {
	    const t = this.createToken(Python2Parser.NEWLINE, 'NEWLINE');
	    this._tokens.enq(t);
	    }

	 createToken(type_, text="", length=0) {
	    const start = this._tokenStartCharIndex
	    const stop = start + length
	    const t = new CommonToken(type_, text, this._tokenFactorySourcePair,
	    	                    Python2Lexer.DEFAULT_TOKEN_CHANNEL,
	    	                    start, stop);
	    t.text = text
	    return t;
	   }



	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(Python2Lexer._ATN, this);
	}

	@Override
	public get grammarFileName(): string { return "Python2.g4"; }

	@Override
	public get ruleNames(): string[] { return Python2Lexer.ruleNames; }

	@Override
	public get serializedATN(): string { return Python2Lexer._serializedATN; }

	@Override
	public get modeNames(): string[] { return Python2Lexer.modeNames; }

	@Override
	action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 72:
			this.LINENDING_action(_localctx, actionIndex);
			break;

		case 73:
			this.WHITESPACE_action(_localctx, actionIndex);
			break;

		case 75:
			this.OPEN_PAREN_action(_localctx, actionIndex);
			break;

		case 76:
			this.CLOSE_PAREN_action(_localctx, actionIndex);
			break;

		case 77:
			this.OPEN_BRACE_action(_localctx, actionIndex);
			break;

		case 78:
			this.CLOSE_BRACE_action(_localctx, actionIndex);
			break;

		case 79:
			this.OPEN_BRACKET_action(_localctx, actionIndex);
			break;

		case 80:
			this.CLOSE_BRACKET_action(_localctx, actionIndex);
			break;
		}
	}
	private LINENDING_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			this.lineContinuation=false
			break;

		case 1:
			this.lineContinuation=false
			break;

		case 2:

			if (this.openBRCount === 0 && !this.lineContinuation) {
			    if (!this.suppressNewlines) {
			        this.emitNewline()
			        this.suppressNewlines = true;
			    const la = this._input.LA(1)
			    if (![' ', '\t','#'].map(c => c.charCodeAt(0)).concat(-1).includes(la)) {
			        this.suppressNewlines = false
			        this.emitFullDedent()
			        }
			        }
			        }

			break;
		}
	}
	private WHITESPACE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 3:

			if (this._tokenStartColumn == 0 && this.openBRCount == 0
			    && !this.lineContinuation) {

			    const la = this._input.LA(1)
			    if (!['\r', '\n','#'].map(c => c.charCodeAt(0)).includes(la)) {
			        this.suppressNewlines = false
			        let wsCount = 0;
			        for (let ch of this.text) {
			            if  ( ch === ' ') wsCount += 1
			            else if( ch === '\t') wsCount += 8;
			            }

			        if (wsCount > this._indents.wsval() ){
			            this.emitIndent(this.text.length);
			            this._indents.push(wsCount);
			            }
			        else {
			            while (wsCount < this._indents.wsval()) {
			                this.emitDedent();
			                this._indents.pop();
			            if (wsCount !== this._indents.wsval()) {
			                throw new Error();
			                }
			                }
			                }
			                }
			                }

			break;
		}
	}
	private OPEN_PAREN_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 4:
			this.openBRCount  += 1
			break;
		}
	}
	private CLOSE_PAREN_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 5:
			this.openBRCount  -= 1
			break;
		}
	}
	private OPEN_BRACE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 6:
			this.openBRCount  += 1
			break;
		}
	}
	private CLOSE_BRACE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 7:
			this.openBRCount  -= 1
			break;
		}
	}
	private OPEN_BRACKET_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 8:
			this.openBRCount  += 1
			break;
		}
	}
	private CLOSE_BRACKET_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 9:
			this.openBRCount  -= 1
			break;
		}
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02T\u02B3\b\x01"+
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06"+
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r"+
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t"+
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t"+
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t"+
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t"+
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04"+
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04"+
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04"+
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04"+
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x03\x02\x03\x02\x03\x03\x03\x03\x03"+
		"\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03"+
		"\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v"+
		"\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03"+
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03"+
		"\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03"+
		"\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03"+
		"\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03"+
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03"+
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03"+
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03"+
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03"+
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03 \x03!\x03!"+
		"\x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03"+
		"#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03&\x03&\x03&\x03"+
		"&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03"+
		")\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03"+
		"+\x03+\x03,\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03"+
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x030\x030\x030\x030\x03"+
		"1\x031\x031\x031\x032\x032\x033\x033\x034\x034\x034\x035\x035\x035\x03"+
		"6\x036\x036\x037\x037\x037\x038\x038\x038\x039\x039\x039\x03:\x03:\x03"+
		";\x03;\x03<\x03<\x03=\x03=\x03=\x03>\x03>\x03?\x03?\x03@\x03@\x03A\x03"+
		"A\x03B\x03B\x03B\x03C\x03C\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03E\x03"+
		"F\x03F\x03F\x03F\x03F\x03F\x03G\x03G\x07G\u01AF\nG\fG\x0EG\u01B2\vG\x03"+
		"H\x03H\x03H\x06H\u01B7\nH\rH\x0EH\u01B8\x03H\x03H\x03H\x05H\u01BE\nH\x03"+
		"H\x06H\u01C1\nH\rH\x0EH\u01C2\x05H\u01C5\nH\x03H\x03H\x06H\u01C9\nH\r"+
		"H\x0EH\u01CA\x03H\x05H\u01CE\nH\x03H\x03H\x06H\u01D2\nH\rH\x0EH\u01D3"+
		"\x03H\x05H\u01D7\nH\x05H\u01D9\nH\x03H\x06H\u01DC\nH\rH\x0EH\u01DD\x03"+
		"H\x03H\x07H\u01E2\nH\fH\x0EH\u01E5\vH\x03H\x03H\x06H\u01E9\nH\rH\x0EH"+
		"\u01EA\x05H\u01ED\nH\x03H\x03H\x05H\u01F1\nH\x03H\x06H\u01F4\nH\rH\x0E"+
		"H\u01F5\x05H\u01F8\nH\x03H\x05H\u01FB\nH\x03H\x06H\u01FE\nH\rH\x0EH\u01FF"+
		"\x03H\x03H\x03H\x05H\u0205\nH\x03H\x06H\u0208\nH\rH\x0EH\u0209\x03H\x05"+
		"H\u020D\nH\x03H\x05H\u0210\nH\x05H\u0212\nH\x03I\x05I\u0215\nI\x03I\x05"+
		"I\u0218\nI\x03I\x05I\u021B\nI\x03I\x05I\u021E\nI\x05I\u0220\nI\x03I\x03"+
		"I\x03I\x06I\u0225\nI\rI\x0EI\u0226\x03I\x05I\u022A\nI\x03I\x05I\u022D"+
		"\nI\x03I\x05I\u0230\nI\x03I\x07I\u0233\nI\fI\x0EI\u0236\vI\x03I\x03I\x03"+
		"I\x03I\x06I\u023C\nI\rI\x0EI\u023D\x03I\x05I\u0241\nI\x03I\x05I\u0244"+
		"\nI\x03I\x05I\u0247\nI\x03I\x07I\u024A\nI\fI\x0EI\u024D\vI\x03I\x03I\x03"+
		"I\x03I\x03I\x03I\x03I\x03I\x07I\u0257\nI\fI\x0EI\u025A\vI\x03I\x03I\x03"+
		"I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x07I\u0266\nI\fI\x0EI\u0269\vI\x03"+
		"I\x03I\x03I\x05I\u026E\nI\x03J\x05J\u0271\nJ\x03J\x06J\u0274\nJ\rJ\x0E"+
		"J\u0275\x03J\x03J\x03J\x07J\u027B\nJ\fJ\x0EJ\u027E\vJ\x03J\x05J\u0281"+
		"\nJ\x03J\x03J\x03J\x05J\u0286\nJ\x03J\x03J\x03J\x03J\x03K\x06K\u028D\n"+
		"K\rK\x0EK\u028E\x03K\x03K\x03K\x03K\x03L\x03L\x07L\u0297\nL\fL\x0EL\u029A"+
		"\vL\x03L\x03L\x03M\x03M\x03M\x03N\x03N\x03N\x03O\x03O\x03O\x03P\x03P\x03"+
		"P\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03S\x03S\x03S\x03S\x04\u0258\u0267\x02"+
		"\x02T\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b"+
		"\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02"+
		"\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02"+
		"\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02"+
		"\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02&K\x02\'M\x02("+
		"O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022c\x023e\x02"+
		"4g\x025i\x026k\x027m\x028o\x029q\x02:s\x02;u\x02<w\x02=y\x02>{\x02?}\x02"+
		"@\x7F\x02A\x81\x02B\x83\x02C\x85\x02D\x87\x02E\x89\x02F\x8B\x02G\x8D\x02"+
		"H\x8F\x02I\x91\x02J\x93\x02K\x95\x02L\x97\x02M\x99\x02N\x9B\x02O\x9D\x02"+
		"P\x9F\x02Q\xA1\x02R\xA3\x02S\xA5\x02T\x03\x02\x16\x05\x02C\\aac|\x06\x02"+
		"2;C\\aac|\x04\x02ZZzz\x05\x022;CHch\x04\x02NNnn\x04\x02GGgg\x04\x02--"+
		"//\x03\x022;\x04\x02QQqq\x03\x0229\x04\x02DDdd\x03\x0223\x04\x02LLll\x06"+
		"\x02DDWWddww\x04\x02TTtt\x04\x02\v\v\"\"\x06\x02\f\f\x0F\x0F))^^\x06\x02"+
		"\f\f\x0F\x0F$$^^\x03\x02^^\x04\x02\f\f\x0F\x0F\u02EE\x02\x03\x03\x02\x02"+
		"\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02"+
		"\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02"+
		"\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02"+
		"\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02"+
		"\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02"+
		"\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)"+
		"\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02"+
		"\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02"+
		"\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03"+
		"\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02"+
		"\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02"+
		"K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02"+
		"\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02"+
		"\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03"+
		"\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02"+
		"\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02"+
		"m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02"+
		"\x02\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02"+
		"\x02{\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02"+
		"\x81\x03\x02\x02\x02\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02"+
		"\x87\x03\x02\x02\x02\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02"+
		"\x8D\x03\x02\x02\x02\x02\x8F\x03\x02\x02\x02\x02\x91\x03\x02\x02\x02\x02"+
		"\x93\x03\x02\x02\x02\x02\x95\x03\x02\x02\x02\x02\x97\x03\x02\x02\x02\x02"+
		"\x99\x03\x02\x02\x02\x02\x9B\x03\x02\x02\x02\x02\x9D\x03\x02\x02\x02\x02"+
		"\x9F\x03\x02\x02\x02\x02\xA1\x03\x02\x02\x02\x02\xA3\x03\x02\x02\x02\x02"+
		"\xA5\x03\x02\x02\x02\x03\xA7\x03\x02\x02\x02\x05\xA9\x03\x02\x02\x02\x07"+
		"\xAD\x03\x02\x02\x02\t\xAF\x03\x02\x02\x02\v\xB1\x03\x02\x02\x02\r\xB3"+
		"\x03\x02\x02\x02\x0F\xB5\x03\x02\x02\x02\x11\xB8\x03\x02\x02\x02\x13\xBA"+
		"\x03\x02\x02\x02\x15\xBD\x03\x02\x02\x02\x17\xC0\x03\x02\x02\x02\x19\xC3"+
		"\x03\x02\x02\x02\x1B\xC6\x03\x02\x02\x02\x1D\xC9\x03\x02\x02\x02\x1F\xCC"+
		"\x03\x02\x02\x02!\xCF\x03\x02\x02\x02#\xD2\x03\x02\x02\x02%\xD6\x03\x02"+
		"\x02\x02\'\xDA\x03\x02\x02\x02)\xDE\x03\x02\x02\x02+\xE2\x03\x02\x02\x02"+
		"-\xE5\x03\x02\x02\x02/\xE9\x03\x02\x02\x021\xEE\x03\x02\x02\x023\xF4\x03"+
		"\x02\x02\x025\xFD\x03\x02\x02\x027\u0104\x03\x02\x02\x029\u010A\x03\x02"+
		"\x02\x02;\u0111\x03\x02\x02\x02=\u0116\x03\x02\x02\x02?\u0118\x03\x02"+
		"\x02\x02A\u011B\x03\x02\x02\x02C\u0122\x03\x02\x02\x02E\u0127\x03\x02"+
		"\x02\x02G\u012A\x03\x02\x02\x02I\u0131\x03\x02\x02\x02K\u0134\x03\x02"+
		"\x02\x02M\u0139\x03\x02\x02\x02O\u013E\x03\x02\x02\x02Q\u0144\x03\x02"+
		"\x02\x02S\u0148\x03\x02\x02\x02U\u014C\x03\x02\x02\x02W\u0154\x03\x02"+
		"\x02\x02Y\u0159\x03\x02\x02\x02[\u0160\x03\x02\x02\x02]\u0167\x03\x02"+
		"\x02\x02_\u016A\x03\x02\x02\x02a\u016E\x03\x02\x02\x02c\u0172\x03\x02"+
		"\x02\x02e\u0174\x03\x02\x02\x02g\u0176\x03\x02\x02\x02i\u0179\x03\x02"+
		"\x02\x02k\u017C\x03\x02\x02\x02m\u017F\x03\x02\x02\x02o\u0182\x03\x02"+
		"\x02\x02q\u0185\x03\x02\x02\x02s\u0188\x03\x02\x02\x02u\u018A\x03\x02"+
		"\x02\x02w\u018C\x03\x02\x02\x02y\u018E\x03\x02\x02\x02{\u0191\x03\x02"+
		"\x02\x02}\u0193\x03\x02\x02\x02\x7F\u0195\x03\x02\x02\x02\x81\u0197\x03"+
		"\x02\x02\x02\x83\u0199\x03\x02\x02\x02\x85\u019C\x03\x02\x02\x02\x87\u019E"+
		"\x03\x02\x02\x02\x89\u01A0\x03\x02\x02\x02\x8B\u01A6\x03\x02\x02\x02\x8D"+
		"\u01AC\x03\x02\x02\x02\x8F\u0211\x03\x02\x02\x02\x91\u021F\x03\x02\x02"+
		"\x02\x93\u0285\x03\x02\x02\x02\x95\u028C\x03\x02\x02\x02\x97\u0294\x03"+
		"\x02\x02\x02\x99\u029D\x03\x02\x02\x02\x9B\u02A0\x03\x02\x02\x02\x9D\u02A3"+
		"\x03\x02\x02\x02\x9F\u02A6\x03\x02\x02\x02\xA1\u02A9\x03\x02\x02\x02\xA3"+
		"\u02AC\x03\x02\x02\x02\xA5\u02AF\x03\x02\x02\x02\xA7\xA8\x07B\x02\x02"+
		"\xA8\x04\x03\x02\x02\x02\xA9\xAA\x07f\x02\x02\xAA\xAB\x07g\x02\x02\xAB"+
		"\xAC\x07h\x02\x02\xAC\x06\x03\x02\x02\x02\xAD\xAE\x07<\x02\x02\xAE\b\x03"+
		"\x02\x02\x02\xAF\xB0\x07?\x02\x02\xB0\n\x03\x02\x02\x02\xB1\xB2\x07.\x02"+
		"\x02\xB2\f\x03\x02\x02\x02\xB3\xB4\x07,\x02\x02\xB4\x0E\x03\x02\x02\x02"+
		"\xB5\xB6\x07,\x02\x02\xB6\xB7\x07,\x02\x02\xB7\x10\x03\x02\x02\x02\xB8"+
		"\xB9\x07=\x02\x02\xB9\x12\x03\x02\x02\x02\xBA\xBB\x07-\x02\x02\xBB\xBC"+
		"\x07?\x02\x02\xBC\x14\x03\x02\x02\x02\xBD\xBE\x07/\x02\x02\xBE\xBF\x07"+
		"?\x02\x02\xBF\x16\x03\x02\x02\x02\xC0\xC1\x07,\x02\x02\xC1\xC2\x07?\x02"+
		"\x02\xC2\x18\x03\x02\x02\x02\xC3\xC4\x071\x02\x02\xC4\xC5\x07?\x02\x02"+
		"\xC5\x1A\x03\x02\x02\x02\xC6\xC7\x07\'\x02\x02\xC7\xC8\x07?\x02\x02\xC8"+
		"\x1C\x03\x02\x02\x02\xC9\xCA\x07(\x02\x02\xCA\xCB\x07?\x02\x02\xCB\x1E"+
		"\x03\x02\x02\x02\xCC\xCD\x07~\x02\x02\xCD\xCE\x07?\x02\x02\xCE \x03\x02"+
		"\x02\x02\xCF\xD0\x07`\x02\x02\xD0\xD1\x07?\x02\x02\xD1\"\x03\x02\x02\x02"+
		"\xD2\xD3\x07>\x02\x02\xD3\xD4\x07>\x02\x02\xD4\xD5\x07?\x02\x02\xD5$\x03"+
		"\x02\x02\x02\xD6\xD7\x07@\x02\x02\xD7\xD8\x07@\x02\x02\xD8\xD9\x07?\x02"+
		"\x02\xD9&\x03\x02\x02\x02\xDA\xDB\x07,\x02\x02\xDB\xDC\x07,\x02\x02\xDC"+
		"\xDD\x07?\x02\x02\xDD(\x03\x02\x02\x02\xDE\xDF\x071\x02\x02\xDF\xE0\x07"+
		"1\x02\x02\xE0\xE1\x07?\x02\x02\xE1*\x03\x02\x02\x02\xE2\xE3\x07@\x02\x02"+
		"\xE3\xE4\x07@\x02\x02\xE4,\x03\x02\x02\x02\xE5\xE6\x07f\x02\x02\xE6\xE7"+
		"\x07g\x02\x02\xE7\xE8\x07n\x02\x02\xE8.\x03\x02\x02\x02\xE9\xEA\x07r\x02"+
		"\x02\xEA\xEB\x07c\x02\x02\xEB\xEC\x07u\x02\x02\xEC\xED\x07u\x02\x02\xED"+
		"0\x03\x02\x02\x02\xEE\xEF\x07d\x02\x02\xEF\xF0\x07t\x02\x02\xF0\xF1\x07"+
		"g\x02\x02\xF1\xF2\x07c\x02\x02\xF2\xF3\x07m\x02\x02\xF32\x03\x02\x02\x02"+
		"\xF4\xF5\x07e\x02\x02\xF5\xF6\x07q\x02\x02\xF6\xF7\x07p\x02\x02\xF7\xF8"+
		"\x07v\x02\x02\xF8\xF9\x07k\x02\x02\xF9\xFA\x07p\x02\x02\xFA\xFB\x07w\x02"+
		"\x02\xFB\xFC\x07g\x02\x02\xFC4\x03\x02\x02\x02\xFD\xFE\x07t\x02\x02\xFE"+
		"\xFF\x07g\x02\x02\xFF\u0100\x07v\x02\x02\u0100\u0101\x07w\x02\x02\u0101"+
		"\u0102\x07t\x02\x02\u0102\u0103\x07p\x02\x02\u01036\x03\x02\x02\x02\u0104"+
		"\u0105\x07t\x02\x02\u0105\u0106\x07c\x02\x02\u0106\u0107\x07k\x02\x02"+
		"\u0107\u0108\x07u\x02\x02\u0108\u0109\x07g\x02\x02\u01098\x03\x02\x02"+
		"\x02\u010A\u010B\x07k\x02\x02\u010B\u010C\x07o\x02\x02\u010C\u010D\x07"+
		"r\x02\x02\u010D\u010E\x07q\x02\x02\u010E\u010F\x07t\x02\x02\u010F\u0110"+
		"\x07v\x02\x02\u0110:\x03\x02\x02\x02\u0111\u0112\x07h\x02\x02\u0112\u0113"+
		"\x07t\x02\x02\u0113\u0114\x07q\x02\x02\u0114\u0115\x07o\x02\x02\u0115"+
		"<\x03\x02\x02\x02\u0116\u0117\x070\x02\x02\u0117>\x03\x02\x02\x02\u0118"+
		"\u0119\x07c\x02\x02\u0119\u011A\x07u\x02\x02\u011A@\x03\x02\x02\x02\u011B"+
		"\u011C\x07i\x02\x02\u011C\u011D\x07n\x02\x02\u011D\u011E\x07q\x02\x02"+
		"\u011E\u011F\x07d\x02\x02\u011F\u0120\x07c\x02\x02\u0120\u0121\x07n\x02"+
		"\x02\u0121B\x03\x02\x02\x02\u0122\u0123\x07g\x02\x02\u0123\u0124\x07z"+
		"\x02\x02\u0124\u0125\x07g\x02\x02\u0125\u0126\x07e\x02\x02\u0126D\x03"+
		"\x02\x02\x02\u0127\u0128\x07k\x02\x02\u0128\u0129\x07p\x02\x02\u0129F"+
		"\x03\x02\x02\x02\u012A\u012B\x07c\x02\x02\u012B\u012C\x07u\x02\x02\u012C"+
		"\u012D\x07u\x02\x02\u012D\u012E\x07g\x02\x02\u012E\u012F\x07t\x02\x02"+
		"\u012F\u0130\x07v\x02\x02\u0130H\x03\x02\x02\x02\u0131\u0132\x07k\x02"+
		"\x02\u0132\u0133\x07h\x02\x02\u0133J\x03\x02\x02\x02\u0134\u0135\x07g"+
		"\x02\x02\u0135\u0136\x07n\x02\x02\u0136\u0137\x07k\x02\x02\u0137\u0138"+
		"\x07h\x02\x02\u0138L\x03\x02\x02\x02\u0139\u013A\x07g\x02\x02\u013A\u013B"+
		"\x07n\x02\x02\u013B\u013C\x07u\x02\x02\u013C\u013D\x07g\x02\x02\u013D"+
		"N\x03\x02\x02\x02\u013E\u013F\x07y\x02\x02\u013F\u0140\x07j\x02\x02\u0140"+
		"\u0141\x07k\x02\x02\u0141\u0142\x07n\x02\x02\u0142\u0143\x07g\x02\x02"+
		"\u0143P\x03\x02\x02\x02\u0144\u0145\x07h\x02\x02\u0145\u0146\x07q\x02"+
		"\x02\u0146\u0147\x07t\x02\x02\u0147R\x03\x02\x02\x02\u0148\u0149\x07v"+
		"\x02\x02\u0149\u014A\x07t\x02\x02\u014A\u014B\x07{\x02\x02\u014BT\x03"+
		"\x02\x02\x02\u014C\u014D\x07h\x02\x02\u014D\u014E\x07k\x02\x02\u014E\u014F"+
		"\x07p\x02\x02\u014F\u0150\x07c\x02\x02\u0150\u0151\x07n\x02\x02\u0151"+
		"\u0152\x07n\x02\x02\u0152\u0153\x07{\x02\x02\u0153V\x03\x02\x02\x02\u0154"+
		"\u0155\x07y\x02\x02\u0155\u0156\x07k\x02\x02\u0156\u0157\x07v\x02\x02"+
		"\u0157\u0158\x07j\x02\x02\u0158X\x03\x02\x02\x02\u0159\u015A\x07g\x02"+
		"\x02\u015A\u015B\x07z\x02\x02\u015B\u015C\x07e\x02\x02\u015C\u015D\x07"+
		"g\x02\x02\u015D\u015E\x07r\x02\x02\u015E\u015F\x07v\x02\x02\u015FZ\x03"+
		"\x02\x02\x02\u0160\u0161\x07n\x02\x02\u0161\u0162\x07c\x02\x02\u0162\u0163"+
		"\x07o\x02\x02\u0163\u0164\x07d\x02\x02\u0164\u0165\x07f\x02\x02\u0165"+
		"\u0166\x07c\x02\x02\u0166\\\x03\x02\x02\x02\u0167\u0168\x07q\x02\x02\u0168"+
		"\u0169\x07t\x02\x02\u0169^\x03\x02\x02\x02\u016A\u016B\x07c\x02\x02\u016B"+
		"\u016C\x07p\x02\x02\u016C\u016D\x07f\x02\x02\u016D`\x03\x02\x02\x02\u016E"+
		"\u016F\x07p\x02\x02\u016F\u0170\x07q\x02\x02\u0170\u0171\x07v\x02\x02"+
		"\u0171b\x03\x02\x02\x02\u0172\u0173\x07>\x02\x02\u0173d\x03\x02\x02\x02"+
		"\u0174\u0175\x07@\x02\x02\u0175f\x03\x02\x02\x02\u0176\u0177\x07?\x02"+
		"\x02\u0177\u0178\x07?\x02\x02\u0178h\x03\x02\x02\x02\u0179\u017A\x07@"+
		"\x02\x02\u017A\u017B\x07?\x02\x02\u017Bj\x03\x02\x02\x02\u017C\u017D\x07"+
		">\x02\x02\u017D\u017E\x07?\x02\x02\u017El\x03\x02\x02\x02\u017F\u0180"+
		"\x07>\x02\x02\u0180\u0181\x07@\x02\x02\u0181n\x03\x02\x02\x02\u0182\u0183"+
		"\x07#\x02\x02\u0183\u0184\x07?\x02\x02\u0184p\x03\x02\x02\x02\u0185\u0186"+
		"\x07k\x02\x02\u0186\u0187\x07u\x02\x02\u0187r\x03\x02\x02\x02\u0188\u0189"+
		"\x07~\x02\x02\u0189t\x03\x02\x02\x02\u018A\u018B\x07`\x02\x02\u018Bv\x03"+
		"\x02\x02\x02\u018C\u018D\x07(\x02\x02\u018Dx\x03\x02\x02\x02\u018E\u018F"+
		"\x07>\x02\x02\u018F\u0190\x07>\x02\x02\u0190z\x03\x02\x02\x02\u0191\u0192"+
		"\x07-\x02\x02\u0192|\x03\x02\x02\x02\u0193\u0194\x07/\x02\x02\u0194~\x03"+
		"\x02\x02\x02\u0195\u0196\x071\x02\x02\u0196\x80\x03\x02\x02\x02\u0197"+
		"\u0198\x07\'\x02\x02\u0198\x82\x03\x02\x02\x02\u0199\u019A\x071\x02\x02"+
		"\u019A\u019B\x071\x02\x02\u019B\x84\x03\x02\x02\x02\u019C\u019D\x07\x80"+
		"\x02\x02\u019D\x86\x03\x02\x02\x02\u019E\u019F\x07b\x02\x02\u019F\x88"+
		"\x03\x02\x02\x02\u01A0\u01A1\x07e\x02\x02\u01A1\u01A2\x07n\x02\x02\u01A2"+
		"\u01A3\x07c\x02\x02\u01A3\u01A4\x07u\x02\x02\u01A4\u01A5\x07u\x02\x02"+
		"\u01A5\x8A\x03\x02\x02\x02\u01A6\u01A7\x07{\x02\x02\u01A7\u01A8\x07k\x02"+
		"\x02\u01A8\u01A9\x07g\x02\x02\u01A9\u01AA\x07n\x02\x02\u01AA\u01AB\x07"+
		"f\x02\x02\u01AB\x8C\x03\x02\x02\x02\u01AC\u01B0\t\x02\x02\x02\u01AD\u01AF"+
		"\t\x03\x02\x02\u01AE\u01AD\x03\x02\x02\x02\u01AF\u01B2\x03\x02\x02\x02"+
		"\u01B0\u01AE\x03\x02\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1\x8E\x03"+
		"\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B3\u01D8\x072\x02\x02\u01B4"+
		"\u01B6\t\x04\x02\x02\u01B5\u01B7\t\x05\x02\x02\u01B6\u01B5\x03\x02\x02"+
		"\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8\u01B9"+
		"\x03\x02\x02\x02\u01B9\u01C4\x03\x02\x02\x02\u01BA\u01C5\t\x06\x02\x02"+
		"\u01BB\u01BD\t\x07\x02\x02\u01BC\u01BE\t\b\x02\x02\u01BD\u01BC\x03\x02"+
		"\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01C0\x03\x02\x02\x02\u01BF"+
		"\u01C1\t\t\x02\x02\u01C0\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02"+
		"\x02\u01C2\u01C0\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C5"+
		"\x03\x02\x02\x02\u01C4\u01BA\x03\x02\x02\x02\u01C4\u01BB\x03\x02\x02\x02"+
		"\u01C4\u01C5\x03\x02\x02\x02\u01C5\u01D9\x03\x02\x02\x02\u01C6\u01C8\t"+
		"\n\x02\x02\u01C7\u01C9\t\v\x02\x02\u01C8\u01C7\x03\x02\x02\x02\u01C9\u01CA"+
		"\x03\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02"+
		"\u01CB\u01CD\x03\x02\x02\x02\u01CC\u01CE\t\x06\x02\x02\u01CD\u01CC\x03"+
		"\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01D9\x03\x02\x02\x02\u01CF"+
		"\u01D1\t\f\x02\x02\u01D0\u01D2\t\r\x02\x02\u01D1\u01D0\x03\x02\x02\x02"+
		"\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03"+
		"\x02\x02\x02\u01D4\u01D6\x03\x02\x02\x02\u01D5\u01D7\t\x06\x02\x02\u01D6"+
		"\u01D5\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D9\x03\x02"+
		"\x02\x02\u01D8\u01B4\x03\x02\x02\x02\u01D8\u01C6\x03\x02\x02\x02\u01D8"+
		"\u01CF\x03\x02\x02\x02\u01D9\u0212\x03\x02\x02\x02\u01DA\u01DC\t\t\x02"+
		"\x02\u01DB\u01DA\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01DB"+
		"\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02"+
		"\u01DF\u01E3\x070\x02\x02\u01E0\u01E2\t\t\x02\x02\u01E1\u01E0\x03\x02"+
		"\x02\x02\u01E2\u01E5\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3"+
		"\u01E4\x03\x02\x02\x02\u01E4\u01ED\x03\x02\x02\x02\u01E5\u01E3\x03\x02"+
		"\x02\x02\u01E6\u01E8\x070\x02\x02\u01E7\u01E9\t\t\x02\x02\u01E8\u01E7"+
		"\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02"+
		"\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01ED\x03\x02\x02\x02\u01EC\u01DB\x03"+
		"\x02\x02\x02\u01EC\u01E6\x03\x02\x02\x02\u01ED\u01F7\x03\x02\x02\x02\u01EE"+
		"\u01F0\t\x07\x02\x02\u01EF\u01F1\t\b\x02\x02\u01F0\u01EF\x03\x02\x02\x02"+
		"\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F3\x03\x02\x02\x02\u01F2\u01F4\t"+
		"\t\x02\x02\u01F3\u01F2\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5"+
		"\u01F3\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F8\x03\x02"+
		"\x02\x02\u01F7\u01EE\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8"+
		"\u01FA\x03\x02\x02\x02\u01F9\u01FB\t\x0E\x02\x02\u01FA\u01F9\x03\x02\x02"+
		"\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u0212\x03\x02\x02\x02\u01FC\u01FE";
	private static readonly _serializedATNSegment1: string =
		"\t\t\x02\x02\u01FD\u01FC\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF"+
		"\u01FD\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02\u0200\u020F\x03\x02"+
		"\x02\x02\u0201\u0210\t\x06\x02\x02\u0202\u0204\t\x07\x02\x02\u0203\u0205"+
		"\t\b\x02\x02\u0204\u0203\x03\x02\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205"+
		"\u0207\x03\x02\x02\x02\u0206\u0208\t\t\x02\x02\u0207\u0206\x03\x02\x02"+
		"\x02\u0208\u0209\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u0209\u020A"+
		"\x03\x02\x02\x02\u020A\u020C\x03\x02\x02\x02\u020B\u020D\t\x0E\x02\x02"+
		"\u020C\u020B\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D\u0210\x03"+
		"\x02\x02\x02\u020E\u0210\t\x0E\x02\x02\u020F\u0201\x03\x02\x02\x02\u020F"+
		"\u0202\x03\x02\x02\x02\u020F\u020E\x03\x02\x02\x02\u020F\u0210\x03\x02"+
		"\x02\x02\u0210\u0212\x03\x02\x02\x02\u0211\u01B3\x03\x02\x02\x02\u0211"+
		"\u01EC\x03\x02\x02\x02\u0211\u01FD\x03\x02\x02\x02\u0212\x90\x03\x02\x02"+
		"\x02\u0213\u0215\t\x0F\x02\x02\u0214\u0213\x03\x02\x02\x02\u0214\u0215"+
		"\x03\x02\x02\x02\u0215\u0217\x03\x02\x02\x02\u0216\u0218\t\x10\x02\x02"+
		"\u0217\u0216\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u0220\x03"+
		"\x02\x02\x02\u0219\u021B\t\x10\x02\x02\u021A\u0219\x03\x02\x02\x02\u021A"+
		"\u021B\x03\x02\x02\x02\u021B\u021D\x03\x02\x02\x02\u021C\u021E\t\x0F\x02"+
		"\x02\u021D\u021C\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E\u0220"+
		"\x03\x02\x02\x02\u021F\u0214\x03\x02\x02\x02\u021F\u021A\x03\x02\x02\x02"+
		"\u0220\u026D\x03\x02\x02\x02\u0221\u0234\x07)\x02\x02\u0222\u022F\x07"+
		"^\x02\x02\u0223\u0225\t\x11\x02\x02\u0224\u0223\x03\x02\x02\x02\u0225"+
		"\u0226\x03\x02\x02\x02\u0226\u0224\x03\x02\x02\x02\u0226\u0227\x03\x02"+
		"\x02\x02\u0227\u022C\x03\x02\x02\x02\u0228\u022A\x07\x0F\x02\x02\u0229"+
		"\u0228\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A\u022B\x03\x02"+
		"\x02\x02\u022B\u022D\x07\f\x02\x02\u022C\u0229\x03\x02\x02\x02\u022C\u022D"+
		"\x03\x02\x02\x02\u022D\u0230\x03\x02\x02\x02\u022E\u0230\v\x02\x02\x02"+
		"\u022F\u0224\x03\x02\x02\x02\u022F\u022E\x03\x02\x02\x02\u0230\u0233\x03"+
		"\x02\x02\x02\u0231\u0233\n\x12\x02\x02\u0232\u0222\x03\x02\x02\x02\u0232"+
		"\u0231\x03\x02\x02\x02\u0233\u0236\x03\x02\x02\x02\u0234\u0232\x03\x02"+
		"\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0237\x03\x02\x02\x02\u0236"+
		"\u0234\x03\x02\x02\x02\u0237\u026E\x07)\x02\x02\u0238\u024B\x07$\x02\x02"+
		"\u0239\u0246\x07^\x02\x02\u023A\u023C\t\x11\x02\x02\u023B\u023A\x03\x02"+
		"\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023D"+
		"\u023E\x03\x02\x02\x02\u023E\u0243\x03\x02\x02\x02\u023F\u0241\x07\x0F"+
		"\x02\x02\u0240\u023F\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241"+
		"\u0242\x03\x02\x02\x02\u0242\u0244\x07\f\x02\x02\u0243\u0240\x03\x02\x02"+
		"\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0247\x03\x02\x02\x02\u0245\u0247"+
		"\v\x02\x02\x02\u0246\u023B\x03\x02\x02\x02\u0246\u0245\x03\x02\x02\x02"+
		"\u0247\u024A\x03\x02\x02\x02\u0248\u024A\n\x13\x02\x02\u0249\u0239\x03"+
		"\x02\x02\x02\u0249\u0248\x03\x02\x02\x02\u024A\u024D\x03\x02\x02\x02\u024B"+
		"\u0249\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u024E\x03\x02"+
		"\x02\x02\u024D\u024B\x03\x02\x02\x02\u024E\u026E\x07$\x02\x02\u024F\u0250"+
		"\x07$\x02\x02\u0250\u0251\x07$\x02\x02\u0251\u0252\x07$\x02\x02\u0252"+
		"\u0258\x03\x02\x02\x02\u0253\u0254\x07^\x02\x02\u0254\u0257\v\x02\x02"+
		"\x02\u0255\u0257\n\x14\x02\x02\u0256\u0253\x03\x02\x02\x02\u0256\u0255"+
		"\x03\x02\x02\x02\u0257\u025A\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02"+
		"\u0258\u0256\x03\x02\x02\x02\u0259\u025B\x03\x02\x02\x02\u025A\u0258\x03"+
		"\x02\x02\x02\u025B\u025C\x07$\x02\x02\u025C\u025D\x07$\x02\x02\u025D\u026E"+
		"\x07$\x02\x02\u025E\u025F\x07)\x02\x02\u025F\u0260\x07)\x02\x02\u0260"+
		"\u0261\x07)\x02\x02\u0261\u0267\x03\x02\x02\x02\u0262\u0263\x07^\x02\x02"+
		"\u0263\u0266\v\x02\x02\x02\u0264\u0266\n\x14\x02\x02\u0265\u0262\x03\x02"+
		"\x02\x02\u0265\u0264\x03\x02\x02\x02\u0266\u0269\x03\x02\x02\x02\u0267"+
		"\u0268\x03\x02\x02\x02\u0267\u0265\x03\x02\x02\x02\u0268\u026A\x03\x02"+
		"\x02\x02\u0269\u0267\x03\x02\x02\x02\u026A\u026B\x07)\x02\x02\u026B\u026C"+
		"\x07)\x02\x02\u026C\u026E\x07)\x02\x02\u026D\u0221\x03\x02\x02\x02\u026D"+
		"\u0238\x03\x02\x02\x02\u026D\u024F\x03\x02\x02\x02\u026D\u025E\x03\x02"+
		"\x02\x02\u026E\x92\x03\x02\x02\x02\u026F\u0271\x07\x0F\x02\x02\u0270\u026F"+
		"\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02"+
		"\u0272\u0274\x07\f\x02\x02\u0273\u0270\x03\x02\x02\x02\u0274\u0275\x03"+
		"\x02\x02\x02\u0275\u0273\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276"+
		"\u0277\x03\x02\x02\x02\u0277\u0286\bJ\x02\x02\u0278\u027C\x07^\x02\x02"+
		"\u0279\u027B\t\x11\x02\x02\u027A\u0279\x03\x02\x02\x02\u027B\u027E\x03"+
		"\x02\x02\x02\u027C\u027A\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D"+
		"\u0280\x03\x02\x02\x02\u027E\u027C\x03\x02\x02\x02\u027F\u0281\x07\x0F"+
		"\x02\x02\u0280\u027F\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281"+
		"\u0282\x03\x02\x02\x02\u0282\u0283\x07\f\x02\x02\u0283\u0284\x03\x02\x02"+
		"\x02\u0284\u0286\bJ\x03\x02\u0285\u0273\x03\x02\x02\x02\u0285\u0278\x03"+
		"\x02\x02\x02\u0286\u0287\x03\x02\x02\x02\u0287\u0288\bJ\x04\x02\u0288"+
		"\u0289\x03\x02\x02\x02\u0289\u028A\bJ\x05\x02\u028A\x94\x03\x02\x02\x02"+
		"\u028B\u028D\t\x11\x02\x02\u028C\u028B\x03\x02\x02\x02\u028D\u028E\x03"+
		"\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F"+
		"\u0290\x03\x02\x02\x02\u0290\u0291\bK\x06\x02\u0291\u0292\x03\x02\x02"+
		"\x02\u0292\u0293\bK\x05\x02\u0293\x96\x03\x02\x02\x02\u0294\u0298\x07"+
		"%\x02\x02\u0295\u0297\n\x15\x02\x02\u0296\u0295\x03\x02\x02\x02\u0297"+
		"\u029A\x03\x02\x02\x02\u0298\u0296\x03\x02\x02\x02\u0298\u0299\x03\x02"+
		"\x02\x02\u0299\u029B\x03\x02\x02\x02\u029A\u0298\x03\x02\x02\x02\u029B"+
		"\u029C\bL\x07\x02\u029C\x98\x03\x02\x02\x02\u029D\u029E\x07*\x02\x02\u029E"+
		"\u029F\bM\b\x02\u029F\x9A\x03\x02\x02\x02\u02A0\u02A1\x07+\x02\x02\u02A1"+
		"\u02A2\bN\t\x02\u02A2\x9C\x03\x02\x02\x02\u02A3\u02A4\x07}\x02\x02\u02A4"+
		"\u02A5\bO\n\x02\u02A5\x9E\x03\x02\x02\x02\u02A6\u02A7\x07\x7F\x02\x02"+
		"\u02A7\u02A8\bP\v\x02\u02A8\xA0\x03\x02\x02\x02\u02A9\u02AA\x07]\x02\x02"+
		"\u02AA\u02AB\bQ\f\x02\u02AB\xA2\x03\x02\x02\x02\u02AC\u02AD\x07_\x02\x02"+
		"\u02AD\u02AE\bR\r\x02\u02AE\xA4\x03\x02\x02\x02\u02AF\u02B0\v\x02\x02"+
		"\x02\u02B0\u02B1\x03\x02\x02\x02\u02B1\u02B2\bS\x07\x02\u02B2\xA6\x03"+
		"\x02\x02\x028\x02\u01B0\u01B8\u01BD\u01C2\u01C4\u01CA\u01CD\u01D3\u01D6"+
		"\u01D8\u01DD\u01E3\u01EA\u01EC\u01F0\u01F5\u01F7\u01FA\u01FF\u0204\u0209"+
		"\u020C\u020F\u0211\u0214\u0217\u021A\u021D\u021F\u0226\u0229\u022C\u022F"+
		"\u0232\u0234\u023D\u0240\u0243\u0246\u0249\u024B\u0256\u0258\u0265\u0267"+
		"\u026D\u0270\u0275\u027C\u0280\u0285\u028E\u0298\x0E\x03J\x02\x03J\x03"+
		"\x03J\x04\x02\x03\x02\x03K\x05\b\x02\x02\x03M\x06\x03N\x07\x03O\b\x03"+
		"P\t\x03Q\n\x03R\v";
	public static readonly _serializedATN: string = Utils.join(
		[
			Python2Lexer._serializedATNSegment0,
			Python2Lexer._serializedATNSegment1
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Python2Lexer.__ATN) {
			Python2Lexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Python2Lexer._serializedATN));
		}

		return Python2Lexer.__ATN;
	}

}

