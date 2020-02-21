
import { FileParser } from "../../../../FileParser";
import { AntlrFileParser } from "../AntlrFileParser";

import { JavaLexer } from "./antlr-gen/JavaLexer";
import { JavaParser } from "./antlr-gen/JavaParser";

import { Java9Lexer } from "./antlr-gen/Java9Lexer";
import { Java9Parser } from "./antlr-gen/Java9Parser";

/**
 * ANTLR-based parser for Java files. Also serves as an example of
 * how to integrate with ANTLR.
 */
export const JavaFileParser: FileParser =
    new AntlrFileParser("compilationUnit", JavaLexer, JavaParser);

/**
 * newer ANTLR-based parser for Java files. Also serves as an example of
 * how to integrate with ANTLR.
 */
export const Java9FileParser: FileParser =
    new AntlrFileParser("compilationUnit", Java9Lexer, Java9Parser);
