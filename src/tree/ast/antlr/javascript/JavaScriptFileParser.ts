import { FileParser } from "@atomist/automation-client/tree/ast/FileParser";
import { AntlrFileParser } from "../AntlrFileParser";
import { JavaScriptLexer } from "./antlr-gen/JavaScriptLexer";
import { JavaScriptParser } from "./antlr-gen/JavaScriptParser";

/**
 * ANTLR-based parser for Java files. Also serves as an example of
 * how to integrate with ANTLR.
 * @type {{rootName: string; toAst: ((f: File) => Promise<TreeNode>)}}
 */
export const JavascriptFileParser: FileParser =
  new AntlrFileParser("compilationUnit", JavaScriptLexer, JavaScriptParser);
