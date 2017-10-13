import { logger } from "@atomist/automation-client/internal/util/logger";
import { File } from "@atomist/automation-client/project/File";
import { FileParser } from "@atomist/automation-client/tree/ast/FileParser";
import { fillInEmptyNonTerminalValues } from "@atomist/tree-path/manipulation/enrichment";
import { TreeNode } from "@atomist/tree-path/TreeNode";
import { ANTLRInputStream, CommonTokenStream, Lexer, Parser, TokenStream } from "antlr4ts";
import { JavaLexer } from "./java/antlr-gen/JavaLexer";
import { TreeBuildingListener } from "./TreeBuildingListener";

/**
 * Generic FileParser implementation based on an ANTLR grammars.
 */
export class AntlrFileParser implements FileParser {

    /**
     * Create a generic FileParser using an ANTLR grammar.
     * Use like this, passing in the lexer and parser classes:
     * const p = new AntlrFileParser("compilationUnit", JavaLexer, JavaParser);
     * @param {string} rootName name of top level production.
     * @param {{new(is: ANTLRInputStream) => Lexer}} generated lexer class
     * @param {{new(ts: TokenStream) => Parser}} generated parser class
     */
    constructor(public rootName: string,
                private lexerClass: { new(is: ANTLRInputStream): Lexer },
                private parserClass: { new(ts: TokenStream): Parser }) {
    }

    public toAst(f: File): Promise<TreeNode> {
        return f.getContent()
            .then(content => {
                logger.debug("Parsing file [%s] using ANTLR grammar", f.path);
                const inputStream = new ANTLRInputStream(content);
                const lexer = new JavaLexer(inputStream);
                const tokenStream = new CommonTokenStream(lexer);
                const parser = new this.parserClass(tokenStream);
                const mbl = new TreeBuildingListener(
                    i => (this.parserClass as any).ruleNames[i],
                    i => (this.lexerClass as any)._SYMBOLIC_NAMES[i]);
                parser.addParseListener(mbl);
                (parser as any)[this.rootName]();
                // logger.debug(cu.toStringTree());
                fillInEmptyNonTerminalValues(mbl.root, content);
                return mbl.root;
            });
    }
}
