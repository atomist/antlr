import { FileParser } from "@atomist/automation-client";
import { AntlrFileParser } from "../AntlrFileParser";
import { JavaLexer } from "./antlr-gen/JavaLexer";
import { JavaParser } from "./antlr-gen/JavaParser";

/**
 * ANTLR-based parser for Java files. Also serves as an example of
 * how to integrate with ANTLR.
 * @type {{rootName: string; toAst: ((f: File) => Promise<TreeNode>)}}
 */
export const JavaFileParser: FileParser =
    new AntlrFileParser("compilationUnit", JavaLexer, JavaParser);
