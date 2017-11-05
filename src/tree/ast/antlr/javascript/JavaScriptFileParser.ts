import { FileParser } from "@atomist/automation-client/tree/ast/FileParser";
import { AntlrFileParser } from "../AntlrFileParser";
import { JavaLexer } from "./antlr-gen/JavascriptLexer";
import { JavaParser } from "./antlr-gen/JavascriptParser";

/**
 * ANTLR-based parser for Java files. Also serves as an example of
 * how to integrate with ANTLR.
 * @type {{rootName: string; toAst: ((f: File) => Promise<TreeNode>)}}
 */
export const JavascriptFileParser: FileParser =
  new AntlrFileParser("compilationUnit", JavascriptLexer, JavascriptParser);
