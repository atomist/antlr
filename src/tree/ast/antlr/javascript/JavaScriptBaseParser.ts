import { TokenStream, Token, Parser } from "antlr4ts";
import { JavaScriptParser } from "./JavaScriptParser"

// class Parser {
//     public constructor(public input: TokenStream) {
//     }
// }

/**
 * All parser methods that used in grammar (p, prev, notLineTerminator, etc.)
 * should start with lower case char similar to parser rules.
 */
class JavaScriptBaseParser extends Parser {
    public constructor(public input: TokenStream) {
        super(input);
    }

    /**
     * Short form for prev(String str)
     */
    protected p(str: string): boolean {
        return this.prev(str);
    }

    /**
     * Whether the previous token value equals to @param str
     */
    protected prev(str: string): boolean {
        return this.input.LT(-1).getText().equals(str);
    }

    protected notLineTerminator(): boolean {
        return !this.here(JavaScriptParser.LineTerminator);
    }

    protected notOpenBraceAndNotFunction(): boolean {
        const nextTokenType: number = this.input.LT(1).getType();
        return nextTokenType != JavaScriptParser.OpenBrace && nextTokenType != JavaScriptParser.Function;
    }

    protected closeBrace(): boolean {
        return this.input.LT(1).getType() == JavaScriptParser.CloseBrace;
    }

    /**
     * Returns {@code true} iff on the current index of the parser's
     * token stream a token of the given {@code type} exists on the
     * {@code HIDDEN} channel.
     *
     * @param type
     *         the type of the token on the {@code HIDDEN} channel
     *         to check.
     *
     * @return {@code true} iff on the current index of the parser's
     * token stream a token of the given {@code type} exists on the
     * {@code HIDDEN} channel.
     */
    protected here(type: number): boolean {

        // Get the token ahead of the current index.
        const possibleIndexEosToken: number = this.getCurrentToken().getTokenIndex() - 1;
        const ahead: Token = this.input.get(possibleIndexEosToken);

        // Check if the token resides on the HIDDEN channel and if it's of the
        // provided type.
        return (ahead.getChannel() == Lexer.HIDDEN) && (ahead.getType() == type);
    }

    /**
     * Returns {@code true} iff on the current index of the parser's
     * token stream a token exists on the {@code HIDDEN} channel which
     * either is a line terminator, or is a multi line comment that
     * contains a line terminator.
     *
     * @return {@code true} iff on the current index of the parser's
     * token stream a token exists on the {@code HIDDEN} channel which
     * either is a line terminator, or is a multi line comment that
     * contains a line terminator.
     */
    protected lineTerminatorAhead(): boolean {

        // Get the token ahead of the current index.
        const possibleIndexEosToken: number = this.getCurrentToken().getTokenIndex() - 1;
        const ahead: Token = input.get(possibleIndexEosToken);

        if (ahead.getChannel() != Lexer.HIDDEN) {
            // We're only interested in tokens on the HIDDEN channel.
            return false;
        }

        if (ahead.getType() == JavaScriptParser.LineTerminator) {
            // There is definitely a line terminator ahead.
            return true;
        }

        if (ahead.getType() == JavaScriptParser.WhiteSpaces) {
            // Get the token ahead of the current whitespaces.
            possibleIndexEosToken = this.getCurrentToken().getTokenIndex() - 2;
            ahead = input.get(possibleIndexEosToken);
        }

        // Get the token's text and type.
        const text: string = ahead.getText();
        const type: number = ahead.getType();

        // Check if the token is, or contains a line terminator.
        return (type == JavaScriptParser.MultiLineComment && (text.contains("\r") || text.contains("\n"))) ||
            (type == JavaScriptParser.LineTerminator);
    }
}
